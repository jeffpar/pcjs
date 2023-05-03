---
layout: page
title: "PC-SIG Diskette Library (Disk #752)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0752/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0752"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE BRAIN"

    With your modem and telecommunications program, you call up the local
    and national bulletin board systems to download files and pick up your
    mail.  But sometimes the lines are busy and you won't have time to call
    later.  Don't worry.  Have THE BRAIN make those calls for you.
    
    THE BRAIN is a telecommunications program that accesses your favorite
    BBS or on-line service when you're not there.  Upload and download
    files, leave messages, and generally perform any routine tasks you
    don't want to take the time to do yourself.  THE BRAIN can also call a
    BBS when it is easier to get on-line, such as late at night or during
    the day while you're at work.
    
    Suitable for the intermediate to expert user, the documentation
    assumes that you are familiar with DOS, have a text editor and know how
    to use it, and know how to program your modem.  The manual has a
    glossary of commands (with detailed descriptions and brief examples of
    each) and a sample command file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BRAIN.DOC

{% raw %}
```

                                The Brain
                               Version 3.0
                      Created in 1986 by Chris Jenks

  In return for a $15 contribution I will send you a disk containing  the 
latest  compiled  version  of  The Brain,  the Basic source code in ASCII 
format,  the documentation,  and a list of variables used  in  Brain  and 
their  descriptions.  The source code has many comments and the variables 
are easy to recognize.  To run the  source  code  you  will  need  BASICA 
version A2.00. My address is:



                           Chris Jenks
                           1324 Bobwhite Avenue
                           Sunnyvale, CA. 94087



  This program was designed to do work on a bulletin board which is  busy 
without needing to be present.  However,  there are many applications for 
which  this  program  could  be  used,   such  as   electronic  mail,  or 
transferring files, at any time of day or night.
  Before you use The Brain,  you must create a file called COMMAND.DAT in 
an  editor  and save it on the default drive.  This file will contain the 
instructions which tell The Brain what to do. This program can hold up to 
500  commands.  When The Brain is run,  it reads this file and makes sure 
everything will work (Checks syntax,  makes  sure  files  to  upload  are 
available,  etc.),  and  then  it  executes  the commands.  Later in this 
documentation is a list of all the commands The Brain can use, as well as 
their descriptions and some examples.
  Except in the Message and Send commands,  spaces are completely ignored 
by the compiler, and so is the case of the command. However, each command 
must be on its own line. There need not be commands on comment lines.
  The  function  keys  can  be  used to put the keyboard on line with the 
modem, to skip the next command in the command file,  to edit the command 
file,  or  to terminate the program prematurely and return to DOS.  While 
editing the command file you can cause The Brain to jump to another point 
in  the  command  file,  you can save the revised command file (under the 
name COMMAND.DAT), or you can restart The Brain program.  These functions 
are displayed at the bottom of the screen.
  After  each  command  below  are  the parameters.  A parameter given in 
brackets ([]) is mandatory,  and if it is omitted,  an error will  result 
when  the command file is checked for errors.  A parameter in braces ({}) 
is optional. If it is not specified, a default will be used.  The default 
is given in parenthesis () next to the parameter. After the command is an 
explanation of it,  and sometimes there are three examples of how it  can 
be used.

  The commands are:

*

  Is  used  before  a  remark.  It  can be put on a blank line of after a 
command other than MESSAGE or SEND.

  For example:
    * This is a remark.
      Will be completely ignored by the compiler. It won't even be 
      counted as a line unless it is on the same line as a command.
    DOWNLOAD HIDEFILE.BAS * Download a utility program.
      Will download the file as if the comment weren't there.
    SEND 5, Yes        * This answers the question `Lower case?'
      Will send  the line " Yes        * This answers the question `Lower
      case?'" to the remote computer and might mess  things  up.  If  you
      need  to have a comment for a send line,  put the comment before or
      after the line.

SCREEN ON

  Starts sending the data received over  the  modem  to  the  screen.  It
continues to do this until the SCREEN OFF command is received.

SCREEN OFF

  Clears the screen and stops sending data received over the modem to it.

MESSAGE {TEXT ()}{;()}

  Prints the text on the screen,  but does not send it over the modem  or 
to the dump file.  If a semicolon is appended to the text,  the text will 
be printed without a carriage return on the end. If no text is specified, 
a blank line will be produced.

  For example:
    MESSAGE Now dialing computer system...
      Would print " Now dialing computer system..." on the screen, 
      followed by a carriage return. Notice the leading space. All spaces 
      and tabs leading the text in the command are left in when the  text 
      is printed.
    MESSAGESemicolon;;
    MESSAGE
      Would print "Semicolon;" on the  screen,  followed  by  a  carriage 
      return (from the second message command).
    MESSAGE...hit F2 and type your password...;
      Would print "...hit F2 and type your password..." on the screen 
      without a carriage return.

