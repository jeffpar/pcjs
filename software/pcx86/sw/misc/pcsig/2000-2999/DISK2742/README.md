---
layout: page
title: "PC-SIG Diskette Library (Disk #2742)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2742/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2742"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2742.TXT

{% raw %}
```
Disk No: 2742                                                           
Disk Title: The Case of Crime to the Ninth Power                        
PC-SIG Version: S1                                                      
                                                                        
Program Title: The Case of Crime to the Ninth Power                     
Author Version: 1.5                                                     
Author Registration: $10.00                                             
Special Requirements: 384K RAM.                                         
                                                                        
Presenting THE ADVENTURE TOOLKIT's (PC-SIG #1230 & #1231) 1990 text game
contest winner.  THE CASE OF CRIME TO THE NINTH POWER is the first in a 
planned series featuring Cliff Diver, a hard-boiled, ex-cop private eye 
who lives and works in San Francisco.                                   
                                                                        
You must help Cliff escape from the Zamboni crime family's secret       
headquarters.  Along the way, you and Cliff will face snarling          
Dobermans, two of Zamboni's goons (named Flash and Bonzo), and many     
other twists and turns.  A captivating mystery to solve.                
                                                                        
The game features a 400+-word vocabulary, a pop-up Help system, and a   
Save/Restore feature that should be used often.                         
                                                                        
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
║    <<<<  PC-SIG Disk #2742 THE CASE OF CRIME TO THE NINTH POWER  >>>>   ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To start the program, type: CLIFF   (press Enter)                      ║
║                                                                         ║
║  To print documentation, type: COPY HANDBOOK.DOC PRN   (press Enter)    ║
║                                                                         ║
║                                                                         ║
║                                        (c) Copyright 1991, PC-SIG Inc.  ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
                              .
```
{% endraw %}

## HANDBOOK.DOC

