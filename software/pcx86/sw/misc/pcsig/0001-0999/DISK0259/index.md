---
layout: page
title: "PC-SIG Diskette Library (Disk #259)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0259/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0259"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "C ADVENTURE"

    Welcome to C ADVENTURE, a classic text adventure game.  You are standing
    at the end of a road before a small brick building.  Go into the cave
    and gather as much treasure as possible without getting dismembered,
    eaten or otherwise maimed.  And, of course, escape with your loot!
    
    Since the C source code is included, the game players can explore and
    the hackers can change things to suit themselves.  Features a good
    English language parser.  Games can be saved in progress and restored
    for later playing.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADVENT.DOC

{% raw %}
```


							12 JUNE 1984

		Notes on ADVENTURE  (for IBM PC)


    1)  TO PLAY ADVENTURE
	The ADVENTURE game requires one single sided drive & 96K of
	memory.  The system file "CONFIG.SYS"  <MUST>  contain the
	the two statements, "BUFFERS=10" and "FILES=10".  The following
	files  MUST  reside on the default drive:

	ADVENT.EXE, ADVENT1.TXT, ADVENT2.TXT, ADVENT3.TXT, ADVENT4.TXT


	The game may be started by typing       "ADVENT<cr>".
	A saved game may be restarted by typing "ADVENT -r<cr>".
	Debug data will be output by typing     "ADVENT -d -d -d<cr>".


    2)  TO HACK ADVENTURE
	The ADVENTURE game source files are either, header, code or
	text files.

	ADVENT	.C	- initialization, save game, restore game
	ENGLISH	.C	- interpret game player's commands
	DATABASE.C	- text file management & output
	ITVERB	.C	- intransitive verbs execution
	VERB	.C	-   transitive verbs execution
	TURN	.C	- analysis & execution of player's command

	ADVENT0	.C	- utility to create "ADVTEXT.H" file
	ADVENT1	.TXT	- long  cave description
	ADVENT2	.TXT	- short cave description
	ADVENT3	.TXT	- long & short object description
	ADVENT4	.TXT	- conversational descriptions & responses
	ADVENT	.DOC	- this ADVENTURE documentation file

	STDIO	.H	- standard i/o header
	ADVENT	.H	- #define & structure statements
	ADVWORD	.H	- words & codes array
	ADVCAVE	.H	- cave & travel arrays
	ADVTEXT	.H	- TXT file message indexes
	ADVDEF	.H	- data constants & variables definitions
	ADVDEC	.H	- data constants & variables declarations

	WARNING:
	The TXT files are the ASCII text messages used throughout the
	game.  They may be modified ONLY if you have the utility
	program, "ADVENT0.EXE" or the source "ADVENT0.C".  This program
	creates the header file "ADVTEXT.H" which is "#include"d into
	"ADVENT.C" during compilation.  After ANY changes to the "TXT"
	files, recreate a new "ADVTEXT.H" file.  Make sure that the
	four "TXT" files and the utility "ADVENT0.EXE" are on the
	default drive, then type "ADVENT0<cr>".


	The game was translated from BDS C to CII C86 and standardized
	as per UNIX standard i/o library functions.  The following
	changes were instituted:

	0) UNIX standard i/o
	1) "include"d header files & "extern"al statements added
	2) cave/travel  data arrays are now internal
	3) word/code    data arrays are now internal
	4) TXT message index arrays are now internal
	5) TXT file format doesn't require # terminator character
	6) save & restore game overlays intergrated with "ADVENT.C"
	7) word/code syntax parsing optimized in "ENGLISH.C"
	   BINARY LEX-ORDERED WORD LOOK-UP added in "DATABASE.C"
	8) TXT message indexing & output optimized in "DATABASE.C"
	9) TXT message typos corrected
	A) created "ADVENT0.C" utility (cf. #1, #4 & #5)
	B) created "ADVENT.DOC" documentation file


	Compile with CII C OPTIMIZING C86 version 2.10+, via:
	(See CCADV.BAT)

		CC1 filename
		CC2 filename -u
		CC3 filename
		CC4 filename

	Link with the standard PC-DOS linker, via:
	(See CLADV.BAT)

	A>B:
	B>A:LINK ADVENT,ENGLISH,DATABASE,ITVERB,VERB,TURN,,CON/MAP,A:C86S2S


	The modifications described above were implemented by:
	Jerry D. Pohl
	1922 Junction Avenue
	San Jose, CA 95131
	(408) 298-1262 / (408) 298-3185		(both 8..6, m..f)


```
{% endraw %}

## ADVENT1.TXT

