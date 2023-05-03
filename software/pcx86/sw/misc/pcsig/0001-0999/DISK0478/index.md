---
layout: page
title: "PC-SIG Diskette Library (Disk #478)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0478/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0478"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HARD DISK UTILITIES"

    This is a collection of utilities for the hard disk drive user, compiled
    from over 25 disks in our library.  Some of the most famous: ALTER, used
    to change your file attributes; DISKPARK, for positioning your hard disk
    drive in the safety zone; and BACKSTAT to find out which files need to
    be backed up.
    File Descriptions:
    
    ALTER    COM  Utility to change file attributes (Hidden/Readonly/etc).
    ALTER    DOC  Documentation for ALTER.COM (4k).
    BACKSTAT EXE  Tells you which files need to be backed up.
    CATALOG  COM  Make a sorted directory.
    CDSECRET COM  Go to a ``secret'' sub-directory.
    DD       BAT  Sort directory by date (PART OF DNXSD.BAT).
    DIR2     BAS  BASIC version of a directory sorter.
    DISKPARK DOC  Documentation for DISKPARK.EXE (1k).
    DISKPARK EXE  Position the hard disk drive head in a safety zone.
    DISRTN   EXE  Undeletes and recovers lost first sectors.
    DN       BAT  Sort directory by name (Part of DNXSD.BAT).
    DNXSD    DOC  Documentation for sorting directory.
    DS       BAT  Sort directory by size (Part of DNXSD.BAT).
    DX       BAT  Sort directory by extension (Part of DNXSD.BAT).
    DXSAVE   BAT  Sample change in .BAT to save sorted directory to disk.
    FREE     COM  Displays amount of actual free space on hard disk.
    GCOPY    DOC  Documentation for GCOPY.EXE (1k).
    GCOPY    EXE  Menu type selective copy program.
    GDEL     DOC  Documentation for GDEL.EXE (1k).
    GDEL     EXE  Menu type selective delete program.
    MDSECRET COM  Make a ``secret'' sub-directory.
    NDOSEDIT COM  VM style editor for DOS commands.
    NDOSEDIT DOC  Documentation for NDOSEDIT.COM (5k).
    POKING   TXT  Text file containing locations of information about disks.
    RDSECRET COM  Remove ``secret'' sub-directory.
    READONLY COM  Make a file read-only to make it un-erasable.
    READONLY DOC  Documentation for READONLY.COM.
    READWRIT COM  Return a read-only file back to normal read/write status.
    READWRIT DOC  Documentation for READWRIT.COM.
    SDIR5    COM  Utility to list files by types and different formats.
    SDIR5    DOC  Documentation for SDIR5.COM.
    SEARCH   COM  Useful replacement for DOS path command.
    SEARCH   DOC  Documentation for SEARCH.COM (2k).
    SECRET   DOC  Documentation for RDSECRET, MDSECRET, and CDSECRET.
    TREED    COM  Make a directory tree.
    UNDEL    COM  Recovers erased files.
    UNDO     BAS  Allows fixed disk users to read backup diskettes.
    VDL      COM  File deletion utility.
    VDL      DOC  Documentation for VDL.COM (2k).
    VIEWDISK DOC  Documentation for VIEWDISK.EXE.
    VIEWDISK EXE  Look at individual disk sectors.
    WHEREIS  COM  Find a file on the hard disk regardless of location.
    WHEREIS  DOC  Documentation for WHEREIS.COM (1k).
    WRT      DOC  Documentation for WRTE.COM and WRTP.COM.
    WRTE     COM  Make a read-only file copyable.
    WRTP     COM  Make a read-only file.
    DIARY    COM  System use logging program.
    ADD      BAT  Batch file used by DIARY.COM.
    LST      BAT  Batch file used by DIARY.COM.
    OFF      BAT  Batch file used by DIARY.COM.
    SEE      BAT  Batch file used by DIARY.COM.
    READ_ME  1ST  Introductory text file for DIARY.COM.
    PASSWORD DOC  Documentation file for PASSWORD.EXE.
    PASSWORD EXE  Protect your system with a password.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DISKPARK.DOC

