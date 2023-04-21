---
layout: page
title: "PC-SIG Diskette Library (Disk #2153)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2153/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2153"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FOOTBALL COMPU-SCHEDULE"

    Keep track of your favorite NFL teams and their scoring records for the
    year with direct and simple menu structures.  Add new scores as the
    games are played, week after week.  Go back and look at history,
    running the program with only the function keys.
    
    Last year's stats and standings are already included in the data files
    as well as the pertinent information from all 24 Superbowls.  Compare
    seasons as well as teams.  Print your results for convenient future
    reference.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CSCHED.DOC

{% raw %}
```


               FOOTBALL COMPU-SCHED(TM)  NFL-1990 

                        Version 3.0

                      Reference Manual

                       June 18, 1990 




                     Cosoft Micro Systems
                        P.O. Box 4724
                      Hayward, CA 94540



        Copyright (C) John A. Bruzas.  All Rights Reserved.




                        Copyright

This program is copyrighted (C) 1988,1989,1990 by John A. Bruzas.  All
Rights Reserved. 

This product is Shareware.   Please help distribute Football
Compu-Sched by sharing unmodified copies of this diskette with
others in the United States and Canada for non-commercial use.
If you find Football Compu-Sched useful,  we encourage you to 
buy a registered copy for only $10.00. 

A registered copy provides you:

  o  Current Football Compu-Sched with your unique registration
     number.
  o  Support service for one year and next year's update (unregistered).
  o  A $2.00 commission when someone registers and gives your
     number.
  o  Our thanks and appreciation (as well as help make possible
     updates in future years).

To register, send the registration from the bottom left hand
corner of the copyright screen along with your name and address and 
$10.00 to:

                    Cosoft Micro Systems
                       P.O. Box 4724
                     Hayward, CA 94540
                       (415)886-4887

Unregistered copies are also available from the above address for $5.00
per copy.

NOTE:  If you have NOT registered your copy, please do not call with 
support questions.  We cannot (for economic reasons) return calls for 
those who have not registered.  However, you can send us your question 
or problem with a self-addressed stamped envelope and we will do our 
best to respond.  Of course, you could register! 

Californians, please add 7.0% state sales tax.

Feel free to send comments, suggestions, etc. about the product to us.  
We hope that you'll find it an enjoyable addition to the football 
season! 

HOW DO YOU USE FOOTBALL COMPU-SCHED?

First copy the files from this diskette to a work diskette or your 
hard disk.  There should be three files: CSCHED.EXE, CSCHED.ANN, and 
CSCHED.DOC.  See your DOS manual if you need to learn how to do this. 

Note that Football Compu-Sched also creates a data file containing 
scores entered by the user.  These scores are stored in the file 
NFL89.SCR.  Depending on where you obtained Football Compu-Sched, this 
file may or may not be on the diskette.

RUNNING FOOTBALL COMPU-SCHED

To run Football Compu-Sched, at the DOS prompt type: 

CSCHED

You then see the title screen while the data is being loaded.  

Once the data has been loaded, the program will beep.  Press ENTER. 

Next you'll see the copyright screen.  

Press ENTER again. 

You'll now see the main screen.  

To the left are the options and commands available to you.  Notice that the 
whole program can be run using the function keys on the left side of your 
keyboard. 

To the right is the first week's schedule.

F1 -  Let's you change the week being displayed.  When you press F1, 
you'll get a secondary menu:

            F1 = Show the next week.
   
            F2 = Back up one week.

            F3 = Let's you type the number of the week you want displayed.

            ESC = Return to the main menu.

F2 -  Allows you to display the season log for a selected team.  When 
you press F2, you get the secondary menu.  You select the team whose 
log you want to display by moving the cursor over the team you want 
(by using the arrow keys on the keypad) and then pressing ENTER.  The 
log for the selected team will then appear.  Press ESC when done 
viewing the log.

When done looking at team logs, press ESC to return to the main menu.

F3 - Displays composite standings.  When you press F3 from the main 
menu, you'll see the secondary menu:

       F1 = Displays this year's standings.  NOTE:  If you have not 
       added any scores, then all numbers in the composite standings 
       will show up as zeroes.  These standings are calculated based 
       upon scores entered by the user. 

       F2 = Displays last year's standings.  These standings are not 
       user changeable and are hard coded. 

       ESC = Return to main menu.

F4 - Lets you update the scores for the week currently displayed on 
the left. (To change the week, press F1 from the main menu first.)

When you press F1, the cursor will be positioned next to the first 
team on the left.  Type the score and press ENTER.  Follow the same 
procedure for all the games displayed.  Once you are done, you then 
press ESC to return to the main menu.
      
F5 - Allows you to print to a printer.  When you press F5 from the 
main menu, you'll see a secondary menu:

      F1 = TEAM LOG   When you press F1, again, you're asked:

            F1 = One Team   If you choose F1 again, you then select 
            the team by using the arrow keys to move the cursor over 
            the team you want.  Press ENTER to make your selection.  
            The team log will then print. 

            F2 = All Teams  Will print logs for all 28 teams.

            ESC = Return to the secondary menu.

      F2 = SCHEDULE  You then get another menu where:

            F1 = FULL SCHEDULE  Print all 17 weeks.

            F2 = RANGE OF WEEKS  You're asked for the first and last 
            week to include. 

            ESC = Return to the secondary menu.

      F3 = STANDINGS  You're then taken to another menu where:

            F1 = THIS YEAR's standings.

            F2 = LAST YEAR's standings.

            ESC = Return to the secondary menu.

      ESC = return to the main menu.


F6 Displays the results of last year's playoff games.  
Pressing ENTER returns you to the main menu.

F7 Displays the results of all 24 Superbowls.

ESC Returns you to DOS.  If you have made any changes to scores, then 
an updated version of the data file NFL90.SCR will be written to the 
disk at this time.

And that's it!!  Sit back, kick off your shoes, grab a beer and you're 
set for the new season.  If you're a diehard fan, look for our other 
shareware products aimed at football fans -  Football Scoreboard and 
Football Stats-Alyzer.

       










```
{% endraw %}

## FILE2153.TXT

{% raw %}
```
Disk No: 2153                                                           
Disk Title: Football Compu-Schedule                                     
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: FOOTBALL COMPU-SCHED                                     
Author Version: 3.0                                                     
Author Registration: $10.00                                             
Special Requirements: Printer recommended.                              
                                                                        
Keep track of your favorite NFL teams and their scoring records for the 
year with direct and simple menu structures.  Add new scores as the     
games are played, week after week.  Go back and look at history,        
runnning the program with only the function keys.                       
                                                                        
Last year's stats and standings are already included in the data files  
as well as the pertinent information from all 23 Superbowls.  Compare   
seasons as well as teams.  Print your results for convenient future     
reference.                                                              
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2153

     Volume in drive A has no label
     Directory of A:\

    CSCHED   DOC      6498   7-04-90   4:37p
    CSCHED   ANN      2525   7-04-90   4:35p
    CSCHED   EXE     87068   6-24-90   5:50p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       723   1-01-80   1:35p
    FILE2153 TXT      1777   7-17-90  12:36p
            6 file(s)      98629 bytes
                           59904 bytes free
