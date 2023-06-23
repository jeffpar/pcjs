---
layout: page
title: "PC-SIG Diskette Library (Disk #2081)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2081/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2081"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SEBFU AND QUICK DIRECTORY"

    Create professional, powerful batch files with SEBFU.  SEBFU permits you
    to improve your batch file menus by giving you the option to control
    the position of text and colors (or monochrome intensity), create
    windows and boxes and to scroll text across the screen.  SEBFU increases
    the potential of your batch files by allowing you to make decisions
    based upon your system configuration.  Error levels are returned which
    indicate configurations such as presence of ANSI.SYS, disk drives,
    memory usage, mouse driver, printer status, cursor location, keyboard
    type and much more!  SEBFU is a must for software developers or those
    who want to greatly improve the efficiency and power of their batch
    files.
    
    SEBFU also includes the Business Control System (BCS), a simple
    telephone log database/telecommunications program.  BCS dials your
    number, records who you called, the time and date, as well as any
    messages.  BCS is easy to learn and is a handy organizational tool.
    
    SEBFU includes 51 batch utilities, plus BCS.  You can receive an
    additional 49 batch utilities with registration.
    
    QUICK DIRECTORY makes the chore of cleaning up your disk storage space
    easy and fun. File commands such as copy, erase, make directory,
    locate, compare, rename and sort on date, size, name or extension are
    available at the touch of a key. Handle multiple files with one
    command. The commands are loaded with conformations and messages that
    makes them almost foolproof.
    
    The copy command can accept two different targets or copy to the same
    target repeatedly. By using the mark and copy commands, selective
    backup is available. If you want to backup only changed files, you can
    do so with one copy command. Copy will even skip a file too big to fit
    on the disk and copy another, smaller file already marked for backup.
    
    The QUICK DIRECTORY display can show time and date, summarize disk
    information, provide help for the function keys, and display different
    directories on the left and right sides of the screen. The typical
    directory entry is altered to indicate file attributes such as
    read-only, archive, system, or hidden files. Files that have been
    copied or erased are identified, allowing for easier tracking during
    the session.
    
    The instruction manual is complete and includes examples for easier
    learning. QUICK DIRECTORY assumes the user possesses a familiarity
    with DOS file maintenance commands.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BCS.DOC

{% raw %}
```


                        B C S  (Business Contact System)


                          (C) 1989 Scanlon Enterprises



        This  is  our Beta version of BCS.  If you  register  the  SEBFU 
        program,  you  will  automatically be placed  on  our  list  for 
        announcements  concerning  this program.  If you don't  want  to 
        register  SEBFU,  but  are interested in  BCS,  just  write  us, 
        including your name and address, and any comments about BCS that 
        may strike your fancy.

        If  you don't register SEBFU and don't include any  comments  or 
        suggestions about BCS, we will not send you a product notice !

        BCS  is basically a database dialing system, whereby  you  enter 
        data  relating  to businesses, then use the data  base  to  make 
        calls  and  take  messages.   This version  is  limited  to  999 
        messages  (you must purge old messages), but the  business  data 
        base may contain an unlimited number of entries.

        Why  would you want to write us about this product ?   Well,  we 
        will  be  improving  the data base by  allowing  more  than  999 
        messages, allowing up to 4 COM ports instead of 2,  the  ability 
        to  create mail labels and index cards, better  message  system, 
        multiple phone dialing indexes, and much more.

        How do you use this system ?  Just enter BCS at the DOS  prompt, 
        then  just  select  your menu choice,  for  adding  an  account, 
        deleting an account, viewing or calling clients, etc...

        To be placed on our mailing list, write us at :

        Scanlon Enterprises
        38354 17th St. E #C
        Palmdale, CA 93550

```
{% endraw %}

## CHKSUM.DOC

{% raw %}
```

                    S C A N L O N    E N T E R P R I S E S

                    B A T C H   F I L E   U T I L I T I E S

                             Version 1.9.5 (SEBFU)




                    CHECKSUM AND FILE SIZE CROSS REFERENCE



       FILENAME  CHKSUM     SIZE        FILENAME  CHKSUM   SIZE 
       ------------------------------------------------------------
       BEEP         764     258        CDCK         371    121
       CHGLOCK      715     230        CHKSUM      1731    568
       CK101        360     118        CKCLK        359    117
       CLR          983     328        COFF         362    121
       COLOR        961     335        CR           395    129
       CT           461     158        CUON         391    127
       DAYOFMO      334     110        DAYOFWK     1100    347
       DETANSI      448     149        DRVCK        508    164
       DSKRDY       452     148        ENVSIZE     2376    748
       GALF         466     149        GCURS       1413    447
       GDRIVE       327     108        GETCC       1276    389
       GETCR       1280     389        GETMCB      1775    575
       GETNUM       595     190        GETPG        346    112
       GETVER      1472     439        GMODE        327    108
       LIMCK        434     140        LOCATE       688    227
       SWAPPRN      355     120        LST         1802    558
       MOUSECK      357     118        PFF          343    113
       PRDY         441     153        PRINT        483    162
       SCROLL       919     305        SNGLBOX     1441    447
       WAIT         803     253        WAITM        467    162
       WHATDAY      337     110        WHATHR       334    110
       WHATMIN      333     110        WHATMO       335    110
       WHATYR       349     114        WRITE       1684    527
       WRITEF      1280     477        XMSCK        359    119
       YN           707     225        YRSINCE      700    222
       YRSTILL      699     221

```
{% endraw %}

## FILE2081.TXT