{% raw %}
```
#1
You are standing at the end of a road before a small brick
building.  Around you is a forest.  A small stream flows out
of the building and down a gully.
#2
You have walked up a hill, still in the forest.  The road
slopes back down the other side of the hill.  There is a
building in the distance.
#3
You are inside a building, a well house for a large spring.
#4
You are in a valley in the forest beside a stream tumbling
along a rocky bed.
#5
You are in open forest, with a deep valley to one side.
#6
You are in open forest near both a valley and a road.
#7
At your feet all the water of the stream splashes into a
2-inch slit in the rock.  Downstream the streambed is bare rock.
#8
You are in a 20-foot depression floored with bare dirt.  Set
into the dirt is a strong steel grate mounted in concrete.
A dry streambed leads into the depression.
#9
You are in a small chamber beneath a 3x3 steel grate to the
surface.  A low crawl over cobbles leads inward to the west.
#10
You are crawling over cobbles in a low passage.  There is a
dim light at the east end of the passage.
#11
You are in a debris room filled with stuff washed in from the
surface.  A low wide passage with cobbles becomes plugged
with mud and debris here, but an awkward canyon leads
upward and west.  A note on the wall says:
       Magic Word "XYZZY"
#12
You are in an awkward sloping east/west canyon.
#13
You are in a splendid chamber thirty feet high.  The walls
are frozen rivers of orange stone.  An awkward canyon and a
good passage exit from east and west sides of the chamber.
#14
At your feet is a small pit breathing traces of white mist.
An east passage ends here except for a small crack leading
on.
#15
You are at one end of a vast hall stretching forward out of
sight to the west.  There are openings to either side.
Nearby, a wide stone staircase leads downward.  The hall
is filled with wisps of white mist swaying to and fro
almost as if alive.  A cold wind blows up the staircase.
There is a passage at the top of a dome behind you.
#16
The crack is far too small for you to follow.
#17
You are on the east bank of a fissure slicing clear across
the hall.  The mist is quite thick here, and the fissure
is too wide to jump.
#18
This is a low room with a crude note on the wall.  The
note says:
       You won't get it up the steps.
#19
You are in the hall of the mountain king, with passages
off in all directions.
#20
You are at the bottom of the pit with a broken neck.
#21
You didn't make it.
#22
The dome is unclimbable.
#23
You are at the west end of the twopit room.  There is a
large hole in the wall above the pit at this end of the
room.
#24
You are at the bottom of the eastern pit in the twopit
room.  There is a small pool of oil in one corner of the
pit.
#25
You are at the bottom of the western pit in the twopit room.
There is a large hole in the wall about 25 feet above you.
#26
You clamber up the plant and scurry through the hole at the
top.
#27
You are on the west side of the fissure in the hall of mists.
#28
You are in a low N/S passage at a hole in the floor.  The
hole goes down to an E/W passage.
#29
You are in the south side chamber.
#30
You are in the west side chamber of the hall of the
mountain king.  A passage continues west and up here.
#31
>$<
#32
You can't get by the snake.
#33
You are in a large room, with a passage to the south,
a passage to the west, and a wall of broken rock to the
east.  There is a large "Y2" on a rock in the room's 
center.
#34
You are in a jumble of rock, with cracks everywhere.
#35
You're at a low window overlooking a huge pit, which
extends up out of sight.  A floor is indistinctly visible
over 50 feet below.  Traces of white mist cover the floor
of the pit, becoming thicker to the right.  Marks in the
dust around the window would seem to indicate that
someone has been here recently.  Directly across the pit
from you and 25 feet away there is a similar window
looking into a lighted room.  A shadowy figure can
be seen there peering back at you.
#36
You are in a dirty broken passage.  To the east is a
crawl.  To the west is a large passage.  Above you is
another passage.
#37
You are on the brink of a small clean climbable pit.  A
crawl leads west.
#38
You are in the bottom of a small pit with a little stream,
which enters and exits through tiny slits.
#39
You are in a large room full of dusty rocks.  There is a
big hole in the floor.  There are cracks everywhere, and
a passage leading east.
#40
You have crawled through a very low wide passage parallel
to and north of the hall of mists.
#41
You are at the west end of hall of mists.  A low wide crawl
continues west and another goes north.  To the south is a
little passage 6 feet off the floor.
#42
You are in a maze of twisty little passages, all alike.
#43
You are in a maze of twisty little passages, all alike.
#44
You are in a maze of twisty little passages, all alike.
#45
You are in a maze of twisty little passages, all alike.
#46
Dead end.
#47
Dead end.
#48
Dead end.
#49
You are in a maze of twisty little passages, all alike.
#50
You are in a maze of twisty little passages, all alike.
#51
You are in a maze of twisty little passages, all alike.
#52
You are in a maze of twisty little passages, all alike.
#53
You are in a maze of twisty little passages, all alike.
#54
Dead end.
#55
You are in a maze of twisty little passages, all alike.
#56
Dead end.
#57
You are on the brink of a thirty foot pit with a massive
orange column down one wall.  You could climb down here but
you could not get back up.  The maze continues at this level.
#58
Dead end.
#59
You have crawled through a very low wide passage parallel
to and north of the hall of mists.
#60
You are at the east end of a very long hall apparently
without side chambers.  To the east a low wide crawl
slants up.  To the north a round two foot hole slants
down.
#61
You are at the west end of a very long featureless hall.
The hall joins up with a narrow north/south passage.
#62
You are at a crossover of a high N/S passage and a low
E/W one.
#63
Dead end.
#64
You are at a complex junction.  A low hands and knees passage
from the north joins a higher crawl from the east to make
a walking passage going west.  There is also a large room
above.  The air is damp here.
#65
You are in bedquilt, a long east/west passage with holes
everywhere.  To explore at random select north, south, up
or down.
#66
You are in a room whose walls resemble swiss cheese.  
Obvious passages go west, east, ne, and nw.  Part of the
room is occupied by a large bedrock block.
#67
You are at the east end of the twopit room.  The floor
here is littered with thin rock slabs, which make it easy
to descend the pits.  There is a path here bypassing
the pits to connect passages from east and west.
There are holes all over, but the only big one is on
the wall directly over the west pit where you can't
get at it.
#68
You are in a large low circular chamber whose floor is
an immense slab fallen from the ceiling (slab room).
East and west there once were large passages, but they
are now filled with boulders.  Low small passages go
north and south, and the south one quickly bends west
around the boulders.
#69
You are in a secret N/S canyon above a large room.
#70
You are in a secret N/S canyon above a sizable passage.
#71
You are in a secret canyon at a junction of three canyons,
bearing north, south and se.  The north one is as tall as
the other two combined.
#72
You are in a large low room.  Crawls lead north, se, and sw.
#73
Dead end crawl.
#74
You are in a secret canyon which here runs E/W.  It crosses
over a very tight canyon 15 feet below.  If you go down you
may not be able to get back up.
#75
You are at a wide place in a very tight N/S canyon.
#76
The canyon here becomes too tight to go further south.
#77
You are in a tall E/W canyon.  A low tight crawl goes 3
feet north and seems to open up.
#78
The canyon runs into a mass of boulders -- dead end.
#79
The stream flows out through a pair of 1 foot diameter
sewer pipes.  It would be advisable to use the exit.
#80
You are in a maze of twisty little passages, all alike.
#81
Dead end.
#82
Dead end.
#83
You are in a maze of twisty little passages, all alike.
#84
You are in a maze of twisty little passages, all alike.
#85
Dead end.
#86
Dead end.
#87
You are in a maze of twisty little passages, all alike.
#88
You are in a long, narrow corridor stretching out of sight
to the west.  At the eastern end is a hole through which
you can see a profusion of leaves.
#89
There is nothing here to climb.  Use "up" or "out" to leave
the pit.
#90
You have climbed up the plant and out of the pit.
#91
You are at the top of a steep incline above a large room.
You could climb down here, but you would not be able to
climb up.  There is a passage leading back to the north.
#92
You are in the giant room.  The ceiling is too high up
for your lamp to show it.  Cavernous passages lead east,
north, and south.  On the west wall is scrawled the
inscription:
              "Fee Fie Foe Foo"       {sic}
#93
The passage here is blocked by a recent cave-in.
#94
You are at one end of an immense north/south passage.
#95
You are in a magnificent cavern with a rushing stream,
which cascades over a sparkling waterfall into a
roaring whirlpool which disappears through a hole in
the floor.  Passages exit to the south and west.
#96
You are in the soft room.  The walls are covered with
heavy curtains, the floor with a thick pile carpet.
Moss covers the ceiling.
#97
This is the oriental room.  Ancient oriental cave drawings
cover the walls.  A gently sloping passage leads upward
to the north, another passage leads se, and a hands and
knees crawl leads west.
#98
You are following a wide path around the outer edge of a
large cavern.  Far below, through a heavy white mist,
strange splashing noises can be heard.  The mist rises up
through a fissure in the ceiling.  The path exits to the
south and west.
#99
You are in an alcove.  A small nw path seems to widen
after a short distance.  An extremely tight tunnel leads
east.  It looks like a very tight squeeze.  An eerie
light can be seen at the other end.
#100
You're in a small chamber lit by an eerie green light.  An
extremely narrow tunnel exits to the west.  A dark corridor
leads ne.
#101
You're in the dark-room.  A corridor leading south is the
only exit.
#102
You are in an arched hall.  A coral passage once continued
up and east from here, but is now blocked by debris.  The
air smells of sea water.
#103
You're in a large room carved out of sedimentary rock.
The floor and walls are littered with bits of shells
imbedded in the stone.  A shallow passage proceeds
downward, and a somewhat steeper one leads up.  A low
hands and knees passage enters from the south.
#104
You are in a long sloping corridor with ragged sharp walls.
#105
You are in a cul-de-sac about eight feet across.
#106
You are in an anteroom leading to a large passage to the
east.  Small passages go west and up.  The remnants of
recent digging are evident.  A sign in midair here says:
       "Cave under construction beyond this point."
              "Proceed at your own risk."
             "Witt construction company"
#107
You are in a maze of twisty little passages, all different.
#108
You are at Witt's end.  Passages lead off in ALL directions.
#109
You are in a north/south canyon about 25 feet across.  The
floor is covered by white mist seeping in from the north.
The walls extend upward for well over 100 feet.  Suspended
from some unseen point far above you, an enormous two-
sided mirror is hanging parallel to and midway between
the canyon walls.  (The mirror is obviously provided
for the use of the dwarves, who as you know, are
extremely vain.)  A small window can be seen in either
wall, some fifty feet up.
#110
You're at a low window overlooking a huge pit, which
extends up out of sight.  A floor is indistinctly visible
over 50 feet below.  Traces of white mist cover the floor
of the pit, becoming thicker to the left.  Marks in the
dust around the window would seem to indicate that
someone has been here recently.  Directly across the pit
from you and 25 feet away there is a similar window
looking into a lighted room.  A shadowy figure can be seen
there peering back at you.
#111
A large stalactite extends from the roof and almost reaches
the floor below.  You could climb down it, and jump from
it to the floor, but having done so you would be unable to
reach it to climb back up.
#112
You are in a little maze of twisting passages, all different.
#113
You are at the edge of a large underground reservoir.  An
opaque cloud of white mist fills the room and rises
rapidly upward.  The lake is fed by a stream which tumbles
out of a hole in the wall about 10 feet overhead and
splashes noisily into the water somewhere within the mist.
The only passage goes back toward the south.
#114
Dead end.
#115
You are at the northeast end of an immense room, even
larger than the giant room.  It appears to be a repository
for the "adventure" program.  Massive torches far overhead
bathe the room with smoky yellow light.  Scattered about
you can be seen a pile of bottles (all of them empty), a
nursery of young beanstalks murmuring quietly, a bed of
oysters, a bundle of black rods with rusty stars on their
ends, and a collection of brass lanterns.  Off to one side
a great many dwarves are sleeping on the floor, snoring
loudly.  A sign nearby reads:
        "Do NOT disturb the dwarves!"
An immense mirror is hanging against one wall, and
stretches to the other end of the room, where various
other sundry objects can be glimpsed dimly in the distance.
#116
You are at the southwest end of the repository.  To one
side is a pit full of fierce green snakes.  On the other
side is a row of small wicker cages, each of which contains
a little sulking bird.  In one corner is a bundle of
black rods with rusty marks on their ends.  A large
number of velvet pillows are scattered about on the floor.
A vast mirror stretches off to the northeast.  At your
feet is a large steel grate, next to which is a sign
which reads:
     "Treasure vault.  Keys in main office."
#117
You are on one side of a large deep chasm.  A heavy white
mist rising up from below obscures all view of the far
side.  A sw path leads away from the chasm into a winding
corridor.
#118
You are in a long winding corridor sloping out of sight
in both directions.
#119
You are in a secret canyon which exits to the north and east.
#120
You are in a secret canyon which exits to the north and east.
#121
You are in a secret canyon which exits to the north and east.
#122
You are on the far side of the chasm.  A ne path leads away
from the chasm on this side.
#123
You're in a long east/west corridor.  A faint rumbling noise
can be heard in the distance.
#124
The path forks here.  The left fork leads northeast.  A dull
rumbling seems to get louder in that direction.  The right
fork leads southeast down a gentle slope.  The main
corridor enters from the west.
#125
The walls are quite warm here.  From the north can be heard
a steady roar, so loud that the entire cave seems to be
trembling.  Another passage leads south, and a low crawl
goes east.
#126
You are on the edge of a breath-taking view.  Far below
you is an active volcano, from which great gouts of molten
lava come surging out, cascading back down into the depths.
The glowing rock fills the farthest reaches of the cavern
with a blood-red glare, giving everything an eerie,
macabre appearance.  The air is filled with flickering
sparks of ash and a heavy smell of brimstone.  The walls
are hot to the touch, and the thundering of the volcano
drowns out all other sounds.  Embedded in the jagged roof
far overhead are myriad formations composed of pure
white alabaster, which scatter their murky light into
sinister apparitions upon the walls.  To one side is a
deep gorge, filled with a bizarre chaos of tortured
rock which seems to have been crafted by the Devil
Himself.  An immense river of fire crashes out from
the depths of the volcano, burns its way through the
gorge, and plummets into a bottomless pit far off to your
left.  To the right, an immense geyser of blistering
steam erupts continuously from a barren island in the
center of a sulfurous lake, which bubbles ominously.
The far right wall is aflame with an incandescence of its
own, which lends an additional infernal splendor to the
already hellish scene.  A dark, foreboding passage exits
to the south.
#127
You are in a small chamber filled with large boulders.
The walls are very warm, causing the air in the room
to be almost stifling from the heat.  The only exit
is a crawl heading west, through which is coming
a low rumbling.
#128
You are walking along a gently sloping north/south passage
lined with oddly shaped limestone formations.
#129
You are standing at the entrance to a large, barren
room.  A sign posted above the entrance reads:
       "Caution!  Bear in room!"
#130
You are inside a barren room.  The center of the room
is completely empty except for some dust.  Marks in
the dust lead away toward the far end of the room.
The only exit is the way you came in.
#131
You are in a maze of twisting little passages, all different.
#132
You are in a little maze of twisty passages, all different.
#133
You are in a twisting maze of little passages, all different.
#134
You are in a twisting little maze of passages, all different.
#135
You are in a twisty little maze of passages, all different.
#136
You are in a twisty maze of little passages, all different.
#137
You are in a little twisty maze of passages, all different.
#138
You are in a maze of little twisting passages, all different.
#139
You are in a maze of little twisty passages, all different.
#140
Dead end.
#141
#142
#143
#144
#145
```
{% endraw %}

