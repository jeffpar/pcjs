---
layout: page
title: "PC-SIG Diskette Library (Disk #2152)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2152/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2152"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FILEBASE"

    If your data needs constantly drag you between your database and mail
    list output, FILEBASE is the database for you. This powerful system
    keeps data in mail list format. You'll never have to generate mail
    list output again -- it's already there!
    
    For technicians, FILEBASE is a variable-length fields data manager,
    storing records in ASCII comma delimited format. This is the type of
    file created by many versions of the BASIC language, sometimes referred
    to as "MailMerge" format.
    
    The files used by FILEBASE to maintain your database records can be
    used directly by the letter-merge functions of most word processors
    including: WordStar/Mailmerge, DisplayWrite, Multimate, Word, XyWrite,
    PC-Write, and others.
    
    FILEBASE's strong database capabilities work with any MailMerge file. --
    even if it was created with some other program. Sort, merge,
    split, and modify. Apply functions like restructuring, indexing,
    appending new records, adding new fields, joining them, performing
    calculations, and generating reports and labels. Comma delimited
    format records can be converted to block format and vice versa.
    
    Special sort features and full search capability is also supported.
    Look for a record by number or use logical tests to find numbers. Wild
    card searches are supported.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FBMANUAL.DOC

{% raw %}
```
                   A BRIEF INTRODUCTION TO FILEBASE 


DESCRIPTION

FILEBASE files consist of "comma delimited field records".  A record 
is a group of related items of information (fields)  - one person's 
'name,street,city,phone' would be a record with 4 fields.  Each item 
of information (name) is automatically separated from the next 
(street) by a special comma separator.  You will not see the commas or 
be concerned about them.  The importance of this method is that items 
of information can vary in length within each field and from record to 
record.  Most other data managers separate fields from each other by 
setting aside a certain number of character positions for each field.

These files can be used directly with most letter-merge software such 
as MailMerge, Multimate, Word Perfect, Word, and others. Even pre-
existing comma delimited field record files can be processed directly 
no matter how they were created. For example, dBase-II can make a copy 
of its fixed length field files in comma delimited form.  Pre-existing 
block format field records can be converted to comma delimited.


FILE COMPATIBILITY

There is high degree of compatibility with programs written in BASIC.  
This means that if you program in BASIC, the files that were created 
with FILEBASE can be used by your programs.  The data manager will 
perform all the necessary processing so that you are not burdened with 
writing input, update, sort, select, and other manipulation routines.


APPLICATIONS

FILEBASE is ideal for mailing lists, literature citations, membership 
data, client lists, parts lists, keyword information and a host of 
other applications because it can create and process items of 
information even if they vary considerably in length from record to 
record.  You do not have to worry about how much space to allot for 
every item of information as you do with other data managers. You can 
enter long lines of information (up to 255 characters per field) and 
output such information without it running off the paper or looking 
odd on the screen.  

FILEBASE can be used for mailing lists with great flexibility.  Lists 
with up to 40 items of information in each record can be produced and 
any item can be selected for printing labels or envelopes, or line 
listings including those that may have non-address type information 
such as "identification number", "chapter & year", etc.    FILEBASE 
even sorts on the last name part of a full name field or a five digit 
zip code part of the address line.  There are features that print any 
number of lines in 'label format' to use for bins, boxes etc.


FILEBASE VS. FIXED LENGTH FIELD DATA MANAGERS

There is an important difference between FILEBASE and classical data 
management systems.  Other systems require the user to pre-define a 
formal structure for a file such as number of fields, their type and 
length. Unless the definition has been very well pre-defined, some 
field lengths may prove excessive (wasting disk space) and others too 
small not allowing all data to be entered.

FILEBASE permits field lengths to vary and maintains random access 
capability by means of a fixed total record length which can easily be 
modified at any time without affecting individual fields. A formal 
file structure is not necessary which makes it very easy to set up a 
file.  You need not figure out in advance how long each field has to 
be.  FILEBASE actually helps you to decide on an optimal record length 
after you enter records.
  
When you create a file, records keyed in are variable length until 
converted to fixed length which is required to use one particular 
FILEBASE option.  After you have made a reasonable group of entries 
into the file and decide to convert to fixed lengths,  the program  
will tell you the length of the longest record up to that time.  This 
will help you to decide on a proper fixed record length.

Even if, after converting to fixed length, you come across an 
unusually long entry, you can easily handle it by changing to a longer 
record length.  Once you convert to fixed length, or re-convert to a 
longer length, the program will automatically keep new records the 
same by padding them with blanks on the right side of the record. You 
need not be concerned about the length of data you put into fields.


FEATURES

Files can be sorted, or sort/merged into one or separated into logical 
subsets by various methods.  Records can be located by a host of menu 
driven methods including the familiar logical comparators (EQ, GT, 
etc.), by searching for words or parts of words, or by record number 
methods.  Fields can be dropped, rearranged or new ones added.

Records can be printed individually or in logical groups continuously 
or with pause for paper or label or envelope change. Format it to any 
size label, index card or on whatever you can put into the printer.  
Print line listings or fields under each other (sort of label format).  
Print with or without field prompts, with or without record numbers 
and add keyboarded comments to be printed.  Change the information in 
the fields and print the record at the same time, any number of times, 
in any number of different formats to get what you want at the time.

There is comprehensive error trapping with immediate feedback for 
unacceptable responses to prompts.  Presence or absence of files is 
verified and existing files are prevented from being accidentally 
overwritten.


STARTING FILEBASE

With the FILEBASE disk in the logged-on drive, just type FILEBASE, 
select an option from the menu, and answer the ensuing prompts.

Only those prompts are presented which relate directly to the 
currently selected menu choice.  Their sequence follows a logical 
pattern which is easy to follow and understand.  Most functions of 
FILEBASE can be used without reference to the manual.

However, the manual includes a step-by-step tutorial that illustrates 
each of the prompts in their order of occurrence.  It is intended to 
be used during actual processing of either your files or the practice 
files that are on the FILEBASE disk.  All possible responses are 
outlined together with an explanation of the ramifications of each 
valid choice.  In addition to a discussion of what you can do, there 
is frequently an explanation of how FILEBASE will handle your 
instructions.

The tutorial follows the logic of the program because it was prepared 
using actual portions of the source code.  Whenever the program 
branches to a subroutine, so does the explanation.  In fact, the 
actual source code was word processed to extract the prompts and 
convert them to bold print and to additionally flag them with an 
asterisk. 

FILEBASE is not only menu and prompt driven but it has  comprehensive 
error trapping. For example, invalid characters in user entered file 
names are located at the time that the name is entered.  Existence of 
input files is verified and output file names are checked to guard 
against existing ones from being overwritten.  Input file names are 
checked against output file names and inappropriate entries result in 
immediate feedback.  All replies to prompts are verified for 
acceptability as soon as they are entered.  Repetitive operations use 
a single keystroke (return not required). Lower or upper case can be 
used in reply to most prompts.

If you use an existing file, FILEBASE will find out how many fields 
there are in the records. It is not necessary for you to remember the 
number of fields or their sequence before you start. FILEBASE will 
display as many records as desired with each field numbered so that 
you can decide what fields to use for the various processing options. 
If you decide to merge two files, FILEBASE will tell you if the number 
of fields in the two files are the same.  It will tell you whether the 
file you are processing is comprised of fixed length records or 
variable length ones, how many records there are, and the length of 
the longest record. 


CREATING A NEW FILE

You can create a new file, decide on how many fields (items of 
information) it will have (up to 40), and assign names to be displayed 
as prompts for date entry.   Designate a file name. Blank fields are 
displayed so that you can assign prompts (field names) to be used for 
data entry. During the data entry process, the prompts assist in 
entering information.  See page D-14 under GLOBALS for codes you can 
assign to represent repetitive items of information.

When you are through entering data, prompts can be stored under any 
file name you assign. To differentiate prompt files from data files, 
one can use the name of the data file but have the suffix something 
like .PMT.  Prompts can be recalled for use in appending data to this 
or any other file that has the same fields in the same sequence. 

When you create a file and key in records, they will be variable 
length ones.  Each will be only as long as the characters you keyed 
(plus comma delimiters added by the program). After keying in a group 
of records, FILEBASE will be able to tell you the length of the 
longest record up to that point and allow you to make and informed 
judgement on what length to use when converting to fixed.  You do not 
have to decide on individual field lengths.

The general concept of maintaining files is that once the file has 
been converted to fixed record lengths, it becomes the master file 
with the records kept in what is referred to as "arrival sequence".  
If a sorted report is needed, the file is sorted to an output file to 
be used for the report.  To save disk space, one can output variable 
length records.  The sorted file can be held until new records which 
are added to master file make the sorted file obsolete.

The process of creating a new file is so simple (because a formal 
structure with field lengths and types is not needed), that one can 
easily setup temporary files to later be merged with more permanent 
ones.  For example, when new FILEBASE users are entered into a file, 
it is a new one created weekly to be merged later into the master.

Creating a new file is so easy that it even is worth while to create a 
new file for just one record.  How about the name and address of your 
mortgage company if they do not provide self addressed envelopes.  
Enter the one address (or others if applicable), then use Option 4 to 
print 12 copies of each record on business envelopes.  Give the tab 
position as 48, number of lines to skip as about 10, and insert the 
envelope to the desired depth.  The address will print and eject 
because of the 10 line feeds. You can have a years worth of envelopes 
for each address entered in less than 5 minutes.

The file you create is not cast in concrete so you do not have to plan 
for every eventuality.  Later, if you discover a new field is needed, 
add it with Option 5, fill it in with data with Option 8 or 9 and you 
can also move it to a different spot in the record with Option 8 and 
at the same time drop fields you no longer need.


CONVERSION TO FIXED LENGTH RECORDS - Fields Remain Variable Length

OPTION 10 is a direct method for converting variable length records to 
fixed for use with OPTION 9-UPDATE & SEARCH.  Options 1, 2 or 3 can 
also output fixed length, however these 3 can also convert fixed back 
to variable as well.  The latter could be useful if, after having 
converted to fixed length you find that a shorter length would 
suffice.  You first convert your fixed length records back to variable 
and then convert back to a shorter fixed length.  If you have no 
reason to sort, use OPTION 2 because it will be faster.

If select/exclude testing is not required and you wish to output the 
entire file of  records,  specify a test that is sure not to exclude 
any records but will serve merely to change record lengths. (Ex. Test 
against a LAST NAME field and EXCLUDE if EQ 'ZZZZZZ'). 


UPDATING RECORDS

If you've processed a file using options 1, 2 or 3 or 10, and output 
fixed length records, you can update or search the information in that 
file with random access by record number or by key value.

The file must contain at least 2 records for FILEBASE to insure that 
it is indeed a fixed length records file.  With only one record the 
program assumes that the file is a variable length one and will return 
to the main menu.

FILEBASE will display the contents of the fields numbered so that you 
can assign prompts to assist you in altering field contents.  Prompts 
already stored in a file from a prior run, can be recalled for use.  
You can select one field at a time (ex. last name) to produce an index 
to access records by means key value entry.

Retrieved records can be printed and any of the field contents 
changed.  Choices for printing include TAB position, number of lines 
to skip between each  and addition of a keyboarded comment.

Accessing records can begin as soon as the prompts are available 
either by recall from a file or by assignment.  The update process is 
by record number or by key.  If by number, you enter a relative record 
number.  That record is retrieved from its position in the file and 
displayed for changes or printing.  If by key, you get a menu of 
comparators followed by a prompt to enter a key value.  The choice of 
comparators will be the usual ones (Greater Than, Less Than, Equal To, 
Between, etc.) and will include two for string searching.

When changing field contents, FILEBASE will insure that the sum total 
of the altered field contents plus delimiters plus quotes is not 
greater than the length of the other records in your fixed length 
file. If the record is too long, you will be advised of how much to 
shorten it before it can be written to the file.  You could abbreviate 
the contents of any of the fields to accommodate to the maximum length 
of the record or you could convert to longer record length.

If you know in advance that the updating will cause records to be 
longer than the present fixed length will permit, you can first use 
OPTION 10, 1, 2, or 3, any of which will allow you to duplicate your 
file specifying a greater record length.  If you have no reason to 
sort or select or exclude records, the fastest conversion process is 
with Option 10.

With fixed length records files, you can move directly to Option 7 - 
APPEND, without returning to the main menu.


MORE ON CONVERTING TO FIXED LENGTH RECORDS WITH OPTION 10 

FILEBASE  converts variable length records to fixed length records by 
padding blanks to the right side of the record so that FILEBASE option 
9 can utilize the file for random access.  

Random access is a method to retrieve a record from its position by 
going directly to it as opposed to starting at the beginning of the 
file and reading records until the right one is reached.  If all the 
records in a given file are the same length, the operating system of 
the computer combined with the disk controller can calculate any 
record's physical position by means of a relative record number.  

FILEBASE implementation of this concept is different from most data 
management systems in that you do not have to pre-define field lengths 
by a "best guesstimate" of how wide they should be to accommodate the 
longest entry that might ever be made into that field.  Unless these 
lengths have been very well pre-defined, some may prove excessive 
(wasting disk space) and others too small (restricting the number of 
characters that may be entered).
  
FILEBASE permits field lengths to vary and maintains random access 
capability by means of a fixed total record length which can easily be 
modified at any time without affecting individual fields.  You do not 
have to sit down and try to figure out in advance how long each field 
has to be. FILEBASE actually helps you to decide on an optimal record 
length after you have entered records.
  
When you create a file, records keyed in are maintained as  variable 
length ones until you decide to convert them to fixed length.   After 
you have made a reasonable group of entries, you can use this option 
to convert the records to fixed length.  The program will report the 
length of the longest record to help you to decide on a total record 
length.   After converting to fixed length, even if you come across an 
unusually long entry, you can easily handle it by using this option to 
change to a somewhat longer record length.  Once you convert to fixed 
length, or re-convert to a longer length, the program will 
automatically keep newly added records the same by padding them with 
blanks on the right side of the record. You never have to be concerned 
about the length of data you put into individual fields.

Option 10 will tell you the length of the longest record and  will 
permit you to select any length equal to or greater than the  longest.  
Your  choice  will depend on how confident you are that the number  of 
records  entered  is  sufficient  to  base  your  judgement   on.    A 
comfortable  decision would be to ask for a length that is about 10 or 
20  longer than the longest record.

Records will be converted to fixed length and output to a new file.  
The input file many already be fixed length and this option can be 
used to increase its length, however the length cannot be decreased 
unless you first remove the blanks with Options 1, 2 or 3.


RECORD COUNTING AND RECORD LENGTH CHECKS

FILEBASE can process comma delimited field records (Mailmerge and 
BASIC format) without need to create a special structure.  Also, 
FILEBASE created files have no header records as do some other data 
managers. This is to keep the files directly compatible with 
MailMerge, MultiMate, Word and other word processors with letter-merge 
capabilities, as well as with dialects of BASIC. 

With most data managers there is a header record or structure file 
keeps track of the record length, number of fields, and number of 
records in a given file.  Data managers that use header records can 
immediately determine the properties of the file by reading the 
header.

Some main menu options require checking the properties of the file.   
Since FILEBASE files do not have header records, the properties of the 
file must be learned by direct examination.  For some options, this 
requires checking record lengths and counting them. 


RECORD DELETION - General

Most data managers delete records by marking them with a special
delete marker.  The record is not physically removed from its position
in the file but the data manager recognizes the marker and ignores the
record when printing reports and other processes.  Some programs
automatically re-use deleted records by writing newly entered ones
over the deleted ones.  Others, physically remove the records with a 
process that may be called 'file maintenance' or 'pack operation.'

Such processes actually copy the file to a new file name, leaving out
records with the delete marker.  The old file is then automatically
deleted and the new one renamed with the original file name.  This
process tightens up the file by eliminating the existence of 'deleted'
records and may be totally transparent to the user.

Some word processors also function in this manner.  In the case of 
WordStar, the old file is renamed with the file type .BAK and the 
newly re-written file receives the original file name.


Record Deletion with FILEBASE

Because the FILEBASE concept of data management requires that files be 
in pure data format so they can be used without modification by other 
programs, embedding delete markers to records is not provided for.  
While delete markers are recognized by the data manager using them, 
they are totally foreign to other programs and may interfere with the 
proper use of the files.

Deleting records from FILEBASE files can be performed by one of two 
methods.  For an occasional delete in a fixed length records file, one 
can simply access any record no longer needed and filling in the 
fields with information from any new entry that is to be made.  

However, the principal method would be to use Option 2 to exclude them 
from a newly written file.  This process is analogous to a 'file 
maintenance' step or 'pack operation' with other programs.  With 
FILEBASE it is a conscious and observable process.

The exclude process with Option 2 can be based on the LS-List of 
Record Number technique or by changing some field (in the records to be 
deleted) to some unique value.  For example, the first field of each 
record to be deleted can be changed to the word DELETE.  Using the 
Field Test method within Option 2, EXCLUDE all records EQ DELETE from 
the new file.   If MYFILE has records with the first field bearing the 
word DELETE, and MYFILE2 is named as the output file, do a test on 
field 1 and EXCLUDE if EQ DELETE.  To confirm that only deleted 
records were truly excluded, name a rejected records file.  All 
excluded records will be written to that file.  Look at that file for 
confirmation. 

With the LS-List of Record Numbers technique, first identify the 
record numbers to be deleted by using Option 4 and then enter them 
into the exclude list.  See the manual for the LS technique.



```
{% endraw %}

