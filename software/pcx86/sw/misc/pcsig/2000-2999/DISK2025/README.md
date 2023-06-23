---
layout: page
title: "PC-SIG Diskette Library (Disk #2025)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2025/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2025"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GRADES"

    GRADES is a very simple database designed to track school grades.  It is
    primarily for students who want to keep track of all the courses they
    have taken and pertinent data for each class.  This information includes
    the class name, section name, course number, teacher name, amount of
    credits, test scores, and grade.  Using the test score information you
    can predict the grade, and even see how a grade curve would effect your
    grade.  This makes it very easy to determine one's current standing in a
    class.  Allowing the program to decide the most likely grade, you can
    then see how this grade affects the overall GPA.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COMMENTS.DOC

{% raw %}
```
------------------------------------------------------------------------------  
           SupremeSoft is very interested in learning what you think about our 
new interface. We would appreciate your responses to the answers below, and 
any other comments you may wish to make.

             Thank You for your help and interest!
------------------------------------------------------------------------------

1)  Is the Menu easy to Understand?          [  ] Yes          [  ] No

2)  Were Key assignments logical?            [  ] Yes          [  ] No
   (E.g. Tab to move to different areas)

3)  Was the placement of prompts and         [  ] Yes          [  ] No
     windows correct? (E.g. They did not
     block your view of important data)

4)  Did you like the default colors?         [  ] Yes          [  ] No

5)  Was the on-line Help sufficient?         [  ] Yes          [  ] No

6)  Was the mini-Help line of any use?       [  ] Yes          [  ] No

7)  How long did it take you to learn the     ____________________________
     interface?                               

8)  How long did it take you to become
     productive using the interface?          ____________________________


9) Please include any other comments you may have in the space below:

 _________________________________________________________________________

 _________________________________________________________________________

 _________________________________________________________________________

 _________________________________________________________________________

 _________________________________________________________________________

 
         Thank you for completing this Questionnaire. We will be reporting
the results in our annual newsletter.



    Finally, would you like to receive more information on SupremeSoft's 
products?                          
                            [  ] Yes I would         [  ] No thanks 
   
       

      Return to:    SupremeSoft          
                    105 Deerfield Drive
                    Easton, CT 06612 

         or include with Registration 

```
{% endraw %}

## FILE2025.TXT

{% raw %}
```
Disk No: 2025                                                           
Disk Title: Grades                                                      
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Grades                                                   
Author Version: 2.7                                                     
Author Registration: $20.00                                             
Special Requirements: None.                                             
                                                                        
GRADES is a very simple database designed to track school grades.  It is
primarily for students who want to keep track of all the courses they   
have taken and the grades they've earned in each.  It can be used to    
calculate GPA and even to predict GPA based on receiving certain grades.
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
-------------------------------------------------------------------------
         Files included in the Grades v2.70 package
-------------------------------------------------------------------------


GO.BAT              -    Batch file to run first.
GRADES27.EXE        -    The Grades program itself.
CONFIG.EXE          -    The Configuration program.
INSTALL.EXE         -    The Installation program.
COLOR.EXE           -    Transfers colors from GRADES26.EXE to GRADES27.EXE.
README.COM          -    Read this for information.
CURVE.COM           -    A file about the Grading Curve.
SCHOOLS.COM         -    Information about different versions of Grades.
MANUAL.DOC          -    The complete 25 page Manual.
UPDATE.DOC          -    The update manual for v2.70.
COMMENTS.DOC        -    A form for comments on the Interface.
HISTORY.DOC         -    Short history of Grades.
ORDER.DOC           -    Quick order form for Grades.
PRODUCTS.TXT        -    Other products from SupremeSoft. 
SASK.DOC            -    Documentation for SupremeAsk.
SASK.EXE            -    SupremeAsk program.
WHATS.NEW           -    A listing of new or improved features.

  And of course this file....

```
{% endraw %}

## HISTORY.DOC

{% raw %}
```
--------------------------------------------------------------------------
                     Grades History Notes: 
--------------------------------------------------------------------------

             July 1987:   Grades v1.00 is given to  "friends" 
              
          January 1988:   Grades is updated to v1.50. 
              
              May 1988:   Grades is updated to v2.00.
                                                           
             July 1988:   After Beta testing, Grades v2.00 is 
                          "officially" released. 
                                             
          October 1988:   Grades v2.01 is released to  REGISTERED user's. 

         November 1988:   Grades v2.02 is released for those "strange" 
                          user's. 
              
             March 1989:  Grades v2.50 is "officially" released.
                                                                
            April, 1989:  Grades v2.51 "maintenance" release. Fixed 
                          some Bugs from v2.50. 

              June,1989:  Grades v2.60 is finally completed after five months.

             July, 1989:  Grades v2.60 is Beta Tested.
                                                                
           August, 1989:  Grades v2.60 is officially released. 
                          Includes a  completely new user interface 
                          and Test Score ability. 

          January, 1990:  Grades v2.70 is Beta Tested.

             July, 1990:  Grades v2.70 is released.
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```

                       Grades (tm)
                      Version 2.70

                  The future has arrived.


             Copyright (c) 1987-1989  by Manu Singh
             Copyright (c) 1989-1990  by SupremeSoft (tm)

                      All Rights Reserved.
                   Released July 01, 1990


                   Topics in this Manual:

       1......Introduction to Grades........................2
       2 .....Program Requirements..........................3
       3......Configuring Grades............................3
       4......Starting Grades...............................5
       5......The SupremeSoft Interface.....................7
       6......Data Entry Keys...............................8
       7......About Prompts.................................8
       8......Keys in the Interface.........................10
       9......In Addition...................................10
       10.....The Main Menu.................................11
       11.....The Alter database Option.....................11
       12.....Adding a New Class Option.....................12
       13.....Test Entry....................................13
       14.....Adding a Few Classes Option...................13
       15.....Deleting a Class Option.......................14
       16.....Searching for a Class.........................14
       17.....Change View Option............................15
       18.....Edit a Class Option...........................16
       19.....Load a New File Option........................16
       20.....Printing Option...............................17
       21.....Help Option...................................18
       22.....Quit Option...................................18
       23.....The View Screen...............................18
       24.....Test Score Screen.............................20
       25.....Converting Data Files.........................22
       26.....Error Messages................................23
       27.....File Related Error Messages...................24
       28.....Printer Related Error Messages................25
       26.....Grade Point Average Calculation...............26
       29.....Grade Prediction Analysis.....................27
       30.....The Curve Prediction..........................28
       31.....Registering...................................29
       32.....Things of interest............................30
       33.....Warranty Information..........................30
       34.....Notes on Program Size.........................31
       35.....About SupremeSoft.............................31











Grades Version 2.70                        1           



                              Grades
                           Version 2.70

                       Continuing a tradition.



            Grades  is  a   database,    for...grades.   This  program
       is  primarily intended for  students  who wish to   keep  track
       of  all their academic achievements.  The program allows you to
       keep  track  of  all relevant  course  information,   including
       course numbers,  and grades. An added feature is the ability to
       include   Test  Scores  and  Dates  along  with   other   class
       information. With this, you can ask the program to predict your
       Grade in a course based  on the currently entered Test  Scores.
       In addition,   the  program  will  calculate your  Grade  Point
       Average.    You  can  change  any information recorded  in  the
       database  so  that you may substitute a <?> for the grade if it
       is unknown at the present time.

            With  the Grade Predictor (tm) Feature,  you can   foresee
       what your Grade  in a course will be,  and also be able to find
       out how much effort you still need to put into a class.   Armed
       with the Grade Prediction, you can then see how your  projected
       Grade will affect  your G.P.A.   In a matter  of seconds,   you
       will find  out whether  your  parents will  be proud,  or  will
       lecture.

            The interface used in  Grades is the standard  SupremeSoft
       interface used in all of our products. You will find that  Help
       is always available, and is  quite extensive. This should  help
       make learning the interface effortless  and you will find  that
       you can use the program to its fullest capabilities in a matter
       of a few minutes.


























Grades Version 2.70                        2           


    Program Requirements:

          The  following  is  the  MINIMUM  necessary  to  run  Grades
       version 2.70:

             IBM PC/PCjr/XT/AT/386 or 90% clone.
             Monochrome Display Capability.
             One Floppy Disk Drive.
             100K of free memory.


        This is what we SUGGEST you have:

             IBM PC/PCjr/XT/AT/386 or 90% clone.
             Color Display Capability.
             Hard Disk Drive.
             256K of free memory.


        Grades will run in most Multitasking Operating systems such as
       Desqview (tm) and TopView (tm).



    Configuring Grades:

            You  may  change any of  the default colors  to colors  of
       your own choice, including the Context-Sensitive Help colors.

            In addition you  may modify  any of  the following  Window
       features: Exploding    Windows,  Shadowed  Windows,  and  Sound
       capabilities to the program. these are all easily disabled.

            There   is NO    configuration   file.   Instead  all  the
       information  is  in the GRADES27.EXE  program itself. For  this
       reason, do  NOT rename  the program file if you  wish  to   re-
       configure the program.


             Use the supplied CONFIG.EXE to  change the default colors
       and Window Features.  The program is self-explanatory, but some
       information will be provided here.

             Use  the  Cursor Up/Down keys to move the  highlight  bar
       around.   Use  <Enter>   to change  the  currently  highlighted
       selection. If it  is a  color option,   a   color  map will  be
       displayed.   Use the Cursor keys to move the small  rectangular
       box around to the new color you desire and then press  <Enter>.
       Press <Esc> to abort any changes.












