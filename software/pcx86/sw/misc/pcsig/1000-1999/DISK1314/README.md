---
layout: page
title: "PC-SIG Diskette Library (Disk #1314)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1314/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1314"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROGRAM GRAB BAG"

    For the PC practical joker, here are several safe (but insane) scams to
    play on some unsuspecting user's computer.  Place them in a batch file
    or on his hard disk.  When he comes back and touches a key or boots up
    his computer, look out!  One trick makes his machine sound like it's
    filling with water and then it goes into a spin drive cycle!  Fun
    galore.  Don't blame us, though, if your victim gets even!
    
    Other programs included here are a bit tamer: Convert almost any U.S
    measurement to the metric equivalent and vice versa; covers temperature,
    liquid, weight, linear distance, speed, and square and cubic volumes.
    CHK4BOMB checks a program to see if it does any disk writing or
    formatting and also displays any text it finds in the program code.
    SCRAMBLE and UNSCRAM can be used to encrypt and decrypt sensitive and
    private files.  OBLITER8 totally deletes a file so it will be
    unrecoverable.  SHOW provides a graphics demonstration of the PC-SIG
    logo.  Lastly, read a very uplifting text by Pythagoras, a famous early
    Greek philosopher and mathematician.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHK4BOMB.DOC

{% raw %}
```
 
                         <<<===  CHecK 4 BOMB  ===>>>
 
                        Version 1.00, October 29, 1985
 
 
This release of version 1.00 of CHK4BOMB begins a long-range attempt to place IN
ONE PROGRAM  EVERYTHING we  possibly can  that helps  check a  suspect file  for
"malice aforethought".  As such, any and all suggestions for improvement are not
only welcomed, but encouraged.
 
 
TO INVOKE:  Simply enter   "CHK4BOMB <filename>"  for a listing of:
~~~~~~~~~~
            (a) all ASCII  strings, and
            (b) potentially dangerous disk activity
in suspect program <filename>.
 
 
MESSAGES:  The "potentially dangerous disk acitivity" which CHK4BOMB reports:
~~~~~~~~~
****WARNING**** This program writes to absolute sectors.
The possibility exists to overwrite important data.
 
****WARNING**** This program FORMATS a disk!
All data on the disk could be lost!
 
****WARNING**** This program uses the ROM BIOS routines for direct disk access!
This program COULD format a disk or write to certain sectors without
updating the directory or File Allocation Table.
 
DO NOT RUN this program until checked by an expert, unless you are familiar with
the author or company.
 
 
/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
 
You may contact us via Bob Klahn's BBS (Fido 107/50, 302-764-7522, 2400/1200) in
Wilmington Delaware.
 
                                         Andy Hopkins
                                         11/2/85


```
{% endraw %}

## FILE1314.TXT

