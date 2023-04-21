---
layout: page
title: "PC-SIG Diskette Library (Disk #2434)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2434/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2434"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "WORDFIND 1 OF 2 (#2435 ALSO)"

    What's an eight letter word that starts with a ``W'' and means ``a
    terrific puzzle-aid''?  If you haven't guessed, the answer is
    WORDFIND, a sensational program for anyone who loves puzzles but
    doesn't always have all the answers.
    
    WORDFIND assists in finding words for crossword puzzles and other types
    of word puzzles such as acrostics.  Type in the word with a wild card
    symbol for the letters you don't know.  WORDFIND searches its files and
    tells you every word that meets the letter requirements. You decide
    which word meets the crossword's definition.
    
    WORDFIND contains a dictionary full of words, from two letters to 20
    letters long.  This program is perfect for frustrated crossword
    players and budding cryptogram pundits.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BONUS.DOC

{% raw %}
```
                                 UNAGRAM


                    BONUS PRODUCT FOR REGISTERED USERS

UNAGRAM is a program to solve anagrams.  UNAGRAM uses the same files as 
WORDFIND.  You enter the scrambled word and then UNAGRAM searches the 
appropriate file to see if there is a word(s) with the same letters.  
Occasionally a puzzle maker will inadvertently use a set of letters that 
can be rearranged in more than one way to create legitimate words.  
Therefore, UNAGRAM gives you the option of searching the entire file for 
all possible matches or terminating the search after the first match.

UNAGRAM is included as a bonus when you order the registered version of 
WORDFIND.

I think that the use of UNAGRAM is cheating; but I am not going to question 
your motives if you wish to use it.




```
{% endraw %}

## FILE2434.TXT

{% raw %}
```
Disk No: 2434                                                           
Disk Title: WordFind 1 of 2 (#2435 also)                                
PC-SIG Version: S1                                                      
                                                                        
Program Title: Wordfind                                                 
Author Version: 5.2S                                                    
Author Registration: $15.00                                             
Special Requirements: None                                              
                                                                        
What's an eight letter word that starts with a "W" and means "a terrific
puzzle-helper"?  If you haven't guessed, the answer is WORDFIND, a      
sensational program for anyone who loves puzzles but doesn't always have
all the answers.  WORDFIND assists you in finding words for crossword   
puzzles and other types of word puzzles such as acrostics.  All you do  
is type in the word with a wild card symbol for the letters you don't   
know.  WORDFIND searches its files and tells you every word that meets  
the letter requirements.  You still get to decide which word meets the  
crossword's definition.                                                 
                                                                        
WORDFIND contains a dictionary full of words, from two letters to 20    
letters long.  This program is perfect for frustrated crossword players 
and budding cryptogram pundits.                                         
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## WORDFIND.DOC

{% raw %}
```
                                   WORDFIND
                                 Version 5.2S

WORDFIND is a system to assist you in finding words for crossword puzzles and 
for other types of word puzzles such as acrostics.  The system consists of 
this file, WORDFIND.DOC, the executable program FIND52S.EXE and 19 word 
files: X2, X3, X4, . . . X20.  The file X2 contains 2 letter words, X3 
contains 3 letter words, etc.  The executable program is an MS-DOS program and 
will run on MS-DOS computers, even ones which are not fully IBM PC compatible.

WORDFIND (Copyright 1989, Castle Oaks Computer Services) is a shareware 
program which has been distributed for trial use only.  If you use it, you 
should register.  Send your registration fee of $15.00 to: 

                        Castle Oaks Computer Services
                               P. O. Box 36082
                         Indianapolis, IN 46236-0082

You should include in your registration letter, name, address and telephone 
number.  After your registration fee is received, a registered copy of the 
program will be sent to you and your name will be placed on our list of 
registered users.  Registered users will be notified of any updates to the 
software or word files and any other type of programs being offered by Castle 
Oaks.  You may share this program with others but they should be encouraged
to register also.

The word files have been abstracted from a dictionary of words provided by 
Public Brand Software.

INSTALLATION

