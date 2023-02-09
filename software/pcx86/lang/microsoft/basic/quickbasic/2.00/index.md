---
layout: page
title: Microsoft QuickBASIC 2.00
permalink: /software/pcx86/lang/microsoft/basic/quickbasic/2.00/
redirect_from: /disks/pcx86/tools/microsoft/basic/quickbasic/2.00/
machines:
  - id: ibm5160-msdos320
    type: pcx86
    config: /machines/pcx86/ibm/5160/ega/512kb/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    floppyDrives: '[{boot:false},{}]'
    autoMount:
      A:
        name: MS QuickBASIC 2.00 (Disk 1)
      B:
        name: MS QuickBASIC 2.00 (Personal)
---

The [MS QuickBASIC 2.00 (Disk 1)](#directory-of-ms-quickbasic-200-disk-1) was acquired by PCjs and appears
to be an original distribution disk; unfortunately, Disk 2 was not included.

The [MS QuickBASIC 2.00 (Personal)](#directory-of-ms-quickbasic-200-personal) disk is from our collection of
[PCjs Personal Disks](/software/pcjs/) and is not an original distribution disk; however, it
contains an identical `QB.EXE` and presumably a corresponding `BCOM20.LIB`.

{% include machine.html id="ibm5160-msdos320" %}

### Directory of MS QuickBASIC 2.00 (Disk 1)

     Volume in drive A has no label
     Directory of A:\

    BUG      BAS       397   2-17-86   3:34p
    CALLSHAP BAS       133   4-25-86  10:00a
    DEMO     BAS       211   6-10-86   9:47a
    EX       BAS       182   4-25-86  10:01a
    PPRINT   BAS     22941   6-17-86   8:53a
    QB       EXE    186256   6-16-86   2:47p
    README   DOC     15580   6-19-86   4:26p
    REMLINE  BAS     12913   6-19-86   7:12a
    SQUARE   BAS       164   4-25-86  10:02a
    TRIANGLE BAS       250   4-25-86  10:03a
    UPDATE   DOC      6545   6-03-86   2:05p
    USERLIB  ASM     17439   5-27-86   8:09a
           12 file(s)     263011 bytes
                           91136 bytes free

### Directory of MS QuickBASIC 2.00 (Personal)

     Volume in drive A is QUICKBAS2JP
     Directory of A:\

    QB       EXE    186256   6-16-86   2:47p
    BCOM20   LIB    176128   6-13-86  10:55a
            2 file(s)     362384 bytes
                               0 bytes free

### README.DOC

    This file is divided into two parts. Part 1 contains additions and corrections 
    to the QuickBASIC Version 2.0 manual. Part 2 contains information about 
    additions and changes to QuickBASIC that were made after the manual was printed.

    Part 1: Corrections to the Manual

    Page    Correction
    ----    ----------

    71      In the syntax line at the bottom of the page, the "c:buffersize"
            option should be preceded by a forward slash, as follows:

            /c:buffersize

    78      Binary files cannot be loaded into QuickBASIC. The note in the middle
            of the page should read:

        QuickBASIC accepts only ASCII files. If you attempt to load a binary
            file, you will get an error. 

    152     The stack is preset to 768 bytes, not 512.

    222     The EGA card does not support the COLOR statement border parameter. 
            If you have an EGA card installed on your system, using the border 
            parameter will cause unpredictable results.

    275     In FIELD statement Example 2, the order of arguments is reversed
            for all string-manipulation functions. The affected section of the 
            program should read as follows:

            .
            .
            .
            IF (ZCHECK$ > "85699" AND ZCHECK$ < "85801") THEN
                INFO$ = PLIST$
                PRINT LEFT$(INFO$,25)
                PRINT MID$(INFO$,16,25)
                PRINT RIGHT$(INFO$,17)
            END IF

    283     In the FRE function example, the first line of the example should be
            a $DYNAMIC metacommand, as follows:

            '  $DYNAMIC
            PRINT "Before dimensioning arrays:   " FRE(""),FRE(0),FRE(-1)
            .
            .
            .

    286     There is a missing parenthesis in the formula for computing the GET
            graphics statement array size. There should be 3 parentheses after
            the INT keyword, as follows:

            4 + INT(((x2 - x1 +1) * bits-per-pixel + 7)/8) * ((y2 - y1) +1)

    297     The two examples comparing the single-line and block forms of the
            IF...THEN...ELSE statement should read as follows:

            Example 1:

            INPUT "Price = ",x
            IF (x >= 10000) THEN DISC! = x * .25! ELSE _
                IF (x < 10000) AND (x >= 5000) THEN DISC! = x * .2! ELSE _
                IF (x < 5000) AND (x >= 1000) THEN DISC! = x * .1! ELSE _
                    DISC! = 0
            IF DISC! = 0 THEN PRINT "No discount" ELSE _
                PRINT "Discounted price = "; : PRINT USING "$$####.##";x - DISC!

            Example 2:
            
            INPUT "Price = ",x
            IF (x >= 10000) THEN 
                DISC! = x * .25! 
            ELSEIF (x < 10000) AND (x >= 5000) THEN 
                DISC! = x * .2! 
            ELSEIF (x < 5000) AND (x >= 1000) THEN 
                DISC! = x * .1! 
            ELSE DISC! = 0
            END IF
            IF DISC! = 0 THEN 
                PRINT "No discount" 
            ELSE 
                PRINT "Discounted price = "; 
                PRINT USING "$$####.##";x - DISC!
            END IF

    317	The second comment in the example program should read:

            'DOWN key will now be trapped

    325     The STEP option example requires a hyphen before the STEP keyword, as
            follows:

            LINE -STEP (10,5)

            The phrase following the example should read:

            "draws a line from (10,10) to the point with x-coordinate
        10+10 and y-coordinate 10+5, or (20,15)."

    396     The variable in the first line of PLAY statement Example 1 should be
            SCALE$, not SCALES$:

            SCALE$ = "CDEFGAB"

    410     In the example, all references to the file STORINVENT should be changed 
            to INVENT.DAT. The file argument to both OPEN statements should be
            the same file, INVENT.DAT.

    418     The first entry in the "Arguments" column should be (x,y), not
            (x1,y1).

    420     Images cannot be scaled with the PUT graphics statement. Only one set
            of x,y coordinates can be specified as arguments to PUT. All text
            after "Because you can specify..." in the second paragraph, and all of 
            the following paragraph, should be ignored.
            
    448     In the description of the SCREEN statement arguments, the first line
            under the SCREEN 2 heading should refer to high-resolution graphics 
            instead of medium-resolution graphics, as follows:

            * 640 x 200 pixel high-resolution graphics

    474     The example for the STR$ function should read as follows:

            DEF FNNUM$(X)
                X$ = STR$(X)
                LENGTH = LEN(X$)
                IF LEFT$(X$,1) <> "-" THEN LENGTH = LENGTH - 1
                FNNUM$ = RIGHT$(X$,LENGTH)
            END DEF

            PRINT "Enter 0 to end." : NUM = -1    'Corrected line
            WHILE NUM
                INPUT "Find cosine of: ",NUM
                IF NUM THEN PRINT "COS(" FNNUM$(NUM) ") = " COS(NUM)
            WEND

    482	In the example, the input to the prompt "Pattern to be searched 
            for?" must be SUB (not "sub") in order to get the output shown.

    525     Add DEBUG to the list of reserved words.

    536     If you are using a version of DOS earlier than 3.0, use the PATH command
            instead of the SET command to define the PATH variable. Using SET under 
            earlier versions of DOS can cause the PATH variable to work incorrectly 
            for some path specifications that contain lowercase letters.

    546 &   The stack is preset to 768 bytes, not 512.
    547

    570     The explanation for the error message "Too many files" should read:

        This error most commonly occurs when a file open is attempted that 
            exceeds the limit set by the FILES= parameter in the CONFIG.SYS
            file. It also occurs when the per-directory file limit is exceeded by 
            an attempt to create a new file with the SAVE or OPEN statement.
            Refer to your DOS manual for the number of files permitted in a 
            directory.

    Part II: Additional Information

    1. Executing command buttons

    Note that pressing RETURN always executes the command button with the 
    double outline, regardless of which button is highlighted. Even if you
    have moved the highlight to another button, pressing RETURN will execute the
    default command. To execute the command in the highlighted button, press 
    SPACEBAR.

    2. The QB.INI initialization file

    QB.INI is an initialization file QuickBASIC uses to set the View
    menu Options settings and the the File menu Autosave command.
    Upon exiting from QuickBASIC, if you have modified any of the Options 
    settings or the state of the File menu Autosave command, these 
    changes are written to QB.INI. Note that QB.INI is not supplied on any 
    of the product disks. It is created only when a modification to the Options 
    or Autosave settings occurs. If you only use the default settings, QB.INI 
    is never created. 

    When QB.INI is created, it is placed in the current directory. When 
    QuickBASIC starts, it looks for QB.INI in the current directory, then in 
    the locations specified by the PATH environment variable.

    3. Source-file line termination

    QuickBASIC 2.0 requires a CR/LF (carriage return/line feed) sequence at 
    the end of each line. If only carriage returns are present, QuickBASIC 
    reads the first 255 characters only, and continues without producing an error
    message. If only linefeeds are present, the file will appear to read in
    correctly, but the last character of each line will be missing. If
    you use an editor that places only a CR or an LF at the end of a line
    you will need to modify your source files so they have the correct
    sequence at the end of each line. The following program examines the
    end of each line in a file and inserts a carriage return, linefeed, or
    both if needed.

        DEFINT A-Z
        cr = 13 : lf = 10
    More:
        CLS
        INPUT "File (.BAS) ", inpfile$
        ON ERROR GOTO NoFile
        OPEN inpfile$ + ".BAS" FOR INPUT AS #1
        ON ERROR GOTO 0
        OPEN inpfile$ + ".NEW" FOR OUTPUT AS #2
        OPEN inpfile$ + ".BAK" FOR OUTPUT AS #3
        prevcr = 0
        WHILE NOT EOF(1)
        filechar$ = INPUT$(1, #1)
        PRINT #3, filechar$;
        IF ASC(filechar$) = cr THEN
            prevcr = 1
            PRINT #2, filechar$;
        ELSEIF ASC(filechar$) = lf AND prevcr THEN
            prevcr = 0
            PRINT #2, filechar$;
        ELSEIF ASC(filechar$) = lf AND NOT prevcr THEN
            PRINT #2, CHR$(cr);
            PRINT #2, filechar$;
        ELSEIF prevcr THEN
            prevcr = 0
            PRINT #2, CHR$(lf);
            PRINT #2, filechar$;
        ELSE
            PRINT #2, filechar$;
        END IF
        WEND
        CLOSE
        KILL inpfile$ + ".BAS"
        NAME inpfile$ + ".NEW" AS inpfile$ + ".BAS"
        INPUT "Anymore (Y/N) ", more$
        IF more$ = "y" OR more$ = "Y" THEN GOTO More
        SYSTEM
    NoFile:
        number = ERR
        IF number = 53 THEN
        CLS
        INPUT "No such file ", z$
        RESUME More
        ELSE
        ON ERROR GOTO 0
        ERROR number
        END IF
    
    4. Using CALL ABSOLUTE with in-memory compilation

    CALL ABSOLUTE is considered an external subroutine by the QuickBASIC
    compiler. This subroutine is in the user library USERLIB.EXE, supplied 
    on QuickBASIC disk #1. 

    5. Compilation errors

    When an error is detected during compilation, code generation stops. This
    allows for faster compilation, but has the side effect that some errors may
    be reported that are not errors. When the original error is corrected, 
    these side effect errors will go away. For example, the statements

    FOR I = 1
        .
        .
        .
    NEXT I

    will generate two errors, "Missing TO" and "NEXT without FOR". When
    the FOR statement is changed to read "FOR I = 1 to 10" both errors
    are corrected.

    6. COMMAND.COM, the SHELL statement and the Shell command

    QuickBASIC requires COMMAND.COM before it can execute a SHELL statement or
    the File menu Shell command. QuickBASIC looks first in the directory 
    specified in the COMSPEC environment variable, then in the current directory.

    7. Using SHELL in a subroutine

    The SHELL statement does not compress memory. If not enough contiguous
    memory is available, (for example, if many CHAIN statements have been
    executed, or several dynamic arrays were allocated then erased), a SHELL
    statement may fail with an "Out of memory" memory error.

    8. Using the SHELL statement with DOS 2.X

    If you are using a 2.X version of MS-DOS, programs that contain SHELL 
    statements may not exit correctly. This is due to a known problem in DOS 
    2.X. The problem occurs when DOS reloads the transient portion of the 
    command processor into high memory. 

    To exit QuickBASIC after executing an in-memory program that contains 
    SHELL statements, when the program finishes running choose Shell from the 
    File menu, then type "exit" at the MS-DOS prompt.

    When stand-alone executable programs exit, the message "Invalid COMMAND.COM" 
    may appear. If so, you must restart your system. If you compile using 
    BRUN20.COM the program will, in most cases, exit properly.

    Another solution is to upgrade your DOS version to 3.X.

    9. Running terminate and stay resident programs from the File menu Shell

    Do not run terminate and stay resident programs while executing the Shell
    command from the File menu. When a Shell command is executed, QuickBASIC
    is compressed into the smallest memory possible. The terminate and stay 
    resident program will occupy memory required by QuickBASIC, and it will
    not be possible to compile or run a program, or do anything that
    allocates memory.

    10. Changing directories from the File menu Shell command

        If you change directories after executing the Shell command from the File
        menu, this directory is the current directory when you return to QuickBASIC.
    The Load command will start from this directory, and when you quit QuickBASIC
        you will be in this directory.
    
    11. Using BRUN20.EXE with user libraries

        The runtime module BRUN20.EXE obtains the user library using the name the
        program module was compiled with. All independently-compiled program modules
        that will be linked together must have been compiled with the same user 
        library using the same name, or an error occurs at runtime.

    12. Using /l with nonreferenced libraries

        User libraries specified with the /l option are pulled into the
        executable file regardless of whether the program requires them.

    13. The user library search path

        If path information is provided with the qb command's /l option, as in
        
        qb progname /l \src\lib\mylib.exe

        no path search is performed. If the library is not in the specified location
        an error occurs. If no path information is provided, the current directory
        is searched, then the directory specified in the LIB environment variable.

    14. Using the IBM Advanced 101-key keyboard

        You cannot use the alternate arrow and cursor movement keys to select text.
        You can use them to move the cursor. To select text, use the cursor
        movement keys on the numeric keypad. (Note that the NumLock key must be
        off to use the numeric keypad's cursor movement keys.)

    15. Using the Tandy 1000 Personal Computer Keyboard

        The cursor keys on the Tandy 1000 keyboard cannot be used with
        QuickBASIC. You must use the numeric keypad to move the cursor 
        and select text. The keys are mapped as follows:

        Cursor Movement     Number
        ---------------     ------
            END               1
            DOWN              2
            PGDN              3
            LEFT              4
            RIGHT             6
            HOME              7
            UP                8
            PGUP              9

    16. Graphics mode statements

        A graphics adapter card is required if you are using the following 
        statements:

        CIRCLE
        COLOR (screen modes 1-10)
        DRAW
        GET (graphics)
        LINE
        PAINT
        PALETTE
        PCOPY
        PMAP
        POINT
        PRESET
        PSET
        PUT (graphics)
        VIEW
        WINDOW

    17. EGA card restrictions

        The EGA card does not support the COLOR statement border parameter. Using
        the border parameter causes unpredictable results.

        QuickBASIC does not support 43-line mode.

    18. Program capacity

        Because the Debug option generates extra code, extremely large programs 
        that are compiled with the Debug option may exceed the memory limits of 
        your computer.
            
    19. Object file size

        Programs compiled with the Debug option (the default) create larger
        object files than programs compiled without the Debug option.

    20. Using the PEN function when a mouse driver is present

        The mouse driver intercepts PEN function BIOS calls and redirects them to 
        the mouse. If you don't want to use the mouse as a lightpen, call mouse 
        function 14 to disable the mouse's lightpen emulation flag, which is 
        on by default. Mouse function 13 turns lightpen emulation back on. For 
        example, the following code turns mouse lightpen emulation off:

        CALL MOUSE(14,0,0,0)

        See your mouse manual for more information.

    21. Editing INPUT statement responses

        The input editor supplied with QuickBASIC is a line editor only. This 
        means you can move and edit only horizontally. Attempts to use the 
        UP, DOWN, PGUP and PGDN cursor keys produce a beep.

---

![MS QuickBASIC 2.00 (Disk 1)]({{ site.software.miscdisks.server }}/pcx86/lang/microsoft/basic/quickbasic/2.00/MS-QUICKBASIC-200-DISK1.jpg)
