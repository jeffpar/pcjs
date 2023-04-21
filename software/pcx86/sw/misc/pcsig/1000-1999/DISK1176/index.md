---
layout: page
title: "PC-SIG Diskette Library (Disk #1176)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1176/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1176"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DABUTIL, EZDO, CAPP, AND EASYDOS"

    DABUTIL offers hard disk users a half-dozen valuable utilities to help
    them maintain their files and disks.
    
    A list directory command lists directories on any drive showing the
    number of files and the sum of their file sizes including hidden files.
    The find file utility lists all the occurrences of a file and the
    directories in which it is found. Disk information lists a variety of
    information about diskettes and fixed disks. It shows sector size,
    track size, cluster size, FAT, and root directory.
    
    EZDO (Easy Disk Operations) is a file and directory utility that
    gives you additional capabilities to DOS.
    
    With EZDO, you can sort the files within the present directory, find a
    file in the directory, change a file's attributes and mark a group of
    files to perform a certain operation. You can copy, delete, rename,
    change directories, and make directories. The screen display can be
    saved to a disk file. EZDO can invoke other programs to edit, view, and
    print a file. A general purpose user-definable program may also be
    invoked on any selected file.
    
    CAPP (C and Pascal Print and Check) helps you find errors in your C or
    Pascal program by printing a formatted output of the source code.  This
    output contains visual aids that include source lines, blocks, comments,
    and possible errors.  Nine simple semantic error checks are made, some
    intended to bring to your attention programming situations that may give
    you unintended results.  The error file contains the line number of
    source lines which have an error or a probable error.
    
    EASYDOS provides an easy-to-use menu for performing simple DOS
    operations.  You do not have to know the complicated DOS syntax or
    command line parameters.
    
    Select the letter of your choice on the menu to copy, erase, and rename
    files.  Get a directory of a disk to view the files it contains.
    Change your CONFIG.SYS and AUTOEXEC.BAT files on your boot-up disk.
    View each file and either change it or leave it as it is.  An on-line
    help function explains in detail each menu option in the program, and
    is very useful for DOS novices.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CAPP.DOC

{% raw %}
```

                                                           CAPP 1.0   page 1



        'C' and PASCAL Print and Check  version 1.0  January 1988

                                 CAPP (tm)

                           SOONER SOFTWARE INC.
                           c/o  Richard Tooley
                           1313 Buckingham Pl.
                           Richardson, Texas 75081

                           phone (214) 690-5287





CAPP is a user supported program distributed  through  various  shareware 
outlets.  A fee of  $7.95 is required for its continued use. Please send 
this amount to Richard Tooley at the above address.


CAPP (tm) Copyright (c) 1988 by Richard Tooley,  Sooner Software (tm).
All rights reserved.





                           Introduction to CAPP 

CAPP  is  an  easy to use utility program which executes on an IBM or IBM 
compatible PC using DOS 2.x or 3.x.  This program aids the 'C' and PASCAL 
programmer in finding common and frustrating errors.  CAPP will produce a 
pretty output for  "C"  and  PASCAL  source  programs.  Visual  aids  are 
included  to  inhance  reading  and  error  checking.  Source  lines  are 
optionally numbered.  Begin and End block language indicators are  marked 
and  block  contents  are  outlined.  They  are also checked for balance.  
Comments are marked and  checked.  Nested  comments  can  be  allowed  or 
flagged  as  an  error as specified.  Simple syntax and probable semantic 
errors are optionally flagged.  

                                                           CAPP 1.0   page 2

                          Output and Error Files


CAPP produces an "out file" and an  "error  file".  The  The  "out  file" 
contains  a  pretty print of the 'C' or PASCAL program.  It also contains 
visual aids  for  blocks,  comments  and  possible  errors.  Nine  simple 
semantic  error  checks  are  made.  Some  are just intended to bring the 
programmers attention to a situation that may not  be  what  is  desired.  
Block structures are outlined and numbered.  Continuing comment lines are 
marked with a (") for easy identification.  CAPP reserves columns at  the 
begining  of  each 80 column output line for this purpose,  see figure 1.  
After these fields the source statement field appears.  If the  statement 
field  will  not  fit  in  the  remaining columns,  it is split on a word 
boundary and carried into the  next  line.  In  this  case  a  split-line 
symbol (+) will appear in column 2.  The first block indicator appears in 
column 3.  All nested blocks appear in the next column to  the  right  of 
their  closest  outter  block.  Therefore,  the maximum columns needed by 
CAPP depends upon the level of nested blocks.  CAPP tries to preserve the 
original appearance of  the  source.  Leading  and  embedded  spaces  are 
preserved.  CAPP  indents only 1 space for each nested block,  see figure 
1.  If optional line numbers  are  selected,  the  first  6  columns  are 
reserved.  

The error file contains the line number of  source  lines which  have  an 
error or a probable error.  

Refering to figure 1, the comment line (") and error (?) indicator appear 
in column 1,  or in column 7 if source line numbers  are  selected.  This 
indicator  singals  that the comment in the previous line extends to each 
contiguous following line which has the indicator.  Next, in column 2, is 
the split line indicator (+) which indicates  that  the  previous  source 
line  had  to  be  split  and  this line contains the split portion.  The 
indicator for block 1 appears in column 3 or 9 with line numbers.  In the 
remaining columns the nested block indicators appear and then the  source 
statement.  If optional source line  numbers  are  specified,  they  will 
occupy  the  first 6 columns of the output line as "nnnn) ".  That is,  4 
digits, a right parenthesis,  and a space.  Therefore,  6 should be added 
to  the  column numbers in figure 1 as is done in the second numeric line 
of figure 1.  The first numeric  line  are  column  numbers  without  the 
source line count.  

 
         1        2      3       4       5     6     7
1        7        8      9      10      11    12    13. . . source satatment
|        |        |      |       |       |     |     |      
nnnn)  comment "  |   block 1    |     nest 3  |     |      
|      or error ? |            nest 2          |   nest 5 . . . 
|                 |                            |
line number   split-line +                   nest 4 


             Figure 1, Reserved output columns used by CAPP.


                                                           CAPP 1.0   page 3


                           Source Error Checks

CAPP checks for or aids in finding the following mistakes:

1:  No terminating double quote on string. 
2:  Too many characters or no terminating quote on an ascii character.
3:  Nested comments.
4:  End comment marker with no begin marker.
5:  Unbalanced block markers, too many end blocks.
6:  Unbalanced parenthesis in clause.
7:  No statement after IF clause.
8:  No statement after while/for clause.
9:  For clause semicoln count not equal to 3.

10: Unbalanced begin and end block indicators.  
    Visual  block  marking aids are used in the output so that blocks can 
    be clearly seen.  Blocks are  sequentially  numbered.  These  numbers 
    are  incremented when a begin block is encountered and decremented on 
    a block end.  All blocks and  are  outlined  and  nested  blocks  are 
    indented to permit their outlining also.  

11: Unclosed comments. 
    All comments which extend over one line  are  marked  with  a  double 
    quote  (") in cloumn 2.  This allows comment lines to be easily seen.  
    Therefore,  unclosed comments can be detected by a double quote  mark 
    preceding a line that was not supposed to be part of a comment.  

Items  1-9  will  be indicated in the output file with a "?" in column 1.  
Item 10 check is made by balancing start and end block indicators defined 
in the 'C' or PASCAL language.  Item 11 can be detected by inspecting the 
output  file  for  the continuing comment line indicator (") appearing on 
source lines that were not intended to be commented..  

Item 7 indicates that the flagged "if" clause in 'C' has a null statement 
as illustrated below.
                       if(a == b) ;
This is done to bring the users attention to a probable error.

                                                           CAPP 1.0   page 4


                              Executing CAPP

Figure 2 represents a template for  the  CAPP  execution  line.  Required 
parameters  are  enclosed  in angle brackets <>.  Optional parameters are 
enclosed in curly brackets.  CAPP requires only 1 input parameter for its 
execution.  The remaining 6 parameters are  optional.  The  brackets  are 
not to be entered.  Press the enter key after the CAPP execution line  is 
typed  into  DOS.  Again,  brackets  are  not to be entered.  When ever a 
parameter is included all preceding parameters must be included. In other 
words, parameters are positionally defined.  



  CAPP  <in> {out} {y|n} {y|n} {y|n} {c|p} {ln}              
                                                             
  Parameters are:  1     <in>  : input file                  
                   2    {out}  : output file, default <in>.out
                   3   {y | n} : yes/no, comment nesting     
                                 Default = yes.              
                   4   {y | n} : y - check for a non null statement 
                                 following "while and for" clauses.    
                                 Default = n. 
                   5   {y | n} : n - no line numbers wanted.
                               : y - line numbers wanted (default).
                   6   {c | p} : c - 'C' source language (default).
                                 p - PASCAL source.
                   7   {ln}    | starting line number, default = 1.


                     Figure 2, CAPP Input Parameters





The error output file name is not specified by the user.  It is named for 
the user by CAPP as described:   <input file name less extension>.ERR.  

The user can optionally enter the output file name  in parameter 2 or let 
CAPP name it as:   <input file name less extension>.OUT 

Example (1) Assume that the DOS command to execute CAPP is given as:
            CAPP SOONER.C 
            The output file would then be named SOONER.OUT.
            The error  file would then be named SOONER.ERR.

                                                           CAPP 1.0   page 5


                        Executing CAPP (continued)


A  y  or  Y  in  optional parameter 3 says that nested comments are to be 
allowed and will suppress nested comments being flagged as  errors.  This 
is the default condition.  An n or N says that nested comments are not to 
be allowed.  They are then flagged as errors.  

A y or Y for optional parameter 4 will cause all for and while clauses to 
be flagged if a NULL statement follows the  clause.  That  is,  
"for(i=0; i<ou; i++);"   would be flagged in 'C'.  

A y or Y for optional parameter 5 will produce source line numbers.  An n 
or  N  will  suppress  them.   Line  numbers  are  produced  by  default.  
Therefore,  the yes answer is only needed when a greater parameter number 
is present.  

A c or C for optional parameter 6 says that the source code is 'C' 
language. This is the default. A p or P says it is PASCAL.

Parameter number 7 is used to give a starting line number for source line 
numbering when it is different than 1;  1 is the default.




















CAPP (tm) Copyright (c) 1988 by Richard Tooley,  Sooner Software (tm).
All rights reserved.


```
{% endraw %}

