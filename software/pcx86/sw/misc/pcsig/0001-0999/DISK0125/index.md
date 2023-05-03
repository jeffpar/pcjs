---
layout: page
title: "PC-SIG Diskette Library (Disk #125)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0125/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0125"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "HOST-III PUBLIC BBS"

    The HOST-III communications package, while designed for private
    remote-to-host type file transfers, can be used as a public BBS.
    HOST-III automates the RECEIVE end of any file transfer, allowing
    unattended operation of the host.  HOSTCALL automates unattended file
    transfers for late-night, low-rate use.
    
    HOSTCALL can also initiate telephone calls to host computers (such as an
    IBM-PC running HOST-III) and exchange files based on the commands in
    what is called a Command File.  The host computer may or may not be an
    IBM-PC.  You create the Command File which contains the information
    HOSTCALL needs, such as the time to call a host system, the telephone
    number, and the names of the files to exchange.  A single COMMAND FILE
    can sequentially access a number of host computers.  Both programs
    support the XMODEM protocol of file transmission.
    
    While this is an older program and does not have some of the features of
    the more up-to-date models, is is also considerably less complicated to
    set up.
    
    Special Requirements:  Two disk drives and Hayes Smartmodem or
    equivalent.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $35.00
    
    File Descriptions:
    
    CS-NEW        Text file
    HOST-III DOC  Documentation for HOST-III
    HOST-III EXE  Program that receives telephone calls
    HOSTCALL BAT  Batch file that starts up HOSTCALX
    HOSTCALL DOC  Documentation for HOSTCALL
    HOSTCALX EXE  Program that initiates telephone calls...Part 1
    HOSTCL2X EXE  Program that initiates telephone calls...Part 2
    RACKET   BBS  Example of BBS SIG
    README        Information about HOST-III use & other programs available
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES125.TXT

{% raw %}
```
Disk No:  125
Program Title:  HOST-III PUBLIC BBS
PC-SIG version: 1.2

The HOST-III communications package, while designed for private
remote-to-host type file transfers, can be used as a public BBS.
HOST-III automates the RECEIVE end of any file transfer, allowing
unattended operation of the host.  HOSTCALL automates unattended file
transfers for late-night, low-rate use.

HOSTCALL can also initiate telephone calls to host computers (such as an
IBM-PC running HOST-III) and exchange files based on the commands in
what is called a Command File.  The host computer may or may not be an
IBM-PC.  You create the Command File which contains the information
HOSTCALL needs, such as the time to call a host system, the telephone
number, and the names of the files to exchange.  A single COMMAND FILE
can sequentially access a number of host computers.  Both programs
support the XMODEM protocol of file transmission.

Usage:  Communications.

Special Requirements:  Two disk drives and Hayes Smartmodem or
equivalent.

How to Start:  Type GO (press enter).

Suggested Registration:  $35.00

File Descriptions:

CS-NEW        Text file
HOST-III DOC  Documentation for HOST-III
HOST-III EXE  Program that receives telephone calls
HOSTCALL BAT  Batch file that starts up HOSTCALX
HOSTCALL DOC  Documentation for HOSTCALL
HOSTCALX EXE  Program that initiates telephone calls...Part 1
HOSTCL2X EXE  Program that initiates telephone calls...Part 2
RACKET   BBS  Example of BBS SIG
README        Information about HOST-III use & other programs available

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                    <<<<  Disk No 125 HOST III  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type HOST-III (press enter)                       ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## HOST-III.DOC

{% raw %}
```






















                               HOST-III

                              Version 1.1


       Unattended Telecommunications for the IBM Personal Computer
                  Requires a Hayes Smartmodem and 128K




























                   Copyright 1984 William HT Bailey
                         All Rights Reserved








      COMMERCIAL                  COMMERCIAL                  COMMERCIAL




                    --- REQUEST FOR CONTRIBUTION ---

If  you  are  using  this  program  and  find  it  to  be  of value then a $35
contribution is suggested.
                           William HT Bailey
                            P.O. Box 29723
                       Elkins Park, PA 19117-0923
                         CompuServe: 74145,1046


                     --- USER SUPPORTED CONCEPT ---

This  HOST-III / HOSTCALL software package is being distributed under the USER
SUPPORTED  concept.  That is you are granted permission to copy and share this
program  as  long  as  no  price is charged for the software or documentation.
Contributions,  although  completely voluntary, will compensate the Author for
his  effort  and will ensure further development. Anyone may request a copy of
this package by either
    1. Sending the Author a blank formatted double-sided diskette (or 2 single
       sided diskettes) along with a self-addressed postage-paid mailer
or
    2. Sending the Author $35 in which case the  diskette, mailer  and postage
       will be supplied.


                             --- DISCLAIMER ---

In  no  event  will the Author be liable to you for any damages, including any
lost  profits,  lost  savings  or  other  incidental  or consequential damages
arising  out  of  the  use  of or inability to use these programs, even if the
Author  has  been advised of the possibility of such damages, or for any claim
by any other party.

























      COMMERCIAL                  COMMERCIAL                  COMMERCIAL











                               HOST-III

                              Version 1.1


       Unattended Telecommunications for the IBM Personal Computer
                  Requires a Hayes Smartmodem and 128K









                               CONTENTS

                                                                         Page

   I. General Description ...............................................  1
  II. HOST-III Setup ....................................................  6
 III. HOST-III Signon ...................................................  9
  IV. User Commands ..................................................... 10
   V. System Operator Commands .......................................... 13
  VI. File Transmission ................................................. 15
 VII. File Reception .................................................... 17
VIII. HOST-III Signoff and Reset ........................................ 19






























                                   HOST-III


I. General Description

This section has two objectives. They are:
    1. To describe the uses of this program.
    2. To  provide  enough information so that you can start using the program
       immediately.
The  second  objective  is  possible, because the use of this program is quite
straight  forward.  You  will  find  the  details which will enable you to use
HOST-III to its fullest capability in the remaining sections.

If you and a friend have ever transferred files over the telephone lines using
manual communication packages, then you know that it involves a lot of message
typing  to  coordinate who is going to send what when and making sure that the
receiver  is ready. HOST-III takes care of that coordination at your end. Your
friend at the other end transfers the files at his own pace while you watch or
attend  to  some  other  business. You could also use this program to transfer
files to and from your computer while you are someplace else. These are just a
couple  of  examples  of  how  HOST-III can be used. In general it can be used
whenever  one  end of a communications link must be automated. However, if the
computer  at  the  other  end  is  running  HOSTCALL,  then  both  ends of the
communications link will be automated.

In  normal  operation, HOST-III assumes that the file it is transferring is an
ASCII  file.  However  ANY  type of file can be transferred if the user at the
other  end  invokes  the  XMODEM protocol of file transmission (and the user's
program supports this protocol). This protocol is invoked by appending a +X to
a filename specification. The XMODEM protocol is simply a sophisticated method
of transferring files.

HOST-III  asks   for  a  password  before  it  allows files to be transferred.
Initially the password is WORD.

The program recognizes 9 commands from the user at the other end. They are:
    A - List the files on drive A.
    B - List the files on drive B.
    C - List the files on drive C.
    D - List the files on drive D.
    G - Signoff (GOODBYE).
    M - Send message.
    R - Receive a file from the remote location.
    T - Transmit a file to the remote location.
    ? - Summarize the commands.

The  program  recognizes  4 commands from the system operator at its end. They
are:
    CTRL Prtsc - Printout on / Printout off (of intercomputer correspondence).
    ALT D      - Display files / View a file. (Inactive during a comm. link).
    ALT M      - Send message to remote location.
    ALT X      - Exit program.










                                      -1-



                                   HOST-III


Some other important notes concerning this program are:
    1. HOST-III requires the use of a Hayes Smartmodem and 128K memory.
    2. An  active communication  link is automatically closed, if 5 minutes of
       inactivity passes.
    3. If  a  file  that  is  that is being  received as an ASCII file already
       exists, then the received file is attached to the end of the old file.
    4. If  a  file  that  is being received  under the XMODEM protocol already
       exists, then the old file is first deleted.

After the simple setup procedure (described in detail in section II), HOST-III
is  ready to accept a telephone call. The 2 figures at the end of this section
contain examples of HOST-III sessions. Note that the numbers on the right side
of  these  figures  are not produced by the program. They are in these figures
for the sake of this discussion.

Figure  1 illustrates a session in which the user at the remote location sends
the  ASCII  file  PROG1.BAS  to HOST-III and requests the ASCII file PROG2.BAS
from HOST-III. The following is a line by line discussion of figure 1.
    Line  1. HOST-III asks  for the password and the user responds with WORD.
    Line  2. This is the program's message indicating a successful signon.
    Line  3. At the program's prompt (>), the user issues a ? command.
    Ln 5-14. HOST-III lists the summary of commands.
    Line 16. The user issues an R command.
    Line 17. HOST-III  requests  the  name  of  the file  the user is about to
             send.  The  drive  on  which the user wants the file to be stored
             may  be  part  of  the  specification.  The  user  responds  with
             B:PROG1.BAS.
    Line 19. After  the  program  opens the file it is about to receive, it is
             ready for the user to send it.

             The  file transfer occurs between lines 17 and 18. HOST-III lists
             the file on the screen as the file is being received.

    Line 20. At  the end of the file, HOST-III pauses for about 15 seconds and
             then  asks  the  user  to  confirm that  the end of file has been
             reached. The user responds with Y.
    Line 21. The  program closes the file it has just received and issues this
             message.
    Line 22. The user issues a T command.
    Line 23. HOST-III requests the name of the file the user wants it to send.
             The  drive  on  which  the  file  resides  may  be  part  of  the
             specification. The user responds with B:PROG2.BAS.
    Line 25. The  program  informs  the  user  that he has about 15 seconds to
             prepare his end to receive the file.
    Line 26. The  program  informs the user that he may abort the transmission
             by typing an X.

             The  file transfer occurs between lines 24 and 25. HOST-III lists
             the file on its screen as the file is being sent.

    Line 27. This  is  the end of file message. It is in the format of a BASIC
             remark statement, so that a transmitted BASIC program may be used
             without  having  to first edit it. (This message is not sent when
             HOST-III is operating with HOSTCALL).
    Line 28. Notice that HOST-III does not issue a prompt after transmitting a
             file.  However  it  still  ready  for  the next command. The user
             issues the signoff command.
    Line 29. The program responds with the signoff message.

                                      -2-



                                   HOST-III



Figure  2  illustrates  a  session  in  which  the user at the remote location
requests  that  the file PROG.COM be sent from HOST-III under XMODEM protocol.
The following is a line by line discussion of figure 2.
    Lns 1,2. Signon.
    Line  3. The user issues a T command.
    Line  4. HOST-III  requests  the  name  of the file. The user responds and
             appends to the end of the filename specification a +X, indicating
             that the program is to be sent under the XMODEM protocol.

             The file transfer occurs between lines 4 and 5. The program lists
             numerous  transmission  status  messages on the screen throughout
             the transfer.

    Lns 5,6. Signoff.












































                                      -3-



                                   HOST-III






PASSWORD? WORD                                                           --  1
*** ENTER ? FOR SUMMARY OF COMMANDS ***                                  --  2
>?                                                                       --  3
                                                                         --  4
      --- SUMMARY OF COMMANDS ---                                        --  5
A - LIST THE FILES ON DRIVE A                                            --  6
B - LIST THE FILES ON DRIVE B                                            --  7
C - LIST THE FILES ON DRIVE C                                            --  8
D - LIST THE FILES ON DRIVE D                                            --  9
G - SIGNOFF (GOODBYE)                                                    -- 10
M - SEND MESSAGE                                                         -- 11
R - RECEIVE A FILE FROM YOUR LOCATION                                    -- 12
T - TRANSMIT A FILE TO YOUR LOCATION                                     -- 13
? - PRINT THE SUMMARY OF COMMANDS                                        -- 14
                                                                         -- 15