Grades Version 2.70                        3           


             Pressing  <Esc>  while moving the bar around will  choose
       the "Quit" option.  This will NOT save your modifications!   To
       save the modifications, choose  "Save and Quit".


       Notes:

          Do not change the Default  Curve Percentage unless you  have
       read the information in CURVE.COM and know what you are  doing.
       The default value should be correct for the majority of users.

          If  you  have a Monochrome  Monitor system,   you may  still
       use CONFIG to change  the color hues.   We use a Color  Mapping
       system to  produce highlights and other types of visual display
       aids for   the colors you  select.  CONFIG  will display  these
       changes for the color's you pick.

         If  you have a Composite color system,  you should experiment
       with  different   color  types  as most combinations   do   not
       display correctly on such a system.

         Toggling the Sound off will turn off the sound COMPLETELY. If
       you turn it on,  not only will exploding windows  explode  with
       sound, but error messages will be accompanied by a short beep.

         If you receive  a "Error  Reading EXE File"   this  indicates
       that    the   configuration    program   could  not   find/open
       GRADES27.EXE.  Make sure you have not renamed the file, or  set
       the ReadOnly bit.
































Grades Version 2.70                        4           


     Starting Grades:


          The program's calling syntax is as follows:

                   GRADES27 [filename.ext]

          The   filename.ext  is  completely  optional.   If  none  is
       specified, CLASS27 will be used.

          You may include  an Environment Variable  to let Grade  know
       where it should look  for itself and  for the default  start-up
       file. You should  include this statement  in your  AUTOEXEC.BAT
       file. The following is the syntax you should use:

             Set Grades=[Drive]:[Directory]\

           Ideally you would want to set this as follows:

                 Set Grades=C:\Grades\

       This implies that  you are using  a Hard Disk  as C: drive  and
       have installed  Grades  in  its own  directory  called  GRADES.
       Please refer to your DOS manual for further information.


          When  you first start Grades,  you will be shown an  initial
       welcome screen,  which informs you of the limited license,  and
       gives you the address for Registrations.

          If  you  have one of the Registered versions,  you  will  be
       shown  a different  welcome screen which will not remain for as
       long as in the Shareware versions.




























Grades Version 2.70                        5           

          After this screen removes itself,  the Menu will appear. The
       screen will look as follows:

 ----------------------------------------------------------------------------
 |                             Main Menu Options                            |
 ----------------------------------------------------------------------------
 |                                                                          |
 |                                                                          |
 |                                                                          |
 |                      Class Information Display Area                      |
 |                                                                          |
 |                                                                          |
 |                                                                          |
 |                                                                          |
 |                                                                          |
 |                                                                          |
 ----------------------------------------------------------------------------
 |                                                                          |
 |                  Grade Point Average Calculation Area                    |
 |                                                                          |
 -----------------------------------------------------------------------------

    Help is always displayed in this area. Check it any time you need Help

          The Grade Point Average is constantly updated as you use the
       program,  and it is correct at any given point in the program's
       operations.  At times you may see "An attempt at computing  the
       G.P.A.  has failed!!". This is because you either have no class
       records, or no recorded Grades for any of the classes. Once you
       add classes, and grades, this will be cleared and replaced with
       the G.P.A.































Grades Version 2.70                        6           


    The SupremeSoft Interface:

          As you can tell from the above diagram, your monitor display
       is  split  into three parts.  One being the menu,   the  bigger
       screen  being the "View Screen"   where classes are  displayed,
       and finally an area for the Grade Point Calculation.

          There  are  four additional areas which will come  up   from
       time to time and they are shown as follows:

 ----------------------------------------------------------------------------
 |                             Main Menu Options                            |
 ----------------------------------------------------------------------------
 |                                                      ===================||
 |                                                      ||                 ||
 |                                                      ||                 ||
 |                                                      ||                 ||
 |                                                      ||   Window #2     ||
 |                    ==============================    ||                 ||
 |                    ||       Window #1          ||    ||                 ||
 |                    ==============================    ||=================||
 |==========================================================================|
 ||                                                    ||    Window #4     ||
 ||                                                    ||                  ||
 ||                            Window #3               ====================||
 ||                                                                        ||
 ||                                                                        ||
 ============================================================================
    Help is always displayed in this area. Check it any time you need Help

         Window #1 is the Error and Confirmation window.  You will see
       it   appear  if  any  non-fatal  error  occurs,   or  if   your
       confirmation is needed  for a  task to  complete. For  example,
       when you Delete a class you are asked for confirmation.

         Window  #2  is the Data Entry window.  This is where you will
       ALWAYS enter/edit any information for a class. The prompts will
       always be in the same order.

         Window #3  is the Test Score screen which overlays the  Grade
       Point  Average  display.  All the recorded Test scores for  the
       current class will be displayed here.  You will also be able to
       scroll through the Tests using the  cursor keys,  and then Edit
       the highlighted class. Which brings us to the last window...

         Window #4 is ALWAYS the Test Data Entry window. Here is where
       you will enter/edit the recorded information for a Test.














Grades Version 2.70                        7           


          Part  of the beauty of the SupremeSoft interface is the  use
       of consistent Data  Entry keys.  These keys  are ALWAYS  active
       when you  are asked  for a  Numeric/String entry.  However,  it
       should be pointed  out   that  at  some prompts,  only  certain
       strings  or numbers may be accepted.


             <Esc> or <Ctrl-Break>     Abort the Entry.
             <Ctrl-D>                  Move Right one Character.
             <Ctrl-S>                  Move Left one Character.
             <Ctrl-Left> or <Ctrl-A>   Move Left one Word.
             <Ctrl-Right> or <Ctrl-F>  Move Right one Word.
             <Ctrl-G>                  Delete character at cursor.
             <Ctrl-Q><Y>               Delete to End of Line.
             <Ctrl-Y> or <Ctrl-X>      Delete Line.
             <Ctrl-R> or <Ctrl-Q><L>   Restore Line.

         Note:   All the cursor keys are available as well and act  as
       they  should.   E.g.   Cursor  Right will move  you  right  one
       character.



    About Prompts:

           Grades uses "Tabbed" Data Entry forms allowing the user  to
       move to any  other prompt at  will. You may  use the  following
       keys at any prompt:

             <Up>, <Shift-Tab>        Moves you to the previous
                                      prompt. If you are at the
                                      first prompt, you are moved
                                      to the last prompt.
                                      Changes are NOT kept.

             <Down>, <Tab>            Moves to the next prompt. If
                                      you are the last prompt, you
                                      are moved to the first prompt.
                                      Changes are NOT kept.

             <Enter>                  Accepts any changes made and
                                      moves you to the next prompt.
                                      At the last prompt it also
                                      exits the current input
                                      session.

              <F10>                   Accepts any changes made, and
                                      exits the current input session.













Grades Version 2.70                        8           

        Note:  You will not exit the current input session unless  you
       are at the  last prompt and  press <Enter>, or  use <F10>.  For
       example:

                Prompt 1) Enter Your Name
                Prompt 2) Enter Your Age

           If you press <Enter> at prompt 1) you move to prompt 2).
           If you press <Enter> at prompt 2) this will save the
           changes and end the input session.
           If you press <F10> at either prompt this will save the
           changes and end the input session.


           When you  are at  the last  prompt, pressing  <Enter>  will
       cause any changes to be saved,  and for you to end the  current
       input session. Any changes made  during that input session  are
       then updated on disk.

           If you press <F10> at ANY prompt, it will save the  changes
       for current  prompt AND  exit the  current input  session.  Any
       changes made during the input session are then updated on disk.

           Pressing <Esc> at ANY prompt  will abort the current  input
       session making NO changes.



           Certain prompts will display a default response which  will
       be used if you press the <Enter>  key. Therefore, "Confirm Quit
       (Y/N)  [N]" indicates you may only press: <Y>, <y>,  <N>,  <n>,
       <Enter>.  No other keys are accepted. Pressing <Enter>  is  the
       same as responding <N> or <n>.

           If you input an invalid entry, the program will either Beep
       at you,  or display "Invalid number". Naturally,  you MAY enter
       in numbers for a string entry, but NOT vice versa.

























Grades Version 2.70                        9           



     Keys used in the Interface:

            There is a small collection of keys which work universally
       in the interface and they are as follows:

             <F1>            Displays Help.
             <Tab>, <F10>    Switches to Previous Screen Location.
             <F6>            Moves to Next Screen Location.
             <Del>           Delete Highlighted Item.
             <Enter>         Edit Highlighted Item.
             <Cursor Down>   Highlights next Item if possible.
             <Cursor Up>     Highlights previous Item if possible.
             <Page Down>     Moves to next display page if possible.
             <Page Up>       Moves to previous display page if possible.
             <Home>          Moves to First display page.
             <End>           Moves to Last display page.
             <Esc>           Aborts current operation and returns to
                             previous operation.

       Note 1:  The Screen Location  means either the View Screen, the
       Test Score Screen, or the Main Menu.

       Note 2:  The <Esc>  key will Abort whatever you are  doing  and
       return  to  the  location  from where  you  chose  the  current
       operation.  E.g.  It will back you up  one operation,  aborting
       the current one.


           Finally,   anything which can be done at the Main Menu  can
       also be done within the View Screen.  This makes it  convenient
       for both the "power"  user and the "novice" user.  You may move
       to the Main Menu for any of  the functions,  or remain  in  the
       View Screen.



























