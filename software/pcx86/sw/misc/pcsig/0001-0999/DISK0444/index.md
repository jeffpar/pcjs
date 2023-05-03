---
layout: page
title: "PC-SIG Diskette Library (Disk #444)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0444/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0444"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HOTKEY, XDOS AND EZ-MENU"

    PC/CALCULATOR turns your PC into a programmable multi-function RPN
    (Reverse Polish Notation) calculator. It features 16 visible
    memories, seven function key modes, and 14 number display formats. Run
    it in stand-alone mode or keep it in RAM. Define a "pop-up" key and
    call your calculator from inside any of your other applications.
    
    You'll always be able to add things up!
    
    Show your PC who's in charge here anyway!  EZ-MENU gives you a quick and
    easy way to run your programs while ending the clutter and confusion of
    scanning through directory and file listings.  Handle 200 .EXE, .COM,
    .BAT and .BAS programs without breaking a sweat.
    
    Have your keyboard do more of the work for you.  Program specific keys
    to perform specialized functions, enter text strings or series of
    lengthy repetitive keystrokes.  Do more computing and less typing! File
    
    A handy collection of DOS enhancements that will make your life a little
    easier.
    
    ALARM is a RAM-resident alarm clock to remind you of those important
    appointments and commitments. Go ahead and work on your application.
    This clock will call you anyway.
    
    CAT is similar to the DOS DIR command with some major exceptions:
    
    ~  CAT pauses at the end of each screen of listings and waits for a
    prompt from you before proceeding
    
    ~  Files in subdirectories are automatically listed -- down to five
    levels of directories
    
    ~  All files are displayed, including system and hidden files
    
    ~  The display is more aesthetically pleasing than DOS
    
    HELP is a text file that explains and expands on the use of DOS commands
    and syntax. Exit to DOS at any time.
    
    LOCK lets you change two of a file's attributes -- locked and hidden.
    Consider using this for sensitive or confidential information.
    
    NOPRINT lets you divert data being sent to the printer and display it on
    your monitor. Helpful when developing and testing printed output without
    using a printer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EZ-MENU.BAS

