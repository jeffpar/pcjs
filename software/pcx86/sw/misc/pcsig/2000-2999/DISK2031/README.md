---
layout: page
title: "PC-SIG Diskette Library (Disk #2031)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2031/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2031"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TSR DOWNLOAD"

    TSR DOWNLOAD is a memory resident soft font manager.  (The program also
    works from the command line.)  Once installed TSR DOWNLOAD will:
    
    ~ Pop up in any non-graphics mode application
    
    ~ Locate your soft fonts automatically
    
    ~ Translate the fonts into an easy to read English language format
    
    ~ Download individual or lists of fonts fast (100K in 16 seconds!)
    
    ~ Select any soft font
    
    ~ Create a soft font list for you
    
    ~ Remember what fonts have been sent to your printer and how much memory
    they require
    
    ~ Warn you when you are about to exceed your printer's memory limits
    
    ~ Control basic printer operations like form feeds, resetting the
    printer, deleting soft fonts in the printer, returns back to the
    default font of your printer, changes between 10 & 16.6 cpi or
    between portrait and landscape modes, force true 66 lines per page, set
    line spacing, and switch between manual and tray feed
    
    ~ Download DeskJet soft fonts by order of size
    
    ~ Occupy 34K of RAM and supports 100 soft fonts.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DL.DOC