WAIT UNTIL [hour]:{minutes (00)}:{seconds (00)}{AM/PM (AM)}

  Waits  until the specified time until going on to the next instruction. 
Make sure your computer's clock is set right.  The time you  specify  for 
this command can be in just about any format you like.  You don't have to 
use the colon to separate the hours,  minutes,  and seconds.  You can use 
any  non-numeric  character (except the space),  and military time can be 
used.  To prevent text from being burnt into the screen, use a SCREEN OFF 
command before the WAIT UNTIL command to clear the screen. After the WAIT 
UNTIL command you can turn the screen back on with SCREEN ON.

  For example:
    WAIT UNTIL 2
      Would wait until 2 AM.
    WAIT UNTIL 2:00:30 PM
      Would wait until 30 seconds past 2 PM.
    WAIT UNTIL 14/00
      Would wait until 2 PM.

REPORT

  Starts  sending  statuses  to  a  file  named REPORT.DAT on the default
drive. If the file already exists The Brain will append to it.
  Statuses are produced whenever a command is executed. It is usually the 
time the command is executed and what  the  command  is.  It  also  gives 
errors  received while transferring files.  Be sure you have enough space 
on the disk to hold the finished report.  The  file  will  require  about 
forty bytes per command executed.

NEW REPORT

  This  command is the same as REPORT except that if REPORT.DAT exists it 
will be erased, and then a new REPORT.DAT file will be created and filled 
with the report information generated.

NO REPORT

  Stops sending reports to the REPORT.DAT file.

DUMP [file]

  Starts  dumping everything that comes from the modem into the specified 
file.  This command can be used for ASCII downloads.  If  the  dump  file 
already exists, it will be appended to.  It continues to dump information 
until the CLOSE DUMP command is reached. The information sent to the dump 
file is not formatted by the CHANGE command.

  For example:
    DUMP LPT1:
      Starts printing everything that comes over the modem.
    DUMP SCRN:
      Dumps everything to the screen.  This has the same  effect  as  the 
      SCREEN command.
    DUMP OUTPUT.TXT
      Creates the  file  OUTPUT.TXT  and  starts  building  it  with  the
      received information.

NEWDUMP [file]

  The  same  as  the  DUMP  command  except that if the dump file already 
exists, it will be erased and a new file created.

CLOSE DUMP

  Stops  sending  output to the file specified with the DUMP command.  If
there was no DUMP file specified before this command,  the compiler  will
return an error message.

OPEN AT  {commport (1)},{speed (1200)},{parity (N)},{data bits (8)},{stop
bits (1)}

  Opens the modem at the specified port. This must be done before you can 
use SEND, CHARSEND, MULTI DIAL, DOWNLOAD, UPLOAD, or OUT. If the modem is 
already open when this command  is  executed,  it  is  closed,  and  then 
reopened at the new setting. In this way you can switch baud rates.

  For example:
    OPEN AT
      Opens the modem on the COM1:  port, at 1200 baud, no parity, 8 data 
      bits, and 1 stop bit.
    OPEN AT 2, 300, E, 7
      Opens the modem on the COM2: port, at 300 baud, even parity, 7 data 
      bits, and 1 stop bit.
    OPEN AT 1, 75, S, 5, 2
      Opens the modem on the COM1: port, at 75 baud, space parity, 5 data 
      bits, and 2 stop bits.

CHANGE [ASCII code of character to replace],{ASCII of replacement (0)}

  This command  can  be  used  to  rid  the  received  text  of  unwanted 
characters. The first parameter, the character to be replaced, is changed 
to the second parameter, the replacement character, if it is given. If it 
is not given, or if the replacement character is zero, then the character 
will be completely removed from the received text.  This will not  affect 
an X-modem transfer, nor will it affect text put into the dump file.

  For example:
    CHANGE 65
      Will cause any capital A's received not to appear on the screen.
    CHANGE 7,14
      Will make a note symbol come up on the screen whenever a bell is 
      received over the modem.
    CHANGE 10
      This  would remove line feeds from received text.  If you don't put 
      this command into your command file,  you  may  get  double  spaced 
      lines  if  the computer you call sends both a carriage return and a 
      line feed as a line terminator.

SEND {delay in seconds (10)}{,;(,)}{text()}

  This command will wait the specified number of seconds after  data  has 
