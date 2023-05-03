---
layout: page
title: "PC-SIG Diskette Library (Disk #1536)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1536/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1536"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FINNISH GAMES"

    A smorgasbord of programs from the University of Vaasa in Finland!
    Games, linear programming tools, lots of telephone modem help, and even
    a touch of Scandinavian PC key use make an interesting mix of
    utilities.
    
    MANAGAME is a management simulation game from the Department of
    Business Studies.  You are in charge of a small manufacturing company
    with a new widget to market.  Fortune or bankruptcy await you!
    
    HEXAGAME is the old number guessing game with a twist: you can try it in
    decimal, binary or hexadecimal!  Each guess is also shown in its decimal
    equivalent.  Great for computer students.
    
    MLTIGAME provides timed competition for one or more students on
    multiplication tables.  Winners' names go into the Hall of Fame.
    Suitable for ages 9 to 14.
    
    LINSOLVE solves linear programming problems with up to 25 variables
    interactively.  It also solves linear GOAL programming problems.
    
    PCPFON tackles your special needs in using ProComm Plus, such as: 1) How
    to use Zmodem with ProComm Plus; 2) How to get the Scandinavian
    characters working; 3) How to transfer files between two PCs (when
    neither is a bulletin board) -- both by modem and by direct cable
    connection.  Other files explain how to ready ProComm Plus and the
    Worldport 2400 modem for the host mode; give routines for calling
    Finnish Opus Bulletin Boards, and more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1536.TXT

{% raw %}
```
Disk No: 1536                                                           
Disk Title: Finnish Games                                               
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Finnish Games                                            
Author Version: 2.0                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
                                                                        
A smorgasbord of programs from the University of Vaasa in Finland!      
Games, linear programming tools, lots of telephone modem help, and      
even a touch of Scandinavian PC key use make an interesting mix of      
utilities.                                                              
                                                                        
MANAGAME is a management simulation game from the Dept. of Business     
Studies.  You are in charge of a small manufacturing company with a new 
widget to market.  Fortune or bankruptcy await you!                     
                                                                        
HEXAGAME is the old number guessing game with a twist: you can try it in
decimal, binary or hexadecimal!  Each guess is also shown in its decimal
equivalent.  Great for computer students.                               
                                                                        
MLTIGAME provides timed competition for one or more students on         
multiplication tables.  Winners' names go into the Hall of Fame.        
Suitable for ages 9 to 14.                                              
                                                                        
LINSOLVE solves linear programming problems with up to 15 variables     
interactively.  It also solves linear GOAL programming problems.        
                                                                        
PCPFON tackles your special needs in using ProComm Plus, such as: 1) How
to use Zmodem with Procomm Plus, 2) How to get the Scandinavian         
characters working, 3) How to transfer files between two PC's (when     
neither is a bulletin board)---both by modem and by direct cable        
connection.  Other files explain how to ready PROCOMM Plus and the      
Worldport 2400 modem for the host mode; give routines for calling       
Finnish Opus Bulletin Boards, and more.                                 
                                                                        
                                                                        
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
║                   <<<<  Disk No 1536 HEXAGAME/PC  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start HEXAGAME, type HEXAGAME (press enter)                          ║
║                                                                         ║
║ To start LINSOLVE, type LINSOLVE (press enter)                          ║
║                                                                         ║
║ To start MANAGAME, type MANAGAME (press enter)                          ║
║                                                                         ║
║ To start MLTIGAME, type MLTIGAME (press enter)                          ║
║                                                                         ║
║ To start PCPFON, type PCPFON (press enter)                              ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PCPQA.TXT

{% raw %}
```
PCPQA.TXT: Procomm Plus Questions and Answers by Timo Salmi
           *  *    *    *             *
Address: University of Vaasa, P.O.Box 297, SF-65101 Vaasa, Finland
Fri 19-May-1989


***
Q: I would like to record everything that comes on the screen into
a file. How do I do that? How do I get a single screen into a file?

A: You really should read the Procomm Plus manual more carefully.
Anyway, when you press ALT-F1 the logging starts, and when you
press it again (it is a toggle) the log is closed. To log a single
screen, press ALT-G. Before using these facilities you should set
the default filenames for log files and screen snapshot files. This
you can do by calling the Procomm Plus setup facility (ALT-S) and
then selecting the file/path options from the menu. I use
D:\PCPLUS.LOG and D:\PCPLUS.SCR. Also the redisplay buffer (ALT-F6)
can be written to a file, but you really should look it up in the
manual.
   There are programs independent of Procomm which can be utilized
to capture only a part of the screen to a file. If you wish to be
able to do this acquire a resident program named snipper by Ziff
Communications co.

***
Q: How to print a screen while on-line?

A: Now this is very simple. The ordinary PrintScreen key works also
from within Procomm Plus. If you want a continuous printing, press
ALT-L. You can see the options like ALT-L easily by invoking the
Procomm Plus help screen by pressing ALT-Z.

***
Q: I have problems with the Scandinavian characters å ä ö Å Ä and Ö.
Is it possible to use the Finnish keyboard with Procomm Plus, and
to have the Scandinavian letters at their correct places on the
keyboard?

A: Yes it is, but is not always very simple, and depends on your
keyboard drivers (and many other things which may change from one PC
to another). In using a communication program there actually are two
separate translations, the incoming translation and the outgoing
translation. Procomm Plus (at least until version 1.1A) has only a
facility for the incoming translation. The codes are set using the
translation table (ALT-W). E.g. { can be translated into ä by
setting 123 to 132, and so on. (See your ascii table or PCAT.BAT in
TSPFONxx.ARC for the rest of the codes.) Thus when the BBS (the
bulletin board where you are connected to) sends a { it is shown as
ä on your screen.
  To write (to send) e.g. ä properly from the key that has ä on its
cap you have to be able to alter the outgoing ä into a {. Procomm
Plus does not have this outgoing translation facility, so you must
load a suitable keyboard facility before using Procomm Plus. PC.BAT
and PCAT.BAT show how to do this. There are several PD (Public
Domain) keyboard facilities for this purpose. PC.BAT and PCAT.BAT
use 7H.COM, but there are many alternatives.
  Many other communication programs, like Telix 3.11, have both the
incoming and outgoing translation tables. But e.g. the Telix 3.11
translation table does not work correctly under all circumstances,
and has problems with the ANSI screen driver if [ is translated to
Ä.
  Incidentally, what has been said here applies to all foreign
keyboards. Not just the Scandinavian.

***
Q: I have heard that Z-modem is a good file transfer protocol. But
Procomm Plus does not have it!

A: True on both accounts. Z-modem is a fast file transfer system
with many good properties, such as handling of multiple files and
preservation of file date stamps. Procomm Plus is able use the so-
called external protocols, which means that you can use Z-modem with
Procomm. You must first acquire a Z-modem program (e.g. DSZ.COM from
Omen Technologies), and set your Procomm Plus up accordingly. See
ZMOD-D.BAT, ZMOD-U.BAT, ZMODEM-D.BAT, ZMODEM-U.BAT, and TSPFON.INF
in TSPFONxx.ARC for detailed instructions.
   Here Telix 3.11 clearly has better of Procomm Plus, since it has
a built-in Z-modem with a very nice user interface.

***
Q: I am using Procomm Plus as a terminal to a main-frame (VAX/VMS)
in the VT102 emulation mode. The backspace does not delete the
character on the left, but the left arrow does. How do I get them
working as they should.

A: A tricky question. I suggest that you use the keyboard mapping
(ALT-F8) setup which is at the end of this file as Appendix A.
Furthermore, you should set the backspace as not destructive. The
easiest way to do the latter is to write the following simple script
file and run it from ALT-F5:

    ; NONDEST.ASP
    SET BACKSPACE NONDEST

***
Q: I would like to transfer files directly between two PCs. Is it
possible?

A: Not only possible, but relatively easy. Get a proper cable to
connect the RS-232 ports of the two machines, and follow the
instructions in TRANSFER.TXT in TSPFONxx.ARC. You can also transfer
files between PCs at two different locations, if you have a modem
and a telephone at both locations. TRANSFER.TXT gives more
instructions also about this alternative.

***
Q: I want to prepare a message off-line, and then transfer it to a
bulletin board. How is this done?

A: This is a good idea, since then you can save in your phone
bills. What you do is to prepare your message with any editor (or
wordprocessor if it can produce straight-forward ascii text). When
you have your connection, then you begin entering your message as
usual, but instead of writing it from the keyboard you press the
PageUp key and upload your message with upload protocol number
4) ASCII.
   If you are writing the message in Finnish, there is the added
complication of having to convert å ä ö Å Ä and Ö into } { | ] [ and
\. There are programs, which can be used to do this for you, such as
TOASC.EXE in TSFILTxx.ARC package or FILTXT.EXE in TS2FLTxx.ARC.
Notice that you also must have the translation table on when
uploading such Finnish files.
   It is advisable always to check the uploaded message before
saving the message, because line noise can cause errors in the
uploaded text. (In an ascii transfer there is no error check.)
   Before you use an ascii upload it is advisable to have applied
the Procomm Plus Setup Facility (ALT-S) Ascii Transfer Facility e.g.
as presented in Appendix B. Alternatively, you might use the
following kind of a script file.
     SET ASCII CHARPACE 15
     SET ASCII LINEPACE 10
     SET ASCII BLANKEX ON
     SET ASCII TABEX ON
   In some bulletin board systems (such as OPUS) also allow the
possibility of using X-modem uploading of messages. If the
connection is bad, i.e. there is much noise on the line, this
alternative is safer, but it is not quite as easy to use as the
ascii upload. If you use X-modem for uploading the prerecorded
message, there is the added disadvantage of not being able to edit
the message after uploading it (at least of your host uses Opus).

***
Q: I chatted with the SysOp of the bulletin board I called, and had
the log file on to read our discussion later. When I began reading
it with an editor, I noticed that it was full of control characters.

A: Quite right. If you, or the SysOp make typing errors while
chatting, and correct them with the backspace key, the logging
system records the backspaces instead of deleting the earlier text.
This is ok if you just use the Ms-Dos command TYPE to read your log,
but if you use an editor, it really shows the backspaces. You can
use a filter, such as LOGFILT.EXE in TSFILTxx.ARC package to make
the log file readable. If you had a noisy line, LOGFILT has the
added bonus of being able to filter out much of that noise.

***
Q: My Procomm will not work. What is wrong?

A: These kind of vague questions are very typical in bulletin
boards. You really should be more specific in telling about your
problem. Describe what you have managed to do and at what stage of
using Procomm you get stuck. Some very general advice can, however,
be given.
   Isolate your problem. Adopt a step-by-step trouble-shooting
approach:
1) Can you load Procomm? If ok then
2) Does your modem respond? If ok then
3) Will your host (the computer you have called) respond?
Let us look at each step. So:
   1) Call your Procomm program. If the program will not load, then
