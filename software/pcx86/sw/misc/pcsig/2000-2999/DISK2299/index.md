---
layout: page
title: "PC-SIG Diskette Library (Disk #2299)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2299/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2299"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SON OF STAGEFRIGHT"

    This is a text adventure game with a theatrical twist. Things just
    aren't going right for you. For starters, you're locked inside an old
    abandoned theater. The little voice inside you is screaming, "GET OUT
    OF HERE!" As you try to get out, you'll encounter creaky catwalks,
    raging rivers, mini-mazes, rogues, rats and a zookeeper. You'll also
    endure puns, perils, pratfalls, word play, bad jokes, and some mild
    innuendo.
    
    This game was written using the Adventure Game Toolkit (PC-SIG Disk #
    1231,1232) and was the winner of the text adventure contest sponsored
    by the authors of the Toolkit.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AGTBLURB.TXT

{% raw %}
```


INTRODUCTION TO THE ADVENTURE GAME TOOLKIT
 
 
This write-up (1) gives an overview of the Adventure Game Toolkit (AGT), a new
"shareware" adventure game development system, (2) presents a complete
"walkthru" of a small game that was created using AGT, but without any
programming by the game developer, (3) introduces AGT's unique metalanguage
especially designed to give the game developer total control and flexibility
in creating adventure games comparable to those from Infocom, and (4) tells
how to register/order the AGT development system.


1 -- OVERVIEW OF THE ADVENTURE GAME TOOLKIT


The Adventure Game Toolkit is designed to allow you to create and play your
own text adventure games.  Once created, your adventure games can be shared
with and enjoyed by others -- even if they do not have a copy of the Adventure
Game Toolkit themselves.   
 
The Adventure Game Toolkit (AGT) began life as a program by Mark Welch called
the Generic Adventure Game System (GAGS).  Using GAGS it was possible for the
non-programmer to develop complete adventure games using a fixed (but
relatively large) vocabulary of action verbs.  David Malmberg took GAGS and
made a number of enhancements including the ability to customize the
vocabulary and to program complex conditional tests and a rich assortment of
actions and messages using a special metalanguage (designed specifically for
writing adventure games).  The current Adventure Game Toolkit combines the
best features of both approaches to enable the user to create two distinct
levels of adventure games:
 
    (1)  Standard Level games that require no programming experience
         (honestly!), only a fertile imagination.  These Standard Level games
         follow the original GAGS format and only require that the user
         generate the game using a word processor or text editor to describe
         the various locations, objects and results of actions that
         collectively make up the game.

    (2)  Professional Level games that also make use of the special adventure
         game metalanguage to create games as complex and rich as the game
         designer's imagination and prose style will allow.  These games
         should be technically comparable with the published text adventure
         games from firms like Infocom.


FEATURES OF THE ADVENTURE GAME TOOLKIT

AGT has a number of features that make it a very comprehensive adventure
product.  These features make AGT more powerful, more professional and easier
to use than any previously available text adventure game development system. 
Some of these key features are: 

    POWERFUL

         *    Big, complex games with up to 200 locations, 100 inanimate
              objects (e.g., treasures, swords, lakes, trees, books, etc.) and
              100 animate objects (e.g., people, animals or creatures).

         *    Large standard vocabulary with potential to define many more
              words unique to a specific adventure.  Typical games can have a
              vocabulary of 500 words or more.

         *    Sophisticated parser that can understand (1) complex input
              commands including pronouns (IT, HIM, HER, THEM, MY and ITS),
              and (2) compound commands separated by AND or THEN or
              punctuation symbols, and (3) commands addressed to characters
              within the game.  Here are a few examples of commands AGT can
              handle with ease:
 
                   GET THE FLASH LIGHT AND THEN SWITCH IT ON
                   DROP THE FOOD, THE KEY AND THE BOTTLE THEN UNLOCK THE DOOR
                        WITH THE BRASS KEY AND THEN LEAVE
                   PUT ON THE CLOAK, THEN EXAMINE IT; READ ITS LABEL
                   PLACE THE GREEN ROCK AND THE SMALL PEBBLE BEHIND THE TREE
                   ENTER THE HOUSE; GET ALL; EXIT; SOUTH; SOUTH THEN DOWN
                   SULU, SET A COURSE FOR ALPHA 14
                   SCOTTY, BEAM DOWN A TRICORDER AND THE QWERTY MODULE

        *     Special, English-like metalanguage (especially developed for
              writing Adventure games) that gives the game designer total
              control and flexibility in the development of his/her games.

        *     Source code available to Registered Users.  Over 13,000 lines of
              Turbo Pascal that may be customized to fit the game designer's
              unique needs.

    PROFESSIONAL
 
        *     "Look and feel" of Infocom adventure games with similar screen
              layout and standard vocabulary and routines.

        *     Automatic screen adaptation to use either a color or a
              monochrome monitor.  Color combinations may be specified by the
              game designer or by the player during the game.

        *     Predefined function and cursor keys to input frequently used
              commands and move directions.
 
        *     SCRIPT and UNSCRIPT commands to echo game output to printer.
 
    EASY-TO-USE

        *     Large library of completed games that can be enjoyed simply as
              great entertainment or used as a platform by the game designer
              to build upon and/or learn from.

        *     Professionally written documentation totalling about 200 pages.
              Has numerous examples that unveil the "secrets" of great
              adventure writers.


HARDWARE REQUIREMENTS FOR AGT 

The games created by the Adventure Game Toolkit requires a computer with at
least 384K of memory, MS-DOS 2.1, and at least one disk drive.  It is possible
to use any kind of monitor and AGT will automatically adjust its output to
best suit the monitor.
 
 2 -- A "WALKTHRU" OF A STANDARD LEVEL GAME


Using AGT, it is possible to create games that do not require any programming
knowledge or experience (honestly!).  The game designer just "fills in the
blanks" as he/she describes the locations, objects and characters that
collectively make up the game using his/her word processor or text editor.  As
an example, the following lengthy scenario is from a Standard Level game that
is developed in the AGT printed manual in a detailed, step-by-step tutorial. 
This game was developed without any programming skill:  


  It is the year 2093.  You, a foolish explorer, decided to wander the
radiation-filled areas near what used to be the nation's capital: Washington,
D.C.  You've found the adventure you sought, though few of your exploits
turned out as you'd expected.
  In your six-month travels, you've been attacked by packs of wild dogs and a
few wilder humans.  Your supplies were stolen weeks ago, and you've been
existing by eating the few surviving vegetables in long-abandoned gardens,
despite the risks of eating food grown in this area.  When you finally tried
to leave this restricted region, you were shot at by patrols who detected too
much radiation in your body. 
  In your ever-more-desperate search for either a safe temporary home or a way
out of the danger-zone, you've begun exploring the hills where other wanderers
have said there are caves and tunnels.  Somewhere here, it is rumored, there
was once an underground complex where the elite few hid during the atomic
cataclysm.  No trace has ever been found of those hidden politicians and
millionaires, though the mysterious roars of explosions were heard two years
after the Last War ended, suggesting that the survivors above ground might
have found and destroyed the survivors who hid below.
  After several weeks of living off the land, you discovered a deep pit,
apparently man-made, at the center of a neatly-rounded hill.  For two days,
you explored the hill, trying to find another cave or even an out-of-place
pile of dirt, to no avail.  Far away to the south are five blackened pits in
the earth, burned, ash-covered remnants of a few days of sheer hell; you've
wondered if their target might have been hills like this.
  Finally, you locate a much-used rope and tie one end around some rocks near
the pit, hoping to lower yourself into it.  As you explore the top few feet of
the cave, you drop your disposable atomic flashlight, and can hear it bounce
against the sides of the cave for several seconds before striking the bottom. 
Slowly, in darkness, you lower yourself down the rope.  Wisely, you started at
noon, and the light is bright enough for you to see above you, though your
body blocks most of the light below.
  As you approach what you think is the bottom of the pit, your legs push
aside a clump of earth and suddenly you are hanging in empty space: the thin
vertical tunnel has widened.  As you turn awkwardly, you try to stop moving by
reaching a hand out to touch the side of the tunnel, only to suddenly lose
your grip with the other hand.  You grab for the rope, but gain only rope
burns as you feel the end of the rope slip from your fingers, hardly slowing
your fall.
  Luckily, you were only about fifteen feet from the bottom of the pit.  Of
course, "only" is a relative term: in this case, it means you'll suffer from
extreme pain and bruises, not broken bones.
  It takes you only a minute to realize that the sides of the pit are too
steep and muddy to climb; the rope is dimly visible twenty feet above.  By
feeling the side of the pit, you can make out some sort of wooden or plastic
door to the west.  Despite the pain you still feel from the fall, you manage
to kick the door open, leading to a dark room.
 
You are in a deep pit.  Climbing back up is simply impossible: the side of the
pit is far too steep and is too slippery to grip.  Through a shattered wooden
door, you can faintly make out an exit to the west.
   There is a iron crowbar here.
   There is a disposable atomic flashlight here.

What Now? GET THE FLASHLIGHT AND THEN SWITCH IT ON
          ^
          |
          Note: Throughout this example, the player's input is shown in all   
                capital letters. 

You are now carrying the atomic flashlight.
The flashlight it now on.

What Now? GET CROWBAR THEN EXAMINE IT

You are now carrying the iron crowbar.
The iron crowbar is about three feet long and weighs about eight pounds.
It might be useful as a weapon or as a tool, depending on the circumstances.

What Now? WEST

You are in a small, dimly-lit room.  Empty shelves line the wall; this must
have been a storage room of some sort.  A broken plastic door leads east, back
to the pit you fell into.  Another open door leads west.
   There is a large wooden crate here.
   There is a small laser-powered handgun here.
   There is a grey wolf here, snarling and growling at you.

What Now? GET THE LASER; SHOOT IT AT WOLF

You are now carrying the laser gun.
You aim the gun at the wolf and pull the trigger.  It's a direct hit! The wolf
screeches angrily, and falls to the floor for a moment.  Then it leaps up and
eyes you quite angrily.  Though wounded, it seems no less dangerous or
hostile.
The wolf seems to be getting angrier!

What Now? EXAMINE WOLF

The wolf is grey, with a few white spots on its belly.  It is also quite
large, almost as tall as you are.  Its claws look sharp.  The wolf does not
look friendly; it growls and snarls, plainly upset that you have disturbed it.
The wolf seems to be getting angrier!

What Now? SHOOT WOLF WITH GUN

You aim the gun at the wolf and pull the trigger.  It's a direct hit! The wolf
screeches angrily, and falls to the floor for a moment.  Then it leaps up and
eyes you quite angrily.  Though wounded, it seems no less dangerous or
hostile.

The wolf seems to calm down for a moment, but suddenly attacks.  Its mouth
opens to reveal teeth grotesquely out of proportion to the rest of its body, a
fact you notice as those same teeth tear your flesh into tiny pieces.

Oh dear, you seem to have gotten yourself killed.

Would you like me to try to get you resurrected?....  YES

I'll try...but don't blame me if something goes wr@#%&&

                 ---- POOF ----

You are engulfed in a cloud of thick orange smoke, and you emerge coughing and
gasping, and find that you must start all over ...

You are in a deep pit.  Climbing back up is simply impossible: the side of the
pit is far too steep and is too slippery to grip.  Through a shattered wooden
door, you can faintly make out an exit to the west.

What Now? WEST

You are in a small, dimly-lit room.  Empty shelves line the wall; this must
have been a storage room of some sort.  A broken plastic door leads east, back
to the pit you fell into.  Another open door leads west.
   There is a large wooden crate here.
   There is a grey wolf here, snarling and growling at you.

What Now? THROW CROWBAR AT WOLF

The crowbar soars through the air toward the wolf.  It's a direct hit! The
wolf screeches angrily and writhes in agony as it fades away in a cloud of
green smoke.

What Now? GET CROWBAR

You are now carrying the iron crowbar.

What Now? EXAMINE THE CRATE

The crate is about eight feet long by six feet wide by six feet high.  It is
extremely heavy and quite solid.  There is lettering on the side.  It has a
lid nailed to its top.

What Now? READ LETTERING

The side of the crate says, "U.S.  Emergency Radiation Supplies.  Do Not
Open."

What Now? OPEN CRATE

You need to unlock it first.

What Now? PRY THE LID WITH THE CROWBAR

You have now unlocked the wooden crate, using the crowbar.

What Now? OPEN CRATE

The crate is now open.

What Now? EXAMINE IT

The crate is about eight feet long by six feet wide by six feet high.  It is
extremely heavy and quite solid.  There is lettering on the side.  It has a
lid nailed to its top.
   There is a huge solid metal cube here.  (in the crate)

What Now? EXAMINE THE CUBE

The huge metal cube may contain something, but you'd need a heck of a knife --
or a laser -- to cut into it.

What Now? FIRE LASER GUN AT CUBE

It would really make more sense to specify some living creature.  Hostility
really requires a target of some sort.

What Now? GET CUBE

You aren't strong enough to carry your current load plus the cube.

What Now? WEST

This is a large long corridor, leading north and south.  To the east, an open
door leads to a storage room of some kind.  A door to the west is securely
locked.  The flashlight flickers on and off and finally goes out completely. 
However, the iron bar gives off a strange orange glow in this room, lighting
up what would otherwise be a very dark place.

What Now? OPEN DOOR

You try your best, but the door won't open!

What Now? NORTH

This is the north end of a long corridor.  An open doorway leads east; an arch
leads north.  The flashlight flickers on and off, but finally stays on.       
 Over the arch is a sign.

What Now? READ SIGN

"Enlisted Personnel Only.  No Visitors."

What Now? EAST

This is another storage room.  The shelves on the walls are empty.  The only
exit leads west.  The flashlight flickers on and off, but finally stays on.
   There is a hideous mutant here.  It is hissing and cursing at you.

What Now? INSPECT MUTANT

The mutant is really ugly!  It looks like it was once a man, but it is
horribly disfigured and has open sores covering most of its body.  It is very
nervous and angry at you for disturbing its lair.

What Now? TALK TO THE MUTANT

The mutant just listens to you, but remains strangely silent.
The mutant seems to be getting angrier!

What Now? KILL MUTANT WITH CROWBAR

The crowbar soars through the air toward the mutant.  It's a direct hit!
Unfortunately, the crowbar merely bounces off the mutant's head, and appears
to make it quite angry.
The mutant seems to be getting angrier!

What Now? FIRE LASER AT MUTANT

You aim the gun at the mutant and pull the trigger.  It's a direct hit! The
mutant screeches angrily and writhes in agony as it fades away in a cloud of
green smoke.

What Now? WEST

This is the north end of a long corridor.  An open doorway leads east; an arch
leads north.  The flashlight flickers on and off, but finally stays on.
   Over the arch is a sign.

What Now? NORTH

This is a small entry hall.  An arch leads south to a corridor; smaller arches
lead east and west.  Another passage goes north.
   There is a metal desk near the door.
     There is a small drawer.  (in the desk)

What Now? LOOK AT DRAWER

The drawer looks like most drawers.

What Now? OPEN DRAWER

The metal drawer is now open.
What Now? EXAMINE DESK

This is a rather ordinary metal desk with a single metal drawer.
   There is a small drawer.  (in the desk)
     There is a small plastic key here.  (in the drawer)

What Now? GET THE KEY AND EXAMINE IT

You are now carrying the plastic key.
The plastic key is like most keys you've seen.  It is cylindrical and has many
tiny holes through it; optical sensors in the correct lock will respond to it
by opening a door or doing whatever it is the key is meant to do.

What Now? EAST

Something terrible has happened here, probably a cave-in.  The walls have
collapsed, and all exits are blocked except the door to the west through which
you entered.  Dirt and mud cover much of the floor.
   There is a small, square, electronic module here.

What Now? GET MODULE AND EXAMINE IT

You are now carrying the rt module.
This is a standard-design RT-584 module.  Like all RT-584s, it is the
functional equivalent of a complete supercomputer with gigabytes of storage
and a knowledge base of some sort.  All you need to do is plug it into an
RT-934 console and push it to access its information.

What Now? EAT THE MODULE

Eat the module?  You must be kidding!

What Now? WEST

This is a small entry hall.  An arch leads south to a corridor; smaller arches
lead east and west.  Another passage goes north.  There is a metal desk near
the door.
   There is a small drawer.  (in the desk)

What Now? SOUTH

This is the north end of a long corridor.  An open doorway leads east; an arch
leads north.  The flashlight flickers on and off, but finally stays on.     
Over the arch is a sign.

What Now? SOUTH

For some reason, you can't see anything here.

What Now? NORTH

This is the north end of a long corridor.  An open doorway leads east; an arch
leads north.  The flashlight flickers on and off, but finally stays on.     
Over the arch is a sign.

What Now? EAST

This is another storage room.  The shelves on the walls are empty.  The only
exit leads west.  The flashlight flickers on and off, but finally stays on.   
  There is an iron crowbar here.

What Now? GET CROWBAR

You are now carrying the iron crowbar.

What Now? WEST

This is the north end of a long corridor.  An open doorway leads east; an arch
leads north.  The flashlight flickers on and off, but finally stays on.     
Over the arch is a sign.

What Now? SOUTH

This is a large long corridor, leading north and south.  To the east, an open
door leads to a storage room of some kind.  A door to the west is securely
locked.  The flashlight flickers on and off and finally goes out completely. 
However, the iron bar gives off a strange orange glow in this room, lighting
up what would otherwise be a very dark place.

What Now? INVENTORY

You are carrying the following:
  iron crowbar
  plastic key
  rt module
  atomic flashlight
  laser gun

What Now? UNLOCK DOOR WITH KEY

Nice try, but you can't seem to unlock the door.

What Now? SOUTH

This is the south end of a long north-south corridor.  You see a large red
triangle painted on the wall next to a doorway to the south.  The flashlight
flickers on and off, but finally stays on.

What Now? SOUTH

This is an elevator car, with an electroluminescent control panel.  The
turbo-thrusters hum quietly beneath your feet, ready to rush you to your
destination.
   There is a blue square visible on the control console.

What Now? EXAMINE SQUARE

The blue square is an image on the touchscreen of the elevator command
console.  The command console is intended to be useful to anyone who can
recognize simple graphic icons, even if they don't speak English.

What Now? PUSH SQUARE

As soon as your finger touches the blue square image on the control panel, the
doors slide shut and you are slammed violently against the west wall as the
car begins moving sideways, toward the east.  Just as you get used to that
motion, the car begins dropping, then seems to be both dropping and moving to
the south.  Panicked, you poke at the control panel, but nothing is displayed
on it and it rudely ignores your whimpering.
   After a few minutes, the car's motion settles into a southeast direction,
and seems to stop dropping.  There's no way to tell how fast -- or far -- the
car is traveling.
   As suddenly as it started, the car brakes, cuts to the west, and stops.  To
your surprise and confusion, the door opens behind you, to the south.  This is
an elevator car, with an electroluminescent control panel.  The
turbo-thrusters hum quietly beneath your feet, ready to rush you to your
destination.
   There is a red triangle visible on the control console.

What Now? SOUTH

You are on a platform outside the hatch leading into a space shuttle.  The
shuttle hatch is open to the south.  An elevator is to the north.

What Now? ENTER SHUTTLE

This is the bridge, the command hub of the shuttle.  The only visible exit is
to the north.  Like most space vehicles, this one runs almost entirely
automatically, with all flight parameters pre-programmed.  There is a command
console here, but it is dark.  Mounted just below it is a small keyhole.  It
is currently set to 'off.'

What Now? TURN KEY

As you turn the key in the keyhole, you feel a surge as the ion drives prepare
for a long-awaited takeoff.  The whole ship begins to rumble and shake as the
overhead bay doors are opened by huge motors built into the hillside, and you
hear and feel vibrations as debris from above bounces off the shuttle.
    Out of fear, you reach to turn the key off, but it twists and breaks in
the lock.  The engines surge more violently, and you are slammed against the
floor as the shuttle begins to rise into the air.
    Instantly, you realize that the bay doors have failed, because you can
feel the shuttle collide with something as it ascends.  The computer corrects
for the damage somehow and the shuttle continues to rise, but is vibrating
violently.  The ion drives begin to squeal abnormally, and you realize that
the shuttle cannot possibly remain in one piece for more than a few minutes.
    As if expecting your panic, a wall panel suddenly slides to one side,
revealing an escape pod.

This is the bridge.  The exit to the north has been damaged by the vibrations
and is twisted into an impossible position.  An escape pod is visible to the
west.

What Now? WEST

You are now in the escape pod.  As you sit in the command couch, the door
slides shut behind you and you feel the pod automatically ejecting from the
shuttle.  Not surprisingly, it hits something on the way out, and spins out of
control for a moment before its thrusters regain control.  You can hear the
wind rushing by, and then the sound of an explosion -- very near by -- drowns
out all other sounds.  The escape pod rises for a few minutes, then begins to
move horizontally.  It's hard to tell what is happening, but it's certainly
not as bad as what was happening just a few seconds ago.
    Directly before you is an extremely simple manual console with a small
socket, above which are instructions which say "insert command module here."

What Now? INSERT MODULE

As you insert the RT-584 module, it exerts some sort of magnetic force which
pulls it from your fingers and snugly into the RT-500 socket.  The escape pod
changes direction and velocity -- almost seeming to stop for a moment -- and
then accelerates again toward some unknown destination.  After a few minutes,
you feel the pod turning and then decelerating and descending.  Before you
expected it, the pod touches down roughly, causing you to bump your head
against the side of the pod.  The pod's engines begin whining as they reduce
power.  The door suddenly clicks and swings open, revealing bright sunlight
outside.  Once the door is locked open, the pod's engines shut down
completely, leaving you in complete silence.
You are in the escape pod, which is not moving.  An open door leads east.

What Now? EAST

You emerge from the pod to find the sun shinning brightly.  The air is fresh
and clean and smells like spring flowers.  For the first time in a long while,
you feel good about being alive.

*** Congratulations.  You have won the game.  ***

You have seen 16 rooms (out of 17), in 60 turns.
Your score is 15 out of a possible 15 points.
(The game was saved 0 times and restored 0 Times.)
3 -- INTRODUCTION TO AGT'S METALANGUAGE FOR CREATING PROFESSIONAL LEVEL GAMES


The Adventure Game Toolkit comes with a number of complete, ready-to-play
adventure games including an AGT version of the "Colossal Cave" (sometimes
called the "Original Adventure") by Woods and Crowther.  The AGT version of
this classic game has over 140 locations, a vocabulary of about 500 words, and
is comparable in quality and playability to professional games from firms like
Infocom.  The complete source code for this classic game is included as part
of the basic AGT package.  The AGT version of the "Colossal Cave" is a
Professional Level game that makes use of AGT's unique English-like
metalanguage -- developed especially for writing adventure games.

Metalanguage commands consist of various conditional tests and actions to be
executed.  These commands are very English-like and easy to understand.  For
example, below are a few typical conditional tests:

    Sample Conditions        Explanation
    -----------------        -----------
    NOT AtLocation 5         Tests if player is NOT in Room 5
    IsOpen 208               Tests if Noun 208 is currently open
    Present 210              Tests if Noun 210 is currently nearby
    NOT Present 210          Tests if Noun 210 is NOT currently nearby
    TurnsGT 25               Tests if game has lasted more than 25 turns
    Chance 10                Test has a 10% chance of being TRUE
    VerbIsDirection          Tests if player is trying to leave Room
    ScoreLT 20               Tests if player's score is less than 20 points
    CounterEquals 4 100      Tests if Counter number 4 equals 100
    IsCarrying 203           Tests if player is carrying Noun 203
    OR                         OR
    IsCarrying 204             is carrying Noun 204
    NamePresent              Tests that command's Addressee is nearby
    RoomNeedsLight           Tests if current Room needs a light

There are a total of 84 separate meta-command conditional tests.  Since each
may be prefaced by a NOT, there are actually a total of 168 conditional tests
in the AGT metalanguage.  These tests may be connected by multiple "OR's" to
create compound conditional tests.

In addition to conditions, there are 71 metalanguage action codes or tokens. 
For example:

    Sample Actions           Explanation
    --------------           -----------
    GoToRoom 23              Sends the player to Room 23
    PutInCurrentRoom 205     Puts Noun 205 in current Room
    PrintMessage 47          Prints message number 47 from .MSG file
    LockNOUN                 Lock the current NOUN
    SwapLocations 206 207    Swap the locations of Nouns 206 and 207
    PlusScore 10             Add 10 points to player's score
    KillPlayer               Kill player at end of current turn
    SendToRoom 225 57        Send Noun 225 to Room 57
    DestroyNOUN              Destroy current NOUN (sends it to Room zero)
    DescribeThing 310        Prints the description of Creature 310
    TurnCounterON 4          Starts Counter number 4 counting at 1
    ChangePassageway 1 35    Creates a passage: North(1) to Room 35
    ChangePassageway 1 0     Closes the passage in direction 1 (North)


META-COMMAND EXAMPLES

Here are a few typical examples of AGT metalanguage commands.  The following
meta-commands would allow the adventure game player to CLIMB a TREE and to
CROSS a BRIDGE during a game: 

  COMMAND CLIMB TREE 
    InRoom 208 (* The sturdy oak tree is in the room *) 
    OR
    AtLocation 23 (* a location in the forest *)
    OR
    AtLocation 47 (* a location in the forest *)
    OR
    AtLocation 82 (* a location in the forest *)
    GoToRoom 36 (* Go to branches at top of oak tree *) 
    PrintMessage 43 (* You climb up to the top of the tree. *) 
    DoneWithTurn 
  END_COMMAND 
 
  COMMAND CROSS BRIDGE 
    AtLocation 23 (* At West side of bridge *) 
    GoToRoom 24 (* Go to East side of bridge *) 
    PrintMessage 44 (* You walk across the bridge to the other side. *) 
    DoneWithTurn 
  END_COMMAND 
 
  COMMAND CROSS BRIDGE 
    AtLocation 24 (* At East side of bridge *) 
    GoToRoom 23 (* Go to West side of bridge *) 
    PrintMessage 44 (* You walk across the bridge to the other side. *) 
    DoneWithTurn 
  END_COMMAND 
 
The words within the "(*" and "*)" are comments; they are not actually part of
the meta-command itself.  The messages referred to in the "PrintMessage"
actions above would be contained in a separate message file.

Here is another example, where meta-commands are set up to create the proper
game response whenever the player inputs a command to KISS something: 
 
  COMMAND KISS PRINCESS 
    InRoom 305 (* Princess is here *) 
    AtLocation 99 (* In Bridal Suite of palace *) 
    PrintMessage 45 (* The princess melts into your strong arms, etc. *) 
    PlusScore 25 (* Bonus for Kiss *) 
    WinGame (* Win the game *) 
    DoneWithTurn 
  END_COMMAND 
 
  COMMAND KISS PRINCESS 
    InRoom 305 (* Princess is here *) 
    NOT AtLocation 99 (* Not in the Bridal Suite of palace *) 
    PrintMessage 46 (* The princess pushes you away coyly, "Not here!" *) 
    DoneWithTurn 
  END_COMMAND 
 
  COMMAND KISS TROLL 
    InRoom 307 (* Ugly Troll is here *) 
    PrintMessage 47 (* The troll kills you! *) 
    KillPlayer (* That will teach you to KISS THE TROLL!! *) 
    DoneWithTurn 
  END_COMMAND 
 
  COMMAND KISS ANY 
    NOUNpresent (* NOUN (whatever it is) is here *) 
    PrintMessage 48 (* You try to $VERB$ the $ADJECTIVE$ $NOUN$ for awhile. *)
    MinusScore 10 (* penalty for sick mind *) 
    DoneWithTurn 
  END_COMMAND 
 
  COMMAND KISS ANY 
    PrintMessage 49 (* The $ADJECTIVE$ $NOUN$ isn't here! *) 
    MinusScore 10 (* penalty for sick mind *) 
    DoneWithTurn 
  END_COMMAND 
 
Meta-commands are processed in the order encountered -- so the last two "KISS
ANY" meta-commands above represent "default" commands and would be activated
only if you weren't trying to KISS the PRINCESS or the TROLL.  For example, if
you gave the input "KISS THE BLARNEY STONE", the game would respond with "You
try to kiss the blarney stone for a while" (Message number 48 in the message
file) or "The blarney stone isn't here!" (Message number 49) depending upon if
the Blarney stone is present at your current location or not.

Meta-commands can also be used for "random events", such as, (1) having a
dwarf appear in the room and throw an axe at the player, or (2) having a bear
(that the player has befriended) follow him into a new room, or (3) having a
voice boom out an announcement that "The Cave will close in 25 turns", or (4)
having the player die because of some random event (e.g., falling into a pit).

 
Below are a few examples of typical "random event" meta-commands.  These meta-
commands will be tested for ANY player input and if the conditions are
satisfied, the meta-command's actions will be taken. 
  COMMAND ANY 
   Present 210 (* Blazing torch is here *) 
   CounterGT 2 75 (* Torch has been lit for at least 75 turns *) 
   PrintMessage 21 (* Your torch is flickering and growing weaker *) 
   CounterEquals 2 100 (* Torch has been lit for 100 turns *) 
   PrintMessage 22 (* The torch finally goes out! *) 
   TurnCounterOFF 2 (* Torch has gone out, so turn torch counter OFF *) 
   SwapLocations 210 211 (* swap blazing torch for unlit torch *) 
  END_COMMAND 
 
  COMMAND ANY 
   NOT Present 312 (* Angry guard is NOT in room (yet) *) 
   Chance 10 (* 10 % chance of guard appearing *) 
   PutInCurrentRoom 312 (* put guard in room *) 
   PrintMessage 23 (* An angry guard suddenly storms into the room! *) 
  END_COMMAND 
 
  COMMAND ANY 
   FlagON 5 (* Flag 5 is ON if player has befriended parrot *) 
   PutInCurrentRoom 306 (* Once befriended, parrot stays with player *) 
   VerbIsDirection (* Player is going to new room *) 
   PrintMessage 24 (* The parrot flies after you and lands nearby. *) 
  END_COMMAND 

  COMMAND ANY 
   InRoom 306 (* The parrot is here *) 
   FlagOFF 4 (* Parrot is thirsty if Flag 4 is OFF *) 
   Chance 5 (* 5 % chance of parrot talking *) 
   PrintMessage 25 (* The parrot squawks "Polly wants a beer!" *) 
  END_COMMAND 
 
  COMMAND ANY 
   InRoom 308 (* A vampire bat is here *) 
   Chance 5 (* 5 % chance of being bitten *) 
   PrintMessage 26 (* The vampire bat bites you on the neck!! *) 
   KillPlayer (* Too bad, but vampire bat bites are fatal! *) 
   DoneWithTurn (* No further process for this turn *) 
  END_COMMAND 
4 -- HOW TO GET A COPY OF THE ADVENTURE GAME TOOLKIT

The Adventure Game Toolkit (AGT) is distributed as "Shareware".  Copies can be
found on many electronic bulletin boards and time-sharing services including
Genie, CompuServe and BIX.  AGT is also available by mail directly from the
authors at:

             Softworks 
             43064 Via Moraga 
             Mission San Jose, California  94539 
 
You can also order by phone using your Mastercard or VISA to (415) 659-0533,
9:00 AM to 6:00 PM, PST ONLY.
 
The price list for various versions/options of AGT is as follows: 

1.  AGT Registration ................................. @ $ 20.00 ea  $ ______
    includes: (1) Notice of all future AGT upgrades, new AGT Adventures
    and related AGT products.  (2) Latest version of the program, sample
    Adventure game source files (CAVE, CRUSADE, UNDERGND, ALICE and
    others), and summary documentation on disk.  Over one megabyte of
    program and data files -- ARCed on two disks. (3) Telephone support
    from 7:00 to 9:00 PST (M-F).  (4) A warm glow from having supported
    at least one of the many Shareware products you probably use.
    (5) The AGT authors' eternal gratitude.

2.  Above with printed AGT manual .................... @ $ 35.00 ea  $ ______
    includes: Above items plus printed manual about 200 pages long with
    numerous detailed examples on how to use the Adventure Game Toolkit
    to create very professional and very clever Adventure games.
    The printed AGT manual has approximately twice the amount of
    information as contained in the summary disk documentation.

3.  Printed AGT manual (Only) ........................ @ $ 20.00 ea  $ ______

4.  UPGRADE to the newest AGT version (Only) ......... @ $ 12.00 ea  $ ______
    includes: Latest version of the program, sample Adventure game
    source files (CAVE, CRUSADE, UNDERGND, ALICE and others), and
    summary documentation on disk.  Over one megabyte of program and
    data files -- ARCed on two disks.

5.   AGT Turbo Pascal source code ..................... @ $ 50.00 ea  $ ______
    includes: Pascal source code (Atari ST, IBM or Mac) for AGT's
    COMPILE and RUN programs.  Over 13,000 lines of Turbo Pascal
    source code (be sure to specify IBM, Atari ST or Macintosh Pascal).
    YOU MUST BE A REGISTERED AGT USER TO ORDER THE SOURCE CODE!

    Orders are normally shipped by US mail at no additional charge.

    For UPS shipment, please add $4.00..................@ $ 4.00 ea  $ ______

    For shipments outside the United States, please add @ $ 8.00 ea  $ ______

                                                    Subtotal           ______

    (California residents please add 7% sales tax)             Tax     ______

                              U.S. Funds Only, Please!! ---->  Total $ ______

Payment by:    ( ) Check    ( ) MasterCard    ( ) VISA    ( ) Cash


   Name: ____________________________________________________________

Company: ____________________________________________________________

Address: ____________________________________________________________

       : ____________________________________________________________

  State: ___________________________ Zip:____________________________

Day Phone: _________________________ Eve: ___________________________

 Card #: _________________________________ Exp. Date: _______________

Signature of cardholder: ____________________________________________

Version desired: ______ Atari St  ______ Macintosh

                 ______ IBM 5 1/4  ______ IBM 3 1/2

```
{% endraw %}

