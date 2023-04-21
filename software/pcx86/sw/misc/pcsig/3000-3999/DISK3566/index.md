---
layout: page
title: "PC-SIG Diskette Library (Disk #3566)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3566/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3566"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## HISCORE.TXT

{% raw %}
```

  Hey there you masterful player, you!  Wanting to know how to submit your
  score, right?  Well, I sure hope you wrote the code letters down, because
  if you DIDN'T, you're going to have to play it again!

  Those code letters appear right in the center of the title screen, and
  represent the high score you see on the upper right.

  When you've got a score you're happy with, send me a postcard with your
  name and stuff on it, and those eight code letters.  I'll add your score
  to the list.  Top scorer lists will be maintained in the Albino Frog
  newsletter, which you'll get when you register.

  Address is;   Sean Puckett
                PO Drawer 5822
                Hollywood, FL 33083



```
{% endraw %}

## ORDER.TXT

{% raw %}
```
   You've saved Saturn from the doomsday intent of the invaders, but still
   they come!  In chapter two, you'll fly missions around the Red Planet
   as you take the aliens on again in "Galacta - Last Stand on Mars".
   Then, in the final chapter, you'll be fighting for the ultimate prize -
   everything and everyone!  "Galacta - In Defense of Earth" rejoins the
   war in orbit around Earth as the aliens construct their planet buster
   satellites.  It's all out laser cannon action as you battle wave upon
   wave of aliens all set on total destruction of everyone's home town.

   ITEM                                              PRICE   QUAN   EXTENTION
   ----------------------------------------    -----------   ----   ---------
   All three Galacta games on your favourite disk format, printed versions
   of the game manual, Admiral Stevens' alien tactics guide, the complete
   Galacta novella, as well as the cheat codes, a copy of our newsletter,
   BBS membership, and a free update if one becomes necessary!
   Galacta:                 3 1/2____   5 1/4____      $35   ____   _____.___

   It's mind bending puzzle action in the grand
   tradition of Tetris as you race against the clock
   to form loops on a tile grid.  Fun for everyone.
   Connex version 1.2:      3 1/2____   5 1/4_____     $15   ____   _____.___

                                            Shipping (overseas $5)      2.00

                                                            TOTAL   _____.___

        Payment Method (U.S. $ only)  -   Money Order_____   Check_____

   Name______________________________________________________________________

   Address___________________________________________________________________

   City, ST, Zip_____________________________________________________________

     Please take a few moments to answer our really nosy registrant survey
    -----------------------------------------------------------------------
   Computer Breed __Tandy  __XT  __AT/286  __386  __486   Other:_____________
   RAM Size       __256K  __512K  __640K  __1M  __2M  __4M  More:____________
   Drives (all)   __5 1/4  __3 1/2  __High Density  Hard Drive Size:_________
   Video Display  __Hercules  __CGA  __Tandy  __EGA  __PS/2  __VGA  __SVGA
   Sound Device   __None  __Tandy  __AdLib  __SoundBlaster  Other:___________
   Peripherals    __Laser Printer  __Modem  __Network  __TapeBackup  __CD-ROM
   Operating Sys. __MSDOS  __DR Dos  __OS/2  __Windows  Other:_______________
   Computer Type  __Desktop  __Laptop  __Notebook  __Palmtop  __Brain Implant
   Yourself       __Male  __Female  __Under 21  __21-41  __41+  __None-Yo-Biz
   Profession     ___________________________________________________________
   Comments







   --------------------------------------------------------------------------
   Send this order form and your payment to:  Sean Puckett
                                              Post Office Drawer 5822
   And, hey -- Thanks for ordering!           Hollywood, Florida  33083-5822

```
{% endraw %}

## PROBLEMS.TXT

