---
layout: page
title: "PC-SIG Diskette Library (Disk #1063)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1063/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1063"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FRP GAME MASTER UTILITY"

    The FRP GAME MASTER UTILITY is set up to be generally compatible with
    Advanced Dungeons and Dragons and its many variants.  FRP is very
    flexible in its structure, and sacrifices some compatibility to maintain
    flexibility.
    
    FRP's utilities take the manual labor out of playing Dungeons and
    Dragons. Everything done with paper, pen, and dice can now be done with
    the keyboard. These utilities are compatible with Advanced Dungeons and
    Dragons.
    
    DICE ROLLING UTILITY -- critical hits, fumbles, double damage, D100,
    D20, D12, D10, D8, D6, D4, any number of dice with modifiers, display
    monster information, roll monster hit points, and edit hit points.
    
    RANDOM ENCOUNTERS UTILITY -- generates random encounters for 10
    different areas, each with different probabilities.
    
    RANDOM TREASURE UTILITY -- treasure types A-Z, gem value, jewel value,
    edit, and view treasure data.
    
    GAME PARAMETER UTILITY -- lets you alter critical hit, fumble, double
    damage, and encounter probabilities.  The timer can be set, and combat
    die is selectable for special damage tables (except fumble).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1063.TXT

{% raw %}
```
Disk No: 1063
Program Title: FRP GAME MASTER UTILITY version 2.12
PC-SIG version: 1.2

The FRP GAME MASTER UTILITY is set up to be generally compatible with
ADVANCED DUNGEONS AND DRAGONS(tm) and its many variants.  FRP is very
flexible in its structure, and sacrifices some compatibility to maintain
flexibility.  The program has the following features to begin play:

These utilities take the manual labor out of playing Dungeons and
Dragons.  Everything done with paper, pen, and dice can now be done from
the keyboard.  These utilities are compatible with Advanced Dungeons and
Dragons.

DICE ROLLING UTILITY critical hits, fumbles, double damage, D100, D20,
D12, D10, D8, D6, D4, any number of dice with modifiers, display monster
information, roll monster hit points, and edit hit points.

RANDOM ENCOUNTERS UTILITY generates random encounters for ten different
areas, each with different probabilities.

RANDOM TREASURE UTILITY treasure types A-Z, gem value, jewel value,
edit, and view treasure data.

GAME PARAMETER UTILITY lets you alter critical hit, fumble, double
damage, & encounter probabilities.  The timer can be set and combat die
is selectable for special damage tables (except fumble).

Usage:  DND Game Utility/Database.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

FLOPPY   BAT  Floppy disk installation batch file.
FRPDATA  ARC  Archived data files.
FRPPROG  ARC  Archived program file.
HARD     BAT  Hard disk installation batch file.
INSTALL  BAT  Installation instructions batch file.
PKXARC   COM  Unarchiving program.
README   TXT  Text file.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## CGU.DOC

{% raw %}
```












                        CHARACTER GENERATION AND UTILITY


                                  Version 1.2











                     By W. Jeff Meier & Bill S. Hitchcock

                           A SOFTWARE MINES PRODUCT

                             Copyright 1988, 1989




































                            FIRST THINGS FIRST!

                    USE THE DOS DISKCOPY COMMAND TO BACKUP
             CGU AND ITS ASSOCIATED FILES TO ANOTHER FLOPPY DISK


                  IBM PC is the registered trademark of
                     INTERNATIONAL BUSINESS MACHINES


                  ADVANCED DUNGEONS & DRAGONS and AD&D
                     is the registered trademark of
                              TSR Games


                            Software Mines
                        2401 Copperfield Ave.
                        Ponca City, OK 74604


                              DISCLAIMER

       Software Mines, and/or the author(s) of this product
       specifically disclaim all warranties, expressed, or implied.
       In no event shall Software Mines, and/or the author(s) of
       this product be held liable for any loss or damage including
       but not limited to any incidental, or consequential damages.


                          LICENSE AGREEMENT

       This product is copyrighted and all rights are reserved just
       like a book. Copying this product for others is not allowed.
       You may not sell this product.
















                               Page 2


                           INTRODUCTION

       Congratulations! You have just acquired Character Generation
       and Utilities, CGU, for the IBM PC. Before beginning to use
       CGU you should read this manual completely to fully to
       understand CGU's capabilities.

       CGU was designed to be fully compatible with ADVANCED
       DUNGEONS AND DRAGONS(tm) (AD&D) and its variants. We
       STRONGLY  recommend the purchase of these rules from TSR, it
       is our feeling that the game cannot be played without them.
       CGU is not a game in itself and is only meant to be used
       with AD&D or its variants.

       This program is completely menu driven and provides the
       following features to aid play:


         *  Character generation using any of the five methods
            given in the DUNGEON MASTERS GUIDE and UNEARTHED
            ARCANA.

            This program will roll dice for abilities and allow you
            to select:  race, class, alignment, sex, and psionics
            if abilities allow them.

            The program automatically rolls for: age, height,
            weight, secondary skill, level, hitpoints and starting
            money.

         *  Storage of characters to disk.

            FRP Version 2.0 interfaces with these stored
            characters and future products from Software Mines
            (Stores and Equipment Utility and Spell Book Utility)
            will outfit these characters and create spell books for
            them. A maximum of 128 characters may be stored.

         *  Output of the stored characters to printer.

         *  Complete menu driven editing of the stored characters.


         *  Game Parameter Utility that allows you to set minimums
            of each character generation method and set limits on
            starting level.

         *  Screen Parameter Utility that allows you to alter the
            screen colors if a color display adapter is in use.

         *  Ability to evoke Fantasy Role Playing Utility and Spell
            Book Utilities.

         *  An on-line help screen that describes editing utilities
            and display color choices.


                               Page 3


       CGU requires the following files:


           CGU.EXE     -    Main program

           CHRCTRS.CGU -    Character list file (created by CGU)

           DATA.CGU    -    Parameter file


       CGU requires the following hardware:

           IBM PC or Compatible w/ 320K, one 360K floppy disk
           drive, MDA, CGA, or Hercules Display Adapters, DOS 2.1
           or later.










































                               Page 4


                            TABLE OF CONTENTS



            INTRODUCTION      .........................   3

            TABLE OF CONTENTS .........................   5

            STARTING CGU ..............................   6

            HOW TO USE CGU ............................   7

            MAIN MENU .................................   8

            METHOD 1 ..................................   9

            METHOD 2 ..................................  11

            METHOD 3 ..................................  13

            METHOD 4 ..................................  15

            METHOD 5 ..................................  17

            SCREEN PARAMETERS .........................  18

            CHARACTER GENERATION LIMITS................  19

            CHARACTER FILE UTILITIES ..................  21

                 Add Character  .......................  21

                 Delete Character .....................  22

                 Display Character ....................  22

                 Print Character ......................  22

                 Edit Character .......................  23

                 Change to Dual Classed ...............  28

                 Increment All Character Ages .........  29

                 Import Character And Print Files .....  30

            FILE STRUCTURE ............................  31

                 DATA.CGU .............................  32

                 CHRCTRS.CGU ..........................  44

                 RACE.PRN .............................  45

                 CLASS.PRN ............................  45


                               Page 5


                            STARTING CGU


       If you are starting CGU for the first time, backup CGU to
       another floppy using the DOS DISKCOPY command.

       If you wish to install CGU on your hard disk, create the FRP
       directory with the DOS MKDIR command. For example, if your
       hard disk is C: then type MKDIR C:\CGU and press return.
       Copy the CGU files to your harddisk with the DOS COPY
       command, for example type COPY A:*.* C:\CGU and press
       return.

       ** NOTE **

         If you want, you can put CGU in another directory. FRP
         (also SBU and SEU) can use the characters if you define a
         path for it in your AUTOEXEC.BAT file. Do this with the
         DOS SET command. For example, if your CGU files will be in
         a directory named GAME and FRP in the FRP directory, then
         put the following two lines in the AUTOEXEC.BAT file:

         SET CGU=C:\GAME
         SET FRP=C:\FRP

         If you run out of environment string space, you can add
         more by adding the following statement to your CONFIG.SYS
         file if you have DOS 3.1 or greater.

         SHELL=d:path\filename.ext d:path /P/E:para

         d:path=drive name and full path name to the command
         processor, filename.ext=file name of command processor,
         /P=stay permenant (is required),/E:para=sets the initial
         space reserved for the environment with [para] being the
         number of 16-byte paragraphs or bytes.

         example:  SHELL=C:\COMMAND.COM C:\ /P/E:30

       To start CGU:

          Select the default drive by typing A: and pressing
          return.

          Type CGU and press return.

          For harddisk users:

            Select the default drive. For example, type C: and
            press return.

            Select the CGU directory by typing CD\CGU and press
            return.

            Type CGU and press return.


                               Page 6


                            HOW TO USE CGU


       CGU is a menu driven program. To move through the program's
       options the following system is used.


            ENTER                  -  Selects highlighted choice
                                      on menu

            UP ARROW               -  Moves highlight up

            DOWN ARROW             -  Moves highlight up

            RIGHT ARROW            -  Moves highlight right on some
                                      displays

            LEFT ARROW             -  Moves highlight left on some
                                      displays

            PAGE UP                -  Moves to top of page or
                                      previous page on some
                                      displays

            PAGE DOWN              -  Moves to bottom of page or
                                      next page on some displays

            HOME                   -  Moves to the top of the first
                                      page on some displays

            END                    -  Moves to the bottom of the
                                      last page on some displays

            HIGHLIGHTED CHARACTER  -  Current selection

            F1                     -  Displays help screen





















                               Page 7


                                MAIN MENU


       The main menu has the following choices:


            *  METHOD 1           - Rolls character using Method 1
                                    from pg. 11 of the Dungeon
                                    Masters Guide.

            *  METHOD 2           - Rolls character using Method 2
                                    from pg. 11 of the Dungeon
                                    Masters Guide.

            *  METHOD 3           - Rolls character using Method 3
                                    from pg. 11 of the Dungeon
                                    Masters Guide.

            *  METHOD 4           - Rolls character using Method 4
                                    from pg. 11 of the Dungeon
                                    Masters Guide.

            *  METHOD 5           - Rolls character using Method 5
                                    from pg. 74 of the Unearthed
                                    Arcana.

            *  SCREEN PARAMETERS -  Allows selection of display
                                    colors if a CGA is available.

            *  CHARACTER GENERATION LIMITS - Allows selection of
                                    minimum rolls for methods,
                                    selection of starting levels,
                                    and starting gold.

            *  CHARACTER FILE UTILITIES    -  Allows printing,
                                    editing, deleting, adding,
                                    listing, displaying and
                                    importing of characters. Also
                                    allows characters to become
                                    dual classed.

            *  FANTASY ROLE PLAYING UTILITY - Exits CGU and runs
                                              FRP

            *  SPELL BOOK UTILITES  - Exits CGU and runs SBU

            *  QUIT TO DOS       -  Stops and exits to DOS.










                               Page 8


                                  METHOD 1

       Summary

       Four - 6 sided dice are rolled for each ability. The lowest
       die is discarded and the other three totaled. The player
       assigns the rolls for strength, intelligence, wisdom,
       dexterity, constitution, and charisma. Comeliness is
       assigned automatically. The player then chooses race, class,
       alignment, and sex. You may remake previous choices by
       pressing the escape key.

       Step 1 - Assigning Abilities

       Before assigning abilities, you will be asked if you want to
       see the minimums required for a class.

       If you answer yes (by pressing "y"):

            A list of the 26 AD&D classes will displayed. Highlight
            the class of interest (use up, down, right, or left
            arrows) and press return. The minimum requirements for
            that class and the races that qualify for that class
            will be displayed and you will be asked if you want to
            look at the minimum for another class.

            Once you say that you don't want to see any more
            classes, the requirements for the last class will be
            displayed you may continue with ability selection.

            *** WARNING ***

            It is possible to meet the minimum requirements for a
            class when you assign your abilities only to fail to
            meet the requirements after race is selected. For
            example, if you assign a 7 to constitution (planning to
            become a fighter) and subsequently choose to be an elf,
            you will not qualify for the fighter class because
            elves lose one point of constitution. The program,
            however, will allow you to go back and reassign
            abilities.

       Your rolls will be displayed below the seven abilities. The
       rolls are assigned in order for strength, intelligence,
       wisdom, dexterity, constitution, and charisma. Highlight
       your choice for each ability (using the left and right arrow
       keys) and select by pressing return.

       When you have assigned all your rolls to abilities, you will
       be asked if you are satisfied with your selection. If you
       answer no (by pressing "n") you will go back to the
       beginning of step 1.

       Step 2  -  Selecting Race



                               Page 9


       You will be asked if you want to see what classes are
       available for a particular race. If you answer yes (by
       typing "y"):

            A list of the races that your abilities qualify you for
            will appear on the screen. Highlight the race of choice
            and press return or press one of the highlighted
            characters and a list of classes that you will qualify
            for will appear. A list of your abilities (after racial
            modifiers have been applied) will also appear. Press
            any key to go to the beginning of Step 2.

       Select race by highlighting the race of choice and pressing
       return or by pressing the highlighted letter corresponding
       to that race.

       Step 3  -  Selecting Class

       A list of classes that you qualify for will appear on the
       screen. Select class by highlighting the class of choice and
       pressing return or by pressing the highlighted letter
       corresponding to that class.

       Step 4  -  Selecting Alignment

       A list of alignments that you qualify for will appear on the
       screen. Select alignment by highlighting the alignment of
       choice and pressing return or by pressing the highlighted
       letter corresponding to that alignment.

       Step 5  -  Selecting Sex

       Select sex by highlighting the alignment of choice and
       pressing return or by pressing the highlighted letter
       corresponding to that sex.


       *** NOTE ***

            After sex is chosen, abilities are checked against
            racial and sexual limits. If your character exceeds any
            limits, you will be prompted to see if you want to redo
            your selections. Answering yes (by pressing "y") will
            return you to step 1.

       Your character will now be displayed and you will now be
       asked if you want to make any changes. If you answer yes,
       you will go back to the beginning of Step 1.

       Step 6  -  Storing Character to disk

       You will be asked if you want to store the character to
       disk. If you answer yes you will be asked your name, a name
       for the character, the character's god, and his or her home.

       After Step 6, the program returns to the main menu.

                               Page 10


                                  METHOD 2

       Summary

       Three - 6 sided dice are rolled and totaled 12 times. The
       six lowest are discarded. The player assigns the rolls for
       strength, intelligence, wisdom, dexterity, constitution, and
       charisma. Three 6 sided dice are rolled for comeliness. The
       player then chooses race, class, alignment, and sex. You may
       remake previous choices by pressing the escape key.

       Step 1 - Assigning Abilities

       Before assigning abilities, you will be asked if you want to
       see the minimums required for a class.

       If you answer yes (by pressing "y"):

            A list of the 26 AD&D classes will displayed. Highlight
            the class of interest (use up, down, right, or left
            arrows) and press return. The minimum requirements for
            that class and the races that qualify for that class
            will be displayed and you will be asked if you want to
            look at the minimum for another class.

            Once you say that you don't want to see any more
            classes, the requirements for the last class will be
            displayed you may continue with ability selection.

            *** WARNING ***

            It is possible to meet the minimum requirements for a
            class when your assign your abilities only to fail to
            meet the requirements after race is selected. For
            example, if you assign a 7 to constitution (planning to
            become a fighter) and subsequently choose to be an elf,
            you will not qualify for the fighter class because
            elves lose one point of constitution. The program will
            allow you to go back and reassign abilities.

       Your rolls will be displayed below the seven abilities. The
       rolls are assigned in order for strength, intelligence,
       wisdom, dexterity, constitution, and charisma. Highlight
       your choice for each ability (using the left and right arrow
       keys) and select by pressing return.

       When you have assigned all your rolls to abilities, you will
       be asked if you are satisfied with your selection. If you
       answer no (by pressing "n") you will go back to the
       beginning of step 1.

       Step 2  -  Selecting Race





                               Page 11

       You will be asked if you want to see what classes are
       available for a particular race. If you answer yes (by
       typing "y"):

            A list of the races that your abilities qualify you for
            will appear on the screen. Highlight the race of choice
            and press return or press one of the highlighted
            characters and a list of classes that you will qualify
            for will appear. A list of your abilities (after racial
            modifiers have been applied) will also appear. Press
            any key to go to the beginning of Step 2.

       Select race by highlighting the race of choice and pressing
       return or by pressing the highlighted letter corresponding
       to that race.

       Step 3  -  Selecting Class

       A list of classes that you qualify for will appear on the
       screen. Select class by highlighting the class of choice and
       pressing return or by pressing the highlighted letter
       corresponding to that class.

       Step 4  -  Selecting Alignment

       A list of alignments that you qualify for will appear on the
       screen. Select alignment by highlighting the alignment of
       choice and pressing return or by pressing the highlighted
       letter corresponding to that alignment.

       Step 5  -  Selecting Sex

       Select sex by highlighting the alignment of choice and
       pressing return or by pressing the highlighted letter
       corresponding to that sex.

       *** NOTE ***

            After sex is chosen, abilities are checked against
            racial and sexual limits. If your character exceeds any
            limits, you will be prompted to see if you want to redo
            your selections. Answering yes (by pressing "y") will
            return you to step 1.

       Your character will now be displayed and you will now be
       asked if you want to make any changes. If you answer yes,
       you will go back to the beginning of Step 1.

       Step 6  -  Storing Character to disk

       You will be asked if you want to store the character to
       disk. If you answer yes you will be asked your name, a name
       for the character, the character's god, and his or her home.

       After Step 6, the program returns to the main menu.



                               Page 12


                                  METHOD 3

       Summary

       Three - 6 sided dice are rolled and totaled 6 times for each
       ability. The five lowest for each are discarded. The player
       does not get to assign the rolls.


       Step 1  -  Selecting Race

       You will be asked if you want to see what classes are
       available for a particular race. If you answer yes (by
       typing "y"):

            A list of the races that your abilities qualify you for
            will appear on the screen. Highlight the race of choice
            and press return or press one of the highlighted
            characters and a list of classes that you will qualify
            for will appear. A list of your abilities (after racial
            modifiers have been applied) will also appear. Press
            any key to go to the beginning of Step 2.


       Select race by highlighting the race of choice and pressing
       return or by pressing the highlighted letter corresponding
       to that race.

       Step 2  -  Selecting Class

       A list of classes that you qualify for will appear on the
       screen. Select class by highlighting the class of choice and
       pressing return or by pressing the highlighted letter
       corresponding to that class.

       Step 3  -  Selecting Alignment

       A list of alignments that you qualify for will appear on the
       screen. Select alignment by highlighting the alignment of
       choice and pressing return or by pressing the highlighted
       letter corresponding to that alignment.

       Step 4  -  Selecting Sex

       Select sex by highlighting the alignment of choice and
       pressing return or by pressing the highlighted letter
       corresponding to that sex.

       *** NOTE ***

            After sex is chosen, abilities are checked against
            racial and sexual limits. If your character exceeds any
            limits, you will be prompted to see if you want to redo
            your selections. Answering yes (by pressing "y") will
            return you to step 1.


                               Page 13

       Your character will now be displayed and you will now be
       asked if you want to make any changes. If you answer yes,
       you will go back to the beginning of Step 1.

       Step 5  -  Storing Character to disk

       You will be asked if you want to store the character to
       disk. If you answer yes you will be asked your name, a name
       for the character, the character's god, and the character's
       home.


       After Step 5, the program returns to the main menu.













































                               Page 14


                                  METHOD 4

       Summary

       Three - 6 sided dice are rolled and totaled for each
       characteristic. This is done enough times to generate 12
       characters.

       Step 1  -  Selecting Rolls

       The twelve sets of abilities will be displayed on the
       screen. Make your selection by highlighting the set you want
       (use left and right arrows) and press return.

       Step 2  -  Selecting Race

       You will be asked if you want to see what classes are

       available for a particular race. If you answer yes (by
       typing "y"):

            A list of the races that your abilities qualify you for
            will appear on the screen. Highlight the race of choice
            and press return or press one of the highlighted
            characters and a list of classes that you will qualify
            for will appear. A list of your abilities (after racial
            modifiers have been applied) will also appear. Press
            any key to go to the beginning of Step 2.

       Select race by highlighting the race of choice and pressing
       return or by pressing the highlighted letter corresponding
       to that race.

       Step 3  -  Selecting Class

       A list of classes that you qualify for will appear on the
       screen. Select class by highlighting the class of choice and
       pressing return or by pressing the highlighted letter
       corresponding to that class.

       Step 4  -  Selecting Alignment

       A list of alignments that you qualify for will appear on the
       screen. Select alignment by highlighting the alignment of
       choice and pressing return or by pressing the highlighted
       letter corresponding to that alignment.











                               Page 15


       Step 5  -  Selecting Sex

       Select sex by highlighting the alignment of choice and
       pressing return or by pressing the highlighted letter
       corresponding to that sex.

       *** NOTE ***

            After sex is chosen, abilities are checked against
            racial and sexual limits. If your character exceeds any
            limits, you will be prompted to see if you want to redo
            your selections. Answering yes (by pressing "y") will
            return you to step 1.

       Your character will now be displayed and you will now be
       asked if you want to make any changes. If you answer yes,
       you will go back to the beginning of Step 2.


       Step 6  -  Storing Character to disk


       You will be asked if you want to store the character to
       disk. If you answer yes you will be asked your name, a name
       for the character, the character's god, and the character's
       home.


       After Step 6, the program returns to the main menu.




























                               Page 16


                                  METHOD 5

       Summary

       A variable number of 6 sided dice are rolled for each
       ability (the number depends on the class and ability). The
       highest three for each ability are totaled. The player picks
       class, alignment and sex.

       *** NOTE ***

            This method will create only humans.


       Step 1  -  Selecting Class

       A list of the twelve single classes and the Bard class will
       appear on the screen. Select class by highlighting (use up
       and down arrows) and press return or press the highlighted
       letter for that class.


       Step 2  -  Selecting Alignment

       A list of alignments that you qualify for will appear on the
       screen. Select alignment by highlighting the alignment of
       choice and pressing return or by pressing the highlighted
       letter corresponding to that alignment.

       Step 3  -  Selecting Sex

       Select sex by highlighting the alignment of choice and
       pressing return or by pressing the highlighted letter
       corresponding to that sex.

       If you choose female and if the maximum strength for a
       female of your race is less than your current strength :

            You will be notified that your strength will drop and
            asked if you still want to become a female. If you
            answer yes, you strength will be dropped to the maximum
            for a female of that race.


       Your character will now be displayed and you will now be
       asked if you want to make any changes. If you answer yes,
       you will go back to the beginning of Step 2.

       Step 4  -  Storing Character to disk

       You will be asked if you want to store the character to
       disk. If you answer yes you will be asked your name, a name
       for the character, the character's god, and the character's
       home.

       After Step 4, the program returns to the main menu.

                               Page 17


                             SCREEN PARAMETERS


       Summary

       The screen parameter menu allows you to change the display
       colors if a color graphics adaptor is available.

       Selections  are made by highlighting a menu item and
       pressing return or by pressing the highlighted character
       corresponding to that choice.

       Color Selection

       Main color (foreground and background) and highlighted color
       (foreground and background) can only be 0 through 15. When
       one of the four color options is chosen, the current number
       appears. Enter a new number and press return. The program
       will only accept 0 through 15.


       Default colors

       If this selection is made, the default colors are chosen.
       They are:

            Main Foreground Color    -       2  (green)

            Main Background Color    -       0  (black)

            Highlighted Foreground Color  -  14 (bright yellow)

            Highlighted Background Color  -  0  (black)



       Exiting

       If this selection is made, the program will rewrite DATA.CGU
       storing the new selections and exit to the main menu.

















                               Page 18


                         CHARACTER GENERATION LIMITS


       Summary

       This menu allows you to set the initial level at which a
       character will start, set minimums for each of the five
       character generation methods, and set starting gold.

            *** NOTE ***

            For each of the five character generation methods, the
            rolls are compared to the minimums. If the rolls don't
            meet the minimums, then they are rerolled and compared
            again.

            We have included this to keep you from having to roll
            to many times before you get viable characters. (In our
            worlds, we believe that a viable character should have
            at least three abilities above 15).


            *** WARNING ***

            If you set the minimums too high, the program will be
            rolling, and rolling, and rolling...

            For example, if Method 1 is being used, the program
            will have to roll (on average) 13000 times to get a
            character with three 18's.


            If you want characters with very high stats, roll them
            with low minimum requirements and use the editing
            utility (Character File Utilities) to raise them. It
            will save you a lot of time.


       Setting minimums

       Highlight the Method whose minimums you want to change and
       press return or press the highlighted number for that
       method.

       The old values will appear on the screen. Press return to
       leave them unchanged or enter a new number. The program will
       only except values between 3 and 18 inclusive.










                               Page 19


       Setting Initial Level

       This allows you to set the range of starting levels. Enter
       the lowest starting level and the highest. If you set the
       highest level lower than the lowest level, you will be
       prompted. Allowed starting levels are 1 through 25.


       Starting Money

       Starting gold depends on initial character level. The
       following equation is used:

           gold = R * (A + B x (level-1) + (level-1) ^ C)

       where R is the starting gold rolled according to AD&D rules
       and A, B, and C are constants set by you. Limits for A and B
       are 0 to 10 and 0 to 3 for C.


       Exiting Character Generation Limits Utilities

       When you exit the game utilities menu, the changes you have
       made are stored in DATA.CGU.

































                               Page 20


                       CHARACTER FILE UTILITIES






       Summary

       CGU's Character File Utilities have been designed to allow
       you to make changes to CHRLST.CGU and individual character
       files. (See the appendices for information on CGU's file
       structure) The file utilities allow you to:


                 *    Add characters not rolled with CGU

                 *    Delete characters from CHRCTRS.CGU

                 *    Display a stored character

                 *    Output a stored character to printer

                 *    Edit a stored character

                 *    Change a stored character from single classed
                      to dual classed (or to Bard class if already
                      dual classed fighter/thief)

                 *    Increment all character ages

                 *    Import a character

       Each of these utilities are described below.

       Selections from the Character File Utility Menu are made
       like those from other menus. Highlight selection (using up
       or down arrows) and press return or press highlighted letter
       for that choice.



                               Add Character

       When this selection is made you will be asked your name and
       the new character's name. An entry will be made in
       CHRCTRS.CGU.

       After you have entered a valid name for the character, the
       program will automatically put you into Editing of that
       character. (See the section on Edit Character for details of
       editing) When you exit the editing session, you will return
       to the Character File Utility menu.




                               Page 21


            *** NOTE ***

            The base characters created by the Add Character
            Utility is a male human fighter with minimum stats. If
            you make no changes during the editing session, or if
            you don't save those changes, he will stay a male human
            fighter with minimum stats.

                            Delete Character

       This utility allows you to delete a character that has been
       stored to disk. The characters spellbook (from SBU) and note
       pad (from FRP) are also deleted.

            *** WARNING ***

            Once you delete a character, you cannot get him back.
            Unless you have made a backup of the
            CHRCTRS.CGU.

       When you select this utility, a list of all stored
       characters will appear on the screen. Highlight the
       character of choice and press return. To return to the
       Character File utility at this point, press the escape key.

       The character will appear on the screen and you will be
       asked if you want to delete the character. Press "d" to
       delete the character or "c" to return to the Character File
       Utility menu. After you delete a character, you will return
       to the Character File Utility menu.

                            Display Character

       This utility allows you to view a stored character. When
       you make this selection, a list of all stored characters
       appears on the screen. Select the character you want and
       press return. (or the escape key to return to Character File
       Utilities menu)

       Once you have made your selection, that character will be
       displayed. Press any key to return to the Character File
       Utility menu.

                            Print Character

       This utility allows you to output a stored character to your
       printer. When you make this selection, a list of characters
       appears on the screen. Make your selection by highlighting
       the character you want to print (use up and down arrow keys
       and up and down page keys) and press return. You may exit by
       pressing the escape key.

       When you have selected a character, that character is
       displayed and you are asked if it is the correct character.
       If you answer no (by pressing "n") you return to the


                               Page 22


       character listing. After answering that question, you are
       asked if you want to print the character and race information.
       After answering that question, you are returned to the
       Character File Utility menu.

       Because of space restrictions, only the first twenty levels
       of hitpoints will be printed.  Race and class information
       details are available in the File Structure section.


                              Edit Character


       Introduction

       The Edit Character Utility is designed to give you
       flexibility in editing stored characters. For that reason
       there are no restrictions (racial, class, alignment, etc.)
       on changing characters. You can make a half-orc, chaotic
       neutral paladin with a strength of 3 if you want.

       When you select this utility, a list of characters appears
       on the screen, when make your selection, the character is
       displayed with the active editing field highlighted.


       How to Move Through the Display

       To move through the display, use the up and down arrows or
       press return. (pressing return will leave the field
       unchanged and move you to the next field)

       To end the editing session, press the escape key. You will
       be asked if you want to store the changes you have made. If
       you answer yes, the changed character will be stored to
       disk.


       Display Fields

       There are four types of display fields that can be edited :
       1) unknown string fields, 2) known string fields, 3) numeric
       fields, and 4) special fields. All four types accept
       different types of input. Below are brief descriptions.

            * Unknown String Fields - These fields (for example
              character name) will accept alpha numeric characters
              (any combination). When you have entered a new name,
              press the up or down arrows or return to move to the
              next field. Corrections can be made with the
              backspace key.

            * Known String Fields - These fields (for example race
              and alignment) are restricted to a few choices. To
              change the current selection, use the right and left
              arrows. When you have made the selection, press the

                               Page 23


              up or down arrow, or return to move to the next field.

            * Numeric Fields - These fields (for example strength)
              will accept only numeric characters. When you have
              entered a new value, press the up or down arrows or
              return to move to the next field. Corrections can be
              made with the backspace key.

              Some numeric fields will only accept values in a
              limited range. If you enter a number that is not
              within that range, the program will warn you by
              beeping, and replace your value with either the
              minimum or maximum value allowed.

            * Special Fields - These fields (psionics) have special
              rules and will be described in detail below.


       Interrelations Between Fields

       It is possible to change the value of one field when you
       edit another. For example, when you change constitution,
       adjustments are remade to hitpoints. A fifth level character
       whose constitution is changed from 15 to 14 would lose 1
       hitpoint per level. The fields that affect others are listed
       below.

            * Constitution - can change hitpoints

            * Class - can change hitpoints, levels, and experience
                      points (also abilities for the cavalier
                      classes)

            * Race - can change age, life span, height, weight, and
                     abilities

            * Age - can change abilities and status

            * Level - can change hitpoints, experience points, and
                      abilities for the cavalier classes

            * Experience points - can change levels, hitpoints, and
                                  abilities for the cavalier
                                  classes



       Character Name - unknown string field

            Character names can be a maximum of twenty characters.


       Player Name - unknown string field

            Player names can be a maximum of twenty characters.


                               Page 24


       Class - Known string field and special

            If the character is one of the twenty-six single or
            multi classes you can change class by choosing it
            (using right and left arrows) and pressing the up or
            down arrows or return.

            You can also make the character a dual classed
            character by picking that selection. If you are a dual
            classed character, you can also edit the second class.
            You can also cancel dual classed by picking that
            selection.

            If you change class, you will be asked if you want to
            reroll hit points. If you chose yes, all hitpoints will
            be rerolled instead of just those missing.

       Abilities

            Strength - numeric field

                 Must be within the range -9 to 25.

            Extraordinary Strength - numeric field

                 This field appears only for fighters with strength
                 of 18 or for the two cavalier classes. (in which
                 case it is percentage if strength is less that 18)
                 The entered value must be between 0 and 100.

            Intelligence - as strength


            Wisdom - as strength


            Dexterity - as strength


            Dexterity Percentage - numeric field

                 The field appears only of cavalier classes.
                 Entered value must be between 0 and 100.


            Constitution - as strength


            Constitution Percentage - as dexterity percentage


            Charisma - as strength


            Comeliness - as strength


                               Page 25


       Hitpoints - multiple numeric field

            You cannot edit the total number of hitpoints. Instead,
            you edit the individual hitpoints for each class and
            level. Use the left, right, up, and down arrow keys to
            move to the number you want to edit.

            To end the editing of hitpoints, move to the word
            FINISH and press either the up or down arrow
            keys or enter. The valid range for hitpoints is 0 to
            99.

       Gold Pieces - multiple numeric field

            The number of all types of coins carried by the
            character can be edited. Use the left and right arrow
            keys to move to the field you want to edit. The valid
            range is 0 to 999999. Use the up, down, and enter (if
            FINISHED is highlighted) keys when you have finished
            editing.


       God - unknown string field

            God names can be a maximum of twenty characters.


       Home - unknown string field

            Home names can be a maximum of twenty characters.


       Race - known string field

            If you change race, you will be asked if you want to
            change age, life span, height, and weight.


       Age - multiple numeric field

            This field is edited just like the Gold Pieces field.


            Changing the age can change abilities if the character
            changes age brackets. If the age is greater than the
            life span, the character status will change to "dead".


       Alignment - known string field

       Sex - known string field






                               Page 26


       Height - numeric field

            There are two fields (feet and inches). They are
            limited to the ranges 1 to 9 and 0 to 11 respectively.


       Weight - numeric field

            Limited to the range 1 to 999.


       Skill - known string field


       Level - multiple numeric field

            This field is edited just like the gold pieces field.
            The range is limited from 1 to 25.


       Experience Points - multiple numeric field

            This field is edited just like the gold pieces field.
            The range is limited from 1 to 9999999.


       New Experience Points - numeric field

            When you enter new experience points into this field,
            you will be asked if you want to update experience
            points. If you answer yes, points will be allocated
            according to experience percentage distribution.
            (below)


       Experience Percentage Distribution - multiple numeric field

            This field is edited just like the gold pieces field.
            The range is limited from 0 to 200.

            This is particularly useful if the character gets a 10%
            bonus (enter 110) or if they get less than full
            experience points.

            Multi-classed characters usually split the experience
            points evenly.


       Armor Class - numeric field

            Armor class can range from -99 to 99.


       Movement   - numeric field

            Movement can range from 0 to 99.

                               Page 27


       Encumbrance - numeric field

            Encumbrance can range from 0 to 32,768


       Status - known string field



       Psionics - special

            Psionic abilities can be toggled on and off using the
            right or left arrow keys. If the character has
            psionics, it can be edited by pressing the space bar. A
            menu will appear which allows you to change psionic
            strength, attack modes, defense modes, major
            disciplines, and minor disciplines.

            Attack/Defense modes and disciplines are chosen by
            moving the arrow and pressing the space bar.

            Psionic abilities are limited to :

                 *  psi strength of 0 to 500

                 *  5 attack modes

                 *  5 defense modes

                 *  5 minor disciplines

                 *  2 major disciplines



                          Change to Dual Classed


       This utility allows a single classed character to become
       dual classed (if he qualifies). It also allows qualified
       characters to become bards. We have attempted to implement
       all the restrictions for dual classed characters.

       When you select this utility, a listing of the stored
       characters are shown on the screen. Select the character of
       choice by highlighting it and pressing return. (you may exit
       by pressing the escape key). After you have selected a
       character, it will be displayed and you will be asked if it
       is the correct character. If you say no by typing "n" :

            You will be asked if you want to try again. If you
            answer yes the character listing will be displayed. If
            you answer no you will be returned to the Character
            File Utility menu.



                               Page 28


       For Characters that qualify for the Bard class

       If the selected character meets the minimum requirements for
       the Bard class, you will be asked if you want to become a
       bard. If you answer yes:

            If your character is a single classed human fighter
            (between 5th and 8th level) you will become a dual
            classed thief (fighter).

            If your character is a dual classed human thief
            (fighter) (between 5th and 8th level) you will become a
            bard.

            Your characters new stats will be displayed and you
            will be asked if you want to save the changes.
            Afterwards, you will be returned to the Character File
            Utility menu.

       If you answer no, and you will continue on with the program.


       For Characters that don't qualify for the Bard Class

       If you qualify to become dual classed, a menu appears
       allowing you to select a second class. Make your selection
       by highlighting your choice and pressing return or pressing
       the highlighted key that corresponds to your choice. If you
       qualify for that class:

            Your new stats will be displayed and you will be asked
            if you want to save the changes. Afterwards, you will
            be returned to the Character File Utility menu.

       If you don't qualify for that class you will be informed and
       asked if you want to try another class. You can return to
       the Character File Utility menu by highlighting Exit and
       pressing return, or by pressing X.



                       Increment All Character Ages

       This utility allows you to make all stored characters one
       year older. When you chose this utility, you will be asked
       if you want to continue. If you say yes:

            A year will be added to the age of each character.

            All characters will be checked to see if they have
            entered new age brackets. (see page 12 of Dungeon
            Master's Guide for details) If the age bracket has
            changed, the necessary modifications will be made to the
            character's abilities.



                               Page 29


            If a character has died of old age, that fact will be
            noted in the character's data file and a message
            appears at the bottom of the screen.


                             Import a Character

       This utility allows you to move characters from one campaign
       to another by moving the character out of a CHRCTRS.CGU file
       (or whatever file name you have saved it under) to the
       active CHRCTRS.CGU file.

       When you make this selection, you are asked for the file
       that contains the character you want moved. Enter the
       complete file name including path (for example
       C:\SAVE\CHAR.SAV). A list of the characters will be
       displayed. Make your selection and the character will be
       moved.

       If the file does not have the proper file structure, a
       warning will be printed.

       You will be prompted for character file, spellbook file(s),
       and notepad files.


                        Import/Export Print Files

       This utility allows you import or export the files used to
       print a character's race and class information.  This will
       convert the files to and from ASCII and the squeezed format
       (to eliminate spaces) used to store these files.

       Both CLASS.PRN and RACE.PRN are converted with this selection.
       When you make this selection you will be prompted to select
       between importing and exporting, followed by the selection
       between class or race files.

       The file name for import or export is requested last.  The
       complete path name should be given to prevent confusion.

       Note:  These files cannot contain IBM graphic characters
              (ASCII characters > 127).  The class file is also
              larger than 64k (approx. 90k) in its uncompressed
              form.  The size of this file may cause you problems
              in editing depending on the editor you use.











                               Page 30


                           DATA FILE STRUCTURE


       CGU's parameter file is stored as ASCII files. Although it
       would load faster if it were random access file, you have
       some flexibility to modify it if it is ASCII. If you plan to
       edit the data file, be sure that you make a backup just prior
       to editing.

       Since AD&D character generation is so complicated, not every
       thing can be successfully edited. For example, character
       class numbers four and five (cavalier and paladin) will
       always have two d10 rolled and added to strength, dexterity,
       and constitution every time a new level is gained. Even if
       you make it the healer class and change every thing in the
       DATA.CGU file.


       Some of the items that can be successfully edited (in DATA.CGU)
       are:

            * racial class restrictions

            * racial minimums and maximums

            * class minimums and maximums

            * alignment restrictions

            * base height and weight

            * height and weight ranges

            * constitution adjustments for classes (if
              constitution is above 14)

            * hit die for classes can be changed


       Some things must be left as is. Among these are:

            * the bard class (number 13) must be left alone

            * each line in the output form must be 80 characters
              long.

            * classes 1 through 12 must be single classes and
              classes 14 through 26 must be
       multi-classes

       If you do try to edit DATA.CGU, be sure to use an editor
       that does not imbed ASCII characters (for example form
       feeds). Be sure to make a backup and good luck!




                               Page 31


                                  DATA.CGU

           The first line has the default colors.

       7,0,11,0

           The next 5 lines are the minimums for the five methods
           in the order strength, wisdom, intelligence, dexterity,
           constitution, and charisma.

       15,15,15,8,8,8
       12,12,12,3,3,3
       8,8,8,8,8,8
       3,3,3,3,3,3
       8,8,8,8,8,8

           The next line contains the range of starting levels.

       1,25

           The next thirteen lines contain the number of dice to
           roll for each ability for method 5, in the order:
           strength, wisdom, intelligence, dexterity, constitution,
           charisma, and comeliness

       9,3,5,7,8,6,4   'fighter
       9,3,5,7,8,6,4   'barbarian
       7,6,8,5,9,4,4   'ranger
       7,4,9,5,8,6,3   'cavalier
       7,5,9,6,7,9,4   'paladin
       7,4,9,5,8,6,3   'cleric
       7,4,8,5,6,9,3   'druid
       4,9,7,8,6,5,3   'magic user
       3,8,7,9,5,6,4   'illusionist
       6,5,3,9,7,4,8   'thief
       6,7,4,9,8,3,5   'assassin
       7,5,9,8,6,4,3   'monk
       7,5,7,7,4,7,4   'bard

           The seven abilities.

       "STRENGTH"
       "INTELLIGENCE"
       "WISDOM"
       "DEXTERITY"
       "CONSTITUTION"
       "CHARISMA"
       "COMELINESS"

           Information for each race is contained in the next
           seven groups of data. (abilities are in the same
           order as above):





                               Page 32


           Race, Highlighted letter
           Available classes (1 for yes 0 for no) see below for
              order of classes (1-13) and (14-26)
           Racial modifiers for abilities
           Racial ability maximums (male)
           Racial ability minimums (male)
           Racial ability maximums (female)
           Racial ability minimums (female)
           Age bracket ranges
           Age parameters (base, number of die, size of die)
              for each of the twenty six classes (ordered as
              below)
           Upper level limit for each of the thirteen single
              classes
           Base height(inches), Base weight(pounds), Height range
              and Weight range (male)
           Base height(inches), Base weight(pounds), Height range
              and Weight range (female)

              height and weight are calculated as:
                    height or weight = Base + (1 to range)


       "HUMAN","H"
       1,1,1,1,1,1,1,1,1,1,1,1,1
       0,0,0,0,0,0,0,0,0,0,0,0,0
       0,0,0,0,0,0,0
       18,18,18,18,18,18,18
       3,3,3,3,3,3,-6
       18,18,18,18,18,18,18
       3,3,3,3,3,3,-6
       14,21,41,61,91,121
       15,1,4 14,1,4
       20,1,4
       17,1,4
       17,1,4
       18,1,4
       18,1,4
       24,2,8
       30,1,6
       18,1,4
       20,1,4
       21,1,4
       15,1,4
       99,99,99,99,99,99,23,99,99,99,15,17,23
       60,139,24,96
       60,100,16,78
       "HALF-ELF","A"
       1,0,1,1,1,1,1,1,0,1,1,0,1
       1,0,1,0,1,1,1,1,0,0,1,1,0
       0,0,0,0,0,0,1
       18,18,18,18,18,18,18
       3,4,3,6,6,3,-6
       17,18,18,18,18,18,18
       3,4,3,6,6,3,-6
       24,41,101,176,251,326

                               Page 33


       22,3,4
       22,3,4
       22,3,4
       22,3,4
       22,3,4
       40,2,4
       40,2,4
       30,2,8
       30,2,8
       22,3,8
       28,3,8
       24,3,4
       22,3,4
       12,0,99,99,0,10,23,11,0,99,10,0,23
       56,110,12,40
       60,88,12,28
       "ELF","E"
       1,0,1,1,0,1,1,1,0,1,1,0,0
       1,0,1,0,0,1,0,0,0,0,0,1,0
       0,0,0,1,-1,0,2
       18,18,18,19,18,18,18
       3,8,3,7,6,8,-6
       16,18,18,19,18,18,18
       3,8,3,7,6,8,-6
       100,176,551,876,1201,1601
       130,5,6
       130,5,6
       130,5,6
       130,5,6
       130,5,6
       150,5,6
       150,5,6
       150,5,6
       150,5,6
       50,5,6
       80,5,6
       150,5,6
       150,5,6
       10,0,99,99,0,8,23,8,0,99,11,0,0
       50,90,10,30
       56,72,10,22
       "HALFLING","L"
       1,0,0,0,0,1,1,0,0,1,0,0,0
       0,0,1,0,0,0,0,0,0,0,0,0,0
       -1,0,0,1,0,0,0
       17,18,17,18,19,18,18
       6,6,3,8,10,3,-6
       14,18,17,18,19,18,18
       6,6,3,8,10,3,-6
       22,34,69,102,145,200
       20,3,4
       20,3,4
       20,3,4
       20,3,4
       20,3,4
       45,2,4

                               Page 34


       45,2,4
       50,2,8
       50,2,8
       40,2,4
       44,2,4
       30,2,4
       20,3,4
       8,0,0,0,0,6,11,0,0,99,0,0,0
       30,52,9,20
       33,42,6,16
       "DWARF","D"
       1,0,0,0,0,0,0,0,0,1,1,0,0
       0,0,1,0,0,0,0,0,0,0,0,0,0
       0,0,0,0,1,-1,-1
       18,18,18,17,19,16,18
       8,3,3,3,12,3,-6
       17,18,18,17,19,16,18
       8,3,3,3,12,3,-6
       35,51,151,251,351,451
       40,5,4
       40,5,4
       40,5,4
       40,5,4
       40,5,4
       60,5,4
       60,5,4
       60,5,4
       60,5,4
       75,3,6
       80,3,6
       100,10,10
       40,5,4
       10,0,0,0,0,11,0,0,0,99,9,0,0
       42,134,10,40
       44,104,8,36
       "GNOME","G"
       1,0,0,0,0,1,0,0,1,1,1,0,0
       0,1,1,0,0,0,0,0,0,0,0,0,1
       0,0,0,0,1,-1,-1
       18,18,18,18,18,18,18
       6,7,9,3,8,3,-6
       15,18,18,18,18,18,18
       6,7,3,3,8,3,-6
       50,91,301,451,601,751
       60,5,4
       60,5,4
       60,5,4
       60,5,4
       60,5,4
       150,5,12
       150,5,12
       100,2,12
       100,2,12
       80,5,4
       80,5,4
       60,5,4

                               Page 35


       60,5,4
       8,0,0,0,0,10,0,0,7,99,8,0,0
       36,72,6,20
       39,67,6,16
       "HALF -ORC","O"
       1,0,0,0,0,1,0,0,0,1,1,0,0
       0,0,1,1,1,0,0,0,1,1,0,0,0
       1,0,0,0,1,-2,-2
       18,17,14,14,19,12,18
       6,3,3,3,13,3,-6
       18,17,14,14,19,12,18
       6,3,3,3,13,3,-6
       12,16,31,46,61,81
       13,1,4
       13,1,4
       13,1,4
       13,1,4
       13,1,4
       20,1,4
       20,1,4
       20,2,4
       20,2,4
       20,2,4
       20,2,4
       20,2,4
       13,1,4
       11,0,0,0,0,7,0,0,0,11,99,0,0
       62,134,8,56
       62,102,6,50

           Next are twenty-six groups of data that contain the
               information for each class. The data are in the
               form:

           Class, Highlighted letter
           Class minimums (abilities are in usual order)
           Class maximums (abilities are in usual order)
           Alignment limitations (1 for yes - 0 for no)
               Alignments are in the order:
                  LG,LN,LE,NG,N,NE,CG,CN,CE
           Multi-class data (only one value for single classes)
           Minimum hitpoints for first level

       "FIGHTER","F"
       9,3,5,5,7,5,3
       18,18,18,18,18,18,18
       1,1,1,1,0,1,1,1,1
       1,0,0
       6
       "BARBARIAN","B"
       15,3,5,14,15,3,3
       18,18,18,18,18,18,18
       0,0,0,1,0,1,1,1,1
       2,0,0
       7
       "RANGER","R"

                               Page 36


       13,13,14,5,14,5,3
       18,18,18,18,18,18,18
       1,0,0,1,0,0,1,0,0
       3,0,0
       9
       "CAVALIER","C"
       15,10,10,15,15,3,3
       18,18,18,18,18,18,18
       1,0,0,1,0,0,1,0,0
       4,0,0
       6
       "PALADIN","P"
       15,10,13,15,15,17,3
       18,18,18,18,18,18,18
       1,0,0,0,0,0,0,0,0
       5,0,0
       6
       "CLERIC","R"
       5,5,9,3,5,5,3
       18,18,18,18,18,18,18
       1,1,1,1,0,1,1,1,1
       6,0,0
       5
       "DRUID","U"
       5,5,12,5,5,15,3
       18,18,18,18,18,18,18
       0,0,0,0,1,0,0,0,0
       7,0,0
       5
       "MAGIC-USER","M"
       3,9,5,6,5,5,3
       18,18,18,18,18,18,18
       1,1,1,1,0,1,1,1,1
       8,0,0
       3
       "ILLUSIONIST","I"
       5,15,3,16,5,3,3
       18,18,18,18,18,18,18
       1,1,1,1,0,1,1,1,1
       9,0,0
       3
       "THIEF","T"
       5,5,3,12,5,3,3
       18,18,18,18,18,18,18
       0,1,1,1,0,1,0,1,1
       10,0,0
       4
       "ASSASSIN","A"
       12,11,3,12,5,3,3
       18,18,18,18,18,18,18
       0,0,1,0,0,1,0,0,1
       11,0,0
       4
       "MONK","O"
       15,5,15,15,11,5,3
       18,18,18,18,18,18,18

                               Page 37


       1,1,1,0,0,0,0,0,0 12,0,0
       4
       "BARD","D"
       15,12,15,15,10,15,3
       18,18,18,18,18,18,18
       0,1,0,1,1,1,0,1,0
       13,0,0
       6
       "FIGHTER/MAGIC-USER","S"
       9,9,5,6,7,5,3
       18,18,18,18,18,18,18
       1,1,1,1,0,1,1,1,1
       1,8,0
       4
       "FIGHTER/ILLUSIONIST","G"
       9,15,5,16,12,5,3
       18,18,18,18,18,18,18
       1,1,1,1,0,1,1,1,1
       1,9,0
       4
       "FIGHTER/THIEF","H"
       9,5,5,12,7,5,3
       18,18,18,18,18,18,18
       0,1,1,1,0,1,0,1,1
       1,10,0
       5
       "FIGHTER/ASSASSIN","N"
       12,11,5,5,12,5,3
       18,18,18,18,18,18,18
       0,0,1,0,0,1,0,0,1
       1,11,0
       5
       "FIGHTER/CLERIC","L"
       9,5,9,5,7,5,3
       18,18,18,18,18,18,18
       1,1,1,1,0,1,1,1,1 1,6,0
       5
       "FIGHTER/MAGIC-USER/THIEF","E"
       9,9,5,12,7,5,3
       18,18,18,18,18,18,18
       0,1,1,1,0,1,0,1,1
       1,8,10
       4
       "FIGHTER/MAGIC-USER/CLERIC","/"
       9,9,9,6,7,5,3
       18,18,18,18,18,18,18
       1,1,1,1,0,1,1,1,1
       1,8,6
       5
       "CLERIC/MAGIC-USER","-"
       5,9,9,6,6,5,3
       18,18,18,18,18,18,18
       1,1,1,1,0,1,1,1,1
       6,8,0
       4
       "CLERIC/THIEF","/"

                               Page 38


       6,5,9,12,13,5,3
       18,18,18,18,18,18,18
       0,1,1,1,0,1,0,1,1
       6,10,0
       5
       "CLERIC/ASSASSIN","/"
       12,11,9,12,13,5,3
       18,18,18,18,18,18,18
       0,0,1,0,0,1,0,0,1
       6,11,0
       5
       "CLERIC/RANGER","/"
       13,13,14,6,14,5,3
       18,18,18,18,18,18,18
       1,0,0,1,0,0,1,0,0
       6,3,0
       7
       "MAGIC-USER/THIEF","-"
       5,9,5,12,6,5,3
       18,18,18,18,18,18,18
       0,1,1,1,0,1,0,1,1
       8,10,0
       4
       "ILLUSIONIST/THIEF","/"
       8,15,3,16,12,3,3
       18,18,18,18,18,18,18
       0,1,1,1,0,1,0,1,1
       11,10,0
       4

           The nine alignments and Highlighted letters

       "LAWFUL GOOD","L"
       "LAWFUL NEUTRAL","A"
       "LAWFUL EVIL","W"
       "NEUTRAL GOOD","E"
       "NEUTRAL","N"
       "NEUTRAL EVIL","V"
       "CHAOTIC GOOD","C"
       "CHAOTIC NEUTRAL","H"
       "CHAOTIC EVIL","O"

           There are now thirteen groups of data for single
           classes.

           Experience points for first 25 levels.
           Hit die type, Number of hit die at first level, Number
             of levels to receive hit die, hit points per level
             after maximum hit die
           Hitpoint adjustment for constitution 15 through 25

       1,2001,4001,8001,18001                          fighter
       35001,70001,125001,250001,500001
       750001,1000001,1025001,1050001,1075001
       1100001,1125001,1150001,1175001,1200001
       3250001,3500001,3750001,4000001,4250001

                               Page 39


       10,1,9,2
       1,2,3,4,5,5,6,6,6,7,7
       1,6001,12001,24001,48001                        barbarian
       80001,150001,275001,500001,1000001
       1500001,2000001,2500001,3000001,3500001
       4000001,4500001,5000001,5500001,6000001
       6500001,7000001,7500001,8000001,85000001
       12,1,8,4
       2,4,6,8,10,10,12,12,12,14,14
       1,2251,4501,10001,20001                         ranger
       40001,90001,150001,225001,325001
       650001,975001,1300001,1625001,1950001
       2225001,2550001,2875001,3200001,3325001
       3650001,3975001,4300001,4625001,4950001
       8,2,10,2
       1,2,3,4,
       5,5,6,6,6,7,7
       1,2501,5001,10001,18501                         cavalier
       37001,85001,140001,220001,300001
       600001,900001,1200001,1500001,1800001
       2100001,2400001,2700001,3000001,3300001
       3600001,3900001,4200001,4500001,4800001
       10,1,10,3
       1,2,3,4,5,5,6,6,6,7,7
       1,2751,5501,12001,24001                         paladin
       45001,95001,175001,350001,700001
       1050001,1400001,1750001,2100001,3450001
       3800001,4150001,4500001,4850001,5200001
       5550001,5900001,6250001,6600001,6950001
       10,1,9,3
       1,2,3,4,5,5,6,6,6,7,7
       1,1501,3001,6001,13001                          druid
       27501,55001,110001,225001,450001
       675001,900001,1125001,1350001,1575001
       1800001,2025001,2250001,2475001,2700001
       2925001,3150001,3375001,3600001,3825001
       8,1,9,2
       1,2,2,2,2,2,2,2,2,2,2
       1,2001,4001,7501,12501                          cleric
       20001,35001,60001,90001,125001
       200001,300001,750001,1500001,1500001
       1500001,1500001,1500001,1500001,1500001
       6000001,6500001,7000001,7000001,7000001
       8,1,14,0
       1,2,2,2,2,2,2,2,2,2,2
       1,2501,5001,10001,22501                         magic user
       40001,60001,90001,135001,250001
       375001,750001,1125001,1500001,1875001
       2250001,2625001,3000001,3375001,3750001
       4125001,4500001,4875001,5250001,5625001
       4,1,11,1
       1,2,2,2,2,2,2,2,2,2,2
       1,2251,4501,9001,18001                          illusionist
       35001,60001,95001,145001,220001
       440001,660001,880001,1100001,1320001
       1540001,1760001,1980001,2200001,2420001

                               Page 40


       2640001,2860001,3080001,3300001,3520001
       4,1,10,1
       1,2,2,2,2,2,2,2,2,2,2
       1,1251,2501,5001,10001                          thief
       20001,42501,70001,110001,160001
       220001,440001,660001,880001,1100001
       1320001,1540001,1760001,1980001,2200001
       2420001,2640001,2860001,3080001,3300001
       6,1,10,2
       1,2,2,2,2,2,2,2,2,2,2
       1,1501,3001,6001,12001                          assassin
       25001,50001,100001,200001,300001
       425001,575001,750001,1000001,1500001
       1500001,1500001,1500001,1500001,1500001
       1500001,1500001,1500001,1500001,1500001
       6,1,15,0
       1,2,2,2,2,2,2,2,2,2,2
       1,2251,4751,10001,22501                         monk
       47501,98001,200001,350001,500001
       700001,950001,1250001,1750001,2250001
       2750001,3250001,3250001,3250001,3250001
       3250001,3250001,3250001,3250001,3250001
       4,2,17,0
       1,2,2,2,2,2,2,2,2,2,2
       1,2001,4001,8001,16001                          bard
       25001,40001,60001,85001,110001
       150001,200001,400001,600001,800001
       1000001,1200001,1400001,1600001,1800001
       2000001,2200001,3000001,3000001,3000001
        6,1,10,1 1,2,2,2,2,2,2,2,2,2,2

           Secondary skills

       "ARMORER"
       "BOWYER/FLETCHER"
       "FARMER/GARDENER"
       "FISHER"
       "FORESTER"
       "GAMBLER"
       "HUNTER/FISHER"
       "HUSBANDMAN"
       "JEWELER/LAPIDARY"
       "LEATHER WORKER/TANNER"
       "LIMNER/PAINTER"
       "MASON/CARPENTER"
       "MINER"
       "NAVIGATOR"
       "SAILOR"
       "SHIPWRIGHT"
       "TAILOR/WEAVER"
       "TEAMSTER/FREIGHTER"
       "TRADER/BARTERER"
       "TRAPPER/FURRIER"
       "WOODWORKER/CABINETMAKER"
       "NONE"


                               Page 41

            Adjustments to be made for age brackets
               Abilities in usual order.
        0,-1, 0, 0, 1, 0, 0
        1, 0, 1, 0, 0, 0, 0
       -1, 1, 1, 0,-1, 0,-1
       -2, 1, 0,-2,-1, 0,-2
       -1, 1, 1,-1,-1, 0,-2

           Minor psionic disciplines

       "ANIMAL TELEPATHY"
       "BODY EQUILIBRIUM"
       "BODY WEAPONRY"
       "CELL ADJUSTMENT"
       "CLAIRAUDIENCE"
       "CLAIRVOYANCE"
       "DETECT GOOD/EVIL"
       "DETECT MAGIC"
       "DOMINATION"
       "EMPATHY"
       "ESP"
       "EXPANSION"
       "HYPNOSIS"
       "INVISIBILITY"
       "LEVITATION"
       "MIND OVER BODY"
       "MOLEC. AGITATION"
       "OBJECT READING"
       "PRECOGNITION"
       "REDUCTION"
       "SENSE PSY. IMPRS."
       "SUSPEND ANIMATION"

           Major psionic disciplines

       "ASTRAL PROJECTION"
       "AURA ALTERATION"
       "BODY CONTROL"
       "DIMENSION DOOR"
       "DIMENSION WALK"
       "ENERGY CONTROL"
       "ETHEREALNESS"
       "MASS DOMINATION"
       "MIND BAR"
       "MOLECULAR MANIP."
       "MOLEC. REARRANGE."
       "PROBABILITY TRAV."
       "TELEKINESIS"
       "TELEMPATHIC PROJ."
       "TELEPATHY"
       "TELEPATHIC PROJ."
       "TELEPORTATION"
       "SHAPE ALTERATION"

           Psionic attack modes and Highlighted letters

       "PSIONIC BLAST","P"

                               Page 42


       "MIND THRUST","M"
       "EGO WHIP","E"
       "ID INSINUATION","I"
       "PSYCHIC CRUSH","Y"

           Psionic defense modes and Highlighted letters

       "MIND BLANK","M"
       "THOUGHT SHIELD","T"
       "MENTAL BARRIER","E"
       "INTELLECT FORTRESS","I"
       "TOWER OF IRON WILL","O"

           Print form

       The character output form fills the next 46 lines and
       can be upto 80 characters long.


           Coin types

       "PLATINUM"
       "GOLD"
       "ELECTRUM"
       "SILVER"
       "COPPER"

        Character status

       "ALIVE"
       "DEAD"
       "PARALYZED"
       "STONED"
       "INFECTED"
       "TOTALLY GONE"

            Starting money constants A, B, and C

       0,2,0


















                               Page 43

                               CHRCTRS.CGU

       Characters are stored as a single record in a random access
       file. The position of the character in the file is used by
       FRP, CGU, SBU, and SEU. We do not recommend editing this
       file except by using the Edit Character Utility.

       The following record structure is used.

       Bytes

         0 -  20        Character name (string)
        21 -  40        Player name    (string)
        41 -  48        Creation time  (string)
        49 -  58        Creation date  (string)
        59 -  65        Player abilities (one byte integers with
                        128 added to each)
        66 -  66        Unmodified charisma (stored as abilities)
        67 -  67        Unmodified comeliness (stored as abilities)
        68 -  68        Strength over 18 or percentage for
                        cavaliers (one byte integer)
        69 -  69        Percentage dexterity for cavaliers (one
                        byte integer)
        70 -  70        Percentage constitution for cavaliers (one
                        byte integer)
        71 -  73        Classes (one byte integers)
        74 -  74        Race (one byte integer)
        75 -  77        Levels (one byte integers)
        78 -  78        Alignment (one byte integer)
        79 -  79        Sex (one byte integer)
        80 -  81        Age (integer)
        82 -  83        True age (integer)
        84 -  85        Lifespan (integer)
        86 -  86        Height in feet (one byte integer)
        87 -  87        Height in inches (one byte integer)
        88 -  89        Weight (integer)
        90 -  90        Skill (one byte integer)
        91 -  95        Psionic attack modes (five one byte
                        integers)
        96 - 100        Psionic defense modes (five one byte
                        integers)
       101 - 102        Psionic strength (integer)
       103 - 104        Major disciplines (two one byte integers)
       105 - 109        Minor disciplines (five one byte integers)
       110 - 174        Hitpoints (75 one byte integers)
       175 - 194        Coins (5 long integers)
       195 - 195        Characters status (one byte integer)
       196 - 196        Spellbook status (string)
       197 - 197        Character type (string) (S,M,or D)
       198 - 209        Experience points (3 long integers)
       210 - 210        not in use
       211 - 211        New experience points (long integer)
       212 - 213        Encumbrance (integer)
       214 - 214        used by FRP
       215 - 234        God (string)
       235 - 254        Home (string)


                               Page 44


                              RACE.PRN


       This file contains the race information that will be printed
       request with a character.  This file contains a description
       that is generally compatible with ADVANCED DUNGEONS AND
       DRAGONS (tm).  This file is stored in a squeezed format
       and should be converted to ASCII (page 30) before editing.

       The information for a race follows a line with the following
       code:

               Line Code=>  ~RR

               "~" = Code delimiter
               RR  = Race number 1 - 7 (1 Human/2 Half-Elf/...)

       This code must begin in the first column of line.  Any valid
       ASCII characters (not IBM graphic characters) can follow.


                              CLASS.PRN


       This file contains the class information for a character.
       The class description in this file is generally compatible
       ADVANCED DUNGEONS AND DRAGONS (tm).  The file is stored in
       a squeezed format and should be converted to ASCII (page 30)
       before editing.

       The information for a race follows a line with the following
       code:

               Line Code=>  ~RR

               "~" = Code delimiter
               RR  = Class number 1 - 13 (1 Fighter/2 Barbarian/...)
                     This class number only includes the single
                     classes.

       This code must begin in the first column of line.  Any valid
       ASCII characters (not IBM graphic characters) can follow.















                               Page 45

```
{% endraw %}

## FRP.DOC

{% raw %}
```























                       FANTASY ROLE PLAYING UTILITY



                           GAME MASTERS VERSION



                               Version 2.12






                            By W. Jeff Meier
                          And Bill S. Hitchcock





                         A SOFTWARE MINES PRODUCT










                             BEFORE BEGINNING


                     USE THE DOS DISKCOPY COMMAND TO
          BACKUP FRP AND ITS ASSOCIATED FILES TO ANOTHER FLOPPY






                  Copyright 1987, 1988, 1989 W. Jeff Meier &
                            Bill S. Hitchcock




















                  IBM PC is the registered trademark of
                     INTERNATIONAL BUSINESS MACHINES

                       ADVANCED DUNGEONS & DRAGONS
                      is the registered trademark of
                                TSR Games


                              Software Mines
                          2401 Copperfield Ave.
                           Ponca City, OK 74604









                                 DISCLAIMER

       Software Mines, and/or the author(s) of this product specifically
       disclaim all warranties, expressed, or implied. In no event shall
       Software Mines, and/or the author(s) of this product be held
       liable for any loss or damage including but not limited to any
       loss or damage caused by the direct use of this product or any
       incidental, or consequential damages.

                              LICENSE AGREEMENT

       This product is copyrighted and all rights are reserved just like
       a book.  Copying this product for others is allowed as long as it
       is complete and unmodified.  You may not sell this product.  A
       distribution fee other than for materials and handling (not to
       exceed $10) is also prohibited.

                                  CREDITS

       Most of the notepad code is from Nelson Ford's MYED text editor and is
       used with his permission.  If you are interested, his editor is
       available from the Public (Software) Library PO Box 35705-F, Houston
       TX 77235-5705 or by phone (713)-721-6104.

       We also need to credit our wives who have endured the 1000+ man hours
       invested in this crazy set of programs, and our play testers Robert
       Stott and Michael DeKrey deserve much of the credit for many of the
       features present in our programs.  You too can appear here also if you
       write in with grand and glorious ideas that we use to improve our
       programs.

                                REGISTRATION

       If you wish to register as a user of this product mail $20 to:

                            SOFTWARE MINES
                            2401 Copperfield Ave.
                            Ponca City, OK  74604

       The registration fee entitles you to:

         1. Be on our mailing list for future updates to FRP and other
            related products (Currently we are developing programs to
            handle spells and stores).

         2. Receive a free copy of our character generation program CGU.

         3. Be able to purchase our other products and updates at $10 each
            (1987 dollars).

                                    Page i






                           FRP VERSION 2.0 ADDITIONS


       Version 2.0 adds the following features to Version 1.0:

         1. Expanded capabilities for monsters:

              o Up to 10 different types in memory at a time with a
                limit of 15 per type.

              o Monster attacks with critical hits, double damage,
                9 attacks per round, damage modifiers, to hit modifiers,
                regeneration, and armor class hit or raw dice rolls
                available.

              o Temporary in memory modification of every ability.

              o Experience point calculation.

         2. Expanded capabilities for characters when used with the
            Character Utility program:

              o Marks up to 25 characters for use in play.

              o Five page notepad for party and each character.

              o Will automatically add new experience to character files.

              o Displays character armor class in monster combat window for
                quick reference.

              o Ability to display any character stored on disk.

         3. Miscellaneous features and bug fixes:

              o Page back and go to page number on user entered tables.

              o Eliminated error on MDA when accessing F1 or user
                added tables.


       ***WARNING MONSTER FILES FROM VERSION 1.0 ARE NOT COMPATIBLE***
       *******REGISTERED USERS CAN REQUEST CONVERSION PROGRAM*********








                                  Page ii







                                INTRODUCTION

       Congratulations!  You have just acquired the game masters utility,
       FRP, for the IBM PC.  Before beginning to use FRP you should read this
       manual completely to fully understand FRP's capabilities.

       FRP is setup to be generally compatible with ADVANCED DUNGEONS AND
       DRAGONS(tm) and its many variants.  We strongly recommend the purchase
       of these rules from TSR.  However, FRP is very flexible in its
       structure, and sacrifices some compatibility to maintain
       flexibility.  The program provides the following features to
       augment play:

          o Dice Rolling Utility - Critical Hits, Fumbles, Double
            Damage, D100, D20, D12, D10, D8, D6, D4, Any Number Of Dice
            With Modifiers.

          o Random Encounters Utility - Allows Random Encounters To Be
            Generated For 10 Different Areas Each With Different
            Probabilities, Select Or Edit Monsters For Encounter,
            Generation Of Weather, Determines Random Encounters, Tracks
            The Passage Of Time, Calculates Movement Rate Based On
            Weather Conditions, And Tracks Moon Phases.

          o Random Treasure Utility - Treasure Types A-Z, Gem Value,
            Jewel Value, Edit Treasure Data, And View Treasure Data.

          o Game Parameter Utility - Allows You To Alter Critical Hit,
            Fumble, Double Damage, And Encounter Probabilities.  The
            Sound Can Also Be Disabled From This Utility.  The Default
            Timer Time Can Be Set And Combat Die Can Be Selected For
            Special Damage Tables And Monster Attacks.

          o Special Function Keys - Allows You To Time The Player's
            Actions, Call Up User Modifiable Tables, Display Monster
            Information, Roll Monster Hit Points, Edit Monster Data,
            Roll Attacks, Regenerate Hit Points, Character Experience Points,
            Notepad, And More.

          o Screen Utility - Allows You To Alter The Screen Colors If A
            Color Display Adapter Is In Use.

          o Installation/Alternate File - Allows You To Easily Install
            FRP On A Hard Disk And Use Or Create Alternate Data Sets For
            Up to Ten Different Areas Without Leaving FRP.





                                    Page iii








       FRP Requires The Following Files:

        Program Disk:

           FRP.EXE - Main Program
           INSTALL.EXE - Installation Program

        Data Disk:

           CHRCTRS.CGU - Character File
           CRITICAL.FRP - 100 Entries For Critical Hit Table
           DATA.CGU - Character Class Data
           FUMBLE.FRP - 100 Entries For Fumble Table
           INDEX0.FRP - 100 Entries Of Pointers To "MONSTERS.FRP"
           INDEX1.FRP - 100 Entries Of Pointers To "MONSTERS.FRP"
           INDEX2.FRP - 100 Entries Of Pointers To "MONSTERS.FRP"
           INDEX3.FRP - 100 Entries Of Pointers To "MONSTERS.FRP"
           INDEX4.FRP - 100 Entries Of Pointers To "MONSTERS.FRP"
           INDEX5.FRP - 100 Entries Of Pointers To "MONSTERS.FRP"
           INDEX6.FRP - 100 Entries Of Pointers To "MONSTERS.FRP"
           INDEX7.FRP - 100 Entries Of Pointers To "MONSTERS.FRP"
           INDEX8.FRP - 100 Entries Of Pointers To "MONSTERS.FRP"
           INDEX9.FRP - 100 Entries Of Pointers To "MONSTERS.FRP"
           PARM.FRP - User Modifiable Game Parameters
           MONSTERS.FRP - Monster File Of Up To 2978 Entries Total
           TABLE.FRP - Game Master Modifiable Tables
           TREAS.FRP - Treasure Tables A-Z
           FRP.DOC - This Documentation
           CGU.DOC - Documentation For The Character Generation Utility

       FRP Requires The Following Hardware:

           IBM PC or Compatible /w 384K, One 360K Floppy Disk Drive,
           MDA, CGA, or Hercules Display Adapters, DOS 2.1 or Greater.















                                    Page iv








                               TABLE OF CONTENTS


       How To Start............................................. 1

       How To Use FRP........................................... 2

       Monster Hot Key [F5]..................................... 3

       Character Hot Key [F6]................................... 5

       Dice Rolling Utility..................................... 6

       Encounter Utility........................................ 7

       Treasure Utility.........................................10

       Game Parameters Utility..................................13

       Screen Utility...........................................14

       Installation Utility.....................................16

       File Structures..........................................17






                                 HOW TO START

       First Time:

       Backup FRP program and data disks to other floppies using the DOS
       DISKCOPY command.  After the backup procedure is finished insert the
       program disk into drive A.

       To install FRP on a hard disk, type [A:] to select drive A.  Type
       [FRP] to enter the program.  Then select the install/alternate data
       option.  Next select the hard disk installation and then select the
       first time installation option.

       FRP comes with parameters set to:

          o A Large Assortment Of Monsters.
          o Approximate AD&D(tm) Treasure Types.
          o Sound On.
          o Hit Dice D20.
          o Jewel & Gem Value Generation Approximates AD&D(tm) Methods.
          o Default Timer Set To 60 seconds.
          o Default Screen Colors.
          o Weather probabilities Are Set To Normal Type Temperatures
            And A 20% Chance Of Precipitation Year Round.

       Entering FRP:

       Insert floppy disk into drive A.  Type [A:] to select drive A.
       Type [FRP].

       You should now see the main menu for FRP.

       Hard Disk Users:

       FRP can be used on a hard disk by copying it and its files to the hard
       disk.  When starting FRP be sure that the default drive and directory
       that contain FRP are selected.  For example if FRP is in drive C and
       in directory FRP, to select that drive and directory type [C:] and
       [CD\FRP].

       Ram Disk Users:

       You may find it useful to place the files for FRP in a RAM disk for
       quick access.  Simply copy the files into a RAM disk and set that
       drive to be the default before entering FRP.  If you use a hard disk a
       RAM disk will not significantly speed up the program.  Be sure to
       restore files to disk after exiting FRP to save changes.





                                    Page 1





                                 HOW TO USE FRP

       To move through the program's options the following system is
       used.

             ENTER  -  Selects Highlighted Choice On Menu

             UP ARROW  -  Moves Highlight Up

             DOWN ARROW  -  Moves Highlight Down

             PRESSING HIGHLIGHTED CHARACTER  -  Selects Choice

             F1  -  Calls Help Screen - For Key Help

             F2  -  Starts Variable Timer - For Timing Events

             F3  -  Starts Default Timer - For Timing Combat Rounds

             F4  -  Pause/Restart For Either Timer

             F5  -  Monster Utility - For Combat And Access To Other
                    Monster Information.

             F6  -  Character Utility - To Add Experience, Take Notes,
                    Mark Character For Use, And Display Data.

             Alt F1 To F10 - User Modifiable Tables

       If F2 or F3 is selected while a timer is active the timer will be
       restarted with the new value.

       An entry of [LIST or blanks] will result in the complete listing of
       monsters being made available for selection any time a monster name is
       requested for input other than when adding a new monster to the main
       index.  When the list is displayed a single monster is displayed at a
       time in alphabetical order.  To move through the listing simply use
       the up and down arrow keys or hit a letter key to go to the first
       monster whose name begins with that letter, other letters in the name
       can also be found by continuing to type.












                                    Page 2





                                MONSTER HOT KEY [F5]


       Selecting the monster hot key [F5] allows you to access encounter
       related information for monsters.  Displayed on this page are monster
       attack damage, hit dice, armor class, size, number of attacks per
       melee round, alignment, intelligence, movement rate, individual hit
       points, individual attack damage and "to hit" rolls, character names
       and armor class, monster/party surprise rolls, monster attack
       modifiers, current combat round, regeneration parameters, and the
       time.  The first selection allows you to chose between:

            ATTACK - Going to attack selections.

            GET    - Getting a new monster from disk.

            RESET  - Resetting the number of monsters available along with
                     their hit points for the current group selected.

            MODIFY - Modify the information associated with a monster in
                     memory for the current group selected.  This allows you
                     to temporarily modify standard monsters to match the
                     current scenario if necessary.

            EXIT   - Return to the previous menu before pressing [F5].

            Up and Down arrows allow you to move between the ten different
            groups of monsters in memory.

       The attack selections are related to combat.  The following are
       available:

            HITS     - Rolls the attacks for the current group of monsters.
                       This excludes monsters whose hit points are zero or
                       less.  Abnormal results (critical, double damage,
                       fumble) are indicated by highlighting the attack
                       result.  For more information on abnormal results
                       see the DICE ROLLING UTILITY.

            DAMAGE   - Allows you to inflict damage on the monster of your
                       choice by using the arrow and [Enter] keys to select.
                       The [Esc] key is used to exit from this choice.
                       Pressing [K] after selecting a monster will kill a
                       monster and prevent it from regenerating.  Pressing
                       [R] will restore a monster to full hit points and
                       allow it to regenerate again.  If the sound is on and
                       a monster's hit points falls below 1 the computer
                       will beep.

            FUM/CRIT - Allows you to view the fumble and critical hit results
                       that have been determined.  These results are

                                    Page 3





                       indicated by the highlighted attack roll.

            MODIFIERS- Attack and damage modifiers can be changed.

            REGEN    - The number of rounds before regeneration begins and
                       the number of points regenerated per round can be
                       added/edited with this selection.

            AC/ROLL  - Alternates the attack roll display between the armor
                       class hit and the actual modified roll if a D20 is
                       used for attacks.

            EXIT     - Returns to previous menu selections for monsters.

            Up and down arrows are active for monsters with more than
            three attacks per round, for viewing other attacks.

       These selections can be made by pressing the arrow keys to highlight
       the proper selection and [Enter] or the first letter of the proper
       selection will also select that option.  [Esc] will exit you from the
       selection menu the same as EXIT.































                                    Page 4





                               CHARACTER HOT KEY [F6]

       Pressing the character hot key [F6] allows you to access utilities
       associated with characters from the Character Generation Utility which
       is free to registered users.  The following features are available:

             ADD EXPERIENCE - This selection will calculate the experience
                              points based on the current monster.  The
                              default number and hit points are calculated
                              using those whose hit points are less than one.
                              PARTY experience is split evenly between those
                              characters loaded into memory.  CHARACTER
                              experience will assign all points to the
                              selected character.  Experience points
                              awarded can also be edited to include treasure.

             DISPLAY        - You can view any character on disk with this
                              utility.

             NOTES          - Five pages of notes for the PARTY and each
                              individual CHARACTER are available for your
                              use.  Pressing [F1] in the notepad will provide
                              the necessary information required to use this
                              feature.

             LOAD           - Will load a character into memory for use in
                              automatically updating experience, and for
                              display of armor class information during
                              combat.  Once a character is loaded it will
                              be loaded automatically with FRP unless
                              specifically UNLOADED.

             UNLOAD         - Allows you to unload a character from memory
                              during play.

             EXIT           - Return to the previous menu before pressing
                              [F5].















                                    Page 5







                               DICE ROLLING UTILITY

       The dice rolling utility provides the following features:

       ROLL ANY DICE - With this selection a large number of equal sided dice
       can be rolled with a modifier applied to each.  This modifier can be
       positive or negative.  If the value for a dice roll with a negative
       modifier is less than one the result is set to one.

       PERCENTILE - With this selection a percentile (1-100) dice is
       rolled.

       D20-D12-D10-D8-D6-D4 - With these selections a dice of the indicated
       number of sides is rolled and the result displayed. For example D20 is
       a twenty sided die.

       CRITICAL RESULT - Provides a random result from the critical hit table
       or a double damage result if the probabilities are met.

       FUMBLE RESULT - Provides a random result from the fumble hit table if
       the probabilities are met.

       Combat Die:

       For whichever die (D100-D4) combat use is selected the following
       capabilities are provided:

       If a maximum result (ex. a roll of 20 on a D20) is rolled another
       probability check is made for "Double Damage" or "Critical Hit".  One
       roll between 1 and 1000 is made and compared to the probability for a
       "Critical Hit" or "Double Damage".  If both probabilities are met only
       the "Critical Hit" is displayed.

       If a roll of 1 is indicated another probability check is made for a
       "Fumble".  One roll between 1000 and 1 is made and compared to the
       probability for a "Fumble".  If the probability is met a "Fumble" is
       displayed.

       "Critical Hit's" result in another roll of 1-100 being made and the
       program referencing CRITICAL.FRP for the result.  "Fumbles" also
       result in another roll of 1-100 being made and the program referencing
       FUMBLE.FRP for the result.

       All three special results will play a tone if the sound is on.






                                    Page 6





                                RANDOM ENCOUNTERS

       The Encounter Utility provides you with the ability to roll random
       encounters and determine the weather, moon phase, and movement rate.
       There are ten random encounter tables available each with a maximum of
       100 creatures per table.  The file MONSTERS.FRP holds a maximum of
       2978 monsters.  The utility also allows you to edit the encounter and
       monster files, or select a monster.

       The utility provides the following information for a random
       encounter:

                         o Monster Name
                         o Armor Class
                         o Hit Dice
                         o Attack Damage
                         o Number Of Attacks Per Melee Round
                         o Creature Size
                         o Movement Rate
                         o Treasure Type
                         o "In Lair" Or "Out Of Lair" (Rolled At
                           Selection Time)
                         o Alignment/Intelligence

       All of the above information except lair status and treasure type are
       available in the Monster Utility (F5) for information during combat
       situations.

       USER ENTERED PROMPTS 1-10 - Rolls a random encounter based on a file
       pointer to a record in MONSTERS.FRP.  For a more detailed description
       see File Structures.  The initial values for these are WILDERNESS
       ENCOUNTER, PLAINS ENCOUNTER, TOWN ENCOUNTER, MOUNTAINS, ENCOUNTER,
       DESERT ENCOUNTER, FOREST ENCOUNTER, AND DUNGEON LEVEL #1 TO #4
       ENCOUNTER.

       SELECT MONSTER - Allows you to access the above information for any
       monster stored on file.  When typing in a monster name the program
       will select the monsters with the best fit to the name entered, so an
       exact match is not required.  An entry of [LIST or blanks] will result
       in the complete monster file being made available for selection.  To
       move through the selections use the up or down arrow keys or the
       letter keys A-Z.

       EDIT ENCOUNTER INDEX - Allows you to modify each random encounter
       index file.  A random encounter is determined by rolling a number
       between 1-100 and going to that record in the appropriate index.  The
       value in that index then points to the appropriate record in the
       master monster file.  To modify the probabilities and possibilities of
       encounters requires editing each index using this feature.  The labels
       displayed on the menu can also be modified by altering the information
       in PARM.FRP (see File Structures).

                                    Page 7






       MODIFY MONSTERS - A built in utility for editing MONSTERS.FRP that
       will sort the monsters alphabetically and preserve the proper
       indexing.  If a monster is deleted with the utility and an index
       points to that monster the pointer is changed to the first record.  It
       is advisable to modify pointers to a monster prior to deletion. Codes
       used in adding monster files follow:

         Optional Hit Dice Codes:
                      Number Of Pips   -  "D"  (Default Of Eight)
                      Hit Point Range  -  "HP" (- Is Only Available Code)
                      Minuses Or Range -  "-"  (From Total)
                      Pluses           -  "+"  (To Total)
                      Variable Number  -  "TO" (Results In Prompt)

          Examples:
                      5 = Five Eight Sided Hit Dice
                    2D3 = Two Three Sided Hit Dice
               10-50 HP = Ten To Fifty Hit Points
               1 To 4D9 = One To Four Nine Sided Hit Dice
                 3D10+1 = Three Ten Sided Dice Plus One Hit Point

          Monster Attack Damage Codes:
                      Number Of Pips   -  "D"  (Default Of Eight)
                      Hit Point Range  -  "HP" (-* Are Only Available Codes)
                      Minuses Or Range -  "-"  (From Total)
                      Pluses           -  "+"  (To Total)
                      Number Of Rounds -  "*"
                      Attack Separator -  "/"

           Examples:
                      5 = Five Eight Sided Hit Dice
                    2D3 = Two Three Sided Hit Dice
               10-50 HP = Ten To Fifty Hit Points
                 3D10+1 = Three Ten Sided Dice Plus One Hit Point
               2D4*2/D5 = Two Four Sided Hit Dice For Two Attacks
                          And One Five Sided Dice For One Attack.

         Probability In Lair Should Be Between 0 And 100.

         Treasure Types Should Be Coded As Shown On Page 11.

         Experience Point Codes:

                  Experience Point Code = "MMMM+CC"

                  MMMMM = Base Experience Per Monster
                     CC = Experience Points Per Hit Point




                                    Page 8






             Example:

                   20+2 = Twenty experience points per monster plus
                          two points per hit point.
                    357 = 357 experience points per monster plus no
                          points per hit point.


       ADVANCE DAY - Performs the following functions:

            o Advances date.
            o Determines number of encounters.
            o Determines daily weather conditions.
            o Displays moon phases.
            o Calculates movement rates based on weather conditions.
            o Three different movement rates are displayed for
              foot, mounted, and water travel.

       The calendar used is simple, each month has 30 days and each year has
       12 months.  This date is tracked in PARM.FRP and can be modified in
       Game Parameters Utility.  If the sound is on at 1/1/XXXX (New Years
       Day) the program will play a little tune to remind you of possible
       character aging effects.  Once the number of encounters has been
       determined by advancing the date you roll or select the encounter
       using the utilities provided.

       The maximum number and probability of each encounter can be modified
       using the Game Parameters Utility.

       Weather conditions such as temperature, wind, and precipitation are
       all determined based on the month and random rolls.  To modify these
       probabilities edit PARM.FRP (see File Structures). Weather also
       modifies the base movement rate.  To adjust these parameters edit
       PARM.FRP (see File Structures).

       Moon phases are based on periods set in the Game Parameters Utility.

       EXIT - Returns you to the main menu.













                                    Page 9






                                TREASURE UTILITY


       The Treasure Utility provides the following features:

       ROLL ANY TREASURE - This selection allows treasure to be rolled based
       on types A-Z.  If the treasure is for a selected monster the default
       treasure types can be used by pressing enter.  If you wish to manually
       input the treasure type for an encounter you must type in your
       selection.

       Manually input treasure types can roll multiple types at a time,
       for example:

        Input:    ABCQ*7

        Result:   The above input will roll treasure types A,B,C,Q for
                  the input number of creatures.  In this case, the result of
                  treasure type Q will be multiplied by a factor of 7.

       The results of these rolls will be displayed on the left hand side of
       the screen.  The results categories are based on prompts stored in
       PARM.FRP.  For more detailed instructions on how to modify this file
       see File Structures.

       The number of creatures input is only used to multiply those treasure
       types that are an individuals treasure.

       To multiply the treasure type by a factor place an asterisk (*)
       between the number and the treasure type (ex. A*3,L*80).  The maximum
       value of a multiplier is 99.

       No delimiter (commas or spaces) is necessary between multiple treasure
       types.

       GEMS - This selection rolls a gems of random value in GP (Third
       Monetary Type).  The probabilities are based on values in PARM.FRP.
       The method is divided into 20 ranges each with its own range of
       values.  A roll of 1 to 20 is used to select between them.  A roll of
       19 and 20, however, requires another probability check to be met or
       else the range procedure is repeated.  The 19th range has an
       additional probability of 1 in 5 that must be met, while the 20th
       range is 1 in 20.

       The number of ranges available and probabilities for each range
       should allow you to match most systems fairly close.  If you
       choose to modify this file be sure not to exceed 32767 for any
       entry and make all values integers (no decimal points).



                                    Page 10





       JEWELS - This selection rolls a jewel of random value in GP (Third
       Monetary Type).  The probabilities are based on values in PARM.FRP.
       The method is divided into 20 ranges each with its own range of
       values.  A roll of 1 to 20 is used to select between them.  A roll of
       19 and 20, however, requires another probability check to be met or
       else the range procedure is repeated.  The 19th range has an
       additional probability of 1 in 5 that must be met, while the 20th
       range is 1 in 20.

       The number of ranges available and probabilities for each range should
       allow you to match most systems fairly close.  If you choose to modify
       this file be sure not to exceed 32767 for any entry and make all
       values integers (no decimal points).

       VIEW TREASURE DATA - This selection allows you to view the
       probabilities for each treasure type in order from A-Z.

       EDIT TREASURE DATA - This selection allows you to modify the
       probabilities for each treasure type.  When this selection is made a
       second menu appears with the following options based on the prompts in
       PARM.FRP.

       NEXT TREASURE TYPE - Allows you to change the treasure type being
       edited to any between A-Z.

       LOCATION FOR TREASURE - Allows you to change the treasure types
       location ("In Lair"/"Individual").

       Treasure, "In Lair", is a large amount of treasure with a probability
       for each item.  Treasure, "Individual", is a small amount of treasure
       found on each monster and no probabilities are rolled to determine if
       the treasure item is found.

       FIRST 7 FIELDS - Allows you to change the probability for a each field
       between 0-100 percent, and the appropriate dice roll.  The
       probabilities are ignored for "Individual" treasure.  The dice roll is
       coded as follows:

                             NN "D" SS * MMMM + P

                             NN - Number Of Dice
                             SS - Number Of Sides
                           MMMM - Multiplier
                              P - Plus Or Minus Applied At End

       Examples:    4D3  -  Four three sided dice.
                    D10  -  One ten sided dice.
              4D10*1000  -  Four ten sided dice times one thousand.
                D8*10-4  -  One eight sided dice times ten minus four.
                      3  -  Will always result in three.

                                    Page 11






       The minimum result when a minus is present is one.

       LAST 6 FIELDS - Allows the Game Master to modify the probability for
       the major category and number of items for the other fields.  The
       probability is ignored for "Individual" treasure.  The same coding for
       dice rolling is used as above.

       EXIT - Exits the Edit mode.











































                                    Page 12






                               GAME PARAMETERS UTILITY


       The Game Parameters Utility allows you to modify some of the basic
       system parameters.  The selections perform the following functions:

       DATE - Changes the game date, while preserving the moon phases and
       accumulating snow.

       CRITICAL HIT PROBABILITY - Changes the probability for a critical hit
       between 0-1000 chances in 1000.

       PROBABILITY OF DOUBLE DAMAGE - Changes the probability for double
       damage between 0-1000 chances in 1000.

       FUMBLE PROBABILITY - Changes the probability for a fumble between
       0-1000 chances in 1000.

       ENCOUNTER PROBABILITY - Changes the probability of an encounter
       between 0-1000 chances in 1000 for a specified number of times in a
       day.

       SOUND ON/OFF - Turns the sound on or off.

       TIMER (F3) TIME - Changes the default timer between 0-9999
       seconds (no fractions).

       ATTACK DICE DEFINITION - Alters the attack dice used for special
       results in the Dice Utility.

       MOON DATA - Changes the number of moons (0-2), starting phase
       (0-7), and period (8-3700 days).

       EXIT - Returns to the main menu.

       ***WARNING NOT SAVING RESULTS MODIFIED WITH THIS UTILITY WILL LOOSE***
        ***THE CURRENT DATE AND SNOW ACCUMULATION IF NOT PREVIOUSLY SAVED***














                                    Page 13





                                   SCREEN UTILITY


       The Screen Utility allows you to modify the screen colors on a
       color monitor.

       Color Codes:

       Number                Color

       0                     Black
       1                     Blue
       2                     Green
       3                     Cyan
       4                     Red
       5                     Magenta
       6                     Brown
       7                     White
       8                     Gray
       9                     Light Blue

       10                    Light Green
       11                    Light Cyan
       12                    Light Red
       13                    Light Magenta
       14                    Yellow
       15                    High Intensity
                             White

       MAIN FOREGROUND COLOR - Changes the main foreground color from 8,
       gray.

       MAIN BACKGROUND COLOR - Changes the main background color from 0,
       black.

       HIGHLIGHTED FOREGROUND COLOR - Changes the highlighted foreground
       color from 11, light cyan.

       HIGHLIGHTED BACKGROUND COLOR - Changes the highlighted foreground
       color from 0, black.

       BORDER - Changes the border color from 0, black.  This feature
       may cause EGA cards problems if a color other than 0 is selected.

       DEFAULT COLORS - Changes the screen colors back to the default
       values.

       EXIT - Saves the new settings and returns to the main menu.

       ***WARNING NOT SAVING RESULTS MODIFIED WITH THIS UTILITY WILL LOOSE***
        ***THE CURRENT DATE AND SNOW ACCUMULATION IF NOT PREVIOUSLY SAVED***

                                    Page 14





       IF YOUR SCREEN COMES UP BLACK ON THE MAIN MENU

       Follow the procedure below to restore your screen to a readable
       set of colors after rebooting ([ALT-CTRL-DEL]) and setting the
       system to the proper directory.

       Step 1:

       Type [FRP]

       Step 2:

       Hit The SPACEBAR

       Step 3:

       Type [S]

       Step 4:

       Type [D]

       Your screen should now be restored to a readable menu.





























                                    Page 15





                                INSTALLATION UTILITY


       The Installation Utility allows you to install FRP on a hard disk
       and modify the current files to use alternate data sets.

       INSTALL ON HARD DISK - This selection allows you to install all
       or a subset of the files on a directory you specify.  If only a
       partial installation is being made the directory must exist and
       be the default directory on that drive.

       BACKUP FILES - This selection backs up the files either to the
       main files [M] or to alternate data sets [0] to [9].  The backup
       can either be a total one which includes all data files or the
       backup can be selective.  The program will not allow you to back up
       the main files to the source (current) drive.

       RESTORE ALTERNATE DATA SET - This selection reloads either the
       main [M] or alternate data sets [0] to [9].  The load can either
       be total which includes all data files or selective.

       GO BACK TO FRP - Will return to the FRP main menu.

       QUIT - Will exit back to DOS.




























                                    Page 16





                                FILE STRUCTURES


       FRP was written in such a manner that you can modify the program
       to closely match your system.   To accomplish this goal files are
       used liberally to represent most parameters.

       The following is a description of how each file is structured.
       Before modifying these files it is advisable to backup the
       original files in case of problems.  FRP will not function properly
       if files are incomplete or improperly structured so BE CAREFUL!!

       In each file description the following nomenclature will be used
       to identify variable types:

       INTEGER VALUES - ALL CAPITALS (And Are Limited To Between -32,768
                                      And 32,767)

       real numbers - lower case (And Are Limited To Between -1.7E+38
                                  And -2.9E-39 For Negative Values And
                                  2.9E-39 And 1.7E+38 For Positive
                                  Values)

       "Character Strings" - "In quotes"

       ***We  recommend verifying any new database by using FRP before a
       normal game session to avoid crashing the program during a game
       session and losing valuable game time***



       File - PARM.FRP:

       This file is setup for easy modification with comments included
       in the file itself.  These comments or substitutes must be left
       in the file or FRP will not run.  Understanding the structure
       of this file is best done while viewing it.

       Line 1 - "Comment"


       Line 2 - DAY,MONTH,YEAR,CRITICAL HIT PROBABILITY,DOUBLE DAMAGE
       PROBABILITY,FUMBLE PROBABILITY,PROBABILITY OF AN ENCOUNTER,NUMBER
       OF ENCOUNTERS PER DAY MAX.,FOREGROUND COLOR,HIGHLIGHTED
       FOREGROUND COLOR,BACKGROUND COLOR,HIGHLIGHTED BACKGROUND
       COLOR,BORDER COLOR,NOISE ON/OFF,ATTACK DIE CODE,MOON DATA,SNOW

       The above line can be more easily modified using utilities
       provided in FRP.

       Line 3 - "Comment"

                                    Page 17






       Lines 4 through 13 contain the prompts used on the Encounter
       Utility Menu for the ten different encounter areas.  The first
       string is the complete prompt and the second string is the key
       letter used for selecting that choice.  The key letter should be
       unique and part of the prompt phrase.

       Line 4 - "INDEX1.FRP Encounter Prompt","Key Letter"

       Line 5 - "INDEX2.FRP Encounter Prompt On","Key Letter"

       Line 6 - "INDEX3.FRP Encounter Prompt On","Key Letter"

       Line 7 - "INDEX4.FRP Encounter Prompt On","Key Letter"

       Line 8 - "INDEX5.FRP Encounter Prompt On","Key Letter"

       Line 9 - "INDEX6.FRP Encounter Prompt On","Key Letter"

       Line 10 - "INDEX7.FRP Encounter Prompt On","Key Letter"

       Line 11 - "INDEX8.FRP Encounter Prompt On","Key Letter"

       Line 12 - "INDEX9.FRP Encounter Prompt On","Key Letter"

       Line 13 - "INDEX0.FRP Encounter Prompt On","Key Letter"

       Line 14 - "Comment"

       Lines 15 through 27 represent the prompts used for treasure along
       with the letter used for menu selection.  Prompts #1 through #7
       represent individual categories.  However, prompt #8 represents a
       category and an item.  Prompts #9 through #13 are represented by
       category #8.

       Line 15 - "Treasure Prompt #1","Key Letter"

       Line 16 - "Treasure Prompt #2","Key Letter"

       Line 17 - "Treasure Prompt #3","Key Letter"

       Line 18 - "Treasure Prompt #4","Key Letter"

       Line 19 - "Treasure Prompt #5","Key Letter"

       Line 20 - "Treasure Prompt #6","Key Letter"

       Line 21 - "Treasure Prompt #7","Key Letter"

       Line 22 - "Treasure Prompt #8","Key Letter"


                                    Page 18





       Line 23 - "Treasure Prompt #9","Key Letter"

       Line 24 - "Treasure Prompt #10","Key Letter"

       Line 25 - "Treasure Prompt #11","Key Letter"

       Line 26 - "Treasure Prompt #12","Key Letter"

       Line 27 - "Treasure Prompt #13","Key Letter"

       Line 28 - "Comment"

       Lines 29 through 40 each represent a month's temperature
       probabilities starting with month number 1 and ending with month
       number 12.  There are 10 probability entries for each month (line).
       For each day a number between one and ten is rolled and compared to
       the entries for the current month.  These entries are coded as
       follows:

                           0 - Cold
                           1 - Chilly
                           2 - Fine
                           3 - Warm
                           4 - Hot

       Each line is coded with ten integers between 0 and 4 separated by
       commas as in the following example:

       0,0,1,1,1,1,2,3,0,1

       For the above example a roll of eight would result in a WARM day.


       Line 41 - "Comment"


       Lines 42 through 53 each represent a month's wind probabilities
       starting with month number 1 and ending with month number 12.
       There are 10 probability entries for each month (line).  For each day
       a number between one and ten is rolled and compared to the entries for
       the current month.  These entries are coded as follows:

                           0 - Dead
                           1 - None
                           2 - Light
                           3 - Brisk
                           4 - Strong
                           5 - Gale

       Each line is coded with ten integers between 0 and 5 separated by
       commas as in the following example:

                                    Page 19






       0,1,2,2,2,3,4,4,5,5

       For the above example a roll of eight would result in a STRONG
       WIND.

       Line 54 - "Comment"

       Line 55 - Consists of 12 integers between 0 and 10 separated by
       commas.  These numbers represent the probability for rain in a
       given month beginning with month one and ending with month
       twelve.  The coded values represent the following probabilities:

                0 - 0%  Chance Of Rain
                1 - 10% Chance Of Rain
                2 - 20% Chance Of Rain
                .
                .
                .
               10 - 100% Chance Of Rain

       An example of this line follows:

       2,2,3,3,3,2,2,2,2,2,2,2

       For the above example month 4 would have a 30% chance of rain on
       any given day.

       Line 56 - "Comment"

       Line 57 -FOOT MOVEMENT #1,FOOT MOVEMENT #2,FOOT MOVEMENT #3

       These movement rates are base foot movement rates.

       Line 58 - "Comment"

       Line 59 - MOUNTED MOVEMENT #1,MOUNTED MOVEMENT #2,MOUNTED
       MOVEMENT #3

       These movement rates are base mounted movement rates.

       Line 60 - "Comment"

       Line 61 - BOAT MOVEMENT #1,BOAT MOVEMENT #2,BOAT MOVEMENT #3

       These movement rates are base boat movement rates.

       Line 62 - "Comment"

       Line 63 - rain movement modifier,snow mov. mod#1,snow mov. mod#2


                                    Page 20





       Rain and snow movement modifiers are real numbers that are
       multiplied to the base foot and mounted movement rates during
       those conditions.  When precipitation is indicated in COLD
       weather it is displayed as SNOW.  Snow accumulates at a random
       rate based on (random number 1 to 10)*(Prob Rain)/20.  Snow
       movement rates are based on a variable modifier limited to
       no less than snow movement modifier #1.  The variable modifier
       is (1-(inches of snow)/(snow mov. mod#2)).  The variable modifier
       allows you to compensate movement rates based on snow depth.
       Snow melts at .5, 2, 5, and 15 inches per day in chilly, fine,
       warm, and hot weather respectively.

       Line 64 - "Comment"

       Line 65 - dead wind modifier,none wind modifier,light wind
       modifier,brisk wind modifier,strong wind modifier,gale wind
       modifier

       Wind movement modifiers are real numbers that are multiplied to
       the base boat movement rates during those wind conditions.

       Line 66 - "Comment"

       Line 67 - GEM MAX. 1,GEM MAX. 2,......,GEM MAX. 20

       These twenty inputs represent the twenty upper bounds for gem
       values.

       Line 68 - "Comment"

       Line 69 - GEM MIN. 1,GEM MIN. 2,......,GEM MIN. 20

       These twenty inputs represent the twenty lower bounds for gem
       values.

       Line 70 - "Comment"

       Line 71 - JEWEL MAX. 1,JEWEL MAX. 2,......,JEWEL MAX. 20

       These twenty inputs represent the twenty upper bounds for jewel
       values.

       Line 72 - "Comment"

       Line 73 - JEWEL MIN. 1,JEWEL MIN. 2,......,JEWEL MIN. 20

       These twenty inputs represent the twenty lower bounds for jewel
       values.

       Files - INDEX1.FRP,INDEX2.FRP,...,INDEX9.FRP,INDEX0.FRP:


                                    Page 21





       These files are setup as pointer files to MONSTERS.FRP for random
       encounters for the 10 user definable areas.  Each of these files
       contains 100 entries of integers between 1 and 2978 pointing to a
       specific record in MONSTERS.FRP.  When an encounter is rolled for
       (1-100) an area its index is used to find the appropriate
       monster.   A utility is provided for editing this file in the
       Encounter Utility of FRP.  If you wish to modify these files
       without that utility you should insert the number of the entry in
       MONSTERS.FRP you wish a given roll to indicate into the file.
       These entries are entered with a single integer per record.

       File - MONSTERS.FRP

       This file is the master monster file for FRP, use of the file
       utilities for this file is highly recommended.  The position of
       each record is critical to the indexing system.  If a new monster
       is added it should be appended to the end of the file or some of
       the pointers in INDEX0.FRP to INDEX9.FRP could be pointing to the
       wrong monsters.  The useful limit of this file is 2978 records.

       Each entry is coded in a random file with the number indicating
       the field length as follows:

         "20-Name","5-AC","10-Hit Dice","24-Damage", "1-#Attks/Rnd",
         "10-Treasure Type","1-Size","3-% Chance In Lair","8-Movement
         Rate","9-Alignment/Int","8-Experience Point Value"

       File - TREAS.FRP

       This file is the source for random treasure probabilities and
       amounts.  A utility for editing this file is available in the
       Treasure Utility in FRP.  It is highly recommended to use this
       utility instead of editing the file directly.

       Line 1 to 26 - Correspond to treasure types A-Z respectively.
       Each line is coded as follows:

       INT1,1NT2,...,INT8,"String 1",...,"String 13","I or L"

       This description should only be used to reconstruct a lost file
       by starting with all zeros for integers and "I" or "L" for
       individual or lair treasure locations.

       Files - CRITICAL.FRP and FUMBLE.FRP


       Each of these files must contain 100 entries of character strings
       that correspond to a critical hit or fumble result.  When a
       fumble or critical hit is rolled for (1-100) the file is used to
       find the appropriate result.  These entries are entered with a
       single string per record.

                                    Page 22





       An example of a typical entry follows:

       "Weapon Dropped/Two Rounds Lost To Recover"

       ***HINT***

       If these files do not offer you enough flexibility consider using
       multiple sets.  For example one set for each continent or major
       area.


       File - TABLE.FRP

       Is a file used for display purposes only.  You can use this file to
       display any information desired.  To allocate text for a display
       simply place an "F" followed by a number between 1-10 starting in the
       first column of a text file.  A maximum of up to 21 lines following
       that line are displayed on the screen.  A line can be a maximum of 78
       character long.

       Multiple pages can also be displayed.  A "P" in the first column will
       cause the next text to be displayed when any key is pushed.  The
       maximum number of pages per function key is 100.

       These displays are accessed by simultaneously pressing the [ALT] key
       and the appropriate function key F1-F10.

       Example:

       F5 --- The first line is used to indicate the function key.

                   (Appropriate Information Of Up To 21 Lines)

       P  --- Indicates an additional page

                   (Appropriate Information Of Up To 21 Lines)

       F3 --- The first line is used to indicate the function key.

                   (Appropriate Information Of Up To 21 Lines)












                                    Page 23


```
{% endraw %}

## PROBLEM.DOC

{% raw %}
```


                 <<<<SOFTWARE MINES PROBLEM HOT SHEET>>>>

      
      
        Please fill out the following information if you encounter
        a problem using one of our programs and mail it to:
      
                            Software Mines
                            2401 Copperfield Ave.
                            Ponca City, OK 74604
      
      
     
        Program Name:_______________________  Version:________
      
        Computer Model:____________________________
      
        DOS Type & Version:__________    Computer Memory:_____ Kb
      
        Video Card:________________
      
        Disk Configuration (Floppy & Hard):________________________
      
        Have You Tried Removing All Memory Resident Programs:______
      
        Problem
        Description:_______________________________________________
      
        ___________________________________________________________
      
        ___________________________________________________________
      
        ___________________________________________________________
      
        ___________________________________________________________
      
        ___________________________________________________________
      
        ___________________________________________________________
      
        ___________________________________________________________
      
        ___________________________________________________________
      
        ___________________________________________________________
      
        ___________________________________________________________
      
        ___________________________________________________________

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```

                 <<<<SOFTWARE MINES REGISTRATION FORM>>>>

   
   
        Please fill out the following information and enclose a check
        for $20 if you wish to register and receive a copy of CGU:
   
              Mail This To:  Software Mines
                             2401 Copperfield Ave.
                             Ponca City, OK 74604
  

        Your Name:________________________________________________

        Street:___________________________________________________
     
        City:______________________  State:_____  Zip:____________
 

        Program Name:_______________________  Version:____________
   
        Computer Model:____________________________
   
        DOS Type & Version:__________    Computer Memory:_____ Kb
   
        Video Card:________________
   
        Disk Configuration (Floppy & Hard):________________________
     
     
        Why Did You Like This Program:_____________________________

        ___________________________________________________________

        ___________________________________________________________

        ___________________________________________________________

     
        What Could We Do To Improve This Program:__________________

        ___________________________________________________________

        ___________________________________________________________

        ___________________________________________________________

        ___________________________________________________________

        ___________________________________________________________
     
     
        Other Comments:____________________________________________

        ___________________________________________________________

        ___________________________________________________________

        ___________________________________________________________

        ___________________________________________________________

```
{% endraw %}

## README.TXT

{% raw %}
```
Shareware limitations:

  The only limitation is that this program cannot not be used
  with our character program or other products that are only
  available to registered users.


The following is a listing of the files included with the
distribution disk for FRP version 2.12:


 FLOPPY.BAT - Floppy disk installation batch file
 HARD.BAT - Hard disk installation batch file
 INSTALL.BAT - Installation instructions batch file
 PKXARC.COM - Unarchiving program

 FRPPROG.ARC - Archived Programs:

    FRP.EXE - Main Program
    INSTALL.EXE - Installation Program

 FPRDATA.ARC - Archived Data Files:

    CHRCTRS.CGU - Character File
    CRITICAL.FRP - Critical Hit Table
    DATA.CGU - Character Class Data
    FUMBLE.FRP - Fumble Table
    INDEX0.FRP - Random Encounter Pointers To "MONSTERS.FRP"
    INDEX1.FRP - Random Encounter Pointers To "MONSTERS.FRP"
    INDEX2.FRP - Random Encounter Pointers To "MONSTERS.FRP"
    INDEX3.FRP - Random Encounter Pointers To "MONSTERS.FRP"
    INDEX4.FRP - Random Encounter Pointers To "MONSTERS.FRP"
    INDEX5.FRP - Random Encounter Pointers To "MONSTERS.FRP"
    INDEX6.FRP - Random Encounter Pointers To "MONSTERS.FRP"
    INDEX7.FRP - Random Encounter Pointers To "MONSTERS.FRP"
    INDEX8.FRP - Random Encounter Pointers To "MONSTERS.FRP"
    INDEX9.FRP - Random Encounter Pointers To "MONSTERS.FRP"
    PARM.FRP - User Modifiable Game Parameters
    MONSTERS.FRP - Monster File Of Up To 2978 Entries Total
    TABLE.FRP - Dungeon Master Modifiable Tables
    TREAS.FRP - Treasure Tables
    FRP.DOC - Documentation For The Dungeon Masters Utility
    CGU.DOC - Documentation For The Character Generation Utility
    PROBLEM.DOC - Software Problem Form
    REGISTER.DOC - Registration Form
   
Type the following to print a copy of the documentation to your
printer after installing the software on your hard or floppy disk:


   PRINT FRP.DOC

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1063

     Volume in drive A has no label
     Directory of A:\

    FILE1063 TXT      1802   3-10-89   9:31a
    FLOPPY   BAT       886   1-30-89   7:26p
    FRPDATA  ARC     79462   1-30-89   7:20p
    FRPPROG  ARC    209572   1-29-89   1:43p
    GO       BAT        38   5-24-88   8:57a
    GO       TXT      1310   9-16-88   7:14a
    HARD     BAT      1022   1-08-89   7:08p
    INSTALL  BAT       604   8-29-88   8:27p
    MANUAL   BAT       147   3-02-89   4:36p
    PKXARC   COM     12288   2-19-88  11:19a
    README   TXT      1948   1-30-89   7:24p
           11 file(s)     309079 bytes
                            9216 bytes free