>R                                                                       -- 16
NAME OF FILE: B:PROG1.BAS                                                -- 17
                                                                         -- 18
*** READY TO RECEIVE FILE ***                                            -- 19
                    .
                    .
                    .
RECEPTION SUSPENDED. END OF FILE? (Y/N) Y                                -- 20
*** RECEPTION TERMINATED ***                                             -- 21
>T                                                                       -- 22
NAME OF FILE: B:PROG2.BAS                                                -- 23
                                                                         -- 24
*** TRANSMISSION BEGINNING IN 15 SECONDS ***                             -- 25
    TYPE X TO ABORT TRANSMISSION                                         -- 26
                    .
                    .
                    .
65529 ' *** TRANSMISSION COMPLETE ***                                    -- 27
G                                                                        -- 28
*** GOODBYE ***                                                          -- 29








FIGURE 1. Sample HOST-III session.











                                      -4-



                                   HOST-III






PASSWORD? WORD                                                           --  1
*** ENTER ? FOR SUMMARY OF COMMANDS ***                                  --  2
>T                                                                       --  3
NAME OF FILE: A:PROG.COM+X                                               --  4
                    .
                    .
                    .
G                                                                        --  5
*** GOODBYE ***                                                          --  6








FIGURE 2. Sample HOST-III session using XMODEM.





































                                      -5-



                                   HOST-III


II. HOST-III Setup

This  section  describes  the  setup  procedure  that you must complete before
HOST-III  will  be  ready  to  receive  a  telephone call. The setup procedure
involves  getting  the  program  started  and  providing  information  on  the
following items:
    Password
    Communication parameters
    Screen width
Your  setup  will  be  saved  and presented to you the next time you start the
program. Therefore the full setup must be completed only on the first time you
run the program, and when you want to change the setup.




Connect and turn on your Hayes Smartmodem. Insure that the lights above the TR
and MR are lit.



The following are the 2 steps required to get HOST-III loaded and running:

    1 . Insert  a  disk containing the Disk Operating System into disk drive A
        (the drive on the left) and turn on the computer. Answer any questions
        the  computer may ask you (such as DATE and TIME) until you get to the
        point where the computer prompts you with

        A>

    2a. If the disk currently in drive A contains HOST-III then type

        HOST-III

        Press carriage return.

    2b. If  the  disk  does  not contain HOST-III  then  remove  the  disk and
        insert your disk containing HOST-III into drive A. Type

        HOST-III

        Press carriage return.

















                                      -6-



                                   HOST-III


HOST-III  begins  by  printing a heading, a copyright notice and the following
questions.


    Current password is WORD
    Is this OK? (Y,N):

A  user  of HOST-III must provide the current password before he/she is signed
on.  If  you  do not want to change the current password, then enter Y (or y).
If you  do  want  to change the current password, then enter N (or n).


    Enter new password:

If  you  responded  to the previous question with N, then the program will ask
for the new password. This new password of 8 characters or less will remain in
effect  for  this  and  all  future  uses  of HOST-III, until it is once again
changed. UPPER AND LOWER CASE LETTERS ARE NOT INTERCHANGABLE. For instance, if
you change the password to abcdef, then program will not sign on a user if he/
she  enters  ABCDEF  as the password. If you are using HOST-III with HOSTCALL,
then  changing  the  password will have no effect on operations since HOSTCALL
bypasses the password requirement.


    Do you want to lockout HOSTCALL? (Y,N):

Since HOSTCALL bypasses the password requirement, a person calling your system
using HOSTCALL could access your files despite a changed password. This option
permits  you  to  prevent access of your system by HOSTCALL. Enter Y (or y) if
you want to lockout HOSTCALL. ENTER N (OR n) IF YOU DESIRE COMMUNICATIONS WITH
HOSTCALL.


    Current communication parameters are:
         SPEED     300
         PARITY    E
         DATA BITS 7
         STOP BITS 1
    Are they OK? (Y,N):

If you do not want to change the communication parameters, the enter Y (or y),
and  the  program will skip the next 4 questions. If you do want to change the
communication  parameters,  then enter N (or n). If you do not understand this
question,  then  enter  Y (or y) since the default parameters will suffice for
most cases.


    SPEED (75,110,150,300,600,1200):

Enter   transmission   speed.  (This  question  is  skipped,  if  the  current
communication parameters are OK).


    PARITY (S,O,M,E,N):

Enter  parity  type.  (This  question is skipped, if the current communication
parameters are OK).


                                      -7-



                                   HOST-III



    DATA BITS (4,5,6,7,8):

Enter  the  number  of  data  bits.  (This question is skipped, if the current
communication parameters are OK).


    STOP BITS (1,2):

Enter  the  number  of  stop  bits.  (This question is skipped, if the current
communication parameters are OK).


    Choose screen width (40,80):

Choose  the  number  of  characters you want displayed across your screen. You
should choose 80 unless your display does not have the resolution to handle an
80 column screen.


At this point the program will clear the screen, display the message

    ********* HOST COMPUTER III program active *********

and turn on the light above the AA on the Smartmodem. HOST-III is now ready to
receive a telephone call.

































                                      -8-



                                   HOST-III


III. HOST-III Signon

This  section describes the signon procedure that a user calling into HOST-III
must complete before he/she will be allowed to transfer files.


When  a  user  dials HOST-III, the program answers the telephone and asks  the
user the question

    PASSWORD?

If an incorrect password is given, then the program says

    TRY AGAIN

If  the  correct  password is not given in 3 tries, then the program tells the
user

    *** GOODBYE ***

and signs off.


If the current password is received within 3 tries, then the program says

    *** ENTER ? FOR SUMMARY OF COMMANDS ***
    >

and signon is complete.






























                                      -9-



                                   HOST-III


IV. User Commands

This  section  describes  the  commands that a user can issue to HOST-III once
he/she is signed on.


HOST-III recognizes 9 single character commands from the user. THey are:

    A - List the files on drive A
    B - List the files on drive B
    C - List the files on drive C
    D - List the files on drive D
    G - Signoff (GOODBYE)
    M - Send Message
    R - Receive a file from the remote location
    T - Transmit a file to the remote location
    ? - Summarize the commands

The prompt

    >

indicates  that the program is ready to accept a command. All commands must be
terminated  with  a  carriage  return.  If HOST-III is expecting a command but
receives something longer than 1 character, then it issues the message

    SINGLE CHARACTER COMMANDS PLEASE




A description of how HOST-III responds to each command follows.


                                      A

The program responds with

    FILES A

and sends the file directory of the disk in drive A. Possible error conditions
such  as an open drive door or an empty drive will be detected and will result
in  the  program  issuing  a message  followed by its prompt. The program will
then wait for the next command.


                                      B

The program responds with

    FILES B

and sends the file directory of the disk in drive B. Possible error conditions
such  as an open drive door or an empty drive will be detected and will result
in  the  program  issuing  a message followed  by its prompt. The program will
then wait for the next command.



                                     -10-



                                   HOST-III


                                      C

The program responds with

    FILES C

and sends the file directory of the disk in drive C. Possible error conditions
such  as an open drive door or an empty drive will be detected and will result
in  the  program  issuing  a message  followed by its prompt. The program will
then wait for the next command.


                                      D

The program responds with

    FILES D

and sends the file directory of the disk in drive D. Possible error conditions
such  as an open drive door or an empty drive will be detected and will result
in  the  program  issuing  a message followed  by its prompt. The program will
then wait for the next command.


                                      G

This  is the signoff command. It must be issued before the user hangs up. Upon
receiving the signoff command, HOST-III issues a

    *** GOODBYE ***

and  resets  itself so that it may receive the next call. The user may hang up
after he/she receives the

    *** GOODBYE ***


                                      M

This command allows the user to send a one line message to the system operator
(the  operator  at  the computer which is running HOST-III). User messages are
received  and  printed  without  interpretation by the program. Upon receiving
this command, the program transmits

    ENTER 1 LINE MESSAGE

At the same time HOST-III beeps its buzzer and prints on its screen

    *** USER MESSAGE ***

At  this  point  the  user  may  enter  his/her message followed by a carriage
return.


                                      R

This command is described in section VII.


                                     -11-



                                   HOST-III



                                      T

This command is described in section VI.



                                      ?

This  command  results  in  the  printout  of the user's command options. Upon
receiving this command the program transmits

         --- SUMMARY OF COMMANDS ---
    A - LIST THE FILES ON DRIVE A
    B - LIST THE FILES ON DRIVE B
    C - LIST THE FILES ON DRIVE C
    D - LIST THE FILES ON DRIVE D
    G - SIGNOFF (GOODBYE)
    M - SEND MESSAGE
    R - RECEIVE A FILE FROM YOUR LOCATION
    T - TRANSMIT A FILE TO YOUR LOCATION
    ? - PRINT THE SUMMARY OF COMMANDS





































                                     -12-



                                   HOST-III


V. System Operator Commands

This  section  describes  the  options available to the person at the computer
which  is  running  HOST-III.  This person (which is you) is called the system
operator.


HOST-III recognizes 4 commands from the system operator. They are:

    CTRL Prtsc - Printout on / Printout off (of intercomputer correspondence).
    ALT D      - Display files / View a file. (Inactive during a comm. link).
    ALT M      - Send message to remote location.
    ALT X      - Exit program.

They  are activated by a double key depression. That is, the first key must be
pressed while the second key is hit, then both keys are released.


A description of how HOST-III responds to each command follows.


                                   CTRL Prtsc

This  command  allows you to turn on the printout if it is off, or to turn off
the  printout  if  it is on. With the printout on, all commands, responses and
messages  transferred  during  an active communications link are listed on the
printer  as well as the display. NOTE that printout is deactivated during file
transfer.  If  the  printout is off when this command is issued, then HOST-III
turns the printout on, beeps and responds with

    --- PRINTOUT ON ---

If  the  printout  is  on when this command is issued, then HOST-III turns the
printout off, beeps and responds with

    --- PRINTOUT OFF ---

At startup the printout is initially off.


                                    ALT D

This  command allows you to both display the file directories on disk drives A
B,  C  and  D  and  view  an  ASCII  file. Viewing a file means displaying the
contents  of  an  ASCII  file  on the screen. Upon receiving this command, the
program responds with

    Drive A, B, C, D, View a file or Return? (A,B,C,D,V,R):

If  you  enter an A, B, C or D, the program will display the file directory of
the corresponding disk drive.

If you enter a V, the program will respond with

    Name of file:




                                     -13-



                                   HOST-III


At this point you may enter the filename specification of the file you wish to
see.  HOST-III  will  display 18 lines of the file at a time and prompt you to
continue  by  pressing  the  space bar. You may abort the viewing of a file by
hitting the ESC key.

To  return  to the program's normal mode, you must enter an R when the program
asks  you to select an option.

NOTE  the program will ignore the ALT D command, if it is engaged in an active
communications link.


                                    ALT M

This  command  allows  you to send the user a one line message. Upon receiving
this command the program responds with

    *** SYSTEM OPERATOR MESSAGE ***

At  this  message you may enter a message followed by a carriage return, which
HOST-III will send to the user. NOTE the user will not receive the prompt

    >

after  a  system  operator message, because the program is still waiting for a
response  to  the prompt it issued just before the message. Therefore the user
can issue his/her next command immediately after receiving the message.


                                    ALT X

This command allows you to exit the program. HOST-III responds to this command
with

    --- EXIT ---

