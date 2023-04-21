---
layout: page
title: "PC-SIG Diskette Library (Disk #1857)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1857/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1857"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "USA BOX"

    Introduce the states of the U.S. and their geographic positions to your
    children.  USABOX helps little users learn to count by two while
    monitoring a target value. It also introduces the notion of vectors --
    the concept that a line has a value based on its direction and length.
    The four variations of USABOX stress similar skills, such as counting by
    five and choosing a destination state.
    
    USABOX is part of the Brandon's Lunchbox series of educational
    programs for 3-7 year olds. USABOX starts off with a package, a laser
    matter transmitter, a power requirement, and a destination state on a
    map of the United States.
    
    Your child must try to match the required power rating to transmit the
    package. You'll see the package load into the transmitter, hear the
    matter transmitter warming up, see and hear the laser beam transmit the
    package across the United States...eventually to appear in the
    destination state!
    
    The timing loops in the programs are based on the standard 4.7 Mhz PC
    processor. If you are using a faster machine, you may wish to run your
    machine in "slow" mode, or use a slowing program such as PC-SIG disk
    #1834.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1857.TXT

{% raw %}
```
Disk No: 1857                                                           
Disk Title: USA Box                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: USA Box                                                  
Author Version: 1.0                                                     
Author Registration: None.                                              
Special Requirements: CGA.                                              
                                                                        
USABOX is part of the Brandon's Lunchbox series of educational programs 
for 3 to 7 year olds.  USABOX starts off with a package, a laser matter 
transmitter, a power requirement, and a destination state on a map of   
the United States.  For example, it might take "25 pellets of power" to 
transmit a package to Oklahoma -- and you start off with zero pellets!  
                                                                        
Every time you press the space bar, 2 power pellets are added to your   
current power level.  Your youngster must try and match the required    
power rating to successfully transmit the package.  You'll see the      
package You'll see the package load into the transmitter, you'll hear   
the matter transmitter warming up, you'll see and hear the laser beam   
transmit the package across the United States ... then you'll see your  
package appear in it's destination state!                               
                                                                        
USABOX helps introduce the states of the U.S. and their geographic      
position.  It helps little users learn to count by two -- and also to   
watch a target value and notice when you're too low or too high!        
Finally, it introduces the notion of vectors -- the concept that a line 
has a value depending on its direction and length.  Four variations on  
USABOX stress similar skills.  In those games counting by five and      
choosing the destination state.                                         
                                                                        
The timing loops in the programs are based for the standard 4.7 Mhz PC  
processor.  If you're using a faster machine, you may wish to place your
machine in "slow" mode.                                                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
USABOX.DOC      Documentation
USABOX.EXE      Main Program
USA1.EXE        Game # 1
USA2.EXE        Game # 2
USA3.EXE        Game # 3
USA4.EXE        Game # 4
USERLIB.EXE     Microsoft Quickbasic runtime module
BRUN30.EXE      Microsoft Quickbasic runtime module
```
{% endraw %}

## USABOX.DOC

