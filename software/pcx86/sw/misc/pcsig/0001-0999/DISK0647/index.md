---
layout: page
title: "PC-SIG Diskette Library (Disk #647)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0647/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0647"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "AMY'S FIRST PRIMER (PCJR VERSION)"

    This is a collection of a half-dozen games designed to teach basic
    skills to children, ages 3-8. They stress positive reinforcement and
    promote a ``learning is fun'' attitude.
    
    The collection includes a sing-along alphabet, a letter-matching game,
    an alphabet tutorial, a numbers-counting game, a maze game, and a
    pattern-matching game.
    
    Repeated suggestions that the parents use the games with their child add
    a nice reinforcement toward family-based learning.  This version is
    especially designed for the PCjr.
    
    bSPECIAL REQUIREMENTS:
    PCjr with BASICA Cartridge.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ABC.BAS

{% raw %}
```bas
10 '                            A B C . B A S
20 '                                            Modified 5/20/88   1:32 PM
30 '
40 '    ABC will help a pre-schooler learn the alphabet, by
50 '    matching pictures with the letters as it plays the ABC song.
60 '
70 CLEAR ,,,32768! : SCREEN 5 : COLOR 7,0 : CLS
80 COLOR 4,0 : LOCATE 7,2 : PRINT "A B C" : LOCATE 12,1 : PRINT "S O N G"
90 LOCATE 24,1 : COLOR 4,0 : PRINT "  copyright 1985, Computing Specialties";
100 COLOR 10,0
110 '
120 '
130 '         Poke subroutine ALOAD into memory.
140 '
150 DEF SEG : ALOAD= 48000!
160 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD+IB,BYTE : NEXT IB
170 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
180 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
190 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
200 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
210 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
220 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
230 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
240 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
250 '
260 '           Load the title picture onto the screen.
270 '
280 SEG2%=&HB800 : BERR%=0 : FILE$="ABC.PIC" : CALL ALOAD(FILE$,SEG2%,BERR%)
290 SEG2%=&H1C00 : BERR%=0 : FILE$="ABC.PI2" : CALL ALOAD(FILE$,SEG2%,BERR%)
300 DIM A(150),B(150),C(150),D(150),E(150),F(150),G(150),H(150),I(150),J(150)
310 DIM K(150),L(150),M(150),N(150),O(150),P(150),Q(150),R(150),S(150),T(150)
320 DIM U(150),V(150),W(150),X(150),Y(150),Z(150),BUNNY(150),RABBIT(150)
330 DIM XTL(28),YTL(28),XBR(28),YBR(28),LETTER(30),ALPHA(4)
340 DIM N$(40),T$(14)
350 FOR I=1 TO 7
360     XTL(I)=23+I*32 : XBR(I)=58+I*32 : YTL(I)=10 : YBR(I)=39
370     XTL(I+7)=23+I*32 : XBR(I+7)=58+I*32 : YTL(I+7)=50 : YBR(I+7)=79
380     XTL(I+14)=23+I*32 : XBR(I+14)=58+I*32 : YTL(I+14)=90 : YBR(I+14)=119
390     XTL(I+21)=20+I*35 : XBR(I+21)=55+I*35 : YTL(I+21)=140 : YBR(I+21)=169
400 NEXT I
410 XTL(6)=218 : XBR(22)=89 : XBR(19)=217 : XTL(21)=250 : XBR(26)=232
420 FOR I=1 TO 7
430     ON I GOTO 440,490,540,590,640,690,730
440     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),A
450     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),H
460     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),O
470     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),V
480     GOTO 760
490     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),B
500     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),I
510     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),P
520     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),W
530     GOTO 760
540     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),C
550     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),J
560     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),Q
570     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),X
580     GOTO 760
590     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),D
600     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),K
610     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),R
620     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),Y
630     GOTO 760
640     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),E
650     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),L
660     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),S
670     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),Z
680     GOTO 760
690     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),F
700     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),M
710     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),T
720     GOTO 760
730     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),G
740     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),N
750     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),U
760 NEXT I
770 XB=240 : YB=145 : GET (XB,YB)-(XB+25,YB+15),BUNNY
780 GET (21,59)-(36,84),RABBIT
790 CLS
800 LINE (0,0)-(319,199),5,B : LINE (0,35)-(319,35),5
810 '
820 '          Play the alphabet song.
830 '
840 DATA C4,C4,E4,E4,G4,G4,E2,F4,F4,E4,E4,D8,D8,D8,D8,C2
850 DATA C4,C4,E2,G4,G4,E2,F8F8F4,E2,D4D4,C2
860 DATA C4,NOW,C4,I'VE,E4,SAID,E4,MY,G4,A,G4,B,E2,C'S.
870 DATA F4,WILL,F4,YOU,E4,COME,E4,AND,D4,PLAY,D4,WITH,C2,ME?
880 IF N$(1)="" THEN FOR K=1 TO 26 : READ N$(K) : NEXT K
890 IF N$(27)="" THEN FOR K=27 TO 40 : READ N$(K),T$(K-26) : NEXT K
900 FOR K=1 TO 26
910   Y=INT(K/7)*40+50: X=(K MOD 7)*40+20
920   GOSUB 1140
930   IF K>20 THEN LINE (0,199)-(319,199),5
940   R=INT(K/7)*5+6 : C=(K MOD 7)*5+4 : LOCATE R,C
950   PRINT CHR$(ASC("A")+K-1);" ";CHR$(ASC("a")+K-1);
960   IF INKEY$=CHR$(27) THEN RUN"MENU"
970   PLAY "MFO3"+N$(K)
980 NEXT K
990 LINE (0,199)-(319,199),5
1000 LINE (1,1)-(318,34),0,BF : NK=26
1010 FOR N=2 TO 3
1020   LOCATE N,5
1030   FOR K=1 TO 7
1040     NK=NK+1
1050     PRINT T$(NK-26);" "; : PLAY "MFO3"+N$(NK)
1060 IF INKEY$=CHR$(27) THEN RUN"MENU"
1070   NEXT K
1080 NEXT N
1090 FOR I=1 TO 500 : IF INKEY$=CHR$(27) THEN RUN"MENU" ELSE NEXT I
1100 GOTO 790
1110 RUN"menu"
1120 REM ---------- SUBROUTINE PLOT PICTURE AT (X,Y) FOR LETTER NUMBER K ----------
1130 '
1140     IF K<13 THEN ON K GOTO 1160,1170,1180,1190,1200,1210,1220,1230,1240,1250,1260,1270
1150     ON K-12 GOTO 1280,1290,1300,1310,1320,1330,1340,1350,1360,1370,1380,1390,1400,1410
1160     PUT (X,Y),A,PSET : RETURN
1170     PUT (X,Y),B,PSET : RETURN
1180     PUT (X,Y),C,PSET : RETURN
1190     PUT (X,Y),D,PSET : RETURN
1200     PUT (X,Y),E,PSET : RETURN
1210     PUT (X,Y),F,PSET : RETURN
1220     PUT (X,Y),G,PSET : RETURN
1230     PUT (X,Y),H,PSET : RETURN
1240     PUT (X,Y),I,PSET : RETURN
1250     PUT (X,Y),J,PSET : RETURN
1260     PUT (X,Y),K,PSET : RETURN
1270     PUT (X,Y),L,PSET : RETURN
1280     PUT (X,Y),M,PSET : RETURN
1290     PUT (X,Y),N,PSET : RETURN
1300     PUT (X,Y),O,PSET : RETURN
1310     PUT (X,Y),P,PSET : RETURN
1320     PUT (X,Y),Q,PSET : RETURN
1330     PUT (X,Y),R,PSET : RETURN
1340     PUT (X,Y),S,PSET : RETURN
1350     PUT (X,Y),T,PSET : RETURN
1360     PUT (X,Y),U,PSET : RETURN
1370     PUT (X,Y),V,PSET : RETURN
1380     PUT (X,Y),W,PSET : RETURN
1390     PUT (X,Y),X,PSET : RETURN
1400     PUT (X,Y),Y,PSET : RETURN
1410     PUT (X,Y),Z,PSET : RETURN
```
{% endraw %}

## AMY.DOC