and terminates the program.






















                                     -14-



                                   HOST-III


VI. File Transmission

This  section  describes the protocol involved in transferring a file from the
HOST-III location to the user's location.


Upon receiving the command

    T

from the user, the program responds with

    NAME OF FILE:

HOST-III  is  asking  the  user  to give it the full name of the file the user
wants to be transmitted. For instance if the user wants the file PROG2.BAS and
it resides on drive B, then the user may respond with

    B:PROG2.BAS

followed  by  a carriage return. If HOST-III encounters an error such as "file
not  found" or "disk not ready", then the program will inform the user of this
and send him/her a prompt for the next command.

If there are no errors then HOST-III tells the user

    *** TRANSMISSION BEGINNING IN 15 SECONDS ***
        TYPE X TO ABORT TRANSMISSION

The  user  now  has 15 seconds to prepare his program to receive the file. The
user may abort transmission at any time by typing an X.

To denote the end of the file, HOST-III sends

    65529 ' *** TRANSMISSION COMPLETE ***

The  user may remove this trailing message with a text editor before using the
file.  A  prompt  is  NOT sent after file transmission. Therefore the user may
issue  his/her  next  command  immediately after the transmission is complete.
NOTE  that if the user is the program HOSTCALL, then a trailing message is not
attached  to  the  end  of  the file since the two programs have a protocol to
determine the end of a file.



If  the user's program supports the XMODEM protocol of file transmission, then
he/she  may  elect to have HOST-III send him/her the file under this protocol.
To  have  HOST-III  send  the  program  PROG.COM  from drive A, the user would
respond to the request

    NAME OF FILE:

with

    A:PROG.COM+X




                                     -15-



                                   HOST-III


As  shown,  the  user  invokes  the  XMODEM  protocol by appending a +X to the
filename  specification. During transmission HOST-III will display a number of
status  messages on the screen. At the end of the file, the program will issue
its prompt and wait for the next command.























































                                     -16-



                                   HOST-III


VII. File Reception

This  section  describes  the  protocol involved in transferring a file to the
HOST-III location from the user's location.


Upon receiving the command

    R

from the user, the program responds with

    NAME OF FILE:

HOST-III  is  asking  the  user  to give it the full name of the file the user
intends  to  send. For instance if the user intends to send the file PROG1.BAS
and he/she wants to store it on drive B, the user may respond with

    B:PROG1.BAS

followed  by  a  carriage return. If HOST-III encounters an error such as "bad
file name" or "disk write protected", then the program will inform the user of
this and send him/her a prompt for the next command.

If there are no errors then HOST-III tells the user

    *** READY TO RECEIVE FILE ***

The  program  will  wait  15  seconds  for  the  beginning of transmission. If
transmission has not begun within this time, the program transmits

    RECEPTION SUSPENDED. END OF FILE? (Y,N)

If  this happens, the user should just complete his procedure for transmitting
a  file.  NOTE  however  that  if  the  END  OF  FILE question is asked before
transmission  begins,  then  HOST-III  assumes  that  the  first  character it
receives  is the answer to its question. Therefore that first character is not
stored  as  part  of the received file. Moreover if the first character of the
transmitted  file  is  Y (or y), then reception is terminated. In short, it is
best for the user to initiate his transmission within 15 seconds.

At  the  end  of  transmission,  the  program  pauses for about 15 seconds and
transmits

    RECEPTION SUSPENDED. END OF FILE? (Y,N)

If the user responds with Y (or y) or if there is no response within 1 minute,
HOST-III terminates reception and tells the user

    *** RECEPTION TERMINATED ***









                                     -17-



                                   HOST-III


If  the user's program supports the XMODEM protocol of file transmission, then
he/she  may  elect  to  have HOST-III receive the file under this protocol. To
have  HOST-III  receive the program PROG.COM and store it on drive A, the user
would respond to the request

    NAME OF FILE:

with

    A:PROG.COM+X

As  shown,  the  user  invokes  the  XMODEM  protocol by appending a +X to the
filename  specification.  During  reception  HOST-III will display a number of
status  messages on the screen. At the end of the file, the program will issue
its prompt and wait for the next command.












































                                     -18-



                                   HOST-III


VIII. HOST-III Signoff

This section lists the conditions which will cause HOST-III to sign off.


When  HOST-III  is  dialed  and  it  initiates communications by answering the
telephone,  there  are 6 ways in which these communications can be terminated.
They are:

    1. Normal signoff command - G.
    2. Timeout after 5 minutes of inactivity.
    3. Incorrect password in 3 tries.
    4. Failing  to  detect  a  carrier  (such as when it is  called by a human
       instead of a computer).
    5. User hangup before correct password is issued.
    6. User hangup during active communications.

In all cases HOST-III will clear the screen, issue the message

    ********* HOST COMPUTER III program active *********

and wait for the next telephone call.





































                                     -19-




```
{% endraw %}

## HOSTCALL.DOC

{% raw %}
```





















                               HOSTCALL

                              Version 1.1


       Unattended Telecommunications for the IBM Personal Computer
                  Requires a Hayes Smartmodem and 128K




























                   Copyright 1984 William HT Bailey
                         All Rights Reserved









      COMMERCIAL                  COMMERCIAL                  COMMERCIAL



                    +++ REQUEST FOR CONTRIBUTION +++

If  you  are  using  this  program  and  find  it  to  be  of value then a $35
contribution is suggested.
                           William HT Bailey
                            P.O. Box 29723
                       Elkins Park, PA 19117-0923
                         Compuserve: 74145,1046


                     +++ USER SUPPORTED CONCEPT +++

This  HOST-III / HOSTCALL software package is being distributed under the USER
SUPPORTED  concept.  That is you are granted permission to copy and share this
program  as  long  as  no  price is charged for the software or documentation.
Contributiions,  although completely voluntary, will compensate the Author for
his  effort  and will ensure further development. Anyone may request a copy of
this package by either
    1. Sending the Author a blank formatted double-sided diskette (or 2 single
       sided diskettes) along with a self-addressed postage-paid mailer
or
    2. Sending the Author $35 in which case the  diskette, mailer  and postage
       will be supplied.


                             +++ DISCLAIMER +++

In  no  event  will the Author be liable to you for any damages, including any
lost  profits,  lost  savings  or  other  incidental  or consequential damages
arising  out  of  the  use  of or inability to use these programs, even if the
Author  has  been advised of the possibility of such damages, or for any claim
by any other party.


























      COMMERCIAL                  COMMERCIAL                  COMMERCIAL










                               HOSTCALL

                              Version 1.1


       Unattended Telecommunications for the IBM Personal Computer
                 Requires a Hayes Smartmodem and 128K









                               CONTENTS

                                                                         Page

   I. General Description ...............................................  1
  II. HOSTCALL Setup .................................................... 15
 III. Build Command File ................................................ 18
  IV. HOSTCALL Menu ..................................................... 26
   V. Review / Edit Command File ........................................ 28
  VI. Review Status File ................................................ 30
 VII. Idle Mode ......................................................... 31
VIII. Active Mode ....................................................... 32
  IX. Dialing ........................................................... 33
   X. Messages .......................................................... 34





























                                   HOSTCALL

I. General Description

This section has two objectives. They are:
    1. To describe the uses of this program.
    2. To  provide enough  information so that you can start using the program
       immediately.
The  second  objective  is  possible, because the use of this program is quite
straight  forward.  You  will  find  the  details which will enable you to use
HOSTCALL to its fullest capability in the remaining sections.

If  your  use  of host computer systems involves routinely putting data onto a
host system or pulling data off of a host system, then you are aware that this
involves  a  series of specific commands to the host system. With HOSTCALL you
can  put that series of commands, along with the telephone number and the time
to  call,  into  what is called a COMMAND FILE. HOSTCALL will then perform the
calling,  signon,  data transfer and signoff for you while you sleep or attend
to  some  other business. HOSTCALL also maintains what is called a STATUS FILE
which stores all the messages which are transferred between the two computers.
Therefore,  the  next morning or whenever you return to your computer, you can
review  exactly  what  correspondence  occurred  between  the  two  computers.
HOSTCALL  can  also be used in the situation where you are exchanging a number
of  files with a friend, if your friend is running HOST-III. In this situation
you  can  create a COMMAND FILE specifying a sequence of operations, and watch
HOSTCALL  operate with HOST-III for two-sided unattended telecommunications. A
small  business with plants at different locations can use HOSTCALL along with
HOST-III  to  transfer data files between plants at night. In general HOSTCALL
can be used to automate data transfers between host computer systems.

When  you  ask  HOSTCALL  to transfer a file, the program will normally assume
that  the  file is an ASCII file. However ANY type of file can be transferred,
if  you  ask  HOSTCALL  to transfer the file under the XMODEM protocol of file
transmission  (and  the  host  system supports this protocol). You can specify
this  protocol  by  appending  a  +X  to  a filename specification. The XMODEM
protocol is simply a sophisticated method of transferring files.

Once  you  have  created a COMMAND FILE, the program presents you a menu of of
options. These options are:
    Exit
    Review / Edit COMMAND FILE
    Review STATUS FILE
    Enter the mode of automatic operations
    Display the disk directories / View a file
    Enter the manual communications mode
The  exit  path from any option (except the EXIT option) is always back to the
menu.  Also, the program will allow you to exit to the menu at any time during
automatic  operations. In that case the program will pick up where it left off
upon re-entering automatic operations.

The  program  recognizes  3  operator  commands  once  it  has begun automatic
operations. They are:
    ALT M      - Send  a spontaneous  message to the HOST-III system operator.
                 (Meaning only during active communications with HOST-III).
    ALT U      - Exit to menu.
    CTRL Prtsc - Printout on / Printout off (of intercomputer correspondence).






                                      -1-



                                   HOSTCALL

Some other important notes concerning this program are:
    1. HOSTCALL requires the use of a Hayes Smartmodem and 128K memory.
    2. The STATUS FILE is created anew each time the program is run.
    3. The  program enters a 15 minute HOLD state when it dials a busy number.
       It  tries  the  number  one  more  time after leaving this state before
       moving  on.  You  can be override this state by exiting to the menu and
       then re-entering automatic operations. If you do this, the program will
       redial  the  number  immediately upon re-entering automatic operations.
       The 15 minute HOLD can also be overriden by pressing the ESC key.

    4. If  a file that is being received as an ASCII file already exists, then
       the received file is attached to the end of the old file.
    5. If  a  file  that  is  being received under the XMODEM protocol already
       exists, then the old file is first deleted.

After  the simple setup procedure (described in detail in section II), you may
either construct a new COMMAND FILE or recall an old one. The 6 figures at the
end  of this section illustrate the construction of 3 different COMMAND FILE's
and the contents of the resulting COMMAND FILE's.

