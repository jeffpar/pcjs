---
layout: page
title: "PC-SIG Diskette Library (Disk #1344)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1344/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1344"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC PRO-GOLF"

    PC PRO-GOLF is a game that graphically depicts in four colors an actual
    golf course with water-hazards, sand-bunkers, wooded areas, buildings,
    roads, etc.  With each stroke the player may watch the course of the
    ball and see where it lands.  When your ball comes within a certain
    distance from the hole, the program will display a close up view of the
    hole so that you may putt the ball in.
    
    Penalty-strokes are added under the correct conditions and an updated
    score-card is available for review at any time, as are the help-screen
    and club-values list.  An unfinished game may be saved for resumption at
    a later time.
    
    Getting the program up and running is made easy by a very sophisticated
    installation program that was smart enough to know that we were testing
    this program on a Tandy SX1000!  Also included is the printable 10-page
    manual, and AMHERST, another complete 18-hole course.  Fore!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CONVERT.BAS

{% raw %}
```bas
20 CLS: PRINT"This utility CONVERTS PC-Pro-GOLF Data Files (version 2.02 and earlier) to run"
25 PRINT"under Version 4.0. If you DO NOT wish to convert those files at this time,"
30 PRINT"press <Esc> now.": PRINT: PRINT"To continue, have a new FORMATTED diskette handy and the OLD Data Disk in "
35 PRINT"Drive A and press <Enter>."
40 A$=INKEY$: IF A$="" THEN 40
45 IF A$=CHR$(27) THEN CLS: END
50 IF A$=CHR$(13) THEN 60
55 GOTO 40
60 CLS: PRINT"Enter the NAME of the Course (Only the NAME, NOT the extender)"
65 PRINT"   Example...": PRINT"              AMHERST.H1   ...WRONG"
67 COLOR 15,0: PRINT"              AMHERST      ...RIGHT":PRINT: COLOR 7,0
70 INPUT N$
100 SCREEN 1,0: COLOR 0,1: DEF SEG=&HB800
120 FOR K=1 TO 18
125 K$=STR$(K): K$=RIGHT$(K$,LEN(K$)-1)
130 BLOAD"a:"+N$+".h"+K$,0
140 BSAVE"b:"+N$+".u"+K$,320,4880
150 BSAVE"b:"+N$+".l"+K$,8512,4800
160 NEXT K
200 DIM CP$(19,7)
300 ON ERROR GOTO 395
305 OPEN"I",#1,"a:course.dat"
310 INPUT#1,TITLE$,CPAR
315 FOR X=1 TO CPAR: FOR Y=1 TO 7
320 INPUT#1,CP$(X,Y)
325 NEXT Y: NEXT X
330 CLOSE#1
355 OPEN"O",#1,"b:course.dat"
360 PRINT#1,TITLE$","CPAR
365 FOR X=1 TO CPAR: FOR Y=1 TO 7
370 PRINT#1,CP$(X,Y)
375 NEXT Y: NEXT X
380 CLOSE#1
390 GOTO 400
395 IF ERR=(53) THEN RESUME 500: ELSE PRINT ERR: END
400 CLS: PRINT "Conversion Completed": SYSTEM
500 BEEP: PRINT"COURSE.DAT file not found. This file must be copied onto the new data disk."
```
{% endraw %}

## ENTRE.TXT

