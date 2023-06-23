---
layout: page
title: "PC-SIG Diskette Library (Disk #3277)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3277/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3277"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## INSTALL.TXT

{% raw %}
```

                            Installation Instructions
                            -------------------------

       The executable code, the documentation, and necessary data files
       are combined into the compressed, self-extracting file MAINLINE.EXE.

       An installation batch file INSTALL.BAT is also supplied.

       If you have received the program on diskette,

       Insert the diskette in your floppy drive. Set the default directory
       to the floppy drive. (Example, a:)

       Run the batch file by typing

            A:>INSTALL from: to:

       where from: and to: are the floppy drive and the harddisk drive.
       (i.e. A:, B:, C:, or D: - be sure to include the colons)

       Example    A:> INSTALL A: C:

       The install program will create a subdirectory C:\MAINLINE and
       install the following necessary files in it.

                    ML.EXE       - The executable code
                    MAINLINE.DOC - Instruction Manual
                    SMVGA.FNT    - Font File
                    SMCGA.FNT    - Font File

       To run the program, set the default drive to C:\MAINLINE
       and type ML.

       If for some reason the INSTALL process does not work, the program
       can be installed manually as follows.

       a. Create a subdirectory on your harddisk such as C:\MAINLINE.
       b. Copy MAINLINE.EXE into that subdirectory.
       c. Set default drive/directory to the subdirectory

               CD C:\MAINLINE

       d. Type MAINLINE.EXE. The program and documentation will self-extract.

       If you have obtained the program from an on-line service such as
       COMPUSERVE or from a Bulletin Board, use the manual procedure described
       above and install MAINLINE. All necessary files are included.
```
{% endraw %}

## MAINLINE.DOC

