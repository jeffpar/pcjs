---
layout: page
title: "PC-SIG Diskette Library (Disk #3043)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3043/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3043"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library. It has over 3000 different, and complete applications
for your every need.  Every shareware program we have is on one disc;
over 700 megabytes (unzipped) of software you can have immediate access
to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

#             #             #
PC-SIG UPDATES PC-SIG LIBRARY ON CD-ROM

For Immediate Release


PC-SIG LIBRARY ON CD-ROM UPDATED TO INCLUDE A NEW USER INTERFACE AND MORE
THAN 800 MB OF PROGRAMS June 21, 1992, SUNNYVALE, CALIF. - PC-SIG, Inc.
today announced availability of The Eleventh Edition of the PC-SIG Library
on CD-ROM.  The PC-SIG Library on CD-ROM contains over 800 megabytes of
shareware and includes more than 300 new programs, 550 updated programs,
and the addition of 75 megabytes of Windows 3.x shareware.  The
user-interface has been completely re-engineered to take advantage of the
HyperWriter! hypermedia and multimedia authoring system from NTERGAID, Inc.

The implementation of HyperWriter! provides significant performance and
ease of use enhancements.  Programs can access and download much faster
than with previous editions.  Programs have been reorganized and indexed
for better referencing.  Users just c lick with a mouse, or point with the
cursor, on a program name to see a complete description of the program.
Downloading or copying a program is handled automatically by HyperWriter!
Addition of a preview option is especially important for anyone who uses
images, icons, or fonts.  "You can preview the whole library of images to
find the right one," according to Bruce Kent, product development manager.
"This CD finally makes it possi ble to conserve your disk space and paper,
yet still have all the information you need to make an informed decision,"
said Kent.

All new and updated programs have been reviewed and tested by PC-SIG. Every
program goes through extensive virus checking using the most recent version
of VIRUSCAN from McAfee Associates, and other anti-virus software.
According to Kent, "In the ten ye ars we've distributed shareware, we have
never had a confirmed report of a virus on any of our distributed programs
or CD-ROMs."

The PC-SIG Library on CD-ROM, Eleventh Edition has a list price of $179.

Upgrades from previous editions are available for $99.

Users of PC-SIG's Essential Home & Business Collection CD-ROM can upgrade
for $120.

PC-SIG CD-ROMs are distributed worldwide through a network of distributors
and resellers. Based in Sunnyvale, Calif., PC-SIG, Inc. markets and
supports one of the world's largest collections of shareware for IBM PCs
and compatible systems.  PC-SIG also publishes Shareware Magazine, which is
devoted solely to shareware.  The magazine is availa ble by subscription
and on newsstands nationwide.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 640K memory, DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions, and a hard drive. Microsoft compatible
mouse supported and VGA highly recommended.

To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## CREM.DOC

{% raw %}
```







                       CREM: Config.Sys REMarker Program v1.0


                             A Companion Program to LACE







                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER



                             Written by Keith Ledbetter
                                 4240 Ketcham Drive
                               Chesterfield, VA  23832
                                   (804) 674-0780
                           (6:00pm - 10:00pm Eastern Time)



                         Tech Support BBS:   Blue Ridge Express
                                             804-790-1675
                                             30 Phone Lines (2400 bd)
                                             Sub-board KEITHL
                                             ("J KEITHL")


                      Electronic mail on  GEnie: ORION.MICRO
                                     Compuserve: 72240,1221
                                            AOL: KLedbetter


                            Program and Documentation are
          Copyright (c) 1992 by Keith Ledbetter.  All rights reserved.


                     Portions Copyright Borland, International.
                           Written with Borland C/C++ 3.0.



                                    Introduction
                                    ------------


               CREM (Config REMarker) is designed  to help out those  users
          who use LACE in conjunction  with QEMM-386, 386^MAX, or  BlueMAX.
          Because of the  way these programs  perform their  "optimization"
          procedures, the  LACE method  of "selection  blocks" won't  work.
          All of these products  get very confused when  you try to run  an
          unmodified, LACE'd CONFIG.SYS through them.


               Before  CREM,  the  only  way  to  optimize  your   multiple
          configurations was to manually  "comment out" or delete  unwanted
          lines in  your CONFIG.SYS,  run the  optimization procedure,  and
          then  place  the  newly-optimized  lines  back  into  your   LACE
          selection blocks.   CREM helps  speed up this process by  quickly
          and easily  commenting  out all  "LACE  specific" lines  in  your
          CONFIG.SYS file,  leaving only  one  selection block  (from  your
          specification) visible to the optimization program.




                                    How it Works
                                    ------------


               CREM has two possible command line syntaxes, as follows:

                                  CREM block_number

                                         or

                                    CREM "remove"


          "CREM block_number" tells the program to process your  CONFIG.SYS
          file, commenting out  all LACE-specific lines  and all  selection
          blocks EXCEPT the "block_number" that you specify.


          "CREM remove" tells the program to remove all comments from  your
          CONFIG.SYS file  that were  previously  placed there  by  earlier
          invocations of CREM (your own comments will remain untouched).



                                     An Example
                                     ----------

               Let's assume that you have a CONFIG.SYS file that looks like
          this one:



          DOS     = High
          device  = c:\qemm\qemm386.sys ram
          shell   = c:\4dos\4dos.com /p @c:\4dos\4dos.ini

          device  = c:\utils\lace.sys Center NumOff
          device  = LACE SelectionBarBackground=RED

          device  = LACE "C\onfiguration with cache"
            device = d:\ms_mouse\mouse.sys /y /s30
            device = c:\caches\mycache.sys 4096
            device = c:\dos50\ansi.sys
            device = c:\dos50\setver.exe

          device  = LACE "C\onfiguration with RAMdisk"
            device = d:\ms_mouse\mouse.sys /y /s30
            device = c:\dos50\ramdrive.sys 4096
            device = c:\dos50\ansi.sys
            device = c:\dos50\setver.exe

          device = LACE "B\are-bones configuration"
            device = c:\dos50\ansi.sys
            device = c:\dos50\setver.exe

          device = LACE End

          buffers   = 5
          files     = 60
          break     = on
          STACKS    = 0,0
          lastdrive = E




               If you invoked  CREM with the  command line  "CREM 2",  your
          CONFIG.SYS file would be modified to look like this:



          DOS     = High
          device  = c:\qemm\qemm386.sys ram
          shell   = c:\4dos\4dos.com /p @c:\4dos\4dos.ini

          REM {!!}device  = c:\utils\lace.sys Center NumOff
          REM {!!}device  = LACE SelectionBarBackground=RED

          REM {!!}device  = LACE "C\onfiguration with cache"
          REM {!!}  device = d:\ms_mouse\mouse.sys /y /s30
          REM {!!}  device = c:\caches\mycache.sys 4096
          REM {!!}  device = c:\dos50\ansi.sys
          REM {!!}  device = c:\dos50\setver.exe
          REM {!!}
          REM {!!}device  = LACE "C\onfiguration with RAMdisk"
            device = d:\ms_mouse\mouse.sys /y /s30
            device = c:\dos50\ramdrive.sys 4096
            device = c:\dos50\ansi.sys
            device = c:\dos50\setver.exe

          REM {!!}device = LACE "B\are-bones configuration"
          REM {!!}  device = c:\dos50\ansi.sys
          REM {!!}  device = c:\dos50\setver.exe
          REM {!!}
          REM {!!}device = LACE End

          buffers   = 5
          files     = 60
          break     = on
          STACKS    = 0,0
          lastdrive = E


               As you can see, only the second selection block will now  be
          seen by  the  operating system  (and,  most importantly,  by  the
          optimization program).  You would then run either QEMM's OPTIMIZE
          program or 386^MAX's MAXIMIZE program.  After you have  completed
          the optimization step, you would execute the following command:

                                     CREM remove

          which would remove the comments placed in your CONFIG.SYS by  the
          earlier run of CREM,  leaving you once again  with your old  LACE
          menu selections (but with  a properly optimized second  selection
          block).



                           OK..So What about AUTOEXEC.BAT?
                           -------------------------------


               You had to  ask that question,  didn't you!   Unfortunately,
          since there are  so many ways  that you can  set up for  multiple
          AUTOEXEC.BAT processing under LACE,  there's really no clean  way
          to implement  an  automatic  approach to  remarking  or  deleting
          unwanted pieces.   Because of this, you will still have to handle
          the   AUTOEXEC.BAT   file(s)   yourself   before   running   your
          optimization program.

               If you  are  using  only one  AUTOEXEC.BAT  file,  then  the
          process will be much  easier.  Let's  say that your  AUTOEXEC.BAT
          file looks like this:

          -----------------------------------------------------------------
          c:\lace\lace_set
          goto config_%lace%
          :config_1
             ... configuration one lines ...
          :config_2
             ... configuration two lines ...
          :config_3
             ... configuration three lines ...
          -----------------------------------------------------------------

          Continuing the above  example of  optimizing configuration  block
          number two, you could run "CREM 2" to modify the CONFIG.SYS  file
          (as we did above), and then  edit your AUTOEXEC.BAT file to  look
          like this:

          -----------------------------------------------------------------
          c:\lace\lace_set
          set LACE=2                        <---  ADD THIS LINE
          goto config_%lace%
          :config_1
             ... configuration one lines ...
          :config_2
             ... configuration two lines ...
          :config_3
             ... configuration three lines ...
          -----------------------------------------------------------------

               Then, after running the  optimize program, merely edit  your
          AUTOEXEC.BAT file again  and remove the  "set LACE=2"  statement.
          You have now fully optimized selection block two.




                                    In Conclusion
                                    -------------

               CREM will -ALWAYS- operate on C:\CONFIG.SYS; there's no  way
          to tell the program to  read and write to  a file on a  different
          drive (but, there should never be a need to).


               To wrap  up, here  are the  steps you  would take  to  fully
          optimize a hypothetical LACE  configuration with three  different
          selection blocks (we'll use QEMM's OPTIMIZE in this example):


                 1.   run "CREM 1"
                 2.   Change AUTOEXEC.BAT for first configuration
                 3.   run "OPTIMIZE"

                 4.   run "CREM 2"
                 5.   Change AUTOEXEC.BAT for second configuration
                 6.   run "OPTIMIZE"

                 7.   run "CREM 3"
                 8.   Change AUTOEXEC.BAT for third configuration
                 9.   run "OPTIMIZE"
                 10.  run "CREM remove"



               I hope that  CREM will  help make  the job  of managing  and
          optimizing your LACE configurations much  more painless.  If  you
          have  any  suggestions  for  future  enhancements,  please  don't
          hesitate to contact me about them.



                                                       Enjoy!

                                                            Keith
```
{% endraw %}

