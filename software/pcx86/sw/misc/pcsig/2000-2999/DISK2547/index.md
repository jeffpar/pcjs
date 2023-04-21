---
layout: page
title: "PC-SIG Diskette Library (Disk #2547)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2547/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2547"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## BOOT.DOC

{% raw %}
```
















          BOOT.SYS(tm)   -   Version 1.27








          Use boot-up menus to select your MS-DOS system configuration










                               _______
                          ____|__     |                (R)
                       --|       |    |-------------------
                         |   ____|__  |  Association of
                         |  |       |_|  Shareware
                         |__|   o   |    Professionals
                       -----|   |   |---------------------
                            |___|___|    MEMBER








          Written by Hans Salvisberg

          BOOT.SYS                     -  2  -                 Version 1.27



                                   Copyright Notice

          BOOT.SYS(tm) and the accompanying programs and documentation are


                       Copyright (c) 1989, 1990 Hans Salvisberg
                                 All rights reserved





                                  Table of Contents

          Introduction ...............................................   3

          About ASP ..................................................   4

          ASP Ombudsman Information ..................................   5

          License Agreement ..........................................   5

          Registration ...............................................   7

          Installation ...............................................  10

            Quick Start ..............................................  11

            Level 1: One Menu ........................................  12

            BOOT.SYS Command Line Parameters .........................  16

            Level 2: Several Independent Menus Following Each Other ..  17

            Level 3: Nested Menus ....................................  19

            BOOT.SYS Extensions ......................................  26
               BOOT.EDIT .............................................  26
               BOOT.OPTION FREE ......................................  27
               BOOT.OPTION BOOTASSIST ................................  27
               BOOT.OPTION EXTMON for Laptops ........................  28
               BOOT.OPTION COLOR .....................................  30

            BOOT.COM Command Line Parameters .........................  30

            PAUSE.SYS, a Debugging Aid ...............................  32

            Closing Remark ...........................................  33

          Answers to Common Questions ................................  34

          Revision History ...........................................  38

          BOOT.SYS                     -  3  -                 Version 1.27



                                     Introduction

          BOOT.SYS makes  it  possible  to display  one  or more  menus  at
          boot-up time  and to  have different parts  of CONFIG.SYS  and/or
          AUTOEXEC.BAT executed depending on which menu options are chosen.

          Many people  need different versions  of CONFIG.SYS depending  on
          what application they  are going to run.  In the past you  had to
          either rename  or edit your  start-up files and  reboot to get  a
          different setup.  Now this  process  has become  much easier  and
          safer by using BOOT.SYS.

          BOOT.SYS was written  for IBM-compatible Personal  Computers run-
          ning under MS-DOS or PC-DOS 2.11, 3.xx, and 4.0x.

          The  following  features make  BOOT.SYS  a  must-have  for  every
          sophisticated PC installation:

            * easy  installation,  detailed examples  for  every  level  of
              sophistication

            * up to  nine options  per  menu (one  line per  option) and  a
              freely definable prompt area at the top of the screen

            * up to 25 consecutive menus, each defining  a different aspect
              of your system configuration

            * up to  25 levels  of nested menus  (submenus), simplifying  a
              systematic approach to systems configuration

            * only one  version of  CONFIG.SYS and  AUTOEXEC.BAT; no  copy-
              ing/renaming of files and no rebooting

            * select menu options  by pressing the corresponding  digit key
              or by moving an arrow

            * user-definable timeout and default option for each menu

            * switch to  an external  monitor  on boot-up  for some  laptop
              computers

            * edit individual CONFIG.SYS lines on the fly while booting up

            * insert comments into CONFIG.SYS without generating error mes-
              sages

            * uses less than 200 bytes of resident DOS memory

            * do a warm or a cold boot from the DOS  command line or from a
              batch file; change Alt-Ctrl-Del to do a cold  boot or disable
              it altogether

            * includes PAUSE.SYS for debugging complex CONFIG.SYS set-ups

          BOOT.SYS                     -  4  -                 Version 1.27



                                   Acknowledgments

          BOOT.SYS(tm)  was developed  using  Borland's  Turbo C(R),  Turbo
          Assembler(R), and Turbo Debugger(R). The  documentation was writ-
          ten with Lotus Manuscript(R).

          Many thanks to Michael J. Mefford of PC Magazine who has provided
          valuable information about modifying CONFIG.SYS on the fly.

          Many thanks to the members of the ASP; their help and advice have
          been invaluable for getting BOOT.SYS to you.



                                      Trademarks

          BOOT.SYS is a trademark of Hans Salvisberg.
          Compaq is a trademark of Compaq Computer Corporation. IBM, PC-DOS
          and PC are trademarks  of IBM Corporation. MS-DOS and  MS Windows
          are trademarks of  Microsoft Corporation. 386^MAX is  a trademark
          of Qualitas, Inc. DESQview and QEMM are trademarks of Quarterdeck
          Office Systems. Other product names mentioned  in this documenta-
          tion may be trademarks of these or other companies.
          Association  of Shareware  Professionals  and  the ASP  logo  are
          trademarks of the Association of Shareware Professionals.



                                      About ASP

          ASP, the Association of Shareware Professionals(R), was formed in
          April 1987 to strengthen the future of  shareware (user supported
          software) as an alternative to commercial  software. Its members,
          all of whom are programmers who subscribe to a  code of ethics or
          are non-programmers  sincerely interested  in the advancement  of
          shareware, are committed to the concept of shareware  as a method
          of marketing.

          The ASP has adopted  general standards that all ASP  authors have
          agreed to follow, some of which are:

          Support standards:
              All ASP members' shareware products must provide support (in-
              cluded in the purchase  price) for a minimum of  three months
              from the date of registration.
              Any money sent to an author to register  an unsupported prod-
              uct shall be promptly  returned with an explanation  that the
              product in question is no longer supported.
              Known incompatibilities with  other software or  hardware and
              major or unusual program  limitations are noted in  the docu-
              mentation that comes with the shareware (evaluation) program.

          BOOT.SYS                     -  5  -                 Version 1.27



          'no crippling' standard:
              The principle behind shareware is "try before you  buy."  ASP
              believes that users have  a right to try a  fully functioning
              shareware program  in  their regular  computing  environment.
              Accordingly, ASP authors agree that:
                - The executable files (and/or items linked in with execut-
                  ables)  in the  shareware  and registered  versions  will
                  essentially be the same.
                - All the program's features will be fully documented.
                - Registration encouragement procedures which in  the judg-
                  ment of  the Board are  either unreasonable or  unprofes-
                  sional are not allowed.

          Miscellaneous standards:
              The program  has been  thoroughly  tested by  the author  and
              should not  be harmful  to other  files or  hardware if  used
              properly.
              Any discussion of  the shareware concept and  of registration
              requirements is done in a professional and positive manner.

          If you  are interested in  ASP and in  Shareware issues, you  are
          invited to come to the SHAREWARE forum on  CompuServe, where many
          shareware authors meet regularly. Do not be surprised  if you get
          to the IBMJR forum, because that forum is  currently being shared
          between IBMJR and ASP.



                              ASP Ombudsman Information

          This program is produced by a member of the Association of Share-
          ware Professionals (ASP). ASP wants to make sure  that the share-
          ware principle  works for  you. If  you are unable  to resolve  a
          shareware-related problem  with an ASP  member by contacting  the
          member directly, ASP may  be able to help. The ASP  Ombudsman can
          help you  resolve a dispute  or problem with  an ASP member,  but
          does not provide technical support for  members' products. Please
          write to the ASP Ombudsman at P.O. Box  5786, Bellevue, WA 98006,
          U.S.A. or  send a message  via CompuServe  Mail to ASP  Ombudsman
          70007,3536



                                  License Agreement

          BY INSTALLING BOOT.SYS ON YOUR SYSTEM YOU INDICATE YOUR AGREEMENT
          TO THE  FOLLOWING TERMS AND  CONDITIONS. IF YOU  DO NOT AGREE  TO
          THEM YOU ARE NOT ALLOWED TO USE THIS PROGRAM.

          BOOT.SYS AND THE  ACCOMPANYING PROGRAMS AND  DOCUMENTATION (LATER
          ON COLLECTIVELY REFERRED TO  AS BOOT.SYS) ARE DISTRIBUTED  AS IS.
          HANS SALVISBERG  (THE  AUTHOR) MAKES  NO  WARRANTY OF  ANY  KIND,
          EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED  TO WARRANTIES OF
          MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT

          BOOT.SYS                     -  6  -                 Version 1.27



          TO THIS SOFTWARE AND DOCUMENTATION. IN NO EVENT  SHALL THE AUTHOR
          BE LIABLE FOR ANY DAMAGES, INCLUDING LOST  PROFITS, LOST SAVINGS,
          OR ANY OTHER INCIDENTAL  OR CONSEQUENTIAL DAMAGES ARISING  OUT OF
          THE USE  OF OR THE  INABILITY TO  USE THIS  PROGRAM, EVEN IF  THE
          AUTHOR HAS BEEN  ADVISED OF THE  POSSIBILITY OF SUCH DAMAGES,  OR
          FOR ANY CLAIM BY ANY OTHER PARTY.

          BOOT.SYS is  a copyrighted  work  protected by  Swiss, U.S.,  and
          international copyright law. It is not free, freeware,  or in the
          public domain. It is  distributed as Shareware, which  means that
          you may try it out  at no cost for three weeks; if  you determine
          that it fits your needs and you wish to use it regularly you must
          register. If you choose not to pay the registration fee, you must
          stop using BOOT.SYS after the initial trial period  and remove it
          from your computer, but you may still keep copies  of it and pass
          them on to others as outlined below.

          You may  give individual  copies of the  unregistered version  of
          BOOT.SYS to your  friends and associates for  evaluation purposes
          as described above. You must include all the  files (described in
          the READ.ME  file) that  make up BOOT.SYS  without any  modifica-
          tions, preferably in  the original self-extracting  LHarc archive
          file. You may upload  BOOT.SYS to the public section of  a public
          BBS, but you  may not place  it in any  user group or  commercial
          library or distribute it for  a fee or in any way sell  copies of
          it without express written permission from the Author.

          Under no circumstances may an unregistered version of BOOT.SYS be
          used in  a  commercial (business,  corporate, government,  educa-
          tional, or other  institutional) environment except for  the pur-
          pose of evaluation on a single computer.

          You may not modify  or dis-assemble BOOT.SYS, nor  distribute any
          modified or dis-assembled versions of BOOT.SYS.  BOOT.SYS may not
          be included  with any  other  product for  any reason  whatsoever
          without written permission from the Author.

          You may install your registered copy of BOOT.SYS on more than one
          computer at a time ONLY if no more than one of these computers is
          usually running  at the same  time. You may  make as many  backup
          copies of BOOT.SYS as you need for your personal backup purposes.

          You may NOT give, sell, or otherwise transfer  copies of the reg-
          istered version of BOOT.SYS  to any other person for  any reason.
          If  you register,  your  copy  of  BOOT.SYS will  have  a  unique
          registration number and display your name and  address. Your reg-
          istration including that information will be  transferable to any
          future  shareware  versions  of  BOOT.SYS,  which  will  then  be
          considered a registered version.

          No version of BOOT.SYS may be rented or leased.

          BOOT.SYS                     -  7  -                 Version 1.27



          Any use or distribution of BOOT.SYS, which  violates this license
          agreement, will be  considered a copyright violation,  and prose-
          cuted to the full extent of the law.

          U.S. Government RESTRICTED  RIGHTS: Use, duplication,  or disclo-
          sure by the Government is subject to restrictions as set forth in
          subdivision  (b)(3)(ii)  of the  Rights  in  Technical  Data  and
          Computer Software clause at 252.227-7013.



                                     Registration

          BOOT.SYS is  not free! You  may try it  out at  no charge for  an
          initial trial period to  determine if it fits your needs.  If you
          want to continue to  use BOOT.SYS after the initial  trial period
          you must register. This method of software  distribution is known
          as Shareware.

          The registration fee  for a single copy  of BOOT.SYS is  SFR 70.-
          (exchange rate US$ to Swiss Francs is about $0.76  = SFR 1.- (Oc-
          tober 1990)). Payment of this fee entitles you to:

            * A disk with the current version of BOOT.SYS

            * A printed and bound manual

            * A special utility program that lets you transfer your license
              to any  later shareware  versions  of BOOT.SYS  that you  may
              obtain from any shareware source (getting an upgrade from the
              author requires new registration).

            * Free support (by electronic mail or by mail) for the first 90
              days after  payment,  consisting of  answering questions  and
              fixing any  reproducible program  error(s) that  interfere(s)
              with the  intended use  of the  program as  outlined in  this
              documentation. The  author  may choose  not  to fix  problems
              related to a  special hardware and/or  software configuration
              and will then arrange  for a refund of the  registration fee,
              if the  problem is reported  within 90  days of payment.  The
              author makes no  other warranties, expressed or  implied, and
              this warranty is expressly limited to the cost  of the regis-
              tration fee.

            * BOOT.SYS is publicly supported on CompuServe in  the DOS Uti-
              lities section of the IBMSYS forum. A  free CompuServe Intro-
              Pak, which includes  a $15.00 usage  credit, is available  to
              registered  BOOT.SYS  users  who  do  not  yet  subscribe  to
              CompuServe. CompuServe  will open  the door for  a whole  new
              world of information, services, and  interesting people. Com-
              puServe is also  the best place  to obtain technical  support
              for products from Hans Salvisberg (and  many other developers
              and vendors).  The CompuServe  IntroPak (a  $39.95 value)  is
              provided to registered  BOOT.SYS users compliments  of Compu-

          BOOT.SYS                     -  8  -                 Version 1.27



              Serve, Inc., and Hans Salvisberg. This offer  is dependent on
              its continued availability from CompuServe, Inc.
              For your information: Current CompuServe rates are $12.50 per
              connect hour plus communications surcharges (e.g., $0.30/hour
              in the U.S.A., $9.50/hour in Switzerland and the United King-
              dom, varying rates in other countries).

          BOOT.SYS must  be registered before  it is  used in a  commercial
          (business, corporate, government, educational, or  other institu-
          tional) environment.

          The following per-unit  prices apply for  registration of one  or
          more copies of BOOT.SYS on the same order form:

                              1       SFR 70.-
                       2  -   4       SFR 60.-
                       5  -   9       SFR 50.-
                      10  -  24       SFR 45.-
                      25  -  49       SFR 40.-
                      50  -  99       SFR 35.-
                     100  - 249       SFR 30.-
                     250  - 499       SFR 25.-
                     500  or more     negotiable

          THESE PRICES INCLUDE ONE  MASTER DISKETTE AND ONE  PRINTED MANUAL
          PER  ORDER.  The licensee  is  responsible  for  duplicating  the
          diskette and documentation as  needed, and for ensuring  that the
          registered number of installed copies is not exceeded. Additional
          manuals are  available for  a  nominal fee.  Under this  schedule
          SUPPORT  IS PROVIDED  TO  ONE  DESIGNATED REPRESENTATIVE  OF  THE
          LICENSEE ONLY.

          You have three choices for registering:

            - With the author in  Switzerland: All payment must be  done in
              Swiss Francs. The easiest  way to do this is by  credit card.
              You authorize us  to charge your card  for the amount  due in
              SFR and the credit card company will automatically convert to
              your currency  using  the current  exchange  rate. We  cannot
              guarantee a  fixed exchange rate  or a  certain date for  the
              conversion to  take place,  but based on  our experience  the
              exchange rates do not vary quickly.
              Alternatively you may send  us a postal money order  in Swiss
              Francs (your local post office does the currency conversion).

            - With  Public  software  Library  in   the  U.S.A.  (single-PC
              licenses only!):  PsL  is authorized  to sell  pre-registered
              single-PC versions  of BOOT.SYS at  $39 +  $4 s&h. They  take
              credit card  orders on  a toll-free phone  number or  written
              orders accompanied by a check or credit card information.

            - For site licenses:  Other modes of payment  including payment
              in US$ or other  currency can be negotiated -  please contact
              the author.

          BOOT.SYS                     -  9  -                 Version 1.27



          Note: All prices are subject to change without notice.

          The accompanying  file REGISTER.FRM  includes registration  forms
          for the first two options. If this file is missing or if you have
          any questions, please contact the author:

            Hans Salvisberg, Froeschmattstr. 40, CH-3018 Berne, SWITZERLAND

               CompuServe:  73237,3556
               Internet:    salvis@ahorn.iam.unibe.ch
                   or       73237.3556@compuserve.com

          BOOT.SYS                     -  10  -                Version 1.27



                                     Installation

          BOOT.SYS can be used on three different levels:
            - one menu only
            - several menus in sequence
            - nested menus

          It is probably a  good idea to start experimenting  with BOOT.SYS
          on the easiest level and to build up from there. This is also how
          the installation  instructions will  be presented here.  Alterna-
          tively, if you  already have (up  to nine) pairs of  AUTOEXEC.BAT
          and CONFIG.SYS files, you  can use the procedure outlined  in the
          Quick Start chapter to get BOOT.SYS working right away.

          Please keep in mind  that heavily editing CONFIG.SYS  and AUTOEX-
          EC.BAT may lead to your PC not coming up  in the usual configura-
          tion  or  even locking  up  at  boot-up  time.  Therefore  it  is
          recommended  that  you  first  create  a   bootable  diskette  by
          following these steps (at the DOS prompt):
            1. Insert a new diskette in drive a: and FORMAT a: /S
            2. COPY c:\COMMAND.COM a:
            3. COPY c:\CONFIG.SYS a:
            4. COPY c:\AUTOEXEC.BAT a:
            5. Edit a:AUTOEXEC.BAT and a:CONFIG.SYS and make  sure that all
               file names (including the external DOS commands) include the
               drive name of your boot disk (here assumed to be c: ).
            6. Boot from this diskette to see if everything is ok; check if
               you can start your editor as usual.

          Many of the features  of BOOT.SYS will be presented  by examples.
          In each chapter there is a simple example to  start with and some
          more interesting ones  to give you an  idea of what  BOOT.SYS can
          do. The upper-case portions  should be copied exactly  (case does
          not matter), the lower-case  ones may be different for  your sys-
          tem.
          Example:
                    DEVICE=c:\dos\ANSI.SYS

          The ANSI.SYS device driver  that comes with DOS is  often located
          in the directory \dos  on drive c: ; if  this is not the  case on
          your system then you should change the drive  and/or path accord-
          ingly.

          The first example on each level will use DOS features only, so it
          should work on every system running under MS-DOS  or PC-DOS. Usu-
          ally there  is a CONFIG.SYS  file (CO)  and an AUTOEXEC.BAT  file
          (AU) for each example.

          All text in curly braces (like {a comment}) is comment.

          BOOT.SYS                     -  11  -                Version 1.27



          Quick Start

          If you already  have (up to  nine) pairs of different  CONFIG.SYS
          and AUTOEXEC.BAT files, you  can start using BOOT.SYS  right away
          by following these instructions:

            1. Create a new master CONFIG.SYS like this:

          CO     DEVICE=c:\bin\BOOT.SYS
                 DEVICE=BOOT.1 first configuration {any name}
                   {entire contents of CONFIG.SYS for the first configura-
                    tion}
                 DEVICE=BOOT.2 second configuration {any name}
                   {entire contents of CONFIG.SYS for the second configura-
                    tion}
                 {etc.}
                 DEVICE=BOOT.END


            2. Create a new master  AUTOEXEC.BAT like this (make  sure that
               there are no label conflicts between different sections):

          AU     c:\bin\BOOT >NUL:
                 IF ERRORLEVEL 9 GOTO config9     {Be sure to always test
                 IF ERRORLEVEL 8 GOTO config8      ERRORLEVELs in descend-
                   ...                             ing order and immedi-
                 IF ERRORLEVEL 1 GOTO config1      ately after BOOT.COM!}
                 ECHO BOOT.SYS is not loaded!
                 GOTO done
                 :config1
                   {entire contents of AUTOEXEC.BAT for the first configu-
                    ration}
                 GOTO done
                 :config2
                   {entire contents of AUTOEXEC.BAT for the second configu-
                    ration}
                 {etc.}
                 :done


            3. Press  Alt-Ctrl-Del   to  reboot   and  watch  BOOT.SYS   in
               action.(1)


          The real power  of BOOT.SYS, which comes  into play when  you use
          more than one  or even nested menus,  is not used here,  but this
          set-up may be sufficient for many users' needs. The next chapters
          will explain how and why to create more sophisticated set-ups.


          --------------------
          1 If you see messages like 'Unrecognized command' from CON-
          FIG.SYS, please refer to the chapter Answers to Common Questions.

          BOOT.SYS                     -  12  -                Version 1.27



          Level 1: One Menu

          For many users one menu is all they will ever  need. It gives you
          the equivalent of choosing  between up to nine different  sets of
          CONFIG.SYS and AUTOEXEC.BAT.



          Ex     Choose between one of the     [SCREEN]
          1.1(1) following configurations:
                   -  no RAM disk
                   -  64K RAM disk
                   -  128K RAM disk
                 If there's a RAM disk, copy
                 COMMAND.COM to it and make
                 DOS reload the command pro-
                 cessor from there.



          CO.11  BUFFERS=32
                 FILES=20
                 {any other of the usual commands that should apply to all
                 the configurations; this goes for all the examples}
                 DEVICE=c:\bin\BOOT.SYS {optional command line parameters}
                 DEVICE=TOP
                 DEVICE=TOP Select one of the following choices by
                 DEVICE=TOP pressing the corresponding digit key, or by
                 DEVICE=TOP moving the arrow with the Cursor-Up, Cursor-
                 DEVICE=TOP Down, Home and End keys and pressing Enter
                 DEVICE=TOP (or Cursor-Right):
                 DEVICE=TOP
                 DEVICE=BOOT.1 no RAM disk
                 DEVICE=BOOT.2 64K  RAM disk
                 DEVICE=c:\dos\VDISK.SYS size=64 sector=512 dir=64
                 DEVICE=BOOT.3 128K RAM disk
                 DEVICE=c:\dos\VDISK.SYS size=128 sector=512 dir=64
                 DEVICE=BOOT.END
                 {any other of the usual commands that should apply to all
                 the configurations; this goes for all the examples}



          AU.11  c:\bin\BOOT
                 IF ERRORLEVEL 3 GOTO VDISK     {Be sure to always test
                 IF ERRORLEVEL 2 GOTO VDISK      ERRORLEVELs in descending



          --------------------
          1 The screen shots are deliberately reproduced in a small scale.
          They are intended to provide a view of the general screen layout
          only; for the text please refer to the corresponding CONFIG.SYS
          listing. In the Shareware version they are omitted.

          BOOT.SYS                     -  13  -                Version 1.27



                 IF ERRORLEVEL 1 GOTO NO_VDISK   order and immediately
                 ECHO BOOT.SYS is not loaded!    after BOOT.COM!}
                 GOTO DONE
                 :VDISK
                 COPY c:\COMMAND.COM d: >NUL:
                 SET COMSPEC=d:\COMMAND.COM
                 GOTO DONE
                 :NO_VDISK
                 ECHO Sorry, there is no RAM disk
                 GOTO DONE
                 :DONE
                 PATH c:\dos;c:\bin



          The part of CONFIG.SYS that is controlled by BOOT.SYS starts with
          the BOOT.SYS line and ends with the BOOT.END  line. Between these
          two lines you define both  the menu to be displayed and  the com-
          mands to be executed.

          The text to the right of TOP is displayed at  the top of the menu
          screen. You may  use most of the  characters of the  PC character
          set (including the box and foreign characters). Unfortunately DOS
          converts all lower-case characters in the range of  'a' to 'z' to
          upper case;  a work-around to  this problem  is presented in  the
          next example. There is no upper limit to the number of TOP lines,
          as long as  they fit on the  screen, along with all  the options;
          TOP may be omitted altogether and BOOT.SYS will display a default
          text.

          The BOOT.1 line introduces the first menu option. All text to the
          right of BOOT.1 is  displayed as the option text.  Between BOOT.1
          and BOOT.2  there may  be zero  or more of  the usual  CONFIG.SYS
          commands (all kinds, not  just DEVICE= ). These commands  will be
          executed if  the  user  selects option  1  and will  be  bypassed
          silently if he/she selects another option.

          There may be up to nine options each beginning with a correspond-
          ing BOOT.n line. The options must be  numbered consecutively from
          1 up to 9.

          You may insert empty lines wherever you like,  and you may insert
          comments between BOOT.SYS and BOOT.END like this:

                 DEVICE=REM any comment

          So much  for the  first BOOT  menu; even  if you  think you  know
          enough already  you should  read on  up to  the end  of the  next
          section.

          BOOT.SYS                     -  14  -                Version 1.27



          Very often  different commands must  be executed in  AUTOEXEC.BAT
          depending on which boot-up configuration is selected.  It is even
          possible that  all your  configurations use  the same  CONFIG.SYS
          commands and  differ only  in the contents  of AUTOEXEC.BAT  (see
          example 1.2). This can be done with BOOT.SYS because a very small
          part of it stays resident and the companion  program BOOT.COM can
          be used to retrieve the user's choice any time later on.

          BOOT.COM sets the DOS ERRORLEVEL code to the number of the chosen
          option; it also writes that information to  standard output which
          can  be redirected  to  the  null  device. If  BOOT.SYS  was  not
          installed or there  was some kind  of error, then the  ERRORLEVEL
          code is set to 0. Be sure to always test for ERRORLEVEL values in
          descending order, because DOS does a 'greater  or equal' compari-
          son, not an 'equal' comparison!

          Based on the  ERRORLEVEL different parts  of AUTOEXEC.BAT can  be
          executed as illustrated in the above example.  Instead of execut-
          ing different parts of the same AUTOEXEC.BAT you  could branch to
          different batch files, as shown in the next example.



          Ex 1.2 On a certain LAN you may want [SCREEN]
                 to choose between the follow-
                 ing options:
                   -  no network support
                   -  XNS protocol
                   -  TCP/IP protocol
                 Display the menu white on
                 blue, use both upper-case and
                 lower-case letters, and rear-
                 range the menu on the screen.



          CO.12  DEVICE=c:\bin\BOOT.SYS /CX1f /L18 /U^
                 DEVICE=TOP
                 DEVICE=TOP
                 DEVICE=TOP    ^What kind of network support do you need?
                 DEVICE=TOP
                 DEVICE=TOP
                 DEVICE=TOP
                 DEVICE=BOOT.1 none
                 DEVICE=BOOT.2 ^X^N^S
                 DEVICE=BOOT.3 ^T^C^P/^I^P
                 DEVICE=BOOT.END



          AU.12  ECHO OFF
                 CLS
                 c:\bin\BOOT >NUL:              {>NUL: hides BOOT.COM's
                 IF ERRORLEVEL 3 c:\autotcp      output}

          BOOT.SYS                     -  15  -                Version 1.27



                 IF ERRORLEVEL 2 c:\autoxns
                 IF ERRORLEVEL 1 GOTO NO_NET
                 ECHO BOOT.SYS is not loaded!
                 :NO_NET
                 PATH c:\dos;c:\bin



          The command line parameters will cause BOOT.SYS to use the /Color
          1f (heX) and to put 18 spaces to the /Left of the option numbers;
          to  indent the  TOP  text  just  insert spaces  in  these  lines.
          BOOT.SYS will translate the characters in the range of 'a' to 'z'
          to lower-case;  only those  preceded by a  '^' character (or  any
          other you specify) will be left /Upper-case.

          This LAN  does not  need any  drivers in CONFIG.SYS,  so all  the
          options are empty. If the user selects either  XNS or TCP/IP then
          AUTOEXEC.BAT branches to autoxns.bat or autotcp.bat respectively,
          which will load the  necessary drivers; note that  when execution
          is transferred to another batch file (without  the CALL statement
          introduced in DOS 3.30) the rest of AUTOEXEC.BAT is not executed.

          This example has  demonstrated how to  control the appearance  of
          the menus by using additional empty TOP lines, indenting the text
          on the TOP  lines, and using  the /Left switch.  There is also  a
          /Spacing switch  which  indicates the  spacing  between the  menu
          options; the default is  2, acceptable values are 1, 2,  etc., as
          long as all the menu options fit on the screen. - For the sake of
          brevity the remaining examples are not optimized  for good looks,
          and the /Uppercase switch will be omitted, too.



          Ex 1.3 Choose
                   -  whether you want a RAM disk, and
                   -  whether you need ANSI.SYS.
                 If the user does not press any key within 5 seconds then
                 take the default of RAM disk and no ANSI.SYS.



          CO.13  DEVICE=c:\bin\BOOT.SYS /D2 /T5
                 DEVICE=TOP  Select your system configuration
                 DEVICE=BOOT.1 no RAM disk, no ANSI.SYS (all RAM above DOS
                               available)
                 DEVICE=BOOT.2 64K RAM disk, no ANSI.SYS
                 DEVICE=c:\dos\VDISK.SYS size=64 sector=512 dir=64
                 DEVICE=BOOT.3 no RAM disk, ANSI.SYS
                 DEVICE=c:\dos\ANSI.SYS
                 DEVICE=BOOT.4 64K RAM disk and ANSI.SYS
                 DEVICE=c:\dos\VDISK.SYS size=64 sector=512 dir=64
                 DEVICE=c:\dos\ANSI.SYS
                 DEVICE=BOOT.END

          BOOT.SYS                     -  16  -                Version 1.27



          The command line parameters will cause BOOT.SYS to /Timeout after
          5 seconds and continue the boot process using the /Default option
          #2. Other command line parameters will be introduced  in the next
          section.

          This example proves that one menu is not enough  when you need to
          make more than one  independent decision. Just imagine  you would
          also like to specify whether to load your  keyboard macro program
          or not: this  would take another  four options! Example 2.1  will
          show a better solution.


          BOOT.SYS Command Line Parameters

          Most of the command line parameters of BOOT.SYS have already been
          introduced informally and  they are explained  in detail in  this
          chapter.(1)

            /CXhh  Color to be used for the menu, usually  specified by two
            /Cn    hexadecimal digits hh ;  if you prefer  you may use  the
                   decimal equivalent n instead.  The values for hh  can be
                   taken from the following table (the background gives the
                   first and the foreground the second digit):

                         color      background     foreground
                                                 normal  bright
                         black          0?         ?0      ?8
                         blue           1?         ?1      ?9
                         green          2?         ?2      ?A
                         cyan           3?         ?3      ?B
                         red            4?         ?4      ?C
                         magenta        5?         ?5      ?D
                         brown          6?         ?6      ?E
                         white          7?         ?7      ?F

                   For monochrome systems use one of  the following values:
                   02 =normal, 2F =high intensity, 70 =reverse video (hexa-
                   decimal).
                   Default value: /CX2F (bright white on green)

            /Dd    Default option: the arrow will point to  that option and
                   if there is a timeout specified then that option will be
                   chosen.
                   Default value: /D1

            /Ln    Number of  positions to indent  the option numbers  from
                   the left edge of the screen.
                   Default value: /L5




          --------------------
          1 You may use '-' instead of '/' as the switch character.

          BOOT.SYS                     -  17  -                Version 1.27



            /P     Display the menu identifier in the lower right corner of
                   the screen. This  may be useful  for setting up  complex
                   menu systems and it is explained in example 3.1.
                   The displayed identifier is the  'menu_selector' parame-
                   ter you give to BOOT.COM to retrieve the  choice for the
                   current menu.

            /Sn    Spacing between the option lines.
                   Default value: /S2 (double-spaced)

            /Tn    Timeout: If  the user does  not press  any key within  n
            /T-n   seconds (or  n clock  ticks  for /T-n ,  18.2 ticks  per
                   second),  then  execution  continues  with  the  default
                   option. Pressing any key within the  specified time dis-
                   ables the timeout.
                   /T0 is legal; BOOT.SYS will check if there is a key code
                   waiting in the keyboard buffer  and continue immediately
                   if the buffer is  empty. Most BIOSes accept  key presses
                   right after the initial beep.
            /T     No timeout; this is the default.

            /Uc    Shift character:  All characters preceded  by c will  be
                   displayed  upper-case,   all  others  lower-case.   This
                   applies to the letters 'a' to 'z' on  the TOP and BOOT.n
                   lines. To display a c on the screen, write cc .
                   There is no  default value for c ;  /U^ or /U~  are good
                   choices.
            /U     All characters 'a'  to 'z' will  be upper-case. This  is
                   the default.


          Level 2: Several Independent Menus Following Each Other

          Example 1.3 proved that there are situations where  you need more
          than one  menu: whenever  you  have to  make several  independent
          decisions.



          Ex 2.1 Choose
                   -  whether you want a RAM disk, and
                   -  whether you need ANSI.SYS.
                 If the user does not press any key within 5 seconds then
                 take the defaults of RAM disk and no ANSI.SYS.


                 [SCREEN]                      [SCREEN]

          BOOT.SYS                     -  18  -                Version 1.27



          CO.21  DEVICE=c:\bin\BOOT.SYS /T5
                 DEVICE=BOOT.A /D2
                 DEVICE=TOP  Do you need a RAM disk?
                 DEVICE=BOOT.1 no
                 DEVICE=BOOT.2 yes, 64K RAM disk
                 DEVICE=c:\dos\VDISK.SYS size=64 sector=512 dir=64
                 DEVICE=BOOT.B /D1
                 DEVICE=TOP  Do you need ANSI.SYS?
                 DEVICE=BOOT.1 no
                 DEVICE=BOOT.2 yes, ANSI.SYS
                 DEVICE=c:\dos\ANSI.SYS
                 DEVICE=BOOT.Z  {this line is optional, omit it!}
                 DEVICE=BOOT.END



          AU.21  ECHO OFF
                 CLS
                 c:\bin\BOOT A >NUL:             {note the 'A'!}
                 IF ERRORLEVEL 2 GOTO VDISK      {Be sure to always test
                 IF ERRORLEVEL 1 GOTO NO_VDISK    ERRORLEVELs in descending
                 ECHO BOOT.SYS is not loaded!     order and immediately
                 GOTO DONE                        after BOOT.COM!}
                 :VDISK
                 COPY c:\COMMAND.COM d: >NUL:
                 SET COMSPEC=d:\COMMAND.COM
                 GOTO DONE
                 :NO_VDISK
                 ECHO Sorry, there is no RAM disk
                 GOTO DONE
                 :DONE
                 PATH c:\dos;c:\bin



          The first menu  is introduced by the  BOOT.A line, the  second by
          BOOT.B , etc., up to  BOOT.Y , giving a maximum of 25  menus. The
          BOOT.Z line  is optional and  should be  omitted here for  better
          error checking; it's use will become clear with example 3.1.

          The command line parameter  /T sets a timeout value of  5 seconds
          for all menus. Alternately, command line parameters may be speci-
          fied on the  BOOT.A , etc., lines, and  apply only to  that menu,
          such as /D  in this example. Actually  both can be  combined: The
          parameters on the BOOT.SYS line set the defaults and these can be
          changed for specific menus.

          If you use  more than one menu  you must tell BOOT.COM  which one
          you mean by giving the corresponding letter. BOOT.COM without any
          command line parameters displays the choices for all menus.

          BOOT.SYS                     -  19  -                Version 1.27



          Sometimes the order of loading of different device drivers may be
          important. Thus  it  is possible  that a  device  driver must  be
          loaded between  two menus. This  can be  done with the  following
          extension:



          CO.22  DEVICE=c:\bin\BOOT.SYS /T5
                 DEVICE=BOOT.A /D2
                 DEVICE=TOP  Do you need a RAM disk?
                 DEVICE=BOOT.0
                 {device drivers}
                 DEVICE=BOOT.1 no
                 DEVICE=BOOT.2 yes, 64K RAM disk
                 DEVICE=c:\dos\VDISK.SYS size=64 sector=512 dir=64
                 DEVICE=BOOT.0
                 {device drivers}
                 DEVICE=BOOT.B /D1
                 DEVICE=TOP  Do you need ANSI.SYS?
                 DEVICE=BOOT.1 no
                 DEVICE=BOOT.2 yes, ANSI.SYS
                 DEVICE=c:\dos\ANSI.SYS
                 DEVICE=BOOT.END



          In each menu  the first option may  be preceeded and/or  the last
          option followed  by BOOT.0 ;  any device drivers  (or other  com-
          mands) listed under this 'option' are always loaded/executed when
          this menu is displayed at all.

          Note: It is easiest  to picture BOOT.SYS as 'executing'  the com-
          mands under the  first BOOT.0 , followed by  menu A and  the com-
          mands under the second BOOT.0 , and finally  'executing' menu B .
          In fact this is not correct! DOS begins by executing the commands
          up to and including BOOT.SYS . At this point  BOOT.SYS takes over
          and processes  all menus  down  to BOOT.END .  Processing a  menu
          means that  the user  selects one  of the  options, and  BOOT.SYS
          wipes out the menu definition lines and the  command lines of the
          other options.  When BOOT.SYS  has processed the  last menu,  DOS
          comes in again  and executes the  commands that BOOT.SYS has  not
          wiped out, including the ones after BOOT.END .


          Level 3: Nested Menus

          For a sophisticated system  configuration it may be  desirable to
          have nested menus. This leads to a logical  extension of level 2:
          within any option you  can embed an entire sequence  of submenus.
          Example 3.1 may  not be a  very good one,  but 3.2 will show  how
          this can be used in real life.


                 [SCREEN]                      [SCREEN]

          BOOT.SYS                     -  20  -                Version 1.27



                 [SCREEN]                      [SCREEN]



          CO.31  DEVICE=c:\bin\BOOT.SYS /T5 /P
                 DEVICE=BOOT.A /D2                  {A}
                 DEVICE=TOP  Do you need a RAM disk?
                 DEVICE=BOOT.1 no
                 DEVICE=BOOT.2 yes, RAM disk
                   {a}
                   DEVICE=BOOT.A /T                 {A2A}
                   DEVICE=TOP  What size RAM disk do you need?
                   DEVICE=BOOT.1  64K
                   DEVICE=c:\dos\VDISK.SYS size=64 sector=512 dir=64
                   DEVICE=BOOT.2 128K
                   DEVICE=c:\dos\VDISK.SYS size=128 sector=512 dir=64
                   {b}
                   DEVICE=BOOT.B                    {A2B}
                   DEVICE=TOP  Do you want COMMAND.COM to be
                   DEVICE=TOP  copied to the RAM disk?
                   DEVICE=BOOT.1 yes
                   DEVICE=BOOT.2 no
                   {c}
                   DEVICE=BOOT.Z
                   {d}
                 DEVICE=BOOT.B /D1                  {B}
                 DEVICE=TOP  Do you need ANSI.SYS?
                 DEVICE=BOOT.1 no
                 DEVICE=BOOT.2 yes, ANSI.SYS
                 DEVICE=c:\dos\ANSI.SYS
                 DEVICE=BOOT.END



          AU.31  ECHO OFF
                 CLS
                 c:\bin\BOOT A >NUL:           {note the 'A'!}
                 IF ERRORLEVEL 2 GOTO VDISK_1
                 IF ERRORLEVEL 1 GOTO NO_VDISK
                 ECHO BOOT.SYS is not loaded!
                 GOTO DONE
                 :VDISK_1
                 c:\bin\BOOT A2B >NUL:         {note the 'A2B'!}
                 IF ERRORLEVEL 2 GOTO DONE
                 IF ERRORLEVEL 1 GOTO VDISK_2
                 GOTO DONE
                 :VDISK_2
                 COPY c:\COMMAND.COM d: >NUL:
                 SET COMSPEC=d:\COMMAND.COM
                 GOTO DONE
                 :NO_VDISK
                 ECHO Sorry, there is no RAM disk
                 GOTO DONE

          BOOT.SYS                     -  21  -                Version 1.27



                 :DONE
                 PATH c:\dos;c:\bin



          The command line  switch /P ( /Path)  enables the display of  the
          menu identifiers in  the lower right  corner of each menu.  These
          are the same strings that are shown as comments in the CONFIG.SYS
          listing and used as parameters to BOOT.COM in AUTOEXEC.BAT.(1)

          If the  user selects  option 1  (no RAM  disk) in  menu {A}  then
          everything  will be  as  in  example  2.1,  but if  option  2  is
          selected, a submenu(2) to  specify the size of the RAM  disk will
          be presented as well  as another submenu to specify  whether COM-
          MAND.COM should be copied to the RAM disk.

          Let us  now  examine  more closely  what  happens when  the  user
          selects option 2 (keeping in mind what was said at the end of the
          Level 2 chapter):

          First any commands at  {a} are executed. Then menu {A2A}  is dis-
          played with no timeout, so the user must  make a selection before
          the execution continues. At {b} there could be  a BOOT.0 line and
          the  associated commands  would  be  executed whenever  the  user
          selects option 2 in  menu {A}. Then  menu {A2B} is processed  and
          the only result is that  the choice is saved. At {c}  again there
          could be a  BOOT.0 line (like {b}).  Any further commands  at {d}
          are executed  (like {a}), and  finally processing continues  with
          menu {B}.

          The role  of  the  BOOT.Z line  should  now become  clear:  every
          sequence of menus (starting with BOOT.A , BOOT.B ,  etc.) is ter-
          minated with a BOOT.Z . For the top level menu sequence BOOT.Z is
          not required because BOOT.END  takes its place, and  BOOT.SYS can
          do better checking of nesting errors if you omit BOOT.Z .





          --------------------
          1 The menu identifier describes how you got to the current menu:
          if it says 'A2B', that means that
            - you have chosen option 2 on the first first-level menu ('A')
            - this option has at least two submenus, and you have already
              made your choice on the first submenu (the 'A2A' menu)
            - you are now looking at the second submenu ('A2B').
          'A2A' and 'A2B' are menus at level 2, and the level number is
          displayed along with the menu identifier.

          2 The contents of option 2 are indented to illustrate the submenu
          relationship.
          Note: If your editor replaces series of spaces with tabs, then
          columns may not align properly on the screen.

          BOOT.SYS                     -  22  -                Version 1.27



          In AUTOEXEC.BAT BOOT.COM retrieves the choice in menu {A2B}. How-
          ever, you must  first make sure that  the user did  indeed choose
          option 2 in menu  {A} before asking for  the choice in  {A2B}. If
          the choice in {A} other  than 2 then there is no value  for {A2B}
          and BOOT.COM displays an error message.

          You can also  call BOOT.COM without  any command line  parameters
          and it will  display a list  of all the  menus processed and  the
          corresponding choices.

          Theoretically  there  is no  limit  to  the  nesting  level,  but
          BOOT.SYS cannot display (and  remember the choices of)  more than
          25 menus, so you cannot go deeper than 25.

          Although BOOT.SYS cannot display more than 25 menus per run (most
          users probably would not  put up with more than 5  menus anyway),
          the number of  menus in the entire  menu tree may be  much larger
          than that.  DOS enforces  some upper  limit on the  size of  CON-
          FIG.SYS, probably 64K Bytes.



          The final example shows  parts of    [SCREEN]
          CONFIG.SYS and  AUTOEXEC.BAT  for
          my personal system configuration.

                 [SCREEN]                      [SCREEN]



          CO.32  break=off
                 buffers=32
                 country=041,437,c:\dos\country.sys
                 files=20
                 lastdrive=H
                 stacks=9,128
                 DEVICE=C:\BOOT\BOOT.SYS /L18 /U^ /CX2F
                 DEVICE=BOOT.A /T0 /CX4F /D1
                 DEVICE=TOP
                 DEVICE=TOP
                 DEVICE=TOP       ^Select any special boot-up options:
                 DEVICE=TOP
                 DEVICE=BOOT.1 >>> ^N^O^N^E <<<
                 DEVICE=BOOT.2 ^U^N^I^F^O^R^M  -  ^Access alien diskettes
                 device=c:\ut\uniform\uniform.sys at+ dr96=0
                 DEVICE=BOOT.3 ansi.sys
                 device=c:\dos\ansi.sys
                 DEVICE=BOOT.4 ^Insert an additional device driver
                 DEVICE=BOOT.EDIT                   {see the next section}
                 DEVICE=DUMMY FILLER DUMMY FILLER DUMMY FILLER
                 DEVICE=BOOT.5 ^Alt-^Ctrl-^Del = cold boot
                 DEVICE=BOOT.OPTION BOOTASSIST      {see the next section}

          BOOT.SYS                     -  23  -                Version 1.27



                 DEVICE=BOOT.B /T5
                 DEVICE=TOP
                 DEVICE=TOP
                 DEVICE=TOP       ^Select operating environment:
                 DEVICE=TOP
                 DEVICE=BOOT.1 ^M^S-^D^O^S with 1^M^B disk cache
                 device=c:\386max\386max.sys ext=1384
                 device=c:\386max\386load.sys prog=c:\dos\cache.exe 1024 ON
                                  /EXT /Q
                 device=c:\386max\386load.sys size=4216
                                  prog=c:\dos\vdisk.sys 360 512 64 /E:8
                 shell=c:\command.com /p /e:300
                 DEVICE=BOOT.2 ^M^S-^D^O^S without a disk cache
                 device=c:\386max\386max.sys ext=360
                 device=c:\386max\386load.sys size=4216
                                  prog=c:\dos\vdisk.sys 360 512 64 /E:8
                 shell=c:\command.com /p /e:300
                 DEVICE=BOOT.3 ^D^E^S^Qview
                   DEVICE=BOOT.A /T5 /D2
                   DEVICE=TOP
                   DEVICE=TOP
                   DEVICE=TOP    ^Select ^D^E^S^Qview configuration:
                   DEVICE=TOP    (size of 1st window, others 12k^B less)
                   DEVICE=TOP
                   DEVICE=BOOT.1 ^Standard: 535^K^B free
                   device=c:\dv\qemm\qemm.sys extmem=360
                   device=c:\dos\vdisk.sys 360 512 64 /E:8
                   DEVICE=BOOT.2 ^Extended: 546^K^B free
                   device=c:\dv\qemm\qemm.sys extmem=360 ram rom
                   device=c:\dos\vdisk.sys 360 512 64 /E:8
                   DEVICE=BOOT.3 ^Huge: 639^K^B free (no graphics!)
                   DEVICE=REM  use LOADHI NOEGA
                   device=c:\dv\qemm\qemm.sys extmem=360 ram rom
                                              include=A000-B7FF
                   device=c:\dos\vdisk.sys 360 512 64 /E:8
                   DEVICE=BOOT.Z
                   shell = c:\command.com /p /e:300
                 DEVICE=BOOT.4 ^Windows 386
                 device=c:\ut\win386\smartdrv.sys 1024
                 device=c:\dos\vdisk.sys 360 512 64 /E:8
                 shell=c:\command.com /p /e:300
                 DEVICE=BOOT.5 ^Turbo ^Debugger 386 and ^M^S-^D^O^S
                 device=c:\tc\td\tdh386.sys
                 shell=c:\command.com /p /e:300
                 DEVICE=BOOT.6 plain ^D^O^S
                 device=boot.option free            {see the next section}
                 DEVICE=REM  Note: BOOT.COM will return ERRORLEVEL 0
                 DEVICE=BOOT.END

          BOOT.SYS                     -  24  -                Version 1.27



          AU.32  path c:\dos;c:\bin;c:\ut;c:\wp\lm
                 C:\BOOT\BOOT A >NUL:            {see the next section}
                 if errorlevel 5 if not errorlevel 6 c:\boot\boot
                                      bootassist cold >nul:
                 C:\BOOT\BOOT B >NUL:
                 if errorlevel 5  set C386=TD    {Be sure to always test
                 if errorlevel 5  goto boot_b     ERRORLEVELs in descending
                 if errorlevel 4  set WIN=Y       order and immediately
                 if errorlevel 4  set C386=NONE   after BOOT.COM!}
                 if errorlevel 4  goto boot_b
                 if errorlevel 3  goto boot_b3
                 if errorlevel 1  set C386=MAX
                 if errorlevel 1  goto boot_b
                 goto plain_dos
                 :boot_b3
                 set C386=QEMM
                 set DV=Y
                 C:\BOOT\BOOT B3A >NUL:
                 if errorlevel 4  set C386=MAX
                 if errorlevel 4  goto boot_b
                 if errorlevel 3  c:\dv\qemm\loadhi c:\dv\qemm\noega
                 :boot_b
                 if .%C386% == .MAX   c:\386max\386load size=1052 envname
                                      prog=c:\dos\plus\kbext
                 if .%C386% == .TD    c:\dos\plus\kbext
                 if .%C386% == .NONE  c:\dos\plus\kbext
                 if .%C386% == .QEMM  c:\dv\qemm\loadhi c:\dos\plus\kbext
                 quikkey 24
                 if .%WIN% == .Y goto no_ced
                 if .%DV%  == .Y goto no_ced
                 if .%C386% == .MAX   c:\386max\386load size=9892 envname
                                      prog=c:\ut\ced
                                      -b500,200,300,128,128,128
                                      -fc:\ut\ced.cfg
                 if .%C386% == .TD    c:\ut\ced -b500,200,300,128,128,128
                                      -fc:\ut\ced.cfg
                 if .%C386% == .QEMM  c:\dv\qemm\loadhi c:\ut\ced
                                      -b500,200,300,128,128,128
                                      -fc:\ut\ced.cfg
                 :no_ced
                 @echo off
                 if .%WIN% == .Y  cd c:\ut\win386
                 if .%WIN% == .Y  win386
                 if .%DV%  == .Y  cd c:\dv
                 if .%DV%  == .Y  dv
                 :plain_dos



          The first menu is for 'special needs': it has a  timeout of 0 and
          defaults to  an empty  option. Whenever  I want  to read  non-DOS
          diskettes or use ANSI.SYS I press a key immediately after the two
          beeps at boot-up (usually the space bar). This gives me the 'spe-
          cial needs' menu, which appears in red to distinguish it from the

          BOOT.SYS                     -  25  -                Version 1.27



          other menus  that are green.  You also might  put in here  device
          drivers for your scanner, your CD-ROM drive, or any other devices
          that you do not use frequently.

          The boot.edit and boot.option lines will be explained in the next
          section.

          The second menu (which is usually the first to be displayed) lets
          me choose the operating environment I am going to use:

            - MS-DOS with disk cache
            - MS-DOS without disk cache (more EMS memory)
            - DESQview 386
            - Windows 386
            - Turbo Debugger with 386 support.

          Depending on which operating environment I selected,  one of four
          mutually exclusive 386 control programs are used, and all of them
          have to be loaded from CONFIG.SYS, so prior  to BOOT.SYS I needed
          at least  4 different  versions of  CONFIG.SYS. Some  of the  386
          control programs let me  load other device drivers and  TSRs into
          'high DOS memory' above the 640K, so AUTOEXEC.BAT  is affected as
          well. This menu could  also be used to select other  command pro-
          cessors like  *nix-like  shells or  other  replacements for  COM-
          MAND.COM.

          When I  select  DESQview I  get  a submenu  that  lets me  choose
          between three different QEMM set-ups; each option gives different
          amounts of memory available, along with other advantages and dis-
          advantages (e.g., if I do not want to  use any graphics programs,
          an additional 96K bytes of memory can be  made available for each
          window).

          BOOT.SYS                     -  26  -                Version 1.27



          BOOT.SYS Extensions

          This chapter explains extensions  to BOOT.SYS that go  beyond the
          menu system.

             BOOT.EDIT

          You can  edit individual  lines on  the fly while  booting up  by
          including the following lines in CONFIG.SYS (between the BOOT.SYS
          and BOOT.END lines):


                 DEVICE=BOOT.EDIT
                 {any standard CONFIG.SYS command}

                                               [SCREEN]
          When  the  menu  option  containing
          these lines  is selected,  BOOT.SYS
          displays a screen  with a box  that
          lets you edit the text to the right
          of the equal  sign. The keyword  to
          the   left  of   the   equal   sign
          ( DEVICE ,  FILES , etc.)  and  the
          equal sign are required  and cannot
          be edited.

          All the  usual  editing keys  are supported;  a  summary will  be
          displayed on the screen. There is one restriction:  the length of
          the line cannot be increased!(1)

          When you press <Enter>,  your edits are saved and  execution con-
          tinues. To ignore this line and continue, press <Esc> instead.

          You may put some explanatory text to the right  of BOOT.EDIT  and
          BOOT.SYS will display your  text instead of the  standard message
          explaining the edit keys. If you need more than  one line you can
          use as many BOOT.EDIT lines  as you like - it works  exactly like
          DEVICE=TOP . Example:



          --------------------
          1 There are several ways to get around this limitation:
            - Insert spaces into the line, e.g. between the name of the
              device driver and the parameters (DOS discards any spaces to
              the left or immediately to the right of the equal sign, and
              most text editors do not save spaces at the end of the line).
            - Insert dummy text that you can erase while editing the line.
            - Insert normal spaces at the end of the line followed by a
              single 'hard space'; this is the character with the ASCII
              value 255, and it can usually be entered by holding down the
              Alt key, entering 255 on the numeric keypad, and releasing
              the Alt key.
          Some of these options may not work with all versions of DOS.

          BOOT.SYS                     -  27  -                Version 1.27



                 DEVICE=BOOT.EDIT   You may experiment with different
                 DEVICE=BOOT.EDIT   BUFFERS=n values (<Esc> = ignore):
                 BUFFERS=020



             BOOT.OPTION FREE

          If the line


                 DEVICE=BOOT.OPTION FREE


          is part of  at least one  of the options  that the user  selects,
          then BOOT.SYS will not stay resident as a  device driver.(1) This
          lets you  create a  bare-bones DOS  option for  checking out  TSR
          conflicts and the like.

          If BOOT.SYS does not  stay resident, BOOT.COM has no way  to tell
          you  what options  were  chosen -  it  does  not even  know  that
          BOOT.SYS has  done its work!  In that case  it displays an  error
          message indicating  that BOOT.SYS  is  not loaded  and return  an
          ERRORLEVEL code of 0, which you can use to  avoid loading TSRs in
          AUTOEXEC.BAT.

          An example of this  option is part of the last  sample configura-
          tion above.

             BOOT.OPTION BOOTASSIST

          There exist system configurations and software packages that make
          your system crash when you hit the  Alt-Ctrl-Del key combination.
          BOOTASSIST lets you modify  the behavior of Alt-Ctrl-Del,  and it
          may  be of  help  in your  particular  situation.  To set  it  up
          requires two steps; the first is to include the line


                 DEVICE=BOOT.OPTION BOOTASSIST


          somewhere between BOOT.SYS  and BOOT.END.(2) Executing  this line
          increases the resident size  of BOOT.SYS by a few bytes  but does
          not change anything else. The second step is to activate BOOTASS-
          IST by  executing  one of  the following  commands  from the  DOS
          prompt or in a batch file (possibly AUTOEXEC.BAT):

          --------------------
          1 There may be versions of DOS with which this does not work. Any
          reports are appreciated!

          2 You can put it wherever a normal CONFIG.SYS command is accept-
          able, either as part of an option, or between BOOT.Z and BOOT.END
          to have it available all the time.

          BOOT.SYS                     -  28  -                Version 1.27



                 BOOT BOOTASSIST WARM

                 BOOT BOOTASSIST COLD

                 BOOT BOOTASSIST INHIBIT


          Each of these  commands does to  Alt-Ctrl-Del what its  parameter
          implies: WARM  is  just the  normal boot  process,  COLD is  like
          turning the power off and back on, and INHIBIT disables Alt-Ctrl-
          Del. If you are  having problems with Alt-Ctrl-Del, one  of these
          command may help, but there's no guarantee! Your chances are best
          if you load all  your resident utilities before  activating BOOT-
          ASSIST.(1)

          The remainder of this  section is a technical explanation  of how
          BOOTASSIST works. The resident part is a keyboard interrupt (09h)
          handler, which is  inserted at the head  of the handler  chain by
          one of the commands above.(2) Being the first in the chain it can
          usually perform  the required action  which may  or may not  work
          with your set-up.  If you want  to load another resident  utility
          program that hooks up  to the same interrupt, you can  unhook the
          BOOTASSIST handler by issuing the command


                 BOOT BOOTASSIST OFF


          and put it back at  the head of the chain after loading  the TSR.
          If the INT 09h vector  does not point to the  BOOTASSIST handler,
          it cannot be unhooked anymore and you get  an error message indi-
          cating that another program has grabbed the vector, including the
          new address.

          If BOOTASSIST does not work properly and turning  it OFF does not
          generate an error message, then BOOTASSIST cannot solve your par-
          ticular configuration problem.

             BOOT.OPTION EXTMON for Laptops

          When you  use BOOT.SYS  with a  laptop computer and  you have  an
          external monitor attached, then BOOT.SYS will usually  come up on
          the internal  monitor. This  is  a minor  inconvenience which  is
          addressed by  EXTMON: EXTMON  switches to  the external  monitor.
          However, because there are  no standards for this  function among


          --------------------
          1 If you use one of the KEYBxx keyboard drivers to get a non-U.S.
          keyboard layout (national language support), you must activate
          BOOTASSIST after KEYBxx.

          2 Warning: SideKick insists on being the first in the chain and
          thus defeats this scheme.

          BOOT.SYS                     -  29  -                Version 1.27



          the different laptop manufacturers (and sometimes not even within
          a product  line), it has  to be  implemented separately for  each
          system.

          At the  time of this  writing support  is implemented for  Compaq
          portable and laptop  computers only. Support for  other computers
          may be added in the future if there is  interest and the relevant
          information is available.

          The syntax for EXTMON is


                 DEVICE=BOOT.OPTION EXTMON <type>


          where <type> is machine-specific  and can be taken from  the fol-
          lowing table:


               Manufacturer   <type>     Computer Models
               Compaq         COMPAQ     all Compaq portables  and lap-
                                         tops


          There are  two ways of  handling EXTMON,  depending on how  smart
          your computer is: If it is smart, it will not try to switch to an
          external monitor when there is none. In that case you can use the
          following lines in CONFIG.SYS,  which will make BOOT.SYS  use the
          right monitor everytime:


                 DEVICE=c:\bin\BOOT.SYS
                 DEVICE=BOOT.A                      {optional}
                 DEVICE=TOP  ...
                 DEVICE=BOOT.0
                 DEVICE=BOOT.OPTION EXTMON <type>   {<type> as above}
                 DEVICE=BOOT.1 ...
                   ...
                 DEVICE=BOOT.END


          If your  computer  cannot tell  whether  an external  monitor  is
          attached or not, you must use a different set-up:


                 DEVICE=c:\bin\BOOT.SYS
                 DEVICE=BOOT.A /D1 /T10
                 DEVICE=TOP  Which monitor do you want to use?
                 DEVICE=BOOT.1 Internal
                 DEVICE=BOOT.2 External
                 DEVICE=BOOT.OPTION EXTMON <type>   {<type> as above}

          BOOT.SYS                     -  30  -                Version 1.27



                 DEVICE=BOOT.B
                 DEVICE=TOP  ...                    {this is your menu}
                 DEVICE=BOOT.1 ...
                   ...
                 DEVICE=BOOT.END


          This will display an additional menu at the  very beginning where
          you can select the monitor to use. After a /Timeout of 10 seconds
          BOOT.SYS will select the /Default 1, the  internal screen. Press-
          ing the  '2' key within  that  time causes  it to  switch to  the
          external monitor for the next menu. This can be done even without
          seeing the menu A, and  menu B will be displayed right  where you
          want to see it.

          Warning: We strongly advise you to use a bootable diskette to try
          out the EXTMON  function! If the  switch does not work  properly,
          your internal screen  may go blank, and  you will have no  way of
          editing the CONFIG.SYS file of the disk you used to boot up!

             BOOT.OPTION COLOR

          Some people prefer  more colorful screens  to the white on  black
          used by  DOS. This option  lets you specify  any color (with  the
          same numbers as for the /C switch on  the BOOT.SYS command line),
          which will be used  immediately after the BOOT.SYS  menu.(1) How-
          ever, some  device drivers  use their  own colors,  and there  is
          nothing that BOOT.SYS could do to change that. Example:


                 DEVICE=BOOT.OPTION COLOR X1F       {bright white on blue}


          BOOT.COM Command Line Parameters

          The syntax of BOOT.COM is

                 BOOT <parm>

          where <parm> is one of the following:

          HELP
              Display a summary of this list.



          --------------------
          1 A value of 0 can be used to change the color to black on black,
          effectively hiding the messages generated from CONFIG.SYS.
          Executing CLS from AUTOEXEC.BAT or from the command line restores
          the default color. Warning: This is not recommended, because in
          case of a problem you will not be able to see any error messages,
          and you may have to boot from a diskette and change the color to
          find out what the problem is.

          BOOT.SYS                     -  31  -                Version 1.27



          VERSION
              Display whether this  is a registered  or a Shareware  evalu-
              ation version, including  short registration information  for
              the latter.

          WARM
              Do a warm boot (like Alt-Ctrl-Del).

          COLD
              Do a cold boot (like turning the power switch off and on).

          WARM and COLD accept an optional switch  ( /O ) for compatibility
          with very /Old BIOS versions.

          BOOTASSIST <p>
              See the chapter on BOOTASSIST.

          no parameter
              BOOT.COM  will display  something  similar to  the  following
              example:

                   The user selected the following menu choices:
                      A1
                      B3
                      B3A1

              This would mean that when you booted up your PC, you selected
              option 1 on the first menu (menu A) and option 3  on the sec-
              ond  menu (menu B);  that  option  apparently has  a  submenu
              (menu B3A) and you selected option 1.
              If there is  only one menu, then  BOOT.COM will also  set the
              ERRORLEVEL (see below).

          <menu_selector>(1)
              This form is used for retrieving the  user's choices (usually
              in AUTOEXEC.BAT)  after  CONFIG.SYS has  been processed.  The
              menu  selector is  the  string  of letters  and  digits  that
              uniquely  identifies  a menu.(2)  Expanding  on  the  example
              above, BOOT b would display  3 and set the  DOS ERRORLEVEL(3)
              to 3, and BOOT b3a would display/return 1. Of course you must
              always start testing  with the top  level, and only when  you
              know that BOOT b returns 3, you can ask for BOOT b3a .


          --------------------
          1 If there is only one menu, then the <menu_selector> is
          optional.

          2 If you specify /P on the BOOT.SYS line in CONFIG.SYS the menu
          selector (and the nesting level) is displayed in the lower right
          corner of each menu.

          3 Be sure to always test ERRORLEVELs in descending order and
          immediately after the call to BOOT.COM!

          BOOT.SYS                     -  32  -                Version 1.27



              If  BOOT.SYS is  not  installed  or did  not  stay  resident,
              BOOT.COM displays an error message and  returns an ERRORLEVEL
              of 0.


          PAUSE.SYS, a Debugging Aid

          You may  have some very  sophisticated set-ups by  now, and if  a
          certain configuration does not  work right it can be  quite chal-
          lenging to find the problem, especially because the messages from
          the various drivers scroll by very quickly on fast machines.

          PAUSE.SYS provides  various functions in  CONFIG.SYS that may  be
          helpful; the primary function  is similar to what the  PAUSE com-
          mand does in a batch file:


                 DEVICE=c:\bin\PAUSE.SYS any text you like


          will display  the  text and  wait for  you to  press  any key  to
          continue. The text is always translated to lower  case; to get an
          upper case character, preceed  the character with a caret (  ^ ),
          and to display a caret, write two carets.

          PAUSE.SYS accepts  some  command line  switches  that change  its
          behavior:


                 DEVICE=c:\bin\PAUSE.SYS /C         {clear the screen}
                 DEVICE=c:\bin\PAUSE.SYS /P         {do a PrintScreen}
                 DEVICE=c:\bin\PAUSE.SYS /O any text {output only, no wait}
                 DEVICE=c:\bin\PAUSE.SYS /Exxx      {ESC sequence}


          All of these options suppress the wait for a key. The last option
          is intended to send escape sequences to ANSI.SYS or a replacement
          with similar capabilities;  the following lines would  change the
          screen color to bright  white on blue and clear the  screen, pro-
          vided that ANSI.SYS is already loaded:


                 DEVICE=c:\bin\PAUSE.SYS /E[1;37;44m
                 DEVICE=c:\bin\PAUSE.SYS /E[2^J     {upper case J}


          To get a summary of the functions of PAUSE.SYS, just


                 TYPE PAUSE.SYS


          from the DOS prompt.

          BOOT.SYS                     -  33  -                Version 1.27



          Closing Remark

          By now you have versions of CONFIG.SYS and  AUTOEXEC.BAT that are
          much more  sophisticated  than usual.  Unfortunately  there is  a
          growing  trend in  the  software  industry to  provide  automated
          installation programs that read and update your system configura-
          tion files, and this leads to some problems:

            - There are  installation programs  that will boldly  overwrite
              your configuration files or make other undesirable changes.

            - Others will  try to make  sense of  the current contents  and
              then change to whatever their programs  preferences are; they
              will certainly not be  able to handle CONFIG.SYS  and AUTOEX-
              EC.BAT correctly when BOOT.SYS is installed.

            - A third  category of installation  programs will examine  the
              contents of  CONFIG.SYS and  abort the  installation if  they
              find   something   offensive.   The   prime    examples   are
              MS Windows 386 and MS Windows 3.0, which refuse to install if
              they find a  mention of another  386 control program in  CON-
              FIG.SYS.

            - In a  class all by  itself it  Quarterdeck's QEMM 5.0,  which
              comes with an installation program called  OPTIMIZE that will
              change your  CONFIG.SYS and  reboot several times  to find  a
              good system configuration.  OPTIMIZE obviously cannot  handle
              your sophisticated CONFIG.SYS and it will probably  end up in
              a 'crash  loop', making it  necessary to  boot from a  floppy
              disk to recover.(1)

          There are two possible  cures to this situation: The first  is to
          keep a duplicate of  CONFIG.SYS and AUTOEXEC.BAT on hand,  so you
          can examine the changes and integrate them at  the proper places.
          In fact, keeping current backups is always a good idea!

          The second  cure is to  patch IBMBIO.COM  and COMMAND.COM to  use
          other names for CONFIG.SYS and AUTOEXEC.BAT. Warning: This is not
          for the faint of heart! If you feel  somewhat uncomfortable doing
          this, then please do not even try! The  procedure is deliberately
          not explained  here, because if  you do  not have any  experience
          with patching files, you should not make your first steps in this
          field with your system  files.(2) - Now to the advantage  of this
          patch: You will never have to worry  about automated installation
          programs anymore, because these will assume that you  do not have

          --------------------
          1 For information on how to run OPTIMIZE, please look at "Answers
          to Common Question, How can I run...".

          2 A second word of warning: If you patch your system files and
          make a bootable diskette, the diskette will get copies of your
          patched system files, so you must use the new names for CON-
          FIG.SYS and AUTOEXEC.BAT on the diskette as well.

          BOOT.SYS                     -  34  -                Version 1.27



          either  CONFIG.SYS nor  AUTOEXEC.BAT,  they will  usually  create
          these files,  and you  can go  back and  look calmly  at how  the
          system should be set up for the program in  question and make any
          necessary changes yourself.



                             Answers to Common Questions


          Can I use all characters to create boot-up menus?

          Yes, to create menus you may use any of the  characters of the PC
          character set (including  the box and foreign  characters) except
          for NUL, HT, BS,  LF, CR, and Ctrl-Z. The BEL  character (Ctrl-G)
          sounds the bell and displays a space.


          I can't get the columns to align properly...

          If your editor converts multiple spaces to tabs  then the text on
          the screen may  not align properly. Your  best bet is to  set the
          editor so that  it will not compress  spaces to tabs.  - However,
          everything should  be fine if  the tabs are  on every 8th  column
          (standard for DOS) and there  are no (or a multiple of  8) spaces
          to the left of TOP or BOOT.n .


          Why do I get error messages like 'Unrecognized command' from CON-
          FIG.SYS?

          With versions of DOS prior to 4.00, commands that have fewer than
          three characters to the  right of the equal sign cannot  be wiped
          out cleanly, and DOS  will give an error message similar  to 'Un-
          recognized command'.

          This can  usually be fixed  by appending ' x'  to the command  in
          question; thus  'LASTDRIVE=F'  would become  'LASTDRIVE=F x'  and
          'BREAK=ON' would become 'BREAK=ON x'. Commands  with numbers like
          'FILES=20' accept leading zeros, like 'FILES=020'. I  do not know
          how universal these work-arounds  are - you will have  to experi-
          ment if they work with your version of DOS.


          My choice is not recognized in AUTOEXEC.BAT...

          Make sure  that all of  your IF ERRORLEVEL  tests start with  the
          highest values first.

          BOOT.SYS                     -  35  -                Version 1.27




          I get an error message from BOOT.SYS...

          If BOOT.SYS finds an  error in your CONFIG.SYS file, it  tries to
          display a useful error message and aborts.  Aborting implies wip-
          ing out all the commands between BOOT.SYS and BOOT.END . BOOT.COM
          then returns  an  ERRORLEVEL  code of  0  and displays  an  error
          message, too.


          Possible problem with BREAK=ON

          If you  use  the BREAK=ON  command in  your  CONFIG.SYS file  you
          should make sure that  BREAK really is enabled by  entering BREAK
          at the DOS prompt. If BREAK is off, try  moving the BREAK=ON com-
          mand below the BOOT.END line.

          To avoid this  problem altogether you  can enable BREAK later  in
          AUTOEXEC.BAT with the command BREAK ON .


          BOOT.SYS doesn't work right with XMAEM.SYS in PC-DOS 4.0x...

          PC-DOS 4.0x  and probably  later versions  process the  XMAEM.SYS
          driver in a  special way: it is  loaded before any other  part of
          CONFIG.SYS is processed.  Unfortunately this makes  it impossible
          for BOOT.SYS to control that driver because  XMAEM.SYS is already
          installed when BOOT.SYS runs.

          A work-around  to this  problem is  to rename  XMAEM.SYS to  some
          other name (like XMAEMX.SYS ) and to use that name in the DEVICE=
          command. Load the renamed driver early in  your CONFIG.SYS, defi-
          nitely before XMA2EMS.SYS .


          Will BOOT.SYS get along with automated installation programs that
          modify CONFIG.SYS and/or AUTOEXEC.BAT?

          The answer is no! Please read the chapter "Closing remark" in the
          Installation section for more information.

          BOOT.SYS                     -  36  -                Version 1.27




          How can I run the QEMM 5.0 installation utility (OPTIMIZE) with
          BOOT.SYS?

          To run OPTIMIZE do the following:
            -  Rename your CONFIG.SYS  and AUTOEXEC.BAT files  to something
               else.
            -  Create new  CONFIG.SYS  and AUTOEXEC.BAT  files and  include
               only those commands that  you wish to use for your  new QEMM
               configuration (don't include BOOT.SYS!).
            -  Run OPTIMIZE.
            -  Merge the new CONFIG.SYS and AUTOEXEC.BAT into  the old ver-
               sions as your new QEMM option.
          If you patched IBMBIO.COM and COMMAND.COM to  use different names
          for CONFIG.SYS and AUTOEXEC.BAT, then you must undo those patches
          or restore  the original  files,  because OPTIMIZE  will use  the
          standard file names.


          I have a certain configuration where Alt-Ctrl-Del crashes the
          system and forces me to hit the big red switch. Can BOOT.SYS
          help?

          Yes, BOOT.SYS may be  able to help. Follow the directions  in the
          BOOTASSIST chapter of the installation section. If  this does not
          help you may still be able to re-boot from  the command line (see
          BOOT.COM Command Line Parameters).


          The MS Windows 386 and Windows 3.0 installation programs (and
          maybe others as well) complain that I have a 386 memory manager
          installed...

          The installation programs examine the contents  of CONFIG.SYS and
          when they find  a mention of  386^MAX, QEMM, or similar  programs
          they complain (Windows 386 even refuses to install), because Win-
          dows does its own  386 memory management and cannot  coexist with
          another 386 control program at present. The  consequences of this
          for you as  a user of  BOOT.SYS are very  minor: you will need  a
          BOOT.SYS menu item specifically designated for  Windows, where no
          other memory manager is loaded.

          The quickest way to get Windows installed is to rename CONFIG.SYS
          to something  else -  the installation program  will run  without
          problems, even with one of the offensive programs loaded. It will
          create a new CONFIG.SYS containing all the commands that you will
          want to list under the BOOT.SYS Windows option  of your real CON-
          FIG.SYS file. Look at configuration 32 for an example.

          Please consult the  chapter "Closing remark" in  the installation
          section for some general information concerning automated instal-
          lation programs.

          BOOT.SYS                     -  37  -                Version 1.27




          What can I do if BOOTASSIST does not work?

          Try turning BOOTASSIST OFF; if this is successful then BOOTASSIST
          will not  work with your  configuration and  nothing can be  done
          about it. If you get an error message, please  refer to the BOOT-
          ASSIST chapter of the installation section.


          BOOT.COM says that BOOT.SYS is not installed...

          If BOOT.SYS is installed, there can be two reasons for this error
          message:

            - BOOT.SYS and BOOT.COM  are different versions -  please check
              the version number that each displays.

            - You are  using BOOT.OPTION  FREE, and BOOT.SYS  did not  stay
              resident; consequently BOOT.COM has no way of finding it now.
              The only  purpose of  BOOT.OPTION FREE  is to  define a  boot
              option that  will  start DOS  without  any resident  programs
              (like booting from the original DOS  distribution disk), e.g.
              for experimenting with  TSR conflicts, and  it should not  be
              used under normal circumstances.

          BOOT.SYS                     -  38  -                Version 1.27



                                   Revision History

          0.95   Beta release

          0.96   Fixed /v in BOOT.COM
                 Fixed invalid parm error

          1.00   First public release

          1.01   Allow '-' along with '/' for command line switches

          1.10   Documentation update, mention of ASP

          1.20   Fixed minor  bug that  disabled /Timeout  under some  very
                 special timing circumstances.
                 Added /Spacing to BOOT.SYS.
                 Individual CONFIG.SYS lines can  now be edited on  the fly
                 while booting up.
                 New parameters to BOOT.COM:
                   - "HELP", "/H", "/?", "?" to get a short command summary
                   - "VERSION" to get version information
                   - "WARM" and "COLD" to re-boot from  the command line or
                     from a batch file; "/O" switch  for compatibility with
                     old BIOSes
                 New feature to  make Alt-Ctrl-Del perform  a cold boot,  a
                 warm boot, or no boot (BOOTASSIST).
                 Option to keep BOOT.SYS from installing  its tiny resident
                 part to get a  minimal plain-DOS setup (may not  work with
                 all DOS versions).
                 New international support channel on CompuServe.
                 Free CompuServe IntroPak for registered users.
                 New retail distribution channel in the U.S.A. through PsL.

          1.21   Fixed bug that caused BOOT.SYS to hang when  it was called
                 from the first  line of CONFIG.SYS  and running under  DOS
                 4.xx.
                 Added new chapter "Quick Start" (Thanks, F.P.).
                 Added Home/End key support to the BOOT.SYS menus.

          1.22   Fixed bug that caused BOOT.SYS to ignore  the first switch
                 on the BOOT.A etc. lines under DOS 4.xx.

          1.25   Documentation update.
                 New BOOT.OPTION EXTMON  (Compaq: ok, Toshiba:  needs test-
                 ing) (Thanks, B.F.).
                 New BOOT.OPTION COLOR.
                 New PAUSE.SYS utility.
                 Fixed several minor bugs.

          1.26   Fixed a bug where BOOT.COM was reporting the wrong version
                 (Thanks, S.G.).

          BOOT.SYS                     -  39  -                Version 1.27



          1.27   Fixed a bug in PAUSE.SYS (Thanks E.R.).
                 Minor documentation update.
                 If /T0 is specified  and no key is pressed, then  the menu
                 does not flash on and off.
                 If no key  is pressed the  Shareware screen is never  dis-
                 played; this allows unattended boot-up without the risk of
                 waiting for a key to acknowledge the screen.
                 Several other internal tune-ups.


```
{% endraw %}

