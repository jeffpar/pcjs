---
layout: page
title: "PC-SIG Diskette Library (Disk #2051)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2051/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2051"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TAPCIS"

    TAPCIS automates the use of CompuServe and, in the process, reduces
    connect time to a minimum.  The time-consuming tasks of reading or
    replying are done using the facilities of your own computer where the
    computer time is "free."
    
    This efficiency can save you a great deal of money.  If it takes ten
    minutes to compose a message online, it could cost you two dollars or
    more.  Prepared offline and sent with TAPCIS, the cost might be as low
    as 22 cents for the same message.  TAPCIS makes it possible for you to
    actively participate in the forum without destroying your budget.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2051.TXT

{% raw %}
```
Disk No: 2051                                                           
Disk Title: TAPCIS                                                      
PC-SIG Version: S1                                                      
                                                                        
Program Title: TAPCIS                                                   
Author Version: 5.2                                                     
Author Registration: $75.00                                             
Special Requirements: Access to CompuServe.                             
                                                                        
TAPCIS automates the use of CompuServe and, in the process, reduces     
connect time to a minimum.  The time consuming tasks of reading or      
replying are done using the facilities of your own computer where the   
computer time is "free".                                                
                                                                        
This efficiency can save you a great deal of money.  Let's say it takes 
you ten minutes to compose a message online; it might cost you two      
dollars or more.  Prepared offline and sent with TAPCIS, the cost might 
be as low as 22 cents for the same message.  TAPCIS makes it possible   
for you to actively participate in the forum without busting your       
budget.                                                                 
                                                                        
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## TOP20.TXT

{% raw %}
```
TOP20.TXT is a compilation of the most-asked questions on the TAPCIS
Forum and their answers.  Why do we get these questions at all?

1:  Something buried in the manual needs to be brought forward;

2:  Something happened at CompuServe at the time of, or subsequent to, the
release of the current version;

3:  We goofed.

Here they are, in no particular order:


**********

1.  HELP!!!!  How do I get started?

Tap's primary automatic functions are carried out with <N>ew to get new
messages and/or headers, create file catalogs, download selected files, and
<O> which will perform all of the above except pulling down new messages
and/or headers.

Lets take this one step at a time.  TAPCIS needs to have the CIS system-wide
defaults set for it by running the default script.   The first thing you need
to do is set the CIS defaults by running <Alt-P>.  Make sure that you have
PARAMS.SCR in your Tap directory and logon with <Alt-P>.  Tap will go online
and configure your online profile appropriately.

The next step is to enter the Forum names in <F>orums screen and press <enter>
followed by "Q" (without the quotes) when prompted for sections.

Select all of the forums (but not Easyplex) and logon with <ALT-J> to let Tap
join the Forums for you and set various Forum defaults.

Now go back into the <F>orums screen and for each Forum, you have entered,
press <F8> and select the forum by pressing its corresponding letter.  You
will see all of the Forum's sections appear.  Select the sections you desire
(putting a space between each number) and press <enter>, or just press
<enter>, and choose <Q>uick scan (message headers), <R>ead new messages, or
Read messages <M>arked only to you.

**********

2.  I just used L>ibrary to create a [Forum].CAT file, but now I can't view
it with the C>at command.  The screen flickers and goes back to the main menu.

CompuServe recently introduced a new feature to the Forum Library software.
There is now an option for a "short" form of file listing.  The format of that
new short form, however, is not compatible with the current version of TAPCIS.

The default format in all Forums is supposed to be for the original LONG
format, but we have had quite a few reports of the SHOrt format being offered
to some members in some Forums.  CompuServe has fixed this, but any Forums set
up during 10/89 may need to be adjusted by TAPCIS users.

The temporary fix is to go to those Forums and issue the OPT command, and then
set the Library option for the LONG format.  Then you'll be able to create
catalogues that TAPCIS can read properly.

Alternatively, you can do this by setting up an A>dvanced command.
From the TAPCIS main menu, select A>dvanced, U>ser command, select the
appropriate <forum#>, and enter the command:

       OPT;DIS;L;P

