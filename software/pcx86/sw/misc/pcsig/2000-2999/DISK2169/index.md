---
layout: page
title: "PC-SIG Diskette Library (Disk #2169)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2169/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2169"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HOME CONTROL"

    Have your computer turn your lights and appliances on and off!  Build
    yourself a computerized home.
    
    Someday all homes will be intelligent.  You can get on-board now with
    the HOME CONTROL PRIMER, an excellent introduction to home automation.
    Light and appliance control is accomplished by using the X-10
    Powerhouse Computer Interface. The HOME CONTROL PRIMER consists of three
    independent programs:
    
    ~ SENDX10 turns lights and appliances on/off from the DOS command line
    or from batch files.
    
    ~ SYNCHX10 synchronizes the clock inside the X-10 Powerhouse Computer
    Interface with that of your PC.
    
    ~ GAMEPORT explores the analog and digital input capabilities of the PC
    gameport.  The Game Port Monitor lets you hook up sensors to your PC's
    game port so you can begin to experiment with environment monitoring.
    You can measure light intensity in a room, monitor windows and doors,
    measure temperature, and observe human movement through open spaces.
    
    Taken together, these programs will teach you the fundamentals of
    computerized home control.  Move your home into the 21st Century today!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BBSMSGS1.TXT

{% raw %}
```

------------------------------------------------------
From:  The Circuit Cellar BBS  203/871-1988

       Messages concerning X-10 interface
       and BSR modules

       February 1988
------------------------------------------------------

Msg#:   41 *GENERAL*
02/06/88 14:26:08
From: JEFF KERNER
To: STEVE CIARCIA (Rcvd)
Subj: BSR MODULES

Dear Steve

Are the "Plug 'N Power" modules sold by Radio Shack the
same as the BSR modules you condemned in your July '83 article
"Build the RTC-4 Real-Time Controller", or have they remedied
the problems.

I have a need to control 20+ lamps/appliances in association
with a home security/convenience system at my parents
residence.  Things like the pump to their solar-heated swimming
pool (sounds like the typical California stereotype doesn't it...),
the sprinkler system, etc can all be run with a simple on/off
control.  As for the "Plug 'N Power" modules,  they're a lot easier
to use than running wires with relays, but I don't enjoy throwing
money away either!

So how 'bout it, Steve.  Are these things any better 5 years
later?

Thanks!!
-Jeff Kerner


Msg#:   42 *GENERAL*
02/06/88 14:27:02
From: EDDIE WHITE
To: JEFF KERNER (Rcvd)
Subj: REPLY TO MSG# 41 (BSR MODULES)

If you will look at the current Radio Shack flyer, they are selling a toy to 
control BSR/X-10 modules.  There is now a company X-10 Ltd. that is the 
division of BSR that makes any BSR "approved" module.
As I understand it, RS bought this gadget from GE who had it built to their 
specs by X-10 before GE got out of the market. It looks like it will do what 
you need.

Eddie


Msg#:   43 *GENERAL*
02/06/88 14:27:36
From: KEN DAVIDSON
To: EDDIE WHITE (Rcvd)
Subj: REPLY TO MSG# 42 (BSR MODULES)
BSR is no longer in the module business.  A group of employees bought out the 
business and the company is called X-10 (USA) Ltd. X-10 makes all the modules 
and controllers that are private labeled and sold by companies like Radio 
Shack, Sears, Stanley, and so on.

I did see that Radio Shack bought out GE's HomeMinder and is offering it in 
their latest catalog.  Looks like a good deal.

By the way, all the reports of false triggering and reliability problems with 
X-10 modules during the past few years have been corrected in the redesigned 
versions of the modules.  The old modules were mostly brown and had the house 
code and module number dials on the sides of the module.  Those were the flakey
ones.  The new modules are mostly ivory and require a screwdriver to set the 
codes.  They are completely redesigned and very reliable.  A look inside 
reveals marked improvements from the old design to the new.


Msg#:   44 *GENERAL*
02/06/88 14:27:56
From: EDDIE WHITE
To: KEN DAVIDSON (Rcvd)
Subj: REPLY TO MSG# 43 (BSR MODULES)


Ken,
I wanted some info on the new modules and after a bunch of phone calls I was 
able to talk to one of their engineering managers.   He told me that X-10 was a
us}  US subsidary of BSR, ltd.  But what your saying may be the }ireal story.

I went ahead and bought one of the Homeminder toys.  Its kinda neat.  The cpu 
board is sealed up in soldered box and all I could see through holes in the top
was a z80 cpu.   Wish I knew what video chip they were using.
thanks
}iEddie


Msg#:   45 *GENERAL*
02/06/88 14:28:41
From: STEVE CIARCIA
To: JEFF KERNER (Rcvd)
Subj: REPLY TO MSG# 41 (BSR MODULES)


Apparently the new X-10 modules are better than the old ones (they seem about 
the same in my experience, however).

Regarding the X-10 computer interface, it can be connected to any  computer 
that has one input and one output bit (a parallel printer port will do). You 
merely send it TTL data which it transmits to the AC line. If you subscribe to 
INK now you won't miss it. 

To my knowlege, I believe Ken already has the transmitter running on the 
BCC-180. The only thing holding up the article right now is X-10. They are 
upset about how much detail I want to devulge about their system and they don't
want me to build and X-10 command receiver (which is the companion article). 
I'm still negotiating.

Believe it or not, I proposed this $30 X-10 interface to BYTE and they didn't 
want it. They (the editor in chief, that is) said it wasn't in  the best 
interest of their audience (maybe they have been writing to a different group 
than I have). I should be looking at articles (mind you, not projects) that 
have a broader appeal.
-- Steve


Msg#:   46 *GENERAL*
02/06/88 14:29:01
From: JEFF KERNER
To: EDDIE WHITE (Rcvd)
Subj: REPLY TO MSG# 42 (BSR MODULES)


Eddie,
Thanks for the tip!  I'll check it out.  I haven't seen the flyer, though.  I 
usually get about 2 or 3 of those things and they usually get tossed out by my 
girlfriend who diligently tries to keep my apartment from looking like the TRW 
swap-meet. Any idea what RS calls this "toy"?

-Jeff


Msg#:   47 *GENERAL*
02/06/88 14:29:30
From: EDDIE WHITE
To: JEFF KERNER (Rcvd)
Subj: REPLY TO MSG# 46 (BSR MODULES)


They call it "Homeminder".  When it comes up with its id screen it has a GE 
copyright.  I went ahead and bought one and stayed up all night playing.  (I 
had a bucnch of modules I had nev_er used)

When I got this one, it was the only one in town I could f}iind.

Eddie


Msg#:  157 *GENERAL*
02/09/88 21:44:03
From: RICHARD DOERING
To: JEFF KERNER
Subj: REPLY TO MSG# 41 (BSR MODULES)
The "Homeminder" is GE's failed attempt at what they called a "Home Control 
System".  It orginally retailed for something like $400 back in 1984.  Radio 
Shack got their hands on the thousands sitting in the warehouse and did a slick
job of reworking them.  They covered over all the GE labels with theirs, 
rewrote the manual with their name on top and even made a brand new box to hold
the system in.  All this for $60 is a pretty good deal!  I had to buy one just 
to say that I had the first attempt at Home Control by a huge consumer 
electronics giant!  You should have seen the look my wife gave me when she saw 
me take the thing out of the box (brand new) and proceed to rip all the Radio 
Shack labels off of it!  Oh well, living with a certified electronics kook, she
is used to  seeing me rip apart brand new "toys".  In any event, the point I 
wanted to make is that wouldn't it be ironic if the first failed attempt at 
Home Control by a major company turns into the first mass market home control 
success by another major company (the Shack).  I think the price is what kept 
people away from products like this in the first place!  Enough of the soapbox.
I really wanted to make my first message on the new system a really LONG ONE so
I could give this thing a good test.  I love the new FAST RESPONSE of this 
system.



Msg#:  300 *GENERAL*
02/14/88 10:46:03
From: EVAN HOLLANDER
To: JEFF KERNER
Subj: REPLY TO MSG# 41 (BSR MODULES)

Jeff, While the radio shack homeminder has some neat features the home control 
system provided by Steve's byte article some time ago is quite a bit more 
flexible than the homeminder.  I am currently using one with about 22  modules 
to control most of the lights in my home.Several are turned on by presence. ( a
passive ir detector sees you and the HCS turns the light on).  I have been very
pleased with the reliability of the HCS and the relative ease of use.
Evan


Msg#: 1129 *GENERAL*
03/16/88 08:59:25
From: ROBERT MCILVAINE
To: JEFF KERNER
Subj: REPLY TO MSG# 41 (BSR MODULES)
Jeff, I have been tinkering with the BSR controller stuff for several years. I 
have not found the units to particularly un predictable. I did at first  and 
spent a considerable amount of time researching carrier current operation 
techniques. My research on this actually started back in college where I ran 
the campus radio station on carrier current. The units, transmitters or 
receivers are sensitive to line impedence changes particularly between phases 
of the 240/110 VAC line. This can be overcome with a couple of tricks. I have 
recently completed and am working on rev 2 of a stereo control interface which 
is controlled by the BSR carrier signals (ie. I acn control my stereo from 
anywhere there is a controller or a computer with BSR output capabilities). 
Would love to talk about this home control stuff all day but in closing let me 
say I puschased one of the Radio Shack/GE HOME MINDER. I think it's a neat box.


Msg#:   48 *GENERAL*
02/06/88 14:36:48
From: GARY D PACK
To: ALL USERS
Subj: BUS INTERFACE


I have a small problem I hope someone can advise me on. I'm designing a project
that has a microprocesser that will have as a peripheral a modem chip.  I want 
the micro portion to run on battery on power failure, while the modem chip will
be powered by AC only. Obviously I can't just have that chip on the buss but 
would something like anding the inputs to the output enable of a buss interface
chip, with the processor control line and a 5 volt line powered from the AC 
only side provide adequate to provide isolation.(I wonder if I could make that 
sentence any longer?) Hope thats clear enough. Any comments would be 
appreciated

Gary Pack



Msg#:   77 *GENERAL*
02/07/88 02:09:16
From: EDDIE WHITE
To: STEVE  CIARCIA
Subj: X-10
Steve,
Some time ago I called the people at X-10 trying to pry new information out of 
them.  I've lost my notes, but the guy I talked to was adamatly opposed to 
releasing any info.  In fact when I told him that I had an article in front of 
me by you-know-who,he said, "well, thats just impossible; never heard of it and
it will never happen."
What is the deal with those people?  Can they stop you from publishing an 
article on X-10 toys?

Eddie


Msg#:  111 *GENERAL*
02/08/88 12:11:27
From: STEVE CIARCIA
To: EDDIE WHITE (Rcvd)
Subj: REPLY TO MSG# 77 (X-10)
There's freedom of the press and reality. Sure, I can publish anything I want 
but if I care that the info is to be use by the readers, its best that I don't 
do it without the blessing of the company that manufactures the stuff that I 
use in the article. Unfortunately, X-10 is paranoid. They think that every time
I tell anybody what's in their little boxes that the whole world is going to 
rip off their design and put them out of business (perhaps this should be an 
indication of just how solid their patent really is). I have an X-10 
transmitter interface article planned for a future issue of INK (BYTE doesn't 
want anything that reeks of home control anymore). The transmitter is made by 
X-10 and the article would be on interfacing it to various computers. I also 
plan a companion 120 KHz AC line receiver article that would allow full duplex 
AC line communication as well as control. X-10 is adamantly against me 
presenting any kind of a receiver and is screaming patents/law suit if I tell 
you how to make a stinking 120 KHz AC line receiver. Well, I'm not thrilled 
with anyone telling me what I can't do so we'll see about that. Unfortunately, 
I want the device that they plan to manufacture (the transmitter) if I P____ 
them off then anyone reading the project will have trouble getting it. Instead,
I wish that a few of you guys would write to Dave Rye at X-10 (hey Ken. You got
an address?) and suggest that my writing article enhances their sales. BYTE and
these guys are all making a big mistake again. They think that "hacker" means 
dumb and no money. But, what do you expect from people who never correspond 
with their audience, only their ad reps.
-- Steve


Msg#:  158 *GENERAL*
02/09/88 21:56:28
From: RICHARD DOERING
To: EDDIE WHITE (Rcvd)
Subj: REPLY TO MSG# 77 (X-10)
It would seem to me that X-10's main source of income is from selling the 
little receiver modules by the zillions and not by selling transmitters.  Any 
OEM that puts an X-10 transmitter in their product is automatically going to 
stimulate alot of sales of receiver modules.  It would take a mega company, 
like Black & Decker, to compete with X-10 on receiver modules and not Ciarcia 
or Micromint.  I've spoken with the folks at X-10 along these lines in the past
year and I really think they miss the boat.  The first really good mass 
marketed Home Control System is going to have and X-10 transmitter in it and 
possibly even an X-10 receiver to process messages as well.  X-10 will probably
want to sue the maker, but will look pretty ridiculous if thousands of their 
receiver modules are sold because of it.


```
{% endraw %}

## BBSMSGS2.TXT