{% raw %}
```












                          T S R   D o w n l o a d

                                Version 2.9






                    A memory resident soft font manager
                           with font compression










                                    by

                            Elfring Soft Fonts
                                P.O. Box 61
                             Wasco, IL  60183
                               708-377-3520
                             FAX: 708-377-6402

                              CIS: 72417,3437









             Copyright 1988, 1989, 1990 by Elfring Soft Fonts
                            All rights reserved




                             TABLE OF CONTENTS


     INTRODUCTION..................................................  1
       Requirements................................................  1
       Commands....................................................  2

     CONFIGURING TSR DOWNLOAD......................................  3
       Start Up....................................................  3
       SETCOLOR....................................................  3
       DLCFG.......................................................  4
       The Hot Key.................................................  5
       Parallel or Serial..........................................  6
       Printer Port Number.........................................  6
       Ignore Printer Port Status..................................  6
       Drive, Path, & Wild Card....................................  6
       Stopping Noise..............................................  7
       First Soft Font ID Number...................................  7
       Window Position.............................................  7
       Printer Memory..............................................  8
       Memory Swapping.............................................  8
       Enable Mouse................................................  9
       Enable Font Decompression...................................  9
       Create Landscape Fonts...................................... 10
       Saving A New Version........................................ 10

     LOADING TSR DOWNLOAD.......................................... 11

     RUNNING TSR DOWNLOAD.......................................... 13
       Command Summary............................................. 14
       Exit........................................................ 14
       Mark........................................................ 14
       Change Subdirectory......................................... 15
       Download.................................................... 15
       Find........................................................ 15
       Help........................................................ 16
       ID Number................................................... 16
       Lists....................................................... 16
       Memory...................................................... 18
       Output Control.............................................. 18
       Printer Control Menu........................................ 18
       Select a Font............................................... 19

     FONT COMPRESSION.............................................. 20

     USING TSR DOWNLOAD WITH OTHER PROGRAMS........................ 21

     FONTCAT....................................................... 23

     COMMON PROBLEMS............................................... 24




                             TABLE OF CONTENTS


     SHAREWARE INFORMATION......................................... 26

     ASSOCIATION OF SHAREWARE PROFESSIONALS........................ 27

     WARRANTY...................................................... 27

     TSR DOWNLOAD ORDER FORM....................................... 28


                               INTRODUCTION

     TSR Download is a soft font manager.  It works with any  HP  com-
     patible  soft  font for either LaserJet or DeskJet printers.  The
     program locates your soft fonts automatically and  displays  them
     in  English.  It  will  let you compress your soft fonts and then
     decompress them  on-the-fly  as  they  are  being  sent  to  your
     printer.  (This  can cut your storage requirements for soft fonts
     by a factor of 8.) TSR Download also remembers what fonts are  in
     your printer and how much memory they need.  When memory resident
     the program requires only 7K of RAM.

     This   software   package   contains   six   separate   programs:
     INSTALL.EXE,   DL.EXE,   DLCFG.EXE,  SETCOLOR.EXE,  CFT.EXE,  and
     FONTCAT.EXE.   INSTALL moves and unpacks files,  helping you  in-
     stall the program for the first time.  The DL.EXE,  SETCOLOR.EXE,
     and DLCFG.EXE programs are  part  of  the  TSR  Download  system,
     CFT.EXE compresses soft fonts,  and FONTCAT.EXE is a utility that
     prints catalogs or reports of your soft fonts.   A  READ.ME  file
     may  be  included on this disk and,  if so,  contains information
     about any recent changes to the programs.

     If you purchased a soft font set along with  TSR  Download  addi-
     tional  files  will  be present.  These files are self-extracting
     libraries of soft fonts.  A typical set of Roman and  Helv  fonts
     will  come in two to four library files,  for example: ROMAN.EXE,
     and HELV.EXE.  The INSTALL program will normally handle unpacking
     these fonts. If you want to unpack them yourself,  copy them to a
     disk  with  free  space and type the program name followed by the
     enter key.  Once the individual fonts are unpacked you may delete
     the  library  file  from  that  disk,  (but not from the original
     master disk).

     TSR Download is a memory resident, (Terminate-and-Stay-Resident),
     utility program for the IBM PC.  It can also run from the command
     line  or  in  batch  file.  The TSR Download program must be con-
     figured before it is used.  If you want to use the program in its
     memory resident mode you must load the program into memory before
     using it.  The program can then be called up from within any non-
     graphics application (or from within MS Word no matter  what  the
     mode)  by  hitting  a  Hot-Key.  TSR Download has a simple to use
     point and shoot interface and always offers a  help  screen.  The
     program  can  be  removed  from memory with a simple command line
     switch.


     Requirements

     TSR Download requires an IBM PC, XT,  AT,  PS2 or compatible com-
     puter  with  PC-DOS  or MS-DOS operating systems 2.1 and up.  TSR
     Download occupies 7K of RAM when loaded into memory in the  swap-
     ping mode.  An HP LaserJet+,  Series II,  IID,  IIP,  III,  2000,
     DeskJet, or compatible printer is required, along with a parallel

                                                                     1


     or serial printer port. Printer ports LPT1, LPT2, LPT3, COM1, and
     COM2 are supported.  TSR Download will work with  any  soft  font
     that  is  compatible  with  the  HP  line  of LaserJet or DeskJet
     printers.


     Commands

     Commands in TSR Download are mnemonic or function key based.  You
     can  pick  whichever style you are more comfortable with.  If you
     use mnemonic commands the <D> key stands for  Download,  the  <M>
     key for Memory, the <P> key for Printer Control, etc.  If you use
     function keys the <F10> key stands for Download, the <F6> key for
     Memory,  the <F8> key for Printer Control, etc. TSR Download also
     supports a mouse. The basic command set includes:


     <Esc>             Exit Download or move back one level
     <Ret> or <Space>  Mark a font for later downloading
     <C>               Change the main soft font subdirectory
     <D> or <F10>      Download all previously marked fonts
     <F> or <F5>       Find the first font  name beginning with ?
     <H> or <F1>       Help screen
     <I> or <F3>       Set the next soft font ID number
     <L> or <F7>       Font List management
     <M> or <F6>       Display fonts in you printer's Memory
     <O> or <F4>       Output to parallel, serial, or file
     <P> or <F8>       Printer control menu
     <S> or <F9>       Select the highlighted soft font
                       Mouse - use to move through fonts or menus
                       Left mouse button - mark font or item
                       Right mouse button - answer yes to a question






















     2


                         CONFIGURING TSR DOWNLOAD


     Start Up

     The TSR Download  program  can  be  used  as  a  memory  resident
     manager,  a command line program,  or a batch file downloader. To
     use TSR Download in any of these modes  you  must  configure  the
     program before running it the first time.

     The  very  first  thing you need to do is to install the program.
     The master disk contains  an  install  program  that  makes  this
     process  painless.  First  backup  the  master  disk  and put the
     original away.  Then put the backup master disk into  any  floppy
     disk  drive.  At  the DOS prompt type the floppy drive letter,  a
     colon, and the word install. For example,  if you put the disk in
     drive B: type:

     b:install <enter>

     The INSTALL program will prompt you for everything it needs. Once
     the  TSR  Download  package  is installed follow the instructions
     below.


     SETCOLOR

     The first step in configuring the TSR Download program is to  run
     the  SETCOLOR  program.  TSR Download is distributed with default
     colors that should work on almost  any  monitor.  However,  these
     general  colors  are  not as attractive as they can be since they
     must be compatible with as many monitors as  possible.  The  SET-
     COLOR  utility  modifies the colors that the TSR Download program
     will use.

     To run SETCOLOR, both DL.EXE and SETCOLOR.EXE must be in the same
     subdirectory. In addition, TSR Download may not already be loaded
     into memory. You start SETCOLOR by typing:

     setcolor <enter>

     SETCOLOR will print an instruction screen and show you the colors
     that TSR Download will use the next time it  is  loaded  and  ac-
     tivated.  You  use  the function keys to alter these colors.  TSR
     Download has four different types of information,  each of  which
     may be displayed in a different color.  For each choice there are
     16 possible colors that can be picked.  <F7>  changes  the  back-
     ground  color,  <F8> the text color,  <F9> the cursor color,  and
     <F10> the marked font color.  Pressing a function key  repeatedly
     toggles  you  through  the  range of 16 possible colors.  You can
     change the direction of the toggle function by pressing (Insert).



                                                                     3


     Almost all display systems are capable of showing three  distinct
     colors.  (Monochrome displays can do this too!) Simply pick a set
     of colors that you like. We favor a blue background,  white text,
     red cursor text,  and green marked text. (This color scheme won't
     work on a laptop or monochrome display.) Once you  have  a  color
     scheme that you like hit the <Esc> key. The SETCOLOR program will
     ask you if you want to save this set of colors. Answer with a <Y>
     for yes or an <N> for no. If you answer yes, SETCOLOR will modify
     the  TSR  Download  program so that your color choices are always
     used.


     DLCFG

     The  DLCFG.EXE  program  configures  the  TSR  Download   program
     (DL.EXE) for your particular computer system.  This configuration
     program must be run before  you  try  to  use  the  TSR  Download
     program!  Remember  that  the  DLCFG  program modifies the DL.EXE
     program.  To start the configuration process, make sure that both
     DL.EXE and DLCFG.EXE are in the current subdirectory. (It doesn't
     matter where this is.) Then type:

     dlcfg <enter>

     The configuration program will start and attempt  to  locate  the
     DL.EXE program. (If DL.EXE is not found the configuration program
     will  quit.) The initial screen lets you know the current version
     of the program and lists the basic control keys.  Hit any key  to
     move on to the configuration screen.  Here you can modify all the
     major features of the TSR Download program.

     The  configuration program will display 19 different features you
     can alter. To modify a feature,  use the up or down arrow keys to
     move  to  the feature you want to change.  The help window at the
     bottom of the configuration screen will explain what options  you
     have  for  this  data  field.  Typically,  you type or edit a new
     response,  followed by hitting the  <enter>  key.  When  you  are
     finished modifying items hit the <F10> key. DLCFG will ask you if
     you  want  to  save these changes.  The main configuration screen
     looks as follows:














     4


         Hot-Key Control/Shift/Alt:           Ctrl + Alt
         Hot-Key Data Key:                    D
         Parallel or Serial (P/S)             P
         Printer Port #:                      1
         Ignore Printer Port Status:          N
         Main Disk Drive, Path, & Wild Card:  C:\fonts\*.usp
         2nd Disk Drive, Path, & Wild Card:
         3rd Disk Drive, Path, & Wild Card:
         4th Disk Drive, Path, & Wild Card:
         Beep On Error:                       Y
         First Soft Font ID Number:           0
         Upper Left Column of Window:         13
         Upper Left Row of Window:            8
         Printer RAM Memory:                  512
         Memory Swap Type:                    0
         Memory Swap Path:                    c:\
         Enable Mouse (Y/N):                  Y
         Enable Font Decompression (Y/N):     Y
         Create Landscape Fonts (Y/N):        N


     The following section describes each TSR  Download  configuration
     option.  Please  verify each option you change before leaving the
     configuration program.  Incorrectly configured programs will  not
     operate the way you expect them to.


     The Hot-Key

     No two memory resident programs use the same Hot-Key combination.
     TSR  Download  lets you change the Hot-Key to any combination you
     want. There are two entries in the configuration program that al-
     ter the Hot-Key.  The first entry changes  the  control/alt/shift
     key  combination,  while  the  second entry changes the data key.
     Your Hot-Key must always be some combination of control and  data
     keys.

     To  change the control key sequence,  move the cursor to the Hot-
     Key Control/Shift/Alt: line.  Use the <Space> key to  toggle  be-
     tween combinations of the <Ctrl>, <Alt>, <L-Shift>, and <R-Shift>
     keys.  When  the  display  shows the control code combination you
     want,  hit the <enter> key.  All the control keys shown  must  be
     held down together with the data key to activate the TSR program.

     To change the data key,  move the cursor to the Hot-Key Data Key:
     line.  Now hit and data key you want to use followed by a <enter>
     key.  You  have just altered the Hot Key sequence.  If you make a
     mistake and enter something you don't want  here,  just  hit  the
     <Esc> key to return to the original entry.





                                                                     5


     Parallel or Serial

     Download will work with parallel or serial printer ports.  If you
     have a choice you should use a parallel  printer  port.  Parallel
     communication is much faster than serial.  (TSR Download can send
     fonts over a  parallel  port  at  speeds  up  8.9  kilobytes  per
     second.)  Enter a <P> for a parallel printer port or an <S> for a
     serial printer port,  followed by a <enter> key.  If you  make  a
     mistake  and  enter  something you don't want here,  just hit the
     <Esc> key to return to the original entry. Note that if you chose
     serial communication you must initialize the communications  port
     yourself.  TSR Download will not do this for you! You can use the
     DOS mode command to set the serial communication  rate.  For  ex-
     ample, to set 9600 baud on communications port 1 type:

     mode COM1:9600,N,8,1,P <enter>


     Printer Port Number

     This option lets you specify the port number that your printer is
     connected to. You can specify a parallel printer port number from
     1 to 3,  or a serial printer port number from 1 to 2.  Only these
     numbers will be accepted.  If the number you enter  is  incorrect
     the screen will remain in edit mode. Hit the <enter> key when the
     printer  port  is correct.  If you make a mistake and enter some-
     thing you don't want here,  just hit the <Esc> key to  return  to
     the original entry.


     Ignore Printer Port Status

     The TSR Download program always checks the status of the parallel
     printer  port before sending any data.  This normally works quite
     well.  However,  if you map a parallel port to a serial  one  via
     MODE or a network,  or if you have a non-standard, or a very fast
     computer you may experience problems.  TSR Download  might  think
     your  printer  port  is  busy  when  it is actually free.  If TSR
     Download indicates that your printer port is busy when  you  know
     it is not,  you can use this option to tell the program to ignore
     printer status. If you have printer problems like this try chang-
     ing the <N> to a <Y> followed by a <enter> key.


     Drive, Path, & Wild Card

     TSR Download needs to be told where your soft fonts  are  stored.
     You  can  specify  up  to  four  separate subdirectories for soft
     fonts. Each entry must specify the disk drive, subdirectory path,
     and wild card to be used to locate your fonts.  If you are  using
     optional  font  compression the wild card must be set to *.*.  To
     alter an entry move the cursor to the Main Disk  Drive,  Path,  &
     Wild Card:,  (or the 2nd,  3rd,  or 4th),  line and enter a valid

     6


     drive,  path,  and wild card.   If you make a mistake  and  enter
     something  you don't want here,  just hit the <Esc> key to return
     to the original entry. For example:

     D:\fonts\*.usp
     C:\*.*
     D:\WS2\FONT\*.??l

     Do not tell TSR Download that your soft fonts are located in  the
     current  subdirectory  by  typing:  *.*.  You  must supply a disk
     drive, path, and wild card.  The wild card pattern can be used to
     speed  up the process of locating soft fonts.  If your soft fonts
     are mixed in with other files you can locate  them  more  quickly
     through  the  use of this wild card.  For example,  the wild card
     pattern ``*.US?'' will find all files with the extension ``.USP''
     or ``.USL''.  If your fonts are located in their own special sub-
     directory  you  can use the ``*.*'' wild card to locate all files
     in that subdirectory.  Once again,  if you use font  compression,
     the wild card must be *.*.


     Stopping Noise

     The TSR Download program normally beeps when you try and move the
     cursor  off  the screen,  or use a key that's not recognized.  In
     some office environments this can be annoying.  You can turn this
     feature  off by doing the following.  Move the cursor down to the
     Beep On Error: line.  Enter an <N> followed by the <enter> key if
     you  want peace and quite.  If you make a mistake and enter some-
     thing you don't want here,  just hit the <Esc> key to  return  to
     the original entry.


     First Soft Font ID Number

     When  a  soft  font  is sent to the printer it must be assigned a
     soft font ID number. Each soft font must have a unique number as-
     sociated with it.  TSR Download normally starts assigning ID num-
     bers  with  0  and adds 1 for each soft font downloaded.  You can
     change this initial number here in the configuration  program  or
     in the actual Download program using option <I>.  Move the cursor
     to the First Soft Font ID Number: line.  Now enter any ID  number
     from  0 - 32,767 followed by the <enter> key.  If you make a mis-
     take and enter something you don't want want,  just hit the <Esc>
     key to return to the original entry.


     Window Position

     The  TSR  Download program normally pops up in the middle of your
     screen. You can change the position of this window. There are two
     different configuration entries that can be used change the loca-
     tion of the TSR Download window.  One entry controls the  column,

                                                                     7


     and  the other the row where the window will appear.  (Upper left
     row & column.) Move the cursor to the Upper Left Column  of  Win-
     dow:  line  and enter a number from 0 to 26.   This will vary the
     location of the window from left to right across the screen.

     Now move the cursor down to the Upper Left Row  of  Window:  line
     and enter a number from 0 to 13.   This will vary the location of
     the window from the top to the bottom of the screen.  If you make
     a  mistake and enter something you don't want here,  just hit the
     <Esc> key to return to the original entry.


     Printer Memory

     Since the TSR Download program knows how much  memory  each  font
     will  use in your printer,  the program can be set up to warn you
     when you try and download more fonts than your printer will hold.
     Just enter the number of kilobytes of  RAM  memory  your  printer
     has. A DeskJet has 128, 256, or 512 kilobytes of memory. A Laser-
     Jet  typically  comes with 512 kilobytes.  If you have additional
     memory it usually is added in 1 megabyte sections. So if you have
     1  megabyte  of  additional  memory  you  have  1560   kilobytes,
     (remember  the  512K  you started with),  or with 2 megabytes you
     have 2608 kilobytes.  To set a new memory limit,  move the cursor
     to  the  ``Printer  Memory:''  line.  Now  enter your printer RAM
     memory from 0 - 6000 followed by the <enter> key. You can disable
     this memory limit check by entering 0.  If you make a mistake and
     enter  something  you don't want here,  just hit the <Esc> key to
     return to the original entry.

     DeskJet Plus owners with 512K of  memory  should  note  that  TSR
     Download  alters  the  memory amount entered if it is larger than
     256K.  The program assumes that if you have  more  than  256K  of
     memory  you  have  a laser printer.  A laser printer with 512K of
     memory actually only has 285K of free memory for fonts. So,  when
     you  enter  a  RAM amount over 256K,  TSR Download subtracts 227K
     from this number.  The easiest way around this is to add 227K  to
     your memory amount.  Thus a DeskJet owner with 512K of RAM should
     enter 739K.


     Memory Swapping

     Most people don't want to sacrifice much memory to TSR  programs.
     To save space, TSR Download has the ability to swap itself in and
     out  of memory.  When swapping is enabled TSR Download takes only
     7K of RAM.  Swapping is only useful for people with: a hard disk,
     EMS memory, or a RAM disk.

     When  memory  swapping is enabled a small portion of TSR Download
     sits in memory as a TSR. The rest of the program is saved on hard
     disk, RAM disk, or in EMS memory.  When you activate TSR Download
     part  of your current application program is swapped or exchanged

     8


     with the TSR Download code that was on the disk or in EMS memory.
     The act of swapping program code is quite fast. Note that because
     portions of computer memory are swapped with disk the order  that
     programs are loaded into memory becomes very important.  If,  for
     example, you are using a mouse with TSR Download the mouse driver
     must be loaded before TSR Download. Otherwise, TSR Download might
     swap the actual mouse driver code out of  memory!  Likewise,  TSR
     Download  must  be  loaded  before  any program that you want TSR
     Download to pop up in.

     Two options control memory swapping.  The Memory Swap Type: entry
     tells TSR Download how to swap the program. Entering a 0 lets TSR
     Download make its own best choice.  (EMS memory is favored first,
     then hard disk.) Entering a 1 forces TSR Download to swap to  EMS
     memory, if possible. A 2 forces swapping to hard disk. Do not use
     option  3  which uses a special driver to access extended memory.
     Finally, if you want to disable swapping enter a 4. If you make a
     mistake and enter something you don't want  here,  just  hit  the
     <Esc> key to return to the original entry.

     The second option Memory Swap Path: tells TSR Download what drive
     and  path  to  place disk files in when the program is swapped to
     disk.  You must enter a drive and path here even if  swapping  to
     EMS memory is chosen.  If you have a RAM disk in your system, use
     this disk drive and path as the Memory Swap Path.  This will sig-
     nificantly speed up program operation.


     Enable Mouse

     TSR Download supports a mouse.  The mouse is used to move through
     the lists of fonts or menu options. You can also use the mouse to
     select a font or menu option.  The Enable Mouse: option lets  you
     control  this feature.  If you answer with an <N> here,  then TSR
     Download will not use the mouse at all.  If you answer with a <Y>
     then  TSR  Download will look to see if a mouse driver is present
     when it is first installed.  If a mouse driver is found then  TSR
     Download  will  use  the  mouse.  One word of warning.  The mouse
     driver must be installed before TSR  Download.  Otherwise  it  is
     possible  for  TSR Download to swap the code containing the mouse
     out of memory causing your system to crash. If you make a mistake
     and enter something you don't want here,  just hit the <Esc>  key
     to return to the original entry.


     Enable Font Decompression

     Soft  fonts take up a great deal of disk space.  TSR Download now
     lets you compress your soft fonts to save on disk space. When you
     let TSR Download send the fonts to your printer  the  fonts  will
     automatically  be  decompressed.  TSR  Download  uses the new CFT
     (Compact Font Technology) from Rubicon Computer Labs to  compress
     and  decompress  fonts.  This  technology has a number of special

                                                                     9


     features.  First,  decompression of soft fonts on  the  fly  only
     slows  downloading  of  soft  fonts by a small amount.  Since TSR
     Download is very fast at sending fonts,  this slow  down  is  not
     significant.  Second, most applications that read soft fonts will
     find that fonts compressed with CFT appear normal. That is you do
     not have to decompress the fonts to install  them  into  Windows,
     Ventura,  WordStar,  etc! (You do have to do all downloading with
     TSR Download, however.)

     To enable the font decompression option move to the  Enable  Font
     Decompression option and enter a <Y>.  You still have to compress
     the soft fonts with the CFT.EXE program and you  must  make  sure
     the  wild card used to search for soft fonts in *.*.  (Compressed
     soft fonts have the last letter of their file name  change  to  a
     ``c'' if they are portrait and a ``u'' if they are landscape.) If
     you don't intend to use font decompression enter an <N> here.  If
     you make a mistake and enter something you don't want here,  just
     hit the <Esc> key to return to the original entry.


     Create Landscape Fonts

     Some  laser printers require separate portrait and landscape soft
     fonts.  This effectively doubles the amount of disk storage space
     that is needed for soft fonts.  TSR Download can rotate or create
     landscape versions of your soft fonts from their portrait  equiv-
     alents.  If you own a LaserJet Plus, LaserJet II, or a compatible
     printer this option will save disk space for  you.  Move  to  the
     Create Landscape Fonts option and enter a <Y> to enable this fea-
     ture.  Owners of the LaserJet IIP,  III, or 2000 do not need this
     option.  You must also have enable Font Decompression, above,  to
     use this option.


     Saving A New Version Of TSR Download

     When  you have finished entering data on the configuration screen
     hit the <F10> key.  The configuration program will ask: Save  the
     modified DOWNLOAD program? If you answer with a <Y> a new version
     of  TSR  Download will be created.  This new version replaces the
     old one!  If you answer with an <N> all the changes you made will
     be forgotten.












     10


                           LOADING TSR DOWNLOAD

     TSR Download works as a memory resident,  command line,  of batch
     file program.  The program can be passed optional arguments  when
     it is run that control its basic operation.  These arguments con-
     trol command line operation and list file  control.  The  general
     form of a TSR Download command is:

     dl  [listfile]  [-x] <enter>

     Where  listfile is the optional name of a disk file that contains
     a list of font file names to send to your printer,  and -x is  an
     optional  command.  Optional  commands  include:  -r - remove the
     program from memory,  -c - run from the command line,  and  -b  -
     download  fonts from within a batch file.  Only one optional com-
     mand can be used at a time. If a list file is present on the com-
     mand line,  the fonts specified in it  are  always  sent  to  the
     printer before anything else is done.

     To use TSR Download without loading it into memory type:

     dl  -c <enter>

     The  TSR  Download window will appear immediately and the program
     will search for your soft fonts. All aspects of program operation
     are the same whether you are running from the command line or  as
     a memory resident program. The only thing that changes is how the
     program is activated.

     To  use  the memory resident version of the program you must load
     it into memory first.  If the  program  successfully  loads  into
     memory you will see the message shown below:

     dl <enter>

     TSR Download is now loaded into memory.
     Use Ctrl-Alt-D to activate. Remove with dl -r.

     If you try and re-install TSR Download after it is already loaded
     into memory, your computer will beep and the following error mes-
     sage will appear:

     TSR Download is already in memory!

     To  remove TSR Download from memory use the -r option.  This will
     only work if TSR Download is the last program loaded into memory.

     dl  -r

     TSR Download can also be used to send a  list  of  fonts  to  the
     printer  without being loaded into memory or popping up.  You use
     the -b command in conjunction with the list file  option.  So  to
     simply send a list of fonts to the printer type:

                                                                    11


     dl  listfile  -b

     When  TSR  Download is first being loaded into memory you can op-
     tionally send a list of fonts to your printer.  This is  a  handy
     way  to  initialize your printer with the fonts you normally use.
     For instance, you could put the command to install the program in
     your autoexec.bat file and  have  TSR  Download  also  send  your
     favorite soft fonts to your printer.

     To  send  a  list of soft fonts you must first create a disk file
     that contains the name of each soft font you  wish  to  download.
     Note  that  TSR  Download  contains  a  complete  list management
     program to automatically make these soft font lists for you. Just
     see the List command in this documentation.  (It is also possible
     to use an ASCII text editor to create these list files.)

     These  soft  font  list  files  are  always stored in the main or
     primary soft font subdirectory.  List files are assumed  to  have
     the font file name extension of ``.LST''. (You do not have to use
     the extension when specifying a list file name.)

     How do you use list files? Assume you have a soft font list file,
     called ROMAN.LST,  stored in your primary soft font subdirectory.
     (Remember  that  you  must  configure  TSR  Download  using   the
     DLCFG.EXE  program  and  define  this subdirectory.) To send this
     list of fonts to your printer as Download is  first  loaded  into
     memory type:

     dl  roman.lst <enter>

     Printer status is checked before each soft font is sent. (If your
     printer is off,  not selected, or out of paper, you will have the
     option to fix the problem and then send the  font,  or  stop  the
     downloading  sequence.)  Note that when TSR Download is installed
     as a TSR and sends a list of fonts  this  way  the  program  will
     remember what fonts are resident in your printer. The <M> command
     can be used to display a list of these fonts.

     You  can  create  these  list  files  with any ASCII text editor,
     (EDLIN is an ASCII text editor),  but TSR Download will do a bet-
     ter job of making them. In a soft font list file the name of each
     font appears on a separate line.  For example,  if you have a set
     of six Times-Roman fonts in your soft font subdirectory the  list
     file would appear as follows:

     TR100RPN.USP <enter>
     TR100BPN.USP <enter>
     TR100IPN.USP <enter>
     TR120RPN.USP <enter>
     TR120BPN.USP <enter>
     TR120IPN.USP <enter>



     12


                           RUNNING TSR DOWNLOAD

     Most operations in TSR Download are done from the main menu. This
     is where the majority of all soft font control takes place.  From
     the main menu you may go to anyone of  four  separate  sub-menus.
     The  sub-menus include: help,  printer control,  list management,
     and printer memory usage. These menus operate as follows:











                                 Figure 1

     The TSR Download program is activated by holding the  <Ctrl>  and
     <Alt>  keys  down while simultaneously pressing the <D> key.  (Or
     use the key  combination  you  selected  with  the  configuration
     program.) A small window will appear in the center of your screen
     with  a  list of soft fonts.  (See below.) Note that the standard
     version of TSR Download only supports 300 soft fonts at  a  time.
     If more than 300 soft fonts are present, TSR Download stops after
     locating the first 300 fonts.











                                 Figure 2

     The window will now show a list of soft font names, sorted in al-
     phabetical  order.  At  the bottom of the window a single line is
     reserved for commands.  This line also indicates  how  many  soft
     fonts  have been marked and how much printer memory they will oc-
     cupy.  If you have more soft fonts than a single window will hold
     (8),  you can scroll through the rest of the fonts using the cur-
     sor keys or your mouse. Once activated,  TSR Download responds to
     the following single key commands:





                                                                    13


     <Esc>             Exit Download or move back one level
     <Ret> or <Space>  Mark a font for later downloading
     <C>               Change the main soft font subdirectory
     <D> or <F10>      Download all previously marked fonts
     <F> or <F5>       Find the first font  name beginning with ?
     <H> or <F1>       Help screen
     <I> or <F3>       Set the next soft font ID number
     <L> or <F7>       Font List management
     <M> or <F6>       Display fonts in you printer's Memory
     <O> or <F4>       Output to parallel, serial, or file
     <P> or <F8>       Printer control menu
     <S> or <F9>       Select the highlighted soft font
                       Mouse - use to move through fonts or menus
                       Left mouse button - mark font or item
                       Right mouse button - answer yes to a question

     While  in  TSR  Download,  you  can move through the font list by
     using the cursor keys or the mouse.  The <Home> key takes you  to
     the  first font in the list,  and the <End> key to the last.  The
     <PgUp> & <PgDn> keys move between separate screens of fonts.  You
     can also use the <F> key to find any font by name.  The following
     chapter explains each of the commands in detail.


     <Esc>  Exit Download

     You can leave TSR Download from the  main  menu  by  hitting  the
     <Esc> key. This will return you to your application. Alternately,
     the <Esc> key will also move you back one menu level.


     <enter> or <Space>  Mark

     To  mark  a  font  for  downloading or for list file creation you
     first move to the font by using the cursor keys. The cursor arrow
     keys move up and down the list of  fonts,  or  you  can  use  the
     mouse.  The <Home> key can be used to return to the first font on
     a page.  The <End> key moves to the last  font  on  a  page.  The
     <PgUp> and <PgDn> keys move between screens of fonts.  (These two
     keys only work if you have more than a full window, (8),  of soft
     fonts.)

     To mark a font hit the left mouse button, <enter>, or the <Space>
     key.  The  highlighted font will be marked (its color will change
     and a dot will appear to the left of the font name), and the cur-
     sor will move down the list.  If you accidentally mark a font you
     don't  want,  move  back  to  it  and  use the left mouse button,
     <enter> or <Space> key.  This will toggle the mark  off.  If  you
     have  enabled  the printer memory check feature in the configura-
     tion program,  TSR Download will check each time you mark a  font
     to see if you have enough memory left to store it.  (This feature
     can be disabled by entering a value of  0  for  printer  memory.)
     When  TSR  Download  detects that you have exceeded your printers

     14


     memory storage ability it flashes a brief message on  the  bottom
     of  the window and makes a warbling sound.  Note that the font is
     still marked and will be downloaded unless you  remove  the  mark
     from it.  The lower right portion of the screen will show you how
     many fonts are currently marked and the total printer  RAM  these
     fonts will require.


     <C>  Change Subdirectory

     You  can change the main subdirectory and wild card that are used
     to locate soft fonts at any time.  Doing this will clear the list
     of soft fonts that have been loaded into your printer.  To change
     subdirectories,  enter a <C>,  followed by a  valid  disk  drive,
     path, and wild card.  (C:\fontsl\*.* for example.) If any item is
     missing  TSR  Download  will ignore the new subdirectory informa-
     tion. Note that this command effects where TSR Download looks for
     font lists.


     <D> or <F10>  Download

     To download all marked fonts, hit the <D> key.  TSR Download will
     ask  you  whether  you  want to send your fonts now.  Answer with
     right mouse button or <Y> for yes,  or an  <N>  for  no.  If  you
     answer  yes,  TSR  Download will check the printer status to make
     sure the printer is on line and ready.  (If the  printer  is  not
     ready,  an error message will appear and you will have the option
     of fixing the problem or returning to the  Download  main  menu.)
     The fonts will then be sent to the printer,  and a status message
     will tell you what font is currently  being  downloaded.  Once  a
     font  is downloaded to your printer it will appear in the list of
     fonts that can be displayed with the <M> option.


     <F> or <F5>  Find

     It can be difficult to locate a single font in  a  long  list  of
     similar  ones.  TSR  Download offers the Find command to help you
     with this task.  Hit the <F> key to tell the program you want  to
     search  for  a font.  The prompt at the bottom of the screen will
     change to Find?.  You can enter any single letter.  TSR  Download
     will locate the first font that begins with that letter and posi-
     tion  the cursor there.  If you have long lists of fonts with the
     same typeface name the Find command can be used to search  for  a
     specified  point  size.  If you enter a single digit at the Find?
     prompt,  TSR Download will search forward from its current cursor
     position to find a font with a matching point size.  Entering a 6
     or 8 will find matching 6 or 8 point fonts.  Entering a  1  or  2
     tells the program to find 10 or 20 point fonts.




                                                                    15


     <H> or <F1>  Help

     A  help  menu  is always available.  It can be invoked by hitting
     either the <F1>,  or <H> key.  This menu summarizes  the  options
     available under TSR Download. Use the mouse or the cursor keys to
     select  a  help  topic.  Then  hit  the  left mouse button or the
     <enter> key to read that particular help topic.  Return  back  to
     the  main  help  display by hitting the <Esc> key and back to the
     main menu by hitting <Esc> again.











                                 Figure 3


     <I> or <F3>  Soft Font ID

     The ID number to be assigned to the next soft font can be changed
     using this key.  Hit the <I> key and you will be prompted for  an
     ID  number  from 0 to 32,767.  Enter your ID number followed by a
     left mouse button,  or <enter>.  This number will be used for the
     next soft font that is downloaded. Each successive soft font will
     receive the next sequential number.  (If you set the ID number to
     5, and download 3 fonts, the first will get ID 5,  the next ID 6,
     and  the  last ID 7.  If you download more fonts later,  the next
     soft font ID will be 8.)


     <L> or <F7>  Font Lists

     TSR Download offers complete font list management.  You  can  use
     the  program to send a list of fonts to your printer or to create
     a font list. To move to the font list menu hit the <L> key.  Your
     display will show the following:










                                 Figure 4

     16


     Use  the  mouse  or  the  cursor keys to move to the function you
     want.  Then hit left mouse button or <enter> to select that func-
     tion.  In  the screen shown above this would select the Add fonts
     to an existing font list function.  The Add  function  tells  TSR
     Download  to take all the previously marked fonts and add them to
     an existing list file.  You will be prompted for the name of this
     list  file.  As a convenience,  all functions that require a list
     file name assume that any file name that does not have an  exten-
     sion  uses the default extension for list files ".LST".  Thus the
     file names test.lst and test are equivalent. To enter a file name
     with no extension just add a period to the end of the file  name.
     Thus test. and test.lst are not equivalent.

     Creating a new font list from within TSR Download is easy. At the
     main menu of TSR Download,  mark the fonts you wish to put into a
     list file, just as if you were going to send them to the printer.
     Now enter the List File menu with the <L> key.  Select the Create
     a new font list and save it option.  TSR Download will prompt you
     for a file name for the new font list.  Enter the new  name  fol-
     lowed by a return. (Note the program will never overwrite any ex-
     isting  file with the same name.) Once again,  if you make a mis-
     take and don't wish to create a list of fonts use the <Esc> key.

     Deleting an existing font list is the next option on  this  menu.
     When Delete an existing font list is selected,  TSR Download will
     ask you for the name of the list file.  Enter any valid name fol-
     lowed by a <enter> and that list file will be deleted.

     A  Directory  of  all font list files can be displayed.  Move the
     cursor down to Display directory of list files and hit left mouse
     button or <enter>.  TSR Download will search the main  soft  font
     subdirectory  and  display all list files found.  A maximum of 32
     file names can be displayed.

     Make is a command that lets you build a font list of all the soft
     fonts currently residing in printer memory.  You  don't  have  to
     mark  any fonts to use this command.  Select Make a list of fonts
     in printer and hit left mouse button  or  <enter>.  You  will  be
     asked for a list file name.  The list file created here will con-
     tain all the soft fonts currently in your printers memory.

     The Send command is used to send a font  list  to  your  printer.
     Select  Send a font list to the printer and hit left mouse button
     or <enter>.  You will be asked for a list file  name.  Enter  the
     name  followed <enter>.  TSR Download will begin sending fonts to
     your printer.  The status line on the bottom of the  screen  will
     show the name of each font as it is being downloaded.

     To View the contents of a soft font list move down to View a font
     list and hit left mouse button or <enter>.  You will be asked for
     the list file name.  Enter the  name  followed  by  <enter>.  TSR
     Download  will  display the soft font file names (up to a maximum
     of 32) found in this list file.

                                                                    17


     <M>  Memory Usage

     You can display a list of all the soft fonts  currently  residing
     in  your  printer and their memory requirements with this option.
     Just hit the <M> key to bring up this display.  A  count  of  the
     number  of  fonts in your printer and the memory they occupy will
     be shown on the bottom status line of the window. The rest of the
     window will show a list of fonts now resident  in  your  printer.
     You  can  move  through  this  list  using the cursor keys or the
     mouse. While this list is displayed,  you may clear it by hitting
     the  <W> Wipe key.  Note that changing the soft font subdirectory
     will clear this list.  Use the <Esc> key to return  to  the  main
     font menu. See the sample screen below:











                                 Figure 5


     <O>  Output Control

     You can redirect the output of Download to a disk file, or change
     the  serial or parallel printer port assignment with this option.
     To select this option hit the <O> key.  You will  see  a  message
     ``Parallel,  Serial, or File (P/S/F):''. To select a new parallel
     or serial printer port hit either <P> or  <S>  respectively.  You
     will  be asked for the port number.  Respond with a parallel port
     number 1 - 3 or a serial port number 1 - 2.  To redirect all  TSR
     Download  output to a disk file,  chose the <F> option.  You will
     then be prompted for a disk file name.  Please use a disk  drive,
     path,  and  file  name!  All further output will be saved in this
     disk file.  You can return to normal parallel or serial operation
     by first selecting the <O> option and then by specifying the port
     type and number.


     <P>  Printer Control Menu

     To  select  the printer control menu,  use the <P> key.  You will
     then see the menu shown below.  Use the mouse or the cursor  keys
     to  move to the desired action.  Use the left mouse button or the
     <enter> key to select an action. You will be asked to verify that
     you want to send this sequence to  the  printer.  Answer  with  a
     right  mouse  button  or  <Y> for yes,  or an <N> for no.  If the
     printer is off, not selected, out of paper, or busy you can retry

     18


     or abort this operation.  Hit the <Esc> key to return back to the
     main menu.











                                 Figure 6

     Each  menu  item sends a matching command string to your printer.
     Thus Form Feed sends a form feed out. Most other entries are self
     explanatory.  Default Font sends a command  to  you  printer  in-
     structing  it  to  return back to its designated internal default
     font,  usually Courier with the PC8 symbol set.  10 and 16.67 cpi
     tell your printer to switch between the two internal font pitches
     available.    66  lines/page  forces most laser printers to put a
     standard 66 lines on a single  page.  4,  6,  8,  10,  12,  &  16
     lines/inch switch the line spacing on your printer. Finally, File
     to  Printer  lets you send any disk file to the printer.  You can
     make soft font test files or simple printer command  strings  and
     send them this way.


     <S>  Selecting A Font

     Any  soft  font  resident  in your printer can be selected as the
     primary (active) font.  To do this,  first move the cursor to the
     font you want to select.  Now hit the <S> key.  TSR Download will
     ask you if you want to select this soft font. Answer with a right
     mouse button or <Y> or <N>.  If you  want  to  determine  how  to
     select  an  unknown  soft font you can redirect the output of TSR
     Download to a file (<O> command),  select the font,  and then ex-
     amine this disk file.















                                                                    19


                             Font Compression

     The  CFT  utility  program is used to compress or decompress soft
     fonts.  If you want to save disk space,  use CFT to compress your
     soft   font   files  and  then  let  TSR  Download  automatically
     decompress the fonts as they are  downloaded.  If  you  want  TSR
     Download to create landscape versions of your soft fonts you also
     need  to  compress the fonts with CFT.  Note that the CFT utility
     can only create landscape fonts up to 48 point in height.

     If you want to compress your soft fonts, first make sure you have
     made backup copies of the original fonts.  Then run CFT  as  fol-
     lows:

     cft  *.usp

     The  command above will locate all soft fonts in the current sub-
     directory that end with the file name extension ``.USP'' and com-
     press them.  The compressed fonts files will have the  same  file
     name with the file name extension of ``.USC''. The original fonts
     (*.usp) will still be in your directory.  You will need to delete
     these yourself. To compress all fonts in a different subdirectory
     type:

     cft  c:\fonts\*.*

     If you want CFT to compress your  soft  fonts  and  automatically
     delete  the  uncompressed versions when it is finished use the -r
     option.  Make sure your fonts are backed up before doing this.  A
     sample command would be:

     cft  c:\fonts\*.* -r

     To  decompress soft fonts use the same command format but add the
     -d (decompress) option.  For example,  to decompress the fonts we
     just compressed:

     cft  c:\fonts\*.* -d

     The  CFT  compression program saves fonts in a format that should
     be compatible with most laser smart applications.  Most  programs
     will be able to read these fonts and extract font information and
     character  width  tables.  Remember  though that you must use TSR
     Download to send the fonts to your printer,  since  this  program
     decompresses the fonts as they are being downloaded.

     CFT  stands  for  Compact  Font  Technology.  This technology was
     developed by Rubicon Computer Labs,  2  Pommiers,  Hull,  Quebec,
     Canada  J8Z  2M2.  Rubicon makes Rubicon Publisher a desktop pub-
     lishing package for the IBM PC.




     20


                   Using TSR Download In Other Programs

     Word Perfect 5.0 & 5.1

     It is quite easy to use  TSR  Download  with  Word  Perfect.  TSR
     Download  is  much  faster  downloading  soft  fonts  and  offers
     automatic font decompression.  To use TSR Download with Word Per-
     fect  you  must re-install your printer driver and mark each soft
     font you own with a * instead of a +. This tells Word Perfect not
     to download the fonts before each document is printed.  Once this
     is  done  you  can use TSR Download to send your fonts or you can
     use Word Perfect's Printer Initialize command.

     To re-install your printer driver,  start Word  Perfect  and  hit
     (Shift)  <F7>  for  the  printer  menu.  Press <S> for the Select
     Printer menu,  then (A) for Additional Printers.  Use the  cursor
     keys  to  highlight the name of your printer,  then press <S> for
     Select. Word Perfect will tell you the name of the driver file it
     is creating.  Then press <F7>.  You are now at the  Edit  screen.
     Press  (4)  for  Cartridges  and fonts and use the cursor keys to
     move down to the  soft  font  libraries.  Enter  a  library  with
     <enter>  and  mark  your soft fonts with a *.  Exit and save.  To
     download fonts follow  the  instructions  below  for  other  word
     processors.


     MS Word 5.0

     MS  Word  automatically  asks you if you want it to download soft
     fonts before a document is printed. Just answer <N> to this ques-
     tion.  Then follow the instructions  below  for  all  other  word
     processors.


     DisplayWrite 4
     MultiMate 4
     Nota Bene
     Q & A
     Samna Word
     Word Star 5 - 6
     Word Star 2000
     XyWrite

     All of the word processors above handle soft fonts but don't make
     any realistic provision for downloading soft fonts. (Some make up
     DOS batch files.) To use TSR Download with these word processors,
     simply install the program in memory resident mode. Before print-
     ing  a  document,  pop up TSR Download and send the fonts to your
     printer.  Remember that with TSR Download you can always check to
     see  which  fonts  are currently in the printer with the <M> com-
     mand.  If you use a particular combination of fonts often it pays
     to  use  TSR Download to make up a list of those fonts.  Then you
     can send the entire list of fonts at once with a single command.

                                                                    21


     Dbase
     Lotus 123
     SuperCalc

     The application programs listed above are not laser  smart.  They
     don't  really  know  how  to use or take advantage of soft fonts.
     However,  with TSR Download you can force these programs to use a
     soft font within a spread sheet or data base report.  Just pop up
     TSR Download inside any of these programs. Download the soft font
     you want to use for your report.  Now move the cursor back to the
     font you just sent to the printer.  Hit the <S> Select key.  This
     will make that soft font the active font in your printer.

     If the font is small you may  want  to  move  to  TSR  Download's
     Printer Control Menu - <P>.  In this menu you can change the line
     spacing of the printer or  its  orientation.  Remember  that  you
     can't select a landscape oriented font unless you put the printer
     into landscape mode before selecting it.


     PC-DOS

     Controlling  soft  fonts  from  the  PC-DOS  command line is very
     similar to using  them  in  Dbase  or  Lotus.  You  activate  TSR
     Download,  send  a font to the printer and then select that font.
     You can optionally change the line spacing too. You laser printer
     or DeskJet is now set to print with a soft font.  Just copy  your
     document  to the printer.  Once you have sent the entire document
     you might need to pop up TSR Download and send a Form Feed to the
     printer to eject the page.  (Use the Printer Control menu  to  do
     this.)























     22


                                  FONTCAT

     The  FONTCAT  program  is a unique utility that prints a complete
     catalog of all the soft fonts  you  own.    To  run  FONTCAT  you
     specify the disk drive,  path, and wild card to be used to search
     for your soft fonts.   The FONTCAT program locates all your  soft
     font files,  analyses them,  and prints a short report explaining
     just what each soft font file really is.   A sample catalog  sec-
     tion is shown below:








                                 Figure 7


     The  catalog  shows  the  font  file name first,  followed by the
     typeface name.   Note that FONTCAT can display the true  typeface
     name of any soft font, not just the standard typefaces defined by
     HP.    The  catalog  then  shows  the  font point size and pitch.
     Proportionally spaced fonts display the entry prop.  while  fixed
     width  fonts have their pitch displayed here.   The stroke weight
     of the font and its style are displayed next.   Font orientation,
     the  symbol set and the printer the font is designed for are then
     shown.  Finally, the font file size is displayed in kilobytes.

     To run FONTCAT and make a catalog of soft fonts you only need  to
     know  the subdirectory in which they are stored.   Make sure your
     printer is turned on and ready, and then type:

     fontcat  c:\fonts\*.* <enter>

     This will locate all valid soft font files on C: in  subdirectory
     \fonts.  You can also change the printer port to any valid paral-
     lel  or  serial  port,  or you can redirect the catalog to a disk
     file. To print the same catalog on LPT2 or COM1 type:

     fontcat  c:\fonts\*.*  LPT2 <enter>
     fontcat  c:\fonts\*.*  COM1 <enter>

     Finally,  to send the catalog to the  disk  file  catalog.txt  on
     drive D: type:

     fontcat  c:\fonts\*.*  d:\catalog.txt <enter>






                                                                    23


                              Common Problems

     Q: My laser printer normally works just fine. However, when I use
     TSR  Download  to  send  a soft font to it,  the font is garbled,
     doesn't appear, or weird things happen.

     A: This is a common problem and is due to bad  hardware!  When  a
     soft  font  is  downloaded  through  a parallel port your printer
     receives data at the maximum  possible  speed.  If  your  printer
     cable  does not meet minimum specifications,  or if your parallel
     printer port is marginal the problems mentioned above may  occur.
     Your  parallel  printer  port cable should be 6 feet long or less
     and made of quality materials.  You should not have a switch  box
     in  series  with  this  cable!  If  you  still have a problem try
     switching to a different parallel port.  These ports are easy  to
     damage with static electricity. They may appear to work fine nor-
     mally but fail during high speed transfers.


     Q:  I  download a soft font and make it my primary font,  just as
     your manual says.  If I copy files to the printer they appear  in
     that font. If I use my word processor I always get my default in-
     ternal font (Courier).

     A:  The  first  thing  most word processors do,  (before printing
     anything), is to reset the printer.  Resetting a laser or DeskJet
     printer  automatically  returns  the printer to its default font,
     (Courier).  The only way around this problem is  to  provide  the
     word  processor  with  a  printer driver that tells it how to use
     soft fonts.


     Q: When downloading a number of soft fonts my printer stops work-
     ing and displays a flashing "20" on the LCD display.

     A: You have run out of memory in your printer!  First,  make sure
     that  you  have  configured  TSR  Download  and indicate how much
     memory your printer has.  Then the program will warn  you  before
     you  run  out  of  memory.  If  you  are sending new fonts to the
     printer try deleting the old ones before  sending  any  more  new
     fonts.  The  Printer Control menu in TSR Download will let you do
     this.  If the problem reoccurs with some  regularity  you  should
     start looking for a memory add on board.


     Q:  The  soft  font  ID numbers I assign with TSR Download do not
     match the numbers shown on my sample font print sheet.

     A: The Soft Font ID numbers assigned by TSR Download can be  used
     to select soft fonts. However, these ID numbers have no relation-
     ship  to  the  numbers displayed on an internal font print sheet.
     Internal font print sheet numbers always start at 1  and  go  up.
     Soft  font ID numbers can range from 0 - 32,767.  There is no way

     24


     to display the actual soft font ID number on a print  sheet.  Ig-
     nore the ID numbers shown on these sheets.

     Q:  Anytime  I  use  TSR Download to send a font or command to my
     printer I get the "PRINTER NOT READY" message.

     A: TSR Download always checks the status of the parallel  printer
     port before sending anything to the printer. This status check is
     done by calling a standard BIOS function that returns information
     about printer select, paper level, busy, etc. Some computer BIOSs
     are  not  truly IBM compatible and return incorrect status.  Some
     printer cables are not wired  correctly  and  thus  do  the  same
     thing.  You  can also use the MODE command or a network to make a
     serial printer port look  like  a  parallel  one,  (that  doesn't
     return  printer  status)  .  The DLCFG program lets you alter TSR
     Download so that the program no  longer  pays  any  attention  to
     parallel printer port status.  See the documentation for more in-
     formation on this option.


     Q: I have 55 soft fonts in my subdirectory, yet TSR Download only
     displays 51 of them.

     A: A number of public  domain  soft  fonts  have  incorrect  font
     headers. TSR Download checks each font file to make sure it has a
     valid soft font header. (This is how the program finds soft fonts
     for its font display.) If you have a number of public domain soft
     fonts  a  few of them may have bad font headers.  This is why TSR
     Download does not display them.


     Q: I followed all your directions on setting  up  and  installing
     TSR Download.  Yet no matter what I do my DeskJet or DeskJet Plus
     won't print with soft fonts.

     A: Both the DeskJet and the DeskJet Plus printers require the use
     of an external RAM cartridge if you want to use  soft  fonts.  If
     you  don't  have  a  RAM cartridge plugged into your printer your
     DeskJet can't handle soft fonts.  DeskJet owners need a 128K  RAM
     cartridge. DeskJet Plus owners need a 256K RAM cartridge.














                                                                    25


                           SHAREWARE INFORMATION

     TSR  Download  is  a  copyrighted  computer program.  It is being
     marketed as shareware. The shareware concept lets you evaluate or
     try a program before you buy it.  If  you  continue  to  use  the
     program  after  the evaluation period has ended you must register
     (pay for) the program.  It's that simple.  The purpose  of  user-
     supported  software  is  to  provide personal computer users with
     quality software without high prices,  and yet to provide  incen-
     tive for programmers to continue to develop new products.

     TSR Download is provided at no charge to the user for evaluation.
     Feel  free to share it with your friends,  but please do not give
     it away altered or as part of another system.  If you  find  this
     program  useful  and/or  you continue to use TSR Download after a
     trial period of 20 days,  you must make a registration payment of
     $45.00  to Elfring Soft Fonts.   The $45.00 registration fee will
     license one copy for use on any one computer  at  any  one  time.
     You  must  treat  this software just like a book.   An example is
     that this software may be used by any number of people and may be
     freely moved from one computer location to another,  so  long  as
     there  is  no  possibility of it being used at one location while
     it's being used at another.  Just as a book cannot be read by two
     different persons at the same time.

     Commercial  users of TSR Download must register and pay for their
     copies of TSR Download within 10  days  of  first  use  or  their
     license  is withdrawn.   Site-License arrangements may be made by
     contacting Elfring Soft Fonts.

     Why register?  Registered users of TSR Download receive a  number
     of  additional  benefits including: the latest version of the TSR
     Download program without a registration  screen,  telephone  sup-
     port,  a perfect bound manual with comprehensive index, a copy of
     our book "The Soft Font Manual",  the FONTCAT utility program,  a
     program  warranty,  and the opportunity to purchase soft fonts at
     special prices.

     Anyone distributing TSR Download for  any  kind  of  remuneration
     must  first  contact  Elfring Soft Fonts at the address below for
     authorization.   This authorization will be automatically granted
     to  distributors  recognized  by  the  (ASP)  as  adhering to its
     guidelines for shareware distributors,  and such distributors may
     begin  offering  TSR  Download  immediately (However Elfring Soft
     Fonts must still be advised so that the distributor can  be  kept
     up-to-date with the latest version of TSR Download.) TSR Download
     may  NOT  be  bundled  with  any  commercial hardware or software
     package without the prior written approval of Elfring Soft Fonts.

     You are encouraged to pass a copy of TSR Download along  to  your
     friends for evaluation.   Please encourage them to register their
     copy if they find that they can use it.    All  registered  users
     will  receive  a  copy  of the latest version of the TSR Download

     26


     program,  along with numerous other benefits as explained in  the
     documentation.  We will also send them an information packet that
     describes other software available from Elfring Soft Fonts.

     If  you  like TSR Download tell your friends!   If you don't like
     the program please write and tell us why!    To  keep  prices  on
     products  like this as low as they are we cannot afford to adver-
     tise.  You are our form of advertisement!  Tell your friends.  If
     you have the opportunity to write an article in a newsletter or a
     trade magazine try and spread the word!   We need all of the help
     we  can  get to put quality software into the users hands without
     charging inflated prices!

     If you want to write an article about TSR Download please contact
     us first.  We want to make sure you have the most current version
     of the program! We would appreciate hearing from you.

                            _______
                       ____|__     |                  (tm)
                    --|       |    |-------------------
                      |   ____|__  |  Association of
                      |  |       |_|  Shareware
                      |__|   o   |    Professionals
                    -----|   |   |---------------------
                         |___|___|    MEMBER

     Gary  Elfring is a member of The Association of Shareware Profes-
     sionals. The Association of Shareware Professionals (ASP) has es-
     tablished stringent standards for its members.  ASP wants to make
     sure that the shareware principle works for you.   If you are un-
     able  to resolve a problem with an ASP member (other than techni-
     cal support),  ASP may be able to help.  Please write to the  ASP
     Ombudsman  at P.O.  Box 5786,  Bellevue,  WA 98006 or send a Com-
     puserve message via easyplex to ASP Ombudsman 70007,3536.

                                 WARRANTY

     Users of the shareware version of TSR Download must  accept  this
     disclaimer  of  warranty: "TSR Download is supplied as is without
     warranty of any kind.  The author disclaims all  warranties,  ex-
     pressed or implied, including, without limitation, the warranties
     of merchantability and of fitness for any purpose. The author as-
     sumes no liability for damages,  direct,  indirect, or consequen-
     tial,  including lost profits,  savings,  or  damages  which  may
     result from the use of TSR Download."


                            Elfring Soft Fonts
                                P.O. Box 61
                             Wasco, IL  60183
                               708-377-3520
                             FAX: 708-377-6402
                              CIS: 72417,3437

                                                                    27
                              TSR Download Order Form

    TSR Download, FONTCAT, manual, & The Soft Font Manual.       $45.00  ______

    TSR Download package above PLUS LaserJet portrait and        $75.00  ______
    landscape Helv & Roman soft fonts in 6, 8, 10, 11, 12, 14,
    18, 24, & 30 points.

    TSR Download package above PLUS DeskJet portrait Helv &      $75.00  ______
    Roman soft fonts in 6, 8, 10, 11, 12, 14, 18, 24, & 30 pts.

    The following two NEW font sets are available at a special price when or-
    dered with any one of the TSR Download packages mentioned above.

    ESF Garamond font set (6, 8, 10, 11, 12, 14, 18, 24, & 30)   $35.00  ______

    ESF Optima font set (6, 8, 10, 11, 12, 14, 18, 24, & 30)     $35.00  ______

    Printer driver: [ ] Word Perfect 5.1, [ ]Word 5.0 [ ] HP TFM $15.00  ______

    European font versions with the Roman-8 symbol set            $5.00  ______
    US shipping and handling                                      $4.00  ______
    Canada & Mexico shipping and handling                         $5.50  ______
    All other foreign orders                                      $8.00  ______
    Illinois residents add 6-1/2 percent sales tax                 6.5%  ______
                                                                  Total  ______

    Payment:  [ ] VISA   [ ] MC   [ ] Check (US funds)  [ ] PO ($50 minimum)
    Make all checks payable to: Elfring Soft Fonts          # ______________

    Card Number: _______ _______ _______ _______  Expiration: ______________

    Signature: _____________________________________________________________


    Name:           ________________________________________________________

    Company:        ________________________________________________________

    Address:        ________________________________________________________

    City/State/Zip: ________________________________________________________

    Day time phone: ________________________________________________________


    Comments:       ________________________________________________________

    Source of shareware TSR Download: ______________________________________

    Printer:  [ ]LaserJet+,  [ ]LaserJet II,IID,IIP,III,IIID  [ ]Compatible,
              [ ]DeskJet, [ ]DeskJet Plus/500

    [ ] Please send me my free Compuserve membership and $15 access credit.

              Elfring Soft Fonts, P.O. Box 61, Wasco, Illinois  60183
                 708-377-3520, FAX: 708-377-6402, CIS: 72417,3437

    28
```
{% endraw %}

