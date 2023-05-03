---
layout: page
title: "PC-SIG Diskette Library (Disk #2312)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2312/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2312"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PCOPY & PDELETE"

    The DOS COPY command is one most used commands in DOS.  Unfortunately,
    its abilities are very limited and are not sufficient to many disk
    maintenance chores.  PCOPY is similar to the DOS COPY command in that
    it copies file data between disks and hard disk directories but PCOPY
    is greatly superior to DOS COPY in that it provides intelligent file
    selection and processing options.  PCOPY options allow you to use a
    single PCOPY command to perform a function that would require many DOS
    COPY commands and much thought.
    
    In addition to superior file copy functions, PCOPY provides a safer way
    to copy files than is provided by the DOS COPY command.  Copy only
    newer files or update a directory with the contents of another.  PCOPY
    will never overlay a file accidentally.
    
    PMOVE is an option of the PCOPY command used to move files between
    disks and directories on disks.  PMOVE combines the functions of DOS
    COPY and DELETE commands to make moving files easy.  In addition to
    moving files, PMOVE also allows selection criteria to be specified to
    better qualify the files to be moved.
    
    PMOVE automatically determines the environment the move is requested
    for and then determines if the data must be moved or if the file can be
    moved by renaming.  Moving with rename is allowed if the move is to
    another directory on the same disk device.  If a rename move can be
    done, it is much faster than moving the data, it helps to keep from
    fragmenting disk free space, and allows very large files to be moved
    between directories when they could not normally be moved with DOS COPY
    because of insufficient space.
    
    Try PCOPY, the advanced replacement for DOS COPY.
    
    PDELETE is an advanced DELETE command to be used in DOS systems.  It
    may be used in place of the DOS Erase and Delete command or instead of
    it.  Like other Patriquin utilities, PDELETE gives you more control of
    command processing and provides a much safer way to process files.
    PDELETE also provides several features not found with the standard DOS
    command.
    
    Unlike other delete utilities, PDELETE supports DOS paths and
    wildcards.  It keeps you aware of what files are being processed and
    provides an emergency stop feature just in case you have started
    something you feel is wrong.
    
    PDELETE's file selection parameters provide you with numerous options
    for specifying the files to be deleted.  You may select by directory,
    file, date, attribute, size, and even starting and ending filename.
    
    Features:
    
    ~ Advanced file selection.
    
    ~ Emergency STOP by pressing any key.
    
    ~ Delete entire directories and remove them from disk.
    
    ~ Optionally wipe file data from disk during delete to prevent it from
    being recovered by unauthorized person.
    
    ~ Optional verify feature lets you approve each file before it is
    deleted.
    
    ~ Optionally deletes HIDDEN / SYSTEM / READONLY files.
    
    ~ Delete files until specified freespace is available.
    
    ~ Advanced DOS Pattern capability.
    
    ~ Test feature allows you to try a command before actually deleting any
    files.
    
    ~ Deletes from multiple disk drives with a single
    command.
    
    ~ Accepts a list of files to be deleted.
    
    ~ Exclusion capability allows files to be protected from deletion.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2312.TXT

