/**
 * @fileoverview Implements the Monitor device
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

import Device  from "./device.js";
import MESSAGE from "./message.js";
import WebIO   from "./webio.js";

/**
 * @typedef {Config} MonitorConfig
 * @property {number} monitorWidth
 * @property {number} monitorHeight
 */

/**
 * @class Monitor
 * @unrestricted
 * @property {MonitorConfig} config
 */
export default class Monitor extends Device {
    /**
     * Monitor(idMachine, idDevice, config)
     *
     * The Monitor component manages the container representing the machine's display device.  The most
     * important config properties include:
     *
     *      monitorWidth: width of the monitor canvas, in pixels
     *      monitorHeight: height of the monitor canvas, in pixels
     *      monitorColor: background color of the monitor canvas (default is black)
     *      monitorRotate: the amount of counter-clockwise monitor rotation required (eg, -90 or 270)
     *      aspectRatio (eg, 1.33)
     *
     * NOTE: I originally wanted to call this the Screen device, but alas, the browser world has co-opted that
     * name, so I had to settle for Monitor instead (I had also considered Display, but that seemed too generic).
     *
     * Monitor is probably a better choice anyway, because that allows us to clearly differentiate between the
     * "host display" (which involves the browser's page, document, window, or screen, depending on the context)
     * and the "guest display", which I now try to consistently refer to as the Monitor.
     *
     * There are still terms of art that can muddy the waters; for example, many video devices support the concept
     * of "off-screen memory", and sure, I could call that "off-monitor memory", but let's not get carried away.
     *
     * @this {Monitor}
     * @param {string} idMachine
     * @param {string} idDevice
     * @param {ROMConfig} [config]
     */
    constructor(idMachine, idDevice, config)
    {
        super(idMachine, idDevice, config);

        let sProp, sEvent;
        let monitor = this;

        this.touchType = this.config['touchType'];
        this.diagnostics = this.config['diagnostics'];

        this.cxMonitor = this.config['monitorWidth'] || 640;
        this.cyMonitor = this.config['monitorHeight'] || 480;

        this.monitor = this.bindings[Monitor.BINDING.MONITOR];
        if (this.monitor) {
            /**
             * Making sure the monitor had a "tabindex" attribute seemed like a nice way of ensuring we
             * had a single focusable surface that we could pass to our Input device, but that would be too
             * simple.  Safari once again bites us in the butt, just like it did when we tried to add the
             * "contenteditable" attribute to the canvas: painting slows to a crawl.
             *
             *      this.monitor.setAttribute("tabindex", "0");
             */
        } else {
            throw new Error("unable to find binding: " + Monitor.BINDING.MONITOR);
        }
        this.container = this.findBinding(Monitor.BINDING.CONTAINER) || this.monitor;

        /**
         * Create the Monitor canvas if we weren't given a predefined canvas; we'll assume that an existing
         * canvas is already contained within the monitor.
         */
        let canvas = this.bindings[Monitor.BINDING.SURFACE];
        if (!canvas) {
            canvas = document.createElement("canvas");
            let id = this.getBindingID(Monitor.BINDING.SURFACE);
            if (id) {
                this.bindings[id] = canvas;
                canvas.setAttribute("id", id);
            }
            canvas.setAttribute("class", "pcjs-surface");
            canvas.setAttribute("width", this.config['monitorWidth']);
            canvas.setAttribute("height", this.config['monitorHeight']);
            canvas.style.backgroundColor = this.config['monitorColor'] || "black";
            this.monitor.appendChild(canvas);
        }
        this.canvasMonitor = canvas;

        /**
         * The "contenteditable" attribute on a canvas is a simple way of creating a display surface that can
         * also receive focus and generate input events.  Unfortunately, in Safari, that attribute NOTICEABLY
         * slows down canvas operations whenever it has focus.  All you have to do is click away from the canvas,
         * and drawing speeds up, then click back on the canvas, and drawing slows down.  So we now rely on a
         * "transparent textarea" solution (see below).
         *
         *      canvas.setAttribute("contenteditable", "true");
         */

        let context = canvas.getContext("2d");
        this.contextMonitor = context;

        /**
         * HACK: A canvas style of "auto" provides for excellent responsive canvas scaling in EVERY browser
         * except IE9/IE10, so I recalculate the appropriate CSS height every time the parent div is resized;
         * IE11 works without this hack, so we take advantage of the fact that IE11 doesn't identify as "MSIE".
         *
         * The other reason it's good to keep this particular hack limited to IE9/IE10 is that most other
         * browsers don't actually support an 'resize' handler on anything but the window object.
         */
        if (this.isUserAgent("MSIE")) {
            this.monitor['onresize'] = function(parentElement, childElement, cx, cy) {
                return function onResizeScreen() {
                    childElement.style.height = (((parentElement.clientWidth * cy) / cx) | 0) + "px";
                };
            }(this.monitor, canvas, this.config['monitorWidth'], this.config['monitorHeight']);
            this.monitor['onresize']();
        }

        /**
         * The following is a related hack that allows the user to force the monitor to use a particular aspect
         * ratio if an 'aspect' attribute or URL parameter is set.  Initially, it's just for testing purposes
         * until we figure out a better UI.  And note that we use our onPageEvent() helper function to make sure
         * we don't trample any other 'resize' handler(s) attached to the window object.
         */
        let aspect = +(this.config['aspect'] || WebIO.getURLParms()['aspect']);

        /**
         * No 'aspect' parameter yields NaN, which is falsey, and anything else must satisfy my arbitrary
         * constraints of 0.3 <= aspect <= 3.33, to prevent any useless (or worse, browser-blowing) results.
         */
        if (aspect && aspect >= 0.3 && aspect <= 3.33) {
            this.onPageEvent('resize', function(parentElement, childElement, aspectRatio) {
                return function onResizeWindow() {
                    /**
                     * Since aspectRatio is the target width/height, we have:
                     *
                     *      parentElement.clientWidth / childElement.style.height = aspectRatio
                     *
                     * which means that:
                     *
                     *      childElement.style.height = parentElement.clientWidth / aspectRatio
                     *
                     * so for example, if aspectRatio is 16:9, or 1.78, and clientWidth = 640,
                     * then the calculated height should approximately 360.
                     */
                    childElement.style.height = ((parentElement.clientWidth / aspectRatio)|0) + "px";
                };
            }(this.monitor, canvas, aspect));
            window['onresize']();
        }

        /**
         * Here's the gross code to handle full-screen support across all supported browsers.  Most of the crud is
         * now buried inside findProperty(), which checks for all the browser prefix variations (eg, "moz", "webkit")
         * and deals with certain property name variations, like 'Fullscreen' (new) vs 'FullScreen' (old).
         */
        this.machine.isFullScreen = false;
        this.fullScreen = this.fullScreenStyle = false;
        let button = this.bindings[Monitor.BINDING.FULLSCREEN];
        if (button) {
            sProp = this.findProperty(this.container, 'requestFullscreen');
            if (sProp) {
                this.container.doFullScreen = this.container[sProp];
                this.fullScreen = true;
                this.fullScreenStyle = document.fullscreenEnabled || this.isUserAgent("Edge/");
                sEvent = this.findProperty(document, 'on', 'fullscreenchange');
                if (sEvent) {
                    let sFullScreen = this.findProperty(document, 'fullscreenElement');
                    document.addEventListener(sEvent, function onFullScreenChange() {
                        monitor.onFullScreen(document[sFullScreen] != null);
                    }, false);
                }
                sEvent = this.findProperty(document, 'on', 'fullscreenerror');
                if (sEvent) {
                    document.addEventListener(sEvent, function onFullScreenError() {
                        monitor.onFullScreen();
                    }, false);
                }
            } else {
                this.printf("Full-screen API not available\n");
                button.parentNode.removeChild(/** @type {Node} */ (button));
            }
        }

        /**
         * The 'touchType' config property can be set to true for machines that require a full keyboard.  If set,
         * we create a transparent textarea "overlay" on top of the canvas and provide it to the Input device
         * via addSurface(), making it easy for the user to activate the on-screen keyboard for touch-type devices.
         *
         * The parent div must have a style of "position:relative", so that we can position the textarea using
         * "position:absolute" with "top" and "left" coordinates of zero.  And we don't want the textarea to be
         * visible, but we must use "opacity:0" instead of "visibility:hidden", because the latter seems to
         * prevent the element from receiving events.
         *
         * All these styling requirements are resolved by using CSS class "pcjs-surface" for the parent div and
         * CSS class "pcjs-overlay" for the textarea.
         *
         * Having the textarea can serve other useful purposes as well, such as providing a place for us to echo
         * diagnostic messages, and it solves the Safari performance problem I observed (see above).  Unfortunately,
         * it creates new challenges, too.  For example, textareas can cause certain key combinations, like "Alt-E",
         * to be withheld as part of the browser's support for multi-key character composition.  So I may have to
         * alter which element on the page gets focus depending on the platform or other factors.
         *
         * Why do we ALSO create an overlay if fullScreen support is requested ONLY on non-iOS devices?  Because
         * we generally always need a surface for capturing keyboard events on desktop devices, whereas you're
         * supposed to use 'touchType' if you really need keyboard events on iOS devices (ie, we don't want the
         * iPhone or iPad soft keyboard popping up unnecessarily).
         */
        let textarea;
        if (this.touchType || this.diagnostics || this.fullScreen && !this.isUserAgent("iOS")) {
            textarea = document.createElement("textarea");
            let id = this.getBindingID(Monitor.BINDING.OVERLAY);
            if (id) {
                this.bindings[id] = textarea;
                textarea.setAttribute("id", id);
            }
            textarea.setAttribute("class", "pcjs-overlay");
            /**
             * The soft keyboard on an iOS device tends to pop up with the SHIFT key depressed, which is not the
             * initial keyboard state we prefer, so hopefully turning off these "auto" attributes will help.
             */
            if (this.isUserAgent("iOS")) {
                this.disableAuto(textarea);
                /**
                 * One of the problems on iOS devices is that after a soft-key control is clicked, we need to give
                 * focus back to the above textarea, usually by calling cmp.updateFocus(), but in doing so, iOS may
                 * also "zoom" the page rather jarringly.  While it's a simple matter to completely disable zooming,
                 * by fiddling with the page's viewport, that prevents the user from intentionally zooming.  A bit of
                 * Googling reveals that another way to prevent those jarring unintentional zooms is to simply set the
                 * font-size of the text control to 16px.  So that's what we do.
                 */
                textarea.style.fontSize = "16px";
            }
            this.monitor.appendChild(textarea);
        }

        /**
         * If there's an Input device, make sure it is associated with our default input surface.
         */
        this.input = /** @type {Input} */ (this.findDeviceByClass("Input", false));
        if (this.input) {
            this.input.addSurface(textarea || this.monitor, this.findBinding(this.config['focusBinding'], true));
        }

        /**
         * These variables are here in case we want/need to add support for borders later...
         */
        this.xMonitorOffset = this.yMonitorOffset = 0;
        this.cxMonitorOffset = this.cxMonitor;
        this.cyMonitorOffset = this.cyMonitor;

        /**
         * Support for disabling (or, less commonly, enabling) image smoothing, which all browsers
         * seem to support now (well, OK, I still have to test the latest MS Edge browser), despite
         * it still being labelled "experimental technology".  Let's hope the browsers standardize
         * on this.  I see other options emerging, like the CSS property "image-rendering: pixelated"
         * that's apparently been added to Chrome.  Sigh.
         */
        let fSmoothing = this.config['smoothing'];
        let sSmoothing = WebIO.getURLParms()['smoothing'];
        if (sSmoothing) fSmoothing = (sSmoothing == "true");
        this.fSmoothing = fSmoothing;
        this.sSmoothing = this.findProperty(context, 'imageSmoothingEnabled');

        this.rotateMonitor = this.config['monitorRotate'];
        if (this.rotateMonitor) {
            this.rotateMonitor = this.rotateMonitor % 360;
            if (this.rotateMonitor > 0) this.rotateMonitor -= 360;
            /**
             * TODO: Consider also disallowing any rotateMonitor value if bufferRotate was already set; setting
             * both is most likely a mistake, but who knows, maybe someone wants to use both for 180-degree rotation?
             */
            if (this.rotateMonitor != -90) {
                this.printf("unsupported monitor rotation: %d\n", this.rotateMonitor);
                this.rotateMonitor = 0;
            } else {
                context.translate(0, this.cyMonitor);
                context.rotate((this.rotateMonitor * Math.PI)/180);
                context.scale(this.cyMonitor/this.cxMonitor, this.cxMonitor/this.cyMonitor);
            }
        }
    }

