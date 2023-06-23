---
layout: page
title: "PC-SIG Diskette Library (Disk #3548)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3548/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3548"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## 22DISK.DOC

{% raw %}
```






      Sydex



















                                      22DISK


                    A CP/M-to-DOS Diskette Interchange Utility























                                              Sydex
                                              P.O. Box 5700
                                              Eugene, OR  97405
                                              Voice:  (503) 683-6033
                                              FAX:    (503) 683-1622












                                      22DISK

                    A CP/M-to-DOS Diskette Interchange Utility

                           Version 1.30, February, 1989

                           Copyright 1988, 1989, Sydex

                                      Sydex
                                   P.O. Box 5700
                                 Eugene, OR  97405
                               Voice:  (503)  683-6033
                               FAX:    (503)  683-1622

                               All Rights Reserved


                                      NOTICE

      THIS IS NOT FREE  SOFTWARE!   If you  paid  a "public domain"   vendor
      for  this  program,   you paid for the service of copying the program,
      and not for the program itself.   Rest assured that nothing ever  gets
      to the originators of this product from such a sale.  You may evaluate
      this product, but if you make use of it, you must register your copy.

      We  offer  several inducements to you for registering.   First of all,
      you receive the most up-to-date copy of the program that  we  have  --
      and  we  do  update the product on a regular basis.   You also receive
      support for 22DISK -- which can be  quite  valuable  at  times.   And
      finally,  we  have  a  few  utilities  not  included in the evaluation
      package.   Make no mistake,  however - this is a fully functional ver-
      sion of 22DISK and not "crippled" in any way.


                             REGISTRATION INFORMATION

      The  non-commercial  single-user registration fee for 22DISK is $25.00
      US.  The commercial and multisystem site fee for 22DISK is $100.00.

      Send a check or company P.O. for the appropriate amount to:

                                      Sydex
                                   P.O. Box 5700
                                 Eugene, OR  97405

      Please indicate what product you are ordering and if you  have  a  re-
      quirement for 3.5" media.   We normally ship 5.25" 360K diskettes, but
      will furnish 3.5"  720K  media  upon  request.   Customers outside  of








      the United States and Canada should include an extra $5.00 for airmail.



      If you are a registered user of this product  and  desire  an  update,
      please  send  $5.00  for handling  and we will ship you an up-to-date
      copy.  Please add $10.00 for printed documentation to cover duplication
      and shipping costs.


                               DISTRIBUTION NOTICE

      This is "user-supported" software.   You are hereby granted a  license
      by Sydex to distribute this evaluation copy of 22DISK and its documen-
      tation, subject to the following conditions:

      1.   22DISK  may  be  distributed  freely without charge in evaluation
           form only.

      2.   22DISK may not be sold,  licensed,  or a fee charged for its use.
           If a fee is charged in connection with 22DISK,  it must cover the
           cost of copying or dissemination only.   Such  charges  must  be
           clearly  identified  as such by the originating party.   Under no
           circumstances may the purchaser be given the impression  that  he
           is buying 22DISK itself.

      3.   22DISK  must  be  presented  as  a complete unit,  including this
           documentation.   Neither 22DISK  nor  its  documentation  may  be
           amended or altered in any way.

      4.   By  granting  you  the right to distribute the evaluation form of
           22DISK, you do not become the owner of 22DISK in any form.

      Any other use,  distribution or representation of 22DISK is  expressly
           forbidden without the written consent of Sydex.









      _______________________________________________________________
      CP/M, CP/M-80 and CP/M 2.2 are trademarks of Digital Research.  MS-DOS
      is a trademark of Microsoft.   IBM PC,  PC-XT and PC-AT are trademarks
      of International Business Machines.  V20, V30, uPD70108,  uPD70116 are
      trademarks  of  NEC  Electronics.   CompatiCard  is  the trademark of
      MicroSolutions, Inc.  Some products of Lear-Siegler,  Kaypro,  Osborne
      and Televideo are also trademarked.









                              Table of Contents


        22DISK, Briefly..............................................1

        Installing 22DISK............................................2

        Getting Started..............................................2

        Selecting A Disk Format......................................4

        22DISK CP/M File Naming Conventions..........................5

        22DISK Command Syntax Conventions............................6

        A Quick Reference Guide to 22DISK Commands...................7

        CTOD -- Convert A CP/M Diskette To DOS.......................9

        DTOC -- Convert DOS Files TO CP/M Files.....................10

        CTYPE -- Display A CP/M File................................10

        CDIR -- Display A CP/M Directory............................11

        CERA -- Erase CP/M Files....................................12

        CFMT -- Format A CP/M Diskette..............................13

        Building Custom Diskette Definitions........................14

        Some Hints on Developing a Definition.......................19

        Indexing A Large Definition File with GENINDEX..............21

        Diskette Densities and Recording Modes......................21

        Modifying A PC-XT "Clone" Controller For Single-Density Re..23

        In Closing..................................................25

        Other Sydex Products........................................26








      22DISK, Briefly

      22DISK  is  a  product  which enables one to convert files on diskette
      from various CP/M formats to MS-DOS,  and vice versa.   It is  a  com-
      panion product to 22NICE,  a Z-80/8080 CP/M 2.2 emulator.   The opera-
      tion of one part is not dependent on the other--if  you  want  to  use
      22DISK  to  convert data from other disk formats to DOS or vice-versa,
      you need not install the 22NICE CP/M emulator.  Similarly,  if you al-
      ready  have CP/M programs available as DOS files,  you may not want to
      use the 22DISK disk conversion utilities.

      Our packaging for 22NICE and 22DISK  offers  the  22DISK  program  set
      separately  for those who may be using a different emulator or have no
      need of a CP/M emulator.   The 22NICE emulation package,  however,  is
      bundled with 22DISK because of the need to transport CP/M files to the
      PC before emulation can be performed.

      The 22DISK disk conversion package offers the following features:

           *    "Roll  your  own"  disk  formats  -  we  provide support for
                several common CP/M 2.2 diskette formats,  but if you have a
                format  that  isn't  in our list,  you can simply define the
                characteristics in an  ASCII  parameter  file.   Registered
                users get an even larger file of diskette types.

           *    Support   for  single-  double-  and  quad-density  formats,
                hardware permitting.

           *    Support of the the following operations:

                     CP/M-to-DOS
                     DOS-to-CP/M
                     Directory display
                     Display CP/M files
                     Erase CP/M files
                     Format CP/M diskette

           *    Full user number support.

           *    Support of MicroSolutions' CompatiCard.

      22DISK currently will not handle "hard sectored" diskettes,  nor  will
      it work with diskettes written on an Apple ][ or Commodore 64 or 128.










                                      Page 1






      Installing 22DISK

      22DISK will not run without first being installed.   To do this, enter
      the following command at the DOS prompt:

           A:22DINST            and press the ENTER key.

      We're assuming that the file 22DINST.EXE is located on the diskette in
      drive A:; if you are installing 22DISK from some other drive or direc-
      tory, substitute it for the A: in this command.

      Generally, the installation process is self-explanatory.  A few of the
      more important points to note are:

           1.   22DISK will support up to 8 diskette drives--4 per  control-
                ler card. Support for two controller cards is provided.

           2.   If  you're using 22DISK on an XT-class computer with a high-
                density controller,  you'll need to specify that  your  com-
                puter  is an AT-type computer.   This is necessary to ensure
                that your controller is correctly programmed by 22DISK.

           3.   22DINST installs all files in the same directory.   However,
                the  file  CPMDISKS.DEF  and  the files with an extension of
                "LBL" may be placed in any directory specified  by  the  DOS
                PATH environment variable.  For information on PATH, consult
                the DOS reference manual.

           4.   The files comprising 22DISK can be installed or re-installed
                "in place".   That is, the source drive and directory may be
                the same as the destination.

      You'll need about 512K of base memory to install 22DISK.  If you don't
      have that much available,  you can still install 22DISK by creating an
      installation   diskette   having   all  of  the  22DISK  files  except
      CPMDISKS.DEF and all of the files having a extension of "LBL".   These
      files  can be copied over to your destination drive or directory after
      you've run 22DINST.


      Getting Started

      The following sections deal with various specific features of  22DISK.
      If  the  diskette format desired is one of those included in the stan-
      dard definition file, entering the command

           CMENU

      will cause a menu-driven interface to 22DISK to be executed.   The ap-
      propriate function may then be selected from the menu.  CMENU displays
      the following choices:


                                      Page 2








                +------------------------------------------------+
                |                                                |
                |       22DISK Version 1.30 (12-Mar-89)          |
                |                                                |
                |  Please select one of the following:           |
                |                                                |
                |       0.  Exit to DOS                          |
                |       1.  Set CP/M diskette type               |
                |       2.  Set CP/M diskette drive              |
                |       3.  Copy CP/M file(s) to DOS             |
                |       4.  Copy DOS file(s) to CP/M             |
                |       5.  Format a CP/M diskette               |
                |       6.  Display a CP/M directory             |
                |       7.  Display (type) CP/M file(s)          |
                |       8.  Erase CP/M file(s)                   |
                |                                                |
                +------------------------------------------------+
                No diskette type selected yet.



                Please enter function number (0...8):



      When CMENU is used for the first time,  choice 1 should be selected to
      determine what CP/M diskette format will be used.   Until a format  is
      selected,  no  CP/M diskette operations can be performed;  attempts to
      perform any operation before selecting a type will  produce  an  error
      message.

      When choice 1 is selected,  a list of CP/M diskette types,  in display
      "pages" of 23 types will be displayed.  The cursor keys may be used to
      select a format type.  When the desired type is located,  pressing the
      ENTER  keys will select that format.   A screen of general information
      about systems requirements will be displayed,  after which the opening
      menu is again shown.

      After  the  diskette  type is selected,  CMENU will "remember" it from
      session to session.   The next step is to select choice 2  to  specify
      what diskette drive will be used to access CP/M diskettes.

      The  desired function may then be selected from the menu.   Each func-
      tion may then request additional input for items such as CP/M diskette
      type and names of source and destination files.






                                      Page 3






      CMENU prompts for parameters and formats them into a command line  for
      one of 22DISK's utility programs.  If a menu interface is not desired,
      each program may also be invoked as a normal DOS command.  The follow-
      ing  sections deal with each specific function in terms of the program
      that performs that function.


      Selecting A Disk Format

      All of the 22DISK utilities make use of a common interface to  specify
      the format of CP/M diskette to be used. Over 200 different formats are
      provided with 22DISK and "custom" definitions may also be written.

      Each  different  CP/M  format is given a unique one- to four-character
      tag.  For example, the Osborne 1, single-sided,  double-density format
      is  given  a  tag  of "OSB2",  while the single-sided,  double-density
      Kaypro 2is assigned a tag of "KAY1".  So, to specify a format, its tag
      is used.

      The format tag may be indicated to the  22DISK  utilities  in  any  of
      three ways:

           (1)  The tag may be specified interactively.  This is the default
                situation if the tag has not been indicated by either of the
                other  two  ways.   The following prompting message is dis-
                played -

                Enter 1-4 character disk format type, ? for list -

                If a question mark is entered, followed by the ENTER key,  a
                list  of  diskette  formats and their tags is displayed,  23
                lines at a time.  The cursor keys (up, down,  PgUp and PgDn)
                may  be  used  to select a type.   Pressing ENTER causes the
                current type to be used.

           (2)  The tag may be specified directly on the DOS  command  line.
                In this case,  the tag is the first field of the 22DISK com-
                mand and is preceded with a slash (/) character.   For  ex-
                ample,

                     CFMT /KAY1 A:

                would  result in the diskette in drive A: being formatted as
                a Kaypro 2 single-sided, double-density diskette.

           (3)  The DOS environment variable "CPMDISK" may be set to the tag
                corresponding to the desired format.  So,

                     SET CPMDISK=OSB2




                                      Page 4






                would result in all 22DISK  operations  being  performed  in
                terms of Osborne 1 double-density format,  unless overridden
                by an explicit DOS command line  specification  as  in  (2),
                above.

      The  file  named  CPMDISKS.DEF  contains  definitions for all diskette
      types and must be present somewhere in the DOS  command  search  path.
      That  is,  one  of the directories indicated by the DOS PATH statement
      must contain the CPMDISKS.DEF file.

      In addition to the predefined formats given in  CPMDISKS.DEF  as  sup-
      plied  with 22DISK,  custom definitions may also be prepared using any
      ASCII text editor.   For details,  consult the section titled Building
      Custom Diskette Definitions.


      22DISK CP/M File Naming Conventions

      All  of  the  22DISK utilities use the same convention for naming CP/M
      files,  which corresponds roughly to that used by CP/M.   However,  to
      supply a means of indicating CP/M user numbers and to afford an alter-
      nate way to refer to diskette drives, the convention has been extended
      somewhat.

      A  CP/M  file  designator  as used by 22DISK consists of the following
      items:

           *    A disk drive specifier.  This is a letter referring to those
                drives configured by the 22DINST program.

           *    An optional user number between 0 and 31.  If omitted,  user
                number 0 is assumed.   A wildcard,  or asterisk (*),  may be
                specified to signify all user numbers.

           *    A colon (:).

           *    The file name consisting of up to 8 letters, numbers or spe-
                cial characters.   Upper- and lower-case  letters  are  con-
                sidered to be equivalent.  A special character may be any of
                the following -

                     ! @ # $ % ^ & ( ) - _ = + { } [ ] ' " , /

           *    The   characters "?" and "*" serve as "wildcard" specifiers;
                "?" matches any single character.  "*" matches any remaining
                characters in the file name.

           *    A period (.),  which may be omitted if no file extension  is
                present (see next item).




                                      Page 5






           *    The  file extension which consists of up to 3 letters,  num-
                bers or special characters.   Its  rules  of  formation  are
                identical to those associated with the file name,  including
                use of wildcard characters.

      Here are some examples of CP/M file names accepted by the 22DISK  con-
      version utilities:

                A:*.COM                     All  files  with  an extension of
                                           "COM" from drive A:,  user number
                                           0.

                D*:*.*                      All files from any user number on
                                           diskette drive D.

                B2:X*.DAT                   All  files having an extension of
                                           "DAT" under user number  2,  from
                                           drive B:,  starting with the let-
                                           ter "X".

      In all of the 22DISK utilities, a drive designator followed by a colon
      without any filename or extension assumes all  files  on  that  drive.
      Thus,

                B:                   is identical in meaning to
                B:*.*

      Sometimes,  as  with the CFMT utility,  a drive designator is required
      without a file name.  In these cases, no user number, file name or ex-
      tension is used, but physical unit designations are still allowed.


      22DISK Command Syntax Conventions

      In order to discuss command syntax in 22DISK,  a number of conventions
      have been adopted in this document:

           (1)  All commands are assumed to be followed by depression of the
                ENTER  key.   Sometimes this key is referred to as RETURN or
                CARRIAGE RETURN.

           (2)  All upper-case (capital)  letters  are  entered  exactly  as
                shown in the command description.  For instance,

                     CFMT

                is entered as depressions of the "C", "F", "M" and "T" keys.
                Actual  case  of the entered characters is irrelevant;  that
                is, either upper- or lower-case letters may be entered.




                                      Page 6






           (3)  Any underlined item enclosed in italics refers to a name  of
                a  particular  type  of  item  and  is  not  to  be  entered
                literally.  For example:

                     CP/M file

                refers to a general CP/M file designator as described in the
                preceding section, and NOT the characters ""CP/M file"".

           (4)  Any item enclosed in parentheses ("(" and ")") refers to  an
                item  which  may be omitted from the command line.   For ex-
                ample:

                     (disk type)

                refers to a disk type item which may be left out  completely
                from the command statement.

           (5)  Any  blank  character may be replaced by more than one blank
                character or a tab character.

      These conventions will be used throughout  this  document  with  addi-
      tional explanations where required.


      A Quick Reference Guide to 22DISK Commands

      The  following  is  a  short description of the command syntax of each
      conversion program:

           CONVERT CP/M FILES TO DOS

                CTOD  (/disk type)  CP/M file name  DOS disk unit

           Example:

                CTOD  /KAY1  A:*.DAT  C:

           CONVERT DOS FILES TO CP/M

                DTOC  (/disk type)  DOS file name  CP/M disk unit

           Example:

                DTOC  C:*.BAS  A:

           DISPLAY A CP/M DISKETTE DIRECTORY

                CDIR  (/disk type)  CP/M file name




                                      Page 7






           Example:

                CDIR A:*.OVR

           ERASE A CP/M DISKETTE FILE

                CERA  (/disk type)  CP/M file name

           Example:

                CERA  /IBM1  WS?.COM

           DISPLAY (TYPE) A CP/M DISKETTE FILE

                CTYPE  (/disk type)  CP/M file name

           Example:

                CTYPE  2:*.DOC

           FORMAT A CP/M DISKETTE

                CFMT  (/disk type)  CP/M disk unit

           Example:

                CFMT  /OSB1  B:

           GENERATE AN INDEXED DEFINITION FILE

                GENINDEX  source file  destination file

           Example:

                GENINDEX  CPMDISKS.NOI  CPMDISKS.DEF

           STRIP AN INDEX FROM A DEFINITION FILE

                STRIPIDX  source file  destination file

           Example:

                STRIPIDX  CPMDISKS.DEF  CPMDISKS.NOI










                                      Page 8






      CTOD -- Convert A CP/M Diskette To DOS

      The program CTOD is used to read a CP/M diskette and copy files to any
      selected DOS directory.

      The general syntax of the CTOD command is -

           CTOD  (/disk type)  CP/M file  (DOS path)

      Disk type is the optional diskette tag as  discussed  earlier.   CP/M
      file  refers  to  the CP/M file designator for the diskette drive con-
      taining the CP/M diskette and the file(s) to be copied.   The wildcard
      characters * and ? are allowed to specify a number of CP/M files.

      DOS  path  refers  to  the name of a DOS disk drive or subdirectory to
      which the CP/M files will be copied by CTOD.  If this term is omitted,
      the current DOS default drive and path are used.

      Some transformations of CP/M file names are made by CTOD when  copying
      to  DOS.   CP/M file naming conventions allow just about any character
      in a file name;  DOS naming conventions  are  much  more  restrictive.
      Characters which are not accepted by DOS are translated by CTOD to the
      character #, a legal DOS file name character.

      In  addition,  the file extension COM is changed to CPM by CTOD.   DOS
      considers any file with the extension COM to be executable;  if execu-
      tion  of  a  CP/M  file is attempted by DOS,  the result could be dis-
      astrous.

      The 22NICE CP/M emulator also performs the same name  translation  in-
      ternally  for  CP/M programs,  so programs will operate correctly with
      the transformed file extensions.

      Here are a few examples of CTOD commands:

                CTOD  A:*.*

           Copy all files from user 0, on drive A: to the current directory.
           Use whatever format that was defined by the  CPMDISK  environment
           variable, or prompt for one if CPMDISK is not defined.

                CTOD  /A1  B*:*.COM  C:\CPMFILES

           Copy  all  files  with  an extension of COM from all users,  from
           drive B: to the directory named C:\CPMFILES.   Use  the  8"  SSSD
           format.   These files, when copied, will be given an extension of
           CPM.

                CTOD

           Produces no action, but gives a synopsis of the CTOD command syn-
           tax.

                                      Page 9








      DTOC -- Convert DOS Files TO CP/M Files

      The program DTOC is the complement of CTOD;  that is,  it  writes  DOS
      files to a CP/M diskette.  The general syntax of the DTOC command is:

           DTOC  (/disk type)  DOS file name  CP/M drive and user

      The  optional  term disk type is the name of a CP/M diskette type,  as
      discussed above.   DOS file name refers to the name of a DOS  file  or
      group  of  files  and  may  include drive and subdirectory specifiers.
      CP/M drive and user specifies the diskette drive to  receive  the  DOS
      files and the user number under which they are to be created.

      In  addition to copying DOS files to CP/M diskettes,  DTOC carries out
      the CPM to COM name translation described in the CTOD command.   That
      is,  all  DOS  files  with  an extension of CPM will be created as COM
      files on the CP/M target diskette.

      Some examples of DTOC commands are:

                DTOC  C:*.*  A:

           Copy all files from DOS drive C: to CP/M  diskette  A:,  user  0.
           Use  whatever  format that was defined by the CPMDISK environment
           variable, or prompt for one if CPMDISK is undefined.

                DTOC  /A1  \UTILS\*.ASM  B3:

           Copy all files from the DOS default  drive  in  the  subdirectory
           named  UTILS  with an extension of ASM to user 3 on CP/M diskette
           drive B:.  Use the 8" SSSD format.

                DTOC

           Produces no action, but gives a synopsis of the DTOC command syn-
           tax.


      CTYPE -- Display A CP/M File

      The program CTYPE copies a CP/M diskette file or files to DOS standard
      output.  Before each file is copied,  its name is also copied to stan-
      dard  output.   CTYPE  is  the  analogue  of  the  DOS  and CP/M TYPE
      utilities.

      The general syntax of the CTYPE command is:

           CTYPE  (/disk type)  CP/M file



                                     Page 10






      Disk type is the optional diskette  tag  code  as  discussed  earlier.
      CP/M  file  refers  to the CP/M file designator for the diskette drive
      containing the CP/M diskette and the file(s) to  be  displayed.   The
      wildcard characters * and ?  are allowed in order that a group of CP/M
      files may be specified.

      An operation similar to CTYPE can be obtained  with  CTOD,  where  the
      destination  DOS  drive  is given as CON.   Some examples of the CTYPE
      command are:

                CTYPE  A:*.*

           Copy all files from user 0, on drive A: to standard output.

                CTYPE  /A1  B*:*.DOC

           Copy all files with an extension of DOC from  all  user  numbers,
           from drive B: to standard output.  The source diskette is assumed
           to be in 8" SSSD format.

                CTYPE

           Produces  no  action,  but  gives a synopsis of the CTYPE command
           syntax.


      CDIR -- Display A CP/M Directory

      The program CDIR displays a list of CP/M diskette files  in  much  the
      same way that the CP/M command DIR does.  However, the user number for
      each  file  is also displayed,  along with the available CP/M diskette
      space remaining.

      The general syntax of the CDIR command is:

           CDIR  (/disk type)  CP/M file

      Disk type is the optional two character diskette  type  code  as  dis-
      cussed earlier.   CP/M file refers to the CP/M file designator for the
      diskette drive containing the CP/M diskette and the file(s) to be dis-
      played.  The wildcard characters "*" and "?" are allowed in order that
      a group of CP/M files may be specified.   Some examples  of  the  CDIR
      command are:

                CDIR  A:*.*

           Displays  a directory of all files from all user areas,  on drive
           A.

                CDIR  /A1  B*:*.DOC



                                     Page 11






           Displays a directory of all files with an extension of  DOC  from
           all user numbers, on drive B:.  The source diskette is assumed to
           be in 8" SSSD format.

                CDIR

           Produces no action, but gives a synopsis of the CDIR command syn-
           tax.


      CERA -- Erase CP/M Files

      The program CERA erases a list of CP/M diskette files in much the same
      way  that  the  CP/M  command  ERA does.   In addition,  the available
      remaining CP/M diskette space is reported.

      The general syntax of the CERA command is:

           CERA  (/disk type)  CP/M file

      disk type is the optional diskette tag as  discussed  earlier.   CP/M
      file  refers  to  the CP/M file designator for the diskette drive con-
      taining the CP/M diskette and  the  file(s)  to  be  displayed.   The
      wildcard  characters  "*" and "?" are allowed in order that a group of
      CP/M files may be specified.

      Each file specified is erased by writing the hexadecimal character  E5
      as  the first byte (user number) of the CP/M diskette directory entry.
      The rest of the affected directory entry is left alone.   Examples  of
      the CERA command are:

                CERA  A:*.*

           Erase all files belonging to user 0, on drive A:.

                CERA  /A1  B*:*.DOC

           Erase  all  files with an extension of DOC from all user numbers,
           on drive B:.   The source diskette is assumed to be  in  8"  SSSD
           format.

                CERA

           Produces no action, but gives a synopsis of the CERA command syn-
           tax.








                                     Page 12






      CFMT -- Format A CP/M Diskette

      The  CFMT  utility  formats  blank  CP/M diskettes.   CFMT corresponds
      directly to the CP/M FORMAT or NEWDISK command.

      The general syntax of the CFMT command is:

           CFMT  (/disk type)  CP/M unit name

      Disk type is the optional diskette tag as  discussed  earlier.   CP/M
      unit  name  refers to the designator for the diskette drive containing
      the diskette to be formatted.

      Before a diskette is formatted by CFMT, a prompt is issued to the con-
      sole in order to confirm that a diskette is to be reformatted.  If the
      letter "G" followed by the ENTER key is typed,  a blank format pattern
      is created on the designated diskette.

      Examples of the CFMT command are:

                CFMT  /MOR1  A:

           Format  the  diskette  in drive A: with a format pattern suitable
           for a Morrow MD1 computer system.

                CFMT  F:

           Format the diskette in diskette unit F:  with  a  format  pattern
           corresponding to whatever is specified by the CPMDISK environment
           variable.  If CPMDISK is not defined, CFMT will prompt for a dis-
           kette type.






















                                     Page 13






      Building Custom Diskette Definitions

      As  mentioned earlier,  the file CPMDISKS.DEF contains definitions for
      various common CP/M diskette types.   This sections describes how  you
      can add your own definitions to this file for diskette formats not al-
      ready  present.   This  section  requires some knowledge of CP/M disk
      structure; it is not intended for the casual user.

      The following is a typical diskette format definition:

           BEGIN
             SUP3  Superbrain QD -- DSDD 48 tpi 5.25"
           DENSITY
             MFM,LOW
           COMPLEMENT
           CYLINDERS
             35
           SIDES
             2
           SECTORS
             10,512
           SIDE1 0
             1,3,5,7,9,2,4,6,8,10
           SIDE2 1
             1,3,5,7,9,2,4,6,8,10
           ORDER
             CYLINDERS
           BSH 4 BLM 15  EXM 1  DSM 169  DRM 63
           AL0 080H  AL1 00H  OFS 2
           END


      Diskette definitions are keyword-oriented.   That is,  there are a few
      words  which  have  special meaning to the routines with interpret the
      diskette definitions.   Each keyword identifies  the  data  which  im-
      mediately follows it.

      The following rules of construction apply to a diskette definition:

           (1)  Definitions are not sensitive to alphabetic case;  terms and
                keywords may be in upper- or  lower-case  characters,  or  a
                mixture of both.

           (2)  Spaces,   tabs and line boundaries are treated as separators
                between terms.  In some cases, a comma is required as an ad-
                ditional separator.

           (3)  A term must be completely contained on a single line; other-
                wise,  line boundaries are generally ignored.   The only ex-
                ceptions to this are the NOTE keyword, which causes the rest



                                     Page 14






                of  the  current line to be ignored,  and the BEGIN keyword,
                which uses the rest of the line following the diskette  type
                code or "tag" as a descriptive comment.

           (4)  Numbers may be expressed in decimal,  hexadecimal or binary.
                Decimal quantities are the default and are made up of digits
                between 0 and 9 inclusive.   Hexadecimal quantities may also
                include the letters A through F,  but must begin with a num-
                ber.   Hexadecimal quantities are denoted by  a  final  "H".
                Binary quantities are made up of the numbers 0 and 1 and are
                denoted  by a final "B".   These are the same conventions as
                those used in CP/M assembler coding.

           (5)  All-blank or empty lines are ignored and may be used  freely
                to enhance readability.

      BEGIN  signals  the  start of a definition.   The first term following
      this keyword is a one- to four-character diskette tag  code  by  which
      this  definition  may  be accessed.   The first character of this type
      code must be alphabetic;  the second character may be numeric  or  al-
      phabetic.   The  remainder of the the line following the type code is
      saved as commentary describing the diskette type.

      DENSITY takes two terms,  separated by a comma.   The  first  term  is
      either  MFM  for  a  double-density diskette or FM for single density.
      Your disk controller must be capable of supporting FM operation if the
      FM density option is given.   The second term is used to  program  the
      diskette  clock  rate on AT-class machines.   LOW signifies that a 250
      Kbps data rate should be used; HIGH signifies that a 500 Kbps (HD den-
      sity) data rate is to be used.   When the PC-AT  1.2M  5.25"  diskette
      drive is being used,  a data rate of LOW is taken to mean 300 Kbps in-
      stead of 250 Kbps.

      CYLINDERS specifies the number of cylinders contained in the  diskette
      format.   If  this  number  is less than 50,  quad-density (80 track)
      drives will be double stepped to go from cylinder to cylinder.

      SKEW specifies the physical interleaving of sectors.   This specifica-
      tion is optional; if omitted a 1-to-1 physical interleave is assumed.

      SIDES specifies the number of tracks or surfaces per cylinder.   SIDES
      may be either 1 or 2 for single- or double-sided media, respectively.

      SECTORS specifies both the number of sectors per track (cylinder  sur-
      face)  and the size of a sector.   The sector count and the size terms
      must be separated by a comma.  SECTORS must precede SIDE1 and SIDE2 in
      a definition.






                                     Page 15






      COMPLEMENT is used to denote certain  formats  which  record  data  in
      complemented or NOT-ed form.  The primary offender in this area is the
      Superbrain  line.   COMPLEMENT  instructs  22DISK  to complement data
      before writing and after reading a CP/M diskette.   If  COMPLEMENT  is
      not used within a definition, normal true format recording is assumed.

      ORDER  instructs 22DISK as to the ordering of tracks on a double-sided
      diskette.   Most  formats  record first one side,  and then the other
      before moving to a new cylinder.   However,  some  diskette  formats,
      notably CP/M-86 on the IBM PC, record all of the tracks on one side of
      a diskette, then record the tracks on the other side in descending or-
      der.  To specify that the cylinder is incremented before the side, use
      CYLINDERS after the ORDER keyword.  To specify that the side is incre-
      mented before the cylinder number,  use SIDES after the ORDER keyword.
      The default when ORDER is not specified is SIDES;  that is,  first one
      side is recorded,  then the other before the cylinder number is incre-
      mented.  ORDER has no effect on single-sided media.

      SIDE1, which must follow the SECTORS specification, specifies the sec-
      tor ordering on the  first  cylinder  surface.   CP/M  2.2  allows  a
      software  interleave  of  sectors on a diskette;  the terms given here
      reflect that interleave.   The first term after the SIDE1  keyword  is
      the  logical  side  ID  found  in  each ID address mark for that disk.
      Usually,  this number is 0 for the first side of a diskette and 1  for
      the second side.   Certain computers,  however,  deviate from this, as
      shown by the Kaypro example above,  where the second side also  has  a
      side ID of 0.   After the side ID, there follows a list of sector num-
      bers in their CP/M ordering.   Each number specifies the next  logical
      sector to be addressed.  Sector numbers in this list must be separated
      by  commas;  the  number   given must correspond to that stated in the
      SECTORS specification.

      SIDE2 is specified only if the diskette has two surfaces per cylinder.
      The terms following SIDE2 are the same as those for SIDE1, except that
      they define the sector addressing and ordering for the second  surface
      of the diskette.

      LABEL  is specified for diskette formatting only.   The term following
      the word LABEL is used as a file name with an implied suffix of  .LBL.
      When a diskette is formatted, the contents of this file are written to
      the diskette,  starting with the first sector.   If the data length of
      the file does not work out to be an integral multiple of the  diskette
      sector length,  the last sector is filled to its end with the value of
      the last byte read from the file.   The LABEL feature may also be used
      to enable one to create CP/M "system" diskettes.

      The  remainder  of  the  keywords in the definition are taken from the
      CP/M Disk Parameter Block for this diskette type.  The CP/M System Al-
      teration Guide presents details on the meaning of each field.  A brief
      description of each is presented here:



                                     Page 16






           BSH refers to the block shift or the number of left shifts needed
                to translate an allocation block number to a relative sector
                address.

           BLM refers to the block mask or a bit mask of ones  corresponding
                to the number of bits specified by BSH.  For example, if BSH
                is 3, BLM is 7 (3 bits).

           EXM  refers  to  the  extent  mask  or a bit mask of ones used in
                delimiting extents, or groups of 128 128-byte records.

           DSM refers to the total number of sectors present on a  diskette.
                This  quantity,  like all of the CP/M system variables,  as-
                sumes a 128-byte sector.

           DRM refers to the total number of directory entries available  on
                a diskette.  DRM is also related to the AL0 and AL1 fields.

           AL0 and AL1 form a bit mask,  beginning with the most significant
                bit in byte AL0 and ending with the least significant bit in
                AL1.   These two bytes map the first 16 allocation blocks of
                the  disk.   A 1 bit in a position indicates that an alloca-
                tion block is reserved,  usually for the directory (see DRM,
                above).

           OFS  indicates the number of tracks that are used for storing the
                CP/M system and BIOS at the beginning of a diskette.

           SOFS  indicates the number of sectors that are  used  for  storing
                the  CP/M  system  and  BIOS at the beginning of a diskette.
                SOFS is used when the number of sectors used by the CP/M  is
                not  an  integral  number of tracks,  such as for the Coleco
                Adam.


      Every diskette definition must end with the END keyword, which follows
      the OFS specification.

      If the following Microsoft BASIC program is run on the  host  CP/M  (8
      bit)  system,  the values of the relevant DPB fields are displayed for
      the currently logged-in drive:


           100 REM PROGRAM TO DISPLAY A DEFAULT DPB
           110 REM
           120 REM FOR CP/M 2.2 ONLY
           130 REM
           140 DEF FNP(X) = PEEK(X) + 256*PEEK(X+1)
           150 IF PEEK(0) <> 195 THEN PRINT "Requires CP/M" : STOP
           160 PRINT "DPB VALUES FOR THE CURRENT DISK -- " : PRINT
           170 REM
           180 REM STUFF S$ WITH THE FOLLOWING PROGRAM -

                                     Page 17






           190 REM
           200 REM PUSH H            ; Save address of FAC-3
           210 REM LHLD 1            ; Get BIOS Cold boot entry
           220 REM MVI L,27          ; Change to SELDISK vector
           230 REM LDA 4        ; Get current disk
           240 REM MOV C,A
           250 REM MVI A,PCHL   ; for indirect call
           260 REM STA 38H           ; set in RST 7 vector
           270 REM RST 7        ; call SELDISK
           280 REM POP D        ; FAC-3
           290 REM XCHG
           300 REM MOV M,E           ; Store pointer to DPH
           310 REM INX H
           320 REM MOV M,D
           330 REM RET          ; exit...
           340 REM
           350 S$ = ""
           360 READ SD : IF SD < 0 THEN 380  ' Read the USR code
           370 S$ = S$ + CHR$(SD) : GOTO 360
           380 SX = VARPTR(S$) +1
           390 SR = FNP(SX)
           400 DEF USR = SR               ' User program set up
           410 DPH = USR(0)               ' Get DPH Pointer
           420 IF DPH = 0 THEN PRINT "Select error" : STOP
           430 SPT = FNP( FNP( DPH +10)) ' Get Sectors/Track
           440 PRINT "Sectors per Track";TAB(30);SPT
           450 IF FNP(DPH) = 0 THEN 510  ' if no interleave
           460 PRINT " Sectors interleaved as follows:"
           470 FOR I = 1 TO SPT
           480  PRINT TAB(10); PEEK( FNP(DPH) + I-1)
           490 NEXT I
           500 PRINT : GOTO 520
           510 PRINT " Sectors are not interleaved"
           520 DPB = FNP(DPH+10)
           530 PRINT "Block Shift (BSH)";TAB(30);PEEK(DPB+2)
           540 PRINT "Block Mask (BLM)";TAB(30);PEEK(DPB+3)
           550 PRINT "Extent Mask (EXM)";TAB(30);PEEK(DPB+4)
           560 PRINT "Total Sectors (DSM)";TAB(30);FNP(DPB+5)
           570 PRINT "Directory Entries (DRM)";TAB(30);FNP(DPB+7)
           580 PRINT "Allocation 0 (AL0)";TAB(31);HEX$(PEEK(DPB+9));"H"
           590 PRINT "Allocation 1 (AL1)";TAB(31);HEX$(PEEK(DPB+10));"H"
           600 PRINT "Cylinder Offset (OFS)";TAB(30);PEEK(DPB+13)
           610 PRINT
           620 STOP
           630 DATA  229,42,1,0,46,27,58,4,0,79,62,233,50,56,0
           640 DATA  255,209,235,115,35,114,201,-1
           650 END






                                     Page 18






      Some Hints on Developing a Definition

      Quite frequently,  the only information available  when  developing  a
      definition for 22DISK is a diskette with a few files and nothing more.
      Here's a guide on what to do if you'd like to try working up a defini-
      tion yourself:

           1.   Get  a copy of Sydex's ANADISK.   This utility will fur-
                nish far more information than will any other program.

           2.   Run ANADISK on the diskette in SECTOR EDIT mode.   Note
                that  the interleave (or SKEW) is given,  as well as the
                number,  size and addresses of sectors.   You then  have
                the figures for DENSITY,  CYLINDERS,  SIDES,  SKEW SIDE1
                and SIDE2.

           3.   Locate the  directory  on  the  diskette.   Almost  in-
                variably, it starts on the first sector of a track.  The
                number of tracks up the point where the directory begins
                will give the figure for OFS.   The directory stands out
                because it shows file names every  32  bytes,  or  every
                other line on the ANADISK display.

           4.   Examine the first directory entry.   The second 16 bytes
                (the second line of the entry) gives a list  of  alloca-
                tion unit numbers belonging to the file.   The first one
                of these will tell how many allocation units  have  been
                reserved to hold the directory.   Thus, if the first al-
                location byte is 04, four allocation units have been al-
                located to the directory.   Another  thing  to  note  is
                whether  the  allocation  unit number appears to be an 8
                bit or 16 bit quantity.   For example,  if an entry  has
                the following form:

      00 50 49 50 20 20 20 20 20 43 4F 4D 00 00 00 10  .PIP     COM....
      04 00 05 00 06 00 00 00 00 00 00 00 00 00 00 00  ................

                the  allocation unit designators are 4,  5 and 6 and are 16-
                bit quantities.  On the other hand, the following item:

      00 50 49 50 20 20 20 20 20 43 4F 4D 00 00 00 10  .PIP     COM....
      04 05 06 00 00 00 00 00 00 00 00 00 00 00 00 00  ................

                shows the same allocation units,  but as  8-bit  quantities.
                If 16-bit quantities are involved,  more than 255 allocation
                units are defined for the diskette,  if an  8-bit  quantity,
                less than 256 units.   This serves as a check for later com-
                putations.  In any case,  the first allocation number of the
                first  directory entry gives the number of bits to be set in
                AL0 and AL1.  Thus, for an allocation number of 04:

                     AL0 11110000B  Al1 0

                                     Page 19






           5.   Starting with the first directory sector, advance the sector
                (and track,  if necessary) until you find the data belonging
                to the first file.   Unused directory entries are almost al-
                ways filled out with a pattern of E5's.   The number of sec-
                tors  dedicated  to the directory will give an indication of
                both the number of directory entries and the allocation unit
                size.   Suppose that a our hypothetical  diskette  shows  16
                sectors  of 512 bytes allocated to the directory.   Since a
                directory entry is 32 bytes long,  the number  of  directory
                entries possible for this format is:

                     16 entries/sector X 16 sectors = 256 entries total

                Thus,  DRM is one less than this or 255.  Since we know that
                these 16 sectors  represent  4  allocation  units  or  8,192
                bytes, the allocation unit size is:

                     8,192 / 4  = 2,048 bytes

                Given  this,  we  can use the following table to compute the
                values for BSH and BLM:

                     +------------+---------+----------+
                     | Unit Size  |   BSH   |   BLM    |
                     +------------+---------+----------+
                     |    1,024   |    3    |    7     |        +----------+
                     |    2,048   |    4    |   15     |  ------+ This one |
                     |    4,096   |    5    |   31     |        +----------+
                     |    8,192   |    6    |   63     |
                     |   16,384   |    7    |  127     |
                     +------------+---------+----------+

           7.   We still need a value for EXM and DSM.   DSM is  simply  the
                total number of allocation units on the diskette, not count-
                ing the system OFS area.  Let's assume that our diskette has
                an  offset of 2 tracks and is single-sided with 40 cylinders
                with 8 sectors per track.  The value of DSM is then:

           ((40 cylinders X 1 side) - 2 tracks) X 8 sectors X 512  bytes)  =
                155,648 bytes / 2,048 = 76 Allocation units, total

                To get EXM, we then use the following table:

                     +------------+-----------+-----------+
                     | Unit Size  | DSM < 256 | DSM > 255 |
                     +------------+-----------+-----------+
                     |    1,024   |      0    |   na      |
                     |    2,048   |      1    |    0      |
                     |    4,096   |      3    |    1      |
                     |    8,192   |      7    |    3      |
                     |   16,384   |     15    |    7      |
                     +------------+-----------+-----------+

                                     Page 20







           8.   That's  almost  the complete picture,  but for the SIDE1 and
                SIDE2 sector ordering.   This is the hardest to determine of
                any  of  the  parameters.   Find a readable text file on the
                diskette and piece the text back together by  observing  how
                words break across sector boundaries.   After a bit,  a pat-
                tern in the ordering will become apparent, such as:

                     1, 3, 5, 7, 2, 4, 6, 8

           9.   The ORDER value can be determined on double-sided  diskettes
                by  observing  whether  file  data  appears to move from one
                track to the next on the same side (CYLINDERS),  or  appears
                to  go  from  one  side to the other and then advance to the
                next cylinder (SIDES).

           10.   COMPLEMENT is rare.  Generally,  if a diskette appears to be
                formatted  with values of 1A instead of E5,  the data on the
                diskette is complemented.


      Indexing A Large Definition File with GENINDEX

      CPMDISKS.DEF as supplied with 22DISK has been indexed so that the  en-
      tire  file  does  not  need  to be searched for the specified diskette
      definition.  CPMDISKS.DEF is also supplied in a  non-indexed  form  as
      CPMDISKS.NOI.

      To  generate an indexed definition file,  the GENINDEX command is used
      as follows:

                GENINDEX  source file  destination file

      where source file is the non-indexed input definition  file  and  des-
      tination  file  names  the file which will contain the indexed defini-
      tions.

      An editable form of CPMDISKS.DEF may  be  had  by  using  the  utility
      STRIPIDX to remove the index from a definition file:

                STRIPIDX  source file destination file


      Diskette Densities and Recording Modes

      The  diskette  has undergone quite a number of changes in its develop-
      ment and 22DISK reflects some of these changes.   This  section  dis-
      cusses some of the terms used in connection with 22DISK definitions:

           1.   The physical size of the diskette.   By and large, most dis-
                kettes come in one of three sizes: 8, 5.25 or 3.5".   The 8"
                diskette is rare to find in use nowadays, but 22DISK is able

                                     Page 21






                to  handle  this  format,  given  the  appropriate hardware.
                5.25" diskettes are the reigning media choice now,  but  may
                soon be displaced by the 3.5" "micro" diskettes.  There have
                been other sizes,  such as 3.25", but these have not enjoyed
                much popularity.

           2.   Recording performed on both surfaces of the diskette.   The
                formats  using  only  one  surface  are called single-sided,
                those  using  both  surfaces,  double-sided.   Double-sided
                drives  were  rare until about 1978;  now they are the rule,
                rather than the exception.

           3.   The track density.   An analogue to this would be to ask how
                close  the  grooves  on  a phonograph record are.  On 8" and
                5.25" drives,  a track packing density of 48 tracks per inch
                is  most  commonly  used,  although some high-capacity 5.25"
                drives double this for 96 tracks per inch (the PC  AT's  1.2
                megabyte  drive is a 96 tpi drive).   There was an alternate
                5.25" standard in use between 1977 and 1980,  100 tracks per
                inch,  but  it  was  always in the minority of applications.
                3.5" diskettes use a track density of 135.5 tracks per inch.

           4.   The spindle speed, or how fast the diskette spins inside its
                jacket.   All 8"  diskettes  spin  at  360  revolutions  per
                minute; almost all 3.5" diskettes spin at 300 rpm; the first
                Sony drives spun at 600 rpm.  Most 5.25" drives also spin at
                300 rpm,  with the exception of the PC AT 1.2 megabyte high-
                capacity drive, which spins at 360 rpm.

           5.   The recording method used.   Early diskette  drives  used  a
                method  called  FM,  for frequency modulation,  in which one
                pulse per time period signified a zero bit  and  two  pulses
                signified  a  one  bit.   This is the method referred to as
                single density.  Later,  a recording method called MFM,  for
                Modified FM came into popular use.  This scheme uses a some-
                what  more complex encoding scheme dependent on the position
                of a pulse within a bit time window and  the  value  of  the
                last bit written.   What MFM does is get twice the data rate
                for the same bit rate,  hence the term double density.   Al-
                most all modern diskette drives use MFM recording.

           6.   The  bit  rate  at which data is read or written.   The data
                rate for low-density 5.25" diskettes are recorded is 250,000
                bits per second.   The PS/2 and PC AT  high-density  formats
                make use of a data rate of 500,000 bits per second.  8" for-
                mats generally make use of a 500,000  bit  per  second  data
                rate.   The  PC  AT 1.2 megabyte high-capacity drive uses a
                data rate of 300,000 bits per second  to  record  360K  dis-
                kettes because of its higher spindle speed:




                                     Page 22







                     360 rpm
                     ---------- X 250,000 bps = 300,000 bps
                     300 rpm

           7.    The  sector  demarcation method used.   All modern diskettes
                use unique data patterns to show where a sector  begins  and
                ends on a track.  On some older systems, however, additional
                index  holes  were  used to mark sector boundaries--known as
                "hard" sectoring.   22DISK does not  support  hard  sectored
                formats.


      The  common  PC  XT  diskette controller is able to handle single- and
      double-sided,  double-density diskettes.   The common PC  AT  diskette
      controller  possesses a variable-rate bit clock generator for 250,000,
      300,000 and 500,000 bits per second to handle double density diskettes
      in both 8", 5.25" and 3.5" sizes, as well as high-density diskettes in
      the 5.25" and 3.5" profiles.

      If there is a need to handle single-density diskettes in a 5.25"  form
      factor,  a PC XT clone controller can easily be modified to do so,  at
      no loss of normal functioning.  The next section shows how.


      Modifying A PC-XT "Clone" Controller For Single-Density Reading

      Got a bunch of Xerox 820 diskettes that you'd love to be able to read?
      Sold your Osborne I at a swap meet and need your correspondence  files
      from 1981?  Too bad, your PC can't handle single-density diskettes...

      Or can it?

      Well, it can be done with a little patience, a few bits of wire, and a
      small  soldering  iron.    The result is a controller that remains PC-
      compatible as far as any DOS software can tell,  but has an  extra  FM
      mode in addition.

      Do  not  attempt  this modification unless you really know what you're
      doing and have worked with this kind of equipment before.   This is no
      place for a novice.

      First, you need to determine the type of controller you're using.  The
      original  IBM PC and PC/XT controllers are NOT readily adaptable,  but
      most inexpensive clones are.

      The important thing to locate on  the  controller  card  is  the  data
      separator chip; it's an 8-pin DIP.  It looks something like this:





                                     Page 23







                             +--U--+
                     Pin 1   |     | Pin 8
                     Pin 2   |     | Pin 7
                     Pin 3   |     | Pin 6
                     Pin 4   |     | Pin 5
                             +-----+

                           (Top View)

      This DIP (Dual Inline Package) will have pins 4,  5 and 6 grounded and
      pin 8 connected to the +5 supply trace.    Numbering  of  this  device
      varies  --  Western Digital (the prime source) has it as a WD 9216;  a
      NEC part number is UM 8326.   But it's all the same as  far  as  we're
      concerned.

      Identify  the  diskette  controller  chip on your board -- this is the
      large 40 pin DIP  labeled  uPD765A  (NEC),  Z765A  (Zilog),  or  8272A
      (Intel).   Note that pin 26 is a no-connection on your card -- this is
      the MFM/FM mode output pin.

      The last thing you need to find is an unused inverter section.    This
      is the most difficult part of this whole modification.  Most cards use
      a  SN7404 or 'S04 as an oscillator (look near the crystal).   Usually,
      not all sections are used.   Or look for a section of an 'LS00 gate or
      some  such  thing that can be wired as an inverter (Hint: tie both in-
      puts together).

      You need to lift pin 5  of  the  8-pin  data  separator  (above)  from
      ground.  Depending on how your card is laid out, this can be quick and
      simple (cut the ground trace) or very messy (unsolder the whole chip).
      Connect  a  wire  (wire-wrap wire is great) between this pin 5 and the
      output of the inverter which you located.   Connect a second wire  be-
      tween  pin 26 of the floppy disk controller (uPD 765) and the input of
      the inverter.

      That's it -- put the card back into your PC and  make  sure  it  still
      handles regular DOS diskettes okay.

      If  you've got an AT-style controller or a Western Digital 'Fox' dual-
      density XT controller,  you can even drive SD and DD 8" diskettes with
      this modification.

      Note  that  this  simple  modification will enable you to read single-
      density diskettes,  but not to write them.   If you're  really  adven-
      turous,  an  XT-style controller can be made to write diskettes if the
      write-precompensation circuitry is bypassed.   We do it  here  with  a
      section of a 74LS157 driven from the MFM pin of the '765.  A schematic
      of your controller is a must for this kind of work.




                                     Page 24







      In Closing

      Thank you for taking the time to consider Sydex.   We hope that 22DISK
      does its job well and that it meets your needs.   This product  repre-
      sents several months of work and research; if you have any suggestions
      on how it might be improved, please let us know.














































                                     Page 25






      Other Sydex Products

                                    SHAREWARE

           CON>FORMAT  --  Concurrent "background" diskette formatter.  Fea-
           tures "pop-up" operation and "hot key" activation.  You've got to
           see it to believe.   Supports all  current  DOS  formats.  $15.00
           ($50.00 site) registration fee.

           22DISK  --  Transfer  files,  format,  examine and erase files on
           "foreign" CP/M diskettes on your PC.  Includes tips on supporting
           8" and 5.25" single-density diskettes.   Contains definitions for
           over  200  different formats.   $25.00 ($100.00 site) registration
           fee.

           22NICE -- A  CP/M  2.2  emulation  package.    Supports  the  NEC
           V-series  chips  or  performs  emulation by software for both the
           8080 and Z80 processors.   Includes terminal emulation  and  dis-
           kette handling for common CP/M systems.  Includes 22DISK.  $40.00
           ($150.00 site) registration fee.

           ANADISK  --  The  compleat  diskette  utility.    Nothing like it
           anywhere else; scan, edit, repair and copy just about any kind of
           diskette.  $25.00 ($150.00 site)  registration fee.

           TELEDISK -- Turn any diskette into a  compressed  data  file  and
           vice-versa.   Allows you to send and receive entire diskettes via
           modem.  Even works with some "copy-protected" diskettes.   $20.00
           ($150.00 site) registration fee.

           COPYQM -- Mass diskette duplicator.  Format, copy and verify mul-
           tiple  diskettes from a single master.   Implements "no keyboard"
           interaction mode and drive "round robin" servicing.  Supports all
           standard DOS formats.  $15.00 ($50.00 site) registration fee.

           FORMATQM -- Mass diskette formatter - format a box  of  diskettes
           at  a single sitting.   Implements "no keyboard" interaction mode
           and drive "round robin" servicing.   Supports  all  standard  DOS
           formats.  $10.00 ($40.00 site) registration fee.


                                 RETAIL SOFTWARE

           SIM-CGA  4.2  --  Color Graphics Adapter simulation on monochrome
           (Hercules-compatible) graphics-equipped machines.  Available from
           better software  retailers  and  distributed  by  CSS,  ABCO  and
           American Software Distributors.

           SIM-EMS  -- Simulate Lotus/Intel/Microsoft Expanded Memory on PC-
           AT class machines.   Conforms  to  EMS  4.0  specification.  Dis-
           tributed by CSS and ABCO.


                                     Page 26
```
{% endraw %}

