---
layout: page
title: "PC-SIG Diskette Library (Disk #2830)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2830/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2830"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DOG.DOC

{% raw %}
```

















                         Disk OrGanizer - Version 3.11
                                 April 5, 1991

                              Soft GAM's Software
                              G. Allen Morris III
                                 P. O. Box 1311
                              Mendocino, CA  95460

                                 Copyright 1991
                              All Rights Reserved

                            Compuserve: #73210,3374
                              Voice: (707)961-1632






                              _______
                         ____|__     |               (tm)
                      --|       |    |-------------------
                        |   ____|__  |  Association of
                        |  |       |_|  Shareware
                        |__|   o   |    Professionals
                      -----|   |   |---------------------
                           |___|___|    MEMBER





                               Table of Contents




        1. Getting started ........................................... 1
        1.1. Introduction ............................................ 1
        1.2. Shareware ............................................... 1
        1.3. Purpose ................................................. 1
        1.4. Installation ............................................ 1
        1.5. Background programs ..................................... 2
        1.6. Copy protected programs ................................. 3
        1.7. Power failure ........................................... 3
        1.8. Quick start ............................................. 3

        2. Using Disk OrGanizer ...................................... 5
        2.1. Modes ................................................... 5
        2.2. Switches ................................................ 6
        2.3. Command line syntax ..................................... 6
        2.3.1. Command line commands ................................. 7
        2.4. Orderfile syntax ........................................ 7
        2.4.1. Setting the mode ...................................... 7
        2.4.2. Setting switches ...................................... 8
        2.4.3. Order file Commands ................................... 8
        2.4.4. File identifiers ..................................... 10
        2.4.5. Comments ............................................. 10

        3. Licensing and support .................................... 11
        3.1. Copyright/License/Warranty ............................. 11
        3.2. Licensing .............................................. 11
        3.3. Technical Support ...................................... 12
        3.4. ASP Ombudsman Information .............................. 12

        4. Error messages ........................................... 13

        5. Glossary ................................................. 16

        6. Index .................................................... 17















                                      i

     1. Getting started
     ----------------------------------------------------------------------
     1.1. Introduction


        1.1. Introduction

        Hello,  and thank you for taking the time to read this manual. I
        hope that you find Disk OrGanizer useful.

        1.2. Shareware

        Disk OrGanizer is not a public domain program.  Copies  of  Disk
        OrGanizer  for  personal  use  are  free,  but  if you find Disk
        OrGanizer of value, you are  encouraged  to  make  a  gift  ($20
        suggested)  and  become a Disk OrGanizer supporter. You may also
        register your copy of Disk OrGanizer for $30 and receive a  disk
        and  manual  along  with  notification  of  future  versions.  A
        license is required for use of Disk  OrGanizer  by  corporations
        and institutions, and for its commercial distribution.

        If you don't support shareware it will go away.

        1.3. Purpose

        A  disk  that has been in use a while will usually become slower
        accessing the data and programs that have  been  stored  on  it.
        This is due to two problems:

         o  The disk has become fragmented.
         o  There are deleted entries in directories.

        Disk  OrGanizer will solve these problems and make your disk run
        like new.

        If the size of a directory decreases enough after  removing  the
        deleted  entries,  Disk  OrGanizer  can  also  recover some disk
        space.

        Disk OrGanizer has been tested with  MS-DOS  2.10,  3.01,  3.10,
        3.30,  4.01 and 5.0 on logical drives as large as 600 megabytes.
        It is believed that Disk OrGanizer will operate on any MS/PC-DOS
        disk.

        Disk OrGanizer performs extensive tests before it starts to move
        data, to make sure that the  File  Allocation  Table  (FAT)  and
        directories are in good repair.

        1.4. Installation

        You should BACK UP your hard disk before you run Disk OrGanizer.

        To  install Disk OrGanizer, you need only copy it to a directory
        on your PATH.

        You can test Disk OrGanizer by typing the command:



     Disk OrGanizer                                                       1

     1. Getting started
     ----------------------------------------------------------------------
     1.4. Installation


             DOG [d:] /TEST

        d: is an optional drive specifier. (The []'s mean  optional  and
        should  not  be  typed.)  If  no drive is specified, the current
        drive will be used.

        If Disk OrGanizer reports errors  and  you  have  not  run  Disk
        OrGanizer  before,  you should run CHKDSK with the /F switch and
        repair the disk.

        If you have not backed up your disk, Disk  OrGanizer  will  warn
        you as to how many files may need to be backed up.

        PLEASE back up your disks before you run Disk OrGanizer.

        Disk  OrGanizer will also list any files that are open on on the
        disk that you are organizing. Disk OrGanizer will not be able to
        move these files nor pack the directories that they are in.

        If you have used other disk defragment programs before, and have
        had no problem, it should be safe to run Disk OrGanizer.

        Disk OrGanizer will move HIDDEN files,  most other disk  defrag-
        menters don't move these files.

        If  you  have  not  run any disk defragment programs before, you
        should read the rest of this chapter.

        1.5. Background programs

        Disk OrGanizer reads and writes to the disk directly. If a  pro-
        gram  tries  to  write  to  the  disk  while  Disk  OrGanizer is
        operating, data may be lost. You should not run  Disk  OrGanizer
        on  a  disk  that you know will be written to. Programs that are
        likely to write to the disk are printer  spoolers,  multitasking
        programs  like  Windows or DesqView, switching programs and net-
        work programs.

        If you have FASTOPEN installed on your computer, you  will  need
        to reboot your computer after you run Disk OrGanizer.

        Some  background programs leave files open all of the time. Disk
        OrGanizer will not move files that are open,  and  it  will  not
        pack a directory that has open files in it.

        If  you do not know if you have these programs on your computer,
        I would suggest that you run Disk OrGanizer from a  floppy  disk
        as described in the Quick Start section.






     Disk OrGanizer                                                       2

     1. Getting started
     ----------------------------------------------------------------------
     1.6. Copy protected programs


        1.6. Copy protected programs

        Disk OrGanizer may make some copy protected software unusable.

        It  is  recommended  that you remove any copy protected software
        from your disk before you  run  Disk  OrGanizer,  if  you  can't
        determine its compatibility with Disk OrGanizer.

        1.7. Power failure

        Disk OrGanizer can recover from a power failure or reboot.

        If  a  power  failure  or  inadvertent  reboot occurs while Disk
        OrGanizer is running, you should run  Disk  OrGanizer  again  as
        soon  as possible. Disk OrGanizer will report any errors that it
        finds on the disk and ask you if you would like to repair  them.
        If  you  answer yes to all of the questions, Disk OrGanizer will
        repair the disk and then continue operation as normal.

        You should not use any third party  CHKDSK  type  programs  that
        recover  lost  clusters.  If you use CHKDSK, you should NOT make
        the lost cluster chains into files.

        1.8. Quick start

        If you would like to defragment your disk and get back  to  work
        without having to read the rest of this manual, the simplest and
        safest way to run Disk OrGanizer is described here.

        The first thing to do is to find an old or unused  floppy  disk.
        Then format this disk with a copy of the system.

             FORMAT A: /sys

        Copy DOG.EXE to the floppy disk.

             COPY DOG.EXE A:

        You may need to create or copy CONFIG.SYS on the new disk if you
        have disk drivers or an EMS  memory  driver  that  needs  to  be
        installed.

        Reboot  your  computer  (Ctrl-Alt-Delete)  with the new disk in-
        stalled in the A: drive.

        DOS will ask you for the date and time. This is because there is
        no AUTOEXEC.BAT file.  Enter the correct date and time.

        Run Disk OrGanizer on your hard disk.

             DOG C: /AUTO /CRC /TRUNCATE



     Disk OrGanizer                                                       3

     1. Getting started
     ----------------------------------------------------------------------
     1.8. Quick start



        Disk  OrGanizer  will  test  the  disk (like CHKDSK), give you a
        report, analyze the disk to determine the best place to have the
        directories and files on the disk. Tell you how many directories
        need to have deleted files removed (packed), tell you  how  many
        directories  can  be  made shorter (truncated), and tell you the
        number of clusters that it will have to move to  defragment  the
        files and directories on the disk.

        You  will then be asked if it is OK to write to the disk. If you
        answer no to this question, Disk  OrGanizer  will  quit  without
        ever  having  written  to  the  disk.  If  you  answer yes, Disk
        OrGanizer will pack the directories, truncate  the  directories,
        and then start moving clusters.

        While  Disk  OrGanizer is moving clusters, you will see the fol-
        lowing message:

             X nnnnn - elapsed time  0:00:00  estimated 0:00:00

        X  is  either  R)eading,  S)orting,  C)omputing  CRC,  W)riting,
        T)esting  CRC,  L)inking  new  clusters  or  U)pdating  FAT  and
        directories. nnnnn is the number  of  clusters  that  have  been
        moved.  Elapsed  time  is  the amount of time Disk OrGanizer has
        been moving clusters, and estimated is the approximate amount of
        time it will take to organize the disk.

        You  can quit from Disk OrGanizer at anytime by pressing the es-
        cape (Esc) key or a ^C. Stopping  Disk  OrGanizer  while  it  is
        moving  clusters  may  cause  extreme fragmentation.  Rerun Disk
        OrGanizer as soon as possible, if you abort while it  is  moving
        clusters.

        If  you think that Disk OrGanizer has stopped running, press the
        space bar.  You should then hear a beep within a few seconds.

        When it is done it will check the disk once again,  give  you  a
        new report and then exit.

        You  should  then  remove the floppy disk from the A: drive, and
        reboot your computer.

        You should notice that the programs on your disk load  a  little
        faster.  If  Disk  OrGanizer truncated some directories you will
        also have more free disk space.









     Disk OrGanizer                                                       4

     2. Using Disk OrGanizer
     ----------------------------------------------------------------------


        The purpose of Disk OrGanizer is to speed up the access of files
        on your disks.  There are two things that slow  down  access  of
        data:  deleted  files  in directories, and fragmented files. The
        actual placement of files on a disk has very little to  do  with
        the  amount  of time it takes to load a file.  Most disk defrag-
        ment programs take a long time to run,  and  this  keeps  people
        from running them often.

        Disk  OrGanizer  has complex algorithms that allow it to defrag-
        ment all of the files on a disk while moving very few  clusters.
        Although  Disk  OrGanizer can control the placement of files and
        directories on the disk, I would suggest that you  refrain  from
        using  this  feature,  as  it can greatly increase the number of
        clusters that Disk OrGanizer will need to move and give you very
        little  benefit.  The exception to this are directories that are
        read often, such as the directories on the PATH, which  you  may
        want  to  move  near  the  File  Allocation  Table (see the AUTO
        command.)

        2.1. Modes

        The mode determines how Disk OrGanizer will organize a disk.

        FILL - mode will defragment files and put them as close  to  the
             FAT as possible, FILL will not leave any free space between
             files. FILL may leave  files  fragmented  around  BAD  disk
             sectors and unmovable files. This mode gives you all of the
             benefits of that you get from other disk defragmenter,  but
             only takes a fraction of the time to run.

        FAST - mode will defragment all files and attempt to put them in
             one area of disk space. FAST may leave gaps of  free  space
             between files.

        QUICK - mode is like FAST mode but does not try as hard.

        DEFRAG -  mode  will  defragment  the files on the drive without
             concern for their placement.

        The following modes will more than likely cause all of the files
        and sub-directories on a disk to be moved.

        DATE -  mode  will  put the files on the disk oldest files first
             (closest to the FAT). Using this mode once in a  while,  it
             can  take  a  long  time to run, may decrease the number of
             clusters that Disk OrGanizer will need  to  move  with  the
             FAST or FILL mode.

        DIRECTORY -  mode will put the files on the disk in the order in
             finds them in the directories. That is, the first  file  or
             sub-directory  in the root directory will be closest to the
             FAT (also refered to as LOW), followed by the  second  file



     Disk OrGanizer                                                       5

     2. Using Disk OrGanizer
     ----------------------------------------------------------------------
     2.1. Modes


             in the root, etc.

        The  following  modes  are  for compatibility to older versions.
        They are of little use.

        FRAGMENTED - This will put all of the files that are  not  frag-
             mented  on the disk first, and will then put the fragmented
             files on the disk. Using this function will slowly put  all
             of  the files that change size away from the FAT. This mode
             does not work well if you have BAD clusters or system files
             other than DOS on the disk.

        PACKED -  This  leaves  the  files in the same order as it finds
             them on the disk, by cluster.

        2.2. Switches

        CRC - will cause Disk OrGanizer to read data after it is written
             to  the  disk,  and  test  to make sure that it was written
             correctly.

        BATCH - tells Disk OrGanizer to suppress all  prompts.  This  is
             useful  for  running  Disk  OrGanizer from a batch file. If
             this switch is set, any error will cause Disk OrGanizer  to
             terminate.

        NOVERIFY -  tells  DOS  not  to verify data written to the disk.
             (see VERIFY in your DOS  manual)  This  will  increase  the
             speed  of  Disk  OrGanizer, but will allow data to be lost.
             This switch should not be used on a floppy disk, but may be
             used on a hard disk at your own risk. This is for people to
             whom speed is more important than data  integrity.  If  you
             have  set  the  CRC switch, then Disk Organizer will verify
             the data, and  you  can  include  this  switch  to  improve
             performance.

        2.3. Command line syntax

        The  Command  line  syntax  to  run  Disk OrGanizer from the DOS
        prompt is:

             DOG [d:] [orderfile] [/commands] [/mode] [/switches]

        (The []'s mean optional and should not be typed.)

        d: is an optional drive specifier. If no drive is specified  the
        current drive will be organized.

        Orderfile is the path and filename of the order file. If this is
        not included,  Disk  OrGanizer  will  look  for  a  file  called
        ORDER.DOG  in  the  root directory of the drive being organized,
        and if it does not find that, it will look  in  the  environment


     Disk OrGanizer                                                       6

     2. Using Disk OrGanizer
     ----------------------------------------------------------------------
     2.3. Command line syntax


        for  DOG=d:\path\filename and use that file.  If no orderfile is
        found, the DOS NUL device is used.  If you have an orderfile and
        don't wish to use it, you can tell Disk OrGanizer to use the NUL
        file as an orderfile (ie. DOG NUL /AUTO).

        Commands consist of AUTO and TRUNCATE.

        Mode tells Disk OrGanizer where to place the files on the drive.
        You  must  supply  a  mode  to  suppress  the  shareware sign-on
        message. The mode can be set  on  the  command  line  or  in  an
        orderfile.

        Switches  allow  you  to  control several options as to how Disk
        OrGanizer will test the data that is moved,  and  interact  with
        the  operator.  Switches can be set on the command line or in an
        orderfile.

        2.3.1. Command line commands

        TRUNCATE - tells Disk OrGanizer to truncate all sub-directories.

        AUTO - tells Disk OrGanizer to put the  directories  defined  in
             the  PATH  environment variable first, followed by the file
             definded by the COMSPEC environment variable, and then  all
             of  the  other  directories.  If  no  other  mode  has been
             specified, it will then order the rest of the files  as  if
             the /FILL mode was set.

        2.4. Orderfile syntax

        The orderfile can be used as a simple configuration file, or can
        be used to tell DOG the exact order that you would like to  have
        your files on a disk.

        Modes  and  switches  that  are  given  on the command line will
        override those in the orderfile.

        You may find it more convenient to run  Disk  OrGanizer  from  a
        batch  file  than  to  use the orderfile feature.  Again I would
        like to point out that the placement of files has little  effect
        on the speed at which they can be read.

        If  you  use  the  AUTO command line command, you may not end up
        with what you expected. (See listing 2.1)

        2.4.1. Setting the mode

        To give a mode in the order file, enclose it in square  brackets
        ([]).  A  mode must be given on the command line or in the order
        file for Disk OrGanizer to run. For a description of  the  modes
        see  above.  A  mode given on the command line will override the
        mode in the ORDER file.


     Disk OrGanizer                                                       7

     2. Using Disk OrGanizer
     ----------------------------------------------------------------------
     2.4.2. Setting switches


        ________________________________________________________________
                   Listing 2-1: A very simple ORDER.DOG file

              ; The []s must be included.
              [FILL]          ; set the mode
              ;  Truncate all of the directories
              [TRUNCATE ALL]  ; Directories that have already been
                              ; specified, will not be truncated.
              ; The AUTO command line command appends
              [PATH]          ; these three orderfile commands
              [COMSPEC]       ; to the end of the orderfile.
              [ALLDIR]        ;
              ;

        ________________________________________________________________

        2.4.2. Setting switches

        Switches can be specified in the orderfile by enclosing them  in
        square brackets ([]). (See the section on switches above.)

        2.4.3. Order file Commands

        The area of the disk close to the FAT is called the LOW area and
        the area away from the FAT is called the HIGH area.    Any  file
        that  is  not  named  anywhere  in the ORDER.DOG file is said to
        FLOAT.

        In making this file you should name as few files as possible.

        The following three  commands  are  a  shorthand  for  file  and
        directory names.

        PATH - is the same as listing all of the directories in the PATH
             environment variable that are on the drive being organized.

        COMSPEC - The filename given in the COMSPEC environment variable
             is used if it points to the drive being organized.

        ALLDIRECTORIES -  Is  the same as listing all of the directories
             on the drive.

        The following commands tell where to place named files.

        LOW - tells Disk OrGanizer to place the files described by  fol-
             lowing  filenames  close to the FAT.  This also affects the
             FREE command. (see below)

        HIGH - tells Disk OrGanizer to place files described by  follow-
             ing  filenames  away  from  the FAT.  This also affects the




     Disk OrGanizer                                                       8

     2. Using Disk OrGanizer
     ----------------------------------------------------------------------
     2.4.3. Order file Commands


        ________________________________________________________________
                       Listing 2-2: Sample ORDER.DOG file

           ;
           [DEFRAGMENT]    ; if no mode is given on the command
                           ; line use DEFRAGMENT
           [FORCE]         ;
           \COPYPRO.SYS    ; I don't want this file to move
           [FLOAT]
           [TRUNCATE]      ;
           \DIR_A\         ; Truncate sub-directory DIR_A, but let
                           ; it FLOAT.
           ;
           [LOW]           ; Set move files LOW.
           \DOS\           ; Truncate sub-directory DOS, and put it
                           ; next to the FAT.
           [ENDTRUNCATE]
           \COMMAND.COM    ; COMMAND.COM will be placed after \\DOS.
           [FREE 500]      ; leave some room
           ;
           [HIGH]          ; set move files HIGH.
           \AUTOEXEC.BAT   ; As this file is used only once, on
                           ; reboot, we can move it away from the
                           ; FAT.
           \CONFIG.SYS     ; another seldom used file.
           \ORDER.DOG      ; This file will be place just in front
                           ; of CONFIG.SYS

        ________________________________________________________________

             FREE command.

        FORCE - tells Disk OrGanizer not to move the files that  follow.
             If  you are going to FORCE file you should do it before you
             place files LOW or HIGH.

        FLOAT - tells Disk OrGanizer to ignore the  files  that  follow.
             This  is  used  if you wish to TRUNCATE a sub-directory but
             don't want to put it LOW, HIGH or FORCE.  NOTE:  in  future
             releases  this may be used this to allow SYSTEM files to be
             moved.

        These  commands  control  whether  named  directories  will   be
        truncated.

        TRUNCATE ALL - will truncate all directories on the disk.

        TRUNCATE -    sub-directories   named   between   TRUNCATE   and
             ENDTRUNCATE will have there size changed so that they  will
             use as little space as possible.




     Disk OrGanizer                                                       9

     2. Using Disk OrGanizer
     ----------------------------------------------------------------------
     2.4.3. Order file Commands


        ENDTRUNCATE - see TRUNCATE above.

        System directories and directories that have already been placed
        LOW, HIGH, or FORCED, will not be truncated.

        The following command will force clusters to be left free.

        FREE nnnn - tells  Disk  OrGanizer  to  leave  nnnn  (a  number)
             clusters  of  free  space  after the last file named in the
             order file, if files are being placed LOW,  or  before  the
             file if files are being placed HIGH. Disk OrGanizer ignores
             this command if there isn't enough free disk  space.    The
             nnnn  may  be replaced with an asterisk (*) if you want all
             available free clusters in a location.

        2.4.4. File identifiers

        A file identifier is a string that starts with a backslash  (\),
        has  zero  or  more sub-directory names separated by backslashes
        (the Path), and ends with a filename or  sub-directory  name.  A
        file identifier ending with a sub-directory name can be followed
        by an optional backslash.

        It is important to understand that a  sub-directory  is  a  file
        with  a  special  format  and  that  Disk  OrGanizer treats sub-
        directories just like files in the orderfile  except  that  sub-
        directories can be TRUNCATED.

        You  must  always  include  the  full  path  of  a  file or sub-
        directory.

        Wildcards may be used in filenames.  But please  note  that  in-
        cluding  a  large  number of files in the ORDER file can greatly
        increase the amount of time it take Disk OrGanizer to organize a
        disk.

        2.4.5. Comments

        A  comment  starts  with  a  semicolon  and ends with a carriage
        return.














     Disk OrGanizer                                                      10

     3. Licensing and support
     ----------------------------------------------------------------------
     3.1. Copyright/License/Warranty


        3.1. Copyright/License/Warranty

        This document and the program files DOG.EXE ("the software") are
        copyrighted  by the author.  The copyright owner hereby licenses
        you to use the software given these restrictions:

         o  the program shall be supplied in  its  original,  unmodified
            form, which includes this documentation;

         o  for-profit use without a license is prohibited;

         o  the  program  may  not be included - or bundled - with other
            goods or services.  Exceptions may be granted  upon  written
            request only.

         o  no fee is charged; an exception is granted to not for profit
            user's groups, which are permitted to  charge  a  small  fee
            (not  to  exceed  $5)  for materials, handling, postage, and
            general overhead.  No other  organization  is  permitted  to
            charge any amount for distribution of copies of the software
            or documentation, or to include copies of  the  software  or
            documentation with sales of their own products.

        There  is  no warranty of any kind.  The copyright owner may not
        be held liable for any damages, including any  lost  profits  or
        other  incidental or consequential damages arising out of or in-
        ability to use the software.  By using the software,  you  agree
        to this.

        3.2. Licensing

        No  license is required to run Disk OrGanizer on a computer that
        is not used for business.

        The fee for a license depends on the estimated number of  copies
        of  the program that you will use.  For local area networks, one
        copy must be licensed for each computer that will be  using  the
        program on the network.

        A license is not transferable.

                     Quantity     Price  Update
                     ========     ==.==   ==.==
                            1     30.00    6.00  each

                       2 to 9     25.00    5.00
                     10 to 49     20.00    4.00
                     50 to 99     15.00    3.00
                   100 to 199     10.00    2.00

        Unlimited at one site  $2000.00  400.00
             Additional sites   1000.00  200.00  unlimited at each site


     Disk OrGanizer                                                      11

     3. Licensing and support
     ----------------------------------------------------------------------
     3.2. Licensing



        The  price  to update to a new version applies only to the quan-
        tity previously registered.

        Regardless of the quantity purchased you will receive  only  one
        disk  and  one  printed manual. Additional manuals are available
        for $6.00 each. You may make as many copies as are licensed  and
        one archive copy.

        Orders of $50 or less must be prepaid. Orders over $50 - NET 30.

             Soft GAM's Software    SSN# 559-29-3621
             (707)961-1470
             P. O. Box 1311
             Mendocino, CA  95460

        3.3. Technical Support

        Technical support is available to Disk OrGanizer supporters  and
        licensed users. Limited support is also available to help you to
        get Disk OrGanizer to operate on a computer,  so  that  you  can
        evaluate it.

             CompuServe: PPN# 73210,3374

             the Bit Boutique BBS 707-778-8944, 2400 baud
             Leave E-Mail to ALLEN MORRIS

             Mail : Soft GAM's Software, Box 1311, Mendocino, CA 95460

             Phone: (707)961-1632 (10 to 6 Pacific Time)

        3.4. ASP Ombudsman Information

        Disk  OrGanizer  is  produced  by a member of the Association of
        Shareware Professionals (ASP).  ASP wants to make sure that  the
        shareware principle works for you.  If you are unable to resolve
        a shareware-related problem with an ASP member by contacting the
        member  directly, ASP may be able to help. The ASP ombudsman can
        help you resolve a dispute or problem with an  ASP  member,  but
        does  not  provide  technical  support  for  members'  products.
        Please write to the ASP Ombudsman at:

             ASP Ombudsman
             545 Grover Road
             Muskegon, MI 49442

        or send a CompuServe message via Easyplex electronic mail to the
        ASP Ombudsman, CompuServe ID number 70475,1071.





     Disk OrGanizer                                                      12

     4. Error messages
     ----------------------------------------------------------------------


        The number in parentheses is the  ERRORLEVEL  returned  by  Disk
        OrGanizer. If the error code is 100 or above, data may have been
        lost on the disk.

        No Errors (0)
             You are a happy camper.

        Terminated by user. (1)
             The disk may still need to be organized.

        Illegal I/O redirection. (2)
             Do not redirect output to the drive being organized.

        Order file is a device. (3)
             The order file can't be read from a device, use a file.

        File not found. (4)
             Check the filename you entered.

        Could not read/understand disk information. (5)
             Please write or call and we can try to solve this problem.

        Error in order file. (6)
             Fix or remove bad commands  or  filenames  from  the  order
             file.

        Error on the command line. (7)
             Check the syntax on the command line.

        Network drive. (8)
             Reboot  your  computer without the network or don't publish
             the drive you want to organize.

        Invalid drive. (9)
             Specify a valid drive.

        Could not find directory for open file. (10)
             Remove background programs or reboot the computer  and  try
             again.

        Out of memory. (11)
             Remove  TSR  programs,  increase  EMS memory or set the en-
             vironment variable TEMP or DOGTEMP to a path  that  can  be
             used for temporary storage.

        Error reading FAT. (I/O) (12)
             Back up and reformat the disk or mark bad clusters bad.

        Possible NON DOS disk. (13)
             The  disk  is an unknown type or the second FAT is bad. Run
             chkdsk.  If you are still unable  to  run  Disk  OrGanizer,




     Disk OrGanizer                                                      13

     4. Error messages
     ----------------------------------------------------------------------


             Please call or write.

        Bad cluster in FAT. (14)
             Run chkdsk.  If you are still unable to run Disk OrGanizer,
             Please call or write.

        Error reading Directory (I/O) (15)
             Back up and reformat the disk or mark bad clusters bad.

        Directory is corrupt. (16)
             Run CHKDSK to repair the disk.

        Lost clusters found. (17)
             Run CHKDSK to repair the disk or run Disk OrGanizer without
             the BATCH or TEST switches set.

        You must have at least one free cluster. (18)
             You should delete at least one file.

        Too many total files. (19)
             Delete files from the disk until there are less that 32,752
             files.

        Free clusters in FAT doesn't match DOS (21)
             Remove any background programs that write to the disk.

        Could not CHDIR to root. (22)
             I do not know what could cause this error.

        Too many fragmented files, use DIR mode. (23)
             Use DIRECTORY, or DATE mode.  Once the number of fragmented
             files is reduced you  use  the  mode  that  generated  this
             error.

        No mode was given. (24)
             You  must supply a mode on the command line or in the order
             file.

        Incorrect DOS version. (42)
             Reboot with DOS version 2 or greater.

        STDIN or STDERR redirected. (43)
             Do not redirect the input or error output.

        Too many arguments. (44)
             Remove some commands from the command line.

        Critical errors. (45)
             Fix the problem that caused the critical error.






     Disk OrGanizer                                                      14

     4. Error messages
     ----------------------------------------------------------------------


        INTERNAL ERROR @'code'. (90)
             Please call and tell me the code that you received.

        I/O error moving clusters. Disk is OK. (99)
             An  I/O  error  was  detected.   You should run a disk test
             program on the disk or back up the disk,  reformat  it  and
             restore the data.  No data was lost and the disk is in good
             repair.

        I/O error moving clusters. Data may have been lost. (100)
             An I/O error was detected. You should run a disk test  pro-
             gram  on  the disk or back up the disk, reformat it and re-
             store the data.  There may be errors on the disk.

        I/O error Packing (101)
             There was an error Packing a directory. You  should  run  a
             disk test program on the disk or back up the disk, reformat
             it and restore the data.  There may be errors on the disk.

        Critical errors. (102)
             Fix the problem that caused the critical error.  There  may
             be errors on the disk.

        INTERNAL ERROR @'code'. (200)
             Please call and tell me the code that you got. There may be
             errors on the disk.





























     Disk OrGanizer                                                      15

     5. Glossary
     ----------------------------------------------------------------------



        CHKDSK  -  A  program  that  came  with  DOS.  Its  full name is
        CHKDSK.COM. See your DOS manual for more information.

        Cluster - DOS stores data in cluster units. Clusters are made of
        one or more sectors.

        FAT - The File Allocation Table.

        File Allocation Table - This along with the directories tell DOS
        where to find a file on the disk.

        Hidden file - A file with the hidden  attribute  bit  set.  Disk
        OrGanizer will move these files.

        Hidden  directory  -  A  directory with the hidden attribute bit
        set. Disk OrGanizer will move these directories.

        Lost clusters - Clusters that are mark in the FAT as being used,
        but have no directory entry that points to them.

        Null file - A file with no data in it.

        Sector - The smallest unit that data can be stored on a disk.

        System  file  -  A  file with the system attribute bit set. Disk
        OrGanizer will not move these files.

        System directory - A directory with  the  system  attribute  bit
        set.  Disk OrGanizer will not move these directories.

        User  file  - A file that does not have the system or hidden at-
        tribute bits set. Disk OrGanizer will move these files.

        User directory - A directory that does not have  the  system  or
        hidden  attribute  bits  set.  Disk  OrGanizer  will  move these
        directories.

        Volume label - A special file that tells DOS the name of a disk.
















     Disk OrGanizer                                                      16

     6. Index
     ----------------------------------------------------------------------


        Aborting from DOG  4           Order file Commands (Cont.)
        ALLDIRECTORIES  8                 FORCE  9
        AUTO  7                           FREE nnnn  10
        BATCH  6                          HIGH  8
        CHKDSK  3, 16                     LOW  8
        Cluster  16                       PATH  8
        Command line commands             TRUNCATE ALL  9
           AUTO  7                        TRUNCATE  9
           TRUNCATE  7                 orderfile  6
        COMSPEC  7, 8                  PACKED  6
        Copy protected programs  3     PATH  7, 8
        CRC  6                         QUICK  5
        current drive  6               Sector  16
        DATE  5                        Switches
        DEFRAG  5                         BATCH  6
        DIRECTORY  5                      CRC  6
        drive specifier  6                NOVERIFY  6
        ENDTRUNCATE  9                 System directory  16
        environment                    System file  16
           COMSPEC  7                  Technical Support  12
           PATH  7                     TRUNCATE ALL  9
        FAST  5                        TRUNCATE  7, 9
        FASTOPEN  2                    User directory  16
        FAT  16                        User file  16
        File Allocation Table  16
        FILL  5
        FLOAT  9
        FORCE  9
        FRAGMENTED  6
        FREE nnnn  10
        Hidden directory  16
        Hidden file  16
        HIGH  8
        Lost clusters  16
        LOW  8
        Modes
           DATE  5
           DEFRAG  5
           DIRECTORY  5
           FAST  5
           FILL  5
           FRAGMENTED  6
           PACKED  6
           QUICK  5
        NOVERIFY  6
        NUL device  7
        Null file  16
        Open files  2
        Order file Commands
           ALLDIRECTORIES  8
           COMSPEC  8
           ENDTRUNCATE  9
           FLOAT  9


     Disk OrGanizer                                                      17

```
{% endraw %}

