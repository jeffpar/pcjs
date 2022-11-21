---
layout: page
title: PC11 High-Speed Paper Tape Reader/Punch
permalink: /machines/dec/pdp11/pc11/
redirect_from: /devices/pdp11/pc11/
---

Machines containing the [PC11 Component](/machines/dec/pdp11/lib/pc11.js) include:

- [PDP-11/20 Bootstrap Loader Demo](/machines/dec/pdp11/1120/bootstrap/) (with [Debugger](/machines/dec/pdp11/1120/bootstrap/debugger/))
- [PDP-11/20 BASIC Demo](/machines/dec/pdp11/1120/basic/) (with [Debugger](/machines/dec/pdp11/1120/basic/debugger/))

PCjs has archived a selection of [Paper Tape Images](/software/dec/pdp11/tapes/) for use by those machines, most of which are
listed in the following PC11 Device XML file:

- [Default](/machines/dec/pdp11/pc11/default.xml)

which is typically referenced by a Machine XML file as:

```xml
<device ref="/machines/dec/pdp11/pc11/default.xml"/>
```
		
Device XML files not only configure a device, but also list all the resource the device will use, and define UI elements
used to control the device, such as choosing which tape should be "loaded" into the PC11 device.  For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<device id="pc11" type="pc11" baudReceive="9600" autoMount='{PTR:{path:"/software/dec/pdp11/boot/bootstrap/BOOTSTRAP-16KB.json"}}' pos="left" width="35%" padLeft="8px" padBottom="8px">
    <name>Paper Tape Controls</name>
    <control type="container">
        <control type="list" binding="listTapes">
            <tape id="tape00" name="Bootstrap Loader (16Kb)" path="/software/dec/pdp11/boot/bootstrap/BOOTSTRAP-16KB.json"/>
            <tape id="tape01" name="Absolute Loader" path="/software/dec/pdp11/tapes/absloader/DEC-11-L2PC-PO.json"/>
            <tape id="tape02" name="BASIC (Single User)" path="/software/dec/pdp11/tapes/basic/DEC-11-AJPB-PB.json"/>
        </control>
        <control type="button" binding="loadTape">Load</control>
        <control type="button" binding="readTape">Read</control>
        <control type="description" binding="descTape" padRight="8px"/>
        <control type="file" binding="mountTape"/>
        <control type="progress" binding="readProgress" pos="default" width="250px" padTop="8px">Tape Progress</control>
    </control>
</device>
```

For details about the PC11 hardware, we relied upon the [PDP-11 Peripherals Handbook (1976)](https://1drv.ms/b/s!ArcO_mFRe1Z9gp5KhoASjxuqs-WIMg?e=yb7rXz),
p. 4-376 (p. 408 of the PDF).