## DPB.ASM

{% raw %}
```
;*	Program to display DPB information on CP/M 2.2
;
;	For those systems without MS BASIC
;

bdos	equ	0005h		; BDOS call vector
wboot	equ	0000h		; Warm boot vector
cdisk	equ	0004h		; current disk
tpa	equ	0100h		; TPA start
cr	equ	13		; return
lf	equ	10		; line feed
bel	equ	7		; bell

	org	tpa

GetDPB:
	call	Strout
	db	cr,lf,'       Parameters for Drive ',0

	lda	cdisk
	ani	15
	adi	'A'
	call	chout		; give a drive letter

	call	Strout
	db	':',cr,lf,lf,0  ; skip a line

	lda	cdisk
	mov	c,a
	lhld	wboot+1
	mvi	l,27		; point to seldisk
	call	Indcall		; go call (seldisk)

	mov	a,h
	ora	l
	jnz	GetDPB2		; if okay
	call	Strout
	db	cr,lf,bel,'Select error',cr,lf,0
	jmp	wboot		; exit...

GetDPB2:
	shld	DPHaddr		; save DPH address
	lxi	d,10
	dad	d
	mov	e,m
	inx	h
	mov	d,m		; get DPB address
	xchg
	shld	DPBaddr		; save DPB address

;	Show sectors/track.

	call	Strout
	db	'Sectors per Track............',0
	mvi	a,0
	call	GetField	; get a field from the DPB
	shld	SectTrk		; save it
	call	ShowDec		; show it

;	If there's a translate table, show it.

	lhld	DPHaddr
	mov	e,m
	inx	h
	mov	d,m
	mov	a,d
	ora	e
	jz	GetDPB6		; if none..
	call	Strout
	db	cr,lf,'Sectors interleaved as follows:',0

	lhld	SectTrk		; get Sectors/track
	mov	b,h
	mov	c,l
GetDPB4:
	call	Strout
	db	cr,lf,'    ',0  ; indent
	ldax	d		; get a sector
	push	h
	mov	l,a
	mvi	h,0
	call	ShowDec		; show it
	pop	h
	dcx	b
	mov	a,b
	ora	c
	jnz	GetDPB4		; loop...
	jmp	GetDPB8		; do the rest...

GetDPB6:
	call	Strout
	db	cr,lf,'Sectors are not interleaved',0

;	Show the rest of the fields.

GetDPB8:
	call	Strout
	db	cr,lf,'Block Shift (BSH)............',0
	mvi	a,2
	call	GetField
	mvi	h,0
	call	ShowDec
	call	Strout
	db	cr,lf,'Block Mask (BLM).............',0
	mvi	a,3
	call	GetField
	mvi	h,0
	call	ShowDec
	call	Strout
	db	cr,lf,'Extent Mask (EXM)............',0
	mvi	a,4
	call	GetField
	mvi	h,0
	call	ShowDec
	call	Strout
	db	cr,lf,'Total Blocks (DSM)...........',0
	mvi	a,5
	call	GetField
	call	ShowDec
	call	Strout
	db	cr,lf,'Directory Entries (DRM)......',0
	mvi	a,7
	call	GetField
	call	ShowDec
	call	Strout
	db	cr,lf,'Allocation 0 (AL0)...........',0
	mvi	a,9
	call	GetField
	mvi	h,0
	call	ShowHex
	call	Strout
	db	cr,lf,'Allocation 1 (AL1)...........',0
	mvi	a,10
	call	GetField
	mvi	h,0
	call	ShowHex
	call	Strout
	db	cr,lf,'Cylinder Offset (OFS)........',0
	mvi	a,13
	call	GetField
	call	ShowDec
	call	Strout
	db	cr,lf,lf,0		; done...
	jmp	wboot			; exit...

;*	Indirect call to (hl).
;
;	Simple, yet effective.
;

Indcall:
	pchl			; jmp to (hl)

;*	GetField - Get a DPB field into (hl)
;
;	(a) = offset on entry.
;

GetField:
	push	d
	lhld	DPBaddr
	mov	e,a
	mvi	d,0
	dad	d
	mov	e,m
	inx	h
	mov	d,m
	xchg
	pop	d
	ret


;*	Chout - Character in (a) to console output.
;
;	Preserves all but (a)
;

Chout:
	push	h
	push	b
	push	d
	mov	e,a
	mvi	c,2
	call	bdos			; issue a console-out
	pop	d
	pop	b
	pop	h
	ret

;*	Strout - Output a string following the call to this routine.
;
;	preserves all.
;
;	String is null-terminated.
;

Strout:
	xthl				; get return in (hl)
	push	psw			; save (a)
Strout2:
	mov	a,m
	inx	h
	ora	a
	jz	Strout4			; if done...
	push	d
	push	b
	push	h
	mov	e,a
	mvi	c,2			; console out
	call	bdos
	pop	h
	pop	b
	pop	d
	jmp	Strout2

Strout4:
	pop	psw
	xthl
	ret				; exit...all regs preserved

;*	ShowDec - Show (HL) as a decimal number.
;
;	Output to the console; blank leading zeroes.
;

ShowDec:
	push	h
	push	d
	push	b
	push	psw
	lxi	d,DecTable	; get powers table
	xchg
	mvi	c,0		; say blanking
ShowDec2:
	mov	a,m
	ora	a		; see if last digit
	jz	ShowDec8	; if so
	mvi	b,0
ShowDec4:
	inr	b
	mov	a,e
	sub	m
	mov	e,a
	inx	h
	mov	a,d
	sbb	m
	mov	d,a
	dcx	h
	jnc	ShowDec4	; if oversubtract

;	correct oversubtract.

	mov	a,e
	add	m
	mov	e,a
	inx	h
	mov	a,d
	adc	m
	inx	h
	mov	d,a
	dcr	b
	jz	ShowDec6	; if a zero
	mvi	c,1
ShowDec6:
	inr	c
	dcr	c		; check (c)
	jz	ShowDec2	; loop to next digit
	mov	a,b
	adi	'0'
	call	chout		; character out
	jmp	ShowDec2	; to next digit

;	Do the last digit - do not blank.

ShowDec8:
	mov	a,e
	adi	'0'
	call	chout
	pop	psw
	pop	b
	pop	d
	pop	h
	ret

DecTable:
	dw	10000,1000,100,10,0	; powers of 10


;*	ShowHex - Show a string of hex digits.
;
;	On entry (HL) = value.
;
;	Output is to console, leading zeroes blanked.
;

ShowHex:
	push	h
	push	d
	push	b
	push	psw
	lxi	b,0400h			; 4 digits + blank indicator
ShowHex2:
	xra	a
	dad	h
	ral
	dad	h
	ral
	dad	h
	ral
	dad	h
	ral				; isolate a digit in (a)
	ora	a
	jz	ShowHex4		; if zero
	mvi	c,1			; say nonzero
ShowHex4:
	adi	'0'                     ; bias for ASCII
	cpi	'9'+1
	jc	ShowHex6		; if 0-9
	adi	'A'-'9'-1               ; make digits
ShowHex6:
	dcr	b
	jz	ShowHex8		; if last digit
	inr	c
	dcr	c
	jz	ShowHex10		; skip the leading zero
ShowHex8:
	call	chout
ShowHex10:
	inr	b
	dcr	b
	jnz	ShowHex2		; if not done yet
	pop	psw
	pop	b
	pop	d
	pop	h
	ret				; exit...

DPBaddr dw	0		; address of DPB
DPHaddr dw	0		; address of DPH
SectTrk dw	0		; sectors/track

	end	GetDPB
```
{% endraw %}