When you next go online, Tap will send the command to correct your option
setting.

You can use the main menu K>ill command, select the <forum#>, and the C>at
file as the one to be deleted.  You'll need to redo the L>ibrary search if you
decide to K>ill the CAT file.  Another option is to salvage the catalog
entries you already downloaded by editing the file, with a plain text editor,
and adding a dummy user ID of [00000,00] (left justified on a line by itself)
just prior to each file description.

**********

3.  TAPCIS gets to a Forum/EasyPlex OK, but then it stops.

What you are seeing in EASYPLEX might be caused by your option
settings.  Version 5.2a needs your EASYPLEX options to be set as
follows: EDITOR uses line numbers [NO], MODE of operation is
[COMMAND], and Output is PAGED [NO].  While interactive in EASYPLEX
enter SET at the prompt, and you will see a menu.

You can also change those settings by running Alt-P, and I recommend
doing it that way since you may need to adjust your system-wide
defaults, as well. To run Alt-P, be sure you have the file
PARAMS.SCR on your Tap program directory. Hit Alt-P at the main
menu, and Tap will go online to set your system defaults  and
EASYPLEX options to what it needs for smooth operation.

If your current PARAMS.SCR is dated prior to 10/89, you might
want to grab the latest version first from Lib 1 of the TAPCIS
Forum.

If you are logging in through a supplemental network and hanging at
the Forum prompt, many people have reported changing one of their
default CompuServe settings helped rid them of similar problems.

GO DEFAULT and select 2 to change your permanent settings, and 4 for
terminal options. Set Delay to 0.  On your way out, be sure to
confirm that the change is permanent.

**********

4.  I log on OK, but a few seconds after connecting, TAPCIS reports the time
and number of characters sent and says it's pausing for 30 seconds.

If possible, try swapping cables; Tap is sensitive about cables
being wired properly.  Others have reported similar problems have
disappeared after replacing a cable with one having at least nine
pins wired through.

In addition, check your modem's CD and DTR settings.  They may not
be set so your modem is actually tracking carrier or DTR.  If you
have a 2400b or a more recent 1200b modem, it's very possible they
are controlled by software switches. Many users set CD to &C1, and
DTR to &D2.  Consult your manual, however; these settings can be
controlled by hardware switches.

If they are controlled by software switches, you can send AT&F<enter>
to restore your modem to its factory defaults, and then
AT&C1&D2&W<enter> to record the &C1 and &D2 settings in the modem's
nonvolatile ram.  Use Tap's ! function from the main menu, which
allows you to "talk" to your modem in terminal mode for this.

As a last resort, boot Tap with the C command line switch.  (Enter
TAPCIS C at the DOS prompt).  This will defeat carrier detect
checking altogether, something not recommended for continued
operation.

**********

5.  I need more than 20 Forums/6 phone numbers.

A way to handle more than 20 forums, is to have two separate
PARAMS.CIS files, each with different forums defined to it.  You
would switch PARAMS.CIS files before you invoke TAP, and do it by
booting Tap with BAT files.

You can use the DOS command COPY PARAMS.CIS PARAMS.A to preserve
your current F>orum and P>arameters setups.  After doing that, you
can change your forum lineup, phone numbers, etc., and copy the
PARAMS.CIS that creates to PARAMS.B.

Now you have two sets of parameters, A and B, and corresponding
PARAMS.CIS files for each set.  You can set up a .BAT file for your
A forums called TAPA.BAT which says something like the following:

 cd C:\tap
 copy PARAMS.A PARAMS.CIS
 tapcis %1 %2
 copy PARAMS.CIS PARAMS.A

When you wish to visit your B forums, exit Tap, and invoke it with
TAPB.BAT:

 cd C:\tap
 copy PARAMS.B PARAMS.CIS
 tapcis %1 %2
 copy PARAMS.CIS PARAMS.B

