---
layout: page
title: "PC-SIG Diskette Library (Disk #936)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0936/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0936"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DCOPY, MYMENU, AND MENUEZE"

    DCOPY is an enhancement of the MS-DOS COPY command.  You can still copy
    files, but you control the copying process based on the file's
    creation/revision date.  The program also pauses when the new disk
    becomes full, lets you put in another, and even formats it!  If you
    want, you can ask DCOPY to prompt you before each file is copied.
    Wildcard copies are supported.
    
    MYMENU creates a start-up menu for your hard disk.  A BASIC program is
    created by the program, and you provide a directory and the program name
    for each option in the menu.  The menu can have up to 18 options, each
    having a short description of the program.
    
    After the BASIC program is created, a few lines are entered into your
    AUTOEXEC.BAT file, and your menu is ready to go!
    
    Make menus to automatically load programs on your various disk drives.
    Put an automatic menu on each of the disks you use regularly.
    
    You are prompted for the names of the programs you want included in a
    particular menu, then asked for the commands needed to run them.
    MENU-EZE lets you choose the colors for your menu screen and you can
    make a different menu for each of the disks in your library (including
    your hard disk).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DCOPY.DOC

{% raw %}
```












                                   DCOPY





                                   V2.1






              (C) Copyright 1986 by Elfring Consulting, Inc.






                               Gary Elfring
                           4N899 West Mary Drive
                       St. Charles, Illinois  60174



























                                     1









                            DCOPY INTRODUCTION

     Have you ever wanted to backup only the work you did  today?   Or 
     how  about copying only those files created last week?   Wouldn't 
     it  be  great to be able to manipulate your disk files  based  on 
     their name and date?  Well now you can.

     DCOPY works in much the same way that as the MS-DOS COPY command.  
     However,  DCOPY  has many extra options and lets you control  the 
     copying process based on a date.   It lets you copy files created 
     before,  on,  or  after a specified date (or any  combination  of 
     those  options).   The date may be entered as part of the command 
     or it may reside in a disk file. 

     The  command "dcopy *.* b:  1/1/87 10:00 -l" tells DCOPY to  copy 
     all files from the default drive and subdirectory to the B: drive 
     provided they were created LATER than 10:00 AM on 1/1/87.

     DCOPY also offers several other useful copying features.   First, 
     DCOPY  will  pause  when a floppy disk becomes full and  let  you 
     change  media.   If the new floppy must be formatted,  DCOPY  can 
     invoke  your FORMAT program automatically.   You can use the  ar-
     chive bit to further control copying.   You can also force  DCOPY 
     to prompt you before each file is copied.  Finally, DCOPY can use 
     an indirect date,  (resides in a disk file),  to control the copy 
     and update that disk file date when it is through copying.






























                                     2









                                 SHAREWARE

     This  program is provided on a "shareware" basis  ONLY!  Try  the 
     program  out.  If you don't like it- erase it.  If you do like it 
     we would appreciate it if you would pay for it.   This product is 
     only available on a shareware basis.

     DCOPY is the core program in a group of utilities called THE DATE 
     UTILITIES.   These  utilities let you manipulate your disk  files 
     based on name and date.   The utilities include routines to copy, 
     (DCOPY),  erase (DERASE),  display (DDIR),  and change file dates 
     (CDATE).    In  addition,  two other utilities:  SDIR  (a  sorted 
     directory  program),  and FCOPY (copy files to multiple floppies) 
     are included.

     If you register your copy of DCOPY you will automatically receive 
     this entire set of date based utilities.   (This is the incentive 
     to send in your registration fee.)  To register send $35.00 to:

     Gary Elfring
     4N899 West Mary Drive
     St. Charles, Illinois, 60174

     PLEASE mention the product name,  (DATE UTILITIES), and where you 
     got it from.  You will then receive: the latest versions of these 
     programs including:  CDATE,  DCOPY,  DERASE, DDIR, FCOPY, & SDIR, 
     improved typeset documentation,  telephone support,  and one free 
     update to the product.


                                 WARRANTY 

     NONE!!  No warranty is provided to anyone who has not contributed 
     for  this program.  Gary Elfring specifically disclaims all other 
     warranties,  expressed or implied,  including but not limited to, 
     implied warranties of merchantability and fitness for a  particu-
     lar purpose with respect to defects in the disk or documentation, 
     and  the program license granted herein.  In no event shall  Gary 
     Elfring  be liable for any loss of profit or any other commercial 
     damage,  including but not limited to special, incidental, conse-
     quential, or other damages.















                                     3









     DCOPY
     Command
     ________________________________________________________________

     Purpose:  Copy one or more files to the specified disk drive and 
               path based on a comparison of the file date with a 
               passed date.

     Format:   DCOPY filename destination [date] [time] [-options]

               Where: everything between the two braces "[" and "]"
                      is optional and,

               filename    - is any valid file name with optional 
                             drive and path.  The wildcards "*" and 
                             "?" may be used in the filename.
               destination - is any valid drive and path
               date        - is a valid date of the form MM/DD/YY
               time        - is a valid time of the form HH:MM:SS
               options     - always start with the "-" character and 
                             include: a = archive, b = before, l = 
                             later, o = on, p = prompt, u = update.

     Remarks:  This command functions in basically the same manner as 
               the MS-DOS COPY command.  However, DCOPY lets you copy 
               files based on the file's creation date / update time 
               stamp.  There are three major differences between DCOPY 
               and the MS-DOS command COPY.  First, files are copied 
               to the specified drive and path ONLY if each file date 
               and time matches the optional condition(s) specified. 
               Second, files can NOT be renamed as they are copied.  
               Third, DCOPY will pause when your destination floppy, 
               (A: or B:), becomes full.  You can then change 
               floppies, format a new floppy, or quit.

               DCOPY copies a file or group of files based on the file 
               dates.  Full wild card support is included for the file 
               name.  The global characters "?" and "*" can be used in 
               in the file name and extension parameters.  These 
               global characters work in exactly the same way as they 
               do with a COPY command.

               If you don't remember how to use DCOPY you can always 
               type DCOPY{cr}, where {cr} signifies the return key.  
               DCOPY will then print a help screen that tells you how 
               to run the program.


               DCOPY offers six different options. Options may be 
               grouped together in any combination. An option or group 
               of options must always be preceded by the "-" 
               character. Three of these options, (b, l, o), modify 
               the way the specified date effects a copy. The -b 
               option tells DCOPY to copy files created before the 


                                     4









               specified date. The -o option copies files created on 
               the specified date. The -l option copies files created 
               later than, (after), the specified date. The remaining 
               three options control special features. The -u option 
               tells DCOPY to update the date file, (only if used), to 
               the current system time and date when done with a copy. 
               The -a option tells DCOPY to copy only those files that 
               have not previously been archived. If you use this 
               option DCOPY will only copy files that have not 
               previously been backed up. The last option is -p. This 
               option causes DCOPY to pause and prompt you with the 
               name of the file being copied. You decide whether or 
               not to copy the file by responding with Y or N.


               To use DCOPY you MUST specify a file name or pattern, 
               and a destination drive at a minimum.  If no date and 
               time is included in the command, DCOPY assumes you want 
               to copy files created or updated on the current day.  
               Thus:

               dcopy *.* a:

               copies all files created or updated after 12:00 AM on 
               the current day.  This assumes the time and date set in 
               your IBM PC, XT, or AT is correct.

               Making a copy of files based on a different time and 
               date is just as easy.  To do this DCOPY needs to know 
               the date, (and optionally a time), and whether to copy 
               files created: before, on, or after this date.  Copy 
               control is based on options.  Note that if no TIME is 
               specified the time is assumed to be 0:00, the previous 
               day's midnight.

               dcopy *.obj b: 12/12/84 -ol

               copies all files from the default drive with the 
               extension ".obj" that were created or last updated ON 
               or LATER than 12 AM on 12/12/84 to the B: drive.  The 
               files copied to drive B: will have the same name and 
               time stamp as they had on the default drive.

               dcopy b:work.* a: 1/2/85 15:00:00 -b

               copies all files from the B: drive that have the file 
               name "work" and any extension, to the A: drive PROVIDED 
               that the file was last created or updated before 3:00 
               PM on 1/2/85.

               dcopy c:\work\*.c d:\help 2/20/86 -o

               copies all files with the extension ".c" from the path 
               c:\work to the path d:\help provided each file was last 


                                     5









               updated only on the day of 2/20/86.

               copies all files from the default drive with the 
               extension ".obj" that were created or last updated on 
               or later than 12 AM on 12/12/84 to the B: drive. The 
               files copied to drive B: will have the same name and 
               time stamp as they had on the default drive.

               dcopy c:*.* a: @datefile.cur -lu

               copies all files from the C: drive that were created 
               later than the date found in the file "datefile.cur" to 
               the floppy disk A:. When the copy is done the date and 
               time in file "datefile.cur" will be changed to the 
               current system time and date. The date file must 
               contain an ASCII date string of the form MM/DD/YY. It 
               may optionally contain a time of the form HH:MM:SS. 
               Files changed by the -u, update, option will always 
               contain both a time and date. The file "datefile.cur" 
               will typically look as follows:

               MM/DD/YY HH:MM:SS

               The prompting option can be quite useful. It makes 
               DCOPY prompt you before each individual copy takes 
               place. For example:

               We've run out of disk space on drive B: Put a new 
               formatted disk in that drive and hit "C" to continue, 
               OR hit "F" to format a new disk, OR hit "Q" to quit 
               DCOPY now.

               dcopy *.* b: 1/1/86 -olp

               copies all files to drive B: provided they were created 
               on or later than 1/1/86.  The user will be prompted 
               before each file is copied with:

               Copy filename to b:filename (Y/N)?

               You must enter either a "Y" or "N" followed by a 
               carriage return.  Entering a "Y" tells DCOPY to proceed 
               with the transfer of the file.  Entering anything else 
               will cause DCOPY to skip that one file.

               DCOPY also provides full archive file control with the 
               "-a" option.  Each file has a status bit that can be 
               used to indicate whether it has been backed up.  If you 
               use the "-a" option DCOPY will only copy those files 
               not marked as having been previously backed up.  DCOPY 
               will also mark the original file to indicate it has 
               been backed up.




                                     6









                            DISTRIBUTION NOTICE 

     This  program  is  protected by United States Copyright  law  and         
     by International Treaty provisions.  You may distribute, or share 
     this  version of this program with anyone provided the  following 
     conditions are met:

     This  version of DCOPY is being distributed at no charge  to  all 
     who  are interested in it.   To those of you unfamiliar with this 
     approach,  it works like this.   DCOPY is distributed to  various 
     BBS systems and user groups.  You may copy the program and use it 
     for no charge.   Gary Elfring does not handle the actual freeware 
     distribution of this program.

     Try  the  BBS  version out.   If the product does not  meet  your 
     needs, you pay nothing.  If the product does meet your needs, and 
     you can use it, then send us the price of $35.00 U.S.

     We  will  then supply you with a new version of DCOPY along  with 
     all  the other date based utilities,  (none are limited  or  copy 
     protected),  along  with typeset documentation for that  version.  
     We accept check, money order, These utilities include:

          DCOPY     - Copy files based on wildcard and date
          DERASE    - Erase files based on wildcard and date
          DDIR      - Display files based on wildcard and date
          CDATE     - Change a files time and date stamp

     This offer may be withdrawn at an time without notice.

     Send check or money order to:      Gary Elfring 
                                        4N899 West Mary Drive
                                        St. Charles, Illinois
                                        60174
                                        312-377-3520

     Even  if  you do not contribute,  you are encouraged to copy  and 
     distribute  the BBS version of the product freely subject to  the 
     following restrictions: 

     1. Do not distribute altered copies.   If you have suggestions or 
        fixes  you  would like to see,  send us a  written  note.   We 
        welcome all responses.

     2. This product must be distributed complete including the files: 
        DCOPY.EXE, and DCOPY.DOC. 

     3. No  fee is to be charged for copying or distributing the  pro-
        gram without  an  express  WRITTEN agreement with Gary Elfring  
        The  ONLY exception to this rule is:  a small charge,  ($5  to 
        $10),  may  be leveled if this program is included on a set of 
        public domain disks. This charge must be reasonable and repre-
        sent only copying and disk fees. 



                                     7









     4. Commercial  sale of this product in any manner  is  prohibited 
        without Gary Elfring's written permission. 

     User Groups/Clubs:   Gary Elfring's freeware products may be dis-
     tributed  by Clubs and User Groups subject to the  same  restric-
     tions.  We  would  ask only that contributions to our  continuing 
     efforts be encouraged by those performing such distribution. 

     Computer Bulletin Boards:   Gary Elfring's freeware products  may  
     be  distributed  by BBS's subject to  the same  restrictions  and 
     contribution encouragement. 













































                                     8




```
{% endraw %}

