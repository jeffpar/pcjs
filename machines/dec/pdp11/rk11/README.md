---
layout: page
title: RK11 Disk Controller
permalink: /machines/dec/pdp11/rk11/
redirect_from: /devices/pdp11/rk11/
---

The RK11 Disk Controller controls up to eight RK05 disk drives, which in turn read/write [RK03](/software/dec/pdp11/disks/rk03/)
disk cartridges.

RK03 disks are single-platter cartridges with 203 tracks per side, 12 sectors per track, and a sector size of 256 words
(512 bytes), for a total capacity of 2.38Mb (2,494,464 bytes).  

Machines containing the [RK11 Component](/machines/dec/pdp11/modules/v2/rk11.js) include:

- [PDP-11/70 with Front Panel](/machines/dec/pdp11/1170/panel/) (with [Debugger](/machines/dec/pdp11/1170/panel/debugger/))
- [PDP-11/70 with VT100 Terminal](/machines/dec/pdp11/1170/vt100/) (with [Debugger](/machines/dec/pdp11/1170/vt100/debugger/))

PCjs has archived a selection of [RK03 Disk Images](/software/dec/pdp11/disks/rk03/) from [Paul Nankervis](http://skn.noip.me/pdp11/)
for use by those machines, which are listed in the following RK11 Device XML file:

- [Default](/machines/dec/pdp11/rk11/default.xml)

which is typically referenced by a Machine XML file as:

```xml
<device ref="/machines/dec/pdp11/rk11/default.xml"/>
```
		
Device XML files not only configure a device, but also list all the resource the device will use, and define UI elements
used to control the device, such as choosing which disks should be "auto-mounted" by the RK11 device.  For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<device id="rk11" type="rk11" autoMountExample='{RK0:{path:"/decdisks/pdp11/rk03/RK03-XXDP.json"}}' pos="left" width="35%" padLeft="8px" padBottom="8px">
	<control type="container">
		<control type="list" binding="listDrives"/>
		<control type="list" binding="listDisks">
			<disk id="disk01" name="RT-11 v4.0" path="/decdisks/pdp11/rk03/RK03-RT11-V40.json"/>
			<disk id="disk02" name="Unix v5" path="/decdisks/pdp11/rk03/RK03-UNIX-V5.json"/>
			<disk id="disk03" name="Unix v5 (SimH)" path="/decdisks/pdp11/rk03/RK03-UNIX-V5-SIMH.json">
				<link href="http://simh.trailing-edge.com/kits/uv5swre.zip">PDP-11 UNIX V5 with sources (under license provided by Caldera Corporation)</link>
			</disk>
			<disk id="disk04" name="XXDP+ Diagnostics" path="/decdisks/pdp11/rk03/RK03-XXDP.json"/>
		</control>
		<control type="button" binding="loadDisk">Load</control>
		<control type="button" binding="bootDisk">Boot</control>
		<control type="description" binding="descDisk" padRight="8px"/>
		<control type="file" binding="mountDisk"/>
	</control>
</device>
```
