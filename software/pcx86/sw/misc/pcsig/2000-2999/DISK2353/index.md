---
layout: page
title: "PC-SIG Diskette Library (Disk #2353)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2353/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2353"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "INTEMENU"

    INTEMENU is an interactive, intelligent and integrated menuing system.
    Not just another pretty menuing program, INTEMENU is a command,
    control, and communications center for up to four LAN users.  A
    Graphical User Interface (GUI) takes up 12K of memory, and is
    compatible with EGA, VGA, and monochrome monitors.
    
    Three of the key features are:
    
    ~ An Application Launch Pad -- A traditional menuing feature which lets
    you organize your applications into manageable groups.  Selection of any
    desired application is just one keystroke away.
    
    ~ A Message Center -- A revolutionary feature for a menuing system.
    Send and automatically receive simple messages interactively with other
    INTEMENU users without the trouble of invoking an E-Mail
    package.
    
    ~ A Group of 26 Broadcast Stations -- Tune in to the latest
    information, whether departmental news, sports and entertainment,
    gossip, etc.  This feature provides a means to broadcast ``important''
    news and creates a sense of community among Local Area Network users.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2353.TXT

{% raw %}
```
Disk No: 2353                                                           
Disk Title: InteMenu                                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: InteMenu                                                 
Author Version: 2.1                                                     
Author Registration: $100.00                                            
Special Requirements: Any Local Area Network (Novell, etc.)             
                                                                        
INTEMENU is an interactive, intelligent and integrated menuing system.  
It is not just another menuing program, but a command, control, and     
communications center for up to four LAN users.  The program has a      
Graphical User Interface (GUI), takes up 12K of memory, and is          
compatible with EGA, VGA, and monochrome monitors.                      
                                                                        
The three key features are:                                             
                                                                        
~ An Application Launch Pad - The traditional menuing feature which lets
you organize your applications into manageable groups. Selection of any 
choice application is just one keystroke away.                          
                                                                        
~ A Message Center - A revolutionary feature for a menuing system. It   
lets you send and automatically receive simple messages interactively   
with other InteMenu users without the trouble of invoking an E-Mail     
package.                                                                
                                                                        
~ A Group of 26 Broadcast Stations - Lets you tune in to the latest     
information, be it departmental news, sports and entertainment, gossips,
etc. This feature provides a means to broadcast "important" news and    
creates a sense of community among Local Area Network users.            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.TXT

{% raw %}
```
InteMenu For Local Area Network (8 user version)
Copyright 1989,1990 JC Systems - All rights reserved
----------------------------------------------------

InteMenu is an interactive, intelligent and integrated menuing system. It
is not just another menuing software but a command, control and
communication center for users of local area networks. Because it not
just manages your environment but it can also listen and talk to other
users of InteMenu. 

There are three key features:

1. An Application Launch Pad - The traditional menuing feature which lets
you organize your applications into manageable groups. Selction of any
choiced application is just one key stroke away.

2. A Message Center - A revolutionary feature for a menuing system. It
lets you send and automatically receive simple messages interactively
with other InteMenu users without the trouble of invoking an E-Mail
packages.

3. A Group of 26 Broadcast Stations - Lets you tune in to the latest
information, be it departmental news, sports and entertainment, gossips,
etc. This feature provides a mean to broadcast "important" news and
creates a sense of community among Local Area Network users.


System Requirements:

1. Any IBM PC, AT, PS/2 and compatibles with EGA, VGA or Monochrome
Graphics monitors.

2. Any Local Area Network Operating System such as Novell, IBM PC LAN,
etc..

3. It takes only 12K of memory. Whatever is left is for running your
applications.


Installation:

1. Make a sub-directory in a network drive, eg. MkDir F:\INTEMENU.
2. Change and make this sub-directory your current directory.
3. Insert Installation Diskette in drive A (or B). Copy all files from
Installation disk to current directory. If you have a ZIP file, unzip it
into current directory.
4. Get user names ready (Each 16 characters maximum).
4. Type INSTALL and follow instructions.


Execution:

User A (as defined during installation) shall type A to start INTEMENU.
User B,C,D shall type B or C or D to start, etc.

InteMenu must be started at directory where it is installed. 


System Descriptions:

After starting INTEMENU, a screen shall appear which consists of:

1. A Main Menu on the left side of the screen.
2. A Message Center on the upper right side.
3. A Menu Choice Center on the lower right side.
4. A Broadcast Center at the bottom.


The Main Menu is displayed as 10 buttons, from 0 to 9. 0 is reserved for
activating the Message Center. 9 is reserved for activating the Broadcast
Center. 1 to 8 can be used to either launch an application or to activate
the Menu Choice Center to display a set of Menu choices. The highlighted
bar indicates current choice selection and it can be moved around by
using UpArrow or DownArrow keys. Pressing <ENTER> will activate current
selection. Pressing any numeric key will activate the numbered button.
Editing of choice 1 to 8 is done by highlighting the choice and press
<SPACE>. An Editing screen will appear and it contains three input
fields: Title, Path and Comm (for Command).

If the choice is intended to be used to launch an application, such as
Lotus 123, then the Title, as well as Path and Comm have to be filled in,
eg. 

      Title: Lotus 123 version 2.2
      Path : F:\123
      Comm : 123.EXE

If the choice is intended to be used to activate the Menu Choice Center
to display more Menu choices, then only the Title needs to be input; the
Path and Comm fields shall be left un-modified, eg.

      Title: Corporte Applications
      Path : SUBMENU
      Comm : SUBMENU

Choice 0 and 9 can not be edited.


The Menu Choice Center can be activated by highlighting one of the 8 Main
Menu choices (1 to 8) and press <ENTER> or by simply pressing the numeric
key (1 to 8). The Menu Choice Center screen will then display a set of 26
Menu choices (contained in 4 pages). The highlighted bar can be moved
around by using UpArrow, DownArrow, PgUp, PgDn keys. There is a maximum
total of 8*26 Menu choices. Editing of any highlighted choices is
activated by pressing <SPACE>. A screen similar to the editing screen for
Main Menu choices will appear. Editing is done in the same way.

If editing is done correctly for the Main Menu and the Menu Choice
Center. Then an application can be launched with the press of a key.


The Message Center can be activated by highlighting "Message Center" and
press <ENTER> or simply pressing "0". Initially, a "No Message" message
will appear in the Message Center. But if you send a message to yourself
or if somebody has sent you a message, it will appear in the Message
Centre in reverse chronological order. To send a message, press <Insert>
and an editing screen will appear. First to appear is a list of available
users who is in the InteMenu System. Move the highlighted bar around
using UpArrow, DownArrow, PgUp, PgDn keys. Press <SPACE> to select the
highlighted user as the recipient. A ">" sign will appear. Press <SPACE>
again and the recipient will be de-selected. You can select multiple
recipients. After finish selecting the recipients, press <ENTER>. The
prompt will be in the "Message" field and a brief 4 line message can be
input. Press <ENTER> to finish input and the message will be sent to the
selected recipients. If there is any message that you want to delete,
just highlight the message and press <DELETE>. To read a highlighted
message longer than 45 characters, press <RightArrow> or <LeftArrow> key
to scroll the message.


The Broadcast Center can be activated by highlighting "Broadcast Center"
and press <ENTER> or simply pressing "9". Initially, a "No News" message
will appear. But if you or others have broadcasted news, then they will
appear in the Broadcast Center in a round ribbon fashion. 

The default Broadcast Station is always the first choice. It will be
selected when InteMenu is first loaded. The default Station name is
called "Company News". To change the name of the Station, press <SPACE>
and an editing screen will appear as follows:

      Abbr : A
      Title: Company News
      Path : <DRIVE>\<PATH>\NEWS.DAT
      Comm :

You can freely change "Abbr" and "Title". "Path" indicates
"<DRIVE>\<PATH>\NEWS.DAT" which actually means that the news is stored in
a file of that name in that <DRIVE> and <PATH>. Make sure that <DRIVE>
and <PATH> are correctly specified. "Comm" should be left blank and its
content has no effect at all. (Remember that the default setup for Path
does not specify <DRIVE> and <PATH> and so it must be edited in order for
Broadcast Station to work correctly)