## ADVENT2.TXT

{% raw %}
```
#1
You're at end of road again.
#2
You're at hill in road.
#3
You're inside building.
#4
You're in valley.
#5
You're in forest.
#6
You're in forest.
#7
You're at slit in streambed.
#8
You're outside grate.
#9
You're below the grate.
#10
You're in cobble crawl.
#11
You're in debris room.
#12
You are in an awkward sloping east/west canyon.
#13
You're in bird chamber.
#14
You're at top of small pit.
#15
You're in hall of mists.
#16
The crack is far too small for you to follow.
#17
You're on east bank of fissure.
#18
You're in nugget of gold room.
#19
You're in hall of mt. king.
#20
You are at the bottom of the pit with a broken neck.
#21
You didn't make it.
#22
The dome is unclimbable.
#23
You're at west end of twopit room.
#24
You're in east pit.
#25
You're in west pit.
#26
You clamber up the plant and scurry through the hole at the
top.
#27
You are on the west side of the fissure in the hall of mists.
#28
You are in a low N/S passage at a hole in the floor.  The
hole goes down to an E/W passage.
#29
You are in the south side chamber.
#30
You are in the west side chamber of the hall of the
mountain king.  A passage continues west and up here.
#31
>$<
#32
You can't get by the snake.
#33
You're at "Y2".
#34
You are in a jumble of rock, with cracks everywhere.
#35
You're at window on pit.
#36
You're in dirty passage.
#37
You are on the brink of a small clean climbable pit.  A
crawl leads west.
#38
You are in the bottom of a small pit with a little stream,
which enters and exits through tiny slits.
#39
You're in dusty rock room.
#40
You have crawled through a very low wide passage parallel
to and north of the hall of mists.
#41
You're at west end of hall of mists.
#42
You are in a maze of twisty little passages, all alike.
#43
You are in a maze of twisty little passages, all alike.
#44
You are in a maze of twisty little passages, all alike.
#45
You are in a maze of twisty little passages, all alike.
#46
Dead end.
#47
Dead end.
#48
Dead end.
#49
You are in a maze of twisty little passages, all alike.
#50
You are in a maze of twisty little passages, all alike.
#51
You are in a maze of twisty little passages, all alike.
#52
You are in a maze of twisty little passages, all alike.
#53
You are in a maze of twisty little passages, all alike.
#54
Dead end.
#55
You are in a maze of twisty little passages, all alike.
#56
Dead end.
#57
You're at brink of pit.
#58
Dead end.
#59
You have crawled through a very low wide passage parallel
to and north of the hall of mists.
#60
You're at east end of long hall.
#61
You're at west end of long hall.
#62
You are at a crossover of a high N/S passage and a low
E/W one.
#63
Dead end.
#64
You're at complex junction.
#65
You are in bedquilt, a long east/west passage with holes
everywhere.  To explore at random select north, south, up
or down.
#66
You're in swiss cheese room.
#67
You're at east end of twopit room.
#68
You're in slab room.
#69
You are in a secret N/S canyon above a large room.
#70
You are in a secret N/S canyon above a sizable passage.
#71
You're at junction of three secret canyons.
#72
You are in a large low room.  Crawls lead north, se, and sw.
#73
Dead end crawl.
#74
You're at secret E/W canyon above tight canyon.
#75
You are at a wide place in a very tight N/S canyon.
#76
The canyon here becomes too tight to go further south.
#77
You are in a tall E/W canyon.  A low tight crawl goes 3
feet north and seems to open up.
#78
The canyon runs into a mass of boulders -- dead end.
#79
The stream flows out through a pair of 1 foot diameter
sewer pipes.  It would be advisable to use the exit.
#80
You are in a maze of twisty little passages, all alike.
#81
Dead end.
#82
Dead end.
#83
You are in a maze of twisty little passages, all alike.
#84
You are in a maze of twisty little passages, all alike.
#85
Dead end.
#86
Dead end.
#87
You are in a maze of twisty little passages, all alike.
#88
You're in narrow corridor.
#89
There is nothing here to climb.  Use "up" or "out" to leave
the pit.
#90
You have climbed up the plant and out of the pit.
#91
You're at steep incline above large room.
#92
You're in giant room.
#93
The passage here is blocked by a recent cave-in.
#94
You are at one end of an immense north/south passage.
#95
You're in cavern with waterfall.
#96
You're in soft room.
#97
You're in oriental room.
#98
You're in misty cavern.
#99
You're in alcove.
#100
You're in plover room.
#101
You're in dark-room.
#102
You're in arched hall.
#103
You're in shell room.
#104
You are in a long sloping corridor with ragged sharp walls.
#105
You are in a cul-de-sac about eight feet across.
#106
You're in anteroom.
#107
You are in a maze of twisty little passages, all different.
#108
You're at Witt's end.
#109
You're in mirror canyon.
#110
You're at window on pit.
#111
You're at top of stalactite.
#112
You are in a little maze of twisting passages, all different.
#113
You're at reservoir.
#114
Dead end.
#115
You're at ne end of repository.
#116
You're at sw end of repository.
#117
You're on sw side of chasm.
#118
You're in sloping corridor.
#119
You are in a secret canyon which exits to the north and east.
#120
You are in a secret canyon which exits to the north and east.
#121
You are in a secret canyon which exits to the north and east.
#122
You're on ne side of chasm.
#123
You're in corridor.
#124
You're at fork in path.
#125
You're at junction with warm walls.
#126
You're at breath-taking view.
#127
You're in chamber of boulders.
#128
You're in limestone passage.
#129
You're in front of barren room.
#130
You're in barren room.
#131
You are in a maze of twisting little passages, all different.
#132
You are in a little maze of twisty passages, all different.
#133
You are in a twisting maze of little passages, all different.
#134
You are in a twisting little maze of passages, all different.
#135
You are in a twisty little maze of passages, all different.
#136
You are in a twisty maze of little passages, all different.
#137
You are in a little twisty maze of passages, all different.
#138
You are in a maze of little twisting passages, all different.
#139
You are in a maze of little twisty passages, all different.
#140
Dead end.
#141
#142
#143
#144
#145
```
{% endraw %}

