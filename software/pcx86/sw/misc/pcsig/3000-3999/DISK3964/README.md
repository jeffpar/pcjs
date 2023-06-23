---
layout: page
title: "PC-SIG Diskette Library (Disk #3964)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3964/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3964"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DOSMAX.DOC

{% raw %}
```

================================================================================
       DOSMAX.EXE :  Ver. 2.1, Copyright (1992,93) by Philip B. Gardner
================================================================================

  DOSMAX.EXE is a device driver which will maximize the use of low memory
  by moving MS-DOS 3.1 and above system data to upper memory blocks provided
  by your upper memory manager.  It is not necessary to use any other
  programs to create upper memory data types like FILES, BUFFERS, FCBS,
  or LASTDRIV from Quarterdeck's QEMM386.  These data types are referred
  to as "sub-segments" in the rest of this document.

  In addition, if you are a DOS 5.0 or above user and are loading DOS high,
  then DOSMAX can prevent DOS from loading into the HMA and move the DOS
  kernel to an upper memory block.  This improves performance and allows
  programs which use the HMA more efficiently to utilize the HMA instead.
  Such programs include Microsoft WINDOWS and Quarterdeck's DESQVIEW.

  Version 2.0 now requires the device driver STOPMAX.SYS to prevent DOS from
  loading into the HMA (see STOPMAX.DOC).  The DOSMAX driver then moves
  the kernel into upper memory at the proper time.

  DOSMAX can also move a portion of COMMAND.COM into an upper memory block
  instead of the HMA.  This feature recovers space in low memory which is
  available when DOS is in the HMA.  Version 2.0 now requires the /C+ switch
  to enable this feature rather than /A0 to disable it.

  Support is automatically provided for Microsoft WINDOWS 3.x so that all
  FILES in your CONFIG.SYS can be loaded high.  Normally this would prevent
  WINDOWS from running, but the problem is circumvented.  Version 2.0 has
  changed the support algorithum significantly, see /W+ option below.

  Support is provided for:

    * moving all DOS's sub-segments types into upper memory
    * moving DOS's SYSTEM block (kernel) into upper memory (STOPMAX installed)
    * supporting WINDOWS start-up even if all FILES= are in upper memory
    * moving a portion of COMMAND.COM into high memory instead of the HMA
    * DOS Versions 3.1 - 3.31, DOS 4.x, DOS 5.x, and DOS 6.x (or better?)

  DOSMAX automatically moves all the data that can be moved dependent only
  upon the availability of upper memory.  It will automatically stop moving
  data when it determines that memory would be fragmented if the move were
  completed.

  Finally, a command line mode is provided to control Windows support, and
  check and report on the status of the high memory area reserved for
  COMMAND.COM.  Version 2.0 moves the Master Environment moving feature
  into a separate program, see ENVIMAX.DOC.

================================================================================

(Requirements)::

        * Requires MS-DOS Version 3.10 or better
        * Now supports DR-DOS 6.0
          
================================================================================

(Installation)::

        (CONFIG.SYS)::

        Installation of DOSMAX.EXE requires modifying the contents of
        your CONFIG.SYS file.

(Generic Configuration)::

        This configuration should work and be the most efficient in 95%
        of all configurations.  For a few real world examples see
        EXAMPLES.DOC
       
        DOS=HIGH[,UMB]                    (DOS 5.x or 6.x only)
        REM DEVICE=STOPMAX.SYS [options]  (Stops kernel from loading in HMA)
        DEVICE=(xms/umb memory manager)
        DEVICE=DOSMAX.EXE [options]       (DOSMAX loads high automatically)
        SHELL=SHELLMAX.COM COMMAND.COM /P
        BUFFERS=20
        FILES=40
        LASTDRIVE=Z

        For DESQView users, it is recommended that the DEVICE=STOPMAX.SYS is
        installed.  This enables DOSMAX's kernel moving feature.

        DOS 5.x and 6.x users should configure DOS to load high into the
        HMA.  The UMB parameter is optional, since both DOS 5.x and 6.x
        upper memory management and XMS upper memory blocks are supported.

        DOS=HIGH[,[UMB][NOUMB]] (Both DOS UMB's and XMS UMB's supported)

        Insert a DEVICE= line for DOSMAX.EXE in your config.sys.  Ver. 1.5
        of DOSMAX recommended that DOSMAX be loaded before the XMS and UMB
        memory manager, but DOSMAX should now be loaded after the XMS manager
        (DOSMAX will automatically load itself high if UMB's are available
        or you may use your memory manager's device loader).  Version 1.7
        provided another way to ensure that the DOS 5.0 or above kernel
        is moved into a UMB by DOSMAX.  The driver STOPMAX.SYS is inserted
        "before" the XMS manager and DOSMAX is inserted "after" the XMS
        manager (see STOPMAX.DOC).

        Version 2.0 now requires that STOPMAX.SYS is used to stop DOS from
        loading into the HMA, support for /B+,/I+ and /V+ have been removed
        from DOSMAX.EXE because these options caused confusion.

        Version 2.0 now requires /C+ to enable the upper memory support
        option for COMMAND.COM.  This option was provided by default in
        earlier versions and was disabled with /A0.  Normally you will
        want to use SHELLMAX.COM to load all of COMMAND.COM into upper
        memory (see SHELLMAX.DOC).  The /A0 option also caused confusion.

        REM DEVICE=STOPMAX.SYS [options]
        DEVICE=(Memory Manager)
        DEVICE=DOSMAX.EXE [/C:+][other options]

        One advantage of using DOSMAX.EXE, is that the STACKS=, BUFFERS=,
        FCBS=, FILES=, and LASTDRIVE= parameters may be configured normally.

        STACKS=9,256            (or =0,0 or default 9,128...etc...)
        BUFFERS=XX[,YY]         (XX = # of buffers, YY = lookahead cache)
        FCBS=XX,YY              (XX = # of FCBS, YY = # of protected FCBS)
        FILES=NN                (NN = # of system files)
        LASTDRIVE=Z             ( Z = Last reserved drive)

        Version 2.0 of DOSMAX now allows INSTALL=, you no longer have to
        remove these statements from your CONFIG.SYS.

        By default, DOSMAX.EXE Version 2.0 will not generate report messages
        for each successful operation or event, unless you enable the report
        with /R+.  You must also use /P+ to pause after this report.  Use
        /R+ and /P+ until you are satisfied with the configuration then
        remove these switches.

        DEVICE=DOSMAX.EXE /R+ /P+ 
        or DEVICE=DOSMAX.EXE /REPORT:+ /PAUSE:+ 

        (AUTOEXEC.BAT)::

        It is not necessary to modify the contents of AUTOEXEC.BAT, but
        since DOS data creators like FILES and BUFFERS are no longer
        required, it is recommended that these lines be removed

        REM BUFFERS=XX          (Remove FILE and BUFFER creator TSR's)
        REM FILES=NN

        (From the Command Line)::

        By default, DOSMAX.EXE, invoked from the command line, will generate
        a message for each successful operation or event.  The display will
        not pause in the command line mode unless the /P+ switch is used.
        After you are satisfied with the configuration and you want to disable
        the REPORT feature, use:

        DOSMAX.EXE /R-
 
        All switch options and possible messages for DOSMAX are detailed
        below:

(Loading DOSMAX High)::

        You may load DOSMAX high with your high memory loader, but DOSMAX
        will load itself high if upper memory is available.  To prevent
        DOSMAX from loading itself high, use /X- or load it before the
        memory manager is installed.

(Moving the DOS kernel into a UMB)::

        DOSMAX to move the DOS 5.0 or above kernel to a UMB, then DOS
        must not be in the HMA when DOSMAX loads.  If you desire to stop
        the kernel from moving into the HMA, then STOPMAX must be loaded
        before the xms/umb memory manager, so that the DOS kernel is not
        high when DOSMAX initializes.  If DOS is already in the HMA (not
        using STOPMAX), then Verision 2.0 now detects this condition and
        low memory is optimized correctly.

================================================================================

(Syntax)::

        The only thing to remember about syntax for the command line is
        that just about anything works.  What this means is that you
        should be able to type in the options on the command line the
        way they make sense to you.

        To illustrate this point, the following command line example
        is mutated several different ways.

        DEVICE=DOSMAX.EXE /H+ /R- /P- /A0
        DEVICE=DOSMAX.EXE -H+ -R- -P- -A0
        DEVICE=DOSMAX.EXE H R- P- A0
        DEVICE=DOSMAX.EXE HR-P-A
        DEVICE=DOSMAX.EXE -H+-R-P-A

        ... and so on.

        DOSMAX 1.9 and above adds optional full word syntax.  The new
        syntax looks like this:

        DEVICE=DOSMAX.EXE /ALLOWHI:+ /REPORT:- /PAUSE:- /AVAIL4A=0
        DEVICE=DOSMAX.EXE -ALLOWHI:+ -REPORT:- -PAUSE:- -AVAIL4A=0
        DEVICE=DOSMAX.EXE ALLOWHI REPORT:- PAUSE:- AVAIL4A=0
        DEVICE=DOSMAX.EXE ALLOWHIREPORT-PAUSE-AVAIL4A
        DEVICE=DOSMAX.EXE -ALLOWHI+-REPORT-PAUSE-AVAIL4A

        Obviously when using full words, it is easier to keep the words
        separated so that is clear to read.  An optional [:] or [=] may be
        used for switches (i.e. ALLOWHI:+ or AVAIL=0).  These optional
        delimiters are used interchangeably and can also be used with the
        single letter switches.  Remember to check your spelling because the
        single letter interface is still intact.

================================================================================

(Switch Options)::

        The following list of switch options is organized by:

         - Control of DOSMAX Reports (/R:/P:/N:)
         - Control of DOSMAX Operation (/M=/H:/L:/A=/S:/U=)
           - Setting the Memory Strategy (/M=)
           - Control the Location of the DOS Kernel (/H:/L:)
           - Control COMMAND.COM Split (/C:/A=)
           - Control EMS Usage (/Q:)
           - Control Sub-Segment Relocation (/S:)
           - Control Stack Interrupts (/U=)
           - Control DOSMAX Automatic UMB installation (/X:)
           - Response file for DOSMAX

  (Control of DOSMAX Reports)::

        (REPORT)::      R[+ or -]        (toggle:  default -)

        Use /R+ or /REPORT:+ to enable the report of additional status
        messages.

        (PAUSE)::       P[+ or -]        (toggle:  default -)

        Use /P+ or /PAUSE:+ to enable a pause after the execution of
        DOSMAX.EXE.

        (NOPAUSE)::     N[+ or -]        (toggle:  default -)

        Use /N+ or /NOPAUSE:+ to never pause after the report, even if
        there are errors.  This switch can be used if your configuration
        generates a warning or error message which you choose to ignore.

  (Control of DOSMAX Operation)::

    (Setting the Memory Strategy)::

        (STRATEGY)::    Mn               (value=  n = 0)   

        Use /Mn or /STRATEGY=n to control the memory allocation strategy
        which DOSMAX uses to allocate upper memory blocks.  The default
        strategy is is First Fit (/M0).  This means that DOSMAX will use the
        first upper memory block returned by the XMS manager.  The other
        available options are Best Fit (/M1) and Last Fit (/M2).  Best Fit
        uses the block which most closely matches the size needed, and
        Last Fit uses the last block big enough to handle the request.
        Values other than 0, 1, or 2 are ignored and the previous setting
        of this option is used.
 
        (SYSFSIZE)::    Fnn              (value=  nn = 59 )

        Use /Fnn or /SYSFSIZE=nn to set the System File Size:  The upper
        limit of nn is 61 in device mode, and 82 in command line mode.
        The lower limit is 40.  Values other than the MS-DOS 4.0 - 6.0
        System File Size of 59 are only allowed if the true MS-DOS version
        is greater than 5.0.  The /Fnn switch is only necessary if DOSMAX
        can't determine the System File Size automatically.

    (Control the Location of the DOS Kernel)::

        (ALLOWHI)::     H[+ or -]        (toggle:  default -)

        Use /H+ or /ALLOWHI:+ to allow DOS to load into the HMA anyway.
        This switch is now obsolete.  DOSMAX now detects the location of
        the kernel and automatically determines the proper setting of this
        switch.  It is for backward-compatability and debugging purposes only.

        (FORCELOW)::    L[+ or -]        (toggle:  default -)

        Use /L+ or /FORCELOW:+ to allocate DOS code block in low memory.
        This switch is now obsolete.  DOSMAX now detects the location of
        the kernel and automatically determines the proper setting of this
        switch.  It is for backward-compatability and debugging purposes only.

    (Control COMMAND.COM Split)::

        (CMDALLOC)::    C[+ or -]        (toggle:  default -)
        
        Use /C:+ or /CMDALLOC:+ to enable the /AVAIL4A=nnnnn parameter and
        the function which splits COMMAND.COM from DOS 5.0 in half.  This
        is for those users who chose not to load COMMAND.COM into a UMB.

        (AVAIL4A)::     Annnnn           (value=  nnnnn = 2080)

        Use /Annnnn or /AVAIL4A=nnnnn to set the number of bytes reserved
        in upper memory for COMMAND.COM and other DOS 5.0 and above programs
        which have the capability of moving a portion of themselves into the
        HMA.  These programs use INT 2Fh Function 4Ah to allocate a fixed
        number of bytes from the HMA.  DOSMAX has the capability of emulating
        this function in high memory.  By default, DOSMAX reserves 2080 bytes,
        which is the space needed to shrink COMMAND.COM.  To reserve more
        memory, increase this value.

        The command line mode of DOSMAX reports the size and allocation
        status of this area.  If the amount allocated or requested is not
        equal to the amount reserved, DOSMAX will report what the proper
        value should be.  Users of replacement shells like 4DOS.COM from
        J.P. Software, should disable this option with /A0.  Disabling the
        option or using the report feature of the command line mode to
        set the exact amount of memory required, is recommended since
        INT 21h 3306h (Get True Ver.), which is also hooked by DOSMAX,
        must return with a bit set which indicates that DOS is in the HMA
        until the amount of memory reserved is completely exhausted.

    (Control EMS Usage)::

        (LOADEMS)::      Q[+ or -]       (toggle:  default -)

        Use /Q:- or /LOADEMS:- to disable the default action of DOSMAX
        which allocates EMS to store the .EXE module until the DOS resources
        are built and ready to move.  DOSMAX will still be able to function,
        but disk compression schemes may cause confusion if DOSMAX.EXE is
        not on both the compressed and uncompressed drives.

    (Control Sub-Segment Relocation)::

        (SKIPSUB)::      S[+ or -]       (toggle:  default -)

        Use /S+ or /SKIPSUB:+ to tell DOSMAX to not move sub-segments
        data types.  The switch is provided mainly for diagnostic purposes,
        but may be useful when not enough high memory is available to
        move both the DOS code block and the sub-segments, or if
        you find this feature does not work in your configuration.

    (Control Stack Interrupts)::

        (UNHOOK)::       Unn             (value=  default none)

        Use /Unn or /UNHOOK=nn to tell DOSMAX that INT nn is to be
        "unhooked" from DOS STACKS when the STACKS are moved high.  This
        switch is useful for controlling which hardware interrupts are
        routed through the DOS STACKS mechanism.  Microsoft's EMM386 may
        cold-boot or lock-up if STACKS are present and moved to high memory,
        CTRL-ALT-DEL is pressed (warm-boot), and INT 09h is hooked by DOS
        STACKS.  The DOSMAX option /U09 maybe used to work-around this
        problem.  The interrupt number is in Hex-Notation and the valid
        values are the hardware interrupts 02, 08, 09, 0A, 0B, 0C, 0D, 0E,
        70, 72, 73, 74, 76, & 77.  Invalid interrupt numbers are ignored.
        Multiple invocations of this switch are permissable.
        
    (Control DOSMAX Automatic UMB installation)::

        (HILOAD)::       X[+ or -]       (toggle:  default +)

        Use /X- to stop DOSMAX.EXE from loading itself high if upper
        memory is available.  This switch is intended for diagnostic
        purposes only, since if you use your memory manager to load
        DOSMAX.EXE high this condition is detected and no second upper
        memory block will be allocated.

  (Response file for DOSMAX)::

        Parameters for DOSMAX may be read from a response file by using the
        @pathname syntax:
        
        DOSMAX.EXE @RESPONSE.FIL
 
        Response files may be commented by using a ";","#",or "*" character
        before the comment.

        There is also a feature implemented for DOS 6.0 config menus.  If a
        menu is configured for DOS 6.0, DOS puts the name of the effective
        section in an environment variable.  This environment variable is
        "CONFIG=."  You may optionally divide the response files into
        sections, identified with the familiar [SECTION] syntax, where
        "SECTION" is the name of the DOS 6.0 menu item selected.

(CONFIG.SYS Line)::

        DEVICE=DOSMAX.EXE [/-][R+P+N+L+H+FnnC+AnnnnMnUnnQ+X-]

        device default: /R-/P-/N-/X+/C-/M1

        *  disable Report status messages
        *  don't Pause after report
        *  Pause on errors or warnings
        *  use the Best Fit memory allocation strategy
        *  Load DOSMAX high if upper memory available

        *  everything in square brackets "[]" is optional

================================================================================

(Report Format)::

   DOSMAX.EXE :  Ver. 2.1, Copyright (1992,93) by Philip B. Gardner
        ERROR :  (Error Messages)
      WARNING :  (Warning Messages)
       ADVICE :  (Advisory Messages)
              :  (Report Messages)
              :  (Allocation Status)
        PAUSE :  Press any key to continue... 

(Report Note)::

        DOSMAX.EXE may be replaced by DOSMAX.SYS or DOSMAX.OVL.  The
        exact name of the module is dependent upon the circumstances
        under which DOSMAX.EXE is executed.  This detail is important
        only as diagnostic information.
        
================================================================================

(Error Messages)::

        MS-DOS version 3.10 or above is required
        DOS version is not compatible
        An 80186 processor or better is required
        Device not found, or version mismatch
        Not enough memory to relocate
        Unable to execute, can't open overlay 
        Unable to execute, not enough memory for overlay 

================================================================================

(Warning Messages)::

        Unknown option on the command line
        Unknown option on line #0000
        Extra characters on command line
        Line length overflow at line #0000
        INT 00h is not pointing into STACKS
        DOS Sub-Segment list is unmoveable
        System File Size not determined or out of range
        Unable to validate System Data area
        Couldn't validate DR-DOS data area
        Couldn't size System File Table
        Couldn't size System FCB Table
        Couldn't trace Buffer Chain
        Couldn't find Lastdrive Array
        Unable to calculate DR-DOS kernel control constants
        Unable to calculate kernel control constants

================================================================================

(Advisory Messages)::

        Set STACKS=0,0 in CONFIG.SYS
        Possible INSTALL= in CONFIG.SYS
        Try using /Fnn switch
        For maximum efficiency use /A00000

================================================================================

(Report Messages)::

        Processing option file XXXXXXXX.XXX
	Effection section is [XXXXXXXX]
        DOS System forced low
        DOS System in HMA
        DOS System not in HMA
        DOS Sub-Segments skipped
        DOS Sub-Segments skipped
        DOS Sub-Segments too small, staying resident
        System File Size set to 00
        Unhooked DOS STACKS INT 00h
        Moved 00000 bytes of DOS data high
        Found 00000 bytes allocated of 00000 bytes
        Freed EMS handle 0

================================================================================

(Allocation Status)::

        SYSTEM   moved to 0000
        Not enough Hi Memory for SYSTEM  
        INSTALL  moved to 0000
        Not enough Hi Memory for INSTALL
        STACKS   moved to 0000
        Not enough Hi Memory for STACKS
        DRDATA   moved to 0000
        Not enough Hi Memory for DRDATA
        LASTDRIV moved to 0000
        Not enough Hi Memory for LASTDRIV
        BUFFERS  moved to 0000
        Not enough Hi Memory for BUFFERS 
        WKBUFFER moved to 0000
        Not enough Hi Memory for WKBUFFER
        FCBS     moved to 0000
        Not enough Hi Memory for FCBS    
        FILES    moved to 0000
        Not enough Hi Memory for FILES   
        COMMAND  memory reserved at 0000
        Not enough Hi Memory for COMMAND
        DOSMAX   located at 0000
        Not enough Hi Memory for DOSMAX  

================================================================================

(Sub-Segment List)::

        The Sub-Segment List is searched from bottom to top for a block
        of moveable sub-segments, then moved in reverse order.

        The following chart attempts to show what can and cannot be moved
        with DOSMAX:

                        Sub-Segment Type                Not Moved  Moved
        ----------------------------------------------- ---------  -----
        "D"        DEVICE DRIVER                            x 
        "E"        DEVICE DRIVER APPENDAGE                  x
        "I"        IFS (Installable File System) DRIVER     x
        "F"        FILES=                                            x
        "X"        FCBS=                                             x
        "C"        BUFFERS /X Option (EMS workspace area)            x
        "B"        BUFFERS=                                          x
        "L"        LASTDRIVE=                                        x
        "S"        STACKS=                                           x
        "T"        INSTALL=                                          x

================================================================================

(Changes)::

    (Version 1.1)::

    (1) Fixed problem not cleaning up properly, when DOS goes to HMA
        anyway, (only /V+ switch, and some XMS Managers).

    (2) Fixed problem that occurred if no XMS UMB's available, and DOS 5
        UMB's tried, and if no DOS UMB's available either (not just not
        enough), memory was allocated from low memory, even though
        allocation strategy was set to try UMB's only.  Made sure UMB
        Link state was set properly.

    (3) Added support for DOS Versions 3.10 - 3.31 and DOS Version 4.x

    (4) Improved File Size determination algorithum

    (Version 1.2)::

    (1) Improved detection of DOS=LOW, and reduced the possibility of
        an errant "Should be the first DEVICE= in CONFIG.SYS" message.

    (Version 1.3)::

    (1) Added support for INT 2Fh, Function 4Ah, so that COMMAND.COM
        (and others??) can move a portion of their code to high memory
        too.  For COMMAND.COM users with DOS 5.0, this saves 2.1k of
        low memory.  Added the /Annnn switch to support this feature,
        plus an allocation status check for the command line mode.
        4DOS users should disable this feature with option /A0.

    (Version 1.4)::

    (1) Added capability to find and move the master environment for
        COMMAND.COM users.  Also implemented a special test mode with
        the /T+ option, which verifies that the master environment
        has been found and that it is moveable.  This test mode should
        only be necessary for diagnostic purposes.

    (Version 1.5)::

    (1) Added base 10 number display for /A parameter and changed
        System File Size message to base 10.

    (Version 1.6)::

    (1) Added /Mn option, to allow general control of memory allocation
        strategy.  First Fit = 0, Best Fit = 1, and Last Fit = 2 were
        implemented for both DOS 5 UMB's, and XMS UMB's.

    (2) Added check for a 186 processor or better (allows V20/V30).

    (3) DOSMAX will now move STACKS, so setting STACKS=0,0 is not
        necessary.  In most cases though, STACKS=0,0 is still a good
        idea.  Windows 3.1 supposed requirement for STACKS=9,256 is
        not really necessary in most cases.

    (4) Removed the check for an XMS manager and a check for extended
        memory.  This allows machines without extended memory to use
        UMB providers, which do not require extended memory, with DOSMAX.
        These checks were redundant since if DOS is in the HMA when
        DOSMAX loads, the message "DOS is HIGH already" is reported.
        It is still possible to use DOSMAX, but the /H switch must be
        used if DOS is HIGH first.

    (5) Added /I option which inhibits HIMEM.SYS from loading DOS HIGH.
        This switch is not very useful if HIMEM.SYS is not loaded high,
        since HIMEM will be about 30k in size.  This switch is intended
        for users who load HIMEM high after their UMB provider is installed.

    (6) Changed default WINDOWS high file support method to a new method
        which uses 2 system file handles, but no low memory, so it works
        when DOSMAX is loaded high.  The new method may be disabled with
        /Y-, or /W+ (/W+ enables the old method since it was proven to work
        and the code was already written).  The new method cannot be
        enabled or disabled from the command line.

    (7) Now supporting separate program DOSM86.EXE.  This program is 
        functionally identical to DOSMAX.EXE, but is compiled to work
        on 8086/8088 processors also.  I have learned that there are
        8086/8088 machines which can be configured with High Memory
        using some High Memory Managers, and this variation will make
        it possible for those users to put DOS in a UMB even though
        there is no HMA.  DOSM86.EXE requires 32 more bytes of memory.

    (8) Fixed high loading so it really works...Also added an automatic
        move to high memory of DOSMAX, if UMB's are available via DOS
        or the XMS manager.  If there is some reason you don't want
        DOSMAX loaded high when loaded after UMB's are available then
        use /X- to stop it.  If DOSMAX is high, then it takes 272 bytes,
        because extra code was needed to securely find and identify
        the DOSMAX stub in memory.

    (9) Fixed a problem which hung DOSMAX after loading high if DOS was
        not in the HMA yet and /V+ switch not used.
        
   (10) Changed order of first 5 handles in new windows support, and
        enhanced error checking to only warn when support will not
        work.  The new order maintains the AUX CON order and seems 
        more compatible.

   (11) Added routine to stop "Incompatible DOS" message if loaded high
        with a "device loader."  DOSMAX will now load high with a
        device loader like LOADHI.SYS or HIGHDRVR.SYS

   (12) Try DOS high memory allocation even if NO XMS manager present.
        This was necessary for PC's which don't have extended memory,
        and don't even load an XMS manager (UMB_DRVR creates DOS high
        memory and disappears).

   (13) Fixed DOSMAX not running second time if loaded high with LOADHI.

   (14) Fixed DOSMAX not moving anything high (sometimes) if loaded
        high by any device loader.  I broke this in fix (13).

   (15) Added /B+ option which will stop DOS from going to the HMA by
        patching the DOS initilization code in memory.  This method
        works no matter which memory manager is in use or how it is
        configured.  It also requires no resident memory.

    (Version 1.7)::

    (1) Added /Unn option to tell DOSMAX to unhook hardware INT nn from
        DOS STACKS if the STACKS are present and moved.  At the time
        which DOSMAX moves the STACKS it is safe to restore the interrupt
        to the pre-STACKS value.  This switch was added as a work-around
        to a warm-reboot problem in EMM386.EXE when STACKS are high.  To
        fix the warm-reboot problem use /U09.  The value is in Hex-Notation.

    (2) Fixed DOSMAX not removing remnants of the sub-segments low when
        the size of the DOS data area should have been 0.  This occurred
        when using a memory manager with no code low, no drivers low, and
        DOS in a UMB.  Changed method of recording sub-segment movement.

    (3) Removed DOS Version 3.x use of new windows method, it worked, but
        wasn't completely compatible.  Use FW3.BAT instead if your version
        of DOS is higher then 3.31 (rare).

    (4) Move master environment function now sets the MCB owner of the new,
        high environment back the primary shell.  This corrects a minor
        incompatiblity.

    (Version 1.8)::

    (1) Added specific support for 386MAX.  The high sub-segments and other
        DOSMAX managed data are now labeled using a method which automatically
        detects and adjusts to 386MAX's method of UMB management.

    (Version 1.9)::

    (1)  Reorganized code to enable an overlay method of module selection
         to automate processor selection and split up .SYS and .EXE modules
         to reduce the initialization memory to minimum.

    (2)  DOSMAX now automatically detects the processor type and chooses
         separate code modules if appropriate.  The 186 processor require-
         ment of previous versions is no longer applicable.

    (3)  Added optional full word syntax to argument parser.  The old style
         single letter switch interface is still intact.  The switch lists
         now show the optional word with the switch.

    (4)  Corrected problem with DOS 3.1 - 3.3 files which failed for some file
         settings (i.e. FILES=20 failed).

    (5)  DOSMAX updated for DOS 6.0.  Corrected a coding error while moving
         buffers.

    (6)  Changed default setting of /E switch.  To move the master environment
         high from the command line or AUTOEXEC, now use /E+.

    (Version 2.0)::

    (1)  Added support for INSTALL=, it is no longer necessary to remove
         INSTALL= from the CONFIG.SYS.

    (2)  Removed /B+,/V+, and /I+ options.  You must now use STOPMAX.SYS to
         prevent DOS from moving into the HMA.  The parameters were causing
         confusion.

    (3)  /H and /L are no longer necessary and you can use DOS=HIGH or DOS=LOW
         as you deem necessary.

    (4)  Added /C+ switch to enable the COMMAND.COM split feature.  For most
         users, /A0 was forgotten and only caused unecessary "Packed file
         corrupt" messages and wasted space.  You may still use this feature,
         but you must first enable it with /C+, since the default is now off.

    (5)  Moved /E+,/MASTERENV:+ into ENVIMAX.COM.  The triple mode of DOSMAX
         confused people and many just didn't realize that DOSMAX could be
         put into AUTOEXEC.BAT to move the master environment.

    (6)  Changed the Windows support method once again.  The /Y is gone (the
         old high file support method) and /W+ now works from both the .SYS
         and .EXE command lines.  This new method uses 256 bytes at 60:0 and
         if this is a conflict, you must use FW4-6.BAT and FW3.BAT after
         disabling the support with /W-.

    (7)  Added support for DRDOS 6.0.  See EXAMPLES.DOC.

    (8)  Added feature which preloads the .EXE portion of the DOSMAX into
         EMS and improves ease of configuration for STACKER/SSTOR users.
         Most of the time it is not necessary to duplicate DOSMAX.EXE on
         both the compressed and uncompressed drives (unless EMS 4.0 is not
         present).

    (9)  Added support for loading self high when DOS=UMB is configured

   (10)  Added option response file input with @filename.opt syntax

    (Version 2.1)::

    (1)  Fixed problem with finding DOS 6.0 CONFIG variable for machines
         whose bios'es don't intialize memory properly.

================================================================================
```
{% endraw %}

