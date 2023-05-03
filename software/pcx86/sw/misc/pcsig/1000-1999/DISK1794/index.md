---
layout: page
title: "PC-SIG Diskette Library (Disk #1794)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1794/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1794"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VARI-TALE"

    VARITALE is a "branching authoring system" designed to run either
    locally on your computer screen, or as a "door" on BBS systems such as
    PCBoard, RBBS, NoChange, Fido, ROS, Sapphire, and so on.
    
    You will be able to write stories (known in VARITALE as "books") that
    have alternate chapters. At any point, there is always an alternative.
    In VARITALE, each step (known in VARITALE as "chapters") can be up to 50
    lines long. After each step, there can be up to 5 alternative chapters.
    
    This allows you and other people to create "story-rounds," in which
    everybody contributes chapters to the tale. Story-rounds are quite
    popular on BBS systems, but there is a problem: somebody will take the
    story in the wrong direction, and the other writers get annoyed. And
    that is the end of that story.
    
    With VARITALE, the writers can propose alternate chapters, either in
    response to an inappropriate effort by another writer, or simply to
    explore a different facet of the story. This version is limited to
    three books.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1794.TXT

{% raw %}
```
Disk No: 1794                                                           
Disk Title: Vari-Tale                                                   
PC-SIG Version: S1                                                      
                                                                        
Program Title: Vari-Tale                                                
Author Version: C1.01                                                   
Author Registration: $10.00                                             
Special Requirements: None.                                             
                                                                        
VARITALE is a "branching authoring system", designed to run either      
locally on your computer screen, or as a "Door" on BBS systems such as  
PCBoard, RBBS, NoChange, Fido, ROS, Sapphire and so on.                 
                                                                        
You will be able to write stories (known in VARITALE as "books") that   
have alternate chapters.  At any point, there is always an alternative. 
In VARITALE, each step (known in VARITALE as "chapters") can be up to 50
lines long.  After each step, there can be up to 5 alternatives.        
                                                                        
This allows you and other people to create "story-rounds", in which     
everybody contributes chapters to the tale.  Story-rounds are quite     
popular on BBS systems, but there is a problem: somebody will take the  
story in the wrong direction, and the other writers get annoyed.  And   
that is the end of that story.                                          
                                                                        
With VARITALE, the writers can propose alternate chapters, either in    
response to an inappropriate effort by another writer, or simply to     
explore a different facet of the story.  This version is limited to     
three books.                                                            
                                                                        
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
║                 <<<<  Disk #1794  VARI-TALE  >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program, type: VARITALE                                        ║
║                                                                         ║
║ To print documentation, type: COPY MANUAL.DOC PRN                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```









                        THE VARITALE AUTHORING SYSTEM

                                Release: C1.01








                              Operator's Manual

                             Autumn 1989 Edition







                      P I N N A C L E   S O F T W A R E

                      P.O. Box 386, Town of Mount Royal
                      Montreal, Quebec, Canada  H3P 3C6

                                (514) 345-9578










































                                   NOTICES

This  publication  could  include  technical  inaccuracies  or  typographical
errors.

Changes are periodically made  to the information herein; these  changes will
be incorporated in new editions of this publication.

Requests for  copies of this product and  for technical information about the
system should be  made to your authorized  VariTale dealer or to  the address
indicated in the licensing agreement.

The VariTale product is Copyright (C) 1987 by Pinnacle Software.


Upgrades and Support

Registered  users of this  product are entitled  to call us  for support, and
will receive news of updates, bug reports, and special discounts for Pinnacle
Software products.

This support  arrangement will  remain in  effect for  one year,  and may  be
renewed each year for $10.


Private Information

The information contained in  this manual is intended  only for operators  of
VariTale  installations.   You are requested  to keep  it private.   Under no
circumstances may this manual be copied in any way.


Dedication

(From Timothy Campbell, creator of VariTale)

The inspiration  for VariTale  came from  many sources,  but one  significant
influence was  the HyperText system proposed  by computer guru  Ted Nelson in
his book "Computer  Lib/Dream Machines".  If you haven't read  it, you owe it
to yourself to get your hands on a copy.  Whence the sequel, Ted? 