{% raw %}
```
Disk No: 1314
Program Title: Program Grab Bag
PC-SIG version: 1

For the PC practical joker, here are several safe (but insane) scams to
play on some unsuspecting slob's computer.  Place them in a batch file
or on his hard disk.  When he comes back and touches a key or boots up
his computer, look out!  One trick makes his machine sound like its
filling with water and then it goes into a spin drive cycle!  Fun
galore.  Don't blame us, though, if your computer nerd gets even!

Other programs included here are a bit tamer: Convert almost any U.S
measurement to the Metric equivalent and vice versa; covers temperature,
liquid, weight, linear distance, speed, and square and cubic volumes.
CHK4BOMB checks a program to see if it does any disk writing or
formatting and also displays any text it finds in the program code.
SCRAMBLE and UNSCRAM can be used to encrypt and decrypt sensitive and
private files.  OBLITER8 totally deletes a file so that it will be
unrecoverable.  SHOW provides a graphics demonstration of the PC-SIG
logo.  Lastly, read a very uplifting text by Pythagoras, a famous early
Greek philosopher and mathematician.

Usage:  Misc. Programs/Utility.

Special Requirements:  A color graphics card for THATSALL & KSCOPE, a
version of BASIC for KSCOPE.BAS

How to Start:  Type GO (press enter).

Suggested Registration:  $15.00 for Metric Conversion program.

File Descriptions:

BACKTALK COM  Puts your computer on strike.
BROWSE   COM  Text display program.
CHK4BOMB DOC  Manual file.
CHK4BOMB EXE  Check programs for problems.
DRAIN    EXE  Joke program.
EATERS   COM  Screen blanking program.
GOLDEN   TXT  Text file.
KSCOPE   BAS  Kaleidoscope.
LOGO     BAT  Batch file to start logo show.
LOGO     SPS  Data file.
MELT     COM  Clears screen.
METRIC   DOC  Brief instructions and description.
METRIC   EXE  The Metric Conversion Program.
OBLITER8 BAS  Basic source code.
OBLITER8 EXE  File deletion program.
P?       GX1  Data file (5 files).
PYTHAG   BAT  Batch file to display GOLDEN.TXT.
SCRAMBLE BAS  Basic source code.
SCRAMBLE EXE  File encryption file.
SHOW     EXE  Graphic display program.
T?       GX1  Graphic data file (3 files).
THATSALL EXE  Cartoon program.
UNSCRAM  BAS  Basic source code.
UNSCRAM  EXE  Unencrypt program.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO1.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk No 1314 Program Grab Bag  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║   To print the documentation, type:                                     ║
║             MANUAL (press enter)                                        ║
║                                                                         ║
║   To start the Metric program, type:                                    ║
║             METRIC (press enter)                                        ║
║                                                                         ║
║   To start CHK4BOMB, type:                                              ║
║             CHK4BOMB (press enter)                                      ║
║                                                                         ║
║   To start BACKTALK, type:                                              ║
║             BACKTALK (press enter)                                      ║
║                                                                         ║
║   To start DRAIN, type:                                                 ║
║             DRAIN (press enter)                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GO2.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk No 1314 Program Grab Bag  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║   To start EATERS, type:                                                ║
║             EATERS (press enter)                                        ║
║                                                                         ║
║   To start the PC-SIG logo show, type:                                  ║
║             LOGO (press enter)                                          ║
║                                                                         ║
║   To start the MELT program, type:                                      ║
║             MELT (press enter)                                          ║
║                                                                         ║
║   To start the OBLITER8, type:                                          ║
║             OBLITER8 (press enter)                                      ║
║                                                                         ║
║   To display the GOLDEN.TXT, type:                                      ║
║             PYTHAG (press enter)                                        ║
║                                                                         ║
║   To use the SCRAMBLE program, type:                                    ║
║             SCRAMBLE (press enter)                                      ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GO3.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk No 1314 Program Grab Bag  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To use the UNSCRAM program, type:                                     ║
║             UNSCRAM (press enter)                                       ║
║                                                                         ║
║   To use the THATSALL program, type:                                    ║
║             THATSALL (press enter)                                      ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GOLDEN.TXT

{% raw %}
```
                        HIEROS LOGOS
     THE GOLDEN VERSES OF PYTHAGORAS


In the first place revere the Immortal Gods, as they
are established and ordained by the Law.

Reverence the Oath. In the next place revere the
Heros who are full of goodness and light.

Honour likewise the Terrestrial Daimons by
rendering them the worship lawfully due to them.


Honour likewise thy father and thy mother, and thy nearest
relations.

Of all the rest of mankind, make him thy friend who
distinguishes himself by his virtue. Always give ear to his mild
exhortations, and take example from his virtuous and useful
actions. Refrain, as far as you can, from spurning thy friend for
a slight fault, for power surrounds necessity.

Know that all these things are as I have told thee.

Accustom thyself to surmount and vanquish these passions:
First, gluttony, sloth, lust and anger. Never commit any shameful
actions, neither with others nor in private with thyself.

Above all things, respect thyself.

In the next place, observe Justice in thy actions and in thy
words; and accustom not thyself to behave thyself in anything
without rule and without reason.

Always make this reflection, that it is ordained by Destiny
for all men to die; and that the goods of fortune are uncertain.
As they may be acquired, they may likewise be lost.

Concerning the calamities that men suffer by Divine Fortune,
support with patience thy lot, be what it will, and never repine
at it, but endeavour what thou canst to remedy it, and consider
that Fate does not send the greatest portion of these misfortunes
to good men.

There are amongst men several sorts of reasonings, good and
bad. Admire them not too easily and reject them not either, but
if any falsehoods be advanced, give way with mildness and arm
thyself with patience.

Observe well, on every occasion, what I am going to tell
thee: Let no man either by his words, or by his actions, ever
seduce thee, nor entice thee to say or to do what is not
profitable for thee.
Consult and deliberate before thou act, that thou may'st not
commit foolish actions, for it is the part of a miserable man to
speak and to act without reflection.

