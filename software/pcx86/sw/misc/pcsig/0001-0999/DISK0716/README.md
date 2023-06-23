---
layout: page
title: "PC-SIG Diskette Library (Disk #716)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0716/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0716"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHURCH PROSPECT INFO SYSTEM"

    CHURCH PROSPECT INFORMATION SYSTEM will help you keep track of your
    members -- or clients, or customers, or even your friends.  This is
    good for your church, office, grocery store, bowling alley, etc.  You
    can categorize data in a variety of ways and make searches.  A typical
    profile might contain a person's name, address, marital status, birth
    date, home and work phone numbers, number of children, employer and
    occupation, church status, and date of last visit.  All you need to do
    is fill in the blanks, and then you can modify, print, or browse
    through a file.  You can also add additional commentary to each
    personal profile, letting you include information about hobbies,
    special skills and interests, and such.  This program can print
    alphabetical listings, profile data sheets, visitation worksheets, and
    contact/decision sheets.  The latter shows the type of prospect, how
    contacted, number of contacts, and number of decisions.  This version
    is limited to 35 profiles.
    
    System Requirements:  Two disk drives and a printer.
    
    How to Start:  Type GO (press enter).
    
    File Descriptions:
    
    FILES    TXT  File definitions.
    MANUAL   BAT  Batch file to print manual.
    MANUAL   TXT  Prospect system manual.
    CONFIG   SYS  System configuration file.
    GO       BAT  Displays README.
    README        General information file.
    CPS      EXE  Main program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES716.TXT

{% raw %}
```
Disk No  716
Program Title: CHURCH PROSPECT INFORMATION SYSTEM version 3.0
PC-SIG version 3.1

    CHURCH PROSPECT INFORMATION SYSTEM can organize large amounts of
information for your convenient use. It can be used in businesses and large
member organizations, as well as churches. A typical profile has a person's
name, the address, marital status, birth date, home and work phone numbers,
number of children, employer and occupation, church status, and date of
last visit.

    You only need to fill in the blanks, and then you can modify, print, or
browse through files. You can add additional commentary to each personal
profile. This program can print alphabetic listings, profile data sheets,
visitation worksheets, and contact/decision sheets. The latter shows the
type of prospect, how contacted, number of contacts, and number of
decisions. While handling large amounts of information, this program has
broadly-defined uses. This system runs on either a color or monochrome
system.

Usage: Church/Business/Financial

System Requirements: 256K memory, two disk drives, and a printer.

How to Start: Type GO (press enter).

Suggested Registration: $45.00

File Descriptions:

README        General information file.
CONFIG   SYS  System configuration file.
MANUAL   TXT  Prospect system manual.
GO       BAT  Displays README.
CPS      EXE  Main program.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,88 PC-SIG, Inc.

```
{% endraw %}

## MANUAL.TXT

