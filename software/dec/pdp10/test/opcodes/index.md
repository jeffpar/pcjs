---
layout: page
title: DEC PDP-10 Opcode Tests
permalink: /software/dec/pdp10/test/opcodes/
redirect_from: /apps/pdp10/tests/opcodes/
machines:
  - id: testka10
    type: pdp10
    debugger: true
    config: /machines/pdp10/machine/ka10/test/debugger/machine.xml
---

The PDP-10 machine below loads the following PDPjs opcode test:

- [PDP-10 Half-Word Opcode Test](OPTEST01.json)

Details on how to run and modify the test, and perform similar tests in [SIMH](https://github.com/simh/simh),
are provided below.

{% include machine.html id="testka10" %}

The [PDP-10 Half-Word Opcode Test](OPTEST01.json) file specifies that the following words:

	0o505040111111,   // HRLI    1,111111
	0o541040444444,   // HRRI    1,444444
	0o544100000001,   // HLR     2,1
	0o504100000001,   // HRL     2,1
	...

should be loaded at address 0o100, and that the program counter (PC register) should be set to 0o100.  The embedded
comments display the instructions that correspond to each word.

If you want to alter or add new instructions, the PDP-10 Debugger now includes a rudimentary assembler.  Using the `a` command,
along with an optional start address, you can enter "assembler mode".  For example, here's how the first four instructions from
the [PDP-10 Half-Word Opcode Test](OPTEST01.json) could be entered by hand:

	>> a 100
	begin assemble at 000100
	>> hrli 1,111111
	000100: 505040 111111  HRLI    1,111111
	>> hrri 1,444444
	000101: 541040 444444  HRRI    1,444444
	>> hlr 2,1
	000102: 544100 000001  HLR     2,1
	>> hrl 2,1
	000103: 504100 000001  HRL     2,1
	ended assemble at 000104

Entering a blank line exits "assembler mode".  To disassemble the four instructions, use `u 100 l4`:

	>> u 100 l4
	000100: 505040 111111  HRLI    1,111111
	000101: 541040 444444  HRRI    1,444444
	000102: 544100 000001  HLR     2,1
	000103: 504100 000001  HRL     2,1

You can also copy-and-paste a series of instructions into the PDPjs Debugger, as long as each command ends
with a semicolon:

	a 100;
	hrli 1,111111;
	hrri 1,444444;
	hlr 2,1;
	hrl 2,1;
	end

Individual instructions can also be assembled *without* entering "assembler mode", as long as you precede
each instruction with the `a` command and a specific address:

	a 100 hrli 1,111111;
	a 101 hrri 1,444444;
	a 102 hlr 2,1;
	a 103 hrl 2,1

Individual instructions can be executed with the `t` command and memory can be dumped with the `d` command.

After executing the first four instructions and using the `d 0 l4` command to dump first four words of memory
(also known as AC registers 0-3), you should see the following output:

	>> r
	000100: 505040 111111  HRLI    1,111111
	>> t
	000101: 541040 444444  HRRI    1,444444
	>> t
	000102: 544100 000001  HLR     2,1
	>> t
	000103: 504100 000001  HRL     2,1
	>> t
	000104: 000000 000000  UUO     0,0
	>> d 0 l4
	000000: 000000 000000  111111 444444  444444 111111  000000 000000   

To assemble and test the same instructions in [SIMH](https://github.com/simh/simh), using the `pdp10` binary:

	sim> dep 100 505040111111
	sim> dep 101 541040444444
	sim> dep 102 544100000001
	sim> dep 103 504100000001
	sim> ex -m 100-103
	100:	HRLI 1,111111
	101:	HRRI 1,444444
	102:	HLR 2,1
	103:	HRL 2,1
	sim> dep pc 100
	sim> step
	
	Step expired, PC: 000101 (HRRI 1,444444)
	sim> step
	
	Step expired, PC: 000102 (HLR 2,1)
	sim> step
	
	Step expired, PC: 000103 (HRL 2,1)
	sim> step
	
	Step expired, PC: 000104 (000000000000)
	sim> ex 0-3
	0:	000000000000
	1:	111111444444
	2:	444444111111
	3:	000000000000
