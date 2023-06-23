---
layout: page
title: "PC-SIG Diskette Library (Disk #667)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0667/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0667"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE WRITERS TOOL KIT"

    The Writer's Toolkit is a collection of 20 executable utility programs
    inspired by Kernighan and Pike's Software Tools.  Most of the
    utilities are filters that process text files.  These utilities
    include: converting lower case to upper case and upper case to lower
    case, encrypting and decrypting files etc.  Each utility has a well
    written documentation file with examples for each utility.
    
    The most interesting program is MEMO.  This program will display memos
    that have the same date as the system date.  Runnerup is the FREQ.EXE
    which determines frequency of use but only works on a sorted list
    of words. You will have to use the WORDS and SORT programs first but
    very handy for anyone doing a lot of wordprocessing and documentation.
    
    System Requirements: 64K, one disk drive and monochrome display
    
    How to Start: To run, enter its filename, e.g., for WORDS.EXE
    enter WORDS and press <ENTER>.
    
    Suggested Registration:  $15.95
    
    File Descriptions:
    
    ???????? DOC  Documentation files (20 files)
    CAL      EXE  Calendar for any month between 1901 and 1989.
    BOOP     EXE  Beeps the speaker.
    DECRYPT  EXE  Decrypt files encrypted with encrypt.
    COLOR    EXE  Change the backgnd and foregnd colors.
    CC-CLCL  EXE  Carriage return filter.
    CAPITALS EXE  Capitalization filter. Converts lower case to upper case
    SAMPLE   MEM  Sample memo file for the memo utility.
    READ     ME   Writer's Toolkit information.
    DUP      EXE  Duplicate line filter.
    DETAB    EXE  Converts tabs into spaces.  From Software Tools.
    WORDS    EXE  Unix words filter.
    ENCRYPT  EXE  Encryption program from Software Tools.
    FREQ     EXE  Word frequency counter.  Must use words and sort first.
    ENTAB    EXE  Converts 8 spaces into a tab char.  From Software Tools.
    WHITE    EXE  Whitespace counting filter.
    TEE      EXE  UNIX tee filter.
    SLEEP    EXE  Pauses for given number of seconds.
    LL-CLCL  EXE  Carriage return filter.
    RS       EXE  Removes whitespace at ends of lines.
    LOWCASE  EXE  Lowercase filter.  Converts upper case to lower case.
    NL       EXE  Line numbering filter.
    MEMO     EXE  Display memos that have the system date.
    WRITERS  TXT  Writer's Toolkit information.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BOOP.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 BOOP
-------------------------------------------------------------------------------
Summary:

     boop 

BOOP produces a short and pleasant sound on the speaker, for use within 
batch files for signalling the operator upon errors or the end of processes.

Examples:

Place the boop command in a batch file to wake up the operator after a long
process is complete:

     .
     .
     .
     .
     format a:
     boop
```
{% endraw %}

## CAL.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 CAL
-------------------------------------------------------------------------------
Summary:

     cal [<month> <year.}

CAL displays a calendar for the month and year specified.  If no month/year
is specified, CAL displays a calendar for the current month.

Examples:

Display a calendar for July, 1954.

     cal 7 1954

Display this month's calendar.  Note:  Since CAL uses a DOS system call for 
this date information, the system calendar must be current.  See your DOS
documentation about the DATE command.

     cal
```
{% endraw %}

## CAPITALS.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 CAPITALS
-------------------------------------------------------------------------------
Summary:

     capitals [< filename] 

CAPITALS is a text filter that capitalizes all letters in the standard input
before placing the result on standard output.

Examples:

Capitalize the input and save it in the file named EXAMPLE.

     capitals > example

Capitalize an assembler source file and print it on the printer.

     capitals <capitals.asm >prn 

Make a list of the current environmental settings, capitalize that list, and 
append the list to the file named AUTOEXEC.BAT.

     set | capitals >> autoexec.bat
