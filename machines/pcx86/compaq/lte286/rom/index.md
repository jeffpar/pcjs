---
layout: page
title: COMPAQ LTE/286 ROMs
permalink: /machines/pcx86/compaq/lte286/rom/
redirect_from: /devices/pcx86/rom/compaq/lte286/rom/
---

![System Board, CPU View](/machines/pcx86/compaq/lte286/rom/photos/Compaq_LTE286_System_Board_CPU.jpg)
![System Board, ROM View](/machines/pcx86/compaq/lte286/rom/photos/Compaq_LTE286_System_Board_ROM.jpg)

### System ROM Locations

	U503 (EVEN)
	U504 (ODD)

### System ROM Revisions (Spare Part 117100-001)

	Rev  Even ROM #  Odd ROM #   Date
	---  ----------  ----------  ----
	A.5  117222-001  117221-001
	B.0  117222-002  117221-002
	B.1  117222-003  117221-003  1989-09-07
	B.3  117222-004  117221-004  1990-02-22

## Dumping the ROMs

Same procedure as for the [Deskpro386](/machines/pcx86/compaq/deskpro386/rom/), with the addition of needing a PLCC32 to DIP28 conversion socket.
 
![Arduino Breadboard EPROM Reader](/machines/pcx86/compaq/lte286/rom/photos/Compaq_LTE286_Breadboard.jpg)

The PCjs ROM image [1989-09-07](1989-09-07/1989-09-07.json5) was created from [117221-003.hex](1989-09-07/117221-003.hex) and [117222-003.hex](1989-09-07/117222-003.hex):

    fileimage.js --file=117222-003.hex --merge=117221-003.hex --output=1989-09-07.json5 --comments

The PCjs ROM image [1990-02-22](1990-02-22/1990-02-22.json5) was created from [117221-004.hex](1990-02-22/117221-004.hex) and [117222-004.hex](1990-02-22/117222-004.hex):

    fileimage.js --file=117222-004.hex --merge=117221-004.hex --output=1990-02-22.json5 --comments