Grades Version 2.70                       10           


    The Main Menu:

          This  type  of Menu is called a "Pull Down"  Menu.   Certain
       options have more choices underneath them,  and you will notice
       this when you activate the top option.

           First,     you  should   notice  that   a  certain   letter
       is highlighted.   If  you  press this  key  (either   uppercase
       or lowercase) it will select that function.

           You  may  use  the  cursor keys to navigate  the  menu.   A
       highlight  bar will indicate the current function.  You may use
       the Cursor Right/Left keys,  and the Home, End keys.  In a sub-
       menu, you may use the Cursor Up/Down keys as well.

           As shown previously, a small Help line is displayed at  the
       bottom of the  screen.  This  will give you an idea of what the
       function does. If you need more help,  press <F1> to bring up a
       CONTEXT-SENSITIVE help screen.  Or, press <Alt-F1>  to bring up
       the Help Index.

           Pressing  <Esc>  at any time within the program will always
       back up one action. (The true meaning of <Esc>...  you "Escape"
       out  of the current area).  If you are at the Main Menu,  <Esc>
       will automatically select the QUIT option.

           Pressing  the <Tab>  key will move you into the View Screen
       Panel.  If there are no classes recorded, pressing this key has
       no effect.

           Now,   on  to the actual Options in the Main Menu and  what
       they do.



    The Alter database Option:

           Activating this option will bring up a sub-menu,   offering
       the following choices:

                         1) Add a new class.
                         2) Add a Few Classes.
                         3) Delete a Class.
                         4) Search for a Class.


            If you wish to Add only ONE class to the Database,  choose
       the First option. Otherwise, to Add more than one class, choose
       the second.












Grades Version 2.70                       11           


    Adding ONE class:

            A  window  will  pop-up  and  display  some  prompts   for
       information as follows:


           1) You will be asked for the Semester and Year.  Enter both
       of these on the same line. For example: Spring 1988 <Enter>

           2) You will  be  asked  to  enter the Class  Section  Name.
       This  is   usually  the first three  letters  of   the  course.
       Ex:   Physics is PHY.  You have up to FOUR characters for  this
       entry.    Try   to   keep   the   codes   that   your   school/
       university/college uses. If the code is MATH, then use that. If
       it's MAT then use that.


            3)  You  will be asked to enter in the Course Number.  For
       example: 331.01. The  Course Number  may be  any value  between
       0.00 and 999.99.

            4)  Next, you  will    be   asked  to enter  in the   full
       Course Name. You have up to 40 characters to do this.

            5)  You will be asked to enter the  Teacher's Name  (up to
       25   characters).

            6)  You  will be asked for the  number of Credits for  the
       course. The maximum number of Credits that you may  specify for
       a course is 9, and the minimum 1.

            7) You will be asked to enter in the Grade. You may  enter
       either up to two characters. E.g. A, A- , C  etc. or P, F, I or
       ? for Unknown.  The program will ignore the P, F, I and ?  when
       computing the G.P.A. (An "I" signifies an Incomplete Grade)

           After you press <Enter>  at the last  prompt or <F10>,  all
       additions are  saved and  you  will go  on  to the  Test  Entry
       Section described next.

           If you are unhappy with any input, use the cursor keys,  or
       the <Tab>, <Shift-Tab>  keys to  move to the  prompt where  you
       want to make modifications. (Refer to About Prompts above)

            You may press <Esc> at ANY prompt to abort the entry,  and
       you will be taken back to the Menu.















Grades Version 2.70                       12           


    Test Entry:

           In  the Shareware versions of Grades,  you may enter up  to
       eight  (8)   Test Scores.  The Registered  versions allow up to
       twenty-four (24).

           You will be prompted for the following information:

               1) The Test Date.
               2) The Score YOU received.
               3) The Total possible Score.


            You  do  NOT have to convert the score into 100%   format.
       That  is,  if you got a 40  out of 50,  answer <40>  to  prompt
       number two,  and <50> to prompt number three.  The program will
       automatically convert to 100% format for you if necessary.

            Prompt  number  three  (3)  asks for the TOTAL  number  of
       points that you COULD have received.

            The  program will cycle back to the first prompt  for  the
       next  test  score automatically.  The only exception is if  you
       have reached the Maximum amount of Test Scores  for the version
       you are running.

            Therefore,   to stop adding Test Scores before that point,
       you MUST press <Esc> at any prompt to return.



    Adding a Few Classes:

            Adding  a  few classes is exactly like adding  one  class,
       except  you will cycle back to the "Semester and Year"  prompt.
       To stop  adding classes,   press  <Esc>   at any  prompt.   The
       Semester entry from the previous  class is kept as the  default
       Semester for this new class.  Naturally you may change this  if
       you wish.






















Grades Version 2.70                       13           


     Deleting a Class:

            Choosing this option will Delete the currently Highlighted
       class.   A  window will open up asking you to  "Confirm  Delete
       (Y/N)   [N]".    The default is <N>o,  and accepting this,   or
       pressing <N> will Abort the Delete.

            Pressing <Y>  will cause the Class,  and it's Test Scores,
       to be PERMANENTLY Deleted.


     Search for a Class;

            Choosing this options will allow you to search for a class
       by its Section Name and/or Course Number as follows:

           1) Enter in the Section Name or <Enter> to match any Name.
                (This is case-insensitive... i.e. MAT = mat)

           2) Enter in the Course Number or <-1> to match any Number.

       For Example:

            1)  <Enter>
            2)  325.10

          Will highlight the first class  that has a Course Number  of
       325.10 and any Section Name.

            1) Mat
            2) -1

          Will highlight the first class that has Section Name Mat  or
       any case combination  of those  three letters,  and any  Course
       Number.

            1) PHY
            2) 432.10

          Will highlight the class  whose Section Name  is PHY or  any
       case combination  of  that,  and a  Course  Number  of  432.10.
       (Unless your school  is peculiar, there  should only one  class
       that has these values)


           If the class  is NOT  found, an error  message will  appear
       saying: "Class  was not  Found...Press <Esc>".  Press <Esc>  to
       return to the Menu.













Grades Version 2.70                       14           



   Change View:

         There  are  three possible  display formats you  can   choose
       from and   depending    on    the    viewing orientation    you
       choose,  the following information will be displayed:


          Normal View:
                      Semester (including the Year).
                      The Section Name.
                      The Course Number.
                      The Class Name.
                      The Grade.
                      The Number of Credits.

          Extended View:
                      The Class Name.
                      The Teacher's Name.
                      The Section Name.
                      The Course Number.


          Test Score View:
                      Test score Date in MM/DD/YY format.
                      YOUR score on that Test.
                      The TOTAL score possible for that Test.
                      Your 100% average for that Test.


           You will automatically be put into the View Screen starting
       at the  Highlighted position.  Please refer to the View  Screen
       section of this manual for further information.




























Grades Version 2.70                       15           


   Edit a Class:

          This  will  open  up a window (the same window as  when  you
       added the class)  and display the usual prompts. At this point,
       you may change any  information you wish. You  may move to  any
       prompt as before.

          Remember that pressing <Enter> at the last prompt will  save
       all changes.  To save  changes before  the last  prompt,  press
       <F10>.

          Pressing  <Esc>   at  ANY prompt will Abort  the  operation,
       making no changes.



   Load a New File:

          This option,  rather obviously,  allows you to load in a new
       Data  File.   If  the  file is  not  present,   it  is  created
       automatically for you.

          You may  view  a directory  listing  for the  CURRENT  disk/
       Directory if  you wish.   You  can NOT  view a  directory on  a
       different drive.

           Press <F10> or <Enter> when prompted for the file name  and
       you will see a directory listing come up with a highlight  bar.
       Move the highlight bar  to the file you  wish to use and  press
       <Enter>. The  program will  then use  that filename.  (Standard
       Editing Keys work here)

           You will  notice that  there are  some names  which have  a
       backslash at  the  end,  i.e. TEMP\.  These  are  sub-directory
       entries, and if  you press  <Enter> when the  highlight bar  is
       over one, you will move to that sub-directory.

           As usual, pressing <Esc> will  abort and bring you back  to
       the Main Menu.

          Since there is no information in a new Data File,  you  will
       not be allowed to enter the View Screen  until you Add at least
       one class.


















Grades Version 2.70                       16           



    Printing Feature:

           This  feature is only available in the Registered  versions
       of  the program.  Activating it in the Shareware versions  will
       produce an error message.

           First, make sure you have the printer turned on,  otherwise
       you  will  receive   an initial error.   Otherwise,  you   will
       be prompted "Print Database (Y/N)  [N]".  Press <Y>es to  start
       the printing, otherwise  pressing <N>o or  <Enter> will  return
       you to the Main Menu.

           The report generated will include  ALL recorded information
       including all the Test Score information, and will end with the
       Total number of Credits,  and the Computed  Grade Point Average
       as follows:

   Semester  Section Name  Number  Class Name  Teacher  Grade  Credits
      Test #    Date    Your Score    Total Possible     Average

           The Test Scores will print until there are no more recorded
       tests  and  then printing continues on to the next  class.   If
       there are no Tests recorded at all,  then printing skips on  to
       the next class.

           If a printer error occurs during the printing,  the program
       will  inform you as follows:  "Printer Error...Press <Esc>   or
       <R>".   You MUST press either <Esc> or <R>, <r>.  Pressing <R>,
       <r> will cause the program to continue printing. Pressing <Esc>
       will Abort the Printing.

            Once  printing  has  finished the  program  will  display:
       "Printing  Completed...Press <Esc>".  Press <Esc>  to  indicate
       your acceptance.



    Help:

          Choosing  this option has the same effect as pressing  <Alt-
       F1>.  It will bring up a list of all the Help Topics Available.
       Press the Cursor Keys: Up, Down, Left, Right, Home, End to move
       the Highlight Bar over the Topic you need Help on.

         Press <Esc> to return to the Menu.















