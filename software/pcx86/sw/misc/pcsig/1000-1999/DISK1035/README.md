---
layout: page
title: "PC-SIG Diskette Library (Disk #1035)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1035/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1035"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SURVEY SYSTEM"

    SURVEY SYSTEM is a useful program for creating attitude or climate
    surveys.  Anyone with minimal skills on the IBM-PC or compatible can
    create their own survey.  You can create the kind of survey that makes
    a general statement and the reader then chooses one of five levels of
    agreement about that statement.  You first create a pool of general
    survey statements/questions in a master file.  The statements are then
    incorporated into your specific survey.  They can be modified, deleted
    or moved around once on the specific survey.  A neat feature of the
    program is it can place the survey output into text files.  Once in
    these files, you can exit the program and use any wordprocessor with
    them.  They print in a usable format, but if you want to get fancy or
    use Ventura Desktop Publishing on them, this could be useful.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1035.TXT

{% raw %}
```
Disk No: 1035
Disk Title: Survey System
PC-SIG Version: S1.3

Program Title: Survey System
Author Version: 2.50
Author Registration: $35.00.
Special Requirements: 320K RAM and a hard drive.

SURVEY SYSTEM is a useful program for creating attitude or climate
surveys.  Anyone with minimal skills on the IBM-PC or compatible can
create their own survey.  You can create the kind of survey that makes
a general statement and the reader then chooses one of five levels of
agreement about that statement.  You first create a pool of general
survey statements/questions in a master file.  The statements are then
incorporated into your specific survey.  They can be modified, deleted
or moved around once on the specific survey.  A neat feature of the
program is it can place the survey output into text files.  Once in
these files, you can exit the program and use any wordprocessor with
them.  They print in a usable format, but if you want to get fancy or
use Ventura Desktop Publishing on them, this could be useful.

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
 The following instructions enable you to print the SURVEY documentation
 and install the system for immediate use:

   1. In order to print the documentation please turn your printer on.
   2. After booting your computer place the SURVEY disk in drive A:
   3. At the DOS prompt (C>, A>, etc.) type: "TYPE A:SURVEY.DOC > LPT1:"
   4. This documentation is approximately 20 pages long.

 To install your SURVEY System program on a hard disk:
   1. Turn on or Re-boot your computer.
   2. At the DOS prompt C>, type: "A:INSTALL" and press ENTER.
   3. The SURVEY program and data files will be placed in the SURVEY
      Sub-directory on your hard disk drive.
   4. To begin the program, type: "CD \SURVEY" and press ENTER.
   5. Followed by: "SSMAIN" and press ENTER.

 To run Survey System on a floppy system:
   1. Place disk #1 in drive A:
   2. At the A> prompt type "SSMAIN" and press ENTER.

 REMEMBER: Always use a copy of program disks and backup data often!
```
{% endraw %}

## SURVEY.DOC

