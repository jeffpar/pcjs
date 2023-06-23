---
layout: page
title: "PC-SIG Diskette Library (Disk #392)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0392/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0392"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMPILED PASCAL"

    File Descriptions:
    
    ???????? LIB  Pascal library file (33 files).
    ???????? PAS  Pascal source file (35 files).
    ???????? DAT  Data file (4 files).
    FILENAME TYP  Type declaration command.
    LESSRAM  COM  Resets memory to specified size.
    NUMDISKS COM  Resets number of disk drives on system.
    PARAMETR COM  Lists parameters of the command line in pascal.
    README   ###  Information file.
    READTHIS NOW  Information file.
    REGPACK  TYP  Type command for pascal.
    SCREENS  TYP  Type command for pascal.
    SUCCESS  DOC  Documentation for SUCCESS.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES392.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 392   Compiled PASCAL Routines Library                  v1 DS
------------------------------------------------------------------------
Library of Pascal routines to be used when linking Pascal object files.
 
WHEELS   LBR  Library of routines for use with Pascal compiler which
              includes :
 
 ALLFILES  EXISTFIL  GETINTGR  KAVAIL    MOVEFILE  REBOOT    SUCCESS
 CIRCLE    EXTENDIO  GETKEYS   KEYBOARD  NEWINT9   RECTANGL  TITLES
 CURSOR    FANCYKEY  GETSECTR  KEYCHART  NOSOUND   REGPACK   WINDOWS
 DISKMOD   FILEATTR  GETSETDD  LABEL     NUMDISKS  SAFEWRIT
 DISKTYP   FILENAME  GRFXTABL  LESSRAM   PARAMETR  SCANCODE
 EQUIPMNT  GETFILE   GTSETDIR  MKRMDIR   POPSCREN  SCREEN
 ERRMESSG  GETFREE   HEXFUNCT  MONITOR   QUEUE     SCREENS
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## SUCCESS.DOC