## HISTORY.DOC

{% raw %}
```

                  L.A.C.E: Led's Autoexec and Configuration Editor
                                History of Changes
                  ------------------------------------------------


  v1.4    9-Jun-92   o  The CREM.EXE file included in v1.3's ZIP
                        file was inadvertantly corrupted.

                     o  Fixed a few "bugs" in the documentation
                        files.

                     o  Fixed a bug where under very rare
                        circumstances the TIMEOUT=nn value would
                        be interpreted incorrectly.

  v1.3   29-May-92   o  Fixed a bug in the ASK device driver that
                        would cause the program to always default
                        to a "YES" answer.

                     o  Added the ENVIRON.SYS and SET.SYS drivers
                        to the LACE package.  These drivers allow
                        you to set environment variables from
                        inside your CONFIG.SYS file.  See the
                        SET.DOC file, which you can print with
                        "COPY SET.DOC PRN".

  v1.2    8-May-92   o  You can now press the '1' thru '9' keys to
                        select any one of the first 9 menu items.

                     o  Added the CREM program to the LACE package.
                        This program makes it much easier to optimize
                        your system with QEMM's OPTIMIZE or 386^MAX's
                        MAXIMIZE program.  See the CREM.DOC file,
                        which you can print with "COPY CREM.DOC PRN".

  v1.1   25-Apr-92   o  Fixed a bug where the high-intensity bit would
                        sometimes be left on.  This would later mess up
                        some screen displays that expected the "blinking
                        text" bit to be set.

                     o  When LACE detects a MONOCHROME screen display, it
                        now sets the default colors to more readable colors.

                     o  Added the "PASSIVE" keyword as a parameter on the
                        LACE.SYS command line.  This option causes LACE to
                        pop-up its menu ONLY if you hold down the Left Shift
                        key at bootup time; otherwise it executes menu
                        option number 1.  See the documentation section
                        entitled "Using the Passive Option".

  v1.0   23-Apr-92   o  Initial release.

```
{% endraw %}

## LACE.DOC