{% raw %}
```
PC Pro-GOLF v4.31  January, 1990
------------------------------------------------------------------------------


        Play PC Pro-GOLF as our guest. There are major changes from
                earlier versions. The game system and the AMHERST
                Golf Course are both on this diskette.

        There are a few facts you should know.
                Though this is COMMERCIAL SOFTWARE, it is provided to you
                in this form (almost free) so that you may decide, before
                spending any more money, IF YOU LIKE IT!
                If you DO like it, then we encourage you to register as
                a user. ($20.00, American). Foreign Orders: add $3.00.

        IF YOU REGISTER, What do you GET..?
                1. Another complete 18-HOLE course, ready to play.
                2. The GOLF-COURSE CONSTRUCTION SET to design and build
                   your own golf courses which are then "playable" with
                   PC Pro-GOLF. (The same one used to build this course.)
                3. Notification of major additions and revisions to both
                   PC Pro-GOLF and GOLF COURSE CONSTRUCTION SET.
                4. The latest version of PC Pro-GOLF.

        IMPORTANT INFORMATION:

             1. Before doing anything else, make a BACK-UP copy of
                this disk. The best method is to use DISKCOPY, which
                can be found on your DOS system diskette.

             2. Print out the INSTRUCTIONS for using PC Pro-GOLF. To
                do this, insert the disk into drive A, turn on your
                printer, and type...

                        PRINTMAN   (and press <Enter>)

                There are 10-pages of notes and references. Once you
                have played a few rounds, you will no longer need to
                refer to the instructions.
                If you do not have a printer, you may read from the
                screen by typing...

                        READMAN   (and press <Enter>)

        PLEASE read the instructions carefully before attempting to 
        RUN the Main Programs on this disk.

        RUNNING PC Pro-GOLF:

                To run the PC Pro-GOLF game:
                After completing these pages of introduction,
                make sure you have the DOS-prompt and type...

                        PCPG   and press the Enter-key

             3. PC Pro-GOLF is distributed as SHAREWARE. However,
                there are certain restrictions which must be observed
                to avoid infringing upon the copyright:
                    a.  Copies for distribution must contain the 
                        ENTIRE SYSTEM (all support files and messages)
                        and CANNOT be included on the same disk or as
                        part of other systems.
                    b.  No files may be added to the diskettes other
                        than Distributor Identification and related
                        information. No "piggy-back" instructions or
                        devices may be added which may alter the
                        operation of the START-UP system installed on
                        the disks by the author.
                    c.  A copying fee of NOT MORE THAN $6.00 per
                        diskette may be charged.

             4. If you find PC Pro-GOLF entertaining and useful you
                have an obligation to register as a user by paying for
                it.

             5. CMA SOFTWARE assumes no responsibility for possible
                errors or malfunctions of this system when provided
                by third-party distributors or electronic bulletin-
                board sources. CMA will be responsible for this
                system to the extent of replacement of the Program
                and Data diskettes, only, when supplied on ORIGINAL
                CMA SOFTWARE distribution diskettes.

             6. This material is registered with the United States
                Copyright Office. Persons violating the rights of
                CMA SOFTWARE, publisher, will be prosecuted.
                This material MAY NOT be copied, loaned, shared,
                or otherwise distributed for any purpose except under
                those provisions outlined in section 3 of this
                message.

        Receive: 2-Disks containing: The latest version of PC Pro-GOLF;
                 Another complete 18-Hole Golf Course;
                 and the GOLF COURSE CONSTRUCTION SET which enables you to 
                 easily design and build NEW COURSES and modify old ones.
                 
        To register as a user please use the REGISTRATION FORM on this disk
        (At the DOS prompt, type REGISTER) or supply the following...

                        Your NAME and COMPLETE MAILING ADDRESS
                        The BRAND and MODEL of Computer you are using

        Include a Check or Money-Order for $20.00 (American) (Virginia
        residents must include 4.5% Sales Tax). Foreign Orders: add $3.00.

        SEND TO:        C M A   S O F T W A R E
                        P.O. Box 13813
                        Richmond, Virginia 23225 (USA)

        COD-orders accepted by phone (804) 272-1570 (add $2.00 COD-charge)
             Expect delivery via First Class Mail within two weeks.

        GOLF COURSE CONSTRUCTION SET version 4.21: a description.

        CMA's Golf Course Construction Set is a graphics-editing tool for 
        creating golf courses which are playable using the PC Pro-GOLF game 
        system. It is the same one used in drawing the golf course found 
        on this disk. Using keyboard macros, it performs all of the 
        necessary functions for putting together any golf course you can 
        imagine. Complete editing control is yours for creating new courses 
        or altering old ones, including functions like ERASER, PAINT-
        ROLLER, FREE-HAND DRAWING, MEASURING, Draw Trees, Buildings, etc.,
        at the touch of a single key. 

        Artistic talent is not needed for you to create challenging golf 
        courses. You may create hundreds of them, limited only by your 
        imagination. 

        Golf Course Construction Set is FREE and only available to 
        registered users of PC Pro-GOLF.

```
{% endraw %}