{% raw %}
```
        ||================================================================||
        ||                                                                ||
        ||   THIS IS N*O*T A DESCRIPTION OF THE FILES ON T*H*I*S DISK.    ||
        ||   MR. TODD'S ROUTINES ARE AVAILABLE FOR $20. FROM THE ADDRESS  ||
        ||   BELOW.  THERE IS A CERTAIN AMOUNT OF OVERLAP BETWEEN HIS     ||
        ||   ROUTINES AND MINE, BUT ENOUGH DIFFERENCES TO MAKE IT WORTH   ||
        ||   GETTING HIS DISK.                                            ||
        ||                   Neil J. Rubenking                            ||
        ||                                                                ||
        ||================================================================||



        The Success Press          Box 2795  Des Plaines, Illinois 60018
        ================================================================


                    Procedures and Functions For Turbo Pascal

                                  Version 1.07

                          (C) Copyright 1984 W. E. Todd



                              - Batch Programming -

        Seterrlv         Allows  a  program  to  set  the  DOS errorlevel
                         variable  upon  termination.  The errorlevel can
                         be  tested  using the batch IF statement to find
                         out   if   the   program   terminated  normally.
                         Requires DOS 2.00 or later.


                               - System Services -

        Cursrsiz.inc     Set the cursor size.

        Dosrelnm.inc     Gets  the DOS release number.  Requires DOS 2.00
                         or later.

        Getdefdr.inc     Gets the letter of the default disk drive.

        Setdefdr.inc     Sets the default disk drive.

        Getdate.inc      Gets the system date.

        Setdate.inc      Sets the system date.

        Gettime.inc      Gets the system time.

        Settime.inc      Sets the system time.

        Setverfy.inc     Turns disk write verification on or off.

        Togglkey.inc     Turns    Insert,    Caps-Lock,    Num-Lock   and
                         Scroll-Lock on or off.

        Numprntr.inc     Returns  the number of parallel printer ports on
                         the system.

        NumRS232.inc     Returns  the number of RS232 serial ports on the
                         system.


                                  - Diskettes -

        Chngattr.inc     Sets  or clears the read only, hidden, system or
                         archive attributes of a disk file.

        Diskdir.inc      Reads and writes the diskette directory.

        Diskspac.inc     Gets  the  amount  of  free space on a diskette. 
                         Requires DOS 2.00 or later.

        Disktype.inc     Tells  if the diskette is single or double sided
                         and 8 or 9 sectors per track.

        Chdir.inc        Change  the  current  directory.    Requires DOS
                         2.00 or later.

        Mkdir.inc        Create  a  subdirectory.    Requires DOS 2.00 or
                         later.

        Rmdir.inc        Remove  a  subdirectory.    Requires DOS 2.00 or
                         later.


                                - Input/Output -

        Initcomm.inc     Initializes   an   RS-232  communications  port. 
                         Similar to the OPEN COM statement in BASIC.

        Statcomm.inc     Returns  the communications port line status and
                         modem status bits.

        Cmdparam.inc     Gets  the  parameters following the program name
                         on  the  command  line,  converts  them to upper
                         case  and  separates them into the elements of a
                         string array.

        Dispmode.inc     Gets the current video display mode.

        Getscrch.inc     Gets   the   character  at  the  current  cursor
                         position on the screen.

        Getscrat.inc     Gets  the attribute byte of the character at the
                         current cursor position.

        Inkey.inc        Works  like  the  BASIC INKEY$ statement.  Waits
                         for  a keyboard key to be struck and returns the
                         corresponding  character  in  a  string.  If the
                         key  has  a  two  byte  extended code a two byte
                         string  is returned containing both bytes of the
                         extended code.

        Inkeyclr.inc     Clears  the  keyboard buffer, waits for a key to
                         be  struck  and returns the key in a string.  By
                         clearing   the  keyboard  buffer  this  function
                         forces  the  program  to  wait  for  a key to be
                         struck after the function is executed.

        Readpixl.inc     In  graphics mode returns the value of the pixel
                         at the specified location.

        Spc.inc          Returns  the  specified  number of spaces.  This
                         can  be  used  like  the  BASIC  SPC function to
                         insert spaces in an output record.

        Tab.inc          Tabs  to  the  specified  column when writing to
                         the screen.

        Drawabox.inc     Draws  a box of any size on the screen.  You can
                         specify  the  character(s)  to be used.  This is
                         handy  for  outlining  windows or other text for
                         emphasis.

        Textbord.inc     Sets the vidio display border color.


                                   - Printer -

        Printscr.inc     Invokes   the  print  screen  function  just  as
                         though you had typed Shift-PrtSc.

        Resetptr.inc     Resets  the printer using the BIOS printer reset
                         routine.   This not only resets the printer, but
                         if  the printer is off line it will be placed on
                         line.

        Statptr.inc      Returns  the  printer  status word.  This allows
                         you  to tell if the printer is on line or out of
                         paper.


                              - Bit Manipulation -

        Clr-bits.inc     Clears  any  string  of  consecutive  bits  in a
                         word.

        Set-bits.inc     Sets any string of consecutive bits in a word.

        Ext-bits.inc     Extracts  any  string of consecutive bits from a
                         word and returns their value as an integer.

        Ins-bits.inc     Inserts  the  string  of  bits  representing  an
                         integer at any location in a word.


                                    - Math -

        Dectohex.inc     Converts  an  integer  to  a  hex  string.   For
                         example, 10 is converted to $000A.

        Hextodec.inc     Converts  a  one to four character hex string to
                         an integer.  For example, $FFFF returns -1.

        Ipower.inc       Raises an integer to an integer power.

        Power.inc        Raises a real number to a real power.

        Cendate.inc      Provides  three  routines to do date arithmetic.
                         One  converts  Gregorian date to day of century,
                         another  converts  day  of  century to Gregorian
                         date  and  the  third  determines the day of the
                         week from day of century.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0392

     Volume in drive A has no label
     Directory of A:\

    READTHIS NOW     25144   9-25-85   3:38p
    README   ###      5280   9-25-85   3:38p
    ALLFILES LIB      6955   9-25-85   3:39p
    ALLFILES PAS      2485   9-25-85   3:39p
    CIRCLE   LIB      1259   9-25-85   3:39p
    CIRCLE   PAS       530   9-25-85   3:39p
    CURSOR   LIB       913   9-25-85   3:39p
    CURSOR   PAS      1280   9-25-85   3:39p
    DISKMOD  PAS     12762   9-25-85   3:39p
    DISKTYP  LIB      1571   9-25-85   3:39p
    DISKTYP  PAS       656   9-25-85   3:39p
    EQUIPMNT LIB      2642   9-25-85   3:39p
    EQUIPMNT PAS       983   9-25-85   3:39p
    ERRMESSG LIB      1432   9-25-85   3:39p
    EXISTFIL LIB      1218   9-25-85   3:39p
    EXISTFIL PAS       812   9-25-85   3:39p
    EXTENDIO DAT      3154   9-25-85   3:39p
    EXTENDIO LIB      8862   9-25-85   3:39p
    EXTENDIO PAS      2482   9-25-85   3:39p
    FANCYKEY PAS      3862   9-25-85   3:39p
    FILEATTR LIB      1061   9-25-85   3:39p
    FILEATTR PAS      2428   9-25-85   3:39p
    FILENAME TYP       251   9-25-85   3:39p
    GETFILE  LIB      3841   9-25-85   3:39p
    GETFILE  PAS      6299   9-25-85   3:39p
    GETFREE  LIB      1417   9-25-85   3:39p
    GETFREE  PAS      1126   9-25-85   3:39p
    GETINTGR LIB      3183   9-25-85   3:39p
    GETINTGR PAS      1137   9-25-85   3:39p
    GETKEYS  LIB       755   9-25-85   3:39p
    GETKEYS  PAS      1071   9-25-85   3:39p
    GETSECTR LIB      2571   9-25-85   3:39p
    GETSETDD LIB       983   9-25-85   3:39p
    GETSETDD PAS       566   9-25-85   3:40p
    GRFXTABL LIB      1210   9-25-85   3:40p
    GRFXTABL PAS      1795   9-25-85   3:40p
    GTSETDIR LIB      1638   9-25-85   3:40p
    GTSETDIR PAS      1744   9-25-85   3:40p
    HEXFUNCT LIB      1475   9-25-85   3:40p
    HEXFUNCT PAS      1215   9-25-85   3:40p
    KAVAIL   LIB       467   9-25-85   3:40p
    KAVAIL   PAS       331   9-25-85   3:40p
    KEYBOARD LIB      1581   9-25-85   3:40p
    KEYBOARD PAS      2139   9-25-85   3:40p
    KEYCHART DAT      1742   9-25-85   3:40p
    LABEL    PAS     10969   9-25-85   3:40p
    LESSRAM  COM     10539   9-25-85   3:40p
    LESSRAM  PAS      2824   9-25-85   3:40p
    MKRMDIR  LIB      1581   9-25-85   3:40p
    MKRMDIR  PAS      1366   9-25-85   3:40p
    MONITOR  LIB       700   9-25-85   3:40p
    MOVEFILE LIB      1530   9-25-85   3:40p
    MOVEFILE PAS       854   9-25-85   3:40p
    NEWINT9  LIB      3475   9-25-85   3:40p
    NEWINT9  PAS      1398   9-25-85   3:40p
    NOSOUND  PAS        44   9-25-85   3:40p
    NUMDISKS COM     11214   9-25-85   3:40p
    NUMDISKS PAS      3394   9-25-85   3:40p
    PARAMETR COM     10359   9-25-85   3:40p
    PARAMETR LIB       803   9-25-85   3:41p
    PARAMETR PAS      1233   9-25-85   3:41p
    POPSCREN DAT      2049   9-25-85   3:41p
    POPSCREN LIB      1771   9-25-85   3:41p
    POPSCREN PAS      6110   9-25-85   3:41p
    QUEUE    LIB      1892   9-25-85   3:41p
    QUEUE    PAS      2234   9-25-85   3:41p
    REBOOT   LIB       742   9-25-85   3:41p
    RECTANGL LIB       767   9-25-85   3:41p
    RECTANGL PAS       888   9-25-85   3:41p
    REGPACK  TYP       103   9-25-85   3:41p
    SAFEWRIT LIB      1014   9-25-85   3:41p
    SAFEWRIT PAS      1087   9-25-85   3:41p
    SCANCODE DAT      2735   9-25-85   3:41p
    SCREEN   LIB      1914   9-25-85   3:41p
    SCREEN   PAS      4025   9-25-85   3:41p
    SCREENS  TYP       899   9-25-85   3:41p
    SUCCESS  DOC      7820   9-25-85   3:41p
    TITLES   LIB      1022   9-25-85   3:41p
    TITLES   PAS      1496   9-25-85   3:41p
    WINDOWS  LIB      2737   9-25-85   3:41p
    WINDOWS  PAS      1533   9-25-85   3:41p
    FILES392 TXT       948  10-04-85  11:25a
           82 file(s)     232377 bytes
                           49152 bytes free