## DABUTIL.DOC

{% raw %}
```
DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 1


 - - - - - - - - - - - - - - LD (List Directories) - - - - - - - - - - - - - -
     List all directories on the current drive,
     starting with the root directory.

     Format:

            ld [d:] [-s]

           Where 'd:' is an optional drive letter which can be specified
           to list the directories of a drive other than the current
           drive. Hidden directories will be displayed.

           Use -s to print a summary of each directory. The summary includes
           a count of the files in the directory (not including subdirectories)
           and a sum of the file sizes in the directory.

     Examples:
     
                   ld
           
           will list all directories in the current drive.
             
                   ld a:
             
           will list all directories in drive A

                   ld -s
           
           will list all directories in the current drive, and shows
           the total number of files, and the sum of their file sizes.
           The count and sum do not include subdirectory entries or
           volume labels, but do include hidden files.


 - - - - - - - - - - - - - - - - FF (Find Files) - - - - - - - - - - - - - - -
     List all occurrences of a file, the directories they are found in, and 
     some information about each occurrence.


     Format:

            ff [d:]filename

           Where filename is required. Filename may contain the
           wildcard characters '?' and '*'.


     Examples:

             ff *.c

           will display all the directories where any file having the extension
           .C is found, and each occurence of file with that extension.

           A drive specifier 'd:' may be specified to search a drive other than
           the current drive. Hidden files will be displayed, subdirectory
           entries will not.






DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 2


 - - - - - - - - - - - - - - DI (Disk Info) - - - - - - - - - - - - - - - - - -
     List information about a diskette or fixed disk.  Shows sector size,
     track size, cluster size, FAT (File Allocation Table) size, root directory
     size, etc. Shows if the boot record, the FAT, and the root directory can be
     read. A drive may be specified. A subdirectory or file may be specified.
     The cluster and sector numbers where that subdirectory or file resides
     will be displayed.

     Format:

            di [d:][filename]

           Where filename can be:

                 file                 or
                 \subdirectory        or
                 \subdirectory\file   or
                 c:\subdir\file       etc.

           No wildcards (? or *) are allowed in the file name.

     Examples:
                   di readme.doc
          
           will list the boot record information for the current disk
           and the clusters and sectors for readme.doc. DI will search
           for readme.doc in the current directory.
           
                   di \readme.doc
          
           will do the same thing, except that the backslash will indicate 
           to DI to search in the root directory of the current disk.
         
                   di c:\readme.doc

           will again do the same thing, except that DI will look on the drive
           C: to find file readme.doc
           
                   di \word\readme.doc
          
           will tell DI to look on the current disk, in the subdirectory
           WORD to find readme.doc.
           
                   di c:\word\readme.doc
          
           will tell DI to look on disk C: in subdirectory WORD for readme.doc.

           Instead of readme.doc, a subdirectory could be specified, for
           example:
          
                   di c:\word
          
           will look in the root directory of the current drive for the
           subdirectory WORD and list the clusters and sectors that WORD
           occupies.
           DI first attempts to read the boot record, and indicates if there
           are any problems reading it. If read successfully, this is the
           information it contains (all numbers are shown in decimal and
           hexadecimal):




DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 3


 - - - - - - - - - - - - - - DI (Disk Info) continued - - - - - - - - - - - - -
            + System id:
                         Indicates what operating system was used to
                         format the disk. For example: IBM   3.1
            + Sector size:
                         The size in bytes of a disk sector (usually 512).
            + Sectors per cluster:
                         A cluster is the unit of storage that files are
                         allocated in. This value indicates the size of
                         a cluster.
            + Total sectors on disk:
                         Includes boot record, FAT, root directory, and data 
                         area.
            + Total clusters on disk:
                         Total sectors / sectors-per-cluster.
            + Sectors per track:
                         Each concentric ring on one disk surface is divided
                         into this number of sectors.
            + Number of heads (sides):
                         The number of recording surfaces (and therefore the
                         number of read/write heads).
            + Total cylinders:
                         The total number of cylinders on the disk.
            + Disk capacity:
                         Total storage in kilobytes. Includes the boot record,
                         the FAT, the root directory, and the data area.
            + FAT size (in sectors):
                         The FAT (File Allocation Table) is a table which
                         contains lists of the clusters allocated to each
                         file. The value shown is the size of a single copy
                         of the FAT.
            + Copies of the FAT:
                         Typically, two copies are kept of the FAT, in case
                         the first becomes unreadable.
            + First directory block:
                         The first sector assigned to the root directory. The
                         root directory is assigned in a single contiguous
                         block.
            + Number of directory entries:
                         The root directory is fixed in size. This number is
                         the maximum number of directory entries that it may
                         have.
            + Directory size (in sectors):
                         The total sectors required to hold the number of
                         directory entries.
            + Number of reserved sectors:
                         This is the number of sectors reserved before the
                         FAT. Typically one, for the boot record.
            + Special reserved sectors:
                         I don't know all that this field includes. It does
                         include the sectors of previous partitions on a
                         partitioned drive.

           DI then attempts to read the FAT and the root directory into memory.
           An error message will indicate any problems.
           If a file was specified on the command line, the FAT chain is listed.
           The FAT chain is the list of all clusters. The sectors in each
           cluster are displayed.





DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 4


 - - - - - - - - - - - - - - - ENC (ENCrypt) - - - - - - - - - - - - - - - - -
     Encrypts a file using the supplied password. This program performs a simple
     encryption, and is useful against casual prying, but does not necessarily
     comply with any standards for security.

     Format:

            enc file1 file2 password

           Where file1 is the file to encrypt, file2 is the resultant
           encrypted file, and password is used to perform the encryption.

           To recover the contents of file1, type:

                   enc file2 file3 password

           File3 will now contain what file1 contained. Password
           must be keyed exactly the same: case and length, etc.

           If the password contains spaces, it must be
           enclosed in double quotes:

                   enc file1 file2 "pass word"

           You must know the password in order to restore the original
           contents of the file, since the password is not saved anywhere.





































DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 5


 - - - - - - - - - - - - - - - -  CATALOG - - - - - - - - - - - - - - - - - - -
     Lists files on a diskette or fixed disk to stdout. (Which may be
     redirected.) A header with the disk name, the date and file size is
     printed, each directory will be shown, and all the files in each
     subdirectory. If an .ARC file is found, all the files contained in it will
     be listed, indented after the .ARC file.

     Format:

            catalog [d:] [-w]

           Where 'd:' can be specified to list a disk other than the
           current one, and where '-w' specifies that a description of
           compression technique is printed for each file in an archive.
           Files are printed with file name, extension, size, and date
           of last update. Files in archives are additionally listed
           with the CRC, and the compressed size of the file. The compression 
           technique is shown if the '-w' (wide) option is selected.
           If the wide option is selected, the print width is 132
           characters, so set your 80-column printer to compressed mode
           if it has that option.

     Examples:

                   catalog

           will list all the files in all directories of the current disk
           to the screen. Files contained in .ARC files will be listed.

                   catalog >prn

           will do the same thing, but the output will be sent to the printer.
           (Substitute LPT1, etc. where applicable.)

                   catalog a:

           will list the files in all directories of the A: disk to the screen.

                   catalog -w

           will list all files of the current disk. In addition, when files in
           .ARC files are listed, a short description of the technique used to
           compress the file will be displayed. When this option is specified,
           the ouput is 132 characters wide, so probably, you will want to set
           your printer to 132 columns, then redirect the output of CATALOG to
           the printer, like this:

                   catalog -w >prn

           You may also do this:

                  catalog a: -w >prn

           or this:

                  catalog -w a: >prn

           which does the same.




DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 6


 - - - - - - - - - - - - - - - - SD (Sort Directory) - - - - - - - - - - - - -
    Reads the current directory, sorts it based on sort options specified, and
    writes it back to the disk. This program has been tested on an IBM-PC, an
    IBM-PC/AT, and a PS/2 model 80. It has been tested with 360K floppies and
    1 meg floppies, and with a 20M fixed disk. It has been tested under MS-DOS
    versions 2.0, 3.0, 3.1 and 3.3. If you use this program with any other
    configuration, test it first on a scratch disk, to make sure that the
    directory format is compatible with SD.

    Format:

            sd {nedts} [-d]

           Where n, e, d, t, and s are the sort options. Any or all of
           these may be specified, and in any order.

           Sort options:    n - Sort on filename    (Alphabetically)
                            e - File extension      (Alphabetically)
                            d - Date                (Oldest to newest)
                            t - Time                (Oldest to newest)
                            s - Size                (Smallest to largest)

           The '-d' parameter specifies that all subdirectory entries in
           the directory be sorted to the top of the list. If not
           specified, the subdirectory entries are sorted with the other
           files. Deleted entries are always sorted to the end of
           the directory. (When a file is deleted by MS-DOS, the entry
           is not physically removed, but is flagged to indicate that
           it can be used for another file entry.) A '-' can be used after
           any sort option to reverse the order of that sort.

    Examples:

                  sd ne

           will sort the current directory by name first, then extension, like
           this:

                 Volume in drive C is HARD DRIVE
                 Directory of  C:\WORD

                .            <DIR>      9-03-87  10:45a
                ..           <DIR>      9-03-87  10:45a
                1        STY     1664   9-19-84  12:00p
                ARTICLE  STY     1024   9-19-84  12:00p
                DANSRES  BAK      512   4-06-85   2:56p
                DANSRES  DOC      512   4-06-85   3:03p
                DEFAULT  STY      768   9-19-84  12:00p
                DRAFT    STY     1024   9-19-84  12:00p
                EXAMPLE  DOC     4352   9-18-84  12:00p
                MOUSE    COM     4192   9-18-84  12:00p
                WORD     COM     2062   9-18-84  12:00p
                       11 File(s)   5275648 bytes free











DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 7


 - - - - - - - - - - - - - - SD (Sort Directory) continued - - - - - - - - - -

                  sd en

           will sort the current directory by extension first, then name, like
           this:


                 Volume in drive C is HARD DRIVE
                 Directory of  C:\WORD

                .            <DIR>      9-03-87  10:45a
                ..           <DIR>      9-03-87  10:45a
                DANSRES  BAK      512   4-06-85   2:56p
                MOUSE    COM     4192   9-18-84  12:00p
                WORD     COM     2062   9-18-84  12:00p
                DANSRES  DOC      512   4-06-85   3:03p
                EXAMPLE  DOC     4352   9-18-84  12:00p
                1        STY     1664   9-19-84  12:00p
                ARTICLE  STY     1024   9-19-84  12:00p
                DEFAULT  STY      768   9-19-84  12:00p
                DRAFT    STY     1024   9-19-84  12:00p
                       11 File(s)   5271552 bytes free

    Other examples:

                  sd dts -d

           will sort subdirectory entries to the top, and will sort the files
           on date, time and size. The subdirectories will be sorted on the 
           same parameters.

                  sd dt

           will sort the directory with the newest files at the end of the list.

                  sd d-t-

           will sort the directory with the newest files at the top of the list.

                  sd n-e

           will sort the directory on name in reverse alphabetic order, and

           When using the  -d parameter to sort the subdirectory entries to the
           top, the subdirectory entries will be sorted on the same parameters
           as the filename entries.


```
{% endraw %}

