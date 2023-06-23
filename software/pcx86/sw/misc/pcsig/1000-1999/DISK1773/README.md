---
layout: page
title: "PC-SIG Diskette Library (Disk #1773)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1773/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1773"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "4DOS"

    4DOS is designed to make DOS more powerful and easier to use by
    replacing your COMMAND.COM file with a new command interpreter.  You'll
    find 4DOS provides a wide variety of capabilities that regular
    COMMAND.COM can't -- like an enhanced DIR command, point-and-shoot file
    selection for any command, or the ability to completely redefine your
    system's commands.  It provides enhancements to most of the DOS commands
    and introduces more than 40 new commands.  Yet 4DOS is fully compatible
    with COMMAND.COM.  You'll wonder how you ever got along with DOS alone.
    
    It is compatible with virtually all pc hardware and software, including
    most networks and most TSR (memory resident) programs.  It requires less
    than 3K of RAM while applications are running (less than COMMAND.COM).
    
    4DOS is a "DOS shell" but is unlike most DOS shells on the market.  It
    doesn't isolate you from the DOS command line; it makes you more
    productive while working at the command line.  If you're tired of the
    limitations of DOS, you'll love 4DOS.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COMPAT.DOC

{% raw %}
```

                       4DOS Compatibility Documentation

                             Version 3.02, 9/7/90


   Copyright 1989, 1990, J.P. Software.  All Rights Reserved.  Published by
   J.P. Software, P.O. Box 1470, E. Arlington, MA 02174 USA, (617)
   646-3975.

   This file provides information on compatibility between 4DOS and a
   variety of other software products.  It is intended for use whenever you
   have a question about using another product with 4DOS, or suspect a
   compatibility problem.

   Inclusion of a product in this file does NOT mean there are compatibili-
   ty problems with it!  It only indicates that we have some information
   that may be useful to you when you use the product with 4DOS.

   Sections added or significantly changed in version 3.02 of 4DOS are
   identified with a "3.02" in the left margin.  If this mark appears on
   the first paragraph of a section, assume the whole section has been
   changed.  Otherwise the mark applies only to the paragraph it's next to.

   This file is formatted at 58 lines per page, and contains form feeds and
   page footers.  It can be printed properly on most PC printers using the
   command:

              copy compat.doc prn

   Printing it with a program that formats the pages is not likely to work
   due to the formatting included in the file.
























   4DOS 3.02  [9-7-90]            COMPAT.DOC                         page 1


                               Table of Contents

   Introduction  . . . . . . . . . . . . . . . . . . . . . . . . . . .    3

   General Information . . . . . . . . . . . . . . . . . . . . . . . .    4
      Causes of Compatibility Problems . . . . . . . . . . . . . . . .    4
      Multi-Way Software Interactions  . . . . . . . . . . . . . . . .    4
      Running 4DOS along with COMMAND.COM  . . . . . . . . . . . . . .    4
      Executing DOS Commands via Interrupt 2E  . . . . . . . . . . . .    6
      4DOS and Multitasking / Task Switching Programs  . . . . . . . .    7
      CAUTION:  Multitaskers and Disk Swapping . . . . . . . . . . . .    8
      Swapping to RAM Disks  . . . . . . . . . . . . . . . . . . . . .    8
      Loading 4DOS High with /U or /E:nnnnU  . . . . . . . . . . . . .    9
      4DOS and Command Line Editing Programs . . . . . . . . . . . . .    9
      4DOS and TSR (Memory-Resident) Programs  . . . . . . . . . . . .   10

   Information on Specific Products  . . . . . . . . . . . . . . . . .   11
      MS-DOS APPEND Command  . . . . . . . . . . . . . . . . . . . . .   11
      MS-DOS DATE and TIME Commands  . . . . . . . . . . . . . . . . .   12
      MS-DOS FASTOPEN Command  . . . . . . . . . . . . . . . . . . . .   12
      MS-DOS 4.0+ FORMAT Command . . . . . . . . . . . . . . . . . . .   13
      MS-DOS 4.0+ SELECT Command . . . . . . . . . . . . . . . . . . .   13
      1DIR+ (Bourbaki) . . . . . . . . . . . . . . . . . . . . . . . .   13
      3+Open Network (3COM)  . . . . . . . . . . . . . . . . . . . . .   14
      AllCharge Card (All Computers Inc.)  . . . . . . . . . . . . . .   15
      ANSI.SYS (various manufacturers) . . . . . . . . . . . . . . . .   15
      Btrieve (Novell) . . . . . . . . . . . . . . . . . . . . . . . .   15
      CED and PCED (Cove Software) . . . . . . . . . . . . . . . . . .   15
      CheckFree (CheckFree Systems)  . . . . . . . . . . . . . . . . .   15
      DESQView (Quarterdeck) . . . . . . . . . . . . . . . . . . . . .   15
      DESQView DOS Services (Quarterdeck)  . . . . . . . . . . . . . .   16
      DoubleDOS (SoftLogic Solutions)  . . . . . . . . . . . . . . . .   17
      DR-DOS (Digital Research)  . . . . . . . . . . . . . . . . . . .   17
      Epsilon (Lugaru Software)  . . . . . . . . . . . . . . . . . . .   17
      Headroom (Helix Software)  . . . . . . . . . . . . . . . . . . .   18
      HIMEM.SYS (Microsoft)  . . . . . . . . . . . . . . . . . . . . .   18
      Hot Line (General Information Inc.)  . . . . . . . . . . . . . .   18
      MOVE-EM (Qualitas) . . . . . . . . . . . . . . . . . . . . . . .   19
      Netware (Novell) . . . . . . . . . . . . . . . . . . . . . . . .   19
      OmniMouse Software Drivers . . . . . . . . . . . . . . . . . . .   20
      PC Tools (Central Point Software)  . . . . . . . . . . . . . . .   20
      QEMM and QRAM (Quarterdeck)  . . . . . . . . . . . . . . . . . .   21
      QuickCache II (Glassel and Associates) . . . . . . . . . . . . .   21
      Software Carousel (SoftLogic Solutions)  . . . . . . . . . . . .   22
      Telix Communications Software  . . . . . . . . . . . . . . . . .   23
      TSRCOM Utilities (TurboPower Software) . . . . . . . . . . . . .   23
      UltraVision (Personics)  . . . . . . . . . . . . . . . . . . . .   23
      Ventura Publisher (Xerox)  . . . . . . . . . . . . . . . . . . .   24
      VP/ix with Sun/OS (Sun Microsystems) . . . . . . . . . . . . . .   24
      VTSR (Golden Bow Systems)  . . . . . . . . . . . . . . . . . . .   24
      Windows 3.0 (Microsoft)  . . . . . . . . . . . . . . . . . . . .   24
      WordPerfect 5.1 (WordPerfect Corp.)  . . . . . . . . . . . . . .   26



   4DOS 3.02  [9-7-90]            COMPAT.DOC                         page 2


   Introduction
   ------------

   We have made every effort to insure that this file is as accurate and up
   to date as possible.  Our information is based on our own investiga-
   tions, technical support calls, conversations with manufacturers of
   other products, and reports from our beta testers.  Unfortunately, test-
   ing for software compatibility is not always reliable.  Varying condi-
   tions between systems or between software releases can easily invalidate
   the results of previous tests.  Therefore we cannot guarantee that every
   item in this file is accurate for all systems or will remain accurate
   over time; you may have to do your own testing to determine what works
   well on your system with the software you own.

   In some cases we may have found that upgrading another manufacturer's
   software to a newer release helps with a particular problem.  Unfortu-
   nately we cannot guarantee that it will always do so on your system, for
   the reasons described above.

   If you have a compatibility problem, the first thing you should do is
   read through Appendix D of the 4DOS manual ("Troubleshooting and Tips"). 
   Appendix D gives general suggestions for solving compatibility problems,
   and should always be used along with this file when attempting to solve
   such a problem.

   If the information in Appendix D doesn't help, check below for both
   general suggestions which pertain to your problem, and information on
   the specific product with which you are having trouble.  Please note
   that some products are listed by category rather than or in addition to
   specific listings by product name; check the Table of Contents carefully
   to see where any particular product may be covered.

   If you cannot resolve a compatibility problem, contact J.P. Software for
   technical support.





















   4DOS 3.02  [9-7-90]            COMPAT.DOC                         page 3


   General Information
   -------------------

   This section describes some techniques you can use to either diagnose or
   solve compatibility problems.  It also includes general information
   which may be used in solving problems with a whole group of products
   (e.g., multitaskers).


      Causes of Compatibility Problems:

          In most cases software which does not to run properly under 4DOS
          is experiencing one of the following problems:

              * 4DOS is not configured properly;
              * The other software is not configured properly;
              * Some condition in your system (for example, insufficient
                memory) is preventing the other software from running at
                all, but you are so used to 4DOS that you haven't noticed
                that the same problem occurs under COMMAND.COM, i.e. the
                problem is not related to 4DOS;
              * There is a multi-way interaction between 4DOS, the other
                software, and one or more of your TSRs or device drivers;
              * The presence of 4DOS in your system has uncovered a bug
                or design problem in the other software that did not appear
                when running it under COMMAND.COM, but that is not due to
                a malfunction or error in 4DOS.
              * The other software was written based on specific
                characteristics of COMMAND.COM, and cannot run under 4DOS
                unless COMMAND.COM is also loaded.
              * The other software was written based on specific
                characteristics of COMMAND.COM, and cannot run under 4DOS
                at all.


      Multi-Way Software Interactions:

          In many cases programs which appear to fail under 4DOS, yet run
          properly under COMMAND.COM, are actually involved in a 3-way
          interaction with one of your TSRs or device drivers.  If you are
          having trouble with a program, try removing then replacing your
          TSRs and device drivers as described in Appendix D, and see if
          you can determine whether there is such an interaction occurring.


      Running 4DOS along with COMMAND.COM:

          You may find a rare program which will not work under 4DOS, but
          runs properly under COMMAND.COM.  If you have determined that the
          problem cannot be solved through configuration changes or by
          eliminating or reconfiguring a third program which is causing the
          problem, use this section to see how to run 4DOS and COMMAND.COM
          together in order to diagnose such a problem.


   4DOS 3.02  [9-7-90]            COMPAT.DOC                         page 4

          There are two methods of loading COMMAND.COM before another pro-
          gram.  The first is to load it only when a specific program is
          running.  This can be accomplished with the following command
          (assuming COMMAND.COM is in the root directory of drive C:):

                    c:\command /c progname options

          where "progname" is the program name (with path if necessary) and
          "options" are any parameters for the program.  This command will
          run COMMAND.COM, load and run the program, and upon exit from the
          program will exit from COMMAND.COM and return to 4DOS.  If this
          is necessary to run a specific program, it can be defined as an
          alias:

                    alias progname `c:\command /c progname %&`

          The "%&" passes all command line arguments on to the program.

          With this method, if the program is large COMMAND.COM may need to
          reload itself when the program exits.  It will not be able to do
          so unless the COMSPEC is set properly.  If you experience prob-
          lems such as "Invalid COMMAND.COM" errors when using this method,
          use a batch file like the following to run the program in ques-
          tion (the SETLOCAL and ENDLOCAL cause COMSPEC to be restored to
          its previous value after the program exits).  You will need to
          modify this file if your copy of COMMAND.COM is not stored in the
          C:\ directory:

                    setlocal
                    set comspec=C:\COMMAND.COM
                    c:\command /c progname %&
                    endlocal

          The second method is more drastic:  you can start your system
          under COMMAND.COM, then run 4DOS.  This approach is rarely neces-
          sary, and will use about 4 - 5K of additional RAM for the resi-
          dent portion of COMMAND.COM.  

          The following steps will set your system up to boot with
          COMMAND.COM, and run 4DOS automatically as part of the boot pro-
          cess:

              (1) Set up the SHELL= statement in CONFIG.SYS to run
              COMMAND.COM, or leave it out entirely.  In other words, set
              it up just as you would if 4DOS were not on your system.

              (2) Be sure the statement:

                    DEVICE=KEYSTACK.SYS

              is included in CONFIG.SYS if you wish to use the 4DOS
              KEYSTACK command.




   4DOS 3.02  [9-7-90]            COMPAT.DOC                         page 5

              (3) Separate your AUTOEXEC file into two parts:  part 1,
              which remains in AUTOEXEC.BAT, should contain any commands
              you wish to have COMMAND.COM execute before 4DOS is started. 
              This might include loading any TSRs which you cannot get to
              load properly under 4DOS.  Part 2, which you must place in a
              separate batch file (we suggest the name 4DAUTO.BAT, but you
              can use any name with a .BAT or .BTM extension), should con-
              tain the commands you wish to have 4DOS execute when the
              system is started.

              (4) Place the following line as the last line in the modified
              AUTOEXEC.BAT:

                    4DOS parameters filename

              where "parameters" represents the appropriate 4DOS parameters
              for swapping, environment and history size, etc. (see the
              Installation section of the manual), and "filename" is the
              name of the new batch file you created for part 2 of your old
              AUTOEXEC file.  Do NOT include a /P in the "parameters" or
              4DOS will re-run AUTOEXEC and therefore load itself again, ad
              infinitum!

          This will load COMMAND.COM, execute the commands in AUTOEXEC,
          load 4DOS, execute the commands in your new batch file, and then
          give you the normal 4DOS prompt.

          There is one drawback to this second approach:  because 4DOS is
          not loaded with a /P, the EXIT command will return you to
          COMMAND.COM if you inadvertently enter it at the primary shell
          prompt.  You can get around this by including the /P parameter
          despite the caution above, and then placing the following line at
          the start of AUTOEXEC.BAT:

                    if not "%@eval[2+2]"=="4" quit

          This line tests the 4DOS variable function %@EVAL, which will be
          blank under COMMAND.COM and non-blank under 4DOS.  If %@EVAL is
          non-blank, the statement QUITs the batch file, preventing the
          infinite loop described above.


      Executing DOS Commands via Interrupt 2E:

   3.02   COMMAND.COM contains an undocumented (and unsupported) feature
          which allows programs to execute DOS commands by passing the
          command through software interrupt number 2E (hex).  Very few
          programs use this feature, and the current release of 4DOS does
          not support it internally.  However the SHELL2E TSR included with
          4DOS will allow you to run most programs that use INT 2E.

          If you have a program which is supposed to execute DOS commands
          and it does not work under 4DOS, first read the Troubleshooting
          appendix in the manual, especially page 160, and check over your


   4DOS 3.02  [9-7-90]            COMPAT.DOC                         page 6

          settings of COMSPEC and 4DSHELL.  If these appear correct, your
          program may be trying to use INT 2E to execute commands.

          If you believe this is the case, try loading the SHELL2E program
          which came with your copy of 4DOS.  Documentation on SHELL2E is
          in the file SHELL2E.DOC.  If you aren't sure whether your program
          is using INT 2E, SHELL2E's /W switch can help you find out -- see
          SHELL2E.DOC for the details.  

          See below for specific information on Novell's MENU program,
          which requires SHELL2E.


      4DOS and Multitasking / Task Switching Programs:

          (For convenience below we will refer to all these programs as
          "multitasking", even though some are only task switching pro-
          grams, and to all windows or partitions they use as "windows",
          even though some systems do not support windowing).

          4DOS can be used with most multitasking systems including Win-
          dows, DESQView, Back and Forth, OmniView, Software Carousel, and
          VM/386.  See the sections on specific products below for informa-
          tion on the individual products.  

   3.02   If you require task switching (switching between multiple pro-
          grams) without multi-tasking (multiple programs actually execut-
          ing concurrently), we particularly recommend that you try the
          shareware task switcher Back & Forth, from Progressive Solutions. 
          Back & Forth is fully compatible with 4DOS by design, runs effi-
          ciently using small amounts of memory, and provides a wide range
          of configuration options and compatibility.  It is available from
          most common sources of shareware (disk vendors, CompuServe, Ge-
          nie, bulletin boards, etc.).

          Unless otherwise noted below, 4DOS should work properly both as
          the root shell loaded before the multitasking system, or when run
          inside a window.

          To start 4DOS inside a window in any of these systems you can
          define it as a program to be run directly, or you can have the
          multitasker load it automatically as the command processor, by
          leaving COMSPEC set to 4DOS.  Regardless of the approach used,
          you can use the 4DSHELL environment variable to set the 4DOS
          command line parameters (such as swapping method and environment
          size) to be used when starting the 4DOS window.  If 4DOS is de-
          fined as a program to be run directly you can also set these
          parameters on the command line.

          Under most multitasking systems the COMSPEC setting will control
          whether 4DOS or COMMAND.COM is used to run batch files and to
          open windows that are NOT closed on exit to DOS.  In some cases
          setting the COMSPEC to COMMAND.COM before starting the multi-
          tasker can provide slightly more efficient operation (when most


   4DOS 3.02  [9-7-90]            COMPAT.DOC                         page 7

          windows do not require the capabilities of 4DOS), and 4DOS can
          then be set up in its own window.  In most other cases you will
          find it works best to leave the COMSPEC set to 4DOS.

          Note that if you boot your system with COMMAND.COM, then set the
          COMSPEC to 4DOS, if you return to COMMAND.COM (e.g., by exiting
          from your multitasking program) the system may hang, as
          COMMAND.COM needs to use the COMSPEC setting to find and reload a
          portion of its own code.


      CAUTION:  Multitaskers and Disk Swapping:

          When 4DOS is swapping to disk in multiple windows of a multi-
          tasking system, it must be configured properly to avoid conflicts
          among the swap file names used in each window.

          When loaded normally, the primary copy of 4DOS will act as a
          "traffic cop" for the copies of 4DOS in the different windows,
          assigning each one a unique "shell number" which is used as the
          extension for the disk swap file (4DOSSWAP.001, 4DOSSWAP.002,
          etc.).  In this case no conflict will occur.

          However, if 4DOS is NOT loaded before the multitasking program
          this capability will not be available.  In this case the copy of
          4DOS in each window will use the swap file name 4DOSSWAP.000.  To
          avoid a filename conflict every copy of 4DOS started in disk
          swapping mode MUST place its swap file in its own unique direc-
          tory specified with the "/S:Dd:\path" switch.  If this rule is
          not observed the system will hang when switching windows or upon
          exit from an application.

          In version 3.0 and earlier, you could satisfy this condition
          simply by starting each window in its own unique directory.  But
          beginning with 4DOS version 3.01, disk swap files default to the
          root directory of the drive COMSPEC points to, and not to the
          current directory; hence to make 4DOS disk swapping work properly
          under these conditions you must EXPLICITLY use /S:D to place the
          swap files in separate directories.

          This problem will only occur if 4DOS is NOT the primary shell,
          AND disk swapping is used in more than one window as described
          above.  There is no such conflict with EMS or XMS swapping.  Note
          that since the default /S:B swapping option uses disk swapping if
          no EMS or XMS memory is available, you can be invoking disk swap-
          ping your multitasker windows even if you haven't explicitly
          requested it.


      Swapping to RAM Disks:

          In order to swap to a RAM disk with the root shell the RAM disk
          must be completely defined in CONFIG.SYS via a DEVICE= statement
          (most RAM disks are set up this way).  RAM disks completely or


   4DOS 3.02  [9-7-90]            COMPAT.DOC                         page 8

          partially defined in AUTOEXEC.BAT (such as the RAM disk / cache
          combination in Multisoft's PC Kwik Power Pak) cannot be used for
          root shell swapping, because AUTOEXEC.BAT has not been executed
          at the time that the root shell is loaded, and hence the RAM disk
          does not exist at that point.


      Loading 4DOS High with /U or /E:nnnnU:

   3.02   To load 4DOS or the master environment into high memory with the
          /U or /E:nnnnU switches, you MUST be running a memory manager or
          a combination of a memory manager and XMS driver which provides
          BOTH the ability to remap memory into the area between 640K and
          1MB, AND software support for the eXtended Memory Specification
          (XMS).  In general /U and /E:nnnnU will work on any system which
          can load TSRs high.  The combinations of hardware and software
          which will support /U and /E:nnnnU include:

              386 systems:

                    Hardware:      Sufficient memory space; no additional
                                   hardware required.

                    Software:      Qualitas's 386MAX, or Quarterdeck's QEMM
                                   version 5.0 or later.

              286 systems:

                    Hardware:      Chips and Technologies NEAT chip set, or
                                   EMS board with LIM 4.0 or EEMS hardware;
                                   sufficient memory space.

                    Software:      Qualitas's MOVE-EM version 1.02 or later
                                   with Microsoft's HIMEM.SYS, or Quarter-
                                   deck's QRAM and QEXT.

          Other memory-management software may also work; the listings
          above are examples, not exhaustive lists.  See specific informa-
          tion on your memory management program below.

          The following software will NOT allow /U or /E:nnnnU to work: 
          HIMEM.SYS by itself; QRAM without QEXT; or MOVE-EM without
          HIMEM.SYS.  Also these switches will not work on systems with
          expanded memory boards with LIM 3.2 hardware (regardless of the
          software used); if you are trying to load 4DOS (or TSRs) high
          using an expanded memory board you need hardware which supports
          either LIM 4.0 EMS, or the similar EEMS.  Check with your system
          or board manufacturer to determine whether your board supports
          LIM 4.0 or EEMS.


      4DOS and Command Line Editing Programs:




   4DOS 3.02  [9-7-90]            COMPAT.DOC                         page 9

          Programs such as Anarkey (Moderne Software), PCED (Cove Soft-
          ware), and ReDOS (Multisoft) will work properly with 4DOS.  How-
          ever these programs require the use of SETDOS /L1 to operate,
          which will disable 4DOS's command recall and command line edit-
          ing.  In most cases you will be able to switch back and forth
          between 4DOS editing and the other editor by toggling the SETDOS
          /L state.

   3.02   When another editor is used 4DOS's command history will be main-
          tained, and can be viewed with HISTORY, but will not be available
          for recall until a SETDOS /L0 is executed.  4DOS aliases, execut-
          able extensions, and other features will be active with another
          command line editor running, regardless of the SETDOS /L state. 
          Aliases will be processed after any processing done by the other
          editing program.  You must use care with other programs that
          provide an aliasing capability to avoid confusion if a command is
          expanded by both the other program and 4DOS!


      4DOS and TSR (Memory-Resident) Programs:

   3.02   In 4DOS version 3.0 and above many memory-resident programs
          should be able to unload themselves, even if they could not do so
          under earlier versions of 4DOS.  You may still experience unload
          problems if you have a complex system or many TSRs loaded; if you
          do, use MARK and RELEASE from the TSRCOM utilities, available on
          many bulletin boards and on the 4DOS Utility Disk.  These prod-
          ucts will allow you to unload virtually all TSRs without diffi-
          culty.  See more specific information on TSRCOM below.



























   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 10


   Information on Specific Products
   --------------------------------

   The information below is listed alphabetically by product, with manufac-
   turers' names included.  MS-DOS commands are listed before other soft-
   ware products.

   Items marked with two asterisks [**] after the product name were sup-
   plied by users, and have not been tested by J.P. Software.


      MS-DOS APPEND Command:

          Unlike most other commands in MS-DOS, APPEND has both an external
          portion and an undocumented internal portion.  The first time
          APPEND is run the external portion is executed, and loaded into
          memory as a TSR.  Subsequent uses of APPEND to adjust the APPEND
          path use the internal portion built into COMMAND.COM.

          4DOS does not support the internal portion of APPEND command. 
          This means that you cannot change the APPEND path directly from
          4DOS.  However you can still use APPEND with 4DOS.

          APPEND should be started in the usual way, from AUTOEXEC or any
          other batch file, or from the command line.  However to change
          the APPEND path you must run APPEND from COMMAND.COM, not from
          4DOS.  To do this, enter the following command (modify the com-
          mand appropriately if COMMAND.COM is not in the directory C:\):

                    c:\command /c append [new append path list]

          You could also set up a 4DOS alias to do the above command for
          you, for example:

                    alias app `c:\command /c append`

          which would be invoked with the command

                    app [new path list]

          The /X switch can be used, and it will affect 4DOS directory
          searches for many 4DOS commands (as it does for COMMAND.COM). 
          Please note that this makes APPEND a little dangerous:  if you
          APPEND a directory and then (say) delete all the .BAK files, the
          .BAK files in the APPENDed directory will be deleted too.

          The APPEND /E switch will not work with 4DOS.

          CAUTION:  In our opinion APPEND is an extremely dangerous com-
          mand.  It is capable of "fooling" programs into thinking they are
          accessing one file when they are really accessing another one
          with the same name in a different directory.  This can either do
          just what you want, or cause all sorts of trouble, depending on


   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 11

          the circumstances.  In particular, this behavior can cause 4DOS
          to place descriptions which go with files in one directory in the
          description file for another directory, because with APPEND run-
          ning 4DOS can't tell whether APPEND has opened a file different
          from the one it asked for.

          If you must use APPEND to make certain applications work, we
          STRONGLY suggest that you set up the aliases described above, and
          load APPEND in AUTOEXEC.BAT with an empty path.  Then, for each
          application, set up an alias to run it that is similar to the
          following:

              alias myprog `app c:\mydata^d:\util\myprog.exe^app ;`

          This alias sets the APPEND path, runs the application, and clears
          the APPEND path.  When used in this way APPEND is less likely to
          cause trouble because it is disabled except when it is explicitly
          needed.

   3.02   In MS-DOS version 4.0 the new APPEND /PATH:OFF switch mitigates
          this problem somewhat; in particular it will keep 4DOS file de-
          scription files from getting mixed up between directories.  For
          this reason 4DOS version 3.02 will automatically set this switch
          if it detects that you are running APPEND and DOS 4.0 or above.


      MS-DOS DATE and TIME Commands:

          Versions of DOS distributed by some manufacturers will automa-
          tically set the hardware clock date and time (which is maintained
          while the system is turned off, and is different from the DOS
          date and time) when the corresponding DOS command is executed. 
          This is a hardware-specific feature which may not function as you
          expect under 4DOS.  If you normally set the hardware clock's date
          and time with DOS commands, either run a secondary copy of
          COMMAND.COM to set them, or invoke your system's SETUP or other
          utility program to do so.


      MS-DOS FASTOPEN Command:

          The MS-DOS FASTOPEN command generally works with 4DOS, but does
          not properly detect renamed directories.  If you use FASTOPEN and
          rename a directory with the 4DOS REN command, then do a DIR com-
          mand, you may see the old name and not the new one displayed; you
          may also occasionally have trouble accessing files under the new
          name.  The only solution we are aware of in this situation is to
          reboot your system.

          Our feeling is that, if you have the memory to support it, a disk
          caching program will provide a much larger and more effective
          performance improvement than FASTOPEN.




   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 12

      MS-DOS 4.0+ FORMAT Command:

          When formatting a bootable disk with FORMAT /S, the FORMAT com-
          mand in MS-DOS 4.0 and above has the annoying behavior of copying
          whatever file your COMSPEC environment variable points to to the
          disk and renaming it COMMAND.COM.  When 4DOS is running COMSPEC
          normally points to 4DOS.COM, so FORMAT will copy 4DOS.COM to the
          floppy disk and rename it COMMAND.COM.  This will render the
          floppy disk NOT bootable -- 4DOS won't mind the file name change,
          but 4DOS.COM alone is not enough for 4DOS to get started; one of
          the 4DOS EXE files is also required.

          To solve this problem, after formatting a bootable floppy disk
          under MS-DOS 4.0 we recommend that you copy COMMAND.COM to the
          disk manually.  You may want to set up a simple alias or batch
          file for this purpose, for example:

                    alias bootdisk `format a:/s^copy c:\command.com a:`

          Alternatively, you can copy the 4DOS88 or 4DOS286 EXE file to the
          root directory of the floppy disk, which will make the disk boot
          under 4DOS instead of COMMAND.COM.  However we do not recommend
          this method unless you also rename the "COMMAND.COM" file back to
          4DOS.COM and place a proper CONFIG.SYS file on the floppy disk to
          load 4DOS.COM.  Leaving a copy of 4DOS.COM on the disk with the
          name COMMAND.COM is bound to confuse the next person who examines
          it!


      MS-DOS 4.0+ SELECT Command:

          In MS-DOS 4.0 and above a SELECT command was introduced.  This
          external command is totally unrelated to the 4DOS internal SELECT
          command.  If you need to use both, you can set up aliases to
          adjust how the command names are handled.  For example, the fol-
          lowing two aliases set up SELECT to access the DOS 4.0 external
          SELECT command (assumed to be stored in C:\DOS\SELECT.EXE), and
          SEL to access the internal 4DOS SELECT command:

                    alias select c:\dos\select.exe
                    alias sel *select


      1DIR+ (Bourbaki):

          The information below was obtained from tests with 1DIR+ version
          3.02.

          1DIR+ will work properly under 4DOS version 3 in its partially
          resident or EMS modes when set up as described below.  It will
          work in its fully resident mode but cannot reliably exit back to
          4DOS once started.




   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 13

          If your copy of 1DIR+ is set up for fully resident mode, you can
          load it into memory under 4DOS to switch it to partially resident
          or EMS mode.  To do so, from the directory where you normally run
          1DIR+, type the commands:

                    setdos /l1
                    1dirplus

          When 1DIR+ starts go to the "Wonder" / "Setup" menu (F8 then F2)
          and switch the mode to partially resident or EMS.  Hit Esc to
          exit, and take the "Exit/Save" option (not "Save/Reset").  Back
          at the main menu, exit with "Wonder" / "Exit" (F8 then F8).  At
          this point the system will probably hang.  Reboot your computer. 
          You should then be able to run 1DIR+ as described below.

          The above steps only need to be done once, when you install or
          re-install 1DIR+.

          Once 1DIR+ is set to EMS or partially-resident mode, you can
          start it from 4DOS using the following alias:

                    alias 1dir `setdos /L1 ^ 1dirplus`

          The SETDOS /L1 is necessary to allow 1DIR+ to send command lines
          to 4DOS.

          You must do a SETDOS /L0 when you are done with 1DIR+ in order to
          get normal 4DOS command-line editing back.  You can NOT do this
          within the alias above, as 1DIR+ returns to 4DOS in order to
          accomplish its work, and you don't want to switch back to /L0
          mode until 1DIRPLUS has been removed from memory.  If, after
          exiting from 1DIR+, you find that 4DOS's command line editing and
          history are unavailable, it is because you forgot to do the
          SETDOS /L0.  If you go in and out of 1DIR+ regularly aliases like
          the following can be used to make the process quick:

                    alias 1d `setdos /L1 ^ 1dirplus`
                    alias 1e setdos /L0


      3+Open Network (3COM):  [**]

   3.02   Previous problems with 3+Open's LOGON have been resolved.  If
          your system hangs when loading 3+Open's NBP program, upgrading to
          the latest release of NBP should resolve the problem.  Please
          note that 3COM issues multiple releases with the same version
          number; the fact that you have "version 1.1" does not necessarily
          mean you have the latest release.  Check with your 3COM support
          representative to be sure you have the latest release.







   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 14

      AllCharge Card (All Computers Inc.):  [**]

          4DOS, including EMS swapping, works properly with the latest
          AllCharge Card software release (ALLEMM4.SYS file dated 10-3-89). 
          Earlier releases may hang.  The feature to put FILES and BUFFERS
          in AUTOEXEC may not work; if you have trouble with it, try rear-
          ranging the position of these commands in AUTOEXEC.BAT, or as a
          last resort place them in CONFIG.SYS.


      ANSI.SYS (various manufacturers):

          If you have trouble with screen scrolling in 43-line or 50-line
          mode, try a different version of ANSI (we use PC Magazine's free
          utility ANSI.COM); for more information see page 156 of the 4DOS
          manual.


      Btrieve (Novell):  [**]

          The most recent release of Btrieve as of this writing should work
          properly under 4DOS.  Earlier releases contain a bug in their EMS
          (expanded memory) access which conflicts with 4DOS's EMS swap-
          ping, and therefore will not run with EMS swapping enabled.  If
          you have an earlier version of Btrieve, run 4DOS with XMS or disk
          swapping and the two products should work properly together.  If
          you aren't sure whether you are encountering this problem, just
          try switching 4DOS from EMS to disk swapping and see if any
          Btrieve problems are cleared up.  If so, upgrade to the newest
          release of Btrieve.


      CED and PCED (Cove Software):  [**]

   3.02   4DOS has been modified to allow CED and PCED to properly recog-
          nize 4DOS secondary shells.  This recognition may not work if the
          either primary or the secondary shell is loaded high with 4DOS's
          /U option.  Also see the section on command line editors (above).


      CheckFree (CheckFree Systems):  [**]

          Version 2.0 of this package should work properly under 4DOS. 
          Earlier versions may need to be run under COMMAND.COM, using the
          method discussed above in the General Information section (use
          the batch file shown there which begins with a SETLOCAL command). 
          Because CheckFree uses Btrieve, see the note on Btrieve (above)
          as well.


      DESQView (Quarterdeck):

   3.02   Please see the section on multitaskers under General Information
          above before reading this section.


   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 15

          The information below was obtained from tests with DESQView ver-
          sion 2.26.

          To use 4DOS with DESQview, you must add it to your DESQview Open
          Window menu.  To do this, select the Add a Program option, then
          press the "O" key (for Other Program).  Press Enter and you will
          get a standard Change a Program window.

          You must set the program parameters and startup directory before
          opening a 4DOS window.  Set the Program Name to d:\path\4DOS.COM
          where "d:\path" is the drive and directory where 4DOS.COM is
          stored.  Set the Parameters to whatever 4DOS startup options you
          want (swapping type, environment size, etc.; do NOT use /C or
          /P).  For other DESQView parameters, the defaults are workable
          except for the following changes:

                    Writes Text Directly to Screen     Y    (screen 1)
                    Close on Exit to DOS               Y    (screen 2)
                    Uses its Own Colors                Y    (screen 2)

          These parameters assume that you are running 4DOS in a full-
          screen window; if so the window dimensions on screen 2 must be
          set accordingly.

          You may wish to run 4DOS in a window smaller than the full
          screen.  If so set the window dimensions accordingly, and change
          the "Writes Text Directly to Screen" field to "N".  4DOS is writ-
          ten to be "Desqview-aware", and will not "bleed through" when
          running full-screen commands (DRAWBOX, DRAWHLINE, DRAWVLINE,
          LIST, SCRPUT, and SELECT) in such a window.  We have found that
          the only ANSI driver which works properly in a window smaller
          than the full screen is Quarterdeck's DVANSI.COM.  If you need to
          load DVANSI.COM, you can do so from a window startup batch file
          as described in the next paragraph.  As of version 3.01 the 4DOS
          HELP command has been modified to be DESQView-aware, and should
          also work properly in a window smaller than the full screen.

          You can set up a startup batch file to be run when a DESQView
          window is opened -- just create it, and place its name (with
          drive and path if necessary) as the last thing on the Parameters
          line.  This batch file will be run after and independently of any
          4START.BAT or 4START.BTM file.

          DESQView will work properly with the 4DOS /U and /E:nnnnU options
          in the primary shell, but may not work properly if these options
          are set in 4DSHELL and/or used explicitly in a DESQView window. 
          The 4DOS /E:nnnnS (swapped environment) option is incompatible
          with DESQView.


      DESQView DOS Services (Quarterdeck):

          Under 4DOS, the DESQView DOS Services option will not work in its
          default configuration.  To make DOS Services work under 4DOS, you


   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 16

          must first create a batch file, DOSSERV.BAT, in your DESQView
          directory to run DOS Services under COMMAND.COM.  (We are assum-
          ing that DESQView is in directory C:\DV and COMMAND.COM is in
          directory C:\; you will need to modify the settings below if your
          system is configured differently.)  The batch file is:

                    set comspec=c:\command.com
                    c:\dv\dosserv
                    c:\command
                    exit

          Then, make the following changes on the DESQView change a program
          screen for DOS Services (items marked ** are on the second page
          of the screen):

                    *   Memory Allocation = 100K or greater
                    *   Program Name = C:\DV\DOSSERV.BAT (modify from
                        previous value of C:\DV\DOSSERV).
                    **  Close on Exit to DOS = N
                    **  System Memory = 10K or greater
                    **  Allow Close Window = N

          Once these steps are taken, you should be able to open the DOS
          Services window normally.  However you will not be able to close
          it with a close window command.  Instead, go to the window where
          DOS Services allows you to compose a DOS command, and type EXIT
          to close the window.


      DoubleDOS (SoftLogic Solutions):  See Software Carousel.


      DR-DOS (Digital Research):  [**]

   3.02   4DOS appears to work properly as a command processor (including
          as the primary shell) under DR-DOS 3.x, and preliminary reports
          indicate that it will work under DR-DOS version 5.0 as well.

          DR-DOS's design makes the ASSIGN, JOIN, and SUBST commands inter-
          nal (in MS-DOS / PC-DOS they are external).  To access these
          commands when using 4DOS as the command processor, you must set
          up aliases which run DR-DOS's COMMAND.COM to invoke the commands. 
          The following 4DOS aliases accomplish this (adjust these if
          COMMAND.COM is not in C:\):

              alias assign `c:\command /c assign %&`
              alias join `c:\command /c join %&`
              alias subst `c:\command /c subst %&`


      Epsilon (Lugaru Software):  [**]

   3.02   Epsilon can run 4DOS as a concurrent process, and pass commands
          to 4DOS for execution.  In this mode it traps 4DOS's input re-


   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 17

          quests and feeds the keystrokes to 4DOS.  However it does not
          feed backspaces etc. -- only actual characters.  This means that
          editing of input isn't seen by 4DOS.  To fix the problem, either
          run 4DOS as a shell, and not as a concurrent process, or use a
          SETDOS /L1 for the copy of 4DOS that is run under Epsilon.  

          To use the more flexible SETDOS /L1 approach you must use
          4START.BAT (or .BTM) to set up the SETDOS /L1 before running
          Epsilon.  To do so, first set up an alias for Epsilon that sets
          an environment variable (change the name of the variable if you
          wish):

                    alias eps `set epsi=YES^epsilon %&^unset epsi`

          Then placing the following line in 4START will issue the SETDOS
          /L1 command in a secondary shell started by Epsilon, but ignore
          it otherwise:

                    if "%epsi"=="YES" setdos /l1


      Headroom (Helix Software):  [**]

          4DOS and Headroom have been tested by both J.P. Software and
          Helix Software and should work properly together.  Headroom will
          NOT work correctly if the COMSPEC is not set properly, so if you
          do have trouble check your COMSPEC (see pages 15 - 16 of the
          manual).  There is a problem running 4DOS's HELP with a mouse
          when Headroom is loaded.  If you have trouble with this please
          contact Helix Software technical support; a fix will be incorpo-
          rated into Headroom version 2.03.


      HIMEM.SYS (Microsoft):

   3.02   4DOS's XMS swapping will work properly with HIMEM.SYS, but
          HIMEM.SYS alone does NOT support the memory mapping required to
          use the 4DOS /U and /E:nnnnU options.  See the general section on
          /U and /E:nnnnU above for more information.


      Hot Line (General Information Inc.):

          The information below was obtained from tests with Hot Line ver-
          sion 2.10.

          Previous problems with Hot Line have been solved.  You should
          have no trouble accessing Hot Line via any of its hot keys.

          If you get "insufficient memory" error messages when installing
          Hot Line, reboot with COMMAND.COM to complete the installation. 
          These errors are due to an old version of the PKSFX program used
          to extract files from the compressed copies of Hot Line on dis-



   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 18

          kette.  This problem occurs only during installation, and is
          unrelated to the actual operation of Hot Line.

          If you load Hot Line from your AUTOEXEC file, you may find that
          it will not pop up properly at the prompt if you try to invoke it
          immediately after boot.  As soon as even the simplest application
          or utility program is run this problem clears up, and does not
          appear to recur.  We have been unable to determine its source, as
          it clears up when we run our debugger!


      MOVE-EM (Qualitas):  [**]

          MOVE-EM version 1.00 contains a bug which causes the system to
          crash whenever any program attempts to access XMS memory.  4DOS
          will attempt to access XMS memory if you specify the /U or
          /E:nnnnU option, or use the MEMORY command, so these 4DOS fea-
          tures cannot be used if MOVE-EM 1.00 is installed.

          MOVE-EM version 1.02 corrects the above bug, but is only compat-
          ible with 4DOS's /U and /E:nnnnU options if Microsoft's HIMEM.SYS
          is also loaded in your system.  MOVE-EM itself does not fully
          support the XMS specification which permits 4DOS to load itself
          and the master environment in high memory.  See the general sec-
          tion on /U and /E:nnnnU above for more information.


      Netware (Novell):  [**]

          The information below was obtained from tests with Netware ver-
          sions 2.12 and 2.15 and Netware 386, and from discussions with
          Novell support personnel.

          When Netware's LOGIN and/or MAP commands are used to map network
          drives into the path, the local path will be lost if it is not
          stored in upper case.  Earlier versions of 4DOS stored the path
          in whatever case it was entered in; beginning with version 3.0
          the PATH command always shifts its input to upper case to get
          around this problem.  However if you use SET to modify the path
          you can still manage to include lower case characters, and there-
          by exercise this Netware bug.  Novell has informed us that they
          intend to fix this problem in an upcoming release.  In the mean-
          time, keep your PATH environment variable entirely in upper case
          to avoid the problem.

          Netware also appears to lose one or more characters from the name
          of an environment variable (usually the second or third one in
          the environment) when setting other environment variables from
          inside a LOGIN script.  If you are setting environment variables
          such as COMSPEC within your LOGIN script, you can get around this
          problem by using a batch file to set the variables after LOGIN is
          complete.  Even if you cannot control the LOGIN script, you can
          still use a batch file to reset the "damaged" variables after
          LOGIN has finished.


   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 19

          It is not currently possible to do disk swapping to a network
          drive under Netware.  This is because Netware closes all files --
          including the 4DOS swap file -- each time an application exits. 
          When 4DOS goes to reload itself or swap out to start another ap-
          plication, a swap file seek error will occur.  We are considering
          possible internal workarounds for this problem; for now the
          available methods are to swap to EMS, XMS, or a local hard disk
          or RAM disk.

          Use caution with the 4DOS UNSET command under Netware.  When Net-
          ware is loaded it remembers the exact location of the COMSPEC
          variable in the master environment, and it may therefore have
          problems if variables such as COMSPEC and PATH are removed and
          reloaded in a different sequence.

   3.02   The Novell MENU system distributed with Netware uses Interrupt 2E
          to execute menu options, and therefore requires the use of the
          SHELL2E program to work properly.  SHELL2E is included with 4DOS;
          see the general section above on INT 2E and the SHELL2E documen-
          tation in SHELL2E.DOC for more information.

   3.02   When using MENU with SHELL2E, remember that a secondary 4DOS
          shell will be started to execute each command in the menu file. 
          This can be quite slow if you execute many commands for each menu
          option, and it won't work if you use SET commands whose results
          are used later in the command sequence.  However if you put the
          commands in a batch file and put the name of the batch file as
          the command to be executed for each menu option then there should
          be no performance problems, and the results of SET commands will
          be available to commands that occur later in the batch file.

          The 4DOS /U command line option is reported to be compatible with
          Netware, but the /E:nnnnU and /E:nnnnS options are not.


        OmniMouse Software Drivers:  [**]

          The OmniMouse TSR driver, MSCMOUSE.COM, works correctly with
          4DOS.  The CONFIG.SYS driver, MSCMOUSE.SYS, may not.  If you have
          trouble with MSCMOUSE.SYS use MSCMOUSE.COM instead.

      PC Tools (Central Point Software):

          The information below was obtained from tests with PC Tools ver-
          sion 5.5, and from user reports on versions 5.5 and 6.0.

          Most elements of this popular package work properly with 4DOS. 
          We have had some problems reported but in all cases investigation
          has shown that the problems occurred under COMMAND.COM as well
          (though not always with the same exact symptoms).

   3.02   PC Tools' PCSHELL 5.5 will refuse to launch applications from the
          4DOS prompt, giving an error indicating that you are not at the
          prompt.  This problem is due to the design of PCSHELL, and occurs


   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 20

          with all command line editing programs.  We have had one report
          that the problem has been solved in PC Tools 6.0.  It can be
          solved in any PC Tools version by loading PCSHELL with Innovative
          Data Concepts' shareware product SWAPSH, available on the 4DOS
          Utility Disk and on many bulletin boards and on-line systems. 
          SWAPSH will reduce PCSHELL's resident memory requirements as
          well.

          We have had one report that PC Tools' MIRROR program will not run
          properly from AUTOEXEC.BAT under 4DOS if SWAPPING OFF is in ef-
          fect.  If you experience this problem, be sure SWAPPING is ON
          before running MIRROR.


      QEMM and QRAM (Quarterdeck):

   3.02   The information below was obtained from tests with QEMM versions
          4 and 5, and user reports on QRAM.

          Both QEMM 5.0 and QRAM are compatible with 4DOS, and will allow
          you to load the 4DOS resident code and the master environment
          into high DOS memory (UMBs) via the /U and /E:nnnnU switches
          respectively.  For /U and /E:nnnnU to work with QRAM you must
          have QEXT loaded also (this is the normal method of loading
          QRAM).  See general information on these switches above as well.

          QEMM version 5 allocates both XMS and EMS memory from the same
          memory area.  Therefore it always reports the exact same amount
          of free XMS and EMS memory.  You will see this in the free EMS
          and free XMS values displayed by the 4DOS MEMORY command -- they
          will be exactly the same under QEMM 5.  Just remember that if
          both values are (say) 512K, that means you have 512K of free
          memory which can be allocated either way -- not 1024K!

          The FILES.COM program distributed with QEMM version 5 allows
          parts of the DOS file handle table to be loaded into high memory,
          using the LOADHI FILES=nn command.  This option will work proper-
          ly under 4DOS as long as you follow Quarterdeck's recommendations
          and keep a minimum of FILES=8 in CONFIG.SYS.  Lower values of
          FILES= in CONFIG.SYS may cause 4DOS to hang during boot, espe-
          cially if disk swapping is used.

          If you use QEMM's OPTIMIZE and your AUTOEXEC has 4DOS-specific
          commands like GLOBAL, IFF, aliases, etc., OPTIMIZE will not rec-
          ognize them as DOS commands.  Instead, it will act as if these
          commands are actually programs being invoked and attempt to see
          whether they should be loaded high.  This can confuse OPTIMIZE
          and make it either fail, or run much too long.  To address this,
          run OPTIMIZE with the switch /LOADHIONLY and then place a LOADHI
          command before each entry in AUTOEXEC that you actually want
          OPTIMIZE to examine.


      QuickCache II (Glassel and Associates):  [**]


   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 21

          QCACHE is compatible with 4DOS only if its "Use low memory" op-
          tion is enabled.  If this option is disabled (the QCACHE default)
          your system is almost certain to hang when QCACHE is loaded and
          4DOS is running in swapping mode.


      Software Carousel (SoftLogic Solutions):

          Please see the section on multitaskers under General Information
          above before reading this section.

          The information below was obtained from tests with Software Car-
          ousel version 3, and discussions with SoftLogic technical sup-
          port.

          Neither Software Carousel nor DoubleDOS will work properly with
          4DOS loaded as the primary shell.  Both programs are written with
          the assumption that COMMAND.COM is the system command processor,
          and both contain logic which specifically depends on COMMAND.COM
          and the way it is written.  This makes it impossible to write a
          program which works properly as an alternate command processor
          loaded underneath (i.e. before) these products.

          However, 4DOS can be run without difficulty inside a Software
          Carousel partition, and should work properly as a program to be
          run under DoubleDOS.

          When loading 4DOS into a Carousel partition, the best method is
          to leave the COMSPEC set to COMMAND.COM when Carousel is loaded. 
          4DOS should then be set up in the Carousel options file just like
          any other program.  For example, to load 4DOS into partition 1:

                    d:\path\4DOS.COM [parameters] [filename]

          where:

              d:\path         is the drive and path where 4DOS.COM is lo-
                              cated

              [parameters]    is the 4DOS command line parameters (/S, /E,
                              etc.; do NOT use /P here)

              [filename]      is the name of a batch file to be executed
                              when the partition is started

          Because 4DOS can only be loaded in a partition when running Soft-
          ware Carousel, and not as the primary command processor, using
          4DOS disk swapping in multiple partitions is subject to the cau-
          tionary note on this subject in the general information section
          on multitaskers; please read it carefully.






   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 22

      Telix Communications Software:

          Telix will work properly with 4DOS.  However because Telix uses
          all available EMS memory, this memory will not be available for
          4DOS swapping when you shell to DOS from Telix.  As a result, if
          you have set 4DOS up to swap secondary shells to EMS (e.g. with
          SET 4DSHELL=/S:E) then the secondary shell from Telix will load
          resident.  If you have allowed 4DOS to determine the swapping
          method itself for secondary shells, then it will swap to disk
          (unless XMS is available).  This behavior isn't a problem -- it's
          just different from what you may see if you shell to DOS from
          other programs that don't take all available EMS.


      TSRCOM Utilities (TurboPower Software):

   3.02   Versions 2.5 and earlier of these popular utilities from Turbo-
          Power Software are not compatible with 4DOS.  The problem was
          corrected in release 2.6, issued in January, 1989.  Up-to-date
          copies of these utilities are available on the 4DOS Utility Disk
          and on many bulletin boards and on-line systems.

          If you use TSRCOM's MARK and RELEASE to manage your TSRs, 4DOS
          swapping (as set with the SWAPPING command) must be in the same
          state when RELEASE is run as it was when MARK (or FMARK) was run. 
          This is a characteristic of the design of MARK and RELEASE (or
          any other such products), and not a bug.

          The specific circumstances are that if you run RELEASE with SWAP-
          PING ON when MARK was run with SWAPPING OFF it will work, but if
          RELEASE is run from a batch file it will generate a "Cancel batch
          job (Y/N/A)?" message.  If you run AUTOEXEC.BAT with SWAPPING OFF
          for speed reasons, use MARK in AUTOEXEC, and later run RELEASE
          from a batch file, you will see this problem.  The solution is to
          have swapping ON when MARK is run in AUTOEXEC.  In the opposite
          situation (run RELEASE with SWAPPING OFF when MARK was run with
          SWAPPING ON), the system will hang.


      UltraVision (Personics):  [**]

   3.02   When using 4DOS and Personics' UltraVision 2.0, you may need to
          have a 4START.BAT (or .BTM) that contains a SETDOS /S command to
          set the cursor shape, or your cursor may disappear.  The proper
          cursor start and end values depend to some extent on the UV line
          size, but all values less than 14 appear to work in all UV line
          sizes.

          The DE program distributed with UltraVision is written specifi-
          cally for COMMAND.COM, and cannot currently be used to set direc-
          tory colors with 4DOS.

          If you load UltraVision inside a Microsoft Windows 3.0 window
          which was started with 4DOS, and don't unload it before EXITing,


   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 23

          then when you do EXIT Windows will display a message that a pop-
          up program has been activated.  Type Ctrl-C when this message
          appears to close the window and return to Windows.


      Ventura Publisher (Xerox):  [**]

   3.02   Ventura Publisher may issue an Error 0019 if run with a 4DOS (or
          COMMAND.COM) environment size of more than 256 bytes.  The prob-
          lem occurs based on the environment size set with /E:, not on how
          much of the space is actually in use.  This is a bug in Ventura
          Publisher, and not a problem in 4DOS.  In our last conversation
          with Xerox we were told this bug "might" be fixed in the next
          release of Ventura.

          Xerox recommends that Ventura be run with the DOS default envi-
          ronment size of 160 bytes, but 4DOS only allows reduction to 256
          bytes.  In all cases we have seen the Error 0019 problem can be
          eliminated by reducing your environment size to 256 bytes.  Since
          this will not be enough environment space for many users, you may
          have to keep multiple CONFIG.SYS files and reboot specially for
          Ventura to get around this problem.


      VP/ix with Sun/OS (Sun Microsystems):  [**]

          4DOS appears to work as the primary command processor in a DOS
          window started under VP/ix on a Sun 386i system.  The /L: switch
          does not permit 4DOS to find its EXE files outside the root di-
          rectory, so the 4DOS files must be placed there.


      VTSR (Golden Bow Systems):  [**]

          Version 2.0 of VTSR will work properly with 4DOS.  Earlier ver-
          sions will report (incorrectly) that no TSRs are installed.


      Windows 3.0 (Microsoft):

   3.02   When the instructions below are followed 4DOS will work properly
          with Windows 3.0 in all modes.

          The standard "DOS" icon provided with Windows is set up to run
          COMMAND.COM, regardless of your COMSPEC setting.  To run 4DOS,
          either go into the Program Manager's File / Properties menu se-
          lection for the DOS icon and change the command line entry to
          refer to 4DOS, or create a new DOS icon (take the File / New menu
          selection, then choose "Program Item") with the name "4DOS" and a
          command line which refers to 4DOS.  In either case the command
          line should include the full path and filename for 4DOS.COM, plus
          any switches you wish to set (swapping, alias and environment
          size, etc.).



   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 24

          If you want a real 4DOS icon displayed, rather than the generic
          "DOS" icon Windows gives you, copy the file 4DOS.ICO which comes
          with 4DOS into your Windows directory (for a monochrome system,
          use 4DOSM.ICO).  You can also leave the file in your 4DOS direc-
          tory and enter the full path when prompted for the icon file
          name.  Select the 4DOS icon on the Program Manager screen (click
          on it once), then open the Program Manager's File Properties
          dialogue box and click on the Change Icon button.  You'll be
          prompted for the name of the new icon file -- just type it in and
          click on OK, and when you go back to the Program Manager screen
          you'll have a custom icon for 4DOS.  (Thanks to 4DOS user Charles
          Jay Pilzer for providing the original icon design; we modified it
          with the shareware program ICONDRAW by Philip Eskelin Jr.).

          When creating a 4DOS icon, you may wish to set up a .PIF file
          instead of simply using the File Properties screen.  A .PIF file
          will give you more control over how 4DOS is set up and started. 
          We have included a sample Windows .PIF file with 4DOS, called
          4DOS.PIF; the values in this file are examples and should be
          checked before using the .PIF file on your system.  The 4DOS .PIF
          file can be called by any name, though of course using "4DOS.PIF"
          will make maintenance easier.  You can set up more than one .PIF
          file for 4DOS if you wish to run different windows with different
          parameters or characteristics.

          To associate  a .PIF file for 4DOS with a Program Manager icon
          set up as described in the previous paragraphs, first set up the
          .PIF file itself (using the PIF editor from the Accessories
          screen), then set up the icon as described above, placing the
          full path and name of the .PIF file into the command line field
          instead of the path and name for 4DOS.COM.

          Whether you use a PIF file or the simpler Program Manager ap-
          proach, if you are running Windows 3.0 in real mode or standard
          mode, you MUST add the parameter /V to the 4DOS command line.  If
          you don't, the system will hang if you switch away from and then
          return to a 4DOS window which is at the 4DOS prompt or otherwise
          running 4DOS itself (rather than an application).  You can add
          the /V to the command line in the File Properties screen, or to
          the Parameters field in your PIF file.  You can also set it be-
          fore running Windows by using the 4DSHELL variable:

                    set 4dshell=/v

          If you are running Windows in 386 enhanced mode the /V is not
          necessary, but it will do no harm.  We recommend that you always
          use /V when setting up 4DOS for Windows, so that if you change
          Windows modes 4DOS will continue to operate correctly.

          When running in 386 enhanced mode, you can run 4DOS in a window
          that's smaller than the full screen.  All 4DOS commands, includ-
          ing "full screen" commands like LIST and SELECT, will work prop-
          erly in such a window.  To invoke this option you must set up a
          4DOS .PIF file, and set the "Windowed" (as opposed to "Full


   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 25

          Screen") flag in the PIF editor.  This flag is visible only when
          running the PIF editor in 386 enhanced mode.  It is not set in
          the sample .PIF file provided with 4DOS.

          Some Windows 3.0 EGA and VGA drivers have a bug which can cause
          Windows to set the screen color palette to all black, so nothing
          appears on the screen.  If this occurs with 4DOS it is probably
          due to this bug, and not a 4DOS problem.


      WordPerfect 5.1 (WordPerfect Corp.):  [**]

          Early releases of WordPerfect 5.1 had a variety of problems in
          the way they accessed expanded (EMS) memory, and therefore may
          conflict with 4DOS's EMS swapping.  Symptoms of the conflict
          include incorrect response to keystrokes, and system hangs.  If
          you have a problem with WordPerfect 5.1 and 4DOS when using
          4DOS's EMS swapping, try changing to disk swapping.  If this
          resolves the problem, you can probably solve it permanently by
          upgrading to a later release of version 5.1.




































   4DOS 3.02  [9-7-90]            COMPAT.DOC                        page 26


```
{% endraw %}