{% raw %}
```

----------------------------------------
   Discussions on BSR X-10 Interface

   The Circuit Cellar BBS
   203/871-1988

   June 1988
----------------------------------------


Msg#: 3597 *PROJECTS*
06/02/88 21:54:03
From: JOHN APPLEYARD
To: STEVE CIARCIA
Subj: X-10 TRANSMITTER
Steve, I just received the new Micromint Catalog today, and I noticed that they
are now offering a X-10 transmitter that is  capable of being directly attaced 
to the BCC-180 parallel port system. Two questions, if you please: 1. Is this 
THE TRANSMITTER that you are going to describe in the next INK issue ? If not, 
what are the differences going to be? 2. Is CCI going to offer anything like 
this, or only available thru Micromint? Thanks for the info and keep the 
projects coming!


Msg#: 3682 *GENERAL*
06/06/88 13:06:18
From: RON WILSON
To: TAEGAN GODDARD
Subj: REPLY TO MSG# 3537 (BSR X-10 INTERFACE)
TAEGAN, I've seen two different X-10 computer interfaces: one that simply 
impresses serial data (pre-encoded by the host PC) on the power line;
and another with a CPU and realtime clock on board (you download commands to 
the box much like programming a VCR to recording multiple different TV 
programs).  Which version of the X-10 interface is your program for? Thanks, 
Ron



Msg#: 3705 *GENERAL*
06/07/88 08:30:54
From: KEN DAVIDSON
To: RON WILSON (Rcvd)
Subj: REPLY TO MSG# 3682 (BSR X-10 INTERFACE)
The code he uploaded is for the serial-based computer interface that contains 
intelligence.  Code for the power line interface module described in the third 
issue of Circuit Cellar INK will be posted in the INK file section shortly.


Msg#: 3752 *GENERAL*
06/09/88 07:02:09
From: ROBERT MCILVAINE
To: KEN DAVIDSON (Rcvd)
Subj: REPLY TO MSG# 3705 (BSR X-10 INTERFACE)
Have missed somthing? What power line interface in the third issue of INK? For 
that matter, What third issue of INK? I think I only remember getting two 
issues, I'll have to check the files at home.


Msg#: 3757 *GENERAL*
06/09/88 08:28:19
From: KEN DAVIDSON
To: ROBERT MCILVAINE (Rcvd)
Subj: REPLY TO MSG# 3752 (BSR X-10 INTERFACE)
The third issue of INK started mailing about a week ago.  You should be seeing 
it soon.  I referred to it in the past tense because I thought you had seen the
power line interface module in the article.  I guess it was in X-10's ads that 
you first read about the module?  I haven't seen any references to it besides 
in those ads.


Msg#: 3770 *GENERAL*
06/09/88 12:40:01
From: RON WILSON
To: KEN DAVIDSON (Rcvd)
Subj: REPLY TO MSG# 3705 (BSR X-10 INTERFACE)
Radio Shack's first X-10 computer interface (which was made by BSR) was simply 
the power line interface; it was listed in their catalog for $34.95. (I 
disassembled one of them about 5 years ago). Their later inteface (also made by
BSR) could be programmed by the host computer like a VCR and then left to 
execute the ins{tructions ad infinitum. (I have one of these, but my TRS-80 is 
long dead and I never did get around to decoding the box's command language 
before the TRS-80 died - now with your program, I can start using the 
controller again) Thanks, Ron


Msg#: 3762 *GENERAL*
06/09/88 11:38:59
From: GARREN DAVIS
To: KEN DAVIDSON (Rcvd)
Subj: BSR X-10 INTERFACE
I need an interface to control BSR modules from a serial RS 232 port I can't 
remember if i ever saw one in BYTE. Any info would be a great help


Msg#: 3774 *GENERAL*
06/09/88 16:21:14
From: KEN DAVIDSON
To: GARREN DAVIS (Rcvd)
Subj: REPLY TO MSG# 3762 (BSR X-10 INTERFACE)
I know Steve never mentioned it and I doubt it would have been in any other 
BYTE articles.  X-10 makes a serial-based computer interface with some smarts 
in it.  You buy it with software written for a specific computer.  Using that 
software, you program events based on time-of-day and send that list to the box
serially.  Once programmed, you unplug the host computer and the interface 
stands alone.  You can also write your own software to talk to the interface 
and not use X-10's software.  That way, you can use it with any computer that 
has a serial port capable of running 600 baud.

I've seen the interface for sale at most places that sell modules (except Radio
Shack).  DAK and Heathkit are two that come to mind.


Msg#: 3811 *GENERAL*
06/10/88 10:58:14
From: GARREN DAVIS
To: KEN DAVIDSON (Rcvd)
Subj: REPLY TO MSG# 3774 (BSR X-10 INTERFACE)
I saw the interface in heath but i've never seen one in DAK.Heaths was a little
expensive for me.I have one for my TRS-80 but i dont know the so ftware 
protocall that it sends out of the cassette port.I just subscribe d to INK 
hoping there would be an interface project.Hope I didn't miss a nything good.


Msg#: 3867 *GENERAL*
06/13/88 11:12:08
From: GARREN DAVIS
To: KEN DAVIDSON (Rcvd)
Subj: BSR SOFTWARE
I took apart the BSR interface from my TRS 80  and figured out how it works.It 
uses a bit to modulate the AC and a bit to check for the zero crossing of the 
AC.I need some software to use this interface on my PC-XT.Also I would like to 
get the back issues of ink starting at the beginning of this year


Msg#: 3893 *GENERAL*
06/14/88 08:20:53
From: KEN DAVIDSON
To: GARREN DAVIS (Rcvd)
Subj: REPLY TO MSG# 3867 (BSR SOFTWARE)
The third issue of INK has an article that describes how to create valid X-10 
codes given a zero crossing and a bit that gates a 120-kHz oscillator onto the 
power line.  The IBM PC software described in the article will be available 
here shortly.

Go to the INK information menu from the main menu to find out how to get back 
issues.


Msg#: 3900 *GENERAL*
06/14/88 11:00:44
From: GARREN DAVIS
To: KEN DAVIDSON (Rcvd)
Subj: REPLY TO MSG# 3893 (BSR SOFTWARE)
I just called the MICROMIN and asked if they sell an interface.they said they 
have the interface and the software for the PC.I have seen BYTE projects sold 
from the MICROMINT before.Would this project in the third issue of INK be the 
one that the MICROMINT is selling.


Msg#: 3924 *GENERAL*
06/15/88 08:21:45
From: KEN DAVIDSON
To: GARREN DAVIS (Rcvd)
Subj: REPLY TO MSG# 3900 (BSR SOFTWARE)
Yes, the interface, cables, and software described in the third issue of INK 
are exactly what Micromint is selling as the BCX/52, BCX/180, and BCX/PC.


Msg#: 3932 *GENERAL*
06/15/88 10:31:48
From: GARREN DAVIS
To: KEN DAVIDSON (Rcvd)
Subj: REPLY TO MSG# 3924 (BSR SOFTWARE)
Thanks, I'll get the back issues of INK then I should be up and running.Just to
let you know what I am doing with the interface,it's something very similar to 
Steves HOME CONTROL SYSTEM except I have a 2 meter HAM transceiver and voice 
feedback so i can control the house from my telephone or from my radio in my 
car using touch tones Thanks again for all your help.You have a great bulliten 
board

```
{% endraw %}

## BBSMSGS4.TXT