{% raw %}
```




                 LACE: Led's Autoexec and Configuration Editor v1.4

                                Released June 9, 1992

                  A PC-DOS / MS-DOS Multiple Configuration Utility


                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER



                             Written by Keith Ledbetter
                                 4240 Ketcham Drive
                               Chesterfield, VA  23832
                                   (804) 674-0780
                           (6:00pm - 10:00pm Eastern Time)


                         Tech Support BBS:   Blue Ridge Express
                                             804-790-1675
                                             30 Phone Lines (2400 bd)
                                             Sub-board KEITHL
                                             ("J KEITHL")

                      Electronic mail on  GEnie: ORION.MICRO
                                     Compuserve: 72240,1221
                                            AOL: KLedbetter

                            Program and Documentation are
          Copyright (c) 1992 by Keith Ledbetter.  All rights reserved.


                     Portions Copyright Borland, International.
             Written with Borland C/C++ 3.0 and Borland Turbo Assembler.

               This program is produced by a  member of the Association  of
          Shareware Professionals (ASP).  ASP wants  to make sure that  the
          shareware principle works for you. If you are unable to resolve a
          shareware-related problem with  an ASP member  by contacting  the
          member directly, ASP may be able  to help. The ASP Ombudsman  can
          help you resolve  a dispute or  problem with an  ASP member,  but
          does not provide technical support for members' products.  Please
          write to the ASP Ombudsman at 545 Grover Road, Muskegon, MI 49442
          or send  a  Compuserve  message via  easyplex  to  ASP  Ombudsman
          70007,3536.



          LACE Registration Form             Keith Ledbetter
                                             4240 Ketcham Drive
                                             Chesterfield, VA  23832


          LACE Version 1.x                           Quantity    Price

          Disk with branding utility ($15/copy):     _______   _________

                                 Total enclosed:               _________

          Please make payment by check or money order (in US funds) payable
          to "Keith Ledbetter".

          Please specify the diskette size(s) that are acceptable for you:

                          ___ 5.25" 360KB   ___ 3.50" 720KB


             Name    _____________________________________________________

             Company _____________________________________________________

             Address _____________________________________________________

                     _____________________________________________________

             Phone   _____________________________________________________


             Where did you get LACE? _____________________________________

                         Multi-System and Reseller Licenses:

          Site, corporate, network, and reseller licenses are available for
          LACE.  Check the line  on the order form  or contact me for  more
          information.    The following schedule provides some examples  of
          multi-system license fees.  The fee includes one master  diskette
          which you may then copy and use on the number of machines  listed
          below:

                              # Users        Price
                              -------       -------
                                  5       $     70.00  ($14 / copy)
                                 10            130.00  ($13 / copy)
                                 25            300.00  ($12 / copy)
                                 50            550.00  ($11 / copy)
                                100          1,000.00  ($10 / copy)
                              Unlimited      1,500.00


                               Table of Contents



          Definition of Shareware..................................1

          Disclaimer - Agreement...................................2

          An Introduction to LACE..................................3

          How LACE works...........................................5

          The Command Syntax.......................................6

          Getting started with LACE................................13

          Using the Passive Option.................................14

          Using LACE with DOS 3.3..................................15

          Using LACE with DOS 5.0..................................16

          The ASK.SYS Device Driver................................17

          The PAUSE.SYS Device Driver..............................17

          The ECHO.SYS Device Driver...............................18

          Conclusion...............................................19

          Shareware Catalog........................................20

          Shareware Distributors...................................23

                            Definition of Shareware


          Shareware distribution  gives  users  a chance  to  try  software
          before buying it.   If you try a  Shareware program and  continue
          using it,  you  are  expected to  register.  Individual  programs
          differ on  details  --  some request  registration  while  others
          require  it,   some  specify   a  maximum   trial  period.   With
          registration, you get anything from the simple right to  continue
          using the software to an updated program with printed manual.


          Copyright laws apply to  both Shareware and commercial  software,
          and the copyright holder retains all rights, with a few  specific
          exceptions as stated  below. Shareware  authors are  accomplished
          programmers, just like commercial  authors, and the programs  are
          of comparable quality.  (In both cases,  there are good  programs
          and  bad  ones!)  The  main  difference  is  in  the  method   of
          distribution. The author  specifically grants the  right to  copy
          and distribute the  software, either to  all and sundry  or to  a
          specific  group.  For  example,  some  authors  require   written
          permission  before  a  commercial  disk  vendor  may  copy  their
          Shareware.


          Shareware is a distribution method, not a type of software.   You
          should find  software  that  suits  your  needs  and  pocketbook,
          whether it's commercial or Shareware. The Shareware system  makes
          fitting your needs easier,  because you can  try before you  buy.
          And because the overhead is low,  prices are low also.  Shareware
          has the ultimate  money-back guarantee --  if you  don't use  the
          product, you don't pay for it.























          LACE: the Multi-Configuration Utility                 Page 1

                               Disclaimer - Agreement


          Users of LACE must accept this disclaimer of warranty:  "LACE  is
          supplied as is.  The  author disclaims all warranties,  expressed
          or implied,  including,  without limitation,  the  warranties  of
          merchantability and  of  fitness for  any  purpose.   The  author
          assumes no liability for damages, direct or consequential,  which
          may result from the use of LACE."


          LACE is a "shareware program" and is provided at no charge to the
          user for evaluation.   Feel free to share  it with your  friends,
          but please do  not give  it away altered  or as  part of  another
          system.  The essence of  "user-supported" software is to  provide
          personal  computer  users  with  quality  software  without  high
          prices, and yet to provide incentive for programmers to  continue
          to develop new  products.  If  you find this  program useful  and
          find that you  are using LACE  and continue to  use LACE after  a
          reasonable trial period, you must make a registration payment  of
          $15 to Keith Ledbetter.   The $15  registration fee will  license
          one copy for use on any one computer  at any one time.  You  must
          treat this software just  like a book.   An example is that  this
          software may be used  by any number of  people and may be  freely
          moved from one computer location to another, so long as there  is
          no possibility of it being used at one location while it's  being
          used at another.  Just as a book cannot be read by two  different
          persons at the same time.


          Commercial users of LACE must register  and pay for their  copies
          of LACE  within  30  days  of  first  use  or  their  license  is
          withdrawn.  Site-License arrangements  may be made by  contacting
          the author.


          You are encouraged to pass a  copy of LACE along to your  friends
          for evaluation.  One easy  way to do this  is by placing LACE  on
          your favorite Bulletin Board System.   Please encourage users  to
          register their  copy if  they  find that  they  can use  it.  All
          registered users will receive a copy of the latest version of the
          LACE program.













          LACE: the Multi-Configuration Utility                 Page 2

                                    Introduction


               Welcome to LACE, the multi-configuration utility for  MS-DOS
          and PC-DOS versions 3.3 through 5.0.   Do you ever have the  need
          to boot your machine with multiple configurations?  For  example,
          sometimes with a disk cache and another time with a RAM disk?  Do
          you find yourself  keeping multiple  CONFIG.SYS and  AUTOEXEC.BAT
          files on your hard  drive, and then copying  the one you need  to
          C:\ and then re-booting?   Or, even worse, making special  floppy
          boot disks so that your system boots in a "minimum configuration"
          state?  If the answer to any of these is yes, then LACE.SYS  will
          help make your life easier.

               LACE allows you  to keep  up to  14 different  configuration
          setups inside of your single CONFIG.SYS file.  At machine boot-up
          time, LACE  will  present  you with  a  menu  comprised  of  each
          configuration  that  you  have  specified.    After  selecting  a
          configuration, LACE modifies the in-memory copy of CONFIG.SYS  so
          that only  the  commands  for  that  specific  configuration  are
          executed during the CONFIG.SYS processing.  You can use either  a
          single AUTOEXEC file or  multiple AUTOEXEC files, depending  upon
          your personal preference.  LACE does not remain  memory-resident,
          so it doesn't take up any of your precious low memory.

               The LACE  package  also  includes  three  additional  device
          drivers.   The ASK device driver allows you to ask simple  YES/NO
          questions from within your CONFIG.SYS file, and then load (or not
          load) device drivers  depending upon  the answer  from the  user.
          The ECHO device  driver allows you  to display a  comment on  the
          screen (just like the  ECHO command in batch  files).  The  PAUSE
          driver allows  you to  pause  the CONFIG.SYS  processing  (again,
          identical to the PAUSE statement within batch files).



             The LACE package is made up of the following program files:

          LACE.SYS:      this is the main device driver that you invoke  at
                         boot-up time in your CONFIG.SYS file.

          LACE_ERR.COM:  this program can be called from your  AUTOEXEC.BAT
                         file  to  set  the   ERRORLEVEL  to  the  boot-up
                         selection that you made.   In other words, if  you
                         selected menu  entry one  from the  boot-up  menu,
                         then ERRORLEVEL would equal 1.

          LACE_SET.EXE:  this program is much like LACE_ERR except that  it
                         sets the ERRORLEVEL condition and also creates  an
                         environment variable named LACE.   Again,  if you
                         chose  option  one,  then  in  your   AUTOEXEC.BAT
                         "%lace%" would return a 1.



          LACE: the Multi-Configuration Utility                 Page 3

                                    Introduction

          ASK.SYS:       a device  driver that  allows  you to  ask  simple
                         YES/NO questions, and  act  accordingly upon  the
                         answer.

          ECHO.SYS:      a  device  driver  that  allows  you  to   display
                         comments   to   the   screen   during   CONFIG.SYS
                         processing.

          PAUSE.SYS:     a device  driver  that  allows you  to  pause  the
                         CONFIG.SYS processing and wait for a keypress from
                         the user.










































          LACE: the Multi-Configuration Utility                 Page 4

                                   How LACE Works


               The idea  behind LACE  is that  you  place what  are  called
          "selection blocks" within  your CONFIG.SYS  file (following  the
          LACE.SYS invocation line).   These  blocks specify  (a) the  text
          entry that you want displayed on  LACE's menu and (b) the  CONFIG
          lines to  execute if  that option  is selected  by the  user.   A
          simple, two selection CONFIG.SYS might look something like this:

          ---------------------+------------------------------------------
              COMMENTS         |             CONFIG.SYS Contents
          ---------------------+------------------------------------------
          invoke LACE program  |  device = c:\lace\lace.sys
                               |
          option 1 on the menu |  device = LACE "M\enu entry number one"
                               |       ........
                               |       ........
                               |       statements to execute if selected
                               |       ........
                               |       ........
                               |
          option 2 on the menu |  device = LACE "M\enu entry number two"
                               |       ........
                               |       ........
                               |       statements to execute if selected
                               |       ........
                               |       ........
                               |
          mark the end of LACE |  device = LACE End
                               |
          these lines, since   |  DOS     = High, UMB
          they are outside of  |  Files   = 30
          the selection blocks,|  Stacks  = 0,0
          are COMMON across    |  Buffers = 10
          all selections.      |  Break   = OFF
          ---------------------+-------------------------------------------

               Using the above  CONFIG.SYS file, you  will be presented  at
          boot-up time with a menu that will look something like this:


                 +------------------------------------------------+
                 |                                                |
                 |  Menu entry number one                         |
                 |  Menu entry number two                         |
                 |                                                |
                 +------------------------------------------------+

          with the first entry highlighted by the "selection bar".  If  you
          choose option  one,  the statements  immediately  following  that
          selection block will be executed, and statements within the other
          selection blocks will be ignored by the system.


          LACE: the Multi-Configuration Utility                 Page 5

                                 The Command Syntax


               LACE will normally,  but not always,  be the  first line  in
          your CONFIG.SYS file.  It reads the remainder of your  CONFIG.SYS
          file and presents a menu of the entries that you have  specified.
          After  you  choose  a  boot-up  option,  it  removes  the   other
          CONFIG.SYS lines from the  copy of CONFIG.SYS  that is in  memory
          (DOS only loads the CONFIG.SYS file  once, so these changes  will
          not actually modify the copy of CONFIG.SYS on your disk).

          The actual LACE invocation line has the following syntax:


                   device = c:\path\lace.sys [optional parameters]


          The optional parameters are as follows:


          Center         tells LACE to  center the selection  lines in  the
                         dialog window.  By default, all of the menu  lines
                         will be left justified.

          NoHighVideo    by default, LACE uses the "high video"  attributes
                         allowable on EGA and VGA  monitors.  If you  don't
                         have an EGA or VGA monitor, you should specify the
                         NoHighVideo parameter.  If you're not sure if your
                         monitor can support this option, it probably won't
                         take long for you  to find out.   If text on  your
                         screen is blinking, then you need the  NoHighVideo
                         option.

          NumOff         tells LACE  to turn  off  the NUMLOCK  setting  at
                         invocation time.

          Default=n      tells LACE  to  use  menu  selection  "n"  as  the
                         default menu selection.

          Timeout=s      used in conjunction with the "Default="  parameter
                         above, this keyword sets the timeout period to "s"
                         seconds, after which  time LACE  will assume  that
                         you chose the default option specified.

          Passive        this option puts LACE into a "passive" mode, which
                         means that it will  always execute the first  menu
                         selection unless you force it to pop up its  menu.
                         See the section "Using the Passive Option" below.







          LACE: the Multi-Configuration Utility                 Page 6

                                 The Command Syntax


               After LACE has been invoked,  it starts looking through  the
          CONFIG.SYS file for two specific types of lines.  These are "menu
          selection" lines and "option modification" lines.


                                Menu Selection Lines
                                --------------------

             Menu selection lines tell LACE to insert the specified text as
          a selection on your  boot-up menu.    The syntax for a  selection
          line is as follows:


           device = LACE "A \double quoted \S\tring" [optional parameters]


               As soon as LACE sees the double quote immediately  following
          the word LACE, it adds the entry  to the pop-up menu.  Note  that
          you DO  NOT specify  a path  on the  subsequent LACE  lines;  you
          simply use the word "LACE".   Since everything in the  CONFIG.SYS
          file is folded  to UPPER CASE  by the operating  system, the  "\"
          character allows you to toggle lower case on and off.  The  above
          example would show on the screen as:

                              "A double quoted String".

          There are only two optional parameters, which are:


          Default        tells LACE to use this  menu entry as the  default
                         menu selection.  The selection bar will  initially
                         be placed on  this entry,  and it  will be  chosen
                         automatically if  no  key is  pressed  within  the
                         specified timeout period.  It only makes sense  to
                         place this keyword on one menu selection line.  If
                         you do specify it on multiple menu lines, the last
                         one will become the default.

          Timeout=s      used in conjunction  with the "Default"  parameter
                         above, this keyword sets the timeout period to "s"
                         seconds, after which  time LACE  will assume  that
                         you chose this selection.










          LACE: the Multi-Configuration Utility                 Page 7

                                 The Command Syntax


                              Option Modification Lines
                              -------------------------

               An "option modification"  line allows you  to change or  set
          options for  LACE (this  would be  analogous to  "switches" on  a
          command line  program).    You  can  have  none  or  many  option
          modification lines in your  CONFIG.SYS file.    These lines  have
          the following syntax:


                  device = LACE KeyWord[=Value] KeyWord[=Value]...


          The valid keywords are as follows:


          End            this keyword marks  the end of  where LACE  should
                         stop processing.   You must have  one of these  in
                         your CONFIG.SYS!

          ColorType=     this keyword allows you  to modify LACE's  default
                         color set.

               where "ColorType" keywords are:

                    BannerBorder        the top  and  bottom lines  of  the
                                        screen.

                    BannerBackground    the   background   color   of   the
                                        copyright messages.

                    BannerForeground    the   foreground   color   of   the
                                        copyright messages.

                    BackgroundFill      the  color   used   to   fill   the
                                        background of the screen.

                    DialogBorder        the border  color around  the  menu
                                        selection dialog box.

                    DialogBackground    the background  color of  the  menu
                                        selection dialog box.

                    DialogForeground    the foreground  color of  the  menu
                                        selection dialog box.

                    OwnerBackground     the   background   color   of   the
                                        "registered owner" area.

                    OwnerForeground     the   foreground   color   of   the
                                        "registered owner" area.

          LACE: the Multi-Configuration Utility                 Page 8

                                 The Command Syntax


                    SelectionBarBackground   the background color used when
                                             displaying    the     moveable
                                             selection bar.




                    SelectionBarForeground   the background color used when
                                             displaying    the     moveable
                                             selection bar.

               and where the possible "color" values are:

                         Blue
                         Green
                         Cyan
                         Red
                         Magenta
                         Brown
                         LightGray     (BrightGray)
                         DarkGray
                         LightBlue     (BrightBlue)
                         LightGreen    (BrightGreen)
                         LightCyan     (BrightCyan)
                         LightRed      (BrightRed)
                         LightMagenta  (BrightMagenta)
                         Yellow
                         White


          NOTE:    If  you  are  using  a  monochrome  monitor,  LACE  will
          automatically detect this and set all of the colors accordingly.


               If all of  these options at  first overwhelm  you, don't  be
          concerned.  LACE is extremely  easy to set up  and use.  At  this
          point, we will look at an  actual CONFIG.SYS file that uses  LACE
          to allow three different configuration setups.  These three boot-
          up options are:


                            1.     No network drivers loaded
                            2.     LAN Manager network
                            3.     Novell network



          The CONFIG.SYS file and two AUTOEXEC.BAT examples follow.




          LACE: the Multi-Configuration Utility                 Page 9

                                     CONFIG.SYS

          REM       Since these first four lines are outside of the
          REM       "device=c:\utils\lace.sys" and "LACE End" lines,
          REM       they are COMMON across all selections.  In other
          REM       words, they will ALWAYS be executed.

          DOS     = High,UMB
          device  = e:\windows\himem.sys
          device  = e:\windows\emm386.exe ram noems i=b000-b7ff
          shell   = c:\4dos\4dos.com /p @c:\4dos\4dos.ini

          device  = c:\utils\lace.sys Center NumOff
          device  = LACE SelectionBarBackground=RED

          device = LACE "N\o network" Default Timeout=30
            devicehigh = d:\ms_mouse\mouse.sys /y /s30
            device     = d:\hyper\hyperdkx.exe c:4096:4096 xs xt:- s t:2
            devicehigh = c:\dos50\ansi.sys
            devicehigh = c:\dos50\setver.exe
            devicehigh = d:\hyper\hyperscr.exe k:p
            device = c:\lace\Ask.Sys "L\oad the \MOUSE\ driver?"
            device = YES
              devicehigh = d:\ms_mouse\mouse.sys /y /s30
            device = END

          device = LACE "LAN M\anager \N\etwork"
            devicehigh = d:\netlib\dxma0mod.sys 001
            devicehigh = d:\netlib\dxmc0mod.sys
            devicehigh = d:\netlib\dxmt0mod.sys s=32 c=32
            device     = d:\hyper\hyperdkx.exe c:4096:4096 xs xt:- s t:2
            devicehigh = c:\dos50\ansi.sys
            devicehigh = c:\dos50\setver.exe

          device = LACE "N\ovell \N\etwork"
            devicehigh = d:\ms_mouse\mouse.sys /y /s30
            devicehigh = d:\netlib\dxma0mod.sys 001
            devicehigh = d:\netlib\dxmc0mod.sys
            devicehigh = d:\netlib\dxmt0mod.sys s=32 c=32
            devicehigh = c:\dos50\ansi.sys
            devicehigh = c:\dos50\setver.exe

          device = LACE End

          REM       Since these last five lines are also outside of the
          REM       "device=c:\utils\lace.sys" and "LACE End" lines,
          REM       they are also COMMON across all selections.

          buffers   = 5
          files     = 60
          break     = on
          STACKS    = 0,0
          lastdrive = E


          LACE: the Multi-Configuration Utility                Page 10

                               AUTOEXEC.BAT Example 1

          REM       ----------------------------------------------------
          REM       This example shows how to use the LACE environment
          REM       variable to do everything in a single AUTOEXEC file.
          REM       ----------------------------------------------------

          REM       First, we call the LACE_SET program to set the
          REM       environment variable "LACE" to the selection that
          REM       we made from the menu.

          C:\Lace\Lace_Set

          verify off
          set comspec=c:\4dos\4dos.com
          path d:\batch;c:\utils;c:\dos50;c:\4dos
          set prompt=$e[1;37;44m[$p]-[$g  $h
          mode con rate=30 delay=1

          if NOT "%lace%" == "3" goto no_novell
            c:\netware\wsgen\ipx
            c:\netware\wsgen\route
            c:\netware\wsgen\netx
            f:
            login novell_server/kledbetter
            path %path;c:\netware
          :no_novell




























          LACE: the Multi-Configuration Utility                Page 11

                               AUTOEXEC.BAT Example 2


          REM       ------------------------------------------------------
          REM       This example shows how to use the LACE environment
          REM       variable to have 3 seperate AUTOEXEC files.  Depending
          REM       upon the selection made from the LACE menu, we will
          REM       either execute AUTO-1.BAT, AUTO-2.BAT, or AUTO-3.BAT.
          REM       ------------------------------------------------------

          REM       First, we call the LACE_SET program to set the
          REM       environment variable "LACE" to the selection that
          REM       we made from the menu.  We then call the matching
          REM       AUTO-n.BAT file.


          C:\Lace\Lace_Set
          C:\Auto-%Lace%.Bat




          File AUTO-1.BAT:
          ----------------------------------------------------------------
          verify off
          set comspec=c:\4dos\4dos.com
          path d:\batch;c:\utils;c:\dos50;c:\4dos
          set prompt=$e[1;37;44m[$p]-[$g  $h
          mode con rate=30 delay=1


          File AUTO-2.BAT:
          ----------------------------------------------------------------
          verify off
          set comspec=c:\4dos\4dos.com
          path d:\batch;c:\utils;c:\dos50;c:\4dos
          set prompt=$e[1;37;44m[$p]-[$g  $h
          mode con rate=30 delay=1


          File AUTO-3.BAT:
          ----------------------------------------------------------------
          verify off
          set comspec=c:\4dos\4dos.com
          path d:\batch;c:\utils;c:\dos50;c:\4dos;c:\netware
          set prompt=$e[1;37;44m[$p]-[$g  $h
          mode con rate=30 delay=1
          c:\netware\wsgen\ipx
          c:\netware\wsgen\route
          c:\netware\wsgen\netx
          f:
          login novell_server/kledbetter



          LACE: the Multi-Configuration Utility                Page 12

                                   Getting Started


               At this point, probably the easiest way to get started  with
          LACE is to create a two-selection CONFIG.SYS file.  Option one in
          our example will be your existing CONFIG.SYS file and option  two
          will be a "bare-bones" configuration.

               Load up  your  favorite  text editor  and  let's  edit  your
          current CONFIG.SYS file.  Make the following changes:

          Add the following two lines at the TOP of your current CONFIG.SYS
          file (change  the  path name  if  you  put LACE  in  a  different
          directory name):

               device=c:\lace\lace.sys Center
               device=LACE "S\tandard configuration" Default Timeout=30

          Next, go to the very bottom of your CONFIG.SYS file and add these
          lines:

               device=LACE "B\are-bones configuration"
                 files   = 20
                 buffers = 30
               device=LACE End


               Now, save  your CONFIG.SYS  file  and re-boot  your  system.
          Unless you made a  typing  error, you should now see LACE's  menu
          screen with  your two  configuration options  on it.    Selecting
          option one will boot your machine  in the exact configuration  as
          before you installed LACE.   Selecting option two will boot  your
          machine with no drivers at all loaded.

               Congratulations!   You have  just  created your  first  LACE
          multiple configuration.   As  you can  see,  using LACE  is  very
          simple and intuitive.   It should  be easy for  you to now  build
          onto this CONFIG.SYS  file to  create as  many different  boot-up
          configurations as you need.


                                     A Shortcut
                                     ----------

               There is a shortcut built into  LACE that you might want  to
          try out now.  LACE assumes  that your first two menu entries  are
          going to be ones that  you will choose the  most.  LACE makes  it
          easy for you to do this.   Before LACE displays its menu  screen,
          it checks the  keyboard to  see if  you are  holding down  either
          shift key.   If you  are holding down  the left  shift key, LACE
          bypasses the  menu screen  and proceeds  as if  you had  selected
          option one from  the menu.   If you  are holding  down the  right
          shift key, LACE proceeds as if you  had selected option two from
          the menu.

          LACE: the Multi-Configuration Utility                Page 13

                              Using the Passive Option



               LACE has an optional mode known as "passive" operation (see
          "The Command Syntax" section).  Passive mode is most useful  when
          you execute your  first menu selection  block most  of the  time.
          When in  passive  mode,  LACE  always  executes  the  first  menu
          selection unless you specifically tell it  to pop up its menu  by
          holding down the  Left Shift key  at invocation  time (when  LACE
          loads from disk, not when you "boot" your machine).


               When you  are in  passive mode,  you can  still execute  the
          second menu item  automatically by holding  down the right  shift
          key.  The following chart shows what the various Shift Key states
          do depending on your current mode:




                         In "Active" mode              In "Passive" mode
                         ----------------              -----------------

          No Shift       LACE menu is always           Executes the first
           pressed       displayed to you.             config block without
                                                       displaying the menu.

          Left Shift     Executes the first            Forces the LACE
           pressed       config block without          menu to appear.
                         displaying the menu.

          Right Shift    Executes the second           Executes the second
           pressed       config block without          config block without
                         displaying the menu.          displaying the menu.




















          LACE: the Multi-Configuration Utility                Page 14

                               Using LACE with DOS 3.3


               LACE was created  to work seamlessly  with DOS versions  4.x
          and higher.  It will work with DOS 3.3 just fine except for a few
          differences that  are  caused  by DOS  3.3's  processing  of  the
          CONFIG.SYS file.


               First of all, there is no "REMark" statement allowed in  DOS
          3.3's CONFIG.SYS lines.    Since  the way  LACE removes  unwanted
          lines from your CONFIG.SYS file is  by changing them to  "remark"
          lines, this  causes a  big problem.     The only  way to  cleanly
          remove lines  in  a  DOS 3.3  config  file  (without  getting  an
          avalanche of "Invalid command" lines printed to the screen) is to
          change the unwanted  lines to  "BREAK=OFF" statements.   This  is
          what LACE does if it senses  that you are running  DOS 3.3.    Of
          course, this means that if you  want to set "BREAK=ON", you MUST
          do it AFTER the "device = LACE End" statement.


               Another problem comes  in to play  if you have  a line in  a
          selection block that has less than  3 characters to the right  of
          the "=" sign.  For example, a line  such as "buffers = 5" is  not
          long enough for LACE to change to a "BREAK=OFF" statement  should
          it need to remove  this line.   If this occurs,  you will get  an
          "invalid command"  error  message,  but  the  processing  of  the
          CONFIG.SYS file will have occurred just  as you wanted it to  (in
          other words, only the  lines in the  selected area of  CONFIG.SYS
          will have been executed).  One  way around this is to "pad"  with
          spaces to the right of any short lines.  Using the above example,
          changing "buffers = 5" to "buffers = 5    *" will now allow  LACE
          to change the line to a "BREAK=OFF" command, thereby  eliminating
          the bogus "invalid command" message at boot-up time.





















          LACE: the Multi-Configuration Utility                Page 15

                               Using LACE with DOS 5.0


               The only thing you  can't do under DOS  5.0 right now is  to
          have multiple settings for your "DOS=" entry.  This is caused  by
          the fact  that  DOS 5.0  pre-scans  the entire  CONFIG.SYS  file,
          before executing any device  drivers, to see if  it needs to  set
          itself up to load  high.  What  this means is  that you can't  do
          this:


                              LACE "S\election one"
                                   DOS=Low
                                   ...lines...

                              LACE "S\election two"
                                   DOS=High,UMB
                                   ...lines...

                              LACE End


               In this example,  "DOS=High,UMB" will always  be used  since
          DOS sees this as the last "DOS=" setting in the CONFIG.SYS  file.
          DOS will then  set itself up  to load high  before LACE.SYS  ever
          gets executed.    This problem  will  be addressed  in  a  future
          version of LACE.   I didn't  want to hold  up the  release of  an
          otherwise complete product until I could  find a way around  this
          problem.


























          LACE: the Multi-Configuration Utility                Page 16

                            The Additional Device Drivers


                              The ASK.SYS Device Driver
                              -------------------------

               The ASK.SYS device driver  is a totally  stand-alone device
          driver that can be used to ask simple, one-line Yes/No  questions
          at boot-up time, and then load  or not load any number of  device
          drivers depending upon the answer.  The questions can fall within
          a LACE "selection block".   The format for  the ASK driver is  as
          follows:


          Device=c:\Ask.Sys "The Y/N question" [default=Y|N] [Timeout=nn]
          Device=YES
               ... the lines you want executed if they answer YES ...
               ... the lines you want executed if they answer YES ...
          Device=NO
               ... optional lines you want executed if they answer NO ...
               ... optional lines you want executed if they answer NO ...
          Device=END


                                    For example:
                                    ------------

          device=c:\Ask.Sys "L\oad the mouse driver? " default=Y timeout=10
          device=YES
               device=c:\windows\mouse.sys
          device=END


          The same caveats exist for the  ASK driver under DOS 3.3 and DOS
          5.0 as for LACE  (see the "Using LACE  under DOS 3.3" and  "Using
          LACE under DOS 5.0" sections above).



                            The PAUSE.SYS Device Drivers
                            ----------------------------

               The PAUSE driver  does exactly  what the  DOS "Pause"  batch
          file command does -- it displays an optional message to the  user
          and waits for any key to be pressed.  The syntax is:

               device = c:\lace\Pause.Sys

          which would result in:

               Press any key when ready...




          LACE: the Multi-Configuration Utility                Page 17

                            The Additional Device Drivers



            device = c:\lace\Pause.Sys P\ress a key to continue \CONFIG.SYS

          would result in:

               Press a key to continue CONFIG.SYS





                             The ECHO.SYS Device Drivers
                             ---------------------------


               The ECHO driver simply echoes a message to the screen, which
          can be handy when debugging your CONFIG.SYS file.  An example:

               device = c:\Echo.Sys I'\m now loading the \MOUSE\ driver
               device = c:\mouse.sys
               device = c:\pause.sys

          would display  the message  "I'm now  loading the  MOUSE  driver"
          immediately before the mouse driver is loaded into memory.




























          LACE: the Multi-Configuration Utility                Page 18

                                    In Conclusion



               I hope that you will enjoy using LACE.  Please remember that
          this is a Shareware program; if  you continue to use the  program
          after  a  reasonable  amount  of  time,  show  your  support  for
          Shareware by registering your copy of the program.


               When you register LACE, you will receive a diskette with the
          latest version of LACE and a  "branding" utility that will  allow
          you to place your name and serial number into all future versions
          of LACE.  No future  upgrade costs; you pay  only one time!   The
          diskette you receive will also contain the Shareware versions  of
          all of the products listed in the "Product Catalog" found at  the
          end of this document.


               As with most products, there are those who donate their time
          to BETA  testing,  and  LACE  is  no  exception.    I'd  like  to
          personally thank the following BETA testers for giving freely  of
          their time to ensure a solid product:


               Hal Hudler, Linnie Martin, Larry Cary, Dick Dunn, Pat  Ford,
          Robert  Norman,  Roy  Tucker,  Mike  Phillips,  Bob  Arnson,  Ray
          Tackett, Peter  Schulz,  Joern  Wettern,  Edward  Phillips,  Jeff
          Garbers, Charles Wajciechowski, and Sharlyn  Williams.   Also,  a
          big thanks to Webb Blackman, Sysop of the Blue Ridge Express, for
          continuing to allow me to use  his BBS as a message center,  file
          distribution point, and over-all remote disk drive!


               Once again, enjoy the program and be sure to contact me with
          any ideas you may have for  future enhancements.   And, last  but
          surely not least, thanks to all of you who continue to support my
          Shareware products!



                                                  Keith Ledbetter













          LACE: the Multi-Configuration Utility                Page 19

                         Keith Ledbetter's Shareware Catalog


               Listed below is a chart of  my other shareware and  freeware
          utilities, along with the current version  number of each.   Also
          listed is  the filename  that you  will find  them under  on  BBS
          systems (please note that they may be different on your  favorite
          BBS's, but it  should help  you at  least get  close to  locating
          them).   When you register one of my Shareware programs, you will
          receive a disk with all of these utilities on it.

          Filename       Version            Description
          -----------    -------        ----------------------------------
          SST_53a.ZIP      5.3a         The ultimate  file-finder  program.
                                        PC/Computing  magazine  called  SST
                                        "the Concorde of all file finders".
                                        SST  can  search   inside  of   all
                                        popular archive  formats  and  also
                                        supports date searching, file  size
                                        searching, and command execution on
                                        found files.   Far  too many  other
                                        options to list here!
                                        Shareware: $15

          LCD_40b.ZIP      4.0b         "Led's  Change  Directory"  is   an
                                        intelligent   directory    changing
                                        program.   This program  was  voted
                                        one of  "the 10  best utilities  of
                                        1990"  by  the  "Public  (software)
                                        Library" magazine.
                                        Shareware: $15

          LACE_14.ZIP      1.1          LACE    ("Led's    Autoexec     and
                                        Configuration Editor") is a  device
                                        driver that allows you to  maintain
                                        up   to   14   different    boot-up
                                        configurations from within a single
                                        CONFIG.SYS file.  LACE is very easy
                                        to set up and  use - you no  longer
                                        have  to  be  a  "power  user"   to
                                        support multiple configurations!
                                        Shareware: $15

          AV_12.ZIP        1.2          "Archive Viewer" is used to display
                                        the names of members of all of  the
                                        popular  archiving  programs  (ZIP,
                                        ARC, LHARC, PKARC,  ZOO, PAK).   No
                                        longer  do  you  have  to  struggle
                                        remembering   the   syntax   to   6
                                        different archiving programs.
                                        Freeware: $0




          LACE: the Multi-Configuration Utility                Page 20

                         Keith Ledbetter's Shareware Catalog


          X_30.ZIP         3.0          "X: The Executioner" can save you a
                                        lot of disk space.  X allows you to
                                        ZIP  down   those   seldom-used-but
                                        hard-to-delete .COM, .EXE, and .BAT
                                        files  into  one  system   "Command
                                        Library".   You  can  then  execute
                                        them easily by simply typing an "x"
                                        in front of  the command line  (eg:
                                        "x chkdsk c:").
                                        Freeware: $0

          ADMENU30.ZIP     3.0          If you own an Adlib Music card, you
                                        need this program.   It allows  you
                                        to ZIP down all of those .ROL  song
                                        files you've accumulated, yet still
                                        play them  with  no  extra  effort!
                                        Uses a mouse-able, easy-on-the-eyes
                                        window system.
                                        Freeware: $0

          DELDIR12.ZIP     1.2          "Delete Directory"  allows  you  to
                                        delete an entire directory (and all
                                        directories  under  it)  with   one
                                        quick command.   You will be  shown
                                        totals of  what  you are  about  to
                                        delete and then be asked to confirm
                                        (the confirm process  can be  over-
                                        ridden from the command line).
                                        Freeware: $0

          DIRSIZ11.ZIP     1.1          "Directory Size Information" allows
                                        you to easily  determine the  total
                                        size (in both  files and bytes)  of
                                        any directory.
                                        Freeware: $0

          LSDIR_20.ZIP     2.0          "Led's  Stacker  Directory"  is   a
                                        replacement  for   Stacker's   SDIR
                                        command.   The  main  advantage  of
                                        LSDIR  is   that   it   shows   the
                                        compression ratio  in  "PKZIP-type"
                                        notation (50% instead of 2.0:1).
                                        Freeware: $0

          DUPICO10.ZIP     1.0          "Duplicate Icon Deleter" is for any
                                        Windows   3.0    user    who    has
                                        accumulated tons of icons.  It will
                                        go through a  directory and  delete
                                        all    duplicate    icon    images,
                                        regardless of what they are named.
                                        Freeware: $0

          LACE: the Multi-Configuration Utility                Page 21

                         Keith Ledbetter's Shareware Catalog


          MSDRBT10.ZIP     1.0          MS-DOS /  DR-DOS Dual  Boot.   This
                                        utility allows you to keep both MS-
                                        DOS 5.0 and DR-DOS 6.0 on your hard
                                        drive at the  same time and  easily
                                        switch between  the  two  operating
                                        systems.
                                        Freeware: $0

          TIMER10.ZIP      1.0          This program allows  you to  easily
                                        time the execution of any  program.
                                        Simply  use  TIMER  to  invoke  the
                                        command (eg: "timer chkdsk C:") and
                                        you   will   be   shown,   at   the
                                        completion  of  the  command,   the
                                        elapsed time.
                                        Freeware: $0

          UNTAB10.ZIP      1.0          One   of   the   fastest   "un-tab"
                                        programs you will  find.  It  takes
                                        the specified input file and copies
                                        it to  the specified  output  file,
                                        replacing all  tab characters  with
                                        hard blanks (you  specify the  "tab
                                        size").
                                        Freeware: $0



























          LACE: the Multi-Configuration Utility                Page 22

                                Software Distributors


               You can  download all  of my  programs from  the Blue  Ridge
          Express BBS in  Richmond, VA.    This is  the official  technical
          support board  for all  of my  software,  and there's  a  special
          "Keith Ledbetter" message section where you can quickly get  your
          questions answered.   Once  you log on, just  do a "J KEITHL"  to
          join my sub-board.   First-time callers  have access  to both  my
          message base and all of my download files.  Please note that  you
          must do a "J MAIN" command before downloading any files.

               The Blue Ridge Express is a  first-class BBS, with 30  phone
          lines; no need to worry about getting a busy signal!  The  number
          is:

                             The Blue Ridge Express BBS
                                    804-790-1675



               All of my software can also  be obtained from the  following
          shareware vendors:


                         Alternative Personal Software
                         269 Springside Drive  Suite C
                         Hamilton, Ontario
                         Canada  L9B 1P8
                         Tel: (416) 577-4068


                         PC Assist Limited
                         4 Carruber's Close
                         135 High Street
                         Edinburgh,  EH1 1SJ
                         Scotland
                         Tel: 031-557-6432


                         BroCo Software
                         P. O. Box 446
                         3760 AK  SOEST
                         Holland
                         Tel: 31-2155-26650


                         EURO BOARD
                         John Warren
                         Postfach
                         3920 ZERMATT, VS
                         Switzerland
                         BBS:  (0228) / 476-111-06 (Swiss Telepac)


          LACE: the Multi-Configuration Utility                Page 23

                                        Index


          additional device drivers, 3
          ASK.SYS, 4, 17
          Blue Ridge Express BBS, 23
          BREAK=, 15
          common selections, 5
          CONFIG.SYS sample shell, 5
          DOS 3.3, 15, 17
          DOS 5.0, 16, 17
          ECHO.SYS, 18
          environment variable, 3, 11, 12
          ERRORLEVEL, 3
          getting started, 13
          LACE invocation, 6
          LACE.SYS, 3
          LACE.SYS Parameters, 6
            Center, 6
            Default=, 6
            NoHighVideo, 6
            NumOff, 6
            Passive, 6
            Timeout=, 6
          LACE_ERR.COM, 3
          LACE_SET.EXE, 3
          left shift key, 13
          menu entry lines, 7
          menu entry parameters
            Default, 7
            Timeout=, 7
          multiple AUTOEXEC.BAT files, 12
          option line parameters
            BackgroundFill, 8
            BannerBackground, 8
            BannerBorder, 8
            BannerForeground, 8
            color values, 9
            ColorType, 8
            DialogBackground, 8
            DialogBorder, 8
            DialogForeground, 8
            End, 8
            OwnerBackground, 8
            OwnerForeground, 8
            SelectionBarBackground, 9
            SelectionBarForeground, 9
          option lines, 8
          passive, 14
          PAUSE.SYS, 17
          product catalog, 20
          remark, 15
          right shift key, 13
          selection blocks, 5

          LACE: the Multi-Configuration Utility                Page 24

                                        Index

          Shift Key states, 14
          shortcut keys, 13
          software distributors, 23
          technical support, 23
          welcome, 3
          YES/NO questions, 4















































          LACE: the Multi-Configuration Utility                Page 25
```
{% endraw %}