{% raw %}
```bas
10 MENU=1:COMMON MENU
20 '     Set screen conditions...
30 KEY OFF:SCREEN 0,0,0:COLOR 7,0,0:CLS:WIDTH 80
40 '     Error trapping routine...
50 ON ERROR GOTO 300
60 '    Initialize varibles...
70 DIM F$(200):P=1:SP=1
80 '    Shell into DOS and do diskette work...
90 SHELL "DIR >DIR.DIR"
100 '    Load file "DIR.DIR" into RAM and organize it...
110 OPEN "DIR.DIR" FOR INPUT AS #1
120 FOR L=1 TO 200
130 INPUT #1,F$
140 G$=MID$(F$,10,3)
150 IF G$<>"BAS" AND G$<>"EXE" AND G$<>"COM" AND G$<>"BAT" THEN GOTO 130
160 F$=LEFT$(F$,21)
170 IF F$="COMMAND  COM    22042" THEN GOTO 130
180 IF LEFT$(F$,12)="EZ-MENU  BAS" THEN GOTO 130
190 IF RIGHT$(F$,9)<>"        0" THEN F$(L)=LEFT$(F$,12) ELSE GOTO 130
200 NEXT L
210 BEEP:BEEP:PRINT "You have over TWO HUNDRED files on the default disk."
220 PRINT "EZ-MENU can only handle 200.  Copy one-half of the files into a"
230 PRINT "Sub-directory, and copy EZ-MENU as well.  Run EZ-MENU in the"
240 PRINT "directory containing the files.  If you still get this message,"
250 PRINT "do the same on the directory.  (You can see how many times you"
260 PRINT "will need to do this process by using the DIR command and divide"
270 PRINT "the number of files by 200.":BEEP:BEEP
280 COLOR 0,7:LOCATE 25,1:PRINT "Press ESC to exit."
290 A$=INPUT$(1):IF A$<>CHR$(27) THEN GOTO 290 ELSE CLS:COLOR 7,0,0:END
300 '   Trap error...
310 IF ERR=62 AND ERL=130 THEN RESUME 360
320 CLS:PRINT "-ERROR-  Press ESC to restart program."
330 A$=INPUT$(1):IF A$<>CHR$(27) THEN GOTO 330
340 RESUME 350
350 RUN
360 '   Make selection...
370 CLS:L=L-1
380 '   Display possibilites...
390 LOCATE 1,1:IF D=1 THEN LOCATE 24,1:PRINT F$(P):D=0:GOTO 450
400 IF (P-SP)+23>L THEN E=L ELSE E=(P-SP)+23
410 FOR A=P TO E
420 PRINT F$(A)
430 NEXT A
440 '   Display current selection...
450 LOCATE SP,1:COLOR 0,7:PRINT F$(P):COLOR 7,0
460 '   Get command...
470 A$=INKEY$
480 IF A$=CHR$(27) THEN RUN
490 IF A$=CHR$(13) THEN GOTO 650
500 IF A$=CHR$(0)+"H" THEN GOTO 530
510 IF A$=CHR$(0)+"P" THEN GOTO 590
520 GOTO 470
530 '   Move pointer UP
540 IF P=1 THEN GOTO 470
550 LOCATE SP,1:PRINT F$(P)
560 P=P-1:SP=SP-1
570 IF SP=0 THEN SP=1:GOTO 390
580 GOTO 450
590 '   Move pointer DOWN
600 IF P=L THEN GOTO 470
610 LOCATE SP,1:PRINT F$(P)
620 P=P+1:SP=SP+1
630 IF SP=24 THEN SP=23:D=1:GOTO 390
640 GOTO 450
650 '   Run program...
660 F$=F$(P):O=0
670 '   Update selected file name...
680 FOR A=1 TO LEN(F$):IF MID$(F$,A,1)=" " THEN O=O+1
690 NEXT A:N$=LEFT$(F$,9-O)+"."+RIGHT$(F$,3)
700 CLS
710 R3$=RIGHT$(F$,3):IF R3$="COM" OR R3$="EXE" OR R3$="BAT" THEN SHELL F$
720 IF R3$<>"BAS" THEN GOTO 750
730 CLOSE
740 CLS:CHAIN F$
750 RUN
```
{% endraw %}

## EZ-MENU.TXT