## FONTDJ.DOC

{% raw %}
```
This package contains four proportionally spaced DeskJet soft fonts. To use 
soft fonts on a DeskJet you MUST have an external RAM cartridge installed. 
Since the DeskJet printer performs auto-bolding and half-sizing these four
fonts generate 16 different effects. The package contains:


HE120RPN.DJP  -  Helv 12 point medium
HE120IPN.DJP  -  Helv 12 point italic
RO120RPN.DJP  -  Roman 12 point medium
RO120IPN.DJP  -  Roman 12 point italic

The auto-bolding gives you 12 point bold and italic-bold versions of each
font. Half sizing gives you 6 point versions of each font.

```
{% endraw %}

## FONTLJ.DOC

{% raw %}
```
This package contains six proportionally spaced LaserJet soft fonts. These 
fonts are an exact duplicate of the ones found in the HP AC font set. Thus
Word Perfect, MS Word, WordStar, and other users may use their existing
printer drivers. Just indicate you have the 12 point fonts from the HP AC
font set. The package contains:


HV120RPN.USP  -  Helv 12 point medium
HV120BPN.USP  -  Helv 12 point medium
HV120IPN.USP  -  Helv 12 point italic
TR120RPN.USP  -  Roman 12 point medium
TR120BPN.USP  -  Roman 12 point medium
TR120IPN.USP  -  Roman 12 point italic



```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
                    VENDOR.DOC file for TSR Download