But do that which will not afflict thee afterwards, nor
oblige thee to repentance.

Never do anything which thou dost not understand; but learn
all thou oughtest to know, and by that means thou wilt lead a
very pleasant life.

In no wise neglect the health of the body; but give it food
and drink in due measure, and also the exercise of which it has
need. By measure, I mean what will not incommode thee.

Accustom thyself to a way of living that is neat and decent,
without luxury. Avoid all things that will occasion envy, and be
not expensive out of season, like one who knows not what is
decent and honourable.

Be neither covetous nor niggardly. A due measure is
excellent in these things!

Do only the things that cannot hurt thee, and deliberate
before thou doest them.

Never suffer sleep to close thy eyelids after thy going to
bed, till thou hast thrice reviewed thy actions of the day:
Wherein have I done amiss? What have I done? What have I omitted
that I ought to have done?

If in this examination thou find that thou hast done amiss,
reprimand thyself severely for it; and if thou hast done any
good, rejoice.

Practice thoroughly all these things; meditate on them well;
thou oughtest to love them with all thy heart. It is they that
will put thee in the way of Divine Virtue.

I swear it by Him who has transmitted into our souls the
Sacred Tetraktys, the Source of Nature, whose course is eternal.

Never set thy hand to the work, till thou hast first prayed
to the Gods to accomplish what thou art going to begin.

When thou hast made this habit familiar to thee, thou wilt
know the constitution of the Immortal Gods and of men; even how
far the different Beings extend, and what contains and binds them
together.

Thou shalt likewise know, in accord with Cosmic Order, that
the nature of this Universe is in all things alike, so that htou
shalt not hope what thou oughtest not to hope;and nothing in this
world shall be hid from thee.
Thou wilt likewise know that men draw upon themselves their
own misfortunes, voluntarily and of their own free choice.

Wretches that they are! They neither see nor understand that
their good is near them. There are very few of them who know how
to deliver themselves out of their misfortunes.

Such is the Fate that blinds mankind and takes away his
senses. Like huge cylinders, they roll to and fro, always
oppressed by ills without number; for fatal contention, which is
innate in them, pursues them everywhere, tosses them up and down,
nor do they perceive it.

Instead of provoking and stirring it up, they ought by
yielding to avert it.

Great Jupiter, Father of men, you would deliver them from
all the evils that opress them, if you would show them what is
the Daimon of whom they make use.

But take courage, the race of men is divine. Sacred Nature
reveals to them the most hidden Mysteries.

If she imparts to thee her secrets, thou wilt easily perform
all the things which I have ordained thee, and healing thy soul,
thou wilt deliver it from all these evils, from all these
afflictions.

Abstain thou from all that we have forbidden in the
Purifications; and in the Deliverance of the Soul make a just
distinction of them; examine all things well, leaving thyself
always to be guided and directed by the understanding that comes
from above, and that ought to hold the reins.

And when, after having divested thyself of thy mortal body,
thou arrivest in the most pure ether, thou shalt be a God,
immortal, incorruptible, and death shall have no more dominion
over thee.

                               -Pythagoras
                                died about 507 B.C.E.
```
{% endraw %}

## KSCOPE.BAS

{% raw %}
```bas