## DABUTIL.DOC

{% raw %}
```
DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 1


 - - - - - - - - - - - - - - LD (List Directories) - - - - - - - - - - - - - -
     List all directories on the current drive,
     starting with the root directory.

     Format:

            ld [d:] [-s]

           Where 'd:' is an optional drive letter which can be specified
           to list the directories of a drive other than the current
           drive. Hidden directories will be displayed.

           Use -s to print a summary of each directory. The summary includes
           a count of the files in the directory (not including subdirectories)
           and a sum of the file sizes in the directory.

     Examples:
     
                   ld
           
           will list all directories in the current drive.
             
                   ld a:
             
           will list all directories in drive A

                   ld -s
           
           will list all directories in the current drive, and shows
           the total number of files, and the sum of their file sizes.
           The count and sum do not include subdirectory entries or
           volume labels, but do include hidden files.


 - - - - - - - - - - - - - - - - FF (Find Files) - - - - - - - - - - - - - - -
     List all occurrences of a file, the directories they are found in, and 
     some information about each occurrence.


     Format:

            ff [d:]filename

           Where filename is required. Filename may contain the
           wildcard characters '?' and '*'.


     Examples:

             ff *.c

           will display all the directories where any file having the extension
           .C is found, and each occurence of file with that extension.

           A drive specifier 'd:' may be specified to search a drive other than
           the current drive. Hidden files will be displayed, subdirectory
           entries will not.






DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 2


 - - - - - - - - - - - - - - DI (Disk Info) - - - - - - - - - - - - - - - - - -
     List information about a diskette or fixed disk.  Shows sector size,
     track size, cluster size, FAT (File Allocation Table) size, root directory
     size, etc. Shows if the boot record, the FAT, and the root directory can be
     read. A drive may be specified. A subdirectory or file may be specified.
     The cluster and sector numbers where that subdirectory or file resides
     will be displayed.

     Format:

            di [d:][filename]

           Where filename can be:

                 file                 or
                 \subdirectory        or
                 \subdirectory\file   or
                 c:\subdir\file       etc.

           No wildcards (? or *) are allowed in the file name.

     Examples:
                   di readme.doc
          
           will list the boot record information for the current disk
           and the clusters and sectors for readme.doc. DI will search
           for readme.doc in the current directory.
           
                   di \readme.doc
          
           will do the same thing, except that the backslash will indicate 
           to DI to search in the root directory of the current disk.
         
                   di c:\readme.doc

           will again do the same thing, except that DI will look on the drive
           C: to find file readme.doc
           
                   di \word\readme.doc
          
           will tell DI to look on the current disk, in the subdirectory
           WORD to find readme.doc.
           
                   di c:\word\readme.doc
          
           will tell DI to look on disk C: in subdirectory WORD for readme.doc.

           Instead of readme.doc, a subdirectory could be specified, for
           example:
          
                   di c:\word
          
           will look in the root directory of the current drive for the
           subdirectory WORD and list the clusters and sectors that WORD
           occupies.
           DI first attempts to read the boot record, and indicates if there
           are any problems reading it. If read successfully, this is the
           information it contains (all numbers are shown in decimal and
           hexadecimal):




DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 3


 - - - - - - - - - - - - - - DI (Disk Info) continued - - - - - - - - - - - - -
            + System id:
                         Indicates what operating system was used to
                         format the disk. For example: IBM   3.1
            + Sector size:
                         The size in bytes of a disk sector (usually 512).
            + Sectors per cluster:
                         A cluster is the unit of storage that files are
                         allocated in. This value indicates the size of
                         a cluster.
            + Total sectors on disk:
                         Includes boot record, FAT, root directory, and data 
                         area.
            + Total clusters on disk:
                         Total sectors / sectors-per-cluster.
            + Sectors per track:
                         Each concentric ring on one disk surface is divided
                         into this number of sectors.
            + Number of heads (sides):
                         The number of recording surfaces (and therefore the
                         number of read/write heads).
            + Total cylinders:
                         The total number of cylinders on the disk.
            + Disk capacity:
                         Total storage in kilobytes. Includes the boot record,
                         the FAT, the root directory, and the data area.
            + FAT size (in sectors):
                         The FAT (File Allocation Table) is a table which
                         contains lists of the clusters allocated to each
                         file. The value shown is the size of a single copy
                         of the FAT.
            + Copies of the FAT:
                         Typically, two copies are kept of the FAT, in case
                         the first becomes unreadable.
            + First directory block:
                         The first sector assigned to the root directory. The
                         root directory is assigned in a single contiguous
                         block.
            + Number of directory entries:
                         The root directory is fixed in size. This number is
                         the maximum number of directory entries that it may
                         have.
            + Directory size (in sectors):
                         The total sectors required to hold the number of
                         directory entries.
            + Number of reserved sectors:
                         This is the number of sectors reserved before the
                         FAT. Typically one, for the boot record.
            + Special reserved sectors:
                         I don't know all that this field includes. It does
                         include the sectors of previous partitions on a
                         partitioned drive.

           DI then attempts to read the FAT and the root directory into memory.
           An error message will indicate any problems.
           If a file was specified on the command line, the FAT chain is listed.
           The FAT chain is the list of all clusters. The sectors in each
           cluster are displayed.





DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 4


 - - - - - - - - - - - - - - - ENC (ENCrypt) - - - - - - - - - - - - - - - - -
     Encrypts a file using the supplied password. This program performs a simple
     encryption, and is useful against casual prying, but does not necessarily
     comply with any standards for security.

     Format:

            enc file1 file2 password

           Where file1 is the file to encrypt, file2 is the resultant
           encrypted file, and password is used to perform the encryption.

           To recover the contents of file1, type:

                   enc file2 file3 password

           File3 will now contain what file1 contained. Password
           must be keyed exactly the same: case and length, etc.

           If the password contains spaces, it must be
           enclosed in double quotes:

                   enc file1 file2 "pass word"

           You must know the password in order to restore the original
           contents of the file, since the password is not saved anywhere.





































DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 5


 - - - - - - - - - - - - - - - -  CATALOG - - - - - - - - - - - - - - - - - - -
     Lists files on a diskette or fixed disk to stdout. (Which may be
     redirected.) A header with the disk name, the date and file size is
     printed, each directory will be shown, and all the files in each
     subdirectory. If an .ARC file is found, all the files contained in it will
     be listed, indented after the .ARC file.

     Format:

            catalog [d:] [-w]

           Where 'd:' can be specified to list a disk other than the
           current one, and where '-w' specifies that a description of
           compression technique is printed for each file in an archive.
           Files are printed with file name, extension, size, and date
           of last update. Files in archives are additionally listed
           with the CRC, and the compressed size of the file. The compression 
           technique is shown if the '-w' (wide) option is selected.
           If the wide option is selected, the print width is 132
           characters, so set your 80-column printer to compressed mode
           if it has that option.

     Examples:

                   catalog

           will list all the files in all directories of the current disk
           to the screen. Files contained in .ARC files will be listed.

                   catalog >prn

           will do the same thing, but the output will be sent to the printer.
           (Substitute LPT1, etc. where applicable.)

                   catalog a:

           will list the files in all directories of the A: disk to the screen.

                   catalog -w

           will list all files of the current disk. In addition, when files in
           .ARC files are listed, a short description of the technique used to
           compress the file will be displayed. When this option is specified,
           the ouput is 132 characters wide, so probably, you will want to set
           your printer to 132 columns, then redirect the output of CATALOG to
           the printer, like this:

                   catalog -w >prn

           You may also do this:

                  catalog a: -w >prn

           or this:

                  catalog -w a: >prn

           which does the same.




DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 6


 - - - - - - - - - - - - - - - - SD (Sort Directory) - - - - - - - - - - - - -
    Reads the current directory, sorts it based on sort options specified, and
    writes it back to the disk. This program has been tested on an IBM-PC, an
    IBM-PC/AT, and a PS/2 model 80. It has been tested with 360K floppies and
    1 meg floppies, and with a 20M fixed disk. It has been tested under MS-DOS
    versions 2.0, 3.0, 3.1 and 3.3. If you use this program with any other
    configuration, test it first on a scratch disk, to make sure that the
    directory format is compatible with SD.

    Format:

            sd {nedts} [-d]

           Where n, e, d, t, and s are the sort options. Any or all of
           these may be specified, and in any order.

           Sort options:    n - Sort on filename    (Alphabetically)
                            e - File extension      (Alphabetically)
                            d - Date                (Oldest to newest)
                            t - Time                (Oldest to newest)
                            s - Size                (Smallest to largest)

           The '-d' parameter specifies that all subdirectory entries in
           the directory be sorted to the top of the list. If not
           specified, the subdirectory entries are sorted with the other
           files. Deleted entries are always sorted to the end of
           the directory. (When a file is deleted by MS-DOS, the entry
           is not physically removed, but is flagged to indicate that
           it can be used for another file entry.) A '-' can be used after
           any sort option to reverse the order of that sort.

    Examples:

                  sd ne

           will sort the current directory by name first, then extension, like
           this:

                 Volume in drive C is HARD DRIVE
                 Directory of  C:\WORD

                .            <DIR>      9-03-87  10:45a
                ..           <DIR>      9-03-87  10:45a
                1        STY     1664   9-19-84  12:00p
                ARTICLE  STY     1024   9-19-84  12:00p
                DANSRES  BAK      512   4-06-85   2:56p
                DANSRES  DOC      512   4-06-85   3:03p
                DEFAULT  STY      768   9-19-84  12:00p
                DRAFT    STY     1024   9-19-84  12:00p
                EXAMPLE  DOC     4352   9-18-84  12:00p
                MOUSE    COM     4192   9-18-84  12:00p
                WORD     COM     2062   9-18-84  12:00p
                       11 File(s)   5275648 bytes free











DABUTIL Version 1.1 Documentation, Copyright 1988 by Don Branson          page 7


 - - - - - - - - - - - - - - SD (Sort Directory) continued - - - - - - - - - -

                  sd en

           will sort the current directory by extension first, then name, like
           this:


                 Volume in drive C is HARD DRIVE
                 Directory of  C:\WORD

                .            <DIR>      9-03-87  10:45a
                ..           <DIR>      9-03-87  10:45a
                DANSRES  BAK      512   4-06-85   2:56p
                MOUSE    COM     4192   9-18-84  12:00p
                WORD     COM     2062   9-18-84  12:00p
                DANSRES  DOC      512   4-06-85   3:03p
                EXAMPLE  DOC     4352   9-18-84  12:00p
                1        STY     1664   9-19-84  12:00p
                ARTICLE  STY     1024   9-19-84  12:00p
                DEFAULT  STY      768   9-19-84  12:00p
                DRAFT    STY     1024   9-19-84  12:00p
                       11 File(s)   5271552 bytes free

    Other examples:

                  sd dts -d

           will sort subdirectory entries to the top, and will sort the files
           on date, time and size. The subdirectories will be sorted on the 
           same parameters.

                  sd dt

           will sort the directory with the newest files at the end of the list.

                  sd d-t-

           will sort the directory with the newest files at the top of the list.

                  sd n-e

           will sort the directory on name in reverse alphabetic order, and

           When using the  -d parameter to sort the subdirectory entries to the
           top, the subdirectory entries will be sorted on the same parameters
           as the filename entries.


```
{% endraw %}

