---
layout: page
title: "PC-SIG Diskette Library (Disk #1959)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1959/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1959"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "EDFIX2/QB4CREF/ACSORT"

    This program will read, edit, write and transfer random-access files up
    to two billion bytes, with individual records up to 2048 bytes.  It
    will work on any file, even if the file is not truly a random-access
    file.  With EDFIX2, you can manipulate dBase data files--except that
    EDFIX2 records will probably not match up with dBase records.  You may
    also use EDFIX2 on spreadsheet files and files created by various other
    software packages.
    
    This is a cross-reference program for Quickbasic programs.  It's very
    easy to run.  If you don't remember how to use it, just type in QB4CREF
    at the DOS command line and the program itself will tell you what to
    do.  The program can handle up to 1,000 variables, 1,000 labels, 1,000
    subprograms, and 1,000 functions (up to 4,000 items total).
    
    This program will sort data files with fixed-length records and fields.
    The output file will be a list of record numbers (an index to the data
    file in sorted order).  The index itself can be read as either a
    sequential file or a random file with a record length of 12.  The data
    file being sorted may be of any reasonable size.
    
    You may sort data of any type commonly used in any Microsoft language.
    Other sort programs may have difficulties with Microsoft random files.
    ACSORT will not, because it will not sort sequential data files; it is
    only intended for use with true random files.  Because of this, it will
    not sort dBase data files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ACSORT.DOC

