---
layout: page
title: "PC-SIG Diskette Library (Disk #1881)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1881/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1881"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HELP!/POP-HELP"

    Finally, the help that we've all been looking for!  HELP!! And POP-
    HELP are a combined on-line reference manual to DOS that comes when
    it's called and is always there when you need it. Both HELP!! And POP-
    HELP are DOS utilities with a complete listing of DOS commands through
    DOS version 3.3. HELP!! Is available at the DOS command line. POP-HELP
    is memory-resident, so it is available anywhere you are. This is the
    program that every husband should give his wife (and vice versa)
    unless,
    of course, you wish to appear incredibly knowledgeable.
    
    Both HELP!! And POP-HELP are easy to use. POP-HELP's command keys can
    be set so that they will not conflict with your program commands. There
    are very clear instructions to allow you to add extra
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1881.TXT

{% raw %}
```
Disk No: 1881                                                           
Disk Title: Help!/Pop-Help                                              
PC-SIG Version: S1                                                      
                                                                        
Program Title: Help!/Pop-Help                                           
Author Version: 2.01                                                    
Author Registration: $15.00.                                            
Special Requirements: None.                                             
                                                                        
Finally, the help that we've all been looking for!  HELP!! and POP-     
HELP are an on-line reference manual to DOS that comes when its called  
and is always there when you need it.  Both HELP!! and POP-HELP are     
DOS utilities and contain a complete listing of DOS commands through    
DOS 3.3.  HELP!! is available at the DOS command line. POP-HELP is      
memory resident, so that it is available anywhere you are. This is the  
program that every husband should give his wife (and vice versa) un-    
less, of course, you wish to simply appear incredibly knowledgeable.    
                                                                        
Both HELP and POP-HELP are easy to use, POP-HELP's command keys can be  
set so that they will not conflict with your program commands.  There   
are very clear instructions to allow you to add extra information and   
your own commands to HELP!! and POP-HELP.                               
                                                                        
                                                                        
                                                                        
                                                                        
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
║                 <<<<  Disk #1881  HELP!/POP-HELP  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: POP-HELP     (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY HELP201.DOC PRN                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HELP201.DOC

{% raw %}
```




























                             HELP / POP-HELP USER'S GUIDE
                                     Version 2.01

                             Copyright 1987, HELP SOFTWARE
                                   16706 Bradley Ct.
                                   Belton, MO 64012













































                                   TABLE OF CONTENTS


           SHAREWARE CONCEPT  .............................  1

           DIFFERENCES BETWEEN VERSION 2.01 AND OTHERS ....  1

           WHAT DOES HELP!! DO ?? .........................  2

           INSTALLING HELP!!  .............................  2

           USING HELP!!  ..................................  3

           DIFFERENCES BETWEEN HELP!! AND POP-HELP  .......  5

           MODIFYING AND ADDING HELP!! COMMANDS  ..........  5

           USING HELPINDX .................................  7



























                                   SHAREWARE CONCEPT

           HELP!! and POP-HELP represent many months of very hard work.  I
           urge you to support the Shareware concept and fight the high cost
           of software.  

           HELP!! and POP-HELP are user supported programs.  They are not
           public domain programs and they are not free.  You are granted a
           limited license to use HELP!! and POP-HELP on a trial basis.  If
           you wish to continue using HELP!! and/or POP-HELP after the trial
           period, you must register by sending either 

           (1) $15.00 for registration only (no disk) or 
           (2) $25.00 for registration and the latest version on disk.  
           (Indicate the version that you currently have.)

           Discounts are available for purchases over 10 units.  Write for
           details.

           Send all registration fees to:

                                  HELP SOFTWARE
                                  16706 Bradley Ct.
                                  Belton, MO 64012

           Whether you find this program useful or not, you are encouraged
           to share this program with others, but not for money.

           Both HELP!! and POP-HELP have been thoroughly tested, but if you
           should find a bug or have an idea how HELP!! could be improved,
           please let me know.






























           The user  hereby agrees that regardless of the form of any claim,     
           liability for any damages or loss incurred because of this product    
           shall not exceed the registration fee.

























              DIFFERENCES BETWEEN HELP / POP-HELP 2.01 AND PREVIOUS VERSIONS
           If you  have been  using other  versions of HELP, there are a few
           key differences between HELP  2.01 and  previous versions.   They
           are listed below.

           1)  CONVERT has been replaced by HELPINDX.
           2)  SETUP has been replaced by HELPINST.
           3)    HELP.DAT  is  no  longer  created for you.  HELPINDX (which
           replaces  CONVERT)  indexes  a  text  file  and  does  not create
           HELP.DAT.   As a result, if you want to create a new text file or
           if you want to use a  file  other  than  the  HELP.DAT  text file
           supplied, you  will need  to rename the text file that you use to
           the new filename HELP.DAT.  For example, if  you wish  to use the
           file  BASIC.HLP  which  contains  all  of  the  BASIC interpreter
           commands, you would index  it using  HELPINDX and  then rename it
           (or copy  it to)  the new  filename HELP.DAT.  This change allows
           HELP to use significantly  smaller data  files (roughly  half the
           size) and saves you a lot of disk space.
           4)  POP-HELP uses considerably less RAM memory (about 20% less).






                                WHAT DOES HELP!! DO ??

           HELP!! is an on-line reference manual.  You can create your own
           file of commands so that HELP!! can be tailored to your needs. 
           HELP!! comes with a text file (HELP.DAT) that contains a complete
           listing of DOS commands through DOS 3.3.  It is designed to be as
           flexible as possible.

           HELP!! is available from the DOS command line at any time.  POP-
           HELP is a pop-up or memory resident version of HELP!!  There are
           a few minor differences between HELP and POP-HELP and they are
           explained in a later section.

           The text file that HELP!! uses (HELP.DAT) is included on this
           disk.  You can add commands, edit commands, or personalize it any
           way you want.  (See the section on Modifying and Adding HELP!!
           Commands for instructions).



                                   INSTALLING HELP!!

           The installation of HELP!! is either a one or two step process. 
           If your copy of HELP!! was downloaded from a bulletin board, you
           may need to run the HELPINDX program before HELP!! will be
           usable.


           Here's how to tell if you need to run HELPINDX.  Check your
           directory for two files.  If you do not have the files HELP.NDX
           and HELP.DAT, then you will need to run HELPINDX.  (See the
           instructions in  the section  labeled USING HELPINDX).  If you do
           have these files, then go on to the next step.
           Next type HELPINST and press Enter.  A screen will be displayed
           prompting you to enter several pieces of information.

           The first thing that HELPINST will ask for is the drive and path
           where the file HELP.NDX can be found.  HELP.NDX is the index file
           that HELP!! and POP-HELP use.  Just type in the name of the drive
           and directory for HELP.NDX (Example  C:\HELP  or A:).

           The next thing that HELPINST will ask for is the drive and path
           where the file HELP.DAT can be found.  HELP.DAT is the data file
           that HELP!! and POP-HELP use.  Just type in the name of the drive
           and directory for HELP.DAT (Example  C:\HELP  or A:).

           Next HELPINST will ask you if you want to force color to
           monochrome.  Both HELP!! and POP-HELP are quite capable of
           figuring out what type of adapter that you have.  However, if you
           have a monochrome monitor that is attached to a color adapter,
           (such as a Compaq Computer or a composite monitor of some sort)
           you may have trouble reading the screen because of the colors
           used.  By forcing color to monochrome you will be able to read
           the display much easier.

           The last thing that HELPINST will ask you for is the key sequence
           to use to start POP-HELP.  Remember that POP-HELP is the pop-up
           or memory resident version of HELP!!.  The key sequences that can
           be used are:

           ALT and 0 through 9
           ALT and A through Z
           ALT and F1 through F10
           CTRL-Home, CTRL-End, CTRL-PgUp, and CTRL-PgDn

           You  should  have  enough  choices  so  that  POP-HELP's  startup
           keystrokes won't interfere with your other programs.

           When you are finished entering the required information press
           F10.  HELPINST will ask you if you are sure.  Press "Y" to save
           and exit or "N" to return to HELPINST.

           If you want to ESCape without saving any changes simply press
           ESCape.  HELPINST will ask you if you are sure.  Press "Y" to
           exit without saving or "N" to return to HELPINST.

           You may use the up and down arrow keys to move back and forth
           between the different choices.



                                     USING HELP!!

           HELP!! and POP-HELP are so easy to use and you will probably not
           even need to use the documentation.  Nevertheless, documentation
           is provided.

           There are two key differences between HELP!! and POP-HELP and you
           will want to be sure to read the section that explains the
           differences.

           Before you are able to use POP-HELP, you need to load it into
           memory by typing POP-HELP and pressing enter.

           Once you have loaded POP-HELP, just press the key sequence that
           you defined (using HELPINST) to start POP-HELP.  When you press
           the proper key sequence, POP-HELP will display the list of
           available commands.


           To start HELP!! all that you need to do is enter HELP and an
           optional command name from the DOS command line.

           The syntax for HELP!! is:  HELP [COMMAND]

           [COMMAND] is optional.  If HELP is entered without a COMMAND, a
           list of commands will be displayed and you will be able to select
           one using the cursor keys.  

           If HELP!! is entered with a COMMAND name, HELP!! will search the
           list of commands for the command entered.  If HELP!! finds the
           command entered then the list of commands will not be shown.
           Instead the HELP information for the command entered will be
           displayed.

           If COMMAND is not found then the list of available commands will
           be displayed and you may scroll through them using the cursor
           keys.

           While you are in the list of commands, you may use the following
           cursor keys:

           UP and DOWN arrows    scrolls one COMMAND NAME at a time 
           PgUp and PgDn         scrolls one screen at a time 
           Home and End          scrolls to the first and last COMMAND NAMES
           Enter                 selects the COMMAND that is highlighted 
           ESCape                exits the program







           While you are in the window which displays the HELP!! text, you
           may use the following cursor keys:
            
           UP and DOWN arrows    scrolls one line at a time 
           PgUp and PgDn         scrolls one screen at a time 
           CTRL-PgUp             displays the previous command
           CTRL-PgDn             displays the next command
           Home and End          scrolls to the first and last lines
           C                     selects the command window 
           ESCape                exits the program

           Any time that the second window (HELP window) is displayed, you
           may display the COMMAND WINDOW by pressing C.

           The COMMAND WINDOW provides an easy way to enter the command that
           you need help with.  The COMMAND WINDOW is designed to allow you
           to enter the command that you have requested help with while you
           are still able to read the help information.  

           Even when you are in the COMMAND WINDOW you still have access to
           all of the information in the HELP window (second window).  You
           are still able to scroll the help information up and down using
           the cursor keys.

           When you are using HELP, the command that you enter using the
           COMMAND WINDOW will be processed immediately and you will remain
           in HELP!!  

           When you enter a command using the COMMAND WINDOW with POP-HELP,
           nothing will happen right away.  In fact, nothing will happen at
           all until you exit POP-HELP.  When you do exit POP-HELP, the
           command that you entered will be sent to the keyboard buffer just
           as you entered it.

           REMHELP is available if you need to remove POP-HELP from memory. 
           All that you need to do is type REMHELP and POP-HELP will be
           removed from memory.




                         DIFFERENCES BETWEEN HELP!! AND POP-HELP

           There are two major differences between HELP!! and POP-HELP

           1.  When using HELP!! (from the command line) you may specify the
           optional command name.  An example of this would be invoking
           HELP!! with the command  HELP MODE.  After issuing this command,
           HELP!! will look in its list of commands to see if it can find
           the command MODE.  If it finds the MODE command, then HELP!! will
           immediately display the information available for MODE.  If
           HELP!! cannot find the MODE command then the list of available
           commands will be displayed.  
           POP-HELP obviously has no way to allow for this since it is
           invoked by a HOT key sequence.


           2.  The second difference has to do with the way that HELP!! and
           POP-HELP handle a command entered from the command window.

           If you enter a command from the command window using HELP!! it
           will be executed immediately and you will remain inside HELP!!

           When you enter a command from the command window using POP-HELP
           nothing will happen right away.  In fact nothing will happen
           until you exit POP-HELP.  When you do exit POP-HELP, however, the
           command that you entered will be passed to the keyboard buffer
           just as you entered it.



                         MODIFYING AND ADDING HELP!! COMMANDS

           One of the great things about HELP!! and POP-HELP is that you can
           add your own commands or you can change the text for the commands
           that are supplied.

           If you want to add to the list of DOS commands you can simply
           edit the text file using a word processor or the EDLIN line
           editor.  If you wish, you may create a completely new file using
           any name that you choose.



                                     IMPORTANT:

           When you are modifying the text to be used by HELP!! there are a
           few things that you must remember.

           1.  The maximum length of any line is 40 characters.  Any text
           over 40 characters will be cut off.

           2.   The minimum length of any command is 128 characters.  If you
           want to use a short command (less than  128 characters)  then you
           must pad  it with  blank spaces.   If you use commands containing
           less than 128 characters,  you may  not be  able to  retrieve the
           correct information for that command.

           3.  HELP!! and POP-HELP can handle a maximum of 500 different
           commands.  Each command may have up to 135 lines of text.  Each
           command name may be up to 11 characters long.

           4.  HELP!! and POP-HELP expect to find an index file so that they
           know where to find the individual commands.  After you have
           finished modifying your text file, you must run  the HELPINDX
           program to create an index file.
           5.  HELPINDX is very particular about how the commands are
           separated.  Be sure to read below about how new commands are
           recognized. (Using Ctrl-A)


                                SPECIAL CHARACTERS:

           There are a few special characters which will cause special
           effects when used in the text file.  They are listed below.

           ^A (Ctrl-A) - notes the start of a new command.  HELPINDX expects
           Ctrl-A to be the first character in the text file being indexed. 
           HELPINDX also expects the command name to immediately follow the
           Ctrl-A.  You may want to take a look at how the HELP.DAT file is
           set up.  

           An example of how HELPINDX would expect a text file to look is
           given below.

           ^ANEW COMMAND
           This is the start of a new command.
           (Blanks...)


           ^A2nd COMMAND
           Here is some text for the second
           command.
           (Blanks...)



           ^E (Ctrl-E) - makes text yellow on a color monitor or high
           intensity white on a monochrome monitor.

           ^B (Ctrl-B) - makes text green on a color monitor or high
           intensity white on a monochrome monitor.

           ^N (Ctrl-N) - creates blinking text.  Text will be blinking red
           on a color monitor or blinking high intensity white on a
           monochrome monitor.

           ^  (Shift-6) - returns text to normal.  Normal text is light blue
           on a color monitor or light gray on a monochrome monitor.



                                    USING HELPINDX:

           After you modify your file, you will need to run HELPINDX to make
           your changes usable by HELP!! and POP-HELP.



           When you run HELPINDX, you will be asked for the full path where
           the text file to be indexed is located.  For instance, if you are
           using the file HELP.DAT and it is located in C:\DATAFILE then
           enter C:\DATAFILE\HELP.DAT.
           You will then be asked the full path where you want the index
           file to be placed.  If you want the file placed in C:\HELP then
           enter C:\HELP, if you want the file placed in the current
           directory then just press enter.

           At this point, HELPINDX will display the commands that it is
           indexing until it has indexed the entire file.

           If you  create a  text file  of your own, or if you want to use a
           file other than the HELP.DAT file supplied on this disk, you will
           need to  make sure  that you name your file HELP.DAT before using
           it.  Both HELP and POP-HELP expect to find a file named HELP.DAT.
           The best  way to change the name of your file is to use RENAME or
           COPY.  

           After this is finished, you are ready to use HELP!! or POP-HELP
           and your new commands or modified commands will be included.



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1881

     Volume in drive A has no label
     Directory of A:\

    POP-HELP COM     25034   7-15-88   1:16p
    HELP     COM     29631  10-02-88  12:12p
    REMHELP  COM      4992  10-03-87   8:22p
    HELPINST COM     20462  10-03-87   8:20p
    HELPINDX COM      7544  10-03-87   8:18p
    HELP     INF        28   3-28-89   7:19a
    HELP     NDX      1200   6-05-88  12:53p
    HELP     DAT     83200   6-05-88  12:53p
    HELP201  DOC     18455   6-30-88   7:56p
    DOS33    HLP     83189   6-05-88  12:52p
    PROGRAM  HLP     17412   9-06-87   7:37p
    INVOICE           1612   1-27-88  10:46p
    FILE1881 TXT      2295  12-27-89  12:43p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-27-89   2:55p
           15 file(s)     295632 bytes
                           17408 bytes free