{% raw %}
```



        
                 A M Y ' S   F I R S T   P R I M E R
        
        
        
        
                Six delightful programs will give your 
        
                child a head start in school, teaching
        
                             the alphabet
        
                             the numbers  
        
                                shapes
        
                                colors
        
                               counting
        
                               matching
        
                         pattern recognition
        
                         and problem solving.
        
        
        
        
                      Recommended for ages 4-8.
        
        
                           Requires a PCjr 
                    with 128K RAM, an RGB monitor 
                         and cartridge BASIC
        
                Copyright 1985, Computing Specialties
        
               Authors:  Rob, Garth, and John Robinson
        



        
                          AMY'S FIRST PRIMER
        
                          Table of Contents
        
        
                Introduction . . . . . . . . . . . .  1
        
                Starting Amy's First Primer. . . . .  2
        
                Stopping Amy's First Primer. . . . .  3
        
                The Keyboard . . . . . . . . . . . .  3
        
                The Menu . . . . . . . . . . . . . .  4
        
                The ABC Song . . . . . . . . . . . .  5
        
                Beary Fun Letters. . . . . . . . . .  6
        
                Bunny Letters. . . . . . . . . . . .  7
        
                Beary Fun Counting . . . . . . . . .  8
        
                Help the Froggy. . . . . . . . . . .  9
        
                Load the Truck . . . . . . . . . . . 10

                Making a Backup Disk . . . . . . . . 11
        
                Preparing a Working Disk . . . . . . 12
        
                Putting Amy's Primer on a Hard Disk. 14
        
                User Support . . . . . . . . . . . . 15
        
        
        
        
        



        
                          AMY'S FIRST PRIMER
        
        
                             INTRODUCTION
        
        Programs for young children are hard to find.  They 
        must be extremely simple to use, very colorful and 
        attractive, and they need to be fun and free of nega-
        tive rewards.  Our own five year old Amy wouldn't 
        spend five minutes with the programs her older 
        brothers enjoyed.  She didn't like the idea of 
        destroying things or being destroyed.  In addition to 
        being frustrated with the family computer, Amy's 
        birthday came on September 8, forcing her to wait 
        almost a year longer than some of her friends before 
        going to kindergarten.
        
        Amy's First Primer was written by her father and 
        brothers to help her work on the things her kinder-
        garten friends were doing.  After much testing and 
        reprogramming, the programs finally met Amy's full 
        approval.  We think your child will approve, too.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                
                
                                 Page 1    



        
                     STARTING AMY'S FIRST PRIMER
        
        If the disk is brand new, you should make a backup 
        copy of the disk first for your own protection and 
        then use that disk.  The section at the end of this 
        guide on "Preparing a New Disk" will help you make a 
        backup copy of the disk and place the DOS operating 
        system on it.  Steps 1 and 2 below will only work if 
        you have made a new disk with DOS on it.  Step 3 below 
        will work even on the original disk.
        
        You may use one of the following steps to start Amy's 
        disk:
        
        1.   If the computer power is off, just put Amy's disk 
             in drive A and turn the power on.
        
                   or
        
        2.   If the power is already on, put Amy's disk in 
             drive A and press the keys CTRL, ALT, and DEL 
             simultaneously, causing a warm boot.
        
                   or
        
        3.   If you just want to see how the original disk 
             works, or if you don't want to reboot DOS, just 
             place Amy's disk in the drive and type:
        
                                                      GO
        
             then press the ENTER key.
        
        
        
        
                
                
                                 Page 2    



        
                       STOPPING AMY'S FIRST PRIMER
        
        To quit playing with Amy's disk, perform one of the 
        following:
        
             1.  Press ESC to return to the menu, then press Q
        
                      or
        
             2.  Press Fn-Break and then type SYSTEM.
        
                      or

             3.  Take the disk out and turn the computer off.



                             THE KEYBOARD
        
        There are a few important keys to learn for Amy's 
        First Primer:
        
        ARROW KEYS - Used for moving objects on the screen.
                     Up, down, right or left.
        
        ENTER      - Used in the menu program to call up the
                     the program that the arrow is pointing to.
        
        ESC        - Used at any time in any of the six 
                     programs to quit and return to the menu.
        
        The behavior of the keys has been modified to suit the 
        expectations that young children have.  When an arrow 
        key is pressed, an object will move and continue to 
        move until the key is released, then it will stop 
        immediately.
        
                                 Page 3    



        
                               THE MENU
        
        The menu displays the six titles for the programs 
        along with pictures that will help your child 
        recognize the programs.  Select a program by pressing
        the up or down arrow keys until the big blue arrow
        is pointing to the desired program, then press the
        ENTER key to run the program.  The program titles are:
        
                          ABC Song
                          Beary Fun Letters
                          Bunny Letters
                          Beary Fun Counting
                          Help the Froggy
                          Load the Truck
        
        If your child is just beginning to learn the alphabet, 
        we suggest that you start with the ABC Song and move 
        from there to Beary Fun Letters and Bunny Letters.  
        The ABC Song will help to associate the letters with 
        the pictures.
        
        Beary Fun Counting is used for number recognition and 
        counting.  Help the Froggy is a delightful maze for 
        problem solving, and Load the Truck is used for 
        pattern recognition and matching.
        
        To exit from the menu, press the letter Q.  The
        program will return to the DOS operating system.
        
             
        
             
        
             
        
                
                
                                 Page 4    



        
                             THE ABC SONG
        
        The purpose of the ABC Song is to help associate the 
        pictures with the letters.  The program will play the 
        song over and over again, until the ESC key is 
        pressed.  All other keys are ignored.  The ESC key 
        will stop the song, and bring the menu back.
        
        Sing along with your child the first few times.  Even 
        if your child already knows the ABC Song, she or he 
        will start recognizing the individual letters as they 
        are displayed.  I can remember wondering what an 
        "eleminopee" was when I first started singing the ABC 
        song.  Since a new picture is displayed with each 
        letter, your child will actually start to realize that 
        l, m, n, o and p are separate letters.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                
                
                                 Page 5    



        
                          BEARY FUN LETTERS
        
        Beary Fun Letters is used for learning the keyboard 
        and the printed letters.  The program starts by 
        displaying a picture on the screen.  It then waits 
        until the proper key is pressed on the keyboard.  The 
        proper key will be the first letter of the picture 
        name in all cases.  The picture names are:
        
                  Apple          Jug            Snail
                  Boat           Kite           Truck
                  Car            Ladder         Umbrella
                  Diamond        Moon           Violin
                  Elephant       Number Nine    Wagon
                  Fish           Owl            Xylophone
                  Girl           Peanut         Yo-yo
                  Hat            Queen          Zebra
                  Ice cream      Ring
                  
        If the key isn't pressed after four seconds, the 
        program will display both the lower and upper case 
        form of the letter on the screen.  It will continue to 
        wait until the key is pressed.  When the proper key is 
        pressed, a happy bear face is placed on the border of 
        the screen.  When the border is full, the game is over 
        and the ABC song will be played.  The game will then 
        be repeated.  The ESC key may be pressed at anytime to 
        return to the menu.
                  
        You can help a lot, the first few times your child 
        plays this game by saying the picture name and the 
        first letter out loud.  For example, if a wagon is 
        displayed, say "Wagon - W" and then help find the 
        letter W on the keyboard.
        
        
                
                
                                 Page 6    



        
                            BUNNY LETTERS
        
        Bunny Letters is a matching game.  It places four 
        pictures on the left side of the screen and four 
        letters (both lower and upper case) on the right side.  
        The letters are not in the same order as the pictures.  
        A bunny is placed next to the top picture.
        
        Use the arrow keys to move the bunny up, down, left or 
        right toward the corresponding letter.  When the bunny 
        reaches the proper letter, a blue line is drawn from 
        the picture to the letter and the bunny is placed on 
        the right side of the screen.
        
        A new bunny will be placed beside the next picture.  
        When all pictures have been matched with their 
        letters, a special bunny is placed at the top of the 
        screen to indicate that a set of four matches has been 
        completed.  The screen is then erased and a new set of 
        four matches are displayed.  When five sets of matches 
        are played, the game is over and the ABC song is 
        played.
        
        The ESC key may be pressed at anytime to return to the 
        menu.
        
        
        
        
        
        
        
        
        
        
        
                
                
                                 Page 7    



        
                          BEARY FUN COUNTING
        
        Beary Fun Counting works the same as Beary Fun 
        Letters, except that it displays a set of fruit on 
        the screen for the child to count.  It then waits 
        patiently until the child presses the proper number.
        
        When the proper key is pressed, a happy bear face is 
        placed on the border of the screen.  When the border 
        is full, the game is over and a congratulations 
        message is displayed.  The game will then be repeated.  
        The ESC key may be pressed at any time to return to 
        the menu.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                
                
                                 Page 8    



        
                           HELP THE FROGGY
        
        This is a hungry frog and she needs help finding her 
        way to the lily pad.  Use the arrow keys to guide her 
        through the maze to the lily pad.  Once on the lily 
        pad, the frog is ready for dinner.  There's usually a 
        fly buzzing close by and frogs love flies.  Each maze 
        takes approximately one minute to generate, and since 
        each one is built using a random number generator, 
        there will be a new, unique maze each time.
        
        The song "Froggy Went a Courting" will be played while 
        a new maze is being built.
                  
        Help the Froggy will be repeated until the ESC key is 
        pressed to return to the menu.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                
                
                                 Page 9    



        
                            LOAD THE TRUCK
        
        Children have always liked playing with trucks and 
        loaders, and Load the Truck is no exception.  The top 
        right corner of the screen contains an order for four 
        shapes.  Use the arrow keys to guide the loader around 
        the screen.  The truck must be loaded so that it shows 
        the same pattern as the order form.  
        
        Load the Truck is a carefully designed simulation.  
        Just like the other programs, it never scolds the 
        child or even complains about finding the wrong shape.  
        It patiently waits until the loader scoop reaches the 
        bottom of the right shape.  It then raises the hoist, 
        picking up the shape.   Patience again is the rule, 
        until the loader reaches the edge of the trailer.  
        Then the loader slides the shape onto the truck and 
        lowers the hoist, ready for finding a new shape.  All 
        that the child has to do is use the arrow keys to 
        guide the loader to the right spots in the proper 
        sequence.  When all four shapes are on the truck, the 
        loader must be moved back up the screen, so that it 
        will be out of the way for the tractor.  As soon as 
        the loader is out of the way, the tractor will back up 
        and haul the load away.
        
        Load the Truck will be repeated until the ESC key is 
        pressed to return to the menu.  A new random order
        is generated for each game.
        
        
        
        
        
        
        
                
                
                                 Page 10  



        
                         MAKING A BACKUP DISK
        
        Your first job with Amy's disk should be to make a 
        backup copy of the disk.  Just follow these steps.
        The steps assume that your PCjr has only one drive.  
        
        1.  Put a write protect tab on Amy's disk, so that an 
            ensuing mistake will not destroy it.
        
        2.  Put a DOS system disk in the drive and boot the 
            system.
        
        3.  Type the command:          DISKCOPY 
        
        4.  The program will ask you to place the source disk 
            in drive A: and press any key when ready.  Put the 
            original disk for Amy's First Primer in the drive
            and pick a key to press.
        
        5.  After a portion of the disk has been loaded into     
            memory, the program will ask you to place the 
            target disk in drive A: and press any key when 
            ready.  Remove the original disk and put a new 
            blank disk in the drive.  Now press your best key.
        
        6.  The program will ask you to repeat steps four and 
            five several times.  The exact amount depends on 
            the amount of memory your computer has.   Be care-
            ful to always use the original disk as the source 
            disk and the new blank disk as the target disk.
        
        7.  When the diskcopy is complete, you will be asked 
            if you want another copy.  Put the DOS system disk 
            back in the drive and press N for no.
        
        
                
                
                                 Page 11  



                       PREPARING A WORKING DISK

        A working disk can be made that has both the DOS 
        operating system on it and the program files for
        Amy's First Primer.  This disk may then be placed
        in drive A: before the power is turned on, and Amy's
        First Primer will start up automatically.  The 
        following procedure will prepare a working disk:

        1.  Put a write protect tab on Amy's disk, so that any 
            mistake in the steps below will not destroy it.

        2.  Put a DOS system disk in drive the drive and turn 
            the power on.

        3.  When the A> prompt appears, type the command:

                        FORMAT   B:/S

        4.  The program will ask you to

                Insert new diskette for drive B:
                and strike any key when ready

            Remove the DOS disk, and put a new blank disk in 
            it's place, then press a key.

        5.  After the disk is formatted, it will ask you:

                Format another (Y/N)?

            Press the letter  N  to return to the "A>" prompt.

        6.  Now type the command:

                        COPY  A:*.*  B:

            When asked for the disk in drive A:, insert the 
            original copy of Amy's First Primer.  When asked 
            for the disk in drive B:, insert the new disk.

                                Page 12




        Ignore any "insufficient space" for the last file, 
        AMY.DOC.  It isn't necessary on a working disk.  The 
        following files are necessary on the working disk.

                COMMAND.COM             ABC.PIC
                AUTOEXEC.BAT            ABC.PI2
                START.BAS               BEARABC.PIC
                MENU.BAS                BEARABC.PI2
                ABC.BAS                 BUNNY.PIC
                BEARABC.BAS             BUNNY.PI2
                BUNNY.BAS               BEAR123.PIC
                BEAR123.BAS             BEAR123.PI2
                FROG.BAS                FROG.PIC
                TRUCK.BAS               FROG.PI2
                MENU.PIC                TRUCK.PIC
                MENU.PI2                TRUCK.PI2

        SPECIAL NOTE:  If your system has more than 128 K of 
        memory, do not do anything to change the normal 
        location of the video memory.  Screen 5 is used in 
        Amy's programs and the memory locations must reside at 
        the segment addresses &HB800 and &H1C00.  If you 
        follow the steps above, you should not have to worry 
        about this problem.














                                 Page 13  




               PUTTING AMY'S FIRST PRIMER ON A HARD DISK

        If you want to put Amy's First Primer on a hard disk, 
        you should first create a directory called \AMY and 
        copy all the files on the diskette to the new 
        directory, using the following procedure:

        1.  Turn the power on to the system and wait for the 
            "C>" prompt to appear.

        2.  Place the diskette containing Amy's First Primer 
            in drive A: and type

                        C:
                        MD   \AMY
                        CD   \AMY
                        COPY   A:*.*  C:\AMY

        To use Amy's first primer, you will need to type the 
        following commands:

                        C:
                        CD   \AMY
                        GO

        The first line above makes sure that drive C is logged 
        as the default drive.  The second line make sure that 
        the default directory is \AMY and the third line 
        starts the program.

        After you exit from AMY'S FIRST PRIMER, you should 
        return to the root directory with the command:

                        CD  \
        



                                 Page 14



        
                             USER SUPPORT
        
        Amy's First Primer is a user-supported "shareware" 
        program.  You may copy it for free and share it with 
        your friends on a "try before you buy" basis.  If you 
        or your child like the programs, and find them useful, 
        we request that you purchase a license to the program 
        by sending $15.00 to:
        
                         Rob Robinson
                         523 Albany Avenue NE
                         Orange City, IA 51041
        
        In appreciation, we'll send you another free disk (and 
        the license to use it) containing the DRAW program 
        that was used for the graphics on Amy's disk.  The 
        DRAW program provides all 16 colors on the PCjr 
        screen.  Commands available for the DRAW program are 
        Draw, Erase, Circle, Box, Line, Jump, Fill, Get, Put, 
        Input, Output, Report, Foreground color, Background 
        color, Wipe, and Quit.  DRAW doesn't require a joy-
        stick, mouse, or lightpen.  All drawing is done with 
        the keyboard.  The complete listable source code is 
        included as well as some example game programs which 
        show how to take graphics created by DRAW and use them 
        in your own game programs.
        
        If you wish to only purchase a license to Amy's First 
        Primer without the DRAW program, please send $10.00 to 
        the above address.
        
        Thank you.
        
        
        
        
                
                
                                 Page 15  

```
{% endraw %}