{% raw %}
```
---------------------------------------------
  Discussion on Converting a BSR module
  into a momentary contact module

  Circuit Cellar BBS
  203/871-1988

  March 1988
---------------------------------------------

Msg#:  742 *PROJECTS*
03/01/88 00:21:19
From: RICHARD DOERING
To: ALL
Subj: X-10 MOMENTARY CONTACT
Has anyone ever taken an X-10 receiver module and converted it to a isolated 
contact momentary contact?  Such a "garage door opener" is lacking in the X-10 
lineup.  I converted an X-10 appliance module to momentary contact the other 
day by disassembling the latching relay and machining the little plastic cam 
inside.  This works well but, unfortunatel y, only about 90% of the time.  Has 
anyone ever tried such a feat electronically rather than mechanically?


Msg#:  754 *PROJECTS*
03/01/88 09:02:33
From: KEN DAVIDSON
To: RICHARD DOERING (Rcvd)
Subj: REPLY TO MSG# 742 (X-10 MOMENTARY CONTACT)
There was a letter in Electronic House magazine a few months ago from one of 
the members of the team who implemented the HCS (Leo Taylor) on just that 
topic.  Unfortunately, nothing more came from it than "Yea, X-10 should get on 
the ball and make one."  I can look up the exact issue if you'd like.


Msg#:  770 *PROJECTS*
03/01/88 22:21:04
From: RICHARD DOERING
To: KEN DAVIDSON (Rcvd)
Subj: REPLY TO MSG# 754 (X-10 MOMENTARY CONTACT)
I'll look at the more recent back issues I have of Electronic House.  Was the 
discussion in their Mr. Module section?  In any event, I asked someone at X-10 
about coming out with a momentary contact and I got a response along the lines 
of "we've done one but we decided not to release it because of potential 
liability problems".  He seemed to be worried that the receiver might false and
cause a garage door to close on someone.  Of 


Msg#:  786 *PROJECTS*
03/02/88 08:54:58
From: KEN DAVIDSON
To: RICHARD DOERING (Rcvd)
Subj: REPLY TO MSG# 770 (X-10 MOMENTARY CONTACT)
It sounds more like a REliability problem if they're worried about false 
triggering.  :-)  Yes, it was in the Mr. Module section.





----------------------------------------------
  Discussion on BSR codes and receiving/
  transmitting units

  Circuit Cellar BBS
  203/871-1988

  March 1988
----------------------------------------------

Msg#: 1130 *PROJECTS*
03/16/88 09:12:02
From: ROBERT MCILVAINE
To: STEVE CIARCIA (Rcvd)
Subj: BSR CONTROLS
Steve, I've been working on BSR control things ever since I built your original
ultra sonic interface a long time ago. I heard you are doing some articles on 
controllers and things now so I thought I'd let you know some of the things 
I've been working on. I have recently completed a stereo control system which 
uses BSR carrier signals for control functions. I'm currently working on Rev2. 
It will control speakers, volume, and on/off now and will control source select
at next rev. (plans complete, just have to get enough time at the bench to 
implement.) I've also experimented with control of the whole system (BSR 
modules, stereo, etc.) from any touch tone phone in the house. I also have some
tips on solutions for power line problems which occur in carrier current 
systems. If you're interested in any of these topics let me know.  I can be 
reached at 603-673-5861 H or 617-276-1288 W


Msg#: 1140 *PROJECTS*
03/16/88 14:36:58
From: STEVE CIARCIA
To: ROBERT MCILVAINE (Rcvd)
Subj: REPLY TO MSG# 1130 (BSR CONTROLS)
I'd be very interested in your project for INK. If I din'r have so much wire 
strung through my house I'd probably be doing the sam thing. Be warned of 
something. I had planned to present a X-10 (BSR) code receiver as part of the 
INK transmiter project. When X-10 found out about it (I told them) they went 
B___S__T !  They started screaming about patent violations and junk about using
their codes and especially zero crossing transmission and reception as theirs. 
Now we all know that I can publish anything I damn well please, patented or 
not, but I usually try to have the more popular stuff manufactured as kits. A 
legal shootout with them would have eliminated manufacturing anything and left 
an audience primed for something I can't deliver. 

In exchange for NOT messing up their market right now, CCI will have access to 
the new X-10 transmitter module that will undoubtedly hard to get and we'll 
have a good project. After the dust settles, we'll check their patent and see 
about that stuff. Just becareful that you aren't X-10 test case for holding 
onto their patent.
-- Steve


Msg#: 1156 *PROJECTS*
03/17/88 07:21:14
From: ROBERT MCILVAINE
To: STEVE CIARCIA (Rcvd)
Subj: REPLY TO MSG# 1140 (BSR CONTROLS)
Steve, I would be intereseted in writing about the BSR stuff for INK. I'm not 
sure how much hold BSR has on signals once they enter the transmission medium. 
Never the less, I believe the actual control portion of my design
would be of interest to the audience. It would probably be possible to replace 
my decoder circuits with BSR's chips (it would actually reduce the chip count 
by 4 or 5), but when I originally designed the thing they were in the throws of
the formation of the new company and they weren't making any promises about 
availability. As I said above, I'd be interested in doing
an article, where do we begin. Regards, Bob McIlvaine


Msg#: 1171 *PROJECTS*
03/17/88 17:23:43
From: RICHARD ANDREWS
To: STEVE CIARCIA (Rcvd)
Subj: REPLY TO MSG# 1140 (BSR CONTROLS)

.       I wonder if these geniuses at X-10 remember the Sony Betamax. 
Sigh...some people just have to learn the hard way.  Do you have a name and 
address and/or phone number of someone at X-10 whom we can pester about this?


Msg#: 1184 *PROJECTS*
03/17/88 21:25:45
From: STEVE CIARCIA
To: RICHARD ANDREWS (Rcvd)
Subj: REPLY TO MSG# 1171 (BSR CONTROLS)
I'm not in my office right now. Email me again Monday and I'll give you a name 
and phone number. You aren't planning on burning my bridges are you?
-- Steve


Msg#: 1185 *PROJECTS*
03/17/88 21:33:25
From: STEVE CIARCIA
To: ROBERT MCILVAINE (Rcvd)
Subj: REPLY TO MSG# 1156 (BSR CONTROLS)
I believe you have a right to use and publish any technology (not deeemed as 
classified, at least) you want. You can still write an article and if it is 
well written and offers something useful to the CC INK readers, it will be 
published. Only if you manufacture something receiving X-10 codes will I expect
that the X-10 people will get excited (the key word is manufacture). They got 
concerned when i told them I was presenting a receiver because I have a history
of licensing my designs for manufacture and because they remember that 2 
articles that I did back in '76 and '77 virtually created their market for 
them. I guess they don't know whether to love or hate me. :-)
-- Steve


Msg#: 1456 *PROJECTS*
03/28/88 11:30:40
From: ROBERT MCILVAINE
To: STEVE CIARCIA (Rcvd)
Subj: REPLY TO MSG# 1185 (BSR CONTROLS)
Steve, As it turns out, I remember those articles quite well. I think I even  
have a copy of them hanging around in my files somewhere.  I have a question on
a different topic. I'm looking at a control and monitoring application and 
would like to get some detailed info on the  Micromint Z8 system. Specifically,
about the facilities for storing the programs in ROM. Can you give the low down
or can I order info from this BBS? Thanks, Mac


Msg#: 1457 *PROJECTS*
03/28/88 12:24:17
From: KEN DAVIDSON
To: ROBERT MCILVAINE (Rcvd)
Subj: REPLY TO MSG# 1456 (BSR CONTROLS)
Give Micromint a call at 800-635-3355 and ask for BCC-series literature.  If 
you have specific questions, feel free to ask here.


Msg#: 1476 *PROJECTS*
03/29/88 09:28:44
From: STEVE CIARCIA
To: KEN DAVIDSON (Rcvd)
Subj: REPLY TO MSG# 1457 (BSR CONTROLS)
Yess Ken is right the best way is to call Micromint (203-871-6170) and ask for 
a series manual set. For the BCC11 (Z8), the package is called the BCC99/11 for
$39. Similarily, for the BCC52 (8052) it is the BCC99/52 and it is also #39. 
There are about a dozen manuals in each set including all manufacturer doc 
(Zilog Z8 manual or BASIC-52) is included where necessary. Finally, a new 
manual set is being readied for the BCC180 (64180) called the BCC99/180. It 
includes not only the appropriate BCC expansion board manuals with the BCC180 
user's manual, but also the all the SB180 stuff and BASIC-180 doc (200 pages 
alone). This one weighs POUNDS and costs $59. If you ever wanted to build any 
of this hardware, these manual sets are the way to go.
-- Steve




-------------------------------------------------
  Discussion on Home Control with Steve's HCS
  and the Amiga PC

  Circuit Cellar BBS
  203/871-1988

  March - April 1988
-------------------------------------------------

Msg#: 1384 *PROJECTS*
03/25/88 05:27:54
From: ERIC HEUPEL
To: STEVE CIARCIA (Rcvd)
Subj: HCS/AVMUX & AMIGA

I'm fairly new to hardware design (good at putting them together though) and 
need to get some info... Im trying to finish the design of my parents house 
(just recieved my degree in architectural design). They have 2 amiga computers 
and an old RS model 3. My questions come in that they want an automated house 
with BSR type controls and a survailance/security system all computer 
controled. Also my father has 4 video machines (2 beta 1 vhs and a Vid -8) plus
cable etc...so an AVMUX would be perfect for his Audio Video dreams (you should
have seen the mess of AB selector and wires befor I moved out) I would like to 
control all of this through one of the Amiga computers (one 1000 the other a 
2000) or maybe a better route have them controlled by a BCC52 or SB180 with a 
serial link to the Amiga. Any suggestions ??? Also how long of a run would the 
AVMUX drive before signal noise/loss started taking an appreciable toll ?
Thanks 
:)   Eric

PS -- Any good books to actually teach  myself about hardware design (theory ) 
I have learned a bit by reading Byte and on this board just observing. 




Msg#: 1417 *PROJECTS*
03/26/88 14:36:32
From: STEVE CIARCIA
To: ERIC HEUPEL (Rcvd)
Subj: REPLY TO MSG# 1384 (HCS/AVMUX & AMIGA)

You have quite a list of goals there :-) , but I suppose you wouldn't have 
asked if you were an electrical engineer like most of the rest of us. Education
and experimentation is the route to achieving your goal. There is no single 
source book that will teach you to be a designer. That ability comes from many 
sources and takes time. Most of us just started reading a bunch of magazines 
and communicating with other people with similar interests.  Sounds like you've
done that much but it might be advisible to sit down with someone who knows 
your background and interests in more detail to plot the right future course. 
Regarding the AVMUX (which seems to be of continued interest. Perhaps it's time
to design a new one.), I am driving 25' cables and it seems OK but  it depends 
upon the termination impedance (what you have it connected to).
-- Steve


Msg#: 1418 *PROJECTS*
03/26/88 19:17:42
From: KEN HOWELL
To: ERIC HEUPEL (Rcvd)
Subj: REPLY TO MSG# 1384 (HCS/AVMUX & AMIGA)
Well -- glad to see another Amiga user interested in hardware!  For starters, 
you might consider abandoning any hardwired approach to coupling the amiga to 
the avmux and/or the bsr type modules.  I think there's a controller that 
accepts touch tones as inputs.  The Amiga can *easily* produce touch-tone 
frequencies, with which you can control the bsr modules, and perhaps thereby 
the avmux.  A letter to the editor in AmigaWorld listed the proper frequencies 
to use in AmigaBasic.  I wrote a small program to dial my telephone using those
frequencies, and it worked fine.  This way, your parents could also use their 
radio telephone as a controller!
--Ken.


Msg#: 1491 *PROJECTS*
03/29/88 23:36:23
From: ERIC HEUPEL
To: STEVE CIARCIA (Rcvd)
Subj: REPLY TO MSG# 1417 (HCS/AVMUX & AMIGA)
Thanks for the info... I have invested in a few intro type books and some more 
specific to computer hardware.. They seem to be getting me some knowledge.. 
Most of my present experience is from reading (unfortunately not by doing) your
projects from Byte. Anywho....Thanks for the projects maybe now that I have 
time and some money I'll learn by building more than just a simple hi-lo logic 
probe, and a midi interface.

Eric


Msg#: 1493 *PROJECTS*
03/29/88 23:43:32
From: ERIC HEUPEL
To: KEN HOWELL (Rcvd)
Subj: REPLY TO MSG# 1418 (HCS/AVMUX & AMIGA)
Thanks ... Which issue ?(amigaworld) I am still interested in some good 
hardware hacks for Amy. I would like to build a card for the 2000 (I am getting
a asdg 2000 & 1 box ) which would provide 2-3 extra par. ports and 1 or 2 extra
rs-232 ports.  Oh well dreams are nice to chase but once you catch them you 
need something better and bigger to chase (ami3000?).


Msg#: 1571 *PROJECTS*
04/01/88 22:32:13
From: KEN HOWELL
To: ERIC HEUPEL (Rcvd)
Subj: REPLY TO MSG# 1493 (HCS/AVMUX & AMIGA)
I'll look it up and leave another message.  I've designed a parallel port 
expander for the Amiga, using a 8255 chip.  It allows up to about 256 parallel 
ports to be added.  I've written a preliminary softward driver for it, but have
yet to actually construct the board.  It attaches to the existing parallel 
port, so high speed transfer among all ports is definately limited.  I designed
it to make a 68701 programmer, though, so speed is not one of my concerns. A 
hardware solution is much better.  I have the Micron 2 meg expansion board with
my A1000. I got the powered 2 slot chassis, and so have one extra slot.  I hope
to have some neat boards to drop in there.  Maybe yours when its finished!
--Ken.


Msg#: 1589 *PROJECTS*
04/03/88 03:58:59
From: ERIC HEUPEL
To: KEN HOWELL (Rcvd)
Subj: REPLY TO MSG# 1571 (HCS/AVMUX & AMIGA)

Right now I'm running with two boards on my expansion chassis...an Easyl (1000)
and a Starboard 2 meg. I plan to get one of ASDG's 2000 and 1 expansion 
chassis' and put the boards in there....but as the main dif between the zorro 
bus for that chassis (A2000) and anything else is size it shouldnt be to hard 
to convert it. Dont hold your breath though cause unfortunately I am not very 
learned in hardware design and have found virtually nill in help for passing 
the ports out. It shouldnt be that hard ...pull power and the neccessary lines 
off the buss ... run through drivers etc... the big question is will it work to
mount a new parrallel port as say "par.01" as device type Parrallel.device work
or do I need to write a new device driver also ?


Msg#: 1856 *PROJECTS*
04/09/88 20:47:21
From: KEN HOWELL
To: ERIC HEUPEL (Rcvd)
Subj: REPLY TO MSG# 1589 (HCS/AVMUX & AMIGA)
I wouldn't think you would need to re-write the parallel.device, but if so you 
could probably disassemble the existing device and modify it to work.  I know 
there's been a lot of talk on bix and the like to add extra serial ports, so I 
think it's possible. By the way, the AmigaWorld issue you want for the 
touchtone frequencies is Sept/Oct '87.  Also, the last Amazing computing 
advertized a pre-built interface for BSR modules, complete with intuition 
interface.  You might find it interesting.
--Ken.




------------------------------------------------
  Discussion on X-10 Transmitter and Receiver

  Circuit Cellar BBS
  203/871-1988

  March 1988
------------------------------------------------

Msg#: 1490 *PROJECTS*
03/29/88 22:59:33
From: REZA POURZIA
To: STEVE CIARCIA (Rcvd)
Subj: MORE ON X-10
Dear Steve, Any suggestions where I might be able to find the schematics for 
the new X-10 rf transmitter and receiver units?


Msg#: 1514 *PROJECTS*
03/30/88 11:19:16
From: STEVE CIARCIA
To: REZA POURZIA (Rcvd)
Subj: REPLY TO MSG# 1490 (MORE ON X-10)
One of the most parenoid companies I have ever dealt with is X-10. I don't have
a copy of the schematic in question and I wouldm't expect that X-10 would make 
it easy to obtain. The only reaso they are making this new X-10 line 
transmitter and circulating its schematic is that it is a case of "if you can't
beat 'em, join 'em". X-10 saw everyone (including us) using X-10 codes in 
products. Now they say that you have to use their OEM line transmitter or they 
will sue for violating their patents. Personally, I think it's a crock but the 
transmitter module is cheaper to use and I won't fight it.
-- Steve


Msg#: 1528 *PROJECTS*
03/30/88 22:42:07
From: REZA POURZIA
To: STEVE CIARCIA (Rcvd)
Subj: REPLY TO MSG# 1514 (MORE ON X-10)
Thank you Steve.  I guess I was pipe dreaming about information as complete as 
your September 1980 Radio Electronics article!  Anyway, the reason I want the 
schematic is to convert the transmitter unit into an IR receiver and RF 
transmitter unit.  This should be fairly easy because they use the NEC 6121G 
chip in the transmitter and that chip is fairly well documented in NEC data 
books.  The output (pin 5) goes to an rf trasmitter of about 300 MHZ.  I 
managed to get my CORE unit learn the code from pin 5.  Now All I have to do is
learn how to is figure out how to make the rf transmitter work indepndantly 
with an MC3373 receiver or build my own receiver.  I would appreciate any 
comments from anyone who has hacked with the transmitter.  Ever since I 
purchased a CORE I've been looking for a way of working the X-10's with IR. 
Seems like the only thing that did that was the GE/Radio Shack "Home Minder" 
and it is no longer available.  By the way Steve, I haven't seen you comment on
Steve Wozniak's CORE.  I am pretty sure you are using one.  If so, what's your 
opinion about the design?


Msg#: 1540 *PROJECTS*
03/31/88 09:48:37
From: STEVE CIARCIA
To: REZA POURZIA (Rcvd)
Subj: REPLY TO MSG# 1528 (MORE ON X-10)
Believe it or not, I don't have a CORE remote control. I have a few others 
including the Master Controller that we invented here :-)  I'll look for one 
though. I'm gadget happy enough that I probably need one. The upcoming INK 
article will contain all the particulars about transmittin g (I suppose that 
includes receiving) X-10 codes. If you can find these pulse trains any where 
int the box you have with a scope you should be able to intercept them or 
introduce them. I know the old ultrasonic remote control unit could be 
converted to IR (I did it). Too bad they don't make it anymore. Keep tuned.
-- Steve



-----------------------------------------------------------
  Discussion on Steve Ciarcia's Home Control System (HCS)

  Circuit Cellar BBS
  203/871-1988

  March - April 1988
-----------------------------------------------------------

Msg#: 1074 *PROJECTS*
03/13/88 23:10:41
From: EVAN HOLLANDER
To: STEVE CIARCIA (Rcvd)
Subj: HOME CONTROL SYSTEM
Steve,
I am using one of your HCS boards and I am planning to connect a printer to the
expansion connector to monitor the system in my absence.  When I  am at home 
will it cause the HCS any problems if the HCS software has the  printer enabled
and I have turned the printer off.  I am curious if this might cause the HCS to
hang indefinetly.  P.S. The board has been installed and working perfectly for 
about 6 months now.  I am very pleased with it's operation.           Thanks, 
Evan


Msg#: 1089 *PROJECTS*
03/14/88 10:35:43
From: STEVE CIARCIA
To: EVAN HOLLANDER (Rcvd)
Subj: HOME CONTROL SYSTEM
At one time I had a printer hooked up exactly as you describe. All I did was 
leave the printer connected to the HCS port all the time and let the HCS 
control the power to the printer through an appliance module. When I left the 
house (alarm system on) the HCS turned on the printer power and when I was home
(alarm system off) it turned off the power. Worked fine for the 2 years it was 
installed.
-- Steve


Msg#: 1091 *PROJECTS*
03/14/88 13:37:55
From: EVAN HOLLANDER
To: STEVE CIARCIA (Rcvd)
Subj: HCS
Steve, I received your message about the printer connected to the HCS. Just  
curious but you said that you used to have a printer connected. Does that imply
that your also no longer using the HCS?                  Evan.


Msg#: 1137 *PROJECTS*
03/16/88 14:14:19
From: STEVE CIARCIA
To: EVAN HOLLANDER (Rcvd)
Subj: REPLY TO MSG# 1091 (HCS)
Quite the contrary! My house would grind to a halt and be pitch black without 
the HCS. No, the HCS is still used but the printer is not. Because of the 
lightning problems where I am, the printer cable sometimes would pick up noise 
and glitch the system. The HCS would still be controlling everything perfectly 
but I'd find a ream of useless printout on the floor next to it. This only 
happened a few times but I said forget this and instead parallel monitor the 
system with a BCC52 and a time-lapse video recorder. When I get home I can view
the control operations on a crt rather that on paper. Think of it as a giant 
printer buffer with no paper.
-- Steve


Msg#: 1604 *PROJECTS*
04/03/88 23:02:10
From: EVAN HOLLANDER
To: STEVE CIARCIA (Rcvd)
Subj: HCS
Steve,   I have two of your HCS boards and one of them is currently controlling
the lights in my home.  A cable which carries two seperatly shielded pairs 
connects an IBM XT clone to the terminal port of the HCS.  The cable run is 
about 20 ft.  For whatever reason I cannot get the EXEC program from Robin 
Computing to download to the HCS (or upload) at a speed greater than 1200 baud.
To see if the cable length was a problem I took the second HCS board that I 
have and connected it up to the PC via a 3 ft. commercially made cable.  The 
same problem seems to exist.  I then connected the video out port to a monitor 
so that I would be able to see what is occurring.  It appears that the EXEC 
program is missing the prompt from the HCS at speeds over 1200 baud.  Is there 
any known fix??  I would appreciate any help. My event table is 77 events and 
it takes about 30 minutes at 1200 baud. (Whew!)        Thanks,      Evan P.S. 
I'm looking forward to the March/April issue of INK....


Msg#: 1626 *PROJECTS*
04/04/88 10:13:19
From: STEVE CIARCIA
To: EVAN HOLLANDER (Rcvd)
Subj: REPLY TO MSG# 1604 (HCS)
Coincidentally, I have about a 35 foot run between my PC and the HCS. I 
remember that for a while I had tremendous problems doing downloads at anything
faster than 1200 bps too (sound familiar). Finally, I rerouted the connecting 
cable, hardwire earth grounded the HCS, and changed the serial I/O card in the 
PC. I made no software changes and everything now works fine at 4800 bps. Oh 
yeah, I also changed the RS-232 chips in the HCS. There were no software 
changes and to my knowledge there are no bugs of fixes. Check the wiring and 
the grounding. That's all I can suggest.
-- Steve


Msg#: 1749 *PROJECTS*
04/06/88 19:44:18
From: EVAN HOLLANDER
To: STEVE CIARCIA (Rcvd)
Subj: REPLY TO MSG# 1626 (HCS)
Steve,  Well I changed the serial card to a genuine IBM serial card and lo and 
behold the problem went away.  I can download error free up to  4800 baud.  I 
have used the other serial card for other projects withoud problems.  I would 
really like to understand what is different between the two. Thanks for the 
suggestions.   Evan...


Msg#: 1757 *PROJECTS*
04/07/88 02:12:03
From: ERIC BOHLMAN
To: STEVE CIARCIA (Rcvd)
Subj: REPLY TO MSG# 1626 (HCS)
It may be that the other serial card has weaker drivers or less sensitive 
receivers (they may have played loose with the voltage specs.  Some devices 
will use 0v and 5v rather than two equal but opposite voltages.  That works 
just fine when you're talking about a 1-foot cable to a modem, but it doesn't 
work very well for longer runs at higher speeds).


Msg#: 1768 *PROJECTS*
04/07/88 10:30:48
From: STEVE CIARCIA
To: EVAN HOLLANDER (Rcvd)
Subj: REPLY TO MSG# 1749 (HCS)
I think the driver chips was really my problem too. Glad you fixed it.
-- Steve




--------------------------------------------
 Discussion on Infrared Home Control Devices

 Circuit Cellar BBS
 203/871-1988

 February - May 1988
---------------------------------------------

Msg#:  632 *PROJECTS*
02/25/88 03:37:59
From: ORRIN CHARM
To: SYSOP (Rcvd)
Subj: HOME CONTROL SYSTEM

This BBS should be very interesting. Is there any data available on the Circuit
Cellar Home Control System, particularly on interfacing it to the infrared 
controller?


Msg#:  635 *PROJECTS*
02/25/88 09:01:57
From: KEN DAVIDSON
To: ORRIN CHARM
Subj: REPLY TO MSG# 632 (HOME CONTROL SYSTEM)
If you look at some of the recent messages, there's been some talk about the 
HCS and home control in general.  While nothing has been said specifically 
about I/R control, maybe someone will jump in after seeing your message.


Msg#: 3045 *PROJECTS*
05/10/88 21:23:28
From: MIKE SCULLY
To: STEVE CIARCIA (Rcvd)
Subj: I-R HOME CONTROL DEVICES
DEAR STEVE AND COMPANY:
This is my first communication with your bulletin board, and I am grateful to 
have access to it.  Without  getting into much personal history, I will 
summarize my interest in your work as follows: I am a long-time software user 
and developer who knows just enough about electronics and computer hardware to 
constantly want more knowledge.  I am really a frustrated engineer at heart who
hasn't the time to get a formal education in computer engineering, but wants to
know more.  That's what makes your BYTE columns so enjoyable to me.  Anyway, 
enough of background. I share your interest in home control devices.  I have 
had a houseful of BSR units for 4 years, along witan increasing number of IR 
remotes for appliances strung throughout the house.  Your remote control device
about a year ago sparked my interest in a similar project.  I have a PC version
of the BSR module that hooks up to a serial port.  With a little work, I can 
send software commands to the module to do real-time control of my BSR units 
from the PC.  I also have a voice-recognition board with a limited vocabulary 
(200 words) and a WATSON board that I hope to integrate into a complete home 
control system with my PC.  All I need is a real-time, RS232 device to send IR 
commands to a repeater.  Sorry, I can't continue this now, a real RIPPER of a 
storm is hitting me.  I'll call back later.


Msg#: 3058 *PROJECTS*
05/11/88 09:50:20
From: STEVE CIARCIA
To: MIKE SCULLY (Rcvd)
Subj: REPLY TO MSG# 3045 (I-R HOME CONTROL DEVICES)
Sounds like all the things you want to build are the things we are making as 
regular projects in Circuit Cellar INK Journal.
-- Steve


Msg#: 3075 *PROJECTS*
05/11/88 20:09:34
From: MIKE SCULLY
To: STEVE CIARCIA (Rcvd)
Subj: REPLY TO MSG# 3058 (I-R HOME CONTROL DEVICES)
Sounds like a great marketing answer, but I think I know you better from your 
work.  Actually, I was going to get to the subscription part of my call last 
night, but we had a real blowout of a thunderstorm here and I had to pull the 
plug on all my stuff. (Sounds like more ideas for projects: I have never found 
low-end commercial surge supressors effective for lightning-induced surges. 
Besides, too many things here interconnect to get them all: phone lines, serial
cables, audio inputs, etc.).  

Just to expound on what I would like to connect as a system.  My voice board 
has enough of a vocabulary to respond to most things I could want a home 
control system to do if I link phrases together (turn the HALLWAY LIGHT on, 
TAPE show at TEN PM WEDNESDAY).  I can design the necessary software to 
organize the recognized key words into a command process I have preprogrammed 
to do.  If it needs a BSR module, I can direct a data stream to a serial port 
on my PC-BSR control module.  I am hoping to get my hands on some of the 
third-party software available for the WATSON board to push a voice file 
through when I need audio verification.  (Some recordings of John Gielgud as a 
butler would be nice...As you wish, sir). If this works out, I would look for 
some way to poll a series of microphone connected to the VR board so that I 
could identify the location of the caller, and thus know more to make decisions
from (which LIGHT? Ah! he's in the upstairs den.).  Also, one could then open 
only the circuit to a speaker in the caller's location, and not broadcast 
responses to others in the house.  If you have seen Mastervoice's 
BUTLER-IN-A-BOX at the last several COMDEX/Fall show, you will know where I 
have developed some of my ideas.  Anyway, the first ingredient I need is a way 
to record and retransmit IR patterns, similar to your IR remote replacer, that 
works interactively with a computers I/O port.  Enough said.  I will leave you 
with this thought, get to the subscription section, and await your next column.

With sincere appreciation,

Mike Scully




---------------------------------------
  Discussion on X-10 BSR Transmitters

  Circuit Cellar BBS
  203/871-1988

  June 1988
---------------------------------------

Msg#: 3597 *PROJECTS*
06/02/88 21:54:03
From: JOHN APPLEYARD
To: STEVE CIARCIA (Rcvd)
Subj: X-10 TRANSMITTER
Steve, I just received the new Micromint Catalog today, and I noticed that they
are now offering a X-10 transmitter that is  capable of being directly attaced 
to the BCC-180 parallel port system. Two questions, if you please: 1. Is this 
THE TRANSMITTER that you are going to describe in the next INK issue ? If not, 
what are the differences going to be? 2. Is CCI going to offer anything like 
this, or only available thru Micromint? Thanks for the info and keep the 
projects coming!


Msg#: 3614 *PROJECTS*
06/03/88 09:17:47
From: KEN DAVIDSON
To: JOHN APPLEYARD (Rcvd)
Subj: REPLY TO MSG# 3597 (X-10 TRANSMITTER)
I'm actually the one who did the article for the third issue of INK.  The 
module, software, and cable in the Micromint catalog are exactly what is 
described in the article.  Originally, CCI was going to handle the product.  I 
believe Micromint is the only one selling it now.  Individual modules can be 
obtained directly from X-10 (they have an ad in the same issue).

While we're on the subject, we just got a 2-way X-10 module from X-10 (a 
sticker on the back says "Unit 1").  This thing not only transmits X-10 codes 
but will also receive them.  The front end on it filters what it hears on the 
power line, confirms that it's valid X-10 code, then sends clean 1-ms pulses to
the computer.  I have to do some software this weekend to see it work.  I'll be
doing a short follow-up article in the fourth issue of INK that describes the 
receiver portion.  X-10 also defined some new codes in their protocol that 
definitely look useful.  


Msg#: 3616 *PROJECTS*
06/03/88 10:28:22
From: JOHN APPLEYARD
To: KEN DAVIDSON (Rcvd)
Subj: REPLY TO MSG# 3614 (X-10 TRANSMITTER)
What possibilities the UNIT 1 conjures up! Is this going to be a real thing in 
the future (i.e. should I wait on the current X-10) or is this  just an 
evaluation unit with no real future ahead? Please give me some direction, if 
you please.


Msg#: 3629 *PROJECTS*
06/04/88 09:17:11
From: KEN DAVIDSON
To: JOHN APPLEYARD (Rcvd)
Subj: REPLY TO MSG# 3616 (X-10 TRANSMITTER)
Oh it is definitely a real thing for the future.  I don't know their production
plans or timeframe, but I'm quite sure it will be produced in quantity.  With 
the low cost of these modules, though, why bother waiting if you want to start 
playing with the transmitter portion now?  You can get your transmitter code 
working, then get the receiver when it's ready.  X-10's latest ad says that a 
2-way module is coming, so even X-10 is starting to promote it.

The additions to the protocol start me wondering about some of X-10's future 
plans.  They've added such function codes as "hail request" and "hail 
acknowledge," used by a transmitter to find out if there are any other 
transmitters in listening range; "all lights off" (previously there was only 
"all lights on" and "all units off"); "status request," "status on," and 
"status off," used to query the RF transceiver module to find out whether it's 
on or off; and "extended data," used to send one or more bytes of 8-bit data. 
Things are starting to look interesting.

I've written some code to support the receiver functions already.  Surprisingly
enough, since the receiver front end does such a good filtering job, the 
receiver code is much simpler than the transmitter code.  Works like a charm. 
Now I just have to figure out how to make it work entirely in the background.

```
{% endraw %}

