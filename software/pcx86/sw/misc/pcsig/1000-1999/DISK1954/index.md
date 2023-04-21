---
layout: page
title: "PC-SIG Diskette Library (Disk #1954)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1954/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1954"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BOWLSTAT DISK 2 OF 2 (1953 ALSO)"

    Bowling statisticians relax, BOWLSTAT keeps track of up to 300 bowlers
    on as many as 99 teams.  Supports tenpin, candlepin, and 5-pin bowling
    games.  Generates nightly captain sheets, and yearly statistics for each
    bowler.
    
    Most "standard" league individual awards have been included along with
    an option for saving of average sheets to the disk drive for
    wordprocessor integration.  The program is completely "SMART MENU"
    driven so there is no need to learn a bunch of commands.
    
    Keeps track of the individual statistics -- name, pinfall, number of
    strings bolwed, average, high single, high triple, high no mark, 69's;
    and team statistics -- name, points won, points lost, total pinfall,
    team high pinfall, and percent of wins vs losses.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COVER.TXT

{% raw %}
```



            ╔════════════════════════════════════════════════╗
            ║ ┬───┐                   ┌───┐                  ║
            ║ │   │                   │                      ║
            ║ ├───┤ ┌───┐ ┬   ┬ ┬     └───┐ ┌─┬─┐ ┌──┐ ┌─┬─┐ ║
            ║ │   │ │   │ │ ┬ │ │         │   │   ├──┤   │   ║
            ║ ┴───┘ └───┘ └─┴─┘ └───┘ └───┘   ┴   ┴  ┴   ┴   ║
            ╚════════════════════════════════════════════════╝



                               Version 1.5A



                        (C) 1990 by Kevin J. Stone
                                    3401 Agricola St.
                                    Halifax, N.S.
                                    B3K 4J2



             Complied with QuickBasic 4.5 - (C)1989 Microsoft
```
{% endraw %}

## FILE1954.TXT

{% raw %}
```
Disk No: 1954                                                           
Disk Title: Bowlstat Disk 2 of 2                                        
PC-SIG Version: S1.5                                                    
                                                                        
Program Title: BowlSTAT                                                 
Author Version: 1.5                                                     
Author Registration: $35.00                                             
Special Requirements: 512K RAM.                                         
                                                                        
Bowling statisticians relax, BOWLSTAT keeps track of up to 300 bowlers  
on as many as 99 teams.  Supports tenpin, candlepin, and 5-pin bowling  
games.  Generates nightly captain sheets, and yearly statistics for each
bowler.                                                                 
                                                                        
Most "standard" league individual awards have been included along with  
an option for saving of average sheets to the disk drive for            
wordprocessor integration.  The program is completely "SMART MENU"      
driven so there is no need to learn a bunch of commands.                
                                                                        
Keeps track of the individual statistics -- name, pinfall, number of    
strings bolwed, average, high single, high triple, high no mark, 69's;  
and team statistics -- name, points won, points lost, total pinfall,    
team high pinfall, and percent of wins vs losses.                       
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## HELP0.TXT

{% raw %}
```




             ▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒  ▒▒   ▒▒   ▒▒
             ▒▒       ▒▒   ▒▒  ▒▒   ▒▒  ▒▒   ▒▒  ▒▒   ▒▒   ▒▒
             ▒▒▒▒▒▒▒  ▒▒   ▒▒  ▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒   ▒▒▒▒▒    ▒▒
                  ▒▒  ▒▒   ▒▒  ▒▒  ▒▒   ▒▒  ▒▒      ▒
             ▒▒▒▒▒▒▒  ▒▒▒▒▒▒▒  ▒▒   ▒▒  ▒▒   ▒▒     ▒      ▒▒


     There  is no  help available  for this  point in  BowlStat. If you feel
 there  should be,  please send  a  request  to the  author at  the address
 displayed on the opening screen.

     All efforts will be made to include  the new help in the next released
 version.
```
{% endraw %}

## HELP1.TXT

{% raw %}
```
                              Menu Operation
                              ──────────────

        All menu  items available in  BowlStat are accessed  through "smart
 menus". To  choose an item, move  the red highlight bar  via the cursor or
 +/- keys of the numeric keypad to the desired choice and press the "Enter"
 key.

        If the menu  item is preceeded by a number,  then it may be selected
 by a pressing  the corresponding number. Note: no  "Enter" key is required
 to finish the selection.

        For example,  to select "5)  BOWLER - Delete"  from the Main  Menu,
 either  move the  highlight via  the cursor  or +/-  keys to  the line "5)
 BOWLER -  DELETE" and press  the "Enter" key  or press "5".  Either method
 selects the same menu item.


                                 Main Menu
                                 ─────────

        The  Main  Menu  has  two  modes  of  operation  - Setup or Normal.
 If a database exits for the name extered at the opening screen "League Name:"
 prompt then Normal mode is used. Otherwise, Setup mode is chosen.

 Setup
 ─────

 Setup mode resticts the Main Menu to one item:

 1) Setup

    This forces  a league database to  be created. To start  the definition
 process, press "Enter".


 Normal
 ──────

 Normal mode will be entered if either of these two conditions exits:

 1) A valid database name was entered at the opening screen "League Name:"
    prompt.

 2) A database has been successfully defined while in Setup mode.

 Either of these conditions will cause the following Main Menu items
 to be displayed:

    1) Defaults Editor - Allows various program settings to be changed.

    2) BOWLER - Scores - Allows input of bowler string scores.

    3) BOWLER - Edit   - Allows altering of the bowler database.

    4) BOWLER - Add    - Allows an addition to the bowler database.

    5) BOWLER - Delete - Allows the deletion of a bowler from the database.

    6) BOWLER - 69's   - Allows input of the number of "69" strings
                         scored by a bowler. (A Candlepin Award)

    7) TEAM - Points   - Allows input of the number of points won by a team
                         for a given series.

    8) TEAM - Edit     - Allows altering of the team database.

    9) Print Options   - Allows printing of various reports. (Average,
                         Captain, & Yearly Statistics Sheets)

    0) EXIT            - To quit BowlStat and return to DOS.

                               Function Keys
                               ─────────────

         BowlStat makes  use of function keys  F1-F4 and F9-10 for  the the
 following functions:

  F1  - Help system pop-up window.
  F2  - Valid Bowler Names pop-up window.
  F3  - Valid Team Names pop-up window.
  F4  - Database Statistics pop-up window.

  F9  - Printer pause.
  F10 - Printer continue.

        F1-F4 are available  at any time after reaching  then Main Menu and
 are disabled during  print operations while function keys  F9-F10 are only
 available only during a print operation.

 Note:  F1-F4 are  only available  for CGA  computer systems  and only  one
        function may be active at a given moment.
```
{% endraw %}

## HELP10.TXT

{% raw %}
```
                                   EXIT
                                   ────

        This Main Menu option is used to exit BowlStat V1.4. and optionally
 save any changes to the Team and Bowler databases currently in memory.

        The Exit Menu option consists of five options which can be selected
 by moving the highlight via the +/-  or cursor arrow keys and pressing the
 "RETURN" or "ENTER" key.

                            ╔════════════════════╗
                            ║     EXIT  MENU     ║
                            ╠════════════════════╣
                            ║ 1)   Main Menu     ║
                            ║ 2) Save & Resume   ║
                            ║ 3)    Resume       ║
                            ║ 4) Save & Exit     ║
                            ║ 5)     Exit        ║
                            ╚════════════════════╝

   The five options are:

   1) Main Menu        - Return to the Main Menu.

   2) Save & Resume    - Save the current Bowler/ Team databases and resume
                         BowlStat V1.4 from the beginning.

   3) Resume           - Resume  BowlStat V1.4  from the  beginning WITHOUT
                         first saving Bower/Team databases. This will cause
                         any changes  to the databases  currently in memory
                         to be lost.

   4) Save & Exit      - Save  the current  Bowler/Team databases and  exit
                         back to DOS.

   5) Exit             - Exit   back   to  DOS  WITHOUT  first  saving  the
                         Bowler/Team databases. This will cause any changes
                         to the databases currently in memory to be lost.

        Before BowlStat  V1.4 saves the current  Bowler/Team databases held
 in memory, the data that was originally on disk is saved in "backup" files
 for  recovery  purposes.  The  original  team  database, <filename>.LDA is
 renamed  to  <filename>.LOL  and  the  bowler  database, <filename>.BDA is
 renamed to  <filename>.BOL. Should recovery  of the old  data be required,
 the  DOS commands  DELETE and  RENAME can  be used  to change the filename
 extensions  back   to  .LDA  and   .BDA,  the  extensions   BowlStat  V1.4
 automatically assumes when loading database information.

 NOTES - Options 3 & 5 require  confirmation. Be aware the once back to DOS
         or  if BowlStat  V1.4 is  restarted, any  changes made  to team or
         bowler databases currently in memory are LOST and not recoverable.

