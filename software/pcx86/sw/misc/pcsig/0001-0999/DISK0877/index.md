---
layout: page
title: "PC-SIG Diskette Library (Disk #877)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0877/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0877"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BARCODE, HYDE, AND DOVETAIL III"

    You've seen them everywhere: on your soda can, at the grocery store, on
    the TV guide -- those groups of lines with numbers under them. BARCODE
    allows you to print these bar code labels on your printer. It is
    designed to print code three of nine, a type of bar code which allows
    both alphabetic and numeric characters. Labels can be printed up to 15
    characters in length.
    
    Define the placement of the bar codes, place a description over each
    code, print single or multiple copies of one bar code, or print a run of
    sequentially-numbered bar codes. BARCODE can hold three different
    printer configurations, and can switch between these configurations with
    one key stroke. The three configurations can be modified to accommodate
    a multitude of printers and are pre-configured for IBM graphics, APA
    graphics, and Epson graphics printers.
    
    Protect your data -- HYDE allows you to hide/unhide files. When you
    hide a file, it won't be accessible by DOS until you use the unhide
    program.
    
    DOVETAIL III merges a form letter with addresses from a mailing list and
    even addresses envelopes.  It works with mailing lists and form letters
    written with WordStar, Easywriter or PerfectWriter.  Source code is in
    BASIC and the executable program file is also included.
    File Descriptions:
    
    IIIDOCMT BAS  BASIC source code of the documentation.
    IIIDOCMT EXE  Compiled version of the documentation.
    IIIDOVE  BAS  The main program in BASIC source code.
    IIIDOVE  EXE  Compiled version of the main program.
    SAMPL*** WS   Sample file written with WORDSTAR (3 files).
    UNWS     EXE  Utility file to remove WORDSTAR buried commands.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CURSOR.TXT

{% raw %}
```


         Here are the programs you have been waiting for...

                           CURSOR UTILITIES

                          (c) 1987 Dan Little

   There are 2 programs included in this package.  These must be kept
   together along with this readme.txt file.  Below is a description of
   each program.

   #1 - CURSOR1.  This program will cause your cursor to grow on you (no
                  pun intended).  Very simply, you press the up arrow key
                  for the next size up, and the down arrow key for the next
                  size down.  Press return when you have the size you want,
                  and you are back in DOS.  You can press the down arrow
                  key until the cursor disappears.  The setting right
                  before this happens is a full size cursor.

   #2 - CURSOR2.  This program gives you complete control of the starting
                  and ending scan lines of the cursor.  Experiment with
                  this a little bit, and you will see some of the different
                  formats your little guy can take on.  Here are a few
                  examples:

                      - Set starting scan to 0, and ending scan to 2.
                        The result is a top heavy cursor.

                      - Set starting scan to 12, and ending scan to 1.
                        The result is a cursor on top, and a cursor on
                        the bottom.

                  You will seriously enjoy using this with a cooperative
                  text editor or word processor (uncooperative software is
                  software that will reset the cursor size on you).


   A few final notes:

       I am using DOS 3.1.  I do not know if this will work with any
       earlier versions (as I do not have any earlier versions), but my
       resource material tells me it should.  If you have questions, or
       suggestions, or a $5.00 payment, you may write to:

                            Dan Little
                            P.O. Box 1443
                            Morgantown, WV  26507-1443

```
{% endraw %}

## DOCMTIII.TXT