## BBSMSGS5.TXT

{% raw %}
```

Msg#: 4381 *GENERAL*
06/28/88 15:04:38
From: ROBERT MCILVAINE
To: RICHARD ANDREWS (Rcvd)
Subj: REPLY TO MSG# 4216 (X-10 TRANSCEIVER)
It seems to me they should also produce a device that will allow multiple 
controls points from one unit. As it is now for everthing you want to control 
you have to buy a unit.


Msg#: 4382 *GENERAL*
06/28/88 15:09:11
From: ROBERT MCILVAINE
To: TAEGAN GODDARD (Rcvd)
Subj: REPLY TO MSG# 4247 (BSR MODULES)
I've found that noisy switchs on other appliances will cause false activation 
of the old brown modules. I no experience with the new tan ones, but the only 
problems I've had with the old ones is burnout or relay welding (using loads 
well within the specs).


Msg#: 4388 *GENERAL*
06/28/88 19:46:22
From: TAEGAN GODDARD
To: ROBERT MCILVAINE
Subj: REPLY TO MSG# 4382 (BSR MODULES)
I'm beginning to think that my problem is specific to this one module attached 
to my TV.  It went on again today - unanticipated - without anyone turning on 
an electrical device.  Of course other appliances were operating at the time --
could be a refrigerator kicking in, for instance. Then again maybe my house is 
spooked and the tan modules wouldn't help much either  :-) !!   (This problem 
is actually kind of fun because its only that one module anyway.  It would be 
something else if I had an appliance that shouldn't be left on unattended) 
Under computer control, I really like Steve's method of sending refresh codes 
out to make sure everything is going the way it should.  That not only fixes 
the problem with the old modules, it is smart programming.   ...Taegan


Msg#: 4384 *GENERAL*
06/28/88 16:47:06
From: RICHARD ANDREWS
To: KEN DAVIDSON
Subj: X-10 STUFF

.       Have you seen the latest issue of Radio-Electronics?  In it they have 
plans for a current carrier modem that is supposedly capable of 9600 baud.  It 
seems that something like this could be used for home control (especially if it
could be shrunk down into a smaller package);  the only thing that is lacking 
is a protocol for sending information to various devices that would be 
connected to the receiving end.  I wonder if anybody would be interested in 
putting forth a proposed spec for such a thing?




Msg#: 4387 *GENERAL*
06/28/88 17:42:47
From: MATTHEW ZUCKERMAN
To: KEN DAVIDSON
Subj: BSR STUFF
Ken, I understand that MMint sells a home-controller that hooks up to  the 
sb180 and will operate standard BSR modules. Anyway, that is what I think I saw
in a message on the BBS this AM. If so, please send me spec sheet and cost.
Thanks,   Matt




Msg#: 4389 *GENERAL*
06/28/88 22:42:03
From: DAVID HESSLER
To: TAEGAN GODDARD (Rcvd)
Subj: REPLY TO MSG# 4189 (HOME CONTROL)
taegan, a cga card driving a ttl interface DB-9 connector to an  R
RGB color monitor is solid at 80 columns, even thru a composit is not too bad, 
but into a tv is definately just forty col. no one uses it for ibm pc even 
though ibm set up for the major part of their market plans for color tv use...


Msg#: 4399 *GENERAL*
06/28/88 23:12:22
From: TAEGAN GODDARD
To: DAVID HESSLER
Subj: REPLY TO MSG# 4389 (HOME CONTROL)
David,  Do you have any idea how far the TTL signal is good for from the CGA 
card to the RGB monitor?  I'd like to be able to run the signal through cables 
to as many as five different rooms - amplifying it as needed.  OR... can I use 
the composite signal in 80 columns on an RBG monitor/TV?  ...Taegan




Msg#: 4411 *GENERAL*
06/29/88 07:23:19
From: BOB PADDOCK
To: TAEGAN GODDARD (Rcvd)
Subj: REPLY TO MSG# 4399 (HOME CONTROL)
The length of a cable carrying TTL signals should be meseraed in inches, not 
rooms.


Msg#: 4421 *GENERAL*
06/29/88 09:12:04
From: KEN DAVIDSON
To: TAEGAN GODDARD (Rcvd)
Subj: REPLY TO MSG# 4399 (HOME CONTROL)
You can't run the TTL signal more than a few feet before you pick up noise.  It
sounds like you really only have two choices: use a 40-character display 
broadcast to all the monitors via a composite video signal, or use a terminal 
board at each display sight and transmit the data serially to each terminal. 
Trying to send an 80-column display in video form throughout the house sounds 
like a losing proposition.


Msg#: 4442 *GENERAL*
06/29/88 19:13:26
From: TAEGAN GODDARD
To: BOB PADDOCK
Subj: REPLY TO MSG# 4411 (HOME CONTROL)
That's always what I had believed.  I was planning to use the composite signal 
from the CGA card - but the last message seemed to indicate otherwise. Thanks 
...Taegan


Msg#: 4443 *GENERAL*
06/29/88 19:16:21
From: TAEGAN GODDARD
To: KEN DAVIDSON
Subj: REPLY TO MSG# 4421 (HOME CONTROL)
Thanks for the input Ken. I guess I'll have to stick to 40 columns. I heard 
from a friend that his brother broadcasts his video signals throughout his 
house on his own "TV station."  Have you heard about anyone else doing this?


Msg#: 4416 *GENERAL*
06/29/88 08:47:07
From: KEN DAVIDSON
To: RICHARD ANDREWS
Subj: REPLY TO MSG# 4384 (X-10 STUFF)
We've experimented with power line modems and had limited success.  Steve had 
wanted to do an article using the NE5050, but experimentation showed that the 
error rate was so high you needed a pretty robust error detection/correction 
scheme for it to be of any use.  By the time you implement the error handling 
on each node, the node becomes real expensive.  The RE modems might be fun to 
play with, but I wouldn't try putting together a real product with them.


Msg#: 4428 *GENERAL*
06/29/88 09:55:10
From: STEVE CIARCIA
To: RICHARD ANDREWS
Subj: REPLY TO MSG# 4384 (X-10 STUFF)
I have my doubts about the reliability of the RE circuit. It may transmit and 
receive 9600 bps but two characters sequentially? ........... or, with noise on
the line? ......... It is not a particularily sophisticated circuit. We have 
experimented with far better circuits and I still don't think powerline 
communication is reliable except if there is never any electrical noise 
(doubtful) or both sides incorporate processor/buffer/erro r checking 
(expensive). Remember, you get what you pay for. If a circuit that inexpensive 
really worked, you'd see it commercially available with lots of competition.
-- Steve


Msg#: 4418 *GENERAL*
06/29/88 08:59:00
From: KEN DAVIDSON
To: MATTHEW ZUCKERMAN
Subj: REPLY TO MSG# 4387 (BSR STUFF)
I think you misunderstood something somewhere.  Micromint sells an X-10 module,
cable, and software that connects the computer to the power line so it can send
X-10 commands.  While the module can be used with any computer with the proper 
interface, cables and software are available for the BCC52, BCC180, and IBM PC.
The software simply allows user programs to send X-10 commands; it is not home 
control software.  I had mentioned that I'm working on home control software 
using the module and a BCC180 in my spare time, but it won't run on an SB180 
and won't be a product anytime in the near future.

The module that Micromint sells is described in an article I wrote for the 
third issue of Circuit Cellar INK.






Msg#:  790 *BULLETIN BOARD*
06/28/88 00:15:52 (Read 10 Times)
From: TAEGAN GODDARD
To: JIM KELLY
Subj: X-10
Hi Jim...  Did you ever upload that program you wrote for your X-10 powerhouse 
in pascal?  If you are still willing, I'd love to see it.  I'm writing a 
program now that synchronizes the clock in the X-10 interface with MS-DOS.  My 
PC's clock keeps much better time than the one in the interface - in fact the 
one in the interface is quite lousy.  My program will run before I start any 
X-10 program that needs the clock.  Do you have any other interesting 
programming ideas for the X-10??   If you are really into this stuff - check 
out Circuit Cellar INK Issue #3 - a really great article on computer 
interfacing with a new X-10 power line interface.  Call Circuit  Cellar BBS 
871-1988 to order a back copy if you'd like.
.
...Taegan



Msg#:  801 *BULLETIN BOARD*
06/28/88 03:12:07 (Read 10 Times)
From: JIM KELLEY
To: TAEGAN GODDARD (Rcvd)
Subj: REPLY TO MSG# 790 (X-10)
Taegan, I have not uploaded the program yet.  After reading your last message, 
I called the Circuit cellar and poked around there.  My program is set up for 
house code J and uses ALT FKEY combinations for 4 modules.  Do you want me to 
change the house code?
..Jim


Msg#:  820 *BULLETIN BOARD*
06/28/88 19:24:57 (Read 0 Times)
From: TAEGAN GODDARD
To: JIM KELLEY
Subj: REPLY TO MSG# 801 (X-10)
No need to change the house code Jim...  Are you going to include the source 
code?  I'm especially interested in seeing how you drive the X-10 in PASCAL. 
If not, I understand.  I'll be looking for the upload... THANKS ...Taegan

```
{% endraw %}