{% raw %}
```
  DiskPark by Simcha Lerner
  Version 1.00, November 1984
  
  This program is a utility that will  locate all hard disks in the system
  and move  their heads to the  inner-most cylinder.  It will  give status
  messages for  each drive encountered.   This program uses the  hard disk
  ROM BIOS calls  as documented in the  IBM Tech Ref for the  XT. This has
  been tested on a  Compaq Plus without any problems.  It  will work on PC
  compatible  machines and  non-IBM  hard  disks only  if  they are  fully
  compatible at the BIOS level.  All other  I/O is through DOS so that you
  can use this via a re-directed console.
  
  The ability to exit back to DOS is  to allow you to park the disk if you
  are going to leave the machine for  a while.  EXITING TO DOS CAN UN-PARK
  THE HARD DISK, SO DO NOT EXIT TO  DOS IF YOU ARE ABOUT TO POWER OFF YOUR
  MACHINE.   In order  to exit  back to  DOS, hit  three carriage  returns
  slowly.  The program  flushes the buffer before each  character to avoid
  accidental activation.
  
****************************************************************************
*                                                                          *
* IMPORTANT:                                                               *
*                                                                          *
* This  program does  NOT lock  the  heads.  If  you intend  to move  your *
* system, run the utility that came with it for that purpose.              *
*                                                                          *
****************************************************************************
                                              *
*****************************************************************
```
{% endraw %}

## DNXSD.DOC

{% raw %}
```
                        DNXSD.DOC

	The batch files DN.BAT, DX.BAT, DS.BAT and DD.BAT write
sorted directories on the screen only. They sort on the directory
line starting with fileName, eXtension, Size or Date (mm/dd/yy).
The sorted directory can be stored by modifying the batch files,
as in the example of DXSAVE.BAT.
	These batch files have two dummy parameters: drive and
filename and extension restriction, if any. Thus, to sort the files
on drive E that satisfy the filename and extension restriction of
ABC?.*, sorting by size, one uses:
		DS E ABC?.*
The spaces between S, E and A are important.
	Note that if one sorts on a restricted set of files, such as 
with DX E *.COM, then that amounts to the same thing as DS E *.COM.

```
{% endraw %}

## FILES478.TXT