Grades Version 2.70                       17           



     Quit:

          This  will  Exit the program.  A  window will  open  asking,
       "Confirm Quit (Y/N) [N]". The default is <N>o. Pressing <Enter>
       or <N> will bring you back to the Main Menu.



    The View Screen:

           Now that you have seen all the Main Menu options,  you  can
       get accustomed to the View Screen panel.  You can tell  whether
       you  are  at the Main Menu or in the View Screen by looking  at
       the  Menu itself.  If no option is Highlighted,  and the  words
       "View Screen",  just below the menu, have changed to the Menu's
       color then you are in the View Screen.

           The  first  thing  you  should notice is that  there  is  a
       Highlight Bar,  which causes one particular line of information
       to stand out.  This is the current "selected"  class which  you
       may now act upon using the following keys:


               <Enter>        :     Edits this Class.
               <Delete>       :     Deletes this Class.
               <Alt-S>        :     Switches between Display Formats.
               <Alt-F>        :     Searches for a Class.
               <Cursor Up>    :     Selects the previous class.
               <Cursor Down>  :     Selects the next class.
               <Page Up>      :     Moves to the previous page of
                                    classes, and selects  the FIRST
                                    class on that page.
               <Page Down>    :     Moves to the next page of classes
                                    and selects the FIRST class on
                                    that page.
               <Home>         :     Selects the very FIRST page in
                                    the Database.
               <End>          :     Selects the very LAST page in
                                    the Database.
               <F6>           :     Puts you in the Test Score Screen.
               <Tab>          :     Returns to the Main Menu.
               <Esc>          :     Returns to the Main Menu.
               <F10>          :     Returns to the Main Menu.
               <F1>           :     Displays Help.
















Grades Version 2.70                       18           


         In addition the following are the Main Menu hotkeys you may
       use to activate any of the Main Menu items. Note that you are
       taken OUT of the View Screen and placed at the Main Menu:

               <Alt-A>        :    Pulls down the Alter Database Main
                                   Menu Option.
               <Alt-C>        :    Pulls down the Change View Main
                                   Menu Option.
               <Alt-E>        :    Since you are already in the
                                   View Screen, this has the same
                                   effect as pressing <Enter>. You
                                   will remain in the View Screen.
               <Alt-L>        :    Activates the Load new File
                                   Main Menu Option.
               <Alt-H>        :    Activates the Help Main Menu Option.
               <Alt-P>        :    Activates the Print Main Menu Option.
               <Alt-Q>        :    Activates the Quit Main Menu Option.

             The  Edit  and Delete operations work just  as  described
       earlier,   except you DON'T have to return to the Main Menu  to
       activate them.

             Choosing  <F6>  will bring you into the Test Score Screen
       which will display the Tests entered for the currently selected
       class. The Test Score Screen is described next.




































Grades Version 2.70                       19           


   Test Score Screen:

             You  will  suddenly find that the G.P.A.  calculation  is
       covered by a large window.  This is the Test Score Screen,  and
       it displays the following information:

                     1) Test score Date in MM/DD/YY format.
                     2) YOUR score on that Test.
                     3) The TOTAL score possible for that Test.
                     4) Your 100% average for that Test.


             Again,  notice how  one line is Highlighted.  This is the
       currently  "selected"  Test Score,  and you may act on it using
       the following keys:


               <Enter>        :     Edits this Test.
               <Delete>       :     Deletes this Test.
               <Cursor Up>    :     Selects the previous Test.
               <Cursor Down>  :     Selects the next Test.
               <Page Up>      :     Moves to the previous page of
                                    Tests, and selects  the FIRST
                                    Test on that page.
               <Page Down>    :     Moves to the next page of Tests
                                    and selects the FIRST Test on
                                    that page.
               <Home>         :     Selects the very FIRST page.
               <End>          :     Selects the very LAST page.
               <Alt-P>        :     Predicts your Grade.
               <F6>           :     Predicts your Grade.
               <Tab>          :     Returns to the View Screen.
               <Esc>          :     Returns to the View Screen.
               <F10>          :     Returns to the View Screen.
               <F1>           :     Displays Help.


























Grades Version 2.70                       20           


             Some things deserve some more notice and your  attention,
       even though they aren't complicated.

             1) Editing a Test is done the same as when you add tests.
       Except,  the entry  fields will  be  filled in with information
       already.

             2)   Deleting a Test simply clears out all  the  recorded
       information for that Test.  That is, the scores are set to zero
       (0), the Date is cleared and so is the Average.

             3) In the Shareware versions, you may only have eight (8)
       Tests, and this takes up only ONE page of information.

             4) Attempting to go past the last possible page brings up
       an error window with  the  message "No more Tests Available....
       Press <Esc>". Here you MUST press <Esc> to return.

             5) Predicting your Grade will cause the program to add up
       all  the AVERAGES and then simply divide by the total number of
       Tests it had averages for.  The program will then "Curve"  this
       grade and display  a range of  Grade possibilities. Please  see
       the section concerning the Grade Prediction below.

             You may choose  to make the  Optimum Predicted Grade  the
       actual Grade for the class. You are asked if you wish to do so.
       The default answer  is <N>o.   Press <Enter>   or <N>   not  to
       update the Grade, or press <Y> to update it.

             Updating  the  Grade allows you to have the program  help
       you determine how your G.P.A.  will be affected by your current
       grade in a class.  You need to return to the View Screen to see
       the  newly  computed G.P.A.  as the Test  Scores  obscure  that
       display.


        Note:    If you choose to add a new Test Score to this  class,
       add  the test to the NEXT empty slot.  If you skip  Test  Score
       entries and wish to print out the Database,  it  will not print
       out  correctly  since the printing of Tests stops at  the  last
       valid Test Score entry.




















Grades Version 2.70                       21           


    Converting version 2.50 Data files:


           After much deliberation,  we have chosen NOT to include the
       Conversion  program with the Shareware versions of the program.
       We  have  seen many people distributing pirate  copies  of  the
       Beta Test Versions, and other "hacked" versions, and have tried
       to make things difficult on them.

           Of course,  we also know that many people use the  program,
       but haven't registered it.  Call it lack of faith in Shareware,
       but  we must protect ourselves in some way and so we decided to
       make it harder on those users who feel they can "freeload"  and
       upgrade easily to the new versions.


           To convert your old version 2.50  files,  place CONVERT.EXE
       into  the  same  directory  or  disk  as  CLASS25.   Then  type
       <CONVERT>,  and the program will respond with "Done...",  or if
       an error occurred, "Disk Error occurred". The conversion should
       be  error  free,   and the only errors that could  trigger  the
       latter error are as follows:  1)  The Disk is Full  2)  CLASS25
       has it's ReadOnly attribute set.  (Use SupremeSoft's SETATTR to
       clear it) 3) CLASS27 already exists, and is ReadOnly.


    Converting version 2.60 Data Files:

           There is no need for you to convert any of your Data  files
       produced by Grades  v2.60. The  only change is  in the  default
       start-up file. Grades  will look for  CLASS27 and not  CLASS26.
       Therefore you must rename the file  if you have not done so  at
       installation.  To  rename,  make  sure  you  are  in  the  same
       directory as CLASS26 and type: RENAME CLASS26 CLASS27 and  then
       press the <Enter> key.


























Grades Version 2.70                       22           


    General Error Messages:


           As   much as  the  program tries  to recover  from  errors,
       some are unavoidable. The following is a brief, yet incomplete,
       list of  possible  errors  generated.  Some errors  include   a
       short description, and error  code, and an  error address.   If
       you wish to  write to us regarding a problematic error,  please
       include ALL of this information.


       Window Allocation Error  -
                                  This  is  a particularly nasty error
       that may occur during a screen operation.  The  program can NOT
       recover from this error.  It is suggested that you  remove some
       TSR programs, and make more memory available to the program.

       Cannot access EXE file   -
                                  The  GRADES27.EXE program could  not
       be  accessed.   The program MUST access it's own file  for  the
       configuration  information.  Make sure you have not renamed the
       program, or specified the ReadOnly attribute.

       No more Tests Available    -
                                  You  have reached the maximum number
       of  Test Scores available for the version you are  using.   For
       Shareware versions the limit is eight (8), while for Registered
       versions, the limit is twenty-four (24).

       Not in Shareware version   -
                                  The  option you chose does not exist
       in the Shareware versions of Grades.





























Grades Version 2.70                       23           

    File Related Error Messages:

           Grades will attempt to recover from any non-fatal error  if
       it is possible  to do so.  A window will  appear with an  error
       message and a solution. The following is a listing of the error
       messages and their solutions:

       Error   : Data File Access Violation.
       Cause   : The file is marked with either its ReadOnly, Hidden,
                 or System bit.
       Solution: Use SupremeSoft's SETATTR to clear all the
                 attributes. Or use the DOS ATTRIB program to do
                 the same. This is a fatal error.

       Error   : Drive not ready Error.
       Cause   : The drive door is open.
       Solution: Close the Drive Door.

       Error   : Disk in Default Drive is Write-Protected.
       Cause   : The disk has its Write Protect Tab on.
       Solution: Either change disks or remove the Write Protect Tab.

       Error   : Unknown Disk Format on Default Drive.
       Cause   : The disk in the drive is corrupt or a non-DOS disk.
       Solution: Remove the disk and insert a new one.

       Error   : General Failure Error on Default Drive.
       Cause   : A non-DOS disk or a corrupted disk is in the drive.
       Solution: Remove the disk and insert a new one.

       Error   : Disk Write Error on Default.
       Cause   : The Disk is full or has been changed.
       Solution: This is a fatal error because of the way Grades defines
                 its Data format.

       Error   : Disk Read Error on Default Drive.
       Cause   : Either the Disk is corrupted or has been changed.
       Solution: This is a fatal error.

       Error   : CRC Error on Default Drive.
       Cause   : A corrupt disk or controller.
       Solution: This is a fatal error.

       Error   : Seek Error on Default Drive.
       Cause   : A corrupt disk or controller.
       Solution: This is a fatal error.
















