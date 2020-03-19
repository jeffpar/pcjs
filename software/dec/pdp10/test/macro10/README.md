---
layout: page
title: DEC PDP-10 Mini-Assembler Tests
permalink: /software/dec/pdp10/test/macro10/
redirect_from: /apps/pdp10/tests/macro10/
machines:
  - id: testka10
    type: pdp10
    config: /configs/pdp10/machine/ka10/test/debugger/machine.xml
    debugger: true
    commands: a 100 TEXT.MAC; db 100 l4
---

### Nested Macro Test

The PDP-10 machine below automatically loads and assembles [TEXT.MAC](TEXT.MAC.txt), one of the
first tests of the built-in PDPjs MACRO-10 Mini-Assembler.

[TEXT.MAC](TEXT.MAC.txt) is a copy of the file listed on p. 7-9 of the
[MACRO-10 Assembler Programmer's Reference Manual (June 1972)](/software/dec/pdp10/macro10/).  It's a simple test
of nested macro definitions, recursion, expressions using shift operators and character constants,
and pseudo-ops **IRPC**, **IFE**, **IFN**, and **EXP**.  It generates 4 words of data. 

{% include machine.html id="testka10" %}

Assemble [TEXT.MAC](TEXT.MAC.txt):

	a 100 TEXT.MAC

Verify the following results:

	loading TEXT.MAC
	4 words loaded at 000100-000103
	00=000000000000 01=000000000000 02=000000000000 03=000000000000 
	04=000000000000 05=000000000000 06=000000000000 07=000000000000 
	10=000000000000 11=000000000000 12=000000000000 13=000000000000 
	14=000000000000 15=000000000000 16=000000000000 17=000000000000 
	PC=000100 RA=00000000 EA=000000 C0=0 C1=0 OV=0 ND=0 PD=0 
	000100: 014101 102103  UUO     2,102103(1)

Dump the 4 assembled words with the command `db 100 l4`:

	000100: 014101 102103  003 004 011 004 041  ....!
	000101: 104105 106107  021 004 051 014 043  ..).#
	000102: 110111 112113  022 004 111 024 045  ..I.%
	000103: 114000 000000  023 000 000 000 000  .....

Source code from [TEXT.MAC](TEXT.MAC.txt):
 
```
{% include_relative TEXT.MAC.txt %}
```

### Nested Literal Test

Assemble [NESTLIT.MAC](NESTLIT.MAC.txt):

    a 100 NESTLIT.MAC
 
Source code from [NESTLIT.MAC](NESTLIT.MAC.txt):

```
{% include_relative NESTLIT.MAC.txt %}
```