{% raw %}
```

  The Private Investigator's Handbook

  Section 1: Introductions are definitely in order.

  Hello, my name is Patrick Farley. I wish to welcome you to this, my first
  attempt at computerized interactive fiction; an adventure novel entitled,
  "Crime to the Ninth Power." In this game, you'll be introduced to a char-
  acter named Cliff Diver; a private investigator living and working in San
  Francisco. I hope you and your friends will enjoy playing this as much as
  I enjoyed writing it. Thank you.

  Section II: Now then ... Are there any questions?

    Yes sir. What type of system is required to run your adventure?

  Cliff Diver is designed to be run on an IBM PC-compatable computer with at
  least 384 K of memory, MS-DOS 2.1 or later, and at least 1 disk drive. The
  system doesn't require any advanced graphics and will adjust its output to
  best suit whatever monitor you choose.

    Sir, how do I go about introducing Cliff Diver to my computer?

  Because it's constantly active and able to provide increased access time, a
  hard disk installation is recommended. If your system hasn't been outfitted
  with a hard disk drive, the program can be run from a single floppy disk.

  Please consult your DOS manual for procedures used in creating and maintain-
  ing hard disk directories and for the correct form of DOS COPY/DISKCOPY com-
  mands that are appropriate for your particular system.


  The following files are required for running Cliff Diver (approx. 70k)
    CLIFF   .BAT    A batch file used to begin the program
    CLIFF   .D$$    Encrypted game data
    CLIFF   .DA1       '''     ''   ''
    CLIFF   .DA2       '''     ''   ''
    CLIFF   .DA3       '''     ''   ''
    CLIFF   .DA4       '''     ''   ''
    CLIFF   .DA5       '''     ''   ''
    CLIFF   .INS    A few notes on the game (this file can be printed)
    CLIFF   .TTL    The game's title in billboard format
    IRUN    .EXE    Adventure Game Toolkit's runtime "engine"


    Pardon me, Sir. After doing all that, how do I run Cliff Diver?

  If you've installed the program to a hard disk, move to the sub-directory
  containing the Cliff Diver files. Once there, run the batch file by enter-
  ing  CLIFF  [return]. The file calls the runtime program and the game, as
  they say, will be underway.

  Floppy disk users can simply insert the disk into an appropriate drive and
  run the batch file above. The game will appear sluggish while it's reading
  information from the "on-demand" floppy drive.

    I've heard the word "shareware" quite a bit, sir. Just what is that?

  Shareware is copyrighted software distributed at minimal cost. Because you
  can "try before you buy", it's easy to find programs that fit your needs.
  Shareware authors release their programs with an element of trust, expec-
  ting payment if the program's used regularly. Because expensive marketing
  costs are eliminated, you'll wind up saving money with Shareware instead
  of commercial software.



    Sounds like a good idea, Sir. How do I go about registering my copy?

  At the end of this document is a registration form designed to simplify the
  task of registering. There is a reason I produced this form the way I did.
  When a customer sends me registration, I send them a thank-you letter. It's
  one thing to send a letter to a wrong address, it's quite another thing to
  spell the person's name incorrectly. That's the reason for the ONE PRINTED
  LETTER PER SQUARE format.

  Your information is entered into my customer database. And before you turn
  up your nose and roundfile this and my form, let me assure you that I will
  not release your name to any marketing firm. You will not receive a mailer
  for photo processing or catalogs schleping the latest yuppie gadgets.

    Uh-huh. So you're saying there are benefits to my registration?

  If you should find yourself in a spot you can't get out of, you can write
  to me for assistance. You can also request printed maps of the adventure.
  You can also-- No wait, I don't want to reveal that just yet. It's enough
  to say that there's something on the back burner that will prove to be of
  interest to Cliff Diver's fans, but only those who have registered.

    Excuse me, sir. You say your adventure takes place in San Francisco.
      Should I be familar with that city's layout before I play this?

  I had several maps of the city to refer to while I was writing this so I
  could make reference to streets and landmarks. I'm not sure if any build-
  ing I wrote into the game is standing at the address or location I gave.

  In fact, I should be telling you that...

    ANY SIMILARITY TO ANY PERSON, LIVING OR DEAD, OR TO ANY BUILDING OR
    LANDMARK, PAST OR PRESENT, SHOULD BE CONSIDERED PURELY COINCIDENTAL.

  (phew!) I hope that clears at least one problem up.

  Knowing your way around would certainly be an advantage in playing my game.
  Cliff may talk about something down by the waterfront, and you may remember
  driving along the waterfront. But as to going there and trying to find the
  building Cliff mentioned, I don't think you'll have a lot of luck.

  I think that about covers any questions. If you have any others, please
  write to me. Right now I want to move on to...


  Section C: Acknowledging those people who helped me produce this game.

  It's traditional for an author to dedicate his first work to his mother.
  So, Dorothy, thank you for having faith in me and for silently telling me,
  "Don't give up ... Come on ... You can do it." I also wish to thank...

  The Staff at Softworks: David Malmberg along with his partner Mark Welch,
  produced the Adventure Game Toolkit. Their compiler sweated out the pro-
  gram for me, taking all my descriptive files and producing the necessary
  game files. A note of thanks goes to...

  Charles Viescas, my part-time logic consultant, who helped me get Cliff
  over a number of difficult logic hurdles. And, finally...

  Phil Staudinger; my close friend and game beta-tester, who was always
  there and asking, "Why does that do this when I do that and not this?"





  I would also like to thank you, but, of course I can't do that just yet.
  I hope I'll be able to very soon. I welcome letters from users, whether
  they're registered or not (the users, of course, not the-- never mind).


      My mailing address is: Patrick Farley
                             1751 13th Street
                             Los Osos, CA. 93402
  Please be sure to include: ATTN: Cliff Diver


  Oh, one more thing. A note of special interest to Adventure Game Toolkit
  programmers and AGT text adventure players.

  Traditionally, adventure games created under AGT were run in their final
  state by a runtime engine called RUN. The syntax RUN reflected a fantasy
  adventure format that featured you, the player, directing you, the char-
  acter. Responses to commands such as GET THE BOOK would be, "You get the
  book." or "You do not see a book." Creatures encountered (and attacked)
  during the course of a game (ie Dragons, Orcs, Elves, etc.) would die in
  horrible agony and disappear in huge puffs of foul green or orange smoke.

  I chose not to write adventure fantasy, but reality. The problem was that
  the syntax was etched in stone and couldn't be changed. Writing to Soft-
  works, I explained my problems to David, who took an interest in this new
  adventure angle. With David's permission and my trusty editor, I sat down
  to change RUN's syntax from one of YDY, or You Directing You, to YDSE, or
  You Directing Someone Else.

  I altered the way AGT speaks. It still plays the way it always did. Oh, I
  did soften the way things die. In reality, death wouldn't occur in a puff
  of smoke.

  Sending the changes to AGT, David verified them, re-compiled the files and
  christened the new format IRUN. This is the runtime program I've included
  with Cliff Diver. If you understand that Cliff's talking to you while you
  are directing him by remote computer control, you should have no problems.
  If you do have problems, write to me. I can recommend someone who'll help
  you for just $45 down and $45 dollar an hour - no house calls or multiple
  personalities, please.


 SHAREWARE REGISTRATION FOR Cliff Diver: The Case Of Crime To The Ninth Power
 Suggested Registration: $10.00   User Serial No.: C D __ __ __ __ __ __ __
 ***   ***   ***   ***   ***   ***    ***    ***   ***   ***   ***   ***   ***
          For office records  : : :  Please Do Not Write In This Area
 Posting:  __ __ - __ __ - 1 9 __ __
 _____________________________________________________________________________

  First Name:   __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __
   Last Name:   __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __
     Address:   __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __
                __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __

 Apartment #:   __ __ __ __ __ __ __ __ __ __ __   M/F:   __   Age:   __ __
        City:   __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __
       State:   __ __  ... or, if you're writing internationally ...
     Country:   __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __
 Postal code:   __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __


 Now, please tell me how you happen to come by your copy of my program?

               __ I saw it advertised in a ShareWare/PD catalog.
 Which one?:   __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __

               __ I saw it in the disk files of a Pc-User's Group.
 Which one?:   __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __

               __ I downloaded it from a Computer Bulletin Board System.
 Which one?:   __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __

               __ I received it from a friend (no need to tell me which one)
 _____________________________________________________________________________
  Please complete this form and return it with fee (personal check preferred)
  to... Patrick Farley
        1751 13th. Street
        Los Osos, CA 93402
        ATTN: Cliff Diver

  Thank you. Your support of Shareware programming is appreciated.

  (the remainder of this form may be used for your comments or suggestions...)

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2742

     Volume in drive A has no label
     Directory of A:\

    CLIFF    INS      3256   6-10-88  10:30p
    CLIFF    TTL       460   6-10-88  10:30p
    CLIFF    D$$    120042   6-10-88  10:30p
    CLIFF    DA1     13244   6-10-88  10:30p
    CLIFF    DA2     19662   6-10-88  10:30p
    CLIFF    DA3     23584   6-10-88  10:30p
    CLIFF    DA4       912   6-10-88  10:30p
    CLIFF    DA5     11004   6-10-88  10:30p
    IRUN     EXE    129066  11-21-89   1:18p
    CLIFF    BAT        13   6-10-88  10:30p
    HANDBOOK DOC     10564   6-25-91   8:52a
    GO       BAT        28  10-04-90   5:21a
    GO       TXT       958   7-08-91   8:43a
    FILE2742 TXT      1999   8-08-91   8:36a
           14 file(s)     334792 bytes
                           19456 bytes free