## ENVIMAX.DOC

{% raw %}
```

================================================================================
      ENVIMAX.COM :  Ver. 2.1, Copyright (1992,93) by Philip B. Gardner
================================================================================

  ENVIMAX.COM is the "move master environment" function split from earlier
  versions of DOSMAX.  Its function is to move the Master Environment of
  COMMAND.COM into upper memory.

  ENVIMAX does not support other shells like 4DOS/NDOS which move their own
  environments to upper memory.

  Support is provided for:

    * moving COMMAND.COM's master environment into upper memory
    * DOS Versions 3.1 - 3.31, DOS 4.x, DOS 5.x, and DOS 6.x

================================================================================

(Requirements)::

        * Requires MS-DOS Version 3.10 or better

================================================================================

(Installation)::

        Install ENVIMAX.COM in your AUTOEXEC.BAT.  I recommend that ENVIMAX
        is the first program run in the AUTOEXEC.BAT

================================================================================

(Syntax)::

        The only thing to remember about syntax for the command line is
        that just about anything works.  What this means is that you
        should be able to type in the options on the command line the
        way they make sense to you.

        To illustrate this point, the following command line example
        is mutated several different ways.

        ENVIMAX.COM /E+
        ENVIMAX.COM E+
        ENVIMAX.COM E
        ENVIMAX.COM -E

        ENVIMAX 2.0 and above adds optional full word syntax.  The new
        syntax looks like this:

        ENVIMAX.COM /MASTERENV:+
        ENVIMAX.COM MASTERENV:+
        ENVIMAX.COM MASTERENV
        ENVIMAX.COM -MASTERENV:+

        Obviously when using full words, it is easier to keep the words
        separated so that is clear to read.  An optional [:] or [=] may be
        used for switches (i.e. REPORT:+ or REPORT=+).  These optional
        delimiters are used interchangeably and can also be used with the
        single letter switches.  Remember to check your spelling because
        the single letter interface is still intact.

(Switch Options)::

        The following list of switch options is organized by:

        - Control of ENVIMAX Reports (/R:/P:/N:)
        - Control of ENVIMAX Operation (/E:)
        - Response file for ENVIMAX (@)

  (Control of ENVIMAX Reports)::

        (REPORT)::      R[+ or -]        (toggle:  default +)

        Use /R- or /REPORT:- to disable the report after you are
        satisfied with the configuration of DOSMAX.EXE

        (PAUSE)::       P[+ or -]        (toggle:  default +)

        Use /P- or /PAUSE:- to disable the pause after the report as
        long as there are no errors or warnings.

        (NOPAUSE)::     N[+ or -]        (toggle:  default -)

        Use /N+ or /NOPAUSE:+ to never pause after the report, even if
        there are errors.  This switch can be used if your configuration
        generates a warning or error message which you choose to ignore.

  (Control of ENVIMAX Operation)::

        (MASTERENV)::    E[+ or -]       (toggle:  default +)     

        Use /E- or /MASTERENV:- to disable locating and moving the master
        environment to upper memory.  This switch is for diagnostic purposes
        only.

  (Response file for ENVIMAX)::

        Parameters for ENVIMAX may be read from a response file by using the
        @pathname syntax:
        
        ENVIMAX.COM @RESPONSE.FIL
 
        Response files may be commented by using a ";","#",or "*" character
        before the comment.

        There is also a feature implemented for DOS 6.0 config menus.  If a
        menu is configured for DOS 6.0, DOS puts the name of the effective
        section in an environment variable.  This environment variable is
        "CONFIG=."  You may optionally divide the response files into
        sections, identified with the familiar [SECTION] syntax, where
        "SECTION" is the name of the DOS 6.0 menu item selected.

        *  everything in square brackets "[]" is optional

================================================================================

(Report Format)::

       ENVIMAX.COM :  Ver. 2.1, Copyright (1992) by Philip B. Gardner
             ERROR :  (Error Messages)
           WARNING :  (Warning Messages)
            ADVICE :  (Advisory Messages)
                   :  (Report Messages)
                   :  (Allocation Status)
             PAUSE :  Press any key to continue... 

================================================================================

(Error Messages)::

        MS-DOS version 3.10 or above is required

================================================================================

(Warning Messages)::

        Unknown option in command line
        Unknown option on line #0000
        Extra characters on command line
        Missing or invalid option file XXXXXXXX.XXX
        Line length overflow at line #0000
        Master Environment is not moveable

================================================================================

(Advisory Messages)::

================================================================================

(Report Messages)::

        Processing option file XXXXXXXX.XXX
	Effection section is [XXXXXXXX]
        Master Environment located at 0000

================================================================================

(Allocation Status)::

        MASTRENV moved to 0000
        Not enough Hi Memory for MASTRENV  

================================================================================

(Changes)::

    (Version 2.1)::

    (1)  Fixed problem with finding DOS 6.0 CONFIG variable for machines
         whose bios'es don't intialize memory properly.

================================================================================
```
{% endraw %}

