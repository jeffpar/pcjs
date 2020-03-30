---
layout: page
title: RX11 Disk Controller
permalink: /configs/pdp11/rx11/
redirect_from: /devices/pdp11/rx11/
---

The RX11 Disk Controller controls up to two RX01 disk drives, which in turn read/write 8-inch diskettes that DEC
merely describes as "compatible with the IBM 3740 family of equipment."  We refer to them simply as RX01 diskettes.

RX01 diskettes are single-sided, with a logical format of 77 tracks, 26 sectors per track, and a sector size of 128
bytes, for a total capacity of 250Kb (256,256 bytes).

> **SIDEBAR**: DEC's [Documentation](#documents) claims a capacity of "256K bytes", but like many disk drive
manufacturers, they overstated the capacity by treating "K" as 1000 rather than 1024, which was its traditional meaning
within the computer industry at the time.  DEC's own processor handbooks, for example, invariably used "K" to mean 1024.

> Since 1998, standards organizations have been pushing the term "kibibyte" (abbreviated KiB) to mean 1024 bytes,
in an effort to redefine the "K" in "Kilobyte" (Kb) as 1000, but that doesn't change what the term commonly meant prior
to 1998.

Machines containing the [RX11 Component](/machines/pdp11/lib/rx11.js) include:

- [PDP-11/70 with Front Panel](/machines/dec/pdp11/machine/1170/panel/) (with [Debugger](/machines/dec/pdp11/machine/1170/panel/debugger/))
- [PDP-11/70 with VT100 Terminal](/machines/dec/pdp11/machine/1170/vt100/) (with [Debugger](/machines/dec/pdp11/machine/1170/vt100/debugger/))

PCjs has archived a selection of [RX01 Disk Images](/software/dec/pdp11/disks/rx01/) for use by those machines, which are listed in
the following RX11 Device XML file:

- [Default](/configs/pdp11/rx11/default.xml)

which is typically referenced by a Machine XML file as:

```xml
<device ref="/configs/pdp11/rx11/default.xml"/>
```
		
Device XML files not only configure a device, but also list all the resource the device will use, and define UI elements
used to control the device, such as choosing which disks should be "auto-mounted" by the RX11 device.  For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<device id="rx11" type="rx11" pos="left" width="35%" padLeft="8px" padBottom="8px">
    <name>Disk Drive Controls</name>
    <control type="container">
        <control type="list" binding="listDrives"/>
        <control type="list" binding="listDisks">
            <disk id="disk01" name="RT-11 V3 SYS (1 OF 9)" path="/decdisks/pdp11/rx01/RX01-RT11-V03-1.json"/>
            <disk id="disk01" name="RT-11 V3 SYS (2 OF 9)" path="/decdisks/pdp11/rx01/RX01-RT11-V03-2.json"/>
            <disk id="disk01" name="RT-11 V3 SYS (3 OF 9)" path="/decdisks/pdp11/rx01/RX01-RT11-V03-3.json"/>
            <disk id="disk01" name="RT-11 V3 SYS (4 OF 9)" path="/decdisks/pdp11/rx01/RX01-RT11-V03-4.json"/>
            <disk id="disk01" name="RT-11 V3 SYS (5 OF 9)" path="/decdisks/pdp11/rx01/RX01-RT11-V03-5.json"/>
            <disk id="disk01" name="RT-11 V3 SYS (6 OF 9)" path="/decdisks/pdp11/rx01/RX01-RT11-V03-6.json"/>
            <disk id="disk01" name="RT-11 V3 SYS (7 OF 9)" path="/decdisks/pdp11/rx01/RX01-RT11-V03-7.json"/>
            <disk id="disk01" name="RT-11 V3 SYS (8 OF 9)" path="/decdisks/pdp11/rx01/RX01-RT11-V03-8.json"/>
            <disk id="disk01" name="RT-11 V3 SYS (9 OF 9)" path="/decdisks/pdp11/rx01/RX01-RT11-V03-9.json"/>
        </control>
        <control type="button" binding="loadDisk">Load</control>
        <control type="button" binding="bootDisk">Boot</control>
        <control type="description" binding="descDisk" padRight="8px"/>
        <control type="file" binding="mountDisk"/>
    </control>