{% raw %}
```
 















          MainLine
          Project Management Software





          By
          
          Minuteman Systems
          P.O. Box 152
          Belmont MA  02178






 






          Preface




          Copyright Information

          Copyright 1992, by Minuteman Systems

          The software and the disks on which it is contained are licensed
          to you, for your own use. This is copyrighted software. You are
          not obtaining title to the software or any copyright rights.
          You may not sublicense, rent, lease, convey, modify, trans-
          late, convert to any other programming language, decompile, or
          disassemble the software for any purpose.

          You may make as many copies of this software as you need for
          backup purposes. You may use this software on more than one
          computer, provided there is no chance it will be used simultane-
          ously on more than one computer.



















                                                                Preface  v

 






          Registration Information

          This program is supplied as Shareware. This means that you
          may evaluate the program for free, but are required to pay a
          registration fee if you keep it and use it.

          Note that any fee paid to a Shareware distribution company or
          similar supplier does not replace, nor contribute towards, the
          registration fee.

          If you are satisfied with the program and wish to use it, you
          may register it by filling out a hardcopy of the included file
          ORDER.TXT. Send it with a check or money order for $59.95 to

          Minuteman Systems, PO Box 152, Belmont, Massachusetts, 02178.
          As a registered user, you will receive

          o  A printed, bound User's Manual.
          o  Free updates for one year.
          o  Telephone service.
          o  A personalized diskette with your name and a serial number.
             Also, the registration screen usually presented when exiting
             the program will be disabled.

         Incentive Plan - Once you have registered, have acquaintences
         list your name as a reference when they register. You will receive 
         a $10.00 rebate. 












          vi  Preface

 






          Notice

          This software is supplied as-is. There are no warranties, ex-
          pressed or implied.

          Minuteman Systems disclaims all warranties relating to this
          software, whether expressed or implied, including but not lim-
          ited to any implied warranties of merchantability and fitness
          for a particular purpose, and all such warranties are expressly
          and specifically disclaimed. Neither Minuteman Systems nor any-
          one else who has been involved in the creation, production,
          or delivery of this software shall be liable for any indirect,
          consequential, or incidental damages arising out of the use
          or inability to use such software even if Minuteman Systems
          has been advised of the possibility of such damages or claims.
          In no event shall Minuteman Systems' liability for any damage
          ever exceed the price paid for the license to use the software,
          regardless of the form of claim. The person using the soft-
          ware bears all risk as to the quality and performance of the
          software.

          Some states do not allow the exclusion of the limit of liability
          for consequential or incidental damages, so the above limitation
          may not apply to you.

          This agreement shall be governed by the laws of the Commonwealth
          of Massachusetts and shall inure to the benefit of Minuteman
          Systems and any successors, administrators, heirs and assigns.
          Any action or proceeding brought by either party against the
          other shall be brought only in a STATE or FEDERAL COURT of com-
          petent jurisdiction located in Middlesex County, Massachusetts.
          The parties hereby consent to in personam jurisdiction of said
          courts.






                                                              Preface  vii

 







                                      CONTENTS


              Preface...............................................     v

             1 Introduction.........................................     1
              1.1 How This Manual Is Organized......................     1

             2 Installation.........................................     2
              2.1 System Considerations.............................     2
              2.2 Installation Procedure............................     4

             3 Trial Run - 1st Pass.................................     6
              3.1 The Initial Screen................................     6
              3.2 Moving Around - Key Commands......................     8
              3.3 The Menu-Command Line.............................    10
              3.4 Adding a Task.....................................    11
              3.5 Storing a Project.................................    14

              3.6 Printing Reports..................................    14
              3.7 Exiting...........................................    14
              3.8 Examining The Reports.............................    15

             4 Trial Run - 2nd Pass.................................    18
              4.1 Reading In A Project..............................    18
              4.2 Editing an Existing Task..........................    19
              4.3 Inserting, Deleting, Moving Lines.................    20
              4.4 Deleting A Task...................................    24
              4.5 Adding Descriptions to Groups of Tasks............    26

              4.6 Adding A Date and Labels to The Display...........    26
              4.7 Locating Tasks - The "Search" Function............    29
              4.8 The Wait Function.................................    29
              4.9 Changing Program Configuration....................    31

             5 Advanced Topics......................................    35
              5.1 System Capabilities...............................    35
              5.2 Following The Critical Path.......................    35

                                                                       iii

 






              5.3 The Journal File - Recovering Damaged Project
                  Files.............................................    35
              5.4 Attaching Fixed Dates to Milestones...............    36
              5.5 Project Rollups...................................    36

              5.6 Renumbering Tasks and Milestones..................    39
              5.7 Copying A Group of Projects.......................    39
              5.8 Importing Projects................................    41

             6 Command Listing......................................    43
              6.1 Filing............................................    43
              6.2 Global............................................    43
              6.3 Exit..............................................    44
              6.4 Tasks.............................................    44
              6.5 Display...........................................    44

              6.6 Print.............................................    45

          Appendix A  QUICK-START INFORMATION.......................    47

             A.1 Starting Up........................................    47
             A.2 Moving Around The Screen...........................    47

             A.3 Calling Up Commands................................    49

             A.4 Basics of Editing and Generating Reports...........    49
             A.5 Notes on Dates and Calculations....................    50


          Appendix B  SELECTING OUTPUT FORMATS......................    51

          Appendix C  SERVICE.......................................    53







          iv

 






          FIGURES
            1     Blank Project.....................................     7
            2     1 Task Added......................................    13

            3     DEMO.DAT..........................................    16
            4     DEMO.RPT..........................................    17
            5     Tasks Added.......................................    22
            6     Moved Lines.......................................    23
            7     Adding Comments...................................    27
            8     Date and Label Fields.............................    28

            9     Using The Task Wait Function......................    30
            10    Global Configuration Menu.........................    32
            11    Using Rollup Tasks................................    38

























                                                                         v

 






          1  Introduction

          The principal job of the MainLine Project Management Program is
          to develop a schedule in a clear and understandable format, for
          the purposes of

          1. Identifying the parts of the project and their interdependen-
             cies.
          2. Allowing easy changes to the schedule for "what if" purposes.
          3. Providing compact reports suitable for presentations, and
             compatible with electronic mail systems for distribution to
             those working on the project.


          1.1  How This Manual Is Organized

          Section 2 describes the method for installing the program on the
          machine. It also discusses the requirements of the computer this
          program is to run on.

          Section 3 and Section 4 illustrate how to use MainLine by means
          of a series of examples.

          Section 3 goes over the basics - turning on the program, creat-
          ing a simple project, and generating some reports.
          Section 4 demonstrates with further examples how to edit a
          project and manipulate the display of a project on the screen.

          Section 5 describes some advanced features.

          Section 6 lists all the individual commands available and de-
          scribes each briefly.

          Appendix A includes "quick-start" information if you wish to get
          up-and-running prior to having read this whole manual.

          Appendix B gives further information on formatting the schedule
          output for printing and electronic mailing.

                                                                         1

 






          2  Installation

          To install and use this program, all that is required is famil-
          iarity with the basics of DOS operation. If you aren't experi-
          enced with creating directories and copying files, consult the
          DOS documentation with your system.



          2.1  System Considerations

          This program is intended to be run on IBM-style personal com-
          puters and exact compatibles. The program has been successfully
          tested and used on numerous machines.

          Speed of the program will vary depending on the model of PC
          used. The program was developed and tested on 20MHz 386-SX
          machines and found to have very usable speed. It has been tested
          on older machines including 8 MHz "XT" machines - while the
          performance is slower, it is still quite usable.

          Whatver machine used should have at least 360K of RAM memory
          free and available.

          Note - The presence on a system of Terminate-And-Stay-Resident
          programs (TSRs), memory managers, or Local Area Network (LAN)
          software may interfere with the operation of this program. "In-
          terference" usually means that the program cannot load and ex-
          ecute. However, in borderline cases there may be misoperations
          during the running of the program. This includes things like
          running out of memory, or disturbances of the display. If you
          are experiencing difficulty loading or running this program, and
          any of those other types of software are installed on your sys-
          tem, try removing them or disabling them in various combinations
          to determine what is causing the problem.




          2

 






          Video Considerations - The first time the program is used, it
          will default to run in a black and white mode compatible with
          most if not all video cards and display monitors available. The
          program's command menu has options for selecting the colors
          displayed, and for changing the resolution of the display.
          (See Section 4.9.) These selections may then be stored away
          as defaults for future use.
































                                                                         3

 






          2.2  Installation Procedure

          Registered users receive a diskette containing the updated,
          executable code and related files in non-compressed format. They
          should be copied directly into the working subdirectory.

          Diskettes obtained from Shareware vendors include the following
          files;

          o  MAINLINE.EXE - A compressed, self-extracting file containing
             the executable code, this documentation, and several data
             files.
          o  INSTALL.BAT - Installation Batch File
          o  INSTALL.TXT - Instructions for using INSTALL.BAT to install
             the program.
          o  ORDER.TXT - A Form for registering the program
          o  README.1ST - A brief description of the program, including
             installation considerations.
          o  PACKING.LST - A list of the included files.

          Diskette vendors may also place other files on the diskette.

          Before doing any installation, it is best to make a backup copy
          of the supplied diskette. This is easily done by copying all
          files on the diskette using the DOS command;

          DISKCOPY b: b: (Assuming diskette drive is "b" - otherwise
          substitute the proper disk drive letter.)

          To install the program, run the installation batch file. First
          set your default drive to the diskette drive.

          Then type INSTALL from: to: followed by ENTER, substituting the
          diskette drive and the harddisk drive respectively. I.E. A:, B:,
          C:, D:. Be sure to include the colons.

          A subdirectory MAINLINE will be created. The following files
          will be installed in it;

          4

 








          o  MAINLINE.DOC - This file, the User's Manual.
          o  ML.EXE - The executable program file.
          o  SMCGA.FNT - Fonts used in high resolution black/white dis-
             play.
          o  SMVGA.FNT - Fonts used in high resolution color display.

          If for some reason the installation procedure does not work,
          install the program manually as follows;

          Create a subdirectory on your harddisk where you will do your
          project work. Example - C:\MAINLINE. Copy MAINLINE.EXE into this
          subdirectory. Set your default drive/directory to C:\MAINLINE.
          Extract the file by typing MAINLINE (followed by ENTER).
          If you obtained the program from a bulletin board or an on-line
          service such as COMPUSERVE, all the above files are bundled into
          MAINLINE.EXE. Use the manual installation procedure described
          above.




















                                                                         5

 






          3  Trial Run - 1st Pass

          This section will go through the real basics - turning the
          program on, creating and saving a simple project, generating
          some reports, and exiting the program.

          First set the default drive to the one where you have stored
          the program. Start the program by entering ML followed by
          ENTER or Carriage Return (CR).


          3.1  The Initial Screen

          See Figure 1. After a few seconds the display will show a
          Gantt/Pert chart for a minimal project. It will have only a
          start milestone, a single task, and an end milestone.
          Here are some important things to note about the way a schedule
          is displayed.

          o  The Calendar - Dates run left to right across the top of
             the display. Month, date, and day-of-week (MTWTF) are shown.
             Only week-workdays are used, and there are no provisions for
             holidays.
          o  Milestones - Each Milestone is represented by an asterisk (*)
             and is shown as occurring on one day only.
          o  Tasks - Tasks are represented as equal signs (=) if they are
             on the critical path, or dash-lines (-) if they aren't.
          o  ID's - Each task or milestone must have a unique identifying
             number which is displayed below it ("10" for the "Start"
             Milestone).
          o  Line Numbers - Each task or milestone is represented on a
             3-row "Line". ("1" for the Start milestone, "2" for "Task".)
             You can assign the Line Number for any Task or Milestone, to
             format the Schedule the way you want.

          That's enough description for now - more characteristics will be
          described as we use them.


          6

 






Figure 1: Blank Project
                     Press "/" or "\" For Command Menu       MainLine Rev 1.4
               .----------------------+---------------------+------------------.
               |_____Mar '92__________|___ Apr '92 _________|___ May '92 ______|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
Date:16-Mar-92 |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
.--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
|Blank       1 |Start    .    .    .    .    .    .    .    .    .    .    .   |
|              |*   .    .    .    .    .    .    .    .    .    .    .    .   |
|              | 10 .    .    .    .    .    .    .    .    .    .    .    .   |
|            2 | Task    .    .    .    .    .    .    .    .    .    .    .   |
|              | ===================^   .    .    .    .    .    .    .    .   |
|              |  20.    .    .    .    .    .    .    .    .    .    .    .   |
|            3 |    .    .    .    .End .    .    .    .    .    .    .    .   |
|              |    .    .    .    .*   .    .    .    .    .    .    .    .   |
|              |    .    .    .    . 30 .    .    .    .    .    .    .    .   |
|            4 |    .    .    .    .    .    .    .    .    .    .    .    .   |
|              |    .    .    .    .    .    .    .    .    .    .    .    .   |
|              |    .    .    .    .    .    .    .    .    .    .    .    .   |
|            5 |    .    .    .    .    .    .    .    .    .    .    .    .   |
|              |    .    .    .    .    .    .    .    .    .    .    .    .   |
|              |    .    .    .    .    .    .    .    .    .    .    .    .   |
|            6 |    .    .    .    .    .    .    .    .    .    .    .    .   |
|              |    .    .    .    .    .    .    .    .    .    .    .    .   |
|              |    .    .    .    .    .    .    .    .    .    .    .    .   |
`--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
               |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
               |     Mar '92          |    Apr '92          |    May '92       |
               `----------------------+---------------------+------------------'







                                                                         7

 






          3.2  Moving Around - Key Commands

          You can use keyboard keys to move around and look at other parts
          of the schedule.

          You can use the UP(^) and DOWN(v) arrows to scan through the
          schedule one line at a time.

          The "PAGE UP" and "PAGE DOWN" keys will move the display one
          screen at a time.

          Pressing the RIGHT and LEFT Arrow keys moves the display hori-
          zontally.

          Note - If multiple Arrow or PAGE UP/DOWN keys are entered
          quickly, after a brief pause the screen will be updated only
          once. This is a great timesaver. It reduces the time spent
          waiting for the screen to be redrawn. To demonstrate this fea-
          ture, press RightArrow three times quickly. This only works with
          multiple entries of the same key type.

          These and other key selections are listed below;

          ________________________________________________________________
          Key___________Function__________________________________________
          Down Arrow    Advance Screen One Line

          Up Arrow      Back Screen One Line

          Right         Move Forwards in time.
          Arrow

          Left Arrow    Move Backwards in Time

          PAGE DOWN     Advance to Next Screen

          PAGE UP       Go Back 1 Screen


          8

 





          ________________________________________________________________
          Key___________Function__________________________________________


          HOME          Move to Top-most Screen and Start of Calendar

          CTRL-T        Move to Top-most Screen

          CTRL-B        Move To Bottom-most Screen

          CTRL-L        Move Horizontally Left To Start of Calendar

          CTRL-R        Move Horizontally Right to Latest Used Date

          CTRL-F        Find Task/Milestone

          +             Follow the critical path forwards in time

          -             Follow the critical path backwards in time

          "|"           Go To A Specific Line Number

          "\"_or_"/"____Activate_Menu-Command_Line________________________

















                                                                         9

 






          3.3  The Menu-Command Line

          There are many commands for editing, filing, generating outputs,
          etc. The majority are activated by use of a Menu-Command Line.
          The Menu-Command line is called up by pressing the "\" or "/"
          key. (Press "/" Now)

          Note that the commands "Filing,Global,Exit,Tasks,Display,Print"
          are displayed at the top of the screen, and that "Filing" is
          highlighted.

          The Highlight may be moved around by pressing the right- or
          left- arrows. Try it, but then return to "Filing".

          Pressing ENTER (don't do it yet!) executes whichever command
          is highlighted. This may result in the immediate execution of a
          command, or the appearance of a nested Command line.

          With "Filing" still highlighted, hit ENTER now and note that the
          command line "Get, Store, New, Import" appears.

          Note - You may also activate a command directly by pressing the
          key of the first letter of the command. It is not necessary to
          press ENTER when so doing.

          While viewing the Menu-Command Line, screen movement keys no
          longer operate. Pressing BACKSPACE or ESCAPE at any time backs
          up one level in the Menu-Command line. Pressing BACKSPACE or
          ESCAPE when at the top level exits the Menu-Command Line and
          normal screen viewing ability returns. (Hit BACKSPACE now.)
          From here on, sequences of using the command line will be de-
          scribed as follows;

          "\+Filing+Store" means execute the series of menu choices start-
          ing with "\" or "/", then "Filing", "Store".




          10

 






          3.4  Adding a Task

          Execute the following command line; \+Tasks+Add_Task

          You will be prompted for a task number - enter "25". (All en-
          tries require termination by ENTER.)

          Enter "t" or ENTER when prompted to select a Task or Milestone.

          You will be asked to specify the ID of a Task or Milestone which
          the new task is to succeed - enter "20".

          You will be asked to specify the ID of a Task or Milestone which
          the new task is to preceed - enter "30". (You don't have to
          enter anything here, you could leave it blank - we'll just
          include it for this exercise.)

          A Task Data Sheet for task 25 will now appear at the bottom
          of the screen. You may edit any of the task's data entries by
          selecting a letter/number associated with the data, pressing
          ENTER, and then entering the data.

          Enter "c" (with ENTER) to edit the Title. Then enter "New
          Task".

          "New Task" should appear in the Title field of the Task Data
          Sheet.

          Enter "d" to edit the Duration. Then enter "20" for 20 working
          days.

          To leave the editing mode, enter "x" for Exit.

          The full screen is displayed again. It should look like Fig-
          ure 2.

          Note the following about the new task;
          o  It is chronologically between the "Task" and the "End".

                                                                        11

 






          o  It is on line 2.

          o  It is on the critical path.

          Note 1 - Note that the screen-movement keys (Arrows, PG UP/DN,
          etc, all function while the task editor is working.)

          Note 2 - A default line number is always supplied, typically
          the same line number as that of the "After Task?" entry. When
          the Task Editor is active, you may change the line number as
          follows;

          Enter "l" to select which line the task should appear on. Use
          BACKSPACE to erase the present line number, then enter the new
          line number.

          Note 3 - Notice that the top line of the display has changed.
          When the program was first activated, the top line contained a
          message indicating how to activate the command menu. After the
          first time that the command menu is used, the top line message
          is replaced with information describing the name of the present
          project, and the percentage of MainLine's project-handling
          capability that is being used. Since MainLine can handle up
          to 150 tasks and/or milestones, the percentage shown now is
          quite small.














          12

 






Figure 2: 1 Task Added
                  Project=<DEMO>      Usage = 2%             MainLine Rev 1.4
               .----------------------+---------------------+------------------.
               |_____Mar '92__________|___ Apr '92 _________|___ May '92 ______|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
Date:16-Mar-92 |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
.--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
|Blank       1 |Start    .    .    .    .    .    .    .    .    .    .    .   |
|              |*   .    .    .    .    .    .    .    .    .    .    .    .   |
|              | 10 .    .    .    .    .    .    .    .    .    .    .    .   |
|            2 | Task    .    .    . New Task.    .    .    .    .    .    .   |
|              | ===================^===================^   .    .    .    .   |
|              |  20.    .    .    .  25.    .    .    .    .    .    .    .   |
|            3 |    .    .    .    .    .    .    .    .End .    .    .    .   |
|              |    .    .    .    .    .    .    .    .*   .    .    .    .   |
|              |    .    .    .    .    .    .    .    . 30 .    .    .    .   |
|            4 |    .    .    .    .    .    .    .    .    .    .    .    .   |
|              |    .    .    .    .    .    .    .    .    .    .    .    .   |
|              |    .    .    .    .    .    .    .    .    .    .    .    .   |
|            5 |    .    .    .    .    .    .    .    .    .    .    .    .   |
|              |    .    .    .    .    .    .    .    .    .    .    .    .   |
|              |    .    .    .    .    .    .    .    .    .    .    .    .   |
|            6 |    .    .    .    .    .    .    .    .    .    .    .    .   |
|              |    .    .    .    .    .    .    .    .    .    .    .    .   |
|              |    .    .    .    .    .    .    .    .    .    .    .    .   |
`--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
               |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
               |     Mar '92          |    Apr '92          |    May '92       |
               `----------------------+---------------------+------------------'







                                                                        13

 









          3.5  Storing a Project

          In order to store the edited project under a new name, do the
          following;

          Execute /+Filing+Store

          You will be prompted for the name to store it under - a default
          of "mlwork" is shown in brackets.

          Type "demo" for the name and press ENTER.

          The data base for this project has now been saved. The project
          could be edited further (remember to store again after addi-
          tional changes), or you could exit, restart the program, and
          load the stored project.

          3.6  Printing Reports

          Before exiting let's generate some output reports. We'll just
          create the reports now, and examine them after exiting.

          Create a schedule report by executing \+Print+Partial_Schedule.
          Create a date report by executing \+Print+Date.

          Create a task-milestone report by executing \+Print+Task_Detail


          3.7  Exiting

          Let's temporarily exit.

          Enter the commands \+Exit



          14

 






          3.8  Examining The Reports

          You should be back to the DOS prompt.

          Enter the command

          C:\MAINLINE>DIR

          You will get a directory listing which should include the fol-
          lowing files

          1. ML.EXE - The executable MainLine file
          2. DEMO.PRJ - The data file for the demo project you have cre-
             ated.
          3. DEMO.TXT - The Schedule for DEMO
          4. DEMO.DAT - A Date Report for DEMO
          5. DEMO.RPT - A complete report with all the data of all the
             tasks and milestones in DEMO.
          6. MLJRNL.PRJ - A backup file to protect project data. (See
             Section 5.3.)

          DEMO.TXT is a text file containing the schedule. It will be
          132 columns wide. It should look almost exactly like Figure 2.
          (Figure 2 has been modified here to be 80 columns wide to fit
          better in this manual.)

          You can examine DEMO.TXT with the TYPE command or with a text
          editor. You can mail it to anyone on your network. You can send
          it to any ASCII printer. If you print it out in LANDSCAPE on
          a laser printer, a viewgraph/transparency can be made which is
          suitable for use in presentations.

          DEMO.DAT lists the start- and end- dates for all the tasks and
          milestones in DEMO. It is reproduced in Figure 3

          DEMO.RPT lists all tasks and milestones in DEMO, with their
          complete data - predecessors, titles, start and end dates, etc.
          It is listed in Figure 4

                                                                        15

 






          Note - Any change to a .PRJ file file could make the file un-
          usable. Never try to directly edit or otherwise change a .PRJ
          file. Don't even try to view it with a word processor or text
          editor.

Figure 3: DEMO.DAT

                                       Report Date: 16-Mar-92
Task and Milestone Date Report        Project Name: demo
                                                   --------------------
Task# Typ Description                               Start      End
----- --- ----------------------------------------  ---------  ---------
 10   S   Blank               Start                 02-Mar-92  02-Mar-92
 20   T                       Task                  03-Mar-92  30-Mar-92
 25   t                       New Task              31-Mar-92  27-Apr-92
 30   F                       End                   27-Apr-92  27-Apr-92























          16

 






Figure 4: DEMO.RPT
                                       Report Date: 16-Mar-92
Task and Milestone Detail Report      Project Name: demo
                                                   --------------------

*******************************************************************************
Task #  10     Type S    Description; Blank                 Start

Start:02-Mar-92  End:02-Mar-92  Duration:  0      Wait :  0
                                                  Display Line:  1
Predecessors ;
-------------------------------------------------------------------------------

Task #  20     Type T    Description;                       Task
Start:03-Mar-92  End:30-Mar-92  Duration:  20     Wait :  0
                                                  Display Line:  2
Predecessors ;  10,

-------------------------------------------------------------------------------
Task #  30     Type F    Description;                       End

Start:27-Apr-92  End:27-Apr-92  Duration:  0      Wait :  0
                                                  Display Line:  3
Predecessors ;  25,
-------------------------------------------------------------------------------

Task #  25     Type t    Description;                       New Task
Start:31-Mar-92  End:27-Apr-92  Duration:  20     Wait :  0
                                                  Display Line:  2
Predecessors ;  20,

-------------------------------------------------------------------------------







                                                                        17

 






          4  Trial Run - 2nd Pass

          In the previous chapter we demonstrated the very basics; turning
          the program on, creating and storing a simple project, generat-
          ing some reports, and exiting.

          This chapter will demonstrate in more detail the functions of
          MainLine.

          We'll start by reading back in the project that was previously
          created.


          4.1  Reading In A Project

          Enter ML to start the program. Execute the command se-
          quence \+Filing+Get.

          Select project demo. You may do this either of two ways. Press-
          ing ENTER will load the highlighted project. (Arrow keys and
          PAGE UP/DOWN keys move the highlight around the displayed list
          of existing project files.) Or, just type in the project name
          DEMO followed by ENTER.

          Note - Another way to load a project is to include the
          name of the project when starting Mainline. I.E. entering ML
          DEMO at the DOS prompt would have automatically loaded the
          DEMO project.











          18

 






          4.2  Editing an Existing Task

          Before demonstrating more functions, lets first update the
          project to represent something a little more specific.

          Call up the Task Editor for Task 20 by entering the command
          \+Tasks+Edit

          When prompted for a task number, enter 20.

          Select the Title by entering "c". Erase the present title using
          the BACKSPACE key, and enter the new title "Define".

          In a similar manner, edit the task duration (field "d") to be 10
          days.

          Select task 25 for editing by entering "n" (for New task) and
          the Task Data Sheet for Task 25 will appear. Using the procedure
          above, change its title to "Develop".

          Select "x" to end the editing session.

          This has demonstrated how to make changes to an existing set of
          tasks or milestones.

          Note that in editing entries the cursor may be positioned using
          the right- and left-arrows, and new characters may be inserted
          by typing.











                                                                        19

 






          4.3  Inserting, Deleting, Moving Lines

          The lines on the screen may be changed much like those in a
          spreadsheet. Blank lines may be added or deleted, or blocks of
          lines may be moved around.

          To insert some blank lines execute \+Display+Add_lines.

          When prompted, enter that you want to add lines before line 3,
          and that you want to add 3 lines. Note on the screen that the
          END task has been "pushed down" 3 lines. (Remember - one "line"
          means 3 rows on the screen.)

          We don't need to demonstrate it here, but by using \+Dis-
          play+Delete_lines you can delete a group of consecutive lines.

          It is not possible to delete a line that has tasks or milestones
          on it.

          You are now somewhat proficient at adding and editing tasks. Now
          proceed to add the following tasks to the project.

          o  Task 40, line 2, duration 15, title "Manufacturing" - add
             this task after task 25, and before milestone 30.
          o  Task 50, line 3, duration 30, title "Programming" - add this
             task after task 20, and before milestone 30.
          o  Task 60, line 4, duration 33, title "Marketing" - add this
             task after task 20, and before milestone 30.
          o  Task 70, line 5, duration 20, title "Testing" - add this task
             after task 25, and before milestone 30.

          The project should appear as in Figure 5.

          At this point, save the project so the work doesn't get lost.

          To move lines 5 and 6 so that they are after line 2, and ahead
          of the present line 3, execute \+Display+Move_lines.


          20

 






          When prompted respond as follows;

             Move From Line = "5"
             Thru Line = "6"
             To Line = "3"

          The whole command sequence will be repeated for verification.
          Type ENTER to proceed, or "n" to abort. The lines should now be
          re-ordered as in Figure 6.






























                                                                        21

 






Figure 5: Tasks Added
                                                             MainLine Rev 1.4
               .----------------------+---------------------+------------------.
               |_____Mar '92__________|___ Apr '92 _________|___ May '92 ______|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
Date:16-Mar-92 |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
.--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
|Blank       1 |Start    .    .    .    .    .    .    .    .    .    .    .   |
|              |*   .    .    .    .    .    .    .    .    .    .    .    .   |
|              | 10 .    .    .    .    .    .    .    .    .    .    .    .   |
|            2 | Define  . Develop .    .    . Manufacturing.    .    .    .   |
|              | =========^===================^--------------^   .    .    .   |
|              |  20.    .  25.    .    .    .  40.    .    .    .    .    .   |
|            3 |    .    . Programming  .    .    .    .    .    .    .    .   |
|              |    .    . -----------------------------^   .    .    .    .   |
|              |    .    .  50.    .    .    .    .    .    .    .    .    .   |
|            4 |    .    . Marketing    .    .    .    .    .    .    .    .   |
|              |    .    . --------------------------------^.    .    .    .   |
|              |    .    .  60.    .    .    .    .    .    .    .    .    .   |
|            5 |    .    .    .    .    .    . Testing .    .    .    .    .   |
|              |    .    .    .    .    .    . ===================^   .    .   |
|              |    .    .    .    .    .    .  70.    .    .    .    .    .   |
|            6 |    .    .    .    .    .    .    .    .    .    .End .    .   |
|              |    .    .    .    .    .    .    .    .    .    .*   .    .   |
|              |    .    .    .    .    .    .    .    .    .    . 30 .    .   |
`--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
               |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
               |     Mar '92          |    Apr '92          |    May '92       |
               `----------------------+---------------------+------------------'







          22

 






Figure 6: Moved Lines
                                                             MainLine Rev 1.4
               .----------------------+---------------------+------------------.
               |_____Mar '92__________|___ Apr '92 _________|___ May '92 ______|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
Date:16-Mar-92 |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
.--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
|Blank       1 |Start    .    .    .    .    .    .    .    .    .    .    .   |
|              |*   .    .    .    .    .    .    .    .    .    .    .    .   |
|              | 10 .    .    .    .    .    .    .    .    .    .    .    .   |
|            2 | Define  . Develop .    .    . Manufacturing.    .    .    .   |
|              | =========^===================^--------------^   .    .    .   |
|              |  20.    .  25.    .    .    .  40.    .    .    .    .    .   |
|            3 |    .    .    .    .    .    . Testing .    .    .    .    .   |
|              |    .    .    .    .    .    . ===================^   .    .   |
|              |    .    .    .    .    .    .  70.    .    .    .    .    .   |
|            4 |    .    .    .    .    .    .    .    .    .    .End .    .   |
|              |    .    .    .    .    .    .    .    .    .    .*   .    .   |
|              |    .    .    .    .    .    .    .    .    .    . 30 .    .   |
|            5 |    .    . Programming  .    .    .    .    .    .    .    .   |
|              |    .    . -----------------------------^   .    .    .    .   |
|              |    .    .  50.    .    .    .    .    .    .    .    .    .   |
|            6 |    .    . Marketing    .    .    .    .    .    .    .    .   |
|              |    .    . --------------------------------^.    .    .    .   |
|              |    .    .  60.    .    .    .    .    .    .    .    .    .   |
`--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
               |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
               |     Mar '92          |    Apr '92          |    May '92       |
               `----------------------+---------------------+------------------'







                                                                        23

 






          4.4  Deleting A Task

          Deleting a task is very straightforward.

          Execute \+Tasks+Delete, and when prompted enter the ID of the
          task or milestone to be deleted.

          In some instances it may not be appropriate to delete a task,
          and the DELETE will be automatically aborted. This can occur
          if deleting the Task would make it impossible to calculate the
          Critical Path.

          How It Works

          The critical path is automatically calculated between a speci-
          fied "Start" milestone and a specified "Finish" milestone.

          These two milestones are selected by the user. Call up the task
          data sheet and you will notice that there is a field called
          "Type". Tasks and Milestones are identified here by "t" and "m"
          respectively.

          The "S" (Start) milestone is fixed for any one project. Any
          one milestone may be assigned as the "F" (Finish) Milestone.

          The Critical path is calculated between the Start and Finish
          milestones.

          Requirements

          The only requirement is that there be a logical "path" between
          the Start and Finish milestones. An interesting result of this
          is that you may have other tasks/milestones which originate or
          terminate "in space" - no path leading directly from or to the
          Start and Finish dates. This is acceptable, and in many cases
          reflects real life. (Many other Project Management tools require
          that all tasks are connected together and that there are no
          "loose ends".)

          24

 






          Moving the End Points Around

          The "Blank" project starts with exactly one Start and one Finish
          Task assigned.

          To "move" the Finish designation around, for What-If purposes,
          you may temporarily append the Finish characteristic to more
          than one milestone, then remove the superfluous one.
          Any edits which even temporarily result in having no Finish
          milestone will be rejected.

          If at any point there is more than one Start or Finish mile-
          stone, the critical path calculations may be wrong. This will be
          corrected once there are no superfluous Starts and Finishes.

























                                                                        25

 






          4.5  Adding Descriptions to Groups of Tasks

          It is helpful to add comments to groups of tasks or milestones.
          Comment fields may be added in the left hand field of the dis-
          play. There are two comment fields, called Head1 and Head2.

          Call up the DEMO project. Edit task #20 ("Define") so that the
          Head1 field contains "Project 1" and the Head2 Field contains "-
          Hardware". Edit Task 50 ("Programming") so that the Head2 Field
          contains "- Software". Finally, edit Task 60 ("Marketing") so
          that the Head2 field contains "- Other"

          The schedule should now look like Figure 7.

          When 2 or more Tasks or milestones on the same line both have
          entries in their Head1 or Head2 fields, the Heads from one
          task/milestone are arbitrarily selected for display.

          4.6  Adding A Date and Labels to The Display

          A Date field, and user-defined Labels, are displayed in the
          upper left-hand corner of the display. There are 4 Labels, each
          15 characters long.

          The Date field is assigned or updated whenever the project is
          Stored.
          The Label fields are set by the user using the commands \+Dis-
          play+Labels

          A menu will be presented to enter new Labels or to change the
          existing ones.








          26

 






Figure 7: Adding Comments
                                                             MainLine Rev 1.4
               .----------------------+---------------------+------------------.
               |_____Mar '92__________|___ Apr '92 _________|___ May '92 ______|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
Date:16-Mar-92 |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
.--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
|Blank       1 |Start    .    .    .    .    .    .    .    .    .    .    .   |
|              |*   .    .    .    .    .    .    .    .    .    .    .    .   |
|              | 10 .    .    .    .    .    .    .    .    .    .    .    .   |
|Project 1   2 | Define  . Develop .    .    . Manufacturing.    .    .    .   |
| - Hardware   | =========^===================^--------------^   .    .    .   |
|              |  20.    .  25.    .    .    .  40.    .    .    .    .    .   |
|            3 |    .    .    .    .    .    . Testing .    .    .    .    .   |
|              |    .    .    .    .    .    . ===================^   .    .   |
|              |    .    .    .    .    .    .  70.    .    .    .    .    .   |
|            4 |    .    .    .    .    .    .    .    .    .    .End .    .   |
|              |    .    .    .    .    .    .    .    .    .    .*   .    .   |
|              |    .    .    .    .    .    .    .    .    .    . 30 .    .   |
|            5 |    .    . Programming  .    .    .    .    .    .    .    .   |
| - Software   |    .    . -----------------------------^   .    .    .    .   |
|              |    .    .  50.    .    .    .    .    .    .    .    .    .   |
|            6 |    .    . Marketing    .    .    .    .    .    .    .    .   |
| - Other      |    .    . --------------------------------^.    .    .    .   |
|              |    .    .  60.    .    .    .    .    .    .    .    .    .   |
`--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
               |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
               |     Mar '92          |    Apr '92          |    May '92       |
               `----------------------+---------------------+------------------'







                                                                        27

 






Figure 8: Date and Label Fields
                                                             MainLine Rev 1.4
Label 1        .----------------------+---------------------+------------------.
Label 2        |_____Mar '92__________|___ Apr '92 _________|___ May '92 ______|
Label 3        |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
Label 4        |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
Date:16-Mar-92 |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
.--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
|Blank       1 |Start    .    .    .    .    .    .    .    .    .    .    .   |
|              |*   .    .    .    .    .    .    .    .    .    .    .    .   |
|              | 10 .    .    .    .    .    .    .    .    .    .    .    .   |
|Project 1   2 | Define  . Develop .    .    . Manufacturing.    .    .    .   |
| - Hardware   | =========^===================^--------------^   .    .    .   |
|              |  20.    .  25.    .    .    .  40.    .    .    .    .    .   |
|            3 |    .    .    .    .    .    . Testing .    .    .    .    .   |
|              |    .    .    .    .    .    . ===================^   .    .   |
|              |    .    .    .    .    .    .  70.    .    .    .    .    .   |
|            4 |    .    .    .    .    .    .    .    .    .    .End .    .   |
|              |    .    .    .    .    .    .    .    .    .    .*   .    .   |
|              |    .    .    .    .    .    .    .    .    .    . 30 .    .   |
|            5 |    .    . Programming  .    .    .    .    .    .    .    .   |
| - Software   |    .    . -----------------------------^   .    .    .    .   |
|              |    .    .  50.    .    .    .    .    .    .    .    .    .   |
|            6 |    .    . Marketing    .    .    .    .    .    .    .    .   |
| - Other      |    .    . --------------------------------^.    .    .    .   |
|              |    .    .  60.    .    .    .    .    .    .    .    .    .   |
`--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
               |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
               |     Mar '92          |    Apr '92          |    May '92       |
               `----------------------+---------------------+------------------'







          28

 






          4.7  Locating Tasks - The "Search" Function

          Features are included to make it easy to locate a particular
          task. This becomes necessary as a project grows.

          You can search through the entire project for one or more
          tasks having a particular Title or Descriptive field. Enter
          \+Task+Search and you will be prompted to search by Title,
          Head1, or Head2. Enter a word or phrase, and all tasks will be
          sequentially displayed that match the entry. "Near misses" will
          be accepted - i.e. if "Des" is entered, tasks or milestones hav-
          ing Titles of "Design", "Destination",and "Oldest" would all be
          located. (The search ignores the case of characters). This can
          be very helpful when the exact title is not remembered. As each
          found task is displayed, the option is presented of stopping
          and displaying the screen holding that task, of continuing the
          search, or of quitting. If you continue to search and no further
          matching tasks are found, you have the option of displaying the
          last found match, or of quitting.

          It is also possible to locate tasks directly by ID Number (press
          CTRL-F when viewing the screen) or by going to the tasks line
          if it is known ( press "|" ).


          4.8  The Wait Function

          It is sometimes useful to specify that a task not actually start
          until some fixed time after its predecessors have completed.
          This could be accomplished by inserting a "wait" task. However,
          MainLine offers the simpler step of assigning a "wait" period
          for each task.

          In the Demo example, edit the [W]ait field of the task data
          sheet for task 40 to have a delay of 10 days. The results are
          shown below. The period of waiting is indicated by a string of
          "......" characters for tasks off the critical path, or "::::::"
          for tasks on the critical path.

                                                                        29

 






Figure 9: Using The Task Wait Function
                                                             MainLine Rev 1.4
Label 1        .----------------------+---------------------+------------------.
Label 2        |_____Mar '92__________|___ Apr '92 _________|___ May '92 ______|
Label 3        |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
Label 4        |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
Date:16-Mar-92 |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
.--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
|Blank       1 |Start    .    .    .    .    .    .    .    .    .    .    .   |
|              |*   .    .    .    .    .    .    .    .    .    .    .    .   |
|              | 10 .    .    .    .    .    .    .    .    .    .    .    .   |
|Project 1   2 | Define  . Develop .    .    .    .    . Manufacturing.    .   |
| - Hardware   | =========^===================^::::::::::==============^   .   |
|              |  20.    .  25.    .    .    .    .    .  40.    .    .    .   |
|            3 |    .    .    .    .    .    . Testing .    .    .    .    .   |
|              |    .    .    .    .    .    . -------------------^   .    .   |
|              |    .    .    .    .    .    .  70.    .    .    .    .    .   |
|            4 |    .    .    .    .    .    .    .    .    .    .    .End .   |
|              |    .    .    .    .    .    .    .    .    .    .    .*   .   |
|              |    .    .    .    .    .    .    .    .    .    .    . 30 .   |
|            5 |    .    . Programming  .    .    .    .    .    .    .    .   |
| - Software   |    .    . -----------------------------^   .    .    .    .   |
|              |    .    .  50.    .    .    .    .    .    .    .    .    .   |
|            6 |    .    . Marketing    .    .    .    .    .    .    .    .   |
| - Other      |    .    . --------------------------------^.    .    .    .   |
|              |    .    .  60.    .    .    .    .    .    .    .    .    .   |
`--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
               |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
               |     Mar '92          |    Apr '92          |    May '92       |
               `----------------------+---------------------+------------------'







          30

 




          4.9  Changing Program Configuration

          MainLine has several options for changing the appearance of the
          screen display or printed output, or for changing fundemental
          characteristics of the present project. These are accessed via
          the Global command \+Global.

          The menu shown in Figure 10 will appear. Information about the
          current project will be displayed - the project's name, and
          its date of most recent revision. Other information about how
          MainLine is currently operating is also displayed. Information
          preceeded by a letter in brackets may be changed using this
          menu.

          To change a setting, enter the bracketted letter in front of
          the setting, and then press ENTER. For some settings, a series
          of choice-prompts will follow. For others, the setting will
          automatically toggle to its only other value.

          Example - Changing The Start Date

          MainLine uses the current date as the default project start
          date. To change it, enter S followed by ENTER. When prompted for
          a new start date, enter 6-Jan-92.

          Press X followed by ENTER to leave the Global menu. The Calendar
          should be appropriately updated. When you store the project
          again, the new start date will be stored with it.

          The only restriction is that the selected date must be on a
          week-day.

          Example - Changing The Time Scale

          Projects can be displayed using either days or weeks as the ba-
          sic unit of time. When the default, days, is used, approximately
          4 1\2 months of activity may be displayed on an 80 column screen.
          (Wider screen styles, allowing longer time ranges to be dis-
          played, are described in the following material.) When a scale
          of weeks is used, approx. 7 months activity can be displayed on
          an 80 column screen.
                                                                        31

 






          On the Global menu, enter T and ENTER, and the time scale will
          automatically toggle from DAYS to WEEKS.

          When a project is stored, the time_scale in use is stored as
          part of the project. That time scale will be used when that
          project is read back in at a later time.

          Note - All Task Durations must always be entered as working-
          days, regardless of which time scale is used for displays,



Figure 10: Global Configuration Menu

.------------------------------------------------------------------------------.
!      Project                                Configuration                    !
!      ----------------------------           -----------------------          !
!            Name       : __________                Name  : __________         !
!            Rev Date   : __________            [F] File                       !
!        [S] Start Date : __________            [G] Get                        !
!                                                                              !
!      Screen                                 Printer                          !
!      ----------------------------           ---------------------            !
!        [W] Width      : ___                   [P] Print Width: ___           !
!        [C] Color/Fore : __________            [D] Display ID : ___           !
!                 /Back : __________                                           !
!        [T] Time Scale : __________                                           !
!        [I] ID Display : __________            [X] Exit                       !
!                                                                              !
!             Press Letter in [ ] To Change Function, [x] to Finish            !
!                                                                              !
!   MainLine Rev 1.4   Registered To : ____________________    Ser.No. _____   !
`------------------------------------------------------------------------------'






          32

 






          Screen Width and Color

          Black and White display, of an 80 column-wide screen, is the
          default display mechanism. However, the use of colors, and wider
          screen styles is also supported.

          Assuming your machine's graphics adapter and monitor support
          color, you may change the display colors using the Global Colors
          function [C]

          A wider time range may be displayed on the screen by changing
          the Screen Width to 105 columns using the Global Width function
          [W]. The 105 columns mode also provides about 50% more rows of
          displayed data. If your system supports VGA graphics, you will
          be prompted for a choice of Black/White display ("CGA-style"
          graphics) or full color. If your system does not support VGA
          graphics, only the Black/White CGA-style is offered.

          There are some tradeoffs to using the 105 columns-mode of screen
          display;

          o  All letters are displayed in Uppercase. (Printed outputs
             continue to use Upper and Lower case).
          o  Black/White CGA-mode runs somewhat slower than 80-columns
             mode. 105-Columns color-mode runs slower still. This is more
             noticeable on older, slower machines. On a 20 MHz 386-based
             machine, all modes run quite acceptably.












                                                                        33

 






          Other Settings

          Here is a brief description of other settings that may be se-
          lected using the Global menu. See Section 6 for more informa-
          tion.

          o  [I] : Screen ID Display - Controls (yes/no) whether task
             identifying numbers are displayed below each task.
             This allows mores lines of tasks to be displayed on the screen.
          o  [P] : Printer Size - Selects "A" size 80 column output, or
             "B" size 132 column output.
          o  [D] : Printer ID Display - Similar to Screen ID Display, but
             affects printed output only.

          Configuration_Files

          You can store the configuration so that it will be used auto-
          matically the next time MainLine is used. (This saves you from
          having to set it up every time). Pressing F and ENTER will file
          the present configuration. A default filename will be supplied
          (MainLine). Press ENTER to store the configuration as MainLine.
          You may find that there are different configurations you prefer
          to use on some occasions. You can set a different configuration,
          then store it under some other name. It can be recalled at
          a later time using the "Get" command (choice G in the Global
          Menu). The name of the configuration presently in use is always
          displayed in the Global menu.

          The configurations are stored in your directory with extension
          .cfg. You do not have to specify the extension when storing or
          loading a configuration file - that is done automatically.








          34

 






          5  Advanced Topics

          5.1  System Capabilities

          Projects of the following sizes can be handled;

          o  Up to 150 Tasks and/or Milestones.
          o  Tasks/Milestones may be displayed on up to 1000 "Lines"
          o  Dates must fall within the range of 1-Jan-1991 to 1-Jan-2000.

          Attempts to exceed these values will usually not be accepted. It
          is possible that under some circumstances the program may accept
          the value and then crash.

          5.2  Following The Critical Path

          On larger projects, it may be desirable to trace the tasks and
          milestones along the critical path. Pressing the "+" and "-"
          keys moves the display forwards or backwards in time along the
          critical path.

          5.3  The Journal File - Recovering Damaged Project Files

          It is possible that at some time the operation will be unwill-
          ingly terminated while there are edits that have not been saved.

          This may occur due to a system crash (possibly due to a power
          outage), or due to some as-yet-unknown bug in the program.
          To allow recovery from this, a "backup" or "journal" file of
          editing activity is created. Every time you leave the text
          editor, the Project File of the current project, including
          edits, is copied to the file MLJRNL.PRJ.

          To recover, copy the MLJRNL.PRJ to some random project filename
          like RECOVER.PRJ. Then start MainLine again, and read in RECOVER
          as a project. If it appears to be what you want, exit the pro-
          gram and copy RECOVER.PRJ over your original projects' .PRJ
          file.

                                                                        35

 






          5.4  Attaching Fixed Dates to Milestones

          A milestone may be entered with no predecessors, with its date
          manually entered. This is useful for indicating fixed or exter-
          nal occurrences.

          To do this, enter a milestone using the normal task addition
          procedure. When prompted for "After Task?" enter n for "none".
          Enter (or not) a "Before Task?". When the Task Editor Screen
          pops up, enter a [B]egin date for the milestone. (Note - for
          Tasks, the "none" choice is not appropriate nor is it offered.)

          Thereafter, that milestone will appear at that date, regardless
          of other tasks or milestones in the project. (You can always
          Edit that date.)

          Note - Fixed milestones which get on the critical path will
          prevent the critical path from reaching all the way back to the
          project START milestone. There is nothing wrong with this, but
          it may at first appear to be a surprising result.

          5.5  Project Rollups

          It is often desirable to summarize a group of related tasks
          as one larger effort. The Project Rollup task provides this
          function.

          A Rollup is a special type of task whose beginning and end dates
          are linked to a collected group of tasks.

          Figure 11 demonstrates this function. Task #100 is a rollup
          task. It rolls up the results of tasks 40,70, and 90. Note that
          100's start date equals the start date of task 40 (earliest
          start of the 40,70,90). Task 100's end date equals the end date
          of task 90 (latest end date of 40,70,90) Note that task 70's
          start and end lie within the min/max ranges, and so task 70 does
          not affect task 100. (Later changes in start/ends of the project
          tasks could alter this.)

          36

 






          Entering Rollup Tasks - A Rollup task is entered using the same
          process as a regular task. Enter it initially as a regular task.
          It's predecessors are the tasks it is to rollup. After entering
          the rollup task, use the TASK/EDIT function to change its TYPE
          to "R" or "r".

          Helpful Hint - On a large schedule, Rollups can be used to
          provide a concise summary of the overall project. Enter the
          whole schedule in the normal fashion. Create a page-worth of
          blank lines at the head of the schedule. Place rollups there
          which summarize the key subsections of the project.




























                                                                        37

 