## 22NICE.DOC

{% raw %}
```




        Sydex



















                                     22NICE


                          A New Insystem CP/M Emulator














                                                Sydex
                                                P.O. Box 5700
                                                Eugene, OR  97405
                                                Voice:    (503)  683-6033
                                                FAX:      (503)  683-1622
                                                Data:     (503)  683-1385










                                Table of Contents


          22Nice, Briefly..............................................1

          Quick Installation And Operation of 22Nice...................1

          If You're Upgrading..........................................2

          How 22Nice Works.............................................3

          The GENCOM Utility--Generate A Loader........................4

          Specifying a Custom Keyboard Layout..........................8

          Running 22NICE.COM..........................................11

          Support of User Areas.......................................12

          CSAVE - Write the CP/M Area to Disk.........................12

          Disk Drive Reassignment.....................................13

          Locating CP/M Program Files.................................14

          Interrupts and 22Nice.......................................14

          Setting GENCOM Defaults.....................................15

          Use Of CP/M SUBMIT And XSUB.................................16

          Accessing I/O Ports.........................................16

          Accessing PC Memory.........................................17

          IOBYTE Support..............................................17

          Absolute Disk Read and Write................................18

          Maximum Program Size........................................18

          A Sample 22Nice Installation................................18

          A Short Glossary of CP/M Terms..............................19

          What's New in Version 1.3...................................21

          The Sydex Product Line......................................22





                                     22NICE

                        A New Insystem CP/M 2.2 Emulator



                             Version 1.3, July, 1990

                           Copyright 1985-1990, Sydex

                                      Sydex
                                  P.O. Box 5700
                                Eugene, OR  97405
                             Voice:  (503)  683-6033
                             FAX:   (503)  683-1622
                             Data:   (503)  683-1385

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
        also receive support for 22Nice -- which can be quite valuable at
        times.  And finally,  we have a few utilities not included in the
        evaluation  package.   Make no mistake,  however - the evaluation
        version is fully functional and not "crippled" in any way.


                            Registration Information

        The non-commercial single-user registration  fee  for  22Nice  is
        $40.00  US,  which  includes a copy of 22Disk,  our CP/M diskette
        transfer utility.   The commercial and multisystem site  fee  for
        22Nice (including 22Disk) is $150.00.










        Send your payment to:

                                      Sydex
                                  P.O. Box 5700
                                Eugene, OR  97405
                             Voice:  (503)  683-6033
                             FAX:    (503)  683-1622

        We  can accept telephone or FAX orders and honor VISA and Master-
        Card charges,  as well as corporate and government  purchase  or-
        ders.   All payments must be made in U.S.  dollars.   Orders from
        outside the U.S.  and Canada should include an  additional  $5.00
        for airmail shipping.   Please indicate if you have a requirement
        for 3.5" media;  we normally ship 5.25" 360K diskettes,  but will
        furnish 3.5" 720K media upon request.

        If  you  are  a registered user of this product and desire an up-
        date,  please send $5.00 for handling and we will ship you an up-
        to-date copy.  Please add $7.50 if you also need printed documen-
        tation  to  cover  our  printing costs.   You may also download a
        registered copy from our bulletin board system;  you'll need  the
        five-digit number from your invoice for validation.  Our bulletin
        board system operates 24 hours per day,  365 days a year and sup-
        ports data rates from 1200 to 9600 bits per second, no parity,  8
        data bits.


                               Distribution Notice

        This  is  "user-supported"  software.    You are hereby granted a
        license by Sydex to distribute this evaluation copy of 22Nice and
        its documentation, subject to the following conditions:

             1.   22Nice may be  distributed  freely  without  charge  in
                  evaluation form only.

             2.   22Nice may not be sold,  licensed, or a fee charged for
                  its use.   If a  fee  is  charged  in  connection  with
                  22Nice, it must cover the cost of copying or dissemina-
                  tion only.   Such charges must be clearly identified as
                  such by the originating party.   Under no circumstances
                  may  the  purchaser  be given the impression that he is
                  buying 22Nice itself.

             3.   22Nice must be presented as a complete unit,  including
                  this documentation.   Neither 22Nice nor its documenta-
                  tion may be amended or altered in any way.







             4.   By granting you the right to distribute the  evaluation
                  form  of 22Nice,  you do not become the owner of 22Nice
                  in any form.

             Any other use,  distribution or representation of 22Nice
             is  expressly  forbidden  without the written consent of
             Sydex.

        1































        --------------------
        1. CP/M, CP/M-80 and CP/M 2.2 are trademarks of Digital Research.
        MS-DOS is a trademark of Microsoft.  IBM PC, PC-XT and PC-AT are
        trademarks of International Business Machines.  V20, V30,
        uPD70108, uPD70116 are trademarks of NEC Electronics.  WordStar
        is a trademark of WordStar Corporation.  Some products of Lear-
        Siegler, Kaypro, Osborne and Televideo are also trademarked.







        Getting Started
        ____________________________________________________

        22Nice, Briefly

        22Nice is a Z80/8080 CP/M 2.2 emulator for use  on  PC-compatible
        computers.   The 22Nice CP/M Emulation package offers the follow-
        ing features:

             *    Emulate 8080/8085/Z80 processors with  or  without  NEC
                  V-series  chip installed.   22Nice contains an emulator
                  for both 8080 and Z80 processors.   22Nice also  has  a
                  test  mode,  which  allows  identification  of  the ap-
                  propriate processor needed for emulation.

             *    Provides  terminal  emulation  for  most  common   CP/M
                  machines  with  terminal  types  for  Osborne,  Kaypro,
                  Heath/Zenith,   Morrow,   Actrix,   DEC   VT-100/VT-52,
                  Televideo 925/950 and LSI ADM-3A.

             *    Supports CP/M user number to DOS sub-directory transla-
                  tion.

             *    Allows  use  of  DOS  "pipes"  and  utilities with CP/M
                  programs.

             *    Supports a complete set of BDOS and BIOS function inter-
                  faces, including direct disk read/write.

             *    CP/M programs are fully integrated into the DOS environ-
                  ment;  the user is unaware that a program is  CP/M-  or
                  DOS-based.



        Quick Installation And Operation of 22Nice

        NOTE:   If you're upgrading from a version of 22Nice earlier than
        1.3,  consult the next section on special upgrade considerations.
        There  are  quite a number of differences between Version 1.3 and
        earlier versions of 22Nice.

        The following files should be present on your 22Nice distribution
        diskette or archive file:

             22NICE.COM     The emulator program itself
             GENCOM.COM     Execution environment specifier
             CSAVE.COM      Analog to CP/M SAVE function

                                     Page 1




        Getting Started
        ____________________________________________________

             USERS.EXE      Shows user-to-directory mapping
             22NICE.DOC     Printable documentation file for 22Nice
             WHATS.NEW      Latest bulletin on 22Nice enhancements

        To use 22Nice, you'll need to do the following:

             1.   Copy the contents of the 22Nice  distribution  diskette
                  or archive file into a subdirectory, preferably located
                  on a hard drive.

             2.   Copy  the  CP/M  program files that you want to execute
                  into this directory,  changing the .COM  file  type  to
                  .CPM.    If  you've  used  our 22Disk diskette transfer
                  utility to read your program files from your CP/M  dis-
                  kettes,  the  .COM file types have already been changed
                  to .CPM.  Otherwise, a simple way to change names is to
                  use the following DOS command:

                       REN  *.COM  *.CPM

             3.   Run the GENCOM utility for all .CPM  files,  specifying
                  the console, keyboard and processor type.  For example,
                  a WordStar-type keyboard layout with a Kaypro-type dis-
                  play can be done thus:

                       GENCOM * DIS=KAY KEY=WS

                  The  GENCOM  utility  has many options to modify 22Nice
                  operation;  refer to the GENCOM section later  in  this
                  document for more details.

             4.   Run  the  CP/M  program(s)  as  if they were normal DOS
                  programs!

        That's all there is to it--but there are many special features of
        22Nice that you'll undoubtedly want to take advantage of--so keep
        reading!


        If You're Upgrading...

        If you're upgrading from an earlier version,  there are some dif-
        ferences  between the current version of 22Nice and previous ver-
        sions that you should know about:


                                     Page 2




        How 22Nice Works
        ____________________________________________________

             1.   The device-driver form of 22Nice (22RES.SYS)  has  been
                  discontinued.   The terminate-and-stay-resident form of
                  22Nice takes its place.

             2.   The BIND option of the GENCOM utility has been  discon-
                  tinued.    The  difference  in loading time between the
                  separate and the "bound" versions of a program were neg-
                  ligible.

             3.   Interface conventions between the 22Nice  resident  and
                  GENCOM-produced programs have changed.   You'll have to
                  re-GENCOM your programs.

             4.   The RMVNICE program has been moved into the  22NICE.COM
                  resident.

             5.   The default processor mode for GENCOM is now Auto.

             6.   Two  environment  variables  have  been  introduced  to
                  simplify specification of defaults:  GENCOM and 22NICE.

             7.   The support of user areas has been greatly enhanced.

             8.   All file functions are now performed using DOS  handle-
                  type I/O rather than FCB-type I/O.


        How 22Nice Works

        In addition to supporting the functions of the CP/M operating sys-
        tem  under  DOS,   22Nice  supports  the  instruction  set  of  a
        microprocessor different from that used in the IBM PC.  On PC XT-
        type machines,  this microprocessor support function  can  be  be
        facilitated  through a plug-in replacement processor to the Intel
        8088,  known as the NEC V20.   But in the case of PC AT- and 386-
        class systems, emulation of the 8080 or Z80 processor must be per-
        formed  by  22Nice.    All  emulation  is implemented in a single
        program, 22NICE.COM.

        22NICE.COM may be loaded "on demand" by CP/M programs,  or may be
        run as a terminate-and-stay-resident program.





                                     Page 3




        How 22Nice Works
        ____________________________________________________

        CP/M  programs  are  executed by having DOS first execute a short
        "loader" program,  which provides information to 22Nice about the
        program to be executed.   In addition,  the "loader" executes the
        22NICE.COM program if necessary.

        As implemented,  a CP/M executable file normally has a file  name
        extension of .COM.  However, this creates problems by conflicting
        with   DOS .COM-type programs.   Because DOS does little checking
        on the contents of .COM files,  executing a CP/M .COM file  under
        DOS  could lead to disaster.   By renaming all CP/M .COM files to
        .CPM the conflict is resolved.  As part of CP/M emulation, 22Nice
        changes all CP/M .COM file references to .COM and vice-versa,  so
        that the name change is transparent.

        The  short  "loader"  for each CP/M program is a DOS-mode program
        with the .COM file type.   This short (about 500  bytes)  program
        contains the following information:

             *    The name of the CP/M program to be run.

             *    The  type  of  microprocessor  to  be emulated--8080 or
                  Z80--and if a NEC V20 can be used, if available.

             *    The type of terminal display to be  emulated.    Unlike
                  DOS, CP/M usually provides only a simple terminal-style
                  display  rather  than the full-screen text and graphics
                  display of the PC.   However,  each manufacturer's CP/M
                  system differed in the type of terminal supported.

             *    How  the cursor and function keys are to be translated.
                  One  CP/M  program  may  require  a  WordStar  type  of
                  keyboard mapping, while another could require a Perfect
                  Writer style of keyboard.

        All  of  this information is provided by the output of the GENCOM
        utility as a very small .COM-type file.

        The GENCOM Utility--Generate A Loader

        At this point,  it's assumed that you've gotten your  CP/M  files
        over  to your PC somehow.   Remember that CP/M program files with
        an extension of .COM need to be renamed to have an  extension  of
        .CPM.  The 22Disk diskette conversion package does this automati-
        cally,  but if you've used some other means to obtain your files,
        you'll need to rename them manually.

                                     Page 4




        GENCOM Operation
        ____________________________________________________


        The GENCOM utility is used to create a .COM file which can be ex-
        ecuted by DOS for each .CPM file.  This .COM file interfaces with
        the 22NICE.COM support program and  brings  the  associated  CP/M
        program into execution.

        The syntax of the GENCOM command is as follows:

             GENCOM  file  DISPLAY=dtype  KEYBOARD=ktype  PROCESSOR=ptype

             "file"  is the name of the CP/M program file to be executed,
                  and is specified without a file extension.    DOS  path
                  names are allowed as well as "wildcard" file specifiers
                  (i.e.,  "*" and "?").  All .CPM files matching the file
                  specification will be processed by GENCOM and the  .COM
                  files  which  are  generated will be placed in the same
                  directory as the original .CPM files.

             DISPLAY=dtype is optional and may be omitted.  If specified,
                  it indicates the type of console  display  to  be  emu-
                  lated.    Any  of  the  following  may be specified for
                  dtype:

                  NONE uses DOS character I/O for output.  No special han-
                       dling of characters is performed.  If the  DISPLAY
                       expression  is omitted,  this is the default.   If
                       program output is to be "piped" to another program
                       or file, NONE must be used.

                  TVI emulates a Televideo 925/950 series terminal.

                  ADM emulates a Lear-Siegler ADM-3 or ADM-31  type  ter-
                       minal.

                  OSBORNE  emulates  the display on an Osborne I/II/Nuevo
                       computer.

                  KAYPRO emulates the display on a Kaypro I/II computer.

                  ANSI or VT100 emulates an ANSI (DEC VT-100) display.

                  VT52 emulates a DEC VT-52 display.

                  H19 emulates a Heath/Zenith H19/Z19 or H89/Z89 display.


                                     Page 5




        GENCOM Operation
        ____________________________________________________

             DISPLAY may be abbreviated as DIS.  Certain display-specific
             features cannot be accommodated by 22Nice,  such as the 132-
             column mode of a VT-100 terminal.

             KEYMAP=ktype  is optional and specifies the map for the con-
                  sole keyboard.   Any of the following may be  specified
                  for ktype:

                  NONE  uses  DOS  for  input.    No  special handling of
                       keyboard characters is performed.   If the  KEYMAP
                       expression  is omitted,  this is the default.   If
                       keyboard input  is  to  be  "piped"  from  another
                       program, this option must be used.

                  H19 emulates the Heath/Zenith H19/Z19/H89/Z89 keyboard.

                  ANSI emulates a VT-100-style keyboard.

                  WS implements a WordStar cursor keyboard mapping.

                  TVI emulates a Televideo 925/950-series keyboard.

                  OSBORNE  emulates an Osborne 1 keyboard in non-WordStar
                       mode.

                  Anything else indicates a custom keyboard map is to  be
                       used  and  the value given is the name of the file
                       containing the keyboard information.  See the sec-
                       tion entitled Defining Custom Keyboards  for  more
                       information.

             KEYBOARD may be abbreviated as KEY.

             PROCESSOR=ptype  is  optional  and  specifies  the processor
                  emulation type required for this program.   Any of  the
                  following may be specified for ptype:

                  AUTO indicates that 22Nice begins execution in emulated
                       Intel  8080  mode and switches to Zilog Z80 emula-
                       tion if a Z80-specific instruction is encountered.
                       If PROCESSOR is  not  specified,  it  defaults  to
                       AUTO.




                                     Page 6




        GENCOM Operation
        ____________________________________________________

                  V20 indicates that 22Nice should use the hardware emula-
                       tion capabilities of the NEC V20 or V30 processor,
                       if  one is installed in this computer.   If no V20
                       or V30 processor can be found,  an  8080  software
                       emulator will automatically be used.

                  E8080  specifies  that  22Nice should emulate the Intel
                       8080 processor,  even if  a  NEC  V20  or  V30  is
                       detected.  E8080 is somewhat faster than Z80 emula-
                       tion mode.

                  Z80  specifies  that  22Nice  should use a Z80 software
                       emulation.     Note  that  the  NEC  V20  and  V30
                       microprocessors  do  not  support the extended in-
                       struction set of the Z80 processor.

                  TEST specifies that 22Nice should emulate the  Z80  in-
                       struction set and observe the execution of the cur-
                       rent program.  At the conclusion of program execu-
                       tion,  22Nice  will  report the following informa-
                       tion:

                       *    If any Z80-specific  instruction  codes  were
                            executed.    If this is noted,  PROCESSOR=Z80
                            should be used for further program execution.

                       *    Any use of I/O instructions.   If  these  are
                            present,  the  program should be examined and
                            the  instructions  modified  or eliminated to
                            be compatible with the PC hardware.

                       *    Presence of code likely to  activate  one  of
                            the  V20 bugs.   If a message indicating this
                            is present,  a software emulation  (E8080  or
                            Z80) should be selected.

                       Hardware-supported  emulation (V20) results in the
                       fastest execution  speed  for  a  program.    8080
                       software  emulation  (E8080)  is  approximately  4
                       times slower,  with Z80 software  emulation  (Z80)
                       about  6  times  slower  than  V20/V30   supported
                       hardware  emulation.     On  PC-AT-  or  386-class
                       machines,  the  software  emulation  modes compare
                       favorably with a PC-XT  class  machine using a V20
                       processor.

                                     Page 7




        GENCOM Operation
        ____________________________________________________


                       PROCESSOR may be abbreviated as PRO.



        Here are some examples of the GENCOM command:

                  GENCOM  DDT  PRO=V20

        Builds a loader file, DDT.COM.   If a V20 is present,  its emula-
        tion capabilities will be used.   Otherwise, 8080 software emula-
        tion will be performed.   Standard DOS input and output  will  be
        performed.

                  GENCOM  *  KEY=WS  DIS=ANSI

        Builds  .COM  loader files for all .CPM files present in the cur-
        rent directory.   AUTO processor mode  is  assumed.    A  special
        WordStar keyboard mapping will be used;  console output will emu-
        late a standard ANSI terminal.

                  GENCOM  F:\CPM22\*  PRO=Z80

        Builds .COM loader files for every .CPM file present in the direc-
        tory F:\CPM22.  Z80 software emulation will be performed and stan-
        dard DOS input and output will be used.

                  GENCOM  MYPROG  PRO=TEST

        Builds a .COM loader file, MYPROG.COM.  Z80 software emulation is
        used and a message will be displayed if any Z80-only instructions
        are used.  In addition,  any code likely to run afoul of V20 bugs
        will be noted, as well as usage of any I/O instructions.

                  GENCOM

        Displays a summary of GENCOM command syntax.


        Specifying a Custom Keyboard Layout

        In  addition to several pre-defined keyboard layouts,   a custom-
        tailored  keyboard  "map"  can  be  specified    for   individual
        programs.    No  longer  is it necessary to remember that "cursor


                                     Page 8




        Custom Keyboard Definition
        ____________________________________________________

        back" is Control-B  for Perfect  Writer,    but  Control-S    for
        WordStar--a  separate  keyboard  "map"  can  be  created for each
        program.

        A keyboard map affects only the cursor keypad  and  the  function
        keys;  "normal" keys, (i.e., letters, numbers and symbols) cannot
        be mapped.   To define a set of key mappings,   a file must first
        be  created  (using any convenient ASCII editor) containing lines
        of the following form:

                  key-name "key-values"

        Key-name is the name of the key being mapped and may  be  one  of
        the following:

        F1, F2, F3...F10         Function keys F1 through F10
        SF1, SF2, SF3...SF10     Function keys Shift-F1 through Shift-F10
        AF1, AF2, AF3...AF10     Function keys Alt-F1 through Alt-F10
        CF1, CF2, CF3...CF10     Function keys Ctrl-F1 through Ctrl-F10
        Up, CUp                  Keypad up-arrow, Ctrl-up-arrow
        Down, CDown              Keypad down-arrow, Ctrl-down-arrow
        Left, CLeft              Keypad left-arrow, Ctrl-left-arrow
        Right, CRight            Keypad right-arrow, Ctrl-right-arrow
        Home, CHome              Keypad Home, Ctrl-Home
        End, CEnd                Keypad End, Ctrl-End
        PgDn, CPgDn              Keypad PgDn, Ctrl-PgDn
        PgUp, CPgUp              Keypad PgUp, Ctrl-PgUp
        Ins, CIns                Keypad Ins, Ctrl-Ins
        Del, CDel                Keypad Del, Ctrl-Del
        Break                    Scroll Lock

        The  key-values part of the definition represents the codes to be
        generated for each key;  note that the key-values are enclosed in
        double  quotation    marks.   As many values as can fit on a 255-
        character line may be specified.   Commentary can be placed on  a
        line after the closing quotation mark, provided that at least one
        space follows the quotation mark.

        Lines  beginning with an asterisk (*) are ignored and may be used
        for commentary.

        Control  characters  are specified by preceding the corresponding
        printing character by the  caret  (^).    Thus,  ^C  generates  a
        Control-C  or  ASCII  value  of  03.   A carriage return or Enter


                                     Page 9




        Custom Keyboard Definition
        ____________________________________________________

        character is represented by ^M.  A double-quotation mark is repre-
        sented by a pair of double quotation marks ("");  a caret (^)  is
        represented by a double-quotation-mark-caret sequence ("^).

        A keyboard mapping file to be used by a CP/M program is specified
        with  the KEYBOARD= parameter in the GENCOM command.   GENCOM as-
        sumes that the file type of a keyboard mapping definition file is
        .KEY, but another extension may be specified explicitly.

        Let's try an example:

             Suppose that we want to  provide  a  cursor  keypad  and
             simple function key  map for WordStar.   We first create
             a file (using either WordStar's nondocument mode or  the
             DOS  EDLIN  utility)  called STAR.KEY with the following
             contents:

                  Up        "^E"      Line up
                  Down      "^X"      Line down
                  Right     "^D"      Character right
                  Left      "^S"      Character left
                  PgUp      "^R"      Page up
                  PgDn      "^C"      Page down
                  Home      "^QR"     Start of document
                  End       "^QC"     End of document
                  Ins       "^V"      Toggle insert mode
                  Del       "^G"      Delete character
                  F1        "^J"      Help
                  F2        "^PS"     Start/Stop underline
                  F3        "^PB"     Start/Stop Bold
                  F4        "^PI"     Start/Stop Italic
                  F5        "^KB"     Start block
                  F6        "^KK"     End block
                  F7        "^KV"     Move block
                  F8        "^KC"     Copy block
                  F9        "^KS"     Save file, continue edit
                  F10       "^KD"     Save file

             Suppose also  that  our  copy  of  WordStar  requires  a
             TeleVideo  925  terminal  for display.   The GENCOM com-
             mand to produce our WordStar WS.COM loader file is:

                  GENCOM WS DIS=TVI925 KEY=STAR



                                     Page 10




        Running 22NICE.COM
        ___________________________________________________

             Note that  a keyboard mapping file should not  have  the
             same  name  as  one of the  pre-defined maps that GENCOM
             supports.  This is why the mapping file just defined was
             not  called  WS.KEY--GENCOM already has a predefined map
             named WS.

        The contents of the keyboard mapping file  are  included  in  the
        .COM  loader generated by GENCOM;  use of a keyboard mapping file
        increases the length of a .COM loader file by 256 bytes.


        Running 22NICE.COM

        22Nice's support routine, called 22NICE.COM,  provides all of the
        emulation  and  CP/M  support facilities needed to execute a CP/M
        program under DOS.  22NICE.COM can be run in two ways:

             1.   As a program that is loaded automatically every time  a
                  CP/M  program  is executed.   When the CP/M program has
                  completed executing, 22NICE.COM is removed from memory.
                  This mode of operation suits most applications.   It is
                  only necessary that the file 22NICE.COM be placed where
                  it  can  be accessed as a normal DOS program.   On most
                  systems,  this will  be  in  the  subdirectory  usually
                  called \DOS.  However, 22NICE.COM may also be placed in
                  the  same  directory  used to store CP/M programs to be
                  run.

             2.   As a "terminate and stay resident"  (or  TSR)  program.
                  In this operating mode, 22NICE.COM is loaded explicitly
                  by entering the DOS command:

                       22NICE

                  22NICE.COM will load and stay resident until explicitly
                  removed with the command:

                       22NICE  OUT

                  This  operating mode is most useful when the CSAVE com-
                  mand is used to save the contents of  the  CP/M  memory
                  area  for  later  inspection.   Like the load on demand
                  mode,  the file 22NICE.COM must be placed where  it  is



                                     Page 11




        User Area Support
        ___________________________________________________

                  accessible  as  a  normal  DOS  command  file.    While
                  22NICE.COM is resident in  memory,  it  occupies  about
                  23K.

        CP/M  program operation in either mode is the same;  to execute a
        CP/M program, simply type its name as if it were a DOS program.


        Support of User Areas

        CP/M implements the capability to segment a file  directory  into
        numbered  "user  areas".   Files created in one user area are not
        visible to another.  DOS departs from CP/M in this area and imple-
        ments subdirectories, or "files of files".

        22Nice provides a simulation of user areas by  mapping  DOS  sub-
        directories  to CP/M user area numbers.   The mapping information
        is supplied by a set of DOS environment variables, defined by the
        DOS SET statement.

        As an example,  let's "map" the DOS subdirectory \MYCODE to  CP/M
        user 2.  To do this, the following DOS statement is used:

                  SET USER2=\MYCODE

        All  accesses by a CP/M program to user area 2 will result in ac-
        cessing the DOS subdirectory \MYCODE on the current disk.   Up to
        31 user areas can be defined, but user area 0 is predefined to be
        the  current (default) directory.   That is,  the DOS environment
        variables USER1 through USER31 may be used.

        The command USERS can  be  used  to  show  what  user  areas  are
        defined.  The syntax of this command is:

                  USERS

        A display of user area-to-DOS subdirectory correspondence will be
        displayed.


        CSAVE - Write the CP/M Area to Disk

        22Nice provides an analog to the CP/M SAVE command, called CSAVE.
        The syntax of CSAVE is identical to its CP/M counterpart, namely:


                                     Page 12




        Miscellaneous Topics
        ____________________________________________________

                  CSAVE  page-count file-name

        Page-count  is the decimal count of 256-byte pages to be saved to
        file-name, beginning with the first byte of the transient program
        area (TPA), located at 100 (hexadecimal).  Up to 255 pages can be
        written in this manner.

        For CSAVE to operate,  22NICE.COM  must  have  been  run  in  the
        terminate-and-stay-resident operating mode.


        Disk Drive Reassignment

        Most CP/M programs can be reconfigured to make use of any combina-
        tion of available disk drive units.   However, a few of the older
        CP/M programs require that drive A:  contain  CP/M  programs  and
        drive  B:  contain data files.   While operation under DOS can be
        performed using actual A: and B: drives, it is often desirable to
        make use of the hard disk exclusively.

        If you're using DOS 3.1 or later,  you can use the DOS SUBST com-
        mand to reassign a drive letter to a hard disk subdirectory.  For
        example, to reassign drive A: to access files in the subdirectory
        \MYDISK on the C: drive, the following command could be used:

                  SUBST  A:=C:\MYDISK

        To make the "real" drive A: accessible again, use:

                  SUBST A: /D

        If  you're  using DOS 2.1,  the DOS ASSIGN command can be used to
        reassign one drive letter to another.  For example, when

                  ASSIGN A=C

        is used,  all accesses to the A: drive will be changed to  access
        the C: drive.  To terminate the drive reassignment, use:

                  ASSIGN






                                     Page 13




        Miscellaneous Topics
        ____________________________________________________

        Locating CP/M Program Files

        It's  been mentioned that GENCOM generates a loader file for CP/M
        programs.   However,  22NICE.COM needs to know where to find  the
        program file (.CPM) itself.   22Nice locates program files in the
        following manner:

             1.   22NICE.COM first searches the current directory for the
                  .CPM program files.

             2.   If  the  environment  variable  CPMPATH   is   defined,
                  22NICE.COM will search the drives and directories named
                  by  that variable.   The syntax for describing a search
                  path with CPMPATH is identical to  that  used  for  DOS
                  PATH;  namely,  a  list  of directories or drive names,
                  separated by semicolons.

             3.   In the absence  of  any  other  indication,  22NICE.COM
                  searches  for  a program according to the PATH environ-
                  ment variable specification.  That is, 22Nice will look
                  for a program in the same places and in the same  order
                  as the DOS command processor.

        As an example, suppose all of our system's CP/M program files are
        located  in the subdirectory \USR\CPM22.   We could indicate this
        to 22Nice by means of the following DOS statement:

                  SET  CPMPATH=\USR\CPM22

        Observe that,  since DOS is  responsible  for  loading  the  .COM
        loader  files,  only the PATH environment variable has any effect
        on the main DOS search path.   In other words,  CPMPATH only  has
        relevance when .CPM program files are involved.


        Interrupts and 22Nice

        22NICE.COM  uses two interrupts to communicate between it and the
        CP/M program being executed.  Under normal circumstances,  22Nice
        will automatically select a pair of unused interrupts.   However,
        if the message:

        No Interrupts--Consult Manual and specify interrupts explicitly



                                     Page 14




        Miscellaneous Topics
        ____________________________________________________

        is displayed when 22NICE.COM is loaded,  it will be necessary  to
        specify a pair of interrupts by means of the environment variable
        22NICE.    This  situation  usually  occurs because of small dif-
        ferences in BIOS ROM initialization between makers of PC systems.
        Usually,  interrupt numbers in the range of 128 to 159 are avail-
        able for assignment.   Select two numbers from this range and ex-
        ecute the following DOS statement:

                  SET 22NICE=n1  n2

        Where n1 and n2 are the selected interrupt numbers.    If,  after
        selecting an interrupt set, 22Nice operates without affecting the
        normal  DOS operation of your system,  a valid interrupt pair has
        been selected.


        Setting GENCOM Defaults

        Default options have been selected for the  GENCOM  utility  that
        reflect  what  Sydex  believes will be adequate for most CP/M ap-
        plications.   However,  in some cases,  it will be  desirable  to
        change the defaults without explicitly specifying them every time
        GENCOM is run.

        Default parameters can be specified by setting the GENCOM DOS en-
        vironment variable to the desired values.  Since the DOS SET com-
        mand  does not allow the equals sign (=) to be included within an
        environment string, the semicolon (;) can be used in its place.

        Thus, to set GENCOM defaults to generate loader files to make use
        of the V20 processor chip,  a Televideo display,  and a  WordStar
        keyboard, the following DOS statement is used:

             SET GENCOM=PRO;V20  DIS;TVI  KEY;WS

        GENCOM  defaults  set  in  this way may be overridden at any time
        simply by specifying new values explicitly when executing GENCOM.
        For example,  to use the values defined above,  but  to  use  Z80
        emulation, the following GENCOM statement could be used:

             GENCOM  filename PRO=Z80





                                     Page 15




        Miscellaneous Topics
        ____________________________________________________

        Use Of CP/M SUBMIT And XSUB

        If  you  have  "batch" files which operate with CP/M 2.2's SUBMIT
        facility,  you'll need to modify them to  use  DOS's  batch  file
        capability.  Usually this will entail no more than the following:

             1.   Changing  the  file  name  extension from .SUB to .BAT.
                  This is done with the DOS RENAME command.

             2.   Editing  the  now-.BAT  file,  changing  all  parameter
                  references from $1, $2, etc.  to %1, %2 and so on.

             3.   Instead  of  using  SUBMIT filename to invoke the file,
                  simply use filename to do the same.

        A special problem arises when XSUB is used in a batch file.   DOS
        has no direct analogue of the XSUB function,  but it may be simu-
        lated by means of input file redirection.  Consider the following
        sample batch file:

                  XSUB
                  SAMPLE  $1
                  line 1 for SAMPLE
                  line 2 for SAMPLE
                  ^Z

        This file could be rearranged to yield  the  same  results  under
        DOS:

                  echo line 1 for SAMPLE >x
                  echo line 2 for SAMPLE >>x
                  SAMPLE  %1  <x
                  DEL  X

        Of course this is only one possibility;  you may wish to make use
        of the pipe facility of DOS,  if the input to your program  comes
        from another program.


        Accessing I/O Ports

        22Nice  does not support access to 8-bit I/O port numbers via the
        8080 IN and OUT instructions.  This is done for the protection of
        the PC's hardware, as most of the first 256 I/O port addresses on


                                     Page 16




        Miscellaneous Topics
        ____________________________________________________

        the PC relate to fundamental PC hardware operation.  Occasionally
        it may be necessary to access a PC I/O port.  This can be done by
        means of the 8080 RST 3 instructions.

        To read a byte from an I/O port,  code  the  following  (in  8080
        code):

                  LXI  D,port number
                  RST  3

        The  contents  of  the I/O port will be returned in the simulated
        8080's A register.

        To write a byte to an I/O port, code the following:

                  LXI  D,port number
                  RST  4

        The contents of the simulated 8080 A register will be written  to
        the specified port.


        Accessing PC Memory

        During  CP/M  emulation,  a program's memory access is limited to
        the 64K addressing range of the 8080.  Should it become necessary
        to inspect the contents of a  memory  location  outside  of  this
        range, the following RST 5 call can be used:

                  LXI  D,segment
                  LXI  H,offset
                  RST  5

        The  contents of the memory location at the specified segment and
        offset will be returned in the simulated 8080 A register.


        IOBYTE Support

        The CP/M 2.2 IOBYTE mappings are supported by 22Nice for the con-
        sole, printer, punch and reader as described in the CP/M 2.2 Sys-
        tem Alteration Guide.   All other mappings will result in a  null
        device access;  i.e.,  data output will be discarded,  input will
        result in an end-of-file,  and input status will always  be  data
        unavailable.

                                     Page 17




        A Sample Installation
        ____________________________________________________


        The  CP/M  punch  and  reader  devices  are  taken  to be the DOS
        auxiliary device.  Usually, this is a serial communications port,
        or in absence of a serial port, the null device.


        Absolute Disk Read and Write

        22Nice contains an interface to  disk  read  and  write  routines
        present  in  DOS.    When  a  CP/M  program  requests a DPB (Disk
        Parameter Block) from 22Nice (BDOS function 31),  one is supplied
        which  defines  a  36-sector track with the allocation block size
        and number of tracks varying according to  the  capacity  of  the
        disk  being  serviced.    Note  that DOS can describe drives much
        smaller (less than 1K) and much  larger  (32,000  K)  than  CP/M;
        22Nice  attempts  to  build  a DPB which best defines the disk in
        question.

        Utilities that directly write to a disk  without  making  use  of
        BDOS calls should be avoided,  as the DOS structure for a disk is
        quite different from that assumed by CP/M.

        22Nice attempts to emulate the disk interface of CP/M.   However,
        because of differences in implementation,  disk sizes reported by
        STAT and similar programs should be considered to  be  approxima-
        tions only.


        Maximum Program Size

        In  the  interest of compatibility,  22Nice implements a slightly
        larger than "stock" 64K CP/M memory layout.   About 59K of memory
        can  be  used for program execution.   The remainder of memory is
        used to contain CP/M BIOS support routines and file tables.


        A Sample 22Nice Installation

        We present here a sample installation  of  the  CP/M  version  of
        WordStar  Corporation's WordStar program on a 80286 PC AT "clone"
        with a hard disk.

        The following steps are involved:



                                     Page 18




        Glossary
        ___________________________________________________

             1.   Make a subdirectory on the hard disk (drive  C;),  call
                  it \OSBORNE:

                       C> MKDIR  C:\OSBORNE

             2.   Copy  22NICE.COM and GENCOM.COM into C:\OSBORNE:

                       C> COPY  A:22NICE.COM  C:\OSBORNE
                       C> COPY  A:GENCOM.COM  C:\OSBORNE

             3.   Using  Sydex's  22Disk program,  copy the files WS.COM,
                  WSMSGS.COM,  WSOVLY1.COM from the Osborne program  dis-
                  kette to C:\OSBORNE.   22Disk will automatically change
                  the .COM file types to .CPM:

                       C> CTOD  /OSB1  A:*.COM  C:\OSBORNE

             4.   Run GENCOM on WS.CPM to generate a loader for 22Nice:

                       C> GENCOM  WS  DIS=OSB  KEY=WS

             5.   Move to the \OSBORNE subdirectory and run WordStar:

                       C>  CD \OSBORNE
                       C>  WS


        A Short Glossary of CP/M Terms

        BDOS Under CP/M the part of the operating  system  which  manages
             file and console operations at a hardware-independent level.
             The  BDOS  receives requests from an application program and
             translates them into low-level operations that the BIOS  can
             understand and act on.

        BIOS  Under both CP/M and DOS,  an acronym for Basic Input/Output
             Subsystem.  This is the portion of the operating system that
             deals with the lowest-level interface to peripheral  devices
             such as disks and displays.

        CCP  Under CP/M the Console Command Processor.   This is the part
             of the operating system which interprets commands  from  the
             console  and  acts  upon them.   This interface is only used
             when CP/M is at a system-level command  prompt  (e.g.,  A>);
             during execution of application programs, it is not active.

                                     Page 19




        Glossary
        ___________________________________________________


        DDT  is  the  name  for the CP/M debugging utility and stands for
             Dynamic Debugging Tool.  The acronym's similarity to a well-
             known insecticide is not coincidental.

        FCB stands for File Control Block.  In both DOS and CP/M, this is
             a small memory-resident table used to access a file.  When a
             file is opened or created,  CP/M fills in certain fields  in
             the FCB;  the user program fills in others.  In DOS, the FCB
             is considered to be obsolescent and has been  superseded  by
             the  I/O  handle facility,  which more closely resembles the
             approach taken by Unix.   22Nice translates CP/M  FCB  func-
             tions to their corresponding DOS handle functions.

        IOBYTE  is  a  name  for a memory location which determines where
             most basic console and printer I/O will be directed.   It is
             possible  to  redirect  console output to the printer by ap-
             propriately setting this location, for example.

        PIP is the name of CP/M's Peripheral Interchange Program.  It cor-
             responds roughly to DOS COPY.

        STAT is a CP/M command used to provide  several  different  serv-
             ices.  Generally, STAT is used to provide information regard-
             ing file lengths and the amount of storage available on each
             disk.

        SUBMIT is the CP/M batch file processor.   Unlike DOS,  which im-
             plicitly executes batch files,  SUBMIT  must  be  explicitly
             called to begin batch file processing.

        TPA stands for Transient Program Area.  In CP/M, this the area of
             memory that is used to run programs.

        USER  AREA  or  NUMBER  is a primitive CP/M facility to provide a
             logical division between files in a disk's directory.    DOS
             uses  the subdirectory facility to achieve the same end in a
             more  general  fashion.     In  essence,   a  file  name  is
             "qualified" by a user number byte to distinguish it.   Note,
             however, that all files in CP/M are still kept in one direc-
             tory.

        V20 A plug-in replacement for  the  8088  central  processor  in-
             tegrated  circuit  found  in most XT-type PC's.   The V20 is
             made by Nippon Electric Corporation (NEC) of Japan and incor-

                                     Page 20




        Glossary
        ___________________________________________________

             porates not only the 8088 instruction set,  but also the in-
             struction  set  of  the  8080 "8 bit" processor used in many
             CP/M computers.  The advantage that this hardware implementa-
             tion presents over software emulation is one of much greater
             speed.

        V30 A plug-in replacement for the 8086 CPU,  otherwise  identical
             in capability to the V20, above.

        XSUB  is a facility within SUBMIT processing that allows not only
             CP/M commands, but program data to be diverted from the con-
             sole to a disk file.   There is no  precisely  corresponding
             facility in DOS.


        What's New in Version 1.3

        Version 1.3 represents a major revision of 22Nice.  For a list of
        differences, consult the section titled If You're Upgrading....



























                                     Page 21




        The Sydex Product Line
        ____________________________________________________


        The Sydex Product Line

        AnaDisk  -- The compleat diskette utility.   Nothing like it any-
        where else;  scan,  edit,  repair and copy just about any kind of
        diskette.  $25.00 ($150.00 site)  registration fee.

        Con>Format  --  Concurrent "background" diskette formatter.  Fea-
        tures "pop-up" operation and "hot key" activation.  You've got to
        see it to believe.   Supports all  current  DOS  formats.  $15.00
        ($50.00 site) registration fee.

        22Disk  --  Transfer  files,  format,  examine and erase files on
        "foreign" CP/M diskettes on your PC.  Includes tips on supporting
        8" and 5.25" single-density diskettes.   Contains definitions for
        over  200 different formats.   $25.00 ($100.00 site) registration
        fee.

        TeleDisk -- Turn any diskette into a  compressed  data  file  and
        vice-versa.   Allows you to send and receive entire diskettes via
        modem.  Even works with some "copy-protected" diskettes.   $20.00
        ($150.00 site) registration fee.

        COPYQM -- Mass diskette duplicator.  Format, copy and verify mul-
        tiple  diskettes from a single master.   Implements "no keyboard"
        interaction mode and drive "round robin" servicing.  Supports all
        standard DOS formats.  $15.00 ($50.00 site) registration fee.

        FORMATQM -- Mass diskette formatter - format a box  of  diskettes
        at  a single sitting.   Implements "no keyboard" interaction mode
        and drive "round robin" servicing.  Supports all standard DOS for-
        mats.  $10.00 ($40.00 site) registration fee.


        Information on any of these products can be obtained  from  Sydex
        by calling or writing us at:

                                      Sydex
                                  P.O. Box 5700
                                Eugene, OR  97405
                             Voice: (503)  683-6033
                             FAX:   (503)  683-1622
                             Data:  (503)  683-1385



                                     Page 22

```
{% endraw %}