Grades Version 2.70                       24           


       Error   : Sector not Found.
       Cause   : A corrupt FAT table.
       Solution: The disk is hopelessly corrupt so this is fatal.

       Error   : Disk Error has Occurred.
       Cause   : Unknown cause.
       Solution: This is fatal.

       Error   : Fatal Error has Occurred.
       Cause   : Unknown Memory or File Error.
       Solution: This is fatal.

   Printer Related Errors:



       Printer Error              -
                                  Something   went   wrong  with   the
       Printing operation,  press <Esc>  to Abort or <R>  to Retry the
       print operation.

          Common causes of Printer Errors:

                1) Printer is not turned On.
                2) Printer is off-line.
                3) Printer is out of paper.

          Cautions about Printer Errors:

                1)   If you have a large printer buffer and a  printer
       error occurs, the program will not inform you of an error until
       the buffer becomes full.

                2) If you retry the print operation, you may duplicate
       a line of output if you have a printer buffer.


























Grades Version 2.70                       25           


    About the Grade Point Average Calculation:


         The G.P.A. is calculated in the following way:

                G.P.A. = Quality Points / Credits.


     The Quality Points are determined by the following scale:

         A+, A :   4.0 Points
             A-:   3.7 Points
             B+:   3.3 Points
             B :   3.0 Points
             B-:   2.7 Points
             C+:   2.3 Points      x       # of Credits for the course
             C :   2.0 Points
             C-:   1.7 Points
             D+:   1.3 Points
             D :   1.0 Points
             D-:   0.5 Points
             F :   0   Points
            These Point distributions have been found to be consistent
       with a vast majority of Schools/Universities/Colleges. However,
       this does not mean that they are correct for YOU.


          The  following  are a few problems which may exist with  the
       G.P.A. calculation for some users:

         1)  These  values will NOT be consistent with the Junior High
       or  High school levels.  At these levels,  most   schools  base
       their G.P.A.  calculations  on  strange criteria.  In addition,
       some don't even give a G.P.A. calculation.

             Solution:   When  you register,  please specify that  you
       need to change  the Quality Points  assigned to the grades, and
       provide  us with the new Quality Points that you need  assigned
       to each letter grade.

          2) Most  Schools/Universities/Colleges  will give you credit
       for a Pass/Fail  course,  but will not include that course into
       the G.P.A.  calculation.  As such,  this program will also  NOT
       include that course into it's calculations.

            However,  there have been some schools that  WILL  include
       the  course into the G.P.A.,  but only  if you have FAILED  it.
       (Time to get out of there!) This program will also do this.  We
       realize that most  schools/universities/colleges  will  NOT  do
       this; however, there have been A LOT of cases where user's have
       complained.










Grades Version 2.70                       26           

            To clarify: If you take a course and pass it, you enter in
       <P> for the grade.  The program will ignore that  class in it's
       G.P.A.  calculation.  Now let's assume you entered in <F>,  the
       program  WILL include that class in the G.P.A.,  and give you 0
       quality points.

            Solution: If your school does not include a P/F class into
       the G.P.A at ALL, then just put in a <PP> for a Pass,  and <PF>
       for  a  Fail.   This way the program ignores the class  in  the
       G.P.A. Computation, and you can still record your Grade for the
       class accurately.


           3)  Finally,    some   Schools/Universities/Colleges   give
       different quality points for courses of less than 4 credits.

            Solution: Inform  us at the time of Registration and,   if
       possible, fully describe your schools policy. A program will be
       tailored to your special needs.




   About the Prediction Analysis:

           The program will add up all averages for your Test  Scores,
       then divide by the total number of Test Scores  it added.  This
       produces  a  number  which is then rounded off to  the  nearest
       whole  number.  The program will then give you a  LETTER  grade
       based  upon  this number.  The following are the  letter  grade
       categories as used by the program:


              0..59 :  Grade Displayed is   F
              60..63:  Grade Displayed is   D-
              64..65:  Grade Displayed is   D
              66..69:  Grade Displayed is   D+
              70..73:  Grade Displayed is   C-
              74..75:  Grade Displayed is   C
              76..79:  Grade Displayed is   C+
              80..83:  Grade Displayed is   B-
              84..85:  Grade Displayed is   B
              86..89:  Grade Displayed is   B+
              90..93:  Grade Displayed is   A-
              94..95:  Grade Displayed is   A
              96..100: Grade Displayed is   A+

          An invalid computation receives a  ??  as the Grade.

            As with the G.P.A.  computation,  this may not strictly be
       accurate  for  your needs.  This is the grading scheme used  by
       most schools,  but it is by no means a standard grading system.
       If  you  need  different  numbers,  please provide  us  with  a
       COMPLETE list of Grade categories,  and with your  Registration
       you  will  receive  a version which  incorporates  your  needed
       categories.






Grades Version 2.70                       27           


     About Grading Curves:


           Many users would like the  program to predict their  grades
       based upon a  grading "curve". For  those unfamiliar with  this
       concept, a grade curve is when your numeric grade has no direct
       correlation to the  letter grade you  receive. For instance  if
       you receive an 86 out of 100 which is usually a B, with a curve
       you may receive a B+ or A-.

           As nice  as  this  concept  is, a  grading  curve  is  very
       unpredictable and usually  up to a  teacher's discretion.  Some
       teacher's will follow a set  pattern, while other's will  curve
       based upon the highest and  lowest scores received. As you  can
       see, there are thousands  of different curve possibilities.  It
       would be  irresponsible for  a program  to tell  the user  what
       their grade is based upon some strange curve procedure.

           (If you wish more information  about the problems of  grade
       curves, please run CURVE.COM)

           Grades v2.70 will  predict your grade  using a  pre-defined
       curve percentage, and makes NO guarantee that this is the  type
       of curve that will be used. When you configure the program, you
       will be asked  what curve  percentage to use.  Unless you  find
       that the program  is consistently  wrong when it  comes to  the
       curve, do NOT change the default  value! You will then be asked
       if you wish to update your Grade with the "Optimum Grade"  that
       the prediction produced.  As before, Press  <Y>, <y> to  update
       and <N>, <n>, <Enter> to return to the Test Score Screen.

          (Please consult the file CURVE.COM for further information)





























Grades Version 2.70                       28           


     Registering Grades:


            You  are  granted  a limited license to use  this  program
       twenty (20) times ONLY!! After this time, you MUST Register it.
       You will be guaranteeing future versions, and modestly repaying
       the authors for their extensive effort in time and money.

            The program does warn you when you have used  it  ten (10)
       times,   and  we suggest you do not use the program  past  this
       number, without registering it first.

            If  you  find this program to be of use to you,   you  are
       asked  to Register it.  Registering will give you  any  support
       that you may need. (And you may need more than you think.) As a
       registered user,  you will be informed of any future updates to
       the  program and provided with any Bug fixes.   In addition you
       will be  provided  with  a  new  EXE  file  with the  Shareware
       restrictions removed.   This includes the eight (8)  Test Score
       limit, and the Printing limitation.


          To Register, send $20.00 to:

                            SupremeSoft
                            105 Deerfield Drive
                            Easton, CT 06612


           Please include your Name,  Address,  Telephone Number,  the
       Version you have, and where you obtained it from. Also, include
       any problems or special needs that you may have.

           To order, print out the supplied Order form, ORDER.DOC.



























Grades Version 2.70                       29           


      Things of interest:


          1)  Pressing <F1>  at ANY time during the program will bring
       up a context-sensitive help screen for your specific area.

          2)   If you wish to view an index of all Help Topics,  press
       <Alt-F1>  when at the MAIN MENU ONLY! This will not work in any
       other area of the program.

          3)   EGA/VGA  detection as well as Monochrome detection  has
       been  added.  However,  if you are using a color adapter  (CGA,
       EGA,  VGA,  MCGA,  PGA,  etc)  with a MONOCHROME display,   the
       program will adjust itself for a color adapter. There is NO way
       for a program  to  determine this possibility.  Therefore,  you
       must EXPLICITLY put the adapter in Monochrome mode.   Type MODE
       BW80  (or 40)  to place it in this mode.  The program will then
       run fine.

          4) Memory requirements.  This program will take over as much
       memory as it needs.  If it can take over  ALL available memory,
       it will do so.  However,  it will run perfectly well  in  100K.

          5)  Grade entry: You will notice that the grade is FORCED to
       uppercase when you enter it.

          6) You  may press  <Alt-F10> while  at the  Main Menu,  View
       Screen or  the Test  Score  Screen to  being back  the  opening
       display.



    Warranty:


           There  is  NO  Warranty either expressed or  implied.   The
       Author shall not be responsible for any damage that use of this
       software  may  bring unto the user's system.  You may NOT  hold
       SupremeSoft  or  Manu Singh liable for any damage that  use  or
       misuse of this program may incur. You may not hold the author's
       accountable for any damages to  your academic standing for  any
       reason. The author's do NOT  imply that your academic  standing
       will rise or fall as a result of your use of this program.


           Your use of this program indicates acceptance of the  above
       disclaimer.


           The program is hereby placed into the Shareware arena.   It
       is NOT Public Domain software.  If you use the program you  are
       expected to register and pay for it.