## EXAMPLES.DOC

{% raw %}
```

================================================================================
         DOSMAX.EXE :  Ver. 2.1, Copyright (1992,93) by Philip B. Gardner
        STOPMAX.SYS :  Ver. 2.1, Copyright (1992,93) by Philip B. Gardner
       FREELOAD.SYS :  Ver. 2.1, Copyright (1992,93) by Philip B. Gardner
       SHELLMAX.COM :  Ver. 2.1, Copyright (1992,93) by Philip B. Gardner
        ENVIMAX.COM :  Ver. 2.1, Copyright (1992,93) by Philip B. Gardner
================================================================================

EXAMPLE CONFIGURATIONS:

If you have a configuration that is significantly different, perhaps a
different memory manager or special switches that are used, please send
me a copy and I will include it in this file.

If you have problems, check out GENERIC at the end of this file.

;------------ QEMM386 ----------------------------------------------------------

(CONFIG)::

dos=high,noumb
stacks=0,0
REM=default /B+ requires no resident memory
device=stopmax.sys
device=c:\qemm\qemm386.sys ram rom i=b000-b7ff i=cc00-f7ff fr=e800
REM=no report, no pause, (default is now /c:- or effectively /a0)
REM=or loaded high with loadhi
device=c:\boot\dosmax.exe /r-/p-
REM=s for shrink
device=c:\boot\freeload.sys /s
device=c:\qemm\loadhi.sys /r:1 c:\mouse\mouse.sys
shell=shellmax.com /r- c:\dos\command.com c:\dos /e:768 /p
REM=use /S+ option to create a 256 byte low stub (networks? enviroment editors?)
REM=shell=c:\boot\shellmax.com /r- c:\dos\command.com c:\dos /e:768 /p
buffers=20
files=40 
lastdrive=Z  

(AUTOEXEC)::

REM moves master environment
c:\boot\envimax.com

;------------ QEMM386 + 4DOS ---------------------------------------------------

(CONFIG)::

dos=high,noumb
stacks=0,0
REM=default /B+ requires no resident memory
device=stopmax.sys
device=d:\qemm\qemm386.sys r:2 ns nv ram rom i=0400-0fff st:m fr=c000
REM=a0 for 4DOS, no report, no pause
device=c:\boot\dosmax.exe /r-/p-
REM=m1 for best fit, f to change pathname of loader, s for shrink
device=c:\boot\freeload.sys /m1 /fd:\qemm\loadhi.sys /s
REM=disable windows support
device=d:\qemm\loadhi.sys /r:1 c:\mouse\mouse.sys
device=d:\qemm\loadhi.sys /r:2 c:\boot\hyper386.exe c:2048:1024 s ox
REM=path parameter to 4DOS may be required to initialize properly
shell=shellmax.com /s- c:\4dos\4dos.com c:\4dos /p
REM=if the /S+ option is required (networks? enviroment editors?)
REM=then using shellmax with 4dos is pointless
REM=shell=c:\4dos\4dos.com c:\4dos /p
buffers=5,4
files=40 
lastdrive=Z  

(AUTOEXEC)::

REM not necessary at all, but no harm, /E- switch avoids environment warning
c:\boot\envimax.com /E-

;------------ 386MAX ------------------------------------------------------

(CONFIG)::

dos=high,noumb
stacks=0,0
REM=default /B+ requires no resident memory
device=stopmax.sys
device=f:\386max\386max.sys pro=c:\386max\386max.pro
REM=default loader name is c:\386max\386load.sys
REM=use /F option if necessary
REM=device=c:\boot\freeload.sys /sd:\386max\386load.sys
device=c:\boot\freeload.sys /s
REM=a0 for SHELLMAX, m1 for best fit, no report, no pause
device=f:\386max\386load.sys prgreg=2 flexframe prog=c:\boot\dosmax.exe a0m1r-p-
device=f:\386max\386load.sys prgreg=2 flexframe prog=c:\mouse\mouse.sys
shell=c:\boot\shellmax.com /s c:\dos5\command.com c:\dos5 /e:768 /p
REM=use /S+ option to create a 256 byte low stub (networks? enviroment editors?)
REM=shell=c:\boot\shellmax.com /r-/s+ c:\dos\command.com c:\dos /e:768 /p
REM=only a few buffers required if a disk cache is loaded in autoexec
buffers=5
files=35 
lastdrive=Z

(AUTOEXEC)::

REM moves master environment
c:\boot\envimax.com /e+

;------------ 386MAX + 4DOS -----------------------------------------------

(CONFIG)::

dos=high,noumb
stacks=0,0
REM=default /B+ requires no resident memory
device=stopmax.sys
device=f:\386max\386max.sys pro=c:\386max\386max.pro
REM=default loader name is c:\386max\386load.sys
REM=use /F option if necessary
REM=device=c:\boot\freeload.sys /sd:\386max\386load.sys
device=c:\boot\freeload.sys /s
REM=a0 for 4DOS, m1 for best fit, no report, no pause
device=f:\386max\386load.sys prgreg=2 flexframe prog=c:\boot\dosmax.exe a0m1r-p-
device=f:\386max\386load.sys prgreg=2 flexframe prog=c:\mouse\mouse.sys
REM=probably not enough high memory to use shellmax with 4DOS
shell=c:\4dos\4dos.com c:\4dos /e:768 /p
REM=only a few buffers required if a disk cache is loaded in autoexec
buffers=5
files=35 
lastdrive=Z

(AUTOEXEC)::

REM not necessary at all, but no harm, /E- switch avoids environment warning
c:\boot\envimax.com /e-

;------------ LASTBYTE ---------------------------------------------------------

(CONFIG)::

dos=high,noumb
stacks=9,256
REM=alternative to dosmax /i+ switch, use stopmax.sys
REM=device=stopmax.sys
REM physical=(CHIPSET or fixed)
device=c:\tlbmm\lastbyte.sys ? physical=fixed
REM=i to force DOS to UMB even with HIMEM, m1 for best fit, no report, no pause
REM=a0 since shellmax is used
device=c:\tlbmm\highdrvr.sys c:\boot\dosmax.exe /a0/i+/m1/r-p-
REM=himem.sys cannot be loaded after highumm.sys
device=c:\tlbmm\highdrvr.sys c:\dos\himem.sys
REM=must load highumm.sys for DOSMAX (/replace is for himem.sys)
device=c:\tlbmm\highumm.sys /replace
device=c:\tlbmm\highdrvr.sys c:\mouse\mouse.sys
shell=c:\boot\shellmax.com /r- c:\dos\command.com c:\dos /e:512 /p
REM=use /S+ option to create a 256 byte low stub (networks? enviroment editors?)
REM=shell=c:\boot\shellmax.com /r-/s+ c:\dos\command.com c:\dos /e:768 /p
buffers=20
files=40 
lastdrive=Z  

(AUTOEXEC)::

REM moves master environment, reports on COMMAND space
c:\boot\envimax.com

;------------ UMB_DRVR ---------------------------------------------------------

(CONFIG)::

dos=high,umb
stacks=9,256
REM=alternative to dosmax /i+ switch, use stopmax.sys
REM=device=stopmax.sys
device=c:\umb_drvr\umb_drvr.sys
REM=i to force DOS to UMB even with HIMEM, m1 for best fit, no report, no pause
devicehigh=c:\boot\dosmax.exe /i+/m1/r-p-
devicehigh=c:\dos\himem.sys
devicehigh=c:\mouse\mouse.sys
shell=shellmax.com /r- c:\dos\command.com c:\dos /e:512 /p
buffers=20
files=40 
lastdrive=Z  

(AUTOEXEC)::

REM moves master environment, reports on COMMAND space
c:\boot\envimax.com

;------------ UMB_DRVR + 4DOS + NO HIMEM (no Extended Memory) ------------------

(CONFIG)::

dos=high,umb
stacks=9,256
device=c:\umb_drvr\umb_drvr.sys
REM=i to force DOS to UMB even with HIMEM, m1 for best fit, no report, no pause
devicehigh=c:\boot\dosmax.exe /a0/m1/r-p-
devicehigh=c:\mouse\mouse.sys
REM=probably not enough high memory to use shellmax with 4DOS
shell=c:\4dos\4dos.com c:\4dos /p
buffers=20
files=40 
lastdrive=Z  

(AUTOEXEC)::

REM not necessary at all, but no harm, /E- switch avoids environment warning
c:\boot\envimax.com /E-

;------------ DOS 5.0 ----------------------------------------------------------

(CONFIG)::

dos=high,umb
stacks=0,0
REM=stacks=9,256
REM=if you really want DOS in UMB, use stopmax
REM=but it will cost you 30k for HIMEM (try alternate XMS driver like QEXT.SYS)
REM=device=stopmax.sys
device=c:\dos\himem.sys
device=c:\dos\emm386.exe ram 4096 i=b000-b7ff i=cc00-f7ff frame=cc00 b=1000
REM=h because DOS goes to HMA, m1 for best fit, no report, no pause
REM=no a0 necessary since DOS (and part of command.com is in the HMA)
devicehigh=c:\boot\dosmax.exe /h/m1/r-/p-
REM=if stacks=0,0 is not used, you may need to add /U9 to dosmax.exe line
REM=this is a workaround for a emm386.exe warm-reboot problem
devicehigh=c:\boot\dosmax.exe /h/m1/r-/p-/u9
devicehigh=c:\dos\smartdrv.sys 1024 512
devicehigh=c:\mouse\mouse.sys
shell=shellmax.com /r- c:\dos\command.com c:\dos /e:768 /p
buffers=5
files=40
lastdrive=Z

(AUTOEXEC)::

REM moves master environment, reports on COMMAND space (if no /A0)
c:\boot\envimax.com

;------------ QEMM386 + DOS 4.01 -----------------------------------------------

(CONFIG)::

stacks=9,256
REM=stopmax.sys not necessary
device=c:\qemm\qemm386.sys ram rom i=b000-b7ff i=cc00-f7ff fr=e800
REM=m1 for best fit, no report, no pause
device=c:\qemm\loadhi.sys /r:1 c:\boot\dosmax.exe m1r-p-
REM=or let DOSMAX load itself high
REM=device=c:\boot\dosmax.exe m1r-p-
REM=s for shrink
device=c:\boot\freeload.sys s
device=c:\qemm\loadhi.sys /r:1 c:\mouse\mouse.sys
shell=shellmax.com c:\dos\command.com c:\dos /e:768 /p
REM=buffers low
buffers=20
REM=or use buffers in EMS
REM=buffers=20 /x
files=40
lastdrive=Z

(AUTOEXEC)::

REM moves master environment
c:\boot\envimax.com

;------------ QEMM386 + DOS 3.30 -----------------------------------------------

(CONFIG)::
(NOTE:  REM really not allowed, just shown for clarity)

stacks=9,256
REM=stopmax.sys not necessary
device=c:\qemm\qemm386.sys ram rom i=b000-b7ff i=cc00-f7ff fr=e800
REM=m1 for best fit, no report, no pause
device=c:\qemm\loadhi.sys /r:1 c:\boot\dosmax.exe m1r-p-
REM=or let DOSMAX load itself high
REM=device=c:\boot\dosmax.exe m1r-p-
REM=s for shrink
device=c:\boot\freeload.sys s
device=c:\qemm\loadhi.sys /r:1 c:\mouse\mouse.sys
shell=shellmax.com c:\dos\command.com c:\dos /e:768 /p
buffers=20
files=40
lastdrive=Z

(AUTOEXEC)::

REM moves master environment
c:\boot\envimax.com

;------------ EMM386 + DR-DOS 6.0 ---------------------------------------------

device=c:\drdos\emm386.sys /f=e800 /k=7168 /b=ffff /i=b000-b7ff,f000-f7ff /r=c000-cbff,f800-ffff
rem For kernel in HMA, use hidos.sys /bdos=ffff
rem For kernel in a UMB, don't use hidos.sys or hidos.sys /bdos=AUTO
rem device=c:\drdos\hidos.sys /bdos=ffff
rem your choice hidevice= or device=
rem hidevice=c:\uboot\dosmax.exe /r- /p-
device=c:\uboot\dosmax.exe /r- /p-
hidevice=c:\windows\mouse.sys /y
country=001,,c:\drdos\country.sys
rem your choice shell=c:\shellmax.com or shell=c:\drdos\command.com
rem shellmax.com saves 256 bytes or shellmax.com /s- saves 512 bytes
shell=c:\shellmax.com c:\drdos\command.com c:\drdos\ /p /e:512
rem your choice history=off or history=on,???,etc...
rem history=off
history=on, 256, off, off, off
break=off
rem your choice hibuffers= or buffers=
rem hibuffers=20
buffers=20
files=35
fcbs=8,4
rem your choice fastopen=0 or fastopen=???
rem fastopen=512
fastopen=0
lastdrive=z
rem your choice hidos=on or hidos=off
rem hidos=on
hidos=off
rem no install= or hiinstall=
rem install=????

;------------ QEMM386 + DR-DOS 6.0 ---------------------------------------------

device=c:\qemm\qemm386.sys r:2 ns nv ram rom ha=64 ma=16 dma=128 i=0400-0fff st:m fr=c000
rem For kernel in HMA, use hidos.sys /bdos=ffff
rem For kernel in a UMB, don't use hidos.sys or hidos.sys /bdos=AUTO
rem device=c:\drdos\hidos.sys /bdos=ffff
device=c:\uboot\dosmax.exe /r- /p-
hidevice=c:\windows\mouse.sys /y
country=001,,c:\drdos\country.sys
shell=c:\shellmax.com c:\drdos\command.com c:\drdos\ /p /e:512
rem your choice history=off or history=on,???,etc...
rem history=off
history=on, 256, off, off, off
break=off
rem your choice hibuffers= or buffers=
rem hibuffers=20
buffers=20
files=35
fcbs=8,4
rem your choice fastopen=0 or fastopen=???
rem fastopen=512
fastopen=0
lastdrive=z
rem your choice hidos=on or hidos=off
rem hidos=on
hidos=off
rem no install= or hiinstall=
rem install=????

(AUTOEXEC)::

REM moves master environment
c:\boot\envimax.com

;------------ GENERIC ----------------------------------------------------------

; fully configured
; 36K DOS 5.0 kernel in UMB, subs moved, shellmax loading primary shell high

device=stopmax.sys
device=memmgr.sys
device=freeload.sys /s
device=dosmax.exe /a0
shell=shellmax.com c:\command.com c:\ /e:256 /p

; problem 1:  not enough hi mem for drivers, subs, tsr's and DOS 5.0 kernel
; solution 1:  saves 36K+ in hi mem by allowing DOS the HMA, still moves subs

rem=no stopmax.sys
device=memmgr.sys
device=freeload.sys /s
rem=add /h+, remove /a0
device=dosmax.exe /h+
rem=no shellmax.com
shell=c:\command.com c:\ /e:256 /p

; problem 2:  Network hangs when loaded, or env editor can't find master env
; solution 2:  create fake stub in low memory

device=stopmax.sys
device=memmgr.sys
device=freeload.sys /s
device=dosmax.exe /a0
rem=add /s+
shell=shellmax.com /s+ c:\command.com c:\ /e:256 /p

; problem 3:  CTRL-ALT-DEL to reboot crashes
; solution 3:  use stacks=0,0 or unhook int 09h from stacks

rem=no stacks
stacks=0,0
device=stopmax.sys
device=memmgr.sys
device=freeload.sys /s
rem=or add /u9
device=dosmax.exe /u9
shell=shellmax.com c:\command.com c:\ /e:256 /p

; problem 4:  SHELLMAX reports "unable to load high, loading low"
; solution 4:  don't use shellmax (or see solution 1)

device=stopmax.sys
device=memmgr.sys
device=freeload.sys /s
rem=remove /a0
device=dosmax.exe
rem=no shellmax
shell=c:\command.com c:\ /e:256 /p

; problem 5:  freeload seems to have no effect
; solution 5:  set /f parameter of freeload and use full pathname to loader

device=stopmax.sys
device=memmgr.sys
rem=set /f parameter
device=freeload.sys /s /fc:\mem\hiloader.sys
rem=use full pathname to loader
device=c:\mem\hiloader.sys general.sys
device=dosmax.exe /a0
shell=shellmax.com c:\command.com c:\ /e:256 /p

; problem 6:  A specific driver fails with freeload
; solution 6:  load driver before freeload, or duplicate loader in another path

device=stopmax.sys
device=memmgr.sys
rem=load before freeload
device=c:\mem\hiloader.sys specific.sys
device=freeload.sys /s /fc:\mem\hiloader.sys
rem=or duplicate loader in another path
rem=device=d:\mem\hiloader.sys specific.sys
device=dosmax.exe /a0
shell=shellmax.com c:\command.com c:\ /e:256 /p

```
{% endraw %}