## BEAR123.BAS

{% raw %}
```bas
10 '                     B E A R 1 2 3 . B A S         5/20/88 1:32 PM
20 '
30 '   BEARY FUN COUNTING helps a child with counting and with locating numbers
40 ' on the keyboard.  It displays a random number of fruit on the screen and
50 ' waits patiently until the proper number is pressed. For each correct answer
60 ' a bear face is placed on the border of the screen
70 ' The game continues until the border is filled with bears.
80 '
90 CLEAR ,,,32768! : SCREEN 5 : CLS : SOUND OFF
100 LOCATE 6,10 : COLOR 6,0 : PRINT "BEARY FUN COUNTING";
110 LOCATE 24,1 : COLOR 4,0 : PRINT "  copyright 1985, Computing Specialties";
120 COLOR 6,0
130 '
140 '
150 '         Poke subroutine ALOAD into memory.
160 '
170 DEF SEG : ALOAD= 48000!
180 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD+IB,BYTE : NEXT IB
190 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
200 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
210 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
220 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
230 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
240 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
250 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
260 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
270 '
280 '           Load the title picture onto the screen.
290 '
300 SEG2%=&HB800 : BERR%=0 : FILE$="BEAR123.PIC" : CALL ALOAD(FILE$,SEG2%,BERR%)
310 SEG2%=&H1C00 : BERR%=0 : FILE$="BEAR123.PI2" : CALL ALOAD(FILE$,SEG2%,BERR%)
320 '
330 '     get the pictures into arrays.
340 '
350 DIM CHERRY(100),ORANGE(100),PINEAPPLE(100),BANANA(100),APPLE(100),BEAR(400)
360 DIM X(9),Y(9) : FOR I=1 TO 9 : READ X(I),Y(I) : NEXT I : DATA 60,45,140,45,220,45,60,90,140,90,220,90,60,135,140,135,220,135
370 GET (154,91)-(168,105),CHERRY
380 GET (191,88)-(204,99),ORANGE
390 GET (225,72)-(239,99),PINEAPPLE
400 GET (200,60)-(210,74),BANANA
410 GET (167,66)-(184,80),APPLE
420 GET (77,76)-(100,98),BEAR
430 FOR I=1 TO 3000 : NEXT I
440 '
450 '   Start the game.
460 '
470 RANDOMIZE TIMER
480 REM
490 LINE (0,0)-(319,199),5,B
500 LINE (30,30)-(289,169),5,B
510 LINE (31,31)-(288,168),0,BF
520 '
530 '   Pick a number from 1 to 9 and one of the fruits.
540 '   Then place that many fruit on the screen.
550 '
560 N=INT(RND*9)+1
570 FRUIT=INT(RND*5)+1
580 IF N>=4 THEN I=1:GOSUB 900
590 IF N>=7 THEN I=2:GOSUB 900
600 IF N>=4 THEN I=3:GOSUB 900
610 IF N=2 OR N=3 OR N=6 OR N=8 OR N=9 THEN I=4:GOSUB 900
620 IF N=1 OR N=3 OR N=5 OR N=7 OR N=9 THEN I=5 : GOSUB 900
630 IF N=2 OR N=3 OR N=6 OR N=8 OR N=9 THEN I=6 : GOSUB 900
640 IF N>=4 THEN I=7 : GOSUB 900
650 IF N>=7 THEN I=8 : GOSUB 900
660 IF N>=4 THEN I=9 : GOSUB 900
670 WHILE INKEY$<>"" : WEND
680 '
690 '   Wait until the proper number key is pressed.  (Quit if Q is pressed.)
700 '
710 R$=INKEY$
720 IF R$=CHR$(27)  THEN RUN"MENU
730 IF R$<>CHR$(48+N) THEN 710
740 '
750 '   The correct key was pressed, add a happy bear face to the border.
760 '
770 NB=NB+1
780 XB=(NB-1)*32+3 : YB=3
790 IF NB>10 THEN XB=292 : YB=(NB-10)*35+3
800 IF NB>14 THEN XB=3 : YB=(NB-14)*35+3
810 IF NB>18 THEN YB=173 : XB=(NB-19)*32+3
820 PUT(XB,YB),BEAR,PSET
830 SOUND 115+NB*5,1:SOUND 350+NB*5,1:SOUND 756+NB*5,1:SOUND 1036+NB*5,1:SOUND 1435+NB*5,1
840 FOR T=1 TO 100 : NEXT T
850 IF NB=28 THEN GOTO 990
860 GOTO 510
870 '
880 '   Subroutine to plot a piece of fruit at position I.
890 '
900 ON FRUIT GOTO 910,920,930,940,950
910 PUT (X(I),Y(I)),CHERRY : RETURN
920 PUT (X(I),Y(I)),ORANGE : RETURN
930 PUT (X(I),Y(I)),PINEAPPLE : RETURN
940 PUT (X(I),Y(I)),BANANA : RETURN
950 PUT (X(I),Y(I)),APPLE : RETURN
960 '
970 '   The screen is full of bears, congratulate the kid.
980 '
990 LOCATE 10,19 : PRINT "YAY!"
1000 LOCATE 16,16:PRINT "YOU DID IT!"
1010 FOR T=1 TO 10 : SOUND 1435,1 : SOUND 1100,1 : NEXT T
1020 '
1030 '   Reset the game and go back for a new one.
1040 '
1050 R$=INKEY$ : IF R$<>"" THEN 1050
1060 FOR I=1 TO 3000 : NEXT I
1070 CLS : NB=0
1080 GOTO 480
1090 END
```
{% endraw %}

## BEARABC.BAS

