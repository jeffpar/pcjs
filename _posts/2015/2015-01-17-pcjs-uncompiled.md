---
layout: post
title: PCx86 Uncompiled
date: 2015-01-17 11:00:00
category: Features
permalink: /blog/2015/01/17/
machines:
  - id: at-ega-1024k-rev3
    type: pcx86
    debugger: true
    uncompiled: true
    config: /devices/pcx86/machine/5170/ega/1024kb/rev3/debugger/visual/machine.xml
---

Most PCx86 machines on [{{ site.domain }}](/) run with a compiled version of PCx86, which is produced
by running the PCx86 JavaScript source code through Google's Closure Compiler, yielding a smaller (minified)
version that loads and runs much faster than the original source code.

However, certain features are disabled in the compiled versions, including a new BACKTRACK feature that
makes it possible to track the contents of memory locations and registers back to their source (eg, to a ROM
or file location).  Once the BACKTRACK feature is finished, it will be folded into the compiled code, but until
then, the only way to experiment with it is by running the uncompiled code.

To make it easier to launch machines with uncompiled code, a PCx86 machine definition can now set `uncompiled`
to *true*, overriding the value of `site.pcjs.compiled` in **_config.yml**.

Here's what a typical Markdown file would look like:

{% raw %}

	---
	...
	machines:
	  - type: pcx86
	    id: at-ega-1024k-rev3
	    debugger: true
	    uncompiled: true
	    config: /devices/pcx86/machine/5170/ega/1024kb/rev3/debugger/visual/machine.xml
	---
	...
	{% include machine.html id="at-ega-1024k-rev3" %}
	
{% endraw %}

In fact, that's what we've done in the Markdown file you are reading right now. 

{% include machine.html id="at-ega-1024k-rev3" %}

*[@jeffpar](https://jeffpar.com)*  
*January 17, 2015 (Updated December 10, 2015 to reflect the new `uncompiled` property)*