```
{% endraw %}

## CC-CLCL.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 CCL-CL
-------------------------------------------------------------------------------
Summary:

     ccl-cl [ < [filename[.ext]]

During exchange of files with operating systems other than MS-DOS, it is 
possible that you will receive a text file with an improper line termination 
sequence.  This is because the line termination sequence varies, depending on 
the operating system and/or network communications protocol.  This may be 
diagnosed by either (1) viewing it in an editor (such as vi or WordStar) which 
shows control characters, or by (2) verifying the improper line termination 
sequence by dumping the file using debug or a filedump utility.

The CCL-CL filter converts all [CR][CR][LF] sequences to [CR][LF] sequences, 
and terminates the lines properly for use with MS-DOS.  

Example:

Convert the file named bbs.doc, which came from a Bulletin Board system, to
MS-DOS format and save it in the file named result.

     ccl-cl < bbs.doc > result
```
{% endraw %}

## COLOR.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 COLOR
-------------------------------------------------------------------------------
Summary:

     color <foreground code>[ <background code>]

COLOR changes the colors on the screen according to the following color codes:

       Black:   0      Red:     1      Green:   2      Yellow:  3
       Blue:    4      Magenta: 5      Cyan:    6      White:   7

The background color code may be omitted; the default is black.  To highlight
a foreground color, append a plus (+) after the foreground color code.

Examples:
     color 3 0    Yellow on black
     color 4      Blue (on default black)
     color 2+ 4   Bright green on blue

Note:  Since COLOR uses ANSI sequences, you must specify ANSI.SYS in your 
CONFIG.SYS file at system start.  Refer to your DOS documentation for details.

     device=ANSI.SYS           

```
{% endraw %}

## DECRYPT.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 DECRYPT
-------------------------------------------------------------------------------
Summary:

     decrypt <keyword> [< filename] 

DECRYPT is a text filter that deciphers files encoded by ENCRYPT.

Examples:

Use the code word 'Minneapolis' to decipher the information in SECRET.TXT and
save it to the file named PUBLIC.TXT.

     decrypt Minneapolis <SECRET.TXT | tee con > PUBLIC.TXT

View the information in EYESONLY.INF encrypted with the code word 'Joshua'.

     type EYESONLY.INF | decrypt Joshua

See also:  ENCRYPT
```
{% endraw %}

## DETAB.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 DETAB
-------------------------------------------------------------------------------
Summary:

     detab filename

The DETAB text filter expands the TABs in its input to the appropriate number
of spaces.

Example:

Remove the spaces from the file named detab.c and write it to the file named 
detab.new.

     detab < detab.c > detab.new  

See also:

     ENTAB, WHITE
```
{% endraw %}

## DUP.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 DUP
-------------------------------------------------------------------------------
Summary:

     dup [< filename] 

DUP is a text filter that creates a unique list of all the duplicate lines in 
a file; given a sorted list as its input.

Examples:

Create a list of the duplicate words in FILE1 and FILE2.

     copy file1+file2 temp                  Make one file.
     sort < temp | dup > result             Sort file and save in RESULT.
     del temp                               Garbage collection.

Make a list of the redundant files in two subdirectories named ONE and TWO.

     dir one > temp                         Take the directory of ONE.
     dir two >> temp                        Add to it the directory of TWO.
     sort < temp | dup > result             Sort file and save in RESULT.
     del temp                               Garbage collection.
```
{% endraw %}

## ENCRYPT.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 ENCRYPT
-------------------------------------------------------------------------------
Summary:

     encrypt <keyword> [< filename] 

ENCRYPT is a text filter that enciphers files according to a keyword.  The 
encrypted information may be displayed at a later date by using the DECRYPT
text filter and the keyword.

Examples:

Use the code word 'Minneapolis' to encipher the information in PUBLIC.TXT and
save it to the file named SECRET.TXT.

     encrypt Minneapolis <PUBLIC.TXT > SECRET.TXT