stopped coming over the modem before sending the text.  If any data comes 
over the modem while it is waiting, it will start waiting again.  This is 
done  so that this program won't send text while the program on the other 
end is sending text. The delay should be considered carefully. Too short, 
and  the data sent could be lost,  and the call may be wasted.  Too long, 
and the computer on the other end may hang up because of the long  delay.     
  This is one of the few cases in which spaces and case matter. The Brain 
will send the text exactly as you type  it.  You  must  put  a  new  SEND 
command for each line you want to send. You can use this command to enter 
commands and messages on the host computer.
  If you include the delay,  you must also put a comma (,)  or  semicolon 
(;)  after the number to separate the delay from the text.  If you do not 
use a comma or semicolon, the entire line, starting with the number, will 
be  sent.  If you use a comma,  a carriage return will be appended to the 
end of the line. If you use a semicolon, no carriage return will be sent. 
Make  sure  that  if  you  need  to  send a number followed by a comma or 
semicolon to the host computer that you include the  delay  in  the  SEND 
command.  If  you incluse a comma or semicolon without the delay then the 
delay will be zero.

  For example:
    SEND 5,Yes
      Waits for the computer on the other end of the line to stop sending 
      for 5 seconds,  then sends the text "Yes" with a carriage return to 
      answer a question.
    SEND ;Type of computer:
      This command has a delay of zero,  and it sends the string "Type of 
      computer:" to the host computer without a carriage return.
    SEND I'm testing my new communications program.
      Sends the sentence:  " I'm testing my new communications  program." 
      to be put into a message after a ten second delay. Notice the space 
      after SEND is included in the sent text.

CHARSEND [ASCII code],{ASCII code},{ASCII code}...

  Sends a list of characters over the modem.

  For example:
    CHARSEND 65
      Will send an "A" over the modem.
    CHARSEND 8,8,8
      Sends three backspaces over the modem.
    CHARSEND 12
      Sends a form feed to the host computer.

REDIAL {delay in seconds (20)},[phone number]

  Redials a number until the number answers.  After dialing it waits  the
specified  number  of  seconds to receive a carrier before hanging up and
dialing again. After receiving a carrier the programs goes on to the next
instruction.

  For example:
    REDIAL (123) 456-7890
      Dials the number, waits 20 seconds for a carrier, then hangs up and
      dials it again.
    RE DIAL 35, 1234567890
      Dials the number and waits 35 seconds for a carrier.
    REDIAL 30, 456-7890
      Dials the number and waits 30 seconds for a carrier.

MULTI DIAL {delay in seconds (20)}
[phone numbers]
END LIST
[instructions]
NEXT DIAL

  This will dial a list of phone numbers. It will call the first one, and 
if it is busy go on to the next one,  and so on throughout the  list.  If 
one  of  them  answers it will mark it and go on to the instruction after 
END LIST and continue to go through the  instructions  until  it  reaches 
NEXT  DIAL,  which  will tell it to go back to the MULTI DIAL command and 
dial the next number.  Once all the numbers have answered it will  go  to 
the  instruction  after NEXT DIAL.  You can even have more than one MULTI 
DIAL in a program,  but make sure to put a NEXT DIAL  after  every  MULTI 
DIAL and before the next MULTI DIAL.  This function can be used to call a 
large list of numbers without having to worry about getting  stuck  on  a 
busy one. Each phone number after MULTI DIAL should be on its own line.

  For example:
    MULTI DIAL 30
    423-1658          * Bulletin board numbers
    334-6233
    424-4547
    453-8367
    END LIST
    SEND 5,
                      * <CR>'s to get past initial messages
    SEND 5,
    SEND 5,John
                      * Caller's first name
    SEND 5,Jones
                      * Caller's last name
    SEND 5,SECRET
                      * Caller's password
    SEND 5,
                      * <CR>'s to go past more messages
    SEND 5,
    SEND 5,G
                      * Say goodbye
    WAIT 5            * Wait for board to hang up
    NEXT DIAL         * Dial next number
    END

      Will  call  423-1658 and wait 30 seconds for a carrier.  If none is
received,  it will call 334-6233.  If a carrier is received this time  it
will  mark  334-6233  to indicate that it has already answered and not to
call it next time.  Then it will log onto and log off of the board,  then
it will go back and call 423-1658,  and if it doesn't answer it will call
424-4547. After all four numbers have answered, it will go on to END.

IF [parameters] THEN [command]

  The  IF  statement  is  used only after a MULTI DIAL statement has been 