## ADVENT3.TXT

{% raw %}
```
#1
/Set of keys
/There are some keys on the ground here.
/
#2
/Brass lantern
/There is a shiny brass lamp nearby.
/There is a lamp shining nearby.
/
#3
/*Grate
/The grate is locked.
/The grate is open.
/
#4
/Wicker cage
/There is a small wicker cage discarded nearby.
/
#5
/Black rod
/A three foot black rod with a rusty star on an end lies nearby.
/
#6
/Black rod
/A three foot black rod with a rusty mark on an end lies nearby.
/
#7
/*Steps
/Rough stone steps lead down the pit.
/Rough stone steps lead up the dome.
/
#8
/Little bird in cage
/A cheerful little bird is sitting here singing.
/There is a little bird in the cage.
/
#9
/*Rusty door
/The way north is barred by a massive, rusty, iron door.
/The way north leads through a massive, rusty, iron door.
/
#10
/Velvet pillow
/A small velvet pillow lies on the floor.
/
#11
/*Snake
/A huge green fierce snake bars the way!
//
#12
/*Fissure
//A crystal bridge now spans the fissure.
/The crystal bridge has vanished!
/
#13
/*Stone tablet
/A massive stone tablet imbedded in the wall reads:
"Congratulations on bringing light into the dark-room!"
/
#14
/Giant clam >Grunt!<
/There is an enormous clam here with its shell tightly closed.
/
#15
/Giant oyster >Groan!<
/There is an enormous oyster here with its shell tightly closed.
/Interesting.  There seems to be something written on the
underside of the oyster.
/
#16
/"Spelunker Today"
/There are a few recent issues of "Spelunker Today" magazine
here.
/
#17
#18
#19
/Tasty food
/There is tasty food here.
/
#20
/Small bottle
/There is a bottle of water here.
/There is an empty bottle here.
/There is a bottle of oil here.
/
#21
/Water in the bottle
/
#22
/Oil in the bottle
/
#23
/*Mirror
//
#24
/*Plant
/There is a tiny little plant in the pit, murmuring
"Water, Water, ..."
/The plant spurts into furious growth for a few seconds.
/There is a 12-foot-tall beanstalk stretching up out of
the pit, bellowing "Water!!  Water!!"
/The plant grows explosively, almost filling the bottom
of the pit. 
/There is a gigantic beanstalk stretching all the way
up to the hole.
/You've over-watered the plant!  It's shriveling up!
It's, it's...
/
#25
/*Phony plant
/
/The top of a 12-foot-tall beanstalk is poking up out of
the west pit.
/There is a huge beanstalk growing out of the west pit up to
the hole.
/
#26
/*Stalactite
//
#27
/*Shadowy figure
/The shadowy figure seems to be trying to attract your attention.
/
#28
/Dwarf's axe
/There is a little axe here.
/There is a little axe lying beside the bear.
/
#29
/*Cave drawings
//
#30
/*Pirate
//
#31
/*Dragon
/A huge green fierce dragon bars the way!
/Congratulations!  You have just vanquished a dragon with
your bare hands!  (Unbelievable, isn't it?)
/The body of a huge green dead dragon is lying off to one
side.
/
#32
/*Chasm
/A rickety wooden bridge extends across the chasm, vanishing
into the mist.  A sign posted on the bridge reads:
          "Stop!  Pay Troll!"
/The wreckage of a bridge (and a dead bear) can be seen
at the bottom of the chasm.
/
#33
/*Troll
/A burly troll stands by the bridge and insists you throw
him a treasure before you may cross.
/The troll steps out from beneath the bridge and blocks
your way.
//
#34
/*Phony troll
/The troll is nowhere to be seen.
/
#35
//There is a ferocious cave bear eyeing you from the far
end of the room!
/There is a gentle cave bear sitting placidly in one corner.
/There is a contented-looking bear wandering about nearby.
//
#36
/*Message in second maze
/There is a message scrawled in the dust in a flowery script,
reading:
           "This is not the maze where the"
           "pirate leaves his treasure chest."
/
#37
/*Volcano and,or Geyser
//
#38
/*Vending machine
/There is a massive vending machine here.  The instructions
on it read:
     "Drop coins here to receive fresh batteries."
/
#39
/Batteries
/There are fresh batteries here.
/Some worn-out batteries have been discarded nearby.
/
#40
/*Carpet and,or Moss
//
#41
#42
#43
#44
#45
#46
#47
#48
#49
#50
/Large gold nugget
/There is a large sparkling nugget of gold here!
/
#51
/Several diamonds
/There are diamonds here!
/
#52
/Bars of silver
/There are bars of silver here!
/
#53
/Precious jewelry
/There is precious jewelry here!
/
#54
/Rare coins
/There are many coins here!
/
#55
/Treasure chest
/The pirate's treasure chest is here!
/
#56
/Golden eggs
/There is a large nest here, full of golden eggs!
/The nest of golden eggs has vanished!
/Done!
/
#57
/Jeweled trident
/There is a jewel-encrusted trident here!
/
#58
/Ming vase
/There is a delicate, precious, ming vase here!
/The vase is now resting, delicately, on a velvet pillow.
/The floor is littered with worthless shards of pottery.
/The ming vase drops with a delicate crash.
/
#59
/Egg-sized emerald
/There is an emerald here the size of a plover's egg!
/
#60
/Platinum pyramid
/There is a platinum pyramid here, 8 inches on a side!
/
#61
/Glistening pearl
/Off to one side lies a glistening pearl!
/
#62
/Persian rug
/There is a persian rug spread out on the floor!
/The dragon is sprawled out on a persian rug!!
/
#63
/Rare spices
/There are rare spices here!
/
#64
/Golden chain
/There is a golden chain lying in a heap on the floor!
/The bear is locked to the wall with a golden chain!
/There is a golden chain locked to the wall!
/
```
{% endraw %}