</device>
```

### Loading the RX11 Bootstrap

From the [RT-11 v4.0 Installation Manual (March 1981)](/software/dec/pdp11/disks/rk03/rt11v4/#documents), p. E-3:

	The procedure to deposit the RX11 disk bootstrap loader in memory depends on the type of processor you have.
	If your computer is a PDP-11V/03, PDP-11/03, or LSI-11, see the PDP-11/03 user's manual for instructions.
	
	 1. Set the ENABLE/HALT switch to HALT.
	
	 2. Set the first address, 010000, in the switch register (see Table E-3).
	
	 3. Press the LOAD ADDR switch.
	
	 4. Set the contents for the first address (from Table E-3) in the switch register.
	
	 5. Lift the DEP switch. The computer automatically advances to the next address.
	
	 6. Set the contents for the next address (from Table E-3) in the switch register.
	
	 7. Lift the DEP switch.
	
	 8. Repeat steps 6 and 7 until you have deposited all the instructions.
	
	Now verify that you deposited the bootstrap program properly.
	
	 1. Set the first address, 001000, in the switch register.
	
	 2. Press the LOAD ADDR switch.
	
	 3. Press the EXAM switch to display the contents of that address in the data register.

	 4. Compare the number in the data register with the value for that address in Table E-3.
	
	 5. If the values are the same, press EXAM again to display the contents of the next address.
		If the values are not the same, repeat the entire procedure for depositing the bootstrap.
		Verify the contents of all the addresses in this way. If any instruction is incorrect,
		repeat the entire deposit procedure.

	Once you have correctly deposited the bootstrap in memory, start the computer as follows:
	
	 1. Set the starting address, 001000, in the switch register.
	 
	 2. Press the LOAD ADDR switch.
	 
	 3. Set the ENABLE/HALT switch to ENABLE.
	 
	 4. Press the START switch.

#### Table E-3: RX11 Bootstrap Loader

	Location    Contents
	
	001000      005000
	001002      012701
	001004      177170
	001006      105711
	001010      001776
	001012      012711
	001014      000003
	001016      005711
	001020      001776
	001022      100405
	001024      105711
	001026      100004
	001030      116120
	001032      000002
	001034      000770
	001036      000000
	001040      005000
	001042      000110

#### Loading the RX11 Bootstrap Loader

Any PDP-11 machine using built-in PCjs Debugger makes it easy to enter the bootstrap code above.  Paste
the following commands into the Debugger's command buffer:

	ew 1000 005000 012701 177170 105711 001776 012711 000003 005711 001776;
	ew 1022 100405 105711 100004 116120 000002 000770 000000 005000 000110;
	r pc 1000

You can then review (eg, disassemble) the bootstrap code:

	>> u 1000 1044
	001000: 005000                 CLR   R0
	001002: 012701 177170          MOV   #177170,R1
	001006: 105711                 TSTB  @R1
	001010: 001776                 BEQ   001006
	001012: 012711 000003          MOV   #3,@R1
	001016: 005711                 TST   @R1
	001020: 001776                 BEQ   001016
	001022: 100405                 BMI   001036
	001024: 105711                 TSTB  @R1
	001026: 100004                 BPL   001040
	001030: 116120 000002          MOVB  2(R1),(R0)+
	001034: 000770                 BR    001016
	001036: 000000                 HALT 
	001040: 005000                 CLR   R0
	001042: 000110                 JMP   @R0

Last but not least, make sure you have successfully loaded an RX01 diskette image into drive DX0.  Then execute the
bootstrap code with the Debugger's "g" command.

Of course, if the machine also includes the RX11 Boot control, then all you *really* need to is select an
RX01 diskette, click "Load", wait for the diskette image to be successfully loaded (i.e., downloaded) and then click
"Boot".

{% include gallery/documents.html path="/documents/manuals/dec/" tag="rx11" width="200" height="260" %}
