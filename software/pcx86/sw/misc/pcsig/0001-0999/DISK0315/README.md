---
layout: page
title: "PC-SIG Diskette Library (Disk #315)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0315/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0315"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "C UTILITIES NO 5"

    A set of C subroutines ranging from an explanation for how C does type
    conversion for the beginner to a menu system for application programmers
    to a small C for serious hacker.  Includes a C dump program to aid in
    debugging C programs also.
    
    System Requirements:  Two disk drives, a C compiler
    
    How to Start: To read DOC files, enter TYPE filename.ext and press
    <ENTER>.  To run an EXE program, just type its name and press <ENTER>.
    For instructions on Clistings, refer to your C language manual.
    
    File Descriptions:
    
    CONIO    C    Console I/O getchar scanf ect.
    ADDLF    C    Filter to add line feeds after carrage returns if needed
    CPCLIB   OBJ  Part of CPCN
    CPCN     C    Small C compiler written in C
    CPMFILES C    Makes BDS C look more UNIX compatible
    DUMP2    C    Debug type core dump
    FUNKEY   C    Program to redefine the keyboard
    FRAME    C    Builds a nice frame around menus
    INKEY    C    Get a char from the keyboard
    ISAMC    LBR  OBJ code for ISAM utilites
    LAR      C    CP/M LU program to combine files for upload/download
    ISCHECK  C    Checks Microsofts issomthing matrix
    SNAP     C    Nice snap shot of memory for debugging C programs
    RENAME   C    C program to rename a file
    PRINT    C    Print text files with page numbers, headers, etc.
    LIFE     C    Another life game
    UNTAB4   EXE  UNTAB4 ready to run
    UNTAB4   C    Convert tabs to spaces
    TYPECONV C    Documentation on how C does type conversion
    TOWERS   C    Towers of Hanoi
    TINKEY   C    Test inkey program
    TEXTFORM C    Prints WordStar files even if you don't have WordStar.
    STRING   C    Complete set of string functions
    SNAP     OBJ  Compiled SNAP
    ZAPLOAD  C    Convert Binary file to INTEL hex format
    ZAPLOAD  EXE  ZAPLOAD ready to run
    ZAPLOAD  DOC  Documentation on ZAPLOAD
    _MAIN    C    Shell for main C program that includes command line
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES315.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 315  C Source #2                                        v1   DS
------------------------------------------------------------------------
 
A set of C subroutines ranging from an explantion for how C does type
conversion for the beginner to a menu system for application programers
to a small C for serious hacker.Includes C dump program to aid in debuging
C programs also.
 
ADDLF    C    Filter to add line feeds after carrage returns only if needed
CONIO    C    Console I/O getchar scanf ect.
CPCLIB   OBJ  Part of CPCN
CPCN     C    Small C compiler written in C
CPMFILES C    Makes BDS C look more UNIX compatible
DUMP2    C    Debug type core dump
FRAME    C    Builds a nice frame around menus
FUNKEY   C    Program to redefine the keyboard
INKEY    C    Get a char from the keyboard
ISAMC    LBR  OBJ code for ISAM utilites
ISCHECK  C    Checks Microsofts issomthing matrix
LAR      C    CP/M LU program to combine files for uploading/downloading
LIFE     C    Another life game
PRINT    C    Print text files with page numbers headers ect.
RENAME   C    C program to rename a file
SNAP     C    Nice snap shot of memory for debuging C programs
SNAP     OBJ  Compiled SNAP
STRING   C    Complete set of string functions
TEXTFORM C    Prints wordstar files even if you dont have wordstar.
TINKEY   C    Test inkey program
TOWERS   C    Towers of Hanoi
TYPECONV C    Documentation on how C does type conversion
UNTAB4   C    Convert tabs to spaces
UNTAB4   EXE  UNTAB4 ready to run
ZAPLOAD  C    Convert Binary file to INTEL hex format
ZAPLOAD  DOC  Documentation on ZAPLOAD
ZAPLOAD  EXE  ZAPLOAD ready to run
_MAIN    C    Shell for main c program that includes command line
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## ZAPLOAD.DOC

