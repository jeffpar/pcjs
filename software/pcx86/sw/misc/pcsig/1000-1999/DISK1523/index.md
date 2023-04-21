---
layout: page
title: "PC-SIG Diskette Library (Disk #1523)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1523/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1523"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "A_CURSE AND MORE"

    Cursed PC!  More than an epithet, A_CURSE is a practical joke program
    that causes the victim's computer to start spouting macabre curses,
    such as, "May a one-eyed pigeon nest in your hard drive!"  "May
    raunchy pitbulls kidnap your spreadsheet!"
    
    A_CURSE displays up to ten random curses on your chosen one's
    screen.  Each one is different (with millions of possible
    combinations) and they vary from the absurd to the disgusting.
    What a way to start the day!
    
    This delightful Othello-like game was created as a college class
    project.  Well designed and speedy, it was written in Turbo Pascal.
    Fortunately, the students made the source code available as part of the
    package for those interested in programming.  With four skill levels,
    the game permits up to four players.  Othello devotees will find the
    computer is generally a mite smarter than expected when it comes to
    outflanking their squares.  The game works well on both color and
    monochrome displays.
    
    ASTEROID FIELD BATTLE is a challenging battle against the dreaded
    Electronians within the confines of a computer screen.
    
    Your ship is trapped inside an electro-barrier and the Electronians are
    hunting you down.  Your sole defenses are a limited force field, a short
    range laser, and several asteroids also trapped in the barrier which can
    be used to pick off the enemy ships.
    
    This game can be played with or without a joystick.  There are five
    levels of play, but the speed is CPU clock dependent so faster hardware
    may need to be reset to play.  Beware!  As with any zap'em game, this
    one is highly addictive.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AFB.TXT

{% raw %}
```


                Asteroid Field Battle

    While on a deep space patrol, you are suddenly 
attacked by the dreaded Electronians. They have 
thrown a large electro-barrier around a sector of 
space, trapping your ship inside. If your ship 
touches this field, your ship will explode. Their 
ships, however, can pass through the field unharmed, 
and they are coming to get you. You have a laser for 
defense, but it has the same range as the enemy's 
electro-bolts. In any direct combat, therefore, you 
will probably receive about as many hits as you 
score. Your ship does have a force field which can 
withstand 25 hits by the electro-bolts, but after 
that a single hit will destroy you.
    There is another strategy you can use. Bouncing 
around in the electro-barrier are four asteroids. 
Because of a design flaw in the enemy radar, they 
can only detect metal objects such as your ship and 
their own ships. They cannot see the asteroids. You 
may therefore be able to maneuver them into 
colliding with the asteroids as they chase you. 
Between your lasers and the asteroids, you must try 
to destroy as many enemy ships as you can.
Running the Program
    To run the program, type AFB and press ENTER 
(RETURN on some keyboards). The program will display 
a title page and ask if you want to load previous 
scores. If you have played the game before and saved 
the scores and want to compete against these scores, 
press Y. The score file (AFBSCORE) must be on the 
disk in the default drive.
    Next, the program will ask if you want to use a 
joystick. If you press Y, the program will then ask 
which joystick, A or B, to use. You make a choice by 
pressing 1 or 2 on your keyboard. The joystick 
should be in the centered position when you make 
this choice to allow the program to calibrate it.
    If you play the game with joysticks, you point 
your ship on the screen by moving the joystick up, 
down, right, left, or diagonally and holding it 
until the ship changes direction. Once the ship has 
changed direction, you may release the joystick to 
the centered position and the ship will maintain 
that direction. You fire the laser by pressing any 
of the joystick's buttons and holding it down until 
the laser fires.
    If you are not playing by joystick, you may 
control the ship with the keys in the number keypad. 
The ship will move in the direction on the screen 
that a number has in relation to the 5 key. For 
example, pressing 8 causes the ship to move up, 
while pressing 3 causes it to move diagonally down 
and to the right. If your computer has the cursor 
keys and the Home, End, Pg Up and Pg Dn keys on the 
number keypad, this will work whether the Num Lock 
key is on or off. If your computer does not, 
activate the Num Lock key before you start the game. 
You fire the laser by pressing the space bar. You do 
not need to hold down the number key or space bar 
once you have pressed it. If fact, it is better if 
you don't.
    After you choose whether you want to use a 
joystick, the computer will ask you what speed level 
to play at. You choose a number from 1 to 5, where 5 
is the fastest. The game will then begin. You will 
see the electro-barrier, your ship, and the 
asteroids. The enemy ships will soon start coming 
through the barrier. The computer will display your 
score and force field strength at the 
bottom of the screen.
    The game continues until your ship is destroyed 
by collision with the barrier, an asteroid, or an 
enemy ship, or by repeated electro-bolt blasts. The 
computer will display the scoreboard and your score. 
If your score is high enough to be put on the 
scoreboard, the computer will ask for your name. 
Type your name or initials and press ENTER. The 
computer will add your name and score to the 
scoreboard. If your name was the last name entered 
into the scoreboard, you can enter your name by just 
pressing ENTER.
    The computer will then ask if you want to play 
again. If you press Y, the game repeats, starting 
with asking what speed level you want. If you press 
N, the computer will ask if you want to save your 
scores. If you press Y, the program will save the 
information on the scoreboard in a file on the disk 
in the default drive. The program then ends.
```
{% endraw %}

