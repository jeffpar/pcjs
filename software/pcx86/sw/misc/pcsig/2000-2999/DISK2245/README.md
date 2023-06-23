---
layout: page
title: "PC-SIG Diskette Library (Disk #2245)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2245/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2245"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SWAPDOS"

    With SWAPDOS, one DOS application may run another, even if both would
    normally not fit in memory at the same time.  By copying base memory,
    used by the currently running application, to expanded memory/extended
    memory, or to a disk file, base memory needed by the application is
    freed up.  The desired program is run before restoring the original
    environment.
    
    Swap out single programs, multiple programs, resident programs, etc.
    The amount of extra memory gained by using SWAPDOS depends on the
    application(s) being swapped out.  In general, all of the memory used
    by your program is available for use, minus about 3000 bytes.
    
    If you use one or two main programs and wish to switch among them, or
    to switch to other programs, SWAPDOS is essential.  If you only have
    640K with no expanded or extended memory, it's indispensable!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  PC-SIG Disk #2245 SWAPDOS  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  For special installation instructions refer to the READ.ME file.       ║
║                                                                         ║
║  To print the documentation, type: COPY SWAPDOS.DOC PRN                 ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## ORDER.DOC

{% raw %}
```


                          The SWAP Utilities(TM)


                                SWAPDOS(TM)


                               Version 1.00


     Program:

     (c) Copyright 1988-1990 Nico Mak - All Rights Reserved
     Distributed under License by Innovative Data Concepts

     Documentation:

     Copyright 1990, Innovative Data Concepts
     All Rights Reserved

This document; other accompanying written and disk-based notes and 
specifications; and all referenced and related program files accompanying 
this document are copyrighted by Innovative Data Concepts.

             _______
        ____|__     |               (TM)
     --|       |    |-------------------
       |   ____|__  |  Association of
       |  |       |_|  Shareware
       |__|   o   |    Professionals
     -----|   |   |---------------------
          |___|___|    MEMBER


The SWAP Utilities are distributed as shareware -- this means that
we encourage users, subject to restrictions described in the License
Agreement, to share copies of this program with friends, associates
and bulletin boards.  You may not share the registered version of
The SWAP Utilities;  however, you may request a free shareware disk
by completing the form this file.

If you make copies of The SWAP Utilities, you must include all files
in the original distribution files, as well as the documentation
archive.  You are not permitted to distribute The SWAP Utilities
without this documentation.

ASP has established stringent standards for its members.  ASP wants 
to make sure that the shareware principle works for you.  If you are 
unable to resolve a problem with an ASP member (other than technical 
support), ASP may be able to help.  Please write to the ASP Ombudsman
at PO Box 5786, Bellevue, WA 98006.


HOW TO ORDER

To order one or more of The SWAP Utilities, and receive a copy that does 
not contain the shareware notice when the program loads, printed 
documentation and upgrade notification, fill out the order form 
at the end of this documentation, and send a check or money order 
(in US funds only) for the appropriate amount to:

        Innovative Data Concepts
	1657 The Fairways, Suite 101
	Jenkintown, PA 19046

The prices for The SWAP Utilities are as follows:

  First utility:             $25
  Each additional utility:   $20

SWAPDOS costs $25 per copy, with no additional purchase discounts (except
as described below).

Please add $5.00 for shipping to Alaska, Hawaii and Canada, and $10.00 for 
shipping to Europe and other overseas locations.

Written Purchase Orders (or FAX) are acceptable, when ordering The SWAP 
Utilities.  There is a $5 handling fee for purchase orders.

Overseas orders MUST be paid in US Funds, drawn on a US Bank.  Purchase
orders are not accepted for overseas shipments.

IDC will ship COD, with a minimum $25 order; there is a $5 handling
fee for COD orders.

SITE LICENSING, VOLUME PURCHASES, AND DEALER PROGRAM

Innovative Data Concepts as a number of multiple-copy options available for
purchase of The SWAP Utilities.

A Site License for The SWAP Utilities entitles an organization to
receive ONE diskette, and ONE copy of the documentation.  For the
specified license fee, the organization will be entitled to duplicate
the diskette and documentation for the specified number of copies.

License fees for a SWAP Utilities Site License are (for each individual
utility ordered):

        up to   9 copies:    $  150.00
        up to  49 copies:    $  600.00
        up to  99 copies:    $ 1000.00
        up to 199 copies:    $ 1700.00
        up to 299 copies:    $ 2200.00
        up to 499 copies:    $ 3000.00

	more than 500 copies are negotiable.

This license also permits duplication via network servers and internal
bulletin board systems.

For companies that wish to order complete packages of The SWAP Utilities,
including a disk and documentation for each package, our Volume Purchase
Program will be of interest.  To take advantage of this program, the
organization must commit to take delivery of a minimum 100 copies of ANY 
of the various SWAP Utilities over a period of one year.  Shipments may be
as small as 10 individual programs.

Under the Volume Purchase Program, each complete copy of The SWAP Utilities
costs $15.

Finally, IDC has liberal dealer volume purchase margins.  Contact IDC
directly for more details.


                        The SWAP Utilities Order Form

     Name:          ______________________________________
     
     Address:       ______________________________________
     
                    ______________________________________
     
     City:          ______________________________________
     
     State:         __________________________ Zip: ______
     
     Telephone:     ______________________________________
     
     Item                                      Quantity      Total
     --------------------------------------------------------------
     Copies of SWAPDOS ($25) _____________________________|________

     First SWAP Utility ($25) ____________________________|________

     Each additional SWAP Utility ($20) __________________|________

     Please circle the utilities you wish to register:
          SWAPSP (SideKick Plus)       SWAPSK (SideKick)
          SWAPTN (Tornado)             SWAPMT (Metro)
          SWAPSH (PCTools Shell)       SWAPDT (PCTools Desktop)
          SWAPMM (MemoryMate)          SWAPNG (Norton Guides)

     Shipping Charges:    U.S.  :  $ 0.00
                          Canada:  $ 5.00
                          Europe:  $10.00
     Overnight:  $15.00 + Normal Shipping Charge (from above)

     Total Shipping Charges _____________________________|_________

     COD/Purchase Order Handling Charge ($5) ____________|_________
     --------------------------------------------------------------
     Total Due:                                          |_________
     
     Please check one:
        5.25" Disk Acceptible ____         3.5" Disk Required ____
     
     Payment Type:  ___ Purchase Order
                    ___ COD
                    ___ Check Enclosed
                    ___ Credit Card   [___]Master Card  [___]Visa
                                Card Number: ______________________
                                Expiration Date: __________________

     WE MUST HAVE A PHONE NUMBER TO PROCESS CREDIT CARD ORDERS!!

     Where did you hear about The SWAP Utilities __________________

     ______________________________________________________________
     
     Mail Completed Form to:
                    Innovative Data Concepts
                    1657 The Fairways, Suite 101
                    Jenkintown, PA 19046                         SHAREWARE DISK REQUEST FORM

Company/User Group/BBS Name: ______________________________________________

          Person to Contact: ______________________________________________

           Shipping Address: ______________________________________________

                             ______________________________________________

             City/State/Zip: ______________________________________________

                  Telephone: ______________________________________________

              BBS Telephone: ______________________________________________

Innovative Data Concept's Initial BBS Password: ___________________________

Fee per diskette/BBS Access Fee: __________________________________________

Do you publish a newsletter? _______  If yes, how often? __________________

Upon receipt and approval of this application, a master diskette will be 
sent, along with written authorization to distribute The SWAP Utilities.

     Mail Completed Form to:
                    Innovative Data Concepts
                    1657 The Fairways, Suite 101
                    Jenkintown, PA 19046

```
{% endraw %}

## SWAPDOS.DOC