{% raw %}
```
                         * * * * * * * * * * * * * *
                         *        \\\|||///        *
                         *    ---->EZ-MENU<----    *
                         *        ////|||\\\\      *
                         * * * * * * * * * * * * * *

 

                              FEATURES OF EZ-MENU

     EZ-MENU can execute and executable  file  (BATCH,  BASIC,  COM  and  EXE) 
without any problem.  These are the only files appear on the menu,  to prevent 
cluttering.  If you want to add others,  look at the beginning of the  program 
and include or exclude the files.  COMMAND.COM and MENU.BAS will not appear on 
the menu.  EZ-MENU gets its directory by SHELLing "DIR >DIR.DIR".  This puts a 
file  called  DIR.DIR  on the current directory.  Leave space (a few K) on the 
disk for this file.  The more files shown with a DIR command,  the more  space 
you  will need for DIR.DIR.  EZ-MENU can handle two-hundred EXE,  COM,  BATCH, 
and BASIC programs.  If you have more, EZ-MENU will tell you what to do.  


                           

                            EZ-MENU'S REQUIREMENTS


     EZ-MENU needs COMMAND.COM to be present  during  execution  (see  BASIC'S 
SHELL  COMMAND  for more information.) Without it you will receive errors.  If 
you are using a hard disk as drive C:  you could execute the DOS command  "SET 
COMSPEC=C:\COMMAND.COM".  Although  you can't SHELL this command,  you can put 
it in the batch file  that  starts  EZ-MENU.  If  you  want  to  run  programs 
compiled  with  the  BASIC compiler through EZ-MENU,  you will need to use the 
technique with batch files as mentioned in the chapter BASIC'S SHELL COMMAND.  

     EZ-MENU can be used on a hard disk,  but it can't change disk directories 
for you.  To make EZ-MENU change directories,  put batch files in that will do 
it automatically,  for instance to change to \LEVEL1\LEVEL2 you might  make  a 
batch  file  called  LEVEL2.BAT.  Create  batch  files  by  typing  "COPY CON: 
LEVEL2.BAT <return> CD\LEVEL1\LEVEL2 <return> Ctrl-Z <return>" (hit Ctrl and Z 
together,  not at the same time.) If you make a mistake  during  this  process 
immediately hit Ctrl-Break and start over again.  

     When  EZ-MENU  executes a BASIC program,  it leaves a value of one in the 
variable MENU.  Your programs must check this value,  and if there is a one in 
it, they must return to EZ-MENU when they terminate.  



                              
                             BASIC'S SHELL COMMAND 
     
      EZ-MENU  makes  use  of  BASIC's SHELL command.  (DOS 3.00 & 3.10 users, 
pages 317-321 of the BASIC manual contain good documentation on this  command.  
Refer  to them for more information) Although my DOS 3.00 manual says that the 
SHELL command is just for that version,  it is available for DOS 2.00 and 2.10 
users.  It is not documented in the BASIC manual for either of those versions.  

      The SHELL command works in the following format: 
           SHELL [string] 

      Executing the SHELL command without a string returns you to DOS,  but in 
order to return to BASIC,  all you need to do is type EXIT.  Instantly you are 
back to your BASIC program and BASIC!  

      STRING is a string that will be executed  exactly  like  a  DOS  command 
(like "DIR A:MYFILE".) Use the same commands as you would from DOS.  

      One major disadvantage is the fact that COMMAND.COM must be available in 
order  for  BASIC  to  use the SHELL command.  Use the SET command from DOS to 
change the file name,  drive,  etc.  of COMMAND.COM (refer to the  DOS  manual 
under the SET COMSPEC command.) EZ-MENU needs COMMAND.COM to work properly.  




                               COMPILING EZ-MENU
                        
      If  you  try  compiling  EZ-MENU  with the IBM BASIC Compiler,  you will 
receive several errors.  The problem is that the compiler does  not  know  the 
BASIC command SHELL.  The only way around this that I can think of is to use a 
batch  file  (AUTOEXEC.BAT  is  okay) and to make EZ-MENU alter the batch file 
during execution then have EZ-MENU execute a SYSTEM command.  The  batch  file 
should  do  what  you told it to do when you modified it.  Next have the batch 
file execute another file containing the remaining program lines (compiled) in 
EZ-MENU.  I have not gotten this technique to  work  yet,  but  it  (probably) 
could  be done.  You will also need to use you batch file technique when BASIC 
programs are run.
```
{% endraw %}

## FILES444.TXT