## FILES936.TXT

{% raw %}
```
Disk No  936
Program Title: DCOPY v. 2.1, MYMENU, MENUEZ v. 2.0
PC-SIG version 1.2
 
DCOPY is a file-copying program that works much like the MS-DOS COPY
command, except it lets you control the copying process based on the file's
creation/revision date.  The program also pauses when the target disk becomes
full and lets you put in a new disk (it even formats the new disk if it needs
it).  If you want, you can ask DCOPY to prompt you before each file is
copied.  Wildcard filenames are supported, but you can't rename files during
the copy process.
 
DCOPY is just one of a group of date-sensitive utilities.  When you register
your copy of DCOPY you also receive DERASE (erase), DDIR (directory display),
CDATE (to change file dates), SDIR (sorted directory), and FCOPY (to copy files
to multiple floppies).
 
MYMENU is a program that generates a start-up menu for your hard disk.  A
basic program is created by the program, and you must provide a directory
and the program name for each option in the menu.  The menu can have up to
eighteen options.  Each line number contains a short description of the program.
 
After the basic program is created, a few lines are entered into your
AUTOEXEC.BAT file and the program is ready to run.
 
And finally, MENU-EZE produces menus for automatic loading of
programs on your various disk drives.  The program prompts you for the names
of the programs you want included in a particular menu, then asks for
the commands needed to run them.  MENU-EZE also lets you choose the colors for
your menu screen and produces a special .BAT (batch) file and a data file which
you can copy onto the disk you want a menu for.  You can make a different menu
for each of the disks in your library (including your hard disk).
 
PLEASE NOTE: Menu-Matic has been updated, and because of the size of the
update, it would not fit on this disk.  It has been put on disk #1141.
We're sorry for any inconvenience this may have caused you.
 
Usage:  DOS Utilities/Menuing Systems
 
System Requirements:  A hard disk, and BASICA or GWBASIC.
 
How to Start:  Type DCOPY (press enter) to start DCOPY, MYMENU (press
enter) to start MYMENU, and MEZ (press enter) to start MENU-EZE.
 
Suggested Registration:  $35.00 for DCOPY, $10.00 for MYMENU, and $10.00
for MENU-EZE.
 
File Descriptions:
 
-------- ---  DCOPY
DCOPY    EXE  One of the main programs.
DCOPY    DOC  On-disk documentation.
-------- ---  MYMENU
MYMENU   EXE  Main program.
???????  BAT  Batch files used by MYMENU (2 files).
SIGN     BAS  BASIC file used by MYMENU.
-------- ---  MENU-EZE
MZ       COM  Used by finished menu files.
MEZ      BAS  Main program.
MEZDEM   BAT  Demonstration batch file.
MEZ      BAT  Batch file produced by MENU-EZE.
MEZ           Filenames for the sample menu.
MEZ      DOC  Documentation file.
 
PC-SIG
1030D E. Duane Avenue
Sunnyvale, CA. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## MEZ.BAS

{% raw %}
```bas
1000 'MEZ.BAS  (C)1987  Edwin K. Spain
1100 IL=1:N=26:KEY OFF:DIM M$(N),C$(N),C2$(N),PROG$(99)
1200 CLS:WIDTH 80:COLOR 14,0
1300 LOCATE 2,10:PRINT "╔═══════════════════════════════════════════════════════════╗"
1400 FOR L=3 TO 7:LOCATE L,10:PRINT "║"TAB(70)"║":NEXT L
1500 LOCATE 5,15:PRINT "M E N U - E A S E    ver. 2.0               SpainWare  ":LOCATE 6,61:PRINT "(c)1987"
1600 LOCATE 8,10:PRINT "╚═══════════════════════════════════════════════════════════╝"
1700 LOCATE 13,12:PRINT "BASE NAME OF MENU FILES":LOCATE 14,12:INPUT "(DEFAULT IS MEZ (MEZ / MEZ.BAT)) ",MN$:IF MN$="" THEN MN$="MEZ"
1800 LOCATE 13,1:PRINT STRING$(140,32)
1900 LOCATE 10,12:INPUT "Title of Menu: ",T$:LOCATE 13,12:LINE INPUT "PATH: (default is PATH\) ",PA$:IF PA$="" THEN PA$="Path\"
1910 LOCATE 15,12:PRINT "DIRECTORY FROM WHICH YOUR MENU WILL BE RUN":LOCATE 16,12:PRINT "(IE: C:\ or C:\MENU, etc.) ";:LINE INPUT "",CD$
2000 LOCATE 13,1:PRINT SPACE$(160):PRINT SPACE$(160):T$="╡ "+T$+" ╞"
2100 '----------------------------------  COLORS   -----------------------------      -
2200 PR$="$e[35;44;1m$p$g$e[33;44;1m"
2250 COL$(1)="34BLUE":COL$(2)="32GREEN":COL$(3)="36CYAN":COL$(4)="31RED":COL$(5)="35MAGENTA":COL$(6)="33YELLOW":COL$(7)="37WHITE":COL$(8)="30BLACK"
2300 LOCATE 12,12:PRINT "Select colors for the DOS Prompt, the Foreground, and the":LOCATE 13,12:PRINT "Background for your menu by choosing from the following:"
2400 LOCATE 14,22:COLOR 7,8:PRINT "┌─────────────────────────────────┐"
2500 LOCATE 15,24:COLOR 8,1:PRINT " 1 - BLUE   ":LOCATE 15,42:COLOR 8,5:PRINT " 5 - MAGENTA "
2600 LOCATE 16,24:COLOR 8,2:PRINT " 2 - GREEN  ":LOCATE 16,42:COLOR 8,6:PRINT " 6 - YELLOW  "
2700 LOCATE 17,24:COLOR 8,3:PRINT " 3 - CYAN   ":LOCATE 17,42:COLOR 8,7:PRINT " 7 - WHITE   "
2800 LOCATE 18,24:COLOR 8,4:PRINT " 4 - RED    ":LOCATE 18,42:COLOR 7,8:PRINT " 8 - BLACK   "
2900 LOCATE 19,22:COLOR 7,8:PRINT "└─────────────────────────────────┘"
2910 LOCATE 20,18:PRINT "DOS Prompt";TAB(34);"Foreground";TAB(50);"Background"
2922 FOR J=1 TO 3:LOCATE 21,6+(16*J):COLOR 31:PRINT "X":COLOR 7,8
2925 IN$=INPUT$(1):IF ASC(IN$)<49 OR ASC(IN$)>56 THEN 2960 ELSE Y=VAL(IN$)
2926 LOCATE 22,4+(16*J):PRINT MID$(COL$(Y),3):LOCATE 21,4+(16*J):COLOR 7,Y:PRINT SPACE$(LEN(COL$(Y))-2):COLOR 7,8:A(J)=VAL(LEFT$(COL$(Y),2)):IF J=3 THEN A(J)=A(J)+10
2927 A$(J)=RIGHT$(STR$(A(J)),2)
2928 NEXT J
2950 LOCATE 23,26:PRINT "[ ARE COLORS OK? (Y/N) ]":X$=INPUT$(1):IF X$<>"Y" AND X$<>"y" THEN LOCATE 21,1:PRINT SPACE$(230):GOTO 2922
3300 MID$(PR$,4,2)=A$(1):MID$(PR$,7,2)=A$(3):MID$(PR$,19,2)=A$(2):MID$(PR$,22,2)=A$(3):EC$="echo "+CHR$(27)+RIGHT$(PR$,9)
3350 '---------------------------  GET DIRECTORY  ------------------------------      -
3400 CLS:WIDTH 80:PRINT TAB(10)"Display files from which Drive (A-E)":PRINT TAB(10)"<Press  Return if you do not wish to display files> "
3410 DIR$=INPUT$(1):IF DIR$=CHR$(13) THEN CLS:GOTO 6700
3420 IF ASC(DIR$)<65 OR ASC(DIR$)>101 THEN 3410
3430 IF ASC(DIR$)>69 AND ASC(DIR$)<97 THEN 3410
3500 CLS:SCREEN 0:DIR$=DIR$+":*.*":COLOR 0,0
3600 FILES DIR$
3700 FOR DR%=2 TO 24
3800      FOR DC%=0 TO 65 STEP 18
3900      IF CHR$(SCREEN(DR%,DC%+1)) = " " THEN 4700
4000      AR%=AR%+1
4100           FOR L%=1 TO 12
4200           PROG$(AR%)=PROG$(AR%)+CHR$(SCREEN(DR%,DC%+L%))
4300           NEXT L%
4500      NEXT DC%
4600 NEXT DR%
4700 P=0:I%=0:CLS:WIDTH 80:LOCATE 1,4:COLOR 14,0
4800 FOR DC%=1 TO 75 STEP 16
4900      FOR DR%=1 TO 20
5000      I%=I%+1:IF I%=100 THEN 5600
5100      IF PROG$(I%)="" THEN 5600 ELSE LOCATE DR%,DC%
5200      COLOR 0,7:PRINT USING "##";I%;
5300      COLOR 14,0:PRINT PROG$(I%)
5400      NEXT DR%
5500 NEXT DC%
5600 LOCATE 22,25:PRINT "<FILES -- FROM -- DIR "MID$(DIR$,1,1)">"
5700 LOCATE 23,11:PRINT "CHOOSE NUMBER FOR MENU ITEM ";IL;:INPUT ", THEN PRESS  RETURN: ",AL$:IF AL$="" THEN 6600
5750 P=VAL(AL$):M$(IL)=PROG$(P):IL=IL+1:IF IL>26 THEN 6600
5760 LOCATE 23,27:PRINT STRING$(52,32):GOTO 5700
6500 '---------------------------  START MENU DRAWING  -------------------------      -
6600 CLS
6700 OPEN MN$ FOR OUTPUT AS #1
6800 X$="╔"+STRING$(59,205)+"╗":T=LEN(T$):X=32-(T/2)
6900 Y$=STRING$(61,32):MID$(Y$,X,1)="┌":MID$(Y$,X+1,T)=STRING$(T-2,196)+"┐":PRINT #1,TAB(10)Y$
7000 MID$(X$,X,T+2)=T$:PRINT #1,TAB(10)X$
7100 Z$=STRING$(61,32):MID$(Z$,X,1)="└":MID$(Z$,X+1,T)=STRING$(T-2,196)+"┘"
7200 MID$(Z$,1,1)="║":MID$(Z$,61,1)="║":PRINT #1,TAB(10)Z$
7300 PRINT #1,TAB(10);"║";:PRINT #1,TAB(70);"║"
7400 PRINT #1,TAB(10);"║";:PRINT #1,TAB(70);"║"
7500 LOCATE 8,20:PRINT "Title will appear as:"
7600 LOCATE 10,1:PRINT TAB(10)X$
7700 FOR I=1 TO N
7800 COLOR 7:LOCATE 25,18:PRINT "Press ";:COLOR 31:PRINT "Return ";:COLOR 7:PRINT "when finished with item entries!"
7900 IF M$(I)="" THEN 8100
8000 LOCATE 15,10:PRINT "You chose ";:COLOR 31:PRINT M$(I);:COLOR 7:PRINT " as MENU ITEM NO. "STR$(I):GOTO 8300
8100 LOCATE 15,10:PRINT "ENTER MENU ITEM NO. "STR$(I);:INPUT " ",M$(I)
8200 IF M$(I)="" THEN 8900
8300 LOCATE 25,18:PRINT "                                               ":LOCATE 17,10:PRINT "COMMAND TO RUN MENU ITEM NO. "STR$(I);:INPUT " ",C$(I)
8400  LOCATE 18,10:PRINT "secondary command to run no. "STR$(I);:INPUT " ",C2$(I)
8500 LOCATE 15,32:PRINT SPACE$(30)
8600 LOCATE 17,10:PRINT SPACE$(60)
8700 LOCATE 18,1:PRINT SPACE$(69)
8800 NEXT I
8900 N=I-1
9000 FOR J=1 TO N STEP 2
9100 PRINT #1,TAB(10)"║      "CHR$(64+J)" - "M$(J);:PRINT #1,TAB(45)CHR$(65+J)" - "M$(J+1);:PRINT #1,TAB(70)"║"
9200 NEXT J
9300 P$="║                    ┌─────────────────┐                    ║"
9400 X$="╚════════════════════╡  ESC  for  DOS  ╞════════════════════╝":
9500 U$="                     └─────────────────┘"
9600 S$="SpainWare  (c) 1987":
9700 PRINT #1,TAB(10)"║"TAB(70)"║"
9800 PRINT #1,TAB(10);P$
9900 PRINT #1,TAB(10);X$
10000 PRINT #1,TAB(10);U$
10100 PRINT #1,TAB(52);S$
10200 '
10300 '
10400 CLOSE:CLS
10450 '------------------------  FINISH MENU DRAWING, START BATCH FILE  --------       -
10500 LOCATE 12,10:COLOR 31:PRINT "  MENU  being  created!  ":COLOR 7
10600 MB$=MN$+".BAT"
10700 OPEN MB$ FOR OUTPUT AS #1
10800 PRINT #1,"ECHO OFF"
10900 PRINT #1,EC$
11100 PRINT #1,":M"
11200 PRINT #1,"CLS"
11300 PRINT #1,"PROMPT"
11400 PRINT #1,"CD "CD$
11500 PRINT #1,PA$
11600 PRINT #1,"TYPE ";MN$
11700 PRINT #1,"MZ"
11800 PRINT #1,"ECHO                                Please  Wait ..."
11900 PRINT #1,"IF ERRORLEVEL=123 GOTO ERMG
11910 T=0
12000 FOR I=26 TO 1 STEP -1
12100 IF M$(I)="" THEN 12300
12110 T=T+1:IF T=1 THEN PRINT #1,"IF ERRORLEVEL="STR$(I+97)" GOTO ERMG"
12200 PRINT #1,"IF ERRORLEVEL="STR$(I+96)" GOTO "CHR$(I+64)
12300 NEXT I
12400 PRINT #1,"IF ERRORLEVEL=27 GOTO EX
12500 PRINT #1,":ermg"
12600 PRINT #1,"cls"
12700 PRINT #1,"echo          *======================================*"
12800 PRINT #1,"echo          *           INVALID  RESPONSE          *"
12900 PRINT #1,"echo          *======================================*"
13000 PRINT #1,"pause"
13100 PRINT #1,"goto m"
13200 FOR I=1 TO N
13300 PRINT #1,":"CHR$(64+I)
13400 PRINT #1,"CLS":IF C$(I)="" THEN 13700
13500 PRINT #1,C$(I):IF C2$(I)="" THEN 13700
13600 PRINT #1,C2$(I)
13700 PRINT #1,"GOTO M"
13800 NEXT I
13900 PRINT #1,":EX"
14000 PRINT #1,"cls"
14100 PRINT #1," prompt ----- Type  ";MN$;"  for  MENU -----$_$_";PR$
14200 CLOSE
14300 LOCATE 12,10:PRINT "Your menu has been CREATED!"
14400 LOCATE 15,10:PRINT "Do you wish to create another menu (Y/N) ":
14410 IN$=INKEY$:IF IN$="" THEN 14410 ELSE IF IN$="Y" OR IN$="y" THEN CLEAR:GOTO 1100
14480 END
14500 'MEZ.BAS    (C)1987  Edwin K. Spain
```
{% endraw %}

## MEZ.DOC

{% raw %}
```






          
          
          
          
                             M E N U - E Z E   (tm)
          
          
          
                                  Version  2.0
          
          
          
          
          
          
                             Program  Documentation
          
          
          
          
          
                                January 20, 1987
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
                                   SpainWare
                              c/o Edwin K. Spain
                               603 Lucien Drive
                          Goodlettsville,  Tn  37072
          
                        Compuserve User ID: 73027,1161
          
          
          
          
          
          
                Copyright (C) 1987  SpainWare, Edwin K. Spain.
                             All Rights Reserved.
          












         MENU-EZE 2.0                                        Copyright
          
          
                                  COPYRIGHT
                                  ---------
          
         Copyright (c) 1987 by SpainWare and Edwin K. Spain.  All
         rights reserved.  Non-registered users are granted a limited
         license to use this product on a trial basis, and to copy the
         program for trial use by others subject to the following
         limitations:
          
              1.  The program package is distributed in unmodified
                  form with complete documentation.
          
              2.  No fee, charge or other consideration is requested
                  nor accepted.
          
              3.  The program package is not distributed in
                  conjunction with any other product.
          
         If you plan to use MENU-EZE on a regular basis, please show
         your support for the author by registering your package.
         Business, Commercial or Governmental use by non-registered
         users is prohibited!
          
         If interested in multiple copies for work locations, Site and
         Corporate licenses are available.  See Appendix B for an
         information request form.
          
          
                                  Trademarks
          
         MENU-EZE is a trademark of SpainWare.  Other software and
         hardware mentioned in this documentation are trademarks of
         their respective companies.
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
         Copyright (c) 1987   SpainWare                            ii












                            M E N U - E Z E    2.0
          
          
          
          
          
                               Table of contents
          
          
          
          
          
         Preface .................................................  1
          
         Registration ............................................  2
          
         User-supported Software .................................  3
          
         Product Support .........................................  4
          
          
         Introduction ............................................  5
          
         File Descriptions .......................................  6
          
         Running the Package .....................................  7
          
          
         Appendix A  (Order Form) ................................  9
          
         Appendix B  (Information request form) .................. 10
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
         Copyright (c) 1987   SpainWare                            iii












         MENU-EZE  2.0                                         Preface
          
          
                            PREFACE TO VERSION  2.0
                            -----------------------
          
         Version 2.0 is actually the first public release of this
         package.  We had been using the original package for about
         six months before deciding to share it.  In this revision
         we have incorporated user-choice of colors for the Dos
         Prompt, the Menu Text, and the Background.
          
         We hope this version will be as useful to you as it has been
         to us.  Future updates will allow more personalized graphics
         capabilities.  We believe this package to be of a quality
         consistent with such user-supported software packages as
         Procomm (communications) and Thedraw (ansi drawing program).
         Our package consists of much less complexity than those
         mentioned above, but we feel it is concise and can be easily
         modified using 'BASIC' programming techniques to fit users'
         needs.
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
         Copyright (c) 1987   SpainWare                              1












         MENU-EZE  2.0                                   Registration
          
          
                                 REGISTRATION
                                 ------------
          
         User feedback is important in determining the success of a
         software package.  Please share your impression of MENU-EZE
         by leaving a message on Compuserve's EasyPlex (E. K. Spain's
         User ID: 73027,1161).  Please include your name, address,
         occupation and any comments you wish to share.  We would
         also be interested to know from whom you received the package
         and for what purposes you intend to use it.  If you do not
         have a modem, you can send your comments by regular mail to
         the address shown below.  We will try to incorporate changes
         and improvements offered by the registered users into the
         next version of this program.
          
         MENU-EZE is distributed as User-Supported Software.  Please
         share it with your friends as long as your sharing conforms
         to the limitations mentioned on page ii.
          
         If you plan to use MENU-EZE on a regular basis, please show
         your support by registering.  You may register by sending a
         check or money order for $10.00 (payable to E. K. Spain) to:
          
                             SpainWare
                             c/o Edwin K. Spain
                             603 Lucien Drive
                             Goodlettsville,  Tn  37072
          
         As a registered user you will receive notification of all
         new releases and a discount on all future versions of this
         package.  Also, any other user-supported software created by
         SpainWare will be made available to you for evaluation at a
         minimal charge.
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
         Copyright (c) 1987   SpainWare                              2












         MENU-EZE  2.0                         User-supported Software
          
          
                            USER-SUPPORTED SOFTWARE
                            -----------------------
          
          
         User-supported software allows computer users to receive
         quality software packages for a fraction of the cost of
         similar commercial packages while supporting the software
         authors.
          
         The concept of user-supported software stems from the idea
         that users should be allowed to review and evaluate software
         packages on their own computer systems in their own homes or
         offices without having made a purchase.  When the user is
         satisfied that the package serves his or her own personal
         applications or needs, then registration of the software
         package would be in order.
          
         Under the user-supported concept, anyone may request a copy
         of a user-supported program by sending a blank, formatted
         diskette to the program author together with an addressed,
         postage-paid return mailer.  A copy of the program with full
         documentation will be sent by return mail on the user's disk.
         The program documentation carries a notice suggesting that
         users register the program.  However; (The real plus for
         user-supported software) registration is strictly voluntary!
         If you do not need nor use the program -- why register?
          
         Copying user-supported software is encouraged, not restricted
         as is most commercial software.  Regardless of whether you
         register your copy, you are encouraged to copy and distribute
         the programs for the private use of others.
          
         NOTICE:  Business, Commercial, and Governmental organizations
                  must be registered!  If not registered, these
                  organizations must cease using this software after
                  a reasonable evaluation period.
          
          
          
          
          
          
          
          
          
          
          
          
          
          
         Copyright (c) 1987   SpainWare                              3












         MENU-EZE  2.0                                 Product Support
          
          
                                PRODUCT SUPPORT
                                ---------------
          
          
         If you have questions, ideas or comments concerning this
         package, please contact E. K. Spain through Compuserve's
         EasyPlex ( 73027,1161 ) or by writing to the following
         address:
          
                             SpainWare
                             c/o Edwin K. Spain
                             603 Lucien Drive
                             Goodlettsville,  Tn  37072
          
         Although we have made every effort to try to insure this
         package is error-free, some problems may arise.  If you
         are using the software and encounter any problem, please
         note what actions led to the problem.  When you contact
         us be sure to describe what took place, your machine
         configuration and any other information you think might
         help us get this 'BUG' out of the program.
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
         Copyright (c) 1987   SpainWare                              4












         MENU-EZE  2.0                                    Introduction
          
          
                                 INTRODUCTION
                                 ------------
          
         Description:
          
         MENU-EZE is a general purpose menu generation package.  It
         was written in 'BASICA' using GWBASIC'S Interpreter, Ver 2.
         It evolved from the need to provide a menu for novice users
         - programs needed to be executed by pressing a single key.
          
         This package not only creates the menu displays, but also
         generates the batch files (based on user input) required to
         process the specific files on your disks.
          
          
         Files:
          
         MENU-EZE consists of the following files:
          
              1.  MEZ        'Default filename for the menu display.
          
              2.  MEZ.BAS    'Heart of MENU-EZE.  This file produces
                              menu displays and batch files to execute
                              files from the displays.
          
              3.  MEZ.BAT    'Batch file produced by MEZ.BAS.
          
              4.  MEZ.DOC    'This file documentation.
          
              5.  MZDEM.BAT  'Batch file demonstrating the operation
                              of this software package.
          
              6.  MZ.COM     'Allows choice of program for execution.
          
          
         Compatibility and
         Machine Requirements:
          
         MENU-EZE was created using a 640K Zenith ZS-151 computer.
         Do not be intimidated by such RAM! You will not need nearly
         that much.  You need to be using a computer capable of
         running MSDOS or PCDOS.  Any version of 'BASIC' or 'BASICA'
         that runs on your IBM, or compatible, or clone is sufficient
         to run this software.  The memory requirement for this soft-
         ware is not a factor of concern since the whole package
         constitutes less than 64K of memory.  The package also
         operates well on the IBM PCjr.  NOTE: You must have the line
         DEVICE=ANSI.SYS in your CONFIG.SYS file before booting DOS!
          
          
         Copyright (c) 1987   SpainWare                              5












         MENU-EZE  2.0                               File Descriptions
          
          
                                FILE DESCRIPTIONS
                                -----------------
          
         MZ.COM:
          
              MZ.COM is the smallest file on this diskette, but packs
              quite a punch.  It is 16 bytes of information which set
              errorlevel status based on user input.
          
         MEZ:
          
              MEZ is the default name for the menu display.  When
              running the MEZ.BAS program, the user is given the
              opportunity to choose a different name for the display
              file.  The name chosen for the 'BASE' file is used
              within the batchfile - IE: If the user chose to name
              his display file as 'MYFILE', then the batchfile will
              automatically be created as  MYFILE.BAT!  See 'RUNNING
              THE PACKAGE' for more detail.
          
         MEZ.BAS:
          
              This is the basic program which designs a customized
              menu and batchfile for processing user-specific files.
              It generates an attractive menu display that can be
              filled with up to 26 items, enabling execution from a
              single keystroke.  It also provides an 'ESC to DOS'
              option on the completed menu - you may decide not to
              execute any program on the menu!
          
         MEZ.BAT:
          
              This is the executive file produced by the MEZ.BAS
              program.  MEZ.BAT is the default filename, but the
              file could be created with any valid filename.
              (filename chosen from within MEZ.BAS and is equal to
              the display filename up to the (.))
          
         MEZDEM.BAT:
          
              This file is an executable demonstration describing
              the use of MENU-EZE 2.0.  The program as with any other
              '.BAT' file can be executed by typing the filename
              without the extension and pressing RETURN. The demo
              itself is self-explanatory!
          
          
          
          
          
         Copyright (c) 1987   SpainWare                              6












         MENU-EZE  2.0                             Running the Package
          
          
                             RUNNING THE PACKAGE
                             -------------------
          
         General:
          
         MENU-EZE runs from your hard disk, virtual, or floppy drives.
         It is recommended that you use a virtual (RAM DISK) drive if
         your system is not equipped with a hard disk.  Using a floppy
         for this package works fine, but when approaching the limit
         of 26 items, the processing time required to execute the
         batchfile (MEZ.BAT) becomes quite noticeable.  You must have
         the line DEVICE=ANSI.SYS in your CONFIG.SYS file.  Regardless
         of the drive type, you must have these files available on the
         default device after running MEZ.BAS:
          
              MEZ.BAT         and         MZ.COM
          
          
         Starting the Package:
          
              1.  Copy the following files to your default drive:
          
                   MEZ.BAS    and     MZ.COM
          
              2.  At the DOS Prompt enter:
          
                   x:BASICA MEZ         ; x = drive name on which
                                              BASICA is located.
          
              3.  The MEZ.BAS program should be self-explanatory,
                  but briefly:
          
                  a.  You are first given an option to change the
                      BASE name of the menu files. (The default
                      name is MEZ -- use your initials if you want
                      or any valid filename.  This is only the BASE
                      of the filename you are changing; therefore,
                      the change does not alter the file extension.)
          
                  b.  Next you are prompted to indicate pathing for
                      your menu (PATH\ is the default).  Please refer
                      to your DOS manual to determine an appropriate
                      PATH for your needs.
          
                  c.  Then a menu color choice appears.  Using the
                      available selections, you can customize the
                      colors of the DOS PROMPT, the MENU TEXT DISPLAY,
                      and the BACKGROUND.  The default colors respect-
                      ively are cyan, yellow, and black.
          
         (c) Copyright 1987   SpainWare                              7












         MENU-EZE  2.0                             Running the Package
          
          
                              RUNNING THE PACKAGE
                              -------------------
          
         Starting the Package (cont)
          
              3.  d.  After color selection, the program asks from
                      which drive you wish to read files - some of
                      which will be used for menu generation.
                      Pressing RETURN without entering a drive will
                      create a menu from your input without listing
                      the files (you select the files to be entered
                      into the menu).  If you should choose a drive,
                      select the number to the left of each file you
                      wish to incorporate into your menu.  Press
                      RETURN after each selection.  Remember, only 26
                      files are available per menu.  If you require
                      more than 26, you can create more than one menu.
          
                  e.  After all file choices have been made, the
                      program displays the chosen files and requests
                      the first, second, and third commands to execute
                      the files. (IE:  to type a file named MF located
                      in the subdirectory A:\MFL would require the
                      following:
          
                      First command:   CD\MFL    ; get to subdirectory
                      Second command:  TYPE MF   ; execute program
                      Third command:   PAUSE     ; pause display
          
                      If your programs do not require the second and
                      third commands, then simply pressing RETURN
                      without text input will create the executive
                      batchfile with the first command only.
                      When all files chosen have been processed,you
                      may add other files (not to exceed the 26 item
                      limit).  Press the RETURN key when your last
                      file is processed.  The program then creates and
                      saves your batchfile (MEZ.BAT) and your menu
                      display file (MEZ).
          
                   f. Type SYSTEM and press RETURN.  This returns
                      control to DOS.
          
                   g. At the DOS Prompt type MEZ and press RETURN.
                      The screen colors will be those you chose while
                      running MEZ.BAS.
          
                   h. Make your selections from the menu you have just
                     created!
          
         (c) Copyright 1987   SpainWare                              8












         Appendix  A             MENU-EZE  2.0              Order Form
          
          
          
         Make checks
         payable to:            E.K. Spain / SpainWare
                                603 Lucien Drive
                                Goodlettsville, Tn  37072
          
          
          
         Sold to: ___________________     Ship to: ___________________
          
                  ___________________              ___________________
          
                  ___________________              ___________________
          
         _____________________________________________________________
         -------------------------------------------------------------
           Date:               Purchase Ord. #:
         -------------------------------------------------------------
           Qty                  Description            Unit     Total
         -------------------------------------------------------------
          
          _____       MENU-EZE  REGISTRATION          $ 10.00   ___.__
          
          _____       MENU-EZE  Evaluation diskette      5.00   ___.__
          
          _____       MENU-EZE  Updates diskette         5.00   ___.__
                            (I have version _____,
                             please send version ____)
          
          _____       MENU-EZE Package  **              12.50   ___.__
         _____________________________________________________________
          
                                            Subtotal:      $   ____.__
          
               (Tn residents please add 5.5% tax)     Tax: $   ____.__
          
                                            Total:         $   ____.__
         -------------------------------------------------------------
          
         **  The package includes registration, present version of
             MENU-EZE, and next revision of MENU-EZE.
          
          
         Payment made by:   ( ) Check       ( ) Money order
          
         Orders outside the U.S. : Please send a check drawn on a
                                   U.S. Bank in U.S. dollars or send
                                   an International Money order in
                                   U.S. dollars.
          
         (c) Copyright 1987   SpainWare                              9












         Appendix  B          MENU-EZE  2.0                Information
                                                               Request
          
          
         Mail to:               E.K. Spain / SpainWare
                                603 Lucien Drive
                                Goodlettsville, Tn  37072
          
          
          
         Please send information regarding corporate and site
         licenses.
          
         Name: ______________________________________________________
          
         Title: _____________________________________________________
          
         Company: ___________________________________________________
          
         Address: ___________________________________________________
          
                  ___________________________________________________
          
                  ___________________________________________________
          
         Phone:   ___________________________________________________
          
         Estimated copies needed: ___________________________________
          
         Intended uses: _____________________________________________
          
                        _____________________________________________
          
                        _____________________________________________
          
         Questions: _________________________________________________
          
                    _________________________________________________
          
                    _________________________________________________
          
                    _________________________________________________
          
          
          
          
          
          
          
          
          
          
          
         (c) Copyright 1987   SpainWare                             10






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0936

     Volume in drive A has no label
     Directory of A:\

    DCOPY    DOC     16176   1-15-87  11:05a
    DCOPY    EXE     21262   8-01-86  10:58a
    FILES936 TXT      2985   9-28-88  11:40a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1541   9-27-88   9:32a
    MEZ                916   1-18-87  10:29p
    MEZ      BAS      6008   1-18-87   6:37a
    MEZ      BAT        85   1-18-87  10:25p
    MEZ      DOC     26515   1-18-87   5:34p
    MEZDEM   BAT      2623   1-18-87   6:44a
    MYMENU   EXE     39008   7-19-87   3:36p
    MZ       COM        16  11-17-86   2:25p
           12 file(s)     117173 bytes
                           39424 bytes free