{% raw %}
```
Disk No: 2312                                                           
Disk Title: PCOPY & PDELETE                                             
PC-SIG Version: S1                                                      
                                                                        
Program Title: PCOPY                                                    
Author Version: 8.5C                                                    
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
The DOS COPY command is one of DOSs most used commands. Unfortunately,  
its abilities are very limited and are not sufficient for many disk     
maintenance chores performed by users. PCOPY is similar to the DOS COPY 
command in that it copies file data between disks and hard disk         
directories.  In addition, PCOPY is greatly superior to DOS copy in that
it provides intelligent file selection and processing options.  PCOPY   
options allow you to use a single PCOPY command to perform a function   
that would require many DOS copy commands and much thought.             
                                                                        
In addition to superior file copy functions, PCOPY provides a safer way 
to copy files than is provided by the DOS COPY command.  It allows you  
to copy only newer files or update a directory with the contents of     
another.  PCOPY will never overlay a file accidently.                   
                                                                        
PMOVE is an option of the PCOPY command used to move files between      
disks and directories on disks.  PMOVE combines the functions of DOS    
COPY and DELETE commands to make moving files very easy.  In addition   
to just moving files, PMOVE also allows selection criteria to be        
specified to better qualify the files to be moved.                      
                                                                        
PMOVE automatically determines the environment the move is requested    
for and then determines if the data must be moved or if the file can be 
moved by renaming.  Moving with rename is allowed if the move is to     
another directory on the same disk device.  If a rename move can be     
done, it is much faster than moving the data, it helps to keep from     
fragmenting disk free space, and allows very large files to be moved    
between directories when they could not normally be moved with DOS COPY 
because of insufficient space.                                          
                                                                        
Try PCOPY the advanced replacement for DOS COPY.                        
                                                                        
Program Title: PDELETE                                                  
Author Version: 4.1                                                     
Author Registration: $20.00                                             
Special Requirements: Hard disk.                                        
                                                                        
PDELETE is an advanced Delete command to be used in DOS operating       
systems.  It may be used in place of the DOS Erase and Delete command or
instead of it.  Like other Patriquin utilities, PDELETE gives you more  
control of command processing and provides a much safer way to process  
files.  PDELETE also provides several features not found with the       
standard DOS command.                                                   
                                                                        
Unlike other delete utilities, PDELETE does support DOS paths and       
wildcards.  It keeps you aware of what files are being processed and    
provides an emergency stop feature just in case you have started        
something you feel is wrong.                                            
                                                                        
PDELETE's file selection parameters provide you with numerous options   
for specifying the files to be deleted.  You may select by directory,   
file, date, attribute, size, and even starting and ending filename.     
                                                                        
                                                                        
Features:                                                               
                                                                        
~ Advanced file selection                                               
                                                                        
~ Emergency STOP by pressing any key                                    
                                                                        
~ Delete entire directories and remove them from disk                   
                                                                        
~ Optionally wipe file data from disk during delete to prevent it from  
being recovered by unauthorized person.                                 
                                                                        
~ Optional verify feature lets you approve each file before it is       
deleted                                                                 
                                                                        
~ Optionally deletes HIDDEN / SYSTEM / READONLY files                   
                                                                        
~ Delete files until specified freespace is available                   
                                                                        
~ Advanced DOS Pattern capability.                                      
                                                                        
~ Test feature allows you to try a command before actually deleting     
any files.                                                              
                                                                        
~ Deletes from multiple disk drives with a single                       
command                                                                 
                                                                        
~ Accepts a list of files to be deleted.                                
                                                                        
~ Exclusion capability allows files to be protected from  deletion.     
                                                                        
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
║                <<<<  DISK #2312 PCOPY & PDELETE  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start PCOPY, type: \PCOPY\PCOPY                                      ║
║                                                                         ║
║ To print the documentation for PCOPY, type: COPY \PCOPY\PCOPY.DOC PRN   ║
║                                                                         ║
║ To start PDELETE, type: PDELETE                                         ║
║                                                                         ║
║ To print the documentation for PDELETE, TYPE: COPY PDELETE.DOC PRN      ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## ORDERFRM.DOC

{% raw %}
```

                        Registered PCOPY 8.5c Order Form

        --------------------------------------------------------------------
        VISA/Mastercard orders are only accepted through telephone orders.
        Call Public Software Library: 800-242-4775 or 713-665-7017 to order.
        --------------------------------------------------------------------

        _____ Registration of all Patriquin Utilities with
                includes program disk and User's Guide...........@  $45.00

        _____ Update Service -- in addition to above, send the
              next version automatically when it is available....@ +$15.00

        --------------------------------------------------------------------

        _____ PCOPY     -- File Copy, Move, Backup, Update, more!...$20.00
        _____ PSEARCH   -- Locate files on your disk. Outstanding!..$20.00
        _____ PALERT    -- Warns you of low disk space..............$15.00
        _____ PATTR     -- Manage attributes of DOS files...........$10.00
        _____ PDAILY    -- Automatically execute commands once/day..$10.00
        _____ PDELETE   -- Save space with automatic disk cleanup...$15.00
        _____ PPRINT    -- Advanced file print w/special formats....$15.00

        _____ Update a registered set with new disk and manual -
              show proof of previous registration  SER=_________....$15.00

        _____ Shipping/Handling for orders outside USA, add ........$ 5.00

        _______ Purchase Order Included.
        _______ Please invoice us. (Orders over $100 only)
        _______ Check or money Order (US FUNDS) included

                                 Total amount of my order is:    $________

                  Disk Size (circle one)?    5 1/4     3 1/2
        ===================================================================


        Name: __________________________________________________

        Company: _______________________________________________

        Address: _______________________________________________

                 _______________________________________________

        City: ________________________  State: ________  Zip: __________


        I learned about PCOPY from: _____________________________________

        Send order to: Patri-Soft  P.O. Box 8263  San Bernardino, CA  92412
```
{% endraw %}

## ORDERFRM.TXT

{% raw %}
```
                             PDELETE 4.1 Order Form

        --------------------------------------------------------------------
        VISA/Mastercard orders are only accepted through telephone orders.
        Call Public Software Library: 800-242-4775 or 713-665-7017 to order.
        --------------------------------------------------------------------

        _____ Registration of all Patriquin Utilities
                includes program disk and User's Guide...........@  $45.00

        _____ Update Service -- in addition to above, send the
              next version automatically when it is available....@ +$15.00

        --------------------------------------------------------------------

        _____ PDELETE   -- Save space with automatic disk cleanup...$20.00
        _____ PCOPY     -- File Copy, Move, Backup, Update, more!...$20.00
        _____ PSEARCH   -- Locate files on your disk. Outstanding!..$20.00
        _____ PPRINT    -- Advanced file print w/special formats....$20.00
        _____ PALERT    -- Warns you of low disk space..............$15.00
        _____ PATTR     -- Manage attributes of DOS files...........$10.00
        _____ PDAILY    -- Automatically execute commands once/day..$10.00

        _____ Update a registered set with new disk and manual -
              show proof of previous registration  SER=_________....$15.00

        _____ Shipping/Handling for orders outside USA, add ........$ 5.00

        _______ Purchase Order Included.
        _______ Please invoice us. (Orders over $100 only)
        _______ Check or money Order (US FUNDS) included

                                 Total amount of my order is:    $________

                  Disk Size (circle one)?    5 1/4     3 1/2
        ===================================================================


        Name: __________________________________________________

        Company: _______________________________________________

        Address: _______________________________________________

                 _______________________________________________

        City: ________________________  State: ________  Zip: __________


        I learned about PCOPY from: _____________________________________

        Send order to: Patri-Soft  P.O. Box 8263  San Bernardino, CA  92412