your copy is probably corrupted. Notice, that if you have been using
Procomm from a disk you NEVER should remove the disk until you have
exited Procomm. Most telecommunication programs like Procomm and
Telix have files open while they work. If you have removed your
disk, and Procomm fails to work after that, copy the Procomm files
from you backups, and try again. If you have a very old version of
Procomm, and have used the host mode incorrectly, this may also have
affected your Procomm.
   2) If the program will load, try typing atz. The modem should
respond with OK. If it does not, see that you have configured
(ALT-P) Procomm for the right COM port. After that try typing atz
again. If you get no response, then the problem is probably in your
modem and in your modem cable. In some cases there may be problems
with the IRQs (interrupt requests) of modem port assignments. (This
is a special problem discussed in another answer.)
   3) Call the host. Check that you are on-line (see the lower-right
corner of Procomm screen). If you get no response, check that your
settings are compatible with the host. Obviously there can be many
variations, but most importantly check the baud rate (300, 1200,
2400,...), parity (none, even,...) and data bits (7 or 8). If this
does not help check the flow control (see Appendix A). Perhaps the
most common is software flow control ON and hardware flow control
OFF. Furthermore, in for some modems (remember that there is a modem
at both ends at the connection) you may have to set the guard tone
(not all modems have this feature). See your modem manual. The
relevant (extended) Hayes command often is AT&G2.

***
Q: Can I transfer programs from my home computer to my PC?

A: Practically no. Transfer of text files is possible, but often
tricky, and is anyway beyond the scope of these instructions.
Nevertheless, if you would like more information about this
question, acquire SENDFILE.ARC where I describe transfering text
files from a Sinclair QL to a PC using Procomm Plus. The description
might be useful also for other home computers than the QL. (I have
managed to transfer a PC-Four Archive data-base system from QL to
PC, but this was not simple, and required writing special programs
for the task.)

***
Q: I am using Procomm as a terminal for an Unix machine and
everything else seems to be working fine except that I get stuck
with Kermit file transfers. Is the Kermit protocol in Procomm
incompatible with Unix?

A: The Kermit in Procomm Plus is compatible with Unix all right, but
it is much more particular about the line settings than the terminal
emulation itself. Most unix computers require 7 bits, even parity
and one stop bit. In ordinary terminal emulation the connection is
rather insensitive to errors in the settings, but in kermit file
transfer you must get it exactly right lest you get stuck. If this
does not resolve your problem, also try setting the maximum packet
size to 90 in the Kermit Options in Procomm Plus Setup Utility which
is called by pressing ALT-S.
  One additional thing. When you invoke Kermit at you host machine
(probably C-Kermit in an Unix machine) first give the command set
parity even, and if you are transfering a binary file (for example
an .arc) also set file type binary before commencing the transfer.

***
Q: I have the shareware version 2.4.2 of Procomm. Should I update?

A: Frankly (since this is not an advertisement for Procomm Plus) it
depends whether you need the new features introduced in Procomm
Plus. The some of the most important are discussed below.
   Procomm Plus has a key mapping facility (ALT-F8) for most of the
special keys, but unfortunately not for the ordinary keys. In
Scandinavian (or foreign in general) keyboards this feature can be
used to alleviate the ubiquitous problems with the keyboard drivers
and conversions. See Appendix A for an example.
   In Procomm Plus you can tailor the terminal emulation layout to
your liking. See Appendix A for a tailormade VT102 emulation.
   The script language of Procomm Plus has more commands than the
corresponding 2.4.2 script language. It also has a record mode
(ALT-R) for creating an outline for an automatic login script when
you call a BBS.
   The host mode in Procomm Plus is much more robust. Actually using
the host mode in 2.4.2 has crashed my Procomm 2.4.2 a couple of
times, and I have then had to reinstall it from the backups.
   The Procomm 2.4.2 call logging facility was bug ridden, but the
same annoyingly applies to Procomm Plus until version 1.1A.
TSPFON.EXE can be used to patch the call logging files produced by
Procomm Plus 1.1.

***
Q: I have my modem in port com3 and I cannot get my Procomm Plus
working properly. I heard from a friend that using port com3 is not
possible in Procomm.

A: No, your friend has confused his facts. Procomm Plus does work
also through ports beyond com2 (not all communication programs do),
but it is true that there may be extra difficulties. What you may
have to do is to change the IRQs (interrupt requests) of port com3,
especially if the relevant IRQs are already reserved. It is
difficult to give exact advice what changes you should make there,
since it depends on many factors which vary from one configuration
to another. The first thing to do, however, is to see the
information in you modem manual. To change the IRQs invoke the setup
utility by ALT-S, select modem options from the menu and then port
assignments. See Appendix E.

***
Q: I have tried and tried to get the Scandinavian characters on the
correct keys on my keyboard, but to no avail. What is wrong?

A: Well, when both the outgoing and the incoming translation are
needed on a non-US keyboard things get complicated. In fact there
are so many variables to the equation of getting this feature right,
that problems are inevitable. The factors influencing this matter
include: 1) The communications program itself.  2) The keyboard
driver (often keyboard.sys).  3) The extra keyboard redefinition
driver (such as drv, 7h, 7dos, finfont and so on).  4) The physical
keyboard.  5) The MS-DOS version.  6) Even the host (that is the
machine where you are connected to) may have an influence through
its own communication program and settings. And there may well be
other factors not listed here. So no wonder getting the Scandinavian
keys where they should be can be a daunting task.
   With the latest AT models and keyboards I have failed myself in
getting åäöÅÄÖ work in their proper places, and I have had to resort
to remapping the F9-F11 keys. See Appendix A. I suspect that Procomm
fails to handle correctly the keyscan codes of the new Scandinavian
keyboards. I have written about the problem to Datastorm, and their
quoted response was the following.
   "Currently PROCOMM PLUS only supports an incoming
   translation table. Though I have heard this feature
   requested from other users and have added it to our list of
   suggestion for future version. Our programmers implement the
   suggestions that are possible to include and that satisfy
   the need of our users".
I am not quite sure if I understand what this actually means, but
then English is not my native language.
   There is one additional trick you might try, if you think that
you have everything in order (the translation table, the keyboard
and Scandinavian drivers, etc), but the translation still does not
work. In the General Options of the Procomm Plus Setup Menu (ALT-S),
there are options for Snow Removal, and Enhanced Keyboard. Try
varying the on/off settings of these options.

***
Q: I have heard that Telix is much better than Procomm. Should I
change to Telix?

A: Many users would recommend changing to Telix. I have even seen
messages claiming that Telix is better than Procomm in every
respect, but in my opinion that is a clear overstatement: To my
knowledge Telix lacks the option of invoking the scripts from a menu
list. The translation table can cause confusion with the ansi driver
in Telix. Telix has fewer terminal emulations. And I have not found
the screen snapshot facility in Telix.
   Nevertheless, having experience with both Procomm and Telix 3.11
I think that Telix is an excellent program. (I will have to think
about doing this kind of Q&A thing for Telix as well.)
   Since Telix 3.11 is shareware the best answer is look at it
yourself and then decide. That is what the concept of shareware is
all about.