Note,  though, that  VariTale is  not  HyperText and  makes no  claim  to be.
Everything is deeply intertwingled, but some things more so than others.






ii













NOTICES . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  ii
     Upgrades and Support
     Private Information
     Dedication

WHAT IS VARITALE? . . . . . . . . . . . . . . . . . . . . . . . . . . . .   1

INSTALLING VARITALE . . . . . . . . . . . . . . . . . . . . . . . . . . .   2
     What You Need
     Installation Steps
     Getting Things Rolling

DOOR OPERATION  . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   3

MULTI-USER OPERATION  . . . . . . . . . . . . . . . . . . . . . . . . . .   4
     File Locking
     The Unique File-locking Tag
     Single-Processor Operation
     LAN Operation

MAINTENANCE . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .   6
     Backups
     Librarian Commands
     BURN
     CLOSE
     RENAME
     Why Show the Commands?

























                                                                          iii












                              WHAT IS VARITALE?

VariTale is a "branching authoring system", designed to run either locally on
your computer screen, or  as a "Door" on  BBS systems such as PCBoard,  RBBS,
NoChange, Fido, ROS, Sapphire and so on.

You will be  able to write stories  (known in VariTale as  "books") that have
alternate chapters.  Here is an example of a branching tale:


        .---------------- I woke up -----------------.
        :                                            :
.------ I went back to sleep ----.              .--- I made breakfast ---.
:                                :              :                        :
I dreamed up a new program   I had no dreams    It was bad     It was good


At any point, there is always an alternative.   In VariTale, each step (known
in VariTale as  "chapters") can be  up to 50  lines long.   After each  step,
there can be up to 5 alternatives.

This allows you and other people to create "story-rounds", in which everybody
contributes chapters to  the tale.   Story-rounds  are quite  popular on  BBS
systems, but there is  a problem:  somebody will take the  story in the wrong
direction,  and the other writers get  annoyed.  And that  is the end of that
story.

With VariTale, the writers can propose alternate chapters, either in response
to an  inappropriate effort by  another writer, or  simply to explore  a dif-
ferent facet of the story.























                                                                            1












                             INSTALLING VARITALE


What You Need

VariTale is very easy  to install.  It will  run under MS- or PC-DOS  Version
2.00 and higher, on any 128K IBM-PC or compatible.  

VariTale  should be run  on a  hard disk  if you expect  any kind  of serious
traffic  on the  program.   Its  file-handling is  quite  efficient, but  the
chapters can stack up  quite quickly.  Apart from  that, though, there is  no
reason why it cannot be run on floppies.


Installation Steps

To get VariTale running on your system, follow these steps:

     1.   Make a backup copy of the original diskette.

     2.   Prepare a destination for the VariTale files.

          A.   If using a hard disk, this means creating a directory, usually
               named VARITALE.

          B.   If using floppies, this means formatting a diskette.

     3.   Copy the necessary files from the original diskette to their proper
          place (on a hard disk or a floppy).  Use the DOS COPY command to do
          this.

     4.   Configure VariTale to  work according to your wants and needs.  The
          CONFIG program will take you through the necessary steps.

     5.   Run a local  test.  The VARITALE  command will do this.   This runs
          the program  locally, with  absolutely no reference  to the  modem.
          You can run VariTale in this manner at any time.

     6.   If  you wish to run VariTale  as a Door, refer  to the "Door Opera-
          tion" section of this manual.


Getting Things Rolling

On  some BBS's, VariTale needs  a little push to establish  it as a regularly
used feature of the system.  People are not encouraged to start a story-round
if  they feel they're alone.  You should  get a few budding writers together,
have them work out a rough plot, then start at the same time.  





2












                                DOOR OPERATION


This manual  is not intended to  be a tutorial  for door operations.   Please
consult your host BBS's documentation for full details.

In general, you will create a batch  (.BAT) file which will call up VariTale,
using a special  start-up command that  will be explained shortly.   VariTale
handles problems  such as  lost carriers, so  there is  no need  for watchdog
timers and suchlike things.

To start up VariTale, place the following command in your door batch file:

                   VARITALE /DOOR/user-name/time-left/port 

user-name ....... If omitted, none assumed 
                    This is optional.  It is used only in the activity report
                    generated by  the  CLOSE command  if  you are  running  a
                    multi-user system.