Figure  1  illustrates  the  construction of a COMMAND FILE where the HOSTCALL
user wants to call HOST-III and transfer two ASCII files. He wants to transfer
PROG1.BAS  from  his  location to the remote location and he wants to transfer
PROG2.BAS  from  the remote location to his location. The numbers on the right
side  of  the  figure  are not produced by the program. They are there for the
sake  of this discussion. The following is a line by line discussion of figure
1.
    Line  1. HOSTCALL  asks  for  a time (based on the 24 hour clock) to  dial
             the host system. The user responds with the time which represents
             10:00 PM.
    Line  2. HOSTCALL  asks for a telephone number and  the user responds with
             2221111.
    Ls 4-11. HOSTCALL  displays the 7 single character commands available from
             the  primary  menu.  Commands  particular  to  communicating with
             HOST-III  are  entered  from  this  menu.  You would select the D
             command  from  this  menu,  if you wanted to communicate with any
             other host system.
    Line 13. The  program  requests  a  command.  The user responds with an R,
             meaning that he wants to transfer a file FROM his location TO the
             HOST-III location. Note that the R command is what HOST-III wants
             to see, if HOST-III is doing the receiving.
    Line 14. The program requests the name of the file. The user responds with
             PROG1.BAS.
    Line 15. The program requests the specification of the drive at the remote
             location  where  the  user  wants the file to be stored. The user
             responds with B.
    Line 16. The program requests the specification of the drive at the user's
             computer on which the file resides. The user responds with A.
    Line 17. The  program  requests  a  command.  The  user responds with a T,
             meaning that he wants to transfer a file TO his location FROM the
             HOST-III location. Note that the T command is what HOST-III wants
             to see, if HOST-III is doing the transmitting.
    Line 18. The program requests the name of the file. The user responds with
             PROG2.BAS.
    Line 19. The program requests the specification of the drive at the remote
             location on which the file resides. The user responds with B.




                                      -2-



                                   HOSTCALL

    Line 20. The program requests the specification of the drive at the user's
             computer  where  the  user  wants the file to be stored. The user
             responds with A.
    Line 21. The  program  requests  a command. The user responds with a / and
             HOSTCALL ends the construction of the COMMAND FILE.

Figure  2  illustrates  the  COMMAND  FILE  that results from the procedure in
figure  1.  The  numbers  on  the  left side of the figure are not part of the
COMMAND  FILE.  However they are produced by the program when the COMMAND FILE
is  reviewed,  so  that  the  COMMMAND  FILE can be edited by line number. The
following is a line by line discussion of figure 2.
    Line  1. HOSTCALL   recognizes   this   as   a   command   to  initiate  a
             communications  link  at a specific time. That time is on line 2.
             Note  that  all the commands in this file are in pairs. Note also
             that only the first character in the first part of a command pair
             is  significant. (For instance, HOSTCALL reads the C in CLOCK and
             ignores the rest of the word).
    Line  2. This is the time to initiate the communications link.
    Line  3. This  is  the first part of the command pair which gives HOSTCALL
             the  telephone  number to call. The D in DIAL id read by HOSTCALL
             and the rest of the word is ignored.
    Line  4. This is the telephone number to call.
    Line  5. HOSTCALL  transfers  the  R from this command to HOST-III telling
             HOST-III to receive a file.
    Line  6. This  line  contains  the information needed by both HOSTCALL and
             HOST-III  to  perform the transfer. Note that the remote computer
             drive  specification  begins  on column 15 and the local computer
             drive specification begins on column 17.
    Line  7. HOSTCALL  transfers  the  T from this command to HOST-III telling
             HOST-III to transmit a file.
    Line  8. This  line  contains  the information needed by both HOSTCALL and
             HOST-III  to  perform the transfer. Note that the remote computer
             drive  specification  begins  on column 15 and the local computer
             drive specification begins on column 17.

Figure  3  illustrates  the  construction of a COMMAND FILE where the HOSTCALL
user  wants  to  call  HOST-III and transfer the file PROG.COM from the remote
computer  using the XMODEM protocol of file transfer. The numbers on the right
side  of  the  figure  are not produced by the program. They are there for the
sake  of this discussion. The following is a line by line discussion of figure
3.
    Lns 1,2. The  time  and  telephone  number for the communications link are
             requested and input. The time represents 1:30AM.
    Ln 4-11. HOSTCALL displays the primary menu. In this example the user will
             enter  his  commands from this menu, since the commands from this
             menu are particular to communicating with HOST-III. HOSTCALL will
             take  care  of the signon, signoff and file transfer protocol, if
             commands to HOST-III are entered from this menu.
    Line 13. The  program  requests  a  command.  The  user responds with a T,
             meaning that he wants to transfer a file TO his location FROM the
             HOST-III location. Note that the T command is what HOST-III wants
             to see, if HOST-III is doing the transmitting.
    Line 14. The  program  requests  the name of the file. The user enters the
             filename  specification  and appends it with a +X indicating that
             the file is to be transferred under the XMODEM protocol.
    Line 15. The program requests the specification of the drive at the remote
             location on which the file resides. The user responds with A.



                                      -3-



                                   HOSTCALL

    Line 16. The program requests the specification of the drive at the user's
             computer  where  the  user  wants the file to be stored. The user
             responds with A.
    Line 17. The  program  requests  a command. The user responds with a / and
             HOSTCALL ends the construction of the COMMAND FILE.

Figure  4  illustrates  the  COMMAND  FILE  that results from the procedure in
figure  3.  The  numbers  on  the  left side of the figure are not part of the
COMMAND  FILE.  However they are produced by the program when the COMMAND FILE
is  reviewed,  so  that  the  COMMMAND  FILE can be edited by line number. The
following is a line by line discussion of figure 4.
    Lns 1,2. These are the command and time to call HOST-III.
    Lns 3,4. These are the command and telephone number for HOSTCALL to call.
    Line  5. HOSTCALL  transfers  the  T from this command to HOST-III telling
             HOST-III to transmit a file.
    Line  6. This  line  contains  the information needed by both HOSTCALL and
             HOST-III   to  perform  the  transfer.  Note  that  the  filename
             specification  is  appended with a +X indicating that the file is
             to  be  transferred under the XMODEM protocol. Note also that the
             remote  computer  drive specification begins on column 15 and the
             local computer drive specification begins on column 17.

Figure  5  illustrates the construction of a DIRECT COMMAND SEQUENCE. A DIRECT
COMMAND  SEQUENCE  is one that you construct, if you want to specify precisely
what  messages  HOSTCALL  is  going  to  send to the host computer system. The
feature of allowing you to specify an exact sequence of commands gives you the
ability  to automate  communications  with any host system. In this figure the
HOSTCALL  user  instructs  the program to call a computer running HOST-III and
perform  the  same functions as was instructed in figure 1. That is, the ASCII
file  PROG1.BAS  will  be  transferred  from  the local computer to the remote
computer,  and  the  ASCII  file  PROG2.BAS  will  be transferred to the local
computer  from  the remote computer Note that in this case, unlike the case in
figure  1,  the  user  must  be  concerned  with signon, signoff and the exact
structure  and  sequence  of  commands  to the host system. The numbers on the
right  side  of the figure are not produced by the program. They are there for
the  sake  of  this  discussion. The following is a line by line discussion of
figure 5.
    Lns 1,2. The  time  and  telephone  number for the communications link are
             requested and input. The time represents 3:00AM.
    Ln 4-11. HOSTCALL displays the primary menu.
    Line 13. The  program  requests  a  command.  The  user responds with a D,
             requesting  to  be  transferred  to  the  secondary  menu for the
             purpose of constructing a DIRECT COMMAND SEQUENCE.
    L 15-25. The  program reminds the user that a DIRECT COMMAND SEQUENCE must
             be  constructed  with  an intimate knowledge of the host system's
             protocol.
    Line 27. The  program  asks  the  user  if  he wants to continue with  the
             DIRECT COMMAND SEQUENCE. The user responds with a Y.
    L 29-38. The  program  displays the secondary menu. The first entry in the
             menu  represents  the  fact  that any command of 20 characters or
             less  can  be  inserted  into  a  DIRECT  COMMAND  SEQUENCE.  The
             remaining  entries  represent commands that control the operation
             of  HOSTCALL.  They  are  double lettered so that the program can
             distinguish  between  commands  to  itself and commands it should
             pass  on  to  the  host  system.  It assumes that double lettered
             commands  are  commands  to  itself.  Note  that you cannot end a
             COMMAND  FILE  from  the  secondary  menu. You must return to the
             primary menu to do that.
    Line 40. The program requests a command.

                                      -4-



                                   HOSTCALL

    Line 41. This  is  the  first  message  sent  to  the  host system, when a
             communications link is established. The user knows that the first
             piece of information he must provide HOST-III is the password.
    Line 42. The  program  is  giving  the  user  the  option  to  incorporate
             intelligent  processing  into  the  command sequence. If the user
             enters  a Y, then he/she would be given an opportunity to specify
             a  portion of the expected reponse. The user would then enter the
             number  of  commands  for the program to advance, if the expected
             response is not received. However in most instances the answer to
             this  question  would  be  an  N,  since  the primary use of this
             program   is  to  automate  communication  sequences  of  precise
             protocols. In this case the user responds with an N.
    Line 43. The program requests a command.
    Line 44. Since HOST-III does not echo commands back to the originator, the
             user  instructs  HOSTCALL  to  print all outgoing messages to the
             screen,  so that he can follow the activities if he is sitting at
             the console.
    Line 45. The program requests a command.
    Line 46. HOST-III  will  recognize  this  command  as  an  instruction for
             HOST-III to receive a file.
    Line 47. The user responds to this question with an N.
    Line 48. The program requests a command.
    Line 49. The  HOSTCALL  user  knows  that  after  HOST-III  receives the R
             command,  it requests the name of the file that it should receive
             and  the  drive  on  which  it  should  be stored. Therefore this
             command  is  the  information  the  user  knows that HOST-III has
             requested,  and  it  is  in  the  format that the user knows that
             HOST-III has requested it.
    Line 50. At  this  point  the  user  responds  to  option  to  incorporate
             intelligent processing into the command sequence with a Y. He/she
             does  this to cover the possibility that some abnormal condition,
             such  as  a  full  disk  at  the  remote  computer, could prevent
             HOST-III from receiving a file.
    Line 51. The  program  asks  for  the  response  that  the user expects to
             receive.  Only  a  portion  of  the  expected  response  need  be
             entered.
    Line 52. The  user  knows  that  if  there are no abnormal conditions then
             HOST-III will respond with
                  *** READY TO RECEIVE FILE ***
             Therefore  he/she  enters  just  enough  to  allow the program to
             determine if the expected response was received.
    Line 53. If  the expected response is not received, then the user can have
             HOSTCALL  advance  a  number  of  commands. In this case the user
             tells HOSTCALL to advance 2 commands, if the expected response is
             not received. This effectively skips the following command IN THE
             COMMAND FILE (see figure 6), which is to be a command telling the
             program  to  send  HOST-III  a file. (NOTE that the number 0 is a
             legal  entry. If 0 is entered, then the program would execute the
             current command a number of times. HOSTCALL would ask the user to
             specify the maximum number of times the current command should be
             executed before giving up.)
    Line 54. The program requests a command.
    Line 55. The  user  knows  that HOST-III is ready to receive a file, so he
             instructs HOSTCALL to export a file.
    Line 56. HOSTCALL  asks for the filename specification. The user  responds
             with PROG1.BAS.
    Line 57. THe user responds to this question with an A.
    Line 58. The  program  requests  the  next  command  to be processed after
             PROG1.BAS has been sent to HOST-III.

                                      -5-



                                   HOSTCALL

    Line 59. The user instructs HOSTCALL to prepare to import a file that will
             later be sent by HOST-III.
    Line 60. HOSTCALL asks for the filename  specification.  The user responds
             with PROG2.BAS.
    Line 61. THe user responds to this question with an A.
    Line 62. The program requests a command.
    Line 63. HOST-III  will  recognize  this  command  as  an  instruction for
             HOST-III to transmit a file.
    Line 64. The user responds to this question with an N.
    Line 65. The program requests a command.
    Line 66. The  HOSTCALL  user  knows  that  after  HOST-III  receives the T
             command,  it requests the name of the file it should transmit and
             the  drive  on  which  it  resides. Therefore this command is the
             information the user knows that HOST-III has requested, and it is
             in  the  format  that  the user knows that HOST-III has requested
             it.
    Line 67. The user responds to this question with an N.
    Line 68. The program requests a command.
    Line 69. The  user  knows  that HOST-III is about to transmit a file so he
             instructs HOSTCALL to import the file that was specified on lines
             59-61.
    Line 70. The  program  requests  the  next  command  to be processed after
             PROG2.BAS has been receives from HOST-III.
    Line 71. HOST-III will recognize this command as the signoff command.
    Line 72. The user responds to this question with an N.
    Line 73. The program requests a command.
    Line 74. The user instructs HOSTCALL to return to the primary menu.
    L 76-83. HOSTCALL displays the primary menu.
    Line 85. The  program  requests  a command. The user responds with a / and
             HOSTCALL ends the construction of the COMMAND FILE.