## ADVENT4.TXT

{% raw %}
```
#1


Somewhere nearby is Colossal Cave, where others have
found fortunes in treasure and gold, though it is rumored
that some who enter are never seen again.  Magic is said
to work in the cave.  I will be your eyes and hands.  Direct
me with commands of 1 or 2 words.  I should warn you that I
look at only the first five letters of each word, so you'll
have to enter "northeast" as "ne" to distinguish it from
"north".  (Should you get stuck, type "help" for some
general hints.)

#2
A little dwarf with a big knife blocks your way.
#3
A little dwarf just walked around a corner, saw you,
threw a little axe at you which missed, cursed, and ran away.
#4
There is a threatening little dwarf in the room with you!
#5
One sharp, nasty knife is thrown at you!
#6
None of them hit you!
#7
One of them gets you!
#8
A hollow voice says "Plugh".
#9
There is no way to go that direction.
#10
I am unsure how you are facing.  Use compass points or
nearby objects.
#11
I don't know in from out here.  Use compass points or name
something in the general direction you want to go.
#12
I don't know how to apply that word here.
#13
I don't understand that!
#14
I'm game.  Would you care to explain how?
#15
Sorry, but I am not allowed to give more detail.  I will
repeat the long description of your location.
#16
It is now pitch dark.  If you proceed you will likely fall
into a pit.
#17
If you prefer, simply type W rather than west.
#18
Are you trying to catch the bird?
#19
The bird is frightened right now and you cannot catch
it no matter what you try.  Perhaps you might try later.
#20
Are you trying to somehow deal with the snake?
#21
You can't kill the snake, or drive it away, or avoid it,
or anything like that.  There is a way to get by, but you
don't have the necessary resources right now.
#22
Do you really want to quit now?
#23
You fell into a pit and broke every bone in your body!
#24
You are already carrying it!
#25
You can't be serious!
#26
The bird was unafraid when you entered, but as you approach
it becomes disturbed and you cannot catch it.
#27
You can catch the bird, but you cannot carry it.
#28
There is nothing here with a lock!
#29
You aren't carrying it!
#30
The little bird attacks the green snake, and in an
astounding flurry drives the snake away.
#31
You have no keys!
#32
It has no lock.
#33
I don't know how to lock or unlock such a thing.
#34
It was already locked.
#35
The grate is now locked.
#36
The grate is now unlocked.
#37
It was already unlocked.
#38
You have no source of light.
#39
Your lamp is now on.
#40
Your lamp is now off.
#41
There is no way to get past the bear to unlock the chain,
which is probably just as well.
#42
Nothing happens.
#43
Where?
#44
There is nothing here to attack.
#45
The little bird is now dead.  Its body disappears.
#46
Attacking the snake both doesn't work and is very dangerous.
#47
You killed a little dwarf.
#48
You attack a little dwarf, but he dodges out of the way.
#49
With what?  Your bare hands?
#50
Good try, but that is an old worn-out magic word.
#51
I know of places, actions, and things.  Most of my vocabulary
describes places and is used to move you there.  To move, try
words like forest, building, downstream, enter, east, west,
north, south, up or down.  I know about a few special
objects, like a black rod hidden in the cave.  These objects
can be manipulated using some of the action words I know.
Usually you will need to give both the object and action
words (in either order), but sometimes I can infer the
object from the verb alone.  Some objects also imply verbs;
in particular, "inventory" implies "take inventory", which
causes me to give you a list of what you're carrying.  The
objects have side effects; for instance, the rod scares the
bird.  Usually people having trouble moving just need
to try a few more words.  Usually people trying unsuccessfully
to manipulate an object are attempting something beyond their
(or my!) capabilities and should try a completely different
tack.  To speed the game you can sometimes move long distances
with a single word.  For example, "building" usually gets you
to the building from anywhere above ground except when lost
in the forest.  Also, note that cave passages turn a lot, and
that leaving a room to the north does not guarantee entering
the next from the south.
Good luck!
#52
It misses!
#53
It gets you!
#54
OK
#55
You can't unlock the keys.
#56
You have crawled around in some little holes and wound up
back in the main passage.
#57
I don't know where the cave is, but hereabouts no stream
can run on the surface for very long.  I would try the stream.
#58
I need more detailed instructions to do that.
#59
I can only tell you what you see as you move about and
manipulate things.  I cannot tell you where remote things are.
#60
I don't know that word.
#61
What?
#62
Are you trying to get into the cave?
#63
The grate is very solid and has a hardened steel lock.  You
cannot enter without a key, and there are no keys nearby.
I would recommend looking elsewhere for the keys.
#64
The trees of the forest are large hardwood oak and maple,
with an occasional grove of pine or spruce.  There is quite
a bit of undergrowth, largely birch and ash saplings plus
nondescript bushes of various sorts.  This time of year 
visibility is quite restricted by all the leaves, but travel
is quite easy if you detour around the spruce and berry
bushes.
#65


		Welcome to ADVENTURE!


	Original development by Willie Crowther.

	Major features added by Don Woods.

	Conversion to BDS  C by J. R. Jaeger.

	Unix standardization by Jerry D. Pohl.


		Would you like instructions?

#66
Digging without a shovel is quite impractical.  Even with a
shovel progress is unlikely.
#67
Blasting requires dynamite.
#68
I'm as confused as you are.
#69
Mist is a white vapor, usually water.  Seen from time to time
in caverns.  It can be found anywhere but is frequently a
sign of a deep pit leading down to water.
#70
Your feet are now wet.
#71
I think I just lost my appetite.
#72
Thank you.  It was delicious!
#73
You have taken a drink from the stream.  The water tastes
strongly of minerals, but is not unpleasant.  It is extremely
cold.
#74
The bottle of water is now empty.
#75
Rubbing the electric lamp is not particularly rewarding.
Anyway, nothing exciting happens.
#76
Peculiar.  Nothing unexpected happens.
#77
Your bottle is empty and the ground is wet.
#78
You can't pour that.
#79
Watch it!
#80
Which way?
#81
Oh dear, you seem to have gotten yourself killed.  I might
be able to help you out, but I've never really done this
before.  Do you want me to try to reincarnate you?
#82
All right.  But don't blame me if something goes wr......
                    --- POOF !! ---
You are engulfed in a cloud of orange smoke.  Coughing and
gasping, you emerge from the smoke and find...
#83
You clumsy oaf, you've done it again!  I don't know how long
I can keep this up.  Do you want me to try reincarnating
you again?
#84
Okay, now where did I put my orange smoke? ... > POOF! <
Everything disappears in a dense cloud of orange smoke.
#85
Now you've really done it!  I'm out of orange smoke!  You
don't expect me to do a decent reincarnation without any
orange smoke, do you?
#86
Okay, If you're so smart, do it yourself!  I'm leaving!
#87
Reserved
#88
Reserved
#89
Reserved
#90
Reserved
#91
Sorry, but I no longer seem to remember how it was you
got here.
#92
You can't carry anything more.  You'll have to drop something
first.
#93
You can't go through a locked steel grate!
#94
I believe what you want is right here with you.
#95
You don't fit through a two-inch slit!
#96
I respectfully suggest you go across the bridge instead
of jumping.
#97
There is no way across the fissure.
#98
You're not carrying anything.
#99
You are currently holding the following:
#100
It's not hungry (it's merely pinin' for the Fjords).  Besides
you have no bird seed.
#101
The snake has now devoured your bird.
#102
There's nothing here it wants to eat (except perhaps you).
#103
You fool, dwarves eat only coal!  Now you've made
him REALLY mad!!
#104
You have nothing in which to carry it.
#105
Your bottle is already full.
#106
There is nothing here with which to fill the bottle.
#107
Your bottle is now full of water.
#108
Your bottle is now full of oil.
#109
You can't fill that.
#110
Don't be ridiculous!
#111
The door is extremely rusty and refuses to open.
#112
The plant indignantly shakes the oil off its leaves and asks:
"Water?"
#113
The hinges are quite thoroughly rusted now and won't budge.
#114
The oil has freed up the hinges so that the door will now move,
although it requires some effort.
#115
The plant has exceptionally deep roots and cannot be pulled free.
#116
The dwarves' knives vanish as they strike the walls of the cave.
#117
Something you're carrying won't fit through the tunnel with
you.  You'd best take inventory and drop something.
#118
You can't fit this five-foot clam through that little passage!
#119
You can't fit this five-foot oyster through that little passage!
#120
I advise you to put down the clam before opening it. >STRAIN!<
#121
I advise you to put down the oyster before opening it.
>WRENCH!<
#122
You don't have anything strong enough to open the clam.
#123
You don't have anything strong enough to open the oyster.
#124
A glistening pearl falls out of the clam and rolls away.
Goodness, this must really be an oyster.  (I never was
very good at identifying bivalves.)  Whatever it is,
it has now snapped shut again.
#125
The oyster creaks open, revealing nothing but oyster inside.
It promptly snaps shut again.
#126
You have crawled around in some little holes and found your
way blocked by a recent cave-in.  You are now back in the
main passage.
#127
There are faint rustling noises from the darkness behind
you.
#128
Out from the shadows behind you pounces a bearded pirate!
"Har, har" he chortles, "I'll just take all this booty and
hide it away with me chest deep in the maze!"  He snatches
your treasure and vanishes into the gloom.
#129
A sepulchral voice reverberating through the cave says:
"Cave closing soon.  All adventurers exit immediately
through main office."
#130
A mysterious recorded voice groans into life and announces:
"This exit is closed.  Please leave via main office."
#131
It looks as though you're dead.  Well, seeing as how it's so
close to closing time anyway, I think we'll just call it a day.
#132
The sepulchral voice entones, "The cave is now closed."  As
the echoes fade, there is a blinding flash of light (and a
small puff of orange smoke). . . . 
As your eyes refocus you look around and find...
#133
There is a loud explosion, and a twenty-foot hole appears in
the far wall, burying the dwarves in the rubble.  You march
through the hole and find yourself in the main office, where
a cheering band of friendly elves carry the conquering
adventurer off into the sunset.
#134
There is a loud explosion, and a twenty-foot hole appears in
the far wall, burying the snakes in the rubble.  A river of
molten lava pours in through the hole, destroying
everything in its path, including you!!
#135
There is a loud explosion, and you are suddenly splashed across
the walls of the room.
#136
The resulting ruckus has awakened the dwarves.  There are now
several threatening little dwarves in the room with you!
Most of them throw knives at you!  All of them get you!
#137
Oh, leave the poor unhappy bird alone.
#138
I daresay whatever you want is around here somewhere.
#139
I don't know the word "stop".  Use "quit" if you want to
give up.
#140
You can't get there from here.
#141
You are being followed by a very large, tame bear.
#142
If you want to end your adventure early, say "quit".  To
suspend you adventure such that you can continue later
say "suspend" (or "pause" or "save").  To see how well
you're doing, say "score".  To get full credit for a
treasure, you must have left it safely in the building,
though you get partial credit just for locating it.
You lose points for getting killed, or for quitting,
though the former costs you more.  There are also points
based on how much (if any) of the cave you've managed to
explore; in particular, there is a large bonus just for
getting in (to distinguish the beginners from the rest of
the pack), and there are other ways to determine whether
you've been through some of the more harrowing sections.
If you think you've found all the treasures, just keep
exploring for a while.  If nothing interesting happens, you
haven't found them all yet.  If something interesting DOES
happen, it means you're getting a bonus and have an
opportunity to garner many more points in the master's
section.  I may occasionally offer hints if you seem to
be having trouble.  If I do, I'll warn you in
advance how much it will affect your score to accept the
hints.  Finally, to save paper, you may specify "brief",
which tells me never to repeat the full description of a place
unless you explicitly ask me to.
#143
Do you indeed wish to quit now?
#144
There is nothing here with which to fill the vase.
#145
The sudden change in temperature has delicately shattered
the vase.
#146
It is beyond your power to do that.
#147
I don't know how.
#148
It is too far up for you to reach.
#149
You killed a little dwarf.  The body vanished in a cloud
of greasy black smoke.
#150
The shell is very strong and impervious to attack.
#151
What's the matter, can't you read?  Now you'd best start
over.
#152
The axe bounces harmlessly off the dragon's thick scales.
#153
The dragon looks rather nasty.  You'd best not try to get by.
#154
The little bird attacks the green dragon, and in an
astounding flurry gets burnt to a cinder.  The ashes blow away.
#155
On what?
#156
Okay, from now on I'll only describe a place in full the
first time you come to it.  To get the full description
say "look".
#157
Trolls are close relatives with the rocks and have skin as
tough as that of a rhinoceros.  The troll fends off your
blows effortlessly.
#158
The troll deftly catches the axe, examines it carefully,
and tosses it back, declaring, "Good workmanship,
but it's not valuable enough."
#159
The troll catches your treasure and scurries away out of sight.
#160
The troll refuses to let you cross.
#161
There is no longer any way across the chasm.
#162
Just as you reach the other side, the bridge buckles beneath
the weight of the bear, which was still following you around.
You scrabble desperately for support, but as the bridge 
collapses you stumble back and fall into the chasm.
#163
The bear lumbers toward the troll, who lets out a
startled shriek and scurries away.  The bear soon gives
up pursuit and wanders back.
#164
The axe misses and lands near the bear where you can't get
at it.
#165
With what?  Your bare hands?  Against HIS bear hands??
#166
The bear is confused; he only wants to be your friend.
#167
For crying out loud, the poor thing is already dead!
#168
The bear eagerly wolfs down your food, after which he seems
to calm down considerably, and even becomes rather friendly.
#169
The bear is still chained to the wall.
#170
The chain is still locked.
#171
The chain is now unlocked.
#172
The chain is now locked.
#173
There is nothing here to which the chain can be locked.
#174
There is nothing here to eat.
#175
Do you want the hint?
#176
Do you need help getting out of the maze?
#177
You can make the passages look less alike by dropping things.
#178
Are you trying to explore beyond the plover room?
#179
There is a way to explore that region without having to
worry about falling into a pit.  None of the objects
available is immediately useful in discovering the secret.
#180
Do you need help getting out of here?
#181
Don't go west.
#182
Gluttony is not one of the troll's vices.  Avarice, however, is.
#183
Your lamp is getting dim.  You'd best start wrapping this up,
unless you can find some fresh batteries.  I seem to recall
there's a vending machine in the maze.  Bring some coins
with you.
#184
Your lamp has run out of power.
#185
There's not much point in wandering around out here, and you
can't explore the cave without a lamp.  So let's just call
it a day.
#186
There are faint rustling noises from the darkness behind you.
As you turn toward them, the beam of your lamp falls across a
bearded pirate.  He is carrying a large chest.  "Shiver me
timbers!"  he cries, "I've been spotted!  I'd best hide
meself off to the maze and hide me chest!"  With that,
he vanished into the gloom.
#187
Your lamp is getting dim.  You'd best go back for
those batteries.
#188
Your lamp is getting dim.  I'm taking the liberty of replacing
the batteries.
#189
Your lamp is getting dim, and you're out of spare batteries.
You'd best start wrapping this up.
#190
I'm afraid the magazine is written in Dwarvish.
#191
"This is not the maze where the pirate leaves his treasure
chest."
#192
Hmm, this looks like a clue, which means it'll cost you 10
points to read it.  Should I go ahead and read it anyway?
#193
It says, "There is something strange about this place,
such that one of the words I've always known now has
a new effect."
#194
It says the same thing it did before.
#195
I'm afraid I don't understand.
#196
"Congratulations on bringing light into the dark-room!"
#197
You strike the mirror a resounding blow, whereupon it
shatters into a myriad tiny fragments.
#198
You have taken the vase and hurled it delicately to the
ground.
#199
You prod the nearest dwarf, who wakes up grumpily, takes
one look at you, curses, and grabs for his axe.
#200
Is this acceptable?
#201
There's no point in suspending a demonstration game.
```
{% endraw %}

