---
layout: page
title: "PC-SIG Diskette Library (Disk #1869)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1869/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1869"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BAKTRACK"

    BAKTRACK provides an easy way to back up hard disk files to floppy
    diskettes.  It is smart enough to make small daily backup chores fast
    and painless.  BAKTRACK performs both full and partial backups, with
    directories and files easily excluded from the backup.
    
    An index is maintained on your hard disk and on the backup diskettes.
    The index is a convenient navigation tool for locating files on the hard
    disk or the backup diskettes.  The index allows fast recovery of one or
    more files.  After making a full backup, daily partial backups are fast
    and easy since BAKTRACK keeps track of what files have changed or added
    since the last backup and only backs up those files.
    
    This program only works from the command line -- there are no menus.
    BAKTRACK can be set to create a complete backup, prompted partial backup
    by looking for the DOS archive bit on a file, or a partial backup as
    specified by a control file named at startup.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BAKTRACK.DOC

{% raw %}
```






         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
                           BAKtrack -- Version 1.5
         
                 (C) Copyright 1989 Rockford Technologies Inc
                             All Rights Reserved
         
         
         
         
         
         
                          Rockford Technologies Inc
                              5126 Potomac Drive
                             Rockford, IL  61107
                                (815)226-8439
         

























         BAKtrack V1.5        Rockford Technologies Inc        Page 2


         
         
         
         
         
                              Table of Contents
         
         
              Copyright Notice ................................. 3
              Disclaimer of Warranty ........................... 3
              Registration Information.......................... 3
              Restricted Permission to Copy .................... 3
         
           I. Introduction ..................................... 4
          II. Installing and Running BAKtrack .................. 5
         III. File Exclusion ................................... 6
          IV. Using the Index File ............................. 7
           V. File Recovery .................................... 8
         
              Release Notes .................................... 9
              BAK Program Manual Page ......................... 10
              RES Program Manual Page ......................... 12
         
































         BAKtrack V1.5        Rockford Technologies Inc        Page 3


                               Copyright Notice
         
         BAKtrack is not a public domain program.  The manual and the
         software described by the manual are protected by copyright
         laws.
         
                 (C) Copyright 1989 Rockford Technologies Inc
                             All Rights Reserved
         
         
                            Disclaimer of Warranty
         
         THIS SOFTWARE AND MANUAL ARE SUPPLIED "AS IS" AND WITHOUT
         WARRANTIES AS TO PERFORMANCE OR MERCHANTABILITY.
         
         THIS PROGRAM IS SUPPLIED WITHOUT ANY EXPRESS OR IMPLIED
         WARRANTIES WHATSOEVER.  BECAUSE OF THE DIVERSITY OF
         CONDITIONS AND HARDWARE UNDER WHICH THIS PROGRAM MAY BE
         USED, NO WARRANTY OF FITNESS FOR A PARTICULAR PURPOSE IS
         OFFERED.
         
         IN NO EVENT WILL ROCKFORD TECHNOLOGIES INC BE LIABLE FOR
         CONSEQUENTIAL, INCIDENTAL, INDIRECT, OR OTHER DAMAGES
         ARISING OUT OF THE USE, OR INABILITY TO USE, THESE PROGRAMS,
         EVEN IF ROCKFORD TECHNOLOGIES INC HAS BEEN ADVISED OF THE
         POSSIBILITY OF SUCH DAMAGES OR CLAIM.
         
         
                           Registration Information
         
         To become a registered user of BAKtrack, send Fifteen
         Dollars ($15.00) to:
         
             Rockford Technologies Inc
             5126 Potomac Drive
             Rockford, IL 61107
         
         In addition to software update notices, you will receive the
         latest version of BAKtrack and two additional programs to
         help with backup chores.  One program interactively builds a
         backup control file.  The other will tell you how many
         diskettes are required to perform a backup.
         
         
                        Restricted Permission to Copy
         
         Rockford Technologies Inc grants permission to copy and
         distribute diskettes containing BAKtrack software and
         documentation.  Distribution fees may be charged but may not
         exceed six dollars ($6).





         BAKtrack V1.5        Rockford Technologies Inc        Page 4


         I. Introduction
         
         BAKtrack provides a simple and easy way to back up hard disk
         files to floppy diskettes.  It is smart enough to make daily
         backup chores fast and painless.  BAKtrack provides the
         following features:
         
             o  Performs both full and partial backups.
             o  All backup files are current.  During partial backups
                non-current files are removed from the existing
                backup diskettes and replaced by the latest version.
             o  Directories and files may easily be excluded from the
                backup.
             o  The format of files does not change during backup so
                that standard DOS utilities can be used to examine
                and recover backup files.  Files can be copied,
                typed, or executed from the backup diskettes.
             o  An index is maintained on your hard disk and on the
                backup diskettes.  The index is a convenient
                navigation tool for locating files on the hard disk
                or the backup diskettes.
             o  The index allows fast recovery of one or more files.
         
         Rockford Technologies hopes that you find this software
         useful.  We use the software daily because it is simple to
         operate, quickly performs daily backups, and saves our data
         in a sensible fashion.  You are encouraged to report
         software problems and submit enhancement ideas.



























         BAKtrack V1.5        Rockford Technologies Inc        Page 5


         II. Installing and Running BAKtrack
         
         The distribution diskette contains the following files:
         
             README.DOC      Latest and greatest information
             BAKTRACK.DOC    This documentation
             BAK.EXE         BAKtrack backup program
             RES.EXE         BAKtrack restore program
             FULLBAK.BAT     Procedure to perform a full backup
             PARTBAK.BAT     Procedure to perform a partial backup
         
         
         To install BAKtrack on your hard disk, copy the .EXE files
         to a directory on the DOS PATH.  For example, to place the
         software in a directory named C:\USR\BIN, put the BAKtrack
         diskette in drive A: and issue the following command:
         
             COPY A:*.EXE C:\USR\BIN
         
         Two procedures are provided to make it easy to perform
         backups.  To use them, copy the files FULLBAK.BAT and
         PARTBAK.BAT to a directory on the DOS PATH.  These
         procedures assume that all files on drive C: will be backed
         up to drive A:.  The procedures create an index file in the
         root directory named C:\BAK.NDX.  You must perform a full
         backup before you can perform a partial backup.  To do a
         full backup with these procedures, type the following
         command at the DOS prompt:
         
             FULLBAK
         
         BAKtrack will prompt for formatted diskettes to be placed in
         drive A:.  Backup diskettes are numbered and should be
         labeled accordingly.  You should have approximately 30
         formatted diskettes for every 10 megabytes of disk space
         used on the hard drive.  After the backup is complete,
         BAKtrack will copy the index file to a diskette called the
         index disk.  Keep the index on a separate diskette.
         
         After making a full backup, daily partial backups are fast
         and easy.  At the DOS prompt issue the following command:
         
             PARTBAK
         
         BAKtrack will locate the files which have been modified
         since the last backup and replace them on the existing
         backup diskettes.  All new files will also be copied to the
         backup diskettes.  You should have additional formatted
         diskettes ready to handle any new files.
         





         BAKtrack V1.5        Rockford Technologies Inc        Page 6


         In order to use more advanced features of BAKtrack, you need
         to learn how to run the BAK program.  You may wish to
         exclude some files and directories from the backup
         procedure, or you may want to put the index file in a
         different location on the hard disk.  The FULLBAK.BAT and
         PARTBAK.BAT procedures may be modified to perform these
         tasks.
         
         
         III. File Exclusion
         
         BAKtrack allows files and directories to be excluded from
         the backup diskettes.  A control file may be specified to
         tell BAKtrack what files should and should not be backed up.
         The control file may be produced with any editor which can
         create ASCII text files.  Each line in the control file is a
         complete directory name, a complete file name, or a wild
         card file name.  The character in the first column of each
         line indicates the operation to perform on the file or
         directory.  A minus character (-) tells BAKtrack to exclude
         the file(s) or directory from the backup diskettes.  Any
         other character tells BAKtrack to back up the file or
         directory.  When a directory is excluded from the backup,
         all the files in the directory will be excluded.
         
         Sometimes only some files in a directory need to be backed
         up.  This can be accomplished by excluding the directory and
         then including the files that need to be backed up.  As an
         example, assume that you have purchased a popular software
         product which installs over one hundred files in the
         directory C:\POPULAR\PRODUCT.  Most of the files never
         change and are easily recovered from the product
         distribution diskettes.  There are, however, three
         configuration files which are difficult to reproduce and
         represent hours of work configuring the system the way you
         like it.  The following control file would let you back up
         the configuration files without wasting time and disk space
         on the product files:
         
             -  C:\POPULAR\PRODUCT
                C:\POPULAR\PRODUCT\CONFIG1.DAT
                C:\POPULAR\PRODUCT\CONFIG2.DAT
                C:\POPULAR\PRODUCT\CONFIG3.DAT
         
         The first line tells BAKtrack to ignore files in the
         C:\POPULAR\PRODUCT directory.  The remaining lines
         explicitly include files in the directory and cause the
         files to be backed up.
         






         BAKtrack V1.5        Rockford Technologies Inc        Page 7


         BAKtrack also lets you exclude entire classes of files by
         using DOS wild card file names.  For example, to exclude all
         temporary files which have a file extension of .TMP, place a
         line in the control file which looks like this:
         
             -  *.TMP
         
         All DOS wild card patterns are supported.  You may also
         exclude a specific file from all directories with a control
         file entry like:
         
             -  C.ERR
         
         
         IV.  Using the Index File
         
         Every line in the index file has two fields.  The first
         field is the diskette number where the backup file is
         stored.  The second field is the original name of the backup
         file.  Files are stored on the backup diskettes in the same
         directory as on the hard disk; only the drive letter is
         different.
         
         The index file is a valuable resource for locating files on
         your system.  To locate a file on your hard drive, use the
         DOS FIND command:
         
             FIND "CONFIG" C:\BAK.NDX
         
         This command will display all lines in the index file which
         contain the text "CONFIG".  A backup which used the control
         file in the previous example would display:
         
                5,C:\POPULAR\PRODUCT\CONFIG1.DAT
                5,C:\POPULAR\PRODUCT\CONFIG2.DAT
                5,C:\POPULAR\PRODUCT\CONFIG3.DAT
         


















         BAKtrack V1.5        Rockford Technologies Inc        Page 8


         
         The index is also handy for quickly recovering one or two
         deleted files.  Use the DOS FIND command to find out which
         backup diskette the file is on, then copy the file back to
         your hard disk.  For example, assume that the file
         LETTER.TXT was accidentally deleted.  Issue the following
         command:
         
             FIND "LETTER.TXT" C:\BAK.NDX
         
         The output from the above command might look like this:
         
             12,C:\USER\DATA\LETTER.TXT
         
         This tells you that the file is on backup diskette number
         12.  Place backup diskette number 12 in drive A: and issue
         the following command to restore the file:
         
             COPY A:\USER\DATA\LETTER.TXT C:\USER\DATA\LETTER.TXT
         
         Notice that files are saved on the backup diskettes in the
         same directory as on the hard drive.
         
         
         V.  File Recovery
         
         BAKtrack includes a restore program named RES.EXE.  The
         restore program will restore all files listed in the index.
         If you only want to recover some of the files, make a copy
         of the index and edit it to remove files that you do not
         want restored.
         
         If you have a catastrophic hard disk failure, you must
         reformat and install the DOS system files before performing
         full file recovery.  BAKtrack does not process HIDDEN or
         SYSTEM files and cannot install DOS on the hard drive.
         
         See the command description for examples and details on how
         to use the RES program.
















         BAKtrack V1.5        Rockford Technologies Inc        Page 9


         Release Notes:
         
         
         Version 1.4
         
             1. The BAK program now allows diskettes to be formatted
                during backup.  This option is only available during
                full backups and when additional diskettes are
                required at the end of a partial backup.
         
             2. The initial copyright notice now reports which
                BAKtrack program is running.
         
             3. Several typographical problems were corrected in the
                manual and some topics are better explained.
         
         
         Version 1.5
         
             1. It was possible to run out of disk space when trying
                to build a new directory on the target diskette. 
                This situation is now detected and the user is
                prompted for a new diskette.
         
             2. Full backups will save the old index under name
                bak.old. If this file already exists, it is deleted
                and the backup wil continue normally.
         



























         BAKtrack V1.5       Rockford Technologies Inc        Page 10


         NAME
             bak     BAKtrack backup program
         
         SYNOPSYS
             bak [-?] [-f] [-v] [-u] [-ddrive] [-iindex] [-ppath]
             [-ccontrol]
         
             -f Perform a full backup (default is incremental)
             -v Verbose flag
             -u Unix file names
             -d Target drive for backup (default is A:)
             -i Alternate name for index file (default is BAK.NDX)
             -p Backup begins in this directory (default is the      
                current directory)
             -c Control file name
             -? Help
         
         DESCRIPTION
         The program BAK will copy files from one drive to another
         and create an index of the files copied.  By default, files
         are copied to drive A: beginning in the current default
         directory.  The directory tree is descended and all files in
         the tree are processed.  By default, BAK performs a partial
         backup and expects an index file named BAK.NDX in the
         current default directory.  Only files which have been
         modified since the last backup are processed during a
         partial backup.  The default options may be changed with
         command line arguments.
         
             The -f flag causes a full backup to be performed.  All
             files will be copied, regardless of their modification
             status, and a new index file will be created.
         
             The -v flag will print file names that are skipped.
         
             The -u flag converts DOS file names to UNIX file names
             by replacing all backslashes (\) with slashes (/) and
             changing all characters to lower case.
         
             The directory where BAK begins may be specified with the
             -p flag.  A complete directory name is expected.  This
             causes BAK to begin in a different directory than the
             current default directory.
         
             By default the index file is placed in the current
             default directory and named BAK.NDX.  The name and
             location of the index file may be changed with the -i
             flag.
         
             The default destination drive A: may be changed with the
             -d flag.




         BAKtrack V1.5       Rockford Technologies Inc        Page 11


             A backup control file may be specified with the -c flag.
             The control file specifies which files get copied to the
             backup diskettes.  If information about a file is not
             contained in the control file, then BAK will copy the
             file.  The control file is an ASCII text file.  Each
             line in the control file may specify a file name, a
             directory name, or a wild card name.  A full path name
             must be used for all file and directory names.  The
             character in the first column of each line determines
             how the file is processed.  A minus character (-) tells
             BAK not to copy the file, or if the name is a directory,
             not to copy any files in the directory.  Any other
             character causes the file or directory to be copied. 
             Files will always be copied if they are included in the
             control file, even when the directory has been excluded.
             A file name without a path and optionally containing
             wild card characters specifies a class of files to be
             excluded from the backup diskettes. For example,
             consider the following control file:
         
                -    C.ERR
                -    *.OBJ
                -    C:\LOTUS
                -    C:\FREELANC
                -    C:\FREELANC\FONTS
                -    C:\FREELANC\SYMBOLS
                     C:\FREELANC\SYMBOLS\MISC.DRW
                     C:\FREELANC\SYMBOLS\LOGOS.DRW
         
             All C.ERR files and files which have a .OBJ extension
             will not be copied to the backup diskettes.  All files
             in the C:\LOTUS, C:\FREELANC, C:\FREELANC\FONTS, and
             C:\FREELANC\SYMBOLS directories will not be copied to
             the backup diskettes.  The files MISC.DRW and LOGOS.DRW
             in the C:\FREELANC\SYMBOLS directory will be copied,
             however.
         
         EXAMPLES
             The command
         
                bak -f -pC: -iC:\BAK.NDX -cC:\BAK.CTL
         
             specifies full backup of all files on hard disk C: to
             drive A:, places the on-line index in the root directory
             of drive C:, and uses a control file named C:\BAK.CTL.
         
             The command
         
                bak -pC: -iC:\BAK.NDX -cC:\BAK.CTL
         
             Specifies a partial backup using the same files as the
             first command.



         BAKtrack V1.5       Rockford Technologies Inc        Page 12


         NAME
             res     BAKtrack restore program
         
         SYNOPSIS
             res [-?] [-ddrive] [-iindex] [-r] [-s]
         
             -d Drive containing backup files (default is A:)
             -i Alternate name for index file (default is BAK.NDX)
             -r Silently replace existing files
             -s Silently create directories
             -? Help
         
         DESCRIPTION
             The program RES will copy all files named in the index
             file BAK.NDX to their original locations.  The backup
             files will come from drive A:.  If a directory does not
             exist, the user is asked if the directory should be
             created.  If a file already exists, the user is asked if
             it should be replaced.
         
             The -d flag may be used to specify a drive other than A:
             for the backup files.
         
             The -i flag specifies a different index file name.  If a
             drive letter is given and it matches the drive where the
             backup files are located, then the index is retrieved
             from the index disk.
         
             The -r flag will cause files to be replaced without
             asking the user for confirmation.
         
             The -s flag will cause directories to be created without
             asking the user for confirmation.
         
         EXAMPLES
             The command
         
                res -iA:\BAK.NDX -r -s
         
             will restore all of drive C: from backup files using
             drive A:. The index will come from the index disk. 
             Directories and files will be created and copied without
             user confirmation.
         
             To only restore some files, make a copy of the index
             file and remove the undesired files from the index.  Use
             the modified index as input to the restore program.  The
             following commands demonstrate this method:
         
                copy  A:\BAK.NDX  TEMP.NDX
                edlin TEMP.NDX
                res   -iTEMP.NDX
x
```
{% endraw %}