Encrypt the information in READABLE.TXT with the word 'Joshua' and save it in
EYESONLY.INF.

     encrypt Joshua < READABLE.TXT > EYESONLY.INF

See also:  DECRYPT
```
{% endraw %}

## ENTAB.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 ENTAB
-------------------------------------------------------------------------------
Summary:

     entab [< filename]

The ENTAB command takes the text in the specified file and places TABs in it 
(with TAB stops at every 8 columns).  See the DETAB command.

Example:

Place tabs in the file named tab.c and write it to the file named TAB.NEW.

     entab tab.c > tab.new

Take the disk directory, place tabs within it, and save it to the file named
DISKDIR.SAV.

     dir | entab > diskdir.sav

See also:

     DETAB, WHITE
```
{% endraw %}

## FILES667.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 667   The Writer's Toolkit                                  v1 DS2
---------------------------------------------------------------------------
The Writer's Toolkit is a collection of 20 executable utility programs
inspired by Kernighan and Pike's Software Tools. Most of the utilities are
filters that process text files. These utilities include: converting lower
case to upper case and upper case to lower case, encrypting and decrypting
files etc. Each utility has a well written and concise documentation file.
The doc files give examples for each utility.
 
The most interesting program is MEMO. This program will display memos that
have the same date as the system date. CALENDAR displays the calendar for
any given month. You will need to have a CONFIG.SYS file that has the
command "DEVICE=ANSI.SYS" in it in order for the calendar to be displayed
correctly. CALENDAR works for dates between 1901 and 1989.
 
The Writer's Toolkit is user-supported with a $15.95 registration
contribution requested to support further development of the software.
 
 
???????? DOC  Documentation files (20 files)
BOOP     EXE  Beeps the speaker.
CAL      EXE  Calendar for any month between 1901 and 1989.
CAPITALS EXE  Capitalization filter. Converts lower case to upper case.
CC-CLCL  EXE  Carriage return filter.
COLOR    EXE  Change the backgnd and foregnd colors.
DECRYPT  EXE  Decrypt files encrypted with encrypt.
DETAB    EXE  Converts tabs into spaces.  From Software Tools.
DUP      EXE  Duplicate line filter.
ENCRYPT  EXE  Encryption program from Software Tools.
ENTAB    EXE  Converts 8 spaces into a tab char.  From Software Tools.
FREQ     EXE  Word frequency counter.  Must use words and sort first.
LL-CLCL  EXE  Carriage return filter.
LOWCASE  EXE  Lowercase filter.  Converts upper case to lower case.
MEMO     EXE  Display memos that have the system date.
NL       EXE  Line numbering filter.
RS       EXE  Removes whitespace at ends of lines.
SLEEP    EXE  Pauses for given number of seconds.
TEE      EXE  UNIX tee filter.
WHITE    EXE  Whitespace counting filter.
WORDS    EXE  Unix words filter.
READ     ME   Writer's Toolkit information.
SAMPLE   MEM  Sample memo file for the memo utility.
WRITERS  TXT  Writer's Toolkit information.
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987
```
{% endraw %}

## FREQ.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 FREQ
-------------------------------------------------------------------------------
Summary:

     freq [< filename] 


FREQ is a text filter that takes a sorted list of words from the standard 
input and outputs a list of the unique words in the input and the frequency of 
their occurrence.

Examples:

Make a list of the unique words in the file named original and print that list 
on the printer.

     freq <original >prn 

Place all of the words in the file named textfile on individual lines, sort
those lines, make a list of how many times the words occurred, and save that 
list as the file named wordlist.

     words < textfile | sort | freq > wordlist
```
{% endraw %}

## LL-CLCL.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 LL-CLCL
-------------------------------------------------------------------------------
Summary:

     LL-CLCL [< filename] 

LL-CLCL is a text filter that takes a file with missing carriage returns and 
adds the carriage returns on the right places.  In effect, this solves the ^J
problem when viewing WordStar files and files from mainframe system.

Examples:

Prepare the file named UNIX.TXT for MS-DOS.

     ll-clcl < unix.txt > msdos.txt

Clean out WordStar automatic linefeed characters.

     ll-clcl <wordstar.fil > ascii.fil
```
{% endraw %}

## LOWCASE.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 LOWCASE
-------------------------------------------------------------------------------
Summary:

     lowcase [< filename] 


LOWCASE is a text filter that takes the standard input and converts all 
letters to lowercase before placing the result on standard output.

Examples:

Display the current directory in lowercase.

     dir | lowcase

Display the contents of the file named lowcase.asm on the screen in lowercase.

     lowcase < lowcase.asm
```
{% endraw %}

## MEMO.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 MEMO
-------------------------------------------------------------------------------
Summary:

     MEMO <filename>

MEMO is a program designed to handle your daily schedule.  MEMO gets the 
current date via a DOS system call, then reads the specified file and matches 
and displays the memos for that day.

The schedule file must be an ASCII file (a file which can be viewed with the 
MS-DOS TYPE command), with data in the following format:

   Month Day        :  Message to be printed.
   <- 14 spaces ->Colon<-------- 65 spaces ----------------->

Example:

Use the file named SCHEDULE.MEM to print out today's reminders.

     memo schedule.mem

See the contents of the file named SAMPLE.MEM on this disk.
```
{% endraw %}

## NL.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 NL
-------------------------------------------------------------------------------
Summary:

     nl [< filename] 

NL is a text filter that places line numbers before each line in the text.

Examples:

Add line numbers to the directory produced by the DIR command.

     dir | nl

Display lines 230-239 of a very large source program.

     nl <bigfile.asm | grep 23.\:
```
{% endraw %}

## NOTES667.TXT

{% raw %}
```
Program name:       The Writer's Toolkit
 
Author name:        Software Creations
Address:            99-583 Aliipoe Drive
                    Aiea, Hawaii  96701
Telephone Number:   None
 
Suggested Donation:  $15.95
 
Program Description:
 
The Writer's Toolkit is a collection of 20 useful utility programs. Most of
these programs are filters for text files. The programs work as shown in the
documentation. Anyone doing alot of word processing or programming would be
interested in having these programs in their library. These programs were tested
on an IBM XT with a color monitor and an Epson FX-80 printer. Dos ver. 2.0. The
authors do not specify what equipment these programs will run with.
 
The documentation is concise, complete, well written and has many examples
showing how to use the programs. Some of the examples will not run exactly as
shown because the text files shown in the command do not exist on the disk. For
these examples, just substitute the name of an existing text file.
 
 
Notes on some of the programs.
 
CAL.EXE        Only appears to work between the dates of 1901 to 1989.
 
CAPITALS.EXE   If you try the example "CAPITALS <EXAMPLE" , you will
               have to hit CTRL-Break to return to DOS.
 
COLOR.EXE      You will need to have a CONFIG.SYS file with the
               command "DEVICE=ANSI.SYS" in it.  Otherwise, you will
               see the escape sequences also.  Try it with and
               without the CONFIG.SYS file.
 
DETAB.EXE      This converts tab characters into spaces.  The
               documentation is a little confusing on this one.
 
DUP.EXE        The source text must be sorted.  Use the DOS sort
               filter to sort the source text.
 
ENCRYPT.EXE    Dont forget the encryption key used to encrypt the file.
 
ENTAB.EXE      Replaces groups of 8 spaces with the tab character.  The
               documentation is a little confusing.
 
FREQ.EXE       Only works on a sorted list of words.  You will have to
               use the "words" and "sort" filters on the text before
               you use the "freq" filter.  See the example in the
               documentation file.
 
MEMO.EXE       This is the most interesting program on the disk.  This
               program displays a list of memos that have the system
               date.
 
NL.EXE         If you add line numbers to your text file be aware that
               there is no command to remove them.  The 2nd example in
               the documentation will not work because there is no
               "grep" command on the disk.
 
WHITE.EXE      Counts the spaces, tabs and newlines in a text file.
 
WORDS.EXE      Puts all the words in a text file on separate lines.
               This must be done first before the "freq" filter will
               work correctly.
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987
```
{% endraw %}

