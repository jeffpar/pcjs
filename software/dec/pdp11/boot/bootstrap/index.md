---
layout: page
title: DEC PDP-11 Bootstrap Loader
permalink: /software/dec/pdp11/boot/bootstrap/
redirect_from: /apps/pdp11/boot/bootstrap/
---

The **Bootstrap Loader** is a small program that loads the [Absolute Loader](/software/dec/pdp11/tapes/absloader/),
which is then used to load other PDP-11 tapes in the "Absolute Format," such as [BASIC (Single User)](/software/dec/pdp11/tapes/basic/). 
 
Here's what the **Bootstrap Loader** looks like:

	Location  Instruction
	 037744     016701
	 037746     000026
	 037750     012702
	 037752     000352
	 037754     005211
	 037756     105711
	 037760     100376
	 037762     116162
	 037764     000002
	 037766     037400
	 037770     005267
	 037772     177756
	 037774     000765
	 037776     177550

Using any [PDPjs](/machines/dec/pdp11/) machine with the built-in Debugger, such as this
[PDP-11/20 Boot Monitor](/machines/dec/pdp11/1120/monitor/debugger/), the **Bootstrap Loader**
is easily entered with a single Debugger EDIT ("e") command:

	e 037744 016701 000026 012702 000352 005211 105711 100376 116162 000002 037400 005267 177756 000765 177550

You can immediately disassemble the code using the Debugger's UNASSEMBLE ("u") command `u 037744 040000`:

	037744: 016701 000026          MOV   037776,R1
	037750: 012702 000352          MOV   #352,R2
	037754: 005211                 INC   @R1
	037756: 105711                 TSTB  @R1
	037760: 100376                 BPL   037756
	037762: 116162 000002 037400   MOVB  2(R1),37400(R2)
	037770: 005267 177756          INC   037752
	037774: 000765                 BR    037750
	037776: 177550                 .WORD 177550

To run the above code, set the PC to 037744 and start the machine: 

	r pc=037744
	g

Pre-loading DEC's Bootstrap Loader
----------------------------------

I pasted the disassembled code (above) into a listing file, [BOOTSTRAP-16KB.txt](BOOTSTRAP-16KB.txt),
and then ran [FileDump](/tools/filedump) to produce a [BOOTSTRAP-16KB.json](BOOTSTRAP-16KB.json) that can
be automatically pre-loaded into any machine:

	filedump --file=BOOTSTRAP-16KB.txt --format=octal --output=BOOTSTRAP-16KB.json

For example, this [PDP-11/20 Bootstrap Loader Demo](/machines/dec/pdp11/1120/bootstrap/debugger/) pre-loads
the **Bootstrap Loader** using the `<ram>` component's optional *file* attribute:

	<ram id="ram" addr="0x0000" size="0x4000" file="/software/dec/pdp11/boot/bootstrap/BOOTSTRAP-16KB.json"/>

I also edited [BOOTSTRAP-16KB.json](BOOTSTRAP-16KB.json) to include the following properties:

	"load": 0x3FE4,
	"exec": 0x3FE4,

so that the `<ram>` component knows exactly where to load and execute the file.  However, the `<ram>` component can also
specify those value(s) itself, if needed:

	<ram id="ram" addr="0x0000" size="0x4000" file="/software/dec/pdp11/boot/bootstrap/BOOTSTRAP-16KB.json" load="0x3FE4" exec="0x3FE4"/>

Finally, if you prefer octal *and* you're sure everyone will be using an ES6-capable browser, you can do this:

	<ram id="ram" addr="0o00000" size="0o40000" file="/software/dec/pdp11/boot/bootstrap/BOOTSTRAP-16KB.json" load="0o37744" exec="0o37744"/>

All PCjs configuration files use hex and/or decimal exclusively, since those number formats have always been supported,
but as time goes by, the new octal and binary formats will be almost as universal.