## README.DOC

{% raw %}
```

                                4DOS README.DOC

                             Version 3.02, 9/7/90


   Copyright 1989, 1990, J.P. Software.  All Rights Reserved.  Published by
   J.P. Software, P.O. Box 1470, E. Arlington, MA 02174 USA, (617)
   646-3975.


   Greetings, and thanks for trying 4DOS!

   This file contains recent changes and other useful information.  It also
   lists the files distributed with version 3.02; explains how to upgrade
   from earlier versions of 4DOS to version 3.02; and describes the 4DOS
   Utility Disk.

   To order 4DOS, see the ORDER.FRM file or call us at (800) 368-8777
   (orders only please!) or (617) 646-3975.  If you are upgrading from an
   earlier version of 4DOS, be sure to read UPDATE30.DOC for information on
   changes between versions!

   This file is formatted at 58 lines per page, and contains form feeds and
   page footers.  It can be printed on most PC printers using the command:

            copy readme.doc prn

   Printing it with a program that formats the pages is not likely to work
   due to the formatting included in the file.


   We support 4DOS in our own CompuServe area, section 10 of the PC Vendor
   B forum (GO PCVENB).  If you are not currently a CompuServe subscriber,
   consider a special offer CompuServe has made to 4DOS users:  call 1-800-
   848-8199 (outside the US and Canada call 614-457-0802) and ask for
   operator 178 to receive a free CompuServe introductory membership,
   including user ID, password, and a $15 connect time credit.

   Official 4DOS Product Support is always available on our support BBS:

      Future Technology Multi-Node EMDS (617) 720-3600 / 720-4095
      120+ Conferences - 140+ Directories - 1.5 Gigabytes -  9600b below
      (617) 227-6260 AX9624c*(617) 227-4170 HST*(617) 720-1330 HAYES V9600
      Home of 4DOS Product Support  &  QModem National Distribution Site

   For more information on technical support please see page iv of the
   manual.  Note that the correct number for the Future Technology BBS is
   NOT 617-646-3975 as shown in some versions of the manual!

   If you live outside the US and Canada you may want to check the list of
   international dealers in the ORDER.FRM file.  Purchasing through these
   dealers can save you the delay and inconvenience which may be involved
   in dealing with currency conversions and international shipping.


   4DOS 3.02  [9-7-90]            README.DOC                         page 1


   Changes in Version 3.02
   -----------------------

   Virtually all of the changes in version 3.02 are compatibility
   improvements and bug fixes, but a few are new features.  Here's a quick
   description of some of the more significant changes; there are also many
   other smaller additions and bug fixes.  For details on these and other
   changes see the items marked "3.02" in UPDATE30.DOC.

      ** The HELP text has been modified in many places.  An ANSI table has
      been added along with the APPEND, FASTOPEN, GRAPHICS, KEYB, NLSFUNC,
      RECOVER, and REPLACE commands.  All resident commands now show their
      DOS 3.3 resident size.

      ** We have added one new built-in environment variable, and two new
      variable functions:

          %_ndp               Returns:
                              0 if no coprocessor is installed
                              87 for an 8087
                              287 for an 80287
                              387 for an 80387

          %@upper[string]     Returns the string converted to upper case.

          %@lower[string]     Returns the string converted to lower case.

      ** A "?" wildcard character now matches zero or more characters like
      COMMAND.COM instead of one or more like previous versions of 4DOS.

      ** The F3 key now works like COMMAND.COM, so you can type part of a
      line and hit F3 to get the rest of the previous line.

      ** The recurring problems with I/O redirection on Novell networks
      have been solved by revamping the handling of redirection inside 4DOS
      to get around Netware's oddities.

      ** 3+Open compatibility has also been improved by modifying 4DOS
      internally to get around some of 3+Open's oddities.

      ** Divide by zero handling has been removed from 4DOS, allowing
      standard DOS divide by zero handling to take place.

      ** Problems with missing <cr>s in description files have been solved. 
      These problems did not cause any trouble within 4DOS, but 3rd-party
      description editors were confused by them.

      ** Problems with occasional out-of-memory errors in DIR have been
      resolved.

      ** When starting a shareware copy of 4DOS, the 3-second delay for
      display of the shareware message can now be interrupted by hitting
      any key.


   4DOS 3.02  [9-7-90]            README.DOC                         page 2


   Files Included with 4DOS
   ------------------------

      The following files are included with 4DOS version 3.02 (numbers in
      parentheses refer to notes at the end of the list):

          4DOS.DOC            Complete 4DOS manual
          4DOS.COM            4DOS loader for EMS or disk swapping 
          4DOS.PIF (3)        PIF file for running 4DOS under Windows 3.0
          4DOS.ICO (3)        Icon file for running 4DOS under Windows 3.0
          4DOSM.ICO (3)       Same as 4DOS.ICO but for monochrome systems
          4DOS88.EXE          4DOS program file for any PC-compatible
                              system
          4DOS286.EXE (2)     4DOS program file for 186/286/386/486 systems
          ALIASES             Sample aliases 
          COMPAT.DOC          Information on using 4DOS with other products
          DOS.HLP             4DOS help text
          HELP.EXE            4DOS help program
          HELPCFG.EXE         Color configuration program for HELP.EXE
          INSTALL.BAT (1)     Startup installation batch file
          INSTALL.BTM (1)     Additional installation batch file 
          KEYSTACK.SYS        4DOS KEYSTACK driver 
          ORDER.FRM           4DOS license agreement, order form, and
                              upgrade order form
          PKUNZIP.EXE (1,4)   Unzip (decompression) program for 4DOS
          README.1ST (1)      Shareware disk README file and startup
                              instructions
          README.DOC          This file
          SHELL2E.COM         Program to allow software using INT 2E for
                              command execution to work with 4DOS
          SHELL2E.DOC         Documentation for SHELL2E.COM
          SUPPORT.BBS         Information on Future Technology, the
                              independent BBS used for 4DOS support
          SYSOP.DOC           4DOS information for BBS sysops
          UPDATE30.DOC        Information on changes in versions 3.01 and
                              3.02; manual corrections
          VENDOR.DOC          4DOS information for shareware disk vendors

      (1) Included only with diskette copies of 4DOS.  The INSTALL files
          are not included with electronically distributed copies because
          they will only work properly when 4DOS is stored on diskette in
          its usual distribution format.

      (2) The 4DOS286.EXE file is not included with shareware copies sold
          on 5.25", 360K disks because it does not fit on such disks.  If
          you have a registered copy of 4DOS on 5.25" disks, 4DOS286.EXE is
          in the file 4DOS2.ZIP on your registered disk.  This file is
          provided for convenience only and makes no noticeable difference
          in the use or behavior of 4DOS, so its absence on 5.25" shareware
          disks should not affect your evaluation of a shareware copy.  See
          below for more information on what 4DOS286 is and how to obtain a
          copy if you feel you must evaluate it before purchasing 4DOS.



   4DOS 3.02  [9-7-90]            README.DOC                         page 3

      (3) For information on using the Windows files see the Windows 3.0
          information on page 24 of COMPAT.DOC.

      (4) PKUNZIP is part of the shareware PKZIP file compression package
          distributed by PKWare, 7545 North Port Washington Road, Suite
          205, Glendale, WI 53217.  It is Copyright 1989 PKWare Inc., and
          is distributed under license to J.P. Software.  PKUNZIP is a
          trademark of PKWare Inc.  Shareware copies of the full PKZIP
          package are available on many bulletin boards and on-line
          services.  The copy of PKUNZIP distributed with 4DOS has been
          reduced in size with an EXE file compression program in order to
          save space on the distribution disks, but is fully functional.


   4DOS286
   -------

      4DOS286 is a version of 4DOS compiled specifically for 186, 286, 386,
      and 486 systems.  It no longer fits on 5.25" shareware disks; the
      information here is provided only so you know what isn't there if you
      have such a disk.  4DOS286 is always included with registered copies
      of 4DOS, upgrades for registered users, and shareware copies of 4DOS
      distributed electronically or on 3.5" disks.

      4DOS286 provides a marginal (and usually undetectable) performance
      improvement, but is otherwise EXACTLY equivalent to the 4DOS88.EXE
      file on the standard shareware disk.  4DOS will work properly on any
      PC system using 4DOS88; 4DOS286 is not needed for proper operation,
      and is provided for convenience only.  In the next major release of
      4DOS, the separate "286" executable file will be eliminated entirely.

      If you have a single 5.25" 4DOS shareware disk and feel that you must
      try 4DOS286.EXE before purchasing 4DOS, check with your shareware
      disk vendor to see if they carry the supplementary disk containing
      this file.  You can also obtain this supplementary disk from J.P.
      Software by sending a check, money order, or cash (via registered
      mail please) for $2 ($4 outside the U.S.).  Or, you can download a
      copy of 4DOS from an electronic bulletin board or on-line service.


















   4DOS 3.02  [9-7-90]            README.DOC                         page 4



   Installing Version 3.02
   -----------------------

      If you do not presently have 4DOS installed, follow the instructions
      in README.1ST for automatic installation.  For manual installation
      see pages 12 - 13 of the 4DOS reference manual for "quick start", or
      pages 14 - 27 for full details.  If you have 5.25" disks with a
      registered copy of 4DOS, when doing a manual installation please note
      that the 4DOS286.EXE file is now on the second disk, in the file
      4DOS2.ZIP.


   Upgrading an Earlier Version of 4DOS to Version 3.02
   ----------------------------------------------------

      If you already have an earlier version of 4DOS, use the procedure
      below to upgrade to version 3.02.

      Version 3.02 of 4DOS is a maintenance release.  If you are a
      registered owner of version 3.0 or 3.01 and are entitled to a free
      major upgrade, version 3.02 does NOT count as that upgrade.  The
      BRAND program you used to brand version 3.0 or 3.01 will also brand
      version 3.02.

      If you need to order a paid upgrade, a new copy of the printed and
      bound 4DOS version 3 manual, or a utility disk, see the upgrade order
      form in the ORDER.FRM file.  The printed manual has not been revised
      for version 3.02.

      All users with 4DOS presently installed can use the following upgrade
      procedure:

          1) Be sure you have a bootable DOS floppy handy in case you have
          a boot problem.

          2) Install 4DOS version 3.02 using either the manual or automatic
          procedure described in the documentation.  Install it in a
          directory which is NOT the same as the directory containing your
          old 4DOS files, and do not modify your CONFIG.SYS or AUTOEXEC.BAT
          files (yet).  If you purchased your upgrade on 5.25" disks, when
          doing a manual installation note that 4DOS286.EXE is now on the
          second disk, in the file 4DOS2.ZIP.  If you received a free
          upgrade on 5.25" disks, 4DOS286.EXE is on the second
          (supplementary) disk and must be copied manually to your boot
          disk.

          3) If you are a registered user be sure to brand your new version
          of 4DOS to convert it to a registered copy.  (If you are not a
          registered user, how long have you been using 4DOS?  Maybe it's
          time to register!)  Branding is included in the automatic
          installation procedure, and described in the manual (page 12,
          step 3) if you are installing 4DOS manually.  If the branding


   4DOS 3.02  [9-7-90]            README.DOC                         page 5

          operation fails with a "brand installation error", check that you
          entered the serial number correctly.  If so and you are upgrading
          from an older version to a new major release (for example, from
          version 2.21 to version 3.02), you probably are not entitled to
          the current upgrade; see the last page of ORDER.FRM to order an
          upgrade, or contact J.P. Software.

          4) To "test drive" 4DOS version 3.02, run the EXE file
          (4DOS88.EXE for any PC system, or 4DOS286.EXE for 186/286/386/486
          systems; use 4DOS88.EXE if you aren't sure).  Don't run 4DOS.COM
          (i.e. do not use the "4DOS" command) as described in the "Test
          Driving 4DOS" section of the manual -- it isn't compatible with
          the earlier version of 4DOS already installed on your system and
          will simply generate an error message.

          5) Read through UPDATE30.DOC, and figure out any changes you need
          to make in your normal use of 4DOS, and in CONFIG.SYS,
          AUTOEXEC.BAT, 4START, your aliases file, and any other 4DOS-
          related files.  Pay particular attention to the items marked
          "-->".  If you are upgrading from version 3.01 or 3.01a to 3.02,
          you only need to examine the items marked "3.02".  Note that
          changes between versions 2 and 3 are no longer included in
          UPDATE30.DOC; contact J.P. Software if you need a detailed list
          of these changes.

          6) Once you are familiar with the changes in this new version,
          modify CONFIG.SYS and any other files accordingly, copy the 4DOS
          system files (4DOS.COM, 4DOS88.EXE or 4DOS286.EXE, and
          KEYSTACK.SYS) to your boot directory, and reboot your system.  If
          you keep all 4DOS files in their own directory, you can simply
          modify CONFIG.SYS and AUTOEXEC.BAT to adjust for the new
          directory name and reboot, without doing any copying.  If you do
          this be sure to modify the shell name in SHELL=, any places where
          you use 4DOS's /L: command line switch, any SET COMSPEC command,
          and your PATH.

          7) A note for those upgrading from version 3.01 (or 3.01a) to
          3.02:  once you've ensured that the correct files are being
          referenced for the new version, you probably won't need to make
          any other changes in your CONFIG.SYS and AUTOEXEC files for
          version 3.02 to work correctly.  The changes from 3.01 to 3.02
          are very unlikely to require changes to your 4DOS configuration
          or the system startup commands in AUTOEXEC.













   4DOS 3.02  [9-7-90]            README.DOC                         page 6


   The 4DOS Utility Disk
   ---------------------

      J.P. Software offers an add-on product for registered 4DOS users
      only, the 4DOS Utility Disk, priced at $10 plus shipping.  

      All products on the utility disk except 4MAKE are either shareware or
      freeware, and are available on many BBSes and on-line services.  We
      provide them on the utility disk as a service to those customers who
      do not have modems or who prefer to obtain these programs on
      diskette.

      The utility disk includes:

          * J.P. Software's help file compiler 4MAKE, and a copy of the
          ASCII 4DOS help text.  With 4MAKE and the help text you can
          customize 4DOS's HELP by adding, deleting, or modifying commands
          or command descriptions in the help file.

          * TSRCOM, TurboPower Software's powerful package of TSR and
          memory management utilities.  The TSRCOM package allows you to
          remove unruly TSRs from memory in several ways, and also includes
          a memory map program and several other useful utilities.

          * Shareware copies of Iram Weinstein's 4EDIT, a 4DOS full-screen
          file description editor; and 4ZIP, a shell for PKZIP / PKUNZIP
          allowing 4DOS file descriptions to be stored in and retrieved
          from .ZIP files.

          * Shareware copies of Innovative Data Concepts' SWAPDOS, a
          utility to swap applications out of memory when you shell to DOS;
          and SWAPSH, a swapper for the PC Tools Deluxe PCSHELL program
          which allows it to run applications from the 4DOS prompt.

      (4EDIT, 4ZIP, SWAPDOS, and SWAPSH are shareware products; like all
      shareware you must register with the author if you continue to use
      the product after a trial period.)

      To order the 4DOS Utility Disk, see the upgrade order form in the
      ORDER.FRM file.















   4DOS 3.02  [9-7-90]            README.DOC                         page 7


```
{% endraw %}