Grades Version 2.70                       30           


     Notes on Program Size:

           If you are a previous user of Grades,  the first thing  you
       will notice is the increase in size  of the program itself, and
       the Data File. Actually,  the program now uses LESS memory than
       before, even though the size of the EXE has gotten larger.

           The  increase in size of the Data File is proportionate  to
       it's  functionality  and so we feel it is a rather small  price
       to pay.

           For you programming buffs,  Grades version 2.70  is written
       in mixed  Pascal,  Modula-2, C  and  Assembler code.  This  has
       helped us bring  down the  memory requirements  of the  program
       while still  adding new features.



   About SupremeSoft:

           SupremeSoft  is dedicated to bringing easy to use and  easy
       to  learn  programs  into the Shareware market.   We  currently
       distribute  a number  of   programs.   Please   refer  to   the
       PRODUCTS.TXT   file   included  with  this  program  for   more
       information.

            At  the  start  of this manual we stated  "the future  has
       arrived".  What  is this future?  The future is  a new  concept
       designed to keep a natural   interface  across   a variety   of
       different  products, making  modification only when  absolutely
       required.   After  much  research we  have  developed  such  an
       interface . It is both  easy to   use and easy to learn.   This
       makes it much easier for users to get a program up and running.
       Knowing what actions  certain keys take cuts down the  learning
       curve dramatically.

             We  would  like  any  comments you  may  have  about  the
       interface.  Good or bad, we would like to know what exactly you
       find fault with. If it is key assignments,  then please specify
       which keys you have a problem with.  Print out COMMENTS.TXT for
       a Question/Answer/Comments form.



                Thank you for your continued support!!



     Grades v2.70 is Copyright 1987-1990  by SupremeSoft and Manu Singh
                         All Rights Reserved.

     SupremeSoft, Grades and Grade Predictor are Trademarks of Supremesoft
                         based in Easton, CT








Grades Version 2.70                       31           

```
{% endraw %}

## ORDER.DOC

{% raw %}
```
       Please fill out the following form as completely as possible:
  
1) Where did you obtain this copy from?   ___________________________________
       
        _____________________________________________________________________

2) What is the Version Number?  _____________________________________________

3) Your Name: _______________________________________________________________

4) Your Street Address: _____________________________________________________

5) Your City/State/Zip: _____________________________________________________

6) Your Telephone Number: ___________________________________________________

 The next few questions ask about your system, please check off all things 
that apply to your system:

         [  ] Monochrome Monitor      [  ] Monochrome Display Adapter
         [  ] CGA Monitor             [  ] Color Display Adapter         
         [  ] EGA Monitor             [  ] EGA Display Adapter
         [  ] VGA Monitor             [  ] VGA Display Adapter
         [  ] Variable Sync Monitor

         [  ] 128K memory or less     [  ] 256K or less
         [  ] 640K memory of less     [  ] 1MB or less
         [  ] Over 1MB

         [  ] DOS version 2.00        [  ] DOS version 3.00
         [  ] DOS version 3.10        [  ] DOS version 3.20
         [  ] DOS version 3.30        [  ] DOS version 4.00 and above
         
         [  ] Hard Drive System       [  ] Floppy Drive System

  Please check off any custom tailoring you may need:

         [  ] Different G.P.A Cut off Points
         [  ] Different Average Calculation Cut off Points
         [  ] Add a Pass/Fail Course as Fail and have no effect on G.P.A.
         
   If you have checked any of the above, please enclose a separate piece of 
 paper describing the exact cut off points you need.


   Any other Comments/Needs:  ______________________________________________

 ___________________________________________________________________________

 ___________________________________________________________________________

 ___________________________________________________________________________

 ___________________________________________________________________________


   Please send this form and a Check/Money Order for $20.00 made out to Manu 
 Singh, to the following address: 
                   
                           SupremeSoft
                           105 Deerfield Drive
                           Easton, CT 06612  

```
{% endraw %}

## PRODUCTS.TXT

{% raw %}
```
---------------------------------------------------------------------------
               Current and Planned Products from SupremeSoft
---------------------------------------------------------------------------

           We at SupremeSoft are dedicated to bringing useful, easy
     utilities to you. We attempt to develop programs that are not solely
     for "Power User's" in that we try to keep a consistent and meaningful
     user interface in all our programs. This is why you will find that all
     of the options for our command line based utilities are the same for
     each program.  We also attempt to keep a consistent menu driven
     interface across all our products which use menus.


           If you would like to see a particular program developed, for
     any reason, we would love to hear from you. If we do use your idea(s),
     for a program, you will receive a registered version of it at no
     charge.                

--------------------------------- B.A.M. -----------------------------------

     B.A.M. Utilities:  (As of 02/22/89)

           These are a collection of Utilities for Manu Singh's Bank
     Account Manager. They include:

           1) A Bank Statement Computer which will compare B.A.M.'s
     account status with the statement you receive from the bank.

           2) A Reconciler which works just like your checkbook. You may
     "check off" the checks which have been processed by the bank. Much
     better than B.A.M.'s internal reconciler.

           3) A program file sorter. Unfortunately, B.A.M. insists that you
     look at all your transactions in Date order. This program allows
     you to sort the files by Account, Special Code Number, Amount,
     or Code/Check Number.


     B.A.M Reporter:  (Projected Summer 1990)

           As all B.A.M. user's will attest to, B.A.M.'s reporting
     facilities leave something to be desired when it comes to a stand
     alone Report utility, and most certainly when it comes to
     Printing out your Transactions. This program will be a replacement
     for B.A.M's stand alone REPORT program, and of course the internal
     print routines.

-------------------------------- SETATTR -----------------------------------

     Set Attribute:  (As of 05/04/90) 

           This program allows you to set any file's attributes to a
     completely new set. In addition, it is designed to process your
     entire disk in one pass. This is useful if you wish to eliminate
     unwanted Archived files from a Backup. You may select which files
     you wish to change, and which you do not. In this way, you will
     also see which files are going to be backed up.

           Naturally this is only an example of the program's use. You
     may set the Archive, ReadOnly, System, or Hidden bits for any
     file. You have a variety of options as to what you actually wish
     the program to do.

--------------------------------SASK----------------------------------------

      SupremeAsk:   (As of 02/25/90)

           This program is designed for use primarily in batch files. It 
      allows  you to display a text file or a prompt and then wait for the 
      user to enter certain keys. Depending on the key pressed, the DOS 
      ERRORLEVEL variable is set for testing in the remainder of the batch 
      file. 
      
           The program is unique in that you may display an entire file as 
      the prompt, or you may enter your own on the command line. Also, the 
      program will not beep annoyingly at a wrong keypress, unless you 
      direct it to do so. 

--------------------------------- GRADES -----------------------------------

     Grades v2.70:  (As of August 25, 1989)

           This program allows one to keep track of all pertinent school
     information including class name, course number, teacher name, etc.
     In addition one may keep Test Score information, and then use that
     information to let the program predict your grade and then see how
     this grade would affect your GPA. The GPA is constantly updated and
     displayed.

           The new version of Grades includes:

           1) A Grade Curve feature to let one see how a grading curve
     would affect one's grade.

           2) Improved Data Entry ability.

           3) New "scroll-able" display format.

           3) Ability to maintain a number of class record files, for
     all the students in a household.

----------------------------------SupremeMove-------------------------------

     SupremeMove v1.31:  (As of 03/01/90)


         SupremeMove is a fast multiple file mover. The capability to move 
     across directories and across disks is supported. The program is faster 
     than any commercial or Shareware program available, and uses only 10K of 
     both disk space and only 12K of memory!
    
---------------------------------SupremeSched-------------------------------

     SupremeSched v1.03: (As of 02/25/90)

         SupremeSched is an Employee Scheduling system which allows the user 
     to enter Employee's work schedules and then check the schedule for 
     accuracy. The following are the programs major features:


           1) User defined work time periods, to ensure that Employees are 
     scheduled for all needed times.
           
           2) Unlimited number of Employees, and an unlimited amount of 
     Locations for your Business.
          
           3) Checks are made for Employee Off Days, Business Closed Days, 
     Employee not Already Scheduled, Employee meets Job requirements, 
     Scheduled Employee exists, and many more! 

          
         Maintaining your weekly work schedule is no longer a chore! This 
     program automates your scheduling, and even makes sure you don't make any 
     mistakes. The user may override the verification checks at any time just 
     in case you want to make mistakes.

         Output can be directed to any standard printer, either 80 or 132 
     columns. Simple Menu's guide you through the scheduling process, and the 
     easy to use configuration program makes sure you tell the program 
     everything it needs to know before you even start using it!
          
--------------------Move/Rename/Delete/Copy Utilities-----------------------

   Supreme Utility v1.09:  (As of 03/06/90) 

            This is an integrated program that will allow you to do the 
       following, using only one program call:
       
             1) Move files. Copy and Delete in one operation. Wildcards 
       obviously accepted and used. You may move across subdirectories 
       etc. 
       
             2) Copy files Globally using wildcards etc. Much easier and 
       faster than DOS's Copy command.
              
             3) A global Rename function. Useful if you have to rename a 
       number of files in one shot. 
       
             4) Global Delete. Have you ever wanted to type DEL *.BAK and 
       have all of your .BAK files deleted from the disk? This program
       option will let you do this. 
       
          This program is great for combining a number of operations into 
       one command call. Error reporting and trapping is quite extensive, 
       avoiding any possible user error. 
----------------------------------------------------------------------------
          
           We sincerely hope you will find our products useful and 
     will continue to use them in the future.  In order for us to
     keep in touch with you, please drop us a line with any questions
     or comments you may have.  Thank you.


     Please address all correspondence to:


                           SupremeSoft
                           105 Deerfield Drive 
                           Easton, CT 06612 