{% raw %}
```
                        DOCUMENTATION FOR
                    DOVETAIL III--Release 3.1
                     LABEL III--Release 1.0
                      Written by M.O. Embry
                            May, 1990

DOVETAIL  III--A  program to merge a form letter with  addressees 
from a mailing list and address envelopes.  All of the documenta-
tion applies here.

LABEL III--A program to address labels.  Only page 4 of the docu-
mentation, About Your Mailing List File, applies here.

A DOS-2 or higher operating system is required.

DOVETAIL  III will work with mailing lists and form letters writ
ten using:

         WordStar (if use UNWS.EXE to remove buried commands)
         EasyWriter"
         PerfectWriter (if use space bar instead of tab key)

LABEL III will work with a mailing list written using:

         WordStar (if use UNWS.EXE to remove buried commands)
         EasyWriter"
         PerfectWriter 

A  sample  mailing list,  SAMPLIST.WS,  and two  sample  letters, 
SAMPLET1.WS  and SAMPLET3.WS,  written using WordStar as  a  text 
editor are included on this diskette.

                      ********************

If  you like this program and find it useful,  please send a con-
tribution to:

                    Alternatives to Nationalism
                    c/o M.O. Embry
                    25099 Donegal Ct
                    Newark, CA 94560

......or your favorite worthy cause.

If  you determine text editors other than  Wordstar,  EasyWriter, 
and  PerfectWriter work,  please let me know so they can be added 
to the list.

You may copy this program for distribution to others,  but please 
include the above text.

                                          --M.O. Embry

                      ********************


   ---------------------ABOUT THIS PROGRAM--------------------

This  Program allows you to merge one or more addressees  from  a 
MAILING  LIST  file with a letter from a LETTER file and  address 
envelopes.

                        PROGRAM FEATURES               
          A. LETTERS

               1. Letter, legal, or nonstandard size paper
               2. Standard or nonstandard line spacing
               3. Standard or nonstandard margins
               4. Selection of extra page one margin
               5. Standard or custom salutation
               6. With or without pages numbered
               7. With or without return address
               8. Continuous or pause printing
               9. Selective or batch printing

          B. ENVELOPES

               1. #6, #10, or nonstandard envelopes
               2. Continuous or pause printing
               3. Selective or batch printing

                DETAILED EXPLANATION FOR LETTERS

WHAT IS YOUR PAPER SIZE? (LETTER/LEGAL/NONSTD)
     You type LETTER, LEGAL or NONSTD.  If you select NONSTD, you 
     then  specify  the number of line  spaces  (top  edge-bottom 
     edge) on your paper.

IS YOUR LINE SPACING STANDARD--6 LINES/INCH? (Y/N)
     You type Y if your printer is set for 6 lines/inch. You type 
     N to specify a nonstandard line spacing.

STANDARD OR NONSTANDARD TOP AND BOTTOM MARGINS? (STD/NONSTD):
     Standard  top and bottom margins are,  nominally,  5 and  5, 
     respectively.   If you select NONSTD,  you must then specify 
     your  own  margin size.   In either case,  you must  add  or 
     subtract  your  print head indexing to determine  your  true 
     margins.

HOW MANY EXTRA LINES FOR YOUR TOP MARGIN ON PAGE ONE? (A NUMERAL/NONE)
     This allows you to accommodate your Letterhead,  if any, or to 
     to balance your text on page one.

DO YOU WANT THE PAGES NUMBERED? (Y/N)
     You type Y or N, as you choose.

CONTINUOUS PRINT OR PRINT WITH PAUSE? (CONT/PAUSE)
     You type CONT if your printer is equipped with pin or  trac
     tor feed and you want no pause for positioning of each sheet 
     of paper or each envelope.

SELECTIVE OR BATCH PRINTING OF ADDRESSEES? (SEL/BATCH)
     You type SEL if you want to print addressees, one at a time, 
     in or out of sequence.
     You  type BATCH if you want to print addressees sequentially 
     in batches of a size you then specify.

DO YOU WANT TO USE THE STANDARD SALUTATION? (Y/N)
     You have this choice ONLY when printing in the SEL Mode.
     You  type  Y if you want to use the Salutation  imbedded  in 
     your MAILING LIST file.

     You type N if you want to substitute an informal  salutation 
     for selected addressees.

                  DETAILED EXPLANATION FOR ENVELOPES

STANDARD ENVELOPES ARE: SMALL=#6; LARGE=#30
WHICH WILL YOU BE USING? (#6/#10/NONSTD):
     If  you select NONSTD,  you must then specify the number  of 
     line spaces (top edge-bottom edge) on your envelopes.

DO YOU WANT TO PRINT YOUR RETURN ADDRESS? (Y/N)
     You  type Y if you want to print the return address imbedded 
     in your MAILING LIST file.  You type N if your envelopes are 
     already printed or stamped with your return address.


    ------------------ABOUT YOUR LETTER FILE-----------------

     The DOVETAIL program works with the following text editors:
               EasyWriter--WordStar--PerfectWriter

     If you print your letter using WORDSTAR, you must remove the 
     buried commands that exist in the WordStar text.

     To  do that you call up the UNWS program furnished with  the 
     diskette.   For example,  if your text is in Drive A,  after 
     the  A> you enter the command UNWS <CR>,  where <CR>  stands 
     for carriage return.

     The UNWS program then asks for the input file name.
     You enter YOURFILE.TXT (if that is the name of your file).

     The UNWS program then asks for the output file name.
     You  enter NEWFILE.TXT (or any appropriate name).   You then 
     delete YOURFILE.TXT and rename NEWFILE.TXT=YOURFILE.TXT

     ------You MUST put a .) after the body of your letters-----
                      (See sample letters)
     This avoids having your complimentary close and your  signa
     ture appearing on the last page by themselves.  The last two 
     lines in the body of the letter will appear there with them.
     ---DON'T call for any underlining of words in your letter---


   ---------------ABOUT YOUR MAILING LIST FILE---------------

     Again, if your MAILING LIST file is written using WORDSTAR, 
     you must use the procedure outlined above to remove the bur-
     ied commands.

     Your MAILING LIST File must conform with the following:
                       -------NOTES-------
       1. RET precedes your return address information.
       2. A numeral and an asterisk precedes each addressee's name.
          (Numerals may be skipped but must be in numerical order.)
       3. A hyphen follows the locale and zip code.
       4. No line spaces can be left blank.

     FOR EXAMPLE:

                FILE -MAILIST- ON DISKETTE NO. XX
     RET
     Your name
     Your title (if any)
     Your firm name (if any) or c/o So-and-So (if applicable)
     Your street address, Apt. No. (if applicable)
     Your locale and zip code
     -
     1*
     Addressee's Name
     Title (if any)
     Firm name (if any) or c/o So-and-So (if applicable)
     Street address, Apt. No. (if applicable)
     Locale and zip code
     -
     Salutation:
     3*
     Tom Jones
     999 Elm Ave.
     Any Town, Any State 99999
     -
     Dear Mr. Jones:
     4*
     Mr. John Doe, Jr.
     Vice President
     AAA Manufacturing Co.
     2222 Main St., Bldg. C
     Silicon City, Calif. 94501
     -
     Dear Mr. Doe:
     5*
     Ms. Mary Smith
     etc.

                      ********************

                      END OF DOCUMENTATION
```
{% endraw %}