```
{% endraw %}

## HELP11.TXT

{% raw %}
```
                             The Search Panel
                             ────────────────

        The majority of operations in BowlStat V1.4 eequire that a "search"
 condition be entered to define a range of information to be acted upon. If
 search  information  is  required  before  a  function  can  be performed,
 BowlStat V1.4 will display a  blank "BOWLER INFORMATION" panel. Select the
 field to be searched and enter the data to be searched for.

 For example,  to delete bowlers on a  specific team:

                                    BOWLER - Delete

                             ╔══════════════════════════╗
                             ║    BOWLER INFORMATION    ║
                             ╠══════════╦═══════════════╣
    Available ════════»      ║Last  Name║               ║
    Search    ════════»      ║First Name║               ║
    Fields    ════════»      ║Sex (M/F) ║               ║
              ════════»      ║Team      ║               ║
              ════════»      ║Spare     ║               ║
                             ║# Strings ║               ║
                             ║Pinfall   ║               ║
                             ║Average   ║               ║
                             ║Hi Triple ║               ║
                             ║Hi Single ║               ║
                             ║Hi No Mark║               ║
                             ║69's      ║               ║
                             ╚══════════╩═══════════════╝



                               ╔══════════════════════╗
                               ║ Select Search Field  ║
                               ╚══════════════════════╝


        Move  the highlight  to the  "Team"  field  via the  +/- or  cursor
 up/down  arrow keys  and press  the  "RETURN"  or "ENTER"  key. key.  This
 selects team as the field in which  to search. Next, enter the name of the
 team that are to have bowlers deleted (for this example, "PINBUSTERS" will
 be  assumed). BowlStat  V1.4 will  search through  the bowler database and
 display any bowlers that "match" with the team name of "PINBUSTERS".

        Once a match has been  found the following confirmation prompt will
 appear: "MATCHED! Delete Data? (Y/N):". If  the data for this bowler is to
 be deleted,  press "Y" (yes)  and the "RETURN"  or "ENTER" keys.  The data
 will be deleted and BowlStat V1.4 will continue it's search for additional
 matches.

        When entering  search information, keep in  mind that BowlStat V1.4
 will match all characters that are entered. In the above example, an input
 of "PIN" would have matched bowlers on the teams "PINHEADS", "PINBOYS" and
 "PINNERS" - because  all start with "PIN". Therefore,  to limit the number
 of possible matches, enter as much information as possible.

 NOTE - Most prompts in BowlStat V1.4 are worded so that any menu item that
        alters a database (team or bowler) requires a "Y" (yes) response to
        a  confimation  prompt.  Therefore,  the  "RETURN"  or  "ENTER" key
        is considered as  a NO response and can  be used in place of  a "N"
        and "RETURN"  or "ENTER" keystroke  sequence. Also, to  utilize the
        numeric keypad, the  "+" and "-" keys can be  used answer "YES" (+)
        or "NO" (-) to confirmation prompts that require a "(Y/N)" reply.

        To exit  the search panel  back to the  last menu displayed,  press
        the  "ESC"   (escape)  key  anytime   prior  to  finishing   search
        information input with the "RETURN" or "ENTER" key.
```
{% endraw %}

## HELP12.TXT

{% raw %}
```
                            CAPTAIN SHEET MAKER
                            ───────────────────

        The  Captain  Sheet  Maker  provides  a  convient  way of recording
 strings bowled while  at the bowling alley by  generating "lane sheets" as
 shown below.

                      Halifax Fairlanes Youth Bowling

  LANE: 3                                               DATE: __________
  ╔════════════════════════════════════════════════════════════════════╗
  ║                              Kingpins                              ║
  ╟───────────────────────────┬───────┬─────┬─────┬─────┬──────┬───────╢
  ║ NAME                      │  AVG  │  1  │  2  │  3  │ HCAP │ TOTAL ║
  ╠═══════════════════════════╪═══════╪═════╪═════╪═════╪══════╪═══════╣
  ║ Benoit, Vincent           │  63   │     │     │     │      │       ║
  ╟───────────────────────────┼───────┼─────┼─────┼─────┼──────┼───────╢
  ║ Jewers, Robbie            │  72.8 │     │     │     │      │       ║
  ╟───────────────────────────┼───────┼─────┼─────┼─────┼──────┼───────╢
  ║ Sleigh, Jill              │  83.1 │     │     │     │      │       ║
  ╟───────────────────────────┼───────┼─────┼─────┼─────┼──────┼───────╢
  ║ Myra, Deidre              │  85.5 │     │     │     │      │       ║
  ╟───────────────────────────┼───────┼─────┼─────┼─────┼──────┼───────╢
  ║ Mullenger, Laurie         │  98.6 │     │     │     │      │       ║
  ╠═══════════════════════════╪═══════╪═════╪═════╪═════╪══════╪═══════╣
  ║ TOTAL                     │       │     │     │     │      │       ║
  ╟───────────────────────────┼───────┼─────┼─────┼─────┼──────┼───────╢
  ║ TEAM HANDICAP             │       │  +0 │  +0 │  +0 │      │    0  ║
  ╟───────────────────────────┼───────┼─────┼─────┼─────┼──────┼───────╢
  ║ GRAND TOTAL               │       │     │     │     │      │       ║
  ╚═══════════════════════════╧═══════╧═════╧═════╧═════╧══════╧═══════╝

                               GAMES POINTS
                                 WON   WON
                                ╔════╤════╗    CAPTAIN'S
                                ║    │    ║    SIGNATURE: _______________
                                ╚════╧════╝


        These  lane sheets  contain Bowler  Names, Averages,  Handicaps and
 places  to  record  strings  bowled   by  each  team  member.  Later  this
 information can be taken from the  Captain Sheet and entered into BowlStat
 V1.4.

 To generate a Captain Sheet, enter responses to the following:

 Team 1 Name:
 ────────────

         Enter a name  of a team currently in the  team database. This team
 will apprear at the top of Captain Sheet.


 Lane  Number:
 ────────────

         Enter the  lane number that  Team 1 is  to bowl on.  BowlStat V1.4
 assumes this to be the number of the  left lane on a pair of lanes. If the
 lane  number is  not known,  press  the  "RETURN" or  "ENTER" key  with no
 number.  BowlStat  V1.4  will  substitute  "______",  this allows the lane
 number to be manually entered at a  later date.

         If  Team  2  Name  is  entered,  BowlStat  V1.4 will automatically
 calulate the lane number based on the following:

        1) Team 1 lane number + 1
        2) Team 1 lane number "_____" - Team 2 lane number "_____"


 Team 2 Name:
 ────────────

        Enter the team  name of oposition to the  team entered above. Press
 "RETURN" or  "ENTER" with no  name if only  one team is  to appear on  the
 Captain Sheet.

 Round Averages? (Y/N):
 ──────────────────────

        Averages can  be actual or  rounded to the  nearest whole pin.  The
 default is  to have actual  averages printed, a  response of "N".  To have
 averages rounded to  the nearest pin, enter "Y" and  press the "RETURN" or
 "ENTER" key. For example:

                               175.25 = 175
                               175.65 = 176


 Sort by  Average? (Y/N):
 ────────────────────────

        The order of  the bowlers on the Captain Sheet  can be sorted based
 on the  bowlers averages or alphabetical.  The default is by  average from
 low to high. To print the bowler names alphabetically, press "N" and press
 the "RETURN" or "ENTER" key.


```
{% endraw %}

## HELP13.TXT

{% raw %}
```
                              OUTPUT DEVICE
                              ─────────────

        BowlStat  V1.4 can  send sheet  information to  one of three output
 devices. Select the appropriate device by moving the highlight via the +/-
 or  cursor  up/down keys and pressing the "RETURN" or "ENTER" key.


                          ╔════════════════════╗
                          ║    OUTPUT  MENU    ║
                          ╠════════════════════╣
                          ║ 1) Printer         ║
                          ║ 2) Disk Drive      ║
                          ║ 3) Screen          ║
                          ╚════════════════════╝



                         ╔═══════════════════════╗
                         ║ Select Output Device  ║
                         ╚═══════════════════════╝

   The three output deices supported by BowlStat V1.4 are:

   1) PRINTER     - Send the output information to any printer connected to
                    LPT1:.

   2) DISK DRIVE - Send the output  information to the disk drive. Main use
                   is  to allow  loading of  a sheet  into a  wordprocessor
                   where it may be customized (BOLDING, UNDERLINING, ETC.).
                   Enter a filename to store  the sheet under (maximum of 8
                   characters). If  the name already  exists, BowlStat V1.4
                   will  ask if  this sheet  is to  be appended  to the one
                   already on  the disk drive  (see PRINT OPTIONS  for more
                   information on how to use sheet 'appending').

   3) SCREEN     - Send the  output information to the  screen. Main use is
                   for checking  sheets before outputing to  the printer or
                   disk  drive.  While  in  screen  output  mode, no status
                   messages  will be  displayed (SORTING,  PRINTING, ETC.).
                   status messages will be displayed in this mode.

 NOTES - Printing may be paused, in any output mode, by pressing the F9 and
         resumed by pressing the F10 function keys.

