---
layout: page
title: "PC-SIG Diskette Library (Disk #378)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0378/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0378"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DICTIONARY"

    This disk is full of tools to aid the aspiring writer.  If you wish to
    check your spelling, we have a nice BASIC-based dictionary program.
    Along with it there is a simple text editor included, as well as word-
    counters and complexity analyzers.  For anyone interested in improving
    the quality of their writing, this is a good investment.
    
    System Requirements: Some programs require BASIC
    
    How to Start: Consult the .DOC files for instructions.  To run programs
    suffixed .COM or .EXE: enter their name and <ENTER>, i.e., for
    WORDFREQ.EXE, type WORDFREQ and hit <ENTER>.  To run the PC-SPELL.BAS
    type BASICA PC-SPELL and hit <ENTER>.
    
    Suggested Registration:  FSED $35.00; FOGFIN $15.00
    
    File Descriptions:
    
    SETFSED  DOC  Documentation for SETFSED.COM
    SETFSED  COM  FSED installation program
    FSED     DOC  Manual for FSED
    FSED     COM  FSED V2.0 Full Screen Editor by D.W. Daetwyler
    CHOP     EXE  Subdivides text files - Ver 1.1 by W.J. Kennamer
    INDEX    EXE  Creates index of word & phrases marked with control codes
    INDEX    DOC  Documentation for INDEX.EXE
    FOGFIN   DOC  Documentation for FOGFIN.COM
    FOGFIN   COM  Measures writing complexity using Gunning Fog Index
    WORDFREQ BAS  Source for WORDFREQ.EXE
    WORDFREQ EXE  Graphs word length frequency for a writing sample
    DICTIONA      PC-SPELL dictionary of correctly spelled words
    SORTDIC  BAS  Adds words to PC-SPELL dictionary
    PC-SPELL UNI  Part of PC-SPELL
    PC-SPELL DOC  Documentation to PC-SPELL V1.0
    PC-SPELL SOR  Part of PC-SPELL dictionary oriented spelling checker
    TALLY    EXE  Counts characters, words, & lines (similar to UNIX WC)
    PC-SPELL BAS  Ver 1.0 of ASCII file spelling checker by Andy Wildenberg
    FSEDIT   EXE  A simple full screen editor called the Stopgap Editor
    FSEDIT   DOC  Summary of MicroComputing article about Stopgap Editor
    TALLY    DOC  Documentation for TALLY.EXE
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES378.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 378   Dictionary                                        V1 DS
------------------------------------------------------------------------
A few of the major programs on this disk are: a screen editor,  a
dictionary type speller, character and word counters, other useful word
processing programs.
 
FSED     COM  FSED V2.0 Full Screen Editor by D.W. Daetwyler
FSED     DOC  Manual for FSED
SETFSED  COM  FSED installation program
SETFSED  DOC  Documentation for SETFSED.COM
TALLY    EXE  Counts characters, words, & lines (similar to UNIX WC)
TALLY    DOC  Documentation for TALLY.EXE
FSEDIT   DOC  Summary of Microcomputing article describing Stopgap Editor
FSEDIT   EXE  A simple full screen editor called the Stopgap Editor
PC-SPELL BAS  Ver 1.0 of ASCII file spelling checker by Andy Wildenberg
PC-SPELL SOR  Part of PC-SPELL dictionary oriented spelling checker
PC-SPELL DOC  Documentation to PC-SPELL V1.0
PC-SPELL UNI  Part of PC-SPELL
SORTDIC  BAS  Adds words to PC-SPELL dictionary
DICTIONA      PC-SPELL dictionary of correctly spelled words
WORDFREQ EXE  Graphs word length frequency for a writing sample
WORDFREQ BAS  Source for WORDFREQ.EXE
FOGFIN   COM  Measures writing complexity using Gunning Fog Index
FOGFIN   DOC  Documentation for FOGFIN.COM
INDEX    DOC  Documentation for INDEX.EXE
INDEX    EXE  Creates index of word & phrases marked with control codes
CHOP     EXE  Subdivides text files - Ver 1.1 by W.J. Kennamer
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## FOGFIN.DOC

