---
layout: page
title: "PC-SIG Diskette Library (Disk #1347)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1347/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1347"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DB-VCR"

    Have you ever found yourself searching through a zillion video tapes to
    figure out which tape has, let's say, "Top Gun" on it?  And when you
    find it, you have to fast forward for about 10 or so minutes to find out
    where it starts on the tape?  Well, here is the answer you've been
    waiting for.
    
    db-VCR helps you keep track of all your videos, whether they are
    movies, instructional videos or music.  The program maintains a database
    of all your VCR tapes with titles, comments, where each entry on each
    tape starts, and so forth.  db-VCR is completely menu-driven, letting
    you easily add entries, search for and view specific titles and print
    sorted lists of your collection.  Mouse support is also provided. db-VCR
    looks great on color systems and the menus are wonderful.  It is so easy
    to use that it actually makes using the program fun.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DB-VCR.DOC

{% raw %}
```










    
    
    
                                  db-VCR
          
                 Shareware Video Cassette Database System
                           by: Michael R. Guffey
                         
    
                         System and Documentation 
                   Copyright (C) 1989 Michael R. Guffey
                           All Rights Reserved.
                              P.O. Box 675124
                         Marietta, Ga. 30067  USA

    
    
    
          This program is provided  as  is  without  any  warranties 
          expressed  or  implied.  The Author of the program assumes 
          no responsibility for misuse of this system or its parts. 

    


    db-VCR Video Cassette Database System    Documentation    Page 1




    
    

    

                             Table of Contents
    
     Item                                                       Page
     ================================================================

     Introduction............................................... 2
     General Description........................................ 2
     Registration & Evaluation Period........................... 2
     Installation............................................... 3
        Files used with the db-VCR system....................... 3
        Config.sys File Requirements............................ 3
        Hard disk installation.................................. 4
        Floppy disk installation................................ 4
     Loading the db-VCR system.................................. 5
     Using the db-VCR system.................................... 7
        Context Sensitive On-line Help system................... 8
        Viewing an entry........................................ 8
        Adding an entry......................................... 8
        Editing an entry........................................ 9
        Deleting an entry....................................... 9
        Listing entries......................................... 10
        Printing entries........................................ 11
        Searching entries....................................... 11
        Re-Indexing Database.................................... 12
        Quit to DOS............................................. 12
        Information Window...................................... 13
        Mouse Support........................................... 13
     Other Features of db-VCR................................... 15
        F3 Remember Key......................................... 15
        Custom Defined Entry Types.............................. 15
        Error Handling System................................... 16
       Upgrading to Higher Versions............................  16
     Conclusion................................................. 16
     Copyright Notices.......................................... 16

    

    db-VCR Video Cassette Database System    Documentation    Page 2
        
    INTRODUCTION 
    

         Have you ever found yourself searching thru a  zillion  video 
    tapes to figure out which tape has let's say 'Top Gun' on it.  And 
    when you find it,  you have to fast forward or rewind for about 10 
    or so minutes to find out where it starts on the tape?  Well  here 
    is the answer you've been waiting for.  A Shareware Video Cassette 
    Database  system to keep track of all those tapes whether they are 
    movies, instructional videos or music,  etc.  Just load the db-VCR 
    system,  input your VCR tape info.  and now your entire video tape 
    collection can be available to you at the touch of a few  keys  on 
    your keyboard. (or a few clicks with your mouse!) 

                                                       Happy 
                                                       VCR'ing 

    GENERAL DESCRIPTION
    

         db-VCR is a Video Cassette Database system for use with  your 
    IBM  or  compatible  personal  computer.  db-VCR will allow you to 
    maintain a database of all your VCR tapes with  titles,  comments, 
    where  each entry starts on each tape,  starring actor and actress 
    names, plus plenty more. db-VCR is fully menu-driven with powerful 
    database features,  which rival those of more expensive commercial 
    systems.  Whether  your  VCR  uses VHS or BETA tapes,  db-VCR will 
    handle all of your VCR tape collection information. 
    

    REGISTRATION AND EVALUATION PERIOD
    

         db-VCR is widely available today on many of the most  popular 
    electronic  Bulletin  Boards as well as via Shareware distribution 
    companies.  db-VCR is currently available in over 25 countries and 
    has become known as one of the most featured packed systems of its 
    kind.  You,  as  a  user  are  allowed to make unlimited copies of 
    db-VCR and are encouraged to pass along copies  of  NON-REGISTERED 
    versions of the system to all your friends and colleagues. 
            
         All   rights   with   respect   to  distribution,   sale  and 
    modification of db-VCR reside with Michael R.  Guffey,  the author 
    and  developer  of  the  system.  New users may try out the db-VCR 
    system for an evaluation period of 30 days without having the need 
    to register db-VCR.  However,  after the evaluation period if  you 
    decide  to  continue  using the db-VCR system you must register by 
    sending a check or money order for  $17.95 US (Foreign orders must
    add an extra $2.00) and a completed registration form to me at the 
    address  provided.  A  registration  file named REGISTER.ME should 
    accompany your system.  If the REGISTER.ME file is  not  available 
    then please send a form containing your name, address, phone, type 
    of computer,  version of db-VCR,  type of disk needed,  along with 
    $17.95 US to me to act as your registration. 
    
    

    db-VCR Video Cassette Database System    Documentation    Page 3
    
         Shareware  is  a  strong  systematic  approach  to  providing 
    quality software to users at low prices.  Whenever you receive any 
    shareware  program  that  you  feel is worth while and you wish to 
    use,   please  register  your  version  with  the   author.   Your 
    registration  and  support  will  help  keep the shareware concept 
    alive and the market filled with quality software. 

    
    INSTALLATION
    

         db-VCR  is  designed  for  IBM  and  compatible computers and 
    operates under PC or MS DOS Version 2.0 or higher with  atleast  1 
    floppy  drive  or a hard disk drive.  db-VCR requires atleast 320K 
    RAM (depending on your version of DOS).  db-VCR can be run with or 
    without  a  color monitor (Color is supported favorably!) and does 
    not require a graphics card for full use.  There is no  limitation 
    to  the  size of your db-VCR database except that you have a large 
    enough disk to handle all of your entries. 
    
         Presently  db-VCR  is only available as a single user system. 
    The system however,  can be used in a  networking  environment  if 
    configured  as  a  single  user  application.   If  you  have  any 
    questions regarding the use of db-VCR in a networking environment, 
    please contact me for information. 

                  Files used and/or created with db-VCR:
                  --------------------------------------

           db-VCR.EXE  - the main program
           db-VCR.DOC  - documentation file you are reading
           db-VCR.HLP  - Online db-VCR help database
         * db-VCR.SYS  - db-VCR system file
         * MOVIE.DAT   - db-VCR database file (dbase compatible!)
         * MOVIE.D1X   - db-VCR database index file 
         * MOVIE.D2X   - db-VCR database index file 
           REGISTER.ME - registration form for registering your copy
           READ.ME     - list of db-VCR version information
       
         * these files will be created if not found.

                       CONFIG.SYS File Requirements
                       ----------------------------
    
         Whether db-VCR is installed on a hard disk drive or a  floppy 
    based system, DOS must be told to make room for open file handles.  
    If  this  is  not  done,  an error message will occur stating that 
    db-VCR cannot open enough files and db-VCR will not load.  To  fix 
    this  problem  make sure you have a config.sys file located in the 
    root directory of your DOS boot disk containing this line: 

                                FILES=10

         This  is  a minimum requirement,  you may allow FILES = to be 
    any number greater than 10.  If you are making this change to your 
    config.sys file,  make sure and reboot your computer after  making 
    this change so that the new configuration will be in effect. 
    

    db-VCR Video Cassette Database System    Documentation    Page 4
    
    

    
                          HARD DISK INSTALLATION                       
                          ----------------------

         If you are using a computer with a hard disk  then  copy  all 
    the db-VCR files to a sub-directory on your hard disk with the DOS 
    Copy command. 
    
       For example: To install db-VCR in the C:\VCR sub-directory 
    
                    1) Put your db-VCR disk into drive A:
                    2) Type A:  (and hit enter key)
                    3) Type Copy *.* C:\VCR  (and hit enter key)
                    4) Remove db-VCR disk from drive A: and 
                       store in a safe place.
                    5) You may now run db-VCR from your hard drive
    
         ** NOTE:  Refer to your DOS Manual for instructions on 
                   creating sub-directory names on your hard disk.
    

                         FLOPPY DISK INSTALLATION                      
                         ------------------------

         If you are using a computer with only floppy disks, then make 
    a working copy of your db-VCR system by using the DOS Copy command 
    or  (DISKCOPY) command and use your working copy to run the db-VCR 
    system. 
    
         For example: To make a working copy of your db-VCR system
    
                   1) Put your db-VCR disk into drive A:
                   2) Put a blank formatted disk into drive B:
                   3) Type A:  (and hit enter key)
                   4) Type Copy *.* B:   (and hit enter key)
                   5) Remove your db-VCR disk from drive A: and
                      store in a safe place
                   6) Use your working copy of db-VCR 
    
        ** NOTE: If using the DOS DISKCOPY command to make a 
                 working copy refer to your DOS User Manual for 
                 instructions on how to properly use the command.
    

    db-VCR Video Cassette Database System    Documentation    Page 5
    

    LOADING THE DB-VCR SYSTEM
    
         After installing the db-VCR system onto  your  computer,  the 
    procedure  for  loading  the  system is quite simple.  For a quick 
    start, simply type in db-VCR and press the enter key.  db-VCR will 
    load  with  the  default  values  of Color ON (if you have a color 
    monitor) and Sound Effects ON. 
        
         However,  because  of  the  many different types of computers 
    available today,  db-VCR  has  many  different  parameter  options 
    available  for  telling it exactly how to load.  An explanation of 
    the parameters are listed below: 
    
                    db-VCR /B /S /F /C /DRIVE=D:
    
          /B  Load db-VCR Without Color  (Black & White mode)

          /S  Load db-VCR Without Sound Effects

          /F  Load db-VCR and try to Eliminate Flicker (snow)

                  Flicker occurs on some  monochrome  monitors 
               with a CGA (Color Graphics Adaptor card), which 
               produces  some  undesired  results.  The  older 
               models of AT&T 6300 computers will do  this  as 
               well.  If  your  monitor  produces flicker when 
               running db-VCR try loading it again with the /F 
               parameter. 
    
          /C  Load db-VCR with more IBM Compatible Screen Writing
    
                  db-VCR is  designed  to  work  fast  on  all 
               computers,  however  some monitors do not clear 
               the screen properly and are not considered true 
               100% IBM compatible.  Use this /C parameter  if 
               your   monitor   does  not  clear  the  screens 
               properly (screens will be a tad bit slower). 
    
          /DRIVE=D:  Use a db-VCR Data Disk on a Different Drive
    
                  Since db-VCR is a rather large system, there 
               is  only a limited amount of room available for 
               your VCR entries on a  disk.  If  you  wish  to 
               load db-VCR from 1 disk and access the database 
               on   a   different  data  disk  then  use  this 
               parameter and substitute your drive letter  for 
               the  D.  This  option is excellent for allowing 
               you to use your database on a RAM  disk  drive. 
               (just  make  sure  to  copy  the info back to a 
               regular disk after use...RAM disk contents  are 
               lost after turning off computer power) 
    

    db-VCR Video Cassette Database System    Documentation    Page 6
    

    

    You  can use as many as these parameters as needed,  just remember 
    to separate each parameter by a space.  Some examples below: 
    

       1) Load db-VCR in Black & White and Without Sound Effects:
         
                    db-VCR /B /S  (press enter key)
    
       2) Load db-VCR in Black & White and Eliminate Flicker
    
                    db-VCR /B /F  (press enter key)
    
       3) Load db-VCR using a data disk in drive B:
    
                    db-VCR /DRIVE=B:  (press enter key)
    
       4) See all available parameter options for db-VCR
    
                    db-VCR ?  (press enter key)
    
    
    

    db-VCR Video Cassette Database System    Documentation    Page 7

    

    USING THE DB-VCR SYSTEM
    

         After  loading  the  db-VCR system,  you will immediately see 
    that it is quite easy to get accustomed to.  The entire system  is 
    fully menu-driven and provides full context sensitive on-line help 
    for all of its functions. 
    
         The Main Menu of db-VCR will  allow  you  to  choose  between 
    several  different  options depending on what you wish to do while 
    running db-VCR.  These options are: 
    

                               Main Menu
                            ---------------
                             View an entry
                             Add an entry
                             Edit an entry
                             Delete an entry
                             Search entries
                             List entries
                             Print entries 
                             Re-Index database
                             Quit to DOS 
    

         To choose which option to use,  you must first  highlight  an 
    option using your cursor pad keys.  These keys are up/down arrows, 
    PgUp/PgDn keys,  Home key,  End key,  etc.  You may also select to 
    use the spacebar to move the highlight bar up and down through the 
    Menu or press the off-colored letter of the  option  you  wish  to 
    perform.  If  ESC  is pressed then db-VCR assumes you are ready to 
    Quit and it will  automatically  highlight  the  Quit  Option.  To 
    highlight an option, use one of the above mentioned keys until the 
    option  you  wish to perform is highlighted on the menu.  Once the 
    option you wish to execute is highlighted,  press the Enter Key to 
    execute  that option.  You may also use a mouse,  for selection of 
    menu items.  Move your mouse up and down to highlight options  and 
    click  the  left button to execute options.  See the Mouse Support 
    Section for more information. 

    

    db-VCR Video Cassette Database System    Documentation    Page 8
    
    

    
                   Context Sensitive On-Line Help System
                   -------------------------------------

         Context Sensitive Help means simply that if you  are  working 
    on  a  particular item in a system and ask for help,  you will get 
    help on that particular item.  db-VCR is  packed  with  plenty  of 
    On-Line Help,  all you have to do is press the F1 function key (or 
    press both left and right mouse buttons at the same time). 
        
         For the On-Line help system to be active db-VCR must be  able 
    to locate the db-VCR.HLP file when loading up.  It is wise to keep 
    all  of  your db-VCR system files in the same place when executing 
    the system.  You may check the bottom line of the  opening  screen 
    when  loading  db-VCR to see if your db-VCR On-Line help system is 
    active. 


                             Viewing an entry
                             ----------------

         If you wish to view one  of  your  entries  choose  the  View 
    option. db-VCR will prompt you for the title of the entry you wish 
    to  view.  If  you  don't  remember the exact title then go to the 
    List entries option and you will see a listing of all the  entries 
    you  presently have in your database.  DON'T worry about keying in 
    the entry title with the EXACT upper/lowercase letters.  db-VCR is 
    smart  enough  to  find  your entry provided the title is keyed in 
    with the correct name.  The view option will allow you to  display 
    or  just  look  at  the  information  for  your  entry (no editing 
    allowed). If after choosing the View option, you decide you do not 
    wish to view an entry...just press the Enter key without keying in 
    an entry name and you will be returned to the Main Menu. 

    
                              Adding an entry
                             -----------------

         If you wish to add  entries  to  your  db-VCR  database  then 
    choose  this  option.  You  will  be  asked to enter specific data 
    relating to the  title,  description,  etc.  for  that  particular 
    entry.  When finished db-VCR will prompt you with the question "Is 
    all  information  correct  (Y/N)  ?".  If  N is chosen you will be 
    allowed to edit your information.  If Y is chosen then you will be 
    prompted with the question "Add another (Y/N)?  ".  If you wish to 
    add another entry then choose Y,  otherwise a N will return you to 
    the Main Menu. 

    

    db-VCR Video Cassette Database System    Documentation    Page 9
    


         When inputting data,  some  fields  require  you  to  key  in 
    information  from  the  keyboard  while other fields such as entry 
    type, tape speed and rating are chosen from a menu.  When choosing 
    items from a menu use the same procedure for selecting your option 
    as above in Using db-VCR. 

       NOTE: One field which may be of importance is the tape ID 
             field,  you are allowed to input either  characters 
             or  numbers.  To  keep  the data sorted properly it 
             would be best  to  either  always  use  numbers  or 
             always use alpha-characters, the choice is yours. 
     
       NOTE: All entries must include  atleast  a  Title, if the
             title is left blank then the entry will essentially
             be deleted and will not be included in the database.
    

                             Editing an entry
                             ----------------

         If you wish to edit one  of  your  entries  choose  the  Edit 
    option. db-VCR will prompt you for the title of the entry you wish 
    to  edit.  The  procedure  for  editing entries is the same as for 
    adding entries.  Any changes you make to an entry will be saved in 
    the database. 
   
       NOTE: EXACT  upper / lower  case  is  not  required  when 
             inputting  title  of  entry  to  edit.   The   only 
             requirement  is  that you spell the entry title the 
             same way as  it  was  entered  when  added  to  the 
             system. 

       NOTE: All entries must include  atleast  a  Title, if the
             title is left blank then the entry will essentially
             be deleted and will not be included in the database.
  
          
                             Deleting an entry
                             -----------------

        If you wish to delete one of your entries  choose  the  Delete 
    option. db-VCR will prompt you for the title of the entry you wish 
    to  delete.  db-VCR  will  show  you  the  data which is presently 
    available for that entry and prompt  you  for  a  confirmation  to 
    delete  the  entry.  If you answer with a YES for this prompt then 
    the entry will be removed from the database.  If you decide you do 
    not wish to delete this entry then  respond  with  a  NO  for  the 
    prompt  or Press the ESC key.  Entries will ONLY be deleted if you 
    respond with a YES for the confirmation prompt. 

    

    db-VCR Video Cassette Database System    Documentation    Page 10
    


         Deleted entries will be permanently removed from the database 
    and cannot be accessed again.  Any entries which are deleted  must 
    be added again to be accessible. 
    

       NOTE: EXACT  upper / lower  case  is  not  required  when 
             inputting  title  of  entry  to  delete.  The  only 
             requirement  is  that you spell the entry title the 
             same way as  it  was  entered  when  added  to  the 
             system. 


                               List entries
                               ------------

         If  you wish to see a listing of your entries choose the List 
    option.  db-VCR will first prompt you for which  type  of  sorting 
    method  you  would  like  to  use.  If  you would like the entries 
    listed in alphabetical order by title then choose the Title option 
    or if you would like the entries listed by  which  tape  they  are 
    located  on  then  choose the Tape ID option.  Choosing is done by 
    using the left/right arrow keys on your keyboard  or  by  pressing 
    the  spacebar to highlight the proper choice and then pressing the 
    <ENTER> key. 
     
         db-VCR will show you a listing of all entries  you  presently 
    have  in  your  database.  Keep in mind the List option only shows 
    part of the information stored about your  entry  (the  screen  is 
    only  so  big).  For  more  complete  details about any particular 
    entry choose the VIEW option.  The List option is nice for quickly 
    scanning your database to see what entries are  available  and  to 
    find which tape the entries are on and at what speed, etc. 
    
         If your database contains many entries, db-VCR will list them 
    and  pause  after  each  page,  continue  pressing  any key on the 
    keyboard to scroll downward through the List or Press the Q key to 
    Quit the list and return to the Menu.  You may also use your mouse 
    to  select  these  choices.  Click  the  left  button  to  advance 
    downward  or click the right button to Quit and return to the Main 
    Menu.   See the Mouse Support Section for more information.

    

    db-VCR Video Cassette Database System    Documentation    Page 11
    

                                Print Entries
                                -------------

         The  Print entries option is very similar to the List entries 
    option, except that all output is sent to your printer. NO printer 
    codes are used in this program so as to  enable  it  to  use  just 
    about  any  type  of printer.  db-VCR has the ability to check and 
    make sure your printer is ready to print and if not it will prompt 
    you to fix the printer and press any key.  (you get  2  tries  and 
    then  are  returned  to the Main Menu).  It is always nice to have 
    this printed list close by your VCR somewhere for handy  reference 
    (especially on a rainy day!). 
    
       NOTE:  The  only  difference between the Print Option and 
             the List Option is that the Print Option will  also 
             include  the  Minutes field for each entry, whereas
             the List Option does not. 
    

                              Searching Entries
                              -----------------
    
         db-VCR has a powerful search feature built-in to allow you to 
    do quick searches for particular entries, actors, remarks, etc. To 
    use  the  Search  feature  select  the Search Option and press the 
    Enter key.  You will be shown another Menu which will allow you to 
    specify what type of information you wish to search for. 
    
                                Search Field
                                ------------
                                    Title
                                   Tape ID
                                  Publisher
                                    Year
                                    Type
                                   Rating
                                    Actor
                                   Actress
                                   Remarks
                                 Quit Search
    
         Select which field you would like to search in and press  the 
    Enter key,  db-VCR will then ask you key in a String to Search for 
    in this field.  Input your search string with as  much  detail  as 
    you wish.  db-VCR will then search the entire database and provide 
    you with a listing of all entries containing your  search  string.  
    The  listing  will  show  the Title and Tape ID of the entry and a 
    fragment of the Search String you have specified. 

    

    db-VCR Video Cassette Database System    Documentation    Page 12
    


      For example: Lets say you would like to search for all entries
                   with actors having a first name of John.
    
                   1) Choose the Search Entries Option from Main Menu
                   2) Choose Actor as the field to Search in
                   3) Type in John as your search string
                   
                   A full list of all entries containing any actors 
                   with first name of John will be listed.
    

       NOTE: Some fields will require an exact match for searching 
             while others will not.  Experiment a  little  to  see 
             exactly  how  the  Search  feature works.  If you get 
             stuck,  just press  the  F1 key for complete  On-Line 
             Help. 

                             Re-Index database 
                             -----------------

         If  you  find  that db-VCR is not listing your entries in the 
    correct order (sorted by either Title or Tape ID) then  try  using 
    the Re-Index data option.  Using this option can in NO WAY destroy
    any of your present database entries, it just simply rebuilds your 
    sort  (index)  files  so  that entries will be listed correctly in 
    sorted order. (Sometimes, - Believe it or not - computer files get 
    corrupted by various reasons,  if this is the case try  using  the 
    Re-Index option to try and solve the problem).  
    
         Always  exit  the  db-VCR  system by choosing the Quit to Dos 
    Option from the Main Menu.  NEVER exit the system by just  turning 
    off  your  computer  or using the Ctrl-Alt-Del method.  If you do, 
    you risk the chance  of  corrupting  your  database.  If  by  some 
    chance  you  do this by error,  the first thing you should do upon 
    running db-VCR again is choose the Re-Index Databases Option. 
    

                                 Quit to DOS
                                 -----------

         To exit the db-VCR system,  choose the Quit to DOS option and 
    press the enter key. db-VCR will close all file handles and return 
    you back to the DOS prompt so that you can run other applications. 

    

    db-VCR Video Cassette Database System    Documentation    Page 13

    

                             Information Window
                             ------------------

         At  the  bottom of the screen on the Main Menu you will see a 
    box which contains some information that might be helpful  to  you 
    in using db-VCR. 

    ----------------------[ 123,456 bytes free ]----------------------
         Database: (database in use)            Color: (color status)
      Index files: (index files in use)         Sound: (sound status)
     Tot. entries: (# entries in system)      Flicker: (flicker status)
      Last Update: (last date used)             Mouse: (Mouse state)
     Today's Date: (current system date)   Registr. #: (your regist. #)
    -----------------------------[ F1 Help ]---------------------------
    
        The bytes free information at the top of window is helpful for 
    determining how much disk space is left on  the  drive  containing 
    your  db-VCR database.  (Caution,  the bytes free information does 
    not always work correctly on RAM drives!).  The other  information 
    in  the  window  should provide you with all the necessary details 
    you need to know regarding your db-VCR database. 

        If you have not yet registered your  version  of  db-VCR  then 
    your Registr. # will say UnRegistered.  Upon registering your copy 
    you  will  receive  the  latest  version  of db-VCR which does not 
    contain the Shareware screen and has a valid registration #,  plus 
    a few other goodies. 

                                Mouse Support
                                -------------

         An alternative to making Menu choices by keystroke is to  use 
    a  mouse.  Any  MicroSoft compatible mouse should work without any 
    problems.  The mouse routines provided in db-VCR will only support 
    the use of 2 buttons (left and right) to perform activities. 
        
         In order to use mouse support ..  make sure your mouse driver 
    is loaded before starting  db-VCR.  At  the  Opening  screen  when 
    loading the db-VCR system you will see a message that will display 
    whether  or  not  db-VCR has detected a mouse in your system.  The 
    mouse can be used by moving up and down or left and right for Menu 
    selections and clicking the left or right  button.  When  provided 
    an  escape  sequence,  the  right  button  will usually act as the 
    escape key whereas the left button acts  as  the  enter  key.  For 
    example: 

    

    db-VCR Video Cassette Database System    Documentation    Page 14
    
    
    
    

             Press Q to quit or any other key to view more
             ---------------------------------------------

        Clicking the left button will act as the key to view more.
          Clicking the right button will act as the Quit option.

                       Press any key to Continue
                       -------------------------

       Clicking the left or right button will act as the enter key.
    
                        To activate On-Line Help
                        ------------------------

            Click the left and right button at the same time.
    
    

    db-VCR Video Cassette Database System    Documentation    Page 15
    
    

    OTHER FEATURES OF DB-VCR
    
         Some of the other features of the db-VCR system which make it 
    a  very  user  friendly  system  are  listed  below  with  a brief 
    description of each. 

                             F3 Remember key
                             ---------------
    
         When  inputting  Entry  names  whether you choose add,  edit, 
    view,  etc.,  db-VCR will remember the last entry  name  you  have 
    keyed  in  and  save  that entry name to the F3 function key.  For 
    example if you choose the Add Entry Option and add an Entry called 
    'Whitewater Kayaking Championship',  you can later view that entry 
    by  selecting  the  View  Entry  option  and  then pressing the F3 
    function key.  A great little time saver for those of us who  hate 
    to type. 

                        Custom Defined Entry Types
                        --------------------------
    
         When Adding or Editing db-VCR entries,  one of the fields you 
    are  required  to  input  is  the  Type of entry.  I have tried to 
    provide the most generic list of entry  types  available  such  as 
    Comedy, Horror, Sci-Fi, etc.  Upon first using the system you will 
    note  that  2  of  the  Types  are  User  Def  1  and  User Def 2. 
    Occasionally you may come across entries which do not fit into any 
    of the TYPES available in the db-VCR system.  To combat  this  you 
    have 2 choices. 
    
           1) Select the  Other option from the Type menu when 
              asked to choose a Type for the  entry.  You  are 
              then  allowed  to  key  in  any  Type  you wish. 
              (Limited  to  10  characters  and  you  are  not 
              allowed to leave this field blank.) 
    
           2) Press  the  F10  function key from the Type menu 
              when asked to choose a Type for the entry.  This 
              will enable  you  to  custom  define  2  of  the 
              choices to be whatever Type you wish.  Once this 
              has  been  performed,  db-VCR  will remember the 
              custom configured Types from now on  until  they 
              are changed again.  Your only limitation is that 
              the  Type  of  Entry  can  only be 10 characters 
              long.  You may wish to abbreviate  these  custom 
              defined Types. 
    
    

    db-VCR Video Cassette Database System    Documentation    Page 16
    

                           Error Handling System
                           ---------------------
    
         db-VCR has a built-in Error handling system which will report 
    error  codes  and  information  if  db-VCR runs into problems.  If 
    db-VCR reports any errors please feel free to contact me with  the 
    Error  codes.  If you are a registered user,  I will inform you on 
    how to fix the problem or send you a new disk...If you are  not  a 
    registered  user...well  contact me anyway and we will see what we 
    can do. 

                  Upgrading to Higher Versions of db-VCR
                  --------------------------------------
    
         As  of  this  writing the database file (MOVIE.DAT) is pretty 
    much the same in all versions of db-VCR with only a  minor  change 
    in  Version 3.0.  If you are presently using the shareware version 
    of db-VCR and have already keyed  in  500  entries  or  so,  don't 
    worry..  your  database will work just fine with newer versions of 
    db-VCR.  Just make sure and copy the files  MOVIE.DAT,  MOVIE.D1X, 
    MOVIE.D2X to the disk containing the newer version of db-VCR. 
    
    
    CONCLUSION

         As you can see,  db-VCR is  a  powerful  system  that  should 
    handle  all  your needs for recordings of VCR video tapes.  If you 
    decide to continue using db-VCR...PLEASE  register  it,  Not  only 
    will  you  receive  a  registered  version  without  the shareware 
    screen,  you will also be put on my  permanent  shareware  mailing 
    list and will be contacted on future updates.  Plus, you will have 
    some  input  on  future versions of the system.  After all,  if it 
    doesn't do what you as users want it to...well whats the sense  in 
    it. Thank you. 
    

    COPYRIGHT NOTICES
    
            db-VCR is copyright Michael R. Guffey
            AT&T is copyright American Telephone and Telegraph
            IBM is copyright International Business Machines
            PC DOS is copyright International Business Machines
            MicroSoft and MS DOS are copyright MicroSoft Corp.
    










```
{% endraw %}