## FREELOAD.DOC

{% raw %}
```

================================================================================
      FREELOAD.SYS :  Ver. 2.1, Copyright (1992,93) by Philip B. Gardner
================================================================================

  FREELOAD.SYS is a device driver which will help maximize the use of low
  memory by releasing memory usually reserved in low memory by LOADHI.SYS
  from Quarterdeck Office Systems. 

  FREELOAD.SYS tracks the high memory device loader operations and if it
  is safe to release the low memory after each device initiates, the low
  memory is released and the driver in upper memory is linked into the DOS
  device chain.

  FREELOAD.SYS can be used to save 1-2k in a typical configuration.  The
  actual amount of memory saved depends upon on the number and type of
  device drivers loaded high.

  Support is provided for:

    * fully automatic support of QEMM's LOADHI.SYS and 386MAX's 386LOAD.SYS
    * specifying the name and path of the device loader
    * both character and block devices
    * character drivers which contain an unlimited number of devices
    * DOS Versions 3.1 - 3.31, DOS 4.x, and DOS 5.x (or better?)

================================================================================

(Requirements)::

        * Requires MS-DOS Version 3.10 or better

================================================================================

(Installation)::

        (CONFIG.SYS)::

        Installation of FREELOAD.SYS requires modifying the contents of
        your CONFIG.SYS file.

(Generic Configuration)::

        This configuration should work and be the most efficient in 95%
        of all configurations.  For a few real world examples see
        EXAMPLES.DOC

        DOS=HIGH[,UMB]                    (DOS 5.0 only)
        REM DEVICE=STOPMAX.SYS [options]  (Stops kernel from loading in HMA)
        DEVICE=(xms/umb memory manager)
        DEVICE=DOSMAX.EXE [options]       (DOSMAX loads high automatically)
        DEVICE=FREELOAD.SYS [-S][other options]
        REM DEVICE=LOADHI.SYS DOSMAX.EXE  (or DOSMAX loaded high with loader)
        SHELL=SHELLMAX.COM COMMAND.COM /P
        BUFFERS=20
        FILES=40
        LASTDRIVE=Z

        Add a DEVICE= line for FREELOAD.SYS in your config.sys.  FREELOAD
        should be loaded immediately after the XMS and UMB memory manager

        DEVICE=(Memory Manager)
        DEVICE=FREELOAD.SYS [options]

        The default loader pathname is "C:\QEMM\LOADHI.SYS".  If FREELOAD
        cannot open this pathname, a message will displayed alerting you
        to "Use /Fpathname to override."  An example which uses this switch
        is shown below:

        DEVICE=FREELOAD.SYS /F D:\QEMM\LOADHI.SYS

        Version 1.8 adds full 386MAX support, so if 386MAX is detected, or
        the /A2 switch is used, then the default loader pathname is changed
        to "C:\386MAX\386LOAD.SYS."

(Tip)::

        If you prefer that a particular device driver is not affected by
        the operation of FREELOAD, place the DEVICE= for that device above
        the DEVICE=FREELOAD.SYS entry.  This may be necessary in the case
        that a particular driver is not compatible with FREELOAD.

================================================================================

(Syntax)::

        The only thing to remember about syntax for the command line is
        that just about anything works.  What this means is that you
        should be able to type in the options on the command line the
        way they make sense to you.

        To illustrate this point, the following command line example
        is mutated several different ways.

        DEVICE=FREELOAD.SYS /R+ /P+ /FC:\QEMM\LOADHI.SYS
        DEVICE=FREELOAD.SYS -R+ -P+ -F C:\QEMM\LOADHI.SYS
        DEVICE=FREELOAD.SYS R+ P+ F C:\QEMM\LOADHI.SYS
        DEVICE=FREELOAD.SYS R+P+FC:\QEMM\LOADHI.SYS
        DEVICE=FREELOAD.SYS -R+P+FC:\QEMM\LOADHI.SYS

        ... and so on.  There must be an EOL or space following the
        filename paramter the /Fpathname switch

        FREELOAD 1.9 and above adds optional full word syntax.  The new
        syntax looks like this:

        DEVICE=FREELOAD.SYS /REPORT:- /PAUSE:- /LOADER=C:\QEMM\LOADHI.SYS
        DEVICE=FREELOAD.SYS -REPORT:- -PAUSE:- -LOADER=C:\QEMM\LOADHI.SYS
        DEVICE=FREELOAD.SYS REPORT:- PAUSE:- LOADER=C:\QEMM\LOADHI.SYS
        DEVICE=FREELOAD.SYS REPORT-PAUSE-LOADER=C:\QEMM\LOADHI.SYS
        DEVICE=FREELOAD.SYS -REPORT-PAUSE--LOADER=C:\QEMM\LOADHI.SYS

        Obviously when using full words, it is easier to keep the words
        separated so that is clear to read.  An optional [:] or [=] may be
        used for switches (i.e. REPORT:+ or LOADER=C:\LOADHI.SYS).  These
        optional delimiters are used interchangeably and can also be used
        with the single letter switches.  Remember to check your spelling
        because the single letter interface is still intact.

(Switch Options)::

        The following list of switch options is organized by:

        - Control of FREELOAD Reports (/R:/P:/N:)
        - Override the Default Name and Path of the Loader (/F=)
        - Setting the Memory Strategy (/M=)
        - Overriding Directory Structure Size (/D=)
        - Control the Alternate Memory Manager Method (/A=)
        - Controlling the Shrink Feature (/S:)
        - Response file for FREELOAD (@)

    (Control of FREELOAD Reports)::

        (REPORT)::      R[+ or -]        (toggle:  default +)

        Use /R- or /REPORT:- to disable the report after you are
        satisfied with the configuration of DOSMAX.EXE

        (PAUSE)::       P[+ or -]        (toggle:  default +)

        Use /P- or /PAUSE:- to disable the pause after the report as
        long as there are no errors or warnings.

        (NOPAUSE)::     N[+ or -]        (toggle:  default -)

        Use /N+ or /NOPAUSE:+ to never pause after the report, even if
        there are errors.  This switch can be used if your configuration
        generates a warning or error message which you choose to ignore.

    (Override the Default Name and Path of the Loader)::

        (LOADER)::      F[pathname]      (string=  default=C:\QEMM\LOADHI.SYS)

        Use /Fpathname or /LOADER=pathname to specify the filename and path
        of the device loader provided with your upper memory manager.  For
        example, if this device driver is on drive D:

                DEVICE=FREELOAD.SYS /FD:\QEMM\LOADHI.SYS

        If FREELOAD cannot find this file, it will not load.

    (Setting the Memory Strategy)::

        (STRATEGY)::    Mn               (value:  n = 0)   

        Use /Mn or /STRATEGY=n to control the memory allocation strategy
        which FREELOAD uses to allocate its upper memory block.  The default
        strategy is is First Fit (/M0).  This means that FREELOAD will use
        the first upper memory block returned by the XMS manager.  The other
        options are Best Fit (/M1) and Last Fit (/M2).  Best Fit uses the
        block which most closely matches the size needed, and Last Fit uses
        the highest block big enough to handle the request.  Values other
        than 0, 1, or 2 are ignored and the previous setting of this option
        is used.
 
    (Overriding Directory Structure Size)::

        (CDSSIZE)::     Dnn              (value:  nn = 88)

        Use /Dnn or /CDSSIZE=nn to set the Drive Table Size.  Values other
        than the MS-DOS 4.0 - 6.0 Drive Table Size of 88 are only allowed if
        the true MS-DOS version is greater than 5.0.  The Drive Table Size
        for DOS 3.x is 81. The /Dnn switch is only necessary if FREELOAD
        can't determine the Drive Table Size automatically.

    (Control the Alternate Memory Manager Method)::

        (ALTMETHOD)::   An               (value:  n = 0)

        Use /An to select the method FREELOAD uses to detect and track
        high device loaders.  There are 3 possible values.  (0), the
        default, means that FREELOAD will automatically select the proper
        method.  (1), method 1 is for device loaders compatible with
        LOADHI.SYS from Quarterdeck.  (2), method 2 is for device loaders
        compatible with 386LOAD.SYS from Qualitas.  This switch is included
        only for debugging purposes.

    (Controlling the Shrink Feature)

        (SHRINK)::      S[+ or -]        (toggle:  default -)

        FREELOAD normally takes approximately 1.4K of high memory. Use /S+
        or /SHRINK:+ to reduce this requirement to 16 bytes just before
        the shell is loaded from CONFIG.SYS.  Shrinking may cause problems
        with high memory optimizers, but the switch can be safely used
        after the system is optimized, to free another 1.4K of high memory.

  (Response file for FREELOAD)::

        Parameters for FREELOAD may be read from a response file by using the
        @pathname syntax:
        
        FREELOAD.SYS @RESPONSE.FIL
 
        Response files may be commented by using a ";","#",or "*" character
        before the comment.

        *  everything in square brackets "[]" is optional

(CONFIG.SYS Line)::

        DEVICE=FREELOAD.SYS [/ or -][R[+]P[+]N[+]S[+]Fpathname]

        device mode default: /R-/P-/N-/S-/Mn/FC:\QEMM\LOADHI.SYS

        *  No Report status messages
        *  No Pause after report
        *  Pause on errors or warnings
        *  Use the First Fit memory allocation strategy
        *  Default Loader Pathname = "C:\QEMM\LOADHI.SYS"

================================================================================

(Report Format)::

      FREELOAD.SYS :  Ver. 2.1, Copyright (1992) by Philip B. Gardner
             ERROR :  (Error Messages)
           WARNING :  (Warning Messages)
            ADVICE :  (Advisory Messages)
                   :  (Report Messages)
                   :  (Allocation Status)
             PAUSE :  Press any key to continue... 

(Report Note)::

        FREELOAD.SYS may be replaced by FREELOAD.OVL.  The exact name of the
        module is dependent upon the circumstances under which FREELOAD.SYS
        reports.  This detail is important only as diagnostic information.

================================================================================

(Error Messages)::

        MS-DOS version 3.10 or above is required
        XMS manager not installed
        DOS version is not compatible
        Can't load in High Memory
        An 80186 processor or better is required
        Device Loader not found

================================================================================

(Warning Messages)::

        Unknown option in command line
        Unknown option on line #0000
        Extra characters on command line
        Missing or invalid option file XXXXXXXX.XXX
        Line length overflow at line #0000
        Drive Table Size not determined or out of range

================================================================================

(Advisory Messages)::

        Use /Fpathname to override
        Use /Dnn switch to set Drive Table size

================================================================================

(Report Messages)::

        Processing option file XXXXXXXX.XXX
	Effection section is [XXXXXXXX]
        Drive Table Size set to 00h
        [pathname]                      (/Fpathname parameter if error)

================================================================================

(Allocation Status)::

        FREELOAD moved to 0000
        Not enough Hi Memory for FREELOAD  

================================================================================

(Changes)::

    (Version 1.1)::

    (1) Fixed problem where character devices were skipped if a
        block device was loaded first

    (2) Added support for block devices.  This grew the size of
        FREELOAD to 880 bytes so FREELOAD now shrinks to 16 bytes
        when finished.  This frees a .8k block of upper memory
        which is not needed after all devices are loaded.

    (Version 1.2)::

    (1) Added support for character drivers which contain multiple
        devices.  There is a requirement for 16 bytes of low
        memory for a multiple device driver, but this 16 bytes
        supports an unlimited number of devices within the driver.
        Without the 16 bytes, DOS believes the initialization of the
        driver has failed and only the first device is linked.

    (Version 1.3)::

    (1) Fixed problem with failing to build a Drive Parameter Block
        when a multiple device driver ended with a block device.

    (2) Changed automatic reduce to a command line option.  FREELOAD
        now takes 1K bytes high.  If the /S+ (shrink option is used)
        this size is reduced to 16 bytes just before the shell is loaded.

    (Version 1.4)::

    (1) Improved multiple device failure mode.  If a multiple device
        driver has begun the initiate phase and fails, the high device
        is left unlinked, and the loader is left in place with memory
        and the device chain set to the length of the last successful
        initialization.  This method more closely emultates DOS.

    (2) Added check that resets FREELOAD if the loader doesn't load the
        device in high memory successfully.

    (3) Optimized code to reduce memory requirement back to 1K

    (Version 1.5)::

    (1) Added base 10 display of Drive Table Size message

    (Version 1.6)::

    (1) Added support for DOS 5 UMB's when moving FREELOAD upto upper
        memory.  Some device loaders will work with DOS 5 UMB's, and
        now you can use the loader instead of DEVICEHIGH= if you want.

    (2) Added /Mn option, to allow general control of memory allocation
        strategy.  First Fit = 0, Best Fit = 1, and Last Fit = 2 were
        implemented for both DOS 5 UMB's, and XMS UMB's.

    (3) Added check for a 186 processor or better (allows V20/V30).

    (4) Now supporting separate program FREELO86.SYS.  This program is
        functionally identical to FREELO86.SYS, but is compiled to work
        on 8086/8088 processors also.  The stub left in high memory
        is 16 bytes greater using with this variation.

    (Version 1.7)::

    (1) Changed common parsing algorithum to add support for Hex-Notation
        input.  This input method is not used in FREELOAD at this time.

    (2) Fixed case where device fails but the loader tells DOS the device
        was ok.  The high memory block is released, but the loader still
        reserves low memory.  FREELOAD linked the released driver, but now
        detects the condition, does not complete the link, and releases
        the stub.

    (Version 1.8)::

    (1) Added automatic support for 386LOAD.SYS from Qualitas.  The proper
        method FREELOAD uses is determined automatically, but may be
        overridden with the /An switch.  The option adds as much as
        246 bytes to the pre-shrink size of FREELOAD.

    (2) DOS 3.x and 4.x with FREELOAD and 386LOAD was crashing because
        the 386LOAD stub hooked INT 21h, apparently to return a different
        DOS version to the device being loaded.  This "feature" is now
        disabled by FREELOAD so that the stub may be freed.  DOS 5 (and
        above?) used func 4B05h (set execution state), so the hook checking
        is bypassed.  The hook checking is implemented for /A2 only (or
        auto /A0).

    (3) If method 2 (/A2 or 386MAX detected with /A0), the default loader
        name is "C:\386MAX\386LOAD.SYS."  This makes compatability with
        386MAX completely transparent to the user in most cases.

    (Version 1.9)::

    (1)  Reorganized code to enable an overlay method of module selection
         to automate processor selection and split up .SYS and .EXE modules
         to reduce the initialization memory to minimum.

    (2)  FREELOAD now automatically detects the processor type and chooses
         separate code modules if appropriate.  The 186 processor require-
         ment of previous versions is no longer applicable.

    (3)  Added optional full word syntax to argument parser.  The old style
         single letter switch interface is still intact.  The switch lists
         now show the optional word with the switch.

    (Version 2.0)::

    (1)  Added support for DOS 6.0's changes in the way devices are
         initialized.  FREELOAD 1.7 was not compatible with DOS 6.0 or
         DBLSPACE.  FREELOAD 2.0 now supports the new version seamlessly.

    (2)  Added support for loaders which build sub-segments for devices
         in high memory.  This caused problems while preparing block
         devices.

    (3)  Added option response file input with @filename.opt syntax

    (Version 2.1)::

    (1)  Fixed problem with finding DOS 6.0 CONFIG variable for machines
         whose bios'es don't intialize memory properly.

    (2)  Fixed problem with some configurations of non-DOS 6.x systems
         and non-DBLSPACE systems which caused an Exception 13 after
         FREELOAD was loaded.

================================================================================
```
{% endraw %}

