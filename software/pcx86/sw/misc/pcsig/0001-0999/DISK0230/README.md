---
layout: page
title: "PC-SIG Diskette Library (Disk #230)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0230/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0230"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE CONFIDANT"

    The Confidant is a user-supported program which encodes sensitive data
    in order to keep it confidential.  The Confidant protects information
    transmitted by communications lines from alteration as well as from
    unauthorized use by anyone intercepting it or trying to change it.
    The Confidant gives a choice of two encryption procedures.  The
    national Data Encryption Standard (DES) provides very high security.
    A faster "privacy" procedure that is somewhat less secure provides
    encryption for normal use, where speed is important.
    
    System Requirements:  2 disk drives
    
    How to Start: Consult the voluminous documentation in the four files
    marked .DOC.  Initiate the program by typing CONFIDE at the DOS prompt.
    
    Suggested Registration:  $10.00
    
    File Descriptions:
    
    CONFIDE  EXE  Main program
    CONFIDE  HLP  Help file
    CONFIDE  CRY  Part of CONFIDE
    CONFIDE  INV  Part of CONFIDE
    REFCARD  DOC  A brief summary of the main commands
    DESCRIPT DOC  An overall description of the program  (24K)
    TUTORIAL DOC  A step-by-step tutorial  (69K)
    TYPE     ME   How to list documentation
    REFER    DOC  A technical reference manual  (60K)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #230, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  CONFIDE .EXE         CRC = 11 6B

--> FILE:  CONFIDE .HLP         CRC = A1 0F

--> FILE:  CONFIDE .CRY         CRC = FB A9

--> FILE:  CONFIDE .INV         CRC = 9C 1C

--> FILE:  REFCARD .DOC         CRC = 7E 8C

--> FILE:  TUTORIAL.DOC         CRC = EA 13

--> FILE:  DESCRIPT.DOC         CRC = B7 DD

--> FILE:  REFER   .DOC         CRC = 8D 25

--> FILE:  TYPE    .ME          CRC = 26 C0

 ---------------------> SUM OF CRCS = 1E A0

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DESCRIPT.DOC

{% raw %}
```



















                         * *               * *               * *
                          * *************** * *************** *
                         * *               * *               * *
                          *                                   *
                          *         THE CONFIDANT (tm)        *
                          *            USER  GUIDE            * 
                          *                                   *
                         * *               * *               * *
                          * *************** * *************** *
                         * *               * *               * *










                                            *
                                           * *
                                            *












                          Copyright (C) 1983, 1984 by Data Sage
                                    Yale Station 2902
                                   New Haven, CT 06520














                                     THE CONFIDANT(tm)


                                 Version 2.00 - June 1984
                           User-Supported  Encryption  Software  
                             for the  IBM  Personal Computer

               Copyright (C) 1983, 1984 by Data Sage.  All rights reserved.

                                     TRADEMARK NOTICE

               The  Confidant  is  a  trademark of  Data  Sage.  IBM  is  a 
               registered trademark of the International Business  Machines 
               Corporation.

                                   AN IMPORTANT MESSAGE

                    The   Confidant  is  a  user-supported  or  "shareware" 
               program.    User-supported  software  is  an  experiment  in 
               software distribution based on three principles:

                    1. You can best assess the utility of a program on your 
               own computer.  Only by using it can you see whether it meets 
               your needs. If it doesn't, you shouldn't have to pay for it.

                    2.  The  creation of personal computer software can and 
               should be supported by the computing community.   If you use 
               someone else's work,  we think you will want to contribute a 
               small share of the cost,  just as someone who uses your work 
               should do for you.

               If  you are using this program and find it of value,  we ask 
               you to contribute to its support by donating $10 (suggested) 
               to:
                                    Data Sage
                                    Yale Station 2902
                                    New Haven, CT  06520

               Companies  and  other organizations are asked to donate  $10 
               for each building where The Confidant will be used.

                    3.  Copying  and sharing software is a good thing  that 
               should be encouraged rather than restricted.
                
                    Data   Sage  grants  permission  to   individuals   and 
               organizations  to copy the program and documentation for The 
               Confidant  (tm),  provided that neither the program nor  the 
               documentation  is modified in any way,  and that no  fee  or 
               consideration  is  charged.   However,  a club may charge  a 
               small  fee  for  the  distribution  cost  of  the  diskette, 
               provided  that it informs its members of the  user-supported 
               concept  and  encourages them to support  the  program  with 
               their donations. 














                                       INTRODUCTION


                    Congratulations on choosing The Confidant.   We believe 
               you  will  find it a faithful friend which can  provide  you 
               with privacy and security.

                    We  want  The Confidant to work for you.   So  we  have 
               supplied you with what we believe is the best  documentation 
               available.   Several  files  on the diskette containing  The 
               Confidant  bear  the extension label  .DOC.   Together  they 
               comprise the USER GUIDE, including:

                         * A full Table of Contents, contained in this file 
               (DESCRIPT.DOC),  to all the documentation,  so you can  find 
               what you want when you want it.  This description also tells 
               how to start The Confidant and what equipment you need.

                         *  A casebook-style Tutorial to make learning more 
               effective  and more enjoyable.  It is contained in the  file 
               TUTORIAL.DOC. 

                         *  A detailed Reference manual, in REFER.DOC. 

                         *  A Quick Reference Card, found in REFCARD.DOC.

                    We recommend that you print a copy of the documentation 
               by COPYing each of the four .DOC files to your printer.


               What Does The Confidant Do?

                    Here  is a quick overview of what The Confidant can  do 
               for you:

                    The Confidant encodes sensitive data, such as personnel 
               information,   payroll  and  income  data,  health  records, 
               examinations,  test scores,  survey data, or business plans, 
               in order to keep them confidential.

                    The Confidant prevents undetected accidental alteration 
               of  data,  and  permits  only  authorized  persons  to  make 
               intentional alterations.

                    The   Confidant  protects  information  transmitted  by 
               communications  lines  from  alteration  as  well  as   from 
               unauthorized  use  by  anyone intercepting it or  trying  to 
               change it.
                    
                    The   Confidant  gives  a  choice  of  two   encryption 
               procedures.   The  national Data Encryption  Standard  (DES) 
               provides very high security.   A faster "privacy" procedure


               [The Confidant Description (C) 1983, 1984 Data Sage - page D-2]








               that  is somewhat less secure provides encryption for normal 
               use, where speed is important.

                    The  Confidant also provides the ability to enter  data 
               into the computer, to copy files, and to print files.  Input 
               to  the  program  may come from either a disk  file  or  the 
               keyboard of the console.   Output may be directed to a file, 
               the screen of the console, or a printer.


               Who Uses The Confidant?

                    Most   persons  needing  occasional  or  routine   data 
               security should find The Confidant useful.  Examples are:

                    *  Businessmen  and  executives  who  need  to  protect 
               business plans and data.

                    *  Professionals,   such  as  physicians,  lawyers,  or 
               accountants who must protect the privacy of clients.

                    *  Computer  users  who  need  to  transmit   sensitive 
               information over public communcations lines.

                    * Educators with grades and examinations online.

                    *  Social and behavioral scientists who have  collected 
               sensitive  data and are concerned about the subjects'  right 
               to privacy.

                    * Individuals who want to maintain the privacy of their 
               own personal information.

                    The  Confidant  is intended for use by individuals  and 
               organizations for "normal" encryption.  That is, it is meant 
               to  protect  and keep confidential the  routine  information 
               that individuals and companies produce.

                    The Confidant is NOT meant to replace hardware  devices 
               where these are required.  For example, Government standards 
               require  hardware  encryption  for  Federal  agencies.   The 
               American Banking Association requires hardware encryption of 
               fund transfers between financial institutions.  In addition, 
               hardware encryption is better for "volume" encryption.

                    If  you  are  an individual,  The Confidant  will  most 
               likely  meet your needs.   If you are a  company,  or  other 
               organization, it will probably meet many of your needs.  But 
               you  should check with your organization's security officers 
               or  in  some other way make sure  that  software  encryption 
               meets the requirements you have.

                   Having  said  this  much,  we think you  will  find  The 
               Confidant an invaluable tool.   We hope you find a good deal 
               of pleasure in using it.


               [The Confidant Description (C) 1983, 1984 Data Sage - page D-3]










               Enjoy Using The Confidant

                    The Confidant is friendly and easy to use.   It is also 
               easy  to learn.   We hope you will begin by  examining  this 
               USER GUIDE,  including the Table of Contents and the  Index, 
               so you will know where to find information when you need it.  
               Then turn to the TUTORIAL file and get started.

                    We  are always anxious to improve the program  and  the 
               documentation.   Please  write  us if you have  comments  or 
               suggestions.


               Disclaimer

                    We  have  done everything we can to make The  Confidant 
               work well for you.  However, we cannot be responsible in the 
               event of problems.   In using The Confidant,  you agree that 
               in no event will you hold Data Sage liable for any  damages, 
               actual  or  consequential,  that may arise from use of  this 
               product. 




                                             * * *     





























               [The Confidant Description (C) 1983, 1984 Data Sage - page D-4]










                                 THE CONFIDANT USER GUIDE
                                    TABLE OF CONTENTS

               DESCRIPTION (DESCRIPT.DOC)
                   Introduction ....................................  D-2
                   Table  of Contents of the entire USER GUIDE .....  D-5
                   What You Need to Use The Confidant ..............  D-6
                   Getting Started with The Confidant   ............  D-7
                   Index to the DESCRIPTION ........................  D-11

               TUTORIAL (TUTORIAL.DOC)
                   The Confidant and the Secret Formula  ...........  T-1
                   What is There to Protect?   .....................  T-1
                   Encryption Vs. Passwords   ......................  T-2
                   What is Encryption?   ...........................  T-3
                   A Little Background   ...........................  T-3
                   Copying the Master Diskette   ...................  T-4
                   Using The Confidant   ...........................  T-7
                   Getting HELP   ..................................  T-7 
                   The SOURCE   ....................................  T-9
                   The DESTINATION   ...............................  T-9
                   Choosing a PASSWORD   ...........................  T-10
                   Hiding the PASSWORD   ...........................  T-11
                   Starting Encryption   ...........................  T-11
                   Fixing Mistakes   ...............................  T-14
                   "Flipping" SOURCE and DESTINATION   .............  T-15
                   Copying   .......................................  T-15
                   Privacy   .......................................  T-18
                   Directory and Erase SOURCE ......................  T-19
                   Using The Confidant to Transmit Data Over the     
                       Telephone  ..................................  T-19
                   Index to the TUTORIAL ...........................  T-25

               REFERENCE (REFER.DOC)
                   How to Use the Reference ........................  R-1
                   Copy ............................................  R-2
                   DES Decipher ....................................  R-3
                   DES Encipher ....................................  R-4
                   The DESTINATION .................................  R-6
                   Directory .......................................  R-8
                   End .............................................  R-9
                   Erase SOURCE ....................................  R-10
                   Flip ............................................  R-11
                   HELP ............................................  R-12
                   Hide ............................................  R-13
                   The Keyboard ....................................  R-14
                   Maintaining Security ............................  R-16
                   The PASSWORD ....................................  R-17
                   Privacy .........................................  R-19
                   PROBLEM Reports .................................  R-21
                   The SOURCE ......................................  R-23
                   Index to the REFERENCE ..........................  R-25



               [The Confidant Description (C) 1983, 1984 Data Sage - page D-5]










                                      WHAT YOU NEED
                                   TO USE THE CONFIDANT



               Required

                    * IBM Personal Computer or BIOS-compatible computer

                    * 64K bytes of RAM

                    * One 5.25 inch double sided double density disk drive

                    * An IBM-compatible color or monochrome display capable        
                    of  showing 80 columns.   If your display is set to  40        
                    columns,  the  program will set it to 80  columns  with        
                    your consent, otherwise the program will terminate.


               Optional

                    * A serial or parallel printer

                    * Additional hard, floppy or RAM disk drives

                    * Additional floppy diskettes for saving data


               Required Software 

                    * PC-DOS 1.1 or higher

                    * The Confidant, which consists of nine files:

                         * CONFIDE.EXE       (The Program)    
                         * CONFIDE.HLP       (Online Help File)
                         * CONFIDE.CRY       (For Use with the Tutorial)
                         * TYPE.ME           (Explains Documentation files)
                         * DESCRIPT.DOC      (Description Document)
                         * TUTORIAL.DOC      (Tutorial Document)
                         * REFER.DOC         (Reference Document)
                         * REFCARD.DOC       (Quick Reference Card)
                         * CONFIDE.INV       (Invoice form)












               [The Confidant Description (C) 1983, 1984 Data Sage - page D-6]











                                     GETTING STARTED
                                    with The Confidant



                    The  best  way to get started with The Confidant is  to 
               get  acquainted  with this USER GUIDE before you try to  use 
               the  program.   It  will be worth your time to  examine  the 
               Table of Contents and then read the TUTORIAL section.  

                    The  TUTORIAL  will lead you in a  step-by-step  manner 
               through  using  The  Confidant.   It will  teach  you  about 
               security.   It  will also entertain you,  in a mild sort  of 
               way.   When you read the TUTORIAL,  work along with it.  Put 
               yourself  in Anne Lambert's or David Lyon's  place,  and  do 
               what they do.

                    But  if  you are impatient to try out the  program,  as 
               most people are,  decide which of the three systems below is 
               most like yours.  Then follow the steps outlined.  You'll be 
               using it in no time.




                        SYSTEM 1: A hard drive and a floppy drive

               Step  1.  Boot your computer system in the normal  way.   If 
               you  are  using DOS 2.0,  use the PATH command  to  set  the 
               subdirectory where you want The Confidant to reside.

               Step  2.   Place the original copy of The Confidant  in  the 
               floppy drive.

               Step 3.  At the DOS prompt, type:

                                      Copy A:*.* C:

               and  press the <RETURN> key.   (This assumes the floppy disk 
               drive  is your A: drive and the hard disk is your C:  drive.  
               If that is not correct,  substitute the correct letters  for 
               the drives.)

               Step 4. When the copy is finished,  remove the original copy 
               of  The Confidant from the A:  drive and store it in a  safe 
               place.

               Step 5.  At the DOS prompt, log your hard disk by typing:

                                            C:     

               (Again, assuming your hard disk is the C: drive.)


               [The Confidant Description (C) 1983, 1984 Data Sage - page D-7]









               Step 6. At the DOS prompt, type:

                                         Confide

               and press the <RETURN> key.  




                               SYSTEM 2: Two floppy drives

               Step  1.  Boot your computer system in the normal  way.   If 
               you  are  using  DOS 2.0,  use the PATH command to  set  the 
               subdirectory where you want The Confidant to reside.

               Step 2.  Place the original copy of The Confidant in the  A: 
               drive.

               Step 3. Place a blank, formatted diskette in the B: drive.

               Step 4.  At the DOS prompt, type:

                                      Copy A:*.* B:

               and press the <RETURN> key.  

               Step 5. When the copy is finished,  remove the original copy 
               of  The Confidant from the A:  drive and store it in a  safe 
               place.

               Step  6. Remove the copy of The Confidant from the B:  drive 
               and put it into the A: drive.

               Step 7.  At the DOS prompt, log your A: drive by typing:

                                            A:     

               Step 8. At the DOS prompt, type:

                                         Confide

               and press the <RETURN> key.  




                                SYSTEM 3: One floppy drive

               Step  1.  Boot your computer system in the normal  way.   If 
               you  are  using DOS 2.0,  use the PATH command  to  set  the 
               subdirectory you want The Confidant to reside under.

               Step  2.  Place the original copy of The Confidant in the A: 
               drive.


               [The Confidant Description (C) 1983, 1984 Data Sage - page D-8]









               Step 3.  At the DOS prompt, type:

                                      Copy A:*.* B:

               and press the <RETURN> key.  

               Step 3. In response to the prompt, insert a blank, formatted 
               diskette in the B:  drive.   Press the <RETURN> key to start 
               copying  the  first file.   Exchange the original  and  copy 
               diskettes  in response to the prompts until all files on the 
               original diskette have been copied.

               Step  4. When the copying is finished,  store  the  original 
               copy of The Confidant in a safe place.

               Step  5.  Press the <RETURN> key.   At the DOS  prompt,  log 
               your A: drive by typing:

                                            A:     

               Step 6. At the DOS prompt, type:

                                         Confide

               and press the <RETURN> key.  


                    Now you're started.   Press <F9> for help.  We hope you 
               enjoy  using The Confidant.   And we suggest that you  still 
               study  the  tutorial  and reference guide  when  you  get  a 
               chance.

























               [The Confidant Description (C) 1983, 1984 Data Sage - page D-9]












                                     ACKNOWLEDGEMENTS


                    The Confidant(tm) was conceived and written by Stan  W. 
               Merrill,  Ph.D.   He also wrote the documentation.   John B. 
               Roeder,  Ph.D.  edited the documentation, added indexes, and 
               in  other  ways  prepared  the  program  for   distribution.   
               JoLynn Bennett helped test it.

                    Several  persons  not affiliated with  Data  Sage  gave 
               valuable feedback.   Our thanks to David Colesworthy, Morris 
               Effron, Claudia LaRock, Gene Lyman, Helena Merrill, and Gary 
               J. Mulligan.








































               [The Confidant Description (C) 1983, 1984 Data Sage - page D-10]













                         INDEX to the DESCRIPTION (DESCRIPT.DOC)

               C
               Copying The Confidant programs and documentation, 1, 7ff

               D
               Disk drives, various configurations of, 6, 7ff
               Display, number of columns in, 6
               Documentation, 2

               H
               Hardware encryption, The Confidant does not replace, 4
               Hardware needed to use The Confidant, 6

               I
               Improvements, suggestions for, 4

               O
               Optional hardware devices in using The Confidant, 6

               P
               Purpose of The Confidant, 2, 3

               R
               Reference manual, 2
               Reference card, 2
               Required hardware devices in using The Confidant, 6

               S
               Starting out, 7

               T
               Tutorial, 2, 7

               U
               User-supported software, 1

               W
               Who uses The Confidant, 3













               [The Confidant Description (C) 1983, 1984 Data Sage - page D-11]





```
{% endraw %}