## CONTEST.TXT

{% raw %}
```


                         SOFTWORKS ANNOUNCES WINNERS
                IN THIRD ANNUAL ADVENTURE GAME WRITING CONTEST


     We spent our days searching for the Holy Grail and our nights fighting
     "Big Bubba."   We rose again to hunt for Easter eggs, crash an F-16 at
     Mach 2, and fry up some chicken gizzards.  We constructed a bird house,
     cast and dodged an evil spell or two, and ended up playing the part of a
     frightened Thespian in a haunted theater.  After these diverse and
     thoroughly exilerating experiences, our valient judges (dazed, exhausted,
     but never played-out!) announce with pleasure the winner(s) of the third
     annual Adventure Game Toolkit (AGT) Adventure Game Writing Contest.

     Gentlemen, the envelope, please!

     ......And the First Prize ($100) winner for the 1989 contest is:

     SON OF STAGEFRIGHT -- By Mike McCauley.  In this game, you play the role
     of an actor (or actress) trying to get out of an old, abandoned theater.
     This is an adventure game in three "Acts", where each Act has a different
     theme and a different challenge.  This award winning adventure is fun(ny),
     frightening and very clever.

     Mike is an engineer with Aetna Insurance in Southern California.  He has
     been involved in community theater for a number of years and the
     physical layout of the game is based on a real theater that Mike has
     spent many hours exploring.  SON OF STAGEFRIGHT is a sequel to
     STAGEFRIGHT, a game of Mike's that was commercially published for the
     Coleco ADAM computer.  He is currently hard at work on his second AGT
     game which has a Christmas theme.  Mike hopes to finish his next game in
     time for Adventure players to enjoy it this Christmas and in time to
     enter the game in the 1990 (fourth annual) AGT game writing contest.

     Mike said that the Adventure Game Toolkit (AGT) made writing SON OF
     STAGEFRIGHT both easy and fun.  His advice to other AGT game writers is:
     "Get started!  Get wild!  Use beta testors extensively!  And comment your
     source code!"


     In addition to SON OF STAGEFRIGHT, the contest had a number of other
     excellent entries.  Among them, the judges have singled out the very best
     adventures as deserving an "Honorable Mention."  These winning entries
     include (in alphabetical order):

     EASTER EGG HUNT -- By Tom and Ginnie Reynolds.  A game aimed at and
     suitable for children ages 7-12.  It contains no killing, monsters, or
     anything scarey.  Easy for adults but challenging for children.  This is
     a very special and delightful game!

     FAST LANE -- By Richard Baribault.  In this game you attempt, against
     much adversity, to find, enter, and win a Classic Car Show.  You must
     overcome obstructive family members, odd creatures, criminals (including
     "Big Bubba"), the law, and other assorted trials and difficulties.  A
     very well done game with an ususal theme.

     HOUSE OF THE O's -- By Wally O. and Pete D.  This game is unique among
     adventure games -- it has no dragons or spaceships, no magic potions or
     trapdoors.  The game is based on the ordinary activites of an ordinary
     family living in an ordinary house in Mosquito Heights, New Jersey.  A
     game filled with subtle humor.

     PORK II -- THE GIZZARD OF SHOWBIZ -- By Bill Larkins.  This game is a
     parody of Infocom's ZORK II.  The game features a LEWD mode (not
     recommended for youngsters) as well as a TAME mode.  A test must be passed
     to get in the LEWD mode.  If you enjoyed PORK I, you should welcome this
     clever sequel.

     PYRAMID OF MUNA -- By Alfred W. King II.  In this game, the player
     explores an ancient Mexican pyramid and attempts to discover its
     metaphysical secrets.  An adventure based on the "Elements of the
     Cosmology of The Builders".  An exotic implementation of a classic
     adventure theme.

     QUEST FOR THE HOLY GRAIL -- By Mike Detlefsen.  A zany, madcap
     adventure, loosely (very loosely) based on the movie "Monty Python and
     the Holy Grail".  If you liked the movie and/or ehjoy the comedy of
     Monty Python, you will love this game.

     SIR RAMIC HOBBS AND THE HIGH LEVEL GORILLA -- By Gil Williamson.  The
     adventures of a Knight Errant and his faithful companion, the Wizard
     Prang, as they seek to rescue a beautiful Princess from a fiendish
     villian's evil grasp.  Reminiscent of Don Quixote, wryly retold with a
     delightfully British sense of humo(u)r.

     THE BATTLE OF PHILIP AGAINST THE FORCES OF CREATION -- By Peter Arnold
     and Anne Ungar.  This game is based on a "Dungeons and Dragons" theme.
     The game was written as a continuation of and a response to TARK, one of
     the winning games from last year's contest.  A very well written
     adventure.  Especially enjoyable if you are a "Dnd" fan.

     THE PILOT -- OR A FLIGHT INTO FANTASY -- By A. G. Jackson.  This game is
     action-packed from its opening scene that has you trying to escape from a
     jet that is hurtling towards the ground at Mach 2 to the game's final
     scenes where you are exploring a mysterious cave beneath the polar ice
     cap.

     All of the winning games are available from Softworks, the publisher of
     the Adventure Game Toolkit, in a special 2-disk set of files called "The
     Best of the Contest - 1989".  These disks contain over a mega-byte of AGT
     source code.  These disks are available for $12 from:

         Softworks
         43064 Via Moraga
         Mission San Jose, California  94539
         (415) 659-0533 (12:00 Noon to 8:00 PM  -- PST)

     VISA and MasterCard orders can be made by phone.  All orders should
     specify which disk format is desired: Macintosh, Atari ST, IBM 5 1/4 or
     IBM 3 1/2.

     Order "The Best of the Contest - 1989" disks today, and let yourself in
     on some of the best adventure gaming in years!

IMPORTANT NOTE: Because these disks contain the source code to the games, you
will need the Adventure Game Toolkit (AGT) in order to compile and play the
games.  AGT is available separately for a $20 registration fee or for $35 for
a registered copy plus a 200 page printed manual (which reveals some of the
secrets of the great adventure game writers).

```
{% endraw %}