## SHELL2E.DOC

{% raw %}
```

                             4DOS SHELL2E Utility

                             Version 3.02, 9/7/90


   Copyright 1990, J.P. Software.  All Rights Reserved.  Published by J.P.
   Software, P.O. Box 1470, E. Arlington, MA 02174 USA, (617) 646-3975.

   SHELL2E is a small TSR (memory-resident) program that allows some
   programs using the undocumented COMMAND.COM interrupt 2E (INT 2E) to
   work under 4DOS.

   SHELL2E is available to all users of 4DOS.  You may distribute it to
   others for any purpose provided that you do not sell it or charge a fee
   of any kind for distribution, and that this documentation is included
   with all copies and is not modified in any way.  Any other distribution
   of SHELL2E requires explicit written permission from J.P. Software.

   INT 2E is a "back door" entrance to COMMAND.COM that is neither
   documented nor supported by Microsoft.  It was apparently designed to
   allow programs to execute DOS commands without loading a secondary copy
   of the command processor.  It is rarely used, but programs that use it
   will be entirely dependent on it to work properly.

   SHELL2E was originally written to allow users of Novell's MENU program
   to use MENU with 4DOS; it has also proved useful for a few other
   programs which also use INT 2E.

   SHELL2E accomplishes most of the purpose of INT 2E.  It traps calls
   programs make to Interrupt 2E and loads a secondary shell to execute
   them.  With one exception, this should make programs that use INT 2E
   work properly.

   The exception is programs that use INT 2E to issue SET commands intended
   to modify the master environment.  Under COMMAND.COM the INT 2E is
   executed by the primary command processor, and therefore implicitly
   modifies the master environment when a SET command is executed.  Since
   SHELL2E uses a secondary command processor to execute the commands, a
   SET command will modify the secondary command processor's environment,
   and not the master environment. As of this writing the only program we
   know of using INT 2E to execute SET commands is Personal Rexx from
   Mansfield Software.

   Use of SHELL2E is very simple.  To load it, be sure that SHELL2E.COM is
   in a directory that's on your PATH), then enter the command:

         shell2e

   To unload SHELL2E, enter the command:

         shell2e /u




   4DOS 3.02  [9-7-90]            SHELL2E.DOC                        page 1

   SHELL2E must be the last TSR loaded at the time you are trying to unload
   it.  If it is not, you will get an error message after entering the
   SHELL2E /U command.

   SHELL2E occupies approximately 512 bytes of resident memory once loaded. 
   It can be loaded high under 386MAX, MOVE-EM, QEMM, QRAM, or a similar
   program, but it cannot be unloaded with its /U switch once it is loaded
   high.

   SHELL2E starts the command processor to run a secondary shell.  The name
   of the command processor is obtained from the COMSPEC environment
   variable that was in effect at the time SHELL2E was loaded -- NOT the
   COMSPEC environment variable setting in effect when SHELL2E is invoked
   by an INT 2E from another program.  In general this subtlety won't
   matter, but if you change COMSPEC during operation of your system you
   may need to consider it.  You can set parameters for a 4DOS shell
   created by SHELL2E using the 4DSHELL environment variable, just as you
   can for any secondary 4DOS shell.

   If you load SHELL2E and your program still doesn't work, it may be
   getting an error.  If your program returns to a menu or other screen
   without waiting for you to view the output from a command it executes,
   you may be unable to see the error message before the screen is cleared. 
   If you think this may be happening, unload SHELL2E and reload it with a
   /W switch:

         shell2e /W

   This will force SHELL2E to display the message "Press any key to
   continue ..." and wait for a keystroke once execution of the command is
   complete, and before returning to the program  that issued INT 2E. If
   you use the /W switch then wish to disable it, you must unload SHELL2E
   and reload it without the /W.

   You can also use the /W switch to determine if your program is using INT
   2E in the first place.  Just load SHELL2E with /W and try the program;
   if you see the "Press any key to continue..." message when a command is
   done, then the program is using INT 2E; if you don't see the message, it
   isn't.

















   4DOS 3.02  [9-7-90]            SHELL2E.DOC                        page 2


```
{% endraw %}