```
{% endraw %}

## HELP14.TXT

{% raw %}
```
        The  Default Parameters  Menu is   used to  set various  options in
 BowlStat V1.4  (mostly print options).  The initial defaults  were created
 and  saved to  disk along  with the  Team and  Bowler databases which were
 defined  in SETUP.  Every time  a database  is loaded,  it's defaults  are
 loaded also.

        When  the "Print  Options" option   is chosen  from the  Main Menu,
 BowlStat V1.4  first sets the inital  values of the PRINT  OPTIONS MENU to
 the values currently defined in  Default Parameters Menu. Therefore, it is
 possible to "pre-define" the Print Options Menu.

        For example, if an average sheet  is not to contain the SIXTY NINES
 and  HIGH NO  MARK individual  awards, change  the Default Parameters Menu
 for each option to "0". BowlStat V1.4 will automatically copy the settings
 to  the  PRINT  OPTIONS  MENU.


                       ╔═══════════════════════════════╗
                       ║    DEFAULT PARAMETERS MENU    ║
                       ╠═════════════════════════╤═════╣
                       ║ Maximum String Score    │300  ║
                       ║ Maximum High No Mark    │100  ║
                       ║ Total Team Points       │8    ║
                       ║ Print League Name       │Y    ║
                       ║ Round Averages          │N    ║
                       ║ Number of AVERAGES      │*    ║
                       ║ Enhanced AVERAGES       │N    ║
                       ║ Print Spare Bowlers     │Y    ║
                       ║ Number of HIGH SERIES   │3    ║
                       ║ Number of HIGH SINGLES  │3    ║
                       ║ Number of HIGH NO MARKS │3    ║
                       ║ Number of SIXTY NINES   │2    ║
                       ║ Print TEAM STANDINGS    │Y    ║
                       ║ Enhanced TEAM STANDINGS │N    ║
                       ║ Eject Page When Done    │Y    ║
                       ║ Record Strings to Disk  │N    ║
                       ╚═════════════════════════╧═════╝


        The Default Parameters Menu consists of the following options:

  Maximum String Score
  ────────────────────
 
         This option sets the maximum string score that will be accepted by
 BowlStat V1.4. The default has  been set to  "300" for both  Candlepin and
 Tenpin. 5-pin bowlers, should change this opton to "450".


 Maximum High No Mark
 ────────────────────

        This option sets the maximum string  score that can be entered as a
 High  No Mark.  The default  has been  set to  "100" for  Candlepin, 5-pin
 bowlers should  changes this option to  "150". This option does  not apply
 for Tenpin.


 Total Team Points
 ─────────────────

        This  option sets the maximum  number  of  points won  that can  be
 entered manually  for a team.  The deafault is  "8". The number  of points
 lost is calculated automatically and updated by BowlStat V1.4. This option
 applies  to  Main  Menu  option  "TEAM  -  Points"  only,  as  points  are
 automatically calculated  when string scores entered  in the Captain Sheet
 input mode.


 Print League Name
 ─────────────────

        This option enables or disables the  printing of the League Name at
 the top on an average sheet. The default is "Y".


 Round Averages
 ──────────────

        This option  enables or disables the  rounding of printed averages.
 The default is "N". To round averages  to the nearest tenth of a pin (.1),
 change this option to "Y".


 Number of AVERAGES
 ──────────────────

        This option defines  the number of names to  be printed for average
 sheets printed  by AVERAGE or  NAME. The default  is "*", all  bowlers. To
 omit averages from the printout, change the option to "0".


 Enhanced AVERAGES
 ─────────────────

        This option  enables or disables  the printing of  enhanced average
 information. The default is "N". To  include bowlers pinfall and number of
 strings bowled, change  the option to "Y". This option  is valid only when
 then "Number of AVERAGES" option is not "0".


 Print Spare Bowlers
 ───────────────────

        This    option    enables    or    disables    the    printing   of
 "Spare"/"Substitute" bowlers. The default is  "Y". To omit spares from the
 printout, change the option to "N".


 Number of HIGH SERIES
 ─────────────────────

        This option defines the number of  names to be printed for the HIGH
 SERIES individual award.  The default is "3". To omit  this award from the
 printout, change the option to "0".


 Number of HIGH SINGLES
 ──────────────────────

       This option defines  the number of names to be  printed for the HIGH
 SINGLE individual award.  The default is "3". To omit  this award from the
 printout, change the option to "0".


 Number of HIGH NO MARKS
 ───────────────────────

        This option defines the number of  names to be printed for the HIGH
 NO MARK individual award. The default is  "3". To omit this award from the
 printout, change the option to "0".


 Number of SIXTY NINES
 ─────────────────────

       This option defines the number of  names to be printed for the SIXTY
 NINES individual  award. The default is  "2". To omit this  award from the
 printout, change the option to "0".


 Print TEAM STANDINGS
 ────────────────────

        This option enables or disables the printing of team standings. The
 default is "Y". To omit the standings. change the option to "N".


 Enhanced TEAM STANDINGS
 ───────────────────────

        This  option  enables  or  disables  the  printing of enhanced team
 stadings. The default is "N". To  include total pinfall, team high pinfall
 and  the percentage  of wims  vs losses,  change the  option to  "Y". This
 option is only valid if the "Print TEAM STANDINGS" option is set to "Y".


 Eject Page When Done
 ────────────────────

        This option enables or disables the  forming of paper to the top of
 the next  sheet after an  average sheet has  been printed. The  default is
 "Y". This option  is only valid when the PRINTER  has been selected as the
 output device.

  Record Strings to Disk
  ──────────────────────

        This option enables or disables  the recording of individual string
 scores to the  disk drive. The deafult setting is  "N" and MUST be changed
 to "Y" if the Yearly Statistics print option is to be used.


```
{% endraw %}

## HELP15.TXT

{% raw %}
```
                             LOAD PRINT FORMAT
                             ─────────────────

        To load a previously saved print format, enter the name of the file
 (up to 8 characters) and press  the "RETURN" or "ENTER" key. BowlStat V1.4
 will load the new format and proceed to the print confirmation prompt.

 NOTES: Do not enter a filename EXTension when prompted for the filename as
        it is automatically added by BowlStat V1.4.
```
{% endraw %}

## HELP16.TXT

{% raw %}
```
                    YEARLY STATS SELECTION MENU PROMPTS
                    ───────────────────────────────────

                          ╔════════════════════╗
                          ║   SELECTION MENU   ║
                          ╠════════════════════╣
                          ║ 1) Individual      ║
                          ║ 2) Team            ║
                          ║ 3) Database        ║
                          ╚════════════════════╝


        Depending  on  the  selection  from  the  menu above, BowlStat will
 prompt  for  information  required   to  generate  the  Yearly  Statistics
 printout. The prompts are:


 1) Individual

               ╔═══════════════════════════════════════════╗
               ║ Bowler Name:                              ║
               ╚═══════════════════════════════════════════╝

        Enter the COMPLETE name (both first and last of the bowler to print
 Yearly Statistics for. The name may be in upper or lower case but an exact
 match must be found or BowlStat will display available bowler names in the
 VALID BOWLER NAMES popup window (color systems only).

 Example:  KEvin StONe (note the space)


 2) Team
                       ╔══════════════════════════╗
                       ║ Team Name:               ║
                       ╚══════════════════════════╝

        Enter the name of a team in  the database. The name may be in upper
 or lower  case but an exact  match must be found  or BowlStat will display
 available team names  in the VALID TEAM NAMES  popup window (color systems
 only). BowlStat will print the  Yearly Statistics alphabetically for those
 bowlers found on the team name entered.

 Example:  THe StRikOuts

 3) Database

        No input  is required. BowlStat  will print the  Yearly Statistics,
 alphabetically, for all bowlers in the database base on last name.
```
{% endraw %}

## HELP17.TXT

{% raw %}
```
                                SHEET TYPE
                                ──────────

        Select  the  type  of  sheet   required,  either  by  pressing  the
 corresponding menu number or by moving the highlight via the +/- or cursor
 arrow keys  of the numeric keypad  to the desired menu  item and press the
 "RETURN" or "ENTER" key.

                           Print Average Sheets

                          ╔════════════════════╗
                          ║    Print Menu      ║
                          ╠════════════════════╣
                          ║ 1)   Main Menu     ║
                          ║ 2) by Average      ║
                          ║ 3) by Team         ║
                          ║ 4) by Name         ║
                          ║ 5) Database Dump   ║
                          ╚════════════════════╝

   The available menu options are:

   1) Main Menu     -  Return to the Main Menu.

   2) by Average    -  Print MENS and LADIES averages, seperated by gender,
                       from HIGHEST to LOWEST.

   3) by TEAM       -  Print averages of bowlers grouped by team, from
                       HIGHEST to LOWEST and provide a total team average.

   4) by NAME       -  Alphbetically  print  MENS  and LADIES averages,
                       seperated by gender.

   5) Database Dump -  Alphabetically print all statistical bowler
                       information.
