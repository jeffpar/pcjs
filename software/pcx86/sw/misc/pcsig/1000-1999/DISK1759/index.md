---
layout: page
title: "PC-SIG Diskette Library (Disk #1759)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1759/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1759"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MORSEMAN"

    This is your chance to get private lessons in Morse Code.  MORSEMAN is
    intended for amateurs, aspiring hams or anyone else who wishes to learn
    the International Morse Code or improve their performance and code
    speed.  MORSEMAN will take you through the procedure of learning the
    Morse Code (or CW as called by hams) and help you to increase your
    speed.
    
    You have the option of using MORSEMAN in teach or drill mode.  You can
    start with the easiest characters and work your way up to small groups,
    later going back to the ones that gave you trouble.  MORSEMAN is
    written with repetitiveness in mind, as the more often you hear the
    character and associate it with the sound, the easier it will be to
    recall it.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1759.TXT

{% raw %}
```
Disk No: 1759                                                           
Disk Title: Morseman                               #                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: Morseman                                                 
Author Version: 2.1                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
This is your chance to get private lessons in Morse Code.  MORSEMAN is  
intended for amateurs, aspiring hams or anyone else who wishes to learn 
the International Morse Code or improve their performance and code speed
MORSEMAN will take you through the procedure of learning the morse code 
(or CW as called by hams) and help you to increase your speed.          
                                                                        
You have the option of using MORSEMAN in teach or drill mode.  You can  
start with the easiest characters and work your way up to small groups, 
later going back to the ones that you had trouble with.  MORSEMAN is    
written with repetiveness in mind, as the more often you hear the       
character and associate it with the sound, the easier it will be to reca
it.                                                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## MMFILES.DOC

{% raw %}
```
                
                
                   FILES ON MORSEMAN version 2.1

        
        MMFILES.DOC             This listing of files
        
        DEFAULT.VAL             Default file that sets up the
                                parameters for MM to operate
                                
        MORSEMAN.DOC            Manual for the operation of MM 2.1
                                
        MORSEMAN.EXE            Executable file for MM 2.1-UNREGISTERED
        
    *** MORSEMNR.EXE            Executable file for MM 2.1-REGISTERED USER
                                (If you are a registered user, this file
                                will be on your disk.  Run this one!!!)
                                Please, do not copy this file to distribute!
        

        MORSEMAN.TSR            ASCII File containing introductory screen info.

        
        MORSEM21.ZIP            Compressed File containing all of the
                                files on this list.  Upload this file
                                to bulletin boards.  Use PKUNZIP to
                                uncompress.


        NOVICE.!!!              Info and speed requirements for the
                                Novice test.
                                
                
        READ-ME.1ST              Document addendum to MORSEMAN.DOC
        
        BUG-RPT.001             V 2.1 update and bug report for previous
                                versions.
        
        REGISTER.MM             Register your copy of MM and get the next
                                big update free!!
                                
        PRINTDOC.EXE            Program used to print documentation files.
        
```
{% endraw %}

## MMFILES.DOC

{% raw %}
```
                
                
                   FILES ON MORSEMAN version 2.1

        
        MMFILES.DOC             This listing of files
        
        DEFAULT.VAL             Default file that sets up the
                                parameters for MM to operate
                                
        MORSEMAN.DOC            Manual for the operation of MM 2.1
                                
        MORSEMAN.EXE            Executable file for MM 2.1-UNREGISTERED
        
    *** MORSEMNR.EXE            Executable file for MM 2.1-REGISTERED USER
                                (If you are a registered user, this file
                                will be on your disk.  Run this one!!!)
                                Please, do not copy this file to distribute!
        

        MORSEMAN.TSR            ASCII File containing introductory screen info.

        
        MORSEM21.ZIP            Compressed File containing all of the
                                files on this list.  Upload this file
                                to bulletin boards.  Use PKUNZIP to
                                uncompress.


        NOVICE.!!!              Info and speed requirements for the
                                Novice test.
                                
                
        READ-ME.1ST              Document addendum to MORSEMAN.DOC
        
        BUG-RPT.001             V 2.1 update and bug report for previous
                                versions.
        
        REGISTER.MM             Register your copy of MM and get the next
                                big update free!!
                                
        PRINTDOC.EXE            Program used to print documentation files.
        