{% raw %}
```
Disk No: 2081                                                           
Disk Title: SEBFU and Quick Directory                                   
PC-SIG Version: S1                                                      
                                                                        
Program Title: SEBFU                                                    
Author Version: 1.9.5                                                   
Author Registration: $19.95                                             
Special Requirements: None.                                             
                                                                        
Create professional, powerful batch files with SEBFU.  SEBFU permits you
to improve your batch file menus by giving you the option to control    
position of text and colors (or monochrome intensity), create windows   
and boxes and to scroll text across the screen.  SEBFU increases the    
potential of your batch files by allowing you to make decisions based   
upon your system configuration.  Errorlevels are returned which indicate
configurations such as presence of ANSI.SYS, disk drives, memory usage, 
mouse driver, printer status, cursor location, keyboard type and much   
more!  SEBFU is a must for software developers or those who want to     
greatly improve the efficiency and power of their batch files.          
                                                                        
SEBFU also includes the Business Control System (BCS), a simple         
telephone log database/telecommunications program.  BCS dials your      
number, records who you called, the time and date, as well as any       
messages.  BCS is easy to learn and is a handy organizational tool.     
                                                                        
SEBFU includes 51 batch utilities, plus BCS.  You can receive an        
additional 49 batch utilities with registration.                        
Program Title: Quick Directory                                          
Author Version: 11/88                                                   
Author Registration: $30.00                                             
Special Requirements: Hard Drive.                                       
                                                                        
QUICK DIRECTORY makes the chore of cleaning up your disk storage space  
easy and fun.  File commands such as Copy, Erase, Make Directory,       
Locate, Compare, Rename and Sort on date, size, name or extension are   
available at the touch of a key.  These commands can handle multiple    
files with one command and are loaded with conformations and messages   
that makes them almost foolproof.                                       
                                                                        
The Copy command can accept two different targets or copy to the same   
target repeatedly.  By using the Mark and Copy commands, selective      
backup is available.  If you want to backup only changed files, you can 
do so with one Copy command.  Copy will even skip a file too big to fit 
on the disk and copy another, smaller file already marked for Backup.   
                                                                        
The QUICK DIRECTORY display can show time/date, summarize disk informa- 
tion, provide help for the function keys and display different          
directories on the left and right sides of the screen.  The typical     
directory entry is altered to indicate file attributes such as          
Read-Only, Archive, System or Hidden files.  Files that have been copied
or erased are identified, allowing for easier tracking during the       
session.                                                                
                                                                        
The instruction manual is complete and includes examples for easier     
learning.  QUICK DIRECTORY assumes the user possess a familiarity with  
DOS file maintenance commands.                                          
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║         <<<<  Disk #2081  SEBFU AND QUICK DIRECTORY  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start SEBFU, type:  GO (press enter)                                 ║
║ To start QUICK DIRECTORY, type:  QD (press enter)                       ║
║                                                                         ║
║ To print SEBFU documentation, type:  COPY TUTR.DOC PRN                  ║
║ To print QUICK DIRECTORY documentation, type:  COPY QUIK.DOC PRN        ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## QUIK.DOC

{% raw %}
```



                   S C A N L O N    E N T E R P R I S E S

                 SEBFU  Version 1.9.5  Quick Reference Guide







       This is NOT a user manual, but only a quick reference guide.  The
       user  manual and a better demo are included with  the  registered
       version  of this software. To register, print the  REG.DOC  file.
       This can be done at your Dos prompt by entering :

                   COPY REG.DOC PRN



       These utilities are NOT Public Domain, nor are they free.   These
       utilities  are being distributed on the Shareware  concept,  that
       is,  that  if you continue using them, you should pay  for  them.
       What  incentive  do  you have to register,  other  than  just  to
       appease  your  conscience ?  Well, you get the full  set  of  100
       utilities,  a  complete manual (on disk), a very  good  demo  and
       tutorial on usage (also on disk), and a terrific discount on  the
       next  version,  as  well  as announcements  of  new  or  improved
       products and 1 year free phone support. This shareware version of
       the  utilities is only has this document, and has only 51 of  the
       total 100 utilities. Only the utilities prefixed with an asterisk
       appear  on  this disk , all others are available  only  to  those
       purchasing the full set of 100 for $19.95 .  The complete set  is
       on 1 5.25 inch floppy disks.


       NOTE :  All utilities in this shareware version must have the Dos
       redirector supplied at the end to send my shareware  announcement
       to  the NUL device.  The non-shareware version does  NOT  require
       this.   Example : to use LOCATE, enter LOCATE r c > NUL  ,  where
       'r' is the row and 'c' the column.



        Distributors  may  use  any or all of these  utilities  to  help
       create help batch files, as long as the following information  is
       contained in the batch file running the utilities.

                 SEBFU  by Scanlon Enterprises
                           38354 17th St. E #D
                           Palmdale, CA 93550
                           (805) 272-4827








                                                         Page 1



                   S C A N L O N    E N T E R P R I S E S

                 SEBFU  Version 1.9.5  Quick Reference Guide



       ADD vname amt digits

       Adds a selected or default value to a Dos variable.
       Where  'vname' is any legal Dos variable, 'amt' is the  value  to
       add to the variable and 'digits' is the maximum number of  digits
       allowed.


       *BEEP n[P[R]]

       Beeps the speaker 1 or more times.
       Where  'n' is the number of times to beep, 'P'will pause  between
       beeps for 1 second and 'R' will beep every second untill any  key
       is pressed.

       BIGLTR message

       Displays up to 10 characters from 'message' at the current cursor
       location in an 8row by 8column format.


       *CDCK

       Returns an errorlevel of 1 if the CD-Rom driver is present,  else
       will return an errorlevel of 0 .


       CDD

       Moves toward the root directory by 2 levels or a selected value.


       CHGC sr sc er ec bc fc

       Changes the screen colors.
       Where 'sr' & 'sc' is the starting row and column, 'er' & 'ec' the
       ending  row  and  column and 'bc' and  'fc'  the  background  and
       foreground colors.


       *CHGLOCK

       Toggles the selected lock key (numlock, capslock and scroll-lock)
       to the opposite value.









                                                         Page 2



                   S C A N L O N    E N T E R P R I S E S

                 SEBFU  Version 1.9.5  Quick Reference Guide



       *CHKSUM fname n [/R]

       Generates a checksum, or compares a checksum.
       Where  'fname'  is  the file to obtain a  checksum  (or  checksum
       comparison  of), 'n' is the checksum value to match  against  and
       the '/R' allows redirection.


       *CK101

       Returns an errorlevel of 1 if a 101 type keyboard is being used.


       *CKCLK

       Returns an errorlevel of 0 if the Dos clock appears to be set.


       *CLR sr sc er ec bc fc p

       Clears a selected area on the display.
       Where  'sr' is the start row, 'sc' the starting column, 'er'  the
       ending  row, 'ec' the ending column, 'bc' the  background  color,
       'fc' the foreground color and 'p' the video page.


       CLRKEY

       Clears the typeahead buffer.


       *COFF

       Hides the cursor (may not work on all systems).


       *COLOR bc fc

       Sets the Ansi background and foreground colors.
       Where 'bc' is the background color and 'fc' the foreground color.


       *CR

       Waits untill the enter key is pressed.


       *CT [1/0]

       Toggles the cursor on or off.
       Where the optional value 1 turns the cursor on and 0 turns it off


                                                         Page 3



                   S C A N L O N    E N T E R P R I S E S

                 SEBFU  Version 1.9.5  Quick Reference Guide



       *CUON

       Unhides the cursor


       CURKEY

       Returns an errorlevel of 1 thru 4 for the cursor keys.

       *DAYOFMO

       Returns an errorlevel for the day of month.


       *DAYOFWK

       Returns an errorlevel for the day of week

       DBLBOX sr sc er ec bc fc Pn

       Draws a box using double line graphics.
       Where  'sr'=starting  row,  'sc' the starting  column,  'er'  the
       ending  row, 'ec' the ending column, 'bc' the  background  color,
       'fc' the foreground color and 'Pn' the video page.

       *DETANSI

       Returns an errorlevel of 0 for no, 1 for yes and 2 for graphics.


       DFREE

       Returns an errorlevel equal to the number of Kbytes available  on
       a selected drive.


       DLINE r c l bc fc p [S]

       Draws a line of a specified length using double line graphics
       Where  'r'=row,  'c'=column,  'bc'=background  color,  'fc'   the
       foreground color and 'p' the video page.












                                                         Page 4



                   S C A N L O N    E N T E R P R I S E S

                 SEBFU  Version 1.9.5  Quick Reference Guide



       DLST ftype /Ln /Rn /Bn /Tn /E list.. /I list.. /X /D /Z

       Displays a directory list.
       Where 'ftype' is the file type specifier, '/Ln' the left  margin,
       '/Rn' the right margin, '/Bn' the bottom most line, '/Tn' the top
       line, '/E list...' a list of file types to exclude, '/I list..' a
       list of file types to include, '/X' to exclude file extensions on
       display, '/D' to show directories and '/Z' to stop after  filling
       the selected screen area.


       *DRVCK

       Tests  for  the  existence of a  specified  drive,  returning  an
       errorlevel of 0 if the drive exists.


       *DSKRDY d:

       Returns  an errorlevel of 0 if the selected drive is  ready,  and
       has a formatted disk, a 1 if not ready, a 2 if the drive is ready
       but the disk is not formatted and a 3 if the drive is not there.


       *ENVSIZE [TL] [L] [T] [TS] [TK] [B] [V[R]]

       Returns  an  errorlevel  of  0 to 255 for  the  number  of  bytes
       remaining in the Dos environment space. See the manual for switch
       settings.


       FCHR

       Fills a selected area of the screen with a selected character.


       FILES ftype vname /e list /i list

       Sets the variable 'vname' to the number of files of 'ftype'.


       FSIZE fname

       Returns an errorlevel in Kbytes of the selected file.


       FUNKEY

       Returns an errorlevel from 1 to 10 for the 10 function keys.




                                                         Page 5



                   S C A N L O N    E N T E R P R I S E S

                 SEBFU  Version 1.9.5  Quick Reference Guide



       *GALF

       Returns  an  errorlevel  of  1  to  26,  representative  of   the
       keystrokes A thru Z.


       *GCURS [R[v]] [C[v]] [V]

       Returns an error level for the cursor location.


       GDIR

       Sets the Dos variable DIR to the current path.


       *GDRIVE

       Sets an errorlevel equal to the current drive.


       *GETCC

       Sets an errorlevel equal to the cursor column


       GETCOLR

       Returns  an  errorlevel for either the background  or  foreground
       color at the current cursor location.


       *GETCR

       Sets an errorlevel equal to the cursor row


       *GETMCB

       Displays a list of memory usage.


       *GETNUM

       Sets the errorlevel for numeric key strokes only, to 0 - 9.


       *GETPG

       Sets an errorlevel equal to the active video page.



                                                         Page 6



                   S C A N L O N    E N T E R P R I S E S

                 SEBFU  Version 1.9.5  Quick Reference Guide



       *GETVER

       Sets an errorlevel equal to the major Dos version.


       GMEM

       Sets  an  errorlevel  equal  to the number  of  K  bytes  of  ram
       available.


       *GMODE

       Sets an errorlevel equal to the video mode.


       INKEY

       Sets an errorlevel equal to the ascii value of the key pressed.


       INSTR

       Finds  the  selected  character  position  in  a  Dos   variable,
       returning the position as an errorlevel or as a Dos variable.


       INVERT

       Reverses the background and foreground colors.


       KEYSTAT

       Returns  an  errorlevel for each of the lock keys  that  are  on.
       Where 1=scroll lock, 2=numlock and 4=capslock (0=none are on).


       LEN vname

       Sets  the  errorlevel  equal to the length of  the  Dos  variable
       'vname'.


       *LIMCK

       Returns  an  errorlevel of 1 if a LIM memory  manager  driver  is
       installed, else returns a 0 .





                                                         Page 7



                   S C A N L O N    E N T E R P R I S E S

                 SEBFU  Version 1.9.5  Quick Reference Guide



       LINE r c l bc fc p [S]

       Draws a line of a specified length using single line graphics
       Where  'r'=row,  'c'=column,  'bc'=background  color,  'fc'   the
       foreground color and 'p' the video page.


       *LOCATE r c p

       Positions the cursor at row 'r' and column 'c' on page 'p'.


       LOGON

       Saves  logon  and off information in a file consisting  of  name,
       login date and time and logout date and time.


       *LST fname

       Displays the file 'fname' 1 page at a time.


       MIDSTR

       Sets  a  selected Dos variable equal to the selected  portion  of
       another Dos variable.


       *MOUSECK

       Returns an errorlevel of 1 if a mouse driver has been  installed,
       else returns a 0 .


       MOVCUR [U D L R v]

       Moves the cursor in the specified direction the specified amount.

       Where  'U' is up, 'D' is down, 'L' is left, 'R' is right and  'v'
       the number of positions to move.


       PAGE p

       Sets  the  active video page to page 'p'. Altenately  returns  an
       errorlevel equal to the active page.






                                                         Page 8



                   S C A N L O N    E N T E R P R I S E S

                 SEBFU  Version 1.9.5  Quick Reference Guide



       PASSWORD

       Recovers  keystrokes untill enter is pressed, (no characters  are
       displayed).  If the correct password is entered, the program ends
       else  you are given a second try, if that is incorrect, then  the
       system must be rebooted to proceed.


       PATHCK

       Checks  for  the existence of a specified directory name  in  the
       current  directory. If a match is found , an errorlevel of  1  is
       returned, else a 0 .


       *PFF

       Issues a form feed to the PRN device.


       *PRDY

       Sets the errorlevel to 0 if the PRN device is ready, a 1 if there
       is a time out, 2 if a general failure, 3 for no paper, 4 if  it's
       busy and 5 if not on line.


       *PRINT message

       Sends the 'message' to the PRN device.


       PRINTC n n ...

       Sends the decimal value (or multiple values) to the PRN device.


       PRINTF fname

       Sends the file 'fname' to the PRN device.


       PRNSET

       Issues a hardware reset to the PRN device.








                                                         Page 9



                   S C A N L O N    E N T E R P R I S E S

                 SEBFU  Version 1.9.5  Quick Reference Guide



       RESPONSE vname bc fc l N

       Puts  keystrokes  into the Dos variable 'vname' untill  enter  is
       detected.   Echos the keystrokes using the background color  'bc'
       and the foreground color 'fc'.  The maximum number of  keystrokes
       may be set with 'l', and echo mode may be turned off with the 'N'


       SAVEKEY

       Places selected keystrokes into the typeahead buffer.


       *SCROLL sr sc er ec bc fc D

       Scrolls the screen either up (default) or down (specify D).
       Where  'sr' is the starting row, 'sc' the starting  column,  'er'
       the ending row and 'ec' the ending column of the window to scroll
       while 'bc' is the background and 'fc' the foreground color of the
       last line in the window.


       SCROLMSG \bc fc l message

       Scrolls   the  'message'  across  line  25  using  the   selected
       background 'bc' and foreground 'fc' colors or at line 'l'.


       SETCUR s e

       Sets  the cursor to the desired starting 's' and ending 'e'  scan
       lines. (Changes the shape of the cursor)


       SETDATE dd-mm-yyyy

       Sets the Dos date to the desired value.


       SETERR n

       Sets the errorlevel to value 'n'


       SETIME hh:mm:ss

       Sets the Dos time to the desired value.






                                                         Page 10



                   S C A N L O N    E N T E R P R I S E S

                 SEBFU  Version 1.9.5  Quick Reference Guide



       SETMODE n

       Sets the video mode to value 'n'.


       SETPG p

       Sets the video page to 'p'.


       SHOWVAR vname /XNPpLcRrCbc fc

       Displays the dos variable 'vname' at the specified line and page,
       using the specified colors or will center the variable.


       SKEY

       Returns  an  errorlevel 0 if no key has been  pressed,  otherwise
       will return a 1.


       *SNGLBOX sr sc er ec bc fc Pn

       Draws a box using single line graphics.
       Where  'sr'=starting  row,  'sc' the starting  column,  'er'  the
       ending  row, 'ec' the ending column, 'bc' the  background  color,
       'fc' the foreground color and 'Pn' the video page.


       SOUND d t

       Sounds the speaker for duration 'd' and tone 't'.


       SROWS

       Returns an errorlevel equal to the number of rows on the display

       STRING r c bc fc p

       Displays  'r' number of 'c' characters using the background  'bc'
       and foreground 'fc' on page 'p'.


       SUB vname amt digits

       Subtracts a selected or default value to a Dos variable.
       Where  'vname' is any legal Dos variable, 'amt' is the  value  to
       add to the variable and 'digits' is the maximum number of  digits
       allowed.


                                                         Page 11



                   S C A N L O N    E N T E R P R I S E S

                 SEBFU  Version 1.9.5  Quick Reference Guide



       *SWAPPRN

       Swaps the printer port assigns LPT1 and LPT2.

       SWIDTH

       Returns  an  errorlevel  equal to the number of  columns  on  the
       display.


       *WAIT n

       Pauses batch file execution for 'n' seconds.

       WAITILL hh:mm:ss

       Pauses batch file execution till time 'hh:mm:ss'.


       *WAITM n

       Pauses batch file execution for 'n' minutes.


       *WHATDAY

       Returns an errorlevel of 1 thru 7 for the day of week.


       *WHATHR

       Returns an errorlevel for the hour of day.


       *WHATMIN

       Returns an errorlevel for the minute of the hour.


       *WHATMO

       Returns an errorlevel for the current month.


       *WHATYR

       Returns an errorlevel for the number of years since 1980.






                                                         Page 12



                   S C A N L O N    E N T E R P R I S E S

                 SEBFU  Version 1.9.5  Quick Reference Guide



       *WRITE message /LcRrXNCbc fc

       Displays a message, like echo.
       Where  'message'  is  the message to display, 'Rr'  the  line  to
       display  the message on, 'Lc' the left margin, 'X' to center  the
       message,  'N'  for no line feed at the right margin and  'C'  for
       background 'bc' and foreground 'fc' colors.


       *WRITEF fname /PpRrLl

       Displays the file 'fname', must not be larger than 2K bytes !
       Or use the optional switches P,R and L for setting the video page
       to page 'p' or row to 'r' or left margin to 'l'.


       *XMSCK

       Returns  an errorlevel of 1 if the extended memory  driver  (XMS)
       has been installed, else returns a zero.


       *YN message

       Displays an optional 'message' and pauses till either 'y' or  'n'
       key is pressed. Errorlevel of 0 is Y and 1 is N.


       *YRSINCE yy

       Sets the errorlevel to years since 'yy'


       *YRSTILL yy

       Sets the errorlevel to years till 'yy'

















                                                         Page 13