{% raw %}
```


                              INTRODUCTION
    ACSORT, copyright (c) 1989, T.N.T. Software Inc., is a shareware 
program; you may try it without any obligation to pay anything.  If you 
do like it and use it after trying it, you should register your copy.  
Registration will cost $25.  Registered users are entitled to support, 
will be sent source code on request, and will be notified of updates.  
If you are not a registered user, you should not expect support; please 
do not call or write and ask for any.
    You may post ACSORT and this documentation on bulletin boards, pass 
it around to your friends, and make copies of it.  You may not sell 
ACSORT without written permission from T.N.T. Software.
    ACSORT (Advanced Cheapsort) was written by me, Bruce W. Tonkin.  
About 90% of the program is Quick BASIC.  The remainder is assembler.  
The assembler routines were printed in Dr. Dobbs' Magazine as a part of 
several articles I wrote about general sorting techniques.

                         CAPABILITIES OF ACSORT
    ACSORT is a disk-based sort/merge program.  It will sort data files 
which have fixed-length records and fixed-length fields.  The data file 
being sorted may be of any reasonable size, up to 268,402,689 records 
long and up to 2,147,483,648 bytes (but sorting that many records would 
probably take about six months on a fast machine).  You may have up to 
50 sort fields, provided that the total length of all sort keys does not 
exceed 252 bytes.  If you need even longer keys, contact T.N.T. 
Software; the modification for that is rather trivial, though it's not 
likely to be needed.
    The output file will be a list of record numbers (an index to the 
data file in sorted order).  The index itself can be read as either a 
sequential file or a random file with a record length of 12.  To save 
disk space and increase sort speed, ACSORT will not output a whole 
sorted file; if you need such output, see the sample programs at the end 
of this documentation.  The sample programs also show how to use the 
index to read the data file in sorted order.
    ACSORT will not sort sequential data files, such as those written 
using a word processor; it is only intended for use with true random 
files.  For that reason, it will NOT sort dBase data files.  dBase files 
are not random files: the first part of the file is a variable-length 
header and is not part of the data nor is it the same length as any of 
the data records.  ACSORT could be modified to read dBase files, at the 
sacrifice of a fair amount of speed and efficiency (which is part of the 
reason ACSORT is faster than dBase sorts, and Quick BASIC data base 
programs are much faster than dBase applications).
    ACSORT works correctly under PC DOS 2.0 and higher, and on hard 
disks, floppy disks, and RAM (or memory) disks.  ACSORT is not copy 
protected in any way, and may be backed up or transferred freely to 
other media.  ACSORT is the copyrighted property of TNT Software Inc., 
and may not be sold without written permission of TNT Software.
    You may sort data of any type commonly used in any Microsoft 
language.  Valid types include ASCII data (numbers or letters, in 
alphabetic order), byte, packed integer or long integer, packed dates 
(MDY format with each stored as a single character), dates in a variety 
of other formats, packed single precision floating-point, packed double 
precision, and any user-defined data type adhering to either the 
Microsoft or IEEE floating point format.  Character or byte data may 
contain control characters (of course, so may any of the other types).  
Many other sorts have difficulty with other than ASCII data.
    ACSORT is compatible with THE CREATOR, REPORTOR, PROGEN, REPGEN, and 
other software sold or distributed by TNT SOFTWARE, INC.  For that 
reason, any record composed entirely of ASCII character 250 in every 
byte of every field will be skipped (counted as a deleted record).

                                    1


    ACSORT is totally compatible with Microsoft BASIC random-access 
files. Other sorts may have some difficulties with Microsoft random 
files, even appending unwanted control characters or additional records 
or pointers to the file output.  ACSORT will not.
    You may sort unpacked numbers in numeric (rather than alphabetic) 
order by choosing to sort that field as NUMERIC, rather than CHARACTER.  
ACSORT will convert any such numbers into a packed double-precision 
format internally; the sort will be accurate to 16 significant digits.
    CSORT will:
    (1) Read the command line for the name of the parameter file.
    (2) Support subdirectories and path names for all file names.
    (3) Buffer records internally for added speed.
    (4) Allow records to be selected for or excluded from the sort.

    ACSORT will only output an INDEX to the file in sorted order.  This 
index will consist of a list of record numbers.  By reading the sorted 
file in the order specified by the index, you will be reading the file 
in the sorted order you specified.
    For your added convenience, the sort index file can be read as a 
random file of record length 12.  This will allow you to use the index 
file to do binary searches of the data, if you wish.  To help you 
further, ACSORT will always tell you exactly how many records were 
sorted when the sort has been completed.

                        SETTING UP THE PARAMETER FILE

    ACSORT can read all the requested inputs from the parameter file.  
You may also enter all the inputs (except select and exclude criteria) 
manually, at the keyboard.  For illustration purposes, we'll call the 
parameter file CSORT.DAT, which is assumed to be on the current drive 
and in the current directory.  You may name the parameter file anything 
you like and put it on any drive and in any directory you like.
    All inputs should be on separate lines.  Multiple inputs on the same 
line will usually cause errors of various types.
    If an error is encountered while reading the CSORT.DAT file, ACSORT 
will print a short descriptive error message: 'BAD INPUT FILE', 'BAD 
OUTPUT FILE', etc.  Those error messages should enable you to find and 
fix the error fairly easily.
    When running the sort, the only things the user will generally see 
on the screen are the sort copyright message, whatever messages are 
appropriate ('sorting through record #', 'merging', and the sort 
termination message.
    The parameter file should contain the following items, on separate 
lines (without line numbers) in the order specified.  You can create 
this file with a word processor or text editor, if it will produce a 
plain ASCII file, or use the same procedure as you would use to create a 
BATCH FILE from DOS.
    1. Name of the file to sort;
    2. Record length for sort file;
    3. Name of index file;
    4. Starting position for key (if zero go to step 9);
    5. Length of key;
    6. Data type for key (C=character or packed half-precision, 
       N=numeric, I=packed integer, O=old packed field type, F=IEEE-type 
       floating-point, L=Long integer, D=3-byte packed date, X=Date as 
       character string with year at end, Y=IEEE Floating-point single- 
       precision number containing date, Z=IEEE Floating-point double- 
       precision number containing date, y=Microsoft format single- 
       precision number containing date, z=Microsoft format double- 
       precision number containing date.);

                                    2


    7. Ascending or descending order (A/D);
    8. Go back and repeat steps 4-7 until starting position is 0;
    9. Work drive (A-Z is allowed, but you should NOT specify a 
       subdirectory);
   10. Selection or exclusion criteria.
    All date fields may be in either MMDDYY or MMDDYYYY format except 
packed date (D).  Packed date fields are assumed to have the month 
stored as one byte, the day as one byte, and the year as one byte, in 
that order.  Dates stored as character strings may use any delimiter or 
no delimiter at all between day, month, and year--so long as the 
delimiter is the same in each record.  However, the day field should 
always be the same size for each record.  ACSORT will handle dates like 
12/13/46 and 4/15/87 by padding the second date with a 0 on the left.  
It will not sort dates like 7/4/89 in correct order because the day is 
only one byte long (and determining how to fix dates like 12-7-88 and 
4/14/77 would take too long to be worthwhile).
    The beginning position of each key must be carefully specified.  The 
easiest way to understand how this should be done is with an example.  
Suppose you want to sort a data file whose record length is 85; the 
fields in each record are of lengths 15, 20, 5, 20, 10, 10, and 5.  
Suppose you want to sort each record by field 4, then 3, then 6, then 1.
    In that case, the starting position of the first key (field 4) would 
be 15+20+5+20=60, plus 1 (skip the first 60 characters, start the sort 
at the 61st character).  The key length would be 20, if you want to sort 
by all of the fourth field.  Likewise, the second key begins at 
15+20+1=36, the third key begins at 15+20+5+20+10+1=71, and the last key 
begins at position 1.
    You need not use all of a key field as a sort key.  If your key 
field is very long (a name field, with 80 characters allowed, for 
example), you may wish to use only the first few characters of the field 
as the key.  Just enter whatever length you decide to use.
    You may use any drive for your work files.  If you're sorting a 
small-enough data file (under 16000 records) and you have a small enough 
total key length (depends on memory available), you may not actually 
need any work file.  There will always be two work files: $$$.TMP and 
$$$$.TMP.  The second one is a dummy file used for internal buffering 
and will not be used to actually write any data to disk.
    In any event, the work file space necessary will not exceed your 
total key lengths plus four bytes, rounded to the nearest higher power 
of two (if not a power of two already), times the number of records in 
the data file.  For example, if the total of key lengths is 50 bytes and 
you are sorting 2000 records, the space required for your work file (if 
needed) will be 64*2000=128000 bytes.  If the total length of all keys 
is 28 bytes, the space required for work files (if any are needed) will 
be 32*2000=64000 bytes.
    When ACSORT begins to run, it will calculate how much memory is 
available for the sort and display that number at the top of the screen. 
Normally, on a 640K MSDOS machine there will be 300K to 400K bytes 
available.  ACSORT uses much of the remaining memory for internal file 
buffers and its own program code.  ACSORT will not hold more than 16,383 
records internally, regardless of key length and memory available.  So, 
it's possible that ACSORT might use as little as 128K for actual sort 
space.
    The output index will always take exactly 12 bytes per record 
sorted.  The output index file will always be written before any work 
files are deleted.
    Be sure you have enough space available on the drives you designate 
for your work and index files.  It is disheartening to run the sort 
almost to completion and get a 'disk full' error message.


                                    3


    It is interesting to note, in this connection, that ACSORT uses 
generally less work file space than other sorts.  You will probably find 
that ACSORT will be capable of sorting data files other sorts cannot 
touch.

                        RECORD SELECTION AND EXCLUSION

    You may select or exclude records by including command lines of the 
form:

S,start,length,kind,relationship,value
X,start,length,kind,relationship,value

    Lines beginning with the letter S are used to select records.  Lines 
beginning with the letter X are used to exclude records from the sort.  
You may enter selection and exclusion criteria in any order, but 
exclusions will always be processed first.
    The "start" parameter must be a number and should be the beginning 
position of the part of the record used for selection or exclusion.  The 
"length" parameter should be the number of characters to use.  The 
"kind" parameter must be one of the letters I, O, N, C, F, L, or D.  The 
letter I will be used to indicate a packed integer field; O will 
indicate an old-style floating-point packed number (not IEEE format); N 
indicates an unpacked numeric field; C is a character field; F is an 
IEEE-format packed floating-point field; L is a packed long integer 
field (4 bytes); and D is a packed date (3 characters, MDY format).
    The relationship must be one of "<", ">", "<=", ">=", "<>", or "=".  
The value should be the character string or numeric value against which 
the field should be compared.
    Here are some examples of selection and exclusion:

S,3,4,F,<,34.56
Select only records for which the field starting at position 3 and going 
for four bytes, when treated as an IEEE floating-point number, is less 
than 34.56.

X,57,10,C,>=,"FLOSTERMAN"
Exclude records for which the field starting at position 57 and going 
for ten bytes is greater than or equal to "FLOSTERMAN".

                           HOW TO RUN ACSORT

    Simple: while at the DOS prompt (A>, B>, etc.) just type in the name 
of the ACSORT file you have decided to use, followed by the name of the 
parameter file.  Use any drive or subdirectory specifiers necessary.
    For example:
ACSORT B:CSORT.PAR
or
C:\DOS\ACSORT B:\DATAFILE\CSORT.PAR

    Below are two sample parameter files you can use as templates for 
your own sorting needs.  For each file, I have included an explanation 
of the actual command lines appearing to the left.

                         SAMPLE PARAMETER FILES
{Lines in the file}     {Explanation}
CUSTLIST.DAT            Name of file to sort
138                     Record length
CUSTLIST.INX            Name of output index file
8                       Starting position of first key

                                    4


25                      Length of key
C                       Data type (capitalization counts!)
A                       Ascending order
0                       Starting position of next key (0 for none)
         <-------- note: if this line is left blank, the work drive will
                   default to the current drive.  If this line does not 
                   appear, ACSORT will ask the operator at run-time for 
                   the letter of the work file drive.

CUSTLIST.DAT            Name of file to sort
138                     Record length
CUSTLIST.INX            Name of index file
8                       Starting position of first key
25                      Length of first key
C                       Data type of first key
A                       Ascending order
4                       Starting position of second key
4                       Length of second key
O                       Data type of second key
D                       Descending order
0                       Starting position of third key (0 to stop)
C                       Drive for work files is C
X,4,4,O,<=,100          Exclude if field starting at 4 and going for 4 
                        bytes, considered as old-style floating-point 
                        number, is less than or equal to 100.



                            SORT PERFORMANCE

    The following speeds have been observed, running ACSORT on a 40 
Megabyte Plus Development HardCard on a Tandy 4000 (80386, 16 MHz).  
Times on a floppy disk will be longer and will depend on the drive type, 
the media quality, and a number of other factors.  Times on better hard 
disks will be less.

                   SORTING 24765 RECORDS OF 138 BYTES EACH

         Key Length  Type   Order        Time (sec)  Records/minute
             12      Alpha  Ascending       225.0         6603
             12      Alpha  Descending      224.4         6622
             25      Alpha  Ascending       228.7         6497
             25      Alpha  Descending      230.0         6460
             25      Alpha  Ascending        52.1        28511*
              4      Float  Ascending       226.1         6573
              4      Float  Descending      222.2         6687

*565 records were extracted via "exclude" from 24,765 and actually 
indexed.

                    SORTING 2087 RECORDS OF 131 BYTES EACH

         Key Length  Type   Order        Time (sec)  Records/minute
             25      Alpha  Ascending        11.1        11287
             25      Alpha  Descending       11.2        11181






                                    5


        SAMPLE GWBASIC PROGRAM TO READ A DATA FILE VIA AN INDEX
                     AND CREATE A WHOLE FILE OUTPUT

10 LINE INPUT"File to read:";F$
20 LINE INPUT"File to write:";W$
30 LINE INPUT"Index file name:";I$
40 INPUT"Record length:";R:'If record length >255 you will need to alter
50 OPEN"R",1,F$,R:'   lines 60 and 80 for a more complicated
60 FIELD #1,R AS A$:'  field statement. use as many variables as needed
70 OPEN"R",2,W$,R:'   to use up all the characters in each record.
80 FIELD #2,R AS B$:'  For example:
90 OPEN"I",3,I$:'    FIELD #1, 255 AS A1$,255 AS A2$,255 AS A3$
91 '           Will handle a record of 765 bytes. you will
92 '           need to field #2 similarly, and do the LSETs in line
93 '           110 as well. The LSETs can be done like this:
94 '           LSET B1$=A1$:LSET B2$=A2$:LSET B3$=A3$
95 '           Further note: if your record length exceeds 128, you
96 '           should be sure to enter basic with the /s: switch
97 '           set appropriately.  See your basic manual.
100 PRINT"Transferring":ON ERROR GOTO 500
110 INPUT #3,A:GET 1,A:LSET B$=A$:COUNT=COUNT+1:PUT 2,COUNT
120 GOTO 110
500 PRINT"Done.";COUNT;"Records transferred."
510 CLOSE:END

       SAMPLE QUICKBASIC PROGRAM TO READ A DATA FILE VIA AN INDEX
                     AND CREATE A WHOLE FILE OUTPUT

 DEFLNG A-Z
 LINE INPUT"File to read:";f$
 LINE INPUT"File to write:";w$
 LINE INPUT"Index file name:";i$
 INPUT"Record length:";r
 OPEN"R",1,f$,r: FIELD #1,r as a$
 OPEN"R",2,w$,r: FIELD #2,r as b$
 OPEN"I",3,i$
 PRINT"Transferring"
 while not eof(3)
    INPUT #3,a:GET 1,a:LSET b$=a$:count=count+1:PUT 2,count
 wend
 PRINT"Done.";count;"Records transferred."
 CLOSE:END

                     THANKS FOR PURCHASING ACSORT!
For a catalog of our other inexpensive, high-quality software for the 
IBM PC or compatibles, write to:

                         T.N.T. SOFTWARE, INC.
                         34069 HAINESVILLE ROAD
                          ROUND LAKE, IL 60073
                             (312) 223-0832

IBM PC is a registered trademark of The IBM Corporation; THE CREATOR, 
REPORTOR, PROGEN, REPGEN, and ACSORT are trademarks of T.N.T. SOFTWARE, 
INC.






                                    6

```
{% endraw %}