100 'KALEIDOSCOPE - JOHN SCHNELL - AUGUST 82
110 CLS
120 '
130 DEFINT A-Z
140 '
150 'initialize random number generator using MINUTES and SECONDS of TIME$ variable
160 N=VAL(MID$(TIME$,4,2)+MID$(TIME$,7,2)) MOD 32767
170 RANDOMIZE(N)
180 '
190 'initialize CHARACTER and ATTRIBUTE arrays
200 OPTION BASE 0
210 DIM C$(4),A(1)
220 C$(0)=CHR$(32)      'character for black (space)
230 C$(1)=CHR$(176)     'character for gray-value one
240 C$(2)=CHR$(177)     'character for gray-value two
250 C$(3)=CHR$(178)     'character for gray-value three
260 C$(4)=CHR$(219)     'character for white
270 A(0)=7              'attribute for normal intensity
280 A(1)=10             'attribute for high intensity
290 '
300 'setup screen
310 KEY OFF             'turn function key display off
320 COLOR 7,0
330 LOCATE 25,14,0      'set cursor on line 25 and turn cursor off
340 PRINT"***   push <space-bar> to clear screen or <X> to exit   ***";
350 '
360 'initialize V and H to near center of screen
370 V=13-RND(RND(13*RND(1))) : H=40-RND(RND(40*RND(1)))
380 '
390 'calculate next V,H position
400 VV=V : HH=H                                 'save old value for V and H
410 V=V+4*RND(1)-2                              'move up, down, or stay
420 IF V<1 OR V>12 THEN V=VV : GOTO 410         'check vertical plot range
430 H=H+4*RND(1)-2                              'move left, right, or stay
440 IF H<1 OR H>39 THEN H=HH : GOTO 430         'check horizontal plot range
450 IF 30*RND(1)<28 THEN 490                    'random shot to relocate plot
460 V=13*RND(1)+1 : H=40*RND(1)+1               'calculate new random position
470 '
480 'determine next character to plot
490 ATTRIB=A(RND(1))                            'get random attribute
500 CHAR=4*RND(1)                               'get random character
510 '
520 'play note and plot kaleidoscope
530 SOUND V*H*5+37,1                            'play sound using V and H
540 COLOR ATTRIB,0                              'set attribute mode
550 LOCATE V,H
560 PRINT C$(CHAR);
570 LOCATE 24-V,H
580 PRINT C$(CHAR);
590 LOCATE V,80-H
600 PRINT C$(CHAR);
610 LOCATE 24-V,80-H
620 PRINT C$(CHAR);
630 '
640 'check if blank screen or exit is requested
650 RESP$=INKEY$
660 IF RESP$=" " THEN COLOR 7,0 : CLS : GOTO 320
670 IF RESP$="X" OR RESP$="x" THEN 710
680 GOTO 400
690 '
700 'restore everything before quitting
710 COLOR 7,0
720 CLS
730 KEY ON
740 RUN "MENU.PGM"