Figure 11: Using Rollup Tasks
                                                             MainLine Rev 1.4
               .----------------------+---------------------+------------------.
               |_____Mar '92__________|___ Apr '92 _________|___ May '92 ______|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
Date:16-Mar-92 |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
.--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
|Blank       1 |Start    .    .    .    .    .    .    .    .    .    .    .   |
|              |*   .    .    .    .    .    .    .    .    .    .    .    .   |
|              | 10 .    .    .    .    .    .    .    .    .    .    .    .   |
|            2 |    . Rollup - 40/70/90 .    .    .    .    .    .    .    .   |
|              |    . -----------------------------^   .    .    .    .    .   |
|              |    .  100    .    .    .    .    .    .    .    .    .    .   |
|            3 | Task Task 40 . Task 50 .    .    .    .    .    .    .    .   |
|              | ====^=========^---------^   .    .    .    .    .    .    .   |
|              |  20.  40.    .  50.    .    .    .    .    .    .    .    .   |
|            4 |    .    .    . Task 90 .    .    .    .    .    .    .    .   |
|              |    .    .    . ===================^   .    .    .    .    .   |
|              |    .    .    .  90.    .    .    .    .    .    .    .    .   |
|            5 | Task 60 . Task 70 .    .    .    . Task 80 .    .    .    .   |
|              | ---------^-------------------^   . =========^   .    .    .   |
|              |  60.    .  70.    .    .    .    .  80.    .    .    .    .   |
|            6 |    .    .    .    .    .    .    .    .    .End .    .    .   |
|              |    .    .    .    .    .    .    .    .    .*   .    .    .   |
|              |    .    .    .    .    .    .    .    .    . 30 .    .    .   |
`--------------+----+----+----+----+----+----+----+----+----+----+----+----+---|
               |MTWTFMTWTFMTWTFMTWTFMT|TFMTWTFMTWTFMTWTFMTWT|MTWTFMTWTFMTWTFMTW|
               |    0    1    2    2  | 0    1    1    2    |    0    1    2   |
               |    6    3    0    7  | 3    0    7    4    |    8    5    2   |
               |     Mar '92          |    Apr '92          |    May '92       |
               `----------------------+---------------------+------------------'







          38






          5.6  Renumbering Tasks and Milestones

          As a Project is used and modified over time, it may become
          desirable to renumber tasks. Work is generally easier if related
          tasks have task numbers in the same range.

          The Renumber command;

          \+Tasks+Renumber

          allows this. You may renumber an individual task, a group of
          tasks, or all the tasks in the present project. You select
          the task(s) to be renumbered, and specify a point to start
          renumbering the tasks At. All tasks are renumbered from the
          starting point forwards. The tasks will have the same sequence
          as in the original range. They will be numbered in steps of 10.
          To prevent overlaps, or having multiple tasks with the same
          number, a few restrictions are imposed;

          o  The new range cannot overlap any tasks which aren't being
             renumbered.
          o  The new range cannot overlap the "old range" of tasks that
             are being renumbered.

          Any attempted renumberings which violate the rules are rejected.

          The rules may not seem intuitively obvious. If you experiment
          with a sample project, though, the principles will soon become
          clear.

          5.7  Copying A Group of Projects

          Very often a sequence of events (a group of tasks and mile-
          stones) will need to be entered multiple times in a project.
          This is simplified by using the Copy Tasks function. \+Tasks+Copy
          will lead to a menu to select a range of tasks for copying.
          Since each task must have a unique ID number, the menu will re-
          quest a new starting point to re-number the copied tasks to. A



                                                                        39

 






          sufficient block of blank lines is automatically inserted into
          the project following the last task to be copied. The range of
          tasks/milestones will then be copied into that area, with the
          same relationships, durations, titles and comments. It is advis-
          able, but not mandatory, to modify the titles and comments to
          make it easier to distinguish the new tasks from the old ones.

































          40

 





          5.8  Importing Projects

          It often becomes desirable to merge together projects which have
          been developed separately. This is achieved using the Import
          command;

          \+Filing+Import

          Before any two projects can be merged, it is necessary to make
          sure that the two projects do not repeat any task numbers. This
          can be done easily using the Renumber function described above.

          It is not necessary for you to change the Line Numbers which
          are used to display the tasks. The program does this for you.
          It re-numbers the "Line Number" entry for each task so that
          the imported project starts being displayed after the existing
          project. (If you don't like this order, you can always change it
          using the Move Lines command.)

          The merged projects retain the name of the project that was in
          memory when the import started.

          If the original and imported projects have different start
          dates, the earlier date is selected as the start date for the
          merged projects.

          There are cases where projects cannot be merged. The reason will
          be displayed, along with relevant numbers. The cases are;

          o  The imported project cannot have tasks numbers which overlap
             the existing project.
          o  The total number of tasks in the merged project cannot exceed
             the maximum number of tasks allowed per project (150).
          o  The total number of lines displayed cannot exceed the maximum
             displayed for any one project (1000).

          After two projects have been merged, some additional work may be
          necessary. For example, if the two projects each have their own
          Start and End milestones, it will be necessary to select single
          Start and End milestones for the new, merged, project.
                                                                        41

 






          Also, it will probably be necessary to add links between various
          tasks in the two projects - that was possibly the reason for
          merging the projects in the first place.




































          42

 






          6  Command Listing

          This section describes briefly all functions that may be ac-
          cessed by the menu-command line.

          6.1  Filing

          The following functions may be accessed by this command;

          1. Get - recall an existing project file. You will be prompted
             for a project name.
          2. Store - Save away the project file which is being worked on.
             A default is always given. If you're working on a file which
             was read-in, the old name is the default. You may store it
             under a new name if you wish.
          3. New - Restarts with the "blank" project being displayed.
          4. Import - Merge another project file with the project
             presently being worked on.

          6.2  Global

          This allows the setting of certain parameters that affect the
          overall operation of the program.

          1. Screen Width - 80 or 105 column display
          2. Color - Slect forground and background colors
          3. Screen ID - Remove the row with that has the task ID numbers.
             This results in a more compact display - more lines per
             screen or per page of printed report.
          4. Calendar Start Date - The Starting point for all dates. This
             must be a weekday.
          5. Time Scale - Select whether schedule is displayed in units
             of days or weeks. Schedule durations are always entered in
             working-days.





                                                                        43

 






          6. Printer Width- Select number of columns displayed per page in
             the Schedule report; 80 or 132 (default) columns. All other
             reports (.DAT, .RPT) are always 80 columns.

          7. Print ID - SImilar to Screen ID, but for printed output.

          6.3  Exit

          Allows exit from the program.

          6.4  Tasks

          This is the environment for changing tasks and milestones.

          1. Edit - Select an existing Task or Milestone to change its
             data.
          2. Add Task - Add one or more new tasks.
          3. Delete - Delete an existing task or milestone.
          4. Find Task - Locate an existing task by its ID number.
          5. Renumber - Change the Task Numbers for One, Some, or All
             Tasks.
          6. Copy - Duplicate a group of tasks and milestones.

          6.5  Display

          1. Add Lines - Add Blank Lines into the display.
          2. Delete Lines - remove unused lines from the display.
          3. Move Lines - Move a block of used lines up or down.
          4. Labels - Enter or change 4 label-lines on display.










          44

 






          6.6  Print

          1. Partial Schedule - Print a schedule report covering only
             the time-span presently shown on the screen. Output file =
             filename.txt
          2. All Schedule - Print a schedule report for the period cur-
             rently shown on the display through the end of the project.
             Adjacent pages of the report will need to be taped together
             to obtain a full horizontal view. Output file = filename.txt
          3. Date Report - Print a report of the start and end dates for
             all tasks and milestones. Output file = filename.dat
          4. Task Detail report - List complete information on all tasks
             and milestones in the project. Output file = filename.rpt.


























                                                                        45

 










                                     APPENDIX  A

                               QUICK-START INFORMATION


          A.1  Starting Up

          Install MAINLINE by creating a subdirectory on your Hard Disk
          such as  C:\MAINLINE and copying MAINLINE.EXE into that
          subdirectory. Set the default drive to this directory and
          decompress the files by typing MAINLINE followed by CR.
   
          The executable file is ML.EXE. To run the program, at the DOS
          prompt type ML followed by ENTER.

          A.2  Moving Around The Screen

          After a few seconds a screen will be displayed for a blank
          project.

          The calendar is displayed across the top of the screen.

          The duration of all tasks is identified with either "="'s (on
          critical path) or with "-"'s (not on critical path.) All mile-
          stones have a duration of 0 and are indicated with a "*".
          All tasks and milestones have unique identifying TASK ID num-
          bers. These are displayed on the schedule below the row of sym-
          bols (-,=, or *) indicating the duration of the task/milestone.

          The up and down arrow keys may be used to scroll the display up
          and down one task-line at a time.

          When examining the schedule, the following other controls may be
          used;

                                               Quick-Start Information  47

 





          ________________________________________________________________
          Key___________Function__________________________________________

          Down Arrow    Advance Screen One Line

          Up Arrow      Back Screen One Line

          Right         Move Forwards in time.
          Arrow

          Left Arrow    Move Backwards in Time

          PAGE DOWN     Advance to Next Screen

          PAGE UP       Go Back 1 Screen

          HOME          Move to Top-most Screen and Start of Calendar

          CTRL-T        Move to Top-most Screen

          CTRL-B        Move To Bottom-most Screen

          CTRL-L        Move Horizontally Left To Start of Calendar

          CTRL-R        Move Horizontally Right to Latest Used Date

          CTRL-F        Find Task/Milestone

          +             Follow the critical path forwards in time

          -             Follow the critical path backwards in time

          "|"           Go To A Specific Line Number

          "\"_or_"/"____Activate_Menu-Command_Line________________________





          48  Quick-Start Information







          A.3  Calling Up Commands

          Pressing "\" or "/" calls up a menu-command line which is dis-
          played at the top of the screen. The majority of commands are
          activated from this.

          One entry on the command line is highlighted. Pressing ENTER
          activates the highlighted command. That will either cause a
          command to occur or it will cause a "nested" menu to appear.

          The highlight may be moved around by either using the horizontal
          arrow keys (<- or ->) or by pressing the alphabetic key of the
          first letter of the desired command.

          Many commands include a verification step ("Do you wish to
          do this?). All commands include a confirmation message when
          complete.
          You may step backwards through the menu-command line (or exit
          from the top level) at any time by pressing backspace.


          A.4  Basics of Editing and Generating Reports

          Existing Tasks and Milestones are edited by activating the
          menu-command line and selecting "Tasks" followed by "Edit".
          A data sheet will appear listing all current data on the task
          or milestone. Individual entries are selected by pressing the
          code-letter in front of the data field on the sheet - i.e. "d"
          for "duration", "c" for "description, etc. When done, enter "x"
          to exit the data-editor with changes, or "q" to quit without
          implementing the changes.

          New Tasks and Milestones may be added by using the menu-command
          to select "Tasks" followed by "add task". You will be prompted
          for basic information about the task/milestone, and then the
          data sheet will appear.

          Similarly, tasks may be deleted using "Tasks" followed by
          "Delete". Deletions which make it impossible to calculate the
          critical path are not accepted.
                                               Quick-Start Information  49

 






          A.5  Notes on Dates and Calculations

          o  Each project must contain one milestone designated as the
             "Start" of the Critical Path, and another designated as
             the "Finish". These selections are made with the data-sheet
             editor by entering "s" and "f" respectively in the "Type"
             field for those milestones.

          o  There must be a logical path of tasks and milestones between
             the Start and Finish milestones. There may be tasks and
             milestones which are partially or completely disconnected
             ("hanging or ending in space"), but there must be a set
             of tasks and milestones connecting the Start and Finish
             together.

          o  Only work-weekdays are used. Weekend-days, if entered, are
             rejected.






















          50  Quick-Start Information

 










                                     APPENDIX  B

                              SELECTING OUTPUT FORMATS


          A principal function of MainLine is to generate compact schedule
          reports suitable for viewing on screens, mailing, hardcopy, or
          making viewgraphs for use in presentations.

          The schedule is a TEXT file which can be mailed, or printed in
          a variety of ways. A schedule printed on 8.5"x11" paper can be
          made into a viewgraph or transparency suitable for presenta-
          tions. Use the Global command to select whether the output is
          80 or 132 columns wide. A schedule that is 132 columns wide can
          be printed on 11"x14.5" paper and reduced on a photocopier onto
          8.5"x11" paper. Many printers provide a LANDSCAPE option which
          allows a schedule 132 columns wide to be printed directly on
          8.5"x11" paper.

















                                              Selecting Output Formats  51

 










                                     APPENDIX  C

                                       SERVICE


          Registered users are provided service for this program.

          Telphone service is provided at (617)489-5639

          Additionally, limited service is provided on the COMPUSERVE
          network at user ID 70214,210
























                                                               Service  53