## SHELLMAX.DOC

{% raw %}
```

================================================================================
       SHELLMAX.COM :  Ver. 2.1, Copyright (1992,93) by Philip B. Gardner
================================================================================

  SHELLMAX.COM is a utility which loads the primary shell high from the
  SHELL= line in your CONFIG.SYS.

  Support is provided for:

        * Loading the primary SHELL into high memory
        * Creating a primary SHELL stub in low memory
          (improves compatability with some configurations)

================================================================================

(Requirements)::

        * Requires MS-DOS Version 3.10 or better

================================================================================

(Installation)::

        (CONFIG.SYS)::

        Installation of SHELLMAX.COM requires modifying the contents of
        your CONFIG.SYS file.

        SHELL=SHELLMAX.COM [options] COMMAND.COM /P

        Insert SHELLMAX.COM in your SHELL= line of your CONFIG.SYS.
        SHELLMAX.  

(Safety)::

        When installing SHELLMAX, it is best if you copy SHELLMAX.COM and
        COMMAND.COM (the primary shell), to the root directory of your boot
        drive.  If SHELLMAX fails to function properly with the parameters
        in your SHELL= command line, it will issue a series of error messages,
        and then try and load COMMAND.COM from the root directory.  This will
        give you a chance to edit the CONFIG.SYS and correct the problem.
        You should exercise caution and have a boot floppy available.

        SHELLMAX is compatible with full SHELL= command line specifications.
        In the following example, neither SHELLMAX.COM or COMMAND.COM is
        required in the root directory after installation is successful, as
        indicated by no error or warning messages.

        SHELL=C:\BOOT\SHELLMAX.COM /R- C:\DOS\COMMAND.COM C:\DOS /E:512 /P

        All switch options and possible messages for SHELLMAX are detailed
        below:

================================================================================

(Compatibility)::

    (4DOS)::

        If you are using Version 4.x 4DOS from J.P. Software, you should
        add the path to 4DOS.COM to the 4DOS command line.

        SHELL=SHELLMAX.COM C:\4DOS\4DOS.COM C:\4DOS /p

        If this parameter is not added, 4DOS may not set the environment
        variable "COMSPEC=" properly.

    (DOS 3.x & 4.x)::

        Some versions of DOS incorrectly truncate the command line to 35
        characters for the SHELL= statement in the CONFIG.SYS or fail to
        pass a command line at all if the line is over 35 characters.
        This bug is circumvented by a special algorithum in SHELLMAX.  If
        SHELLMAX does not work for you, and you suspect that this is the
        problem, please contact me for assistance.

================================================================================

(Syntax)::

        The only thing to remember about syntax for the command line is
        that just about anything works.  What this means is that you
        should be able to type in the options on the command line the
        way they make sense to you.

        To illustrate this point, the following command line example
        is mutated several different ways.

        SHELL=SHELLMAX.COM /R- /P+ /S+ C:\COMMAND.COM C:\ /P
        SHELL=SHELLMAX.COM -R- -P+ -S+ C:\COMMAND.COM C:\ /P
        SHELL=SHELLMAX.COM /R-/P+/S+ C:\COMMAND.COM C:\ /P
        SHELL=SHELLMAX.COM -R--P+-S+ C:\COMMAND.COM C:\ /P

        ... and so on.

        SHELLMAX 2.0 and above adds optional full word syntax.  The new
        syntax looks like this:

        SHELL=SHELLMAX.COM /REPORT:- /PAUSE:+ /FAKESTUB:+ C:\COMMAND.COM C:\ /P
        SHELL=SHELLMAX.COM -REPORT:- -PAUSE:+ -FAKESTUB:+ C:\COMMAND.COM C:\ /P
        SHELL=SHELLMAX.COM /REPORT:-/PAUSE:+/FAKESTUB:+ C:\COMMAND.COM C:\ /P
        SHELL=SHELLMAX.COM -REPORT:--PAUSE:+-FAKESTUB:+ C:\COMMAND.COM C:\ /P

        Obviously when using full words, it is easier to keep the words
        separated so that is clear to read.  The optional [:] is used
        for toggle switches (i.e. REPORT:+).  These optional delimiters
        can also be used with the single letter switches.  Exact spelling
        is required because the single letter interface is still intact.

(Switch Options)::

        The following list of switch options is organized by:

          - Control of SHELLMAX Reports (/R:/P:/N:)
          - Control the Configuration of a Fake Low Memory Stub (/S:)
          - Response file for SHELLMAX (@)

    (Control of SHELLMAX Reports)::

        (REPORT)::      R[+ or -]        (toggle:  default +)

        Use /R- or /REPORT:- to disable the report after you are
        satisfied with the configuration of STOPMAX.SYS

        (PAUSE)::       P[+ or -]        (toggle:  default +)

        Use /P- or /PAUSE:- to disable the pause after the report as
        long as there are no errors or warnings.

        (NOPAUSE)::     N[+ or -]        (toggle:  default -)

        Use /N+ or /NOPAUSE:+ to never pause after the report, even if
        there are errors.  This switch can be used if your configuration
        generates a warning or error message which you choose to ignore.

    (Control the Configuration of a Fake Low Memory Stub)

        (FAKESTUB)::    S[+ or -]        (toggle:  default -)

        If you use SHELLMAX to load the shell high, then some programs
        (environment editors and some networks), are confused that no
        portion of the primary shell is is low memory.  Use /S+ or 
        /FAKESTUB:+ to tell SHELLMAX to create a fake stub, which looks
        like the primary shell, in low memory.  This stub tracks changes
        to the Master Environment segment pointer by monitoring the real
        stub high (each "get exit code of sub-program"  INT 21h, 4Dh).
        The stub size is 256 bytes, so if you use 4DOS, and find that
        you need the low stub, it is better to just let 4DOS do it and
        not use SHELLMAX.

  (Response file for SHELLMAX)::

        Parameters for SHELLMAX may be read from a response file by using the
        @pathname syntax:
        
        SHELLMAX.COM @RESPONSE.FIL C:\COMMAND.COM C:\ /E:512 /P
 
        Notice that the path to the SHELL is cannot be in the response file.

        Response files may be commented by using a ";","#",or "*" character
        before the comment.

        *  everything in square brackets "[]" is optional

(CONFIG.SYS Line)::

        SHELL=SHELLMAX.COM [/R-/P+/N+/S+] COMMAND.COM /P

        default:  /R+/P-/N-/S-

        *  Report status messages
        *  Don't Pause after report
        *  Pause on errors or warnings
        *  Don't Fake stub low

================================================================================

(Report Format)::

    SHELLMAX.COM (8086):  Ver. 2.1, Copyright (1992,93) by Philip B. Gardner
                 ERROR :  (Error Messages)
               WARNING :  (Warning Messages)
                ADVICE :  (Advisory Messages)
                       :  (Report Messages)
                       :  (Allocation Status)
                 PAUSE :  Press any key to continue... 

================================================================================

(Error Messages)::

        MS-DOS version 3.10 or above is required
        Bad or missing program specification
        Use SHELLMAX.COM only as CONFIG.SYS SHELL=
	Not enough memory to execute 
        Fatal Error, program halted

================================================================================

(Warning Messages)::

        Unknown option in command line
        Unknown option on line #0000
        Extra characters on command line
        Missing or invalid option file XXXXXXXX.XXX
        Line length overflow at line #0000
        Unable to load high, loading low

================================================================================

(Advisory Messages)::

================================================================================

(Report Messages)::

        Processing option file XXXXXXXX.XXX
	Effection section is [XXXXXXXX]

================================================================================

(Allocation Status)::

        SHELL    loaded at 0000
        Not enough Hi Memory for SHELL
        STUB     faked at 0000

================================================================================

(Changes)::

    (Version 1.7)::

    (1)  Found a workaround to 4DOS 4.x initialization hang.  4DOS now will
         load properly.  One caveat, add path to 4DOS to the 4DOS command
         line or 4DOS will not find 4DOS.INI or set the COMSPEC variable
         correctly.

    (2)  Corrected problem with DOS 3.x and DOS 4.x when the standard handles
         were getting closed by mistake.

    (3)  When COMMAND.COM path argument was a different drive then the boot
         drive, COMMAND.COM was looking for the AUTOEXEC.BAT on the drive
         of the argument instead of the boot drive.  Fixed so COMMAND.COM
         processes the AUTOEXEC.BAT from the boot drive.

    (4)  Version bumped to match DOSMAX

    (Version 1.8)::

    (1)  Added /S+ option to create a fake primary shell stub in low memory.
         This works around environment editor and network compatability
         problems.

    (2)  Improved error recovery with the goal of trying every way of at
         least loading some shell in the event the algorithum of SHELLMAX
         encounters multiple errors.

    (Version 1.9)::

    (1)  Reorganized code to enable an overlay method of module selection
         to automate processor selection and split up .SYS and .EXE modules
         to reduce the initialization memory to minimum.

    (2)  SHELLMAX now automatically detects the processor type and chooses
         separate code modules if appropriate.  The 186 processor require-
         ment of previous versions is no longer applicable.

    (3)  Added optional full word syntax to argument parser.  The old style
         single letter switch interface is still intact.  The switch lists
         now show the optional word with the switch.

    (Version 2.0)::

    (1)  Completely rewritten.  Added feature to edit command line if
         the SHELL is bad or missing.

    (2)  Added option response file input with @filename.opt syntax

    (Version 2.1)::

    (1)  Fixed problem with finding DOS 6.0 CONFIG variable for machines
         whose bios'es don't intialize memory properly.

================================================================================
```
{% endraw %}