## FILE1344.TXT

{% raw %}
```
Disk No: 1344                                                           
Disk Title: PC Pro-Golf                                                 
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: PC Pro-Golf                                              
Author Version: 4.31                                                    
Author Registration: $20.00.                                            
Special Requirements: CGA.                                              
                                                                        
PC PRO-GOLF is a game that graphically depicts in four colors an actual 
golf course with water-hazards, sand-bunkers, wooded areas, buildings,  
roads, etc.  With each stroke the player may watch the course of the    
ball and see where it lands.  When your ball comes within a certain     
distance from the hole, the program will display a close up view of the 
hole so that you may putt the ball in.                                  
                                                                        
Penalty-strokes are added under the correct conditions and an updated   
score-card is available for review at any time, as are the help-screen  
and club-values list.  An unfinished game may be saved for resumption at
a later time.                                                           
                                                                        
Getting the program up and running is made easy by a very sophisticated 
installation program that was smart enough to know that we were testing 
this program on a Tandy SX1000!  Also included is the printable 10-page 
manual, and AMHERST, another complete 18-hole course.  Fore!            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILEDESC.TXT

{% raw %}
```
    PC Pro-GOLF  v4.31  Copyright 1990 by CMA Software. All Rights Reserved.
                        File Descriptions:
    ------------------------------------------------------------------------
    PCPG.BAT:     Loader for PC Pro-GOLF game.
    GO.BAT:       Loader for First-Time User information.
    ENTRE.TXT:    User information.
    PRINTMAN.BAT: Batch file to print out Manual.
    DISTANCE.CLB: Data on Club values.
    SETUPHD.BAT:  Set up on Hard Drive.
    MANUAL.TXT:   Printable/Readable Manual of 10-pages.
    REGISTER.BAT: Prints registration-form.
    REGISTER.FRM: Registration-form.
    READMAN.BAT:  Batch file for reading Manual on-screen.
    PCPGV4.EXE:   PC Pro-GOLF Main Program.
    GOLF.BAT:     Starting system for Hard Drive Operation.
    MAIN.BAT:     Root Directory return.
    CONVERT.BAT:  Loader and qualifier for CONVERT.BAS
    CONVERT.BAS:  Utility to convert old data files to run under v4.2.
    FILEDESC.TXT: Descriptions of files on this disk.
    HOLD.DAT:     Holding file for screen-changes.
    COURSE.DAT:   Values-file for this particular course.
    plus 36 data files for this particular course