time-left ....... If omitted, assumes 60 minutes maximum visit time 

port ............ Current port address, in decimal
               If omitted, assumes default port from CONFIG.DAT
               If 0, no modem reference (i.e. console) 
               If D, door is forced opened (use after system crash ONLY)    
Here are some examples...

VARITALE /DOOR///1016          No name assumed, 60 minutes, on COM1
VARITALE /DOOR//15/0           No name assumed, 15 minutes, console 
VARITALE /DOOR/JOE SMITH/60    For Joe Smith, 1 hour on default port
VARITALE /DOOR///1016          No name, 60 minutes, on COM1 (decimal 1016)
VARITALE /DOOR///A1016         With system ID for LAN use (explained later)

Information such  as real-name, time-left  and port  can be  determined by  a
program you write  to build a command line.   On a multi-port  system, such a
program  is  not optional;  you must  pass  information to  be used  for file
locking  purposes.   If are  running a  LAN, you  may have  to pass  a system
identifier letter.  See "Multi-User Operation" for details. 

We will be collecting  appropriate command-line builder programs for  various
BBS systems.  See the "Upgrades and Support" section for more information.











                                                                            3












                             MULTI-USER OPERATION


This section is directed  towards users of multi-port systems.   You can skip
it if you configured VariTale for a single-user system. 


File Locking

"Locking" means claiming exclusive use  of a resource.  In the  case of Vari-
Tale,  for instance, it means that a book can be used only by one person at a
time.
 
VariTale does its own  file locking.  It  does not use the file  locking pro-
vided with  DOS 3 and higher, nor does it  use locking techniques such as the
one provided by MultiLink.   VariTale's locking technique is slower than that
provided by the  aforementioned products.  On  the other hand, it  does allow
you to run VariTale under a wide range of environments. 
 
It's slower  because all locking  information is recorded  in the .LOK  file,
using a "collision detection"  scheme.  This obviously has  lower performance
than  a  RAM-based locking  table, but  it  minimizes interaction  with other
products, thereby maximizing compatibility. 
 
If you are  running a LAN  (Local Area Network),  be careful of  disk-caching
software because  this might prevent  locking information  from reaching  the
locking file properly.   VariTale synchronizes  locking file updates by  per-
forming a dummy write  before checking for collision, but a  cache would make
this approach useless if it withholds disk writes. 
 
There is one major problem with  a disk-based locking table:  if  your system
crashes,  it will  faithfully remember  the  locking data!    This data  will
"time-out"  after an  hour (the  maximum time  allowed in  VariTale), so  the
problem isn't deadly.   You can  clear the locking  data by using the  "clear
door" command: 
 
                             VARITALE /DOOR///D/ 
 
Not  only does this open the  door (if closed previously  with the CLOSE com-
mand), but it will also reset all locking data.  This version of the  command
can be executed  only at the  console or a local  workstation.  You  can skip
this step,  but your users will  have to wait a  while for any  locks to time
out. 
 
We regret any inconvenience that may be caused by our locking scheme.  It's a
compromise  which  ensures that  VariTale will  run  on almost  any computer,
network, DOS or multi-tasker. 






4












The Unique File-locking Tag

VariTale performs  a lock  by writing a  locking record,  performing a  dummy
write to  de-synchronize itself in certain environments,  then re-reading the
record  to see  if it  has been altered.   If  it has,  it means  somebody is
competing for the same resource.  In such a case, the lock is not acquired.

In order  to determine if a "collision"  has taken place (i.e.  more than one
user is competing for the same resource), VariTale must have a unique item of
data associated with each user.  This is absolutely essential.

VariTale compares port, user-name and system identification data.  


Single-Processor Operation

If you  are running a single-processor  system (using a multi-tasker  such as
Multi-Link,  Desqview, etc.) each  of your  users will  have a  different COM
port.  In this case,  you need only pass the port address to  VariTale on the
start-up line (e.g. VARITALE /DOOR/name/time/port).  This information is used
both for file locking and setting up communications.


LAN Operation