## FILE2547.TXT

{% raw %}
```
Disk No: 2547                                                           
Disk Title: BOOT.SYS                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: BOOT.SYS                                                 
Author Version: 1.27                                                    
Author Registration: $39.00                                             
Special Requirements: None.                                             
                                                                        
If you currently edit your CONFIG.SYS and AUTOEXEC.BAT files then reboot
to change your system configuration, you're doing work that BOOT.SYS    
should be doing.  BOOT.SYS makes it possible to display one or more     
menus at boot-up time and to execute different parts of your CONFIG.SYS 
and/or AUTOEXEC.BAT files depending on which options are chosen from a  
configuration menu.                                                     
                                                                        
You might need different drivers or memory configurations in your       
CONFIG.SYS depending on what application you're going to run.  In the   
past you had to either rename or edit your start-up files and reboot to 
get a different setup.  Now this process has become much easier and     
safer by using BOOT.SYS.                                                
                                                                        
The following features make BOOT.SYS a must-have for every sophisticated
PC installation:                                                        
                                                                        
~ Easy installation, detailed examples for every level of               
sophistication.                                                         
                                                                        
~ Up to nine options per menu (one line per option) and a freely        
definable prompt area at the top of the screen.                         
                                                                        
~ Up to 25 consecutive menus, each defining a different aspect of your  
system configuration.                                                   
                                                                        
~ Up to 25 levels of nested menus (submenus), simplifying a systematic  
approach to systems configuration.                                      
                                                                        
~ Only one version of CONFIG.SYS and AUTOEXEC.BAT; no copying/renaming  
of files and no rebooting.                                              
                                                                        
~ User-definable timeout and default option for each menu.              
                                                                        
~ Edit individual CONFIG.SYS lines on the fly while booting up.         
                                                                        
~ The ability to insert comments into CONFIG.SYS without generating     
error messages.                                                         
                                                                        
~ Uses Less than 200 bytes of resident DOS memory.                      
                                                                        
~ Warm or cold boot features from the DOS command line or from a batch  
file.                                                                   
                                                                        
~ Includes PAUSE.SYS for debugging complex CONFIG.SYS set-ups.          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989-1991 PC-SIG, Inc.                                         
```
{% endraw %}