----------------------------------------------------------------------------
----------------------------------------------------------------------------
```
{% endraw %}

## SASK.DOC

{% raw %}
```
--------------------------------------------------------------------------
Version 1.32                       SupremeAsk                     02/25/90
Copyright (c) 1988-90 by SupremeSoft                   All Rights Reserved
--------------------------------------------------------------------------

  SASK is simply a Norton ASK clone. It has one added feature, the
ability to import text files as the prompts. This allows you to display
all those README files, and then request the user if they want to follow
a certain course of action. All you have to do is add the prompt at the
end of the README file.

  SASK automatically keeps track of the current display line, thus
allowing you to display files which are more than 24 lines long. SASK
will display "More...Press any key" at the end of each page. Naturally,
if the display doesn't overrun one page, no such prompt is made.

Calling Syntax:      SASK ["Display Prompt" | filename.txt]  KeyList

  You have the option to output a standard prompt, just as in Norton's
ASK. To do so, just enclose the prompt in double quotes ("). (See note
for C version), the program will then display that prompt and wait for
one of the keys in KeyList to be entered.

Returns:        ERRORLEVEL set according to the key pressed, and it's
                  location in the KeyList

                ERRORLEVEL set to 99 on any Errors including
                Ctrl-C/Ctrl-Break.

Examples:   SASK "Continue? (Y/N)" yn

      Displays <Continue? (Y/N)> and waits for either <Y>, <y>, <N>, <n>
to be pressed. ERRORLEVEL is set as follows:

             <Y>,<y>      ERRORLEVEL=1
             <N>,<n>      ERRORLEVEL=2
             Any error    ERRORLEVEL=99


            SASK readme.txt nye

      Displays the file README.TXT and waits for <Y>, <y>, <N>, <n>,
<E>, <e>. ERRORLEVEL is returned as follows:

             <N>,<n>      ERRORLEVEL=1
             <Y>,<y>      ERRORLEVEL=2
             <E>,<e>      ERRORLEVEL=3
             Any error    ERRORLEVEL=99



Note 1:  To test ERRORLEVEL in batch files, make sure that you test for
the HIGHEST possible return value FIRST! Otherwise, the batch file will
execute the very first condition. Therefore use the following
construct:  

           if ERRORLEVEL=99
           if ERRORLEVEL=98
           if ERRORLEVEL=97
                  .
                  .
                  .
           if ERRORLEVEL=1


Check your DOS manual for further information.

Note 2: For the C versions, instead of using double quotes, you must use
single quotes (').

Note 3: Unlike Norton ASK, the program does not Beep at an incorrect key
entry. Also, unlike ASK, the program will ALWAYS display it's copyright
notice
---------------------------------------------------------------------------
Changes since version 1.31:

The C versions are now also being distributed, and are on the disk as 
SASK2.EXE and SASK3.EXE. SASK2 is the version optimized for 
80186/80286/80386/80486 processors, though not suitable for running under 
OS/2. SASK3 is the 8086/808 processor version.

The C versions are slightly bigger in size, but take up less memory, and 
tend to run a bit faster. The choice of which version (Pascal or C) to use 
is left up to you.

There was only one small error in the program, thus the reason for not 
updating it for over two years. When you typed SASK by itself to get the 
calling syntax, the program told you that ERRORLEVEL was set from the KeyList 
from right to left. This was WRONG. It is actually from left to right.
---------------------------------------------------------------------------
License/Warranty:

     There is NO warranty either expressed or implied. You use this
program at your own risk! You may NOT hold SupremeSoft accountable for
any damages that may occur either directly or indirectly from the use of
this program.

     This program is distributed either by itself, or in a package of 
Utilities. To register SupremeAsk and to get a copy of the latest versions of 
all the Utilities send $5.00 to the address below:

                           SupremeSoft
                           105 Deerfield Drive
                           Easton, CT 06612


Corporate/Academic Site Licenses are available.
---------------------------------------------------------------------------
SupremeSoft is a Trademark of SupremeSoft in Easton CT.
SupremeAsk  is a Trademark of SupremeSoft.
ASK  is a Registered Trademark of Norton Computing.
---------------------------------------------------------------------------
```
{% endraw %}

## UPDATE.DOC

{% raw %}
```



                       Grades Version 2.70 (tm)
                           Update Manual


                Copyright (c) 1987-1989 By  Manu Singh
                Copyright (c) 1989-1990 By  SupremeSoft (tm)

                         All Rights Reserved.





                        Released July 01, 1990






                           Topics covered

           1....File Information................................2
           2....Configuration Changes...........................2
           3....Color Conversions from v2.60 to v2.70...........3
           4....Data Entry Changes..............................3
           5....Alter Database Option Changes...................4
           6....Change View Option Changes......................5
           7....View Screen Keys................................5
           8....Grade Prediction................................6
           9....Load a New File.................................7
           10...View Screen Changes.............................7
           11...Test Score Screen Changes.......................8
           12...File Error Changes..............................8
           13...Help Changes....................................9
           14...Miscellaneous Changes...........................9
           15...Registering.....................................10



             Please be  sure  to  run SCHOOLS.COM  and  CURVE.COM  for
       important additonal information.












Grades Version 2.70 Update Manual             1                  

            Welcome  to  Grades  v2.70!  This  document  is  meant  to
       introduce users of Grades v2.60 to this new version.

            This document will be kept short and will only inform  you
       of the changes that have been made. To get more information  on
       any item, press  <F1> while  in that  area. (Or  read the  full
       Manual)



      File Information:


           Grades v2.70 will use your Class26 file, or any other  file
       generated by  version 2.60  without  modifications.   The  only
       change is that v2.70 will look for Class27 and not Class26.

           Grades v2.70 can  now also use  an Environment Variable  in
       order to  find itself  and  its files.    To use  this  feature
       place the following into your Autoexec.Bat file:

                     Set Grades= [Drive:\ directory]

           This should ideally be: Set Grades = C:\Grades\
           You MUST add the trailing backslash!


           The use of this  will allow you to  invoke Grades from  any
       sub-directory or drive,  and Grades will  look for its  default
       start-up file in that Directory.

           If you  are unfamiliar  with the  concept   of  Environment
       Variables, please consult your DOS Manual for more information.



       Configuration Changes:


           There is a  new configuration program  that you should  run
       before you start  Grades. The new  configuration program has  a
       new Color Selection display which  is much easier to read,  and
       you may now also change Help Colors in addition to the  regular
       Colors.

           Also, Grades now uses a Curve Percentage which you can also
       change in the  Configuration program. For  more information  on
       this, please refer  to the  Grade Prediction  section later  in
       this manual.







Grades Version 2.70 Update Manual             2                  

       Color Conversions:

           To help ease your conversion,  place COLOR.EXE in the  same
       directory as GRADES26.EXE and  GRADES27.EXE. This program  will
       take the colors and window features present in GRADES26.EXE and
       bring them over  to GRADES27.EXE.  To use  this program  simply
       type <COLOR>.  If  you  receive an  error  message,  make  sure
       GRADES26.EXE and GRADES27.EXE  are in the  same directory,  and
       they are NOT marked ReadOnly.

            Be aware that  in v2.60  you could not  define the  Pop-Up
       Help colors, while in v2.70  you can. Therefore you should  run
       CONFIG.EXE to change these colors if you wish.


       Data Entry Changes:

           You will notice that there are some changes in the way  you
       enter in Data.  Grades now  uses what are  called "Tabbed  Data
       Forms". What this means is that you may move to any prompt  you
       wish instead of being forced to  press <Enter> to get to  them.
       In addition, you may also  move backwards to a previous  prompt
       instead of having to go through all the prompts again.

           The following are the new  keys which exist in ADDITION  to
       the other normal Editing Keys:

          <Up>, <Shift-Tab>       Moves to the previous prompt, or the
                                  last prompt if at the first prompt.
                                  Any changes made are NOT kept!

          <Down>, <Tab>           Moves to the next prompt, or to the
                                  first prompt if at the last prompt.
                                  Any changes made are NOT kept!

          <Enter>                 As usual this accepts any changes
                                  or the default and moves to the
                                  next prompt, or if at the last,
                                  ends the input session.

          <F10>                   Accepts any changes or the default
                                  and ENDS the input session.

        Note:  You will not exit the current input session unless  you
       are at the  last prompt and  press <Enter>, or  use <F10>.  For
       example:

                Prompt 1) Enter Your Name
                Prompt 2) Enter Your Age







Grades Version 2.70 Update Manual             3                  

           If you press <Enter> at prompt 1) you move to prompt 2).
           If you press <Enter> at prompt 2) this will save the
           changes and end the input session.
           If you press <F10> at either prompt this will save the
           changes and end the input session.


       Experiment within the  program if you  do not fully  understand
       the above.

       Alter Database Option Changes:


           A new choice  has been  added to  this menu,  Search for  a
       Class. This will allow you to search for a class by its Section
       Name and/or Course Number as follows:

           1) Enter in the Section Name or <Enter> to match any Name.
                (This is case-insensitive... i.e. MAT = mat)

           2) Enter in the Course Number or <-1> to match any Number.

       For Example:

            1)  <Enter>
            2)  325.10

          Will highlight the first class  that has a Course Number  of
       325.10 and any Section Name.

            1) Mat
            2) -1

          Will highlight the first class  that has Section Name  <Mat>
       or any case combination of those three letters, and any  Course
       Number.

            1) PHY
            2) 432.10

          Will highlight the class whose Section Name is <PHY> or  any
       case combination  of  that,  and a  Course  Number  of  432.10.
       (Unless your school is peculiar, there should only be one class
       that has these values)


           If the class  is NOT  found, an error  message will  appear
       saying: "Class  was not  Found...Press <Esc>".  Press <Esc>  to
       return to the Menu.