Figure  6  illustrates  the  COMMAND  FILE  that results from the procedure in
figure  5.  The  numbers  on  the  left side of the figure are not part of the
COMMAND  FILE.  However they are produced by the program when the COMMAND FILE
is  reviewed,  so  that  the  COMMMAND  FILE can be edited by line number. The
following is a line by line discussion of figure 6.
    Lns 1,2. These are the command and time to call the host system.
    Lns 3,4. These are the command and telephone number for HOSTCALL to call.
    Line  5. The dot indicates to HOSTCALL that the command is to be processed
             as  part of a DIRECT COMMAND SEQUENCE. This command is sent AS IS
             to  the  host  system.  It  represents the password that HOST-III
             wants to see upon signon.
    Line  6. This command instructs HOSTCALL to print all outgoing messages to
             the screen.
    Line  7. This  command  is sent directly to HOST-III. It tells HOST-III to
             prepare to receive a file.
    Line  8. This  command  is  sent  to  HOST-III  after  HOSTCALL receives a
             response  to  the  command in line 7. It provides the information
             about  the file that HOST-III is about to receive. Also contained
             on  this  line  are  a  portion  of  the  response that should be
             received  from  HOST-III  as  a  result  of this command, and the
             number  of  commands  to  advance if the expected response is not
             received.  Notice  that if the expected response is not received,
             then  the program would advance 2 commands to the command in line
             10.





                                      -6-



                                   HOSTCALL

    Line  9. This  command instructs HOSTCALL to export the file that HOST-III
             is  ready to  receive. For the sake of future editing, you should
             note  that  the drive specification and program name at the local
             computer starts on column 17.
    Line 10. This  command instructs HOSTCALL to prepare to import a file. For
             the  sake  of  future  editing,  you  should  note that the drive
             specification  and  program  name at the local computer starts on
             column 17.
    Line 11. This  command  is sent directly to HOST-III. It tells HOST-III to
             transmit a file.
    Line 12. This  command  is  sent  to  HOST-III  after  HOSTCALL receives a
             response  to  the command on line 11. It provides the information
             about the file that HOST-III is about to transmit.
    Line 13. This  command instructs HOSTCALL to import the file that HOST-III
             is about to transmit. The file was specified on line 10.
    Line 14. This  command  is  sent  directly  to HOST-III. It is the signoff
             command.











































                                      -7-



                                   HOSTCALL

Time for first communication (e.g. 18:30): 22:00                         --  1
Phone number: 2221111                                                    --  2
                                                                         --  3
+++ COMMAND FILE HELP MENU +++                                           --  4
(C)lock. Time to dial host system.                                       --  5
(R)eceivs FROM this location. (Transfer to HOST.)                        --  6
(T)ransmit TO this location. (Transfer from HOST.)                       --  7
(M)essage.                                                               --  8
(/). End COMMAND FILE.                                                   --  9
(H)elp. This menu.                                                       -- 10
(D)irect. Allows communication with any host system.                     -- 11
                                                                         -- 12
ENTER COMMAND (C,R,T,M,/,H,D): R                                         -- 13
Enter filename: PROG1.BAS                                                -- 14
Remote computer drive (A,B,C,D): B                                       -- 15
Local computer drive (A,B,C,D): A                                        -- 16
ENTER COMMAND (C,R,T,M,/,H,D): T                                         -- 17
Enter filename: PROG2.BAS                                                -- 18
Remote computer drive (A,B,C,D): B                                       -- 19
Local computer drive (A,B,C,D): A                                        -- 20
ENTER COMMAND (C,R,T,M,/,H,D): /                                         -- 21




FIGURE 1. Construction of sample COMMAND FILE.


































                                      -8-



                                   HOSTCALL

  1>CLOCK
  2>22:00:00
  3>DIAL
  4>2221111
  5>RECEIVE FROM THIS LOCATION
  6>PROG1.BAS     B:A:
  7>TRANSMIT TO THIS LOCATION
  8>PROG2.BAS     B:A:




FIGURE 2. Sample COMMAND FILE.















































                                      -9-



                                   HOSTCALL

Time for first communication (e.g. 18:30): 1:30                          --  1
Phone number: 2221111                                                    --  2
                                                                         --  3
+++ COMMAND FILE HELP MENU +++                                           --  4
(C)lock. Time to dial host system.                                       --  5
(R)eceive FROM this location. (Transfer to HOST.)                        --  6
(T)ransmit TO this location. (Transfer from HOST.)                       --  7
(M)essage.                                                               --  8
(/). End COMMAND FILE.                                                   --  9
(H)elp. This menu.                                                       -- 10
(D)irect. Allows communication with any host system.                     -- 11
                                                                         -- 12
ENTER COMMAND (C,R,T,M,/,H,D): T                                         -- 13
Enter filename: PROG.COM+X                                               -- 14
Remote computer drive (A,B,C,D): A                                       -- 15
Local computer drive (A,B,C,D): A                                        -- 16
ENTER COMMAND (C,R,T,M,/,H,D): /                                         -- 17




FIGURE 3. Construction of sample COMMAND FILE with XMODEM.






































                                     -10-



                                   HOSTCALL

  1>CLOCK
  2>1:30:00
  3>DIAL
  4>2221111
  5>TRANSMIT TO THIS LOCATION
  6>PROG.BAS+X    A:A:




FIGURE 4. Sample COMMAND FILE with XMODEM.

















































                                     -11-



                                   HOSTCALL

Time for first communication (e.g. 18:30): 3                             --  1
Phone number: 2221111                                                    --  2
                                                                         --  3
+++ COMMAND FILE HELP MENU +++                                           --  4
(C)lock. Time to dial host system.                                       --  5
(R)eceive FROM this location. (Transfer to HOST.)                        --  6
(T)ransmit TO this location. (Transfer from HOST.)                       --  7
(M)essage.                                                               --  8
(/). End COMMAND FILE.                                                   --  9
(H)elp. This menu.                                                       -- 10
(D)irect. Allows communication with any host system.                     -- 11
                                                                         -- 12
ENTER COMMAND (C,R,T,M,/,H,D): D                                         -- 13
                                                                         -- 14
+++ DIRECT COMMAND SEQUENCE +++                                          -- 15
                                                                         -- 16
Direct commands are transferred to the host system AS IS.                -- 17
Therefore direct commands may be used to communicate with                -- 18
any host system.                                                         -- 19
                                                                         -- 20
However unlike a HOST COMPUTER command sequence, a direct                -- 21
command sequence cannot detect warnings of abnormal                      -- 22
conditions from the host system. Therefore direct commands               -- 23
must be entered in the exact sequence required by the host               -- 24
system.                                                                  -- 25
                                                                         -- 26
Continue with DIRECT COMMAND SEQUENCE? (Y,N): Y                          -- 27
                                                                         -- 28
+++ DIRECT COMMAND HELP MENU +++                                         -- 29
__ - Any command recognized by host system. (20 chars or less.)          -- 30
CC - Send a Control C.                                                   -- 31
XX - Export a file to the host system.                                   -- 32
OO - Open a local storage file.                                          -- 33
II - Import a file. (A storage file must have been OPENED.)              -- 34
PP - Insert an 8 second pause into command sequence.                     -- 35
EE - Enable local echoing to screen of outgoing messages.                -- 36
RR - Return to the main menu.                                            -- 37
HH - Print this menu.                                                    -- 38
                                                                         -- 39
ENTER COMMAND (__,CC,XX,OO,II,PP,EE,RR,HH)                               -- 40
WORD                                                                     -- 41
Alter command sequence if expected response not received? (Y,N): N       -- 42
ENTER COMMAND (__,CC,XX,OO,II,PP,EE,RR,HH)                               -- 43
EE                                                                       -- 44
ENTER COMMAND (__,CC,XX,OO,II,PP,EE,RR,HH)                               -- 45
R                                                                        -- 46
Alter command sequence if expected response not received? (Y,N): N       -- 47
ENTER COMMAND (__,CC,XX,OO,II,PP,EE,RR,HH)                               -- 48
B:PROG1.BAS                                                              -- 49
Alter command sequence if expected response not received? (Y,N): Y       -- 50
Enter 10 characters (or less) of the expected response                   -- 51
RECEIVE                                                                  -- 52
Advance how many commands if not expected response?: 2                   -- 53







                                     -12-



                                   HOSTCALL

ENTER COMMAND (__,CC,XX,OO,II,PP,EE,RR,HH)                               -- 54
XX                                                                       -- 55
Name of file to be exported: PROG1.BAS                                   -- 56
File resides on which drive? (A,B,C,D): A                                -- 57
ENTER COMMAND (__,CC,XX,OO,II,PP,EE,RR,HH)                               -- 58
OO                                                                       -- 59
Name of file to be imported: PROG2.BAS                                   -- 60
Store file on which drive? (A,B,C,D): A                                  -- 61
ENTER COMMAND (__,CC,XX,OO,II,PP,EE,RR,HH)                               -- 62
T                                                                        -- 63
Alter command sequence if not expected response? (Y,N): N                -- 64
ENTER COMMAND (__,CC,XX,OO,II,PP,EE,RR,HH)                               -- 65
B:PROG2.BAS                                                              -- 66
Alter command sequence if not expected response? (Y,N): N                -- 67
ENTER COMMAND (__,CC,XX,OO,II,PP,EE,RR,HH)                               -- 68
II                                                                       -- 69
ENTER COMMAND (__,CC,XX,OO,II,PP,EE,RR,HH)                               -- 70
G                                                                        -- 71
Alter command sequence if not expected response? (Y,N): N                -- 72
ENTER COMMAND (__,CC,XX,OO,II,PP,EE,RR,HH)                               -- 73
RR                                                                       -- 74
                                                                         -- 75
+++ COMMAND FILE HELP MENU +++                                           -- 76
(C)lock. Time to dial host system.                                       -- 77
(R)eceive FROM this location. (Transfer to HOST.)                        -- 78
(T)ransmit TO this location. (Transfer from HOST.)                       -- 79
(M)essage.                                                               -- 80
(/). End COMMAND FILE.                                                   -- 81
(H)elp. This menu.                                                       -- 82
(D)irect. Allows communication with any host system.                     -- 83
                                                                         -- 84
ENTER COMMAND (C,R,T,M,/,H,D): /                                         -- 85




FIGURE 5. Construction of COMMAND FILE containing DIRECT COMMAND SEQUENCE.























                                     -13-



                                   HOSTCALL

  1>CLOCK
  2>3:00:00
  3>DIAL
  4>2221111
  5>.WORD
  6>.EE. ECHO ON / ECHO OFF.
  7>.R
  8>.B:PROG1.BAS         RECEIVE   2
  9>.XX             A:PROG1.BAS
 10>.OO             A:PROG2.BAS
 11>.T
 12>.B:PROG2.BAS
 13>.II. Import a file.
 14>.G




FIGURE 6. Sample DIRECT COMMAND SEQUENCE.









































                                     -14-



                                   HOSTCALL

