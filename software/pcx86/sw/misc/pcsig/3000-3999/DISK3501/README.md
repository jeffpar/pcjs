---
layout: page
title: "PC-SIG Diskette Library (Disk #3501)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3501/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3501"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## MENUWIZ.DOC

{% raw %}
```






                     Menu Wizard (TM) Version 4.0

                          SilvaSoft Company
                            P.O. BOX 3401
                         Kingsport, TN. 37664
                            615-247-7551

         Menu Wizard is a very  powerful  and  easy  to  use  PC  Menu
         program. The  program offers mouse support, an automatic  and
         manual screen saver, Pop-Up Calculator, Calendar, File Viewer
         and Editor along with  an  ASCII  table.  Password loading of
         menu entries and keyboard locking is supported along with the
         ability  to  disable  menu options. Menu-Wizard is not memory
         resident.  The program is able  to unload itself completely
         from memory, turn over control to the program you wish  to
         run,  and then automatically reload itself.

         A) - Getting Started Creating menu selections.

         Adding  selections to Menu-Wizard involves setting up heading
         information followed  by telling the program what to load and
         where  to load it from. Menu-Wizard uses  syntax  similar  to
         that used by PC Batch files.

         EXAMPLE1  - Lets say we want to load Lotus 1-2-3 which can be
         found in a PC directory  called  LOTUSV2.  We  will  use  the
         editor  that  comes  with  Menu Wizard  to  create  the  menu
         selection. Load  the  Editor by hitting the F6 key on the PC.
         For File Name, lets  enter  "LOTUS.MNU". All Menu Wizard menu
         selection files always have the ".MNU" extension.

         We are now in the Editor. On the first line we would type -

         :HEADING LOTUS 1-2-3 Version 2.2

         the second line indicates the path -

         CD\LOTUSV2

         the third line is how we load the file -

         123

         We  could  now hit F7 to save this file  followed  by  F4  to
         update  our  menu.  Congratulations, you have just added your
         first selection to the menu.

         the complete 3 line file above called LOTUS.MNU would look as
         follows:

         :HEADING LOTUS 1-2-3 Version 2.2
         CD\LOTUSV2
         123

         The  first line of any menu file "*.MNU"  must  always  start
         with  a  :. If HEADING is not specified after the : then Menu
         Wizard will use the  first  7  characters  after the : as the
         Password to load that menu selection. EXAMPLE2:

         :SECRET  LOTUS 1-2-3 Version 2.2
         CD\LOTUSV2
         123

         In This EXAMPLE If you try to run LOTUS  1-2-3  from the menu
         you  will  first be asked to supply a Password before you can
         continue. If you fail to type  in  "SECRET",  you will not be
         allowed  to  load  1-2-3  and will be returned  to  the  Main
         Selection Menu.

         All   Menu   selections   on   a   given   level  are  sorted
         alphabetically. If you want to change the order that programs
         appear on your menu list you can indent  a  number  of spaces
         for  your  title after the :HEADING area. Menu Wizard assumes
         that your Program description starts on column position 10 on
         the first line of the *.mnu file. If  you  insert  1  or more
         spaces  then all the Program descriptions starting at line 12
         will sort before those  starting  at  line 11 which will sort
         ahead of those sorting at line 10. EXAMPLE3

         Alpha.mnu file first line:
         :HEADING Alpha 4 Database
         ...etc

         Harvard.MNU file first line:
         :HEADING   Harvard Graphics
         ...etc

         Although  Alpha  4  Database  should  sort   before   Harvard
         Graphics,  Because we have indented Harvard Graphics to start
         at position 12 rather  than  position  10,  We have moved the
         Harvard Graphics program ahead of the Alpha 4 Database on the
         menu selection.

         When  calling  your  program  in the *.MNU file, you can code
         parameters to automatically  pass  to  the program just as if
         you are starting the program from DOS.  If  you are trying to
         use  Menu-Wizard  to  run  a  DOS  Batch  file  then you must
         remember to use the word CALL before typing the Batch file to
         run. If you do not do this, then after your  Batch file ends,
         Menu Wizard will be unable to reload itself automatically.

         Lets  assume  you  have  a batch file called KQ5.BAT. To load
         this file from Menu Wizard we might type:

         :HEADING Kings Quest 5
         cd\sierra
         CALL KQ5

         this  will  allow   the   program   to   run   correctly  and
         automatically reload the menu on exiting.  If  you  had  just
         coded  line  3  as  KQ5, then on exiting the program the menu
         would not have been able to reload itself.

         Every time you select  F4  -  Update  Menu  Selections,  Menu
         Wizard reads all your *.MNU file in the current directory and
         recreates  a  new  MENU.DAT  file.  This  file  gives  record
         information on the number of menu selections you have, and
         which *.MNU file  needs  to be run when a given selection is
         made. You can browse this file if you have forgotten a name
         of a *.MNU file you need to modify or erase. You can also
         Update menu selections from outside the program by typing:

         MENUWIZ CREATE

         If  you have responsibility in a company for maintaining many
         PC's, then the ability  to  add or remove menu selections and
         update systems using the MENUWIZ CREATE  option  could  be  a
         significant time saver.

         F4 - Update Menu Selections
         F5 - File Viewer
         F6 - Editor
         F7 - Ascii Table

         You  can  disable  any  or all of the four options above when
         calling MENUWIZ by  passing  a  NOxxxx  OPTION on the command
         line to disable that feature.


         MENUWIZ NOUPDATE NOVIEW NOEDIT NOASCII

         All four options would be removed from  Menu  Wizard  if  you
         code  the  command  line on loading Menu Wizard as that shown
         above. To disable a user from  being  able  to use the EDITOR
         you would code

         MENUWIZ NOEDIT

         The  DOS  "ESC"  key is the normal way that  Menu  Wizard  is
         exited. For  some  situations  you  may wish to disable users
         from being able to  EXIT  to  DOS.  You  can  use the "NOESC"
         option on loading Menu Wizard which will  prevent  users from
         exiting to DOS.

         MENUWIZ NOESC

         A backdoor option to Exit to DOS exists by typing ALT-P.

         This option can also be disabled if required by typing

         MENUWIZ NOESC NOALTP

         You can select programs to load from Menu Wizard using either
         the mouse or using  the  arrow  keys.  Page Up and Page Down,
         Home  and End Key all work with the program.  Also,  you  can
         type  the  first  letter  of a Menu selection and Menu Wizard
         will move instantly to that selection. Typing the same letter
         a second time will find the next match.

         (Hint) - Windows Users may find it convenient  to add Windows
         as  a  menu selection. This allows you to freely move between
         your   DOS  and  Windows   programs   with   a   minimum   of
         inconvenience.

         :HEADING Windows 3.1
         cd\windows
         win

         MENUWIZ for most users should probably be configured in the
         AUTOEXEC.BAT to automatically load on startup.

         When  MENUWIZ  is  called  from  the  DOS   prompt   it  will
         automatically  search  your DOS path statement to find a copy
         of itself and will assume  that the *.MNU files also exist in
         the area where it finds itself on your  computer.  This means
         that you do not have to change to the directory where MENUWIZ
         is located in to use  the  program  as  long as MENUWIZ is in
         your DOS Path.

         IF you are running MENUWIZ on a Monochrome monitor or a non-
         color laptop, you may want to load the program in Monochrome
         mode. This is done by loading MENUWIZ with the "MONO" command
         line prompt.

          MENUWIZ MONO

          =============================================================
          B) - Options with Menu-Wizard

          F1 - Screen Saver

          Selecting this option will place Menu Wizard  in the  manual screen
          saver mode. Hit any key to return to the normal menu. MenuWizard will
          automatically  go to the screen saver mode if no  key  has  been hit
          on the Keyboard for  5 minutes.  Menu Wizard automatically sets the
          screen save in graphics mode if you have a VGA monitor.  You  can
          disable the graphics screen  save and  use the monochrome graphics
          save  if you prefer by loading Menu Wizard with the NOGRAPH option.

          MENUWIZ NOGRAPH

          The  NOGRAPH  option could be selected if you do not like the
          Graphics screen saver and prefer a blank screen. The Graphics
          Screen saver is only avalable for VGA systems, all others
          automatically use a blank screen with the flashing time for
          screen saving.

          ALT-F1 - Keyboard Lock with Screen Saver

          You can automatically force Menu Wizard to Lock your Keyboard and
          run  the  screen saver section of the program by hitting the "ALT-F1"
          key combination. On hitting any key, Menu Wizard will ask you for a
          Password to Exit. If your password matched the  file  password  you
          have created you will be allowed to exit  the  Screen Saver  portion
          of  the  program.  For the Keyboard locking option to work you must
          create  a file with the name "MENULOCK.FIL" in the directory which
          MENUWIZ is loaded from. The first line of this file contains your
          Keylock password, Up to 7 characters.  When ALT-F1 is called to
          select the keyboad locking, A user is unable to reboot the computer
          by hitting the Ctrl-ALT-Del Key combination.  Only a successful
          password entry, or a complete power down will exit Key board locking.

          F2 - Pop-Up Calculator

          This four function calculator  should be a natural for anyone
          that has used a calculator before. The calculator does show a
          tape  so  you  can track you calculations. Also hit the H key
          for additional help in using the calculator.

          F3 - Calendar

          Use the Page-Up and  Page-Down Key to move up or down 1 month
          at  a time. Use the Ctrl-Page Up and Ctrl-Page  Down key  to
          change  the  calendar 1 year at a time. The up and down arrow
          keys will move you 1  week at a time and Left and right Arrow
          Keys,  1 Day at a time. The Calendar does  offer full  mouse
          support if your mouse is active.

          F4 - Update Menu Selections

          Use this option to update your selection menu after adding or
          removing *.MNU files.  This menu can be disabled by using the
          MENUWIZ NOUPDATE option. You can also update Menu Wizard from
          the command line by typing MENUWIZ CREATE.

          F5 - File Viewer

          Use this option to view files in either text mode or HEX mode
          for programers. After  hitting  F5,  type  the name of the PC
          file with drive and path location if required.  This menu can
          be disabled by using the MENUWIZ NOVIEW option.

          F6 - Editor

          Simple  to  use  Text  Editor.  Designed  to assist you while
          creating the *.MNU files but can have many other uses also.  The
          editor can be used to create batch files, perform simple edits on
          text  files, etc. Hit F7 to  save your modified or created file while
          in the editor or ESC to Quit without saving.  This menu  can  be
          disabled by using the MENUWIZ NOEDIT option.

          F7 - Ascii Table

          Used  to  show  a  complete  list  of  all  ASCII characters
          available  on  PC.  This  option  is  probably most useful to
          programers, but is also  usable for some word processor users
          that  need  to directly code special ASCII characters.  This
          menu can be disabled by using the MENUWIZ NOASCII option.

          F8 ShareWare Registration

          This  option lists information on registering your product as well as
          gives the option  of printing out a registration form for mailing.
          MENU-Wizard is not free software.  It is  being released as
          shareware. The basic cost for the product is $15 per copy for up to
          10 copies and $13 per copy for 11 to 30 copies.  Companies  can  get
          a customized version of Menu Wizard for $400, which allows them to
          make  unlimited copies of Menu Wizard for use at all their locations
          worldwide.  Please see the registration for details.

          As  a  thank you for registering your copy of Menu Wizard you
          will receive an add-on program to Menu Wizard called DIRUTIL.
          DIRUTIL is a very powerful yet extremely easy to use file and
          Directory  manager. The program offers full mouse support and
          is of the highest commercial  quality  available.  DIRUTIL is
          not being released as shareware. This program  alone is worth
          many  times  the registration fee of Menu Wizard and is yours
          free for registering  the  program. Thanks for supporting the
          ShareWare  Concept  and  allowing  quality software  to  be
          available  for a fraction of the cost of commercial software.
          When registering Menu  Wizard,  please specify if you require
          5-1/4 or 3-1/2 disk to receive your copy of DIRUTIL.


                  **** Menu-Wizard Released as SHAREWARE ****

         Shareware distribution gives users a chance to try software
         before buying it. If you try a Shareware program and continue
         using it, you are expected to register. Individual programs
         differ on details --some request registration while others
         require it, some specify a maximum trial period. With
         registration, you get anything from the simple right to
         continue using the software to an updated program with printed
         manual.

         Copyright laws apply to both Shareware and commercial
         software, and the copyright holder retains all rights, with a
         few specific exceptions as stated below. Shareware authors are
         accomplished programmers, just like commercial authors, and
         the programs are of comparable quality. (In both cases, there
         are good programs and bad ones!) The main difference is in the
         method of distribution. The author specifically grants the
         right to copy and distribute the software, either to all and
         sundry or to a specific group. For example, some authors
         require written permission before a commercial disk vendor may
         copy their Shareware.

         Shareware is a distribution method, not a type of software.
         You should find software that suits your needs and pocketbook,
         whether it's commercial or Shareware. The Shareware system
         makes fitting your needs easier, because you can try before
         you buy. And because the overhead is low, prices are low also.
         Shareware has the ultimate money-back guarantee -- if you
         don't use the product, you don't pay for it.

                             DISCLAIMER - AGREEMENT

         Users of Menu Wizard must accept this disclaimer of warranty:

         "Menu Wizard is supplied as is.  The author disclaims all
         warranties, expressed or implied, including, without
         limitation,the warranties of merchantability and of fitness
         for any purpose.The author assumes no liability for damages,
         direct or consequential, which may result from the use of
         Menu Wizard."

         Menu Wizard is a "shareware program" and is provided at no
         charge to the user for evaluation.  Feel free to share it with
         your friends, but please do not give it away altered or as
         part of another system.  The essence of "user-supported"
         software is to provide personal computer users with quality
         software without high prices, and yet to provide incentive for
         programmers to continue to develop new products.  If you find
         this program useful and find that you are using Menu Wizard
         and continue to use Menu Wizard after a reasonable trial
         period, you must make a registration payment of $15 U.S.
         to SilvaSoft. The $15 registration fee will license one copy
         for use on any one computer at any one time.  You must treat
         this software just like a book.  An example is that this
         software may be used by any number of people and may be freely
         moved from one computer location to another, so long as there
         is no possibility of it being used at one location while it's
         being used at another.  Just as a book cannot be read by two
         different persons at the same time.

         Commercial users of Menu Wizard must register and pay for
         their copies of Menu Wizard within 30 days of first use or
         their license is withdrawn. Site-License arrangements may be
         made by contacting SilvaSoft.

         Anyone distributing Menu Wizard for any kind of remuneration
         must first contact SilvaSoft at the address below for
         authorization. This authorization will be automatically
         granted to distributors recognized by the (ASP) as adhering to
         its guidelines for shareware distributors, and such
         distributors may begin offering Financial Wizard immediately
         (However, SilvaSoft must still be advised so that the
         distributor can be kept up-to-date with the latest version of
         Menu Wizard).

         You are encouraged to pass a copy of Menu Wizard along to your
         friends for evaluation.  Please encourage them to register
         their copy if they find that they can use it.  All registered
         users will receive a free copy of DIRUTIL a very powerful
         directory and file utility add-on product to Menu Wizard.

         This program is produced by a member of the Association of
         Shareware Professionals (ASP).  ASP wants to make sure that
         the shareware principle works for you. If you are unable to
         resolve a shareware-related problem with an ASP member by
         contacting the member directly, ASP may be able to help. The
         ASP Ombudsman can help you resolve a dispute or problem with
         an ASP member, but does not provide technical support for
         members' products.  Please write to the ASP Ombudsman at 545
         Grover Road, Muskegon, MI 49442 or send a CompuServe message
         via CompuServe Mail to ASP Ombudsman 70007,3536."


                                          Manuel A. Silva
                                          SilvaSoft Company
                                          P.O. BOX 3401
                                          Kingsport, TN. 37664

                                          (615) - 247-7551
```
{% endraw %}