```
{% endraw %}

## REG.DOC

{% raw %}
```

                            S E B F U   Ver. 1.9.5


                            by Scanlon Enterprises




                            R E G I S T R A T I O N


       Send your check or money order to :

       Scanlon Enterprises, 38354 17th St E. #D
                 Palmdale, CA 93550                           Quanity:


       Registration of Shareware utilities (you have them) $3.00 ______
       (You  are  entitled  to phone support and  announcements  of  new 
       products and enhancements)

       Registration  plus  latest version - 2.1 (all 100  utilities  and 
       extensive documentation, includes phone support and announcements 
       of new products and upgrades.)

                                                          $19.95 ______

       Additional copies of the Share ware version         $5.00 ______
       (includes registration)

       Additional copies of version 2.1                   $12.95 ______


       For bulk purchases of 25 or more please call or write for quotes.

       Source code or custom versions available, call or write for quote

       Non-Profit  charitable and religious organizations  may  register 
       for  for only $1.00 or purchase version 2.1 (all  100  utilities) 
       for only $10.00 .

                                                           $1.00 ______


                                                          $10.00 ______

       Countries outside the U.S. please add $5 for postage or shipping.

       ----------------------------------------------------------------

       Ship this order to : ___________________________________________

                            ___________________________________________
                            
                            ___________________________________________

                            ___________________________________________

       Phone : ____________________________________