## HP150.DOC

{% raw %}
```





     Sydex


























                         HP150.SYS and HP150II.SYS



      Two Device Drivers for Hewlett-Packard HP 150 MS-DOS Diskettes














                                                  Sydex
                                                  P.O. Box 5700
                                                  Eugene, OR  97405
                                                  Voice:  (503)  683-6033
                                                  FAX:    (503)  683-1622







                         HP150.SYS and HP150II.SYS

      Two Device Drivers for Hewlett-Packard HP 150 MS-DOS Diskettes


                           Copyright 1990, Sydex
                            All Rights Reserved

                          Version 2.0 June, 1990


                                   Sydex
                               P.O. Box 5700
                             Eugene, OR  97405
                          Voice:  (503)  683-6033
                          FAX:    (503)  683-1622

                                  NOTICE

     THIS IS NOT FREE SOFTWARE!   If you paid a "public domain" vendor
     for  this  program,  you  paid  for  the  service  of copying the
     program, and not for the program itself.  Rest assured that noth-
     ing ever gets to the originators of  this  product  from  such  a
     sale.   You may evaluate this product, but if you make use of it,
     you must register your copy.

     We offer several inducements to you for registering.    First  of
     all,  you receive the most up-to-date copy of the program that we
     have without the advertising copy embedded.  You also receive sup-
     port for HP150.SYS and HP150II.SYS--which can be  quite  valuable
     at times.   And finally,  we include a few utilities not included
     in the evaluation package.  Make no mistake  however--we  do  not
     "cripple"  our evaluation software--our sample programs are fully
     functional and complete.


                         REGISTRATION INFORMATION

     The non-commercial single-user registration fee for HP150.SYS and
     HP150II.SYS is $20.00 US.   The commercial and  multisystem  site
     fee is $150.00 for HP150.SYS and HP150II.SYS.

     Send a check or company P.O. for the appropriate amount to:

                                   SYDEX
                               P.O. Box 5700
                             Eugene, OR  97405
                          Voice:  (503)  683-6033
                          FAX:    (503)  683-1622
                          Data:   (503)  683-1385
                        Major Credit Cards Accepted






     Please  indicate  what product you are ordering and if you have a
     requirement for 3.5" media.   We normally ship  5.25"  360K  dis-
     kettes, but we will furnish 3.5" 720K media upon request.  Orders
     placed  outside  of  the U.S.  and Canada should include an addi-
     tional $5.00 for airmail.  We can accept U.S. funds only, please.


                            DISTRIBUTION NOTICE

     This is "user-supported"  software.  You  are  hereby  granted  a
     license  by Sydex to distribute this evaluation copy of HP150.SYS
     and HP150II.SYS and its documentation,  subject to the  following
     conditions:

     1.   HP150.SYS  and HP150II.SYS may be distributed freely without
          charge in evaluation form only.

     2.   HP150.SYS and HP150II.SYS may not be sold,  licensed,  or  a
          fee  charged for their use.   If a fee is charged in connec-
          tion with HP150.SYS and/or HP150II.SYS,  it must  cover  the
          cost of copying or dissemination only.  Such charges must be
          clearly identified as such by the originating party.   Under
          no circumstances may the purchaser be given  the  impression
          that he is buying HP150.SYS or HP150II.SYS themselves.

     3.   HP150.SYS  and  HP150II.SYS  must  be  presented as complete
          units, including this documentation.  This documentation may
          be not amended or altered in any way.

     4.   In granting you the right to distribute the evaluation  form
          of HP150.SYS and HP150II.SYS, Sydex does not acknowledge you
          as the owner of HP150.SYS or HP150II.SYS in any form.


          Any   other   use   or  distribution  of  HP150.SYS  and
          HP150II.SYS is expressly forbidden without  the  written
          consent of SYDEX.

     ________________________________________________________________
     "HP  150" and "HP" are trademarks of Hewlett-Packard Corporation.
     "IBM", "PC DOS" and "Personal System/2" are trademarks of Interna-
     tional Business Machines Corporation.  "MS-DOS" is a trademark of
     Microsoft Corporation.
















     What are HP150.SYS and HP150II.SYS?

     HP150.SYS and HP150II.SYS are two device  drivers  which  support
     reading  and  writing  of  MS-DOS  diskettes from Hewlett-Packard
     Corporation's HP 150 series computers on PC XT- or  AT-compatible
     machines.  Under DOS 3.2 or later, the utilities FORMAT, DISKCOPY
     and DISKCOMP are supported,  as well as normal DOS read and write
     operations.  HP150.SYS is used for single-sided HP 150 diskettes;
     HP150II.SYS is used for the double-sided diskettes of the  Series
     II HP 150.

     To  use  HP150.SYS or HP150II.SYS,  your computer must be PC AT-,
     XT- or IBM Personal System/2 compatible.   Computers such as  the
     Tandy  2000 or the Zenith Z-150 are not suitable because of their
     relative  incompatibility.    Further,   your  computer  must  be
     equipped  with a 3.5" 720K or 1.44M diskette drive.   To read and
     write HP 150 5.25" diskettes, your computer must be equipped with
     high-density 1.2 Megabyte drive or a 5.25" "quad" density  drive,
     such as the Teac 55F.  The diskette adapter on your computer must
     match  the  diskette  drive  characteristics.   That is,  a high-
     density drive must be used with a  high-density  adapter.    Many
     manufacturers, such as Western Digital, produce high-density dis-
     kette adapters for XT-style computers, and these may be used suc-
     cessfully with HP150.SYS and HP150II.SYS.   Currently, we support
     only the first (or primary) diskette adapter in a system.

     And finally,  your computer needs to be running PC-DOS or  MS-DOS
     Version  2.0 or later.   DOS 3.2 or later is preferable,  but not
     required.   Version 2 DOS users may find that some HP150.SYS  and
     HP150II.SYS functions, such as formatting, are not supported.


     Installing and Using HP150.SYS and HP150II.SYS

     Installation  of  HP150.SYS  and  HP150II.SYS is straightforward.
     First, find the file CONFIG.SYS in the root directory of the disk
     that your computer boots (loads DOS) from.   It may  be  possible
     that  you  do not have a CONFIG.SYS file,  in which case the next
     few steps will create one.    If  you  are  unfamiliar  with  the
     CONFIG.SYS  file,  take time out now and read the section in your
     DOS manual dealing with it, and in particular, the DEVICE= state-
     ment.

     You'll need to add a line to CONFIG.SYS of the following  general
     form:

               DEVICE=HP150.SYS /D:unit  /F:format

     Or:

               DEVICE=HP150II.SYS /D:unit  /F:format

                                  Page 1





     This  can  be  done with the program EDLIN which is supplied with
     DOS, or with a text editor of your choosing.   If you use a word-
     processing editor, make sure that you indicate that CONFIG.SYS is
     a nondocument file.   If you didn't find a CONFIG.SYS,  the above
     line will be the only line in the file which is created.

     The value of unit can range from 0 to 3 and represents the physi-
     cal diskette unit to be used to read and write the  HP  150  dis-
     kettes.    If  this  unit is normally called A: on your computer,
     then the value of unit is 0;  if B:,  then unit is 1.    External
     drives are generally units 2 and 3.

     The  value  of  format depends on the type of diskette drive that
     you're using.  If it's a high-density 1.2 megabyte unit, then the
     value of format is 1.   If you're using a 3.5" drive or a  "quad"
     density drive, such as the Teac 55F, then format is 2.

     If /D:unit is omitted in the configuration line,  unit is assumed
     to be 1. If /F:format is omitted, format is assumed to be 1 also.

     The last step is to copy the file HP150.SYS or  HP150II.SYS  into
     the root directory of your system or "boot" drive.   Finally, re-
     boot your computer.   If your computer is configured with a  ver-
     sion of DOS 3, the following message will be displayed:

          HP 150 (or HP 150II) diskette driver, Copyright 1990, Sydex
          All Rights Reserved.

          HP 150 (or HP 150II) DOS diskette unit x is accessible as
          drive y:

     The  letters x and y will take on values which depend on the con-
     figuration of your computer.

     If your computer is configured with a version of DOS 2,  the fol-
     lowing message will be displayed:

          HP 150 (or HP 150II) diskette driver, Copyright 1990, Sydex
          All Rights Reserved.

          HP150 (or HP 150II) DOS diskette unit x installed.

     In this case,  the drive letter which is used to read HP 150 dis-
     kettes will generally be one greater than the last  drive  letter
     in use before you modified CONFIG.SYS.   For example, if drive C:
     was the last drive on your computer,  HP150.SYS  and  HP150II.SYS
     will use drive letter D:.





                                  Page 2




     As an example of the whole process described above,  suppose that
     we wished to add HP150.SYS or  HP150II.SYS  to  a  PC-AT  "clone"
     which  has  one  3.5"  diskette  drive  and  a  hard  disk.   Our
     CONFIG.SYS file on  drive  C:  might  look  like  this  after  we
     modified it using EDLIN:

          FILES = 30
          BUFFERS = 10
          DEVICE = HP150.SYS  /D:0  /F:2     (This line is added)

     If we are adding HP150II.SYS to this system,  our CONFIG.SYS file
     on drive C: might look like this after we modified it  using  ED-
     LIN:

          FILES = 30
          BUFFERS = 10
          DEVICE = HP150II.SYS  /D:0  /F:2   (This line is added)

     We then copy HP150.SYS or HP150II.SYS to drive C:...

          COPY /B A:HP150.SYS  C:\

     Or:

          COPY /B A:HP150II.SYS  C:\

     We  then  press  the  keys  Ctrl,  Alt  and Del simultaneously to
     "reboot" our computer.   After the  rebooting  process  has  com-
     pleted, the following message is displayed:

          HP 150 (or HP 150II) diskette driver, Copyright 1989, Sydex
          All Rights Reserved.

          HP 150 (or HP 150II) DOS diskette unit 0 is accessible as
          drive D:

     We  then find that HP 150 diskettes placed in our A: drive can be
     read and written if we refer to that drive as drive D:.


     FINAL COMMENTS...

     HP150.SYS and HP150II.SYS were written in response  to  inquiries
     from  customers  who had our CP/M diskette transfer package,  but
     who had no way to easily handle the HP 150  DOS  diskettes.    We
     hope  that  this  situation  is now remedied.   If you experience
     problems in getting HP150.SYS or HP150II.SYS to work for you,  or
     if  you have questions about any Sydex product,  please give us a
     call.




                                  Page 3




     Other Sydex Products

     AnaDisk -- The  compleat  diskette  utility.    Nothing  like  it
     anywhere else; scan, edit, repair and copy just about any kind of
     diskette.  $25.00 ($150.00 site)  registration fee.

     Con>Format  --  Concurrent "background" diskette formatter.  Fea-
     tures "pop-up" operation and "hot key" activation.  You've got to
     see it to believe.   Supports all  current  DOS  formats.  $15.00
     ($50.00 site) registration fee.

     22DISK  --  Transfer  files,  format,  examine and erase files on
     "foreign" CP/M diskettes on your PC.  Includes tips on supporting
     8" and 5.25" single-density diskettes.   Contains definitions for
     over  250 different formats.   "Roll your own" option for unusual
     formats.  $25.00 ($100.00 site) registration fee.

     22NICE -- A  CP/M  2.2  emulation  package.    Supports  the  NEC
     V-series  chips  or  performs  emulation by software for both the
     8080 and Z80 processors.   Includes terminal emulation  and  dis-
     kette handling for common CP/M systems.  Includes 22DISK.  $40.00
     ($150.00 site) registration fee.

     TeleDisk  -- Our diskette FAX machine.   Turn any diskette into a
     compressed data file and vice-versa.   Allows  you  to  send  and
     receive entire diskettes via modem.   Even works with some "copy-
     protected" diskettes.  $20.00 ($150.00 site) registration fee.

     COPYQM -- Mass diskette duplicator.  Format, copy and verify mul-
     tiple diskettes from a single master.   Implements "no  keyboard"
     interaction mode and drive "round robin" servicing.  Supports all
     standard  DOS  formats.   Copy even non-DOS diskettes with "blind
     copy" option  in  the  latest  release.    $15.00  ($50.00  site)
     registration fee.

     FORMATQM  --  Mass diskette formatter - format a box of diskettes
     at a single sitting.   Implements "no keyboard" interaction  mode
     and drive "round robin" servicing.  Supports all standard DOS for-
     mats.  $10.00 ($40.00 site) registration fee.

     Information on any of these products can be obtained  from  Sydex
     by  calling or writing us at:

                                   Sydex
                               P.O. Box 5700
                             Eugene, OR  97405
                          Voice:  (503)  683-6033
                          FAX:    (503)  683-1622
                          Data:   (503)  683-1385



                                  Page 4
```
{% endraw %}

