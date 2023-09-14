Support for [PDP-11 Machines](/machines/dec/pdp11/) was added to the PCjs Project in 2016.

The PCjs PDP-11 emulator is currently comprised of the following components, as listed in [machines.json](/machines/machines.json) (see the *pdp11.modules* property).
Portions were adapted from the [PDP-11/70 Emulator](http://skn.noip.me/pdp11/pdp11.html) written by Paul Nankervis, with permission.

  - [bus.js](modules/v2/bus.js)
  - [computer.js](modules/v2/computer.js)
  - [cpu.js](modules/v2/cpu.js)
  - [cpuops.js](modules/v2/cpuops.js)
  - [cpustate.js](modules/v2/cpustate.js)
  - [debugger.js](modules/v2/debugger.js)
  - [defines.js](modules/v2/defines.js)
  - [device.js](modules/v2/device.js)
  - [disk.js](modules/v2/disk.js)
  - [drive.js](modules/v2/drive.js)
  - [keyboard.js](modules/v2/keyboard.js)
  - [memory.js](modules/v2/memory.js)
  - [message.js](modules/v2/message.js)
  - [panel.js](modules/v2/panel.js)
  - [pc11.js](modules/v2/pc11.js)
  - [ram.js](modules/v2/ram.js)
  - [rk11.js](modules/v2/rk11.js)
  - [rl11.js](modules/v2/rl11.js)
  - [rx11.js](modules/v2/rx11.js)
  - [rom.js](modules/v2/rom.js)
  - [serial.js](modules/v2/serial.js)

Since this module was written in 2016, it seemed appropriate to start adopting some of the more useful features of
[ECMAScript](http://www.ecma-international.org/ecma-262/6.0/index.html) 2015 (aka ES6), including:

  - Classes
  - *const* and *let*
  - Computed Properties
  - Default Parameters
  - Octal and Binary Constants
  - Template Literals
	- String Interpolation (i.e., ${*expr*})
  - New Built-in Methods
	- String.repeat()
  - *import* and *export*

However, I've still configured the Closure Compiler to "transpile" to ECMAScript 5 (aka ES5), because some people
may still be using older browsers that don't support ES6 -- or at least the subset of ES6 features I'm currently
using.

Eventually, I need to do some performance testing and determine whether the ES6 version performs any faster and/or
consumes fewer resources than the ES5 version.  If it does, then I should either bite the bullet and generate ES6 code,
or generate both versions and use a loader that detects the browser's capabilities and loads the appropriate version.

### Caveats

#### *import* and *export*

With regard to *import* and *export* statements, the main reason I use them is to inform my development environment
(WebStorm) about each file's dependencies, thereby preventing inspection warnings.  And ultimately, I plan to make PDPjs
run as a Node application, so explicitly declaring all imports and exports will be required, but for now, it's just
a web application, so strictly speaking, they're not required.

When loading uncompiled PDPjs files into a web browser, the Node-based web server bundled with PCjs still relies on
the `<script>` tag to load all JavaScript files, and as far as I know, no browser currently knows what to do with the
*import* and *export* keywords under those conditions.  Chrome, for example, will immediately throw an exception when
it encounters a file containing them.

As a work-around, the bundled web server intercepts all requests for .js files and inserts line comments in front of
every *import* and *export* statement, so that your web browser won't barf on them.  The statements are completely
superfluous anyway, since the web server generates `<script>` tags for all the necessary scripts, in the order they are
listed in [machines.json](/machines/machines.json) (see the *pdp11.modules* property).

This work-around assumes that all *export* statements appear AFTER the object they're exporting; e.g.:

	export default ComputerPDP11;

and NOT as part of the object declaration; e.g.:

	export default class ComputerPDP11 extends Component { ... }

{% include gallery/documents.html width="200" height="260" tag="hardware" %}