## SYSOP.DOC

{% raw %}
```

                         4DOS BBS Sysop Documentation

                             Version 3.02, 9/7/90


   Copyright 1989, 1990, J.P. Software.  All Rights Reserved.  Published by
   J.P. Software, P.O. Box 1470, E. Arlington, MA 02174 USA, (617) 646-
   3975.


   This file provides information for bulletin board sysops on the distri-
   bution of 4DOS via BBS systems.

   We do explicitly permit uploads of the shareware version of 4DOS to BBS
   systems.  (Obviously uploads of the registered version are not permit-
   ted).  If you have any question as to whether the version which has been
   uploaded to your BBS is shareware, simply uncompress the 4DOS88.EXE file
   and run it.  The signon message will tell you which version you have,
   and the serial number.  (When done, an EXIT command will return you to
   COMMAND.COM).

   If your BBS is associated with a commercial or user group shareware
   library which distributes disks for a fee, you must obtain permission
   from us BEFORE placing 4DOS in the library.  See the file VENDOR.DOC for
   details.  This restriction does not affect your permission to place 4DOS
   on the BBS as long as you are not charging a fee for its distribution
   (other than the usual user fees for general use of the board).

   If you want a copy of 4DOS "branded" for your BBS (when the user starts
   the program it will say "uploaded to [your BBS name]" in the signon
   message) send us a note and we will send you one, in ZIP format.  Please
   indicate whether you want 5.25" or 3.5" disks.

   If you have any questions about 4DOS please contact us in any of the
   following places:

      CompuServe    J.P. Software section of the PC Vendor B forum (GO
                    PCVENB), or CompuServe Mail to 75300,210
      Bix           Bixmail to "trawson"
      BBS           Future Technology, Boston, 617-720-4095 (this      
                    board is used as a home base for 4DOS support thanks to
                    sysops Bud Napier and Brian Moran; it is independent,
                    and is not operated by J.P. Software)
      InterLink     via the 4DOS Conference
      PCRelay       via the 4DOS Conference
      Voice         (617) 646-3975, days Eastern US time
      Fax           (617) 646-0904
      US Mail       J.P. Software
                    P.O. Box 1470
                    E. Arlington, MA 02174, USA

   An uploaded copy of 4DOS should normally include the following
   files once everything is uncompressed:

      4DOS.DOC           Complete 4DOS manual
      4DOS.COM           4DOS loader for EMS or disk swapping 
      4DOS.PIF           PIF file for running 4DOS under Windows 3.0
      4DOS.ICO           Icon file for running 4DOS under Windows 3.0
      4DOSM.ICO          Same as 4DOS.ICO but for monochrome systems
      4DOS88.EXE         4DOS program file for any PC-compatible system 
      4DOS286.EXE *      4DOS program file for 186/286/386/486 systems
      ALIASES            Sample aliases 
      COMPAT.DOC         Information on using 4DOS with other products
      DOS.HLP            4DOS help text
      HELP.EXE           4DOS help program
      HELPCFG.EXE        Color configuration program for HELP.EXE
      KEYSTACK.SYS       4DOS KEYSTACK driver 
      ORDER.FRM          4DOS license agreement, order form, and upgrade
                         order form
      README.DOC         4DOS recent changes and installation instructions
      SHELL2E.COM        Program to allow software using INT 2E for command
                         execution to work with 4DOS
      SHELL2E.DOC        Documentation for SHELL2E.COM
      SUPPORT.BBS        Information on Future Technology, the independent
                         BBS used for 4DOS support
      SYSOP.DOC          This file
      UPDATE30.DOC       Information on changes in versions 3.01 and 3.02;
                         manual corrections
      VENDOR.DOC         4DOS information for shareware disk vendors

   In addition the following files are distributed on our shareware
   disks and may have been uploaded, but are not required for 4DOS to 
   work:

      INSTALL.BAT        Startup installation batch file
      INSTALL.BTM        Additional installation batch file 
      PKUNZIP.EXE        Unzip (decompression) program for 4DOS
      README.1ST         Shareware disk README file and startup instruc-
                         tions

   If you are cleaning up 4DOS files on your board please delete any old
   copies prior to version 3.02; they are all now obsolete.  If you are
   looking at an uploaded copy, note that the INSTALL.BAT, INSTALL.BTM, and
   README.1ST files are meaningful for diskette installations only, and
   will only confuse users if placed on a BBS, so you can delete them. 
   Also PKUNZIP.EXE is already carried on most boards, and it won't do much
   good inside a ZIP file anyway!


```
{% endraw %}