given.  It allows you to do something if a certain group of numbers  have 
been called. The parameters are integers separated by commas. The command 
is any command listed, even another IF,  or an END,  or even REDIAL.  The 
integer parameters stand for the position a particular phone number given 
in MULTI DIAL is in.

  For example:
    MULTI DIAL
    423-1658                            * Number 1
    334-6233                            * Number 2
    424-4547                            * Number 3
    453-8367                            * Number 4
    END LIST
    IF 1,2 THEN SEND 5,Y
    IF 1,2,4 THEN SEND 5,N
    IF 3 THEN DUMP TEXT.TXT
    SEND 5,
    IF 1 THEN SEND 5,John;Jones;SECRET
    IF 2,3,4 THEN SEND 5,John;Jones;PASSWORD
    SEND 5,
    SEND 5,
    SEND 5,G
    WAIT 10
    NEXT DIAL
    CLOSE DUMP
    END
      Will call the four numbers sequentially,  and when one  answers  it
      will go on to the next step.  As you can see in the comments above,
      the phone numbers are each assigned a number,  and this is used  in
      an IF statement.  It will send a "Y" to 423-1658 and 334-6233,  but
      not to 424-4547 or 453-8367.

DOWNLOAD [file]

  Creates  the  specified  file  and downloads the contents.  The file is
downloaded using the X-Modem protocol.

  For example:
    DOWNLOAD BRAIN.ARC
      Will create BRAIN.ARC on the default drive.
    DOWNLOAD B:BRAIN.ARC
      Will create BRAIN.ARC on the B drive.
    DOWNLOAD BRAIN
      Will  download  BRAIN.    on  the  default drive,  and it has to be
      renamed BRAIN.ARC before it can be unpacked.

UPLOAD [file]

  Sends a file to the host computer. When The Brain is first run, it will 
make sure that the specified file exists,  and if it is missing an  error 
message will appear. The file is uploaded using the X-Modem protocol.

  For example:
    UPLOAD BRAIN.ARC
      Will  read  BRAIN.ARC off the default drive and send it to the host
      computer.
    UPLOAD B:BRAIN.ARC
      Will read BRAIN.ARC off the  B  drive  and  send  it  to  the  host
      computer.
    UPLOAD BRAIN
      Will  read  the  file  BRAIN.    off  the default drive and,  if it
      exists, send it to the host computer.

OUT [file]

  Sends a file to the host computer. The file sent will be checked for in
the compiler, and if it is missing an error message will appear. The file
is sent in ASCII.  This can be used to enter a message on the  other  end
from text in a file.

  For example:
    OUT MESSAGE.TXT
      Will  read  MESSAGE.TXT  from the default drive and send it line by
      line over the modem.
    OUT B:TEXT.TXT
      Will  read  TEXT.TXT  from  the  B  drive  and  send it to the host
      computer.
    OUT BRAIN.EXE
      Would probably result in a run time error because the  lines  send,
      which end in a carriage return, can't be over 255 characters long.

WAIT [time]

  Waits  for  the  number  of  seconds specified where time is a positive 
integer, regardless of received text.  Text received is still sent to the 
specified outputs.

  For example:
    WAIT 5
      Waits 5 seconds until proceeding.
    WAIT 0
      Accomplishes absolutely nothing.
    WAIT -1
      Returns an error message in the compiler.

COUNT [number of times] and ENDLOOP

  Repeats  a given sequence a given number of times.  The number of times 
can be an integer from one to 32767.  After the COUNT command  is  given, 
ordinary  commands follow,  and then the command END LOOP to tell it when 
to go back to the corresponding COUNT command.  The Brain can go  through 
25 COUNT commands before needing to execute an ENDLOOP command.

  For example:
    COUNT 5
    SEND 10,
    END LOOP
      Would be the same as typing:
      SEND 10,
      SEND 10,
      SEND 10,
      SEND 10,
      SEND 10,
    END LOOP
    SEND 5,
    COUNT 5
      Would  cause  an  error  because all END LOOP's must be preceded by 
      COUNT statements.
    COUNT 3
    SEND 5, Yes
    COUNT 2
    SEND 5,
    END LOOP
    END LOOP
      Would be the same as typing:
      SEND 5, Yes
      SEND 5,
      SEND 5,
      SEND 5, Yes
      SEND 5,
      SEND 5,
      SEND 5, Yes
      SEND 5,
      SEND 5,

JUMP [Lines away]

  When this command is received,  the interpreter will go to line X+lines 
away, where X is the line that the JUMP command is on.

  For example:
    JUMP -1
      Will cause  the  line  before  the  JUMP  command  to  be  repeated 
      indefinitely.
    JUMP 0
      Will make the computer sit there and sit there and sit there...
    JUMP 2
      Will cause the interpreter to skip the next line.