{% raw %}
```


                          The SWAP Utilities(TM)


                                SWAPDOS(TM)


                     Version 1.00 -- February 1, 1990


     Program:

     (c) Copyright 1988-1990 Nico Mak - All Rights Reserved
     Distributed under License by Innovative Data Concepts

     Documentation:

     Copyright 1990, Innovative Data Concepts
     All Rights Reserved


     Innovative Data Concepts
     1657 The Fairways
     Suite 101
     Jenkintown, PA 19046
     1-215-884-3373
This  document;   other  accompanying  written  and  disk-based  notes  and
specifications; and  all referenced  and related program files accompanying
this document are copyrighted by Innovative Data Concepts.

Licensing  and  distribution  requirements  are  described  later  in  this
document.  For ordering information, see the included ORDER.DOC file.



                  _______
             ____|__     |               (TM)
          --|       |    |-------------------
            |   ____|__  |  Association of
            |  |       |_|  Shareware
            |__|   o   |    Professionals
          -----|   |   |---------------------
               |___|___|    MEMBER


SWAPDOS is  distributed as shareware -- this means that we encourage users,
subject to restrictions described in the License Agreement, to share copies
of this  program with friends, associates and bulletin boards.  You may not
share the  registered version  of SWAPDOS;  however, you may request a free
shareware disk by completing the form in ORDER.DOC.

If you  make copies  of SWAPDOS, you must include all files in the original
distribution files,  as well  as the  documentation archive.   You  are not
permitted to distribute SWAPDOS without this documentation.

Innovative Data  Concepts is  a member  of  the  Association  of  Shareware
Professionals.   The  ASP  has  established  stringent  standards  for  its
members.   ASP wants  to make  sure that  the shareware principle works for
you.  If you are unable to resolve a problem with an ASP member (other than
technical support),  ASP may  be able  to help.   Please  write to  the ASP
Ombudsman at P.O. Box 5786, Bellevue, WA 98006.


                                Trademarks

     SWAPSK, SWAPSP, SWAPTN, SWAPMT, SWAPMM, SWAPSH, SWAPDT, SWAPNG and The
          SWAP Utilities are trademarks of Innovative Data Concepts.
     SideKick and  SideKick  Plus  are  registered  trademarks  of  Borland
          International, Inc.
     Tornado is a trademark of Micro Logic Corp.
     Metro,  Express   and  1-2-3   are  trademarks  of  Lotus  Development
          Corporation.
     MemoryMate is a trademark of Broderbund Software.
     TesSeRact is a trademark of the TesSeRact Development Team.
     DESQview and QEMM-386 are trademarks of Quarterdeck Office Systems.
     Software Carousel is a trademark of SoftLogic Solutions, Inc.
     386Max is a trademark of Qualitas, Inc.
     dBASE is a trademark of Ashton Tate, Inc.
     WordPerfect is a trademark of WordPerfect Corporation.





Page 2                                           SWAPDOS 1.00 Documentation
                             Table of Contents
     Introductory Notes..............................................2
 What is SWAPDOS?....................................................5
     What Do I Use SWAPDOS For?......................................5
 Installation........................................................7
     Installing the Shareware Version................................7
         Files in the archive........................................7
     Installing the Registered Version...............................8
         Files on the diskette.......................................8
     Using IDCBRAND..................................................8
 Quick Start.........................................................8
 The SWAPDOS Command-Line............................................9
     Detailed Explanation of Command-Line Options...................10
     Using the DOS Environment to Set SWAPDOS Options...............11
 Using SWAPDOS for a Single Application.............................12
         dBASE III and dBASE IV.....................................12
         MAKE utilities.............................................13
         KEDIT from Mansfield Software Group........................13
         1-2-3......................................................13
         Microsoft Word.............................................13
         WordPerfect Library........................................13
         WordPerfect 5.1............................................13
         TAPCIS.....................................................13
     Simple Shells..................................................14
         GrandView..................................................14
         WordStar...................................................14
         WordPerfect (before version 5.1)...........................14
         WordPerfect Program Editor.................................14
 Using SWAPDOS "Marks"..............................................14
 Technical Information..............................................15
     Where SWAPDOS writes the swap data.............................15
     EMS and XMS (Expanded and Extended Memory).....................15
     Compatibility with TSRs........................................16
     Command Interpreters other than COMMAND.COM....................16
         PCED.......................................................16
         4DOS.......................................................17
         FlexShell..................................................18
     Loading SWAPDOS "Marks" in "High" DOS Memory...................18
     Interrupt Vectors and the EGA pointer..........................18
 Exit Codes and Error Messages......................................18
     Exit Codes.....................................................18
     Error Message Descriptions.....................................19
 If Something Goes Wrong............................................22
 Commonly Asked Questions...........................................22
     Future releases................................................24
 COPYRIGHT NOTICE AND LICENSE.......................................24
     Warranty.......................................................24
     Registration...................................................25
     Bulletin Boards, Users Groups and Disk Vendors.................25
 About Innovative Data Concepts.....................................26
 The Rest of The SWAP Utilities.....................................26
 Association of Shareware Professionals.............................27
     Standards for the Association of Shareware Professionals.......27
         PROGRAMMING................................................27
         DOCUMENTATION..............................................27
         SUPPORT....................................................27
         GENERAL....................................................28

SWAPDOS 1.00 Documentation                                           Page 3
                             What is SWAPDOS?

SWAPDOS provides  an  application  independent  method  for  one  PC/MS-DOS
application to  run another,  even if both would normally not fit in memory
at the  same time.   A typical use is to temporarily swap out dBASE to make
room for your text editor, or to swap out a text editor so that you can run
memory hungry  compilers, linkers,  or even  debuggers without  losing your
place in an editing session.

SWAPDOS works  by copying conventional memory used by the currently running
application to expanded memory, extended memory, or to a disk file, thereby
freeing conventional memory used by the application.  SWAPDOS then runs the
desired program before restoring the original environment.

Throughout this  documentation, you  will see  references to  two different
kinds of  "swaps".   The normal  swap is when SWAPDOS is directly called by
either COMMAND.COM  or another  program.   This method  swaps out  a single
program.

The more  powerful type of swapping SWAPDOS uses is called the "long swap."
With this  method, you  can swap  out multiple programs, resident programs,
etc., in  one fell  swoop.  For example, if you like to have a ram-resident
dictionary available  when using  your word  processor, but  don't want the
dictionary  when  you  use  your  database  program.    Using  the  SWAPDOS
"Mark/long swap" technology, you can remove both the word processor and the
dictionary before  running your database -- AND THEN PUT THEM BACK WHEN YOU
RETURN!

The amount  of  extra  memory  gained  by  using  SWAPDOS  depends  on  the
application(s) being  swapped out.   In  general, ALL of the memory used by
your program is available for use, minus about 3000 bytes.

SWAPDOS is  compatible with  most  PC/MS-DOS  programs.    However,  before
relying on  it, you should test SWAPDOS with your own configuration in case
of conflicts with TSRs and other software.

SWAPDOS requires the use of DOS 3.0 or later.


                        What Do I Use SWAPDOS For?

That all  depends.   Different people  use it  for different  reasons,  and
different purposes.    Rather  than  try  to  describe  all  the  different
possibilities and  permutations, IDC has elected to have our users describe
how they use the program.

     I use  it inside  of PC-Matlab,  because Matlab  chews  up  MUCHO
     memory, and  then, if you want to print a graph, it shells out to
     its external  graphmaking utility.   If  you have  too much stuff
     defined, you  can't print  your graphs  from inside  Matlab!  You
     have to  save the graphics "metafiles" and print from DOS.  Using
     SWAPDOS allows me to ALWAYS be able to print from inside Matlab.
                                                       -- Neil Judell,
                                                            President,
                                     Technical Development Group, Inc.



Page 4                                           SWAPDOS 1.00 Documentation
     Because I  load a  TSR spell-checker  before  running  TAPCIS,  I
     normally have  only 140K  available after  shelling from  TAPCIS.
     SWAPDOS makes  more than  580K of  memory free when shelling from
     TAP, allowing  me to  run Brief, Norton Commander, or MSGVU, from
     within TAPCIS.   I  also use it to run Brief when shelling out of
     QuickBasic.
                                               John P. Wexler, MD, PhD
                                     Asst Dean of Scientific Computing
                                   Albert Einstein College of Medicine


     SWAPDOS fills more than the obvious need to re-claim memory while
     shelled from  an application program.  Standard DOS commands like
     DISKCOPY  and   XCOPY  operate   more  efficiently  when  SWAPDOS
     temporarily frees even one TSR.
                                                    Robert J. Rucinski
                                                  Audiovisual Services
                                                Detroit Public Schools


     As a  Compuserve Sysop,  I respond to and archive messages in the
     Cancer Forum.   I  use the program TAPCIS to "massage" long files
     of messages.  When I need a better editor than that provided with
     TAPCIS,  I   can  shell   from  TAPCIS,  use  SWAPDOS,  and  work
     efficiently with  long message  files in the memory space thereby
     released.
                                                  Gene R. Feaster, PhD
                                           Medical Physicist (retired)
                                   University of Kansas Medical Center


     I run  a very  complex system  with many  TSRs loaded most of the
     time.   Still, occasionally, I run applications which require all
     or most  of DOS'  640K.  SWAPDOS has enabled me to define command
     synonyms (or  batch files) that can unload all the TSRs, load the
     memory intensive  application such as Ventura Publisher, and then
     reload my  TSRs.  I used to solve this by having numerous sets of
     AUTOEXEC.BAT's  and   CONFIG.SYS',  and  rebooting  the  computer
     constantly.   Now I  can get  in and  out of  these  applications
     quickly, and  have the  TSRs reloaded  IN THEIR  PREVIOUS  STATE!
     Imagine running Ventura from a dBase shell!  If SideKick Plus had
     five files  loaded that  I was  editing, they're all still there!
     SWAPDOS is a concept whose time has come!
                                                      Robert K. Blaine
                                                                 Owner
                                                            ECONO-SOFT












SWAPDOS 1.00 Documentation                                           Page 5
     SWAPDOS is  a great  utility which  uses much  less  memory  than
     similar commercial  products.  We use it in my law office to swap
     out of  Microsoft Word  to run  other programs.  With SWAPDOS, my
     secretary does not have to save her work, then quit Word, run the
     next program,  reload word,  reload the  document she was working
     on, and  then find her place within that document.  Instead, with
     SWAPDOS, executing  just one  command swaps Word and the document
     she was  working on to memory and just one command returns her to
     Word in  the document  EXACTLY  where  she  left  off,  with  all
     glossaries and other macros, etc., still loaded!!  If you use one
     or two  main programs and wish to switch among them, or to switch
     to other  programs, and  if you  don't wish  to  use  complicated
     programs like  Software Carousel  or DesqView,  then  SWAPDOS  is
     essential.   If you  have just  640K with no expanded or extended
     memory, then  SWAPDOS is  even more essential.  Like all The SWAP
     Utilities, SWAPDOS is a must have!!
                                                         Gary L. Britt
                                                       Attorney at Law
                                                        Houston, Texas





                               Installation

Installation of SWAPDOS is simple.  Basically, create a directory, copy the
files, "Brand"  the program  with your  name and  serial number, and you're
ready to go!


                     Installing the Shareware Version

Normally,  this  documentation  file  and  all  the  supporting  files  are
distributed as  the file,  "SWAPDS.COM", which is a self-extracting archive
file.  To extract all the files, type:

     SWAPDS [ENTER]

At the  DOS prompt.   That  will create  the program  files.  To print this
documentation, type:

     copy SWAPDOS.DOC LPT1 [ENTER]

The documentation  is formatted  for 58  lines per page, with 75 characters
per line,  to permit  easy printing on the widest variety of dot-matrix and
laser printers.

                           Files in the archive

     SWAPDOS.COM..............The SWAPDOS Program
     SWAPDOS.DOC..............The Program's Documentation
     IDCBRAND.COM.............The IDC 'Brand' Program
     ORDER.DOC................Order Form and Site License Information
     VENDOR.DOC...............Distribution Requirements for Shareware
                              Disk Vendors
     READ.ME..................Late-breaking Information about SWAPDOS

Page 6                                           SWAPDOS 1.00 Documentation
                     Installing the Registered Version

Using the  DOS command  DISKCOPY,  make  a  working  copy  of  the  SWAPDOS
distribution diskette and keep the original in a safe place.

Use the  DOS TYPE or PRINT command to view the contents of the READ.ME file
on the  program diskette.   This  file contains  any information on SWAPDOS
usage that has become available since this manual was printed.

Copy the  files SWAPDOS.COM and IDCBRAND.COM from the distribution diskette
to any  directory in  your path.  If you are not sure which directories are
in your path, you can use the DOS command PATH to get a list.


                           Files on the diskette

     SWAPDOS.COM..............The SWAPDOS Program
     SWAPDOS.DOC..............The Program's Documentation
     IDCBRAND.COM.............The IDC 'Brand' Program
     ORDER.DOC................Order Form and Site License Information
     READ.ME..................Late-breaking Information about SWAPDOS


                              Using IDCBRAND

At the DOS prompt, from the directory that contains SWAPDOS.COM, type:

     IDCBRAND SWAPDOS.COM [ENTER]

You will  be asked  to enter  your name  (registered versions  will also be
asked for a serial number).  ONCE THE PROGRAM IS BRANDED, IT MAY NOT BE RE-
INSTALLED without copying from the original master diskette!  Make sure the
information is correct, and press [ENTER] to confirm.


                                Quick Start

Make sure that SWAPDOS.COM is in your path!

We recommend  that you  take the time to read the rest of the manual before
running SWAPDOS.   However,  if you  are in  a hurry  to use SWAPDOS, first
check whether  your application  is listed  in the  examples in the section
titled "Using  SWAPDOS for  a Single Application."  If it is listed, follow
the instructions  in the  example.  Otherwise, if you are willing to take a
chance that  an incompatibility  between SWAPDOS  and your application will
require that  you reboot your computer, you can start using SWAPDOS to swap
out a single application by following these simple instructions:

1)   Shell to DOS from your application.

2)   Enter the  following command  at the  DOS  prompt  to  swap  out  your
application.

     SWAPDOS [ENTER]

3)   When you  want to  return to your application, use the EXIT command at
the DOS prompt to swap your application back into conventional memory.

SWAPDOS 1.00 Documentation                                           Page 7
4)   Enter  the   EXIT  command  at  the  DOS  prompt  to  return  to  your
application.

If you  only want to run one program while your application is swapped out,
you can  combine steps  two and three by specifying the program name at the
end of  the SWAPDOS  command.   For example,  to run Lotus 1-2-3 while your
application is swapped out, use the command

     SWAPDOS 123 [ENTER]

Many programs  permit more  than a  simple "Shell  to DOS"  function.   For
example, Microsoft  Word has the "Library Run" command, that permits you to
run another  program.   You may  run SWAPDOS  directly from  programs  like
these, instead of going to a DOS shell first.


                         The SWAPDOS Command-Line

The SWAPDOS  command can be entered at the DOS prompt, or it can be part of
the command  string that  your application  sends to  DOS  to  run  another
program.   The section  titled "Using SWAPDOS for a Single Application" for
examples of using SWAPDOS.

  The command syntax is

  SWAPDOS [options] [command]

  Where:

  Options are one or more of the options listed below.
  Command is the program you want to run while your application is
  swapped out.

Options may  be preceded by either a '-' or '/' as a switch character.  Any
options that  have an  optional argument  (such as  the /M  option) may use
either an equals "=" or a colon ":" as the separator.

Valid options are:
  /H /? ? -- Display this help screen
  /S=x    -- Set Swapping Type (0=Auto, 1=Disk, 2=EMM, 3=XMS) SwapType =
               0 is  the default; if selected type fails (i.e.,no XMS is
               available with /S=3), auto-check is done.
  /D=path -- FULL PATHNAME to store swap files
  /U      -- Unique filename is used for swapping
  /M=name -- Set a SWAPDOS "mark" in memory (name is optional)
  /L=name -- Long swap to a SWAPDOS "mark" (name is optional)
  /K=name -- Remove a SWAPDOS "mark" (name is optional)
  /I=name -- Check to see if "mark" is in memory (name is optional)
  /F      -- Force  swap even  if application  appears  to  have  hooked
               interrupt vectors
  /Q      -- Quiet - suppress information messages
  /V      -- Vector saving is suppressed
  /Z      -- Zero "stray" interrupt vectors

  "/" and "-" are valid switch characters
  "=" and ":" are valid separators


Page 8                                           SWAPDOS 1.00 Documentation
If you  do not specify a command, then SWAPDOS simply loads another copy of
the command  processor specified by the COMSPEC variable, and leaves you at
the DOS  prompt.   Type EXIT  at the DOS prompt to restore the programs you
have swapped out and exit SWAPDOS.

Most options  (except those  that take optional parameters) can be prefixed
by an  "n" to  disable an  option that was previously set.  For example, in
the command "SWAPDOS /U /NU" the /NU negates the effect of the /U.  The "N"
prefix is  useful for  overriding options  set in  the SWAPOPT= environment
variable, described in the section titled "Using The DOS Environment To Set
SWAPDOS Options".


               Detailed Explanation of Command-Line Options

/S=x --  The /S  parameter determines  the type of swapping to use.  In the
default Autodetect  mode, SWAPDOS will attempt to allocate expanded memory,
using EMS version level 3.2 or later.  If EMS is not available, the utility
will attempt  to use  Extended Memory  that is available, using Microsoft's
eXtended Memory Specification (XMS) (See note about XMS below).  If neither
EMS or  XMS is available, a disk file will be created, and SWAPDOS will use
disk (default, C:\) for swapping.  The /S parameter can be used to override
the default  mode, and force swapping to XMS, EMS or Disk.  If the swapping
method specified with /S is not valid, then Auto mode is used.

/D=path --  The /D  parameter tells  SWAPDOS in what drive and directory to
store the  swap file.   The default is the root directory on drive C (C:\).
The pathname  is limited  to 30  characters, and must contain a valid drive
specification, and  path.  The trailing backslash is not necessary.  If the
/D parameter  is not  the last  option on the command-line, there must be a
space character  following the  pathname and  before another  slash option.
Note that  this option  does not  force SWAPDOS  to write to disk.  Use the
/S=1 option  to force  SWAPDOS to  use a  disk swap  file even  if you have
available EMS or XMS memory.  An example of this switch is: /D=C:\TEMP

/U --  This option  causes SWAPDOS to use a "unique" filename for disk swap
files using  the DOS  function to  create a  temporary filename.  Filenames
created with  the /U  option usually  consist of  all numeric digits.  This
option is  mainly useful  when multiple  machines on  a network swap to the
same shared  subdirectory,  since  the  default  filename  is  sufficiently
"unique" for  single user  (non-networked) machines,  and makes  it easy to
identify and  erase unnecessary swap files if you reboot your machine while
swap is  active.   Note that this option does not force SWAPDOS to write to
disk.  Use the /S=1 option to force SWAPDOS to use a disk swap file even if
you have available EMS or XMS memory.

/Q --  Specifies that most SWAPDOS informational messages are not displayed
(not available in shareware version).

/Z --  Zeros all "stray" interrupt vectors that point to free memory.  This
can be  useful to  help determine  whether the  /F option  is safe  with  a
particular application.   This option is unnecessary if using the preferred
mark/long swap method.

The following  options are  used in  conjunction with the SWAPDOS mark/long
swap method.   Note  that mark  names are not case sensitive, just like DOS
commands (i.e., "TEST" and "test" are identical).

SWAPDOS 1.00 Documentation                                           Page 9
/M=name --  Sets a  swap "mark".   All programs loaded after SWAPDOS is run
with this option are swapped out when the /L option is used.  A mark "name"
can be specified after the /M option, but is not required.

/L=name --  This is  a "long  swap", used in conjunction with a "mark".  It
specifies that  all TSRs and applications loaded since the last swap "mark"
(or after  the last  mark with the same mark "name") are to be swapped out.
A "mark name" can be specified after the /L option, but is not required.

/K=name -- Kills (removes from memory) a swap "mark" set with the /M option
and all  memory owned  by programs  loaded after the "mark".  A "mark name"
can be specified after the /K option, but is not required.

/I=name --  Determines whether  the (optionally  named) specified  mark has
been found.   Can  be used  in a batch file to determine whether you should
use a  long swap  or not.   Returns  with ERRORLEVEL set to ZERO (0) if the
specified mark is found, and 2 if not found.

NOTE!   The following  two options are provided (/V and /F), but should NOT
be used.   Their  functionality and  features could crash your machine, and
Innovative Data  Concepts will not provide ANY support if these two options
are used!  If you need this functionality, use the SWAPDOS "mark" and "long
swap" method.

/V --  Suppresses the  normal save  and restore  of all  interrupt  vectors
before and after swapping.  This option saves 1K of memory, but should only
be used  if you  are sure that no programs which hook interrupt vectors are
used while your application is swapped out.  WE STRONGLY ADVISE AGAINST THE
USE OF THIS OPTION!

/F --  Forces SWAPDOS to continue even if an interrupt vector points to the
program that  gets swapped  out.  This option is provided ONLY for backward
compatibility with  previous versions  of this program.  WE STRONGLY ADVISE
AGAINST THE USE OF THIS OPTION!


             Using the DOS Environment to Set SWAPDOS Options

Default SWAPDOS  options can  be specified using a DOS environment variable
called SWAPOPT.   You can set the value of the SWAPOPT environment variable
by using the DOS SET command:

     SET SWAPOPT=options [ENTER]

Options specified  on the  command line  override options  specified in the
environment variable.   SWAPDOS  looks for  this environment  variable  and
processes any options that it contains before processing the options on the
SWAPDOS command  line.  The section titled "The SWAPDOS Command-Line" lists
all valid SWAPDOS options.  The "n" prefix described in that section can be
used on  the command  line options  to override  any  options  set  in  the
environment variable.

The  SWAPOPT   environment  variable   is  usually  set  from  within  your
AUTOEXEC.BAT.   Your DOS  manual contains  more information on AUTOEXEC.BAT
files and the SET command.



Page 10                                          SWAPDOS 1.00 Documentation
Please note  that you  cannot use  the '='  as a separator in your SWAPOPT.
Instead, use the ':' character as a separator.

As an example, you can issue the command

     SET SWAPOPT=/L /Q /S:1 /D:H:\[ENTER]

to make  the /L,  /Q, /S:1  and /D:H:\ options the defaults for any SWAPDOS
commands subsequently  issued.   If  you  subsequently  issue  the  command
"SWAPDOS /S:0"  then SWAPDOS will try to swap to EMS or XMS before swapping
to  disk,   because  the  command-line  options  override  the  environment
settings.

The most common use of SWAPOPT would be to use /Q, /L (so you ALWAYS have a
long swap),  /D to  set the  swapping directory to a ramdisk, and /S to set
the swapping  type.   You SHOULD  NOT use  /M, /K  or  /H  in  the  SWAPOPT
variable.

Using SWAPDOS for a Single Application

To run  SWAPDOS to  swap out  a single application program to make room for
another, you can either

1)   Use the  shell-to-DOS feature  of the program to get to the DOS prompt
and run SWAPDOS.COM, or

2)   Imbed the  SWAPDOS command in the command string that your application
sends to DOS to run another program.

The commands to perform this function vary from application to application.
If the  examples below  do not  include your  application, and if you don't
know the  appropriate command  for your  application, check the application
manual's index  and table  of contents  for "Shell  to DOS", "Exit to DOS",
"System", and "Run".

Here are examples of how to swap out some popular programs:

  dBASE III and dBASE IV

To run  SWAPDOS to  swap out dBASE and load your favorite editor, you could
enter the dBASE command

     RUN SWAPDOS KEDIT filename [ENTER]

Alternately, you could add the following line to your CONFIG.DB file:

     TEDIT = SWAPDOS.COM KEDIT.EXE

and subsequently enter the following dBASE command to edit a file:

     MODIFY COMMAND filename [ENTER]







SWAPDOS 1.00 Documentation                                          Page 11
  MAKE utilities

To swap  out most  MAKE utilities  so that your compiler has more available
memory, use a makefile that looks like this

     appl.obj:  appl.c appl.h
          swapdos cl -Zip $*.c

  KEDIT from Mansfield Software Group

The KEDIT command "DOS SWAPDOS /Q" will swap out KEDIT and leave you at the
DOS prompt.   To automatically swap out KEDIT by pressing a single key, add
the  command   "Define  Alt-F4   dos  SWAPDOS   /Q"  to   your  PROFILE.KEX
configuration file  and exit  the editor.   When you subsequently run KEDIT
you can press Alt-F4 to automatically run SWAPDOS.

  1-2-3

Use the  1-2-3 "System" command to shell to dos, and then type "SWAPDOS" to
recover the memory used by the program.

  Microsoft Word

Select "Library Run", and enter "SWAPDOS [cmd]", to run another program.

  WordPerfect Library

To recover the 40K or so used by the WordPerfect Library Shell, go into the
setup screen,  and change the command to execute to call SWAPDOS instead of
the application directly.

  WordPerfect 5.1

Press Ctrl-F1, followed by numeral 2, and type:

     SWAPDOS [programname] [ENTER]

WordPerfect may  take control  of the EGA/VGA Control region, necessitating
the use of a SWAPDOS "mark".

  TAPCIS

Same as  WordPerfect 5.1,  except use Shift-F1.  TAPCIS may take control of
the EGA/VGA Control region or some interrupt vectors, necessitating the use
of a SWAPDOS "mark".













Page 12                                          SWAPDOS 1.00 Documentation
                               Simple Shells

The following  programs do  not  permit  running  a  separate  application;
however, they  do permit the use of a DOS shell.  Simply shell to DOS using
the appropriate commands, and then type:

     SWAPDOS [ENTER]

to recover the memory used by the application.
  GrandView
  WordStar
  WordPerfect (before version 5.1)
  WordPerfect Program Editor


                           Using SWAPDOS "Marks"

The SWAPDOS  /K, /L, and /M allow you to swap out multiple applications and
TSRs at one time.  To use this facility, follow these steps:

1)   Issue the  command "SWAPDOS /M".  This causes SWAPDOS to reserve about
1,200 bytes of your computers conventional memory for information needed to
swap out  subsequently loaded  programs.   This is  referred to  as a  swap
"mark".

2)   Load one  or more  TSRs and/or  application programs  (for example,  a
spelling checker and your word processor).

3)   To swap out programs loaded in step 2, issue the command "SWAPDOS /L".
Note that  the "mark" set in step 1 cannot be used again until you complete
step 4.

4)   Once you are ready to restore the programs swapped out in step 3 issue
the EXIT [ENTER] command from the DOS prompt.

5)   After leaving  the applications or unloading the TSRs loaded in step 2
issue the  command "SWAPDOS  /K" to  reclaim the  memory used  by the  swap
"mark" set up during step 1.

As an example, if you use Turbo Lightning and WordPerfect, you could do the
following:

  SWAPDOS /M=LIGHT [ENTER]-- Load SWAPDOS mark named "LIGHT"
  LIGHT [ENTER]                            -- Load Lightning
  WP [ENTER]                             -- Load WordPerfect
                                -- shell to DOS with Ctrl-F1
  SWAPDOS /L=LIGHT [ENTER]      -- Long SWAP to "LIGHT" mark
                           -- run whatever programs you like
  EXIT [ENTER]                             -- recover memory
  EXIT [ENTER]                                 -- back to WP
                                             -- quit from WP
  SWAPDOS /K=LIGHT [ENTER]         -- to remove SWAPDOS mark
                                      and Lightning from RAM


If you  loaded TSRs  in step 2 that do not have an "unload" option, you can
usually reclaim  any conventional  memory they  allocated with the "SWAPDOS

SWAPDOS 1.00 Documentation                                          Page 13
/K" command.   However,  if possible,  it is always better to use the TSR's
"unload" facilities,  rather than  relying on the /K option, to ensure that
any application  specific resources (e.g. temporary disk work files, EMS or
XMS memory, etc.) are restored.

PLEASE NOTE:  If you run IDC's SWAP Utility TSR programs between SWAPDOS /M
and SWAPDOS /L, and then re-load them while the SWAP?? program is resident,
you will trash the original copy's swap files!  For example, if you already
have SWAPSP  loaded, and remove it with a long swap, you will overwrite the
SWAPSP temporary files if you re-load SWAPSP again before restoring!

If you only want to run one program while your TSRs and/or applications are
swapped out, you can combine steps three and four by specifying the program
name at  the end  of the  SWAPDOS command.  For example, to run Lotus 1-2-3
while the programs are swapped out, use the command

SWAPDOS /L 123

You can  specify a  "swap name"  with the  /M /L,  and /K  options.  If you
specify a  name when  you set  a mark  with the  /M option  you  can  later
reference that mark by again specifying the name with the /L or /K options.
For example, if you issue the command "SWAPDOS /M=FirstMark", load a TSR or
application, and  later set  another mark,  you can  swap out  all programs
loaded after the first mark with the command "SWAPDOS /L=FirstMark".


                        Restrictions for Mark Names

Note that  swap names  are NOT  case sensitive  (in other words "first" and
"FIRST" and  "First" are all considered the same mark name) and are limited
to 12  characters.   All characters  following the  separator and up to the
first space  are considered  part of  the swap  name.    Only  alphanumeric
characters may be used for mark names -- numbers and letters.


                           Technical Information


                    Where SWAPDOS writes the swap data

Normally SWAPDOS  first will  try to  swap to  expanded memory  (EMS 3.2 or
later is  required for  expanded memory  support).  If there is no expanded
memory available it will try to swap to extended memory (XMS version 2.0 or
later is  required for  extended memory  support).  If there is no extended
memory  available  it  will  swap  to  disk,  using  the  default  filename
C:\SWAPxxxx.SWP (where  xxxx is  the process  ID of  the program  that gets
swapped out).  You can override the normal behavior with the /S, /U, and /D
options described previously.


                EMS and XMS (Expanded and Extended Memory)

EMS is  the Expanded  Memory  Specification,  developed  by  Lotus,  Intel,
Microsoft.   In Intel 8086 and 80286 machines (e.g.  IBM PC and IBM AT) EMS
support is  normally provided  by memory  expansion boards  such as the AST
Rampage.   On Intel  80386 machines  (e.g.   IBM PS/2  model 60  to 80) EMS
support is  implemented in  software, either  via memory  managers such  as

Page 14                                          SWAPDOS 1.00 Documentation
386MAX from  Qualitas or  device drivers  like  XMAEM.SYS  and  XMA2EMS.SYS
provided with IBM's PC-DOS 4.00.

XMS is  the eXtended  Memory  Specification,  developed  by  Lotus,  Intel,
Microsoft, and  AST.   XMS support  is provided  by  the  HIMEM.SYS  driver
included with  MS-DOS 4.00 (but not IBM's PC-DOS) and with Windows 286.  If
you don't  have HIMEM.SYS but have access to CompuServe, you can get a free
copy from  in library  1 of  the CompuServe MSSYS forum.  The 386MAX memory
manager from Qualitas also supports XMS, as does QuarterDeck's QEMM 5.0


                          Compatibility with TSRs

SWAPDOS  is   compatible  with  most  TSRs  (Terminate  and  Stay  Resident
programs).   It will  coexist with  these programs  and even  swap them out
(thereby temporarily  disabling them).   However,  if you load (initialize)
TSRs while  an application is swapped out, you should unload the TSR before
returning to  your application.   For example, you can use the command "SK"
to load  SideKick before  starting your  application, then run SWAPDOS, and
hot-key into  SideKick while  SWAPDOS is  active, but  you should  not load
SideKick with the command "SWAPDOS SK".


                Command Interpreters other than COMMAND.COM

SWAPDOS should  be compatible  with most  command interpreters,  as long as
they are  compatible enough  with COMMAND.COM.   Two that are known to work
well are 4DOS and FlexShell.

Why replace  COMMAND.COM?    It  is  the  confirmed  opinion  of  IDC  that
COMMAND.COM is  a brain-damaged  command-line interpreter.  Batch files are
slow and have a kludgey language interface; command-line editing is next to
nil; and the internal commands lack flexibility.

For these  and other  reasons, we  heartily recommend  using either PCED, a
COMMAND.COM extension  program, or  the two  replacement shells  (4DOS  and
FlexShell) mentioned above.

PCED stands  for Professional  Command EDitor.   It is designed to help you
with editing  command-lines, repetitive  commands, and  more.   It provides
these basic features:
     - A better command editor than the one that is part of DOS.
     - A  way to quickly recall and edit previously-issued commands for re-
          entry.
     - Command  synonyms, which allow you to abbreviate often-used commands
          to a few letters or symbols.
     - The  ability to  "chain" a series of commands together without using
          disk-wasting batch files.
     - Automatic recall of arguments to previously-issued commands.

In addition, PCED provides an external interface that allows other programs
to make  use of  PCED features if they wish to.  It is even possible, using
this interface, to simulate the addition of new internal commands to DOS.

For more  information, contact  The Cove  Software Group,  Post Office  Box
1027, Columbia, MD 21044, or call 1-301-992-9371.


SWAPDOS 1.00 Documentation                                          Page 15
SWAPDOS has  been specifically  tested with 4DOS, the shareware COMMAND.COM
replacement which  was a  finalist  for  the  1989  PC  Magazine  Technical
Excellence Award.

4DOS replaces  COMMAND.COM, the  command interpreter  that comes  with  all
versions of MS-DOS and PC-DOS.  You'll find 4DOS provides many capabilities
that COMMAND.COM can't:
     - A Vastly enhanced DIR command.
     - Point-and-shoot file selection for any command.
     - Command history and editing.
     - Shorthand commands called "aliases".
     - More than 40 "new" DOS commands.

With all  this added  functionality, 4DOS  is  completely  compatible  with
COMMAND.COM,  and   requires  less   than  4K  of  DOS  memory  while  your
applications are  running.   For more information, contact J.P. Software at
P.O. Box  1470, E.  Arlington, MA 02174; phone 1-617-646-3975, fax 617-646-
0904.

SWAPDOS will  detect the presence of 4DOS in your system, and adjust itself
accordingly.  4DOS provides vastly increased power at the DOS command-line,
and may be of particular interest to SWAPDOS users.

Versions of 4DOS prior to 3.0 do not require the use of a "master" (memory-
resident)  DOS  environment,  so  SWAPDOS  is  unable  to  reduce  its  own
environment before  going resident  for a  SWAPDOS "mark".  In 4DOS version
3.0, the master environment is standard, and this problem should not occur.

If you  are using  a version of 4DOS prior to 3.0, use the following method
to reduce the space taken by the environment when SWAPDOS is loaded:

     Put  all   the  alias   definitions  and   all  the  non-critical
     environment assignments in the 4start.bat file.  When you want to
     load the  SWAPDOS mark, use the following sequence of commands in
     your batch file:

           unalias *
           REM set all non-critical environment strings to blank
           SWAPDOS /M=name
           REM call 4START or a similar batch file to reload the
                 aliases and environment strings


     Note that  you should  not use  the 4DOS  SETLOCAL  and  ENDLOCAL
     commands to modify the environment for SWAPDOS, because they will
     leave a "hole" in memory below SWAPDOS.  This will cause no harm,
     but will eliminate the memory savings you wanted!

If you have any trouble using SWAPDOS with 4DOS, contact either IDC or J.P.
Software, publishers  of 4DOS,  at  1-617-646-3975.    Both  companies  are
equipped to support your use of these products together.







Page 16                                          SWAPDOS 1.00 Documentation
FlexShell from FlexWare is a shell for DOS that replaces COMMAND.COM.  Some
of the benefits of using FlexShell are:
     - It  enhances almost  all standard COMMAND.COM commands and adds many
          new commands.
     - It executes standard BAT files.
     - It provides a command-line editor, a history stack with command-line
          completion and aliases.
     - It consumes little memory and can utilize EMS.
     - Custom  shells can  be built  using ShellGen,  a companion  utility,
          which lets you choose the commands and features to be included.
     - Command extensions can be written in C or assembler.

For more  information, contact  FlexWare, 937  JungFrau Ct.,  Milpitas,  CA
95035, or Stan Mitchell 73227,1463 on Compuserve.


               Loading SWAPDOS "Marks" in "High" DOS Memory

In a single word:  DON'T!

The methods  SWAPDOS use  to swap  out applications  requires  that  it  be
present in  low memory,  below the  application to  be swapped out.  Do not
load SWAPDOS into high memory!


                   Interrupt Vectors and the EGA pointer

SWAPDOS will  not swap  out a program that has taken control of one or more
of the  systems interrupt  vectors, nor  will it  swap an  application that
controls the  EGA/VGA Save  Pointer  region.    This  is  because  removing
interrupt handling  code  would  probably  result  in  a  crashed  machine.
However, spurious  interrupt vectors  often point  at memory  used  by  the
application program you want to swap out.

If you  want to  swap out  an application  which has  taken control  of the
system interrupt  vectors or  uses the EGA/VGA Save Pointer region, use the
SWAPDOS "mark/long swap" method described above.


Exit Codes and Error Messages


                                Exit Codes

SWAPDOS exit  codes (sometimes  known as  error levels or return codes) and
their meanings are:

     0 - SWAPDOS completed successfully.
     1 - An invalid option was specified.
     2 - An error occurred before SWAPDOS temporarily freed up memory.
     3 - An error occurred after SWAPDOS temporarily freed up memory.
     This exit code indicates a serious condition that may require a
     reboot (e.g. the user erased the disk swap file, so SWAPDOS cannot
     restore the environment).

You can  check the  SWAPDOS error  code from DOS batch files with the batch
file command IF ERRORLEVEL, as described in your DOS manual.

SWAPDOS 1.00 Documentation                                          Page 17
                        Error Message Descriptions

SWAPDOS error messages and error message descriptions follow:

  Could not allocate extended memory

An error  was returned  by the XMS memory manager when SWAPDOS attempted to
allocate extended  memory.   This could  happen if  you specified  the /S=3
option but there was not enough free extended memory.

  Could not create swap file

DOS returned  an error  when SWAPDOS tried to create its swap file on disk.
This would  happen if  the path  information specified by the /D option was
invalid.   If you  did not  use the /D option and have a C:  drive, perhaps
you are  already using  the maximum number of files allowed by your version
of DOS in the root directory, or perhaps the disk is full.

  Could not find an application to swap out

SWAPDOS could  not find  an application  program to  swap out.   This could
happen if  you are  running SWAPDOS from the DOS prompt but did not use the
"shell to  DOS" feature  of an  application to get to the DOS prompt.  Note
that if  you want  to swap  out TSRs,  you need  to use  the /L  option, as
described in section the section titled "Using SWAPDOS Marks".

  Could not find COMSPEC= in environment

SWAPDOS could  not find the required COMSPEC= variable in your environment.
This could  happen if  some .BAT  file you  ran issued the DOS command "set
comspec=".   Note that  this environment variable is set automatically when
you boot DOS.

  Could not find Master DOS Environment

This message  indicates a  serious incompatibility between SWAPDOS and your
command interpreter.  Please contact IDC Technical Support immediately.

  Could not find specified SWAPDOS "mark"

You specified  the /K or /L options, but SWAPDOS could not find the SWAPDOS
"mark".  This could happen if you forgot to run SWAPDOS with the /M option,
or if you have already swapped out all your swap "marks".

  Could not find SWAP's PSP

There is  a problem with the memory allocation chain.  Notify IDC technical
support if you see this message.

  Could not open swap file

DOS returned  an error  while SWAPDOS  was trying to open a disk swap file.
This could happen if you (or some program you ran) erased the swap file.





Page 18                                          SWAPDOS 1.00 Documentation

  DOS version must be 3.0 or higher

SWAPDOS will  not work  with DOS versions under 3.0.  Consider upgrading to
DOS version 3.3 or higher.

  EMS Error nn function mm

The EMS memory manager returned error nn while processing function mm.  Use
the /S=1  or /S=3  option to  circumvent this  problem.   This most  likely
happened if  your EMS is not configured correctly.  If you believe your EMS
is configured  correctly (e.g.  you have  successfully used your EMS memory
with other programs) contact IDC technical support.

  Error reading swap file

DOS returned  an error  while SWAPDOS  was trying  to read from a disk swap
file.   This could  happen if you (or some program you ran) erased the swap
file.

  Error writing to swap file

DOS returned  an error  while SWAPDOS  was trying  to write  to a disk swap
file.   This could  happen if the disk specified by the /D option (or the C
disk, if you didn't use the /D option) is full.

  Fileid prefix specified after /D option is too long

The path  information specified after the /D option is too long.  The limit
is 52 characters.

  Invalid character in mark name

Only alphanumeric  characters (0  through 9,  A through Z) are permitted in
mark names.  Lower-case letters are converted to upper case before storage.

  Invalid option

An invalid  option was  specified.  Valid options are listed in the section
titled "Command Syntax".

  Less than 16K to swap

SWAPDOS will not swap out programs smaller than 16K in size.

  LSEEK on swap file failed

DOS returned  an error  while SWAPDOS  tried to  set the file pointer for a
disk swap  file.  This could happen if you (or some program you ran) erased
the swap file.

  Mark name is too long

The specified mark name was too long.  The limit is 12 characters.




SWAPDOS 1.00 Documentation                                          Page 19

  Memory is too fragmented to swap

SWAPDOS could  not find  a required  memory  control  block  while  looking
through the  memory allocation chain.  This could happen if you are running
other programs that manipulate the memory allocation chain while SWAPDOS is
running (i.e., multitasking software).

  No XMS Driver

You have  specified the  /S=3 option, but an XMS driver is not installed in
your machine.   Make  sure that Microsoft's HIMEM.SYS (or an equivalent XMS
driver) is being loaded through your CONFIG.SYS.

  Not enough memory

SWAPDOS was  unable to  reallocate its  own memory.   Most  likely, the DOS
memory allocation  chain has been corrupted.  Contact IDC technical support
for assistance.

  Over 200 Memory Control Blocks in system

This error  will occur  in the  unlikely event  that you have more than 200
memory control  blocks in  use.   Contact  IDC  technical  support  if  you
encounter this error message.

  SWAPDOS "mark" in use - use the EXIT command to restore memory

The specified  SWAPDOS  "mark"  has  already  been  used  to  SWAP  out  an
application.   Either you  want to swap to a different mark, or you want to
EXIT and restore memory before swapping again.

  XMS Error nn function mm

The XMS memory manager returned error nn while processing function mm.  You
can use the /D option to bypass this problem.  Please contact IDC technical
support if you encounter this error.

  Your application appears to have hooked an interrupt vector

One  or  more  system  interrupt  vectors  point  at  memory  used  by  the
application you  are trying  to swap  out.  You must use the Mark/Long Swap
method in order to swap out this application.

  Your application appears to control the EGA/VGA Configuration Region

The application you are trying to swap out has taken control of the EGA/VGA
configuration pointers.  You must use the Mark/Long Swap method in order to
swap out this application.

  Your application does not have an environment

The application  you are trying to swap out appears to have deallocated its
environment.   SWAPDOS will not swap out applications that have deallocated
their environment.



Page 20                                          SWAPDOS 1.00 Documentation
                          If Something Goes Wrong

If SWAPDOS  cannot operate  correctly it should issue an error message that
describes the problem.  If you encounter an error message, please check the
section titled  "Exit Codes and Error Messages".  Most message descriptions
include a  probable cause that may make it easy for you to quickly identify
the problem.   If  that doesn't  help, or if you don't get an error message
from SWAPDOS, these steps will help identify the problem:

-    Try to  swap out  a different  application.   SWAPDOS is  known to  be
compatible with  dBASE III  Plus, dBASE  IV, 1-2-3, WordPerfect, KEDIT, and
the other  programs which  have examples  in the  preceding sections.    If
SWAPDOS works  with other  applications on  your system then it is possible
that SWAPDOS is incompatible with the application you are trying to swap.

-    Try specifying  a different  command on the SWAPDOS command line.  For
example, "SWAPDOS  VER" (VER  is an  internal DOS command that displays the
DOS version  number).   If this  works, it  is  possible  that  SWAPDOS  is
incompatible with  the program you are trying to run while your application
is swapped out.

-    Use the  /S=1 option to force SWAPDOS to write to disk. if this solves
the problem,  then there  might be  a problem  with your  EMS  software  or
hardware.

-    Rename your AUTOEXEC.BAT and CONFIG.SYS, reboot your computer, and try
to recreate  the problem.   If the problem does not occur during this test,
then there  is probably a conflict between SWAPDOS and a TSR (Terminate and
Stay Resident  program) loaded  by your  AUTOEXEC.BAT or  a  device  driver
loaded in  your CONFIG.SYS.  To determine which one is causing the conflict
you can  rebuild your  AUTOEXEC.BAT and  CONFIG.SYS one line at a time, and
reboot and  rerun SWAPDOS after each change until the problem occurs.  This
should pinpoint  the conflicting  program.  Sometimes rearranging the order
in which TSRs are loaded can eliminate the conflict.  Otherwise you may not
be able to use SWAPDOS while this program is loaded.

Direct telephone  support is  only guaranteed  for registered  users.  Non-
registered users will be supported directly only as time permits.

The quickest  and easiest  way to get technical support, registered or not,
is to  contact Chip Rabinowitz at Compuserve 70731,20, MCIMAIL 315-5415, or
FAX 1-215-886-4225.   You may also write to Innovative Data Concepts at the
address above, or call 1-215-884-3373.


                         Commonly Asked Questions

  What kind of applications can't SWAPDOS handle?

This version of SWAPDOS cannot swap out most networking software.

Communications programs  which depend  on continuous  access  to  interrupt
vectors tend  to lock  up if you swap them out while they are communicating
with another system.

Multitasking programs  like DesqView and Windows which do not use the Intel
80386 virtual  machine features  can rearrange  DOS memory while SWAPDOS is

SWAPDOS 1.00 Documentation                                          Page 21
running (kind  of like  pulling the  rug out under your feet), resulting in
the "Memory  is too  fragmented to  swap" message.   However,  since  these
programs provide  their own  facilities for  overcoming memory constraints,
you generally would not use SWAPDOS with these products.

Programs which "hook" into DOS instead of modifying interrupt vectors.  For
example, the  FASTOPEN and  APPEND commands  cannot be swapped out, because
they modify undocumented areas of memory reserved for use by DOS.

  What vectors does SWAPDOS hook?

SWAPDOS doesn't  "hook" any interrupt vectors.  SWAPDOS copies and restores
the system's  interrupt vector  table at  critical points (e.g.  before and
after swapping  out an  application) to  avoid system  crashes, but SWAPDOS
never takes control of any interrupt vectors.

  Is SWAPDOS a TSR?

SWAPDOS only uses the "terminate and stay resident" feature of DOS when you
use the  /M option.   The  only thing  that stays  resident  is  a  program
"signature" and copy of the current system interrupt vectors.  This is done
so that the vectors can be restored when you use the /L option.

  Why doesn't SWAPDOS set the DOS exit code to the exit code returned by
  the program I specified on the SWAPDOS command line?

SWAPDOS runs  the program  you specified  via COMMAND.COM,  the DOS command
processor.   COMMAND.COM does  not  return  the  error  level  set  by  the
specified program,  so SWAPDOS  does not  have access  to the  error level.
Instead SWAPDOS  sets the  error level  to  indicate  the  success  of  the
swapping  operation,   as  described   in  section  titled  "Error  Message
Descriptions".


























Page 22                                          SWAPDOS 1.00 Documentation
  What features are planned for future releases?

While we haven't committed to any new features or release dates, here are a
few of the things we are considering:

  -  Support for swapping network software
  -  OBJ file for inclusion in other EXE files
  -  Ability to automatically unload TSRs loaded after a "mark"
  -  Optional data compression to reduce the time it takes to swap
  -  "Hotkey" to switch between swapped applications
  -  "High" DOS memory support
  -  Full-blown task-switching


                       COPYRIGHT NOTICE AND LICENSE

Innovative Data  Concepts, the  copyright owner  for  The  SWAP  Utilities,
hereby licenses  you to:  use the  software; make  as many  copies  of  the
shareware version  of this  software and  documentation as  you wish;  give
exact copies  of the  original shareware  version to anyone; and distribute
the shareware  version of  the software and documentation in its unmodified
form via electronic means. There is no charge for any of the above.

This is  not free  software.   This license allows you to use this software
without charge for a period of 30 days.  Any use of The SWAP Utilities past
this 30-day  period is  in violation  of federal copyright laws and will be
prosecuted.

No copy  of the  software may  be distributed  or given  away without  this
accompanying documentation;  this notice  must not be removed.  ONLY COPIES
OF THE  SHAREWARE VERSION MAY BE DISTRIBUTED IN ANY FORM.  IDC will provide
disks with  the shareware  versions of  ALL SWAP  Utilities  programs  upon
written request.


                                 Warranty

There is  no warranty  of any  kind associated  with this software, and the
copyright owner  is not  liable for  damages of  any kind.   By  using this
software, you  agree to this. Every effort has been made by Innovative Data
Concepts to  make this  product bug-free.   However, the nature of software
development is  that it  is impossible to guarantee bug-free software. If a
registered user  reports a  verifiable bug,  the user  will receive  a free
upgrade to the next version of The SWAP Utilities.














SWAPDOS 1.00 Documentation                                          Page 23
                   COPYRIGHT NOTICE AND LICENSE (cont.)


                               Registration

Upon receipt  of the appropriate registration fee, Innovative Data Concepts
will send  the user a printed copy of this documentation, a disk containing
a version  of SWAPDOS  without the  shareware registration  screen,  and  a
registration number entitling the user to upgrades and telephone support.

Registered users  will also  be given  a toll-free  number that will permit
them to receive a free Compuserve Intro-Pak, along with a $15 usage credit.


              Bulletin Boards, Users Groups and Disk Vendors

Bulletin Board  Sysops and  User Groups are encouraged to fill out the form
below, which will automatically place them on a mailing list to receive the
latest version  of all IDC shareware products as they are released, as well
as upgrades  to already  existing programs.   There  is  no  fee  for  this
service.

Disk Vendors  who wish to distribute The SWAP Utilities must satisfy one of
the following requirements:

1)   The vendor  must have  been accepted  as an  associate member  of  the
Association of Shareware Professionals; or

2)   The vendor  must agree  to abide by the standards for disk vendors, as
set forth by the Association of Shareware Professionals.

Disk vendors  who do  not meet  these requirements  are  NOT  PERMITTED  TO
DISTRIBUTE THE SWAP UTILITIES UNDER ANY CIRCUMSTANCES!

For information on obtaining ASP-approved status, contact:

     Vendor Membership Coordinator
     Association of Shareware Professionals
     P.O. Box 5786
     Bellevue, WA 98006

UNDER NO  CIRCUMSTANCES MAY  THE SWAP  UTILITIES BE DISTRIBUTED WITHOUT ALL
ACCOMPANYING  DOCUMENTATION  FILES  (INCLUDING  THIS  COMPLETE  FILE),  ALL
PROGRAMS, AND  OTHER MATERIALS  PROVIDED  WITH  THE  OFFICIAL  COPIES  FROM
INNOVATIVE DATA  CONCEPTS.   ANY SUCH DISTRIBUTION OF THE SWAP UTILITIES OR
ITS RELATED  FILES, EXCEPT  AS PROVIDED  FOR  IN  THIS  LICENSE,  SHALL  BE
DETERMINED TO  BE IN  VIOLATION OF  FEDERAL  COPYRIGHT  LAWS  AND  WILL  BE
PROSECUTED.










Page 24                                          SWAPDOS 1.00 Documentation
                      About Innovative Data Concepts

Innovative Data  Concepts is  a consulting  firm owned and operated by Chip
Rabinowitz,  specializing   in   Ram-Resident   programs,   communications,
printing, video and more.

Rabinowitz is an Assistant Sysop on the Computer Language Magazine Forum on
CompuServe Information  Service and  also provides  technical  support  for
Borland International  as a  member of  "Team Borland"  on their Compuserve
Forums, in  the areas  of Turbo  C, Turbo  Assembler, Turbo  Debugger,  and
SideKick Plus.   He is also the leader of the TesSeRact Development Team, a
group pushing for Ram-Resident Programming Standards.

The technique  used to  swap these  applications may  be applied  to  other
resident programs  as well,  and  Innovative  Data  Concepts  is  currently
investigating  other   possible  SWAP??   programs.     If  you   have  any
suggestions/comments, please contact IDC.

A similar  technique  may  also  be  directly  incorporated  into  resident
programs; for more information, please contact IDC directly.


                      The Rest of The SWAP Utilities

The SWAP Utilities is a set of memory-saving utilities from Innovative Data
Concepts.  There are currently eight SWAP?? programs available, which allow
you to  run eight  popular Ram-Resident programs in less than 7000 bytes of
memory (SWAPSP  - 7400,  SWAPMT 8200),  far less  than they  require  under
normal circumstances.

The following SWAP Utilities are currently available:

     SWAPSK(TM) -- For SideKick
     SWAPSP(TM) -- For SideKick Plus
     SWAPTN(TM) -- For Tornado
     SWAPMT(TM) -- For Metro
     SWAPMM(TM) -- For MemoryMate
     SWAPSH(TM) -- For PCTools Shell
     SWAPDT(TM) -- For PCTools Desktop
     SWAPNG(TM) -- For The Norton Guides

For more  information about  The SWAP  Utilities, contact  Innovative  Data
Concepts, or see the accompanying ORDER.DOC file.















SWAPDOS 1.00 Documentation                                          Page 25
                  Association of Shareware Professionals

Innovative Data  Concepts is  a member  of  the  Association  of  Shareware
Professionals (ASP), an organization formed in April 1987 to strengthen the
future  of   shareware  (user-supported  software)  as  an  alternative  to
commercial software.    Its  members,  all  of  whom  are  programmers  who
subscribe to a code of ethics, are committed to the concept of shareware as
a method of marketing.

ASP has established stringent standards for its members.  ASP wants to make
sure that  the shareware  principle works  for you.   If  you are unable to
resolve a  problem with  an ASP  member (other than technical support), ASP
may be  able to  help.  Please write to the ASP Ombudsman at P.O. Box 5786,
Bellevue, WA 98006.

The primary goals of the ASP are:
     To inform  users about  shareware programs  and about  shareware as  a
          method of distributing and marketing software;
     To encourage broader distribution of shareware through user groups and
          disk dealers  who agree  to identify  and explain  the nature  of
          shareware;
     To assist members in marketing their software;
     To provide  a forum  through which  ASP members may communicate, share
          ideas, and learn from each other; and
     To foster  a high degree of professionalism among shareware authors by
          setting programming,  marketing, and  support standards  for  ASP
          members to follow.


         Standards for the Association of Shareware Professionals

PROGRAMMING STANDARDS:

     The program  meets the  ASP's definition of "shareware" (i.e., it
     is not a commercial demo with major feature disabled, nor a time-
     limited program).

     The program  has been  thoroughly tested by the author and should
     not be harmful to other files or hardware if used properly.

DOCUMENTATION STANDARDS:

     Sufficient documentation is provided to allow the average user to
     try all the major functions of the program.

     Any discussion  of the  shareware  concept  and  of  registration
     requirements is done in a professional and positive manner.

SUPPORT STANDARDS:

     The member will respond to people who send registration payments,
     as promised  in the  program's documentation.   At a minimum, the
     member will acknowledge receipt of all payments.





Page 26                                          SWAPDOS 1.00 Documentation
     The member  will establish  a procedure  for users to report, and
     have acknowledged, matters such as bug reports, and will describe
     such means  in the documentation accompanying all versions of the
     programs.   The author  will respond  to written bug reports from
     registered users when the user provides a self-addressed, stamped
     envelope.

     Known incompatibilities with other software or hardware and major
     or unusual  program limitations  are noted  in the  documentation
     that comes with the shareware (evaluation) program.

GENERAL:

     Members will keep the ASP apprised of changes in mailing address;
     which shareware  programs they  have published  and are currently
     supporting; the  current version  numbers; and  of any changes in
     the status of their programs.

     If a  user has  a dispute with an ASP member-author, the user may
     appeal to the ASP to mediate for arbitration of the dispute.

For more  information about  the Association  of  Shareware  Professionals,
contact Paul  Mayer, Membership  Coordinator  of  the  ASP,  at  Compuserve
70040,645, or write the ASP at P.O. Box 5786, Bellevue, WA 98006.


































SWAPDOS 1.00 Documentation                                          Page 27

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```


                          The SWAP Utilities(TM)


                                SWAPDOS(TM)


                               Version 1.00


     Program:

     (c) Copyright 1988-1990 Nico Mak - All Rights Reserved
     Distributed under License by Innovative Data Concepts

     Documentation:

     Copyright 1990, Innovative Data Concepts
     All Rights Reserved


