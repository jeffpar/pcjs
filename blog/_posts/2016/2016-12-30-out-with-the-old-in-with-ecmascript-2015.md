---
layout: post
title: Out With The Old, In with ECMAScript 2015
date: 2016-12-30 23:00:00
permalink: /blog/2016/12/30/
---

As 2016 was drawing to a close, browser support for ECMAScript 2015 (aka ES6) was looking pretty good,
so maybe it was time to start taking advantage of a few ES6 features, especially:

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- *[const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)* and *[let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)*
- [Computed Properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)
- [Octal and Binary Constants](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Numeric_literals)
- [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) (with [String Interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Expression_interpolation))

Of the four types of machines (and CPUs) that PCjs currently supports:

- C1Pjs (6502)
- PCx86 (8086 through 80386)
- PCx80 (8080)
- PDPjs (PDP-11)

I decided to start by updating the code for the two newest machines: PDPjs and PCx80.

The single biggest change was the switch to ES6 classes.  Fortunately, since PCjs machines were already using a class-like
object hierarchy for all their components, all I had to do was select each of my *constructor* functions in the WebStorm IDE
and tell it to convert the constructor to a class; for example:

```javascript
/**
 * BusPDP11(parmsBus, cpu, dbg)
 *
 * @constructor
 * @extends Component
 * @param {Object} parmsBus
 * @param {CPUStatePDP11} cpu
 * @param {DebuggerPDP11} dbg
 */
function BusPDP11(parmsBus, cpu, dbg)
{
    // ...
}
```

would become:

```javascript
class BusPDP11 extends Component {
    /**
     * BusPDP11(parmsBus, cpu, dbg)
     *
     * @param {Object} parmsBus
     * @param {CPUStatePDP11} cpu
     * @param {DebuggerPDP11} dbg
     */
    constructor(parmsBus, cpu, dbg)
    {
        super("Bus", parmsBus, BusPDP11, MessagesPDP11.BUS);
        // ...
    }
    // ...
}
```

However, I still had considerable work to do.  For starters, WebStorm didn't detect any of the subclasses, despite all
the `@extends` annotations, so I had to manually add the *extends* keyword.

Next, each of my subclass constructors would explicitly call their superclass constructor to initialize all the
superclass properties, so all those calls had to be replaced with calls to *super()*.  It's also worth noting that
*super()* must be called BEFORE you attempt to access any class properties, because *this* will not be available
until all the superclasses have been initialized.  In the ES5 world, *this* is always available.

Finally, when I ran all the converted code through Google's Closure Compiler, I got a MASSIVE number of errors, nearly
all of which were due to properties being added to the class instance, via *this*, which had not been defined in the
constructor.  It was only after spending several hours updating all my constructors to initialize every property that
the class would ever use that I discovered that that wasn't strictly necessary.

