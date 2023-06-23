---
layout: page
title: "PC-SIG Diskette Library (Disk #678)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0678/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0678"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GOLDEN WOMBAT"

    Your quest is to discover the Forbidden City of the Great Lost Empire
    and unearth the mysteries it holds. Do you have a prayer of succeeding?
    
    SCORE:
    Much as in life, there is no scoring in The Golden Wombat.
    
    THE POINT:
    The point of THE GOLDEN WOMBAT OF DESTINY is destiny, itself.
    Obviously. You'll know when you've found it. Possibly.
    
    What do you think?
    
    This text adventure game can handle full-sentence commands and has a
    large vocabulary of verbs. Users with CGA are able to customize screen
    colors.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## C.TXT

{% raw %}
```
C
11
0
12
0
9
14
0
1
9
11
9
14
4
14
7
7
1
```
{% endraw %}

## FILE0678.TXT

{% raw %}
```
Disk No:  678                                                           
Disk Title: Golden Wombat                                               
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: Golden Wombat of Destiny                                 
Author Version: V1.1                                                    
Author Registration: None.                                              
Special Requirements: CGA.                                              
                                                                        
Your quest is to discover the Forbidden City of the Great Lost Empire   
and unearth the mysteries it holds.  Do you have a prayer of            
succeeding?                                                             
                                                                        
From the author:                                                        
                                                                        
SCORE:                                                                  
Much as in life, there is no scoring in The Golden Wombat.              
                                                                        
THE POINT:                                                              
The point of THE GOLDEN WOMBAT OF DESTINY is destiny, itself.           
Obviously.  You'll know when you've found it.  Possibly.                
                                                                        
What do you think?                                                      
                                                                        
This text adventure game can handle full-sentence commands and has a    
large vocabulary of verbs. CGA is required to customize the             
screen presentation and text.                                           
                                                                        
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
║             <<<<  Disk #678 Golden Wombat of Destiny  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start using the program, type:  README  (press enter)                ║  
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.
```
{% endraw %}

## READ.TXT

