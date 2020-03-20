---
layout: page
title: RL11 Disk Controller
permalink: /configs/pdp11/rl11/
redirect_from: /devices/pdp11/rl11/
---

The RL11 Disk Controller controls up to four RL01 or RL02 disk drives, which in turn read/write
[RL01K](/software/dec/pdp11/disks/rl01k/) or [RL02K](/software/dec/pdp11/disks/rl02k/) disk cartridges, respectively.

RL01K disks are single-platter cartridges with 256 tracks per side, 40 sectors per track, and a sector size of
256 bytes, for a total capacity of 5Mb (5,242,880 bytes).

RL02K disks are single-platter cartridges with 512 tracks per side, 40 sectors per track, and a sector size of
256 bytes, for a total capacity of 10Mb (10,485,760 bytes).

Machines containing the [RL11 Component](/machines/dec/pdp11/lib/pc11.js) include:

- [PDP-11/70 with Front Panel](/machines/dec/pdp11/machine/1170/panel/) (with [Debugger](/machines/dec/pdp11/1170/panel/debugger/))
- [PDP-11/70 with VT100 Terminal](/machines/dec/pdp11/1170/vt100/) (with [Debugger](/machines/dec/pdp11/1170/vt100/debugger/))

PCjs has archived a selection of [RL01K](/software/dec/pdp11/disks/rl01k/) and [RL02K](/software/dec/pdp11/disks/rl02k/) disk images
from [Paul Nankervis](http://skn.noip.me/pdp11/) for use by those machines, which are also listed in the
following RL11 Device XML file:

- [Default](/configs/pdp11/rl11/default.xml)

which is typically referenced by a Machine XML file as:

```xml
<device ref="/configs/pdp11/rl11/default.xml"/>
```
	
Device XML files not only configure a device, but also list all the resource the device will use, and define UI elements
used to control the device, such as choosing which disks should be "auto-mounted" by the RL11 device.  For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<device id="rl11" type="rl11" autoMount='{RL0:{path:"/decdisks/pdp11/rl02k/RL02K-XXDP.json"}}' pos="left" width="35%" padLeft="8px" padBottom="8px">
    <name>Disk Drive Controls</name>
    <control type="container">
        <control type="list" binding="listDrives"/>
        <control type="list" binding="listDisks">
            <disk id="disk01" name="XXDP+ Diagnostics" path="/decdisks/pdp11/rl02k/RL02K-XXDP.json"/>
        </control>
        <control type="button" binding="loadDisk">Load</control>
        <control type="button" binding="bootDisk">Boot</control>
        <control type="description" binding="descDisk" padRight="8px"/>
        <control type="file" binding="mountDisk"/>
    </control>
</device>
```

### Loading the RL11 Bootstrap

From the [RT-11 v4.0 Installation Manual (March 1981)](/documents/manuals/dec/#pdp-11-software), p. E-6:

	Deposit the basic RL01/RL02 disk bootstrap loader in memory as follows:
	
	 1. Set the ENABLE/HALT switch to HALT.
	
	 2. Set the first address, 001000, in the switch register (see Table E-7).
	
	 3. Press the LOAD ADDR switch.
	
	 4. Set the contents for the first address (from Table E-7) in the switch register.
	
	 5. Lift the DEP switch. The computer automatically advances to the next address.
	
	 6. Set the contents for the next address (from Table E-7) in the switch register.
	
	 7. Lift the DEP switch.
	
	 8. Repeat steps 6 and 7 until you have deposited all the instructions.
	
	Now verify that you deposited the bootstrap program properly.
	
	 1. Set the first address, 001000, in the switch register.
	 
	 2. Press the LOAD ADDR switch.
	 
	 3. Press the EXAM switch to display the contents of that address in the data register.
	 
	 4. Compare the number in the data register with the value for that address in Table E-7.
	 
	 5. If the values are the same, press EXAM again to display the contents of the next address. If the values
	    are not the same, repeat the entire

Table E-7: RL01/RL02 Bootstrap Loader
-------------------------------------

	Location    Contents
	
	001000		012701
	001002      174400
	001004		012761
	001006		000013
	001010		000004
	001012		012711
	001014		000004
	001016		105711
	001020		100376
	001022		005061
	001024		000002
	001026		005061
	001030		000004
	001032		012761
	001034		177400
	001036		000006
	001040		012711
	001042		000014
	001044		105711
	001046		100376
	001050		005007

Loading the RL11 Bootstrap Loader
----------------------------------

Any PDP-11 machine using built-in PCjs Debugger makes it easy to enter the bootstrap code above.  Paste
the following commands into the Debugger's command buffer:

	ew 1000 012701 174400 012761 000013 000004 012711 000004 105711 100376 005061;
	ew 1024 000002 005061 000004 012761 177400 000006 012711 000014 105711 100376 005007;	
	r pc 1000

You can then review (eg, disassemble) the bootstrap code:

	>> u 1000 1052
	001000: 012701 174400          MOV   #174400,R1
	001004: 012761 000013 000004   MOV   #13,4(R1)
	001012: 012711 000004          MOV   #4,@R1                 ;RLCS
	001016: 105711                 TSTB  @R1                    ;RLCS
	001020: 100376                 BPL   001016
	001022: 005061 000002          CLR   2(R1)
	001026: 005061 000004          CLR   4(R1)
	001032: 012761 177400 000006   MOV   #177400,6(R1)
	001040: 012711 000014          MOV   #14,@R1                ;RLCS
	001044: 105711                 TSTB  @R1                    ;RLCS
	001046: 100376                 BPL   001044
	001050: 005007                 CLR   PC

Last but not least, make sure you have successfully loaded an RL01 or RL02 disk image into drive RL0.  Then execute the
bootstrap code with the Debugger's "g" command.

Of course, if the machine also includes the RL11 Boot control, then all you *really* need to is select an
RL01 or RL02 disk, click "Load", wait for the diskette image to be successfully loaded (i.e., downloaded) and then click
"Boot".