II. HOSTCALL Setup

This  section  describes  the  setup  procedure  that you must complete before
HOSTCALL  will  be ready to accept your commands. The setup procedure involves
getting the program started and providing information on the following items:
    Current time
    Type of telephone line you have - rotary or touchtone
    Communication parameters
Your  type  of  telephone  line and communication parameters will be saved and
presented to you the next time you start the program. Therefore the full setup
must  be  completed  only  on the first time you run the program, and when you
want to change the setup.

NOTE  THAT HOSTCALL REQUIRES SOME SPACE ON ITS DISK FOR ITS WORK FILES. INSURE
THAT ITS DISK IS NOT FULL BEFORE RUNNING.



Connect and turn on your Hayes Smartmodem. Insure that the lights above the TR
and MR are lit.



The following are the 2 steps required to get HOSTCALL loaded and running:

    1 . Insert  a  disk containing the Disk Operating System into disk drive A
        (the drive on the left) and turn on the computer. Answer any questions
        the  computer may ask you (such as DATE and TIME) until you get to the
        point where the computer prompts you with

        A>

    2a. If the disk currently in drive A contains HOSTCALL then type

        HOSTCALL

        Press carriage return.

    2b. If  the  disk  does  not contain HOSTCALL  then  remove  the  disk and
        insert your disk containing HOSTCALL into drive A. Type

        HOSTCALL

        Press carriage return.
HOSTCALL  begins  by  printing a heading, a copyright notice and the following
questions.


    The current time is ________
    Is this correct? (Y,N):

The first line will contain what the program thinks is the current time. If it
is correct,  then  enter  Y (or y). If it is not correct then enter N (or n).







                                     -15-



                                   HOSTCALL

    Enter time (e.g. 18:30:00):

If  you  responded  to the previous question with N, then the program will ask
for  the  correct  time. Enter the time based on the 24 hour clock. The sample
time  in  the  parenthesis  represents  6:30PM. The program will not accept an
invalid input for time.


    OK to erase STATUS FILE from previous activity? (Y,N):

HOSTCALL checks for the existence of the STATUS FILE. IF IT IS NOT FOUND, THEN
THIS  QUESTION  IS SKIPPED. (Therefore this question will be skipped the first
time  you  run  the  program).  If it is found, then the program gives you the
opportunity to preserve this file if you wish to do so. If you enter N (or n),
then the program will request

    Enter a name for old STATUS FILE:

HOSTCALL  will rename the old STATUS FILE with the name you enter. THis allows
the  program  to  create  a  new STATUS FILE, using the name it normally uses,
without destroying the old one.

Alternatively,  if it is not necessary to preserve the previous STATUS FILE or
if you have already preserved it, then enter Y (or y).


    Rotary or Touchtone dialing? (R,T):

The  Smartmodem  must  know  if  your  telephone  line has rotary or touchtone
dialing. Enter R (or r) if it is rotary. Enter T (or t) if it is touchtone.


    Current communication parameters are:
         SPEED     300
         PARITY    E
         DATA BITS 7
         STOP BITS 1
    Are they OK? (Y,N):

If you do not want to change the communication parameters, the enter Y (or y),
and  the  program will skip the next 4 questions. If you do want to change the
communication  parameters,  then enter N (or n). If you do not understand this
question,  then  enter  Y (or y) since the default parameters will suffice for
most cases.


    SPEED (75,110,150,300,600,1200):

Enter   transmission   speed.  (This  question  is  skipped,  if  the  current
communication parameters are OK).


    PARITY (S,O,M,E,N):

Enter  parity  type.  (This  question is skipped, if the current communication
parameters are OK).




                                     -16-



                                   HOSTCALL

    DATA BITS (4,5,6,7,8):

Enter  the  number  of  data  bits.  (This question is skipped, if the current
communication parameters are OK).


    STOP BITS (1,2):

Enter  the  number  of  stop  bits.  (This question is skipped, if the current
communication parameters are OK).

At  this  point,  HOSTCALL  proceeds  to the BUILD COMMAND FILE portion of the
program.















































                                     -17-



                                   HOSTCALL

III. Build Command File

This  section  describes  the commands you can submit to HOSTCALL when you are
building  a COMMAND FILE. In this portion of the program, HOSTCALL accepts and
stores  the sequences of activities you want it to perform. The program allows
you to save and reuse a COMMAND FILE.

A particular COMMAND FILE can contain a number of command sequences. A command
sequence  is  a  series  of  commands  which results in HOSTCALL engaging in a
complete  communications  link  with  a  host computer from signon to signoff.
There are 2 types of command sequences. They are:
    HOST-III COMMAND SEQUENCE.
    DIRECT COMMAND SEQUENCE.
You  would  construct  a  HOST-III COMMAND SEQUENCE, when you want HOSTCALL to
communicate with HOST-III. You would construct a DIRECT COMMAND SEQUENCE, when
you want HOSTCALL to communicate with any other host computer system. HOSTCALL
knows the communication protocol of HOST-III, so your using a HOST-III COMMAND
SEQUENCE  to  communicate  with  HOST-III  releases  you  from  the  chore  of
formatting  the  outgoing  commands in the precise structure and sequence that
HOST-III  wants to see them. Instead HOSTCALL will interpret your commands and
perform  the  necessary formatting. On the other hand, if you communicate with
any  other  host  system  using  a DIRECT COMMAND SEQUENCE, then HOSTCALL will
output  your  commands  without,  interpretation, exactly as you entered them.
However,  the program gives you the option to specify an expected response for
each  command  in  a  DIRECT  COMMAND  SEQUENCE.  The  program  will advance a
specified  number  of commands, if the expected response is not received. This
gives you the ability to incorporate
    IF NOT...GOTO
constructs  into  your  DIRECT  COMMAND  SEQUENCE.  You can also have HOSTCALL
execute  a  certain  command  a  specified  number  of times until an expected
response is received, by instructing the program to advance 0 commands.

There  are  2  menus  associated  with  the  BUILD COMMAND FILE portion of the
program.  Selections  from  the primary menu allow you to construct a HOST-III
COMMAND  SEQUENCE.  Selections  from  the secondary menu allow you construct a
DIRECT COMMAND SEQUENCE.

There are 5 different commands associated with the primary menu. They are;
    C - CLOCK command.
    D - DIAL command.
    R - RECEIVE command.
    T - TRANSMIT command.
    M - MESSAGE command.
There are 7 different commands associated with the secondary menu.They are:
    __ - Any 20 character or less command recognized by host system.
    CC - CONTROL C command.
    XX - EXPORT command.
    OO - OPEN command.
    II - IMPORT command.
    PP - PAUSE command.
    EE - ECHO command.


A  DESCRIPTION  OF  EACH  COMMAND  FOLLOWS.  THE  5 COMMANDS ASSOCIATED WITH A
HOST-III COMMAND SEQUENCE ARE ADDRESSED FIRST. A DESCRIPTION OF THE 7 COMMANDS
ASSOCIATED WITH A DIRECT COMMAND SEQUENCE WILL FOLLOW.




                                     -18-



                                   HOSTCALL

                             C - CLOCK command

The CLOCK command both initiates a new sequence of commands and terminates the
preceeding  sequence  if there is one. It designates the time that HOSTCALL is
to  dial  a host system. When you issue a CLOCK command, the program  asks you
to enter the time you want it to telephone the host system. A CLOCK command is
always followed by a DIAL command.


                              D - DIAL command

The   DIAL  command  is  not  directly  selectable  by  the  operator.  It  is
automatically  selected  after a CLOCK command. It allows you to designate the
telephone number that HOSTCALL is to dial.


                            R - RECEIVE command

DO  NOT CONFUSE THIS COMMAND WITH THE TRANSMIT COMMAND. The RECEIVE command is
transmitted to HOST-III as a command for HOST-III to receive a file. Therefore
the result of this command is that a file is transferred FROM your location TO
the  remote  location. When you issue a RECEIVE command, the program  asks you
to  enter  a filename and the disk drive  designators for the remote and local
computers.


                            T - TRANSMIT command

DO  NOT CONFUSE THIS COMMAND WITH THE RECEIVE COMMAND. The TRANSMIT command is
transmitted  to  HOST-III  as  a  command  for  HOST-III  to  transmit a file.
Therefore  the  result  of  this command is that a file is transferred TO your
location  FROM  the  remote  location.  When you issue a TRANSMIT command, the
program  asks you to enter  a filename and the  disk drive designators for the
remote and local computers.


                            M - MESSAGE command

The MESSAGE command is used to transmit comments to HOST-III. Since the STATUS
file  stores  all  requests  and  responses  exchanged  between  HOSTCALL  and
HOST-III,  this command is useful for annotating the STATUS FILE. THis command
is  also  useful for reserving locations in the COMMAND FILE that later may be
edited to a RECEIVE or TRANSMIT command. The program will allow you to enter a
message of 35 characters or less when you issue a MESSAGE command.


THE PROCEEDING WERE DESCRIPTIONS OF THE 5 COMMANDS ASSOCIATED WITH A HOST-III
COMMAND SEQUENCE. DESCRIPTIONS OF THE 7 COMMANDS ASSOCIATED WITH A DIRECT
COMMAND SEQUENCE FOLLOW.


                   __ - Any command 20 characters or less

When  entering  commands  into a DIRECT COMMAND SEQUENCE, HOSTCALL will accept
any  command of 20 characters or less. This command will be passed directly to
the  host  system  and  therefore  should  be meaningful to the host system. A
command with zero characters IS meaningful. It is passed to the host system as
a  simple  carriage  return. You can specify what you expect the response from
the  host system will be. You can instruct HOSTCALL to either advance a number

                                     -19-



                                   HOSTCALL

of  commands  or  to  re-execute the current command a number of times, in the
event that the expected response is not received.


                           CC - CONTROL C command

The result of this command is that a CONTROL C character is transmitted to the
host system. Some host systems require this character before they start.


                            XX - EXPORT command

The  EXPORT command instructs HOSTCALL to transfer a file FROM its location TO
the  host  location.  When  you  issue  this  command, the program  asks for a
filename  and  the designation of the disk drive on which the file resides. If
the  filename  is  appended  with +X, the program will send the file under the
XMODEM protocol of file transmission.


                             OO - OPEN command

The  OPEN  command  instructs HOSTCALL to reserve an area on disk that will be
used to store a file that will later be transferred from the host system by an
IMPORT  command.  When  you  issue  an  OPEN  command, the program  asks for a
filename  and  the  designation  of  the  disk drive on which the file will be
stored. If the filename is appended with +X, the program will receive the file
under  the  XMODEM  protocol  of  file  transmission when an IMPORT command is
issued.


                            II - IMPORT command

The  IMPORT command instructs HOSTCALL to transfer a file TO its location FROM
the  host  location.  The file will be stored under the name opened in an OPEN
command.  IF YOU FORGET TO OPEN A FILE PRIOR TO ISSUING  AN IMPORT COMMAND AND
THE  FILE  IS  BEING  RECEIVED  AS AN ASCII FILE, THEN THE PROGRAM WILL EITHER
ATTEMPT  TO  STORE  THE FILE ON THE DEFAULT DRIVE UNDER THE NAME IMPORT.HCL OR
ATTEMPT TO STORE IT IN THE STATUS FILE.


                            PP - PAUSE command

The  PAUSE  command  instructs  HOSTCALL  to insert an 8 second pause into the
command sequence. You may find this command useful, if HOSTCALL must be slowed
down in order to wait for the host system. Multiple PAUSE commands will create
a longer pause.


                             EE - ECHO command