## RS.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 RS
-------------------------------------------------------------------------------
Summary:

     rs [< filename]


RS is a filter that removes all white spaces (spaces and TABs) between the 
last word and the carriage return at the ends of lines in text files.

     Before:                     After:

     last word. ^I[CR]           last word.[CR]
     end of text.    [CR]        end of text.[CR]
     sentence.^I^I^I^I[CR]       sentence.[CR]

Example:

Remove unnecessary spaces and tabs from textfile and place it in newfile.

     rs <texfile >newfile
```
{% endraw %}

## SLEEP.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 SLEEP
-------------------------------------------------------------------------------
Summary:

     SLEEP <seconds>

SLEEP is a program that you can use in batch files to pause the input for
the designated number of seconds.  SLEEP uses DOS system calls for 1/100 
second accuracy.

Examples:

Pause the batch program for 10 seconds.

     sleep 10
```
{% endraw %}

## TEE.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 TEE
-------------------------------------------------------------------------------
Summary:

     tee filename


TEE is a text filter that passes the standard input to a designated file (or 
MS-DOS device) in addition to passing it unchanged to the standard output.

Examples:

Copy the file named original to two new files, newfile1 and newfile2.

     tee newfile1 <original >newfile2

Echo what is typed at the keyboard onto the screen, while saving the characters
to a file named record.

     tee record                         

Copy the file named original to a new file (newfile), while printing the 
contents of original on the printer.

     tee newfile <original >prn 

Take the directory, display it on the screen, save the directory to the file 
named dirlist, sort the directory, and place the sorted directory in the file 
named dirsort.

     dir | tee con | tee dirlist | sort > dirsort
```
{% endraw %}

## WHITE.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 WHITE
-------------------------------------------------------------------------------
Summary:

     white < filename


The WHITE command counts the spaces, tabs, and newline characters in the 
specified text file.

Example:

Count the spaces, tabs, and newline characters in the file named WHITE.DOC.

     white < white.doc

See also:

     ENTAB, DETAB
```
{% endraw %}

## WORDS.DOC

{% raw %}
```
-------------------------------------------------------------------------------
 WORDS
-------------------------------------------------------------------------------
Summary:

     words [< filename]


WORDS is a text filter that places all words appearing in the standard input
on separate lines.

Examples:

Place all of the words in the file named textfile on individual lines, sort
those lines, make a list of how many times each of the words occurred, and
save that list in the file named wordlist.

     words < textfile | sort | freq > wordlist
```
{% endraw %}

## WRITERS.TXT