```
{% endraw %}

## ORDERFRM.DOC

{% raw %}
```

                        Registered PCOPY 8.5c Order Form

        --------------------------------------------------------------------
        VISA/Mastercard orders are only accepted through telephone orders.
        Call Public Software Library: 800-242-4775 or 713-665-7017 to order.
        --------------------------------------------------------------------

        _____ Registration of all Patriquin Utilities with
                includes program disk and User's Guide...........@  $45.00

        _____ Update Service -- in addition to above, send the
              next version automatically when it is available....@ +$15.00

        --------------------------------------------------------------------

        _____ PCOPY     -- File Copy, Move, Backup, Update, more!...$20.00
        _____ PSEARCH   -- Locate files on your disk. Outstanding!..$20.00
        _____ PALERT    -- Warns you of low disk space..............$15.00
        _____ PATTR     -- Manage attributes of DOS files...........$10.00
        _____ PDAILY    -- Automatically execute commands once/day..$10.00
        _____ PDELETE   -- Save space with automatic disk cleanup...$15.00
        _____ PPRINT    -- Advanced file print w/special formats....$15.00

        _____ Update a registered set with new disk and manual -
              show proof of previous registration  SER=_________....$15.00

        _____ Shipping/Handling for orders outside USA, add ........$ 5.00

        _______ Purchase Order Included.
        _______ Please invoice us. (Orders over $100 only)
        _______ Check or money Order (US FUNDS) included

                                 Total amount of my order is:    $________

                  Disk Size (circle one)?    5 1/4     3 1/2
        ===================================================================


        Name: __________________________________________________

        Company: _______________________________________________

        Address: _______________________________________________

                 _______________________________________________

        City: ________________________  State: ________  Zip: __________


        I learned about PCOPY from: _____________________________________

        Send order to: Patri-Soft  P.O. Box 8263  San Bernardino, CA  92412
