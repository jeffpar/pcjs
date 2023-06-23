---
layout: page
title: "PC-SIG Diskette Library (Disk #3547)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3547/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3547"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CONFMT.DOC

{% raw %}
```





          Sydex



















                                     Con>Format




                           A Concurrent Diskette Formatter































                                  Table of Contents


            Con>Format, Briefly..........................................1

            Configuring Con>Format.......................................1

            Operating Con>Format.........................................4

            Display Adapters and Modes and Con>Format....................5

            Removing Con>Format From Memory..............................6

            Other Things to Know.........................................6

            In Conclusion................................................6

            The Sydex Product Line.......................................7











































                                     Con>Format

                      A "POP-UP" CONCURRENT DISKETTE FORMATTER



                              Copyright 1988-90, Sydex
                                 All Rights Reserved

                              Version 1.07 August, 1990


                                        Sydex
                                    P.O. Box 5700
                                  Eugene, OR  97405
                               Voice:  (503)  683-6033
                               FAX:   (503)  683-1622
                               Data:   (503)  683-1385


                                       NOTICE

          THIS IS NOT FREE  SOFTWARE!  If you paid a "public domain" vendor
          for this program,  you  paid  for  the  service  of  copying  the
          program, and not for the program itself.  Rest assured that noth-
          ing  ever  gets  to  the  originators of this product from such a
          sale.  You may evaluate this product,  but if you make use of it,
          you must register your copy.

          We  offer  several inducements to you for registering.   First of
          all,  you receive the most up-to-date copy of the program that we
          have  --  and  we do update the product on a regular basis.   You
          also receive support for Con>Format -- which can be  quite  valu-
          able at times.  And finally, we have a few utilities not included
          in the evaluation package.   Make no mistake, however - this is a
          fully functional version of Con>Format and not "crippled" in  any
          way.


                              REGISTRATION INFORMATION

          The non-commercial single-user registration fee for Con>Format is
          $15.00  US.     The  commercial  and  multisystem  site  fee  for
          Con>Format (including Con>Format) is $50.00.

          Send a check or company P.O. for the appropriate amount to:








                                        Sydex
                                    P.O. Box 5700
                                  Eugene, OR  97405

          We accept VISA and MasterCard.   Please indicate what product you
          are  ordering  and if you have a requirement for 3.5" media.   We
          normally ship 5.25" 360K diskettes,  but will furnish  3.5"  720K
          media  upon request.   Customers outside of the United States and
          Canada should add $5.00 for airmail shipping.

          If you are a registered user of this product and  desire  an  up-
          date,  please send $5.00 for handling and we will ship you an up-
          to-date copy.   Please add $3.00  for  printed  documentation  to
          cover duplication costs.


                                 DISTRIBUTION NOTICE

          This  is  "user-supported"  software.    You are hereby granted a
          license by Sydex to distribute this evaluation copy of Con>Format
          and its documentation, subject to the following conditions:

               1.   Con>Format may be distributed freely without charge  in
                    evaluation form only.

               2.   Con>Format may not be sold,  licensed, or a fee charged
                    for its use.   If a fee is charged in  connection  with
                    Con>Format,  it  must cover the cost of copying or dis-
                    semination only.   Such charges must be  clearly  iden-
                    tified as such by the originating party.  Under no cir-
                    cumstances  may  the  purchaser be given the impression
                    that he is buying Con>Format itself.

               3.   Con>Format must be presented as a complete unit, includ-
                    ing this documentation.   Neither  Con>Format  nor  its
                    documentation may be amended or altered in any way.

               4.   By  granting you the right to distribute the evaluation
                    form of Con>Format,  you do not  become  the  owner  of
                    Con>Format in any form.

               Any   other  use,   distribution  or  representation  of
               Con>Format is expressly forbidden  without  the  written
               consent of Sydex.














          Con>Format, Briefly


          For  those  who  don't like going though tons of documentation to
          find out what a program does, here's Con>Format in a nutshell:

               * Con>Format stands for Con(current) For(matter) and  offers
                 you  the capability of formatting diskettes  "in the back-
                 ground" while other work is being done on your computer.

               * Con>Format is a "pop-up" utility.  That is,  it stays dor-
                 mant  until  a  particular  combination of keys (which you
                 specify yourself) is depressed.   Con>Format then opens  a
                 "window" on the display and requests which drive to format
                 and what kind of format to write.   Once this is done, the
                 "window" disappears and does not reappear until formatting
                 is complete.   In the meantime,  you have full use of your
                 computer,  excluding  the diskette drives (you may use the
                 hard disk).  Hence the term "background" formatter.

               * Con>Format works with 5.25" and 3.5" diskette drive types,
                 and provides formatting for 180K,  360K,  720K,  1.2M  and
                 1.44M  diskettes.    The format written is compatible with
                 DOS versions 2.0 through  4.01  (the  latest  as  of  this
                 writing).

               * Con>Format will "hold up" a diskette access from a running
                 program  if  a  diskette  is  in the process of being for-
                 matted.   A window "pops up" to notify you of this  occur-
                 rence.   When formatting is complete,  the diskette access
                 is performed and program execution continues.   If the ES-
                 Cape  key  is pressed during the time that diskette access
                 is suspended,  a "Drive not ready" status will be returned
                 and control returned to the suspended program.

          So  why waste your time staring at "Formatting Track 13,  Side 1"
          displays?  Give Con>Format a try--pretty soon you'll be wondering
          why you ever put up with DOS Format!


          Configuring Con>Format

          Con>Format can be run without first being configured.  Con>Format
          will use the following defaults if the configuration program  has
          not been changed:

               1.   White-on-black window colors.

               2.   "Hot key" is Alt-Left Shift-"F".

               3.   Tone and window completion alert.


                                       Page 1




          You need only copy the file CONFMT.COM from the installation dis-
          kette to a directory or drive where it may be accessed.   To load
          Con>Format into memory,  simply type the  following  at  the  DOS
          prompt:

                 CONFMT S

          Con>Format operates with most PC-compatibles including PC XT-, PC
          AT- and PS/2-compatibles.   Some machines, such as the Tandy 2000
          or PC jr will not work with Con>Format,  because they  are  rela-
          tively  PC-incompatible.    Your video display may be monochrome,
          CGA, EGA or VGA,  and your diskette drives may be internal or ex-
          ternal  to  your  computer.    If you have more than one diskette
          adapter card,   Con>Format will access  drives  attached  to  the
          primary or secondary adapters.

          If  the  defaults  given  above are not suitable,  you'll want to
          specify your configuration explicitly.   You'll need to have  the
          files CONFMT.COM and CFCONFIG.EXE on a disk where they can be ac-
          cessed by the configuration program.   If you obtained Con>Format
          in "archived" or "squeezed" form,  you'll need  to  run  the  ap-
          propriate  utility  to  extract both CFCONFIG.EXE and CONFMT.COM.
          At the DOS command prompt, load the configurationn program by en-
          tering

                 CFCONFIG               and pressing the ENTER key.

          You'll be guided through a series of  displays  which  will  con-
          figure Con>Format to reside on the disk of your choice.

          At one point in the configuration program,  you will be requested
          to furnish a "hot key" combination  --  the  combination  of  key
          depressions which will "activate" Con>Format and cause its window
          to "pop up".  A "hot key" combination involves depressing any (or
          none) of the following keys:

                    Ctrl, Alt, Right Shift, Left Shift

          and,  while these keys are depressed,  depressing, then releasing
          any other key on the keyboard.  Note that a "hot key" combination
          must include a "shift" combination  and  some  other  "non-shift"
          key.

          For  example,  a good combination to use is Alt,  Right Shift and
          "F",  as it's a rather unlikely combination and is easy to remem-
          ber.    Take  care not to assign a "hot key" combination which is
          the same as that used by another one of your  programs.    Should
          this  happen,  the  "hot  key" combination will be intercepted by
          Con>Format and be rendered inaccessible  to  the  other  program.
          For instance, the "F" key could be designated as a Con>Format"hot
          key"  --  but  you'd be left without the letter "F" in everything


                                       Page 2




          else you tried to do!   If you find that your "hot key" selection
          was  not  a  good  one,   you can run INSTALL again to re-install
          Con>Format with a different "hot key" combination.

          Some notes on the configuration process:

               * You may have CFCONFIG modify the file AUTOEXEC.BAT on  the
                 target  disk  drive  to  cause  Con>Format  to  be  loaded
                 automatically after each system  "boot".    Alternatively,
                 you may load Con>Format with the following DOS command:

                         CONFMT              followed by the ENTER key

               * If you have installed the registered version of Con>Format
                 and want to avoid the opening "banner",  use the following
                 DOS command to load Con>Format:

                         CONFMT S            followed by the ENTER key

               * If you have an XT-compatible machine with  a  high-density
                 diskette  adapter  such as the MicroSolutions CompatiCard,
                 you  may  need  to  configure  your  computer  as  an  AT-
                 compatible to be able to use the higher capacity drives.

               * Conversely, a Toshiba T3100 laptop should be configured as
                 an  XT-compatible,  rather  than the default AT-compatible
                 selection,  because of its non-standard diskette  control-
                 ler.

               * During  the  configuration process you will have an oppor-
                 tunity to specify what type of diskette drives and control-
                 lers your computer supports.   If you have a  single  dis-
                 kette  adapter,  all  drives  are connected to the primary
                 adapter.   If you have an additional adapter,  such as the
                 SYSGEN Omni-Bridge or MicroSolutions' CompatiCard, this is
                 the secondary adapter.  In all cases, if your computer sup-
                 ports high-density diskette formats, you must specify that
                 it  is an "AT" type of computer,  regardless of its actual
                 model type.

               * If you're using a MicroSolutions CompatiCardtm I or II dis-
                 kette adapter in addition to the "normal" PC-type adapter,
                 you must specify not only that you have  an  "AT"-type  of
                 computer,  but also that you are using a CompatiCard.   If
                 you are in doubt  about  the  base  address  of  the  Com-
                 patiCard,  consult  your  CompatiCard reference manual for
                 configuration information.

               * As part of the configuration process you may specify  that
                 Con>Format  use  a  different "boot" sector image.   To do
                 this, you'll need a copy of a diskette having the boot sec-
                 tor to be used by Con>Format.

                                       Page 3





               * Finally, you may specify if Con>Format is to signal comple-
                 tion of the formatting process by a tone instead of, or in
                 addition to,  a "pop-up" status window.   If a tone signal
                 is  selected, a high, medium or low tone is sounded to in-
                 dicate that the diskette you just formatted had:

                 *  No errors (High tone)
                 *  Some flawed areas (Medium tone)
                 *  A serious error; the result is unusable.  (A low tone)

          These  tones  are  very  distinctive.   If no "pop-up" completion
          status window is selected,  the status of the previous formatting
          operation  is  display  when  the  "hot  key" combination is next
          pressed.

          Note that the configuration process customizes Con>Format  for  a
          specific configuration of disks and display adapter.   Con>Format
          must be re-configured if the system configuration is changed.


          Operating Con>Format

          Operation of Con>Format is straightforward.  After Con>Format has
          been loaded,  simply depress your own "hot key" combination and a
          "window" will appear, prompting for information.

          After  the  drive containing the diskette to be formatted and the
          format to be written have been selected,  the "window" disappears
          and  the  formatting  process begins.   While the format is being
          written,  you may perform other tasks on your computer,  provided
          that no diskette activity is involved.  Should you attempt to ac-
          cess a diskette drive while Con>Format is formatting,  a "window"
          will appear,  advising that your diskette request has  been  held
          up,  pending  completion  of  the formatting operation.   At this
          point, no more work can be performed concurrently with the format
          operation.  However, if the ESCape key is pressed during the time
          that diskette access is suspended,  a "Drive  not  ready"  status
          will  be  returned and control returned to the suspended program.
          It may take several depressions of  the  ESCape  key  before  DOS
          reports  a  "Drive  not ready" error because most diskette opera-
          tions are retried several times by DOS before an error is finally
          reported.

          When the formatting operation is complete, Con>Format again "pops
          up" a window displaying the outcome of the operation, or sounds a
          tone, or both,  depending on the selection made at configuration.
          If  "tone  only"  was  configured,  the results of the formatting
          operation will be displayed the next time the "hot key"  combina-
          tion is depressed.



                                       Page 4




          If flawed areas of the diskette were encountered,  the total size
          of the flawed areas is displayed.   In some cases it may  not  be
          possible  to  format  a  diskette because the drive door was left
          open, the diskette was write-disabled,  or a flaw was detected in
          a  critical area of the diskette.   Con>Format will diagnose each
          of these conditions and display an appropriate message.

          After the results of the formatting operation are  shown,  you'll
          be  asked if another diskette should be formatted.   If the Enter
          key is pressed,  the whole  formatting  process  is  repeated  on
          another diskette,  using the same drive and choice of format used
          for the previous diskette.   If the ESCape key  is  pressed,  the
          "window"  disappears  and  any diskette operation which was "held
          up" by Con>Format will be performed.

          When Con>Format displays its window,    you may move  the  window
          around  the  screen with the cursor keypad.    Each key moves the
          window as follows:

                    7 - Upper left corner
                    9 - Upper right corner
                    1 - Lower left corner
                    3 - Lower right corner
                    5 - Center of screen
                    8 - One line up
                    2 - One line down
                    4 - One column left
                    6 - One column right


          Display Adapters and Modes and Con>Format

          Con>Format will not "pop" a window up when your  computer's  dis-
          play  is  in graphics mode.   That is,  Con>Format will work only
          with text displays.   If Con>Format concludes diskette formatting
          and   the  display  has  been  changed  from  text  to  graphics,
          Con>Format will wait until  the  display  is  again  text  before
          "popping"  a window up.   If the display is in graphics mode when
          Con>Format is activated by the "hot key" combination,  Con>Format
          will ignore the "hot key" depression.

          However, "Hercules" or Monochrome Graphics adapters pose some spe-
          cial  problems.   Con>Format will not display correctly or intel-
          ligibly when a Hercules- or  Monochrome-graphics  display  is  in
          graphics  mode.    If Con>Format is activated accidentally when a
          monochrome-graphics display is in a graphics mode, the ESCape key
          should be pressed and Con>Format will restore the  display.    In
          addition,  Con>Format  is  not compatible with some program which
          make use of Hercules Computer Technology's "RAM-Font" mode.   The
          ESCape key will restore the display in case of accidental activa-
          tion of Con>Format.


                                       Page 5





          Removing Con>Format From Memory

          You  can  remove  Con>Format from your computer's memory with the
          command:

                    CONFMT R

          The only restriction is  that  Con>Format  must  not  be  in  the
          process  of formatting a diskette at the time this command is ex-
          ecuted.


          Other Things to Know...

          Con>Format will work with most "serious" programs.    Some  games
          will not operate with Con>Format, however.

          Products  which  directly  access  the  diskette adapter will not
          operate  correctly  with  Con>Format.    These  include  our  own
          ANADISK,  TELEDISK,  COPYQM, FORMATQM and 22DISK.  Con>Format may
          be installed,  but must not be activated (by depressing the  "hot
          key" combination) while any of these programs are executing.   If
          Con>Format is accidentally  activated  during  the  execution  of
          these programs, exit Con>Format by pressing the ESCape key.

          When   using   other   "hot   key"  products,   such  as  Borland
          International's SideKick,  remember that the order in which  "hot
          keys"  are  recognized depends on the order in which the products
          have been loaded.  Load Con>Format last if possible.

          The formats created by Con>Format are compatible  with  DOS  4.0,
          and  will  also  work with DOS 2 and DOS 3.   Con>Format will not
          produce 8-sector DOS 1 formats.


          In Conclusion

          Thank you for giving Con>Format a try.   If you have  suggestions
          or  questions  concerning its use,  or any of our other products,
          please write or give us a call.












                                       Page 6




          The Sydex Product Line

               AnaDisk -- The compleat diskette utility.   Nothing like  it
               anywhere else;  scan,  edit,  repair and copy just about any
               kind of diskette.  $25.00 ($150.00 site)  registration fee.

               Con>Format -- Concurrent  "background"  diskette  formatter.
               Features   "pop-up"  operation  and  "hot  key"  activation.
               You've got to see it to believe.   Supports all current  DOS
               formats. $15.00 ($50.00 site) registration fee.

               22Disk -- Transfer files, format, examine and erase files on
               "foreign" CP/M diskettes on your PC.   Includes tips on sup-
               porting 8" and 5.25"  single-density  diskettes.    Contains
               definitions for over 200 different formats.  $25.00 ($100.00
               site) registration fee.

               22Nice  --  A CP/M 2.2 emulation package.   Supports the NEC
               V-series chips or performs emulation by  software  for  both
               the  8080  and Z80 processors.   Includes terminal emulation
               and diskette handling for common  CP/M  systems.    Includes
               22Disk.  $40.00 ($150.00 site) registration fee.

               TeleDisk  --  Turn  any diskette into a compressed data file
               and vice-versa.   Allows you to send and receive entire dis-
               kettes via modem.  Even works with some "copy-protected" dis-
               kettes.  $20.00 ($150.00 site) registration fee.

               CopyQM -- Mass diskette duplicator.  Format, copy and verify
               multiple  diskettes  from  a single master.   Implements "no
               keyboard" interaction mode and drive "round  robin"  servic-
               ing.    Supports  all standard DOS formats.   $15.00 ($50.00
               site) registration fee.

               FormatQM -- Mass diskette formatter - format a box  of  dis-
               kettes at a single sitting.  Implements "no keyboard" inter-
               action mode and drive "round robin" servicing.  Supports all
               standard  DOS  formats.    $10.00 ($40.00 site) registration
               fee.


          Information on any of these products can be obtained  from  Sydex
          by calling or writing us at:

                                        Sydex
                                    P.O. Box 5700
                                  Eugene, OR  97405
                               Voice:  (503)  683-6033
                               FAX:    (503)  683-1622
                              Data:    (503)  683-1385



                                       Page 7

```
{% endraw %}