END

  Closes all open files and returns to the system or Basic.

  Here  is  an example of what the COMMAND.DAT file would look like if we 
wanted to call an RBBS-PC bulletin board,  enter a message on the  board, 
and log off of the board:

Screen OFF                * Clear screen and turn off cursor.
Wait until 1 AM           * When rates are lowest!
Screen ON                 * So if I'm around I can see what's happening.
Report                    * In case something goes wrong.
Dump B:DUMP.TXT           * I can look over what happened the next day.
Open at                   * 1, 1200, N, 8, 1
Change 10                 * Keep line feeds from printing on the screen.
Send 5,
                          * Make sure modem is listening.
Send 5,ATM0
                          * Turn off modem speaker (It's 1 AM!)
Redial 30, (215) 935-4114 * RBBS phone number.
Count 3                   * Unnecessary. Still uses 3 lines.
Send 5,
End loop                  * To get past initial messages.
Send John
                          * Answer "First name?"
Send Jones
                          * Answer "Last name?"
Send SECRET
                          * Answer "Password?"
Send 15,
                          * More (Y)/N/NS? on welcome.
Send
                          * C/R to pass bulletins.
Send E
                          * Enter message.
Send 5,
                          * C/R if addressed to "All".
Send 5,Announcement
                          * Subject.
Send 5,N
                          * No protection.
Send 5,  I have just made a program to replace the programmer! It dials a
Send 5,board, loggs onto it, enters this message, and loggs off, all by
Send 5,itself!
Send 5,
                          * Blank line when done entering message.
Send 5,S
                          * Save the message.
Send 5,G
                          * Goodbye.
Close dump                * Just for neatness.
No report
Screen OFF
End

  After  this  file  is created in an editor,  just put it on the default 
drive under the name COMMAND.DAT and execute BRAIN.EXE.  The  Brain  will 
check  the  file to make sure everything is spelled right and such.  This 
section of the program has been referred to as the compiler,  although it 
really  only formats the commands.
  If  you receive several error messages in the compiler,  try to fix the
first one, and then compile it again. Some errors are caused by a mistake
earlier in the command file. For instance, if you get an error on an OPEN
AT statement,  you will get errors on all commands after that which  need
to interface with the modem, like SEND.
```
{% endraw %}

## FILES752.TXT

{% raw %}
```
Disk No #752
Program Name: The Brain  Version 1
PC-SIG Version: 1
 
The BRAIN is a telecommunications designed to go through the motions of
accessing your favorite BBS (Bullitin Board Sysytem), or online service
(compuserve etc.) without requiring you to be present. This is accomplished
by building a "Command File" filled with special commands which the program
interprets and acts upon in your absence. These commands allow you to
upload and download files, leave messages, and generally perform any
routine tasks which you dont want to take the time to do yourself. Another
advantage is being able to set the program up to call a BBS when it is
easier to get online, such as late at night or while your at work in the
daytime. The documentation assumes that you are familiar with DOS and that
you already have a text editor and know how to use it. The manual consists
of a glossary of all the needed commands and a detailed description of each
(with brief examples). Also included is a sample command file for you to
learn from. The program will run an any IBM-PC or compatible with at least
128 K of memory and one disk drive. Since the command file is built from
scratch you must be familiar with the commands needed to program your modem
(initialize, dial, hang-up, etc.) as the program does not do any of this
for you (you must include modem commands within your command file). This
program is best suited to the intermediate and expert user and not well
suited to the novice.
 
Usage:  Communications
 
System Requirements: 128 K of memory and one disk drive.
 
How to Start: Type the command  BRAIN (press enter)
 
How to print the Documentation: Type COPY BRAIN.DOC PRN (press enter)
 
File Descriptions:
 
BRAIN    EXE   Main program
BRAIN    DOC   Documentation file
COMMAND  DAT   Sample command file
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔══════════════════════════════════════════════════════════════════════════╗
║                         <<< #752 The BRAIN >>>                           ║
╟──────────────────────────────────────────────────────────────────────────╢
║                                                                          ║
║  To print the documentation type:   COPY BRAIN.DOC PRN  (press enter)    ║
║                                                                          ║
║  To start the program type:   BRAIN  (press enter)                       ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0752

     Volume in drive A has no label
     Directory of A:\

    BRAIN    DOC     21731   4-01-87   9:57p
    BRAIN    EXE     62080   4-01-87   6:11p
    COMMAND  DAT       299   4-01-87   8:40p
    FILES752 TXT      1951   5-19-87   1:38p
    GO       BAT        38   5-15-87  10:50a
    GO       TXT       703   5-15-87  10:50a
            6 file(s)      86802 bytes
                           71680 bytes free