## FILE2152.TXT

{% raw %}
```
Disk No: 2152                                                           
Disk Title: FileBase                                                    
PC-SIG Version: 1                                                       
                                                                        
Program Title: FileBase                                                 
Author Version: 7.9                                                     
Author Registration: $30.00                                             
Special Requirements: Two floppy drives.                                
                                                                        
FILEBASE is a variable length fields data manager, storing records in   
"ASCII comma delimited" format.  This is the type of file created by    
many dialects of the BASIC language and is sometimes referred to as     
"MailMerge format".                                                     
                                                                        
These files can be used directly by the letter-merge functions of most  
word processors including: WordStar/Mailmerge, Displaywrite, Multimate, 
Word, XyWrite, PC-Write, and others.  FILEBASE creates such files and   
provides for complete data base functions while maintaining direct      
letter-merge capability.                                                
                                                                        
FILEBASE doubles as a files processor to manipulate pre-existing files  
in this format.  If a user has MailMerge files, FILEBASE can be used to 
manipulate them.  Automatically determine the number of fields, display 
the contents numbered, sort, merge, split, modify, and otherwise apply  
data base functions.  Data base functions include restructuring,        
indexing, appending new records, adding new fields, joining them,       
performing calculations, and generating reports and labels.  Also, comma
delimited format records can be converted to block and vice versa.      
                                                                        
Special sort features include sorting on the last name part of a full   
name, the zip code part of 'city, state zip' and dates in the American  
or European format.  Sorting can be ascending or descending, character  
or numeric.                                                             
                                                                        
Record selection for reports and subset files can be based on record    
number techniques or on information tests.  Ranges and lists of         
individual record numbers can be used.  Logical tests include use of    
greater than, less than, equal to, and variations of these.  Searching  
for words or parts of words is also possible together with wild cards.  
                                                                        
Prompted data entry with field names is provided for, even for          
pre-existing data files.  Any files created with FILEBASE can be        
directly used for letter-merging.                                       
                                                                        
Many functions not generally available with other data managers are     
provided for.  For example, any time a record is added or accessed, a   
label can be printed using any of the fields in any order.  Unlike the  
classical fixed-length field data managers, it is not necessary to      
define the length of a field or whether it is to be character or numeric
type.  Block format printing within the report function includes        
word-wrapping long text fields into any space designated.               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2152

     Volume in drive A has no label
     Directory of A:\

    FILEBASE EXE     60928   9-04-89   8:05p
    FILEBAS4 EXE     48640  11-11-88  12:41a
    FILEBAS6 EXE     62464   1-09-89  12:37a
    FILEBAS1 EXE     36864  11-07-88  12:59a
    FILEBAS3 EXE     16896  12-15-87   7:24p
    FILEBAS5 OVR      4096  12-15-87   7:24p
    FILEBAS2 EXE     21504  10-17-88  12:53a
    FBMANUAL DOC     21757   8-10-89   2:17p
    LISTC    PMT        80   1-09-89   1:30a
    LISTC    FXD      1170   9-01-89   8:05a
    INFILE2  PMT        80   1-09-89   1:30a
    INFILE1           1031   1-09-89   1:10a
    INFILE2            534   1-09-89   1:11a
    INFILE1  PMT        80   1-09-89   1:30a
    ARTICLES FXD      2432
    ARTICLES PMT       128
    README           10368   8-15-89   8:07a
    GO       TXT       771   4-23-90  12:16p
    GO       BAT        38   1-01-80   1:37a
    FILE2152 TXT      4219   4-23-90  12:17p
           20 file(s)     294080 bytes
                           16384 bytes free
