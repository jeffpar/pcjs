---
layout: page
title: "PC-SIG Diskette Library (Disk #884)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0884/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0884"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BOWLING LEAGUE SECRETARY'S SYSTEM"

    Take the tedium out of a time-consuming task.
    
    BOWLING LEAGUE SECRETARY'S SYSTEM takes information like league name,
    bowling place, league type, team configuration, handicap basis, and
    schedule, compiles the data and starts all master files, prepares weekly
    standings, book average listings, final team/bowler standings and
    individual team/bowler record sheets.
    
    The system can handle 40 teams, up to ten bowlers per team
    (400 total), and up to a 50-week season.  BOWLING LEAGUE SECRETARY is
    menu-driven and has on-line help.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BOWL.DOC

{% raw %}
```


















                       BOWLING LEAGUE SECRETARY'S SYSTEM
                                  VERSION 3.3
                     PROGRAM DESCRIPTION/OPERATIONS MANUAL
                                  MARCH, 1990

















                              COPYRIGHT 1989, 1990
                               LLOYD C. BOWEN, JR.
                              ALL RIGHTS  RESERVED


                       Bowling League  Secretary's System
                                      by
                               Lloyd C. Bowen Jr.

                               TABLE OF CONTENTS

             Programs Included in the System.....................1 
             System Installation.................................1 
             System Overview ....................................3 
             Summary of File Contents............................4 
                File #1 - LEAGUE.LDR.............................4 
                File #2 - TEAM.LDR...............................4 
                File #3 - TEAM.DTL...............................5 
                File #4 - BOWLERS.LDR............................5 
                File #5 - BOWLER.DTL.............................5 
                File #6 - SCHEDULE.REC...........................6 
                File #7 - SCORES.REC.............................6 
                File #8 - SETUP.REC..............................6 
                File #9 - ADDRESS.REC............................7 
             Summary of File Usage...............................7 
             Setup and Operations................................9 
             Procedure Descriptions..............................9 
                Procedure #1  - MAKE............................10 
                Procedure #2  - SCHEDULE........................10 
                Procedure #3  - BOWLERS.........................10 
                Procedure #4  - ENTER...........................11 
                Procedure #5  - WEEKLY..........................11 
                Procedure #6  - CHANGE..........................12 
                Procedure #7  - REVISE..........................12 
                Procedure #8  - ALPHABETIC......................12 
                Procedure #9  - DISPLAY.........................13 
                Procedure #10 - PRINT...........................13 
                Procedure #11 - FINAL...........................13 
             Definition of Terms................................14 
             Appendix A - Tips for Special Occasions............15 
             Error Codes which have been reported...............16 
             Tips for new users.................................17 

                               Shareware Concept

      Shareware  is Copywrited Commercial Software!   You are allowed  to 
      try  before you buy,  and freely give copies to your friends to try 
      before  they buy.   Only distributors authorized by the author  may 
      make any charge for copies of Shareware programs.  Anyone who finds 
      the  program  useful  is required to send payment for  use  of  the 
      program to the author or his listed agent.  

      Many League Secretaries are using this system,  some with more than 
      20 teams and up to 36 rounds. I know you will enjoy it when you get 
      started.  If you want to use version 2.X to read version 1.XX files 
      change League Leader Number of Weeks to 50. Version 3.xx won't read 
      Version 1.X or 2.X files until the files have been converted for 10 
      bowlers and 40  teams.   A  conversion program which converts  2.xx 
      files  to 3.xx files is available to registered users upon request. 
      A Finance Manager is available to registered users for $25.00.
      Please send any communications and your $25.00 per League Fee to: 

                           Lloyd C. Bowen Jr.
                           2213 Peach Tree St.
                           Amarillo, Texas 79109-1922
                           U.S.A.


                        PROGRAMS INCLUDED IN THE SYSTEM            Page 1 

      The following files appear on the distribution disk:

                     Volume in drive A is BOWL 3.30  
                     Directory of  A:\

                    BOWL     000    152064 03-09-90   9:37a
                    BOWL     001     44288 03-09-90   9:37a
                    BOWL     002     10752 03-09-90   9:37a
                    BOWL     COM     31728 03-09-90   9:37a
                    BOWL     DOC     51885 03-09-90  11:35a = This File
                    BOWL     HLP     12314 03-09-90   9:14a
                    CONFIG   SYS        33 04-03-88   8:04a
                            7 File(s)      55296 bytes free

      NOTE: Dates and file sizes will vary a little.

      ADDRESS.COM is a mailing label program to use with your league  and 
      comes to registered users "FREE" along with  RECAP.COM which prints
      recap (BOWLING LEAGUE RECORD) sheets for your league.  It shouldn't
      be  run  until most of the league  membership has been assured, but
      should be run before the sanction cards are turned in.  

      BOWL.COM is the main menu program,  BOWL.000  and BOWL.001  contain 
      the  overlay procedures which comprise the system and  BOWL.HLP  is 
      the help file for the system.  BOWL.HLP is an ASCII file and may be 
      printed using the DOS PRINT command.  

      CONFIG.SYS is for use on floppy systems and contains three commands 
      for configuring your system; BREAK=ON, FILES=16 and BUFFERS=20.  

                              SYSTEM INSTALLATION

      To use a hard disk just copy these files to the same  sub-directory 
      on  your disk,  (CAUTION:  Do Not use the root directory on a  hard 
      disk) delete CONFIG.SYS and make sure that the commands FILES=16 or 
      more  and  BUFFERS=20   or  more appear in  your  CONFIG.SYS  file.  
      Prepare  two diskettes for use,  first place a diskette in drive A: 
      and  format the diskette with the system on it using the  following 
      command: 
                                 FORMAT A:/S/V

      Repeat  for  Second Diskette.   Then copy the above files  on  that 
      diskette until the directory looks something like the following: 
      
                     Volume in drive A is BOWL SYSTEM
                     Directory of  A:\

                    COMMAND  COM     23612 03-21-86  12:01p
                    BOWL     000    152064 03-09-90   9:37a
                    BOWL     001     44288 03-09-90   9:37a
                    BOWL     002     10752 03-09-90   9:37a
                    BOWL     COM     31728 03-09-90   9:37a
                    BOWL     HLP     12314 03-09-90   9:14a
                    CONFIG   SYS        33 03-30-88   2:44p
                            7 File(s)     26112 bytes free
      Include ADDRESS.COM if space exists,  344  bytes will be needed for 
      SETUP.REC which will be created later. 


                              SYSTEM INSTALLATION                  Page 2 
            
      Copy to Second Diskette if needed (Registered Users Only):

                     Volume in drive A is BowlAddress
                     Directory of  A:\

                    COMMAND  COM     23612 03-21-86  12:01p
                    ADDRESS  COM     64995 02-17-90  10:04a
                    RECAP    COM     52786 02-17-90  10:26a
                    CONFIG   SYS        33 03-30-88   2:44p
                            3 File(s)    160838 bytes free

      NOTE: Volume label is your choice.  

      Place  a  blank diskette in drive and format it with the  following 
      command: 
                                  FORMAT B:/V

      Repeat for Second Diskette.
      
      AFTER READING THE REST OF THIS MANUAL:

      Place the BOWL SYSTEM diskette in drive A: and reboot the computer.  
      If you wish to a particular date or time on your output,  type DATE 
      to  change the date and TIME to change the time.   Then Type  BOWL, 
      Press Enter,  then answer questions properly until the main menu is 
      reached,   then select Make to start a test league.   I   recommend 
      trying  a  couple  of these,  until you are  comfortable  with  the 
      program,   before trying an actual league.   When you have  entered 
      some scores the drive B: disk should look something like this: 

              NOTE: A hard disk sub directory may be used instead.
      
                     Volume in drive B is Kegler_Mens
                     Directory of  B:\

                    LEAGUE   LDR      214  10-15-89   2:47p
                    TEAM     LDR     1476  10-15-89   2:47p
                    TEAM     DTL    17580  10-15-89   2:47p
                    BOWLER   LDR     9690  10-15-88   2:48p
                    BOWLER   DTL    66258  10-15-88   2:48p
                    SCHEDULE REC     1617  10-15-89   3:47p
                    SCORES   REC      216  10-15-89   8:07a - after entering
                            7 File(s)    261392 bytes free    scores

      Then copy the above files on the second diskette formatted  without 
      the /S option.  This is a Back-Up copy of your data. 

                       ALWAYS BACK-UP YOUR DATA FILES!!!

      If  files appear with 0 bytes after a crash they should be  erased, 
      files with zero bytes cause ERROR 99 (Unexpected End of File) which 
      will  also  appear if the Next ID number in the LEAGUE.LDR  is  too 
      high.   The program won't recover from this kind of error,  all you 
      can do is copy your backup records and start over.  


                                SYSTEM OVERVIEW                    Page 3 

      This system was written as 21 overlay procedures representing 11355 
      lines  of code.   The system is written in Turbo Pascal for a  256k 
      IBM  Personal  Computer or close compatible with one  or  two  disk 
      drives and a printer.   As well as Tandy 1000,  the system is being 
      used on a Commodore Amiga with a "PC board" and A Zenith 100 with a 
      "Scottie board", the Zenith user reports having to enter 00 instead 
      of  0  to use a blind score.   The system  is  highly  generalized, 
      permitting initialization of most items including: 

          League Name
          Bowling Establishment
          League Type - Including Mixed and Scratch Leagues 
                        2, 3 or 4 Games per match
          Team Configuration
          Handicap Basis
          Schedule - Automatically Sorts Position Rounds

      As distributed,  the system can handle 40  teams, up to 10  bowlers 
      per team (400  total),  and up to a 50 round season.   The 40  team 
      limit  is a function of the space needed to print the schedule on 8 
      1/2" paper.  If the Program is appropriately modified a much larger 
      number  of  teams  can be accommodated.   The  actual  limit  is  a 
      function of diskette capacity,  number of teams, number of bowlers, 
      and  number  of rounds,  but you must purchase the source  code  to 
      change these.  If more than 24  teams are used a printer capable of 
      condensed or elite (up to 30  teams)  type must be used in order to 
      have room for the schedule.  

      Programs  are  provided to initialize and change all master  files, 
      enter  scores  and  print standings (weekly),  as well  as  prepare 
      ABC/WIBC book average listings,  final team/bowler standings,   and 
      display or print individual team/bowler record sheets.   Almost any 
      Point  Scoring  may be used including Peterson.   Match points  are 
      displayed  and printed in the format XX.X and total points  in  the 
      format  XXX.X.    This should be considered when choosing  a  point 
      system.  

      The  system  is designed to be used on either a one  or  more  disk 
      drive  system with the file drive or fixed disk path set at program 
      start-up.    Program  selection  is  controlled by  a  master  MENU 
      program.   You will need to maintain all bowler files on a separate 
      diskette   or  in  a  separate  directory.    In  a  single   drive 
      environment,   DOS will provide prompts to insert  the  appropriate 
      diskette.  

             Just remember - Drive A = PROGRAMS;  Drive B = FILES.


                            SUMMARY OF FILE CONTENTS               Page 4 

      The  following  pages  show the names of files  generated  by  this 
      program and the records kept in each of the files.   Also  included 
      is information concerning what can be entered in each file.    Have 
      as much of the information needed before pressing M to start league 
      initialization  or  S to create the season  schedule  as  possible.  
      Some data may be entered later with the Change procedure.  

      FILE NO.1      LEAGUE.LDR
      File Size = 215 Bytes
      File Contents and Description:
        League Name       - Up to 30 Characters
        Alley Name        - Up to 30 Characters
        President's Name  - Up to 30 Characters
        Secretary's Name  - Up to 30 Characters
        Season            - Up to 30 Characters  ie (1989 - 1990)
        President's Phone - Up to 13 Characters
        Secretary's Phone - Up to 13 Characters
        Sanction Number   - Up to 10 Characters
       *Number of Weeks   - From 1 to 50          {Now called Rounds}
       *Number of Teams   - From 1 to 40
       *League Type       - 8 Types are listed Mens,  Womens, 
                            Mixed and Scratch for either 3 or 
                            4 games per match 
       *Bowlers per Team  - From 1 to 10 =  Number allowed on team
       *Bowlers per Match - From 1 to 8 = For this team only
        Next ID           - From 1  to  401  -  This  is  the 
                            number of Bowlers in the League+1 
       *Handicap Base     - From 0 to 300 - (Handicap Base minus Average)
       *Handicap Percent  - From 0 to 100   times Handicap Percent equals
       *Maximum Handicap  - From 0 to 240   Handicap (Individual only).
       *Use Last Year Avg - From 0 to 21  Number of Games        
        Skip Subs         - True or False ?Subs in Individual Standings
        HighAvg           - True or False ?Print High Averages
        HighHCP           - True or False ?Re-figure after 21 games
        PrintScratch      - True or False ?Team hi scores scratch
     *Mandatory to start Make (the league initialization procedure)
    
      FILE NO. 2    TEAM.LDR
      File Size = 82 Bytes per team
      File Contents and Description:
        Team Number    - From 1 to 40
        Team Name      - Up to 30 Characters
     NOTE:The rest of this file is created by the program with no input. 
        Record Count   - From 0 to 50 - 1 for each round bowled
        Games          - From 0 to 200 - 1 for each game bowled
        Total Pins     - Total Pin Count - includes handicap if any 
        Average        - Total Pins divided by Games
        High Game      - Highest Game so far this season
        High Series    - Highest Series so far this season
        HighGameHCP    - Highest Game so far this season with handicap
        HighSeriesHCP  - Highest Series so far this season with handicap
        Points Won     - Points Won so far this season
        Points Lost    - Points Lost so far this season
        Bowler ID's    - 1 ID Number for each Bowler on Team


                            SUMMARY OF FILE CONTENTS               Page 5 

      FILE NO. 3    TEAM.DTL
      File Size = 300 Bytes + 30 Bytes per team per round.
      File Contents and Description:
        Team Number  - From 1 to 40
        Month        - Up to 2 characters - Month match was bowled
        Day          - Up to 2 Characters - Day match was bowled
        Game 1 Score - Even number - Team score for first game
        Game 2 Score - Even number - Team score for second game
        Game 3 Score - Even number - Team score for third game
        Game 4 Score - Even number - Team score for fourth game if any
        Series       - Even number - Team score for series
        Points Won   - Decimal number - Points Won this match
        Points Lost  - Decimal number - Points Lost this match

      FILE NO. 4    BOWLER.LDR
      File Size = 85 Bytes per bowler
      File Contents and Description:
        Bowler ID Number  - From 1 to 400 - In order entered into file
        Gender            - M = Male F = Female
        Last Name         - Up to 15 Characters - These should total no
        First Name        - Up to 15 Characters - more than 20
        Phone Number      - Up to 13 Characters
        Social Security # - Up to 11 Characters
        Record Count      - From 0 to 50 - Number of rounds Bowled
        Games Bowled      - From 0 to 200
        Total Pins        - Scratch
        Average           - Total Pins divided by Games Bowled
        High Game         - Up to 300 High Game this season scratch
        High Series       - Up to 1200 High Series this season scratch
        Current Series    - Up to 1200 Last Series Bowled this season
        Handicap          - Up to 200 Calculated after 21 games
        High Game Hcp     - Up to 500 - Calculated after 21 games
        High Series Hcp   - Up to 1200 - Calculated after 21 games
        Team Number       - 0 to 40 - Team assigned to
        Last Years Avg    - Up to 300 - Used Until 21 Games for handicap 
                                        and to calculate improvement.

      FILE NO. 5    BOWLER.DTL
      File Size = 180 Bytes + 18 Bytes per bowler per round
      File Contents and Description:
        Bowler Number   - From 1 to 400
        Month           - Up to 2 characters - Month match was Bowled
        Day             - Up to 2 Characters - Day match was Bowled
        Game 1 Score    - Up to 300 - Score for first Game
        Game 2 Score    - Up to 300 - Score for second Game
        Game 3 Score    - Up to 300 - Score for third Game
        Game 4 Score    - Up to 300 - Score for fourth Game if any
        Series          - Up to 1200 - Score for series

      FILE NO. 6    SCHEDULE.REC
      File Size = 49 Bytes + 49 Bytes per round
      File Contents and Description:
        Status     - L = Lanes R = Regular P = Position Night
        Date       - Up to 5 Characters - Date to Bowl (mm/dd or dd/mm)
        Lanes      - Up to 40 Numbers - Either Lanes or Teams


                            SUMMARY OF FILE CONTENTS               Page 6 
      
      SCHEDULE.REC file is not created by the Make procedure so it won't
      be on the disk until the Schedule procedure is run.  

      FILE NO. 7    SCORES.REC
      File Size = 18 Bytes per high roller
      File Contents and Description:
        Bowler ID No.   - From 1 to 400
        Game 1 Score    - Up to 300 - Score for first Game
        Game 2 Score    - Up to 300 - Score for second Game
        Game 3 Score    - Up to 300 - Score for third Game
        Game 4 Score    - Up to 300 - Score for fourth Game if any
        Series          - Up to 1200 - Score for series
        High Game 1 ?   - True or False
        High Game 2 ?   - True or False
        High Game 3 ?   - True or False
        High Game 4 ?   - True or False
        High Series ?   - True or False
        High Count      - 0 to 5 - Number of Trues above

        This file is rewritten each round when scores are entered and the 
      information  is  used to create the  round  highlights  lists.    A 
      SCORES.REC file is not created by the Make procedure so it won't be 
      on the disk until the first rounds scores are entered.  
      
      NOTE: Skipping teams really can screw this up.  

      FILE NO. 8    SETUP.REC
      File Size = 344 Bytes
        Adaptor       - 0, 1, 2 or 3 depending upon type of monitor
        Elite         - Printer Escape Code up to 20 Characters  
        FormLength11  - Printer Escape Code up to 20 Characters  
        FormLength13  - Printer Escape Code up to 20 Characters  
        FormLength14  - Printer Escape Code up to 20 Characters  
        Init          - Printer Escape Code up to 20 Characters  
        LetterQuality - Printer Escape Code up to 20 Characters  
        LineFeed6     - Printer Escape Code up to 20 Characters  
        LineFeed8     - Printer Escape Code up to 20 Characters  
        LongPaper     - Yes or No ?Use 13 inch long paper - The default is
        LongerPaper   - Yes or No ?Use 14 inch long paper   11 inch paper
        Narrow        - Printer Escape Code up to 20 Characters  
        NoUnderline   - Printer Escape Code up to 20 Characters  
        PageLength11  - Maximum number of lines to print on 11 inch paper
        PageLength13  - Maximum number of lines to print on 13 inch paper
        PageLength14  - Maximum number of lines to print on 14 inch paper
        PWidth        - Number of characters to print on 1 line - Set at 80
        ResetPrinter  - Printer Escape Code up to 20 Characters  
        Underline     - Printer Escape Code up to 20 Characters  
        UnElite       - Printer Escape Code up to 20 Characters  
        UnNarrow      - Printer Escape Code up to 20 Characters  
        UnWide        - Printer Escape Code up to 20 Characters  
        Wide          - Printer Escape Code up to 20 Characters  

      SETUP.REC  file  is  created by BOWL the first time you  start  the 
      program.  It may be re-written from the Change procedure. 


                            SUMMARY OF FILE CONTENTS               Page 7 
      
      FILE NO. 9    ADDRESS.REC
      File Size = 104 Bytes per bowler.
      File Contents and Description:
        Number     - Bowler ID Number
        Last Name  - Up to 15 characters
        First Name - Up to 15 characters
        Street     - Up to 30 characters
        City       - Up to 15 characters
        State      - Up to  2 characters
        ZipCode    - Up to 10 characters
        Birth date - Up to  8 characters

      ADDRESS.REC  is created by ADDRESS.COM a mailing label  program  to 
      use  with  your  league which shouldn't be run until  most  of  the 
      league  membership has been assured,  but should be run before  the 
      sanction cards are turned in.   The program will extract the bowler 
      ID  number  and name from the BOWLER.LDR file  upon  request,   but 
      ERASES  any  ADDRESS.REC there and starts a new  file.    The  file 
      LEAGUE.LDR must be present for ADDRESS.COM to run.  

                             SUMMARY OF FILE USAGE

      The  LEAGUE.LDR file stores information common to the entire league 
      and is used by all of the procedures.   Its presence is required by 
      all  but  the main MENU and the Schedule creation  procedure.    Of 
      course  the Make procedure starts without this file,  but  requires 
      some of the information to be able to complete its job.   Number of 
      Rounds is used in determining the size of the detail files.  Number 
      of  Teams  is used by the make file itself and in  determining  the 
      size  of the team detail file.   League Type is used  to  determine 
      whether  to  look for 3 or 4 games per match and to  determine  the 
      math to use in scoring.   Bowlers per Team is used to determine the 
      amount  of space to allow per team on the printouts and in  scoring 
      to skip bowlers.  Bowlers per Match is used in scoring.  

      The  TEAM.LDR file stores summary information pertinent to each  of 
      the  teams,  one record for each of the "Number of Teams"   in  the 
      LEAGUE.LDR.  

      The  TEAM.DTL file stores the team scores from each  match.    This 
      file is primarily for the secretary,  but may be printed using  the 
      PRINT procedure or displayed using the DISPLAY procedure. 

      The BOWLER.LDR file stores summary information pertinent to each of 
      the  bowlers,   one  record  for each of "Next  ID  -1"   from  the 
      LEAGUE.LDR.  


                             SUMMARY OF FILE USAGE                 Page 8 

      NOTE: Only the Leader(LDR) files and Record(REC)  files are used to 
            print actual reports.  The Bowler ID Number must be listed in 
            the  TEAM.LDR and the Team Number in that  BOWLER.LDR  record 
            for that bowler to appear on that teams records.  Substitutes 
            use  Team Number 0 and any bowler whose record lists  Team  0 
            appears  on the substitute list.   Should you list more  than 
            LEAGUE.LDR "Bowlers per Team" on a team the remainder will be 
            ignored.  

      The  BOWLER.DTL file stores the bowler scores from each match or  a 
      blank  record (all 0's)  if carried blind.   This file is primarily 
      for the secretary,  but may be printed using the PRINT procedure or 
      displayed using the DISPLAY procedure.  

      The  SCHEDULE.REC  file stores the season schedule for use  by  the 
      printout procedures.  

      The  SCORES.REC file stores high scores from the last match and  is 
      used  to  print the  round hilites on the  round summary  sheet  or 
      final  report.    It can be revised or added to  using  the  REVISE 
      procedure  and displayed using the DISPLAY procedure.   This  is  a 
      temporary  file  and is replaced after each match or erased  if  no 
      high scores were bowled. 

      The  SETUP.REC file is created by BOWL.COM the first time you start 
      the program and may be re-written from the Change procedure.   This 
      file  holds  the type of video adaptor you have and the  codes  for 
      your printer.   The only thing important about the adaptor entry is 
      color  or monochrome monitor,  no use is made of the EGA listing as 
      yet  and  it  reverts  to color.   In earlier  versions  I  used  a 
      procedure  to  determine  automatically  which  video  adaptor  was 
      installed,   but  found  that  people  were  connecting  monochrome 
      monitors to CGA,  EGA and VGA adaptors.   The program colors do not 
      read well on a monochrome monitor.  The set-up procedure allows you 
      to enter a special printer,  but this is not recommended unless you 
      are very familiar with printer control codes.  

      The  ADDRESS.REC  file is created by ADDRESS.COM  a  mailing  label 
      program  to use with your league which shouldn't be run until  most 
      of the league membership has been assured, but should be run before 
      the  sanction  cards are turned in.   The program will extract  the 
      bowler  ID number and name from the BOWLER.LDR file  upon  request, 
      but ERASES any ADDRESS.REC there and starts a new file.   The  file 
      LEAGUE.LDR must be present for ADDRESS.COM to run.   If you have  a 
      sheet  feeder on your printer it will address individual sheets for 
      mailing.  It also will produce a 4 line special label on 1" x  3.5" 
      mailing  labels in the quantity desired.   I  wrote this one day to 
      label some floppy disks and just left it in for good measure.  


                              SETUP AND OPERATIONS                 Page 9 

      The  Program  is mostly menu driven and should need only  a  little 
      trial and error to use.  Just type BOWL enter the path to your data 
      and  a MENU will appear,  then press M and you are on your way.   I 
      recommend  doing  a  sample league first to get  the  feel  of  the 
      program.   One other program is included: "ADDRESS.COM"  which lets 
      you keep an address list of the bowlers and print 1"  x  3.5"  mail 
      labels.  
      The following are the most important points to remember when  using 
      this program: 

            1> IMMEDIATELY after Creating your League and Schedule,  MAKE 
               A  BACKUP  of  these  files on a separate disk or path and 
               UPDATE EACH ROUND!  
            2> PRIOR to ENTERING SCORES check  your  score sheets and  be 
               certain  to  ADD any NEW SUBSTITUTES and NOTE the RECORD # 
               of any SUBSTITUTE.  I keep a substitute with the last name 
               *VACANT on my substitute list just in case I  slip  up  at 
               this.  
            3> On the TEAM.LDR you may change the Bowler ID's.  I suggest 
               putting the  Team  Captain  in  position  #1.  The  Season 
               Schedule printout assumes this.  
            4> If  you  remove a bowler from a team be sure to change the 
               BOWLER.LDR to show his Team number as 0 so he will  appear 
               on the substitute list.  
            5> If  you  add  a  bowler  to  a  team be sure to change the 
               BOWLER.LDR to show the new team number.  
            6> If you change data in the LEAGUE.LDR,  QUIT and restart by 
               entering bowl at the DOS prompt to initialize variables.  
            7> Run  Print Test in the PRINT procedure until you determine 
               which commands to use for your printer.  
    
      To  run  a Split Season League,  at the end of the first  half  and 
      after  the  round  summary  has been  printed,   enter  the  Change 
      procedure,  opt for each Team Leader and change the following to 0; 
      Points Won, Points Lost and Optionally - Games and Total Pins. 

                             PROCEDURE DESCRIPTIONS
      
      The  procedures are first listed on a main MENU which appears after 
      the  File Path screen and the First screen which is just for  show.  
      The   menu  is  divided  into  sections  with  "ROUND   PROCESSING 
      PROCEDURES"  first,  "MAINTENANCE PROCEDURES"  second and "CREATION 
      PROCEDURES"  third.   Last shown is the "EXIT PROGRAM"  which  just 
      returns your screen to its normal color and returns control to DOS.  
      You  just press the first letter of the desired procedure  name  to 
      start that procedure and that procedure will return you to the main 
      menu under most conditions.  


                             PROCEDURE DESCRIPTIONS               Page 10 
            
                              Creation Procedures

      The creation procedures are straight through procedures.   Once you 
      start you must finish at the same sitting or start over.   They  do 
      have  a  way back to the menu at the start in the event  you  reach 
      them  inadvertently.   Do these separately,  have the data at  your 
      finger  tips and allow plenty of time.   You can't do this on a  10 
      minute coffee break.  

      Procedure #1  BOWLERS
      The  BOWLERS  procedure  is a creation  procedure  and  allows  the 
      addition of bowlers after the league has been initialized.  Bowlers 
      are  added as subs,  then manipulated with the CHANGE procedure  to 
      put them on a team if desired.   Remember each team is  initialized 
      with a full complement of bowlers,  with those positions not filled 
      called *Vacant. 

      Procedure #2  MAKE
      The  MAKE  procedure is a creation procedure and the start  of  the 
      Bowling League Secretary's System.   This procedure initializes the 
      files  which store the data for the system.   Only a few items  are 
      actually  required  to  run MAKE and they all go  into  the  league 
      leader file.  They are: 

            Number of rounds the league will bowl.
            Number of Teams the league will have.
            League Type       - 8 Types are listed Mens,  Womens, 
                                Mixed and Scratch for either 3 or 
                                4 games per match 
            Bowlers per Team  - From 1 to 10, The number of members
                                allowed on 1 team  
            Bowlers per Match - From 1 to 8, The number of bowlers
                                that bowl for 1 team each match
            Use Last Year Avg - From 0 to 21  Number of Games to use
                                last years average

      You  will be prompted for other information but you can just  press 
      enter  if  you  don't have it and enter it later  with  the  CHANGE 
      procedure.   Bowler last names starting with an asterisk (*)  don't 
      print out on the summary sheets so the unknown bowlers on each team 
      should be entered last and with a last name that starts with *.   I 
      use *VACANT which I learned from one of the beta testers.  

      Procedure #3  SCHEDULE
      The  SCHEDULE  procedure is the third creation  procedure  and  not 
      always necessary for each league.   If you have a 16  team 36 round 
      schedule  left over from last season and need one this  season  you 
      can change the dates using the CHANGE procedure,  copy it onto  the 
      disk  or into the path with the league records and use  it.    This 
      procedure uses Number of Rounds and Number of Teams from the league 
      leader  file,   but will prompt you for these if it isn't  present.  
      Except  for the dates you will bowl the remainder of  the  required 
      data is on the schedule sheet published by the ABC.  


                             PROCEDURE DESCRIPTIONS               Page 11 

                           Round Processing Procedures

      The  round  processing procedures are straight through  procedures.  
      Once  you start you must finish at the same sitting or start  over.  
      Have  the data at your finger tips,  but you might be able to do  a 
      small league on a 10 minute coffee break.  

      Procedure #4  ENTER
      The ENTER procedure is used every round to enter the scores. Scores 
      are  entered by team number and in the order the bowler numbers are 
      listed  in  that team leader record.   The CHANGE procedure can  be 
      used to change this order.  Sort your data into team order, be sure 
      that you have a bowler ID number for each substitute (you can use a 
      substitute from another team), use the number pad and with a little 
      practice  you  can  enter a big league in 15  minutes.    You  have 
      several chances to start over, but if you practice this with a test 
      league it will pay for your time in the long run.  

      Procedure #5  WEEKLY
      The  WEEKLY  procedure  is  the  procedure that  prints  the  round 
      summary sheet for each round the league is scheduled to bowl.   You 
      will be prompted for print to disk,  a  message from the secretary, 
      and the number of high scores to print.  If you don't want to print 
      to  disk just press the space bar,  you ought to know  what  length 
      paper if not measure,  for no message from the secretary just press 
      enter,   most  leagues print 3 high scores.   The entries  for  the 
      secretary's message is done in a window 72  spaces wide if you have 
      a  color adaptor CGA,  EGA etc.   This presents a problem since the 
      printout has 80 spaces and a | appears on the display 40  spaces in 
      so  you  can  center if you wish.   Each line (up to 10)   of  your 
      message can wrap over 8 spaces before pressing enter, any more than 
      this will be cut off.   You MUST PRESS ENTER for each line.  If you 
      have  a mono adapter just keep it on the same line.   How long this 
      takes  depends  entirely  upon the printer you use.   An  IBM  PCAT 
      driving an HP LaserJet+  runs a 20  team file in about 90  seconds, 
      but some of the older daisy wheel printers might take 30   minutes.  
      You MUST use FINAL for the last ROUND, WEEKLY WON'T WORK. 

                             Maintenance Procedures

      The  maintenance  procedures  are for the secretary  and  with  the 
      exception  of FINAL which is just the last  round summary sheet the 
      maintenance procedures are groups of related procedures.   Starting 
      a  maintenance procedure takes you to another menu where you choose 
      the actual operation you wish to perform.  


                             PROCEDURE DESCRIPTIONS               Page 12 

                             Maintenance Procedures

      Procedure #6  CHANGE
        The  CHANGE  procedure  is  a  maintenance  procedure  containing 
      procedures which: 
                                MAIN CHANGE MENU 

                       1. Revise a Bowler Leader Record
                       2. Revise a Team Leader Record
                       3. Revise the League Leader Record
                       4. Revise the Season Schedule
                       5. Reset Team Leader for Mid Season
                       6. Reset Records for Next Season
                       7. Enter New Set Up Record
                       Q. Quit and Return to the Main Menu

      In all cases just pressing enter leaves the scores as they were and 
      pressing  Escape after starting changes allows you to leave without 
      making changes.  Pressing Escape from the top menu allows escape to 
      DOS so you can restart the program and initialize any variables you 
      have changed,  if you made no changes press Q to return to the main 
      menu.  

      Procedure #7  REVISE
      The  REVISE  procedure  is a continuation of the  CHANGE  procedure 
      which  became  too long for Turbo Pascal.   It contains  procedures 
      which: 
                                MAIN REVISE MENU 

                        1. Revise a Bowler Detail Record
                        2. Revise a Team Detail Record
                        3. Revise the High Scores Record

      Procedure #8  ALPHABETIC
      The  ALPHABETIC procedure is a maintenance procedure  which  prints 
      reports  for  the ABC,  WIBC or both and also prints  out  a  Phone 
      Number  list for the secretary.   All of these lists are  available 
      either last name first or first name first.   Only the phone number 
      report  will  print for bowlers with less than 21  games.   Can  be 
      printed  to  disk and then edited with an ASCII editor such  as  PC 
      WRITE.  The Phone Number list includes the Bowler ID number.

                              MAIN ALPHABETIC MENU 

                 1 - Print all records, First Name First
                 2 - Print all records, Last Name First
                 3 - Print Female records only, First Name First
                 4 - Print Female records only, Last Name First
                 5 - Print Male records only, First Name First
                 6 - Print Male records only, Last Name First
                 7 - Print Phone Numbers, First Name First
                 8 - Print Phone Numbers, Last Name First
                 Q - Quit and Return to the Main Menu


                             PROCEDURE DESCRIPTIONS               Page 13 

                             Maintenance Procedures 
      
      Procedure #9  DISPLAY
      The  DISPLAY  procedure is a maintenance procedure  which  displays 
      detail  records  on the screen for either a team or a bowler.    It 
      also will display the high scores record.  

                               MAIN DISPLAY MENU 

                        1. Display a Bowler Detail Record
                        2. Display a Team Detail Record
                        3. Display the High Scores Record

      Procedure #10  PRINT
      The PRINT procedure is a maintenance procedure which prints  detail 
      records  by  team  or bowler,  prints the entire  files  of  bowler 
      leaders,  team leaders, bowler details,  or team details and prints 
      the  season schedule.   In printing the Season Schedule it  assumes 
      that  the Bowler Listed First on each team is the  Captain.    More 
      than 20  teams requires long paper or maybe two sheets.  All can be 
      printed  to  disk and then edited with an ASCII editor such  as  PC 
      WRITE.  
                                MAIN PRINT MENU 

                 1 - Schedule (Full Season Schedule)
                 2 - Team Scores
                 3 - Team List (Number and Name)
                 4 - Team Leaders (Entire File all Teams)
                 5 - Team Detail (Entire File all Teams)
                 6 - Bowler Scores
                 7 - Bowler List (Number and Name)
                 8 - Bowler Leaders (Entire File all Bowlers)
                 9 - Bowler Detail (Entire File all Bowlers)
                 L - League Leader (Entire File)
                 H - High Scores Record (Entire File)
                 G - Get New Printer(Changes Printer Selection)
                 P - Change Paper Size
                 T - Test Printer (Checks Printer Selection)
                 Q - Quit and Return to Main Menu

      Procedure #11  FINAL
      The  FINAL procedure is actually the same as the  WEEKLY  procedure 
      except  that it doesn't print a schedule and it prints season final 
      high  scores  and shows improvement for each bowler who has 21   or 
      more  games.   Can be printed to disk and then edited with an ASCII 
      editor such as PC WRITE.  


                       Bowling League Secretary's System          Page 14


                              DEFINITION OF TERMS

      Bowlers per Match:  The number of bowlers who bowl for one team in 
                          each match and whose score counts in that 
                          match.

      Bowlers per Team:   The maximum number of members a team is allowed. 

      File Dump:          A listing of all data in a data file.

      Match:              A meeting of two teams in competition, usually 
                          2, 3 or 4 games.

      Pacer:              A Team Member who bowls with the team and whose 
                          score counts for the bowlers average, but does 
                          not count for the team score for that match.  

      Path:               The Drive and Sub-Directory where the required 
                          files are stored.  

      Round:              One Time that a League meets.  For most of you 
                          this is weekly and the Secretary still has Week 
                          in places.  There are many leagues that meet 
                          monthly or on some indefinite schedule and then 
                          bowl 2 or more rounds at that meet.  

      
                       Bowling League Secretary's System          Page 15

                                   Appendix A

                           Tips for Special Occasions

      1.  Partial  Substitute:  When a substitute bowls only  part  of  a 
          match and a different player bowls the rest;  Enter scores  for 
          one  player (your choice)  with 0 for games not bowled.    This 
          will cause the program to ask for blind scores.   Enter 0's for 
          games where scores were entered and the other players score(s).  
          Enter  S  for Team handicap and then enter each games  handicap 
          separately.    This  will cause the team score to  be  correct.  
          Next  note  the other players bowler number,  go to the  Change 
          procedure and change that bowler leader to reflect 1 more round 
          bowled,  ?   more game(s) bowled and change as required;  total 
          pins,  average,  high game,  and high game handicap (only if 21 
          games  have been bowled).  Now note the rounds bowled,  quit to 
          save  your  changes  and then go to the  Revise  procedure  and 
          change that players bowler detail record for the round noted. 

      2.  Remove  Weekly HiLites:  If you do not wish to print the Weekly 
          HiLites,   press  Q to return to DOS after entering the  weekly 
          scores.    Change  to  the drive or path with your  data  files 
          (usually  B:)   then type DEL SCORES.REC press enter  and  it's 
          done.  No HiLites to print so none will be printed. 

      3.  Note  on Handicap:  This program does not record an  individual 
          handicap  until  it is legal under ABC/WIBC rules  (21   Games) 
          although it does figure average and handicap from the first for 
          the  round  summary sheet.   This means that the round  summary 
          sheet won't show high game or series handicap until the  league 
          has  bowled  over 21  games nor will the  Alphabetic  procedure 
          print lists other than the phone list until 21  games have been 
          bowled.   This is locked in to too many procedures to change so 
          if you use this program you will have to adjust to this. 

          Please write the author with any suggestions for improvement or 
          with details of any bugs you might find.   The authors name and 
          address is: 
                               Lloyd C. Bowen Jr. 
                               2213 Peach Tree St. 
                               Amarillo, TX 79109-1922 
                               U.S.A.

          The  Source  Code in Turbo Pascal Version 3 is available  on  a 
          DSDD (360k) diskette for a fee of $50. 

      
                       Bowling League Secretary's System          Page 16

                         Input/Output (I/O) Error List

      The screen will appear as follows:

       I/O error NN, PC=(some address)

       where NN = a hexadecimal number.

      The following includes all errors which have ever been reported:

      NN
      ==
      01  FILE DOES NOT EXIST
            A  file is missing from your data disk,  in most  cases  this 
            error  is  trapped  and  you will be  questioned  within  the 
            program. 

      04  FILE NOT OPEN
            The command FILES=16  or more doesn't appear in the computers 
            CONFIG.SYS file.  Occurs when entering scores.

      99  UNEXPECTED END-OF-FILE
            Usually  occurs when there are files on the data  disk  which 
            have 0 bytes. 

      F0  DISK WRITE ERROR
            The disk is full,  no more room to write.  You may have to go 
            to a hard disk or a larger floppy format.   Should happen for 
            very large leagues only. 

      F1  DIRECTORY IS FULL
            You  are trying to create a file and there is no more room in 
            the disk directory.  I  believe this occurs on some computers 
            when  the command FILES = 16  or more doesn't appear  in  the 
            computers  CONFIG.SYS  file.   It will occur if you  enter  a 
            "PATH" which doesn't exist.  Default means just hit enter. 

      F3  TOO MANY FILES
            You don't have the commands (FILES=16 and BUFFERS=20) or more
            in your CONFIG.SYS file or you haven't re-booted the computer
            since entering them.

      FF  FILE DISAPPEARED
            You took the disk out too soon.

                              Run Time Error List

      10  STRING LENGTH ERROR
            This was reported by someone trying to run a scratch league 
            using  the  womens  league setting  and occurred  when  the 
            program started to try to print high handicap scores. 

      
                       Bowling League Secretary's System          Page 17

                               Tips for New Users

    1.    If  you  haven't  studied  MS-DOS take  a  course  at  your  local 
          community  college  or  at least buy and use a DOS  tutor.    This 
          manual assumes that you know how to format,  copy,  rename and  if 
          you  use a hard disk how to make,  remove and  change  directories 
          (paths). 

    2.    League Initialization (Make): For the league leader you will need:
          League  Name,   Alley Name,  President's Name,  Secretary's  Name, 
          Season (ie 1989  -  1990),  President's Phone,  Secretary's Phone, 
          Sanction  Number,  *Number of Rounds,  *Number of Teams,   *League 
          Type,  *Bowlers per Team (Number allowed on 1 team),  *Bowlers per 
          Match   (For   1   team   only),    *Handicap   Base,    *Handicap 
          Percent(Handicap  Base minus Average times Handicap Percent equals 
          Individual  Handicap),  *Number of games to use last year average, 
          Does league include  substitutes  in individual standings?,  Print 
          high  averages  in  individual  standings  (High  Rollers)?,   Re-
          calculate  high game handicap for the first 21  games after  a  21 
          game average has been set for this season?, Print team high scores 
          scratch?(this refers to the team standings on the round and  final 
          summary  sheets).    *   Mandatory  to  start  Make  (the   league 
          initialization procedure). ? Indicates yes or no answer. 

   3.     The Enter procedure will always insist upon scores for the  number 
          of  bowlers per match,  but if you have more bowlers per team  you 
          can  enter  SB  and skip to the next bowler as long  as  you  have 
          bowlers  on the team,  otherwise you must use substitutes or blind 
          scores.    You can also enter pacers,  but they must be handled as 
          follows;   note  the number of your first actual team bowler whose 
          score  counts,  enter SUB in game 1 then the number of your pacer, 
          enter  pacers scores (they won't add to team scores),  the  pacers 
          record will reappear,  enter SUB again and the next pacers  number 
          or the first actual bowler if pacers have all been entered.   Note 
          that the number of pacers cannot exceed the number of bowlers  per 
          team  less the number of bowlers per match,  or you can  make  the 
          bowlers per match equal to bowlers per team and always enter P for 
          bowlers whose scores don't count.   This way you have to enter 0's 
          for  all  game  scores and blind scores if they  didn't  bowl  and 
          didn't  count  as a blind.   This is only for  leagues  who  allow 
          pacers  and  count  the games toward their average.    I   do  not 
          recommend this.  

   4.     Test  for the correct printer by entering the Print procedure  and 
          running  the  print  test for different  printers  until  you  are 
          satisfied,   if none satisfy you use pure ASCII and edit and print 
          from  your  word  processor.   When you have done this  enter  the 
          Change procedure and create a new set up using this printer.   For
          those who understand printer codes, you may select a  printer with
          codes similar to yours then press the space bar when  asked if you
          want to use this printer and change the codes that don't suit you.

```
{% endraw %}

