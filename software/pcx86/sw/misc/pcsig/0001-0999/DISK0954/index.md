---
layout: page
title: "PC-SIG Diskette Library (Disk #954)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0954/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0954"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MINISTER ASSIGN PROGRAM"

    MINISTER helps you schedule readers, altar boys, communion ministers,
    head ushers, and greeters for the Catholic Mass.
    
    The scheduling process takes into account the preferences of the
    people scheduled, vacations, and assignments of other family members.
    The schedule is suitable for inclusion in the church bulletin. It can
    handle up to 600 people and any reasonable number of masses. Schedule
    Sunday masses, weekday masses, and special masses that appear on an
    irregular basis, such as Christmas and Easter.
    
    Schedule an additional minister-type schedule of your own definition.
    Display and print labels, phone lists for substitutes, or the entire
    database.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0954.TXT

{% raw %}
```
Disk No:  954                                                           
Disk Title: Minister Assign Program                                     
PC-SIG Version: S2.0                                                    
                                                                        
Program Title: Minister Assign Program                                  
Author Version: 5.7                                                     
Author Registration: $95.00                                             
Special Requirements: None.                                             
                                                                        
MINISTER helps you schedule readers, altar boys, communion              
ministers, head ushers, and greeters for the Catholic Mass.             
                                                                        
The scheduling process takes into account the preferences of the people 
scheduled, vacations, and assignments of family members.  The schedule  
is suitable for inclusion in the church bulletin.  It can handle up to  
600 people and any reasonable number of masses.  Schedule Sunday masses,
weekday masses, and special masses, such as Christmas and Easter, that  
appear irregularly.                                                     
                                                                        
Schedule an additional minister-type schedule of your own definition.   
Display and print labels, phone lists for substitutes, or the entire    
database.                                                               
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## MPMANUAL.TXT

{% raw %}
```






        















                   Liturgical Minister Assignment Program

                                 Version 5.7

                                  Jun 1990

                         Manual Revision 10 Jun 1990










                   Written by : Tom Hayes

                                940 Heather Lane

                                Hoffman Estates, IL 60195

                                708-884-0514





        

             If  you  find this package useful in coordinating  your
             minister staff a registration  fee of $30 is expected. 
             See the end of this manual for registration information
             and a registration form.   Help for registered users is
             available from the author  at  the  above  address  and
             number  evenings  between 7:00 - 10:00 pm central  time
             and on weekends.












        






































































                                  Chapter 1

                                Introduction



             The Minister Assign Program was designed to lighten the
        task of coordinating and assigning ministers for the various
        functions at Sunday or weekly liturgies.  The program allows
        a parish to assign liturgical ministers  (Servers,  Lectors,
        Eucharistic Ministers, Ushers, Head Ushers, Greeters and  an
        additional  ministry  of  your  choosing) in a chronological
        fashion  but  still  give  full  attention to an  individual
        minister's  time  schedule  and changing Mass  schedules  by
        incorporating the following features:

          1.  A minister can specify "Bad Days" of the week where he
              or she is unable  to  serve  because  of work or other
              commitments.  The minister will never be scheduled  on
              these days. 

          2.  If a minister is going to be on vacation for a  period
              of time, the "return to service" date can be specified
              before which no assignments will be given him or her. 

          3.  A similar scheme is adopted when the minister is to be
              away  for  just  one  weekend in a month.  The  "away"
              weekend is noted and  no assignments are made for this
              person at any time during that week. 

          4.    If  a  family  contains  more  than  one   minister,
              individual  family  members  are  never  scheduled  at
              different times on the same weekend. 

          5.   A minister can select a "preferred" mass at which  to
              serve.   This  selection can be "Adamant" or not.   If
              the  selection  is adamant  this  means  that  if  the
              minister's   requested  mass  is  not  available,   an
              alternate  assignment  will  not   be  made.   If  the
              minister is not adamant, the same attempt will be made
              to give  the minister the requested mass but, if it is
              not available, another mass will be assigned. 

          6.  A  minister can also specify up to three "Bad Masses",
              that is, a particular mass or group of masses that  he
              or she cannot serve.   This is to allow for people who
              might be staffing the nursery or performing some other
              ministry at a particular time each week. 









        Minister Assign Program V5.7                    Introduction
        



          7.  If  a  person  serves  in more than one ministry, say,
              Lector and Eucharistic Minister, assignments will  not
              be made any more frequently for this  person, but they
              will  be  rotated  among the ministries for which  the
              person is commissioned.  So, if on  one  week a person
              serves as a Lector, the next time this  person  is  to
              serve an assignment as  a Eucharistic Minister will be
              attempted.  The  person  may  get  a lector assignment
              again  if  a  Eucharistic  Minister Assignment is  not
              available, however. 

          8.  For each mass in your schedule you are able to specify
              the number of ministers of each type  that  should  be
              assigned.  This feature is  helpful at my church since
              an extra Eucharistic Minister is assigned to bring the
              Eucharist to the choir loft for the one mass the choir
              is present.  (Interesting  note:  The  choir  loft  is
              occupied only if the choir is singing and then only by
              the choir.  The fire marshall will not permit  general
              occupancy of the loft because  there is access by only
              one staircase.  I suppose it's OK for the choir to  be
              trapped by the fire...). 

          9.  The  program  is  able  to  handle  weekday as well as
              Sunday masses.  It  is  possible  to  assign different
              groups of people to each mass,  for example, the grade
              school  servers  can be assigned the daily masses  and
              the  high  school  boys  the weekend masses by  simply
              defining each server's "bad days" appropriately. 

          10. The program is able to accept "temporary" masses, that
              is, masses that  are  not  part  of  the normal weekly
              schedule  such  as  special Holy Days. The "temporary"
              mass  record  is stored  with  the  other  masses  and
              automatically  deleted  when  the  date  of  the  mass
              passes. 

          11. The assignments are  made  monthly but the assignments
              are actually computed on  a  weekly  basis within that
              month.   No  person  will   ever  get  more  than  one
              assignment in any week  even  if  an  assignment  goes
              unfilled.    For  the  purpose  of  accomodating   the
              Saturday  evening  Anticipatory  Liturgy,  a  week  is
              defined as running from Saturday to Friday. To  assure
              that  complete weekends are assigned, the program will
              include days from the  forthcoming month to maintain a
              complete Saturday to Friday assignment block. 

          12.  The  assignments  for   each  month  are  written  to
              individual weekly files (for  example,the  assignments
              for the second week in November, 1987 are written to a



                                    - 2 -
        





        Minister Assign Program V5.7                    Introduction
        



              file named "NOV87-2.SKD") so  that  they may be easily
              merged  with the file  containing  the  copy  for  the
              weekly bulletin to eliminate the necessity of retyping
              the assignments. 

          13.  Single  line  "telephone   number"  listings  of  the
              ministers can be displayed or written  to  a  file for
              later printing for distribution as minister substitute
              lists.  This listing can  include all the ministers or
              be sorted by ministry. 

          14. Likewise, complete information for each minister, such
              as name, address, mass  preference, ministry(ies), bad
              days, etc.  can be displayed or listed as above. 

          15. A new  feature  for  version  5 is the addition of the
              ministries  of  Head Usher and Greeter. Realizing that
              people  might  mature  slowly   into   a  position  of
              responsibility, the Head Usher  is  separately defined
              and a  separately scheduled ministry.  The ministry of
              Greeter is different from the other ministries in that
              you  have  the   option   of  assigning  the  greeters
              individually in exactly the  same fashion as the other
              ministers or  as complete family units.  Some churches
              like  the idea of using complete families as  greeters
              vs.  individuals and you  can  choose which scheme you
              wish to follow.

        

























                                    - 3 -
        





        Minister Assign Program V5.7                 Getting Started
        









                                  Chapter 2

                               Getting Started



             The diskette you have contains the following files:

          1.  Mp.exe - the minister assign program. 

          2.  MpConfig.exe - A  "start  up"  program  to set default
              drives and names. 

          3.  MpManual.txt - This user's manual. 

          4.  Mp.Hlp - The on-line help file. 

          5.   MpPrint  -  A  program  to  print the files the  "MP"
              program generates. 

          6.  MpCnv4-5.exe - A program to convert version 4 data  to
              version 5.

             The first  thing  you  should  do is make a copy of the
        diskette you  received and always work from the copy.  After
        all, you paid cash money  for  my  program (I hope!)  and it
        would be  a  shame to have your computer "eat" the only copy
        of the program  you  have.   There  are three sections below
        labelled "One diskette drive",  "Two  diskette  drives"  and
        "Hard  Disk".  Pick  the  section  that  corresponds to  the
        configuration of your computer  and  follow the instructions
        there. 

        One diskette Drive

          -  Insert your MS-DOS  diskette,  the  one you put in when
             you  first turn your  computer  on  and  type  "Format"
             followed by a carriage  return.   This  will  tell  the
             computer  that  you  want to prepare a new diskette  to
             receive information (files) that  you are about to copy
             to it. 

          -

             DOS will tell you



                                    - 4 -
        





        Minister Assign Program V5.7                 Getting Started
        



             "INSERT A NEW DISKETTE FOR DRIVE A
             AND PRESS ANY KEY WHEN READY"

          -  Take out the DOS  disk  and insert a new blank diskette
             in your disk drive and then press  a  carriage return. 
             <cr>

          -  After format is  done,  the  computer  will ask "Format
             another (y/n)?" Just type "n"  for  "no"  and  press  a
             <cr>.

          -  You  are  now ready to copy all the minister files from
             the  program  diskette  to  the new, blank one you just
             formatted. 

          -  Remove the new blank disk  from the drive and re-insert
             your MS-DOS diskette into the drive. 

          -  Type the command "DISKCOPY" and a <cr>.

          -  DOS will  prompt you with the following instructions on
             how to copy a diskette.  (For the narrative  to follow,
             the "source" diskette is  the  original  one  with  the
             minister program on it and the "target" diskette is the
             new, blank one you just formatted.) 

                "INSERT SOURCE DISKETTE IN DRIVE A"
                "PRESS ANY KEY WHEN READY"

             Press any key.  The computer will read as  much  of the
             diskette as it can and then ask you

                "INSERT TARGET DISKETTE IN DRIVE A"
                "PRESS ANY KEY WHEN READY"

             Swap the diskettes, putting  the target diskette in the
             drive and then press <cr>.

          -  This scenario will repeat several times as DOS asks you
             first to  put the source diskette in the drive where it
             will  read  a  portion  of it then ask you to  put  the
             target diskette  in  so it can write the information it
             just read back to the target diskette. 

          -  The amount of swapping back and forth you do depends on
             the number  of  files on the diskette and the amount of
             memory in your computer. 

          -   After copying, DOS will ask you if you  want  to  make
             another  copy.   Just  type "N" and press the  carriage
             return. 



                                    - 5 -
        





        Minister Assign Program V5.7                 Getting Started
        




          -  Jump down to the section after "Hard Disk"

        

        Two Diskette Drives

          -  Insert your MS-DOS diskette in drive "A", (the diskette
             and  the  drive  you use when you first  turn  on  your
             computer). 

          -  Type "FORMAT B:"

          -  DOS will tell you to "INSERT A  NEW DISKETTE IN DRIVE B
             AND  PRESS  ANY KEY  WHEN  READY".  Put  a  new,  blank
             diskette in  drive  b  and  press  any key.  (I usually
             press  the carriage return, <cr>.) The drive will  turn
             while the computer prepares  the new diskette to accept
             information (files).

          -  When done DOS will ask "FORMAT ANOTHER (Y/N?)" to which
             you should type "n" for "No" and press <cr>.

          -   Take  out your DOS disk from the "A" drive and replace
             it with the original diskette with my minister  program
             on  it.   You should  now  have  the  minister  program
             diskette in drive "A"  and  the  new,  blank, formatted
             diskette in drive "B".

          -  Type  "COPY  A:*.*  b:" (Don't type the quotes.)  Also,
             make  sure  you did type the colon after the "B".  This
             tells DOS to copy  all of the files on the "A" drive to
             the "B" drive with the same  file  names.   If you omit
             the colon, DOS assumes that you want to copy all of the
             files  on  the "A" drive to one big  file  called  "B",
             located on the "A" drive.  (Not quite the same thing!) 

          -  After the copying is completed you can  put your MS-DOS
             diskette and the original program diskette away and put
             the copy you just made in the "A" drive.

        

        Hard Disk

          -  You probably should create a new directory on your hard
             disk to store all your minister data.  To  create a new
             directory  type  "MKDIR  \MP".  This will create a  new
             directory on  your  hard  disk  with  the  name MP (For
             Minister Program).




                                    - 6 -
        





        Minister Assign Program V5.7                 Getting Started
        



          -  Then type "CD  \MP" to change your working directory to
             the new minister directory  you  just created.  This is
             probably  a  good  time  to  mention  the DOS  command,
             "PROMPT". If you are not familiar with it take the time
             to read about it in your  DOS  book.   The command lets
             you change the DOS prompt "C>" to something else if you
             want.  If you  type  "PROMPT  $P$G" the DOS prompt will
             show you the name of your current  directory.  So after
             changing to  the  newly  created  "MP"  directory,  the
             prompt  should read "C\MP>".  This  just  gives  you  a
             better idea of where you are on your disk. 

          -  Put the minister program diskette in drive "A" and type
             "COPY A:*.* c:".  This will copy all the files from the
             diskette  in  the  "A"  drive  to  the  newly   created
             directory on your hard disk. 

          -  Put the original minister diskette in a safe place. 

          -   If  you  do  not know  what  I'm  talking  about  with
             "directories  on  your hard disk" ask the people  where
             you bought your computer or read the DOS Manual.

          -   Remember  the command "CD" is to change directories on
             your hard  disk.  A directory name always begins with a
             backslash "\", so in  the  future  any time you want to
             run  the  Minister  Program  you have to change to  the
             minister  directory,  MP,  first with the command,  "CD
             \MP". To get back to the original directory, called the
             "root" directory, type "CD \". The "root" directory has
             no name so you use the backslash by itself.

        

        Everybody

        To be a competent PC operator  you  should  be familiar with
             the following DOS commands  since  you will need to use
             them in running this  and  other  programs  on your PC.
             COPY, DATE, DEL, DIR,  DISKCOPY, FORMAT, PRINT (more on
             this  one later), PROMPT, TIME, TYPE. Take the time  to
             read about them.

             At this time you should be ready to  run the programs. 
        For you  floppy users, (I mean floppy disk users) you should
        have the  copy  of  the  diskette  you  just made in the "A"
        drive.   The  hard  disk  people  should  be  in  the   "MP"
        directory.   The first thing you have to do is run a program
        called "MpConfig" which is going to ask  you  some questions
        about your computer, your name and the name of your church. 
        You  only have to  run  this  program  once,  or  when  some



                                    - 7 -
        





        Minister Assign Program V5.7                 Getting Started
        



        information that you entered changes.  So type the command:

                                  MpConfig

        After typing "MpConfig", the configuration program will load
        and ask you for the name of your church, your name, and  the
        letter  of  the  drive  you want the program to use to store
        your minister  and mass data, and store the reports that the
        program generates and a few other things.  This program will
        create  a  file  called  "MpConfig.dat" that will store  the
        information you are about to enter. 

             The  church name you enter (up  to  20  characters  are
        permitted) will be printed on  the  header  of  the minister
        reports generated by the "Mp" program.  Your name is used to
        address you,  the  prime  user  of  the  program.  It is not
        uncommon to use a cute name like "Your Highness". After all,
        no one will see it but you. 

             You will then be asked on what  drive you wish to store
        your  data.  The program checks the  computer  to  see  what
        drives exist and will only let you use legal drive letters. 
        A new option has been  added to this query, that of "Default
        Drive", selected with the option "0". The default  drive  is
        the one shown  as the DOS prompt.  "A>" or "C>" is typical. 
        Choosing this option will  have the Minister Program attempt
        to  read  and  write  to whatever drive happens  to  be  the
        default drive at the time  you  start  the  program.  Please
        note that the  file  "MpConfig.dat" that is generated by the
        "MpConfig" program must  be  on  your default drive when you
        run "MP".

             The program will query you for a default telephone area
        code that it will automatically add to the beginning of each
        minister's telephone number.  Next, you will be asked for  a
        default  number of servers, Eucharistic Ministers,  Lectors,
        Ushers, Head Ushers and Greeters  that should be assigned to
        each  mass.  The numbers you type are simply initial  values
        assigned to each mass as  the  mass information is entered. 
        It is a simple  matter  to  change  the  number of ministers
        assigned to a mass  on  a  mass  by mass basis from the main
        program  if  different  masses   have   different   staffing
        requirements. 

             You  will then be asked if greeters should be  assigned
        by  family  or  individually.   If greeters are assigned  by
        family, on weekends where a family  is  chosen as a greeting
        family,  no  one  in  that  family  will  receive any  other
        assignment.  A  yes  or  no will set this parameter.  Please
        note that if you choose the "family" option,  the  number of
        greeters that you enter as the number to be assigned at each



                                    - 8 -
        





        Minister Assign Program V5.7                 Getting Started
        



        mass will refer to the number of  families NOT the number of
        individuals.  You may have  to  alter your "Greeter" numbers
        somewhat as a result. 

             My program also permits you to define your own ministry
        that  you would  want  to  be  included  in  the  assignment
        scheduling process.  The name of this ministry can be up  to
        nine  letters  long  but  it  cannot  start with one of  the
        letters used as names for the other ministries,  that is, S,
        E, G, H, L, or U (for Server, Eucharistic minister, Greeter,
        Head-usher,  Lector,  or  Usher).   Some   suggestions   for
        additional    ministries   might   be    Traffic,    Cantor,
        Refresh(ment),  or A/V (Sound  cannot  be  used  because  it
        begins with "S"). If you do not want to define an additional
        ministry just press the  carriage  return,  <cr>,  to bypass
        this option. 

             There is another question  that has to do with the type
        of monitor, b/w or color, that you  will  be  using with the
        program.  Although the program  can sense if you are using a
        color card or a monochrome card, it has no way of knowing if
        you  are  using a b/w monitor with a color card.  What would
        happen is that the program would  "think"  you  were using a
        color monitor and adjust  the  display accordingly.  Using a
        b/w monitor with a color card would make text hard to read. 
        With this new option you can explicitly state  what  kind of
        display you would prefer. 

             The  "MpConfig"  program  will   then   ask   for  city
        abbreviations.  There is  a feature in the "Mp" program used
        when entering your minister's  names and addresses that will
        allow you to use an abbreviation for the city.  Usually, the
        ministers all live in a few  surrounding  towns,  so a small
        list of city abbreviations cuts down  on the typing you have
        to  do  to enter your minister data into  the  program.   By
        entering  a  city abbreviation  defined  in  the  "MpConfig"
        program  the  "Mp" program will look up the city, state  and
        zip code  and  enter  them  in the appropriate spaces in the
        minister   record.    Up   to   10  one  or  two   character
        abbreviations  are permitted.  Please note that the case  of
        the   abbreviation  is  significant.   "P"  is  a  different
        abbreviation than "p". I originally wrote this program while
        living  in Champaign, IL, a town with 2 zip codes, 61821 and
        61820. So I  made  the  city  abbreviations  "c1"  and  "c0"
        respectively. 

             Once you are done answering the questions in "MpConfig"
        and optionally adding city abbreviations, exit "MpConfig" by
        typing  "E" which will create the "MpConfig.dat" file on the
        default  drive and return you to the MS-DOS "A>" prompt  (Or
        whatever your default drive letter is). 



                                    - 9 -
        





        Minister Assign Program V5.7                 Getting Started
        




             From  now on you do not have to  run  "MPConfig"  again
        unless  you  want  to  change some of  the  information  you
        entered,  like  your name or perhaps  to  add  another  city
        abbreviation.  You can simply  start  right  here by running
        the  minister  program,  MP.  To start the Minister  program
        type:

                                     Mp

        When the program loads for the first time you will be warned
        that  some files are missing.  This is normal.  The  program
        is   looking  for  the  files,  "MpMin.dat"  containing  the
        minister  data and "MpMass.dat" with the mass data for  your
        church and, of course, you have  not entered any minister or
        mass data yet.  Just say you want to continue by typing "y".

        

        Important note for version 4 users !

             If you are upgrading  from  version  4 to version 5 you
        need  to  run  the  upgrade  program  "Mpcnv4-5" before  you
        continue.  There is a  change  in  the file structure of the
        Mass data file, "MpMass.dat" to allow for the listing of the
        three additional ministries, Head-Usher,  Greeter,  and  the
        self-defined ministry.   Run  the  upgrade program by typing
        "MpCnv4-5". The conversion program  will  ask  you  for  the
        drive letter containing  the  data  file "MpMass.dat". After
        that it will rename the current  data  file to "OldMass.dat"
        and create the new version of "MpMass.dat" where the old one
        was.  If you do not do this before running "MP" the old mass
        data will be  unreadable  and  version  5.0  of  "MP"  might
        destroy the "Preferred Mass"  data  from  your minister data
        file.  If you have any questions write or call me first.  It
        is  always  a  good  idea  to  back up your data files  onto
        another  disk  so  if  something goes wrong during the  data
        conversion  process  you  can  always  re-create  your  data
        files.  If you are starting out directly  with  version  5.0
        and do not have any 4.0 data files around you can ignore the
        above  paragraph  and  any  references  to   the  "Mpcnv4-5"
        program. 

             If  you don't know how  to  back-up  your  files  (make
        safety  copies  of  them) it's back to the DOS book to study
        the COPY command. 

             After  the  opening block,  which  will  show  you  the
        current date, current time,  and  the version number of your
        program, (not to mention my name, address and  phone number)
        the program will display the main menu. 



                                   - 10 -
        





        Minister Assign Program V5.7                 Getting Started
        







        These are your Minister commands, Your Highness (or whatever...)
        
        Minister count = 0


                  A - Add new minister
                  B - Bad Days Checking (On/Off)
                  C - Change minister information
                  D - Delete a minister
                  E - Exit this program and update files
                  H - See this command Listing again
                  H<command> - Help with a specific command
                  L - Last Served Date Change Utility
                  M - Mass schedule changes
                  Q - Quit program...no updates
                  R - Reports and Lists
                  S - Scheduler
                  U - Update Minister & Mass Records - NO EXIT


        Enter Minister Command  ('H' for Help) -> _

             This entire program is  menu  driven and contains three
        menus.   This  one,  the  "Minister"  menu, offers the  most
        choices  of  actions.   The  other two menus, "Reports"  and
        "Mass", will not  be used as frequently.  The "Reports" menu
        enables you to generate listings of the ministers, sorted by
        ministry,  either  in  a  one  line  format  with  telephone
        numbers,  and  the  minister's  "preferred  mass",  if  any,
        suitable for duplication and sending to your ministers as up
        to  date  substitute  lists, or mailing labels, or  complete
        hard copy of all the information stored for each minister as
        the ultimate back up. 

             Another  report  is  a listing of the mass  preferences
        indicated  by  each  minister  and whether they are  adamant
        about  that  selection  or not.  (Don't panic, Adamant  mass
        selection  is  explained  later.)   To select  a  particular
        action type the letter of your choice and press the carriage
        return key (sometimes called the "Enter" key and abbreviated
        throughout this documentation by  <cr>.  Remember,  when you
        read to type "<cr>" it  means  a carriage return and not the
        characters "<cr>". {I thought this was obvious but you would
        be surprised at  how  many  people type everything, the left
        and right brackets, the c &  r  characters  and  the  double
        quotes!}   {Another question I receive from PC newcomers  is
        in  response  to  the "Press any key to  continue"  prompt. 



                                   - 11 -
        





        Minister Assign Program V5.7                 Getting Started
        



        There  is  no  key on the PC keyboard called the "Any" key. 
        Usually  the  space  bar or carriage return will  work  just
        fine.} 



















































                                   - 12 -
        





        Minister Assign Program V5.7       Entering Mass Information
        









                                  Chapter 3

                          Entering Mass Information



             The  first thing you should do is to  enter  your  mass
        schedule.  To do this select item "M", Mass Schedule Changes
        and press the <cr>. You will be greeted with a new menu like
        this:

        


        These are your Mass editing commands :

        A - Add a Temporary or Permanent Mass to schedule.

        C - Change # of Ministers to assign to a mass.

        D - Delete a mass.

        H - See this menu again.

        E - Exit this procedure.

        L - List All Masses.

        T - Change Time (and Date) for a Mass.


        Enter Mass command  ('H' for List) -> _

             There are two types  of masses you can enter, temporary
        or  permanent  masses.   A  permanent  mass  is  the  normal
        recurring type that is celebrated  at  the  same  time  each
        week.   For this mass you have to enter the day of the  week
        and the time of the mass.  The correct date will be computed
        on a week by week basis. 

             A temporary mass occurs only once,  say,  a Holy Day or
        special  celebration  such  as   Christmas   Midnight   mass
        (regardless of the time Midnight mass is celebrated).  These
        masses have specific dates  and  are  not  recurring.  These
        masses  can  have  ministers  assigned to them just like the



                                   - 13 -
        





        Minister Assign Program V5.7       Entering Mass Information
        



        permanent ones except that these masses are only included in
        the  "masses  to  be assigned this week list"  once  at  the
        appropriate  time  and  then  deleted  from  the  mass  list
        automatically  after  the  date  of  their  celebration  has
        passed.  There is no  time  restriction  as  to when you may
        enter a  "Temporary Mass". You can do it years in advance if
        you want but ministers will be  assigned  to it only once on
        the week in which the mass occurs. 

             From the  Mass  menu  type "A" for "Add" and a carriage
        return <cr> and you  will  be  asked  if  you  want to add a
        Temporary or Permanent mass.  Indicate your choice by typing
        "T" or "P". What you are about to do is to enter your normal
        weekly mass schedule  so  all your entries will be Permanent
        masses.  The Mass "Template" presented is slightly different
        for a temporary or permanent mass.  For a temporary mass you
        enter  the  date,  month  and year that the Mass  is  to  be
        celebrated as  well  as the time.  For a permanent mass just
        the day of the  week and time are entered.  The program will
        prompt you for the correct format. 

        

             *** Anytime you enter a date  in  the  program, use the
             format MM-DD-YY  or  MM-DD-YYYY.  So Nov 3, 1988 can be
             entered as either "11-3-88" or "11-3-1988".  When asked
             for  a day of the week use the first three letters.  So
             Sunday  is "sun", etc.  When entering the day and  time
             for a mass the prompt shown is "DDD HH:MM ->". Here you
             are being asked for  the  day,  hour  and minute of the
             mass, respectively.  For example, to  enter  a Saturday
             evening  mass to be celebrated at 5:30  pm  enter  "sat
             5:30p". Don't forget the "p", otherwise, the mass  will
             be listed at 5:30 in the morning!  Since  most  of your
             masses are on Sunday mornings a time without  a  suffix
             ("a" or "p") will  default  to AM. Also, note the space
             between the day and the time.  The colon, ":",  between
             the hour and minutes is also necessary as shown.

             You will then be  asked  how  many  ministers should be
        assigned for that mass.   Simply enter any reasonable number
        (fewer than 100) and press the <cr> after each  one.  If you
        are initially entering this  mass  into your list of masses,
        the default  number  of  ministers  of  each  type  that you
        entered while running "MpConfig" will be displayed in  angle
        brackets '<>' next to the prompt for you to enter a  value. 
        If  you are changing the number of ministers to be  assigned
        to  a  mass,  the value in the brackets will be the  current
        value for that ministry at that  mass.   If  you accept this
        value  simply  press  the  carriage  return <cr> to use this
        number  or  enter  a   different  number  if  your  ministry



                                   - 14 -
        





        Minister Assign Program V5.7       Entering Mass Information
        



        requirements  change.   If you  do  not  want  a  particular
        ministry  to  serve  at that mass,  set  the  number  to  be
        assigned to  zero.   Presently,  at  my  church  we  are not
        assigning  ushers  with  this  program so the default  usher
        value is zero.  Entering different numbers of ministers  for
        each mass is necessary since some churches might  distribute
        Communion  under  both  species  at  only a few masses which
        would require a different Eucharistic Minister staffing than
        when Communion is distributed just as bread.   Any time your
        ministry  requirements  change  you  can  run the  '"C"hange
        number of ministers to be assigned to each mass' command  to
        update  your  mass  records.   In  fact you can  change  the
        ministry requirements between weeks of assigning ministers. 
        I know of a church that  distributes  Eucharist  under  both
        species only on the first and third weekends  of the month. 
        So they increase the number of Eucharistic ministers  before
        they run the first weekend in the month.   After  the  first
        week's  ministers   are  assigned  they  "Suspend"  minister
        scheduling  and  go  to  the  Mass Schedule and decrease the
        Eucharistic minister count  again.   They  then  re-run  the
        scheduler starting on the  second  week  of the month and so
        on.   Don't  worry  about  the  "Suspend"  command.   It  is
        explained below in the section on how the scheduler works. 

        

             **** It is important that you  add  your permanent mass
             schedule to the program before you add the ministers if
             you are going to utilize  the  "Preferred Mass" part of
             the   scheduling   program.   Internally,  the  program
             assigns a code number to each mass you  enter  and when
             you indicate that a  minister  has  a  preference for a
             mass,  this  number  is  stored   with  the  minister's
             records.  If you delete this mass from  the  list,  the
             code  number  assigned  to that mass also is  deleted. 
             Since this code  number  is not now associated with any
             mass,   keeping   it  in  the  Minister's  records   is
             meaningless, thus, the  program  removes  it  from  any
             minister  records  that might  have  it  and  sets  the
             minister's "Preferred Mass" field  to  "no  preference"
             and  "not  Adamant".  If  you  re-enter the mass,  even
             though  it  may be at the same date  and  time,  it  is
             considered  a  new  mass  and the internal code  number
             assigned to it may  or  may not be the same as the mass
             you just deleted.  So if you adjust your mass  schedule
             it  might  be  wise   to   check  that  the  Ministers'
             "preferred Mass" records have not been altered.

             Another feature  is the ability to change the time of a
        mass  without  causing  the  "Bad Mass" or "Preferred  Mass"
        associations with the ministers  to  change.   This would be



                                   - 15 -
        





        Minister Assign Program V5.7       Entering Mass Information
        



        used  if  the 7:00 a.m.  mass  got  changed  to  7:30.  Most
        likely, those people who had preferences  for the first mass
        would feel the same  about the 7:30 time slot.  By using the
        "T" (for time) command you are allowed to change the time of
        the  mass  yet  all the "preferred mass" associations  would
        remain.  This is true even if  you  changed  the  7:00 a.m. 
        mass  on  Sunday to an 11:00 p.m.  mass Saturday night.   If
        you are  changing  the time of a Temporary mass with the "T"
        command,  the  program  will  also ask you for a new date as
        well as a new time. 

        










































                                   - 16 -
        





        Minister Assign Program V5.7       Entering Mass Information
        




                          Changing Mass Information

             The only information you can change about a mass is the
        number of each type of minister you  can  assign to the mass
        and the time of each mass as explained above.  To change the
        number of ministers of  each  type  to  be  assigned to each
        mass, from the "Mass" menu select the "C"hange option, press
        <cr>  and  enter  the date and time of the mass you want  to
        change.  Remember  that the mass is specified by the day and
        the  time  so  the  Sunday 9:30 AM mass is entered  as  "sun
        9:30". You will then be prompted for  new values for each of
        the 6 or 7  ministries.   They are entered exactly as though
        you were  originally  entering  the information with current
        values being displayed and prompted in angle brackets unless
        you elect to change them. 

             To  delete a mass type the "D" in the "Mass"  menu  and
        press <cr>. You will be asked which mass you  want to delete
        and after typing the  day and time in the same manner as for
        "C"hange above, the stats for the mass to be deleted will be
        displayed and you will be asked if you really want this mass
        deleted.  If  you  say "No", or anything else beginning with
        "N", the  delete procedure is bypassed.  If you say "Y", the
        mass  is  deleted.   I  suppose  I should tell you that  the
        permanent  files  for this program are not updated until you
        actually "E"xit the program  from the main, "Minister", menu
        or  use the "U"pdate command described later.  If you "Q"uit
        the  program instead, the minister  ("MpMin.dat")  and  Mass
        ("MpMass.dat") files are not  updated  and remain exactly as
        they were before you  started  the current program session. 
        (Unless you have used the new UPDATE command  from  the main
        menu.  But more about that later.)  This means that any work
        you might have done, adding, changing, or deleting Masses or
        ministers, will be lost.   However, "Q"uiting the program is
        a reasonable way of "practicing" without altering the parish
        records. 

             The "L"ist the  Masses option in the "Mass" menu simply
        lists all  the masses in your data file for perusal.  If you
        have more than 10  masses, either permanent or temporary, in
        your inventory,  the  "L"ist  routine will list the first 10
        then indicate that there are more masses and that you should
        press any key {there's that "any" key, again!}   to list the
        next 10 masses and so on. 

             When you are done  entering  all your mass information,
        exit the Mass menu and return to the Minister menu by typing
        "E" for Exit.

        



                                   - 17 -
        





        Minister Assign Program V5.7                Adding Ministers
        









                                  Chapter 4

                              Adding Ministers



             The  second part of operating the program is  the  most
        tedious, that of adding  all  of  your ministers to the data
        base.   Press the "A" (for Add) key and  the  <cr>  and  the
        screen will display a "template" for  you  to  fill  in with
        information about each minister.   The program will take you
        through each field of the template in order and for the most
        part is self explanatory. 

             Incidently, if you accidently pressed the "A"dd key and
             did not want to add a minister, just press the carriage
             return,  <cr>,  before entering  information  into  the
             first field, "First Name", and the "Add" procedure will
             cancel.

        When entering alphabetical information, such as  names, just
        type along.  The backspace key enables you to  distructively
        move backwards in  a  word in case of typing errors, and the
        left and  right,  "<-"  and  "->", cursor keys enable you to
        move within a word,  but  not  beyond  its bounds.  Once you
        finish entering a field, pressing the carriage return, <cr>,
        will move you to  the  next field.  The "Add" procedure will
        not permit you to  move  to  previous  fields  once you have
        moved on.  If you discover an  error  after  you advanced to
        the  next  field,  you  can  use  the  "Change" procedure to
        correct the error.  Getting to the "City" field is where the
        city  and  state  abbreviations  you  entered  way  back  in
        "MpConfig" pay off.  If you type an abbreviation that exists
        in "MpConfig" the program  will look up the full spelling of
        the city, as well  as  the state and zip code and fill those
        in for you and bypass the prompts for those fields. 

             The "Phone"  field  will hold twelve characters without
        any  concern  as to what these  characters  are.   When  you
        initially  enter  this  field,  the  default  area code  you
        entered  in  "MpConfig"  will  be  displayed and the  cursor
        positioned just after it.   If  you  want to change the area
        code simply backspace over it and type in the new one. 

             The "Family Code" field is used  to identify members of



                                   - 18 -
        





        Minister Assign Program V5.7                Adding Ministers
        



        the  same  family.   My  program,  in  an effort to minimize
        gasoline   consumption   in  families  with  more  than  one
        minister,  say  a Lector, Communion minister, and a  Server,
        will never assign  members  of  the same family to different
        masses in the same week.  This is not to say that they  will
        always  serve  together, but,  rather  that  they  won't  be
        scattered among different masses.  The family code number is
        the method I use to determine  if  people are members of the
        same family.  Family members  don't really have to be in the
        same family, or even have the  same  address  or last name. 
        The computer will treat everyone  with  the same family code
        as being in the same family.  By  the  way,  if  some family
        members don't care if  they  are  at  the same mass with the
        other  ministers in the  same  family,  simply  assign  this
        person a different  family  code  and  he or she will not be
        considered part of the same family for scheduling purposes. 
        When  entering  a family code the program will  give  you  a
        gentle reminder if that code number is being used by another
        minister.  (After all, is this  not  what "User Friendly" is
        all about?)  Answering "Y" or  "N"  to  the duplicate person
        code warning will either allow the duplicate entry to remain
        indicating that the person you are  entering  is a member of
        the same family as the person  with  the duplicate number or
        permit you to make another choice for family code.  Remember
        that  people  with  the  same  family  codes  will  never be
        assigned different masses during  the same week.  Any number
        between  1 and 9999 is permissible.  If  you  are  assigning
        Greeters by  "Family"  all  of  those  people  with the same
        family code are considered part of  the  same  family,  same
        last name or not. 

             When  trying to enter  family  codes  it  might  become
        necessary  to  look  up  the  family  codes  of  some  other
        ministers to set a new minister's  code  to the same value. 
        If you  type a question mark, "?", as the first character in
        the "Family Code" field, a  window  will pop up in the lower
        right corner of the screen and you  will be prompted for the
        last name of the minister whose code you want  to  see.  The
        name you  type  does not have to be unique.  For example, if
        you type "H", all the ministers  whose last name begins with
        "H"  will  be displayed  with  their  family  codes.   After
        scrolling through this list, a window's worth at a time, the
        program  will  return  you to the "Family  Code"  field  and
        continue  to  re-prompt you for values until an  appropriate
        response is entered.  At any time by typing  a question mark
        as the first character in the  field  you  can return to the
        window to check other codes. 

             "Bad Mass" is the date and  time  of up to three weekly
        masses  that a minister can not or will not serve.  Use  the
        up  and  down  cursor  keys  to move among  the  three  mass



                                   - 19 -
        





        Minister Assign Program V5.7                Adding Ministers
        



        selections.  When the number of the  "Bad  Mass"  field  you
        want to change is highlighted, press  the  <CR> and you will
        be prompted for a mass  time  that will be considered a "Bad
        Mass". Entering a mass day and time that does not exist or a
        <CR> will set the associated "Bad  Mass"  field to "None". A
        minister will never, repeat, never receive an assignment for
        any of his "Bad Mass" times.   After you use the cursor keys
        to  scroll through all three fields, using the  down  cursor
        key one more time will exit you from this group.  It is also
        possible to cursor up above the top (Bad Mass # 1) field  to
        exit this group. 

             "Last Served" is the date that the minister last had an
        assignment.  This date is used in the scheduling  routine to
        decide on minister eligibility for service and is maintained
        by  the  program.  You do not have to enter any  information
        here.  When entering a new minister, "Last Served" is set to
        yesterday.  By "yesterday" I mean the day before you entered
        this  person into the ministry data base.  I had to put some
        date here as initial  data so yesterday seemed appropriate. 
        By  changing  the  date  in  this  field you can affect  the
        eligibility of the minister  in the scheduling routine.  See
        the  section  describing  how  the  program  determines  the
        minister schedule for more  information on the "Last Served"
        date. 

        

             ***  This  program  makes  extensive  requests  to your
             computer for the current date  and  time so the program
             can compute the weeks in the month, leap years and what
             yesterday  was.   DO  NOT   run  this  program  without
             ascertaining that your  computer is storing the correct
             date and time.  If your machine does not have a battery
             backed up internal clock, you have to set  the date and
             time every  time  you  turn  the  machine  on.   In the
             opening block of the program the date and  time as read
             from the computer's clock  is  displayed.   If they are
             incorrect,  exit  the program with the "Q" command  and
             set the computer's clock.  If the date and time  stored
             in the computer are incorrect the dates printed on your
             schedules will be wrong.   Consult  your  DOS operating
             system manual for instructions on  how  to set the date
             and time  if you have been remiss in doing so.  Look up
             the commands DATE and TIME.

             The  "Ministries"  field lets you  indicate  for  which
        ministries  the  person has been commissioned.  You will  be
        presented with  a  prompt at the bottom of the screen giving
        you a choice  of  any  of  6 ministries, Server, Eucharistic
        Minister, Lector, Usher, Head  Usher and/or Greeter plus the



                                   - 20 -
        





        Minister Assign Program V5.7                Adding Ministers
        



        extra ministry you might  have  defined  back in "MpConfig".
        Simply type  any  combination  of "S", "E", "L", "U", "H" or
        "G"  (and/or  the  first  letter  of  your  extra  ministry)
        followed by a  <cr>  to indicate the person's ministries and
        the   program   will   insert  the  full  spelling  in   the
        "Ministries" field. 

             **  There have been some questions as to the number  of
             ministries  you  may  enter  for  each  minister.   The
             program fully allows a minister to be commissioned  for
             more  than   one   ministry,   for   example,   Lector,
             Eucharistic Minister and Greeter. If the person you are
             entering is so  commissioned,  enter "LEG", without the
             quotes and any spaces between the letters when prompted
             for  the person's ministries.  DO NOT enter the  person
             three  times  and  indicate  a different ministry  each
             time.   The  program  will assume that these are  three
             different  people who coincidently have the  same  name
             and assign them as such.

             The  "Mass Preference" field  is  to  indicate  if  the
        minister has a preference  for which mass he or she receives
        an  assignment.   In  order  for the preferences to have any
        meaning,  there must be a mass scheduled at the day and time
        you are  entering.   This  is  why  you  must enter the mass
        schedule for your parish before entering any ministers.  All
        times entered  in  this  program  are in hour, colon, minute
        folllowed by an 'a' or 'p' format.  For example, 7:00 in the
        morning  is  entered  as "7:00" (no quotes) but 7:00 in  the
        evening is "7:00p". The colon is necessary where shown.   So
        if  a  minister has a preference for the Sunday 5:30 pm mass
        you would  enter  the date as "sun 5:30p". All the following
        are legal time entries (7:00, 7:00am, 7:00a,  7:00  am, 7:00
        a).  If the program cannnot find  a  mass  scheduled at that
        time it will enter  "None"  in the preference field.  You do
        not  have  an  opportunity  to  try  again  from  the  "A"dd
        procedure to enter  a  preferred  mass.   You  must  use the
        "C"hange  procedure for that.   (I  am  going  to  fix  that
        annoying trait in the next version of this program.) 

             The "Adamant" field is used to  indicate  how adamant a
        minister is about serving at a particular  mass.   When  the
        schedule is computed, the program makes an attempt to assign
        a minister  his  or  her "preferred" mass.  If the person is
        adamant (Yup)  about  a particular mass and that mass is not
        available an  alternate  assignment will not be made and the
        minister will not receive any assignments for that week.  If
        the  minister  is  not adamant (Nope) the  same  attempt  to
        assign the "preferred" mass will be made but if  the mass is
        not available,  an  alternate assignment will be attempted. 
        If a minister does not have a preferred mass, the search for



                                   - 21 -
        





        Minister Assign Program V5.7                Adding Ministers
        



        an assignment for that person will be made in the order that
        the masses are stored in the program. 

        

             *** An  interesting  situation  occurs  when two people
             with the same family code have different "Adamant" mass
             preferences.   The  person  who has  gone  the  longest
             without an assignment will get the "preferred" mass  if
             it  is available and no other because the preference is
             "Adamant". When it  is  time  to  give the other family
             member an assignment to his "Adamant" mass, the program
             finds  that  a person with  the  same  family  code  is
             serving  a  different  mass and thus will not grant the
             assignment  to the second person.  This results in  the
             two  people in the same family alternating between  the
             two  "preferred"  masses on successive weeks  and  they
             will never serve together.

             The "Vacation Until" and "Away Week" fields are used to
        indicate the availability of the minister.  By default, both
        these fields are set  to  'yesterday',  indicating  that the
        minister is available for assignment.   The "Vacation Until"
        field  indicates  the  first   date  that  the  minister  is
        available.   He or she  will  not  receive  any  assignments
        before this date.  The "Away Week" field is for indicating a
        specific weekend that a  minister  will  not  be available. 
        This is intended to be used  when  the  minister  tells you,
        "Don't schedule me the second weekend in December, I'm going
        to visit relatives".  Either date can be entered at any time
        before the scheduler routine is run for the particular month
        or week the dates occur.  Please  note that when you display
        the  information  for  any  of  the  ministers the "Away" or
        "Vacation" dates are visible only if the date  has  not  yet
        passed.  (Another reason to  get  your  computer's  date set
        correctly!) 

             The "Bad Day" field indicates the days of the week when
        a minister is not  able  to  serve  due  to  work  or  other
        commitments.  In our parish  there  are some people who have
        Saturday jobs so serving the Saturday evening mass would not
        be possible.  Since most of  your  people  follow  a  Monday
        through  Friday  work  schedule, the program initially  sets
        "mon" thru  "fri"  as  bad  days, keeping people free on the
        weekends.  To change the information indicate that you  want
        to change a "Bad Day" and if you  want  to "A"dd or "D"elete
        one.  Then type the 3 letter abbreviation for  the  day  you
        want to change.  The program will  continue  to  ask  if you
        want to change more bad days until you say "N"o.

        



                                   - 22 -
        





        Minister Assign Program V5.7                Adding Ministers
        




             *** Since the program never assigns a minister on a day
             indicated as "Bad", a problem surfaces when you want to
             schedule a "Temporary" Mass  sometime  in the middle of
             the week, say, Christmas  midnight mass on a Wednesday.
             Since most of your  ministers  will  have  Monday  thru
             Friday "bad Days" they  will  never  be  assigned  this
             mass.  The command "B"  in the main menu enables you to
             turn off  the  bad day of the week check as assignments
             are being made.  This  causes  the  scheduler to ignore
             any bad days that might be listed for  a  minister  and
             treat  a  special  midweek liturgy as not occurring  on
             anyone's "bad days".  Note that the bad  day  check  is
             always  "on" unless you explicitly turn it "off"  every
             time you run  the  program.   If  you have only entered
             weekend masses  with this program this is not much of a
             problem.  If you  are  also  scheduling weekday masses,
             turning off everyone's "bad  day"  flag might result in
             other people getting a normal mass on a weekday!

             After you finish entering information  for  a  minister
        you will be asked if you want to add another minister.  Type
        "y" to enter another minister record or "n" to return to the
        main ("Minister") menu.  Remember  that you can abort adding
        a new  minister  by  typing  a  <cr> immediately after being
        presented  with  the  blank "minister" template.   Once  you
        start adding a minister, you will have to add a whole record
        before you are allowed to exit. 

        
























                                   - 23 -
        





        Minister Assign Program V5.7   Changing & Deleting Ministers
        









                                  Chapter 5

                        Changing & Deleting Ministers



             To change information about a  minister  type  "C"hange
        and press  <cr>  from the "Minister" menu.  You will see the
        prompt :

                                    Who ?

        Enter  the last name of the person you want  to  change  and
        press <cr>. Upper and lower case letters are not significant
        here.   Either case is  fine.   The  information  about  the
        minister will be  displayed in the same "template" format as
        you saw when you  initially  entered the information for the
        minister.  If the name you typed cannot be found the program
        will tell you so and return  to  the Minister menu.  In case
        the name is not unique, a husband and  wife for example, the
        program will list all those people whose last  name  matches
        what  you typed and you will be asked to choose  numerically
        among them.  The program will wait until you type one of the
        numbers displayed.   Note  that  you DO NOT have to type the
        complete  last  name,  just enough to uniquely identify  the
        minister.  {Yes, I know "to uniquely  identify"  is  a split
        infinitive  but  it  sounds  better!   "...To  boldly  split
        infinitives no man  has  split before."}  If, in response to
        the "Who ?" prompt, you type just "H",  everyone  whose last
        name begins with "H" will be displayed. 

             The  program  remembers  the  name  of the last  person
        either Added or Changed so if you enter the Change procedure
        after already adding or changing information the prompt will
        look like this :

                              Who {Tom Hayes} ?

        {-The name of the last person you Added or Changed.} If this
        is  the  person you want to change just type a <cr> and  the
        record for this person  will  be  displayed.  If you want to
        change someone  else  type that name after the prompt as you
        had done before. 

             Once  the  information  template  for the  minister  is



                                   - 24 -
        





        Minister Assign Program V5.7   Changing & Deleting Ministers
        



        displayed, the  cursor will be located on the left hand side
        of the "first name" field label.   To  move  from  field  to
        field use the left  and right cursor keys, "<- & ->" (or the
        up an down keys).   Each  time you press one of these cursor
        keys the cursor will  move  forward or back one field of the
        minister's record (or up or down as necessary).  Please note
        that  the  "up" and "left"  cursor  keys  perform  the  same
        operation,  moving  the  cursor  one  field backwards.   The
        reverse is true of the  "right"  and  "down"  cursor  keys. 
        These move the cursor one field forward. 

             When you get to  the  field  you want to change, type a
        <cr>  and,  depending upon the field you are  changing,  you
        will  be  able to enter data exactly as  you  did  when  you
        originally  entered  the  information.   When  you  are done
        changing a  field, press the <cr> again to record the change
        and bring the cursor back to  the  field  title  area of the
        template.  From here you can again move forward or backwards
        among the data fields.   In  the case of date or time fields
        an incorrect or illegally formatted entry will cause the old
        value to remain.  Note that it  is  possible  to  change the
        "Last Served" field at this time.  This is  a convenient way
        of changing the priorities of the minister assignments.  See
        the chapter on the scheduling process. 

             To exit the  "C"hange routine press the "End" key found
        on the lower left of the cursor key area on the PC  keyboard
        and you will be returned to the main, "Minister", menu. 

             To delete a minister type the "D"elete command from the
        "Minister" Menu  and press <cr>. The program will prompt you
        for the minister's name  exactly  in  the same manner as for
        the "C"hange procedure.  After  providing  the  name (or the
        code number if there  is  more  than  one  occurrence of the
        name)  the  data for the minister will be displayed and  you
        will be asked if  you want to delete that person or not.  If
        you say yes  (or  anything  else  beginning  with  "y")  the
        minister's record is deleted.   Remember  that  file updates
        are  not  made  until you exit from the program  so  if  you
        decide that you really  did  not  want to delete that person
        you can "Q"uit the  program  instead of "E"xiting it and the
        minister  data  file  ,"MpMin.dat",  will  remain as it  was
        before the current program  session.   (unless you have used
        the "Update" command, described below.) 

        








                                   - 25 -
        





        Minister Assign Program V5.7               Reports and Lists
        









                                  Chapter 6

                              Reports and Lists



             The  "Reports and Lists" option in the "Minister"  menu
        moves you to the third menu in the program. 


        These are your Report Commands, your Highness

                E - Exit this procedure.

                L - Labels.

                P - Preference List of Masses.

                S - Single line listing of ministers.

                W - Whole List (All information for each minister).





        Enter Report Command  ('H' for List)  -> _

             The commands  in this section are straightforward.  All
        of them are  used  to  generate  some kind of listing of the
        ministers.  When selecting any  one of them you will will be
        given the option of including all  of  the  ministers or any
        sub-group  of  them,  such  as  the Lectors and  Eucharistic
        Ministers. The method for  selecting ministers to include is
        the same as that  used  to assign ministries using the "Add"
        command.   You  will  get  the  prompt on the bottom of  the
        screen  asking you to select any of "S", "E", "L", "U",  "H"
        or  "G" (or your special ministry) as the minister type  you
        want  to include.  The only difference is that if you type a
        <cr> the routine will include ALL of the ministers, not just
        the group you selected. 

        

             *** Typing a <cr> to select  all  the  ministers is not



                                   - 26 -
        





        Minister Assign Program V5.7               Reports and Lists
        



             quite  the  same  as  choosing  "SELUHG"  since  it  is
             possible to have someone  in your listing who currently
             is  not  assigned  to  any  ministry  and thus would be
             overlooked in the "SELUHG"  selection  but  not  in the
             bare  <cr>  which  includes  everyone,  assigned  to  a
             particular ministry or not.

             The "L"abels command generates  a  file  on the default
        drive  (indicated  way back in the "MpConfig" program)  that
        can  be  used  to  print  mailing  labels.  Understand  that
        selecting "L" does  not  actually  generate  mailing labels,
        just  a  file that is later used as input to the  "MpLabels"
        and  the  "MpPrint" programs also found on the  distribution
        diskette.   The file created by the "L"abels routine in this
        program  generates a file called "MpLabels.out". It is  this
        file  that  "MpLabels.exe" and "MpPrint.exe" will  look  for
        when attempting  to  generate  mailing  labels.  To generate
        this labels file select the "L" option and indicate from the
        "Which  ministers to include ?" query described above  which
        ministers   to   include   and   press   <cr>.   The   file,
        "MpLabels.out", will be  created  with  the  mailing  labels
        information in it.  After you are all done with this program
        and  have  exited back to the MS-DOS "A>" (or "C>")  prompt,
        you can call the printing program "MpPrint" or "MpLabels" to
        print  your  labels  for  you.   Refer  to  the  chapter  on
        "MpPrint"  below  for  specific instructions on dealing with
        labels. 

             The  "P"reference  command  generates a listing to  the
        screen  or  a  file  showing  those  ministers  that have  a
        preference  for  a particular mass.  The list is  sorted  by
        mass and after each person's name is the abbreviation of the
        ministries to which that  person  is commissioned and either
        "yup" or "nope" indicating  whether this minister is adamant
        about  serving  at  his  preferred  mass or not.  This is  a
        convenient way of checking exactly who desires what mass and
        if  your  data  base  is correct.  If you elect to have  the
        listing saved to a file, the file "MpPrefs.out" will be used
        and  it  will be  written  to  the  drive  you  selected  in
        "MpConfig". Simply enter the  command,  "P",  to  start  the
        listing  and  indicate  if you also want the  listing  to  a
        file. 

             The "S"ingle Line listing command is used to generate a
        listing of the ministers  names  and  phone numbers with one
        line  for  each  person.   After  selecting  which group  of
        ministers you want ("S, E, L, U, H  or  G") the program asks
        if  you  want  the listing to be displayed on the screen  or
        written  to  a file.  You are asked to choose "S" or "F"  in
        response  to the query.  If you choose "S" the listing  will
        scroll  by on your monitor.  To stop the list at anytime for



                                   - 27 -
        





        Minister Assign Program V5.7               Reports and Lists
        



        perusal type  any  key on the keyboard.  Press any other key
        to restart the listing.  If you  choose  the  "F"ile option,
        the listing will be written to the file "MpLists.out" on the
        drive selected by the  "MpConfig"  program.   After you exit
        the "Mp" program you can print  the file, "MpLists.out" with
        the MS-DOS "Print" command  or  the  "MpPrint" program.  See
        your DOS manual for information on the "Print" command. 

             The "W"hole list command  works  just like the "S"ingle
        line command above but instead of printing a single line per
        minister, it prints everything it knows about each  minister
        in the minister group you selected ("S, E,  L,  U,  H  or G"
        (your  special  one) or <cr>). The Whole List information is
        written to a file on the selected drive called "MpDump.out".
        This  is essentially the same information that is  displayed
        with the "C"hange command in the "Minister" menu.  This is a
        good way to get a hard  copy  listing of all your data as an
        extra back up.  However, there is no substitute for  regular
        disk-copy  back ups of  your  minister  data.   (unless  you
        really enjoy re-entering data after a disk crash.)  At least
        with the  hard  copy listing you will have something to read
        the  data  from as you re-enter it rather than the scraps of
        paper and index cards you  used  when  you initially entered
        the minister information. 

             The  "E"xit  command  takes you back to the  "Minister"
        menu. 



























                                   - 28 -
        





        Minister Assign Program V5.7                   The Scheduler
        









                                  Chapter 7

                                The Scheduler



             The Scheduler is the heart of  the program.  To finally
        get   to  do  minister  assignments  select  "S"  from   the
        "Minister" menu and press <cr>. You will be asked what month
        you  would like to schedule with a selection 0..12. The  "0"
        is  there   so  if  you  accidently  pressed  "S"  from  the
        "Minister" menu  you  can  get  back  out  without doing any
        scheduling.  Once you type a month number, 1..12, where 1  =
        January, 2 = February and so on, the  program  will then ask
        you what week in the month you wish to start.  Normally, you
        would  enter  "1" but occasionally, you would enter  another
        week in the month  if you "Aborted" the scheduler and wanted
        to  restart  at  something other than the first week in  the
        month.   Don't  worry,  "Abort"  is  explained  below.   The
        assignments are done in groups of a month  but  a  week at a
        time  within  that  month.   The  program  will  always   do
        assignments  for  the  next  occurrence  of  the  month  you
        select.  So if it is August, 1988 and  you type "10" for the
        month, the program will  do  assignments  for October, 1988.
        But if you type "7" the assignments will  be  made for July,
        1989.  It  obviously makes no sense to schedule  assignments
        for a month that has already passed or the current month for
        that matter. 

                                (** Hint **)

             If it is the very  beginning of the month, say March 1,
             1989, and you want to do assignments for March 1989 and
             not March 1990, exit the program and use the DOS "DATE"
             command to  tell the computer it is really February 28,
             1989. Since the program  always  schedules for the next
             occurence of the requested  month, the schedule will be
             done for March 1989 rather than March 1990.

             Assignments are  always  made with a week starting on a
        Saturday  and  ending on the following Friday. This  assures
        that a particular minister  gets  only  one  assignment on a
        weekend.  If the last  day  of  the month is a Saturday, the
        program will make assignments  for  the  Sunday  in the same
        weekend,  even  though it is the first of the next month, to



                                   - 29 -
        





        Minister Assign Program V5.7                   The Scheduler
        



        complete  a  week's  worth  of  assignments.   In fact,  the
        program will assign up to the first Friday of the next month
        if you are using this program for weekday mass assignments. 
        When it comes time to schedule the new  month,  the  program
        will start on the first  Saturday  of  that  month,  thereby
        avoiding any overlap with the previous month's assignments. 

             The program generates an  output  file for each weekend
        of the month it assigns.  The files are written to the drive
        specified in  "MpConfig" and are named after the month, year
        and week for which the assignments are made.  So assignments
        for the second week in November, 1987 will  be  in a file on
        the  default  drive  with the name "Nov87-2.Skd". The  "Skd"
        file extension indicates it is a "Schedule" file. 

             As the assignments are made  they are also displayed on
        the screen since I know you don't want to wait to print  the
        output files before you  know  who got what assignment.  The
        assignments are done a  week  at  a  time  and  written to a
        separate file for each week  to  expedite merging the weekly
        assignment listing with the rest of the copy of the bulletin
        that  you are obviously typing and formatting on your Parish
        computer. 

             After the assignments are  computed,  the  program will
        tell you that it was successful or not successful in filling
        the  week's  assignments.   If it was not successful it will
        display a listing of  those  masses  and  assignments within
        those masses that are  not  yet  filled.  How you fill these
        slots is up to you.  Get more ministers,  stop giving people
        days  off,  don't  be  so  free  with  the  "Bad  Mass"  and
        "Preferred Mass" fields and/or allow fewer "Bad Days".

             Both  the  weekly  minister  schedule  and the list  of
        assignments yet to be filled  are  displayed on your monitor
        one  screen's worth at a time.  This is to keep the  listing
        from scrolling off the top of the monitor if the  listing is
        longer  than one page.  To continue with the listing  simply
        press any key on the keyboard. 

             After each week's assignments are displayed and written
        to its weekly "Skd" file, the program  will  ask  you if you
        want to  "Abort",  "Continue",  "Reject",  or  "Suspend" the
        scheduling process.   You  then type either "A", "C", "R" or
        "S" as appropriate. 

        

        -Abort  cancels  further  scheduling and returns you to  the
             minister menu.  Although the file(s) created for weekly
             schedules  remain (the ".SKD"  files)  on  the  default



                                   - 30 -
        





        Minister Assign Program V5.7                   The Scheduler
        



             disk, the records for the ministers scheduled that week
             are  not updated and remain as  they  were  before  the
             processing began for the week you aborted.  Use "Abort"
             if   you  forgot  to  enter  information,  such  as   a
             "Temporary"  mass  for  a particular week or Minister's
             "Away" or "Vacation" dates.  Once you make the  changes
             you want you  can re-start the "Scheduler" for the same
             month and the same week.  You can also use this command
             if you want to start over in case you entered the wrong
             month in the beginning.

        

        -Continue simply restarts the scheduler for the next week in
             the selected month, saving  the  schedule for that week
             and updating the minister's records.  If the last  week
             in the month was  just assigned, "Continue" returns you
             to the "Minister" menu.




































                                   - 31 -
        





        Minister Assign Program V5.7                   The Scheduler
        




        -Reject  suspends the Schedule processor and returns you  to
             the "Minister" menu.  From  here you can enter "Change"
             and/or   "M"ass  schedule  changes   and   update   any
             information you  wish.  The difference between "Reject"
             and  "Abort" is that "Reject" will cause the  scheduler
             to continue the scheduling process at  the  week in the
             month  that  was  last scheduled, in effect picking  up
             with the  week  it just completed to try again with new
             information, whereas "Abort" simply returns you  to the
             main menu and not keeping track of where  the scheduler
             left  off.   If,  for  example,  the   scheduler   just
             completed the second week of the month and you selected
             "Reject", when you later  select  "S"  to  restart  the
             scheduler, it will start with the  second  week  of the
             month again, rewriting the appropriate "Skd" file.  You
             will be  asked  if  you want to continue where you left
             off.   If you answer "Y" the scheduler will  continue. 
             If you answer "N" you  will  be  asked  if  you want to
             re-exit to make some additional changes to the minister
             data base  or  do  the  whole month over again.  If you
             choose  to  "start  from  the top" the previous  ".SKD"
             files will be overwritten  with  new assignments as the
             scheduler is rerun.

        

        -Suspend operates just like "Reject" above except that  when
             the scheduler restarts it will start with the next week
             in  the  month, retaining the assignments it just  made
             for the current week.   This  is  a  good way to change
             someone's "Bad Days" or  "Vacation  Until" data for the
             last  half  of  a   month  yet  still  permitting  them
             assignments for the first half. 

             The  minister's records in memory are updated with  the
        assignments made by the scheduler for a particular week only
        after you elect the "Suspend"  or "Continue" choices after a
        week's  assignments are made.   If  You  select  "Abort"  or
        "Reject" the minister's records  are  not updated to reflect
        the assignments from the week just scheduled. 

        

                           How the Scheduler Works

             To  paraphrase  a  popular TV outer space program,  the
        "Prime  Directive"  of  the  scheduling  process is to  give
        everyone  an even chance  at  serving  in  their  particular
        ministry.   To  this  end   the   scheduling  process  is  a
        chronological one with the people  who have gone the longest



                                   - 32 -
        





        Minister Assign Program V5.7                   The Scheduler
        



        without   receiving  any  assignments  becoming  the   prime
        candidates  for  assignments  in   the   current   week   of
        scheduling.  Hence, the  first  thing  the scheduler routine
        does is sort all the ministers by how long it has been since
        they last served (the  "Last  Served"  Field).  This way the
        people  who  have  gone  the  longest  without receiving  an
        assignment get first shot at an  assignment  for the current
        week in the selected  month.  In addition the list is sorted
        by family code so people in the same family will always wind
        up next to each  other  on  the sorted list.  This increases
        the  probability  that  family members will serve together. 
        There is no guarantee that family members  will always serve
        together  or  even  more  or  less  frequently  than  single
        ministers  but they will never be assigned different  masses
        the same week.  If  the first minister on the list after the
        chronological sort has a "preferred" mass, the mass list  is
        resorted with the preferred mass as the first on the list of
        possible  masses  to  be  assigned  this  minister.  As  the
        assignment process begins the minister's records are checked
        to see if

          1.  He or she is not on vacation. 

          2.  The mass is  not  on a "Bad Day". (If Bad Day checking
              is enabled)

          3.  This is not one of three "Bad Mass"es.

          4.  This is not an "Away Week" for the minister. 

          5.  Another person with  the same family code doesn't have
              a different mass the same week. 

          6.  The minister is commissioned for an available ministry
              at that mass. 

          7.  If you are assigning Greeters  by  family,  a check is
              made to make sure no same family members are serving a
              different ministry the same week.

             If all these criteria are met the  minister is assigned
        the mass.  If any one of the tests fails and the minister is
        "Adamant"   about   this  mass,  no  other  assignments  are
        attempted for  the  minister  and  he  is  removed  from the
        available pool of ministers  for  the  week.   If  he is not
        "Adamant" about serving at his or her "preferred  mass", the
        next mass  on  the  list  is  tested  as above.  The process
        continues  until  the minister either gets an assignment  or
        until all the available masses have been checked.   The only
        difference in the process with and without a "preference" is
        that  if the minister does not indicate a  mass  preference,



                                   - 33 -
        





        Minister Assign Program V5.7                   The Scheduler
        



        the mass list resort in preference order does  not occur and
        the  masses are checked in whatever order they happen to  be
        at the time.  If the program  happens to have just processed
        a mass by someone with a preference, the  preferred  mass is
        now  first  on the list of masses, not the one that displays
        first  when  you run the "L"ist all the masses routine  from
        the "Mass" menu.  This assures some degree of randomness and
        keeps  the  same  people  from  getting  the  same  mass  by
        accident.  This  is  also a part of the "Prime Directive" in
        that  assignments are spread around among all the  ministers
        without any one minister "owning" a particular time slot. 

             Since the date in the minister's "Last Served" field is
        the  method  used  to  determine  the  "pecking  order"  for
        granting  assignments, changing the  information  there  can
        affect the outcome of the scheduler.  In case  you  want  to
        change a large group  of  "last  served"  dates, use the "L"
        command in the main  menu.   You will be prompted for a date
        to be the new "last served" date and then one by one stepped
        through your minister list  and  given  the  opportunity  to
        change everyone to the new date, or change  selected  people
        to  the  new date.  This command is also useful if you  have
        been practicing with  the program and have thus changed some
        of the  minister's last served dates.  Using the "L" command
        to  change  that  field  is  much  faster than the  "change"
        command. 

        

             Commentary  :  I  have  tried  to  keep the  assignment
             process  as  fair  as  possible  without family  groups
             getting a larger share  of  assignments than the single
             people, or vice-versa.  (I was single when I originally
             wrote version 1 back in 1985 but now, with version 5, I
             am  married  and ministering with my wife and I do  not
             feel that the scheduling process favors one group  over
             the  other.)   There  is  one  area  that  might  cause
             friction among your ministers.   This  is when a person
             requests  the "Main" mass on Sunday, you know, the  one
             where  the  full  choir  sings,  and   this  minister's
             preference is "Adamant" for  this  mass meaning "I will
             serve at this mass and no other".  This  minister  will
             always get this mass when it  is  his turn to serve and
             no  other.  Some of the  less  self-centered  ministers
             might not be "Adamant" about their preference or indeed
             have no preference for a mass, feeling that it is their
             duty  to serve where needed.  The result is that  these
             people wind up getting the less popular masses, such as
             the 6 pm Sunday evening  mass.  Whether you permit this
             or not is up to you in how you enter the  data for your
             people and even if you permit the "Adamant"  choice  to



                                   - 34 -
        





        Minister Assign Program V5.7                   The Scheduler
        



             be made or not.   People  do  not mind getting the less
             popular  masses if they know everyone is being  rotated
             through  this honor.  It should be pointed out  that  a
             person  who  has  made   an   "Adamant"  choice  for  a
             particular mass will probably  wind up serving a little
             less  often  than  the  other ministers, especially  if
             there is more than one person adamant  about  the  same
             position  at the same mass.  Unless they are  "adamant"
             about a less popular mass.

             Since the assignments  are always done in chronological
        order  with  the  person  who has gone the  longest  without
        serving  getting  first  "dibs"  on assignments,  using  the
        "C"hange  procedure  to  alter  the  date "Last Served"  can
        affect  the  sorting  order and consequently the  assignment
        process for better or worse. 

        

             *** Well, stating that  the  assignments  are  made  in
             strict chronological order  is not exactly true.  Since
             an  attempt  is  being  made  to  keep  family  members
             together, the  chronological  order is really only done
             by groups of families, that is, all the  ministers  are
             clumped together by family then these family groups are
             sorted  chronologically  by checking the "Last  Served"
             field.  For version 5.5 and later a new family grouping
             algorithm  has been incorporated that is  statistically
             more  accurate  in  keeping  families together and also
             assuring that everyone gets  about  the  same number of
             assignments.  For this version 5.7 there is yet another
             change to the scheduling  algorithm that is less likely
             to favor familys over individuals yet still attempt  to
             group family  members  together.   I have to reiterate,
             this  program  does  not guarantee that family  members
             will serve together but  it  does  guarantee  that they
             will not ever wind  up  at different masses on the same
             weekend.  This might be  a good place to once again ask
             for  suggestions from you, the users of my program,  to
             let  me know what features you want or  what  "If  only
             this program did..."  type  things  you  would  like to
             see. 

        










                                   - 35 -
        





        Minister Assign Program V5.7        Printing your data files
        









                                  Chapter 8

                          Printing your data files



             The  accompanying program "MpPrint.exe" is supplied  to
        help  you  print the  files  the  "Mp"  program  generates. 
        Besides the schedule files, "Nov89-3.skd", for example,  the
        MpPrint  program  will   also   print   the   other   files,
        "MpLists.out", "MpDump.out", "MpPrefs.out", and, of  course,
        "MpLabels.out". you start this program by typing

                                   MpPrint

        at the DOS '>'  prompt,  NOT  from  within  the Mp program. 
        After the program loads you will see the menu

        



        ----------------- Minister Program Printer Utility --------------

                          File           Date/Time last Generated
                          ----           ------------------------
                       1  MPDUMP.OUT     8-27-89  10:59

                       2  MPLABELS.OUT   8-27-89  11:16

                       3  MPLISTS.OUT    8-27-89  11:17

                       4  MPPREFS.OUT    File not found

                       5  Minister Schedule Printer

                       6  Printer Setup
        
                     File to print (1 - 6) or '0' to Exit -> _

             The column  "Date/Time  last  Generated"  tells you the
        date  and  time your most recent copy of the data  file  was
        generated.  These dates and times will  be  correct  only if
        your computer knows the correct date and time.  Printing the
        "Dump", "Lists" or "Prefs" file  is  straightforward.   Just



                                   - 36 -
        





        Minister Assign Program V5.7        Printing your data files
        



        select  menu  items  1,  3, or 4 and the selected file  will
        print  out.  If the file is  not  available,  that  is,  the
        program can't find it, perhaps because it is  in a different
        directory than the one you are in now, or because you  never
        created it  in  the  "Reports  and "Lists" section of the Mp
        program, "file not found" will be  displayed rather than the
        generation date and time. 

             Printing labels requires  a  bit more work on your part
        since you have  to  take  the  paper out of your printer and
        insert  mailing  label stock.  The labels are printed  in  a
        field  15/16"  high  by  3-1/2" wide.  So appropriate  label
        stock should be used.  Depending upon the  printer you have,
        with a 9 inch or 14" carriage, and the label stock you  own,
        the labels can be printed  either  1, 2, or 3 across.  After
        you select menu item "2", the  program  will  ask  you which
        style label you want to use. 

             The  program will then print a label header, giving the
        date the  labels  list  was created and which ministries are
        included.  The real reason for the header is to help  you to
        get the label stock centered in the printer.  One full label
        row will be printed  as a registration guide and wait as you
        adjust the  labels.   Press  any key on the computer to have
        the printer repeat the  registration  guide.   Once  you are
        satisfied that the registration  is  alright, press <cr> and
        label printing will start.   If  for some reason you want to
        stop the  label  printing,  press  the  ESCAPE  key  on  the
        keyboard or you can always turn off your printer.  It should
        be  noted  that  if  you are using a print spooler  or  your
        printer has a large buffer, printing will not cease with the
        ESCAPE command until the buffer is empty. 

             Menu option "5" is used to print your minister schedule
        for publication.  Once you  select  "5" the program will ask
        you for a range  of  months  to  print.  Some churches print
        schedules a month at a time while  others do three months at
        a time.  Recall that the schedules are in weekly files  with
        names showing month, year  and  week  that  the schedule was
        made.  The schedule for  the  third  week  in  November 1989
        would be in a file called  "Nov89-3.skd".  You will be asked
        for a Starting Month to print.   Reply  by  typing the month
        and year to start.  MMM YY is the reply format.  So to start
        with the November 1989  schedule  you would type "nov 89" as
        your starting month.  You are then asked to enter the ending
        month.  If you just want to do November 1989 you would reply
        with  "nov 89". If you want to print the schedule for  three
        months starting in  November 1989 and going to January 1990,
        you would enter "nov 89" as your starting month and "jan 90"
        as  your  ending  month.   If  either  the starting month or
        ending month is entered incorrectly,  the  procedure cancels



                                   - 37 -
        





        Minister Assign Program V5.7        Printing your data files
        



        and returns you to the main menu. 

             Menu item "6"  is included to give you some flexibility
        in controlling you printer.  Printing a file to a printer is
        broken down  to  three  main  parts,  finding  the  file and
        initializing the printer, printing  each  line  of the file,
        and terminating printing and  closing  the file.  As you may
        or may not be aware, your  computer  is capable of switching
        your  printer  to  print  in  other formats such as boldface
        type, italics, elite,  etc.(assuming  your  printer has such
        capability) To do this, your  computer  has to send "control
        codes" to the printer to tell it what  to do.  Menu item "6"
        provides  a  method  of sending three sets of codes to  your
        printer before any  of  your  five  types  of  files,  dump,
        labels, lists, prefs or  schedules  are  printed out.  These
        three sets are an initialization string, a string to be sent
        before each line, and a closing string, sent after the final
        character in the respective file is sent to the printer. 

             You may  not  need to use any of these special codes to
        print your files so don't feel that  you  have  to  fill  in
        anything.  As an example, my printer, an Epson,  will switch
        to boldface type, making the print appear darker by  sending
        the  code  "ESCAPE  E",  that  is  pressing  the  ESCAPE key
        followed by  an  upper  case letter "E". I turn off boldface
        type  by  sending  "ESCAPE  F".  The control codes for  your
        printer might be different from mine and can be found in the
        owner's manual  for  your  printer.   Let's assume I want to
        print the MpLists file in boldface so it  will appear darker
        for Xeroxing and  sending  to  my ministers.  I would select
        from the main menu item "6", Printer setup.   I  would  then
        see a new menu listing each of my printable files and a menu
        number 1 thru 15 for  defining  each  of  the three types of
        command strings to  send to the printer for each of the five
        files to print.  So, to make the  printer go to boldface for
        printing "MpLists" I select menu item  7, initial string for
        MpLists. At  the  bottom  of  the  box I am prompted for the
        string to send.  Since control codes  are  usually,  but not
        always, special keys, a  special method is required to enter
        them.  Also, a special method is required to display them on
        the  screen  since  they   are  collectively  known  as  the
        non-printable  characters.  The ESCAPE character is  entered
        by   pressing   the   escape  key  but  is  displayed  as  a
        leftpointing  arrow.   If  you  enter  any  of  the  control
        characters, Ctrl-A thru Ctrl-Z,  they  are  displayed as the
        letter itself preceeded by a carat(^).  These characters are
        entered by pressing and holding down the  CTRL  key, usually
        on the  left  hand  side of your keyboard, and then pressing
        the  alphabetic letter itself.  Release the letter key  then
        the  control  key.   If  the string you need to send to your
        printer  is  to include  things  like  backspaces,  carriage



                                   - 38 -
        





        Minister Assign Program V5.7        Printing your data files
        



        returns  and linefeeds  you  will  have  to  enter  them  as
        ctrl-Characters rather than using the carriage return key or
        the backspace key. 

             Some of the popular control characters are

          -  Ctrl-H - Backspaces the printer one column

          -  Ctrl-J - A linefeed, causes the printer  to advance one
             line

          -  Ctrl-L - a  formfeed, causes the printer to start a new
             page

          -  Ctrl-M -  a  carriage  return,  moves  the printhead to
             column one

             Depending on your  printer,  sending a Ctrl-M, carriage
        return, might  or  might  not also do a linefeed.  If you do
        not get a line feed with a carriage return, the new line  of
        text will start on  the left side of the printer page but on
        the same line  as  the previous page, printing on top of the
        previous line. 

             Note that data entry for each  line of control codes is
        terminated by  a  carriage  return.   If you want to enter a
        carriage return as a code to  be  sent  to  your printer use
        Ctrl-M. The same is  true  for  the  backspace.   To  send a
        backspace to your printer  use Ctrl-H. The regular backspace
        key is used for backspacing over your text as you enter it. 

             The   data   you  enter  is  saved  to  a  file  called
        "MpPrint.dat"  and  read  every  time  you  run the  printer
        program.  You can change control codes anytime. 

             Why do you need to  know  such  technical things?  Well
        the good news is that perhaps  you  don't.   But some people
        might  want  to  take  advantage  of  some  of the  enhanced
        printing capabilities of their printer and this is  one  way
        to do that.  I  have  to  reiterate.   The control codes for
        your printer might be different from  mine.  Please refer to
        your printer manual for a complete listing. 

             SUGGESTION: Some people have complained that the Labels
        printer  requires the label stock to be set on the left side
        of  the  printer.   By  inserting paper that is only  3-1/2"
        wide, some printers incorrectly  report  that the printer is
        out of paper and refuse to print.   By  going  to  the "Line
        Prefix" string for the printing of "MpLabels" you can add up
        to 25 blanks  that  will be printed before the label text on
        each line effectively shifting the  label  stock  up  to  25



                                   - 39 -
        





        Minister Assign Program V5.7        Printing your data files
        



        places to the right, enabling you to center the labels  over
        the paper sensor to avoid the "paper out" error. 

        


















































                                   - 40 -
        





        Minister Assign Program V5.7                          Help !
        









                                  Chapter 9

                                   Help !



             Help  with the program can be found in two main  ways. 
        First of all, READ THE MANUAL. I did not spend  time writing
        this thing to not have you read it.  I've tried to make  the
        language  informal  enough that it is sort of fun to  read. 
        Secondly,   on-line   help  is  available  from  the   main,
        "Minister", menu.  If  you  choose the command "H" by itself
        the  main  menu is simply reprinted.  If, instead, you  type
        "H" followed immediately by the  command  you want help with
        then a <cr>, a short explanation of how the command works is
        displayed on the screen.  If, for  example,  you  want  help
        with "A"dding a minister, type "HA".

             If you are really stuck, a little prayer could not hurt
        but then call me (708-884-0514) or write me at:

                                  Tom Hayes
                              940 Heather Lane
                          Hoffman Estates, IL 60195

        (Assuming,  of course, you have paid your registration  fee)
        (The phone number is my home number since this program is my
        pet  project and not part of my job as an audio and  control
        systems engineer.  I do not think it is  fair  to my boss to
        get calls of  this  nature  during  the day but I'll be more
        than happy to talk to you at night.  I'm in the central time
        zone and am up by 6 am and go to bed after 10 pm.) 

                               Operating Hints

             If you  make changes to the data base such as modifying
        Away  Days, vacation days,  adding  or  deleting  ministers,
        etc.   it  is  a  good  idea  to use the "Update" command to
        update your data files to keep your data  base on disk up to
        date before doing minister scheduling.  This way the changes
        made  to  the  data base are made permanent without updating
        the "Last Served" fields of the  minister's  records in case
        you only want to practice using the scheduler. 

             Please  make  sure  that  the date  and  time  are  set



                                   - 41 -
        





        Minister Assign Program V5.7                          Help !
        



        correctly on your computer before you run this  program.  If
        your computer doesn't know the correct date, the date of the
        assignments  will  be  wrong.   When the program starts  the
        computer  checks  the  date and time and tells  you  on  the
        opening title block of the program what values it read.   If
        they are incorrect, DO NOT CONTINUE.  Quit  the  program and
        fix  the  date.   You can change the date  by  entering  the
        Ms-Dos command "Date" at the dos prompt "A>".  See  your DOS
        book for more details about the "DATE" and "TIME" commands. 

             If you are assigning  Greeters by "Family", the program
        will put the listing  in  the  output  file  as  "Tom  Hayes
        Family" rather than "Tom  Hayes,  LuAnn Hayes". Usually this
        is fine but if the wife is a greeter too, and she happens to
        come up chronologically before the husband, the program will
        print out "LuAnn Hayes Family". Depending upon how liberated
        the family is this  can  be a problem.  A simple solution is
        to make only the husband a  greeter  when assigning greeters
        by family and list  the  wife  in  your data base but do not
        make her  a  greeter.   The  reason for including the wife's
        name is that if there is only one person in the family,  the
        program  will  only  list  "Tom  Hayes"  and not "Tom  Hayes
        Family". Any suggestions from you on how to list families? 

        

        Some Questions received about MP-The Minister Program

        

        Q : Why did the program schedule the same person,  a  persom
             commissioned  as  both  a  Lector  and   a  Eucharistic
             Minister, to both ministries at the same Mass?

        

        A : You entered  the name of that person twice, once as each
             type of minister  and the program assumed they were two
             different people.  Enter each minister once but you can
             indicate any number  of  ministries in the "Ministries"
             field.

                                  ---------

        

        Q :  Why  don't  you  change  the  program logic so families
             always serve together? 

        




                                   - 42 -
        





        Minister Assign Program V5.7                          Help !
        



        A : This is one of the  most  common questions I get.  It is
             my feeling that everyone should get the  same chance of
             an assignment as everyone else.  If you give priorities
             to  families,  the  single  ministers will suffer.  The
             scheduling is  in  strict  chronological order with all
             families grouped  together  so  the  chances are pretty
             good that families will serve together  but this is not
             guaranteed.   Consider  the   scenario   of  Mom  as  a
             Eucharistic  minister and Dad as a Lector. Suppose  the
             only   assignment  remaining  to  be  filled   is   one
             Eucharistic Minister when the scheduler gets to mom and
             dad.  The Lector position at this mass is also filled. 
             If a position is already filled we have to assume  they
             were filled by people  who  have  gone  longer  without
             serving than anyone who has not yet been considered due
             to the chronological "Prime Directive". The next person
             up for consideration is Mom. Since there is  a Euch-min
             slot  open she gets it and all positions for that  mass
             are filled.  What do I do with Dad?  Do  I kick out the
             other  Lector  to  make room for someone  who  has  not
             waited as long for an assignment?   Or  do I remove Mom
             from her assignment and give her slot to  someone  else
             because  Dad  cannot  be  with  her?   If we choose the
             former  course,   this   violates   the   chronological
             ordering.   If we choose the latter there is a  greater
             chance of running out of ministers if we  adopt  an all
             or nothing approach to family assignments.

                                 -----------

        Q:Every  week  the same  people  get  the  same  assignments
             without any rotation.  Why?

        

        A:You  don't  have enough ministers to use only a percentage
             of them each week.  If all of them  get  assigned  each
             week everyone's "last served" date is  the  same and no
             chronological resort  occurs.   Find  more ministers or
             reduce the number of each type assigned to  each mass. 
             Another  reason  this might  occur  is  that  you  were
             "playing" with  the  program  and  assigning masses far
             into  the  future, maybe months ahead.  The people  who
             received  these  future  assignments  now  have   "Last
             Served" dates months ahead and  when  the chronological
             schedule sort occurs, these people will  wind up on the
             bottom of the schedule pecking order until that  future
             month passes.  This is why  I  have included the "Quit"
             command in the menu.  It enables you to play around yet
             not  mess  up  your  data  base with practice  schedule
             data.   I would suggest that you run the  "Print  Whole



                                   - 43 -
        





        Minister Assign Program V5.7                          Help !
        



             List" in the  "Reports  and Lists" menu that prints out
             the data base and check your minister's  records to see
             if anyone has a "Last Served"  date  in the future.  If
             this  is  the  case  use  the  "Last Served date change
             utility" in the main menu to alter the minister's "Last
             Served" date to something more reasonable.

                                 ----------

        Q:Why do you not include cantors  in your list of ministries
             to be assigned?

        A:It has been my  experience  that  the music people usually
             wind up scheduling their  own.  They typically meet one
             night  during  the  week for rehearsal and at that time
             dole  out  the  assignments for the coming week.   This
             scheduling program is more  suitable  when  you have an
             overabundance  of  ministers  and  you  are  trying  to
             apportion the assignments equitably.  How many churches
             do you know where there is an over supply of cantors?

        

                                  ---------

        Q:How do  I  finally  get all the assignments to print on my
             printer?

        A:Use the DOS command  PRINT.  The  PRINT command works just
             like the TYPE command except that  TYPE lists a file to
             the screen and PRINT prints it to the printer.  You can
             find  information  on  the  print  command in your  DOS
             manual.  But as long as you  are here...  With your DOS
             diskette  in  the computer (For you floppy disk  users)
             before you start the MP program type the command PRINT.
             DOS will reply

                NAME OF LIST DEVICE [PRN:]

             This is computerese for "Do you  want  me  to  use  the
             normal printer that  is  attached  to  the  computer?" 
             Obviously you  do,  so  just type a <cr>. DOS will then
                  say

                PRINT QUEUE IS EMPTY

        What you are doing  is  setting up something to allow you to
             do background printing.  This  means that you can print
             a  file  while  you are doing something  else  on  your
             computer  rather  than  waiting for the printing to  be
             done.  The printing you will be doing with this program



                                   - 44 -
        





        Minister Assign Program V5.7                          Help !
        



             is  the  manual  (MPManual.txt),  the  schedule  files,
             (AUG88-4.SKD)   for   example,   the    listing   files
             (MpDump.out,  MpPrefs.out,  MpList.out)   etc.    So  a
             typical command to print out the schedule for the third
             week in November 1988 would be:

                PRINT NOV88-3.SKD

             Printing will occur unless  there  is  something  wrong
             such  as  your printer being off or out of paper.   The
             print command will allow you to specify up to ten files
             that can "queue up" for printing.  If you type PRINT by
             itself DOS will tell  you how many files are waiting to
             be printed.   If  you  get  the message "BAD COMMAND OR
             FILE NAME" when you try to  use  the  print command, it
             probably  means  your  computer  cannot find  the  file
             "PRINT.COM". If you are  working  without  a hard disk,
             you must have a copy of "PRINT.COM" on your "MP" disk. 
             To do this, put your DOS disk  in  drive  "A"  and your
             copy  of  my  program  disk  in   drive  "B"  and  type
             "COPY A:PRINT.COM B:". This will put  a copy of "Print"
             where your  computer  can  find it.  If you have a hard
             drive  and  the  above problem, read  up  on  the  PATH
             command  in your DOS manual.  If you are  still  stuck,
             give  me  a call.  Incidently,  you  must  have  a  DOS
             version  greater  than  2.0  for  the print command  to
             work.  To see what version of DOS you have type  VER as
             a  DOS  command.   Starting  with  this version of  the
             program I have included  a new program called "MpPrint"
             that will lead you through the printing process.  It is
             described in detail in the last chapter.























                                   - 45 -
        





        Minister Assign Program V5.7                          Help !
        




        

                            LICENSE UNDERSTANDING

             All versions of MP-The Minister Program are not  public
        domain nor are they free software.  Non-registered users are
        granted  a  limited  license  to use this  program  for  the
        express purpose  of  evaluating  its  suitability  for their
        purposes.    Use   of  MP  for   other   purposes   requires
        registration. 

             This  program  is  distributed  under  the  "Shareware"
        concept which grants the user the limited license to copy MP
        only for the trial  use  of  others  subject  to  the  above
        limitation and the following:

          -  MP must be  copied  in  unmodified form with all files,
             "MP.EXE",   "MPCONFIG.EXE",  "MP,HLP",  "MPMANUAL.TXT",
             "MPPRINT.EXE" and "MPCNV4-5.EXE", including this manual
             with its  registration  notice  and license information
             intact.   No  fee or  any  other  compensation  may  be
             accepted   or   requested  in  conjunction  with   this
             distribution. 

          -  Operators of electronic bulletin boards may post MP for
             downloading subject to the above conditions.

             For those not familiar with the "Shareware" concept  of
        program  distribution  perhaps  a  bit of explanation is  in
        order.  The basic idea is that  without  laying  out a large
        sum of money you get to  try  out your prospective purchase,
        much like taking that new car for a test drive before buying
        it rather  than  making  a  new  car decision based on sales
        literature.   The program you have is the complete,  working
        program  not  some  crippled  "demo"   program  designed  to
        frustrate you into purchasing the real thing.  If  you  like
        the  program and use it, you register your copy which is the
        same as paying for that new car rather than just driving off
        into the sunset with it.  To this  end you are encouraged to
        make  copies of the  program  for  other  prospective  users
        (adhering to the above  conditions).   If  these others like
        the  program  they  should  register  and  make  copies  for
        others.  The whole idea is that distribution is on a word of
        mouth basis and since the author, me, is  not  saddled  with
        the  expense  of  duplicating  and  shipping  diskettes  and
        printing the manuals, the cost of the program  can  be  kept
        low.  It is up to honest  users  who register their programs
        to keep the "shareware" concept alive.  Thanks. TH

             Incidently, there  are  literally  thousands  of public



                                   - 46 -
        





        Minister Assign Program V5.7                          Help !
        



        domain and/or "shareware" programs available that range from
        games,  to word processors, spreadsheet templates  and  even
        liturgical minister assignment programs!  Some  can  be  had
        for the cost of the diskette, $6, others, like mine  request
        a  registration  fee,  usually  in  the  area of $20 to  $50
        dollars.  If you are at all interested in what else  is  out
        there contact:

                                   PC-SIG
                       1030 East Duane Avenue, Suite D
                             Sunnyvale, CA 94086
                               1-800-245-6717

        They issue a yearly  bound  directory  of programs available
        from   authors   around   the   country,   with   a  monthly
        newsletter/magazine   listing   updates   and   new  program
        submissions.   They   currently  have  over  1800  different
        diskettes available. 

             To  further   explain   the   fee  structure,  the  $30
        registration fee that  I  am  requesting  is the license fee
        permitting you to use one copy of this program.  You are not
        to use the program  except  for  evaluation purposes without
        paying the $30 registration  fee.   This  is  also supposing
        that  you  have received a copy of the program from  someone
        else, another church perhaps.  If you  would like me to send
        you a copy of the program I can do that for an additional $5
        for  a  regular  floppy  disk  or $6 for a 3.5" disk  copy. 
        (Diskette mailers are expensive!)  Also, Some people do  not
        like the idea of  having  to  print  out  the  manual on the
        disk.  If you would like, I can print out a copy and bind it
        for you  for  an additional $20. Please make your intentions
        clear when writing to me. 





















                                   - 47 -
        





        Minister Assign Program V5.7                          Help !
        




                                  Big NEWS!

             After  a  year  and a half of work interrupted for  the
        most part by the birth of our  first child, I have completed
        work on version 6.0. This new version  incorporates  many of
        the  changes suggested by users of previous versions.   Some
        of the big changes are

          -  A much better minister data entry system so you are not
             stuck in the "ADD"  routine  until  you have everything
             filled in.  In the "Change" routine you are able to use
             "PgUp" and "PgDn" to move  back and forth from minister
             to  minister  without  having  to  exit   and  re-enter
             "Change".

          -  A better ministry  entry system so different ministries
             can begin with the same letter. 

          -   The  capability  of   adding  up  to  eight  different
             ministries in addition to  my  predefined  seven giving
             you a total of 15  different  ministries.  Any of these
             ministries can be renamed.  (This should  put an end to
             the  "Acolyte"  vs.  "Server"  and  the  "Lector"  vs. 
             "Reader" vs.  "Proclaimer" controversy.) 

          -  For each minister you can define

               *  up to four "Away Periods" giving both the starting
                  and stopping dates when a minister might be away. 

               *  "Bad weeks" in the month when the  minister cannot
                  serve.  You can use  this  to make sure particular
                  people do not serve every week. 

               *  "Types of masses"  the  minister  is  permitted to
                  serve, "Permanent", "Special" and/or "Daily".

               *   A  "Notes"  line  as  a  scratch  pad   for  each
                  minister. 

               *  Up to three  "Direct  Assignments"  where  you can
                  specify a particular mass, date, time and ministry
                  that a minister will be assigned. 

               *  An associated minister that  will  "ServeWith" the
                  first  minister.   This  can  be used to guarantee
                  particular people will always serve together. 

               *   A  "Family  Mode"  of "Together",  "Separate"  or
                  "Don't   Care"   to   further    define   ministry



                                   - 48 -
        





        Minister Assign Program V5.7                          Help !
        



                  associations within a family.  "Separate" might be
                  used if you have an infant at home and only one of
                  mom or dad can go to mass at a time.

          -  Each mass can have a "Class" assigned to it as can each
             minister.  The program will only assign people with the
             same class number to a matching mass class number. 

          -    Perhaps   the   biggest  change  is  in  the   output
             formatting.   You  can define  in  version  6  how  the
             program is to print out your data, either in a vertical
             list as it does  now  or  in a spreadsheet format.  You
             can choose which ministers to include in each  type  of
             listing, the size of the printed  page and the range of
             dates for the output. 

          -  Along with the above, you can also define your own type
             of data listing, and how the listing is  to be sorted. 
             You might want your  phone  contact  lists separated by
             ministry  and  sorted  by  town, or whatever.  You  can
             define  dozens of printing styles and save them to disk
             for subsequent re-use. 

          -  The  "Labels" procedure will print labels 1 to 5 across
             and either directly to your printer  or  to  a file for
             later printing. 

          -  You can also print  mailing labels with your minister's
             assignments printed on them instead of addresses.  This
             is to  keep your people from having to search through a
             big  printout  looking  for  their   names   and   then
             highlighting it.  The assignment  labels summarize each
             minister's assignments and can  be  attached to the top
             of the bulk Xeroxed assignment list. 

          -  All printing is now done from within the program.  Gone
             is the use of the DOS "Print" command. 

          -  There is  better  handling  of  Daily  masses.  You can
             state which days of the week a mass  is  celebrated and
             how many times each  server  should  be assigned.  (One
             set of servers all week or a different  set  Monday  to
             Wednesday and Thursday through Saturday, for example). 

          -  Assigning a server to a Daily  mass will not keep other
             family  members  from  serving  in  their  ministry  on
             weekends. 

          -  You can also set the date  from  the  program  and also
             "Shell to DOS" if you need  to  format  a  disk to save
             some files.



                                   - 49 -
        





        Minister Assign Program V5.7                          Help !
        




        This new version of my Minister Scheduling  Program  will be
        selling for $95 including a bound manual.   People  who have
        registered  for earlier versions will receive a discount  to
        upgrade.   Since  you are reading this manual, I  asume  you
        have a copy of version 5.7.  If  you have not registered for
        it by sending  me  $30, you can do so and know that you will
        be able to apply  the  $30  to  version  6.0  if you wish to
        upgrade.  If version 5.7 fills your needs, by all means stay
        with it and save your church a few dollars. 

        










































                                   - 50 -
        





        Minister Assign Program V5.7                          Help !
        




            R E G I S T R A T I O N   F O R M    Mp v5.7 {Jun 90}

        _____Enclosed is $30 for registration of my present copy
              of your program.

        _____Enclosed is $95 please send me version 6.0 of your program
             which includes a bound manual.
             Send it on a  ______(3.5" disk) or ______(5.25" disk)
             {If you already have registered for an earlier version by sending
              me the $30 fee, contact me for a discount on version 6.0}

             Send to:

                                  Tom Hayes
                              940 Heather Lane
                          Hoffman Estates, IL 60195

        Registering for the program allows you telephone support  in
        addition to granting you peace of mind  for  using something
        that  you  have  not  ripped  off!  Call me if  you  have  a
        question. 


        Church Name _________________________________________

        Church Address ______________________________________

        City, State, Zip_____________________________________

        Church office Phone # _______________________________

        Your Name ___________________________________________

        And Address _________________________________________
        (if different from church)
                    _________________________________________

        Are you the person who will be running the program?_____________

        If not, Who?_________________________________________

        If in Illinois, tax exempt # ________________________

        What kind of computer do you have?___________________

             Please let me know  how  you like the program, what you
        do not like about it and what features you would like to see
        in future releases. 

        



                                   - 51 -
        





        Minister Assign Program V5.7                          Help !
        







                                    Index


        Adamant Field  21
        Away Week Field  22
        Bad Day Field  22
        Bad Mass Field  19
        Carriage Return  11
        Changing Mass Information  17
        Changing Minister Information  24
        Date Format  14
        Default Drive  8
        Deleting a Mass  17
        Deleting a Minister  25
        Family Code Field  18
        File -"MpConfig.dat"  9
        file,
             MpPrint.dat  39
        File, MpDump.out  28
        File, MpLabels.out  27
        File, MpLists.out  28
        File, MpPrefs.out  27
        file, MpPrint  36
        Files  4
        Initial Start-up  7
        Installation, Hard Disk  6
        Installation, One disk drive  4
        Installation, Two disk drives  6
        Labels  27
        Last Served Field  20, 25
        Mailing Labels  37
        Main Menu  11
        Mass Menu  13
        Mass Preference Field  21
        Mass, Adding  14
        Mass, Permanent  13
        Mass, Temporary  13
        Menus  11
        Minister Menu  11, 11
        Ministries Field  20
        MS-DOS Date & Time  20
        Preferred Mass  15
        Scheduler, Aborting  30
        Scheduler, Continuing  31
        Scheduler, Rejecting  32
        Scheduler, Suspending  32
        SKD file  30



                                   - 52 -
        





        Minister Assign Program V5.7                          Help !
        



        Time Format  14
        Time,entering  21
        Update Command  17
        Vacation Until Field  22


















































                                   - 53 -
        





        Minister Assign Program V5.7                          Help !
        







                         Table of Contents


        Chapter 1 Introduction                                 1

        Chapter 2 Getting Started                              4

        Chapter 3 Entering Mass Information                    13

        Chapter 4 Adding Ministers                             18

        Chapter 5 Changing & Deleting Ministers                24

        Chapter 6 Reports and Lists                            26

        Chapter 7 The Scheduler                                29

        Chapter 8 Printing your data files                     36

        Chapter 9 Help !                                       41






























                                   - 54 -
        



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0954

     Volume in drive A has no label
     Directory of A:\

    MP       EXE     82256   6-19-90   5:44p
    MPCONFIG EXE     21264   5-13-89   3:06p
    MPPRINT  EXE     32944  12-14-89   7:55p
    MPPRINT  DAT       390   6-10-90   6:03p
    MP       HLP     12429   5-14-89   4:02p
    MPMANUAL TXT    133646   7-12-90   8:53p
    FILE0954 TXT      2079   8-13-90   9:21p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       956   1-01-80   7:10a
            9 file(s)     286002 bytes
                           30720 bytes free