If you are using a LAN, all of your users may have the same port address.  In
this case, the "port" parameter should  include an arbitrary system identifi-
cation to permit file  locking.  Prefix the port address  with a letter (any-
thing from ASCII decimal  65 to ASCII decimal 122  -- that is, A to  Z upper-
case, some intervening special characters, and a to z lowercase) to provide a
system identification to provide a unique locking tag.

Here's an example:

VARITALE /DOOR/JOE SMITH/45/X1016       <-- System "X", on COM1

Alternately, you may rely on the user-name as the unique tag if (and only if)
you are certain that there will never  be two people with the same name using
VariTale.  (That includes "System Operator", of course.)














                                                                            5












                                 MAINTENANCE


Backups

Under  normal  circumstances, VariTale  should  be totally  self-maintaining.
However, it is possible that a system crash could cause the index file (.TOC)
to be corrupted.

To  deal with  this possibility,  VariTale comes  with a batch  program named
BACK.  This copies the data files to a sub-directory of your VARITALE  direc-
tory, named BACK.  To make your first backup, enter these commands:

     CD VARITALE              <-- Change to your VariTale directory
     MD BACK                  <-- Create the safe-keeping directory
     BACK                     <-- Make a backup

Should your files get messed up somehow, you can restore the last backup with
the RESTORE command.

This technique  is by no means as good  as performing regular full-disk back-
ups, but it is quick.   Please run BACK at least every few  days.  Your users
will  be heart-broken  if their  masterpieces suddenly disappear  because you
didn't have a recent backup.

NOTE:     We have  been told  by a  few VariTale installations  that the  TOC
          files are, in fact,  quite vulnerable to damage  if they are  being
          written to when a  system failure occurs.  To deal  with this prob-
          lem,  we strongly recommend  that you always  have a  backup of the
          .TOC files that is  around 5 days old.  On an active VariTale, this
          should give you sufficient protection.


Librarian Commands

The librarian commands  are enabled with the  ENABLE command.  This  will ask
for  a password.   This  is initially set  to "bookworm",  but this  can (and
should) be changed with the CONFIG program.

There are three special commands for the librarian:  BURN, CLOSE and RENAME.


BURN

This command  removes a  book from  the list.   This also  deletes the  files
associated with the  book.  If you  want to preserve them  for posterity, you
should first copy  them to a floppy disk.  Each  book has two files (.TOC and
.VTB).   Thus, to preserve book #1, you'd  copy VARIA.TOC and also VARIA.VTB.
Book #2 uses VARIB.TOC and VARIB.VTB, and so on.




6












VariTale comes with  two dreadful  sample stories  named "The  Secret of  the
Broken Sword"  and "Space Terror!".  Feel  free to use them to  test the BURN
command.


CLOSE

This command prevents further  users from entering VariTale unless  they have
the librarian's password.  If they  type it in correctly, the library is  re-
opened.  It  can also be re-opened  by using the "D" option  explained in the
"Multi-User Operation" section.

This command is only useful on a multi-user system, of course.  It allows you
to keep people  out of the program while you are performing maintenance, such
as the RESTORE described in the "Maintenance" section.


PRUNE

This command is  used to delete a chapter.  You  might do this if the chapter
is offensive either to your morals or literary taste.

PRUNE deletes only  a single chapter and the pointer from a previous chapter.
It does not delete all the branches emanating from the chapter.  You may have
to PRUNE many times if you're doing a major clean-up.

PRUNE does not compress the book file, either; it simply removes the pointers
associated with  the chapter and  blanks out its title  so it won't  show up.
You will gain no additional disk space by PRUNEing.


RENAME

This command lets you  rename a book.  You  may wish to do this if  the story
branches away from the premise implied by the  original title.  It can not be
used to rename a chapter.


Why Show the Commands?

You may  be curious why  the HELP command  shows the librarian's  commands in
addition to the  usual commands.  No  doubt, some system operators  will feel
that this is  private information and that  it's none of the  users' business
what he can do.

On the other hand,  if the users know what commands  you have available, they
might not bother you  with requests that you can't deal with,  such as "Can I
move a chapter after another one?"   No, you can't, and any observant  person
will probably figure this out -- which will save time for both of you.




                                                                            7