{% raw %}
```
Disk No:  444
Program Title:  HOTKEY, XDOS AND EZ-MENU
PC-SIG version: 1.2

While not related, these four separate programs have been brought
together because they all help with little needs that show up with great
frequency on a personal computer.  PC-CALC is an RPN-type calculator for
your computer.  HOTKEY lets you easily customize your function keys.
EZ-MENU gives you a quick and easy way to run programs, a shortcut
around the many commands sometimes necessary.  And the X-DOS package is
a collection of system enhancements.

Usage:  DOS/System Utilities.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  XDOS $10.00; PC-CALCULATOR $30.00; HOTKEY
$15.00

File Descriptions:

ALARM    COM  An alarm clock function.
???????? PCL  Data file (7 files).
BCALC    EXE  Allows definition of "pop-up" key.
CALC     EXE  Main program-pop-up reverse Polish notation calculator.
CALC     HE?  Overlay for CALC (7 files).
CAT      COM  An alternative to DOS's DIR command.
CONFIG   SYS  Must be on boot disk.  ANSI.SYS must also be present.
EZ-MENU  BAS  Instant, ez  menu to run EXE, BAT, COM and BAS files.
EZ-MENU  LST  A mini file that describes the 3 EZ-MENU files.
EZ-MENU  TXT  Documentation for ez-menu (4K).
HELP     COM  Assistance with DOS commands.
HOTKEY   DEF  Sample key definition file.
HOTKEY   DOC  Doc for HotKey. Type "COPY HOTKEY.DOC PRN".
HOTKEY   EXE  HotKey is used to redefine the function keys (F1-F10).
LOCK     COM  Provides the ability to lock and hide files.
MANUAL        Documentation (38k).
NOPRINT  COM  Re-directs printer output to the screen.
PRINTMAN BAT  A batch file to print this manual.
READ     ME   Shows how to start CALC. Just "TYPE READ.ME".
README        Listing of HOTKEY files.
README   TXT  A greeting file.
SBCALC   COM  Subprogram.
XDOS     DOC  Reference manual for the XDOS commands.
ZAP      COM  Two methods for securing sensitive files.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1986,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║          <<<<  Disk No: 444  Hotkey, xDOS and EZ-Menu  >>>>             ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the manuals on this disk, type: MANUAL (press enter)           ║
║                                                                         ║
║ To run one of the programs on this disk, look for the name of the       ║
║ program with the extension of .EXE or .COM. Example:                    ║
║ If you wanted to run the program called HOTKEY you would type:          ║
║                            HOTKEY (press enter)                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HOTKEY.DOC

{% raw %}
```



                  HotKey Key Redefinition Program Version 1.01
                          Copyright 1985 by Peter Kline



        HotKey will redefine the function keys on an IBM PC or compatible 
        to any string (40 character maximum) the user desires.   The keys 
        are "hot";  that is,  hitting a function key automatically enters 
        its assigned command.  

        Before  the  program can be used,  the ANSI.SYS  driver  must  be 
        installed.   This is done by copying the file "ANSI.SYS" from the 
        DOS disk to the system boot disk and then creating a "CONFIG.SYS" 
        file  on the boot disk which contains the line "device=ansi.sys".  
        A sample CONFIG.SYS is on the HotKey disk. 
         
        The program is both command and menu driven.   In the menu  mode, 
        the  user is prompted for all necessary actions,  and in the com-
        mand mode,  no user intervention is needed beyond the  invocation 
        of the program.

        To  use the program in menu mode,  type "HOTKEY" and hit  return.  
        The main menu will appear.   The user can define or undefine keys 
        using choices 1 and 2.   The user can also define an entire group 
        of  keys  via  a key definition file using choice 3,  or  he  can 
        create a key definition file using choice 4. 

        In the command driven mode the program is run using command  line 
        prompts.   Two possibilities exist.  One can enter "HOTKEY RESET" 
        at  the  O/S  prompt and hit return,  and all ten  keys  will  be 
        restored to their original DOS definitions.   Also, one can enter 
        "HOTKEY  <FN>",  where <FN> is the name of a file containing  key 
        definitions.   This  file  can be created either by using a  text 
        editor  which stores files in ASCII format or by using  the  file 
        creation  option of the KEY menu.   The key definition file  con-
        tains one line for each key to be redefined.  The first character 
        on  each  line must be a number (1-9 or 0).   The number zero  is 
        used to refer to key 10.  The next character must be a blank, and 
        then the key definition follows.  No quotes should be used around 
        the  string.   At  the present time,  strings are limited  to  40 
        characters  in length.   A key redefinition file might  be  named 
        "HOTKEY.DEF", for instance, and it might look like this:

        1 dir
        3 cls
        2 hotkey reset

        Note  that  the keys do not have to be defined in numeric  order.  
        Now,  when F1 is hit, the default drive directory will be listed.  
        F2 will clear the screen,  and F3 will run HotKey to reset all of 
        the function keys.  "HOTKEY.DEF" is also on the key disk.   






                                        1








        The User Supported Concept

        HotKey  is a user supported program.   Like other user  supported 
        software,  you  may copy it and give it away to your friends,  as 
        long as it is done without monetary gain.   If you feel that  the 
        program  is useful,  you are asked to make a donation to the  au-
        thor.   $15.00 is suggested,  but send whatever you feel the pro-
        gram is worth to you.  In any case, $15.00 makes you a registered 
        user,  which  entitles  you to the latest version of the  program 
        plus notification of major program updates.

        If you don't want to register but you do want the latest  version 
        of the program, you have 3 choices:


        1)  Send me a blank,  formatted disk with a return mailer.  Don't 
        forget sufficient postage, please.

        2)   Send me a check or money order payable to "Peter Kline"  for 
        $7.00.   This covers my costs for the disk,  mailer, postage, and 
        time spent standing in line at the post office.

        3)  Get it from someone else.


        Don't  forget,  the whole idea behind user-supported software  is 
        that  you get to test drive the program before it costs you  any-
        thing.   If you continue to use it after your test drive, it must 
        be worth something!

        I  am  also thinking about releasing the source code to the  pro-
        gram,  perhaps at an additional ten or fifteen dollars.   Let  me 
        know what you think.

        Of course,  I cannot be liable for any damages resulting from the 
        use  of  this program,  even if you advise me of the  possibility 
        beforehand.   This  means it is not my fault that you set  a  key 
        equal to "format" and then lose everything on your hard disk.

        Please  write me with your questions,  comments,  and suggestions 
        for improvement.   If you want a reply,  please include an  SASE.  
        I'll try to answer promptly.  Please do not call-- I'm not set up 
        for  it,  and the boss wouldn't appreciate it.   I hope HotKey is 
        useful.


        Peter Kline
        26 Queens Drive
        Little Silver, NJ 07739







                                        2