Grades Version 2.70 Update Manual             4                  

       Change View Option Changes:


           In addition to the Normal  and Extended Views, you may  now
       also  move  into  the  Test   Score  View  for  the   currently
       highlighted class. The effect is the same as pressing <F6> when
       in the View Screen.


       View Screen Keys:

           When you are in the View  Screen you may now also  "hotkey"
       any of the Main Menu options.  To do this you should press  the
       Alt key (and hold  it down) and the  highlighted letter of  the
       option you wish  to execute.  The following are  all the  valid
       hotkeys:


                Alt-A    Activates the Alter Database Option.

                Alt-C    Activates the Change View Option.

                Alt-E    This will NOT activate the Edit Class option
                         since you are in the View Screen already.
                         Therefore it will act as though you had
                         pressed <Enter>.

                Alt-L    Will activate the Load New File Option.

                Alt-H    Will activate the Help Option.

                Alt-P    Will activate the Print Option.

                Alt-Q    Will activate the Quit Option.


           Once an option has been activated you will be taken OUT  OF
       the View Screen and placed at the Main Menu.


           One other new key  was added to allow  you to search for  a
       class while in the View Screen:

                 Alt-F    Searches for a Class as described under the
                          Alter Database Option above.











Grades Version 2.70 Update Manual             5                  


       Grade Prediction:


           Many users have responded that they would like the  program
       to predict their grades based upon a grading "curve". For those
       unfamiliar with this concept, a grade curve is when your actual
       grade has no  direct correlation  to your  received grade.  For
       instance if you receive an 86 out of 100 which is usually a  B,
       with a curve you may receive a B+ or A-.

           As nice  as  this  concept  is, a  grading  curve  is  very
       unpredictable and usually  up to a  teacher's discretion.  Some
       teachers will follow  a set pattern,  while other's will  curve
       based upon the highest and  lowest scores received. As you  can
       see, there are thousands  of different curve possibilities.  It
       would be  irresponsible for  a program  to tell  the user  what
       their grade is based upon some strange curve procedure.

           (If you wish more information  about the problems of  grade
       curves, please run CURVE.COM)

           Grades v2.70  will  now predict  your  grade using  a  pre-
       defined curve percentage, and makes  NO guarantee that this  is
       the type of  curve that will  be used. When  you configure  the
       program, you will be asked what curve percentage to use. Unless
       you find that the program  is consistently wrong when it  comes
       to the curve, do NOT change  the default  value! You will  then
       be asked if  you wish to  update your Grade  with the  "Optimum
       Grade" that the prediction produced. As before, Press <Y>,  <y>
       to update and  <N>, <n>, <Enter>  to return to  the Test  Score
       Screen.



          (Please consult the file CURVE.COM for further information)




















Grades Version 2.70 Update Manual             6                  

       Load a New File:


           Now when  you want  to load  a  file you  may view  a  file
       directory, if you wish,  in order to look  for a certain  file.
       You can NOT view a directory on a different drive.

           Press <F10> or <Enter> when  prompted for the filename  and
       you will see a directory listing come up with a highlight  bar.
       Move the highlight bar  to the file you  wish to use and  press
       <Enter>. The  program will  then use  that filename.  (Standard
       Editing Keys work here)

           You will  notice that  there are  some names  which have  a
       backslash at  the  end,  i.e. TEMP\.  These  are  sub-directory
       entries, and if  you press  <Enter> when the  highlight bar  is
       over one, you will move to that sub-directory.

           As usual, pressing <Esc> will  abort and bring you back  to
       the Main Menu.

       View Screen Changes:


           Previously classes in  the View Screen  were listed with  a
       blank line between each class. Now  there is no blank line  and
       classes are listed one after another.

           Previously, the View Screen used a "page" format. That  is,
       when you pressed  <PgDn> you  moved to  the next  page and  the
       first class was highlighted. Now Grades follows the more normal
       "scrolling" format of moving to the next page, but highlighting
       the class that  is now in  the new display  position. The  same
       applies for <PgUp> except the previous page is displayed.

           Previously, when  you pressed  <Down> /  <Up> when  at  the
       last/first  class  on  a  page,   you  did  not  move  to   the
       next/previous page. Now when you  are at the  last/first  class
       on a page, you are moved to the next/previous page.

           Previously,  when  you  pressed  <End>  the  program  would
       display the last eight classes and highlight the first class on
       that page, and  not the last  actual class on  the last  actual
       page. Now, the program  will display the  last actual class  on
       the last actual page.

           This may be  confusing so  please experiment  with the  new
       cursor movements in the program itself.








Grades Version 2.70 Update Manual             7                  


       Test Score Screen Changes:


           Previously, when  you  pressed  <Down>/<Up>  while  at  the
       last/first Test Score,  you did not  move to the  next/previous
       page. Now you will move to the next/previous page.

           Again, if this  is confusing, experiment  with the  program
       itself.



       File Error Changes:


           File Error  Reporting used  to be  inadequate. The  program
       would exit displaying an error. Now the program will allow  you
       to recover from non-critical File Errors.

           A window will appear displaying the Error and any  possible
       Solutions. If the error  is recoverable you  will be told  what
       the solution should be, and then  to press <Enter> to retry  or
       <Esc> to abort.

           At times the program will not be able to correct the  error
       itself and will display a solution which you must perform  once
       the program exits.




























Grades Version 2.70 Update Manual             8                  

       Help Changes:

           The program now  allows you to  configure the Help  Colors.
       There are four Help Colors. The  first is the main Help  Color,
       and then three Highlighted Colors.

           Many users find the  Highlighted Colors annoying and  would
       like to turn them  "off". To do  this, specify the  Highlighted
       Colors to be  the same as  the Pop-Up Help  Color. However,  be
       aware that Extended Help Color 1  is used as the highlight  bar
       when you pick an  item from the Help  list. Therefore you  must
       not set this equal to the Pop-Up Help Color, otherwise you will
       not see which selection you are highlighting.


       Miscellaneous Changes:

           In v2.60 you  could not  enter in a  Course Number  greater
       than 999.99. However, the program made no checks to ensure  you
       did not  enter an  invalid  number like  9999.9, and  thus  the
       display  would be   corrupted at times.  The program will   now
       check to  make sure that  the Course Number is actually in  the
       range of 0.00 to 999.99,

           Now when you add Classes, whether one or more, the Semester
       is automatically  kept for  you. That  is, if  you enter  in  a
       Class, and  specify  "Spring 1990"  as  the Semester  for  that
       class, the next class' Semester  will default to "Spring  1990"
       as well. Naturally, you do not need to accept this default.

           Previously, when you entered in a Test Score Date you could
       not leave it blank. You may now do this if you do not know  the
       Test Date.

           You may now  specify a  Grade in a  class to  be <I>.  This
       signifies an Incomplete grade, and the program will ignore that
       class in its GPA calculations.

           You will notice  that the  program will  now invoke  itself
       over the current screen. That is, the program will now  restore
       the underlying display which existed before it was evoked.  Any
       error codes are  displayed following the  command line used  to
       invoke Grades.













Grades Version 2.70 Update Manual             9                  

       Registering:


           You  are  granted  a limited license to use  this   program
       twenty (20) times ONLY!  After this time, you MUST Register it.
       You will be guaranteeing future versions, and modestly repaying
       the authors for their extensive effort in time and money.


            If  you  find this program to be of use to you,   you  are
       asked  to Register it.  Registering will give you  any  support
       that you may need. (And you may need more than you think) As  a
       registered user,  you will be informed of any future updates to
       the  program and provided with any Bug fixes.   In addition you
       will  be  provided  with  special  support  programs  available
       onlyto Registered Users. In addition any Shareware restrictions
       are removed.



          To Register, send $20.00 to:

                            SupremeSoft
                            105 Deerfield Drive
                            Easton, CT 06612



           Please include your Name,  Address,  Telephone Number,  the
       Version you have, and where you obtained it from. Also, include
       any problems or special needs that you may have.


           To make Registration easier,  print out the supplied  Order
       form, ORDER.DOC.



     Grades v2.70 is Copyright 1987-1990  by SupremeSoft and Manu Singh
                         All Rights Reserved.

     SupremeSoft, Grades and Grade Predictor are Trademarks of SupremeSoft
                         based in Easton, CT













Grades Version 2.70 Update Manual             10                  

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2025

     Volume in drive A has no label
     Directory of A:\

    COLOR    EXE      4400   7-01-90  12:44p
    COMMENTS DOC      2186   7-01-90  12:44p
    CONFIG   EXE     36240   7-01-90  12:44p
    CURVE    COM      9522   7-01-90  12:44p
    FILES    TXT      1221   7-01-90  12:44p
    GO       BAT       990   7-01-90  12:44p
    GRADES27 EXE     93216   7-01-90  12:44p
    HISTORY  DOC      1590   7-01-90  12:44p
    INSTALL  EXE     31168   7-01-90  12:44p
    MANUAL   DOC     61318   7-01-90  12:44p
    ORDER    DOC      2537   7-01-90  12:44p
    PRODUCTS TXT      8130   7-01-90  12:44p
    README   COM      4716   7-01-90  12:44p
    SASK     EXE      7008   2-25-90  11:06a
    SASK     DOC      4638   2-25-90  11:06a
    SCHOOLS  COM      4858   7-01-90  12:44p
    UPDATE   DOC     18813   7-01-90  12:44p
    WHATS    NEW      1678   7-01-90  12:44p
    FILE2025 TXT      1407   7-13-90  11:43p
           19 file(s)     295636 bytes
                           17408 bytes free