```
{% endraw %}

## ORDER.TXT

{% raw %}
```

                             Order Form
                             ----------
      Fill in the information below, and mail with a check or money order
      for $59.95 to
                       Minuteman Systems
                       P.O. Box 152
                       Belmont, MA. 02178

                       Service Telephone (617)489-5639

      You will receive a printed and bound manual, telephone support,
      free updates for one year, and a personalized diskette.

      Name ___________________________________________________________
      Address ______________________________________Apt\MailStop______
      City/Town ___________________________ State_____ ZipCode________
      Telephone -  Business:_________________  Home:__________________

      Media :  _______ 5.25" floppy   ______  3.5" micro-floppy

      How did you obtain this program?
      --------------------------------
      Service/BBS : Compuserve __  Delphi __  Prodigy __
                    Other BBS _________________________________________
      Shareware Vendor :  Name ________________________________________
      Other : _________________________________________________________

      Incentive Referral : List here one registered user who referred this
                           program to you and they will receive $10.00.

      Name ___________________________________________________________
      Address ______________________________________Apt\MailStop______
      City/Town ___________________________ State_____ ZipCode________
      Telephone -  Business:_________________  Home:__________________


      Comments
      ------------------
      Please describe here what you like about MainLine, what you would
      like to see improved, additional features you would like to see,
      or make any other comments;