## UPDATE30.DOC

{% raw %}
```

                           4DOS Update Documentation

                             Version 3.02, 9/7/90


   Copyright 1989, 1990, J.P. Software.  All Rights Reserved.  Published by
   J.P. Software, P.O. Box 1470, E. Arlington, MA 02174 USA, (617) 646-
   3975.

   This file provides details on features changed and bug fixes in versions
   3.01 and 3.02, and corrections to the version 3 manual, due to either
   typographical errors or new features added after the manual went to
   press.  The ASCII manual distributed with shareware copies of 4DOS has
   already been corrected to include most of the changes in this file (all
   the ones we could fit!), but such corrections have not been made in the
   printed manual.  We have made every effort to insure that this file is
   as accurate as possible, but we cannot guarantee that every single
   change is included.

   This file does not document changes between versions 2 and 3 of 4DOS. 
   If you are a 4DOS version 2 user and this is the first copy of version 3
   you've seen, contact J.P. Software for documentation on the extensive
   changes between versions 2 and 3, or read through the new manual and
   this file carefully before you begin using version 3.02.

   The following marks are used to identify items in this file:

      -->     CAUTION:  This change may require modifications to your ex-
              isting batch files, aliases, commands, or common methods of
              using 4DOS.  Check these carefully when replacing an earlier
              version of 4DOS with 4DOS 3.02.

      3.01    This item is new or has been modified for version 3.01.

      3.02    This item is new or has been modified for version 3.02.

      [p nn]  This item corrects or adds to the information in the version
              3 manual, on page "nn".

   If you don't want to read through all changes you may find it easiest to
   view this file with 4DOS's LIST command and using its (F)ind capability. 
   If you want to see the modifications for version 3.02, search for
   "3.02"; if you want to see the changes in your printed manual, search
   for the string "[p".

   This file is formatted at 58 lines per page, and contains form feeds and
   page footers.  It can be printed properly on most PC printers using the
   command:

              copy update30.doc prn

   Printing it with a program that formats the pages is not likely to work
   due to the formatting included in the file.


   4DOS 3.02  [9-7-90]           UPDATE30.DOC                        page 1


                               Table of Contents


   Installation and Configuration  . . . . . . . . . . . . . . . . . .    3
      General Enhancements . . . . . . . . . . . . . . . . . . . . . .    3
      Automatic Installation . . . . . . . . . . . . . . . . . . . . .    3
      Command Line Options . . . . . . . . . . . . . . . . . . . . . .    3

   Features and Usage  . . . . . . . . . . . . . . . . . . . . . . . .    5
      General Features . . . . . . . . . . . . . . . . . . . . . . . .    5
      Command Line Editing . . . . . . . . . . . . . . . . . . . . . .    6
      Aliases  . . . . . . . . . . . . . . . . . . . . . . . . . . . .    6
      Batch Files  . . . . . . . . . . . . . . . . . . . . . . . . . .    6
      I/O Redirection  . . . . . . . . . . . . . . . . . . . . . . . .    6
      Environment Variables  . . . . . . . . . . . . . . . . . . . . .    7
      Technical Information  . . . . . . . . . . . . . . . . . . . . .    9

   Commands  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   10
      ALIAS  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   10
      CD and CDD . . . . . . . . . . . . . . . . . . . . . . . . . . .   10
      COPY . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   10
      DEL  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   10
      DESCRIBE . . . . . . . . . . . . . . . . . . . . . . . . . . . .   10
      DIR  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   10
      DRAWBOX  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   11
      FOR  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   11
      GLOBAL . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   11
      GOTO . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   11
      IF . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   11
      IFF  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   12
      INPUT  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   12
      KEYSTACK . . . . . . . . . . . . . . . . . . . . . . . . . . . .   12
      LIST . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   13
      LOADBTM  . . . . . . . . . . . . . . . . . . . . . . . . . . . .   13
      LOG  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   14
      MOVE . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   14
      QUIT . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   14
      REM  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   14
      SELECT . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   14
      SET  . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   14
      SETDOS . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   14

   HELP System . . . . . . . . . . . . . . . . . . . . . . . . . . . .   15
      New Capabilities and Topics  . . . . . . . . . . . . . . . . . .   15
      Environment Variables and Switches . . . . . . . . . . . . . . .   15
      Configuring HELP with HELPCFG  . . . . . . . . . . . . . . . . .   16









   4DOS 3.02  [9-7-90]           UPDATE30.DOC                        page 2


   Installation and Configuration
   ------------------------------

   This section discusses changes in the way 4DOS is installed and config-
   ured on your system.  It is not an explanation of how to install your
   upgrade to version 3.02 (for that see README.DOC).  For more information
   on installation see pages 9 - 26 of the manual.


      General Enhancements:

   3.01   Disk swapping should no longer cause occasional system hangs if
          the Ctrl-C or Ctrl-Break key is hit while 4DOS is swapping itself
          in from disk (i.e. when exiting an application).

   3.01   CLS, LIST, and SELECT are no longer affected by a video BIOS bug
          in old IBM PCs.

   3.02   [p 27]  When starting a shareware copy of 4DOS there is a 1/2-
          second, two-tone beep to identify this as a shareware copy, fol-
          lowed by a 3-second delay to allow reading of the shareware re-
          minder message.  Beginning with version 3.02, you can skip this
          delay by pressing any key.


      Automatic Installation:

          [p 13] The command to start automatic installation has been
          changed to:

                    x:install x y

          where "x" is the drive the 4DOS disk is in, and "y" is the drive
          on which you want to install 4DOS.  See README.1ST for more de-
          tailed instructions if you need them.


      Command Line Options:

          All the items below refer to information on pages 21 - 23 of the
          manual.

   3.01   [p 21-23]  Either / or - may be used as the switch character on
          the 4DOS command line (eg SHELL=4DOS -S:E instead of /S:E, etc.).

          [p 21]  The file specified in the "@filename" option can have
          more than one line, and is limited to a total of 255 characters
          in the file, not 128.  A file invoked with @filename can have
          another @filename inside it.  Wherever @filename occurs, all
          options placed after it are ignored, so it must be the last item
          present.




   4DOS 3.02  [9-7-90]           UPDATE30.DOC                        page 3

          [p 21]  The /A switch supports the same incremental syntax used
          with /E, i.e. /A+n.  When used in 4DSHELL this allows you to
          guarantee a specified amount of free alias space in secondary
          shells.

          [p 21]  /E:nnnn may also be followed by S (/E:nnnnS) to swap the
          master copy of the environment.  This will save a small amount of
          low memory, but may not be compatible with all applications, and
          will not work with any application that needs to modify the mas-
          ter environment.

          [p 22]  4DOS will normally reduce the space used to swap a sec-
          ondary shell by retrieving static information from the primary
          shell's swap area.  This reduces secondary shell swap size from
          68K or more to about 20K.  This feature will not work if the
          total of your alias, history, and environment sizes in the sec-
          ondary shell is larger than that specified for the primary shell,
          or if the size of DOS memory has been reduced when the secondary
          shell is started (e.g. by a program like DESQView that reserves
          some memory at the top end of DOS memory).  In such cases second-
          ary shells will require a full-size swap area.  The size of the
          swap area is displayed in the "swapping initialized (nnK)" mes-
          sage when 4DOS starts.

   3.01   [p 22]  The default location for disk swap files in secondary
   -->    shells is now in the root directory of the drive specified in the
          COMSPEC environment variable (the drive where 4DOS.COM is
          stored).  If you want disk swap files to go to another drive or
          directory, use the "/S:Bd:\path" or "/S:Dd:\path" settings in the
          4DSHELL environment variable (see page 25 of the manual).  This
          should cut down on swap file clutter, yet leave you with complete
          control over swap file location.  

   3.01   [p 23]  The /U switch requires 386MAX, MOVE-EM 1.02 or above,
          QRAM, or QEMM 5.0 or above.  It may not be compatible with all
          other software products.  See COMPAT.DOC for full details on com-
          patibility.



















   4DOS 3.02  [9-7-90]           UPDATE30.DOC                        page 4


   Features and Usage
   ------------------

   This section discusses changes in 4DOS features and usage which are not
   specific to a particular command and which are not related to installa-
   tion and boot.

      General Features:

          [p 29]  The command history is now automatically passed to sec-
          ondary shells.  It is passed in one direction only, i.e. addi-
          tional commands entered in the secondary shell will not be passed
          back to the primary shell.  To disable this option, place a HIS-
          TORY /F command in your 4START file.

   3.01   4DOS now has better support for non-English characters in file-
          names, environment variables, and aliases.

   3.01   Most of the changes in version 3.0 to allow shareable file access
   -->    on networks have been removed, because some networks and a few
          popular programs (e.g. SHARE and FASTOPEN) couldn't handle them
          properly.  SHARE/LAN support is now provided where possible, but
          is avoided in many places where it has been found to cause trou-
          ble.  This change should eliminate most or all I/O redirection
          problems on networks.

   3.02   Several changes have been made in 4DOS's file handling to elimi-
          nate problems with incomplete redirected output files on Novell
          networks.

   3.01   A number of changes have been made to increase 4DOS's execution
          speed, and reduce its size slightly.  Speed improvements are
          primarily in the areas of file access (particularly .BAT files),
          and environment variable and alias expansion.  They may not be
          noticeable on higher-speed systems.

   3.01   4DOS can now correctly handle text files (.BAT or .BTM files,
          files to be LISTed or TYPEd, etc.) which have CR/LF, CR only, or
          LF only at the end of each line.  Previously not all of these
          line terminators worked correctly.

   3.02   There is a small speedup in description processing for the file
          commands (COPY, DEL, MOVE, and REN).

   3.02   The "?" character in filename wildcards now matches zero or more
   -->    characters like COMMAND.COM instead of one or more like previous
          versions of 4DOS.  Thus "DIR A?." will match both the files "A"
          and "AA"; before it would only match "AA".  This change adjusts
          4DOS to work the way COMMAND.COM works instead of the way
          COMMAND.COM is documented to work.





   4DOS 3.02  [9-7-90]           UPDATE30.DOC                        page 5

      Command Line Editing:

   3.01   [p 28]  You can now enter characters that would normally be in-
          terpreted by the line editor as a command (e.g., Ctrl-D or Ctrl-
          K).  To do so precede the character with an ASCII 255 (hold down
          the ALT key and enter 255 on the numeric keypad, then release the
          ALT key).  To enter the ASCII 255 itself into the line, you must
          enter it twice.

   3.01   The cursor shape will now be changed properly when you hit the
          Ins key to switch editing modes.  Previously if SETDOS specified
          a block cursor in the default mode it would not be changed to an
          underline when Ins was hit.

   3.02   [p 28]  The F3 key now works like COMMAND.COM, so you can type
          part of a line and hit F3 to get the rest of the previous line.


      Aliases:

   3.01   Fixed a bug in alias expansion which occurred when a "%" was the
          last character on the line.


      Batch Files:

   3.01   See the commands section below for information on the new LOADBTM
          command, which allows any batch file to work as a BTM file some
          or all of the time.

   3.01   [p 33-34]  Batch files can now be nested 6 levels deep (the
   -->    previous limit was 4).

   3.02   The ECHO state is now inherited properly when batch files chain. 
          In version 3.01 the echo state was inherited properly on a CALL,
          but not on a chain.


      I/O Redirection:

   -->    [p 43-44]  Redirection is now fully nestable.  For example, in-
          voking a batch file XYZ with "XYZ > OUT.DAT" will redirect all
          output from the batch file to OUT.DAT unless additional redirec-
          tion is encountered within the batch file.

   3.01   4DOS now checks for duplicate redirection (i.e., "DIR > 1.DAT >
          2.DAT").  Previously duplicate redirection could hang the system.

   3.01   The system will no longer hang if a command specifies input redi-
          rection after output redirection.






   4DOS 3.02  [9-7-90]           UPDATE30.DOC                        page 6

      Environment Variables:

   3.01   [p 40]  In order to support subtraction in the new %@EVAL func-
   -->    tion (see below) 4DOS will no longer accept a "-" in the name of
          an environment variable to be expanded, unless the name is en-
          closed in brackets [].

   3.01   [p 41]  Three new internal variables have been added:

                    %_dow          The day of the week as a string (Mon,
                                   Tue, etc.)
                    %_rows         The height of the screen
                    %_columns      The width of the screen

   3.02   [p 41]  One new internal variable has been added:

              %_ndp                Returns:
                                        0 if no coprocessor is installed
                                        87 for an 8087
                                        287 for an 80287
                                        387 for an 80387

          [p 42]  There are a few minor errors or points which are not
          clear in the list of variable functions in some versions of the
          manual:

              * When using variable functions they must be preceded (and
              optionally followed) by a percent sign, like all other envi-
              ronment variables.  For example the "ext" function is refer-
              enced as %@ext[filename] or as %@ext[filename]%.

              * The correct spelling for the string length function is
              "%@len", not "%@length".

              * The %@line function is missing from early copies of the
              manual.  This function returns the nth line of a file.  The
              first line of the file is numbered 0.

              * In the %@substr function, the first character is numbered
              0, and the correct syntax is "%@substr[string,start,length]"
              not "%@substr[string,start,end]".

   3.01   [p 42]  A new function, %@eval, has been added.  The syntax is:

                    %@eval[expression]

          Where "expression" is any arithmetic expression.  The expression
          can include any of the following elements:

              parentheses, which may be nested
              unary + or - operators
              multiplication and division operators:  *, /, and %% (modulo)
              addition and subtraction operators:  + and -
              environment variables, variable functions, and constants


   4DOS 3.02  [9-7-90]           UPDATE30.DOC                        page 7

          The elements of an expression are processed with the precedence
          shown above.  For example, 5*3+2 is treated as (5*3)+2 rather
          than 5*(3+2).  Examples of the use of %@eval are:

              Increment a variable:  set a=%@eval[%a+1]

              Perform environment variable arithmetic:
                    set c=%@eval[(%a*2) + (%@len[%b]-5)*7]

              Evaluate expressions in IF:

                    if %@eval[%@substr[%_time,0,2] %% 12] == 0 echo 12:00!

              Set up a simple command line calculator:

                    alias calc `echo The answer is:  %@eval[%&]`

   3.02   [p 42]  Commas will now be ignored by %@eval.  This will allow
          (for example) %@eval[10,000 * 3] to get the expected result.  It
          will also allow %@eval to work on the output of a command like
          FREE, which contains embedded commas.  Also %@eval will give a
          "Divide by zero" error message if you try to use 0 as a denomina-
          tor for division or modulo calculation; previously it would give
          an error for the modulo, but return the numerator as the result
          for the division.

   3.02   [p 42]  %@substr can now handle quotes around the "string" argu-
          ment.  Double quotes and back quotes are equivalent in this con-
          text, and the quote characters DO count when determining which
          characters are placed in the substring.  This capability allows
          you to get substrings of strings which contain commas.  For exam-
          ple:

                    %@substr["Mon, Aug 27, 1990", 1, 3]

          will return "Mon".  Previously the commas would be seen as argu-
          ment separators, even if they were within a quoted string.

   3.01   [p 42]  Another new function, %@index[string1,string2] returns
          the position of string2 within string1 (string2 can be as small
          as a single character).  The first position in string1 is num-
          bered 0.  If there is no match, the function returns -1.

   3.02   [p 42]  Two new variable functions have been added:

              %@upper[string]      Returns the string converted to upper
                                   case.

              %@lower[string]      Returns the string converted to lower
                                   case.

   3.01   [p 42]  When expanding environment variables 4DOS will display a
          "Variable loop" error if you nest variable functions too deep, or
          define variables which refer back to themselves.


   4DOS 3.02  [9-7-90]           UPDATE30.DOC                        page 8


      Technical Information:

          (All items here go with the technical information on page 149 of
          the manual.)

   3.01   4DOS.COM now closes file handles 5 - 29 when it starts.  This
          should solve problems with programs that pass open file handles
          to a secondary shell.

   3.01   4DOS now generates two different INT 2F calls to allow TSRs to
          tell when 4DOS is back at the prompt.  These calls have AX =
          D44Eh.  The first occurs immediately before displaying the
          prompt, with BX = 0; the second occurs after displaying the
          prompt and immediately before accepting keyboard input, with BX =
          1.  Any routine intercepting these calls should preserve at least
          the SI, DI, BP, SP, DS, ES, and SS registers.

   3.02   Both 4DOS.COM and the 4DOS EXE files now check for version mis-
          match (e.g. trying to use version 3.01a 4DOS.COM with a version
          3.02 EXE file).  Previously this testing was done by 4DOS.COM
          only, so a mismatch could go undetected in some circumstances.

   3.02   Divide by zero handling has been removed from 4DOS, allowing
          standard DOS divide by zero handling to take place.  The 4DOS
          divide by zero handler was not providing any advantage and could
          occasionally fail to recover properly from division errors in
          application programs.

   3.02   Cursor positioning during command line editing will now take
          place in the current video page, rather than assuming page 0. 
          This should fix minor cursor positioning problems with programs
          that shell to DOS with the video adapter set somewhere other than
          page 0 (like Turbo Debugger).

   3.02   Handling of the Abort response to a critical error during a 4DOS
          command has been modified to solve some obscure problems with
          changing floppy disks after Aborting from a disk error.


















   4DOS 3.02  [9-7-90]           UPDATE30.DOC                        page 9


   Commands
   --------

   This section describes the changes made to specific commands.  Note that
   some commands are also affected by the general changes in the "features
   and usage" section above.

   3.01   ALIAS:  ALIAS /R can now read multiple files, for example:

                    alias /r alias1 alias2 alias3

   3.01   [p 57-58]  CD and CDD:  Modified to allow forward slashes (/) in
          path names.

   3.01   [p 62-64]  COPY:  There are several changes:

              Problems with appending files in binary mode have been fixed.

              The way that COPY accesses files has been modified to mini-
              mize or eliminate problems with the MS-DOS APPEND command.

              The /R and /U switches are now ignored if the target is a
              device.

              A ^Z (end of file mark) is now properly added to the target
              file when it is in ASCII mode.

   3.01   [p 66]  DEL:  Speed has been improved somewhat, especially on
          non-cached disks.

   3.01   DESCRIBE:  4DOS description files will no longer get mixed up
          between directories when running reasonably-behaved data pathing
          utilities like DPATH.

   3.02   DESCRIBE:  Problems with missing <cr>s in description files have
          been solved.  These problems did not cause any trouble within
          4DOS, but 3rd-party description editors were confused by them.

   3.01   DIR:  Changed to display directory totals even when the "File not
          found" message is displayed.  Changed the /F and /H switches so
          they don't conflict with each other.

   3.02   DIR:  The time separator character will now be correct when the
          country code is set for outside the US.  Previously it was hard-
          coded as a colon.

   3.02   Problems with occasional "Out of memory" errors and missing
          description displays in DIR have been resolved.  However, if you
          fragment DOS memory (for example by loading two TSRs, then un-
          loading the first but not the second) you can get "Out of memory"
          errors in larger directories as DIR tries to expand the memory it
          is using to store your filenames and descriptions.  If this oc-
          curs, determine the cause of the fragmentation and resolve it. 


   4DOS 3.02  [9-7-90]           UPDATE30.DOC                       page 10

          The primary tool for solving such a problem is a memory mapping
          program like MAPMEM, PMAP, or Manifest.

   3.01   DRAWBOX:  Styles 3 and 4 now work properly.

   3.01   FOR:  Now aborts when a nested batch file CANCELs.  Also, fixed a
          bug that was causing FOR variables to be ignored inside double
          quotes.

   3.01   [p 83]  GLOBAL:  Added a /Q(uiet) switch to disable the display
          of "GLOBAL: pathname".

   3.01   [p 85]  GOTO:  A GOTO inside an IFF statement now cancels all IFF
   -->    parsing, and assumes you've branched completely outside the IFF
          construct.  If you haven't, you will get "Unknown command" errors
          on subsequent ELSE, ELSEIFF, and ENDIFF statements (see examples
          below).  This change was necessary to avoid frequent errors
          caused by GOTOs from inside an IFF block which left IFF parsing
          active.  Also fixed a bug which prevented GOTO from branching to
          the end of the file from within a GOSUB subroutine.

              iff "%1"=="Y"
              :test
                copy file1 a:
                goto done               <--- Legal - branches outside the
              else                           IFF block
                copy file2 b:
                goto test               <--- Illegal - branches within IFF
              endiff                         block
              [do some other work here]
              :done

   3.01   [p 88-90]  IF:  There are several corrections to the description
          in the manual.  Some of these errors are present only in early
          copies of the manual:

              * The DOS memory size option is named DOSMEM, not DOSFREE.

              * The tests which check a numeric value (EMS, DOSMEM, etc.)
              use the same relational operators as the string tests, as
              shown in the examples.  For example, the syntax for EMS
              should read:

                    EMS relop n[K|M]

              where "relop" means EQ, GE, GT, etc.  The "relop" is optional
              for ERRORLEVEL, but required for all other numeric tests.

              * The MONITOR and VIDEO tests also require a relational oper-
              ator (==, EQ, or NE) as described above for numeric tests.

              * The IF ATTRIB test has an additional option:  "N" tests for
              no attributes set (i.e. all of the other attributes are off). 



   4DOS 3.02  [9-7-90]           UPDATE30.DOC                       page 11

              * IF ATTRIB volname V will only work if the volume name re-
              fers to the root directory, and if there is a period after
              the eighth character in volume names of nine characters or
              more (e.g. to test for volume "MYFILES0107" in drive A:, use
              IF ATTRIB A:\MYFILES0.107 V ...).

              * Two tests are missing from some copies of the manual:

                    IF DISKFREE relop n
                         Tests the disk free space on the current drive. 
                         Cannot be used to test other drives.

                    IF FILESIZE filename relop n
                         Tests the size of the specified file.

                    For example:

                         if diskfree gt 40M echo Plenty of room
                         if filesize myfile.dat gt 360K echo It won't fit!

   3.01   [p 88-90]  IF:  String comparisons will now be done numerically
          if both values being compared begin with a digit.  This allows
          you to do true arithmetic tests.  For example:

              set aa=027
              set bb=20
              if %aa gt %bb ...         This test will succeed because it
                                        will compare the numeric values 27
                                        and 20.
              if "%aa" gt "%bb" ...     This test will fail because it will
                                        compare the alphanumeric values
                                        "027" and "20", and the "02" will
                                        appear 'smaller' (alphanumerically)
                                        than "20".

   3.01   IF:  The ATTRIB test for a volume label has been changed to get
          around a bug in DOS, and should now recognize labels correctly.

   3.02   IF and IFF:  The string tests will now work correctly even if the
          string contains an "=" sign (which is one of the IF test charac-
          ters) or a "/" (which is the 4DOS switch character).  Also the
          EMS test now returns the correct value (0) if there is no EMS
          driver present.  In version 3.01 it would return a random value.

   3.01   IFF:  ELSE and ENDIFF will now be recognized properly even if
          they are not followed with whitespace.

   3.01   INPUT:  Fixed a bug with very long variable names and/or input
          text.

   3.01   [p 94]  KEYSTACK:  There are two changes:





   4DOS 3.02  [9-7-90]           UPDATE30.DOC                       page 12

              * KEYSTACK now supports a new symbol, !, to clear keystrokes
              from the typeahead buffer, as well as anything in the
              KEYSTACK buffer.  For example:

                    keystack ! @59

              will clear the typeahead buffer before stacking the @59 (F1)
              keystroke.

              * Some programs will not interpret stacked keystrokes proper-
              ly unless they contain both the correct ASCII value and the
              correct keyboard "scan code".  For example, if you attempt to
              KEYSTACK an "Enter" using ASCII code 13 (carriage return) and
              see a small musical note instead, the program you are running
              probably needs the scan code to interpret the keystroke prop-
              erly.

              KEYSTACK now supports the entry of scan codes for standard
              ASCII keys.  To enter the scan code, multiply it by 256 and
              add it to the ASCII code.  Using the same example, the scan
              code for the Enter key is 28, so the full value for this key
              would be 28*256+13 = 7181.  With some programs you will find
              that KEYSTACK 7181 works when KEYSTACK 13 does not (or vice
              versa).  Experimentation is required to get the correct val-
              ue.  A full discussion and table of scan codes is beyond the
              scope of this document, but is available in many basic PC
              books.

   3.01   [p 95]  LIST:  There are two changes:

   -->        Changed the search and print keys to use letters instead of
              function keys:  F(ind), N(ext), and P(rint).  This avoids
              conflicts when you wish to redefine the function keys for
              other purposes.

              Added a new switch, /H, to strip the high bit of each charac-
              ter, for displaying WordStar documents and other similar
              files.

   3.02   LIST:  The switches now work properly when specified without
          spaces, eg as /WS or /W/S.  Previously they required a space
          (/W /S) to work correctly.

   3.01   [p 96]  LOADBTM:  This is a new command.  It will switch the
          current batch file to and from .BTM mode.  The syntax is:

                    LOADBTM [ON | OFF]

          LOADBTM ON loads the entire file into memory and processes the
          following lines as a .BTM file.  LOADBTM OFF unloads the file
          from memory and processes the following lines one by one like a
          .BAT file.  Both commands can be used regardless of the file's
          original extension.  



   4DOS 3.02  [9-7-90]           UPDATE30.DOC                       page 13

          LOADBTM will allow you to have a single batch file for both
          COMMAND.COM and 4DOS, and select .BTM mode via a statement like:

                    if "%@eval[2+2]" == "4" loadbtm on

          Since the %@eval function does not exist under COMMAND.COM, the
          IF test will fail there and the rest of the line will be ignored. 
          Under 4DOS where %@eval exists, the LOADBTM ON will be executed.

          LOADBTM will also allow you to load TSRs from a .BTM file by
          switching it into .BAT mode, loading the TSRs, and switching back
          to .BTM mode.  However note that, depending on what the file
          does, such mode switching can erase much of the speed gained by
          using a .BTM file in the first place.


   3.01   LOG:  Fixed a problem which caused a ^C to occasionally hang the
          system when LOG was ON.  Also changed LOG to automatically switch
          LOG OFF if it couldn't open the log file.

   3.01   MOVE:  Now returns an "Access denied" error if you try to move
          files to a character device.  Also the way that MOVE accesses
          files has been modified to minimize or eliminate problems with
          the MS-DOS APPEND command.

   3.01   QUIT:  Fixed a bug which kept 4DOS from QUITting within a GOSUB
          subroutine.

   3.01   REM:  Will now be echoed if ECHO is ON.

   3.01   SELECT:  Fixed a bug that was causing SELECT COPY to copy from
          the wrong directory when the argument was a directory name with
          no trailing backslash.

   3.01   SET:  SET /R can now read multiple files, for example:

                    set /r env1 env2 env3

   3.01   SETDOS:  There are two changes:

              /S now resets the cursor shape immediately, so it can be used
              to hide the cursor while in a batch file.

              /U1 should now properly return uppercase filenames in all
              instances.

   3.02   SETDOS:  The COMPOUND character (SETDOS /C) can now be any ASCII
          character except those specified in the manual as not allowed. 
          Previously characters above ASCII 127 would not work as the sepa-
          rator.






   4DOS 3.02  [9-7-90]           UPDATE30.DOC                       page 14


   HELP System
   -----------

   This section describes changes made to the 4DOS HELP system.

      New Capabilities and Topics:

   3.01   There are many corrections and additions to the text, including a
          complete ASCII table.

   3.01   A new "soft pagination" capability enables many commands to be
          displayed completely on one screen if using more than 25 lines,
          but paginates in a logical spot if using a 25-line screen.

   3.01   HELP is now DESQView-aware and should run properly in a less than
          full screen DESQView window.

   3.01   HELP now accepts up to 16 pages per topic and 32 cross-references
          per topic, to allow 4MAKE users to install longer topics inside
          the help file.

   3.02   The text has been modified in many places.  An ANSI table has
          been added along with the APPEND, FASTOPEN, GRAPHICS, KEYB,
          NLSFUNC, RECOVER, and REPLACE commands, and more information on
          HELP itself.  The explanations of JOIN and SUBST are more de-
          tailed.  All resident commands now show their DOS 3.3 resident
          size.  Several minor typographical errors have been corrected.


      Environment Variables and Switches:

   3.02   HELP has two switches which can be set temporarily on the command
          line (in version 3.02), or "permanently" -- until explicitly
          changed -- via the 4HELPC environment variable (see below).  When
          switches are set on the command line they can be placed before or
          after the topic name (if any), so for example these two commands
          are equivalent:

                    help copy /r
                    help /r copy

          The switches are:

   3.02       /BW:  Forces HELP to display all text in monochrome colors,
              to support the use of monochrome monitors attached to color
              video boards (e.g. use of a composite monochrome monitor on a
              CGA system).  If you have such a system you will probably
              want to set the /BW switch permanently as shown under 4HELPC
              below.

   3.01       /R:  Disables dynamic window resizing and forces all text
              screens to be displayed at the full screen height for those
              who prefer an unchanging display window size.


   4DOS 3.02  [9-7-90]           UPDATE30.DOC                       page 15


   3.01   Three new environment variables have been added to give you bet-
          ter control over HELP:

              4HELP:  Specifies the full path and file name for the help
              program to be loaded when F1 is pressed.  If 4HELP is not
              used, 4DOS will look for HELP.EXE in the current directory
              and then on the PATH.  4HELP affects only F1, NOT the HELP
              command; if you need to change how the HELP command works as
              well, use an alias.  

              For example, if your HELP files are in the directory
              D:\4DOS\HELP you will need the following lines in
              AUTOEXEC.BAT:

                    set 4help=d:\4dos\help\help.exe
                    alias help d:\4dos\help\help.exe

              4HELPF:  Specifies the full path and file name for the help
              text file.  If not used, HELP will search for DOS.HLP in the
              directory specified in 4HELP (if any), then in the current
              directory and on the path.

              4HELPC:  Specifies permanent control switches for HELP.EXE. 
              More information on switches is above.  For example, to per-
              manently force HELP into monochrome mode, place the following
              line in AUTOEXEC.BAT:

                    set 4helpc=/bw


      Configuring HELP with HELPCFG:

          The HELPCFG.EXE program, provided with 4DOS, can be used to con-
          figure the help system display colors.  To use it, change to the
          directory HELP.EXE is in, be sure HELPCFG.EXE is in the same
          directory, and enter the command:

                    HELPCFG

          HELPCFG allows you to set the colors for several different por-
          tions of the help display.  Use the vertical arrows to select
          which type of display color you wish to adjust.  Hit <cr> and you
          will be able to move a box in the left-hand window to select the
          color.  Hit <cr> again to select the color, or Esc to return to
          the right hand window without changing the color.  Another Esc
          will save the new colors and return you to DOS.

          If you are using a monochrome monitor on a color system and re-
          quire HELP's /BW switch for proper displays, you may not be able
          to change the monochrome display attributes easily with HELPCFG,
          which does not currently have a /BW switch.  This will be changed
          in a future release of 4DOS.



   4DOS 3.02  [9-7-90]           UPDATE30.DOC                       page 16


```
{% endraw %}

