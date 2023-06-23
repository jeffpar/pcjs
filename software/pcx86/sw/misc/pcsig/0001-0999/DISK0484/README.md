---
layout: page
title: "PC-SIG Diskette Library (Disk #484)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0484/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0484"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GRAPHICS FONT DESIGN"

    Graphics Font Design Utility is a program that allows the user to
    design alternate sets of fonts for the ASCII characters in the high
    set (numbers 128 to 255).  The new set of fonts may then be loaded
    into any Turbo Pascal program and used in place of 128 to 255.
    Graphics Font Design Utility then presents two ways which may be used
    to save the font sets created.
    
    This utility was born to alleviate the pain of hand-coding each of the
    characters.  This can be done on graph paper, but the final result
    does not always look the way that is expected.  With Newfonts.com the
    design of these character sets can be done interactively and without
    the headaches of bit manipulation.  Plus, the program is well
    documented!
    
    System Requirements: 256K, one disk drive and monochrome/graphics
    display and a CGA card. A Pascal compiler is advisable.
    
    How to Start:  Type TYPE NEWFONT.DOC from the DOS prompt and
    follow the instructions.
    
    Suggested Registration:  $10.00; Source code $20.00
    
    File Descriptions:
    
    NEWFONTS COM  Main program
    USEFONTS LIB  Small library file with procedures to use the files
    NEWFONT  DOC  Complete documentation and insructions (20k)
    FNTDEMO? PAS  Pascal source code for FNTDEMO?.COM (4 Files)
    JUNIOR16 PAS  Pascal source code
    LORES    PIC  Graphics of NEWLORES.PAS
    NEWLORES PAS  Pascal source code
    CHEMMATH INC  Included file for merge of HI_ASCII.FNT and CHEMFONT.INC
    CHEMFONT INC  Included file of numbers for ascii fonts
    LOASCII  INC  Included file of standard ascii fonts
    HIASCII  INC  Included file of standard ascii fonts
    SAMPLE?? FNT  Sample fonts that can be used or modified (12 Files)
    CHEMMATH FNT  Combination file with file merging option for
    CHEMFONT FNT  Subscipts, superscripts, and some special symbols
    LO_ASCII FNT  Standard Ascii fonts in disk file form
    HI_ASCII FNT  Standard Ascii fonts in disk file form
    FNTDEMO? COM  Executable file for main program (4 Files)
    FRAKTUR  ???  Part of NEWFONTS.COM
    ???      ???  Part of NEWFONTS.COM
    ???CHARS ???  Part of NEWFONTS.COM
    MEWPROC  INC  Part of NEWFONTS.COM
    ADDENDA  DOC  Additions to documentation
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDENDA.DOC

{% raw %}
```



                  (* *********************************** *)
                  (*                                     *)
                  (*       < < NEWFONTS.COM > >          *)
                  (*                                     *)
                  (*    version 3.0  November 1986       *)
                  (*    (c) Donald L. Pavia              *)
                  (*        1488 Lahti Drive             *)
                  (*        Bellingham, WA  98226        *)
                  (*                                     *)
                  (* *********************************** *)


     CHANGES TO BE FOUND IN THE NEW VERSION 3.00 :


     (1) PATHNAME SUPPORT

          This new version (update) of NEWFONTS.COM now supports path
     names, making its use on a hard disk more convenient.

          A combined  drive\subdir\filename of 26 characters is allowed.
     This would allow a filename such as

                        C:\newfonts\sample12.fnt

     to either be saved from or loaded into the font editor.


     (2) SUPPORT FOR A MONOCHROME MONITOR WITH A CGA CARD

           A command line switch has been added for those of you with a
     color graphics card, but using a compatible monochrome monitor.
     The program has a blue background on the screen which really fouls
     up a monochrome display. The background can be switched to BLACK
     by calling the program with an additional parameter:

                A>NEWFONTS mono         will do the trick ......


      (3) NEW DEMO PROGRAM

            A new Old German or "Fraktur" Font set has been added, as well
      as a program that demonstrates how to use this font by typing more
      or less standard German text.


      (4) FONTS CONTRIBUTED BY OTHERS

          PHONEMES.FNT    Patrick Beauchemin, Westmont, Quebec, CANADA


      (5) OTHER SMALL CHANGES NOT IMMEDIATELY NOTICEABLE


                                                     Donald L. Pavia
                                                     1488 Lahti Drive
                                                     Bellingham, WA

                                                     November, 1986



```
{% endraw %}