```
{% endraw %}

## TUTR.DOC

{% raw %}
```

                    S C A N L O N    E N T E R P R I S E S

                   B A T C H    F I L E    U T I L I T I E S

                             Version 1.9.5 (SEBFU)




                    B A T C H    F I L E    T U T O R I A L







       This  document and the SEBFU utilities may be freely  copied  and
       distributed so long as the following rules are followed.

       1) All files must be distributed together.

       2) No fee other than shipping and handling may be charged.

       3)  Use  of these utilities other than for personal  use  or  for
       trial is strictly prohibited.

       4)  Distributors  may use any or all of these utilities  to  help
       create help batch files, as long as the following information  is
       contained in the batch file running the utilities.

                 SEBFU  by Scanlon Enterprises
                           38354 17th St. E #D
                           Palmdale, CA 93550
                           (805) 272-4827



       N O T E S :

       When we use the word Dos, we are implying the use of MS or PC Dos

       All of our utilities have been tested to run under both MS and PC
       Dos,  version  2.1  thru 3.3 .  Should  you  experience  problems
       running  these  utilities under any Dos version  covered  by  the
       above  limits, please write us, stating the type of machine,  and
       the Dos version being run.

       These utilities have been tested on Monochrome and CGA systems.

       These  utilities have been tested on PC, XT and AT  machines  and
       clones which can run PC or MS Dos.


                         S E B F U    Version 1.9.5

                             Batch File Tutorial




       Batch  files are files which contain a sequence of Dos  commands.
       These  files  may be created using most text editors.   One  good
       example  of a batch file, is the AUTOEXEC batch file, which  runs
       each time your system is booted.  A batch file command may be any
       one of the built in commands, or any file name ending in COM, EXE
       and BAT .  A batch file is executed starting with the very  first
       command (line one) and ending at the last line in the batch file.
       There  are exceptions to this sequence, which will  be  discussed
       later,  so  for the time being, assume that each command  in  the
       batch file will be executed.

       Dos has 30 built in commands (version 3.3 has an additional 4). A
       built in command is a command which does NOT require an  external
       file to execute. These are the built in commands :

       BREAK                           CALL (Dos 3.3 only)
       CD                              CHCP (Dos 3.3 only)
       CLS                             COPY
       CTTY (Dos 3.3 only)             DATE
       DEL                             DIR
       ECHO                            ERRORLEVEL
       EXIST                           EXIT
       FOR                             GOTO
       IF                              IN
       DO                              MD
       NOT                             PATH
       PAUSE                           PROMPT
       RD                              REM
       REN                             SET
       SHIFT                           TIME
       TYPE                            VER
       VOL                             @ (Dos 3.3 only)

       All other commands require an external file to execute.  For  our
       purposes,  we will refer to built in commands as  functions,  and
       external   commands   as  commands.  Since  built   in   commands
       (functions) are internal, and do NOT require an external file  to
       be loaded, they generally execute faster than external commands.

       An  example  of an external command is FORMAT, one  of  the  most
       used,  and  possibly  the  most  destructive.   Many  users  have
       accidentally formatted a disk and destroyed many hours (and  even
       days) worth of work.

       How  can a batch file help you ?  Let's take the  AUTOEXEC  batch
       file.   This  file is automatically executed at  boot  time,  and
       performs  many tasks which you might other wise have to  perform.
       One of the simplest AUTOEXEC batch files might be :

                 CD\WP
                 WP



                                   Page 2


                         S E B F U    Version 1.9.5

                             Batch File Tutorial





       The above two lines would start up your word processor every time
       your system was booted.  Let's take a look at the two lines.  The
       first  line changes the directory to one called WP, which is  one
       up  from  the  root  directory,  while  line  2  starts  up  your
       wordprocessor  (assuming  that  your  wordprocessor  was  in  the
       directory  named WP and was itself named WP.COM or WP.EXE).  Just
       with  these  two  lines, you've saved yourself  a  lot  of  time,
       because  as  soon as you turn the power on, your  word  processor
       will start !

       Most  of us have more to do than run a word processor, such as  a
       checkbook program, spreadsheet or database program.  By the  way,
       these programs are really nothing more than Dos commands !   Yes,
       any  application is really just a command.  If you don't  believe
       it,  just  try to run your application without Dos  !   This  now
       brings us to the next phase of our discussion, what is Dos ?

       Dos  is the operating system which allows our other  software  to
       execute.   Dos performs all of the operations which our  programs
       require to run properly.  These operations include, disk  access,
       keyboard  access,  display  access,  printer  access  and   more.
       Without  Dos, your favorite program would not know where to  save
       files  on the disk, and thus might delete one file  while  saving
       another.   Dos  keeps track of each and every file  on  each  and
       every  disk,  by maintaining a directory and FAT  on  each  disk.
       Each  directory entry references the FAT, which points  to  where
       each file is actually stored on the disk.  This is why, when  you
       here your system dealer say, the FAT is damaged, you can shudder.
       Once  the FAT is damaged, it is hard to fix, and that is why  you
       should  take  care and run the utilities like  NORTOR,  MACE  and
       others,  to prevent the FAT from being damaged, thus causing  Dos
       to loose track of where every thing is.

       You may ask, how can the FAT get damaged ?  Well, that's a  whole
       story  in itself, and not the purpose of this document, so  let's
       get back to batch files.

       What  else can our AUTOEXEC batch file do for us ? Well,  it  can
       set  the Dos PATH function.  For example, if you have placed  all
       of  the Dos commands (from your Dos master) onto your hard  disk,
       in  a  directory  called DOS, then the following  line  could  be
       placed in your AUTOEXEC batch file :

               PATH=C:\DOS

       This  would  allow  Dos to find any of  the  Dos  commands  (like
       FORMAT),  no  matter  which  directory or drive  we  may  be  on.
       Example,  if we are in our WP directory, and needed to  format  a
       disk, we would enter the command FORMAT at the Dos prompt.  If we
       hadn't  set the path as above, and FORMAT.EXE was NOT in  the  WP
       directory,  then  we would get an error message.


                                   Page 3


                         S E B F U    Version 1.9.5

                             Batch File Tutorial





       When  we are NOT running an application (or menu system), we  are
       at  the Dos prompt.  Just what is the Dos prompt ?  When you  see
       the  standard  Dos prompt, you are really looking  at  a  special
       application,  called COMMAND.COM .  This is the application  that
       is  loaded  automatically  at boot  time,  and  is  automatically
       returned to when we are done with another application.  What does
       COMMAND.COM do ?  Well, this is the program which interprets what
       we  enter  at  the Dos prompt (commonly  'A:>_').   Without  this
       program,  we  would  have to create something else  to  load  and
       execute other programs for us.  For example, you enter FORMAT  at
       the  Dos  prompt, then COMMAND.COM passes that name  to  Dos  and
       starts the execution of FORMAT !

       Normally, the prompt we see is something like this :

               A:>_

       Where  our  underline representing a cursor, which  blinks.   The
       only thing this type of prompt tells us, is that we are on  drive
       A  .   If  we were in the directory WP instead of  the  root,  we
       certainly wouldn't know it.  How do we get the prompt to tell  us
       more  ?   Well,  the built in Dos function PROMPT  allows  us  to
       change  the  Dos  prompt to just about  anything  we  wish.   For
       instance, we could enter :

                 PROMPT Your Command? :

       And then the Dos prompt would look something like this :

                 Your Command? : _

       A better prompt might be :

                 PROMPT $P$G

       Which produces the following

                 A:\>_

       for the root directory, and

                 A:\WP>_

       if  we are in the WP directory.  This way, we know exactly  where
       we  are  at all times.  In other words. the prompt gives  us  the
       drive name and directory name.







                                   Page 4


                         S E B F U    Version 1.9.5

                             Batch File Tutorial





       We are at an end as to the use of the AUTOEXEC batch file, except
       to mention that the AUTOEXEC can load in all of your TSR programs
       like  SIDEKICK, for those of you who have it. Also, for those  of
       you with real time clocks, you probably have some line which sets
       the Dos time and date for you. For those of you without real time
       clocks, you could put these lines into your AUTOEXEC batch file :

                 TIME
                 DATE

       Then  each time your system is booted, you will be  prompted  for
       the  time and date. Remember, without these two commands in  your
       AUTOEXEC  batch file, you would NOT be prompted for the time  and
       date.   For those of you who boot from floppies, and  don't  have
       the  AUTOEXEC  batch file installed, you  will  automatically  be
       prompted for the time and date.

       So,  what kind of batch file can you create which will be  useful
       to  you  ?   Well, we'll make a batch file  which  will  help  in
       formatting  disks,  while maintaining some level of  security  in
       preventing accidental disk formatting.

       First,  rename your format program FORMAT.EXE to FMT.EXE  ,  this
       will  keep  anyone from using it by accident.   Now,  create  the
       batch file FORMAT.BAT with these lines :

                 ECHO OFF
                 CLS
                 IF *%1==* GOTO NOPARM
                 IF %1==A: GOTO DFMT
                 IF %1==B: GOTO DFMT
                 ECHO You can NOT format drive %1 !
                 GOTO XIT
                 :DFMT
                 ECHO Please place disk to be formatted into %1
                 PAUSE
                 FMT %1 %2
                 GOTO XIT
                 :NOPARM
                 ECHO You didn't specify the drive !
                 :XIT
                 {BLANK LINE}

       How it works : Line one prevents each line of the batch file from
       being  displayed. You will see this often in batch files  as  the
       first line, followed by the second line which clears the  screen.
       Do  NOT  use  the @ on the first line, as this  command  is  only
       available in version 3.3 and above, thus may NOT be available  on
       the  system  you are writing the batch file for.   The  2nd  line
       clears  the  display, thus avoiding screen  clutter.



                                   Page 5


                         S E B F U    Version 1.9.5

                             Batch File Tutorial





       Line three begins the check for the drive we specified. This line
       jumps  (via  the GOTO) to the line :NOPARM if the user  does  NOT
       specify  a  drive upon entering. The two lines below  this  line,
       check to make sure the user didn't specify the hard drive or  ram
       disk.   IE.. we check to make sure that the drive  specified  was
       either  A  or  B,  and branch to the  line  :DFMT  if  either  is
       specified,  otherwise the ECHO Can't format drive %1 is  reached,
       and  then  the  batch file is terminated by the  GOTO  XIT  line.
       Finally  we reach the line :DFMT which is the label which  starts
       the  actual format process.  The line directly below this one  is
       the  prompt to make sure that a disk is in the  specified  drive.
       The  line PAUSE, causes Dos to halt the batch file and  wait  for
       you  to press any key to continue (after making sure the disk  is
       in the specified drive.  The next line formats the disk using the
       renamed  FORMAT.EXE program, with %1 being the drive, and %2  any
       additional  switches  you may specify (such as the /S to  make  a
       system  disk).  Next is a line which branches to the  exit  line,
       then  comes the label for when the batch file is entered  without
       any  parameters.  Finally we get to the end (:XIT) followed by  a
       blank line (required).  To use the utility, simply enter :

                 FMT %1 %2

       Where %1 is the drive you want formatted (not a hard disk or  ram
       disk) and %2 is the list of parameters you would normally pass to
       the FORMAT program.  This batch file is on this disk, and can  be
       modified  (easily) to include other disk drives  as  formattable,
       such as ASSIGNED drives when using a 3.5 inch or 5.25 inch  drive
       as multiple formats.


       USING ERRORLEVEL

       One  of  the  most under used Dos  functions  is  the  ERRORLEVEL
       function.   It  is  this function that most  of  our  batch  file
       utilities (SEBFU) takes advantage of.  What is ERRORLEVEL ?

       The  errorlevel is set by a program upon exiting when  completing
       the  assigned task (or failing).  Usually this ERRORLEVEL is  set
       to 0 (task performed successfully), but sometimes, it will be set
       to  1  or higher (up to a maximum of 255).  By using the  Dos  IF
       function  followed  by ERRORLEVEL (as we did  in  the  FORMAT.BAT
       program),  we  can test the success or failure  of  a  previously
       executed program, but only from a batch file.  The ERRORLEVEL  is
       NOT available directly from the command line.








                                   Page 6


                         S E B F U    Version 1.9.5

                             Batch File Tutorial





       With our utilities, like GETNUM, we can set this ERRORLEVEL  upon
       exiting the program, which then can be tested from a batch  file,
       and  acted  upon.   Example  :  Using  GETNUM,  we  can  set  the
       ERRORLEVEL from 0 thru 9 (for each of the numeric keys).  To use,
       we  would display a menu (of up to 10 selections),  then  execute
       GETKEY,  which waits untill one of the numeric keys are  pressed,
       then exits, setting the ERRORLEVEL equal to the numeric value  of
       the  key pressed.  This is great for creating small  menus,  like
       the following :

                         (1) Enter word processor
                         (2) Enter data base
                         (3) Enter spreadsheet
                         (4) Format disk
                         (5) Enter check book maintenance
                         (6) Billing system
                         (7) Game
                         (8) Print something
                         (9) Graphics
                         (0) Exit to Dos

       A batch file could be made to display these lines, using the echo
       command,  then  execute GETNUM to wait for a  keyboard  response,
       returning  an  errorlevel to be tested by the  batch  file,  then
       acted upon.  So, just by introducing one new command (GETNUM), we
       are able to create menus !

       This concludes this tutorial, if this tutorial has been  helpful,
       and  you would like to know more, just register these  utilities,
       and  you  will be sent the two disk set (version  2.1)  of  SEBFU
       which  includes  a 50 page tutorial, expanding  what  we  covered
       here, plus explaining more uses of our utilities.

       To order your copy of SEBFU, just print the file REG.DOC, or send
       $19.95  to Scanlon Enterprises, 38354 17th St. E.,  Palmdale,  CA
       93550 , and your copy will be returned by first class mail.

       Thank you for trying SEBFU

       Happy Computing !













                                   Page 7

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2081

     Volume in drive A has no label
     Directory of A:\

    BADCK              512  11-08-89   8:53a
    BADENV             384   7-26-89   2:48p
    BCS      DOC      1792  11-05-89   1:16p
    BCS      EXE    109927  11-05-89   1:26p
    BEEP     COM       258   7-19-89  11:40a
    CDCK     COM       121   7-19-89  11:35a
    CGA      BAT      7424  11-08-89   9:18a
    CGA1               896  11-08-89   8:54a
    CGA2               896  11-08-89   8:55a
    CGA3               395  11-05-89   8:20a
    CGA4               384   7-26-89   2:50p
    CHGLOCK  COM       230   7-19-89  11:38a
    CHKSUM   COM       568   7-20-89   7:35p
    CHKSUM   DOC      2048  11-08-89   8:56a
    CK101    COM       118   8-02-89   8:06p
    CKCLK    COM       117   7-19-89  11:44a
    CLOSING            512  11-08-89   8:57a
    CLR      COM       328   7-19-89  11:45a
    COFF     COM       121   7-19-89  11:45a
    COLOR    COM       335   7-19-89  11:46a
    CR       COM       129   7-19-89  11:47a
    CT       COM       158   7-19-89  11:47a
    CUON     COM       127   7-19-89  11:48a
    DAYOFMO  COM       110   7-19-89  11:48a
    DAYOFWK  COM       347   7-19-89  11:50a
    DETANSI  COM       149   7-19-89  11:50a
    DRVCK    COM       164   7-19-89  11:51a
    DSKRDY   COM       148   7-19-89  11:52a
    ENVSIZE  COM       748   7-19-89  11:52a
    FILE2081 TXT      4589   1-29-90   4:14p
    FORMATX  BAT       512   7-21-89   2:31p
    GALF     COM       149   7-19-89  11:53a
    GCURS    COM       447   7-19-89  11:53a
    GDRIVE   COM       108   7-20-89  10:01a
    GETCC    COM       389   7-19-89  11:54a
    GETCR    COM       389   7-19-89  11:55a
    GETMCB   COM       575   8-04-89   3:43p
    GETNUM   COM       190   7-20-89   2:14p
    GETPG    COM       112   7-19-89  11:56a
    GETVER   COM       439   7-20-89   2:16p
    GMODE    COM       108   7-19-89  11:58a
    GMOUSE             256   7-26-89   2:52p
    GO       BAT       512  11-18-89   3:21p
    GO       TXT       694   1-30-90  10:57a
    GO1      BAT        38   1-01-80   1:37a
    INTRO              896  11-08-89   8:58a
    LATENEWS DOC      1024  11-18-89   3:19p
    LIMCK    COM       140   7-19-89  11:59a
    LOCATE   COM       227   7-19-89  11:59a
    LST      COM       558   7-19-89  12:02p
    MENU               512  11-08-89   8:59a
    MGA      BAT      7552  11-08-89   9:19a
    MGA1               896  11-08-89   9:01a
    MGA2               896  11-08-89   9:02a
    MGA3               395  11-05-89   8:20a
    MGA4               384   7-26-89   2:55p
    MOUSECK  COM       118   7-19-89  12:03p
    PFF      COM       113   7-19-89  12:03p
    PRDY     COM       153   7-19-89  12:04p
    PRINT    COM       162   7-20-89   2:18p
    QD       DOC     41632  11-08-88   4:37p
    QD       EXE     43602  11-09-88   8:41a
    QDOPT    EXE     16145  10-12-88   6:34p
    QUIK     DOC     18560  11-08-89   9:05a
    REG      DOC      2048  11-08-89   9:07a
    SCROLL   COM       305   7-19-89  12:05p
    SNGLBOX  COM       447   7-19-89  12:06p
    SUMCHK   BAT      5248   8-06-89   8:28a
    SWAPPRN  COM       120   7-19-89  12:00p
    TUTR     DOC     17792  11-08-89   9:09a
    WAIT     COM       253   7-19-89  12:06p
    WAITM    COM       162   7-19-89  12:07p
    WHATDAY  COM       110   7-19-89  12:07p
    WHATHR   COM       110   7-19-89  12:09p
    WHATMIN  COM       110   7-19-89  12:10p
    WHATMO   COM       110   7-19-89  12:10p
    WHATYR   COM       114   7-19-89  12:11p
    WRITE    COM       541   7-21-89   7:44a
    WRITEF   COM       577  11-08-89   9:13a
    XMSCK    COM       119   7-19-89  12:12p
    YN       COM       225   7-19-89   5:13p
    YRSINCE  COM       222   7-19-89  12:13p
    YRSTILL  COM       221   7-19-89  12:14p
           83 file(s)     301752 bytes
                            6144 bytes free