## FILE0877.TXT

{% raw %}
```
Disk No:  877                                                           
Disk Title: Barcode, Hyde, and Dovetail III                             
PC-SIG Version: S2.2                                                    
                                                                        
Program Title: BarCode                                                  
Author Version: V2.5                                                    
Author Registration: $25.00                                             
Special Requirements: Printer.                                          
                                                                        
You've seen them everywhere: on your soda can, at the grocery store, on 
the TV guide -- those groups of lines with numbers under them.  BARCODE 
allows you to print these bar code labels on your printer.  It is       
designed to print code three of nine, a type of bar code which allows   
both alphabetic and numeric characters.  Labels can be printed up to    
15 characters in length.                                                
                                                                        
Define the placement of the bar codes, place a description over each    
code, print single or multiple copies of one bar code, or print a run of
sequentially-numbered bar codes.  BARCODE can hold three different      
printer configurations, and can switch between these configurations with
one key stroke.  The three configurations can be modified to accommodate
a multitude of printers and come pre-configured for IBM graphics, APA   
graphics, and Epson graphics printers.                                  
Program Title: Hyde                                                     
Author Version: V2.5                                                    
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
Protect your data -- HYDE allows you to hide/unhide files.  When you    
hide a file, it won't be accessible by DOS until you use the unhide     
program.                                                                
Program Title: Dovetail III                                             
Author Version: 3.1                                                     
Author Registration: User determined.                                   
Special Requirements: Printer.                                          
                                                                        
DOVETAIL III merges a form letter with addresses from a mailing list and
even addresses envelopes.  It works with mailing lists and form letters 
written with WordStar, Easywriter or PerfectWriter.  Source code is in  
BASIC and the executable program file is also included.                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║      <<<<  Disk No 877  BARCODE, HYDE & CURSOR, DOVETAIL III  >>>>      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation for BARCODE to your printer, Type:            ║
║                        COPY BARCODE.DOC PRN (press enter)               ║
║ To start BARCODE, Type: BARCODE  (press enter)                          ║
║                                                                         ║
║ To copy the documentation for CURSOR to your printer, Type:             ║
║                        COPY CURSOR.TXT PRN (press enter)                ║
║ To start CURSOR, Type: CURSOR1 or CURSOR2 (press enter)                 ║
║                                                                         ║
║ For instructions on the HYDE program, Type: GO (press enter)            ║
║                        COPY README.TXT PRN (press enter)                ║
║ To start HYDE, Type: HYDE (press enter)                                 ║
║                                                                         ║
║ To copy the documentation for DOVETAIL III, Type:                       ║
║                         COPY DOCMTIII.TXT PRN (press enter)             ║
║                                                                         ║
║ To start DOVETAIL III, Type:  DOVEIII (press enter)                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GO1.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║      <<<<  Disk No 877  BARCODE, HYDE & CURSOR, DOVETAIL III  >>>>      ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation for BARCODE to your printer, Type:            ║
║                        COPY BARCODE.DOC PRN (press enter)               ║
║ To start BARCODE, Type: BARCODE  (press enter)                          ║
║                                                                         ║
║ To copy the documentation for CURSOR to your printer, Type:             ║
║                        COPY CURSOR.TXT PRN (press enter)                ║
║ To start CURSOR, Type: CURSOR1 or CURSOR2 (press enter)                 ║
║                                                                         ║
║ For instructions on the HYDE program, Type: GO (press enter)            ║
║                        COPY README.TXT PRN (press enter)                ║
║ To start HYDE, Type: HYDE (press enter)                                 ║
║                                                                         ║
║ To copy the documentation for DOVETAIL III, Type:                       ║
║                         COPY DOCMTIII.TXT PRN (press enter)             ║
║                                                                         ║
║ To start DOVETAIL III, Type:  DOVEIII (press enter)                     ║
╚═════════════════════════════════════════════════════════════════════════╝
(c)Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## README.TXT

{% raw %}
```


    HYDE Utilities   V 2.0  (c) 1987 Dan Little under copyright laws of U.S.
    CURSOR Utilities V 1.0  (c) 1987 Dan Little under copyright laws of U.S.



    This is an upgrade for HYDE utilities.  The first versions display
    was distorted on genuine IBMs.  I have corrected this problem,
    and it works marvelous.

                      Type GO for an overview.



    I have also included another set of programs for the cursor.  While
    working in some programs, you may have trouble finding your cursor.
    This program solves this problem.  You can modify the cursor to be
    as large or as small (even invisible) as you wish.

    Documentation is included on this disk in a file called cursor.txt.



         FEES for these programs are:

                HYDE Utilities      $ 10.00
              CURSOR Utilities      $  5.00


           Forward payment to:

                 Dan Little
                 P.O. Box 1443
                 Morgantown, WV  26507-1443


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0877

     Volume in drive A has no label
     Directory of A:\

    DOVEIII  EXE     54016   1-01-80   1:08a
    SAMPLET3 WS       1536   1-01-80  12:07a
    SAMPLIST WS        896   1-01-80  12:33a
    UNWS     EXE      2816   8-17-82  10:32a
    SAMPLET1 WS        896   1-01-80  12:04a
    DOCMTIII TXT      7936   1-01-80  12:11a
    BARCODE  DOC     25163   3-02-90   4:43p
    BARCODE  EXE    101984   3-02-90   4:53p
    BARCODE  REG      1089   3-02-90   4:42p
    CURSOR   TXT      2149   9-17-87   8:18a
    CURSOR1  COM      1448   9-14-87   1:56p
    CURSOR2  COM      1368   9-17-87   1:09p
    GO       COM      2310   9-17-87   8:08a
    GO       TXT      1541   1-17-90   1:01p
    GO1      BAT        39   3-21-90  11:21a
    GO1      TXT      1575   7-09-90  12:17a
    HYDE     COM      2599   9-17-87   8:04a
    HYDIR    COM      2707   9-14-87   1:11p
    README   TXT      1026   9-17-87  12:26p
    RUN      BAT        38  10-19-87   3:56p
    UNHYDE   COM      2602   9-17-87   1:10p
    FILE0877 TXT      3405   7-09-90   6:12p
           22 file(s)     219139 bytes
                           91136 bytes free