## REFCARD.DOC

{% raw %}
```



                                 THE CONFIDANT (tm)
                                QUICK REFERENCE CARD

                        Copyright (C) 1983, 1984 by Data Sage

                               TO START THE CONFIDANT:

             Place The Confidant in the logged drive and type:  CONFIDE

                              TO USE THE CONFIDANT:

          Fill  in  the SOURCE,  DESTINATION,  and PASSWORD boxes.   Choose  the 
     function  you want from the list at the bottom of the screen and press  the 
     corresponding Function Key.

          The  DESTINATION  tells  The  Confidant where  to  send  the  text  it 
     processes.

          The  SOURCE  tells  The  Confidant where to take  its  text  FROM  for 
     processing.

          The  Confidant  combines the PASSWORD with the text in the  SOURCE  to 
     create  encrypted  or  decrypted text.   The PASSWORD may  consist  of  any 
     characters  you  can  generate from the keyboard,  except for  the  special 
     editing keys.
          
                                      FUNCTIONS 

     <F1>  DES Encipher:   causes the text in the SOURCE to be encrypted,  using 
     the Data Encryption Standard (DES) algorithm.  

     <F2>  DES Decipher:  causes the text in the SOURCE to be  decrypted,  using 
     the Data Encryption Standard (DES) algorithm.  

     <F3> Privacy: causes the text in the SOURCE to be encrypted (or decrypted), 
     using  a  special  algorithm that is much faster than the  Data  Encryption 
     Standard (DES), though not as secure.  

     <F4>  Copy:  causes the text in the SOURCE to be copied to the DESTINATION.  

     <F5>  Flip: exchanges the names in the SOURCE and DESTINATION fields.

     <F6> Hide:  hides (and reveals) the information in the PASSWORD, SOURCE and 
     DESTINATION fields.

     <F7>  Directory:  will display a  directory listing of all files that match 
     those specified in the SOURCE field of The Confidant's main menu.

     <F8>  Erase SOURCE:  will erase the file or files specified in  the  SOURCE 
     field of The Confidant's main menu.

     <F9> Help: provides a brief explanation of The Confidant's functions.

     <F10> End:  will stop The Confidant at any time and return you to the place 
     at which you you gave the last command.  












          
                              EDITING KEYS 

     Name of Key              Purpose
     ~~~~ ~~ ~~~              ~~~~~~~
     Backspace                Move backward one space
     Left arrow               

     Right arrow              Move forward one space

     Return                   Move to next box, using a downward 
                              rotation.  while entering text from 
                              the CONSOLE, send the line to the
                              computer for encrypting.

     Down arrow               Move to next box, using a downward 
                              rotation. Does not work when entering 
                              text from the CONSOLE 

     Up  arrow                Move  to  next box,  using  an  upward 
                              rotation.  Does not work when entering 
                              text from the CONSOLE 


     Home                     Move to the top (SOURCE) box.   While  
                              entering text from the CONSOLE,  move 
                              to beginning of the line.

     End                      Move  to the bottom  (DESTINATION)  box.  
                              While entering   text  from  the  CONSOLE,   
                              move to beginning of the line.

     Ins                      Toggle between insert and type-over modes     

     Del                      Delete the character above the cursor

     SHIFT PrtSc              Print a copy of the screen on the printer.

     Ctrl-Num Lock            Stop scrolling of screen temporarily
























```
{% endraw %}

## REFER.DOC