## VENDOR.DOC

{% raw %}
```

                         Menu-Wizard (TM) Version 4.0

                              SILVASOFT
                            P.O. Box 3401
                         Kingsport, TN. 37664
                           (615)-247-7551

              Member Association of Shareware Professionals

------------------------------------------------------------------------

VENDOR.DOC - Information  for  Shareware  Vendors.   If  you  are  a shareware
vendor,  you  must  follow  the guidelines set forth  by  the  Association  of
Shareware Professionals (ASP) as stated below as a condition of
distributing this product.  A description of this program is included
at the end of this file for your use in catalogs.

The 2 programs required to distribute Menu Wizard (TM) are:

MENUWIZ.EXE  <---- Menu Wizard Program
MENUWIZ.DOC  <---- Users Manual for Menu Wizard

If the program is distributed by a BBS. The two files above may be ZIPPED
as MENUWIZ4.ZIP.

For information on becoming a ASP approved vendor, write:

                 Association of Shareware Professionals
                 545 Grover Road
                 Muskegon, MI  49442

------------------------------------------------------------------------

     ASSOCIATION    OF    SHAREWARE    PROFESSIONALS   -   VENDOR   GUIDELINES
     ----------------------------------------------------------

   VENDOR ADVERTISING
   ------------------
   All vendor advertisements that offer Shareware for sale and list a
   price, offer Shareware as a promotion for any commercial venture, or
   use Shareware as an enticement  for  the  user  to  pay  for any product or
   service must state that "Shareware programs are copyrighted, and
   require  additional  payment  to  the  authors  if used  regularly".   This
   explanation must immediately follow the price (including "free" if
   used) or be tied to the price with an asterisk.

   VENDOR CATALOGS
   ---------------
   Approved vendors will identify ASP member's programs with an "ASP"
   notation and an explanation such as: "ASP indicates the program is
   being actively supported by a programmer who has agreed to comply
   with  the  standards  of  programming  and  support  of  the Association of
   Shareware Professionals."

   Approved vendors will make an attempt to educate users on the nature
   of Shareware.  A suggested wording to be placed in the catalog is:
   "Charges made by us are a distribution fee paid to us and do not
   include the cost of the program itself.  None of the fees paid to us
   goes to the programs' authors.  Some of the programs are Shareware.
   The principle behind Shareware is that users should have the
   oppurtunity to try out software before paying for it and that those
   that use software should support it with payments.  Some Shareware
   programs allow a fixed length  trial  period,  others  an  indefinite trial
   period.  Some  programs  request  a  payment,  while  others   make   it  a
   requirement.  This payment provides you with various rights and
   benefits, depending on the program.  Some programs only give you the
   legal right to continue to use the software while others provide
   printed documentation and/or higher levels of service."

   VENDOR DISTRIBUTION
   -------------------
   Approved   vendors   will   respect  the  copyright  and  all  distribution
   restrictions made by individual authors, even if those restrictions
   are not specifically covered in this document.

   Approved vendors will not claim to be selling the programs, and
   will explain that the fee charged is a copying/handling fee (none
   of which goes to the author of the program).  A written notice to
   this effect will be provided with all Shareware programs shipped.
   If the vendor distributes Shareware in pre-packaged wrappers, then
   this notice must be on the OUTSIDE (visible) part of the package.

   Approved vendors will not  change  the  contents  of  or  delete  ANY files
   supplied with the program.  Vendors may make small additions which
   are  designed  to  assist  or  provide a service to  the  user,  but  these
   additions must be easily identifiable and end-users must be allowed
   to delete the additions if they want to.

   Approved vendors agree to distribute the most recent versions of
   ASP member's programs which have been made available to them by
   the author.  Approved vendors also agree to pull a program from
   their library when requested by the author to do so.


----------------------------------------------------------------------------

Program Name..............:  MENU-WIZARD (TM) V4.0

Registration  Fee..........:   $15  registration,  includes  free  upgrade  to
                             DIRUTIL,  a powerful directory  and  file  add-on
                             utility for MENU-WIZARD.

Mininum CRT...............:  100% IBM compatible Mono card, color CGA, EGA or
                             VGA highly Recommended.

Minimum DOS...............:  3.x
                             OS/2 and Windows 3.1 compatible (Including
                             mouse support)

Minimum RAM...............:  256K

Printer requirement.......:  Yes [ ]   No [X]

Hard drive requirement....:  Yes [X]   No [ ]

Mouse support.............:  Yes [X]   No [ ]

Modem support.............:  Yes [ ]   No [X]

Program Descriptions:

Short:

MENU WIZARD (TM) is a very powerful, easy to use menuing program written by
an ASP member.

Medium:

         Menu  Wizard  is  a  very   powerful  and  easy  to   use   PC   Menu
         program. The  program offers mouse support, an automatic  and
         manual screen saver, Pop-Up Calculator, Calendar, File Viewer
         and Editor along with  an  ASCII  table.  Password loading of
         menu entries and keyboard locking is supported along with the
         ability   to   disable   menu  options.  Menu-Wizard  is  not  memory
         resident.  The  program  is able  to unload  itself  completely  from
         memory, turn over control to the program you wish   to run,  and then
         automatically reload itself. Written by an ASP member.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3501

     Volume in drive A has no label
     Directory of A:\

    MENUWIZ  DOC     20048   4-27-93   8:08p
    MENUWIZ  EXE    153222   4-27-93   7:52p
    VENDOR   DOC      6272   4-25-93   8:44p
    GO       BAT        39   6-03-93   4:26p
    SHOW     EXE      2040   9-12-88  10:48a
            5 file(s)     181621 bytes
                          138240 bytes free