```
{% endraw %}

## HELP18.TXT

{% raw %}
```
                                 PRINT OPTIONS
                                 ─────────────

        This menu contains all of the  print options used to control how an
 average  sheet will  appear when  printed. By  changing various options, a
 fully customized  sheet can be  generated. These newly  define options can
 then be saved to disk for use at a later time.

        Along side of  each option discussed below, is  the initial default
 setting as configured by the Deafults Editor. These defaults were saved to
 disk along  with the Team and  Bowler databases when the  league was first
 defined in Setup. Any changes made  to the "Default Parameters Menu" (Main
 Menu option 1), will also be reflected here.


                           Print Average Sheets

                     ╔═══════════════════════════════╗
                     ║      PRINT OPTIONS MENU       ║
                     ╠═════════════════════════╤═════╣
                     ║ Print League Name       │Y    ║
                     ║ Round Averages          │N    ║
                     ║ Number of AVERAGES      │*    ║
                     ║ Enhanced AVERAGES       │N    ║
                     ║ Print SPARES            │Y    ║
                     ║ Number of HIGH SERIES   │*    ║
                     ║ Number of HIGH SINGLES  │*    ║
                     ║ Number of HIGH NO MARKS │*    ║
                     ║ Number of SIXTY NINES   │0    ║
                     ║ Print TEAM STANDINGS    │Y    ║
                     ║ Enhanced TEAM STANDINGS │N    ║
                     ║ Eject PAGE When Done    │N    ║
                     ╚═════════════════════════╧═════╝


        Left unchanged, BowlStat V1.4 will print a "standard" average sheet
 as determined  by the order  of the menu  selections in the  PRINT OPTIONS
 MENU. The number of names printed for each award will be determined by the
 values assigned to each option. This standard sheet consists of:

        o League Name
        o Averages
        o HIGH SERIES
        o HIGH SINGLES
        o HIGH NO MARKS
        o SIXTY NINES
        o Team Standings

 Print League Name (default "Y")
 ─────────────────

        A setting of "Y" will cause the current League Name to printed with
 "*"'s both above and below. Also, the current date (in MM-DD-YYYY format),
 will be printed in the upper right hand corner of the page. This option is
 internally set to "Y" for database dumps and cannot be changed.

 Round Averages (default "N")
 ──────────────

        Change this option to "Y" to  print averages rounded to the nearest
 10th of a pin. For example, 120.578 would be printed as 120.6, without the
 round option, it would be printed as 120.5


 Number of AVERAGES (default "*" = all)
 ──────────────────

        This option specifies  the maximun number of bowler  names to print
 when  printing by  AVERAGES. The  default  is  "*", all  bowlers. To  omit
 averages from the printout, enter a value of 0.

        BowlStat V1.4 divides the average sheet into two halves (a left and
 right). LADIES averages will be printed in the left half and MENS averages
 will appear  in the right  (ladies before gentlemen).  If the league  is a
 "mens  or  ladies  only"  league,  as  determined  by  BowlStat V1.4, then
 averages will be printed in the left column only.


   Enhanced AVERAGES (default "N")
   ─────────────────

        Normally,  the  average  award  consists  of  the  bowlers name and
 average. This may  be enhanced by changing this option  to "Y". Along with
 the bowlers name and average, the  current total pinfall and the number of
 strings bowled will also appear.

        To make room for the enhanced information, BowlStat V1.4 will print
 only the initial of the bowlers first name. With the option at default, as
 much  of the  first name  will be  printed, determined  by existing column
 limitations.

        NORMAL:     Stone, Kevin                172.8
        ENHANCED:   Stone, K.      3456   20    172.8


   Print SPARES (default "Y")
   ────────────

        To omit "Spare"  bowlers from ALL printouts, change  this option to
 "N". All sheets printed will contain only regular bowlers.


   Number of HIGH SERIES (default "3")
   ─────────────────────

        Enter the number of names to  print for the "HIGH SERIES" award. To
 omit this award from the prinout, enter a value of 0.


   Number of HIGH SINGLES (default "3")
   ──────────────────────

        Enter the number of names to print for the "HIGH SINGLE" individual
 award. To omit this award form the printout, enter a value of 0.


   Number of HI NO MARKS (default "3")
   ─────────────────────

        The HIGH NO MARK award is used in the Candlepin Bowling game. It is
 the  string score  of a  bowler who  has fail  to either  bowl a strike or
 spares and indicates how well a bowler has "pinned".

        Enter  the  number  of  names  to  print  for  the  "HIGH  NO MARK"
 individual award. To  omit this award form the printout,  enter a value of
 0.


   Number of SIXTY NINES (default "2")
   ─────────────────────

        The SIXTY NINES award is used  in the Candlepin Bolwing game. It is
 number of strings in which a bowler has scored a vaule of 69 in one of the
 frames bowled. For every one bowled, the bowler contributes a sum of money
 (.25) to  a pot and the  bowler with the highest  total at the end  of the
 season receives all of the money collected.

        Enter the number of names to print for the "69'S" individual award.
 To omit this award form the printout, enter a value of 0.


   Print TEAM STANDINGS (default "Y")
   ────────────────────

        This option turns on/off the  printing of team standings. Standings
 will appear  in the order  of points WON,  from highest to  lowest. If not
 required, change this option to "N".


   Enhanced TEAM STANDINGS (default = "N")
   ───────────────────────

        If Team Standings are to be printed, they can be enhanced with this
 option. Along with the normal output  of Team Name, Point Won, Points Lost
 and Total Points, BowlStat V1.4 will include Pinfall, High Pinfall and the
 percentage of wins vs losses.

 NORMAL:

                  TEAM NAME   PTS WON   PTS LOST   TOTAL
                  ---------   -------   --------   -----
                  Team 6          32         12      44


 ENHANCED:

  TEAM NAME   PINFALL   PTS WON   PTS LOST   TOTAL   % AVG   HIGH PINFALL
  ---------   -------   -------   --------   -----   -----   ------------
  Team 6        1234        32         12      44     87.5          1343


   Eject PAGE When Done (deafult = "Y")
   ────────────────────

        This option is valid only if the avearage sheet is to be printed on
 a printer,  as selected  by the  OUTPUT MENU.  By changing  it to "N", the
 printer will NOT go  to the top of the next page  when the printing of the
 average sheet has  been completed. The option is  automatically set to "N"
 when the output device is either the SCREEN or DISK DRIVE.

        This  option also  allows average  sheets to  be customized  to any
 requirements.  By changing  the default  to "N",  an average  sheet may be
 "built" in any  order by overlaying average sheets  created with different
 print options. For example, to print Team Standings first then followed by
 bowler averages and individual awards:

        o Select sheet BY AVERAGE and output to PRINTER.

          1) Enter "Y" or "N" to Print League Name option.
          2) Enter 0 to the Number of AVERAGES option. (No Averages)
          3) Enter 0 to the Number of HIGH SERIES, Number of HIGH SINGLES,
             Number of HIGH NO MARKS and Number of SIXTY NINES.
          4) Enter "Y" to the Print TEAM STANDINGS option.
          5) Enter "N" to the Eject PAGE When Done option.

          Print the  average sheet by  exiting the Print  Options Menu with
 the ESC (escape) key.

         Since the  Eject PAGE When  Done option prevents  the printer from
 performing a form feed to the next sheet, anything now printed will appear
 after the Team Standings. To conclude this example:

          1) Enter "N" for the PRINT LEAGUE NAME option.
          2) Enter the required value to the Number of AVERAGES,
             Number of HIGH SERIES, Number of HIGH SINGLES,
             Number of HIGH NO MARKS and Number of SIXTY NINES options.
          3) Enter "N" to the Print TEAM STANDINGS option.

          Print the remainder  of the average sheet. The  result will be an
 average sheet in the following order:

     1) League Name.
     2) Team Standings.
     3) Averages.
     4) Individual Awards.

        By  varying the  "Y"/"N" and  number entries  to the  various print
 options,  BowlStat V1.4  can build  an average  sheet to any requirements.
 Once the desired  format has been obtained, the  individual options can be
 saved to disk as a set and loaded  back in to speed up the printing of the
 sheet. In the above example, the  two separate sets of print options could
 be saved  to disk under the  filenames of PART1 and  PART2. Then, to print
 the average sheet, the options can be loaded back into BowlStat V1.4.

        Once  the ESC  (escape) key  has  been  pressed to  exit the  Print
 Options Menu,  BowlStat V1.4 will  ask if the  print options currently  in
 effect should  be saved to disk.  If they are, enter  "Y" to the following
 confimation prompt: "Save Print Format? (Y/N):". Enter a filename (maximum
 length  of  8  characters)  to  store  the  print  options  under.

 NOTES -  Average sheet building is  also possible to the  DISK DRIVE. When
          prompted for  a name to save  the average sheet under,  enter the
          same name  as a previously  printed average sheet.  BowlStat V1.4
          will ask the following confirmation:  "SHEET EXISTS! OK to APPEND
          to it? (Y/N):". Enter "Y" and  press the "RETURN" or "ENTER" key.
          The  sheet, as  defined by   the current  print options,  will be
          appended to the file currently on the disk drive.

```
{% endraw %}

## HELP19.TXT

{% raw %}
```
                              SELECTION MENU
                              ──────────────

        The  Selection  Menu  defines  the  scope  of  Yearly Statistics to
 be generated by BowlStat V1.4. Three choices are available:

                          ╔════════════════════╗
                          ║   SELECTION MENU   ║
                          ╠════════════════════╣
                          ║ 1) Individual      ║
                          ║ 2) Team            ║
                          ║ 3) Database        ║
                          ╚════════════════════╝

 1) Individual  - Print yearly statistics for one  individual bowler. Enter
                  the individuals  FULL name seperating the  first and last
                  names with a space. For example, Kevin Stone.

 2) Team        - Print  yearly  statistics  for all  members of one  team.
                  Enter  the name  of the  team to  have sheet printed. For
                  example, Kingpins.

 3) Database    - Print yearly  statistics for all bowlers currently in the
                  database. No input is required for this option.

 NOTES - BowlStat V1.4 is not  case sensitive when searching for Individual
         or Team matches. For example, an input of "kInGPiNS" or "KINGpins"
         would match a database name of "Kingpins".