    /**
     * addBinding(binding, element)
     *
     * @this {Monitor}
     * @param {string} binding
     * @param {Element} element
     */
    addBinding(binding, element)
    {
        let monitor = this;

        switch(binding) {
        case Monitor.BINDING.FULLSCREEN:
            element.onclick = function onClickFullScreen() {
                /**
                 * I've encountered situations in Safari on iPadOS where full-screen mode was cancelled without
                 * notification via onFullScreen() (eg, diagnostic printf() calls that used to inadvertently change
                 * focus), so we'd mistakenly think we were still full-screen.
                 *
                 * print() attempts to avoid focus changes on "iOS" devices now, but the following sanity check
                 * still seems worthwhile.
                 */
                monitor.machine.isFullScreen = (window.outerHeight - window.innerHeight <= 1);
                if (!monitor.machine.isFullScreen) {
                    monitor.doFullScreen();
                } else {
                    if (Monitor.DEBUG) monitor.printf(MESSAGE.MONITOR, "onClickFullScreen(): already full-screen?\n");
                }
            };
            break;
        }
        super.addBinding(binding, element);
    }

    /**
     * blankMonitor()
     *
     * @this {Monitor}
     */
    blankMonitor()
    {
        if (this.contextMonitor) {
            this.contextMonitor.fillStyle = "black";
            this.contextMonitor.fillRect(0, 0, this.canvasMonitor.width, this.canvasMonitor.height);
        }
    }