This document; other accompanying written and disk-based notes and 
specifications; and all referenced and related program files accompanying 
this document are copyrighted by Innovative Data Concepts.

             _______
        ____|__     |               (TM)
     --|       |    |-------------------
       |   ____|__  |  Association of
       |  |       |_|  Shareware
       |__|   o   |    Professionals
     -----|   |   |---------------------
          |___|___|    MEMBER


              Bulletin Boards, Users Groups and Disk Vendors

Bulletin Board Sysops and User Groups are encouraged to fill out the
form stored in ORDER.DOC, which will automatically place them on a mailing 
list to receive the latest version of all IDC shareware products as they 
are released, as well as upgrades to already existing programs.  There is
no fee for this service.

Disk Vendors who wish to distribute The SWAP Utilities must satisfy
one of the following requirements:

  1) The vendor must have been accepted as an associate member of the
     Association of Shareware Professionals; or
  2) The vendor must agree to abide by the standards for disk vendors,
     as set forth by the Association of Shareware Professionals.

Disk vendors who do not meet these requirements are NOT PERMITTED TO
DISTRIBUTE THE SWAP UTILITIES UNDER ANY CIRCUMSTANCES!

For information on obtaining ASP-approved status, contact:

        Vendor Membership Coordinator 
        Association of Shareware Professionals
        PO Box 5786
        Bellevue,WA 98006