Some host computer systems echo your outgoing messages back to your screen and
some  do  not.  The ECHO command will allow you to handle either situation, if
you   plan  to  sit  at  the  console  and  monitor  the  activities  while  a
communications link is active. HOSTCALL assumes that the host system will echo
your  outgoing  messages to the screen. If the host system does not, then this
command  will  instruct HOSTCALL to print your outgoing commands to the screen
as  they  are  sent to the host system. The next issuance of this command will
instruct HOSTCALL to stop printing your outgoing messages to the screen.


                                     -20-



                                   HOSTCALL


THE  PROCEEDING  WERE  DESCRIPTIONS OF THE COMMANDS AVAILABLE TO YOU WHILE YOU
ARE  CONSTRUCTING  A  COMMAND  FILE.  THE FOLLOWING  ARE  DESCRIPTIONS  OF THE
PROCEDURES INVOLVED IN THE ACTUAL CONSTRUCTION OF THE FILE.

The BUILD COMMAND FILE portion of HOSTCALL begins by displaying the header

    +++ BUILD COMMAND FILE +++

It then asks you

    Build a New or use an Old COMMAND FILE? (N,O):

Enter  N  (or n), if you want to construct a new COMMAND FILE. Enter O (or o),
if you want to use one that has already been constructed. If you enter O, then
the  program  will display the file directory of the disk on the default drive
and request

    Name of old COMMAND FILE:

After  you enter the name of the old COMMAND FILE, the program will proceed to
the HOSTCALL MENU.


If  you  elect  to  construct  a new COMMAND FILE, then HOSTCALL will take you
through the following procedure.

    Time for first communication (e.g. 18:30):

Enter  a  time  based on the 24 hour clock. The sample time in the parenthesis
represents 6:30PM. The input is checked for validity.

    Phone number:

This  entry  is transferred directly to the Smartmodem at the designated time.
Therefore  any  type of input acceptable to the Smartmodem is acceptable here.
For instance both of these inputs are acceptable
    (404) 393-5678
    4048935678
HOSTCALL makes no validity checks on phone number entries.

After this initial information is input, HOSTCALL prints the following

    +++ COMMAND FILE HELP MENU +++
    (C)lock. Time to dial host system.
    (R)eceive FROM this location. (Transfer to HOST.)
    (T)ransmit TO this location. (Transfer from HOST.)
    (M)essage.
    (/). End COMMAND FILE.
    (H)elp. This menu.
    (D)irect. Allows communication with any host system.

    ENTER COMMAND (C,R,T,M,/,H,D):

This  is  the  menu which allows you to construct a HOST-III COMMAND SEQUENCE.
The following describes the procedure associated with each command.




                                     -21-



                                   HOSTCALL

                                      C

    Enter time:

Enter  a  time  based  on  the  24  hour  clock.  Time entries are checked for
validity.  This command terminates the previous command sequence, if there was
one, and initiates a new one.

    Enter telephone number:

The CLOCK command automatically generates a request for a telephone number.


                                      R

    Enter filename:

Do  not  enter  a drive designator at this point. Append +X to the filename to
the  filename  if  you  want to transfer the file under the XMODEM protocol of
file transmission.

    Remote computer drive (A,B,C,D):

Enter  the  remote  computer  drive on which the file you will be transmitting
will be stored.

    Local computer drive (A,B,C,D):

Enter  the  drive  on  your  computer  which  contains  the  file  you will be
transmitting.


                                      T

    Enter filename:

Do  not  enter  a drive designator at this point. Append +X to the filename to
the  filename  if  you  want to transfer the file under the XMODEM protocol of
file transmission.

    Remote computer drive (A,B,C,D):

Enter  the  remote  computer  drive  which  contains  the  file  you  will  be
receiving.

    Local computer drive (A,B,C,D):

Enter  the drive on your computer on which the file you will be receiving will
be stored.


                                      M

The program displays a field in which you may enter your message.






                                     -22-



                                   HOSTCALL

                                      /

This  command  terminates  the  BUILD  COMMAND  FILE process. The program will
proceed to the HOSTCALL MENU.


                                      H

This command displays the COMMAND FILE HELP MENU.


                                      D

This command transfers the program to the menu which allows you to construct a
DIRECT COMMAND SEQUENCE.



If  you  issue  a D command, HOSTCALL will display a message concerning DIRECT
COMMAND SEQUENCES and then ask you

    Continue with DIRECT COMMAND SEQUENCE? (Y,N):

If  you  enter  N  (or n), the program will return to the primary menu. If you
enter Y (or y), the program will proceed to secondary menu by displaying:

    +++ DIRECT COMMAND HELP MENU +++
    __ - Any command recognized by host system. (20 chars or less.)
    CC - Send a Control C.
    XX - Export a file to the host system.
    OO - Open a local storage file.
    II - Import a file. (A storage file must have been OPENED.)
    PP - Insert an 8 second pause into command sequence.
    EE - Enable local echoing to screen of outgoing messages.
    RR - Return to the main menu.
    HH - Print this menu.

    ENTER COMMAND (__,CC,XX,OO,II,PP,EE,RR,HH)

A  description  of  the  procedure  associated  with  each  of  these commands
follows.


                                      __

HOSTCALL  will  register  a command to be sent to the host system and continue
with

    Alter command sequence if expected response not received? (Y,N):

If  you enter an N, the program will proceed to the next command. If you enter
a Y, the program will request

    Enter 10 characters (or less) of the expected response:






                                     -23-



                                   HOSTCALL

Enter a portion of the response you expect from the host system. HOSTCALL will
then ask

    Advance how many commands if not expected response?:

Enter the number of commands you want the program to advance in the event that
the  expected  response  is  not received. If you enter 0, indicating that you
want HOSTCALL to retry the current command, then the program will ask

    Maximum number of times to execute this command?:

Enter  the  maximum  number of times you want the program to issue the current
command looking for the expected response, before it stops trying and proceeds
to the next command.


                                      CC

HOSTCALL will simply register the CONTROL C command.


                                      XX

    Name of file to be exported:

Do  not  enter a drive designator at this point. Append +X to the filename, if
you want to transfer the file under the XMODEM protocol of file transmission.

    File resides on which drive? (A,B):

Enter  the  drive  on  your  computer  which  contains  the  file  you will be
exporting.


                                      OO

    Name of file to be imported:

Do  not  enter a drive designator at this point. Append +X to the filename, if
you want to transfer the file under the XMODEM protocol of file transmission.

    Store file on which drive? (A,B):

Enter  the drive on your computer on which the file you will be receiving will
be stored.


                                      II

HOSTCALL will simply register the IMPORT command.


                                      PP

HOSTCALL will simply register the PAUSE command.





                                     -24-



                                   HOSTCALL

                                      EE

HOSTCALL will simply register the ECHO command.


                                      RR

This  command  transfers the program back to the main menu. From there you can
either initiate another COMMAND SEQUENCE or end the COMMAND FILE.


                                      HH

This command displays the DIRECT COMMAND HELP MENU.



Upon ending the construction of a COMMAND FILE, HOSTCALL asks

    Save this COMMAND FILE? (Y,N):

If  you  enter N (or n), the program will proceed to the HOSTCALL MENU. If you
enter Y (or y), the program will request

    Name for this COMMAND FILE:

Enter  a  name by which you will refer to this COMMAND FILE when you reuse it.
The program will proceed to the HOSTCALL MENU.



You have just completed section III whose intent was to provide instruction on
constructing  COMMAND  FILE's.  After  reviewing  this  section along with the
examples  in  section  I, and with some practice, you will develop facility in
constructing  COMMAND  FILE's.  Before  you  attempt to construct a particular
DIRECT  COMMAND  SEQUENCE,  it  would be wise to first run through the desired
sequence  with a manual communications program to gain assurance that you know
the host system's protocol.






















                                     -25-



                                   HOSTCALL

IV. HOSTCALL Menu

This section describes the facilities available to you, once a COMMAND FILE is
established.  Along  with  the  option which transfers HOSTCALL to the mode in
which  it performs automated telecommunications, there are a number of options
which give you extreme flexibility in controlling and monitoring the operation
of the program.


Upon entering this menu, HOSTCALL displays

    +++ HOSTCALL MENU +++

        0. EXIT
        1. REVIEW / EDIT COMMAND FILE
        2. REVIEW STATUS FILE
        3. ENTER COMMAND MODE
        4. DISPLAY FILES / VIEW A FILE
        5. MANUAL COMMUNICATIONS

           Enter selection:

and waits for you to enter a number. The menu also generates a time display at
the  bottom  of the screen. The following describes the options available from
the menu.


                          REVIEW / EDIT COMMAND FILE

This option is described in section V.


                              REVIEW STATUS FILE

This option is described in section VI.


                              ENTER COMMAND MODE

This  option  transfers  HOSTCALL  to the portions which interpret the COMMAND
FILE and perform the designated activities.

There  are two states associated with the COMMAND MODE. They are the IDLE MODE
and  the  ACTIVE  MODE.  HOSTCALL resides in the IDLE MODE until it is time to
initiate  a  communications  link. HOSTCALL operates in the ACTIVE MODE during
active communications.

You  can  return to the menu from the COMMAND MODE with an ALT U. That is, you
must  depress  the  ALT  key  while simultaneously hitting the U key, and then
release both keys.

HOSTCALL  exits  from  the COMMAND MODE to the menu when it reaches the end of
the  COMMAND FILE. If you enter the COMMAND MODE after the program has reached
the  end  of  the  COMMAND FILE, then HOSTCALL will immmediately return to the
menu.





                                     -26-



                                   HOSTCALL

                           DISPLAY FILES / VIEW A FILE

This command allows you to both display the file directories on disk drives A,
B,  C,  and  D,  and  view  an ASCII file. Viewing a file means displaying the
contents  of  an  ASCII  file  on the screen. Upon receiving this command, the
program responds with

    Drive A, B, C, D, View a file or Return? (A,B,,C,D,V,R):

If  you enter an A, B, C, or D, the program will display the file directory of
the corresponding disk drive.

If you enter a V, the program will respond with

    Name of file:

At this point you may enter the filename specification of the file you wish to
see.  HOSTCALL  will  display 18 lines of the file at a time and prompt you to
continue  by  pressing  the  space bar. You may abort the viewing of a file by
hitting the ESC key.

To  return  to  the  menu,  you  must enter an R when the program asks  you to
select an option.


                           MANUAL COMMUNICATIONS

This  option  allows you to operate your computer as a dumb terminal. You will
find  this  option  useful,  when  you  are  developing  a  new DIRECT COMMAND
SEQUENCE.  From this option you can practice the sequence of commands you want
to  automate. Also you can escape to this option to regain control of the host
computer, if a new DIRECT COMMAND SEQUENCE you are monitoring goes astray.

Since  some  host  computer  systems  echo your outgoing commands back to your
screen  and  some  do not, this option contains a function which allows you to
handle both situations. By entering an ALT E, you can alternately activate and
deactivate HOSTCALL's instruction to print outgoing commands to the screen. An
ALT E is entered by depressing the ALT key while simultaneously hitting the E,
and then releasing both keys.

You  can  return  to  the  menu  by  entering an ALT U. An ALT U is entered by
depressing  the ALT key while simultaneously hitting the U, and then releasing
both keys.


                                     EXIT

Upon selecting this option, the program prints

    +++ COMMAND FILE WILL BE DEACTIVATED +++
    EXIT? (Y,N):

HOSTCALL  is  letting you know that its place in the COMMAND FILE is lost upon
leaving  the  program. If the program has not completed processing the COMMAND
FILE,  you  may want it to do so before you exit. Entering Y (or y) terminates
the program. Entering N (or n) transfers the program back to the menu.




                                     -27-



                                   HOSTCALL

V. Review / Edit Command File

