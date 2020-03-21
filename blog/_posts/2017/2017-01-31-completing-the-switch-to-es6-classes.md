---
layout: post
title: Completing the Switch to ES6 Classes
date: 2017-01-31 15:00:00
permalink: /blog/2017/01/31/
---

As I [mentioned](/blog/2016/12/30/) last December, I had started converting PCjs machines to ECMAScript 2015, more
conveniently known as ES6.  At the time, only one PCjs machine, [PDPjs]({{ site.github.master }}/machines/dec/pdp11/),
had been converted, which left the website in the unfortunate position of having duplicate shared modules: one set
for ES5-based machines and another set for ES6.

Well, I'm happy to report that today marks the completion of the ES6 conversion, and the return of a single set of
[shared modules]({{ site.github.master }}/machines/shared/lib/).

Admittedly, I was dragging my feet a bit, because the largest and most complex machine emulator,
[PCx86]({{ site.github.master }}/machines/pcx86/), was going to require a fair bit work, not to mention regression testing.
However, after converting three other PCjs machines ([PDP11]({{ site.github.master }}/machines/dec/pdp11/),
[PCx80]({{ site.github.master }}/machines/pcx80/), and [C1Pjs]({{ site.github.master }}/machines/osi/c1p/)), I had become
pretty proficient at the conversion, so I was able to bulldoze my way through all the PCx86 files in a few hours,
and fixing all the Closure Compiler compilation errors only took another hour or so.

It's hard to say whether the conversion was really worth the effort, since I'm still using the Closure Compiler to
transpile the code back to ES5.  Also, since two of the emulators ([PCx86]({{ site.github.master }}/machines/pcx86/bin/)
and [PDP11]({{ site.github.master }}/machines/dec/pdp11/bin/)) can also be launched from the Node command-line,
I've adopted Node's *require()* convention for importing the other scripts as modules, which makes them difficult to load
inside a web browser if you want to test or debug the uncompiled code.

To resolve that, I updated the built-in Node web server to "magically" strip out all the Node-specific stuff before
serving up the individual JavaScript files.  Eventually, I'll change the Node server's page template to use
`<script type="module" .../>` instead of `<script type="text/javascript" .../>`, but that won't happen until all
web browsers support module loading AND Node fully supports *import* and *export* instead of *require()* and
*module.exports*.

I do like the new ES6 class syntax *much* more than the old prototype-based syntax.  We've gone from JavaScript classes
that were like "lipstick on a pig" to classes that are more like "lipstick on a piglet" -- still a pig, but much cuter.

For years, JavaScript fans have been trying to convince us that "prototypal inheritance" was better and more powerful
than traditional class-based inheritance models.  As far as I'm concerned, object prototypes were a hack, and no amount
of after-the-fact rationalizations will convince me that they were actually a thoughtfully designed feature of the
language.  Not to mention the fact that prototype-based classes are tedious to write and unpleasant to look at.

Obviously, I was not alone, because we now have ES6 classes.

Do I still have gripes?  Sure.  My biggest grumble is that I can't easily define class constants; I have to attach them
to the class *after* I finish defining the class, and even then, I can't declare them as *const*.  I guess there are
ways to do it, such as:

	Object.defineProperty(SampleClass, 'ANSWER', {
		value: 42,
		writable : false,
		enumerable : true,
		configurable : false
	});

But who in their right mind is going to write all that just to define a single numeric class constant?  I would love to
be able to add a class constant *inside* a class with a simple: 

	static const ANSWER = 42;

Beyond ES6 classes, there are several other improvements I'd like to make to the PCjs code base, including more
extensive use of:

- [Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)
- *[const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)* and *[let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)*
- [Computed Properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)

Those changes will come, but on a more piecemeal basis, as code is visited.