## CCARD.DOC

{% raw %}
```




                Notes for Micro Solutions CompatiCard(tm) Users

                                 July 29, 1992

                                  Sydex, Inc.
                                 P.O. Box 5700
                               Eugene, OR  97405
                                 (503) 683-6033


     The CompatiCard(tm) line of diskette adapters from MicroSolutions,
     Inc. (DeKalb, IL  60115) represents one of several options available
     to add extra diskette drives to a system.  This document describes spe-
     cial steps that may be necessary in order to use CompatiCard drives
     with Sydex products.

     First, it's important that the exact type of CompatiCard be iden-
     tified; DIFFERENT MODELS ARE OPERATIONALLY DIFFERENT.  At the time of
     this writing, Micro Solutions offers three models of the CompatiCard:

          The CompatiCard I supports up to four diskette drives and can be
          identified by its absence of DIP switches.  This model also has a
          37-pin external drive connector mounted on the card bracket.
          Documentation accompanying the CompatiCard identifies it simply
          as the "CompatiCard" (no model number).  There is no BIOS ROM on
          the card.

          The CompatiCard II is a trimmed-down version of the CompatiCard I
          and supports only two drives.  Like the CompatiCard I, it has no
          DIP switches or BIOS ROM; it does not have an external drive con-
          nector.

          The CompatiCard IV is a much later product than either the Com-
          patiCard I or II and features 2.88M drive support.  This card
          also has a BIOS ROM and two sets of DIP switches located at the
          top of the card.  This card also has an external drive connector.

     Any of the CompatiCards can be configured either as the primary dis-
     kette controller, or as an add-on secondary controller.  Normally, a
     DISKETTE.CFG file should not be necessary if a CompatiCard is being
     used as the primary diskette controller.  However, if you have dif-
     ficulty accessing all of your diskette drives, it will be necessary to
     explicitly specify your diskette configuration with a DISKETTE.CFG
     file.







                                     Page 1




                            FOR COMPATICARD I OR II

     Before proceeding with this discussion, please read the section titled
     "Specifying a Diskette Configuration" in the documentation that accom-
     panies your Sydex product.

     Each drive used by the CompatiCard I or II must be completely
     specified in the DISKETTE.CFG file.  Fortunately, most of the informa-
     tion needed for the DISKETTE.CFG file is already present in your
     system's CONFIG.SYS file.  Note that the CompatiCard I and II are non-
     standard in their support of high-density diskettes and require that
     COMPATICARD (abbreviated CO) be specified in the DISKETTE.CFG file for
     each drive connected to them.

     Begin by looking for the line in CONFIG.SYS that contains a reference
     to CCDRIVER.SYS.  The line will have a form similar to the following:

                         DEVICE=CCDRIVER.SYS /x,y,z ...

     where "x", "y" and "z" are numbers.  Each set of "/x,y,z" describes
     one diskette drive.

     The first number, "x", indicates the BIOS unit number.  It also in-
     directly indicates the CompatiCard port address as follows:

                         Port Address    BIOS Unit "x"
                         ============    =============
                              3F0H           0 - 3
                              370H           4 - 7
                              360H           8 - 11
                              3E0H           12 - 14

     The "y" of the set is the drive type and can have the following
     values:

                       Type Number "y"        Drive Type
                       ===============        ==========
                              0                   360K
                              1                   720K
                              2                   1.2M
                              3                   1.2M DUAL
                              4                   8INCH
                              5                   720K
                              6                   not supported
                              7                   1.44M

     The "z" of each set is the step rate of the drive and should be used
     directly with the SEEK keyword.



                                     Page 2




     If a CompatiCard II has been configured with nonstandard IRQ and DMA
     settings, this will also be shown on the CCDRIVER.SYS line in
     CONFIG.SYS:

               DEVICE=CCDRIVER.SYS /x,y,z ... IRQ a  DMA b

     If "IRQ" is present on the CCDRIVER.SYS line, specify INTERRUPT in
     DISKETTE.CFG and use the value given by "a", above.  Similarly, use
     the CCDRIVER.SYS DMA value for the DISKETTE.CFG DMA value.

     The physical unit assigned to a drive and designated by the UNIT
     keyword in DISKETTE.CFG is always in the range of 0 through 3.  To get
     the physical unit number for any drive:

          1.   Consult the port address table shown above.  Locate the line
               which shows the port address for your particular CompatiCard
               configuration.

          2.   Take the first BIOS number (0, 4, 8 or 12) and subtract it
               from the "x" value for the drive.  This will yield a number
               between 0 and 3, the physical unit number of the drive.

     As an example, consider a system with a CompatiCard II installed as a
     secondary controller.  Two drives--E:, a 360K unit, and F:, a 1.44M
     unit--are installed.  The following line is found in CONFIG.SYS:

          DRIVER=CCDRIVER.SYS /8,0,6 /9,7,6

     From this line, we obtain the following DISKETTE.CFG file:

          DEFAULT:                      (to define drives A: and B:)
          E: 360K BIOS 8 PORT 360H UNIT 0 SEEK 6 COMPATICARD
          F: 1.44M BIOS 9 PORT 360H UNIT 1 SEEK 6 COMPATICARD

     Note that the "DEFAULT:" line indicates that drives connected to the
     primary controller are to use default parameters as determined by the
     configuration routines.


                               FOR COMPATICARD IV

     The CompatiCard IV can be used in place of a system's primary diskette
     controller to add four drive or 2.88M support to a system.  If the Com-
     patiCard IV is used as a primary with the on-board BIOS enabled and
     card address jumper J1 is set to the "A" position, a DISKETTE.CFG file
     should be unnecessary.





                                     Page 3




     However, if the CompatiCard IV is used as a secondary controller in
     addition to the normal system diskette controller, a DISKETTE.CFG file
     must be present.  In addition, if the on-board BIOS has been disabled,
     the following line must also be present in CONFIG.SYS:

               DEVICE=CC4BIOS.SYS

     The first step in determining values for drive configuration state-
     ments in DISKETTE.CFG is to ascertain the I/O port address of the Com-
     patiCard IV being used.  This can be done by inspecting jumper J1 on
     the CompatiCard IV:

                   J1 Setting    Port Address      BIOS Unit
                   ==========    ============      =========
                         A              3F0H           0 - 3
                         B              370H           4 - 7
                         C              360H           8 - 11
                         D              3E0H           12 - 14

     Next, the physical unit (UNIT keyword) must be determined from the way
     the diskette drives are connected to the CompatiCard.  If a drive or
     drives are connected to connector P2, the drive connected after the
     "twist" in the drive cable is physical unit 0; the drive connected
     before the "twist" at the end of the cable is physical unit 1.

     If a drive or drives are connected to connector P3 or P4, the drive
     connected after the "twist" in the drive cable is physical unit 2; the
     drive connected before the "twist" at the end of the cable is physical
     unit 3.

     To determine the BIOS unit of a drive, consult the Port Address table
     shown above.  Locate the line corresponding to your CompatiCard's J1
     setting and take the first number under the "BIOS Unit" column heading
     and add it to the physical unit number of the drive.

     For example, a Compaticard having J1 set to C, a drive connected to
     the straight end of the cable on connector P2 would have physical unit
     number 1 and BIOS unit 9.

     If factory settings for jumper J2 have been changed, DMA and INTERRUPT
     specifications must be included for the affected drives in
     DISKETTE.CFG.  If a DMA channel other than 2 has been set with jumper
     J2, this DMA channel must be included in the DISKETTE.CFG line for a
     drive.  Similarly, if the interrupt number set by jumper J2 is not In-
     terrupt 6, this information must be included  in DISKETTE.CFG.

     The COMPATICARD keyword must NOT be used with the CompatiCard IV.




                                     Page 4




     As an example, consider a CompatiCard IV being used as a secondary con-
     troller.  Jumper J1 is set to position "D" and there is one 1.44M at-
     tached.  The drive is connected after the "twist" in the cable to con-
     nector P2.  Factory settings for J2 have not been disturbed.  The
     added drive is known as G:.

     The following DISKETTE.CFG file would be used to describe the con-
     figuration to all Sydex products:

               DEFAULT:            (for primary drives A: and B:)
               G: 1.44M PORT 3E0H UNIT 0 BIOS 12 CHANGE

     Note that the CHANGE keyword is used to specify that a "diskette
     changed" status is available from the drive.  Normally, only 1.2M,
     1.44M and 2.88M drives support this feature.


                              IF YOU HAVE PROBLEMS

     If the drive activity light is not illuminated when the drive is ac-
     cessed, the port address, physical unit or BIOS unit has been incor-
     rectly specified.  If the drive can be accessed, but encounters data
     errors, the drive type is probably incorrect.   Note that the Com-
     patiCard II does not support single-speed 1.2M drives; a 1.2M drive
     must be described as "1.2M DUAL" to operate correctly.

     If SEEK has been specified for any drive, it should not be less than 6
     milliseconds, unless you are certain that the drive can operate at
     faster speeds.  Because older technology was used in 8" drives, a
     slower SEEK rate may need to be specified for them.





















                                     Page 5

```
{% endraw %}