## FILE2830.TXT

{% raw %}
```
Disk No: 2830                                                           
Disk Title: DOG - Disk OrGanizer                                        
PC-SIG Version: S1                                                      
                                                                        
Program Title: DOG - Disk OrGanizer                                     
Author Version: 3.11                                                    
Author Registration: $20.00/$30.00                                      
Special Requirements: No special requirements.                          
                                                                        
Some of you may not know that a hard drive which has been in use for a  
while can become slower accessing the data and programs stored on it.   
This may be due to two problems:                                        
                                                                        
  - The disk has become fragmented.                                     
  - There are deleted entries in the directories.                       
                                                                        
DOG - DISK ORGANIZER will solve these problems and make your disk run   
more efficiently.  If the size of a directory decreases enough after    
removing the deleted entries, DISK ORGANIZER can also recover some disk 
space.                                                                  
                                                                        
DISK ORGANIZER accomplishes this by performing extensive tests before   
it starts to move data, making sure that the File Allocation Table (FAT)
and directories are in good repair, and verifies all data written to the
disk.  With eight different modes to move data (including hidden files),
remove deleted entries from directories, restructure the order of files 
and subdirectories, and free disk space by truncating subdirectories,   
DISK ORGANIZER is considered to be an excellent disk defragmentor and is
recommended by Mike Callahan, a.k.a. Dr. File Finder, and by John Dvorak
in his "Guide to DOS and PC Performance".                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2830

     Volume in drive A has no label
     Directory of A:\

    DOG      DOC     42172   4-05-91  12:00p
    DOG      EXE     73894   4-05-91  12:00p
    DOG_READ ME       2228   4-05-91  12:00p
    FILE2830 TXT      2665  11-06-91   1:02p
    GO       TXT       770  11-06-91  12:22a
    GO       BAT        38   1-31-91  12:58a
            6 file(s)     121767 bytes
                           36352 bytes free
