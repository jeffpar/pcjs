---
layout: page
title: "PC-SIG Diskette Library (Disk #1946)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1946/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1946"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MENU MASTER BY MORGENSEN"

    MENU MASTER was designed specifically with ease of use and simplicity in
    mind.  It can be set up or revised in just minutes, even if you have
    never used a hard drive before.
    
    MENU MASTER has a total of sixty entries available to you.  Thirty on
    the first menu and thirty on the second.  You may not need all of
    these,
    but it's nice to know you have the capacity.  MENU MASTER allows you to
    select either monochrome or color.
    
    MENU MASTER lets you view any entry that has already been set up.  In
    viewing you see the name that appears on the menu, the path to the
    subdirectory and the start-up command you entered at setup.  If you
    desire to move the positioning of the entry to another entry location,
    you can.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COLOR.DOC

{% raw %}
```
                            C O L O R   M A S T E R
                            -----------------------
                                 VERSION  1.0
                               DOS-RITE SOFTWARE
                               by Phil Morgensen


         COLOR MASTER can be used to change the colors of your screen while

  working in DOS.  Type "COLOR" at the prompt and then answer the following

  questions: 
                1. CHANGE COLORS  ?
                     ( Y or N )

                2. ENTER TEXT COLOR

                3. ENTER BACKGROUND

                4. ENTER BORDER


     Then  COLOR MASTER  will again ask if you want to:   CHANGE  COLORS  ?

 If the answer is "Y"  (Yes)  then you will be able to change colors again.

 If the answer is "N" (No) then you will be returned to DOS with the colors

 you selected.  If you're in a hurry, the default colors are WHITE on BLUE.

 COLOR MASTER  is now in memory and typing "EXIT" will restart the program.

     Enjoy  MENU  MASTER  and  COLOR  MASTER  and thank you for registering

for  MENU  MASTER.  I will do my best to bring you more fun in the future.

                                                       Phil Morgensen.
```
{% endraw %}

## FILE1946.TXT

{% raw %}
```
Disk No: 1946                                                           
Disk Title: Menu Master By Morgensen                                    
PC-SIG Version: S2                                                      
                                                                        
Program Title: Menu Master By Morgensen                                 
Author Version: 2.0                                                     
Author Registration: $10.00                                             
Special Requirements: Hard drive.                                       
                                                                        
MENU MASTER was designed specifically with ease of use and simplicity in
mind.  It can be set up or revised in just minutes, even if you have    
never used a hard drive before.                                         
                                                                        
MENU MASTER has a total of sixty entries available to you.  Thirty on   
the first menu and thirty on the second.  You may not need all of these,
but it's nice to know you have the capacity.  MENU MASTER allows you to 
select either monochrome or color.                                      
                                                                        
MENU MASTER lets you view any entry that has already been set up.  In   
viewing you see the name that appears on the menu, the path to the      
subdirectory and the start-up command you entered at setup.  If you     
desire to move the positioning of the entry to another entry location,  
you can.                                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MENU.DOC

{% raw %}
```

                          M E N U   M A S T E R          Version 2.0
                          ---------------------       DOS-RITE SOFTWARE
                                                      by Phil Morgensen

      " W O R L D ' S   E A S I E S T   H A R D   D R I V E   M E N U "
        -------------------------------------------------------------

   MENU MASTER  was designed specifically with ease of use and simplicity in 

mind.  I believe that  MENU MASTER  is the easiest hard drive menu available 
       ---------------------------------------------------------------------
and yet is power packed enough for the most advanced user.  It can be set up

or revised in just minutes, even if you have never used a hard drive before.

   MENU MASTER  is a tremendous  time  saver  because of its ease of set up.
                                 ----  -----
This is one of the reasons I developed this program was that I had spent far

too much time making menus on my word processor and then writing batch files

to go to the subdirectories and start up the programs. 


     F E A T U R E S :
     ---------------

*  MENU MASTER  has a total of SIXTY ENTRIES available to you.  Thirty on the
                               ----- -------
first menu and thirty on the second.  You may not need all of these but right

now I have  only  seven  open.  There is a little room for all of us to grow.

*  MENU MASTER  allows you to select either COLOR or MONOCHROME.  Even if you
                                            -----    ----------
have a color monitor the monochrome setting  may  be  easier  on  your  eyes.

*  MENU MASTER  lets you select the  root directory (CD\)  or  a subdirectory

(like CD\MENU) for where you would like the MENU MASTER files to reside.

*  MENU MASTER  has six keys selectable for DOS commands. [ U ], [ V ] and [ W ]

on both menus are available for commands such as "FORMAT A:", "DISKCOPY A: B:",

"CHKDSK","DATE","TIME", etc. You must make sure that FORMAT.EXE and CHKDSK.EXE,