{% raw %}
```

  Hello!  This file is for Galacta uses who are having problems running
  the game program -- NOT for users who can't defeat the cans/turnips/-
  spheres/bombers.  If you need help with cans, spheres or bombers,
  register the game, and you'll get the hint sheet!  If you can't beat
  the turnips, get a new blender!


  Using a Joystick while running under Windows or OS/2
  ----------------------------------------------------
  Won't work.  The ship will flutter to the right.  Either use the keyboard
  controls, exit Windows and play from DOS, or make a DOS boot disk.
  Galacta runs just fine under Windows and OS/2.  If it's failing, then
  check the Stacker or TSR problem solvers.  You need to restart the game
  to disable the joystick.


  Using Stacker
  -------------
  Galacta does not like Stacker, and cannot be run while your computer
  has the Stac driver loaded.  Even if you play it from floppy, if the
  STAC drivers are running, Galacta won't.  You must make a DOS boot disk,
  and put Galacta on it.  Reboot your system with the disk in the drive,
  and play Galacta from there, or copy Galacta to the non-Stacked section
  of your hard drive, boot without Stacker, and play it that way.  While you
  may THINK the game works under Stacker, you're really just playing on
  borrowed time, because it will completely bone your system without warning.
  Nothing bad's come of this yet, here, but why take the risk?  Besides,
  you can't get a decent score.  Copy-2-Floppy.

  It's been tested under Superstor, and seems to have no problems.


  Lockups, crashes, garbage on screen
  -----------------------------------
  The usual strangeness.  If Galacta behaves oddly, FIRST make a clean
  boot disk for it, then try it from floppy.  Eliminate all the problem
  causing TSR's, drivers, what have you, from that boot disk.  The problems
  should clear up.  Then you can play Galacta.  If you must try to trouble-
  shoot, and succeed in determining the cause of the problem, send me a note,
  so I can add it to the list.


  Ship won't fire while moving, won't move while firing, or won't do anything
  ---------------------------------------------------------------------------
  Variations in keyboards and BIOS keyboard handling can make the ship
  behave strangely.  If you're using the inverted T cursor keys, try
  the ones on they numeric pad.  If ALT/SHIELD won't work, you can use Z.
  Control and Shift are both FIRE, try either one.  If nothing seems to
  help, you might just have to go get a Gravis GamePad.  They're only $19
  at Walmart, and much better for this sort of game anyhow.


  Animation Slow, Jerky on 386
  ----------------------------
  Either you have a 386SX processor, or something else in your system
  is hogging time.  If you're running under Windows, set the execution
  flag to "Exclusive" or give the game a foreground priority of 10,000.
  If you have a 386SX, read on.


  Animation Slow, Jerky on XT, 286, or 386SX/16
  ---------------------------------------------
  These computers are too slow for smooth animation and game play.
  Still, if you must try, then run the game in EGA mode.  It's much faster,
  but the graphics look blotchy.  To do this, type GALACTA1 EGA to start
  the game.  Still too slow?  GALACTA1 CGA will start it up in 4 color mode,
  which is even faster, and rude looking.






```
{% endraw %}

## STORY.TXT