## LICENSE.DOC

{% raw %}
```


          BOOT.SYS                   LICENSE.DOC               Version 1.27


          BOOT.SYS(tm) and the accompanying programs and documentation are

                       Copyright (c) 1989, 1990 Hans Salvisberg
                                 All rights reserved


          License Agreement

          BY INSTALLING BOOT.SYS ON YOUR SYSTEM YOU INDICATE YOUR AGREEMENT
          TO THE  FOLLOWING TERMS AND  CONDITIONS. IF YOU  DO NOT AGREE  TO
          THEM YOU ARE NOT ALLOWED TO USE THIS PROGRAM.

          BOOT.SYS AND THE  ACCOMPANYING PROGRAMS AND  DOCUMENTATION (LATER
          ON COLLECTIVELY REFERRED TO  AS BOOT.SYS) ARE DISTRIBUTED  AS IS.
          HANS SALVISBERG  (THE  AUTHOR) MAKES  NO  WARRANTY OF  ANY  KIND,
          EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED  TO WARRANTIES OF
          MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT
          TO THIS SOFTWARE AND DOCUMENTATION. IN NO EVENT  SHALL THE AUTHOR
          BE LIABLE FOR ANY DAMAGES, INCLUDING LOST  PROFITS, LOST SAVINGS,
          OR ANY OTHER INCIDENTAL  OR CONSEQUENTIAL DAMAGES ARISING  OUT OF
          THE USE  OF OR THE  INABILITY TO  USE THIS  PROGRAM, EVEN IF  THE
          AUTHOR HAS BEEN  ADVISED OF THE  POSSIBILITY OF SUCH DAMAGES,  OR
          FOR ANY CLAIM BY ANY OTHER PARTY.

          BOOT.SYS is  a copyrighted  work  protected by  Swiss, U.S.,  and
          international copyright law. It is not free, freeware,  or in the
          public domain. It is  distributed as Shareware, which  means that
          you may try it out  at no cost for three weeks; if  you determine
          that it fits your needs and you wish to use it regularly you must
          register. If you choose not to pay the registration fee, you must
          stop using BOOT.SYS after the initial trial period  and remove it
          from your computer, but you may still keep copies  of it and pass
          them on to others as outlined below.

          You may  give individual  copies of the  unregistered version  of
          BOOT.SYS to your  friends and associates for  evaluation purposes
          as described above. You must include all the  files (described in
          the READ.ME  file) that  make up BOOT.SYS  without any  modifica-
          tions, preferably in  the original self-extracting  LHarc archive
          file. You may upload  BOOT.SYS to the public section of  a public
          BBS, but you  may not place  it in any  user group or  commercial
          library or distribute it for  a fee or in any way sell  copies of
          it without express written permission from the Author.

          Under no circumstances may an unregistered version of BOOT.SYS be
          used in  a  commercial (business,  corporate, government,  educa-
          tional, or other  institutional) environment except for  the pur-
          pose of evaluation on a single computer.

          You may not modify  or dis-assemble BOOT.SYS, nor  distribute any
          modified or dis-assembled versions of BOOT.SYS.  BOOT.SYS may not
          be included  with any  other  product for  any reason  whatsoever
          without written permission from the Author.

          You may install your registered copy of BOOT.SYS on more than one
          computer at a time ONLY if no more than one of these computers is
          usually running  at the same  time. You may  make as many  backup
          copies of BOOT.SYS as you need for your personal backup purposes.

          You may NOT give, sell, or otherwise transfer  copies of the reg-
          istered version of BOOT.SYS  to any other person for  any reason.
          If  you register,  your  copy  of  BOOT.SYS will  have  a  unique
          registration number and display your name and  address. Your reg-
          istration including that information will be  transferable to any
          future  shareware  versions  of  BOOT.SYS,  which  will  then  be
          considered a registered version.

          No version of BOOT.SYS may be rented or leased.

          Any use or distribution of BOOT.SYS, which  violates this license
          agreement, will be  considered a copyright violation,  and prose-
          cuted to the full extent of the law.

          U.S. Government RESTRICTED  RIGHTS: Use, duplication,  or disclo-
          sure by the Government is subject to restrictions as set forth in
          subdivision  (b)(3)(ii)  of the  Rights  in  Technical  Data  and
          Computer Software clause at 252.227-7013.



          Registration

          BOOT.SYS is  not free! You  may try it  out at  no charge for  an
          initial trial period to  determine if it fits your needs.  If you
          want to continue to  use BOOT.SYS after the initial  trial period
          you must register. This method of software  distribution is known
          as Shareware.

          The registration fee  for a single copy  of BOOT.SYS is  SFR 70.-
          (exchange rate US$ to Swiss Francs is about $0.76  = SFR 1.- (Oc-
          tober 1990)). Payment of this fee entitles you to:

            * A disk with the current version of BOOT.SYS

            * A printed and bound manual

            * A special utility program that lets you transfer your license
              to any  later shareware  versions  of BOOT.SYS  that you  may
              obtain from any shareware source (getting an upgrade from the
              author requires new registration).

            * Free support (by electronic mail or by mail) for the first 90
              days after  payment,  consisting of  answering questions  and
              fixing any  reproducible program  error(s) that  interfere(s)
              with the  intended use  of the  program as  outlined in  this
              documentation. The  author  may choose  not  to fix  problems
              related to a  special hardware and/or  software configuration
              and will then arrange  for a refund of the  registration fee,
              if the  problem is reported  within 90  days of payment.  The
              author makes no  other warranties, expressed or  implied, and
              this warranty is expressly limited to the cost  of the regis-
              tration fee.

            * BOOT.SYS is publicly supported on CompuServe in  the DOS Uti-
              lities section of the IBMSYS forum. A  free CompuServe Intro-
              Pak, which includes  a $15.00 usage  credit, is available  to
              registered  BOOT.SYS  users  who  do  not  yet  subscribe  to
              CompuServe. CompuServe  will open  the door for  a whole  new
              world of information, services, and  interesting people. Com-
              puServe is also  the best place  to obtain technical  support
              for products from Hans Salvisberg (and  many other developers
              and vendors).  The CompuServe  IntroPak (a  $39.95 value)  is
              provided to registered  BOOT.SYS users compliments  of Compu-
              Serve, Inc., and Hans Salvisberg. This offer  is dependent on
              its continued availability from CompuServe, Inc.
              For your information: Current CompuServe rates are $12.50 per
              connect hour plus communications surcharges (e.g., $0.30/hour
              in the U.S.A., $9.50/hour in Switzerland and the United King-
              dom, varying rates in other countries).

          BOOT.SYS must  be registered before  it is  used in a  commercial
          (business, corporate, government, educational, or  other institu-
          tional) environment.

          The following per-unit  prices apply for  registration of one  or
          more copies of BOOT.SYS on the same order form:

                              1       SFR 70.-
                       2  -   4       SFR 60.-
                       5  -   9       SFR 50.-
                      10  -  24       SFR 45.-
                      25  -  49       SFR 40.-
                      50  -  99       SFR 35.-
                     100  - 249       SFR 30.-
                     250  - 499       SFR 25.-
                     500  or more     negotiable

          THESE PRICES INCLUDE ONE  MASTER DISKETTE AND ONE  PRINTED MANUAL
          PER  ORDER.  The licensee  is  responsible  for  duplicating  the
          diskette and documentation as  needed, and for ensuring  that the
          registered number of installed copies is not exceeded. Additional
          manuals are  available for  a  nominal fee.  Under this  schedule
          SUPPORT  IS PROVIDED  TO  ONE  DESIGNATED REPRESENTATIVE  OF  THE
          LICENSEE ONLY.

          You have three choices for registering:

            - With the author in  Switzerland: All payment must be  done in
              Swiss Francs. The easiest  way to do this is by  credit card.
              You authorize us  to charge your card  for the amount  due in
              SFR and the credit card company will automatically convert to
              your currency  using  the current  exchange  rate. We  cannot
              guarantee a  fixed exchange rate  or a  certain date for  the
              conversion to  take place,  but based on  our experience  the
              exchange rates do not vary quickly.
              Alternatively you may send  us a postal money order  in Swiss
              Francs (your local post office does the currency conversion).

            - With  Public  software  Library  in   the  U.S.A.  (single-PC
              licenses only!):  PsL  is authorized  to sell  pre-registered
              single-PC versions  of BOOT.SYS at  $39 +  $4 s&h. They  take
              credit card  orders on  a toll-free phone  number or  written
              orders accompanied by a check or credit card information.

            - For site licenses:  Other modes of payment  including payment
              in US$ or other  currency can be negotiated -  please contact
              the author.

          Note: All prices are subject to change without notice.

          The accompanying  file REGISTER.FRM  includes registration  forms
          for the first two options. If this file is missing or if you have
          any questions, please contact the author:

            Hans Salvisberg, Froeschmattstr. 40, CH-3018 Berne, SWITZERLAND

               CompuServe:  73237,3556
               Internet:    salvis@ahorn.iam.unibe.ch
                   or       73237.3556@compuserve.com


```
{% endraw %}