***
Q: I have also heard of Kermit. What has that to do with Procomm?

A: Kermit can be regarded as two things. First of all it is a public
domain terminal emulation program called MsKermit, copyright by
Columbia University in the City of New York. It is also a file
transfer protocol which is included in Procomm Plus. This protocol
is very important (but slow), because in many mainframe
installations it is the only one available. As to MsKermit terminal
emulation it is a very good one if your host is a mainframe. For
example if you do much editing on a VAX/VMS, MsKermit is clearly
superior to Procomm Plus or Telix. On the other hand Procomm Plus
and Telix are much better if your host is a BBS.
   Incidentally if you are interested in MsKermit terminal
emulation, the TSKERMxx.ARC has ready configuration files and other
useful utilities for MsKermit. The MsKermit version you should use
is 2.32A (or later).

***
Q: I use the dialing directory (ALT-D) of Procomm Plus to call a
BBS, but when it is busy the program does not seem to recognize
this. The modem is at its factory settings with carrier detect off.

A: Are you sure that your modem setting are appropriate. Probably
not. Most importantly you must set the explicit long messages on by
giving the modem an ATX1 command. This may have some variations
depending on the make of your modem, so you should check what its
manual says. You should also make sure that you have correctly set
the modem result messages in Procomm Plus (ALT-S on so on). See your
Procomm Plus manual for the details.
   Furthermore, I think that you should turn your carrier detect on.
It may not be the source of your current troubles, but if you do not
have it on, the call logging facility of Procomm Plus will lack part
of its customary information.

***
Q: I am using Procomm 2.4.2 but I have heard rumors of a 2.4.3. Does
it really exist?

A: Yes, but it is quite similar to version 2.4.2. There is an added
file transfer protocol, and some of the texts have been updated, but
that is it, I think.
   If you have an access to InterNet you can, in fact, anonymous ftp
it from node 128.214.12.3 and see for yourself.

***
Q: I want to write a command file to automate logging in into a BBS.
How do I do that?

A: First a minor detail. These command files are actually called
script files.
   If your have no, or a very modest, experience on programming, the
Procomm Plus manual will not be of much help because it is rather a
reference than a primer. There are examples in the manual, but they
are far too complicated for a novice.
   What I suggest is that you first look at some script files. There
is a commented script file OPUS.ASP for logging into an Opus system
in the TSPFON collection. See the comments in opus.asp in order to
understand the basics. Also see the .asp script files that accompany
the Procomm Plus.
   Now call your BBS, and set the record mode on by pressing the
ALT-R toggle. The login sequence is recorded. The login script will
require editing, but it gives you a framework to start with.

***
Q: I am using vi (an editor) on a Unix host machine. When I try to
move backwards in a file by using esc h text gets erased. Why, and
what should I do?

A: Quite many problems in using terminal emulation in Procomm Plus
(and Telix) result from failing to get right the interpretation of
the backspace in VT102 emulation. This is most probably the source
of your problem as well.
   Since backspace problems keep recurring let us look once again
what it is about. The default terminal emulation in Procomm Plus is
ANSI, because this is best suited when connected to BBSes (bulletin
boards). The backspace is destructive by default, because this is
what ANSI emulation needs. But VT102 needs a non-destructive
backspace (lest the left cursor erases characters and so on).
Therefore you should set the backspace non-destructive. Otherwise
you will have problems like the one about which you asked.
   To set the backspace correctly please see an earlier answer to
the VT102 backspace problem in this file.

***
Comment: (This one is due to Spencer Greene of Stanford.)
> Hi.  I recently got your PCPQA.TXT and some other files by FTP, and
> they have been of great help to me.  In using PROCOMM, however, I
> ran across a problem similar to one addressed in your Q & A file,
> but I found a different solution.
> You write:
  ...
>    ; NONDEST.ASP
>    SET BACKSPACE NONDEST
 
> -------
> In the version I am using, ProComm 2.4.3, there is a way to avoid
> using a keyboard mapping utility.  On Setup (Alt-S) menu 2 (Terminal
> Setup), item 7 allows you to specify whether a keyboard backspace is
> sent as a backspace or a Del key.  I have found this feature to be
> very useful when using VT100 emulation, especially since my first
> solution, which was to use a TSR keyboard macro program (DKEY,
> specifically) seemed to have nasty interactions with ProComm.

A: A very good point. Thank very much you for bringing it up.
   These two methods might be two sides of the same coin: There are
two methods for altering settings in Procomm, and Procomm Plus. One
is using setup menus, as you have done. The other is using scripts.
The difference between the two is that in using setup menus one
usually makes the settings permanent (as you probably have done). In
using scripts, the setting is temporary. The latter is particularly
convenient if one alternates between connections to different kinds
of host. For example, I alternate between BBSes and VAX/VMS hosts,
and need the flexible alternative.
   Procomm and Procomm Plus select between the backspace key and the
del key slightly differently. To repeat your idea, in Procomm
(version 2.4.3) invoke the setup menu (ALT-S), then 2) terminal
setup. The relevant options are 6) BS translation (dest/non-dest)
and 7) BS key definition (bs/del). To emulate VT102 (or rather
VT100) it is best to set BS translation non-dest, and BS as del.
(See Appendix C.)
   In Procomm Plus the backspace translation is set in a similar
fashion from terminal options invoked by ALT-S. Set option H BS
translation as NON-DESTRUCTIVE (see Appendix D). Now the rest must
be set using Procomm Plus keyboard mapping, which is invoked by
ALT-F8. Set backspace as »DEL« and delete as ^[Ol (see Appendix A).

***
Q: I know that external protocols can be used for file transfers in
Procomm Plus, but I only have version 2.4.2 (registered of course).

A: External protocols are easily invoked in old versions of Procomm
as well. Just use the ALT-F4 DOS gateway to escape to dos and invoke
the external protocol then. It is convenient to have the external
protocol called from a batch file. For example the ZMOD-U.BAT in
the TSPFON collection works just fine for Z-modem.

***
Q: I would like to make Procomm call a BBS (bulletin board system)
at a predefined time. Is that possible?

A: Yes its is. There is a program called TEF.EXE (Timed Execution
Facility) which came with Procomm Plus version 1.1A. Timed execution
as also possible from a script file. There is a script TEF.ASP
accompanying Procomm Plus. Furthermore, TEF.EXE accompanied earlier
Procomm versions, at least the 2.4.3 package seems to have it.

***
Q: Procomm 2.4.2 gives me working wordwrap, but I cannot get 2.4.3
or pc+ to wordwrap. I am using Windows.

A: This again goes to show that the communication programs are very
much configuration dependent.  I have tested the wordwrap of Procomm
Plus 1.1A and Procomm 2.4.3 under MS-DOS 3.21 both to a Unix (Sun 4)
and a VAX/VMS host, and the wordwrap works as it should.  The PCs
used are an Osborne AT06 and a Zenith Z-181 laptop.
   Now how does this information help you?  At least it eliminates
some of the potential sources of your problems, and also goes to
show that the wordwrap can be made to work in Procomm 2.4.3 and
Procomm Plus.  The next question is what is different in your setup.
One potential source of the problem may be Windows, if you are using
Procomm under that. Anything else that is different?
   To proceed, start with a configuration that is as straightforward
as possible until you can come up with one setup where the wordwrap
is ok.  Then work towards your preferred configuration step by step,
and observe when your wordwrap problem reappears.  The trick is to
isolate the problem.

***
Q: I have my modem in port com3 and have had to reconfigure its irq
to IRQ2. I am using external z-modem file transfer protocol DSZ, but
it will not recognize the reconfigured com3. What should I include
on the DSZ command line to tell of the changed irq? (This question
was asked by myself.)

A: This piece of advice is due to Eef Hartman for 2:512/16.1305
Technical point BBS, and is gratefully acknowledged: Try including
portx 3e8,2.

***
Q: In article <2632@maccs.McMaster.CA> riehm@maccs.UUCP (Carl Riehm)
writes: I have another problem with Pcplus: when I am using a script
file to log on to some other computer, for example, pcplus gets
impatient if it has to wait too long and "leaks" the next step
before the prompt for it is sent by the other computer. Any
suggestions?

A: Yes. See the PcPlus manual Chapter 11. See the command WAITFOR.
The manual gives the syntax for including a maximum wait time. Or if
you want to have an example get /pc/ts/tspfon28.arc by anonymous ftp
from 128.214.12.3. I am not repeating the WAITFOR syntax here, since
I am not in a competition with DataStorm in publishing the PcPlus
manual :-)

***
APPENDIX A: VT102 Emulation for VAX/VMS in Procomm Plus
(Omit F9-F11 if you are non-Scandinavian)

