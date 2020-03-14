---
layout: page
title: DEC PDP-11 Paper Tape Images
permalink: /apps/pdp11/tapes/
---

DEC PDP-11 Paper Tape Images
----------------------------

To load any of the DEC PDP-11 paper tapes listed below, you will need to use a [PDPjs Machine](/devices/pdp11/machine/)
with a [PC11 High-Speed Paper Tape Reader/Punch](/devices/pdp11/pc11/), such as this
[PDP-11/20](/devices/pdp11/machine/1120/basic/debugger), and then perform the following steps:

- **Read** the [DEC PDP-11 Bootstrap Loader](/apps/pdp11/boot/bootstrap/)
- **Load** the [Absolute Loader](absloader/) tape image
- **Run** the Bootstrap Loader to read the Absolute Loader
- **Load** one of the "Absolute Format" tape images below
- **Run** the Absolute Loader to read the selected tape image 

This mirrors the "real world" process of loading paper tape software.  However, PDPjs offers a faster method:
any "Absolute Format" tape (which should include all the tapes listed below) can *also* be loaded directly into RAM
using the machine's **Read** button, replacing all those steps with a single click.

Paper Tape Diagnostics
----------------------

We have archived an assortment of [DEC Paper Tape Diagnostics](diags/).

Paper Tape Software (circa 1970)
--------------------------------

As documented in the [PDP-11/20 Handbook (1971)](https://1drv.ms/b/s!ArcO_mFRe1Z9gp5O19e4cBRGbdaWgw?e=t2UEC1),
p. 155, "PAPER TAPE SOFTWARE", the following software was available on paper tape:

- [PAL-11A ASSEMBLER](pal11a/)
- PAL-11S ASSEMBLER (Program Assembly Language for the PDP-11, Relocatable Version)
- [ED-11](ed11/) (Text Editor program)
- [DUMPTT](dumptt/) (Dump Octal)
- [DUMPAB](dumpab/) (Dump Absolute Binary Code)
- [FPP-11](fpp11/) (Floating-Point and Math Package for the PDP-11)
- [ODT-11](odt11/) (On-line Debugging Technique for the PDP-11)
- [IOX](iox/) (PDP-11 Input/Output eXecutive)
- [PDP-11 BASIC](basic/) (Beginners All-purpose Symbolic Instruction Code)

There was a separate DEC publication, [PDP-11 Paper Tape Software Handbook](https://1drv.ms/b/s!ArcO_mFRe1Z9gp5Hh6eSPTZPCDIbVQ?e=P4BMRN),
that described all of the above software in greater detail, and it included some programs that the 1971 Handbook listed under
"Disk Operating System" instead of "Paper Tape System", such as:

- LINK-11S LINKER

Thanks to the [iamvirtual.ca](http://iamvirtual.ca/PDP-11/PTS-11/PTS-11.htm) website, most of the above programs are
available as paper tape image files and are included in our "Default" [PC11 High-Speed Paper Tape Reader/Punch](/devices/pdp11/pc11/)
configuration.

Some additional information on DEC's Paper Tape Software is available at [retrotechnology.com](http://retrotechnology.com/pdp11/11_20_PTS.html).
