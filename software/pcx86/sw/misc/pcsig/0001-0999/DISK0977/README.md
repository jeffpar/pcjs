---
layout: page
title: "PC-SIG Diskette Library (Disk #977)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0977/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0977"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROINDEX - A DATABASE"

    Writers, Students, Editors -- PROINDEX lets you negotiate the most
    problem-filled part of writing a document or book: building the index.
    
    PROINDEX saves you the trouble of having to handmark each and every word
    you want in your index.  You simply provide a file of words listing the
    keywords you want to be in your index, and PROINDEX searches your
    document and marks all occurrences of those keywords.  Works with any
    ASCII text file (as well as WordStar files).
    File Descriptions:
    
    PROTEST  KEY  Example keyword file.
    PROTEST  TXT  Example document file.
    PROINDEX DOC  On disk documentation.
    PROINDEX EXE  Main program.
    ADMINESE TXT  Sample text file.
    REVADMIN TXT  Sample text file.
    AUTOEXEC BAT  Start-up batch file.
    STUDNESE TXT  Sample text file.
    STPAUL   TXT  Sample text file.
    REVTEACH TXT  Sample text file.
    REVSTUD  TXT  Sample text file.
    UNWS     EXE  ASCII utility.
    UNWS     DOC  Documentation for UNWS.EXE.
    TEACHESE TXT  Sample text file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0977.TXT