════════════════════╦═════════════════════════════════════════════════════
    PROCOMM PLUS    ║ F1 ..... ^[OP      S-F1 ....           C-F1
  KEYBOARD MAPPING  ║ F2 ..... ^[OQ      S-F2 ....           C-F2
    Version 1.1A    ║ F3 ..... ^[OR      S-F3 ....           C-F3
════════════════════╣ F4 ..... ^[OS      S-F4 ....           C-F4
                    ║ F5 ..... ^[On      S-F5 ....           C-F5
KEYPAD *  ^[OR      ║ F6 .....           S-F6 ....           C-F6
KEYPAD -  ^[OS      ║ F7 ..... ^[OM      S-F7 ....           C-F7
KEYPAD +  ^[Om      ║ F8 .....           S-F8 ....           C-F8
KEYPAD .  ^[On      ║ F9 ..... ö         S-F9 .... Ö         C-F9
KEYPAD /  ^[OQ      ║ F10 .... ä         S-F10 ... Ä         C-F10
KEY ENTER ^[OM      ║ F11 .... å         S-F11 ... Å         C-F11
                    ║ F12 ....           S-F12 ...           C-F12
════════════════════╩═════════════════════════════════════════════════════
TAB ....... ^I        KEYPAD 0 ^[Op      GREY CUP  ^[[A      CURUP ^[OA
BACKTAB ...           KEYPAD 1 ^[Oq      GREY CDN  ^[[B      CURDN ^[OB
INSERT .... ^A        KEYPAD 2 ^[Or      GREY CLF  ^[[D      CURLF ^[OD
DELETE .... ^[Ol      KEYPAD 3 ^[Os      GREY CRT  ^[[C      CURRT ^[OC
BACKSPACE . »DEL«     KEYPAD 4 ^[Ot      GREY INS  ^A
C-HOME ....           KEYPAD 5 ^[Ou      GREY DEL  ^[Ol      HOME  ^H
C-END .....           KEYPAD 6 ^[Ov      GREY HOME ^H        END   ^[Or
C-PGUP ....           KEYPAD 7 ^[Ow      GREY END  ^[Or
C-PGDN ....           KEYPAD 8 ^[Ox      GREY PGUP           ENTER ^M
C-BACKSPACE           KEYPAD 9 ^[Oy      GREY PGDN


  Emulation: VT102 keyboard layout (with NumLock ON)
  +--------+--------+--------+--------+    +--------+--------+
  !  GOLD  !  HELP  ! FNDNXT ! DEL L  !    ! SELECT !  ENTER !
  !   F1   !  ./.   !   x    !   -    !    !   F5   !   F7   !
  !        !        !  FIND  ! UND L  !    ! RESET  !   SUBS !
  +--------+--------+--------+--------+    +--------+--------+
  !  PAGE  !  SECT  ! APPEND !        !
  !   7    !   8    !   9    ! DEL W  !
  !COMMAND !  FILL  !REPLACE !        !
  +--------+--------+--------+   +    !
  !ADVANCE ! BACKUP !  CUT   !        !
  !   4    !   5    !   6    ! UND W  !
  ! BOTTOM !  TOP   ! PASTE  !        !
  +--------+--------+--------+--------+
  !  WORD  !  EOL   ! CHAR   !        !
  !   1    !   2    !   3    ! ENTER  !
  !CHNGCASE!DEL EOL !SPECINS !        !
  +--------+--------+--------+ enter  !
  !      LINE       !        !        !
  !        0        !   ,    !  SUBS  !
  !    OPEN LINE    !        !        !
  +-----------------+--------+--------+

***
APPENDIX B: Settings for an Ascii Upload

╔════════════════════════════════════════════════════════════════════════╗
║ PROCOMM PLUS SETUP UTILITY                      ASCII TRANSFER OPTIONS ║
╟────────────────────────────────────────────────────────────────────────╢
║ A- Echo locally ................ NO     K- Strip 8th bit ......... YES ║
║ B- Expand blank lines .......... YES                                   ║
║ C- Expand tabs ................. YES                                   ║
║ D- Character pacing (millisec).. 15                                    ║
║ E- Line pacing (1/10 sec)....... 10                                    ║
║ F- Pace character .............. 0                                     ║
║ G- CR translation (upload) ..... NONE                                  ║
║ H- LF translation (upload) ..... STRIP                                 ║
║ I- CR translation (download) ... NONE                                  ║
║ J- LF translation (download) ... NONE                                  ║
╟────────────────────────────────────────────────────────────────────────╢
║ Alt-Z: Help │  Press the letter of the option to change:   │ Esc: Exit ║
╚════════════════════════════════════════════════════════════════════════╝

***
APPENDIX C: VT100 Emulation in Procomm 2.4.3

══════════════════════════════╡ TERMINAL SETUP ╞══════════════════════════
  1) Terminal emulation ... VT-100        10) Break Length (ms) .... 350
  2) Duplex ............... FULL          11) Enquiry (CTRL-E) ..... OFF
  3) Flow control ......... XON/XOFF
  4) CR translation (in) .. CR
  5) CR translation (out) . CR
  6) BS translation ....... NON-DEST
  7) BS key definition .... DEL
  8) Line wrap ............ ON
  9) Scroll ............... ON
═════════════════════════════════════════════════════════════════════════
OPTION ══                                                      ESC» Exit

***
APPENDIX D: VT102 Emulation in Procomm Plus (see also Appendix A)

╔═══════════════════════════════════════════════════════════════════════╗
║ PROCOMM PLUS SETUP UTILITY                           TERMINAL OPTIONS ║
╟───────────────────────────────────────────────────────────────────────╢
║ A- Terminal emulation ................ VT102                          ║
║ B- Duplex ............................ FULL                           ║
║ C- Software flow control (XON/XOFF) .. ON                             ║
║ D- Hardware flow control (RTS/CTS) ... OFF                            ║
║ E- Line wrap ......................... ON    (for a Unix host)        ║
║ F- Screen scroll ..................... ON                             ║
║ G- CR translation .................... CR                             ║
║ H- BS translation .................... NON-DESTRUCTIVE                ║
║ I- Break length (milliseconds) ....... 350                            ║
║ J- Enquiry (ENQ) ..................... OFF                            ║
╟───────────────────────────────────────────────────────────────────────╢
║ Alt-Z: Help │   Press space to toggle, «─┘ to accept      │ Esc: Exit ║
╚═══════════════════════════════════════════════════════════════════════╝

***
APPENDIX E: My IRQs when Modem is in Port Com3

╔═══════════════════════════════════════════════════════════════════════╗
║ PROCOMM PLUS SETUP UTILITY                     MODEM PORT ASSIGNMENTS ║
╟───────────────────────────────────────────────────────────────────────╢
║                BASE     IRQ                                           ║
║               ADDRESS   LINE                                          ║
║ A- COM1 ...... 0x3F8    IRQ4                                          ║
║ B- COM2 ...... 0x2F8    IRQ3                                          ║
║ C- COM3 ...... 0x3E8    IRQ2                                          ║
║ D- COM4 ...... 0x2E8    IRQ3                                          ║
║ E- COM5 ...... 0x3F8    IRQ4                                          ║
║ F- COM6 ...... 0x3F8    IRQ4                                          ║
║ G- COM7 ...... 0x3F8    IRQ4                                          ║
║ H- COM8 ...... 0x3F8    IRQ4                                          ║
╟───────────────────────────────────────────────────────────────────────╢
║ Alt-Z: Help │  Press the letter of the option to change:  │ Esc: Exit ║
╚═══════════════════════════════════════════════════════════════════════╝

***
Procomm and Procomm Plus are trademarks of DataStorm Technologies, Inc.


PART II: Replys by Other Users to Procomm Problems
==================================================

(The messages in this section are published with the explicit
permission of the users giving the advice.)
=============================================================

Newsgroups: comp.sys.ibm.pc
Subject: Re: Procomm 2.4.2
Message-ID: <322.245D23AF@mudos.ann-arbor.mi.us>
Date: 2 May 89 01:47:47 GMT
Organization: A neat desk is a sign of a crazy person.
Lines: 22

In article <2769@garth.UUCP>, dbarnes@garth.UUCP (Dave Barnes) writes:

 >Got a question about Procomm 2.4.2.  When I use it as a vt100 terminal
 >here at work, it will get permanently trashed (stack overflow error) 
 >if you hit the "Ctrl" and "Break" keys at the same time.  [...]

Sorry, but that's a "well-known" bug in Procomm 2.4.2.  My advice to you
is to either avoid hitting those keys (like you suggested), or to
switch to Telix, which is a better comm. program and doesn't have
that (and other) annoying "features".  BTW, the line break key in
Procomm 2.4.2 is Alt-F7.  (And most half-decent programs trap Control-Break
anyway (so you don't accidentally send your work to never-never land),
so you should consider yourself lucky that you actually got *anything*
when you hit Control-Break.  Try Alt-X, for a slightly more civilized
way of stopping the program.)

--  
Marc Unangst
UUCP smart    : mju@mudos.ann-arbor.mi.us
UUCP dumb     : ...!uunet!sharkey!mudos!mju
UUCP dumb alt.: ...!{ames,rutgers}!mailrus!clip!mudos!mju
Internet      : mju%mudos@cardiology.ummc.umich.edu
```
{% endraw %}

## TEMP.BAS

{% raw %}
```bas
SUB WriteVid INLINE
  '
  ' Move bytes to video memory preventing screen flicker and snow.
  ' Turbo Basic calling sequence:
  '   call WriteVid (NumBytes%, Retracemode%, Source$, Scratr$, StringDisp%, _
  '     DestSeg%, Disp%)
  '   where:
  '     Numbytes% is the number of bytes that will be written to the screen.
  '     If Retracemode% <> 0, retrace is checked before writing to video
  '     memory to avoid snow.
  '     Source$ is the text string that will be written.  It must be
  '       NumBytes% + StringDisp% in length or longer.
  '     Scratr$ is the string containing the attribute bytes.  Each character
  '       of Source$ is mapped to each character of Scratr$.
  '     StringDisp% is the displacement from the start of Source$ and
  '       Scratr$ of the text to be written to the screen.
  '     DestSeg% is the segment address of the video ram.
  '     Disp% is the screen starting location to write to in terms of the
  '       number of characters displacement from the start of the screen video
  '       ram.  Thus the first row - first column is 0, second row - first
  '       column is 80, etc.
  '

  'This version is for size-displacement order of string descriptors

  $INLINE &H55, &H8B, &HEC, &H6 , &H1E, &H8B, &H16, &H0 , &H0 , &HC5
  $INLINE &H76, &HA , &H8E, &H4 , &HC5, &H76, &H6 , &H8B, &H3C, &HC5
  $INLINE &H76, &H1A, &H8B, &H4 , &H50, &HC5, &H76, &HE , &H8B, &H4
  $INLINE &HC5, &H76, &H12, &H8B, &H5C, &H2 , &H3 , &HD8, &HC5, &H76
  $INLINE &H1E, &H8B, &HC , &HC5, &H76, &H16, &H8B, &H74, &H2 , &H3
  $INLINE &HF0, &H58, &HD1, &HE7, &HFC, &H8E, &HDA, &H3D, &H0 , &H0
  $INLINE &H74, &H25, &HBA, &HDA, &H3 , &HAC, &H8B, &HEE, &H8B, &HF3
  $INLINE &H8A, &H24, &H43, &H8B, &HF5, &H8B, &HE8, &HB4, &H9 , &HEC
  $INLINE &HD0, &HD8, &H72, &HFB, &HFA, &HEC, &H22, &HC4, &H74, &HFB
  $INLINE &H8B, &HC5, &HAB, &HFB, &HE2, &HE1, &HEB, &HE , &H90, &HAC
  $INLINE &H8B, &HEE, &H8B, &HF3, &H8A, &H24, &H8B, &HF5, &H43, &HAB
  $INLINE &HE2, &HF3, &H1F, &H7 , &H5D

'cseg    segment     para public 'code'
'        assume      nothing
'        assume      cs:cseg
'
'WriteVid proc    far
'
'   push bp
'   mov  bp,sp
'   push es
'   push ds
'   mov  dx,ds:0    ;save string segment
'   lds  si,[bp+10]
'   mov  es,[si]    ;dest seg into ES
'   lds  si,[bp+6]
'   mov  di,[si]    ;dest disp into DI
'   lds  si,[bp+26]
'   mov  ax,[si]    ;Retracemode% to AX
'   push ax
'   lds  si,[bp+14]
'   mov  ax,[si]    ;Stringdisp%
'   lds  si,[bp+18]
'   mov  bx,[si+2]  ;addr of attr string
'   add  bx,ax      ;add string displacement
'   lds  si,[bp+30]
'   mov  cx,[si]    ;Numbytes% to CX
'   lds  si,[bp+22]
'   mov  si,[si+2]  ;source ptr to SI
'   add  si,ax      ;add string displacement
'   pop  ax
'   shl  di,1       ;displ * 2 for dest
'   cld             ;string direction forwd
'   mov  ds,dx      ;set string segment
'   cmp  ax,0
'   jz   h          ;not retracemode
'   mov  dx,03dah   ;DX to CGA status port
'z: lodsb           ;grab a video byte
'   mov  bp,si
'   mov  si,bx
'   mov  ah,[si]
'   inc  bx
'   mov  si,bp
'   mov  bp,ax      ;save it
'   mov  ah,9       ;save retrace mask
'o: in   al,dx      ;get 6845 status
'   rcr  al,1       ;check horiz retrace
'   jb   o          ;loop if in horiz retr:
'                   ; Prevents starting in
'                   ; mid-retr, since there
'                   ; is enough time for 1
'                   ; & only 1 STOSW during
'                   ; horizontal retrace.
'   cli             ;no ints, critical sect
't: in   al,dx      ;get 6845 status
'   and  al,ah      ;chk horiz & vert retr:
'                   ; If the video board
'                   ; doesn't report horiz
'                   ; retr while in vert,
'                   ; retr, this will allow
'                   ; several chars to be
'                   ; stuffed in during
'                   ; vertical retrace.
'   jz   t          ;loop if 0
'   mov  ax,bp      ;get the video byte
'   stosw           ;store the video word
'   sti             ;allow interrupts
'   loop z          ;go do next word
'   jmp  f
'h: lodsb           ;grab a video byte.
'   mov  bp,si
'   mov  si,bx
'   mov  ah,[si]
'   mov  si,bp
'   inc  bx
'   stosw           ;video word into screen
'   loop h          ;repeat for len in CX
'f: pop ds
'   pop es
'   pop bp
'
'WriteVid        endp
'
'cseg        ends
'            end

'  This version is for displacement-size order of string descriptors
'
'  $INLINE &H55, &H8B, &HEC, &H6 , &H1E, &H8B, &H16, &H0 , &H0 , &HC5
'  $INLINE &H76, &HA , &H8E, &H4 , &HC5, &H76, &H6 , &H8B, &H3C, &HC5
'  $INLINE &H76, &H1A, &H8B, &H4 , &H50, &HC5, &H76, &HE , &H8B, &H4
'  $INLINE &HC5, &H76, &H12, &H8B, &H1C, &H3 , &HD8, &HC5, &H76, &H1E
'  $INLINE &H8B, &HC , &HC5, &H76, &H16, &H8B, &H34, &H3 , &HF0, &H58
'  $INLINE &HD1, &HE7, &HFC, &H8E, &HDA, &H3D, &H0 , &H0 , &H74, &H25
'  $INLINE &HBA, &HDA, &H3 , &HAC, &H8B, &HEE, &H8B, &HF3, &H8A, &H24
'  $INLINE &H43, &H8B, &HF5, &H8B, &HE8, &HB4, &H9 , &HEC, &HD0, &HD8
'  $INLINE &H72, &HFB, &HFA, &HEC, &H22, &HC4, &H74, &HFB, &H8B, &HC5
'  $INLINE &HAB, &HFB, &HE2, &HE1, &HEB, &HE , &H90, &HAC, &H8B, &HEE
'  $INLINE &H8B, &HF3, &H8A, &H24, &H8B, &HF5, &H43, &HAB, &HE2, &HF3
'  $INLINE &H1F, &H7 , &H5D
'
'cseg    segment     para public 'code'
'        assume      nothing
'        assume      cs:cseg
'
'WriteVid proc    far
'
'   push bp
'   mov  bp,sp
'   push es
'   push ds
'   mov  dx,ds:0    ;save string segment
'   lds  si,[bp+10]
'   mov  es,[si]    ;dest seg into ES
'   lds  si,[bp+6]
'   mov  di,[si]    ;dest disp into DI
'   lds  si,[bp+26]
'   mov  ax,[si]    ;Retracemode% to AX
'   push ax
'   lds  si,[bp+14]
'   mov  ax,[si]    ;Stringdisp%
'   lds  si,[bp+18]
'   mov  bx,[si]    ;addr of attr string
'   add  bx,ax      ;add string displacement
'   lds  si,[bp+30]
'   mov  cx,[si]    ;Numbytes% to CX
'   lds  si,[bp+22]
'   mov  si,[si]    ;source ptr to SI
'   add  si,ax      ;add string displacement
'   pop  ax
'   shl  di,1       ;displ * 2 for dest
'   cld             ;string direction forwd
'   mov  ds,dx      ;set string segment
'   cmp  ax,0
'   jz   h          ;not retracemode
'   mov  dx,03dah   ;DX to CGA status port
'z: lodsb           ;grab a video byte
'   mov  bp,si
'   mov  si,bx
'   mov  ah,[si]
'   inc  bx
'   mov  si,bp
'   mov  bp,ax      ;save it
'   mov  ah,9       ;save retrace mask
'o: in   al,dx      ;get 6845 status
'   rcr  al,1       ;check horiz retrace
'   jb   o          ;loop if in horiz retr:
'                   ; Prevents starting in
'                   ; mid-retr, since there
'                   ; is enough time for 1
'                   ; & only 1 STOSW during
'                   ; horizontal retrace.
'   cli             ;no ints, critical sect
't: in   al,dx      ;get 6845 status
'   and  al,ah      ;chk horiz & vert retr:
'                   ; If the video board
'                   ; doesn't report horiz
'                   ; retr while in vert,
'                   ; retr, this will allow
'                   ; several chars to be
'                   ; stuffed in during
'                   ; vertical retrace.
'   jz   t          ;loop if 0
'   mov  ax,bp      ;get the video byte
'   stosw           ;store the video word
'   sti             ;allow interrupts
'   loop z          ;go do next word
'   jmp  f
'h: lodsb           ;grab a video byte.
'   mov  bp,si
'   mov  si,bx
'   mov  ah,[si]
'   mov  si,bp
'   inc  bx
'   stosw           ;video word into screen
'   loop h          ;repeat for len in CX
'f: pop ds
'   pop es
'   pop bp
'
'WriteVid        endp
'
'cseg        ends
'            end

END SUB 'WriteVid



SUB ReadVid INLINE
  '
  ' Move bytes from video memory preventing screen flicker and snow.
  ' Turbo Basic calling sequence:
  '   call ReadVid _
  '     (NumBytes%, Retracemode%, Text$, Attr$, StringDisp%, SourceSeg%, Disp%)
  '   where:
  '     NumBytes% is the number of bytes that will be read from the screen.
  '     If Retracemode% <> 0, retrace is checked before reading from video
  '       memory to avoid snow.
  '     Text$ is the text string that will be contain the characters read from
  '       the screen. It must be preset to NumBytes% + StringDisp% in length
  '       or longer.
  '     Attr$ is the string that will contain the attribute bytes.  Each
  '       character of Text$ will be mapped to each character of Scratr$.
  '       It must be preset to Numbytes% + StringDisp% in length or longer.
  '     StringDisp% is the displacement from the start of the Text$ and Attr$
  '       string to begin placing the characters read from the screen.
  '     SourceSeg% is the segment address of the video ram.
  '     Disp% is the screen starting location to read from in terms of the
  '       number of characters displacement from the start of the screen video
  '       ram.  Thus the first row - first column is 0, second row - first
  '       column is 80, etc.
  '

  'This version is for size-displacement order of string descriptors

  $INLINE &H55, &H8B, &HEC, &H1E, &H6 , &HBA, &HDA, &H3 , &HA1, &H0
  $INLINE &H0 , &H8E, &HC0, &HC5, &H76, &H1A, &H8B, &H4 , &HC5, &H76
  $INLINE &H1E, &H8B, &HC , &HC5, &H76, &H12, &H8B, &H5C, &H2 , &HC5
  $INLINE &H76, &HA , &H8E, &H1C, &H6 , &H50, &HC4, &H7E, &HE , &H26
  $INLINE &H8B, &H5 , &H3 , &HD8, &HC4, &H7E, &H6 , &H26, &H8B, &H35
  $INLINE &HC4, &H7E, &H16, &H26, &H8B, &H7D, &H2 , &H3 , &HF8, &H58
  $INLINE &H7 , &HD1, &HE6, &HFC, &H3D, &H0 , &H0 , &H74, &H23, &HB4
  $INLINE &H9 , &HEC, &HD0, &HD8, &H72, &HFB, &HFA, &HEC, &H22, &HC4
  $INLINE &H74, &HFB, &HAD, &HFB, &H26, &H88, &H5 , &H8B, &HEF, &H8B
  $INLINE &HFB, &H26, &H88, &H25, &H8B, &HFD, &H43, &H47, &HE2, &HE1
  $INLINE &H3B, &HC0, &H74, &H11, &HAD, &H26, &H88, &H5 , &H8B, &HEF
  $INLINE &H8B, &HFB, &H26, &H88, &H25, &H8B, &HFD, &H43, &H47, &HE2
  $INLINE &HEF, &H7 , &H1F, &H5D

'cseg    segment     para public 'code'
'        assume      nothing
'        assume      cs:cseg
'
'ReadVid  proc far
'    push bp
'    mov  bp,sp
'    push ds
'    push es
'    mov  dx,03dah   ;point DX to CGA status port
'    mov  ax,ds:0    ;string segment
'    mov  es,ax      ; to ES
'    lds  si,[bp+26] ;Retracemode%
'    mov  ax,[si]    ; to AX
'    lds  si,[bp+30] ;NumBytes%
'    mov  cx,[si]    ; to CX
'    lds  si,[bp+18] ;disp of attr str
'    mov  bx,[si+2]  ; to BX
'    lds  si,[bp+10] ;Sourceseg%
'    mov  ds,[si]    ; to DS
'    push es         ;
'    push ax
'    les  di,[bp+14]
'    mov  ax,es:[di] ;Stringdisp%
'    add  bx,ax      ;add string displacement
'    les  di,[bp+6]  ;Disp%
'    mov  si,es:[di] ; to SI
'    les  di,[bp+22] ;disp of text str
'    mov  di,es:[di+2] ; to DI
'    add  di,ax      ;add string displacement
'    pop  ax
'    pop  es         ;
'    shl  si,1       ;displacement * 2 for source
'    cld             ;set string direction to forward
'    cmp  ax,0
'    jz   .7         ;not retmode, use simpler routine
'.5: mov  ah,9       ;move horiz. + vertical retrace
'                    ; mask to fast storage
'.9: in   al,dx      ;get 6845 status
'    rcr  al,1       ;check horizontal retrace
'    jb   .9         ;loop if in horizontal retrace:
'                    ; this prevents starting in mid
'                    ; retrace, since there is enough
'                    ; time for 1 and only 1 STOSW
'                    ; during horizontal retrace
'    cli             ;no ints during critical section
'.6: in   al,dx      ;get 6845 status
'    and  al,ah      ;check for both kinds of retrace:
'                    ; if the video board does not
'                    ; report horizontal retrace while
'                    ; in vertical retrace, this will
'                    ; allow several characters to be
'                    ; stuffed in during vertical
'                    ; retrace
'    jz   .6         ;loop if zero. else clear to
'                    ; access video ram
'    lodsw           ;grab char + attribute).
'    sti             ;allow interrupts
'    mov  es:[di],al ;get character
'    mov  bp,di      ;save pointer to text string
'    mov  di,bx      ;get pointer to screen attribute
'    mov  es:[di],ah ;get screen attribute
'    mov  di,bp      ;restore pointer to text string
'    inc  bx         ;increment ptr to scr attribute
'    inc  di         ;increment pointer to text string
'    loop .5         ;do cx (numbytes) times
'    cmp  ax,ax      ;MASM V4 complains if just:
'    jz  .8          ;  jmp .8
'.7: lodsw           ;grab character + attribute
'    mov  es:[di],al ;get character
'    mov  bp,di      ;save pointer to text string
'    mov  di,bx      ;get pointer to screen attribute
'    mov  es:[di],ah ;get screen attribute
'    mov  di,bp      ;restor pointer to text string
'    inc  bx         ;increment ptr to scr attribute
'    inc  di         ;increment pointer to text string
'    loop .7         ;do cx (numbytes) times
'.8: pop  es
'    pop  ds
'    pop  bp
'
'
'ReadVid endp
'
'cseg        ends
'            end

'  This version is for displacement-size order of string descriptors
'
'  $INLINE &H55, &H8B, &HEC, &H1E, &H6 , &HBA, &HDA, &H3 , &HA1, &H0
'  $INLINE &H0 , &H8E, &HC0, &HC5, &H76, &H1A, &H8B, &H4 , &HC5, &H76
'  $INLINE &H1E, &H8B, &HC , &HC5, &H76, &H12, &H8B, &H1C, &HC5, &H76
'  $INLINE &HA , &H8E, &H1C, &H6 , &H50, &HC4, &H7E, &HE , &H26, &H8B
'  $INLINE &H5 , &H3 , &HD8, &HC4, &H7E, &H6 , &H26, &H8B, &H35, &HC4
'  $INLINE &H7E, &H16, &H26, &H8B, &H3D, &H3 , &HF8, &H58, &H7 , &HD1
'  $INLINE &HE6, &HFC, &H3D, &H0 , &H0 , &H74, &H23, &HB4, &H9 , &HEC
'  $INLINE &HD0, &HD8, &H72, &HFB, &HFA, &HEC, &H22, &HC4, &H74, &HFB
'  $INLINE &HAD, &HFB, &H26, &H88, &H5 , &H8B, &HEF, &H8B, &HFB, &H26
'  $INLINE &H88, &H25, &H8B, &HFD, &H43, &H47, &HE2, &HE1, &H3B, &HC0
'  $INLINE &H74, &H11, &HAD, &H26, &H88, &H5 , &H8B, &HEF, &H8B, &HFB
'  $INLINE &H26, &H88, &H25, &H8B, &HFD, &H43, &H47, &HE2, &HEF, &H7
'  $INLINE &H1F, &H5D
'
'cseg    segment     para public 'code'
'        assume      nothing
'        assume      cs:cseg
'
'ReadVid  proc far
'    push bp
'    mov  bp,sp
'    push ds
'    push es
'    mov  dx,03dah   ;point DX to CGA status port
'    mov  ax,ds:0    ;string segment
'    mov  es,ax      ; to ES
'    lds  si,[bp+26] ;Retracemode%
'    mov  ax,[si]    ; to AX
'    lds  si,[bp+30] ;NumBytes%
'    mov  cx,[si]    ; to CX
'    lds  si,[bp+18] ;disp of attr str
'    mov  bx,[si]    ; to BX
'    lds  si,[bp+10] ;Sourceseg%
'    mov  ds,[si]    ; to DS
'    push es         ;
'    push ax
'    les  di,[bp+14]
'    mov  ax,es:[di] ;Stringdisp%
'    add  bx,ax      ;add string displacement
'    les  di,[bp+6]  ;Disp%
'    mov  si,es:[di] ; to SI
'    les  di,[bp+22] ;disp of text str
'    mov  di,es:[di] ; to DI
'    add  di,ax      ;add string displacement
'    pop  ax
'    pop  es         ;
'    shl  si,1       ;displacement * 2 for source
'    cld             ;set string direction to forward
'    cmp  ax,0
'    jz   .7         ;not retmode, use simpler routine
'.5: mov  ah,9       ;move horiz. + vertical retrace
'                    ; mask to fast storage
'.9: in   al,dx      ;get 6845 status
'    rcr  al,1       ;check horizontal retrace
'    jb   .9         ;loop if in horizontal retrace:
'                    ; this prevents starting in mid
'                    ; retrace, since there is enough
'                    ; time for 1 and only 1 STOSW
'                    ; during horizontal retrace
'    cli             ;no ints during critical section
'.6: in   al,dx      ;get 6845 status
'    and  al,ah      ;check for both kinds of retrace:
'                    ; if the video board does not
'                    ; report horizontal retrace while
'                    ; in vertical retrace, this will
'                    ; allow several characters to be
'                    ; stuffed in during vertical
'                    ; retrace
'    jz   .6         ;loop if zero. else clear to
'                    ; access video ram
'    lodsw           ;grab char + attribute).
'    sti             ;allow interrupts
'    mov  es:[di],al ;get character
'    mov  bp,di      ;save pointer to text string
'    mov  di,bx      ;get pointer to screen attribute
'    mov  es:[di],ah ;get screen attribute
'    mov  di,bp      ;restore pointer to text string
'    inc  bx         ;increment ptr to scr attribute
'    inc  di         ;increment pointer to text string
'    loop .5         ;do cx (numbytes) times
'    cmp  ax,ax      ;MASM V4 complains if just:
'    jz  .8          ;  jmp .8
'.7: lodsw           ;grab character + attribute
'    mov  es:[di],al ;get character
'    mov  bp,di      ;save pointer to text string
'    mov  di,bx      ;get pointer to screen attribute
'    mov  es:[di],ah ;get screen attribute
'    mov  di,bp      ;restor pointer to text string
'    inc  bx         ;increment ptr to scr attribute
'    inc  di         ;increment pointer to text string
'    loop .7         ;do cx (numbytes) times
'.8: pop  es
'    pop  ds
'    pop  bp
'
'
'ReadVid endp
'
'cseg        ends
'            end

END SUB 'ReadVid
```
{% endraw %}

## TRANSFER.TXT

{% raw %}
```
From:    Timo Salmi                               
To:      All                                      Msg #598, 18-Oct-88 09:09am
Subject: Procomm Plus Problems

   I have seen some Procomm Plus questions repeatedly being asked in
the bulletin boards.  1) How to use Zmodem with Procomm Plus. 2) How
to get the Scandinavian characters working.  3) How to transfer
files between two PC's (when neither is a bulletin board).
   I think that I have some sort of solutions to these problems, and
what I intend to do is to put the solutions in my TSPFONxx.ARC
collection beginning from the forthcoming version 2.0. Thus
TSPFON20.ARC will include these files, while the current version
TSPFON19.ARC doesn't yet include them.

   Stay tuned, Timo

---
 * Origin: Micro Maniacs OPUS  (Opus 2:515/1)


TRANSFER.TXT 27-Dec-88

For using Zmodem with Procomm Plus see the batch files ZMOD-D.BAT, ZMOD-U.BAT,
ZMODEM-D.BAT, ZMODEM-U.BAT and TSPFON.INF.

For using the Scandinavian characters see the batch files PCAT.BAT and PC.BAT.

This textfile, transfer.txt, addresses itself to the question of transfering
data between two PCs, when neither is a bulletin board. (For the transfer of
ascii data between a PC and a home computer see a separate text SENDFILE.LIS
in my SENDFILE.ARC.)

Two different kind of situations arise in the data transfer between PCs.
  a) When the PCs can be connected directly ("are in the same room").
  b) The connection is through a modem.

Both the cases can be tackled by using the Procomm Plus host mode. In the
direct connection the easiest procedure is, however, the following, which
I have succesfully used between my laptop and a desktop, in both directions.

=============================================================================
                            P A R T  1
=============================================================================

1) Connect the two PCs with a proper cable. If both the machines have 25 pin
serial (COM) ports, a modem cable may well do. If you have an internal (card)
modem, do not use its port, but a free serial port.

2) Call PCPLUS on both the machines.

3) Invoke the Line/Port Setup menu by Alt-P and set the same baud rates,
parities, data bits, and stop bits (see below) on both the machines. The port
assignments may differ from COM1 and each other. Depending on the machines
you may have to lower the speed (or you might even increase it).

      ╔═════════════════════════════════════════════════════════╗
      ║            CURRENT SETTINGS: 19200,N,8,1,COM1           ║
      ╠═════════════════════════════════════════════════════════╣
      ║                                                         ║
      ║ BAUD RATE   PARITY     DATA BITS   STOP BITS   PORT     ║
      ║                                                         ║
      ║ 1)    300   N) NONE    Alt-7) 7    Alt-1) 1    F1) COM1 ║
      ║ 2)   1200   E) EVEN    Alt-8) 8    Alt-2) 2    F2) COM2 ║
      ║ 3)   2400   O) ODD                             F3) COM3 ║
      ║ 4)   4800   M) MARK                            F4) COM4 ║
      ║ 5)   9600   S) SPACE                           F5) COM5 ║
      ║ 6)  19200                                      F6) COM6 ║
      ║ 7)  38400                                      F7) COM7 ║
      ║ 8)  57600   Alt-N) N/8/1                       F8) COM8 ║
      ║ 9) 115200   Alt-E) E/7/1                                ║
      ║                                                         ║
      ║ Esc) Exit   Alt-S) Save and Exit  YOUR CHOICE:          ║
      ╚═════════════════════════════════════════════════════════╝