## EZDO.DOC

{% raw %}
```
                                                           EZDO 1.0   page 1



              Easy Disk Operations version 1.0  January 1988

                                 EZDO (tm)

                           SOONER SOFTWARE INC.
                           c/o  Richard Tooley
                           1313 Buckingham Pl.
                           Richardson, Texas 75081

                           phone (214) 690-5287





EZDO is a user supported program distributed  through  various  shareware 
outlets.  A fee of  $12.95 is required for its continued use. Please send 
this amount to Richard Tooley at the above address.

EZDO (tm) Copyright (c) 1988 by Richard Tooley,  Sooner Software (tm).
All rights reserved.




                           EZDO   Introduction

EZDO is an easy to use utility program which executes on an  IBM  or  IBM 
compatible PC using DOS 2.x or 3.x.  Pleasing colors are present for PC's 
using a color/graphics adapter.  The underline and highlight features are 
used  for  those  with  the  monochrome  adapter.  This  program  greatly 
enhances  the  process  of  maintaining disk files and directories.  EZDO 
provides all the  common  DOS  file  maintenance  capabilities  such  as: 
delete,  rename,  copy,  file viewing,  creating directories, and showing 
files and  subdirectories  on  a  disk  or  whithin  a  subdirectory.  In 
addition,  there  are commands which will sort filenames and directories, 
find a file, modify a file's attributes,  save EZDO's output display to a 
file,  and invoke user supplied programs to edit,  show, or print a file.  
A general purpose user definable program  can  also  be  invoked  on  any 
selected file.  EZDO also provides the capibility to invoke commands on a 
group of files, called marked files.  File groups may be copied, deleted, 
or  have  their attributes modified.  Also,  each file within  the marked 
group may be printed by a user supplied print program,  or operated  upon 
by any user definable program.  

                                                           EZDO 1.0   page 2




                              Executing EZDO


EZDO  is invoked by typing either Line (1) or Line (2),  illustrated below, 
followed by pressing the RETURN or ENTER key.  

(1)  EZDO
(2)  EZDO disk, or pathname

Line (1) will cause EZDO to work  with  files  and  directories  from  the 
default  disk.  While  Line  (2) allows a disk or directory pathname to be 
specified as the source of files on which it will operate.


Example 1):  Assume that the default disk is A:.  One  can  execute  EZDO 
             with the files on disk A:  to work  with  as  shown.  Either 
             one of the 4 lines will suffice.  

(1) EZDO
(2) EZDO A
(3) EZDO A:
(4) EZDO A:\


Example (2): If one wishes to work with the files in the directory C:\DOS, 
             enter Line (1) or Line (2).  If Line (2) is entered, the DOS 
             directory must be selected from EZDO's screen display.  This 
             is  done  by  positioning  the cursor to the "DOS" directory 
             line on EZDO's display line and then enter the  EZDO  "show" 
             command by pressing the s or S key).  

(1) EZDO C:\DOS
(2) EZDO C

                                                           EZDO 1.0   page 3



                              EZDO's  Display

Once EZDO is brought into execution,  say for disk C, a screen similar to 
that as shown in figure 1 will be displayed.  The first two lines make up 
the information window.  At any time during EZDO's execution,  the H or h 
key may be pressed to bring up the help window,  see figure 2.  After any 
key  is  pressed,  the two lines of the information window will change as 
shown in figure 2.  From that point on,  line 1 will display  information 
regarding  the  disk and directory which has been choosen and line 2 will 
display status information.  This first line will then contain: 

(1) The pathname  of  the  directory  or  subdirectory  being  displayed.  
    Referring to figure 1, this field contains "C:\*.*" which is the root 
    directory of disk C.  
(2) The next field in this line shows the total number  of entries in the 
    root directory.  From figure 1 there are 26 entries.  Each  entry  is 
    either a file or a subdirectory.  
(3)  The last 2 fields show the amount of disk space,  in bytes,  used by 
    this directory and the number of bytes free (not used).  

If an EZDO command has been executed  or  is  in  the  process  of  being 
executed,   line  1  of  the  information  window  will  display  command 
information.  If input is necessary,  a command prompt will be  displayed 
there.  The  prompt  will  make it clear what data is needed and a sample 
input data is provided.  Most of the time it will only  be  necessary  to 
edit  characters  in  the  sample  to  produce  what is needed.  When the 
desired input is obtained, the enter key should be pressed.  

Line 2 in the information window will normally display status information 
on the number of  marked  files  and  the  input  substitute  string, see 
paragraph  "Additional  Input  for  Commands".  If  a  command  has  been 
executed, it displays status regarding the command.  

The command information and status lines in the information window ,  see 
figure 3,  will remain until a key  is  pressed.  The  window  will  then 
revert  back  to the one showing status for the directory similar to that 
shown in figure 2.  

EZDO's File and directory entries are  numbered,  see  Figure  1.  Twenty
ebtries  are  displayed  per  screen page.  The space to the right of the 
numbered entries is where a HELP window will be displayed when the key  H 
or  h  is pressed, see figure 2.  

"MORE" ,see figure 1,  is displayed at the end of the page if  there  are 
more  entries.  And  "END" ,see figure 2,  is displayed when there are no 
more entries to display.  

                                                           EZDO 1.0   page 4


-----------------------------------------------------------------------------
 C:\*.*  26 Entries,  Space Used 76303,  Free  29220086
 EZDO Disk management program by Richard Tooley,  Press H for Help
-----------------------------------------------------------------------------
  1   ASM           oct 11/87  3:41p       0  .Dir
  2   BAT           oct 19/87  6:51p       0  .Dir
  3   BRIEF         dec 22/87  4:14p       0  .Dir
  4   CPCK          oct 11/87  3:35p       0  .Dir
  5   DOS           jan 01/80 12:13a       0  .Dir
  6   EX            jan 01/80 12:21a       0  .Dir
  7   EZDO          jan 01/80 12:18a       0  .Dir
  8   GAMES         oct 04/87  4:06p       0  .Dir
  9   GASP!         oct 07/87  4:43p       0  .Dir
 10   LC            oct 17/87  4:37p       0  .Dir
 11   NORTON        oct 17/87  6:03p       0  .Dir
 12   PRF           dec 16/87  3:14p       0  .Dir
 13   TEXT          oct 06/87  6:32p       0  .Dir
 14   TL            dec 16/87 11:53a       0  .Dir
 15   XTREE         jan 01/80 12:13a       0  .Dir
 16   AUTOEXEC.BAT  dec 16/87  9:46a     191  A...
 17   COMMAND.COM   oct 20/83 12:00a   17792  A..R
 18   CONFIG.SYS    dec 20/87 11:08a      56  A...
 19   DOSENV.ENV    dec 16/87  1:35p     128  A...
 20   HANDI2PC.EXE  apr 12/84  9:55a    1280  A...

                 MORE

     Figure 1,  typical screen on entry to EZDO


An entry line,  see a numbered line in  either  figure  1  or  figure  2, 
represents  a file or a subdirectory.  The information in a typical entry 
line consist of a series of fields which are  now  described.  The  first 
field  is a sequential number count of the entry.  There are up to twenty 
entries in each screen page.  Next is the file name or subdirectory  name 
field. The creation date and time are the next two fields. The months are 
abrieviated to three characters.  An 'a'  or  'p'  follows  the  time  to 
indicate  either  AM  or  PM.  After  that  comes the size of the file in 
bytes.  A zero always appears in this field for  subdirectories  entries.  
The  last  field  is  the  file's attributes or a subdirectory indicator.  
Legal attributes (ASHR) indicate that the entry line represents  a  file.  
A  ".Dir"  in  the  attribute  field  implies that the entry represents a 
subdirectory.  Legal attributes are listed below.  

A - Archive,  when on,  the file is marked as being  modified  since  its 
    creation.  Backup programs will normally backup those files that have 
    this bit set.  After backup, the bit will be reset.  
R - Read only,  when on,  the file can  only  be  read.  Not  deleted  or 
    modified.  
H - Hidden,  when on the file will  not  be  displayed  with  a  DOS  DIR 
    command, although EZDO will display it.  
S - System, when on The file is classified as a DOS system file.  

                                                           EZDO 1.0   page 5



All  sbudirectory  entries appear before the file entries,  see figure 1.  
If a EZDO sort command is given (F4, sF4, aF4, cF4),  two sorts are made, 
one  for the subdirectory entries which appear first and then one for the 
file entries which appear next.  



------------------------------------------------------------------------------
 C:\*.*  26 Entries,  Space Used 76303,  Free  29220086
 Marked = 0,  H - Help,  ^A substitute string:
------------------------------------------------------------------------------
19   DOSENV.ENV    dec 16/87  1:35p     128  A... |PgUp-up page|  PgDn-down pg
20   HANDI2PC.EXE  apr 12/84  9:55a    1280  A... |Home-first  |  End-last
21   PROMPTS       oct 07/87  5:01p    2149  A... |'-'  up by 3|  '+' dwn by 3
22   SCRNSAVE.COM  dec 21/83  1:12p     384  A... |F1-Find file|  F2-Find next
23   SR.COM        jan 01/80 12:00a    4890  A... |F3-mrk/unmrk|  F4-sort
24   THEREST.BAT   dec 20/87 11:10a     178  A... |F5-refresh  |  F6-save scrn
25   VDISK.SYS     oct 06/87  5:54p    3307  A... |F7-mrk all  | sF7-unmk all 
26   WDPARK.EXE    apr 03/87  3:05p    8624  A... |aF7-alt mrk | cF7-mrk all C
                                                  |F8-mrk match| sF8-umrk match
                                                  |F9-mark matching dates
                                                  |F10-Exit
                                                  |
                                                  |A-chg Attr  | aA-Attr mrkd 
                                                  |C-Copy      | aC-copy mrkd 
                                                  |D-Delete    | aD-delete mrkd
                                                  |M-Make dir  |  R-remane file
                                                  |N-New dir   |  E-Edit file 
                                                  |P-Print file| aP-print mrkd
                                                  |U-User pgrm | aU-user mrkd 
                                                  |S-show file/directory      
                                                  |Q-Quit show or Exit        
                END                               |V-enter substitute string  

        Figure 2, typical EZDO's screen after the H key is pressed 








------------------------------------------------------------------------ 
 Delete file   C:\MIAMI.DOC
 C:\MIAMI.DOC  deleted
-------------------------------------------------------------------------

        Figure 3, EZDO's information window after a Delete command

                                                           EZDO 1.0   page 6



                Selecting Files and Moving in the Display

Files are selected by positioning the cursor to the desired file  in  the 
display.  The  display cursor always stays in column 1,  but can be moved 
to any of the twenty,  or less,  displayed file or subdirectory  entries.  
The  screen  will  roll up or down to display entries that are not on the 
screen when the cursor bumps the  top  or  bottom  of  the  display.  The 
cursor  is  moved  up  or down one entry by pressing the up or down arrow 
key.  The cousor can be moved 3 entries at a time.  Pressing  the  +  key 
moves  3  entries  down  and  the  - key moves 3 entries up.  The page up 
(PgUp) or page down (PgDn) keys will display a new page which consist  of 
the  last  2 entries of the previous page and 18 (or less) new entries of 
the next page.  The Home key will always select the  first  entry,  while 
the End key will select the last entry.  The entry on which the corsor is 
positioned  is  the one selected.  The selected entry is highlighted on a 
colored screen and underlined on monochrome screen.  


                      Additional Input for Commands

Some commands will require  additional  input.  When  it  is  required  a 
prompt  will appear in line 1 of the information window.  The prompt will 
make it clear as to what data is needed.  A sample input will  appear  in 
the  input  field.  Most of the time this sample will be close to what is 
needed and will therefore only require some simple editing.  The  editing 
rules follows.  

1) The right and left arrow keys may be used to position  the  cursor  to 
   any character.  
2) Character  over  strike mode  is initially in effect.  Over strike and 
   insert mode may be toggled by pressing the Ins  key.  When  positioned 
   to  the  last  character  in the input field,  insert mode is selected 
   automatically.  
3) The Del key will delete the character under the cursor.
4) The ctrl-End key will delete from the cursor to the end of the field.

A  definable  substitute  string can be entered at any point in the input 
field of an input prompt when the "ctrl a" key sequence is entered.  That 
is,  while pressing the ctrl key,  press the a or A key  key.  The  input 
mode will change to insert when this key sequence is invoked.  The string 
will be inserted at the cursor by  pushing characters on the right to make
room.  This substitute insert string  can  save  much  typing  effort  in 
repeat  typing  of  long  pathnames.  The  string  is  displayed  in  the 
information window and  can  be  defined  or  changed  by  the  EZDO  'V' 
miscellaneous command.  

                                                           EZDO 1.0   page 7



                  Input with Wild Card characters 

Certain commands will process wild card characters in  the  input  prompt 
field. When specified by the command description in this manual, the wild 
card character '*' may appear in the input field of a prompt. There are 3 
forms types that the wild card may have in an input field.  

*name - This form represents any entry which has the characters  supplied 
in  "name"  as  its  right  most  characters.  For example,  "*.EXE" will 
represent any entry which has ".EXE" as its right  most  characters.  Any 
entry which  ends  in  ".EXE"  will be represented,  such as,  RT.EXE   or
OU.EXE, etc.  

name* - This form represents any entry which has the characters  supplied 
in "name" as its left most characters.  For example,  "S*" will represent 
any entry which has 'S' as its left  most  characters.  Any  entry  which 
starts with 'S' will be represented, such as,  START.COM,  SEX.DOC, etc.

*name* - This form represents any entry which has the characters supplied 
in  "name"  appearing  anywhere in its text.
For example,  "*EX*" will represent any
entry which has "EX" appearing anywhere, such as, SEX.DOC, EZDO.EXE, etc.  


                            Aborting Commands

Most all commands will produce an input prompt. If no additional input is 
needed,  a  "Y/N" prompt will appear.  Pressing the Y or y key will cause 
the command to execute.  Pressing the N or n key will abort the  command.  
If  additional  input  is  needed,  the command may be aborted before the 
enter key is pressed by pressing the Esc key.  



                          Using Commands of EZDO


There are four types of commands:

1) Commands which perform some action on a selected file. Files are 
   selected by positioning the cursor to the desired file in the display.  
   These commands are referred to as single action commands.

2) Miscellaneous commands are commands  which do not act upon entries, but 
   change EZOD's display or behavior.  

3) Commands  which  will mark  or  unmark an entry or a set of entries are 
   referred to as marking commands.  

4) Commands which act on each individual file in a group of marked files.  
   These commands are referred to as marked commands.  

                                                           EZDO 1.0   page 8



                     Invoking User Supplied Programs

There are 4 single action commands  and  2  marked  commands  which  will 
invoke  up  to  4  different  user supplied programs.  These programs are 
executed by obtaining parameter strings from the environment  section  of 
DOS.  These  environment  strings must be defined in DOS by using the DOS 
SET command.  There is a unique environment string  for  each  of  the  4 
invokable  programs.  Another string,  which defines the path of a master 
directory,  can also be used,  if  these  programs  reside  in  a  common 
directory that is not defined by the DOS PATH environment parameter.  

These 4 environment parameters are named ED, SF, PF, and UP. They must be 
set  to a string which is the name of the program to be executed.  Assume 
that the following DOS command is used to set the EZDO's Edit environment 
parameter.  
                      SET ED=PCEDIT

The above will cause PCEDIT.COM or PCEDIT.EXE to be invoked when the EZDO 
edit  command  'E'  is  used.  If  the  MD environment parameter had been 
defined by the following DOS command, 

                      SET MD=C:\EX

the  edit  command  would  execute  PCEDIT.COM  or  PCEDIT.EXE  from  the 
subdirectory C:\EX.  The MD environment parameter is used for the all the 
invokable  programs  (Edit,  Print,  Show  File,  and  the User definable 
Program).  If this is not suitable,  the DOS PATH can be supplied to give 
path   information  for  each  invokable  program.   The  MD  environment 
parameter is supplied as a means to shorten strings in  the  environment.  
The rules for EZDO program execution is as follows: 

(1) The program whose name is  obtained  from  its  assigned  environment 
    string  is  is  searched  for  in the MD directory.  If found,  it is 
    executed.  
(2) If it does not reside in the MD directory,  It is executed using the 
    DOS PATH environment parameter.  
(3) The program must accept a pathname of a file as its argument.

The 4 single action commands which invoke a user supplied program are: E, 
P,  S,  and U (see their respective descriptions in this manual).  The  2 
marked commands are (alt)P, and (alt)U (see their respective descriptions 
in this manual).  

                                                           EZDO 1.0   page 9

                          Single Action Commands

These  commands perform some action on the selected entry and are invoked 
by pressing a letter key in upper or lower case.  The letter  is  usually 
the  first  character  of  the  action which is performed.  Some of these 
commands  will  require  additional  input.  When it is required a prompt 
will appear in line 1 of the information window.  The prompt will make it 
clear as to what is needed.  Below is a  discussion  of  these  commands.  
The command key for the command is listed in upper case,  but may be used 
in either upper or lower case.  A hyphen separates the key  command  from 
its description.  


A - change file Attributes.
    A  prompt  appears  allowing new attributes to be entered or deleted.  
    Attributes are entered as +/-ARSH in upper or lower case.  A plus (+) 
    before the attribute means to add it,  while a  minus  (-)  means  to 
    delete it.  Example, -a+r would mean to turn off the archive and turn 
    on the read only attribute bits.  Attributes codes are as follows:
    a - Archive,  r - read only,  h - hidden, and  s - system.


C - Copy file.
    An  input prompt appears to allow the destination to be entered.  The 
    destination can be either a disk such as d:  or d:\,  a subdirectory, 
    or  a  full pathname.  A 'C' is placed in the entry display window to 
    the right of the name of the  file  that  was  copied.  This  enables 
    copied files to easily be identified.  This 'C' will over write   the 
    marking symbol, if one is present.  


D - Delete file or subdirectory.
    A Yes or No prompt will appear, enter a Y or N.  If a subdirectory is 
    to be deleted,  it must be void of files.  A "Del" will be placed  to 
    the  right  of the entry deleted.  This enables deleted entries to be 
    easily identified.  


E - Invoke the users supplied Edit program.
    The  users  supplied edit program is invoked with the selected file's 
    full path name as its input parameter.  This program is  selected  by 
    setting  the  environment  parameter  "ED" to the name of the editor.  
    Assume that the editor program is in the file PCEDIT.EXE with a  path 
    of C:\EXE.  The following DOS SET commands could be used: 

    >SET MD=C:\EXE
    >SET ED=PCEDIT

    These  two  DOS commands will set up EZDO's master directory (MD) and 
    edit name (ED) environment parameters necessary to invoke  the  users 
    supplied  edit  program.  The  edit  program must accept the selected 
    entry filename as an input parameter.  If the edit program's path has 
    already been set up in the PATH  environment  parameter  or  none  is 
    needed,  then  the  MD  environment  parameter in not needed.  The MD 
    environment parameter is used for  the  all  the  invokable  programs 
    (Edit, Print, Show File, and the User definable program).  

                                                           EZDO 1.0   page 10


                    Single Action Commands (continued)


P - Invoke the users supplied Print program.
    The users supplied print program is invoked with the selected  file's 
    full  pathname  as  its input parameter.  This program is selected by 
    setting  the  environment  parameter  "PF"  to  the name of the print 
    program.  Assume that the print program is the file PRINT.COM and  it 
    resides in the directory C:\EX.  The following DOS SET commands could 
    be used: 

    >SET MD=C:\EX
    >SET PF=PRINT


R - Rename file or subdirectory.
    The selected entry is renamed.  A prompt appears to allow a new  name 
    to be entered.  


S - Show a file contents or show entries of a subdirectory.
    If a file entry is selected,  the users supplied show file program is 
    invoked with the selected file's full pathname as its input argument.  
    This  program  is  selected  for execution by setting the environment 
    parameter "SF" to the name of the program.  Assume that  the  program 
    is  in  the  file  SHOW.COM  and resides in the directory C:\EX.  The 
    following DOS SET commands could be used: 

    >SET MD=C:\EX 
    >SET SF=SHOW 

    If a subdirectory is selected,  that directory becomes the  new  EZDO 
    directory  and its entries are displayed.  Subdirectories up to depth 
    of 24 may be selected.  The Q command will return EZDO  back  to  the 
    previous directory from which the selection was made.  


U - Invoke  the  Users supplied Universal program.  
    A user supplied and definable program is invoked  with  the  selected 
    file as its input parameter.  This program is selected by setting the 
    environment  parameter  "UP" to the name of the program.  Assume that 
    this program is in the file ANYPROG.EXE with a  path  of  C:\EX.  The 
    following DOS SET commands could be used: 

    >SET MD=C:\EX
    >SET UP=ANYPROG


                                                           EZDO 1.0  page 11


                          Miscellaneous Commands


These commands effect the display or change the behavior of EZDO.  Single 
letter commands and function key commands exist  in  this  group.  Single 
letter  commands  are  invoked by pressing an upper or lower case letter.  
Function key commands are invoked by  a  function  key  or  function  key 
sequence.  These  keys are shown symbolically as Fx,  sFx,  cFx,  or aFx.  
Where x is a digit 0 - 9, and 's',  'c',  and 'a' means to hold the shift 
key,  Ctrl  key,  or the Alt key respectively while pressing the function 
key Fx.  A hyphen separates the key from its description.  


M - Make a directory.
    Make  a  directory,  selected  entry  is  ignored.  Directory  prompt 
    appears to allow the directory name to be entered..  


N - Select a New EZDO directory.
    A  new  directory  is  selected  for  EZDO to work with.  A directory 
    prompt appears and an  new  EZDO  display  appears  showing  the  new 
    selected directory.  


Q - Quit the show subdirectory command or exit EZDO.
    This command will return EZDO back to  the  previous  directory  from 
    which  a Show subdirectory selection was made.  It will cause EZDO to 
    exit if no Show subdirectory command was in effect.  


V - Enter the input substitute string.
    Allows the input substitute  string  to  be  entered  or  edited  and 
    changed.  This  substitute string is entered in any input prompt when 
    the "ctrl a" key sequence is entered.  That is,  while  pressing  the 
    ctrl  key,  press  the  a  or A key key.  This saves effort in repeat 
    typing of long pathnames.  It may be inserted at  any  point  in  the 
    input  field  of  a  prompt.  The input mode changes to insert when a 
    substitute string is inserted into the data field.  


F1 - Find the first occurrence of an entry. 
     A  prompt  appears  to  allow  the entry name to be entered.  All of 
     EZDO's entries are searched,  starting with the first  one  and  the 
     first entry that  matches the name is selected.  Wild card characters
     may be used in the input field.


F2 - Find the next occurrence of the F1 entry.
     This command uses the name entered in the F1 command for its search. 
     The first entry that matches the name,  starting from where  the  F1 
     search left off is selected.  

                                                           EZDO 1.0  page 12



                    Miscellaneous Commands (continued)



F4 - Sort the entries by the indicated method.
     This command will sort the entries of EZDO's selected  directory  by 
     Name,  name Extension,  or Date and time.  A prompt appears to allow 
     the sort selection to be made.  Enter an 'N' or "NAME" in  upper  or 
     lower case to sort by name.  Like wise, an 'E' or "EXT" will sort by 
     the name extension.  While a 'D' or "DATE" will cause the entries to 
     be  sorted by date and time.  All prompt responses may be entered in 
     either lower or upper case.  



F5 - Refresh the screen.
     If the screen becomes cluttered or if files or  subdirectories  have 
     been  created  since  the  entries have been displayed or refreshed, 
     this command will display the current entries of the  EZDO  selected 
     directory.  All  deleted  files  are  eliminated,  all  copied  file 
     indicators and marked file indicators are lost.  All new files 
     and subdirectories are displayed.  


F6 - Save EZDO's display to a file.
     EZDO's entry display is saved to a file. A prompt appears so that the
     name of the file can be entered.


F10 - Exit EZDO.

                                                           EZDO 1.0  page 13



                             Marking Commands


These commands effect the marking and unmarking of EZDO'S entries. Marked 
entries become a group of entries which can be acted upon by  the  Marked 
commands.  The  Marked  count  which appears in line 2 of the information 
window is  effected.  These  commands  are  invoked  by  a  function  key 
sequence.  These  keys are shown symbolically as Fx,  sFx,  cFx,  or aFx.  
Where x is a digit 0 - 9.  An 's',  'c',  or 'a' means to hold the  shift 
key,  Ctrl  key,  or the Alt key respectively while pressing the function 
key Fx.  A hyphen separates the key from its description.  


F3 -  Toggles the marking and unmarking of the selected entry.
      If the selected entry is marked,  this command will unmark  it.  If 
      the selected entry is unmarked, this command will mark it.  


F7 -  Mark all entries.
      This command will mark all entries that are not already marked.


sF7 - Unmark all entries.
      This command will unmark all entries that are marked.


aF7 - Alternate Mark all entries.
      This  command will mark all entries that are not already marked and 
      unmark all entries that are marked.  


cF7 - Mark all Copied entries.
      When a file is copied a 'C' is placed to  the  left  of  the  entry 
      name.  This 'C' will over write any marking indicator,  but searves 
      as an easy to spot indicator for all  copied  files.  This  command 
      will mark all files that have the Copied indicator.  


F8 -  Mark all entries which match a wild card name.
      This command will mark all entries that are not already marked  and 
      which match the wild card name entered at the prompt.  


sF8 - Unmark all entries which match a wild card name.
      This  command  will  unmark  all  entries that are marked and which 
      match the wild card name entered at the prompt.  

                                                           EZDO 1.0  page 14



                       Marking Commands (continued)


F9 -  Mark all entries which match the date input field.
      A prompt appears which allows the date field to be entered as:
          =yymmdd,  >yymmdd,  or   <yymmdd.
      yy are 2 digits which indicate the year in this century. 
      mm are 2 digits which indicate 1 of 12 months of the year.
      dd are 2 digits which indicate the day of the month.
      For example 070228, represents February 28, 1907.
      =yymmdd will mark all entries which have a creation date  equal  to 
      the one given.  
      >yymmdd will mark all entries which have a  creation  date  greater 
      than the one given.  
      <yymmdd will mark all entries which have a  creation date less  than
      the one given.  


                                                           EZDO 1.0  page 15


                             Marked Commands



These  commands will perform some action on each marked entry as a group.  
These commands are invoked by holding down the Alt key while  pressing  a 
letter  key  in  upper  or  lower case.  This key sequence is represented 
symbolically as "aX" where 'X ' is a letter key.  For example,  aA  means 
to  hold  down the Alt key and press the 'A' key.  A hyphen separates the 
key from its description.  


aA -  Change the attributes of all marked files.
      A  prompt  appears  allowing new attributes to be entered or deleted.  
      Attributes are entered as +/-ARSH in upper or lower case.  A plus (+) 
      before the attribute means to add it,  while a  minus  (-)  means  to 
      delete it.  Example, -a+r would mean to turn off the archive and turn 
      on  the  read only attribute  bits for each  marked file.  Attributes 
      codes are as follows:  
      a - Archive,   r - read only,   h - hidden,  and  s - system.


aC -  Copy all marked files to a given directory.
      A Yes or No prompt will appear,  enter a Y  or  N.  Another  prompt 
      appears  which allows the directory to be entered.  The last prompt 
      of this command will ask whether to query on existing files.  A 'N' 
      or 'Y' in upper or lower case should be entered. A no response will 
      cause all marked files to be copied to the indicated directory over 
      writing  existing  files  with  the same name.  A yes response will 
      cause an append or over write query to  appear  for  each  existing 
      file  which has the same name as the one being copied.  A yes,  no, 
      or append response (y,  n,  a) is  required.  After  each  file  is 
      copied,  a  'C'  is  placed  in  the  marking field of the entry to 
      indicate that the file has been copied.  The Marked  count  in  the 
      information window is decreased by the number of files copied.  


aD -  Delete all marked entries.
      A Yes or No prompt will appear,  enter a Y or N.  If a subdirectory 
      is to be deleted, it must be void of files.  A "Del" will be placed 
      to the right of all entries deleted.  This enables deleted  entries 
      to  be  easily  identified.  The  Marked  count  in the information 
      window is decreased by the number of files deleted.  

                                                           EZDO 1.0  page 16


                       Marked Commands (continued)




aP -  Invoke the users Print program on the group of marked files.  
      The users supplied print program is invoked  on  each  marked  file 
      with the file's full pathname as its input parameter.  This program 
      is  selected  by setting the environment parameter "PF" to the name 
      of the print program by using the DOS SET command.



aU -  Invoke the Users defined program on the group of marked files.  
      The users supplied program is invoked on each marked file with  the 
      file's  full  pathname  as  its  input  parameter.  This program is 
      selected by setting the environment parameter "UP" to the  name  of 
      the Users defined program by using the DOS SET command.




















  EZDO (tm) Copyright (c) 1988 by Richard Tooley,  Sooner Software (tm).
  All rights reserved.

```
{% endraw %}

