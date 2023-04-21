---
layout: page
title: "PC-SIG Diskette Library (Disk #1209)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1209/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1209"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HDTEST"

    HDTEST performs a read/write test on your hard disk without disturbing
    the data currently on it!
    
    HDTEST writes 20 different test patterns to every cluster on the disk,
    checks that they can be read back correctly, and then carefully restores
    your original data!   Extremely sensitive, it can even detect errors
    which are minor enough to be corrected by the disk controller's own
    error-correcting code (ECC).  These errors are normally invisible to the
    user but may be the first signs of future disk problems.
    
    The program is also useful for automatic disk repair when you get
    intermittent or persistent read errors.  Because HDTEST tries harder
    than DOS alone, it can often recover almost unreadable data from
    both hard and floppy disks and rewrite it -- a real life saver when your
    backup fails you.
    
    Simple to use, the program was written to minimize the likelihood of
    user error causing data loss on a good disk.  HDCHEK, a companion
    program, gives you a quick compatibility report to tell you if HDTEST
    will run on your system.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BOOTLOAD.DOC

{% raw %}
```
          
          Documentation for BOOTLOAD              Copyright 1988, P. R. Fletcher          ___________________________            _______________________________
          
          
                                       INTRODUCTION                                       ____________

          BOOTLOAD is part of the HDTEST package, and is only to be distributed
          as part of that package. The program and documentation may only be
          used or copied under the conditions laid down for HDTEST in the
          REGINFO.DOC or UPDINFO.DOC file on the disk on which the Registered
          version of the software is distributed and in HDTEST.DOC for the
          Shareware version. The BOOTLOAD program is Copyright by Peter R.
          Fletcher, 1988. All rights reserved. It was written in assembly
          language and assembled with the Microsoft MASM assembler (V5.1).

          BOOTLOAD is used to (re)create the HDTEST distribution diskette's
          special boot sector (see the HDTEST documentation). Its most important
          use is in preparing a pre-boot diskette which can be used on a system
          that does not possess the appropriate type of floppy drive for the
          distribution diskette, but it can also be used to add the special boot
          sector to a working diskette which is to contain (perhaps) just the
          HD .EXE files. BOOTLOAD will function on all normal DOS-compatible
          removable media (3.5", 5.25", and 8" floppies), under DOS versions 2.x
          through 4.0x.


                                    USING THE PROGRAM                                    _________________

          1) If using a "virgin" diskette, first use the DOS FORMAT command to
          format it. BOOTLOAD may also be safely used on a diskette which
          contains data.

          2) With BOOTLOAD.COM either in your default directory or in your PATH,
          give the command "BOOTLOAD [dev:]", where dev is the single-letter
          device name of the drive on which you wish to access the diskette.

          3) Follow the instructions that are displayed on the screen!

          BOOTLOAD will not let you modify the boot sector of a fixed disk, and
          will respond appropriately to most other likely error conditions. If
          you do not specify a device, it will default to drive A:.


                               LIMITATIONS AND RESTRICTIONS                               ____________________________

          BOOTLOAD should not (strictly speaking) require any services which
          are unique to DOS 2.x or above, but it has not been tested under DOS
          1.x. It uses only documented DOS services and requires very little
          memory - it should, therefore, run on virtually any hardware. Since it
          uses INT 25 and INT 26, it will not run in the DOS compatibility box                                          ___                                 
          under OS/2.


                                  ADDITIONAL INFORMATION                                  ______________________

          Like all well-behaved programs (!), BOOTLOAD signals successful
          completion by returning to DOS with the ERRORLEVEL variable set to
          zero. Different small positive values are returned for various errors.

          BOOTLOAD.COM is 32000 bytes long, but it consists mainly of empty
          space. This is because the code on a diskette's boot sector has to run
           
          Documentation for BOOTLOAD              Copyright 1988, P. R. Fletcher          ___________________________            _______________________________
          
          
          at 0:7C00 (Hex) and the easiest way to manage this is to assemble it
          at an ORG of 7C00 in the default segment. Since the loader code is
          assembled at an ORG of 100, there is a huge amount of unused space in
          the memory image that is saved as the .COM file. I regard this as
          acceptable in a program that will be used rarely and can be saved in
          an archive or in other compressed form when not needed.

          Comments, suggestions, etc. may be addressed to the author at:

                   1515 West Montgomery Avenue
                   Rosemont
                   PA 19010
                   U.S.A.












































          
          
                                          Page 2 

```
{% endraw %}

## FILE1209.TXT