4) First on the RECEIVING PC invoke downloading by pressing the PageDown key.
Select a protocol. XMODEM is a safe choice here. Give a suitable name to the
file to be received.

  ╔══╡ Download Protocols - 100736 bytes free ╞════════════════════════════╗
  ║                                                                        ║
  ║ 1) XMODEM        5) TELINK         9) WXMODEM       13) YMODEM-G BATCH ║
  ║ 2) KERMIT        6) MODEM7        10) IMODEM        14) ZMODEM-D       ║
  ║ 3) YMODEM        7) SEALINK       11) YMODEM-G      15) ZMOD-D         ║
  ║ 4) ASCII         8) COMPUSERVE B  12) YMODEM BATCH  16) EXTERN 3       ║
  ║                                                                        ║
  ║ Your Selection: 1   (or press ENTER for XMODEM)                        ║
  ╚════════════════════════════════════════════════════════════════════════╝

     ╔═══╡ Receive XMODEM ╞════════════════════════════════════════════════╗ 
     ║                                                                     ║ 
     ║ Please enter filename: d:\testfile.txt                              ║ 
     ║                                                                     ║ 
     ╚═════════════════════════════════════════════════════════════════════╝ 
                                             ╔══════════════════════════════╗
                                             ║      PROTOCOL: XMODEM        ║
                                             ║     FILE NAME: testfile.txt  ║
                                             ║     FILE SIZE:               ║
                                             ║   BLOCK CHECK:               ║
                                             ║  TOTAL BLOCKS:               ║
                                             ║ TRANSFER TIME:               ║
                                             ║   TRANSMITTED:               ║
                                             ║    BYTE COUNT:               ║
                                             ║   BLOCK COUNT:               ║
                                             ║   ERROR COUNT:               ║
                                             ║  LAST MESSAGE:               ║
                                             ║      PROGRESS: ▒▒▒▒▒▒▒▒▒▒▒▒▒ ║
                                             ╚══════════════════════════════╝