```
{% endraw %}

## HELP2.TXT

{% raw %}
```
                                Setup Mode
                                ──────────

        To  start  using  BowlStat  V1.4,  you  must  first  define certain
 database information for the program. This information includes:

   o League Name.
   o Number of teams.
   o Number of bowlers per team.
   o Teams names/handicaps.
   o Bowler information.


 League Name & Size
 ──────────────────

                                  INPUT LEAGUE DATA

                        ╔═════════════════════════════════════╗
                        ║      LEAGUE/TEAM INFORMATION        ║
                        ╠══════════╦══════════════════════════╣
                        ║League    ║                          ║
                        ║      Name║                          ║
                        ╠══════════╩═══════╦══════════════════╣
                        ║# Teams in League ║ 0                ║
                        ║# Bowlers per Team║ 0                ║
                        ╚══════════════════╩══════════════════╝

        Fill  in  the  above  panel  to  define  the  league name and size.
 Although there  is a maximum  capacity of  891  bowlers (99 teams  X 9 per
 team),  only  the  actual  number  need  be  defined.  This  allows faster
 operations as  less information needs  to be processed.  Remember to leave
 enough  room for  league expansion  as  once  defined the  size cannot  be
 altered.

        The name of  the league may be a maximum  of 50 characters (2 lines
 by  25 characters  each). BowlStat  V1.4 treats  each line  in the "League
 Name" field as separate lines and  therefore, it is necessary to press the
 "RETURN" or "ENTER" key at the end  of the first line. The cursor will NOT
 automatically drop  down to the second  line after the 25th  character has
 been typed.

        Line two of the league name should  only be used if line one is not
 sufficient to hold  the entire length of the league  name. Should line one
 is not  completely filled, any information  on line two will  be joined to
 that of line one.

         For example:

         LINE 1 - "HALIFAX "     (note the space)
         LINE 2 - "GREEN DORY"

         This would yield a league name of "HALIFAX GREEN DORY"


 Team Names/Handicaps
 ────────────────────

                        ╠══════════════════╬══════════════════╣
                        ║Tean Name         ║ PINBUSTERS       ║
                        ║Team Handicap     ║   +10            ║
                        ║Points WON        ║ 0                ║
                        ║Points LOST       ║ 0                ║
                        ║High Pinfall      ║ 0                ║
                        ║Total Pinfall     ║ 0                ║
                        ╚══════════════════╩══════════════════╝


        Once the  league name and  size has been  defined, the "LEAGUE/TEAM
 INFORMATION" menu will be appended with  the above panel. Depending on the
 number of teams  defined, BowlStat V1.4 will ask for  a Team Name and Team
 Handicap. Handicaps may  be in the range of -99  to +99 pinsand team names
 are limited to a maximum size of 14 characters.

        BowlStat V1.4  initalizes the team  database before requesting  any
 information. Therefore,  if only a few  teams are required to  be defined,
 enter  the  known  information.  Once  entered,  press  the "ESC' key. The
 remaining  information  will  be  set   to  default  values.  Later,  more
 information may be added by the Main Menu option "TEAM - Edit".


 Bowler Information
 ──────────────────

                              ╔══════════════════════════╗
                              ║    BOWLER INFORMATION    ║
                              ╠══════════╦═══════════════╣
                              ║Last  Nane║ Doe           ║
                              ║First Name║ John          ║
                              ║Sex (M/F) ║ M             ║
                              ║Team      ║ Pinbusters    ║
                              ║Spare     ║ N             ║
                              ║# STRINGS ║               ║
                              ║PINFALL   ║               ║
                              ║AVERAGE   ║               ║
                              ║HI TRIPLE ║               ║
                              ║HI SINGLE ║               ║
                              ║HI NO MARK║               ║
                              ║69'S      ║               ║
                              ╚══════════╩═══════════════╝



                                 ╔════════════════════╗
                                 ║ BOWLER 1, 9 TO GO  ║
                                 ╚════════════════════╝

        Once completed,  the "LEAGUE/TEAM INFORMATION"  will be replced  by
 the "BOWLER INFORMATION" panel. Depending on the number of bowlers defined,
 BowlStat V1.4  will ask for bowler  information consisting of the  first 5
 fields of the panel.

        Last/First  and Team  names are  limited to  a maximum  size of  14
 characters. Sex  requies the gender of  the bowler, either "M"  or "F" and
 "Spare" requires either a "Y" or "N".

        A counter in the message area at the bottom of the screen will keep
 track of the remaining bowlers still requiring definition.

 BowlStat  V1.4  initalizes  the  bowler  database  before  requesting  any
 information. Therefore, 'blank bowlers' can be added to the database which
 can be filled out  at a later date (for new additions  to your league). To
 create blank bowlers, follow the following steps:

     1) Add the number of blank entries (in team multiples) to the total
        number of teams.

     2) Enter all  known bowler  information, leaving  the blanks till the
        end.

     3) Press the "ESC" (escape) key. BowlStat V1.4 will leave SETUP and
        assign the remaining entries as blank.


 The "*" Character
 ─────────────────

        The "*" character has special meaning  in BowlStat V1.4 and is used
 to indicate that the field should be ignored. This allows flexability when
 handling transient or Spare bowlers. Uses for the "*" character are:

     1) Ignore pinfall.

        Pinfall for any bowler with a team  name of "*" will NOT be counted
        toward any  specific TEAMS TOTAL PINFALL,  since BowlStat V1.4 does
        not recognize "*" as a valid team name.

      2) Surpress printing.

        Any bowler with a "Team" name of "*" will not appear on any average
        sheet that has been printed "by TEAM" or any Captain Sheet.

        Any bowler with a "Sex" of "*" will not appear on any average sheet
        printed "by AVERAGE" or "by NAME (ALPHABETICALLY).

 Warning:  BowlStat V1.4  uses "*"  in the  "Last Name"  field to indicate a
           "Blank Record". Should the Last Name field be changed to "*", it
           is possible that the information currently in the record will be
           erased if a new bowler is added via the Main Menu option "BOWLER
           - Add".
```
{% endraw %}

## HELP20.TXT

{% raw %}
```
                            Captain Sheet Input
                            ───────────────────

        To begin,  select the bowler to  enter string scores for  by moving
 the cursor with the +/- or cursor  arrow keys to the desired bowler's name
 and press the  "RETURN" or "ENTER" key. Next, enter  the string scores for
 the selected bowler in the message window  at the bottom of the screen. To
 indicate that the string should be considered for the "High No Mark" award
 (for Candle/5 Pin games), enter "HNM"  or "." immediately after the string
 score. For example, "98HNM" or "98.".

        As  the  string  scores  are  being  entered,  BowlStat  V1.4  will
 automatically  calculate  the  bowlers  total  series  and the teams total
 pinfall (GROSS and NET) for each individual string. Also, team points will
 be awarded based on the NET total.

        If a bowler is absent or has bowled an incomplete series, press the
 "RETURN" or  "ENTER" key when prompted  for a string score.  BowlStat V1.4
 will automatically enter the bowler's  current average along with "avg" to
 indicate that this is an average and not an actual string score. The score
 will not  be counted towards the  bowlers average but will  be used in the
 calulation of pinfall and the awarding of team points.

        Once all  the scores for  both teams have  been entered, press  the
 "ESC"  (escape) key.  BowlStat V1.4  will display  the confimation  prompt
 "(A)bort or (P)rocess").  If a mistake has been made  or the sheet has not
 been completely filled out, press the  "A" and "RETURN" or "ENTER" keys to
 return to the input mode. Otherwise, press "P" and the "RETURN" or "ENTER"
 keys  to  process  the  entered  string  scores.  As  the scores are being
 proceesed, BowlStat V1.4 will display  the associated bowler's name in the
 message area at the bottom of the screen.



                                   Kingpins
 ╔═══════════════════════════════════╦═════════════════════════════════╗
 ║           Bowler Names            ║    1      2      3        Totals║
 ║ 1) Benoit, Vincent                ║                               0 ║
 ║ 2) Jewers, Robbie                 ║                               0 ║
 ║ 3) Sleigh, Jill                   ║                               0 ║
 ║ 4) Myra, Deidre                   ║                               0 ║
 ║ 5) Mullenger, Laurie              ║                               0 ║
 ║ 6) Other Team                     ║                                 ║
 ╠═══════════════════════════════════╩═════════════════════════════════╣
 ║                         Gross:         0       0       0          0 ║
 ║     TEAM TOTALS         Hcap :         0       0       0          0 ║
 ║                         Net  :         0       0       0          0 ║
 ║                         Pts  :         1       1       1          4 ║
 ╚═════════════════════════════════════════════════════════════════════╝




 NOTES: Team points for each string are calculated as follows:

        TOTAL POINTS - 2 / 3.

        If  TOTAL POINTS  are 8  (initial value)  then each  string will be
        worth 8 - 2  / 3 = 2. Two points are also  awarded to the team with
        the  greatest total  Net. Should  a tie  exist, BowlStat  V1.4 will
        split the points between the  two teams. Please note: BowlStat V1.4
        does  not check  the validity  of the  formula. Make  sure that the
        formula yields  an even number in  case a tie should  exist and the
        points must be split.
```
{% endraw %}

## HELP21.TXT

{% raw %}
```
        Once leaving  the DEFAULT PARAMETERS  MENU, BowlStat V1.4  needs to
 know what to  do with any changes that  have been made. Select one  of the
 following EXIT MENU options:

                          ╔════════════════════╗
                          ║     EXIT MENU      ║
                          ╠════════════════════╣
                          ║ 1)   Main Menu     ║
                          ║ 2) Save to Disk    ║
                          ║ 3) Make Active Now ║
                          ╚════════════════════╝

 1) Main  Menu        -  Ignore any changes made to the  DEFAULT PARAMETERS
                         MENU and return to the Main Menu.

 2) Save to Disk      -  Make any  changes to  the DEFAULT  PARAMETERS MENU
                         active and save the  settings to disk. This option
                         makes the  changes permanent as  the settings will
                         automatically be reloaded with the Team and Bowler
                         databases the next time BowlStat V1.4 is used.


 3)  Make Active  Now -  Make any  changes to  the DEFAULT  PARAMETERS MENU
                         active but  do not save them  to disk. Any changes
                         made will be lost after exiting BowlStat V1.4.
```
{% endraw %}

## HELP22.TXT

{% raw %}
```
                             SELECT SHEET TYPE
                             ─────────────────

        BowlStat has four  different type of sheets that  can be generated.
 Select the required type from the following menu:


                          ╔════════════════════╗
                          ║ SELECT SHEET MENU  ║
                          ╠════════════════════╣
                          ║ 1) Average Sheets  ║
                          ║ 2) Captain Sheets  ║
                          ║ 3) Yearly Stats    ║
                          ║ 4) Schedules       ║
                          ╚════════════════════╝



 1) Average  Sheets - Sheets  containing the current  averages, pinfall and
                      strings bowleds of all bowlers in the database. (user
                      definable)

 2) Captain Sheets  - Sheets  containing  the  bowler  name,  averages and
                      handicaps for a given  team. Used to  record  string
                      scores  at the  bowling  alley  for later  input
                      into BowlStat.

 3) Yearly Stats    - Sheets containing a summary of  bowlers  performance
                      throughout the season. Contains daily and cumulative
                      statistics.

 4) Schedules       - Sheets containing the season  matches  between  teams
                      and the lane numbers on where those matches will take
                      place.  BowlStat  supports  a  schedule  for  a  team
                      database that is from 4 to 22 teams in size.



 NOTES - Press the 'ESC' (escape) key to return to the Main Menu.