## STOPMAX.DOC

{% raw %}
```

================================================================================
       STOPMAX.SYS :  Ver. 2.1, Copyright (1992,93) by Philip B. Gardner
================================================================================

  STOPMAX.SYS is a derivative of DOSMAX.EXE.  The algorithums of DOSMAX which
  "stop" the DOS 5.0 and above kernel from loading into the HMA have been
  assembled separately into STOPMAX.SYS.  This allows DOSMAX.EXE to load high
  after the memory manager has installed and still put the DOS kernel into a
  UMB.  STOPMAX is specifically for DOS 5.0 and above users and will not work
  with DOS versions prior to DOS 5.0 and above.

  STOPMAX prevents DOS from loading into the HMA using one of the for methods
  which are also part of DOSMAX.  The default method "/B," patches the DOS
  5.0 and above initialization code.  This method and the "/V" (VDISK header
  method), do not require any resident memory, so STOPMAX simply executes and
  returns all memory to DOS.  DOSMAX should then be loaded as a DEVICE, after
  the memory manager and there is no restriction as to when DOSMAX should be
  installed.

  Support is provided for:

        * Stopping DOS from loading into the HMA

================================================================================

(Requirements)::

        * Requires MS-DOS Version 5.00 or above

================================================================================

(Installation)::

        (CONFIG.SYS)::

        Installation of STOPMAX.SYS requires modifying the contents of
        your CONFIG.SYS file.

(Generic Configuration)::

        This configuration should work and be the most efficient in 95%
        of all configurations.  For a few real world examples see
        EXAMPLES.DOC

        DOS=HIGH[,UMB]                    (DOS 5.0 and above only)
        DEVICE=STOPMAX.SYS [options]      (Stops kernel from loading in HMA)
        DEVICE=(xms/umb memory manager)
        DEVICE=DOSMAX.EXE [options]       (DOSMAX loads high automatically)
        SHELL=SHELLMAX.COM COMMAND.COM /P
        BUFFERS=20
        FILES=40
        LASTDRIVE=Z

        DOS 5.0 and above users should configure DOS to load high into
        the HMA.  The UMB parameter is optional, since both DOS 5.0 and
        above upper memory management and XMS upper memory blocks are
        supported by DOSMAX.

        DOS=HIGH[,[UMB][NOUMB]] (Both DOS UMB's and XMS UMB's supported)

        Add a DEVICE= line for STOPMAX.SYS in your config.sys.  STOPMAX
        must be loaded before the XMS and UMB memory manager, but some
        memory managers provide high memory but not an HMA.  If your
        memory manager does not support an HMA, then STOPMAX is not
        necessary.  DOSMAX is then loaded "after" the memory manager

        HIMEM.SYS from Microsoft always puts the DOS 5.0 and above kernel
        into the HMA before it is through initializing and then puts its
        own code into the HMA.  If you are able to load HIMEM.SYS high
        (using some upper memory providers, not EMM386.SYS), you can now
        use the /I+ switch to stop HIMEM from loading DOS into the HMA,
        and STOPMAX will put it into a UMB instead.  The /B+ option (default)
        also stops HIMEM.SYS from putting the DOS kernel into the HMA.  If
        you use only DOS 5.0 and above files, meaning HIMEM.SYS and EMM386.SYS
        you should not use STOPMAX.

        DEVICE=STOPMAX.SYS [options]
        DEVICE=(Memory Manager)
        ......
        DEVICE=DOSMAX.EXE [options]

        By default, STOPMAX.SYS will generate a message for each successful
        operation or event.  The display then pauses to allow you to
        read the report.  After you are satisfied with the configuration
        and you want to disable the REPORT and PAUSE feature, use:

        DEVICE=STOPMAX.SYS /R- /P- 

        All switch options and possible messages for STOPMAX are detailed
        below:

================================================================================

(Syntax)::

        The only thing to remember about syntax for the command line is
        that just about anything works.  What this means is that you
        should be able to type in the options on the command line the
        way they make sense to you.

        To illustrate this point, the following command line example
        is mutated several different ways.

        DEVICE=STOPMAX.SYS /R- /P- /B+
        DEVICE=STOPMAX.SYS -R- -P- -B+
        DEVICE=STOPMAX.SYS R- P- B+
        DEVICE=STOPMAX.SYS R-P-B
        DEVICE=STOPMAX.SYS -R-P-B

        ... and so on.

        STOPMAX 1.9 and above adds optional full word syntax.  The new
        syntax looks like this:

        DEVICE=STOPMAX.SYS /REPORT:- /PAUSE:- /IOPATCH:+
        DEVICE=STOPMAX.SYS -REPORT:- -PAUSE:- -IOPATCH:+
        DEVICE=STOPMAX.SYS REPORT:- PAUSE:- IOPATCH:+
        DEVICE=STOPMAX.SYS REPORT-PAUSE-IOPATCH:+
        DEVICE=STOPMAX.SYS -REPORT-PAUSE-IOPATCH:+

        Obviously when using full words, it is easier to keep the words
        separated so that is clear to read.  The optional [:] is used
        for toggle switches (i.e. REPORT:+).  These optional delimiters
        can also be used with the single letter switches.  Exact spelling
        is required because the single letter interface is still intact.

(Switch Options)::

        The following list of switch options is organized by:

          - Control of STOPMAX Reports (/R:/P:/N:)
          - Control the Location of the DOS Kernel (/B:/V:/I:)

    (Control of STOPMAX Reports)::

        (REPORT)::      R[+ or -]        (toggle:  default +)

        Use /R- or /REPORT:- to disable the report after you are
        satisfied with the configuration of STOPMAX.SYS

        (PAUSE)::       P[+ or -]        (toggle:  default +)

        Use /P- or /PAUSE:- to disable the pause after the report as
        long as there are no errors or warnings.

        (NOPAUSE)::     N[+ or -]        (toggle:  default -)

        Use /N+ or /NOPAUSE:+ to never pause after the report, even if
        there are errors.  This switch can be used if your configuration
        generates a warning or error message which you choose to ignore.

    (Control the Location of the DOS Kernel)::

        (IOPATCH)::     B[+ or -]        (toggle:  default -)

        Use /B+ or /IOPATCH:+ to stop DOS from loading in the HMA using
        a method which patches the copy of DOS 5.0 initialization code in
        memory when STOPMAX initializes.  This method will search and
        "patch out" the DOS to HMA code.  This option was developed and
        tested under MSDOS 5.0 and 6.0 and is not guaranteed to work with
        DOS versions later than 6.0, but then many of the algorithums in
        STOPMAX depend upon "undocumented" features of DOS which are always
        subject to change anyway.  The advantage of this method is that it
        works no matter which memory manager is used or how it is configured.

        (VDISK)::       V[+ or -]        (toggle:  default -)

        Use /V+ or /VDISK:+ to enable an alternate method of stopping
        DOS from allocating the HMA.  This switch is only necessary
        if STOPMAX reports that the DOS version is incompatible, and
        it will only work with memory managers which can detect a
        VDISK Header in the HMA when the memory manager initializes
        and mark's it as allocated.

        (STOPHIMEM)::   I[+ or -]        (toggle:  default -)

        Use /I+ or /STOPHIMEM:+ to stop HIMEM.SYS from loading DOS HIGH.
        This switch is intended for users who load HIMEM.SYS from
        Microsoft high after their UMB provider.  This option is not
        very useful if HIMEM.SYS is not loaded high because HIMEM will
        grow to about 30k in size.  If you still want to inhibit HIMEM,
        then load it last, to minimize the "growth."  The reason HIMEM
        "grows" is because the code which normally goes to the HMA is
        fixed at offset 0A000, so if HIMEM is loaded below 0A00h, the
        size of HIMEM grows to 0A00h + the size of the HMA code + the
        size of the XMS handle table.  This option affects the size of
        STOPMAX and adds 32 bytes.

        *  everything in square brackets "[]" is optional

(CONFIG.SYS Line)::

        DEVICE=STOPMAX.SYS [/-][R-P+I+N+V+B-]

        device default:  /R+/P-/N-/B+/I-/V-

        *  Report status messages
        *  Don't Pause after report
        *  Pause on errors or warnings

================================================================================

(Report Format)::

        STOPMAX.SYS :  Ver. 2.1, Copyright (1992,93) by Philip B. Gardner
             ERROR :  (Error Messages)
           WARNING :  (Warning Messages)
            ADVICE :  (Advisory Messages)
                   :  (Report Messages)
                   :  (Allocation Status)
             PAUSE :  Press any key to continue... 

(Report Note)::

        STOPMAX.SYS may be replaced by STOPMAX.OVL.  The exact name of the
        module is dependent upon the circumstances under which STOPMAX.SYS
        reports.  This detail is important only as diagnostic information.
        
================================================================================

(Error Messages)::

        MS-DOS version 5.00 or above is required
        An 80186 processor or better is required
        Can't load in High Memory
        DOS version is not compatible
        Not necessary for versions below DOS 5.0
        DOS is HIGH already
        Include DOS=HIGH in CONFIG.SYS
        Couldn't write VDISK Header
        Stop DOS to HMA patch not successful

================================================================================

(Warning Messages)::

        Unknown option in command line
        Unknown option on line #0000
        Extra characters on command line
        Missing or invalid option file XXXXXXXX.XXX
        Line length overflow at line #0000

================================================================================

(Advisory Messages)::

        Should be the first DEVICE= in CONFIG.SYS
        Try using /V+ switch
        Try using /B+ switch

================================================================================

(Report Messages)::

        Processing option file XXXXXXXX.XXX
	Effection section is [XXXXXXXX]

================================================================================

(Allocation Status)::

================================================================================

(Changes)::

    (Version 1.6)::

    (1) Added check for a 186 processor or better (allows V20/V30).

    (2) Removed the check for an XMS manager and a check for extended
        memory.  This allows machines without extended memory to use
        UMB providers, which do not require extended memory, with STOPMAX.
        These checks were redundant since if DOS is in the HMA when
        STOPMAX loads, the message "DOS is HIGH already" is reported.

    (3) Added /I option which inhibits HIMEM.SYS from loading DOS HIGH.
        This switch is not very useful if HIMEM.SYS is not loaded high,
        since HIMEM will be about 30k in size.  This switch is intended
        for users who load HIMEM high after their UMB provider is installed.

    (4) Now supporting separate program STOPM86.SYS.  This program is 
        functionally identical to STOPMAX.SYS, but is compiled to work
        on 8086/8088 processors also.  I have learned that there are
        8086/8088 machines which can be configured with High Memory
        using some High Memory Managers, and this variation will make
        it possible for those users to put DOS in a UMB even though
        there is no HMA.  STOPM86.SYS requires 32 more bytes of memory.

   (5)  Added /B+ option which will stop DOS from going to the HMA by
        patching the DOS initilization code in memory.  This method
        works no matter which memory manager is in use or how it is
        configured.  It also requires no resident memory.  I made this
        the default method for STOPMAX.

   (Version 1.7)::

   (1)  Changed common parsing algorithum to support Hex-Notation input.
        This input method is not used in STOPMAX at this time.

   (Version 1.8)::

   (1)  Changes in STOPMAX common code for specific 386MAX support.

    (Version 1.9)::

    (1)  Reorganized code to enable an overlay method of module selection
         to automate processor selection and split up .SYS and .EXE modules
         to reduce the initialization memory to minimum.

    (2)  STOPMAX now automatically detects the processor type and chooses
         separate code modules if appropriate.  The 186 processor require-
         ment of previous versions is no longer applicable.

    (3)  Added optional full word syntax to argument parser.  The old style
         single letter switch interface is still intact.  The switch lists
         now show the optional word with the switch.

    (4)  STOPMAX updated for DOS 6.0.  Corrected a coding error while moving
         buffers.

    (Version 2.0)::

    (1)  Added response file input with @filename.opt syntax

    (Version 2.1)::

    (1)  Fixed problem with finding DOS 6.0 CONFIG variable for machines
         whose bios'es don't intialize memory properly.

================================================================================
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3964

     Volume in drive A has no label
     Directory of A:\

    FW3      BAT       408   6-06-93   9:21p
    FW4-6    BAT       378   6-06-93   9:21p
    ENVIMAX  COM      7918   6-06-93   9:21p
    SHELLMAX COM      8182   6-06-93   9:21p
    DOSMAX   DOC     33517   6-06-93   9:21p
    ENVIMAX  DOC      6157   6-06-93   9:21p
    EXAMPLES DOC     13835   6-06-93   9:21p
    FREELOAD DOC     17573   6-06-93   9:21p
    SHELLMAX DOC     10997   6-06-93   9:21p
    STOPMAX  DOC     13802   6-06-93   9:21p
    DOSMAX   EXE     57210   6-06-93   9:21p
    README   MAX      4877   6-06-93   9:21p
    FREELOAD SYS     21294   6-06-93   9:21p
    STOPMAX  SYS     14776   6-06-93   9:21p
    FILE_ID  DIZ       326   6-06-93   9:21p
    GO       BAT        84   9-09-93   9:02a
    SHOW     EXE      2040   9-12-88  10:48a
           17 file(s)     213374 bytes
                          101376 bytes free