```
{% endraw %}

## MORSEMAN.TXT

{% raw %}
```



                             M O R S E M A N

                               version 2.1



                copyright (c) 1989 by Robin A. Gist, NE4L
              copyright (c) 1989 by Renaissance Development
                           ALL RIGHTS RESERVED


      This program may be freely copied and distributed as long as
      no fee in excess of basic expenses is charged.  Commercial
      firms desiring to distribute this product must tell customers
      that this is a shareware product and that they are only paying
      for a distribution diskette, not the program.  The Renaissance
      Development Corporation or any of its officials assumes no
      responsibility for any damage that may occur during use of
      this software.  By using this product, the user implicitly
      agrees to the terms set forth by the company.

      IF YOU PLAN ON USING THIS PRODUCT, YOU ARE STRONGLY URGED TO
      REGISTER WITH THE AUTHOR.  THIS ENCOURAGES DEVELOPMENT OF
      BETTER AND STRONGER SOFTWARE PRODUCTS.  IT ALSO ENTITLES YOU
      TO A FREE REGISTERED UPDATE OF MORSEMAN PLUS, WHEN IT
      BECOMES AVAILABLE. YOU WILL ALSO RECEIVE A COPY OF VERSION 2.1
      WITH THE SHAREWARE SCREENS (AND ANY BUGS THAT MAY HAVE BEEN
      DISCOVERED) REMOVED.  A $15.00 DONATION IS REQUESTED.  PLEASE
      SEND TO:


                            Robin Gist, NE4L
                            P.O. Box 491
                            Killen, AL 35645



      If you are a student, a senior citizen on a fixed income or
      otherwise cannot afford the registration fee, please feel free
      to use this program without feeling like you have to register.
      Just drop me a line and let me know what you think and where
      you think MORSEMAN could be improved.  Otherwise, please help
      support shareware and keep software prices low.
      
      If you have a copy of this and you are not a licensed amateur,
      and want to learn more about ham radio, please contact the
      American Radio Relay League and ask for an information packet
      on amateur radio and the address of a radio club in your area.
      Their address is:


                    American Radio Relay League
                          225 Main Street
                        Newington, CT 06111
     +++  
         Use of MORSEMAN

         MORSEMAN is a tool intended for use by amateurs, aspiring
         hams or anyone else who wishes to either learn the
         International Morse Code and\or improve their performance
         and code speed.  MORSEMAN will take you through the
         procedure of learning the morse code (or CW as called by
         hams) and help you to increase your speed.  You can start
         with the easiest characters and work through a small group,
         later going back to the ones that you had trouble with.
         MORSEMAN is written with repetiveness in mind, as the more
         often you hear the character and associate it with the
         sound, the easier it will be to recall it.


         TIPS FOR LEARNING MORSE CODE

         1>  Keep your sessions short.  Never go more than 30 to 40
         minutes in a single session.  After that time, your mind
         tends to wander and you are actually learning very little,
         if any past this point.  Let it rest for a few hours, or the
         rest of the day and come back to it later.
     
         2>  Concentrate!  Keep your mind on what you are hearing and
         what it means.  If you feel that you can't give it the
         proper attention at the time, then by all means give it a
         break or don't attempt to learn characters then.  Wait till
         you can give your undivided attention.

         3>  Don't get discouraged!  If you feel that you are not
         learning as fast as you'd like or if you just can't seem to
         remember a character, don't give up.  Every ham who has a
         license today had to learn the code and they all went
         through exactly what you are going through now.  Just keep
         on chugging through it.  You probably are remembering more
         than you think.  DON'T GIVE UP!!

         4>  Pace yourself:  You don't have to learn it all in one
         day!  Give yourself some time.  A lot of people have learned
         CW in three days and for some it will take a few weeks or
         even a month or so.  Give yourself ample time to learn it.
         Also set aside some time EVERY DAY to practice code.  At the
         beginning of each session, go over what you have learned up
         to that point and go to a PRACTICE SESSION in the MORSEMAN
         program and review.  The reinforcement of previous learned
         characters will dramatically increase the speed of your
         learning.

         A special note:  If you can schedule your sessions to come
         right before your normal bedtime, do it.  If you can work on
         the code for 20 or so minutes before you retire, your mind 
         will work on it while you are asleep.  This would amount to
         better retention and an increase in speed occuring a little
         faster (normally).  If you are usually "wore out" at bedtime,
         don't schedule your normal session at that time.  Schedule
         it earlier in the day and brush over the characters at bed-
         time.  
         +++
         OPERATING THE MORSEMAN PROGRAM

         The MORSEMAN program is very easy to operate and requires
         very little computer experience to use.  Place the disk in
         the appropriate drive (after properly booting the machine)
         and type MORSEMAN.  Shortly, you should see the introduction
         screen.  After a few seconds, the main menu window will 
         appear.  Just use your arrow keys to move to the mode of 
         operation that you desire and press enter.




         OPERATING MODES
        

         Keyboard Mode

         In the Keyboard Mode, the program sends Morse code characters
         for the letter that you hit on the keyboard.  You do not have
         to press <enter> for the text to be sent.  When you get through,
         press <=> to exit back to the main menu.  Ending signals (AR, BK
         ect..) may be sent by pressing the following keys:
         
                                   [    BT
                                   ]    SK
                                   ;    AR
                                   '    KN                
                                   
         These keyboard symbols may also be incorporated in text files.
        
                           

         Create Text File

         This mode allows you to create a text file which can be sent
         at a later time.  Just enter lines of text as you would if you
         were using a text editor or word processor.  When you are 
         through, type a CTRL-X on a blank line and press enter.  You 
         will then be prompted for a file name.  DO NOT ADD AN EXTENSION
         TO THE FILE NAME, MORSEMAN WILL ADD ".CWT" FOR YOU.
         


         TUTOR MODE

         The Tutor Mode of MORSEMAN is where a newcomer may learn
         morse code in steps or an experienced amateur may practice
         his CW in order to upgrade.  If you are an experienced
         amateur who is competent in morse code, then you may skip to
         the next section on TEACH MODE -- CW PRACTICE.
         +++
         If you enter the Tutor Mode, then you will be prompted with
         a new menu that will allow you to choose which group of
         characters you desire.  It is STRONGLY recommended that you
         learn the characters by groups and in their logical order
         (I.E. Group One, then Group Two).  After learning each
         group, you will be ready to practice the group.  If you do
         not leave the group that you are in, you can learn all of
         the characters in the group and practice that group.  If for
         some reason you must leave the practice session, you can
         enter it again at the point you left it by entering the
         number closest to the point where you had to stop.

         All practice is via random characters.  When you are
         learning characters (in the "Teach Mode", you will be sent
         the character you are learning nine times.  After the
         computer is through, press enter and you will be sent the
         next character nine times.  Try to remember these by sound
         (dits and dahs) and not by sight (dots and dashes).  You
         will then be prompted again and you will be sent 25 random
         characters, each being one of the two that you just learned.
         You will do this for each character. (Groups of four or six
         and subgroups of two).  Practice these groups until you are
         comfortable with them, then proceed.

         You will most likely never see the same group of characters.
         This way, you won't be able to memorize that characters in
         any practice set.

         After you get through learning a group of characters and
         practicing it, you will be prompted as to whether you would
         like to practice all characters up to that point.  It is
         strongly recommended that you do this before you retire from
         the session and before beginning a new session.


         Teach Mode --CW Practice

         On the Teach Mode menu, you may practice all of the
         characters, numbers and punctuation.  Just enter <8>
         at the prompt.

         
         Teach Mode -- Random Code
         
         In this mode, MORSEMAN will present you with random letters in
         groups of five.  This will include all punctuation, letters and
         numbers.  Ending signals are not presented.
         

         CHANGE PARAMETERS

         If you are not satisfied with the speed, tone or character
         spacing of MORSEMAN, select he parameters option at the main
         menu. You can then select whether to change the tone frequency
         (in kiloHertz), CW speed (in words per minute) or spacing.
         Make your changes and press enter.  MORSEMAN will then ask you
         if you want to make the changes permanent.  If you answer yes,
         then the changes will be placed in the configuration file for
         the program and every time you start the program, these values
         +++
         will be the default values.  If you decide not to make the
         changes permanent, then the values will remain the same through-
         out the session but will not become the default values.
                       

         SPECIAL NOTE ABOUT "SPACING"
         
         The spacing for MORSEMAN is already set for optimization on a
         10 MHz PC XT.  If you are running an AT type machine, you may want
         to change the spacing to compensate for the differences in clock
         speed.  The converse is true for PC's and slower XT's.  You may 
         want to slow it down a bit for those machines.  Just follow 
         the instructions at the "spacing" option.  You will have to exper-
         iment a bit to get the speed reading to be an accurate reflection
         of the actual speed.  A processor independent algorithm is in 
         development for MORSEMAN where you won't have to do that.
         
         Another use for the spacing option is to let you copy characters
         at the said speed but allow you to lengthen the spacing so you 
         copy characters at 13 wpm, but use 5 wpm spacing.
         
         Please note that the numbers used in the spacing option are purely
         arbitrary and their numeric values do not reflect an exact spacing.
         
                            

         SEND FROM TEXT FILE

         This option will allow you to convert any text file into morse code.
         When you enter this mode, you will be asked for a filename.  If you
         cannot remember the filename, just press return and a listing of all
         files with a ".CWT" extension will be listed.  Select one from this
         If you want to send a file created on a text editor, make sure that
         it is in ASCII format, has the extension ".CWT".



         CONCLUSION

              If you are just starting out with morse code, then I wish
              you the best of luck!  Ham radio is a very exciting hobby
              and today, with the Novice license in hand, you are no
              longer limited to using just CW.  You can also use phone,
              radioteletype, packet radio and repeaters.

              Above all, don't let the code stand in the way of getting a
              license.  If you are like me, you will start out disliking
              the code, because it is then considered an obstacle to a
              license.  Later after you get used to it, you may develop a
              love affair with CW that lasts a lifetime.  Take the advice
              of a ham who has been there: don't look at the code as an
              obstacle, look at it as entertainment, a new language or (as
              I did) something that no one else in my neighborhood knew!
       

              73 and see you on the air!            ...Robin, NE4L
```
{% endraw %}

## MORSEMAN.TXT

{% raw %}
```



                             M O R S E M A N

                               version 2.1



                copyright (c) 1989 by Robin A. Gist, NE4L
              copyright (c) 1989 by Renaissance Development
                           ALL RIGHTS RESERVED


      This program may be freely copied and distributed as long as
      no fee in excess of basic expenses is charged.  Commercial
      firms desiring to distribute this product must tell customers
      that this is a shareware product and that they are only paying
      for a distribution diskette, not the program.  The Renaissance
      Development Corporation or any of its officials assumes no
      responsibility for any damage that may occur during use of
      this software.  By using this product, the user implicitly
      agrees to the terms set forth by the company.

      IF YOU PLAN ON USING THIS PRODUCT, YOU ARE STRONGLY URGED TO
      REGISTER WITH THE AUTHOR.  THIS ENCOURAGES DEVELOPMENT OF
      BETTER AND STRONGER SOFTWARE PRODUCTS.  IT ALSO ENTITLES YOU
      TO A FREE REGISTERED UPDATE OF MORSEMAN PLUS, WHEN IT
      BECOMES AVAILABLE. YOU WILL ALSO RECEIVE A COPY OF VERSION 2.1
      WITH THE SHAREWARE SCREENS (AND ANY BUGS THAT MAY HAVE BEEN
      DISCOVERED) REMOVED.  A $15.00 DONATION IS REQUESTED.  PLEASE
      SEND TO:


                            Robin Gist, NE4L
                            P.O. Box 491
                            Killen, AL 35645



      If you are a student, a senior citizen on a fixed income or
      otherwise cannot afford the registration fee, please feel free
      to use this program without feeling like you have to register.
      Just drop me a line and let me know what you think and where
      you think MORSEMAN could be improved.  Otherwise, please help
      support shareware and keep software prices low.
      
      If you have a copy of this and you are not a licensed amateur,
      and want to learn more about ham radio, please contact the
      American Radio Relay League and ask for an information packet
      on amateur radio and the address of a radio club in your area.
      Their address is:


                    American Radio Relay League
                          225 Main Street
                        Newington, CT 06111
     +++  
         Use of MORSEMAN

         MORSEMAN is a tool intended for use by amateurs, aspiring
         hams or anyone else who wishes to either learn the
         International Morse Code and\or improve their performance
         and code speed.  MORSEMAN will take you through the
         procedure of learning the morse code (or CW as called by
         hams) and help you to increase your speed.  You can start
         with the easiest characters and work through a small group,
         later going back to the ones that you had trouble with.
         MORSEMAN is written with repetiveness in mind, as the more
         often you hear the character and associate it with the
         sound, the easier it will be to recall it.


         TIPS FOR LEARNING MORSE CODE

         1>  Keep your sessions short.  Never go more than 30 to 40
         minutes in a single session.  After that time, your mind
         tends to wander and you are actually learning very little,
         if any past this point.  Let it rest for a few hours, or the
         rest of the day and come back to it later.
     
         2>  Concentrate!  Keep your mind on what you are hearing and
         what it means.  If you feel that you can't give it the
         proper attention at the time, then by all means give it a
         break or don't attempt to learn characters then.  Wait till
         you can give your undivided attention.

         3>  Don't get discouraged!  If you feel that you are not
         learning as fast as you'd like or if you just can't seem to
         remember a character, don't give up.  Every ham who has a
         license today had to learn the code and they all went
         through exactly what you are going through now.  Just keep
         on chugging through it.  You probably are remembering more
         than you think.  DON'T GIVE UP!!

         4>  Pace yourself:  You don't have to learn it all in one
         day!  Give yourself some time.  A lot of people have learned
         CW in three days and for some it will take a few weeks or
         even a month or so.  Give yourself ample time to learn it.
         Also set aside some time EVERY DAY to practice code.  At the
         beginning of each session, go over what you have learned up
         to that point and go to a PRACTICE SESSION in the MORSEMAN
         program and review.  The reinforcement of previous learned
         characters will dramatically increase the speed of your
         learning.

         A special note:  If you can schedule your sessions to come
         right before your normal bedtime, do it.  If you can work on
         the code for 20 or so minutes before you retire, your mind 
         will work on it while you are asleep.  This would amount to
         better retention and an increase in speed occuring a little
         faster (normally).  If you are usually "wore out" at bedtime,
         don't schedule your normal session at that time.  Schedule
         it earlier in the day and brush over the characters at bed-
         time.  
         +++
         OPERATING THE MORSEMAN PROGRAM

         The MORSEMAN program is very easy to operate and requires
         very little computer experience to use.  Place the disk in
         the appropriate drive (after properly booting the machine)
         and type MORSEMAN.  Shortly, you should see the introduction
         screen.  After a few seconds, the main menu window will 
         appear.  Just use your arrow keys to move to the mode of 
         operation that you desire and press enter.




         OPERATING MODES
        

         Keyboard Mode

         In the Keyboard Mode, the program sends Morse code characters
         for the letter that you hit on the keyboard.  You do not have
         to press <enter> for the text to be sent.  When you get through,
         press <=> to exit back to the main menu.  Ending signals (AR, BK
         ect..) may be sent by pressing the following keys:
         
                                   [    BT
                                   ]    SK
                                   ;    AR
                                   '    KN                
                                   
         These keyboard symbols may also be incorporated in text files.
        
                           

         Create Text File

         This mode allows you to create a text file which can be sent
         at a later time.  Just enter lines of text as you would if you
         were using a text editor or word processor.  When you are 
         through, type a CTRL-X on a blank line and press enter.  You 
         will then be prompted for a file name.  DO NOT ADD AN EXTENSION
         TO THE FILE NAME, MORSEMAN WILL ADD ".CWT" FOR YOU.
         


         TUTOR MODE

         The Tutor Mode of MORSEMAN is where a newcomer may learn
         morse code in steps or an experienced amateur may practice
         his CW in order to upgrade.  If you are an experienced
         amateur who is competent in morse code, then you may skip to
         the next section on TEACH MODE -- CW PRACTICE.
         +++
         If you enter the Tutor Mode, then you will be prompted with
         a new menu that will allow you to choose which group of
         characters you desire.  It is STRONGLY recommended that you
         learn the characters by groups and in their logical order
         (I.E. Group One, then Group Two).  After learning each
         group, you will be ready to practice the group.  If you do
         not leave the group that you are in, you can learn all of
         the characters in the group and practice that group.  If for
         some reason you must leave the practice session, you can
         enter it again at the point you left it by entering the
         number closest to the point where you had to stop.

         All practice is via random characters.  When you are
         learning characters (in the "Teach Mode", you will be sent
         the character you are learning nine times.  After the
         computer is through, press enter and you will be sent the
         next character nine times.  Try to remember these by sound
         (dits and dahs) and not by sight (dots and dashes).  You
         will then be prompted again and you will be sent 25 random
         characters, each being one of the two that you just learned.
         You will do this for each character. (Groups of four or six
         and subgroups of two).  Practice these groups until you are
         comfortable with them, then proceed.

         You will most likely never see the same group of characters.
         This way, you won't be able to memorize that characters in
         any practice set.

         After you get through learning a group of characters and
         practicing it, you will be prompted as to whether you would
         like to practice all characters up to that point.  It is
         strongly recommended that you do this before you retire from
         the session and before beginning a new session.


         Teach Mode --CW Practice

         On the Teach Mode menu, you may practice all of the
         characters, numbers and punctuation.  Just enter <8>
         at the prompt.

         
         Teach Mode -- Random Code
         
         In this mode, MORSEMAN will present you with random letters in
         groups of five.  This will include all punctuation, letters and
         numbers.  Ending signals are not presented.
         

         CHANGE PARAMETERS

         If you are not satisfied with the speed, tone or character
         spacing of MORSEMAN, select he parameters option at the main
         menu. You can then select whether to change the tone frequency
         (in kiloHertz), CW speed (in words per minute) or spacing.
         Make your changes and press enter.  MORSEMAN will then ask you
         if you want to make the changes permanent.  If you answer yes,
         then the changes will be placed in the configuration file for
         the program and every time you start the program, these values
         +++
         will be the default values.  If you decide not to make the
         changes permanent, then the values will remain the same through-
         out the session but will not become the default values.
                       

         SPECIAL NOTE ABOUT "SPACING"
         
         The spacing for MORSEMAN is already set for optimization on a
         10 MHz PC XT.  If you are running an AT type machine, you may want
         to change the spacing to compensate for the differences in clock
         speed.  The converse is true for PC's and slower XT's.  You may 
         want to slow it down a bit for those machines.  Just follow 
         the instructions at the "spacing" option.  You will have to exper-
         iment a bit to get the speed reading to be an accurate reflection
         of the actual speed.  A processor independent algorithm is in 
         development for MORSEMAN where you won't have to do that.
         
         Another use for the spacing option is to let you copy characters
         at the said speed but allow you to lengthen the spacing so you 
         copy characters at 13 wpm, but use 5 wpm spacing.
         
         Please note that the numbers used in the spacing option are purely
         arbitrary and their numeric values do not reflect an exact spacing.
         
                            

         SEND FROM TEXT FILE

         This option will allow you to convert any text file into morse code.
         When you enter this mode, you will be asked for a filename.  If you
         cannot remember the filename, just press return and a listing of all
         files with a ".CWT" extension will be listed.  Select one from this
         If you want to send a file created on a text editor, make sure that
         it is in ASCII format, has the extension ".CWT".



         CONCLUSION

              If you are just starting out with morse code, then I wish
              you the best of luck!  Ham radio is a very exciting hobby
              and today, with the Novice license in hand, you are no
              longer limited to using just CW.  You can also use phone,
              radioteletype, packet radio and repeaters.

              Above all, don't let the code stand in the way of getting a
              license.  If you are like me, you will start out disliking
              the code, because it is then considered an obstacle to a
              license.  Later after you get used to it, you may develop a
              love affair with CW that lasts a lifetime.  Take the advice
              of a ham who has been there: don't look at the code as an
              obstacle, look at it as entertainment, a new language or (as
              I did) something that no one else in my neighborhood knew!
       

              73 and see you on the air!            ...Robin, NE4L
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1759

     Volume in drive A has no label
     Directory of A:\

    BUG-RPT  001      4140   5-15-89   2:36a
    DEFAULT  VAL        24   5-17-89   2:11a
    MMFILES  DOC      1791   5-15-89   2:38a
    MORSEM21 ZIP    123192   5-17-89   2:25a
    MORSEMAN EXE     91438   5-17-89   2:22a
    MORSEMAN TSR       635   3-26-89  12:21a
    MORSEMAN TXT     13590   5-15-89   2:45a
    NOVICE   !!!       322   1-17-89   4:21a
    PRINTDOC EXE     38710   3-26-89   2:23a
    READ-ME  1ST       740   5-15-89   2:47a
    REGISTER MM       2237   5-15-89   5:44a
    FILE1759 TXT      1999  12-19-89   1:02p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   5:00a
           14 file(s)     279396 bytes
                           34816 bytes free