## FILE1176.TXT

{% raw %}
```
Disk No  1176
Program Title:  DABUTIL, EZDO, CAPP, and EASYDOS
PC-SIG version 1.1

DABUTIL offers hard disk users a half-dozen valuable utilities to help
them maintain their files and disks.  A list directory command will list
directories on any drive showing the number of files and the sum of
their file sizes including hidden files.  The find file utility lists
all the occurences of a file and the directories it is found in.  Disk
information lists a variety of information about diskettes and fixed
disks.  It shows sector size, track size, cluster size, FAT, and root
directory.  A subdirectory or file may be specified.

ENC encrypts files using a supplied password.  Easy to use, it is
valuable against casual prying.  CATALOG lists files on a diskette or
fixed disk.  It lists the disk name, dates and file sizes, directories
and files by subdirectory.  It also lists archived files.  Another
utility reads the current directory and sorts files by filename,
extensions, dates, times and size.

EZDO (Easy Disk Operations) is a file and directory utility that will
give you additional capabilities to DOS.  With EZDO you can sort the
files within the present directory, find a file in the directory, change
a file's attributes, and mark a group of files to perform a certain
operation.  With EZDO you may copy, delete, rename, change directories,
and make directories.  The screen displayed by EZDO may be saved to a
disk file.  EZDO may also invoke other programs to edit, view and print
a file.  A general purpose user-definable program may also be invoked on
any selected file.

CAPP (C and PASCAL Print and Check) is a program that will aid you in
finding errors in your C or PASCAL program by printing a formatted
output of the source code.  This output contains visual aids that
include source lines, blocks, comments and possible errors.  Nine simple
semantic error checks are made, some intended to bring to your attention
to programming situations that may give you unintended results.  The
error file contains the line number of source lines which have an error
or a probable error.

EASYDOS is a program that will provide you an easy-to-use menu for
performing simple DOS operations.  The advantage of using this menu is
that you do not have to know the complicated DOS syntax or command line
parameters.  With EASYDOS all you have to do is to select the letter of
your choice on the menu.  The menu will allow you to easily copy, erase,
and rename files.  You can also get a directory of a disk to view the
files it contains.  EASYDOS will also let you change your CONFIG.SYS and
AUTOEXEC.BAT files on your boot-up disk.  The CONFIG.SYS file is used to
set up your computer system, and the AUTOEXEC.BAT file will
automatically execute certain files.  With EASYDOS you can view each
file and either change it or leave it as it is.  This program has
on-line help that explains in detail each menu option in the program,
and is very useful for beginning users of DOS.

Usage:  Disk/File/System Utilities.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00 for DABUTIL, $12.95 for EZDO, $7.95 for
CAPP, and $25.00 for EASYDOS.

File Descriptions:

-------- ---  DABUTIL
CATALOG  COM  Lists files and archive contents on a disk.
DABUTIL  DOC  Describes utilities on disk.
DABUTIL  REG  Registration form, information.
DI       COM  Displays disk information.
ENC      COM  Copy file, encrypting it in the process.
FF       COM  Find file utility.
LD       COM  List Directory utility.
README   DAB  Initial user information.
SD       COM  Sort current information.
-------- ---  EZDO and CAPP
EZDO     EXE  Main program.
EZDO     DOC  Documentation for EZDO.
CAPP     EXE  Main program.
CAPP     DOC  Documentation for CAPP.
-------- ---  EASY DOS
EASYDOS  COM  Main program.
README   COM  Displays the help file on the screen.
HELP     DOC  Help file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

## HELP.DOC

{% raw %}
```
Welcome to EasyDos.  Although EasyDos is quite easy to use (hence the
name EasyDos), you may have some difficulty at first.  This help
screen has been provided to help you through your first few uses of
EasyDos.  Once you get the hang of it, you'll probably never need to
refer to the help screen again.  However, unless you delete it, it
will always be here on the disk if you need it.