DISKCOPY.EXE are present in the directory where  MENU MASTER  resides.

*  [ X ] will "SHELL" out of MENU MASTER for you to work in DOS and then you
               -----
can return to the program by typing "EXIT".  "CTRL-BREAK" will exit completely.
                                     ----
*  [ Y ] takes you to the "SET-UP MENU" where you are asked for the information
                           -----------
needed to get your programs started.

*  [ Z ]  will "CHAIN" to MENU II where there are thirty more entries available.
                -----

      G E T T I N G    S T A R T E D :
      ------------------------------

   To make a subdirectory called "PCWRITE" for example, you would use the 

command -  MD\PCWRITE  - Then you would go to the subdirectory to make sure

your command worked.  -  CD\PCWRITE  -  Next, go to drive A: to copy the

PC WRITE program disk to the PCWRITE subdirectory -  COPY *.* C:\PCWRITE.

   Now, at the A: prompt, copy all the files from the  MENU MASTER program

disk to the main directory  -  COPY *.* C:\  -  or whichever subdirectory

you would like - COPY *.* C:\MENU.

      S E T U P :
      ---------

   To start up MENU MASTER simply type MMSETUP  -  When asked if you would

like COLOR or MONOCHROME then choose the one for your system.  Next, enter

the subdirectory where MENU MASTER will reside.  The menu will now appear

on your monitor in either COLOR or MONOCHROME.  Then select "Y" for set-up

menu and you will be asked which letter or number you want to change.  You

will then need to answer these five simple questions:


   1.  PROGRAM NAME - this is the name you want to appear on the main menu.


   2.  SELECT DRIVE - if the program you want to invoke is on drive C: or

       on drive D:, this must be specified here.


   3.  SUBDIRECTORY PATH - if the subdirectory you made was  PCWRITE  then

       here you would enter   CD\PCWRITE .


   4.  GO COMMAND - this is the command that actually invokes the program.
    
       For example the start-up command for  PC WRITE  is  ED .


   5.  Is this data correct -  YES  will enter the data and return you to

       MENU MASTER  and  NO  lets you try again.

   If setting up U, V and W for DOS commands there are just two questions:

  DOS COMMAND NAME  and actual  DOS COMMAND:       NAME = FORMAT DISK
                                                   CMND = FORMAT A:
     R E G I S T E R I N G :
     ---------------------

   I believe you will enjoy using  MENU MASTER  and that it will be a tool 

for you to use daily in your computing.  I encourage you to make copies of

this program disk and give it to your friends.   MENU MASTER  is a share-

ware program and may be copied freely or a small fee may be charged for

the cost of the disk and copying service.  All rights to  MENU MASTER  are

reserved by Phil Morgensen.  All comments and suggestions are very welcome.

If you find  MENU MASTER  of benefit to you and would like to register for

user support and updated versions of this program, please send $10 to:   

                             Phil Morgensen
                             DOS-RITE SOFTWARE
                             P.O. Box 296
                             Bridgman, MI 49106

       
     D I S K   F I L E S :
     -------------------


             MM.EXE  ................ PROGRAM EXECUTION FILE.


             MM1.TBC ................ MENU I  CHAIN FILE.


             MM1.DAT ................ MENU I  DATA  FILE.


             MM2.TBC ................ MENU II CHAIN FILE.


             MM2.DAT ................ MENU II DATA  FILE.


             DC.TBC ................. MAIN MENU SET-UP.


             MMSETUP.EXE ............ CONFIGURES YOU SYSTEM.


             CONFIG.DAT ............. DATA FILE FOR SETUP.


             MENU.DOC ............... MENU MASTER DOCUMENTATION.


             COLOR.EXE .............. COLOR PROGRAM FOR DOS.


             COLOR.DOC .............. COLOR DOCUMENTATION.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1946

     Volume in drive A has no label
     Directory of A:\

    MM       EXE     59504   1-01-80  12:35a
    MM1      TBC      5744   1-01-80  12:44a
    MM1      DAT      1522   1-01-80  12:02a
    MM2      TBC      5744   1-01-80  12:45a
    MM2      DAT      1524   1-01-80  12:08a
    DC       TBC      8848   1-01-80  12:24a
    MMSETUP  EXE     61744   1-01-80  12:36a
    CONFIG   DAT        18   1-01-80  12:13a
    MENU     DOC      6188   1-01-80  12:08a
    COLOR    EXE     39248  10-05-89   7:00a
    COLOR    DOC      1241  10-05-89   7:00a
    GO       BAT        28  11-27-86  12:31p
    FILE1946 TXT      2147   8-17-90  12:49p
    GO       TXT       573   1-01-80   4:38a
           14 file(s)     194073 bytes
                          118784 bytes free