## FILES884.TXT

{% raw %}
```
Disk No:  884                                                           
Disk Title: Bowling League Secretary                                    
PC-SIG Version: S2.3                                                    
                                                                        
Program Title: Bowling League Secretary's System                        
Author Version: 3.3                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
Take the tedium out of a time-consuming task.                           
                                                                        
BOWLING LEAGUE SECRETARY'S SYSTEM takes information like league name,   
bowling place, league type, team configuration, handicap basis, and     
schedule, compiles the data and starts all master files, prepares weekly
standings, book average listings, final team/bowler standings and       
individual team/bowler record sheets.                                   
                                                                        
The system can handle 32 teams, up to eight bowlers per team            
(290 total), and up to a 50-week season.  BOWLING LEAGUE SECRETARY is   
menu-driven and has on-line help.                                       
                                                                        
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
║     <<<<  Disk #884  BOWLING LEAGUE SECRETARY'S SYSTEM  >>>>            ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start program type:  BOWL   (press enter)                            ║
║ (FILES=16 and BUFFERS=20 must be in CONFIG.SYS)                         ║
║ To print documentation type:  COPY BOWL.DOC PRN                         ║
╚═════════════════════════════════════════════════════════════════════════╝

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0884

     Volume in drive A has no label
     Directory of A:\

    BOWL     000    152064   3-09-90   9:37a
    BOWL     001     44288   3-09-90   9:37a
    BOWL     002     10752   3-09-90   9:37a
    BOWL     COM     31728   3-09-90   9:37a
    BOWL     DOC     51885   3-09-90  11:35a
    BOWL     HLP     12314   3-09-90   9:14a
    CONFIG   SYS        33   4-03-88   8:04a
    FILES884 TXT      1925   3-22-90   9:59a
    GO       BAT        38   1-01-80   1:56a
    GO       TXT       542   1-01-80  12:23a
           10 file(s)     305569 bytes
                           11264 bytes free