EasyDos is not intended to be a full-blown alternative to the Disk
Operating System.  It does, however, provide some of the most common
DOS commands, such as file copying, deleting, renaming, etc.  The
purpose of EasyDos is to allow you to perform these functions without
being proficient in using the somewhat confusing DOS syntax.  Just
make the appropriate selection from the menu, and EasyDos will prompt
you for any parameters needed.  No longer will you have to worry
about whether or not you've got all the parameters or if they're in
the right place.  EasyDos does it all for you.


To execute EasyDos, simply type in EASYDOS at the DOS prompt.  EasyDos
will execute immediately, and you will first see a program information
screen which provides information about the author and the program;
then the menu will appear.  If you wish to bypass this screen, type in
EASYDOS /N at the DOS prompt and you will go immediately to the menu.

Here is a detailed description of each option on the EasyDos menu and
how to invoke that option:


Erase all .BAK files----Press the letter B at the EasyDos prompt.

You may have noticed that when you use certain word processing or
database management software, any time you update a file the old
version of the file is stored on the disk with a .BAK extension.
After a while, these files start building up and taking up needed
disk space.  You can use EasyDos to get rid of some or all of these
files and thus free up disk space.  Select this option at the EasyDos
prompt, and all of your .BAK files will be listed on the screen.
EasyDos will ask you whether or not to delete without approval.  If
you answer "Y" all of your .BAK files will be deleted and you will be
returned to the menu.  If you answer "N" EasyDos will list your .BAK
files one by one and ask you if it should be deleted.  This is the
preferred way since it avoids accidentally erasing a .BAK file you
wanted to keep.