{% raw %}
```












                               Church Prospect System




                                     Version 3.0





                                 Copyright (c) 1988






                                 Ronald Bryan Byxbe

                                   P. O. Box 4761

                             Dublin, Georgia  31021-4761



                                   (912) 272-1714


                 























          Shareware Notice:



          This  program  is  being  distributed  as  a  Shareware  package.

          Individuals may copy this program and  distribute it  among other

          users as  long as no part of the system has been modified and all

          necessary files are included.



          Disk dealers may distribute this program to their customers for a

          nominal fee to cover cost but only if permission has been granted

          from me.  For permission to distribute please write to  the above

          address.



          I, Ronald  Byxbe, make  no warranties  about this software and am

          not responsible for any damages that may be caused from  its use.

          To my knowledge this software is sound and will cause no damaging

          problems to any system.



          If any problems are found with this program please let me know by

          writing to the above address.



          Registration of  this program  is necessary if you use it for any

          purpose.  To register the program send $45.00 to me  at the above

          address.   I will  send the latest version of the program as soon

          as I receive the registration fee and will place you  on the list

          of registered  users.   Registration will provide you with update

          notices and program support.


                                          2






                               Registration Order Form


                                      Mail To:


                                 Ronald Bryan Byxbe
                                  P. O. Box 4761
                             Dublin, Georgia  31021-4761


                               Church Prospect System


                            Registration Amount:  $45.00

                                Current Version:  3.0




          Where did you get this program?






          How much did you have to pay to get a copy?




          How long did it take you do decide to register?



          What modifications would you make to the program?




          Other Comments.









                                          3





                               General Program Outline


          SETUP SECTION

             1.  Edit Church Name
             2.  Define Label Size
             3.  Define Merge Type
             4.  Define Printer Codes


          PROSPECT FILE SECTION

             1.  Enter New Prospect
             2.  Edit/Delete Prospect
             3.  Browse Prospects


          PROSPECT VISITATION SECTION

             1.  Enter Visitation Record
             2.  Edit/Delete Visitation Record
             3.  Browse Prospect Visitation Records

          PROSPECTS REPORT SECTION

             1.  Alphabetic List of Prospects
             2.  Prospect Profile Sheets
             3.  Prospect Contacts Statistic Report


          LABELS SECTION


          MERGE SECTION


















                                          4





                                   Getting Started

          Basic Requirements:  In order to run this  program you  must have
          at least 256K memory.  Dos 3.0 or greater is recommended.

          You MUST  have a  CONFIG.SYS file  on your  startup disk with the
          following command in it..    FILES=20


                                 Floppy Disk Systems

          Copy all the files onto a Working diskette.   This  diskette will
          be called  the PROGRAM  diskette.  Next prepare a blank formatted
          diskette to be used  as  a  DATA  diskette.    Place  the PROGRAM
          diskette in drive A: and the DATA diskette in drive B:.  From the
          B> drive type:  A:CPS  

          Be it known that by using a floppy  disk you  are limited  to the
          number of  Prospects you  can store.   If  You need to enter more
          Prospects you will have to purchase a Hard Disk.


                                  Hard Disk Systems


          Copy all the files from the diskette onto your hard disk. 
          Load the programs by typing  CPS  and press enter.


                                    Monitor Type

          Some monochrome monitors on the market try to emulate a CGA color
          monitor but  the quality  is very  poor.  One such monitor is the
          Tandy VM-4.  If you have this type of monitor you may have to run
          this program  in monochrome  mode.   To accomplish this press the
          F10 Key at the Main Menu.


                                    System Setup


          Load the program by typing CPS.   The  program will automatically
          initialize the  System record  and create  all necessary data and
          index files.

          Select the Setup option and define all codes.

          Select the System Menu option.    From  here  select  Edit Church
          Name.  Fill in the name and address of your church.  

          Next select  Define Label Size.  If you are using standard labels
          then 5 lines will be ok, if not, determine the number of lines on

                                          5





          your label  and enter  that number  here.   All labels are One Up
          Labels.

          Next select Define Merge Type.  If you are using a Word Processor
          that  uses  WordStar  type  data  files then Select 'WS' for your
          Merge Type.  If you are using Word  Perfect then  Select 'WP' and
          if you  are using Leading Edge Word Processor then select 'LE' as
          your Merge Type.

          This particular Version does not use the printer code section.

          Exit this menu by pressing the Escape key.









































                                          6





                                PROSPECT FILE SECTION

                              Enter New Prospect Record
                              .........................

          Use this  selection to  enter new  prospects into  the data base.
          Enter prospects  and press  the Enter Key all the way through the
          last field (Comments) or press the Page Down Key.  This will save
          the Prospect Record.

          Their  are  several  Codes  that  you  will need to define before
          entering your Prospects.  One is  the  Type  of  Prospect.   Your
          codes may be something like this...

                 EVG  Evangelistic Prospect
                 TEA  Teacher Prospect
                 BIB  Bible Study Prospect

          You may make up any codes you wish to define the Prospect Type.

          The next  code you  will need  to make  up is the Age Group Code.
          This code defines what  Age Category  the Prospect  is in.   Your
          codes may look something like this...

                 ADU  Adult
                 YTH  Youth
                 CLD  Children
                 AD1  Adult 1

          Next you  will need to define a Residential Section Code for your
          prospects (only if you intend  to  use  this  option).    You can
          define them as blocks, streets, addresses, etc.

             Example:   PROV       Providence Place
                        EASTMAIN   East Main Street



                             Edit/Delete Prospect Record
                             ...........................

          Use this  selection to make modifications to the Prospect Record.
          You can make any changes necessary  and press  the Page  Down key
          for the Next Prospect.  

          NOTE:   If you  change any  part of the Name you will need to Re-
          Index the data file.  To do this  refer to  the OTHER  SECTION at
          the bottom of this documentation.





                                          7






          There are several Function Keys to this selection.

             ESC    :   Pressing this key will Exit the Edit Mode.

             F1      :   Use the key to Enter a Prospect's Last Name and go
                       directly to his record.

             F4     :   Use the key to Delete the Prospects Record.

             PageDown  :  Use this key to retrieve the Next Prospect.

             PageUp    :  Use this key to retrieve the Previous Prospect.



                                  Browse Prospects
                                  ................

          Use this selection to  View the  Prospects on  the screen.   This
          option offers limited data but will give you the Prospect's Name,
          Home Telephone Number, Work  Telephone Number,  and Prospect Type
          Code.






























                                          8





                                 VISITATION SECTION


                               Enter Visitation Record
                               .......................

          Use this selection to enter Visitation Records for each Prospect.
          After  each  visitation  bring  the  Visitation  Material  to the
          computer and  enter the necessary information.  Date Visited, Who
          made the Visit, Was a Decision Made,  Purpose of  the Visit (Same
          as Prospect Type), and the Results of the Visit.

          The Function Key assignments are:

                 ESC       :  Exit

                 F1        :  Find a Prospect by Last Name

                 PageDown  :  Select the Next Prospect

                 PageUp    :  Select the Previous Prospect



                       Edit/Delete Prospect Visitation Records
                       .......................................

          Use this  selection to  make changes to the Prospect's Visitation
          Record. 

          Function Key Assignments:

                 ESC     :   Exit

                 F1      :   Find Prospect by Last Name

                 F4      :   Delete this Visitation Record

                 F9      :   Select Next Visitation Record

                 F10     :   Select Previous Visitation Record

                 PageDown :  Select Next Prospect

                 PageUp   :  Select Previous Prospect








                                          9





                         Browse Prospect Visitation Records
                         ..................................


          Use this selection to View all Visitations made to a Prospect.

          Function Key Assignments:

                 ESC      :   Exit

                 F1       :   Find Prospect by Last Name

                 F2       :   Print a Profile Sheet on this Prospect

                 F9       :   Scroll History Visitation Records

                 PageDown :   Retrieve Next Prospect

                 PageUp   :   Retrieve Previous Prospect


































                                         10





                              PROSPECT REPORTS SECTION


                             Prospect Alphabetic Listing
                             ...........................

          Use  this  selection  to  print  an  alphabetic  listing  of  all
          Prospects in the computer along with their address, Prospect Type
          Code, and Age Group Code.

          Note:  You will be prompted with a Selection Screen.  If you wish
          to  narrow  down  Prospects  you can enter various parameters for
          selection.

          Example:  If I only wanted EVG Prospects  then I  would enter EVG
          in the  'Type of  Prospect' field  and only  those prospects with
          that Code would be printed.

          If I  wanted Teachers  in the  Age Group  of Adult  I would enter
          'TEA' in the 'Type of Prospect' field and 'ADU' in the 'Age Group
          Code' field.  This would print all Adult Teachers.

          Also I can narrow  my search  by the  Date the  Prospect was Last
          Visited.   If I enter 02/20/88 in the field 'Not Visited Since' I
          would get all Prospects  who were  NOT visited  on or  since that
          date.


                               Prospect Profile Sheets
                               .......................

          Use  this  selection  to  print  Prospect  Profile Sheets.  These
          sheets are extremely handy to  have  when  making  a  visit  to a
          Prospect.   The report  tells you  everything about the Prospect,
          including all the times he has been contacted, who contacted him,
          whether  a  decision  was  made  or  not,  and the results of the
          contacts.

          Note:  You will be prompted with a Selection Screen.   Follow the
          same guidelines as presented under 'Prospect Alpha List' above.


                            Prospect Contacts/Statistics
                            ............................

          Use this selection to obtain a report of statistics.  This report
          will show how many contacts were made in  each Prospect  Code and
          mode of Visitation.  Also shows the percentage of Decisions made.





                                         11





                                LABELS/MERGE SECTION


                                   Prospect Labels
                                   ...............

          Use this  selection to print labels for Prospects.  The Selection
          screen will appear.   Follow the  same guidelines  as given under
          'Prospect Alpha List'.



                                 Prospect Merge File
                                 ...................

          Use this  selection to  create a  Mailmerge file to use with your
          Wordprocessor.  Note:  You must have setup the mailmerge  type in
          the 'SETUP SECTION'.



































                                         12







                                        OTHER

          IDX:   The IDX option stands for Index.  Use the option when you 
                need to Re-Index all your Data Files.  If you ever turn the
                machine off while running this program you will have to Re-
                Index your data files.  Also if you change a Prospects Name
                you will have to select this option.



          DIR:   This has been added so you can see a directory of your    
                disk.



                         Additional Church Related Programs
                         ..................................



                              Church Membership System.

          Also available from me is  a  Church  Membership  Program.   This
          program   handles   all   Membership,   Bible   Teaching,  Church
          Visitation,   Member   Reporting,    Class    Rolls,   Birthdays,
          Anniversaries,   Stewardship   Contribution,   Organizations  and
          Committees, and More.

          For your personal copy send a $65.00 registration fee to:

                                 Ronald Bryan Byxbe
                                   P. O. Box 4761
                             Dublin, Georgia  31021-4761

                                   (912) 272-1714
















                                         13

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0716

     Volume in drive A has no label
     Directory of A:\

    CONFIG   SYS        22   2-29-88   5:49p
    CPS      EXE    124960   4-22-88   8:08p
    FILES716 TXT      1506   7-01-88   9:26a
    GO       BAT        12   2-26-88   8:47a
    MANUAL   TXT     16410   4-22-88   8:04p
    README             594   4-22-88   8:02p
            6 file(s)     143504 bytes
                           14336 bytes free