## FILE1869.TXT

{% raw %}
```
Disk No: 1869                                                           
Disk Title: BakTrack                                                    
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: BAKtrack                                                 
Author Version: 1.5                                                     
Author Registration: $15.00                                             
Special Requirements: Hard drive.                                       
                                                                        
BAKTRACK provides an easy way to back up hard disk files to floppy      
diskettes.  It is smart enough to make small daily backup chores fast   
and painless.  BAKTRACK performs both full and partial backups with     
directories and files easily excluded from the backup.                  
                                                                        
An index is maintained on your hard disk and on the backup diskettes.   
The index is a convenient navigation tool for locating files on the hard
disk or the backup diskettes.  The index allows fast recovery of one or 
more files.  After making a full backup, daily partial backups are fast 
and easy since BAKTRACK keeps track of what files have changed or       
added since the last backup and only backs up those files.              
                                                                        
This program only works from the command line--there are no menus.      
BAKTRACK can be set to create a complete backup, prompted partial backup
by looking for the DOS archive bit on a file, or a partial backup as    
specified by a control file named at startup.                           
                                                                        
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
║                 <<<<  Disk #1869  BAKTRACK  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: BAK                                             ║
║                                                                         ║
║ To print documentation, type: COPY BAKTRACK.DOC PRN                     ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.DOC

{% raw %}
```


                           BAKtrack -- Version 1.5
         
                 (C) Copyright 1989 Rockford Technologies Inc
                             All Rights Reserved
         

                          Rockford Technologies Inc
                              5126 Potomac Drive
                             Rockford, IL  61107
                                (815)226-8439
         

To get started, print the documentation with the following command:

    COPY A:BAKTRACK.DOC PRN
    
The manual is eleven pages long.  To look at the manual without
printing it, use the following command:

    MORE <A:BAKTRACK.DOC
 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1869

     Volume in drive A has no label
     Directory of A:\

    BAK      EXE     31248   1-15-90   6:50p
    BAKTRACK DOC     23059   1-15-90   6:50p
    FILE1869 TXT      2295   3-20-90   4:34p
    FULLBAK  BAT       285   1-15-90   6:50p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   1:54a
    PARTBAK  BAT       273   1-15-90   6:50p
    README   DOC       649   1-15-90   6:50p
    RES      EXE     22864   1-15-90   6:50p
            9 file(s)      81251 bytes
                           75776 bytes free