{% raw %}
```
Disk No  478
Program Title: HARD DISK UTILITIES
PC-SIG version 1.3

This is a collection of utilities for the hard disk drive user that was
compiled from over 25 disks in our library.

Usage:  DOS Utilities

System Requirements:  A hard disk.

How to Start:  Type MANUALS (press enter).

Suggested Registration:  Various (from $5 to $50 depending on the
program).

File Descriptions:

ALTER    COM  Utility to change file attributes (HIDDEN/READONLY/ETC)
ALTER    DOC  Documentation for ALTER.COM (4k)
BACKSTAT EXE  Tells you which files on the hard disk haven't been backed-up
CATALOG  COM  Make a sorted directory
CDSECRET COM  Go to a "secret" sub-directory
DD       BAT  Sort Directory by date (PART OF DNXSD.BAT)
DIR2     BAS  Basic version of a directory sorter
DISKPARK DOC  Documentation for DISKPARK.EXE (1k)
DISKPARK EXE  Position the hard disk drive head in a saftey zone
DISRTN   EXE  Undeletes and recovers lost first sectors
DN       BAT  Sort Directory by name (PART OF DNXSD.BAT)
DNXSD    DOC  Documentation for sorting directory
DS       BAT  Sort Directory by size (PART OF DNXSD.BAT)
DX       BAT  Sort Directory by extension (PART OF DNXSD.BAT)
DXSAVE   BAT  Sample change in BAT to save sorted directory to disk
FREE     COM  Displays amount of actual free space on hard disk
GCOPY    DOC  Documentation for GCOPY.EXE (1k)
GCOPY    EXE  Menu type selective copy program
GDEL     DOC  Documentation for GDEL.EXE (1k)
GDEL     EXE  Menu type selective delete program
MDSECRET COM  Make a "secret" sub-directory
NDOSEDIT COM  VM style editor for dos commands
NDOSEDIT DOC  Documentation for NDOSEDIT.COM (5k)
POKING   TXT  Text file containing locations of information about the hard disk
RDSECRET COM  Remove "secret" sub-directory
READONLY COM  Make a file read-only to make it un-erasable
READONLY DOC  Documentation for READONLY.COM
READWRIT COM  Return a read-only file back to normal read/write status
READWRIT DOC  Documentation for READWRIT.COM
SDIR5    COM  Utility to list files by specific types and different formats
SDIR5    DOC  Documentation for SDIR5.COM
SEARCH   COM  Useful replacement for DOS path command
SEARCH   DOC  Documenation for SEARCH.COM (2k)
SECRET   DOC  Documentation for RDSECRET,MDSECRET,& CDSECRET (1k)
TREED    COM  Make a directory tree
UNDEL    COM  Recovers erased files
UNDO     BAS  Allows fixed disk users to read backup diskettes
VDL      COM  File deletion utility
VDL      DOC  Documentation for VDL.COM (2k)
VIEWDISK DOC  Documentation for VIEWDISK.EXE
VIEWDISK EXE  Look at individual disk sectors
WHEREIS  COM  Find a file any where on the hard disk regardless of location
WHEREIS  DOC  Documentation for WHEREIS.COM (1k)
WRT      DOC  Documentation for WRTE.COM and WRTP.COM
WRTE     COM  Make a read-only file copyable
WRTP     COM  Make a read-only file
DIARY    COM  System use logging program
ADD      BAT  Batch file used by DIARY.COM
LST      BAT  Batch file used by DIARY.COM
OFF      BAT  Batch file used by DIARY.COM
SEE      BAT  Batch file used by DIARY.COM
READ_ME  1ST  Introductory text file for DIARY.COM
PASSWORD DOC  Documentation file for PASSWORD.EXE
PASSWORD EXE  Protect your system with a password

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,1988 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<< Disk No 478  Hard Disk Utilities >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the documentation for programs on this disk, type:           ║
║                  MANUALS (press enter)                                  ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PASSWORD.DOC

{% raw %}
```

























                               Password

                                  by

                      John Reeves and Kent Hummel

                           Brought to you by

                         User Friendly Systems

































                                                     





                             Index

         


          1------------ Introduction

          1.2---------- Set up

          2------------ How to use Password

          3------------ Updates

          3.1---------  User-supported Concept

          3.2---------- Disclaimer

          4------------ Password Registration form










































                                                           page 1





               1 ------------ Introduction ---------------------


         Password is a protection program for computers with a hard

     drive. With out the proper password the user will be locked out

    of your system on the third attempt. Password was written to be

    as user friendly as possible, and I hope that you will find it 

    useful.


                1.1--------- Set Up --------------------------

                     
          To set up Password in your system you will need to
     
     put the program in the AUTOEXEC.BAT file, per in the          

     illustration below. If you have never made a batch file     

     type the folllowing:   

               copy con:autoexec.bat  (Press the <enter> key)

               password.exe   <enter>

               date   <enter>

               time   <enter>

               ^Z    (Press the <ctrl> key and the <Z> key at the

                    same time. then press the <enter> key

               
          Password must be the first file in the Autoexec.bat file

     or your computer will not be protected.

          Now Password will be the first thing you see on the 

     screen. Your files will be safe from people who are not

     authorized to use your computer.













                                                       Page 2




               2 ----How to use Password----------------------


          Password is very easy to use and install. To begin copy

     the program "Password.exe" to your hard-drive  and  at  the  

     prompt type "PASSWORD". Now it will ask you to type your    

     personal  password it will present your password on the 

     screen and ask if it is correct. This program is CASE
         
     SENSITIVE! SO BE VERY CAREFUL OF HOW YOU TYPE IN YOUR

     PASSWORD! You can use any letter,(upper or lower case)     

     number or wild card (that is any character you would use in

     connection with the  SHIFT key).

               If you need to invoke Password at any other time,

     the easyest way to do it is in a batch file like the demo

     below.
                         copy con:go.bat   <enter>
                         
                         echo off
     
                         cls

                         password.exe

                         ^Z   <ctrl><Z> and <enter>


          All you have to do now it type go at the prompt and

     Password will run. If you use a Ramdrive, but I do

     suggest you backup everything to a floppy or to

     the harddrive before invoking Password.

















                                                      Page 3


                  3 -----Future up-dates-----------------------


          Version 3.0 will have multi-user capablites.   

     After that is still on the drawing board.



                 3.1 -----User-suppored Consept----------------

               This product is for personal use and can be  

     copied and shared with others, on the conditions that the 

     program is not distributed in modified form and with the 

     documentation, also that no fee or other consideration is

     charged. If you find this program of value please send a
     
     donation ($20.00 suggested). Send it with the registration

     form on the last page.

        As a registared user you are entiltled to the following

         1  The latest version of this program (ver 2.1 which is 
               this one )
         2  When a new version is available you will be notified.
               Then send a blank formated disk in a disk mailer
               (with return postage) and you will be sent the
               new version and documentation.
         3 You will be notified of future products.



                 3.2------Disclaimer----------------------------


          Password is distributed as is, with no guarantee that  

     it will work on all PC'S or PC-compatiables. In no event  

     will the author be liable  for any damages, including lost 

     profits, lost savings or other incidental or consequential

     damages arising out of the use of or the inability to use

     this program, even if the author has been advised of the 












                                                      Page 4




     possibility of such damages, or for any claim by any 

     other party.


          Despite the above statement, If this program will

     not run on your computer, send me the information on

     your computer and I will see what can be done to get

     it running.


















































                           REGISTRATION FORM


    Send to

     User Friendly System
     P.O. Box 2609
     Denton, Texas 76202
                  
                                (Please Print)


               NAME ____________________________________________


               ADDRESS__________________________________________

               CITY_____________________________________________

               STATE________ ZIPCODE___________________

      
               AMOUNT__________($20.00)  CHECK #_____________

               Where did you hear about PASSWORD?_______________

     ___________________________________________________________

     ___________________________________________________________



     Please send Check or Money Order .(no cash please)
```
{% endraw %}

## POKING.TXT

{% raw %}
```
                     POKing Around On The Fixed Disk
 
                               Chris Thomas
                                   UCLA
 
The other day I was investigating how many files I could put on my fixed
disk.  The DOS manual indicated that the format of the disk depends on how
much of it is allocated for DOS. So I POKEd around and found that when
allocated entirely for DOS use, the 20740 sectors on the 10MB Fixed Disk
are allocated as follows:
 
                      # of
                     Sectors            Use
                     --------        -----------
                     1       System boot and partition map
                     1       DOS boot record
                     8       FAT
                     8       FAT - duplicate copy
                     32      Directory
                     20688   Data sectors (2586 clusters)
                     2       Unused sectors(not mapped
                               by FAT)
                     68      Cylinder 305, used by
                               diagnostic routines
 
There are eight sectors per cluster, meaning the smallest file takes 4K.
This is necessitated by the architecture of the File Allocation Table,
which allows a maximum of 4087 clusters.  The directory has space for 512
files, unless there is some other limitation in DOS.
 
One result of this exploration is that I feel much pressure to use
subdirectories to keep from running out of directory space.  Although
subdirectories are fine for some data, many things only coexist with
subdirectories and don't actually support them.
```
{% endraw %}

## READONLY.DOC

{% raw %}
```
type readonly filename.ext and will set filename to readonly.
You will not be able to delete or erase this file.
Protect from accidental erasure important files.

```
{% endraw %}

## READWRIT.DOC

{% raw %}
```
resets readonly files to read/write and allows erasure
type readwrit filename.ext

```
{% endraw %}

## SEARCH.DOC

{% raw %}
```
      SEARCH.COM is from PC Magazine May 14, 1985 page 243
                   by Steve Holzner (c) 1985.  
                    Original Name LOCATE.COM.

This program is to allow the user of a hard disk to search for an 
ASCII string throughout a disk, across any or all subdirectories.  
It even strips the 8th bit so it works right with WordStar files.  
The DOS FIND command has a similar mission, but can only search a 
specified  file.  Some  commercial  programs  will  search  on  a 
specified  directory,  but SEARCH will search every path that you 
give it in the order given in a file named PATH.DAT,  which  must 
be in the ROOT directory.

Since  sub-directories  are  involved,   DOS  2.x  or  higher  is 
required.   SEARCH  has been successfully tested with MS-DOS 2.11 
on a Compaq Plus.

         Command Syntax:  SEARCH text to search for<cr>

A sample PATH.DAT file:

\WS
\SECTION1
\SECTION1\A
\SECTION1\B
\WP
\MM
A:

            PATH.DAT IS LIMITED TO 300 BYTES MAXIMUM.
Note that you can even have SEARCH check more than one disk drive 
if you want.  The root directory of the default drive is searched 
automatically.  If you wish to search a root directory of another 
drive,  do NOT use `a:\` in PATH.DAT, or the program will hang. A 
Ctrl-Break  will  put  you back in control.   To  search  a  root 
directory, use the drive letter and colon only.

SEARCH  permits  you  to  enter  a search  string  of  up  to  20 
characters, and returns a total of 40 characters to show context.  
It IS case sensitive,  so it only returns EXACT matches.  It does 
not  pause  when  the screen fills,  so if you  think  there  are 
multiple  matches,  you may want to use the DOS MORE  filter,  or 
turn on the printer echo for a hard copy.

I  renamed  the program from the original LOCATE.COM  because  it 
conflicts  with  a  Public Domain program  that  finds  filenames 
across sub-directories.

Jim Nelden
Normal, Illinois

conflicts  with  a  Public Domain program  that  finds
```
{% endraw %}

## UNDO.BAS

{% raw %}
```bas
10 KEY OFF
20 CLS
30 COLOR 0,7
40 LOCATE 5,33
50 PRINT " UNDO-128.BAS "
60 LOCATE 7,31
70 PRINT " By Rich Schinnell "
80 LOCATE 8,26,1
90 PRINT " Rockville, MD (301) 949-8848 "
100 COLOR 7,0
110 PRINT
120 PRINT
130 PRINT "A program for IBM  DOS 2.0/2.1 Fixed Disk owners , ie XT's and"
140 PRINT "expansion chassis's who use the IBM DOS 2.0 BACKUP.COM utility and"
150 PRINT "want to access files from their backup disks without Restore."
160 PRINT "All files are restored up to the next 128 Byte boundry."
170 PRINT "This cause absolutely no problems as DOS always reserves"
180 PRINT "space in blocks of 512 for SS disks and 1024 for DS disks."
190 PRINT "Press <ENTER> to quit... Now Enter  SINGLE Letter Drive  for"
200 DEFINT A-Z
210 FALSE% = 0
220 TRUE% = NOT FALSE%
230 ON ERROR GOTO 1310
240 ZZZ! = 1
250 PRINT:LOCATE ,,1
260 PRINT"Backup disk Location ";
270 DR$=INKEY$:IF LEN(DR$)<1 THEN 270
280 IF ASC(DR$) = 13 THEN 1290
290 DR$ = DR$ + ":"
300 OPEN DR$+"BACKUPID.@@@" FOR INPUT AS #1
310 CLOSE #1
320 FILES DR$ + "*.*"
330 PRINT
340 PRINT
350 INPUT "File name to Recover (no Drive Designation) ";INFILE$
360 IF LEN(INFILE$) < 1 THEN 1290
370 CLOSE #1
380 OPEN DR$+INFILE$ FOR INPUT AS #1
390 CLOSE 1
400 CLOSE #1
410 OPEN DR$+"BACKUPID.@@@" AS #1 LEN=128
420 FIELD #1,128 AS G$
430 GET #1
440 CLOSE #1
450 N$ = STR$( ASC( MID$(G$,3,1))) + STR$( ASC( MID$(G$,2,1)))
460 N=VAL(N$)
470 DTE$=STR$(ASC(MID$(G$,7,1)))+"-"+STR$(ASC(MID$(G$,6,1)))+"-"
480 DTE$=DTE$+STR$(ASC(MID$(G$,4,1))+1792)
490 PRINT "This is your backup disk #"; N;" Dated ";DTE$
500 CLOSE #1
510 OPEN DR$+INFILE$ AS #1 LEN=128
520 C$ = ""
530 D$ = ""
540 FIELD #1,128 AS A$
550 A# = LOF(1)
560 PRINT "Input file has";A# - 128;" Bytes in it"
570 GET #1
580 C$ = A$
590 FOR I% = 1 TO 128
600   IF ASC( MID$(C$,I%,1)) < 33 THEN 620
610   D$ = D$ + MID$(C$,I%,1)
620 NEXT I%
630 IF ASC(MID$(C$,2,1)) = 1 THEN 660
640 PRINT "This is Part 2 of";D$;" You must start with the first part"
650 BEEP:GOTO 330
660 IF ASC(MID$(C$,1,1)) =255 THEN ONLY.ONE%=-1:GOTO 690
670 PRINT:COLOR 23,0:PRINT "File on two Disks ,Insert backup disk #";
680 PRINT N+1;" When Instructed" : COLOR 7,0 : BEEP
690 PRINT
700 PRINT CHR$(34); MID$(D$,1,40); CHR$(34);" Was the file name when backed up"
710 INPUT "What do you want to name the output file ";OUTFILE$
720 IF LEN(OUTFILE$) < 1 THEN 330
730 OPEN OUTFILE$ FOR INPUT AS #2
740 CLOSE 2
750 PRINT "File ";OUTFILE$;" already exists, <O>verwrite ";
760 INPUT ": ";WELL$
770 IF WELL$ = "O" OR WELL$ = "o" THEN 780  ELSE 710
780 CLOSE #2
790 OPEN OUTFILE$ FOR OUTPUT AS #2
800 CLOSE #2
810 OPEN OUTFILE$ AS #2 LEN=128
820 FIELD #2,128 AS B$
830 COLOR 23,0
840 PRINT "Working ....";
850 COLOR 7,0
860 FOR I! = 2 TO INT((A#-128)/128)+2
870   GET #1,I!
880   LSET B$ = A$
890   PUT #2,ZZZ!
900   ZZZ! = ZZZ! + 1
910   PRINT CHR$(15);
920 NEXT I!
930 IF ONLY.ONE% THEN 1260
940 PRINT
950 PRINT "Insert Backup Disk #";N +1;" in drive ";DR$;
960 PRINT " and press <ENTER> or <Q>uit ":BEEP
970 R$ = INKEY$
980 IF R$ = "" THEN 970
990 IF R$ = "Q" OR R$ = "q" THEN CLOSE  : KEY ON  : END
1000 CLOSE #1
1010 OPEN DR$+"BACKUPID.@@@" AS #1 LEN=128
1020 FIELD #1,128 AS G$
1030 GET #1
1040 CLOSE #1
1050 N1$ = STR$( ASC( MID$(G$,3,1))) + STR$( ASC( MID$(G$,2,1)))
1060 N1=VAL(N1$)
1070 IF N1 = N + 1 THEN 1090
1080 PRINT "WRONG DISK, TRY AGAIN You put in disk #"; N1 : GOTO 930
1090 CLOSE #1
1100 OPEN DR$+INFILE$ FOR INPUT AS #1
1110 CLOSE 1
1120 OPEN DR$+INFILE$ AS #1 LEN=128
1130 FIELD #1,128 AS A$
1140 C$ = ""
1150 D$ = ""
1160 A# = LOF(1)
1170 PRINT "Input file has";A# - 128;" Bytes in it"
1180   GET #1
1190   C$ = A$
1200 FOR I% = 1 TO 128
1210   IF ASC( MID$(C$,I%,1)) < 33 THEN 1230
1220   D$ = D$ + MID$(C$,I%,1)
1230 NEXT I%
1240 ONLY.ONE% = - 1
1250 GOTO 860
1260 CLOSE
1270 PRINT
1280 PRINT "File ";OUTFILE$;" created  Size="; STR$((ZZZ!-1)*128);" Bytes
1290 KEY ON
1300 END
1310 IF ERL=300 THEN DR$="":PRINT " Not a Valid Backup Disk":BEEP:RESUME 250
1320 IF ERL=380 THEN PRINT DR$;INFILE$;" NOT FOUND ":CLOSE #1:RESUME 250
1330 IF ERL=730 THEN RESUME 780
1340 IF ERL=890 THEN PRINT "disk is Probably full, check the disk":RESUME 1290
1350 IF ERL=1100 THEN PRINT "Not found " : RESUME 940
1360 PRINT "Error"; ERR ;" has occured in line #"; ERL
1370 RESUME 1290
```
{% endraw %}

## VIEWDISK.DOC

{% raw %}
```
 
 
 
 
 
 
 
 
			 "View Disk" by DSOFT 
 
 
 
 
 
	 A utility program to examine the sectors of your disk 
	 drives for the IBM PC and 100 % compatible computers. 
 
 
 
				 Version 1.0 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
William K. Davies 
8990 19th #294 
Alta Loma, Ca. 91701 
 
Compuserve: 74235,435 
 
 
 
 
 
View Disk Documentation Version 1.0 -- DSOFT 1984		 -Page 1- 
 
GENERAL INFORMATION: 
 
"View Disk" is a utility program that allows you to select individual 
disk sectors and display them on your screen. I you are curious about what is in the hidden files of your disk or how to hide files of your own, you will probably find this program useful. "View Disk" is written in a combination of "C" and Assembly languages for speed and machine control. 
In order to run "View Disk" it is necessary to have an IBM PC or 100 
percent compatible computer. This program requires only 64k ram and one disk drive running DOS 2.0. A printer is optional for the screen dumps. This program makes extensive use of the BIOS routines do to the lack of control supplied by DOS. Unfortunately, this extensive use of the BIOS may limit the programs portability. 
 
RUNNING THE PROGRAM: 
 
Format: VIEWDISK [D:] 
 
If an alternate drive is not specified the default drive is assumed. 
After the program starts the disk format will be displayed, e.g. "Disk Format is Double Sided with 9 sectors/track". If you are using a double sided disk, you will then be asked for the drive head. The program will tell you what the valid choices are. If you are using a double sided disk the choices will be 0 for top and 1 for the bottom. You will not be asked if you are using a single sided disk. Then the program will prompt you for the disk track. Again the valid choices will be displayed. With the exception of the 10mb fixed disk the valid tracks are 0 to 39. The same is then done for the sector within the track that you have chosen. You will be notified in the advent of a invalid choice and given another chance. The disk drive motor will come on for a brief period and shortly the contents of the first half of the selected disk sector will be displayed. A prompt will ask you to hit any key to continue. If you hit the 'S' key, the screen will be dumped to the line printer. This is true for the "Next Sector" and "Next Track" prompts also. 
After the second half of the disk sector is displayed, you will be 
asked if you want to view the next sector. The only exception to this is if you have just viewed the last sector on that track. In this case you will be asked if you want to select another track. 
 
 
PERMISSION TO COPY: 
 
Anyone is free to copy and pass along this program along with its 
documentation, as long as: 
 
A. No price is charged for the software or documentation, unless it 
	 is to recover the price of the diskette that the program is 
	 supplied on. This charge should be less than $10. 
 
B. The program and documentation are not modified and are supplied 
	 together. 
 
 
 
 
 
 
View Disk Documentation Version 1.0 -- DSOFT 1984		 -Page 2- 
  
 
 
DISCLAIMER: 
 
In no event will the Author be liable to you for any damages, including any lost profits, lost savings or other incidental or consequential damages arising out of the use of this program, even if the Author has been advised of the possibility of such damages, or for any claim by any other party. 
 
 
USER-SUPPORTED: 
 
This program is supplied to you in hopes that you will find it useful. 
If you do find the program of value a to the further development of this and other such program will be appreciated ($15 is suggested). If you have any suggestions for the improvement of the program or suggestions for new program of this type they would also be appreciated. Anyone, may request a copy of the program by sending a blank formatted disk, with a addressed postage-paid return mailer. A copy of the latest version of the program, along with the documentation will be sent by return mail. The source code is also available. It is written in "C" and Assembly language, so a "C" compiler with the ability to imbed Assembly code will be necessary to 
compile it. To get the source code, follow the directions for obtaining the program plus include a letter stating that you want the source code along with your contribution of $25. It will be sent by return mail. Contributions for the program itself are completely voluntary, but you are encouraged to copy and distribute the program to your friends. I hope that you will find the program useful. 
 
 
program to your friends. I ho
.e

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0478

     Volume in drive A has no label
     Directory of A:\

    ADD      BAT        12  12-31-87   3:00a
    ALTER    COM      1024   6-12-84   1:42p
    ALTER    DOC      4096   6-12-84   1:43p
    AUTOEXEC BAT        22  12-31-87   3:00a
    BACKSTAT EXE     13312   1-17-85   2:20p
    CATALOG  COM      1280   2-05-83
    CDSECRET COM       512   5-09-85   9:05a
    DD       BAT        26   4-14-84   2:44p
    DIARY    COM     60685  12-31-87   3:00a
    DIARYADD COM     26776  12-31-87   3:00a
    DIR2     BAS     21376  11-27-83   6:00p
    DISKPARK DOC      1792   2-27-85   8:25a
    DISKPARK EXE      1408   2-27-85   8:25a
    DISRTN   EXE      9728   6-06-82
    DN       BAT        22   4-14-84   2:41p
    DNXSD    DOC       752   4-16-84   3:55p
    DS       BAT        26   4-14-84   2:43p
    DX       BAT        25   4-14-84   2:43p
    DXSAVE   BAT        34   4-16-84   3:48p
    FILES478 TXT      3370   9-09-88  10:46a
    FREE     COM      1024   3-25-84   2:08a
    GCOPY    DOC      1024   3-25-84   1:05a
    GCOPY    EXE     14336   3-25-84   1:00a
    GDEL     DOC      1024   3-25-84   1:59a
    GDEL     EXE     13312   3-25-84   1:35a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617   6-03-88   9:01a
    LST      BAT        12  12-31-87   3:00a
    MANUALS  BAT        16   6-03-88   9:02a
    MDSECRET COM       512   5-09-85   9:05a
    NDOSEDIT COM      2560   6-08-84   1:13p
    NDOSEDIT DOC      5632   6-08-84   1:12p
    OFF      BAT        12  12-31-87   3:00a
    PASSWORD DOC      6612  12-04-86   8:18p
    PASSWORD EXE     41686  12-01-86   8:17p
    POKING   TXT      1625   2-20-86   8:27a
    RDSECRET COM       512   5-09-85   9:06a
    README   BAT       650   2-26-87   9:03a
    READONLY COM       128   6-03-85  10:15p
    READONLY DOC       256   6-03-85  10:15p
    READWRIT COM       128   6-03-85  10:15p
    READWRIT DOC       128   6-03-85  10:15p
    READ_ME  1ST      1055  12-31-87   3:00a
    SDIR5    COM      6528   3-20-85   8:57a
    SDIR5    DOC      7936   3-20-85   8:59a
    SEARCH   COM       640   5-08-85   6:58p
    SEARCH   DOC      2048   5-08-85   6:58p
    SECRET   DOC      1408   5-09-85   9:06a
    SEE      BAT        12  12-31-87   3:00a
    TREED    COM      1920   5-10-85   9:37p
    UNDEL    COM      2176   3-19-85   6:57a
    UNDO     BAS      4608   2-21-84   6:56a
    VDL      COM      1024   4-10-84   5:29p
    VDL      DOC      2048   4-10-84   5:31p
    VIEWDISK DOC      4736   3-15-85   8:38a
    VIEWDISK EXE     16384   3-15-85   8:36a
    WHEREIS  COM       512   1-08-84   4:55a
    WHEREIS  DOC      1024   1-08-84   4:56a
    WRT      DOC      1536   4-10-84   5:42p
    WRTE     COM       512   4-10-84   5:40p
    WRTP     COM       512   4-10-84   5:39p
           61 file(s)     294741 bytes
                           35840 bytes free
