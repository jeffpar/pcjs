---
layout: page
title: IBM PC AT (Model 5170)
permalink: /machines/pcx86/ibm/5170/
redirect_from:
  - /devices/pcx86/machine/5170/
  - /devices/pcx86/machine/5170/mda/640kb/rev3/debugger/
  - /devices/pcx86/machine/5170/mda/640kb/rev3/
  - /pubs/pc/reference/ibm/5170/techref/
---

Our IBM PC AT configurations include:

  - IBM PC AT with Monochrome Display Adapter (MDA)
  - IBM PC AT with Color Graphics Adapter (CGA)
  - IBM PC AT with Enhanced Graphics Adapter (EGA)
  - IBM PC AT with Video Graphics Array (VGA)

The IBM PC AT came in a variety of its own "sub-models" over a three-year period.
[Documentation](#documents) is available below.

### 5170 Models 68 and 99

Models 68 and 99 were [introduced](#ibm-pc-at-5170-models-68-and-99-announcement) in August 1984:

  - Model 68
	- Type 1 motherboard
	- 6 MHz CPU
	- 256Kb RAM
	- [Rev 1 BIOS](/machines/pcx86/ibm/5170/rom/#ibm-pc-at-rom-bios-rev-1) dated "01/10/84"
  - Model 99
	- All of the above
	- 256Kb additional RAM (total of 512Kb)
	- 20Mb Hard Drive
	- 1 Serial/Parallel Adapter

### 5170 Model 239

Model 239 was introduced in October 1985:

  - Model 239
	- Type 2 motherboard
	- 6 MHz CPU
	- 512Kb RAM
	- 30Mb Hard Drive
	- 1 Serial/Parallel Adapter
	- [Rev 2 BIOS](/machines/pcx86/ibm/5170/rom/#ibm-pc-at-rom-bios-rev-2) dated "06/10/85"

### 5170 Models 319 and 339

Models 319 and 339 were introduced in April 1986:

  - Model 319
	- Type 3 motherboard
	- 8 MHz CPU
	- 512Kb RAM
	- 30MB hard drive
	- 1 Serial/Parallel Adapter 
	- [Rev 3 BIOS](/machines/pcx86/ibm/5170/rom/#ibm-pc-at-rom-bios-rev-3) dated "11/15/85"
  - Model 339
	- All of the above
	- Enhanced 101-key keyboard

## IBM PC AT 5170 Configuration Options

The IBM PC AT 5170 doesn't have DIP switches like previous models, but it still has a few switches and jumpers.

First and foremost, there is a **Display Switch** near the battery connector that must be pushed "toward the
front of your system unit" if you have a CGA that is your only (or primary) display adapter, or "toward the
back of your system unit" if you're using an MDA as your only (or primary) display.

In PCjs, the 5170 **Display Switch** is configured with the [ChipSet](/machines/pcx86/modules/v2/chipset.js) *monitor*
property, which you can set to either "mono" (aka "mda") or "color" (aka "cga").  Unlike the Model 5150/5160 DIP
switches, there is no UI for this switch, so once the machine has been created, it cannot be changed by the user.

Also, there is the **Keyboard Inhibit Switch**; it defaults to UNLOCKED and stays UNLOCKED, since no UI or
configuration property is currently provided.

Finally, there is a **Manufacturing Jumper** that can be installed, enabling additional diagnostic functions
in the ROM; it defaults to UNINSTALLED and stays UNINSTALLED, since no UI or configuration property is currently
provided.

The rest of a 5170 machine's configuration is normally handled through CMOS settings, such as the number and type
of floppy diskette drives, which can be configured with the [ChipSet](/machines/pcx86/modules/v2/chipset.js) *floppies*
property; e.g.:

```xml
<chipset id="chipset" model="5170" floppies="[1200,1200]" monitor="color"/>
```

The number of elements in the array determines the number of drives, and the value of each element
determines the type of drive; the value corresponds to the maximum supported diskette size, in Kb: 

+ 360
+ 720
+ 1200
+ 1440

However, for the 3.5-inch diskette capacities (720 and 1440) to work properly, the machine should also use a
["Rev 3"](/machines/pcx86/ibm/5170/rom/#ibm-pc-at-rom-bios-rev-3) IBM PC AT ROM BIOS and boot with DOS 3.20 or later.

Like the **Display Switch**, there is no UI for this or any other CMOS setting, so once the machine has been created,
it cannot be changed by the user.

## IBM PC AT 5170 (Models 68 and 99) Announcement

The following details come from a [copy](http://www.minuszerodegrees.net/misc/IBM%20PC%20AT%205170%20announcement%20letter.txt)
of IBM's PC AT Announcement Letter, dated August 14, 1984.

> The IBM Personal Computer AT is designed for professional
applications, office environments, and increased personal
productivity. It includes many advanced technology features
previously not available in IBM Personal Computers:  increased
performance, advanced microprocessor, high capacity diskette drives,
high capacity fixed disk drives, large memory capacity, and advanced
co-processor. The 5170 provides compatibility with existing hardware
and software products for the IBM Personal Computer family.

> ### HIGHLIGHTS

> * Performs more than two times faster than current members of the IBM Personal Computer family
> * Based on high-performance Intel 80286 microprocessor, compatible with the IBM Personal Computer family
> * Includes 1.2Mb high-capacity diskette drives
> * Allows 20Mb fixed disk drives
> * Contains a standard combination fixed disk and diskette adapter
> * Provides 512Kb memory capacity on the system board
> * Offers a combination Serial (Asynchronous)/Parallel (Printer) Adapter
> * Allows workstation growth with eight I/O expansion slots
> * Includes an improved keyboard
> * Includes a clock/calendar with battery backup
> * Provides improved security capability with a standard keylock

> ### DESCRIPTION

> The 5170 system unit/keyboard includes the following standard features:

> * Advanced high-performance Intel 80286 microprocessor
> * ROM based automatic power on self test of system components
> * ROM based BASIC language interpreter
> * 8086 compatible real address mode
> * Protected virtual address mode
> * 256Kb of memory (Model 68)
> * 512Kb of memory (Model 99)
> * 1.2Mb high capacity diskette drive
> * Diskette interface
> * 20Mb fixed disk drive (Model 99)
> * Fixed disk interface
> * Fixed disk-in-use indicator light (red)
> * Serial/parallel interface (Model 99)
> * System clock/calendar/system configuration storage with battery back-up
> * Sound system
> * Keylock
> * Bi-directional keyboard interface
> * Enhanced keyboard
> * Switchable worldwide power supply
> * Power-on indicator light (green)
> * Eight I/O expansion slots
> * Socket for 80287 math co-processor
> * 24-bit addressing
> * 16-bit data path
> * Seven-channel direct memory access (DMA)
> * 16-level interrupt
> * Three programmable timers

> Based on a high performance 16/24-bit Intel 80286 microprocessor,
both models of the 5170 are equipped with a high capacity (1.2Mb)
diskette drive, enhanced keyboard, ROM based BASIC language,
clock/calendar with battery backup, and keylock. Standard memory on
Model 68 is 256Kb and on Model 99 is 512Kb. In addition, Model 99 is
equipped with a 20Mb fixed disk drive and a serial
(asynchronous)/parallel (printer) adapter. Each system can be further
expanded through customer setup options.  Model 68 memory may be
expanded to 512Kb by addition of pluggable memory modules on the
system board. Both models may be further expanded to 640Kb with the
128Kb memory option or up to 3Mb with 512Kb memory options.

> Additional direct access storage is available with a 20Mb
Fixed Disk Drive, a second 1.2Mb High Capacity Diskette Drive, and a
Dual-sided (320/360Kb) Diskette Drive. A maximum of two diskette
drives and one fixed disk drive, or one diskette drive and two fixed
disk drives can be attached to the system unit. These combinations
result in direct access storage capacity of up to 41.2Mb.

> DOS 3.0 supports the 20Mb Fixed Disk Drive and 1.2Mb High
Capacity Diskette Drive in the 5170 system. With DOS 3.0, the 1.2Mb
diskette drive will also read single- and dual-sided diskettes
formatted at 160/180Kb and 320/360Kb capacity, respectively.  The
Dual-sided Diskette Drive (320/360Kb) option is available for
downward diskette portability with other IBM Personal Computer family
members.

> The IBM Personal Computer AT is also supported by two other
operating systems. Personal Computer Interactive Executive (PC/IX)
Version 1.1 will support the IBM Personal Computer AT in
compatibility, real address mode.  PC/IX will be available in the
fourth quarter of 1984. The IBM Personal Computer XENIX* will support
the IBM Personal Computer AT in the 80286 protected address mode. IBM
Personal Computer XENIX will be available in the first quarter of
1985.

> The 5170 contains eight option (feature) slots that support
feature cards for additional devices, features, or memory. Six of the
slots support either the advanced 16-bit or 8-bit option cards. Two
support 8-bit option cards only. However, both models use one 16-bit
slot for the standard combination fixed disk and diskette drive
adapter. The Model 99 uses one 8-bit slot for the Serial/Parallel
Adapter. The result is seven available expansion slots on Model 68
and six on Model 99.

> Both models include a world-wide power supply and a
temperature-controlled variable speed cooling fan that significantly
reduces acoustical noise in most user environments. Both models also
include a security keylock, which, when locked by the user, prevents
removal of the 5170 cover, initialization of the system, and entry of
command/data from the keyboard.

> The keyboard is attached to the 5170 via a ten-foot coiled
cable, permitting a variety of workspace configurations. The enhanced
84-key keyboard, with an adjustable typing angle, offers commonly
used data and word processing functions along with separate
typewriter and numeric keypads. Key-location enhancements and mode
indicators (Cap Lock, Numeric Lock, Scroll Lock) improve keyboard
usability. Special symbols may be accessed with a combination of
keys. Depending on the application program, from 10 to 40 special
function keys may be supported.

> Exploring the IBM Personal Computer AT, a program on a
diskette, is supplied with the 5170. It will familiarize a new
computer user with the 5170. The program takes 1-1/2 to 2-1/2 hours
to complete.  There are two versions of the program, monochrome and
color. The program is self-loading from the diskette. It contains
tutorial information on the keyboard, printer, and disk storage, as
well as DOS and text editing. It requires a 5170 with a minimum of
one diskette drive, 256Kb of storage, and one display adapter (either
monochrome or color).

> ### OPTIONAL FEATURES

> #### 256Kb Memory Module Kit (#0202)

> This option increases the 5170 Model 68 memory from 256Kb to
512Kb. The kit consists of 18 modules that are plugged into existing
sockets on the system board. A maximum of one kit may be installed on
Model 68 only.  It is required on the Model 68 for installation
of #0209 and #0203.

> #### 512Kb Memory Expansion Option (#0203)

> This option adds memory above 1Mb, in 512Kb increments.  Up to
five options may be plugged into the I/O expansion slots of the
system unit to provide a total of three megabytes of primary storage.
Performance characteristics are the same as other 5170 user memory.

> The system unit must have at least 512 Kb installed.  This option
requires one 16-bit expansion slot. Note: This option may not be used
for address storage from 512Kb to 640Kb. The memory range from 640Kb
to 1Mb is reserved for system functions.

> #### 128Kb Memory Expansion Option (#0209)

> This option expands the memory from 512Kb to 640Kb.
Performance characteristics are the same as other 5170 user memory.
Only one 128Kb Memory Expansion Option may be installed on a 512Kb
system unit and it requires a 16-bit expansion slot.

> #### 20Mb Fixed Disk Drive (#0205)

> Two optional fixed disk drives may be installed on Model 68 or
one, as a second fixed disk drive, on Model 99, providing a total of
40Mb of fixed disk storage capacity.  Space and power are provided in
the system unit for this drive(s). All fixed disk or diskette drives
use the standard combination fixed disk and diskette drive adapter in
the system unit.  A dedicated landing zone for the read/write heads
is available to protect the file and its contents during shipping,
movement, or storage. Increased performance of 40 ms average access
time is possible from the quasi-closed loop servo positioning system
utilized in the drive.  The number of fixed disk drives and diskette
drives must not exceed three. No more than two fixed disk drives can
be installed in a system unit.

> CHARACTERISTICS:

> *   20Mb of storage
> *   512 bytes per sector
> *   17 sectors per track
> *   615 tracks per surface (cylinders)
> *   40 ms average access time
> *   four surfaces
> *   3573 RPM
> *   5M bit per second transfer rate
> *   Dimensions:
>	- Height 82.55 mm (3.25 inches)
>	- Width 154.3 mm (6.1 inches)
>	- Depth 203.2 mm (8.0 inches)
>	- Weight 2.9 Kg (6.4 lbs.)

> #### High Capacity Diskette Drive (#0206)

> This is a half-high, 5-1/4-inch, dual-sided drive with 1.2Mb
storage capacity. Space and power have been provided in the system
unit for up to two drives.  The drive is fully self-contained and
consists of a spindle drive system, a read positioning system and a
read/write/erase system.

> One of these drives is standard in both models. An optional
second drive (#0206) may be installed in the system unit directly
under the first if the space is not occupied by another disk or
diskette drive. Both drives use the standard fixed disk and diskette
drive adapter in the system unit.

> The drive uses the new 96-TPI, high density media. In
addition, it will read or write 48-TPI, single- or dual-sided media
written for the IBM PCjr, IBM Personal Computer, IBM Personal
Computer XT, and IBM Portable Personal Computer, giving a high level
of compatibility with existing applications.  However, once the
48-TPI media has been written in this drive, it may only be readable
on a high capacity diskette drive.

> CHARACTERISTICS:

> * 1.2Mb storage
> * 512 bytes per sector
> * 15 sectors per track
> * 96 tracks per inch
> * Two sides
> * 80 tracks per side
> * 360 RPM
> * Supports 300 and 500 bits/sec data transfer rate
> * 94 ms average access time in 96-TPI mode
> * Dimensions:
>	- Height 42.9 mm (1.7 inches)
>	- Width 154.3 mm (6.1 inches)
>	- Depth 203.2 mm (8.0 inches)
>	- Weight: 1.6 Kg (3.5 lbs.)

> #### Dual-sided Diskette Drive (#0207)

> This diskette drive permits the exchange of 320/360Kb diskette
media between the Personal Computer AT, to the IBM Personal Computer,
the IBM Personal Computer XT, the IBM Portable Personal Computer, and
the IBM PCjr.  It is a half-high, 5-1/4-inch, dual-sided drive with a
320/360Kb storage capacity.  Space and power for one drive have been
provided in the system unit.  The drive is fully self-contained and
consists of a spindle drive system, a read positioning system, and a
read/write/erase system.

> This drive is available for both 5170 models. It is installed
in the system unit directly under the standard high capacity diskette
drive if the space is not occupied by another fixed disk or diskette
drive. This drive uses the standard fixed disk and diskette drive
adapter in the system unit.

> CHARACTERISTICS:

> * 320/360Kb of storage
> * 512 bytes per sector
> * 8/9 sectors per track
> * Two sides
> * 91 ms average access time
> * 40 tracks per surface
> * 48 tracks per inch
> * 300 RPM
> * Transfer rate of 250K bits/second
> * Dimensions:
>	- Height 42.9 mm (1.7 inches)
>	- Width 154.3 mm (6.1 inches)
>	- Depth 203.2 mm (8.0 inches)
>	- Weight: 1.6 Kg (3.5 lbs.)

> #### Math Co-Processor (#0211)

> This option is a high performance numeric 80287 processor
extension with floating point, extended integer, and BCD data types,
compatible with the Intel 8087 Math Co-Processor.  When installed,
the system fully conforms to the proposed IEEE Floating Point
Standard and is an excellent facility for high-performance numeric
processing.  Only one 80287 can be installed in a system unit.

> #### Serial/Parallel Adapter (#0215)

> This option provides a serial port and a parallel port. It
occupies only one expansion slot of either type.  The serial portion
is fully programmable and supports asynchronous communications from
50 to 9600 baud. The back of the adapter has a nine-pin D-shell
connector that is classified as an RS232-C port. When the optional
10-foot Serial Adapter Cable (#0217) or 10-inch Serial Adapter
Connector (#0242) is connected to the adapter, the 25-pin end of the
cable or connector has all the signals of a standard EIA RS232-C
interface.  The parallel portion of the adapter provides the ability
to attach various devices that accept eight bits of parallel data.
The parallel port is provided by a 25-pin, D-shell connector.  One or
two Serial/Parallel Adapters may be installed in either model. Note:
This adapter does not support current loop operation. The 5218
Printer is not supported.

> #### Prototype Adapter (#0220)

> This adapter is 4.8 inches high by 13.12 inches long and plugs
into any system unit expansion slot except 1 or 7. Two card edge
tabs, one 2 by 31 positions and one 2 by 18 positions, provide all
system control signals and voltages. No components are shipped with
this card.

> The adapter contains a voltage bus (+5 Vdc) and a ground bus
(0 Vdc). Each bus borders the adapter with the ground bus on the
component side and the voltage bus on on the pin side. A system
interface (wiring only) is also provided with a space for a jumper to
specify whether the device has an 8- or a 16-bit data bus.  This
adapter also accommodates a D-shell connector from 9 to 37 positions.
A recommended system interface logic diagram is available along with
a list of recommended components to be used to interface custom logic
to the 5170.  Up to five Prototype Adapters can be installed in a
system unit.  Each requires a 16-bit expansion slot.

> #### Binary Synchronous Communications Adapter (#1204)

> The BSC Adapter provides an EIA RS232-C interface. It is
compatible with the IBM Personal Computer, the Portable Personal
Computer, and the Personal Computer XT. A maximum of two BSC Adapters
may be installed.  Only one BSC Adapter may be installed if an SDLC
Adapter is installed.

> #### SDLC Communications Adapter (#1205)

> The SDLC Communications Adapter provides an EIA RS232-C
interface.  It is compatible with the IBM Personal Computer, the
Portable Personal Computer, and the Personal Computer XT. Only one
SDLC Adapter may be installed.

> #### Floor Standing Enclosure (#0218)

> This optional enclosure is available to customers who desire
to remove their system unit from the work surface.  With the system
unit mounted vertically in the floor standing enclosure, only the
essential parts of the system such as the display and keyboard need
to be on the work surface.  The unit may be positioned left or right
of the workspace or under the workspace.

> #### Display Stand (#0216)

> The display stand is available for the IBM 5151 Monochrome
Display Model 1 and IBM 5153 Color Display Model 1.  It can be placed
under the display to allow the customer to tilt and/or swivel the
display for comfortable viewing.

> ### PUBLICATIONS

> Each system will be shipped with three manuals:

> * IBM Personal Computer AT Installation and Setup Manual (#2491)
> * IBM Personal Computer AT Guide to Operations (#2241)
> * IBM Personal Computer Basic Reference Manual Version 3.0 (#1132)

> The following are available for purchase:

> * IBM Personal Computer AT Technical Reference Manual (#2243)
> * IBM Personal Computer AT Hardware Maintenance and Service Manual (#2242)

{% include gallery/documents.html width="200" height="280" %}