    /**
     * doFullScreen()
     *
     * @this {Monitor}
     * @returns {boolean} true if request successful, false if not (eg, failed OR not supported)
     */
    doFullScreen()
    {
        let fSuccess = false;
        if (Monitor.DEBUG) this.printf(MESSAGE.MONITOR, "doFullScreen()\n");
        if (this.container && this.container.doFullScreen) {
            /**
             * Styling the container with a width of "100%" and a height of "auto" works great when the aspect ratio
             * of our virtual monitor is at least roughly equivalent to the physical screen's aspect ratio, but now that
             * we support virtual VGA monitors with an aspect ratio of 1.33, that's very much out of step with modern
             * wide-screen monitors, which usually have an aspect ratio of 1.6 or greater.
             *
             * And unfortunately, none of the browsers I've tested appear to make any attempt to scale our container to
             * the physical screen's dimensions, so the bottom of our monitor gets clipped.  To prevent that, I reduce
             * the width from 100% to whatever percentage will accommodate the entire height of the virtual monitor.
             *
             * NOTE: Mozilla recommends both a width and a height of "100%", but all my tests suggest that using "auto"
             * for height works equally well, so I'm sticking with it, because "auto" is also consistent with how I've
             * implemented a responsive canvas when the browser window is being resized.
             */
            let sWidth = "100%";
            let sHeight = "auto";
            if (screen && screen.width && screen.height) {
                let aspectPhys = screen.width / screen.height;
                let aspectVirt = this.cxMonitor / this.cyMonitor;
                if (aspectPhys > aspectVirt) {
                    sWidth = Math.round(aspectVirt / aspectPhys * 100) + '%';
                }
                // TODO: We may need to someday consider the case of a physical screen with an aspect ratio < 1.0....
            }
            if (!this.fullScreenStyle) {
                this.container.style.width = sWidth;
                this.container.style.height = sHeight;
            } else {
                /**
                 * Sadly, the above code doesn't work for Firefox (nor for Chrome, as of Chrome 75 or so), because as
                 * http://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode explains:
                 *
                 *      'It's worth noting a key difference here between the Gecko and WebKit implementations at this time:
                 *      Gecko automatically adds CSS rules to the element to stretch it to fill the screen: "width: 100%; height: 100%".
                 *
                 * Which would be OK if Gecko did that BEFORE we're called, but apparently it does that AFTER, effectively
                 * overwriting our careful calculations.  So we style the inner element (canvasMonitor) instead, which
                 * requires even more work to ensure that the canvas is properly centered.  FYI, this solution is consistent
                 * with Mozilla's recommendation for working around their automatic CSS rules:
                 *
                 *      '[I]f you're trying to emulate WebKit's behavior on Gecko, you need to place the element you want
                 *      to present inside another element, which you'll make fullscreen instead, and use CSS rules to adjust
                 *      the inner element to match the appearance you want.'
                 */
                this.canvasMonitor.style.width = sWidth;
                this.canvasMonitor.style.height = sHeight;
                this.canvasMonitor.style.display = "block";
                this.canvasMonitor.style.margin = "auto";
            }
            this.prevBackgroundColor = this.container.style.backgroundColor;
            this.container.style.backgroundColor = "black";
            this.container.doFullScreen();
            if (this.input) this.input.setAltFocus(true);
            fSuccess = true;
        }
        return fSuccess;
    }