{% raw %}
```























                         * *               * *               * *
                          * *************** * *************** *
                         * *               * *               * *
                          *                                   *
                          *         THE CONFIDANT (tm)        * 
                          *             REFERENCE             * 
                          *                                   *
                         * *               * *               * *
                          * *************** * *************** *
                         * *               * *               * *





















                          Copyright (C) 1983, 1984 by Data Sage
                                    Yale Station 2902
                                   New Haven, CT 06520















                                         CONTENTS


                   How to Use the Reference ........................  R-1
                   Copy ............................................  R-2
                   DES Decipher ....................................  R-3
                   DES Encipher ....................................  R-4
                   The DESTINATION .................................  R-6
                   Directory .......................................  R-8
                   End .............................................  R-9
                   Erase SOURCE ....................................  R-10
                   Flip ............................................  R-11
                   HELP ............................................  R-12
                   Hide ............................................  R-13
                   The Keyboard ....................................  R-14
                   Maintaining Security ............................  R-16
                   The PASSWORD ....................................  R-17
                   Privacy .........................................  R-19
                   PROBLEM Reports .................................  R-21
                   The SOURCE ......................................  R-23
                   Index to the Reference  .........................  R-25















































                                 HOW TO USE THE REFERENCE


                    The REFERENCE for The Confidant is meant to provide all 
               the  essential information about each of the The Confidant's 
               features.    It  provides  somewhat  more  detail  than  the 
               TUTORIAL.

                    The  REFERENCE  is organized alphabetically  by  topic.     
               To  find  all the information about Password,  for  example, 
               look  in  the Table of Contents or the Index  for  the  page 
               number,  or  thumb  through the pages until you come to  the 
               "P's ."

                    Most  of  the  topics are  organized  into  three  main 
               sections: 

                         * Purpose

                         * How to Use

                         * Explanation

                    The  Purpose and How to Use sections  describe  briefly 
               what  you  need  to know to make The  Confidant  work.   The 
               Explanation section provides quite a bit of detail about the 
               design and use of The Confidant.





































                                           COPY


               Purpose

                    The Copy key, <F4>, causes the text in the SOURCE to be 
               copied to the DESTINATION.  


               How to Use

                    Type  the  file or device names for the SOURCE and  the 
               DESTINATION  in the appropriate fields.   A PASSWORD is  not 
               needed.   Then press the <F4> key.   You may stop copying at 
               any time by pressing the END (<F10>) key.


               Explanation

                    The Copy key will copy any file,  including executable, 
               encrypted, or other files that no longer contain ASCII text.  
               It  will not copy FROM the PRINTER or SERIAL  port,  but  it 
               will  copy  TO  them.   It will also copy TO  and  FROM  the 
               CONSOLE.

                    Although  Copy is useful for copying text from one file 
               to another,  or from a file to the printer, its main purpose 
               in  The  Confidant  is for viewing text that has  just  been 
               encrypted to make sure it looks encrypted.   It is also used 
               quite  often  for looking through files in order to  find  a 
               specific  one  that  requires  encrypting.   When  used  for 
               viewing text, the DESTINATION is usually left as the CONSOLE.

                    If you Copy from the CONSOLE to the parallel PRINTER or 
               a SERIAL printer,  you may want to set the printer for  AUTO 
               LINEFEED  because  The  Confidant  does  not  send  linefeed 
               characters  at  the  end  of lines to tell  the  printer  to 
               advance  a  line  unless those characters are  in  the  file 
               itself.















               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-2]











                                       DES DECIPHER


               Purpose

                    The  DES  Decipher key,  <F2>,  causes the text in  the 
               SOURCE  to  be decrypted using the Data Encryption  Standard 
               (DES)  algorithm.   It  places  the decrypted  text  in  the 
               DESTINATION.   The  decryption  is  based  on  the  PASSWORD 
               supplied.


               How to Use

                    Type  the  file or device names for the SOURCE and  the 
               DESTINATION  in  the  appropriate  fields.    Type  in  your 
               PASSWORD.  Then press the <F2> key.  You may stop decryption 
               at any time by pressing the End (<F10>) key.


               Explanation

                    The  DES Decipher function is the opposite (inverse) of 
               the DES Encipher function.   (Theoretically, you could first 
               Encipher using the Decipher function and then Decipher using 
               the Encipher function, instead of the other way around.  For 
               the most part, Decipher just encrypts "backwards."  However, 
               The  Confidant is not intended to be used in this  way,  and 
               may not work correctly if you do so.)

                    For  more  information about the DES algorithm used  by 
               The  Confidant,  please  see the reference section  for  DES 
               Encipher.





















               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-3]











                                       DES ENCIPHER


               Purpose

                    The  DES Encipher key,  <F1>,  causes the text  in  the 
               SOURCE  to be encrypted,  using the Data Encryption Standard 
               (DES)  algorithm.   It  places  the encrypted  text  in  the 
               DESTINATION.   The  encryption  is  based  on  the  PASSWORD 
               supplied.


               How to Use

                    Type  the  file or device names for the SOURCE and  the 
               DESTINATION  in  the  appropriate  fields.    Type  in  your 
               PASSWORD.  Then press the <F1> key.  You may stop encryption 
               at any time by pressing the End (<F10>) key.


               Explanation

                    The  Data  Encryption Standard  is  an  "algorithm,"  a 
               procedure  or  set  of rules,  for encoding  data.   It  was 
               originally  developed at IBM,  and then was approved by  the 
               United States Government for use by government agencies.  It 
               is the only procedure approved for routine government agency 
               use.   It is also used by many banks for transferring funds, 
               and  by  many businesses for protecting privacy as  well  as 
               proprietary  information.   As far as is known,  no one  has 
               succeeded  in "cracking" or deciphering text encrypted  with 
               the  DES.   (It  may  be theoretically possible  to  do  so, 
               however, at very great expense.)

                    As with most things in electronics,  it is possible  to 
               implement   the  DES  algorithm  using  either  hardware  or 
               software.   Hardware  is  much faster,  and  the  government 
               standard  calls  for  its  agencies  to  use  only  hardware 
               implementations.   Software,  on the other hand,  is usually 
               less  expensive.   It also does not require  alterations  to 
               your computer system.   It is adequate for many tasks,  such 
               as  the  encoding  of reports or data before  they  leave  a 
               company's  office,  and the encoding of personal data.   The 
               Confidant is a software implementation.

                    The  DES  works by combining eight characters  of  data 
               with  eight  characters  of password at  a  time.   In  most 
               computers, each character of data is stored in a code called 
               American  Standard Code for Information Interchange  (ASCII, 
               pronounced:   AS-key).    A  character  is  stored  in   the 
               computer's memory.  The space to store it (called a byte) is 
               made up of eight 1's or 0's (called bits).


               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-4]









                    The  DES  uses rules to mix up the bits in a  block  of 
               eight bytes (sixty-four bits), combine them with the bits in 
               the  password,   and  then  mix  them  up  some  more.   The 
               mathematical  rules  used make the results of these  mixings 
               and combinations virtually impossible to unravel without the 
               password  used  to do them in the  first  place.   For  this 
               reason,  the  password  is  the most important part  of  the 
               encryption.   If someone knows the password,  he or she  can 
               decrypt the text.   If someone forgets a password,  the text 
               can, essentially, never be decrypted.

                    The DES makes it hard for anyone to tamper with data so 
               encrypted.  If even a single bit in the password or the data 
               is  changed,  the encrypted text in the block in  which  the 
               change occurs cannot be decrypted.

                    For more information about the DES algorithm,  you  can 
               purchase a copy of the Data Encryption Standard from:

                        The National Technical Information Service
                               U.S. Department of Commerce
                                  Springfield, VA 22161 

               Ask for:

                                 Data Encryption Standard
                 Federal Information Processing Standards Publication 46





























               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-5]











                                     The DESTINATION


               Purpose

                    The DESTINATION tells The Confidant where it is to send 
               the  text it has processed.


               How to Use

                    If you want want to send text to the CONSOLE, leave the 
               word CONSOLE in the DESTINATION field.  Otherwise, highlight 
               the  field by moving to it with the special  cursor  editing 
               keys.  (See  the Keyboard section for more information about 
               cursor keys.)  Then type over the word CONSOLE with the name 
               of  a file or with the words PRINTER (for parallel  printer) 
               or SERIAL (for serial printer or modem).


               Explanation

                    The  DESTINATION  may  be  the  CONSOLE,  a  file,  the 
               (parallel) PRINTER or SERIAL (printer).

                    If  you  choose the CONSOLE as the DESTINATION,  a  box 
               labeled "Destination" will appear when you select one of the 
               encryption options (<F1> - <F4>).   The text will show up in 
               the box as it is being processed.   If you want to halt  the 
               text temporarily,  to look at it,  press the <Ctrl> and <Num 
               Lock> keys simultaneously.  To restart processing, press any 
               key. 

                    If you decide to use a file as the DESTINATION,  type a 
               filename  in  the  DESTINATION  field  on  the  main   menu.  
               Filenames  follow standard DOS conventions.  The disk  drive 
               where The Confidant is to look for the text may be any legal 
               drive name (A,  B, ...) on your system, followed by a colon.  
               You  must  provide  a file name that is from  one  to  eight 
               characters  long.   An  optional extension is preceded by  a 
               period,  and may be zero to three characters long, using the 
               same  characters that are allowed for the  filename.   Paths 
               for  DOS 2.0 are not supported.   If you are using  DOS  2.0 
               with  subdirectories,  be sure to set the PATH before  using 
               The  Confidant.   (See the DOS reference manual for  further 
               information on filenames.)

                    Remember  that The Confidant will assume you know  what 
               you are doing when you give it a DESTINATION filename.  If a 
               file  already exists with that name,  it will write over  it 
               without  asking.   If you don't know whether a file  exists, 
               use the Directory <F7> key to get a list of your files.


               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-6]









                    If you select the PRINTER,  be sure it is attached  and 
               ready.  Otherwise, the computer will stop processing.  

                    If you select the SERIAL port,  you must make sure  you 
               have  set it up properly before using The Confidant.   To do 
               so,  use the DOS MODE command to set the characteristics  of 
               COM1.   For  example,  if  you are using a DIABLO or  a  NEC 
               Spinwriter at 300 baud (30 characters per second), you would 
               issue the following command before using The Confidant.

                                  MODE COM1:300,N,8,1,P

               (See the DOS reference manual for further information on the 
               MODE command.)

                    You  may also send output to a modem through the SERIAL 
               port.  But  since  The Confidant has  no  telecommunications 
               features,  it is probably wisest in most cases to encrypt  a 
               file  to  disk  first,  and then  use  a  telecommunications 
               package  to send it to another computer.   When using such a 
               package to send an encrypted file,  treat the encrypted text 
               as  "object code" that has special characters in  it.   Some 
               programs have an option especially for object code.   If you 
               cannot ship object files, you probably won't be able to ship 
               encrypted files successfully.

                    On  occasion,  you  may want to view  Enciphered  text, 
               either  to verify that a file has indeed been encrypted,  or 
               just out of curiosity.   For viewing text you are better off 
               to  use  the  CONSOLE as the DESTINATION,  or  to  use  your 
               system's text editor,  than to send the encrypted text to  a 
               printer.   The  encrypted  text usually contains  characters 
               that will make the printer behave unpredictably.

                    While   The   Confidant   processes   your   text,   it 
               continuously  displays the number of eight-character  blocks 
               it has processed.  When used for DES encryption, it must use 
               blocks  this  size,  so  if your text does  not  have  eight 
               characters  in the final block,  The Confidant will add  its 
               own characters.   Therefore,  the size of a DESTINATION file 
               will sometimes differ from that of a SOURCE file.  This size 
               disparity  is  nothing to worry about,  since The  Confidant 
               knows these characters are its own,  and it will remove them 
               when you Decipher the file.

                    To  end processing at any time,  remember you can press 
               the End <F10> key.









               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-7]











                                        DIRECTORY


               Purpose

                    The  Directory  key,  <F7>,  will display  a  directory 
               listing  of  all  files that match those  specified  in  the 
               SOURCE field of The Confidant's main menu.


               How to Use

                    Type  a file name in the SOURCE field of the main menu.  
               Press  the <F7> key.   A listing of any files  matching  the 
               file description you gave in the SOURCE field will appear on 
               the screen.


               Explanation

                    When you cannot remember the name of a file you want to 
               encrypt or decrypt, the directory listing will help you find 
               it.  It is a good idea to make sure that no file exists with 
               the  name  you use as the DESTINATION,  unless you  want  to 
               write over it.  The Confidant assumes you want to write over 
               files, rather than proliferate copies by backing them up.

                    The  file  description  you type in  the  SOURCE  field 
               follows the standard DOS rules for file descriptions.   That 
               is, a description consists of a disk drive, a file name, and 
               a  file extension.   The wild card characters,  '*' and '?', 
               may be used to specify ambiguous references.  Under DOS 2.0, 
               pathnames  are NOT provided for.   It is a good idea to  set 
               your subdirectories before using The Confidant.   (For  more 
               information, see your DOS manual.)  



















               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-8]











                                           END


               Purpose

                    The End key, <F10>, will stop The Confidant at any time 
               and  return you to the place at which you you gave the  last 
               command.   By  pressing the End key from one to four  times, 
               depending  on what The Confidant is doing,  you can end  The 
               Confidant completely and return to the operating system.


               How to Use

                    Press  the <F10> key.   Press it up to four  times,  if 
               necessary, to return to the operating system.


               Explanation

                    Whenever  you want to end what The Confidant is  doing, 
               press  the  End  key.   Pressing the End key four  times  in 
               succession  will assure that the program returns you to  the 
               operating system quickly.

                    If  you  are writing text to a  file  or  printer,  The 
               Confidant  will finish the line you are on before  quitting.  
               If you want faster response, press the End key again quickly 
               to interrupt it.

























               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-9]











                                       ERASE SOURCE


               Purpose

                    The  Erase  SOURCE key,  <F8>,  will erase the file  or 
               files specified in the SOURCE field of The Confidant's  main 
               menu.


               How to Use

                    Type  a file name in the SOURCE field of the main menu.  
               Press the <F8> key.   A message will appear showing the file 
               description you gave in the SOURCE field.   The message will 
               ask  you  to press <F8> one more time if you still  want  to 
               delete the file or files specified.   If you do NOT want  to 
               erase the files, press any other key.  


               Explanation

                    The Erase SOURCE function allows you to delete files of 
               plain  text or cipher text that you no longer want to  store 
               on disk.   You may use it to get rid of plain text you don't 
               want others to see.   You may also use it to erase files you 
               don't need anymore in order to make more room on a  diskette 
               before using the encryption and decryption functions.

                    The  file  description  you type in  the  SOURCE  field 
               follows the standard DOS rules for file descriptions.   That 
               is, a description consists of a disk drive, a file name, and 
               a file extension.   The wild card characters '*' and '?' may 
               be  used  to specify ambiguous references.   Under  DOS  2.0 
               pathnames  are not provided.   It is a good idea to set your 
               subdirectories  before  using  The  Confidant.    (For  more 
               information, see your DOS manual.)  

                              * * *   W A R N I N G   * * *

                    Erasing  a file does NOT mean the information it  holds 
               is  gone  forever.   The operating system simply  marks  the 
               directory entry that it uses to find the file with a special 
               character.   This  character is a message to itself that the 
               file  has been erased.   The data still remain on  diskette, 
               and  a  sophisticated computer user can still  retrieve  the 
               file.   Devices evidently exist for reading information that 
               has been overwritten as many as a half-dozen or more  times.  
               So  if  your  data are likely to be the  target  of  intense 
               effort  by cryptographers,   destroy any plaintext copies by 
               burning or mutilating the diskettes that hold them.



               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-10]










                                           FLIP


               Purpose

                    The Flip key,  <F5>,  exchanges the names in the SOURCE 
               and DESTINATION fields.


               How to Use

                    Press the <F5> key.


               Explanation

                    Frequently, you will use the CONSOLE to enter text that 
               will  be  encrypted  and  then written  into  a  disk  file.  
               Afterward,  you will probably want to examine the encryption 
               by  either Copying or Deciphering the text in the file  back 
               to  the  CONSOLE.   In  that  way you can  verify  that  the 
               encryption was successful.   There are other occasions, too, 
               when at least one of the two fields needs to be switched.

                    This process occurs often enough to justify simplifying 
               it. Without the Flip key, it would be necessary to highlight 
               the  SOURCE  and DESTINATION boxes separately and  type  the 
               file name and CONSOLE designations into them.   The Flip key 
               reduces the effort involved to a single keystroke. 


























               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-11]











                                           HELP


               Purpose

                    The HELP key, <F9>, provides a brief explanation of the 
               functions provided by The Confidant.


               How to Use

                    Press the <F9> key.   Then select the topic you want to 
               know  more about and press the corresponding function key to 
               view information about it.


               Explanation

                    The HELP files are meant to do two things:

                         * Provide a quick introduction to The Confidant so 
               that you can get started with it right away.

                         * Refresh your memory about a particular  function 
               if you haven't used it in a long time.

                    The  HELP  files are NOT intended to replace the  Users 
               Guide.

                    For some users,  the HELP files will provide sufficient 
               information  about The Confidant and how to use it that they 
               will  only  read the Users Guide when a question  comes  up.  
               But most users will benefit from the additional  information 
               in the manual.




















               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-12]











                                           HIDE


               Purpose

                    The  Hide  key,  <F6>,  hides the  information  in  the 
               PASSWORD, SOURCE and DESTINATION fields, in order to protect 
               it from discovery by unauthorized persons who may be present 
               during encryption or decryption.


               How to Use

                    Press  the <F6> key.   Press it again to re-display the 
               information in the fields.


               Explanation

                    Normally,  you will want to see the file names and  the 
               password when you provide them to The Confidant.   That way, 
               you   can  be  certain  that  you  have  typed  the  correct 
               information.

                    However, when persons who are not authorized to encrypt 
               or  decrypt a protected text are present it is important  to 
               protect  the  password  as well as the names  of  the  files 
               involved.   The  Hide  key allows you to use  The  Confidant 
               without revealing this information.

                    You  should HIDE your password and file names  whenever 
               someone is present who is unauthorized,  and whenever  there 
               is  a  chance  that  such a person will  arrive  during  the 
               encryption process.
                    
                    When you enter Hide mode by pressing the <F6> key,  the 
               cursor size increases.   When you exit Hide mode by pressing 
               the <F6> key again,  the cursor returns again to its  normal 
               size. 















               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-13]









                                       THE KEYBOARD


                    This  section describes the use of special keys on  the 
               keyboard with The Confidant.  Any keys not listed perform as 
               regular "typewriter" keys where appropriate,  or do  nothing 
               at all.
                    
               Editing Keys 

                    The  special  editing  keys on the  keyboard  have  the 
               following  functions.   Note  that  some keys  do  something 
               slightly different while entering text from the CONSOLE than 
               they do at the main menu.

                    Name of Key              Purpose
                    ~~~~ ~~ ~~~              ~~~~~~~
                    Backspace                Move backward one space
                    Left arrow               

                    Right arrow              Move forward one space

                    Enter                    Move to next box, using 
                                             a downward rotation.  While 
                                             entering text from the 
                                             CONSOLE, send the line to the
                                             computer for encrypting, then
                                             move to the beginning of a
                                             new blank line.

                    Down arrow               Move to next box, using 
                    Pg Dn                    a downward rotation. Does 
                    Tab                      not work when entering plain
                                             text from the CONSOLE 

                    Up arrow                 Move to next box, using 
                    Pg Up                    an upward rotation.  Does 
                    SHIFT Tab                not work when entering plain
                                             text from the CONSOLE 

                    Home                     Move to the top (SOURCE)
                                             box.  While entering text 
                                             from the CONSOLE, move to 
                                             beginning of the line.

                    End                      Move to the bottom     
                                             (DESTINATION) box. While 
                                             entering text from the 
                                             CONSOLE, move to beginning
                                             of the line.

                    Ins                      Toggle between insert and
                                             type-over modes. Cursor size
                                             increases slightly.


               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-14]









                    Name of Key              Purpose
                    ~~~~ ~~ ~~~              ~~~~~~~
                    Del                      Delete the character above
                                             the cursor

                    SHIFT PrtSc              Print a copy of the screen 
                                             on the printer 

                    Ctrl-Num Lock            Stop scrolling of screen
                                             temporarily


                    
               Function Keys 

                    The  function  keys on the keyboard have the  following 
               functions:  

                    Name of Key              Purpose
                    ~~~~ ~~ ~~~              ~~~~~~~
                    F1                       Begin DES Encipher

                    F2                       Begin DES Decipher

                    F3                       Begin Privacy encryption
                                             or decryption          

                    F4                       Copy the SOURCE to the 
                                             DESTINATION

                    F5                       Flip the SOURCE and 
                                             DESTINATION

                    F6                       Hide the SOURCE, 
                                             DESTINATION, and PASSWORD

                    F7                       Display a Directory of 
                                             files as specified 
                                             in the SOURCE field

                    F8                       Erase the file(s) listed 
                                             in the SOURCE field

                    F9                       Display HELP files

                    F10                      End the current process 
                                             and return to the previous 
                                             one 








               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-15]










                                   MAINTAINING SECURITY

                    Here  are a couple of rules for assuring that encrypted 
               text remains safe and secure.  

                    1.   Don't  leave plain text versions of  an  encrypted 
               text  in  unsecure places.   There are three kinds of  plain 
               text versions:

                    * Paper,  microfiche, or other "hard" copies of a text.  
               It is easy to leave a copy of a text on your desk,  in  your 
               files,  in  the wastebasket,  at the printer's,  in the mail 
               room  at your office,  between other papers in a  folder  or 
               briefcase.   Be  scrupulously  certain that  no  unencrypted 
               hardcopies exist where unauthorized persons may find them.

                    *  Plain  text  versions on disk,  that  you  have  not 
               erased.   These are easy for people to find,  use,  and even 
               change.

                    *  Plain text versions on disk that HAVE  been  erased.  
               When the computer erases a file, it doesn't really erase it.  
               It just places a special mark in front of the file's name in 
               the  directory.  Then,  if space on the disk is needed later 
               on,  the  computer will write over the top of  the  "erased" 
               text.   But  a skilled programmer could "unerase" the  file, 
               just  by changing the mark in front of its name.   It's that 
               easy.   Also,  devices evidently exist for reading text that 
               has  been overwritten a half-dozen times or  more.   Destroy 
               diskettes   that  have  plain  text  versions  of  extremely 
               sensitive data, or lock them up securely.

                    2.   Guard your PASSWORD.   Do not leave copies of  the 
               PASSWORD  lying around,  even "hidden" copies such as  those 
               made  by the indentation of a pen on the second sheets of  a 
               pad of paper.   Retain the PASSWORD in your head, or lock it 
               in  a  safe place.   Share the PASSWORD only with those  who 
               absolutely NEED to know it.

















               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-16]











                                       The PASSWORD


               Purpose

                    The Confidant combines the PASSWORD mathematically with 
               the  text  in  the SOURCE to create encrypted  or  decrypted 
               text.  


               How to Use

                    Highlight  the PASSWORD field by moving to it with  the 
               special  cursor editing keys (see The Keyboard  section  for 
               more  information  about  cursor  keys).   Then  type  in  a 
               PASSWORD  that you create.   The PASSWORD may consist of any 
               characters  you can generate from  the  keyboard,  including 
               "control" characters, except for the special editing keys.


               Explanation

                    Among  encryption professionals the PASSWORD  is  often 
               called  the  KEY.   The  word "key" emphasizes  the  central 
               importance  of the PASSWORD to the security of an  encrypted 
               text.   Without  the PASSWORD,  experts assert,  no  current 
               computer   can  decode  a  text  encrypted  with  the   Data 
               Encryption Standard (DES) algorithm. 

                    No default password comes with The Confidant.  You must 
               create and take care of your own.  The PASSWORD should be as 
               close  to sixteen characters long as possible.   The  longer 
               your  PASSWORD,  the  more secure it  is.   It  may  contain 
               spaces,  control characters, or any other characters you can 
               enter from the keyboard,  including those available with the 
               ALT  key.   However,  The Confidant ignores leading  blanks. 
               Also,  The  Confidant does not distinguish between upper and 
               lower case.  

                    Examples of PASSWORDS are:

                                     FINNISH MAY DAY

                                     |||\\\---+++))))

                                     0123456789ABCDEF

                                     a!b@c#d$ Pretty

                    
                    Some  people  may  find it important  to  know  that  a 
               PASSWORD  with a fairly "random" bit pattern is more  secure 


               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-17]








               than otherwise.  For this reason, The Confidant extracts the 
               second,  fourth,  sixth,  and  remaining even bits from  the 
               PASSWORD,  and  compresses them in reverse order into a  new 
               password  that it uses internally for the  DES.   Therefore, 
               text  that has been encrypted using The Confidant could  not 
               be decrypted using the same PASSWORD with any other software 
               or hardware implementation of the Data Encryption Standard.

                    If  you forget your PASSWORD or PASSWORDs,  you are  in 
               the  same situation as anyone else who wants to decrypt your 
               text -- out of luck.   So take precautions to remember  your 
               PASSWORD.  Avoid "obvious" PASSWORDs, however, such as names 
               or  birthdates of family members and other close friends  or 
               associates,  personal  characteristics  or hobbies  you  are 
               known  for,  and license plate and social security  numbers.  
               Anyone who knows you very well will try these first.  If you 
               become  worried that a PASSWORD has become compromised,  you 
               should re-encrypt the data with a different one.

                    In a situation where more than one person needs to know 
               a PASSWORD,  it is essential to maintain high security.   If 
               the  PASSWORD is written anywhere,  it should be kept  under 
               lock and key.   If a PASSWORD is used for several texts,  or 
               for  all  texts within a certain time period by a  group  of 
               users, the PASSWORD should be changed at random intervals to 
               limit the likelihood that unauthorized users will obtain it, 
               or  having  obtained it will be able to use it  for  several 
               texts.





























               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-18]











                                         PRIVACY


               Purpose

                    The Privacy key, <F3>, causes the text in the SOURCE to 
               be encrypted (or decrypted),  using a special algorithm that 
               is  much  faster  than the Data Encryption  Standard  (DES), 
               though  not  as  secure.    It  places  the  encrypted   (or 
               decrypted) text in the DESTINATION.  The encryption is based 
               on the PASSWORD supplied.


               How to Use

                    Type  the  file or device names for the SOURCE and  the 
               DESTINATION  in  the  appropriate  fields.    Type  in  your 
               PASSWORD.    Then  press  the  <F3>  key.    You  may   stop 
               encryption/decryption  at  any  time  by  pressing  the  End 
               (<F10>) key.


               Explanation

                    If  a  file  has  been previously  encrypted  with  the 
               PASSWORD  you  supply,  it will be decrypted  when  you  use 
               Privacy.   Otherwise, it will be encrypted.  This is because 
               Privacy  uses a procedure that reverses itself each time  it 
               is used on the same text with the same password. 

                    For  much encryption,  it is not necessary that no  one 
               ever  reads  the text that was  encrypted.   Rather,  it  is 
               desirable  to  keep the text from being read for  a  certain 
               amount  of time.   Or it is desirable to keep merely curious 
               people  from looking at the text,  yet it is not  worth  the 
               time  and  effort  to make the text  impossible  to  decode.  
               Privacy  is  good for this kind of protection.   It is  much 
               like  the  locks  on most  people's  houses.   A  determined 
               burglar could break in, but most people who don't have a key 
               won't get in. 

                    A   text  encrypted  with  the  Privacy  algorithm   is 
               difficult to decode.  For most people it will be impossible, 
               because  they  don't know  how.   A  trained  cryptographer, 
               however,  has  a toolkit of statistical procedures that  may 
               allow him to break it, probably overnight.  For most things, 
               Privacy  will be perfectly adequate,  and much faster,  than 
               the DES algorithm.  But YOU must decide which is better in a 
               given circumstance.

                    One  interesting  use of Privacy is  a  process  called 
               "superencipherment",  or double coding.  You first code data 


               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-19]








               with  the  DES  algorithm.   Then  you code  it  again  with 
               Privacy.   (You can also use DES twice or Privacy twice,  of 
               course.)  This makes for even safer text, though in the case 
               of   DES   it  is  probably   unnecessary.    If   you   use 
               superencipherment,   remember  to  decode  by  applying  the 
               procedures  in  reverse order.   That is,  if you  used  DES 
               first,  then Privacy to encrypt, you must use Privacy first, 
               then DES to decrypt. 

                    The  algorithm,  or  procedure,  which Privacy uses  is 
               deliberately  not  presented  here,   as  knowledge  of  the 
               algorithm might make it easier to "crack."

                    The  use of ASCII NUL characters at the beginning of  a 
               plaintext  file  should be avoided.   Use  the  <space  bar> 
               rather  than  the  right arrow key when you  want  to  leave 
               blanks at the beginning of a file.
                    







































               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-20]











                                     PROBLEM REPORTS

                    As  the  old  saying  goes,  "there are  two  kinds  of 
               troubles in this world:  those you've gotta worry about  and 
               those  you don't."  The Confidant has two kinds of  problems 
               too:  EASY ones and HARD ones.  (Some programs call problems 
               "errors,"  but  The  Confidant simply sees its  troubles  as 
               problems that need to be overcome.)

                    The  Confidant  will  give you a message  when  it  can 
               detect  a  problem  and figure out  what  went  wrong  (EASY 
               problem).   For certain hardware problems, however, it gives 
               up and returns you temporarily to the operating system (HARD 
               problem).   This section describes what to do in either case 
               to fix the problem and continue with the task at hand.


               EASY Problems

                    Whenever  The Confidant confronts a problem that it can 
               identify,  it  clears  the screen and gives  you  a  PROBLEM 
               Report.   Then  it will wait until you press a key before it 
               returns  to  a point at which you can correct  the  problem.  
               Here is a list of the problems, along with suggestions about 
               how to cope with them.


               Report:  The PASSWORD is missing.

               Solution:   The  program  cannot  find  a  password  in  the 
               PASSWORD field.   You should type in a password and then try 
               again.  Remember, the first character cannot be a space.


               Report:  The SOURCE file cannot be used.  Please check it.

               Solution:  The program probably could not find a file on the 
               disk  with the name you typed into the  SOURCE  field.   You 
               should check what you typed to make sure it is correct.   If 
               it  looks alright,  use the <F7> Directory key to make  sure 
               the file is on your disk.  If you are using DOS 2.0, be sure 
               the file is in the current subdirectory.


               Report:   The DESTINATION file cannot be used.  Please check 
               it.

               Solution:  The program could not create a file with the name 
               you  gave it.   You should check to make sure you entered  a 
               valid DOS filename.




               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-21]










               Report:  The file 'CONFIDE.HLP' is not on the default drive.

               Solution:   When  you asked for HELP by pressing  <F9>,  The 
               Confidant  could  not find the file that contains  the  help 
               information.   Make sure the file CONFIDE.HLP is on the disk 
               in  your logged drive.   If you are using DOS 2.0,  be  sure 
               the file is also in the current subdirectory.



               Report:  The file(s) you want to erase is/are not there.

               Solution:  The program probably could not find a file on the 
               disk  with the name you typed into the  SOURCE  field.   You 
               should check what you typed to make sure it is correct.   If 
               it  looks alright,  use the <F7> Directory key to make  sure 
               the file is on your disk.  If you are using DOS 2.0, be sure 
               the file is in the current subdirectory.


               HARD Problems

                    The  list of hardware problems that The Confidant  does 
               not know how to handle includes the following:

                    * A disk is full.

                    * A disk is write-protected.

                    * A disk has gone bad.

                    * A drive is not ready.

                    * A device is not available.

                    When  The Confidant encounters such an error,  which is 
               very  seldom,  it will return you temporarily to  DOS.   You 
               will see this message on the screen:

                                  Abort, Retry, Ignore?

               You  should fix the problem before answering this  question.  
               Usually,  fixing the error means replacing the disk you  are 
               using with a new, formatted disk.

                    When you have corrected the problem,  press the <R> key 
               (for  Retry).   Then  The Confidant will continue.   If  you 
               press the Abort key, you will return to the operating system 
               permanently.  If you choose Ignore instead, you will get the 
               same problem report as before.

                    If  problems  occur other than  those  mentioned  here, 
               please let Data Sage know.  We would like to fix them.


               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-22]











                                        The SOURCE


               Purpose

                    The SOURCE tells The Confidant where it is to take  its 
               text FROM for processing.


               How to Use

                    If  you wish to enter text from the CONSOLE,  leave the 
               word CONSOLE in the SOURCE field.   Otherwise, highlight the 
               field by moving to it with the special cursor editing  keys. 
               (See  The Keyboard section for more information about cursor 
               keys.)   Then type over the word CONSOLE with the name of  a 
               file containing the text that you want to encrypt,  decrypt, 
               or Copy.


               Explanation

                    The SOURCE may be the CONSOLE,  or a file that contains 
               either plain text or cipher text.  

                    If  you  decide  to use a file as the  SOURCE,  type  a 
               filename  in the SOURCE field on the main  menu.   Filenames 
               follow  standard DOS conventions.  The disk drive where  The 
               Confidant  is  to look for the text may be any  legal  drive 
               name (A,  B,  ...) on your system, followed by a colon.  You 
               must  provide  a  file  name  that  is  from  one  to  eight 
               characters  long.   An optional extension is preceded  by  a 
               period,  and may be zero to three characters long, using the 
               same characters that are allowed for the filename. Paths for 
               DOS 2.0 are not implemented.   If you are using DOS 2.0 with 
               subdirectories,  be  sure  to set the PATH before using  The 
               Confidant.   (See  the  DOS  reference  manual  for  further 
               information on filenames.)

                    If you choose the CONSOLE as the SOURCE,  a box labeled 
               "Source"  will appear when you select one of the  encryption 
               options (<F1> - <F4>).   You type your text in the box.   At 
               the end of each line you must press the <RETURN> key to tell 
               The Confidant that you are finished with the line so it  can 
               process it.

                    Any  time before pressing the <RETURN> key you can edit 
               the  line using the editing keys described in  The  Keyboard 
               section.   You  can backspace,  delete  characters,  replace 
               characters  by  typing over them,  insert characters in  the 
               middle of the line,  and so forth.   If while in insert mode 
               you push characters beyond the end of the line,  which has a 


               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-23]








               maximum  length  of 77 characters,  the characters  will  be 
               lost.   You don't need to be at the end of the line to press 
               <RETURN>;  if you are editing in the middle of the line  and 
               want to process the text you may press it then.

                    To end text entry from the CONSOLE, press the End <F10> 
               key.


















































               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-24]










                                  INDEX to the Reference

               A
               ASCII (code), 4

               B
               Bits, 4, 5
               Block, 5
                    display of number being processed, 7
                    added characters in final block under DES, 7 
               Byte, 4

               C
               Case, upper not distinguished from lower in PASSWORD, 17 
               CONSOLE as DESTINATION, 6, 11
                    as SOURCE, 23 
                    copying to and from, 2
                    used to view files, 7
               Copy key, <F4>, 2
               Copying, 2
                    executable or encrypted files, 2
                    to a printer, 2 
               Cursor, moving the, 14
                    size indicates Hide and Insert modes, 13, 14

               D
               Data Encryption Standard (DES) procedure, 3, 4f
                    hardware vs. software implementations, 4
               Deleting text or characters, 14
               DES Encipher key, <F1>, 4
               DES Decipher key, <F2>, 3
                    use for encryption, 3
               DESTINATION, 6f
                    file size larger than SOURCE size, 7
                    file unusable, 21
                    hiding the, 13
                    of copied text, 2 
                    of decrypted (plain) text, 3, 11, 19
                    of encrypted (cipher) text, 4, 19
               Directory key, <F7>, 8
                    used to avoid overwriting files, 6, 8
               Disk errors, 22
               Double coding, 19f

               E
               Editing keys, 14f
               Encrypted text, viewing, 7
               End key, <F10>, 7, 9
               Enter key, when processing text from CONSOLE, 22
               Erase SOURCE key, <F8>, 10 
               Erasing files on diskette not adequate security, 10 
               Errors, 21f



               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-25]









               F
               File(s) as DESTINATION, 6
                    as SOURCE, 10, 23
                    description, 8, 10, 23
                    directory, 8
                    missing, 21f
                    overwriting, 6, 8
                    size variation using DES procedure, 7
               Flip key, <F5>, 11
               Function keys, summary, 15

               H
               Halting text processing temporarily, 6
               HELP key, <F9>, 12
               Hide key, <F6>, 13 
               Highlighting fields on the main display, 6, 14, 17

               I
               Inserting text or characters, 14 

               K
               Key, 17
               Keyboard, 14

               L
               Line length when entering text from CONSOLE, 22

               M
               Main display (menu, form), 8, 13
                    printing, 15
               Modem, output to using SERIAL port, 7

               O
               Object code, treating transmitted encrypted text as, 7
               Operating system, returning to, 9

               P
               PASSWORD, 17
                    automatic conversion to internal password, 18
                    choosing a good, 18
                    combined with block of text in DES procedure, 5, 17
                    compromised, 18
                    for DES Decipher, 3
                    for DES Encipher, 4
                    for Privacy procedure, 19
                    hiding the, 13 
                    length, 17
                    missing, 21
                    not needed for copying, 2
                    permissible characters in, 17
                    security of, 13, 16, 18
               Pathnames under DOS 2.0, 8, 10, 23
               PRINTER option requires ready printer, 7



               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-26]









               Printer, 6
                    erratic behavior when printing encrypted text, 7 
                    halting output, 9 
                    parallel, as DESTINATION, 6
                    serial, 6
                    used to print screen display, 15
               Privacy encryption procedure, 19f 
               Privacy key, <F3>, 19
               Problems, 21f
                    easy, 21
                    hard, 22

               S
               Scrolling, halting, 6, 15
               Security, 16f, 18
                    of "erased" files on diskette, 10, 16
                    of PASSWORD, 13, 16, 18
                    of Privacy procedure compared to DES, 19
                    of unencrypted files, 16
                    proportional to length of PASSWORD, 17
               SERIAL port as DESTINATION, 6
                    set up before using The Confidant, 7 
               SOURCE, 23f
                    editing the field, 23
                    file unusable, 21
                    hiding the, 13
                    line length of, during encryption of CONSOLE text, 22
                    of copied text, 2
                    of encrypted (cipher) text, 3, 11
                    of unencrypted (plain) text, 4
               Superencipherment, 19f

               T
               Telecommunications software to send text, 7

               V
               Verifying encryption, 11
               Viewing files, using Copy, 2
                    using CONSOLE as DESTINATION, 7, 11

               W
               Wildcard characters in file descriptions, 8, 10














               [The Confidant Reference (C) 1983, 1984 Data Sage - page R-27]






```
{% endraw %}