{% raw %}
```
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


About The Writer's Toolkit

The Writer's Toolkit is user-supported.  It is ok to copy it; post it on
computer bulletin boards, and give it away to friends.  You are encouraged 
to make copies of this program for others on a private, non-commercial 
basis.  If you do make copies of the program, we ask that you distribute 
unmodified copies of the disk with others.  We also ask that you distribute 
an unmodified copy of the documentation.

If you like The Writer's Toolkit, we hope that you will acknowledge the 
authors of the program and support them by your registration.  You may 
register your copy by filling out the following form and mailing it to the 
address shown with a (suggested) contribution of $15.95.  By supporting this 
product, you will be contributing to the further enhancement of The 
Writer's Toolkit and the development other products.



=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=



Software Creations
99-583 Aliipoe Drive
Aiea, Hawaii  96701


                         The Writer's Toolkit 
                           Registration Form


Please print neatly.


                                               Date  _________________________



Name  ________________________________________________________________________

Address  _____________________________________________________________________

City  ______________________________  State  ____________  Zip  ______________



=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


User's agreement

By accepting and using this software, you acknowledge that this software may
not suit your particular requirements or be completely trouble-free.  The 
software will perform as described when the instructions are followed and with
proper application.  The authors, however, are not responsible for your 
specific application or any problems resulting from use of this software.

If the software does not perform as described, liability is limited to 
replacement of the software or a refund of your contribution (if you have
registered).  We have no liability to you or any other person or entity for 
any damage or loss, including special, incidental, or consequential damages, 
caused by this software, directly or indirectly.  Some states do not allow the 
limitation or exclusion of liability for incidental or consequential damages, 
so the above limitation or exclusion may not apply to you.

This agreement is governed by the laws of the State of Hawaii.  Should any
part of this agreement be held invalid, the remainder of the agreement will
still be in effect.  This agreement can only be modified by written statement
signed by the authors.

Under this agreement, you may NOT:

1)   Distribute the program in connection with any other product or
     service, or as part of a corporate or institutionally-sponsored
     distribution.

2)   Charge a fee for this program, with the exception of registered
     user groups who may charge a cost-based fee (not exceeding $10) 
     to cover their own costs.

3)   Distribute the program in modified form.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0667

     Volume in drive A has no label
     Directory of A:\

    BOOP     DOC       522  12-18-86   8:07p
    BOOP     EXE      2034  11-22-86   2:41p
    CAL      DOC       624  12-20-86   3:55p
    CAL      EXE      7378  12-20-86   3:49p
    CAPITALS DOC       718  12-18-86   2:07p
    CAPITALS EXE      7130  12-17-86  12:57p
    CC-CLCL  DOC      1070  12-18-86   2:13p
    CC-CLCL  EXE      4294  12-17-86  12:58p
    COLOR    EXE      7438  12-17-86  12:59p
    COLOR    DOC       929  12-18-86   2:19p
    DECRYPT  DOC       631  12-22-86  11:58p
    DECRYPT  EXE      5202  12-17-86   1:00p
    DETAB    DOC       473  12-18-86   2:24p
    DETAB    EXE      7068  12-17-86   1:00p
    DUP      DOC       974  12-22-86  11:47p
    DUP      EXE      7528  12-17-86   1:01p
    ENCRYPT  DOC       765  12-22-86  11:58p
    ENCRYPT  EXE      7488  12-17-86   1:02p
    ENTAB    EXE      7278  12-17-86   1:02p
    ENTAB    DOC       632  12-18-86   2:23p
    FREQ     EXE      7246  12-17-86   1:02p
    FREQ     DOC       770  12-18-86   2:08p
    LL-CLCL  DOC       636  12-22-86  11:52p
    LL-CLCL  EXE      4294  12-17-86   1:03p
    LOWCASE  DOC       552  12-18-86   2:08p
    LOWCASE  EXE      7130  12-17-86   1:03p
    MEMO     DOC       817  12-23-86  12:20a
    MEMO     EXE      9484  12-22-86   8:00a
    NL       DOC       470  12-18-86   8:27p
    NL       EXE      6944  12-17-86   1:04p
    READ     ME       1262  12-30-86  11:59a
    RS       DOC       664  12-18-86   2:08p
    RS       EXE      7536  12-17-86   1:04p
    SAMPLE   MEM       977   1-01-87  10:07p
    SLEEP    DOC       447  12-23-86  12:23a
    SLEEP    EXE     15175  12-19-86  11:52a
    TEE      DOC      1018  12-18-86   2:08p
    TEE      EXE      8286  12-17-86   1:04p
    WHITE    EXE      7068  12-17-86   1:05p
    WHITE    DOC       457  12-18-86   2:25p
    WORDS    DOC       571  12-18-86   2:08p
    WORDS    EXE      4568  12-17-86   1:05p
    WRITERS  TXT      3280  12-30-86  11:55a
    FILES667 TXT      2499   1-04-80   1:40a
    NOTES667 TXT      3008   1-19-87   3:50p
    GO       BAT       527   1-19-87   3:53p
           46 file(s)     165862 bytes
                          135168 bytes free
