WARNING: This utility is obsolete.  It has been superseded by [test386](/software/pcx86/test/cpu/80386/),
which, going forward, serves as our new model for instruction-level testing.  As a result,
the **traceLog()** functionality mentioned below has been removed from the PCjs source code
(but you can always dig it back up if you really want it).

### Overview

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

### Operation

To load TRACE.COM and TRACE.TXT onto a virtual disk image that PCjs can access, you can add an
"autoMount" setting to your PCjs <fdc> configuration to load a TRACE disk image; eg:

```xml
<fdc id="fdcNEC" autoMount='{B:{name:"Trace Tests",path:"/software/pcx86/test/TRACE.json"}}'/>
```

To create the necessary TRACE disk image, using our built-in [DiskImage](/tools/diskimage/) utility:

	diskimage.js --dir=software/pcx86/test/trace --output=software/pcx86/test/TRACE.json

OS X users can also create an ISO image like so:

	hdiutil makehybrid -o software/pcx86/test/trace.iso software/pcx86/test/trace -iso -joliet