```
{% endraw %}

## HELP23.TXT

{% raw %}
```
                             SAVE PRINT FORMAT
                             ─────────────────

        Once the options in the Print Options Menu have been made, BowlStat
 will display the following message:

                      ╔════════════════════════════╗
                      ║ Save Print Format? (Y/N):  ║
                      ╚════════════════════════════╝

        To save  the Print Options  Menu for later  use, press "Y"  and the
 'Enter' key. BowlStat  will then ask for a filename  to store the settings
 under. The filename  may be up to 8 charaters  maximum. Since BowStat adds
 the extension .FMT automatically, one in not required.
```
{% endraw %}

## HELP24.TXT

{% raw %}
```
                            SCHEDULE TYPE MENU
                            ──────────────────

        BowlStat will generate  a bowling schedule by one  of the following
 methods:

                          ╔════════════════════╗
                          ║ SELECT SHEET MENU  ║
                          ╠════════════════════╣
                          ║ 1) by Sections     ║
                          ║ 2) by Weeks        ║
                          ╚════════════════════╝

 1) by Sections - A section is the number of matches required for each team
                  to play one another exactly  once. For example, a section
                  for  a league  that consists  of 12  teams would cover 11
                  weeks.

                  BowlStat has  limits to the number  of section available,
                  based on the  number of teams in the  league. Any request
                  for  sections outside  of this  range will  result in  an
                  error message.

                  Number of Teams     Sections Available
                  ───────────────     ──────────────────

                        4                    11
                        6                     6
                        8                     4
                       10                     4
                       12                     3
                       14                     2
                       16                     2
                       18                     2
                       20                     1
                       22                     1

 2) by Weeks     - Enter the number of weeks the schedule is to cover.

                   BowlStat has  limits to the  number of weeks  available,
                   based on the number of  teams in the league. Any request
                   for weeks outside of this  range will result in an error
                   message.

                  Number of Teams     Weeks Available
                  ───────────────     ───────────────

                        4                  33
                        6                  35
                        8                  28
                       10                  36
                       12                  33
                       14                  26
                       16                  30
                       18                  34
                       20                  32
                       22                  34

 NOTES: On the schedule sheet, BowlStat uses Week 1, Week 2 .... for dates.
        If an actual calendar date is  required, the sheet must be saved to
        disk and edited with a word processor.

        When printing by  weeks, BowlStat will insert a  blank line between
        certain dates  to indicate the  end of a  section and the  start of
        another.

        At the end of the sheet, BowlStat will print a team legend.


                       EXAPLE PRINTOUT (screen dump)



                       Halifax Youth Bowling Council
                       =============================

                                     LANE

   Date    23-24 25-26 27-28
   ----    ----- ----- -----

  Week 1   1-2   3-4   5-6
  Week 2   5-4   1-6   2-3
  Week 3   3-1   2-5   6-4
  Week 4   2-6   4-1   3-5
  Week 5   1-5   6-3   4-2


  Team Legend
  -----------

  1 - Demolition
  2 - Kingpins
  3 - Nameless 5
  4 - Strike Force
  5 - Strikeouts
  6 - The Unknowns

                Schedule Completed. Press 'Enter' to Continue.

```
{% endraw %}

## HELP25.TXT

{% raw %}
```
                           Score Input Selection
                           ─────────────────────

        BowlStat has two  modes that scores can be  entered by as displayed
 in the following menu:
                          ╔════════════════════╗
                          ║  SCORE INPUT MODE  ║
                          ╠════════════════════╣
                          ║ 1) by Seach Panel  ║
                          ║ 2) by Captain Sheet║
                          ╚════════════════════╝

 1) by Search  Panel - Scores are entered for  INDIVIDUAL bowlers that have
                       been matched with the  search panel. Any team totals
                       (points  won/lost,  pinfall   and  awards)  must  be
                       handled seperately using Main Menu selection "TEAM -
                       Points".  This  selection   in  handy  for  updating
                       "Spare" bowlers whose totals  are not to be included
                       with a teams totals.

 2) by Captain Sheet - Bowler scores  for an entire team are entered at the
                       same  time.  BowlStat  will  automatically calculate
                       team  points won/lost,  pinfall totals  and any team
                       awards. This is the prefered  method of entry as the
                       screen will  act as a  check against the  scores and
                       totals that have been recorded at the bowling lanes.

                       After  this menu  item has  been selected,  BowlStat
                       will  ask for  two team  names. Once  the names have
                       been  entered,  BowlStat  will  display  the  bowler
                       line-up the appropriate teams.

                       See  the  help  file  for  Captain  Sheet  Input for
                       further  information  on  how  scores  are  actually
                       entered.
```
{% endraw %}

## HELP3.TXT

{% raw %}
```
                            2) BOWLER - Scores
                            ──────────────────

        This Main Menu option allows individual string scores to be entered
 for bowlers selected via the "Bowler Search Panel". Once the string scores
 have  been entered,  BowlStat V1.4  will automatically  update the bowlers
 statistics,  check for  new individual  awards (High  Triple, High Single,
 High No Mark and 69's) and update the "Total Pinfall" field of the bowlers
 team.

        To start,  enter the appropriate information  into the search panel
 to match the desired bowler(s). After  finding a match, BowlStat V1.4 will
 display  the bowlers  statistics and  display the  prompt "MATCHED!  Enter
 Scores?  (Y/N):" at  the bottom  of the  screen. If  the bowler  is to  be
 updated, press  "Y" and the  "RETURN" or "ENTER"  key. BowlStat V1.4  will
 then  add three  fields to  the  "BOWLER  INFORMATION" panel  to hold  the
 individual string scores.


                                     ENTER SCORES

                              ╔══════════════════════════╗
                              ║    BOWLER INFORMATION    ║
                              ╠══════════╦═══════════════╣
                              ║Last  Name║ Doe           ║
                              ║First Name║ John          ║
                              ║Sex (M/F) ║ M             ║
                              ║Team      ║ Pinbusters    ║
                              ║Spare     ║ N             ║
                              ║# Strings ║ 10            ║
                              ║Pinfall   ║ 1050          ║
                              ║Average   ║ 105           ║
                              ║Hi Triple ║ 325           ║
                              ║Hi Single ║ 150           ║
                              ║Hi No Mark║ 93            ║
                              ║69's      ║ 2             ║
               ------>        ║String 1  ║               ║
               ------>        ║String 2  ║               ║
               ------>        ║String 3  ║               ║
                              ╚══════════╩═══════════════╝


        Enter the  individual string scores, starting  in field "String 1".
 To indicate  that the string should  be considered for the  "High No Mark"
 award (for Candle/5  Pin games), enter "HNM" or  "." immediately after the
 string score  ( 98HNM or  98.). If a  certain string has  not been bowled,
 press the "RETURN" or "ENTER' key on the appropriate String field.

        Once the  last score has  been entered, BowlStat  V1.4 will display
 the sum of  the scores entered and ask for  confirmation that the total is
 correct.  If  it  is,  press  the  "Y"  and  the "RETURN" or "ENTER" keys.
 BowlStat  V1.4  will  process  the  scores  and  continue  it's search for
 additional matches.  If an error was  made entering the scores,  press the
 "N" and "RETURN"  or "ENTER" keys. BowlStat V1.4  will erase the currently
 displayed string  scores and start  the process over  from the "String  1"
 field.

 Example
 ───────

                              ║String 1  ║ 135           ║
                              ║String 2  ║ 95HNM         ║
                              ║String 3  ║               ║ No Score!
                              ╚══════════╩═══════════════╝

        In this example, BowlStat V1.4 will add 194 to John's "Pinfall" and
 increase  the total  of "#  STRINGS" by  two. If  95 is  greater than  his
 previous "Hi No  Mark", then the old value will  be replaced. Also, should
 135  be  greater  than  the  previous  "High  Single",  then it to will be
 replaced.  Same  holds  true  for  the  total  of  the string scores (High
 Triple). Also, the Pinbusters "Total Pinfall" will be increased by 194.

        To speed up entry from the  numeric keypad (on those keyboards that
 have a numeric keypad), the "+" and "-" keys can be used to answer Yes and
 No  to those  questions requiring  a "Y"  or "N"  reply. This replaces the
 normal  funtion of  the +/-  keys  (cursor  movement) while  in "BOWLER  -
 Scores".

 NOTES: If a bowler does not bowl  all three strings, press the "RETURN" or
        "ENTER" key when  prompted for a string score -  NOT "0". Zero is a
        valid  score  and  will  be  counted  towards the players Average/#
        Strings.

        To enter the Captain Sheet input mode, select the Team field of the
        search  panel but  do not  enter  a  name -  press the  "RETURN" or
        "ENTER" key. BowlStat  V1.4 will prompt for the  names of the teams
        that  appear on  the Captain  Sheet. Once  entered, screen  for the
        Captain Sheet input mode will appear.
```
{% endraw %}

## HELP4.TXT

{% raw %}
```

                             3) BOWLER - EDIT
                             ────────────────

        This Main Menu option allows  the altering of a bowler's individual
 statistics. Any of the 12 "Bowler  Information" fields may be selected for
 editing.

        Enter the required information  into the blank "Bowler Information"
 search panel required to match the required range of bowlers. Once a match
 has  been  found,  BowlStat  V1.4  will  display  the  bowler's statistics
 currently in the database.

         For  example,  John  Doe  has  been  matched  and  his  individual
 statistics displayed.


                                   EDIT BOWLER DATA

                              ╔══════════════════════════╗
                              ║    BOWLER INFORMATION    ║
                              ╠══════════╦═══════════════╣
                              ║Last  Name║ Doe           ║
                              ║First Name║ John          ║
                              ║Sex (M/F) ║ M             ║
                              ║Team      ║ Pinbusters    ║
                              ║Spare     ║ N             ║
                              ║Pinfall   ║ 1020          ║
                              ║# Strings ║ 9             ║
                              ║Average   ║ 113.3333333333║
                              ║Hi Triple ║ 345           ║
                              ║Hi Single ║ 122           ║
                              ║Hi No Mark║ 97            ║
                              ║69's      ║ 3             ║
                              ╚══════════╩═══════════════╝



                            ╔════════════════════════════╗
                            ║ MATCHED! Edit it? (Y/N):   ║
                            ╚════════════════════════════╝

        To change any  of the information displayed, press  the "Y" and the
 "RETURN" or  "ENTER" keys in  response to the  "MATCHED! Edit it?  (Y/N):"
 verification prompt. (A response of "N" will cause BowlStat V1.4 to display
 the next match (if  any) or the "ESC" key to quit  searching and return to
 the Main Menu.)

       Move  the menu  cursor, via  the +/-  or up/down  arrow keys, to the
 desired  field for editing  and  press  the "RETURN" or "ENTER" key.

        The  current  contents  of  selected  field  will  be  erased and a
 blinking cursor will appear at the  first character position in the field.
 Enter the  new information and press  the "RETURN" or "ENTER"  key. Typing
 errors can  be corrected via the  "BACKSPACE" key.

        After  the new  information has  been enetered,  BowlStat V1.4 will
 re-enable  the menu  cursor, allowing  further fields  to be  selected for
 editing. When  no more changes to  be made, press the  "ESC" (escape) key.
 BowlStat V1.4 will continue it's search for additional matches.

        Remember,  changes to  the bowler  database are  only permanent  if
 BowlStat V1.4 is exited with a Save option from the EXIT MENU.

 NOTE -  To leave a field  unchanged and continue searching  for additional
         matches, press the "ESC" (escape) key.