The copying restrictions listed in this file apply to any individual, organ-
ization, user group, or business that charges ANY fee for the distribution of 
the Shareware program TSR Download produced by Elfring Soft Fonts. TSR Down-
load along with its associated files and documentation is NOT in the public 
domain. All programs and data files are Copyright 1988, 1989, 1990 by Elfring 
Soft Fonts. All rights are reserved. Distribution restriction rights are
claimed under that copyright and are outlined below.

  * No organization may sell the Shareware version of TSR Download without
  prior written permission from Elfring Soft Fonts, the copyright holder. ASP
  approved vendors may start distribution without prior approval, but must
  still notify us in writing that they are distributing our product. To apply
  for such permission send a written request to:

  Elfring Soft Fonts
  P.O. Box 61
  Wasco, IL 60183
  USA

  * No organization may bundle the shareware version of TSR Download with any
  other hardware or software product without the prior written permission of
  Elfring Soft Fonts.

  * Vendor standards expected of distributors are summarized in this file. 
  Under no condition will permission to distribute be given to any organ-
  ization who does not agree to follow the standards. The vendor standards 
  are based on those established for vendor associate members of the Assoc-
  iation of Shareware Professionals. ASP vendor members will be granted 
  permission to distribute TSR Download; if you are already a member of ASP, 
  please mention it in your request for distribution.

  * TSR Download, when listed in vendors' catalogs, advertisements, brochures,
  mailers, etc. must be named "TSR Download" and not some other pseudonym like 
  "Downloader", "font manager", or just "Download".  Use of any other name 
  than "TSR Download" will constitute cause for revocation of distribution 
  rights.

  * The TSR Download program and files may not be sold as part of some other
  more inclusive package without the express permission of Elfring Soft Fonts.

  * TSR Download must not be distributed with other Shareware or public domain
  programs on the same disk.  However, TSR Download may be included in librar-
  ies sold on CD-ROM disks.

  * Under no conditions will TSR Download be "rented" or leased to others.

  * Any distribution of TSR Download over bulletin boards and/or national tel-
  ecommunication services will be limited to distributing a single archived 
  file containing the contents of the entire distribution disk.