## SYSOP.DOC

{% raw %}
```


          BOOT.SYS                    SYSOP.DOC                Version 1.27


          BOOT.SYS(tm) and the accompanying programs and documentation are

                       Copyright (c) 1989, 1990 Hans Salvisberg
                                 All rights reserved


          This file provides  information for bulletin  board sysops on the
          distribution of BOOT.SYS via BBS systems.

          Uploads  of the  shareware/unregistered  version of  BOOT.SYS are
          explicitely  permitted. Obviously the registered  version may not
          be  posted on  a BBS (for  a quick  check  run  "boot /v").  Also
          shareware/unregistered  versions  do not  contain  more  than one
          executable!

          Please  note  that  you  must obtain  written  permission  before
          placing BOOT.SYS  into a  user group  or commercial  library that
          distributes disks/programs for a fee. See the file VENDOR.DOC for
          details. This  restriction  does  not affect  your  permission to
          place BOOT.SYS on  the BBS as long as you  are not charging a fee
          (other than the usual user fees for general use of the board) for
          its distribution.

          If you have any questions about BOOT.SYS please contact me:

            Hans Salvisberg, Froeschmattstr. 40, CH-3018 Berne, SWITZERLAND

               CompuServe:  73237,3556
               Internet:    salvis@ahorn.iam.unibe.ch
                   or       73237.3556@compuserve.com



          If you like you may use any/all  of the following information for
          describing BOOT.SYS to your users:



Program: BOOT.SYS 1.27: use boot-up menus to select your system configuration
Version: 1.27  (10/12/90)
Registration fee: $39 (or SFR 70.-)
BBS filename: BOOT127.EXE  (LHarc sfx preferred)
User support: current disk, printed and bound manual;
  email (CompuServe [73237,3556], Internet) and mail support;
  registration transferable to ALL future shareware versions
Keywords:
  BOOT.SYS BOOT CONFIG.SYS AUTOEXEC.BAT CONFIG REBOOT MENU SHAREWARE ASP
Description:
  BOOT.SYS makes it possible to display one or more menus at
  boot-up time and to have different parts of CONFIG.SYS and/or
  AUTOEXEC.BAT executed, depending on which menu option(s) are
  chosen. No more editing/renaming your start-up files and
  rebooting. Up to 9 options per menu, up to 25 consecutive
  and/or nested menus. Easy installation, detailed examples for
  every level of sophistication.
Author:
  Hans Salvisberg, Froeschmattstr. 40, CH-3018 Berne, SWITZERLAND
  Member of the Association of Shareware Professionals(R) (ASP)
  CompuServe:  73237,3556    Internet:  salvis@ahorn.iam.unibe.ch
  VISA/MC/AmEx accepted; all prices in Swiss Francs - or
  contact PsL in the U.S. at 713-524-6394, FAX 713-524-6398


```
{% endraw %}

