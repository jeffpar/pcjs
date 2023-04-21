---
layout: page
title: "PC-SIG Diskette Library (Disk #578)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0578/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0578"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "C TUTOR 2 OF 2 (ALSO 577)"

    C TUTOR is a comprehensive instructional course for the C programming
    language which assumes the user has a moderate amount of programming
    experience.
    
    The C source code is included for each of several examples discussed
    throughout the tutorial.  These examples are meant to be studied and
    then compiled and run by the student.  The examples are short and focus
    on specific topics.
    
    All of the points of C language, including properly-structured
    programming techniques, are covered at the elementary level.  The
    description and instruction are applicable to most compilers with some
    slight differences.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0578.TXT

{% raw %}
```
Disk No:  578                                                           
Disk Title: C Tutor 2 of 2 (577 1st disk in set)  (Disk 2 of 2)         
PC-SIG Version: S2.2                                                    
                                                                        
Program Title: C Tutor                                                  
Author Version: 2.4                                                     
Author Registration: $15.00 to $39.95.                                  
Special Requirements: None.                                             
                                                                        
C TUTOR is a comprehensive instructional course for the C programming   
language which assumes the user has a moderate amount of programming    
experience.                                                             
                                                                        
The C source code is included for each of several examples discussed    
throughout the tutorial.  These examples are meant to be studied and    
then compiled and run by the student.  The examples are short and focus 
on specific topics.                                                     
                                                                        
All of the points of C language, including properly-structured          
programming techniques, are covered at the elementary level.  The       
description and instruction are applicable to most compilers with some  
slight differences.                                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## VC.DOC

{% raw %}
```
              The Visual Calculator - Version 1.10

        The visual calculator was written to be used for quick
     calculations of the variety that would ordinarily be done
     with a hand held calculator. There is no allowance for
     programming loops, or indirect variables, or any of the
     other facilities of a modern programming language. There
     are no complications either, and this program should not
     require more than a few minutes for the experienced com-
     puter user to learn to use, and only slightly longer for
     the person inexperienced with computers.

        It is suggested that you slowly run through the tutor-
     ial first, performing the operations suggested, then read
     the following comments for a description of the visual
     calculator. This program is intended to be much more comp-
     rehensive than the little on-screen calculators that have
     become popular, but it is not memory resident. Due to the
     expected future popularity of such programs as "Windows",
     this program can be as convenient as the present memory
     resident programs.


                The Visual Calculator Tutorial

     1. Copy all files to another working diskette with your
        operating system or to a single directory on your hard
        disk.

     2. Type VC <return>
           You will get the beginning screen containing the vari-
        able boxes and the help box at the top. The center of the
        screen contains the transcript box, and at the bottom you
        will find the Input box.

     3. Type A = 123.45 <return>
           You will find that the value is displayed in the top
        box and the value will also be displayed at the left of
        the input equation in the transcript box.

     4. Type B = SQRT(A) <return>
           You will find the square root of A displayed in both
        places next to the variable B. You may have noticed that
        the system doesn't care if you use upper or lower case,
        it forces it to upper case. You now have defined some
        values for the variables A and B.

     5. Type D = 1.23*SIN(SQRT(1.2345 + B*B/A)) <return>
           Spaces between variables don't matter and you can put
        them in where you desire to make it look nice. If you get
        an error message, simply use the left and right cursor
        keys along with the delete key to fix up the error and
        hit the return again. You don't even have to be at the
        end of the line to hit the return.

     6. Hit the F6 key then <return>
           The F6 requests a file to be read in and if you don't
        specify a filename, it reads in the file named "HELP".
        This would be a good place to store a list of your other
        files in the same manner as this file.

     7. Hit the F6 key then type AMORT <return>
           This reads in the file named "AMORT" and calculates
        each line as it reads it in. Notice that it also changed
        the names of the variables that it uses to make them more
        meaningful to you.

     8. Type PRINC = 30000 <return>
           This changes the amount of the loan. We would like to
        recalculate the payment which we will in the next few steps.

     9. Move the arrow up to the line that starts "PMNT=..." by
        using the up and down arrow keys. When the arrow is point-
        ing at the line in question,...

    10. Hit the F9 key.
           This moves the line pointed at, by the little arrow,
        into the input box where it can be modified or used again
        as is.

    11. Hit the <return> key.
           This will recalculate the payment based on the new
        principal and the old interest rates and time of repay-
        ment. These could also be changed and the payment
        recalculated.

    12. Make sure your printer is ready and hit the F3 key.
           This will cause a "Print on" message to be printed on
        your printer and a little "Print" message to be displayed
        in the upper right of your screen. All equations and the
        results will be printed for a hardcopy of your calculating
        session.

    13. Hit the F6 key again
           You will get another prompt for a file name.

    14. Type PAYMENT <return>
           This file will be read in that will give you the results
        of your mortgage after the first payment. The results will
        also be printed out.

    15. Hit the F6 key again and <return>
           The last file read in will be reused again and the result
        of making the second payment will be displayed on the moni-
        tor and the printer.

    16. Repeat step 15 three or four times.

    17. Hit the F1 key.
           A help screen will appear describing the various math
        functions available. They can be nested to whatever level
        you desire.

    18. Hit the F2 key.
           A help screen will appear with a very brief description
        of the system functions available.

    19. Hit the "Home" key.
           You will be immediately transported to the very top of
        the transcript where the welcome message was originally
        seen. The Pgup, Pgdn, Home, and End keys will get you
        through the transcript window very quickly.

    20. Move the little arrow to the line that starts "# A-PRINC",
        and hit the F4 key once.
           You will see that the asterisk appears in front of the
        line. This will "mark" the line. Continuing to hit the F4
        key will toggle the asterisk on and off.

    21. Move the arrow to the line that starts "# E-EQUITY" and mark
        this line too.

    22. Hit the F5 key
           The system is now prompting you for a file name to
        output to.

    23. Type STUFF <return>
           This is simply a filename. Any valid filename could be
        used. All lines in the transcript box that are "marked"
        will be output to the file "STUFF".

    24. Hit the F6 key and type STUFF <return>
           All of the lines that were just output will be read in
        and all calculations will be done.

    25. Hit the F3 key if the printer is still on.

    26. Hit the F6 key and <return>
           The file will be read in again without printing.

    27. Hit the F10 key and answer the prompt with Y to end the
        session.

    28. Type VC <return> again to restart the program.

    29. Hit the F6 key, type TEST <return>
           A file with 50 lines will be read in and all calcu-
        lations performed as an example of the kinds of equations
        that can be evaluated.

    30. Type the following; # I-D J-O K-H L-X <return>
           This tells the system that we want the variable "I" to
        print out in Decimal notation, the variable "J" to print
        out in Octal notation, and "K" and "L" to print out in
        HeXadecimal notation. (Note - the # must be in the first
        column.)

    31. Type I = 12345 <return>
           The variable I will be displayed in all three notations
        in the top box and in decimal notation in the transcript
        box.

    32. Type J = 12345 <return>
           The variable J will be displayed in Octal notation in
        the transcript box and on the printer if it is turned
        on and ready.

    33. Type K = 12345 <return>
           The variable K will be displayed in Hex notation in the
        transcript box.

    34. Type I = 012345 <return>
           The value of I is read in as an octal value due to the
        leading zero, but is still displayed as a decimal value.

    35. Type J = 0X12345 <return>
           The value of J is read in as a hexadecimal value due to
        the leading 0X.

    36. Type M = 0XFFFF <return>
           The variable M is read in as Hexadecimal and displayed
        in all three formats in the top box, but as decimal in the
        transcript box. The default display for the integers is
        decimal.

    37. Type I = SQRT(48) <return>
           The square root is calculated using 15 significant
        digits and the result is truncated to the next lower
        value. All calculations are done this way and the result
        is truncated to the integer value before display.

    38. Type A = FACT(170)/FACT(169) - 170 <return>
           The very small result will indicate to you a measure
        of the accuracy of calculations. It may not be apparent
        to you that we are using a factorial function. Calculate
        the value of FACT(170) to get an idea of the dynamic
        range available with this system.

    39. Hit the F10 key and answer the prompt with Y.

    40. Restart the program and try some of your favorite math
        exercises.


                         Additional Comments


     1. Files on the distribution disk.

        VC.DOC - The file you are reading.

        VC.EXE - The executable file for the Visual Calculator.

        HELP - The users index of files.

        AMORT - The loan amortization equations.

        PAYMENT - The monthly payment calculations.

        TEST - A group of 50 "nonsense" equations.


     2. Inputting equations.

           All equations are typed into the input box in a normal
        mathematical expression. Only single valued expressions
        can be evaluated, no simultaneous equations can be solved
        with this system.

           To raise "A" to the power of "B", use;
        C = EXP(B*LOG(A))  $ any variables can be used

           A dollar sign anywhere in a line renders the remainder
        of that line as a comment only.

           Nesting is allowable to any depth but the entire expres-
        sion must fit in the input window. Longer expressions must
        be broken down into smaller statements.

           The variables "I" through "J" can be mixed in with the
        variables "A" through "F" in any manner. The "I" variables
        are truncated after evaluation so can only be used to
        store integer values, but that would be acceptable in many
        cases, such as the original value of the loan in the above
        example.


     3. Naming variables

           In order to make the equations easier to read, the names
        of the variables "A" through "F" can be changed to any
        names you like with up to 6 characters. The first must be
        alphabetic and the rest can be alphabetic or numeric. To
        change the names, use the # sign in the first column of the
        statement and any order of variable name groups. A variable
        group is composed of a variable name "A" through "F", then
        a minus sign, and finally the new name with no blanks any-
        where in the group. Any number of blanks can be used between
        the groups, and you can put as many as you like on one input
        line, and additional groups on other lines.

           Intermixed with the above, or placed on their own input
        line, you can put as many "base" groups as you like for the
        variables "I" through "N". A base group consists of the
        variable name, a minus sign, and one of the letters, "D",
        "O", "H", or "X".

           If, after naming the variables, you wish to rename them
        to something else, the original names are used for the new
        name changes. Thus if "A" were named "PLACE" and you wished
        to rename it to "WHERE" the proper method would be to use
        "# A-WHERE".


     4. Limitations

           This version of the Visual Calculator has a limit of
        approximately 800 lines in the transcript box. That should
        be enough for most applications. If you need more, I would
        suggest you write the program in a high level language.

           The limit of numbers is about ten to the plus or minus
        power of 308. Of course both positive and negative numbers
        can be used everywhere. The limit for the "I" variables is
        about 16 million, and can only be zero or positive. The
        exact number in 2 to the 24th power minus 1. It is the
        number displayed in the variable "N" when you load the
        system.

           The biggest limitation of the system is the limit of your
        own creativity. It is up to you to use it in a productive
        manner or simply to allow it to collect dust like so many
        of your other programs. I might add that I also have many
        dust collectors that I have failed to learn to use.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0578

     Volume in drive A has no label
     Directory of A:\

    AMORT              136  11-10-89  12:00p
    ANYFILE  C         640  11-10-89  12:00p
    BACKWARD C         763  11-10-89  12:00p
    BETTERIN C         784  11-10-89  12:00p
    BIGARRAY C         904  11-10-89  12:00p
    BIGDYNL  C        1859  11-10-89  12:00p
    BITFIELD C        1103  11-10-89  12:00p
    BITOPS   C        1494  11-10-89  12:00p
    BREAKCON C         829  11-10-89  12:00p
    CHARCLAS C        1769  11-10-89  12:00p
    CHAROUT  C         800  11-10-89  12:00p
    CHRSTRG  C         531  11-10-89  12:00p
    COMBINE  C         367  11-10-89  12:00p
    COMMENTS C         466  11-10-89  12:00p
    COMPARES C        1737  11-10-89  12:00p
    CRYPTIC  C        1637  11-10-89  12:00p
    DATA     C       15473  11-10-89  12:00p
    DEFIN    H        2636  11-10-89  12:00p
    DEFINE   C         772  11-10-89  12:00p
    DOSEX    C        9459  11-10-89  12:00p
    DOWHILE  C         412  11-10-89  12:00p
    DUMBCONV C         906  11-10-89  12:00p
    DYNLINK  C        2534  11-10-89  12:00p
    DYNLIST  C        1666  11-10-89  12:00p
    ENUM     C         744  11-10-89  12:00p
    FILE     C       10273  11-10-89  12:00p
    FILE0578 TXT      2073   1-02-90   6:16p
    FIRSTEX  C         119  11-10-89  12:00p
    FLOATSQ  C        1297  11-10-89  12:00p
    FLOATSQ2 C        1387  11-10-89  12:00p
    FORLOOP  C         455  11-10-89  12:00p
    FORMOUT  C         953  11-10-89  12:00p
    FUNCPNT  C        1138  11-10-89  12:00p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694   1-27-89   3:42p
    GOODFORM C         310  11-10-89  12:00p
    GOTOEX   C        1737  11-10-89  12:00p
    HELP               169  11-10-89  12:00p
    IFELSE   C         931  11-10-89  12:00p
    INMEM    C         795  11-10-89  12:00p
    INTARRAY C         760  11-10-89  12:00p
    INTASIGN C         779  11-10-89  12:00p
    INTIN    C         528  11-10-89  12:00p
    LIST     C        1666  11-10-89  12:00p
    LIST     EXE      4800  11-10-89  12:00p
    LISTF    C        6707  11-10-89  12:00p
    LOTTYPES C        2195  11-10-89  12:00p
    MACRO    C        1939  11-10-89  12:00p
    MORTYPES C         776  11-10-89  12:00p
    MULTIARY C        1147  11-10-89  12:00p
    NESTED   C         998  11-10-89  12:00p
    ONEINT   C         230  11-10-89  12:00p
    PASSBACK C        1550  11-10-89  12:00p
    PAYMENT            107  11-10-89  12:00p
    POINTER  C         612  11-10-89  12:00p
    POINTER2 C        1069  11-10-89  12:00p
    PRINTALL BAT      1749  11-10-89  12:00p
    PRINTDAT C         762  11-10-89  12:00p
    READ     ME       4514  11-10-89  12:00p
    READCHAR C        1125  11-10-89  12:00p
    READGOOD C         618  11-10-89  12:00p
    READLINE C        1087  11-10-89  12:00p
    READTEXT C         609  11-10-89  12:00p
    RECURSON C         862  11-10-89  12:00p
    SCOPE    C        1744  11-10-89  12:00p
    SHIFTER  C        1536  11-10-89  12:00p
    SIMPLEIO C         621  11-10-89  12:00p
    SINGLEIO C         563  11-10-89  12:00p
    SPECIAL  C        1406  11-10-89  12:00p
    SQUARES  C         893  11-10-89  12:00p
    STRINGIN C         602  11-10-89  12:00p
    STRINGS  C         875  11-10-89  12:00p
    STRUCT   DEF      1122  11-10-89  12:00p
    STRUCT1  C         793  11-10-89  12:00p
    STRUCT2  C        1236  11-10-89  12:00p
    STRUCT3  C        1343  11-10-89  12:00p
    SUMSQRES C        1139  11-10-89  12:00p
    SWITCH   C        1038  11-10-89  12:00p
    TEMPCONV C        1814  11-10-89  12:00p
    TEST              1154  11-10-89  12:00p
    TEST     BAT       617  11-10-89  12:00p
    TRIVIAL  C          14  11-10-89  12:00p
    TWOWAY   C         881  11-10-89  12:00p
    UGLYFORM C         207  11-10-89  12:00p
    UNION1   C         762  11-10-89  12:00p
    UNION2   C        1957  11-10-89  12:00p
    UPLOW    C        1372  11-10-89  12:00p
    VC       C       15299  11-10-89  12:00p
    VC       DOC     12792  11-10-89  12:00p
    VC       EXE     34024  11-10-89  12:00p
    VIDEO    C       12235  11-10-89  12:00p
    WHATNEXT C        3506  11-10-89  12:00p
    WHILE    C         453  11-10-89  12:00p
    WRTMORE  C         173  11-10-89  12:00p
    WRTSOME  C          63  11-10-89  12:00p
    CH02_1   C          95  11-10-89  12:00p
    CH02_2   C         195  11-10-89  12:00p
    CH03_1A  C         277  11-10-89  12:00p
    CH03_1B  C         301  11-10-89  12:00p
    CH03_1C  C         305  11-10-89  12:00p
    CH03_2   C         602  11-10-89  12:00p
    CH04_1   C         348  11-10-89  12:00p
    CH04_2   C         434  11-10-89  12:00p
    CH04_3   C         257  11-10-89  12:00p
    CH05_1   C        1825  11-10-89  12:00p
    CH05_2   C         318  11-10-89  12:00p
    CH05_3   C         738  11-10-89  12:00p
    CH06_1   C         661  11-10-89  12:00p
    CH07_1   C         866  11-10-89  12:00p
    CH07_2   C         755  11-10-89  12:00p
    CH08_1   C         705  11-10-89  12:00p
    CH08_2   C         710  11-10-89  12:00p
    CH09_1   C         496  11-10-89  12:00p
    CH10_1   C         705  11-10-89  12:00p
    CH10_2   C         557  11-10-89  12:00p
    CH10_3   C         739  11-10-89  12:00p
    CH11_1   C        1051  11-10-89  12:00p
    CH11_2   C        1078  11-10-89  12:00p
    CH12_1   C         834  11-10-89  12:00p
    CH12_2   C        1226  11-10-89  12:00p
          120 file(s)     228291 bytes
                          952320 bytes free