The %1 and %2 will allow you to use any command line switches you
may wish to use.  If you invoke Tap as TAPA N, for example, Tap will
perform the N command with your A forums.

**********

6.  When I use Alt-J to join a new forum, why aren't all the announcements
that flash by saved?  Is there any way to recover them?

TAPCIS doesn't try to capture those announcements when it's joining a forum,
but you can have them downloaded and captured with an advanced command.  From
the TAPCIS main menu, select A>dvanced, U>ser command, indicate the <forum#>,
and enter the command:

       ANN;1;6;8;T

If you set this up before you logon for N>ew headers and messages, the News
Flash, Membership, and New Member Announcements will be captured to your
<forum>.MSG file as part of the TAPCIS generated forum announcement.

**********

7.  I just entered PCMAGNET as a forum and TAPCIS didn't seem to recognize it.

PC MagNet is a collection of services that includes 4 forums; PCMagNet itself
is not a forum, but the top menu of the MagNet services.  The very first time
you enter PC MagNet, you will have to fill out a survey (connect time charges
are suspended, but network charges will apply).  So, before you set up the
forums, you should log on <I>interactive and type "GO PCMAG" to fill out the
questionnaire.

Once that's done, you need to name the PCMagNet forums a certain way, so that
TAPCIS will know to send the "GO PCMAG" command before accessing them. Here's
a list of the TAPCIS names and the MagNet forums they take you to:

    TAPCIS     FORUM
    --------   -----------
    PCM_AFTE   AFTER HOURS   Non computer talk, Recreation
    PCM_EDIT   EDITORIAL     Opinions from the Editors
    PCM_PROG   PROGRAMMING   Programming, Operating Systems
    PCM_UTIL   UTILFORUM     Utilities, Tips, Applications

Don't have PCMAGNET entered as a forum.  If you do, and you select it, you
will hang at the top menu in PCMAGNET.

**********

8.  I'm trying to create a CATalog, but TAPCIS pauses after every description,
waiting for me to press a key.

It sounds as though one or two of your CompuServe system defaults
aren't set the way Tap expects to see them.  GO DEFAULT to change
your permanent settings.  Select display options from the permanent
settings menu.  Brief prompts must be set to yes, and paged display
must be set to no.  As you make your way out of the menus, confirm
that you want the changes to be permanent.

These settings should have been made with the Alt-P command.  If you
haven't run it yet, I suggest you do, since there are likely other
lurking problems.  Make sure you have PARAMS.SCR in your TAPCIS
directory.  Then, just hit Alt-P at the main menu, and Tap will go
online and set your system defaults and EASYPLEX options to what it
needs to work properly.

If your PARAMS.SCR is prior to 10/89, you may want to grab the latest
version from Lib 1 of the TAPCIS Forum.

**********

9.  I realize TAPCIS needs to be in "expert" mode, but I need menus when
online I>nteractive.  How do I get them back?

There are some SET commands you can use to change your overall settings for
the current session.  They don't work at the OK prompt, but they work just
about every place else.  At a regular CompuServe system ! prompt, type SET
HELP, to see the options you can change.  A couple you may find helpful are
SET BRIEF NO, SET PAGED YES and SET LINES 23.  (To get to a CompuServe prompt
from an OK prompt, enter GO CIS.)

You'll need to send individual OPT;MOD MEN;S commands in each forum.

You can prepare two simple scripts to present menus for each session, which
can be invoked with <PgUp>.

GMENU.SCR:         <--- to be invoked at any system ! prompt

S SET PAGED YES^M
S SET BRIEF NO^M
S SET LINES 23^M

FMENU.SCR:         <--- to be invoked in each Forum

S OPT;MOD MEN;S^M

**********

10.  I registered long ago, but, suddenly, TAPCIS is telling me I'm an
unregistered user.  How do I get rid of those initial screens?

If you are using 5.2a look at page 28 of the printed manual.  If you are using
an older version, or upgraded to 5.2a without ordering the manual, look at the
separate sheet of instructions which were included with the manual.  If you
cannot find either, leave a message on the TAPCIS Forum to *Sysop, and mention
your permanent registration number (on the distribution disk), and that you
have already read this file.  A solution will follow by Easyplex.