This  section  provides  the  details  associated with reviewing and editing a
COMMAND  FILE.  It  is  good  practice  to review a COMMAND FILE you have just
created  to  ensure  you  have  not made any errors. If you are reusing an old
COMMAND  FILE,  then  you  may  want  to  update  the time that HOSTCALL is to
telephone  the host system. After you become sophisticated, you may want to do
editing based on what has transpired in the course of an active communications
link.


This function is invoked from the HOSTCALL MENU. When invoked, the program
does the following. It displays the header

    +++ REVIEW / EDIT COMMAND FILE +++

then  generates  a time display and then prints the first sequence of commands
in the COMMAND FILE. (A sequence of commands is a series commands which begins
with  a  CLOCK command and ends at the next CLOCK command or at the terminator
of  the COMMAND FILE. It represents the activity in a communications link from
the initial dialing to the terminating hangup.)

After displaying a sequence of commands, the program prints

    Line number to edit (0=CONTINUE,ESC=EXIT):

If you enter a line number in the current sequence, HOSTCALL will ask you

    Change, Insert pair or Delete pair? (C,I,D):

If  you  enter  a C (or c), the program will display an input field which will
allow you to overwrite the current entry on the selected line.

Insertions  and  deletions of commands must be done in pairs, because HOSTCALL
processes  the  commands  in groups of two. Therefore insertions and deletions
are  allowed  only  at odd numbered commands and apply to that command and the
following command. Note that since the first two pairs of commands must remain
a CLOCK command pair and a DIAL command pair, insertions and deletions are not
allowed at these commands.

Entering an I (or i) in response to the prompt

    Change, Insert pair or Delete pair? (C,I,D):

results  in a pair of dummy commands being inserted BEFORE the current pair at
the selected line number. These dummy commands may then be overwritten. If you
elect to insert at the last pair the program will ask you

    Insert Before or After? (B,A):

thereby giving you the option to insert before or after the last pair.

Entering a D (or d) in response to the prompt

    Change, Insert pair or Delete pair? (C,I,D):

results in the deletion of the selcted command pair.



                                     -28-



                                   HOSTCALL

After the selected line has been edited, the current sequence of commands will
be redisplayed followed by

    Line number to edit (0=CONTINUE,ESC=EXIT):

Entering a 0 (followed by a carriage return) will display the next sequence of
commands.  The program returns to the menu when the COMMAND FILE terminator is
reached. You may abort the review of the COMMAND FILE by hitting the ESC key.

Note  that a DIRECT COMMAND SEQUENCE may contain a line of 3 dots. These lines
are  just fillers, and they are ignored by the program. However, you can enter
a  line  beginning with 3 dots when you are building a COMMAND FILE, which you
can later edit into a meaningful command.

Edited  input  is  not  checked  for  validity.  This  means that there are no
restrictions  on  editing. However it is important to exercise extreme care to
ensure  that you do not introduce invalid entries. Invalid entries are divided
into 4 categories. They are
    Invalid command
    Invalid time entry
    Invalid telephone number
    Invalid filename
Entries from the first two categories are intercepted by HOSTCALL while in the
COMMAND  MODE.  Depending upon where one occurs, HOSTCALL will take one of the
following 3 actions.
    Bypass the command
    Bypass the remainder of the command sequence
    Deactivate the entire command file
Telephone  numbers are interpreted by the Smartmodem. An invalid number may or
may  not  cause  the  Smartmodem  to  generate  an error, but in either case a
communications  link  is  not  made  and  the  entire  sequence of commands is
bypassed.  Filenames  are  interpreted by the Disk Operating System. If either
HOSTCALL or HOST-III (if you are communicating with HOST-III) encounters a bad
filename, then HOSTCALL bypasses the associated command.

NOTE THAT EDITING IS NOT ALLOWED IF HOSTCALL IS IN THE 15 MINUTE TIME DELAY TO
REDIAL A BUSY NUMBER. (See section IX).























                                     -29-



                                   HOSTCALL

VI. Review Status File

This  section  provides the details associated with reviewing the STATUS FILE.
The  STATUS  FILE  will  contain a copy of all the correspondence which occurs
between  HOSTCALL  and  the host system. Therefore you will want to review the
STATUS  FILE  after  communications have taken place. If you are communicating
with  HOST-III, then this file will also contain the drive A and B directories
of the remote computer.


This function is invoked from the HOSTCALL MENU. When invoked, HOSTCALL does
the following. It displays the header

    +++ REVIEW STATUS FILE +++

then  prints  a  screen  of  the STATUS FILE and then prompts you to press the
space  bar  to  continue.  Each  depression of the space bar displays the next
screen of the STATUS FILE. The program returns to the menu, if you depress the
ESC key or when the end of file is reached.

You  can  distinguish  between  HOSTCALL  error  messages  and  HOST-III error
messages  (if  you  are  communicating  with  HOST-III)  by  the highlighting.
HOSTCALL  error  messages will be highlighted by plus signs and HOST-III error
messages  will be highlighted by dashes. For instance a HOSTCALL error message
is
    +++ FILE NOT FOUND +++
and a HOST-III error message is
    --- FILE NOT FOUND ---
































                                     -30-



                                   HOSTCALL

VII. Idle Mode

While  HOSTCALL  is  in  the state of automatic operation known as the COMMAND
MODE,  it  will  be  either  in the IDLE MODE or the ACTIVE MODE. This section
describes  HOSTCALL's  activities  and  the options available to you while the
program is in the IDLE MODE.


The  program  resides  in the IDLE MODE when it is waiting to make a telephone
call. Upon entering the IDLE MODE, HOSTCALL prints the header

    +++ IDLE MODE +++

and  generates a time display at the bottom of the screen.

If  the  next command in the COMMAND FILE is a CLOCK command, then the program
will display

    Next activity at ________

indicating  the time at which the next communications link will begin. It will
wait until that time is reached and then transfer to the ACTIVE MODE.

If, upon entering the IDLE MODE, the next command in the COMMAND FILE is not a
CLOCK command, then HOSTCALL will transfer directly to the ACTIVE MODE.

If,  upon  entering the IDLE MODE, HOSTCALL has already reached the end of the
COMMAND FILE, then the program will return immediately to the menu.

The current time is printed to the STATUS FILE at 10 minute intervals.

You  can  alternately  activate  and deactivate the printer with a CTRL Prtsc.
That  is, you must depress the CTRL key while simultaneously hitting the Prtsc
key,  and  then release both keys. When active, then printer will printout the
information being stored on the STATUS FILE.

You  can  return to the HOSTCALL MENU with an ALT U. That is, you must depress
the ALT key while simultaneously hitting the U, and then release both keys.






















                                     -31-



                                   HOSTCALL

VIII. Active Mode

While  HOSTCALL  is  in  the state of automatic operation known as the COMMAND
MODE,  it  will  be  either  in the IDLE MODE or the ACTIVE MODE. This section
describes  HOSTCALL's  activities  and  the options available to you while the
program is in the ACTIVE MODE.


The   program   is   in  the  ACTIVE  MODE,  when  it  is  engaged  in  active
communications. Upon entering the ACTIVE MODE, HOSTCALL prints the header

    +++ ACTIVE MODE +++

and  generates  a  time  display at the bottom of the screen. All requests and
responses  exchanged between HOSTCALL and the host computer are printed to the
screen and the STATUS FILE, while the program is in the ACTIVE MODE.

HOSTCALL  recognizes 3 keyboard commands, while it is in the ACTIVE MODE. They
are
    ALT M      - Take and transmit a message  from  the  keyboard.  (Available
                 only when operating with HOST-III).
    ALT U      - Transfer to the HOSTCALL MENU.
    CTRL Prtsc - Print intercomputer correspondence on printer.
You  can  select  one by depressing the first key while simultaneously hitting
the second key, and then releasing both keys.

Another  special  key  is  the  ESC key. Whenever the program is in a state of
delay, such as when it is waiting for a response from the host system, the ESC
key  will  force  it  out of the delay. If you want to return to the menu upon
breaking  out  of a delay state, then you should enter an ALT U instead of the
ESC key.

Commands from the COMMAND FILE are processed until a CLOCK command or the file
terminator is encountered. If a CLOCK command is encountered, the program will
close  the  communications  link  and  transfer  to the IDLE MODE. If the file
terminator  is encountered, the program will close the communications link and
transfer to the HOSTCALL MENU.























                                     -32-



                                   HOSTCALL

IX. Dialing

This section provides information concerning the program's process of making a
telephone call.


The  DIAL command instructs HOSTCALL to initiate a communications link. If the
host  computer  answers  the  telephone, then a link will be made and HOSTCALL
will  proceed  to  the  next  command.  However,  if  for some reason the host
computer  does  not answer the telephone (such as when the line is busy), then
HOSTCALL will delay activities and redial after waiting 15 minutes.

You can override the 15 minute redial delay in two ways. One is by hitting the
ESC  key.  The  other  is  by  transferring  to  the  HOSTCALL  MENU  and then
transferring back to the COMMAND MODE. The program will immediately redial the
number.  You  can  elect to review the COMMAND FILE while you are in the menu.
However  editing  will  not  be  allowed,  if  HOSTCALL is waiting to redial a
number.

The  program  will  bypass the entire sequence of commands, if a connection is
not made after redialing.

All of these activities will be recorded in the STATUS FILE.





































                                     -33-



                                   HOSTCALL

X. Messages

This  section  provides  information concerning the exchange of messages while
communicating with HOST-III.


There are 3 categories of messages. They are:
    Message entered into the COMMAND FILE
    Spontaneous message initiated by the HOSTCALL operator
    Spontanoeus message initiated by the HOST-III operator
Messages  entered  into  the  COMMAND  FILE  as  it  is  being constructed are
transferred  during normal activity as they are encountered. The procedure for
entering this type of message is described in section III. 


If  you  want  to  send  the  HOST-III  operator a spontaneous message while a
communications link is active, then enter ALT M. That is, you must depress the
ALT  key  while simultaneously hitting the M, and then release both keys. When
HOSTCALL finishes processing the current command, it will prompt you with

    +++ PROCEED WITH MESSAGE +++

At this point you may key in your message to the HOST-III operator.


If the HOST-III operator has sent you a message, then HOSTCALL will prompt you
with

    +++ ENTER ALT-M TO RESPOND TO MESSAGE +++

and  wait  one minute for you to so. If you do not respond to the prompt, then
the  program will resume processing the COMMAND FILE. If you do want to answer
the  message,  then you must first respond to the prompt by depressing the ALT
key  while  simultaneously  hitting  the M, and then releasing both keys. When
HOSTCALL receives the ALT M, it will prompt you with

    +++ PROCEED WITH MESSAGE +++

At this point you may key in your response to the HOST-III operator.
                                                                                    




















                                     -34-


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0125

     Volume in drive A has no label
     Directory of A:\

    HOST-III DOC     32512   5-28-85   9:39a
    HOSTCALL DOC     78631  12-27-83   5:47p
    HOST-III EXE     52864   5-28-85   9:32a
    HOSTCALX EXE     44032  12-25-83   3:30a
    HOSTCL2X EXE     63104  12-25-83   3:35a
    HOSTCALL BAT        11  12-27-83   9:51p
    CS-NEW           10331   1-15-84  10:19p
    RACKET   BBS     14431   1-15-84  10:07p
    README            4224   1-15-84  10:25p
    FILES125 TXT      1707   1-24-89   3:43p
    GO       BAT        38   1-11-89   1:55p
    GO       TXT       540   1-24-89   3:43p
    MANUAL   BAT       147   1-24-89   3:43p
           13 file(s)     302572 bytes
                           12288 bytes free