```
{% endraw %}

## MANUAL.TXT

{% raw %}
```
    Copyright 1990                                           January 1, 1990
    by CMA SOFTWARE
    All Rights Reserved
    
    
    
    
                                 PC Pro-GOLF
                                 version 4.31

            I N S T R U C T I O N S   a n d   I N F O R M A T I O N

    IMPORTANT SHAREWARE Information:

    Though PC Pro-GOLF is COMMERCIAL SOFTWARE, it is provided to you in 
    this form (almost free) so that you may decide, before spending any 
    more money, IF YOU LIKE IT! If you DO like it, then we encourage you to 
    register as a user. The cost is $20.00 (American). Foreign Orders: add
    $3.00.

    When you become a registered user we send you another complete 18-Hole 
    Golf Course on disk, ready to play using PC Pro-GOLF. You also get the 
    GOLF COURSE CONSTRUCTION SET on disk and the Manual to use in designing 
    and building your own courses which are "playable" with PC Pro-GOLF. 
    (We used this handy tool in building courses for the game.) And, using 
    your registration number, you may call and receive advice on PC Pro-
    GOLF and the GOLF COURSE CONSTRUCTION SET for up to 6-months following 
    registration date. 

    We encourage you to SHARE PC Pro-GOLF with others. However, we insist 
    that you share only the COMPLETE version, containing ALL FILES. This is 
    important as the program WILL NOT RUN UNLESS ALL FILES ARE PRESENT! The 
    list is shown below.

    DO NOT include PC Pro-GOLF on the same diskette with, or in any way, as 
    part of other systems. DO NOT add any files or "piggy-back" messages or 
    instructions to the PC Pro-GOLF system. Licensed Libraries of SHAREWARE 
    may include their Distributor Identification if it in NO WAY interferes 
    with the operation of PC Pro-GOLF or otherwise alters the intended 
    messages of the Publisher.
    
    PC Pro-GOLF is registered with the United States Copyright Office. 
    Persons violating the rights of CMA SOFTWARE, publisher, will be 
    prosecuted to the extent provided by law. This material MAY NOT be 
    copied, loaned, shared, or otherwise distributed for any purpose except 
    under those provisions stated herein.
    
                       PC Pro-GOLF is the sole property of

                                 CMA SOFTWARE
                                P.O. Box 13813
                           Richmond, Virginia  23225


    











    PACKING LIST:

        (1)   5.25-Diskette

                        GO.BAT          ENTRE.TXT       PRINTMAN.BAT    
                        PCPG.BAT        GOLF.BAT        FILEDESC.TXT
                        DISTANCE.CLB    MANUAL.TXT      REGISTER.FRM    
                        REGISTER.BAT    READMAN.BAT     PCPGV4.EXE      
                        SETUPHD.BAT     MAIN.BAT        COURSE.DAT      
                        CONTINUE.GME    CONVERT.BAT     HOLD.DAT        
                        Plus 36 Binary Data Files 
                        (Course Name.*) 
               







    
    
    OVERVIEW:

    PC Pro-GOLF uses the IBM PC (or compatible) Color-Graphics capability 
    to play a game of golf in which the user may select Clubs, Direction 
    and Force of Swing and otherwise play a close simulation of the real 
    game. You may enter your handicap and game-values will be based upon 
    that value. Graphics are mapped in 4-colors and closely approximate an 
    actual golf-course with water-hazards, sand-bunkers, wooded areas, 
    buildings, roads, etc. With each stroke the player may watch the course 
    the ball takes and see where it lands. Penalty-strokes are added under 
    the correct conditions and an updated Score-Card is available for 
    reviewing at any time, as are the Help-Screen and Club-Values List. An 
    unfinished game may be Saved for resumption at a later time. 

    SYSTEM REQUIREMENTS:

                A 100%-compatible IBM PC, XT, AT or PS/2 Computer
                ONE or TWO Floppy Disk Drives or a 
                        Hard Drive system
                At least 180-KiloBytes of FREE Random Access Memory (RAM)
                Color Graphics Adaptor with RGB Monitor
                        or Downward-compatible EGA or VGA Video System
                DOS 2.0 (or later version)

    LIMITS OF LIABILITY:

    CMA SOFTWARE assumes no responsibility for possible errors or 
    malfunctions of this system when provided by "third-party" 
    distributors, including electronic "bulletin-board" sources. CMA 
    SOFTWARE will be responsible for this system to the extent of 
    replacement of the Program and Data diskettes, only, for a period of 
    thirty-days, when purchased on ORIGINAL CMA SOFTWARE distribution 
    diskettes. 

                        * * * * * * * * * * * * * * * *










                      R E G I S T R A T I O N    F O R M
    -----------------------------------------------------------------------
    CMA SOFTWARE  P.O. Box 13813 Richmond, VA 23225    Phone (804) 272-1570
    -----------------------------------------------------------------------
                               PC Pro-GOLF  v4.31

    Registered User:    _______________________________________
     Name and complete
     mailing address.   _______________________________________

                        _______________________________________


        Please register the above-named as a User of PC Pro-GOLF and send
        the disk-copy of GOLF COURSE CONSTRUCTION SET and printed manual,
        and a disk-copy of the Golf Course checked below via First Class 
        Mail. Enclosed please find purchase-amount of $20.00 (plus 
        appropriate sales-taxes). Foreign Orders: add $3.00.

        Virginia addressees must include 4.5% sales-tax

        Method of Payment:   __ Check   __ Money-Order
    Where did you get PC Pro-Golf ??? (please check one)

                        __  From a friend

                        __  Down-loaded from a bulletin-board

                        __  From a Library-distributor of PC Pro-GOLF

                        __  From a CMA SOFTWARE Show and Sale

                        __  ___________________________________ (other)

    Your Computer MAKE and MODEL _________________________________________

    Your order will be processed and shipped within 10-days after it is 
    received. If you do NOT receive your order within a reasonable time, 
    please advise.

    Thank you for supporting the ShareWare system.

                                                CMA SOFTWARE

    
    Please send the Golf Course I have checked below. (check 1)

                (   )  AMHERST
                (   )  BELMONT

















    INITIAL SET-UP:
                Begin by making a BACKUP copy of the diskette you 
                received.
    
        For ONE Floppy Drive:

                Put a WRITE-PROTECT tab over the notch in the edge of
                the ORIGINAL diskettes. Insert your DOS System
                Diskette into Drive A and type...

                                DISKCOPY A: B:   (press Enter-key)

                Then follow the directions shown on-screen

        For TWO Floppy Drives:

                DOS System Diskette in Drive A and type...

                                DISKCOPY A: B:   (press Enter-key)

                At the prompt, insert the ORIGINAL Program Disk into
                Drive A and a NEW unformatted disk into Drive B and
                press any key.
                
                Properly LABEL the copy.
                            (Skip over Hard Drive Section)

        For Hard Drive C and Floppy Drive A:

                Put a WRITE-PROTECT tab over the notch in the edge of
                the ORIGINAL diskette. 

                Select Drive A. Insert the PC Pro-GOLF Program Disk into
                Drive A and type...

                                SETUPHD   (press Enter-key)

                Your Golf-Game will then be transferred to a Sub-
                Directory on the Hard Disk C named GOLF. There is
                no need to make the GOLF-Directory; SETUPHD will
                do this for you.

        Store your ORIGINAL diskette in a safe place.

        IMPORTANT!!!  If you wish to use your old PC Pro-GOLF data disks 
        (Golf Courses) with the new version 4.31 then run the CONVERT-
        program on this disk. It will make the proper changes in the data 
        disks required under this new version.

                To CONVERT old data disks...

                Insert the Program Disk into drive A and type CONVERT.
                Then follow the on-screen instructions.













    RUNNING PC Pro-GOLF:

        If you are using a Floppy Drive system, insert the Program disk 
        in any floppy drive.

        If you are using the Hard Disk-Floppy Disk system, insert the
        Program disk into Drive A.

        From your ROOT-Directory on Drive C, or from your floppy drive 

                type...  GOLF   (press Enter-key)

        PC Pro-GOLF will load. If you are using a Tandy 1000, press Y.
        You will then be asked which Drive-configuration you are using. 
        Give the answer, 1 - 2 - 3  or 4, which describes your system.

        Enter your handicap at the prompt. If unsure, enter "B" for 
        beginner. 
    
        Next you will see the Name of the Golf-Course which is on the Data 
        disk and the computer will ask if you wish to Continue a Previous 
        Game. Answer by pressing the Y or the N - key.

        If you are continuing a previous game, the screen will then change 
        and you will see the Map of the Course showing the NEXT hole to be 
        played. 

        If you are NOT continuing a previous game, enter your Name (up to 8 
        characters) and press the Enter-key.

        Next you will be asked if you wish to review the Club-Values. Each 
        club (Woods, 1 thru 5, and Irons, 1 thru Sand-Wedge and Putter) is 
        listed along with the average "distance" that club can send the 
        ball. If you wish to review these distances, answer Y to the 
        question, otherwise, answer N.

        Enter the your choice for Hole-Numbers for STARTING and ENDING.
        A Colored Map of the First Hole will then be displayed. In the 
        upper-left you will see the Name of the Course and the Hole-Number 
        you are about to play. At the bottom you will see an Information 
        Panel. On the far right of the panel you will see your Name, the 
        PAR for this Hole, the LENgth between Tee and Pin, YTG, which 
        stands for Yards To Go (remaining distance between ball and pin), 
        The STROKEs you have taken thus far on this Hole, and your SCORE 
        thus far for the Course.

        On the top-left of the panel you will see the message...
        
                        Select Club:
                        (W)  (I)  (P)   (Wood, Iron or Putter)

        Press the W, the I or the P-key.

        Next you will be asked the Number of the Club-type you have 
        selected. For Woods you may select 1, 2, 3, 4 or 5. For Irons you 

    
    
    
    
    
    
    



        may select 1, 2, 3, 4, 5, 6, 7, 8, 9, <P>itching Wedge or <S>and 
        Wedge. Your Club-selection will be shown on the second row of the 
        panel. If you are satisfied with your choice, then proceed. If you 
        would like to change your choice, press the R-key to <R>evise the 
        choice. If you revise, then you must re-select the clubs from the 
        beginning. 

        You will see a Direction-Pointer at the middle of the Panel. The 
        single hand points straight up. This pointer is relative to the map 
        of the Hole and indicates the direction you will take FROM WHERE 
        THE BALL LIES. Move this pointer either left or right using the 
        <,> comma or the <.> period-key. You will also see the letter-C in 
        the upper-right corner of the screen. This indicates you are in 
        Course-Adjustment mode with the pointer. Toggle between Course and 
        Fine adjustment using the F-key.

        When you are satisfied with the direction you want to send the 
        ball, press the Enter-key.

        NOTE: You can still Revise your choice of Club as well as Direction 
              at this point. After the stroke is made you cannot revise.

        Next you will be asked How Hard you wish to hit the ball. You may 
        regulate the force of your swing from 10% to 90%, or to FULL-SWING.
        Press 1 thru 9 for 10% thru 90% of Full Swing, or press the F-key
        for a Full 100% Swing. 
        
        When you press the appropriate key (1-9,F) the computer does 
        several things. First it runs the data of direction, club and force 
        through a random-based error function to determine if the swing has 
        any faults. Next it plots the path and projected position of the 
        ball; if the ball falls onto a RED pixel or into WATER on the map, 
        a Penalty-Stroke is automatically added to your score. Then the 
        plot is drawn onto the Map of the Hole to show you where the ball 
        lies and what course it took to get there. Your New position, 
        Strokes and Score is tallied and shown in the lower-right of the 
        panel. If your ball did NOT land on the Green, control is then 
        returned to you at the "Select Club"-level for your next shot. You 
        repeat the process of Club-Selection, Direction, Force, etc. again 
        until your ball lands on the Green. 

        Once the ball lands on the Green a message is displayed in the 
        panel telling you so and to press the Space-Bar to advance. The 
        screen changes and you have a view of the Green showing the hole 
        and pin, as well as the relative position of the ball. The box in 
        the lower-left displays the information on HOLE-Number, PAR, LENgth 
        of the Hole, FEET TO PIN (FTP), Your STROKES so far and your SCORE. 
        Use the (,) and (.) -keys to move the Direction Pointer to your 
        satisfaction, press the Enter-key and enter the number of FEET you 
        wish to send the ball. The ball moves according to the same factors 
        as described above and, if you DO NOT sink the ball, the updated 
        information is displayed in the box at lower-right.
        
        
        
        
        
        
        
        
        
        
        
        


        If you sink the ball, the computer sounds and a message appears at 
        the bottom of the screen advising you of the meaning of your score. 
        If you are finishing up the last Hole, the screen will change 
        showing your final score. If there are more holes to play, press 
        the A-key to <A>dvance to the next Hole and repeat the instructions 
        from the beginning of the first Hole.



                            

                                N O T E S :

        IMPORTANT..!

                The Program requires the presence of certain 
                files before it will start. It is best to use a 
                VERIFIED COPY of the ORIGINAL PROGRAM DISK, or, 
                if running off your Hard Drive, to set up your 
                Working Directory using the SETUPHD utility which 
                came on your original disk. This insures all 
                necessary files will be accessible. 

        
        Please Explain the Screen...

                Trees can be any color
                Fairway is GREEN (Blue on Tandy 1000)
                Wooded areas are predominantly BLACK and may contain
                   trees of other colors
                Green is GREEN with a BLACK circle (Blue on Tandy 1000)
                Tee is YELLOW (White on Tandy 1000) inside a RED box
                Water is Light Blue.
                Sand Bunkers are YELLOW (White on Tandy 1000) and RED 
                inside a BLACK elipse Houses and other Buildings are RED
                Roads and Traffic areas are BLACK
                The Ball appears as a BLACK or RED dot inside a small
                   YELLOW (White on Tandy 1000) square
                The Path of the Ball appears as a string of black dots
                Ball inside a Hazard appears as above, (The Ball) inside
                a larger RED box

        Review Club Values:

        To review the Values of the Clubs (the distance each one is rated) 
        press the V-key at any time. A screen will appear showing a listing 
        of all clubs along with their respective Values. You may change any 
        of the clubs to Values which you decide upon, or, leave the Values 
        as they are.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                
        
                To CHANGE:      Press the C-key, enter the information 
                                requested, and <S>ave the NEW Values by
                                pressing the S-key.

                To RETURN:      Press the Enter-key and the game will be
                                resumed where you left off.

        Save Unfinished Game:

        You may stop playing after completing ANY Hole and BEFORE selecting 
        Clubs for the NEXT Hole. This is the ONLY place in the game where 
        you may do this. This is only possible for games beginning on HOLE-
        Number 1. Games beginning on other Holes may not be saved and 
        resumed. When you see... "Select Club" (W, I, P), you may press the 
        G-key to postpone play of the <G>ame. When a Game is continued, all 
        of the data accumulated up to that point is saved in the file, 
        CONTINUE.GME, on the data disk. When you press the G-key you will 
        be asked if you want to Save the Game. Enter a Y if you wish to 
        stop or (if you change your mind) an N, if you wish to continue. If 
        you entered a Y, you will then be asked if you want to Quit. At 
        this point you may opt to continue playing by pressing the N-key, 
        meaning NO, you DO NOT want to quit, and the game will continue. If 
        you press the Y-key it means YES, you want to quit, and the game 
        terminates. 

        Quit the Game:

        To <Q>uit the game without playing all Holes, follow the 
        instructions above in "Save Unfinished Game", but answer <Y>es to 
        the question, "Do you wish to Quit?".

        Penalty Strokes:

        One Penalty-Stroke will be added to your score each time the ball 
        lands on a RED pixel (dot) or into WATER on the screen. Plan your 
        shots to avoid any RED areas like Water, RED trees, Houses, etc. If 
        you do land on a RED pixel, your Next shot will be calculated from 
        that position. 

        Reset Club Selection:

        Anytime up until you actually make the shot, you may <R>eset your 
        Club-selections and Direction-choice by pressing the R-key. This 
        takes you back to the beginning of the current Hole. Re-enter your 
        choices and proceed as normal.

        Score Card:

        You may review your Score <C>ard at any time by pressing the C-key.
        The card may not be changed and your only option is to return to 
        the game by pressing any key. The Score Card shows the Holes of the 
        course by Number along with the PAR for each Hole and your score. 
        The total PAR for the "Front Nine" is shown at the lower-left
        along with your score to that point. The PAR for the course is 
        shown in the lower-right along with your score through your last-
        Hole-played.










        Help-Screen:

        At any time in the game you may review a list of Key-Commands for 
        playing the game. Press the H-key for the <H>elp-screen. To return 
        to the game, press the Enter-key. 

        
        Helpful Tips...

        If you have other Golf Courses keep them properly labelled by       
        Course-Name. Each course of 18-Holes takes about 192-K of 
        storage space. Keeping them on separate floppies avoids using a 
        disproportionate amount of Hard Disk space and makes finding a 
        given course much easier. 

        Only ONE unfinished game may be saved on a Data Disk for a given 
        course. If more than one person wishes to play, it may be handy for 
        each person to have a Data Disk of each course for his own. Use 
        DISKCOPY to make multiple copies of the same course. 
        
                        * * * * * * * * * * * * * * * *



