{% raw %}
```
Disk No:  977
Program Title:  PROINDEX
PC-SIG version: 2

PROINDEX makes an index for a document.  It saves you the trouble of
having to hand mark each and every word you want in your index.  You
simply provide a file of words you want in your index, and PROINDEX
searches your document and marks all occurrences of those keywords.
PROINDEX works with any ASCII text file (as well as WordStar files).

Usage:  Database.

Special Requirements:  Printer (optional).

How to Start:  Type GO (press enter).

Suggested Registration:  $65.00

File Descriptions:

PROINDEX DOC  Program documentation.
PROINDEX EXE  Main program.
PROTEST  KEY  Example keyword file.
PROTEST  TXT  Example document file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<   Disk No 977 PROINDEX   >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for ProIndex, Type: MANUAL (press enter)     ║
║                                                                         ║
║ To view the documentation on your srceen, type: VIEW (press enter)      ║
║                                                                         ║
║ To run the program ProIndex, Type: PROINDEX (press enter)               ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PROINDEX.DOC

{% raw %}
```















                              P P O I N D E X






                               Version 2.23





                Copyright 1985, 1986, 1987 by Gary Elfring








































                               INTRODUCTION

     Do you need to create an index for the back of your book, thesis, 
     report,  or  software manual?   Do your legal briefs or court re-
     ports  need indexes?   Now there is an easy way to index an  word 
     processed document.  PROINDEX will perform all the work necessary 
     to make an index.

     PROINDEX  takes your text file along with a list of  keywords  or 
     phrases  and looks for matches between the two.   It produces  an 
     index  in any one of numerous different styles,  including  those 
     suggested by "The Chicago Manual of Style".  There is no limit on 
     the  length  of your text file or the number of keywords in  your 
     list.  The resulting index can be saved as a text file or sent to 
     the printer.

     PROINDEX will run automatically or interactively.   In the inter-
     active  mode  it shows you each match to a keyword or  phrase  in 
     context.   You  control which entries are marked in  your  index.  
     PROINDEX  will  produce  an index that references  absolute  line 
     numbers,  page numbers, or page and line numbers.  The program is 
     compatible with all major word processors.  True secondary refer-
     ences are also possible using PROINDEX in the interactive mode.

     Other  features include:  indexing sessions can be halted at  any 
     time and then restarted where you left off,  full path support, a 
     configuration  file controls your indexing style.   User  select-
     able: starting page number of text, multiple or single references 
     per page,  string to preceed each page number,  page / line /  or 
     page and line references, lines per page, case conversion, 7 or 8 
     bit ASCII, interactive or batch mode.



































                                 SHAREWARE

     This program is provided on a "shareware" basis!  Try the program 
     out.   If you don't like it- erase it.  If you do like it we hope 
     you  will pay for it.   The shareware contribution mentioned here 
     is 30% less than the retail price of this package. Thus shareware 
     users  get the exact same program as commercial users  only  they 
     pay less.

     NOTE that the utilities mentioned further in this document do NOT 
     come with the "shareware" version of the program.  Only register-
     ed users get the utilities programs mentioned here.  (This is the 
     incentive  to  send in your registration fee.)  To register  send 
     $65.00 to:

     Gary Elfring
     4N899 West Mary Drive
     St. Charles, Illinois, 60174

     PLEASE mention the product name, (PROINDEX), and where you got it 
     from.   You will then receive:  the latest version of the program 
     (including  all the missing utilities and any new ones  we  dream 
     up),  improved typeset documentation,  telephone support, and one 
     free update.


                                 WARRANTY 

     NONE!!  No warranty is provided to anyone who has not contributed 
     for this program.   Gary Elfring specifically disclaims all other 
     warranties,  expressed or implied,  including but not limited to, 
     implied warranties of merchantability and fitness for a  particu-
     lar purpose with respect to defects in the disk or documentation, 
     and  the program license granted herein.   In no event shall Gary 
     Elfring be liable for any loss of profit or any other  commercial 
     damage,  including but not limited to special, incidental, conse-
     quential, or other damages.





























                             Table of Contents

     INTRODUCTION.................................................  1

     CREATING AN INDEX............................................  3
       Index Styles...............................................  4

     PREPARING YOUR TEXT..........................................  7
       General....................................................  7
       Non-ASCII Indexes..........................................  8 

     MAKING A KEYWORD FILE........................................  10
       General....................................................  10
       Creating the Keyword File..................................  11

     INDEXING TECHNIQUES..........................................  12
       Interactive Control........................................  12
       Page Breaks................................................  13
       Keyword Tips...............................................  13
       Secondary References.......................................  14

     CONFIGURATION................................................  16

     OPERATION....................................................  19
       Getting Started............................................  19
       Opening Screen.............................................  19
       Data Entry.................................................  19
       Program Operation..........................................  20
       Executing MS-DOS Commands..................................  23
       PROINDEX Control Parameters................................  24
       Indexing...................................................  29

     OUTPUT.......................................................  31

     PROGRAM SPEED................................................  34

     UTILITY PROGRAMS.............................................  36
       COMMON.TXT.................................................  36
       MAKEWORD...................................................  36
       MERGE......................................................  37
       PAGE.......................................................  39
       REMOVE.....................................................  41
       SORT.......................................................  41
       STRIP......................................................  42

     PROBLEMS.....................................................  43
       Getting Started............................................  43
       PROINDEX Misses References.................................  43
       Paging Problems............................................  44
       Error Messages.............................................  44

     DEMONSTRATION FILES..........................................  47














                             Table of Contents

     MENU SCREENS.................................................  49
       Opening Screen.............................................  49
       Input File Names Entry.....................................  49
       Main Menu..................................................  50
       Index Control Parameters...................................  50
       Interactive Indexing Menu..................................  51
       MS-DOS Command Menu........................................  51
       The Configuration File.....................................  52
























































                               INTRODUCTION 

     The PROINDEX program is a software tool designed to produce an 
     index of your word processed documents. An index is an 
     alphabetical list of names, subject, references, etc. together 
     with the position each appears in the text. This index usually 
     appears at the end of a book or publication. The exact format or 
     style of this index can be selected by the user. 

     PROINDEX will create an index from almost any kind of text file. 
     All that is needed is your original text file and a list of 
     keywords or phrases. PROINDEX compares this reference list with 
     your original text file and marks each keyword it finds in an 
     index. Utilities are provided that will automatically prepare a 
     reference list for you if you don't want to create your own. The 
     resulting index can be paged by a utility supplied along with 
     PROINDEX or it can be customized by you with your word processor. 

     Please note that PROINDEX does require some work on your part 
     before you can create an index. Your original text file must be 
     paged and you must create a list of keywords or phrases. In 
     addition, text files created by certain word processors must be 
     converted to an ASCII format. 

     During the indexing process you can exercise control over which 
     references are included in your index by running the program in 
     interactive mode. In this mode, PROINDEX shows you each reference 
     word in context and lets you chose whether to mark it or not. If 
     you want all references included in your index automatically, you 
     can run PROINDEX in the automatic mode. 

     PROINDEX will handle almost any type of text file, including 
     those produced by WordStar and most other word processors. There 
     is no limit on the size of a text file to be indexed or on the 
     number of references to search for. PROINDEX is designed to 
     perform as much of the indexing task as possible automatically, 
     since that is what a computer is good at. 

     In operation, PROINDEX generates temporary working copies of your 
     input text and keyword files. PROINDEX requires an amount of free 
     disk space equal to your text file size plus keyword file size. A 
     little more space is required when the output of PROINDEX is 
     directed to the disk. The program checks the amount of free disk 
     space before it makes these temporary work files and lets you 
     know if there is not enough room. You can specify a separate work 
     drive if you need more disk space. Temporary files are always 
     erased before the end of a PROINDEX run. 

     PROINDEX has several limitations. No keyword or phrase may be 
     longer than 70 characters in length. Also, PROINDEX will not 
     locate phrases that wrap from one line to the next. An index 
     references absolute pages in your text, and thus the input to 
     PROINDEX must be paged in some way. With most word processors you 
     can simply print your text to a disk file. PROINDEX will then 
     count lines to determine what page it is on. An alternate paging 


                                     1








     method is to mark the end of each page with any single 8 bit 
     character you chose. This gives you indexing compatibility with 
     documents that do not follow the paging format of your word 
     processor. 

     PROINDEX will not correctly display text in the interactive mode 
     if the text lines are longer than 80 characters. This problems 
     does not effect the operation of PROINDEX or the quality of your 
     index. It only concerns the display. If lines are longer than 80 
     characters the IBM BIOS will wrap the lines on the screen and 
     PROINDEX will lose track of where it is on the screen. The only 
     fix for this problem significantly slows down the operation of 
     PROINDEX. Since the problem does not effect the final index we 
     have left it in to avoid slowing PROINDEX down. 

     PROINDEX requires an IBM PC or compatible computer to run. It 
     needs a minimum of 192K of memory, one disk drive, and MS-DOS 
     version 2.1 or higher. PROINDEX performs BIOS calls to interrupt 
     10H, video control, and thus may not work on all IBM compatibles. 
     A special version of PROINDEX is available that uses the ANSI 
     screen driver to bypass this problem. The ANSI version is slower 
     in operation. The maximum file size that can be indexed is 
     limited only by the amount of available disk space. Hard disk or 
     large RAM disks are recommended when indexing files greater than 
     180K bytes long. 
































                                     2








                             CREATING AN INDEX 

     Creating an index from scratch is not as easy a task as it seems. 
     The quality of an index is related to two different items. It 
     depends on how good the reference list is and how well this 
     reference list is compared to the text. PROINDEX will take care 
     of the later problem for you. This only leaves the problem of 
     creating a good reference list. 

     There are two basic approaches to creating a reference list. One 
     approach is to have the author of the document make up a list of 
     keywords or phrases. This list can be added to as the indexing 
     process continues. This approach has the disadvantage that it can 
     miss entire subjects that should be in the index. That is because 
     this approach relies on human memory. 

     A second approach is to use a set of software tools to turn the 
     original text file into a sorted list of unique words. We supply 
     two utilities, MAKEWORD and REMOVE, to do this work automatical-
     ly. This list is then used as the basis for a reference list. It 
     can be added to and modified by the document author. PROINDEX 
     supports this approach by supplying a set of indexing tools that 
     will build and maintain this sorted list of unique words for you. 

     Once a reference list exists the style of the index must be 
     chosen. The simplest index style lists all references in alphabe-
     tical order. All chapters in the document are numbered sequen-
     tially. The completed index simply lists the page number each 
     reference can be found on. When a citation is found more than 
     once on a page only one reference to that page will be put into 
     the index. A typical example of this style index looks as 
     follows: 

     All command, 15 
     BIOS calls, 1 
     Bold display, 14, 34 
     Data entry, 13, 23 
     Delete key, 6, 9, 14 
     IBM PC, 1, 5, 7 
     Line numbers, 3, 5, 7 

     A slightly more advanced form of index would illustrate when a 
     citation covers more than one page. Assume that the reference Ape 
     is discussed in your text on pages 12 through 15. PROINDEX would 
     produce the following citation: 

     Ape, 12, 13, 14, 15 

     Why doesn't PROINDEX automatically turn this citation into the 
     more correct form, Ape, 12 - 15 ? The answer is, PROINDEX does 
     not know the context of the text. It is possible that there were 
     four separate references to Ape on those four pages. In that case 
     listing each page number separately would be the correct form. 
     Thus, you must decide which form is correct and edit in the 
     change, if any, with your word processor. 


                                     3









     Other index styles are also supported by PROINDEX. Some indexes 
     assume each chapter of text starts with page number one. The page 
     references in this type of index must delineate which chapter 
     they represent. This is done by assigning the chapters individual 
     numbers, characters, or names. Assuming each chapter was assigned 
     a sequential number, chapter one gets number 1, this index style 
     would look as follows: 

     Remarks, 3-39
     Root directory, 5-7, 7-6
     Screen, 2-5
     Segments, 4-6, 4-9
     System devices, 2-5
     Text files, 7-123, 8-5 

     A legal index style might be completely different. These indexes 
     typically must show both page and line numbers of a citation or 
     reference. PROINDEX lets you chose any character you want to 
     separate page numbers from line numbers. In addition, multiple 
     references per page must be allowed. Assuming you chose the ":" 
     character the index in this style would look as follows. 

     Atwell vs Drumond, 6:3, 6:14 
     Automobile, 9:23, 13:56, 19:7 
     Ford Pinto, 1:3, 3:5, 3:29, 3:46 
     Supreme Court, 19:7 

     Once an index style has been selected, you can run the PROINDEX 
     program. From the main menu of the program you can select the 
     index control parameter menu. Here you can configure PROINDEX to 
     produce an index in the style you want. Once the questions on 
     this menu have been answered you can begin the actual indexing 
     process. 

     PROINDEX typically sends its output to a disk file. Once PROINDEX 
     has completed indexing your text you will have to polish or 
     finish the resulting file. This can be done in one of two ways. 
     Either you can import the index into your word processed text and 
     edit it to what ever form you desire, or you can use one of the 
     utilities we provide to do this work for you. 

     For instance, if the chapters were indexed separately you would 
     run the MERGE utility to combine the separate indexes into one 
     master index. Then use SORT to ensure your index is in 
     alphabetical order. Finally, the PAGE routine will put top and 
     bottom margins in your index. For details on the operation of 
     these utilities see the chapters that describe each utility. 


     Index Styles 

     To help you choose an indexing style a number of different sample 
     indexes are shown below. Each sample index also shows the 
     settings of the index control parameters. These control 


                                     4








     parameters are fully explained in the OPERATION section of this 
     manual. Since there are 14 different control parameters only the 
     values needed to create each sample index are shown below. All 
     values are shown in the order they appear on the index control 
     parameters menu. 


               Primary References with Standard Page Numbers 

     All command, 15 
     Backslash character, 10 
     BIOS calls, 1 
     Bold display, 14, 34 
     Data entry, 13, 23 
     Delete key, 6, 9, 14 

     [1] [N] [N] [0C] [ ] [P] [P] [:] [66] [Y] [N] [D] [T] [Y] 



         Primary and Secondary References, Page Numbers Inclusive 

     Options, 1, 9 - 15 
     Page, 
     ending, 5, 12 
     length, 5, 11 
     numbers, 2, 4, 5, 11 
     Path names, 6, 8 - 11, 13 
     Quit, 
     command, 15 
     program, 14, 19 
     RAM disk, 1, 8 

     [1] [N] [N] [0C] [ ] [P] [P] [:] [66] [Y] [N] [D] [T] [Y] 



                   Numeric Chapter with Page References 

     Remarks, 7-39 
     Root directory, 5-7, 7-6 
     Screen, 2-5 
     Segments, 9-6, 9-9 
     System devices, 2-5 
     Text files, 7-123, 8-15 

     [1] [N] [N] [0C] [9- ] [P] [P] [:] [66] [Y] [N] [D] [T] [Y] 










                                     5








                  Alphabetic Chapter with Page References 

     close, A.6, B.9 
     graph, B.9, D.17 
     pages, A.5, A.9, A.23 
     read, C.4, D.9 
     sort, D.5, F.172 
     wait, A.1 

     [1] [N] [N] [0C] [F. ] [P] [P] [:] [66] [Y] [N] [D] [T] [Y] 



                         Absolute Line References 

     big, 23, 145, 876 
     cute, 1254, 3478 
     end, 12, 534, 95687 
     funny, 45, 897 
     little, 142, 23754 
     small, 9832 

     [1] [N] [N] [0C] [ ] [L] [P] [:] [66] [Y] [N] [D] [T] [Y] 



        Page and Line References with Multiple References per Page 

     at, 6:3, 6:14, 8:52 
     ape, 3:4, 5:15 
     dog, 7:1, 7:4, 7:23 
     egg, 5:5, 5:8 
     fire, 2:3, 4:14 
     gold, 8:9, 8:56 

     [1] [Y] [N] [0C] [ ] [B] [T] [:] [66] [Y] [N] [D] [T] [Y] 





















                                     6








                            PREPARING YOUR TEXT 

     General 

     Some preparatory work must be done on your text file before 
     PROINDEX will be able to index it. The amount and type of work to 
     be done depends on the particular word processor that you are 
     using. This section gives a general view of what must be done for 
     most word processors. Specific instructions for some popular word 
     processors can be found at the end of this section. 

     In an ideal world there would be a single word processor and 
     PROINDEX would handle its files without any work on your part. 
     Unfortunately, there are many different word processors and each 
     seems to save its files in its own particular way. To index text 
     properly PROINDEX needs to see text in a specific format. How you 
     get your text into the right format depends on your particular 
     word processor. 

     Word processors can be classified into one of two different 
     groups. Each group saves its files in a different format. The 
     first group saves its text files as ASCII, or something close, 
     with no special or header information. The second group appends 
     special, usually binary, information to the beginning of a text 
     file. 

     How can you tell what group your word processor belongs to? 
     Generally, if you can use the MS-DOS TYPE command to display a 
     text file on your screen you have a Group 1 word processor. Note 
     that even though your text looks weird WordStar is a Group 1 word 
     processor. Examples include:  PC-Write, WordStar. 

     If strange things happen when you try this test you have a Group 
     2 word processor. Examples include:  MultiMate, WordStar 2000. 
     You need to know what type or group of word processor you have to 
     prepare your text for indexing. 

     PROINDEX requires that the text to be indexed must be paged in 
     some manner. PROINDEX does not understand any particular word 
     processor's paging commands. How do you page your text? With 
     almost all modern word processors this is an easy task. Simply 
     instruct your word processor to print the text file to disk. The 
     resulting disk file is properly paged and header information will 
     have been removed. 

     What if you can't print the text file to disk? PROINDEX supports 
     a second option for determining where page breaks occur. You can 
     select any single 8 bit character and use it to mark the end of 
     each page. Using this method you first go through your original 
     text file and insert a special character at the end of each page. 

     Next you must know what group your word processor belongs to. If 
     you have a Group 1 word processor skip the rest of this 
     paragraph. If you have a Group 2 word processor you will still 
     need to print your text file to disk before it can be used. Doing 


                                     7








     this removes the header information appended to your text file. 
     It also adds extra lines and page breaks but these will be 
     ignored by PROINDEX. 

     You are now just about ready to index your text. Before you can 
     index it you will need a keyword file- see the section on these 
     files that follows. You must also tell PROINDEX how it will 
     determine where page breaks occur. If you want an index that 
     matches your word processed document you must tell PROINDEX how 
     many lines of text constitute one page. Typically this is 66 
     lines for a standard 8 A by 11 inch page. However, this number 
     can be varied for different sizes of documents. 

     If you are using special characters to mark the end of a page you 
     must indicate this for PROINDEX. You will have to tell PROINDEX 
     this is the way to determine page breaks and what the special 
     character will be. The number of lines per page will not matter 
     in this case. All this information will be entered on the index 
     parameters menu page. 

     PC-Write. Group 1, No special instructions are required for PC-
     Write. This word processor saves its files in straight ASCII. 
     Simply print the text file to disk to page it or mark the end of 
     each page with a special character and use the file as it stands. 
     When printing a file to disk PC-Write typically appends a form 
     feed, control-L or i, to the end of each page. You can use this 
     as your special character to end each page. 

     WordStar. Group 1, WordStar uses the most significant bit, MSB, 
     of each character for its own purposes. While this makes your 
     text look strange, PROINDEX can handle this text without any 
     problems. Simply print the text file to disk to page it. 
     Optionally use the special character to mark the end of a page 
     and PROINDEX can handle the original text file directly. 

     Microsoft Word, MultiMate, Pfs: Write, WordStar 2000. Group 2, 
     These word processor save special header information at the 
     beginning of a file. All files must be printed to disk before 
     they can be used. 

     Display Writer. Group 2, This word processor saves special header 
     information at the beginning of a file. In addition, the files 
     are saved in a non-ASCII form. All files must be printed to disk 
     with the convert to ASCII option before they can be used. 


     Non-ASCII Indexes 

     A number of people have been using PROINDEX to index files that 
     are not in ASCII. This includes things like mathematical symbols, 
     Hebrew, and early bronze age hieroglyphics. In all these cases 
     they equate an ASCII character to one of their own special 
     characters. 

     PROINDEX will index non-ASCII files just as it does ASCII files. 


                                     8








     However, there are certain restrictions and requirements that 
     must be observed for the special case of non-ASCII files. First, 
     you should not use PROINDEX in the interactive mode with a non-
     ASCII file. PROINDEX sends characters straight to the screen in 
     this mode and non-ASCII characters will not look like much on 
     your screen. 

     Second, if you are using a Group 2 word processor you must 
     convert your disk file by printing it to disk. This removes 
     header information from the beginning of the file. 

     Finally, indexing non-ASCII files implies you are printing these 
     files in some special way. You might be typesetting them or using 
     a program like Fancy Font for instance. Remember that these 
     printing programs work like typesetters and thus there is no 
     correlation between lines of text in the file and the printed 
     output. You must use a special character to mark the end of each 
     page of text. 

     Important notes. When you are trying to index a file that is not 
     in ASCII it is important to remember to turn off the case 
     conversion feature. Otherwise all "a" characters will be 
     converted and compared to all "A" characters. This is probably 
     not what you wanted. 

     If you are using the full eight bits available for a character 
     you must also remember to disable the "strip 8th bit" feature. 
     Otherwise a character represented by the number 0FFH, 255 
     decimal, will seem the same as one represented by 7FH, 127 
     decimal to PROINDEX. 



























                                     9








                           MAKING A KEYWORD FILE 

     General 

     PROINDEX needs a list of keywords or phrases to run. You must 
     create this list before you attempt to index your text. We feel 
     creating a keyword file is easier than marking all the references 
     in your text file. So, how do you create this keyword file? 

     The format of the keyword files is very important. The PROINDEX 
     program expects to see a single keyword or phrase on each line of 
     the keyword file. A line ends with a carriage return / line feed, 
     f, combination. PROINDEX searches for an exact match to the 
     keyword. Thus to find plurals or slight variations in spelling of 
     a keyword or phrase it is best to shorten the keyword down to the 
     lowest common set of characters possible. See the previous 
     section on Indexing Techniques for more details. A keyword file 
     would look something like this: 

     Accuracy 
     Assembly language 
     Basic 
     (space)C(space) 
     (space)debug 
     EPROM 
     ejump 
     High level language Input 
     Key phrase 
     Macro 
     Macro 
     Macro 
     PL/M 

     Some quick comments about this file will probably help you to 
     understand it a little better. First, case is usually ignored by 
     the program its only use is for your convenience. The program 
     will pay no attention to it, unless you instruct it to. 

     Locating certain words is quite difficult for a program. For 
     example, finding C, as in the C programming language, can cause a 
     problem. If just the single letter C is to be searched for the 
     majority of your matches will be incorrect. The easy way around 
     this is to add a space before and after the letter C in your 
     keywords list. This forces the program to search for eCe, a more 
     reliable indicator of the word C. 

     Finally, to catch all references to debugging a program a keyword 
     of edebug might be used. This will catch all words that start 
     with the letters DEBUG. This includes debug, debugs, debugging, 
     etc. The same rule applies to plurals. All extra letters should 
     be left off of keywords. 

     Note that no keyword or phrase may be longer than 70 characters. 
     Keywords or phrases longer than this will automatically be 
     truncated to 70 characters in length. The remaining characters 


                                    10








     from that keyword will be used as the next keyword. No keywords 
     will be lost by this process. One keyword will be shortened, and 
     an additional junk keyword will be created. 

     Each time PROINDEX completes a search through your entire text 
     file for a keyword it will produce a pleasant warbling sound on 
     your computer speaker. This lets you know that you have finished 
     a given keyword search without having to shift your view to the 
     keyword list. This feature is especially important when using a 
     number of identical keywords to search for slightly different 
     references, secondary references. 


     Creating the Keyword File 

     The format of a keyword file is more critical than that of a text 
     file. PROINDEX expects to find a disk file containing a number of 
     lines of text. Each line of text has one keyword or phrase 
     followed by a carriage return / line feed pair, f. Keyword files 
     must be written in ASCII unless you run intend to run PROINDEX in 
     the non-interactive mode. 

     If you are using a Group 1 word processor your keyword file 
     should be acceptable to PROINDEX. If you are using a Group 2 word 
     processor you must convert the file to ASCII. Most Group 2 word 
     processors offer this option. For an explanation of Group 1 & 2 
     word processors see the previous section. Note that a keyword 
     file that has been printed to disk with page breaks will not work 
     correctly with PROINDEX. 

     If your word processor will not let you convert your file to 
     ASCII, or you can not use it to create a straight ACSII file, you 
     can use the EDLIN text editor that came with your version of the 
     MS-DOS operating system. This program will produce an ASCII 
     keyword file. 

     Some word processors end a text file with the control-Z character 
     while others do not. Note that PROINDEX does not care whether a 
     file ends with a control-Z. This character will simply be ignored 
     if it is present. 

















                                    11








                            INDEXING TECHNIQUES 

     Using a computer to generate an index is much faster than 
     indexing by hand. Computer indexing is also a significantly 
     different process than hand indexing. The human brain does a 
     wonderful job of selecting references by context. A computer 
     selects citations based on an exact pattern match. These 
     differences in indexing technique are significant. The following 
     section details a number of techniques that are useful in 
     computer indexing. 


     Interactive Control 

     PROINDEX will work in either an automatic or interactive mode. 
     The automatic mode is only suitable for finding exact matches to 
     your references. In general, the automatic mode is used by 
     lawyers, court reporters, and researchers. These people are only 
     interested in precise matches to a reference. For everyone else 
     the interactive mode will probably produce a better index. 

     Why should a computer program, that is supposed to do your work 
     for you, require interactive input? The answer is quite simple. 
     The process of creating an index requires human input concerning 
     the context each reference is found in. There is an entire 
     profession of people that make indexes for authors. If it were 
     possible to replace these people with a computer program it would 
     have been done a long while ago. 

     So what does PROINDEX do for you? It performs all the mechanical 
     aspects of indexing. PROINDEX will find all references to a 
     keyword or phrase for you. In the interactive mode, however it is 
     up to you, the author, to decide whether or not to include each 
     reference in your index. You make this decision by viewing each 
     keyword or phrase in context. 

     How about a simple minded, but well-intentioned, example? Suppose 
     you have written a book on English usage. Now you want an index 
     entry for the section on prepositions where the word "the" is 
     discussed. If your keyword list simply says find all references 
     to "the" your index will be useless, and exceedingly long. You 
     want to find specific references to the word "the". 

     PROINDEX locates all references to a given keyword or phrase and 
     asks you whether or not to include each one. Of course you would 
     have to be out of your mind to put the word "the" in a keyword 
     list. You would spend the rest of your life answering PROINDEX's 
     "Mark this reference?" question. 

     The interactive control of PROINDEX gives you four different 
     options each time it locates a reference. You can mark or bypass 
     each specific citation. You can also skip all further references 
     to that keyword or mark all further references. These options 
     give you complete control over the indexing process. 



                                    12








     Page Breaks 

     Another problem with indexing concerns the form of the text you 
     want to index. If your index page or line references are to have 
     any meaning they must refer to real page or line numbers. The 
     easiest way to do this is to instruct your word processor to 
     print your text file to disk. Use the printed text file as input 
     to PROINDEX and tell PROINDEX how many lines there are per page 
     of text. Normally 66 lines per page. 

     Other word processors mark the end of each page with a special 
     character. With this type of text simply tell PROINDEX what 
     character each page ends with. PROINDEX will then correctly find 
     the page breaks in your document. 

     There are also times when you will want to mark page breaks in 
     text yourself. Suppose you are going to typeset a word processed 
     document. The page breaks for the typeset document will not match 
     the page breaks for the word processed document. Yet you want the 
     finished index to match the paging of the typeset document. 

     In this case you should typeset the document before indexing it. 
     Once the document is typeset you can use it to mark the page 
     breaks in your original word processed document. Chose any single 
     8 bit character to mark the end of each page. Once these page 
     break indicators are in place, run PROINDEX. The resulting index 
     will match the typeset document. 


     Keyword Tips 

     Constructing a good keyword or phrase list is not as easy as it 
     seems. The quality of your index depends on this list. Thus, 
     making sure your list is as complete as possible is important. 
     The computer is extremely picky about what you keywords look 
     like. PROINDEX always looks for an exact match for your keyword 
     or phrase. This presents some problems when building a keyword 
     list. 

     For instance, suppose you are writing a computer program manual 
     and you want to catch all references to "debugging" a program. If 
     your reference list contains the word "debugging" you are going 
     to miss a number of possible citations. All references to 
     "debug", "debugged", and "debugs" will be skipped! 

     The way to solve this problem is to always use the root of a 
     keyword in the reference list. In the previous example the 
     keyword should have been "debug". This will catch all references 
     to any usage of "debug". In some cases getting the root of a 
     keyword will require you to drop a few letters from the end of 
     your keyword. This is preferable to getting too specific with a 
     keyword and missing entries. 

     Also remember that the ASCII space character is useful in 
     delimiting a keyword. If you are looking for the keyword "out" 


                                    13








     you will find a number of false references inside words like 
     "shout". To avoid this problem put a space in front of the 
     keyword "out". This forces PROINDEX to search for the sequence 
     eout. You can also add a space to the end of the word, but 
     remember this rules out finding plurals and other variations on 
     the keyword. See the chapter on keyword files for more 
     information. 


     Secondary References 

     It is possible to create an index with secondary references in it 
     using PROINDEX. This will require some work on your part. A 
     secondary reference can be thought of as an and function. You 
     want a reference to X and Y. Since secondary references require 
     interpretation of document context, PROINDEX must be run in the 
     interactive mode to generate them. 

     A typical index with secondary references might look something 
     like this: 

     Keyword, 
       date, 2, 7, 9 
       files, 2, 5, 6 
       size, 5, 7, 12 

     If your keyword list simply contains the three phrases: keyword 
     date, keyword file, and keyword size you will run into problems. 
     Your document might be talking about "keyword lengths" but not 
     refer to them in that exact way. For instance as: "the length of 
     a keyword". So how do you create secondary references? The 
     easiest way is to shorten the original phrase down to a single 
     word. If we do this for the previous example we get three 
     keywords that are exactly the same. 

          Original Keyword    Revised Keyword 
          Keyword date        Keyword 
          Keyword files       Keyword 
          Keyword size        Keyword 

     The draw back to this approach is that you now have three 
     keywords that are exactly the same. How do you know which is 
     which when PROINDEX shows them in context? To solve this problem 
     keep two different reference word lists. The first lists complete 
     keywords or phrases. We keep a printed version of this list next 
     to us while indexing. The second list is the abbreviated list 
     that will be used by PROINDEX. The first time PROINDEX shows you 
     the reference "keyword" in context, you look at your printed list 
     to see that you want "keyword dates". When PROINDEX finishes with 
     this reference it will beep and move to the next similar 
     reference. Move down your printed list to find that the next 
     reference is "keyword files". You repeat this process for all 
     three references. The resulting index will look as follows: 




                                    14








     Keyword, 2, 7, 9 
     Keyword, 2, 5, 6 
     Keyword, 5, 7, 12 

     Note that although each keyword is the same the page references 
     are different. You have created true secondary references. You 
     must now edit the output index file produced by PROINDEX to a 
     form that reflects the true meaning of these references. 

















































                                    15








                               CONFIGURATION 

     Not everyone has the same type of disk files or uses the same 
     word processor. In addition, everyone seems to want a slightly 
     different index style or format. The individual user thus needs 
     some way to customize this program. That way you can make the 
     program work just the way you want it to, and we don't have to 
     supply numerous different versions of the program. 

     PROINDEX uses a configuration file to control its operation. It 
     creates this file the first time you use it. An example of this 
     file can be seen in figure 7. The configuration file is usually 
     called PROINDEX.CNF. This file initially contains all the default 
     values for control of PROINDEX operation. These default values 
     are the ones shown below. 

     While this file is in ASCII and can be modified with any text 
     editor, there is no reason to do so! The PROINDEX program 
     automatically changes the configuration file anytime you make a 
     change on the index control parameters menu screen, as seen in 
     figure 4. Changing any answer on this menu alters the 
     configuration file automatically, and changes the way PROINDEX 
     operates. 

     This file gives you control over most of the internal functions 
     of the index program. These functions control the following 
     features: 

     Starting page number of text 
     Multiple index references per page 
     Should a special character end a page 
     String to precede each index reference 
     Should the index reference pages, lines, or both 
     Number of lines per page 
     Conversion of lower to upper case 
     Should the 8th bit be stripped from text 
     Index sent to disk or printer 
     Path for indexes sent to disk 
     Run the program in interactive mode 

     NOTE: If at any time the configuration file can not found by 
     PROINDEX, then a new one will be created with the following 
     default values: 














                                    16








     Temporary work:                         0 
     Starting page number:                   1 
     Allow multiple references/page:         N 
     Special character ends page:            N 
     End of page code:                       0C 
     Page reference code:                    none 
     Reference page/lines/both:              P 
     Lines start at:                         P 
     Character to separate pages from lines: : 
     Lines per page:                         66 
     Convert to upper case:                  Y 
     Strip 8th bit:                          Y 
     Index sent to disk/printer:             D 
     Disk index path:                        T 
     Run in interactive mode:                Y 

     The configuration file that PROINDEX uses has to have a name and 
     reside somewhere on a disk. It is normally called PROINDEX.CNF, 
     however, you can change this name in one of two ways. This allows 
     you to maintain different configuration files for different types 
     of text. If you invoke PROINDEX by typing: 

     PROINDEX c:\path\filename.ext 

     The program will assume that the configuration file must have the 
     name you specified, "filename.ext" and be found on the path name, 
     "c:\path" you gave it. If it is not found there it will be 
     created there. This method of supplying a name for the 
     configuration file takes precedence over all others. 

     If no argument is passed to PROINDEX when the program is started 
     the program environment strings are examined. See your DOS manual 
     for an explanation of the "SET" command. If PROINDEX finds an 
     environment string of the form: 

     PROINDEX.CNF=d:\path\yourfile.nam 

     it will use that name and path for the configuration file. Once 
     again, if the file can not be found it will be created. The 
     environment string area will not be examined if you pass an 
     argument to the program when it is started. 

     MS-DOS environment strings are easy to set up. Just remember that 
     environment strings established by the SET command only remain in 
     effect until the next time you reboot your system. If you want to 
     permanently set an environment variable you must include the 
     proper SET command in your autoexec.bat file. A typical SET 
     command looks like: 

     SET PROINDEX.CNF=c:\path\yourfile.ext 

     If you do not pass an argument to PROINDEX and you have not used 
     the DOS SET command to redefine the configuration file name, then 
     PROINDEX will automatically use the name PROINDEX.CNF for the 
     configuration file. If you are running under MS-DOS 3.0 or higher 


                                    17








     then this configuration file will be created, saved, and 
     retrieved from the same subdirectory that the program 
     PROINDEX.EXE is saved in. 

     If you are running MS-DOS 2.X then this configuration file will 
     end up on the default disk drive. Sorry, but path support under 
     this version of DOS is incomplete. 

     If you are now totally confused don't panic! The special options 
     mentioned above for renaming the configuration file are advanced 
     features of the program. You do not have to use these features. 
     Just invoke the program by typing: 

     PROINDEX 

     and let PROINDEX take care of the configuration file all by 
     itself. 








































                                    18








                                 OPERATION 

     Getting Started 

     Before you do anything at all copy the files from your PROINDEX 
     master disk to a work disk or a subdirectory on your hard disk. 
     Take the original PROINDEX disk and put it away. No installation 
     is needed for either program. Simply copy those two files to the 
     disk drive you want to work on. They will work on a floppy, RAM, 
     or hard disk. 

     If this is an update of PROINDEX that you are installing, please 
     delete the old version of PROINDEX and ALL copies of the old 
     configuration file, PROINDEX.CNF. If the new version of PROINDEX 
     finds an old configuration file it will return back to DOS. You 
     must delete the old configuration file before the new version 
     will run. No work you have done will be lost. 

     The first time you run PROINDEX it will create a configuration 
     file. Any changes you make to the configuration of PROINDEX will 
     automatically be saved in this file. See the previous section for 
     more information on this configuration file. 

     The PROINDEX program is easy to use. Your first step is to create 
     a text file to index. Next you need a list of keywords or 
     phrases. See the sections on text and keyword files for more 
     details on creating these files. To start the program type: 

     PROINDEX 
     or 
     PROINDEX b:\path\config.fil 

     NOTE:  {cr} stands for the newline/enter/carriage return key. The 
     optional file name and path in the second example instruct 
     PROINDEX to use that name and path for its configuration file. 


     Opening Screen 

     PROINDEX starts by clearing the screen and printing an opening 
     message. This message includes the version number of the program 
     and a copyright notice, as seen in figure 1. The program then 
     attempts to read the configuration file. If the file can not be 
     found a default configuration file is created and read. See the 
     previous section on configuration for more details. This initial 
     screen will remain up for about three seconds. The program will 
     then automatically move to the next screen. 


     Data Entry 

     Before explaining the index control parameters screen some 
     information about entering and correcting data is necessary. All 
     keyboard entry in PROINDEX uses a special screen handler. This 
     screen handler lets you easily enter and correct data entries. 


                                    19








     Most data entry in PROINDEX is done based on something called a 
     data field. The program only allows data to be entered in certain 
     places, fields, and verifies the entries as they are being made. 
     A field begins with a "[" character and ends with a "]" 
     character. 

     You may enter data into a field as long as the cursor is present 
     there. To enter information simply type on your IBM PC keyboard. 
     You can use either the backspace or the delete key to correct 
     typing errors. Note that you can not delete your way past the 
     left hand "[" character. If default data is present in a data 
     field you can leave it there by going to another data field or 
     type over that information. Once you start typing over data the 
     screen handler removes all data in that field. The screen will 
     still show the old data as a typing aid. 

     There are several different ways to move from one data field to 
     another.  Hitting a return key after entering data moves you to 
     the next sequential, lower, field. You can also use the IBM PC's 
     cursor control keys to move between fields.  The a key, or a 
     Control-A, will move the cursor to the previous field, (up). The 
     b key, or Control-F, will move the cursor down one field.  Note 
     this is the same as hitting the return key. Finally, the g key, 
     or Control-W, performs a special data entry function. Hitting 
     this key enters all data in all fields as it stands. When you hit 
     the g key all data will be entered as it appears on the screen. 
     This feature lets you avoid answering all the questions on the 
     screen each time you use the program. You need only answer those 
     questions that you wish to change. Then use g to advance to the 
     next menu. 

     Most data fields will already have information in them when the 
     cursor appears there for the first time. This information is the 
     normal default value for that question. You may leave this 
     information as it is by hitting return, a, or b. This will enter 
     the default data and move to another data field. You may also 
     change the default data by typing over it and then moving to 
     another field. 


     Program Operation 

     Figure 2 shows what the second screen will look like. This screen 
     or menu is designed to collect the name of the text file to index 
     and the name of the keyword list. You can also tell PROINDEX what 
     disk drive and path to use for a work drive. Entries on this 
     screen work as follows: 

     The text file. First you must enter the path and name of the file 
     to index in response to the question, "Path & name of file to 
     index?". It can be any valid path and file name up to 43 
     characters long. Note that the file name itself can only be eight 
     characters with a three character extension. The path name may 
     include a drive specifier. Use of a drive and path is optional. 
     The following examples show correct responses to this question: 


                                    20









     [filename.ext                              ] 
     [c:filename.ext                            ] 
     [\work\text\filename.ext                   ] 
     [d:\text\filename.txt                      ] 

     The keyword file. Next you must enter the path and name of the 
     keyword list. The same restrictions apply to this path and file 
     name as to the index file name. Examples include: 

     [keyword.dat                               ] 
     [c:keyword.dat                             ] 
     [\work\text\keyword.dat                    ] 
     [d:\text\keyword.dat                       ] 

     Note: If either the file to index or the keyword list is left 
     blank PROINDEX will not be able to index your text. You can still 
     access the control parameters menu or go back and edit the file 
     names. However, if you have no text or keyword file name the 
     program will not be able to index. PROINDEX will display an error 
     message if you try to run an index and return to the main menu. 
     You can then correct the file name or quit the program. 

     Temporary work path. This question is optional. If not answered 
     the displayed value will be used. The temporary work path 
     describes what disk drive and path should be used for work files. 
     If you leave this field blank the default drive, where ever you 
     are at the moment, will be used. 

     If you need to specify only a disk drive simply enter a single 
     letter followed by a colon specifying the drive name. Full path 
     names may also be specified. Note that PROINDEX does not care 
     whether your path name ends with a backslash character. If this 
     character is not found PROINDEX will add it when it needs to. 

     All work files are temporary and will be erased by PROINDEX when 
     the indexing job is done. Examples include: 

     [                                          ] 
     [d:                                        ] 
     [\work\temp                                ] 
     [\work\temp\                               ] 
     [c:\temporary\                             ] 

     Once this information is entered the screen will display the main 
     control menu shown in figure 3. All program operation starts at 
     this menu and returns back to it when done. This menu gives you a 
     choice of six different control options. Simply type the letter 
     that corresponds with what you want to do next, followed by a 
     carriage return. The choices are as follows: 







                                    21








          C=Continue a previous indexing session 
          E=Edit file names and paths above 
          I=Index the text 
          P=Edit the index control parameters 
          Q=Quit the program 
          X=eXecute an MS-DOS command 

     At this point you can go back and edit the file names and paths 
     previously described with the E option. You can start the 
     indexing of your text with the I option or you can continue a 
     previously halted indexing session with the C option. You can go 
     change the index control parameterswith the P option. You can 
     switch to a menu that will let you invoke MS-DOS commands from 
     within PROINDEX by using the X option. Or you can quit the 
     program and return to DOS, Q option. 

     The program will ask you to chose one of these six options. Enter 
     the letter corresponding to your choice and hit a return. When 
     you are ready to start indexing hit the I or C key. This will 
     take you to the index menu shown in figure 5. 

     Finally, to leave the program type the Q key. This will return 
     you back to the MS-DOS operating system. 


































                                    22








     Executing MS-DOS Commands 

     It would often be nice to be able to run an MS-DOS command 
     without leaving the PROINDEX program. For example, suppose you 
     quit indexing in the middle of a session and want to see what you 
     have done so far. Select the X option on the main menu and you 
     will go to the MS-DOS command sub-menu. This menu is shown in 
     figure 6. It lets you run MS-DOS commands without leaving 
     PROINDEX. When this menu appears on the screen the cursor will be 
     positioned at the beginning of a large blank data field that 
     follows the word "Command". It looks as follows: 

     Command [                                              ] 

     Simply type in any valid MS-DOS command up to 64 characters in 
     length. For our previous example we wanted to see our index. So 
     type in: "type indxfile.ind", followed by a return. This will 
     display your index file just as if you had exited PROINDEX and 
     done the same command on your PC. You can use the Control-S key 
     to start and stop the printing of a long index. 

     Command [type indxfile.ind                             ] 

     You might also want to display a directory of disk files while 
     running PROINDEX.  Use the same disk directory command you would 
     normally use to see what files are available.  For example: 

     Command [dir b:*.txt                                   ] 

     will display all disk files on drive B: that end with the 
     extension ".txt". 

     Once an MS-DOS command has run PROINDEX will prompt you with a 
     message: 

     Hit any key to return to PROINDEX 

     Striking any key will return you to the main menu of PROINDEX. If 
     you enter the MS-DOS command menu by mistake and do not wish to 
     execute any command simple leave the data field blank and hit 
     return.  This will bring you back to the main menu. 
















                                    23








     PROINDEX Control Parameters 

     The style of index created by PROINDEX depends on how a number of 
     control parameters are set. You can change these parameters at 
     any time to change the look or style of your index. All changes 
     to these parameters are made on a separate menu page. 

     Figure 4 shows the index control parameters menu. This screen is 
     used to modify the index control parameters. All changes made to 
     this menu will be remembered by PROINDEX. They are saved in the 
     disk configuration file. You never have to return here unless you 
     want to change a value. This screen controls the following 
     options: 

     Starting page number. Indexing very large documents can result in 
     problems. You may not have room for the necessary temporary 
     files. Or, perhaps, it is just easier to break a long file up 
     into several shorter ones. How can you handle an index in this 
     case? PROINDEX allows you to specify the starting page number of 
     a document. 

     Suppose you had a document broken up into two pieces. The index 
     for the first section assumes that it starts at page one. When 
     you go to index the second file you can tell PROINDEX that this 
     file starts at page 41, for example. All you need to know is the 
     starting page number of each section of text you index. 

     The program asks you, "Starting page # of text (1-9999)?". You 
     may respond with any number from 1 to 9999. The default value is 
     one. Examples include: 

     [1   ] - start at page 1 
     [195 ] - this file begins at page 195 

     Multiple references/page. A normal index contains only a single 
     reference for each keyword per page. Thus if a keyword is found 
     five times on one page, only one reference to that page will be 
     found in the index. This feature can be defeated if required. 
     The, "Multiple references per page (Y/N)?", question turns the 
     feature on and off. Examples include: 

     [Y] - Let multiple references per page be flagged 
     [N] - Only 1 reference per page to a keyword 

     End of page. Sometimes it is inconvenient to create disk files 
     that resemble the printed output of your text. Yet the index 
     program needs to know what page each reference it finds is on. 
     PROINDEX lets you use any eight bit character to mark the end of 
     a page. If this feature is turned on the program will treat each 
     special character as an end of page indicator. 

     Why would you want to mark the end of a page by manually 
     inserting a special character? Suppose your word processed text 
     is to be typeset. The page breaks of your word processed document 
     will not match the page breaks of your typeset document. PROINDEX 


                                    24








     will handle this problem if you mark the page endings in your 
     word processed document with a special character. You can use any 
     character you want. There are two questions on the Index 
     Parameters menu that control this feature as follows: 

     Should a special character end a page (Y/N):    [N] 
     Page ending character code in hex:              [0C] 

     If you reply with a "Y" to the first question, then PROINDEX will 
     use ONLY the special character defined in the second question to 
     define the end of a page. If you reply with an "N" to the first 
     question then PROINDEX will count lines to determine when a page 
     ends. 

     The special character that marks the end of a page can be 
     defined, IN HEX, in the second question. A table of hex verses 
     ASCII is provided below to help you select a character. Note that 
     PROINDEX defaults to the i character, Control-L or hex 0C. 

     Hex Char   Hex Char   Hex Char   Hex Char 
     00  NUL    10  ^P     20  SP     30  0 
     01  ^A     11  ^Q     21  !      31  1 
     02  ^B     12  ^R     22  "      32  2 
     03  ^C     13  ^S     23  #      33  3 
     04  ^D     14  ^T     24  $      34  4 
     05  ^E     15  ^U     25  %      35  5 
     06  ^F     16  ^V     26  &      36  6 
     07  ^G     17  ^W     27  `      37  7 
     08  ^H     18  ^X     28  (      38  8 
     09  TAB    19  ^Y     29  )      39  9 
     0A  LF     1A  ^Z     2A  *      3A  : 
     0B  ^K     1B  ESC    2B  +      3B  ; 
     0C  FF     1C  ^\     2C  ,      3C  < 
     0D  CR     1D  ^]     2D  -      3D  = 
     0E  ^N     1E  RS     2E  .      3E  > 
     0F  ^O     1F  US     2F  /      3F  ? 

     Hex Char   Hex Char   Hex Char   Hex Char 
     40  @      50  P      60  '      70  p 
     41  A      51  Q      61  a      71  q 
     42  B      52  R      62  b      72  r 
     43  C      53  S      63  c      73  s 
     44  D      54  T      64  d      74  t 
     45  E      55  U      65  e      75  u 
     46  F      56  V      66  f      76  v 
     47  G      57  W      67  g      77  w 
     48  H      58  X      68  h      78  x 
     49  I      59  Y      69  i      79  y 
     4A  J      5A  Z      6A  j      7A  z 
     4B  K      5B  [      6B  k      7B  { 
     4C  L      5C  \      6C  l      7C  | 
     4D  M      5D  ]      6D  m      7D  } 
     4E  N      5E  ^      6E  n      7E  ~ 
     4F  O      5F  _      6F  o      7F  DEL 



                                    25








     Chapter / section references. Index style is often a matter of 
     individual choice. Some people prefer indexes that clearly 
     separate chapter entries from each other. To this end, each 
     individual chapter will start with page number one and the index 
     must specify which chapter each page reference is referring to. A 
     typical example might look as follows: 

     ASCII,1.1, 1.7, 2.5 
     bull,2.3, 3.7 

     This index example tells us that a reference to "ASCII" occurs in 
     chapter one on pages one and seven, and in chapter two on page 
     five. PROINDEX gives you the ability to build your indexes in 
     this fashion. A single question on the index parameters menu 
     controls this option: 

     String to precede each index reference:  [     ] 

     Up to five separate characters may be specified here. As long as 
     this field is blank, no string will be added to each page 
     reference. Leave the field blank for a straight numerical index. 
     If you want to mark separate chapters put in an appropriate 
     string in place of the blank one. To generate the example index 
     above the string was set to: 

     String to precede each index reference:  [1.   ] 

     for all indexing work done in chapter one. The string was then 
     changed to "2.   " while indexing chapter two. When all chapters 
     were done the MERGE utility was used to produce a single master 
     index. 

     WARNING: the string must only contain printable ASCII characters. 
     The first blank character found when going from left to right 
     terminates the string. To remove an old string type over it with 
     the space bar. 

     Page, line, or page & line numbers. PROINDEX can create indexes 
     that reference page numbers, line numbers, or a combination of 
     page and line numbers. A page number is simply the page that a 
     reference was found on. An index that shows only line numbers 
     shows the number of lines from the beginning of the text file for 
     each reference. 

     An index created with both page and line numbers will tell you 
     what page and what line the reference can be found. What is meant 
     by line number? After all, line numbers could be counted from the 
     beginning of a page and include all blank lines, or they could be 
     counted based on only those lines that have text on them. 
     PROINDEX allows you to select either case with a second question. 
     Finally, page numbers and line numbers have to be separated from 
     each other. The choice of a character to separate them is up to 
     you in the third question. The three questions relating to this 
     option look as follows: 



                                    26








     Should index reference pages/lines/both (P/L/B):      [P] 
     If both, line numbers begin with page or text (P/T):  [P] 
     If both, character to separate pages from lines:      [:] 

     The second and third questions only apply when you have selected 
     an index with both page and line numbers. See the first question. 
     If both page and line numbers are selected you must make a choice 
     concerning what the line numbers will reference. Entering a "P" 
     will tell PROINDEX to count lines from the beginning of the page. 
     If you are using the standard 66 lines per page, then the line 
     numbers will run from 1 - 66. Entering a "T" tells PROINDEX to 
     count only those lines that have text on them. Thus the first 
     line of text will be line number 1, even if it is located half 
     way down the page. Blank lines will not be counted. 

     The third question asks for an ASCII character to separate page 
     numbers from line numbers. The default is the colon ":". With 
     this default character page and line numbers in the index will 
     look as follows: 

     ASCII, 23:7 
     test, 1:24, 3:1, 15:47 
     zebra, 99:65 

     Note that you can use any character you want, except for a space 
     or a "~", to separate pages from lines. However, there are some 
     very bad choices. Do not, for instance, use the comma character 
     "," since this would make it difficult to see what was a page 
     number and what was a line number. 

     Lines per page. Most text contains 66 lines per page. This is not 
     always the case, however. This data field lets you change the 
     number of lines per page for your text. The program asks, "Lines 
     per page (1 - 999)?". You can respond with any number from 1 to 
     999. 

     [1 ] - each line is a new page 
     [132] - each new page begins after 132 lines 

     Text case. Text files usually contain both upper and lower case 
     letters. This can cause some interesting problems when indexing a 
     file. If the program pays attention to case then the words "Test" 
     and "test" do not match. Thus this question asks, "Convert lower 
     to upper case (Y/N)?" Normally the default value of "Y" is used. 
     Examples include: 

     [Y] - yes, do case conversion 
     [N] - no, leave case of letters as it is 

     8 to 7 bit ASCII. Some word processors, WordStar for one, use the 
     8th data bit to indicate special things. This makes matching text 
     difficult. This feature lets you strip the extra bit from every 
     character before comparisons are made. The program asks, "Strip 
     8th bit from text (Y/N)?". Legal answers are: 



                                    27








     [Y] - yes, remove extra bit 
     [N] - no, leave text alone 

     Output. The actual index produced by PROINDEX has to go 
     somewhere. This question asks, "Index sent to Disk or Printer, 
     (D/P)?" Normally it is sent to the disk, as indicated by the 
     default answer "D" to this question. You can, however, redirect 
     this output to the printer, LPT1, if you so desire. Simply answer 
     the question with a "P" for printer. 

     [D] - output to the disk 
     [P] - output to the printer 

     Indexes that are sent to the disk use the same file name as the 
     keyword file, with an extension of ".IND". The related "disk 
     index path" question supplies the path for this index file. You 
     can use the path for the text, keyword, or work files for the 
     index file. Thus if the file to index was called "filename.txt" 
     its index would be the file "filename.ind". See the "disk index 
     path" section below for an example of what path would be used 
     with this file. 

     Disk index path. To keep the amount of information needed to run 
     this program to a minimum the path name for an index saved to 
     disk is taken from one of three places. Thus, you don't have to 
     specify another path name but you do have to identify the source 
     of the path. A disk index file will always be saved in one of 
     three possible paths. These are the paths specified for the: text 
     file, keyword file, or work files. 

     The normal default is the text file path. Thus your index will 
     end up in the same place as your text file. You can change this 
     path by responding to this question as follows: 

     [T] - use the text file path 
     [K] - use the keyword file path 
     [W] - use the work area path 

     Interactive mode. The program normally runs in an interactive 
     mode. That is, it requires responses from you before it will 
     include a reference in the index. Indexing normally requires 
     human thought. If you wish to circumvent this feature the program 
     can be made to run all by itself. When it asks, "Run in 
     interactive mode (Y/N)?", change the answer to an "N". 

     [Y] - yes, run in interactive mode 
     [N] - no, program runs by itself 










                                    28








     Indexing 

     Once you have told PROINDEX to start indexing your text it 
     replies by printing the "Creating temporary work files" message. 
     After the program has created the work files, this could take up 
     to several seconds depending on the speed of your computer, it 
     will proceed to the actual text file indexing. 

     When PROINDEX is ready to begin the indexing process it will 
     change the screen from that shown in figure 3 to the one shown in 
     figure 5. This screen tells you what page of text you are on, 
     what the present keyword is, and what number keyword it is using. 
     The keyword number gives you an indication of how far through 
     your index you have progressed. When PROINDEX is finished looking 
     for a given keyword it will make a pleasant warbling sound. 

     In the automatic mode the bottom half of this screen will remain 
     blank. In the interactive mode PROINDEX will display from 8 to 10 
     lines of text surrounding each occurrence of the keyword it 
     finds. Double spaced text cuts this down to 4 - 5 lines. The 
     keyword itself is always shown in bold face type. The program 
     searches progressively through your text file looking for all 
     occurrences of the first keyword, then the second, etc. 

     If the keyword can not be found anywhere in your text file 
     PROINDEX displays the message on the screen, "No reference to 
     keyword: XXXXXXXX". The program then pauses, waiting for you to 
     hit a key before it will continue the indexing process. 

     When a keyword is located in your text file the program stops and 
     waits for you to tell it what to do. As shown in figure 5, it 
     asks you, "What would you like to do?". You respond by hitting 
     one of five possible keys. NOTE: No return key entry is needed 
     here. The program responds immediately to any key that is typed. 
     Error handling here has been sacrificed for speed of execution. 
     If you hit any key other than "A", "B", "M", "Q", or "S" that key 
     is ignored and your computer beeps. 

     The five single letter responses correspond to one of the 
     following options: 

     B - Bypass. Bypass this one occurrence of the keyword in text. 
     This option has no effect on further occurrences of this keyword 
     in text. 

     M - Mark. Mark this occurrence of the keyword in the index. This 
     option may or may not have an effect on other occurrences of this 
     keyword in text. Note that if the "more than one reference per 
     page" option has not been enabled then once a reference has been 
     marked no other occurrences of it on this page will be found. 

     A - All. All further references found for this keyword will 
     automatically by marked in the index without asking. The "more 
     than one reference per page" option still controls whether 
     multiple references per page are allowed. Once the program 


                                    29








     finishes searching the entire text file for this keyword it will 
     return to the normal interactive mode. 

     Q - Quit. Stop the indexing process and return to the operating 
     system. When a "Q" is typed the program asks, "Are you sure?". If 
     you type a "Y" for yes the program will exit to MS-DOS. Otherwise 
     the program continues where you left off. You may continue an 
     indexing session you ended with this command at a later time. 

     S - Skip. Skip all further references to this keyword in your 
     text file without asking. Once the program finishes searching the 
     entire text file for this keyword it will return to the 
     interactive mode. 












































                                    30








                                  OUTPUT 

     The exact form of the index created by PROINDEX depends on the 
     options you have chosen on the Index Control Parameters menu. In 
     general, this index will always have a basic form. Each line of 
     the index will start with a matching line from your keyword or 
     phrase list. This information will be followed by a comma, one 
     space, and page or line references. Each page or line reference 
     will be separated from the previous one by a comma and one space. 
     The last page or line reference will not have a trailing comma. A 
     typical line would look as follows: 

     keyword or phrase, XXXX, YYYYYY, ZZZ 

     The end result of an indexing session should be an index. Where 
     does that index go? With PROINDEX you have one of two different 
     options. The index can be saved as a disk file, or it can be sent 
     to the printer- as it is created. 

     It is highly recommended that you save your index as a disk file. 
     Sending an index to the printer is a one way trip. There is no 
     way to do anything with that printed index except read it. An 
     index saved as a disk file can be manipulated with a text editor 
     and included into your document. Indexes that are saved to disk 
     must have a file name. PROINDEX always takes the name of your 
     text file, removes its extension, and saves the resulting index 
     with a ".ind" extension. Thus, if your text file was called 
     "bigbook.doc" the resulting disk file index will be named 
     "bigbook.ind". 

     This disk file index will be a pure ASCII file. The path and disk 
     drive that the file is created on are determined by you. One of 
     the Index Control Parameters determines where this disk file will 
     be created. See that section of the manual for more information 
     on where the file will be saved. 

     Saving an index as a disk file does have an inherent problem. 
     What happens if a previous index exists on your disk with the 
     same name?  Don't worry- PROINDEX checks for this condition and 
     presents you with the following message and options if it finds a 
     duplicate index file name. 

     PROINDEX is unsure whether you want to erase this old index and 
     start fresh or save the old index. You could also want to 
     continue an old indexing session. Please decide what you want to 
     do and select the appropriate response below. 

     R =  Rename old index, last.ind to last.ibk, and start fresh 
     C =  Continue a previous indexing session (destroy old index) 
     Q =  Quit indexing now (saves old index) 

     Note that PROINDEX gives you several options here. You can stop 
     what you are doing without changing anything by using the Q 
     command. You could tell PROINDEX to rename the old index to a 
     backup file name and then create a new index by using the R 


                                    31








     option, the most common choice. Or you can instruct PROINDEX to 
     erase the old index and create a new one with the C option. These 
     options are designed to keep your indexes as safe as possible. 

     If you chose to send the index to a printer your printer must be 
     connected to LPT1. If you attempt to send an index to a printer 
     that is not selected or turned off the program will pause and 
     wait for you to enable the printer. When the printer is ready you 
     may hit any key except the "Q" to proceed. Hitting a "Q" will 
     cause the program to return to the main menu. 

     NOTE: If you tell the program to proceed at this point even 
     though the printer is not ready the program will simply repeat 
     the error message. The only way out of this state is to ready 
     your printer or to type a "Q" to return back to the main menu. 

     Indexes produced by PROINDEX can conform to several of the styles 
     suggested by the Chicago Manual of Style. A sample index follows. 
     Note the spaces used to deliniate keywords are still present in 
     the PROINDEX output. 

     Accuracy, 5, 15, 23 
     Assembly language, 
     Basic, 1, 2, 3, 4, 5, 6, 7, 14, 16, 18, 19, 22 
     (space)C(space), 4, 5 
     (space)debug, 1, 2, 5, 6 
     EPROM, 10 
     (space)jump, 14, 56 
     High level language, 12, 13, 15 
     Input, 1, 3, 7 
     Key phrase, 12, 13 
     Macro, 12, 13, 14, 15 
     Macro, 13, 15 
     Macro, 15 
     PL/M, 10 

     Note that PROINDEX does not attempt to produce a truly finished 
     index. It is assumed that some of your keywords will have to be 
     modified and extra spaces must be removed from the index. This 
     task is left up to you. Simply import the index disk file into 
     your word processor. There you can edit the index to any form 
     your desire. We typically edit the index file shown above to the 
     following form: 














                                    32








                                   INDEX 

     Accuracy, 5, 15, 23 
     Basic, 1-7, 14, 16, 18, 19, 22 
     C programming language, 4, 5 
     Debugging, 1-2, 5, 6 
     EPROMs, 10 
     Jump instructions, 14, 56 
     High level languages, 12, 13, 15 
     Input devices, 1, 3, 7 
     Key phrases, 12, 13 
     Macros, 12-15 
     assembler, 13, 15 
     commands, 15 
     PL/M, 10 










































                                    33








                               PROGRAM SPEED 

     The amount of time it takes for PROINDEX to index your text 
     depends on the type of computer you have, and the type of disk 
     drives you are using. An IBM AT is much faster than an IBM PC. 
     Hard disks are much faster than floppy disks. Finally, RAM disks 
     are much faster than either floppy or hard disks. 

     PROINDEX is a disk intensive program. It makes extensive use of 
     your disk drives. In addition, PROINDEX must work with four 
     separate disk files at all times. These are: your original text 
     and keyword files, and working copies of the text and keyword 
     files that may have case conversion or bit stripping done on 
     them. Thus, the type of disk you use for a work drive is critical 
     to the speed of operation of PROINDEX. 

     If you have a hard disk drive it is better to use it as the work 
     drive instead of a floppy disk. This will speed the operation of 
     PROINDEX by a factor of 5 to 10 times! 

     Better yet, use a RAM disk drive. This approach is 2 to 4 times 
     faster than a hard disk. A RAM disk driver comes with all MS-DOS 
     operating systems of version 3.0 or higher. If you have a lower 
     version of MS-DOS there are a number of public domain RAM disks 
     available. If you can't find one we will be happy to send you one 
     if you mail us a self addressed stamped disk mailer and a 
     formatted floppy disk. 

     We strongly recommend the use of a RAM disk for most medium to 
     large indexes. An index that takes several hours to run on a 
     floppy disk system can be done in a very few minutes, on that 
     same computer, using a RAM disk. All you need is the enough 
     memory to create the RAM disk. The RAM disk must be big enough to 
     hold work copies of your text and keyword files. PROINDEX will 
     check to make sure there is enough room on its work drive before 
     it starts indexing text. 

     Practically speaking, a RAM disk using 150,000 bytes of memory is 
     adaquate for most small to medium size indexes. It is well worth 
     the effort of creating a RAM disk even if you only use it with 
     PROINDEX on a temporary basis. 

     So, how do you create a RAM disk? Assuming you have version 3.0 
     or higher of MS-DOS you have all the tools you need to do this. 
     These versions of MS-DOS come with a device driver called 
     VDISK.SYS. To use it you must have or create a disk file called 
     CONFIG.SYS on the disk drive that your system boots up with. This 
     disk must also have a copy of the file VDISK.SYS on it. 

     First copy VDISK.SYS to you system boot disk. For floppy disk 
     drive systems this is the disk that normally resides in drive A:. 
     For hard disk systems this is the hard disk, usually drive C:. If 
     this disk drive already has a CONFIG.SYS file on it you must edit 
     that file, with an ASCII text editor, to include a new line. If 
     your disk does not already have this file you must create it, 


                                    34








     with an ASCII text editor. You can use the EDLIN program that 
     comes with MS-DOS to do this. You want to include the following 
     line in this CONFIG.SYS file: 

     device=vdisk.sys 150 

     This tells MS-DOS to build a RAM disk using 150 K bytes of 
     memory. You can change this number to any amount of memory you 
     have free. Note that the RAM disk will not be created until you 
     reboot your system and everything on it will be erased each time 
     you reboot the computer. See pages 4-14 through 4-18 of your MS-
     DOS manual for more information on the VDISK program. 

     The RAM disk that is created this way will always be the next 
     disk dive letter past your previous last drive. Thus on a two 
     drive floppy disk PC the RAM disk will appear as drive C:. On a 
     PC, XT, or AT with a hard disk the RAM disk will appear as drive 
     D:. When PROINDEX asks for a work drive just enter this disk 
     drive letter followed by a colon. See figure 2. Thats all there 
     is to speeding up PROINDEX! 





































                                    35








                             UTILITY PROGRAMS 

     COMMON.TXT 

     The COMMON.TXT file is a list of common words in the English 
     language that you probably don't want to include in your index. 
     It contains about 400 words. Please check these words before 
     using them in conjunction with the REMOVE program. You may want 
     to alter this list before using it. 

     New words can be added to this file, or old ones can be removed. 
     All changes to the file must be done in ASCII. See the STRIP 
     utility if you use WordStar. All file entries must be in lower 
     case and sorted alphabetically. Each entry consists of a single 
     word followed by a carriage return / line feed pair. To add a new 
     entry, type the new word(s) at the beginning of the file, 
     following each word with a carriage return. Once all entries have 
     been made run SORT on the resulting file. This will guarantee the 
     file is in alphabetical order. Make sure there are no duplicate 
     words in this file! You can do this by running MAKEWORD on the 
     file. 


     MAKEWORD 

     This utility will take your text file and turn it into a sorted 
     list of unique words. It will also count the frequency of each 
     word as an option. This is the easy way to make a reference list 
     for PROINDEX. Only words starting with a letter of the alphabet 
     will be put into the list. Single punctuation characters 
     following a word will be removed. The program is run as follows: 

     makeword infile outfile [-ic] 

     The "infile" is your original text file. This file must be in 
     ASCII. WordStar users must first run STRIP on their text to turn 
     it into ASCII. The "outfile" is the name of the disk file where 
     the resulting list of words will be stored. Two options are 
     possible with MAKEWORD. The -i option tells MAKEWORD to ignore 
     case in its output. The output file will be entirely in lower 
     case if this option is used. The -i option should probably always 
     be used. The second option -c tells makeword to count the 
     frequency of each word in the list. 

     makeword data.txt data.lst -i 

     instructs MAKEWORD to find all unique words in data.txt, convert 
     them to lower case, and store them in the file data.lst. 

     makeword data.txt data.lst -ic 

     instructs MAKEWORD to find all unique words in data.txt, count 
     how many times they occur, convert them to lower case, and store 
     them in the file data.lst. The resulting file will look as 
     follows: 


                                    36









     a 234 
     at 23 
     if 12 
     wonderful l5 
     zebra 1 

     MAKEWORD needs disk storage space in order to work. The sorted 
     word file will initially be slightly longer in size than your 
     original text. This will shrink as duplicate words are removed. 
     The SORT utility is invoked by MAKEWORD and it needs additional 
     storage space. On average, you must have 2.1 times the text file 
     size worth of free disk space to invoke MAKEWORD. Thus if your 
     text file is 14,128 bytes long you need 14,128 * 2.1 = 29,669 
     bytes of free disk space. 

     MAKEWORD invokes an external sort routine called SORT. This 
     routine MUST be on the same disk as the MAKEWORD utility. In 
     addition, the input and output file names must be different! 
     MAKEWORD checks them to make sure they are not the same and 
     prints an error message if they are. 

     MAKEWORD takes time to run! Using a RAM disk and a 6 Mhz AT it 
     takes 51.5 seconds to turn a 30,700 byte document into a sorted 
     unique word list or 113.3 seconds to do this on a 65,200 byte 
     file. This comes to 14 / 28.4 seconds to convert into words, 32.5 
     / 75.6 seconds for the sort, and 5 / 9.3 seconds for removing 
     duplicate words. As you can see, the larger your file the slower 
     the operation of this program. 

     The program makes three passes at the data. First, it turns your 
     file into a list of words, removing non-valid words and 
     extraneous punctuation. This process is relatively quick. Next, 
     it sorts the list of words. The time this takes is exponentially 
     related to file size! Finally, duplicate words are removed from 
     the list. This is fairly quick. MAKEWORD prints a message on the 
     screen for each pass through your file. This lets you know what 
     the program is doing at any given time. 


     MERGE 

     Most people, and most word processors, do not really like to deal 
     with very long text files. Say, for example, that you have just 
     finished a new book. The double spaced manuscript might run 800 
     to several thousand pages in length. This size of text file is 
     hard to work with. It is just too cumbersome. 

     The easiest way to deal with this problem is to break the large 
     text file up into numerous separate pieces, probably one file for 
     each chapter. PROINDEX can easily deal with indexing text from 
     several files. You use the starting page number option to tell 
     PROINDEX what page each chapter starts on. All your references 
     will then be correct. 



                                    37








     So now what do you do with all the separate indexes? They are no 
     fun to merge by hand. If you have 10 chapters you will have 10 
     separate indexes that all have to be combined together. The MERGE 
     utility, included with PROINDEX, is designed to do this for you 
     automatically. 

     To use MERGE you will need a complete list of all keywords or 
     phrases in your indexes and the actual indexes themselves. MERGE 
     takes each successive keyword or phrase from the keyword file and 
     looks for matches in the index files, in the order you type them. 
     To run MERGE type: 

     merge key.ext newind.ext ind1.ext ind2.ext ... 

     The MERGE program will work with the list of keywords supplied in 
     "key.ext", or any other file name you care to use. It will hunt 
     through each index file, ind1.ext ... indN.ext, for matches to 
     the keywords found in the keywords file and combine these 
     separate indexes into one new index titled "newind.ext", or what 
     ever name you supply. 

     The output of the MERGE program will have the same form that as 
     that generated by PROINDEX. A simple example follows: 

     keywords  ind1              ind2 
     ape       ape, 1, 3, 4      camel, 7 
     camel     cow               cow, 10 
     cow       dog, 4, 5, 6      dog, 8, 9 
     dog       goose, 7          goat 
     goat      gorilla, 4, 5, 6  hen, 9 
     goose     horse, 3, 4       horse, 7, 9 
     gorilla   zebra, 1          zebra, 8 
     hen 
     horse 
     zebra 

                             The MERGE Command 

     merge keywords test ind1 ind2f 

                           The New Index (test) 

     ape, 1, 3, 4 
     camel, 7 
     cow, 10 
     dog, 4, 5, 6, 8, 9 
     goat 
     goose, 7 
     gorilla, 4, 5, 6 
     hen, 9 
     horse, 3, 4, 7, 9 
     zebra, 1, 8 

     Some notes about the merging process will probably be of interest 
     now. The merged index will always follow a fixed order. This 


                                    38








     order is based on the order of index files you supply to MERGE. 
     Thus if index file "ind1" has page references 1 - 100 and index 
     file "ind2" has page references 101 - 200, then file "ind1" 
     should be specified ahead, to the left, of file "ind2". 

     As you can see in the previous example, the separate index files, 
     ind1 & ind2, can use abbreviated keyword lists. Put another way, 
     when you index a separate chapter you can remove those keywords 
     from the keyword list for that chapter that you know will not be 
     referenced. As long as the keyword list for MERGE contains all 
     keywords the final index will be complete. 

     Another point is that you can edit an index by leaving out some 
     keywords from the list supplied to MERGE. If the keyword is not 
     present in MERGE's keyword list it will be ignored in all index 
     files. 

     Finally, MS-DOS limits the number of characters you may type on a 
     command line. Thus if you want to merge 12 separate indexes you 
     can't type a single command to do this. You can, however, run 
     MERGE repeatedly to accomplish the same effect. 

     merge keywords new1 ind1 ind2 ind3 ind4 ind5 
     merge keywords new2 new1 ind6 ind7 ind8 ind9 
     merge keywords new3 new2 ind10 ind11 ind12 

     WARNING: You can not use the same file name for the new index and 
     for a previously made separate index! The MERGE program checks 
     for this possibility and displays an error message if this 
     happens. 

     merge keys index index index2 index3 

     Results in: "Sorry can not merge the indexes. The new index name 
     'index' and one of the index files to merge have the same name." 


     PAGE 

     The PAGE utility will take an index list from PROINDEX, break it 
     up into separate pages, and append top and bottom margins. This 
     utility will produce a finished index in the least amount of 
     time. You must supply a disk file that contains the top and 
     bottom margin text. Up to 12 lines of 80 characters each can be 
     used for each margin. Page numbers can automatically be included 
     in the margins if desired. To use PAGE type: 

     page index output margins lines/page page_number 

     where "index" is the input index file. This is typically the file 
     output by PROINDEX. The "output" file is the name of the file you 
     want your finished index to be put in. "Margins" is the name of a 
     disk file that contains the top and bottom margin text, see below 
     for a complete description of this file. The "lines/page" 
     variable is a number telling PAGE how many lines long each page 


                                    39








     should be including your top and bottom margins. Typically this 
     is 66 lines per page. Note that this number can never be less 
     than the number of lines in your top and bottom margins plus 1. 
     Finally, "page_number" tells PAGE what page number to start the 
     index with, assuming you want a page number in your index. 

     page data.ind newdata.ind margin.txt 66 54 

     This command tells PAGE to use the index found in "data.ind" and 
     page it based on the margins found in the file "margin.txt". 
     Paging will be based on 66 lines of text per page and the first 
     page of the index will start with page number 54. 

     The margin file describes what the top and bottom margins will 
     look like, along with the position of the page number if any. 
     Each margin may display a page number. The top margin is defined 
     as any text found between the two lines of text that follow: 

     #HEADING 
     #FOOTING 

     The bottom margin is defined as all text after the "#FOOTING" 
     line. If either, or both, of the start margin lines are followed 
     by a space and a single character that character will be replaced 
     in the margin, with the current page number. Thus: 

     #HEADING @ 


                                                            Page -@- 

                                   Index 


     #FOOTING 

     tells PAGE that the first top margin of the index will start with 
     two blank lines, followed by a line that ends with "Page -54-", 
     followed by a blank line, the word "Index" centered on a line, 
     and two more blank lines. PAGE will only insert one page number 
     in each margin. If no page number is desired, simply use a 
     character in the #HEADING and #FOOTING commands that does not 
     appear in the margins. See the disk file HEADFOOT.MAR for an 
     example margin file. 

     PAGE requires enough free disk space to contain the finished 
     index. Page numbers, and the number of lines per page, can only 
     range up to 32,767. No more than 12 lines of 80 characters can 
     appear in either top or bottom margin. This routine runs very 
     quickly. 

     WARNING: The input and output file names must be different! PAGE 
     checks them to make sure they are not the same and prints an 
     error message if they are. 



                                    40









     REMOVE 

     This utility removes words from a reference list. It compares the 
     sorted word file produced by MAKEWORD to a list of common words. 
     We supply you with a 400 word list as a starting point. REMOVE 
     simply deletes all words in your reference list that are also 
     found in the common word list. Both files must contain only a 
     single word per line and be sorted in alphabetical order. REMOVE 
     requires free disk space equal in size to the original reference 
     list. To run REMOVE type: 

     remove infile outfile commonwords 

     where "infile" is the sorted list of reference words, "outfile" 
     is the name of the file you want the result stored in, and 
     "commonwords" is the name of a file containing a list of common 
     words you do not want in your reference list. This routine runs 
     very quickly. 

     WARNING: The input and output file names must be different! 
     REMOVE checks them to make sure they are not the same and prints 
     an error message if they are. 


     SORT 

     The SORT utility is an improved version of the MS-DOS SORT 
     command. The MS-DOS SORT command could be used but is much 
     slower! The SORT.EXE file must be located on the same disk as the 
     MAKEWORD utility, since MAKEWORD invokes SORT. SORT can also be 
     used to sort your list of common words or your index into 
     alphabetical order. To use it type: 

     sort filename 

     This will sort the file "filename" into alphabetical order. It 
     requires additional free disk space approximately equal to the 
     size of the original file. This disk space will be released upon 
     completion of the sort. The SORT routine takes an amount of time 
     that grows exponentially based on the size of the file. On an AT 
     running at 6 mhz and using a RAM disk, SORT takes about 32 
     seconds to sort a 30,000 byte file and 76 seconds to sort a 
     65,000 byte file. 

     There is no limit on the size of the file to be sorted with the 
     exception of disk space. The SORT utility prints messages to the 
     screen concerning how far it has progressed through the sort. 
     These messages give you an indication of what your current sort 
     status is. 

     Do not attempt to sort indexes that have sub-entries in them. If 
     the sub-entries are indented, SORT will treat them as a new line 
     and they will become intermixed with other entries. The same rule 
     applies to indexes that have multiple lines of page references. 


                                    41










     STRIP 

     The STRIP utility converts a file, typically from WordStar, into 
     true ASCII. Strip removes: the eighth bit from all data, all 
     extraneous control characters, and soft hyphens in the middle of 
     a line. Soft hyphens at the end of a line are converted to fixed 
     hyphens. STRIP can optionally remove WordStar dot commands and 
     all carriage returns in the middle of a paragraph. To use STRIP 
     type: 

     strip infile outfile [-sd] 

     The "infile" is the name of the file to work on. The "outfile" is 
     the name of the file to save the result in. The "s" option tells 
     STRIP to remove all carriage returns except those at the end of a 
     paragraph or on blank lines. The "d" options tells STRIP to 
     remove all dot commands. STRIP is provided solely as a 
     convenience for WordStar users. 

     WARNING: The input and output file names must be different! STRIP 
     checks them to make sure they are not the same and prints an 
     error message if they are. 

































                                    42








                                 PROBLEMS 

     Getting Started 

     Most first time problems with PROINDEX come from one of two 
     possible areas. Either your text or keyword file was not properly 
     prepared or you have not set up the index control parameters 
     correctly. If PROINDEX doesn't seem to work at all- it displays 
     junk in the interactive mode and your keywords are also not 
     correctly displayed, then the files from your word processor have 
     not been correctly prepared. Go back and read the section of the 
     manual on preparing text and keyword files. You most likely are 
     using what we call a Group 2 word processor. These word 
     processors do not save text in an ASCII format. The text must be 
     converted to ASCII before it can be used. 

     Demonstration text and keyword files are on your master disk. The 
     next chapter describes how to use and run these demonstration 
     files. Take a look at these files to see how they are 
     constructed. Pay close attention to the organization of the 
     keyword file. Yours should be very similar. 


     PROINDEX Misses References 

     This is a common complaint and is usually an easy problem to fix. 
     The program does what you tell it to. If your keyword file is not 
     exact, or the index control parameters are not set correctly it 
     will appear as if PROINDEX misses some references. 

     Lets start with the keyword file. PROINDEX searches for an exact 
     match to your keyword or phrase. This includes all spaces and 
     punctuation in your keyword file. PROINDEX looks for a match 
     between whatever is on a line in the keyword file and your text. 
     This search includes all characters on a line in the keyword file 
     up to the f character, carriage return / line feed pair. If your 
     keywords have extra spaces, too few spaces, or extra punctuation 
     added to them you will never find a match. See the chapter on 
     preparing your keyword file for more information. 

     If your keyword file is correct there are several other 
     possibilities that can make it appear like PROINDEX is missing 
     references. If you expect to see multiple index references on a 
     single page you must set the index control option telling 
     PROINDEX to function this way. PROINDEX is normally configured to 
     allow only a single reference per page of text. This means that 
     once a match for a keyword is found, PROINDEX will skip the rest 
     of that page! This is the standard way of indexing. If you need 
     to see multiple references per page of text just change the index 
     control parameter. 

     Another reason references may be missed has to do with text case. 
     A keyword with the first letter capitolized will not match non-
     capitolized text! To get around this problem change the index 
     control parameter that controls text case. This tells PROINDEX to 


                                    43








     create temporary working copies of your text and keyword files 
     that are all in upper case. This will ensure you don't miss 
     references due to capitolized text. 

     Finally, take note WordStar users, the strip 8th bit for text 
     control parameter can effect your indexing results. If your word 
     processor sets this bit it will effect references in your index. 
     Changing the index control parameter to strip this bit out of 
     your text and keyword files usually corrects the problem. 


     Paging Problems 

     Why don't the page numbers in your index match those in your text 
     file? They really should. If they don't it is because your text 
     file has not been prepared correctly or because an index control 
     parameter has not been set correctly. All text file must be paged 
     by your word processor before being fed to PROINDEX. Print your 
     text file to disk to do this. See the chapter on preparing your 
     text files. 

     Alternately, you must mark the end of each page of text with a 
     special character,  and tell PROINDEX what this character is. 
     PROINDEX either looks for this special character or counts the 
     number of lines per page. Both options are selected and 
     controlled on the index control parameters menu. Standard 8 A by 
     11 inch paper typically has 66 lines per page. PROINDEX defaults 
     to this number. You can change this if you vary the line spacing 
     on your printer or are using a different page size. 


     Error Messages 

     There are a number of different error messages that can be 
     generated while running PROINDEX. These error messages are 
     supposed to be self explanatory. Since screen space is limited 
     these error messages may need a bit of explaining. They are 
     listed here in alphabetical order with a more detailed 
     explanation for those who are still confused. 

     Can't get free disk space on drive X. Does this disk drive exist? 

     PROINDEX always attempts to determine the amount of free disk 
     space on the work disk drive before creating files there. In this 
     case the MS-DOS operating system returned an error code back to 
     PROINDEX which indicates that the specified disk drive, X, does 
     not exist. Are you sure this is a valid disk drive? If it is a 
     valid drive, is a floppy disk in it and is the disk drive door 
     closed? Is the floppy disk formatted? The same questions apply to 
     hard disks. Correct the hardware problem and attempt to index the 
     file again. Or, if you entered an erroneous disk drive name use 
     the E option to edit the disk drive name to a correct on. Then 
     start the indexing process again. 

     Can't make the temporary work file [filename]. 


                                    44








     Is this disk write protected? 

     PROINDEX attempted to create a temporary work file and was not 
     allowed to do so by the operating system. This usually indicates 
     that the disk to create the file on was write protected. Remove 
     the write protection and start over. Alternately, a disk drive 
     door was opened during the operation of the program. Don't do 
     that! 

     Fatal Error: can not open disk output file for index, name. 
     PROINDEX attempted to create the disk index file and was not 
     allowed to do so by the operating system. This usually indicates 
     a hardware failure in your computer! By this time PROINDEX has 
     sucessfully worked with all disk drives you have specified. It 
     can not create the last disk file needed! 

     Not enough room on default drive, path \pathname for the 
     temporary files. 
     Chose another disk drive or free more space on it. 

     PROINDEX creates temporary working copies of your text files. 
     These files may have the most significant bit stripped from them 
     and/or their case changed to upper. These work files need disk 
     space equal in length to the size of your original text and 
     keyword files. There is not enough room on the work drive you 
     specified to hold these files. Chose another work drive or free 
     up more disk space for PROINDEX to work with. 

     Sorry, the old index file doesn't have a correct continue marker. 
     You can not continue the index filename. (You probably finished 
     this index. Rather than write over it we will return back to the 
     main menu so you can check this out.) Hit any key return to the 
     main menu. 

     You have attempted to continue an old indexing session with a 
     completed index or with an altered one. Go to the eXecute an MS-
     DOS command menu and examine the old index. You will have to 
     determine what to do next based on the contents of this index 
     file. 

     System command error 

     When using the eXecute an MS-DOS command menu you attempted to 
     run a non-existant command. Use the DIR command or you MS-DOS 
     manual to find the correct command. (Or correct your spelling.) 

     System command failed 

     When using the eXecute an MS-DOS command menu the command you 
     selected and ran failed. This command returned an error code to 
     PROINDEX instead of returning normally. PROINDEX is simply 
     reporting this fact back to you. You must determine what to do 
     next. 

     The keyword file [filename] can't be found. 


                                    45








     Is this the right file name and disk drive? 

     PROINDEX can not locate the keyword file you specified at the top 
     of this menu page. Make sure the file name, path, and disk drive 
     are correct. You can edit the keyword file name with the E option 
     on the main menu. If the file name, path, and drive appear 
     correct do a DIR command on that disk, using the eXecute an MS-
     DOS command menu, to see if the file is really there. 

     The text file [filename] can't be found. 
     Is this the right file name and disk drive? 

     PROINDEX can not locate the text file you specified at the top of 
     this menu page. Make sure the file name, path, and disk drive are 
     correct. You can edit the text file name with the E option on the 
     main menu. If the file name, path, and drive appear correct do a 
     DIR command on that disk, using the eXecute an MS-DOS command 
     menu, to see if the file is really there. 

     There is not enough room on path \pathname for the temporary 
     files. 
     Chose another disk drive or free more disk space. 

     PROINDEX has determined that there is not enough room on the work 
     disk drive and path for all the files it must create. You must 
     have at least as much free disk space here as your text and 
     keyword files occupy. Either change the work drive to a disk that 
     has more room, or make more room on this disk by removing 
     unnecessary files. See below. 

     There is not enough room on the default drive for the temp- 
     orary files. 

     PROINDEX has determined that there is not enough room on the work 
     disk drive for all the files it must create. You must have at 
     least as much free disk space here as your text and keyword files 
     occupy. Either change the work drive to a disk that has more 
     room, or make more room on this disk by removing unnecessary 
     files. See above. 

     This is quite confusing. The program version number and con- 
     figuration file version number don't match. Please erase this 
     configuration file and copy the correct configuration file from 
     your PROINDEX master disk to your work disk! 

     The configuration file that PROINDEX uses to remember the way you 
     want to index your files has a version number saved in it. This 
     ensures that PROINDEX will never use an old configuration file. 
     The configuration file may vary from version to version of 
     PROINDEX. PROINDEX has discovered that its version number does 
     not match that of the configuration file. Simply delete the 
     configuration file. PROINDEX will create a new, correctly 
     identified, configuration file when you run it. Remember to 
     change this configuration file to reflect your indexing style. 



                                    46








                            DEMONSTRATION FILES 

     A demonstration text and keyword file can be found on the 
     PROINDEX master disk. These two files are called PROTEST.TXT and 
     PROTEST.KEY. The text file or document is in the disk file with 
     the '.TXT' extension, while the file with the '.KEY' extension is 
     the keyword or phrase list. This demonstration assumes that the 
     configuration file has not been changed form its default values. 

     These files were created with the WordStar text editor. The text 
     file was made using WordStar in the document mode while the 
     keyword file was created using the non-document mode. The 8th 
     bit, MSB, has been stripped from these files to make them less 
     confusing to people who are unfamiliar with WordStar. 

     To run PROINDEX using these test files first copy both files from 
     this master disk to your PROINDEX work disk or hard disk path. 
     Log on to that disk or path and type: 

     PROINDEX 

     You will see the screen shown in figure 1 followed by the screen 
     from figure 2. You will then be asked for the name of the text 
     file to index. Type: PROTEST.TXT. When asked for the name of the 
     keyword list type: PROTEST.KEY. When asked for the path for 
     temporary work files either give a vaild work drive or hit return 
     to use the current disk for work space. You have now told 
     PROINDEX the name of the keyword and text files and where to put 
     the work files and you will advance to the menu shown by figure 
     3. 

     Now select the I option, Index the text, from the main menu and 
     hit a return. The program will indicate that it is creating work 
     files and then change to the indexing menu screen, as shown in 
     figure 5. You are now running PROINDEX in the interactive mode. 
     You will be prompted each time PROINDEX finds a match and asked 
     whether to Mark, Skip, Bypass, All, or Quit. This is how PROINDEX 
     runs in the interactive mode. Each keyword or phrase is 
     highlighted in context on your screen. This helps you decide 
     whether to include the reference in your index. You may quit at 
     any time and restart at the point you left off later on. Your 
     index will be saved on the disk under the name PROTEST.IND. 

     To see what your index is like you can quit indexing at any time 
     and return to the main menu, figure 3. From that point select the 
     "X" menu option to eXecute an MS-DOS command. You will move to 
     the MS-DOS execution menu, as shown in figure 6. Enter the MS-DOS 
     command "type protest.ind". This will type out the demonstration 
     index as it presently stands. You can then return back to the 
     main menu, select the "C" option to continue your index, and 
     resume indexing where you left off. 

     If you feel like experimenting you can change some of the 
     variables on the index control parameters menu, figure 4, and see 
     how this effects the resulting index. Or try sending the index to 


                                    47








     the printer instead of a disk file. 
























































                                    48








                                   Index

     All command, 2, 12, 29
     ASCII, 1, 7 - 9, 11, 13, 16, 25 - 27, 31, 34 - 36, 42, 43
     Backslash key, 5, 21
     Backspace key, 20
     BIOS calls, 2, 3, 5
     Bold display, 3, 5, 29
     Bypass command, 2, 12, 29
     Chapter, 3 - 6, 14, 26, 37 - 39, 43, 44
     COMMON.TXT, 36
     Configuration, 16 - 19, 24, 46, 47
     Control-A, 20
     Control-W, 20
     Data
       fields, 20
       entry, 3, 5, 12, 19, 20, 29, 36
     Default disk, 18
     Delete key, 3, 5, 19, 20, 41, 46
     End of page, 17, 24
     Fancy Font, 9
     Floppy disk, 19, 34, 35, 44
     Hard disk, 2, 19, 34, 35, 37, 44, 47
     HEADFOOT.MAR, 40
     IBM PC, 2, 3, 20, 34
     Interactive mode, 1, 2, 9, 11, 12, 14, 16, 17, 28 - 30, 43, 47
     Interrupt 10H, 2
     Line numbers, 3, 4, 13, 26, 27
     MAKEWORD, 3, 36, 37, 41
     Margins, 4, 39, 40
     Mark command, 2, 12, 29
     MERGE, 4, 26, 37 - 39
     MS-DOS, 2, 7, 11, 17, 18, 22, 23, 30, 34, 35, 39, 41, 44 - 47
     Multiple references per page, 6, 24, 29, 43
     Opening screen, 19
     Options, 5, 12, 18, 21, 22, 24, 29, 31, 32, 36, 42, 44
     Output, 1, 4, 9, 15, 24, 28, 31, 32, 36 - 42, 45
     Printer2, 16, 17, 28, 31, 32, 44, 48
     PROINDEX.CNF, 16, 17, 19
     PROINDEX.EXE, 18
     Quit, 21 - 23, 31, 47
     REMOVE, 3, 7 - 9, 20, 26, 28, 31, 32, 36, 37, 39, 41, 42, 45
     Requirements, 9
     Screens, 2, 4, 5, 7, 9, 16, 19 - 21, 23, 24, 29, 37, 41, 44, 47
     Secondary references, 5, 11, 14, 15
     Set Command, 10, 17, 26, 43, 44
     Skip command, 12, 13, 30
     SORT, 4, 36, 37, 41
     Speed, 29, 34, 35
     Starting page number, 16, 17, 24, 37
     STRIP, 17, 27, 36, 42, 44
     Stripping bits, 34
     Subdirectories, 18, 19
     Temporary file, 1, 45



                                    49








                                   Index

     Text case, 3, 8 - 10, 13, 16, 17, 24, 26, 27, 34, 36, 43, 44, 45
     Utility programs, 1, 4, 26, 36 - 39, 41, 42
     WordStar, 1, 7, 8, 27, 36, 42, 44, 47
     Work
       drive, 20, 34, 35, 45 - 47
       files, 1, 21, 28, 29, 45, 47

















































                                    50








                            DISTRIBUTION NOTICE 

     This  program  is  protected by United States Copyright  law  and         
     by International Treaty provisions.  You may distribute, or share 
     this  version of this program with anyone provided the  following 
     conditions are met:

     This version of PROINDEX is being distributed at no charge to all 
     who  are  interested in it.   This version does not  include  the 
     utility programs mentioned in the documentation.  To those of you 
     unfamiliar with this approach,  it works like this.   PROINDEX is 
     distributed to various BBS systems and user groups.  You may copy 
     the  program  and use it for no charge.   Gary Elfring  does  not 
     handle the actual freeware distribution of this program.

     Try  the  BBS  version out.   If the product does not  meet  your 
     needs, you pay nothing.  If the product does meet your needs, and 
     you can use it, then send us the price of $65.00 U.S.

     We will then supply you with an updated version of PROINDEX,  all 
     the  utility  programs,  improved typeset documentation for  that 
     version,  telephone  support,  and one free  update.   We  accept 
     check, and money orders.

     This offer may be withdrawn at an time without notice.

     Send check or money order to:      Gary Elfring 
                                        4N899 West Mary Drive
                                        St. Charles, Illinois
                                        60174
                                        312-377-3520

     Even  if  you do not contribute,  you are encouraged to copy  and 
     distribute  the BBS version of the product freely subject to  the 
     following restrictions: 

     1. Do not distribute altered copies.   If you have suggestions or 
        fixes  you  would like to see,  send us a  written  note.   We 
        welcome all responses.

     2. This product must be distributed complete including the files: 
        PROINDEX.EXE, PROINDEX.DOC, PROTEST.TXT, and PROTEST.KEY. 

     3. No  fee is to be charged for copying or distributing the  pro-
        gram without  an  express  WRITTEN agreement with Gary Elfring  
        The  ONLY exception to this rule is:  a small charge,  ($5  to 
        $10),  may  be leveled if this program is included on a set of 
        public domain disks. This charge must be reasonable and repre-
        sent only copying and disk fees. 

     4. Commercial  sale of this product in any manner  is  prohibited 
        without Gary Elfring's written permission. 

     User Groups/Clubs:   Gary Elfring's freeware products may be dis-
     tributed  by Clubs and User Groups subject to the  same  restric-


                                    51








     tions.  We  would  ask only that contributions to our  continuing 
     efforts be encouraged by those performing such distribution. 

     Computer Bulletin Boards:   Gary Elfring's freeware products  may  
     be  distributed  by BBS's subject to  the same  restrictions  and 
     contribution encouragement. 



















































                                    52






```
{% endraw %}