{% raw %}
```
Disk No: 1209                                                           
Disk Title: Hdtest                                                      
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: Hdtest                                                   
Author Version: 4.95                                                    
Author Registration: $35.00                                             
Special Requirements: None.                                             
                                                                        
HDTEST performs a read/write test on your hard disk without disturbing  
the data currently on it!                                               
                                                                        
HDTEST writes 20 different test patterns to every cluster on the disk,  
checks that they can be read back correctly, and then carefully restores
your original data!  Extremely sensitive, it can even detect errors     
which are minor enough to be corrected by the disk controller's own     
error-correcting code (ECC) these errors are normally invisible to      
the user but may be the first signs of future disk problems.            
                                                                        
The program is also useful for automatic disk repair when you get       
intermittent or persistent read errors.  Because HDTEST tries harder    
than DOS alone, it can often recover almost unreadable data from        
both hard and floppy disks and rewrite it -- a real life saver when your
backup fails you.                                                       
                                                                        
Simple to use, the program was written to minimize the likelihood of    
user error causing data loss on a good disk.  HDCHEK, a companion       
program, gives you a quick compatibility report to tell you if HDTEST   
will run on your system.                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FIXFAT.DOC

{% raw %}
```
          
          Documentation for FIXFAT                Copyright 1989, P. R. Fletcher          _________________________              _______________________________
          
          
                                       INTRODUCTION                                       ____________

          FIXFAT is part of the HDTEST package, and is distributed with the
          Shareware and Registered versions of that software. The program and
          documentation may only be used or copied under the conditions laid
          down in the DOC files distributed with the package. The program allows
          DOS's two on-disk copies of the FAT to be made to correspond, when
          they have got "out of sync". This is required for HDCHEK and HDTEST to
          run. FIXFAT is only intended to be used when something has happened to
          corrupt or alter one copy of the FAT (usually because the second copy                           ___                                                 
          was only partially updated when a disk write was immediately followed
          by a reboot or use of the "big red switch"). The program cannot repair
          the FAT if both copies have become corrupted, nor is it intended to be
          a replacement for CHKDSK or the more complex disk repair utilities
          that are supplied with (e.g.) the Norton and Mace Utilities (TM).
          Users who have, and are comfortable with, the latter utilities will
          probably find FIXFAT superfluous. It is intended to provide a simple,
          limited, but fairly safe way for less experienced users to correct
          minor FAT problems prior to running HDTEST.

          FIXFAT is Copyright by Peter R. Fletcher, 1989. All rights are
          reserved. It was largely written in C, compiled with the Microsoft C
          compiler (V5.1). A few low-level functions were written in assembly
          language and assembled with the Microsoft MASM assembler (V5.1). The
          program was linked with code from the Microsoft C function libraries
          by means of the Microsoft LINK linker (V3.65). It consequently
          contains material that is Copyright by Microsoft Corp, 1985-1988. This
          material is used under the terms of a license from Microsoft Corp.


                                     USING THE PROGRAM                                     _________________

          You should generally run CHKDSK before running FIXFAT, unless you have                                          ______                                
          some good reason to believe that the primary copy (and only the                                                            _____________
          primary copy of the FAT on your disk (FAT 1) has been corrupted. If          ____________                                                       
          CHKDSK reports any problems other than "orphan clusters", you should,
          if possible, also back up any irreplaceable files on the disk before
          either using CHKDSK with its /F option or running FIXFAT. If both your
          FATs have been damaged (e.g. by a defective program writing junk to
          the FAT area), neither CHKDSK nor FIXFAT will be able to help you, and
          your only hope is to use a disk repair utility such as those provided
          with the Mace or Norton Utilities (TM).

          The command line syntax for FIXFAT is:

                        FIXFAT dev[:]

          "dev" is the single letter DOS device identifier for the device whose
          FAT is to be fixed - the colon is optional. FIXFAT will first read and
          compare the two copies of the FAT on the target disk. If they are
          identical, this fact will be reported and the program will terminate.
          If there are any discrepancies between the two copies of the FAT, the
          program will examine them individually for evidence of corruption. If
          FAT 1 appears valid, you will be prompted for permission to overwrite
          FAT 2 with a copy of FAT 1. If FAT 1 appears invalid but FAT 2 appears                                                       __                       
           
          Documentation for FIXFAT                Copyright 1989, P. R. Fletcher          _________________________              _______________________________
          
          
          valid, you will similarly be prompted for permission to overwrite FAT
          1 with a copy of FAT 2. If neither FAT appears valid, this will be
          reported and the program will terminate. In determining whether a copy
          of the FAT is valid, FIXFAT makes similar checks to those performed by
          CHKDSK, except that "orphan clusters" (chains of clusters with no
          corresponding directory entries) are not flagged as problems. The
          occasional appearance of orphan clusters was rather common under
          versions of DOS prior to 3.0, usually following a program abort, and
          these are still not (usually) evidence of major trouble.


                               LIMITATIONS AND RESTRICTIONS                               ____________________________

          FIXFAT uses the DOS disk interrupts (INT 25 and 26) to access the disk
          - the program will not run on hardware/software combinations that do
          not support the use of these interrupts (this is almost never a
          problem). The program will, however, not run in the DOS compatibility                                               ___                             
          box under OS/2. FIXFAT requires an amount of free memory (over and
          above that which it uses for its own code) that is equal to at least
          four times the size of the FAT on the target device. For most devices,
          512 kB should be more than enough, but a device whose size pushes DOS
          4.0's limits may be more than the program can handle.


                                  ADDITIONAL INFORMATION                                  ______________________

          Like all well-behaved programs (!), FIXFAT signals successful
          completion by returning to DOS with the ERRORLEVEL variable set to
          zero. Different small positive values are returned for various errors.

          Comments, suggestions, etc. may be addressed to the author at:

                   1515 West Montgomery Avenue
                   Rosemont
                   PA 19010
                   U.S.A.

          Please enclose a s.a.e. if you would like to receive a reply to a
          question or a response to a comment.


















          
          
                                          Page 2 

```
{% endraw %}

## HDTEST.DOC

{% raw %}
```
          
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          








                          HDTEST - Hard Disk Test/Repair Utility                          ______________________________________

                           Copyright (1984-1990), P. R. Fletcher                           _____________________________________
                                    All Rights Reserved                                    ___________________



                        Distributed by:

                               P. R. Fletcher (Software)
                               1515 West Montgomery Avenue
                               Rosemont
                               PA 19010





                                  _______
                             ____|__     |               (tm)
                          --|       |    |-------------------
                            |   ____|__  |  Association of
                            |  |       |_|  Shareware
                            |__|   o   |    Professionals
                          -----|   |   |---------------------
                               |___|___|    MEMBER

           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
                                     TABLE OF CONTENTS                                     _________________


          User-Supported Software                                    1
          Introduction                                               2
          Getting Started - Installation                             5
                          - Testing a Disk                           5
          Hardware and Software Requirements                         7
          Limitations and Restrictions                               9
          Command Line Options - HDCHEK                             10
                               - HDTEST                             12
          What does HDTEST do?                                      15
          Using the Special Pre-Boot                                16
          Dealing with Bad Clusters                                 18
          Running HDTEST from a .BAT file                           19
          Bugs and Other Unpleasant Subjects                        20
          Changes from Previous Versions                            21
          Appendix A - Summary of Flag Settings                     25
          Appendix B - Disk Error Messages                          27
          Appendix C - Example Program Runs                         34
          Registration Form                                         37
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
                                  USER-SUPPORTED SOFTWARE                                  _______________________

          Much of the software which is available for your computer has, in the
          past, been produced and sold on the assumption that you are a crook
          and that you will take any available opportunity to cheat software
          writers and vendors out of their rightful reward. Such software was
          copy-protected within an inch of its (and your computer's) life and
          was priced at a level which still guaranteed its producers a profit
          even if four or five illegal copies were made for each one sold.
          Thankfully, prices of commercial software have (for the most part)
          come down somewhat, and copy-protection is becoming much less
          prevalent, but buying such software remains something of a lottery -
          you often cannot be sure that the software does what you want in the
          way you want it done until you have paid for it. User-supported
          software (Shareware) is different. You may have got a copy of this
          package free from a friend or a bulletin board or (for a nominal fee)
          from a users' group or software library. In any case, you have a
          perfectly legal working copy of the HDTEST package. You are encouraged
          to make as many copies of the package as you like and to distribute
          them to all your friends. If, after trying the program out, you find
          that it is useful and want to continue to keep and use it, you must
          register your copy by sending the registration fee ($35.00, unless you
          are already a registered user of DIREDIT, in which case it is $25.00)
          together with the completed registration form, to the address on the
          form. Only your conscience can make you do this (although you are                                         ____                              
          probably breaking the law if you don't), but bear in mind that the
          distributors of "user-supported" software are making the assumption
          that you are honest and willing to pay a reasonable price for a useful
          program, many commercial software vendors, on the other hand, would
          still apparently rather believe you are a crook. You can decide who
          you would rather prove right. Registered users are entitled to
          support, upgrades, and help with HDTEST-related problems (including
          telephone support) for a year from the date of registration.

          The author of this program is a member of the Association of Shareware
          Professionals (ASP).  ASP wants to make sure that the shareware
          principle works for you. If you are unable to resolve a shareware-
          related problem with an ASP member by contacting the member directly,
          ASP may be able to help. The ASP Ombudsman can help you resolve a
          dispute or problem with an ASP member, but does not provide technical
          support for members' products. Please write to the ASP Ombudsman at
          P.O. Box 5786, Bellevue, WA 98006 or send a Compuserve message via
          Easyplex to ASP Ombudsman 70007,3536"














          
          
                                          Page 1 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
                                       INTRODUCTION                                       ____________

          HDTEST was originally written to allow comprehensive Read/Write
          testing of hard disks on IBM PCs, XTs, ATs, and "true" compatibles.
          The V4.10 release removed many of the hardware restrictions imposed by
          earlier (V2.xx and V3.xx) versions of the program and made it useful
          for testing most MS-DOS-compatible storage devices currently in use on
          IBM-compatible computers, including removable (floppy and hard) disks
          and logically partitioned hard disks. The V4.34 release included BIOS-
          level support for DOS 3.3 (and above) "extended devices" and more
          options for the handling of totally unreadable sectors. The V4.53
          release added even more extensive support for IBM-incompatible
          hardware and removed the requirement that ANSI.SYS be loaded to
          support a proper screen display. The current release adds full support
          for the large (> 32Mb) devices allowed by DOS 4.0, the ability to
          locate bad spots physically (by track, head, and sector) on the disk,
          and some support for the use of .BAT files to run HDTEST on multiple
          disks at one "sitting".

          Although many programs, including IBM's diagnostics, allow "surface
          scanning" and seek testing of hard disks, few that are available to
          the average user test whether the whole disk can retain the data that
          is or will be written to it. HDTEST's principal "claim to fame" is the
          ability thoroughly to test the magnetic media in a device which
          contains data while preserving the data (although data loss is                        _________________________                       
          unavoidable if an area which is in use has become unreadable). HDTEST                                                              ____             
          tests the disk much more thoroughly than programs such as DFixer,
          Mace, and Norton's DT. Mace and DT, like many public domain "disk
          test" programs, simply read every cluster on the disk and report on
          any errors encountered.  DFixer does better, writing 4 test patterns
          to every free cluster and checking that they can be read back
          correctly, but it makes no attempt to test clusters that are already
          in use - the very ones which contain your precious data! Disk
          Technician (TM), a product which has come to market fairly recently,
          is more closely comparable to HDTEST than any other disk testing
          program that I know about. It is, however, much more expensive, is
          (functionally, at least) copy-protected, and is not available as                                                          ___             
          Shareware!

          In addition to its testing function, HDTEST has been reported to be
          useful as an automatic disk repair utility for both hard and floppy
          disks which have developed (especially) intermittent or persistent
          read errors, preventing or impeding their normal use. Although HDTEST
          cannot read the totally unreadable, it tries much harder that DOS does
          and will almost always, in the course of its operation, allow you to
          recover the entire readable portion(s) of a file with one or more                             ________                                      
          unreadable clusters in it, optionally either remapping all of what it
          reads from the disk or replacing bad sectors (the default) or clusters
          with NULLs. HDTEST is not an alternative to backing up your floppies                                ___                                           
          and/or hard disk - it may sometimes be able to save your neck when you                                    _________                                   
          forgot or your backup went bad too! On hard disks which have developed
          intermittent read errors, running HDTEST can sometimes totally cure                                                   ___                       
          the problem, presumably because the "flaky" sectors get rewritten and
          the minor misalignments and/or weakening of the magnetic "image" which
          were causing the trouble are corrected when the data is rewritten.


          
          
                                          Page 2 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          In its default ("slow") mode, HDTEST writes 20 different test patterns
          to every cluster on the disk and checks that each pattern can be read             _____                                                             
          back correctly, while preserving (and eventually restoring) the
          contents of the clusters that contain data.  HDTEST can even (on many
          devices) detect hard disk errors which are minor enough to be
          correctable (and corrected) by the disk controller's own "error-
          correcting code" (ECC).  These errors are normally totally invisible
          to programs running under DOS and will not usually be picked up by
          other disk test utilities.  They may, however, be early signs of
          problems that will become significant later, and HDTEST consequently
          marks these clusters, too, as bad. As long as HDTEST can read the data
          from a flaky cluster correctly once (and it tries quite hard) it will
          be able to save the file of which that cluster is a part intact, while                                                                   ______       
          marking the cluster so that DOS does not try to use it again. The
          program was designed to minimize the likelihood of user error causing
          data loss on a good (or slightly bad) disk, and to be as easy as
          possible to use - it could not be made very fast, since multiple bit
          patterns have to be written to and read from each cluster, and this
          takes a significant time even on a fast hard disk. The program does,
          however, have a less sensitive "fast" test mode, which writes only two
          test patterns to each block and is recommended for use when
          testing/repairing floppy disks and/or to correct intermittent problems
          or rule out gross problems on a hard disk.

          The program can be used to test/repair single and double-sided 8- and
          9-sector minifloppies (if you have plenty of patience!), as well as                                             ______                          
          AT-format 1.2Mb minifloppies, 8" standard floppies, and 3.5"
          microfloppies (with the same proviso regarding a need for patience).

          HDTEST's companion program, HDCHEK, simply examines the logical
          structure of the system and target device and gives a short report on
          what it finds. It does not write to the disk, and is provided                                 ___                                   
          principally to allow a quick and easy, but fairly reliable, check on
          the compatibility between HDTEST and a given software/hardware
          configuration. As part of its report, HDCHEK notes at what level (DOS
          interrupts only, INT 13, or direct entry to the BIOS) it was able to
          access the target device, which has a bearing on HDTEST's ability to
          detect certain types of errors. In general, if HDCHEK runs                                          __________                
          successfully on a system and target device, then HDTEST can be
          expected to do so, although the latter program requires much more
          available memory.

          The HDTEST package is distributed as "User-supported Software". If you
          intend to continue using the program, you are required to become a
          Registered user. Send a completed copy of the Registration Form (which
          is included in this documentation), together with a check or money
          order for $35.00 (+ $5.00 for shipping outside the continent of North
          America) to me at the address which appears on the form. Please also
          add $2.50 (or equivalent) if you want the software on a 1.2 Mb HD
          floppy or a 3.5" minifloppy, rather than a 360 Kb DSDD floppy, and
          specify which you want on the Reg. form. Checks and money orders in
          denominations other than U.S. dollars are acceptable, but please add a
          further $10.00 for bank charges before using the current exchange rate
          to calculate the fee in the currency in which you are paying. On
          receiving your Registration, I will send you a personalized copy of
          the latest, enhanced, version of the HDTEST package (currently V4.91),
          and register you for a year's support. Registration entitles you to be
          
          
                                          Page 3 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          notified of upgrades, bug fixes, newly discovered incompatibilities,
          etc., and to ask for (and get) necessary help in adapting the program
          to work on your hardware. I cannot guarantee to make HDTEST work with
          every possible combination of hardware and software, but I will
          promise to try to solve problems as they come up, and I will return
          your Registration fee if I cannot support HDTEST on your system.
          Support is available TO REGISTERED USERS ONLY by mail, BIXmail,                               ________________________                  
          Compuserve EMail and telephone. Please also bear in mind that my
          willingness and ability to continue to support and enhance these
          programs will be directly dependent on users' willingness to pay the
          Registration fee and (to some extent) inversely dependent on the
          number of questions I get that could be answered by reading the docu-
          mentation(!).

          The HD programs were written principally in C, compiled by the
          Microsoft C compiler (Version 5.10) using its "small" memory model,
          and linked with code from the distributed Microsoft C object libraries
          using the Microsoft LINK program (Version 4.06). Portions of the
          distributed program are consequently Copyright (C) by Microsoft Corp.,
          1985 - 1988. All rights reserved. These portions are used under the
          terms of a license from Microsoft Corp. Some low-level functions were
          written in assembly language and assembled by the Microsoft MASM Macro
          Assembler (Version 5.10).

          The HD programs were written with care and have been tested on a
          number of different systems.  I cannot, however, give any guarantee as
          to their performance on a specific system, nor can I accept liability
          for any actual or consequential loss resulting from their use. The
          programs may only be used and/or copied in their original form.
          Unauthorized modifications and/or the use of all or part of the
          programs in other software, commercial or otherwise, are strictly
          prohibited.

          The HD programs owe a lot of their value to suggestions and bug
          reports (more of the former than the latter, fortunately) from
          Registered users. They were originally written in response to a
          "challenge" issued by Roedy Green on Bix, and their further
          development has also been significantly influenced by his input.



















          
          
                                          Page 4 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          

                              GETTING STARTED - INSTALLATION                              ______________________________

          1) If you received the HDTEST package on a disk, use the DOS DISKCOPY
          program to make a duplicate of the distribution disk, put the original
          away in a safe place, and use the duplicate as your working disk.
          Otherwise, use COPY to save a copy of the HDTEST distributions files
          to a floppy disk, and put it away.

          2) HDTEST does not require any special installation procedure. You may
          run HDCHEK and HDTEST from your working floppy disk or from a
          subdirectory on your hard disk. If you wish to keep and run the
          programs on your hard disk, you will probably find it most convenient
          to COPY them to a subdirectory which is one of those included in your
          DOS PATH (see your DOS Reference Manual). Only the two main .EXE files
          (HDTEST.EXE and HDCHEK.EXE) need normally be kept on-line.
          BOOTLOAD.COM is only used or needed to create a special boot disk, if
          you find you need to use one.

          3) If you wish to be able to refer to this documentation on-line, you
          should follow the instructions in the README.1ST file on the
          distribution disk to produce a .TXT file (without underlining) and
          keep that file in your documentation subdirectory.


                             GETTING STARTED - TESTING A DISK                             ________________________________

          This section gives step by step instructions for running HDCHEK and
          HDTEST on the C: drive of a standard IBM PC, XT, AT, or 100%
          compatible. Subsequent sections of this documentation go into much
          more detail about some of the program's other features and options,
          and should help to explain and let you deal with any problems which
          you may encounter. Note that you should never attempt to run HDTEST                                                  _____                      
          under a multi-tasking or multi-user operating system, nor activate any
          "pop-up" program (e.g. SideKick) while the program is running.

          1) Make sure that you have current backups of all the files on drive
          C:. This is particularly important when running the program for the
          first time on a given system.

          2) Run DOS's CHKDSK program on drive C: and correct any errors
          reported by it before proceeding further.

          3) Make the drive and/or directory which contains HDCHEK.EXE and
          HDTEST.EXE your current drive and/or directory.

          4) If you are not running HDTEST from your A> drive, insert a
          formatted, non-write-protected floppy disk in drive A. HDTEST will
          write an ASCII log file called HDTESTC0.LOG to the disk in drive A -
          any other files on it will be undisturbed.

          5) Give the command: "HDCHEK C:". After a certain amount of disk
          activity has taken place, and certainly within a minute or two, your
          screen should look like one of the examples given in Appendix C. If
          any errors are reported, DO NOT PROCEED until you have read the rest                                   ______________                             
          of the documentation and/or are sure you know what is going on.

          
          
                                          Page 5 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          6) If HDCHEK reported no errors, give the command "HDTEST C: A:".             ____________________________                                  
          After some disk activity, the program will prompt for replies to three
          questions - press <Return> in response to each prompt. The program
          will report its progress to the screen and will record any problems
          encountered in the log file on the floppy disk. Depending on the size
          of your DOS partition and the access time of the disk, a complete run
          of HDTEST (in its normal, "slow", mode) will take between 2 and 5
          hours. Your intervention will only be required if a recovered bad          _____                                                            
          cluster is found in a "hidden", "system", or write-protected file,
          when you will be asked to approve remapping; otherwise, bad clusters
          will be automatically remapped. HDTEST can be aborted at any time by
          pressing <Esc> and responding to the "Are you sure...." prompt by
          pressing <Return>.

          7) If HDTEST finishes testing without finding any bad clusters, it
          will simply record that fact and the finishing time in the log file
          and return to the DOS prompt. Otherwise, when read/write testing has
          been completed (or terminated, by entering <Esc>), you will be
          prompted for permission to complete the remapping process by updating
          the disk FATs and Directories.  Pressing <Return> will allow this to
          take place, and you will then be returned to the DOS prompt.

          8) N.B. If HDTEST reported and remapped any bad clusters and you are             ____                                                  ___        
          using the DOS (3.3 and above) FASTOPEN utility, or any other
          directory- or file-cacheing software, you should reboot your system
          before proceeding with other work on it.

          9) In any event, if HDTEST reported and remapped some bad clusters,
          you should read the section on "Dealing with bad clusters" later in
          this documentation.



























          
          
                                          Page 6 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
                             HARDWARE & SOFTWARE REQUIREMENTS                             ________________________________

          HDTEST and HDCHEK make a number of assumptions about the environment
          in which they are operating. They will, generally speaking, abort with
          an informative error message if they find one of these assumptions to
          be untrue! They require MS/PC-DOS 2.x or above and (for HDTEST) up to
          about 320 Kb of free memory (the exact amount required depends on the
          size and other characteristics of the device being tested) to run -
          the presence of more memory may (slightly) increase HDTEST's speed
          when testing devices with large cluster sizes. The device to be tested
          must be usable as a normal DOS device - commands such as DIR, COPY,
          and CHKDSK should be valid for it and for files and subdirectories on
          it. It need not, however, be bootable. Only the DOS partition(s) of a
          multi-operating-system disk can be tested, but all the partitions of a
          disk that is divided into multiple DOS partitions can be tested (one                                             ___                              
          by one). This version of HDTEST fully supports DOS 3.3 (and above)
          extended partitions, and will test them as thoroughly as it does
          normal DOS partitions. HDTEST's support for other disk partitioning
          software is provided only to the extent that DOS support is provided
          by the producers of that software.

          If you wish to use HDTEST to test a new hard disk which is to be                                       ____                               
          configured to support multiple operating systems, you should first
          configure it as one or more DOS partitions, test it in that
          configuration, and then reconfigure it as you intend to use it. If you                                  __                                            
          have low-level disk formatting software which allows you to specify
          bad sectors and/or tracks to be "locked out", you can use HDTEST's /G
          option on the DOS partition(s) to  produce a list of defects, which
          can then be used in reformatting the disk. Note that HDTEST can only                                                                          ____
          be used as a test for areas of the disk that are to be devoted to                       ____                                                
          other operating systems - when you repartition the disk, any remapping
          and/or marking of bad clusters which HDTEST may have done in the DOS
          partition is lost.

          Ideally, for normal hard disks, the BIOS handler for interrupt 13
          should be capable of handling (at least) normal disk reads and writes
          (sub-functions 2 and 3) in a way that is compatible with that
          documented for the XT hard disk adapter (and AT BIOS) in IBM's
          technical documentation. This should be no problem for most disk
          systems on IBM PCs and most compatibles.  HDTEST may, however, be
          forced to use the (somewhat more limiting) DOS device interface when
          used with non-bootable hard disks and/or with hard disks which require
          special device drivers to be installed, and will be forced to use the
          DOS device interface when dealing with disks partitioned by means
          other that the DOS 3.3 (and above) utilities.

          Earlier V4.xx releases of HDCHEK and HDTEST would abort if run on
          small (<= 10 Mb) hard disks which had been patched to use a cluster
          size smaller than the DOS standard (and 16-bit FATs). This deficiency
          has been corrected in the current version, but very small (less than
          1024 clusters) partitions may still cause problems if 16-bit FATs are
          used (there is no good reason why such partitions should use 16-bit
          FATs).

          If run under DOS 3.0 or above on an IBM INT 13 compatible hard disk,
          The HD programs attempt to locate and use the ROM BIOS INT 13 entry
          point, rather than the normal INT 13 vector (which DOS 3.x intercepts
          
          
                                          Page 7 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          and interferes with). By default, for machines with 8088, 8086, 80188,
          80186, or equivalent CPUs the programs assume that, if a ROM is                                                              ___________
          present at absolute address C8000H, it contains the hard disk BIOS and          _______                                                            ___
          has initialization code starting at offset 3. This assumption is true
          for all hard disks which "plug in" to the IBM PC and XT. It may not be
          true for all clones which come with hard disks installed, although it
          is likely to be true for most of them. Also by default, the programs
          assume that the hard disk BIOS in systems with 80286 or 80386
          processors is in the "system" ROM at absolute address F0000H, but make
          no more specific assumptions about its exact location. Problems (up to          __                                                                    
          and including system halts) may occur if none of the special flags is
          set and your system is configured in a way that is not consistent with
          these assumptions. Such problems are almost guaranteed for PC or XT
          systems if the initialization code does not start at offset 3 in the
          ROM. If you know that your hard disk ROM is located somewhere other
          than at the default segment address and/or does not obey the "rules",
          you can use the /H flag to tell the programs where to look for it.
          Unless you know that your system is particularly non-IBM-compatible,
          however, it is usually worth trying to run the HD programs in their
          default mode first. Problem hardware should respond to one of the
          approaches described in the "Using the Special Preboot" section of
          this documentation. The use of all the command line flags is discussed
          in more detail below.

          Note that, since HDTEST remaps bad clusters to free space, there is
          not much point in running it on a disk which has none (as shown by DIR
          or CHKDSK), since the program will abort immediately if it finds a bad
          cluster.  Unless you have a really flaky disk, however, you should not
          need more than a couple of hundred Kb free to remap any reasonably
          probable number of bad clusters.

          This version of the HD programs does not require an ANSI console
          driver (such as ANSI.SYS) to be loaded. The programs will, however,
          continue to function correctly if such a driver is present.























          
          
                                          Page 8 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
                               LIMITATIONS AND RESTRICTIONS                               ____________________________

          The current version of HDTEST still has a few (mainly theoretical)
          limitations, most of which result from the way data is stored
          internally by the program. None of them are "etched in stone",
          although some could only be avoided at the cost of slowing down what
          is already (and necessarily) far from a fast program. The known
          limitations are as follows:

          1) Maximum cluster size = 65,528 bytes. I do not believe that a DOS
          disk can ever have clusters larger than 64 Kb, but my limit is a few
          less than that and may, since sector and cluster sizes tend to run in
          powers of 2, effectively limit cluster size to 32 Kb - this should be
          enough for most people!.

          2) Because of certain limitations of the chips used to support direct
          memory access (DMA, the method used to transfer data from disk to
          memory and vice versa) in the IBM PC and most clones and compatibles,
          HDTEST may be unable to use available memory efficiently when cluster
          sizes (and the buffers needed to hold them) are large. This
          inefficiency can result in "Insufficient Memory" or "Memory
          Allocation" errors, even on systems with more than the minimum 320 Kb
          of free memory prescribed above. The only cure for this is to free up
          (or buy!) more memory (remove RAMdisks, remove resident software,
          etc.).

          3) The current version of HDTEST will run, in its default mode, on ATs
          and most AT clones, but may not be able to detect corrected ECC errors
          when run in that mode on some of the clones - a warning message will
          be displayed when the program initializes itself if corrected ECC
          errors are not being detected. Appropriate use of the extended form of
          the /H flag or the /U flag, as described in the "Using the Special
          Preboot" section of this documentation, will allow detection of
          corrected ECC errors on almost all hardware. The program will not                                                                        ___
          detect corrected ECC errors when invoked with the /I flag (under DOS
          3.0 or above) or with the /D flag.

          4) For reasons which are poorly understood (at least by the author!),
          HDTEST runs very slowly on Epson Equity II systems, particularly when                      ____                                                     
          used to test "plug-in" hard drives of the "Hardcard" or "Flashcard"
          variety. For this hardware, the estimated run times given elsewhere in
          the documentation need to be multiplied by about 2.5. There is some                                       __________          ___               
          reason to think that this problem may be related to an excessively
          "optimistic" interleave setting on (at least) some of these systems.

          5) HDTEST or HDCHEK will, by default, abort with an informative error
          message if the program detects that the (80286 or better) CPU that it
          is running on is not in "real" mode, since this normally means that a
          (possibly multitasking) OS other than MS/PC-DOS is running and that
          HDTEST cannot be guaranteed unchallenged access to the hardware. The
          presence of LIM 4.0 expanded memory emulators such as QEMM-386 or
          386^Max, which use the 80386's "virtual 8086" mode to allow remapping
          of extended memory into unoccupied space in the area between 640 Kb
          and 1 Mb, will cause a similar abort, unless the driver is inactive
          (turned "OFF"). This safety feature can be bypassed by the use of the
          /V command line option (see below).

          
          
                                          Page 9 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          6) HDCHEK and HDTEST will operate normally (except than the /U or /H
          flags will generally be needed to use the low-level interface) on
          (very large) hard disks with more than 1024 cylinders, provided that
          the partition being tested does not begin or end above cylinder 1023.                                                    ______                     
          If the partition starts below and ends above this point, HDCHEK will
          issue a warning and HDTEST will abort unless the /D flag is used. If
          the partition starts above cylinder 1023, both HDCHEK and HDTEST will
          abort without the /D flag.


                                   COMMAND LINE OPTIONS                                   ____________________

          Always run HDCHEK on any new hardware/software configuration before          ______                                                             
          you attempt to run HDTEST (at least the first time). The latter
          program has been written as conservatively as possible, but it is not
          possible to predict the behavior of every conceivable combination of
          hardware and operating system when dealing with a program which
          bypasses most of the controls which normally protect the user from
          destroying his world. HDCHEK is invoked with the command line:

          HDCHEK device [/A] [/Cn | /CQ] [/D | /I | /U] [/Hnnnn[:nnnn] [/M] [/V]

          "device" is the device to be tested (e.g. A:, B:, etc. - the colons
          are permitted but not required). For versions of HDCHEK from V4.35,                            ___                                              
          the spaces between the device identifier and the flags (and between
          different flags) are optional - the command lines "HDCHEK C:/C2/D" and
          "HDCHEK C: /C2 /D" are equivalent.

          The /A(T) flag is used to tell the HD program that it is being run on
          an IBM AT. Setting the /A flag allows the programs to deal correctly
          with a known bug in the IBM AT floppy disk controller BIOS when HDTEST
          is used on 1.2 Mb "AT format" 5.25" floppy disks. If the /A flag is
          set and the CPU is not an 80286 or better, you will be asked to
          confirm that you wish to use AT defaults (HD BIOS at F0000H).

          N.B. the definition of the /A flag changed (slightly) at V4.71 - it          ___________________________________________________________________
          need now only be used if you are testing a 1.2 Mb floppy disk on a          __________________________________________________________________
          "vanilla" IBM AT. It may still be used to change the default BIOS          _________________________________________________________________
          segment to F0000H on a PC or XT class machine, but the use of the /H          ____________________________________________________________________
          flag for this purpose is preferred.          ___________________________________

          The /C flag has two variants. It is used, immediately followed by a
          single decimal digit ("n") in systems which do not support IBM's INT
          11 "equipment determination" BIOS function (e.g. the Tandy 2000). The
          parameter ("n") is the number of floppy drives attached to the system,
          which would otherwise be determined by the program, using INT 11. The
          second variant should be used on Compaq computers - here, the flag is
          followed by a "Q", instead of a number. This variant enables large
          device support (as for IBM DOS 4.00) under Compaq DOS 3.31.

          The /D(OS interrupts) flag forces HDCHEK to use the hardware-
          independent DOS interrupt 25 for access to the target device. It is
          usually not required, since the program is usually smart enough to          _______                                    _______                
          recognize devices which have to be accessed this way (e.g. logical
          disk partitions other than those created as DOS 3.3 (and above)
          "Extended Devices", non-bootable hard disks, some removable-media hard
          disks). If the /D flag is not used, the program will issue a warning                                    ___                                       
          
          
                                         Page 10 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          message if it finds it has to use the DOS interrupts.

          N.B. the definition of the /D flag changed at V4.00 - the new /I flag          _____________________________________________________________________
          has the same effect as the old (pre-V4.00) /D flag. Only one of these          _____________________________________________________________________
          flags may be present on the command line.          _________________________________________

          The /I(nterrupt 13) flag has no effect under DOS 2.x.  Under DOS 3.0
          or above, it forces HDCHEK to use the existing INT 13 vector (which it
          always does under DOS 2.x), and prevents the program from trying to
          determine the ROM BIOS entry point; the flag should be used if you
          know that your system's fixed disk BIOS uses INT 13 but does not
          follow IBM's "rules" or if the program crashes the system when invoked
          without it.

          The /H(ex BIOS address) flag is normally used (with a single numeric
          argument) to tell the HD programs that the ROM BIOS of the device
          being tested is located at nnnn, which is interpreted as a Hexadecimal
          segment address, rather than at C800, which is the default for PC and
          XT class machines, or F000, which is the default for systems using a
          80286 or better CPU. There must be no space between the H and the
          number. The extended form of the /H flag (e.g. /HF000:80D5) forces the
          HD programs to use the given address as the ROM BIOS INT 13 entry                                               ____________________________
          point. Its use is documented in more detail in the "Using the Special          _____                                                                
          Preboot" section of this documentation.

          The /M(ulti-track read problem) flag forces HDCHEK to split up disk
          accesses that would otherwise require the BIOS to read data from more
          than one track in a single "bite". Its use is documented in more
          detail in the "Using the Special Preboot" section of this
          documentation.

          The /U(se INT 68) flag forces the HD programs to use the existing INT
          68 vector (which must have been set up to point to an appropriate
          location!) instead of locating and using the INT 13 BIOS entry point.
          The use of this flag is documented in more detail in the "Using the
          Special Preboot" section of this documentation.

          The /V(irtual mode) flag bypasses the code which prevents the HD
          programs from working when the (80286 or better) CPU is not in "real
          mode". It should only be used when the programs are being run under a                           ____                                                
          single-tasking operating system which is using "virtual mode" only for                                                                        ____    
          memory-mapping. Certain LIM 4.0 expanded memory emulators for 386
          machines use the processor's virtual mode for this purpose. The two
          most well-known examples of this software are QEMM-386 and 386^Max.
          The HD programs are "DESQview aware", and will abort if run under
          DESQview, even if the /V flag is used. They will not be able to
          protect you from the (probably disastrous) consequences of using the
          /V flag to run them under other multi-tasking OSes (such as VM-386).

          After a short delay, during most of which the specified device will be
          active, a description of the device's logical structure will be disp-
          layed.  After a further delay, and more disk activity, a message will
          be printed giving the number of files and subdirectories found on the
          disk, and the program will exit back to DOS. Note that the total
          number of files and subdirectories reported by HDCHEK will be greater
          than the sum of the counts reported by CHKDSK. This is because HDCHEK
          counts the "." and ".." entries in subdirectories and CHKDSK doesn't.
          
          
                                         Page 11 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          Errors and/or problems encountered, if any, will be reported on in
          some detail. A number of example screen displays and log files
          produced by running HDCHEK (and HDTEST) on different systems will be
          found in Appendix C at the end of this documentation. If HDCHEK tells
          you that you have a bad 8088 chip, believe it - some early 8088s had a
          bug which allowed them to be interrupted while changing their stack
          frame*  - this is not benign, and can cause all sorts of rare,
          otherwise almost inexplicable, problems. The only cure is to replace
          the CPU (which is, fortunately, not a particularly expensive
          proposition these days). If HDCHEK reports a discrepancy between the
          two FATs, HDTEST will abort. The FIXFAT program (on the distribution
          disk) may be able to correct this problem - see FIXFAT.DOC, also on
          the distribution disk. 

          Always run the DOS CHKDSK program immediately before running HDTEST on
          a disk. If CHKDSK reports any problems, its /F option (or other means)
          should be used to correct them before HDTEST is run.                                         ____________________ 


          HDTEST is invoked with the command line:

               HDTEST device1 [device2[:pathname]] [optional parameters]

          "optional parameters" may include one or more of the following:

          [/A] [/B] [/Cn | /CQ] [/D | /I | /U] [/F] [/G[V]] [/Hnnnn[:nnnn]] [/M]
          [/N] [/P] [/R[n]] [/Snnnnn] [/U] [/V] [/X] [/Yn] [/Z[n]]

          "device1" is the name of the device to be tested, as for HDCHEK.
          "device2" (which, if present, must be different from "device1") is the                                        ____                                    
          name of a device on which a log file is to be written, which may be
          immediately followed by  a file- or path-name for the log file. If
          only a device name (with or without a colon) is specified for the log
          file, a file called HDTESTdn.LOG will be written to the default
          directory on the specified device. "d" in this file specification is
          replaced by the single-character specifier of the device being tested,
          while "n" is replaced by the lowest decimal digit which results in the
          creation of a new file (previous log files will not be overwritten).                        ___                               ___                 
          If all ten possible log file names for this test device have already
          been used, the program will prompt for a new name. If a directory path
          (ending in a backslash (\)) is specified as device2, HDTESTdn.LOG will
          be created in the specified directory. If a full pathname is specified
          (not ending in a backslash), a file with that pathname will be opened           ___                                                                 
          as the log file. In this case (only), any pre-existing file of the
          same name will be overwritten. If "device2" is not specified, errors
          are reported to the console terminal. The DOS console redirection
          facility should not be used to redirect them elsewhere.                          ___                                    



          _____________________________________________________________________

          * See "Chips in Transition", by Bob Smith. PC Tech J. 4:4 (Apr. 1986):                                                     __________                 
          56-69. The code which the HD programs use to identify the CPU and
          diagnose this problem is adapted from the CPUID program described in
          this article and from code from subsequent, related, articles in that
          (now defunct) magazine.
          
          
                                         Page 12 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          For versions of HDTEST from V4.35, the spaces between the device
          identifier and the flags (and between different flags) are optional -
          the command lines "HDTEST C:/A/F" and "HDTEST C: /A /F" are
          equivalent.

          The /A, /C, /D, /H, /I, /M, /U, and /V flags have the same meaning and
          effect that they do for HDCHEK. When used for HDTEST, the /D flag
          forces the use of INT 25 to read from and INT 26 to write to the
          target disk.

          The /B(oot/Partition sector test) flag forces the program to include
          the boot/partition sector (track 0, head 0, sector 1) in the DOS area
          for the purposes of read/write testing. The default action is only to
          perform read and seek tests on this sector, even if read/write testing
          of the DOS area is specified. Since the boot/partition sector is
          effectively read-only under normal circumstances (it is only written                                                                       _______
          to during low-level formatting, and by FDISK and other disk          __                                                         
          partitioning programs), read/write testing is less vital than for the
          rest of the disk. In addition, at least one hard disk controller (a
          Western Digital board which allows a single disk to be addressed as
          two "physical" devices) will not allow test patterns to be written to
          this sector. Certain devices (chiefly RAMdisks) appear to DOS to be
          hard disks but do not, in fact, possess boot/partition sectors. On
          these devices, HDTEST will report check/test results on the
          boot/partition sector while actually reading/writing the device's boot
          sector - the latter sector will simply end up being checked/tested
          twice under these circumstances.

          The /F(ast mode) flag causes the program to use only two test patterns
          (all 1s and all 0s) for read/write testing. It is intended for use on
          floppy disks and for "quick and dirty" testing of other devices.

          The /G(ive error details) flag causes the program to determine the
          location of errors occurring during testing of the disk's data area at
          the sector level (they are normally handled at the cluster level), and
          to report on the location of all bad sectors found. The report is
          written to the log device or file after all testing is finished. By                                            _____________________________    
          default, only an error code is given for each bad sector - if a V (for
          "verbose"!) is appended to the flag, the error code is expanded to a
          report similar to that given for each bad cluster. This flag is
          ineffective (and ignored) if HDTEST is using DOS interrupts, either
          because the /D flag was set or because the program was not able to
          access the disk at the BIOS level.

          The /N(o Query) flag disables the individual prompts for confirmation
          which the program normally issues before remapping clusters which are
          marked as "Reserved" or which are part of a file which is marked as
          "System", "Hidden", or "Readonly".  The /N flag does not prevent the                                                               ___            
          program from prompting for confirmation before updating the disk.

          The /P(rint) flag causes the log file to be directed to the PRN device
          (normally LPT1), and overrides any "device2" specification.

          The /R(epeat)n flag causes HDTEST to go through n complete testing
          cycles. Omitting n, or setting it to zero, causes HDTEST to run
          continuously until terminated by pressing <Esc>). Instead of stopping
          after completing the testing of allocated data clusters, the program
          
          
                                         Page 13 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          immediately starts again with the DOS area. Any bad clusters found and
          flagged in the first pass should be reported as "already marked as
          bad" in subsequent passes. The /R flag implicitly sets the /N flag.

          The /S(tart)nnnnn flag causes HDTEST to start testing occupied                                                                ________
          clusters at cluster number nnnnn (expressed as a decimal number).                                                           _______         
          There must be no space between the "S" and the number. This option
          will mainly be useful when a previous run of HDTEST was interrupted
          (by pressing <Esc>), since it allows you to start where you left off.
          Note that, in order to be sure that data is not remapped to a bad
          area, HDTEST always tests all empty clusters before starting to test                       ______       ___                                       
          occupied clusters. For this reason, using the /S flag will not result
          in a large time saving if your disk is nearly empty, and it will make
          the most difference on a full, or nearly full, disk.

          The /Y(es, please remap)n flag causes HDTEST to remap up to n (a
          decimal number) bad clusters without prompting for confirmation. It is
          effective only if HDTEST is allowed to run to completion, and is
          intended to allow the program to be run unattended on multiple disks
          from a .BAT file. If more than n bad clusters are found or if the
          program is aborted (by pressing <Esc>), the normal prompt for
          confirmation is issued before any bad clusters are remapped. See
          "Running HDTEST from a .BAT file".

          The /X(clude bad clusters) flag causes HDTEST not to test clusters                                                        ___                 
          that are already marked as bad by FORMAT or previous runs of HDTEST
          (the default is to test all clusters every time the program is run).                                  ___                                         
          This saves some time when testing a disk with a substantial number of
          known defects. The marked clusters will be reported as bad but will
          not be retested. The /X flag overrides the /G flag for previously
          marked clusters - no bad sector report will appear for these clusters
          if both flags are used.

          The /Z(ero bad sectors)n flag controls how HDTEST deals with sectors
          that could not be read correctly (due to unrecoverable read errors)
          when it remaps bad clusters. Versions of HDTEST up to and including
          V4.10 (somewhat cavalierly) disregarded the remaining contents of the
          entire cluster if one or more sectors in it were unreadable, and
          remapped it to a cluster of NULLs. The default action is now to
          replace only the unreadable sector(s) with NULLs, transferring the                                      _________                             
          remaining sectors intact to the remapped cluster. There are, however,
          two other options, which can be chosen by setting n to 0 or 2 (if n is
          omitted, 1, or any other number, the default action is taken). Setting
          n to 0 uses the old default (remaps the bad cluster to a cluster of                          ___                                      _______   
          NULLs), while setting n to 2 goes to the other extreme and copies all
          data read (some of which is almost certainly invalid) to the remapped
          cluster. It is always safe and often advisable to use the /Z2 option
          provided that you do not try to use any non-ASCII files that have been          ______________________________________________________________________
          remapped with unrecovered read errors and this (/Z) option. Remapped          ___________________________________________________________         
          ASCII files can be inspected with an editor and fixed up where
          necessary - non-ASCII files (e.g. .EXE, .COM, .WKS files) may appear
          to be undamaged (the program may run, the worksheet be readable, etc.)
          but they can still contain small changes which will cause trouble
          later, and they cannot easily be checked. The large "holes" which /Z
          options 0 and 1 leave in such files usually allows it to be much more
          obvious that they are defective!

          
          
                                         Page 14 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
                                   WHAT DOES HDTEST DO?                                   ____________________

          After displaying its copyright message, HDTEST reads the FATs and
          scans the root directory and all subdirectory trees of the specified
          device before initiating a short dialogue. All questions are of the
          "Yes/No" type and should be answered by typing "Y" or "N" (case does
          not matter) and pressing the <Return> key.  Pressing the <Return> key
          alone is equivalent to giving the default response (which appears in
          square brackets at the end of each prompt).  HDTEST then proceeds to
          test the specified device. By default, the DOS area (boot sector,
          FATs, and root directory) is not subjected to Read/Write testing,
          since failures in this area usually make themselves apparent fairly
          rapidly. The user can, however, choose to run these tests on the DOS
          area too, or to limit testing to read and seek tests only over the
          whole partition.

          In its reports to the screen, HDTEST uses the convention that read-
          only testing is "Checking" while read/write testing is "Testing" - it
          always "checks" the boot/partition sector and the rest of the DOS
          area, but only "tests" them if requested to do so.

          In "checking" or "testing" a block (sector or cluster), HDTEST first
          reads it (retrying, if necessary, up to five times) and then does the
          longest possible seek away from it before attempting to read it again.
          "Checking" is complete at this point. "Testing" continues with the
          program sequentially writing 20 (or 2, for "fast mode") different bit
          patterns to the block and checking that each one can be read
          correctly, before rewriting the original contents of the block (and
          reading it again to ensure that it has been restored correctly).
          Errors that occur at any point in this process are reported and (if
          the block is in the data area - errors in the DOS area are always
          treated as fatal) the block is remapped. If an error is detected in a
          "Reserved" cluster or in one that is part of a file which is marked as
          "System", "Hidden", or "Readonly", the user is normally asked for
          confirmation before the cluster is remapped, otherwise it is assumed
          that remapping is desired.

          HDTEST keeps a copy of the FAT and a map of the device's directory
          structure in memory. A bad cluster is remapped by transferring its
          contents to a free cluster and (if the bad cluster was in use)
          changing all necessary FAT and directory entries in memory so that the
          pointer chain which maintains the structure of the affected file or
          subdirectory remains valid. The bad cluster's FAT entry is then
          altered to identify it as bad to DOS. The device's FATs and                                                    ________         
          directories are not altered until the whole device has been scanned,
          and then only after the user has confirmed that it is OK to proceed.
          This means that a power failure and/or an inadvertent power-off which
          occurs while the program is running will cause the loss of, at most,
          one cluster of data and of no FAT or root directory information
          (unless you are very unlucky and it happens after you have confirmed                          ____                                                
          that you want a damaged data area to be remapped and while this is
          being done). If a power failure and/or power-off occurs while a
          cluster which contains the directory information of a subdirectory is
          being tested, part or all of that subdirectory will probably become
          inaccessible to DOS, although the data in it will remain on the disk
          and be potentially recoverable with the aid of (e.g.) the Norton
          Utilities (TM).
          
          
                                         Page 15 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          You can safely interrupt the testing process part way through (by
          pressing the <Esc> key) with no risk of leaving a partially updated
          FAT or directory. If you do interrupt the program in this way, you
          will be given the option of updating the disk, so that bad clusters
          which were detected before <Esc> was pressed can be remapped.

          Errors which occur in the program's initialization phase cause it to
          abort with an error message and (sometimes) a hexadecimal error code.
          The meaning of the error code is context-dependent and it is useful
          only to technical support personnel (i.e. the author!). Errors
          detected during read-write testing only cause the program to abort if
          they occur during testing of the DOS area, or if remapping is
          impossible (only likely to happen if the disk is full). In any event,
          a description of the error is written to the log file (if any) and/or
          to the screen. This specifies the cluster or (for the DOS area) sector
          number and the name of the affected file (if any), and defines the
          type(s) of error which occurred. Appendix B contains a discussion of
          some of the more technical aspects of data storage on disks (floppy
          and hard), and includes more information about some of the possible
          errors that may be encountered.

          HDTEST takes a very long time to run to completion because of the                         ____                                              
          large number of reads and writes it does for each cluster. A typical
          time for full testing ("slow" mode) of an XT disk (10 Mb) would be 2
          hrs; full disk testing on a 30 Mb Enhanced AT takes at least 4 hrs.
          Note also that using the /D or /G flags will substantially slow down
          the testing of disks with significant numbers of bad spots. Using the
          /X flag as well will allow the physical location of new defects to be
          reported without requiring that known bad areas be exhaustively
          retested.


                                USING THE SPECIAL PRE-BOOT                                __________________________

          All IBM systems (at least non-PS/2 ones - I have little experience,
          yet, with the new line of IBM hardware) - and almost all clones
          capable of running IBM PC-DOS (rather than "generic" MS-DOS) should
          also run the HD programs with no problems, and should allow them to
          locate and use the ROM BIOS INT 13 entry point with no help from the
          user. Less compatible systems have presented more problems in the
          past, but this version of HDTEST is distributed with a supplemental
          program (BOOTLOAD) which can be used to modify the boot sector on a
          floppy disk and create a special pre-boot floppy to allow
          identification and use of the "real" INT 13 entry point on almost any
          MS-DOS-compatible system. Once created by BOOTLOAD, the special boot
          sector will be correctly duplicated if copy the disk by using the DOS                 ____                                                          
          "DISKCOPY" command - it will not be copied by a "COPY *.*" command.                                       ___                                   
          Further documentation for the BOOTLOAD program (BOOTLOAD.DOC) should
          have been included in this package.

          After using BOOTLOAD to create the special pre-boot disk, insert it in
          the boot drive (normally drive A), then (re)boot your system as you
          normally do (either by switching it on or by pressing the <Ctrl>-
          <Alt>-<Del> combination or its equivalent for your hardware). After
          performing its self-test, the system's BIOS will load and pass control
          to the code on the boot sector of the floppy. On a normally FORMATTed
          floppy disk, this code attempts to locate the MS-DOS system files at
          
          
                                         Page 16 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          the beginning of the disk's root directory and to load and execute
          them. The HDTEST boot disk will not load DOS (even if you SYS the
          disk) - it simply reads and reports on the contents of the INT 13
          vector (which DOS has not yet had a chance to tamper with, since it
          has not been loaded) and conditionally transfers the vector to the INT
          68 location. The INT 68 location is normally unused in MS-DOS systems
          - it is defined that way by IBM - and is usually loaded either with
          zeroes or with a pointer to some "do-nothing" code by the BIOS
          bootstrap. The HD programs use it for the "real" INT 13 vector,
          normally saving the original contents of the location on entry and
          restoring them on exit. This behavior is modified by specifying the /U
          switch on the command line. The HDTEST boot sector code will only
          transfer the "real" INT 13 BIOS entry point to the INT 68 location if
          the latter contains either zeroes or the same vector as INT 69. In the                              ______        __                                  
          latter case (since there is no point in having two "real" interrupt
          vectors pointing at the same place), it is assumed that both are
          pointing at "do-nothing" code. If the INT 68 vector is neither 0:0 nor                                                                 _______     ___
          the same as the INT 69 vector, the preboot code will leave it alone
          and report that the INT 13 vector was not transferred, otherwise it
          will confirm that the transfer has taken place - in any event, you
          will be given an opportunity to write down the vector and can then
          remove the disk and press a key to allow the boot process to complete.
          If you need to boot from a floppy disk, for some reason, a new,
          bootable, disk can be inserted before you press the key to continue.

          If the preboot reported that the INT 13 vector was successfully
          transferred, you should simply specify the /U flag on the HDTEST or
          HDCHEK command line, in addition to the "short" form of the /H flag                               ______________                                
          (if the BIOS ROM is at an unusual location for the class of machine).
          The requirement for the /H flag with unusual hardware allows the
          program to do some additional "reasonableness checking". Unless some
          other software interferes with it, the INT 68 vector will then
          continue to be set up correctly for use by the HD programs until the
          system is switched off or rebooted.

          If the preboot was not able to transfer the vector, or if you know
          that a device driver or resident program loaded by your DOS uses INT
          68, you should invoke the HD programs with the "long" form of the /H
          flag, specifying the full address displayed by the preboot. No error
          checking is attempted in this case - if you mistype the address, the
          first time the program attempts to access the disk, it will jump to a
          (effectively) random location in ROM, with potentially disastrous
          results. If it is feasible, use of the pre-boot disk and the /U flag
          is preferable (in terms of safety, if for no other reason) to that of
          the "long" form of /H.

          The following example may help to clarify matters. You have a clone
          system with a BIOS ROM location that is non-standard. The HDTEST boot









          
          
                                         Page 17 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          disk reports that the INT 13 entry point is at E000:13AC, and that the
          vector has been successfully transferred. You may now run HDTEST with
          the command line:

          HDTEST C: A: /U /HE000                            ____

          You may also, now or later, with or without prior use of the pre-boot,                                      _______________                           
          run HDTEST with the command line:

          HDTEST C: A: /HE000:13AC                         _________

          Note that the /H flag is not needed with the /U flag if the segment                                   ___                                       
          address of the hard disk BIOS is the usual value for the system type                                                           ___________________
          (as determined by the processor). For a system based on an 8088, 8086,
          80188, or 80186 processor, this "usual" value is C800. For all other
          systems, the "usual" value is F000.

          One further problem may be encountered - certain hard disk BIOSes do
          not exactly comply with IBM standards in dealing with disk accesses
          that cross track boundaries, and will produce frequent errors when
          such accesses are attempted. It was this "multi-track read" problem
          which resulted in a number of previously apparently 99.99% IBM-
          compatible systems failing to run IBM PC-DOS 3.3 (which was the first
          version of DOS actually to attempt such accesses). IBM issued a "fix"
          for this problem, in the form of a program which, when run on the
          "bad" system, creates a device driver which protects the BIOS from
          being asked to do something that it can't. This device driver does its
          job by intercepting INT 13, and will, of course, do nothing to help
          the HD programs if they are bypassing that interrupt. Use the /M flag
          with the HD programs if you have a system on which PC-DOS 3.3 or above
          will not run without being "fixed" as described. It forces the
          programs to split up the multi-track accesses into manageable chunks -
          this can be expected to cause a substantial slowing of the programs'
          operation.


                                 DEALING WITH BAD CLUSTERS                                 _________________________

          It is not unusual for a new hard disk to have a small, constant,                                                          _____  ________ 
          number of bad clusters. IBM's quality control standards allow, for
          example, 5% of the surface area of a disk to be bad (!). These pre-
          existing bad clusters, which correspond to imperfections in the
          magnetic coating on the disk, will normally be detected and marked by
          the DOS FORMAT program, and HDTEST will report them as "already marked
          as bad". This should not be regarded as evidence of any real problem
          with the disk, although some suppliers (not including IBM) will                                                  ___                    
          replace such disks under warranty if pressed to do so. It is also not
          unusual for a disk to develop a few more defects as it ages. When                                          ___                              
          these do develop, they are also subsequently constant in size and
          position, and will be reported as "already marked as bad" by HDTEST on
          runs subsequent to that during which they are first found. The
          occasional appearance (and subsequent persistence) of a new bad          __________                                                     
          cluster is, therefore, not necessarily evidence of serious trouble
          developing.  However, if more than one or two new bad clusters are
          reported by HDTEST, and especially if two consecutive runs (or passes,
          if the /R flag is set) of HDTEST report different bad clusters, there                                                  _________                    
          is a good chance that the hard disk or controller is developing a
          
          
                                         Page 18 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          serious problem - the disk should be backed up immediately and the
          disk and/or controller sent for repair at the earliest opportunity.

          New bad clusters in the data area are automatically mapped out by
          HDTEST, and no further action is necessary. Bad sectors in the DOS
          area can be handled in two ways:

          1) If you are able to do a low-level format on your hard disk (most                                     _________                               
          makers of "add-on" hard disks supply a method of doing this, either in
          the form of a short program, or by giving instructions for running a
          program in the ROM BIOS from DEBUG), back up the entire hard disk                                                           ______          
          (including any non-DOS partitions), run the low-level format, use
          FDISK to repartition the disk, and then run the DOS FORMAT program. If
          HDTEST now reports no errors in the DOS area you can restore all your
          files and continue to use the disk. You should, however, use HDTEST to
          test (at least) the DOS area fairly frequently for a month or so to be
          sure that the problems are not going to recur.

          2) If you do not have the means to do a low-level format, or if you
          follow the above instructions and HDTEST continues to report errors in
          the DOS area, your only other choice is to back up the DOS partition,
          reconfigure the disk with FDISK so that the new DOS partition starts
          above the bad area, reFORMAT it, and restore all of the old files to
          the new DOS partition (which will unavoidably be a little smaller than
          the old).

          If the hard disk's boot/partition sector (track 0, Head 0, sector 1)
          becomes bad, the disk is useless and must be replaced. This sector is
          only subjected to read/write testing if the /B flag is specified on                            __________                                       
          the command line, so any reported errors (in sector -1) during normal                                                              __               
          testing represent a problem reading the sector and are likely to be                                      _______                                
          significant. Problems encountered during read/write testing of this
          sector do not always indicate a significant problem - certain                    ___                                                
          controller cards may not allow test patterns to be written to it,
          resulting in a report of multiple errors on read/write testing.
          Consequently, if multiple errors are reported on read/write testing of
          the boot/partition sector, but read-only testing proceeds without
          problems and the rest of the disk seems to be OK, there is probably no
          cause for concern.


                              RUNNING HDTEST FROM A .BAT FILE                              _______________________________

          Versions of HDTEST from V4.75 can be run from a .BAT file (e.g. for
          unattended testing of multiple disks) without the user losing the
          ability to "escape" cleanly from the program. The /Y flag also allows
          the user to specify a maximum number of new bad clusters for each disk
          to be remapped "automatically", so that the .BAT file will normally
          just keep going but will pause and wait for input if something
          terrible seems to have happened to a disk. In order to run HDTEST from
          a .BAT file, it is necessary to prepare both the .BAT file with your                                                  ____                        
          usual HDTEST command lines, generally including the /Y and /N flags,
          and a second ASCII file containing the answers to HDTEST's initial          ___                                                               
          questions, one per line. DOS's input redirection ("<") command is used



          
          
                                         Page 19 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          to "feed" these answers to HDTEST. If the "answer" file is called
          (e.g.) ANSWERS.TXT, each line in the .BAT file will look like:

              HDTEST dev1 dev2 /opt1 /opt2 <ANSWERS.TXT                                           ____________

          If you do not wish to read/write test the DOS area of the disk, your
          answer file can consist of three blank lines. If you do wish to                                                               __        
          read/write test the DOS area, the first line of the answer file can be
          blank, the next two must start with a "y" and the fourth can be blank.                          ___                                                   
          In order to allow HDTEST to be interrupted from the keyboard, if
          necessary, the program terminates input redirection before starting
          testing the disk, so anything in the answer file after the answers to                                                           _____               
          HDTEST's initial questions will be ignored.

          On exit, HDTEST now returns a meaningful ERRORLEVEL, which can be
          tested from a .BAT file by means of DOS's "IF ERRORLEVEL" syntax.
          Versions of the program prior to V4.81 returned an ERRORLEVEL of 1 on
          aborts and 0 otherwise - HDCHEK still does this. The current version
          of HDTEST normally returns an ERRORLEVEL equal to the number of new
          bad clusters found. On aborts it returns 254, and, if deliberately
          terminated by the user (either by answering "N" to the last question
          in the introductory dialogue or by pressing and confirming <Esc>
          during testing), it returns 255.

          Note that this application of HDTEST is really intended for advanced
          users, and I am aware that this description is somewhat cursory - more
          help in using it can, if necessary, be obtained directly from me.


                            BUGS AND OTHER UNPLEASANT SUBJECTS                            __________________________________

          Although, like all programmers, I like to think that my product is
          perfect, it is possible that there are a few bugs lurking in the
          depths of the program, and likely that some combination of software
          and hardware exists which HDTEST cannot figure out and/or cope with.
          If you think you have found a bug and/or if you cannot get either of
          the programs to work on your system, do the following:

          1) Reread this documentation! Make sure that you are doing exactly
          what the documentation says to do. Make sure (if you are testing a
          drive with removable media) that the media is not write-protected.

          2) Boot your system from a "virgin" DOS disk - preferably a copy of
          your DOS distribution disk - and try to run the HD programs again. If
          they run in this environment but not in your normal DOS environment,
          try reconstructing the system under which they failed by adding things
          one by one until the problem recurs. If you find a specific piece of
          software which causes the trouble, let me know about the
          incompatibility.

          3) If the above approaches do not help, or if HDCHEK runs but HDTEST
          bombs (the reverse should never happen), send me as detailed a
          description of the problem as possible and I will do my best to
          diagnose and fix it. A bug report should always include a full                                                   ______               
          description of the system being used (hardware and software), as well                                                         ___                   
          as a copy of the output from a run of HDCHEK.

          
          
                                         Page 20 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          I can be contacted by U.S. mail at the address given earlier in the
          documentation, by BIXMail to pfletcher, or by Compuserve EMail to
          72255,305.


                              CHANGES FROM PREVIOUS VERSIONS                              ______________________________

          The first version of the HD programs actually released (not including
          beta-test versions) was V2.60. The programs have grown and developed
          gradually, for the most part, but the pre-V4.65 releases listed below
          have constituted the most significant "watersheds" - features added
          and changes made between the listed releases are treated here as if                           _______                                           
          first included in the next listed release, so some individuals for                                ____                                        
          whom this is an upgrade may have packages with some, but not all, of
          the features listed for a given release. Note that the previous V4.45
          Shareware version of the program is not listed here - it was identical
          to V4.41 except that it included the "fix" for the deficiency which
          was corrected at V4.70 in the Registered version. Unless otherwise
          noted, both programs were affected by the listed changes.


          Version 4.95 (this version)          ____________               

          1) Added code to prevent undetected "wrap-around" when using existing
          INT 13 on a disk with more than 1024 cylinders.


          Version 4.94          ____________

          1) Copyright screen displayed for minimum of 2 seconds (may be longer
          if program is being run on a large device).


          Version 4.93          ____________

          1) Deficiency allowing "queueing" of keystrokes in typeahead buffer
          fixed. <Esc> now produces (almost) immediate response even if other
          key(s) have been pressed first.


          Version 4.92          ____________

          1) /V option added to bypass "virtual mode" prohibition.


          Version 4.91          ____________

          1) Problem with FAT comparison error report for > 64 Kb FATs
          introduced at V4.90 corrected (HDCHEK).


          (Version 4.90           ____________

          1) Previous restriction on testable FAT size (was 64 Kb) removed.



          
          
                                         Page 21 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          Version 4.84          ____________

          1) Minor change to reporting of initialization errors (HDCHEK).


          Version 4.83          ____________

          1) Remainder of fix for bug noted at V4.80!


          Version 4.81          ____________

          1) Meaningful ERRORLEVEL returned on exit (see "Running HDTEST from a
          .BAT file) (HDTEST).


          Version 4.80          ____________

          1) Bug causing the programs to fail if a subdirectory were physically
          located beyond the 32 Mb boundary on a large (> 32 Mb) device
          partially located and corrected.


          Version 4.75          ____________

          1) Log file specification capabilities enhanced (HDTEST).

          2) /Y flag and .BAT file support added (HDTEST).


          Version 4.71          ____________

          1) Fully automatic setting of default ROM BIOS location by CPU type.
          Meaning of and requirement for /A flag modified.


          Version 4.70          ____________

          1) Deficiency causing "fallback" to DOS interrupt level under some
          circumstances when attempting to test "extended devices" on a second
          physical hard drive fixed. The Shareware V4.45 also included this
          "fix".


          Version 4.66          ____________

          1) Support for large devices under Compaq DOS 3.31 added (see
          description of /C flag).


          Version 4.65          ____________

          1) DOS 4.0 support added (including BIOS-level access to large
          partitions), but see notes on V4.8x.

          2) Minor changes made to final screen & file output format (HDTEST).

          
          
                                         Page 22 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          3) Minor improvements made to memory allocation algorithms.

          4) /G option added (HDTEST).

          5) /X option added (HDTEST).


          Version 4.54          ____________

          1) Deficiency in CPU recognition code (which caused fast AT clones
          sometimes not to appear to be ATs) fixed.                    ___                            

          2) ANSI.SYS requirement removed.

          3) Semi-automatic CPU recognition added.

          4) Pre-boot functionality, /M option, /U option, and extended
          (segment:offset) form of /H option added.


          Version 4.41          ____________

          1) Deficiency (introduced at V4.00) causing HDCHEK to issue an
          incorrect error report on an abort resulting from a FAT comparison
          error corrected.

          2) Minor deficiency, causing HDTEST to create an empty log file on the
          specified device when both a log device and the /P option were
          specified, corrected.

          3) Work-around for hardware multi-sector read ECC problem (see
          Appendix B) added (HDTEST).

          4) Support for small (<= 10 Mb) hard disks patched to have small
          clusters and 16-bit FATs added.

          5) Requirement that command line option flags be separated by one or
          more spaces or tabs removed.

          6) /R option added (to HDTEST) for multi-pass disk testing.


          Version 4.30          ____________

          1) Support for BIOS-level access to DOS 3.3 extended partitions added.

          2) /Z option added (to HDTEST) to control remapping of unreadable
          sectors in bad clusters.


          Version 4.10          ____________

          1) Assorted minor changes made to screen displays.

          2) /C option added to allow the programs to be used on some non-IBM
          compatible MS-DOS systems.

          
          
                                         Page 23 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          3) /D option redefined - old /D option became new /I option.

          4) /F option added (to HDTEST).

          5) "Short" form of /H option added.


          Version 3.13          ____________

          1) Assorted minor bugs and deficiencies in error reporting and
          termination routines fixed (HDTEST).

          2) Minor bug affecting reporting of multiple corrected ECC errors
          fixed (HDTEST).

          3) Disk reset added before retry on all errors (HDTEST).

          4) Absolute limit on number of files and directories on device
          removed.

          5) Display of total sector/cluster count during testing added
          (HDTEST).

          6) /A option added.

          7) /B option added (HDTEST).


          Version 2.73          ____________

          1) Bug (in V2.60) which could cause bad termination and possible
          subdirectory inconsistencies if a sector which was not in use was
          found to be bad, fixed (HDTEST).

          2) Bug (in V2.70) which caused HDTEST to enter a terminal input loop
          if ANSI.SYS was not loaded and <Esc> was entered to abort it, fixed.

          3) Minor bug in V2.60 (which resulted in a failed directory scan if
          the program was run on a write-protected device) fixed.

          4) Internal changes made to avoid interference with expanded memory
          device handlers.

          5) Ability to update disk after HDTEST terminated by user (typing
          <Esc>) added.

          6) /S option to start checking occupied clusters at a given cluster
          number added (HDTEST).









          
          
                                         Page 24 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
                           APPENDIX A - SUMMARY OF FLAG SETTINGS                           _____________________________________

          /A(T) - used to tell the HD program that it is being run on an IBM AT
          (HDCHEK and HDTEST). /A is not equivalent to /HF000.

          /B(oot/Partition sector test) - used to include the hard disk
          boot/partition sector in the DOS area for the purposes of read/write
          testing (HDTEST only).

          /C(lone BIOS)n - used in systems which do not support the IBM BIOS's
          INT 11 "equipment determination" BIOS function (e.g. the Tandy 2000).
          The parameter ("n") is the number of floppy drives attached to the
          system, which is otherwise determined automatically (HDCHEK and
          HDTEST).

          /CQ (Compaq) - used to indicate that the program is running on a
          Compaq system. If DOS 3.31 (or above) is in use, large (> 32 Mb)
          devices are supported (HDCHEK and HDTEST).

          /D(OS interrupts) forces the program to use only DOS interrupts
          (INT 25 and INT 26) for access to the target device. May not be
          combined with the /I, /H, or /U flag (HDCHEK and HDTEST).

          /F(ast mode) limits read/write testing to the use of two patterns only
          (HDTEST only).

          /G(ive error details) allows the physical disk location of bad sectors
          to be identified (HDTEST only).

          /H(ex BIOS address)nnnn[:nnnn] - used to tell the HD programs that the
          ROM BIOS of the device being tested is located at nnnn, which is
          interpreted as a Hexadecimal segment address, rather than at the (CPU-
          dependent) default. The extended (segment:offset) form of the command
          is used to force the programs to use the given address as the INT 13
          entry point (HDCHEK and HDTEST).

          /I(nterrupt 13) - forces the program to use the existing INT 13
          vector.  This is the default under DOS 2.x. May not be combined with
          the /D, /H, or /U flag (HDCHEK and HDTEST).

          /M(ulti-track read problem) - bypasses the multi-track read problem
          which also prevents certain otherwise IBM-compatible clones from
          running PC-DOS 3.3 (HDCHEK and HDTEST).

          /N(o Query) - disables the individual prompts for confirmation which
          the program normally issues before remapping "special" clusters - does
          not prevent the program from prompting for confirmation before          ___                                                           
          updating the disk (HDTEST only).

          /P(rint) - causes the log file to be directed to the PRN device
          (HDTEST only).






          
          
                                         Page 25 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          /R(epeat)n - causes HDTEST to perform n complete testing cycles (or to
          continue until interrupted for n=0) (HDTEST only).

          /S(tart from)nnnnn - causes HDTEST to start testing occupied clusters                                                              ________         
          at cluster number nnnnn (expressed as a decimal number) (HDTEST only).

          /U(se existing INT 68 vector) - causes the HD programs to use the
          existing INT 68 vector as the INT 13 entry point (HDCHEK and HDTEST).                   ______                                                      

          /V(irtual mode) - bypasses normal prohibition on running program if
          80286 or better CPU is operating in "virtual mode". Allows use with
          QEMM-386 and 386^Max.

          /X(clude marked bad sectors) - causes HDTEST to report on but not
          retest clusters that are already marked as bad (HDTEST only).

          /Y(es, please remap)n - allows HDTEST to update the disk by remapping
          up to n new bad sectors without prompting for confirmation (HDTEST                                  _______                                   
          only).

          /Z(ap bad sectors)n - controls remapping of unreadable sectors in bad
          clusters (HDTEST only) - n may have one of the following values:
              0 - Remap clusters with any unreadable sectors to all NULLs
              1 (default) - Remap only actual unreadable sectors to NULLs
              2 - Transfer all data read to the new cluster
































          
          
                                         Page 26 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
                             APPENDIX B - DISK ERROR MESSAGES                             ________________________________

          Users of earlier versions of this software repeatedly requested that I
          provide a more detailed explanation of the significance of some of the
          error messages displayed by HDTEST when it encounters a bad sector or
          cluster on the disk. It is not possible to do this without assuming
          (or imparting) a more detailed understanding of the "nitty-gritty"
          details of data storage on hard and floppy disks than most people want
          or need, let alone possess. This Appendix is not, therefore, "required
          reading" for the safe or effective use of the HD programs. It is
          intended as a tutorial for those who would like to understand some-
          thing more of what is really going on on their hard or floppy disk                                ______                                      
          drive when the little red light comes on.

          For the purposes of what follows, it is (fortunately) not necessary to
          know or understand exactly how changes in magnetic flux on the surface
          of a hard (or floppy) disk are translated into binary data, or vice
          versa. That could be the subject of another long dissertation. I will
          simply take for granted that binary data, conceptually organized into
          8-bit bytes, can be read and written by the disk drive hardware under
          the command of its controller (which usually resides on a separate
          card plugged into one of the computer's expansion slots). I will be
          describing how blocks of data are physically arranged on a disk and
          how the disk controller goes about ensuring that the data it reads has
          not been corrupted since it was written.

          I propose to start off by referring to some of the error-detection and
          error-correction techniques and procedures that are applied to data
          stored on magnetic media. These techniques and procedures are
          necessary because, although magnetic media are very reliable and the
          technology of recording and playback is well understood, there always
          remains the possibility that a defect in the medium or some other
          intercurrent problem may cause the sequence of bytes read back from a
          disk or tape to be something other than a perfect duplicate of the
          sequence that was stored. If a single copy of the raw data were all
          that were recorded, there would be no way of immediately detecting
          (let alone correcting) such an error. It might be brought to light
          when the file that was changed caused problems when it is used by or
          executed as a program, but it might not become apparent until it had
          propagated itself through and caused problems or errors in multiple
          other programs or files. This would clearly be an unacceptable state
          of affairs. In order to prevent this from occurring, then, there
          should be some means of checking data which is read in from storage
          for errors, and/or (preferably) of correcting any errors which may
          have occurred before any use is made of the data.                        ______                             

          Although error checking and/or correction can (and sometimes does)
          take place at any level from that of the application program down to
          that of the device controller, I am only going to describe the means
          that are used by hard and floppy disk controllers. When a block of
          data is passed to the controller to be written to the disk, a series
          of arithmetical operations is performed in sequence on all the bytes
          in the block, to produce a 2-byte (for diskettes) or multi-byte (for
          hard drives) code. The diskette controller implements what is known as
          a cyclic redundancy check (CRC) algorithm, which is optimized to allow
          detection of all single bit errors and many longer error bursts (it is          _________                                                             
          reasonable to assume that errors will most probably either affect a
          
          
                                         Page 27 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          single bit at random or, if they result from media defects, a number
          of adjacent bits). The longer (at least 32-bit) error correcting code
          (ECC) calculated by a hard disk controller gives enough information to
          allow detection and correction of, at least, all single bit errors and                          ______________                                        
          detection of most likely longer error bursts. The CRC or ECC is saved
          on disk with the data and is read back in by the controller when the
          data is read. The controller then compares the saved CRC or ECC with
          one newly calculated from the data. If the two are identical, the data
          is assumed to be valid and a successful read is signalled. If there is
          a discrepancy, a diskette controller always returns the data with a
          "CRC error", since the CRC code does not contain enough information to
          allow the incorrect bit or bits to be identified. On a hard disk, if
          the ECC comparison suggests a correctable error, it will be corrected,
          and the read call will return with a "Corrected ECC Error" code but
          with (presumably) valid data in the transfer buffer. If a more
          extensive error is detected, on the other hand, the call returns with
          a "Uncorrectable ECC Error" code (which is the same as the CRC error
          code).

          The 32-bit ECC used by IBM and many compatible disk manufacturers
          allows correction of single-bit errors only. Manufacturers of other,                                                 ____                         
          usually more expensive, controllers use longer and more complex ECCs,
          to allow the correction of some multi-bit errors, but the necessity to
          minimize the time taken to calculate the ECC (which is part of "access
          time") sets tight limits on how complex it can be. ECC error
          correction is unfortunately not infallible. It is possible for a                                      ___                                 
          complex, uncorrectable error to result in the same ECC disparity as a                   __                                                          
          different, correctable, error, so that invalid "corrected" data can be                                                                          ______
          returned. The longer and more complex the ECC, the less likely this
          becomes, but there is no way of completely avoiding this ambiguity,
          short of keeping multiple copies of the data on the disk. In addition,
          some hard disk controllers* apparently abort with the "corrected ECC
          error" code immediately on encountering a sector containing such an                      ___________                                            
          error, even if it is not the last sector in the block specified by a                               ___                                            
          (multi-sector) read request. This non-intuitive (to say the least of
          it) behavior can combine with DOS 3.x's habit of ignoring corrected                                                           ________          
          ECC errors to result in apparently inexplicable disk-related problems,
          up to and including system crashes (if the file in which the problem
          occurred contained executable code). This hardware deficiency may be
          related to the problems which have plagued users of DOS 3.3 on some
          (previously) apparently IBM-compatible non-IBM hardware, since these
          also result from (similar but distinct) deficiencies in the clones'
          handling of multi-sector disk reads. Prior to V4.36, HDTEST did retry                                                                      ___      
          corrected ECC errors which were reported on the first read of a
          cluster, but would eventually (if the corrected error persisted)
          accept the data read as valid and copy and remap it to a "good"
          cluster. This could cause trouble if the controller had the "immediate
          abort on corrected ECC error" problem described above and the ECC                                                                ___        
          error were not in the last sector of the cluster, since the sectors
          after the "bad" one would not have been read, and would be lost
          (actually replaced by the corresponding sectors from the previous                                                                   ________
          cluster read) after remapping. On a machine with this problem, DOS

          _____________________________________________________________________

          * This behavior is known to occur with some early Western Digital
          controllers (1002A-WX1, 1002S-WX2) but it may occur with others, too.
          
          
                                         Page 28 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          would not, of course, have done any better than the earlier versions
          of HDTEST at reading the bad cluster, and HDTEST at least warned you
          that there was a problem, but the behavior described was certainly not
          ideal. From V4.36, HDTEST rereads clusters in which a persistent
          corrected ECC error is reported on the initial read sector by sector,                                                              ________________ 
          to ensure that all the data in the cluster is transferred when it is                         ___                                                  
          remapped. In most cases (as long as the ECC error was really                                                                ______
          correctable), this will save the cluster (and the file of which it is
          a part) intact.

          DOS allows the programmer and/or computer user to think of and deal
          with disk data in terms of files, lines, and/or records, but data is
          always moved between a disk and memory a sector at a time. Any disk
          read or write request passed to DOS eventually gets translated into a
          command to read or write one or more sectors on the disk, commencing
          at a specified head, track, and sector. A floppy disk may have either
          one or two usable surfaces, corresponding to the top and bottom of the                            ________                                            
          disk. A hard disk usually has at least two surfaces, and may have
          more, since multiple physical "platters" are frequently incorporated
          in a single device. Each surface is normally accessed by and
          corresponds to a single read/write head, which moves radially across                                             ____                             
          it, although one surface on newer disks is often reserved for "servo"
          tracks, which are written with a special pattern that allows the
          controller to ensure that the read/write heads are kept exactly
          aligned with the data tracks. For a single device, the (data) heads
          are, by convention, numbered sequentially from zero up to one less
          than the total number present. Each surface is further divided into a
          number of circumferential tracks (or cylinders) and each track is                                    ______     _________                   
          divided into a number of sectors. Again by convention, the tracks on                                   _______                                    
          each surface are also numbered sequentially from zero, with track zero
          being the outermost track. The sectors on each track are normally
          numbered from one to a number corresponding to the total number of                        ___                                                 
          sectors on the track, but adjacent sectors do not normally have                                                        ___              
          consecutive sector numbers. A typical arrangement of the seventeen
          sectors on a single track of an XT hard disk, for example, would be as
          follows: 1,8,15,5,12,2,9,16,6,13,3,10,17,7,14,4,11. This "inter-                                                                    ______
          leaving" of sectors helps to make multi-sector disk reads and writes          _______                                                             
          more efficient. The controller requires a finite time to process the
          data from one sector before it can start reading (or writing) the
          next. During this time, of course, the disk continues to rotate and
          one or more of the sectors which physically "follow" the one that was
          last accessed pass under the read/write head unread. Ideally, the
          interleave (number of physical sectors separating consecutively
          numbered sectors) should be such that the next sector is just about to
          come under the read-write head when the controller is free to deal
          with it, but, because this time is not exactly predictable, it is
          better to be too conservative (as IBM usually is) and make it one or
          two sectors longer than necessary than to be too optimistic. Too small
          an interleave value is very undesirable, because it results in the
          controller having to wait almost a complete disk rotation time for
          each sector it misses to come round again.

          At the beginning of each disk sector is an address mark, a short,                                                     ____________          
          recognizable (to the controller) bit sequence containing the track and
          sector number. The process of writing the address marks for each
          sector on a disk is known as "low-level" or "sector" formatting. The
          DOS FORMAT program does this when it is run on floppy disks, but on
          
          
                                         Page 29 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          hard disks the DOS program merely makes sure that all required address
          marks are present - they are created by the disk manufacturer or
          supplier's low-level format program, which may or may not be available
          to the end user. After each address mark there follows a short gap (to
          allow the controller time to recognize and respond to the address
          mark), then the raw data, then the CRC or ECC data. A sector normally
          contains 512 bytes of raw data, but DOS (and HDTEST) can recognize and
          deal appropriately with devices with non-standard sector sizes.

          When a sector read/write command is passed to the disk controller, it
          (the controller) causes the disk's read/write head to move (seek) to                                                                      ____    
          the specified track, waits a few milliseconds for it to settle down,
          and then starts to "pay attention to" the data passing underneath it.
          The controller locates and reads the address marks to confirm that the
          read/write head is positioned at the correct track and to identify
          each sector. If data is being read from the disk, the raw data and
          recorded CRC or ECC from the requested sector(s) are transferred into
          the disk controller's internal buffers and (assuming that no errors
          are detected), thence to main memory. If data is being written, the
          controller derives the error-checking data from the raw data and
          writes both to the disk. Some of this process is under the direct
          control of the controller hardware, but it is supervised by the
          device's ROM BIOS, which is responsible for error-reporting. Errors
          can occur at almost any stage of the read/write process, but (if the
          disk is working at all) usually result from media defects or problems
          developing in the mechanical components of the hard disk drive. Media
          defects, once present, are generally constant in size and position
          (although jarring a disk while it is being written to may sometimes
          generate a temporary bad sector).                     _________             

          When HDTEST detects an error during read/write testing of a sector or
          cluster which has not previously been marked as bad, a (normally)
          four-line error message is printed, either to the screen (by default),
          to the printer (/P option), or to the logging file (if an output
          device was specified). The first line of the message simply indicates
          the sector or cluster number at which the error occurred. The second
          line indicates what sort of error was detected and during what phase
          of read/write testing it occurred. The third line indicates whether
          HDTEST was able to recover and/or remap the data from the bad sector
          or cluster, and the fourth indicates either the file which a bad
          cluster formed part of or that the cluster was not in use. If it was
          not possible to read one or more sectors from a cluster which
          contained data (unrecoverable read error), a further two-line message
          is printed which notes how many sectors were unreadable and how the                                          _______                            
          data from the bad cluster has been remapped (which depends on whether
          a /Zn option was specified on the command line). If the /M flag is not
          specified when HDTEST is run on a system that suffers from the "multi-
          track read" problems discussed in the main part of the documentation,
          multiple bad clusters may be reported with no errors persisting on                                                     __                     
          sector-by sector reading. These reports should disappear if the /M
          flag is used.

          If the "verbose" form of the /G option is used, the bad sector report
          will contain the equivalent of the second and third lines of the bad
          cluster report for each bad sector. Note that, if the /X option is not                         ___________________                                    
          used to prevent testing of previously flagged bad clusters, these may
          give rise to spurious warnings of possible data loss in the third line
          
          
                                         Page 30 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          of the bad sector report. If no unrecoverable bad clusters were                                                            ________     
          reported, such warnings can safely be ignored. If the default form of
          the /G option is used, the bad sector report gives only a Hex error
          code for each bad sector. The LSB of this code is the value returned
          (in AH) by INT 13. The MSB of the code depends on the phase of testing
          during which the error occurred. In general, if the first digit (of a
          four digit code) is C or above, an unrecoverable error occurred, but
          error codes FFFD through FFFF have special meanings and indicate
          recovered errors.

          When the program detects an error during read/write testing of a
          sector in the DOS area, only the first three lines described above are
          printed and the program aborts. The remainder of this Appendix
          contains more details of and further information on the possible
          contents of lines two and three of HDTEST's disk error message.

          The second line of the disk read/write error message will usually take
          the form: "[Error Type] occurred during [phase of testing]". Possible
          values for [Error Type] are as follows (in alphabetical order):

          Address Mark Not Found - this is a fairly common error reported for
          bad blocks which are present from "scratch" on a new disk, since a
          significant media defect may well not retain sector formatting data
          and/or the manufacturer may have made sure that a known bad track on
          the disk will not be used by deliberately not writing address marks
          there. If new bad clusters are reported with this error message, it is
          likely that the hard disk surface has been physically damaged (perhaps
          by a shock to the drive) but possible that the controller has a
          problem.

          Bad Controller - this means what it says, but check that all boards
          and cables are properly seated before giving up.

          Bad Sector - the BIOS was instructed to read a sector number which
          should not (according to its configuration data) exist on the device.
          This indicates either an internal program error or that the program is
          having a problem determining the physical layout of the disk. Check
          the values reported by HDCHEK against those in the disk documentation.

          Bad Track - analogous to "Bad Sector".

          Buffer Comparison - the data read from a sector differs from that
          written to it. This should not happen, since it suggests either that
          the device's error-detection functionality has failed or that it has
          been overwhelmed. If it does occur, the most likely causes are
          controller and memory problems (in that order of likelihood).

          Corrected ECC - as discussed at some length above, the data retrieved
          from a hard disk was incorrect but the device's error-correction
          hardware was (probably) able to correct it.

          DMA Boundary Violation - should not occur (HDTEST positions its
          buffers to avoid crossing segment boundaries). Suggests either an
          internal program error or a controller/BIOS problem.



          
          
                                         Page 31 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          Hardware Timeout - a seek or other operation was not completed within
          the maximum time allowed by the BIOS. Check connections, reseat
          boards, otherwise suspect the mechanics of the disk.

          Init Fail - should not occur (on a working disk).

          Internal - internal program error. Make sure that your working copy of
          HDTEST has not been corrupted. The disk is probably not defective.

          Invalid Command - should not occur. Treat as Internal Error.

          Multiple Errors - one or more additional errors occurred while HDTEST
          was attempting to recover from an initial one. Multiple phase report
          lines will be printed but the error types cannot be further specified.

          Recovered - HDTEST recovered from the error and did not report on the
          error type (should not occur).

          Reset Fail - The device could not be reset (after an error). Usually
          indicates major problems with the disk or controller, but check
          connections, etc.

          Sector Not Found - the requested sector's address mark was not found.
          Likely to result from a media defect.

          Seek Fail - after a seek to a track, the controller found that the
          read/write head was not positioned correctly. Usually indicates a
          significant problem with the (drive) hardware.

          Sense Fail - the controller cannot find the drive! Check connections,
          etc.

          Uncorrected ECC - data error too major to be corrected. Usually a
          media defect. This message will also be produced if a CRC error is
          detected on a floppy disk.

          Undefined - the BIOS cannot figure out what went wrong, but something
          did!

          Unknown - likewise!

          Write Protection - HDTEST is attempting to write to a write-protected
          device.


          Possible forms for the rest of the second line are as follows:

          ... Error (unrecovered) occurred during first read - the cluster could
          not be read without error in five tries before a seek to the other
          "end" of the disk.

          ... Error occurred during first read - the error occurred during the
          first read but was recovered after one or more retries.

          ... Error occurred during read after seek - the error occurred when
          the cluster was read after a seek away.

          
          
                                         Page 32 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
          ... Error occurred during pattern read/writes - the error occurred
          during the pattern read/write phase of testing.

          ... Error occurred during final write - the error occurred when the
          saved copy of the cluster was being restored to the disk.

          ... Error occurred during read after final write - the error occurred
          when the restored cluster was being read back.

          ... (Buffer comparison) error occurred after final read - the copy of
          the cluster read back after restoration to the disk differed from its
          original memory image.


          There are only three basic forms of the third line:

          This error is (or "These errors are") recoverable (no data loss has
          occurred). - the bad cluster was read successfully and has been
          successfully restored to its original form, but it remains suspect and
          will (with your permission) be remapped.

          This error is unrecoverable, but remapping is possible. - the bad
          cluster was read successfully but has not been restored to its                                                ___                     
          original form. Remapping should be successful, but the data will be
          lost if this is not permitted.

          This error is unrecoverable, and data may be lost! - the bad cluster
          was not read successfully and will be remapped as provided by the
          value of the /Z switch parameter if remapping is permitted. In any
          event, some data loss has almost certainly occurred.



























          
          
                                         Page 33 
                
               Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher               _______________________________        _______________________________
               
               

                   APPENDIX C - EXAMPLE PROGRAM RUNS                   _________________________________

     Screen display from successful run of HDCHEK on partition occupying the
     whole of a 20 Mb hard disk:

Device C: appears to be the DOS partition of a hard disk
It contains 41531 sectors
It starts at absolute sector 17 on the disk      {THIS IS CORRECT}                                                  _______________ 
The total partition size is approximately 20 Mb
There are 4 heads and 17 sectors/track
Sector size is 512 bytes
Each of the 2 (16 bit) FATs occupies 41 sectors
The Root Directory occupies 32 sectors
The data area starts at DOS sector 115, and contains 10354 clusters, each
consisting of 4 sectors
The directory scan was successful; a total of 1260 files and subdirectories
was found.



     Screen display from successful run of HDCHEK on a freshly FORMATted DSDD
     9-sector floppy disk:

Device A: is not a hard disk - using DOS interrupts


Device A: is a floppy disk
The disk contains 720 sectors
There are 2 heads and 9 sectors/track
Sector size is 512 bytes
Each of the 2 (12 bit) FATs occupies 2 sectors
The Root Directory occupies 7 sectors
The data area starts at DOS sector 12, and contains 354 clusters, each
consisting of 2 sectors
The directory scan was successful; a total of 0 files and subdirectories
was found.


     Screen display from run of HDCHEK on 20 Mb DOS partition - directory
     structure bad or unrecognizable:

Device C: appears to be the DOS partition of a hard disk
It contains 41531 sectors
It starts at absolute sector 17 on the disk
The total partition size is approximately 20 Mb
There are 4 heads and 17 sectors/track
Sector size is 512 bytes
Each of the 2 (16 bit) FATs occupies 41 sectors
The Root Directory occupies 32 sectors
The data area starts at DOS sector 115, and contains 10354 clusters, each
consisting of 4 sectors
The preliminary directory scan failed.




               
               
                                              Page 34 
                
               Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher               _______________________________        _______________________________
               
               
     Screen display from run of HDCHEK on 20 Mb DOS partition - FATs not
     identical:

FATS are different
FAT discrepancy at byte 20F - FAT 1 has FF; FAT 2 has F8
Continue comparison (Y/N)? [Y]: n     {user input}                                _                 

Device C: appears to be the DOS partition of a hard disk
It contains 41531 sectors
It starts at absolute sector 17 on the disk
The total partition size is approximately 20 Mb
There are 4 heads and 17 sectors/track
Sector size is 512 bytes
Each of the 2 (16 bit) FATs occupies 41 sectors
The Root Directory occupies 32 sectors
The data area starts at DOS sector 115, and contains 10354 clusters, each
consisting of 4 sectors



     Screen display from run of HDCHEK - program unable to deduce disk
     structure - disk not recognizable as a DOS device:

Unrecognized media descriptor byte! - see error code
Error Code = F1      {F1 is not a media descriptor byte used by DOS}
































               
               
                                              Page 35 
           
          Documentation for HDTEST V4.95          Copyright 1990, P. R. Fletcher          _______________________________        _______________________________
          
          
     Log file from successful run of HDTEST on 20 Mb DOS partition:

     HDTEST Log File - Wed Jan 07 11:44:52 1986
     Testing Device C:

     No new bad clusters identified - HDTEST finished.
     Wed Jan 07 16:10:41 1987


     Log file from run of HDTEST on 20 Mb DOS partition - one bad cluster
     detected and remapped:

     HDTEST Log File - Mon Jan 05 21:09:32 1987
     Testing Device C:

     Read/Write error at cluster number 7623!!
     Corrected ECC error occurred during pattern read/writes
     This error is recoverable (no data loss has occurred).
     Bad cluster is in file \MYFILES\DATA5\FFT1234.DAT

     1 new bad clusters identified, marked, and remapped - HDTEST finished.
     Tue Jan 06 05:08:04 1987



































          
          
                                         Page 36 
 
                        REGISTRATION FORM - HDTEST V4.95                        ________________________________

     Please complete this form and return it with a check or money order for
     $35.00 (+ $5.00 for shipping outside North America) or equivalent to:

                     Peter R. Fletcher
                     1515 West Montgomery Avenue
                     Rosemont
                     PA 19010
                     U.S.A.

     None of the information on this form will be passed on to any other
     individual or commercial organization.

     --------------------------------------------------------------------------

     This information is required to process your Registration:

     Last Name:____________________________  Other Names:______________________

     Address:______________________________  Town/City:________________________

     State:_____________  Post Code:____________  Telephone:_________________
                                                           (evenings/weekends)

     I understand that this software is supplied without warranty, express or
     implied, and agree not to hold its author liable for any direct or
     consequential loss arising out of my use of it.

     Signature:______________________________

     -------------------------------------------------------------------------

     You are requested, but not required, also to answer the following
     questions:

     On What type(s) of computer are you using HDTEST? _________________________

     CPU (8088, 8086, etc.)? __________   Amount of RAM (kB)? ____________

     Type & Size of Hard Disk(s)? ____________________________________

     Make and Type of Hard Disk Controller(s)? ______________________________

     Do you own a Modem?                                             Y  N

     Are you a member of BIX?   Y  N        Compuserve?              Y  N

     How did you obtain/hear about this program?

     Did you think that the $35.00 registration fee for this program was:

     Very Good Value?              About Right?             Excessively High?


     Are there any other utility programs that you would like to see made
     available as "User Supported Software"? What sort of programs?



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1209

     Volume in drive A has no label
     Directory of A:\

    BOOTLOAD COM     32000   8-28-88   1:35p
    BOOTLOAD DOC      4613   2-22-90   5:31p
    FIXFAT   DOC      6908   2-22-90   5:32p
    FIXFAT   EXE     12627   3-14-89   1:23p
    HDCHEK   EXE     54370   3-10-90   3:13p
    HDTEST   DOC    136738   3-10-90   3:09p
    HDTEST   EXE     60522   3-10-90   3:13p
    HDTEST   OVV      4010   3-10-90   2:02p
    MAKETXT  EXE      8227   4-17-88  12:26p
    README   1ST      1522   3-10-90   3:19p
    GO       BAT        38   4-21-88   9:08a
    GO       TXT       617   3-02-90  10:38p
    FILE1209 TXT      2591   4-22-90   7:37p
           13 file(s)     324783 bytes
                           29696 bytes free