## COPYQM.DOC

{% raw %}
```




	  Sydex


















				       CopyQM


		   Quick Multiple Format/Copy/Verify for Diskettes













						  Sydex, Inc.
						  P.O. Box 5700
						  Eugene, OR  97405
						  Voice:    (503)  683-6033
						  FAX: (503)  683-1622
						  Data:	    (503)  683-1385









				  Table of Contents


	    What is CopyQM?..............................................1

	    Requirements.................................................3

	    Getting Started..............................................5

	    Differences with Earlier Versions............................6

	    Memory Usage.................................................7

	    Diskette Image Files.........................................8

	    Copying Modes................................................9

	    Format Conversion............................................9

	    Inserting Serial Numbers....................................10

	    Copy Verification...........................................12

	    Audible Signals.............................................13

	    "Smart" Formatting..........................................13

	    Quick Mode Copying..........................................14

	    Display Color Set...........................................14

	    CopyQM Operation............................................15

	    Command Line Syntax.........................................18

	    Changing Operating Defaults.................................25

	    Status Messages.............................................26

	    Specifying a Diskette Configuration.........................31






				       CopyQM
		   A Quick Diskette Duplicator for Multiple Drives

				   Copyright 1992
				 Sydex, Incorporated
				    P.O. Box 5700
				  Eugene, OR 97405
				   (503) 683-6033


	  What is CopyQM?

	  CopyQM is a standalone utility to copy diskettes.  It is designed
	  with the object of copying  medium-to-large  quantities  of  dis-
	  kettes,  rather than making single copies.  CopyQM supports copy-
	  ing to more than one disk drive at a session and possesses a cor-
	  nucopia of options and features.

	  CopyQM will:

	       *    Read a master diskette, and make multiple copies of it.
		    Formatting,	 writing and verifying of copied  diskettes
		    is performed in a single pass.

	       *    Convert  between  diskette	formats.   That is,  a 360K
		    5.25" diskette can be converted to a 1.2M 5.25",  or  a
		    720K, 1.44M or 2.88M 3.5" diskette.

	       *    Store  information	that does not fit into conventional
		    memory in extended or expanded memory or on hard disk.

	       *    Operate on more than one  diskette	drive  at  a  time.
		    Only  one copy is written at a time,  however.   Drives
		    are serviced in consecutive "round robin" fashion.

	       *    Maintain images of diskettes as DOS	 hard  disk  files.
		    That  is,  a  "recording" can be made of a diskette for
		    subsequent "playback" to copies.






	  _________________________________________________________________

							    Introduction  1




	       *    Insert either ASCII or binary serial numbers into  dis-
		    kette data.	 An audit trail of serial numbers that have
		    been  written is maintained.   Up to 150 instances of a
		    serial number on a single diskette can be processed	 by
		    CopyQM.

	       *    Copy  non-DOS  diskette formats,  including Xenixtm and
		    CP/M.

	       *    Execute under DOS, Windowstm or the OS/2tm DOS environ-
		    ment.

	       *    Compare a number of copies against a master diskette or
		    image.

	  CopyQM will not:

	       *    Write copies on more  than	one  drive  simultaneously.
		    Hardware restrictions prevent CopyQM from doing this.

	       *    Copy proprietary (e.g.,  Amiga, Apple ][, Atari 820) or
		    copy-protected formats.

	       *    Copy individual files.   The smallest unit of  informa-
		    tion that CopyQM can deal with is an entire diskette.

	       *    Copy  one hard disk to another.   CopyQM is a diskette-
		    copying utility.

	       *    Copy files from a hard disk to a diskette.

	  CopyQM is fast--in most cases	 it  will  copy	 at  the  best-case
	  theoretical speed.  The primary limitation in any diskette opera-
	  tion	is  the	 time  that  it	 takes the diskette to complete one
	  revolution.	Our timings indicate that CopyQM can  format,  copy
	  and  verify  a  full	360K diskette in about 50 seconds.   Larger
	  capacity diskettes will, of course, require more time.







	  _________________________________________________________________

	  2  Introduction




	  Requirements

	  At a minimum,	 the following three files are necessary for opera-
	  tion of CopyQM:

	       COPYQM.COM  implements the primary functions needed for dis-
		    kette copying.

	       CQMENU.COM contains a menu interface and all on-line help.

	       VIEWCONF.COM is a utility to display the diskette configura-
		    tion information being used by CopyQM.

	  Other text files may be present which describe the  operation	 of
	  CopyQM,  but	the three files mentioned above must be present for
	  successful operation.

	  In almost all cases,	CopyQM will be able to determine  the  con-
	  figuration of a system without any sort of intervention.  Unusual
	  or special disk drive configurations,	 however,  may require that
	  the configuration be explicitly specified.   For more information
	  on how to construct a configuration file for all Sydex utilities,
	  consult  the	section	 titled Specifying a Diskette Configuration
	  near the end of this document.

	  CopyQM requires the following operating  environment	for  execu-
	  tion:

	       1.   An	IBM  PC-compatible  with an 8088,  80286,  80386 or
		    80486 processor.   Other system operating environments,
		    such as PC emulation on non-PC systems (e.g., Commodore
		    Amiga or Apple Macintosh) may work, but operation under
		    them is not supported by Sydex.

	       2.   PC-DOS or MS-DOS Version 3.2 or later.  CopyQM has been
		    tested  using a DOS session under IBM OS/2 Versions 1.3
		    and 2.0, but support of OS/2 operation is not supported
		    by	Sydex.	   Other  DOS-compatible  systems  such	 as
		    Novell's  DR-DOS  or The Software Link's PC-MOS may af-
		    ford successful operation,	but  have  not	been  fully
		    tested by Sydex.



	  _________________________________________________________________

							    Requirements  3




	       3.   At	least  256K  of	 available  base memory,  sometimes
		    referred to as "RAM".

	       4.   A hard disk with at least 2MB of free  space  for  tem-
		    porary files created by CopyQM.

	       5.   At least one diskette drive local to the system running
		    CopyQM.  Network diskette drives are not supported.

	  CopyQM does not require, but can make use of the following:

	       1.   Extended  memory  that  is managed by an XMS-compatible
		    memory  manager  such  as  Microsoft's   HIMEM.SYS   or
		    Quarterdeck's QEMM.

	       2.   Expanded memory,  or LIM (Lotus-Intel-Microsoft),  that
		    is managed by a a driver that is compliant with EMS 4.0
		    or later.

	       3.   Additional diskette adapters,  provided that BIOS-level
		    support  is	 furnished for them.   Sydex has tested the
		    Micro Solutions Compaticard I, II and IV adapters.

	  CopyQM will operate under Microsoft's Windowstm or  Quarterdeck's
	  Desqviewtm.  However, because diskette copying is a time-critical
	  application, performance under any multi-tasking environment will
	  be  degraded	somewhat.    The  actual  amount of the degradation
	  depends on several factors,  including the scheduling	 algorithms
	  used by the multitasking software.

	  Executing  more than one copy of CopyQM under control of a multi-
	  tasking executive,  such as Windows is not recommended.    Severe
	  performance  degradation  will  result.   If two sets of diskette
	  copies are required,	running two CopyQM  sessions  consecutively
	  will	result	in significantly better performance than attempting
	  to execute the sessions concurrently.

	  CopyQM will support a total configuration of up to eight diskette
	  drives.   A CopyQM session can make use of up to  seven  diskette
	  drives--one for reading and six for writing.




	  _________________________________________________________________

	  4  Requirements




	  Getting Started

	  To  install  CopyQM from a diskette to a hard disk,  copy all ex-
	  ecutable .COM files to your selected hard disk directory.   As an
	  example,  suppose  that  the	CopyQM distribution diskette is in-
	  serted in diskette drive A: and it is to  be	installed  on  hard
	  drive	 D: in the subdirectory MYCOPY.	  The following DOS command
	  can be used:

		    COPY A:*.COM D:\MYCOPY

	  If CopyQM is to be used when logged  in  at  any  directory,	the
	  directory  and  drive used for CopyQM's files must be included in
	  the DOS PATH environment variable.   For details on specifying  a
	  command PATH, consult the DOS reference manual.

	  In most cases, this is all that will be required to get CopyQM up
	  and running.

	  First-time users should execute CopyQM through the menu interface
	  furnished by CQMENU.	Entering the following command at a DOS com-
	  mand prompt will initiate execution of CQMENU:

		    CQMENU

	  CQMENU  takes the menu selections made and translates them into a
	  command line for CopyQM.   After all selections have	been  made,
	  COPYQM.COM is located and read into memory overlaying CQMENU.

	  CQMENU  also	contains  a  full on-line help facility for CopyQM.
	  Help related to the current selected menu item can be obtained by
	  pressing  F1.	   In  addition,  a  general  help  facility  which
	  describes command-line syntax and configuration file setup can be
	  displayed by pressing F1 a second time.

	  All  of the features of CopyQM are not available through CQMENU's
	  interface.  Some of the more obscure facilities,  such as serial-
	  number  insertion,  are  accessible  only through the DOS command
	  line interface to CopyQM.





	  _________________________________________________________________

							 Getting Started  5




	  Differences with Earlier Versions

	  Users of versions 1.x and 2.x of CopyQM  will	 notice	 many  dif-
	  ferences in Version 3.  A few of the more significant ones are as
	  follows:

	       1.   Separate  Source  for Reading.   CopyQM divides copying
		    activity up into two operations; reading the master dis-
		    kette and writing the copies.  If a source drive is not
		    explicitly specified,  the first drive in the  list	 of
		    diskette drives will be used as the source drive.  Writ-
		    ing,  however,  will  commence with the first drive and
		    not with the second drive as was the case  in  previous
		    versions.

	       2.   Sequence of Operations.  The copy count is prompted for
		    after the master diskette has been read, not before.

	       3.   Double-density  80	track  5.25"  Format Not Supported.
		    Because version 3 of CopyQM uses  BIOS-level  interface
		    routines, the 80-track (720K) 5.25" double-density for-
		    mat is no longer supported on a 1.2M drive.

	       4.   Overflow Specification.  Version 3 automatically deter-
		    mines  the availability of extended and expanded memory
		    or hard disk for overflow.	 Use of a specific type	 of
		    memory  can	 be  disabled  by  using the NOEMS or NOXMS
		    command-line options.   Hard disk overflow file  place-
		    ment  can  be specified by means of the CQTEMP environ-
		    ment variable.

	       5.   Serial Number Support.   Version 3's support of  serial
		    numbering  is  more	 flexible  than	 pervious versions.
		    However,  the command syntax and operation is  substan-
		    tially different.

	       6.   Status Updating.   Version 3 updates drive status after
		    every diskette;  previous versions updated drive status
		    after every track.	Under Version 3, a drive will main-
		    tain  the  same status until a disk has been processed.
		    This can be changed with the  STATUS  command-line	op-
		    tion, however.


	  _________________________________________________________________

	  6  Differences




	       7.   Configuration  Specification.   Version 3 maintains all
		    configuration  information	in  an	ASCII  file  called
		    DISKETTE.CFG.   Previous versions maintained configura-
		    tion data by having it "patched"  into  the	 executable
		    files by a configuration program.

	  This	represents  only  a  partial  list;  there  are	 many other
	  changes, refinements and additions to CopyQM.


	  Memory Usage

	  CopyQM reads a master diskette or image file in one uninterrupted
	  pass.	  Because most diskette formats can hold more data than can
	  be  contained	 in conventional memory on a system,  CopyQM uses a
	  variety of methods to store the "overflow" data:

	       1.   As much data as can be contained in conventional memory
		    is first read.  Sufficient memory must be available for
		    CopyQM execution; this can be as little as 256K.

	       2.   A test for extended memory is then performed.  Extended
		    memory, if it is to be used by CopyQM,  must be managed
		    by	 a   high  memory  manager,   such  as	Microsoft's
		    HIMEM.SYS.	 Unmanaged high memory will not be used	 by
		    CopyQM.    If  the	NOXMS  command line option has been
		    specified, no check is made for extended memory.

	       3.   After extended memory has been filled,  or if  extended
		    memory could not be located, a test for expanded memory
		    is performed.  Expanded memory, or EMS, must conform to
		    the Lotus/Intel/Microsoft Expanded Memory Specification
		    level  4.0	or  later.    If  the NOEMS option has been
		    specified on the command line, no check is made for ex-
		    panded memory.

	       4.   Finally,  after expanded and extended memory have  been
		    used,      a  search  for an environment variable named
		    CQTEMP is performed.  If found,  it is taken to specify
		    a  drive and directory on which a temporary file can be
		    created.   If the CQTEMP variable cannot be located,  a
		    search  for	 an environment variable named TEMP is per-
		    formed and the drive and path specified by it is  used.

	  _________________________________________________________________

							     Differences  7




		    If	neither	 environment  variable is found,  the first
		    hard disk partition is used that has enough free  space
		    available for the temporary file.

	       5.   If	sufficient  memory or disk space cannot be located,
		    the master diskette or image file is rejected by CopyQM
		    and a NOT ENOUGH MEMORY error message is displayed.

	  When converting between formats,  CopyQM writes a temporary image
	  file and then reads it back into memory.   A sufficient amount of
	  hard disk space must be available for the  temporary	image  file
	  and any overflow storage required for the master diskette image.


	  Diskette Image Files

	  CopyQM has the ability to save the information contained on a dis-
	  kette	 in  the  form	of a hard disk file called a diskette image
	  file.	 Diskette image files contain all of the data that would be
	  processed in the course of a diskette copy,  along with other in-
	  formation necessary to construct a copy.  After an image file has
	  been created, it can be read later by CopyQM to produce copies of
	  the original master diskette.

	  Diskette  image  files  are  unlike  "archive"  files in that in-
	  dividual diskette files cannot be manipulated.    However,  image
	  files of non-DOS diskettes can be created.

	  When CopyQM options are called out using the DOS command line in-
	  terface, the RECORD and PLAYBACK options respectively are used to
	  specify creation and reading of diskette image files.

	  Although a limited amount of data compression is performed within
	  a  diskette  image  file,  it is recommended that sufficient hard
	  disk space be reserved equal to the capacity of the  master  dis-
	  kette when diskette image files are created.








	  _________________________________________________________________

	  8  Memory Usage




	  Copying Modes

	  CopyQM contains logic to optimize copying of DOS diskettes.  When
	  a DOS diskette is processed by CopyQM the master diskette is read
	  only	as  far	 as  the  highest  cylinder containing active data.
	  While this mode ensures all active data is copied, areas of a dis-
	  kette which contain erased data may not  be  copied.	  Normally,
	  this presents no problem and the result is a fully functional dis-
	  kette.    However,  some  copy-protected  DOS products may record
	  their protection information as erased data.

	  When the DOS utility DISKCOMP is used to compare  a  master  dis-
	  kette with a copy, it may report mismatches when erased data from
	  the  master  diskette is compared with the corresponding areas on
	  the copy.

	  If all areas of a diskette are to be copied, "blind" mode copying
	  may be specified.  In this mode of operation, CopyQM does not at-
	  tempt to interpret the data being copied and no  "shortcuts"	are
	  taken.    Usually,  "blind" mode is specified when a diskette was
	  not created by a DOS system.	 However,  "blind" mode may also be
	  used	to DOS diskettes when it is desired that all data contained
	  on a master diskette be transferred to the copies. However,  note
	  that format conversion,  described below, operates differently in
	  "blind" mode.

	  The DOS command line option for CopyQM is BLIND.

	  Format Conversion

	  CopyQM can be used to translate one diskette format  to  another.
	  For  example,	 a  360K  5.25" diskette can be converted to a 3.5"
	  1.44M diskette.   This conversion can be specified  by  a  CQMENU
	  menu choice or by the CopyQM CONVERT command-line option.

	  When	DOS diskettes are being copied,	 CopyQM adjusts track sizes
	  and File Allocation Table (FAT) lengths and updates the  informa-
	  tion contained in the boot sector.   The resulting combination of
	  active data and new system tables must  fit  on  the	new  format
	  specified.   Thus,  a 1.44M diskette containing less than 360K of
	  data can be copied to a 360K diskette.



	  _________________________________________________________________

							   Copying Modes  9




	  When non-DOS diskettes are being copied in "blind" mode,  conver-
	  sion is performed differently.   Data from the master diskette is
	  "re-packed" to fit the new track size;  no other adjustments	are
	  performed.

	  A  special  case  occurs  when  conversion of a DOS 1.2M or 1.44M
	  master to a 2.88M format is specified.  Because of limitations in
	  the conversion process,  the result will exhibit  only  2.04M	 of
	  available data space, rather than the entire 2.88M.

	  CopyQM Version 3 also supports non-conversion copies between some
	  formats.    This undocumented capability in previous versions al-
	  lows copying of some smaller formats to larger ones  without	any
	  processing of the data.   For example,  a 1.2M 5.25" diskette can
	  be copied to a 1.44M 3.5" diskette.   The result is a  3.5"  1.2M
	  diskette.


	  Inserting Serial Numbers

	  Serial  numbering  of	 copies is a capability available only from
	  DOS command line operation of CopyQM.	   The operation of  CopyQM
	  Version  3's  serial numbering differs substantially from earlier
	  versions in specification and capabilities.

	  A serial number is a group of characters present on a master dis-
	  kette which is altered each time a copy is produced.	 Two  types
	  of serial numbers are available, ASCII and binary.  The two types
	  differ primarily in the manner in which they are incremented.

	  An  ASCII  serial  number  is a group of printable or displayable
	  characters containing at least one digit between 0 and 9.  Before
	  CopyQM produces a copy, all digits contained in the serial number
	  are taken as a simple decimal number.	  Any intervening non-digit
	  characters are ignored.  Each time a copy is written, the decimal
	  number  formed  by  these digits is incremented by one.   For ex-
	  ample, the serial number "AB1C2D3" would be incremented on succes-
	  sive copies as:






	  _________________________________________________________________

	  10  Format Conversion




				       AB1C2D4
				       AB1C2D5
					 ...
				       AB1C3D0
					 ...
				       AB9C9D9

	  Note that non-digits are not affected.   After the highest number
	  that	can  be	 represented by the digits in the serial number has
	  been reached, the process starts over with the number zero.

	  A binary serial number is treated as a group of bytes,  in  Intel
	  "little-endian" representation.   That is,  the least significant
	  bytes appear to the left of,	or before,  more significant bytes.
	  Binary serial numbers can be of any length up to 127 bytes.	Bi-
	  nary	numbers	 are represented by hexadecimal numbers (digits 0-9
	  and letter A-F).  However, binary serial numbers are specified in
	  their normal "big-endian" mode.  That is,  more significant bytes
	  appear to the left of less significant bytes.	  Thus,	 the number
	  specified by 00 00 20 would be stored in successive copies as:

				      21 00 00
				      22 00 00
					 ...
				      00 01 00
					 ...
				      FF FF FF

	  Serial numbers are recorded in a user-specified ASCII	 file,	one
	  serial number per line.  CopyQM updates this file at the end of a
	  session to by appending the serial numbers written during the ses-
	  sion.	  The starting serial number for a CopyQM session is always
	  one greater than the last serial number in the  file.	   For	ex-
	  ample,  to start serial numbering with A0001,	 a serial number of
	  A0000 must be the last number in the serial number file.

	  Placement of serial numbers is done by specifying an ASCII search
	  string on the CopyQM command line.   Each  time  this	 string	 is
	  detected in data read from the master diskette, it is replaced by
	  a serial number unique to the copy being made.   Up to 150 occur-
	  rences of a serial number on a single diskette can  be  processed
	  by CopyQM.   A serial number can cross sector boundaries, but may
	  not straddle a track boundary.

	  _________________________________________________________________

						       Serial Numbering	 11





	  The length of a serial number is determined by the length of	the
	  search string, not by the length of the serial number represented
	  in the serial number file.

	  When	a  set	of  diskettes are being copied,	 that is,  when the
	  REPEAT option has been specified, the same serial numbers will be
	  inserted into each set of diskettes.	That is, the serial number-
	  ing process will be restarted when the master for each  group	 of
	  copies is read.

	  For  information on command line parameters for serial numbering,
	  refer to the section on CopyQM command line syntax.


	  Copy Verification

	  Several methods of checking the accuracy of data are	offered	 by
	  CopyQM.    CQMENU  offers  a menu selection for each verification
	  type.

	  By default, CopyQM checks the part of a diskette known to contain
	  active data for readability by reading the copy diskette and dis-
	  carding the data.   The part of the copy  not	 containing  active
	  data	is  not read.	This corresponds to the VERIFY=DATA command
	  line option.

	  An entire diskette can be checked for readability  by	 specifying
	  the  VERIFY=ALL  option on CopyQM's command line.   Note that the
	  accuracy of  the  copied  data  is  not  checked,  but  only	the
	  readability of the data.

	  Read-back   checks  can  be  completely  disabled  by	 specifying
	  VERIFY=NONE.	 This option is usually selected when the speed	 of
	  the  copy  operation	is  more important than the accuracy of the
	  copy.

	  A byte-by-byte compare can also be specified by use of  the  COM-
	  PARE	command-line  option.	Comparison is performed only on the
	  part of the diskette containing active data.	 Inactive areas can
	  be checked for readability only.



	  _________________________________________________________________

	  12  Serial Numbering




	  An  option  not  covered  by	a CQMENU selection alters the basic
	  operation of CopyQM.	 If the CHECK option is	 specified  on	the
	  CopyQM  command line,	 copies are not formatted or written.	In-
	  stead each copy is compared with the data from  the  master  dis-
	  kette.    This  option is useful when the validity of a number of
	  copies needs to be checked against a master standard copy.


	  Audible Signals

	  CopyQM provides several audible "cues" during its operation:

	       1.   A high-pitched "warble" that indicates that	 an  opera-
		    tion  has  been  successfully completed.   This tone is
		    sounded after a master diskette has	 been  read,  after
		    after  each	 copy has been written,	 and after keyboard
		    entries have been selected.

	       2.   A low-pitched "beep" that signals an  error	 condition.
		    This  tone	is  sounded after unsuccessful disk read or
		    write operations,  and when an erroneous keyboard entry
		    is made.

	       3.   A medium-pitched "warble" that signals a need for atten-
		    tion.    This  tone can be selected as an option and is
		    sounded after intervals of 20  seconds  of	inactivity.
		    The command line option for this tone is NAG.

	  All audible signaling may be disabled by CQMENU menu selection or
	  by the SILENT command line option.


	  "Smart" Formatting

	  By  default,	CopyQM	formats	 all  copies  before  writing data.
	  However,  it is possible to  direct  CopyQM  to  check  for  pre-
	  formatted  media  before writing.   This option is available by a
	  CQMENU menu choice, or by the SMART command line option.






	  _________________________________________________________________

							   Verification	 13




	  "Smart" mode attempts to write data without  first  formatting  a
	  copy.	  If writing and verification succeed, the inactive area on
	  the copy is skipped.	However, if an error is detected while writ-
	  ing active data,  all remaining tracks on the diskette  are  for-
	  matted before being written.

	  "Smart"  mode	 can result in substantial time savings over normal
	  format-then-write operation.


	  Quick Mode Copying

	  When copies of partially full DOS  diskettes	are  made,  a  con-
	  siderable increase in copying speed can be obtained by specifying
	  the  QUICK  command-line  option.   When this option is selected,
	  only the part of the master diskette that contains active data is
	  copied or formatted.

	  However, when using unformatted blank diskettes,  it is important
	  to  realize  that  tracks at the end of each diskette will not be
	  formatted.   This may make it impossible for users of the  copies
	  to  successfully  write to the copies or duplicate them using the
	  DOS DISKCOPY utility.

	  This option is not available from CQMENU.


	  Display Color Set

	  In some instances, it may be desirable for CopyQM to show all dis-
	  plays with a black-and-white (monochrome) color  palette.    This
	  may be specified by means of the MONO command line option.   This
	  option is not available from CQMENU.

	  A monochrome color set is particularly useful when portable  sys-
	  tems with liquid crystal displays (LCD) are used.   Many of these
	  systems support color as  shades  of	gray,  rather  than  actual
	  colors.  A monochrome color set will be found to be more readable
	  in this case.





	  _________________________________________________________________

	  14  "Smart" Formatting




	  CopyQM Operation

	  Once	menu  selections  have been made from CQMENU or the command
	  line for CopyQM has been entered, CopyQM begins execution.  Opera-
	  tion of CopyQM is divided into two phases, reading the master dis-
	  kette or image file,	and writing the copies	or  diskette  image
	  file.

	  Because  CopyQM  continuously	 accesses diskette drives to obtain
	  their operating status, diskette changes are permitted when drive
	  access indicators are illuminated.  In addition,  since CopyQM is
	  sensitive to drive changes,  it may be necessary to remove a dis-
	  kette and then re-insert it into the same drive  to  indicate	 to
	  CopyQM that a change has occurred.

	  ----------------------------------------------------------------

			  CopyQM Version 3.00 (Jul 00 1992)
			       Copyright 1992 by Sydex
				Press ESCape to quit


	   +----------+
	   | ===A:=== |		READING
	   +----------+


				   Sector size:	   512
				   Sectors/track:  9
				   Sides:	   2
				   Density:	   Low
				   Data cylinders: 54
				   Volume label:   ** NONE **






	   #####################+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

			     Figure 1:	Reading display


	  _________________________________________________________________

						       CopyQM Operation	 15




	  When	CopyQM	reads a master diskette,  a display similar to that
	  shown in Figure 1 appears.   Note that an icon  representing	the
	  drive	 currently being accessed is shown along with the status of
	  the current operation appearing to the right of it.	If the	ES-
	  Cape key is pressed before CopyQM is able to read the master dis-
	  kette, execution terminates and CopyQM exits to DOS.

	  A  summary of information relating to the diskette is also shown.
	  Sector  size	indicates  the	size  in  bytes	 of  each   sector.
	  Sectors/track	 specifies the number of sectors that occur on each
	  track.  Sides reports either 1 for single-sided formats, or 2 for
	  double-sided.	  Density can show values of low for double-density
	  (360K and 720K),  high for high density (1.2M and 1.44M),  or ex-
	  tended for 2.88M media.   Data cylinders indicates the number	 of
	  cylinders containing active data.

	  Volume  label shows the DOS volume label name or ** NONE ** if no
	  volume label can be found.   The bar graph at the bottom  of	the
	  display shows the proportion of the total diskette space that has
	  been processed.

	  A  similar  display  is  shown  when	a  diskette  image  file is
	  processed.

	  If creation of a diskette image file has been requested, the file
	  is written after the diskette has been completed.  If the conver-
	  sion option has been specified,  a temporary diskette image  file
	  will	be  written  and the requested conversion will be performed
	  while the image file is read back into memory.

	  If copying to diskettes has been requested,  the following prompt
	  will appear in the lower part of the display:

		       How many copies? (Hit ESCape to exit) -

	  Between  1  and 9,999 copies may be requested;  after the desired
	  number is entered,  the Enter key is pressed.	  If the ESCape key
	  is pressed instead, no diskettes will be written and a new master
	  diskette will be requested.  If an invalid number or digit is en-
	  tered, an error tone is sounded and the number is not accepted.




	  _________________________________________________________________

	  16  CopyQM Operation




	  After	 the  master  diskette	or  image  file	 has  been read and
	  processed, CopyQM begins the writing phase.  A display similar to
	  that shown in Figure 2 appears.

	  Up to six drives can be shown	 on  the  writing  status  display.
	  Note that only those drives which support the diskette format cur-
	  rently  being copied are shown.   For example,  if a high-density
	  5.25" (1.2M) master  diskette  were  being  copied,  only  drives
	  capable of high-density support would be displayed.

	  ----------------------------------------------------------------
			  CopyQM Version 3.00 (Jul 00 1992)
			       Copyright 1992 by Sydex
				Press ESCape to quit

	    0 of 999 Copies Done		 Volume Label:	** NONE **

	   +----------+
	   |o===A:=== |	      WRITING
	   +----------+



	   +----------+
	   | ===B:=== |	     INSERT BLANK DISKETTE
	   +----------+



	   +----------+
	   | ===I:=== |	     INSERT BLANK DISKETTE
	   +----------+




	   #####################+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

			 Figure 2:  A Sample Writing Display





	  _________________________________________________________________

						       CopyQM Operation	 17




	  When	more  than one drive is being used,  it is important to ob-
	  serve that drive status messages are updated	between	 diskettes,
	  not during the copying of diskettes.	 Thus, the status displayed
	  for non-active drives will not be updated until the diskette cur-
	  rently being written has been completed.

	  For example,	the message INSERT BLANK DISKETTE will	persist	 on
	  drives  not  currently  being accessed after blank diskettes have
	  been inserted until the current diskette being written  has  been
	  completed.	CopyQM can be set to status all drives at intervals
	  of a few cylinders by means of the STATUS  command  line  option,
	  but performance will be somewhat degraded.

	  The  bar  graph  displayed at the bottom of the screen tracks the
	  progress of the copy operation.  A solid,  red bar indicates that
	  active data is being transferred;  a hatched, green bar indicates
	  that an inactive area is being formatted.

	  When all requested copies have been completed, the following mes-
	  sage appears:

		    All copies done.  Press any key to continue...

	  If the ESCape key is pressed before all copies have been written,
	  the following message appears:

		      ESCape hit.  Press any key to continue...

	  In either case,  CopyQM requests the next master diskette after a
	  key has been pressed.


	  Command Line Syntax

	  Not  all  CopyQM options are available via the CQMENU menu inter-
	  face.	 Several options can be selected only by means of a command
	  line invocation of CopyQM.

	  The general syntax of the CopyQM command line is:

			    COPYQM <drive list> <options>



	  _________________________________________________________________

	  18  CopyQM Operation




	  <Drive list> specifies the diskette drives used to  write  copies
	  of the  master diskette.   A drive is specified by a drive letter
	  followed by a	 colon.	  At least one drive must be  specified	 if
	  diskette  copies  are	 to  be	 made.	  A write drive need not be
	  specified if a diskette image file is to be generated.   If  more
	  than	one  drive  is specified,  the first copy is written in the
	  first drive named, the second in  the second drive and so on.

	  If no drive is explicitly named as  a	 source	   drive  (see	the
	  SOURCE option,  below),  diskettes are read in the first destina-
	  tion drive named.

	  <Options> refers to a list of special terms.	 A term may consist
	  of a single  word or it may require a value, denoted by following
	  the word with an equal  sign (=).   No spaces are allowed between
	  the word,  the equal sign,  and the  assigned value.	  In  cases
	  where a value can contain spaces or other special  characters, it
	  may be enclosed in double quotation marks (").

	  In most  cases, the keyword in a term can be abbreviated.  In the
	  following   discussion of options,  the minimum number of letters
	  that can be used to  denote a word are given after the word.

	  CopyQM recognizes the following options:

	       BLIND (BL) specifies that CopyQM may  not  assume  that	the
		    master  diskette is a DOS diskette.	  No interpretation
		    of the diskette's data is attempted;  the  diskette  is
		    copied in its entirety.   Note that the CONVERT options
		    functions differently when BLIND is specified.

	       CHECK (CH) specifies that no writing of diskettes is to take
		    place; rather, diskettes are to be compared against the
		    master.   Essentially,  formatting and writing are dis-
		    abled, while COMPARE-type verification is enabled.

	       COMPARE (COM) specifies that verification is to be performed
		    by	comparing  the	copied data with data read from the
		    master diskette.   Normally,  verification	checks	for
		    readability of data, not for accuracy.




	  _________________________________________________________________

						    Command Line Syntax	 19




	       CONVERT	(CON)  requires	 one of the following values: 360K,
		    720K,  1.2M,  1.44M or 2.88M.   It specifies  that	the
		    source  data is to be converted to the specified format
		    before writing.   When DOS diskettes are being  copied,
		    the	 boot sector and File Allocation Tables are altered
		    to conform to the new format.   When BLIND mode copying
		    is	performed,  source tracks are simply "re-packed" to
		    the indicated format and no table modification is  per-
		    formed.    Thus,  CON=360K specifies that data is to be
		    converted to a nine-sector 360K format.

	       COUNT (COU) requires a numeric value and specifies the  num-
		    ber of copies to be made of a single master.  This term
		    is	useful	when  the  number  of  copies prompt is not
		    desired.   COUNT=3 specifies that three copies  of	the
		    master are to be produced.

	       LOGO specifies that the Sydex name and product logo displays
		    are	 to  be shown on startup.   This option has meaning
		    only on registered CopyQM versions;	 evaluation  copies
		    always display the Sydex and CopyQM logos.

	       MONO  (MO)  specifies  that  a  white-on-black  color scheme
		    should be used in all displays.   Normally a monochrome
		    display  adapter  is automatically detected,  but there
		    may be  instances  where  a	 monochrome  color  set	 is
		    desired.

	       NAG  specifies  that  a distinctive tone is sounded after 20
		    seconds of inactivity.    This  option  is	ignored	 if
		    SILENT is also specified.

	       NOCOMPRESS  (NOC)  specifies that data compression is not to
		    be performed on image files.  This option can make writ-
		    ing of image files faster at the expense of	 file  size
		    on very slow machines;  little time is saved when read-
		    ing a non-compressed file.

	       NOEMS (NOE) specifies that  expanded  memory  (LIM  or  EMM)
		    should  not	 automatically	be  used  for overflow data
		    storage.   When NOEMS is specified,	 expanded memory is
		    assumed not to exist.


	  _________________________________________________________________

	  20  Command Line Syntax




	       NOPAUSE	(NOP)  specifies that CopyQM should not pause for a
		    keystroke after the last copy of a set is written.	Nor-
		    mally CopyQM pauses to allow the  status  of  the  last
		    copy to be evaluated.

	       NOXMS  (NOX)  specifies	that extended memory (as managed by
		    HIMEM.SYS)	should	not  be	 used  for  overflow   data
		    storage.  If NOXMS is specified, extended memory is as-
		    sumed not to be present.

	       PLAYBACK	 (PL) requires a file name as a value and indicates
		    that the master data is to be read from an image  file,
		    rather than from a diskette.  The image file must previ-
		    ously  have been created by CopyQM using the RECORD op-
		    tion.  "Wildcard" characters of "*" and "?" may be used
		    to specify more than one image file; each image file is
		    read in succession and the data used to create a set of
		    diskette copies.  For example,

				     PLAYBACK=MYFILE

		    indicates that image data is to be taken from the  file
		    MYFILE.

	       PROTECT	(PR)  specifies	 that  the  master diskette must be
		    write protected before it will be read.    This  option
		    ensures  that  master  diskettes  aren't  confused with
		    blank diskettes.

	       QUICK (Q) specifies that the area of a  copy  diskette  that
		    lies  after	 the  last  track used for data not be for-
		    matted.   Normally,	 unused	 tracks	 are  formatted	 by
		    CopyQM.   This option can result in a great increase in
		    speed if the  master  diskette  contains  little  data.
		    There  are	drawbacks to this option that are discussed
		    in the section on Quick Mode copying.

	       RECORD (REC) requires a file name and  indicates	 that  data
		    read  from	the  master  diskette be written to a file,
		    rather than to diskette copies.  This image file can be
		    used later with the PLAYBACK option to create  diskette
		    copies  without  first reading a master diskette.	The
		    "wildcard" character "?" can be used in the	 file  name

	  _________________________________________________________________

						    Command Line Syntax	 21




		    and is processed by CopyQM as follows: The file name is
		    scanned  from right to left,  each occurrence of "?" is
		    replaced by the digit "0".	 Before each image file	 is
		    written, the number formed by the substituted digits is
		    incremented by one.	 For example, a name specified by

				      RECORD=A?B?C?D

		    would  result  in  the  creation  of  image files named
		    A0B0C1D, A0B0C2D and so on.

	       REPEAT (REP) specifies that the copy  count  should  be	re-
		    quested  only once and taken as the number of copies to
		    be made of all master diskettes.   This  option  allows
		    quick duplication of a set of diskettes.  When perform-
		    ing serial numbering, each set of diskettes will be num-
		    bered  with	 the  same  set	 of serial numbers as other
		    sets.

	       RETRIES (RET) requires a numeric value and specifies the num-
		    ber of times  unsuccessful	diskette  write	 operations
		    should  be repeated until the diskette being written to
		    is considered to be unusable.  Normally,  three retries
		    are performed.  Thus, specify RETRIES=10 specifies that
		    failed  write  operations  will  be	 repeated  up to 10
		    times.

	       SIDES (SID) requires a numeric value of either 1 or 2 and is
		    used in conjunction with BLIND to specify the number of
		    sides to be copied.	 Normally CopyQM checks for data on
		    both sides of diskette,  SIDES=1 can be used  to  force
		    single-sided copying.

	       SILENT (SIL) disables all audible tone production by CopyQM.
		    Normally,  CopyQM  produces tones indicating success or
		    failure each time a diskette is read or written.

	       SMART (SM) indicates that CopyQM is to assume that diskettes
		    used for copying are pre-formatted.	  If no	 format	 is
		    detected,  or a error in writing occurs,  the remainder
		    of the diskette is formatted by CopyQM.



	  _________________________________________________________________

	  22  Command Line Syntax




	       SNFILE (minimum SNF),  SNPATTERN (minimum  SNP)	and  SNTYPE
		    (minimum  SNT)  all require values and are used to per-
		    form insertion of serial numbers  on  diskette  copies.
		    SNFILE is used to specify a text file containing a list
		    of serial numbers,	one per line.  SNPATTERN is used to
		    specify an ASCII string for which to search; each occur-
		    rence of the  pattern  is  replaced	 with  the  current
		    serial number.  SNTYPE may be given the value BINARY or
		    ASCII  (default)  and  specifies  how the serial number
		    file is to be interpreted.	 Up to 150 occurrences of a
		    serial  number  on	a  single  diskette is supported by
		    CopyQM.  For example, the terms:

		       SNFILE=MYSNS SNPATTERN="XXXXXX" SNTYPE=ASCII

		    specify that the starting serial number is to be  taken
		    from  the  file  "MYSNS"  and  that	 all occurrences of
		    "XXXXXX" are to be replaced with ASCII serial  numbers.
		    After  a  set of copies has been completed,	 the serial
		    numbers that have been  written  are  appended  to	the
		    serial number file.

	       SOURCE  (SO)  specifies	the  drive  to	be used to read the
		    master diskette.   This drive may or may not be one	 of
		    the	 drives	 used  to  write copies.   Thus,  SOURCE=A:
		    specifies that master diskettes are to be read in drive
		    A:.

	       STATUS (ST) requires a numeric  value  which  specifies	the
		    period  between status checks on other drives performed
		    during writing.   The default is to status between dis-
		    kettes only.   For example,	 setting STATUS=8 specifies
		    that statusing will occur every 8 cylinders while writ-
		    ing a copy.	  There is a degradation in performance	 if
		    this  option is specified that depends on the number of
		    diskette drives in use and the frequency of statusing.

	       TRACKS (TR) requires a numeric value and is used in conjunc-
		    tion with BLIND to specify the number of  cylinders	 to
		    be	copied.	  Normally,  this value is either 40 or 80,
		    depending on the diskette format and  drive	 type,	but



	  _________________________________________________________________

						    Command Line Syntax	 23




		    some  special  formats may require non-standard values.
		    Thus,  TRACKS=77 specifies that 77	tracks	are  to	 be
		    copied.

	       VERIFY	(V)   specifies	 how  copies  are  to  be  checked.
		    VERIFY=DATA is the default and indicates  that  written
		    data should be tested for readability;  any unused area
		    of copies are not checked.	 VERIFY=ALL specifies  that
		    the	 entire	 diskette is to be checked for readability.
		    VERIFY=NONE specifies that no  checks  for	readability
		    are	 to  be	 made.	  For  a  variation  on the type of
		    verification performed, consult the COMPARE keyword.

	  Here are a few examples of CopyQM command lines:

	       COPYQM A:

	       Read master diskettes and write copies using drive A:.

	       COPYQM SOURCE=B: I: NAG V=ALL

	       Read master diskettes in drive B:, write copies in drive I:.
	       Performs readability verification over the entire  diskette.
	       Enables 20-second inactivity audible alert.

	       COPYQM SOURCE=G: RECORD=C:\IMAGES\MYFILE BLIND

	       Read  master  diskette in drive G: in "blind" mode,  write a
	       diskette image file called MYFILE in the	 \IMAGES  subdirec-
	       tory of drive C:.

	       COPYQM A: PLAY=F:\TEST* CONV=1.44M COMPARE

	       Read diskette images from drive F:, using files matching the
	       file  specification  TEST*.    Convert  the images to 1.44M,
	       write copies on drive A:,  verify by comparing data from the
	       copies with the master.

	       COPYQM A: B: PL=C:RELEASE SNFILE=C:SERIALS SNPAT="XXXX"





	  _________________________________________________________________

	  24  Command Line Syntax




	       Read a diskette image file on drive C: called RELEASE, write
	       copies on drives A: and B:,  insert 4-byte ASCII serial num-
	       bers in the place of the	 ASCII	pattern	 "XXXX"	 using	the
	       serial number file C:SERIALS.

	       COPYQM A: CHECK

	       Read master diskettes in drive A:,  verify, but do not write
	       the data on copies using drive A:.


	  Changing Operating Defaults

	  CopyQM standard operating defaults can be  changed  by  assigning
	  command  line	 option	 values to the environment variable COPYQM.
	  For example,	to set the 20 second inactivity alarm as a default,
	  the following DOS SET statement could be used:

				   SET COPYQM=NAG

	  However,  one	 problem arises--the DOS SET command does not allow
	  the equal (=) sign within value strings.    To  get  around  this
	  problem,  CopyQM allows substitution of the equal sign by a semi-
	  colon (;).  For example:

				SET COPYQM=VERIFY;ALL

	  Any options permitted on the CopyQM command line can be  assigned
	  to the COPYQM environment variable.	If a conflict aries between
	  the options given in the COPYQM environment  variable	 and  those
	  given on the CopyQM command line, the command line variable takes
	  precedence.  For example,

				SET COPYQM=VERIFY;ALL
				COPYQM A: VERIFY=NONE

	  would result in VERIFY=NONE operation.

	  An  environment  variable also controls the placement of the hard
	  disk overflow file.	Consult the section titled Memory Usage for
	  details.



	  _________________________________________________________________

						    Command Line Syntax	 25




	  Status Messages

	  CopyQM  displays the following status messages during the process
	  of reading and writing diskettes:

	       DRIVE NOT READY

	       Meaning:	 The drive has become not ready during	reading	 or
	       writing.	   This	 is usually the result of opening the drive
	       door or removing the diskette from the drive.   The  current
	       read  or	 write	operation  is canceled and the operation is
	       retried from its beginning.

				  INSERT MASTER DISKETTE

	       Meaning:	 CopyQM is awaiting insertion of  the  master  dis-
	       kette.	 If  there  is	a  diskette already in the diskette
	       drive,  the diskette should be removed and re-inserted  into
	       the  drive  to signal that the correct diskette has been in-
	       serted.


				  INSERT BLANK DISKETTE

	       Meaning:	 CopyQM is awaiting insertion  of  the	next  blank
	       copy  diskette.	 This message persists after the blank dis-
	       kette has been inserted and is changed only when writing has
	       begun on the drive.


				       INSERT COPY

	       Meaning:	 This message occurs only when CopyQM is being	run
	       with  the  CHECK	 option.    The	 next  diskette	 copy to be
	       verified should be inserted.   This message is  not  removed
	       until verification of the copy has actually begun.


					ANALYZING

	       Meaning:	   CopyQM has begun reading the master diskette and
	       is evaluating its structure and contents.


	  _________________________________________________________________

	  26  Status Messages





					 READING

	       Meaning:	 The structure of  the	master	diskette  has  been
	       determined and data is being read and stored for later writ-
	       ing.


					 WRITING

	       Meaning:	 CopyQM is in the process of writing a copy.


					RECORDING

	       Meaning:	 A diskette image file is being written to disk.


					CONVERTING

	       Meaning:	  Diskette data is being converted to the requested
	       format.


					 CHECKING

	       Meaning:	 This message occurs only in CHECK mode.  CopyQM is
	       reading a diskette copy and  comparing  the  data  with	the
	       master.


				  REMOVE MASTER DISKETTE

	       Meaning:	   CopyQM has finished reading the master diskette.
	       The diskette should be removed from the drive.


				  READ ERROR - TRY AGAIN

	       Meaning:	 The master diskette did not read  without  errors.
	       Reading	of  the same diskette can be attempted again,  or a
	       new master diskette may be inserted.


	  _________________________________________________________________

							Status Messages	 27





				    NOT A DOS DISKETTE

	       Meaning:	 The boot sector on the master	diskette  does	not
	       conform to any DOS standard layout.   If the diskette is not
	       a standard DOS format,  it may be possible to copy the  dis-
	       kette by specifying the BLIND option.  This message may also
	       occur  if the diskette contains a computer virus in its boot
	       sector.	 Diskettes infected  with  the	so-called  "Stoned"
	       virus will cause this message to be displayed.


				    NOT ENOUGH MEMORY

	       Meaning:	   Not enough memory and hard disk storage could be
	       located to contain the data from the master  diskette.	 It
	       may be possible to avoid this message by explicitly specify-
	       ing the location of the overflow hard disk file.


				    FILE READ COMPLETE

	       Meaning:	   The specified diskette image file has been read.
	       A blank diskette can be inserted into the drive for copying.


				   NOT WRITE-PROTECTED

	       Meaning:	 The PROTECT option  has  been	specified  and	the
	       master diskette is not write-protected.


				  COPY COMPLETE - REMOVE

	       Meaning:	   A  diskette copy has been successfully completed
	       and can be removed from the diskette drive.


			      DISKETTE IS UNUSABLE - DISCARD





	  _________________________________________________________________

	  28  Status Messages




	       Meaning:	 Writing the diskette  failed  because	of  an	un-
	       recoverable  error.   Either the wrong media type (high den-
	       sity instead of low density) has been used or  the  diskette
	       contains a permanent flaw.


				   CHECK OKAY - REMOVE

	       Meaning:	  This message occurs only when CopyQM is being run
	       with the CHECK option.	The diskette copy has been success-
	       fully verified and may be removed from the drive.


			       WRITE PROTECTED - TRY AGAIN

	       Meaning:	  Writing has failed on a diskette because the dis-
	       kette was write protected.    The  diskette  should  be	re-
	       inserted after the diskette has been write-enabled.


				  PLAYBACK FILE CORRUPT

	       Meaning:	 CopyQM has detected an error in the diskette image
	       file  being  read.   No recovery from the error is possible.
	       This message can occur if a version of CopyQM prior to  2.10
	       was used to create the image file.


			       FILE WRITTEN, REMOVE MASTER

	       Meaning:	 The requested diskette image file has been written
	       and the master diskette can be removed from the drive.


				  NO DISK SPACE FOR FILE

	       Meaning:	   There was not enough hard disk space to success-
	       fully create the requested diskette image file.	 This  mes-
	       sage  also occurs when there is insufficient hard disk space
	       to hold temporary files when format conversion has been	re-
	       quested.



	  _________________________________________________________________

							Status Messages	 29




				TARGET DISKETTE TOO SMALL

	       Meaning:	   After  the  requested format conversion was per-
	       formed, CopyQM determined that the data from the master dis-
	       kette would not fit on a single diskette	 of  the  requested
	       format.






































	  _________________________________________________________________

	  30  Status Messages




	  Specifying a Diskette Configuration

	  Normally,  CopyQM  can determine a system's configuration without
	  intervention.	  However,  there are cases where  add-on  diskette
	  adapters make it impossible to accurately sense the system setup.

	  To  determine	 if  CopyQM has correctly sensed your system's con-
	  figuration,  use the	VIEWCONF  command  that	 is  included  with
	  CopyQM.

	  If  necessary,  a  text file,	 named DISKETTE.CFG can be prepared
	  using any text editor or word processing program in  non-document
	  mode.	 This file can be placed anywhere in the DOS command search
	  path and will be automatically located by CopyQM.

	  The  layout  of the configuration file is straightforward.   Each
	  line in the file begins with the letter  of  the  diskette  drive
	  being described,  followed by a colon (:).   The rest of the line
	  contains keywords and numeric values which specify the configura-
	  tion for that drive.	 Each item on the line is separated by	one
	  or more spaces.  In most cases, keywords can be abbreviated.

	  A  configuration  file  line	can  contain  any  of the following
	  keywords.   The minimum abbreviation for each keyword is shown in
	  parentheses:

	       360K (3) specifies a 5.25" 360K drive.

	       720K  (7) specifies a 3.5" 720K drive.   Most utilities also
	       support the less common 5.25" 720K quad-density drive.

	       1.2M (1.2) specifies a 5.25" 1.2M drive.

	       1.44M (1.4) specifies a 3.5" 1.44M drive.

	       2.88M (2.8) specifies a 3.5" 2.88M drive.

	       8INCH (8) specifies an 8" drive.

	       Note that the drive type must be specified.




	  _________________________________________________________________

					     Specifying a Configuration	 31




	       BIOS (B) specifies the BIOS drive number for the drive.	The
	       word  BIOS  is  followed	 by  a	a number between 0 and 127.
	       This number is also the same one used for the /D:  parameter
	       when DRIVER.SYS is used to support the drive in the system's
	       CONFIG.SYS file.

	       PORT  (P)  specifies  the  base I/O port of the adapter con-
	       nected to the drive.  The first or primary adapter is always
	       described by the number 3F0H (observe the "H" at the end	 of
	       a  hexadecimal  number.)	 Secondary adapters are usually ad-
	       dressed by the number 370H and sometimes by  360H  or  3E0H.
	       If not specified, a PORT value of 3F0H is assumed.

	       UNIT  (U) specifies the physical unit number of the drive on
	       the adapter.  This unit number must be within the range of 0
	       to 3 and should not be confused with the BIOS unit number.

	       DMA (DM) specifies the Direct Memory  Access  channel  which
	       services the adapter.  If omitted, DMA channel 2 is assumed.

	       INTERRUPT  (I) specifies the system interrupt which services
	       the adapter. If omitted, interrupt 6 is assumed.

	       SEEK (S) specifies the track-to-track stepping time  of	the
	       drive  in milliseconds.	 If omitted,  6 milliseconds is as-
	       sumed.

	       CHANGE (CH) specifies  that  the	 drive	possesses  diskette
	       change  detection  circuitry.  If this term is omitted,	the
	       drive is assumed not to support change detection.   Usually,
	       1.2M,  1.44M  and  2.88M	 drives	 have change detection cir-
	       cuitry; 360K, 720K and 8 inch drives do not.

	       DUAL (DU) is applicable for 1.2M 5.25"drives only. Some inex-
	       pensive secondary adapters require that 1.2M drives be  con-
	       figured	for dual-speed operation in which the spindle motor
	       spins at 360 revolutions per minute for high-density  opera-
	       tion  and  300 revolutions per minute for low-density opera-
	       tion. If omitted, normal single-speed operation is assumed.





	  _________________________________________________________________

	  32  Specifying a Configuration




	       COMPATICARD (CO) specifies that the drive is connected to  a
	       MicroSolutions  Compaticard Itm or Compaticard IItm adapter.
	       If the Compaticard IVtm is being used,  this term should not
	       be specified.

	       DAA  (DA)  indicates  that  the drive is connected to an IBM
	       PS/2 Diskette Adapter/A. This adapter is present on external
	       drives on Microchannel systems only and is assumed not to be
	       present.

	  A number is required to follow the following words:

					BIOS
					PORT
					UNIT
					 DMA
				      INTERRUPT
					SEEK

	  A number is assumed to be a decimal value unless suffixed by	the
	  letter  "H" which indicates a hexadecimal quantity.	Thus,  1000
	  and 3E8H refer to the same quantity.

	  Here is an example of a DISKETTE.CFG file:

	       A: BIOS 0 UNIT 0 1.44M CHANGE
	       B: BIOS 1 UNIT 1 1.2M CH
	       Q: BIOS 4 PORT 370H UNIT 0 360K

	  There are two other items which may start a configuration line.

	  DEFAULT: initializes the configuration to the values	that  would
	  be  obtained	if  automatic configuration sensing were to be per-
	  formed.   Use of DEFAULT is useful if automatic sensing has  cor-
	  rectly  sensed  all but one or two drives.  For example,  suppose
	  that the configuration given above is correctly sensed,  with the
	  exception of drive Q:. The DISKETTE.CFG file could be stated as:

	       DEFAULT:
	       Q: BIOS 4 PORT 370H UNIT 0 360K

	  DEFAULT must appear as the only item on a line.


	  _________________________________________________________________

					     Specifying a Configuration	 33




	  NOTE: causes the remainder of a line to be ignored.  Comments may
	  be inserted into the DISKETTE.CFG file in this manner.   For	ex-
	  ample:

	       NOTE:  Automatic sensing gets everything but
	       NOTE:  drive Q: connected to a special second
	       NOTE:  adapter.
	       DEFAULT:
	       Q: BIOS 4 PORT 370H UNIT 0 360K
	       NOTE:  This is the end of the configuration file.


























	  ----------------------------------------------------------------
	  Certain  terms  used	in  this document are trade marks of one or
	  more of the following companies:  Microsoft Corporation, Interna-
	  tional  Business   Machines	Corporation,   Quarterdeck,   Inc.,
	  Microsolutions,  Inc.,  Digital Research Inc., The Software Link,
	  Inc.


	  _________________________________________________________________

	  34  Specifying a Configuration


```
{% endraw %}