```
{% endraw %}

## VENDOR.DOC

{% raw %}
```


                      INFORMATION FOR DISK VENDORS


PROGRAM NAME : MainLine
VERSION : 1.4
ISSUE DATE : July, 1992
PUBLISHER : Minuteman Systems, PO Box 152, Belmont, MA, 02178
            (617)489-5639. Compuserve ID 70214,210

PREFERRED POSTING NAME : MAINLINE.EXE (or .ZIP or .ARC)
SYSTEM REQUIREMENTS : IBMPC or compatible w/360K memory and Hard Disk.
                      DOS v2.1 or later.

REGISTRATION FEE : $59.95

REGISTERED USERS GET:

[X] Current Version          [X] Printed, Bound Manual
[X] 1 year Free Updates      [X] Free Telephone Support
[ ]                          [ ]

SHORT DESCRIPTION: Project Management Software with unique and compact reports
of presentation quality. Many features to simplify work on large projects.

DESCRIPTION: (Also See README.1ST File)

Project Management tool. Interactive WYSIWYG graphical development of project
Gantt/Pert chart. Very easy data entry. Handles up to 150 tasks and milestones,
over a 5 year duration. Many features to ease working on larger projects.
Unique, compact text output is directly suitable for presentations (via
"Viewgraphs" or transparencies). Output is also compatible with electronic mail
and examination via standard word processors.

KEYWORDS: Project, Management, Schedule, Gantt, Pert, Tracking

CONDITIONS:

MainLine is copyrighted software. The following must be observed when
distributing the program:

        1)  The program, documentation, and other supplied files
            must be distributed in whole and unmodified in any way.

        2)  The vendor's distribution fee is not to exceed $10.00.

        3)  The Shareware concept is to be explained in a clear manner.

        4)  The vendor will promptly update inventory when a new
            release of MainLine is sent.

        5)  The vendor will stop distributing the program upon receipt
            of written notification from Minuteman Systems.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3277

     Volume in drive A has no label
     Directory of A:\

    MAINLINE EXE    165841   7-01-92  12:10p
    PACKING  LST       641   1-04-80   1:17a
    INSTALL  TXT      1827   7-01-92  12:07p
    INSTALL  BAT       494   6-25-92   8:25a
    README   1ST      2491   6-25-92  12:52p
    ORDER    TXT      1889   6-25-92  12:54p
    VENDOR   DOC      1963   6-29-92  10:07a
    MAINLINE DOC     90983   6-25-92   5:07p
    SHOW     EXE      2040   9-12-88  10:48a
    GO       BAT        70  11-13-92   9:26a
           10 file(s)     268239 bytes
                           51200 bytes free