## CONTENTS.TXT

{% raw %}
```
Welcome to the Home Control Primer disk...

This disk contains programs and text files relating to computerized home
control.  Several of the programs included require the X-10 Powerhouse
computer interface, a device that allows computer users to turn on/off
lights and appliances without any additional wiring.

Welcome to the exciting world of computerized home control...

January 1990
------------

The following files are included on this disk:

SENDX10.EXE    - (Version 1.2) Shareware program to turn lights and
                 appliances on/off from the DOS command line or batch
                 files.  Requires the X-10 Powerhouse computer
                 interface.  Individual registration fee: $10
SENDX10.DOC    - Documentation for above.

SYNCHX10.EXE   - (Version 1.1) Shareware program to synchronize the
                 clock inside the X-10 Powerhouse computer interface
                 with that of your PC.  Requires the X-10 Powerhouse
                 computer interface.  Individual registration fee: $10
SYNCHX10.DOC   - Documentation for above.

GAMEPORT.EXE   - (Version 2.0) Shareware program to explore the analog
                 and digital input capabilities of the PC gameport.
                 Individual registration fee: $5
GAMEPORT.DOC   - Documentation and tutorial for above.

HOMECNTL.TXT   - Article on computerized home control.

HOMECNTL.REF   - Extenisve listings of reference sources for home
                 automation hobbyists.

BBSMSGS#.TXT   - Text of conversations from nationwide BBSs relating to
                 computerized home control.

TSRX10.TXT     - Does anyone want a TSR control program for their X-10
                 Powerhouse computer interface?

CONTENTS.TXT   - This file describing the files on the home control
                 primer disk.

And many other interesting files pertaining to computerized home control.

The computer programs listed above are distributed as Shareware.  If you
find these programs useful and intend to use them, you are required to
register them by sending a registration fee to the author.  The
registration fee and the author's address is included in the
documentation (the .DOC files listed above).
```
{% endraw %}

## EXAMP1.BAS

{% raw %}
```bas
5 CLS:PRINT "SETTING THE REAL TIME CLOCK ":PRINT
10 GOSUB 20000
20 INPUT "ENTER THE DAY (1=SUN .. 7=SAT) ";DAY
30 INPUT "ENTER THE HOURS ( 0..23 )      ";HOURS
40 INPUT "ENTER THE MINUTES ( 0..59 )    ";MINS
50 GOSUB 20100:IF STATUS =-1 THEN PRINT " **** ERROR ****":END
60 PRINT:PRINT "THE TIME HAS BEEN SET ":END
19999 CLS:PRINT"ERROR RUNNING INTO UTILITIES......":END
```
{% endraw %}

## EXAMP2.BAS

{% raw %}
```bas
5 CLS:PRINT "SETTING THE BASE HOUSECODE  ":PRINT
10 GOSUB 20000
20 INPUT "ENTER BASE HOUSECODE ";A$:BASECODE=ASC(A$)-64
30 GOSUB 20200:IF STATUS =-1 THEN PRINT " **** ERROR ****":END
40 PRINT:PRINT "THE BASE HOUSECODE HAS BEEN SET ":END
19999 CLS:PRINT"ERROR RUNNING INTO UTILITIES......":END
```
{% endraw %}

## EXAMP3.BAS

{% raw %}
```bas
10 GOSUB 20000
20 GOSUB 20300:IF STATUS =-1 THEN PRINT " *** ERROR *** ":END
30 PRINT " DAY = ";DAY;" HOURS = ";HOURS;" MINS = ";MINS
40 END
```
{% endraw %}

## EXAMP4.BAS

{% raw %}
```bas
10 GOSUB 20000
20 LEVEL=0
30 INPUT "ENTER THE FUNCTION (1=OFF 2=ON 3=DIM) ";FUNCTION
40 IF FUNCTION=3 THEN PRINT :INPUT "ENTER LEVEL ";LEVEL
50 PRINT:INPUT" ENTER THE HOUSECODE (A-P) ";A$:HOUSECODE=ASC(A$)-64
60 PRINT:INPUT "ENTER THE VALUE FOR HIUNIT (0=NONE ) ";HIUNIT
70 PRINT:INPUT "ENTER THE VALUE FOR LOUNIT (0=NONE ) ";LOUNIT
80 GOSUB 20500:IF STATUS =-1 THEN PRINT " **** ERROR ****":END
90 PRINT "THE X-10 MESSAGE HAS BEEN SENT ":END
19999 CLS:PRINT"ERROR RUNNING INTO UTILITIES......":END
```
{% endraw %}

## EXAMP5.BAS

{% raw %}
```bas
5 CLS:PRINT "DOWNLOADING GRAPHICS DATA   ":PRINT
10 GOSUB 20000
20 INPUT "ENTER THE ADDRESS (0-255)";ADDRESS
30 PRINT:INPUT "DATA 1 ";GRAPH (0,ADDRESS)
40 PRINT:INPUT "DATA 2 ";GRAPH (1,ADDRESS)
50 GOSUB 21000 :IF STATUS =-1 THEN PRINT " *** ERROR *** ":END
60 PRINT " DONE ":END
```
{% endraw %}