```
{% endraw %}

## QUIPS.TXT

{% raw %}
```
47
A fool and his money are soon befriended.
Dieting is a time of waist.
Deafness is a state of mime.
Any milk can be made into cheese.  Here, have some gerbil cheese.
To be or not to be.  Ever think about that?
The moving hand writes, and having written, smears the ink.
Topic of the day:  Death, are you for it or against it?
Topic of the day:  Name alternatives to eternal nothingness.  Explain.
I'm not lost.  I don't even know where I'm going.
The best defense is a good offense.  Cringing is right out.
Let's get crazy and split some infinitives.
Never attribute to malice that which can be explained by stupidity.
Mariners' wives' shower-privilege rule:  I before 'e except after sea.
Learn a bit of Latin!  It's a great way to make nonsense sound profound!
Topic of the day:  Study the linguistic impact of pigs having wings.
Roses are red, violets are blue.  Don't these dumb poems aggravate you?
Roses are red, violets are blue.  Dum dee dee dum, scooby-dooby doo.
Your idea is flummery, lies and fakery.  It's unfinished!  Pure half-bakery.
Do unto others.  Often.
Do unto others as you'd have them do unto you.  Unless you're BIG.
'If it ain't fixed, don't broke it' -- words of an inside trader.
When in trouble, when in doubt, run in circles, scream and shout.
Life is two chests locked for eternity; each one holding the other one's key.
'Roses are red, violets smell nice' -- a poet who has missed the point.
Whistle a happy tune!  If you don't know one, a semi-morose one will do.
Here I sit, broken-hearted.  Can't think of a theme for this poem I started.
Topic of the day:  Life is beautiful if you're very, very happy.  Refute.
'Martyrdom is the only way a person can become famous.' -- G.B. Shaw
'College isn't the place to go for ideas.' -- Helen Keller
'A physicist is an atom's way of knowing about atoms.' -- George Wald
'1st rule of intelligent tinkering:  save all the parts.' -- Paul Erlich
'A man without religion is like a fish without a bicycle.' -- Vique
Famous graffitti:  'Please don't write on the -- oops!'
Famous graffitti:  'Schroedinger may have been here.'
Famous graffitti:  'I used to be indecisive; now I'm not sure.'
I'd give my right arm to be ambidextrous.
Bureaucrats cut red tape -- lengthwise.
A closed mouth gathers no feet.
There is no substitute for good manners except fast reflexes.
Those who dance are thought mad by those who hear not the music.
Try to be the best of what you are, even if what you are is no good.
If you can't learn to do it well, learn to enjoy doing it badly.
I don't have any solution, but I certainly admire the problem.
You can never get lost, because wherever you go ... there you are!
Time is an illusion perpetrated by the manufacturers of space.
A chicken is an egg's way of reproducing.
Guns don't kill people!  BULLETS kill people!  Outlaw bullets!
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1794

     Volume in drive A has no label
     Directory of A:\

    BACK     BAT       385   5-22-87   9:03a
    CONFIG   COM     22486   5-26-87   8:55a
    CONFIG   DAT        54   8-29-89  10:46a
    FILE1794 TXT      2517  12-20-89   4:05p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   7:15a
    HELP     EXE     59408   8-06-89   9:55p
    HELPCCF  PDC      1467   8-23-89   2:56p
    HELPEXIT PDC       343   8-23-89   1:33p
    HELPINTR PDC      1033   8-23-89   1:30p
    MANUAL   DOC     17583   8-22-89   8:40a
    QUERY    COM       128   1-27-86   5:35a
    QUIPS    TXT      2884   6-03-87   1:07p
    REGISTER PDC      2562   8-23-89   2:16p
    RESTORE  BAT       520   5-25-87   6:36a
    VARIA    TOC      5076   6-10-87  10:51p
    VARIA    VTB     17664   6-10-87  10:51p
    VARIB    TOC       846   5-27-87  11:00a
    VARIB    VTB      2816   5-27-87  11:00a
    VARITALE COM     52291   8-29-89  10:46a
    VARITALE HLP      1043   8-23-89   2:11p
    VARITALE HP1      1648   5-21-87   4:56p
    VARITALE HP2      2759  12-29-87   5:32p
    VARITALE LST      1305  12-29-87   6:04p
           24 file(s)     197396 bytes
                          110592 bytes free