{% raw %}
```










                             SURVEY SYSTEM


                             (Version 2.5)
                           September 1, 1989








                        Superior Micro-Techniques
                     5510 Orchard St. W, Suite B1473
                            Tacoma, Wa  98467
                              (206)564-0803





















          The SURVEY System Software & Documentation are the sole property
          of Superior Micro-Techniques and are protected under the Copyright
          Laws.  Reproduction of any kind without the prior consent of author
          is strictly forbidden.  Copyright 1987 Superior Micro-Techniques.
          


                             TABLE OF CONTENTS



          Introduction................................... 1
          Using Pop-up Menus & Help...................... 2
          A sample Survey................................ 2
          Using this Documentation....................... 3
          Notes About Data Entry......................... 3

          File Maintenance (1.0)......................... 4
            Master Questions (1.1)......................4-5
            Survey Headers (1.2)......................... 5
            Survey Questions (1.3)....................... 5
              Add From Master Questions (1.3.1).......... 6
              Change/Delete a Question (1.3.2)........... 6
              Insert a Master Questions (1.3.3).......... 7
              Re-arrange Survey Questions (1.3.4)........ 7
            Survey Responses (1.4)....................... 7
            System Parameters (1.5)...................... 8

          Reports Menu (2.0)............................. 8
            Print Distribution Survey (2.1).............. 9
            Summary of Questionnaire (2.2)............... 9
            Summary of Questionnaire by Class (2.3)...... 9
            Summary of Master Questions (2.4)............ 9
            Comments by Class (2.5)...................... 9
            Complete List of Master Questions (2.6)...... 9
            Display Ranking Results (2.7)................10

          Utilities (3.0)................................10
            Reindex Databases (3.1)......................10
            Copy all Data Files (3.2)....................10
            Display List of Files (3.3)..................11
            DOS Backup Data Files (3.4)..................11
            DOS Restore Data Files (3.5).................11
            Delete Old Surveys (3.6).....................11
            Color or Mono Display (3.7)..................11
            Alternate Data Path (3.8)....................12
            Print Control Code (3.9).....................12

          NETWORK Use....................................13

          Appendix A-Databases Structures & Indexes...14-16

          
          SURVEY SYSTEM (Ver 2.5)                                Page 1


          Introduction

          The Survey System was developed for use by management and
          business consultants to get a good sense of the business climate
          within an organization without having to extensively interview a
          sampling of the employees at the various organizational levels.
          It actually turned out to be very effective in time savings to
          the consulting group since the administration of it was very
          simple.  It also allowed for responses from the entire target
          population giving a much more precise view of organizational
          attitude.  Although not a "scientific statistical analysis"
          program, it can aid you in making some very specific inferences
          about the population.

          This software is a complete do-it-yourself survey creation and
          analysis tool.  The number of surveys you create is limited only
          by the amount of storage space.  It is flexible in that you
          create the questions or statements as well as the population
          classifications or frames.  It is inflexible in its type of
          responses.  The respondents will select one of five levels of
          agreement to correlate with the statement.  Its completly menu-
          driven and easy to use.  It is also complete; it prints the
          survey, collects the responses and outputs the analysis and
          results reports.  About the only thing you need to add to it is a
          cover letter.  If you are not satisfied with the pre-formatted
          output that I have designed, you can select to pass any report or
          the survey itself to an ASCII file to be edited with your
          favorite word processor.  The file output appears exactly as it
          would if printed!

          The surveys created by this system are of the climate type.  In
          other words, people who are responding to the survey will read a
          statement and select from five levels of agreement with what the
          statement implies.  As an example, one statement might read, "The
          company has well defined long term goals."  And, as with all
          surveys created by this software, the possible responses are,
          strongly agree, agree, neutral, disagree or strongly disagree.
          Once many employees of the company have responded to this
          statement, you might see that possibly a large percentage of
          people said that they disagree with this statement.  This should
          lead management to make modifications in that area of policy.

          You will see that you can also classify the respondents in any
          one of three ways.  These classifications are strictly up to the
          designer of the survey and do not necessarily have to be used.
          In the example above it would be useful to know whether those
          responses which are most negative are coming from upper level
          managers or line supervisors or workers.  Classifying respondents
          can give you insight as to the reasons for overall response
          percentages.
          
          SURVEY SYSTEM (Ver 2.5)                                Page 2


          Using Pop-up Menus and Help

          This software comes with the most user friendly interface
          available to the IBM PC product line as of this version update.
          It is quite easy to use.  For the opening screen, you are
          presented with four choices: File Maintenance, Reports,
          Utilities and Quit.  Use the cursor control keys on your key-
          board to highlight the selection of your choice. As each
          option is highlighted a more complete description of its
          functionality is displayed on line 24. Press the ENTER key
          to access the options available to any of these Main Menu
          selections.

          After selecting one of the 4 options from the bar Main Menu,
          a window will appear with additional choices arranged vertically.
          Again, press the up and down arrow keys to highlight the
          various choices within these menus. A further description of
          each is displayed on line 24. To select one of these options,
          press the ENTER key. To return to the Main Menu press the ESC
          (escape) key.  This will close the window at the same time.
          Additional sub-menus may pop up for selections on these
          vertical menu windows. In most cases, if you get into something
          that you are uncertain of, press ESC to back out of it.

          When you have finally gotten to the point where data input is
          required or some other information must be typed in, you will
          be able to access 'help windows.'  The note 'F1 - Help' will
          be highlighted in the upper right of the screen or it will be
          noted on line 24 notes when the help window is available.  As
          you guessed press the function key 'F1' to get a help window
          to appear.  The help is targeted to the function you are trying
          to perform at the time help is requested.


          A Sample Survey

          A very short and simple example of a survey with the survey id
          code "SAMPLE" has been created to allow you to quickly examine
          the various reports and to test the other options. Once you are
          satisfied with the workings of this survey, you may delete all
          of its questions as well as the few master questions created
          for it.
          
          SURVEY SYSTEM (Ver 2.5)                                Page 3


          Using This Documentation

          The documentation contained herein is a detailed description
          of this program and how each menu option performs, what its
          for and how to use it best.

          If you have browsed the menus of the software you will have
          seen that to the right of each option is a number (e.g. '1.3')
          These numbers refer to the section in this documentation that
          fully describes their workings.

          Please note that the terms 'question' and 'statement' are
          used throughout the software and this documentation and they
          mean the same thing: a group of text to be rated by a respondent.


          Notes About Data Entry

          You will quickly notice that in order to modify some piece of
          existing information you must generally enter the key information
          on an entry point screen (i.e. to change an existing
          master question you must first enter the associated master
          question number).  On this system the pressing of the return key
          without entry of some characters is intrepreted as meaning that
          you are finished with the particular operation and to the return
          to the next higher level menu.

          You will also notice that in most instances a prompt such as,
          "Type '?' for a list..." appears at the bottom of these screens.
          This simply means that by typing a ? in the field will cause a
          program to execute which lists in alphabetic or numeric order the
          key information which you may need to know in order to complete
          the data entry.  It is simply a look up screen.  If the data you
          are looking up is in a very long list, you can narrow down the
          view by entering the first 1 or 2 characters of the key you are
          searching, followed by the ? symbol and the look up will begin at
          that point in the list.

          In the case of finding the right survey id code, after pressing
          the '?' a window will appear with all available id codes displayed
          in it.  The first one is highlighted. Use the cursor control
          keys to move the highlight to the code you want and press ENTER.
          This code will be placed into the field prompt and the program
          will continue automatically. If there are multiple pages of
          id codes, press the PgDn key to see the continued listing.
          
          SURVEY SYSTEM (Ver 2.5)                                Page 4


          File Maintenance (1.0)

          The following sections (1.1 - 1.5) describe the majority of the
          survey system data input functions.  From this menu you will
          create a cache of master generic questions/statements to be
          used on the individual specific surveys, build the surveys,
          record the responses to your surveys and maintain general
          system parameters.

          Upon selection of menu items 1.2, 1.3 or 1.4 you will be
          prompted for the survey id code. Here you must enter a valid,
          existing code to continue. Available at these points exists
          the ability to open a window to view and select one of your
          id codes. To access this window, simply type '?' and press ENTER.


          Master Questions (1.1)

          Before utilizing your survey system effectively you will need to
          compile and enter your list of master questions or statements.

          An original design assumption was that you would be creating
          very similar surveys many times over for various clients or
          tests. Although this is not a necessity, if it is true then you
          can essentially create a fairly generic set of statements and
          then use them on the individual surveys. A long term benefit of
          this is that you can analyze the entire pool of surveys based
          on the master question number (which is retained on every
          survey) using report 2.4.

          In cases where you are creating similar surveys over-and-over,
          it will be more efficient to have them instantly available in
          this master pool. Simply copy them one-at-a-time into the
          current survey and tailor it to be more specific if necessary.

          Each statement contained in the master list is created by
          assigning it a unique number, from 1 through 999. Thereafter,
          all references to that statement will be made using this number.
          After selecting this option on the menu, the question maintenance
          screen will be displayed and you are prompted for the statement
          number. Enter in a non-existing number and a prompt asks if
          you want to add this as a new question. After indicating 'Y',
          a highlighted box appears. Type in the text of the question.
          Be sure to enter the text exactly as you would wish it to appear
          on the printed survey or report. There is no automatic word wrap
          feature. If a word doesn't fit on one line, hyphenate it or
          move it to the next line.

          The master questions can be tailored once created on the specific
          surveys, so don't worry too much about very specific details.
          
          SURVEY SYSTEM (Ver 2.5)                                Page 5


          Master Questions (1.1) (cont)

          To modify or delete an existing master question, simply type in
          the master question number and it will instantly appear on the
          screen for editing. If no editing is necessary, press the PgDn
          key and 'Confirm' the entry. At the options bar you may also
          select 'D' to delete any existing statement.


          Survey Headers (1.2)

          Each survey you create will have only one record in this data file.
          This record identifies the survey by assigning it a unique code
          which is made up of up to ten alpha-numeric characters.  It contains
          the official title of the survey.

          You will identify the popluation classifications on this record
          as well.  By classification, you will want to be able to identify
          the people as belonging to sub-groups.  An example classification
          would be the marital status of respondents.  The classes would be
          "married", "single", "divorced" or "widowed."  You will see that
          one of the reports can break the survey results down by
          classification.  You do not need to have all or any classes of
          respondents though.

          You will also notice that there is space for up to five rating
          statements.  These will consist of some statements which you
          want the respondents to prioritize. These will not automatically
          print with the survey. They do not need to be a part of the
          survey.


          Survey Questions (1.3)

          This option is used to place the questions into the desired
          survey.  Once you have created a survey by performing option
          1.2, you will be able to add the questions to it. This option
          immediately requests you to identify the survey by entering the
          10 character survey code. Once you have done so it will lead you
          to the sub-menu of options.  All options on this menu will affect
          only the survey you previously activated. You will notice that
          the survey title is displayed at the bottom of the screen.
          The survey title will be displayed on all screens when it has
          been activated.

          If this is the first time you have selected this option since
          creating the Survey Header, you will be asked if you want to copy
          the questions of another survey into this one. This is handy if
          another survey exists with a very similar design. If you
          indicate 'Y' or yes, it will ask from which survey to copy the
          questions. Enter a valid survey id code and all statements from
          that survey will be copied onto the new survey. This option
          exists until you have added your first question to the survey.
          
          SURVEY SYSTEM (Ver 2.5)                                Page 6


          Add From Master Questions (1.3.1)

          Once you have selected this option, the screen clears and prompts
          you to enter the master question number. If you do not remember
          what it is, simply enter the '?' for a look at the Master
          Questions. Enter the master question number and it will display
          the master question on the screen.  At the screen bottom, the
          option bar appears. At this time you have the options of editing
          the question on the screen. (This editing affects only the
          current survey copy of the question.) Slight modifications to
          the question are easily accomplished. You could also delete the
          question, which will simply eliminate it from being added to the
          current survey.  Finally, you will want to confirm the question.
          This confirming simply verifies the information and adds it to
          the end of the survey. It will automatically be assigned the
          next sequential number on the survey.

          Continue copying statements from the master list. To end this
          function press ENTER with no value in the question number field.


          Change/Delete a Question (1.3.2)

          Once your survey has statements on it you can edit them or delete
          them using this option. Once selected, enter the number of the
          question as it appears on the survey. It will be displayed for
          your editing. Press PgDn to access the options bar to delete or
          confirm the changes made.

          To locate the unknown number of a survey question, type '?' in
          the number field and press ENTER. A window will appear showing
          the questions on the survey. You may browse through this list
          to find the desired question. Then press 'Q' to close the window
          and enter the question number.
          
          SURVEY SYSTEM (Ver 2.5)                                Page 7


          Insert a Master Question (1.3.3)

          In many instances you will not want to simply add a master
          question to the end of the survey, but place it in some specific
          location within the survey.  To do so is simply a matter of
          identifying the master question and then the question on the
          survey to place it before. When this is done, the program
          renumbers all following questions by incrementing their number.

          Again, a listing of master statements can be obtained by typing
          the '?.'


          Re-arrange Survey Questions (1.3.4)

          You will probably find the need to slightly alter the survey by
          moving a question from one location in the survey to another.
          This can be accomplished by following the prompts which will need
          to know the question number to be moved and the location to move
          it to.  The move to location is always identified by the question
          number before which you want it to reside.  To move a question to
          the end of the survey you will have to delete the question and
          add it over again using sub-option 1.


          Survey Responses (1.4)

          This option allows the entry of responses to the surveys. As
          usual you will be prompted to enter the six character survey code
          Next you enter the class codes (A-F) for any classifications
          which have been designated in the survey header file. You are
          then prompted for the priority order of the ranking statements.
          The system will then prompt you once for each question in the
          survey. After entering the question responses you are given a
          full screen of text entry area for any comments the respondent
          has made. Enter these comments exactly as you would like them to
          appear on a report. The program does not automatically place
          hypens or do word wrapping. You can edit the lines as you enter
          them by using the arrow keys, delete key, etc. Once you have
          accepted these comments they cannot be changed. If no comments
          have been made, press the PgDn key. Once the comments have been
          added, the program asks if you want to add more responses to this
          survey. This cycle will continue until you indicate that no more
          responses exist.
          
          SURVEY SYSTEM (Ver 2.5)                                Page 8


          System Parameters (1.5)

          This option maintains a database which holds your own name and
          address.  Most importantly, though are the print control codes
          and monitor type code.  See the beginning of the Reports Menu
          section for complete details regarding the 12 CPI print control
          sequence. It is important to find this sequence before
          attempting to print any reports (unless you have a wide carriage
          printer). The monitor type code allows you to see a colorful
          screen if you have a color monitor.


          Reports Menu (2.0)

          The reports sub-menu allows you to print your completed survey,
          analysis reports and editing lists.

          After selecting any of the options (except 2.4 & 2.6) you are
          prompted for the survey id code. Then a prompt allows you to
          either print the report or output it to ASCII file (except 2.7
          which only has screen display or file output).

          If you indicate that you want the report output to ASCII file,
          you will be prompted for a valid drive, path and file name.
          If no drive or path is indicated, the file will be placed in
          the current drive and directory. If you leave this prompt blank
          it will result in aborting the report and returning to menu.
          An invalid drive, path or file name will result in the report
          not executing. After placing a report into an ASCII file you
          will need to exit the Survey System and use your word processor
          on it. In this way you can modify it, use special fonts and in
          general create a very custom survey.

          A note about using printers. Most of the reports in this system
          are designed to be printed at 12 Characters Per Inch (CPI).  This
          is because of the large amount of text to be placed on a normal 8
          1/2 X 11 page. Most printers can be made to print in this
          fashion by executing a specific sequence of characters via a
          program. Under the System Parameters (1.5) option there
          exists a field to maintain this 12 CPI control sequence. You
          will need to figure out what the sequence is by browsing your
          printer manual. Enter the entire sequence observing case
          convention into this field and your reports should print
          properly. The default print control characters are for standard
          Epson printers.
          
          SURVEY SYSTEM (Ver 2.5)                                Page 9



          Print Distribution Survey (2.1)

          This report prints your finished, or draft, survey. It titles
          it and prints it in generally acceptable format. A footnote
          at the bottom helps clarify the rating scale.


          Summary of Questionnaire (2.2)

          This report prints the summary in normal question number order
          and displays the results of the responses as the total percentage
          of responses at the 5 levels. It will indicate the total number
          of respondents at the upper left of each page.  This can be
          compared to the Total responses column to the far right to
          determine the number of persons not responding to any question.

          Summary of Questionnaire by Class (2.3)

          This is really up to 3 reports in one. At the time that you opt
          to print this report, you will be prompted to enter the class you
          would like to use. The class title will appear in the report
          heading. Each survey question will again be listed numerically
          and responses displayed as percentages of levels. Each question,
          though, will break the responses down by the group within the
          class. The group titles are displayed immediately following the
          question.


          Summary of Master Questions (2.4)

          This report performs a similar analysis and output as described
          in section 2.2 above except that it uses all surveys ever. It
          calculated response percentages at each level based upon the
          master question number of the survey. Remember, each time a
          statement is pulled onto a survey the master question number
          is retained. Even though the survey number will invariably
          differ the master number is maintained. When this report is
          run, all responses are sorted by the original master question
          number and ananlysis run against them.


          Comments by Class (2.5)

          Any free form comments that the respondents have made will be
          printed as entered into the computer. These responses can be
          printed using any of the 3 available classes. Whichever class
          you do use will be used to sort the responses and display them by
          one of six possible groups. The Group title will be centered on
          the report page. The comments will be compressed on the page to
          look like one long paragraph, but every fifth one will have a
          line space following it.
          
          SURVEY SYSTEM (Ver 2.5)                                Page 10


          Complete List of Master Questions (2.6)

          Occasionally, it may be helpful to have the entire listing of
          questions contained in the master file for editing or reference
          purposes.  This can be easily accomplished with this option.
          Simply have a large supply of paper in the printer and begin the
          printing.


          Display Ranking Results (2.7)

          If you have included statements on your survey for priority
          ranking by respondents, this option will prove beneficial in
          determining how they stacked up.  Select this option to have the
          number and percentage of the ratings of each statement appear on
          the screen.  The screen also shows the total number of people who
          have made written comments.


          Utilities (3.0)

          Utilities are provided mainly to avoid loss of data should
          a hardware failure occur. If options 3.2, 3.4 and 3.5 do not
          work, it is probably due to lack of adequate memory on your
          computer. Try eliminating memory resident programs.


          Reindex Databases (3.1)

          Occasionally you may have a power outtage which may cause your
          data entry to fail or your reports to appear odd. Or, you may
          find your system becoming inefficient due to a lot of deleted
          records. This option should be able to handle both of these
          situations. It first will go through each database in your
          system and remove any records previously marked for deletion.
          It then reindexes these databases. Run this option as needed
          during heavy system use.


          Copy all Data Files (3.2)

          A quick way to make useable, transferrable copies of your data
          files (maybe to use on another computer with this software)
          is what this option is for. It simply copies all databases
          (.DBF extension) and indexes (.NDX extension) to a floppy
          disk in drive A:.
          
          SURVEY SYSTEM (Ver 2.5)                                Page 11


          Display List of Files (3.3)

          To determine the size of your database files and to see general
          information about the current system files, select this option.
          It first displays all databases and indicated the number of
          records in each. Then it does a directory of the current directory.


          DOS Backup Data Files (3.4)

          As with all computer systems hardware failure is a definite
          possibility.  The loss of even several hours of data due to lack
          of a backup is a painful experience.  To avoid this happening you
          will want to run option number 3 after each days activity.  You
          should have at least 2 rotating sets of backup diskettes.  You
          will be prompted through this operation.


          DOS Restore Data Files (3.5)

          If you should happen to accidentally wipe out data or complete
          files, or find that a power surge has destroyed the database
          integrity, you will need to restore your data files from the most
          recent copy of your backup diskettes.  First, though, you will
          have to reinstall your survey software, if it has been destroyed.
          Once you are able to operate the Survey System software, you will
          be able to select this option to restore your latest set of back-
          up files.  You will be prompted through this operation.

          Delete Old Surveys (3.6)

          On occassion you may want to eliminate some old surveys from your
          system to free more disk space or simply because you will have no
          further need for the survey. Select this option and you are prompted
          for the six character survey id code.  Once you have entered a valid
          survey code, you will be prompted "DO YOU REALLY WANT TO DELETE THIS
          SURVEY (Y/N)?"  Once you answer 'Y' to this prompt, the survey will
          be deleted and gone forever.  Answering 'N' will simply return you
          to the utilties menu without any effect.  If you have selected 'Y'
          all survey information, including header, questions, responses and
          comments will be purged from the databases.

          Color or Mono Display (3.7)

          This option simply lets you select the type of monitor your are
          using.  If you indicate that you have a color monitor, the colors
          will be displayed (white characters on blue background).  If you
          select Monochrome, black and white will be displayed.  You can
          alternate between the two settings, but please quit and re-start
          the system between color changes.
          
          SURVEY SYSTEM (Ver 2.5)                                Page 12


          Alternate Data Path (3.8)

          If you are using this software on a floppy based hardware system
          or simply want to place the data in another area on the computer
          you can do so via this option.  Once your system is booted-up,
          select this option and type in the complete drive and path where
          you will be putting your data files.  (For example, to put all
          data on another floppy disk, you might type "B:" as the default
          path.)  Then exit the software and copy all *.DBF and *.NDX files
          to the location specified by the new path setting.  Finally,
          delete all the *.DBF and *.NDX files from the area (disk) where
          the Survey System software is located.

          Print Control Code (3.9)

          If you want your reports or surveys to be printed using any
          special font or attribute (such as, bold or compressed) you can
          assign the proper print control code with this option.  Once you
          select this option, a window will appear requesting that you type
          in the proper control sequence.  For this program, you can either
          place the character within quotes or its ASCII value within the
          string 'CHR(??)'.  For example, to set my Epson printer for 12 CPI
          (12 characters per inch) printing I would type 'CHR(27)+"M"' in
          this field. (NOTE: Only the inside double quotes are needed). Then
          each time I go to print a report, this is passed to the printer
          and my reports come out at 12CPI.
          
          SURVEY SYSTEM (Ver 2.5)                                Page 13


          NETWORK Use

          Version 2.5 of The Survey System saw the first appearance of
          multi-user (networking) compatibility.  This program should
          work on any popular Netbios network, such as, Novell, 3Com,
          Lantastic, Invisible Network and others.

          The networking aspect of this system is most effectively
          used for entry of reponses by many operators on a network
          for one or more surveys.  A caution against having more than
          one person creating or editing (adding or moving questions)
          the body of a survey is given.  Even so, having many people
          creating or editing separate surveys should not pose any
          problems.

          Please keep SMT informed of problems which you encounter
          during network use of this product.

          CAUTION: Do not have more than one person creating or
          editing the same survey at one time.  This does not include
          adding responses.
          

          SURVEY SYSTEM (Ver 2.5)                                Page 14


          Appendix A - Database Structures & Indexes


          Database:    S-QUES
          Index file:  S-QUES     Key: QUES_NUM

          The master question database will hold basis of all surveys.  A
          survey question or comment must reside in this database before it
          can be applied to any particular survey.  Once the question be-
          comes a part of the individual survey it can be altered.  Each
          question/comment can contain up to 120 characters.  A two char-
          acter question type code can be formulated and applied.

          Field Name  Type       Width    Field Description
          QUES_NUM    Character      3    Unique question number
          QLINE1      Character     40    First line - free form
          QLINE2      Character     40    Second line - free form
          QLINE3      Character     40    Third line - free form
          ** Total **              124



          Database:    S-SURVEY
          Index file:  S-SURVEY   Key: SURV_CODE

          The survey database will contain on record for each client sur-
          vey performed.  It will contain the basic information about each
          survey.  A survey code will be created using the client code
          combined with the year and month of the survey and will have the
          form "CLIENTYYMM".  The CLASS, DIVISION, MARKET and OTHER fields
          will contain descriptions of up to 6 items within each category.
          These will begin at each 35th character interval within the
          field.

          Field Name  Type       Width    Field Description
          SURV_CODE   Character     10    Unique survey code
          SURV_TITLE  Character     50    Survey formal title
          RATING      Character    210    5 1-5 rating stmts 50 char each
          CLASS1      Character    210    6 possible respondent type (A-F)
          CLASS2      Character    210    6 possible respondent type (A-F)
          CLASS3      Character    210    6 possible respondent type (A-F)
          ** Total **              901
          
          SURVEY SYSTEM (Ver 2.5)                                Page 15


          Appendix A - (cont)

          Database:    S-DTAIL
          Index file:  S-DTAIL   Key: SURV_CODE + SQUESTION

          The detail database contains the individual questions/comments
          which will makeup the survey.  Each record will effectively by a
          question/comment.  A survey question can be numbered arbitrarily
          but the master question number is maintained for later analysis.
          The questions can be altered once they become a part of the
          survey, but should not be radically different from their master
          question counterpart.  The questions are related to the survey
          heading record through the survey code field.

          Field Name  Type       Width    Field Description
          SURV_CODE   Character     10    Unique survey code
          MQUESTION   Character      3    Master question number
          SQUESTION   Character      3    Survey question number
          QLINE1      Character     40    First line - free form
          QLINE2      Character     40    Second line - free form
          QLINE3      Character     40    Third line - free form
          ANS0        Numeric        3.0  Cumulative # of response - 0
          ANS1        Numeric        3.0  Cumulative # of response - 1
          ANS2        Numeric        3.0  Cumulative # of response - 2
          ANS3        Numeric        3.0  Cumulative # of response - 3
          ANS4        Numeric        3.0  Cumulative # of response - 4
          ANS5        Numeric        3.0  Cumulative # of response - 5
          ** Total **              155



          Database:    S-RSPNS
          Index files: S-RSPNS   Key: SURV_CODE + SQUESTION

          The response database will be used to capture the end responses
          from the field survey.  Each record will be a response to a
          question on the survey.  If a survey consists of 35 questions
          there will be 35 of these records for each returned survey.  At
          this point the CLASS, DIVISION, MARKET and OTHER field entries
          will be matched up the the master survey record.

          Field Name  Type       Width    Field Description
          SURV_CODE   Character     10    Unique survey code
          MQUESTION   Character      3    Master question number
          SQUESTION   Character      3    Survey question number
          RESPONSE    Character      1    Question response 1 - 7
          RATING      Character      5    Comment rating sequence
          CLASS1      Character      1    6 possible respondent type (A-F)
          CLASS2      Character      1    6 possible respondent type (A-F)
          CLASS3      Character      1    6 possible respondent type (A-F)
          ** Total **               26
          
          SURVEY SYSTEM (Ver 2.5)                                Page 16


          Appendix A - (cont)

          Database:    S-CMNTS

          The comments database consists of the responders free form
          comments.  Each record will contain one line of 65 characters of
          a comment.  A transaction code will be applied to each comment to
          ensure that the individual lines of comment remain together for
          final output.  The comments are output by DIVISION, hence the
          presence of this field.

          Field Name  Type       Width    Field Description
          SURV_CODE   Character     10    Unique survey code
          CLASS1      Character      1    6 possible respondent type (A-F)
          CLASS2      Character      1    6 possible respondent type (A-F)
          CLASS3      Character      1    6 possible respondent type (A-F)
          TRANS       Numeric        6    Unique trans sequence num
          COMMENT     Character     65    Free form user comments
          ** Total **               83



          Database:    S-SUMM

          This database is used whenever report #4 is requested.  When a
          survey summary by class is desired, the system must create a data
          structure to contain the number of responses for each appropriate
          class category.

          Field Name  Type       Width    Field Description
          SURV_CODE   Character     10    Unique survey code
          CATEGORY    Character      1    Contains the class pointer A-F
          TITLE       Character     35    Holds the A-F class descriptions
          ANS0        Numeric        3.0  Cumulative # of response - 0
          ANS1        Numeric        3.0  Cumulative # of response - 1
          ANS2        Numeric        3.0  Cumulative # of response - 2
          ANS3        Numeric        3.0  Cumulative # of response - 3
          ANS4        Numeric        3.0  Cumulative # of response - 4
          ANS5        Numeric        3.0  Cumulative # of response - 5
          *** Total ***             64



          Database:    S-HELP
          Index file:  S-HELP     Key: HELPID + STR(LINE_NO,3)

          This file contains the text of all available pop-up help windows.

          Field Name  Type       Width    Field Description
          HELPID      Character      8    Unique help id code
          LINE_NO     Numeric        3    Line number of help text
          TEXT        Character     40    Help screen text - 1 line
          ** Total **               51

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1035

     Volume in drive A has no label
     Directory of A:\

    COMP     BAT       116   9-01-89   2:15p
    GO       BAT       192   4-17-88   1:02p
    INSTALL  BAT       224   4-11-89   3:40p
    SSMAIN   BAT       130   9-01-89   2:15p
    UPGRADE  BAT       484   9-07-89   2:38p
    S-CMNTS  DBF       566   3-21-89   4:16p
    S-DTAIL  DBF      1193   3-21-89   4:16p
    S-HELP   DBF     22173   9-02-89  12:23a
    S-QUES   DBF       658   3-01-89   9:28a
    S-RSPNS  DBF      1330   3-21-89   4:16p
    S-SUMM   DBF      1482   3-21-89   7:53p
    S-SURVEY DBF      1403   3-21-89   4:16p
    S-SYST   DBF       504   6-04-89   5:43p
    SURVEY   DOC     42684   4-08-90   1:26p
    SURVEY   EXE    238802   4-08-90  12:49p
    SVARS    MEM        34   8-17-89   2:46p
    S-CMNTS  NTX      2048   3-21-89   4:16p
    S-DTAIL  NTX      2048   3-21-89   3:45p
    S-DTAIL1 NTX      2048   3-21-89   7:52p
    S-HELP   NTX     12288   9-18-89   5:12p
    S-QUES   NTX      2048   3-21-89   3:44p
    S-RSPNS  NTX      2048   3-21-89   4:16p
    S-RSPNS1 NTX      2048   3-21-89   7:53p
    S-SURVEY NTX      2048   3-21-89   3:45p
    GO       TXT       989   9-01-89   2:12p
    FILE1035 TXT      1143   4-21-90   1:11a
           26 file(s)     340731 bytes
                           10240 bytes free