{% raw %}
```bas
10 '                     B E A R A B C . B A S    5/20/88 1:32  PM
20 '
30 '     BEARY FUN ABC'S will help associate each picture with the
40 '     letter and the keyboard key.  It displays the picture then
50 '     waits for the entry of the proper key.  If the key isn't
60 '     pressed in 3 seconds, the letter will also be displayed on
70 '     the screen.  Each time the right key is pressed, a bear
80 '     is placed on the screen.
90 '
100 '
110 '    Initialize all variables and arrays.
120 '
130 CLEAR ,,,32768! : SCREEN 5 : COLOR 7,0 : CLS
140 COLOR 6,0 : LOCATE 6,1 : PRINT "Beary";
150 LOCATE 7,2 : PRINT "Fun"; : LOCATE 12,1 : PRINT "Letters";
160 LOCATE 24,1 : COLOR 4,0 : PRINT "  copyright 1985, Computing Specialties";
170 COLOR 6,0
180 '
190 '
200 '         Poke subroutine ALOAD into memory.
210 '
220 DEF SEG : ALOAD= 48000!
230 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD+IB,BYTE : NEXT IB
240 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
250 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
260 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
270 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
280 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
290 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
300 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
310 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
320 '
330 '           Load the title picture onto the screen.
340 '
350 SEG2%=&HB800 : BERR%=0 : FILE$="BEARABC.PIC" : CALL ALOAD(FILE$,SEG2%,BERR%)
360 SEG2%=&H1C00 : BERR%=0 : FILE$="BEARABC.PI2" : CALL ALOAD(FILE$,SEG2%,BERR%)
370 UP$=CHR$(0)+CHR$(72) : DN$=CHR$(0)+CHR$(80)
380 LT$=CHR$(0)+CHR$(75) : RT$=CHR$(0)+CHR$(77)
390 DIM A(150),B(150),C(150),D(150),E(150),F(150),G(150),H(150),I(150),J(150)
400 DIM K(150),L(150),M(150),N(150),O(150),P(150),Q(150),R(150),S(150),T(150)
410 DIM U(150),V(150),W(150),X(150),Y(150),Z(150),BEAR(150)
420 DIM XTL(28),YTL(28),XBR(28),YBR(28),LETTER(30),ALPHA(4)
430 DIM N$(40),T$(14)
440 FOR I=1 TO 7
450     XTL(I)=23+I*32 : XBR(I)=58+I*32 : YTL(I)=10 : YBR(I)=39
460     XTL(I+7)=23+I*32 : XBR(I+7)=58+I*32 : YTL(I+7)=50 : YBR(I+7)=79
470     XTL(I+14)=23+I*32 : XBR(I+14)=58+I*32 : YTL(I+14)=90 : YBR(I+14)=119
480     XTL(I+21)=20+I*35 : XBR(I+21)=55+I*35 : YTL(I+21)=140 : YBR(I+21)=169
490 NEXT I
500 XTL(6)=218 : XBR(22)=89 : XBR(19)=217 : XTL(21)=250 : XBR(26)=232
510 RANDOMIZE TIMER
520 '
530 '           Sort the letters into random order for a new game.
540 '
550 FOR I=1 TO 26 : LETTER(I)=I : NEXT I
560 LETTER(27)=INT(RND*26)+1 : LETTER(28)=INT(RND*26)+1
570 FOR I=1 TO 100
580     J=INT(RND*26)+1 : K=INT(RND*26)+1
590     T=LETTER(J) : LETTER(J)=LETTER(K) : LETTER(K)=T
600 NEXT I
610 '
620 '           Load the pictures and store each one in an array.
630 '
640 FOR I=1 TO 7
650     ON I GOTO 660,710,760,810,860,910,950
660     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),A
670     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),H
680     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),O
690     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),V
700     GOTO 980
710     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),B
720     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),I
730     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),P
740     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),W
750     GOTO 980
760     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),C
770     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),J
780     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),Q
790     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),X
800     GOTO 980
810     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),D
820     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),K
830     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),R
840     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),Y
850     GOTO 980
860     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),E
870     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),L
880     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),S
890     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),Z
900     GOTO 980
910     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),F
920     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),M
930     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),T
940     GOTO 980
950     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),G
960     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),N
970     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),U
980 NEXT I
990 GET (10,59)-(32,84),BEAR
1000 '
1010 '           Prepare for a new game.
1020 '
1030 CLS
1040 N=0 : NB=0
1050 LINE (0,0)-(319,199),5,B
1060 LINE (30,30)-(289,169),5,B
1070 LINE (31,31)-(288,168),0,BF
1080 '
1090 '           Pick the next letter and display the picture on the screen.
1100 '
1110 N=N+1 : K=LETTER(N) : X=150 : Y=90 : GOSUB 1760
1120 U$=CHR$(K-1+ASC("A")) : L$=CHR$(K-1+ASC("a"))
1130 WT=0
1140 '
1150 '           Wait until the proper key is pressed.
1160 '           If WT gets to 150, display the letters on the screen.
1170 R$=INKEY$
1180 WT=WT+1 : IF WT=150 THEN LOCATE 10,19 : PRINT U$;" ";L$ : WT=0
1190 IF R$=CHR$(27) THEN RUN"MENU
1200 IF R$<>L$ AND R$<>U$ THEN 1170
1210 '
1220 '           The correct key was pressed, put a bear face on the border.
1230 '
1240 NB=NB+1
1250 XB=(NB-1)*32+3 : YB=3
1260 IF NB>10 THEN XB=292 : YB=(NB-10)*35+3
1270 IF NB>14 THEN XB=3 : YB=(NB-14)*35+3
1280 IF NB>18 THEN YB=173 : XB=(NB-19)*32+3
1290 PUT (XB,YB),BEAR,PSET
1300 SOUND 115+NB*5,1 : SOUND 350+NB*5,1 : SOUND 756+NB*5,1 : SOUND 1036+NB*5,1 : SOUND 1435+NB*5,1
1310 IF NB<28 THEN GOTO 1070
1320 '
1330 '           The border is filled with bears, congratulate the kid.
1340 '
1350 LOCATE 10,16:PRINT "YAY  ";N$;"!"
1360 SOUND 115+NB*5,1:SOUND 350+NB*5,1:SOUND 756+NB*5,1:SOUND 1036+NB*5,1:SOUND 1435+NB*5,1
1370 LOCATE 16,16:PRINT "YOU DID IT!"
1380 FOR T=1 TO 10 : SOUND 1435,1 : SOUND 1100,1 : NEXT T
1390 FOR I=1 TO 3000 : NEXT I
1400 R$=INKEY$ : IF R$<>"" THEN 1400
1410 '
1420 '          End the game by playing the alphabet song.
1430 '
1440 CLS
1450 LINE (0,0)-(319,199),5,B : LINE (0,35)-(319,35),5
1460 DATA C4,C4,E4,E4,G4,G4,E2,F4,F4,E4,E4,D8,D8,D8,D8,C2
1470 DATA C4,C4,E2,G4,G4,E2,F8F8F4,E2,D4D4,C2
1480 DATA C4,NOW,C4,I'VE,E4,SAID,E4,MY,G4,A,G4,B,E2,C'S.
1490 DATA F4,WILL,F4,YOU,E4,COME,E4,AND,D4,PLAY,D4,WITH,C2,ME?
1500 IF N$(1)<>"" THEN GOTO 1530
1510 FOR K=1 TO 26 : READ N$(K) : NEXT K
1520 FOR K=27 TO 40 : READ N$(K),T$(K-26) : NEXT K
1530 FOR K=1 TO 26
1540   Y=INT(K/7)*40+50: X=(K MOD 7)*40+20
1550   GOSUB 1760
1560   IF K>20 THEN LINE (0,199)-(319,199),5
1570   R=INT(K/7)*5+6 : C=(K MOD 7)*5+4 : LOCATE R,C
1580   PRINT CHR$(ASC("A")+K-1);" ";CHR$(ASC("a")+K-1);
1590   PLAY "MFO3"+N$(K)
1600 NEXT K
1610 LINE (0,199)-(319,199),5
1620 LINE (1,1)-(318,34),0,BF
1630 FOR N=2 TO 3
1640   LOCATE N,5
1650   FOR K=1 TO 7
1660     NK=K+(N-2)*7
1670     PRINT T$(NK);" "; : PLAY "MFO3"+N$(NK+26)
1680   NEXT K
1690 NEXT N
1700 LINE (1,1)-(318,34),0,BF
1710 LOCATE 3,5
1720 FOR I=1 TO 3000 : NEXT I
1730 GOTO 1030
1740 REM ---------- SUBROUTINE PLOT PICTURE AT (X,Y) FOR LETTER NUMBER K ----------
1750 '
1760     IF K<13 THEN ON K GOTO 1780,1790,1800,1810,1820,1830,1840,1850,1860,1870,1880,1890
1770     ON K-12 GOTO 1900,1910,1920,1930,1940,1950,1960,1970,1980,1990,2000,2010,2020,2030
1780     PUT (X,Y),A,PSET : RETURN
1790     PUT (X,Y),B,PSET : RETURN
1800     PUT (X,Y),C,PSET : RETURN
1810     PUT (X,Y),D,PSET : RETURN
1820     PUT (X,Y),E,PSET : RETURN
1830     PUT (X,Y),F,PSET : RETURN
1840     PUT (X,Y),G,PSET : RETURN
1850     PUT (X,Y),H,PSET : RETURN
1860     PUT (X,Y),I,PSET : RETURN
1870     PUT (X,Y),J,PSET : RETURN
1880     PUT (X,Y),K,PSET : RETURN
1890     PUT (X,Y),L,PSET : RETURN
1900     PUT (X,Y),M,PSET : RETURN
1910     PUT (X,Y),N,PSET : RETURN
1920     PUT (X,Y),O,PSET : RETURN
1930     PUT (X,Y),P,PSET : RETURN
1940     PUT (X,Y),Q,PSET : RETURN
1950     PUT (X,Y),R,PSET : RETURN
1960     PUT (X,Y),S,PSET : RETURN
1970     PUT (X,Y),T,PSET : RETURN
1980     PUT (X,Y),U,PSET : RETURN
1990     PUT (X,Y),V,PSET : RETURN
2000     PUT (X,Y),W,PSET : RETURN
2010     PUT (X,Y),X,PSET : RETURN
2020     PUT (X,Y),Y,PSET : RETURN
2030     PUT (X,Y),Z,PSET : RETURN
```
{% endraw %}

## BUNNY.BAS