5) Now on the SENDING PC invoke uploading by pressing the PageUp key. Select
the same protocol as in the receiving PC. Give the name of the file to be
sent.

  ╔══╡ Upload Protocols ╞══════════════════════════════════════════════════╗
  ║                                                                        ║
  ║ 1) XMODEM        5) TELINK         9) WXMODEM       13) YMODEM-G BATCH ║
  ║ 2) KERMIT        6) MODEM7        10) IMODEM        14) ZMODEM-U       ║
  ║ 3) YMODEM        7) SEALINK       11) YMODEM-G      15) ZMOD-D         ║
  ║ 4) ASCII         8) COMPUSERVE B  12) YMODEM BATCH  16) EXTERN 3       ║
  ║                                                                        ║
  ║ Your Selection: 1   (or press ENTER for XMODEM)                        ║
  ╚════════════════════════════════════════════════════════════════════════╝
                                                                            
     ╔═══╡ Send XMODEM ╞═══════════════════════════════════════════════════╗
     ║                                                                     ║
     ║ Please enter filename: b:\paslib2\datefn.pa                         ║
     ║                                                                     ║
     ╚═════════════════════════════════════════════════════════════════════╝
                                                                            
                                             ╔══════════════════════════════╗ 
                                             ║      PROTOCOL: XMODEM        ║ 
                                             ║     FILE NAME: datefn.pa     ║ 
                                             ║     FILE SIZE: 883           ║ 
                                             ║   BLOCK CHECK:               ║ 
                                             ║  TOTAL BLOCKS: 7             ║ 
                                             ║ TRANSFER TIME: 00:01         ║ 
                                             ║   TRANSMITTED:               ║ 
                                             ║    BYTE COUNT:               ║ 
                                             ║   BLOCK COUNT:               ║ 
                                             ║   ERROR COUNT:               ║ 
                                             ║  LAST MESSAGE:               ║ 
                                             ║      PROGRESS: ▒▒▒▒▒▒▒▒▒▒▒▒▒ ║ 
                                             ╚══════════════════════════════╝ 