**********

11.  I understand there's a new version coming up.  Should I hold off
registering?

There's never an advantage to holding off, and it could put you in
violation of the agreement you made when you started using the program.
To date, all upgrades have been free for the download cost to registered
users, and those who registered within a month or two of a major version
change received both the old and the new, with manual, when it began
shipping, at no added cost.

While these policies may change in the future, our intention is always to
give registered users a substantial break.

**********

12.  There's a lot of talk on the forum about "add-ons".  Where are they?
Which is the best?

There are lots of companion programs in the TAPCIS Forum Library 2.  Which
ones you should try is hard to say, it depends a lot on how you're going to be
using TAPCIS and CIS -- though you don't actually need to get any of them,
there's an add-on program for almost every kind of file that TAPCIS creates.

If you're very interested in the Libraries, you might want to take a look at
CatScan (in the files CATEXE.ARC and CATUTL.ARC) it's a very full featured
catalog management program.  DELSOR.ARC (by the same author) is also quite
good, but more limited in function.

If you're using the Quick scan method of downloading and marking headers, take
a look at TAPMARK (TAPMRK.ARC).  TAPMARK will help keep track of what subject
titles you've been reading in each forum, and can make it lots easier to
select threads to download.

If you're keeping lots of messages for later reference, you might want to look
at some of the message file management programs.  Some of the more popular
ones are MsgVu (MSGVU.ARC), TapOrder (TAPORD.ARC) and RECON (RECON.ZIP).

What tools you may want depends on how you're using the system.  TAPCIS is a
very powerful program and it can take time to see how some of the features fit
together and when they can be used.

While we encourage add-ons and offer forum resources for their authors to
support them, we suggest that you become quite familiar with TAPCIS before
getting deeply involved in add-ons.

**********

13.  I did a L>ibrary search and aborted it.  Now, every time I go to that
Forum, TAPCIS tries to do the same catalog.  How can I stop it?

It sounds as though your previous L>ibrary search didn't end normally, in
which case the original <forum>.DOW file was left on your disk and the new
request has been appended to it.  The easiest thing to do is to delete that
file and re-enter your new search request.  From the TAPCIS main menu, choose
K>ill, select the <forum#>, and then select the D>ow file as the file to be
killed.   Then redo the L>ibrary search commands you want to use for the new
search.

**********

14.  TAPCIS and my modem don't seem to get along.  Help!

First, TAPCIS considers COM1 to be the first available port; COM2, the second,
etc.  If you have an empty COM slot, try toggling the C>omport setting on the
P>arameters screen through the four possibilities.

Next, make sure, on an external modem, that at least nine pins are wired
through.  If your modem accepts & commands, put &C1&D2 between the "AT" and
"DT" of your I>nit string.

Finally, here are some overkill I>nit strings that have helped others with
similar problems:

               ATZ^M?KAT^M?KATDT       or
               ATZ^M?3ATDT             or
               ATZ^M?3ATV1DT           or
               AT^M?3ATZ^M?K?2ATV1DT   or
               AT^M?3ATZ^M?2ATV1DT     or
               ^MATZ^M?K?1ATV1DT       or
               ATZ^M?K?2ATV1X4\N3DT  (Everex 24E modem, only)
               ^MATZ^M?K?1ATX2L1DT   (Everex 1200) X2 & L1 optional

**********

15.  I see lots of strange characters when I use TAPCIS.  What are they?

The strange characters may be escape sequences intended for VT100-type
terminals.  You can probably correct it by running <Alt-P> to set
your CIS defaults, be sure you have a copy of the file PARAMS.SCR in your Tap
directory, and logon from the TAPCIS main menu with <Alt-P>. TAPCIS will go
online and set your system defaults, including setting your Terminal type to
[OTHER].