```
{% endraw %}

## HELP5.TXT

{% raw %}
```

                              4) BOWLER - ADD
                              ───────────────

        This Main Menu option allows the addition of bowlers to the current
 bowler database as defined in the upper left hand corner of the screen.

        Before the addition can take  place, BowlStat V1.4 will first check
 for a  blank entry to store  the new bowler information.  Assuming a blank
 has been be found, BowlStat V1.4 will display the following panel:

                                INPUT BOWLER INFORMATION

                              ╔══════════════════════════╗
                              ║    BOWLER INFORMATION    ║
                              ╠══════════╦═══════════════╣
                              ║Last Name ║               ║
                              ║First Name║               ║
                              ║Sex (M/F) ║               ║
                              ║Team      ║               ║
                              ║Spare     ║               ║
                              ║# Strings ║               ║
                              ║Pinfall   ║               ║
                              ║Average   ║               ║
                              ║Hi Triple ║               ║
                              ║Hi Single ║               ║
                              ║Hi No Mark║               ║
                              ║69's      ║               ║
                              ╚══════════╩═══════════════╝



                             ╔═════════════════════════════╗
                             ║ Blank Entry Found. Add Data ║
                             ╚═════════════════════════════╝

        As  previously done  in SETUP,  enter the  information for  the new
 bowler. When all the required fields  have been filled, BowlStat V1.4 will
 add this information  to the bowler database and  display the confirmation
 prompt - "Bowler  Added - Press 'Enter'". To  continue, press the "RETURN"
 or "ENTER" key. BowlStat V1.4 will  continue it's search for another blank
 entry, allowing additional bowlers to be defined.

        If  no more  bowlers are  to be  added to  the database,  press the
 Escape (ESC) key  when the next blank entry has  been found. BowlStat V1.4
 will return to the Main Menu.


 NOTE -  If the message "DATABASE  FULL! Press 'Enter'" appears,  press the
         "RETURN" or ENTER key to return  to the Main Menu. No more bowlers
         can be added to the database until a bowler delete is performed.

```
{% endraw %}

## HELP6.TXT

{% raw %}
```
                              BOWLER - Delete
                              ───────────────

        This Main  Menu option allows  the deletion of  statistics from the
 bowler database. Once  the database has been saved to  disk, via then EXIT
 Main Menu option, all information deleted is permanently lost.

        Like most  of the other  Main Menu choices,  BowlStat V1.4 requires
 a  range to be defined via the  search panel. Therefore, it is possible to
 delete whole  teams, all of  a given  sex,  anyone with the  first name of
 "John", etc.

        BowlStat V1.4  will display the  statistics for the  matched bowler
 and confirm wether the information is to be deleted.


                              BOWLER - Delete

                       ╔══════════════════════════╗
                       ║    BOWLER INFORMATION    ║
                       ╠══════════╦═══════════════╣
                       ║Last  Name║ Stone         ║
                       ║Fisrt Name║ Kevin         ║
                       ║Sex (M/F) ║ M             ║
                       ║Team      ║ Pinbusters    ║
                       ║Spare     ║ N             ║
                       ║# Strings ║ 18            ║
                       ║Pinfall   ║ 2135          ║
                       ║Average   ║ 118.6111111111║
                       ║Hi Triple ║ 383           ║
                       ║Hi Single ║ 151           ║
                       ║Hi No Mark║ 0             ║
                       ║69's      ║ 0             ║
                       ╚══════════╩═══════════════╝



                     ╔═══════════════════════════════╗
                     ║ MATCHED! Delete Data? (Y/N):  ║
                     ╚═══════════════════════════════╝

        If the answer to this confirmation prompt is yes, press the "Y" and
 "RETURN"  or "ENTER"  keys. BowlStat   V1.4 will  confirm the  deletion by
 displaying the record that once held the information for the bowler.


                              BOWLER - Delete

                       ╔══════════════════════════╗
                       ║    BOWLER INFORMATION    ║
                       ╠══════════╦═══════════════╣
                       ║Last  Name║ *             ║
                       ║Fisrt Name║ *             ║
                       ║Sex (M/F) ║ *             ║
                       ║Team      ║ *             ║
                       ║Spare     ║ *             ║
                       ║# Strings ║ 0             ║
                       ║Pinfall   ║ 0             ║
                       ║Average   ║ 0             ║
                       ║Hi Triple ║ 0             ║
                       ║Hi Single ║ 0             ║
                       ║Hi No Mark║ 0             ║
                       ║69's      ║ 0             ║
                       ╚══════════╩═══════════════╝





                     ╔═══════════════════════════════╗
                     ║ BOWLER DELETED  Press 'Enter' ║
                     ╚═══════════════════════════════╝

        To continue searching for additional matches, press the "RETURN" or
 "ENTER"  key.


 NOTES -  Pressing the ESC  (escape) key when  at the "MATCHED!  Delete it?
          (Y/N):"  confirmation prompt,  will terminate  the search process
          and return you to the Main  Menu, regardless, if more matches are
          possible.

```
{% endraw %}

## HELP7.TXT

{% raw %}
```
                                TEAM - Edit
                                ───────────

        This  Main Menu  option permits   the altering  of the  League Name
 and/or information in the team database.

        Once selected, the following panel will be displayed:

                                TEAM - Edit

                  ╔═════════════════════════════════════╗
                  ║       LEAGUE/TEAM INFORMATION       ║
                  ╠══════════╦══════════════════════════╣
                  ║League    ║ Halifax Headpins         ║
                  ║      Name║                          ║
                  ╠══════════╩═══════╦══════════════════╣
                  ║# Teams In League ║ 6                ║
                  ║# Bowlers Per Team║ 5                ║
                  ╚══════════════════╩══════════════════╝


                      ╔════════════════════════════╗
                      ║ Edit League Title (Y/N):   ║
                      ╚════════════════════════════╝


        To change the  current contentes of League Name,  press the "Y" and
 "RETURN" or "ENTER" keys. BowlStat V1.4 will erase the currently displayed
 name and place the cursor at the  first position of the League Name field.
 Enter up to 50 characters for a new name (2 lines X 25 characters each).

        Each  line is  treated separately.  Therefore, it  is necessary  to
 press the "RETURN" or "ENTER" key at the end of the first line. The cursor
 will  NOT  automatically  drop  down  to  the  second  line after the 25th
 character has  been entered. Line  two of the  league name should  only be
 used if line one is not sufficient  to hold the entire length of the name.
 If line one is not completely  filled, any information entered on line two
 will be joined to that of line one. For example:

             LINE 1 - "HALIFAX "     (note the space)
             LINE 2 - "GREEN DORY"

 This would yield a league name of "HALIFAX GREEN DORY"

                  ╔═════════════════════════════════════╗
                  ║       LEAGUE/TEAM INFORMATION       ║
                  ╠══════════╦══════════════════════════╣
                  ║League    ║ Halifax Headpins         ║
                  ║      Name║                          ║
                  ╠══════════╩═══════╦══════════════════╣
                  ║# Teams In League ║ 6                ║
                  ║# Bowlers Per Team║ 5                ║
                  ╠══════════════════╬══════════════════╣
                  ║Team Name         ║                  ║
                  ║Total Points Won  ║                  ║
                  ║Total Points Lost ║                  ║
                  ║Team Handicap     ║                  ║
                  ║Team High Pinfall ║                  ║
                  ║Total Team Pinfall║                  ║
                  ╚══════════════════╩══════════════════╝

        Regardless  of wether  the league  name was  changed, BowlStat V1.4
 will modify the  panel, as shown above, and display  a cursor at the first
 position  in the  "Team Name"  field. Enter  the name  of the  team to  be
 edited (partial matches are OK).

         When matched,  the team's statistics will  be displayed along with
 the "MATCHED! Edit  it? (Y/N):" confirmation prompt. To edit  any of the 6
 fields for this team, press the "Y" and "RETURN" or "ENTER" keys. BowlStat
 V1.4 will then highlight the field "Team Name". Select a field for editing
 by moving the  highlight, via the +/- or cursor  arrow keys, and press the
 "RETURN" or  "ENTER" key. Once  a field has  been selected, BowlStat  V1.4
 will erase the current contents of the field and await for new information
 to be entered.

       After the  new information has  been entered, the  highlight will be
 re-enabled,  allowing further  editions to  be made.  When editing on this
 team has been completed, press the  "ESC" (escape) key. BowlStat V1.4 will
 continue search  for additional matches.  When no more  matches are found,
 BowlStat V1.4 will  request another team name to  be edited. Enter another
 team name or press the "ESC" (escape) key to return to the Main Menu.

        The original  field will NOT  be changed until  new information has
 been  entered and  the "RETURN"  or  "ENTER"  key pressed.  To retain  the
 original infomation, press  the "ESC" (escape) key at  any time before the
 "RETURN"  or "ENTER"  key. BowlStat   V1.4 will  exit, without  saving any
 changes to the team database, and will continue it's search for additional
 matches.

 NOTES - If  "Team Name" information is altered,  BowlStat V1.4 will search
         through the bowler  database and change any bowler  found with the
         old name to  the new name. This way, individual  edits of the team
         members are not necessary.

         The  "League Name"  MUST contain   a valid  name. If  selected for
         editing  and  no  name  is  entered,  BowlStat  will use "BowlStat
         Version" and and the current version number as the League Name.