This is all there is to it in the direct file transfer!

=============================================================================
                            P A R T  2
=============================================================================


Now let us look at the transfer using a modem when the PCs are at different
locations. Of course, if you have second phones to coordinate things with, at
least in theory, you could use the same method as in the direct transfer.

To begin with you must set your modem options, and your Procomm options,
appropriately in order to act a host. I shall concentrate on the role of the
host, because the role of the calling user is exactly the same as in using a
normal bulletin board. In fact, Procomm Host Mode IS (albeit a limited)
bulletin board.

*************************************************************************
* Hence, there are two parties to the file transfers. The HOST who sets *
* up the system, and the USER who shall call the host's machine, and    *
* perform the transferring by downloading or uploading.                 *
*************************************************************************

1) I have a Nokia VB312 300/1200 modem, and I set it as follows in order to
act as the host. The dips are in the factory settings with the following two
exceptions. Dip A2 OFF imposing the 1200 bit/s mode. Dip A7 OFF so that the
circuits 107 DSR and 109 DCD (whatever they are!?) follow the carrier.

2) Next you must set your Procomm options. The most important are given below.
They are found in the setup menu invoked by Alt-S in Procomm Plus. Study them
carefully.

╔════════════════════════════════════════════════════════════════════════════╗
║ PROCOMM PLUS SETUP UTILITY                                   MODEM OPTIONS ║
╟────────────────────────────────────────────────────────────────────────────╢
║ A- Initialization command ..                                               ║
║ B- Dialing command ......... ATDT                                          ║
║ C- Dialing command suffix .. ^M                                            ║
║ D- Hangup command .......... ~~~+++~~~ATH0^M                               ║
║ E- Auto answer command .....                                               ║
║ F- Wait for connection ..... 35  seconds                                   ║
║ G- Pause between calls ..... 4   seconds                                   ║
║ H- Auto baud detect ........ ON                                            ║
║ I- Drop DTR to hangup ...... YES                                           ║
║ J- Send init if CD high .... YES                                           ║
╟────────────────────────────────────────────────────────────────────────────╢
║ Alt-Z: Help │     Press the letter of the option to change:    │ Esc: Exit ║
╚════════════════════════════════════════════════════════════════════════════╝
╔════════════════════════════════════════════════════════════════════════════╗
║ PROCOMM PLUS SETUP UTILITY                                TERMINAL OPTIONS ║
╟────────────────────────────────────────────────────────────────────────────╢
║ A- Terminal emulation ................ ANSI                                ║
║ B- Duplex ............................ FULL                                ║
║ C- Software flow control (XON/XOFF) .. ON                                  ║
║ D- Hardware flow control (RTS/CTS) ... OFF                                 ║
║ E- Line wrap ......................... ON                                  ║
║ F- Screen scroll ..................... ON                                  ║
║ G- CR translation .................... CR                                  ║
║ H- BS translation .................... DESTRUCTIVE                         ║
║ I- Break length (milliseconds) ....... 350                                 ║
║ J- Enquiry (ENQ) ..................... OFF                                 ║
╟────────────────────────────────────────────────────────────────────────────╢
║ Alt-Z: Help │     Press the letter of the option to change:    │ Esc: Exit ║
╚════════════════════════════════════════════════════════════════════════════╝
╔════════════════════════════════════════════════════════════════════════════╗
║ PROCOMM PLUS SETUP UTILITY                               HOST MODE OPTIONS ║
╟────────────────────────────────────────────────────────────────────────────╢
║ A- Welcome message ... Welcome to PROCOMM PLUS Host!                       ║
║ B- System type ....... OPEN                                                ║
║ C- Auto baud detect .. ON                                                  ║
║ D- Connection type ... MODEM                                               ║
║ E- Upload directory                                                        ║
║    D:\                                                                     ║
║ F- Download directory                                                      ║
║    D:\                                                                     ║
╟────────────────────────────────────────────────────────────────────────────╢
║ Alt-Z: Help │     Press the letter of the option to change:    │ Esc: Exit ║
╚════════════════════════════════════════════════════════════════════════════╝