## VENDOR.DOC

{% raw %}
```

                   4DOS Shareware Disk Vendor Documentation

                             Version 3.02, 9/7/90

   Copyright 1989, 1990, J.P. Software.  All Rights Reserved.  Published 
   by J.P. Software, P.O. Box 1470, E. Arlington, MA 02174 USA, (617) 
   646-3975.


   This file provides information for disk vendors on the distribution of
   4DOS.

   Please note that our policy on distribution of 4DOS by disk vendors is
   the same for both commercial vendors and non-profit user group
   libraries.

   As stated in the 4DOS license agreement, we require that you obtain
   written permission from us before placing 4DOS or any part of the 4DOS
   package in any user group or commercial library, unless you have
   been approved by the Association of Shareware Professionals and
   have notified us that you wish to distribute 4DOS.  (See the
   license agreement for more information).

   We would be pleased to work with you in the distribution of our
   product, as disk vendors are an important part of the shareware
   distribution system.  Once we give you permission to distribute 4DOS we
   will send you a copy which is "branded" for your library (when the user
   starts the program it will say "obtained from [your library
   or company name]" in the signon message).  We will also do our
   best to keep you up to date with the latest version.

   Before we can send you a copy of 4DOS and give you permission to
   distribute it we require that you meet one of the following two
   conditions:


   (1) Send us a copy of your standard written materials (catalogs /   
   flyers) which clearly explain the shareware concept, the REQUIREMENT
   that users register products they use, and the fact that the price of
   your disks is a copying fee only and does not constitute payment for the
   product.  The material must also differentiate between shareware and
   public domain software.

   We aren't concerned with what language you use or how concise or de-
   tailed the information is, but it must explain these basic concepts or
   we will not be confident that users are fully informed about what they
   are (and are not) purchasing.

   It is not sufficient to state that you explain these issues to customers
   in person, it must be reflected in your written materials.


   (2) Become an Approved Vendor of the Association of Shareware Profes-
   sionals (ASP).  For more information on the ASP vendor program, contact
   the ASP at:

               Association of Shareware Professionals
               Vendor Certification Committee
               P.O. Box 5786
               Bellevue, WA  98006

   We strongly recommend that you consider becoming an ASP approved
   vendor if you have not already done so.  The ASP vendor program
   reduces the workload for both authors and vendors, and helps give
   customers confidence that reasonable standards are met in the
   distribution of shareware products.


   We are sorry for any inconvenience this policy may cause you, but we
   have found it to be necessary due to widespread confusion in the
   marketplace and the occasionally troublesome practices of some vendors.
   We look forward to working with you in the future, and please feel free
   to contact us if you have any questions or comments on our product or
   our policies.


   You can contact us at any of the addresses below.  Please mail 
   materials to us at the P.O. Box address.

      CompuServe    Mail to 75300,210
      Bix           Bixmail to "trawson"
      BBS           Future Technology, Boston, 617-720-4095
      InterLink     via the 4DOS Conference
      PCRelay       via the 4DOS Conference
      Voice         (617) 646-3975, days Eastern US time
      Fax           (617) 646-0904
      US Mail       J.P. Software
                    P.O. Box 1470
                    E. Arlington, MA 02174, USA


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1773

     Volume in drive A has no label
     Directory of A:\

    INSTALL  BAT      2014   9-07-90   3:02a
    README   1ST      4319   9-07-90   3:02a
    PKUNZIP  EXE     17931   9-07-90   3:02a
    4DOS     ZIP    325006  10-04-90   3:02a
            4 file(s)     349270 bytes
                           11264 bytes free