{% raw %}
```
r



                            FOG FINDER Version 1.0 
  
  
              


         INTRODUCTION

              Most people have taken creative writing or grammar 
         classes.  These classes are designed to improve a 
         person's writing.  Creative writing classes will spur a 
         person's imagination; grammar classes stress the 
         building-block approach to writing.                                   

              There is a third technique geared to improve your 
         writing.  This approach judges the "readability" of 
         writing.  It grades writing from the reader's side; i.e. 
         do people find it easy to read.

              If you've ever struggled through the 1040 Federal 
         Tax instruction booklet, you can appreciate that some 
         writing is very difficult to read.  The 1040 
         instructions might satisfy the grammarians, and it might 
         treat the subject in as creative a way as possible, but 
         it fails the third test.  It is very complex, confusing, 
         and "unreadable" writing.  It is far past the tolerance 
         level of most readers.

              Complex subject matter does not necessarily mean 
         complex writing.  In fact, a good writer should strive 
         for the opposite.  If the subject is complex, then keep 
         the writing as simple as possible.  Otherwise, you might 
         end out swamping the poor reader.

              Researchers have been studying the characteristics 
         of readable writing for about 50 years.  They have 
         devised several formulas to evaluate writing; most of 
         these formulas deal with sentence length and word 
         complexity.  One such formula is the Gunning Fog Index.

              
         FOG INDEX

              The Gunning Fog Index measures the complexity in 
         writing.  It represents the complexity as an average 
         grade level (elementary, high school, college) at which 
         the text could be easily read.  For instance, a Fog 
         Index of 9 means 9th grade reading level.

              Most successful popular writing grades below a 13 
         on a Fog Index scale.  As the Fog Index rises, people 
         will find the text more and more difficult to read.  
         Government and business writing often has a very high 
  
                                                                         Page 1



                            FOG FINDER Version 1.0 
  
  
         Fog Index.  This high Fog Index means that people will 
         have trouble reading and understanding the writing.

              Complex subjects need not have a high Fog Index.  
         The Wall Street Journal, a prime example of clear and 
         concise coverage of complex subjects, averages around an 
         11 on the Fog Index scale.

              Note that a low Fog Index does not mean a piece of 
         text is a sample of "good" writing, only that it is 
         probably a piece of writing that is easy to read.  
         However, most of what you consider "good" writing will 
         probably score low on the Fog Index.
              
                            
         USING FOG FINDER

              FOGFIND.COM is a compiled Pascal program that 
         accepts a text file and grades it on a slightly modified 
         Gunning Fog Index.  The text file should be an ASCII 
         file; it shouldn't have any special control codes 
         imbedded in the text (printer controls are okay).  Fog 
         Finder will process a file with special codes (for 
         example, a WordStar file), but the resulting Fog Index 
         may not be accurate.

              From DOS, enter FOGFIND to begin the program.  You 
         will receive a title screen introducing Fog Finder.  
         Press any key to continue.  (Note:  I don't know why, 
         but sometimes you have to press a key a couple of 
         times.) 

              Fog Finder will prompt you for the name of your 
         text file.  It will then try to open and read the file.  
         If Fog Finder cannot do so, it will prompt you to 
         re-enter the file name.  (example: file does not exist)

              If the open is successful, Fog Finder will begin 
         processing.  You'll see a running tally of words and 
         sentences.  Fog Finder will continue processing until 
         either:  A) It reaches the end of the file, or  B) It
         has processed 50 sentences.

              The 50 sentence limit allows you to process a 
         sample from a long text file.  The 50 sentence sample is 
         more than enough to generate a representative Fog Index.

              After processing your text, Fog Finder displays a 
         Fog Index table, a graphic showing your sample's Fog 
         Index range, and your actual Fog Index.  You will have 
  
                                                                         Page 2



                            FOG FINDER Version 1.0 
  
  
         the option to process another file or to terminate the 
         program.

          
         REMEMBER
              
              A Fog Index is only a measure of what people 
         consider easy reading.  It doesn't measure whether the 
         writing is good, bad, dull, interesting, clear, or 
         muddy.  However, it will measure whether the writing 
         will tire the reader beacuse of the way the words and 
         sentences are assembled.

              
         ENHANCEMENTS

              Future versions of Fog Finder will accept special 
         text files (WordStar, MultiMate, etc.).  Registered 
         users will automatically receive a copy of the next 
         version.  All written suggestions for enhancements are 
         encouraged.


         PERMISSION TO COPY
              
              Users are encouraged to copy and share this program 
         and documentation, as long as no price is charged for 
         the software or documentation.  A small distribution 
         charge may be made for the cost of the diskette.

              If you use this program and find it of value, you 
         may register your copy by sending a contribution ($15 
         suggested) to:
                       

                             Joey Robichaux
                         1036 Brookhollow Drive
                         Baton Rouge, La.  70810

                            
                Registered users will automatically receive a 
         copy of the next version of Fog Finder.  Regardless of 
         whether or not you register you copy, you are encouraged 
         to share it with your friends.





                                                                  Page 3


Press ENTER to continue: 


        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
        Disks in the Public Libray are updated monthly.  Check with us
        for the latest versions of all programs.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

## FSED.DOC

{% raw %}
```

















                                   FSED

                               A Full Screen Editor

                                        for

                             The IBM Personal Computer




                                    Version 2.0





                                  Copyright 1983
                                        by
                                  D. W. Daetwyler























                                        1





        Full Screen Editor - Version 2.0


                                TABLE OF CONTENTS

                                                     Page

        PREFACE                                        3

        INTRODUCTION                                   4

        STARTING OUT                                   5

        EDITING A FILE                                 9

        COMMANDS                                      12

             SCROLLING                                13
             CURSOR MOVEMENT                          14
             CHARACTER MANIPULATION                   16
             LINE MANIPULATION                        17
             SEARCH                                   19
             FILE CONTROL                             20
             EDITOR CONTROL                           22
             MISCELLANEOUS                            24

        CONCLUSION                                    26

        ERROR MESSAGES                                27

        APPENDIX A                                    29
        APPENDIX B                                    30
        APPENDIX C                                    32
        APPENDIX D                                    33

        QUICK REFERENCE                               34
























        Table of contents              2





        Full Screen Editor - Version 2.0


        EPREFACEF

             This is a T.P.I.R product!  (The Price Is... Reasonable?)  I 
        object  to  paying  half the price of my hardware  for  a  single 
        software  package,  so  I'm trying to do something about  it.   I 
        believe  that there are enough "micros" around to make a  reason-
        able  return on your labor investment through  volume...  if  you 
        don't  have  to pay substantive advertising and marketing  costs.  
        If  you're reading this document,  you have the package.   It  is 
        copyrighted, so what are your rights?  They are given here:

        --  You are free to copy, and encouraged to distribute to any/all 
             of your friends,  the materials included in the distribution 
             diskettte.  Please include this document.

        --  You  may use these materials in any way you see fit,  but you 
             may  not "sell" the package.   

        Where's the "catch"?   Simple.   Its up to you.   If you use this 
        package, and like it, send me a check for $35.  Otherwise, thanks 
        for experimenting!   What do you get for the $35, besides a clear 
        conscience?   Not much.  I'll put you on my mailing list and when 
        (not  if)  bugs are encountered,  I'll notify you and offer   our 
        handy, dandy copy service, which incidentally is available to all 
        your friends for their initial copy,  if you don't want to bother 
        copying the diskette.   I'll also notify you when future develop-
        ments are available:   we now have the Screen Design Aid, a util-
        ity that takes a lot of the drudgery out of building  interactive 
        menus;  the  LIST  utility,  which allows for "wild  card"  print 
        requests, optionally provides headings, and fully supports all of 
        the  many and varied modes of printing without messing  with  the 
        MODE   command;   and  a  Full  Screen  Editor,   primarily   for 
        programming,  which  supports either display interface,  provides 
        very "full function", and is FAST.  All operate on PC-DOS V1.x or 
        V2.0.  

             The copy service mentioned  is also simple:  Send diskette, 
        mailer, and enough postage to the writer and we'll make a copy of 
        the distribution diskette for you.  If you don't want to send the 
        diskette,  mailer,  et al., send a check for $7.50 and we'll send 
        you a new diskette with the materials (Single surface, 8 sector).  
        The last page of this document is an order/registration form.

        DISCLAIMER (Or I really don't want to be sued!)

        Although  reasonable  testing  has  been  conducted,   under   no 
        circumstances will the author be liable to you or any third party 
        for  any damages,  including lost profits or other incidental  or 
        consequential damages arising out of the use of, or the inability 
        to use,  this software.  Further the offers made in this document 
        are  subject to withdrawal at any time and without  notification, 
        and prices quoted are subject to change without notice.      





	Preface                        3





        Full Screen Editor - Version 2.0


        INTRODUCTION
                 
             The  Full  Screen Editor (FSED) is primarily  a  programming 
        development tool for the applications or systems programmer.   It 
        is designed to work with the IBM Personal Computer,  using either 
        the  Monochrome Display or the Color/Graphics interface,  and  at 
        least  one disk.   Although the editor will operate  on  machines 
        with  as  little  as 64K bytes of memory,  its design  point  for 
        optimum operation is the 128K memory system.  As an  environment, 
        it  expects  the IBM Disk Operating System (DOS) Versions 1.x  or 
        2.0,  and uses the facilities of this operating system as well as 
        the facilities of the Basic Input/Output System (BIOS).  

             Although  programming language independent,  the editor will 
        be  of most use to the programmer  using  Assembler,  PASCAL,  or 
        FORTRAN.  The  BASIC programmer's use of the editor will probably 
        be limited to selected special functions (eg:  search for a vari-
        able  name),  and no specific format processor  for BASIC is  in-
        cluded in the editor.  Users of the BASIC Compiler will find  the 
        editor useful,  however.  Similarily, although selected functions 
        permit  the use of the editor for "text" processing,  these tools 
        are limited and primitive when compared to a normal,  full  func-
        tion, text processor.

             The  editor works with "files" which are normal DOS files in 
        ASCII or source form.   Files to be processed by this editor  are 
        limited to "lines" of not greater than 80 characters.  
          
                                * * * WARNING * * *
               
             If  editing  is attempted on files containing lines of  more 
        than  80 characters,  truncation will occur and portions  of  the 
        data will be lost.  Under certain conditions, attempting to apply 
        functions against these lines may cause catastrophic error!!!

            Using  the  facilities of the editor,  the  programmer  may: 
        create  or  modify  source language files,  extract  portions  of 
        existing files,  insert existing files into other files,  or  use 
        existing files to create new files.   Twenty-four lines of source 
        are  normally  displayed during all editing functions,  and  pro-
        vision is made for "paging" through files by displaying sucessive 
        pages.  Characters  can be changed,  deleted,  or  inserted  into 
        existing lines.   New lines may be added, existing lines deleted, 
        moved,  or  copied.   Finally,  a substantial number of "control" 
        functions  can be exercised,  most by the depression of a  single 
        key.   All of the functions, with the exception of those that are 
        limited  by  disk speeds,  are performed  at  speeds  essentially 
        within the human response range.









        Introduction -                 4





        Full Screen Editor - Version 2.0


        STARTING OUT
              
             Since the Full Screen Editor requires IBM DOS to operate, it 
        is  assumed that you are familiar with the terms and  conventions 
        of  the DOS.   File names and disk operations are those supported 
        by the standard DOS, so no attempt is made to cover this material 
        in this document.  

             In an attempt to keep this document simple,  many details of 
        functioning are omitted from the main discussion.   These details 
        are  generally not important to the typical user,  however  since 
        they  may effect some unique process you are attempting they  are 
        included in the set of appendicies appearing at the back of  this 
        document.   When  the  general area effected by the  appendix  is 
        first discussed a parenthetical reference is included (eg: Appen-
        dix A).  You should read through the material as it is presented, 
        omitting the appendicies during your first use of the editor.  As 
        your  familiarity  grows and you attempt more complex  use,  then 
        reference to the appendicies will resolve most questions that may 
        arise.

             This document is written for the "new" programmer.   For the 
        experienced  programmer,   scanning  this  introductory  material 
        should  be  sufficient.   The largest section of  this  document, 
        "COMMANDS",  should be reviewed by all users,  and will provide a 
        ready reference during productive use of the editor.
         
                                SAVING THE EDITOR
               
             The distribution diskette included with this manual contains 
        a file named FSED.COM.   Your first action should be to copy this 
        file  to a work diskette containing your IBM DOS.   Use the  Copy 
        utility included with your DOS,  following the instructions  pro-
        vided  in the DOS manual.   File and save your distribution disk-
        ette as your "master".   The distribution diskette is "file  pro-
        tected"   which  will  prevent  accidental  destruction  of  your 
        "master".
          
                                 USING THE EDITOR
               
             The editor will operate properly on either one or two  drive 
        systems.   Initially, we'll use it by inserting the work diskette 
        containing  IBM DOS and the FSED.COM file in the drive  "A".   To 
        start the editor you may use any of three forms of DOS commands:
         
                  A:>FSED
                  A:>FSED yourfile.type
                  A:>FSED yourfile.type outfile.type
              
             As  you  gain familiarity with the editor,  the second  form 
        shown above is the one you'll use most frequently.   To help  you 
        get  started,  we'll  discuss  all three forms and  the  editor's 
        response to each.  




        Starting Out -                 5





        Full Screen Editor - Version 2.0


             In all three cases,  when you enter this command, the screen 
        will briefly display an identification screen that simply announ-
        ces  the editor has been loaded properly.   If you have used  the 
        first form of the command, a prompt near the bottom of the screen 
        will  ask for your file name.   Just as in the second  and  third 
        forms of the command,  the file name requested is a "fully quali-
        fied"  DOS file name.   Drive may be specified,  and if it is not 
        then the "default" or signed on drive is implied.   "type" is not 
        required by the editor,  but most language processors do  require 
        it, so normally it should be specified.  

             If  the  file  you have named exists on the drive  you  have 
        specified or defaulted to,  then the first 24 source lines of the 
        file will be displayed without further action.   If the directory 
        does not contain the name you gave,  then a prompt will appear at 
        the bottom of the screen:

              "New file - (Y or N)"

             If you are actually creating a new file,  reply "Y" and  you 
        will  be  presented  with a "blank" screen  containing  only  the 
        editor  prompt line (line 25),  and an "end of file" marker line. 
        If  you  have made an error in specification of your  file  name, 
        reply "N",  and the editor will prompt for the correct name, just 
        as it did when the first form of the command was used to initiate 
        the editor.  

             Before  discussing  the third form of  the  command,  it  is 
        necessary  to  understand how the editor handles file  names  and 
        directory updates.   The editor is designed to prevent catastrop-
        hic data loss.   If you are updating an existing file,  that file 
        in  its original form,  will still exist at the conclusion of the 
        edit process.  Editing the file actually causes the creation of a 
        new  file  containing the edit changes,  and normally  named  the 
        same as the file specified as "yourfile" in the command or prompt 
        sequences.   The original file is renamed to "yourfile.BAK".   If 
        "yourfile.BAK" existed prior to the start of the editor,  the old 
        backup  file  will be automatically  deleted.   This  complicated 
        sounding process simply results in maintenance of two versions of 
        "yourfile".   The current version and one back up version without 
        the last set of changes.  

             For the editor to function properly, then, there must always 
        be  sufficient disk space available on the output drive,  to con-
        tain the entire file being edited, plus any changes you introduce 
        in this edit process.  This is a "free space" requirement that is 
        in  addition to any "back up" files  and the original file to  be 
        edited, that may already reside on the disk.  

             The  third  form  of the command  over-rides  this  process. 
        "outfile.type"  is your desired name for the new file created  by 
        the editor.   When this form of the command is used, the original 
        file  is  not changed,  and the rename to a back up file  is  not 
        performed.  Note that the output file need not reside on the same 
        drive  as the input file,  in two  drive  configurations.   Drive 


        Starting Out -                 6





        Full Screen Editor - Version 2.0


        identifier may be specified with the "outfile" name.  

             Finally, there is one additional prompt that you will rarely 
        see.   If  you  have used the third form of the command and  have 
        given  a name for your output file that already  exists,  then  a 
        prompt that warns you of this condition will appear,  and you are 
        requested  to  give permission to proceed ("Y") or cancel  ("N").  
        If you permit the editor to continue, the content of the existing 
        file will be over-written and lost!!! (Appendix A).

             Before proceeding into the edit process,  a brief discussion 
        of  file  sizes and drive  configurations  is  appropriate.   The 
        editor is capable of processing a "very large" file,  essentially 
        limited only by the diskette capacity and the "space requirement" 
        cited in the previous paragraphs.   In actual practice,  you will 
        find it much more convienent to work with small or moderate sized 
        files.  The primary difference to the user is how "automati


        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
        Disks in the Public Libray are updated monthly.  Check with us
        for the latest versions of all programs.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

## FSEDIT.DOC

{% raw %}
```
From: Jan. 83 issue of Microcomputing
Modified by: Terry G. Bailey

		Full Screen Editor

Following is a copy of the article describing this program by D. E. Cortesi

		IBM's MVP  (Most Valuable Program)

   The most important piece of software in any computer system, for me,
is its editor.
   The editor is used for just about everthing: source programs, memos,
business letters, batch command files, articles, datafiles...Everything
that goes onto a disk gets there throught the editor program, or descends
from something that did.
   When I was loaned an IBM Personal Computer, I found that it lacked an
editor.  It has Edlin, but I don't find that program an acceptable tool.
I've been using full-screen editors for some years now, so I find it difficult
to go back to a line-oriented editor - especially one as rudimentary as
Edlin.
   So there the machine sat, waiting for me to give it something to do.  But
what I needed was some kind of stop-gap - an editor that I could tolerate
until a professional product becomes available.
   My solution was to write a stopgap editor in Basic.
   The resulting program is interesting in several ways.  It's an example
of how much you can accomplish in IBM's Basic, and of how you can use the
Basic language in a structured style of programming.  And it's a scale 
model of a full-screen editor, so it can serve as a test bed for ideas
that you might have on how an editor should work.

PROGRAM OBJECTIVES.
   The Stopgap Editor was an unusual programming project.  It was the first
time I'd written a program with the intention of using it heavily for a short
time and then throwing it away.
   The first requirement was that it had to go together quickly; that dictated
a clean, simple design using straightforward techniques.  The second requirement
was that it have adequate function from the outset, because I was determined
that there would be no second version of the program.
   The program's speed of response would not be important, although it did
have to accept input at my normal typing rate.  It wouldn't need to handle 
large files; by the time I needed to edit large files, there would be a good
editor on the market.
   With these factors in mind, I sketched the parameters of the program.  It
would keep a file of a couple hundred lines in storage as an array of strings.
Lines would be no longer than the screen was wide.  In fact, for simplicity
of coding, no line would be shorter than the screen width either.
   It would present the file on the screen 24 lines at a time.  The user 
would be able to move the cursor to insert, delete or type over characters.
The special keypad functions of the PC keyboard would be supported to move
the cursor over the screen and the screen over the file.  There would be
control key signals to delete and insert lines and to move to the head and
foot of the file.
   The only disk I/O that would be required would be the ability to save the
working file on disk and to load another file from disk.  Since there would
never be a great amount of data at risk, error-checking and reporting would
be minimal.
   These were the objectives, let's look at the program that resulted.

USING STOPGAP.
   The Stopgap Editor is loaded and executed like any other program in Basic.
Shortly after starting, it presents you with a clear screen.
   The screen now becomes the electronic equivalent of a roll of paper.  
Each screen line corresponds to a line of characters in a disk file.  Move
the cursor around with the up-,down-,left- and right-arrow keys and type
anywhere you like.
   The enter key moves the cursor to the left margin and down one line-
without putting any data in the file.  The tab key moves the cursor to the
next tab stop.  It doesn't put any data in the file either.
   The end key moves the cursor to the right side of the screen.  The home
key does one of three things, depending on where the cursor is when you
press it.  If the cursor is away from the left margin, the home key moves it
back to the left margin.  If the cursor is at the left margin but not on the
top line, then the home key moves it to the top line.  If the cursor is in
the top left corner, the home key moves it to the bottom left corner.  With
a few presses of the home and end keys, you can move to any corner of the
screen.  (I took this idea from the Magic Wand editor for CP/M.)
   Type some characters on the screen.  Move the cursor into the middle of
a word and press the insert key.  The cursor becomes double, framing the
current character.  (On the top line of the screen, the upper half of the
cursor is invisible.)
   Now, each character you type will be inserted ahead of the current character.
If the line is full, one character will be lost from the right end for each one
inserted.  Pressing any key except a printable character will end insert mode.
   You'll find that the backspace key erases the current character and moves 
cursor to the left.  Press the delete key and the current character disappears
while the rest of the line shifts to the left to fill in and the cursor stays
in place.
   If you keep inserting or deleting for about 50 characters, the screen 
seems to go dead.  After a pause of about ten seconds, though, the system comes
to life again.  This is a peculiarity of all Microsoft Basic interpreters.
   The program has been doing several operations on character strings for
every inserted or deleted character, and the Basic interpreter has filled up
its working storage with garbage character strings.  It stops to tidy up - 
and when Basic stops, everything stops.  When spring cleaning is over, work
resumes.

PAGING THROUGH THE FILE
   On every line of your file, type a few characters and hit the enter key.
When you reach the bottom of the screen, keep going.  The topmost lines scroll
out of sight.
   Keep on typing for a while, then press the "PgUp" key on the keypad.  The 
editor moves back 23 lines, or to the top of the file.  Note that the cursor
stays where it was on the screen.  Press the "PgDn" key; the editor moves
forward 23 lines, or to the bottom of the file if that comes first.
   Now try pressing the "Ctrl" and "A" together.  That makes the editor move
the screen back to the top line of the file.  Pressing "Ctrl" and "Z" causes
it to move to the last line used.  This is how you move about in a larger file.
Use control-A to get to the top of the file and then use the page-down key, or
use control-Z to move to the end and then page up.
   Go to the end of the file with control-Z, then move the cursor to the top
of the screen with the home key.  Now press the up-arrow key.  The editor
slides the screen up the file 23 lines and moves the cursor down 23 lines,
so that it is still on the line you were looking at.

LINE INSERTION AND DELETION
   Hitting contol-D causes the editor to delete the entire line on which the
cursor rests.  It redraws the whole screen afterward, so deletion is a fairly
slow process.
   Inserting lines is a bit faster.  When you press control-O, the editor
splits the file just above the line the cursor is on.  The lower part of the
file is set aside.  The line above the cursor becomes, temporarily, the
bottom of the file; the screen is blank beyond it.  Each blank line you
type on becomes part of the file at that point.
   When the file is open, you can use all the other controls for insertion.
You can page back into the upper part of the file to look at it; you can
delete lines or insert characters.  Control-Z will take you not to the real end
of the file but to the line that was inserted last.
   Once you have inserted as many lines as you want, press control-C.  The
editor splices the file back into a single piece, with the inserted lines
embedded where you typed them.  (This method of insertion is also copied
from the Magic Wand editor.)

COMMANDS
   The Stopgap Editor supports just four commands.  Press the "Esc" key.  The
editor clears the screen and displays a menu of the commands.  Pressing the
enter key will return you to the file display.
   The save command asks for a filespec and copies the entire file to disk
under that name.  (If you give it a filespec of "lpt1:", it will copy the 
file to the printer!)  The editor deletes trailing blanks from the end of the
lines saved and discards empty lines at the end of the file.
   The load command asks for a filespec and loads the lines of that file into
storage for editing.  It truncates long lines to the width of the screen
(but doesn't tell you it has done so).  The clear command wipes out everything,
giving you a blank scroll to work on.  The quit command returns you to the 
system.  If you have added or changed anything in the file, these commands
ask for confirmation before they act.
   The Stopgap Editor's disk operations are painfully slow.  It takes a couple
of minutes to load a file of a hundred lines.  If there is any sort of file 
error -  if the disk fills up during a save, for example - you'll get an
error message from Basic.
   Your work hasn't been lost though.  Kill another file to get some space,
then enter the command GOTO 1630.  You should be back in the editor with your
data intact.  But remember, this editor is only a stopgap.  Save your work
often.



        This disk copy was originally provided by "The Public Library",
        the software library of the Houston Area League of PC Users.
        Disks in the Public Libray are updated monthly.  Check with us
        for the latest versions of all programs.
 
        Programs are available from the Public Library at $2 per disk
        on user-provided disks.  To get a listing of the disks in the
        Public Library, send a self-addressed, stamped envelope to

             Nelson Ford,  P.O.Box 61565,  Houston, TX 77208.

```
{% endraw %}

## PC-SPELL.BAS

{% raw %}
```bas
10 ON ERROR GOTO 390
20 KILL"misspell":LOCATE ,,1
30 KILL"qwertyui"
40 ON ERROR GOTO 0
50 INPUT "drive for pc-spell disk ";DDISK$
60 IF INSTR(DDISK$,":")=0 THEN PRINT "bad drive name. please use colon.":GOTO 50
70 INPUT "drive for work disk";WDISK$
80 IF INSTR(WDISK$,":")=0 THEN PRINT "bad drive name. please use colon.":GOTO 70
90 IF DDISK$=WDISK$ AND (DDISK$="a:" OR DDISK$="A:") THEN
100 REM word lister
110 A$=WDISK$+"*.*"
120 FILES A$:KEY OFF
130 INPUT FILE$
140 OPEN WDISK$+FILE$ FOR INPUT AS #1
150 DIM WORD$(2000):CLS:W=1
160 WHILE NOT EOF(1) AND FRE(0)>2500:LOCATE 1,1:PRINT TIME$;
170 GOSUB 280:LINE INPUT#1,A$:IF A$="" THEN 240 'skip blank line
180 COUNT=COUNT+1
190 X=1
200 IF LEN(A$)<X THEN 240
210 CHAR$=MID$(A$,X,1)
220 IF ASC(CHAR$)<=64 THEN GOSUB 280 ELSE GOSUB 320
230 X=X+1:GOTO 200
240 WEND
250 IF EOF(1) THEN COUNT=0:RESET:GOTO 360
260 RESET:GOTO 360
270 REM found end of word (punctuation)
280 IF CHAR$="'" THEN 320 ' leave apostraphies in words.
290 IF LEN(WORD$)>1 THEN WORD$(W)=WORD$:W=W+1:LOCATE 25,1:PRINT "word # ";W;:WORD$="" ELSE WORD$=""
300 RETURN
310 REM another letter or '
320 IF CHAR$>"@" AND CHAR$<"[" THEN CHAR$=CHR$(ASC(CHAR$)+32)
330 WORD$=WORD$+CHAR$
340 RETURN
350 IF CHAR$>="A" THEN 320 ELSE 280
360 LOCATE 5,1:COLOR 24,7:PRINT "Cleaning out memory...please be patient";:COLOR 7,0
370 LOCATE ,1:PRINT SPACE$(79);
380 COMMON WORD$(),W,WDISK$,DDISK$:CHAIN DDISK$+"pc-spell.sor"
390 RESUME NEXT
```
{% endraw %}

## PC-SPELL.DOC

{% raw %}
```
Pc-spell        By:Andy Wildenberg      version 1.0     6/13/84
    Pc-spell is a dictionary oriented spelling checker. In its first version 
it will spell check small documents, about 1500 words or less dependent on 
memory. First you will be asked which drive you want for the pc-spell diskette.
In Dos version 2.x, you may also specify paths. All drive names must at least 
include a letter and a colon, or you will be asked again for a name. Then you 
will be asked for the drive that the work diskette will be in. The same 
restrictions apply. If you have one drive and your pc-spell and work diskettes
are different, then specify drive two different drives when prompted Also, ram 
drives will increase speed greatly.
    A list of files will appear on the screen after drive specification
and you will then choose the file to work on by typing in the name and pressing
return. ALL FILES THAT ARE SPELL CHECKED SHOULD BE IN ASCII FORMAT. Pc-spell 
will only spit the words back at you and possibly crash if they are in Word-
star or any other format besides ascii. 
    Now the main loop begins. During all of this time there will be prompting 
on the screen telling you what's going on. First, pc-spell takes the file 
and makes it into single words, storing them in memory. This step is followed 
by an annoying but impossible to avoid period while Basic clears out all of 
the excess memory. Third, pc-spell sorts the list of words in alphabetical 
order. In this step Pc-spell tells you when it starts sorting and when it 
should be done. THIS TIME IS ONLY A ROUGH ESTIMATE AND IS OFTEN QUITE 
INACCURATE. Fourth, it writes the sorted list to disk. This part is not 
prompted by the bottom line. Fifth, it gets rid of all duplicate words. Last, 
it compares your words to its dictionary, writing all of those that it doesn't 
find to the file `misspell'.
    The speed in which these steps occur varies greatly with the size of the 
document. Also, Pc-spell will only work with the amount that can fit in 
memory, to avoid long disk reads and writes.
    Now comes your part. Pc-spell's dictionary is quite limited at present, so 
a lot of words that are correct will still be written to misspell. You must 
take the words correctly spelled and write them to the file `update' while 
keeping the incorrect ones in the file `misspell'.
    Last of all, to add these words to the dictionary, run the program 
'Sortdic.bas', while making sure that there is enough disk space to write the 
dictionary again. i.e. If the dictionary is 35,000 bytes long, then have about 
40,000 bytes free on that disk drive.
    To correct the misspelled words, I suggest the following. Copy the file 
'misspell' to the printer using the DOS command 'Copy misspell lpt1:'. Then 
enter you word processor and use the search and replace functions to find and 
correct all misspelled words. Then after saving the file and exiting the 
word-processor, your file should all be spelled correctly without error.
    For more information, write to:
                                                Andy Wildenberg
                                                P.O. Box 443
                                                West Branch, Iowa
                                                52358


```
{% endraw %}

## SETFSED.DOC

{% raw %}
```
		  Full Screen Editor - Documentation Addendum
										
	Several users have requested the ability to set the "default" format
for the editor.  Actually, they simply want to select the format the editor
will utilize immediately after initial load.  Rather than add additional com-
mands to the editor, I've now included a small utility, SETFSED.  This utility
permits "patching" the format the editor will load in.  Instructions for use
are displayed on the screen.  One caution -- the editor being "patched" MUST
be named FSED.COM and be mounted on the "A" drive.  Please "patch" only working
copies.  Do NOT patch the master.  Any errors encountered in the process will
be displayed on the screen.
										
	Good luck, and happy editing.
										
		Dan Daetwyler

```
{% endraw %}

## SORTDIC.BAS

{% raw %}
```bas
10 ON ERROR GOTO 260
20 KILL"qwertyui"
30 NAME "dictionary" AS "qwertyui"
40 ON ERROR GOTO 280
50 OPEN "qwertyui" FOR INPUT AS #1
60 OPEN "update" FOR INPUT AS #2
70 OPEN "dictionary" FOR OUTPUT AS #3
80 INPUT #1,DIC$:INPUT #2,M$
90 REM start main loop
100 IF M$<DIC$ THEN 190
110 REM dictionary word is smaller
120 PRINT #3,DIC$:W=W+1
130 I=1:PRINT "D";:INPUT #1,DIC$
140 IF M$>DIC$ THEN 120
150 PRINT #3,M$:W=W+1
160 I=2:PRINT "m";:INPUT #2,M$
170 GOTO 100
180 REM merge word is smaller
190 PRINT #3,M$:W=W+1
200 I=2:INPUT #2,M$:PRINT "M";
210 IF DIC$>M$ THEN 190
220 I=1:PRINT "d";:PRINT #3,DIC$:W=W+1
230 INPUT #1,DIC$
240 GOTO 100
250 END
260 PRINT ERR,ERL:RESUME NEXT
270 REM end of one of the files
280 PRINT "finishing ...";:IF I=2 THEN 370
290 REM dictionary ran out of words
300 WHILE NOT EOF(2)
310 PRINT #3,M$:W=W+1
320 INPUT #2,M$
330 WEND:RESET
340 PRINT "the dictionary now consists of";W;"words"
350 KILL"update":END
360 REM merge file ran out
370 WHILE NOT EOF(1)
380 PRINT #3,DIC$:W=W+1
390 INPUT #1,DIC$
400 WEND:RESET
410 GOTO 340
```
{% endraw %}

## WORDFREQ.BAS

{% raw %}
```bas
80 DEFINT A-Y:DEFSNG Z:OPTION BASE 1
90 WIDTH 80: WIDTH "LPT1:",255
100 KEY OFF: CLS
110 BUFFERSIZE=500
120 DIM T$(BUFFERSIZE),FREQ(101), CHECK$(7), SCALE(7)
130 CHECK$(1)=",":CHECK$(2)=".":CHECK$(3)="?":CHECK$(4)="!":CHECK$(5)=":":CHECK$(6)=";":CHECK$(7)="-"
140 SCALE(1)=1:SCALE(2)=2:SCALE(3)=5:SCALE(4)=10:SCALE(5)=25:SCALE(6)=50:SCALE(7)=100
150  TXTBASE=8:MAX=20:GRAPHBASE=22:STATBASE=GRAPHBASE-(MAX+1)
160 COUNT = 0
180 GOSUB 2800
190 IF CGA=FALSE THEN 250
200 SCREEN 0,1,0,0
210 MENU=0:TYPE=1:GRAPH=2
220 FOR SCR=1 TO 3: SCREEN ,,SCR,MENU:CLS:NEXT:SCREEN ,,MENU,TYPE
250 ON ERROR GOTO 0:CLS
260 GOSUB 2570
270 IF COLR THEN FG=(FG+3) MOD 7:BDR= (BDR+2) MOD 15: COLOR FG,0,BDR
280 LOCATE TXTBASE,20:PRINT "1.  Type New Text"
290 PRINT TAB(20) "2.  Store Text on Disk"
300 PRINT TAB(20) "3.  Load Text from Disk"
310 PRINT TAB(20) "4.  Tally Frequencies & Bar Graph"
320 PRINT TAB(20) "5.  Display Text on Screen or Printer"
330 COLOR 7,0:LOCATE TXTBASE+8,20: PRINT "Position ";:COLOR 31,0:PRINT CHR$(175) " " CHR$(174);:COLOR 7,0: PRINT " with cursor arrow up and down keys"
340 LOCATE TXTBASE+10,20 :PRINT "then press F1 to choose, F10 to end":COLOR 7,0
360 LOCATE 25,25:COLOR 7,0:PRINT "F1 ";:COLOR 0,7:PRINT "CHOOSE";:COLOR 7,0
370 PRINT "         F10 ";:COLOR 0,7:PRINT "END";:COLOR 7,0
400 ON ERROR GOTO 0: IF CGA THEN SCREEN  ,,MENU,MENU:CURSCR=MENU
410 GOSUB 570
420 KEY(11) ON: KEY(14) ON:KEY(1) ON:KEY(10) ON
430 ON KEY(1) GOSUB 490: ON KEY(10) GOSUB 670
440 ON KEY(11) GOSUB 550: ON KEY(14) GOSUB 610
460 POKE 106,0:K$=INKEY$:GOTO 460
490 LOCATE TXTBASE+COUNT, 15:PRINT CHR$(32);:LOCATE TXTBASE+COUNT,60:PRINT CHR$(32)
500 BEEP:KEY(11) OFF: KEY(14) OFF
510 ON COUNT +1 GOSUB 710,890,1110,1390,2060
520 IF CGA THEN RETURN 400 ELSE RETURN 250
550 LOCATE TXTBASE+COUNT,15:PRINT CHR$(32);:LOCATE TXTBASE+COUNT,60:PRINT CHR$(32)
560 IF COUNT THEN COUNT=COUNT-1
570 LOCATE TXTBASE+COUNT,15:COLOR 31,0:PRINT CHR$(175);:LOCATE TXTBASE+COUNT,60:PRINT CHR$(174):COLOR 7,0
580 RETURN
610 LOCATE TXTBASE+COUNT,15:PRINT CHR$(32);:LOCATE TXTBASE+COUNT,60:PRINT CHR$(32)
620 COUNT = (COUNT+1) MOD 5
630 LOCATE TXTBASE+COUNT,15:COLOR 31,0:PRINT CHR$(175);:LOCATE TXTBASE+COUNT,60:PRINT CHR$(174):COLOR 7,0
640 RETURN
670 IF GCA THEN SCREEN 0,1,0,0
680 CLS:COLOR 7,0,0:KEY ON:PRINT "ENDING...." :END
710 IF GCA THEN SCREEN ,,TYPE,CURSCR
720 CLS: IF COLR THEN COLOR 14,0,14 ELSE COLOR 15,0
730 FLNM$=""
740 PRINT TAB(6) "Type up to " BUFFERSIZE " lines of text, not longer than 253 letters each"
750 PRINT TAB(6) "Type <ENTER> at end of line.  Type $$$$ to signal end of input.":PRINT
760 COLOR 7,0
770 IF GCA THEN SCREEN ,,TYPE,TYPE:CURSCR=TYPE
780 LNKT=0
790 FOR I = 1 TO BUFFERSIZE
800 IF I =(BUFFERSIZE\10)*9 THEN PREVLOC=CSRLIN:LOCATE 25,30:COLOR 23,0:PRINT "Buffer getting full!!";:LOCATE PREVLOK,1:COLOR 7,0:
810 PRINT USING"***  ";I;
820 LINE INPUT T$(I)
830 IF INSTR(T$(I),"$$$$") THEN LNKT=I: I=BUFFERSIZE:GOTO 850
840 IF I = BUFFERSIZE THEN ERRMSG$=STR$(BUFFERSIZE)+" line buffer is full.":T$(BUFFERSIZE)= LEFT$(T$(BUFFERSIZE),249)+"$$$$":LNKT=I:LOCATE 25,30:GOSUB 2750
850 NEXT
860 RETURN
890 IF GCA THEN SCREEN ,,TYPE,CURSCR
900 CLS:IF COLR THEN COLOR 14,0,14 ELSE COLOR 7,O
910 IF LNKT=0 THEN ERRMSG$= "No text to save": CLS:LOCATE 4,8: IF GCA THEN SCREEN ,,TYPE,TYPE:GOSUB 2750:RETURN ELSE GOSUB 2750: RETURN
920 IF GCA THEN SCREEN ,,TYPE,TYPE:CURSCR=TYPE
930 FRM$= STRING$(40,223):LOCATE 3,8:PRINT FRM$:LOCATE 5,8:PRINT FRM$
940 LOCATE 4,8
950 INPUT "What is the file name you'd like to use ";FLNM$
960 IF FLNM$=" " THEN RETURN
970 COLOR 7,0
980 IF INSTR(FLNM$,".")= 0 AND (RIGHT$(FLNM$,4)<>".TXT" OR RIGHT$(FLNM$,4)<> ".txt") THEN FLNM$=FLNM$+".TXT"
990 ON ERROR GOTO 2640
1000 OPEN FLNM$ FOR INPUT AS # 1
1010 CLOSE:BEEP:LOCATE 6,8:ERRMSG$= "File already exists!":GOSUB 2750:RETURN 
1030  ON ERROR GOTO 0 
1040 OPEN FLNM$ FOR OUTPUT AS # 1
1050 FOR I = 1 TO LNKT
1060 PRINT #1,T$(I)
1070 NEXT I
1080 CLOSE:RETURN
1110 IF CGA THEN SCREEN ,,TYPE,CURSCR
1120 CLS:COLOR 15,0:LOCATE 4,8:PRINT "<Enter> returns you to main menu.":PRINT
1130 IF COLR THEN FG = (FG+1) MOD 6:BDR= (BDR+1) MOD 15:COLOR GF,0,BDR ELSE COLOR 7,0
1140 FRM$=STRING$(7,32)+STRING$(58,220):PRINT FRM$
1150 PRINT TAB(8) "Type the file name of the text you want to load or"
1160 PRINT TAB(8) "type A, B, C, or D to see the .TXT file directory on that drive."
1170 PRINT FRM$
1180 IF CGA THEN SCREEN ,,TYPE, TYPE:CURSCR=TYPE
1190 LOCATE 17,8:PRINT SPACE$(71): IF COLR THEN FG = (FG+1) MOD 7:BDR = (BDR+1) MOD 15:COLOR FG,0,BDR
1200 LOCATE 17,8 :INPUT "",FLNM$
1210 IF FLNM$= "" THEN RETURN 
1230 ON ERROR GOTO 2680 
1240 IF LEN(FLNM$) = 1 AND INSTR("AaBbCcDd",FLNM$) THEN FLNM$= FLNM$+ ":*.TXT":LOCATE 11,1:FILES FLNM$:GOTO 1190 
1250 IF INSTR(FLNM$,".") = 0 AND ((RIGHT$(FLNM$,4)<>".TXT" OR RIGHT$(FLNM$,4)<> ".txt")) THEN FLNM$ = FLNM$+".TXT" 
1260 OPEN FLNM$ FOR INPUT AS #1 
1270 ON ERROR GOTO 0
1290 FOR I= 1 TO BUFFERSIZE
1300 LNKT= I-1
1310 IF EOF(1) THEN I= BUFFERSIZE :GOTO 1340 
1320 LINE INPUT #1, T$(I)
1330 IF INSTR(T$(I),"$$$$") THEN LNKT = I: I= BUFFERSIZE 
1340 NEXT
1350 CLOSE
1360 IF CGA THEN RETURN 400 ELSE RETURN 250
1390 IF CGA THEN SCREEN ,,GRAPH,CURSCR:CURSCR=GRAPH
1400 CLS:IF LNKT= 0 THEN LOCATE 4,8:ERRMSG$= "No text to tally":IF CGA THEN SCREEN ,,GRAPH,GRAPH:GOSUB 2750: RETURN ELSE GOSUB 2750: RETURN
1420 SCKT = 1:MAXSCALE = MAX*SCALE(SCKT): ZTOTALW = 0:LONGW = 0 
1430 ZSUM= 0: ZSUMSQR = 0 :MODE= 101: ZTEMP= 0: MEDIAN = 0 
1440 GOSUB 2320 
1450 ERASE FREQ: DIM FREQ(101)
1460 IF CGA THEN SCREEN ,,GRAPH,GRAPH
1480 FOR I= 1 TO LNKT
1490 WORK$= LEFT$(T$(I),253)+" " 
1500 IF INSTR(WORK$,"$$$$") THEN I = LNKT : WORK$= LEFT$(WORK$,INSTR(WORK$,"$$$$")-1)+" " 'Check for end of text"
1510 IF LEN(WORK$)= 1 THEN 1770 
1530 FOR CHAR = 1 TO 7 
1540 FOUND = 1 
1550 WHILE FOUND
1560 FOUND = INSTR(WORK$,CHECK$(CHAR)) 
1570 IF FOUND THEN MID$(WORK$,FOUND,1) = " " 
1580 WEND
1590 NEXT
1600 STARTW= 1 
1620 ENDW = INSTR(STARTW,WORK$," ") 
1630 IF ENDW= 0 THEN 1770 
1640 WORDLEN= ENDW-STARTW: IF WORDLEN = 0 THEN 1760 
1650 FREQ(WORDLEN) = FREQ(WORDLEN)+ 1:ZTOTALW = ZTOTALW + 1 
1660  LOCATE STATBASE+1,69:PRINT USING "##,###";ZTOTALW; 
1670 IF WORDLEN >20 THEN LONGW= LONGW + 1: LOCATE STATBASE+2,71: PRINT USING"#,###";LONGW;: GOTO 1760 
1680 IF FREQ(WORDLEN)<= MAXSCALE THEN 1750 
1700 SCKT =SCKT+1: MAXSCALE=MAX*SCALE(SCKT) 
1710 IF CGA THEN GRAPH= 5-GRAPH:SCREEN ,,GRAPH, CURSCR
1720 GOSUB 2320: GOSUB 2470 
1730 IF CGA THEN SCREEN ,,GRAPH,GRAPH: CURSCR = GRAPH
1750 YPOS= FREQ(WORDLEN)\SCALE(SCKT): IF YPOS THEN LOCATE GRAPHBASE-YPOS,16+(WORDLEN*3):PRINT CHR$(219); 
1760  STARTW = ENDW +1: GOTO 1620 
1770 NEXT  
1790 IF ZTOTALW =<2 THEN LOCATE STATBASE+5,55:PRINT "No text to tally":GOTO 2010 
1800 LOCATE STATBASE+5,55: COLOR 31,0: PRINT "Calculating statistics":COLOR 7,0 
1820 FOR WORDLEN= 1 TO 100
1830 ZSUM = ZSUM + WORDLEN*FREQ(WORDLEN) 
1840 ZSUMSQR= ZSUMSQR + WORDLEN*WORDLEN*FREQ(WORDLEN) 
1850 IF FREQ(MODE)< FREQ(WORDLEN) THEN MODE = WORDLEN 
1860 IF MEDIAN = 0 THEN ZTEMP= ZTEMP + FREQ(WORDLEN): IF ZTEMP=>ZTOTALW/2 THEN  MEDIAN = WORDLEN 
1870 NEXT
1890 ZMEAN = ZSUM/ZTOTALW  
1900 ZVARIANCE = (ZSUMSQR - (ZSUM*ZMEAN))/(ZTOTALW-1): ZSDEV = SQR(ZVARIANCE) 
1920 LOCATE STATBASE+5,55: PRINT SPACE$(24);
1930 IF COLR THEN COLOR 14,0,6
1940 LOCATE STATBASE+6,55: PRINT USING "       Mode =    ##";MODE;
1950 LOCATE STATBASE+7,55: PRINT USING "     Median =    ##";MEDIAN;
1960 LOCATE STATBASE+8,55: PRINT USING "Arith. Mean =    ##.##";ZMEAN;
1970 LOCATE STATBASE+9,55: PRINT USING "Stand. Dev. =    ##.##";ZSDEV;
1980 LOCATE STATBASE+10,55: PRINT USING "       Skew =   ###.##";3*(ZMEAN-MEDIAN)/ZSDEV; 
1990 IF FLNM$<>" " THEN LOCATE STATBASE+11,53: PRINT "File name = ";FLNM$;
2000 IF COLR THEN COLOR 3
2010 LOCATE 25,5:PRINT "Hit any key to continue";
2020 SOUND 1200,5 
2030 K$= INPUT$(1): IF CGA THEN RETURN 400 ELSE RETURN 250
2060  IF CGA THEN SCREEN ,,TYPE,CURSCR
2070 CLS:IF LNKT = 0 THEN ERRMSG$ = "No text to show":LOCATE 4,8:IF CGA THEN SCREEN ,,TYPE,TYPE:GOSUB 2750:RETURN ELSE GOSUB 2750: RETURN
2080 IF COLR THEN COLOR 9,0,3 ELSE COLOR 7,0
2090 LOCATE 1,8:PRINT "<Enter> returns you to the main menu.":PRINT
2100 PRINT TAB(8)"Show text on (S)creen or(P)rinter and screen";
2110 COLOR 7,0
2120 IF CGA THEN SCREEN ,,TYPE,TYPE:CURSCR=TYPE
2130 LOCATE 3,53:PRINT SPACE$(27):LOCATE 3,53:SHOW$=INPUT$(1)
2140 IF ASC(SHOW$)= 13 THEN RETURN
2150 IF INSTR("SsPp",SHOW$)= 0 THEN BEEP:GOTO 2130 
2160 CLS
2170 FOR I= 1 TO LNKT
2180 PRINT USING "###  ";I; 
2190 IF LEN(T$(I))<74 THEN PRINT T$(I):GOTO 2220 ELSE PRINT LEFT$(T$(I),74) 
2200 WORK$= MID$(T$(I),75)
2210 IF LEN(WORK$)<74 THEN PRINT TAB(6) WORK$ ELSE PRINT TAB(6) LEFT$(WORK$,74): WORK$= MID$(WORK$,75):GOTO 2210 
2220  IF SHOW$<>"p" AND SHOW$<>"P" THEN 2260 ELSE LPRINT USING "###  ";I; 
2230 IF LEN(T$(I))< 74 THEN LPRINT T$(I):GOTO 2260 ELSE LPRINT LEFT$(T$(I),74)
2240 WORK$= MID$(T$(I),75)
2250 IF LEN(WORK$)<74 THEN LPRINT TAB(6) WORK$ ELSE LPRINT TAB(6) LEFT$(WORK$,74): WORK$= MID$(WORK$,75):GOTO 2250
2260 NEXT
2270 IF COLR THEN COLOR 11,0,0
2280 PRINT:PRINT TAB(6) "All done.  Hit any key to continue":TA$=INPUT$(1)
2290 RETURN
2320 CLS:COLOR 7,0:FRM$ = STRING$(22,205)
2330 LOCATE STATBASE,53:PRINT CHR$(201) FRM$ CHR$(187)
2340 LOCATE STATBASE+1,55:PRINT USING   "Total words = ##,###";ZTOTALW;
2350 LOCATE STATBASE+2,55:PRINT USING " Words >20 = #,###";LONGW;
2360 LOCATE STATBASE+3,53:PRINT CHR$(200) FRM$ CHR$(188)
2370 LOCATE GRAPHBASE+1,5:PRINT "Word Size-> 1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  8  9  0" 
2380 FOR KT= 1 TO 9
2390 LOCATE GRAPHBASE-14+KT,5:PRINT MID$("FREQUENCY",KT,1); 
2400 NEXT
2410 FOR KT=0 TO MAX-1
2420 LOCATE (GRAPHBASE-MAX)+KT,9:PRINT USING "####";(MAX-KT)*SCALE(SCKT);:PRINT      CHR$(186); 
2430 NEXT
2440 RETURN
2470 FOR BAR = 1 TO 20
2480 IF FREQ(BAR) THEN BARTOP = FREQ(BAR)\SCALE(SCKT) ELSE GOTO 2530
2490 IF BARTOP = 0 THEN 2530
2500 FOR M = 1 TO BARTOP
2510 LOCATE GRAPHBASE-M,16+(BAR*3):PRINT CHR$(219)
2520 NEXT
2530 NEXT
2540 RETURN
2570 FRM$=STRING$(45,196):COLOR 7,0
2580 LOCATE TXTBASE-3, 18, 0 : PRINT CHR$(214) FRM$ CHR$(183) 
2590 PRINT TAB(18) CHR$(186);:COLOR 15,0:PRINT "W O R D  F R E Q U E N C Y  A N A L Y S I S  ";:COLOR 7,0:PRINT CHR$(186) 
2600 PRINT TAB(18) CHR$(211) FRM$ CHR$(189)
2610 RETURN
2640 IF ERL = 1000 AND ERR = 53 THEN RESUME 1030
2650 IF ERR = 1000 AND (ERR = 52 OR ERR = 64) THEN ERRMSG$ = FLNM$+" is not an acceptable file name":LOCATE 6,8: GOSUB 2750: RESUME 1080
2660 IF ERR = 1000 THEN ON ERROR GOTO 0
2680 IF ERR=53 AND ERL=1240 THEN ERRMSG$="No .TXT files on drive "+ LEFT$(FLNM$,1):LOCATE 17,8:GOSUB 2750: RESUME 1190
2690 IF ERR=71 AND (ERL=1240 OR ERL=1260) THEN ERRMSG$="The disk drive door isn't closed. Close it.": LOCATE 17,8: GOSUB 2750: RESUME 1190
2700 IF ERL = 1260 AND ERR = 53 THEN ERRMSG$ =FLNM$+" does not exist":LOCATE 17,8:GOSUB 2750:RESUME 1190
2710 IF ERL = 1260 AND (ERR=64 OR ERR=52) THEN  ERRMSG$=FLNM$+" is not an acceptable file name." :LOCATE 17,8: GOSUB 2750:RESUME 1190
2730 ON ERROR GOTO 0 
2750 IF COLR THEN COLOR 20,0 ELSE COLOR 31,0
2760 PRINT ERRMSG$;:COLOR 7,0 
2770 FOR I=1 TO 3000:NEXT I:RETURN
2800 TRUE = -1:FALSE = NOT TRUE
2810 DEF SEG =&HB000 
2820 GOSUB 3250
2830 IF LOCATED THEN HASMONO = TRUE
2850 DEF SEG = &HB800 
2860 GOSUB 3250
2870 IF LOCATED THEN HASCGA = TRUE
2880 DEF SEG 
2900 IF (NOT HASCGA) AND HASMONO THEN CGA = FALSE: RETURN 
2910 IF HASCGA AND (NOT HASMONO) THEN CGA = TRUE:GOSUB 3030: RETURN 
2920 IF (HASCGA AND HASMONO) THEN GOSUB 2960: RETURN
2930 BEEP: END 
2960 CLS:GOSUB 2570: LOCATE 12,12:PRINT "Press 'C' to use color monitor, 'M' for your monochrome display."
2970 LOCATE 14,12,1:CHOICE$ = INPUT$(1)
2980 IF INSTR("CcMm",CHOICE$) = FALSE THEN BEEP:GOTO 2970 
2990 IF CHOICE$ ="C" OR CHOICE$ = "c" THEN GOSUB 3100 ELSE GOSUB 3160
3000 RETURN
3030 CLS:GOSUB 2570:LOCATE 12,14:PRINT "Press 'C' for a color display, 'B' for black and white"
3040 LOCATE 14,14,1:CHOICE$=INPUT$(1)
3050 IF INSTR("CcBb",CHOICE$) = FALSE THEN BEEP:GOTO 3040 
3060 IF CHOICE$ = "C" OR CHOICE$ = "c" THEN COLR= TRUE ELSE COLR= FALSE
3070 RETURN
3100 CLS: WIDTH 80: DEF SEG = 0: POKE &H410,(PEEK(&H410) AND &HCF) OR &H20
3110 WIDTH 40:SCREEN 1:SCREEN 0:WIDTH 80:LOCATE ,,1,6,7
3120 CGA = TRUE 
3130  RETURN
3160 CLS:WIDTH 40:DEF SEG = 0: POKE &H410,PEEK (&H410) OR &H30
3170 WIDTH 80: LOCATE ,,1,12,13
3180 CGA = FALSE 
3190  RETURN
3250 LOCATED = FALSE
3260 ORIGVAL = PEEK (0) 
3280 TESTVAL = 0: POKE 0,TESTVAL:TRIALVAL = PEEK (0)
3290 IF TRIALVAL=TESTVAL THEN FIRSTTEST = TRUE ELSE FIRSTTEST= FALSE
3310 TESTVAL = 255: POKE 0,TESTVAL: TRIALVAL=PEEK(0)
3320 IF TRIALVAL=TESTVAL THEN SECONDTEST = TRUE ELSE SECONDTEST = FALSE
3340 LOCATED=FIRSTTEST AND SECONDTEST 
3350 POKE 0,ORIGVAL 
3360 RETURN
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0378

     Volume in drive A has no label
     Directory of A:\

    FSED     COM     10240   6-26-95
    FSED     DOC     16934   1-05-85   7:36p
    SETFSED  COM      1408  11-25-84   7:58a
    SETFSED  DOC       896   2-26-95
    TALLY    EXE     11776  12-25-84   7:53p
    TALLY    DOC      5632  10-26-94
    FSEDIT   DOC      9969   4-10-83   7:36p
    FSEDIT   EXE     24576   2-23-83  10:03p
    PC-SPELL BAS      1280   9-15-84   1:25a
    PC-SPELL SOR       640   9-15-84   1:25a
    PC-SPELL DOC      3328   9-15-84   1:25a
    PC-SPELL UNI       768   9-15-84   1:25a
    SORTDIC  BAS       896   9-15-84   1:25a
    DICTIONA         33536   9-15-84   1:26a
    WORDFREQ EXE     36480  10-06-83   8:34p
    WORDFREQ BAS      9984  10-02-83   1:15p
    FOGFIN   COM     15360   9-28-84   3:16p
    FOGFIN   DOC      7576   6-11-84   7:37p
    INDEX    DOC     14427   3-05-84   7:37p
    INDEX    EXE     19712   3-05-84   8:18a
    CHOP     EXE     14848   2-22-85   7:15p
    FILES378 TXT      1650   7-08-85   2:38p
           22 file(s)     241916 bytes
                           71680 bytes free