## LICENSE.DOC

{% raw %}
```

      LACE Registration Form         Mail to:  Keith Ledbetter
                                               4240 Ketcham Drive
                                               Chesterfield, VA  23832

      LACE Version 1.x                           Quantity    Price

      Disk with branding utility ($15/copy):     _______   _________

                             Total enclosed:               _________

      Please make payment by check or money order (in US funds) payable
      to "Keith Ledbetter".

      Please specify the diskette size(s) that are acceptable for you:

                       ___ 5.25" 360KB   ___ 3.5" 720KB


      Name    _____________________________________________________

      Company _____________________________________________________

      Address _____________________________________________________

              _____________________________________________________

      Phone   _____________________________________________________

      Where did you get LACE? _____________________________________


                         Multi-System and Reseller Licenses:

      Site, corporate, network, and reseller licenses are available for
      LACE.  Check the line  on the order form  or contact me for  more
      information.    The following schedule provides some examples  of
      multi-system license fees.  The fee includes one master  diskette
      which you may then copy and use on the number of machines  listed
      below:

                        # Users        Price
                        -------       -------
                           5        $   70.00   ($14 / copy)
                          10           130.00   ($13 / copy)
                          25           300.00   ($12 / copy)
                          50           550.00   ($11 / copy)
                         100         1,000.00   ($10 / copy)
                       Unlimited     1,500.00

```
{% endraw %}