3) Next you have to set your modem into the autoanswer mode. This can be done
manually in most modems, but I use the following script file. (Script files
are executed from Alt-F5 in Procomm Plus.) Also see the separate script file
HOSTMODE.ASP developed from the script below.

   ;
   ; HOSTINI2.ASP by Timo Salmi
   ;

   TRACE ON
   SET BACKSPACE DEST      ;These may by superfluous if you
   SET TRANSLATE ON        ; have not altered them from your
   EMULATE ANSI            ; defaults
   TRACE OFF

   PAUSE 1
   TRANSMIT "AT^M"         ;Wake up the modem

   PAUSE 1
   TRANSMIT "ATZ^M"        ;Initialize the modem

   PAUSE 1
   TRANSMIT "ATS0=1^M"     ;Set autoanswer on
   WAITFOR "OK"  5
   IF NOT WAITFOR
     ALARM 1
     MESSAGE "Failed to set autoanswer on"
     GOTO OUT              ;Superfluous when the test is the last
   ENDIF                   ; as it is here

   OUT:

4) Copy all the files you want to be available for the USER to the directory
D:\ which was set as the download directory in the host mode options menu
option F-.

5) Invoke the host mode by pressing alt-Q, and wait for the USER to call.

6) From now on it is mostly up to the user. When he/she has called, and logged
in, he can download the files from D:\ or upload files there in accordance
with the options presented by Procomm Plus host mode. At the same time you see
(in a small scale) what being a SysOp entails.

If your user cannot get a connection (which is very usual until the HOST has
learned the ropes) look carefully through your settings again starting from
your modem. I can assure that once you get it right, the system works. I have
tested and used it succesfully many times myself.

For more information on the host mode see Procomm Plus manual.
Procomm Plus is a trademark of Datastorm Technologies Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1536

     Volume in drive A has no label
     Directory of A:\

    LIST              9876   2-26-90   5:02p
    TEMP     BAS     17537   2-26-90  11:57a
    HOSTMODE ASP      1775  12-27-88   9:51a
    OPUS     ASP      2801   6-21-88   3:28p
    GO       BAT        38   8-10-89   4:13p
    PC       BAT      1905   3-11-89   2:07p
    PCAT     BAT      1944   3-11-89   3:28p
    PFON     BAT      1961   8-10-88  11:53p
    ZMOD-D   BAT      1554   5-09-89  10:38a
    ZMOD-U   BAT      2579   5-09-89  10:41a
    ZMODEM-D BAT      1407  12-27-88  10:09a
    ZMODEM-U BAT      2425  12-26-88   8:48p
    HEXAGAME EXE     21248   4-07-89  11:48p
    LINSOLVE EXE     79824   9-27-89   9:40p
    MANAGAME EXE     24880   4-07-89  11:43p
    MLTIGAME EXE     18656   4-07-89  11:47p
    PCPFON   EXE     27280   4-21-89   8:46p
    TSGAME   INF      3480   6-02-89   7:14a
    TSPFON   INF     14355   5-29-89   2:30p
    TSPROG   INF      3824  10-28-89   4:59p
    LINSOLVE LIS     22958   9-27-89  10:01p
    FILE1536 TXT      3257   3-12-90   9:55p
    GO       TXT      1002   8-10-89   4:13p
    PCPQA    TXT     35395   5-19-89   8:06a
    TRANSFER TXT     15820  12-27-88   9:31a
           25 file(s)     317781 bytes
                           32768 bytes free