## RAINDOS.DOC

{% raw %}
```





           Sydex
















                                        RainDOS




                  A Device Driver for DEC Rainbow tm  MS-DOS Diskettes










































                                        RainDOS


                   A Device Driver for DEC Rainbow MS-DOS Diskettes


                              Copyright 1989, 1990, Sydex
                                  All Rights Reserved

                               Version 1.1 January, 1990

                                        Sydex
                                    P.O. Box 5700
                                  Eugene, OR  97405
                               Voice:  (503)  683-6033
                               FAX:    (503)  683-1622
                               Data:   (503)  683-1385




                                         NOTICE

                THIS IS NOT FREE  SOFTWARE!    If  you  paid  a  "public
                domain" vendor for this program,  you paid for the serv-
                ice of copying the program,  and not for the program it-
                self.    Rest  assured  that  nothing  ever  gets to the
                originators of this product from such a sale.   You  may
                evaluate  this product,  but if you make use of it,  you
                must register your copy.

                We offer several inducements  to  you  for  registering.
                First  of  all,  you receive the most up-to-date copy of
                the program that we have--and we do update  the  product
                on  a  regular  basis.    You  also  receive support for
                RainDOS--which can be quite  valuable  at  times.    And
                finally,  we include a few utilities not included in the
                evaluation package.  Make no mistake however--we do  not
                "cripple"  our  evaluation software--our sample programs
                are fully functional and complete.



                                REGISTRATION INFORMATION

                The  non-commercial  single-user  registration  fee  for
                RainDOS  is  $15.00 US.   The commercial and multisystem
                site fee is $50.00.

                Send a check or company P.O.  for the appropriate amount
                to:








                                         SYDEX
                                    P.O. Box 5700
                                  Eugene, OR  97405

                              Major Credit Cards Accepted

                Please indicate what product you are ordering and if you
                have  a  requirement  for 3.5" media.   We normally ship
                5.25" 360K diskettes,  but we  will  furnish  3.5"  720K
                media  upon request.   Orders placed outside of the U.S.
                and Canada should include an additional $5.00  for  air-
                mail.  We can accept U.S. funds only, please.


                                  DISTRIBUTION NOTICE

                This  is  "user-supported"  software.   You  are  hereby
                granted a license by Sydex to distribute this evaluation
                copy of RainDOS and its documentation,  subject  to  the
                following conditions:

                1.   RainDOS may be distributed freely without charge in
                     evaluation form only.

                2.   RainDOS may not be sold, licensed, or a fee charged
                     for  its  use.    If a fee is charged in connection
                     with RainDOS,  it must cover the cost of copying or
                     dissemination  only.   Such charges must be clearly
                     identified as such by the originating party.  Under
                     no circumstances may the purchaser be given the im-
                     pression that he is buying RainDOS itself.

                3.   RainDOS must be presented as a complete  unit,  in-
                     cluding this documentation.   RainDOS's  documenta-
                     tion may be not amended or altered in any way.

                4.   In granting you the right to distribute the evalua-
                     tion form of RainDOS,  Sydex does  not  acknowledge
                     you as the owner of RainDOS in any form.


                Any  other  use  or distribution of RainDOS is expressly
                forbidden without the written consent of SYDEX.

           ________________________________________________________________
           "DEC" and "Rainbow" are trademarks of Digital Equipment  Corpora-
           tion.   "IBM", "PC DOS" and "Personal System/2" are trademarks of
           International Business  Machines  Corporation.    "MS-DOS"  is  a
           trademark of Microsoft Corporation.













           What is RainDOS?

           RainDOS  is a device driver which supports reading and writing of
           MS-DOS diskettes from Digital Equipment  Corporation's  Rainbow tm
           series computers on PC XT- or AT-compatible machines.   Under DOS
           3.2,  the utilities FORMAT,  DISKCOPY and DISKCOMP are supported,
           as well as normal DOS read and write operations.

           To use RainDOS, your computer must be PC AT-, XT- or IBM Personal
           System/2  compatible.    Computers  such as the Tandy 2000 or the
           Zenith Z-150 are not suitable because of  their  relative  incom-
           patibility.   Further, your computer must be equipped with either
           a 5.25" high-density  (1.2  Megabyte)  or  5.25"  "quad"  density
           drive,  such  as the Teac 55F.  The diskette adapter on your com-
           puter must match the diskette drive characteristics.  That is,  a
           high-density  drive  must  be  used  with a high-density adapter.
           Many manufacturers, such as Western Digital, produce high-density
           diskette adapters for XT-style computers,  and these may be  used
           successfully with RainDOS.   Currently, we support only the first
           (or primary) diskette adapter in a system.

           And finally,  your computer needs to be running PC-DOS or  MS-DOS
           Version  2.0 or later.   DOS 3.2 or later is preferable,  but not
           required.  Version 2 DOS users may find that some  RainDOS  func-
           tions, such as formatting, are not supported.


           Installing and Using RainDOS

           Installation of RainDOS is straightforward.  First, find the file
           CONFIG.SYS in the root directory of the disk that  your  computer
           boots (loads DOS) from.   It may be possible that you do not have
           a CONFIG.SYS file,  in which case the next few steps will  create
           one.   If you are unfamiliar with the CONFIG.SYS file,  take time
           out now and read the section in your DOS manual dealing with  it,
           and in particular, the DEVICE= statement.

           You'll  need to add a line to CONFIG.SYS of the following general
           form:

                     DEVICE=RAINDOS.SYS  /D:unit  /F:format

           This can be done with the program EDLIN which  is  supplied  with
           DOS,  or with a text editor of your choosing.  If you use a word-
           processing editor, make sure that you indicate that CONFIG.SYS is
           a nondocument file.   If you didn't find a CONFIG.SYS,  the above
           line will be the only line in the file which is created.

           The value of unit can range from 0 to 3 and represents the physi-
           cal  diskette  unit to be used to read and write the Rainbow dis-
           kettes.   If this unit is normally called A:  on  your  computer,
           then  the value of unit is 0;  if B:,  then unit is 1.   External
           drives are generally units 2 and 3.



                                        Page 1




           The value of format depends on the type of  diskette  drive  that
           you're using.  If it's a high-density 1.2 megabyte unit, then the
           value  of  format is 1.   If you're using a "quad" density drive,
           such as the Teac 55F, then format is 2.

           If /D:unit is omitted in the configuration line,  unit is assumed
           to be 1. If /F:format is omitted, format is assumed to be 1 also.

           The  last  step  is  to  copy  the file RAINDOS.SYS into the root
           directory of your system or "boot" drive.  Finally,  re-boot your
           computer.   If your computer is configured with a revision of DOS
           3, the following message will be displayed:

                Rainbow diskette driver, Copyright 1990, Sydex
                All Rights Reserved.

                Rainbow DOS diskette unit x is accessible as drive y:

           The letters x and y will take on values which depend on the  con-
           figuration of your computer.

           If your computer is configured with a revision of DOS 2, the fol-
           lowing message will be displayed:

                Rainbow diskette driver, Copyright 1990, Sydex
                All Rights Reserved.

                Rainbow DOS diskette unit x installed.

           In this case, the drive letter which is used to read Rainbow dis-
           kettes  will  generally be one greater than the last drive letter
           in use before you modified CONFIG.SYS.  For example,  if drive C:
           was the last drive on your computer,  RainDOS will use drive let-
           ter D:.

           As an example of the whole process described above,  suppose that
           we  wished  to add RainDOS to a PC-AT "clone" which has one high-
           density diskette drive and a hard disk.   Our CONFIG.SYS file  on
           drive C: might look like this after we modified it using EDLIN:

                FILES = 30
                BUFFERS = 10
                DEVICE = RAINDOS.SYS  /D:0  /F:1    (This line is added)

           We then copy RAINDOS.SYS to drive C:...

                COPY A:RAINDOS.SYS  C:\

           We  then  press  the  keys  Ctrl,  Alt  and Del simultaneously to
           "reboot" our computer.   After the  rebooting  process  has  com-
           pleted, the following message is displayed:

                Rainbow diskette driver, Copyright 1989, Sydex
                All Rights Reserved.

                Rainbow DOS diskette unit 0 is accessible as drive D:

                                        Page 2





           We then find that Rainbow diskettes placed in our A: drive can be
           read and written if we refer to that drive as drive D:.


           FINAL COMMENTS...

           RainDOS  was  written in response to inquiries from customers who
           had our CP/M diskette transfer package,  but who had  no  way  to
           easily  handle  the  Rainbow  DOS  diskettes.   We hope that this
           situation is now remedied.  If you experience problems in getting
           RainDOS to work for you, or if you have questions about any Sydex
           product, please give us a call.












































                                        Page 3




           The Sydex Product Line

                AnaDisk -- The compleat diskette utility.   Nothing like  it
                anywhere else;  scan,  edit,  repair and copy just about any
                kind of diskette.  $25.00 ($150.00 site)  registration fee.

                Con>Format -- Concurrent  "background"  diskette  formatter.
                Features   "pop-up"  operation  and  "hot  key"  activation.
                You've got to see it to believe.   Supports all current  DOS
                formats. $15.00 ($50.00 site) registration fee.

                22DISK -- Transfer files, format, examine and erase files on
                "foreign" CP/M diskettes on your PC.   Includes tips on sup-
                porting 8" and 5.25"  single-density  diskettes.    Contains
                definitions for over 200 different formats.  $25.00 ($100.00
                site) registration fee.

                22NICE  --  A CP/M 2.2 emulation package.   Supports the NEC
                V-series chips or performs emulation by  software  for  both
                the  8080  and Z80 processors.   Includes terminal emulation
                and diskette handling for common  CP/M  systems.    Includes
                22DISK.  $40.00 ($150.00 site) registration fee.

                TeleDisk  --  Turn  any diskette into a compressed data file
                and vice-versa.   Allows you to send and receive entire dis-
                kettes  via  modem.    Even works with some "copy-protected"
                diskettes.  $20.00 ($150.00 site) registration fee.

                COPYQM -- Mass diskette duplicator.  Format, copy and verify
                multiple diskettes from a single  master.    Implements  "no
                keyboard"  interaction  mode and drive "round robin" servic-
                ing.   Supports all standard DOS formats.    $15.00  ($50.00
                site) registration fee.

                FORMATQM  --  Mass diskette formatter - format a box of dis-
                kettes at a single sitting.  Implements "no keyboard" inter-
                action mode and drive "round robin" servicing.  Supports all
                standard DOS formats.   $10.00  ($40.00  site)  registration
                fee.

           Information  on  any of these products can be obtained from Sydex
           by calling or writing us at:

                                        Sydex
                                    P.O. Box 5700
                                  Eugene, OR  97405
                               Voice:  (503)  683-6033
                               FAX:    (503)  683-1622
                               Data:   (503)  683-1385








                                        Page 4
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3548

     Volume in drive A has no label
     Directory of A:\

    READ     ME       7209   9-10-92  12:04p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    22DSK139 ZIP    194040   9-03-92  12:24p
    22NCE132 ZIP     50625   7-17-92   2:12p
    RAIND112 ZIP     14697   7-17-92   2:14p
    HP15S201 ZIP     17779   7-17-92   2:14p
    GO       BAT        33   3-28-93   5:09p
    SHOW     EXE      2040   9-12-88  10:48a
            8 file(s)     309951 bytes
                            8192 bytes free