```
{% endraw %}

## HELP8.TXT

{% raw %}
```
                               TEAM - Points
                               ─────────────

        This Main Menu item allows manual  addition of points and Team High
 Pinfall  to a  team's statistics.   Normally, scores  are entered  via the
 Captain Sheet input  feature of BowlStat V1.4, where  team points and high
 pinfall totals are calculated automatically.

        Unlike the other BowlStat V1.4  menu selections, no search panel is
 required to be filled  out. Each team will be presented one  at a time, in
 order of original definition in SETUP.

 For example:

                               TEAM - Points

                  ╔═════════════════════════════════════╗
                  ║       LEAGUE/TEAM INFORMATION       ║
                  ╠══════════╦══════════════════════════╣
                  ║League    ║ Halifax Headpins         ║
                  ║      Name║                          ║
                  ╠══════════╩═══════╦══════════════════╣
                  ║# Teams In League ║ 6                ║
                  ║# Bowlers Per Team║ 5                ║
                  ╠══════════════════╬══════════════════╣
                  ║Team Name         ║ Pinbusters       ║
                  ║Total Points Won  ║ 24               ║
                  ║Total Points Lost ║ 12               ║
                  ║Team Handicap     ║ +0               ║
                  ║Team High Pinfall ║ 670              ║
                  ║Total Team Pinfall║ 4357             ║
 Points ---->     ║Enter Points Won  ║ ▒                ║
 Pins   ---->     ║Enter High Pinfall║                  ║
                  ╚══════════════════╩══════════════════╝

                          ╔═════════════════════╗
                          ║ Enter # Points Won  ║
                          ╚═════════════════════╝

        The panel  above shows the  statistics for the  team Pinbusters. To
 add points to  this teams total, enter the number  of points WON and press
 the "RETURN"  or "ENTER" key.  BowlStat V1.4 will  automatically calculate
 the number of points  LOST, based on a maximum of 8  points per series and
 update  the  teams  POINTS  LOST  statistic.  For  this  example,  if  the
 Pinbusters  had won  3 points,   BowlStat V1.4  would automatically  add 3
 points to the current "Total Points Won" total and 5 points to the current
 "Total Points Lost" total.

         Once the points have been entered,  Bowlstat V1.4 will move to the
 "Enter High Pinfall" field. Enter the  team's total pinfall for the series
 bowled. If the value enterd is greater than the current total, the current
 total will be  replaced. BowlStat V1.4 will then display  the next team to
 be processed.

        If no  values are to be  entered for either or  both of the fields,
 press the "RETURN"  or "ENTER" key without a  numeric value. BowlStat V1.4
 will move to the next field/team without changing the current totals.


 NOTES - The maximum of 8 points  is not user alterable. Please contact the
         author if change is required.

         To return to the Main Menu,  press the 'ESC'(escape) key at either
         the "Enter Points Won" or "Enter High Pinfall" prompts.

         The  "Team   High  Pinfall"  statistic  is   user  definable.  Two
         possibilities are:

         1) High pinfall from all bowlers - one string.
         2) High pinfall from all bowlers - all strings.
```
{% endraw %}

## HELP9.TXT

{% raw %}
```
                               BOWLER - 69'S
                               ─────────────

        This  Main  Menu  option  allows  updating  of  the  "Sixty  Nines"
 individual  bowler award.  Although this  award may  not be  known in some
 types of bowling games, it is used in most every Candlepin league.

        The award  represents the number of  strings that a bowler  has had
 the  score of  "69" in  one  of  the frames  bowled. Normally,  the bowler
 contributes a sum  of money into a "pot" which  is given to the individual
 with the maximum number at the end of the season.

         Once selected,  BowlStat V1.4 will  display a blank  search panel.
 Fill the panel out to yeild the required bowlers. For example,


                              BOWLER -  69's

                       ╔══════════════════════════╗
                       ║    BOWLER INFORMATION    ║
                       ╠══════════╦═══════════════╣
                       ║Last  Name║ Doe           ║
                       ║First Name║ John          ║
                       ║Sex (M/F) ║ M             ║
                       ║Team      ║ Pinbusters    ║
                       ║Spare     ║ N             ║
                       ║# Strings ║ 30            ║
                       ║Pinfall   ║ 3009          ║
                       ║Average   ║ 100.3         ║
                       ║Hi Triple ║ 355           ║
                       ║Hi Single ║ 155           ║
                       ║Hi No Mark║ 96            ║
                       ║69's      ║ 7             ║
                       ╚══════════╩═══════════════╝



                     ╔═══════════════════════════════╗
                     ║ MATCHED! Enter 69's? (Y/N):   ║
                     ╚═══════════════════════════════╝

         If the  matched bowler has 69's  to be entered, press  the "Y" and
 "RETURN" or  "ENTER" keys. BowlStat V1.4  will then ask for  the number of
 69's to be added to the bowler's current value in the database.

                          ╔════════════════════╗
                          ║ ENTER # OF 69'S: 3 ║
                          ╚════════════════════╝


         Enter a number from 0 to 9. and press the "RETURN" or "ENTER" key.
 BowlStat V1.4 will  add this to the current  total, 3, for a new  total of
 10. Once completed, BowlStat V1.4 will continue it's search for additional
 matches.

        Unlike  other bowler  database operations,  the number  of 69's  is
 entered at  the bottom of the  screen and not in  the "BOWLER INFORMATION"
 panel. This is because the number entered is added to the current contents
 rather than replacing it, as in other database operations.

 NOTE - The  value of 69's to be  entered is ADDED to the  current total of
        the matched bowler. It does NOT REPLACE it.!

        The maximum number of 69's to be added at one time is 9.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1954

     Volume in drive A has no label
     Directory of A:\

    MANUAL   BAT       768   8-10-90  10:42p
    FF       COM        14   2-23-87   9:09p
    HELP0    TXT       600  10-06-89   9:59p
    HELP1    TXT      3263   8-10-90  10:45p
    HELP2    TXT      7128  10-09-89   7:53p
    HELP3    TXT      4774  12-10-89   7:01p
    HELP4    TXT      3172  10-17-89   7:21p
    HELP5    TXT      2551  10-15-89   8:32p
    HELP6    TXT      3431  11-04-89   8:54p
    HELP7    TXT      5130  10-25-89   9:57p
    HELP8    TXT      3468  10-25-89   8:58p
    HELP9    TXT      2938  10-24-89   8:53p
    HELP10   TXT      2563  11-05-89   9:02p
    HELP11   TXT      3611  10-23-89   4:52p
    HELP12   TXT      4259  12-04-89   6:53p
    HELP13   TXT      2120  10-29-89   9:06p
    HELP14   TXT      6475  11-20-89   9:51p
    HELP15   TXT       458  12-20-89   9:03p
    HELP16   TXT      1911   8-05-90   7:14p
    HELP17   TXT      1445  11-13-89   7:17p
    HELP18   TXT     10275  11-13-89   6:51p
    HELP19   TXT      1356  12-04-89   6:08p
    HELP20   TXT      3589  12-20-89   8:48p
    HELP21   TXT      1291  11-22-89   8:45p
    HELP22   TXT      1653   1-01-80  12:55a
    HELP23   TXT       668   7-09-90   2:00p
    HELP24   TXT      3629   8-04-90   8:11p
    HELP25   TXT      2048   7-22-90  12:49p
    TEAM4    DAT       384   4-29-90   6:40p
    TEAM6    DAT       512   4-29-90   6:47p
    TEAM8    DAT       512   4-29-90   6:55p
    TEAM10   DAT       896   4-29-90   7:09p
    TEAM12   DAT      1024   4-29-90   7:30p
    TEAM14   DAT       896   4-29-90   7:46p
    TEAM16   DAT      1280   4-29-90   8:46p
    TEAM18   DAT      1664   4-29-90   9:25p
    TEAM20   DAT      1792   4-29-90  10:24p
    TEAM22   DAT      2048   4-29-90  10:54p
    CHANGES  LST      6685   8-10-90  10:15p
    COVER    TXT       784   1-01-80  12:23a
    GO       BAT        38   1-01-80   1:37a
    FILE1954 TXT      2147   9-19-90   4:58p
    GO       TXT       650   1-01-80   8:05a
           43 file(s)     105900 bytes
                           43008 bytes free