If you're connecting at a speed you don't normally use (300 vs 1200 vs 2400
for example), you may need to run <Alt-P>.  CompuServe stores your defaults
separately for each speed you use to connect, that means you need to establish
a set of CIS defaults for each speed.

**********

16.  My P>arams screen is completely messed up.

The PARAMS.CIS file contains a lot of information that TAPCIS needs to
reference frequently during operation, and so that file is loaded into RAM
while the program is in use.  When you exit TAPCIS, the contents are rewritten
to disk (including any changes to your Forum setup or other configuration
factors that you may have made).

Now it's possible that something like static electricity or a bad memory chip
could corrupt the contents of the file while it is in RAM, which can cause the
effect you describe.

Your best protection against this, as against all computer mishaps, is to keep
a good backup of the PARAMS.CIS (and all other!) files.   If you don't have a
good backup of PARAMS.CIS, you'll need to re-enter that information now; when
you've done that, MAKE A BACKUP!      ---Joan

**********

17.  Every time I log on, I need to hit <enter> at the first CompuServe menu.

If you're logging on from outside the U.S. or through a LATA, Tymnet or
Telenet, try loading TAPCIS as "tapcis p".  This will stop Tap from sending
ctrl-P when it sees a menu.  While that saves a few seconds on a direct link,
some PADs (Packet Assembler/Disassembler) use ^P as the "attention"
character and intercept it, getting TAPCIS out of sync.

**********

18.  How can I set up a forum for Q for some sections and R for others?

You would have to set-up the same forum in two slots.  Set-up the first slot
as an "R" (without the quotes) forum and specify the section you want to read
followed by an "X" (eg., 2 X).  The "X" says, do not reset the High Message
Number.  Set-up the second slot as an "M" forum and specify all of sections
you want to read messages addressed to you.

Be sure to select both "Forums" when you want to read messages there.

**********

19.  Is there any way to get TAPCIS to work with ENS?

Although Tapcis does not automate ENS, you can send the clippings to your
Easyplex box so you can download them in your next automated session and read
them offline at your leisure.  Here are the steps:

1)SCAN first, then

2)SEND 1-10 (for 10 stories) or SEND 1,3,5-7,9, then

3)At the User Id prompt, press <enter>, and CIS will automatically send these
marked stories to your Easyplex box.  About 10 min. later the stories will be
available for downloading with Tapcis.

**********

20.  I'm ready to register.  How?  How much?

To register Tapcis, if you are using a downloaded copy, answer yes to the
opening screen, answer the questions (including you credit card info) and your
order will be transmitted on your next log-on (be sure that Easyplex is
selected).

You can also order TAPCIS by mail from the Support Group by calling
800-USA-GROUP or leaving an Easyplex for Bonnie at 74020,10.  Either way, it
comes with a printed manual and a 90-day money-back guarantee.

Cost is $79, postpaid.  MC, Visa, Amex, personal checks and corporate
Purchase Orders accepted.  For all but MC and Visa, orders must be sent
by an Easyplex message, phone call, or U.S. Mail

 Support Group, Inc.
 Lake Technology Park
 P. O. Box 130
 McHenry, MD 21541
 800 USA-GROUP
 301 387-4500
 301 387-7322 (Fax)
 CompuServe ID (orders and follow-ups only): 74020,10

When you receive your disks, leave a message to *Sysop with your registration
number for access to Section/Library 9 (registered users).

Rev 9/29/89
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2051

     Volume in drive A has no label
     Directory of A:\

    FILE2051 TXT      2147   2-15-90  12:03p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   2-15-90  12:12p
    RATES    CIS       114   3-01-89   3:09p
    READ     ME       4434  12-11-89   6:04p
    README   COM      6307  12-11-89   6:04p
    TAPCIS   EXE    237408   2-15-89
    TAPCIS   HLP     14865   2-15-89
    TOP20    COM     22017  12-11-89   6:05p
    TOP20    TXT     19440  10-29-89   9:34p
           10 file(s)     307310 bytes
                            9216 bytes free