{% raw %}
```
Galacta - The Battle for Saturn

The Story


Admiral Richard Stevens sat back in the control cockpit in the
central ship of the battlecluster Sword of Vengeance.  Long
distance scanners were just picking up the fringes of Saturn's
rings.  And in there with all the rocks and dust were sure to be
the aliens' spycams.  "As soon as they sense us, they'll be on us
like a swarm of mad hornets," he warned the pilots.  Stevens made
a conscious decision to relax.  No sense going into battle
nervous.  Scared, sure.  Fear can rapidly sharpen the mind, but
nervousness can just as quickly dull it.  And don't even consider
panic as an option.  That'd be death for sure.

His head hit the padded rest, and his eyes closed, but not in
sleep.  In his mind, Stevens was replaying the events and
headlines of the past four years.  Back in '83, he'd have still
been serving as a first officer under Admiral Bigg.  "Got
promoted when we lost Bigg in the battle --- hah, not a battle,
more like a wipeout --- of '86," he thought.  Bigg was a good
man, and Stevens would have chosen any other way to get his
command. But you've got to take what they give you, and he rose
quickly from Admiral of the South Polar, Bigg's old command, to
his present station as Rear Admiral of the Outer Reach.  The
Prexy didn't think Stevens should be risking himself like this in
the Sword of Vengeance, but didn't have the nerve to deny him.

He ran through it in his mind:  "But it was in July, 2183, that
the universe changed for us --- for humans --- forever.  That was
when the researchers at Dark Side University found the alien
fleet on their way to Pluto. What a shock that was to everyone.
Seven SETI projects had played out over the two centuries since
their inception, and not a peep was heard from outer space.  The
big ears never heard a thing.  And now, it was a big eye finally
tossing the Homo-exclusivists on their ears.  The four kilometer
faceted telescope on the dark side of the Moon spotted over
30,000 individual objects moving into the solar system, all in a
very organized formation.  No one who saw the images for a moment
believed it was an interstellar meteor shower.

"The odd thing about them was that they never emitted any radio
signals, and radar sensing always returned an empty field.  Half
of the pols wanted to send an envoy, half of them wanted to send
missiles, and half from each camp waffled daily.  It was this
sort of chaos that led to the first screwup.  The pols wouldn't
authorize continuous use of optical telescopes in the asteroid
belt --- too many special interest groups still prospecting for
silicon in the asteroid belts via optical sensing --- and,
inevitably, the DSU telescope lost them as they went in the
shadow of Jupiter.  They were still outside the orbit of Pluto,
but Jupiter got in the way of the line of sight.  After three or
so hours, Earth overtook Jupiter in orbit, and we could again see
where the fleet was. Except they weren't there.

"They looked for months, and never found them.  More like, they
found us.

"November of that year was our first encounter with the aliens as
a race.  It didn't go well.  In fact, it didn't go at all.  The
rare-earth mines on Pluto suddenly dropped out of radio contact,
and ore shipment slugs stopped coming through.  Ships were
diverted there immediately, of course, but their radio contacts
with us were inevitably of the nature "Everything looks okay.
Wait, what's that<crazzzzzz>......."  After the third ship was
lost, we stopped trying.  Nothing happened for two months, then
in February of '84, "nothing" happened again.

"An amateur astronomer on one of Neptune's moons was searching
for Pluto, but didn't find it.  He told his father, an
astrophysics researcher, who double checked his son's
coordinates, and also didn't find it.  Now, it may seem odd that
the first person to discover that Pluto was missing was a child,
but remember, planets aren't in the habit of going on vacations,
stepping out for a bite to eat, or even going off to sit in
another room. They're big hunks of rock on infinitely predictable
paths around the Sun.  There's no NEED to watch where they're
going, because the math completely predicts their behavior.  It
was only a few hours from the boy's first report till every
telescope, radar antenna, and scanner in the outer solar system
was pointing where Pluto should have been.  Some were scanning
all around, wondering if someone had been playing a joke on them
--- not thinking for a moment that it's really hard to hide a
planet under a dark tablecloth.

"Once the news reached Earth, fury was all.  Nothing else was
talked about for months.  Everyone had a theory, but the most
common one was the government party line --- A black hole ate it.
In the military, few believed it, because we have long memories,
unlike Joe Average who gets reprogrammed every week by his
senseset.  The whispering in the halls of every war spacecraft
was the same:  The aliens ate Pluto.  Okay, maybe they didn't EAT
it, but it IS missing, and so are the aliens, and so are all the
miners and the rescue ships.

"About half of the monitoring stations continued to try to find
Pluto or at least some clue as to what happened to it, without
success, until December of that year.  That was the month
everyone went nuts again.  The Neptune Orbital Research Center
stopped transmitting.  It wasn't located on the planet itself,
but on one of the moons.  The planet probes stopped sending data
at the same time. It was like someone had said "SHHH" to a
planetary system of thousands of people.  Not a peep was heard
again.

"Of course, ships were sent, with the same results as on Pluto.
The ship would near its destination, everything would seem just
as it should, then a sudden crackle of static, and nothing.
Never heard from again.  The media went totally crazy with it.
No one could decide who was to blame, but it sure wasn't them.
Business as usual for the pols, but this time they were pointing
fingers at industry, the military, the universities, anyone.  It
was a terrible time.

"Three months later, terrible turned to horrible.  A vigilant eye
was by now being kept on every planet and moon in the solar
system, but a freak power outage brought down all the monitors
around Uranus -- those set to monitor Neptune -- for three hours.
When the scanners and scopes came back on line, Neptune and its
moons were gone.

"For once, the pols did something right.  There were scare riots
and suicides and mass-murderers on every block.  They got
together and in less than a week, hammered out the Solar Defense
Concordance Treaty.  It was a nasty bit of work, and there's
still parts of it that aren't fully understood.  But the
important part was the intent:  Every country and every company
would contribute 20% of their Gross Product for research and
defense of the solar system.  Loopholes galore didn't stop
everyone from jumping on the band wagon.  It makes good business
and political sense to be seen trying to save the human race from
total extinction.

"Out of the US's 20 percent came about 80 percent of the space
going warships.  All of us US Space Force jarheads got
recommissioned under the SDC's new Solar Defense Force navy.
Only thing good to come of that was increased pay.  They wanted
to keep all the experienced hands in, and all the experienced
hands wanted out --- it was now really dangerous in space,
apparently. So they changed the charter, eliminated all early
retirement pay, and added 150% to our paychecks.  Suddenly,
again, space was a nice place to be.  Keeps the enlistment lines
long, too.

"The first sheep led to the slaughter was my old fleet under
Admiral Bigg.  I'd been bedridden on the Moon with pneumonia from
a faulty suit air processor, and just missed the fleet leaving
for points out.  I was mad as hell then, but when the fleet
suddenly vanished like all the other ships we'd sent, I composed
a thank-you note to the suit processor manufacturer.  Never sent
it, of course.

"With the SDC Treaty in full effect, and the SDF making headlines
as the biggest and best fleet ever (how could it not be, with 80%
of the world's ships forced to join it), people were settling
down, sort of.  Newsreel footage from the 1940's in England
reminds me a lot of what people were like back in '86.  Business
as usual, but a very real undercurrent of panic and despair.
Lots of new babies that winter.  After the fleet didn't return,
SDF pulled an old warship design out of the Israeli archives and
hacked it up a bit, tacked on new weaponry, new energy sources,
and called it a "brainstorm."

"After we finished chuckling about that, we took a good look at
the design, and liked it.  Seven ships mounted together for
transport, but unlatching one-by-one for enemy combat.  The idea
was interesting.  Common military strategy would dictate sending
all seven ships in at the same time, to battle in flanks.  But
since our enemy was apparently capable of annihilating an entire
fleet at once, better to send in a ship at a time, in hopes of
doing more damage.  Of course, only fools would want to pilot
these individual warships.  Somehow, the computer found 17 fools
who were smart enough, agile enough, and low-enough rank not to
know anyone who could jigger the files.  We winnowed that down to
the smartest, and designed the cockpits of the ships around them.

"While all of this military planning was going on, the aliens
were back to their old tricks.  Most of the civilians on the
colonies at Uranus had been evacuated after Neptune went, but
there were still some caretaker staff still in place.  These
people were the next to go.  In January on 2187, their
communications stopped being received.  When, three months later,
the entire planet vanished, it would have been anticlimactic,
save what the monitors found.  There were 251 various sorts of
scanners, sensors, radar dishes, telescopes and radiation
detectors pointed at Uranus when it went, and the data we got
from them was fascinating.

"The planet, its rings, and its moons all started emitting
increasing levels of broad spectrum radiation, from low
infra-red, through visible light, to gamma rays and beyond. The
emissions peaked 20 minutes later, when the planet was completely
white hot.  The light was then flicked off, like a switch, and
there was nothing left of the planet, or its moons.  Speculation
went wild over what kind of device did this, why it needed to be
done, who was doing it, anything and everything.  The best minds
got together and muddled out a theory on how the device worked.
They explained it to the civilians like this:  Imagine a lump of
coal.  When you burn it, it makes smoke, and ash, and produces
energy.  In this case, the planet itself is being burned from the
inside out.  This energy is being used for some unknown reason.
But the effect of this process is that the microscopic percentage
of energy escaping from the collectors the aliens placed inside
the planet is enough to heat it white hot.  When the planet is
burned away to nothing, the light goes out, and nothing remains.

"They figure it takes the aliens about three months to set up
their planet burner.    It took us eight months to build the
Sword of Vengeance Battlecluster.  Seven of the brightest (and
dumbest) pilots in the SDF fleet, and me, sitting in a control
module, deciding which of them will go to die next.  What a news
event.  What a media circus it was.  We left in May, and now here
it is the middle of July.  Two months of encouragement, thank
you's, and best wishes from everyone we know, and billions of
people we don't know.  Saving the species would be a lot more fun
if they weren't so pesty about it."

Suddenly red beacons spring on all around the control center.
Long range scanner indicates alien ships closing fast.  Stevens
snaps the safety covers off the ship-docking controls, and
commands the injections of moderate stimulants into all his
pilots.

He thinks, "They're ready to go, give their lives in the battle
for Saturn."

-------------

The rest of the story is included with the second and third
chapters of Galacta.  Check out ORDER.TXT for details.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3566

     Volume in drive A has no label
     Directory of A:\

    GALACTA1 BAT        31  12-09-92   1:05a
    INSTALL  BAT      2118  12-12-92   9:51p
    GALACTA1 DAT    123368  12-10-92   2:17p
    GAME     EXE     31824  12-08-92   3:37a
    HISCORE  TXT       727  12-12-92   9:55p
    ORDER    TXT      3096  12-12-92   9:18p
    PROBLEMS TXT      3444  12-12-92  10:21p
    STORY    TXT     12417  12-07-92   7:38p
    VENDOR   TXT      1536  12-12-92  10:22p
            9 file(s)     178561 bytes
                          137216 bytes free