## FILE0259.TXT

{% raw %}
```
Disk No:  259                                                           
Disk Title: C Adventure                                                 
PC-SIG Version: S1.2                                                    
                                                                        
Program Title: C Adventure                                              
Author Version: 03/90                                                   
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
A classic Dungeons and Dragons text adventure game.  Go into the cave   
and gather as much treasure as possible without getting dismembered,    
eaten or otherwise maimed.  And, of course, escape with your loot!      
                                                                        
Since the C source code is included, the game players can explore       
and the hackers can change things to suit themselves.  Features a good  
English language parser.  Games can be saved in progress and restored   
for later playing.                                                      
                                                                        
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
║                  <<<<  Disk #0259 C ADVENTURE  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type: ADVENT  (press enter)                       ║
║                                                                         ║
║ To print documentation, type: COPY ADVENT.DOC PRN (press enter)         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c)Copyright 1990, PC-SIG Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0259

     Volume in drive A has no label
     Directory of A:\

    ADVCAVE  H        8110   3-20-90   8:21p
    ADVDEC   H        1949   3-17-90  11:05a
    ADVDEF   H        1520   3-17-90  11:05a
    ADVENT   C        6326   3-20-90   7:26p
    ADVENT   DOC      3328   6-12-84   9:10p
    ADVENT   EXE     61113   3-20-90   8:37p
    ADVENT   H        2579   3-20-90   8:07p
    ADVENT0  C        3523   5-19-84  12:18p
    ADVENT0  EXE     11776   5-19-84  12:22p
    ADVENT1  TXT     18316   3-20-90   8:42p
    ADVENT2  TXT      6482   3-20-90   8:43p
    ADVENT3  TXT      5559   3-17-90  11:04a
    ADVENT4  TXT     18174   3-17-90  11:05a
    ADVTEXT  H        3313   3-20-90   8:11p
    ADVWORD  H        5176   3-17-90  11:06a
    DATABASE C        6694   3-20-90   8:35p
    ENGLISH  C        3148   3-17-90  11:11a
    ITVERB   C        3526   3-17-90  11:11a
    TURN     C       15486   3-20-90   7:48p
    VERB     C       12826   3-20-90   7:40p
    GO       BAT        38   4-21-88   9:08a
    GO       TXT       574   1-01-80   3:32a
    FILE0259 TXT      1703   7-09-90   7:26p
           23 file(s)     201239 bytes
                          108544 bytes free