## EDFIX2.DOC

{% raw %}
```

      
                              DOCUMENTATION FOR EDFIX2
      
                                    INTRODUCTION
          EDFIX2 is a program that will read, edit, write, and transfer 
      random-access files.  The file to be edited may be as long as two 
      billion bytes, and each record may be as much as 2048 bytes long.
          EDFIX2 will work on any file, even if the file is not truly a 
      random-access file.  In a true random-access file, each record will have 
      precisely the same length.  dBase files are not random-access files; 
      each dBase data file begins with a header that is generally not the same 
      length as any of the data records.  Still, EDFIX2 can manipulate dBase 
      data files--except that EDFIX2 records will probably not match up with 
      dBase records.  (The only thing that belongs in data files is data, and 
      indexes, names, and all that other stuff belong elsewhere!)
          You may also use EDFIX2 on spreadsheet files and files created by 
      various other software packages.  Those files, too, are not random- 
      access files (and don't pretend to be).
          EDFIX2 can severely damage a file if you don't know what you're 
      doing or make a mistake.  Make sure you always have backups of the file 
      you're altering.
          If you ask EDFIX2 to edit a file that doesn't exist (or has a length 
      of zero), EDFIX2 will tell you so.  The file will be deleted if it had a 
      length of zero.  You may not open and edit a file of length zero.
      
                                   SCREEN DISPLAY
          If possible, EDFIX2 will display exactly what's in the file, ASCII 
      text or not.  If the file data is stored (all or in part) in binary 
      format, the screen display may be confusing; if EDFIX2 were to display 
      some of those characters, the screen might clear, or lines might 
      overwrite other lines.  So, some "dangerous" characters have been 
      translated into another character.  Carriage returns are translated into 
      a left-pointing arrow, and line feeds into a downward-pointing arrow.  
      Other "dangerous" control codes (7, 11, 28-31) are translated into the 
      graphics character 128 higher.
          To see the ASCII or hexadecimal code for the character the cursor is 
      on, press the ESC key.  At the bottom right of the screen, EDFIX2 will 
      display the decimal and hexadecimal code for that character.
      
                                   RECORD LENGTH
          If you don't know the record length of each record in the file, 
      EDFIX2 can calculate some possibilities, based on the file length.  If 
      there aren't very many possibilities (less than 5), EDFIX2 will suggest 
      other possible record lengths that are nearly right--the file length is 
      off by only one byte, which might be a CTRL-Z end-of-file marker.  If 
      your data file ends with more than one sequential file EOF character, 
      you may have to try some guesses of your own.
          If your guess doesn't match the actual file length, EDFIX2 will tell 
      you how many bytes are left over, and will ask you if you want to try 
      another length.  Any leftover bytes will not be displayed by EDFIX2; you 
      may see and alter only complete records, because allowing you to do 
      otherwise might change the length of the data file.  Most programs will 
      not take kindly to any unauthorized alterations in the file length, so 
      that's why EDFIX2 won't allow you to change any final partial record.
          If each of your records are followed by a carriage return or 
      carriage return and line feed, you must treat those characters as a part 
      of your record.  A 272-byte record followed by a carriage return is 
      really a 273-byte record.  A 272-byte record followed by a carriage 
      return and line feed is really a 274-byte record.


                                             1

      
          If you guess at a record length and see that you're wrong once the 
      file has been opened, you may press CTRL-B and try another guess.
      
                                    EDITING DATA
          Once you've entered the name of the data file and the associated 
      record length, EDFIX2 will read the data file and display the first 20 
      records.  Records past the end of the data file will be indicated by the 
      legend "PAST EOF".  You won't be able to move to or edit those records.
          The bottom portion of the screen will also display information about 
      the current file.  You will be shown the file name, the number of 
      records in the file, the current cursor position, and the current record 
      number.  Depending on the situation, you may also be shown the current 
      mode (insert or overtype) or an error message about the length of a 
      record.  That part of the screen is also used for you to input the name 
      of the transfer file and to display the status of the transfer.
          You may move to or within a record or edit an existing record by 
      using the following commands:
      
      COMMAND       RESULT
      Up Arrow      Moves up one line to the previous record, if any.
      CTRL-E        Same as Up Arrow.
      Down Arrow    Moves down one line to the next record, if any.
      CTRL-X        Same as Down Arrow.
      Right Arrow   Moves one character to the right, if possible.
      CTRL-D        Same as Right Arrow.
      Left Arrow    Moves one character to the left, if possible.
      CTRL-S        Same as Left Arrow.
      Home          Moves to the start of the current record.
      End           Moves to the end of the current record.
      PG UP         Moves up 20 records (towards the file beginning).
      CTRL-R        Same as PG UP.
      PG DN         Moves down 20 records, if possible.
      CTRL-C        Same as PG DN.
      CTRL-PG UP    Moves to the beginning of the file.
      CTRL-PG DN    Moves to the end of the file.
      CTRL-J        Moves to whatever record number you like.
      TAB           Moves to the next tab position (tabs set every 8).
      CTRL-F        Same as TAB.
      Backtab       Moves to the previous tab position.
      CTRL-A        Same as Backtab.
      DEL           Deletes the character at the current cursor position.
      CTRL-G        Same as DEL.
      Backspace     Deletes the character to the left and moves left.
      INS           Changes mode from insert to delete and vice-versa.
      CTRL-V        Same as INS.
      CTRL-Y        Mark the current record as deleted (all ASCII 250s).
      CTRL-B        Exit the file.  Don't save changes on the current screen.  
                    Return to the 'record length' selection and make another 
                    guess.
      CTRL-P        Accept the next keystroke as a character, even if it is a 
                    control code.  CTRL-P followed by ENTER will insert or 
                    overtype a carriage return (ASCII 13) into the file.
      ESC           Display the ASCII and hexadecimal value of the character 
                    at the current cursor position.
      
          EDFIX2 starts in overtype mode: any character you type will replace 
      the current character at the current cursor position.  When you press 
      CTRL-V or the INS key, EDFIX2 will change to insert mode and any 


                                             2

      
      characters you type will be inserted within the line, moving existing 
      characters to the right.  Pressing the INS key or CTRL-V again will 
      change the mode back to overtype.
          If you alter a record so the length doesn't match the record length 
      you specified earlier, EDFIX2 will refuse to save the record until you 
      add or delete enough characters to make the record the correct length.  
      This is done because EDFIX2 cannot determine how to pad the record (or 
      what data to throw away).
          When you move up or down through the data file, EDFIX2 will check 
      any records that move off the current screen.  If they have been altered 
      and if they are the correct length, EDFIX2 will write them to the disk.  
      If they have been altered and they are not the correct length, EDFIX2 
      will notify you of the problem, position the cursor on the offending 
      record, and tell you what the record's length is.
          If you move far enough to the left or right, EDFIX2 will scroll 
      horizontally in increments of 40 characters at a time.
      
                    INSERTING CONTROL CODES AND OTHER CHARACTERS
          Pressing CTRL-P will tell EDFIX2 to accept the next character typed 
      and (depending on whether you're in insert or overtype mode) insert that 
      character into the current record or replace the current character with 
      the one you type in.  If you're entering normal ASCII data, you won't 
      need the CTRL-P command.
          The CTRL-P command will thus allow you to insert any control code or 
      graphics character into the data file.
          There's an easy way to enter any particular code.  Rather than try 
      to remember that ASCII 18 is control-R, you may hold down the ALT key 
      and type the digits 018 on the numeric keypad.  Then release the ALT 
      key, and EDFIX2 will act as though you had entered ctrl-R.  Just 
      remember to enter CTRL-P first, and ASCII 18 will be put into the 
      current record.
      
                          TRANSFERRING AND SAVING RECORDS
          You may save your changes and exit to MSDOS by pressing CTRL-KD.  
      You may save the changes on any screen by moving off that screen--for 
      example, by pressing PG UP, PG DN, CTRL-PG UP, or CTRL-PG DN.  All 
      changes on the current screen will also be saved when you press CTRL-KT 
      (transfer records).
          If you make a severe mistake while editing a record and you want to 
      avoid saving the error, press CTRL-KQ.  Any changes on the current 
      screen will not be saved, and EDFIX2 will return to MSDOS.
          If you elect to transfer records, EDFIX2 will ask you for the name 
      of the file to which you want to transfer the data.  If that file 
      already exists, EDFIX2 will ask you if you want to overwrite it.  If 
      not, you will return to edit mode.  If yes, the previous data file will 
      be completely destroyed and the new data will replace it.  For that 
      reason, you must not transfer records into the same file you are 
      currently editing.  EDFIX2 will stop you from doing this: MSDOS will not 
      permit you to erase a currently open file.
          While transferring, EDFIX2 will show you how many records are in the 
      original data file and how many have been read.  Records marked as 
      deleted will not be transferred to the new file.  EDFIX2 marks records 
      as deleted by replacing the full contents of the record with copies of 
      ASCII character 250.  None of the original contents of the record will 
      remain.  This is not the method used by dBase, but it is the method used 
      by The CREATOR (tm, TNT Software).  Deleted records in dBase are marked 
      by the presence of an asterisk in the first position of the record.
      


                                             3

      
                               ADDITIONAL INFORMATION
          EDFIX2 is shareware.  You may distribute copies of EDFIX2 so long as 
      you don't ask people to pay you for their copy.  You may not sell EDFIX2 
      without the written permission of TNT Software.  EDFIX2 is copyrighted 
      and is the property of TNT Software.  It is NOT in the public domain.
          If you like EDFIX2 and want to encourage the development (or 
      enhancement) of more such software, please register your copy.  
      Registered users will be sent a copy of the latest version, complete 
      with full source code (Microsoft Quick BASIC).  The registration fee for 
      EDFIX2 is $25.  Only registered users are entitled to support from 
      T.N.T. Software.
          Whether you're a registered user or not, we welcome your comments 
      and suggestions for making EDFIX2 better.
          If you're interested in other products of TNT Software, write or 
      call:
      
                                 TNT SOFTWARE INC.
                               ATTN: Bruce W. Tonkin
                               34069 Hainesville Road
                                Round Lake IL 60073
                                   (312) 223-8595







































                                             4

```
{% endraw %}