## SET.DOC

{% raw %}
```







                               SET.SYS and ENVIRON.SYS

                   Setting Environment Variables Inside CONFIG.SYS


                             A Companion Program to LACE






                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER



                             Written by Keith Ledbetter
                                 4240 Ketcham Drive
                               Chesterfield, VA  23832
                                   (804) 674-0780
                           (6:00pm - 10:00pm Eastern Time)



                         Tech Support BBS:   Blue Ridge Express
                                             804-790-1675
                                             30 Phone Lines (2400 bd)
                                             Sub-board KEITHL
                                             ("J KEITHL")


                      Electronic mail on  GEnie: ORION.MICRO
                                     Compuserve: 72240,1221
                                            AOL: KLedbetter


                            Program and Documentation are
          Copyright (c) 1992 by Keith Ledbetter.  All rights reserved.


                     Portions Copyright Borland, International.
                           Written with Borland C/C++ 3.0.



                                    Introduction
                                    ------------


               The ENVIRON.SYS and SET.SYS drivers included with your  LACE
          package allow you to set  environment variables from inside  your
          CONFIG.SYS file.  The LACE_SET program is used to retrieve  these
          settings and then place them in your master environment (normally
          from your AUTOEXEC.BAT file).



                                    How it Works
                                    ------------


               Before you can SET environment variables, you must load  the
          ENVIRON.SYS device driver.  This driver stays memory resident and
          does the actual storage of the environment variables that  you've
          specified in your CONFIG.SYS file (you can set up to 128 bytes of
          environment variables).  The ENVIRON driver is very small, taking
          up only around 280 bytes of your precious memory.


               After loading ENVIRON.SYS,  you merely call  SET.SYS to  set
          environment variables.   The  syntax is  identical to  DOS's  SET
          command, as in:

                    device=c:\lace\SET.Sys The_Variable=The_Value


               In  your  AUTOEXEC.BAT  file,  you  then  run  the  LACE_SET
          program.  This program does two things:

          1.   It sets  the LACE  variable automatically  to the  selection
          number that you chose from LACE's boot-up menu.

          2.   It places any environment variables you set into the command
          processor's master environment.














          Setting Environment Variables from CONFIG.SYS         Page 1




                                     An Example
                                     ----------

               In this example, we'll use the  ASK device driver to  prompt
          the user for two configuration questions:


          DOS     = High
          device  = c:\qemm\qemm386.sys ram
          shell   = c:\4dos\4dos.com /p @c:\4dos\4dos.ini

          device  = c:\lace\environ.sys
          device  = c:\lace\lace.sys Center NumOff
          device  = LACE SelectionBarBackground=RED

          device  = LACE "S\tandard configuration"
            device = d:\ms_mouse\mouse.sys /y /s30
            device = c:\caches\mycache.sys 4096
            device = c:\dos50\ansi.sys
            device = c:\dos50\setver.exe

            device = c:\lace\ask.sys "Load a RAMdisk? "
            device = YES
              device = c:\dos50\ramdrive.sys 2048
              device = c:\lace\set.sys RAMDISK=YES
            device = NO
              device = c:\lace\set.sys RAMDISK=NO
            device = END

            device = c:\lace\ask.sys "Load the network? "
            device = YES
              device = c:\netlib\netdrvr.sys
              device = c:\lace\set.sys NETWORK=YES
            device = NO
              device = c:\lace\set.sys NETWORK=NO
            device = END

          device = LACE "B\are-bones configuration"
            device = c:\lace\set.sys RAMDISK=NO
            device = c:\lace\set.sys NETWORK=NO
            device = c:\dos50\ansi.sys
            device = c:\dos50\setver.exe

          device = LACE End

          buffers   = 5
          files     = 60
          break     = on
          STACKS    = 0,0
          lastdrive = E


          Setting Environment Variables from CONFIG.SYS         Page 2




               Then, in the AUTOEXEC.BAT file:



          c:\lace\lace_set
          ...
          ...   do whatever
          ...

          if NOT "%RAMDISK%" == "YES" goto no_ramDISK
          ...
          ...  load the ramdisk
          ...

          :no_ramDISK
          if NOT "%NETWORK" == "YES" goto no_network
          ...
          ...  log onto the network
          ...

          :no_network
          ...
          ...  rest of your statements








                                    In Conclusion
                                    -------------

               Don't forget  that  you  MUST load  the  ENVIRON.SYS  driver
          before calling the SET.SYS driver.   If you have any  suggestions
          for future  enhancements, please  don't  hesitate to  contact  me
          about them.



                                                       Enjoy!

                                                            Keith








          Setting Environment Variables from CONFIG.SYS         Page 3
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SAND.DOC

{% raw %}
```
         --------------------------------------------------
         |                                                |
         |            SAND STORM -- version 2.0           |
         |                                                |
         |                by David Johndrow               |
         |                                                |
         |           An MVP Software Production           |
         |                                                |
         --------------------------------------------------



                   Copyright 1992 David Johndrow
                   

                     _______
                ____|__     |                (R)
             --|       |    |-------------------
               |   ____|__  |  Association of
               |  |       |_|  Shareware
               |__|   o   |    Professionals
             -----|   |   |---------------------
                  |___|___|    MEMBER
     