{% raw %}
```bas
10 '                       B U N N Y . B A S
20 '                                            Modified 5/20/88  1:33 pm
30 '
40 '    BUNNY LETTERS will help a pre-schooler learn the alphabet, by
50 '    matching pictures with the letters they start with.
60 '
70 '
80 '    Initialize all variables and arrays.
90 '
100 CLEAR ,,,32768! : SCREEN 5 : COLOR 7,0 : CLS
110 COLOR 11,0 : LOCATE 7,2 : PRINT "Bunny"; : LOCATE 12,1 : PRINT "Letters";
120 COLOR 4,0 : LOCATE 24,1 : PRINT "  copyright 1985, Computing Specialties";
130 COLOR 12,0
140 '
150 '
160 '         Poke subroutine ALOAD into memory.
170 '
180 DEF SEG : ALOAD= 48000!
190 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD+IB,BYTE : NEXT IB
200 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
210 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
220 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
230 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
240 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
250 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
260 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
270 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
280 '
290 '           Load the title picture onto the screen.
300 '
310 SEG2%=&HB800 : BERR%=0 : FILE$="BUNNY.PIC" : CALL ALOAD(FILE$,SEG2%,BERR%)
320 SEG2%=&H1C00 : BERR%=0 : FILE$="BUNNY.PI2" : CALL ALOAD(FILE$,SEG2%,BERR%)
330 UP$=CHR$(0)+CHR$(72) : DN$=CHR$(0)+CHR$(80)
340 LT$=CHR$(0)+CHR$(75) : RT$=CHR$(0)+CHR$(77)
350 DIM A(150),B(150),C(150),D(150),E(150),F(150),G(150),H(150),I(150),J(150)
360 DIM K(150),L(150),M(150),N(150),O(150),P(150),Q(150),R(150),S(150),T(150)
370 DIM U(150),V(150),W(150),X(150),Y(150),Z(150),BUNNY(150),RABBIT(150)
380 DIM XTL(28),YTL(28),XBR(28),YBR(28),LETTER(30),ALPHA(4)
390 DIM N$(40),T$(14)
400 M1$= "C4C4E4E4G4G4E2F4F4E4E4D8D8D8D8C2"
410 M2$= "C4C4E2G4G4E2F2E2D2C2"
420 M$=M1$+M2$
430 FOR I=1 TO 7
440     XTL(I)=23+I*32 : XBR(I)=58+I*32 : YTL(I)=10 : YBR(I)=39
450     XTL(I+7)=23+I*32 : XBR(I+7)=58+I*32 : YTL(I+7)=50 : YBR(I+7)=79
460     XTL(I+14)=23+I*32 : XBR(I+14)=58+I*32 : YTL(I+14)=90 : YBR(I+14)=119
470     XTL(I+21)=20+I*35 : XBR(I+21)=55+I*35 : YTL(I+21)=140 : YBR(I+21)=169
480 NEXT I
490 XTL(6)=218 : XBR(22)=89 : XBR(19)=217 : XTL(21)=250 : XBR(26)=232
500 RANDOMIZE TIMER
510 '
520 '           Sort the letters for a new game.
530 '
540 FOR I=1 TO 26 : LETTER(I)=I : NEXT I
550 FOR I=1 TO 50
560     J=INT(RND*26)+1 : K=INT(RND*26)+1
570     T=LETTER(J) : LETTER(J)=LETTER(K) : LETTER(K)=T
580 NEXT I
590 '
600 '           Load the pictures and store each one in an array.
610 '
620 FOR I=1 TO 7
630     ON I GOTO 640,690,740,790,840,890,930
640     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),A
650     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),H
660     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),O
670     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),V
680     GOTO 960
690     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),B
700     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),I
710     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),P
720     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),W
730     GOTO 960
740     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),C
750     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),J
760     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),Q
770     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),X
780     GOTO 960
790     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),D
800     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),K
810     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),R
820     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),Y
830     GOTO 960
840     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),E
850     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),L
860     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),S
870     GET (XTL(I+21),YTL(I+21))-(XBR(I+21),YBR(I+21)),Z
880     GOTO 960
890     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),F
900     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),M
910     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),T
920     GOTO 960
930     GET (XTL(I),YTL(I))-(XBR(I),YBR(I)),G
940     GET (XTL(I+7),YTL(I+7))-(XBR(I+7),YBR(I+7)),N
950     GET (XTL(I+14),YTL(I+14))-(XBR(I+14),YBR(I+14)),U
960 NEXT I
970 XB=240 : YB=145 : GET (XB,YB)-(XB+25,YB+15),BUNNY
980 GET (21,59)-(36,84),RABBIT
990 CLS
1000 '
1010 '           Clear the screen for a set of five rounds.
1020 '
1030 LINE (0,0)-(319,199),5,B : LINE (0,35)-(319,35),5
1040 FOR N=1 TO 5
1050 '
1060 '           Select four letters and place them on the screen
1070 '
1080   FOR R=1 TO 4 : ALPHA(R)=LETTER((N-1)*4+R) : NEXT R
1090   FOR R=1 TO 10 : I=INT(RND*4)+1 : J=INT(RND*4)+1
1100     T=ALPHA(I) : ALPHA(I)=ALPHA(J) : ALPHA(J)=T
1110   NEXT R
1120   FOR J=1 TO 4
1130     K=LETTER((N-1)*4+J) : L=ALPHA(J)
1140     LOCATE J*5+3,30 : PRINT CHR$(ASC("A")+L-1);" ";CHR$(ASC("a")+L-1)
1150     X=55 : Y=J*40+1
1160     GOSUB 2070 ' PUT PICTURE AT (X,Y) FOR LETTER NUMBER K
1170   NEXT J
1180 LOCATE 1,1
1190 '
1200 '           Place the pictures in a different order on the left side.
1210 '
1220 FOR J=1 TO 4
1230    K=LETTER((N-1)*4+J)
1240    FOR I=1 TO 4
1250      IF ALPHA(I)=K THEN TB=I*40+10
1260    NEXT I
1270 XB=95 : YB=J*40+10 : PUT (XB,YB),BUNNY,>= : XL(J)=XB-1 : YL(J)=YB+5 : XR(J)=XB-1 : YR(J)=YL(J)
1280 '
1290 '           Redraw all current lines on the screen and wait for a
1300 '           key press on the keyboard
1310 '
1320 FOR I=1 TO J-1 : LINE (XL(I),YL(I))-(XR(I),YR(I)),11 : NEXT I
1330 LINE(XL(J),YL(J))-(XR(J),YR(J)),5
1340 C$=INKEY$ : IF C$="" THEN 1340
1350 '
1360 '           A key was pressed, respond to it.
1370 '
1380 IF C$=CHR$(27) THEN RUN "MENU"
1390 IF C$=UP$ THEN YD=-10: GOTO 1480
1400 IF C$=DN$ THEN YD=+10: GOTO 1480
1410 IF C$=RT$ THEN XD=+10: GOTO 1480
1420 IF C$=LT$ THEN XD=-10: GOTO 1480
1430 IF C$="q" OR C$="Q" THEN RUN "MENU"
1440 GOTO 1340
1450 '
1460 '           Move the bunny in the direction indicated.
1470 '
1480 PUT (XB,YB),BUNNY,>= : LINE(XL(J),YL(J))-(XR(J),YR(J)),0
1490 IF XB+XD>=95 AND XB+XD<=205 THEN XB=XB+XD : XR(J)=XR(J)+XD
1500 IF YB+YD>=50 AND YB+YD<=170 THEN YB=YB+YD : YR(J)=YR(J)+YD
1510 PUT (XB,YB),BUNNY,>= : XD=0 : YD=0
1520 WHILE INKEY$<>"" : WEND
1530 IF XB<>205 OR YB<>TB THEN 1320
1540 '
1550 '          The bunny has reached the right letter,
1560 '          change the line to blue, and put the rabbit on the right side.
1570 '
1580 XR(J)=XR(J)+30
1590 PUT (XB,YB),BUNNY,>= : PUT (XB+80,YB),BUNNY,PSET
1600 LINE (XL(J),YL(J))-(XR(J),YR(J)),11
1610 PLAY "O3C32E32G32O4C8"
1620 WHILE INKEY$<>"" : WEND
1630 NEXT J
1640 '
1650 '          All lines are connected, put a rabbit on the top of the screen.
1660 '          Then clear the screen for a new round.
1670 '
1680 FOR W=1 TO 500 : NEXT W : PLAY "O4C32E32G32O5C8"
1690 PUT ((N-1)*60+25,5),RABBIT,PSET
1700 FOR I=1 TO 2000 : NEXT I
1710 LINE (1,36)-(318,198),0,BF
1720 NEXT N
1730 '
1740 '          All rabbits are in the top row.  End the game
1750 '          by playing the alphabet song.
1760 '
1770 DATA C4,C4,E4,E4,G4,G4,E2,F4,F4,E4,E4,D8,D8,D8,D8,C2
1780 DATA C4,C4,E2,G4,G4,E2,F8F8F4,E2,D4D4,C2
1790 DATA C4,NOW,C4,I'VE,E4,SAID,E4,MY,G4,A,G4,B,E2,C'S.
1800 DATA F4,WILL,F4,YOU,E4,COME,E4,AND,D4,PLAY,D4,WITH,C2,ME?
1810 IF N$(1)<>"" THEN GOTO 1840
1820 FOR K=1 TO 26 : READ N$(K) : NEXT K
1830 FOR K=27 TO 40 : READ N$(K),T$(K-26) : NEXT K
1840 FOR K=1 TO 26
1850   Y=INT(K/7)*40+50: X=(K MOD 7)*40+20
1860   GOSUB 2070
1870   IF K>20 THEN LINE (0,199)-(319,199),5
1880   R=INT(K/7)*5+6 : C=(K MOD 7)*5+4 : LOCATE R,C
1890   PRINT CHR$(ASC("A")+K-1);" ";CHR$(ASC("a")+K-1);
1900   PLAY "MFO3"+N$(K)
1910 NEXT K
1920 LINE (0,199)-(319,199),5
1930 LINE (1,1)-(318,34),0,BF
1940 FOR N=2 TO 3
1950   LOCATE N,5
1960   FOR K=1 TO 7
1970   NK=(N-2)*7+K
1980     PRINT T$(NK);" "; : PLAY "MFO3"+N$(NK+26)
1990   NEXT K
2000 NEXT N
2010 LINE (1,1)-(318,34),0,BF
2020 LOCATE 3,5
2030 FOR I= 1 TO 3000 : NEXT I
2040 GOTO 990
2050 REM ---------- SUBROUTINE PLOT PICTURE AT (X,Y) FOR LETTER NUMBER K ----------
2060 '
2070     IF K<13 THEN ON K GOTO 2090,2100,2110,2120,2130,2140,2150,2160,2170,2180,2190,2200
2080     ON K-12 GOTO 2210,2220,2230,2240,2250,2260,2270,2280,2290,2300,2310,2320,2330,2340
2090     PUT (X,Y),A,PSET : RETURN
2100     PUT (X,Y),B,PSET : RETURN
2110     PUT (X,Y),C,PSET : RETURN
2120     PUT (X,Y),D,PSET : RETURN
2130     PUT (X,Y),E,PSET : RETURN
2140     PUT (X,Y),F,PSET : RETURN
2150     PUT (X,Y),G,PSET : RETURN
2160     PUT (X,Y),H,PSET : RETURN
2170     PUT (X,Y),I,PSET : RETURN
2180     PUT (X,Y),J,PSET : RETURN
2190     PUT (X,Y),K,PSET : RETURN
2200     PUT (X,Y),L,PSET : RETURN
2210     PUT (X,Y),M,PSET : RETURN
2220     PUT (X,Y),N,PSET : RETURN
2230     PUT (X,Y),O,PSET : RETURN
2240     PUT (X,Y),P,PSET : RETURN
2250     PUT (X,Y),Q,PSET : RETURN
2260     PUT (X,Y),R,PSET : RETURN
2270     PUT (X,Y),S,PSET : RETURN
2280     PUT (X,Y),T,PSET : RETURN
2290     PUT (X,Y),U,PSET : RETURN
2300     PUT (X,Y),V,PSET : RETURN
2310     PUT (X,Y),W,PSET : RETURN
2320     PUT (X,Y),X,PSET : RETURN
2330     PUT (X,Y),Y,PSET : RETURN
2340     PUT (X,Y),Z,PSET : RETURN
```
{% endraw %}