Rename a file----Press the letter R at the EasyDos prompt.

Use this option to change the name of any file.  Select the option at
the prompt; EasyDos will prompt you for the old filename and the new
filename.  The file will then be given the new filename.  If you try
to rename a file that does not exist or if you choose as a new
a filename one that already exists, EasyDos will display an error
message and return you to the menu.


Directory of disk----Press the letter D at the EasyDos prompt.

This option will display the files in the current directory of the
specified disk drive.  Select the option at the prompt.  EasyDos will
ask you which disk drive to search.  Enter a drive letter and the
files will be listed on the screen.


Change Path----Press the letter P at the EasyDos prompt.

This will allow you to change the current directory.  After you select
the option, EasyDos will prompt you for the new subdirectory.  Enter
the desired subdirectory, separating names with the \ symbol.  To go
to the root directory, enter the \ symbol by itself.  If you enter a
subdirectory that does not exist, EasyDos will display an error
message and return you to the menu.


Copy a file----Press the letter C at the EasyDos prompt.

Use to copy a file from one drive to another or from one file to
another.  EasyDos will prompt you for source filename and destination
filename.  Enter the names and the file will be copied.  If you try
to copy a file that does not exist, an error message will be displayed
and you will be returned to the menu.  If you try to copy to a file
that already exists, EasyDos will ask you whether or not to overwrite
the file.  Simply answer Y or N and EasyDos will respond accordingly.
If there is not enough disk space to store the copied file, EasyDos
will display an error message and abort the copy operation.  Note:
after the copy is complete, the destination file may not be the exact
same size as the source file.  This is because EasyDos copies the
files in 128-Byte sections.  This may cause a few extra bytes to be
added to the end of the file.  Do not be alarmed; the file's integrity
is still intact, and it will behave exactly as the source file.  The
extra bytes will have no effect whatsoever.


