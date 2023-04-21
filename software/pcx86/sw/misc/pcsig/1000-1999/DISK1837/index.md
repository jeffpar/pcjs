---
layout: page
title: "PC-SIG Diskette Library (Disk #1837)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1837/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1837"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLASHBOX"

    FLASHBOX is part of the Brandon's Lunchbox series of educational
    programs for children, ages 3-7. FLASHBOX is a set of reading and
    memory drills. Each module contains 20 recommended "sight" words for
    pre-primer through first grade. These drills can be monitored or
    played alone.
    
    Four boxes (numbered 1, 2, 3, and 4) flash on the screen. Each box
    covers a word. One at a time, a box vanishes for two seconds,
    revealing the word underneath. The player then receives a word on the
    bottom of the screen. This word matches one of the words behind the
    boxes. The player must guess which box hides the matching word.
    
    When all four boxes disappear, the drill "trills" and colors flash on
    the screen. The four boxes reappear, with four new words -- one behind
    each box. Once the fifth screen of words is matched, the drill breaks
    away to a Mardi Gras parade!
    
    The timing loops in the programs are based for the standard 4.7 Mhz PC
    processor. If you're using a faster machine, you may wish to place
    your machine in "slow" mode or use a slowing program such as PC-SIG disk
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1837.TXT

{% raw %}
```
Disk No: 1837                                                           
Disk Title: FlashBox                                                    
PC-SIG Version: SA                                                      
                                                                        
Program Title: FlashBox                                                 
Author Version: 1.0                                                     
Author Registration: $5.00                                              
Special Requirements: CGA.                                              
                                                                        
FLASHBOX is part of the Brandon's Lunchbox series of educational        
programs for 3 to 7 year olds.  FLASHBOX is a set of reading and memory 
drills.  Each module contains 20 recommended "sight" words for pre-     
primer through first grade.  These drills can be monitored or they can  
be played alone.                                                        
                                                                        
Four boxes (numbered 1, 2, 3, and 4) flash on the screen.  Each box     
covers a word.  One at a time, each box vanishes for two seconds,       
revealing the word underneath.  The player then receives a word on the  
bottom of the screen.  This word matches one of the words behind the    
boxes.  The player must guess which box hides the matching word.        
                                                                        
When all four boxes disappear, the drill "trills" and colors flash on   
the screen.  The four boxes reappear, with four new words -- one behind 
each box.  Once the fifth screen of words is matched, the drill breaks  
away to a Mardi Gras parade!                                            
                                                                        
The timing loops in the programs are based for the standard 4.7 Mhz PC  
processor.  If you're using a faster machine, you may wish to place your
machine in "slow" mode or use a slowing program available from PC-SIG.  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FLASHBOX.DOC

{% raw %}
```






                        Brandon's Lunchbox (Flashing Boxes)

                                  a series of
                             educational programs
                             for 3 to 7 year olds


                            @ 1989, Joey Robichaux 
                               P. O . Box 91016-199
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
         particular module is known as "FlashBox".

         To begin, type "FLASHBOX" at the DOS prompt and press enter.

                (NOTE: This version of the Lunchbox is 
                customized to display a child's name.  Simply 
                supply the child's name as a parameter.  For 
                example, "FLASHBOX MARY" or "FLASHBOX ALEX".)

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

                            Flashing Boxes

         
         The Lunchbox contains four educational games.  To select a 
         game from the lunchbox, just press one of the letters A 
         through D. 
         
         To quit the Lunchbox and return to DOS, press a "+" or the 
         Escape key. 
         
         


         
        
         Games number one through four -- Games A through D 
         
         
         The "FlashBox" series is a set of reading and memory drills.
         Each module contains 20 recommended "sight" words for pre-
         primer through first grade.  These drills can be monitored 
         or they can be played alone. 

         Four boxes (numbered 1, 2, 3, and 4) flash on the screen.
         Each box covers a word.  One at a time, each box vanishes for 
         two seconds, revealing the word underneath.

         The player then receives a word on the bottom of the screen.  
         This word matches one of the words behind the boxes.  The 
         player must guess which box hides the matching word. 

         The player presses a number from 1 through 4.  The matching 
         box vanishes and reveals its word.  

         If the words do not match, the computer buzzes and the box is 
         replaced.  The drill chooses a new word for the player to 
         match (although it may be the same word).

         If the words match, a siren wails for a moment.  Both words 
         display for two seconds.  Then both words disappear.  The 
         vanished box is NOT replaced.  The drill chooses a new word 
         for the player to match.

         In this manner, each of the four boxes vanishes as the player 
         successfully matches words.

         When all four boxes disappear, the drill "trills" and colors 
         flash on the screen.  The four boxes reappear, with four new 
         words -- one behind each box.  The game continues as above. 

         Each time the player clears the screen of boxes, a "ticky" 
         mark appears on the screen.  There are twenty words to match.  
         The player matches four words per screen.  Therefore, the 
         player must clear five screens to match all of the words.  
         The "ticky" marks help keep track of how many words remain.

         Once the fifth screen of words is matched, the drill breaks 
         away to a Mardi Gras parade!  

         After the parade, the drill begins again with the twenty 
         words.

         At any time, press the "+" or the Escape key instead of a 
         number key to return to the Lunchbox menu. 






         Shareware


         This Lunchbox is part of a shareware series of educational 
         programs designed for 3 to 7 year olds.  Commercial packages 
         tend to ignore this age group.

         If you've found this program useful, then please consider 
         forwarding a $5.00 payment (or whatever amount you feel is 
         fair) to:

         Joey Robichaux
         P. O. Box 91016-199
         Baton Rouge, La. 70816

         In return, you'll receive notices of other educational 
         packages that are currently available (most for $5.00), plus 
         you'll get on the list for notice of future offerings. 

         In any case, I'd like to hear your comments -- including any 
         ideas you may have for other educational programs you'd like 
         to see.



         



         Appendix -- Required files



         This Lunchbox requires the following files:


         BRUN30.EXE
         USERLIB.EXE
         FLASHBOX.EXE
         BOXFLSH1.EXE
         BOXFLSH2.EXE
         BOXFLSH3.EXE
         BOXFLSH4.EXE
         

         All of these files must exist in the current drive and 
         directory to run "Lunchbox" successfully. 


         NOTE:  You can run the programs BOXFLSH1 through BOXFLSH4 in 
         standalone mode if you wish.  However, you may not distribute 
         these programs without the main Lunchbox menu program. 





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1837

     Volume in drive A has no label
     Directory of A:\

    BOXFLSH1 EXE     44992   1-01-80  12:31a
    BOXFLSH2 EXE     40576   1-01-80  12:31a
    BOXFLSH3 EXE     39408   1-01-80  12:32a
    BOXFLSH4 EXE     43072   1-01-80  12:33a
    BRUN30   EXE     70680   4-07-87  10:48a
    FILE1837 TXT      2591  12-22-89   3:20p
    FLASHBOX DOC      6531   1-01-80  12:20a
    FLASHBOX EXE     21136   1-01-80  12:23a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   3:11a
    USERLIB  EXE      7570   1-01-80  12:12a
           11 file(s)     277134 bytes
                           38912 bytes free