{% raw %}
```






                        Brandon's Lunchbox (U.S.A. Boxes)

                                  a series of
                             educational programs
                             for 3 to 7 year olds


                            @ 1989, Joey Robichaux 
                               P. O . Box 90196-199
                            Baton Rouge , La. 70816 


         NOTE:
           
            "Brandon's Lunchbox" requires an IBM PC or compatable with 
         color graphics capability.  The programs all use CGA 
         graphics.

            The timing loops in the programs are based for the 
         standard 4.7 Mhz PC processor.  If you're using a faster 
         machine, you may wish to place your machine in "slow" mode. 
         
            "Brandon's Lunchbox" may be copied to and run from a hard 
         drive.  All programs must exist in the current default drive 
         and directory.

            "Brandon's Lunchbox" is a Shareware product.  It may be 
         distributed for evaluation purposes provided that all 
         programs noted in the appendix plus this documentation file 
         are distributed together.
         
             

 


         The LunchBox


         The Lunchbox programs must all exist in the current drive and 
         directory.  

         There are different offerings in the Lunchbox series.  This 
         particular module is known as "USABox".

         To begin, type "USABOX" at the DOS prompt and press enter.

         You'll see:
         



                                 -------
                                 :     : 
                        +------------------------+ 
                        :                        : 
                        :   B R A N D O N ' S    : 
                        :                        : 
                        :   L U N C H B O X      : 
                        :                        : 
                        +------------------------+ 

  
                             A   B   C   D    

                             U.S.A. Boxes

         
         The Lunchbox contains four educational games.  To select a 
         game from the lunchbox, just press one of the letters A 
         through D. 
         
         To quit the Lunchbox and return to DOS, press a "+" or the 
         Escape key. 
         
         


         
        
         Game number one -- USA 1 
         

            "USA 1" starts off with a package, a laser matter 
         transmitter, a power requirement, and a destination state on 
         a map of the United States. 

            For example, it might take "25 pellets of power" to 
         transmit a package to Oklahoma -- and you start off with zero 
         pellets!

            Every time you press the space bar, 2 power pellets are 
         added to your current power level.  You must try and match 
         the required power rating to successfully transmit the 
         package.

            When you're ready, press the "G" key to try and transmit 
         the package.  (Note:  There's no way to back up!  If you pass 
         up the required power amount ... well, you'll just have to 
         take your chances!)

            The package will successfully transmit if you're within 
         two pellets of the required amount.  You'll see the package 
         load into the transmitter, you'll hear the matter transmitter 
         warming up, you'll see and hear the laser beam transmit the 
         package across the United States ... then you'll see your 
         package appear in it's destination state!
            
            If you're over or below the two power pellet cushion, 
         you'll either fall short in the Atlantic Ocean or ... you 
         might BLOW UP the matter transmitter!  (Not to worry -- 
         there's plenty more where that came from!) 

            "USA 1" helps introduce the states of the U.S. and their 
         geographic position.  It helps little users learn to count by 
         two -- and also to watch a target value and notice when 
         you're too low or too high!  Finally, it introduces the 
         notion of vectors -- the concept that a line has a value 
         depending on its direction and length.

            Press the "+" or the Escape key to return to the Lunchbox 
         main menu. 
            
               
         


         
        
         Game number two -- USA 2 
         

            "USA 2" is identical to "USA 1" except that you count 
         pellets by fives instead of by twos.  Also, the power 
         requirements are higher (the packages are heavier!)

            "USA 2" starts off with a package, a laser matter 
         transmitter, a power requirement, and a destination state on 
         a map of the United States. 

            For example, it might take "25 pellets of power" to 
         transmit a package to Oklahoma -- and you start off with zero 
         pellets!

            Every time you press the space bar, 5 power pellets are 
         added to your current power level.  You must try and match 
         the required power rating to successfully transmit the 
         package.

            When you're ready, press the "G" key to try and transmit 
         the package.  (Note:  There's no way to back up!  If you pass 
         up the required power amount ... well, you'll just have to 
         take your chances!)

            The package will successfully transmit if you're within 
         four pellets of the required amount.  You'll see the package 
         load into the transmitter, you'll hear the matter transmitter 
         warming up, you'll see and hear the laser beam transmit the 
         package across the United States ... then you'll see your 
         package appear in it's destination state!
            
            If you're over or below the four power pellet cushion, 
         you'll either fall short in the Atlantic Ocean or ... you 
         might BLOW UP the matter transmitter!  (Not to worry -- 
         there's plenty more where that came from!) 

            "USA 2" helps introduce the states of the U.S. and their 
         geographic position.  It helps little users learn to count 
         by five -- and also to watch a target value and notice when 
         you're too low or too high!  Finally, it introduces the 
         notion of vectors -- the concept that a line has a value 
         depending on its direction and length. 

            Press the "+" or the Escape key to return to the Lunchbox 
         main menu. 
            


         
        
         Game number three -- USA 3 
         

            "USA 3" differs from "USA 1" in that YOU pick the state!
         
            When the game begins, the state of "Washington" is the 
         selected state.  Every time you press the spacebar, the 
         selected state will advance (roughly north to south, west to 
         east).  Once you get to Maine, it will cycle back to 
         Washington.

            When you're satisfied with the state, press the "G" key.  
         The game will now operate just like "USA 1".

            After you mail your package (either successfully or 
         unsuccessfully), you'll again select a state.  Your 
         beginning choice will be the state you just used.

         
         
        
         Game number four -- USA 4 
         

            "USA 4" differs from "USA 2" in that YOU pick the state!
         
            When the game begins, the state of "Washington" is the 
         selected state.  Every time you press the spacebar, the 
         selected state will advance (roughly north to south, west to 
         east).  Once you get to Maine, it will cycle back to 
         Washington.

            When you're satisfied with the state, press the "G" key.  
         The game will now operate just like "USA 2".

            After you mail your package (either successfully or 
         unsuccessfully), you'll again select a state.  Your 
         beginning choice will be the state you just used.

            
               
         




         Shareware


         This Lunchbox is part of a shareware series of educational 
         programs designed for 3 to 7 year olds.  Commercial packages 
         tend to ignore this age group.

         If you've found this program useful, then please consider 
         forwarding a $5.00 payment (or whatever amount you feel is 
         fair) to:

         Joey Robichaux
         P. O. Box 90196-199
         Baton Rouge, La. 70816

         In return, you'll receive notices of other educational 
         packages that are currently available (most for $5.00), plus 
         you'll get on the list for notice of future offerings. 

         In any case, I'd like to hear your comments -- including any 
         ideas you may have for other educational programs you'd like 
         to see.
         


         Required files
         

         This Lunchbox requires the following files:
         
         BRUN30.EXE
         USERLIB.EXE
         USABOX.EXE
         USA1.EXE
         USA2.EXE
         USA3.EXE
         USA4.EXE       

         All of these files must exist in the current drive and 
         directory to run "Lunchbox" successfully. 
         
         NOTE:  You can run the programs USA1 through USA4 in 
         standalone mode if you wish.  However, you may not distribute 
         these programs without the main Lunchbox menu program. 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1857

     Volume in drive A has no label
     Directory of A:\

    BRUN30   EXE     70680   4-07-87  10:48a
    FILE1857 TXT      2961  12-22-89  10:17a
    FILES    TXT       271   9-11-89   8:12a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   8:50a
    USA1     EXE     43696   1-01-80  12:37a
    USA2     EXE     43728   1-01-80  12:38a
    USA3     EXE     44368   1-01-80  12:38a
    USA4     EXE     44384   1-01-80  12:39a
    USABOX   DOC      9858   1-01-80  12:40a
    USABOX   EXE     21008   1-01-80  12:36a
    USERLIB  EXE      7570   1-01-80  12:12a
           12 file(s)     289102 bytes
                           26624 bytes free