The shareware registration fee for TSR Download is $45.00. All payments must
be made in U.S. Funds. Shipping and Handling is an additional $4.00 for 
domestic customers, $5.50 for Canada & Mexico, and $8.00 for all other cus-
tomers. Payment may be with VISA or MASTERCARD, postal money order, and 
checks, in which the amount must be expressed in U.S. Funds and drawn on a 
U.S. Bank.

==============================================================================

The following is a summary of ASP vendor standards. This summary is just that, 
a summary, and is not to be taken as a statement of the entire set of ASP 
standards.

Advertising:

All vendor advertisements and brochures must state that "Shareware programs 
require separate payment to authors if found useful."  This statement must 
immediately follow the price or be tied to the price via an asterisk.

Catalogs:

Vendors will attempt to educate users on the nature of Shareware. The 
following points must be covered in any catalog of disks:

  * The fee paid to the vendor is a copying and distribution charge and
  does not cover the cost of the program itself.

  * If the user finds a Shareware program to be of use, he/she is expected 
  to send the registration fee to the author.

  * Registration entitles the user to various rights and benefits (depending
  on the author). These range from the legal right to continue using the 
  software, to printed documentation and/or higher levels of service.

Distribution:

  * Vendors will respect the copyright and all distribution restrictions made 
  by individual authors, usually found in the file VENDOR.DOC [this file] on 
  the disk.

  * Vendors will provide a written notice covering the three concepts above 
  with all Shareware programs shipped. If disks are prepackaged, the notice 
  must be on a visible part of the package.

  * Vendors will not change or delete ANY files supplied with the program 
  unless authorized by the author. Small additions designed to assist the 
  user may be added if the author does not specifically prohibit such action.

  * Vendors agree to stop distributing a program, including earlier versions, 
  if requested by the author.