## VENDOR.DOC

{% raw %}
```


          BOOT.SYS                   VENDOR.DOC                Version 1.27


          BOOT.SYS(tm) and the accompanying programs and documentation are

                       Copyright (c) 1989, 1990 Hans Salvisberg
                                 All rights reserved


          This file  provides information  for disk vendors;  any person or
          organisation distributing software on disks (or through any other
          medium, including  electronic  file transfer)  for a fee  will be
          considered  a disk  vendor  in  this  context.  This  explicitely
          includes commercial and non-profit user group libraries.

          I would be pleased to work with  you because you are an important
          part of the shareware distribution system. However I require that
          you obtain written permission  from me before starting to distri-
          bute  BOOT.SYS.  Together  with the permission  you will  get the
          current version of BOOT.SYS and I will try to keep you up-to-date
          if new versions are released.

          To obtain this permission  please send me a copy of your standard
          written  materials (catalogs/flyers)  which  clearly explain  the
          shareware  concept, the  need for users to register  the products
          they use, and the fact that  the price of your disks is a copying
          fee only and does not constitute  payment for the product. If you
          carry both  shareware and  public domain  software/freeware  then
          your  materials must make a  clear distinction  between these two
          categories. Only  if these basic concepts are  explicitely stated
          in your written materials will I be confident that your customers
          are fully informed about what they are paying for.

          If you are  an Approved  Vendor of  the Association  of Shareware
          Professionals(R) (ASP)  you have my  permission to  start distri-
          buting BOOT.SYS  immediately. However  I still require  getting a
          notification within four weeks stating the following:
            - the fact that you are an  Associate Member of the Association
              of Shareware Professionals
            - the date you started distributing BOOT.SYS
            - the version  of BOOT.SYS you  are distributing  and where you
              got it from
          If you send me a copy  of your catalog, which  includes BOOT.SYS,
          I will automatically send you  the next new version as soon as it
          becomes available.
          Please refer to the file SYSOP.DOC  for a suggested wording for a
          catalog entry.

          I strongly recommend  that you consider  becoming an ASP approved
          vendor if you  have not already  done so. The ASP  vendor program
          reduces the workload for both authors and vendors, and helps give
          customers  confidence  that reasonable  standards are  met in the
          distribution of  shareware products. For more  information on the
          ASP vendor program, contact the ASP at:

               Association of Shareware Professionals
               Vendor Certification Committee
               P.O. Box 5786
               Bellevue, WA 98006
               U. S. A.

          The  right  to  withhold  or  withdraw  permission to  distribute
          BOOT.SYS from anyone  at any time  for any reason  is explicitely
          reserved.

          I realize that this policy creates  additional paperwork for both
          you and me, but  I believe that this is necessary  to protect the
          unsuspecting buyers from  unscrupulous individuals and ensure the
          continued  growth  of the  shareware  market,  and  I am  looking
          forward to hearing from you.

            Hans Salvisberg, Froeschmattstr. 40, CH-3018 Berne, SWITZERLAND

               CompuServe:  73237,3556
               Internet:    salvis@ahorn.iam.unibe.ch
                   or       73237.3556@compuserve.com



          P.S. A short text describing  BOOT.SYS can be found at the end of
               the file SYSOP.DOC.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2547

     Volume in drive A has no label
     Directory of A:\

    BOOT127  EXE     70708  10-12-90   1:27a
    BOOT     COM     14122  10-12-90   1:27a
    BOOT     DOC     91945  10-12-90   1:27a
    BOOT     SYS     20334  10-12-90   1:27a
    LICENSE  DOC     10735  10-12-90   1:27a
    PAUSE    SYS      1817  10-12-90   1:27a
    READ     ME       3010  10-12-90   1:27a
    REGISTER FRM     11765  10-12-90   1:27a
    SYSOP    DOC      2895  10-12-90   1:27a
    VENDOR   DOC      4223  10-12-90   1:27a
    GO       BAT        35  10-08-90   2:46p
    FILE2547 TXT      4371  10-08-90   2:47p
           12 file(s)     235960 bytes
                           80896 bytes free