## PROTEST.TXT

{% raw %}
```



                           The Date Utilities


     DCOPY
     Command
     ________________________________________________________________

     Purpose:  Copy one or more files to the specified disk drive and 
               path based on a comparison of the file date with a 
               passed date.

     Format:   DCOPY filename destination [date] [time] [-options]

               Where: everything between the two braces "[" and "]"
                      is optional and,

               filename    - is any valid file name with optional 
                             drive and path.  The wildcards "*" and 
                             "?" may be used in the filename.
               destination - is any valid drive and path
               date        - is a valid date of the form MM/DD/YY
               time        - is a valid time of the form HH:MM:SS
               options     - always start with the "-" character and 
                             include: a = archive, b = before, l = 
                             later, o = on, p = prompt.

     Remarks:  This command functions in basically the same manner as 
               the MS-DOS COPY command.  However, DCOPY lets you copy 
               files based on the file's creation date / update time 
               stamp.  There are three major differences between DCOPY 
               and the MS-DOS command COPY.  First, files are copied 
               to the specified drive and path ONLY if each file date 
               and time matches the optional condition(s) specified. 
               Second, files can NOT be renamed as they are copied.  
               Third, DCOPY will pause when your destination floppy, 
               (A: or B:), becomes full.  You can then change 
               floppies, format a new floppy, or quit.

               DCOPY copies a file or group of files based on the file 
               dates.  Full wild card support is included for the file 
               name.  The global characters "?" and "*" can be used in 
               in the file name and extension parameters.  These 
               global characters work in exactly the same way as they 
               do with a COPY command.

               If you don't remember how to use DCOPY you can always 
               type DCOPY{cr}, where {cr} signifies the return key.  
               DCOPY will then print a help screen that tells you how 
               to run the program.

               DCOPY offers five different options.  Options may be 
               grouped together in any combination.  An option or 
               group of options must always be preceded by the "-" 
               character.  Three of these options, (b, l, o), modify 
               the way the specified date effects a copy.  The "-b" 
               option tells DCOPY to copy files created BEFORE the 
               specified date.  The "-o" option copies files created 


                                     1






                           The Date Utilities


               ON the specified date.  The "-l" option copies files 
               created LATER than, (after), the specified date.  The 
               remaining two options control special features.  The 
               "-a" option tells DCOPY to copy only those files that 
               have not previously been archived.  If you use this 
               option DCOPY will only copy files that have not 
               previously been backed up.  The last option is "-p".  
               This option causes DCOPY to pause and prompt you with 
               the name of the file being copied.  YOU decide whether 
               or not to copy the file by responding with "Y" or "N".

               To use DCOPY you MUST specify a file name or pattern, 
               and a destination drive at a minimum.  If no date and 
               time is included in the command, DCOPY assumes you want 
               to copy files created or updated on the current day.  
               Thus:

               dcopy *.* a:

               copies all files created or updated after 12:00 AM on 
               the current day.  This assumes the time and date set in 
               your IBM PC, XT, or AT is correct.

               Making a copy of files based on a different time and 
               date is just as easy.  To do this DCOPY needs to know 
               the date, (and optionally a time), and whether to copy 
               files created: before, on, or after this date.  Copy 
               control is based on options.  Note that if no TIME is 
               specified the time is assumed to be 0:00, the previous 
               day's midnight.

               dcopy *.obj b: 12/12/84 -ol

               copies all files from the default drive with the 
               extension ".obj" that were created or last updated ON 
               or LATER than 12 AM on 12/12/84 to the B: drive.  The 
               files copied to drive B: will have the same name and 
               time stamp as they had on the default drive.

               dcopy b:work.* a: 1/2/85 15:00:00 -b

               copies all files from the B: drive that have the file 
               name "work" and any extension, to the A: drive PROVIDED 
               that the file was last created or updated before 3:00 
               PM on 1/2/85.

               dcopy c:\work\*.c d:\help 2/20/86 -o

               copies all files with the extension ".c" from the path 
               c:\work to the path d:\help provided each file was last 
               updated only on the day of 2/20/86.

               dcopy *.* b: 1/1/86 -olp



                                     2






                           The Date Utilities


               copies all files to drive B: provided they were created 
               on or later than 1/1/86.  The user will be prompted 
               before each file is copied with:

               Copy filename to b:filename (Y/N)?

               You must enter either a "Y" or "N" followed by a 
               carriage return.  Entering a "Y" tells DCOPY to proceed 
               with the transfer of the file.  Entering anything else 
               will cause DCOPY to skip that one file.

               DCOPY also provides full archive file control with the 
               "-a" option.  Each file has a status bit that can be 
               used to indicate whether it has been backed up.  If you 
               use the "-a" option DCOPY will only copy those files 
               not marked as having been previously backed up.  DCOPY 
               will also mark the original file to indicate it has 
               been backed up.

     Copying   DCOPY has one other major feature that has not been 
     Files     mentioned yet.  When you use DCOPY to copy to a 
     to        removable media, a floppy disk for example, DCOPY will 
     Floppy    pause when that disk becomes full.  At this point you 
     Disk      can quit the copying process, insert a new formatted 
               disk and continue, or format a new disk and then 
               continue.  DCOPY will prompt you with a message 
               explaining what is going on when the disk becomes full.  
               For example:

               We've run out of disk space on drive B:
               Put a new formatted disk in that drive and hit "C" to 
               continue, OR hit "F" to format a new disk, OR hit "Q" 
               to quit DCOPY now.

     Notes:    DCOPY can handle directories of any length.  However, 
               the larger your disk directory the longer it will take 
               DCOPY to process it.  If you have a directory with 600 
               files in it it should take DCOPY about 6 seconds to 
               read through the entire directory on an IBM AT, or 12 
               seconds on a PC.  If it takes longer than this you 
               should change your config.sys file to increase then 
               number of buffers to BUFFERS=8.

               DCOPY first looks for a file match to your pattern and 
               date.  If one is found it is copied as soon as it is 
               seen.  The program then goes on to find the next match.  
               If you use a wildcard like *.* and have very few dates 
               that match it may seem like DCOPY is doing an excessive 
               amount of disk access.  This is not the case.  DCOPY is 
               simply finding each matching pattern and then checking 
               the file date.  This does take a little time.





                                     3






                           The Date Utilities


     DERASE
     Command
     ________________________________________________________________

     Purpose:  Erase one or more files from the specified disk and 
               path based on a comparison of the file date with a 
               passed date.

     Format:   DERASE filename [date] [time] [-options]

               Where: everything between the two braces "[" and "]"
                      is optional and,

               filename    - is any valid file name with optional 
                             drive and path.  The wildcards "*" and 
                             "?" may be used in the filename.
               date        - is a valid date of the form MM/DD/YY
               time        - is a valid time of the form HH:MM:SS
               options     - always  start with the "-" character  and 
                             include: b = before, l = later, o = on, 
                             p = prompt.

     Remarks:  This command functions in basically the same manner as 
               the MS-DOS ERASE command.  DERASE, however, offers two 
               major differences or improvements over the standard 
               ERASE command.  First, file erasure is based on a 
               specified date.  Files can be erased that were created 
               before, on, or after a specified date.  (Any combina-
               tion of these options is legal.)  Second, a prompt 
               first option lets you select individual files for 
               erasure.

               DERASE deletes a file or group of files based on the 
               file dates.  Full wild card support is included for the 
               file name.  The global characters "?" and "*" can be 
               used in in the file name and extension parameters.  
               These global characters work in exactly the same way as 
               they do with the ERASE command.

               If you don't remember how to use DERASE you can always 
               type DERASE{cr}, where {cr} signifies the return key.  
               DERASE will then print a help screen that tells you how 
               to run the program.

               DERASE has four different options.  Options may be 
               grouped together in any combination.  An option or 
               group of options must always be preceded by the "-" 
               character.  Three of these options, (b, l, o), modify 
               the way the specified date effects file deletion.  The 
               "-b" option tells DERASE to delete files created BEFORE 
               the specified date.  The "-o" option deletes files 
               created ON the specified date.  The "-l" option deletes 
               files created LATER than, (after), the specified date.  
               The last option is "-p".  This option causes DERASE to 


                                     4






                           The Date Utilities


               pause and prompt you with the name of the file to be 
               deleted.  YOU decide whether or not to delete the file 
               by typing a "Y" or "N".

               To use DERASE you MUST specify a file name or pattern 
               at a minimum.  If no date and time is included in the 
               command, DERASE assumes you want to delete files 
               created or updated on the current day.  Thus:

               derase *.bak

               deletes all files with the extension .bak created or 
               updated after 12:00 AM on the current day.  This 
               assumes the time and date set in your IBM PC, XT, or AT 
               is correct.

               Deleting files based on a different time and date is 
               just as easy.  To do this DERASE needs to know the 
               date, (and optionally a time), and whether to erase the 
               files created: before, on, or later than this date.  
               Deletion control is based on options.  Note that if no 
               TIME is specified the time is assumed to be 0:00, the 
               previous days midnight.

               derase *.obj 12/12/84 -ol

               deletes all files from the default drive with the 
               extension ".obj" that were created or last updated ON 
               or LATER than 12 AM on 12/12/84.

               derase b:work.* 1/2/85 15:00:00 -b

               deletes all files from the B: drive that have the file 
               name "work" and any extension, PROVIDED that the file 
               was last created or updated before 3:00 PM on 1/2/85.

               derase c:\work\*.c 2/20/86 -o

               deletes all files with the extension ".c" from the path 
               c:\work provided each file was last updated only on the 
               day of 2/20/86.

               derase *.* 1/1/86 -olp

               deletes all files provided they were created on or 
               later than 1/1/86.  The user will be prompted before 
               each file is erased with:

               Erase filename (Y/N)?

               You must enter either a "Y" or "N" followed by a car-
               riage return.  Entering a "Y" tells DERASE to erase 
               that file.  Entering anything else will cause DERASE to 
               leave that file alone.


                                     5






                           The Date Utilities


     CDATE
     Command
     ________________________________________________________________

     Purpose:  Change the date of one or more files that fit the 
               filename pattern passed.

     Format:   CDATE filename [date] [time] [-options]

               Where: everything between the two braces "[" and "]"
                      is optional and,

               filename    - is any valid file name with optional 
                             drive and path.  The wildcards "*" and 
                             "?" may be used in the filename.
               date        - is a valid date of the form MM/DD/YY
               time        - is a valid time of the form HH:MM:SS
               options     - starts with the "-" character and 
                             includes: p = prompt before changing.

     Remarks:  This command has no MS-DOS counterpart.  CDATE changes 
               the date of a file or group of files to a date passed 
               in the command.  Full wild card support is provided for 
               the file name.  The global characters "?" and "*" can 
               be used in in the file name and extension parameters.  
               These global characters work in exactly the same way as 
               they do with all other MS-DOS commands.

               If you don't remember how to use CDATE you can always 
               type CDATE{cr}, where {cr} signifies the return key.  
               CDATE will then print a help screen that tells you how 
               to run the program.

               CDATE has only a single option.  Adding the "-p" option 
               to the command causes CDATE to pause and prompt you 
               with the name of the file whose date is to be changed.  
               YOU decide whether or not to change the file date by 
               typing a "Y" or "N".

               To use CDATE you MUST specify a file name or pattern at 
               a minimum.  If no date and time is included in the 
               command, CDATE assumes you want to change the file date 
               and time to the current system date and time.  Thus:

               cdate *.bak

               changes the date of all files with the extension .bak 
               to the current system time and date.  Hopefully the 
               time and date set in your IBM PC, XT, or AT is correct.

               Changing a file's date and time stamp to a specified 
               date and time is just as easy.  To do this CDATE needs 
               a date, (and optionally a time).



                                     6






                           The Date Utilities


               cdate *.obj 12/12/84

               changes the date of all files on the default drive with 
               the extension ".obj" to 12/12/84 00:00:00.

               cdate c:\work\*.c 2/20/86 15:00:00

               changes the date of all files from the path C:\work 
               that have the extension ".c" to 1/2/85, 3:00 PM.

               cdate *.* 1/1/86 -p

               changes the date of all files on the default drive to 
               1/1/86.  The user will be prompted before each file 
               date is changed with:

               Change the date of filename (Y/N)?

               You must enter either a "Y" or "N" followed by a car-
               riage return.  Entering a "Y" tells CDATE to change the 
               date of that file.  Entering anything else will direct 
               CDATE to leave that file alone.


































                                     7






                           The Date Utilities


     DDIR
     Command
     ________________________________________________________________

     Purpose:  List the directory of the specified disk and path.  
               Directory is limited by date and may be sorted in one 
               of several different ways. 

     Format:   DDIR filename [date] [time] [-options]

               Where: everything between the two braces "[" and "]"
                      is optional and,

               filename    - is any valid file name with optional 
                             drive and path.  The wildcards "*" and 
                             "?" may be used in the filename.
               date        - is a valid date of the form MM/DD/YY
               time        - is a valid time of the form HH:MM:SS
               options     - always start with the "-" character and 
                             include: b = before, l = later, o = on,  
                             p = prompt.  Directory is normally sorted 
                             alphabetically by name but may be sorted 
                             by: d = date, e = extension, n = no sort, 
                             s = file size.

     Remarks:  This command functions in basically the same manner as 
               the MS-DOS DIR command.  However, DDIR differs in 
               several important ways.  First, DDIR will automatically 
               sort your directory alphabetically.  You can optional 
               change the sorting preference to sort by: extension, 
               date, or file size.  (You can also disable all 
               sorting.)  Second, DDIR displays directory entries 
               limited by a passed file date.

               DDIR displays directory entries based on the file dates 
               plus other constraints.  Full wild card support is 
               included for the file name.  The global characters "?" 
               and "*" can be used in in the file name and extension 
               parameters.  These global characters work in exactly 
               the same way as they do with a DIR command.

               If you don't remember how to use DDIR you can always 
               type DDIR{cr}, where {cr} signifies the return key.  
               DDIR will then print a help screen that tells you how 
               to run the program.

               DDIR offers seven different options.  All options, 
               except sorting order control, may be grouped together 
               in any combination.  An option or group of options must 
               always be preceded by the "-" character.  Three of 
               these options, (b, l, o), modify the way the specified 
               date effects a directory.  The "-b" option tells DDIR 
               to display only files created BEFORE the specified 
               date.  The "-o" option displays files created ON the 


                                     8






                           The Date Utilities


               specified date.  The "-l" option displays files created 
               later than, (after), the specified date.  The remaining 
               four options control the order that the directories are 
               sorted.  Directories are normally sorted alphabetically 
               by file name.  The d, e, n, & s options change the 
               order that a directory will be sorted in.  The "-d" 
               option sorts a directory based on the file dates.  The 
               "-e" option sorts the directory alphabetically based on 
               file extension.  The "-n" option disables sorting of 
               the directory.  Finally, the "-s" option sorts a 
               directory based on file size.

               To use DDIR you MUST specify a file name or pattern at 
               a minimum.  If no date and time is included in the 
               command, DDIR assumes you want the directory of all 
               files created or updated on the current day.  Thus:

               ddir *.*

               displays the directory of all files created or updated 
               after 12:00 AM on the current day.  This assumes the 
               time and date set in your IBM PC, XT, or AT is correct.

               Displaying directories of files created on a different 
               time and date is just as easy.  To do this DDIR needs 
               to know the date, (and optionally a time), and whether 
               to display files created: before, on, or later than this 
               date.  Note that if no TIME is specified the time is 
               assumed to be 0:00, the previous days midnight.

               ddir *.obj 12/12/84 -ol

               displays the directory of all files on the default 
               drive with the extension ".obj" that were created or 
               last updated ON or LATER than 12 AM on 12/12/84.  The 
               files will be displayed in alphabetical order.

               ddir b:work.* 1/2/85 15:00:00 -bd

               displays the directory of all files from the B: drive 
               that have the file name "work" and any extension, 
               PROVIDED that the file was last created or updated 
               before 3:00 PM on 1/2/85.  The files will be sorted 
               in ascending order based on file date, (oldest first).

               ddir c:\work\*.c 2/20/86 -oe

               displays the directory of all files with the extension 
               ".c" from the path c:\work provided each file was last 
               updated on the day of 2/20/86. The directory will be 
               sorted alphabetically based on file extension.

               ddir *.* 1/1/86 -ln



                                     9






                           The Date Utilities


               displays the directory of all files provided they were 
               created later than 1/1/86.  No sorting of the directory 
               will take place.

               ddir *.* 1/1/86 -ls

               displays the directory of all files provided they were 
               created later than 1/1/86.  Files will be sorted based 
               on file size.

     Notes:    DDIR can only handle directories that have 2048 or less 
               entries.  The larger your disk directory the longer it 
               will take DDIR to process it.  Finding and sorting 
               files takes time.  If it takes to long to sort your 
               large directories try changing your config.sys file to 
               increase then number of buffers to BUFFERS=8.








































                                    10






                           The Date Utilities


                            DISTRIBUTION NOTICE 

     This package of utilities is protected by United States Copyright 
     law and by International Treaty provisions.   You may distribute, 
     or  share  the  "demo"  version of these  utilities  with  anyone 
     provided the following conditions are met:

     A "demo" version of the DATE UTILITIES is being distributed at no 
     charge  to  all  who  are interested in  it.   To  those  of  you 
     unfamiliar  with  this  approach,  it  works  like  this.   These 
     utilities are distributed to various BBS systems and user groups.  
     You may copy the program and use it for no charge.   Gary Elfring 
     does not handle the actual distribution of this program.

     The  BBS version of this program has been INTENTIONALLY  limited.  
     It will only work until 9/1/86 and will not format disks for you.

     This limitation is imposed because very few people pay for  these 
     programs otherwise.  If you regularly pay for programs like this, 
     sorry for the inconvenience.  NOTE: that even though this version 
     is time limited it is fully functional.  Try the BBS version out.  
     If the product does not meet your needs, you pay nothing.  If the 
     product  does meet your needs,  and you can use it,  then send us 
     the  introductory price of $30.00 U.S.   This price is only  good 
     through 9/1/86 and may be withdrawn at any time.

     I  will  then  supply  you with the  real  version  of  the  DATE 
     UTILITIES, (none are time limited or copy protected), along with 
     quality documentation for that version.  I accept check, money 
     order, Master Card, VISA, or good old fashioned cash.  These 
     utilities include:

          DCOPY     - Copy files based on wildcard and date
          DERASE    - Erase files based on wildcard and date
          DDIR      - Display files based on wildcard and date
          CDATE     - Change a files time and date stamp

     Send check or money order to:      Gary Elfring
                                        4N899 West Mary Drive
                                        St. Charles, Illinois
                                        60174
                                        312-377-3520

     Even  if  you do not contribute,  you are encouraged to copy  and 
     distribute  the BBS version of the product freely subject to  the 
     following restrictions: 

     1. Do not distribute altered copies.   If you have suggestions or 
        fixes  you  would like to see,  send us a  written  note.   We 
        welcome all responses.

     2. This product must be distributed complete including the files: 
        DCOPY.EXE, DERASE.EXE, CDATE.EXE, DDIR.EXE, & DATEUTIL.DOC.



                                    11






                           The Date Utilities


     3. No  fee is to be charged for copying or distributing the  pro-
        gram   without   an   express   WRITTEN  agreement  from  Gary 
        Elfring.  The ONLY exception to this rule is:  a small charge, 
        ($5 to $10),  may be leveled if this program is included on  a 
        set of public domain disks. This charge must be reasonable and 
        represent only copying and disk fees. 

     4. Commercial  sale of this product in any manner  is  prohibited 
        without Gary Elfring's written permission. 

     User Groups/Clubs:  Gary Elfring's products may be distributed by 
     Clubs and User Groups subject to the same restrictions.  We would 
     ask  only that contributions to our continuing efforts be encour-
     aged by those performing such distribution. 

     Computer Bulletin Boards:   Gary Elfring's products  may  be dis-
     tributed by BBS's subject to  the same restrictions and contribu-
     tion encouragement. 


                                 WARRANTY

     Gary Elfring specifically disclaims all warranties,  expressed or 
     implied,  including  but  not limited to,  implied warranties  of 
     merchantability and fitness for a particular purpose with respect 
     to defects in the disk or documentation,  and the program license 
     granted herein.  In no event shall Elfring be liable for any loss 
     of  profit  or any other commercial  damage,  including  but  not 
     limited to special, incidental, consequential, or other damages.



























                                    12



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0977

     Volume in drive A has no label
     Directory of A:\

    FILE0977 TXT       831   7-12-89   9:01a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   7-06-89   2:59p
    MANUAL   BAT       147   7-06-89   2:54p
    PAGE     COM       325   1-06-87   4:21p
    PROINDEX DOC    124416   1-15-87  12:56p
    PROINDEX EXE     36492   1-01-87
    PROTEST  KEY       249   1-01-87
    PROTEST  TXT     29804   1-01-87
    VIEW     BAT        37   7-06-89   2:53p
           10 file(s)     193033 bytes
                          122880 bytes free