    /**
     * onFullScreen(fFullScreen)
     *
     * @this {Monitor}
     * @param {boolean} [fFullScreen] (undefined if there was a full-screen error)
     */
    onFullScreen(fFullScreen)
    {
        this.machine.isFullScreen = true;
        if (!fFullScreen) {
            if (this.container) {
                if (!this.fullScreenStyle) {
                    this.container.style.width = this.container.style.height = "";
                } else {
                    this.canvasMonitor.style.width = this.canvasMonitor.style.height = "";
                }
                if (this.prevBackgroundColor) this.container.style.backgroundColor = this.prevBackgroundColor;
            }
            this.machine.isFullScreen = false;
        }
        if (this.input && !fFullScreen) this.input.setAltFocus(false);
        if (Monitor.DEBUG) this.printf(MESSAGE.MONITOR, "onFullScreen(%b)\n", fFullScreen);
    }

    /**
     * onPower(on)
     *
     * Called by the Machine device to provide notification of a power event.
     *
     * @this {Monitor}
     * @param {boolean} on (true to power on, false to power off)
     */
    onPower(on)
    {
        if (on) {
            this.initCache();
            this.updateScreen();
        } else {
            this.blankMonitor();
        }
    }

    /**
     * onReset()
     *
     * Called by the Machine device to provide notification of a reset event.
     *
     * @this {Monitor}
     */
    onReset()
    {
        this.blankMonitor();
    }
}

Monitor.BINDING = {
    CONTAINER:  "container",
    SURFACE:    "surface",
    MONITOR:    "monitor",
    OVERLAY:    "overlay",
    FULLSCREEN: "fullScreen",
};

Monitor.CLASSES["Monitor"] = Monitor;