## EXAMP6.BAS

{% raw %}
```bas
5 CLS:PRINT "UPLOADING GRAPHICS DATA   ":PRINT
10 GOSUB 20000
20 GOSUB 21100:IF STATUS =-1 THEN PRINT " *** ERROR *** ":END
30 PRINT " DONE ":END
```
{% endraw %}

## EXAMP7.BAS

{% raw %}
```bas
5 CLS:PRINT "DOWNLOADING TIMER EVENT  ":PRINT
10 GOSUB 20000
20 INPUT "ENTER THE ADDRESS (0-127)";ADDRESS
30 FOR X=0 TO 7
40 PRINT "ENTER DATA FOR BYTE ";20+X;:INPUT TIM (X, ADDRESS): NEXT X
50 GOSUB 20800 :IF STATUS =-1 THEN PRINT " *** ERROR *** ":END
60 PRINT " DONE ":END
```
{% endraw %}

## EXAMP8.BAS

{% raw %}
```bas
5 CLS:PRINT "UPLOADING TIMER EVENT  ":PRINT
10 GOSUB 20000
20 GOSUB 20900:IF STATUS =-1 THEN PRINT " *** ERROR *** ":END
30 PRINT " DONE ":END
```
{% endraw %}

## FILE2169.TXT

{% raw %}
```
Disk No: 2169                                                           
Disk Title: Home Control                                                
PC-SIG Version: S1                                                      
                                                                        
Program Title: Home Control Primer Disk                                 
Author Version: 11/89                                                   
Author Registration: $25.00                                             
Special Requirements: X-10 Powerhouse Computer Interface                
                                                                        
Welcome to the world of the computerized home.  Someday all homes will  
be intelligent.  You can get on-board now with HOME CONTROL, an         
excellent introduction to home automation.  Light/Applicance control    
is accomplished by using the X-10 Powerhouse Computer Interface.  HOME  
CONTROL consists of three independent programs.                         
                                                                        
SENDX10 is a program to turn lights and appliances on/off from the DOS  
command line or from batch files.  This program requires the X-10       
Powerhouse Computer Interface.                                          
                                                                        
SYNCHX10 is a program to synchronize the clock inside the X-10 Power-   
house Computer Interface with that of your PC.  This program requires   
the X-10 Powerhouse Computer Interface.                                 
                                                                        
GAMEPORT is a program to explore the analog and digital input capabil-  
ities of the PC gameport.  The Game Port Monitor allows you to hook up  
sensors to your PC's game port so that you can begin to experiment      
with environment monitoring.  You can measure light intensity in a      
room, monitor windows and doors, measure temperature, and observe       
human movement through open spaces.                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GAMEPORT.DOC

{% raw %}
```

        ------------------------------------------------
                 Game Port Monitor  Version 2.0
                Copr. 1989  by Taegan D. Goddard
        ------------------------------------------------



I. Introduction
   ------------

     Have you ever wondered what else your computer could do?
Word Processing, spreadsheets, and data bases are fine -- but
wouldn't it be nice if your investment in hardware would pay for
itself in other ways?  Personal computers are now being used for
home and office control. Scientists use them to monitor
experiments.  The Game Port Monitor allows you to hook up sensors
to your machine's game port so that you can begin to experiment
with environmental monitoring.

       o  Measure light intensity in a room.
       o  Monitor windows and doors in your home.
       o  Measure temperature.
       o  Observe human movement through open spaces.

Each of these things can be accomplished with your PC!  Add a
computer interface for the BSR X-10 wireless appliance and light
modules, and you have the beginnings of a mini home control
system!  With the PC game port and a few inexpensive electronic
components, you can add real-time environment sensing to your own
programs!  
     Let the Game Port Monitor lead you into this exciting (and
relatively un-tapped) world of computing...


II. But What does it cost?
    ----------------------

     The range of electronic components you can attach to the
PC's game port are many -- from simple photocells and thermistors
to more complex infrared motion detectors. Less than $5 spent at
an electronics store can buy all that you need to measure light
intensity and temperature. A very small price to pay to equip
your computer with 2 human senses!
     Likewise, the software is also very inexpensive. The Game