```
{% endraw %}

## README.TXT

{% raw %}
```
















                              Welcome to xDOS Utilites
                                     Version 1.0

                         Copyright (C) 1985, D. M. Whittaker


          xDOS is user-supported software.  If you find xDOS useful, you
          are encouraged to send $10.00 to D. M. Whittaker.

          To print XDOS.DOC, the User's Guide and Reference Manual, type
          the following command:

          PRINTMAN

          To view XDOS.DOC on the screen, type the following command:

          TYPE XDOS.DOC

          Thank you for your support.



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0444

     Volume in drive A has no label
     Directory of A:\

    FILES444 TXT      2102   3-03-89   9:42a
    ALARM    COM       800   8-18-85  11:21a
    ASCII    PCL      1653   2-26-86   3:17p
    BCALC    EXE     67162  10-05-88   2:48a
    CALC     EXE     76288  10-05-88   2:37a
    CALC     HE0      1996   7-28-83
    CAT      COM      2278   7-22-85   1:46p
    CONFIG   SYS        19   4-19-85   5:00p
    EZ-MENU  BAS      2703   8-27-85   2:19p
    EZ-MENU  LST       199   8-27-85  10:37a
    EZ-MENU  TXT      4579   8-27-85  11:21a
    CALC     HE1      1996   7-28-83
    HELP     COM     18359   7-23-85   9:25p
    HOTKEY   DEF        30   4-22-85   3:27p
    HOTKEY   DOC      5277   5-14-85   1:32p
    HOTKEY   EXE     16896   5-13-85  10:36a
    CALC     HE2      1996   7-28-83
    LOCK     COM       851   7-14-85   4:33p
    CALC     HE3      1996   7-28-83
    NOPRINT  COM        81   7-24-85   8:38p
    PRINTMAN BAT       135   8-18-85  11:51a
    CALC     HE4      1996   7-28-83
    README             219   4-22-85   3:20p
    README   TXT       621   1-01-80  12:01a
    XDOS     DOC     14173   8-18-85  11:49a
    ZAP      COM      2719   7-24-85   8:22p
    CALC     HE5      1996   7-28-83
    CALC     HE6      1996   7-28-83
    MANUAL           67279
    MARKUP   PCL       815   6-25-87  10:39p
    MENU     PCL       607   1-01-80  12:01a
    MORTGAGE PCL       571   1-01-80   1:29a
    MOUSEDEM PCL      1574   1-01-80   1:26a
    READ     ME       1964   9-16-88   2:52a
    SBCALC   COM     32595  10-05-88   3:10a
    SINES    PCL       483   1-01-80   1:02a
    SQUARES  PCL       574   1-01-80   1:05a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       771   3-03-89   9:49a
    MANUAL   BAT       198   3-01-89  12:37p
           40 file(s)     338585 bytes
                            6144 bytes free