MVP Software is a member of the Association of Shareware
Professionals (ASP).  ASP wants to make sure that the shareware
principle works for you.  If you are unable to resolve a
shareware-related problem with an ASP member by contacting the
member directly, ASP may be able to help.  The ASP Ombudsman can
help you resolve a dispute or problem with an ASP member, but does
not provide technical support for members' products.  Please write
to the ASP Ombudsman at 545 Grover Road, Muskegon, MI 49442-9427 or
send a Compuserve message via CompuServe Mail to ASP Ombudsman at
70007,3536.


This program is distributed under the "shareware" concept, in which
you can try this software before you buy it.  If you like the game,
please register it by sending $15 plus $3 s/h to MVP Software.  Or
if you want more for your money, purchase the Sand Storm Championship
Version for $20 plus $3 s/h.  (See the Appendix for a description of
the extra goodies you get with Sand Storm Championship Version.)
If after an evaluation period you choose not to register, please
give this software to a friend who might enjoy it.

Neither MVP Software nor David Johndrow, the author of Sand Storm,
receives any compensation from the purchase of the original
diskette.  There is over a year of work in this program.  Please
support our efforts to bring quality entertainment to users at
reasonable prices by registering your copy today.  Use the order
form in this documentation manual.

Please copy and distribute the shareware version of Sand Storm only.
Sand Storm Championship Version may not be copied, given away or
sold by anyone other than MVP Software or an authorized reseller.