It's long been known that JavaScript engines have an easier time optimizing your code if your objects are static, and
apparently Google's Closure Compiler seized the ES6 opportunity to try to enforce that, by treating classes more like
*structures* than *dictionaries*.  However, you can change that assumption by prefacing a class with the pseudo-[JSDoc](http://usejsdoc.org/)
`@dict` or `@unrestricted` [annotations](https://github.com/google/closure-compiler/wiki/@struct-and-@dict-Annotations);
the default is `@struct`.  Needless to say, when it came time to convert the next machine (PCx80) to classes, I prefaced
all my classes with `@unrestricted`.

One downside of switching to ES6 one machine at a time is that I had to temporarily fork the shared modules into
separate ES5 and ES6 folders.  For example, one of the shared modules, [Component](/machines/modules/v2/component.js),
is the base class underlying most other machine components; ES5 objects *subclass* [Component](/machines/modules/v2/component.js),
whereas ES6 classes *extend* [Component](/machines/modules/v2/component.js).  Not all the shared modules needed to be forked,
but creating a new shared folder was the simplest solution.  Once all the machines have been converted to use ES6 classes,
the new shared modules will become the default, and the old ones will fade away.

A final challenge was deciding how each component should reference its dependencies.  For example, the PDP-11
[Panel](/machines/dec/pdp11/modules/v2/panel.js) component originally included these lines at the top of the script:

```javascript
if (NODE) {
    var str = require("../../../../modules/v2/strlib");
    var web = require("../../../../modules/v2/weblib");
    var DumpAPI = require("../../../../modules/v2/dumpapi");
    var Component = require("../../../../modules/v2/component");
    var State = require("../../../../modules/v2/state");
    var PDP11 = require("./defines");
    var MessagesPDP11 = require("./messages");
}
```

and this worked well for both browsers (where I ensure that the global variable NODE is *false*) and for Node.

Going forward, I thought I should adopt the ES6 solution for declaring imports and exports, using the new *import* and
*export* keywords.  That worked well within the WebStorm environment, which happily recognized all my imports;
for example:

```javascript
import BusPDP11 from "./bus.js";
import MessagesPDP11 from "./messages.js";
import Component from "../../../../modules/v2/component.js";
import State from "../../../../modules/v2/state.js";
import Str from "../../../../modules/v2/strlib.js";
import Web from "../../../../modules/v2/weblib.js";
import { APPCLASS, DEBUG, DEBUGGER, PDP11 } from "./defines.js";
```

but any attempt to load that code into a browser caused an immediate exception, and Node support wasn't any better
(in part because Node depends on Chrome's V8 JavaScript engine).  Apparently, browser support hinges on a new way of
loading JavaScript, using *&lt;module&gt;* tags, and I'm not sure that's been finalized yet, let alone implemented.

Long story short, until this all gets sorted, I'm retaining the `require()` statements, since they make my development
environment happy, and Node still understands them, but I'm no longer wrapping them with `if (NODE)` expressions.  Instead,
I've modified the web server bundled with PCjs to automatically comment out all `import`, `export`, and `require()`
statements from .js files, so that no matter what module syntax is being used, your browser won't see it.
Similarly, before the code is compiled by the Closure Compiler, all those statements are removed by the preprocessing
step.

I'm also taking advantage of the Closure Compiler's ability to "transpile" ES6 code to ES5-compatible code.  Even
though all the browsers that PCjs targets now support the handful of ES6 features I'm using, I have no way of knowing
whether every PCjs user has updated their browser.  I would like to eventually generate ES6 code, because JavaScript
engines should be able to optimize it better, but I will likely wait another year or two, and even then, I will probably
want to include a small pre-loader that checks your browser's capabilities and then loads an ES5 or ES6 version as
appropriate.

Last but not least, does the new ES6 code really work in Node, too?  Happily, it does.  To test, I wrote
a small JavaScript shell app, [pdp11]({{ site.github.pages }}/machines/dec/pdp11/bin/pdp11), which reads a machine XML file
(like [this one](/machines/dec/pdp11/1170/panel/debugger/machine.xml)), simulates the loading and initialization
process that a web browser would perform, and then connects *stdin* and *stdout* to the machine's serial port:

Here's a sample run, from a macOS Terminal window:

	cd modules/pdp11/bin
	node pdp11 --cmd="load ../../../devices/pdp11/machine/1170/panel/debugger/machine.xml"
	Panel object created: test1170.panel
	Device object created: test1170.default
	CPU object created: test1170.cpu
	ROM object created: test1170.m9312
	RAM object created: test1170.ram
	SerialPort object created: test1170.dl11
	PC11 object created: test1170.pc11
	RK11 object created: test1170.rk11
	RL11 object created: test1170.rl11
	Debugger object created: test1170.debugger
	bus: 8Kb H/W at 17760000
	PDPjs v1.x.x
	Copyright © 2012-2016 Jeff Parsons <Jeff@pcjs.org>
	License: MIT <https://www.pcjs.org/LICENSE.txt>
	Portions adapted from the PDP-11/70 Emulator v1.4 by Paul Nankervis <paulnank@hotmail.com>
	bus: 256Kb RAM at 000000
	Net.getResource("https://pdp11-disks.pcjs.org/dec/rk03/RK03-XXDP.json"): unimplemented
	notice: Unable to load disk "RK03-XXDP" (error -1: RK03-XXDP.json)
	Computer object created: test1170.computer
	console connected to machine (alt-r for REPL prompt, alt-x to exit)
	m9312: 512-byte ROM at 165000
	ram: Loaded image "BOOTMON.json"
	pc11: Loaded tape "BOOTSTRAP-16KB"
	cpu: Model 1170
	Type ? for help with PDPjs Debugger commands
	R0=000000 R1=000000 R2=000000 R3=000000 R4=000000 R5=000000 
	SP=000000 PC=140000 PS=000013 PI=000000 SL=000000 T0 N1 Z0 V1 C1 
	140000: 000005                 RESET
	running
	PDP-11 MONITOR V1.0
	
	BOOT> help
	COMMANDS ARE BOOT, HALT, TEST, DIAG, LIGHTS AND HELP
	BOOT DEVICES ARE RK? RL? OR RP?
	BOOT> alt-r detected, starting REPL...
	PDP11> ?
	>> ?
	commands:
	?        help/print
	a [#]    assemble
	b [#]    breakpoint
	c        clear output
	d [#]    dump memory
	e [#]    edit memory
	g [#]    go [to #]
	h        halt
	if       eval expression
	int [#]  request interrupt
	k        stack trace
	ln       list nearest symbol(s)
	m        messages
	p        step over
	print    print expression
	r        dump/set registers
	reset    reset machine
	s        set options
	t [#]    trace
	u [#]    unassemble
	var      assign variable
	ver      print version
	note: history disabled if no exec breakpoints
	.exit    exit REPL and connect console to machine
	false
	PDP11> r
	>> r
	R0=002114 R1=000000 R2=000000 R3=000000 R4=000000 R5=000000 
	SP=137522 PC=140074 PS=000004 PI=000000 SL=000000 T0 N0 Z1 V0 C0 
	140074: 000001                 WAIT 
	false
	PDP11> u
	>> u
	140076: 005200                 INC   R0
	140100: 005767 000014          TST   140120
	140104: 001773                 BEQ   140074
	140106: 012746 054000          MOV   #54000,-(SP)
	140112: 016746 000002          MOV   140120,-(SP)
	140116: 000002                 RTI  
	140120: 000000                 HALT 
	140122: 002225                 BGE   137576
	false
	PDP11> .exit
	console connected to machine (alt-r for REPL prompt, alt-x to exit)
	
	BOOT> 
	BOOT> alt-x detected, exiting...