Erase a file----Press the letter E at the EasyDos prompt.

This option will erase a file from the disk.  EasyDos will prompt you
for the file to be erased.  Enter the file you want to erase.  EasyDos
will search the disk for the file.  If it finds the file, it will
erase it; if it does not find the file, it will display an error
message.


Change CONFIG.SYS file----Press the letter S at the EasyDos prompt.

The CONFIG.SYS file is used by your computer when you first turn it
on.  DOS will read the file (if it exists--it is not required) and
use it to determine factors such as buffer size, number of files that
can be open at one time, device drivers, etc.  EasyDos will allow you
to change that file at any time by selecting this option.  When you
do so, EasyDos will first display the current CONFIG.SYS file, if it
exists, then allow you to type in a new one.  Simply type in the file
as you would like it to be, then type QUIT.  The word QUIT is not
stored as part of the file.  If there is insufficient disk space to
store the file, EasyDos will display an error message and abort the
operation.


Change AUTOEXEC.BAT file----Press the letter A at the EasyDos prompt.

The AUTOEXEC.BAT file is used by your computer when you first turn it
on.  DOS will read the file (if it exists--it is not required) and
use it to execute any commands or programs you would like to execute
each time you boot your computer.  Common uses include using it to
ask for the date and time and then execute an application such as a
word processor or database management program.  EASYDOS will allow you
to change the AUTOEXEC.BAT file at any time by selecting this option.
When you do so, EasyDos will first display the current AUTOEXEC.BAT
file, if it exists, then allow you to type in a new one.  Simply type
in the file as you would like it to be, then type QUIT.  The word QUIT
is not stored as part of the file.  If there is insufficient disk
space to store the file, EasyDos will display an error message and
abort the operation.


Get Help----Press the letter H at the EasyDos prompt.

Use this option to obtain information about how to use EasyDos and
information on how EasyDos can help you.


Quit----Press the letter Q at the EasyDos prompt.

Use this option to terminate execution of EasyDos and return to the
Disk Operating System.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1176

     Volume in drive A has no label
     Directory of A:\

    CAPP     DOC     10029   1-25-88   2:01a
    CAPP     EXE     21160   1-25-88   2:00a
    CAPPDOC  BAT       159  10-14-88   9:16a
    CATALOG  COM     13605   7-14-88  12:16p
    DABDOC   BAT       165  10-14-88   9:15a
    DABUTIL  ARC     64828  10-13-88   8:15a
    DABUTIL  DOC     16042   7-15-88  10:25p
    DABUTIL  REG      1717   7-15-88   8:20p
    DI       COM     14065   7-14-88  11:04p
    EASYDOS  COM     28539   4-22-88  11:24a
    ENC      COM      9101   7-11-88  12:39p
    EZDO     DOC     34466   1-25-88   2:00a
    EZDO     EXE     36814   1-25-88   1:59a
    EZDOC    BAT       160  10-14-88   9:15a
    FF       COM      8729   7-11-88  12:39p
    FILE1176 TXT      4108  11-14-88   9:53a
    GO       BAT        64  10-14-88   9:11a
    GO       TXT      1618  10-14-88   9:05a
    GO1      TXT       848  10-14-88   9:17a
    HELP     DOC      7043   4-21-88   8:11p
    LD       COM      8947   7-11-88  12:38p
    README   COM     13595   4-22-88  11:24a
    README   DAB      1830  10-13-88   8:15a
    SD       COM     15023   7-14-88  12:13p
           24 file(s)     312655 bytes
                           38912 bytes free
