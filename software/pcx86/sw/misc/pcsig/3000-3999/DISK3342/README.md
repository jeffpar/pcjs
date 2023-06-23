---
layout: page
title: "PC-SIG Diskette Library (Disk #3342)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3342/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3342"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```
	   La Grande Armée copyright (c) 1991 by SDJ Enterprises, Inc.

				Version 1.01
	I. GETTING STARTED

           Printing the Rules:

	      The complete Grande Armée rules (v.101) are included in
	      the file RULES101.TXT. They are in standard ASCII format
	      and may be printed out using any word processing program
	      or with the following directions:

              1) Boot up DOS version 2.0 or higher.
              2) Put Start-Up Disk into default drive.
	      3) Turn on printer and align paper to top of page.
              4) Press the Ctrl and Print Screen keys simultaneously
                 to activate printer.
	      5) Key in TYPE RULES101.TXT at the DOS prompt.
              6) Press Enter.

	      The rules fit nicely onto standard 8.5 by 11 inch paper.

           Reading the Rules:

	      The rules are 28 pages  long  but  experienced  wargamers
              shouldn't  have any trouble reading through them quickly.
              For less experienced players,   I  suggest  skimming  the
              rules first then playing the game, then reading the rules
              more carefully.   Keep  in  mind  that  you don't have to
              remember all the rules, the computer will.  The rules are
              more or less for documentation and reference purposes.

           Single and Double Disk Drive Users:

              1) Boot up DOS version 2.0 or higher.
              2) Put Start-Up Disk into default drive.
	      3) Type GRANDE. Press Enter.
	      4) See RULES101.TXT, section 1.2 to continue.

           Hard Disk Users:

              1) Boot up DOS version 2.0 or higher.
	      2) Copy Start-Up Disk and Game Disk onto hard disk.
              3) Make sure hard disk is the default drive.
	      4) Type GRANDE. Press Enter.
	      5) See RULES101.TXT, section 1.2 to continue.

        II. HARDWARE REQUIREMENTS

           IBM(tm) PC and 100% Compatibles
           CGA, EGA or VGA graphics card
           512K memory
	   Supports Mouse and Joysticks

        III. REGISTRATION

           For your convenience, a blank registration form is included
	   in the file REGISTER.TXT.    It is in standard ASCII format
           and may be printed out using any word processing program or
           with the following directions:

              1) Boot up DOS version 2.0 or higher.
              2) Put Start-Up Disk into default drive.
              3) Turn On Printer.  Align paper.
              4) Press the Ctrl and Print Screen keys simultaneously
                 to activate printer.
	      5) Key in TYPE REGISTER.TXT at the DOS prompt.
              6) Press Enter.

	    Your generous contributions help ensure a steady flow  of
            new shareware products into the marketplace.

        IV. DEBUGGING

           We appreciate your help in tracking down unsightly bugs in
           this program.   Please send a complete description  of the
           error and how it occurred to:

                             SDJ Enterprises, Inc.
                             1551 Fawn Valley Dr.
                             St. Louis, MO  63131

                          or call (314) 966-5602.

        V. FILES

           On the Start-Up Disk:

	      README  .TXT   ASCII       Documentation program
	      RULES102.TXT   ASCII       La Grande Armée rules
	      REGISTER.TXT   ASCII       Blank registration form

	      USERLIB .EXE   executable  Library of common programs
              BRUN20  .EXE   executable  Microsoft (tm) library program
	      GRANDE  .EXE   executable  Notice of Copyright
	      ONCE1   .EXE   executable  Data program

	      ALPHNUM1.BIN   binary      Data file
	      BUCUARM1.BIN   binary      Data file

	      COVER3  .PIC   binary      Picture file
	      DONATE2 .PIC   binary      Picture file

           On the Game Disk:

	      STARTGA1.EXE   executable  Main Menu program
	      BRDSET1 .EXE   executable  Game set up program
	      GA1RUN2 .EXE   executable  Control and supply program
	      MOVEGA1 .EXE   executable  Movement and Combat program
	      BMSELGA1.EXE   executable  Build and Rally program

	      SCEN1   .GA    ASCII       Scenario 1 data
	      SCEN2   .GA    ASCII       Scenario 2 data
	      SCEN3   .GA    ASCII       Scenario 3 data

	      WEURMAP1.PIC   binary      Picture file
	      CEURMAP1.PIC   binary      Picture file
	      EEURMAP1.PIC   binary      Picture file

	      COVER2  .PIC   binary      Picture file

           On the User Disk:
 
	      README2 .TXT   ASCII       Documentation program

	      SCEN4   .GA    ASCII       Scenario 4 data
	      SCEN5   .GA    ASCII       Scenario 5 data
	      SCEN6   .GA    ASCII       Scenario 6 data
	      SCEN7   .GA    ASCII       Scenario 7 data
```
{% endraw %}

## REGISTER.TXT

{% raw %}
```
		  S D J   R E G I S T R A T I O N   F O R M
		 -------------------------------------------

     SDJ Enterprises, Inc.
     1551 Fawn Valley Dr.
     St. Louis, MO  63131   USA                               (314) 966-5602

     Please mail a check, cash or money order to the above address.   Credit
     cards are not accepted.  Outside the United States, add $3 shipping and
     send cash or checks drawn on USA banks.

    BIG THREE (v 2.01):  You control all the action from the Rock of Gibralter
    to the frozen streets of Moscow.   Recreate the fiercely fought battles of
    Tobruk, Stalingrad and many more.  Supports VGA, EGA and CGA graphics.
							       PRICE
       BASIC GAME (SHAREWARE VERSION- Hard drive required)     -----
	    All the software and documentation necessary
	    to play three challenging scenarios..................$12   _______
       REGISTRATION PACKET (Requires BASIC GAME)
	    Four new scenarios, scenario editor, sticker, map....$17   _______
       EXPANSION PACKET (Requires BASIC GAME)
	    Five additional scenarios............................$10   _______
       RULE BOOK (OPTIONAL)
	    Bound hardcopy of BIG THREE rule book................$10   _______

   BIG THREE (v 1.03): CGA graphics only, no hard drive required.
	    Includes REGISTRATION PACKET.........................$25   _______

   LA GRANDE ARMEE (v 1.01):  You control all the action from the Spanish
   plains to the Russian hinterland. Recreate the epic battles of Wargram,
   Waterloo and many others.
							       PRICE
       BASIC GAME (SHAREWARE VERSION)                          -----
	    All the software and documentation necessary
	    to play three challenging scenarios..................$12   _______
       REGISTRATION PACKET (Requires BASIC GAME)
	    Four new scenarios, complementary game map...........$17   _______
       NAPOLEON'S ART OF WAR
	    Detailed analysis of Napoleonic era warfare...........$6   _______
       RULE BOOK (OPTIONAL)
	    Bound hardcopy of La Grande Armee rule book...........$8   _______

    DRACULA IN LONDON (v 1.05): Track down and destroy the
    bloodthirsty vampire. Based on Bram Stoker's novel............$9   _______

    OUTSIDE THE UNITED STATES, ADD $3 SHIPPING........................._______
								       =======

    TOTAL..............................................................-------

	  Diskette:  [ ] 5.25 inch    [ ] 3.5 inch   [ ] High Density

    Name______________________________________________________________________

    Street____________________________________________________________________

    City, State_________________________ Zip_______ Phone ____ - ____ - ______


    Signature_______________________________________  Date ___________________

    Comments on reverse side: (Product improvements, questions, bugs, etc.)

```
{% endraw %}

## RULES101.TXT