## FILE1959.TXT

{% raw %}
```
Disk No: 1959                                                           
Disk Title: EDFix2/QB4CREF/Acsort                                       
PC-SIG Version: S1.1                                                      
                                                                        
Program Title: EDFIX2                                                   
Author Version: 07/23                                                   
Author Registration: $25.00 each.                                       
Special Requirements: None.                                             

Program Title: QB4CREF                                                  
Author Version: 07/23                                                   
Author Registration: $25.00 each                                        
Special Requirements: None.                                             
                                                                        
Program Title: ACSORT                                                   
Author Version: 07/23                                                   
Author Registration: $25.00 each.                                       
Special Requirements: None.                                             

ACSORT sorts data files which have fixed-length records and fixed-length
fields.  The output file will be a list of record numbers (an index to  
the data file in sorted order).  The index itself can be read as either 
a sequential file or a random file with a record length of 12.  The data
file being sorted may be of any reasonable size.                        
                                                                        
You may sort data of any type commonly used in any Microsoft language.  
Other sorts may have some difficulties with Microsoft random files, even
appending unwanted control characters or additional records or pointers 
to the file output.  ACSORT will not.  ACSORT will not sort sequential  
data files, it is only intended for use with true random files.  For    
that reason, it will NOT sort dBase data files.                         
                                                                        
EDFIX2 is a program that will read, edit, write, and transfer           
random-access files up to two billion bytes, with each record being as  
much as 2048 bytes long.  EDFIX2 will work on any file, even if the file
is not truly a random-access file.  EDFIX2 can manipulate dBase data    
files--except that EDFIX2 records will probably not match up with dBase 
records.  You may also use EDFIX2 on spreadsheet files and files created
by various other software packages.                                     
                                                                        
QB4CREF is a cross-reference program for Quick BASIC programs.  It will 
cross-reference even interpreted BASIC (GWBASIC) programs               
                                                                        
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
║              <<<<  Disk #1959  EDFIX2/ QB4CREF/ ASCORT  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program EDFIX2, type: EDFIX2 (press enter)                     ║
║                                                                         ║
║ To print documentation, type: COPY EDFIX2.DOC PRN                       ║
║                                                                         ║
║ To start program QB4CREF, type: QB4CREF (press enter)                   ║
║                                                                         ║
║ To print documentation, type: COPY QB4CREF.DOC PRN                      ║
║                                                                         ║
║ To start program ASCORT, type: ASCORT (press enter)                     ║
║                                                                         ║
║ To print documentation, type: COPY ASCORT.DOC PRN                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## QB4CREF.DOC

{% raw %}
```

    
                             DOCUMENTATION FOR QB4CREF
    
                                   INTRODUCTION
        QB4CREF is a cross-reference program for Quick BASIC programs.  It will 
    cross-reference even interpreted BASIC (GWBASIC) programs, but the 
    reference information will not be as useful as for Quick BASIC programs.
        QB4CREF is copyrighted (c), 1989, by T.N.T. Software Inc.  It was 
    written by Bruce W. Tonkin.  It is a shareware program: that means you may 
    try it before you buy it.  If you try it and decide you like it and wish to 
    continue using it, you should register your copy by sending $25 to T.N.T. 
    Software Inc. at 34069 Hainesville Road, Round Lake IL 60073.  Registered 
    users are entitled to support and source code, and will be notified of any 
    updates.
        You may freely distribute QB4CREF to your friends and you may post it 
    on bulletin boards and the like.  You may not sell QB4CREF without the 
    written permission of T.N.T. Software Inc.
    
                                  RUNNING QB4CREF
        QB4CREF is very easy to run.  If you don't remember how to use it, just 
    type in QB4CREF at the MSDOS command line and the program itself will tell 
    you what to do.
        The normal syntax is:
    QB4CREF INFILE OUTFILE
        Where INFILE is the name of the input file, and OUTFILE is the name of 
    the desired output file.  INFILE should be a BASIC program saved as a text 
    file, and OUTFILE may be a disk file or a device name (such as LPT1, PRN, 
    or COM1).  If you don't give a file type extension for INFILE, QB4CREF will 
    assume the file name ends in .BAS.  There is no default extension for the 
    output file.  If you don't give an output file name, the cross-reference 
    information will be displayed on the screen.
        QB4CREF will not check to see if the output file already exists.  If it 
    does, it will be overwritten.  If you give the same name for the input and 
    output files, QB4CREF will crash--stop running, give an error message, and 
    return to MSDOS.
        As QB4CREF runs, it will display information for you on the screen.  
    The information will be much the same as the information written to the 
    output file.
    
                                      LIMITS
        QB4CREF can handle up to 1,000 variables, 1,000 labels, 1,000 
    subprograms, and 1,000 functions (up to 4,000 items in total).  The 
    variable names may be of any length, but for the others only the first 32 
    characters will be significant.  That's unlikely to cause any problem; 
    names longer than 32 characters rarely happen, and in nearly every case the 
    name differs from another name by then.
        QB4CREF will recognize every keyword present in Quick BASIC 4.5.  It 
    will be easy to add more keywords as future versions of Quick BASIC are 
    released.
        All references for the various items will be by the relative line 
    number in the source code.  The line numbers (if any) present in the 
    original source code will be treated as the labels they are.  'Include 
    files' will not be included in the cross-reference.  To do so would make 
    line number referencing rather difficult.
    
                         APPEARANCE OF THE CROSS-REFERENCE
        Rather than attempt to describe what a cross-reference looks like, I 
    will show you what the cross-reference for QB4CREF looks like:
    


                                          1

    
    Cross reference for qb4cref.bas as of 14:28:50 on 07-23-1989
     415 lines, and 14762 bytes.
    
     1 subprograms defined:
    Name                             Line
    wipe                             405
    
     1 labels used and referenced:
    premature
    
     45 variables, subprograms, and labels used:
    a           f$          islegal$    maxlen      subcount    wipe
    a$          flag        j           minlen      subs(       x
    a$(         fmt$        k           offset      t!          x$
    b           fsize&      keywords    outlin      top         z
    b$          funcount    labelcount  poscount    v$(         z$
    c$          funs(       labels(     premature   varcount
    columns     i           lastrow     q$          what
    conprint    isdigit$    maxlabel    sp          where
    
    Variable/label/function/subprogram reference by source line:
    a..........   2  64  65  78  79  80  82  83  87  88  89  90  91  93  94  95
                 99 100 101 102 106 107 108 109 116 117 118 119 125 127 128 129
                140 142 143 147 148 149 160 162 163 169 170 171 182 184 185 186
                197 203 204 205 206 207 209 210 212 237 238 239 240 251 253 254
                257 260 380 381 408 410 411 412
    a$.........  74  76  77  78  80  81  82  83  85  87  88  90  93  95  96  97
                 99 101 102 104 105 114 115 124 125 126 127 128 146 147 148 166
                169 171 182 184 186 197 199 203 205 206 207 208 209 210 212 216
                218 221 226 230 232 233 246 248 249 250 255 261 262 265 266 268
                362 379 380 406 408 411 412
    a$(........   5  49  50  52 200 203 206 207 209 210 212
    b..........  80  81  82
    b$.........  90  91 128 130 131 132 140 141 142 143 148 150 151 152 160 161
                162 163 171 172 173 174 186 187 188 189 222 223 224 225 226 228
                248 250 377 380
    c$.........  65  66 243 299
    columns.... 334 335 337 340 341 349 350 352 355 356
    conprint... 243 273 275 302 310 312 315 321 323 326 331 341 344 346 347 356
                359 361 363 365 375 385 389 393 397
    f$.........  53  54  64  65  67  68 300 303
    flag....... 132 134 136 152 154 156 174 176 178 189 191 193 254 255 256 257
                260 261 262 263 264 265 280 282 287 289 294 296 376 383 390
    fmt$....... 370 371 388 389
    fsize&.....  68 301 304
    funcount... 120 121 122 291 318 320 321 324
    funs(......  13 121 122 294 325 326
    i..........  49  50  52 130 131 132 140 150 151 152 160 172 173 174 187 188
                189 202 203 206 207 209 210 212 215 264 279 280 281 286 287 288
                293 294 295 313 314 315 316 324 325 326 327 336 338 345 351 353
                360 366 367 368 372 374 375 377 399
    isdigit$...  14  15
    islegal$...  15  88  91 131 151 173 188 205 206
    j.......... 133 134 135 153 154 155 175 176 177 190 191 192 337 338 340 341
                343 352 353 355 356 358 378 388 389 396
    k.......... 338 339 340 341 353 354 355 356
    keywords...  52 200 202
    labelcount.  72 132 133 134 137 138 152 153 154 157 158 174 175 176 179 180


                                          2

    
                189 190 191 194 195 276 277 330 332 335 339
    labels(....   7 132 134 138 152 154 158 174 176 180 189 191 195 280 340 341
    lastrow.... 335 336 338 350 351 353
    maxlabel... 138 158 180 195 334
    maxlen..... 268 349 371 391
    minlen..... 200 208
    offset..... 367 369 371 374 375 384 385
    outlin..... 112 122 233 301 304 370 378
    poscount... 376 382 390 391 392 397
    premature..  77  96 124 126 146 166 216 231
    q$.........  71 218
    sp.........   8  12  13
    subcount... 110 111 112 284 307 309 310 313
    subs(......  12 111 112 287 314 315
    t!.........   3 401
    top........ 277 278 279 282 284 285 286 289 291 292 293 296
    v$(........   6 255 261 262 264 265 355 356 367 374 375 377
    varcount... 244 251 261 264 267 347 348 350 354 366 372
    what.......   9 111 121 287 294 314 315 325 326
    where......  10 112 122 314 315 325 326
    wipe.......   1  86 167 168 217 405
    x.......... 130 131 150 151 172 173 187 188 252 253 254 256 260 409 411
    x$.........  75 105 106 107 108 109 111 115 116 117 118 119 121 201 247 373
    z..........   2
    z$.........   1 405 408 409 412
    
        This particular program used no functions.  It it had, the functions 
    would also have been referenced just after the sub-programs.
        The line numbers referenced are lined up to match the longest variable 
    name, label, subprogram, or function name.  The line numbers themselves are 
    formatted to allow one space between each line number for the largest line 
    number appearing in the program.  Those two rules assure that all line 
    numbers and names will line up when printed.  The printed lines will always 
    fit on a standard 80-column page.
    
                                     THE END?
        This isn't the end if you don't want it to be.  QB4CREF can get better, 
    if you register and tell me what more you'd like to see.  I do listen to 
    users; if I have none, I've just wasted my time.  If I have some, and I 
    don't listen, soon enough I won't have any.
        It's better if you write me.  I'm at the office fairly often, but I'm 
    usually working hard and writing software.  It's less of an interruption to 
    read the mail.  Still, if it's an emergency you can call.  If I'm there, 
    I'm always willing to talk to registered users.
        I've written a lot of other programs, too.  Even if you're not a 
    registered user, I'd be happy to send you a free catalog.  Write or call:
    
                               T.N.T. Software, Inc.
                               Attn: Bruce W. Tonkin
                               34069 Hainesville Rd.
                                Round Lake IL 60073
                                  (312) 223-8595








                                          3

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1959

     Volume in drive A has no label
     Directory of A:\

    ACSORT   DOC     19333   7-23-89   3:32p
    ACSORT   EXE     96021   5-21-89   8:48p
    EDFIX2   DOC     13049   7-23-89   2:26p
    EDFIX2   EXE     50877   7-23-89   2:07p
    FILE1959 TXT      3413   1-25-90   6:34p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1156   1-01-80   6:43a
    QB4CREF  DOC      9761   7-23-89   3:26p
    QB4CREF  EXE     52917   5-27-89   9:03p
            9 file(s)     246565 bytes
                           71680 bytes free