UNDER NO CIRCUMSTANCES MAY THE SWAP UTILITIES BE DISTRIBUTED WITHOUT ALL
ACCOMPANYING DOCUMENTATION FILES (INCLUDING THIS COMPLETE FILE), ALL 
PROGRAMS, AND OTHER MATERIALS PROVIDED WITH THE OFFICIAL COPIES FROM 
INNOVATIVE DATA CONCEPTS.  ANY SUCH DISTRIBUTION OF THE SWAP UTILITIES 
OR ITS RELATED FILES, EXCEPT AS PROVIDED FOR IN THIS LICENSE, SHALL
BE DETERMINED TO BE IN VIOLATION OF FEDERAL COPYRIGHT LAWS AND WILL BE
PROSECUTED.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2245

     Volume in drive A has no label
     Directory of A:\

    !                  396   2-01-90
    IDCBRAND COM      2744   2-01-90
    ORDER    DOC      8046   2-01-90
    READ     ME       1910   2-01-90
    SWAPDOS  COM     10768   2-01-90
    SWAPDOS  DOC     66685   2-01-90
    VENDOR   DOC      2427   2-01-90
    GO       BAT        37   6-21-90  10:39a
    GO       TXT      1079   6-22-90  11:32a
            9 file(s)      94092 bytes
                           63488 bytes free
