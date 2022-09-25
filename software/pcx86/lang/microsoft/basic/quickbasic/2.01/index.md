---
layout: page
title: Microsoft QuickBASIC 2.01
permalink: /software/pcx86/lang/microsoft/basic/quickbasic/2.01/
redirect_from: /disks/pcx86/tools/microsoft/basic/quickbasic/2.01/
machines:
  - id: ibm5160-msdos320
    type: pcx86
    config: /machines/pcx86/ibm/5160/ega/512kb/machine.xml
    drives: '[{name:"10Mb Hard Disk",type:3,path:"/harddisks/pcx86/10mb/MSDOS320-C400.json"}]'
    floppyDrives: '[{boot:false},{}]'
    autoMount:
      A:
        name: MS QuickBASIC 2.01 (Disk 1)
      B:
        name: MS QuickBASIC 2.01 (Disk 2)
---

A machine with QuickBASIC 2.01 diskettes loaded in drives A: and B: is provided below,
along with [Directory Listings](#directory-of-ms-quickbasic-201-disk-1) of the original 360Kb diskettes.

{% include machine.html id="ibm5160-msdos320" %}

### Directory of MS QuickBASIC 2.01 (Disk 1)

     Volume in drive A has no label
     Directory of A:\

    BUG      BAS       397   2-17-86   3:34p
    CALLSHAP BAS       133   4-25-86  10:00a
    DEMO     BAS       211   6-10-86   9:47a
    EX       BAS       182   4-25-86  10:01a
    PPRINT   BAS     23149  12-01-86   1:57p
    QB       EXE    190528   1-16-87  11:45a
    INT86    ASM     17865  12-26-86   5:52p
    REMLINE  BAS     12913   6-19-86   7:12a
    SQUARE   BAS       164  12-04-86  12:11p
    TRIANGLE BAS       250   4-25-86  10:03a
    UPDATE   DOC      9187   1-13-87  12:32p
    TANDY    QBK      1973  11-23-86  11:31p
    ABSOLUTE ASM       728  12-26-86   5:46p
    README   DOC     24197   1-16-87   6:20a
           14 file(s)     281877 bytes
                           72704 bytes free

### Directory of MS QuickBASIC 2.01 (Disk 2)

     Volume in drive A has no label
     Directory of A:\

    BCOM20   LIB    178176   1-16-87  11:44a
    BRUN20   EXE     69454   1-16-87  11:44a
    BRUN20   LIB      5120   1-16-87  11:44a
    BUILDLIB EXE     45440   9-29-86   3:14p
    GWCOM    OBJ      2992   1-16-87  11:44a
    INT86    OBJ       520   1-10-87   5:32p
    PREFIX   ASM      1168   5-14-86  10:54a
    PREFIX   OBJ       410   5-14-86  12:11p
    SMALLERR OBJ       243   1-16-87  11:44a
    LINK     EXE     47896   3-14-86   3:16p
    ABSOLUTE OBJ       104   1-10-87   5:32p
           11 file(s)     351523 bytes
                            6144 bytes free

### README.DOC

        "README.DOC" File
        Release Notes for the MICROSOFT QuickBASIC Compiler
        (Version 2.01) for IBM(R) Personal Computers
        and Compatibles

        (C) Copyright Microsoft Corporation, 1986, 1987

    THIS FILE CONTAINS IMPORTANT INFORMATION CONCERNING VERSION 2.01 OF
    THE MICROSOFT(R) QUICKBASIC COMPILER.  PLEASE READ THE ENTIRE FILE
    VERY CAREFULLY BEFORE USING YOUR QUICKBASIC PRODUCT.

    This file is divided into three parts, as follows:

    PART    CONTENTS

        1   Information on three NEW features added to the
            Version 2.01 release:

            - Descriptive error messages when you compile
                using the separate compilation method.

            - Installable keyboard drivers for better
                support of the Tandy(R) 1000 and the IBM
                Advanced 101-Key Keyboards.
            
            - The ENTER key may now be used to select
                command buttons other than the default.

        2   Information about additions and changes to QuickBASIC
            made after the manual was printed.

        3   Additions and corrections to the QuickBASIC Version 2.0
            manual.

    For information on corrections to the software from version 2.00 to
    2.01, please refer to the UPDATE.DOC file on this disk.

    ===<Part 1: QuickBASIC V2.01 Enhancements>=========================

    1. Error Listings

    New to Version 2.01 are descriptive error messages that may appear
    when you compile with the separate compilation method (see Appendix D
    of the QuickBASIC Manual for more information on using the separate
    compilation method).     You can redirect these error messages to a file
    or device to get a printed copy of the errors encountered during
    compilation.

    EXAMPLES
        
    COMMAND LINE            ACTION
    ------------            ------

    QB TEST.BAS;    compile TEST.BAS and display any errors
                    encountered on the screen.

    QB TEST.BAS; > TEST.LST    Compile TEST.BAS and redirect any error
                                messages generated to the file TEST.LST.

    2. Machine-specific keyboards

    QuickBASIC Version 2.01 has been enhanced to allow installation of
    machine-specific keyboards.

    When invoked, QuickBASIC searches the entire path, beginning in the
    current directory, for a file named KEYBOARD.QBK.  If found, it is
    used as the keyboard definition; if not found, the default IBM
    keyboard is used.

    Since QuickBASIC Version 2.01 comes already installed for the
    standard IBM and IBM Advanced 101-Key Keyboard, most owners of
    IBM PCs and close compatibles need not worry about keyboard
    compatibility.

    However, owners of Tandy 1000s should rename the file TANDY.QBK
    (located on Disk 1) to KEYBOARD.QBK.

    Note that this keyboard installation only affects the QuickBASIC
    editor, and has no effect at runtime.

    3. Executing Command Buttons in Dialogs

    In QuickBASIC Version 2.00, pressing ENTER always executed the default
    command button, regardless of which button was highlighted. This
    feature has been enhanced in QuickBASIC Version 2.01. Pressing ENTER
    now executes the default button ONLY if another command button is not
    highlighted. For example, if the highlight is on the CANCEL button then
    pressing ENTER will execute CANCEL.  However, if the input focus
    (highlight) is an edit field or a checkbox then ENTER causes the default
    command button to be executed.

    ===<Part 2: Additional Information>===================================

    1. The QB.INI Initialization File

    QB.INI is an initialization file that QuickBASIC uses to set both the
    Options settings in the View menu and the Autosave command settings
    in the File menu.  Upon exiting QuickBASIC, if you have modified
    any of the Options settings or the state of the File menu Autosave
    command, these changes are written to QB.INI.  Note that QB.INI is
    not supplied on any of the product disks. It is created only when
    you change the Options or Autosave settings. If you use only the
    default settings, QB.INI is never created.

    When QB.INI is created, it is placed in the current directory. When
    QuickBASIC starts, it looks for QB.INI in the current directory, then
    in the locations specified by the PATH environment variable.

    2. Source-File Line Termination

    QuickBASIC 2.0 requires a CR-LF (carriage return-line feed) sequence at
    the end of each line. If only carriage returns are present, QuickBASIC
    reads the first 255 characters only, and continues without producing an error
    message. If only line feeds are present, QuickBASIC will appear to
    read the file correctly, but the last character of each line will be
    missing. If you use an editor that places only a CR or an LF at the
    end of a line, you need to modify your source files so they have
    the correct sequence at the end of each line. The following program
    examines the end of each line in a file and inserts a carriage return,
    line feed, or both, if needed.

        DEFINT A-Z
        cr = 13 : lf = 10
    More:
        CLS
        INPUT "File (.BAS) ", inpfile$
        ON ERROR GOTO NoFile
        NAME inpfile$ + ".BAS" AS inpfile$ + ".BAK"
        OPEN inpfile$ + ".BAK" FOR INPUT AS #1
        ON ERROR GOTO 0
        OPEN inpfile$ + ".BAS" FOR OUTPUT AS #2
        prevcr = 0
        WHILE NOT EOF(1)
        filechar$ = INPUT$(1, #1)
        IF ASC(filechar$) = cr THEN
        prevcr = 1
        ELSEIF ASC(filechar$) = lf AND prevcr THEN
        prevcr = 0
        ELSEIF ASC(filechar$) = lf AND NOT prevcr THEN
        PRINT #2, CHR$(cr);
        ELSEIF prevcr THEN
        prevcr = 0
        PRINT #2, CHR$(lf);
        END IF
        PRINT #2, filechar$;
        WEND
        CLOSE
        PRINT "Another file (Y/N)?"
        more$ = INPUT$(1)
        IF more$ = "y" OR more$ = "Y" THEN
        GOTO More
        ELSE
        SYSTEM
        END IF

    NoFile:
        number = ERR
        IF number = 53 THEN
        CLS
        PRINT "No such file. Press any key to continue."
        z$ = INPUT$(1)
        RESUME More
        ELSE
        ON ERROR GOTO 0
        ERROR number
        END IF

    3. Compilation Errors

    When an error is detected during compilation, code generation stops. This
    allows for faster compilation, but has the side effect that some errors may
    be reported that are not errors. When the original error is corrected,
    these side-effect errors go away. For example, the statements

    FOR I = 1
        .
        .
        .
    NEXT I

    generate two errors, "Missing TO" and "NEXT without FOR". When
    the FOR statement is changed to read "FOR I = 1 to 10", both errors
    are corrected.

    4. COMMAND.COM, the SHELL Statement and the Shell Command

    QuickBASIC requires COMMAND.COM before it can execute either a SHELL
    statement or the Shell command from the File menu. QuickBASIC first
    looks for COMMAND.COM in the directory specified in the COMSPEC
    environment variable, then in the current directory.

    5. Using SHELL in a Subroutine

    The SHELL statement does not compress memory. If not enough contiguous
    memory is available, (for example, if many CHAIN statements have been
    executed, or several dynamic arrays were allocated then erased), a SHELL
    statement may fail with an "Out of memory" memory error.

    6. Using the SHELL Statement with DOS 2.X

    If you are using a 2.X version of DOS, programs that contain SHELL
    statements may not exit correctly. This is due to a known problem in DOS
    2.X. The problem occurs when DOS reloads the transient portion of the
    command processor into high memory.

    To exit QuickBASIC after executing an in-memory program that contains
    SHELL statements, when the program finishes running, choose Shell from the
    File menu, then type "exit" at the DOS prompt.

    When standalone executable programs exit, the message "Invalid COMMAND.COM"
    may appear. If so, you must restart your system. If you compile using
    BRUN20.EXE the program, in most cases, exits properly.

    Another solution is to upgrade your DOS version to 3.X.

    7. Running Terminate-and-Stay-Resident Programs from the File menu Shell

    Do not run terminate-and-stay-resident programs while executing the Shell
    command from the File menu. When a Shell command is executed, QuickBASIC
    is compressed into the smallest memory possible. The terminate-and-stay-
    resident program occupies memory required by QuickBASIC, making it
    impossible to compile or run a program, or do anything that allocates
    memory.

    8. Changing directories from the File menu Shell Command

        If you change directories after executing the Shell command from the File
        menu, this directory is the current directory when you return to QuickBASIC.
        Subsequent Load commands will use this as the default directory, and
        when you quit QuickBASIC, you will be in this directory.

    9. Notes on using User Libraries

        The run-time module BRUN20.EXE obtains the user library using the name the
        program module was compiled with. All independently compiled program modules
        that will be linked together must have been compiled with the same user
        library using the same name, or an error occurs at run time.

        CHAINing from a program that has a user library loaded REQUIRES that
        the CHAINed-to program is compiled with the same user library.

    10. Using /l with Nonreferenced Libraries

        User libraries specified with the /l option are pulled into the
        executable file regardless of whether the program requires them.

    11. The User-Library Search Path

        If path information is provided with the qb command's /l option, as in

        qb progname /l \src\lib\mylib.exe

        no path search is performed. If the library is not in the specified location
        an error occurs. If no path information is provided, the current directory
        is searched, then the directory specified in the LIB environment variable.

    12. Graphics-Mode Statements

        A graphics-adapter card is required if you are using any of the following
        statements:

        CIRCLE                           PMAP
        COLOR (screen modes 1-10)        POINT
        DRAW                             PRESET
        GET (graphics)                   PSET
        LINE                             PUT (graphics)
        PAINT                            VIEW
        PALETTE                          WINDOW
        PCOPY

    13. EGA-Card Restrictions

        The EGA card does not support the COLOR statement's border parameter. Using
        the border parameter causes unpredictable results.

        QuickBASIC does not support 43-line mode.

    14. Program Capacity

        Because the Debug option generates extra code, extremely large programs
        that are compiled with the Debug option may exceed the memory limits of
        your computer.

    15. Object-File Size

        Programs compiled with the Debug option (the default) create larger
        object files than programs compiled without the Debug option.

    16. Using the PEN Function when a Mouse Driver is Present

        The mouse driver intercepts the PEN function's BIOS calls and redirects
        them to the mouse. If you don't want to use the mouse as a lightpen, call
        mouse function 14 to disable the mouse's lightpen emulation flag, which is
        on by default. Mouse function 13 turns lightpen emulation back on. For
        example, the following code turns mouse lightpen emulation off:

        CALL MOUSE(14,0,0,0)

        See your mouse manual for more information.

    17. Editing Responses to the INPUT Statement

        The input editor supplied with QuickBASIC is a line editor only. This
        means you can move and edit only horizontally. Attempts to use the
        UP, DOWN, PGUP and PGDN cursor keys produce a beep.

    18. Disk-Error Messages

        Whenever you get a disk-error message, such as "Write protect violation",
        DO NOT change to a different disk before selecting "RETRY".     If you want
        to retry with a different disk, select the "Cancel" button, replace the
        disk, and compile again.

    19. INT86.ASM, INT86.OBJ, ABSOLUTE.ASM, ABSOLUTE.OBJ

        In QuickBASIC Version 2.00 there was USERLIB.ASM and the
        assembled object, USERLIB.OBJ.  USERLIB.ASM has been split into two
        files, INT86.ASM and ABSOLUTE.ASM.  If you are using LINK.EXE to link
        user libraries to BRUN20.LIB, you should use only INT86.OBJ (the
        symbol "ABSOLUTE" is already contained in BRUN20.LIB).

        CALL ABSOLUTE is considered an external subroutine by the QuickBASIC
        compiler.

        If you are creating a new user library to incorporate your own
        assembly language routines, you will need to use both INT86.OBJ 
        and ABSOLUTE.OBJ when creating the new user library.



    ===<Part 3: Corrections to the Manual>======================================

    Page    Correction
    ----    ----------

    65  In the top paragraph, you should use ALT-F8 to exit animate
        mode, as you are in animate mode when you enter the example.

    71  In the syntax line at the bottom of the page, the "c:buffersize"
        option should be preceded by a forward slash, as follows:

        /c:buffersize

    76  In the first paragraph after Figure 4.2, the sentence "If you
        are in a subdirectory..." should state that the entry ".."
        appears in the "upper-left corner", not the "upper-right".

    78  Binary files cannot be loaded into QuickBASIC. The note in the
        middle of the page should read:

        QuickBASIC accepts only ASCII files. If you attempt to load a
        binary file, you will get an error.

    93  In section 4.4.3.11, "Exe," it should be noted that the executable
        files created using this method require the support of the BRUN20
        run-time module in order to execute.

    120  The first line of this example (DEFINT I-L) should be changed
        to DEFINT I-S so as to execute correctly.

    152  The stack is preset to 768 bytes, not 512.

    161  In the example under Section 9.2.2, there should not be an underscore
        character (_) following the FIELD variable D$.

    162  String constants can be ASCII characters in the range 32 to 126.
        (127 is the DEL character)

    172  The discussion of overflow and division by zero is misleading.  If you
        are running from the QuickBASIC user interface (editor), and the DEBUG
        option is on, when the error occurs the application terminates and you
        are returned to the editor, with the cursor positioned on the line where
        the division by zero occurred.     If you do not have the DEBUG option
        selected, the application is terminated; however, when returned to the
        editor, the cursor is not positioned on the offending line.

    183  In Table 10.1, in the column "May Require Modifying Interpreter
        Programs," you should add the statements PEEK, POKE, and DEFSEG,
        since the memory maps of the interpreter and the compiler are different.
        For example, programs that read from or write to memory locations in
        the RAM-resident portion of the interpreter do not work in the
        compiler environment since the interpreter is not present.

    188  In Section 10.3.2, the $INCLUDE metacommand, restriction 2) is in
        error.    Included files may contain END statements.

    193  In Table 10.6, you should add the statements PEEK, POKE,
        and DEFSEG, since the memory maps of the interpreter and the compiler
        are different.  For example, programs that read from or write to memory
        locations in the RAM-resident portion of the interpreter do not work in
        the compiler environment since the interpreter is not present.

    200  In the Action section for the BLOAD command, it states that
        BLOAD can take input from "any input device."    This is not true,
        as the BLOAD command does not take input from the "KYBD:" device.

    222  The EGA card does not support the COLOR statement's border parameter.
        If you have an EGA card installed on your system, using the border
        parameter causes unpredictable results.

    229  The list of nonexecutable statements should also include the
        DATA statement.

    232  The "VO1" variable in the third line from the bottom should be changed
        to read as follows:

            DENS=W/VOL

    235  The last line in the example should be "LOCATE Y,X" not
        "LOCATE X,Y".

    265  The syntax for the ERASE statement should have a comma between
        the array names, as shown here:

            ERASE arrayname [,arrayname...]

    275  In the FIELD statement's Example 2, the order of arguments is reversed
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

        The FIELD statements in the two examples shown under Example 4 should
        be changed to read as follows:

            FIELD #1, RECLENGTH% AS OFFSET$, SIZE% AS A$(I%)

            and

            FIELD #1, 15 AS A$(1), 10 AS A$(2),..., 8 AS A$(14)

    283  In the FRE function example, the first line of the example should be
        a $DYNAMIC metacommand, as follows:

        '  $DYNAMIC
        PRINT "Before dimensioning arrays:   " FRE(""),FRE(0),FRE(-1)
        .
        .
        .

    286  There is a missing parenthesis in the formula for computing the GET
        graphics statement's array size. There should be three left parentheses
        after the INT keyword, as follows:

        4 + INT(((x2 - x1 +1) * bits-per-pixel + 7)/8) * ((y2 - y1) +1)

    297  The two examples comparing the single-line and block forms of the
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

    299  The SUB/END SUB syntax is missing from the example.     The
        following line should be added to the beginning of the example:

            SUB KeyboardAction(Timelimit%, Timeout%) STATIC

        The RETURN statement should be replaced by END SUB.

    313  The last sentence of the description of Example 2, after
        the semicolon, should read: "The last line displays the new
        soft-key values."

    314  The last entry in the table for the values of N, should be
        15 - 20, rather than 15 - 25.

    315  The table listed on this page is incomplete.  In addition to
        the values listed, you must also take into account the state
        of the NUM LOCK and CAPS LOCK keys.  For NUM LOCK active you
        should add the value &H20, and for CAPS LOCK active you should
        add the value &H40 to the keyboard flag.

    317  The second comment in the example program should read:

        ' DOWN key will now be trapped

    325  The STEP option example requires a hyphen before the STEP keyword, as
        follows:

        LINE -STEP (10,5)

        The phrase following the example should read:

        "draws a line from (10,10) to the point with x-coordinate
        10+10 and y-coordinate 10+5, or (20,15)."

    327  The Action for LINE INPUT should read:

        Inputs an entire line (up to 255 characters) to a string variable...

    338  The Remark for LOF should read:

        When a file is opened in any mode, LOF returns the size of the file in
        bytes.

    348  In the description of the example it should be noted that
        line 100 converts the single-precision variable AMT to a
        4-byte string, then left justifies that string in an eight-byte
        field.

    353  Delete the last sentence on this page.

    369  Add the following note concerning the ACCESS clause:

        The ACCESS clause works in an OPEN statement only if you are using
        versions of DOS that support networking (3.0 or later). In addition,
        you must run the SHARE.EXE program (or the network startup program must
        run it) to perform any locking operation. Earlier versions of DOS will
        return an "Advanced Feature" error if ACCESS is used with OPEN.

    375  The second sentence under the Action heading for the LF option should be
        changed to read:

        When LF is specified, a line-feed character (0AH) is automatically sent
        after each carriage-return character (0DH).

    388  The last sentence in the REMARKS section should be deleted. The
        argument to the PEEK statement should be a single-precision
        variable in the range 0-1,048,575.

    396  The variable in the first line of PLAY statement's Example 1 should be
        SCALE$, not SCALES$:

        SCALE$ = "CDEFGAB"

    410  In the example, all references to the file STORINVENT should be changed
        to INVENT.DAT. The file argument to both OPEN statements should be
        the same file, INVENT.DAT.

    418  The first entry in the "Arguments" column should be (x,y), not
        (x1,y1).

    420  Images cannot be scaled with the PUT graphics statement. Only one set
        of x,y coordinates can be specified as arguments to PUT. All text
        after "Because you can specify..." in the second paragraph, and all of
        the following paragraph, should be ignored.

    424    The second sentence in the Remarks section for the READ statement should
        be changed to read as follows:

        READ statements assign DATA-statement values to variables on a
        one-to-one basis.

    448  In the description of the SCREEN statement's arguments, the first line
        under the SCREEN 2 heading should refer to high-resolution graphics
        instead of medium-resolution graphics, as follows:

        * 640 x 200 pixel high-resolution graphics

        In addition, the text format for SCREEN 1 should be 40 X 25, and
        the text format for SCREEN 2 should be 80 X 25.

    474  The example for the STR$ function should read as follows:

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

    482  In the example, the input to the prompt "Pattern to be searched
        for?" must be SUB (not "sub") in order to get the output shown.

    525  Add DEBUG, OFF, and RANDOM to the list of reserved words.
        Delete the dollar-sign ($) character at the end of GOTO.

    535  Batch files created for versions of QuickBASIC before 2.0 require
        modification. In older batch files, "bascom" should be "qb".

    536  If you are using a version of DOS earlier than 3.0, use the PATH command
        instead of the SET command to define the PATH variable. Using SET under
        earlier versions of DOS can cause the PATH variable to work incorrectly
        for some path specifications that contain lowercase letters.

    546 &  The stack is preset to 768 bytes, not 512.
    547

    566  The third bulleted remark ("A USR function...") should be deleted.

    570  The explanation for the error message "Too many files" should read:

        This error most commonly occurs when an attempt is made to open a
        number of files that exceeds the limit set by the FILES= parameter in
        the CONFIG.SYS file. It also occurs when the per-directory file limit
        is exceeded by an attempt to create a new file with the SAVE or OPEN
        statement. Refer to your DOS manual for the number of files permitted
        in a directory.
    