{% raw %}
```



	       ┌────────────────────────────────────────────────────┐
	       │                                                    │
	       │                                                    │
	       │                                                    │
	       │                                                    │
	       │                                                    │
	       │                                                    │
	       │                                                    │
	       │                 Space Reserved for                 │
	       │                                                    │
	       │                                                    │
	       │                la Grande Armée logo                │
	       │                                                    │
	       │                                                    │
	       │                                                    │
	       │                                                    │
	       │                                                    │
	       │                                                    │
	       │                                                    │
	       │                                                    │
	       │                                                    │
	       └────────────────────────────────────────────────────┘

		 TABLE OF CONTENTS  (Version 1.01, Second Edition)

			      page                                         page
   1.1 INTRODUCTION............ 1   5.1 ROUTINE OF PLAY..................... 11
   1.2 Getting Started......... 1   5.2 Phase I- Count and display VP's..... 12
   1.3 Introductory Screen..... 1   5.3 Phase II- Allocate Military Points.. 13
				    5.4 Phase III- Supply Check and Muster.. 13
   2.1 THE GAME SCREEN......... 2       MUSTER ROLL TABLE................... 14
   2.2 The Game Map............ 2   5.5 Phase IV - Build/Rally Phase........ 14
   2.3 Special Terrain......... 3       British Military Aid................ 14
   2.4 Control................. 5       Building a Unit..................... 15
   2.5 Movement Restrictions... 5       Rallying a Unit..................... 15
   2.6 Date.................... 5   5.6 Phase V- Movement and Combat........ 16
   2.7 Player Turn............. 5       5.61 The Blinking Unit.............. 16
   2.8 Text Window............. 5       5.62 LONG MARCH FATIGUE TABLE....... 17
   2.9 SCROLL button........... 6       5.63 Fog of War..................... 17
   2.10 DIRECTION Buttons...... 6       5.64 Combat......................... 17
   2.11 END Button............. 6       5.65 Reinforce and Withdraw......... 18
   2.12 NEXT Button............ 6       5.66 Top Secret Movement (IMPORTANT).18
   2.13 Reinforce and Withdraw. 6       5.67 REINFORCEMENT FOG OF WAR TABLE. 19
   2.14 Military Points........ 7   5.7 Phase VI- Destroy Unsupplied Units.. 19
					SIEGE TABLE......................... 19
   3.1 HQ & UNIT DESCRIPTIONS.. 7
   3.2 Zone-of-Control (ZOC)... 7   6.0 SCENARIO DESCRIPTIONS............ 20-26
   3.3 Units................... 8
   3.4 ID Numbers.............. 9   7.0 GLOSSARY, SHORT CUTS, EXHIBIT.... 27-28
   3.5 Stacking................ 9
   3.6 Garrisons............... 9
   3.7 Morale and Fatigue...... 9
				    HARDWARE REQUIREMENTS:
   4.1 INPUT DEVICES........... 9   -----------------------------
   4.2 Keyboard............... 10   IBM(tm) PC and 100% Compatibles
   4.3 Joystick............... 10   CGA, EGA or VGA graphics card
   4.4 Mouse.................. 11   512K memory
   4.5 Multiple Methods....... 11   Supports Mouse and Joystick(s)









				      (1)

          1.1 INTRODUCTION

          La Grande Armée is the ultimate Napoleonic campaign game.
          You control all the action from the inhospitable  Iberian
          peninsula  to the  frozen Russian hinterland.   Recreate
          the  epic  and fiercely fought battles  of Friedland  and
          Waterloo.    Build infantry,  artillery  and  cavalry  to
          conduct campaigns abroad or defend your capital.   Grande
          Armée gives you all this in an  easy-to-use  format  plus
          great graphics.

          Each player assumes supreme command of the French, Allied
          or Neutral forces in  Europe during  1805-1816.   Players
          can choose from three scenarios   (register today and get
          4 addition scenarios) or a previously saved game. Players
          that  perform  better  than their historical counterparts
          will normally win and those that under perform will lose.

          1.2 Getting Started

          Boot up DOS 2.0 or higher and put the START-UP diskette into
          the default  disk drive.    Type  GRANDE  and press [ENTER].
          Wait  for the  program  to load.   After  the copyright  and
          donation request screens appears,  follow  the instructions.

          La Grande Armée will often ask you  to  press the 1st or 2nd
          button to accomplish a task.  When  using the  keyboard, the
          1st button is the space bar (or Enter) and the 2nd button is
          the "N" key.  NOTE: This is a change from BIG THREE. The "N"
          key replaces "L" key.  I felt that "next" is more descriptive
          than "later" on most of the operations being performed.

          When using a joystick, the 1st  button is the  main  trigger
          button  and the  2nd button is the secondary trigger button.

          When  using a mouse, the 1st  button is the left button  and
          the  2nd button is  the right  button.  The "Esc" key can be
          used  to cancel  erroneous input  or halt combat.

          1.3 Introductory Screen

          The Introductory screen shows a picture of a French Imperial
          Guard cavalryman.   The Introductory screen also shows a
          message stating which input devices are available,  which
          one is currently active and the Main Menu (see below).



















                                      (2)
          MAIN
          MENU    FUNCTION
          ----    ------------------
          New     Loads and briefly describes one of seven scenarios.
          Load    Loads a previously saved game into memory.
          Save    Saves the current game in progress (filename.GA)
          Start   Starts the currently loaded scenario or saved game.
          Input   Displays the input menu (see below).
          Quit    Quit the game and exit to DOS.
          F1 key  Toggles the sound "on" and "off".
          F2 key  Toggles automatic game save (autosave) "on" and "off".
          F9 key  Temporarily exits to DOS (COMMAND.COM must be present
                  in default drive or accessible through PATH command).
                  Type "EXIT" at DOS prompt to return to the MAIN MENU.

          While playing a scenario, you may want to return to the
          MAIN MENU to start a new scenario or save the current
          scenario.  To do so, press the "Esc" key at the Display
          Victory Points Phase (after the music stops playing.)

          INPUT
          MENU    FUNCTION
          -----   ------------------
          Active  Displays and changes the current active input device.
          Player  Displays a player's input device.   Also  allows that
                  player  to  change  devices using DEVICE (see below).
          Device  Changes a player's input device (if available).
          Exit    Returns to the MAIN MENU.

          2.1 THE GAME SCREEN

          After selecting a pre-made scenario or loading a saved game,
          move  the highlighter  over START  and  hit the  1st or  2nd
          button.  Wait for Grande Armée to load the game map and unit
          locations  into  memory.    After it's done loading,  Grande
          Armée will display the game screen.

	  The game screen (see Exhibit 1 on page 28) presents the game
          map,  date, player  turn,  text window,  SCROLL button,  six
          DIRECTION buttons,  the  END  button,  the  NEXT button, the
          REINFORCE and WITHDRAWAL buttons, and each countries'   MP's
          (military points).    Each  of these are described in detail
          below.

          2.2 The Game Map

          The game map depicts a broad swath of Europe,  encompassing
          all territories  from Portugal in the west to Holy Russia in
          the east.    Due to  space limitations,  many of the smaller
          countries' and cities' names are abbreviated   (see glossary
          for list  of abbreviations) or omitted.













                                      (3)

          The Empire of France is tri-color (red, white and blue),
          Spain and Austria  are white, Prussia is black,  Holy Russia
          is green and Britain is red.

          The Rhine is a loose Confederation of German states.

          Some scenarios  only use a  subset of the game  map, leaving
          the rest  of the  map inaccessible.   Also, some  areas that
          normally aren't considered prohibited may be designated that
          way,  depending  on  the  scenario.  Players  are  urged  to
          familiarize themselves  with the  game map  at the  start of
          each scenario by entering the SCROLL mode (see below).

          The  game  map is  superimposed  over  a hexagonal  grid  of
          ten  rows and  thirty  columns, for  a  total of  300 areas.
          (Register  today  and  receive  a  complementary  game map.)
          Each area  is about 100 kilometers  in diameter.   Only  ten
          rows and twelve columns can  appear at any one time.  To see
          the rest of the map, enter the SCROLL mode (see below).

          2.3 Special Terrain

          Many   areas  have   special  terrain,   such  as   capitals
          (designated  by  a star),  major cities (red circles), minor
          cities (black circles), mountains, forests, marshes and sea.
          Some areas are a combination of terrains  (e.g., major city
          and mountain).

              CITIES- Cities include capitals, major and minor cities.
              All cities can hold one infantry, militia or guard unit
              as a garrison.  All cities cost one movement to enter.

              CAPITALS  - There  are  seven capital areas, one French,
              Spanish,  Austrian,  Prussian,  British and two Russian.
              Each  capital is designated by a red star.

              Capitals are  the main  source of supply.   Units inside
              them cannot be destroyed due to a lack of supply.

              Paris is the only source of supply for all French units.
              British and other allied countries can draw supply  from
              any allied capital.    Exception:  The  Spanish  capital
              of Madrid is not a source of supply  for  allied  units.
              Spanish units are never out of supply and so don't  need
              a source of supply.

              All new units must be built in a controlled Capital of the
              host country (i.e., French units in Paris, British units in
              London, etc.).   Exception:  Spanish units can be built in
              any controlled Spanish city.  Also, Russia has two capitals
              to choose from.













                                      (4)

              Occupying an enemy countries' capital will prevent that
              country from building any new units and eliminate it as
              a source of supply.

              Friendly capitals  are worth 4 VP's  each and occupied
              enemy capitals are worth only 1 VP each.

              Infantry and Militia units inside capitals add +3 to their
	      muster die roll (see section 5.4, or MUSTER ROLL TABLE on p.14)

              MAJOR CITY - Major cities are shown as red circles. Friendly
              major cities are worth 2 VP's  each while  occupied  enemy
              major cities are worth only 1 VP each.

              Infantry and Militia units inside major cities add +2 to their
              muster die roll.

              MINOR CITY -  Minor cities are black circles. Friendly minor
              cities are worth zero VP's.

              Infantry and Militia units inside minor cities add +2 to their
              muster die roll.

              PORTS- All major and minor cities along the coast that touch
              the ocean are considered  to be ports.   Ports  are  a source
              of supply for British and other allied units if a British
              garrison is present in that city.

              FOREST- Forests are depicted as trees.  All forests cost two
              movements to enter. Cavalry units don't operate very well in
              forests.  Therefore, cavalry units attack enemy units in
              forests at -1 and  defend at +1 in the forest.

              MOUNTAINS - Mountain areas are  difficult to move in and
              attack.  Mountains cost two moves to enter. All attacks
              against enemy units in mountains are at -1.

              Infantry and Militia units in mountains add -2 to their
              muster die roll.

              MARSH - Marsh areas are  difficult to move in and afford
              the defender little room for maneuver.  All attacks against
              enemy units in marsh areas are at +2.  All attacks out of
              marsh areas are at -2. Marsh areas cost two moves to enter.

              Infantry and Militia units in marsh add -2 to their
              muster die roll.

              SEA AREA - Only British units can move across sea areas.
              Entering (exiting) a sea area from (to) a land area requires
              the expenditure of all remaining moves.  However, once out
              to sea, British units may enter other sea areas at no cost.












                                      (5)

              Infantry and Militia units on the sea are not subject to
              a muster die roll.

              BLACK  ARROWS  - The  game  map  has two  solid  black
              arrows.  One  is located  north of Lisbon, Portugal and
              the other is northwest of Gibralter (extreme SW corner).

              The  arrow  north of Portugal (To  Gibr) represents the
              direction British units must move when trying to move around
              Portugal to Gibralter.  The  arrow northwest of Gibralter
              (To Atl) represents  the direction units must be moved to go
              around Portugal into the Atlantic Ocean.

          2.4 Control

          All non-prohibited land areas  start out being controlled by
          either the French, Allied  or Neutral player.  No  player can
          ever control  a prohibited  or sea  area.  To gain  control of
          an area, simply  move an infantry, militia, cavalry or guard
          unit into it.

          Only controlled areas can be in supply during your turn.

          2.5 Movement Restrictions

	  French units cannot enter the Russian Hinterland (column 30).
	  Note, Moscow is not part of the Russian Hinterland.

          Spanish militia units can only move inside Spain and Portugal.
          Note: The Spanish infantry may move outside Spain and Portugal.

          Only British units may move into the Atlantic Ocean.  British
          units may not enter the Baltic Sea.

          2.6 Date

          The current season (spring, summer, autumn or winter) and year
          (1805-1826).  Note, Spring runs from March  to May, Summer from
          June to August, Autumn from September to November and Winter
          from December to February.

          2.7 Player Turn

          The current player turn - French, Allied or Neutral.  Note, the
          enemy player is called the defensive player.

          2.8 Text Window

          The  Text   window  displays   a  variety  of   messages  to
          communicate what's going on to the players.














                                      (6)

          2.9 SCROLL button

          Press the  SCROLL button  to enter  the scroll  mode.  Then,
          press  the left or right DIRECTION  keys to  move the map in
          the desired  direction.   To exit  the  SCROLL  mode,  press
          the SCROLL button or the 2nd button.

          The scroll mode also allows  you to gather information about
          a particular area.  Move the cursor  over the area and press
          the 1st button.   The text window displays  who controls the
          area, its  supply status  and any  special terrain,  such as
          capital, major city,  or sea area.

          You  can also  enter  the scroll  mode  during the  BUILD/RALLY
          phase by highlighting SCROLL and pressing the 1st button.  Also,
          the game map will automatically scroll  when you move a unit off
          the "edge" using a DIRECTION button.

          2.10 DIRECTION Button

          There are  six direction  buttons located  immediately below
          the SCROLL button.   You can move a unit or  scroll the game
          map (if you're in the scroll mode) by moving the cursor over
          the desired  DIRECTION button  and pressing the  1st button.
          Note, when  your enter the  SCROLL mode, the left and right
          direction key are highlighted since they are the only direction
          buttons that are applicable.

          2.11 END Button

          The END  button ends the  blinking unit's movement  for the
          remainder of the season and causes a new unit to start blinking.

          2.12 NEXT Button

          The NEXT button causes the next unit to start blinking.  Note,
          pressing the 2nd button accomplishes the same thing.

          2.13 Reinforce and Withdraw

          The  Reinforce and Withdraw Buttons  allow the defensive player
          to  move  his units  during  the  enemies' turn in an effort to
          reinforce an area or retreat from an area.  Reinforcing and
          withdrawing units can only move one area and may only do it once
          per season.

          To move a defensive unit as a reinforcement, the unit must not
          be  in a ZOC and must end up in a ZOC.  To move during withdraw,
          the unit must be in a ZOC and cannot enter a ZOC.  All defensive
          movement must occur in controlled areas and is subject to normal
          movement restrictions.

          British units cannot move into sea areas during defensive movement.











                                      (7)

          Due to the fog of war, reinforcing units do not always arrive on
          time and sometimes may not arrive at all. Therefore each reinforcing
          unit must face a reinforcement fog of war roll.

          Withdrawals can sometimes turn into routs if they are not
          executed properly.  A lot depends on the morale of the
          withdrawing troops and the terrain they are moving in to.
          Therefore each withdrawing unit must face a rout roll (see
	  section 5.65, or ROUT TABLE on page 19.)

	  Attacking enemy units cost no movement points. Exception:
	  attacking a withdrawing unit cost 2 movement points, thereby
	  limiting the number of potential attacks.

          2.14 Military Points

          The bottom right  hand corner of the game  map displays each
          countries' current number of Military Points (MP's) next to its
          respective flag.

          3.1 HQ'S AND UNIT DESCRIPTIONS

          Each scenario has it's own unique set of units and when they
          are  available.   Players  should   refer  to  the  Scenario
          descriptions  for  details.

          French units are tri-color (red, white and blue) with black
          borders.

          Spanish units have a white background with red foreground and
          borders.

          Austrian units have a white background with black foreground
          and borders.

          Prussian units have a black background with white foreground
          and borders.

          Russian units have a green background with red foreground and
          black borders.

          British units have a red background with black foreground and
          borders.

	  3.2 Zone-of-Control (ZOC)

	  Units  exert a ZOC  into adjacent land areas. Exception:
	  garrisons do not exert a ZOC.  A ZOC interferes with enemy
	  movement, retreat and supply.  Note, a ZOC has no effect on
	  friendly units.

	  All units must expend an additional movement point to exit a
	  ZOC.  Units cannot retreat into a ZOC.

	  A line of supply can be traced into a ZOC but not through it.









                                      (8)

	  3.3 Units

	  All infantry, artillery, militia and cavalry are called
	  "units".  HQ's are not in this group. An area is considered
	  occupied if it contains any friendly units.

	  Guard and artillery units are identical in every way except
	  for their name.

       Cost to
        Build   Type      Summary
        -----  ------    ------------------
	  9    Infantry - Depicted by a soldier.
                        - 5 moves maximum.
                        - Maximum Morale of 3.
                        - Destroyed if not kept in supply.
                        - May garrison cities.
                        - Subject to long march fatigue.
                        - Subject to rout during withdrawal.

	 10   Guard and - Depicted by a cannon.
              artillery - 4 moves maximum.
                        - Maximum Morale of 4.
                        - Destroyed if not kept in supply.
                        - May garrison cities.
                        - Subject to long march fatigue.
                        - Not subject to rout during withdrawal.

	  7    Militia  - Depicted by a soldier.
			- 4 moves maximum.
                        - Maximum Morale of 2.
                        - Destroyed if not kept in supply.
                        - May garrison cities.
                        - Subject to long march fatigue.
                        - Subject to rout during withdrawal.

	  7    Cavalry  - Depicted by a cavalryman.
                        - 7 moves maximum.
                        - Maximum Morale of 2.
                        - Destroyed if not kept in supply.
			- Attack forests at -1, Defend forest at +1
			- Attack garrisons at -2
                        - Subject to long march fatigue.
                        - Not subject to rout during withdrawal.

	  5    HQ's     - Depicted by a flag.
			- Effect combat by adding +1, +2 or +3 to die roll.
			- 7 moves maximum.
			- Maximum Morale of zero.
			- Do not exert ZOC on adjacent areas.
			- Cannot take control of an area.
			- Destroyed if not kept in supply.
			- Not subject to long march fatigue.
			- Not subject to rout during withdrawal.










                                      (9)

          3.4 ID Numbers

          Each unit has  an ID name and/or number to help the player's
          keep track of their units.  The ID number appears in the 1st
          line of the  text  window.  The text window also shows the
          unit's morale (shown as M#) and fatigue (shown as F#).

          3.5 Stacking

          There are no stacking restrictions.   However, each city may
          only have one garrison at a time.

          When  more than  one unit  occupies the  same area,  a small
          number appears  in the  lower right hand  corner of  the top
          unit.   This number  represents  the total  number of  units
          "stacked" in the area and is  meant to help the players keep
          track of where their units are.   Exception:  Cavalry units
          were often used as "screens" to keep the enemy from learning
          about troop strength and movement. Therefore, when a cavalry
          unit is  "on top" of the stack, the stacking number will not
          appear.  This effectively screens the units  underneath from
          your opponent.

          When attacking a stack of enemy units, the "top" unit in the
          stack is automatically the unit that gets attacked. Exceptions:
          HQ's cannot be attacked until all other units are destroyed
          and garrisons cannot be attacked until all other cavalry,
	  infantry, militia and artillery units are destroyed.

	  3.6 Garrisons

	  Only infantry, artillery and militia may garrison a city.
	  To become a garrison, press the END button while the unit
	  is blinking and in a city.  Then answer YES to the prompt,
	  "Want to garrison city?".  If the city already has a garrison,
	  you will not be given the prompt.  To quit being a garrison,
	  the unit must move out of the area.

	  3.7 Morale and Fatigue

	  Each unit has a morale and fatigue number. Morale can go down dur-
	  ing combat or muster. It can only be raised during the RALLY phase.

	  Both the attacking and defending unit's fatigue increase by one
	  after each round of combat.  Fatigue may also increase during a
	  long march.  Your unit's fatigue is automatically reduced back
	  to zero at the start of your turn.

          4.1 INPUT DEVICES

          Grande Armée features an easy to use "point and click" input
          system that  allows players  to concentrate their  energy on
          developing and implementing a winning strategy.  Each player
          needs only one input device (mouse, joystick or keyboard) to
          play the  entire game   Exception: players  may periodically
	  need to  use the "Esc"  key to cancel erroneous  input.








                                     (10)

          The  program  automatically  checks  to  see  which  devices
          are available and assigns one to each player.    To find out
          which device each player is assigned, use the INPUT function
          on the MAIN Menu and then the PLAYER function.    To  change
          input devices, use the DEVICE function.

          Players may select to have the mouse as the only input device.

          If  the keyboard  is the  only available  device,  Grande Armée
          allows all the  players to share the keyboard.   If only two
          devices are  available, the Allied and  Neutral player should
          share the keyboard.

          La Grande Armée  supports  four   different  input  devices;
          the keyboard,  joystick A,  joystick  B and  the Microsoft (tm)
          mouse.  (To use mouse, install mouse software first.)

          4.2 Keyboard

          During  your  turn,  use  the numeric  keypad  to  move  the
          highlighter  or   the  cursor  in  the   desired  direction.
          Depending on the circumstances,  pressing the space bar will
          erase the text window and continue the game, or initiate the
          highlighted option,  or move  the blinking unit  towards the
          cursor, etc.  Pressing the "N"  key will also erase the text
          window and continue  the game, or cause a new  unit to start
          blinking, or exit  the BUILD, RALLY or SCROLL modes.

          During  your  opponent's turn, you may activate the Reinforce
          or Withdraw option by moving the cursor over the option and
          pressing the 1st button.   Alternatively, you may press  the
          "Q" key  to  highlight the  Reinforce  option or  press the
          "Z" key to  highlight  the Withdraw  option.   You may
          activate the highlighted option  by pressing the "A" key.
          After  you've activated one of  the Defensive options, you
          must select a unit to move or press the second button to exit.

          4.3 Joystick

          During your turn, tilt the  joystick to move the highlighter
          or  cursor  in the  desired  direction.   Pressing the  main
          trigger button is equivalent to  pressing the space bar (see
          above).  Pressing the secondary trigger button is equivalent
          to pressing the "N" key (see above).

          During your  opponent's turn,  tilting the joystick  up will
          highlight the  Reinforce  option.  Tilting it  down will
          highlight  the Withdraw  option.  Pressing the 1st or
          2nd  button  will activate  the  highlighted option.   After
          you've activated one of  the Defensive options, you must select
          a unit to move or press the second button to exit.













                                      (11)

          4.4 Mouse

          During  your   turn,  rolling   the  mouse  will   move  the
          highlighter or  cursor in  the desired  direction.  Pressing
          the left  mouse button is  equivalent to pressing  the space
          bar  (see  above).   Pressing  the  right  mouse  button  is
          equivalent to pressing the "N" key (see above).

          During your  opponent's turn, rolling the  mouse upward will
          highlight  the Reinforce  option option.   Rolling it  downward
          will highlight the  Withdraw option.  Pressing the left
          mouse button  will activate  the highlighted  option.  After
          you've activated  one of the Defensive  option, you must select
          a unit to move or press the second button to exit.


          4.5 Multiple Methods

          To provide  flexibility, Grande Armée offers  several different
          ways to accomplish most  tasks.  (Exception: the END button
          is unique.)  For example,  players can  move their  units by
          pressing a direction  button on the game map,  or by putting
          the  cursor  on an  unoccupied  area  and pressing  the  1st
          button.  Also, players  may cause a different  unit to blink
          (prepare to move) by moving the cursor over the NEXT button
          on the game map and pressing  the 1st button, or by pressing
          the 2nd  button, or  by moving the  cursor over  the desired
          unit and pressing the 1st  button.  (Note, the latter method
          only works  if the desired unit  is more than one  area away
          from the current blinking unit.)

          5.1 ROUTINE OF PLAY

          Each player has  one turn per season.   Each player's turn is
          divided  into  the following six phases:

          Phase I -  Count and display VP's.
          Phase II - Allocate MP's (spring season only).
          Phase III- Initial Supply Check and Muster.
          Phase IV - Build/Rally Phase.
          Phase V  - Movement and Combat.
          Phase VI - Destroy Unsupplied Units (if applicable).

          Each of these phases is described in detail below.

          After completing Phase VI, the  next player takes his turn,
          and so  on.  After each  player has  had a turn,  the season
          will change.  After the winter season, the year will change.

	  At the start of each turn, all active player's units have
	  their fatigue reduced to zero.













                                      (12)

          5.2 Phase I - Count and display VP's.

          If the autosave is on, Grande Armée will automatically save the
          current game in progress  under the file name  SAVEGAME.GA .

          At the beginning of each player's turn, Grande Armée counts and
          prints his current VP total in the text window while playing
          the  musical theme.   It also  highlights the  corresponding
          level  of victory.   Note, if  your level  of victory  is an
          Absolute Defeat, nothing will be highlighted.

          At the end of the musical theme, if you want to change input
          devices, start  a NEW game  or SAVE the current  game, press
          the "Esc"  button to  return to the  MAIN MENU.   Select the
          START option to  return to the current game. WARNING: if you
          press NEW or LOAD you will erase the current game in memory.

          Victory  Points (VP's)  are awarded  by occupying  capitals
          and major cities.  Friendly  capitals  are worth 4 VP's each
          and friendly major cities are worth 2 VP's each.  All occupied
          enemy capitals and major cities are worth 1 VP each.

          There are six levels of victory.

          Absolute Victory (AV)-  The results are good  enough to have
          changed the outcome of the war and its aftermath.

          Strategic Victory (SV)- The results  are good enough to have
          changed  the  course of  the  war  but  not its  outcome  or
          aftermath.

          Tactical Victory  (TV)- The  results are  good but  not good
          enough  to  have  altered  the  course of  the  war  or  its
          aftermath.

          Tactical  Defeat (TD)-  The  results are  bad,  but not  bad
          enough  to  have  altered  the  course of  the  war  or  its
          aftermath.

          Strategic Defeat  (SD)- The results  are bad enough  to have
          changed  the  course of  the  war  but  not its  outcome  or
          aftermath.

          Absolute Defeat- The results are  bad enough to have changed
          the  outcome  of  the  war and  its  aftermath.   (Note,  an
          absolute  defeat has  no  corresponding level  of VP's.   It
          occurs  automatically  when  a  player  has  less  than  the
          required number of VP's for a strategic defeat.)

          At the end of the game, the player with the highest level of
          victory is the  winner.  If the players have  the same level
          of victory, the game is considered a draw.












                                      (13)

          In  many   scenarios,  one  side  starts   with  a  military
          advantage.   To make  for balanced  play, the  superior side
          usually starts  at a  lower level of  victory.  So  don't be
          discouraged if your side starts with a strategic or absolute
          defeat.  It's  only a  reflection of your  superior military
          strength.  Also realize  the onus of attack  rests with you.
          Likewise,  an inferior  military force  usually starts  with
          enough VP's for an  absolute or strategic victory.  However,
          maintaining  it against  a superior  military force  for the
          entire scenario is not easy.

          5.3 Phase II - Allocate Military Points (Spring Season Only)

          In spring, each player is  allocated one Military Point (MP)
          for each VP plus 1 MP  for every four unspent MP's from the
          prior year.  Military Points  are needed  to build and rally
          units.

          Austria, Prussia, Russian and Spain only get MP's equal to
          the number of VP's within their respective borders.  Any
          military points accruing from occupying The Rhine, Holland
          or other minor countries will automatically go to Britain.
          Britain may then give MP's back to other allied countries
          via military aid.

          5.4 Phase III - Supply Check and Muster.

          Armies in the field require continuous communication and enormous
          amounts of food and ammunition to function normally.  Units are
          considered to be in supply if they begin their turn in a supplied
          area.

          An area is supplied if you can trace a  contiguous  path  of
          controlled areas, free of enemy units and enemy ZOC, back to
          a controlled supply source.  Note, supply can be traced into
          an enemy ZOC but not through it.

          IMPORTANT:  supply CANNOT be traced through a ZOC even if a
          friendly unit is present.

          Garrison units do not exert a ZOC and therefore can only block
          supply through the area they occupy.

          Supply sources include friendly capitals and garrisoned
          port cities (British only).  Enter the SCROLL mode to
          check an areas' current supply status and for supply sources.

          All units that start their turn in an unsupplied area cannot
          move or attack  for the entire season.  If they are still out
          of supply at  the end of the season (Phase VI), they are
	  destroyed.  Exception: Garrisons may survive (see section 5.7,
	  or SIEGE TABLE on page 19).

	  Russian units in the Russian Hinterland are always in supply.










                                      (14)

          Muster

          All friendly units must undergo a muster subject to the
          following modifiers.

          MUSTER ROLL TABLE
          -----------------
          Die Roll plus modifiers (below)    1  2  3  4  5  6
          Muster Results                    M2 M2 M1 M1 M0 M0

          Where M# equals a subtraction of # from the unit's morale.

          Modifiers

          +  Unit's Morale
          -2 if winter
	  +3 if unit is in a capital, major city or major city with mountains
	  +2 if unit is in a minor city or minor city with mountains
          -1 if unit is in a forest
	  -2 if unit is in mountains
          -3 if unit is in a marsh
          -2 if in unsupplied area
          -1 if French unit inside Russia, Spain or Portugal

          5.5 Phase IV - Build/Rally Phase.

          British Military Aid (if applicable)

          If Britain is active in the scenario, Britain may transfer
          MP's to any other allied country by moving the highlighter
          over the countries' flag and pressing the 1st button.  Press
	  the 2nd button to exit.

	  Build/Rally Phase

          The  Build/Rally phase  allows players  to replace destroyed
          units, build new units and rally demoralized units. Note, if
          a player doesn't have any  MP's remaining or  any  available
          units  to build, the BUILD option is inaccessible.

          After first entering this phase  a menu will appear with the
          following options:  BUILD  RALLY  SCROLL  END.

	  If the player has units available to build and at least five
	  MP's remaining,  then underneath the  BUILD option appears a
          unit that may be built  by moving the highlighter over BUILD
          and pressing the  1st button.  You will also  see the unit's
          ID number immediately to the right.

          To  enter the  scroll mode,  move the cursor over the SCROLL
          button and press the 1st button.  Press the 2nd button to exit.

          To end the Build/Rally Phase, move the highlighter over END
          and press the 1st button.










                                      (15)

          Building a Unit

          To build a  unit, first move the highlighter  over BUILD and
          select the desired unit.  You may select the desired unit by
          scrolling up and  down the list of available  units with the
          "8" or "2"  key (keyboard), tilting the joystick  up or down
          (joystick) or rolling the mouse up or down (mouse).  Keep an
          eye on the ID number to  the right of the buildable units to
          keep track of them.

          After  selecting  a  unit,  press the  1st  or  2nd  button.
	  Infantry cost 9 MP to build,   militia  and  cavalry cost  7
	  MP's,  artillery cost 10  MP's and HQ's cost 3 MP's.  If you
	  don't have enough MP's remaining to build the unit,  an error
	  message appears in the text window.

          If you make a mistake and accidentally build the wrong unit,
          immediately  press the  "Esc" key.   This should  remove the
          unit and replace your spent MP's.

          Rallying a Unit

          To rally a unit, move the cursor over the unit and press the
          1st button to start it blinking.   Then move the cursor over
          the Rally button and press the 1st button again. To exit the
          RALLY phase, press the 2nd button.

          The lower a unit's morale the more expensive it is to rally.
	  To increase a unit's morale from zero  (demoralized)  to one
	  costs 4 MP's.  To increase it from one to two costs  3 MP's.
	  To increase it from two to three costs 2 MP's.   To increase
	  morale from three to four (guard and artillery only)  cost 1
          MP.
                    INCREASE UNIT'S MORALE:
                          from    to       MP COST
                          ----    ---      -------
                            0      1          4
                            1      2          3
                            2      3          2
                            3      4          1

	 Units may only be rallied once per season.  The message "UNIT
	 ALREADY RALLIED" will appear at the end of the first line in the
	 text window if the unit has already been rallied this season.




















				      (16)

	  5.6 Phase V - Movement and Combat.

          5.61 The Blinking Unit

          One of the  units on the game screen will automatically start
          to blink.   The blinking unit is the only unit that can move.
          To make  a different  unit blink, press  the 2nd  button, or
          move the  cursor over the NEXT  button on the game  map and
          press the  1st button,  or place the  cursor over  a another
          unit and  press the  1st button.   (Note, the  latter method
          will only work  if the blinking unit is not  adjacent to the
          new unit.)

          Press the  END button to  end the blinking  unit's movement
          for the rest of the season and make the next unit blink.

          The text  window displays  the blinking  units' description,
          morale, fatigue, moves remaining and if the unit is a garrison.

          To move the blinking unit,  move the cursor over the desired
          DIRECTION button  and press the 1st  button.  Alternatively,
          put the  cursor in  an unoccupied,  or enemy  controlled, or
          adjacent area and press the 1st button.

          Normally, all infantry on  the screen blink first, followed
          by the militia, artillery, HQ's and cavalry.  After all units
          on the current screen have moved,  Grande Armée automatically
          searches and scrolls  for other units  located in other parts
          of the game map.

          To enter combat,  attempt to move the blinking unit into the
          same area as an enemy unit.   This can be done by moving the
          unit one area at a time  (the recommended way) or by putting
          the cursor over the desired  enemy unit and pressing the 1st
          button.  This will cause the unit to approach the enemy unit
          one area at a time (but not necessarily in the way you would
          like.  Your unit  may accidentally  encounter a  prohibited
          area or a different enemy unit than planned.)

          If  you accidentally  move the  blinking unit  in the  wrong
          direction,  immediately press  the "Esc"  key.  This  should
          return your unit to it's  original location and restore it's
          used moves.

          If you accidentally  cause combat to occur,  press the "Esc"
          key  anytime before  the final  random number  is generated.
          Your move  and the  combat will be  cancelled.  If  you wait
          until after the final number has been generated, combat will
          occur.

          All units that use their entire movement allowance are
          subject to a long march fatigue roll.












                                      (17)

	  5.62 LONG MARCH FATIGUE TABLE
	  -----------------------------
          Die Roll plus modifiers (below)   1  2  3  4  5  6
          Fatigue Results                  F2 F2 F1 F1 F0 F0

          Where F# equals an addition of # to the unit's fatigue.

          Modifiers

	  -  Unit's current fatigue
          -2 if winter

	  5.63 Fog of War

          All units may lose part or all of their remaining moves due
	  to the "fog of war".  For every move, a unit faces a 2% chance of
          losing all remaining moves and a 3% chance of losing just 1
          move.

	  5.64 Combat

          Combat  occurs when  your  unit attempts  to  enter an  area
          occupied by  an enemy  unit.  Note, demoralized units (morale
          of zero) cannot initiate attacks.  First, Grande Armée generates
          a random number between one and  six (simulating the roll of a
          die).  Then  the appropriate  combat modifiers are  added to
          the  random  number  to  get the  total  and  determine  the
          battles' outcome.   A total  of less  than one  provides the
          same result  as a one and  a total above seven  provides the
          same result as a seven.

          In  general, a high total is better for the attacker and a
          low total is better for the defender.

          To stop combat  from occurring, press the  "Esc" key anytime
          before  the last  random  number  is generated.   Otherwise,
          combat will proceed as normal.

          Combat Results Table

          Die Roll plus combat modifiers     1  2  3  4  5  6  7
          Combat Results                    A3 A2 A1 S1 D1 D2 D3

          A# - Attacker loses # morale
          S1 - Attacker and Defender both lose one morale each
          D# - Defender loses # morale

	  After each attack, both the attacker and defender's fatigue
	  is increased by one.















                                      (18)

          Combat Modifiers
          Positive modifiers benefit the attacker, negative the defender.

          + Attackers Morale
          - Attackers Fatigue
          - Defenders Morale
          + Defenders Fatigue
          + attackers HQ's modifier (must be in attacker's area)
          - defenders HQ's modifier (must be in defender's area)
          -2 if attacking a garrison (no modifiers below apply)
          -1 if attacking across a river
          -1 if cavalry attacking into forest
          +1 if cavalry defending in  forest
	  +2 if cavalry is attacking a unit with lower morale
	  -2 if cavalry attacking a garrison
          -1 if attacking into mountains
          +2 if attacking into marshes
          -2 if attacking from marshes

           If a unit's morale is reduced to zero, it is demoralized (DEM)
           and may not initiate any combat until rallied.    If a unit's
           morale falls below zero, it is destroyed and can only reappear
           if rebuilt.

	  5.65 Reinforce and Withdraw

          During your opponent's turn, you may activate the Reinforce
	  or Withdraw  option.  This allows you to move your  units or
	  change the unit that is "on top" (See section 3.5 Stacking,
	  paragraph 3)  All fatigue from your prior turn remains in effect.

	  Units and leaders are allowed only 1 defensive move per season.

          To activate  a defensive  option, move the  highlighter over
          the  desired  option  and  press  the  1st  or  2nd  button.
          Exception:  when  using the  keyboard, press  the "Q" key to
          move the  defensive cursor  up and  the "Z"  key to  move it
          down.  To activate the  defensive option, press the "A" key.

          Defensive units cannot initiate any attacks.

	  5.66 Top Secret Movement (IMPORTANT)

	  The defensive player is not allowed to look at the screen
	  until after the offensive player makes his first attack.
	  If the offensive player hasn't yet made an attack, Grande
	  Armée automatically recognizes this and ignores both the
	  REINFORCE and WITHDRAW options.

	  After the offensive player makes his first attack,  the
	  REINFORCE and WITHDRAW options may be activated at any
	  time.












                                      (19)

	  5.67 REINFORCEMENT FOG OF WAR TABLE
	  -----------------------------------
          Due to the fog of war, reinforcing units do not always arrive on
          time and sometimes may not arrive at all. Therefore each reinforcing
          unit must face a reinforcement fog of war roll.

          Die Roll plus modifiers (below)   1  2  3  4  5  6
          Rout Results                      X  X  X  X  X

          Where X means the unit fails to reinforce.

          Modifiers

	  +  Unit's morale
	  -2 if militia
	  +1 if cavalry

          ROUT TABLE
          ----------
          Withdrawing under fire can be dangerous unless executed
          properly.  Many withdrawals have turned into routs. Each
          withdrawing unit must face a rout roll.

          Die Roll plus modifiers (below)   1  2  3  4  5  6
	  Rout Results                     M2 M2 M1 M1 M0 M0

	  Where M# equals a subtraction of # from the unit's morale.

          Modifiers

          +  Unit's morale
	  -2 if over river
	  -2 if into marsh

	  Attacks against units after they withdraw cost the attacker
	  two movement points.  Normally, attacks cost no movement points.

	  5.7 Phase VI - Destroy Unsupplied Units (if applicable).

          Any friendly units  that began the season out of supply
          and are still out of supply are now destroyed. Exception:
          Unsupplied garrisoned units are subject to a siege roll.

          SIEGE TABLE
          -----------
          Die Roll                          1  2  3  4  5  6
          Results                           M5 M4 M4 M3 M3 M2

          Where M# equals a subtraction of # from the unit's morale.

          Units  destroyed  by  lack   of  supply  are  available  for
          rebuilding  during  the  next BUILD/RALLY phase.












                                      (20)

          6.0 SCENARIO DESCRIPTIONS

          It is recommended that the scenarios be played in order.

          SCENARIO 1- AUSTRIAN CHALLENGE, 1805-1806

          Situation:  In 1805, the recently self-crowned Emperor of
          France, Napoleon,  and his army sat alongside the English
          channel preparing for an invasion of Britain.   Meanwhile,
          the Allied governments of Austria, Russia and Britain plotted
          how best to deal with Napoleon's growing power.  To this end,
          they dispatched Archduke Charles and 120,000 troops towards
          Italy and 70,000 troops under General Mack to Ulm (near
          Stuttgart). From the east, Russia sent 100,000 troops under
          Kutusov to join the battle.  Napoleon was somewhat caught off
          guard but knew he had to act quickly.

          Start: Summer, 1805        End: Summer, 1806

          Players:     Starting        Victory Points
                         MP's          SD TD TV SV AV
          French          8            13 15 18 20 22 (French)
          Austria         8
          Russian         4
          Britain         2             8 10 14 15 18 (Allied)

          France: At War
                         At Start  1805
                         --------  ----
            Infantry         9
            Militia                  2
            Artillery        2
            Cavalry          2
            HQ's: NAPOLEON +2, DAVOUT +1, LANNES +1

          Austria: At War                    Russia: At War
                         At Start                             At Start
                         --------                             --------
            Infantry        2                   Infantry         4
            Militia         6                   Cavalry          1
            Cavalry         2                   HQ's: KUTUSOV +1
            HQ's: CHARLES +1

          Aftermath: In an unprecedented act of logistics,  Napoleon
          marched his newly formed "Grande Armée" across the Rhine and
          towards the Danube, thereby encircling the Austrian forces
          at Ulm.   Further south, Charles and his army relinquished
          the initiative by withdrawing towards Vienna and the advancing
          Russian army.  During winter negotiations, Napoleon feigned
          weakness and lured the Allies into making an ill-conceived
	  attack near Austerlitz (across the Danube northeast of
          Vienna).  The battle ended in a complete French victory.












                                      (21)

          SCENARIO 2- PRUSSIA'S TURN, 1806-1807

          Situation:  Napoleon's spies informed him that Prussia
          had secretly joined the recent Allied effort, only to
          abandon them after the disaster at Austerlitz.  The emperor
          resolved that Prussia would pay for this treachery in land,
          bounty and a good deal of humiliation.  Therefore, it was
          only a matter of time before the Prussian army sought to
          restore the nation's pride.  To aid in this effort, the Russian
	  Tsar once again sent his troops westward.

          Start: Autumn, 1806        End: Autumn, 1807

          Players:     Starting        Victory Points
                         MP's          SD TD TV SV AV (French)
          French         10            16 18 20 21 22
          Prussia         6
          Russian         6
          Britain                       6  8 10 12 16 (Allied)

          France: At War
                         At Start  1806
                         --------  ----
            Infantry         9
            Militia                  2
            Artillery        2
            Cavalry          3
            HQ's: NAPOLEON +2, DAVOUT +1, SOULT +1

          Prussia: At War                      Russia: At War
                         At Start                             At Start
                         --------                             --------
            Infantry        1                   Infantry         7
            Militia         6                   Artillery        1
            Cavalry         2                   Cavalry          2
                                                HQ's: BENNIGSEN +1


          Aftermath: The poor, brave Prussian soldiers never stood
          a chance.  Their leadership was aged and inflexible, their
          tactics and muskets obsolete.  As the Prussians moved slowly
          southwest, the French pounced on them at Jena and Auerstadt
	  (near Leipzig).   Only one rouge Prussian corp survived the
          battle to join the oncoming Russians.  Napoleon advanced his
          army into Warsaw and eventually defeated the elusive Russians
          at the battle of Friedland (near Königsberg).  The ensuing
          negotiations resulted in the infamous Treaty of Tilsit.
          Napoleon's sphere of influence now stretched from the Spanish
          border all the way to the edges of Holy Russia.















				      (22)

          SCENARIO 3- SPANISH QUAGMIRE, 1808-1813

          Situation:  Having reached the zenith of his power,
          Napoleon settled back into the more mundane tasks running
          his court.  Still, he couldn't forget the impertinent
          British and eventually sent a contingent into Spain to
          oust them from their Portuguese bases.  Napoleon then used
          his growing military presence in Spain to overthrow the
          corrupt Spanish monarchy.  However, the fiercely nationalistic
          Spanish people revolted and a bitter guerilla war of atrocity
          and counter-atrocity ensued.  Napoleon then decided he had
          better handle the matter himself.

	  Start: Summer, 1808        End: Winter, 1809

          Players:     Starting        Victory Points
                         MP's          SD TD TV SV AV
          French          6            16 18 20 21 22 (French)
          Spanish         4
          British         8             6  8 10 12 16 (Allied)

          France: At War
                         At Start  1808
                         --------  ----
            Infantry         8
            Militia                  2
            Artillery        1
            Cavalry          1
            HQ's: NAPOLEON +2, SOULT +1, LANNES +1

	    Special: Napoleon automatically returns to Paris
	    for the remainder of the scenarion at the start
	    of the Spring 1809 turn.

          Spain: At War                      British: At War
                         At Start                             At Start
                         --------                             --------
            Infantry        1                   Infantry         1
            Militia         8                   Militia          3
                                                HQ's: MOORE +1

	  Aftermath:  Napoleon quickly routed the ill-equipped Spanish
          patriots leaving the road to Madrid wide open.  However, the
          Emperor's subordinates made several key mistakes that prevented
          him from achieving a decisive victory.  Meanwhile, British troops
          led by Moore, marched eastward although too late to help Madrid.
          Moore continued his advance hoping to surprise the French or at
          least serve as a distraction.  When Napoleon learned he might be
          able to annihilate the only operating British field army, he issued
          new orders and the chase was on.  Moore headed north towards a
          port of evacuation with much of the French army closely behind.
          Moore suffered a mortal wound while fending off French attacks
          during the evacuation.  Moore's bold moves had disrupted Napoleon's
          plans and gained valuable time for the Spanish people to prepare
	  for a ruthless guerilla war.









				      (23)

          SCENARIO 4- CRISIS ON THE DANUBE, 1809-1810

          Situation: With Napoleon's attention and much of his best
	  troops and officers focused on Spain, the ruling Habsburgs
          of Austria began rebuilding their army, eager to avenge
          their lost territory and pride.  This new army was more
          nationalistic in character and strongly supported by the
          people.  In spring, Archduke Charles launched his attack.

          Start: Spring, 1809        End: Summer, 1810

          Players:     Starting        Victory Points
                         MP's          SD TD TV SV AV
          French          16           16 17 18 19 20 (French)
          Austria          4            4  8  9 12 14 (Allied)

          France: At War
                         At Start  1809
                         --------  ----
            Infantry         7
            Militia          3
            Artillery        1
            Cavalry          1
            HQ's: NAPOLEON +2, DAVOUT +1, MASSENA +1

          Austria: At War
                         At Start
                         --------
            Infantry        5
            Militia         6
            Cavalry         2
            HQ's: CHARLES +1

          Aftermath:  The French Army of the Rhine was caught off
          guard in scattered positions but managed to stop the
          Austrian advance at the Danube River (near Munich) by
          threatening the Austrian line of supply.  The Austrians
          were eventually forced into a headlong retreat towards
          Vienna along the north bank of the Danube.  In his first
          attempt to cross the river northeast of Vienna, Napoleon
          launched a hastily prepared attack and suffered heavy losses.
          His second try resulted in the bloody battle of Wargram but was
          successful in forcing the Austrians to negotiate an armistice.





















				      (24)

          SCENARIO 5- RUSSIAN CAMPAIGN, 1812-1813

          Situation:  The Franco-Russian peace that resulted from the
          Treaty of Tilsit was doomed to failure because of the divergent
          interests of both parties.  For centuries, Russian Tsars coveted
          control of Istanbul and access to the Mediterranean, which the
	  French absolutely resisted. Also, Russia resented French influence
          in Poland (eastern Prussia).  But the final straw was the Russian
	  Tsar's refusal to enforce the costly "Berlin Decrees", a French
          imposed trade embargo on all British goods.  Napoleon moved the
          600,000 troops of Grande Armée eastward and began the massive
          preparations for the invasion of Russia.

	  Start: Spring, 1812        End: Winter, 1813

          Players:     Starting        Victory Points
                         MP's          SD TD TV SV AV
          French          10           18 20 22 23 24 (French)
          Russia           6
          Britain          6            8  9 10 11 12 (Allied)

          France: At War
                         At Start  1812
                         --------  ----
            Infantry         8
            Militia          2
            Artillery        1
            Cavalry          2
	    HQ's: NAPOLEON +2, DAVOUT +1

          Russia: At War
                         At Start
                         --------
            Infantry         9
            Artillery        1
            Cavalry          3
            HQ's: KUTUSOV +1, BAGRATION +1

          Aftermath:  Even after intense planning, the invasion of
	  Russia proved too great a task.  La Grande Armée's advance was
          slowed by the great baggage trains needed to feed and supply
          it in the vast, desolate Russian steppes.   Therefore,  the
          strategic envelopments employed in earlier campaigns never
          materialized as the elusive Russians conducted a strategic
          withdrawal all the way to Moscow.  As winter approached,
          Napoleon brooded in Moscow waiting for the Tsar to sue for
	  peace.  Instead, the Tsar realized that "general winter" was
	  near and the burning city of Moscow would provide little
	  comfort in the coming months.  Finally, Napoleon issued orders
	  to withdraw but was hounded by the Russians all the way to
	  Warsaw.  The Russian campaign resulted in the complete
          destruction of la Grande Armée.












				      (25)

          SCENARIO 6- BATTLE OF NATIONS, 1814-1815

          Situation:  After the disastrous retreat from Moscow,
          Napoleon abandoned his shattered army near Warsaw and
          headed to Paris to build a new army.  This new army was
          comprised of raw conscripts, old men and walking wounded.
          They were distinctly short of marching and foraging skills
          as well as cavalry, but had a superior officer corps and
	  artillery arm.  Once formed, this new army marched eastward
	  to face four oncoming allied armies.

          Start: Summer, 1814        End: Summer, 1815

          Players:     Starting        Victory Points
                         MP's          SD TD TV SV AV
          French          18           11 14 16 21 24 (French)
          Austria          8
          Prussia          8
          Russia          10
          Britain         12           23 25 27 30 32 (Allied)

          France: At War
                         At Start  1814
                         --------  ----
            Infantry        12
            Artillery        1
            Cavalry          2       1
            HQ's: NAPOLEON +2, DAVOUT +1, SOULT +1, LANNES +1

          Austria: At War                    Russia: At War
                         At Start  1814                    At Start
                         --------  ----                    --------
            Infantry        6                Infantry          6
            Militia                  2       Cavalry           3
            Cavalry         2                Artillery         1
            HQ's: SCHWARZENBERG +1           HQ's: BAGRATION +1, BERNADOTTE +1
                                             Note: Russian units are used to
                                             represent the Swedish in Berlin.
          Prussia: At War
                         At Start
                         --------
            Infantry        3
            Militia         2
            Cavalry         1
            HQ's: BLUCHER +2

          Aftermath:  The allied generals adopted the Trachenberg Plan,
          which called for any allied army facing a massed French attack
          to withdraw while the other armies converged on the French
          line of supply.  This strategy worked well as Napoleon marched
          his green army to and fro, never able to initiate a decisive
          battle.  When the Allied armies finally converged on Napoleon
          at Leipzig, it appeared he and his army would still escape across
          the river towards the Rhine and safety.  Then a hapless corporal
          accidentally blew up the bridge and trapped the rear guard.
          A near perfect withdraw ended in disaster.








				      (26)

          SCENARIO 7- WATERLOO, 1815-1816

	  Situation:  After two disastrous French campaigns, the Allies
          occupied Paris, restored the old French monarchy and banished
          Napoleon to the island of Elba.  Ten months later, the emperor
          sensed his chance and set sail for France.  Upon his arrival,
          he convinced the troops sent to arrest him to join his cause.
          The allies immediately met in Vienna and pledged over 500,000
	  troops to  destroy "the Corsican ogre" once and for all.

          Start: Summer, 1815        End: Summer, 1816

          Players:     Starting        Victory Points
                         MP's          SD TD TV SV AV
          French          12            8  9 12 16 21 (French)
          Austria         10
          Prussia         10
          Russia          10
          Britain         15           43 47 49 50 51 (Allied)

          France: At War
                         At Start  1815
                         --------  ----
            Infantry         7       5
            Militia          2       4
            Artillery        1       1
            Cavalry          1       3
            HQ's: NAPOLEON +2

          Austria: At War                       Russia: At War
                         At Start  1815                       At Start  1815
                         --------  ----                       --------  ----
            Infantry        4        2          Infantry          7       2
            Militia         6                   Militia           1       2
            Cavalry         3                   Artillery         1
            HQ's: CHARLES +1, SCHWARZENBERG +1  Cavalry           4
                                                HQ's: BAGRATION +1, KUTUSOV +1

          Prussia: At War                    British: At War
                         At Start                             At Start
                         --------                             --------
            Infantry        3                   Infantry         1
            Militia         4                   Militia          3
            Cavalry         1                   Artillery        1
	    HQ: BLUCHER +2                      HQ's: WELLINGTON +3

          Aftermath:  There were only two armies immediately available to
          the allies, the British-Dutch and the Prussians.  Napoleon decided
          to attack these two armies before they joined up in hopes of a
          quick victory.  But Napoleon underestimated the fighting spirit
          of the British redcoats and their leader, Lord Wellington.  The
          redcoats took everything Napoleon threw at them.  When Napoleon
          saw the Prussian army approaching, he decided it was now or never
          and committed the Imperial Guard to crack the British lines. Instead,
          the Guard reeled back under a hail of fire.  The Guard's retreat
          shattered the morale of the entire army.  Napoleon's reign had
          now come to an end and a relative period of peace settled over
          Europe for the next 100  years.






				      (27)

          7.0 GLOSSARY, SHORT CUTS, EXHIBIT

          GLOSSARY

          Major Powers          Capital(s)

          EMPIRE OF FRANCE      Paris
          SPAIN                 Madrid
          AUSTRIAN EMPIRE       Vienna
          PRUSSIA               Berlin
          HOLY RUSSIA           St. Petersburg, Moscow
          BRITAIN               London

          Minor Countries

          DEN - Denmark
          HOLL - Holland
          IT - Italy
          PORT - Portugal
          The Rhine - Group of Independent German States
          SW - Switzerland
          SWEDEN

          Major Cities

          Amst - Amsterdam              Lisb - Lisbon
          Brus - Brussels               Liep - Liepzig
          Buda - Budapest               Mil - Milan
          Copen - Copenhagen            Mun - Munich
          Frft - Frankfurt              Ports - Portsmouth
          Gnva - Geneva                 Prag - Prague
          Gibr - Gibralter              Stock - Stockholm
          Han - Hanover                 Stut - Stuttgart
          Inns - Innsbruck              Tur - Turin
          Kiev - Kiev                   Wars - Warsaw
          Konig - Königsberg

          Other Abbreviations and definitions:

          To Gibr - To Gibralter around Portugal
          To Atl - To the Atlantic Ocean around Portugal

          MP or MP's - Military Points  are needed to build  new units
                       or rally demoralized units.

          VP or VP's - Victory  Points determine  a  players level  of
                        victory and therefore the winner.

          1st button - On mouse is the left button.
                       On joystick is the main trigger button.
                       On keyboard is the space bar.

          2nd button - On mouse is the right button.
                       On joystick is the secondary trigger button.
                       On keyboard is the "N" key.

          "Esc" key - The escape key on the keyboard.







				      (28)

	 Exhibit 1- The Game Screen
	 ┌───────────────────────────────────────────────╥──────────╖
	 │                                               Grande Armée
	 │                                               ║    SDJ   ║
	 │                                               ╠══════════╣
	 │                                               ║  SCROLL  ║\
	 │                                               ╠═════╦════╣ \
	 │                                               ║  \  ║  / ║  \
	 │                                               ╠═════╬════╣   \
	 │                                               ║  <- ║ -> ║    \
	 │                                               ╠═════╬════╣     \
	 │                   (Game Map)                  ║  /  ║  \ ║ Button
	 │                     (Area)                    ╠═════╬════╣  Area
	 │                                               ║ END ║NEXT║    /
	 │                                               ╠═════╩════╣   /
	 │                                               ║ Reinforce║  /
	 │                                               ╠══════════╣ /
	 │                                               ║ Withdraw ║/
	 │                                               ╠══════════╣
	 │                                               ║French    ║\
	 │                                               ║Spanish   ║ \
	 │                                               ║Austrian  ║Military
	 ╞════════╤════════╤═════════════════════════════╣Prussian  ║ Point
	 │ (Date) │(Player)│           (Text)            ║Russian   ║ Area
	 │ (Area) │ (Turn) │           (Area)            ║British   ║ /
	 └────────┴────────┴─────────────────────────────╨──────────╜/

	 Game Map Area (Section 2.2)....... European theatre of operations.

	 Date Area (Section 2.6)........... The current season and year.

	 Player Turn (Section 2.7)......... The current player turn.

	 Text Window (Section 2.8)......... Displays a variety of messages.

	 SCROLL button (Section 2.9)....... Press to enter the scroll mode.

	 DIRECTION Buttons (Section 2.10).. Move a unit or scroll game map.

	 END Button (Section 2.11)......... Ends the blinking unit's movement.

	 NEXT Button (Section 2.12)........ Causes a new unit to blink.

	 Reinforce (Section 2.13).......... Move reinforcing units.

	 Withdraw (Section 2.13)........... Move withdrawaing units.

	 Military Points (Section 2.14).... Each countries' Military Points.



	 Copyright (c) 1989 by SDJ Enterprises, Inc., St. Louis, MO  63131

	 All rights reserved.  No part of this publication may  be reproduced,
	 stored in a retrieval system,  or transmitted,  in any form or by any
	 means, electronic, mechanical, photocopying, recording, or  otherwise,
	 without the express, prior written permission of SDJ Enterprises, Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3342

     Volume in drive A has no label
     Directory of A:\

    ALPHNUM1 BIN      1362   5-20-89   2:55p
    BRUN20   EXE     69454   1-16-87  11:44a
    BUCUARM1 BIN       302  12-27-89  11:30a
    COVER2   PIC     16392   2-26-91  10:46p
    DONATE2  PIC     16392   9-04-91   5:58p
    GRANDE   EXE      9632  11-25-91   9:06p
    ONCE1    EXE     19584  11-25-91   9:07p
    README   TXT      4896   9-22-91   6:18p
    REGISTER TXT      2907  12-09-91   8:43p
    RULES101 TXT     74534  12-09-91   8:47p
    USERLIB  EXE    103331  11-25-91   9:04p
    GO       BAT        51   1-28-93   6:56a
    SHOW     EXE      2040   9-12-88  10:48a
           13 file(s)     320877 bytes
                           34816 bytes free
