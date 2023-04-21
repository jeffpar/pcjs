---
layout: page
title: "PC-SIG Diskette Library (Disk #1046)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1046/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1046"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DR-EDIT"

    program editing is like wordprocessing.  DR-EDIT emulates many common
    wordprocessor and editor features and is recommended for computer users
    with at least a moderate technical knowledge of small computers and
    their programming.  DR-EDIT creates or edits ASCII files and offers
    ``horizontal scrolling'' to extend the screen's usable width from 80
    characters to 32K.  It has an overall length limit of 9,999 lines (this
    version is limited to 200 lines), the ability to concurrently edit two
    files, and a macro capability to expedite routine or repeated
    manipulations.  A special algorithm is used that makes DR-EDIT
    especially useful with artificial intelligence languages such as LISP,
    PROLOG, and C.
    File Descriptions:
    
    DREDIT   DOC  Documentation (26 pages).
    MANUAL   BAT  File to print out the documentation.
    DREDIT   EXE  Main program file.
    DREDIT   TI   Adaptations for TI systems.
    DREDIT   IBM  Adaptations for IBM systems.
    DREDIT   DSC  Adaptations for DSC systems.
    DR-READ  ME   Introductory information.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DREDIT.DOC

{% raw %}
```
                           DDRR--EEDDIITT  PPRROOGGRRAAMM  EEDDIITTOORR
                                  Version 1.0





                               REFERENCE MANUAL














                        (c) Copyright 1987 D-R Software

                                      - 2 -
 







                        Copyright 1987 by D-R Software
                             All rights reserved.


                                  DDiissccllaaiimmeerr

    D-R Software makes no representations or warranties with respect to the 
    contents of this manual itself, whether or not the product it describes 
    is  covered by a warranty or repair agreement.   Further,  D-R Software 
    reserves the right to revise this publication and to make changes  from 
    time  to time in the content hereof without obligation of D-R  Software 
    to  notify  any  person of such revision or  changes,  except  when  an 
    agreement to the contrary exists.

                                      - 3 -
 








                                    FFOORRWWAARRDD


    Audience:  This  manual is intended for programmers and others with  at 
               least  a moderate technical knowledge of small computers and 
               computer programming.

               It assumes the user is familiar with the basic operation  of 
               the  system on which the software resides,  and is  familiar 
               with the MS-DOS / PC-DOS operating system(s).


    Scope:     This  manual will describe the features and commands of  D-R 
               Software's  DR-EDIT program editor.   Though it covers every 
               aspect  of  the editor,  it is not intended  as  a  training 
               manual for novice programmers.

                                      - 4 -
 
                                _II_.._  _  _PP_EE_RR_SS_PP_EE_CC_TT_II_VV_EE


    11..11    DDRR--EEDDIITT  ------  AAnn  iinnttrroodduuccttiioonn

    D-R  Software  is pleased to introduce a microcomputer  program  editor 
    that  has  been drastically needed for a long time in  the  programming 
    community.   By emulating the best features of existing word processors 
    and  editors,  and by also adding new features of its own,  DR-EDIT has 
    emerged to literally take the place of existing software of its kind by 
    taking the chore out of editing program text as well as increasing  the 
    productivity of its users.

    D-R Software has put painstaking efforts into the design of this editor 
    by exploring the special minute-by-minute needs of programmers and then 
    implementing this knowledge into the production of an editor that  uses 
    the  memory-mapped  video  and  expanded  memory  capabilities  of  the 
    computer being used.   In addition, some especially attractive features 
    have  been added that addresses some of the day to day problems of  the 
    programmers that use the current artificial intelligent languages.


    11..22    TThhee  rraannggee  ooff  DDRR--EEDDIITT

    DR-EDIT was developed for use on the MS-DOS/PC-DOS operating system(s).  
    Within  the  world of this operating system,  DR-EDIT can  be  used  to 
    create  and  edit  any ASCII file,  either program text files  or  data 
    files.   This editor is also sensitive to the use of subdirectories and 
    can  edit a file in a particular subdirectory even if the user  is  not 
    currently logged in to it.

    Some  of  the features that make DR-EDIT useful for editing  any  ASCII 
    file are listed below:

         1.  DR-EDIT offers "horizontal scrolling" extending the width 
             of the screen beyond the physical limit of 80 characters. 
             The  maximum length of a line is approximately 32K  which 
             is most likely more than will ever be necessary.

         2.  Limits  to the length of a file are related to the amount 
             of memory available on the machine with an overall  limit 
             of 9,999 lines.   This too is probably more capacity than 
             will be needed during normal use.

         3.  DR-EDIT  offers the capability to edit two files  at  the 
             same time (concurrently).  This allows you to "flip" back 
             and  forth  between  the two files which  becomes  mighty 
             handy in certain circumstances.

         4.  Another  feature  that  makes this editor  a  useful  and 
             productive   tool   is  its  ability  to   build   macro-
             instructions.   This  feature  allows you  to  execute  a 
             sequence  of  commands with a single keystroke using  the 
             function keys.

                                      - 5 -
 
    An  additional feature that makes this editor useful in the  artificial 
    intelligence  world is the use of an algorithm that will match  certain 
    special  characters  such  as  parentheses(`()'),  brackets(`[]'),  and 
    braces(`{}').   This is particularly useful when a programmer is trying 
    to  keep  track  of these characters in programming languages  such  as 
    LISP, PROLOG, and perhaps even C.

                                      - 6 -
 


                         _II_II_.._  _  _TT_HH_EE_  _SS_TT_RR_UU_CC_TT_UU_RR_EE_  _OO_FF_  _DD_RR_--_EE_DD_II_TT


    22..11    LLOOAADDIINNGG  DDRR--EEDDIITT

    DR-EDIT  is  supplied on a floppy disk under the file name  DREDIT.EXE.  
    You may copy this file onto any disk or any subdirectory that you wish.  
    To start the program, type the following command at the DOS prompt:

         C> _D_R_E_D_I_T_ _<_f_i_l_e_n_a_m_e_>

    The  file name is optional in the respect that if it is not entered  at 
    the command line level,  you will be prompted for it upon entering  the 
    program.  You may enter a file name in the form that corresponds to the 
    forms that are valid for a normal DOS file.  That is, you may specify a 
    drive,  a subdirectory,  and an extension along with the file name.  An 
    example of a valid file name is:

         _C_:_\_G_A_M_E_S_\_E_X_A_M_P_L_E_._B_A_S


    22..22    CCRREEAATTIINNGG  AA  NNEEWW  FFIILLEE

    If  you load DR-EDIT and include a file name that does not exist on the 
    disk,  then  DR-EDIT will create a new file.   You may then type  text.  
    All the text that is typed in,  will be in RAM and will not be saved to 
    disk until you request to save it with the <Q>uit command (See  section 
    3.15 for the QUIT command).


    22..33    EEDDIITTIINNGG  AANN  EEXXIISSTTIINNGG  FFIILLEE

    If the file name that is entered exists on the disk,  then DR-EDIT will 
    read  that file in its entirety and place the information into RAM  for 
    editing.   The  editing work that is done affects ONLY the text  buffer 
    (RAM),    without   accessing  the  disk  unless  you,   the  operator, 
    specifically request disk access.

    When  you  terminate the DR-EDIT session with  the  QUIT  command,  the 
    following  events take place automatically.   The existing file that is 
    on the disk is renamed to a file with the same name except with a  .BAK 
    extension.   Then the information that resides in RAM is written to the 
    file name that you specified.


    22..44    TTHHEE  TTEEXXTT  BBUUFFFFEERR

    The  size of the text buffer area depends on the amount of memory  that 
    is  available  on  the system.   DR-EDIT uses the memory  that  is  not 
    already being used by the operating system and the program. 

                                      - 7 -
 
    In  addition to the above limitation,  the program calculates a  number 
    from the amount of memory left that serves as a maximum number of lines 
    that  you  may enter for a single file.   This number  is  really  only 
    relevant on systems with low memory (256K or less).  The maximum number 
    of lines on any file can only go up to 9,999 lines.


    22..55    CCOOMMMMAANNDDSS

    Upon entering DR-EDIT,  the system is in the COMMAND mode of operation.  
    In  this  mode,  you  may perform a variety of different  functions  by 
    pressing  almost  any key on the keyboard.   Care should  be  taken  to 
    remember what mode you are as you type on the keyboard.

    To  type in text,  you must enter one of two other modes in the  system 
    --- INSERT  mode  or  CHANGE mode.   You may get into  these  modes  by 
    pressing the 'I' or 'C' keys respectively while in COMMAND mode.

    You  will know what mode you are in by looking at the status line which 
    is at the top of the display.  

    You  may always return to the COMMAND mode by pressing the  <ESC>  key.  
    This  may  even  be  done  when you have entered  a  command  that  has 
    subsequent questions.

    In addition to the commands in COMMAND mode,  there are other  commands 
    that  may  be  executed no matter what mode the system  is  in.   These 
    commands are referred to as 'immediate commands'.


    22..66    DDRR--EEDDIITT  WWIINNDDOOWWIINNGG  SSYYSSTTEEMM  &&  CCUURRSSOORR  MMOOVVEEMMEENNTT

    DR-EDIT  has  a  sophisticated  windowing system  that  allows  you  to 
    randomly  move around within a file.   You may think of your file as  a 
    painters  canvas  of  which you can only see a small portion  called  a 
    viewport.   You have control over that viewport and may move it  around 
    on  the  canvas displaying any section of your canvas (file)  that  you 
    want. This cursor movement is accomplished through the use of the arrow 
    keys  and as side effects to certain commands that are executed in  the 
    editor.

    The  current location within the file being edited is always  displayed 
    in the status line that is displayed at the top of the screen.

    Besides the functions associated with the arrow keys, there are several 
    other functions that can be used to alter the position of the cursor on 
    the  screen and/or change the entire viewport area.  Some of these  are 
    listed  below  with  a  brief description  of  each.   Sometimes  these 
    functions  have different key assignments depending on the machine  you 
    are using.   To see what keys are associated with the desired functions 
    on a particular machine, see Appendix `A'.

         1.  The  paging keys make it possible to move from screen  to 
             screen.

                                      - 8 -
 
         2.  The  <TAB> key allows movement across a line in intervals 
             which are user-definable.

         3.  The <B> command and the <E> command described in  section 
             III  will  move the cursor to the beginning or end  of  a 
             screen or file.

         4.  <CTRL-J> (linefeed) will move the cursor to the beginning 
             or end of the current line. 

    There  are  other  commands that will change the display  due  to  side 
    effects.  These will become apparent through the use of the editor.

                                      - 9 -
 
                            _II_II_II_.._  _  _DD_RR_--_EE_DD_II_TT_  _CC_OO_MM_MM_AA_NN_DD_SS


    33..11    BB  ------  BBeeggiinnnniinngg  ooff  SSccrreeeenn,,  BBeeggiinnnniinngg  ooff  TTeexxtt

    This  command  is used to move the cursor to the HOME position  of  the 
    screen  or  to  move  the cursor as well as the viewport  to  the  home 
    position of the file.

    By  pressing  the <B> key once,  the cursor is positioned at the  upper 
    left hand corner of the screen.  If you immediately press it again, the 
    viewport is moved to the beginning of the file and the cursor is placed 
    at line 1 - column 1.


    33..22    CC  ------  CChhaannggee  mmooddee

    By pressing the <C> key,  the editor enters the CHANGE mode.   In  this 
    mode,  everything  you  type will overwrite what is immediately at  the 
    cursor position.  

    Like the INSERT mode, you can type beyond the 80 columns that appear on 
    the screen.   The screen will shift horizontally when there is no  more 
    room to place text.

    The  <BACKSPACE>  key places a space over the character to the left  of 
    the cursor and then positions the cursor at that position.

    You may also enter the change mode by pressing the <INS> key.  This key 
    toggles back and forth between INSERT mode and CHANGE mode.

    You  may exit the CHANGE mode at any time simply by pressing the  <ESC> 
    key.


    33..33    DD  ------  DDeelleettee  aa  cchhaarraacctteerr

    The delete command deletes the character under the cursor and moves the 
    remaining characters on the line to the left one space.


    33..44    EE  ------  EEnndd  ooff  SSccrreeeenn,,  EEnndd  ooff  TTeexxtt

    This command performs the opposite task as the <B> key (see section 3.1 
    above).   By pressing any one of these keys once,  the cursor will move 
    to  the  bottom  left corner of the  current  screen.   By  immediately 
    pressing  the key a second time,  the cursor will be positioned to  the 
    end of the file being edited.

                                     - 10 -
 

    33..55    FF  ------  FFiillee  ooppeerraattiioonn

    The  file operation command has a number of different options that  are 
    associated with it.  With this command, you may read from a file on the 
    disk,  write  to a file on the disk,  erase a file on the disk,  get  a 
    directory listing,  enter/change the buffer area, or kill the alternate 
    buffer (if it exists).

    Upon pressing the <F> key, DR-EDIT will give the following prompt:

         FILE OPERATION (R, W, E, D, B, K):

    You then have the option of the operation that you desire.   Below is a 
    list of the available options and the instructions on their usage.

         R => (read from a file)
              The <R> command of the file operation allows the user to 
              read  from  an existing file on the disk and place   the 
              new text at a specific location in the text buffer.  The 
              following prompts will be given displayed on the command 
              line for user response:

                   FILE NAME: 

                   BEGINNING OF SECTION:            END OF SECTION:

                   INSERT AT LINE:


         W => (write to a file)
              Next,  the <W> command allows you to write a section  of 
              text  from  the  buffer  to a file  on  the  disk.   The 
              following information will be prompted for:

                   FILE NAME:

                   BEGINNING OF SECTION:            END OF SECTION:

              It is important to note here that if the file name given 
              above is the name of a file that already exists, DR-EDIT 
              will append the section to the end of that  file.   That 
              is,  if  you  want to replace an existing file with  the 
              section indicated,  you must first erase that file using 
              the next option (E).

                                     - 11 -
 

         E => (erase a file)
              <E> is the command to erase a file from the  disk.   You 
              will be prompted for the file to erase as shown below:

                   FILE NAME: 

              If that file exists, you will be prompted with:

                   ARE YOU SURE? (Y/N)

              This is your last chance to stop.   If you answer <Y>es, 
              the file that you named will be deleted from the disk.


         D => (directory)
              The  <D> command will display the directory  listing  of 
              the specified disk and file/pattern.   The file  pattern 
              mask   can  be  any  legal   MS-DOS  file  specification 
              including wildcards (ie.  *.*,  EXAMPLE.?AS).  Enter the 
              pattern to the following prompt:

                   DIRECTORY PATTERN:


         B => (buffer toggle)     
              The  buffer toggle is a very useful feature of  DR-EDIT.  
              It   gives   the   capability  of  editing   two   files 
              simultaneously  by setting up an alternate  text  buffer 
              from which you can toggle back and forth.

              If  an  alternate buffer has already  been  established, 
              this  command does nothing more than act as a toggle  to 
              move from one text buffer to another.

              If  you have not previously set up the alternate buffer, 
              this command will prompt you for the name of the  second 
              file  you  wish to edit,  

                   FILE NAME:

              and then read it into its own buffer.


         K => (Kill alternate buffer)
              This command will allow you to kill the alternate buffer 
              from memory.  This will give you the ability to bring in 
              another file into the alternate buffer area.

              When this command is executed,  the editor will give you 
              the  option of saving the alternate buffer before it  is 
              killed from memory with the following prompt:

                         SAVE IT FIRST? (Y/N)

                                     - 12 -
 
    33..66    HH  ------  DDiissppllaayy  HHeellpp  SSccrreeeenn

    By  pressing the <H> key,  DR-EDIT displays a single help screen on the 
    display.   This  screen  contains each of the commands in  the  DR-EDIT 
    system with a brief description of what the command does.

    You may return to the editor by simply pressing any key.


    33..77    II  ------  IInnsseerrtt  mmooddee

    When this key is pressed,  the editor enters the Insert mode.  While in 
    insert  mode,  anything  you  type will be inserted into  the  text  by 
    opening a space at the current cursor position and moving everything to 
    the right of the cursor one space.

    If the <BACKSPACE> key is pressed while in Insert mode,  the  character 
    immediately  to  the left of the cursor is deleted and everything  from 
    the current cursor position to the end of the line is moved to the left 
    one space.

    If the <RETURN> key is pressed,  a line is opened up following the line 
    on  which  the cursor resides and the cursor is placed at column  1  of 
    the new line that was created.


    33..88    JJ  ------  JJuummpp  ttoo  aa  ssppeecciiffiieedd  lliinnee

    This  command allows you to move the cursor and viewport to a  specific 
    line of the file being edited.   When this command is executed, DR-EDIT 
    will ask:

         LINE:

    Enter  the  number  of the line that you want to "jump"  to  and  press 
    <RETURN>.  The editor will then move to that line.


    33..99    KK  ------  KKiillll  aa  lliinnee

    The  <K>ill  command  deletes the line  where  the  cursor  lies.   The 
    following lines are then moved up one line.   To accomplish this, place 
    the cursor on the line to be deleted,  and while in COMMAND mode, press 
    the <K> key on the keyboard. 


    33..1100    LL  ------  LLoowweerr  CCaassee

    The <L> command changes all the characters on the line where the cursor
    is to lower case.


                                     - 13 -
 
    33..1111    MM  ------  MMoovvee//CCooppyy  aa  sseeccttiioonn  ooff  tteexxtt  wwiitthhiinn  tthhee  bbuuffffeerr

    <M>ove  is  the command to move/copy a block of text from one place  to 
    another  within the current text buffer.   By pressing the <M>  key  in 
    COMMAND mode, you will be prompted:

         BEGINNING OF SOURCE:
         ENDING OF SOURCE:
         DESTINATION:

    After answering the above questions, you can decide whether you want to 
    copy the section,  keeping the source section where it is,  or move the 
    section and deleting the source section from the buffer.   DR-EDIT will 
    prompt you for this with:

         REMOVE SOURCE (Y/N)?

    By answering <Y>es, the section will be copied to the desired place and 
    the  number  of lines copied will be deleted starting at the  beginning 
    line of the source section.

    If  you answer <N>o,  the section will simply be copied to the  desired 
    place.


    33..1122    NN  ------  TTooggggllee  LLiinnee  NNuummbbeerrss

    By pressing the <N> key,  reference line numbers will be placed to  the 
    left  of  the text display.   These line numbers are extremely  helpful 
    when referencing sections of text or looking for a specific line.  This 
    key acts as a toggle by displaying the numbers if they are not  present 
    and removing them if they are.


    33..1133    OO  ------  OOppeenn  aa  lliinnee

    The  <O> command opens a line of text before the line where the  cursor 
    is  currently  located.   This is useful in inserting new lines in  the 
    text buffer.


    33..1144    PP  ------  PPrriinntt  aa  sseeccttiioonn  ooff  tteexxtt  oonn  tthhee  pprriinntteerr

    DR-EDIT  has the capability of printing a section of text in  the  text 
    buffer  to the printer.   This is done by pressing the <P> key while in 
    command mode.   You will then be prompted for the section of text  that 
    you desire to print:

         BEGINNING OF SECTION:            END OF SECTION:

    Upon  answering the above prompts,  DR-EDIT will then print the desired 
    section.

                                     - 14 -
 

    33..1155    QQ  ------  QQuuiitt

    The  <Q>uit command allows you to exit the DR-EDIT system  and  returns 
    control  to  the MS-DOS/PC-DOS operating system.   By pressing the  <Q> 
    key, the following prompt will be displayed:

         QUIT (S, A, N)?

    The sub-commands (S,  A,  N) are shown below along with their  meanings 
    and other pertinent information.

         S =>  (Save text buffer)
               By entering <S> to the above prompt, DR-EDIT will enter 
               the  saving process.   If there is no alternate  buffer 
               active, the system will immediately save the buffer and 
               exit to the operating system.   However, if there is an 
               active  alternate buffer,  the following prompt will be 
               displayed for each buffer:
               
                    SAVE PRIMARY BUFFER? (Y/N)
                             or
                    SAVE ALTERNATE BUFFER? (Y/N)

               A  <Y>es response will cause the system to save  buffer 
               while a <N>o response will abort the text buffer.

               After  the buffers have been either saved  or  aborted, 
               DR-EDIT will exit to the operating system.

         A =>  (Abort text buffer)
               The  <A> option of the QUIT command immediately  aborts 
               the text buffer and returns to the operating system.

         N =>  (No abort or save desired)
               This  option  is synonimous to pressing the <ESC>  key.  
               It  simply returns you to the COMMAND mode  of  DR-EDIT 
               for further text editing.


    33..1166    RR  ------  RReemmoovvee  sseeccttiioonn  ooff  tteexxtt

    This  command will remove a specified section of text from the  current 
    text buffer.   You will specify the section by giving the beginning and 
    ending line numbers to the following prompt:

         BEGINNING OF SECTION:         ENDING OF SECTION:

    DR-EDIT will then delete the section including the two lines specified.


                                     - 15 -
 
    33..1177    SS  ------  SSeeaarrcchh  aanndd  RReeppllaaccee

    The  <S>earch  command is used to search for (and possibly  replace)  a 
    given  string  of characters.   DR-EDIT will prompt for the  string  to 
    search for,  the string to replace it with,  the extent of the  search, 
    and whether you want to globally search and replace (non-stop  replace
    ment) or view and execute the replacement manually.

    The  search  process  searches the desired section of the  file  for  a 
    series  of  characters  that match the pattern entered  in  the  search 
    string.   This pattern can contain a series of letters and digits, plus 
    the following wildcard characters:

         #   =>  represents any digit
         !   =>  represents any upper-case or lower-case letter
         ?   =>  represents any character
         \   =>  the character following this character is treated
                    as a literal character and does not serve as a
                    wildcard character.

    When the <S> key is pressed, the following prompts are displayed:

         SEARCH STRING:  =>  Enter  the string that you wish to search 
                             for in either upper or lower case.

         REPLACE STRING: =>  Enter  the exact string that you want  to 
                             replace the search string with.

         EXTENT OF SEARCH? (A, C, L):  =>   This   prompt   gives  you 
                             several  options on how much of the  file 
                             you  want to search.   The three  options 
                             are listed below:

                       A ->  Search  the entire (ALL) file starting at 
                             the beginning.

                       C ->  Search  from the cursor position  to  the 
                             end of the file.

                       L ->  Search  a  specific line section  of  the 
                             file.   You  will  be  prompted  for  the 
                             beginning  of the section and the end  of 
                             the section.

         NON-STOP REPLACEMENT? (Y/N)   =>   Answering  <Y>es  to  this 
                             prompt  will  search the  specified  area 
                             replacing  every occurrance of the search 
                             string with the replacement string.

                             Answering  <N>o  means you will  have  to 
                             manually perform the search process using 
                             the   <CTRL-S>  and   <CTRL-X>   commands 
                             described in section IV.

                                     - 16 -
 

    33..1188    TT  ------  TTaabb  CCoonnttrrooll

    DR-EDIT has a mechanism installed which allows you to manually set your 
    own tab stops.   This is done by placing the cursor on the column  that 
    you  want the tab stop to be set at and pressing the <CTRL-T> key  (ie. 
    press  the  <CTRL> key and the <T> key simultaneously).   This is  also 
    explained in the following IMMEDIATE COMMAND section under the <CTRL-T> 
    command (4.15).

    When  DR-EDIT is started,  the default tabs are placed at every  eighth 
    column.  To change this, you would use the <CTRL-T> procedure mentioned 
    above.  However, to return the editor to the original default tabs, the 
    <T>ab command will perform this task.  

    Another  thing that the tab control command does is to expand  any  tab 
    characters  (ASCII  character nine (9)) to eight spaces.   This  is  an 
    irrelevant  feature  if all you use is the DR-EDIT system,  as  DR-EDIT 
    never puts in tab characters anyway.   However,  other editors may  put 
    these tab characters in and if you are not a lover of these characters, 
    this command may be a favorite of yours.

    When the <T> key is pressed, the following prompt is displayed:

         SELECT TABULATE OPTION? (D, X)

    You then can choose between the two options that are listed.  These are 
    described below:

         D =>  (Default tabs)
               This  option  returns  the tab stops to  their  default 
               status.

         X =>  (Expand tabs)
               This  option  expands all tab characters  that  may  be 
               present in the file to eight spaces.


    33..1199    UU  ------  UUppppeerr  ccaassee

    The <U> command changes all the characters on the line where the cursor
    is to upper case.


    33..2200    ZZ  ------  ZZaapp  ttoo  eenndd  ooff  lliinnee

    This  command  deletes all the characters on the line where the  cursor 
    lies  from  the cursor position to the end of the  line  including  the 
    character under the cursor.

                                     - 17 -
 
                            _II_VV_.._  _  _II_MM_MM_EE_DD_II_AA_TT_EE_  _CC_OO_MM_MM_AA_NN_DD_SS


    Immediate  commands  are  commands that are executed  immediately  upon 
    pressing the key.   Most of these commands are executed by pressing the 
    <CTRL> key and a letter at the same time and are different from  normal 
    commands  in  the fact that they can be executed when the system is  in 
    INSERT mode and CHANGE mode, as well as COMMAND mode.
    

    44..11    CCTTRRLL--AA    ------    AAppppeenndd  lliinnee

    The  <CTRL-A>  command will combine the line immediately following  the 
    line  where  the cursor is with the line that the cursor  is  currently 
    sitting on.


    44..22    CCTTRRLL--BB    ------    BBeeggiinnnniinngg  ooff  bblloocckk

    When  <CTRL-B>  is  pressed,  the line where the  cursor  is  currently 
    sitting will be used as the beginning line in some of the commands that 
    were  described  in section III.   Some of these commands  are  <M>ove, 
    <R>emove,  <P>rint,  and  <F>ile  operation.   When these commands  are 
    executed, the line number of the beginning of block will be used as the 
    default value for the prompt:

         BEGIN. OF SECTION:


    44..33    CCTTRRLL--CC    ------    CChhaannggee  CCaassee

    When this key is pressed,  the case of the character that resides under 
    the  cursor will be reversed and the cursor will be moved one space  to 
    the right.   That is,  if the character is an upper case character,  it 
    will  be  changed to lower case,  and if the character is a lower  case 
    character, it will be changed to upper case.


    44..44    CCTTRRLL--DD    ------    DDeelleettee  aa  wwoorrdd

    The  <CTRL-D>  key  will  delete all the  characters  from  the  cursor 
    position to the next special character (i.e.  the end of the word)  and 
    move all the characters to the right of the deleted word to the left.


                                     - 18 -
 
    44..55    CCTTRRLL--EE    ------    EEnndd  ooff  bblloocckk

    When  <CTRL-E>  is  pressed,  the line where the  cursor  is  currently 
    sitting  will be used as the ending line in some of the  commands  that 
    were  described  in section III.   Some of these commands  are  <M>ove, 
    <R>emove,  <P>rint,  and  <F>ile  operation.   When these commands  are 
    executed,  the  line  number of the end of block will be  used  as  the 
    default value for the prompt:

         END OF SECTION:


    44..66    CCTTRRLL--GG    ------    GGeett  aa  lliinnee

    <CTRL-G> will get the line where the cursor is positioned and put it in 
    a  temporary storage area.   This line can then be recalled at any time 
    using the <CTRL-Y> (Yank) command.


    44..77    CCTTRRLL--II  ((TTAABB))  ------  TTaabb

    When the <TAB> key is pressed the cursor is positioned at next  defined 
    tab stop on the current line.   Tab stops may be set using the <CTRL-T> 
    key which is described later in this section. 

    NOTE:  When DR-EDIT is in INSERT mode,  spaces will be inserted and all 
           the characters to the right of the cursor will be shifted to the 
           right.


    44..88    CCTTRRLL--JJ  ((LLIINNEEFFEEEEDD))    ------    BBeeggiinnnniinngg,,  EEnndd  ooff  lliinnee

    If  the  cursor  is not positioned at column one of the  current  line, 
    pressing this key will move the cursor to this column. 

    However,  if the cursor is at column one,  this key will move it to the 
    end of the line.

    DR-EDIT also has the feature that if the <SHIFT> key and the <LINEFEED> 
    key are pressed at the same time,  the cursor will also move to the end 
    of the line.


                                     - 19 -
 
    44..99    CCTTRRLL--KK    ------    KKiissss  mmaattcchhiinngg  ssyymmbbooll

    When  the  <CTRL-K> key is pressed while the cursor is positioned  over 
    one of the following characters:

                         ( [ { } ] )

    DR-EDIT  will attempt to find its match and kiss it  for  approximately 
    two seconds.

    For  example,  If  the  cursor is sitting on a '(' and  a  <CTRL-K>  is 
    pressed, then the system would attempt to find a ')' that is its match.  
    This  means  that if there are parentheses (or any other of  the  above 
    symbols) that are nested,  ie.  (a + (b * c)), the system will kiss the 
    correct symbol.


    44..1100    CCTTRRLL--LL    ------    LLeefftt  oonnee  wwoorrdd

    Pressing  <CTRL-L> will move the cursor to the left one word.   If  the 
    cursor  is  already at the beginning of the line,  no  action  will  be 
    taken.


    44..1111    CCTTRRLL--NN    ------    TTooggggllee  lliinnee  nnuummbbeerrss

    By pressing the <CTRL-N> key,  reference line numbers will be placed to 
    the left of the text display.  These line numbers are extremely helpful 
    when referencing sections of text or looking for a specific line.  This 
    key  acts as a toggle by displaying the numbers if they are not present 
    and removing them if they are.

    Note:  This is the same command as the <N> command described in Section 
           III (3.12).


                                     - 20 -
 
    44..1122    CCTTRRLL--PP    ------  AAuuttoommaattiicc  ppaarreenntthheessiiss  mmaattcchhiinngg  sswwiittcchh

    <CTRL-P>  is  a switch that turns on and off the automatic  parenthesis 
    matching  feature  of DR-EDIT.   When the system is in INSERT  mode  or 
    CHANGE mode and one of the following characters is typed:

                         ( [ { } ] )

    DR-EDIT  will attempt to find its match and kiss it  for  approximately 
    one second.

    This  is basically the same feature as the <CTRL-K>  feature  described 
    above,  except  that  it happens automatically when the characters  are 
    typed.  While the system is searching for a match, the message:

                                   MATCHING
    
    will  appear on the command line.   You may abort the matching  process 
    simply by typing the next character in your text.


    44..1133    CCTTRRLL--RR    ------    RRiigghhtt  oonnee  wwoorrdd

    Pressing <CTRL-R> will move the cursor to the right one word.   If  the 
    cursor is already at the end of the line, no action will be taken.


    44..1144    CCTTRRLL--SS    ------  SSeeaarrcchh

    The  <CTRL-S>  key will search for the next occurance of search  string 
    defined  in the SEARCH command from section III (3.16).   It begins its 
    search at the cursor position.


    44..1155    CCTTRRLL--TT    ------  SSeett  ttaabb  ssttoopp

    This  command  sets a tab stop at the cursor  position.   Whenever  the 
    <TAB> key is pressed, the cursor will stop at each of the tab positions 
    defined.

    To remove the defined tab stops,  and return the system to its  default 
    status, use the <T>ab command described in section III (3.17).


                                     - 21 -
 
    44..1166    CCTTRRLL--UU    ------  UUnnkkiillll

    DR-EDIT  has  a method of restoring lines that were deleted  using  the 
    <K>ill  command  (Section III - 3.9).   There is a  30  line  revolving 
    buffer that allows you to recover these deleted lines.

    To restore a line, place the cursor where you want the restored line to 
    go  and press <CTRL-U>.   The line will be recalled from the buffer and 
    will be placed before the line where the cursor is sitting.

    NOTE:  This command will not retrieve lines that were deleted with 
           the <R>emove command (Section III - 3.16).


    44..1177    CCTTRRLL--WW    ------  WWoorrkkiinngg  mmeemmoorryy  ssttaattuuss

    <CTRL-W>  is  used to find out how much memory you have  left  in  your 
    system, the current drive of the file being edited, or the current path 
    of  the  file.   When  this key is pressed,  the  information  will  be 
    displayed  on the command line at the top of the screen.   To return to 
    normal editing, simply press any key.


    44..1188    CCTTRRLL--XX    ------  EExxeeccuuttee  tthhee  rreeppllaacceemmeenntt  ffrroomm  aa  sseeaarrcchh

    When  the  system  finds  a match of the search string  in  the  SEARCH 
    command,  pressing  <CTRL-X>  will replace the string  found  with  the 
    replacement string which was given to the prompt:
    
         REPLACE STRING:
    
    After the replacement is executed, the system will begin another search 
    for another occurrance of the search string.


    44..1199    CCTTRRLL--YY    ------  YYaannkk  ((ppuutt))  ssttoorreedd  lliinnee

    <CTRL-Y>  will  get the line in the temporary storage area (saved  with 
    the  <CTRL-G> command) and place it immediately before the  line  where 
    the cursor is sitting.


    44..2200    CCTTRRLL--ZZ    ------  ZZaapp  ttoo  eenndd  ooff  lliinnee

    This  command  deletes all the characters on the line where the  cursor 
    lies  from  the cursor position to the end of the  line  including  the 
    character under the cursor.


                                     - 22 -
 
    44..2211    SSHHIIFFTT--RREETTUURRNN    ------  BBrreeaakk  aa  lliinnee

    By pressing the <SHIFT> key and the <RETURN> key at the same time,  you 
    can  make  DR-EDIT take all the characters to the right of  the  cursor 
    (including  the character under the cursor) and put them on a new  line 
    immediately following the line where the cursor is currently sitting.

                                     - 23 -
 
                              _VV_.._  _  _MM_AA_CC_RR_OO_  _CC_OO_MM_MM_AA_NN_DD_SS

    DR-EDIT  has  included the ability to combine several commands  into  a 
    single  command called a "macro command".   These specialized  commands 
    are  very useful and can increase productivity and efficiency  greatly.  
    You  can  have up to ten different macros defined at  one  time.   Each 
    macro  is  associated  with one of the function keys on  the  keyboard.  
    That is, pressing the <F1> key will perform macro #1, <F2> will perform 
    macro #2, etc.

    Building  a macro command is as easy as performing the editing  process 
    that you want the macro to be.

    To start the building process,  press the function key that you want to 
    define.   A  function  key counter will appear at the far right of  the 
    command  line.   Each time a key is pressed,  it is added to the  macro 
    being built and the key counter is incremented.

    To stop the building process, again press the function key that you are 
    defining.  DR-EDIT will save the new macro into the file:

           DREDIT.FNC

    which  will  be stored on the currently logged disk drive in  the  root 
    directory.

    At  this  point,  every time you press this function key that you  have 
    just defined, the macro will be executed.

    To  clear  the  macro from memory,  you may  simultaneously  press  the 
    <SHIFT>  key  and the function key that you want to clear.

                                     - 24 -
 
                                 _AA_PP_PP_EE_NN_DD_II_XX_  _``_AA_''


    Below  is  a  list of some special keys that are used  by  the  DR-EDIT 
    system.   Some of these keys are duplications of regular commands which 
    will  significantly  increase your productivity in your  editing  task.

    The  keys  that are used may vary depending on the type of  system  you 
    have.  This list is divided into two specific brands of computers.

    Please  note that when the items enclosed in `<>' are actual keys  that 
    are  pressed  to  activate the function or  command.   Items  that  are 
    displayed  with the <CTRL-xxx> or <SHIFT-xxx> conotation mean that  you 
    are  supposed to press the <CTRL> key or <SHIFT> key and the other  key 
    referenced at the same time.  Please note that the TI-PC keys will also 
    work on the IBM-PC (ie. <SHIFT-HOME> is the same as <END>).


       FUNCTION                                   IBM-PC
          or                                        or
       COMMAND           DESCRIPTION             Compatible      TI-PC
       ========       ====================      ===========     =======

         B            (Beg. of screen/file)        <HOME>        <HOME>
         E            (End of screen/file)         <END>      <SHIFT-HOME>
       <CTRL-R>       (Word right)              <SHIFT-RIGHT> <SHIFT-RIGHT>
       <CTRL-L>       (Word left)               <SHIFT-LEFT>  <SHIFT-LEFT>
    Previous screen   (Page back)                 <PGUP>      <SHIFT-UP>
      Next screen     (Page ahead)                <PGDN>      <SHIFT-DOWN>
         D            (Delete a character)        <DEL>          <DEL>
         K            (Kill a line)             <SHIFT-DEL>   <SHIFT-DEL>
       I or C         (Insert or change)          <INS>          <INS>


                                     - 25 -
 
                      DDRR--EEDDIITT  RReeggiissttrraattiioonn  aanndd  OOrrddeerr  FFoorrmm

    To become a registered user of the DR-EDIT program editor, complete the 
    order  form  below and send $30 to D-R Software at the address  on  the 
    order form.

    If  you  are  interested in a site-license agreement,  the  prices  are 
    listed below:

          1 - 24  copies   $30 each
         25 - 49  copies   $25 each
         50 - 99  copies   $20 each
         over 99  copies   $2000


    Name of user: _______________________________________


    Name of firm: _______________________________________


    Mailing address:  ___________________________________
                      
                      ___________________________________

                      ___________________________________


    Machine Type: (circle one)     IBM-PC or compatible         TI-PC


    Number of copies: ___________ @ $30/copy

    
    Total cost: ____________


    Where did you learn about this software? _____________________________
         (If from a bulletin board, please give the phone number.)


    Send to:     D-R Software
                 9206 Shadowcrest
                 College Station, TX   77840

                                     - 26 -
 
                         SSuuggggeessttiioonnss  aanndd  ""BBUUGG""  RReeppoorrttss

    D-R  Software has worked very hard to deliver a product that we feel is 
    a very useful tool and one that you will find enjoyable to use.  It has 
    been used quite extensively in production environments and has been met 
    with alot of praise.   However,  we realize that this editor cannot  be 
    all  things  to all people.   We also realize that a problem  with  the 
    editor  might arise from time to time (We are only human!).   It is for 
    this reason that we welcome any suggestions that you might have to make 
    DR-EDIT  a better product or any problems that you may  encounter.   We 
    have created the following report for you to communicate the nature  of 
    your  suggestions  or problems.   D-R Software cannot promise that  all 
    your suggestions will be implemented, but we can promise that they will 
    be considered.   Registered users will be notified of any updates  that 
    take place.


    SUGGESTIONS: __________________________________________________________

                 __________________________________________________________

                 __________________________________________________________

                 __________________________________________________________

                 __________________________________________________________

                 __________________________________________________________
                      (If there are any more, attach a separate sheet.)



                                  BUG Report


    What option or command were you using when the bug occurred? __________

    _______________________________________________________________________


    Describe the bug and what you were doing when it occurred.  Please give 
    as much detail as you can: 

    _______________________________________________________________________

    _______________________________________________________________________

    _______________________________________________________________________

    _______________________________________________________________________

    _______________________________________________________________________
                  (If there is more, attach a separate sheet.)

```
{% endraw %}

## FILE1046.TXT

{% raw %}
```
Disk No  1046
Program Title: DR-EDIT version 1.0
PC-SIG Version 1

    Tired of clumsy program editing tools? With DR-EDIT, program editing is
like wordprocessing. DR-EDIT emulates many common word processor and editor
features and is recommended for computer users with at least a moderate
technical knowledge of small computers and their programming. Given those
qualifications and one to two hours of practice, you can be up and running.

    DR-EDIT can create or edit ASCII files and offers "horizontal
scrolling" to extend the screen's usable width from 80 characters to 32K.
It has an overall length limit of 9,999 lines (this version is limited to
200 lines), the ability to concurrently edit two files, and a macro
capability to expedite routine or repeated manipulations. A special
algorithm is used which makes DR-EDIT especially useful with artificial
intelligence languages such as LISP, PROLOG, and C.

Usage: Programming Editor

System Requirements: 128K memory, one floppy disk drive, and a printer
(optional).

How to Start: Type DREDIT (press enter).

Suggested Registration: $30.00

File Descriptions:

DREDIT   DOC  Documentation (26 pages).
DREDIT   EXE  Main program file.
DREDIT   TI   Adaptations for TI systems.
DREDIT   IBM  Adaptations for IBM systems.
DREDIT   DSC  Adaptations for DSC systems.
DR_READ  ME   Introductory information.

PC-SIG
1030D E. Duane Avenue
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright 1988 PC-SIG, Inc.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1046

     Volume in drive A has no label
     Directory of A:\

    DREDIT   DOC     48384   2-24-88  12:44p
    DREDIT   DSC       512   2-24-88   1:34p
    DREDIT   EXE     54784   8-28-87  11:19a
    DREDIT   IBM     54784   8-28-87  11:19a
    DREDIT   TI      54784   9-23-87   1:08p
    DR_READ  ME       4736   1-01-80  10:33p
    FILE1046 TXT      1505   6-08-88  10:20a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   5-19-88   9:25a
    MANUAL   BAT       147   5-19-88   9:26a
           10 file(s)     220214 bytes
                           96256 bytes free