{% raw %}
```
.he ZAPLOAD- Binary to Intel Hex (c) T. Jennings 1980, 1981, 1982 Page #


	 ZAPLOAD- MSDOS version

	ZAPLOAD  can  be  used  to convert any  file  (binary  is 
assumed)  to  INTEL  hex  format,   and  send  to  one  or   more 
destinations:  a  disk file,  the punch device,  or the  printer. 
There  are  many options to select various things;  ones or  twos 
complement checksums,  where to send the hex, specifying the load 
and start addresses, etc. All of the available options are listed 
below, followed by a more detailed description of each. 

	The  very  last section deals with connecting  a  Sunrise 
Electronics ZAP-80 EPROM burner to a computer via ZAPLOAD,  since 
that was it's original intent.

	ZAPLOAD  gives  a  quick list  and  description  of  it's 
commands when operated improperly. To get this list, type ZAPLOAD 
without  any  command line options.  You will also get  the  list 
whenever you make any command errors.

.pa


	Zapload  is executed from an MSDOS system,  and  converts 
MSDOS files from the disk,  to INTEL hex format.  All options are 
specified  on the command line when ZAPLOAD is run.  ZAPLOAD  has 
the following syntax:

	ZAPLOAD <file to convert> <any legal options ...>


	After  ZAPLOAD has sent the entire file,  it will display 
on  the console a 16 bit two's complement checksum of every  data 
byte sent.  This checksum is of the data bytes only.  This can be 
used  in  conjunction  with the  destination  device  to  provide 
another check of data integrity.

	An  INTEL hex file consists of one or more data  records, 
followed  by  an  end  of file record.  These  records  have  the 
following format:

	DATA RECORDS: : bb llll tt dd dd dd .... cc

	: says this is the start of a record,
	bb is the number of data bytes to follow,
	llll is the address to load the data byte at,
	tt is the record type, 00 for data,
	dd dd ... are the data bytes,
	cc is the checksum of bb llll tt and all dd data
	bytes.

	END OF FILE RECORDS: : bb ssss tt cc

	: is the same as a data record,
	bb is zero, (no data),
	ssss is the program start address,
	tt is 01 to indicate end of file,
	cc is the checksum of bb ssss and tt. 

	There are no data bytes.

	After  the cc bytes have been sent,  a CR LF sequence  is 
sent  for readability.  Programs that read INTEL hex  ignore  any 
characters before the :,  and after the cc checksum.  Or at least 
are supposed to.

	If  you specify no options at all,  ZAPLOAD processes the 
file but does not send the output anywhere. The following are the 
defaults for Intel Hex generation:

	- 32 byte data records (20 hex),
	- 2's complement checksums,
	- Initial load address of 0,
	- Start address of 0.
.pa


	ZAPLOAD OPTIONS

	There  are  many options;  these fall  roughly  into  two 
categories;  those  that  control  the record  format,  for  non-
standard devices (damn them) and those that control where to send 
it as it is generated.

	Options are specified on the command line,  following the 
filename.  Each option is a single letter,  and may appear in any 
order. Some options take an additional argument; like setting the 
load  address.  In  these cases the argument follows  the  option 
letter, seperated by one or more spaces, like so:

	ZAPLOAD file l 8000

	Option  letters may be optionally preceded by  a  -,  for 
UNIX freaks, like so:

	ZAPLOAD file -l 8000

	RECORD FORMAT OPTIONS

	b <hex number>
	Set  the number of bytes sent per record from the default 
20  hex  to <hex number>.  <hex number> must be less  than  1024. 
Please do not use 0. (BUG: ZAPLOAD will not catch a byte count of 
zero.  It  might  try to produce 65535  byte  records,  and  bomb 
everything.)

	z
	Generate  ones  complement  checksums instead  of  two's. 
Obscure option for use with non-standard devices.

	l <hex number>
	Set  the load address to <hex number>.  The default is  0 
hex if this option is not used.  The load address for each record 
sent will increment by the byte count.

	r <hex number>
	Change the default run address of 0 to <hex number>. This 
is used only in the end of file record,  to indicate the starting 
address of the file just sent.  Things like EPROM burners do  not 
use this; some computers with download facilities might.
.pa


	FILE DESTINATION CONTROLS

	The following options control where the file is sent, and 
how it is sent. If none of these are specified, it is merely sent 
to  the  console.  Each  record is always typed on  the  console, 
character by character,  as it is sent,  unless the 'X' option is 
given.  Running ZAPLOAD with only the 'X' option would cause  the 
file  to be sent nowhere at all.  (Why?) A control-Z  terminating 
character  is  sent to the destination device after the  file  is 
transferred.

	a
	Send to the aux device.  This could also be done via  the 
'f' option: f AUX. See below.


	f <file name>
	Create a file <file name>, and send each byte there. This 
can be used to generate INTEL hex disk to disk, without using any 
external devices. 

	w <decimal number>

	Software  delay by <decimal number> after each  character 
is sent.  This can be used for those poorly designed devices that 
require  but  do not use character by  character  handshake.  The 
default here is 0, obviously, and 10 is about 50 milliseconds for 
a  4MHz  Z80.  This  was necessary for the ZAP-80,  as is  has  a 
software UART, and takes too long to process a byte to keep up. 

	Pretty useless with disk files.

	e <decimal number>

	Software  delay after the CR LF sequence at the end of  a 
record.  Some loaders require more time at the end of the record, 
in order to generate and check the checksum. The delay w <decimal 
number> is still done after sending the last cc byte,  but not on 
the CR LF sequence.

.pa

	General Controls

	s <dddd>

	Skip  <dddd> decimal bytes at the beginning of  the  file 
before processing.  This is useful when generating HEX files from 
CP/M .CMD files or the like that have a header at the beginning.

	o
	e

	Process  only  even or odd numbered bytes.  This is  very 
useful when generating EPROM code for 16 bit processors like  the 
8086,  that  have  even bytes in one PROM,  and the odd  ones  in 
another. By using the form:

	zapload file.cmd s 128 e f low.hex
	and
	zapload file.cmd s 128 o f hi.hex

	You  can  make the two EPROM files necessary for an  8086 
bootstrap ROM, or whatever.

	x

	List output on the console. All hex records generated are 
typed.

.pa

	TYPICAL USAGE

	Here  are  some examples for loading INTEL  hex  to  some 
common devices:

	zapload test.com x
	This  loads  test.com to the console,  and sends 32  byte 
records, load address of 0, start address of zero.

	zapload test.com e 10 w 10
	This  loads  a ZAP80 tied to the  punch  port,  with  the 
necessary software delays to accomodate the ZAP80. 

	zapload test.com f test.hex
	Convert  file  test.com  to  hex,  and make  a  hex  file 
test.hex. This "undoes" Digital Research's LOAD utility. 

	zapload test.com l 100 r 100 p f test.hex x
	Convert test.com to Intel hex,  send it to the CP/M  PUN: 
device,  to the disk file TEST.HEX,  and listing it on 
the console. The load address starts at 100h, and the run address 
is 100h.
.pa

	Connecting the ZAP-80 to FIDO or any other computer

	You  will  not find this data in any Sunrise  Electronics 
documentation.  The ZAP80 is filled with bugs,  and the manual is 
terrible.

	- The ZAP80 requires 300 baud,  1 1/2 stop bits.  Idiots. 
Use two stop bits.

	- The ZAP 80 cannot be run faster than 300 baud,  and can 
not handle even this without software delays.

	- Though  they  claim  that  it  uses  the  RTS  line  or 
whatever, it really does not. 

	- Even  though each record may be loading  properly,  the 
display  will  always say there is a load error after  the  first 
record.  Ignore  it,  and once the entire file is  sent,  do  the 
following:

	Reset  the ZAP80,  and checksum the entire data ares just 
sent.  (CKSM key,  then the lower and upper  addresses).  Compare 
this  to  the data checksum typed by ZAPLOAD.  If the  last  four 
digits are the same, all is well. (It usually is)

	HARDWARE CONNECTIONS

	-Use  a typical 3 wire connection,  swapping pins 2 and 3 
until it works. (Necessary on FIDO, and done in it's cable).

	-On the ZAP80, tie pins 4 and 5 together. (Fool RTS)


	Don't forget to set FIDO's punch port,  TUART port B,  to 
300 baud 2 stop bits.


		END OF MANUAL

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0315

     Volume in drive A has no label
     Directory of A:\

    ADDLF    C         640  10-27-83   8:47p
    CONIO    C        4096  10-30-83  11:07p
    CPCLIB   OBJ      2304   4-23-84   3:31p
    CPCN     C       49152   7-29-84   4:25p
    CPMFILES C        9600   7-29-84   4:25p
    DUMP2    C        5248  10-27-83   8:50p
    FILES315 TXT      1920   5-23-85   1:15p
    FRAME    C        1920  10-27-83   8:51p
    FUNKEY   C        3712  10-27-83   8:47p
    INKEY    C        2560   9-25-83  12:28a
    ISAMC    LBR     26368  11-28-84   8:43p
    ISCHECK  C        1536  10-27-83   8:48p
    LAR      C       16384   7-29-84   4:25p
    LIFE     C        5504  10-27-83   8:54p
    PRINT    C        3072  10-30-83  11:04p
    RENAME   C         512  10-27-83   8:59p
    SNAP     C        2432  12-19-83   3:26p
    SNAP     OBJ      1667  12-21-83   8:25a
    STRING   C        1792  10-27-83   9:00p
    TEXTFORM C        8832   7-29-84   4:25p
    TINKEY   C        1024   9-25-83  12:29a
    TOWERS   C        3456  10-27-83   9:01p
    TYPECONV C        1536  10-27-83   9:02p
    UNTAB4   C        4210   2-25-84   5:43a
    UNTAB4   EXE     13312   2-26-84  11:53p
    ZAPLOAD  C       12800   7-29-84   4:25p
    ZAPLOAD  DOC      8832   7-29-84   4:27p
    ZAPLOAD  EXE     17536  12-20-83  11:52a
    _MAIN    C        1536  10-29-83  11:34a
           29 file(s)     213493 bytes
                           97280 bytes free