## FILES484.TXT

{% raw %}
```
 
-----------------------------------------------------------------------
Disk No  484  GRAPHICS FONT DESIGN UTILITY V3.0                      v1
-----------------------------------------------------------------------
 
GRAPHICS FONT DESIGN UTILITY is a program that allows the user to design
alternate sets of fonts for the Ascii characters in the high set, 128 to
255.  The user can alleviate the trouble of hand-coding each character.
The new set of fonts may then be loaded into any Turbo Pascal program and
used in place of 128 to 255.  GRAPHICS FONT DESIGN UTILITY then presents
two ways which may be used to save the font sets created.  Program well
documented
 
NEWFONTS COM  Main program  (version 3.00 Jan 1987)
NEWFONT  DOC  Complete documentation and insructions (20k)
ADDENDA  DOC  Additions to documentation with version 3.00
USEFONTS LIB  Small library file with procedures to use the files
              created in other programs
FNTDEMO1 PAS  Pascal source code for FNTDEMO1.COM
FNTDEMO2 PAS  Pascal source code for FNTDEMO2.COM
FNTDEMO3 PAS  Pascal source code for FNTDEMO3.COM
FNTDEMO4 PAS  Pascal source code for FNTDEMO4.COM
FNTDEMO1 COM  Executable file for main program
FNTDEMO2 COM  Executable file for main program
FNTDEMO3 COM  Executable file for main program
FNTDEMO4 COM  Executable file for main program
FRAKTUR  PAS  Pascal source code for FRAKTUR.COM
FRAKTUR  COM  Executable file for main program
FRAKTUR  FNT  Font file used by FRAKTUR.PAS
HI_ASCII FNT  Standard Ascii fonts in disk file form
LO_ASCII FNT  Standard Ascii fonts in disk file form
CHEMFONT FNT  Subscipts, superscripts, and some special symbols
CHEMMATH FNT  Combination file with file merging option for
              HI_ASCII.FNT and CHEMFONT.FNT
SAMPLE1  FNT  Sample fonts that can be used or modified
SAMPLE2  FNT  Sample fonts that can be used or modified
SAMPLE3  FNT  Sample fonts that can be used or modified
SAMPLE4  FNT  Sample fonts that can be used or modified
SAMPLE5  FNT  Sample fonts that can be used or modified
SAMPLE6  FNT  Sample fonts that can be used or modified
SAMPLE7  FNT  Sample fonts that can be used or modified
SAMPLE8  FNT  Sample fonts that can be used or modified
SAMPLE9  FNT  Sample fonts that can be used or modified
SAMPLE10 FNT  Sample fonts that can be used or modified
SAMPLE11 FNT  Sample fonts that can be used or modified
SAMPLE12 FNT  Sample fonts that can be used or modified
HIASCII  INC  Included file of standard ascii fonts
LOASCII  INC  Included file of standard ascii fonts
CHEMFONT INC  Included file of numbers for ascii fonts
CHEMMATH INC  Included file for merge of HI_ASCII.FNT and CHEMFONT.INC
NEWLORES PAS  Pascal source code
LORES    PIC  Graphics of NEWLORES.PAS
JUNIOR16 PAS  Pascal source code
MEDCHARS PAS  Pascal source code for MEDCHARS.COM
MEDCHARS.COM  Executable file for main program
BIGCHARS.PAS  Pascal source code for BIGCHARS.COM
BIGCHARS.COM  Executable file for main program
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## NEWFONT.DOC

{% raw %}
```




                                NEWFONTS.COM

                    TURBO PASCAL  GRAPHICS FONT DESIGNER

      { Requires : IBM Compatible Computer, PC or MS.DOS 2.xx, 256 k,  }
      {            and a CGA compatible color card.                    }

                           version 2.00 Feb 1986

                     Copyright 1986  by Donald L. Pavia

        This disk contains procedures, functions and a utility that ease
      the use of redefined  8x8 graphics fonts.  I am releasing the disk
      to the Public Domain for distribution by  User Groups or  Bulletin
      Boards subject to the following stipulations:

      1) Any person may obtain a copy of the   BASE FILES   on this disk
         either through their local  User's Group  or Bulletin Board, or
         by sending me a  blank, double-sided, double-density 5 1/4 inch
         floppy diskette along with a  PRE-PAID,  SELF-ADDRESSED  floppy
         diskette mailer.

           send to :      Donald L. Pavia
                          1488 Lahti Dr.
                          Bellingham, WA. 98226    USA

         Clubs may freely copy and distribute the diskette with the base
         files for a nominal distribution fee, not to exceed $10.

      2) This disk contains a  .COM file  version of the utility program
         and  sample routines  showing how to use the files generated by
         that utility program. You may freely use the font files and the
         <COMPILED CODE>   for the  driver routines  in any of  your own
         programs.   If you find  regular use, a  $10 donation  would be
         gratefully appreciated, or buy the source code (see below).

      3) I retain all rights to the SOURCE CODE for the utility and have
         not released that code into the Public Domain.  You may acquire
         a copy of the commented Turbo Pascal source code by sending me:

           a) a check for $20 ($15 plus S/H),   OR
           b) a check for $15 along with a 5 1/4 in. FLOPPY DISKETTE,
                                and a PREPAID, SELF-ADDRESSED MAILER.

         Alternatively, you may acquire a copy of the source code from
         from another individual  if you send me a  ligitimizing check
         for $15.
           You may not distribute the source code except under the above
         conditions. Nor may unaltered functions and procedures from the
         source code be incorporated into other source code of your own
         which you distribute. You really don't require the  source code
         unless you wish to learn from it, or to  modify it to your own
         needs.  It would, for instance,be quite possible to recompile
         the souce code with overlays so that it would run on a 128 k
         machine.

          SORRY ABOUT THE LEGALITIES  -   HOWEVER, I DO WISH TO PROTECT
          MYSELF AND PERHAPS TO GAIN SOMETHING FROM MY TIME SPENT. YOUR
          COOPERATION WILL ENCOURAGE ME TO RELEASE MORE OF MY PROGRAMS.





                                      2

    The following files will be found on this free distribution disk:

       {--------------------------------------------------------------------}

            NEWFONTS.COM         The Compiled Font Designing Utility

            USEFONTS.LIB         A Small Library File Containing the
                                 Procedures to Allow You to Load the
                                 Font Files You Create Into Your Own
                                 Programs (From Disk Files).
       {--------------------------------------------------------------------}

            ( .FNT Files are 1024 Bytes = 255 chars x 8 bytes/char )

            HIASCII.FNT          Standard Ascii Fonts in Disk File Form
            LOASCII.FNT

            CHEMFONT.FNT         Subscripts and SuperScripts and Some
                                 Special Symbols

            CHEMMATH.FNT         A Combination File That Was Created With
                                 The File Merging Option (HIASCII.FNT and
                                 CHEMFONT.FNT)

            SAMPLEx.FNT          Sample Files (there are 12 of these)
       {--------------------------------------------------------------------}

            ( The Above .FNT FIles Converted to .INC FIles )

            HIASCII.INC           These May Be $I Included in the const
            LOASCII.INC           Declarations (or copied into code)

            CHEMFONT.INC          Take a Look at This One to See That the
                                  .INC Files do Not Have to Define All
                                  1024 Bytes (see also FNTDEMO2.PAS)

            CHEMMATH.INC          HI_ASCII.FNT merged with CHEMFONT.INC
       {--------------------------------------------------------------------}

            FNTDEMO1.PAS          A Demo Program That Uses USEFONTS.LIB And
                                  Reads .FNT Files From Disk

            FNTDEMO2.PAS          A Demo Program That Uses $I Include Files
                                  To Define and Fill Array Constants

            FNTDEMO3.PAS          Programming variations of the above. Showing
            FNTDEMO4.PAS          some more techniques.
       {--------------------------------------------------------------------}

            NEWFONT.DOC           This File
       {--------------------------------------------------------------------}

            NEWLORES.PAS          Showing how to generate text in a 16 color
                                  160 x 100 graphics mode.
       {--------------------------------------------------------------------}

            JUNIOR16.PAS         Showing how to use PCjr 16 color LoRes mode

    The Source Code file is named : NEWFONTS.PAS.

              ( It may be obtained as described on page one. )



                                      3


                                 THE PROGRAM

       This program allows one to design  alternate  sets of fonts for the
    Ascii characters in the high set -  that is, Ascii numbers 128 to 255.
    The new sets of fonts may then be loaded into any Turbo Pascal program
    and used in place of #128 - #255. Font sets may be saved in one of two
    ways to disk. They may be saved as a 1024 byte file of font-definition
    bytes, or as a  $I include file that can be included into your code at
    compile time. The include files have variable size.

       Ascii fonts are stored in the  ROM  of most  IBM compatibles for the
    for the low Ascii set (#0-#127), but not for the upper or high set. The
    IBM PC is typical in this respect, whereas the  IBM PCjr is atypical in
    that it stores both sets in ROM. Therefore, in an IBM PC or XT the high
    Ascii characters must be loaded into RAM by the application software.
    If you load a new set they cannot always be retrieved. I have placed
    files containing both sets on this disk. They were copied from the ROM
    of an IBM PCjr and they are named HI_ASCII.FNT and LO_ASCII.FNT. A very
    easy method of restoring the unaltered set is presented here as are
    methods of switching among a number of sets at random.

        There is an interrupt vector ( 7C ) found in low RAM that points to
    the location of the table of bytes that defines the high Ascii character
    set.  You may easily redefine a  new set of characters  by changing the
    memory address to which this vector points, and by placing a new set of
    font-definition bytes at that address.

        Each Ascii character font is defined by 8 bytes, so a file of high
    characters will be represented by 1024 bytes ( 8 bytes x 128 chars ).
    Each byte represents a row of 8 pixels. Since a byte contains 8 bits, the
    pixel pattern for each row of a character is coded by which bits are set
    in the byte. Since eight bytes represent a character, an Ascii character
    is an 8 x 8 pixel array.

        This utility was born to alleviate the pain of hand-coding each of
    the characters. This can be done on graph paper, but the final result
    does not always look the way that is expected. With Newfonts.com the de-
    sign of these character sets can be done interactively and without the
    headaches of bit manipulation.

        It is my practice to name the unadorned byte files on this disk with
    the extension .FNT while the include files are named with the extension
    .INC. A menu option in the utility program will take a .FNT file and
    convert it to an .INC file. That is, it will convert a font file into code
    that may be directly included into your program at compile time.

        A WriteString procedure is introduced that will show how to redirect
    regular alphanumeric strings from Low Ascii characters to redefined High
    Ascii characters. This avoids calling  #xxx  or  chr(xxx)  for them.















                                   4

                          PROGRAM INSTRUCTIONS


        Once you boot the program and press a key you are asked whether
    you would like to load the high Ascii set, the low Ascii set, or start
    from no (blank) set. Selecting H, L or N then brings up the main menu.
    The following options are found on the main menu.

    {---------------------------------------------------------------------}


       (N)ewSet     Erases workgrid and workset (table) to a blank.
       (C)lrGrid    Clears the workgrid only.
       (E)nterChar  Places a character from the workgrid into the workset.
       (G)etChar    Places a character from the workset into the workgrid.
       (L)oadFile   Loads a new workset from a 1024 byte .FNT file.
       (S)aveFile   Writes the current workset to a 1024 byte .FNT file.
       (R)estore    Loads (restores) either the high or low Ascii charset.
       (I)ncFile    Converts the currently loaded workset to an .INC file .
       (J)oinFiles  Allows you to merge and/or reaarange .FNT files.
       (F)iles      Gives a disk directory and access to file rename/erase.
       (V)alues     Gives you either the hex or decimal values of the
                          character currently loaded in the workgrid.
       (X) EXIT     GoodBye.

       (1)          Used to set a pixel   (square in the grid).
       (0)          Used to erase a pixel (square in the grid).

       CURSOR KEYS  Move the cursor around the workgrid.


                      BRIEF EXPLANATIONS OF MENU SELECTIONS

                         (Press the Indicated Character)
     {--------------------------------------------------------------------}

        A more detailed explanation of each of these options follows below.
        All commands are case insensitive. You may use either lower or upper
        case.

       (N)ewSet

           Pressing N  causes both the workgrid and the entire workset to be
        erased. All 1024 bytes of the Ascii table and the local workspace of
        the workgrid are set to zero. If you haven't saved your curent table
        prior to using this command, you lose everything and must start over.

       (C)lrGrid

           Pressing C  causes only the workgrid to be cleared. Previously de-
        signed characters that have been placed in the Ascii table using the
        Enter command, or those that were loaded from a  .FNT  disk file are
        not erased.










                                        5
       (E)nterChar

           Pressing E  causes the character being designed in the workgrid to
        be placed in the Ascii table under construction. You will be asked
        which Ascii position you wish to place it into (#128-#255). The char-
        acter currently in that position will be replaced by the new character.
        When you press return you see the character appear in the table, and it
        will disappear from the work grid. You can retrieve it with the next
        command. If you wish to erase a character in the Ascii table, you may
        clear the grid (ClrGrid) and then enter an empty space into the table.
        You may abort this command by pressing <ENTER>.

      (G)etChar

          Pressing G  allows you to capture a character from the Ascii table
       and place it into the workgrid. You will be asked which Ascii number
       you wish to get from the table. GetChar does not erase the character
       from the Ascii table, it merely makes a copy of it in the workgrid. You
       may capture a character, modify it and then place the modified char-
       acter into the table (in the same or in another position) using the
       EnterChar command. You may abort this command by pressing <ENTER>.

     (L)oadFile

         Pressing L  allows you to load a previously saved .FNT file from the
      disk into the workset (the Ascii table). The current contents of the
      workset and the workgrid will be erased (overwritten). .FNT files are
      the 1024 byte files. You may abort this command by pressing <ENTER).

     (S)aveFile

         Pressing S  allows you to save the current workset to disk as a 1024
      byte file. My convention is to always name these files with an .FNT
      extension. You may abort this command by pressing <ENTER>.

     (R)estore

         Pressing R  clears the workgrid and loads either (H)igh Ascii, (L)ow
      Ascii, or (N)o Ascii into the workset (Ascii table). This action erases
      any characters initially present. The No Ascii option gives a completely
      blank workspace. That is, it restores the table to one of the three
      possible initialization states.

     (I)ncFile

         Pressing I converts the current workset (Ascii table) to an include
      file. To use this command, you would normally load a font file (.FNT)
      from disk and then press I. You will be asked for a name for the new
      include file. My convention is to name these files with the extension
      .INC. This command actually writes code that you can $I include in your
      program. The .INC file produced is defined as an typed constant array
      that can be placed at the head of your declaration section at the be-
      ginning of your program. It takes the form :

             const   'variablename' : array[1..1024] of byte =
                        ( byte1,byte2,byte3,...........lastbyte);

      variablename will be formed by removing the extension from your name for
      the file. For instance, if your file NEWFONT.FNT is converted to the
      include file NEWFONT.INC, variablename will become NEWFONT. The .INC
      uses decimal notation because all hex bytes require 3 chars ($00).





                                     6

      You may edit these include files after they are formed in order to
      shorten them or change the variable name. If your .FNT file did not
      comprise a full set of redefined characters, but say only 20 of them,
      then the include file will include a tail of 0's for the undefined
      Ascii characters. You may delete the tail of zeroes and adjust the
      array index to the actual number of bytes left in the array. These
      shortened files may be used quite nicely. It is not necessary to have
      a complete redefinition of ALL the Ascii characters. Note that there
      are 16 bytes (two Ascii chars) per line of this include file.
          The Sample program FntDemo2.pas shows how to use these files in
      your programs.

     (J)oinFiles

          This is the most complicated command in the set. It allows you to
      either rearrange the entries in a single file, or to combine parts of
      two files into a new merged file.
          The prompts explain what you must do. First you are asked which
      file you wish to begin with. You should type the name of a .FNT file.
      If a file is already loaded and it's the one you wish to work with
      simply press <ENTER>. The loaded table is visible on the screen. Next
      you are asked for a range of characters you wish to copy to a new file.
      Suppose you say 128 through 148. You will then be asked at which po-
      sition in the new table this segment of characters should be placed
      (that is, where will they start - the end will be automatically found).
      Upon entering you answer, say 150, you will see the resultant table on
      the screen. You will than be asked if you wish to do further merging.
      A yes answer will ask for a new file name. If you wish to use another
      segment from the first table press <RETURN>, otherwise enter a new
      filename. Either the new table or the previous table, depending on your
      choice, will be seen. Again you will be asked which numbers are to be
      copied and to which starting position. After responding, you wil see
      the result. Once again, you will asked if there is to be further
      merging. You may repeat this sequence until you are through. When you
      finally answer No, you will be asked for a name for the new file and
      it will be written to disk as a .FNT file. Do not try to create an
      .INC file when you are done. You must first reload the new .FNT file.
      The merged file is held in a special variable space during this
      operation and is not available to other commands.

     (F)iles

          Pressing F  will give you a disk directory for the current drive.
      For the convenience of Turbo Pascal programmers, files with the follow-
      ing extensions are not listed: .PAS, .BAK, .COM, .EXE, .SYS. After the
      directory is listed, you may either delete or rename files without
      leaving the program. Pressing R will return you to the font editor.

     (V)alues

          Pressing V  will list the values for the eight bytes of the char-
      acter which is currently displayed on the work grid. You are given a
      choice of seeing these values either in hex or decimal notation.

     (X)  EXIT    Can you guess?


           HERE'S HOPING THIS UTILITY WILL EASE YOUR PROGRAMMING CHORES


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0484

     Volume in drive A has no label
     Directory of A:\

    ADDENDA  DOC      2239  11-22-86  12:12p
    BIGCHARS COM     12063  12-18-86   8:34p
    BIGCHARS PAS      2826  12-18-86   7:24p
    CHEMFONT FNT      1024   1-05-86   2:31p
    CHEMFONT INC      1019   2-05-86  12:33a
    CHEMMATH FNT      1024   1-07-86  12:32a
    CHEMMATH INC      3519   1-30-86  11:00p
    FILES484 TXT      3104   1-29-87   7:14p
    FNTDEMO1 COM     12770   2-08-86  11:49p
    FNTDEMO1 PAS      5332   2-01-86   2:59p
    FNTDEMO2 COM     14467   2-08-86  11:49p
    FNTDEMO2 PAS      3251   2-01-86   3:00p
    FNTDEMO3 COM     14835   2-08-86  11:52p
    FNTDEMO3 PAS     11329   2-08-86  11:51p
    FNTDEMO4 COM     14901   2-08-86  11:53p
    FNTDEMO4 PAS     11948   2-08-86  10:43p
    FRAKTUR  COM     14462  11-21-86  11:19p
    FRAKTUR  FNT      1024  11-21-86   9:32p
    FRAKTUR  INC      3142  11-21-86   1:24a
    FRAKTUR  PAS      9510  11-21-86   7:22p
    HIASCII  INC      3689  11-21-86  10:35p
    HI_ASCII FNT      1024   2-01-86   1:17p
    JUNIOR16 PAS      3352  12-18-86   6:49p
    LOASCII  INC      3801   1-30-86  11:34p
    LORES    PIC     16384  12-18-86   6:49p
    LO_ASCII FNT      1024   1-05-86   5:44p
    MEDCHARS COM     12306  12-18-86   8:34p
    MEDCHARS PAS      3049  12-18-86   6:49p
    MEMWPROC INC       319   6-25-86  11:05a
    NEWFONT  DOC     18367   2-09-86  10:24p
    NEWFONTS COM     34474   1-12-87   8:15a
    NEWLORES PAS     17783  12-18-86   6:49p
    PHONEMES FNT      1024  12-18-86   6:47p
    SAMPLE1  FNT      1024   2-02-86   1:50p
    SAMPLE10 FNT      1024   2-09-86   6:45p
    SAMPLE11 FNT      1024   2-09-86   5:02p
    SAMPLE12 FNT      1024   2-09-86   5:20p
    SAMPLE2  FNT      1024   2-09-86   5:32p
    SAMPLE3  FNT      1024   2-09-86   5:49p
    SAMPLE4  FNT      1024   2-09-86  12:28a
    SAMPLE5  FNT      1024   2-09-86   5:53p
    SAMPLE6  FNT      1024   2-09-86   1:45p
    SAMPLE7  FNT      1024   2-09-86   1:56p
    SAMPLE8  FNT      1024   2-06-86   1:55a
    SAMPLE9  FNT      1024   2-09-86   1:23p
    TWOHIGH  FNT      1024  12-18-86   6:47p
    USEFONTS LIB      2488   2-01-86   3:08p
           47 file(s)     276185 bytes
                           30720 bytes free