## PRICES.DOC

{% raw %}
```
		     Ordering and Licensing Information

Sydex warrants	the  pricing  for CopyQM  to  be valid through July 31, 1993.
If necessary,  please  call  or write for pricing updates:

				Sydex, Inc.
			       P.O. Box 5700
			     Eugene, OR	 97405

			   (503) 683-6033 (voice)
			    (503) 683-1622 (FAX)
			    (503) 683-1385 (BBS)

		Hours:	Monday-Thursday, 9 A.M. to 4 P.M PST


Prices for CopyQM as of July 1, 1992:

    License for personal, non-commercial use..........$15.00

    Commercial use license for up to 25 systems.......$50.00

    Larger corporate licenses are priced by special arrangement.

    Shipping and handling inside of the U.S............$2.50

    Airmail to Canada..................................$3.50

    International Airmail..............................$5.00

All  licenses  include	printed documentation,	diskette  and  free  "do-it-
yourself" update privileges.

All payments must be made in U.S. funds.

```
{% endraw %}

## PRODLINE.DOC

{% raw %}
```


  The Sydex Product Line
  ----------------------

	     AnaDisk  -- The compleat diskette utility.	  Nothing like it
	     anywhere else;  scan,  edit,  repair and copy just about any
	     kind of diskette.	$25.00 ($150.00 site)  registration fee.

	     Con>Format	 --  Concurrent	 "background" diskette formatter.
	     Features  "pop-up"	 operation  and	 "hot  key"   activation.
	     You've  got to see it to believe.   Supports all current DOS
	     formats. $15.00 ($50.00 site) registration fee.

	     22DISK -- Transfer files, format, examine and erase files on
	     "foreign" CP/M diskettes on your PC.   Includes tips on sup-
	     porting  8"  and  5.25" single-density diskettes.	 Contains
	     definitions for over 300 different formats.  $25.00 ($100.00
	     site) registration fee.

	     22NICE -- A CP/M 2.2 emulation package.   Supports	 the  NEC
	     V-series  chips  or  performs emulation by software for both
	     the 8080 and Z80 processors.   Includes  terminal	emulation
	     and  diskette  handling  for common CP/M systems.	 Includes
	     22DISK.  $40.00 ($150.00 site) registration fee.

	     COPYQM -- Mass diskette duplicator.  Format, copy and verify
	     multiple diskettes from a single  master.	  Implements  "no
	     keyboard"  interaction  mode and drive "round robin" servic-
	     ing.   Supports all standard DOS formats.	  $15.00  ($50.00
	     site/commercial) registration fee.

	     FORMATQM  --  Mass diskette formatter - format a box of dis-
	     kettes at a single sitting.  Implements "no keyboard" inter-
	     action mode and drive "round robin" servicing.  Supports all
	     standard DOS formats.   $10.00  ($40.00  site)  registration
	     fee.

	Information  on	 any of these products can be obtained from Sydex
	by calling or writing:

				      Sydex
				  P.O. Box 5700
				Eugene, OR  97405
			     Voice:  (503)  683-6033
			     FAX:    (503)  683-1622
			     Data:   (503)  683-1385


				     Page 15

```
{% endraw %}