## FILE1347.TXT

{% raw %}
```
Disk No: 1347
Disk Title: db-VCR
PC-SIG Version: S2

Program Title: db-VCR
Author Version: 3.0
Author Registration: $17.95
Special Requirements: 320K RAM.

Have you ever found yourself searching through a zillion video tapes to
figure out which tape has, let's say, ``Top Gun'' on it?  And when you
find it, you have to fast forward for about 10 or so minutes to find out
where it starts on the tape?  Well, here is the answer you've been
waiting for.

db-VCR helps you keep track of all your videos, whether they are movies,
instructional videos or music.  The program maintains a database of all
your VCR tapes with titles, comments, where each entry on each tape
starts, and so forth. db-VCR is completely menu-driven, letting you
easily add entries, search for and view specific titles and print sorted
lists of your collection.  Mouse support is also provided. db-VCR looks
great on color systems and the menus are wonderful.  It is so easy to
use that it actually makes using the program fun.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## README.TXT

{% raw %}
```
╔═══════ DB-VCR Quick-Start Instructions   Version 3.0 ═══════╗
║ To print the db-VCR Documentation    type:   PRNTDOC        ║
║                                                             ║
║ To execute the db-VCR system         type:   DB-VCR         ║
║    (default = color and sound)                              ║
╠═════════════════════════════════════════════════════════════╣
║    You may however, wish to use one of db-VCR's parameter   ║
║  switches which will allow db-VCR to be customized for your ║
║    particular computer.  The parameters are listed below:   ║
║                                                             ║
║    /B - load in Black & White (color disabled)              ║
║    /S - load without sound effects                          ║
║    /F - If your monitor produces flicker (snow)             ║
║    /C - If your monitor is not clearing the screen properly ║
║  /DRIVE=D: If you wish to use a data disk for your entries  ║
║        (See the db-VCR.DOC file for more information)       ║
╠═════════════════════════════════════════════════════════════╣
║ Example:To load db-VCR in Black & White w/out Sound effects ║
║                                                             ║
║                 type:   DB-VCR /B /S                        ║
║                                                             ║
║       Any parameters used must be separated by a space!     ║
╚═════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1347

     Volume in drive A has no label
     Directory of A:\

    DB-VCR   EXE    197517   9-29-89  12:17p
    DB-VCR   DOC     37092   9-27-89   9:29a
    DB-VCR   HLP     11154   9-24-89  11:15p
    DB-VCR   SYS        87   9-29-89   2:22p
    GO       BAT        32   9-29-89  12:35p
    MOVIE    D1X      2048   9-29-89   2:22p
    MOVIE    DAT      1571   9-24-89  11:46p
    MOVIE    D2X      2048   9-29-89   2:22p
    PRNTDOC  BAT       143   2-01-89  12:00p
    READ     ME       1524   9-24-89  11:40p
    README   TXT      1504   9-29-89  12:34p
    REGISTER ME       3199   9-27-89   9:37a
    FILE1347 TXT      1129  11-30-89   4:18p
           13 file(s)     259048 bytes
                           56320 bytes free