Order from:

MVP Software
1035 Dallas SE
Grand Rapids, MI 49507-1407

or call: 800-968-9684  or  616-245-8376

order price: $20 + $3 s/h  US funds only for Sand Storm
                                             Championship Version
-------------------------------------------------
Canadian customers please order from:

Distant Markets
Box #1149
194 - 3803 Calgary Trail South
Edmonton, Alberta  T6J 5M8

or call 800-661-7383 toll free
fax: 800-661-9756 toll free

order price: $29 Canadian funds for Sand Storm Championship Version
-------------------------------------------------------------------
Australian customers please order from:

Budgetware
9 Albermarle St.
Newtown NSW 2042

or call (02) 519-4233
fax: (02) 516-4236

order price: $30 Australian funds for Sand Storm Championship Ver.
------------------------------------------------------------------
United Kingdom customers please order from:

Testware Ltd
46 The Avenue
Harrogate, N Yorks  HG1 4QD

or call 0423 886 415
fax: 0423 889 728

order price: 17 pounds for Sand Storm Championship Version
----------------------------------------------------------

Software Creations is now the home BBS for all MVP Software games and
game-creation software.  Check out our free MVP file section for new
releases and updates.  Call (508) 365-2359  2400 baud; (508) 368-4137
2400-16.8K USR; (508) 368-7036  2400-14.4K V.32.  From the main menu
type F 60 to go to the MVP file section.

Introduction
------------
     Here you are, stuck in the sweltering Middle East desert,
manning the new untested Patriot missles, when all of a sudden this
madman unleashes the fury of his Scud missles at you.  Worse yet,
enemy jets are now flying overhead dropping deadly bombs!

     So you scramble into the gunner's position and begin firing
away at the intruders.  It is up to you to protect civilization as
we know it today.


Sand Storm System Requirements
------------------------------
     VGA graphics adapter and monitor
     Microsoft compatible mouse
     384k free RAM


Quick Start
-----------
     There are three basic scenario types you will face in the
standard version of Sand Storm: SCUDS, JETS, and TOMAHAWKS.  Before
each mission you will be briefed on what to expect.  Reading the
briefs will help you adopt a strategy before each mission -- making
success more likely.  After the briefing, you will see an
introduction sequence reminding you of what type of scenario is to
come; then the mission begins.  After you complete a mission, you
will be given information regarding your performance.  There are 20
missions in all.


SCUDS
-----
     Move the cursor around the screen with the mouse.  When you
wish to launch a Patriot to the current location, push the left
button.  It couldn't be more simple!  Remember, the Patriot will go
to the location of the crosshairs when you pushed the button.  This
way, you can launch a Patriot, then seek out more targets while the
Patriot is on its way!  Watch out for Conventional (White), Al
Hussein (Blue), and Chemical (Green) Scuds.  In addition, enemy jets
will fly over.  Try to hit the jets for extra points, but only worry
about the bomb that it may release.  The mission ends when the last
scud detonates or is destroyed.  The game ends if you let damage
bring down the status of the installations to below 50%.