## FILES647.TXT

{% raw %}
```
Disk No  647
Program Title: AMY'S FIRST PRIMER for the PC-jr
PC-SIG version 1.1

AMY'S FIRST PRIMER is a collection of simple games for young children that
help them with skills like counting, letter recognition, simple problem
solving, pattern recognition, and keyboard use.

Usage: Educational

System Requirements: PCjr with 128K memory.

How to Start: Type GO (press enter).

Suggested Registration: $15.00

File Descriptions:

README        Quick instructions for a fast start.
AMY      DOC  16 page users guide to print out.
GO       BAT  Batch file to start the programs.
AUTOEXEC BAT  Batch file for auto-startup.
START    BAS  Startup program to display initial information screen.
MENU     BAS  MENU program to provide access to the other programs.
ABC      BAS  ABC SONG Musical program for picture/word/letter association
BEARABC  BAS  BEARY FUN ABC'S program to learn the keyboard and the alphabet.
BUNNY    BAS  BUNNY LETTERS program to learn the alphabet.
BEAR123  BAS  BEARY FUN COUNTING program to learn counting and numbers.
FROG     BAS  HELP THE FROGGY Maze program for problem solving.
TRUCK    BAS  LOAD THE TRUCK program for shapes, colors, patterns and order.
MENU     PIC  1st half of picture screen for MENU program.
MENU     PI2  2nd half of picture screen for MENU program.
ABC      PIC  1st half of picture screen for ABC program.
ABC      PI2  2nd half of picture screen for ABC program.
BEARABC  PIC  1st half of picture screen for BEARABC program.
BEARABC  PI2  2nd half of picture screen for BEARABC program.
BUNNY    PIC  1st half of picture screen for BUNNY program.
BUNNY    PI2  2nd half of picture screen for BUNNY program.
BEAR123  PIC  1st half of picture screen for BEAR123 program.
BEAR123  PI2  2nd half of picture screen for BEAR123 program.
FROG     PIC  1st half of picture screen for FROG program.
FROG     PI2  2nd half of picture screen for FROG program.
TRUCK    PIC  1st half of picture screen for TRUCK program.
TRUCK    PI2  2nd half of picture screen for TRUCK program.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## FROG.BAS

{% raw %}
```bas
10 '             F R O G . B A S          5/20/88  1:33 PM
20 '
30 '    HELP THE FROGGY generates random mazes for a child to solve
40 '    by guiding a frog to the lily pad at the end of the maze.
50 '    The size of the maze may be set to a 5x5, 6x6, or 7x7 maze by changing
60 '    the value for the variable SIZE in line 120 below.
70 '
80 ' **      Algorithm for generic maze generator by Dan Rollins, 04/25/83
90 ' **      Rest of program by Rob Robinson 12/28/85
100 '
110 '    Initialize all variables.
120 '
130 DEFINT A-R,T-Z
140 CLEAR,,,32768! : SCREEN 5 : COLOR 2,1 : CLS : SOUND OFF
150 COLOR 4,1 : LOCATE 2,13 : PRINT "HELP THE FROGGY"
160 LOCATE 24,1 : PRINT "  copyright 1985, Computing Specialties";
170 COLOR 2,1
180 '
190 '
200 '         Poke subroutine ALOAD into memory.
210 '
220 DEF SEG : ALOAD= 48000!
230 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD+IB,BYTE : NEXT IB
240 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
250 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
260 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
270 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
280 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
290 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
300 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
310 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
320 '
330 '           Load the title picture onto the screen.
340 '
350 SEG2%=&HB800 : BERR%=0 : FILE$="FROG.PIC" : CALL ALOAD(FILE$,SEG2%,BERR%)
360 SEG2%=&H1C00 : BERR%=0 : FILE$="FROG.PI2" : CALL ALOAD(FILE$,SEG2%,BERR%)
370 SIZE=7
380 DIM T(5),MZ(100,100)
390 DIM YD(3),XD(3) : YD(0)=-1 : XD(1)=1 : YD(2)=1 : XD(3)=-1
400 DIM PWR2(3) : PWR2(0)=1 : PWR2(1)=2 : PWR2(2)=4 : PWR2(3)=8
410 RANDOMIZE TIMER
420 DIM FROGGY(250),PAD(250)
430 '
440 '   Load the title picture onto the screen and fill the graphics arrays.
450 '
460 LOCATE 25,7 : COLOR 5,1
470 GET (41,20)-(71,36),FROGGY
480 GET (236,150)-(285,165),PAD
490 '
500 '   Generate a random maze.
510 '
520 H=SIZE-1 : V=SIZE-1 : TH=H*30+3 : TV=V*20+30
530 X=INT(RND*H) : Y=INT(RND*V)
535 LOCATE 25,4 : PRINT "Please wait ... Making a new maze";
540 GOSUB 710
550 MZ(0,0)=MZ(0,0)+1
560 '
570 '   Display the maze on the screen.
580 '
590 GOSUB 940
600 '
610 '   Solve the maze.
620 '
630 GOSUB 1130
640 '
650 '   Go back for another maze.
660 '
670 GOTO 420
680 '
690 '           Subroutine to generate a randome maze.
700 '
710 FOR J=0 TO H : FOR K=0 TO V : MZ(J,K)=0 : NEXT : NEXT
720 LS=1
730 RC=0 : TR=(H+1)*(V+1)-1
740 Q=0 : IF RC=TR THEN RETURN
750 IF PLAY(0)<4 THEN GOSUB 1820
760 IF Y>0 THEN IF MZ(X,Y-1)=0 THEN Q=Q+1 : T(Q)=0
770 IF X<H THEN IF MZ(X+1,Y)=0 THEN Q=Q+1 : T(Q)=1
780 IF Y<V THEN IF MZ(X,Y+1)=0 THEN Q=Q+1 : T(Q)=2
790 IF X>0 THEN IF MZ(X-1,Y)=0 THEN Q=Q+1 : T(Q)=3
800 IF Q=0 GOTO 880
810 D=INT(RND*Q)+1 : DIR=T(D)
820 MZ(X,Y)=MZ(X,Y)+PWR2(DIR)
830 Y=Y+YD(DIR) : X=X+XD(DIR)
840 ND=DIR-2 : IF ND<0 THEN ND=4+ND
850 MZ(X,Y)=MZ(X,Y)+PWR2(ND)
860 RC=RC+1
870 GOTO 740
880 Y=Y+1 : IF Y>V THEN Y=0 : X=X+1 : IF X>H THEN X=0
890 IF MZ(X,Y)=0 THEN 880
900 GOTO 740
910 '
920 '           Subroutine to display the maze on the screen.
930 '
940 CLS : LOCATE 25,7
950 PRINT "H E L P   T H E   F R O G G Y";
960 DX=30 : DY=20 : PX=DX : PY=DY : CL=6
970 FOR Y=0 TO V
980   FOR X=0 TO H
990     IF INT(MZ(X,Y)/2)=MZ(X,Y)/2 THEN LINE (PX,PY)-(PX+DX,PY),CL : PX=PX+DX : GOTO 1010
1000     PX=PX+DX
1010   NEXT X : PX=DX
1020   FOR X=0 TO H
1030     IF MZ(X,Y)>7 THEN PX=PX+DX : GOTO 1050
1040     LINE(PX,PY)-(PX,PY+DY),CL : PX=PX+DX
1050   NEXT X : LINE(PX,PY)-(PX,PY+DY),CL : PX=DX : PY=PY+DY
1060 NEXT Y
1070 FOR X=0 TO H-1
1080 LINE (PX,PY)-(PX+DX,PY),CL : PX=PX+DX
1090 NEXT X
1100 RETURN
1110 '
1120 '           Subroutine to solve the maze.
1130 '          Set up variables for playing
1140 '
1150 PX=DX+1 : PY=DY+1 : MOVES=0
1160 BLANK=0 : RED=4 : BLUE=1
1170 NUL$=CHR$(0) : UP$=NUL$+CHR$(72) : DN$=NUL$+CHR$(80)
1180 RT$=NUL$+CHR$(77) : LT$=NUL$+CHR$(75) : STIME$=TIME$
1190 PUT (PX*(V+1)-8,PY*(V+2)+8),PAD,PSET
1200 PUT (PX,PY),FROGGY,>=
1210 C$=INKEY$ : IF C$=CHR$(27) THEN RUN"menu"
1220 IF C$<>"" THEN 1210
1230 '
1240 '           Wait until a key is pressed, then compute the direction desired
1250 '
1260 C$=INKEY$ : IF C$="" THEN 1260
1270 DX=0 : DY=0 : TX=0 : TY=0
1280 IF C$=CHR$(27) THEN SOUND OFF : RUN "menu"
1290 IF C$=UP$ AND PY>21 THEN DY=-20 : TY=-1
1300 IF C$=DN$ AND PY<TV THEN DY=20 : TY=+19
1310 IF C$=RT$ AND PX<TH THEN DX=30 : TX=+29
1320 IF C$=LT$ AND PX>31 THEN DX=-30 : TX=-1
1330 IF DX=0 AND DY=0 THEN 1260
1340 '
1350 '           Check to see if a maze wall is blocking the desired path.
1360 '
1370 S=POINT (PX+TX,PY+TY)
1380 IF S<>BLANK AND S<>RED AND S<>BLUE THEN 1260
1390 '
1400 '           Move the froggy to the new spot.
1410 '
1420 S=POINT(PX+DX+15,PY+DY+10)
1430 PUT (PX,PY),FROGGY,>=
1440 SOUND  37,4 :SOUND  88,2
1450 '
1460 '           If the frog moved backwards, erase the red line.
1470 '           If it moved forward, plot a red line showing the path.
1480 '
1490 IF S=RED THEN LINE (PX+15,PY+10)-(PX+DX+15,PY+DY+10),BLANK ELSE LINE (PX+15,PY+10)-(PX+DX+15,PY+DY+10),RED
1500 '
1510 '           Update the coordinates and the number of moves.
1520 '
1530 PX=PX+DX : PY=PY+DY : MOVES=MOVES+1
1540 LOCATE 24,1 : COLOR 5,1 : PRINT MOVES;" moves";
1550 '
1560 '           If the frog isn't on the pad yet, go back for another move.
1570 '
1580 IF PX>TH-30 AND PY>TV THEN 1630 ELSE 1200
1590 '
1600 '           The frog is on the pad, give him a fly to catch and eat.
1610 '           then go back for another game with a new maze.
1620 '
1630 PUT (PX,PY),FROGGY,PSET : LOCATE 1,1
1640 FL=PX+50 : FR=PX+75 : FT=PY : FB=PY+15 : FX=FR : FY=FB
1650 FOR I=1 TO 50
1660   PSET (FX,FY),0 : FX=INT(RND*6-3)+FX : FY=INT(RND*6-3)+FY
1670   PSET (FX,FY),14
1680   SOUND 37+RND*25,0.25
1690 NEXT I
1700 LINE (PX+28,PY+6)-(FX,FY),4
1710 SOUND 1050,0.5
1720 LINE (PX+28,PY+6)-(FX,FY),0
1730 FOR I=1 TO 25 : SOUND 97,0.02
1740 LINE (PX+23,PY+6)-(PX+28,PY+6),2 : LINE (PX+23,PY+6)-(PX+28,PY+6),0
1750 FOR J=1 TO 50 : NEXT J
1760 NEXT I
1770 PSET (PX+23,PY+6),2 : PSET (PX+24,PY+5),0
1780 T$=INKEY$ : IF T$="" THEN 1810
1790 IF T$=CHR$(27) THEN RUN"MENU"
1800 GOTO 1780
1810 GOTO 520
1820 '
1830 '          SUBROUTINE TO PLAY "FROGGY WENT A COURTIN"
1840 '
1850 ON LS GOTO 1860,1880,1900
1860 PLAY "MBMST200O1C4F8F8F8F8F8F8A4 G4 D4MLC4F2F4C4F2F4P4"
1870 GOTO 1910
1880 PLAY "MSA8>C8C8C8C8C8D4C4<A4 F4"
1890 GOTO 1910
1900 PLAY "  MST200G4F4F4MLF8G8MSA4F4D4MLC4F2F4C4F4F2"
1910 LS=LS+1 : IF LS=4 THEN LS=1
1920 RETURN
```
{% endraw %}

## MENU.BAS

{% raw %}
```bas
10 '                   M E N U . B A S                 5/20/88 1:31 pm
20 '
30 '   MENU provides a menu for access to Amy's Pre-school Primer.  It loads
40 '   a picture with the menu on it, and then let's a child select the
50 '   desired program by moving a big blue arrow up or down with the
60 '   cursor keys.  The name of the program is also highlighted in blue when
70 '   the arrow points to it.  When the child presses the ENTER key, the
80 '   program with the arrow pointing to it will be run.
90 '
100 '
110 CLEAR ,48000!,,32768! : SCREEN 5 : COLOR 14,0 : KEY OFF : CLS
120 LOCATE 22,12 : PRINT "AMY'S FIRST PRIMER  V1.3"
130 LOCATE 24,1 : COLOR 4,0 : PRINT "  copyright 1985, Computing Specialties";
140 '
150 '
160 '         Poke subroutine ALOAD into memory.
170 '
180 DEF SEG : ALOAD= 48000!
190 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD+IB,BYTE : NEXT IB
200 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
210 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
220 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
230 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
240 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
250 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
260 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
270 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
280 '
290 '           Load the menu picture onto the screen.
300 '
310 SEG2%=&HB800 : BERR%=0 : FILE$="MENU.PIC" : CALL ALOAD(FILE$,SEG2%,BERR%)
320 SEG2%=&H1C00 : BERR%=0 : FILE$="MENU.PI2" : CALL ALOAD(FILE$,SEG2%,BERR%)
330 MYNAME$="AMY"
340 LOCATE 22,15-LEN(MYNAME$) : COLOR 14,0 : PRINT MYNAME$; : COLOR 4,0
350 '
360 '           Initialize all necessary variables.
370 '
380 UP$=CHR$(0)+CHR$(72) : DN$=CHR$(0)+CHR$(80)
390 TITLE$(1)="ABC SONG"
400 TITLE$(2)="BEARY FUN LETTERS"
410 TITLE$(3)="BUNNY LETTERS"
420 TITLE$(4)="BEARY FUN COUNTING"
430 TITLE$(5)="HELP THE FROGGY"
440 TITLE$(6)="LOAD THE TRUCK"
450 '
460 '           Get the arrow into an array, then point it at the first
470 '           program on the menu.
480 '
490 DIM ARROW(200) : GET (6,1)-(55,28),ARROW : LINE (6,1)-(55,28),0,BF
500 N=1 : X=6 : Y=1 : PUT (X,Y),ARROW,>= : ROW=3 : COL=22 : L=1
510 LOCATE ROW,COL : COLOR 9,0 : PRINT TITLE$(N);
520 WHILE INKEY$<>"" : WEND
530 '
540 '           Wait until one of the three command keys are pressed.
550 '           The up arrow will move the arrow up and select the previous
560 '           program.  The down arrow will move the arrow down and select
570 '           the next program.  The ENTER key will run the selected program.
580 '
590 K$=INKEY$ : IF K$="" THEN 590
595 IF K$="Q" OR K$="q" THEN SYSTEM
600 IF K$=CHR$(13) THEN GOTO 790
610 IF K$=UP$ AND N>1 THEN N=N-1
620 IF K$=DN$ AND N<6 THEN N=N+1
630 '
640 '           Remove the arrow from the current program and place it on the
650 '           newly selected program.  Also change the current program name
660 '           back to red and the new program name to blue.
670 '
680 PUT (X,Y),ARROW,>= : LOCATE ROW,COL : COLOR 4,0 : PRINT TITLE$(L);
690 Y=6+(N-1)*24 : ROW=N*3 : L=N
700 PUT (X,Y),ARROW,>= : LOCATE ROW,COL : COLOR 9,0 : PRINT TITLE$(N);
710 WHILE INKEY$<>"" : WEND
720 '
730 '           Go back for another key press.
740 '
750 GOTO 590
760 '
770 '           The ENTER key was pressed, execute the selected program.
780 '
790 ON N GOTO 800,810,820,830,840,850
800 RUN"ABC"
810 RUN"BEARABC"
820 RUN"BUNNY"
830 RUN"BEAR123"
840 RUN"FROG"
850 RUN"TRUCK"
860 END
```
{% endraw %}

## START.BAS

{% raw %}
```bas
10 '                    S T A R T . B A S          5/20/88  1:31 pm
20 '
30 '    START displays the copyright message for Amy's First Primer.
40 '
50 CLEAR ,,,32768! : SCREEN 5 : DEF SEG : KEY OFF : CLS
60 LOCATE 1,12 : COLOR 9,0 : PRINT "AMY'S FIRST PRIMER"
70 COLOR 5,0 : LOCATE 3,1
80 PRINT "This disk is dedicated to Amy, whose "
90 PRINT "birthday came on September 8. It helped"
100 PRINT "her wait another year for kindergarten"
110 PRINT
120 PRINT "We hope this disk will help your child"
130 PRINT "too. It's recommended for children 4-8."
140 PRINT "These programs should help to learn the"
150 PRINT "alphabet and the numbers 1 through 9."
160 PRINT "They will also help build skills in "
170 PRINT "problem solving and pattern matching."
180 PRINT : COLOR 5,0
190 PRINT "If you find the disk helpful,we request";
200 PRINT "that you send $15.00 (US) to:"
210 COLOR 14,0
220 PRINT "             Rob Robinson "
230 PRINT "          523 Albany Ave. NE"
240 PRINT "        Orange City, IA  51041"
250 COLOR 5,0
260 PRINT "In appreciation, we'll send you a free"
270 PRINT "copy of the DRAW program used to create"
280 PRINT "the graphics for this disk."
290 PRINT : COLOR 9,0
300 PRINT "      Press any key to continue.";
310 PRINT : COLOR 4,0
320 PRINT " copyright 1985, Computing Specialties";
330 WHILE INKEY$="" : WEND
340 RUN "menu"
```
{% endraw %}

## TRUCK.BAS

{% raw %}
```bas
10 '                            T R U C K . B A S          5/20/88 1:34 PM
20 '
30 '    LOAD THE TRUCK helps with problem solving, pattern recognition,
40 '    and following orders.  Stock piles of shapes are stored on the
50 '    left side of the screen, with a loader in the middle and a
60 '    truck trailer at the bottom left.  A deisel tractor is at the
70 '    bottom right.  An order form at the top left of the screen
80 '    indicates which shapes are needed on the trailer.  The child
90 '    must use the loader to fill the trailer with the same pattern
100 '   that is on the order form.  When the order is filled properly,
110 '   and the loader is out of the way, the tractor will back up
120 '   and haul the load away.
130 '
140 CLEAR,,,32768! : SCREEN 5 : KEY OFF : CLS
150 COLOR 9,0 : LOCATE 25,7
160 PRINT "L O A D   T H E   T R U C K"
170 COLOR 4,0 : LOCATE 24,1 : PRINT "  copyright 1985, Computing Specialties";
180 '
190 '
200 '         Poke subroutine ALOAD into memory.
210 '
220 DEF SEG : ALOAD= 48000!
230 FOR IB=0 TO  95 : READ BYTE : POKE ALOAD+IB,BYTE : NEXT IB
240 DATA &H55, &H8B, &HEC, &H8B, &H5E, &H0A, &H8A, &H0F, &HB5, &H00, &H8B, &H77
250 DATA &H01, &H8B, &H5E, &H08, &H8B, &H07, &H8E, &HC0, &HBF, &H00, &H00, &HA4
260 DATA &HE2, &HFD, &HB0, &H00, &HAA, &H1E, &H06, &H1F, &H07, &HB0, &H00, &HB4
270 DATA &H3D, &HBA, &H00, &H00, &HCD, &H21, &H72, &H24, &H8B, &HD8, &HB9, &H07
280 DATA &H00, &HBA, &H00, &H00, &HB4, &H3F, &HCD, &H21, &H3B, &HC1, &H74, &H05
290 DATA &HB8, &H0D, &H00, &H75, &H0F, &HBE, &H05, &H00, &H8B, &H0C, &HB4, &H3F
300 DATA &HBA, &H00, &H00, &HCD, &H21, &HB8, &H00, &H00, &H8B, &H7E, &H06, &H26
310 DATA &H89, &H05, &HB4, &H3E, &HCD, &H21, &H06, &H1F, &H5D, &HCA, &H06, &H00
320 '
330 '           Load the title picture onto the screen.
340 '
350 SEG2%=&HB800 : BERR%=0 : FILE$="TRUCK.PIC" : CALL ALOAD(FILE$,SEG2%,BERR%)
360 SEG2%=&H1C00 : BERR%=0 : FILE$="TRUCK.PI2" : CALL ALOAD(FILE$,SEG2%,BERR%)
370 '
380 '   Fill the shape tables with the figures on the screen.
390 '
400 DIM LOADER(300), TRAILER(300), TRACTOR(300), COMBO(900)
410 DIM SQUARE(100),DIAMOND(100),RECTANGLE(100),TRIANGLE(100),SIRCLE(100)
420 GET (0,7)-(15,19),SQUARE : GET (0,32)-(15,44),DIAMOND
430 GET (0,57)-(15,69),RECTANGLE : GET (0,82)-(15,94),TRIANGLE
440 GET (0,107)-(15,119),SIRCLE  : GET (144,50)-(221,76),LOADER
450 GET (11,152)-(115,168),TRAILER : GET (246,135)-(305,170),TRACTOR
460 '
470 '   Fill the order square with four random shapes.
480 '
490 LINE (223,12)-(301,30),0,BF
500 RANDOMIZE TIMER
510 FOR I=1 TO 4
520     SHAPE=INT(RND*5)+1 : XS=215+I*18 : YS=16
530     GOSUB 2010  ' PLOT SHAPE AT XS,YS
540     ORDER(I)=SHAPE
550 NEXT I
560 '
570 '   Set up the variables for moving the loader.
580 '
590 XL=145 : YL=50 : LINE (XL,YL)-(221,76),0,BF : PUT (XL,YL),LOADER,>=
600 FOR I=1 TO 5 : NLEFT(I)=5 : NEXT I : S=1
610 YS=ORDER(S)*25-25 : NS=NLEFT(ORDER(S)) : XS=NS*15-15
620 NUL$=CHR$(0) : UP$=NUL$+CHR$(72) : DN$=NUL$+CHR$(80) : LT$=NUL$+CHR$(75)
630 RT$=NUL$+CHR$(77)
640 '
650 '   Let the buldozer move around the screen until the shape S is found.
660 '
670 C$=INKEY$
680 T=T+1 : IF T=10 THEN T=0 : SOUND 37,0.1
690 IF C$="" THEN 670
700 SOUND 37,0.1 : T=5
710 IF C$=CHR$(27) THEN RUN"MENU"
720 XO=XL : YO=YL
730 IF C$=LT$ THEN XL=XL+5*(XL>4) : GOTO 770
740 IF C$=RT$ THEN XL=XL-5*(XL<240) : GOTO 770
750 IF C$=UP$ THEN YL=YL+5*(YL>4)  : GOTO 770
760 IF C$=DN$ THEN YL=YL-5*(YL<150) : GOTO 770
770 PUT (XO,YO),LOADER,>=
780 PUT (XL,YL),LOADER,>=
790 WHILE INKEY$<>"" : WEND
800 IF YL<100 AND S=5 THEN GOTO 1600
810 IF XL<>XS OR YL<>YS THEN GOTO 670
820 '
830 '   The shape has been found, raise the hoist.
840 '
850 YS=YS+5 : GET (XS,YS)-(XS+17,YS+15),COMBO
860 LINE (XS,YS)-(XS+17,YS+15),0,BF : PUT (XS,YS),COMBO,>=
870 FOR I=1 TO 5
880   PUT (XS,YS),COMBO,>=
890   YS=YS-1
900   PUT (XS,YS),COMBO,>=
910   SOUND 100+I*5,1
920 NEXT I
930 GOSUB 2070
940 '
950 '   Get the loader and shape as one figure.
960 '
970 GET (XL+2,YL)-(XL+77,YL+25),COMBO : LINE (XL+2,YL)-(XL+77,YL+25),0,BF
980 PUT (XL,YL),COMBO,>= : XS=110 : YS=140
990 '
1000 '   Let the buldozer move around the screen until it gets to the
1010 '   back of the trailer.
1020 '
1030 C$=INKEY$
1040 T=T+1 : IF T=10 THEN T=0 : SOUND 57,0.1
1050 IF C$="" THEN 1030
1060 SOUND 57,0.1 : T=5
1070 IF C$=CHR$(27) THEN RUN"MENU
1080 XO=XL : YO=YL
1090 IF C$=LT$ THEN XL=XL+5*(XL>4) : GOTO 1130
1100 IF C$=RT$ THEN XL=XL-5*(XL<250) : GOTO 1130
1110 IF C$=UP$ THEN YL=YL+5*(YL>4)  : GOTO 1130
1120 IF C$=DN$ THEN YL=YL-5*(YL<150) : GOTO 1130
1130 PUT (XO,YO),COMBO,>=
1140 PUT (XL,YL),COMBO,>=
1150 WHILE INKEY$<>"" : WEND
1160 IF XL<>XS OR YL<>YS THEN GOTO 1030
1170 '
1180 '   The trailer has been found, slide the shape back onto the truck
1190 '
1200 GET (XS-50,YS)-(XS+15,YS+13),COMBO
1210 LINE (XS-50,YS)-(XS+15,YS+13),0,BF : PUT (XS-50,YS),COMBO,>=
1220 FOR I=1 TO 15
1230   PUT (XS-50,YS),COMBO,>=
1240   XS=XS-1
1250   PUT (XS-50,YS),COMBO,>=
1260 SOUND 150+I*10,1
1270 NEXT I
1280 GOSUB 2070
1290 GET (XS+14,YS)-(XS+15,YS+13),COMBO : LINE (XS+14,YS)-(XS+15,YS+13),0,BF
1300 XS=XS+14 : PUT (XS,YS),COMBO,>=
1310 FOR I=1 TO 15
1320   PUT (XS,YS),COMBO,>=
1330   XS=XS+1
1340   PUT (XS,YS),COMBO,>=
1350 SOUND 300-I*10,1
1360 NEXT I
1370 GOSUB 2070
1380 '
1390 '   The shape has been loaded, lower the hoist.
1400 '
1410 YS=YL : XS=XL : GET (XS,YS)-(XS+15,YS+15),COMBO
1420 LINE (XS,YS)-(XS+15,YS+15),0,BF : PUT (XS,YS),COMBO,>=
1430 FOR I=1 TO 5
1440   PUT (XS,YS),COMBO,>=
1450   YS=YS+1
1460   PUT (XS,YS),COMBO,>=
1470 SOUND 125-I*5,1
1480 NEXT I
1490 GOSUB 2070
1500 '
1510 '   Switch to the regular loader again and go back for another shape.
1520 '
1530 LINE (XL,YL)-(XL+76,YL+26),0,BF
1540 PUT (XL,YL),LOADER,>=
1550 NLEFT(ORDER(S))=NLEFT(ORDER(S))-1
1560 S=S+1
1570 GOTO 610
1580 '
1590 '   The truck is loaded and the loader is out of the way,
1600 '  Back the truck up.
1610 '
1620 XT=246 : YT=133 : LINE (246,135)-(305,170),0,BF : PUT (XT,YT),TRACTOR,>=
1630 PLAY "O1C2P4C2"
1640 WHILE XT>100
1650   PUT (XT,YT),TRACTOR,>=
1660   XT=XT-5
1670   PUT (XT,YT),TRACTOR,>=
1680   SOUND 300,0.1
1690 WEND
1700 '
1710 '  Haul the load off
1720 '
1730 PLAY "O1C2P4C2P4CDEF8P8CDEF8P8"
1740 GET (5,134)-(175,170),COMBO : XT=5 : YT=134
1750 WHILE XT<155
1760   XT=XT+5 : PUT (XT,YT),COMBO,PSET
1770   SOUND 300,0.1
1780 WEND
1790 WHILE XT<314
1800   GET (XT,YT)-(314,170),COMBO
1810   XT=XT+5 : PUT (XT,YT),COMBO,PSET
1820 SOUND 300,0.1
1830 WEND
1840 FOR I=1 TO 2000 : NEXT I
1850 '
1860 '  Set up the screen for a new game.
1870 '
1880 CLS : LOCATE 25,7 : COLOR 9,0
1890 PRINT "L O A D   T H E   T R U C K";
1900 PUT (144,50),LOADER,PSET
1910 PUT (11,152),TRAILER,PSET : PUT (246,135),TRACTOR,PSET
1920 FOR I=0 TO 4
1930    PUT (I*16,7),SQUARE,PSET
1940    PUT (I*16,32),DIAMOND,PSET
1950    PUT (I*16,57),RECTANGLE,PSET
1960    PUT (I*16,82),TRIANGLE,PSET
1970    PUT (I*16,107),SIRCLE,PSET
1980 NEXT I
1990 LINE(222,11)-(302,31),15,B
2000 GOTO 510
2010 ON SHAPE GOTO 2020,2030,2040,2050,2060
2020 PUT (XS,YS),SQUARE : RETURN
2030 PUT (XS,YS),DIAMOND : RETURN
2040 PUT (XS,YS),RECTANGLE : RETURN
2050 PUT (XS,YS),TRIANGLE : RETURN
2060 PUT (XS,YS),SIRCLE : RETURN
2070 FOR I=1 TO 300 : NEXT I : RETURN
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0647

     Volume in drive A has no label
     Directory of A:\

    ABC      BAS      5494   5-20-88   1:31p
    ABC      PI2     16392   1-01-80   2:17a
    ABC      PIC     16392   1-01-80   2:17a
    AMY      DOC     23420   5-20-88   5:47p
    AUTOEXEC BAT        11   5-20-88   5:53p
    BEAR123  BAS      3779   5-20-88   1:32p
    BEAR123  PI2     16392   1-01-80   3:18a
    BEAR123  PIC     16392   1-01-80   3:18a
    BEARABC  BAS      7411   5-20-88   1:31p
    BEARABC  PI2     16392   1-01-80  12:08a
    BEARABC  PIC     16392   1-01-80  12:08a
    BUNNY    BAS      8326   5-20-88   1:32p
    BUNNY    PI2     16392   1-01-80   2:07a
    BUNNY    PIC     16392   1-01-80   2:07a
    FILES647 TXT      2177   8-15-88   2:20p
    FROG     BAS      6197   5-20-88   1:32p
    FROG     PI2     16392   1-01-80   2:52a
    FROG     PIC     16392   1-01-80   2:52a
    GO       BAT        15   6-08-88   3:47p
    MENU     BAS      3509   5-20-88   1:31p
    MENU     PI2     16392   1-01-80  12:22a
    MENU     PIC     16392   1-01-80  12:22a
    README            1072   5-20-88   1:36p
    START    BAS      1202   5-20-88   1:30p
    TRUCK    BAS      6617   5-20-88   1:33p
    TRUCK    PI2     16392   1-01-80   4:04a
    TRUCK    PIC     16392   1-01-80   4:04a
           27 file(s)     298718 bytes
                               0 bytes free