## FILE1523.TXT

{% raw %}
```
Disk No: 1523                                                           
Disk Title: A_Curse and More                                            
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: A_Curse                                                  
Author Version: 1.1                                                     
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
Cursed PC!  More than an epithet, A_CURSE is a practical joke program   
that causes the victim's computer to start spouting macabre curses,     
such as, "May a one-eyed pigeon nest in your hard drive!"  "May         
raunchy pitbulls kidnap your spreadsheet!"                              
                                                                        
A_CURSE displays up to ten random curses on your chosen one's           
screen.  Each one is different (with millions of possible               
combinations) and they vary from the absurd to the disgusting.          
What a way to start the day!                                            
Program Title: OTH                                                      
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
This delightful Othello-like game was created as a college class        
project.  Well designed and speedy, it was written in Turbo Pascal.     
Fortunately, the students made the source code available as part of the 
package for those interested in programming.  With four skill levels,   
the game permits up to four players.  Othello devotees will find the    
computer is generally a mite smarter than expected when it comes to     
outflanking their squares.  The game works well on both color and       
monochrome displays.                                                    
Program Title: Asteroid Field Battle                                    
Author Registration: None.                                              
Special Requirements: CGA.                                              
                                                                        
ASTEROID FIELD BATTLE is a challenging battle against the dreaded       
Electronians within the confines of a computer screen.                  
                                                                        
Your ship is trapped inside an electro-barrier and the Electronians are 
hunting you down.  Your sole defenses are a limited force field, a short
range laser, and several asteroids also trapped in the barrier which can
be used to pick off the enemy ships.                                    
                                                                        
This game can be played with or without a joystick.  There are five     
levels of play, but the speed is CPU clock dependent so faster hardware 
may need to be reset to play.  Beware!  As with any zap'em game, this   
one is highly addictive.                                                
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## OTH.TXT

{% raw %}
```
OTH.EXE   Compiled Othello game program.
OTH.PAS   Turbo Pascal 4.0 source code for above game.

This is a simple version of the othello game.  It was created as a 
class project at Eastern Illinois University, Charleston, 
Illinois.  It is given to public domain for the enjoyment of 
users, but mainly for a programming example where others may need 
a reference for similar projects.  There are minor bugs in the 
program and it could have been written more efficiently, but it 
does present some of the feature of the Pascal language.

Enjoy.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1523

     Volume in drive A has no label
     Directory of A:\

    README2  BAT      2432  10-07-90   4:23a
    A_CURSE2 EXE     67123  10-07-90   3:55a
    GO       BAT        38   7-14-89   8:01a
    GO       TXT       925  10-21-89  12:17p
    FILE1523 TXT      3849  10-17-90   8:21a
    AFB      EXE     68152   4-08-88   1:07p
    AFB      TXT      4361   1-16-89  11:49a
    OTH      BAK     54947   1-01-80  12:17a
    OTH      EXE     22016   1-01-80  12:08a
    OTH      PAS     54947   1-01-80  12:22a
    OTH      TXT      1024   1-01-80  12:09a
           11 file(s)     279814 bytes
                           37888 bytes free