JETS
----
     Same in scope as the scuds scenario but with more jets and
fewer scuds than before.


TOMAHAWKS
---------
     During this scenario you will use the mouse to move a tomahawk
missile up and down to avoid contact with AA fire.  When your target
appears (usually after several screens), push the left button to
initiate the strike sequence.  At that time, the tomahawk will

nosedive to the ground and, if your aim is good, destroy its target.
The mission ends after the last tomahawk detonates or is destroyed.
The game ends if you fail to destroy 50% or more of the targets.
Important: Do not push the button until you are ready to initiate
the strike sequence.  Once it has begun, there is no turning back!


Your Mission
------------
     Your mission is to protect the following types of potential
enemy targets: cities, towns, hospitals, barracks, water towers,
radar, airfields, oil refineries, oil wells, oil storage tanks, and
ships at sea.  The following table illustrates what enemy weapons
will do the most damage to any given facility:

   Type of missile    Direct   Nearby Hit
   -----------------  -------  ----------
   Scuds (White)      50%      30%
   Al Hussein (Blue)  40%      24%
   Chemical (Green)   50%      30% (cities, towns, hospitals,
                                    barracks, water)
                      30%      18% (Everything else)
   Bombs              30%      10%

     Keep in mind that while you are not evaluated on your ability
to protect the Patriot missile launcher, hits to the launcher result
in its loss of ability to fire as rapidly.  You can actually lose
all use of the launcher, leaving you with nothing to do but watch,
helplessly, as the scuds rain down on their targets.

     During Tomahawk sequences, two approaches may prove helpful.
First, avoid a panic-stricken wild-driving technique.  This usually
results in head-on AA contact.  Just cruise along, moving when
necessary.  Second, when your target is within sight, move your
tomahawk into a low flying position before initiating the strike
sequence.  As you will no doubt learn at some point, the tomahawk is
still very vulnerable during this time, actually more-so since you
can no longer swerve away from danger.  Moving into a low position
before striking will minimize the amount of time spent in this
critical phase.


CREDITS
-------
     Sand Storm was created using MVP PAINT, a VGA graphics creation
and editing program designed especially for game authors.  It is
available separately from MVP Software.  The following people were
instrumental in debugging and assisting the growth of Sand Storm:
Nancy Johndrow, the author's wife, provided ideas, the title, and
tolerated countless hours of "Just look at this last thing, then you
can go!"  Kevin Stokes of Pie in the Sky Software freed me from a
dangerous trap.  Bob Roberds gave me the means to get the job done.
In addition, the January 18th, 1991 edition of U.S. News and World
Report and the February 1991 edition of National Geographic were
both invaluable resources.

                          Appendix

What Do You Get When You Buy Sand Storm Championship Version?

A common question that users ask us is, "If I register a game with
MVP, what do I get?"  That's a good question.

With Sand Storm, MVP offers you a choice.  If you're happy with the
shareware game, and you don't mind never seeing the awesome tank
battle scenario, and you don't want to really let the Bully of
Baghdad have it right where it hurts <grin>, then you may register
Sand Storm by sending the $15 registration fee (plus $3 s/h).  This
will get you the latest version of the game with the registration
reminder screens removed.  It will also give you the satisfaction
of knowing you've done the right thing, and you will be supporting
the author in future game development.

If you want the challenge of six additional levels, including the
awesome tank battle scenario, however, then you will want to buy
Sand Storm Championship Version.  This sells for $20 plus $3 s/h.
With Sand Storm Championship Version you get the following:

            * No registration reminder screens
            * Six additional game levels -- 26 levels in all
            * The awesome tank battle scenario
            * Printed instructions and secret game hints
            * a FREE bonus VGA action game
            * The satisfaction of doing the right thing
            * Support for the author in future game development
            
Frankly, most folks will want to get the Championship Version.
After all, when you're plunking down the cash, you want something
in return.  And Sand Storm Championship Version delivers!  I know
you'll be happy with it.  Heck, the extra FREE VGA game you get
is worth the five bucks all by itself.

Thank you for supporting shareware.  Your honesty

```
{% endraw %}

## VEND&SYS.DOC

{% raw %}
```
                                            _______
MVP Software                           ____|__     |               (R)
1035 Dallas SE                      --|       |    |-------------------
Grand Rapids, MI 49507-1407           |   ____|__  |  Association of
(616) 245-8376  (voice line)          |  |       |_|  Shareware
contact person: Dave Snyder           |__|   o   |    Professionals
CIS 70363,15                        -----|   |   |---------------------
                                         |___|___|    MEMBER




Sand Storm ver 2.0

categories: games, arcade games, graphics games, action games, VGA/SVGA games

one-line description: Sand Storm VGA arcade game. MVP Software (ASP).

short description: Sand Storm ver 2.0 by MVP Software (ASP).  
                   Fire up your mouse for non-stop action in this high-octane 
                   graphics arcade game.  Intercept Scud missles and jet 
                   attacks with your Patriots; then guide your Tomahawk 
                   missle through enemy AA fire on a search and destroy 
                   mission.  This is the shareware version of the popular 
                   retail game.  Includes 20 missions.  Req VGA/SVGA, mouse.
                   
long description: If you like shoot-em-up, high-octane graphics arcade games,
                  then Sand Storm is for you!  Fire up your mouse for non-stop 
                  action as you try to intercept Scud and jet attacks with 
                  your Patriot missles, then guide your Tomahawk missle 
                  through enemy AA fire while on a search and destroy mission. 
                  Can you successfully take out enemy chemical weapons plants 
                  and mobile Scud launchers?  Includes 20 missions, digitized 
                  graphics, and a stunning Gulf War Map.  This is the 
                  fully-functional shareware version of the popular retail 
                  game.  Req VGA/SVGA, mouse.  By MVP Software (ASP).
                  
Requirements: 384K free RAM, VGA/SVGA, Microsoft compatible mouse.  $15
              registration; $20 for Championship Version with 6 extra
              missions and the fabulous tank battle scenario.
              
Catalog vendors: Please include Sand Storm in your printed and disk shareware
                 catalogs.
                 
                            RACKWARE VENDORS

MVP Software has a new policy on shareware rack vending.  Beginning immediately
no MVP Software shareware product may be sold on shareware racks in any retail
location without prior written approval from MVP Software.  This policy affects
Sand Storm, plus all other MVP products.  Many of our shareware products are
also sold in retail locations.  We do not want our shareware products to under-
mine these sales.  Thanks for your understanding.

All MVP shareware products may be sold via catalogs, mail order, telephone
orders, flea markets, computer clubs, and any other method that does not
involve sales in retail locations.

We will give permission to rack vendors to sell our products in retail
locations only if the following conditions are met: (1) The vendor must pay
MVP Software a royalty on all copies sold in retail locations.  This does not
include any other type of shareware sales.  Suggested royalty is 10 cents per
copy sold.  (2) The vendor must provide reports to MVP Software not less than
quarterly of all rack sales minus returns.  (3) The vendor must include a one-
page flyer provided by MVP Software in all packages of MVP products sold on
shareware racks.  The size of the flyer may be determined by the vendor so
that it fits properly in the package.

Rack vendors meeting the above three conditions must still receive written
authorization from MVP Software to distribute our products on shareware racks.
Permission may not be given in all cases; the decision will be on a case-by-
case basis, and we usually will want to inspect the packaging before granting
distribution permission.

I apologize to those rack vendors to whom these requirements seem onerous.
However, this is the only way we can control how our products get distributed
to make sure we have both a return on our investment and a reasonable chance
at getting a registration. 

We really appreciate the distribution that vendors give us.  And we will con-
tinue to work with vendors to make both of our businesses prosper.  Thanks for
your understanding of why this step is necessary.

And just to be clear: the above requirements do NOT apply to catalog sales.

Sysops: Become part of the MVP Distribution Network and receive first notice of
        new products and updates!  Software Creations is now the home BBS for
        all MVP Software games and game-creation software.  Check out the MVP
        file section for new releases and updates.  Leave a private message for
        David C. Snyder to find out how your BBS can benefit by becoming part
        of the MVPDN!  Call (508) 365-2359 2400 baud; (508) 368-4137  2400-
        16.8K USR; (508) 368-7036 2400-14.4K V.32.
        2400-16.8K USR; (508) 368-7036 2400-14.4K V.32.
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.25 for 5.25" or $3.75 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $12.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The Encyclopedia of Shareware special price at         $14.95  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .25 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3043

     Volume in drive A has no label
     Directory of A:\

    LACE_14  ZIP     50551   6-17-92   9:07p
    SANDSTRM ZIP    211379  10-30-92   2:17p
    CDROM    TXT      3972   6-24-92   1:25p
    SHAREMAG TXT      1837   1-21-92   6:11a
    PCSIG    TXT      2335   1-21-92   6:09a
    GO       EXE     26022   1-10-92  12:14p
    GO-FORM  DAT      2401   1-20-92  10:24a
    GO-STRT  DAT       601   6-25-92  12:41p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    SIGORDER TXT      3332   6-25-92   2:28p
           10 file(s)     325958 bytes
                           31744 bytes free