The files needed for the system total nearly 600,000 bytes.  They are 
distributed on two floppy disks.  Disk one contains this file, the executable 
file WORDFIND.EXE and the files X2 through X9.  Disk two also contains 
WORDFIND.EXE and the files X10 through X20.

       FLOPPY disk based system - Make working copies of both disks 
       and store the distribution disks for safe keeping.  No other 
       installation is necessary.  Use disk one if you wish to find 
       words whose lengths are 9 or fewer letters.  Use disk two to 
       find words that are 10 to 20 letters in length.  Normally, on 
       a floppy based system you will boot up with a system disk in 
       drive A:, you may then place either working disk one or two in 
       drive B:, log to drive B: and run WORDFIND.


       HARD disk based system - Make a directory called WORDS, (or 
       a name of your own choice) change directory to WORDS and copy 
       both disks one and two to this directory.  

       Store your distribution disks for safe keeping.

USAGE

Before running the program, log to the drive and/or subdirectory containing 
the executable program and the word files that are to be searched.  Then to 
run the program, you may either enter just WORDFIND and the system will prompt 
you for a template word, or you may enter WORDFIND <template>.  Where 
<template> is the first template word to be used.  A template word is a series 
of known letters in known positions with wild card characters in the positions 
where the letters are not known.  (In versions 4.0 and later, any non-
alphabetic character may be used as the wild card character.  In earlier 
versions, the wild card character had to be a '?'.)  A new feature of
version 5.2 is that you may not use the characters '-', '=', or '+' as regular 
wild cards.  They are special wild cards to indicate duplicate letters.  This
is especially useful in solving cryptograms.  Suppose a cryptogram has the
coded word "QZXZXAQBDFZ".  You can see that the 1st and 7th letters are the 
same; the 2nd, 4th and 11th letters are the same; and the 3rd and 5th letters 
are the same.  Suppose that you have already determined that the 6th letter, 
"A", represents "B", then a suitable template could be: -=+=+b-???=  
The single word, "REMEMBRANCE" will be found. 

In versions 5.0 and later, the program will prompt you for another template 
word.  If you wish to terminate the program, just press the carriage return.

Whenever a search is made, an appropriate file is opened and the entire file 
is read.  In the worst case, (a 4.77 megahertz, 360K floppy based computer 
searching the file X8), the search will require a little over a minute.  
Displaying words is slow in comparison to searching, therefore when the search 
finds many matches, the process is significantly slower than when only a few 
matches are found.  If you have a faster computer and/or a hard disk or faster 
floppy drives, the search will take less time.  If the search reveals the 
desired word before reading the entire file, you may abort the search by 
pressing the control key and the 'c' key at the same time.  

MODIFICATIONS

The word files have been condensed in order to save space.  The condensing 
method used is a simple one which will allow a user to modify these files if 
needed.  The first word in a file is a full length word.  Any subsequent words 
may be shorter.  If any characters at the beginning of a word are the same as 
those in the previous word, they are not repeated.  For example, in the 20 
character word file, X20, the first word is ANTIENVIRONMENTALISM, the second 
word is ANTIENVIRONMENTALIST.  Since the first 19 characters of each word 
agree, only the T of the second word appears in the second record.  The third 
word is ANTIINSTITUTIONALISM.  Only the first 4 characters of words 2 and 3 
agree, therefore the third record contains INSTITUTIONALISM.  Furthermore, to 
save space, each record is terminated with a line feed only.  Various text 
editors and word processors may be used to edit these files.  If, for example, 
you wish to add a word to a file, it may be added immediately before any full 
length word in the file.  Although the files are now alphabetical, that is not 
a requirement for the search.  The word need not be condensed unless the user 
desires to do so.  If it is condensed, then it must be preceded by words that 
will provide the correct leading characters.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2434

     Volume in drive A has no label
     Directory of A:\

    WORDFIND EXE     16384  12-02-89   7:17a
    X2                 384   1-12-89   5:40p
    X3                2048   1-12-89   5:43p
    X4                8192   1-12-89   5:46p
    X5               21248   1-12-89   5:54p
    X6               41216   1-12-89   6:16p
    X7               69632   1-12-89   6:43p
    X8               92032   7-17-89   2:34p
    X9               91776   1-12-89   7:31p
    BONUS    DOC       896  10-17-89   9:34a
    WORDFIND DOC      6144  12-01-89   8:13p
    FILE2434 TXT      2073  10-19-90   1:54p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT      1464  11-19-90   9:24a
           14 file(s)     353529 bytes
                            4096 bytes free