A total of 26 broadcast station can be created. It means that you can
create your own broadcast station and let other people tune in or you can
tune in to other stations so long as the name of the news file and the
<DRIVE> and <PATH> is known. Suppose you want to create a Broadcast
Station called "House For Sale", do the following:

1. Exit to DOS and select a public directory accessible by other users
who will listen to you Broadcast Station. Type MAKENEWS HOUSE.DAT (This
will create a news file called HOUSE.DAT).

2. Enter INTEMENU and press "9" to select "News Broadcast" to enter Menu
Choices.

3. Move the Highlight bar to a choice with no Broadcast Station. Press
<SPACE> to Edit.

4. Edit the screen as following:

      Abbr  : B   (or C or D, so long as the alphabet has not been used)
      Title : House For Sale
      Path  : <DRIVE>\<PATH>\HOUSE.DAT
      Comm  :

5. After finish editing, press <ENTER> to select "House For Sale"
Broadcast Station and you will see the Broadcast Title at the bottom of
the screen changed to "House For Sale" and a "No News" message appears
across the bottom screen.

6. Tell every body of your new Broadcast Station and the News file. They
can then edit their Menu Choices to tune in to your station. If you want
to tune in to Broadcast Station belonging to another INTEMENU Network on
another file server, you will have to first have access to that file
server and the directory where the news file is stored before you can
tune in. Eg. If someone told you that there is a station on file server
ABCD and the news file is SPORTS.DAT in directory NEWS, then you will
need access to that server and directory by "MAPPING" a drive to it (eg.
G:=\\ABCD\NEWS in case of PC LAN, or G:=ABCD/SYS:NEWS in case of Novell).
Then edit one of the un-used Broadcast Stations. Edit "Path" so that it
looks like this:

      Path  : G:\NEWS\SPORTS.DAT 

Edit "Abbr" and "Title" the way you want it.

If you want to broadcast a news, highlight the Broadcast Station where
you want to make the broadcast and press <Insert> and an editing screen
will appear. First the broadcast news can be input, then you can input
the day of week when the news should be taken off the broadcast, eg. If
today is Friday and you want the news to be taken off on next Tuesday,
then enter "2". This arrangement allows news to be broadcasted for a
maximum of 7 days.

News Broadcast can be speeded up or slow down by pressing '+' or '-' key
while highlight bar is at any one of the buttons.

That's all, folks!

Pricing:    8 user licence             $100.00
            Special DEMO disk          $10.00

            Group & corporate licence available

Send all Orders and Enquiries to: JC Systems
2 Talbert Road, Willowdale, Ontario, Canada M1V 2H7
(416)298-7957 Attention: Frank Chiang

Copyright 1989,1990 JC Systems - All rights reserved
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2353

     Volume in drive A has no label
     Directory of A:\

    MM       DAT     24739   3-11-90   2:09a
    MESSAGE  DAT       224   3-22-90  10:02a
    MESSAGE  NX1      1005   3-22-90  10:02a
    INSTALL  BAT      1192   3-22-90   9:34a
    MAKEUSER EXE     19472   3-23-90   1:07p
    A        EXE      6208   3-10-90  10:38a
    B        EXE      6208   3-10-90  10:38a
    MMM      EXE     92272   3-27-90   8:13a
    MAKENEWS EXE     12624   3-22-90  10:12a
    NEWS     DAT       128   3-22-90  10:13a
    C        EXE      6208   3-10-90  10:38a
    D        EXE      6208   3-10-90  10:38a
    README   TXT      9592   3-27-90   8:47a
    E        EXE      6208   3-22-90   9:37a
    F        EXE      6208   3-22-90   9:37a
    G        EXE      6208   3-22-90   9:37a
    H        EXE      6208   3-22-90   9:37a
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       771  10-05-90  12:28a
    FILE2353 TXT      2665  10-05-90  10:50a
           20 file(s)     214388 bytes
                           92160 bytes free