## TUTORIAL.DOC

{% raw %}
```
























                         * *               * *               * *
                          * *************** * *************** *
                         * *               * *               * *
                          *                                   *
                          *          THE CONFIDANT (tm)       * 
                          *              TUTORIAL             * 
                          *                                   *
                         * *               * *               * *
                          * *************** * *************** *
                         * *               * *               * *




















                          Copyright (C) 1983, 1984 by Data Sage
                                    Yale Station 2902
                                   New Haven, CT 06520
















                                        CONTENTS

                   The Confidant and the Secret Formula  ...........  T-1
                   What is There to Protect?   .....................  T-1
                   Encryption Vs. Passwords   ......................  T-2
                   What is Encryption?   ...........................  T-3
                   A Little Background   ...........................  T-3
                   Copying the Master Diskette   ...................  T-4
                   Using The Confidant   ...........................  T-7
                   Getting HELP   ..................................  T-7 
                   The SOURCE   ....................................  T-9
                   The DESTINATION   ...............................  T-9
                   Choosing a PASSWORD   ...........................  T-10
                   Hiding the PASSWORD   ...........................  T-11
                   Starting Encryption   ...........................  T-11
                   Fixing Mistakes   ...............................  T-14
                   "Flipping" SOURCE and DESTINATION   .............  T-15
                   Copying   .......................................  T-15
                   Privacy   .......................................  T-18
                   Directory and Erase SOURCE ......................  T-19
                   Using The Confidant to Transmit Data Over the     
                       Telephone  ..................................  T-19
                   Index to the Tutorial  ..........................  T-25








































                              THE CONFIDANT AND THE SECRET FORMULA

                                   A  Tutorial  on How to  Use 
                                          The Confidant

                                                  
                         Anne  Lambert pressed  the intercom button on  her 
                    desk.

                         As  Vice President of Finance for the  small  Icey 
                    Beverage Company,  she faced more than the usual number 
                    of  problems.   The  one that worried her now  was  the 
                    security  of the data on her firm's new microcomputers.  
                    It was hardly a major problem,  but she sensed that  it 
                    had  the  potential  for becoming one.   And  she  knew 
                    better than to let it. 
                
                         "See  if  you can get David  Lyons,  the  computer 
                    consultant,  will you?" she said to her secretary  over 
                    the intercom.

               What is There to Protect?

                         While she waited for the call to go through,  Anne 
                    considered what she wanted to protect and why.  

                         First,  there were the payroll records.  A curious 
                    employee  might look at the records of others.   If  he 
                    spread  word  of  what he found,  the morale  of  other 
                    employees could suffer.  

                         Next,   there   were   management   reports,   and 
                    projections  produced by her office.   If  someone  got 
                    hold  of  a  prerelease copy of  the  firm's  quarterly 
                    report,  for instance,  they could use that information 
                    to manipulate sales of the company's stock.  

                         And  there were Icey's plans for a new soft  drink 
                    marketing strategy.   How valuable those would be to  a 
                    competitor!   And  how easy to convince an employee  to 
                    print off a copy from the computer after hours,  or for 
                    someone   to  intercept  a  copy  when  it  was   being 
                    transmitted over the telephone to the Midwest office.

                         She  wasn't  the  only  one   concerned,   either.  
                    Earlier today,  Frank Vitale, the company's Director of 
                    Personnel,  had  mentioned  he  would like  to  keep  a 
                    computerized  record  of  the  experimental  alcoholism 
                    treatment  program  his office was offering to a  small 
                    number  of  employees.   But one of the  enrollees  had 
                    balked  when he brought it up.   "I don't  want  anyone 
                    else  knowing I'm in the program," he told Frank.   "If 
                    you put my name in the computer,  someone will find out 
                    for sure."  












                         During  the  same  discussion,  Aaron  Abrams, the 
                    marketing  manager,  mentioned  a mailing list  he  was 
                    preparing  as part of a compaign to increase the number 
                    of dealers selling the company's products.   "I'd  sure 
                    hate  it if our competition got hold of this," he said.  
                    "They'd mess us up for sure."  He was worried because a 
                    similar  list was stolen at the company he  worked  for 
                    previously. 

                         Getting  access  to  the microcomputers  was  very 
                    easy.   Since  the computers were located in  different 
                    offices  in the building,  physical security  was  low.  
                    And  some  of the computers were connected by  a  local 
                    area network, so that a user of one computer could look 
                    at  data  on another computer without the user  of  the 
                    other computer even knowing.

               Encryption Vs. Passwords

                         Anne's  thoughts were cut short by the buzz of the 
                    intercom.   "Mr.  Lyons  is  on  the  line,"  said  her 
                    secretary.  

                         "David,"  she  said,   when  she  picked  up   the 
                    telephone,  "a  salesman was here last week,  trying to 
                    get us to buy a security system for our microcomputers.  
                    I'm  afraid  I wasn't too impressed with  what  he  was 
                    offering,  but  the matter has been preying on my  mind 
                    ever since."  She briefly outlined the concerns she had 
                    just gone over in her head.

                         "What  didn't you like about what the salesman was 
                    offering you?" asked David, when she was finished.

                         "He was selling a password protection system,  you 
                    know,  where every user has a password that he uses  to 
                    get onto the system.   But we already have that kind of 
                    protection  with the local area network,  and I thought 
                    you said it was not very secure."

                         "That's  right," answered  the  consultant.   "The 
                    passwords  are  kept in a file on the disk.   A  clever 
                    employee  or  other user could find the  password  file 
                    with a little work,  and could then use any account  he 
                    wished.   Passwords  are useful.   But they are  seldom 
                    totally secure."

                         "Maybe  these  computers  aren't as  useful  as  I 
                    thought they were going to be," said Anne.  "An awfully 
                    lot  of  the  information we want to use  them  for  is 
                    sensitive." 

                         "I  think  I  have  a solution  to  the  problem," 
                    answered David.  "I suggest that you encrypt the data."


               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-2]









               What Is Encryption?

                         "Encrypt it?  Isn't that what CIA agents and spies 
                    do -- change text into a secret code or something?  

                         "Yes,  the  same techniques can be used to protect 
                    confidential  data  on a  computer,"  David  explained.  
                    "All  data  in a computer are stored in  special  codes 
                    made up of numbers.   The usual code for microcomputers 
                    is  called  ASCII,  which stands for American  Standard 
                    Code for Information Interchange.  ASCII is a code that 
                    most    programmers   and   computer   designers    and 
                    manufacturers know.   When you encrypt data, you change 
                    the code.   That way,  no one knows it.   The change in 
                    code   is  based  on  a  password  that   is   combined 
                    mathematically  with  the ASCII code to produce  a  new 
                    code."

                         "That sounds complicated," replied Anne.   "I need 
                    something simple to use or no one will do it."

                         "It's   actually  quite  straightforward,"   David 
                    assured  her.   "The  computer does all the  work,  and 
                    it  does it relatively fast.   The only thing you do is 
                    supply the password."

                         "Well,  I  am  interested in knowing  more,"  said 
                    Anne.  "Will you be able to show me?"

                         "Let's see," David said,  scanning his appointment 
                    book.   "I could come Friday morning,  about nine  a.m.  
                    It will take us about an hour."

                         "Fine," agreed Anne.  "I'll see you then."  As she 
                    hung   up  the  phone,   she  said  aloud  to  herself, 
                    "Encryption. That certainly sounds intriguing."

                                          * * * 

               A Little Background

                         On  Friday  morning Anne Lambert met  David  Lyons 
                    promptly  at nine a.m.  in her office.   Each  inquired 
                    politely how the other was doing and then they got down 
                    to business.

                         "I  had my secretary pick up a couple of books and 
                    articles on encryption at the university library," said 
                    Anne,  "and I've been reading something about it.   I'm 
                    afraid  I  don't  understand  it  all,  but  it  has  a 
                    fascinating history."

                         David sifted through the pile of literature on her 
                    desk.  There were titles like:


               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-3]









                      Codes,  Ciphers,  and  Computers, by Bruce  Bosworth, 
                      Hayden Publishing Co., 1982

                      "Privacy  and  Authentication:   An  Introduction  to 
                      Cryptography,"  by  Whitfield  Diffie and  Martin  E. 
                      Hellman, from the Proceedings of the IEEE, 1979.

                      The Codebreakers by David Kahn, Macmillan Co., 1967.

                    Most  were  classics  in the field  of  cryptology,  or 
                    modern articles about it.  The last one was a good non-
                    technical  introduction,  but it was too old  to  cover 
                    computer cryptography very well.

                         "For  the most part,  those are pretty technical," 
                    said David,  who was thinking Anne's secretary had  the 
                    rare aptitude of a good reference librarian.   "It's no 
                    wonder  they  were difficult to follow.   What did  you 
                    learn?"

                         "Well, that people have been using secret codes at 
                    least  since the Egyptian pharoahs.   Also,  that  some 
                    codes are easier to break than others.   There are  two 
                    coding  systems  that are used a lot  today,  the  Data 
                    Encryption  Standard and Public Key  Encryption.   They 
                    are considered fairly safe.   There are also other good 
                    systems.   Finally,  I  learned that encryption is  not 
                    just for espionage.   Government and business use it to 
                    protect   privacy,   and  to  ensure  the  security  of 
                    financial and other operations." 

                         "All quite accurate," agreed David.  "What do  you 
                    think about trying it out?"

                         "I'm  willing," replied Anne.   "At least I'd like 
                    to see it work."

                         "I have a program here called The Confidant," said 
                    David,   pulling   a  diskette  and  manual  from   his 
                    briefcase.   "You can use it to encrypt your files, and 
                    then  use  it  to decrypt them back to  their  original 
                    form."



               Copying the Master Diskette

                         "The  first thing we'll do," continued David,  "is 
                    make a copy of the master diskette,  for everyday  use.  
                    That  way,  if  something happens to the copy,  we  can 
                    always make another one.   If we don't make a copy, but 
                    use the master, any damage to the master puts us out of 
                    commission.   And damage can happen pretty  easily,  as 
                    someone who uses computers very much soon finds out."


               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-4]









                         "I  think  I've heard that  before.   What  causes 
                    damage to diskettes?" asked Anne.

                         "Getting  dust  or finger prints on the  diskette, 
                    bending  it,  or setting a heavy object on top  of  it.  
                    Sometimes  when  you  walk  across  a  carpet,   static 
                    electricity  will zap it.   Cigarette smoke getting  on 
                    the diskette is another danger.  There are lots of ways 
                    to destroy one."

                         "I  know how to make a copy," said Anne.   "First, 
                    you  take your DOS diskette and place it in  drive  A." 
                    She  opened  the  door of the drive  and  inserted  the 
                    diskette that contained the computer's operating system 
                    software.  "Then I place a new diskette in drive B."

                         David  handed her a brand new diskette from a  box 
                    on  her desk.   She slid it into the right-hand  drive, 
                    then closed both drive doors.  She typed

                                  FORMAT  B:/S  <RETURN>

                    and  watched  while  the  computer  formatted  the  new 
                    diskette and wrote a copy of the system software on it.  
                    At last the message

                                  Format Another (Y/N)?

                    appeared  on the screen.   She pressed <N> to  indicate 
                    she  was  finished.   She took the DOS diskette out  of 
                    drive A, and placed it in its sheath.

                         "Now   I   need  the  master  diskette   for   The 
                    Confidant,"  she  said,  taking  it  from  David.   She 
                    inserted  it in the A drive and closed the  door.   She 
                    typed:

                                COPY  A:*.*  B:  <RETURN>

                    The screen showed the message

                                       confide.exe
                                       confide.hlp
                                       confide.cry
                                       confide.inv
                                       refcard.doc
                                       tutorial.doc
                                       descript.doc
                                       refer.doc
                                       type.me
                                       9 file(s) copied

                    When  the  copying  process finished she  removed  both 
                    diskettes and put them in their envelopes.


               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-5]









                         Meanwhile David had written a label saying:

                                      The Confidant (tm)
                               Copyright 1983, 1984 by Data Sage
                                             Copy

                    which he gave to Anne.   She affixed it to the diskette 
                    and  also  placed a silver write-protect tab  over  the 
                    write-protect notch of the diskette.

                         "There,"  she  smiled,  placing the copy in the  A 
                    drive.  "Now I'm curious to see how it works."


               ------------------------------------------------------------
                                         DOING IT

                    Take  time  to  make  a copy  of  The  Confidant  on  a 
               formatted diskette, if you haven't already done so.  Be sure 
               to place the original copy in a safe place.

               ------------------------------------------------------------     


































               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-6]











               Using The Confidant

                         "Type   CONFIDE  and  press  the  <RETURN>   key," 
                    prompted David.

                         In  response to Anne Lambert's command the  screen 
                    of  the  computer  cleared  and  a  "shareware"  notice 
                    appeared.   As  she read the notice,  David  commented, 
                    "The  company that wrote The Confidant  distributes  it 
                    freely  and  asks anyone who uses it to contribute  ten 
                    dollars towards its support."

                         "That  certainly sounds fair," said  Anne.   "I'll 
                    see  to  it that we send the money  right  away."   She 
                    pressed the space bar and a form appeared.

                         David  pointed to the screen.   "The boxes on  the 
                    right  are  for telling the computer what you  want  to 
                    encrypt  or decrypt -- 'crypt' for short -- as well  as 
                    what  you  want  to do with the text once it  has  been 
                    processed.     There  is also a box for your  PASSWORD, 
                    which you make up.  As I mentioned before, the computer 
                    combines the password with your text to create a secret 
                    code."

                         "What  are  these  numbers at the  bottom  of  the 
                    screen?"  asked  Anne.   "I suppose they refer  to  the 
                    function keys on the keyboard."   David nodded.



               Getting HELP

                         Anne  smiled  a little self-consciously.   "If  at 
                    first   you   don't  know  what   to   do,   read   the 
                    instructions,"  she said.   "It looks like pressing the 
                    <F9> key will give me some help."  

                         She pressed the <F9> key. Another form appeared on 
                    the  screen.   This time,  it was a list of topics  for 
                    which help was available.  One by one, Anne pressed the 
                    function keys that gave access to the topics,  so  that 
                    after about five minutes she had read them all.

                         "That's  a  lot of stuff to keep in my head  after 
                    just  one  reading," she said.   "But let's  see  if  I 
                    understand what I should do next."

                         She  pressed  the <F10> key that took her back  to 
                    the main form.  The box meant for information about the 
                    SOURCE  of  the text was highlighted,  and  the  cursor 
                    rested in the box.   "I guess I tell it where the  text 


               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-7]








                    is  I  want  to encrypt," she said after  studying  the 
                    screen for a moment.



               ------------------------------------------------------------
                                         DOING IT

                    Load  The Confidant into your computer and start it  up 
               by  typing  CONFIDE <RETURN>.   Then read through  the  HELP 
               files by pressing the <F9> key.

               ------------------------------------------------------------     












































               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-8]









               The SOURCE

                         "Yes.   The  first  thing you must  decide,"  said 
                    David,  "is  what text you are going to  process.   The 
                    Confidant can encrypt text,  decrypt it,  and even just 
                    copy  it  from one file to another without  making  any 
                    changes in it.   You must tell it where to get the text 
                    from and where you want it to go to.  The SOURCE box is 
                    the from part."
                    
                         "I  can either type the text in from the keyboard, 
                    meaning the 'CONSOLE' as it says here, or else use text 
                    that already exists in a file," said Anne.

                         "Exactly,"  said David.   "Why don't you start  by 
                    entering  from  the keyboard.   That will  give  you  a 
                    better 'feel' for the way the program works.  Since the 
                    program  selects the CONSOLE by default,  you just have 
                    to  press the <RETURN> key to move to  the  DESTINATION 
                    field."


               The DESTINATION

                         When  Anne pressed the key,  the SOURCE box turned 
                    dark  and the DESTINATION box lit up.   "I  assume  the 
                    same idea holds for the DESTINATION," said Anne.

                         "Yes,"  said  David.   "Except that you have  more 
                    options.  You can send the text to a parallel or serial 
                    printer as well as to a file or the console."

                         "It doesn't make sense to print encrypted text  on 
                    the printer," said Anne.  "Who is going to read it?" 

                         "Exactly," replied David.  "The printer is usually 
                    chosen  as  DESTINATION  only when you  are  decrypting 
                    text." 

                         "I'd  like to try the program out a little,"  said 
                    Anne.   "If  I let the DESTINATION be the CONSOLE  too, 
                    will I be able to see what I am encrypting?"

                         "Yes," replied David.  "Ordinarily, you would want 
                    to save encrypted text in a disk file so you can get it 
                    back  again later.   Most often you use the console  as 
                    the destination when you want to look at decrypted text 
                    on  the screen.   But while you're getting used to  The 
                    Confidant it would be a good idea to see what encrypted 
                    text looks like.  An easy way to do that is by choosing 
                    the CONSOLE as the DESTINATION."

                         Anne  pressed the <RETURN> key,  and the  computer 
                    highlighted the PASSWORD box.   "You said the  password 


               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-9]








                    is  what makes the data secure," said Anne.   "But  you 
                    also  said that password protection systems are usually 
                    not secure,  at least on microcomputers.   I'm a little 
                    confused."

                         "What  we  normally  mean when  we  say  'password 
                    security  system' is that a user must enter a  password 
                    before  he  or she can use the computer,  or a  certain 
                    file  on the computer.   The data in the file  are  not 
                    changed.  The  problem is,  a list of passwords must be 
                    kept by the computer,  and very often that list is open 
                    to inspection by skilled programmers.   Even if someone 
                    can't  read the password list he can often  get  around 
                    the  software  that is responsible for  security.   But 
                    encryption changes the data in the file,  so that  even 
                    if  someone  can look at the file he  won't  understand 
                    what is in it."


               Choosing a PASSWORD

                         "How  do  I  decide what password to  use?"  asked 
                    Anne.

                         "You have to make it up," said David.   "But  some 
                    passwords are better than others."

                         Anne nodded for him to continue.

                         "Certain  passwords  are  obvious to  someone  who 
                    knows you very well.  They include names and birthdates 
                    of   family   members  or   close   friends,   personal 
                    characteristics or hobbies for which you are known, and 
                    license  plate  or social security  numbers.   A  smart 
                    person will try those first if he wants to decrypt your 
                    text."

                              "I probably shouldn't use 'rootbeer' or 'soda 
                    pop' then," said Anne, showing she understood.

                         "On  the  other hand," said David,  "the  password 
                    must be something you will remember.   Or else you must 
                    write  it down and keep it in a secure  place.  If  you 
                    forget your password,  you are in the same situation as 
                    anyone  else  who wants to decrypt your text -- out  of 
                    luck.   By the way,  the password doesn't have to be  a 
                    word;  it  can be a phrase,  or nonsense,  or a  random 
                    number.   But  you  should try to make it as  close  to 
                    sixteen  characters  long as you  can,  because  longer 
                    passwords are more secure."

                         Anne  pondered  a minute.   Then she typed in  the 
                    words:

                                      A PENNY SAVED


               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-10]








                         "Does  it  matter whether it is capital  or  lower 
                    case letters?" she asked.  David shook his head no.

                         "What if I enter more than sixteen characters into 
                    the PASSWORD box?" Anne persisted.

                         "Then   the  first  fifteen  characters  of   your 
                    password  will  be  the first  fifteen  characters  you 
                    entered,  and  the last character of your password will 
                    be the last character you entered," answered David.

               Hiding the PASSWORD

                         "Now here is a useful trick," he added.   "See the 
                    bottom of the screen, where it says:

                                         F6 Hide

                    Press the <F6> key and watch what happens."

                         As Anne pressed the key,  the SOURCE, DESTINATION, 
                    and PASSWORD fields suddenly went blank.  

                         "That key hides the password and file information, 
                    so  if someone else is looking over your shoulder  they 
                    cannot  discover  your password or the  files  you  are 
                    using.   You  can  even press the Hide key  before  you 
                    enter  your  password  or the  file  names.   Then  the 
                    characters you type won't appear on the screen, so that 
                    no one can see them as you enter them."

                         Anne   pressed  the  <F6>  key  again,   and   the 
                    information reappeared in the boxes.


               Starting Encryption

                         "Now,   how  do  I  get  it  to  actually  encrypt 
                    something?"   Anne asked.   "I gather from the list  of 
                    function  keys at the bottom of the screen that I  just 
                    press the <F1> key."

                         "That's right," David acknowledged.

                         Anne pressed the <F1> key.   The form she had just 
                    filled  out disappeared and a new one was displayed  on 
                    the  screen.    It  had  two  large  rectangular  boxes 
                    stretching across the screen.   The top box was labeled 
                    "Source" and the bottom one "Destination."

                         "Now, just start typing something," said David.

                         Anne typed:

                    Benjamin Franklin became frugal after his brother


               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-11]









                         The  text  appeared in the box  labeled  "Source."  
                    After the word "brother" she pressed the <RETURN>  key.  
                    In the "Destination" box little chunks of nonsense text 
                    started  to  appear.   "My goodness,  so that  is  what 
                    encrypted text looks like," she exclaimed.

                         When  the  encrypted text  stopped  appearing  she 
                    typed in the second line: 

                    made fun of him for spending money on a tin whistle.

                         Again,  when  she pressed <RETURN>,  the encrypted 
                    text appeared in the "Destination" box.

                         "I  think  I understand," Anne said.   "I type  my 
                    text  in  English.   The computer  transforms  it  into 
                    apparent nonsense and then prints it back out for me to 
                    read."

                         "That's right,"  said David.  

                         "What  does  it mean at the bottom of  the  screen 
                    when it says 'Block being processed: 14 of ???'?"

                         "The  computer encodes the data in chunks that are 
                    eight characters long," explained David.   "Each  chunk 
                    is  called a block.   The Confidant tells you how  many 
                    blocks  it  has processed so you will be aware  at  all 
                    times of the status of the encryption."

                         "To  stop,  I  just press the <F10> key,  is  that 
                    right?" said Anne.   She touched the key and a  message 
                    appeared at the bottom of the screen:  

                    The  Confidant  finished...Press any key to  return  to 
                    Main Menu.

                         Anne pressed the space bar,  and the familiar form 
                    where she entered her password returned.

















               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-12]








               ------------------------------------------------------------
                                         DOING IT

                    Make  up  some  text of your own and type it  into  The 
               Confidant so you can see how The Confidant works.   Start by 
               making  up a password -- Anne Lambert's  password,  A  PENNY 
               SAVED,  is useful if another one doesn't come to mind.  Then 
               press <F1> and type your text into the "Source" box. 

                    At the end of each line, remember to press the <RETURN> 
               key  and wait until the line is processed before you  resume 
               typing.   If  you want a sample of text to try out,  here is 
               one  about  passwords,   or  "keys,"  from  "Guidelines  for 
               Implementing  and Using the NBS Data  Encryption  Standard," 
               Federal  Information  Processing Standards  Publication  74, 
               available from the U.S. Government Printing Office.  


                                      KEY MANAGEMENT

                    Management  of  the cryptographic keys used to  protect 
               data is of utmost importance to the security of the data...
                    A  new  key should be generated and  used  when  any 
               event occurs that may have compromised the existing key.   A 
               new  key  should also be generated and used periodically  in 
               the event that an undetected compromise has occurred...
                    Unencrypted keys must always be physically protected 
               to  prevent unauthorized individuals from gaining  knowledge 
               of their values... 

               ------------------------------------------------------------     


























               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-13]











               Fixing Mistakes

                         "The   next  thing  is  to  try  a  file  as   the 
                    DESTINATION,"   recommended  David.    "Move   to   the 
                    DESTINATION box by pressing the <RETURN> key twice."

                         Anne did so.  "Now I just type the name of my file 
                    over the top of the word CONSOLE," she said.

                         "Right,"  agreed David.   "As you recall,  a  file 
                    description has three parts:  the drive, the file name, 
                    and the file extension."

                         "Yes,"  said Anne.   "The drive is a single letter 
                    followed  by a colon.   The file name is one  to  eight 
                    characters.   The extension is a period followed by one 
                    to  three  characters.   Only  I don't have to  use  an 
                    extension if I don't want to.   And I only have to type 
                    the drive name if I want to use a drive that is not the 
                    'default' drive."

                         She typed in:

                                          B:FIZLE.TXT

                         "Oh,"  she smiled.   "That should be FIZZLE.   Now 
                    you  can see why I would never make it as a  secretary.  
                    I can't type."

                         "A  perfect  opportunity to point out the  use  of 
                    some other keys on the keyboard," responded David.   "I 
                    suggest you move your cursor beneath the Z in FIZLE and 
                    then  press  the <INS> key on the  keyboard.   It  will 
                    switch  you  into  "insert  mode"  so  you  can  insert 
                    characters into the text.   All you need to do is  type 
                    in a second 'Z'."

                         "It  works," said Anne as she did  it.   "Also,  I 
                    noticed that the cursor changed size when I pressed the 
                    <INS> key."     

                         "To  let you know you are in insert  mode.   Press 
                    <INS> again to switch back into regular mode."

                         She did. "What other keys have special functions?" 
                    she asked.

                         "All  the keys do what the labels on them say they 
                    do," said David.   "The <DEL> key deletes the character 
                    at the cursor position, the <HOME> key takes you to the 
                    start of your text or your form, and so forth."



               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-14]









                         "Now  that I have the right file name,  I can  try 
                    encryption  again,"  said  Anne.   "I'll use  the  same 
                    password as before."  

                         She  pressed the <F1> key and the screen  changed.  
                    This  time there was only one rectangular box,  the one 
                    marked  "Source."  Anne typed in: 
                
                    Franklin won his way into American hearts <RETURN>
                    with his aphorisms in Poor Richard's Almanac. <RETURN>

                         When she pressed <RETURN> at the end of each line, 
                    no text appeared at the bottom of the screen.   But she 
                    knew  the program was working because it displayed  the 
                    block  number  it  was  processing.  When  the  numbers 
                    stopped incrementing, she pressed the <F10> key to end.  
                    Then she pressed it again to return to the main menu.

                         "How do I know it encrypted my text?" Anne  asked.  
                    "Can I see it?"


               "Flipping" SOURCE and DESTINATION

                         "Certainly,"  said David.   "First,  I'm going  to 
                    show  you  a nice little convenience called the  'Flip' 
                    key.   In order to see the file you just  created,  you 
                    would  normally have to type its name in the SOURCE box 
                    and the word CONSOLE in the DESTINATION box.   But  the 
                    flip  key  does  that for you,  by just  switching  the 
                    SOURCE and the DESTINATION around!"

                         He  reached in front of Anne and pressed the  <F5> 
                    key so she could see what he meant.   The words in  the 
                    SOURCE and DESTINATION boxes did change places.


               Copying

                         "Now," continued David, "press the Copy key, <F4>, 
                    to look at what is in your file.   The Copy key takes a 
                    copy of whatever is in the SOURCE  and puts it into the 
                    DESTINATION.   So it will take a copy of FIZZLE.TXT and 
                    show it on the console so you can see it."

                         The  screen cleared as Anne pressed the <F4>  key.  
                    The   familiar  screen  with  the   rectangular   boxes 
                    returned,  but with only the bottom box this time.   In 
                    that  box,  the same kind of nonsense appeared that she 
                    had seen before.   The line at the bottom of the screen 
                    showed  how  many blocks had  been  copied.   When  the 
                    program was finished, the prompt telling her how to get 
                    back  to  the main menu appeared,  so she  pressed  the 
                    space bar and was back at the first form.


               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-15]









                         "To get back my original text --" Anne began.

                         "By  the  way," David interrupted,  "the  original 
                    text  is called 'plain text' and the encrypted text  is 
                    called 'cipher text.'"

                         "To  get back my plain text," continued  Anne,  "I 
                    don't  have to change anything on the  screen  now.   I 
                    just  press  the  key marked DES Decipher and  it  will 
                    decipher it?"

                         "That's  right,"  agreed David,  watching  as  she 
                    pressed the <F2> key.

                         Again,  the bottom rectangular box appeared,  just 
                    as  when Anne used the copy function.   But this  time, 
                    the text was plain text.  No more nonsense.

                         When  she got back to the main menu  screen,  Anne 
                    pressed  the <RETURN> key to highlight the  DESTINATION 
                    box.   "This time, I'm going to decrypt the cipher text 
                    into  a file,  so I can edit it with my word-processing 
                    software," she declared.

                         She typed the file name:

                                         FLAT.TXT 

                    over the word CONSOLE, then pressed the <F2> key again, 
                    to decrypt the cipher text in FIZZLE.TXT.

                         When  the  decryption  finished,   she  left   The 
                    Confidant  by  pressing  the <F10> key  several  times.  
                    Then  she used her word-processing software to look  at 
                    FLAT.TXT.

                         Satisfied  that  the  text  looked  just  as   she 
                    expected,  she  typed  in  some  more  sentences  about 
                    Franklin.   She  saved  them  and exited  back  to  the 
                    operating system.

                         "Now,  I can encrypt this text," she said,  typing 
                    in the command CONFIDE and pressing the <RETURN> key.

                         "Yes,"  said David.   "Just remember that a  word-
                    processing  program  may  insert  some   non-alphabetic 
                    characters  into  your text file.   When The  Confidant 
                    decrypts an encrypted version of such a text file  onto 
                    your console,  the text may not look as it did when you 
                    typed it in.   To view it the way you typed it in,  you 
                    should  decrypt the text to a file,  then examine  that 
                    file using the same word-processing program you used to 
                    create the original file."



               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-16]








                         Anne  entered  the  file name  FLAT.TXT  into  the 
                    SOURCE box. She left the DESTINATION box as it was with 
                    the word CONSOLE, and used her old password again.




               ------------------------------------------------------------
                                         DOING IT

                    Practice  entering  encrypted text into  a  file,  then 
               "flipping"  the  SOURCE and DESTINATION and looking  at  it.  
               Look at it with both the COPY and the DECRYPT options.  

                    Here is some text to try: 

                    Active  wiretapping means that someone intercepts  your 
               message  while  you  are transmitting  it.   He  changes  it 
               quickly, then sends it on.  The receiver never suspects that 
               the  message  he receives from you is not the one you  sent.  
               Encryption helps make active wiretapping almost impossible.

               ------------------------------------------------------------     


































               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-17]










               Privacy

                              "Are  you  going  to  try  out  the   Privacy 
                    function?" David inquired.

                         "I  wanted to ask about that." said  Anne.   "What 
                    does it do, anyway?"

                         "Try it," suggested David.

                         She  pressed  the <F3> key.   The destination  box 
                    filled up rapidly with nonsensical cipher text.

                         "It looks the same as when I used the DES Encipher 
                    key," exclaimed Anne.  "Only it's considerably faster."

                         "Precisely," said David.  "Most people would never 
                    be  able  to tell that it was not produced by  the  DES 
                    algorithm,  which  is an extremely safe way of encoding 
                    data.  A trained cryptologist would be able to tell the 
                    difference,   after  several hours of  study.   And  he 
                    might  be able to break the Privacy code.   As far as I 
                    know, he would not be able to break the DES code."

                         "So this is not as safe," said Anne.

                         "No,"  said  David.   "But it is still very  safe.  
                    The vast majority of people will never figure out  what 
                    it produces.  It is useful for encoding data that don't 
                    have  to be kept extremely secret,  but that you  don't 
                    want  everyone  to see.   That is probably 98%  of  the 
                    stuff  you do.   So you save time by using the  PRIVACY 
                    code when you don't need the extreme protection offered 
                    by DES."




               ------------------------------------------------------------
                                         DOING IT

                    Try out PRIVACY.  Notice how much faster it is than the 
               DES   option.     An   extra   use   of   PRIVACY   is   for 
               superencipherment,  or encrypting your data twice, making it 
               extra hard to decode.  

                    Use  PRIVACY to encrypt a file you have Enciphered with 
               DES.   Then  decrypt  it,  using  first  Privacy,  then  DES 
               Decipher.   You  must  decrypt  in  the  REVERSE  order  you 
               encrypted, or decryption won't work.

               ------------------------------------------------------------     



               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-18]









               Directory and Erase SOURCE

                         "I  noted there are function keys for  'Directory' 
                    and  'Erase SOURCE'," said Anne.   "What do those  keys 
                    do?"

                         "As you probably guessed," said David,  "the  <F7> 
                    or Directory key lists the files you have,  in case you 
                    forget  the  name of a file or want to check  what  you 
                    have  done  so far.   It will find just the file  whose 
                    name  is  in the SOURCE box,  or if the SOURCE  box  is 
                    empty or has the word CONSOLE in it,  it will list  all 
                    the  files  on  the default disk.   The <F8>  or  Erase 
                    SOURCE  key erases the file whose name appears  in  the 
                    SOURCE box."

                         "That is pretty much what I assumed," Anne said.

                         "I should mention that both functions allow you to 
                    use  so-called  'wildcard'  characters,"  said   David.  
                    "That  means  if  you have several files  with  similar 
                    names,  you  can  refer to all of them  with  just  one 
                    name." 

                         "I  think I know about wildcards,"  replied  Anne.  
                    "If I have three files,  FIZZLE1, FIZZLE2, and FIZZLE3, 
                    and  I want to see a directory for all of them,  I type 
                    in 

                                         FIZZLE?

                    in the SOURCE box.   The question mark on the end tells 
                    the computer to find every file that starts with FIZZLE 
                    and has any other character in the position where I put 
                    the question mark.  Then I press the <F7> key."

                         "And an asterisk or 'star' can be used too," added 
                    David,   "to  mean  'all  the  positions  in  the  file 
                    description from here to the end.'  For example, if you 
                    want to erase all the files that start with 'FI' as the 
                    first  two letters,  and end with an extension of  TXT, 
                    you would type

                                         FI*.TXT

                    in the SOURCE box and press the <F8> key.



               Using The Confidant to Transmit Data Over the Telephone

                         "I think I understand,"  Anne said,  "Now,  I want 
                    to try --" 



               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-19]








                              At  that moment two heads poked  through  the 
                    doorway into Anne's office.  One was Barry Crocker, the  
                    director of the company's cafeteria,  who was cherished 
                    by everyone for his superb pastries.   The other was J. 
                    Atwood Powers, president of Icey Beverage Co.
                                                      
                              "Hey Doc!" Crocker hollered out to David. "It 
                    came to me the other day that Icey is really a software 
                    firm."
                                                 
                         The other three people in the room stared at  him, 
                    puzzled.               
                                                 
                         "Yeah,  you know,  our wares are soft drinks,  get 
                    it?    Soft  wares." He laughed  boisterously and waved 
                    his  hand  as he left the office,  leaving  the  others 
                    chuckling.

                         "I was hoping to see you," Powers addressed David.  
                    "Anne  told  me  you  were  bringing  some   encryption 
                    software.   Could  it  be  used to send data  over  the 
                    telephone?"

                         "What do you have in mind?" asked David.

                         "My  wife  and I are flying to  Finland  tomorrow, 
                    ostensibly for a vacation.   They have wonderful lakes, 
                    and their famous saunas, you know.  But the real reason 
                    for  the  visit is that our scouts  have  discovered  a 
                    recipe  for  a natural soft drink that the Finns  drink 
                    during their May Day celebrations.  I intend to test it 
                    out,  get  the recipe,  and bring it back to see if  we 
                    want to start bottling it."

                         "Where does encryption fit in?" asked David.

                         "You  know  how fierce the competition is  in  the 
                    soft  drink  bottling industry.   I'm sure  that  other 
                    companies  will be keeping an eye open to find  out  my 
                    plans  and  even  to obtain a copy of  the  formula  if 
                    possible."

                         "So  you  want to encrypt the formula in order  to 
                    make it incomprehensible to them," said David.

                         "Exactly."

                         "But you mentioned something about the telephone," 
                    said Anne.

                         "Laura  and  I  are going to  be  away  for  three 
                    weeks," said Powers.   "I thought it would speed things 
                    up  considerably  if I could send the recipe  over  the 
                    telephone.  I don't want to sound alarmist, but it is a 
                    well-known  fact that some companies will gladly  stoop 


               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-20]








                    to  a bit of industrial espionage if needed.   And just 
                    in  case,  I'd  rather  play  safe  with  something  as 
                    important as the formula for a new soft drink."

                         "I  don't see that it will create any  problem  at 
                    all,"  said  the  consultant.   "You can take  along  a 
                    portable computer that is compatible with the ones  you 
                    use here.  Add a modem to that, some communications and 
                    word-processing  software,  and  The Confidant and  you 
                    should have no fear."

                         "Can  you  arrange  the  necessary  equipment  and 
                    software?"

                         "Sure.    But   you'll  need  some  time  to   get 
                    acquainted with them.  When do you leave?" asked David.

                         "Not  until evening.   But I have a full schedule.  
                    The only time open is early morning.   Can you meet  me 
                    here at six a.m.?"

                         David groaned.  "And on a Saturday, too."

                         "I'll arrange for us to have breakfast while we're 
                    at it.   Can you be here too, Anne?  You're the obvious 
                    person to handle the transmission on this end."

                         "No  problem,"  she said.   "I'll do anything  for 
                    some of Barry's pastries."

                         "I'm  going  home for some sleep,"  kidded  David.  
                    "Even  if  it  is only ten in  the  morning  now,"   he 
                    laughed.  "See you in the morning," he said as he left.

                         Atwood Powers and Anne Lambert laughed too as they 
                    went back to their other work. 

                                          * * *


                         David  was  unloading a portable  computer  and  a 
                    second  copy  of The Confidant from his car  when  Anne 
                    Lambert drove up in the morning.

                         "Looks  like  Woody  is already here,"  she  said, 
                    pointing  to another car in the lot.   "Hope Barry  put 
                    together something nice for us."

                         Inside, they found Powers reading through the User 
                    Guide  for The Confidant,  and trying it out on  Anne's 
                    computer.  

                         "There's  really  nothing to this," he  said.   "A 
                    child  could do it once he understood the  basic  idea.  
                    How  about if we run through the procedure we will  use 


               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-21]








                    to  encrypt  and transfer the soft  drink  formula.   I 
                    don't want to leave it anything to chance."

                         "Good idea," agreed David.  "I think I'll have you 
                    set  up this computer and modem in your office,  Woody.  
                    Then  you  can  go through the steps  of  entering  the 
                    formula,  encrypting  it,  and sending it  from  there.  
                    Anne can receive it from here, and decrypt it."

                         In  his  office,  Powers plugged in  the  portable 
                    computer,  attached  the modem cables,  and switched it 
                    on.   Then he inserted his word-processing diskette  in 
                    the  A drive and a blank,  formatted diskette in the  B 
                    drive.

                         "I'll  just  type in a make-believe  formula,"  he 
                    said  to  David and Anne,  who had followed him to  his 
                    office.   In a few moments, he had created a reasonable 
                    looking formula.   "Maybe we should 'leak' this to  our 
                    competitors," he laughed.  "It probably tastes awful."

                         Powers  saved  the text on the diskette in his  B: 
                    drive.  "Alright," he said.  "To encrypt this, I remove 
                    my  word-processing  software and replace it  with  The 
                    Confidant, right?"

                         Both David and Anne nodded.

                         "Then I type:

                                         CONFIDE 

                    and press <RETURN>.  Now what?"

                         "Type   the  name  of  the  file  containing   the 
                    formula into the SOURCE box," said David.

                         Powers typed:

                                      B:FORMULA.TXT

                    and pressed <RETURN>.

                         "Choose a name for the DESTINATION," Anne prompted.

                        Powers typed in:

                                  B:FORMULA.CRY <RETURN>

                         "And then I make up a password," he said, pausing.  
                    "Uh, David, I hope you won't feel badly.  But the fewer 
                    people who know the password for the new  formula,  the 
                    better.   Will  you mind if I just show Anne.   You can 
                    stand behind the computer while I type it in."



               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-22]








                         David moved back.   Anne bent forward to view  the 
                    password  used  by  Powers.   When  she  was  sure  she 
                    remembered it, she nodded.  Powers pressed the <F6> key 
                    and the password disappeared.

                         "Alright David," he said.  "It's all clear now."

                         "I   can  tell  you  have  the  right  idea  about 
                    security,"  said David.   "The Confidant cannot  do  it 
                    all.  Protecting your password is the best bet."

                         Powers   pressed  the  <F1>  key  to  encrypt  his 
                    formula.   When  the job was finished,  he pressed  the 
                    <F5> key to "flip" the SOURCE and DESTINATION.  Then he 
                    pressed <F2> to look at the decrypted version.  Just to 
                    make sure, he finished up by pressing <F4> to look at a 
                    copy  of the encrypted file.   As he expected,  it  was 
                    nonsensical cipher text.

                         "Now," said Powers,  "the next step is to transmit 
                    it to Anne's computer.   Then she can decrypt it."   He 
                    removed  The  Confidant  from his  diskette  drive  and 
                    replaced  it with some file transfer and communications 
                    software  that  was capable of  sending  binary  files.  
                    "Anne, make sure your machine is ready to receive, will 
                    you?"

                         Anne left the room.  Powers lifted the receiver of 
                    his  phone and dialed her number.   "All set?" he asked 
                    when she answered.

                         "Okay," she replied.

                         Powers placed the receiver into his  modem.   Then 
                    he  used  the telecommunications software  to  transfer 
                    B:FORMULA.CRY to Anne's machine.

                         "All done," he said a few minutes later.   "Now we 
                    shall see how successful this was."

                         Atwood  Powers  and David Lyons marched into  Anne 
                    Lambert's  office.   She had already  disconnected  her 
                    modem and replaced the communications software with The 
                    Confidant.

                         As  she  typed in the name of the source file  and 
                    the password,  hidden by the <F6> key,  everyone waited 
                    expectantly.  

                         "Here we go," she said, pressing <F2> to decrypt.

                         A little shout of "Hurrah" went up from all  three 
                    watchers   as  The  Confidant  displayed  the   correct 
                    decrypted text on the screen.



               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-23]








                         "I  think  we are going to have a very  profitable 
                    vacation," said Powers.

                         "Hey  Doc,"  somebody said from behind  the  trio.  
                    "I'm in the software business too, you know."

                         Everyone turned to look at Barry Crocker.

                         "Yeah," he continued.   "My wares are very  soft."  
                    And he handed them a tray of fresh-baked pastries. 

                                          * * *



               ------------------------------------------------------------
                                         DOING IT

                    By  now,  you  should  be  ready  for  your  graduation 
               exercise.   Actually,  it's  a  graduation gift.   You  have 
               earned  a look at the secret formula that Atwood  and  Laura 
               Powers  discovered in Finland.   It is still in the original 
               form he sent back to Anne Lambert.  

                    Powers didn't take time to convert its measurements for 
               production  use by his company.   It is still  suitable  for 
               homemade  use.   So  if you want a head start on  Icey,  you 
               might make up a batch of your own.

                    If  you  have followed along  with  David  Lyons,  Anne 
               Lambert,  and Atwood Powers,  you should know how to decrypt 
               the formula.  We will simply tell you that the file is named 
               CONFIDE.CRY.  And the password is: FINNISH MAY DAY.

               ------------------------------------------------------------     






















               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-24]










                                  INDEX to the TUTORIAL



               A
               ASCII (code), 3

               B
               Block, 12, 15

               C
               Case, upper/lower in PASSWORD, 11
               Cipher text, 16
               Communications software to transmit encrypted text, 21, 23
               CONSOLE, 9
               Copying the SOURCE to the DESTINATION, 15
               Cryptology, 4
               Cursor, moving the, 14

               D
               Data Encryption Standard (DES) procedure, 4, 18
               Deciphering, using DES procedure from a file, 16
               Deleting text or characters, 14
               DESTINATION of cipher text in encryption, 9, 22
                    of plain text in decryption, 15ff
                    of copied text, 15
               Directory of existing files, 19
               Diskette, copying and care of, 4
               Disk drive, placing text on other than default, 14 
               Display (form), main, 7
                    encryption, 11,, 15

               E
               Enciphering using DES procedure, to the CONSOLE, 11
                    to a file, 14   
               Encryption, 3, 11
               Ending encryption, 12
               Erasing the SOURCE file, 19

               F
               File description, 14, 19
               Flipping the SOURCE and DESTINATION names, 15

               H
               HELP displays, 7
               Hiding the PASSWORD on the display, 11

               I
               Inserting text or characters, 14






               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-25]









               P
               Password, management, 13, 23
                    as used in encryption, 3, 7
               PASSWORD for The Confidant, 9, 10
               Password protection system, insecure, 2, 10
               Plain text, 16
               Privacy encryption procedure, 18
               Protection of information, 1

               S
               SOURCE of plain text for encryption, 9, 11, 22
                    of cipher text for decryption, 15ff
                    of copied text, 15
                    as specifier for Directory search, 19
               Starting encryption, 11

               T
               Transmission of encrypted information, 20f, 23

               W
               Wildcard characters in file descriptions, 19
               Word-processing software changes appearance of text, 16 


































               [The Confidant Tutorial (C) 1983, 1984 by Data Sage - page T-26]





```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0230

     Volume in drive A has no label
     Directory of A:\

    CONFIDE  CRY      1600   8-18-84  11:31a
    CONFIDE  EXE     35200   8-24-84   4:47p
    CONFIDE  HLP      7426   8-18-84  12:20p
    CONFIDE  INV      2432   8-24-84   5:20p
    CRC      TXT       982  11-16-84   7:10a
    CRCK4    COM      1536  10-21-82   7:54p
    DESCRIPT DOC     24091   8-21-84  11:34a
    REFCARD  DOC      4098   8-18-84   7:49a
    REFER    DOC     59903   8-18-84   7:48a
    TUTORIAL DOC     69139   8-21-84  10:51a
    TYPE     ME        882   8-18-84  12:19p
           11 file(s)     207289 bytes
                          109568 bytes free
