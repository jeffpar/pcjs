---
layout: page
title: "PC-SIG Diskette Library (Disk #3300)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3300/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3300"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```
     ██████████████████████████████████████████████████████████████████████
     █                                                                    █
     █                SUPER MACRO LIBRARY For LOTUS(R) 1-2-3              █
     █                                                                    █
     █  (C)Copyright K.I.T.A.L. Software 1989-1992. All rights reserved.  █
     █   (C)Copyright by Haruyasu Yoshizaki, 1991. All Rights Reserved.   █
     █                                                                    █
     █                        K.I.T.A.L. Software                         █
     █                  17/1 Arbel Street, P.O. Box 748                   █
     █                       Karmiel 20100 ISRAEL                         █
     █                          (972)-4-987255                            █
     █                                                                    █
     █                                                                    █
     █                                                                    █
     █                       SHAREWARE Version 3.2                        █
     █                                                                    █
     █                                                                    █
     █                 Registration fee: $50 in US funds                  █
     █                                                                    █
     █                                                                    █
     █              Developed and Written by Israel Kehaty                █
     █                                                                    █
     ██████████████████████████████████████████████████████████████████████

                     ┌─────────────────────────────────┐
                     │                                 │
                     │  K.I.T.A.L's Licence Statement  │
                     │        SHAREWARE VERSION        │
                     │                                 │
                     └─────────────────────────────────┘
 
  K.I.T.A.L. Software grants you without charge the right to reproduce and
  distribute copies of the "SHAREWARE" version of the SUPER MACRO LIBRARY
  for LOTUS 1-2-3 and software package on the express conditions:
 
  1. NO fee other than a disk and handling charge (of up to $10 per disk)
     may be charged. The rights to receive any such financial or other
     benefits re exclusively reserved by K.I.T.A.L. Software i.e. Tsipora
     and Israel Kehaty.
  2. NO change will be made to this license agreement or the copyright
     notice.
  3. No change will be made to the installation and disk files, the
     diskettes must be distribured as is, except an introduction file/s
     that can be added by shareware distributors.
 
                    ┌─────────────────────────────────┐
                    │ Note for shareware distributors │
                    └─────────────────────────────────┘
 
  This package comes on three 360K 5.25" floppy diskettes, a shareware
  distributor is allowed to create workable/intallable packages for other
  types of disks:
 
  1. To prepare a 1.2M 5.25" or a 1.44M 3.5" version, copy the contents of
     the three diskettes to the 1.2M floppy diskette or the 1.44M diskette.
 
  2. To prepare a 720K 3.5" version you need two floppy diskettes, copy the
     contents of the first two 360K diskettes (Disk 1 and Disk 2) to the
     first 720K 3.5" diskette and mark it as Disk 1, then copy the third
     360K floppy diskette (Disk 3) to the second 720K 3.5" floppy diskette
     and mark it as Disk 2.
 
  The installation files HARD.BAT and FLOPPY.BAT will install the package
  correctly if the packages are prepared this way.
 
  This software package is a Copyrighted software and "IS NOT" a PUBLIC
  DOMAIN software, but a SHAREWARE software package. Which means that you
  can copy and distribute this software freely for the sole purpose of
  evaluation and testing before purchasing. To use this software legaly you
  need to be registered with us.
 
  If you like this software and you USE it you are asked to be registered
  with us.

  Support from users enables us to develop additional features and future
  versions of The SUPER MACRO LIBRARY.
 
  Your payment of $50.00 would be greatly appreciated.
 
   ┌───────────────────────────────────────────────────────────────────┐
   │Please, help us to help you and other users to keep and reserve the│
   │SHAREWARE idea.                                                    │
   └───────────────────────────────────────────────────────────────────┘
 
  By sending in your payment, together with your Company name, mailing
  address, telephone number and Version number; your copy of this software
  will be registered with us, thereby enabling you to receive:
 
  (1) Technical support
  (2) Announcements of possible later releases
 
  NOTE:
 
  In the future we are planning to include a HyperText version of a macro
  programming book that will include a detailed explanation of all the
  macros in this package. The book will analyse and explain every macro
  and every technique and command that was used in this macro library. We
  are now in the process of writing the book but it may take some time.
 
  Before August 1993 your payment of $50 should be sent to:
 
                            K.I.T.A.L. Software
                             612 NW Linden Ave.
                            Corvallis, OR 97330
                         Telephone (503)-758-6632
 
  After July 1993 your payment of $50 should be send to:
 
                            K.I.T.A.L. Software
                               P. O. Box 748
                               Karmiel 20100
                                  ISRAEL
                          Telephone 972-4-987255
 
  Please feel free to add comments and improvements that you would like to
  see included in future versions.

 
 
 
 
 
 
 
 
 
 
 
 
 
  ┌──────────────────────────────────────────────────────────────────────────┐
  │  If the concept of Lotus MACRO is new to you, see the short basic macro  │
  │  tutor after the installation instructions                               │
  └──────────────────────────────────────────────────────────────────────────┘
 
 
 
 
 
 
 
 
 
 

 
  GENERAL
  ~~~~~~~
  This version of the SUPER MACRO LIBRARY for LOTUS 1-2-3 supports releases
  2/2.01/2.2/2.3/2.4/3.0/3.1/3.1+ and 123W for Windows 3/3.1 . However because
  Lotus 123W for Windows 3/3.1 do not offer a replacement for the classic
  custom menus commands ({MENUBRANCH} and {MENUCALL} and a mouse support
  inside a macro, this macro library uses the CLASSIC MODE which is
  supported by Lotus 123W for windows. The Macro Library may come in the
  following types of disks:
 
  - Three 360K 5.25 disks
  - Two 720K 3.5" disks
  - One 1.2M 5.25" disk
  - One 1.44M 3.5" disk
 
  Some files in the diskettes are compressed and packed files which expand
  during installation. The files were compressed using the PUBLIC DOMAIN LHA
  Versions 2.05/2.10/2.12 (c)Yoshi compression utility.
 
  To install and use this package you need to have an IBM PC XT/AT/PS2/386/486
  compatible machine and at least two floppy drives that support the
  diskettes of the Macro Library or one floppy and a hard disk.
 
  The contents of the disks presented here is for 360K 5.25" floppy disks. The
  contents of other disk configuration may change but essentially is the same.
 
  LIST OF FILES IN DISK 1
  ~~~~~~~~~~~~~~~~~~~~~~~
  DISK1.EXE - A packed file that builds disk 1 during floppy installation
 
  DISK2.EXE - A packed file that builds disk 2 during floppy installation
 
  DISK3.EXE - A packed file that builds disk 3 during floppy installation
 
  HARD.BAT - An automatic hard disk installation batch file.
 
  FLOPPY.BAT - An automatic floppy disk installation batch file.
 
  NOTE:
  ~~~~~
  The last two files appears in all the diskettes, do not erase them
  they are needed for the installation process.

  LIST OF FILES IN DISK 2
  ~~~~~~~~~~~~~~~~~~~~~~~
  DISK4.EXE - A packed file that builds disk 4 during floppy installation
 
  DISK5.EXE - A packed file that builds disk 5 during floppy installation,
 
  SCIENCE.EXE - A packed file that contains the complete menu-driven solver
                and calculator "The SCIENTIFIC and ENGINEERING TOOL for LOTUS
                1-2-3". After unpacking see the README.WRI text file for use
                instructions. This solver was chosen by the PC Computing
                magazine to be included with the best 250 shareware software
                packages in the market today.
 
  HARD.BAT     - An automatic installation to hard disk batch file.
 
  FLOPPY.BAT   - An automatic installation to floppy disks batch file.
 
  LIST OF FILES IN DISK 3
  ~~~~~~~~~~~~~~~~~~~~~~~
  MACROMGR.WK1 - Macro manager for release 2/2.01/2.2/2.3 *.wk1 macros
 
  MACROMLB.WK1 - Macro manager for *.MLB macros
 
  MACROMG3.WK3 - Macro manager for the 3D releases
 
  SMALLMGR.WK1 - Quick and small manager for 2/2.01/2.2/2.3 *.wk1 macros
 
  SMALLMLB.WK1 - Quick and small manager for *.MLB macros
 
  SMALLMG3.WK3 - Quick and small macro for the 3D releases
 
  NEW_MNGR.MLB - In memory macro manager for release 2.2/2.3
 
  README.TXT   - Contains installation, short use instructions, and basic
                 macro tutor (can be printed using the PRINT or COPY DOS
                 commands), at the DOS prompt type:
 
                     COPY README.TXT PRN
 
                 and press [ENTER]
 
  README.PRN   - The program manual (can be printed the same way) this file
                 contains general data and information about he SUPER MACRO
                 LIBRARY, beyond the built-in use instruction in every macro.
                 It is highly recommended to take the time to look at this
                 text file to get the most out of the library and avoid
                 unnecessary problems in using the macros. This file can be
                 printed using the PRINT or COPY DOS commands.
 
  HARD DISK INSTALLATION AND UNPACKING
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Before installation, make backups of the disk/s to protect your investment
  and place the originals in a safe place, then write protect the diskettes.
  To unpack all files to a hard disk you need to have about 2M free space in
  the hard disk.

  IMPORTANT:
 
  The installation described here is for 360K disks. When using the automatic
  installation (HARD.BAT) the install is automatic and takes care for the
  different types of disks. When using the manual installation the packed
  files will be in different disk number.
 
  AUTOMATIC HARD DISK INSTALLATION
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  When you choose to use the automatic installation, the program assumes that
  you are using all releases of LOTUS 1-2-3 and the ENGINEERING TOOL too.
 
  Insert disk 1 to the source floppy drive and type:
 
         HARD <Source drive> <Target drive> <Target directory> [RETURN]
 
  Example:
 
         HARD A C MACROS [RETURN]
 
  Explanation:

  - Source disk in source drive A:
  - Target drive is C:
  - Target directory is C:\MACROS
  - Press RETURN

  From now on the installation is automatic. Follow the on screen instructions.
  At the end of installation you get:

  527 macros in the C:\MACROS directory

  The ENGINEERING TOOL in the C:\MACROS\SCIENCE directory
 
  If you are NOT using LOTUS release 2.2/2.3 delete all the *.MLB files
  using:

     DEL *.MLB  [RETURN]
 
  If you are NOT using LOTUS release 3.0/3.1 and up, delete the *.WK3 files
  using:

     DEL *.WK3  [RETURN]
 
  MANUAL INSTALLATION TO A HARD DISK
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  - Open a directory on the hard disk (C:\MACROS for example)
  - Make the new directory the active directory
  - Insert disk 1 into drive A: (or B:) and type

         A:DISK1 /x  [RETURN]

  All packed file in the DISK1.EXE file will be unpacked to the C:\MACROS
  directory in the hard disk. When the program is finished, do the same
  with the DISK2.EXE file and type:

         A:DISK2 /x  [RETURN]

  All packed file in the DISK2.EXE file will be unpacked to the C:\MACROS
  directory in the hard disk. When the program is finished, do the same
  with the DISK3.EXE file and type:

         A:DISK3 /x  [RETURN]
 
         NOTE: must be lowercase "x"
         ~~~~
  All packed file in the DISK3.EXE file will be unpacked to the C:\MACROS
  directory in the hard disk. When the program is finished, insert disk 2
  to the A: floppy drive and type:

         A:DISK4 /x [RETURN]

  All packed file in the DISK4.EXE file will be unpacked to the C:\MACROS
  directory in the hard disk. When the program is finished, do the same
  with the DISK4.EXE file and type:
 
         A:DISK5 /x [RETURN]

  All packed file in the DISK5.EXE file will be unpacked to the C:\MACROS
  directory in the hard disk.

  Insert Disk 3 to the A: floppy drive and type:

        COPY A:*.*

  All the files in "original" Disk 3 will be copied to the C:\MACROS
  directory. The rest is the same as described in the previous section for
  automatic installation to a hard disk.

  INSTALLATION OF THE SCIENTIFIC & ENGINEERING TOOL for LOTUS
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Open a directory C:\MACROS\SCIENCE for example, and make this directory
  the active directory, then insert disk 2 to the A: floppy drive and type:
 
         A:SCIENCE  [RETURN]
 
  All packed file in the SCIENCE.EXE file will be unpacked to the
  C:\MACROS\SCIENCE directory in the hard disk. After unpacking, see the
  README.WRI text file for instruction how to use this application. You could
  copy all above mentioned files to the relevant sub-directories and start
  them, however you would need more than 2M free space on the hard disk to
  hold the packed files too. After unpacking the files use the DOS DEL command
  to delete the packed files.
 

  FLOPPY DISK INSTALLATION
  ~~~~~~~~~~~~~~~~~~~~~~~~
  Before installation, make backups of the disk/s to protect your investment
  and place the originals in a safe place, then write protect the diskettes.

  IMPORTANT:

  The installation described here is for 360K disks. When using the automatic
  installation (FLOPPY.BAT) the install is automatic and takes care for the
  different types of disks. When using the manual installation the packed
  files will be in different disk number.

  AUTOMATIC FLOPPY DRIVE INSTALLATION
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Format seven (7) 360K floppy disks and number them from 1 to 7 (four 720K
  disks or two 1.2M or two 1.44M disks). Assuming your computer has two floppy
  drives A: and B: insert "original" disk 1 to the A: floppy drive and type:

         FLOPPY <Source drive> <Target drive> [RETURN]

  Example:

         FLOPPY A B [RETURN]

  Explanation:

  - The source diskettes are in the source drive A:
  - The target (preformatted disks) will be placed in drive B:
  - Press [RETURN]

  From now on the installation process is automatic just follow the on screen
  instructions. When the installation process is finished you will find:

  - 86 macros in the root directory and 49 macros in the \CONTINUE
    sub-directory of the preformatted disk 1
  - 103 macros in the root directory and 27 macros in the \CONTINUE
    sub-directory of the preformatted disk 2
  - 75 macros in the preformatted disk 3
  - 9 macros in the root directory and 47 macros in the \MACRO22
    sub-directory and 16 macros in the \MACROS3 sub-directory of the
    preformatted disk 4
  - 74 macros in the root directory and 4 macros in the \MACROS3
    sub-directory and 26 macros in the \MACRO22 sub-directory
    of the preformatted Disk 5
  - The SCIENTIFIC and ENGINEERING TOOL for LOTUS in preformatted disk 6
  - The macro managers and the README.* files are in Disk 7

  MANUAL INSTALLATION TO FLOPPIES
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Format seven (7) 360K floppy disks and number them from 1 to 7 (four 720K
  disks or two 1.2M or two 1.44M disks). Assuming your computer has two floppy
  drives A: and B:
 

  UNPACKING TO PREFORMATTED DISK NO. 1
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  - Insert preformatted disk 1 into the target drive (B:) and make it the
    active drive using  B:  [RETURN]
  - Insert "original" disk 1 into the source drive and type:

           A:DISK1 [RETURN]

  All compressed files in the DISK1.EXE file will be copied to the disk in
  target drive (B:).

  UNPACKING TO PREFORMATTED DISK NO. 2
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  - Insert preformatted disk 2 into the target drive (B:) and make it the
    active drive using  B:  [RETURN]
  - Insert "original" disk 1 into the source drive and type:
 
           A:DISK2 [RETURN]

  All compressed files in the DISK2.EXE file will be copied to the disk in
  target drive (B:).

  UNPACKING TO PREFORMATTED DISK NO. 3
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  - Insert preformatted disk 3 into the target drive (B:) and make it the
    active drive using  B:  [RETURN]
  - Insert "original" disk 1 into the source drive and type:

           A:DISK3 [RETURN]

  All compressed files in the DISK3.EXE file will be copied to the disk in
  target drive (B:).

  UNPACKING TO PREFORMATTED DISK NO. 4
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  - Insert preformatted disk 4 into the target drive (B:) and make it the
    active drive using  B:  [RETURN]
  - Insert "original" disk 2 into the source drive and type:

           A:DISK4  [RETURN]

  All compressed files in the DISK4.EXE file will be copied to the disk in
  target drive (B:).

  UNPACKING TO PREFORMATTED DISK NO. 5
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  - Insert preformatted disk 5 into the target drive (B:) and make it the
    active drive using  B:  [RETURN]
  - Insert "original" disk 2 into the source drive and type:

           A:DISK5  [RETURN]

  All compressed files in the DISK5.EXE file will be copied to the disk in
  target drive (B:).

  UNPACKING TO PREFORMATTED DISK NO. 6
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  - Insert preformatted disk 6 into the target drive (B:) and make it the
    active drive using  B:  [RETURN]
  - Insert "original" disk 2 into the source drive and type:

           A:SCIENCE  [RETURN]

  All compressed files in the SCIENCE.EXE file will be copied to the disk in
  target drive (B:).

  COPYING TO PREFORMATTED DISK NO. 7
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  - Insert preformatted disk 7 into the target drive (B:) and make it the
    active drive using  B:  [RETURN]
  - Insert "original" disk 3 into the source drive and type:

           COPY A:*.*  [RETURN]

  All the files in "original" disk 3 will be copied to the disk in drive B:

  WHAT IS A MACRO?
  ~~~~~~~~~~~~~~~~
  To allow users which are unfamiliar with the macro concept to take full
  advantage of this macro library we are bringing here a basic lesson for
  Lotus macros.

  In simple words a macro is a set of keyboard pressed keys that can be
  activated using two keys combination command. In Lotus 1-2-3 it is the
  combination of the ALT key and one of the English Alphabet
  characters.

  For example, normally it takes 7 key presses to change a column width to 20

     /WCS20~

  (The Tilde "~" stands for [ENTER] in Lotus macro language)

  A macro will save 5 key presses every time it is activated, the more you use
  it the more key presses and time you save. You can define any set of key
  presses as a macro and activate it by pressing the ALT and an assigned key
  together. Imagine how boring it is to try to change the width of 50 columns
  manually instead of using a macro. Try to calculate how much time you are
  wasting every day by repeating again and again the same key presses
  sequences if you are not using macros.

  In addition to the fact that a macro can be a set of key presses the Lotus
  macro language includes commands and functions that bring it to the level
  of a high level programming language almost like BASIC. There are who claim
  that this is the most popular and most used computer language today. Using
  this macro commands and functions you can add functionality that can not be
  reached using the keyboard alone. Few examples are:

  - Transpose a range with formulas correctly

  - Change text appearance in large tables automatically from Lowercase to
    Uppercase or Proper and vise versa
  - Print form letters from an address database
  - Print address labels from an address database
  - Print a current date stamp like "Monday Dec-15-1991" without typing
  - Change a number written in with numbers into a number written by words
 
  There are many more examples we can bring that can not be achieved using
  the keyboard alone. The SUPER MACRO LIBRARY and other commercially
  available macro libraries are the proof for that. Add to this the Lotus
  support for custom menus and you can build friendly, menu-driven
  applications and macros, that work with the Lotus menu bar style that any
  Lotus user is familiar with.

  We have no intention to teach you how to become a macro guru, there are many
  fine books and courses that you can depends on, but we try to convince you
  that using macros can save you a great deal of time and money and make your
  work with Lotus a pleasure, and the most important is that you don't have
  to write your own macros because we did it for you. In fact this macro
  library is especially built in such a way that you can use the macros from
  menu-driven "macro managers" using point and shoot. All you need to learn
  is how to load and activate the "macro manager" which is "difficult" as
  combining the macro manager to an empty part of the worksheet using:

     /FCCE<macro manager name> [ENTER]

  then follow the built in instructions inside the macro manager (see the
  README.PRN manual for full explanation).

  HOW MACRO WORKS?
  ~~~~~~~~~~~~~~~~
  The only way to fully understand what is a macro and how it works is to
  write one, therefore we will start right away:

  - Start a new and empty worksheet in Lotus 1-2-3
  - Place the cell pointer on an arbitrary cell like the B1..B1 cell
  - Start to type exactly as shown:

      '/WCS20~

    and press [ENTER], don't forget to type the apostrophe "'" at the
    beginning, and the Tilde "~" at the end . Now B1..B1 cell appears like:

       /WCS20~

    The tilde is not shown, it is only a prefix which tells Lotus that the
    cell contains text and it is left aligned.

  - Place the cellpointer on the A1..A1 cell and type exactly:

       '\X

    then press [ENTER]. Again the tilde is hidden and the text appears as:

        \X

  So far all we have done is to type some text into the A1..A1 and the B1..B1
  cells. How we can make Lotus 1-2-3 to understand that it is a macro and how
  we force Lotus to activate it?

  Before Lotus can understand that the text in the B1..B1 cell is a set of key
  presses to execute we must issue a RANGE NAME to the B1..B1 cell. The
  range name must be composed of the back slash "\" and one of the Alphabet
  characters, like the "\X" in the A1..A1 cell.

  But just writing the "\X" alone and pressing [ENTER] will appear as

     XXXXXXXXX

  in the A1..A1 cell (assumed that it is 9 characters wide), that's why we had
  to add the apostrophe "'" as the prefix, otherwise Lotus considers the back
  slash "\" to be the prefix that causes the "A" to fill the column width.

  There are two ways to issue a range name to the B1..B1 cell:
 
  - The first uses the text already written in the A1..A1 cell, thereby the
    range name will be "\X". Place the cell pointer on the A1..A1 cell and
    type exactly:

     /RNLR

    and press [ENTER], now the B1..B1 is named "\X". To verify it press the F5
    function key (the GOTO key), type \X and press ENTER, the cell pointer
    will land on the B1..B1 cell. This way of naming range names has the
    advantage that the cell A1..A1 serves as a reminder that the B1..B1 cell
    is also the "\X" cell, it's also possible to name a large number of
    cells in one operation as it is done in the macros of the SUPER MACRO
    LIBRARY (see the built-in instructions in every macro).

  - The second way is less recommended because it doesn't use the A1..A1 cell
    and therefore lucks the reminder of the range name. Place the cell pointer
    on the B1..B1 cell and exactly type:

      /RNC\X
 
    and press ENTER twice.

  - Press the "ALT" key and press the "X" key while you hold the "ALT" key,
    in no time the column width will change to 20.

  How is this happening? when Lotus senses that the ALT-X key combination is
  pressed it looks for a cell named "\X" (the B1..B1 cell) and starts to
  execute the keys and commands in the cell in the exact order, exactly as it
  was pressed from the keyboard, when Lotus gets to the Tilde "~" character it
  understands it as a command to press the ENTER key.

  The macro type that we have just build is called a KEYBOARD macro because it
  exactly simulates the keys pressed from the keyboard. Most of the macros in
  the SUPER MACRO LIBRARY and other commercially available macro libraries
  are far more complicated and include macro commands and functions in
  addition to keyboard keys simulations.

  The simple macro that we wrote contains only one cell but a cell can hold
  up to 240 characters in release 2/2.0/2.2 and 2.3 and up to 512 characters
  in releases 3/3.1/3.1+ and 123W. Therefore it seems that we could expand
  the macro to perform more tasks than just change the column width. But this
  is not necessary, we can continue our macro to the next cell B2..B2 and far
  more down without filling the whole 240 character in every cell. Lotus will
  continue to execute the macro all the way down until it will reach an empty
  cell or meet the macro command {QUIT} or {RETURN}. Yes, a macro command in
  the Lotus macro language is always surrounded by curled braces "{}".

  SAVING A MACRO TO DISK FOR LATER USE
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Macro is a Lotus file exactly as any other Lotus file therefore it is saved
  the same way you save a Lotus file using /FS<macro name> [ENTER]. The macro
  is saved with the ".WK*" extension. To use it again, combine it to an empty
  area on your current worksheet  using /FCCE<macro file name> [ENTER] and
  then issue the macro name ("\*") as we have seen earlier.

  It may seem that we can have up to 26 macros and macro names in one
  worksheet because there are only 26 letters in the English Alphabet. This
  is partially true since there are some utilities (add-ins) in the market
  that allow using any kind of name for a macro. In the SUPER MACRO LIBRARY
  we included a macro that does the same, the RUNKEY2.* macro allows the user
  to activate macro with any kind of name, for example a macro can have a
  name like "COLWIDTH" too.

  This was the situation until the appearance of release 2.2 and up, the new
  releases support any macro name including the "\*" type too. To execute a
  macro in the new releases press the ALT-F3 key combination and then point to
  the macro to execute and press ENTER. You can use the ALT-* key combination
  to execute a "\*" macro type too.

  With the introduction of release 2.2/2.3 a new type of macro was
  introduced. This is a hypertext macro which resides in the memory instead
  of the worksheet and therefore can be used on many worksheets one after
  another, you can erase the worksheet or retrieve a new one and the macro
  will continue to stay in memory ready for execution. This type of macros
  has the ".MLB" extension to the macro name. To handle such macros the
  MACROMGR.ADN add-in is included with Lotus 1-2-3 2.2 and 2.3.

  WHAT IS AN ADD-IN?
  ~~~~~~~~~~~~~~~~~~
  To allow users with special needs to use the Lotus platform the Lotus
  company programmers built Lotus 1-2-3 in such a way that it can work with
  external modules that add special performance and properties to Lotus on
  demand. For example a programmer with the right development tool (supplied
  by Lotus co.) can develop a full blown statistical application that will
  work in harmony with Lotus 1-2-3 on call. This type of module is called
  "ADD-IN". The add-in has to be ATTACHED to Lotus and then INVOKED to be
  used. When it is invoked it becomes an integral part of Lotus including
  Menus, Formulas etc.

  One of the add-ins that comes with Lotus 1-2-3 2.2 and 2.3 is the
  MACROMGR.ADN add-in, it allows the *.MLB macros to operate.


  USING THE MACROMGR.ADN ADD-IN
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Consult the manual that comes with Lotus 1-2-3 for full explanation on how
  to use the MACROMGR.ADN add-in. The MACROMGR.ADN add-in has to be ATTACHED
  and then INVOKED to make it usable. To attach it:

  - Start Lotus 1-2-3 (release 2.2 or 2.3 only)
  - Press the following keys in order

       /A A MACROMGR [ENTER]

  Lotus will offer four options to assign two keys combination for invoking
  the add-in (a combination of ALT and one of the F7,F8,F9 or F10 function
  keys) if the user chooses not to assign the two key combination he will
  need to press in order:

       /A I MACROMGR [ENTER]

  to invoke the add-in. When the MACROMGR.ADN is invoked a menu appears and
  the user if offered to load a macro, to edit a macro , to save the macro on
  disk and few other options.

  LOADING AN *.MLB MACRO
  ~~~~~~~~~~~~~~~~~~~~~~
  Invoke the MACROMGR.ADN using the two key combination (ALT-F*) or use

      /A I MACROMGR [ENTER]

  and choose the LOAD menu option, then point to or write the macro name and
  press ENTER.

  EXECUTING THE MACRO IN MEMORY
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Press ALT-F3 and point to or write the range name/routine to activate and
  press ENTER.

  METHODS OF MACRO LIBRARY MANAGEMENT
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  1. GROUPING THE MACROS IN ONE *.WK1 FILE
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     Keeping a group of macros in one spreadsheet file (*.WK1) and combining
     it to the current worksheet every time we need the macros. A spreadsheet
     of macros is called a library and this is the simple method mentioned in
     books and some commercial macro libraries. But this method is limited,
     old fashioned, and memory and time consuming. There will always be some
     macros in the library that you will not use at your working session and
     therefore will use memory because they belong to the worksheet. Trying to
     erase these macros before your work session demands very exact
     preparation and a good knowledge of the exact action you are going to do
     in your working session which is not so simple to predict.

  2. GROUPING THE MACROS IN ONE *.MLB FILE
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     This method is identical to the previous one and therefore suffers from
     the same limitations.

  3. USING MENU-DRIVEN MACRO MANAGERS
     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     In this method every macro is saved as an independent file. The macros
     are located in a subdirectory. Using the menu driven manager the user can

     - See the list of all the macros in the directory
     - Activate the macros using point and shoot
     - Read the macro's operation instructions

    This method is unique and is used only in the super macros library. The
    advantage is clear:

    - Only one macro resides in the memory at the same time
    - The manager loads the macro, defines the range names and activates the
      macro automatically without the user's interference. The result is
      memory space and preparation time saving, because there is no need to
      plan the work ahead.
    - The work is menu driven using Lotus style menu bar.

  USING THE MACROS LIBRARY (A short brief from the README.PRN file)
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  USING THE MACROS MANUALLY
  ~~~~~~~~~~~~~~~~~~~~~~~~~
  All the macros in the library can be used by manually combining them to an
  empty part of the worksheet, using the /File Combine Copy Entire-file ..
  Lotus commands sequence. Then following the built-in using instruction in
  the first 9 rows of the macro which are dedicated to macro description
  and use instruction.

  USING THE MACRO MANAGERS
  ~~~~~~~~~~~~~~~~~~~~~~~~
  This macro library employs a unique philosophy of managing macro libraries.
  This unique method allows using the macros in the disk to be activated
  from a central macro manager (macro itself). Only the macro manager needs
  to be COMBINED to the worksheet. Using the manager's menu the macros in the
  disk can be easily managed and used.

  This way every experienced and inexperienced Lotus user can take full
  advantage of the macros in this library. All he needs to know is how to
  combine a macro using / File Combine Copy Entire_file ... , to read the
  built-in instruction in the first 9 rows of the manager and start it.
  From that point and on, the work is menu-driven and automatic. The macro
  manager takes care of combining the macros, activating them and erasing
  them after use.

  For every release of Lotus 1-2-3 two managers are supplied: the first, for
  the experienced user of the MACROS LIBRARY who is already familiar with
  the names of the macros in the library, and the second for the
  inexperienced user who is not familiar with the names of the macros. The
  managers for the inexperienced user contain a description line for every
  macro name and allow search and find using a keyword. The manager
  presents the user with all the macros which contain the keyword in the
  macro description line. Using point and shoot the desired macro is
  activated.

  The managers for the experienced users are only 6-8K in size compared to
  the managers for the inexperienced users which are 25-28K in size because
  they contain hundreds of description lines for the macros.

  MANAGERS NAMES
  ~~~~~~~~~~~~~~
  MACROMGR.WK1 - For inexperienced users, works with Lotus 2/2.01/2.2/2.3
  SMALLMGR.WK1 - For experienced users, works with Lotus 2/2.01/2.2/2.3

  MACROMG3.WK1 - For inexperienced users, works with Lotus 3.0/3.1/3.1+/123W
  SMALLMG3.WK1 - For inexperienced users, works with Lotus 3.0/3.1/3.1+/123W

  MACROMLB.WK1 - For inexperienced users, works only with Lotus 2.2/2.3
  SMALLMLB.WK1 - For experienced users, works only with Lotus 2.2/2.3
 
  NEW_MNGR.MLB - For experienced users, works only with Lotus 2.2/2.3
                 This manager resides in memory and is a breakthrough in the
                 way of handling *.MLB macro. The manager was created (from a
                 simple list of the macros in the library the NEW_MNGR.PRN
                 text file) using the COMPILE.MLB macro "compiler".

  The last three managers use the MACROMGR.ADN add-in supplied with Lotus
  2.2/2.3/2.4, See the README.PRN text file for details.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3300

     Volume in drive A has no label
     Directory of A:\

    README   TXT     35851   7-27-92  12:06a
    README   PRN     61515   7-27-92  12:03a
    MACROMG3 WK3     27726  12-29-91  12:09a
    MACROMGR WK1     28151  12-29-91  12:04a
    MACROMLB WK1     27291  12-29-91  12:01a
    NEW_MNGR MLB     32314   1-07-92   9:54p
    SMALLMLB WK1      7148   7-08-91   7:53p
    SMALLMG3 WK3      5306   6-15-91   2:34p
    SMALLMGR WK1      7348   6-09-91   5:20p
    NEW_MNGR PRN      2188  12-28-91  10:31p
    HARD     BAT      4201   1-27-92   4:22p
    FLOPPY   BAT      4549   1-17-92  10:06p
    SHOW     EXE      2040   9-12-88  10:48a
    GO       BAT        36  11-13-92  11:42a
           14 file(s)     245664 bytes
                           67584 bytes free