## FILE2299.TXT

{% raw %}
```
Disk No: 2299                                                           
Disk Title: Son of Stagefright                                          
PC-SIG Version: S1                                                      
                                                                        
Program Title: Son of Stagefright                                       
Author Version: 1.0                                                     
Author Registration: $10.00                                             
Special Requirements: 384K RAM.                                         
                                                                        
This is text adventure game with a theatrical twist.  Things just aren't
going right for you. For starters, you're locked inside an old abandoned
theater. The little voice inside you is telling you: YOU HAVE TO GET OUT
OF HERE! As you try to get out, you'll encounter creaky catwalks, raging
rivers, mini mazes, rogues, rats and a zoo keeper. You'll also endure   
puns, perils, pratfalls, word play, bad jokes, and some mild innuendo.  
                                                                        
This game was written using the Adventure Game Toolkit (PC-SIG Disk #   
1231,1232) and was the winner of the text adventure contest produced by 
the authors.                                                            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2299

     Volume in drive A has no label
     Directory of A:\

    AGTBLURB TXT     37477  11-21-89   3:35a
    CONTEST  TXT      6471  11-21-89   3:48a
    ORDERFRM AGT      4310  11-21-89   3:36a
    RUNSMALL EXE     53088   6-30-89   4:59p
    SOS      BAT        33  11-21-89  12:03a
    SOS      D$$    116640  11-20-89  11:43p
    SOS      DA1     14440  11-20-89  11:44p
    SOS      DA2     20358  11-20-89  11:44p
    SOS      DA3     26800  11-20-89  11:44p
    SOS      DA4      5928  11-20-89  11:44p
    SOS      DA5     52138  11-20-89  11:44p
    SOS      INS      3064  12-30-89   9:55a
    SOS      TTL       723  10-09-89   5:22p
    RUNME!   BAT        33  11-21-89   3:54a
    GO       BAT        40   1-01-80   6:00a
    GO       TXT       881   7-18-90   5:38a
    FILE2299 TXT      1851   7-18-90   2:05p
           17 file(s)     344275 bytes
                           10240 bytes free