{% raw %}
```

     ╔═════════════════════════════════════════════════════════════╗
     ║  ╔═══════════════════════════════════════════════════════╗  ║
     ║  ║                                                       ║  ║
     ║  ║             THE GOLDEN WOMBAT OF DESTINY              ║  ║
     ║  ║                                                       ║  ║
     ║  ╚═══════════════════════════════════════════════════════╝  ║
     ╚═════════════════════════════════════════════════════════════╝


                      The file you are reading at
                      present is called Read.txt
                      It contains the latest notes
                      and information on the game.

                      ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
                      CURRENT VERSION:      << 1.2 >>
                      ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

 *  N.B.: these notes supersede all notes both in the manual and in the  *
 *        opening window of the game. If there are any vocabulary        *
 *        updates they will be noted here.                               *

                 The Main 'Manual' is called  WOMBAT.MAN
                        Print it out by entering:
                          Copy Wombat.Man prn:

                   I suggest that you glance at the manual
                   before playing the game, but if you'd
                   prefer not to, then the game may be started
                   by typing (at the DOS prompt):    Wombat

    <<New Features>>
    The game is basically the same as in previous versions. However,
    it now loads completely into memory so it is faster in operation.
    Also, the text file reader, Read.Exe, replaces Read.Com. (Big deal!)

    Please note: although the Wombat requires a graphics card, it
    does not require a colour monitor! Many PD journals have claimed
    that a colour monitor is needed just because I allow you to alter
    the colours to taste. In fact, if you have a mono monitor you can
    still use the Setup program to adjust screen colours or tones.

    For users with a text-only display or an incompatible graphics card, I
    have also provided an option to run the game in pure text mode. This
    should work OK, I hope - but since I haven't got a PC without a CGA,
    I can't swear to it...

    Incidentally, I've included an alternative colour setup file
    for users with colour monitors. Just copy it to Colours.txt
    by entering the command: Copy C.txt Colours.txt


    << * Please Note... * >>
        If you haven't read the manual, you should at least glance
    through it now for notes on the SAVE and RESTORE feature when
    used in conjunction with Memory Resident Programs. If you
    want to adjust the screen colours, you should run the SetUp program.
    Enter the word: Setup at the Dos prompt.


    << Bugs....??? >>                                ................ugh!

    While I've done all I can to eliminate bugs, 'The Golden Wombat' has
    not undergone months of rigorous testing by an army of
    dedicated gnomes. I cannot, therefore, guarantee that it will
    behave itself properly under all possible circumstances.

    If you should encounter any problems, make sure you have read
    the manual for suggestions and advice.

    If the game 'mysteriously' doesn't behave as it should - turn
    your computer off, mutter dark incantations against me, turn
    the computer on again. Load the Wombat 'clean' ( no other
    programs lurking around ), and try again. You are probably
    thinking to yourself that this is just the kind of feeble and
    mind-rottingly unhelpful advice that some of the bigger
    'software houses' never bother to provide, aren't you....
    It's all part of the service, folks.

    << A Checklist of the files on this disc >>

    This is a full directory ( not including the file
    you are currently reading, which is called 'Read.Txt' ):

    WOMBAT   EXE   174832
    R        DAT     1008
    O        DAT     1000
    T        DAT     1000
    REC      DAT     1532
    C        TXT       60
    WOMBAT   MAN    29165
    SETUP    COM    22893
    README   BAT      812
    READ     EXE    35730


  << Seasoned Wombatters >>
  Read Manual for notes of bug-fixes ( ...er, I mean 'enhancements' )

  << Etc... >>
  To quit the game, type 'Q' (then 'Y' when asked to).
  Do not use the 'Break' or 'Control-C' key. These keys will not
  quit the game.

  The END is Nigh....? ( maybe )
  To comfort anyone who feels unhappy that there is no score in The
  Golden Wombat, here is a short and helpful note to help you know when
  you've arrived at the game's conclusion...

  If you are in any doubt, you're still not there... OK...?


 Note that the game is not shareware. It is purely public domain. That
 means that if you like it a lot and want to pay me money to 'register',
 too bad - you can't. The game is free. If you enjoy it, you are in luck.
 If you don't - well, tough...

 Since I don't make any money from the game, you may feel well and truly
 ripped off by any club or organisation which has charged you much more
 than the cost of a floppy disk, packaging and postage plus an acceptably
 small profit for themselves. I suggest complaining to any such organisation, 
 and writing stiff letters to PC magazines if you get no satisfaction. 
 Alternatively, you could take a  crash course in Aikido (I recommend 
 Ki Aikido myself... since that's what I do most of the time when I'm not 
 messing about with mysterious quests for small Antipodean animals 
 - but that's another story.)

 Special thanks to Sean Casey for testing and John Kozak who suggested the
 name of the game over the third pint one fateful night...



 Good wombatting...

 Huw




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0678

     Volume in drive A has no label
     Directory of A:\

    C        TXT        60  11-03-88  12:02p
    O        DAT      1000   1-31-87  12:47p
    R        DAT      1008   1-01-84   6:15p
    READ     EXE     35750  12-16-88   8:51p
    READ     TXT      5893  11-03-88  12:42p
    README   BAT       812  11-03-88  11:53a
    REC      DAT      1532   1-31-87  12:43p
    SETUP    COM     22893   5-29-87   5:07p
    T        DAT      1000   1-31-87  12:43p
    VER    1 2          38   1-09-90   1:34p
    WOMBAT   EXE    174832   4-19-88   8:07a
    WOMBAT   MAN     29166  11-03-88  12:11p
    GO       BAT        28  11-27-86  12:31p
    GO       TXT       577   7-06-90   1:28a
    FILE0678 TXT      2443   7-09-90   6:23p
           15 file(s)     277032 bytes
                           38912 bytes free