```
{% endraw %}

## PDEL.DOC

{% raw %}
```
                             PDELETE 4.1 Order Form

        --------------------------------------------------------------------
        VISA/Mastercard orders are only accepted through telephone orders.
        Call Public Software Library: 800-242-4775 or 713-665-7017 to order.
        --------------------------------------------------------------------

        _____ Registration of all Patriquin Utilities
                includes program disk and User's Guide...........@  $45.00

        _____ Update Service -- in addition to above, send the
              next version automatically when it is available....@ +$15.00

        --------------------------------------------------------------------

        _____ PDELETE   -- Save space with automatic disk cleanup...$20.00
        _____ PCOPY     -- File Copy, Move, Backup, Update, more!...$20.00
        _____ PSEARCH   -- Locate files on your disk. Outstanding!..$20.00
        _____ PPRINT    -- Advanced file print w/special formats....$20.00
        _____ PALERT    -- Warns you of low disk space..............$15.00
        _____ PATTR     -- Manage attributes of DOS files...........$10.00
        _____ PDAILY    -- Automatically execute commands once/day..$10.00

        _____ Update a registered set with new disk and manual -
              show proof of previous registration  SER=_________....$15.00

        _____ Shipping/Handling for orders outside USA, add ........$ 5.00

        _______ Purchase Order Included.
        _______ Please invoice us. (Orders over $100 only)
        _______ Check or money Order (US FUNDS) included

                                 Total amount of my order is:    $________

                  Disk Size (circle one)?    5 1/4     3 1/2
        ===================================================================


        Name: __________________________________________________

        Company: _______________________________________________

        Address: _______________________________________________

                 _______________________________________________

        City: ________________________  State: ________  Zip: __________


        I learned about PCOPY from: _____________________________________

        Send order to: Patri-Soft  P.O. Box 8263  San Bernardino, CA  92412


















                                  P D E L E T E





                             -------------------------
                             Users Guide and Reference
                             -------------------------





                                  Version 4.1
                                  August 1990








       Questions and support --  Patriquin's BBS  714-369-9766 (data)





                       Copyright 1990 by Norm Patriquin



      PDEL Users Guide/Reference                 Copyright 1990 N. Patriquin
      ----------------------------------------------------------------------


                        Table of Contents



      What is PDELETE . . . . . . . . . . . . . . . . . . . . .   1

      Features  . . . . . . . . . . . . . . . . . . . . . . . .   2

      Command Mode Parameters . . . . . . . . . . . . . . . . .   3

      Setting of default parameters (DOS Environment) . . . . .  12

      Examples  . . . . . . . . . . . . . . . . . . . . . . . .  13

      Registration. . . . . . . . . . . . . . . . . . . . . . .  14

      Problems and Maintenance. . . . . . . . . . . . . . . . .  16

      Version History . . . . . . . . . . . . . . . . . . . . .  17


























                                    i

      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page  1
      ----------------------------------------------------------------------


      What is PDELETE
      ---------------

      PDELETE is an advanced Delete command to be used in DOS operating
      systems.  It may be used in place of the DOS Erase and Delete
      command or instead of it.  Like other Patriquin utilities, PDELETE
      gives you more control of command processing and provides a much
      safer way to process files.  PDELETE also provides several
      features not found with the standard DOS command.

      Unlike other delete utilities, PDELETE does support DOS paths and
      wildcards.  It keeps you aware of what files are being processed
      and provides an emergency stop feature just in case you have
      started something you feel is wrong.

      PDELETE's file selection parameters provide you with numerous
      options for specifying the files to be deleted.  You may select by
      directory, file, date, attribute, size, and even starting and
      ending filename.
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page  2
      ----------------------------------------------------------------------


      Features:
      ---------

        **  Advanced file selection

        **  Emergency STOP by pressing any key

        **  Delete entire directories and remove them from disk

        **  Optionally wipe file data from disk during delete to
            prevent it from being recovered by unauthorized
            person.

        **  Optional verify feature lets you approve each file
            before it is deleted

        **  Optionally deletes HIDDEN / SYSTEM / READONLY files

        **  Delete files until specified freespace is available

        **  Advanced DOS Pattern capability.  *TEST*.*                       |
                                                                             |
        **  Test feature allows you to try a command before                  |
            actually deleting any files.                                     |
                                                                             |
        **  Deletes from multiple disk drives with a single command          |
                                                                             |
        **  Accepts a list of files to be deleted.                           |
                                                                             |
        **  Exclusion capability allows files to be protected from           |
            deletion.                                                        |

      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page  3
      ----------------------------------------------------------------------

      Command Parameters
      ------------------

      PDELETE allows several command parameter switches to be specified
      to customize the process.  All these parameters are optional.
      The command format and switch parameters are described below.  A
      quick review of command parameters is always available by              s
      entering the PDEL command with no parameters.

      COMMAND FORMAT:

      PDEL    filespec,filespec,filespec  [ (/ switches) ]

      filespec  Enter a DOS file specification.  Pathnames and
                standard DOS wildcard characters are allowed.

                Multiple file specifications may be provided as shown in     |
                the above example.  Separate each filename pattern with      |
                a single comma.  For example:                                |
                                                                             |
                       PDEL *.BAK,*.BK!,*.TMP                                |

                Special pattern selection like *DISK*.* may be specified.
                *DISK*.* would select all files  that  have  the  chars
                'DISK' anywhere in the first portion of  the  filename.
                *DI*S*K*.* type specification also works.

                As an alternative, a file containing a list of input         |
                files may be supplied.  Create a file containing lines       |
                with a filename or complete pathname on each line.           |
                Provide this filename as the source filename to PDEL         |
                and add an @ character before the name.  The list of         |
                files will be processed as if they were all specified on     |
                the input command line.  When the /S parameter is            |
                specified, an input filelist may only contain file           |
                names.  It may not contain directory names.                  |
                                                                             |
                For file list processing,  PDEL understands the output       |
                of the DOS DIR command.   You may use the  DOS               |
                redirection feature to direct DIR output to a file,          |
                edit the file to add or remove entries, and then             |
                provide this to PCOPY as input.  For example:                |
                                                                             |
                   DIR A: >DIRLIST                                           |
                   (edit dirlist)                                            |
                   PDEL @DIRLIST B:                                          |
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page  4
      ----------------------------------------------------------------------

      /A        Archive - Selects only files that have been marked
                updated by DOS.  This flag is updated by DOS whenever
                a files is processed with an intent to change or
                create new data.

      /BA       Batch file processing.  PDEL always check to determine if the
                user has pressed a key to pause processing.  This check
                can interfere with programs that store keystrokes in the
                keyboard buffer for subsequent processing.  The /BA parameter
                sets no-windows mode and disables the key press check to leave
                stored keystrokes undisturbed.


      /BW       Forces PDEL to use  monochrome colors even when  it detects a
                color display environment.    (Black & White)


      /C        Overrides /NC when /NC is placed in the DOS environment
                variable.  /C indicates to ask before deleting any files
                if a file pattern of *.* is specified.


      /C2 /C3
             Specify /C2 or /C3 to  display the window processing screen
             in an alternative  color  scheme.   To  make  this  color
             change permanent,  specify  the  parameter  in  the  DOS
             environment variable.
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page  5
      ----------------------------------------------------------------------

      /D:[(]xxx Date.  Select files based on the relationship between
         [)]    their last update date and the date specified.  This
         [=]    parameter includes a date or number of days value.
                It may also contain a modifier that reverses or
                modifies the use of the date specified.

                When xxx contains a date the date is compared to the
                last update date of the file.  The last update date
                of the file is the date contained in its directory
                entry.  The file is selected if the condition specified
                by the condition modifier is met.  The condition
                modifier meanings are:

                  '(' =  Select files whose date is older than the
                         date specified.

                  ')' =  Select files whose date is newer than the
                         date specified.

                  '=' =  Select files whose date is equal to the date
                         specified.

                If the condition modifier is not specified, ')' is
                assumed.

                Date values may be specified in any of the following
                formats:

                    MM/DD/YY   MM-DD-YY   DDMMMYY
                    12/31/80   12-31-80   31DEC80

                If xxx contains a numeric value, that positive number
                is used to calculate a date value a number of days
                prior to the current date.  Then that date is used
                as in the calculation above.

                Example:

                /D:(1JAN86  - Process files updated before 1JAN86
                /D:)1JAN86  - Process files updated after 1JAN86
                /D:=1JAN86  - Process files updated 1JAN86
                /D:(5  - Process files modified prior to 5 days ago
                /D:)5  - Process files modified within the last 5 days
                /D:=5  - Process files modified 5 days ago
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page  6
      ----------------------------------------------------------------------

      /DI       Delete the disk DIrectory specified in the command.
                This will remove the directory, all files within
                it and all the directories and files subordinate
                to it.

                Only use this as a stand alone parameter.  Use a
                command like the following one to remove a directory
                from your disk:

                   PDEL \OLDDIR /DI        PDEL *.*/DI

                        --  or  --

                   PDEL \OLDDIR\*.* /DI


        /DR:xxx
             Use to process multiple disk drives.  Processing will  attempt |
             to delete the specified files from all drive letters  provided |
             with the /DR:xx parameter.                                     |
                                                                            |
             For example, the following command  will  delete  *.BAK  files |
             from hard disks C:, D:, and E:.                                |
                                                                            |
                PDEL *.BAK/DR:CDE                                           |


      /EQ       Exit PDEL without user intervention.  Before PDEL exits     |
                window operation, it requests you to press any key.         |
                This parameter bypasses this request so you can use         |
                PDEL in DOS batch files.                                    |


      /EX    Exclude files.  The exclude facility allows you to  provide    |
             a list of pathname and filename specifications that  are       |
             to  be excluded from processing.                               |

             The exclude facility is implemented with two  actions.         |
             First, you will need  to  create  an  exclude specification    |
             file  and place it in the same directory  where  PPDEL.EXE     |
             is installed  on your hard disk.  This file will contain       |
             the names of  all  the files and paths to be excluded.         |
             Name the file PDEL.EXC.                                        |

             You may specify DOS pattern names to exclude groups  of        |
             files with a single specification. Like DOS, use the '*' to    |
             indicate the last part of a filename or filename extension     |
             may  be  any set of characters.  Also like DOS, use  the       |
             '?'  to  indicate that any single position of a filename       |
             may be any character.                                          |
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page  7
      ----------------------------------------------------------------------

             In addition  to  DOS,  two  additional  pattern  features      |
             are available.  You may place an '*' anywhere in the           |
             filename  to indicate any set of characters may exist in       |
             this point in  the name.  For pathnames, you may place an      |
             '**' at the  end  of  a directory path specification  to       |
             indicate  the  specification applies  to  the  specified       |
             directory   and  all  subordinate directories.  Using '**',    |
             you can exclude an entire path  with a single                  |
             specification.                                                 |


             Following are examples:                                        |
                                                                            |
               1.    *.EXE                                                  |
               2.    *.COM                                                  |
               3.    TEST*.*                                                |
               4.    *TEST*.*                                               |
               5.    DO?FIX.*                                               |
               6.    PC*XX.*                                                |
               7.    C:\DOS\*.*                                             |
               8.    \TEST\*.*                                              |
               9.    D:\GAMES**\*.*                                         |
                                                                            |
             Explanations for the above examples:                           |
               1.  Excludes all filenames  with  the  extension  .EXE       |
                   from processing.                                         |
                                                                            |
               2.  Excludes all filenames ending with extension .COM.       |
                                                                            |
               3.  Excludes all filenames beginning with the letters        |
                   "TEST" from processing.                                  |
                                                                            |
               4.  Excludes all  filenames  having  the  characters         |
                   "TEST" anywhere in the first portion of the filename.    |
                                                                            |
               5.  Exclude files having 'DO' as the first 2  characters     |
                   of the filename,  and  'FIX'  as  the  4th,  5th,        |
                   and  6th filename characters.  The 3rd character of      |
                   the  filename may be any character.                      |
                                                                            |
               6.  Exclude  files  having  a  name  beginning  with  the    |
                   2 characters  PC  and  where  the  first  portion  of    |
                   the filename ends with the characters  'XX'.   Any  0    |
                   to  4 characters may exist between the 'PC' and  'XX'    |
                   in  the first portion of the filename.                   |
                                                                            |
               7.  Exclude all files from the DOS directory on drive C:.    |
                                                                            |
               8.  Exclude all files from the TEST  directory  existing     |
                   on any drive searched.                                   |
                                                                            |
               9.  Exclude all files from the D:\GAMES\ directory and       |
                   also exclude all files and  directories  subordinate     |
                   to  the GAMES directory.                                 |
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page  8
      ----------------------------------------------------------------------

             Activating exclude --                                          |

                Exclude will  only  be  functional  when  the  /EX          |
                command parameter is specified.  When /EX is  specified,    |
                you  must have a valid exclude file.  PDEL will not         |
                continue without one.   If  you  wish  exclude  to  be      |
                active   during  all executions,  specify  /EX  as  part    |
                of   the   PDEL=  DOS environment variable.  See later      |
                in the documentation for a description of this feature.     |


      /F:file   First.  Indicates that processing is not to start until
                the specified full filename is encountered in the
                scan of the directory.


      /FS:nnnn  Freespace.  PDELETE will delete files as long as
                there is less than nnnn thousand (nnnn * 000)
                of free space available on the disk.  This is very
                helpful for cleaning up disks but retaining as many
                files as possible.


      /L:file   Last.  Indicates that processing is to stop after
                the specified full filename is encountered in the
                scan of the directory. The file specified will be
                processed if it matches selection criteria.


      /M        Stop screen from scrolling from scrolling past the end
                without user intervention (MORE).


      /NC       PDELETE asks "Are you Sure?" when you request files
                to be deleted with "*.*" patterns.  To ignore this
                question specify /NC.  Place this in the DOS environment
                variable with    SET PDEL=/NC   to prevent PDEL from
                ever asking if you are sure.


      /NT       Prevent ending statistics about freespace and files
                deleting from printing.


      /NS       sets all sounds generated to the speaker OFF.
                (No Sound)
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page  9
      ----------------------------------------------------------------------

      /NW       No Windows - Do not  use windows during processing. All
                screen output will be done through standard DOS
                facilities.


      /O:filename-list                                                       |
                Specify a list of filename patterns that are  to be          |
                Omitted  (excluded)  from  PDEL  processing.  If             |
                multiple filename patterns are specified, separate them      |
                with commas.                                                 |
                                                                             |
                For example:  /O:*.BAK,*.EXE,TEST*.*                         |
                                                                             |
                An alternate form of the /O parameter allows all files       |
                but the original filename pattern to be deleted.  Specify    |
                /O without any filename.  FOr example, to delete all files   |
                except *.EXE files  ===>  PDEL *.EXE /O                      |


      /P        Pause before each file is updated to allow user
                to approve or reject the action for each file.


      /RE       Use the /RE parameter to indicate any file with special      |
                attributes is also to be removed from the disk.  Files       |
                with HIDDEN, SYSTEM, or READONLY attributes will be          |
                processed.                                                   |


      /RO       Include files marked with DOS readonly attribute.
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page 10
      ----------------------------------------------------------------------

      /S        System --  If a source  directory is  supplied, that
                directory and  all subordinate  directories will be
                searched for files to delete.  If no source directory is
                specified, all directories on the disk will be
                searched for the specified filename pattern to delete.


      /SH       Include files marked with DOS Hidden attribute.  Normally
                PDELETE will bypass these files.


      /SF       Include files marked with DOS System attribute.


      /SZ: [(] [)]  nnn    Select a file based on its size.  The
                left paren indicates that files less than the
                indicated size are to be selected.  The right
                paren indicates to select files greater than the
                size.  If right or left paren are not specified,
                a left paren is assumed.  Following are examples.

                /SZ:100    --  Select files less than 100 characters
                /SZ:(100   --  Select files less than 100 characters
                /SZ:)100   --  Select files greater than 100 characters


      /T        Test the command.  Use this switch when you
                would like to test the command entered without
                actually updating any files.

                This is one of the best features of PDEL.  Since PDEL is     |
                so powerful, the /T parameter is provided to allow you       |
                try any command in a simulate mode before actually           |
                deleting any files from your disk.  Provide the /T           |
                parameter with any PDEL command to get a trial run           |
                without having any files deleted.                            |
                                                                             |
                For example:  PDEL *.BAK/T/S  will search all                |
                directories in the current disk for *.BAK filers and         |
                will show what files would be deleted if this same           |
                command was run without the /T parameter. for a              |


      /TF       Like test but after test operation is complete you will
                be asked if delete is actually to be done. (Test First)

                The test first allows you to try a command and then          |
                immediately execute the command again without the test       |
                option.  It is a way to perform the test and live            |
                runs using a single command.                                 |
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page 11
      ----------------------------------------------------------------------

      /W        Forces window operation.  Since PDEL defaults to window      |
                operation, this parameter is only useful when you have       |
                previously deactivated window operation by placing /NW       |
                in the PDEL= DOS environment variable.                       |


      /WI       For data security, erase all disk areas that
                contain the file when it is deleted.  This
                will prevent unauthorized users from
                recovering the file or examining its data
                by using special disk utilities.


      /WH       PDELETE will indicate to you WHy files did not get
                processed. Normally PDELETE will not tell you why or
                when if a file is bypassed.

                Use /WH when you want to determine why PDEL has not          |
                deleted a file you felt it should.  /WH causes               |
                PDEL to show why it bypassed processing for any files.       |
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page 12
      ----------------------------------------------------------------------

        Setting of default parameters (DOS Environment)
        -----------------------------------------------

        Default parameters are parameters that do  not need to be            |
        specified each  time PDEL is started.  Any  PCOPY parameter may      |
        be specified as a default parameter.                                 |
                                                                             |
        Use the DOS SET command to specify the parameter name  and           |
        contents to be used by PDEL each time it is started.  The            |
        following example indicates that PDEL is always to assume /NC        |
        and /NW are specified:                                               |
                                                                             |
                SET PDEL=/NC/NW                                              |
                                                                             |
        Once this DOS command is issued, each subsequent use of PDEL         |
        will operate as if these  parameters have been specified on  the     |
        command line.  The SET  command is most commonly placed in the       |
        AUTOEXEC.BAT file so it may be in effect every time your machine     |
        is started.                                                          |
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page 13
      ----------------------------------------------------------------------

      Examples:
      ---------

         Delete all *.BAK files on current default drive

             PDEL *.BAK /S



         Delete all *.BAK files over 30 days old

             PDEL *.BAK /S/D:(30



         Remove directory \ACCTING1 from drive a:

             PDEL A:\ACCTING1 /DI


      Bonus features for registered users
      -----------------------------------

      To encourage users to register, the following "bonus" features are     |
      made available only to registered users.  When you register your       |
      use of this utility by completing the registration form and            |
      sending it in with the requested fee, you will soon receive            |
      special codes to unlock these bonus features for your use.  These      |
      unlocking codes will work for the current and all future versions      |
      of the utility.                                                        |
                                                                             |
      I apologize for having to implement locked out features, but after     |
      5 years of experience of developing Shareware it is clear that         |
      most users will not register utility software without having           |
      something to encourage them. The bonus features provide a small        |
      reward for those who do take the time to register.                     |
                                                                             |
         1. /DR  - Ability to process multiple drives                        |
         2. /FS  - Ability to delete until xx freespace available            |
         3. /O   - Ability to Omit file specifications from processing       |
         4. Use of environment specification to contain parameter options    |

      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page 14
      ----------------------------------------------------------------------

       Registering The Utilities
       -------------------------

       PDEL is distributed under the Shareware concept. This allows
       users to evaluate software for a short time to determine if it is
       useful to them. If you decide the software is of value to you,
       you are required to register it.

       This concept allows for quality software to be distributed at a
       reasonable cost. Hundreds of hours of my time has been invested
       in PDEL. Continued registration will justify the continued
       upgrading of this utility to insure it remains up to date with
       current technology. In any case, I do greatly appreciate all
       users that care enough to register. I try to provide the best
       possible software for all you faithful supporting users.

       You may use the order form on the next page when registering
       PDEL.

       Send registration requests to:

            Patri-Soft
            P.O. Box 8263
            San Bernardino, CA  92412

       The registration charge is a one time fee that entitles you to
       all future versions of the product. These may either be obtained
       from normal Shareware sources or from me. I am not able to
       automatically send product updates to registered users. It is
       impossible to provide automatic upgrades at the low costs of
       these utilities.
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page 15
      ----------------------------------------------------------------------

                             PDELETE 4.1 Order Form

        --------------------------------------------------------------------
        VISA/Mastercard orders are only accepted through telephone orders.
        Call Public Software Library: 800-242-4775 or 713-665-7017 to order.
        --------------------------------------------------------------------

        _____ Registration of all Patriquin Utilities
                includes program disk and User's Guide...........@  $45.00

        _____ Update Service -- in addition to above, send the
              next version automatically when it is available....@ +$15.00

        --------------------------------------------------------------------

        _____ PDELETE   -- Save space with automatic disk cleanup...$20.00
        _____ PCOPY     -- File Copy, Move, Backup, Update, more!...$20.00
        _____ PSEARCH   -- Locate files on your disk. Outstanding!..$20.00
        _____ PPRINT    -- Advanced file print w/special formats....$20.00
        _____ PALERT    -- Warns you of low disk space..............$15.00
        _____ PATTR     -- Manage attributes of DOS files...........$10.00
        _____ PDAILY    -- Automatically execute commands once/day..$10.00

        _____ Update a registered set with new disk and manual -
              show proof of previous registration  SER=_________....$15.00

        _____ Shipping/Handling for orders outside USA, add ........$ 5.00

        _______ Purchase Order Included.
        _______ Please invoice us. (Orders over $100 only)
        _______ Check or money Order (US FUNDS) included

                                 Total amount of my order is:    $________

                  Disk Size (circle one)?    5 1/4     3 1/2
        ===================================================================


        Name: __________________________________________________

        Company: _______________________________________________

        Address: _______________________________________________

                 _______________________________________________

        City: ________________________  State: ________  Zip: __________


        I learned about PCOPY from: _____________________________________

        Send order to: Patri-Soft  P.O. Box 8263  San Bernardino, CA  92412
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page 16
      ----------------------------------------------------------------------
                          P D E L E T E   4.1

      Problems and Maintenance
      ------------------------

      For online support -- Call Patriquin's BBS 714-369-9766

      I welcome all comments or enhancement suggestions. Please
      document each item clearly and provide printed examples if
      possible.  Please be sure to include this form with all requests,
      it will help to make sure we can provide you with the best
      possible service.


      Name: __________________________________________________________

      Company: _______________________________________________________

      Address: _______________________________________________________

               _______________________________________________________

      City: __________________________________  State: _______________

      Zip: ______________________________

      Telephone: _______ / ________________________ (Home / Work)


      Date: _________________________

      Description of problem or enhancement:

      ________________________________________________________________

      ________________________________________________________________

      ________________________________________________________________

      ________________________________________________________________


      Suggested solution:

      ________________________________________________________________

      ________________________________________________________________
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page 17
      ----------------------------------------------------------------------

                            PDELETE Version History

      Program Maintenance:
      --------------------

      Version 1.0     October 10, 1986

      Version 1.2     January 6, 1987
                   --  Corrected bug that sometimes incorrectly
                       processed filenames without extension names.
                   --  Added /FS parm to delete until spec freespace
                       is available.

      Version 2.1     June 7, 1987
                   --  Added color support
                   --  Added freespace display and improved messages

      Version 2.2     December 1, 1987
                   --  Correct a pattern matching problem that caused
                       some files to be skipped when they should have
                       been processed.

      Version 2.3     May 3, 1988
                   --  Add /TF (test first) parameter to allow real
                       delete after test specified

      Version 2.4     May 12, 1988
                   --  /TF was forgetting what drive to process on.
                       deleted incorrect files.

      Version 2.5     May 29, 1988
                   --  If a pathname without wildcard characters * ?
                       was specified with the /S parameter, not all
                       directories would be searched.
                   --  Added display of directories being scanned
                   --  Corrected colors after processing was
                       interrupted and restarted.
                   --  /F: and /L: parameters now accept wildcard
                       characters in the filenames

      Version 2.6     June 2, 1988
                   --  /TF parameter was being ignored with /DI parm
                   --  When /TF parm specified, do not ask if ok to
                       continue after an error has been found.
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page 18
      ----------------------------------------------------------------------

      Version 2.7     November 30, 1988
                   --  /TF parameter was being ignored with /DI parm
                   --  If a space was entered between the drive letter
                       and the name of the file to be deleted, pdelete
                       would ignore the name and delete all files on
                       the drive. (fixed)
                   --  Ability to process any number of directories.

      Version 2.8     December  2, 1988
                   --  Version 2.7 has a serious problem that prevented
                       the /S directory scan option from working.
                   --  Allow key press to pause scan of directories when
                       no matching files are being found.
                   --  Correct problem where directory scan function
                       would not scan directories if no wildcard (pattern)
                       characters (* or ?) were in filename to be deleted and
                       it did not exist in the current directory.

      Version 2.9     January 17, 1989
                   --  Version 2.8 directory scan was skipping directories
                       when the root directory contained no files.

      Version 2.9a    February 6, 1989
                   --  When /B:filename/TF was specified, the test would work
                       fine but the real delete would delete all files in the
                       directory.

      Version 2.9b    February 16, 1988
                   --  Special wildcard pattern matching capability added.
                       *DISK*.* will select all files that have the chars
                       'DISK' in the primary part of the filename.
                       *DI*S*K*.* also works.
                   --  Add feature to take environment variable and add to
                       PDEL command line data.   For example:  SET PDEL=/P
                       Will cause all PDEL commands to assume /P is specified.

      Version 2.9c    March 22, 1989
                   --  /O (omit) option did not work in version 2.9b. Fixed.
                   --  Support longer DOS environment variable string - 500

      Version 3.0     May 12, 1989  (Major release)
                   --  Support of full windowed operation
                   --  "Are you sure?" message added when *.* specified.
                   --  /NS /NM /SH /W /NW /C /NC parms added
                   --  Only print dir name when file deleted from it
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page 19
      ----------------------------------------------------------------------

      Version 3.2     July 4, 1989
                   --  Improved /S parm.  When dir name specified with /S,
                       only that dir and subordinates will be processed.
                   --  Corrected line highlighting in 3.0
                   --  Corrected PDEL lockup when invalid command entered
                   --  When /BA specified do not stop when key pressed
                   --  /DI - delete even if dir has readonly hidden system
                       files
                   --  /DI - improve display
                   --  /DI - Correct errors.
                   --  /DI - allow delete of current directory
                   --  /RE option is obsolete.  Assumed if /SF /SH /RO
                       specified.

      Version 3.3     July 8, 1989
                   --  fixed (again) problems causing invalid commands to
                       lock up PDELETE
                   --  Show directory being searched in window when /S is
                       used to search for files across directories.
                   --  Added /WH parameter to show while files are not
                       processed.
                   --  Added /NT parm to allow user to prevent ending
                   --  Improved "Are you sure?" msg to show delete pattern
                   --  Added --> to delete msgs for clarity in /NW mode

      Version 3.3c    July 27, 1989
                   --  Corrected Begin msg with /NW specified
                   --  Added --> to /NW delete lines for readibility
                   --  Improve "are you sure" msg
                   --  Add help windows
                   --  Remove copyright msg from /nw executions
                   --  Correct system lockup when /NM /DI specified
      PDEL Users Guide/Reference     Copyright 1990 N. Patriquin     Page 20
      ----------------------------------------------------------------------

      Version 4.0     July 29, 1990
                   --  Add exclude file PDEL.EXC.  See /EX parameter.
                   --  Added /DR:CDE multiple drive parameter
                   --  Added @filelist capability
                   --  Added ability to enter multiple filenames on
                       command line with , separators.
                   --  /NM now suppresses all messages except errors
                   --  FIX - In test mode the /DI parameter would remove
                       directories that did not contain any files.
                   --  Corrected problem where System/Hidden files could
                       not be deleted when /REset specified.
                   --  Added emergency stop (press any key) to /DI
                       processing
                   --  Old /EX (end quick) parameter changed to EQ for
                       consistency with PCOPY
                   --  /EX (exclude) parameter allows exclude file
                   --  /O: parameter can work as before or with list of
                       pattern files.  /O:file*.*,file2*.*,file3*.*

      Version 4.1     August 2, 1990
                   --  Added registration options to PDELETE to help
                       determine if worthwhile to enhance.  Only about
                       1 registrations a month were received.

```
{% endraw %}

## WHATSNEW.TXT

{% raw %}
```
WHATSNEW
--------

This file lists the most current changes to PDELETE for your quick
reference.  The PDEL.DOC file contains a complete history of all versions
of PDELETE.

      Version 4.0     July 29, 1990
                   --  Add exclude file PDEL.EXC.  See /EX parameter.
                   --  Added /DR:CDE multiple drive parameter
                   --  Added @filelist capability
                   --  Added ability to enter multiple filenames on
                       command line with , separators.
                   --  /NM now suppresses all messages except errors
                   --  FIX - In test mode the /DI parameter would remove
                       directories that did not contain any files.
                   --  Corrected problem where System/Hidden files could
                       not be deleted when /REset specified.
                   --  Added emergency stop (press any key) to /DI
                       processing
                   --  Old /EX (end quick) parameter changed to EQ for
                       consistency with PCOPY
                   --  /EX (exclude) parameter allows exclude file
                   --  /O: parameter can work as before or with list of
                       pattern files.  /O:file*.*,file2*.*,file3*.*

      Version 4.1     August 2, 1990
                   --  Added registration options to PDELETE


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2312

     Volume in drive A has no label
     Directory of A:\

    WHATSNEW TXT      1413   8-15-90   4:45p
    PDEL     EXE     77524   8-03-90  12:14a
    PDEL     DOC     45882   8-03-90   9:15a
    ORDERFRM TXT      2368   8-03-90  12:16a
    GO       BAT        28  10-04-90   5:21a
    GO       TXT       958  10-09-90   2:30p
    FILE2312 TXT      7179  10-09-90   3:36p
    PCOPY        <DIR>    
            8 file(s)     135352 bytes

     Directory of A:\PCOPY

    .            <DIR>    
    ..           <DIR>    
    ORDERFRM DOC      2377   7-03-90   9:27a
    PCOPY    DOC     77537   7-03-90   9:27a
    PCOPY    EXE    115272   7-03-90   9:27a
    PCREADME          1530   7-03-90   9:27a
    PMOVE    BAT        29   7-03-90   9:27a
    WHATSNEW          2594   7-03-90   9:27a
            8 file(s)     199339 bytes

    Total files listed:
           16 file(s)     334691 bytes
                           19456 bytes free
