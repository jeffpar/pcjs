WARNING: This utility is obsolete.  It has been superseded by [test386](/tests/pcx86/80386/),
which, going forward, serves as our new model for instruction-level testing.  As a result,
the **traceLog()** functionality mentioned below has been removed from the PCjs source code
(but you can always dig it back up if you really want it).

Overview
---

TRACE.COM takes an instruction log, as recorded by the PCjs Debugger's traceLog() function, and
"plays" the instructions back on another machine DOS-compatible 8086 machine, verifying that:

 1. Results match the recorded results;
 2. Any "modified" flags match the recorded flags; and
 3. Any "unmodified" flags remain unmodified

The format of an instruction log entry is a series of lines (ASCII characters terminated by an LF),
where each line looks like:

	F000:EEFF SHL(0480,0002,F006) 1200,F006

specifically:

	address, space, instruction, parenthesis, dst operand, comma, src operand, comma,
	input flags, parenthesis, space, result, comma, and output flags

WARNING: For the shift and rotate tests to pass on a real x86 CPU, we either have to distinguish
between single-bit shifts and multi-bit shifts (because the latter leaves PS_OF in an "undefined"
state), or we have to ignore PS_OF altogether.  For now, I'm specifying PS_ALL_BUT_OF for those
instructions, even though we'll be missing OVERFLOW validation for all single-bit shifts and rotates.

Operation
---

To load TRACE.COM and TRACE.TXT onto a virtual disk image that PCjs can access, you can add an
"autoMount" setting to your PCjs <fdc> configuration that will dynamically generate a fresh disk image
every time the machine is loaded, via the DiskDump API.  This is useful when you're constantly
generating new test results:

```xml
<fdc id="fdcNEC" autoMount='{B:{name:"Trace Tests",path:"/tests/pcx86/trace/trace.com;trace.txt"}}'/>
```

Alternatively, if you want to run the tests in another virtual PC environment (eg, VMware Fusion),
you can create an IMG disk image from a directory using DiskDump's command-line interface:

	cd tests/pcx86
	node ../../modules/diskdump/bin/diskdump --dir=trace --format=img --output=trace.img
 
OS X users can also create an ISO image like so:

	hdiutil makehybrid -o tests/pcx86/trace.iso tests/pcx86/trace -iso -joliet