```
{% endraw %}

## METRIC.DOC

{% raw %}
```




            		   METRIC.EXE

			  VERSION 2.0
              (c) COPYRIGHT 1987 BY J. T. FOSTER
                        P.O. BOX 5163
                   FORT WORTH, TEXAS 76108

                  


             THIS DISK SOULD CONTAIN THE FOLLOWING FILES:


            METRIC.EXE      THE METRIC CONVERSION PROGRAM.

            METRIC.DOC      THIS FILE.

            METRIC.CFG      THIS IS THE CONFIGURATION FILE.
                            IF IT IS NOT PRESENT, IT WILL BE
                            CREATED.  IF YOU NEED TO CHANGE 
                            THE CONFIGURATION FILE, SIMPLY
                            ERASE IT AND YOU WILL BE PROMPTED
                            FOR YOUR CONFIGURATION THE NEXT 
                            TIME YOU RUN METRIC.EXE.






                       TERMS AND CONDITIONS


            		   METRIC.EXE

			  VERSION 2.0
              (c) COPYRIGHT 1987 BY J. T. FOSTER
                        P.O. BOX 5163
                   FORT WORTH, TEXAS 76108
	
	METRIC.EXE IS A U.S. TO METRIC MEASUREMENT CONVERSION
	PROGRAM.  IT IS NOT INTENDED TO BE A TUTORIAL IN THE
	METRIC AND U.S. MEASUREMENT SYSTEMS.  METRIC.EXE IS A
	GREAT TIME SAVER FOR PROFESSIONALS AND STUDENTS IN
	ENGINEERING, SCIENCE, MANUFACTURING, AND BUSINESS.  YOU
	WILL FIND METRIC.EXE NEEDS NO DOCUMENTATION.  IT IS
	VERY USER FRIENDLY AND CONVENIENT.  HOW MANY TIMES HAVE
	YOU HAD TO DRAG OUT THE DICTIONARY, SCIENCE BOOK, OR
	CONVERSION TABLE, FIND YOUR CALCULATOR UNDER ALL THE
	CLUTTER ON YOUR DESK, AND PUNCH IN A SEEMINGLY SIMPLE
	FORMULA, OR GO THROUGH GYRATIONS OF ALGEBRAIC FORMULAS
	WITH A PENCIL AND PAPER TO CONVERT METERS TO FEET, OR
	OUNCES TO GRAMS.  NORMALLY THIS DOES NOT HAPPEN VERY
	OFTEN.  BUT WITH METRIC.EXE, YOU CAN HAVE MANY OF THE
	CONVERSIONS FOR THE U.S. AND METRIC SYSTEMS AT YOUR
	FINGERTIPS.
	
	
		DISTRIBUTION, LICENSING, AND REGISTRATION

	METRIC.EXE 2.0 IS A SHAREWARE PROGRAM AND IS DISTRIBUTED FOR		
	EVALUATION ONLY.  METRIC.EXE IS NOT FREE SOFTWARE.  YOU
	ARE GRANTED A LIMITED LICENSE TO EVALUATE METRIC.EXE ON
	A TRIAL BASIS ONLY.  IF YOU INTEND TO USE METRIC.EXE FOR
	ANY PURPOSE OTHER THAN TRIAL OR EVALUATION, YOU MUST
	REGISTER BY SENDING A CHECK OR MONEY ORDER FOR $15.00 TO

			J. T. FOSTER
			P.O. BOX 5163
			FORT WORTH, TX 76108

	MODIFICATIONS AND UPGRADES FOR METRIC.EXE WILL BE AVAILABLE
	FOR REGISTERED USERS ONLY.  THIS IS THE ONLY VERSION THAT
	WILL BE DISTRIBUTED FOR EVALUATION OR TRIAL USE.  USERS MAY
	DISTRIBUTE COPIES OF VERSION 2.0 FOR EVALUATION OR TRIAL USE
	ONLY IF THE METRIC.EXE FILE IS UNMODIFIED AND METRIC.DOC IS
	INCLUDED.

            CORPORATE AND ACADEMIC LICENSING AND REGISTRATION

	CORPORATE AND ACADEMIC LICENSING MAY BE OBTAINED BY WRITING
	J. T. FOSTER AT THE ADDRESS ABOVE.  METRIC.EXE MAY BE USED
	FOR EVALUATION BY CORPORATE AND ACADEMIC INSTITUTIONS FOR A
	7 DAY TRIAL PERIOD.  ANY USE OF METRIC.EXE BEYOND THE 7 DAY
	TRIAL PERIOD IS A COPYRIGHT VIOLATION.






				USER GROUPS

	USER GROUPS MAY ADD METRIC.EXE VERSION 2.0 TO THEIR DISK
	LIBRARY IF THE PROGRAM IS NOT MODIFIED, METRIC.DOC IS
	INCLUDED, AND CHARGE NO MORE THAN $6.00 PER DISK.  HOWEVER
        USERS ARE STILL REQUIRED TO REGISTER IF METRIC.EXE IS USED
        FOR ANY REASON OTHER THAN EVALUATION.
        
			  COMMENTS AND CRITIQUES

	THE AUTHOR WELCOMES ANY COMMENTS OR SUGGESTIONS YOU MAY HAVE
	ABOUT METRIC.EXE.  PLEASE WRITE TO THE AUTHOR AT THE ADDRESS
	ABOVE.  THANK YOU.





======================================================================
                        J. T. FOSTER
                          BOX 5163
                   FORT WORTH, TEXAS 76108

                      REGISTRATION FORM


I WOULD LIKE TO REGISTER ______ COPIES OF METRIC.EXE.  ENCLOSED IS
A CHECK OR MONEY ORDER FOR $15.00 PER COPY PAYABLE TO J. T. FOSTER.
PLEASE SEND ME THE LATEST VERSION OF METRIC.EXE TO THE ADDRESS BELOW.

NAME:       __________________________________________________________
ADDRESS:    __________________________________________________________
            __________________________________________________________
            __________________________________________________________
TYPE OF COMPUTER:  ___________________________________________________
COMMENTS:  ___________________________________________________________
______________________________________________________________________
______________________________________________________________________
______________________________________________________________________
______________________________________________________________________
______________________________________________________________________
______________________________________________________________________


======================================================================

