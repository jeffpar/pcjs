---
layout: page
title: "PC-SIG Diskette Library (Disk #3670)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3670/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3670"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                   <<<<  PC-SIG Disk #3570 NETHACK  >>>>                 ║
║                       Disk 2 of 2 (also disk #1000)                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║  To install this game to your hard disk, type:                          ║
║     [hard drive letter]:  (press Enter)                                 ║
║     CD\  (press Enter)                                                  ║
║     MD NETHACK  (press Enter)                                           ║
║     CD NETHACK  (press Enter)                                           ║
║                                                                         ║
║  To extract the files from drive A, insert disk 2 (#1000) and type:     ║
║     A:PKUNZIP A:NETHACK  (press Enter)                                  ║
║     (if installing from drive B use B: in place of A:)                  ║
║                                                                         ║
║  Before running, check your CONFIG.SYS file and make sure ANSI.SYS or   ║
║  NANSI.SYS is installed as a device on your system.  You may also have  ║
║  to modify the NETHACK.CNF file for your system.                        ║
║                                                                         ║
║  To start the game, type:  NETHACK  (press Enter)                       ║
║                                                                         ║
║ (C) Copyright 1993 PC-SIG Inc. 1030D East Duane Ave. Sunnyvale CA 94086 ║
║     For inquiries call: (408) 730-9291  For orders call: (800) 245-6717 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GUIDEBOO.TXT

{% raw %}
```










                           A Guide to the Mazes of Menace


                                   Eric S. Raymond
            (Extensively edited and expanded for 3.1 by Mike Threepoint)
                                 Thyrsus Enterprises
                                  Malvern, PA 19355



          1.  Introduction

               You have just finished your years as a student at the  local
          adventurer's  guild.   After much practice and sweat you have fi-
          nally completed your training and are  ready  to  embark  upon  a
          perilous  adventure.   To prove your worthiness, the local guild-
          masters have sent you into the Mazes of Menace.  Your quest is to
          return  with the Amulet of Yendor.  According to legend, the gods
          will grant immortality to the one  who  recovers  this  artifact;
          true or not, its recovery will bring honor and full guild member-
          ship (not to mention the attentions of certain wealthy wizards).

               Your abilities and strengths for dealing with the hazards of
          adventure will vary with your background and training.

               Archeologists understand dungeons pretty well; this  enables
          them to move quickly and sneak up on dungeon nasties.  They start
          equipped with proper tools for a scientific expedition.

               Barbarians are warriors out of the hinterland,  hardened  to
          battle.   They  begin  their  quests  with  naught  but  uncommon
          strength, a trusty hauberk, and a great two-handed sword.

               Cavemen and Cavewomen start with  exceptional  strength  and
          neolithic weapons.

               Elves are agile, quick, and sensitive; very little  of  what
          goes  on  will escape an Elf.  The quality of Elven craftsmanship
          often gives them an advantage in arms and armor.

               Healers are wise in medicine and the apothecary.  They  know
          the  herbs  and  simples  that  can  restore vitality, ease pain,
          anesthetize, and neutralize poisons; and with their  instruments,
          they  can  divine  a  being's state of health or sickness.  Their
          medical practice earns them quite reasonable  amounts  of  money,
          which they enter the dungeon with.

               Knights are distinguished  from  the  common  skirmisher  by
          their  devotion  to  the ideals of chivalry and by the surpassing
          excellence of their armor.


          NetHack Guidebook                                               1






          NetHack Guidebook                                               2


               Priests and Priestesses are clerics militant, crusaders  ad-
          vancing  the  cause  of  righteousness with arms, armor, and arts
          thaumaturgic.  Their ability to commune with deities  via  prayer
          occasionally  extricates them from peril-but can also put them in
          it.

               Rogues are agile and stealthy thieves,  who  carry  daggers,
          lock picks, and poisons to put on darts.

               Samurai are the elite warriors of feudal Nippon.   They  are
          lightly  armored  and  quick, and wear the dai-sho, two swords of
          the deadliest keenness.

               Tourists start out with lots of gold (suitable for  shopping
          with),  a  credit card, lots of food, some maps, and an expensive
          camera.  Most monsters don't like being photographed.

               Valkyries are hardy warrior women.  Their upbringing in  the
          harsh Northlands makes them strong and inures them to extremes of
          cold, and instills in them stealth and cunning.

               Wizards start out with a fair selection of  magical  goodies
          and a particular affinity for dweomercraft.

               You set out for  the  dungeon  and  after  several  days  of
          uneventful  travel,  you  see the ancient ruins that mark the en-
          trance to the Mazes of Menace.  It is late at night, so you  make
          camp  at the entrance and spend the night sleeping under the open
          skies.  In the morning, you gather your gear,  eat  what  may  be
          your last meal outside, and enter the dungeon.


          2.  What is going on here?

               You have just begun a game of NetHack.  Your goal is to grab
          as  much  treasure as you can, retrieve the Amulet of Yendor, and
          escape the Mazes of Menace alive.  On the screen is kept a map of
          where you have been and what you have seen on the current dungeon
          level; as you explore more of the level, it appears on the screen
          in front of you.

               When NetHack's ancestor rogue  first  appeared,  its  screen
          orientation  was  almost  unique  among  computer  fantasy games.
          Since then, screen orientation has become the  norm  rather  than
          the  exception;  NetHack  continues  this fine tradition.  Unlike
          text adventure games that input commands in  pseudo-English  sen-
          tences and explain the results in words, NetHack commands are all
          one or two keystrokes and the results are  displayed  graphically
          on  the  screen.  A minimum screen size of 24 lines by 80 columns
          is recommended; if the screen is larger,  only  a  21x80  section
          will be used for the map.

               NetHack generates a new dungeon every time you play it; even
          the  authors  still  find  it  an  entertaining and exciting game


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                               3


          despite having won several times.


          3.  What do all those things on the screen mean?

               In order to understand what is going on  in  NetHack,  first
          you  must  understand what NetHack is doing with the screen.  The
          NetHack screen replaces the ``You see...'' descriptions  of  text
          adventure  games.   Figure 1 is a sample of what a NetHack screen
          might look like.

          _______________________________________________________________________
           The bat bites!

               ------
               |....|    ----------
               |.<..|####...@...$.|
               |....-#   |...B....+
               |....|    |.d......|
               ------    -------|--



           Player the Rambler         St:12 Dx:7 Co:18 In:11 Wi:9 Ch:15  Neutral
           Dlvl:1 G:0  HP:9(12) Pw:3(3) AC:10 Xp:1/19 T:257 Weak
          _______________________________________________________________________
                                      Figure 1


          3.1.  The status lines (bottom)

               The bottom two lines of the screen contain  several  cryptic
          pieces  of information describing your current status.  If either
          status line becomes longer than the  width  of  the  screen,  you
          might not see all of it.  Here are explanations of what the vari-
          ous status items mean (though your configuration may not have all
          the status items listed below):

          Rank
               Your character's name and professional ranking (based on the
               experience level, see below).

          Strength
               A measure of your character's  strength,  one  of  your  six
               basic  attributes.   Your  attributes can range from 3 to 18
               inclusive (occasionally you may get super-strengths  of  the
               form  18/xx).   The  higher  your strength, the stronger you
               are.  Strength affects how successfully you perform physical
               tasks and how much damage you do in combat.

          Dexterity
               Dexterity affects your chances to hit in  combat,  to  avoid
               traps,  and do other tasks requiring agility or manipulation
               of objects.


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                               4


          Constitution
               Constitution affects your ability to  withstand  injury  and
               other strains on your stamina.

          Intelligence
               Intelligence affects your ability to cast spells.

          Wisdom
               Wisdom comes from your religious affairs.  It  affects  your
               magical energy.

          Charisma
               Charisma affects how certain creatures react toward you.  In
               particular, it can affect the prices shopkeepers offer you.

          Alignment
               Lawful, Neutral, or Chaotic.  Basically, Lawful is good  and
               Chaotic  is  evil.  Your alignment influences how other mon-
               sters react toward you.

          Dungeon Level
               How deep you have gone into the dungeon.  It starts  at  one
               and increases as you go deeper into the dungeon.  The Amulet
               of Yendor is reputed to be somewhere beneath  the  twentieth
               level.

          Gold
               The number of gold pieces you have.

          Hit Points
               Your current and maximum hit points.   Hit  points  indicate
               how  much  damage you can take before you die.  The more you
               get hit in a fight, the lower they get.  You can regain  hit
               points by resting.  The number in parentheses is the maximum
               number your hit points can reach.

          Power
               Spell points.  This tells you how much mystic energy  (mana)
               you  have available for spell casting.  When you type `+' to
               list your spells, each will have a spell point  cost  beside
               it  in  parentheses.   You will not see this if your dungeon
               has been set up without spells.

          Armor Class
               A measure of how effectively your armor stops blows from un-
               friendly  creatures.  The lower this number is, the more ef-
               fective the armor; it is quite possible to have negative ar-
               mor class.

          Experience
               Your current experience level and experience points.  As you
               adventure,  you  gain experience points.  At certain experi-
               ence point totals, you gain an experience level.   The  more
               experienced  you  are,  the  better  you fight and withstand


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                               5


               magical attacks.  Many dungeons show  only  your  experience
               level here.

          Time
               The number of turns elapsed so far, displayed  if  you  have
               the time option set.

          Hunger status
               Your current hunger status, ranging from  Satiated  down  to
               Fainting.   If  your  hunger  status  is  normal,  it is not
               displayed.

               Additional status flags may appear after the hunger  status:
          Conf  when  you're confused, Sick when sick, Blind when you can't
          see, Stun when stunned, and Hallu when hallucinating.

          3.2.  The message line (top)

               The top line of the screen is  reserved  for  messages  that
          describe  things  that  are impossible to represent visually.  If
          you see a ``--More--'' on the top line, this means  that  NetHack
          has  another  message  to  display on the screen, but it wants to
          make certain that you've read the one that is  there  first.   To
          read the next message, just press the space bar.

          3.3.  The map (rest of the screen)

               The rest of the screen is the map of the level as  you  have
          explored  it  so far.  Each symbol on the screen represents some-
          thing.  You can set the graphics option to  change  some  of  the
          symbols  the game uses; otherwise, the game will use default sym-
          bols.  Here is a list of what the default symbols mean:

          - and |
               The walls of a room, or an open door.

          .    The floor of a room, or a doorless doorway.

          #    A corridor, or possibly a kitchen  sink  or  drawbridge  (if
               your dungeon has sinks).

          <    A way to the previous level.

          >    A way to the next level.

          +    A closed door, or a spell book containing a  spell  you  can
               learn (if your dungeon has spell books).

          @    A human (you, usually).

          $    A pile of gold.

          ^    A trap (once you detect it).



          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                               6


          )    A weapon.

          [    A suit or piece of armor.

          %    A piece of food (not necessarily healthy).

          ?    A scroll.

          /    A wand.

          =    A ring.

          !    A potion.

          (    A useful item (pick-axe, key, lamp...).

          "    An amulet, or a spider web.

          *    A gem or rock (possibly valuable, possibly worthless).

          `    A boulder or statue.

          0    An iron ball.

          _    An altar, or an iron chain.

          }    A pool of water or moat or a pool of lava.

          {    A fountain (your dungeon may not have fountains).

          \    An opulent throne (your dungeon may  not  have  thrones  ei-
               ther).

          a-zA-Z and other symbols
               Letters and certain other symbols represent the various  in-
               habitants  of  the  Mazes of Menace.  Watch out, they can be
               nasty and vicious.  Sometimes, however, they can be helpful.

               You need not memorize all these symbols;  you  can  ask  the
          game  what  any  symbol  represents with the `/' command (see the
          Commands section for more info).


          4.  Commands

               Commands are given to NetHack by typing one or  two  charac-
          ters;  NetHack  then  asks questions to find out what it needs to
          know to do your bidding.

               For example, a common question, in the form  ``What  do  you
          want  to use? [a-zA-Z ?*]'', asks you to choose an object you are
          carrying.  Here, ``a-zA-Z'' are the  inventory  letters  of  your
          possible  choices.   Typing  `?'  gives  you an inventory list of
          these items, so you can see what each letter refers to.  In  this


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                               7


          example,  there  is  also a `*' indicating that you may choose an
          object not on the list, if you wanted to use something  unexpect-
          ed.  Typing a `*' lists your entire inventory, so you can see the
          inventory letters of every object you're carrying.   Finally,  if
          you change your mind and decide you don't want to do this command
          after all, you can press the ESC key to abort the command.

               You can put a number before most  commands  to  repeat  them
          that  many times; for example, ``10s'' will search ten times.  If
          you have the number_pad option set, you must type `n' to prefix a
          count,  so  the  example  above  would be typed ``n10s'' instead.
          Commands for which counts make no sense ignore  them.   In  addi-
          tion,  movement commands can be prefixed for greater control (see
          below).  To cancel a count or a prefix, press the ESC key.

               The list of commands is rather long, but it can be  read  at
          any  time during the game through the `?' command, which accesses
          a menu of helpful texts.  Here are the commands for  your  refer-
          ence:

          ?    Help menu:  display one of several help texts available.

          /    Tell what a symbol represents.  You may choose to specify  a
               location  or type a symbol (or even a whole word) to define.
               If the help option is on, and NetHack has some  special  in-
               formation  about  an  object  or monster that you looked at,
               you'll be asked if you want ``More info?''.  If help is off,
               then  you'll  only get the special information if you expli-
               citly ask for it by typing in the name of the monster or ob-
               ject.

          &    Tell what a command does.

          <    Go up a staircase to the previous level (if you are  on  the
               stairs).

          >    Go down a staircase to the next level (if  you  are  on  the
               stairs).

          [yuhjklbn]
               Go one step in the direction indicated (see Figure  2).   If
               there  is  a  monster  there, you will fight the monster in-
               stead.  Only these one-step movement commands cause  you  to
               fight monsters; the others (below) are ``safe.''

                               y  k  u            7  8  9
                                \ | /              \ | /
                               h- . -l            4- . -6
                                / | \              / | \
                               b  j  n            1  2  3
                                           (if number_pad is set)

                                         Figure 2



          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                               8


          [YUHJKLBN]
               Go in that direction until you hit a wall or run into  some-
               thing.

          m[yuhjklbn]
               Prefix:  move without picking up any objects.

          M[yuhjklbn]
               Prefix:  move far, no pickup.

          g[yuhjklbn]
               Prefix:  move until something interesting is found.

          G[yuhjklbn] or <CONTROL->[yuhjklbn]
               Prefix:  same as `g', but forking of corridors is  not  con-
               sidered interesting.

          .    Rest, do nothing for one turn.

          a    Apply (use) a tool (pick-axe, key, lamp...).

          A    Remove all armor.  Use `T' (take off) to take off  only  one
               piece of armor.

          ^A   Redo the previous command.

          c    Close a door.

          C    Call (name) an individual monster.

          ^C   Panic button.  Quit the game.

          d    Drop something.  Ex. ``d7a'' means drop seven items  of  ob-
               ject a.

          D    Drop several things.  In answer to the question ``What kinds
               of  things  do  you want to drop? [!%= au]'' you should type
               zero or more object symbols possibly followed by `a'  and/or
               `u'.

               Da  - drop all objects, without asking for confirmation.
               Du  - drop only unpaid objects (when in a shop).
               D%u - drop only unpaid food.

          ^D   Kick something (usually a door).

          e    Eat food.

          E    Engrave a message on the floor.  Engraving  the  word  ``El-
               bereth''  will  cause  most monsters to not attack you hand-
               to-hand (but if you attack, you will rub it  out);  this  is
               often useful to give yourself a breather.  (This feature may
               be compiled out of the  game,  so  your  version  might  not
               necessarily have it.)


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                               9


               E- - write in the dust with your fingers.

          i    List your inventory (everything you're carrying).

          I    List selected parts of your inventory.

               I* - list all gems in inventory;
               Iu - list all unpaid items;
               Ix - list all used up items that are on your shopping bill;
               I$ - count your money.

          o    Open a door.

          O    Set options.  You will be asked to enter an option line.  If
               you  enter  a  blank line, the current options are reported.
               Entering `?' will get you explanations of  the  various  op-
               tions.   Otherwise,  you  should  enter  a  list  of options
               separated by commas.  The available options are listed later
               in this Guidebook.  Options are usually set before the game,
               not with the `O' command; see the section on options below.

          p    Pay your shopping bill.

          P    Put on a ring.

          ^P   Repeat previous message (subsequent ^P's repeat earlier mes-
               sages).

          q    Quaff (drink) a potion.

          Q    Quit the game.

          r    Read a scroll or spell book.

          R    Remove a ring.

          ^R   Redraw the screen.

          s    Search for secret doors and traps around  you.   It  usually
               takes several tries to find something.

          S    Save the game.  The game will be restored automatically  the
               next time you play.

          t    Throw an object or shoot a projectile.

          T    Take off armor.

          ^T   Teleport, if you have the ability.

          v    Display version number.

          V    Display the game history.



          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              10


          w    Wield weapon.  w- means wield nothing, use your bare hands.

          W    Wear armor.

          x    List the spells you know (same as `+').

          X    Enter explore (discovery) mode.

          z    Zap a wand.

          Z    Zap (cast) a spell.

          ^Z   Suspend the game (UNIX(R) versions with job control only).

          :    Look at what is here.

          ,    Pick up some things.

          @    Toggle the pickup option on and off.

          ^    Ask for the type of a trap you found earlier.

          )    Tell what weapon you are wielding.

          [    Tell what armor you are wearing.

          =    Tell what rings you are wearing.

          "    Tell what amulet you are wearing.

          (    Tell what tools you are using.

          $    Count your gold pieces.

          +    List the spells you know (same as `x').

          \    Show what types of objects have been discovered.

          !    Escape to a shell.

          #    Perform an extended command.  As you can see, the authors of
               NetHack  used up all the letters, so this is a way to intro-
               duce the less useful commands, or commands used under limit-
               ed circumstances.  You may obtain a list of them by entering
               `?'.  What extended commands are available  depend  on  what
               features the game was compiled with.

               If your keyboard has a meta key (which, when pressed in com-
          bination  with  another  key,  modifies  it by setting the `meta'
          [8th, or `high'] bit), you can invoke the  extended  commands  by
          meta-ing  the  first  letter of the command.  In OS/2, PC, and ST

          __________
          (R)UNIX is a registered trademark of AT&T.


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              11


          NetHack, the `Alt' key can be used in this fashion.

          M-a  Adjust inventory letters (the fixinv option must  be  ``on''
               to do this).

          M-c  Talk to someone.

          M-d  Dip an object into something.

          M-f  Force a lock.

          M-i  Invoke an object's special powers.

          M-j  Jump to another location.

          M-l  Loot a box on the floor.

          M-m  Use a monster's special ability.

          M-n  Name an item or type of object.

          M-o  Offer a sacrifice to the gods.

          M-p  Pray to the gods for help.

          M-r  Rub a lamp.

          M-s  Sit down.

          M-t  Turn undead.

          M-u  Untrap something (usually a trapped object).

          M-v  Print compile time options for this version of NetHack.

          M-w  Wipe off your face.

               If the number_pad option is on, some additional letter  com-
          mands are available:

          j    Jump to another location.  Same as ``#jump'' or ``M-j''.

          k    Kick something (usually a door).  Same as `^D'.

          l    Loot a box on the floor.  Same as ``#loot'' or ``M-l''.

          N    Name an item or type of object.  Same as ``#name''  or  ``M-
               N''.

          u    Untrap a trapped object or door.   Same  as  ``#untrap''  or
               ``M-u''.





          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              12


          5.  Rooms and corridors

               Rooms and corridors in the dungeon are either lit  or  dark.
          Any  lit  areas within your line of sight will be displayed; dark
          areas are only displayed if they are within  one  space  of  you.
          Walls and corridors remain on the map as you explore them.

               Secret corridors are hidden.  You can find them with the `s'
          (search) command.

          5.1.  Doorways

               Doorways connect rooms and corridors.  Some doorways have no
          doors;  you  can  walk right through.  Others have doors in them,
          which may be open, closed, or locked.  To open a closed door, use
          the  `o'  (open)  command; to close it again, use the `c' (close)
          command.

               You can get through a locked door by using a  tool  to  pick
          the lock with the `a' (apply) command, or by kicking it open with
          the `^D' (kick) command.

               Open doors cannot be entered diagonally; you  must  approach
          them  straight  on, horizontally or vertically.  Doorways without
          doors are not restricted.

               Doors can be useful for shutting out  monsters.   Most  mon-
          sters cannot open doors, although a few don't need to (ex. ghosts
          can walk through doors).

               Secret doors are hidden.  You can find  them  with  the  `s'
          (search) command.

          5.2.  Traps (`^')

               There are traps throughout the dungeon to snare  the  unwary
          delver.   For  example,  you  may suddenly fall into a pit and be
          stuck for a few turns.  Traps don't appear on your map until  you
          see  one triggered by moving onto it, or you discover it with the
          `s' (search) command.  Monsters can fall prey to traps, too.


          6.  Monsters

               Monsters you cannot see are not  displayed  on  the  screen.
          Beware!   You  may  suddenly come upon one in a dark place.  Some
          magic items can help you locate  them  before  they  locate  you,
          which some monsters do very well.

          6.1.  Fighting

               If you see a monster and you wish to fight it, just  attempt
          to  walk  into  it.   Many  monsters you find will mind their own
          business unless you attack them.  Some of them are very dangerous


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              13


          when angered.  Remember:  Discretion is the better part of valor.

          6.2.  Your pet

               You start the game with a little dog  (`d')  or  cat  (`f'),
          which follows you about the dungeon and fights monsters with you.
          Like you, your pet needs food to survive.  It usually  feeds  it-
          self  on  fresh carrion and other meats.  If you're worried about
          it or want to train it, you can feed  it,  too,  by  throwing  it
          food.

               Your pet also gains experience from  killing  monsters,  and
          can  grow  over  time,  gaining hit points and doing more damage.
          Initially, your pet may even be better  at  killing  things  than
          you, which makes pets useful for low-level characters.

               Your pet will follow you up and down staircases,  if  it  is
          next to you when you move.  Otherwise, your pet will be stranded,
          and may become wild.

          6.3.  Ghost levels

               You may encounter the shades and corpses of other  adventur-
          ers (or even former incarnations of yourself!) and their personal
          effects.  Ghosts are hard to  kill,  but  easy  to  avoid,  since
          they're  slow and do little damage.  You can plunder the deceased
          adventurer's possessions; however, they are likely to be  cursed.
          Beware of whatever killed the former player.


          7.  Objects

               When you find something in the dungeon, it is common to want
          to pick it up.  In NetHack, this is accomplished automatically by
          walking over the object (unless you turn off  the  pickup  option
          (see below), or move with the `m' prefix (see above)), or manual-
          ly by using the `,' command.  If you're carrying too many things,
          NetHack will tell you so and won't pick up anything more.  Other-
          wise, it will add the object(s) to your pack and  tell  you  what
          you just picked up.

               When you pick up an object,  it  is  assigned  an  inventory
          letter.   Many  commands  that operate on objects must ask you to
          find out which object you want to use.  When NetHack asks you  to
          choose  a  particular  object  you  are carrying, you are usually
          presented with a list of inventory letters to  choose  from  (see
          Commands, above).

               Some objects, such as weapons,  are  easily  differentiated.
          Others,  like  scrolls  and potions, are given descriptions which
          vary according to type.  During a game, any two objects with  the
          same  description  are  the same type.  However, the descriptions
          will vary from game to game.



          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              14


               When you use one of these objects, if its effect is obvious,
          NetHack  will  remember  what it is for you.  If its effect isn't
          extremely obvious, you will be asked what you want to  call  this
          type  of object so you will recognize it later.  You can also use
          the ``#name'' command for the same purpose at any time,  to  name
          all objects of a particular type or just an individual object.

          7.1.  Curses and blessings

               Any object that you find may be cursed, even if  the  object
          is otherwise helpful.  The most common effect of a curse is being
          stuck with (and to) the item.  Cursed weapons weld themselves  to
          your  hand  when wielded, so you cannot unwield them.  Any cursed
          item you wear is not removable by ordinary means.   In  addition,
          cursed  arms and armor usually, but not always, bear negative en-
          chantments that make them less effective in combat.  Other cursed
          objects may act poorly or detrimentally in other ways.

               Objects can also become blessed.  Blessed items usually work
          better  or more beneficially than normal uncursed items.  For ex-
          ample, a blessed weapon will do more damage against demons.

               There are magical means of bestowing or removing curses upon
          objects,  so  even  if you are stuck with one, you can still have
          the curse lifted and the item removed.  Priests  and  Priestesses
          have  an  innate sensitivity to curses and blessings, so they can
          more easily avoid cursed objects than other character classes.

               An item with unknown curse status, and  an  item  which  you
          know  to  be uncursed, will be distinguished in your inventory by
          the presence of the word ``uncursed'' in the description  of  the
          latter.   The  exception is if this description isn't needed; you
          can look at the inventory description  and  know  that  you  have
          discovered whether it's cursed.  This applies to items which have
          ``plusses,'' and items with charges.

          7.2.  Weapons (`)')

               Given a chance, almost all monsters in the Mazes  of  Menace
          will  gratuitously  kill  you.  You need weapons for self-defense
          (killing them first).  Without a weapon,  you  do  only  1-2  hit
          points of damage (plus bonuses, if any).

               There are wielded weapons, like maces and swords, and thrown
          weapons,  like  arrows.   To hit monsters with a weapon, you must
          wield it and attack them, or throw it at them.  To shoot an arrow
          out of a bow, you must first wield the bow, then throw the arrow.
          Crossbows shoot crossbow bolts.  Slings hurl  rocks  and  (other)
          gems.   You  can  wield  only  one  weapon at a time, but you can
          change weapons unless you're wielding a cursed one.

               Enchanted weapons have a  ``plus''  (which  can  also  be  a
          minus) that adds to your chance to hit and the damage you do to a
          monster.  The only way to find out if a weapon is enchanted is to


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              15


          have it magically identified somehow.

               Those of you in the audience who are AD&D players, be  aware
          that  each  weapon  which  exists in AD&D does the same damage to
          monsters in NetHack.  Some of the more obscure weapons  (such  as
          the  aklys,  lucern  hammer, and bec-de-corbin) are defined in an
          appendix to Unearthed Arcana, an AD&D supplement.

               The commands to use weapons are `w' (wield) and `t' (throw).

          7.3.  Armor (`[')

               Lots of unfriendly things lurk about; you need armor to pro-
          tect yourself from their blows.  Some types of armor offer better
          protection than others.  Your armor class is a  measure  of  this
          protection.  Armor class (AC) is measured as in AD&D, with 10 be-
          ing the equivalent of no armor, and lower numbers meaning  better
          armor.   Each  suit  of armor which exists in AD&D gives the same
          protection in NetHack.  Here is an (incomplete) list of the armor
          classes provided by various suits of armor:

                             dragon scale mail         1
                             plate mail                3
                             bronze plate mail         4
                             splint mail               4
                             banded mail               4
                             elven mithril-coat        5
                             chain mail                5
                             scale mail                6
                             ring mail                 7
                             studded leather armor     7
                             leather armor             8
                             no armor                 10

               You can also wear other pieces of armor (ex. helmets, boots,
          shields,  cloaks) to lower your armor class even further, but you
          can only wear one item of each category (one suit of  armor,  one
          cloak, one helmet, one shield, and so on).

               If a piece of armor is enchanted, its armor protection  will
          be  better  (or  worse)  than normal, and its ``plus'' (or minus)
          will subtract from your armor class.  For  example,  a  +1  chain
          mail  would  give  you  better protection than normal chain mail,
          lowering your armor class one unit further to 4.  When you put on
          a  piece  of  armor, you immediately find out the armor class and
          any ``plusses'' it provides.  Cursed pieces of armor usually have
          negative enchantments (minuses) in addition to being unremovable.

               The commands to use armor are `W' (wear) and `T' (take off).

          7.4.  Food (`%')

               Food is necessary to survive.  If you go  too  long  without
          eating   you  will  faint,  and  eventually  die  of  starvation.


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              16


          Unprotected food does not stay fresh indefinitely; after a  while
          it will spoil, and be unhealthy to eat.  Food stored in ice boxes
          or tins (``cans'' to you Americans) will usually stay fresh,  but
          ice boxes are heavy, and tins take a while to open.

               When you kill monsters, they usually leave corpses which are
          also ``food.''  Many, but not all, of these are edible; some also
          give you special powers when you eat them.  A good rule of  thumb
          is ``you are what you eat.''

               You can name one food item after something you like  to  eat
          with the fruit option, if your dungeon has it.

               The command to eat food is `e'.

          7.5.  Scrolls (`?')

               Scrolls are labeled with various titles, probably chosen  by
          ancient  wizards  for  their amusement value (ex. ``READ ME,'' or
          ``HOLY BIBLE'' backwards).  Scrolls disappear after you read them
          (except for blank ones, without magic spells on them).

               One of the most useful of these is the scroll  of  identify,
          which can be used to determine what another object is, whether it
          is cursed or blessed, and how many uses it has  left.   Some  ob-
          jects  of  subtle  enchantment  are difficult to identify without
          these.

               If you receive mail while you are playing (on versions  com-
          piled with this feature), a mail daemon may run up and deliver it
          to you as a scroll of mail.  To use this feature,  you  must  let
          NetHack  know  where to look for new mail by setting the ``MAIL''
          environment variable to the file name of your mailbox.   You  may
          also  want  to set the ``MAILREADER'' environment variable to the
          file name of your favorite reader, so NetHack  can  shell  to  it
          when you read the scroll.

               The command to read a scroll is `r'.

          7.6.  Potions (`!')

               Potions are distinguished by the color of the liquid  inside
          the flask.  They disappear after you quaff them.

               Clear potions are potions of  water.   Sometimes  these  are
          blessed or cursed, resulting in holy or unholy water.  Holy water
          is the bane of the undead, so potions  of  holy  water  are  good
          thing  to  throw  (`t') at them.  It also is very useful when you
          dip (``#dip'') other objects in it.

               The command to drink a potion is `q' (quaff).





          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              17


          7.7.  Wands (`/')

               Magic wands have multiple magical charges.  Some  wands  are
          directional-you  must  give  a direction to zap them in.  You can
          also zap them at yourself (just give a `.' or `s' for the  direc-
          tion),  but  it is often unwise.  Other wands are nondirectional-
          they don't ask for directions.  The number of charges in  a  wand
          is random, and decreases by one whenever you use it.

               The command to use a wand is `z' (zap).

          7.8.  Rings (`=')

               Rings are very useful items, since they are relatively  per-
          manent  magic,  unlike  the  usually fleeting effects of potions,
          scrolls, and wands.

               Putting on a ring activates its magic.  You  can  wear  only
          two rings, one on each ring finger.

               Most rings also cause you to grow hungry more  rapidly,  the
          rate varying with the type of ring.

               The commands to use rings are `P' (put on) and `R' (remove).

          7.9.  Spell books (`+')

               Spell books are tomes of mighty magic.   When  studied  with
          the  `r'  (read)  command,  they bestow the knowledge of a spell-
          unless the attempt backfires.  Reading a cursed  spell  book,  or
          one  with  mystic  runes  beyond  your ken can be harmful to your
          health!

               A spell can also backfire when you cast it.  If you  attempt
          to cast a spell well above your experience level, or cast it at a
          time when your luck is particularly bad, you can end  up  wasting
          both the energy and the time required in casting.

               Casting a spell calls forth  magical  energies  and  focuses
          them with your naked mind.  Releasing the magical energy releases
          some of your memory of the spell with it.  Each time you  cast  a
          spell, your familiarity with it will dwindle, until you eventual-
          ly forget the details completely and must relearn it.

               The command to read a spell book is the same as for scrolls,
          `r'  (read).   The  `+' command lists your current spells and the
          number of spell points they  require.   The  `Z'  (cast)  command
          casts a spell.

          7.10.  Tools (`(')

               Tools are miscellaneous objects with various purposes.  Some
          tools,  like  wands, have a limited number of uses.  For example,
          lamps burn out after a while.  Other tools are containers,  which


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              18


          objects can be placed into or taken out of.

               The command to use tools is `a' (apply).

          7.10.1.  Chests and boxes

               You may encounter chests or boxes in  your  travels.   These
          can  be  opened with the ``#loot'' extended command when they are
          on the floor, or with the `a' (apply) command when you are carry-
          ing  one.   However,  chests are often locked, and require you to
          either use a key to unlock it, a tool to pick  the  lock,  or  to
          break it open with brute force.  Chests are unwieldy objects, and
          must be set down to be unlocked (by kicking them, using a key  or
          lock  picking  tool  with  the `a' (apply) command, or by using a
          weapon to force the lock with the ``#force'' extended command).

               Some chests are trapped, causing nasty things to happen when
          you unlock or open them.  You can check for and try to deactivate
          traps with the ``#untrap'' extended command.

          7.11.  Amulets (`"')

               Amulets are very similar to rings, and often more  powerful.
          Like rings, amulets have various magical properties, some benefi-
          cial, some harmful, which are activated by putting them on.

               The commands to use amulets are the same as for  rings,  `P'
          (put on) and `R' (remove).

          7.12.  Gems (`*')

               Some gems are valuable, and can be sold for a  lot  of  gold
          pieces.  Valuable gems increase your score if you bring them with
          you when you exit.  Other small rocks  are  also  categorized  as
          gems, but they are much less valuable.

          7.13.  Large rocks (``')

               Statues and boulders are not particularly  useful,  and  are
          generally  heavy.   It  is rumored that some statues are not what
          they seem.

          7.14.  Gold (`$')

               Gold adds to your score, and you can  buy  things  in  shops
          with  it.   Your version of NetHack may display how much gold you
          have on the status line.  If not, the `$' command will count it.


          8.  Options

               Due to variations in personal tastes and conceptions of  how
          NetHack should do things, there are options you can set to change
          how NetHack behaves.


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              19


          8.1.  Setting the options

               Options may be set in a number of ways.   Within  the  game,
          the `O' command allows you to view all options and change most of
          them.  You can also set options automatically by placing them  in
          the  NETHACKOPTIONS environment variable or a configuration file.
          Some versions of NetHack also have front-end programs that  allow
          you to set options before starting the game.

          8.2.  Using the NETHACKOPTIONS environment variable

               The NETHACKOPTIONS variable is a comma-separated list of in-
          itial values for the various options.  Some can only be turned on
          or off.  You turn one of these on by adding the name of  the  op-
          tion  to  the list, and turn it off by typing a `!' or ``no'' be-
          fore the name.  Others take a character string as a  value.   You
          can  set  string  options by typing the option name, a colon, and
          then the value of the string.  The value  is  terminated  by  the
          next comma or the end of string.

               For example, to set up an environment variable so that ``fe-
          male''  is  on,  ``pickup''  is  off,  the  name is set to ``Blue
          Meanie'', and the fruit is set to ``papaya'', you would enter the
          command

               % setenv NETHACKOPTIONS "female,!pickup,name:Blue Meanie,fruit:papaya"

          in csh, or

               $ NETHACKOPTIONS="female,!pickup,name:Blue Meanie,fruit:papaya"
               $ export NETHACKOPTIONS

          in sh or ksh.

          8.3.  Using a configuration file

               Any line in  the  configuration  file  starting  with  ``OP-
          TIONS=''  may be filled out with options in the same syntax as in
          NETHACKOPTIONS.  Any line  starting  with  ``GRAPHICS='',  ``MON-
          STERS='', or ``OBJECTS='' is taken as defining the graphics, mon-
          sters, or objects options in a different syntax,  a  sequence  of
          decimal numbers giving the character position in the current font
          to be used in displaying each entry.  Such a sequence can be con-
          tinued to multiple lines by putting a `\' at the end of each line
          to be continued.  Any line starting with `#' is treated as a com-
          ment.

               The default name of the configuration file  varies  on  dif-
          ferent  operating  systems, but NETHACKOPTIONS can also be set to
          the full name of a file you want to use (possibly preceded by  an
          `@').





          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              20


          8.4.  Customization options

               Here are explanations of the various options do.   Character
          strings  longer than fifty characters are truncated.  Some of the
          options listed may be inactive in your dungeon.

          BIOS
               Use BIOS calls to update the screen display quickly  and  to
               read  the  keyboard (allowing the use of arrow keys to move)
               on machines with an IBM PC compatible BIOS ROM (default off,
               OS/2, PC, and ST NetHack only).

          catname
               Name your starting cat (ex. ``catname:Morris'').  Cannot  be
               set with the `O' command.

          checkpoint
               Save game  state  after  each  level  change,  for  possible
               recovery after program crash (default on).

          color
               Use color  for  different  monsters,  objects,  and  dungeon
               features (default on for microcomputers).

          confirm
               Have user confirm attacks on pets,  shopkeepers,  and  other
               peaceable creatures (default on).

          DECgraphics
               Use a predefined selection of characters from  the  DEC  VT-
               xxx/DEC  Rainbow/ ANSI line-drawing character set to display
               the dungeon instead of having to define a full graphics  set
               yourself (default off).  Cannot be set with the `O' command.

          disclose
               Offer to identify your inventory  and  intrinsics  when  the
               game ends (default on).

          dogname
               Name your starting dog (ex.  ``dogname:Fang'').   Cannot  be
               set with the `O' command.

          female
               Set your sex (default off).  Cannot be set with the `O' com-
               mand.

          fixinv
               An object's inventory letter sticks to it when it's  dropped
               (default on).  If this is off, dropping an object shifts all
               the remaining inventory letters.

          fruit
               Name  a  fruit  after  something  you  enjoy   eating   (ex.
               ``fruit:mango'')   (default  ``slime  mold''.   Basically  a


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              21


               nostalgic whimsy that NetHack uses from time to  time.   You
               should  set  this to something you find more appetizing than
               slime mold.  Apples, oranges, pears, bananas, and melons al-
               ready exist in NetHack, so don't use those.

          graphics
               Set the graphics symbols for screen displays (default `` |--
               ------||.-|++.##<><>\^"_\\#{}.}..## #}|-\\/*!)(0#@*/-\\||\\-
               //-\\| |\\-/'').  If specified, the graphics  option  should
               come  last,  followed  by  a string of 1-69 characters to be
               used instead of the  default  map-drawing  characters.   The
               dungeon  map  will use the characters you specify instead of
               the default symbols.  Remember that you may need  to  escape
               some of these characters if, for example, you use csh.

               The  DECgraphics  and  IBMgraphics  options  use  predefined
               selections  of  graphics  symbols, so you need not go to the
               trouble of setting up a full graphics string for these  com-
               mon cases.  These two options also set up proper handling of
               graphics characters for such terminals, so you should speci-
               fy  them  as appropriate even if you override the selections
               with your own graphics string.

               Note that this option string is now escape-processed in con-
               ventional  C  fashion.   This  means that `\' is a prefix to
               take the following character literally, and not as a special
               prefix.   Your  graphics  strings  for NetHack 2.2 and older
               versions may contain a `\'; it must be doubled for the  same
               effect  now.   The  special escape form `\m' switches on the
               meta bit in the following  character,  and  the  `^'  prefix
               causes  the  following  character to be treated as a control
               character (so any `^' in your old graphics strings should be
               changed to `\^' now).  Also note that there are more symbols
               in a different order than used for NetHack 3.0.

               The order of the symbols is: solid rock, vertical wall, hor-
               izontal  wall,  upper left corner, upper right corner, lower
               left corner, lower right corner, cross wall, upward T  wall,
               downward T wall, leftward T wall, rightward T wall, no door,
               vertical open door, horizontal open  door,  vertical  closed
               door,  horizontal  closed door, floor of a room, dark corri-
               dor, lit corridor, stairs up, stairs down, ladder up, ladder
               down, trap, web, altar, throne, kitchen sink, fountain, pool
               or moat, ice, lava, vertical lowered drawbridge,  horizontal
               lowered  drawbridge,  vertical raised drawbridge, horizontal
               raised drawbridge, air, cloud, under water,  vertical  beam,
               horizontal beam, left slant, right slant, digging beam, cam-
               era flash beam, left boomerang, right boomerang, four glyphs
               giving the sequence for magic resistance displays; the eight
               surrounding glyphs for swallowed display;  nine  glyphs  for
               explosions.   An explosion consists of three rows (top, mid-
               dle, and bottom) of three characters.  The explosion is cen-
               tered in the center of this 3 by 3 array.



          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              22


               You might want to use `+' for the corners and T walls for  a
               more  aesthetic,  boxier  display.   Note  that  in the next
               release, new symbols may be added, or the present ones rear-
               ranged.

               Cannot be set with the `O' command.

          help If more information is available for  an  object  looked  at
               with  the  `/'  command,  ask if you want to see it (default
               on). Turning help off makes just looking at  things  faster,
               since you aren't interrupted with the ``More info?'' prompt,
               but it also means  that  you  might  miss  some  interesting
               and/or important information.

          hilite_pet
               Highlight pets when color is turned off (default off).

          IBMgraphics
               Use a predefined selection of IBM extended ASCII  characters
               to  display  the  dungeon instead of having to define a full
               graphics set yourself (default off).  Cannot be set with the
               `O' command.

          ignintr
               Ignore interrupt signals, including breaks (default off).

          legacy
               Display an introductory message when starting the game  (de-
               fault on).

          lit_corridor
               Show corridor squares seen by night vision or a light source
               held by your character as lit (default off).

          male
               Set your sex (default on, most hackers are male).  Cannot be
               set with the `O' command.

          monsters
               Set the characters used to display monster classes  (default
               ``abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX-
               YZ@ \&;:~]'').  This string is subjected to  the  same  pro-
               cessing as the graphics option.  The order of the symbols is
               ant or other insect, blob, cockatrice, dog or other  canine,
               eye  or  sphere,  feline,  gremlin,  humanoid,  imp or minor
               demon, jelly, kobold, leprechaun,  mimic,  nymph,  orc,  pi-
               ercer,  quadruped,  rodent, spider, trapper or lurker above,
               unicorn, vortex, worm, xan or other  mythical/fantastic  in-
               sect,  light,  zruty,  angelic  being, bat, centaur, dragon,
               elemental, fungus or mold, gnome, giant humanoid,  invisible
               stalker,  jabberwock, Keystone Kop, lich, mummy, naga, ogre,
               pudding or ooze,  quantum  mechanic,  rust  monster,  snake,
               troll,  umber  hulk,  vampire,  wraith, xorn, yeti or ape or
               other large beast, zombie, human, ghost, golem,  demon,  sea


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              23


               monster,  lizard,  long worm tail, and mimic.  Cannot be set
               with the `O' command.

          msghistory
               The number of top line messages to save (and recall with ^P)
               (default 20).  Cannot be set with the `O' command.

          name
               Set your character's name (defaults to your user name).  You
               can  also  set  your character class by appending a dash and
               the first letter of the character class (that is, by suffix-
               ing  one of -A -B -C -E -H -K -P -R -S -T -V -W).  Cannot be
               set with the `O' command.

          news
               Read the NetHack news file, if present (default on).   Since
               the  news  is shown at the beginning of the game, there's no
               point in setting this with the `O' command.

          null
               Send padding nulls to the terminal (default off).

          number_pad
               Use the number keys to move instead of  [yuhjklbn]  (default
               off).

          objects
               Set the characters used to display object  classes  (default
               ``])[="(%!?+/$*`0_.'').   This  string  is  subjected to the
               same processing as the graphics option.  The  order  of  the
               symbols  is  illegal-object  (should never be seen), weapon,
               armor, ring, amulet, tool, food, potion, scroll, spell book,
               wand,  gold,  gem  or  rock,  boulder  or statue, iron ball,
               chain, and venom.  Cannot be set with the `O' command.

          packorder
               Specify  the  order  to  list  object  types   in   (default
               ``\")[%?+/=!(*`0_'').   The value of this option should be a
               string containing the symbols for the various object types.

          pettype
               Specify the type of your initial pet, if you are  playing  a
               character  class  that  uses  both  types of pets.  Possible
               values are ``cat'' and ``dog''.  Cannot be set with the  `O'
               command.

          pickup
               Pick up things you move onto by default (default on).

          rawio
               Force raw (non-cbreak) mode for faster output and more  bul-
               letproof  input  (MS-DOS  sometimes treats `^P' as a printer
               toggle without it) (default off).  Note:  DEC Rainbows  hang
               if this is turned on.  Cannot be set with the `O' command.


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              24


          rest_on_space
               Make the space bar a synonym for the `.' (rest) command (de-
               fault off).

          safe_pet
               Prevent you from (knowingly) attacking  your  pets  (default
               on).

          scores
               Control what parts of the score list you are  shown  at  the
               end  (ex.   ``scores:5  top  scores/4  around  my  score/own
               scores'').  Only the first letter  of  each  category  (`t',
               `a', or `o') is necessary.

          showexp
               Show your accumulated experience points on bottom line  (de-
               fault off).

          showscore
               Show your approximate accumulated score on bottom line  (de-
               fault off).

          silent
               Suppress terminal beeps (default on).

          sortpack
               Sort the pack contents by  type  when  displaying  inventory
               (default on).

          standout
               Boldface monsters and ``--More--'' (default off).

          time
               Show the elapsed game time in turns on bottom line  (default
               off).

          tombstone
               Draw a tombstone graphic upon your death (default on).

          verbose
               Provide more commentary during the game (default on).

          windowtype
               Select which windowing system to use,  such  as  ``tty''  or
               ``X11''  (default  depends  on version).  Cannot be set with
               the `O' command.


          9.  Scoring

               NetHack maintains a list of the top  scores  or  scorers  on
          your machine, depending on how it is set up.  In the latter case,
          each account on the machine can post only one  non-winning  score
          on  this  list.   If  you  score higher than someone else on this


          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              25


          list, or better your previous score, you will be inserted in  the
          proper  place  under your current name.  How many scores are kept
          can also be set up when NetHack is compiled.

               Your score is chiefly based upon  how  much  experience  you
          gained, how much loot you accumulated, how deep you explored, and
          how the game ended.  If you quit the game, you escape with all of
          your  gold  intact.   If, however, you get killed in the Mazes of
          Menace, the guild will only hear about 90% of your gold when your
          corpse  is  discovered  (adventurers  have  been known to collect
          finder's fees).  So, consider whether you want to take  one  last
          hit  at  that  monster  and  possibly live, or quit and stop with
          whatever you have.  If you quit, you keep all your gold,  but  if
          you swing and live, you might find more.

               If you just want to see what the current  top  players/games
          list is, you can type nethack -s all on most versions.


          10.  Explore mode

               NetHack is an intricate and difficult game.   Novices  might
          falter in fear, aware of their ignorance of the means to survive.
          Well, fear not.  Your dungeon may come  equipped  with  an  ``ex-
          plore''  or  ``discovery'' mode that enables you to keep old save
          files and cheat death, at the paltry cost of not getting  on  the
          high score list.

               There are two ways of enabling  explore  mode.   One  is  to
          start the game with the -X switch.  The other is to issue the `X'
          command while already playing the game.  The  other  benefits  of
          explore mode are left for the trepid reader to discover.


          11.  Credits

               The original hack game was modeled on the Berkeley UNIX  ro-
          gue  game.  Large portions of this paper were shamelessly cribbed
          from A Guide to the Dungeons of Doom, by Michael C. Toy and  Ken-
          neth  C.  R. C. Arnold.  Small portions were adapted from Further
          Exploration of the Dungeons of Doom, by Ken Arromdee.

               NetHack is the product of literally dozens of people's work.
          Main  events  in the course of the game development are described
          below:


               Jay Fenlason wrote the original Hack, with help  from  Kenny
          Woodland, Mike Thome and Jon Payne.

               Andries Brouwer did a major re-write, transforming Hack into
          a  very  different  game, and published (at least) three versions
          (1.0.1, 1.0.2, and 1.0.3) for UNIX machines to the Usenet.



          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              26


               Don G. Kneller ported Hack 1.0.3 to Microsoft C and  MS-DOS,
          producing  PC  HACK 1.01e, added support for DEC Rainbow graphics
          in version 1.03g, and went on to produce at least four more  ver-
          sions (3.0, 3.2, 3.51, and 3.6).

               R. Black ported PC HACK 3.51 to  Lattice  C  and  the  Atari
          520/1040ST, producing ST Hack 1.03.

               Mike Stephenson merged these various versions back together,
          incorporating  many  of  the added features, and produced NetHack
          1.4.  He then coordinated a cast of thousands  in  enhancing  and
          debugging NetHack 1.4 and released NetHack versions 2.2 and 2.3.

               Later, Mike coordinated a major rewrite of the game, heading
          a team which included Ken Arromdee, Jean-Christophe Collet, Steve
          Creps,  Eric  Hendrickson,  Izchak  Miller,  John  Rupley,   Mike
          Threepoint, and Janet Walz, to produce NetHack 3.0c.

               NetHack 3.0 was ported to the Atari by  Eric  R.  Smith,  to
          OS/2  by  Timo Hakulinen, and to VMS by David Gentzel.  The three
          of them and Kevin Darcy later joined the main development team to
          produce subsequent revisions of 3.0.

               Olaf Seibert ported NetHack 2.3 and 3.0 to the Amiga.   Norm
          Meluch,  Stephen  Spackman  and Pierre Martineau designed overlay
          code for PC NetHack 3.0.  Johnny Lee ported NetHack  3.0  to  the
          Macintosh.   Along with various other Dungeoneers, they continued
          to enhance the PC, Macintosh, and Amiga ports through  the  later
          revisions of 3.0.

               Headed by Mike Stephenson and coordinated by  Izchak  Miller
          and  Janet  Walz, the development team which now included Ken Ar-
          romdee, David Cohrs, Jean-Christophe Collet,  Kevin  Darcy,  Matt
          Day,  Timo Hakulinen, Steve Linhart, Dean Luick, Pat Rankin, Eric
          Raymond, and Eric Smith undertook  a  radical  revision  of  3.0.
          They re-structured the game's design, and re-wrote major parts of
          the code.  They added multiple dungeons, a new  display,  special
          individual  character  quests,  a  new endgame and many other new
          features, and produced NetHack 3.1.

               Ken Lorber, Gregg Wonderly and Greg Olson,  with  help  from
          Richard  Addison,  Mike  Passaretti,  and Olaf Seibert, developed
          NetHack 3.1 for the Amiga.

               Norm Meluch and Kevin Smolkowski, with help from Carl  Sche-
          lin, Stephen Spackman, Steve VanDevender, and Paul Winner, ported
          NetHack 3.1 to the PC.

               Jon Watte, with help from Ross  Brown,  Mike  Engber,  David
          Hairston,  Michael  Hamel, Jonathan Handler, Johnny Lee, Tim Len-
          nan, Rob Menke, Andy Swanson, and especially from Hao-yang  Wang,
          developed NetHack 3.1 for the Macintosh.




          NetHack 3.1                                          May 28, 1990






          NetHack Guidebook                                              27


               Timo Hakulinen ported NetHack 3.1 to OS/2.  Eric Smith port-
          ed  NetHack  3.1 to the Atari.  Pat Rankin, with help from Joshua
          Delahunty, is responsible for the VMS version of NetHack 3.1.

               Dean Luick, with help from David  Cohrs,  developed  NetHack
          3.1 for X11.


               From time to time, some depraved  individual  out  there  in
          netland  sends a particularly intriguing modification to help out
          with the game.  The Gods of the Dungeon sometimes  make  note  of
          the  names  of the worst of these miscreants in this, the list of
          Dungeoneers:


                  Richard Addison        Eric Hendrickson      Mike Passaretti
                      Tom Almy            Bruce Holloway         Pat Rankin
                    Ken Arromdee         Richard P. Hughey     Eric S. Raymond
                    Eric Backus            Ari Huttunen       Frederick Roeber
                    John S. Bien            John Kallen          John Rupley
                     Ralf Brown              Del Lamb           Carl Schelin
                     Ross Brown             Greg Laskin         Olaf Seibert
                    David Cohrs             Johnny Lee           Kevin Sitze
               Jean-Christophe Collet       Tim Lennan          Eric R. Smith
                    Steve Creps            Merlyn LeRoy       Kevin Smolkowski
                    Kevin Darcy            Steve Linhart       Michael Sokolov
                    Matthew Day             Ken Lorber        Stephen Spackman
                  Joshua Delahunty          Dean Luick          Andy Swanson
                     Bill Dyer          Benson I. Margulies      Kevin Sweet
                    Mike Engber          Pierre Martineau      Scott R. Turner
                   Jochen Erwied          Roland McGrath      Steve VanDevender
                    Mike Gallop             Norm Meluch         Janet Walz
                   David Gentzel             Rob Menke          Hao-yang Wang
                   Mark Gooderum           Deron Meranda          Jon Watte
                   David Hairston         Bruce Mewborne          Tom West
                   Timo Hakulinen          Izchak Miller         Paul Winner
                   Michael Hamel            Gil Neiger         Gregg Wonderly
                  Jonathan Handler          Greg Olson

          Brand and product names are trademarks or  registered  trademarks
          of their respective holders.















          NetHack 3.1                                          May 28, 1990



```
{% endraw %}

## ORACLES.TXT

{% raw %}
```
"...it is rather disconcerting to be confronted with the
following theorem from [Baker, Gill, and Solovay, 1975].

Theorem 7.18  There exist recursive languages A and B such that
  (1)  P(A) == NP(A), and
  (2)  P(B) != NP(B)

This provides impressive evidence that the techniques that are
currently available will not suffice for proving that P != NP or          
that P == NP."  [Garey and Johnson, p. 185.]

If thy wand hath run out of charges, thou mayst zap it again and again; though
naught will happen at first, verily, thy persistence shall be rewarded, as
one last charge may yet be wrested from it!
,/)
Though the shopkeepers be wary, thieves have nevertheless stolen much by using
their digging wands to hasten exits through the pavement.
,/)
If thou hast had trouble with rust on thy armor or weapons, thou shouldst
know that thou canst prevent this by, while in a confused state, reading the
magical parchments which normally are used to cause their enchantment.
,/)
Behold the cockatrice, whose diminutive stature belies its hidden might.  The
cockatrice can petrify any ordinary being it contacts--save those wise
adventurers who eat a dead lizard or blob of acid when they feel themselves
slowly turning to stone.
,/)
While some wayfarers rely on finding finished armour in the dungeon, the
resourceful consider dragon scales as truly enchanting raw material and
realize that dragon scale mail is an excellent investment.
,/)
It is well known among travelers that extra-healing draughts may clear thy
senses when thou art addled by hallucinations.  But never forget, the lowly
potion which makes one sick may be used for the same purpose.
,/)
While the consumption of lizard flesh or water beloved of the gods may
straighten thy head after confusion, the application of the horn of a
creature of utmost purity can alleviate many other afflictions as well.
,/)
If thou wishest to travel quickly between distant levels, thou must be
able to control thy teleports, and be confused, and read the scroll
which usually teleports thyself around on the level.  Daring adventurers
have also performed the same feat sans need for scrolls or potions by
stepping on the correct type of trap.
,/)
Almost all adventurers who come this way hope to pass the dread Medusa.  To
do this, the best advice is to keep thine eyes blindfolded and to cause the
creature to espy its own reflection in a mirror.
,/)
And where it is written "ad aerarium", diligent searching will often reveal
the way to a trap which sends one to the Magic Memory Vault, where the riches
of Croesus are stored; however, escaping from the vault with its gold is much
harder than getting in.
,/)
It is well known that wily shopkeepers doth raise their prices whene'er they
espy the garish apparel of the approaching tourist or the countenance of a
disfavored patron.  They favor the gentle of manner and the fair of face.
The boor may expect unprofitable transactions.
,/)
The cliche of the kitchen sink swallowing any unfortunate rings that contact
its pernicious surface reflecteth greater truth than many homilies, yet
even so, few hath developed the skill to identify enchanted rings by the
transfigurations effected upon the voracious device's frame.
,/)
The meat of enchanted creatures will ofttimes convey magical properties
unto the consumer.  A fresh corpse of floating eye doth fetch a high
price among wizards for its utility in conferring Telepathy, by which
the sightless may locate surrounding minds.
,/)
The detection of blessings and curses is in the domain of the gods.  They will
make this information available to mortals who request it at their places of
worship, or elsewhere for those mortals who devote themselves to the service
of the gods.
,/)
At times, the gods may favor worthy supplicants with named blades whose
powers echo throughout legend.  Learned wayfarers can reproduce blades of
elven lineage, hated of the orcs, without the need for such intervention.
,/)
Adventurers searching for Medusa or the Wizard of Yendor needst not wait until
their dungeon level corresponds with their enemies' to know their location.
Eat a floating eye, blind thyself, and use a mirror in thine own direction,
and provided thou art lucky, thou shalt know the approximate locations of
thine enemies.
,/)
There are many stories of a mighty amulet, the origins of which are said
to be ancient Yendor.  This amulet doth have awesome power, and the gods
desireth it greatly.  Mortals mayst tap only portions of its terrible
abilities.  The stories tell of mortals seeing what their eyes cannot
see and seeking places of magical transportation, while having this
amulet in their possession.  Others say a mortal must wear the amulet to
obtain these powers.  But verily, such power comes at great cost, to
preserve the balance.
,/)
It is said that thou mayst gain entry to Moloch's sanctuary, if thou
darest, from a place where the ground vibrates in the deepest depths of
Gehennom.  Thou needs must have the aid of three magical items.  The
pure sound of a silver bell shall announce thee.  The terrible runes,
read from Moloch's book, shall cause the earth to tremble mightily.  The
light of an enchanted candelabrum shall show thee the way.
,/)
In the nethermost recesses of the dungeon, there standeth a castle, wherein
layeth a wand of wishes.  If thou wouldst gain entry, bear with thee an
instrument of music, for the drawbridge may be charmed down with the proper
melody.  What notes comprise it only the gods know, but a musical mastermind
may yet succeed by witful improvization.  However, the less perspicacious are
not without recourse, should they be prepared to circumambulate the castle to
the postern.
,/)
The name of Elbereth may strike fear into the hearts of thine enemies, if
thou doest write it upon the ground at thy feet.  If thou maintain the utmost
calm, thy safety will be aided greatly, but beware lest thy clumsy feet scuff
the inscription, cancelling its potence.
```
{% endraw %}

## RUMORS.TXT

{% raw %}
```
A blindfold can be very useful if you're telepathic.
A candelabrum affixed with seven candles shows the way with a magical light.
A crystal plate mail will not rust.
A katana might slice a worm in two.
A magic vomit pump could be useful for gourmands.
A nymph knows how to unlock chains.
A potion of blindness lets you see invisible things.
A priest can get the gods to listen easily.
A priest can go to hell just like the rest of us.
A priestess and a virgin you might be, but that unicorn won't care.
A ring of conflict is a bad thing if there is a nurse in the room.
A short sword is not as good as a long sword.
A succubus will go farther than a nymph.
Acid blobs should be attacked bare-handed.
Affairs with nymphs are often very expensive.
Afraid of nymphs?  Wear a ring of adornment.
Afraid of your valuables being stolen?  Carry more junk!
Always be aware of the phase of the moon!
Always sweep the floor before engraving important messages.
Amulets are hard to make.  Even for a wand of wishing.
An elven cloak protects against magic.
An umber hulk can be a confusing sight.
Asking about monsters may be very useful.
Attack long worms from the rear -- that is so much safer!
Attacking an eel where there is none is usually a fatal mistake!
Bashing monsters with a bow is not such a good idea.
Be careful!  The Wizard may plan an ambush!
Be nice to a nurse:  Put away your weapon and take off your clothes.
Being digested is a painfully slow process.
Blank scrolls make more interesting reading.
Blind?  Catch a floating eye!
Booksellers never read scrolls; they might get carried away.
Concise conquest:  Control, confuse, conjure, condemn.
Dilithium crystals are rare indeed.
Dogs are attracted by the smell of tripe.
Dogs are superstitious; they never step on cursed items.
Dogs of ghosts aren't angry, just hungry.
Don't bother about money:  only leprechauns and shopkeepers are interested.
Don't forget!  Large dogs are MUCH harder to kill than little dogs.
Don't mess with shopkeepers, or you'll get the Guild after you.
Dragons never whip their children; they wouldn't feel it!
Eat your carrots.  They're good for your eyes.
Eating a freezing sphere is like eating a yeti.
Eating a killer bee is like eating a scorpion.
Eating a tengu is like eating a nymph.
Eating a wraith is a rewarding experience!
Eating unpaid leprechauns may be advantageous.
Elbereth has quite a reputation around these parts.
Elf has extra speed.
Elven cloaks cannot rust.
Ever fought with an enchanted tooth?
Ever tried reading while confused?
Ever tried to put a troll into a large box?
Ever wondered why one would want to dip something in a potion?
Expensive cameras have penetrating flash lights.
Extra staircases lead to extra levels.
Fiery letters might deter monsters.
Gems are too precious to be thrown away carelessly.
Getting hungry?  Stop wearing rings!
Gods expect the best from their priesthood.
Gods look down their noses at demigods.
Handle your flasks carefully -- there might be a ghost inside!
Holy water has many uses.
Hunger is a confusing experience for a dog!
I once knew a hacker who ate too fast and choked to death.
I smell a maze of twisty little passages.
I wish I never wished a wand of wishing.  (Wishful thinking.)
I wouldn't advise playing catch with a giant.
I'm watching you.  -- The Wizard of Yendor
Ice boxes keep your food fresh.
If you are being punished, it's done with a deadly weapon.
If you kill the Wizard, you get promoted to demi-god.
If you need a wand of digging, kindly ask the minotaur.
If you want a sex change, you must get it before the game.
If you want to hit, use a dagger.
If you want to rob a shop, train your dog.
If you're lost, try buying a map next time you're in a shop.
Inside a shop you better take a look at the price tags before buying anything.
It is bad manners to use a wand in a shop.
It is dangerous to visit a graveyard at midnight.
It is not always a good idea to whistle for your dog.
It is rumored that the Wizard has hired some help.
It might be a good idea to offer the unicorn a ruby.
It would be peculiarly sad were your dog turned to stone.
Keep your armors away from rust.
Keep your weaponry away from acids.
Kill a unicorn of your color and you kill your luck.
Leather is waterproof.  Ever see a cow with an umbrella?
Leprechauns are the most skilled cutpurses in this dungeon.
Lizard corpses protect against cockatrices.
Most monsters can't swim.
Music hath charms to affect the stubborn drawbridge.
Music hath charms to soothe the savage beast.
Never attack a guard.
Never ride a long worm.
Never use your best weapon to engrave a curse.
No easy fighting with a heavy load!
Nurses are accustomed to touch naked persons:  they don't harm them.
Nymphs can unlink more than your chain mail.
Once your little dog will be a big dog, and you will be proud of it.
Opening a tin is difficult, especially when you attempt it bare handed!
Orcs and killer bees share their lifestyle.
Orcs do not procreate in dark rooms.
Plain nymphs are harmless.
Playing AD&D may be helpful.
Playing Gauntlet might be enlightening in some situations.
Playing billiards pays when you are in a shop.
Polymorphing a shopkeeper might make you safer.
Polymorphing your dog probably makes you safer.
Potions don't usually mix, but sometimes...
Psst!  It's done with mirrors!
Put on a ring of teleportation:  it will take you away from onslaught.
Rays aren't boomerangs, of course, but still...
Read the manual before entering the cave -- you might get killed otherwise.
Reading Herbert might be enlightening in one case.
Reading Tolkien might help you.
Reading scrolls after drinking booze can give confusing results.
Rust monsters love water.  There are potions they hate, however.
Shopkeepers accept credit cards, as long as you pay cash.
Shopkeepers can spot a tourist a mile away with those Hawaiian shirts.
Shopkeepers can't read, so what use is engraving in a shop?
Shopkeepers can't swim.
Shopkeepers can't tell identical twins apart.
Shopkeepers have incredible patience.
Shopkeepers might raise their prices for tourists.
Shopkeepers value money more than revenge.
Some monsters can be tamed.  I once saw a hacker with a tame dragon!
Someone's been spiking the pits!
Sometimes monsters are more likely to fight each other than attack you.
Spinach, carrot, and a melon -- a meal fit for a nurse!
Tainted meat is even more sickening than poison!
Telepathy is just a trick:  once you know how to do it, it's easy.
The darker the warning, the more dire the danger.
The Leprechaun Gold Tru$t is no division of the Magic Memory Vault.
The Wizard finds death to be quite an experience.
The best equipment for your work is, of course, the most expensive.
The gods don't appreciate pesky priesthood.
The moon is not the only heavenly body to influence this game.
The orc swings his two handed sword named Elfrist at you.  You die...
The secret of wands of Nothing Happens:  try again!
There has always been something mystical about mirrors.
There is a Mastermind deep in the dungeon.
There is a big treasure hidden in the zoo!
There is more magic in this cave than meets the eye.
There is no harm in praising a large dog.
There is nothing like eating a mimic.
They say a gelatinous cube can paralyze you...
They say that Juiblex is afraid of a wand of digging.
They say that Medusa would like to put you on a pedestal.
They say that Vlad lives!!! ... in the mazes.
They say that `Elbereth' is often written about.
They say that a bag of holding can't hold everything.
They say that a blessed tin of quasit meat is a quick meal.
They say that a cat avoids traps.
They say that a cave spider will occasionally eat cave spider eggs.
They say that a clever wizard can have stats:  18/** 24 18 24 24 24.
They say that a clove of garlic makes a good talisman if handled right.
They say that a cursed scroll of teleportation could land you in trouble.
They say that a diamond is another kind of luck stone.
They say that a dog can be trained to fetch objects.
They say that a gelatinous cube makes a healthy breakfast.
They say that a giant gets strong by eating right, try it!
They say that a grid bug won't hit you when you cross it.
They say that a lembas wafer is a very light snack.
They say that a loadstone has a strange attraction and is not bad luck.
They say that a lock pick by any other name is still a lock pick.
They say that a lucky amulet will block poisoned arrows.
They say that a mirror will freeze a floating eye but you can still see it.
They say that a neutral character would get either Fire or Frost Brand.
They say that a polymorph trap is magic and magic protection prevents it.
They say that a potion of healing can cancel a potion of sickness.
They say that a potion of monster detection sometimes works both ways.
They say that a sink looks different from high above the floor.
They say that a summoned demon could improve your game.
They say that a tin of wraith meat is a rare dining experience.
They say that a unicorn might bring you luck.
They say that a wand of cancellation is like a wand of polymorph.
They say that a wand of locking can close more than just doors.
They say that a wand of polymorph can change your game.
They say that a wizard is even more powerful the second time around.
They say that a xorn knows of no obstacles when pursuing you.
They say that abusing a credit card could shock you sooner or later.
They say that amulets, like most things, can be deadly or life saving.
They say that an altar can identify blessings.
They say that an ooze will bite your boots and a rockmole will eat them.
They say that an unlucky hacker was once killed by an exploding tin.
They say that antique dealers are always interested in precious stones.
They say that booze can be diluted but not cancelled.
They say that by listening carefully, you can hear a secret door!
They say that carrots and carrot juice may improve your vision.
They say that cave spiders are not considered expensive health food.
They say that demigods must leave behind their prized earthly possessions.
They say that disturbing a djinni can be a costly mistake.
They say that dragon scales can be quite enchanting.
They say that dropping coins into a fountain will not grant you a wish.
They say that dwarves lawfully mind their own business.
They say that eating a bat corpse will make you batty, for awhile.
They say that eating a cram ration is a smart move.
They say that eating blue jelly is cool if you don't fight the feeling.
They say that escaping a dungeon is only the beginning of the end.
They say that feeling an unexpected draft of air is sort of a breakthrough.
They say that finding a cursed gray stone is always bad luck.
They say that for a good time engrave `Elbereth'.
They say that gaining a level is an experience that can raise your sights.
They say that garter snake meat rarely tastes good but it's still healthy.
They say that gauntlets of dexterity have a hidden enchanted touch.
They say that going to heaven is just another way of escaping the dungeon.
They say that golden nagas are law-abiding denizens as long as you are too.
They say that gremlins can make you feel cooler than you are now.
They say that grid bugs only exist in a strictly Cartesian sense.
They say that hackers often feel jumpy about eating nymphs.
They say that having polymorph control won't shock you.
They say that hell hath no fury like Medusa scorned.
They say that if it's hard getting your food down another bite could kill.
They say that if you don't wear glasses why bother with carrots?
They say that if you notice a loose board beneath you, don't step on it.
They say that if you start at the bottom the only place to go is up.
They say that if you teleport to heaven you're presumed to be dead already.
They say that in a shop you can be charged for old charges.
They say that in lighter moments you could think of ways to pass a stone.
They say that in the dungeon breaking a mirror can be seven years bad luck.
They say that in the dungeon you don't usually have any luck at all.
They say that in time a blessed luckstone can make your god happy.
They say that it is easier to kill the Wizard than to make him stand still.
They say that it only takes 1 zorkmid to meet the Kops.
They say that it's a blast when you mix the right potions together.
They say that it's not blind luck if you catch a glimpse of Medusa.
They say that killing a shopkeeper brings bad luck.
They say that monsters never step on a scare monster scroll.
They say that most monsters find flute recitals extremely boring.
They say that mummy corpses are not well preserved.
They say that naturally a wand of wishing would be heavily guarded.
They say that no one notices the junk underneath a boulder.
They say that nobody expects a unicorn horn to rust.
They say that nobody knows if an explorer can live forever.  Do you?
They say that nothing can change the fact that some potions contain a djinni.
They say that nothing can change the fact that some potions contain a ghost.
They say that nymphs always fall for rock'n'roll, try it!
They say that once an Olog-Hai is canned it never shows its face again.
They say that once upon a time xans would never scratch your boots.
They say that only an experienced wizard can do the tengu shuffle.
They say that only chaotics can kill shopkeepers and get away with it.
They say that playing a horn really bad is really good.
They say that rubbing a glowing potion does not make it a magic lamp.
They say that scalpels become dull because they're not athames.
They say that shopkeepers don't like pick-axes.
They say that shopkeepers don't mind you bringing your pets in the shop.
They say that shopkeepers don't usually mind if you sneak into a shop.
They say that shopkeepers often have a large amount of money in their purses.
They say that shopkeepers often remember things that you might forget.
They say that sinks and armor don't mix, take your cloak off now!
They say that sinks run hot and cold and many flavors in between.
They say that snake charmers aren't charismatic, just musical.
They say that soldiers are always prepared and usually protected.
They say that some eggs could hatch in your pack, lucky or not.
They say that some fire ants will make you a hot meal.
They say that some horns play hot music and others are too cool for words.
They say that some humanoids are nonetheless quite human.
They say that some shopkeepers consider gems to be family heirlooms.
They say that some shopkeepers recognize gems but they won't tell you.
They say that some stones are much much heavier than others.
They say that some yetis are full of hot air.
They say that something very special would be in a well-protected place.
They say that speed boots aren't fast enough to let you walk on water.
They say that teleport traps are the devil's work.
They say that tengus don't wear rings, why should you?
They say that tengus never steal gold although they would be good at it.
They say that that which was stolen once can be stolen again, ask any nymph.
They say that the Delphic Oracle knows that lizard corpses aren't confusing.
They say that the Hand of Elbereth can hold up your prayers.
They say that the Leprechaun King is rich as Croesus.
They say that the Wizard of Yendor is schizophrenic and suicidal.
They say that the experienced character knows how to convert an altar.
They say that the gods are happy when they drop objects at your feet.
They say that the idea of invisible Nazguls has a certain ring to it.
They say that the lady of the lake now lives in a fountain somewhere.
They say that the local shopkeeper frowns upon the rude tourist.
They say that the only door to the vampire's tower is on its lowest level.
They say that the only good djinni is a grateful djinni.
They say that the road through hell is a one-way street.
They say that the road to hell begins with Medusa.
They say that the thing about genocide is that it works both ways.
They say that the unicorn horn rule is if it ain't broke then don't fix it.
They say that the view from a fog cloud is really very moving.
They say that the walls in shops are made of extra hard material.
They say that there are at least 15 ways to lose a pair of levitation boots.
They say that throwing glass gems is the same as throwing rocks.
They say that trespassing a boulder is probably beneath you.
They say that unicorns are fond of precious gems.
They say that prayer at an altar can sometimes make the water there holy.
They say that what goes down the drain might come back up.
They say that wielded, a long sword named Fire Brand makes you feel cooler.
They say that wielded, a long sword named Frost Brand makes you hot stuff.
They say that wiping its face is impossible for a floating eye.
They say that with a floating eye you could see in the dark.
They say that you are lucky if you can get a unicorn to catch a ruby.
They say that you are what you eat.
They say that you can find named weapons at an altar if you're lucky.
They say that you can safely touch cockatrices eggs but why bother?
They say that you can't break an amulet of reflection.
They say that you don't always get what you wish for.
They say that you might find broken smoky potions in the morgue.
They say that you should always be prepared for a final challenge.
They say that you should ask a dwarf to let you into a locked shop.
They say that you should pray for divine inspiration.
They say that you should religiously give your gold away.
They say that you will never get healthy by eating geckos.
They say that zapping yourself with a wand of undead turning is stupid.
They say the Wizard's castle is booby-trapped!
They say the gods get angry if you pray too much.
They say the shopkeepers are insured by Croesus himself!
They say there is a powerful magic item hidden in a castle deep down!
Those who wield a cockatrice corpse have a rocky road ahead of them.
Throwing food at a wild dog might tame him.
To a full belly all food is bad.
Trolls are described as rubbery:  they keep bouncing back.
Try the fall-back end-run play against ghosts.
Try using your magic marker on wet scrolls.
Valkyries come from the north, and have commensurate abilities.
Vampires hate garlic.
Vault guards never disturb their Lords.
Visitors are requested not to apply genocide to shopkeepers.
Warning:  people who eat red dragons can go to hell!
Watch out, the Wizard might come back.
Water traps have no effect on dragons.
What is a cockatrice going to eat when it gets hungry?
Where do you think all those demons come from?  From hell, of course.
Where do you think hell is located?  It must be deep, deep down.
Why do you suppose they call them MAGIC markers?
Why would anybody in his sane mind engrave "Elbereth"?
Wishing too much may bring you too little.
You can't leave a shop through the back door:  there ain't one!
You may discover a fine spirit inside a potion bottle.
You may want to dip into a potion of bottled blessings.
You might be able to bribe a demon lord.
You might trick a shopkeeper if you're invisible.
You should certainly learn about quantum mechanics.
You're going into the morgue at midnight???
Your dog knows what to eat; maybe you should take lessons.
Zap yourself and see what happens...
Zapping a wand of undead turning might bring your dog back to life.
"So when I die, the first thing I will see in heaven is a score list?"
1st Law of Hacking:  leaving is much more difficult than entering.
2nd Law of Hacking:  first in, first out.
3rd Law of Hacking:  the last blow counts most.
4th Law of Hacking:  you will find the exit at the entrance.
A chameleon imitating a mail daemon often delivers scrolls of fire.
A cockatrice corpse is guaranteed to be untainted!
A dead cockatrice is just a dead lizard.
A dragon is just a snake that ate a scroll of fire.
A fading corridor enlightens your insight.
A glowing potion is too hot to drink.
A good amulet may protect you against guards.
A lizard corpse is a good thing to turn undead.
A long worm can be defined recursively.  So how should you attack it?
A monstrous mind is a toy forever.
A nymph will be very pleased if you call her by her real name:  Lorelei.
A ring of dungeon master control is a great find.
A ring of extra ring finger is useless if not enchanted.
A rope may form a trail in a maze.
A staff may recharge if you drop it for awhile.
A visit to the Zoo is very educational; you meet interesting animals.
A wand of deaf is a more dangerous weapon than a wand of sheep.
A wand of vibration might bring the whole cave crashing about your ears.
A winner never quits.  A quitter never wins.
A wish?  Okay, make me a fortune cookie!
Afraid of mimics?  Try to wear a ring of true seeing.
All monsters are created evil, but some are more evil than others.
Always attack a floating eye from behind!
An elven cloak is always the height of fashion.
Any small object that is accidentally dropped will hide under a larger object.
Balrogs do not appear above level 20.
Banana peels work especially well against Keystone Kops.
Be careful when eating bananas.  Monsters might slip on the peels.
Better leave the dungeon; otherwise you might get hurt badly.
Beware of the potion of nitroglycerin -- it's not for the weak of heart.
Beware:  there's always a chance that your wand explodes as you try to zap it!
Beyond the 23rd level lies a happy retirement in a room of your own.
Changing your suit without dropping your sword?  You must be kidding!
Cockatrices might turn themselves to stone faced with a mirror.
Consumption of home-made food is strictly forbidden in this dungeon.
Dark room?  Your chance to develop your photographs!
Dark rooms are not *completely* dark:  just wait and let your eyes adjust...
David London sez, "Hey guys, *WIELD* a lizard corpse against a cockatrice!"
Death is just life's way of telling you you've been fired.
Demi-gods don't need any help from the gods.
Demons *HATE* Priests and Priestesses.
Didn't you forget to pay?
Didn't your mother tell you not to eat food off the floor?
Direct a direct hit on your direct opponent, directing in the right direction.
Don't eat too much:  you might start hiccoughing!
Don't play hack at your work; your boss might hit you!
Don't tell a soul you found a secret door, otherwise it isn't a secret anymore.
Drinking potions of booze may land you in jail if you are under 21.
Drop your vanity and get rid of your jewels!  Pickpockets about!
Eat 10 cloves of garlic and keep all humans at a two-square distance.
Eels hide under mud.  Use a unicorn to clear the water and make them visible.
Engrave your wishes with a wand of wishing.
Eventually you will come to admire the swift elegance of a retreating nymph.
Ever heard hissing outside?  I *knew* you hadn't!
Ever lifted a dragon corpse?
Ever seen a leocrotta dancing the tengu?
Ever seen your weapon glow plaid?
Ever tamed a shopkeeper?
Ever tried digging through a Vault Guard?
Ever tried enchanting a rope?
Floating eyes can't stand Hawaiian shirts.
For any remedy there is a misery.
Giant bats turn into giant vampires.
Good day for overcoming obstacles.  Try a steeplechase.
Half Moon tonight.  (At least it's better than no Moon at all.)
Help!  I'm being held prisoner in a fortune cookie factory!
Hungry?  There is an abundance of food on the next level.
I guess you've never hit a mail daemon with the Amulet of Yendor...
If you are the shopkeeper, you can take things for free.
If you can't learn to do it well, learn to enjoy doing it badly.
If you thought the Wizard was bad, just wait till you meet the Warlord!
If you turn blind, don't expect your dog to be turned into a seeing-eye dog.
If you want to feel great, you must eat something real big.
If you want to float, you'd better eat a floating eye.
If your ghost kills a player, it increases your score.
Increase mindpower:  Tame your own ghost!
It furthers one to see the great man.
It's easy to overlook a monster in a wood.
Just below any trapdoor there may be another one.  Just keep falling!
Katanas are very sharp; watch you don't cut yourself.
Keep a clear mind:  quaff clear potions.
Kicking the terminal doesn't hurt the monsters.
Killer bees keep appearing till you kill their queen.
Killer bunnies can be tamed with carrots only.
Latest news?  Put 'rec.games.hack' in your .newsrc!
Learn how to spell.  Play NetHack!
Leprechauns hide their gold in a secret room.
Let your fingers do the walking on the yulkjhnb keys.
Let's face it:  this time you're not going to win.
Let's have a party, drink a lot of booze.
Liquor sellers do not drink; they hate to see you twice.
Lunar eclipse tonight.  May as well quit now!
Meeting your own ghost decreases your luck considerably!
Money to invest?  Take it to the local branch of the Magic Memory Vault!
Monsters come from nowhere to hit you everywhere.
Monsters sleep because you are boring, not because they ever get tired.
Most monsters prefer minced meat.  That's why they are hitting you!
Most of the bugs in NetHack are on the floor.
Much ado Nothing Happens.
Multi-player NetHack is a myth.
NetHack is addictive.  Too late, you're already hooked.
Never ask a shopkeeper for a price list.
Never burn a tree, unless you like getting whacked with a +5 shovel.
Never eat with glowing hands!
Never mind the monsters hitting you:  they just replace the charwomen.
Never play leapfrog with a unicorn.
Never step on a cursed engraving.
Never swim with a camera:  there's nothing to take pictures of.
Never teach your pet rust monster to fetch.
Never trust a random generator in magic fields.
Never use a wand of death.
No level contains two shops.  The maze is no level.  So...
No part of this fortune may be reproduced, stored in a retrieval system, ...
Not all rumors are as misleading as this one.
Nymphs and nurses like beautiful rings.
Nymphs are blondes.  Are you a gentleman?
Offering a unicorn a worthless piece of glass might prove to be fatal!
Old hackers never die:  young ones do.
One has to leave shops before closing time.
One homunculus a day keeps the doctor away.
One level further down somebody is getting killed, right now.
Only a wizard can use a magic whistle.
Only adventurers of evil alignment think of killing their dog.
Only chaotic evils kill sleeping monsters.
Only real trappers escape traps.
Only real wizards can write scrolls.
Operation OVERKILL has started now.
PLEASE ignore previous rumor.
Polymorph into an ettin; meet your opponents face to face to face.
Praying will frighten demons.
Row (3x) that boat gently down the stream, Charon (4x), death is but a dream.
Running is good for your legs.
Screw up your courage!  You've screwed up everything else.
Segmentation fault (core dumped).
Shopkeepers sometimes die from old age.
Some mazes (especially small ones) have no solutions, says man 6 maze.
Some questions the Sphynx asks just *don't* have any answers.
Sometimes "mu" is the answer.
Sorry, no fortune this time.  Better luck next cookie!
Spare your scrolls of make-edible until it's really necessary!
Suddenly, the dungeon will collapse...
Taming a mail daemon may cause a system security violation.
The leprechauns hide their treasure in a small hidden room.
The longer the wand the better.
The use of dynamite is dangerous.
There is a trap on this level!
They say that Demogorgon, Asmodeus, Orcus, Yeenoghu & Juiblex is no law firm.
They say that Geryon has an evil twin, beware!
They say that Medusa would make a terrible pet.
They say that NetHack bugs are Seldon planned.
They say that NetHack comes in 256 flavors.
They say that NetHack is just a computer game.
They say that NetHack is more than just a computer game.
They say that NetHack is never what it used to be.
They say that a baby dragon is too small to hurt or help you.
They say that a black pudding is simply a brown pudding gone bad.
They say that a black sheep has 3 bags full of wool.
They say that a blank scroll is like a blank check.
They say that a cat named Morris has nine lives.
They say that a desperate shopper might pay any price in a shop.
They say that a diamond dog is everybody's best friend.
They say that a dwarf lord can carry a pick-axe because his armor is light.
They say that a floating eye can defeat Medusa.
They say that a fortune only has 1 line and you can't read between it.
They say that a fortune only has 1 line, but you can read between it.
They say that a fountain looks nothing like a regularly erupting geyser.
They say that a gold doubloon is worth more than its weight in gold.
They say that a grid bug won't pay a shopkeeper for zapping you in a shop.
They say that a gypsy could tell your fortune for a price.
They say that a hacker named Alice once level teleported by using a mirror.
They say that a hacker named David once slew a giant with a sling and a rock.
They say that a hacker named Dorothy once rode a fog cloud to Oz.
They say that a hacker named Mary once lost a white sheep in the mazes.
They say that a helm of brilliance is not to be taken lightly.
They say that a hot dog and a hell hound are the same thing.
They say that a lamp named Aladdin contains a djinni with 3 wishes.
They say that a large dog named Lassie will lead you to the amulet.
They say that a long sword is not a light sword.
They say that a manes won't mince words with you.
They say that a mind is a terrible thing to waste.
They say that a plain nymph will only wear a wire ring in one ear.
They say that a plumed hat could be a previously used crested helmet.
They say that a potion of oil is difficult to grasp.
They say that a potion of yogurt is a cancelled potion of sickness.
They say that a purple worm is not a baby purple dragon.
They say that a quivering blob tastes different than a gelatinous cube.
They say that a scroll of summoning has other names.
They say that a shaman can bestow blessings but usually doesn't.
They say that a shaman will bless you for an eye of newt and wing of bat.
They say that a shimmering gold shield is not a polished silver shield.
They say that a spear will hit a neo-otyugh.  (Do YOU know what that is?)
They say that a spotted dragon is the ultimate shape changer.
They say that a stethoscope is no good if you can only hear your heartbeat.
They say that a succubus named Suzy will sometimes warn you of danger.
They say that a wand of cancellation is not like a wand of polymorph.
They say that a wide sword named Stormbringer attracts vortices.
They say that a wood golem named Pinocchio would be easy to control.
They say that after killing a dragon its time for a change of scenery.
They say that an amulet of strangulation is worse than ring around the collar.
They say that an attic is the best place to hide your toys.
They say that an axe named Cleaver once belonged to a hacker named Beaver.
They say that an eye of newt and a wing of bat are double the trouble.
They say that an incubus named Izzy sometimes makes women feel sensitive.
They say that an opulent throne room is rarely a place to wish you'd be in.
They say that an unlucky hacker once had a nose bleed at an altar and died.
They say that and they say this but they never say never, never!
They say that any quantum mechanic knows that speed kills.
They say that applying a unicorn horn means you've missed the point.
They say that blue stones are radioactive, beware.
They say that building a dungeon is a team effort.
They say that chaotic characters never get a kick out of altars.
They say that collapsing a dungeon often creates a panic.
They say that counting your eggs before they hatch shows that you care.
They say that dipping a bag of tricks in a fountain won't make it an icebox.
They say that dipping an eel and brown mold in hot water makes bouillabaisse.
They say that donating a doubloon is extremely pious charity.
They say that eating royal jelly attracts grizzly owlbears.
They say that eggs, pancakes and juice are just a mundane breakfast.
They say that everyone knows why Medusa stands alone in the dark.
They say that finding a winning strategy is a deliberate move on your part.
They say that finding worthless glass is worth something.
They say that fortune cookies are food for thought.
They say that gold is only wasted on a pet dragon.
They say that good things come to those that wait.
They say that if you can't spell then you'll wish you had a spell book.
They say that if you live by the sword, you'll die by the sword.
They say that if you play like a monster you'll have a better game.
They say that if you sleep with a demon you might awake with a headache.
They say that if you step on a crack you could break your mother's back.
They say that if you're invisible you can still be heard!
They say that if you're lucky you can feel the runes on a scroll.
They say that in the big picture gold is only small change.
They say that in the dungeon it's not what you know that really matters.
They say that in the dungeon moon rocks are really dilithium crystals.
They say that in the dungeon the boorish customer is never right.
They say that in the dungeon you don't need a watch to tell time.
They say that in the dungeon you need something old, new, burrowed and blue.
They say that in the dungeon you should always count your blessings.
They say that iron golem plate mail isn't worth wishing for.
They say that it takes four quarterstaffs to make one staff.
They say that it's not over till the fat ladies sing.
They say that it's not over till the fat lady shouts `Off with its head'.
They say that kicking a heavy statue is really a dumb move.
They say that kicking a valuable gem doesn't seem to make sense.
They say that leprechauns know Latin and you should too.
They say that minotaurs get lost outside of the mazes.
They say that most trolls are born again.
They say that naming your cat Garfield will make you more attractive.
They say that no one has ever walked to hell.
They say that no one knows everything about everything in the dungeon.
They say that no one plays NetHack just for the fun of it.
They say that no one really subscribes to rec.games.hack.
They say that no one will admit to starting a rumor.
They say that nurses sometimes carry scalpels and never use them.
They say that once you've met one wizard you've met them all.
They say that one troll is worth 10,000 newts.
They say that only David can find the zoo!
They say that only angels play their harps for their pets.
They say that only big spenders carry gold.
They say that only female monsters can lay eggs.
They say that orc shamans are healthy, wealthy and wise.
They say that playing NetHack is like walking into a death trap.
They say that problem breathing is best treated by a proper diet.
They say that quaffing many potions of levitation can give you a headache.
They say that queen bees get that way by eating royal jelly.
They say that reading a scare monster scroll is the same as saying Elbereth.
They say that real hackers always are controlled.
They say that real hackers never burn in hell.
They say that real hackers never sleep.
They say that shopkeepers never carry more than 20 gold pieces, at night.
They say that shopkeepers never sell blessed potions of invisibility.
They say that soldiers wear kid gloves and silly helmets.
They say that some monsters may kiss your boots to stop your drum playing.
They say that someone said that the stooges once played here, nyuck, nyuck.
They say that sometimes you can be the hit of the party when playing a horn.
They say that the NetHack gods generally welcome your sacrifices.
They say that the Three Rings are named Vilya, Nenya and Narya.
They say that the Wizard of Yendor has a death wish.
They say that the `hair of the dog' is sometimes an effective remedy.
They say that the best time to save your game is now before its too late.
They say that the biggest obstacle in NetHack is your mind.
They say that the gods are angry when they hit you with objects.
They say that the priesthood are specially favored by the gods.
They say that the way to make a unicorn happy is to give it what it wants.
They say that there are no black or white stones, only gray.
They say that there are no skeletons hence there are no skeleton keys.
They say that there is a clever rogue in every hacker just dying to escape.
They say that there is no such thing as free advice.
They say that there is only one way to win at NetHack.
They say that there once was a fearsome chaotic samurai named Luk No.
They say that there was a time when cursed holy water wasn't water.
They say that there's no point in crying over a gray ooze.
They say that there's only hope left after you've opened Pandora's box.
They say that trapdoors should always be marked 'Caution:  Trap Door'.
They say that using an amulet of change isn't a difficult operation.
They say that water walking boots are better if you are fast like Hermes.
They say that when you wear a circular amulet you might resemble a troll.
They say that when you're hungry you can get a pizza in 30 moves or it's free.
They say that when your god is angry you should try another one.
They say that wielding a unicorn horn takes strength.
They say that with speed boots you never worry about hit and run accidents.
They say that you can defeat a killer bee with a unicorn horn.
They say that you can only cross the River Styx in Charon's boat.
They say that you can only kill a lich once and then you'd better be careful.
They say that you can only wish for things you've already had.
They say that you can train a cat by talking gently to it.
They say that you can train a dog by talking firmly to it.
They say that you can trust your gold with the king.
They say that you can't wipe your greasy bare hands on a blank scroll.
They say that you cannot trust scrolls of rumor.
They say that you could fall head over heels for an energy vortex.
They say that you need a key in order to open locked doors.
They say that you need a mirror to notice a mimic in an antique shop.
They say that you really can use a pick-axe unless you really can't.
They say that you should always store your tools in the cellar.
They say that you should be careful while climbing the ladder to success.
They say that you should call your armor `rustproof'.
They say that you should keep your hands in your pockets around the gypsies.
They say that you should name your dog Spuds to have a cool pet.
They say that you should name your weapon after your first monster kill.
They say that you should never introduce a rope golem to a succubus.
They say that you should never sleep near invisible ring wraiths.
They say that you should never try to leave the dungeon with a bag of gems.
They say that you should remove your armor before sitting on a throne.
They say the gods get angry if you kill your dog.
This fortune cookie is the property of Fortune Cookies, Inc.
To reach heaven, escape the dungeon while wearing a ring of levitation.
Tourists wear shirts loud enough to wake the dead.
Tridents are for use underwater.
Try calling your katana Moulinette.
Ulch!  That meat was painted!
Unfortunately, this message was left intentionally blank.
Using a morning star in the evening has no effect.
Want a hint?  Zap a wand of make invisible on your weapon!
Wanted: shopkeepers.  Send a scroll of mail to: Mage of Yendor/Level 35/Dungeon.
Warning:  fortune reading can be hazardous to your health.
We have new ways of detecting treachery...
What a pity, you cannot read it!
When a piercer drops in on you, you will be tempted to hit the ceiling!
When in a maze follow the right wall and you will never get lost.
When you have a key, you don't have to wait for the guard.
Why are you wasting time reading fortunes?
Why bother casting fireballs in hell?
Wish for a master key and open the Magic Memory Vault!
Wizard expects every monster to do its duty.
Wow!  You could've had a potion of fruit juice!
You are destined to be misled by a fortune.
You can get a genuine Amulet of Yendor by doing the following:  --More--
You can protect yourself from black dragons by doing the following:  --More--
You feel like someone is pulling your leg.
You have to outwit the Sphynx or pay her.
You hear the fortune cookie's hissing!
You may get rich selling letters, but beware of being blackmailed!
You offend Shai-Hulud by sheathing your crysknife without having drawn blood.
You swallowed the fortune!
You want to regain strength?  Two levels ahead is a guesthouse!
You will encounter a tall, dark, and gruesome creature...

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3670

     Volume in drive A has no label
     Directory of A:\

    NETHACK  ZIP    307800   8-10-93   3:05p
    PKUNZIP  EXE     29378   2-01-93   2:04a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT      1771   8-10-93   4:04p
    GO       BAK      1771   8-10-93   4:03p
            5 file(s)     340751 bytes
                           19456 bytes free