```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1344

     Volume in drive A has no label
     Directory of A:\

    AMHERST  L1       4815  12-27-88  11:04a
    AMHERST  L10      4815  12-27-88  11:46a
    AMHERST  L11      4815  12-27-88  11:51a
    AMHERST  L12      4815  12-27-88   1:08p
    AMHERST  L13      4815  12-27-88   1:14p
    AMHERST  L14      4815  12-27-88   1:17p
    AMHERST  L15      4815  12-27-88   1:22p
    AMHERST  L16      4815  12-27-88   1:29p
    AMHERST  L17      4815  12-27-88   1:34p
    AMHERST  L18      4815  12-27-88   1:41p
    AMHERST  L2       4815  12-21-88   2:30p
    AMHERST  L3       4815  12-27-88  11:09a
    AMHERST  L4       4815  12-27-88  11:14a
    AMHERST  L5       4815  12-21-88   2:31p
    AMHERST  L6       4815  12-27-88  11:19a
    AMHERST  L7       4815  12-27-88  11:24a
    AMHERST  L8       4815  12-27-88  11:30a
    AMHERST  L9       4815  12-27-88  11:36a
    AMHERST  U1       4895  12-27-88  11:04a
    AMHERST  U10      4895  12-27-88  11:46a
    AMHERST  U11      4895  12-27-88  11:51a
    AMHERST  U12      4895  12-27-88   1:08p
    AMHERST  U13      4895  12-27-88   1:14p
    AMHERST  U14      4895  12-27-88   1:17p
    AMHERST  U15      4895  12-27-88   1:22p
    AMHERST  U16      4895  12-27-88   1:29p
    AMHERST  U17      4895  12-27-88   1:34p
    AMHERST  U18      4895  12-27-88   1:41p
    AMHERST  U2       4895  12-21-88   2:30p
    AMHERST  U3       4895  12-27-88  11:09a
    AMHERST  U4       4895  12-27-88  11:14a
    AMHERST  U5       4895  12-21-88   2:31p
    AMHERST  U6       4895  12-27-88  11:19a
    AMHERST  U7       4895  12-27-88  11:24a
    AMHERST  U8       4895  12-27-88  11:30a
    AMHERST  U9       4895  12-27-88  11:36a
    CONVERT  BAS      1186  12-22-88   8:28a
    CONVERT  BAT       257  12-21-88   5:37p
    COURSE   DAT       536  12-27-88   1:41p
    DISTANCE CLB       103   8-30-88  11:01a
    ENTRE    TXT      6500  12-23-89   6:48p
    FILE1344 TXT      2295   2-13-90   9:03a
    FILEDESC TXT      1172  12-23-89   7:09p
    GO       BAT        26   9-15-89  11:22p
    GOLF     BAT        25   7-01-88  11:40a
    HOLD     DAT     16391   2-24-89   6:21p
    MAIN     BAT        55   7-01-88  12:42p
    MANUAL   TXT     21357  12-23-89   7:06p
    PAGE     COM       325   2-22-89  10:35p
    PCPG     BAT        53  12-21-88   2:56p
    PCPGV4   EXE    108432  12-21-89  11:48p
    PRINTMAN BAT       211   6-09-88  10:32p
    READMAN  BAT       104   6-04-88   5:51a
    REGISTER BAT       214  12-11-88   2:28p
    REGISTER FRM      1954  12-23-89   7:10p
    SETUPHD  BAT      1076   4-06-89   3:38p
           56 file(s)     337052 bytes
                            1024 bytes free
