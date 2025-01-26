/**
 * @fileoverview Support for "sticky" machines and commands that drive them
 * @author Jeff Parsons <Jeff@pcjs.org>
 * @copyright © 2012-2025 Jeff Parsons
 * @license MIT <https://www.pcjs.org/LICENSE.txt>
 *
 * This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
 */

/**
 * addStickyMachine(idMachine, sPosition)
 *
 * If a machine is defined with a 'sticky' property, then the page containing that machine should
 * also contain a call this function.  Technically, the 'sticky' property's value should also be passed
 * via sPosition, but since the only page position we currently support is "top", callers are currently
 * omitting it, and "top" is simply assumed.
 *
 * TODO: Do something intelligent if sPosition is NOT omitted and is NOT "top".
 *
 * @param {string} idMachine
 * @param {string} [sPosition] (if omitted, "top" is assumed)
 */
function addStickyMachine(idMachine, sPosition)
{
    let topMachine = -1;
    let prevOnScroll = window.onscroll;
    window.onscroll = function() {
        /*
         * TODO: Determine if/when we can cache the machine and machineSibling elements; we already
         * know we can't cache them when addStickyMachine() is first called, because that currently
         * happens before embed.js replaces the placeholder machine <div> with the real machine <div>.
         *
         * Placement of the addStickyMachine() call is irrelevant, because embed.js asynchronously
         * reads all the XML files that define the machine *before* replacing the <div>.
         */
        let machine = document.getElementById(idMachine);
        if (machine) {
            let machineSibling = machine.nextElementSibling;
            if (machineSibling) {
                if (topMachine < 0) {
                    topMachine = findTop(machine);
                }
                /*
                 * There was a problem with this code on iOS devices using mobile Safari: when the page is
                 * scrolled and the class of the machine <div> is changed the FIRST time from 'machine-floating'
                 * to 'machine-sticky', the entire <div> -- with the exception of the canvas inside it -- disappears
                 * until you lift your finger or the scrolling stops.
                 *
                 * The fix, according to http://stackoverflow.com/questions/32875046/ios-9-safari-changing-an-element-to-fixed-position-while-scrolling-wont-paint,
                 * is to add a "transform: translateZ(0)", or alternatively "transform: translate3d(0px,0px,0px)",
                 * to the machine <div> first.  Note that before I added that, the problem also seemed to be exacerbated
                 * by my attempt to remove any pre-existing 'machine-floating' or 'machine-sticky' class separately, which
                 * is why I now have redundant replace() calls below, updating the style in one step instead of two.
                 */
                machine.style.transform = "translateZ(0)";
                if (window.pageYOffset <= topMachine) {
                    if (machineSibling) machineSibling.style.paddingTop = 0;
                    machine.className = 'machine-floating ' + machine.className.replace(/machine-(floating|sticky) /g, '');
                } else {
                    if (machineSibling) machineSibling.style.paddingTop = (machine.offsetHeight + 8) + 'px';
                    machine.className = 'machine-sticky ' + machine.className.replace(/machine-(floating|sticky) /g, '');
                }
                if (prevOnScroll) prevOnScroll();
            }
        }
    };
}

/**
 * findTop(element)
 *
 * @param {HTMLElement} element
 */
function findTop(element)
{
    let curTop = 0;
    if (typeof element.offsetParent != 'undefined' && element.offsetParent) {
        while (element.offsetParent) {
            curTop += element.offsetTop;
            element = element.offsetParent;
        }
        curTop += element.offsetTop;
    }
    else if (element['y']) {
        curTop += element['y'];
    }
    return curTop;
}