## FORMATQM.DOC

{% raw %}
```






          Sydex















                                      FORMATQM


                           A Quick Mass Diskette Formatter















                                                  Sydex

                                                  P.O. Box 5700
                                                  Eugene, OR  97405
                                                  Voice:  (503) 683-6033
                                                  FAX:    (503) 683-1622
                                                  Data:   (503) 683-1385
















                                      FORMATQM

                       A Quick Multiple Diskette Format/Verify


                              Copyright 1988-91, Sydex
                                 All Rights Reserved

                             Version 1.7 February, 1991


                                        Sydex
                                    P.O. Box 5700
                                  Eugene, OR  97405
                                Voice: (503) 683-6033
                                FAX:   (503) 683-1622
                                Data:  (503) 683-1385
                                 All Rights Reserved


                                       NOTICE

          THIS IS NOT FREE  SOFTWARE!  If you paid a "public domain" vendor
          for this program,  you  paid  for  the  service  of  copying  the
          program, and not for the program itself.  Rest assured that noth-
          ing  ever  gets  to  the  originators of this product from such a
          sale.  You may evaluate this product,  but if you make use of it,
          you must register your copy.

          We  offer  several inducements to you for registering.   First of
          all,  you receive the most up-to-date copy of the program that we
          have  --  and  we do update the product on a regular basis.   You
          also receive support for FormatQM -- which can be quite  valuable
          at times.   And finally,  we have a few utilities not included in
          the evaluation package.   Make no mistake,  however - this  is  a
          fully  functional  version  of FormatQM and not "crippled" in any
          way.


                              REGISTRATION INFORMATION

          The non-commercial single-user registration fee for  FormatQM  is
          $10.00 US.   The commercial and multisystem site fee for FormatQM
          is $50.00.

          Send a check or company P.O. for the appropriate amount to:









                                        Sydex
                                    P.O. Box 5700
                                  Eugene, OR  97405

          Please indicate what product you are ordering and if you  have  a
          requirement  for  3.5"  media.   We normally ship 5.25" 360K dis-
          kettes, but will furnish 3.5" 720K media upon request.   Shipping
          charges within the United States and Canada are $3.00.  Customers
          outside of the United States and Canada should add $5.00 for air-
          mail shipping.

          If  you  are  a registered user of this product and desire an up-
          date,  please send $5.00 for handling and we will ship you an up-
          to-date  copy.    Please  add  $3.00 for printed documentation to
          cover duplication costs.


                                 DISTRIBUTION NOTICE

          This is "user-supported" software.   You  are  hereby  granted  a
          license  by  Sydex to distribute this evaluation copy of FormatQM
          and its documentation, subject to the following conditions:

               1.   FormatQM may be distributed freely  without  charge  in
                    evaluation form only.

               2.   FormatQM  may not be sold,  licensed,  or a fee charged
                    for its use.   If a fee is charged in  connection  with
                    FormatQM, it must cover the cost of copying or dissemi-
                    nation  only.   Such charges must be clearly identified
                    as such by  the  originating  party.    Under  no  cir-
                    cumstances  may  the  purchaser be given the impression
                    that he is buying FormatQM itself.

               3.   FormatQM must be presented as a complete unit,  includ-
                    ing  this  documentation.    Neither  FormatQM  nor its
                    documentation may be amended or altered in any way.

               4.   By granting you the right to distribute the  evaluation
                    form  of FormatQM,  you do not become the owner of For-
                    matQM in any form.

               Any other use,  distribution or representation  of  For-
               matQM is expressly forbidden without the written consent
               of Sydex.











                                  Table of Contents


            What Is FormatQM?............................................1

            Installing FormatQM..........................................2

            How To Use FormatQM..........................................3

            Operating FormatQM...........................................4

            What's New...................................................5

            The Sydex Product Line.......................................6



































                                          i






          What Is FormatQM?

          FormatQM is a utility written to allow you to format a large num-
          ber  of  diskettes  in a single session with no keyboard interac-
          tion.   FormatQM will make use of more than one  disk  drive  and
          produces  formatted and verified diskettes in any of the standard
          DOS formats.

          FormatQM requires a PC XT,  AT or IBM  PS/2-compatible  computer.
          FormatQM  will  not  operate  on  the IBM PC Jr.,  or the low-end
          models of the Tandy 1000 series, such as the 1000 HX because they
          are relatively PC-incompatible.   Your display may be monochrome,
          CGA,  EGA or VGA, and your diskette drives may be internal or ex-
          ternal to your computer.

          FormatQM can produce the following formats, given the correspond-
          ing media and drive:

               1.   180K single-sided, 9 sector, 40 track,  5.25".  This is
                    the standard single-sided DOS diskette.

               2.   360K double-sided,  9 sector,  40 track, 5.25". This is
                    the standard double-sided DOS diskette.

               3.   1,200K double-sided, 15 sector, 80 track,  5.25".  This
                    is the high- density PC-AT format.

               4.   720K double-sided,  9 sector,  80 track,  3.5". This is
                    used by PS/2 machines as the standard interchange  for-
                    mat. PC-AT or -XT compatibles with 3.5" drives can also
                    use this format.

               5.   1,440K double-sided, 18 sector, 80 track, 3.5". This is
                    used by the PS/2 Model 50 and 80 as high-density media.
                    The  PC-AT with the proper BIOS and 3.5" drive can also
                    use this format.

          The diskettes produced are non-system diskettes. That is, they do
          not contain a copy of DOS as part of the format data.   If a dis-
          kette is "booted",  a message will be displayed requesting a sys-
          tem diskette and the boot process will be repeated,  just as with
          a standard non-system diskette.   The first (or "boot" sector) of
          the diskette is compatible with all  versions  of  DOS  from  2.0
          through  4.0  (the  latest as of this writing) and includes a DOS
          4.0 serial number.



                                       Page 1






          A diskette produced by FormatQM has had each  track  written  and
          verified,  with any flawed tracks recorded in the diskette's File
          Allocation Table (FAT).   Entire tracks,  rather than sectors are
          marked as flawed for maximum reliability.


          Installing FormatQM

          The  operating part of FormatQM is contained entirely in the file
          FORMATQM.COM.  In most cases, copying this file to an appropriate
          subdirectory or disk drive is all that needs to be done.

          FormatQM can be run "as is" without  first  being  configured  on
          most systems, but needs to be explicitly configured by the FQCON-
          FIG program in the following cases:

               1.   More  than  one diskette adapter is present on the host
                    computer.

               2.   More than two diskette drives are present on an AT-  or
                    386-class computer.

               3.   A MicroSolutions CompatiCard(tm) is being used as a dis-
                    kette adapter.

               4.   High-density diskette drives are present on an XT-class
                    computer.


          The FormatQM configuration program is started by entering the fol-
          lowing at a DOS prompt:

                              FQCONFIG

          You'll  be  guided  through  a series of displays which will con-
          figure FormatQM for your system,  and place the  configured  file
          FORMATQM.COM on the disk or subdirectory of your choice.

          During the configuration process, you will have an opportunity to
          specify  what  type  of diskette drives and controllers your com-
          puter supports.   If you have  a  single  diskette  adapter,  all
          drives are connected to the primary adapter.  If you have an addi-
          tional adapter, such as the SYSGEN Omni-Bridge or MicroSolutions'
          CompatiCard,  this  is the secondary adapter.   In all cases,  if
          your computer supports high-density diskette  formats,  you  must
          specify  that  it is an "AT" type of computer,  regardless of its
          actual model.


                                       Page 2






          As part of the configuration process you may  specify  that  For-
          matQM  use a different "boot" sector image.   To do this,  you'll
          need a copy of a diskette having the boot sector to  be  used  by
          FormatQM.


          How To Use FormatQM

          FormatQM  is started by typing a command of the following general
          form at the DOS prompt:

                    FormatQM drive: format N S P

          Drive: specifies the diskette drive to be used;  at least one  is
          required.    If  more than one drive is specified,  FormatQM will
          "rotate" or "ping-pong" drives with each copy.   Usually,  drive:
          is  either  A:  or  B:;  on three or four-drive computers,  other
          drives may also be used.   If more than one drive  is  specified,
          all drives should be of the same type;  that is, two or more 360K
          drives, or two or more 1.2M drives and so on...

          PC-AT-type computers are normally limited to a maximum of two dis-
          kette drives by BIOS convention.   However,  FormatQM can  access
          any  four possible diskette drives on a system,  even if some are
          connected to a different diskette adapter.

          Format refers to the type of diskette format desired,  and may be
          one of the following:

                    180K  360K  720K  1200K  1440K

          If  you  do  not  wish  to  verify each track as it is formatted,
          specifying an "N" at the end of the FormatQM command will disable
          the read-back check after a track is formatted.   This results in
          faster, but does not test the usability of the media.

          For registered copies of FormatQM,  specifying "S" on the command
          line will omit the opening logo display and proceed  directly  to
          the formatting display.

          Specifying a "P" on the FormatQM command line directs FormatQM to
          consider  only  "perfect" diskettes with no flawed areas as being
          "good"; flawed diskettes are flagged as "bad" or unusable.

          The correct drive and media must be present for a  format  to  be
          performed.   On PC-AT type machines, FormatQM will check for com-
          patibility between  the  specified  format  and  the  drive  type
          specified when FormatQM was installed.

                                       Page 3







          The following are examples of FormatQM command lines:

               FormatQM B: 160K         Drive is B:, DOS 1.X 160K format.
               FormatQM A: B: 360K      Use drives A: and B:, 360K format.
               FormatQM A: 720K N S     Use drive A:, 720K, no verify, no
                                        logo.



          Operating FormatQM

          During the operation of FormatQM,  you will be directed to insert
          blank diskettes in the specified drives.  When you have formatted
          as many diskettes as you require,  simply press the  ESCape  key.
          You  may  press ESCape at any time to cause FormatQM to terminate
          execution after a diskette has been formatted.

          FormatQM works by periodically examining the specified drives; it
          attempts to determine  when  a  diskette  has  been  inserted  or
          removed.    You  do not need to touch the keyboard except to ter-
          minate FormatQM; just insert and remove diskettes as directed.

          Observe that FormatQM is sensitive to changes in  diskette  drive
          status.    When you start FormatQM,  you will need to insert your
          first blank diskette in the indicated drive,  even though you may
          have  already  placed  a blank in the correct drive before typing
          the FormatQM command.  Simply "popping" the diskette out and then
          in again will do.

          If a diskette contains flaws (unwritable  areas),  FormatQM  will
          issue an error message showing the number of bad tracks after the
          entire  diskette  has  been  formatted.    These  bad  tracks are
          processed in the same manner as they would be by DOS FORMAT; that
          is,  they are marked as flawed in the File Allocation Table (FAT)
          contained on the diskette.   If,  however, the first track on the
          diskette contains flaws,  it will be rejected as unusable by For-
          matQM.

          How  much  storage a bad track represents varies according to the
          type of formatting performed:








                                       Page 4








               On 180K, 360K and 720K diskettes, each track is 4,608 bytes.

               On a 1.2M diskette, each track is 7,680 bytes.

               On a 1.44M diskette, each track is 9,216 bytes.



          If you run FormatQM on a diskette-only system,  be sure to write-
          protect the diskette containing FormatQM.  Thus, even if you mis-
          takenly  insert  the FormatQM program diskette or "pop" the drive
          door, you will avoid destroying your copy of FormatQM.

          24K of memory should be sufficient for execution of FormatQM.


          What's New

          In Version 1.62,  many changes were made to FormatQM to support a
          secondary diskette adapter.

          The  default  boot  sector  used  for  formatting  was changed to
          provide a clean-looking display explaining the difference between
          a system and a non-system diskette.   In addition,  the user  may
          now specify an alternate boot sector.  The "P" (for "perfect" dis-
          kettes) option was added.

          Version  1.7  eliminates  the  requirement  that FormatQM be con-
          figured prior to its operation.  FormatQM will now run "as is" on
          most systems.    Several  obsolete  formats  were  dropped,  par-
          ticularly those related to DOS 1.
















                                       Page 5






          The Sydex Product Line

          AnaDisk  --  The  compleat  diskette  utility.    Nothing like it
          anywhere else; scan, edit, repair and copy just about any kind of
          diskette.  $25.00 ($150.00 site)  registration fee.

          Con>Format -- Concurrent "background"  diskette  formatter.  Fea-
          tures "pop-up" operation and "hot key" activation.  You've got to
          see  it  to  believe.   Supports all current DOS formats.  $15.00
          ($50.00 site) registration fee.

          22DISK -- Transfer files,  format,  examine and  erase  files  on
          "foreign" CP/M diskettes on your PC.  Includes tips on supporting
          8" and 5.25" single-density diskettes.   Contains definitions for
          over 200 different formats.   $25.00 ($100.00 site)  registration
          fee.

          22NICE  --  A  CP/M  2.2  emulation  package.    Supports the NEC
          V-series chips or performs emulation by  software  for  both  the
          8080  and  Z80 processors.   Includes terminal emulation and dis-
          kette handling for common CP/M systems.  Includes 22DISK.  $40.00
          ($150.00 site) registration fee.

          TeleDisk -- Turn any diskette into a  compressed  data  file  and
          vice-versa.   Allows you to send and receive entire diskettes via
          modem.  Even works with some "copy-protected" diskettes.   $20.00
          ($150.00 site) registration fee.

          COPYQM -- Mass diskette duplicator.  Format, copy and verify mul-
          tiple  diskettes from a single master.   Implements "no keyboard"
          interaction mode and drive "round robin" servicing.  Supports all
          standard DOS formats.  $15.00 ($50.00 site) registration fee.

          FormatQM -- Mass diskette formatter - format a box  of  diskettes
          at  a single sitting.   Implements "no keyboard" interaction mode
          and drive "round robin" servicing.  Supports all standard DOS for-
          mats.  $10.00 ($50.00 site) registration fee.


          Information on any of these products can be obtained  from  Sydex
          by calling or writing:

                                        Sydex
                                    P.O. Box 5700
                                  Eugene, OR  97405
                                Voice: (503) 683-6033
                                FAX:  (503) 683-1622
                                Data:  (503) 683-1385

                                       Page 6

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3547

     Volume in drive A has no label
     Directory of A:\

    READ     ME       7209   9-10-92  12:04p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    COPYQ302 ZIP     93784   9-14-92   9:00a
    CNFMT108 ZIP     44469   7-17-92   2:16p
    FORMQ172 ZIP     36517   7-17-92   2:13p
    ANAD207  ZIP    134331   9-03-92  11:51a
    GO       BAT        33   3-28-93   5:09p
    SHOW     EXE      2040   9-12-88  10:48a
            8 file(s)     341911 bytes
                           16384 bytes free