Again, the above is a SUMMARY of the ASP vendor standards. In order to dis-
tribute TSR Download you must agree to abide by these standards whether you 
are an ASP member or not. If you are interested in becoming an ASP-approved 
vendor, please contact:

   Association of Shareware Professionals
   Vendor Certification Committee
   P.O. Box 5786
   Bellevue, WA 98006

We strongly recommend that you consider becoming an ASP approved vendor if you 
have not already done so. The ASP vendor member program reduces the workload 
for both authors and vendors alike, and helps give customers confidence that 
reasonable standards are met in the distribution of Shareware products.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2031

     Volume in drive A has no label
     Directory of A:\

    DLCFG    EXE     40409  10-01-90   9:00a
    DL       EXE     47596  10-01-90   9:00a
    SETCOLOR EXE     17153  10-01-90   9:00a
    INSTALL  EXE     33709  10-01-90   9:00a
    DL       DOC     73713  10-01-90   9:00a
    READ     ME       2622  10-01-90   9:00a
    CATALOG           5369  10-01-90   9:00a
    FONTS_LJ COM     35449  10-01-90   9:00a
    FONTS_DJ COM     24263  10-01-90   9:00a
    FONTLJ   DOC       581  10-01-90   9:00a
    CONTROL  COM      2552  10-01-90   9:00a
    SPECIAL  OFF      1210  10-01-90   9:00a
    VENDOR   DOC      5634  10-01-90   9:00a
    INSTALL  LJ         30  10-01-90   9:00a
    GO       BAT      1276  10-01-90   9:00a
    INSTALL  DJ         30  10-01-90   9:00a
    FONTDJ   DOC       592  10-01-90   9:00a
    CFT      EXE     17555  10-01-90   9:00a
    INSTALL  TSR        98  10-01-90   9:00a
    FILE2031          3257  10-18-90   6:23p
           20 file(s)     313098 bytes
                           37888 bytes free