Port Monitor, a shareware program (it's not free!), costs just
$5. Please send a check for $5 to:

                       Taegan D. Goddard 
                       35 Woodside Circle
                       Hartford, CT 06105

to register your copy of the program. You will be sent future
updates of the program and additional tips for environmental
monitoring and home control. (I am also currently working on a
mini home control program using the BSR X-10 controller for
output and the PC game port for input.) 
     Please send any comments you may have about this program -
your input will help me create better updates! 


III. Function Key Assignments - Game Port Monitor
     ---------------------------------------------------

     <F1> Calls up the help screen, listing all of the following
          key assignments.

     <F2> Graphs all incoming data from the transducers attached
          to the analog inputs of the game port.

     <F3> Shows program status: Time monitoring started, current
          time, total number of observations, and average
          observations made each second.

     <F4> Begin saving incoming data to a file every 15 seconds.
          All data is saved in a file named GAMEPORT.DAT. This
          data can be imported into your spreadsheet or data base
          program for further analysis.

     <F5> Stop saving data to disk file.

     <F6> Turn off screen display in order to prevent monitor
          burn problems. Often you will want to leave your
          computer on for a long period of time to monitor
          certain inputs. This option can be used to prevent
          damage to your monitor (or to stop prying eyes!)

     <F7> Clear lower portion of screen. Shows only the actual
          data boxes for analog and digital inputs, turning off
          any other information screen at the bottom of the
          display.

     <F8> Refresh Screen Display. Left over from earlier versions
          of the program where certain interrupts caused problems
          with the screen display. The bugs have been fixed in
          this version of the program, but someone may still want
          to use it!

     <F9> Exit to the DOS prompt. Allows user to rename data
          file, or perform any other needed task outside the
          program, like using your word processor or spreadsheet.
          
    <F10> Exit Game Port Monitor. Ends monitoring session.






IV. Pin Locations on the PC game port
    ---------------------------------

     The following chart shows all pin assignments on the PC game
port:


                  PIN LOCATIONS - PC GAME PORT
----------------------------------------------------------------
   Pin #                     Pin Function
----------------------------------------------------------------
     1                        +5 volts
     2                        DIGITAL #1         
     3                        ANALOG #1
     4                        GND
     6                        ANALOG #2
     7                        DIGITAL #2         
     8                        +5 volts
     9                        +5 volts
     10                       DIGITAL #3         
     11                       ANALOG #3
     12                       GND
     13                       ANALOG #4
     14                       DIGITAL #4         
     15                       +5 volts
----------------------------------------------------------------

NOTE:  It is always safest to turn off your computer when        
       making connections to the game port.


V. How do I hook up sensors to my PC's game port?
   ----------------------------------------------
     
     The joystick is a typical device you would attach to the
PC's game port. It has two variable resistors attached to the
analog inputs, each corresponding to the X or Y axis. The buttons
on the joystick are digital inputs. Each can only be ON or OFF.
If you have a joystick, use the Game Port Monitor to find out
what your joystick actually does...

ANALOG INPUTS:
     A photocell (light sensor) or thermistor (temperature
sensor) has two leads coming from it. Each essentially acts as a
variable resistor - the resistance of the device changes as the
temperature or light changes. Attach one lead to +5 volts and the
other to an analog input pin on the game port. That's all there
is to it...
     The Game Port Monitor will now show a reading from    0-255
corresponding to the resistance of the device. If you are using a
thermistor, you can calibrate these readings to an actual
temperature reading. Submerge the thermistor in a pan of boiling
water. The reading Game Port Monitor gives you corresponds to 100
degrees centigrade. Do the same with a pan of ice cold water, and
you have the reading for 0 degrees centigrade. Most thermistors
give linear readings over this temperature range, so you can
figure out all points on the line, and thus the temperature for
any reading the program gives you.

DIGITAL INPUTS:
     Any kind of switch, such as a relay contact on a motion
sensor, can be used with the digital inputs. Connect one lead to
the digital input pin on your PC's game port and the other to a
Ground (0 volts). 
     The Game Port Monitor gives you a reading telling the ON/OFF
status of the switch. With a magnetic type burglar alarm switch
you can sense whether a door or window is open or closed.

     Once you have found out how to give your computer sensing
capabilities, you can write programs exploiting this new found
ability of your computer. Register your copy of the Game Port
Monitor and you'll be part of a forum concerned with these types
of experiments and home control.  The Game Port Monitor will
simplify your learning process and instantly show you what your
sensors are doing.
     Look for PC-ROWER.ARC on your local BBS. This program lets
you computerize your rowing machine! Many more programs of this
type will follow.


VI. Etc.
    ---

     I make no warrantee or guarantees for the use of this
software or the hook-up of devices to your computer. Attaching
simple electronic components such as light and temperature
sensors is a relatively easy operation to complete, and poses
very little risk to your equipment, BUT if you are in doubt of
your skills then please get assistance or have someone else do
the connections for you.
     Thank you in advance for your support of the shareware
concept!

     
```
{% endraw %}

## HCSVIDEO.TXT

{% raw %}
```
-------------------------------------
 Video Alternatives for Computerized
       Home Control Systems

 From: The Circuit Cellar BBS
       203/871-1988

 June 1988
-------------------------------------

Msg#: 4141 *GENERAL*
06/22/88 00:31:19
From: TAEGAN GODDARD
To: ALL
Subj: HOME CONTROL
I am experimenting with home control using an IBM PC motherboard and the X-10 
Powerhouse to control lights and appliances.  I am writing my control program 
in QuickBASIC 4.0.  My question to anyone:  What is the best type of video card
to use if I want to send the video signal throughout the house to various 
monitors and TVs?   Another question:  Where is the best place to order 
thermistors (150k) that measure temperatures in the normal household temp 
range? Thanks much for any help you can give.    ...Taegan


Msg#: 4150 *GENERAL*
06/22/88 08:34:27
From: DAVID HESSLER
To: TAEGAN GODDARD (Rcvd)
Subj: REPLY TO MSG# 4141 (HOME CONTROL)
Taegan, I would use an old CGA color card with composite output (from the RCA 
jack) cause it is easiest to boost arround many cables (Radio Shack quad 
amplifier box) and to convert with a little board (back of byte) from the video
games to RF for TV reception where you want to use a tv and some monitors too. 
I think you can put some channel 4 rf on top of the composite video signal and 
get both  on the cable. The amplifiers may not handle the low frequency video 
unless you add a larger capacitor on the internal coupling to go below channel 
2, I haven't tried it.  there are also dc optical volume controls for remote 
use in the surplus market that you can run with a bsr dimmer to a small 115v 
lamp thru fiber optic cable to the photocell to adjust volume, though you may 
need to rectify and filter the bulb power to reduce ripple at 120 hz.


Msg#: 4189 *GENERAL*
06/22/88 22:37:48
From: TAEGAN GODDARD
To: DAVID HESSLER
Subj: REPLY TO MSG# 4150 (HOME CONTROL)
Thanks for the info David...  Thinking it over, I would be limited to 40 
columns of text resolution on a TV monitor with a CGA card (unless I'm 
mistaken). Color for the displays doesn't matter to me, but 80 columns would be
nice.  Am I wrong on this? I'd really like to switch video inputs to the TV 
when I want to check the status of the control system. Unless I get a high 
resolution TV/monitor I wont be able to see 80 columns.  Does this thinking 
aloud make any sense to you..?
```
{% endraw %}

## TSRX10.TXT

{% raw %}
```

Attention X-10 Powerhouse users!

I am currently considering developing a memory-resident (or Terminate
and Stay-Resident) control program for the X-10 Powerhouse.  This
program would be able to "pop-up" over Lotus 123, Word Perfect, and many
other programs allowing you to trigger any of the 256 codes your X-10
interface is capable of transmitting.

Is there a market out there for this type of program?  I would anticipate
that TSRX10 would cost a little more than SENDX10 or SYNCHX10, perhaps
fifteen dollars ($15).

By registering your copies of SENDX10 and SYNCHX10, you are also voting
for continued development of these types of programs.  If you become a
registered user of SENDX10 or SYNCHX10, I will thank you by offering
my additional home control programs to you at a substantial discount.

Thanks for your support!

Taegan D. Goddard
35 Woodside Circle
Hartford, CT  06105
```
{% endraw %}

## X10.BAS

{% raw %}
```bas
19999 CLS:PRINT"ERROR RUNNING INTO UTILITIES......":END
20000 '*************** SETUP ROUTINE ************************
20001 '
20002 ' (C) 1986 X10 (USA) inc          GD - 07/05/86
20003 '
20005 DIM CODCONV(16) , TIM( 7,128)
20008 DIM GRAPH(2,256)
20015 OPEN "COM1:600,N,8,1,CS,DS" AS #1
20020 DAYCONV(1)=64:DAYCONV(2)=1:DAYCONV(3)=2
20030 DAYCONV(4)=4:DAYCONV(5)=8:DAYCONV(6)=16:DAYCONV(7)=32
20040 HOURS=0:MINS=0
20050 CODCONV(1)=96:CODCONV(2)=224:CODCONV(3)=32:CODCONV(4)=160:CODCONV(5)=16
20060 CODCONV(6)=144:CODCONV(7)=80:CODCONV(8)=208:CODCONV(9)=112
20070 CODCONV(10)=240:CODCONV(11)=48:CODCONV(12)=176:CODCONV(13)=0
20080 CODCONV(14)=128:CODCONV(15)=64:CODCONV(16)=192
20099 RETURN
20100 '************ SET TIME IN INTERFACE *******************
20101 '
20110 GOSUB 30300
20125 A=2:GOSUB 30000
20130 A=MINS:GOSUB 30000
20140 A=HOURS:GOSUB 30100
20150 A=DAYCONV(DAY):GOSUB 30100
20160 CHKSUM=(CHKSUM AND 255):A=CHKSUM:GOSUB 30600
20170 GOTO 30200
20200 '************ SET BASE HOUSECODE **********************
20201 '
20210 GOSUB 30300
20220 A=0:GOSUB 30000
20230 A=CODCONV(BASECODE):GOSUB 30000
20240 GOTO 30200
20300 '**************** READ THE TIME ***********************
20301 '
20310 GOSUB 30300
20320 A=4:GOSUB 30000
20370 GOSUB 30500:IF STATUS = -1 THEN RETURN
20375 STATUS=A
20380 GOSUB 30400:IF STATUS=-1 THEN RETURN
20385 MINS=A:GOSUB 30400:IF STATUS=-1 THEN RETURN
20390 HOURS=A:GOSUB 30400:IF STATUS=-1 THEN RETURN
20395 BTEMP=A:GOSUB 30400:IF STATUS=-1 THEN RETURN
20396 C=A:GOSUB 30400:IF STATUS=-1 THEN RETURN
20400 FOR BASECODE=1 TO 16:IF HTEMP=CODCONV(BASECODE) THEN 20420
20410 NEXT BASECODE
20420 FOR DAY=1 TO 7:IF BTEMP=DAYCONV(DAY) THEN RETURN
20430 NEXT DAY
20440 RETURN
20500 '****************** X10 DIRECT ************************
20501 '
20510 IF FUNCTION=2 THEN FTEMP=3:GOTO 20540
20520 IF FUNCTION=3 THEN FTEMP=5+(240 AND (LEVEL*16)):GOTO 20540
20530 FTEMP=2
20540 HTEMP=CODCONV(HOUSECODE)
20560 GOSUB 30300
20570 A=1:GOSUB 30000:A=FTEMP:GOSUB 30000:A=HTEMP:GOSUB 30100:A=HIUNIT:GOSUB 30100
20580 A=LOUNIT:GOSUB 30100:A=(CHKSUM AND 255):GOSUB 30000
20590 GOSUB 30200:IF STATUS=-1 THEN RETURN
20600 GOSUB 30500:IF STATUS=-1 THEN RETURN
20610 STATUS =A
20660 GOSUB 30400:IF STATUS=-1 THEN RETURN
20670 FTEMP=A:GOSUB 30400:IF STATUS=-1 THEN RETURN
20680 HIUNIT=A:GOSUB 30400:IF STATUS=-1 THEN RETURN
20685 LOUNIT=A:GOSUB 30400:IF STATUS=-1 THEN RETURN
20690 BTEMP=A:A=(FTEMP AND 240)
20695 FOR HOUSECODE=1 TO 16
20700 IF A<>CODCONV(HOUSECODE) THEN NEXT HOUSECODE
20710 FOR BASECODE=1 TO 16
20720 IF BTEMP<>CODCONV(BASECODE) THEN NEXT BASECODE
20740 A=(FTEMP AND 15):FUNCTION=1:IF A=4 THEN FUNCTION=3
20750 IF A=3 THEN FUNCTION =2
20760 RETURN
20800 '************** DOWNLOAD TIMER EVENT ******************
20801 '
20810 ADDR1=((ADDRESS) AND 31)*8:ADDR2=((ADDRESS) AND 96)/32
20820 GOSUB 30300:A=3:GOSUB 30000
20830 A=ADDR1:GOSUB 30000:A=ADDR2:GOSUB 30000
20840 A=TIM(0,ADDRESS):GOSUB 30000
20845 FOR XTEMP=1 TO 7
20847 A=TIM(XTEMP,ADDRESS):GOSUB 30100
20848 NEXT XTEMP
20850 A=CHKSUM AND 255 :GOSUB 30000
20860 GOTO 30200
20900 '*************** UPLOAD TIMER EVENTS ******************
20901 '
20910 GOSUB 30300:A=5:GOSUB 30000
20920 GOSUB 30500:IF STATUS=-1 THEN RETURN
20925 EVENT =0
20930 GOSUB 30400:IF STATUS=-1 THEN RETURN
20935 IF A=255 THEN 20970
20940 FOR XTEMP=0 TO 6
20945 TIM(XTEMP,EVENT)=A:GOSUB 30400:IF STATUS=-1 THEN RETURN
20947 NEXT XTEMP:TIM(7,EVENT)=A
20948 EVENT=EVENT+1:IF EVENT < 128 THEN 20930
20950 GOTO 30400:IF STATUS=-1 THEN RETURN
20970 FOR XTEMP=0 TO 7:TIM(XTEMP,EVENT)=0
20980 NEXT XTEMP:GOTO 20948
21000 '************** DOWNLOAD GRAPHICS DATA ****************
21001 '
21010 ADDR1=((ADDRESS) AND 127)*2:ADDR2=4+(((ADDRESS) AND 128)/128)
21020 GOSUB 30300:A=3:GOSUB 30000
21030 A=ADDR1:GOSUB 30000:A=ADDR2:GOSUB 30000
21040 A=GRAPH(0,ADDRESS):GOSUB 30000
21050 A=GRAPH(1,ADDRESS):GOSUB 30100
21060 A=CHKSUM AND 255 :GOSUB 30000
21070 GOTO 30200
21100 '**************** UPLOAD GRAPHICS DATA ****************
21101 '
21110 GOSUB 30300:A=6:GOSUB 30000
21120 GOSUB 30500:IF STATUS=-1 THEN RETURN
21125 EVENT=0
21130 GOSUB 30400::IF STATUS=-1 THEN RETURN
21135 IF A=255 THEN GRAPH(1,EVENT)=0:GRAPH(2,EVENT)=0:GOTO 21150
21140 GRAPH(0,EVENT)=A:GOSUB 30400:IF STATUS=-1 THEN RETURN
21141 GRAPH(1,EVENT)=A
21150 EVENT=EVENT+1:IF EVENT < 256 THEN 21130
21160 GOTO 30400
30000 CHKSUM=0
30100 A1=LOF(1):CHKSUM=CHKSUM+A:GOSUB 30600
30110 IF LOF(1)<>A1 THEN 30110
30120 RETURN
30200 '***************** GET ACKN ***************************
30201 '
30220 GOSUB 30500:IF STATUS=-1 THEN RETURN
30250 STATUS=A
30270 RETURN
30300 '***************** START CODE *************************
30301 '
30310 FOR XTEMP=1 TO 16
30320 A=255:GOSUB 30600: NEXT XTEMP
30330 RETURN
30400 '***************** GET RS 232 DATA ********************
30405 COUNT=0
30410 IF COUNT> 1500 THEN STATUS=-1:RETURN
30420 IF LOF(1) = 256  THEN COUNT=COUNT+1:GOTO 30410
30430 GOSUB 30700:A=ASC(A$):RETURN
30500 '***************** GET IN SYNC ************************
30501 '
30510 STATUS=0:COUNT=0 :XTEMP =LOF(1)
30520 IF COUNT> 1500 THEN STATUS=-1:RETURN
30530 IF LOF(1) =XTEMP	THEN COUNT=COUNT+1:GOTO 30520
30540 GOSUB 30700 : A=ASC(A$) : IF A=255 THEN XTEMP=XTEMP+1 : GOTO 30520
30550 RETURN
30600 ' **************** O/P TO PORT ***************
30601 '
30610 PRINT # 1,CHR$(A);:RETURN
30700 ' **************** I/P TO PORT ***************
30701 '
30710 A$=INPUT$(1,#1):RETURN
```
{% endraw %}

## X10COCO.TXT

{% raw %}
```

-------------------------------------------------
  From: PC-RAIN Node 1  914/297-0665

        Messages concerning hookup of the
        Tandy Color Computer X-10

  April 1988
-------------------------------------------------

 
Msg # 19743 <Received> Section 1 - IBM PC 
Sb: Home Control  (Reply to 19714)  To: Taegan Goddard            
Fm: Ronald La Guardia  Wapp. Fls. NY  04-12-88  10:36
 
Taegan, I even once converted a console and interfaced it with my ZX-81 
Sinclair ( remember them) using opto-isolators.It worked ok but wasnt 
very reliable and I had to devote the Sinclair to it. At that time or a 
little later the coco x-10 was 100 bucks. I think I might have a 
schematic for the coco x-10 , I'll have to look . If you need it let me 
know.
                                                        Ron
 
 
Msg # 19744 <Received> Section 0 - General 
Sb: X-10  To: Taegan Goddard                     
Fm: Ronald La Guardia  Wapp. Fls. NY  04-12-88  11:32
Reply - 19750 
 
Taegan, just looked and have no scematic , but I have the pinout of the 
coco cassette port which is where the x-10 plugs in. It is not a serial 
port. Are you talking about a differtent type of x-10 maybe for tandy 
1000"s & up. Anyway here are the pinouts.
 
 
 1- Remote for cassette motor
 2- Signal Ground
 3- Remote for cassette motor
 4- Audio input
 5- Audio output
 
                                        
Taegan, I hope this help's but this port can not be connected to a 
serial port, these are line level audio signals. You could probably 
make an interface ahead of audio stages but it probably isn't worth it. 
If youre friend had an X-10 for a Tandy 1000 series then it's probably a 
serial type. 
                                                  Ron
 
```
{% endraw %}

## X10GUIDE.TXT

{% raw %}
```
   X-10 POWERHOUSE
BASIC UTILITY PROGRAM
    FOR IBM(TM) &
     COMPATIBLES



CONTENTS

 1. Introduction
 2. Using the Utility Program
 3. Variables
 4. Sub-Routine Locations
 5. Initializing the Communications Port
 6. Setting the Real Time Clock
 7. Reading the Real Time Clock
 8. Setting the Base Housecode
 9. Sending an Instant X-10 Code
10. Downloading Graphics Data
11. Uploading Graphics Data
12. Downloading Timer events
13. Uploading Timer Events
14. SOFTWARE LICENSE



1. INTRODUCTION

If you like to write your own software, this manual is for you.

It is assumed that you are familiar with Basic programming and some knowledge of
Binary programming will also be useful.  This manual should be sufficient to let
you write simple Basic programs to set and read the Real Time Clock in the
Interface and to turn modules on and off manually etc. For more complex programs
involving "Timed Events" etc. you should refer to the Programming Guide which
deals in more detail with Binary and Hex programming.

The Utility Program is written in Basic and stored in ASCII format to allow
merging with an existing Basic Program. This lets you write programs in Basic
and use sub-routines to perform functions such as setting the clock, uploading
or downloading timer events etc.



2. USING THE UTILITY PROGRAM

The Utility Program sub-routines occupy Basic lines 19999 - 372 and therefore
any program using the sub-routines should leave these lines free. Alternatively
you could re-number the sub-routines remembering to update the GOSUB addresses
also.

There are two ways to load the Utilities.

1. If you are writing a completely new program, you can  just LOAD "X1"

2. If you are combining the Utilities with an existing program, (e.g. MY
PROGRAM) you first load your existing program  i.e. LOAD "MY PROGRAM", then
merge the Utilities into the memory area by MERGE "X1". Once merged your
program is ready to run.

NOTE. If you forget to merge the Utilities, your prm will not run.



3. VARIABLES

Below is a list of variables used by the Utility program. These variables should
only be used in your program to transfer data between the main program and the
sub-routine and vice versa.

A              FUNCTION
A$             GRAPH (2, 256)
ADDR1          HITEMP
ADDR2          HIUNIT
ADDRESS        HOURS
BTEMP          HOUSECODE
BASECODE       LEVEL
CHKSUM         LOUNIT
CODCONV (16)   MINS
COUNT          PORT
DAY            STATUS
EVENT          TIM (8, 128)
FTEMP          XTEMP



4. SUB-ROUTINE LOCATIONS

The Utility Program has 9 sub-routines which give the Basic Programmer full
control over the Interface. These are located at the following lines.

2   Initializing the com. port / defining the variables.
21   Setting the real time clock in the interface.
22   Setting the base housecode in the Interface.
23   Reading the real time clock from the Interface.
25   Sending an INSTANT on or off X-10 code.
28   Downloading a Timer Event to the Interface.
29   Uploading ALL Timer Events from the Interface.
21   Downloading Graphics Data to the Interface.
211   Uploading ALL Graphics Data from the Interface

STATUS
The Utility sub-routines return a status value indicating the following:

If 'STATUS = 1' then 'GOSUB' was successful.
If 'STATUS = ' then 'GOSUB' was successful but the Interface indicated that it
had been powered down and contains no data.
If 'STATUS = -1' then 'GOSUB' was unsuccessful. This indicates that there may be
a problem with the connections to the Interface or the Interface may not have
power.



5. SETTING THE COM PORT

LINE 2

This sub-routine initializes the communications port (COM1).

This sub-routine also assigns all the variables used within the utility
sub-routines. It should be called at the beginning of a program and should only
be called once. If called more than once an error will occur.

EXAMPLE

1      GOSUB 2
        Rest of the Basic Program.

19999
  '
  '     Utilities
  '
372



6. SETTING THE REAL TIME CLOCK

To set the real time clock in the Interface.

LINE 21

Variables passed to the sub-routine.
DAY     (1-7)
HOURS   (-23)
MINS    (-59)

Variables passed from the sub-routine.
STATUS  (-1, , 1)

Before calling this sub-routine, first assign a value to DAY, HOURS and MINS.
Then call the sub-routine. The values stored in DAY, HOURS and MINS will then be
transferred to the Interface. On returning from the sub-routine the STATUS
should be compared with the value -1 to ensure that the download was successful.

EXAMPLE
5       CLS:PRINT "Setting the real time clock"  : PRINT
1      GOSUB 2
2      INPUT "Enter the DAY (1= Sun, 7=Sat) "; DAY
3      INPUT "Enter the HOURS (-23) "; HOURS
4      INPUT "Enter the MINUTES (-59) "; MINS
5      GOSUB 21:IF STATUS =-1 THEN PRINT
        "*** ERROR***": END
6      PRINT:PRINT "The time has been set": END



7. READING THE REAL TIME CLOCK

LINE 23

Variables passed to the sub-routine
NONE

Variables passed from the sub-routine

DAY     (1-7)
HOURS   (-23)
MINS    (-59)
STATUS  (-1, , 1)

To read the time from the Interface, call the sub-routine. The time will then be
transferred to the variables DAY, HOURS and MINS, providing the STATUS is not
returned -1.

EXAMPLE

1      GOSUB 2
2      GOSUB 23: IF STATUS =-1 THEN PRINT
        "***ERROR***" :END
3      PRINT "DAY = "; DAY; "HOURS = "; HOURS;
        "MINUTES = "; MINS
4      END



8. SETTING THE BASE HOUSECODE

LINE 22

Variables passed to the sub-routine.
BASECODE  (1-16)

Variables passed from the sub-routine.
STATUS  (-1, , 1)

To set the Base Housecode in the Interface, first assign a value to BASECODE as
shown below.
        A=1     B=2     C=3     D=4
        E=5     J=1    K=11    L=12
        M=13    N=14    O=15    P=16
Then call the sub-routine to change the Base housecode in the Interface.

NOTE. calling this sub-routine will erase all the data stored in the Interface.

EXAMPLE
5       CLS:PRINT "Setting the base Housecode": PRINT
1      GOSUB 2
2      INPUT "Enter Base Housecode"; A$:BASECODE=ASC
        (A$) - 64
3      GOSUB 22: IF STATUS =-1 THEN PRINT
        "***ERROR***" :END
4      PRINT:PRINT "The Base Housecode has been set" :END



9. SENDING AN INSTANT X-10 CODE

LINE 25

Variables passed to the sub-routine.

FUNCTION

This is a number between 1 and 3. 1=ON  2=OFF  3=DIM.

LEVEL

This is a number between  and 15 which sets the intensity of the DIM command.
If FUNCTION is set to 1 or 2, LEVEL will be ignored.

HOUSECODE

This is a value between 1 and 16 where A=1 and P=16.

LOUNIT

This is a bit mapped value corresponding to the unit codes 1 thru 8 as follows:

   1=128   2=64    3=32    4=16
   5=8     6=4     7=2      8=1


HIUNIT

This is a bit mapped value corresponding to the unit codes 9 thru 16 as follows:

   9=128   1=64   11=32   12=16
   13=8    14=4     5=2    16=1


Variables passed from the sub-routine.

STATUS       (-1, , 1)

FUNCTION     (1, 2, 3)

LOUNIT       ( - 255)

HIUNIT       ( - 255)

HOUSECODE    ( - 16)

 BASECODE    ( - 16)


To transmit an X-10 code instantly, you must first assign values to FUNCTION,
LEVEL, HOUSECODE, LOUNIT and HIUNIT relating to the code to be sent; then call
the sub-routine. If the STATUS is not -1, the sub-routine will return the values
of FUNCTION, LEVEL, HOUSECODE, LOUNIT and HIUNIT as sent to the Interface. These
values can then be used by your program to verify the code sent.

EXAMPLE
1      GOSUB 2
2      LEVEL =
3      INPUT " Enter the FUNCTION (1=On 2=Off 3=Dim)"
        ; FUNCTION
4      IF FUNCTION=3 THEN PRINT :INPUT " Enter the
        LEVEL " ; LEVEL
5      PRINT:INPUT " Enter the HOUSECODE (A-P) " ; A$:
        HOUSECODE=ASC(A$) - 64
6      PRINT:INPUT " Enter the value for HIUNIT
        (=NONE) " ; HIUNIT
7      PRINT:INPUT " Enter the value for LOUNIT
        (=NONE) " ; LOUNIT
8      GOSUB 25: IF STATUS =-1 THEN PRINT
        " *** ERROR***" : END
9       PRINT " The X-10 message has been sent" : END



10. DOWNLOADING GRAPHICS DATA

LINE 21

Variables passed to the sub-routine
ADDRESS ( - 255)

Data stored in Basic array
GRAPH (, ADDRESS)  ( - 254)
GRAPH (1, ADDRESS)  ( - 254)

Variables passed from the sub-routine
STATUS  (-1, , 1)

This sub-routine takes the data stored in the Basic arrays GRAPH (, ADDRESS)
and GRAPH (1, ADDRESS) and transfers it to the RAM in the INTERFACE. NOTE - The
values stored in these arrays should never equal 255. An error will occur if
this happens.

EXAMPLE
1      CLS: PRINT " Downloading Graphics data " : PRINT
2      GOSUB 2
3      INPUT " Enter the ADDRESS (-255) " ; ADDRESS
4      PRINT : INPUT "DATA 1"; GRAPH (,ADDRESS)
5      PRINT : INPUT "DATA 2"; GRAPH (1, ADDRESS)
6      GOSUB 21 : IF STATUS =-1 THEN PRINT
        " ***ERROR*** " : END
7      PRINT " DONE " : END



11. UPLOADING GRAPHICS DATA

LINE 211

Variables passed to the sub-routine
NONE

Variables passed from the sub-routine
STATUS  (-1, , 1)

Data stored in Basic array      GRAPH  (, X)
                                GRAPH  (1, X)

This sub-routine is used to request the Interface to upload ALL 256 pairs of
GRAPHICS data and store them in a Basic array GRAPH (, X) and GRAPH (1, X)
overwriting any data previously stored in the array.

EXAMPLE

1      CLS : PRINT " Uploading Graphics Data " : PRINT
2      GOSUB 2
3      GOSUB 211 : IF STATUS =-1 THEN PRINT
        " ***ERROR*** " : END
4      PRINT " DONE " : END



12. DOWNLOADING TIMER EVENTS

LINE 28

Variables passed to the sub-routine.
ADDRESS  ( - 127)

Basic array.
        TIM     (,  ADDRESS)   (Equals BYTE 2)
        TIM     (1,  ADDRESS)   (Equals BYTE 2 1)
        TIM     (2,  ADDRESS)   (Equals BYTE 2 2)
        TIM     (3,  ADDRESS)   (Equals BYTE 2 3)
        TIM     (4,  ADDRESS)   (Equals BYTE 2 4)
        TIM     (5,  ADDRESS)   (Equals BYTE 2 5)
        TIM     (6,  ADDRESS)   (Equals BYTE 2 6)
        TIM     (7,  ADDRESS)   (Equals BYTE 2 7)

Variables passed from the sub-routine.

STATUS   (-1, , 1)

This sub-routine should only be used by programmers familiar with Binary
Programming and the Timer Events downloading information on page 21 of the
Programming Guide, supplied with the Interface.

First set up the arrays with the data relating to the timed events required, and
then call the sub-routine. The timer events will be transferred to the Interface
and a STATUS = 1 will be returned if the download was successful.

EXAMPLE

1      CLS : PRINT " Downloading a Timer Event " : PRINT
2      GOSUB 2
3      INPUT " Enter the ADDRESS ( - 127) " ; ADDRESS
4      FOR X = 1 to 7
5      PRINT " Enter the Data for BYTE"; 2+X; : INPUT
        TIM (X, ADDRESS) : NEXT X
6      GOSUB 28 : IF STATUS =-1 THEN PRINT
        " *** ERROR *** " : END
7      PRINT " DONE " : END



13. UPLOADING TIMER EVENTS

LINE 29

Variables passed to the sub-routine.
NONE

Variables passed from the sub-routine.

STATUS  (-1, , 1)

Data stored in Basic array

TIM   (, X) .....TIM  (7, X)

This sub-routine requests the Interface to upload ALL 128 Timer Events and store
them in the Basic arrays TIM (, X) thru TIM (7, X).

EXAMPLE

1      CLS : PRINT " Uploading Timer Event " : PRINT
2      GOSUB 2
3      GOSUB 29 : IF STATUS =-1 THEN PRINT
        " *** ERROR *** " : END
4      PRINT " DONE " : END



14. SOFTWARE LICENSE

X-10 (USA) Inc. grants the user a non-exclusive license to use the X-10(R)
POWERHOUSE(tm) software. The software is NOT copy protected and the user is
encouraged to make back up copies. It is a good idea to keep a copy in a safe
place such as in a friend's house. In fact why not make a copy for all your
friends (we don't mind at all if they dash out to their local computer store and
buy an Interface to use it with).

X-10 (USA) Inc. makes no warranty as to the capability, capacity or suitability
for use of the software, except as provided in this paragraph. Software is
licensed on an "AS IS" basis, without warranty. The original CUSTOMER'S
exclusive remedy, in the event of a software manufacturing defect, is it's
repair or replacement within 12 months of the date of purchase.

Some states do not allow limitations on how long an implied warranty lasts, so
the above limitations may not apply to the CUSTOMER.



X-10 (USA) Inc.
185A LeGrand Ave.
Northvale, N. J. 07647
(201) 784-9700  or 1-800-526-0027



X-10 Home Controls Inc.
1200 Aerowood Dr., Unit 20
Mississauga, Ontario L4W 2S7
Canada
(416) 624-4446


```
{% endraw %}

## X10TEST.BAS

{% raw %}
```bas
10000 DEFINT A-Z                : REM make everybody here integers
10100 REM ----- this stuff must be done just once at the start
10200 INTNUM = &H63             : REM X10 interrupt number
10300 REM fetch the X10 interrupt vector
10400 DEF SEG=0
10500 INTOFFS = 4*INTNUM        : REM figure vector offset
10700 XOFF=256*PEEK(INTOFFS+3)+PEEK(INTOFFS+2)  : REM get X10 vector
10800 XSEG=256*PEEK(INTOFFS+3)+PEEK(INTOFFS+2)
10900 IF (XOFF <> 0) AND (XSEG <> 0) GOTO 11500
11000 PRINT "X10DRIVE isn't installed!"
11100 STOP
11500 X10=&H104                 : REM set BASIC CALL entry offset
11600 DEF SEG=XSEG              : REM  ... and segment
12000 REM ----- now for the useful code
12100 HOUSE=ASC("A")            : REM CALL parameter must be an integer!
12200 UNIT=1                    : REM unit from 0 - 16
12300 ACTION=1                  : REM action from 0 - 6
12400 PRINT "Making the call!"
12500 CALL X10(HOUSE,UNIT,ACTION)
12600 PRINT "Return code is",HOUSE
12700 REM ----- repeat the above as needed
12800 STOP
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2169

     Volume in drive A has no label
     Directory of A:\

    BBSMSGS1 TXT     12654   6-01-88   1:50a
    BBSMSGS2 TXT      6930   6-22-88  10:48p
    BBSMSGS3 TXT     11959   6-26-88  10:52p
    BBSMSGS4 TXT     32968   6-23-88   9:05a
    BBSMSGS5 TXT      8827   6-29-88   7:54p
    CONTENTS TXT      2261  12-16-89   2:24p
    EXAMP1   BAS       384   4-12-88   6:51a
    EXAMP2   BAS       256   4-12-88   6:52a
    EXAMP3   BAS       128   4-12-88   6:52a
    EXAMP4   BAS       512   4-12-88   6:53a
    EXAMP5   BAS       256   4-12-88   6:53a
    EXAMP6   BAS       128   4-12-88   6:54a
    EXAMP7   BAS       256   4-12-88   6:54a
    EXAMP8   BAS       128   4-12-88   6:55a
    GAMEPORT DOC      8448  12-16-89   2:01p
    GAMEPORT EXE     54116  11-18-89  11:49a
    HCSVIDEO TXT      2458   6-22-88  10:33p
    SENDX10  DOC      4684  12-16-89   2:06p
    SENDX10  EXE     47078  11-18-89  11:45a
    SYNCHX10 DOC      4418  12-16-89   2:10p
    SYNCHX10 EXE     45870  11-18-89  11:47a
    TSRX10   TXT       912  11-20-89   3:45p
    X10      BAS      5632   4-13-88   7:50a
    X10COCO  TXT      1808   5-01-88   6:24p
    X10GUIDE TXT     12843   4-14-88   8:59a
    X10TEST  BAS      1042   2-18-88   9:49p
    HOMECNTL REF      1093  12-16-89   1:31p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       925   4-26-90   4:38a
    FILE2169 TXT      2591   4-26-90   5:56p
           30 file(s)     271603 bytes
                           33792 bytes free