```
{% endraw %}

## OBLITER8.BAS

{% raw %}
```bas
10 '---------OBLITER8.BAS  1987------------
20 ' File Destruction Utility
30 ' Written by James Hill for the Public Domain
40 ' This program will NOT accept wildcards -
50 ' - would you want it to? Files "treated" with
60 ' OBLITER8 will be non-recoverable. Use care!
70 ' A compiled version is available. Compiled
80 ' using Microsoft QuickBASIC (trademark).
90 '-------------------------------------------
100 INPUT "enter the name of the file to be obliterated: ";N$
110 CT=0
120 OPEN "i",1,N$
130 PRINT INPUT$(1,#1);
140 CT=CT+1
150 IF EOF(1) THEN 170
160 GOTO 130
170 CLOSE #1
180 OPEN "o",1,N$
190 FOR X=1 TO CT
200 PRINT#1,"!";
210 NEXT X
220 PRINT
230 END
240 'SYSTEM (for the compiled version, line 140 was dropped
250 '(For the compiled version, line 140 was ommitted and
260 'line 150 was used instead.)
```
{% endraw %}

## SCRAMBLE.BAS

{% raw %}
```bas
10 '---------Scramble.Bas------------
20 'A Primitive Encryption Program
30 'Use Unscram.Bas to restore the
40 'encrypted file.
50 '------------------------------
60 INPUT "What is the name of the file to be scrambled";N$
70 INPUT "What will be the new name for the scrambled file";O$
80 OPEN "i",1,N$
90 OPEN "o",2,O$
100 IF EOF(1) THEN 130
110 PRINT#2,CHR$(ASC(INPUT$(1,#1))+128);
120 GOTO 100
130 CLOSE #1,#2: NAME N$ AS "killfile":KILL "killfile"
140 PRINT
150 END
160 'SYSTEM
```
{% endraw %}

## UNSCRAM.BAS

{% raw %}
```bas
10 '---------Unscram.Bas-----------
20 'This program will de-crypt a file
30 'encrypted with Scramble.Bas. 
40 '-------------------------------
50 INPUT "What is the name of the file to be UN-scrambled";N$
60 INPUT "What will be the new name for the UN-scrambled file";O$
70 OPEN "i",1,N$
80 OPEN "o",2,O$
90 IF EOF(1) THEN 120
100 PRINT#2,CHR$(ASC(INPUT$(1,#1))-128);
110 GOTO 90
120 CLOSE #1,#2: NAME N$ AS "killfile":KILL "killfile"
130 PRINT
135 END
140 'SYSTEM
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1314

     Volume in drive A has no label
     Directory of A:\

    BACKTALK COM     12032   1-10-86   8:54p
    BROWSE   COM      1024   7-29-86   1:05p
    CHK4BOMB DOC      1664  11-14-85   8:22a
    CHK4BOMB EXE     12032  11-14-85   8:21a
    DRAIN    EXE     11008   1-17-86   2:36a
    EATERS   COM      5120  12-24-85  11:32a
    FILE1314 TXT      2427   3-06-89  10:24a
    GO       BAT        91   1-18-89   4:35p
    GO1      TXT      1387   2-21-89   4:03p
    GO2      TXT      1695   2-21-89   4:03p
    GO3      TXT       848   2-21-89   4:03p
    GOLDEN   TXT      5954   2-01-88   9:24p
    KSCOPE   BAS      2560   7-24-86   8:21a
    LOGO     BAT        11   2-01-88   9:12p
    LOGO     SPS       378   2-01-88   6:39p
    MANUAL   BAT       147   1-18-89   4:06p
    MELT     COM       128   7-16-86   7:26p
    METRIC   DOC      4959   2-21-88   5:53p
    METRIC   EXE     81891   2-21-88   6:07p
    OBLITER8 BAS       842   2-01-88   7:07p
    OBLITER8 EXE     34660  12-20-87   6:30p
    P1       GX1      1280   1-10-88   6:59p
    P2       GX1       768   1-10-88   8:27p
    P3       GX1       384   1-10-88   8:34p
    P4       GX1       384   1-10-88   3:38p
    P5       GX1      2432   1-10-88   9:20p
    PYTHAG   BAT        19   2-01-88   9:17p
    SCRAMBLE BAS       498   2-01-88   7:12p
    SCRAMBLE EXE     37082  12-20-87   6:31p
    SHOW     EXE     16740   4-16-87  11:47p
    T1       GX1       640   1-10-88   9:05p
    T2       GX1       384   1-10-88   9:06p
    T3       GX1      2176   1-10-88   9:16p
    THATSALL EXE      3072  11-24-85   9:27p
    UNSCRAM  BAS       482   2-01-88   7:11p
    UNSCRAM  EXE     37098  12-20-87   6:32p
           36 file(s)     284297 bytes
                           20480 bytes free
