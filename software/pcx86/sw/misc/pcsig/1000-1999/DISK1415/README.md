---
layout: page
title: "PC-SIG Diskette Library (Disk #1415)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1415/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1415"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "SS1 2 OF 2 (ALSO 1414)"

    This combo of programs solves 70% of your computing needs!  This
    integrated program combines a wordprocessor, a list/data manager,
    communications, a mid-size spreadsheet (64 columns by 255 rows), and a
    file and directory browser.  To make the program even more
    comprehensive, pop-up aids are a keystroke away anywhere in the system.
    These include a calculator, an aid for graphing data, file/directory
    viewing, DOS shell interface, and a utility to make macros or smart
    keys.
    
    Packed with features, the wordprocessor offers functions normally found
    only in the top of-the-line packages.  The commands are unique to this
    program, but are easy to learn and fast.  The mailing list manager uses
    standard text files, can edit columns, and sort, select and print
    records as reports or mailing labels.  The spreadsheet has all the
    standard functions, plus handling multiple pages.
    
    The communications program is one of the broadest on the market.  It can
    communicate through almost every modem.  However, this tremendous
    flexibility requires you to configure it for your particular system the
    first time you use it.  The file and directory browser/manager, on the
    other hand, is fairly easy to use and a great help in dealing with hard
    disk housekeeping.  All the commands found in many separate programs are
    at your fingertips: backups, deletions, printing, viewing and directory
    alterations.
    
    The pop-ups include a calculator, file and directory checker, a print
    screen utility, a graph maker, and programmable "hot" or "smart"
    keys (macros).  The calculator supports decimal, hex, and binary for
    basic arithmetic functions.  The help system provides instant access to
    more than 100 screens of context-sensitive help.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AIDS.DOC

{% raw %}
```
.rm 80
.in 4
.ml 80
.bp 1
.he ||Aids||
.fo |||Page 2-$P|
.ce 
AIDS

.fi
SS1 provides a set of convenient to use, instantly available aids. The aids
include 1) a calculator, 2) a quick list look up aid (the Spell aid), 3) a
files and directory visibility aid, 4) an aid to copy the screen to a file, 5)
an aid to graph rows and columns of numbers, and 6) an aid to list (or change)
the current values of the learn keys.  The aids are available at any time
with a single keypress.
.nf

Calculator:
.fi
The calculator aid provides a four function calculator which supports decimal,
hex, and binary. It is activated by pressing shiftF3. The following will be
displayed on the top 2 lines of the screen:
.nf

+--------------------------------------------------------------------------+
|+Add -Sub *Mul /Div =Ans BkSp F1Clr F2+/- F3Mode cFnLrnNo aFnRecalNo Quit
|Dec:____________   Hex:_______  Bin:_________________________

Values are always displayed in their decimal, hex, and binary
representations (if hex and binary means nothing to you simply ignore the
fields). The current entry mode is highlighted (defaults to decimal).

Use the following keys to perform calculator functions:
Key:           Function:
+, -, *, /     Add, Subtract, Multiply, Divide.
0 to 9 and .   Enter numbers.
=              Display result of calculation.
F1             Clear calculator.
F2             Change sign (to enter a negative number)
F3             Change the current entry mode (decimal, hex, or binary).
sF1            Display help on the calculator.
cF1 to cF8     Learn the number now displayed to a function key.
aF1 to aF8     Recall a previously learned number.
Q or <esc>     Quit (return to your application).

.fi
The calculator also has the capability to read numbers directly from the
screen (for adding up tables etc.). A number read off the screen is used for
calculations just as though you had typed in the number. To read a number
from the screen, move the cursor to the number using the arrow keys, then
press home. The number will be entered and displayed just as though you had
typed it in.
.nf

Example calculator problems:
To Calculate:                      You press these keys:           Result:
2 + 2                              2 + 2 =                         4
47.4 X 3 + 5                       47.4 * 3 + 5 =                  147.2
4 + 7 X 2                          7 * 2 + 4 =                     18.0
10.93 + AE (hex) + 10101 (binary)  10.93 + F3 AE + F3 10101 =      205.93
.fi
The results of calculations can be learned to function keys for use as
storage registers, or to place the result of a calculation in your text when
you return to your application (see the Learn Keys section).

Note that you can use the number pad to enter numbers, but you must
first press the numlock key.
.nf
.bp 
Spelling Word Look up and List Look up:
.fi
The Spell aid is a utility for quickly looking up entries in a sorted list. We
provide a list of frequently misspelled words, and a list for the standard
ASCII table. You can add your own lists very easily. Your lists could be phone
numbers, addresses, programing language subroutine names, etc.

To activate Spell, type a shiftF4. You will be asked if you want to do the look
up in the Spell, ASCII table, Phone or Your own list - you can type any letter;
S will display the spell list, A will display the ASCII table, P will display
the phone list. If you enter a Y, you will be asked for the file name your list
is on. Pressing any other letter will display the file SS1.<letter> (press X to
for file SS1.X)

The following screen will then be displayed:
.nf

+--------------------------------------------------------------------------+
|Enter Word:  or F1ClearWord  F2WideList  pgup pgdn   esc=Quit
|>
|        Your                                           pleasure
|             Data                                      plural
|                  Stays                                pneumatic
|                        Here                           polarization
|                                                       politeness
|                                        Highlighted->  political     
|                                                       pollution
|   THE SPELL AID DICTIONARY HAS BEEN                     etc. etc.
    OMITTED FROM THE EVALUATION VERSION
.fi
To search for a word or entry on the list, start to type it in.  As you type
each character in, the list is redisplayed to show the closest match to what
you are typing (This way you don't have to know how to spell a word to look
it up!!).

The pgup, pgdn, up and down keys scroll the list up or down.

The F1 clears the word you are entering (So you can start a new one).

The F2 key redisplays the list using the full width of the screen.  This
gives a better view of wider lists at the cost of obscuring your data.

The word that the cursor is on can be learned to a function key by pressing
ctrlFn.

Pressing the esc key exits the spell checker and restores your previous
application.
.nf

You can easily create your own lists.  
       - Create a file with one entry per line starting in column one. The
         Editor could be used to type in the list. For best results use all
         lower case or upper case.
       - Sort the file into ascending order using the List Manager or a sort
         utility. 
.fi
You can add, delete or correct entries in the lists we provide or the ones you
make by using the list manager or editor. The lists we provide are on the files
SS1.S, SS1.P, and SS1.A (spell, phone and ASCII).
.nf
.bp
Files:
.fi
The files aid provides a quick way to list the files in a directory, and to
show or delete particular files. To start the files aid press shiftF7. You will
be asked to enter a directory or disk name (wildcards ok). The files will be
displayed along the right side of screen - like this:
.nf

+--------------------------------------------------------------------------+
|Files: Show Delete Top Bottom Quit cF1..cF8
|
|                                       This is the -->> CHKDSK.COM
|                                      "active" file      COMMAND.COM
|       Your                                              PUYALIP.CTY
|                                                         POTATO.CHP
|            Data                                         RAINIER.MTN
|                 Stays                                   SPINACH.YUK
|                       Here                              STHELENS.XMT
|                                                         TURBO.COM
|                                                         XRAY
|                                                         ZEBRA.LST
+--- <spc> stop/start arrows Slow/Fast, Quit FindStr
| I am a file that is being displayed because you
|   typed an "S".
|
| I will scroll on by, you can stop me by pressing the <spc> bar.
| To make me go fast press the right arrow key, to slooooooow me
| down press the left arrow key. If you press Q, I'm all thru.
+--------------------------------------------------------------------------+
.fi
The up, down, pgdn, and pgdn will scroll the file list up or down.

Individual files can be Showed (displayed on the screen), or Deleted. To do
this, scroll the list of files until the file to be Shown or Deleted is even
with the pointer symbol, then press S to show or D to delete. Show displays the
file on the bottom half of the screen. The scrolling can be stopped and
restarted by pressing the space bar. The scroll speed is increased by pressing
the right arrow, or decreased by pressing the left arrow. To cancel the Show,
press Q. To search the file for a string press F, you will be prompted for the
string to search for. The file will scroll by during the search, to pause the
search press the space bar. Press <esc> to cancel the search.

To Quit the Files aid, press Q.
.nf
.bp
Save Screen:
.fi
This aid saves a copy of the data on the screen to a file. To activate it,
type shiftF5. A "WAIT" message will be displayed on the bottom of the screen
while the data is read from the screen. You will then be prompted for the name
of a file to save the screen to. Enter the name of a file and press return.
The screen data will be copied to the file, and you will be returned to your
application.
.nf

The prompt screen looks like this:
+-----------------------------------------------
| Save Screen: enter file name - or esc
| > IMASAMP.CRT



Notes:
The SS1 menu lines on the top and bottom of the screen will not be copied to
the file.
If the file name you enter already exists, you will be allowed to replace it
or append the screen data to the end of it (or forget the whole thing).

.bp
Graphing:
.fi
The Graphing Aid provides a quick and simple way to graph rows or columns of
numbers that appear on the screen.  It will produce simple line or bar charts.
If you have a suitable printer, hardcopies can be obtained via the operating
systems "print screen" facility. Your computer must be equipped with a graphic
monitor in order for you to use the Graphing Aid. The Graphing aid can be
instantly accessed directly from any of the SS1 applications.
.nf

To use the Graphing Aid:
- Display the data to be graphed on the screen. This can be done within any
  of the SS1 applications.
- Press shiftF8 to activate graphing. A list of commands will be displayed
  across the top of the screen.
- Use the arrow keys to move the cursor to the start of the row or column of
  numbers to be graphed, then press S to Start the run. The start of a row
  is its left edge, the start of a column is its upper left corner.
- Use the arrow keys to move the cursor to the right end of the row, or the
  lower right corner of the column, then press E to End the run. As you move
  the cursor a reverse video box will surround the row or column. If you
  make a mistake either back up with the arrows, or type esc.
- At this point you can define additional runs as described above. SS1 will
  position the cursor where it thinks you might want to start the next run.
- UseLastBox can be used to save keystrokes in defining runs after the first
  run. To use it, move the cursor to the start of a run, and instead of
  typing S to Start the run, type B. This will box in a run of the same size
  as the last one, and position the cursor at its end. If the run is the
  correct size, type E to accept it; if not, use the arrow keys to adjust it
  and then type E.
- After defining all of your runs, type G to Graph the runs. You will then
  be presented with a new set of choices that allow you to Draw the graph,
  define Titles, set up Axes, and select Line or Bar charts.
- To see what the graph looks like type D. A line chart with default axes
  limits will be displayed. Press any key to return to the graph menu.
- If you would rather have a Bar chart, press B, then D.
- If you want to add Titles, press T, and answer the questions.
- If you want to change the axis limits, type A, and answer the questions.
- Press Q to Quit graphing.

.fi
If your printer is supported by the DOS graphic print screen function
hardcopies of the graph may be obtained. 

To do this using an IBM PC, you must have run the GRAPHICS program before
running SS1 (the GRAPHICS program loads software into memory that is required
by the operating system to do a graphic screen print - see your operating
system manual). If the GRAPHICS program has been run pressing shift PrtSc will
print the graph.

AN EXAMPLE SHOWING HOW GRAPHING WORKS HAS BEEN OMITTED FROM THIS
EVALUATION COPY MANUAL BECAUSE WE CAN'T DO GRAPHICS IN THE EVALUATION
MANUAL.

```
{% endraw %}

## ALL.DOC

{% raw %}
```
.ci \doc\intro.doc
.ci \doc\contents.doc
.ci \doc\overview.doc
.ci \doc\aids.doc
.ci \doc\fm.doc
.ci \doc\edit.doc
.ci \doc\comm.doc
.ci \doc\lm.doc
.ci \doc\print.doc
.ci \doc\ss.doc
.ci \doc\install.doc
.ci \doc\setup.doc
.ci \doc\supprn.doc
.ci \doc\perrpt.doc
.ci \doc\index.doc


```
{% endraw %}

## COMM.DOC

{% raw %}
```
.rm 80
.in 4
.ml 80
.bp 1
.he ||Communications||
.fo |||Page 5-$P|
.ce 
COMMUNICATIONS


.fi
This chapter explains the use of the communication and terminal emulation
capabilities in SS1.  You can use communications to make your computer emulate
a terminal as well as transmit files between the two systems.
.nf

The topics covered in this chapter are:

   - Introduction

   - Basic Functions

   - Summary of communication commands available

   - How to use communications

   - Full explanation of communication commands

Remember that help is available at all times when you are in communications
through the <shift> F1 and <shift> F2 keys.
.bp
Basic Functions

.fi
Since many remote systems expect to have a full 80 character by 24 line screen
available, only the 25th line is used by SS1. The 25th line provides a list of
available commands. Expanded explanations are available through use of the
<shift> F1 and <shift> F2 keys. The commands are activated by pressing the <alt>
key, then the highlighted letter of the desired command, then release the keys.
Function keys were not used to make them available to the host.

The lower right hand corner of the screen displays the status of the
communication line as well as other messages.
.nf


+-- Sample Communications Screen -----------------------------------------+
   Your
         Data                                                                 
                                                                              
               Both                                                           
                                                                              
                  To                                                          
                                                                              
                     And                                                      
                                                                              
                        From                                                  
                                                                              
                            The                                               
                                                                              
                                Host                                          
                                                                              
                                     is                                       
                                         Displayed                            
                                                                              
                                                  HERE                        
SS1: sF1Help sF2Menu aSend aRec aDial aHangup aConfig aArrowLoc aLkbck Conn
+-------------------------------------------------------------------------+

.fi
At times you will be prompted for information in the top two lines of the
screen. When this occurs, the previous screen is preserved and will be
restored.

While in Communications, the <shift> function keys have their standard
functions: sF1 and sF2 are help keys, sF3 through sF8 are aids such as
calculator and spelling checker, sF9 will suspend communications, and sF10
will exit. See chapter 1 for more details. The <crtl> function keys will
learn text from the current cursor position to the end of the screen. The
<alt> function keys will send the text learned to them, to the host, as
though the text was entered at the keyboard; unless SS1 is prompting for
input then text will be used in the prompt. 

.bp 
.ce 
Command Summary

This section provides a quick reference of communication commands.  The last
section of this chapter provides complete descriptions for each command.
.nf

Starting Communications:
There are two ways to start communications.

From the main menu.
You Type:            Resulting actions:
C .................. The file SS1.CFG will be searched for on the default
                     drive. If found, the communication parameters will be
                     loaded from this file, and the communication port will
                     be initialized. If the file is not found, you will be
                     prompted for a configuration file.

J, <up/downarrow>,   This is used to restart a suspended communication
then S               session. The first S puts the cursor on the suspended
                     job list, move cursor to desired job, and type S to
                     start the job. Communications will resume from where it
                     was suspended.

Leaving Communications:
There are four ways to leave communications.

<shift>F10 ......... Normal Quit.
                     You will be offered the choice of disconnecting the
                     line before exiting or leaving with the line connected.

<shift>F9 .......... Suspend communications and return to the Main Menu or
                     DOS or execute a DOS level command. Use the Main Menu
                     option to suspend a communication session and return to
                     the Main Menu. This job will be added to the suspended
                     job list on the Main Menu for restarting later. The DOS
                     option allows you to suspend the communication session
                     and return to DOS. The next time SS1 is run, you will
                     be returned directly to the suspended communication
                     session. When Communications is suspended the current
                     screen will not be saved but the line will remain
                     connected. The execute a DOS command option will prompt
                     for the command to run, run the DOS command and then
                     return to communications. The screen will be restored
                     when communications is restarted.

Communication Commands:
The following commands can be entered during communications:

<alt>S ............. Send file to host.
                     Press <alt>S. You will be asked for a file to send,
                     <esc> will cancel send.

<alt>R ............. Receive file from host.
                     Press <alt>R. You will be asked for a file to save
                     received characters in and whether received characters
                     should be displayed. <alt>R will cancel a receive that
                     is in progress.

<alt>D ............. Dial/ Connect line.
                     <alt>D will dial the host using the phone number in the
                     configuration file if an autodial modem is present. If
                     no auto dial modem exists the line will be set for
                     connection.

<alt>H ............. Hangup/Disconnect line.
                     Press <alt>H. The communication line and port will be
                     disconnected.

<alt>C ............. Configure/Setup communication parameters.
                     <alt>C will allow modification of communication
                     settings. You will be given the option of reading in a
                     new configuration file or changing the current
                     settings.

<alt>A ............. Local/ Remote arrow keys.
                     <alt>A will allow you to toggle the arrow key usage
                     from sending the key value to the host to only moving
                     the cursor on the screen. The main use for local arrow
                     keys is to move the cursor to a screen location where
                     you want to learn text to a function key (<ctrl>Fn).

<alt>L ............. Lookback through received characters.
                     Use <uparrow> and <downarrow> to scroll backward and
                     forward through the received character buffer after
                     <alt>L is entered. Use <esc> to exit the command and
                     return to Communications.

.bp
.ce
USING COMMUNICATIONS

.fi
This section covers some of the more important things you will want to know
while using Communications.

Since there are many options for port parameters and key definitions, the
Communication program expects to read a configuration file. This file
defines the port parameters, key definitions, and host commands. Port
parameters set the communication port, such as, baud rate and parity. Key
definitions describe what value will be sent to the host when a key is
pressed such as, the arrow keys. Host commands are sent by the host to
perform screen control functions, such as, clear screen. Communications can
be started without a configuration file but the defaults probably won't work
for your application. Port parameters and key definitions can be modified and
saved within Communications but to change host commands a separate program
called SETUP must be used as explained in appendix 2.
.nf

Requirements
.fi
To use Communications your system must have a communication port. This port
can be connected to a modem, directly connected to another computer, or an
internal modem. If you are not using an internal modem the connection
between your PC and the modem or host must have the following lines
connected:
.nf
            Pin  2 - Transmit data to host
            Pin  3 - Receive data from host
            Pin  6 - Data set ready (used for line handshake)
            Pin  7 - Signal Ground
            Pin 20 - Data terminal ready (required for modems)

Starting Communications
.fi
When Communications is started from the Main Menu the configuration file
SS1.CFG will be read in from the default drive. If you connect to different
hosts and you don't want a default configuration to be loaded, delete the
file SS1.CFG. You will then be prompted for the configuration file when
Communications begins:
.nf

.pb 6
+----------------------------------------------------------------------+
| Enter configuration file name - sF1 for help or esc for defaults
| >
|
| SS1.CFG does not exist


.fi
Enter the name of the configuration file to use then <ret>. Pressing <esc> will
start Communications with the default values.

While in Communications, the configuration can be modified with the configure
command (<alt>C). If you make changes that modify the port settings (port
number, baud rate, etc.), the line should be disconnected before running
setup.
.nf

Leaving Communications
There are four ways to exit Communications:

<shift>F10     This is the normal exit and provides the option of
               disconnecting the line before exit:

.pb 4
                 +------------------------------------------------------+
                 | Disconnect line before exit - Yes or No
                 | esc or sF1


               Type Y to exit and disconnect line or N to exit without
               changing line status. <esc> can be entered to return to
               Communications.

<shift>F9      This exit will suspend the current Communication session. You
               have the option of returning to the Main Menu of SS1 or DOS
               or executing a DOS level command. If you suspend to DOS or to
               the SS1 Main Menu the communication line will remain
               connected but characters received while Communications is
               suspended will be ignored and the screen display will not be
               restored when you return to communications. If you suspend to
               run a DOS command characters received while the command
               executes will be placed in a buffer. When you are returned to
               communications the screen will be restored and characters
               received will be displayed.

.pb 4   
               +--------------------------------------------------------+
               |  Suspend to SS1 Menu or DOS or eXecute DOS Command or esc
               |  sF1=Help


               Type S to suspend and return to the Main Menu, D to suspend
               and return to DOS, X to execute a DOS level command, or <esc> 
               to return to Communications.


Helpful Hints
.fi
Most problems will occur from the configuration file having the wrong
information or the wrong cable connections. This can cause connection
failures, garbled data, and other odd behavior. Appendix 2 describes all
values that are entered in the configuration file and how to modify existing
values.

There are several configuration files supplied with SS1:
.nf

    TTY.CFG - This file can be used for systems that do not require screen
              control functions. Most time share services will use this
              configuration.
  VT100.CFG - This file allows emulation of a Digital VT100 terminal.
    931.CFG - This file allows emulation of a Texas Instruments 931
              terminal.

To use Communications for the first time you must first determine several
parameters for the host:
      Baud rate - If a modem is used the baud rate must match your modem
                  baud rate. Most systems are 2400 or 1200.
      Parity    - Most dial up systems use NONE. 
      Echo      - Most hosts will echo the characters they receive which
                  would require the value set to NO.
      Stopbits  - Most dial up systems use 1.
      Bits per
      Character - Most dial up systems use 8.
      Handshake - If you use a modem XON is required.
.fi
Once these setting are known you can use the TTY configuration file and the
configure command (<alt>C) to set the required values. It would be a good idea
to save the modified settings to a new configuration file. At this point you
should be able to logon to the host. If some keys need to send different values
to the host, use the setup command to modify the key definitions. 
.nf

The learn keys can be very useful during Communications, for example:
      - frequently used commands can be learned to function keys.
      - file names and other information can be learned to a key.
      - values can be copied from anywhere on the screen to answer prompts
        or edit files.

.fi
The host can send commands to use the graphics available on the computer. To
use graphics, an initialize command is sent. This sets up graphic parameters
and turns off scrolling. To turn scrolling back on the stop graphics command
must be sent. Graphics can be performed after the stop command is sent,
although text scrolling will occur. Commands are available to draw lines,
change color, write text, and erase the screen. See appendix 2 for an
explanation of graphic command formats.

All of the SS1 aids are available during Communications (spell, calculator,
etc.). When you are in an aid incoming characters are saved in a buffer
rather than displayed on the screen. Received characters will remain in the
buffer until you exit the aid. To avoid overflowing the buffer (about 50,000
characters) you should only enter aids when a limited number of characters
are expected from the host.

The local/ remote arrow key command (<alt>A) can be useful to learn keys
when you are on a host that requires arrow keys but will not allow you to
move your cursor to any location on the screen. Press <alt>A to switch to
local arrow keys (screen will display aArrowRem). Move the cursor to the
location of the text to be learned to a key. Press <crtl>Fn to learn the
text. Move the cursor back to its original position and press <alt>A to
switch back to remote arrow keys (screen will display aArrowLoc). The text
will now be learned to the key without the host knowing the cursor was
moved.

With the suspend capabilities in SS1, it is possible to be online to multiple
hosts at the same time. You could, for instance, receive data on port 1 from
one host, and then send this data to another host connected to port 2.

If you are on line to multiple hosts, you must be careful not to disconnect
the wrong line. For example if port 1 is in the default configuration file,
each time you start a new Communication job port 1 will be initialized. If
port 2 is to be used in a second Communication job, go directly to setup to
change to port 2 without giving the disconnect command. 
.nf

.bp 
.ce 
FULL COMMAND DESCRIPTIONS

This section contains full explanations of all Communication commands.

<alt>S - Send command
Purpose:   To send a file on your PC to the host.

Usage:     Before running this command, the host must be ready to accept the
           data in the file. This can be done by running a program on the
           host designed for file transfer or placing an editor on the host
           in the insert mode. 

           Press <alt>S. You will be prompted for a file to send to the
           host.

.pb 4
           +----------------------------------------------------+
           |  Enter file name to send or esc to return or sF1 for help
           |  >


           Enter the name of the file to send then <ret> or <esc> to cancel
           send.

           The file will be sent as though the characters in the file were
           typed at the keyboard.

           The send can be stopped at any time by pressing the <esc> key. No
           other characters can be typed until the file is sent or canceled.

           When the file is transferred a message will be displayed and you
           will be returned to Communications.


<alt>R - Receive command
Purpose:   To receive a file from the host.

Usage:     This command will store all characters received from the host in
           the file specified. Before running this command, the host should
           be ready to send (but not sending) the file. This can be done by
           entering the command to display a file or running a file transfer
           program. 

           Press <alt>R. You will be prompted for a file in which to receive
           the characters.

.pb 4
           +---------------------------------------------------------
           |  Enter file name to receive data from host or esc to return
           |  >


           Enter the name of the file to receive characters then <ret> or
           <esc> to cancel receive. If the file exists, you will be given
           the option of replacing or appending the file.

           Next you will be asked whether to display received characters.

.pb 4
           +---------------------------------------------------------
           |  Display received characters
           |  Answer Yes or No,   or sF1=Help
           |

           If you answer Y, characters will be displayed as they are
           received. If you answer N, a count of characters received will be
           displayed. Use no to send files that can not be printed, such as
           program files.

           At this point you should tell the host to start sending the file.

           Communications will continue as before until the buffer fills.
           Then a command will be sent to the host to stop sending
           characters. The buffer will be written and communication will
           continue until the buffer fills again. <shift>F9 and <shift>F10
           are not allowed at this time since the receive must be stopped
           before Communications can be exited. The receive can be stopped
           at any time by pressing the <alt>R key.

           When the receive is stopped, a message will be displayed and you
           will be returned to Communications.

<alt>D - Dial/ Connect command
Purpose:   To dial a host (if an autodial modem is present) or prepare the
           communication port for connection.

Usage:     Press <alt>D.
           If no autodial modem exists (defined in configuration file) the
           communication port will be initialized for connection.

           If an autodial modem is present, the phone number to dial will be
           displayed on the screen. As information is received from the
           modem, it will be displayed on the screen. The screen will remain
           this way until a call is completed or a key is pressed on the
           keyboard. If the call is completed, the screen will blank and you
           will be returned to Communications.

           If a key is pressed to exit the dial command, you should press
           Hangup (<alt>H) to cancel the call otherwise the call attempt
           will continue.

<alt>H - Hangup/Disconnect command
Purpose:   To disconnect communication line and turn off communication port.

Usage:     This command will hang up modems or make the computer appear to
           be turned off for direct connect lines.

           Press <alt>H.
.pb 4

           +---------------------------------------------------------
           |  Disconnect the line now
           |  Answer Yes or No,   or sF1=Help
           |

            Type Y to disconnect the line or N to cancel the command.


<alt>C - Communication parameter setup command
Purpose:   To change the communication parameter definition.

Usage:     This command is used to configure the values defined for
           communication parameters. This includes port setup, key
           definitions, and host command definitions.

           Press <alt>C. You will be asked if you want to read in a new
           configuration file or modify the current values.

.pb 4
           +---------------------------------------------------------
           |  Read in new configuration file or Change current settings
           |  Answer R, C, esc, or sF1
           |

           If you enter R, you will be asked to enter the new configuration
           file name.

.pb 4
           +---------------------------------------------------------
           |  Enter configuration file name or esc to exit
           |  >
           |

           Enter the name of the new configuration file or esc to return to
           Communications.

           If C was entered to the change current settings prompt, the
           following screen with current values will be displayed.

.pb 16
           +--------------------------------------------------------------
           | Enter new values F1 when done or esc or sF1 for help
           |
           | Communication port                    1 2 3 : 1
           | Baud Rate 300 600 1200 2400 4800 9600 19200 : 1200
           | Parity                        None Odd Even : NONE
           | Echo typed characters                Yes No : YES
           | Number of stop bits                     1 2 : 1
           | Number of bits per character            7 8 : 8
           | Handshake method                    XON LINE: XON
           | Auto dial modem                      Yes No : YES
           | Phone Number                    Use 0-9 - + : 941-4567    
           |
           | Arrow key use                   LOCAL REMOTE: LOCAL
           | Use printable command character       Yes No: NO
           |

           Note: The parameters displayed for your computer maybe different
                 depending on it's hardware configuration.

           Change values as required using <up/down arrow> and <ret> to move
           on the screen. The value entered must be in the list of
           acceptable values on the left. Appendix 2 explains the meaning of
           each field. Press F1 to go on to the next screen or esc to exit.

.pb 22
+-------------------------------------------------------------------------
|Enter the ASCII characters (hex value) to send to the HOST
|when the following keys are pressed - F1 to exit - or esc
|
|Right arrow : 1B 43 __  F1        : 1B 50 __ Tab   : 0D __ __  ctrl A: __ __ __
|ctrl  Right : 1B 69 6F  F2        : __ __ __ BkTab : 09 __ __  ctrl B: __ __ __
|left arrow  : __ __ __  F3        : __ __ __ CarRet: __ __ __  ctrl C: 03 __ __
|ctrl Left   : __ __ __  F4        : __ __ __ alt O : 1B __ __  ctrl D: 04 __ __
|Home        : __ __ __  F5        : __ __ __ alt A : 1B 69 31  ctrl G: 07 __ __
|ctrl Home   : __ __ __  F6        : __ __ __ alt B : __ __ __  ctrl L: 0C __ __
|End         : __ __ __  F7        : __ __ __ alt D : __ __ __  ctrl N: 0E __ __
|ctrl End    : __ __ __  F8        : __ __ __ alt F : __ __ __  ctrl Q: 11 __ __
|Pgdn        : __ __ __  F9        : __ __ __ alt J : __ __ __  ctrl S: 13 __ __
|ctrl Pgdn   : __ __ __  F10       : __ __ __ alt R : __ __ __  ctrl T: 14 __ __
|Pgup        : __ __ __  Up        : 08 __ __ alt S : __ __ __  ctrl U: 15 __ __
|ctrl Pgup   : __ __ __  Down      : __ __ __ alt T : __ __ __  ctrl X: 18 __ __
|BackSpc     : __ __ __  Ins       : 0A __ __ alt U : __ __ __  ctrl Y: 19 __ __
|ctrl Bkspc  : __ __ __  Del       : __ __ __ alt X : __ __ __  ctrl Z: 1A __ __
|ctrl PrtSc  : __ __ __  esc       : __ __ __ alt Z : __ __ __  ctrl @: 00 __ __
|

           Note: This screen will vary for different PC's.

           Each of the keys listed to the left of the colon can send from
           zero to three characters to the host when pressed. This allows
           emulation of a variety of terminals with function keys and other
           special characters. Values are the ASCII code in hex (A = 41).

           Use <up/downarrow> to move up and down within the screen. Use 
           <ret> to move to the right. Use F1 to continue or <esc> to leave
           screen without accepting changes.

           In the example screen above, the right arrow key will send <esc>
           C, ctrl right arrow key will send <esc> i o, and left arrow will
           not send any characters.

           When you exit this screen, you will have the option of saving the
           new configuration to a file or just returning to Communications.
           With either choice, the new settings will be in effect when
           Communications is entered.

.pb 4
           +---------------------------------------------------------
           |  Save settings in file and return or Return to terminal
           |  Answer S, R, esc, or sF1
           

           If you answer S you will be prompted for a file to save the new
           configuration in.

.pb 4
           +---------------------------------------------------------
           |  Enter configuration file name or esc - sF1 for help
           |  >
           |

           Enter the new configuration file name then <ret> or <esc> to
           return to Communications without writing a new file. If the file
           currently exists, it will be replaced. 

<alt>A - Local/ Remote arrow keys Purpose: 
           To toggle between arrow keys used locally or by the host.

Usage:     In Communications the arrow keys can have two different meanings.
           They can be used locally to only change the cursor location on
           the screen. Or they can be used remotely where they send defined
           characters to the host. If you are not emulating a terminal that
           has arrow keys, you will probably want them to be local at all
           times.

           This command is useful when using a host that requires arrow keys
           but will not allow easy movement to any screen location.

           Press <alt>A. The key definition will toggle between local and
           remote use.

           Note: The bottom line displays which mode will be activated by
                 pressing <alt>A. Therefore, if RemArrow is displayed,
                 pressing <alt>A will set arrow keys to remote and vice
                 versa.

<alt>L - Look back through received characters
Purpose: Allows viewing of characters that have scrolled off the screen.

Usage:     This command is used to scan back through received characters to
           look at previous information.

           Press <alt>L. The following line will be displayed on the bottom
           of the screen.

.pb 4
           |
           |  Use   to scan characters cF1..8 learn top line - esc to exit
           |
           +---------------------------------------------------------

           Use the <up/downarrow> to move through the buffer of received
           characters. Each time you press a key, the top line of the screen
           will scroll to the next/ previous line feed or terminal command
           character. <ctrl>F1 through <ctrl>F8 can be used to learn the
           top line of the screen to a function key. All of the aids are
           also available (calculator, save screen, etc.). Press <esc> to
           return to Communications.


```
{% endraw %}

## CONTENTS.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.he ||Contents||
.fo |||Page iii|
.CE
TABLE OF CONTENTS
.nf
                                                            Chapter
OverView of SS1                                                1
       - Running SS1
       - The Main Menu
       - Help
       - Edit Keys
       - Learn Keys
       - Key Recorder
       - File Placement (Drives)
       - Recover

Aids                                                           2
       - Calculator
       - Spell and list lookup
       - Files
       - Save Screen to File
       - Graphing

File Manager                                                   3
       - Introduction
       - File Manager Commands
           - File Commands
           - Show File Commands
           - Multi File Commands
           - Directory Commands
Editor                                                         4
       - Introduction
       - Summary of Edit Commands
       - How to use the Editor
       - Full Explanation of Edit Commands

Communications and Terminal Emulation                          5
       - Introduction
       - Basic Functions
       - Summary of Commands
       - How to Use Communications
       - Full Explanation of Commands

List Manager                                                   6
       - Introduction
       - Summary of Commands
       - How to Use the List Manager
       - Full Explanation of Commands

Print and Format                                               7
       - Introduction
       - Commands
       - How to Use the Print Formatter
       - Printer Support

Spreadsheet                                                    8
       - Introduction
       - Summary of Commands
       - How to Use the Spreadsheet
.bp
Appendices:
Installation                                                   1
Setup for screen, communications, and printers                 2
List of supported printer                                      3
Emulator Key Definitions                                       4
.fo |||Page iv|

```
{% endraw %}

## DIABLO.DOC

{% raw %}
```
Printer Pattern File for DIABLO Printers:

Bold = is done with the hardware shadow printing.
Undl = is done with the hardware underline printing.
ps 1 = 10 pitch.
ps 2 = 12 pitch.
ps 3 = 15 pitch.
ps4..ps9 not used




```
{% endraw %}

## DIABLO2.DOC

{% raw %}
```
Printer Pattern File for DIABLO Printers:  (VERSION 2)

Bold = is done with second pass that overprints same chars in bold areas.
Undl = is done with third  pass that prints and underline char.
ps 1 = 10 pitch.
ps 2 = 12 pitch.
ps 3 = 15 pitch.
ps4..ps9 not used





```
{% endraw %}

## AIDS.DOC

{% raw %}
```
.rm 80
.in 4
.ml 80
.bp 1
.he ||Aids||
.fo |||Page 2-$P|
.ce 
AIDS

.fi
SS1 provides a set of convenient to use, instantly available aids. The aids
include 1) a calculator, 2) a quick list look up aid (the Spell aid), 3) a
files and directory visibility aid, 4) an aid to copy the screen to a file, 5)
an aid to graph rows and columns of numbers, and 6) an aid to list (or change)
the current values of the learn keys.  The aids are available at any time
with a single keypress.
.nf

Calculator:
.fi
The calculator aid provides a four function calculator which supports decimal,
hex, and binary. It is activated by pressing shiftF3. The following will be
displayed on the top 2 lines of the screen:
.nf

+--------------------------------------------------------------------------+
|+Add -Sub *Mul /Div =Ans BkSp F1Clr F2+/- F3Mode cFnLrnNo aFnRecalNo Quit
|Dec:____________   Hex:_______  Bin:_________________________

Values are always displayed in their decimal, hex, and binary
representations (if hex and binary means nothing to you simply ignore the
fields). The current entry mode is highlighted (defaults to decimal).

Use the following keys to perform calculator functions:
Key:           Function:
+, -, *, /     Add, Subtract, Multiply, Divide.
0 to 9 and .   Enter numbers.
=              Display result of calculation.
F1             Clear calculator.
F2             Change sign (to enter a negative number)
F3             Change the current entry mode (decimal, hex, or binary).
sF1            Display help on the calculator.
cF1 to cF8     Learn the number now displayed to a function key.
aF1 to aF8     Recall a previously learned number.
Q or <esc>     Quit (return to your application).

.fi
The calculator also has the capability to read numbers directly from the
screen (for adding up tables etc.). A number read off the screen is used for
calculations just as though you had typed in the number. To read a number
from the screen, move the cursor to the number using the arrow keys, then
press home. The number will be entered and displayed just as though you had
typed it in.
.nf

Example calculator problems:
To Calculate:                      You press these keys:           Result:
2 + 2                              2 + 2 =                         4
47.4 X 3 + 5                       47.4 * 3 + 5 =                  147.2
4 + 7 X 2                          7 * 2 + 4 =                     18.0
10.93 + AE (hex) + 10101 (binary)  10.93 + F3 AE + F3 10101 =      205.93
.fi
The results of calculations can be learned to function keys for use as
storage registers, or to place the result of a calculation in your text when
you return to your application (see the Learn Keys section).

Note that you can use the number pad to enter numbers, but you must
first press the numlock key.
.nf
.bp 
Spelling Word Look up and List Look up:
.fi
The Spell aid is a utility for quickly looking up entries in a sorted list. We
provide a list of frequently misspelled words, and a list for the standard
ASCII table. You can add your own lists very easily. Your lists could be phone
numbers, addresses, programing language subroutine names, etc.

To activate Spell, type a shiftF4. You will be asked if you want to do the look
up in the Spell, ASCII table, Phone or Your own list - you can type any letter;
S will display the spell list, A will display the ASCII table, P will display
the phone list. If you enter a Y, you will be asked for the file name your list
is on. Pressing any other letter will display the file SS1.<letter> (press X to
for file SS1.X)

The following screen will then be displayed:
.nf

+--------------------------------------------------------------------------+
|Enter Word:  or F1ClearWord  F2WideList  pgup pgdn   esc=Quit
|>
|        Your                                           pleasure
|             Data                                      plural
|                  Stays                                pneumatic
|                        Here                           polarization
|                                                       politeness
|                                        Highlighted->  political     
|                                                       pollution
|   THE SPELL AID DICTIONARY HAS BEEN                     etc. etc.
    OMITTED FROM THE EVALUATION VERSION
.fi
To search for a word or entry on the list, start to type it in.  As you type
each character in, the list is redisplayed to show the closest match to what
you are typing (This way you don't have to know how to spell a word to look
it up!!).

The pgup, pgdn, up and down keys scroll the list up or down.

The F1 clears the word you are entering (So you can start a new one).

The F2 key redisplays the list using the full width of the screen.  This
gives a better view of wider lists at the cost of obscuring your data.

The word that the cursor is on can be learned to a function key by pressing
ctrlFn.

Pressing the esc key exits the spell checker and restores your previous
application.
.nf

You can easily create your own lists.  
       - Create a file with one entry per line starting in column one. The
         Editor could be used to type in the list. For best results use all
         lower case or upper case.
       - Sort the file into ascending order using the List Manager or a sort
         utility. 
.fi
You can add, delete or correct entries in the lists we provide or the ones you
make by using the list manager or editor. The lists we provide are on the files
SS1.S, SS1.P, and SS1.A (spell, phone and ASCII).
.nf
.bp
Files:
.fi
The files aid provides a quick way to list the files in a directory, and to
show or delete particular files. To start the files aid press shiftF7. You will
be asked to enter a directory or disk name (wildcards ok). The files will be
displayed along the right side of screen - like this:
.nf

+--------------------------------------------------------------------------+
|Files: Show Delete Top Bottom Quit cF1..cF8
|
|                                       This is the -->> CHKDSK.COM
|                                      "active" file      COMMAND.COM
|       Your                                              PUYALIP.CTY
|                                                         POTATO.CHP
|            Data                                         RAINIER.MTN
|                 Stays                                   SPINACH.YUK
|                       Here                              STHELENS.XMT
|                                                         TURBO.COM
|                                                         XRAY
|                                                         ZEBRA.LST
+--- <spc> stop/start arrows Slow/Fast, Quit FindStr
| I am a file that is being displayed because you
|   typed an "S".
|
| I will scroll on by, you can stop me by pressing the <spc> bar.
| To make me go fast press the right arrow key, to slooooooow me
| down press the left arrow key. If you press Q, I'm all thru.
+--------------------------------------------------------------------------+
.fi
The up, down, pgdn, and pgdn will scroll the file list up or down.

Individual files can be Showed (displayed on the screen), or Deleted. To do
this, scroll the list of files until the file to be Shown or Deleted is even
with the pointer symbol, then press S to show or D to delete. Show displays the
file on the bottom half of the screen. The scrolling can be stopped and
restarted by pressing the space bar. The scroll speed is increased by pressing
the right arrow, or decreased by pressing the left arrow. To cancel the Show,
press Q. To search the file for a string press F, you will be prompted for the
string to search for. The file will scroll by during the search, to pause the
search press the space bar. Press <esc> to cancel the search.

To Quit the Files aid, press Q.
.nf
.bp
Save Screen:
.fi
This aid saves a copy of the data on the screen to a file. To activate it,
type shiftF5. A "WAIT" message will be displayed on the bottom of the screen
while the data is read from the screen. You will then be prompted for the name
of a file to save the screen to. Enter the name of a file and press return.
The screen data will be copied to the file, and you will be returned to your
application.
.nf

The prompt screen looks like this:
+-----------------------------------------------
| Save Screen: enter file name - or esc
| > IMASAMP.CRT



Notes:
The SS1 menu lines on the top and bottom of the screen will not be copied to
the file.
If the file name you enter already exists, you will be allowed to replace it
or append the screen data to the end of it (or forget the whole thing).

.bp
Graphing:
.fi
The Graphing Aid provides a quick and simple way to graph rows or columns of
numbers that appear on the screen.  It will produce simple line or bar charts.
If you have a suitable printer, hardcopies can be obtained via the operating
systems "print screen" facility. Your computer must be equipped with a graphic
monitor in order for you to use the Graphing Aid. The Graphing aid can be
instantly accessed directly from any of the SS1 applications.
.nf

To use the Graphing Aid:
- Display the data to be graphed on the screen. This can be done within any
  of the SS1 applications.
- Press shiftF8 to activate graphing. A list of commands will be displayed
  across the top of the screen.
- Use the arrow keys to move the cursor to the start of the row or column of
  numbers to be graphed, then press S to Start the run. The start of a row
  is its left edge, the start of a column is its upper left corner.
- Use the arrow keys to move the cursor to the right end of the row, or the
  lower right corner of the column, then press E to End the run. As you move
  the cursor a reverse video box will surround the row or column. If you
  make a mistake either back up with the arrows, or type esc.
- At this point you can define additional runs as described above. SS1 will
  position the cursor where it thinks you might want to start the next run.
- UseLastBox can be used to save keystrokes in defining runs after the first
  run. To use it, move the cursor to the start of a run, and instead of
  typing S to Start the run, type B. This will box in a run of the same size
  as the last one, and position the cursor at its end. If the run is the
  correct size, type E to accept it; if not, use the arrow keys to adjust it
  and then type E.
- After defining all of your runs, type G to Graph the runs. You will then
  be presented with a new set of choices that allow you to Draw the graph,
  define Titles, set up Axes, and select Line or Bar charts.
- To see what the graph looks like type D. A line chart with default axes
  limits will be displayed. Press any key to return to the graph menu.
- If you would rather have a Bar chart, press B, then D.
- If you want to add Titles, press T, and answer the questions.
- If you want to change the axis limits, type A, and answer the questions.
- Press Q to Quit graphing.

.fi
If your printer is supported by the DOS graphic print screen function
hardcopies of the graph may be obtained. 

To do this using an IBM PC, you must have run the GRAPHICS program before
running SS1 (the GRAPHICS program loads software into memory that is required
by the operating system to do a graphic screen print - see your operating
system manual). If the GRAPHICS program has been run pressing shift PrtSc will
print the graph.

AN EXAMPLE SHOWING HOW GRAPHING WORKS HAS BEEN OMITTED FROM THIS
EVALUATION COPY MANUAL BECAUSE WE CAN'T DO GRAPHICS IN THE EVALUATION
MANUAL.

```
{% endraw %}

## ALL.DOC

{% raw %}
```
.ci \doc\intro.doc
.ci \doc\contents.doc
.ci \doc\overview.doc
.ci \doc\aids.doc
.ci \doc\fm.doc
.ci \doc\edit.doc
.ci \doc\comm.doc
.ci \doc\lm.doc
.ci \doc\print.doc
.ci \doc\ss.doc
.ci \doc\install.doc
.ci \doc\setup.doc
.ci \doc\supprn.doc
.ci \doc\perrpt.doc
.ci \doc\index.doc


```
{% endraw %}

## COMM.DOC

{% raw %}
```
.rm 80
.in 4
.ml 80
.bp 1
.he ||Communications||
.fo |||Page 5-$P|
.ce 
COMMUNICATIONS


.fi
This chapter explains the use of the communication and terminal emulation
capabilities in SS1.  You can use communications to make your computer emulate
a terminal as well as transmit files between the two systems.
.nf

The topics covered in this chapter are:

   - Introduction

   - Basic Functions

   - Summary of communication commands available

   - How to use communications

   - Full explanation of communication commands

Remember that help is available at all times when you are in communications
through the <shift> F1 and <shift> F2 keys.
.bp
Basic Functions

.fi
Since many remote systems expect to have a full 80 character by 24 line screen
available, only the 25th line is used by SS1. The 25th line provides a list of
available commands. Expanded explanations are available through use of the
<shift> F1 and <shift> F2 keys. The commands are activated by pressing the <alt>
key, then the highlighted letter of the desired command, then release the keys.
Function keys were not used to make them available to the host.

The lower right hand corner of the screen displays the status of the
communication line as well as other messages.
.nf


+-- Sample Communications Screen -----------------------------------------+
   Your
         Data                                                                 
                                                                              
               Both                                                           
                                                                              
                  To                                                          
                                                                              
                     And                                                      
                                                                              
                        From                                                  
                                                                              
                            The                                               
                                                                              
                                Host                                          
                                                                              
                                     is                                       
                                         Displayed                            
                                                                              
                                                  HERE                        
SS1: sF1Help sF2Menu aSend aRec aDial aHangup aConfig aArrowLoc aLkbck Conn
+-------------------------------------------------------------------------+

.fi
At times you will be prompted for information in the top two lines of the
screen. When this occurs, the previous screen is preserved and will be
restored.

While in Communications, the <shift> function keys have their standard
functions: sF1 and sF2 are help keys, sF3 through sF8 are aids such as
calculator and spelling checker, sF9 will suspend communications, and sF10
will exit. See chapter 1 for more details. The <crtl> function keys will
learn text from the current cursor position to the end of the screen. The
<alt> function keys will send the text learned to them, to the host, as
though the text was entered at the keyboard; unless SS1 is prompting for
input then text will be used in the prompt. 

.bp 
.ce 
Command Summary

This section provides a quick reference of communication commands.  The last
section of this chapter provides complete descriptions for each command.
.nf

Starting Communications:
There are two ways to start communications.

From the main menu.
You Type:            Resulting actions:
C .................. The file SS1.CFG will be searched for on the default
                     drive. If found, the communication parameters will be
                     loaded from this file, and the communication port will
                     be initialized. If the file is not found, you will be
                     prompted for a configuration file.

J, <up/downarrow>,   This is used to restart a suspended communication
then S               session. The first S puts the cursor on the suspended
                     job list, move cursor to desired job, and type S to
                     start the job. Communications will resume from where it
                     was suspended.

Leaving Communications:
There are four ways to leave communications.

<shift>F10 ......... Normal Quit.
                     You will be offered the choice of disconnecting the
                     line before exiting or leaving with the line connected.

<shift>F9 .......... Suspend communications and return to the Main Menu or
                     DOS or execute a DOS level command. Use the Main Menu
                     option to suspend a communication session and return to
                     the Main Menu. This job will be added to the suspended
                     job list on the Main Menu for restarting later. The DOS
                     option allows you to suspend the communication session
                     and return to DOS. The next time SS1 is run, you will
                     be returned directly to the suspended communication
                     session. When Communications is suspended the current
                     screen will not be saved but the line will remain
                     connected. The execute a DOS command option will prompt
                     for the command to run, run the DOS command and then
                     return to communications. The screen will be restored
                     when communications is restarted.

Communication Commands:
The following commands can be entered during communications:

<alt>S ............. Send file to host.
                     Press <alt>S. You will be asked for a file to send,
                     <esc> will cancel send.

<alt>R ............. Receive file from host.
                     Press <alt>R. You will be asked for a file to save
                     received characters in and whether received characters
                     should be displayed. <alt>R will cancel a receive that
                     is in progress.

<alt>D ............. Dial/ Connect line.
                     <alt>D will dial the host using the phone number in the
                     configuration file if an autodial modem is present. If
                     no auto dial modem exists the line will be set for
                     connection.

<alt>H ............. Hangup/Disconnect line.
                     Press <alt>H. The communication line and port will be
                     disconnected.

<alt>C ............. Configure/Setup communication parameters.
                     <alt>C will allow modification of communication
                     settings. You will be given the option of reading in a
                     new configuration file or changing the current
                     settings.

<alt>A ............. Local/ Remote arrow keys.
                     <alt>A will allow you to toggle the arrow key usage
                     from sending the key value to the host to only moving
                     the cursor on the screen. The main use for local arrow
                     keys is to move the cursor to a screen location where
                     you want to learn text to a function key (<ctrl>Fn).

<alt>L ............. Lookback through received characters.
                     Use <uparrow> and <downarrow> to scroll backward and
                     forward through the received character buffer after
                     <alt>L is entered. Use <esc> to exit the command and
                     return to Communications.

.bp
.ce
USING COMMUNICATIONS

.fi
This section covers some of the more important things you will want to know
while using Communications.

Since there are many options for port parameters and key definitions, the
Communication program expects to read a configuration file. This file
defines the port parameters, key definitions, and host commands. Port
parameters set the communication port, such as, baud rate and parity. Key
definitions describe what value will be sent to the host when a key is
pressed such as, the arrow keys. Host commands are sent by the host to
perform screen control functions, such as, clear screen. Communications can
be started without a configuration file but the defaults probably won't work
for your application. Port parameters and key definitions can be modified and
saved within Communications but to change host commands a separate program
called SETUP must be used as explained in appendix 2.
.nf

Requirements
.fi
To use Communications your system must have a communication port. This port
can be connected to a modem, directly connected to another computer, or an
internal modem. If you are not using an internal modem the connection
between your PC and the modem or host must have the following lines
connected:
.nf
            Pin  2 - Transmit data to host
            Pin  3 - Receive data from host
            Pin  6 - Data set ready (used for line handshake)
            Pin  7 - Signal Ground
            Pin 20 - Data terminal ready (required for modems)

Starting Communications
.fi
When Communications is started from the Main Menu the configuration file
SS1.CFG will be read in from the default drive. If you connect to different
hosts and you don't want a default configuration to be loaded, delete the
file SS1.CFG. You will then be prompted for the configuration file when
Communications begins:
.nf

.pb 6
+----------------------------------------------------------------------+
| Enter configuration file name - sF1 for help or esc for defaults
| >
|
| SS1.CFG does not exist


.fi
Enter the name of the configuration file to use then <ret>. Pressing <esc> will
start Communications with the default values.

While in Communications, the configuration can be modified with the configure
command (<alt>C). If you make changes that modify the port settings (port
number, baud rate, etc.), the line should be disconnected before running
setup.
.nf

Leaving Communications
There are four ways to exit Communications:

<shift>F10     This is the normal exit and provides the option of
               disconnecting the line before exit:

.pb 4
                 +------------------------------------------------------+
                 | Disconnect line before exit - Yes or No
                 | esc or sF1


               Type Y to exit and disconnect line or N to exit without
               changing line status. <esc> can be entered to return to
               Communications.

<shift>F9      This exit will suspend the current Communication session. You
               have the option of returning to the Main Menu of SS1 or DOS
               or executing a DOS level command. If you suspend to DOS or to
               the SS1 Main Menu the communication line will remain
               connected but characters received while Communications is
               suspended will be ignored and the screen display will not be
               restored when you return to communications. If you suspend to
               run a DOS command characters received while the command
               executes will be placed in a buffer. When you are returned to
               communications the screen will be restored and characters
               received will be displayed.

.pb 4   
               +--------------------------------------------------------+
               |  Suspend to SS1 Menu or DOS or eXecute DOS Command or esc
               |  sF1=Help


               Type S to suspend and return to the Main Menu, D to suspend
               and return to DOS, X to execute a DOS level command, or <esc> 
               to return to Communications.


Helpful Hints
.fi
Most problems will occur from the configuration file having the wrong
information or the wrong cable connections. This can cause connection
failures, garbled data, and other odd behavior. Appendix 2 describes all
values that are entered in the configuration file and how to modify existing
values.

There are several configuration files supplied with SS1:
.nf

    TTY.CFG - This file can be used for systems that do not require screen
              control functions. Most time share services will use this
              configuration.
  VT100.CFG - This file allows emulation of a Digital VT100 terminal.
    931.CFG - This file allows emulation of a Texas Instruments 931
              terminal.

To use Communications for the first time you must first determine several
parameters for the host:
      Baud rate - If a modem is used the baud rate must match your modem
                  baud rate. Most systems are 2400 or 1200.
      Parity    - Most dial up systems use NONE. 
      Echo      - Most hosts will echo the characters they receive which
                  would require the value set to NO.
      Stopbits  - Most dial up systems use 1.
      Bits per
      Character - Most dial up systems use 8.
      Handshake - If you use a modem XON is required.
.fi
Once these setting are known you can use the TTY configuration file and the
configure command (<alt>C) to set the required values. It would be a good idea
to save the modified settings to a new configuration file. At this point you
should be able to logon to the host. If some keys need to send different values
to the host, use the setup command to modify the key definitions. 
.nf

The learn keys can be very useful during Communications, for example:
      - frequently used commands can be learned to function keys.
      - file names and other information can be learned to a key.
      - values can be copied from anywhere on the screen to answer prompts
        or edit files.

.fi
The host can send commands to use the graphics available on the computer. To
use graphics, an initialize command is sent. This sets up graphic parameters
and turns off scrolling. To turn scrolling back on the stop graphics command
must be sent. Graphics can be performed after the stop command is sent,
although text scrolling will occur. Commands are available to draw lines,
change color, write text, and erase the screen. See appendix 2 for an
explanation of graphic command formats.

All of the SS1 aids are available during Communications (spell, calculator,
etc.). When you are in an aid incoming characters are saved in a buffer
rather than displayed on the screen. Received characters will remain in the
buffer until you exit the aid. To avoid overflowing the buffer (about 50,000
characters) you should only enter aids when a limited number of characters
are expected from the host.

The local/ remote arrow key command (<alt>A) can be useful to learn keys
when you are on a host that requires arrow keys but will not allow you to
move your cursor to any location on the screen. Press <alt>A to switch to
local arrow keys (screen will display aArrowRem). Move the cursor to the
location of the text to be learned to a key. Press <crtl>Fn to learn the
text. Move the cursor back to its original position and press <alt>A to
switch back to remote arrow keys (screen will display aArrowLoc). The text
will now be learned to the key without the host knowing the cursor was
moved.

With the suspend capabilities in SS1, it is possible to be online to multiple
hosts at the same time. You could, for instance, receive data on port 1 from
one host, and then send this data to another host connected to port 2.

If you are on line to multiple hosts, you must be careful not to disconnect
the wrong line. For example if port 1 is in the default configuration file,
each time you start a new Communication job port 1 will be initialized. If
port 2 is to be used in a second Communication job, go directly to setup to
change to port 2 without giving the disconnect command. 
.nf

.bp 
.ce 
FULL COMMAND DESCRIPTIONS

This section contains full explanations of all Communication commands.

<alt>S - Send command
Purpose:   To send a file on your PC to the host.

Usage:     Before running this command, the host must be ready to accept the
           data in the file. This can be done by running a program on the
           host designed for file transfer or placing an editor on the host
           in the insert mode. 

           Press <alt>S. You will be prompted for a file to send to the
           host.

.pb 4
           +----------------------------------------------------+
           |  Enter file name to send or esc to return or sF1 for help
           |  >


           Enter the name of the file to send then <ret> or <esc> to cancel
           send.

           The file will be sent as though the characters in the file were
           typed at the keyboard.

           The send can be stopped at any time by pressing the <esc> key. No
           other characters can be typed until the file is sent or canceled.

           When the file is transferred a message will be displayed and you
           will be returned to Communications.


<alt>R - Receive command
Purpose:   To receive a file from the host.

Usage:     This command will store all characters received from the host in
           the file specified. Before running this command, the host should
           be ready to send (but not sending) the file. This can be done by
           entering the command to display a file or running a file transfer
           program. 

           Press <alt>R. You will be prompted for a file in which to receive
           the characters.

.pb 4
           +---------------------------------------------------------
           |  Enter file name to receive data from host or esc to return
           |  >


           Enter the name of the file to receive characters then <ret> or
           <esc> to cancel receive. If the file exists, you will be given
           the option of replacing or appending the file.

           Next you will be asked whether to display received characters.

.pb 4
           +---------------------------------------------------------
           |  Display received characters
           |  Answer Yes or No,   or sF1=Help
           |

           If you answer Y, characters will be displayed as they are
           received. If you answer N, a count of characters received will be
           displayed. Use no to send files that can not be printed, such as
           program files.

           At this point you should tell the host to start sending the file.

           Communications will continue as before until the buffer fills.
           Then a command will be sent to the host to stop sending
           characters. The buffer will be written and communication will
           continue until the buffer fills again. <shift>F9 and <shift>F10
           are not allowed at this time since the receive must be stopped
           before Communications can be exited. The receive can be stopped
           at any time by pressing the <alt>R key.

           When the receive is stopped, a message will be displayed and you
           will be returned to Communications.

<alt>D - Dial/ Connect command
Purpose:   To dial a host (if an autodial modem is present) or prepare the
           communication port for connection.

Usage:     Press <alt>D.
           If no autodial modem exists (defined in configuration file) the
           communication port will be initialized for connection.

           If an autodial modem is present, the phone number to dial will be
           displayed on the screen. As information is received from the
           modem, it will be displayed on the screen. The screen will remain
           this way until a call is completed or a key is pressed on the
           keyboard. If the call is completed, the screen will blank and you
           will be returned to Communications.

           If a key is pressed to exit the dial command, you should press
           Hangup (<alt>H) to cancel the call otherwise the call attempt
           will continue.

<alt>H - Hangup/Disconnect command
Purpose:   To disconnect communication line and turn off communication port.

Usage:     This command will hang up modems or make the computer appear to
           be turned off for direct connect lines.

           Press <alt>H.
.pb 4

           +---------------------------------------------------------
           |  Disconnect the line now
           |  Answer Yes or No,   or sF1=Help
           |

            Type Y to disconnect the line or N to cancel the command.


<alt>C - Communication parameter setup command
Purpose:   To change the communication parameter definition.

Usage:     This command is used to configure the values defined for
           communication parameters. This includes port setup, key
           definitions, and host command definitions.

           Press <alt>C. You will be asked if you want to read in a new
           configuration file or modify the current values.

.pb 4
           +---------------------------------------------------------
           |  Read in new configuration file or Change current settings
           |  Answer R, C, esc, or sF1
           |

           If you enter R, you will be asked to enter the new configuration
           file name.

.pb 4
           +---------------------------------------------------------
           |  Enter configuration file name or esc to exit
           |  >
           |

           Enter the name of the new configuration file or esc to return to
           Communications.

           If C was entered to the change current settings prompt, the
           following screen with current values will be displayed.

.pb 16
           +--------------------------------------------------------------
           | Enter new values F1 when done or esc or sF1 for help
           |
           | Communication port                    1 2 3 : 1
           | Baud Rate 300 600 1200 2400 4800 9600 19200 : 1200
           | Parity                        None Odd Even : NONE
           | Echo typed characters                Yes No : YES
           | Number of stop bits                     1 2 : 1
           | Number of bits per character            7 8 : 8
           | Handshake method                    XON LINE: XON
           | Auto dial modem                      Yes No : YES
           | Phone Number                    Use 0-9 - + : 941-4567    
           |
           | Arrow key use                   LOCAL REMOTE: LOCAL
           | Use printable command character       Yes No: NO
           |

           Note: The parameters displayed for your computer maybe different
                 depending on it's hardware configuration.

           Change values as required using <up/down arrow> and <ret> to move
           on the screen. The value entered must be in the list of
           acceptable values on the left. Appendix 2 explains the meaning of
           each field. Press F1 to go on to the next screen or esc to exit.

.pb 22
+-------------------------------------------------------------------------
|Enter the ASCII characters (hex value) to send to the HOST
|when the following keys are pressed - F1 to exit - or esc
|
|Right arrow : 1B 43 __  F1        : 1B 50 __ Tab   : 0D __ __  ctrl A: __ __ __
|ctrl  Right : 1B 69 6F  F2        : __ __ __ BkTab : 09 __ __  ctrl B: __ __ __
|left arrow  : __ __ __  F3        : __ __ __ CarRet: __ __ __  ctrl C: 03 __ __
|ctrl Left   : __ __ __  F4        : __ __ __ alt O : 1B __ __  ctrl D: 04 __ __
|Home        : __ __ __  F5        : __ __ __ alt A : 1B 69 31  ctrl G: 07 __ __
|ctrl Home   : __ __ __  F6        : __ __ __ alt B : __ __ __  ctrl L: 0C __ __
|End         : __ __ __  F7        : __ __ __ alt D : __ __ __  ctrl N: 0E __ __
|ctrl End    : __ __ __  F8        : __ __ __ alt F : __ __ __  ctrl Q: 11 __ __
|Pgdn        : __ __ __  F9        : __ __ __ alt J : __ __ __  ctrl S: 13 __ __
|ctrl Pgdn   : __ __ __  F10       : __ __ __ alt R : __ __ __  ctrl T: 14 __ __
|Pgup        : __ __ __  Up        : 08 __ __ alt S : __ __ __  ctrl U: 15 __ __
|ctrl Pgup   : __ __ __  Down      : __ __ __ alt T : __ __ __  ctrl X: 18 __ __
|BackSpc     : __ __ __  Ins       : 0A __ __ alt U : __ __ __  ctrl Y: 19 __ __
|ctrl Bkspc  : __ __ __  Del       : __ __ __ alt X : __ __ __  ctrl Z: 1A __ __
|ctrl PrtSc  : __ __ __  esc       : __ __ __ alt Z : __ __ __  ctrl @: 00 __ __
|

           Note: This screen will vary for different PC's.

           Each of the keys listed to the left of the colon can send from
           zero to three characters to the host when pressed. This allows
           emulation of a variety of terminals with function keys and other
           special characters. Values are the ASCII code in hex (A = 41).

           Use <up/downarrow> to move up and down within the screen. Use 
           <ret> to move to the right. Use F1 to continue or <esc> to leave
           screen without accepting changes.

           In the example screen above, the right arrow key will send <esc>
           C, ctrl right arrow key will send <esc> i o, and left arrow will
           not send any characters.

           When you exit this screen, you will have the option of saving the
           new configuration to a file or just returning to Communications.
           With either choice, the new settings will be in effect when
           Communications is entered.

.pb 4
           +---------------------------------------------------------
           |  Save settings in file and return or Return to terminal
           |  Answer S, R, esc, or sF1
           

           If you answer S you will be prompted for a file to save the new
           configuration in.

.pb 4
           +---------------------------------------------------------
           |  Enter configuration file name or esc - sF1 for help
           |  >
           |

           Enter the new configuration file name then <ret> or <esc> to
           return to Communications without writing a new file. If the file
           currently exists, it will be replaced. 

<alt>A - Local/ Remote arrow keys Purpose: 
           To toggle between arrow keys used locally or by the host.

Usage:     In Communications the arrow keys can have two different meanings.
           They can be used locally to only change the cursor location on
           the screen. Or they can be used remotely where they send defined
           characters to the host. If you are not emulating a terminal that
           has arrow keys, you will probably want them to be local at all
           times.

           This command is useful when using a host that requires arrow keys
           but will not allow easy movement to any screen location.

           Press <alt>A. The key definition will toggle between local and
           remote use.

           Note: The bottom line displays which mode will be activated by
                 pressing <alt>A. Therefore, if RemArrow is displayed,
                 pressing <alt>A will set arrow keys to remote and vice
                 versa.

<alt>L - Look back through received characters
Purpose: Allows viewing of characters that have scrolled off the screen.

Usage:     This command is used to scan back through received characters to
           look at previous information.

           Press <alt>L. The following line will be displayed on the bottom
           of the screen.

.pb 4
           |
           |  Use   to scan characters cF1..8 learn top line - esc to exit
           |
           +---------------------------------------------------------

           Use the <up/downarrow> to move through the buffer of received
           characters. Each time you press a key, the top line of the screen
           will scroll to the next/ previous line feed or terminal command
           character. <ctrl>F1 through <ctrl>F8 can be used to learn the
           top line of the screen to a function key. All of the aids are
           also available (calculator, save screen, etc.). Press <esc> to
           return to Communications.


```
{% endraw %}

## CONTENTS.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.he ||Contents||
.fo |||Page iii|
.CE
TABLE OF CONTENTS
.nf
                                                            Chapter
OverView of SS1                                                1
       - Running SS1
       - The Main Menu
       - Help
       - Edit Keys
       - Learn Keys
       - Key Recorder
       - File Placement (Drives)
       - Recover

Aids                                                           2
       - Calculator
       - Spell and list lookup
       - Files
       - Save Screen to File
       - Graphing

File Manager                                                   3
       - Introduction
       - File Manager Commands
           - File Commands
           - Show File Commands
           - Multi File Commands
           - Directory Commands
Editor                                                         4
       - Introduction
       - Summary of Edit Commands
       - How to use the Editor
       - Full Explanation of Edit Commands

Communications and Terminal Emulation                          5
       - Introduction
       - Basic Functions
       - Summary of Commands
       - How to Use Communications
       - Full Explanation of Commands

List Manager                                                   6
       - Introduction
       - Summary of Commands
       - How to Use the List Manager
       - Full Explanation of Commands

Print and Format                                               7
       - Introduction
       - Commands
       - How to Use the Print Formatter
       - Printer Support

Spreadsheet                                                    8
       - Introduction
       - Summary of Commands
       - How to Use the Spreadsheet
.bp
Appendices:
Installation                                                   1
Setup for screen, communications, and printers                 2
List of supported printer                                      3
Emulator Key Definitions                                       4
.fo |||Page iv|

```
{% endraw %}

## EDIT.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1
.he ||Editor||
.fo |||Page 4-$P|
.ce
TEXT EDITOR


.fi
This chapter covers the Editor. The Editor is used to create text files. These
files can be programs, letters, reports, tables etc. You will probably find
that the easiest way to learn to use the Editor is to start it up and
experiment with it as you read over this chapter.

.nf
The topics covered in this chapter are:

   - Introduction

   - A Summary List of Edit Commands

   - How to Use the Editor

   - Full Explanations of Edit Commands

.fi
Remember that help is available at all times when you are in the Editor 
through the <shift> F1 and <shift> F2 keys.


.bp
.fi
The top two lines, and bottom line of the screen are used to display Editor
commands.  In addition, pressing the help keys, <shift> F1 and <shift> F2,
provide expanded explanations of the commands.  These two features should
minimize any need to refer to this manual.

The commands listed on the top line of the screen (aFind etc) are activated by
pressing the <alt> key, then the first (highlighted) letter of command, then
releasing the <alt> key.

A "Ruler" is provided on the third line of the screen.  The Ruler shows column
positions, tab settings, and the right margin.  These ruler settings are
changed by using the set ruler command (F7). 

.nf
.pb 21
+--- Sample Editor Screen -------------------------------------------------+
Edit: aFind aReplace aView aBottom aTop aInsFile aOops aStats aUpdate aJust
sF1help sF2Help on Quit & Aids   cFN,aFNSto/RecallKey
....|.T..1....|.T..2....|T...3....|.T..4....|..T.5....|T...6....|T...7....|.R..8.
                                                                                 
                                                                                 
                                                                                 
     The text you are                                                            
                                                                                 
                        editing appears here.                                    
                                                                                 
                                                                                 
                                                                                 
        Don't forget that shiftF1 provides all kinds of Help!                    
                                                                                 
                                                                                 
                                                                                 
                                                                                 
                                                                                 
F1SelBlk F2BlkCmds F3InsLn F4Join F5Dup F6Rpt F7Rulr F8Bold F9Loca F10DelLn
+--------------------------------------------------------------------------+
.fi


The Editor is a "screen" editor, meaning that text is entered by simply moving
the cursor to a location (using the arrow keys, tab etc), and typing the text
in. Text can be typed in a "type over" mode or "insert" mode. Pressing the
<ins> key alternates between the two modes. When you are in the insert mode the
cursor looks like this =, and when in typeover mode it looks like this _. When
you are in the insert mode, text on the line to the right of the cursor is
pushed over to make room for the typed text. In the type over mode, the new
text replaces the old.

The bottom line of screen is also used to display messages and warnings.
.nf

Limitations:
.fi
The maximum file size that can be edited is 60,000 characters (about 30 pages).
As you approach this limit a LOW MEMORY warning will be displayed. If you
actually reach the 60K limit, you will not be allowed to use any commands that
add text to the file. The best way to handle long documents that would exceed
this limit is to put each chapter in a separate file, and then use the
include file feature of the Print/Format application to combine them at print
time.

The maximum line width allowed in the Editor is 200 characters.
.nf

File Compatibility:
.fi
The files produced by the Editor are completely compatible with the files
produced by the List Manager (and viceversa). For example, a table created
in the Editor can be sorted or column edited in the list manager without
running any conversion utilities.  The Spreadsheet files are not directly
compatible with the editor files, but the Spreadsheet provides
commands for exporting data to the editor, and importing edit files to the
Spreadsheet
(see the Spreadsheet Print
and Insfile commands).
.bp 
.nf 
.ce 
Editor Command Summary

This section provides a quick reference summary of edit commands.  The last
section of this chapter provides complete descriptions for each command.

Starting Editor:
There are three ways to start the Editor.

You Type:              Resulting actions:
E ...................  From the main menu. Type E. You will be prompted 
                       for a file name to edit.

<up/downarrow>, .....  From the File Manager, move cursor to file to edit,
then E                 type E, type <ret> if file name displayed is correct.

J, <up/downarrow>, ..  Restarting a previously suspended edit from the
then S                 suspended job list in the main menu.  The J  puts
                       the cursor into the suspended job list; move the
                       cursor to the desired job; type S to Start that job.

Leaving the Editor:
There are 3 ways to leave the Editor.

<shift>F10 ..........  Normal Quit.
                       You will be offered these choices for the
                       disposition of your data:
                       Save     - Use the data in memory to replace the
                                  file you entered the editor with.
                       Newfile  - Save data in memory to a new file.
                       Quit     - Do not save data in memory.

<shift>F9, SS1 Menu .. Suspend edit, and go to SS1 main menu.
                       The edit you have in progress is added to the
                       suspended job list, and you are returned to the SS1
                       main menu.
<shift>F9, DOS ....... Suspend edit, and execute a DOS command.
                       The edit you have in progress is added to the
                       suspended job list, SS1 is terminated, and you are
                       returned to DOS. Next time you start SS1 the
                       suspended edit can be restarted from the suspended
                       job list. 
<shift>F9, eXec .....  Suspend edit, and eXecute a DOS command. The edit you
                       have in progress is suspended, you are prompted for
                       the DOS command or program to run. After the program
                       executes, you are returned to the edit. SS1 remains
                       in memory during the process, so the return to the
                       edit is rapid.

Cursor Moving Keys:
The following keys move the cursor around on the screen.

You Type:              Resulting Cursor Move:
<up arrow> ..........  Up one line
<down arrow> ........  Down one line
<left arrow> ........  Left one column
<right arrow> .......  Right one column
<home> ..............  To first non-blank character of the line
<home><home> ........  To first column of line
<end>  ..............  To end   of line
<ctrl>A .............  Left one word
<ctrl>S .............  Right one word
<ctrl>Q .............  To top of screen
<ctrl>Z .............  To bottom of screen
<ctrl><pgup> ........  Move cursor to start of paragraph.
<ctrl><pgdn> ........  Move cursor to end   of paragraph.
<ret> ...............  Move cursor to start of next line.  If in insert
                       mode, insert a new line below current line.

Commands To Move Through the File:
The following keys and commands are provided to move to different locations
in the file.

You Type:              Resulting Move:
<pgdn> ..............  Scroll down in file 12 lines.
<pgup> ..............  Scroll up   in file 12 lines.
<ctrl><left arrow> ..  Scroll screen 20 columns to left in file.
<ctrl><right arrow>..  Scroll screen 20 columns to right in file.
aBottom .............  <alt>B - move to bottom (end) of file.
aTop ................  <alt>T - move to top  (start) of file.
F9 ..................  Move to the start or end of selected text block, or
                       move to last "memorized" location, or "memorize" a
                       new location. 
aView ...............  <alt>V Scroll screen so that the cursor is at mid
                         screen.

Text Entry and Edit Keys:
.fi
The following keys and commands are available to enter text, delete text, or
modify the appearance of text.
.nf

You Type:              Action Performed:
<ins> ...............  Alternate between typeover and insert modes.
                       In insert   mode the cursor looks like this =.
                       In typeover mode the cursor looks like this _.
<del> ...............  Delete the character under cursor.
altD ................  Delete the word under cursor.
<ctrl><end> .........  Delete text from the cursor to the end of the line.
F10 .................  Delete the current line.
F3  .................  Insert a new line at the cursor position. If the
                       cursor is at the start of line a blank line results.
                       If cursor is in mid-line, the line is split into two.
F4 ..................  Join the next line of text onto the current line.
F5 ..................  Copy a word from the line above to the current line
                       starting at the cursor position.
<ret> ...............  Move cursor to start of the next line.  If in insert
                       mode, insert a new line below current line.

Block Commands:
.fi
The following commands are available for copying, moving, deleting or writing
blocks of text to a file.  The block must be selected (using F1) before block
commands can be used.
.nf

You Type:              Action Performed:
F1 .................   Select block to operate on.
                       Move cursor to start of block, press F1.
                       Move cursor to end of block, press F1 again.
                       
F2 .................   Select block using F1 (above).
                       If doing a move or copy, move cursor to the
                       destination. Press F2, type C for Copy, M for Move, D
                       for Delete, or P for Put to a file.

Find and Replace:
.fi
The following commands are available to find a text word or phrase, and/or
replace it with another.
.nf

aFind ..............   <alt>F - Find a word or phrase in the file. Options
                       include direction of search, and closeness of match.

aReplace ...........   <alt>R - Replace a word or phrase in the file 
                       with a new one. Options include direction of search,
                       exactness of match, verification and number of
                       occurrences to replace.

Insert File:
aInsFile ...........   <alt>I - Insert a disk file at the current cursor
                       location. You will be asked for the name of the file
                       to be inserted.


Update File:
aUpdate .............  <alt>U  Save the data being edited to either the
                       file you entered with, or a new file. This command
                       takes only about 3 seconds to complete, and restores
                       your exact position in edit. It should be used often
                       to avoid any chance of data loss.


Justify:
.fi
This command allows you to change the left and right margins of paragraphs
after the paragraph has been entered, or to "straighten up" the margins on a
paragraph after text additions have made it uneven.
.nf

aJustify ............  <alt>J - This is a 3 step process.
                       1. Set the right margin (F7) to the desired column.
                       2. Move the cursor to upper left corner of paragraph.
                       3. Press aJustify. Choose whether paragraph is to be
                          justified from the start of the paragraph, or only
                          from the cursor down. See the detailed command
                          explanations for more.

Auto Indentation:
F7 ,then "A" ........  Toggle "auto indent" mode. The current mode is
                       displayed in set ruler (F7).


Bold, Underline:
F8, then "B" or "U"..  Underline or emphasize (bold) text. Move the cursor
                       to start of text. Press F8. Press "B" for bold, "U"
                       for underline. Move the cursor to the end of the
                       text. Press F8. Press "B" or "U" again.

Aids:
These aids are always available in SS1.  See the Aids Chapter for more detail.

<shift>F3  ..........  Activate the ever ready  four function calculator.
<shift>F4  ..........  Activate the spell, phone list and Ascii table aids.
<shift>F5  ..........  Save the data now on the screen to a file.
<shift>F6  ..........  List or change the learn keys.
<shift>F7  ..........  Run the files utility, which lists directories, shows
                       or deletes files.
<shift>F8  ..........  Graph rows or columns of data from the screen.

Learn Keys:
<ctrl>F1 thru .......  The text from the current cursor position to the
  <ctrl>F8             end of the line is learned to the pressed key.

<alt>F1 thru  .......  The text that was previously learned to the pressed
  <alt>F8              key is inserted or overtyped at the current cursor
                       location.
<shift>F6 ...........  List or change the learn keys.

Record/Playback Keys:
<ctrl>F9,F10 ........  Start the keystroke recorder.
<alt>F9,F10  ........  Play back the keystroke recorder.

Print Formatter Commands:
.fi
The following list of Print Formatter commands can be imbedded in your
document to control the format of the printed file. The chapter on the print
formatter provides more detail.  An editor help screen is provided to remind
you how the formatter commands work.
.nf

Command   Default   Function
  .bp n   n=+1      Page break,begin page n
  .ce n   n=1       Center next "n" lines
  .fi               Start automatic formatting of text into paragraphs.
  .nf               Stop  automatic formatting of text into paragraphs.
  .br               Cause a break (ie an end of paragraph)
  .fo |left|center|right|   Page footer
  .he |D$|SS1 User Manual|Page $P|    Page header title, with date and pg #
  .in n   n=0       Indent n spaces
  .ls n   n=1       Line spacing is "n" (eg n=2 is double spacing)
  .nf               Stop filling
  .pl n   n=66      Set page length
  .rm n   n=68      Set right margin
  .ml n   n=80      Maximum line length, longer lines will be cut off
  .sp n   n=1       Space down "n" lines (leave n blank lines)
  .ti n   n=0       Temporary indent n
  .ps n   none      Send a user defined text string to printer (to activate
                    a special feature).
  .ci file name     Start reading input data from file name
  .ml n             Set maximum printer line width to n (prevents wraps)
.bp
.ce
Using The Editor

.fi
This section covers some of the more important things you will want to know in
using the Editor.
.nf

Starting The Editor
There are three ways to start the Editor.

.pb 8
Starting an Edit from the Main Menu:
Enter the "E" choice from the main menu.  You will then be asked to enter a
file name to be edited:

    +--------------------------------------------------------
    | Enter Data File Name:                    or <esc>
    | >B:SAMPLE.FIL
    |
A default file name may be provided. If the default name is correct, just
press <ret>, if not, then edit it into the correct name using the edit keys
then press <ret>.

.pb 6
If the file does not exist, the following prompt will be displayed:

    +--------------------------------------------------------
    | No such file, Create it?
    | Answer Yes or No,    or sF1 for help
    |
If you want to start a new file type "Y", if you accidentally entered a
wrong file name, then type "N".

Starting the Editor from the File Manager:
If you wish to edit a file directly from the file manager, move the file
manager cursor to the file to be edited and type an "E". From there on the
interaction is just as it would be if the edit had been started from the
Main Menu.

Restarting Suspended Edits:
Edits that have been suspended will appear on the suspended jobs list that
appears on the main menu. To restart such an edit, type "J" to put cursor in
the Suspended job list, then move the cursor to the edit using the arrow
keys, then type "S" to reStart the edit.



Saving Data
When you begin editing a file, a copy of the file is read into memory. All
of the changes you make during an edit session are made only to the "in
memory" copy until you request that the file itself be updated. This means
that if the computer or the program should die, or you accidentally delete
some of the text, or the cat walks over the keyboard, all of the changes you
have made since the last update could be lost.

The aUpdate command is provided to make the updating of the file a very
painless and fast process - using the aUpdate command saves your data and
returns you to the edit right where you left off, in about 3 seconds. To use
update, type <alt>U. The following will appear:

.pb 4
   +--------------------------------------------------------
   |  Update and Return: Save, save data to a New file >
   |  <esc> returns to edit, sF1-Help

Enter S if you just want to update the file you entered the edit with. Enter
N if you want to save the in memory copy of your data to another file. It is
a good idea to do a Save to a backup copy every once in a while. (preferably
to a separate diskette).


Leaving The Editor
There are three ways to leave the Editor.

The Normal Exit:
.fi
The normal exit of the Editor is used when you have completed your edits, and
will not be editing the file again soon.
Type <shift>F10.  The following prompts will be displayed:
.nf

.pb 4
   +--------------------------------------------------------
   | Quit Edit: Save, save to New file, Quit without saving data >
   | <esc> returns to edit,  sF1-Help
   |
Type "S", "N", or "Q".
Use S if the in memory copy of your data is to replace the file you entered
with.
Use N if the in memory copy of your data is to be saved to a new file.  In
this case you will be prompted for a file name.
Use Q if the in memory copy is to be discarded.  Any changes made since the
last time the file was saved will be lost.

Suspend Edit to SS1 Main Menu:
.fi
This useful feature allows you to put your edit on hold while you run some
other SS1 utility, or edit another file.
Type <shift>F9, and answer S for SS1 Main
Menu. Your data file will be updated, and your position in the file and edit
environment will be saved. The edit will be added to the suspended jobs list on
the Main Menu. If you restart the edit later, you will be returned to the same
place in the file, and all edit settings (margins, modes etc) will be restored
to what they were at the time of the suspension. No data will be lost if the
edit is never restarted, because the data is saved as part of the suspend
process.

.nf

Suspend Edit, Return to DOS:
.fi
This option allows you to put your edit on hold while you exit to DOS to run
some DOS commands. Type <shift>F9, and answer D for DOS. Your data file will be
saved, your position in the file and edit environment will be saved, and SS1
is terminated.  The next time
SS1 is started the edit can be restarted from the SS1 suspended job list.
You will be placed back in the edit just where you left it. No
data will be lost if the edit is not restarted, as the data is saved as part of
the suspend process.  SS1 is not retained in memory under this option, so
startup takes longer than the eXec option (below), but less memory is
required.
.nf

Suspend Edit, eXecute a DOS Command:
.fi
This option allows you to put your edit on hold while you exit to DOS to run
a DOS command. Type <shift>F9, and press X to eXecute the DOS command.  Enter
the name of the DOS command or program to run.
Your data file will be, and the DOS command is run.  When the DOS command
completes, you are returned to the edit just where you left.  Since SS1 is
retained in memory during this process, the edit is restored faster than the
DOS option described above, but you must have sufficient memory for SS1 and
the DOS command to be in memory together.
.nf

Entering Text
.fi
For the most part, to enter text just move the cursor to the desired location
and begin typing. If you are adding new lines, use the insert mode (press <ins>
until the cursor looks like this =. When you are in insert, a new line will
be added each time you press <ret>.

Some hints are provided below for the use of some of the special features of
the Editor, and for entering certain types of text.
.nf

The <ret>, F3 and F4 keys:
.fi
The <ret> key behaves somewhat differently in this Editor (better we think)
than in some other editors.
.nf

.fi
In typeover mode, typing a <ret> moves the cursor to the start of the next
line. In the insert mode, typing a <ret> creates a new blank line below the
current line. The cursor is placed in column one if "auto indent" is off, or to
the column under the first character of the current line if "auto indent" is
on.

Pressing the <ret> key never inserts a carriage return character in the file,
(ie never breaks the line) - it is used only to move the cursor to the next
line.

The F3 key is provided for cases in which the current line needs to be broken
into two lines. To use it, move the cursor to the column where the break is to
occur, and type F3.

The F4 key joins the next line to the end of the current line (the opposite
of F3).
.nf

Learn Keys:
.fi
The learn keys (see chapter 1) can be used to save up to 10 frequently used
words or phrases up to 80 characters each.  For instance, a key could be
learned to:
.nf
   SUBROUTINE
   or
   FOR I = 1 TO 20 DO
   etc.
and recalled each time one of these phrases is to be entered.

.fi
The learn keys are also useful for moving small amounts of text around, or for
replicating a word or phrase in a number of places.

To learn text on the screen to a learn key, move the cursor to the start of the
text to be learned, and type <ctrl>F1 through <ctrl>F10 - the text following
cursor will be learned to the pressed key. 

To recall previously learned text, move the cursor to the location that the
text is to be recalled, and press <alt>F1 through <alt>F10 - the text that was
previously learned will be recalled. It will be typed over or inserted
according to the mode you are in.
.nf

Auto Indent:
.fi
Programmers using languages that encourage indentation of source code for
clarity (eg Pascal, C etc) will want to:
.nf
  1) Set the tab interval to a convenient value (eg F7,4).
  2) Turn auto indent on, (F7, "A" toggles auto indent mode).
  3) Enter insert mode.
.fi         
This will result in the cursor being returned to the indent level of the
current line each time a <ret> is pressed.  To increase or decrease the indent
level, type a tab or back tab.

"Auto indent" is also used to type indented paragraphs of straight text. See
the section below on typing reports, memos etc.
.nf

Duplicate Line Above:
.fi
The F5 key can be quite useful when you need to type in two or more lines that
are similar. Type in the first line, then position the cursor under the first
line, each press of the F5 key will copy a word from the line above onto the
current line starting at the cursor position. This feature is often useful in
writing programs or in typing tables of data.
.nf

Memorizing Locations:
.fi
The F9 key can be used to memorize a location in the file to which you may
want to return to later. To do this, type F9, and select the Memorize option.
To return to this location later, type F9 and <ret>. F9 can also be used to go
to the start or end of the "marked" block of text if there is one.
.nf

Letters, Memos, Reports
.fi
The Editor provides some wordprocessing capability and can be used to produce
respectable looking documents (this one for instance).
.nf

To Enter New Paragraphs of Text:
.fi
Go into insert mode by pressing the <ins> key until the cursor looks like
this =.  Set the right margin to the right edge of the paragraph (F7).

Type in the text. When you reach the right margin a "word wrap" will occur,
this means that your cursor is moved to the start of next line, and if the last
word typed would extend over the right margin, it is moved to the next line.
.nf

To enter indented paragraphs:
.fi
Set "auto indent" on by typing F7 and pressing "A" until it says "auto indent"
is on. Make certain that the right margin is set correctly, and that you are in
the insert mode (see above). Move the cursor to the left margin for the
paragraph. Type in the paragraph. Each line will wrap back to the column in
which the paragraph was started.
.nf

To add text to an existing paragraph:
.fi
To insert text in the middle of a paragraph, follow these steps. Move the
cursor to the location at which the text is to be inserted. Type F3, this will
move the remaining text on the line to the next line. Type the new text. If
the added text exceeds the line length, it will be wrapped. After all of the
new text is typed in, press <alt>J (aJustify) - this will justify the
paragraph between the right and left margins. If you choose the Cursor option
of the justify command, the paragraph will be justified only from the cursor
to the end of the paragraph, and the left margin will be set to the column of
the cursor. See the detailed description of the justify command.
.nf

To type hanging indent paragraphs:
.fi
Do the following to enter hanging indent paragraphs.  Type in the first line
of the paragraph, end it by typing a <ret> (don't let it wrap).  Tab over to
the desired indent level for the rest of the paragraph, and type the rest of
the line of the paragraph allowing each line of the paragraph to wrap to the
indent level of the second line.
.nf

                                                      +- end the first line
                                                      |   with a <ret>.
          This is a sample hanging indent paragraph to
                  show how it could be done.  End the
tab over          first line with a <ret> and space over
to here  -------  to here.                             |
after first                                            |
line is entered.                                       +- right margin.

Print Formatter Commands:
The print formatter (the "P" choice on the main menu) offers a number of
additional capabilities, including:
   - Page headers and footers with page numbering and time/date stamping.
   - Left and right margins control that is more flexible than
     that which is described above.
   - Right justification.
   - Centering, underlining, and bold printing.
   - Page length and line width.

.fi
Print formatter commands are imbedded in the file. These all take the form of a
period followed by a 2 letter command, optionally followed by a numeric or text
argument. Each command must appear on a line of its own, and must start in the
first column. Examples:
.nf
   .he |Editor|SS1 User Manual|Chapter 4|  (page header for this page)
   .ls 2                                   (set double spacing)
   .ce 3                                   (center next 3 lines)
   .bp                                     (begin next page)
   .fo |$D||Page 4 - $P|                   (footer for this page)
For more information on these commands see the chapter on the Print
Formatter.

.bp
.ce
FULL EDIT COMMAND DESCRIPTIONS

This section contains full explanations for all edit commands.

THIS SECTION HAS BEEN OMITTED FROM THE EVALUATION COPY DOCUMENT IN
ORDER TO SAVE DISK SPACE.
IT CONTAINS 10 PAGES OF DETAILED EXPLANATIONS FOR EDITOR COMMANDS, AND
USAGE EXAMPLES.



```
{% endraw %}

## FM.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1
.he ||File Manager||
.fo |||Page 3-$P|
.ce
FILE AND DIRECTORY MANAGER

.fi 
The File/Directory Manager provides the capability to do many common file
operations such as copying, deleting, viewing, printing, protecting etc. The
file manager will also show you an entire directory tree, and allow you to
quickly show any of the subdirectories. The File Manager is exceptionally easy
and natural to use, and provides many safeguards and extra features not
available in the equivalent DOS utilities. The best way to learn the File
Manager is to start it up and play with it as you scan through this chapter. 
.nf


The topics covered in this chapter are:

       -  Introduction

       -  A Summary of File Manager commands

       -  Some hints on how to use the File Manager


.fi
Remember that help is available at all times when you are in the File
Manager by typing <shift> F1 and <shift> F2.
.bp
The top lines of the screen are used to provide a menu of available commands,
and the name of the directory being displayed.  The bottom lines are
used to display the current function key meanings, and to show
remaining disk space and "marked" file size.  If the top line of the
screen ends with ... <spc>, then additional commands are available, and their
names can be displayed by pressing the space bar.

The rest of the screen is used to list file information for the files in the
directory being displayed. Information on each file includes name, size, date,
time, and whether it is protected or has been modified since creation.

The cursor will be to the left of one of the files on the list (this line
will also be highlighted).  The up/down arrows, pgdn/pgup, Top and Bottom,
and home/end keys will move the cursor and/or scroll the list of files.  The
position of the cursor is important because most of the File Manager commands
act on the file that the cursor is on.

The allowed commands are listed on the top of the screen and on the bottom
line of the screen. The top of screen commands are invoked by typing the first
letter of the command. The commands listed on the bottom line of the screen are
invoked by typing indicated function key. Examples: to Copy a file type C, to
Print a file type P, or type F10 to protect a file from accidental deletion.

.nf
.pb 18
+-- Sample File Manager Screen --------------------------------------------+
Commands: Find Show Rename Delete Copy Print Killprn Top Bot eXec .. <spc>
This Dir is: A:*.*                                      Quit    Files:  67
    File/Dir Name       Size  Date      Time     Modified    Protected
    WORK.DAT             456  9/29/84   11:56PM   YES          YES
    WORK.PAS           24456  9/30/84    8:56AM   YES          NO
    GAMES    <SUBDIR>    456  9/29/84   11:56PM   YES          NO
    ZEBRA.ZOO             22  3/11/83    6:56AM   NO           NO

   etc
       etc
          etc

Available Disk Space: 45000    Marked file Size: 87562    AutoRead=ON

F1NewDir F2ReRead F3MultiFile F4Mark F5Markall F6Tree F9Mod F10Protect
+--------------------------------------------------------------------------+

.fi
The Show command is used both to show the contents of a file, and to list the
files in a subdirectory. If the cursor is on a normal file (i.e., not a
subdirectory), Show will display it's contents on the screen, and you will be
offered a new set of commands that include scrolling through the file, Finding a
string in the file or going to the Top or Bottom of the file. If the file is a
subdirectory, then Show will display the list of files in that subdirectory, and
all of the File Manager commands can be used on the new subdirectory. (this can
be continued down through several subdirectory levels). After Show of a
subdirectory, the Quit command exits the subdirectory, and redisplays its'
parent directory. The Show and Quit commands offer a very easy way to navigate
up and down the DOS directory tree - use Show to go deeper (downward) in the
tree, and Quit to go upward in the tree.

The Order command allows you to change the order in which files are listed
on the screen.  The choices include by name, date, size or extension
in ascending or
descending order.

The "multi file" mode allows you to copy, delete, or rename a whole group of
files with one command.  This is accomplished by "marking" the files using
the F4 or F5 keys, and then entering the multi file mode by typing F3.

.pb 4
The entire directory tree for a disk can be shown by using the F6 (Tree)
command.  Any of the subdirectories can then be displayed by moving the
cursor to it and typing the Show command.


A set of directory commands is also offered. These include: 1) creating new
subdirectories, 2) listing the
displayed directory, and 3) displaying a new directory. The names of these
commands will be displayed on the top line of the screen if you hit the space
bar.

The File Manager always provides the following safeguards:
.nf
       - The <esc> key allows you to escape from commands started by mistake.

       - Confirmation is requested for commands that could result in the
         loss of data (e.g. deletions, or copying over an existing file).

       - On a copy, if the destination file exists, you will be offered the
         options of Replacing the file, Appending on to it, or escaping the
         copy.


.bp
.nf
.ce
FILE MANAGER COMMANDS

This section provides explanations for each of the file manager commands.

Starting File Manager:
There are two ways to start the file manager.

You Type:              Resulting actions:
F ...................  From the Main Menu. Type F. You will be prompted
                       to enter the name of a directory name to show.

                       Note: DOS wildcards can be used to limit the number
                       of files displayed.

J, <up/downarrow>, S.  Restarting a File Manager job from the list of
                       suspended jobs on the Main Menu.


Leaving the File Manager:
There are three ways to quit the File Manager.
<shift>F10 .........   Quit the current File Manager job.  Pressing Quit
                       will have the same effect if you are at the highest
                       level directory.
<shift>F9 ..........   The File Manager will be suspended. You will be given
                       the option of suspending to the SS1 Main Menu, or to
                       DOS.  Select the Main Menu if you want to run another
                       SS1 application, select DOS if you want to run DOS
                       commands, or another program.
                       In either case, the File Manager job will be added to
                       the suspended job list so that it can be reactivated
                       later.
eXec  ..............   eXec allows you to execute a DOS command, and then
                       instantly return to the file manager (details below).

Cursor Moving Keys:
The following keys move the cursor to a new file, or to scroll through the
list of files.

You Type:              Resulting Cursor Move:
<up/down arrow> .....  Move cursor up or down one line
<home>/<end> ........  Move cursor to top or bottom of screen
<end>  ..............  To end   of line
<pgdn>/<pgup> .......  Scroll the list of files a half screen up or down
Top/Bottom ..........  Move cursor to start or end of list


File Commands:
The following commands operate on files listed on the screen. All of these
commands operate on the file the cursor is on.
Remember that you may type sF1 to obtain help on the commands available, and
on how to answer any questions the File Manager asks.

Copy ................  Make a copy of the file the cursor is on.  You will
                       be prompted for the name of the destination file (or
                       device) to copy the file to.  The default name will
                       be the name of the cursor file, use the edit keys to
                       edit the default into the destination name.  For
                       example if the cursor was on A:AFILE, and you wanted
                       to copy this to B:AFILE, just type a B over the A and
                       type return.
                       If the destination file already exists, then you will
                       be asked if it is to be Replaced (overwritten), or
                       if the data in the cursor file is to be Appended
                       to the end of the destination file.

Delete ..............  Delete the file the cursor is on.  Confirmation will
                       be requested - type a Y to confirm the delete, or N
                       to cancel the delete.

Edit ................  Invoke the text editor.  You will be asked to enter a
                       a file name to edit, with the default being the file
                       the cursor was on.  If the default is OK, just type
                       return, otherwise enter a file name and type return.
                       Note: that this allows you to edit a file other than
                       the one the cursor is on when E is typed.
                       The File Manager job is suspended before you enter
                       the Editor.  When you exit the Editor, the File
                       Manager job will be on the suspended job list, and 
                       can be resumed in the usual way.

Find ................  Move the cursor to a file. You will be asked to enter
                       part or all of a file name to move the cursor to.
                       Note that in most cases you need only enter the first
                       letter or two of the file name - e.g., entering SL 
                       will find the first file on the list starting with SL.

Killprint ...........  Kill (stop) a print that is now going on in the
                       background. (see Print below)

Print ...............  Print the file the cursor is on in the background.
                       You will be asked if you want the file printed with
                       the "default" header - answer Y or N. The default
                       header prints the name of the file, date, time and
                       page number at the top of each page. You will be
                       asked to enter the maximum line width your printer
                       will accommodate. This is used to truncate lines that
                       would cause your printer to "wrap" a line, which
                       would confuse the File Managers pagination of the
                       file. The file will be printed in the background,
                       meaning that you can do other SS1 functions while it
                       prints, but you cannot leave SS1.

Rename ..............  Give the file the cursor is on, a new name. You 
                       will be prompted for the new name. The default will
                       be the file's current name. Enter the new name and
                       type return (the edit keys can be used to save typing
                       as usual). Notes: The new name must be on the same
                       disk. If a file with the new name exists, the rename
                       will not be performed, and a warning message is
                       displayed.

Show ................  Show (display on screen) the file that the cursor
                       is on. If the file is a subdirectory, then the list
                       of files in it will be displayed, and you will be
                       allowed to perform all of the File Manager commands
                       on the new subdirectory. If the new directory
                       contains subdirectories, then their contents may be
                       displayed by using Show again. If the Show command is
                       used to show a subdirectory, then typing the Quit
                       command will return you to it's parent directory. If
                       the file the cursor is on is not a subdirectory, then
                       its contents will be displayed on the screen. A new
                       set of commands that allow scrolling, etc., will be
                       displayed on the top of the screen. These commands
                       are explained below. The Show command is intended to
                       show text files, and while there will be no harm done
                       if other types of files are shown, the contents may
                       not be displayed in a very meaningful format.

eXec  ...............  Execute (run) the file the cursor is on.  After
                       typing X, you will be prompted for the name of the
                       program to be executed (the default will be the name
                       of the file the cursor was on). Type in (or edit) the
                       file name to be executed, and any parameters to be
                       passed to the program. These should be typed in just
                       as though you were executing the program from a DOS
                       prompt.
                       The program will be executed. When the program
                       completes you will be returned to the file manager.
                       SS1 remains in memory while the other program is
                       executed; this means that 1)you must have enough
                       memory for both SS1 and the program to be executed,
                       and 2)that the return to SS1 will be instant.

F1, F2, F3, F4, F5, F6 See Directory, and Multifile commands (below)

F9  .................  Mark a file as modified or unmodified.  DOS keeps
                       track of whether a file has been modified since its
                       creation. This command allows you to override DOS's
                       current modify setting. The practical use of this
                       command is that some backup utilities can be told to
                       only backup files that have been modified. So by
                       marking a file as modified or not, you can control
                       whether or not it will get backed up. Repeated
                       presses of F9 toggle the modify bit. The current
                       setting of the modify bit is shown in the second
                       column from the right for each file.

F10 ................   Delete protect a file.  If a file is not delete
                       protected, pressing F10 will protect it, and vice
                       versa. The "protected" column shows whether a file is
                       currently protected or not. This command can be used
                       to prevent you (or someone else) from accidentally
                       deleting or overwriting a valuable file.


Show File Commands:
.fi
When you invoke the show command on a file, the file will be read in and
displayed on the screen.  The following commands will then be displayed on
the top line of the screen, and will be available until you press Quit to end
the Show.

The horizontal bar and pointer that are displayed along the bottom of the
screen show the relative position in the file of the screen being displayed.
For example, if the pointer is near the right end of the bar, you are near
the end of the file.

.nf
up/down arrow  .....   Scroll the display one line up or down.
left/right arrow ...   Scroll the display 20 columns to the left or right.
                       The column corresponding to the left edge of the
                       screen is displayed on the ruler line.
                       Maximum displayable width is 200 columns.
pgdn/pgup ..........   Scroll the display one half screen up or down.


Bottom/Top .........   Go to the start/end of the file and display it.

Find ...............   Find the next occurrence of a text string in the
                       file, and display the part of file starting at that
                       string. Notes: Letter case is always ignored, and the
                       search direction is always forward. The found string
                       will be highlighted, and will always be displayed on
                       the top line of the text window. If the string is not
                       found, a message will be displayed, and you will be
                       left at the end of the file. See also F6.

Goto ..............    Goto a position in file that you specify.  After
                       typing G, you will be confronted with a bar and
                       pointer similar to the one that is always displayed
                       on the bottom of the screen. Use the arrow, tab,
                       backtab, home and end keys to move the arrow from its
                       current position (which marks your current location
                       in file) to the place you want to go, then type
                       return. You will be transported to the new location,
                       and it will be displayed. This is easier to use than
                       to explain - just try it!

F6 ................    Repeat last find. After you have used the Find command
                       to find the first occurrence of a text string, the F6
                       command can be used to find the next, next, next,
                       etc. occurrences without having to reenter the text
                       string for each search.


Multi File Commands:
.fi
The following commands allow you to delete, copy or rename a whole group of
files with one command.  To use multifile, first mark all of the files to be
operated on using F4 and/or F5.  Then type F3 to go into multi file mode.
.nf

F4 ................    Mark or Unmark the file the cursor is on.  If the 
                       file is now marked it will be unmarked, and vice
                       versa. Marked files will be indicated with an arrow
                       head on the left side of screen. The total size of
                       all files you have marked is displayed on the bottom
                       of screen.

F5 ................    Mark or Unmark ALL files.  If the file the cursor is
                       on is unmarked, then all files will be marked, and
                       vice versa.  If you want to mark most files on a
                       directory, use F5 to mark all of them, then F4 to
                       unmark those you don't want.

F3 ................    Enter the multi file mode.  The top line of screen
                       will be changed to offer the three commands listed
                       below. These commands will apply to all marked files.

Copy ..............    Copy all marked files to another directory.  You 
                       will be asked to enter the name of the disk or
                       subdirectory to which the marked files are to be
                       copied. The files will be copied to the new
                       directory. The name of the file being copied is shown
                       on the screen. The copying process can be stopped at
                       any time by hitting the space bar. Note: Before the
                       first copy is started, SS1 will check to see if there
                       is space on the destination disk for all of the
                       marked files. If not, it will ask you if you want to
                       proceed. If some of the files you have marked will
                       replace files on the destination directory, then
                       there may be enough space, and you may want to go
                       ahead with the copies. In any case, if there is
                       insufficient space to complete an individual copy,
                       SS1 will not perform the copy, and will beep and
                       display a message.

Delete ............    Delete all marked files.  You will be asked to 
                       confirm that you really want to delete all those
                       files. If you answer Y, then the files will be
                       deleted. The names of the files being deleted are
                       displayed as they are deleted, and the process can be
                       stopped at any time by pressing the space bar.

Rename ............    Rename all marked files to a new directory. You 
                       will be asked for the name of the new directory to
                       rename the files to. The new directory MUST be on the
                       same disk as the one the marked files are now in
                       (therefore at least one of the directories must be a
                       subdirectory). The names of the files being renamed
                       will be displayed as the process rolls on. Pressing
                       the space bar will stop the renames. Note: This the
                       closest thing to a rename directory that SS1 offers.
                       That is, to rename a subdirectory, 1) Make a new
                       subdirectory with the desired name, 2) rename all of
                       the files in the old directory to the new one, then
                       3) Delete the old one.


Directory Commands:
.fi
The following commands operate on entire directories (or disks). Commands are
provided for: 1) creating new subdirectories, 2) listing the directory
information for files in a directory, and 3) displaying a new directory.
These commands are available whenever the File
Commands (described above) are. The names of the commands will be displayed on
the top line of the screen if you press the space bar. The commands can be
invoked whether or not their names are currently displayed.
.nf

.pb 15
Makenewdir .......     Create a new subdirectory. You will be asked to enter
                       the name of the new subdirectory.
                       Notes: You must conform to DOS's pathnaming
                       conventions. Examples:

                       A:\newsub           <-- ok - creates a dir called
                                               "newsub"
                       a:\seattle\homes    <-- ok if a subdirectory named
                                               seattle already exists.
                                               Creates new dir "homes"

                       \subber             <-- ok - creates "subber" on
                                               default drive.
                       c:/badsub           <-- NO - must use \ not /

F1  ................   Read in and display the contents of a new directory.
                       You will be asked to enter the name of the directory
                       to display.  DOS wildcards are OK.  The files for the
                       new directory will be displayed.  To return to
                       directory you were in before doing the "N", use the
                       Quit command.


Listdir ..........     List the directory information for the directory
                       currently being displayed to the printer or a file.
                       You will be asked to enter the name of the device or
                       file to list the directory to. The default will be
                       PRN, which is the printer.

F2 ...............     Reread the current directory.  The two most common
                       reasons for using this are. 1) To show the contents
                       of a new disk you have placed in the disk drive, or
                       2) For large directories the File Manager switches to
                       a mode in which the directory listing on the screen
                       is not updated after each command that would change
                       it (e.g. a rename will not make the renamed file
                       disappear from the screen listing). Pressing the F2
                       key will force a redisplay of the correct data.


File Order Commands:
.fi
The Order command allows you to change the order in which files are
displayed on the screen.  The Order command is available anytime the File
Commands (described above) are.  Its name will be listed on the top line of
the screen if you press the space bar.  The following options are offered
after you press O.
.nf

Name .............     Show files in alphabetic order by file name.
Time-date ........     Show files in chronological order.
Size .............     Show files in by size of the file.
eXtension ........     Show files in alphabetic order by file extension.
Ascend ...........     Do the listing in ascending order.
Decend ...........     Do the file listing in descending order.


Tree Command:
.fi
The tree command is used to show the entire directory tree for a disk drive. It
is executed by pressing the F6 key. You will then be asked to enter the letter
of the disk drive to be displayed. The tree for that drive will be displayed as
shown below. 
.nf

Dir Tree: arrows <home> <end>  --- then Show Quit

  B:   -------+- MOUNTS ------+- RAINIER
              |               +- GLACIER
              |               +- SLOAN
              |
              +- CITIES ------+- YAKIMA
                              +- TACOMA

Use the arrow keys to move the cursor to the directory of interest, and
Show it by typing S.



```
{% endraw %}

## INDEX.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1 
.he ||Index||
.fo |||Index $P|
A                                       delete,file 3-5,8
aFn 1-4                                 display 1-10
aids 2-1                                display options A2-2
alt keys 1-4                            display, interference 1-10
altF1 to altF8 1-7                      DOS, suspend to 1-6
applications, overview 1-2              dot commands 7-1
ASCII list 2-2                          drives command 1-9
auto dial modem A2-5                    duplicate line,editor 4-15
auto-indent,editor 4-10                 
                                        E
B                                       echo 5-6,5-10,A2-5
backup A1-1                             edit keys 1-4,1-6
bar graph 2-5                           edit,file manager 3-5
baud rate 5-6,5-10,A2-5                 editor 4-1
bits per character 6-6,5-10             editor,limitations 4-2
block commands,editor 4-5,14            editor,overview 4-2
bold,editor 4-7                         editor,quit 4-4
                                        editor,start 4-1,4-8,
C                                       editor,text entry 4-5,
calculator 2-1                          editor,usage hints 4-9
cFn 1-4                                 entering data 1-6
commands,editor 4-3,13                  entering text,editor 4-9
communications, arrow key use 5-7,5-12  
communications, basic functions 5-2     F
communications, cable 5-5               file aid 2-3
communications, commands 5-3            file manager 3-1,3-2
communications, config file 5-5,60,A2   file manager,commands 3-4
communications, dial 5-9                file manager,cursor 3-4
communications, disconnect 5-9          file manager,quit 3-4,6
communications, display 5-2             file manager,startup 3-4
communications, exit 5-3,5-5            file placement 1-9
communications, first use 5-6           files, SS1 1-9
communications, graphics 5-7            files,editor 4-2
communications, line feeds A2-13        find,editor 4-6,15,17
communications, overview 5-1            find,file manager 3-5
communications, parameters A2-4         fonts, printer 7-5
communications, receive file 5-8        format files 7-1
communications, requirements 5-5        function keys 1-4
communications, scroll buffer 5-12      
communications, send file 5-8           G
communications, setup 5-10              goto,file 3-7
communications, start 5-3,5-5           graph, example 2-5
control keys 1-4                        graph, screen 2-5
copy,editor 4-5,4-14                    graphic commands A2-14
copy,file 3-5,4-7                       
ctrlF1 to ctrlF8 1-7                    H
cursor,editor 4-4,13                    hardware required 1-1
                                        help 1-4, 1-5, 1-6
D                                       
date, print 7-4                         I
default directory 3-9                   include files, print 7-4
delete,editor 4-5,14,17                 indent,editor 4-7,11
.bp
insert file,editor 4-19                 
insert line,editor 4-15                 O
insert,editor 4-9,4-13                  oops,editor  4-19
installation, of SS1 A1-1               overview, applications 1-2
                                        overview, SS1 1-1
J                                       
justification, of text 7-3              P
justify,editor 4-7,4-11,4-20            page no, print 7-4
                                        parameters,passed 1-1,10
K                                       parity 5-6,5-10,A2-5
key conventions 1-4                     phone list 2-2
key programming 1-4,1-8                 phone number A2-5
key recorder 1-8                        pitch, printer 7-5
                                        playback keys 1-4,8
L                                       print, in FM 3-5
learn keys 1-4,1-7                      print,file 3-5
learn keys,editor 4-10                  print/format 7-1
line graph 2-5                          printer, setup 7-5, A2
list directory 3-9                      printers, supported 7-5,A3
list lookup 2-2                         program keys 1-4,1-8
list manager, column edit 6-7,6-13      protect,file 3-6
list manager, commands 6-5              
list manager, create block 6-8          Q
list manager, create fields 6-6,6-12    quit jobs 1-2,1-5,1-6
list manager, cursor commands 6-4,6-8   
list manager, delete record 6-11        R
list manager, display 6-2               record keys 1-4,1-8
list manager, edit record 6-12          recovery, of data 1-10
list manager, exit 6-4,6-15             rename,file 3-5,3-8
list manager, find 6-14                 replace,editor 4-7,4-15,4-17
list manager, go to record 6-14         reread directory 3-9
list manager, locate 6-14               ruler,editor 4-11,4-16
list manager, mark records 6-8          running, SS1 1-1
list manager, order columns 6-13        
list manager, overview 6-1              S
list manager, report 6-6,6-10           save screen 2-4
list manager, search 6-9                save,editor 4-4,4-8
list manager, select records 6-8        screen colors A2-2
list manager, sort 6-13                 setup A1-1, A2-1
list manager, start 6-4                 sFn 1-4
                                        shift keys 1-4
M                                       shiftF1 1-5
macros 1-4,1-8                          shiftF2 1-4
main menu 1-2                           shiftF3 to shiftF8 1-4,2-1
make directory 3-8                      show,file 3-5,6,7
mark,file 3-7                           snow,on display 1-10
memorize,editor 4-16                    spell lookup 2-2
modem type A2-13                        SS1, files 1-9
modified,file 3-6                       SS1, overview 1-1
move,editor 4-5,14                      SS1.CFG A2-4
multi-file,file manager 3-7             SS1.PRN 7-5
multiple hosts on-line 5-7              starting applications 1-2
.bp
startup 1-1, A1                         
stop bits 5-6,5-10,A2-5                 
suspend jobs 1-2,1-4,1-6                
                                        
T                                       
tabs,editor 4-16                        
text entry,editor 4-5                   
time, print 7-4                         
                                        
U                                       
underline 4-7                           
update,editor  4-7                      
                                        
MISC                                    
$D, print date 7-4                      
$P, print page no 7-4                   
$T, print time 7-4                      
 .bp begin page 7-2                     
 .br break 7-3                          
 .ce center 7-2                         
 .ci include files 7-4                  
 .fi fill text 7-3                      
 .fo footers 7-4                        
 .he headers 7-3                        
 .in indent 7-3                         
 .ml max length 7-2                     
 .nf no fill 7-3                        
 .pl page length 7-2                    
 .ps print control 7-4                  
 .rm right margin 7-3                   
 .sp space lines 7-2                    
 .ti temp indent 7-3                    
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        

```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1 
.he ||Installation||
.fo |||Page A1-$P|
.ce 
INSTALLATION

.fi
The evaluation copy of SS1 comes on two diskettes.  The first diskette
contains all of the files needed to run SS1.  The second diskette
contains the evaluation copy document, printer support files, and
communication files for various terminals.
.nf

Step 1: Printer Setup. (optional)
.fi
SS1 provides taylored support for many common printers. If you don't perform
this step SS1 will use a default set of print parameters, which will probably
work on your printer, but will probably not take best advantage of it. Follow
the steps below if you want SS1 to be able to take maximum advantage of your
printer:
.nf

1. Look through the list of supported printers in appendix 3, and find the
   name of the printer pattern file for your printer.

2. Place diskette 2 disk in drive B: and diskett 1 in drive A:, then
   issue this command:

   COPY B:EPSON.PRN  A:SS1.PRN
   Where in this example it is assumed that you have an EPSON printer.

If you don't find a file for your printer, or you want to do further
customization, then you will want to run the printer setup portion of the
SETUP utility.
NOTE: THE SETUP UTILITY IS NOT PROVIDED IN THE EVALUATION COPY IN ORDER
TO SAVE DISK SPACE.

Step 2: Printing the manual.
The documentation for the SS1 evaluation copy is located on diskette 2
in a subdirectory called \DOC.  Each chapter is in a separate file.
The manual should be printed by using the SS1 print utility in order to
get proper pagination and formating.  To print the document:

1. insert diskette 1 in drive A:, with A: as the default drive. Turn your
   printer on.

2. Type ss1 to start the ss1 program.

3. Select the "Print" menu choice by typing "P".

4. Insert diskette 2 in the A: drive.

5. You will then be asked for a file name.
      To print the entire document (about 90 pages), enter
      \DOC\ALL.DOC.

      To print a single chapter, enter the filename for that chapter --
      for example, to print the editor chapter, enter \DOC\EDIT.DOC.

6. Carriage return through the rest of the inputs.

To run SS1, make A: your default drive, place disk 1 in drive A:, and
type SS1.

The Overview section on the manual has information on installing SS1 on a
hard disk, and on which SS1 files are needed for each SS1 module.

```
{% endraw %}

## INTRO.DOC

{% raw %}
```
.bp 1
.ml 80
.rm 80
.in 4
.he ||SS1 Introduction||
.fo |||Page intro-$P|

.ce
WHAT IS SS1?

The SS1 package provides the following functions:

     - Editor and Wordprocessor.
     - File and Directory browser.
     - List/Data Manager.
     - Communications to other computers.
     - Spreadsheet.

In addition to the above major functions, SS1 provides "popup" aids that
can be used from anywhere in SS1.  These aids include a calculator, a
spelling aid, an aid for graphing data, a files/directory aid, and an aid
for "learning" keys.

SS1 also features context sensitive help, job suspend and resume, keyboard
macros and learn keys, a consistent and easy to learn user interface, and
much more.


.ce
WHATS IN THE EVALUATION COPY?

The evaluation copy of SS1 is a fully functional version of SS1 that you
can use to decide whether you want to buy SS1.

The evaluation copy is fully functional except for the following omissions:

   - The document has been abreviated to about half of its normal size.

   - The setup utility (which allows you to customize screen colors,
     customize the communication module, and customize printer support)
     has been omitted.

   - The Spelling Aid dictionary has been omitted.

The omissions allow SS1 and the documention to fit on two floppy disks,
and give you some additional incentive to purchase the package.


.ce
WHY SHOULD I BUY SS1?

Buying SS1 will get you the following benefits:

   - The latest release of the SS1 software, including the setup
     utility, and spelling dictionary, which have been omitted from the
     evaluation copy.

   - A profesionally printed, typeset document.
     The document is approxmately 200 pages, and contains about twice as
     much material as the evaluation copy document.

   - A set of Quick Reference Cards.
     There is a quick reference card for each SS1 module.

   - Notification of future releases of SS1.

   - Peace of mind.
     The great feeling that you have paid for what you are using, and have
     done your bit to fund future SS1 developments.

.ce
HOW DO I BUY SS1?

Send fifty dollars to the address listed below.

       Seattle Software Works
       29303 63rd Place
       Auburn, Wa
       98001

   Or call:
       (206) 641-9368

Please be sure to include your full address.
We accept cash, checks, money orders, Master Card, and Visa.

We pay the shipping inside the USA.  If you live outside the USA, please
include an allowance for extra shipping.


WHAT ARE THE LIMITATIONS ON USE OF THE SS1 EVALUATION COPY?

You may:
   - Make copies of SS1 for your own use, and distribute it
     to your friends.

   - Use the evaluation copy in your personal or business work to decide
     if you want to purchase SS1.

You may not:
   - Sell SS1 to anyone.

   - Change the program.

   - Use SS1 or any portion of SS1 in any product that you sell.

You should not continue to use SS1 without buying it.

The SS1 package is protected by copyright.


FEEDBACK
We appreciate hearing from SS1 users.  We would like to hear about what
you like and don't like, and what enhancements you would like to see.


Thanks.



```
{% endraw %}

## LM.DOC

{% raw %}
```
.rm 80
.in 4
.ml 80
.bp 1
.he ||List Manager||
.fo |||Page 6-$P|
.nf
.ce
LIST MANAGER

.fi 
The List Manager is a screen oriented data manager which can be used for
mail lists and other record keeping functions. Since it uses standard text
files, it is also useful for column editing and record selection in files
that have a mix of data types such as tables in a letter. The List Manager
allows records to be sorted, selected for report generation, and edited. 

.nf

The topics covered in this chapter are:

       -  Introduction

       -  A Summary of List Manager commands

       -  Some hints on how to use the List Manager

       -  Full Command Descriptions


.fi
Remember that help is available at all times when you are in the List
Manager by typing <shift> F1 and <shift> F2.

.bp

The top two lines of the screen are used to provide a menu of available
commands. The third line displays the field definitions. The bottom line is
used to display the current function key meanings. The second to the last
line displays: (1) the number of records, (2) the number of records that are
marked to report, and (3) the current record number. The rest of the screen
is used to display the data in the file.

The cursor will be to the left of the current record (this line will also be
hilighted). The up/down/right/left arrows, tab, pgdn/pgup, Top and Bottom,
and home/end keys will move the cursor and/or scroll the data. The position
of the cursor is important because many of the List Manager commands act on
the record that the cursor is on.

The allowed commands are listed on the top of the screen and on the bottom
line of the screen. The top of screen commands are invoked by typing the
first letter of the command. The commands listed on the bottom line of the
screen are invoked by typing indicated function key. Examples: to Sort data
type S, or F1 to select a block.

.nf
+--- Sample List Manager Screen ------------------------------------------+
 List Manager: MarkRecords Report Delete Add Edit CreateFields
              Sort OrderFields Calculate Top Bottom GoTo Quit            
   AAAAAAAAAAABBBBBBBBBB.CC.........GGGGGGGGG..DDDDDDD.EEEEEE..NN.........
   Seattle    Washington WA         Northwest  Cold    Rain    23
  *Sacramento California CA         West       Warm    Nice    10
 >*Wichita    Kansas     KA         Midwest    SoSo    Boring  45
  *Gothenburg Nebraska   NB         Midwest    Colder  Corn    37
 >*Chicago    Illinois   IL         North      Frozen  Windy   41
  *Las Vegas  Nevada     NV         West       Hot     Money   19
   Dallas     Texas      TX         South      Warmer  Big     35
   Miami      Florida    FL         South      Warmest Water   17
                                                                         
 Records: total=   500 Marked=   123  Current=    99  Block Selected *
 F1SelBlk F4Mark F5Markall F6NextMark F7Dispall F8HitsDisplay cFNLearn
+-------------------------------------------------------------------------+
.fi

When the List Manager is started, a file is read in. Each line in the
file becomes a record. Any record can be marked for report output by
pressing F4, F5, or running Mark records. When a record is marked, a
> will be displayed next to the record. In the sample above, Wichita
and Chicago are marked.

The List Manager requires fields to perform most commands. A field is
a column that is labeled by a letter A to Z. Fields are created using
the CreateFields command. Active fields will be displayed on the
third line of the screen. The field will be identified with its letter
repeated to show the length of the field. In the sample screen above,
A, B, C, D, E, G, and N are fields. The C field is two columns wide.
Fields are remembered between SS1 executions.

The List Manager can be restricted to work with only a portion of the
file. This can be useful if you are working on a file that contains a
mixture of data such as a table within a letter. The block command F1
is provided for this purpose. A block is identified with a * next to
every record within the block. In the sample, a block is active from
Sacramento to Las Vegas.

The List Manager can also be used for column editing. To do this, load
the file you want to edit. Define columns as List Manager fields.
Then using the Order command describe the new order for the columns.

The List Manager can be suspended and restarted like all jobs in
SS1. When the List Manager is suspended, two things happen:
.nf

     1. Any marked records will be unmarked.
     2. The current file will be updated.

.fi
SINCE COMMANDS LIKE SORT AND ORDER CAN MAKE LARGE CHANGES TO
THE FILE, YOU SHOULD MAKE SURE YOU WANT TO UPDATE THE FILE BEFORE
SUSPENDING THE JOB.

This file update does not occur when you select eXecute a DOS command on
suspend.

.bp
.ce
COMMAND SUMMARY

This section provides explanations for each of the List Manager commands.
.nf

Starting List Manager:
There are two ways to start the List Manager.

You Type:              Resulting actions:
L ...................  From the main menu. Type L. You will be prompted to
                       enter the name of a file to load into the List
                       Manager.

J, <up/downarrow>, S.  Restarts a List Manager job from the list of
                       suspended jobs on the main menu.


Leaving the List Manager:
There are four ways to quit the List Manager.
Q ..................   Quit the current List Manager job. You will be given
                       the option of: Saving your data to a new file, saving
                       data to the current file, or Discarding changes to
                       the file.

<shift>F10 .........   Quit the current List Manager job. Performs the same
                       function as Quit.

<shift>F9 ..........   Suspend the List Manager and return to the Main Menu
                       or DOS or execute a DOS level command. Use the Main
                       Menu option to suspend a List Manager session and
                       return to the Main Menu. This job will be added to
                       the suspended job list on the Main Menu for
                       restarting later. The DOS option allows you to
                       suspend the List Manager session and return to DOS.
                       The next time SS1 is run, you will be returned
                       directly to the suspended List Manager session. The
                       execute a DOS level command allows you to run a DOS
                       command and return to the List Manager after the
                       command completes.

                       Note: Suspend will replace the current file and
                             unmark all records. Execute DOS level command
                             does not replace file or modify record marks.


Movement Commands:
The following commands move the cursor to a record, or scroll through the
data.

You Type:              Resulting Movement:
<up/down arrow> .....  Move cursor up or down one record.
<ret> ...............  Move cursor down one record.
<right/left arrow> ..  Scroll the file right or left 20 characters.
<tab> ...............  Scroll the file right 20 characters.
<home> ..............  Scroll the file to display the start of the current
                       record.
<end>  ..............  Scroll the file to display the end of the current
                       record.
<pgdn>/<pgup> .......  Scroll the data up or down one screen.
Top .................  Move cursor to the first record.
Bottom ..............  Move cursor to the last record.
F6 ..................  The cursor will be positioned next to the next
                       marked record.
Locate ..............  You will be prompted for a text string. The list
                       manager will search the file for the text from the
                       current position to the end of the file. If the text
                       is found, the cursor is placed next to the record
                       that contains the string.
GoTo ................  You will be prompted for a record number. The cursor
                       will be placed next to the specified record number.

Modification and Report Commands:
.fi
The following commands either modify the data or are used to report data.
Remember that you may type sF1 to obtain help on the commands available, and
how to answer any questions asked by the List Manager.
.nf

F1 ..................  Pressing F1 once, identifies the start of a block.
                       Press it again, to identify the end of a block.

F4 ..................  Mark or unmark the current record.

F5 ..................  Mark and unmark all records.

F7 ..................  Toggle between display of all data and only the
                       defined field data.

F8 ..................  Change the record selection format used by Mark
                       and other commands.

cFN .................  Learn the current record to a function key.

MarkRecords .........  Mark all records meeting a specified search
                       criteria.

Report ..............  Create a report from marked records and selected
                       fields.

Delete ..............  Delete the record the cursor is on.

Add .................  Add a record above the current cursor position.

Edit ................  Edit the current record.

CreateFields ........  Create or modify fields.

Sort ................  Sort records. Sort can be performed in ascending or
                       descending order.

OrderFields .........  Change the order or delete fields (columns).

Calculate ...........  Calculate the sum, average, and count of a field.

Quit ...............   Quit the current List Manager job. You will be
                       given the option of: Saving your data to a new
                       file, saving data to the current file, or
                       Discarding changes to the file.

.bp
.nf
.ce
HELPFUL HINTS

To create fields:
.fi
In the List Manager, type F to enter the CreateFields command. Using the
<right/left> arrows, position the cursor to the start of the field. Press a
letter A through Z. This letter will be used to identify the column. Move
the cursor to the end of the field. Press <ret>. A field has now been
created; the letter identifying field the will be displayed on the third
line.
.nf

.pb 4
For example if the original file is:
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

.pb 5
To create field B for the state enter the List Manager:
   .....................................................................
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

.pb 5
Type F. position the cursor to the first column of the state name. Type B:
   ...........B.........................................................
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

.pb 5
Move to the end of the column and press <ret>:
   ...........BBBBBBBBBBB...............................................
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

A field now is defined for the state column.


To produce a report:
.fi
First go into the Editor and create a file with data separated into columns.
Then enter the List Manager with the file and use CreateFields to define the
different data items. At this point, Mark can be used to search the file for
the items that go into the report. F4 can be used if there are items that
should be included but did not meet the search criteria or additional searchs
can be run. Once all items for the report are marked, run Report to select the
fields to output. Specifying no fields will output the whole record.
.nf

.pb 4
For example if the original file is:
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

.pb 5
CreateFields A, B, C, D, E, and F (as described above).
   AAAAAAAAAAABBBBBBBBBBBCC         DDDDDDD    EEEEEEEEEEEEEE  FF
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

If you want a report with all midwest cities, run Mark with field D equal
to midwest. This will mark the cities.
.pb 4
   AAAAAAAAAAABBBBBBBBBBBCC         DDDDDDD    EEEEEEEEEEEEEE  FF
   Sacramento California CA         West       Warm    Nice    10
 > Wichita    Kansas     KA         Midwest    SoSo    Boring  45
 > Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

   Note: If additional records need to be marked, another search can be run.
         F4 can be used to either mark or unmark additional records.

Next run Report selecting fields to output. To select fields type the field
letter, numbers 1 to 9 can be entered to add spaces to the report, and <ret>
can be entered to add new lines. If fields A, 5, B, D, <ret>, B, and F are
selected the report would be.
.pb 4
   Wichita         Kansas     Midwest
   Kansas     45
   Gothenburg      Nebraska   Midwest
   Nebraska   37


To rearrange columns in a file:
.fi
If you want to change the order of several columns in a file: Enter the List
Manager with the file you want to modify. Define fields for all columns you will
want to save. Any data not contained in a field will be deleted. Make the columns
you want to rearrange separate fields. Run Order and enter field letters in the
order the fields should be placed in. Quit and save the file with the changes. 
.nf

.pb 4
For example if the original file is:
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

.pb 5
To place the state before the city create fields A, B, and C.
   AAAAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

.pb 5
Run Order giving it fields B, A, and C produces:
   BBBBBBBBBBBAAAAAAAAAAACCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
   California Sacramento CA         West       Warm    Nice    10
   Kansas     Wichita    KA         Midwest    SoSo    Boring  45
   Nebraska   Gothenburg NB         Midwest    Colder  Corn    37

You can now Quit and save or replace the file.

.bp
.ce
FULL COMMAND DESCRIPTIONS

This section contains full explanations for all List Manager commands.

THIS SECTION HAS BEEN OMITTED FROM THE EVALUATION COPY DOCUMENT IN
ORDER TO SAVE DISK SPACE.
IT CONTAINS 9 PAGES OF DETAILED EXPLANATIONS FOR LIST MANAGER COMMANDS,
AND USAGE EXAMPLES.




```
{% endraw %}

## OVERVIEW.DOC

{% raw %}
```
.rm 80
.ml 80
.in 4
.bp 1
.he ||OVERVIEW||
.fo |||Page 1-$P|
.ce
SS1 OVERVIEW

Hardware and Software Requirements:
The following hardware and software are required to run SS1.

       - An IBM PC, or compatible.
       - 256K bytes of memory (or more).
       - At least one 360K byte disk drive.
       - DOS version 2.0 or later.
       - The correct version of SS1 for your PC

Initial Installation:
If you have just received SS1, then turn to appendix 1 which describes
installation of SS1.  Be certain you make backup copies of both diskettes
before you run SS1.

Running SS1:
To run SS1:
       - Boot DOS as usual.
       - Place the disk containing the SS1 files in the default drive.
       - Type SS1.

The SS1 program will be loaded, and the main menu will appear.

.fi
Note: The section on file placement tells you which of the SS1 files are
actually required for each application, and how to place SS1 files on drives
other than the default drive.

Note: You can pass parameters to SS1 to tell it what to do on start up if
desired.  For example, typing:
.nf
    A> SS1 E B:myfile
.fi
would start the SS1 Editor, and prepare to edit file B:myfile. This feature is
optional, and is only included for those who are used to passing parameters to
programs.

.bp
.nf
The Main Menu:
.fi
The main menu screen will be displayed each time the SS1 program is started, and
each time you quit or suspend an application. It looks like this:
.nf

+-- SS1 Main Menu Screen --------------------------------------------------+
|SS1               (c) 1984,85,86 by Seattle Software Works       S/N 0000
+- Applications ------------------------- Suspended Jobs ------------------+
|
|  File Manager                     Job       File           Date  Time
|  Editor                           EDIT      b:SALE.DOC     1/27  5:03
|  Communications                   FM        b:*.*          1/27  3:58
|  List Manager
|  Print
|  Spreadsheet
|
|  Suspended jobs
|  Quit
|
| Type F E C L P  or S to start new job > _
| J for suspended jobs, Drives, or Q to quit
|
+----------------  Shift F1 = Help   Shift F2 = Menu on Quit&Aids ---------+
|
|Quit/Suspend/Transfer Jobs   Aids                   Learn & Record Keys
|sF9 - Suspend Current Job    sF3 - Calculator     aF1..aF8  - Recall A key
|sF10- Quit Current Job       sF4 - Spelling Aid   cF1..cF8  - Learn A key
|                             sF5 - Save Screen    aF9, aF10 - Playback key
|Key Programming              sF7 - Files          cF9, cF10 - Record key
|aK  - Key Record/Playback    sF8 - Graphing       sF6       - List keys
|
| sF1=shiftF1, sF1=altF1, cF1=ctrlF1
+--------------------------------------------------------------------------+
.fi
The upper left quarter of the screen shows a list of applications that SS1
provides.  These can be started by typing the first letter of the
application (eg press E for Editor).  The applications provided include:
.nf

Editor --------- A general purpose text editor/wordprocessor. It can be used
                 to prepare source code, reports, memos, and documents (like
                 this one).

File Manager  -- Provides a very friendly and visual way to do a number of
                 common file manipulation tasks including copying, printing,
                 showing, renaming, and deleting.

Communications - A full capability, high performance communication and
                 terminal emulation package.

List Manager --- A very easy to use data manager. It offers sorting,
                 selection, and rearrangement of data.

Print/Format --- A print utility that allows files to be printed. It offers
                 pagination, justification, bold, underline, headers,
                 footers etc.

Spreadsheet  --- A general purpose spreadsheet that supports rows, columns,
                 and pages.

.fi
Each of these applications is fully explained in a separate chapter of this
document.

The other choices from the Main Menu include Quitting SS1, the Drives choice,
and activating a Suspended job.

Quit - The Quit choice exits SS1 and returns you to DOS.

Drives - The drives choice allows you to tell SS1 where to look for the files
that are needed to run each application, and for the help file. This allows
you to do things like placing your most frequently used applications on ram
disk (transfers to applications on ram disk are instant) , or spreading the
SS1 files over several diskettes, or placing all or part of SS1 in a
subdirectory. This is described later in this chapter.

Suspended Jobs - The upper right quarter of the screen shows a list of
suspended jobs (if there are any). SS1 allows you to suspend any of its
applications to run another SS1 application, or to go out to DOS for a while.
You can then return to any suspended application at the point where you left
it. 

Up to five jobs can be suspended at once. Suspended jobs are resumed from the
Main Menu by typing J to put the cursor in the suspended jobs list, then
moving cursor to the desired job, and typing S to Start it. There is a section
in this chapter on suspending and quitting applications that fully explains how
this very useful capability works.

.bp 
The bottom of the Main Menu provides some help in remembering a few
important commands and keys. It looks like this:
.nf
.pb 34

          These Aids are always available:                     
            sF3 - A four function calculator                   
            sF4 - A lookup aid for Spelling, Phone, etc lists  
            sF5 - Saves the current screen to a file           
            sF7 - List/Show/Delete files                       
            sF8 - Graph rows or columns of numbers from screen 
           +-------------------+-------------------------------+
                               |
                               |
                             +-+-----------------+
Quit/Suspend/Transfer Jobs   Aids                  Learn Keys
sF9 - Suspend Current Job    sF3 - Calculator      aF1..aF8  - Recall A key
sF10- Quit Current Job       sF4 - Spelling Aid    cF1..cF8  - Learn A key
                             sF5 - Save Screen     aF9, aF10 - Playback key
Key Programming              sF7 - Files           cF9, cF10 - Record key
aK  - Key Record/Playback    sF8 - Graphing        sF6       - List keys
+-----------+--------------+                       +------+---------------+
            |                                             |
            |                                             |
+-----------+-----------------+   +-----------------------+--------------+
Quit or Suspend Applications:      Learn keys: allows text to be stored 
  sF10 - Quit the job you are in    on a function key for later recall  
         return to Main Menu.       altF1  - recalls text stored on F1  
  sF9  - Suspend job you are in     ctrlF1 - Stores text on F1          
         return to Main Menu,       sF6    - List all learn keys, and   
         or to DOS, or execute               allow changes.             
         a DOS command              Available anywhere in SS1.          
Key Programming                                                         
  aK   - Record or playback        
         keystrokes to/from a    
         file.                   


Key Conventions:
Some of the conventions used on SS1 screens, and in this manual are
explained below.

Commands - 
In many cases SS1 will show a list of commands (typically across the top of
the screen). To invoke one of these commands, just type the highlighted
letter (usually the first). There is no need to press the return key.

Shifted, ctrl and alt keys - 
The notation shiftF1 means: Press the F1 key while holding down the shift
key. This is often abbreviated sF1. Ctrl F1 and alt F1 mean the same thing
for the ctrl and alt keys, and are abbreviated cF1 and aF1.

Some examples:
  sF2      - means hold down the shift key and press the F2 key.
  aReplace - means hold down the alt   key and press the R  key.
  cF1      - means hold down the ctrl  key and press the F1 key.

The escape key -
The escape key is used to "escape" from commands that you start, and then
decide that you don't want to complete.  If you want to back-out of a
command, just press the esc key.

Using Help:
Two types of help are provided in SS1.

shift F2 - provides quick help on the following subjects:
  - Quitting and suspending applications.
  - Activating the aids (calculator, spell etc).
  - Using the learn keys.
  - Activating the full help facility.

.pb 28
The screen presented looks like this:

+-- Sample Help Screen ----------------------------------------------------+
 These Functions are Always Available:                                           
                                                                                 
          Shifted Function Keys                      Learn Keys  F1..F8
                  Aids                                                           
               +-------+                      To Learn Text to a Func Key:
        Help > |F1  F2 |< This Screen              Type ctrl function key.
               +-------+                           eg ctrl F3
  Calculator > |F3  F4 |< Spell, Phone etc
               +-------+                      To Recall Learned Text:
 Save Screen > |F5  F6 |< List/Change              Type alt function key.
               +-------+  Learn Keys               eg alt F6
 Files & Dir > |F7  F8 |< Graphing
               +-------+                       To List/Change Learned Keys:
                                                      Type shft F6
           Quits and Transfers                                                   
              +--------+                       See Help in Edit etc for
 Suspend Job >| F9  F10|< Normal Quit          more learn key info.
              +--------+  and Save
                                                                                 
 altK - Keystroke recorder - Record/Playback keys to a file.                     
 ctrlF9,F10 & altF9,F10 - Quick Record/Playback keys.                            
                              ShiftF1 For Full Help                              
                                                                                 
 Press any key to go on:                                                         
+--------------------------------------------------------------------------+

shift F1 - Provides full help on everything.
Pressing shift F1 will display a help screen that is appropriate for the
activity you are currently performing.

Once you have a help screen displayed, you have 3 options on what to do 
next:
  You can type:        Action:
  <return> .........  You will be returned immediately to your application.

  sF1 ..............  This will display a higher level help screen. You can
                      work your way up to higher level subjects with
                      repeated presses of sF1.

  1..9  ..........    If the help screen now being displayed lists lower
                      level or related help screens, these can be activated
                      by typing the NUMBER of the one you want to display.

.pb 23
A sample help screen looks like this:

+-- Entering Data ---------------------------------------------------------+
  Any time you are asked for data, the following data entry keys and          
  functions are available                                                     
                                                                              
  left/right arrow    - Cursor to left/right
  tab/bktab           - Forward/backward to next punctuation or space.
  home/end            - Cursor to start/end of line.
  del                 - delete char at cursor.
  ctrl end            - Delete to end of line.
  ins                 - Go into or out of insert mode.
  cF1..cF8            - Store text on function key.
  aF1..aF8            - Recall learned key at cursor location.
  sF1                 - Help.
                                                                              
  Related Helps:   1  - Learn keys                                            
                                                                              
                                                                              
 Enter a helpscreen number, or sF1 or <ret> to leave help
+--------------------------------------------------------------------------+

.fi
Typing a 1 would display the help screen on Learn Keys; typing an sF1 would
display a higher level help screen (the overview of SS1 in this case).
Typing a <ret> would return to your application.

.nf
Quitting and Suspending:
.fi
To quit any of the SS1 applications press shift F10.  You may be asked a
question or two having to do with saving your data.  You will then be
returned to the SS1 Main Menu.

To suspend any of the SS1 applications, press shift F9. You will be asked if you
want to suspend to the SS1 Main Menu, or to DOS, or if you want to execute a DOS
level command. Choose the Main Menu if you want to run another SS1 application;
choose DOS if you want to run some DOS commands or programs; choose execute if
you want to run a DOS command or another program and immediately return to SS1
(SS1 remains memory resident). In either case, your current application data and
environment will be saved so that you can return later just where you left. With
Main Menu and DOS suspend all files are updated on disk so that data will not be
lost if you choose not to return to the application. With execute you data is
only saved in memory rather than updating disk files, this means that you must
return to the application to update data. Suspended jobs are listed on the Main
Menu. See the Main Menu instructions (above) for restarting them.

.nf
Edit Keys:
Any time SS1 asks you to enter information, the following keys can be used
to reduce typing, correct mistakes.

left, right arrow   - Move the cursor left or right.
home, end           - Move the cursor to start or end of line.
tab                 - Move the cursor to next space or punctuation.
backspace           - Move the cursor back one.
del                 - Delete the character at cursor.
ins                 - Go into or out of insert mode.
ctrl end            - Delete text from cursor to end of line.
ctrlF1..ctrlF8      - Learn the text entered to a function key.
altF1..altF8        - Recall text previously learned to a function key.
ctrlF9..ctrlF10     - Record keystrokes to a function key.
altF9..altF10       - Playback keystrokes previously learned to a function
                      key.
sF1                 - Display help.

In many cases SS1 will provide you with a default. You can use the edit keys
to edit the default to what you want.

Examples:
  Default:          You Want:      Use These Edit Keys:
  B:STUFF1          B:STUFF2       end, left, '2'
  B:room            B:mushroom     right, right, ins, 'mush'
  C:playgolf.bas    C:playgolf.dat tab, tab, ctrl end, 'dat'
  A:junk            A:bombs.pas    right, right, altF4 (assuming that the F4
                                   had been previously learned to bombs.pas)


Learn Keys:
SS1 provides a facility to learn text strings to the function keys (F1
through F8) for recall at a later time. This capability is supported
throughout SS1, and can save a great deal of typing.

For example:
  - In the Editor:
     - To enter frequently use words or phrases.
     - To move or replicate small amounts of text quickly.
     - To enter words looked up in the spell or other lists.
  - In the File Manager:
     - To memorize the file name at the cursor location.
     - To enter file names.
  - In Communications:
     - To type frequently used commands to the host.
     - To enter words looked up in the spell or other lists.
  - In the List Manager:
     - To edit data lines.
     - To enter words looked up in the spell or other lists.
  - In the Spreadsheet:
     - Copy a cell value or equation.
     - Edit formula entries.
     - Transfer numbers from the calculator.
  - In the Aids:
     - To memorize a word in the spell check or other lists.
     - To remember or store a calculation result in the calculator.
     - In the files aid to remember a file name.

shift F6: 
.fi
Pressing shift F6 will display the current values of the learn
keys.  It will then allow you to either enter new values or edit the existing
ones for any of the learn keys.  The standard edit keys are available to
change values.
.nf

.pb 17
The screen looks like this:

+-- Sample Learn Keys Screen ----------------------------------------------+
Show/Change Learn Keys:                                                   
enter F1..F10 to change, <ret> to exit                                    
                                                                          
F1  Mary Had a Little Lamb                                                
F2                                                                        
F3  For I := 1 to Limit do begin                                          
F4                                                                        
F5  B:Edit.doc       -------+
F6                          |
   etc                      |
       etc                  |
                           To edit this string you would type F5.
+--------------------------------------------------------------------------+

When you have finished changing function keys, type <return> to return to
your application.

Using the learn keys within applications - 
.fi
To recall a value previously learned to a function key, position the cursor
at the desired screen location, and press alt Fn (where n is the number of the
function key to be recalled).

To save text on the screen to a learn key, you position the cursor at the
start of the text to be learned, and press ctrlFn (where n is the number of
the function key to be learned).

The chapter for each application provides more detailed explanations on use of
the learn keys within it.

.nf
Key Recorder
.fi

THIS SECTION HAS BEEN OMITTED FROM THE EVALUATION COPY DOCUMENT IN
ORDER TO SAVE DISK SPACE.

.nf
File Placement (Drives):
.fi
When SS1 is first installed, it expects to find all of the files it needs on
the default drive.  The Drives command allows you to tell SS1 to look in
other places for certain files.   This allows you to do things like 1)
put frequently used applications on RAM disk (transfers to applications on
RAM disk are instant), place all or part of SS1 in a subdirectory, or 3)
spread SS1 files over more than 1 diskette.

.nf
The following table shows all of the files that SS1 uses:

Name:       Function:                         When Needed:
SS1.COM     The SS1 main program and          At startup of SS1 and
SS1.OVL     SS1 aids and misc.                At startup of SS1 and
                                              at termination to
                                              remember settings

SS1.ED      Program code for Editor           When Editor is started
SS1.CO      Program code for Communications   When Communications is started
SS1.FM      Program code for File Manager     When File Manager is started
SS1.LM      Program code for List Manager     When List Manager is started
SS1.PR      Program code for Print/Format     When Print/Format is started
SS1.SP      Program code for Spreadsheet      When Spreadsheet is started

SS1.HLP     Help file                         When Help is needed

SS1.S       Spell aid word list               When Spell aid is used
SS1.A       ASCII table aid list              When ASCII table aid is used
SS1.P       Phone list aid                    When Phone list aid is used

SS1.PRN     Printer parameter file            When starting Print/Format
SS1.CFG     Communication configuration file  When starting Communications

SS1.SUS     SS1 creates this file on          Start of SS1 after suspend to
            suspend to DOS                    DOS

.pb 16
Drives is run by typing D from the Main Menu.  The following screen will
be displayed:

+----------------------------------------------------------
| Enter number of drive or path name to change >
| Quit or esc or sF1 for Help
|
| 1 File Manager                   Now =
| 2 Editor                         Now =
| 3 Communications                 Now =
| 4 List Manager                   Now =
| 5 Print                          Now =
| 6 Spreadsheet                    Now =
| 7 Help, spell, phone etc         Now =
| 8 SS1.OVL file                   Now =
|

.fi
To tell SS1 to look on drive B: for the Editor file, you would type "2",
then "B:".  To tell SS1 to look on a subdirectory called SS for the List
Manager, you would type "4", then "C:\SS" (assuming that SS is on drive C:)

Here are some alternative ways to arrange the SS1 files:

Simplest - Do not use the Drive command at all.  SS1 will expect to find
all SS1 files on the default drive.  If it can't find the file there, it
will prompt you to insert a disk with the file it wants.

Fastest - If you have more than 256KB of memory, you may want to create a RAM
disk drive (software to do this is usually provided with your memory expansion
card. Place the files for the parts of SS1 you use the most on the RAM disk.
If you place SS1.COM and SS1.OVL on RAM disk, then initial startup is almost
instant; if you place (for example) SS1.FM on RAM disk, then transfers to the
File Manager will be almost instantaneous.

Subdirectories - You can place all or some of the SS1 files on subdirectories.
Hard disk owners may find this useful to keep the top level directory from
getting too cluttered. However, putting files on subdirectories does degrade
access time.  The degradation is not particularly objectionable on a hard
disk.
.nf

Display:
.fi
If you notice "snow" or interference on your display when scrolling, then
from the Main Menu type a D (for Display). After the new menu comes up, type D
to change to Slow display mode (repeated presses of D will alternate between a
Fast and Slow display modes. The Slow mode will eliminate the interference, but
will result in slower scrolling. This should only be necessary when using the
IBM graphic display adaptor card.


```
{% endraw %}

## PERRPT.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1 
.he ||Software Performance||
.ce
SOFTWARE PERFORMANCE REPORT

.fi
If there are parts of SS1 that could be modified to improve it's usefulness
for your application, features you would like to see added, Or
changes to the document, we would like to hear from you.

To suggest a change fill out the form below with a description of the change
and mail it to:
.nf

                           Seattle Software Works
                           29303 - 63rd. Pl. South
                           Auburn, WA 98001





          Name                                                  

          Address                                               

                                                                

          Phone                         Computer                

          SS1 Version          


DESCRIPTION:                                                              

                                                                          

                                                                                                                                                      

                                                                                                                                                      

                                                                                                                                                      

                                                                                                                                                      



```
{% endraw %}

## PRINT.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1
.he ||Print/Format||
.fo |||Page 7-$P|
.CE
PRINT AND FORMAT

.fi
The Print and Format utility prints and formats files that were created in
the Editor or List Manager (it may also be able to print or format standard
text files that were created by other programs you write or use).
.nf

It offers the following features:
       - Pagination.
       - Headers and footers (with optional date, time and page numbers)
       - Margin and indent control.
       - Justification.
       - Underline and Bold printing.
       - Support for several printers, adaptable to many.

.fi
Most of the features are activated by commands that you imbed in the text of
your document. For example to leave 10 blank lines, you would put a line in
your file that says:
.nf

 .sp 10

All of the commands consist of:
  - A period followed by 2 characters, followed by an optional numeric
    or text argument. 
  - Each command must start in column 1.
  - Each command must be on a line by itself.

Note that a list of formatting commands is available in the Editor by typing
shiftF1 (help).

.fi
The Print/Formatter will print any standard ascii text file (with or without
the imbedded commands described below). The files can include output files from
other programs if the programs produce regular text files (for example, most
compiler listings). Do not attempt to print binary files (.com or .exe), or
files from other wordprocessors that have not been converted to standard ascii
text files.


Running the Formatter:
.br
To use the Print/Format utility, make the Print choice from the Main Menu.
You will be asked to enter the name of the file to print.  Enter your file
name and type <ret>.  You will then be asked for an output device or file,
with the default choice being the printer (PRN).  If the printer is OK, then
type <ret>, otherwise type in a file or device name and press <ret>.  You
will then be asked for the "First Page to Print:", with a default of page 1.
If you wish to have the first page to be printed be page 1, then press <ret>,
otherwise enter the number of the first page to be printed.  You will then
be asked for the last page to be printed, answer in the same way as for the
first page to print (specifying a large number will print all pages).

The print will then be started.  The page number that is currently being
printed is displayed on the screen.  

The print can be canceled at any time by pressing any key. If you press a key
to stop the print, there will be a delay while the rest of the buffer is
printed, then a message asking you to confirm the cancel will be displayed -
answer yes or no.

The Print/Format utility cannot be suspended.  You must either wait for it
to complete the print, or cancel the print.
.nf

Basic Commands:
 .bp n         Begin a new page with page number n. If n is omitted, it will
               be set to 1 greater that the current page.

 .sp n         Space down n lines. If n is omitted, than n is assumed to be
               1.

 .ce n         Center the next n lines. n is assumed to be 1 if not
               supplied. Centering is done between the current right margin,
               and the current indent level.

 .pl n         Set the page length to n lines.  The page length must be set
               to match paper you are printing on.  The most commonly used
               numbers are:
               66 for 11 inch long paper at 6 lines per inch (the default).
               51 for 8.5inch long paper at 6 lines per inch.
               88 for 11 inch long paper at 8 lines per inch.
               68 for 8.5inch long paper at 8 lines per inch.

 .ml n         Tell the print software what the maximum line length your
               printer can handle is n. Lines longer than n will be
               truncated at n. This will prevent the printer from "wrapping"
               lines, which will confuse pagination.

 .pb n         Protect block of n lines. When this code is encountered, if
               there are not at least n lines left on the current page, a
               new page will be started. This code can be used when you want
               to insure that a section of text (eg a table) is not split by
               a page break.

Filled Text:
.fi
The text formatter will take text with uneven line lengths and "fill" it into
text that is evenly formatted between the current indent level and the right
margin. For example if text filling is on, and the indent level is 10, and
the right margin is 60, then this text:
.nf

       This is text with uneven
       line
       lengths, because it was changed after it
       was entered. But its going to
       look great (or at least straight) after the formatter gets done
       with it.

Would come out looking like this:

       This is text with uneven line lengths, because it was
       changed  after it was entered. But its  going to look
       great (or at least straight) after the formatter gets
       done with it.

.fi
This allows you to enter text without worrying how it looks.  The text
formatter will straighten it out.  It also allows you to make extensive
changes to the document by only changing a few imbedded commands.

.nf
The following are used in conjunction with filling:
 .fi           Begin filled text.  The following text will be "filled"
               between the current indent level and the right margin.

 .nf           No filling.  Turn off filled text. Text after this will be
               printed "as is".

 .rm n         Set the right margin to column n. The right margin is used
               in centering text, and for filled text. The default is 80.
               Examples: .rm 78    set margin to col 78
                         .rm -10   sets margin to ten less than it was

 .in n         Set indent level to n spaces.  This will result in n spaces
               being printed before each line is started when filled text is
               being output.  Centering and filled text use indent.  The
               default is 0.
               Examples: .in 20    indent all following lines by 20.
                         .in +4    set indent level to 4 more than current.
                         .in -4    set indent level to 4 less than current.

 .ti n         Set a temporary indent of n spaces. The temporary indent will
               be used for one line only, then the indent level will revert
               to the value set by the .in command. It is used for starting
               paragraphs, or bullet items. The temporary indent can be
               expressed as a positive or negative increment from the
               current indent level. The default is 0.

               Examples: .ti 20   set indent for next line to 20.
                         .ti +6   set indent for next line to 6 more than
                                  current level. (-6 would also be legal)

 .br           Put a break in the filled text. This means start a new line
               with the following line of text. Use this command to
               explicitly start a new paragraph (a blank line will also
               trigger the start of a new paragraph).Other things that have
               the same effect as the .br command:
                - A blank line.
                - A .bp  command.
                - A .sp command.
                - A .ti command.
                - The .nf command.


Headers and Footers:
.fi
Commands are provided to print headers and footers on pages. The header
command provides for left, right and center justified portions, as well as
the capability to automatically include the time, date or page number in the
header or footer.
.nf

 .he |Left|Centered|Right|
               Place a page header at the top of each page. The portion
               between the first and second |'s is left justified, the part
               between the second and third |'s is centered, and the part
               between the last two |'s is right justified. The centering
               and justification take place between the indent level and
               right margin in affect at the time the .he command is
               encountered.

               The header for this page was printed with:
               .he |Print/Format|SS1 User Manual|Chapter 7|

 .fo |left|center|right|
               Provides the same capability for footers as is described
               above for headers.

               The footer for this page was printed with:
               .fo |$D||page 7- $P|

 $D, $T, $P    Print the date ($D), or time ($T), or page number ($P) as
               part of a header or footer. Simply imbed the commands in the
               header or footer text.


Including files:
.fi
The include file feature allows you to "pull in" text from outside files and
include it at any desired location in your file. This can be used to break up
long documents into more manageable units, or to include "boiler plate"
paragraphs or sections in your document.

The include files can be anything from a word or two to many pages of text.
Include files can themselves include files (to a limit of 3 deep).
The command is:
.nf

 .ci  getme.dat
               Change the source of input to getme.dat. Lines will be read
               from getme.dat until its end (or another .ci) is reached,
               then reading will continue on the line following the .ci
               command. 
               .ci files may contain .ci commands themselves to a
               level of three deep. This manual was created with a separate
               file for each chapter, then printed with a file that looks
               like this:

               .ci contents.doc
               .ci overview.doc
               .ci edit.doc
               .ci filemngr.doc
                 etc etc

               This keeps files to a manageable size, and allows several
               people to work on separate chapters of a document.

Bold and Underline:
.fi
Bold and underline codes placed in the text by the Editor will be honored by
the Formatter (use the F8 key to enter bold or underline in the editor).

Underline and bold are done by imbedding special characters in the file. Bold
printing is started when the formatter encounters a character with an ASCII
value of 2 (this shows up as a (bold) face on the screen). Bold printing is
stopped when a second ascii 2 is encountered.

Underline works the same way as bold except that the special character is an
ascii 22 (this looks like a chubby underline on the screen).  Your programs
can imbed these codes to do bold or underline.

Printer Control Strings:
.fi
The .ps command allows you to access your printers special features in a way
that can be tailored for your needs. Some example uses could include changing
pitch, changing fonts, or changing line spacing. The command is:
.nf

 .ps n         Send user defined printer control string number n. The
               printer control strings are defined by using the setup
               utility. There can be up to 9 (1..9) printer control strings,
               each with up to six characters.

               Example: You have an Epson printer, and you want to be able
               to print some sections in italics. Use Setup utility to tell
               SS1 to send the printer an esc "4" when .ps 1 is encountered,
               and an esc "5" when a .ps 2 is encountered.

               Then insert in your text the command .ps 1 to start italics,
               and .ps 2 to end italics.

Printer Support:
.fi
This section explains how to get the print/format utility to take better
advantage of the features of your particular printer.  It covers the
following subjects:
.nf
     -  The way in which SS1 accommodates variations  in printers.
     -  How to tell SS1 which printer you are using if it is one
        of the printers supported by SS1.
     -  What to do if SS1 does not support your printer.

How SS1 Supports Printers:
.fi
Before the Print/Format utility starts printing a file it looks for a file
called SS1.PRN.  This file (if it exists) is expected to have the parameters
that allow SS1 to take better advantage of the features of your printer.  If
this file does not exist, a set of default parameters is used.   The default
parameters will work with almost any printer, but in general, they will not
take best advantage of your printer's features.

Using SS1 Supported Printers:
.br
We provide printer parameter files for several common printers (they are
listed in appendix 3. If one of them matches your printer, then simply
copy it to the diskette that will be in the default drive when you run SS1.
The copy must be named SS1.PRN. In order for SS1 to find the file it must
either be on the default drive, or on the drive or path name that you have
defined for the SS1.HLP (help) file using the Drives command (see chap 1).

If your are in doubt about whether one of the supplied printer files will
work with your printer, then just try the most likely looking ones - no harm
will come if they don't work.

Build Custom Printer Parameter Files:
.br
If SS1 does not provide a printer parameter file for your printer, all is not
lost, you can build a printer parameter file based on an existing one, or
create a new one from scratch. To do this you use the Setup utility, which is
described in appendix 3.

The Setup utility is also used to access special features of your printer
that the supplied SS1 printer parameter file does not support.  Some examples
of the things that can be done by using the Setup utility to modify an
existing printer file are:
.nf
     -  Change printer pitches.
     -  Using letter quality or double strike modes.
     -  Changing fonts in mid document.




```
{% endraw %}

## SETUP.DOC

{% raw %}
```
.bp 1
.in 4
.ml 80
.rm 80
.he ||Setup||
.fo |||Page A2-$P|
.ce

THE ENTIRE SETUP UTILITY PROGRAM AND ALL OF THE DOCUMENTATION COVERING
THE SETUP UTILITY HAVE BEEN OMITTED FROM THE EVALUATION COPY OF SS1 IN
ORDER TO SAVE DISK SPACE.

THE SETUP UTILITY CONSISTS OF THREE PARTS HAVING THE FOLLOWING FUNCTIONS:

 - THE SCREEN PART OF SETUP ALLOWS YOU CUSTOMIZE THE SCREEN COLORS
   USED IN SS1.

 - THE COMMUNICATION PART OF SETUP ALLOWS YOU TO SET MANY COMMUNICATION
   PARAMETERS. THESE INCLUDE BAUD RATES, PARITY, HANDSHAKING, MAPPING OF
   KEYS TO ACTIONS, GRAPHING CHARACTERS, AUTODIAL SETUP AND MUCH MORE.
   IT ALLOWS YOU TO CREATE COMMUNICATION CONFIGURATION FILES TO EMULATE
   A VARIETY OF TERMINALS.

 - THE PRINTER SETUP ALLOWS YOU TO TAKE ADVANTAGE OF SPECIAL PROPERTIES THAT
   YOUR PRINTER MAY HAVE (EG SPECIAL FONTS), OR TO CREATE PRINTER
   CONFIGURATION FILES FOR PRINTERS NOT CURRENTLY SUPPORTED BY SS1.




```
{% endraw %}

## SS.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1
.he ||Spreadsheet||
.fo |||Page 8-$P|
.ce
SPREADSHEET

.fi 
The SS1 Spreadsheet is a general purpose spreadsheet capable of performing
all of the usual spreadsheet functions.  In addition it has some additional
features such as offering a third dimension (multiple pages), and offering
easy interchange of data with the other SS1 tools.

If you are familiar with spreadsheets in general and are tempted to "dive
right in", go ahead, but first read the part of this section that
explains how the SS1 spreadsheet differs from other common spreadsheets.
.nf


The topics covered in this chapter are:

       -  Introduction

       -  A Summary of Spreadsheet commands

       -  Some hints on how to use the Spreadsheet


.fi
Remember that help is available at all times when you are in the spreadsheet
by typing <shift> F1 and/or <shift> F2.
.bp
The top and bottom line of the screen are used to list the spreadsheet
commands (so you don't have to memorize them). Pressing <shift> F1 will bring
up help, which provides complete explanations of how to use each command.

The commands listed on the top line of the screen (aTop etc) are activated
by pressing the <alt> key, then the first (highlighted) letter of the command,
then releasing the <alt> key. The commands on the bottom line are activated
by pressing the indicated function key (eg F4 to copy a range of cells).

The second line on the screen lists 1) the current cell location on the screen
(eg 1A3 means that the cursor is on the cell at page 1, row 3, column A), 2)
the kind of information stored in this cell (FORMULA, LABEL, or EMPTY), and 3)
the current contents of the cell.

.nf
.pb 18
+--- Sample Spreadsheet Screen --------------------------------------------+
Spread: aTop aBot aFind aSetGlobal Ins Del aClr aPrint aInsfile aLoad aUpdte
1A4     LABEL :    Division                                                      
---|-------A-------|---B---|---C---|---D---|---E---|---F---|---G---|---H---      
  1|                                                                             
  2|                        Summary of Widget Sales for 1988                     
  3|                                                                             
  4|Division              Q1      Q2      Q3      Q4    Year                     
  5|  North            43690     990      56    5236   49972                     
  6|  South             3690     990     156     236    5072                     
  7|  East               690     990     456      36    2172                     
  8|  West               690     990     879    4436    6995                     
  9|                   -----   -----   -----   -----                             
 10|                   48760    3960    1547    9944                             
       etc                                                                       

F1Edit F3GoTo F4Cpy F5Format F6RptFnd F7CalcPg F8CalcAll F9Loc F10DelCell
+--------------------------------------------------------------------------+

.fi
To enter data in a cell you simply move the cursor to it, then type the data
in (see the section below on entering FORMULAS and LABELS for more detail).

There is a wide selection of commands (keys) to move the cursor to a new
location in the spreadsheet.  These commands are explained in the section on
Cursor Moving Keys.

.nf
SS1 Spreadsheet Features and Differences:
.fi
This section explains some important features and characteristics of the SS1
Spreadsheet.
You will want to read this section carefully even if you are familiar with
other spreadsheets, since it explains some the differences between the SS1
Spreadsheet and others, and some of its unique features.

.nf
Executing Commands:
.fi
The SS1 spreadsheet lists commands along the top and bottom of the screen,
and these commands are directly available by pressing the indicated key.
Many spreadsheets require that you press a special character (usually a /) to
bring up a menu of commands, and then a letter  to activate the command.

.nf
Multiple Pages:
.fi
Perhaps the most unusual (and useful) feature of the SS1 spreadsheet is
that it is a three dimensional (multiple page) spreadsheet.  This means that
the spreadsheet is organized as 255 pages in which each page is 255 rows by
64 columns.  This allows (for example) pages 1 through 12 to be used to
calculate monthly figures, and page 13 to be used for a yearly summary.  All
of the usual spreadsheet commands operate across pages, including copy,
calculations, ins/del rows, columns or pages etc.

Since SS1 is a multiple page spreadsheet, YOU MUST ALWAYS SPECIFY THE PAGE
as well as the row and column when referencing a cell.  For example the cell
12F34, occurs on page 12, column F, row 34.

.nf
Saving and Loading Files:
.fi
SS1 will ask you for the file name to store your spreadsheet model in when
you first enter the spreadsheet tool. You must supply a file name for the
model at this time. If you want to work on an existing model, enter its name.
If you want to start a new model, enter a new name for it. SS1 asks for the
name of the file at startup so that it will know the model file name in case
you want to suspend, and to maintain consistency with the other SS1 tools.
The spreadsheet will give you the opportunity on exit to update the file if
you wish to.

.nf
Find and Memorize:
.fi
The SS1 spreadsheet provides a find command that allows you to search the
spreadsheet of a particular text or numeric value you may be looking for. It
also provides a command to "memorize" the location of the current cell, so that
you can return to it later. These commands are very useful and also provide
consistency with the other SS1 tools.

.nf
Transferring Data:
.fi
Most of the SS1 tools use ordinary text files to store their data. This
results in completely transparent transfer of data between SS1 tools. In the
case of the spreadsheet it was necessary for performance reasons to store the
data in a file that is specially formatted, and that is not directly compatible
with the files used by the other SS1 tools. However, easy to use commands are
provided to transfer data between the spreadsheet and the other SS1 tools. The
aPrint command allows the transfer of data from the spreadsheet to any of the
other SS1 tools (or to outside programs), and the aInsFile command provides
for reading files created in the other SS1 tools into the spreadsheet. Read
the section on these commands for more detail.
.nf

Recalculation:
.fi
The Spreadsheet is recalculated by pressing the F7 key to recalculate the
current page, or F8 to recalculate all pages.  Since it is useless on all but
small models, an automatic recalculation mode is not offered.

.nf
Capacities and Limitations:
.fi
The SS1 spreadsheet provides 255 pages, each of which can have 255 rows and 64
columns. A maximum of 4000 of these cells can be filled. You will get an error
message if you exceed this limit. Maximum formula or label length is 64
characters (formulas can reference formulas in other cells if a formula
exceeds this length).

.nf
Entering Data:
.fi
To enter data in a cell, you simply move the cursor to that cell and type
the data in.  There are three types of data you may enter into a cell -
these are:
.nf
   LABELS These are text strings that are typically used for table headings,
          or to explain the numeric entries in the spreadsheet. LABELS can
          be up to 64 characters long, and can extend into cells to the
          right of the cell you enter the label as long as the cells to the
          right are free. SS1 will assume you are entering a label if the
          first character you type is not a number or an arithmetic
          operator. To enter a label starting with a numeric character,
          start the label with a single quote (eg '123 this will be a
          label).

   VALUES These are numbers.  Examples: 12, 45.66, +4, -5.666.

 FORMULAS These are formulas or equations. Formulas allow the value of the
          formula cell to depend on the values in other cells. If you
          entered the following equations in cell 1G22, the result would be:

               34.5+1A45        -Cell 1G22 is the sum of 34.5 and the
                                 contents of cell 1A45.

               2B10..2C12-4.0   -Cell 1G22 is the sum of all of the cells
                                 in the range 2B10..2C12 minus 4.0.

               1C4*(3.4+1C2)    -Cell 1G22 is computed by multiplying the
                                 contents of cell 1C4 times the quantity 3.4
                                 plus the contents of cell 1C2.

               +SIN(1C2)+1C4/4  -Cell 1G22 is computed by dividing the
                                 contents of cell 1C4 by 4, and adding the
                                 result to the sine of the angle stored in
                                 cell 1C2. The leading + must be entered as
                                 the first character to keep SS1 from
                                 thinking this is a LABEL rather than a
                                 formula.

               (1C3+3.4) 2.31   -Cell 1G22 is computed by adding 3.4 to the
                                 contents of cell 1C3, and then raising this
                                 quantity to the power 2.31.

          SIN in the example above is an example of a function. Other
          functions are available, and are explained in the commands section
          under Functions.

          The evaluation order for formulas is as follows:
               Functions (such as SIN) are evaluated first.
               The   (raise to power) is evaluated next.
               Multiplication and division are performed next.
               Addition and subtraction are performed last.
          If there is more than operation at the same precedence (eg two
          multiplies), then the operations are performed left to right.

          Parenthesis can be used to change the evaluation order - example:
            4 + 2*6 = 16
           (4 +2)*6 = 48

          When entering formulas sometimes it is more convenient to enter
          cell references by moving the cursor to the cell you want to
          reference rather than typing the cell into the equation. To do
          this during formula entry press F2, you will be placed in cursor
          entry mode. Using the cursor movement keys position the cursor to
          the cell you want referenced in your formula. The current cell
          location will be displayed in the formula as the cursor is moved.
          Press any non cursor movement key or F2 to return to type in mode
          with the cell reference added at the end of the formula. Press esc
          if you want to cancel the cell entry without adding the cell
          reference. If you enter an illegal formula, SS1 will print an
          error message that tells you to fix the error (you can use the
          edit keys), or press <esc> to abort the equation entry.

.fi
When you are entering data in a cell, you can make use of the usual SS1 edit
keys (eg arrows, ins, del, home, end etc). If you want to change the contents
of an existing cell, move the cursor to the cell, and press F1 (edit). This
will allow you to use the edit keys to change the cell. Press <ret> when you
have completed the change.  The cursor will be moved to the next cell when
you press <ret>; the direction of the "next" cell is determined by the
direction you last moved the cursor with the arrow keys.
If you want to delete the data in cell (possibly to replace it with new data),
move the cursor to the cell and press F10.


.nf
Entering Ranges:
.fi
Several of the spreadsheet commands (Copy, Print etc) ask you to enter a range
of cells.  A range of cells is all of the cells within a rectangular area.
You specify the range by typing in the cell descriptor for the upper left
corner or the area, then two periods, then the cell descriptor for the lower
right cell.  Here are some legal and illegal cell descriptions:
.nf

       1B2..1C4       Ok - specifies an area containing 6 cells.
       1C4..1C4       Ok - specifies an area containing 1 cell.
       1AB4..3AB6     OK - note that ranges can span pages.
       C4..D5         Illegal - page numbers must be included.
       1D5..1C4       Illegal - order must be upper right..lower left.
       1C5.1D56       Illegal - two periods must separate the cells.

.fi
SS1 offers two alternatives for entering ranges.  You can type them in
exactly as specified above, or you can use the arrow and other cursor moving
keys to move the cursor to the two corners of the range. Here is an
example:
.nf
  You are asked to enter the source range for a copy - the screen will look
  like this:

  Copy: enter source range  (eg aB4..1G10) or <esc>
  > 1D5..1D5

  Where 1D5 is the current cursor location. Using ANY of the cursor moving
  commands (arrows, home/end etc) move the cursor to the lower right corner
  of the range. The 1D5 will be updated to the cell the cursor is on as you
  move the cursor. When the correct lower right corner is displayed, type a
  <ret> to complete the source range entry. If you moved the cursor to cell
  1E9, the final display would look like this. > 1D5..1E9

  If you wish to change the first 1D5 (the upper left corner of the range),
  then press the <backspace> key. This will erase the ..1D5, and allow you
  to change the upper left corner of the range using the arrow keys as
  described above.


  This method is usually faster and easier than typing in the range.

  Notes:
  You can toggle between the type in method for entering a range and the
  cursor movement method by pressing F2. The default mode is enter the range
  using the cursor keys.

  If you are entering the second cell in a range, and decide you must
  correct the first cell, use the backspace key to return to the first cell.

  If you are typing in the cell range, then all of the regular edit keys are
  available (eg arrows, ins, del, home, end etc).

.bp
.nf
.ce
SPREADSHEET COMMANDS

This section provides explanations for each of the spreadsheet commands.

Starting The Spreadsheet:
To start the spreadsheet, type S from the Main Menu.

You Type:              Resulting actions:
S ...................  From the Main Menu. Type S. You will be prompted to
                       enter the name of a spreadsheet model to load. If you
                       want to load a previously saved model, enter its
                       name. If you are starting a new model, enter a new
                       name for it. If the file exists, it will be loaded,
                       if not you will be asked if a new (empty) model file
                       should be created (answer Yes or No). All spreadsheet
                       model files must have a .spd extension, however, SS1
                       will add the .spd extension if you don't


Leaving the Spreadsheet:
There are three ways to quit the spreadsheet:
<shift>F10 .........   Quit the Spreadsheet. You will be asked if you want
                       to Save the data to the same file you specified on
                       entry, save the data to a New file, or Quit without
                       saving your changes. Enter S, N, or Q (or <esc> to
                       return to the spreadsheet). If you use the N option,
                       you will be asked to enter a file name to save the
                       data to. All model files must have a .spd extension,
                       however, if you don't enter the .spd, SS1 will add
                       it.

<shift>F9 ..........   The spreadsheet will be suspended. You will be given
                       the option of suspending to the SS1 Main Menu, to
                       DOS, or eXecuting a DOS command. If you select
                       Suspend to the Main Menu (by typing S), your
                       spreadsheet data and environment will be saved, and
                       you will be returned to the SS1 Main Menu. From here
                       you can run any of the SS1 tools. The spreadsheet job
                       you just suspended will be listed in the suspended
                       job list and can be restarted in the usual way.
                       If you select suspend to DOS (by typing D), your
                       model data and environment will be saved, SS1 will be
                       terminated, and you will be returned to DOS. The next
                       time you start SS1, you will be returned to your
                       spreadsheet model in the exact position you suspended
                       from.

                       If you select eXecute a DOS command (by typing X) you
                       will be temporarily sent to DOS to run a DOS command.
                       When the command terminates, you will be instantly
                       returned to the spreadsheet. With this option, SS1
                       remains memory resident, which makes the return to
                       SS1 instant (it also requires more memory - a minimum
                       of 320K is required to make this option useful).

.bp
Cursor Moving Keys:
The following keys move the cursor to a new cell.

You Type:              Resulting Cursor Move:
<up/down arrow> .....  Move cursor up or down one cell.
<home> ..............  Move the cursor to the first cell of current row.
<end> ...............  Move the cursor to the last occupied cell in the
                       current row.
<pgdn>/<pgup> .......  Move cursor 12 rows up/down, scrolling if necessary.
aTop ................  Move cursor to first cell on current page of model.
aBottom .............  Move cursor to last  cell on current page of model.

F3 ..................  Go to a specific cell.  Press F3.  You will be asked
                       to enter the cell to move to (eg 2P45).  See also the
                       introductory section on enter cell specifications.

F9 ..................  Memorize a location, or return to a memorized
                       location.  Press F9.  You will be prompted to either
                       enter M to memorize the current location, or press
                       <ret> to return to a previously memorized location.

Enter/Edit/Delete Cell Data:
Entering a ..........  To enter data into a new cell, or to replace the data
                       new cell in an existing cell, move the cursor to the
                       cell and type in the new data. See the introductory
                       section on entering data. Formulas must start with a
                       number, +, -, or (. Text labels can be started with a
                       number by starting the label with a single quote (').
                       Any of the edit keys listed below can be used to
                       speed up data entry.

F1 ..................  Edit the contents of a cell. Move the cursor to the
                       cell to be edited, and press F1. You can then edit
                       the current contents of the cell using the SS1 edit
                       keys (listed below). See also the introductory
                       section on entering data.


The following keys are used when entering or editing data for a cell:
<left arrow> ........  Cursor left one column.
<right arrow> .......  Cursor right one column.
<home> ..............  Cursor to start of data.
<tab> ...............  Cursor to next word.
<end> ...............  Cursor to end of data.
<ctrl end> ..........  Delete from cursor to end of data.
<ins> ...............  Alternate between insert and typeover modes.
<del> ...............  Delete the character cursor is on.
<ret> ...............  Accept entered data, and leave the cell.
F2 ..................  Toggle between cursor and type in modes.
(Note: learn keys may also be used.)

F10 .................  Blank the cell that the cursor is on. Press F10. The
                       cell that the cursor is will be erased (no
                       confirmation is requested).

Insert or Delete Rows, Columns or Pages:
Use the following commands to insert or delete rows, columns or pages.

<ins> ................ Insert rows, columns or pages. Press the <ins> key.
                       You will be asked if you want to insert a Row, Column
                       or a Page. Answer by typing R, C or P. You will then
                       be asked how many rows, columns or pages to insert.
                       Type in a number, then <ret>. If you are inserting
                       rows or columns, you will then be asked if the
                       insertion is to be performed only on the current
                       Page, or on All pages. Answer P or A. The insertion
                       will then be performed, and any equations references
                       occurring after the insertion will be corrected.

<del> ...............  Delete rows, columns or pages from the spreadsheet.
                       This command works in exactly the same way as the
                       insert command described above.

Loading and Saving the Model:
Use the following commands to load or save the spreadsheet model.
aLoad ...............  Load a spreadsheet model from a file it was saved
                       to previously. Type <alt> L to request the Load. You
                       will be asked for a file name to load (normally a
                       default file name will be provided). Enter the name
                       of the file to load. This must be a file that was
                       previously saved by the spreadsheet, and it must have
                       the extension .spd (if you don't enter the .spd, SS1
                       will add it). It is also possible to insert tabular
                       data from an ordinary text file in the spreadsheet.
                       See the aInsfile command described below.

                       Note: This command will replace the current
                             spreadsheet model.

aUpdate .............  Save the spreadsheet model you are currently 
                       working on to a file without leaving the spreadsheet.
                       You should use the update command to save the model
                       you are working on from time to time. This takes very
                       little time, and insures that you will not lose data
                       if the power or computer were to fail while you are
                       working on the model. Type <alt> U to request the
                       update. You will be asked if you want to Save the
                       data to the file you entered with, or save the data
                       to a New file. Answer S or N. If you answered N, you
                       will be asked to enter a new file name to save the
                       model to (the file must have a .spd extension, SS1
                       will add it if you don't enter it).

aClear ..............  Clear the spreadsheet.  Press <alt>C.  You will be
                       asked if you want to perform this potentially
                       disastrous action. If you answer Y, all cells will be
                       blanked. WARNING - all changes that you made since
                       the last time you saved your data will be lost.


Printing, Inserting files, and Transferring Data:
aPrint ..............  Output a range of cells to the printer or a file.
                       Type <alt> P to begin a print.  You will be asked to
                       input the range of cells to be printed.  Enter the
                       range as described in the section above on entering
                       ranges.  You will then be asked for the name of the
                       printer or file to output the data to.  PRN (the
                       standard printer name) is provided as a default.  If
                       you wish to send the data to the printer, just type
                       <ret>.  If the data is to go to a file, enter the
                       name of the file and a <ret>.
                       The print command is also used to transfer the
                       contents of all or part of a spreadsheet to any of
                       the other SS1 tools, or to outside programs.  To do
                       this, just specify that your data be sent to a file
                       (as described above).  The print command writes a
                       standard ASCII text file which can be inserted in the
                       editor or data manager, and can also be read by many
                       outside programs.

F2 ..................  Alternate between cursor mode and type in mode for
                       entering the range of cells to be printed.  See the
                       introductory section on entering ranges of cells.

aSetGlobals .........  Set the default column format. Set printer 
                       parameters. To change the page length and/or maximum
                       line width for output printed by the Print command,
                       type <alt>S, enter the new pagelength, and/or width,
                       then press F1.

aInsfile ............. Insert the contents of a text file into the 
                       spreadsheet at the location you specify. Type <alt> I
                       to initiate the insertion. You will be asked to enter
                       the cell coordinates for the cell that will be at the
                       upper left corner of the insertion. Enter a cell
                       specification - eg 1G10. You will then be asked to
                       enter the name of the file to be inserted. Enter the
                       name and a <ret>. The data from the file will then be
                       inserted according to the rules described below. The
                       first non-blank line of the file determines how the
                       data will be inserted into the spreadsheet. For
                       example, if this file:

.pb 17
                            Month    Yr Income          Length
                              Jan    85  50566            67.8
                              Feb    85   4444             0.8
                            March    99    -55           33333

                       was inserted at cell 1C2, the spreadsheet would look
                       like this:

               ---|--A---|---B---|---C----|----D----|----E----|----F----|
                 1|
                 2|                   Month        Yr    Income    Length
                 3|                     Jan        85     50566      67.8
                 4|                     Feb        85      4444       0.8
                 5|                   March        99       -55     33333

                       The first non-blank line of the file is used to mark
                       the start of each column and the width of each
                       column. It must consist of text strings that start at
                       the beginning of each column, and end at the end of
                       the column. If the first line of the file you wish to
                       add does not conform to these rules, then you must
                       add one that does.

                       The insertfile command is also used to import data
                       from other SS1 tools into the spreadsheet, and from
                       external programs into the spreadsheet. For example,
                       if you have created a table in the editor and want to
                       read it into the spreadsheet, use the editors put
                       block command to put it into a file, then used the
                       insertfile command to read it into the spreadsheet.
                       You will usually have to add a first line to the file
                       to mark the columns as described above.

Copying Ranges of Cells:
F4 ..................  Make one or more copies of a source range of cells
                       into a destination range.  Press F4. You will be
                       asked to enter the source range. Enter the source
                       range (see range entry instructions in the
                       introductory section).  The source range can be
                       anything from 1 cell to an entire page.  You will
                       then be asked to enter the destination range. Enter
                       the destination range.
                       NOTES:
                       - To make multiple copies of the source range, enter
                         a destination range large enough to hold multiple
                         copies.
                       - The destination range can overlap the source
                         range, but must not be totally surrounded by it eg:
                         SOURCE:          DESTINATION:
                         1C4..1D5         1C4..1G12    - ok
                         1C4..1D5         1A1..1G12    - illegal
                         1F10..1G12       1C4..1G12    - ok
                         1F10..1G12       1C4..1H13    - illegal
                       - If the cells to be copied contain formulas, you
                         will be asked if the formulas are to be adjusted,
                         or left unchanged. If you elect to adjust formulas
                         (the usual choice), the equations will be changed
                         as they are copied to reference cells in the same
                         relative position from the destination cell as the
                         source cell did. If you do not adjust, the
                         equations will be copied exactly as is.

F2 ..................  Alternate between cursor mode and type in mode for
                       entering the range of cells to be copied.  See the
                       introductory section on entering ranges of cells.



Changing Column Format:
F5 ..................  Change the format for the column cursor is in. Press
                       F5. You will be prompted to enter the total width of
                       the column. Enter a number between 3 and 64. You will
                       then be asked for the number of decimals to display.
                       enter a number between 0 and 9. Enter 0 decimals for
                       text. To set the format to be used as the default for
                       all columns use the SetGlobals command.

                       NOTE: Only the first 10 pages can have unique
                       formats; pages 11 through 255 will use the format of
                       page 10.

aSetGlobals .........  Set the default column format. Set printer 
                       parameters. To change the default column format,
                       press <alt>S, enter the column total width and number
                       of decimals, then enter F1.

Recalculation:
F7 ..................  Recalculate the current page.  Press F7.
F8 ..................  Recalculate all pages of the model. Press F8. The
                       equations on the current page (or all pages for F8)
                       will be recalculated, and the display updated. If
                       equations in your model reference cells that are
                       downward or to the right (ie forward) whose values
                       can change, you may have to do the recalculation
                       twice to get accurate values. Because it is useless
                       for anything but small models, "automatic"
                       recalculation is not provided - so you must use F7 or
                       F8 to update the model after you make changes.

.nf
Functions:
The following functions are provided to perform calculations on spreadsheet
cells.

SIN(N)  .............  Calculate the sine N.
COS(N)  .............  Calculate the cosine of N.
ARCTAN(N) ...........  Calculate the arctangent of N.
SQRT(N) .............  Calculate the squareroot of N.
SQR(N)  .............  Calculate the square of N.
ABS(N) ..............  Calculate the absolute value of N.
LN(N) ...............  Calculate the natural log of N.
LOG(N) ..............  Calculate the base 10 log of N.
EXP(N) ..............  Raises e to the power of N.

1C2..1D4  ...........  Sum all of the cells in the indicated range.
1C2 1D4 .............  Raises 1C2 to the power of 1D4.

Examples of formulas containing functions:
       1C4..1C10             - sum the cells in column C from rows 4
                               through 10.
       (1C4..1E4)*(3.4+2D6)  - sum the cell in the range 1C4..1E4, and
                               multiply by the quantity 3.4 plus cell 2D6.
       3C4..6E12             - sum all of the cells in columns C through E,
                               rows 4 through 12 over pages 1 through 6.
       SIN(34)+SQRT(1C45)    - Add the sine of 34 degrees to the squareroot
                               of the contents of cell 1C45.












```
{% endraw %}

## SUPPRN.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1 
.he ||Supported Printers||
.fo |||Page A3-$P|
.ce 
SUPPORTED PRINTERS

.fi
Special support is provided for the following list of printers. See the
appendices on Installation and Setup, and the chapter on the Print
Formatter for details on how to install and use these printer pattern files.
If your printer is not listed here, you might try some of the ones that are
listed (many dot matrix printers emulate the Epson printer), or you can
create or customize a printer pattern file for your printer; see the Setup
appendix.  A ".DOC" file is also supplied for each that shows how the printer
is set up, and what the .ps strings do.
.nf

DIABLO    DIABLO.PRN    Diablo 630 (and most other Diablos).

EPSON     EPSON.PRN     All Epson printers (and many other printers).

HP        HPLASER.PRN  Hewlett Packard Laser Jet Printer.

OKIDATA   OKIDAT.PRN    Okidata Printers.

PROWRITER PRO.PRN       C. Itoh Prowriter

QUME      QUME.PRN      Qume letter quality printers.

TI855     TI855.PRN     TI 855 printer using the "WP" codes.
                        (use EPSON.PRN  for "DP" codes)

TTX1014   TTX1014.PRN  Teletex TTX-1014 printer.


```
{% endraw %}

## EDIT.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1
.he ||Editor||
.fo |||Page 4-$P|
.ce
TEXT EDITOR


.fi
This chapter covers the Editor. The Editor is used to create text files. These
files can be programs, letters, reports, tables etc. You will probably find
that the easiest way to learn to use the Editor is to start it up and
experiment with it as you read over this chapter.

.nf
The topics covered in this chapter are:

   - Introduction

   - A Summary List of Edit Commands

   - How to Use the Editor

   - Full Explanations of Edit Commands

.fi
Remember that help is available at all times when you are in the Editor 
through the <shift> F1 and <shift> F2 keys.


.bp
.fi
The top two lines, and bottom line of the screen are used to display Editor
commands.  In addition, pressing the help keys, <shift> F1 and <shift> F2,
provide expanded explanations of the commands.  These two features should
minimize any need to refer to this manual.

The commands listed on the top line of the screen (aFind etc) are activated by
pressing the <alt> key, then the first (highlighted) letter of command, then
releasing the <alt> key.

A "Ruler" is provided on the third line of the screen.  The Ruler shows column
positions, tab settings, and the right margin.  These ruler settings are
changed by using the set ruler command (F7). 

.nf
.pb 21
+--- Sample Editor Screen -------------------------------------------------+
Edit: aFind aReplace aView aBottom aTop aInsFile aOops aStats aUpdate aJust
sF1help sF2Help on Quit & Aids   cFN,aFNSto/RecallKey
....|.T..1....|.T..2....|T...3....|.T..4....|..T.5....|T...6....|T...7....|.R..8.
                                                                                 
                                                                                 
                                                                                 
     The text you are                                                            
                                                                                 
                        editing appears here.                                    
                                                                                 
                                                                                 
                                                                                 
        Don't forget that shiftF1 provides all kinds of Help!                    
                                                                                 
                                                                                 
                                                                                 
                                                                                 
                                                                                 
F1SelBlk F2BlkCmds F3InsLn F4Join F5Dup F6Rpt F7Rulr F8Bold F9Loca F10DelLn
+--------------------------------------------------------------------------+
.fi


The Editor is a "screen" editor, meaning that text is entered by simply moving
the cursor to a location (using the arrow keys, tab etc), and typing the text
in. Text can be typed in a "type over" mode or "insert" mode. Pressing the
<ins> key alternates between the two modes. When you are in the insert mode the
cursor looks like this =, and when in typeover mode it looks like this _. When
you are in the insert mode, text on the line to the right of the cursor is
pushed over to make room for the typed text. In the type over mode, the new
text replaces the old.

The bottom line of screen is also used to display messages and warnings.
.nf

Limitations:
.fi
The maximum file size that can be edited is 60,000 characters (about 30 pages).
As you approach this limit a LOW MEMORY warning will be displayed. If you
actually reach the 60K limit, you will not be allowed to use any commands that
add text to the file. The best way to handle long documents that would exceed
this limit is to put each chapter in a separate file, and then use the
include file feature of the Print/Format application to combine them at print
time.

The maximum line width allowed in the Editor is 200 characters.
.nf

File Compatibility:
.fi
The files produced by the Editor are completely compatible with the files
produced by the List Manager (and viceversa). For example, a table created
in the Editor can be sorted or column edited in the list manager without
running any conversion utilities.  The Spreadsheet files are not directly
compatible with the editor files, but the Spreadsheet provides
commands for exporting data to the editor, and importing edit files to the
Spreadsheet
(see the Spreadsheet Print
and Insfile commands).
.bp 
.nf 
.ce 
Editor Command Summary

This section provides a quick reference summary of edit commands.  The last
section of this chapter provides complete descriptions for each command.

Starting Editor:
There are three ways to start the Editor.

You Type:              Resulting actions:
E ...................  From the main menu. Type E. You will be prompted 
                       for a file name to edit.

<up/downarrow>, .....  From the File Manager, move cursor to file to edit,
then E                 type E, type <ret> if file name displayed is correct.

J, <up/downarrow>, ..  Restarting a previously suspended edit from the
then S                 suspended job list in the main menu.  The J  puts
                       the cursor into the suspended job list; move the
                       cursor to the desired job; type S to Start that job.

Leaving the Editor:
There are 3 ways to leave the Editor.

<shift>F10 ..........  Normal Quit.
                       You will be offered these choices for the
                       disposition of your data:
                       Save     - Use the data in memory to replace the
                                  file you entered the editor with.
                       Newfile  - Save data in memory to a new file.
                       Quit     - Do not save data in memory.

<shift>F9, SS1 Menu .. Suspend edit, and go to SS1 main menu.
                       The edit you have in progress is added to the
                       suspended job list, and you are returned to the SS1
                       main menu.
<shift>F9, DOS ....... Suspend edit, and execute a DOS command.
                       The edit you have in progress is added to the
                       suspended job list, SS1 is terminated, and you are
                       returned to DOS. Next time you start SS1 the
                       suspended edit can be restarted from the suspended
                       job list. 
<shift>F9, eXec .....  Suspend edit, and eXecute a DOS command. The edit you
                       have in progress is suspended, you are prompted for
                       the DOS command or program to run. After the program
                       executes, you are returned to the edit. SS1 remains
                       in memory during the process, so the return to the
                       edit is rapid.

Cursor Moving Keys:
The following keys move the cursor around on the screen.

You Type:              Resulting Cursor Move:
<up arrow> ..........  Up one line
<down arrow> ........  Down one line
<left arrow> ........  Left one column
<right arrow> .......  Right one column
<home> ..............  To first non-blank character of the line
<home><home> ........  To first column of line
<end>  ..............  To end   of line
<ctrl>A .............  Left one word
<ctrl>S .............  Right one word
<ctrl>Q .............  To top of screen
<ctrl>Z .............  To bottom of screen
<ctrl><pgup> ........  Move cursor to start of paragraph.
<ctrl><pgdn> ........  Move cursor to end   of paragraph.
<ret> ...............  Move cursor to start of next line.  If in insert
                       mode, insert a new line below current line.

Commands To Move Through the File:
The following keys and commands are provided to move to different locations
in the file.

You Type:              Resulting Move:
<pgdn> ..............  Scroll down in file 12 lines.
<pgup> ..............  Scroll up   in file 12 lines.
<ctrl><left arrow> ..  Scroll screen 20 columns to left in file.
<ctrl><right arrow>..  Scroll screen 20 columns to right in file.
aBottom .............  <alt>B - move to bottom (end) of file.
aTop ................  <alt>T - move to top  (start) of file.
F9 ..................  Move to the start or end of selected text block, or
                       move to last "memorized" location, or "memorize" a
                       new location. 
aView ...............  <alt>V Scroll screen so that the cursor is at mid
                         screen.

Text Entry and Edit Keys:
.fi
The following keys and commands are available to enter text, delete text, or
modify the appearance of text.
.nf

You Type:              Action Performed:
<ins> ...............  Alternate between typeover and insert modes.
                       In insert   mode the cursor looks like this =.
                       In typeover mode the cursor looks like this _.
<del> ...............  Delete the character under cursor.
altD ................  Delete the word under cursor.
<ctrl><end> .........  Delete text from the cursor to the end of the line.
F10 .................  Delete the current line.
F3  .................  Insert a new line at the cursor position. If the
                       cursor is at the start of line a blank line results.
                       If cursor is in mid-line, the line is split into two.
F4 ..................  Join the next line of text onto the current line.
F5 ..................  Copy a word from the line above to the current line
                       starting at the cursor position.
<ret> ...............  Move cursor to start of the next line.  If in insert
                       mode, insert a new line below current line.

Block Commands:
.fi
The following commands are available for copying, moving, deleting or writing
blocks of text to a file.  The block must be selected (using F1) before block
commands can be used.
.nf

You Type:              Action Performed:
F1 .................   Select block to operate on.
                       Move cursor to start of block, press F1.
                       Move cursor to end of block, press F1 again.
                       
F2 .................   Select block using F1 (above).
                       If doing a move or copy, move cursor to the
                       destination. Press F2, type C for Copy, M for Move, D
                       for Delete, or P for Put to a file.

Find and Replace:
.fi
The following commands are available to find a text word or phrase, and/or
replace it with another.
.nf

aFind ..............   <alt>F - Find a word or phrase in the file. Options
                       include direction of search, and closeness of match.

aReplace ...........   <alt>R - Replace a word or phrase in the file 
                       with a new one. Options include direction of search,
                       exactness of match, verification and number of
                       occurrences to replace.

Insert File:
aInsFile ...........   <alt>I - Insert a disk file at the current cursor
                       location. You will be asked for the name of the file
                       to be inserted.


Update File:
aUpdate .............  <alt>U  Save the data being edited to either the
                       file you entered with, or a new file. This command
                       takes only about 3 seconds to complete, and restores
                       your exact position in edit. It should be used often
                       to avoid any chance of data loss.


Justify:
.fi
This command allows you to change the left and right margins of paragraphs
after the paragraph has been entered, or to "straighten up" the margins on a
paragraph after text additions have made it uneven.
.nf

aJustify ............  <alt>J - This is a 3 step process.
                       1. Set the right margin (F7) to the desired column.
                       2. Move the cursor to upper left corner of paragraph.
                       3. Press aJustify. Choose whether paragraph is to be
                          justified from the start of the paragraph, or only
                          from the cursor down. See the detailed command
                          explanations for more.

Auto Indentation:
F7 ,then "A" ........  Toggle "auto indent" mode. The current mode is
                       displayed in set ruler (F7).


Bold, Underline:
F8, then "B" or "U"..  Underline or emphasize (bold) text. Move the cursor
                       to start of text. Press F8. Press "B" for bold, "U"
                       for underline. Move the cursor to the end of the
                       text. Press F8. Press "B" or "U" again.

Aids:
These aids are always available in SS1.  See the Aids Chapter for more detail.

<shift>F3  ..........  Activate the ever ready  four function calculator.
<shift>F4  ..........  Activate the spell, phone list and Ascii table aids.
<shift>F5  ..........  Save the data now on the screen to a file.
<shift>F6  ..........  List or change the learn keys.
<shift>F7  ..........  Run the files utility, which lists directories, shows
                       or deletes files.
<shift>F8  ..........  Graph rows or columns of data from the screen.

Learn Keys:
<ctrl>F1 thru .......  The text from the current cursor position to the
  <ctrl>F8             end of the line is learned to the pressed key.

<alt>F1 thru  .......  The text that was previously learned to the pressed
  <alt>F8              key is inserted or overtyped at the current cursor
                       location.
<shift>F6 ...........  List or change the learn keys.

Record/Playback Keys:
<ctrl>F9,F10 ........  Start the keystroke recorder.
<alt>F9,F10  ........  Play back the keystroke recorder.

Print Formatter Commands:
.fi
The following list of Print Formatter commands can be imbedded in your
document to control the format of the printed file. The chapter on the print
formatter provides more detail.  An editor help screen is provided to remind
you how the formatter commands work.
.nf

Command   Default   Function
  .bp n   n=+1      Page break,begin page n
  .ce n   n=1       Center next "n" lines
  .fi               Start automatic formatting of text into paragraphs.
  .nf               Stop  automatic formatting of text into paragraphs.
  .br               Cause a break (ie an end of paragraph)
  .fo |left|center|right|   Page footer
  .he |D$|SS1 User Manual|Page $P|    Page header title, with date and pg #
  .in n   n=0       Indent n spaces
  .ls n   n=1       Line spacing is "n" (eg n=2 is double spacing)
  .nf               Stop filling
  .pl n   n=66      Set page length
  .rm n   n=68      Set right margin
  .ml n   n=80      Maximum line length, longer lines will be cut off
  .sp n   n=1       Space down "n" lines (leave n blank lines)
  .ti n   n=0       Temporary indent n
  .ps n   none      Send a user defined text string to printer (to activate
                    a special feature).
  .ci file name     Start reading input data from file name
  .ml n             Set maximum printer line width to n (prevents wraps)
.bp
.ce
Using The Editor

.fi
This section covers some of the more important things you will want to know in
using the Editor.
.nf

Starting The Editor
There are three ways to start the Editor.

.pb 8
Starting an Edit from the Main Menu:
Enter the "E" choice from the main menu.  You will then be asked to enter a
file name to be edited:

    +--------------------------------------------------------
    | Enter Data File Name:                    or <esc>
    | >B:SAMPLE.FIL
    |
A default file name may be provided. If the default name is correct, just
press <ret>, if not, then edit it into the correct name using the edit keys
then press <ret>.

.pb 6
If the file does not exist, the following prompt will be displayed:

    +--------------------------------------------------------
    | No such file, Create it?
    | Answer Yes or No,    or sF1 for help
    |
If you want to start a new file type "Y", if you accidentally entered a
wrong file name, then type "N".

Starting the Editor from the File Manager:
If you wish to edit a file directly from the file manager, move the file
manager cursor to the file to be edited and type an "E". From there on the
interaction is just as it would be if the edit had been started from the
Main Menu.

Restarting Suspended Edits:
Edits that have been suspended will appear on the suspended jobs list that
appears on the main menu. To restart such an edit, type "J" to put cursor in
the Suspended job list, then move the cursor to the edit using the arrow
keys, then type "S" to reStart the edit.



Saving Data
When you begin editing a file, a copy of the file is read into memory. All
of the changes you make during an edit session are made only to the "in
memory" copy until you request that the file itself be updated. This means
that if the computer or the program should die, or you accidentally delete
some of the text, or the cat walks over the keyboard, all of the changes you
have made since the last update could be lost.

The aUpdate command is provided to make the updating of the file a very
painless and fast process - using the aUpdate command saves your data and
returns you to the edit right where you left off, in about 3 seconds. To use
update, type <alt>U. The following will appear:

.pb 4
   +--------------------------------------------------------
   |  Update and Return: Save, save data to a New file >
   |  <esc> returns to edit, sF1-Help

Enter S if you just want to update the file you entered the edit with. Enter
N if you want to save the in memory copy of your data to another file. It is
a good idea to do a Save to a backup copy every once in a while. (preferably
to a separate diskette).


Leaving The Editor
There are three ways to leave the Editor.

The Normal Exit:
.fi
The normal exit of the Editor is used when you have completed your edits, and
will not be editing the file again soon.
Type <shift>F10.  The following prompts will be displayed:
.nf

.pb 4
   +--------------------------------------------------------
   | Quit Edit: Save, save to New file, Quit without saving data >
   | <esc> returns to edit,  sF1-Help
   |
Type "S", "N", or "Q".
Use S if the in memory copy of your data is to replace the file you entered
with.
Use N if the in memory copy of your data is to be saved to a new file.  In
this case you will be prompted for a file name.
Use Q if the in memory copy is to be discarded.  Any changes made since the
last time the file was saved will be lost.

Suspend Edit to SS1 Main Menu:
.fi
This useful feature allows you to put your edit on hold while you run some
other SS1 utility, or edit another file.
Type <shift>F9, and answer S for SS1 Main
Menu. Your data file will be updated, and your position in the file and edit
environment will be saved. The edit will be added to the suspended jobs list on
the Main Menu. If you restart the edit later, you will be returned to the same
place in the file, and all edit settings (margins, modes etc) will be restored
to what they were at the time of the suspension. No data will be lost if the
edit is never restarted, because the data is saved as part of the suspend
process.

.nf

Suspend Edit, Return to DOS:
.fi
This option allows you to put your edit on hold while you exit to DOS to run
some DOS commands. Type <shift>F9, and answer D for DOS. Your data file will be
saved, your position in the file and edit environment will be saved, and SS1
is terminated.  The next time
SS1 is started the edit can be restarted from the SS1 suspended job list.
You will be placed back in the edit just where you left it. No
data will be lost if the edit is not restarted, as the data is saved as part of
the suspend process.  SS1 is not retained in memory under this option, so
startup takes longer than the eXec option (below), but less memory is
required.
.nf

Suspend Edit, eXecute a DOS Command:
.fi
This option allows you to put your edit on hold while you exit to DOS to run
a DOS command. Type <shift>F9, and press X to eXecute the DOS command.  Enter
the name of the DOS command or program to run.
Your data file will be, and the DOS command is run.  When the DOS command
completes, you are returned to the edit just where you left.  Since SS1 is
retained in memory during this process, the edit is restored faster than the
DOS option described above, but you must have sufficient memory for SS1 and
the DOS command to be in memory together.
.nf

Entering Text
.fi
For the most part, to enter text just move the cursor to the desired location
and begin typing. If you are adding new lines, use the insert mode (press <ins>
until the cursor looks like this =. When you are in insert, a new line will
be added each time you press <ret>.

Some hints are provided below for the use of some of the special features of
the Editor, and for entering certain types of text.
.nf

The <ret>, F3 and F4 keys:
.fi
The <ret> key behaves somewhat differently in this Editor (better we think)
than in some other editors.
.nf

.fi
In typeover mode, typing a <ret> moves the cursor to the start of the next
line. In the insert mode, typing a <ret> creates a new blank line below the
current line. The cursor is placed in column one if "auto indent" is off, or to
the column under the first character of the current line if "auto indent" is
on.

Pressing the <ret> key never inserts a carriage return character in the file,
(ie never breaks the line) - it is used only to move the cursor to the next
line.

The F3 key is provided for cases in which the current line needs to be broken
into two lines. To use it, move the cursor to the column where the break is to
occur, and type F3.

The F4 key joins the next line to the end of the current line (the opposite
of F3).
.nf

Learn Keys:
.fi
The learn keys (see chapter 1) can be used to save up to 10 frequently used
words or phrases up to 80 characters each.  For instance, a key could be
learned to:
.nf
   SUBROUTINE
   or
   FOR I = 1 TO 20 DO
   etc.
and recalled each time one of these phrases is to be entered.

.fi
The learn keys are also useful for moving small amounts of text around, or for
replicating a word or phrase in a number of places.

To learn text on the screen to a learn key, move the cursor to the start of the
text to be learned, and type <ctrl>F1 through <ctrl>F10 - the text following
cursor will be learned to the pressed key. 

To recall previously learned text, move the cursor to the location that the
text is to be recalled, and press <alt>F1 through <alt>F10 - the text that was
previously learned will be recalled. It will be typed over or inserted
according to the mode you are in.
.nf

Auto Indent:
.fi
Programmers using languages that encourage indentation of source code for
clarity (eg Pascal, C etc) will want to:
.nf
  1) Set the tab interval to a convenient value (eg F7,4).
  2) Turn auto indent on, (F7, "A" toggles auto indent mode).
  3) Enter insert mode.
.fi         
This will result in the cursor being returned to the indent level of the
current line each time a <ret> is pressed.  To increase or decrease the indent
level, type a tab or back tab.

"Auto indent" is also used to type indented paragraphs of straight text. See
the section below on typing reports, memos etc.
.nf

Duplicate Line Above:
.fi
The F5 key can be quite useful when you need to type in two or more lines that
are similar. Type in the first line, then position the cursor under the first
line, each press of the F5 key will copy a word from the line above onto the
current line starting at the cursor position. This feature is often useful in
writing programs or in typing tables of data.
.nf

Memorizing Locations:
.fi
The F9 key can be used to memorize a location in the file to which you may
want to return to later. To do this, type F9, and select the Memorize option.
To return to this location later, type F9 and <ret>. F9 can also be used to go
to the start or end of the "marked" block of text if there is one.
.nf

Letters, Memos, Reports
.fi
The Editor provides some wordprocessing capability and can be used to produce
respectable looking documents (this one for instance).
.nf

To Enter New Paragraphs of Text:
.fi
Go into insert mode by pressing the <ins> key until the cursor looks like
this =.  Set the right margin to the right edge of the paragraph (F7).

Type in the text. When you reach the right margin a "word wrap" will occur,
this means that your cursor is moved to the start of next line, and if the last
word typed would extend over the right margin, it is moved to the next line.
.nf

To enter indented paragraphs:
.fi
Set "auto indent" on by typing F7 and pressing "A" until it says "auto indent"
is on. Make certain that the right margin is set correctly, and that you are in
the insert mode (see above). Move the cursor to the left margin for the
paragraph. Type in the paragraph. Each line will wrap back to the column in
which the paragraph was started.
.nf

To add text to an existing paragraph:
.fi
To insert text in the middle of a paragraph, follow these steps. Move the
cursor to the location at which the text is to be inserted. Type F3, this will
move the remaining text on the line to the next line. Type the new text. If
the added text exceeds the line length, it will be wrapped. After all of the
new text is typed in, press <alt>J (aJustify) - this will justify the
paragraph between the right and left margins. If you choose the Cursor option
of the justify command, the paragraph will be justified only from the cursor
to the end of the paragraph, and the left margin will be set to the column of
the cursor. See the detailed description of the justify command.
.nf

To type hanging indent paragraphs:
.fi
Do the following to enter hanging indent paragraphs.  Type in the first line
of the paragraph, end it by typing a <ret> (don't let it wrap).  Tab over to
the desired indent level for the rest of the paragraph, and type the rest of
the line of the paragraph allowing each line of the paragraph to wrap to the
indent level of the second line.
.nf

                                                      +- end the first line
                                                      |   with a <ret>.
          This is a sample hanging indent paragraph to
                  show how it could be done.  End the
tab over          first line with a <ret> and space over
to here  -------  to here.                             |
after first                                            |
line is entered.                                       +- right margin.

Print Formatter Commands:
The print formatter (the "P" choice on the main menu) offers a number of
additional capabilities, including:
   - Page headers and footers with page numbering and time/date stamping.
   - Left and right margins control that is more flexible than
     that which is described above.
   - Right justification.
   - Centering, underlining, and bold printing.
   - Page length and line width.

.fi
Print formatter commands are imbedded in the file. These all take the form of a
period followed by a 2 letter command, optionally followed by a numeric or text
argument. Each command must appear on a line of its own, and must start in the
first column. Examples:
.nf
   .he |Editor|SS1 User Manual|Chapter 4|  (page header for this page)
   .ls 2                                   (set double spacing)
   .ce 3                                   (center next 3 lines)
   .bp                                     (begin next page)
   .fo |$D||Page 4 - $P|                   (footer for this page)
For more information on these commands see the chapter on the Print
Formatter.

.bp
.ce
FULL EDIT COMMAND DESCRIPTIONS

This section contains full explanations for all edit commands.

THIS SECTION HAS BEEN OMITTED FROM THE EVALUATION COPY DOCUMENT IN
ORDER TO SAVE DISK SPACE.
IT CONTAINS 10 PAGES OF DETAILED EXPLANATIONS FOR EDITOR COMMANDS, AND
USAGE EXAMPLES.



```
{% endraw %}

## EPSON.DOC

{% raw %}
```
Printer Pattern File for Epson Printers:


Bold = Epson hardware emphasized.
Undl = Epson hardware underline
ps 1 = compressed print on
ps 2 = compressed print off
ps 3 = italics on
ps 4 = italics off
ps 5 = double strike on
ps 6 = double strike off
ps7..ps9 not used




```
{% endraw %}

## FILE1415.TXT

{% raw %}
```
Disk No: 1415
Program Title: SS1 version 2.0 (Disk 2 of 2)
PC-SIG version 1

This is the second disk of the SSI set, both disks are needed to run the
program.  This disk contains the documentation for the program and the
first disk contains the program.  For a full description of the program,
refer to disk #1414.

Program Limitations:  This is an evaluation copy and, while it is fully
functional, there are limitations.  The spreadsheet, 64 columns by 255
rows, is only half the size of the full program.  The Spell Checker
dictionary is omitted along with almost half of the system
documentation.  Users who register their copy will receive a full
system, a printed manual, a set of quick reference cards, support, and
update news.

Synopsis:  Spreadsheet, word processor, and communications combo with a
selection of pop-up desktop functions.

Usage:  Wordprocessor/Spreadsheet/Communications/Disk File
Management/Calculator.

Special Requirements:  360K memory.

How to Start:  Type GO (press enter).

Suggested Registration:  $50.00

File Descriptions:

DOC     <DIR> Subdirectory containing program documentation.
DIABLO   DOC  Info for specified printer.
DIABLO   PRN  Printer driver.
DIABLO2  DOC  Info for specified printer.
DIABLO2  PRN  Printer driver.
EPSON    DOC  Info for specified printer.
EPSON    PRN  Printer driver.
LASERJET DOC  Info for specified printer.
LASERJET PRN  Printer driver.
SAMPLE   SPD  Sample data file.
TI855    DOC  Info for specified printer.
TI855    PRN  Printer driver.
TTX1014  DOC  Info for specified printer.
TTX1014  PRN  Printer driver.
TTY      CFG  Configuration file.
VT       CFG  Configuration file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FM.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1
.he ||File Manager||
.fo |||Page 3-$P|
.ce
FILE AND DIRECTORY MANAGER

.fi 
The File/Directory Manager provides the capability to do many common file
operations such as copying, deleting, viewing, printing, protecting etc. The
file manager will also show you an entire directory tree, and allow you to
quickly show any of the subdirectories. The File Manager is exceptionally easy
and natural to use, and provides many safeguards and extra features not
available in the equivalent DOS utilities. The best way to learn the File
Manager is to start it up and play with it as you scan through this chapter. 
.nf


The topics covered in this chapter are:

       -  Introduction

       -  A Summary of File Manager commands

       -  Some hints on how to use the File Manager


.fi
Remember that help is available at all times when you are in the File
Manager by typing <shift> F1 and <shift> F2.
.bp
The top lines of the screen are used to provide a menu of available commands,
and the name of the directory being displayed.  The bottom lines are
used to display the current function key meanings, and to show
remaining disk space and "marked" file size.  If the top line of the
screen ends with ... <spc>, then additional commands are available, and their
names can be displayed by pressing the space bar.

The rest of the screen is used to list file information for the files in the
directory being displayed. Information on each file includes name, size, date,
time, and whether it is protected or has been modified since creation.

The cursor will be to the left of one of the files on the list (this line
will also be highlighted).  The up/down arrows, pgdn/pgup, Top and Bottom,
and home/end keys will move the cursor and/or scroll the list of files.  The
position of the cursor is important because most of the File Manager commands
act on the file that the cursor is on.

The allowed commands are listed on the top of the screen and on the bottom
line of the screen. The top of screen commands are invoked by typing the first
letter of the command. The commands listed on the bottom line of the screen are
invoked by typing indicated function key. Examples: to Copy a file type C, to
Print a file type P, or type F10 to protect a file from accidental deletion.

.nf
.pb 18
+-- Sample File Manager Screen --------------------------------------------+
Commands: Find Show Rename Delete Copy Print Killprn Top Bot eXec .. <spc>
This Dir is: A:*.*                                      Quit    Files:  67
    File/Dir Name       Size  Date      Time     Modified    Protected
    WORK.DAT             456  9/29/84   11:56PM   YES          YES
    WORK.PAS           24456  9/30/84    8:56AM   YES          NO
    GAMES    <SUBDIR>    456  9/29/84   11:56PM   YES          NO
    ZEBRA.ZOO             22  3/11/83    6:56AM   NO           NO

   etc
       etc
          etc

Available Disk Space: 45000    Marked file Size: 87562    AutoRead=ON

F1NewDir F2ReRead F3MultiFile F4Mark F5Markall F6Tree F9Mod F10Protect
+--------------------------------------------------------------------------+

.fi
The Show command is used both to show the contents of a file, and to list the
files in a subdirectory. If the cursor is on a normal file (i.e., not a
subdirectory), Show will display it's contents on the screen, and you will be
offered a new set of commands that include scrolling through the file, Finding a
string in the file or going to the Top or Bottom of the file. If the file is a
subdirectory, then Show will display the list of files in that subdirectory, and
all of the File Manager commands can be used on the new subdirectory. (this can
be continued down through several subdirectory levels). After Show of a
subdirectory, the Quit command exits the subdirectory, and redisplays its'
parent directory. The Show and Quit commands offer a very easy way to navigate
up and down the DOS directory tree - use Show to go deeper (downward) in the
tree, and Quit to go upward in the tree.

The Order command allows you to change the order in which files are listed
on the screen.  The choices include by name, date, size or extension
in ascending or
descending order.

The "multi file" mode allows you to copy, delete, or rename a whole group of
files with one command.  This is accomplished by "marking" the files using
the F4 or F5 keys, and then entering the multi file mode by typing F3.

.pb 4
The entire directory tree for a disk can be shown by using the F6 (Tree)
command.  Any of the subdirectories can then be displayed by moving the
cursor to it and typing the Show command.


A set of directory commands is also offered. These include: 1) creating new
subdirectories, 2) listing the
displayed directory, and 3) displaying a new directory. The names of these
commands will be displayed on the top line of the screen if you hit the space
bar.

The File Manager always provides the following safeguards:
.nf
       - The <esc> key allows you to escape from commands started by mistake.

       - Confirmation is requested for commands that could result in the
         loss of data (e.g. deletions, or copying over an existing file).

       - On a copy, if the destination file exists, you will be offered the
         options of Replacing the file, Appending on to it, or escaping the
         copy.


.bp
.nf
.ce
FILE MANAGER COMMANDS

This section provides explanations for each of the file manager commands.

Starting File Manager:
There are two ways to start the file manager.

You Type:              Resulting actions:
F ...................  From the Main Menu. Type F. You will be prompted
                       to enter the name of a directory name to show.

                       Note: DOS wildcards can be used to limit the number
                       of files displayed.

J, <up/downarrow>, S.  Restarting a File Manager job from the list of
                       suspended jobs on the Main Menu.


Leaving the File Manager:
There are three ways to quit the File Manager.
<shift>F10 .........   Quit the current File Manager job.  Pressing Quit
                       will have the same effect if you are at the highest
                       level directory.
<shift>F9 ..........   The File Manager will be suspended. You will be given
                       the option of suspending to the SS1 Main Menu, or to
                       DOS.  Select the Main Menu if you want to run another
                       SS1 application, select DOS if you want to run DOS
                       commands, or another program.
                       In either case, the File Manager job will be added to
                       the suspended job list so that it can be reactivated
                       later.
eXec  ..............   eXec allows you to execute a DOS command, and then
                       instantly return to the file manager (details below).

Cursor Moving Keys:
The following keys move the cursor to a new file, or to scroll through the
list of files.

You Type:              Resulting Cursor Move:
<up/down arrow> .....  Move cursor up or down one line
<home>/<end> ........  Move cursor to top or bottom of screen
<end>  ..............  To end   of line
<pgdn>/<pgup> .......  Scroll the list of files a half screen up or down
Top/Bottom ..........  Move cursor to start or end of list


File Commands:
The following commands operate on files listed on the screen. All of these
commands operate on the file the cursor is on.
Remember that you may type sF1 to obtain help on the commands available, and
on how to answer any questions the File Manager asks.

Copy ................  Make a copy of the file the cursor is on.  You will
                       be prompted for the name of the destination file (or
                       device) to copy the file to.  The default name will
                       be the name of the cursor file, use the edit keys to
                       edit the default into the destination name.  For
                       example if the cursor was on A:AFILE, and you wanted
                       to copy this to B:AFILE, just type a B over the A and
                       type return.
                       If the destination file already exists, then you will
                       be asked if it is to be Replaced (overwritten), or
                       if the data in the cursor file is to be Appended
                       to the end of the destination file.

Delete ..............  Delete the file the cursor is on.  Confirmation will
                       be requested - type a Y to confirm the delete, or N
                       to cancel the delete.

Edit ................  Invoke the text editor.  You will be asked to enter a
                       a file name to edit, with the default being the file
                       the cursor was on.  If the default is OK, just type
                       return, otherwise enter a file name and type return.
                       Note: that this allows you to edit a file other than
                       the one the cursor is on when E is typed.
                       The File Manager job is suspended before you enter
                       the Editor.  When you exit the Editor, the File
                       Manager job will be on the suspended job list, and 
                       can be resumed in the usual way.

Find ................  Move the cursor to a file. You will be asked to enter
                       part or all of a file name to move the cursor to.
                       Note that in most cases you need only enter the first
                       letter or two of the file name - e.g., entering SL 
                       will find the first file on the list starting with SL.

Killprint ...........  Kill (stop) a print that is now going on in the
                       background. (see Print below)

Print ...............  Print the file the cursor is on in the background.
                       You will be asked if you want the file printed with
                       the "default" header - answer Y or N. The default
                       header prints the name of the file, date, time and
                       page number at the top of each page. You will be
                       asked to enter the maximum line width your printer
                       will accommodate. This is used to truncate lines that
                       would cause your printer to "wrap" a line, which
                       would confuse the File Managers pagination of the
                       file. The file will be printed in the background,
                       meaning that you can do other SS1 functions while it
                       prints, but you cannot leave SS1.

Rename ..............  Give the file the cursor is on, a new name. You 
                       will be prompted for the new name. The default will
                       be the file's current name. Enter the new name and
                       type return (the edit keys can be used to save typing
                       as usual). Notes: The new name must be on the same
                       disk. If a file with the new name exists, the rename
                       will not be performed, and a warning message is
                       displayed.

Show ................  Show (display on screen) the file that the cursor
                       is on. If the file is a subdirectory, then the list
                       of files in it will be displayed, and you will be
                       allowed to perform all of the File Manager commands
                       on the new subdirectory. If the new directory
                       contains subdirectories, then their contents may be
                       displayed by using Show again. If the Show command is
                       used to show a subdirectory, then typing the Quit
                       command will return you to it's parent directory. If
                       the file the cursor is on is not a subdirectory, then
                       its contents will be displayed on the screen. A new
                       set of commands that allow scrolling, etc., will be
                       displayed on the top of the screen. These commands
                       are explained below. The Show command is intended to
                       show text files, and while there will be no harm done
                       if other types of files are shown, the contents may
                       not be displayed in a very meaningful format.

eXec  ...............  Execute (run) the file the cursor is on.  After
                       typing X, you will be prompted for the name of the
                       program to be executed (the default will be the name
                       of the file the cursor was on). Type in (or edit) the
                       file name to be executed, and any parameters to be
                       passed to the program. These should be typed in just
                       as though you were executing the program from a DOS
                       prompt.
                       The program will be executed. When the program
                       completes you will be returned to the file manager.
                       SS1 remains in memory while the other program is
                       executed; this means that 1)you must have enough
                       memory for both SS1 and the program to be executed,
                       and 2)that the return to SS1 will be instant.

F1, F2, F3, F4, F5, F6 See Directory, and Multifile commands (below)

F9  .................  Mark a file as modified or unmodified.  DOS keeps
                       track of whether a file has been modified since its
                       creation. This command allows you to override DOS's
                       current modify setting. The practical use of this
                       command is that some backup utilities can be told to
                       only backup files that have been modified. So by
                       marking a file as modified or not, you can control
                       whether or not it will get backed up. Repeated
                       presses of F9 toggle the modify bit. The current
                       setting of the modify bit is shown in the second
                       column from the right for each file.

F10 ................   Delete protect a file.  If a file is not delete
                       protected, pressing F10 will protect it, and vice
                       versa. The "protected" column shows whether a file is
                       currently protected or not. This command can be used
                       to prevent you (or someone else) from accidentally
                       deleting or overwriting a valuable file.


Show File Commands:
.fi
When you invoke the show command on a file, the file will be read in and
displayed on the screen.  The following commands will then be displayed on
the top line of the screen, and will be available until you press Quit to end
the Show.

The horizontal bar and pointer that are displayed along the bottom of the
screen show the relative position in the file of the screen being displayed.
For example, if the pointer is near the right end of the bar, you are near
the end of the file.

.nf
up/down arrow  .....   Scroll the display one line up or down.
left/right arrow ...   Scroll the display 20 columns to the left or right.
                       The column corresponding to the left edge of the
                       screen is displayed on the ruler line.
                       Maximum displayable width is 200 columns.
pgdn/pgup ..........   Scroll the display one half screen up or down.


Bottom/Top .........   Go to the start/end of the file and display it.

Find ...............   Find the next occurrence of a text string in the
                       file, and display the part of file starting at that
                       string. Notes: Letter case is always ignored, and the
                       search direction is always forward. The found string
                       will be highlighted, and will always be displayed on
                       the top line of the text window. If the string is not
                       found, a message will be displayed, and you will be
                       left at the end of the file. See also F6.

Goto ..............    Goto a position in file that you specify.  After
                       typing G, you will be confronted with a bar and
                       pointer similar to the one that is always displayed
                       on the bottom of the screen. Use the arrow, tab,
                       backtab, home and end keys to move the arrow from its
                       current position (which marks your current location
                       in file) to the place you want to go, then type
                       return. You will be transported to the new location,
                       and it will be displayed. This is easier to use than
                       to explain - just try it!

F6 ................    Repeat last find. After you have used the Find command
                       to find the first occurrence of a text string, the F6
                       command can be used to find the next, next, next,
                       etc. occurrences without having to reenter the text
                       string for each search.


Multi File Commands:
.fi
The following commands allow you to delete, copy or rename a whole group of
files with one command.  To use multifile, first mark all of the files to be
operated on using F4 and/or F5.  Then type F3 to go into multi file mode.
.nf

F4 ................    Mark or Unmark the file the cursor is on.  If the 
                       file is now marked it will be unmarked, and vice
                       versa. Marked files will be indicated with an arrow
                       head on the left side of screen. The total size of
                       all files you have marked is displayed on the bottom
                       of screen.

F5 ................    Mark or Unmark ALL files.  If the file the cursor is
                       on is unmarked, then all files will be marked, and
                       vice versa.  If you want to mark most files on a
                       directory, use F5 to mark all of them, then F4 to
                       unmark those you don't want.

F3 ................    Enter the multi file mode.  The top line of screen
                       will be changed to offer the three commands listed
                       below. These commands will apply to all marked files.

Copy ..............    Copy all marked files to another directory.  You 
                       will be asked to enter the name of the disk or
                       subdirectory to which the marked files are to be
                       copied. The files will be copied to the new
                       directory. The name of the file being copied is shown
                       on the screen. The copying process can be stopped at
                       any time by hitting the space bar. Note: Before the
                       first copy is started, SS1 will check to see if there
                       is space on the destination disk for all of the
                       marked files. If not, it will ask you if you want to
                       proceed. If some of the files you have marked will
                       replace files on the destination directory, then
                       there may be enough space, and you may want to go
                       ahead with the copies. In any case, if there is
                       insufficient space to complete an individual copy,
                       SS1 will not perform the copy, and will beep and
                       display a message.

Delete ............    Delete all marked files.  You will be asked to 
                       confirm that you really want to delete all those
                       files. If you answer Y, then the files will be
                       deleted. The names of the files being deleted are
                       displayed as they are deleted, and the process can be
                       stopped at any time by pressing the space bar.

Rename ............    Rename all marked files to a new directory. You 
                       will be asked for the name of the new directory to
                       rename the files to. The new directory MUST be on the
                       same disk as the one the marked files are now in
                       (therefore at least one of the directories must be a
                       subdirectory). The names of the files being renamed
                       will be displayed as the process rolls on. Pressing
                       the space bar will stop the renames. Note: This the
                       closest thing to a rename directory that SS1 offers.
                       That is, to rename a subdirectory, 1) Make a new
                       subdirectory with the desired name, 2) rename all of
                       the files in the old directory to the new one, then
                       3) Delete the old one.


Directory Commands:
.fi
The following commands operate on entire directories (or disks). Commands are
provided for: 1) creating new subdirectories, 2) listing the directory
information for files in a directory, and 3) displaying a new directory.
These commands are available whenever the File
Commands (described above) are. The names of the commands will be displayed on
the top line of the screen if you press the space bar. The commands can be
invoked whether or not their names are currently displayed.
.nf

.pb 15
Makenewdir .......     Create a new subdirectory. You will be asked to enter
                       the name of the new subdirectory.
                       Notes: You must conform to DOS's pathnaming
                       conventions. Examples:

                       A:\newsub           <-- ok - creates a dir called
                                               "newsub"
                       a:\seattle\homes    <-- ok if a subdirectory named
                                               seattle already exists.
                                               Creates new dir "homes"

                       \subber             <-- ok - creates "subber" on
                                               default drive.
                       c:/badsub           <-- NO - must use \ not /

F1  ................   Read in and display the contents of a new directory.
                       You will be asked to enter the name of the directory
                       to display.  DOS wildcards are OK.  The files for the
                       new directory will be displayed.  To return to
                       directory you were in before doing the "N", use the
                       Quit command.


Listdir ..........     List the directory information for the directory
                       currently being displayed to the printer or a file.
                       You will be asked to enter the name of the device or
                       file to list the directory to. The default will be
                       PRN, which is the printer.

F2 ...............     Reread the current directory.  The two most common
                       reasons for using this are. 1) To show the contents
                       of a new disk you have placed in the disk drive, or
                       2) For large directories the File Manager switches to
                       a mode in which the directory listing on the screen
                       is not updated after each command that would change
                       it (e.g. a rename will not make the renamed file
                       disappear from the screen listing). Pressing the F2
                       key will force a redisplay of the correct data.


File Order Commands:
.fi
The Order command allows you to change the order in which files are
displayed on the screen.  The Order command is available anytime the File
Commands (described above) are.  Its name will be listed on the top line of
the screen if you press the space bar.  The following options are offered
after you press O.
.nf

Name .............     Show files in alphabetic order by file name.
Time-date ........     Show files in chronological order.
Size .............     Show files in by size of the file.
eXtension ........     Show files in alphabetic order by file extension.
Ascend ...........     Do the listing in ascending order.
Decend ...........     Do the file listing in descending order.


Tree Command:
.fi
The tree command is used to show the entire directory tree for a disk drive. It
is executed by pressing the F6 key. You will then be asked to enter the letter
of the disk drive to be displayed. The tree for that drive will be displayed as
shown below. 
.nf

Dir Tree: arrows <home> <end>  --- then Show Quit

  B:   -------+- MOUNTS ------+- RAINIER
              |               +- GLACIER
              |               +- SLOAN
              |
              +- CITIES ------+- YAKIMA
                              +- TACOMA

Use the arrow keys to move the cursor to the directory of interest, and
Show it by typing S.



```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                <<<<  Disk No 1415 SS1 (Disk 2 of 2)  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Insert disk #1414 and type GO (press enter)                             ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INDEX.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1 
.he ||Index||
.fo |||Index $P|
A                                       delete,file 3-5,8
aFn 1-4                                 display 1-10
aids 2-1                                display options A2-2
alt keys 1-4                            display, interference 1-10
altF1 to altF8 1-7                      DOS, suspend to 1-6
applications, overview 1-2              dot commands 7-1
ASCII list 2-2                          drives command 1-9
auto dial modem A2-5                    duplicate line,editor 4-15
auto-indent,editor 4-10                 
                                        E
B                                       echo 5-6,5-10,A2-5
backup A1-1                             edit keys 1-4,1-6
bar graph 2-5                           edit,file manager 3-5
baud rate 5-6,5-10,A2-5                 editor 4-1
bits per character 6-6,5-10             editor,limitations 4-2
block commands,editor 4-5,14            editor,overview 4-2
bold,editor 4-7                         editor,quit 4-4
                                        editor,start 4-1,4-8,
C                                       editor,text entry 4-5,
calculator 2-1                          editor,usage hints 4-9
cFn 1-4                                 entering data 1-6
commands,editor 4-3,13                  entering text,editor 4-9
communications, arrow key use 5-7,5-12  
communications, basic functions 5-2     F
communications, cable 5-5               file aid 2-3
communications, commands 5-3            file manager 3-1,3-2
communications, config file 5-5,60,A2   file manager,commands 3-4
communications, dial 5-9                file manager,cursor 3-4
communications, disconnect 5-9          file manager,quit 3-4,6
communications, display 5-2             file manager,startup 3-4
communications, exit 5-3,5-5            file placement 1-9
communications, first use 5-6           files, SS1 1-9
communications, graphics 5-7            files,editor 4-2
communications, line feeds A2-13        find,editor 4-6,15,17
communications, overview 5-1            find,file manager 3-5
communications, parameters A2-4         fonts, printer 7-5
communications, receive file 5-8        format files 7-1
communications, requirements 5-5        function keys 1-4
communications, scroll buffer 5-12      
communications, send file 5-8           G
communications, setup 5-10              goto,file 3-7
communications, start 5-3,5-5           graph, example 2-5
control keys 1-4                        graph, screen 2-5
copy,editor 4-5,4-14                    graphic commands A2-14
copy,file 3-5,4-7                       
ctrlF1 to ctrlF8 1-7                    H
cursor,editor 4-4,13                    hardware required 1-1
                                        help 1-4, 1-5, 1-6
D                                       
date, print 7-4                         I
default directory 3-9                   include files, print 7-4
delete,editor 4-5,14,17                 indent,editor 4-7,11
.bp
insert file,editor 4-19                 
insert line,editor 4-15                 O
insert,editor 4-9,4-13                  oops,editor  4-19
installation, of SS1 A1-1               overview, applications 1-2
                                        overview, SS1 1-1
J                                       
justification, of text 7-3              P
justify,editor 4-7,4-11,4-20            page no, print 7-4
                                        parameters,passed 1-1,10
K                                       parity 5-6,5-10,A2-5
key conventions 1-4                     phone list 2-2
key programming 1-4,1-8                 phone number A2-5
key recorder 1-8                        pitch, printer 7-5
                                        playback keys 1-4,8
L                                       print, in FM 3-5
learn keys 1-4,1-7                      print,file 3-5
learn keys,editor 4-10                  print/format 7-1
line graph 2-5                          printer, setup 7-5, A2
list directory 3-9                      printers, supported 7-5,A3
list lookup 2-2                         program keys 1-4,1-8
list manager, column edit 6-7,6-13      protect,file 3-6
list manager, commands 6-5              
list manager, create block 6-8          Q
list manager, create fields 6-6,6-12    quit jobs 1-2,1-5,1-6
list manager, cursor commands 6-4,6-8   
list manager, delete record 6-11        R
list manager, display 6-2               record keys 1-4,1-8
list manager, edit record 6-12          recovery, of data 1-10
list manager, exit 6-4,6-15             rename,file 3-5,3-8
list manager, find 6-14                 replace,editor 4-7,4-15,4-17
list manager, go to record 6-14         reread directory 3-9
list manager, locate 6-14               ruler,editor 4-11,4-16
list manager, mark records 6-8          running, SS1 1-1
list manager, order columns 6-13        
list manager, overview 6-1              S
list manager, report 6-6,6-10           save screen 2-4
list manager, search 6-9                save,editor 4-4,4-8
list manager, select records 6-8        screen colors A2-2
list manager, sort 6-13                 setup A1-1, A2-1
list manager, start 6-4                 sFn 1-4
                                        shift keys 1-4
M                                       shiftF1 1-5
macros 1-4,1-8                          shiftF2 1-4
main menu 1-2                           shiftF3 to shiftF8 1-4,2-1
make directory 3-8                      show,file 3-5,6,7
mark,file 3-7                           snow,on display 1-10
memorize,editor 4-16                    spell lookup 2-2
modem type A2-13                        SS1, files 1-9
modified,file 3-6                       SS1, overview 1-1
move,editor 4-5,14                      SS1.CFG A2-4
multi-file,file manager 3-7             SS1.PRN 7-5
multiple hosts on-line 5-7              starting applications 1-2
.bp
startup 1-1, A1                         
stop bits 5-6,5-10,A2-5                 
suspend jobs 1-2,1-4,1-6                
                                        
T                                       
tabs,editor 4-16                        
text entry,editor 4-5                   
time, print 7-4                         
                                        
U                                       
underline 4-7                           
update,editor  4-7                      
                                        
MISC                                    
$D, print date 7-4                      
$P, print page no 7-4                   
$T, print time 7-4                      
 .bp begin page 7-2                     
 .br break 7-3                          
 .ce center 7-2                         
 .ci include files 7-4                  
 .fi fill text 7-3                      
 .fo footers 7-4                        
 .he headers 7-3                        
 .in indent 7-3                         
 .ml max length 7-2                     
 .nf no fill 7-3                        
 .pl page length 7-2                    
 .ps print control 7-4                  
 .rm right margin 7-3                   
 .sp space lines 7-2                    
 .ti temp indent 7-3                    
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        
                                        

```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1 
.he ||Installation||
.fo |||Page A1-$P|
.ce 
INSTALLATION

.fi
The evaluation copy of SS1 comes on two diskettes.  The first diskette
contains all of the files needed to run SS1.  The second diskette
contains the evaluation copy document, printer support files, and
communication files for various terminals.
.nf

Step 1: Printer Setup. (optional)
.fi
SS1 provides taylored support for many common printers. If you don't perform
this step SS1 will use a default set of print parameters, which will probably
work on your printer, but will probably not take best advantage of it. Follow
the steps below if you want SS1 to be able to take maximum advantage of your
printer:
.nf

1. Look through the list of supported printers in appendix 3, and find the
   name of the printer pattern file for your printer.

2. Place diskette 2 disk in drive B: and diskett 1 in drive A:, then
   issue this command:

   COPY B:EPSON.PRN  A:SS1.PRN
   Where in this example it is assumed that you have an EPSON printer.

If you don't find a file for your printer, or you want to do further
customization, then you will want to run the printer setup portion of the
SETUP utility.
NOTE: THE SETUP UTILITY IS NOT PROVIDED IN THE EVALUATION COPY IN ORDER
TO SAVE DISK SPACE.

Step 2: Printing the manual.
The documentation for the SS1 evaluation copy is located on diskette 2
in a subdirectory called \DOC.  Each chapter is in a separate file.
The manual should be printed by using the SS1 print utility in order to
get proper pagination and formating.  To print the document:

1. insert diskette 1 in drive A:, with A: as the default drive. Turn your
   printer on.

2. Type ss1 to start the ss1 program.

3. Select the "Print" menu choice by typing "P".

4. Insert diskette 2 in the A: drive.

5. You will then be asked for a file name.
      To print the entire document (about 90 pages), enter
      \DOC\ALL.DOC.

      To print a single chapter, enter the filename for that chapter --
      for example, to print the editor chapter, enter \DOC\EDIT.DOC.

6. Carriage return through the rest of the inputs.

To run SS1, make A: your default drive, place disk 1 in drive A:, and
type SS1.

The Overview section on the manual has information on installing SS1 on a
hard disk, and on which SS1 files are needed for each SS1 module.

```
{% endraw %}

## INTRO.DOC

{% raw %}
```
.bp 1
.ml 80
.rm 80
.in 4
.he ||SS1 Introduction||
.fo |||Page intro-$P|

.ce
WHAT IS SS1?

The SS1 package provides the following functions:

     - Editor and Wordprocessor.
     - File and Directory browser.
     - List/Data Manager.
     - Communications to other computers.
     - Spreadsheet.

In addition to the above major functions, SS1 provides "popup" aids that
can be used from anywhere in SS1.  These aids include a calculator, a
spelling aid, an aid for graphing data, a files/directory aid, and an aid
for "learning" keys.

SS1 also features context sensitive help, job suspend and resume, keyboard
macros and learn keys, a consistent and easy to learn user interface, and
much more.


.ce
WHATS IN THE EVALUATION COPY?

The evaluation copy of SS1 is a fully functional version of SS1 that you
can use to decide whether you want to buy SS1.

The evaluation copy is fully functional except for the following omissions:

   - The document has been abreviated to about half of its normal size.

   - The setup utility (which allows you to customize screen colors,
     customize the communication module, and customize printer support)
     has been omitted.

   - The Spelling Aid dictionary has been omitted.

The omissions allow SS1 and the documention to fit on two floppy disks,
and give you some additional incentive to purchase the package.


.ce
WHY SHOULD I BUY SS1?

Buying SS1 will get you the following benefits:

   - The latest release of the SS1 software, including the setup
     utility, and spelling dictionary, which have been omitted from the
     evaluation copy.

   - A profesionally printed, typeset document.
     The document is approxmately 200 pages, and contains about twice as
     much material as the evaluation copy document.

   - A set of Quick Reference Cards.
     There is a quick reference card for each SS1 module.

   - Notification of future releases of SS1.

   - Peace of mind.
     The great feeling that you have paid for what you are using, and have
     done your bit to fund future SS1 developments.

.ce
HOW DO I BUY SS1?

Send fifty dollars to the address listed below.

       Seattle Software Works
       29303 63rd Place
       Auburn, Wa
       98001

   Or call:
       (206) 641-9368

Please be sure to include your full address.
We accept cash, checks, money orders, Master Card, and Visa.

We pay the shipping inside the USA.  If you live outside the USA, please
include an allowance for extra shipping.


WHAT ARE THE LIMITATIONS ON USE OF THE SS1 EVALUATION COPY?

You may:
   - Make copies of SS1 for your own use, and distribute it
     to your friends.

   - Use the evaluation copy in your personal or business work to decide
     if you want to purchase SS1.

You may not:
   - Sell SS1 to anyone.

   - Change the program.

   - Use SS1 or any portion of SS1 in any product that you sell.

You should not continue to use SS1 without buying it.

The SS1 package is protected by copyright.


FEEDBACK
We appreciate hearing from SS1 users.  We would like to hear about what
you like and don't like, and what enhancements you would like to see.


Thanks.



```
{% endraw %}

## LASERJET.DOC

{% raw %}
```
.pl 60
.in 6
.rm 80
.ps 2
.ce
SS1 to LaserJet

The Printer Pattern File for HP LaserJet printers is set up this way:

Bold = is done by printing a second pass that is vertically offset from
       the first pass.  If you have bold versions of each font you use,
       you may want to change this to select the bold font.
Undl = Uses the laser printer hardware underline.
ps 1 = Start 10 pitch
ps 2 = Start 12 pitch
ps 3 = Start 15 pitch
ps 4 = Change to portrait orientation
ps 5 = Change to landscape orientation
ps 6 = not used
ps 7 = not used
ps 8 = not used
ps 9 = reset printer to power up settings

Page Length:
Use a page length of 60 for 11 inch paper, and page length of 45
for 8.5 inch paper. This allows for the laser printers half inch
unprintable areas at the top and bottom of the page.

To do normal looking  12 pitch document use:
 .pl 60       <- page length 60
 .ps 2        <- 12 pitch
 .rm 80       <- right marg in col 80
 .in 8        <- left marg to 9
 .he |A header||Today $D|
 .fo |||Page $P|

 Your text. blaaaaaaaaaaaaaaaaaah --

Landscape Printing:
Use the sequence shown below when going from portrait to landscape or vice
versa. This keeps the print format software, and the printer in sync.

 .bp                 <- tell software to start a new page
 .rm 90              <- select the wide paper margin
 .he |new header|||  <- must put header in again if you want it to
 .fo |||a foot|         follow right margin (same for foot)
 .ps 5               <- tell printer to go into landscape mode
 .pl 45              <- laser printer only prints 45 lines on 8.5 inch
 This is your wiiiiiiiiide (landscape) text.



```
{% endraw %}

## LM.DOC

{% raw %}
```
.rm 80
.in 4
.ml 80
.bp 1
.he ||List Manager||
.fo |||Page 6-$P|
.nf
.ce
LIST MANAGER

.fi 
The List Manager is a screen oriented data manager which can be used for
mail lists and other record keeping functions. Since it uses standard text
files, it is also useful for column editing and record selection in files
that have a mix of data types such as tables in a letter. The List Manager
allows records to be sorted, selected for report generation, and edited. 

.nf

The topics covered in this chapter are:

       -  Introduction

       -  A Summary of List Manager commands

       -  Some hints on how to use the List Manager

       -  Full Command Descriptions


.fi
Remember that help is available at all times when you are in the List
Manager by typing <shift> F1 and <shift> F2.

.bp

The top two lines of the screen are used to provide a menu of available
commands. The third line displays the field definitions. The bottom line is
used to display the current function key meanings. The second to the last
line displays: (1) the number of records, (2) the number of records that are
marked to report, and (3) the current record number. The rest of the screen
is used to display the data in the file.

The cursor will be to the left of the current record (this line will also be
hilighted). The up/down/right/left arrows, tab, pgdn/pgup, Top and Bottom,
and home/end keys will move the cursor and/or scroll the data. The position
of the cursor is important because many of the List Manager commands act on
the record that the cursor is on.

The allowed commands are listed on the top of the screen and on the bottom
line of the screen. The top of screen commands are invoked by typing the
first letter of the command. The commands listed on the bottom line of the
screen are invoked by typing indicated function key. Examples: to Sort data
type S, or F1 to select a block.

.nf
+--- Sample List Manager Screen ------------------------------------------+
 List Manager: MarkRecords Report Delete Add Edit CreateFields
              Sort OrderFields Calculate Top Bottom GoTo Quit            
   AAAAAAAAAAABBBBBBBBBB.CC.........GGGGGGGGG..DDDDDDD.EEEEEE..NN.........
   Seattle    Washington WA         Northwest  Cold    Rain    23
  *Sacramento California CA         West       Warm    Nice    10
 >*Wichita    Kansas     KA         Midwest    SoSo    Boring  45
  *Gothenburg Nebraska   NB         Midwest    Colder  Corn    37
 >*Chicago    Illinois   IL         North      Frozen  Windy   41
  *Las Vegas  Nevada     NV         West       Hot     Money   19
   Dallas     Texas      TX         South      Warmer  Big     35
   Miami      Florida    FL         South      Warmest Water   17
                                                                         
 Records: total=   500 Marked=   123  Current=    99  Block Selected *
 F1SelBlk F4Mark F5Markall F6NextMark F7Dispall F8HitsDisplay cFNLearn
+-------------------------------------------------------------------------+
.fi

When the List Manager is started, a file is read in. Each line in the
file becomes a record. Any record can be marked for report output by
pressing F4, F5, or running Mark records. When a record is marked, a
> will be displayed next to the record. In the sample above, Wichita
and Chicago are marked.

The List Manager requires fields to perform most commands. A field is
a column that is labeled by a letter A to Z. Fields are created using
the CreateFields command. Active fields will be displayed on the
third line of the screen. The field will be identified with its letter
repeated to show the length of the field. In the sample screen above,
A, B, C, D, E, G, and N are fields. The C field is two columns wide.
Fields are remembered between SS1 executions.

The List Manager can be restricted to work with only a portion of the
file. This can be useful if you are working on a file that contains a
mixture of data such as a table within a letter. The block command F1
is provided for this purpose. A block is identified with a * next to
every record within the block. In the sample, a block is active from
Sacramento to Las Vegas.

The List Manager can also be used for column editing. To do this, load
the file you want to edit. Define columns as List Manager fields.
Then using the Order command describe the new order for the columns.

The List Manager can be suspended and restarted like all jobs in
SS1. When the List Manager is suspended, two things happen:
.nf

     1. Any marked records will be unmarked.
     2. The current file will be updated.

.fi
SINCE COMMANDS LIKE SORT AND ORDER CAN MAKE LARGE CHANGES TO
THE FILE, YOU SHOULD MAKE SURE YOU WANT TO UPDATE THE FILE BEFORE
SUSPENDING THE JOB.

This file update does not occur when you select eXecute a DOS command on
suspend.

.bp
.ce
COMMAND SUMMARY

This section provides explanations for each of the List Manager commands.
.nf

Starting List Manager:
There are two ways to start the List Manager.

You Type:              Resulting actions:
L ...................  From the main menu. Type L. You will be prompted to
                       enter the name of a file to load into the List
                       Manager.

J, <up/downarrow>, S.  Restarts a List Manager job from the list of
                       suspended jobs on the main menu.


Leaving the List Manager:
There are four ways to quit the List Manager.
Q ..................   Quit the current List Manager job. You will be given
                       the option of: Saving your data to a new file, saving
                       data to the current file, or Discarding changes to
                       the file.

<shift>F10 .........   Quit the current List Manager job. Performs the same
                       function as Quit.

<shift>F9 ..........   Suspend the List Manager and return to the Main Menu
                       or DOS or execute a DOS level command. Use the Main
                       Menu option to suspend a List Manager session and
                       return to the Main Menu. This job will be added to
                       the suspended job list on the Main Menu for
                       restarting later. The DOS option allows you to
                       suspend the List Manager session and return to DOS.
                       The next time SS1 is run, you will be returned
                       directly to the suspended List Manager session. The
                       execute a DOS level command allows you to run a DOS
                       command and return to the List Manager after the
                       command completes.

                       Note: Suspend will replace the current file and
                             unmark all records. Execute DOS level command
                             does not replace file or modify record marks.


Movement Commands:
The following commands move the cursor to a record, or scroll through the
data.

You Type:              Resulting Movement:
<up/down arrow> .....  Move cursor up or down one record.
<ret> ...............  Move cursor down one record.
<right/left arrow> ..  Scroll the file right or left 20 characters.
<tab> ...............  Scroll the file right 20 characters.
<home> ..............  Scroll the file to display the start of the current
                       record.
<end>  ..............  Scroll the file to display the end of the current
                       record.
<pgdn>/<pgup> .......  Scroll the data up or down one screen.
Top .................  Move cursor to the first record.
Bottom ..............  Move cursor to the last record.
F6 ..................  The cursor will be positioned next to the next
                       marked record.
Locate ..............  You will be prompted for a text string. The list
                       manager will search the file for the text from the
                       current position to the end of the file. If the text
                       is found, the cursor is placed next to the record
                       that contains the string.
GoTo ................  You will be prompted for a record number. The cursor
                       will be placed next to the specified record number.

Modification and Report Commands:
.fi
The following commands either modify the data or are used to report data.
Remember that you may type sF1 to obtain help on the commands available, and
how to answer any questions asked by the List Manager.
.nf

F1 ..................  Pressing F1 once, identifies the start of a block.
                       Press it again, to identify the end of a block.

F4 ..................  Mark or unmark the current record.

F5 ..................  Mark and unmark all records.

F7 ..................  Toggle between display of all data and only the
                       defined field data.

F8 ..................  Change the record selection format used by Mark
                       and other commands.

cFN .................  Learn the current record to a function key.

MarkRecords .........  Mark all records meeting a specified search
                       criteria.

Report ..............  Create a report from marked records and selected
                       fields.

Delete ..............  Delete the record the cursor is on.

Add .................  Add a record above the current cursor position.

Edit ................  Edit the current record.

CreateFields ........  Create or modify fields.

Sort ................  Sort records. Sort can be performed in ascending or
                       descending order.

OrderFields .........  Change the order or delete fields (columns).

Calculate ...........  Calculate the sum, average, and count of a field.

Quit ...............   Quit the current List Manager job. You will be
                       given the option of: Saving your data to a new
                       file, saving data to the current file, or
                       Discarding changes to the file.

.bp
.nf
.ce
HELPFUL HINTS

To create fields:
.fi
In the List Manager, type F to enter the CreateFields command. Using the
<right/left> arrows, position the cursor to the start of the field. Press a
letter A through Z. This letter will be used to identify the column. Move
the cursor to the end of the field. Press <ret>. A field has now been
created; the letter identifying field the will be displayed on the third
line.
.nf

.pb 4
For example if the original file is:
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

.pb 5
To create field B for the state enter the List Manager:
   .....................................................................
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

.pb 5
Type F. position the cursor to the first column of the state name. Type B:
   ...........B.........................................................
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

.pb 5
Move to the end of the column and press <ret>:
   ...........BBBBBBBBBBB...............................................
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

A field now is defined for the state column.


To produce a report:
.fi
First go into the Editor and create a file with data separated into columns.
Then enter the List Manager with the file and use CreateFields to define the
different data items. At this point, Mark can be used to search the file for
the items that go into the report. F4 can be used if there are items that
should be included but did not meet the search criteria or additional searchs
can be run. Once all items for the report are marked, run Report to select the
fields to output. Specifying no fields will output the whole record.
.nf

.pb 4
For example if the original file is:
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

.pb 5
CreateFields A, B, C, D, E, and F (as described above).
   AAAAAAAAAAABBBBBBBBBBBCC         DDDDDDD    EEEEEEEEEEEEEE  FF
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

If you want a report with all midwest cities, run Mark with field D equal
to midwest. This will mark the cities.
.pb 4
   AAAAAAAAAAABBBBBBBBBBBCC         DDDDDDD    EEEEEEEEEEEEEE  FF
   Sacramento California CA         West       Warm    Nice    10
 > Wichita    Kansas     KA         Midwest    SoSo    Boring  45
 > Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

   Note: If additional records need to be marked, another search can be run.
         F4 can be used to either mark or unmark additional records.

Next run Report selecting fields to output. To select fields type the field
letter, numbers 1 to 9 can be entered to add spaces to the report, and <ret>
can be entered to add new lines. If fields A, 5, B, D, <ret>, B, and F are
selected the report would be.
.pb 4
   Wichita         Kansas     Midwest
   Kansas     45
   Gothenburg      Nebraska   Midwest
   Nebraska   37


To rearrange columns in a file:
.fi
If you want to change the order of several columns in a file: Enter the List
Manager with the file you want to modify. Define fields for all columns you will
want to save. Any data not contained in a field will be deleted. Make the columns
you want to rearrange separate fields. Run Order and enter field letters in the
order the fields should be placed in. Quit and save the file with the changes. 
.nf

.pb 4
For example if the original file is:
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

.pb 5
To place the state before the city create fields A, B, and C.
   AAAAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
   Sacramento California CA         West       Warm    Nice    10
   Wichita    Kansas     KA         Midwest    SoSo    Boring  45
   Gothenburg Nebraska   NB         Midwest    Colder  Corn    37

.pb 5
Run Order giving it fields B, A, and C produces:
   BBBBBBBBBBBAAAAAAAAAAACCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
   California Sacramento CA         West       Warm    Nice    10
   Kansas     Wichita    KA         Midwest    SoSo    Boring  45
   Nebraska   Gothenburg NB         Midwest    Colder  Corn    37

You can now Quit and save or replace the file.

.bp
.ce
FULL COMMAND DESCRIPTIONS

This section contains full explanations for all List Manager commands.

THIS SECTION HAS BEEN OMITTED FROM THE EVALUATION COPY DOCUMENT IN
ORDER TO SAVE DISK SPACE.
IT CONTAINS 9 PAGES OF DETAILED EXPLANATIONS FOR LIST MANAGER COMMANDS,
AND USAGE EXAMPLES.




```
{% endraw %}

## OVERVIEW.DOC

{% raw %}
```
.rm 80
.ml 80
.in 4
.bp 1
.he ||OVERVIEW||
.fo |||Page 1-$P|
.ce
SS1 OVERVIEW

Hardware and Software Requirements:
The following hardware and software are required to run SS1.

       - An IBM PC, or compatible.
       - 256K bytes of memory (or more).
       - At least one 360K byte disk drive.
       - DOS version 2.0 or later.
       - The correct version of SS1 for your PC

Initial Installation:
If you have just received SS1, then turn to appendix 1 which describes
installation of SS1.  Be certain you make backup copies of both diskettes
before you run SS1.

Running SS1:
To run SS1:
       - Boot DOS as usual.
       - Place the disk containing the SS1 files in the default drive.
       - Type SS1.

The SS1 program will be loaded, and the main menu will appear.

.fi
Note: The section on file placement tells you which of the SS1 files are
actually required for each application, and how to place SS1 files on drives
other than the default drive.

Note: You can pass parameters to SS1 to tell it what to do on start up if
desired.  For example, typing:
.nf
    A> SS1 E B:myfile
.fi
would start the SS1 Editor, and prepare to edit file B:myfile. This feature is
optional, and is only included for those who are used to passing parameters to
programs.

.bp
.nf
The Main Menu:
.fi
The main menu screen will be displayed each time the SS1 program is started, and
each time you quit or suspend an application. It looks like this:
.nf

+-- SS1 Main Menu Screen --------------------------------------------------+
|SS1               (c) 1984,85,86 by Seattle Software Works       S/N 0000
+- Applications ------------------------- Suspended Jobs ------------------+
|
|  File Manager                     Job       File           Date  Time
|  Editor                           EDIT      b:SALE.DOC     1/27  5:03
|  Communications                   FM        b:*.*          1/27  3:58
|  List Manager
|  Print
|  Spreadsheet
|
|  Suspended jobs
|  Quit
|
| Type F E C L P  or S to start new job > _
| J for suspended jobs, Drives, or Q to quit
|
+----------------  Shift F1 = Help   Shift F2 = Menu on Quit&Aids ---------+
|
|Quit/Suspend/Transfer Jobs   Aids                   Learn & Record Keys
|sF9 - Suspend Current Job    sF3 - Calculator     aF1..aF8  - Recall A key
|sF10- Quit Current Job       sF4 - Spelling Aid   cF1..cF8  - Learn A key
|                             sF5 - Save Screen    aF9, aF10 - Playback key
|Key Programming              sF7 - Files          cF9, cF10 - Record key
|aK  - Key Record/Playback    sF8 - Graphing       sF6       - List keys
|
| sF1=shiftF1, sF1=altF1, cF1=ctrlF1
+--------------------------------------------------------------------------+
.fi
The upper left quarter of the screen shows a list of applications that SS1
provides.  These can be started by typing the first letter of the
application (eg press E for Editor).  The applications provided include:
.nf

Editor --------- A general purpose text editor/wordprocessor. It can be used
                 to prepare source code, reports, memos, and documents (like
                 this one).

File Manager  -- Provides a very friendly and visual way to do a number of
                 common file manipulation tasks including copying, printing,
                 showing, renaming, and deleting.

Communications - A full capability, high performance communication and
                 terminal emulation package.

List Manager --- A very easy to use data manager. It offers sorting,
                 selection, and rearrangement of data.

Print/Format --- A print utility that allows files to be printed. It offers
                 pagination, justification, bold, underline, headers,
                 footers etc.

Spreadsheet  --- A general purpose spreadsheet that supports rows, columns,
                 and pages.

.fi
Each of these applications is fully explained in a separate chapter of this
document.

The other choices from the Main Menu include Quitting SS1, the Drives choice,
and activating a Suspended job.

Quit - The Quit choice exits SS1 and returns you to DOS.

Drives - The drives choice allows you to tell SS1 where to look for the files
that are needed to run each application, and for the help file. This allows
you to do things like placing your most frequently used applications on ram
disk (transfers to applications on ram disk are instant) , or spreading the
SS1 files over several diskettes, or placing all or part of SS1 in a
subdirectory. This is described later in this chapter.

Suspended Jobs - The upper right quarter of the screen shows a list of
suspended jobs (if there are any). SS1 allows you to suspend any of its
applications to run another SS1 application, or to go out to DOS for a while.
You can then return to any suspended application at the point where you left
it. 

Up to five jobs can be suspended at once. Suspended jobs are resumed from the
Main Menu by typing J to put the cursor in the suspended jobs list, then
moving cursor to the desired job, and typing S to Start it. There is a section
in this chapter on suspending and quitting applications that fully explains how
this very useful capability works.

.bp 
The bottom of the Main Menu provides some help in remembering a few
important commands and keys. It looks like this:
.nf
.pb 34

          These Aids are always available:                     
            sF3 - A four function calculator                   
            sF4 - A lookup aid for Spelling, Phone, etc lists  
            sF5 - Saves the current screen to a file           
            sF7 - List/Show/Delete files                       
            sF8 - Graph rows or columns of numbers from screen 
           +-------------------+-------------------------------+
                               |
                               |
                             +-+-----------------+
Quit/Suspend/Transfer Jobs   Aids                  Learn Keys
sF9 - Suspend Current Job    sF3 - Calculator      aF1..aF8  - Recall A key
sF10- Quit Current Job       sF4 - Spelling Aid    cF1..cF8  - Learn A key
                             sF5 - Save Screen     aF9, aF10 - Playback key
Key Programming              sF7 - Files           cF9, cF10 - Record key
aK  - Key Record/Playback    sF8 - Graphing        sF6       - List keys
+-----------+--------------+                       +------+---------------+
            |                                             |
            |                                             |
+-----------+-----------------+   +-----------------------+--------------+
Quit or Suspend Applications:      Learn keys: allows text to be stored 
  sF10 - Quit the job you are in    on a function key for later recall  
         return to Main Menu.       altF1  - recalls text stored on F1  
  sF9  - Suspend job you are in     ctrlF1 - Stores text on F1          
         return to Main Menu,       sF6    - List all learn keys, and   
         or to DOS, or execute               allow changes.             
         a DOS command              Available anywhere in SS1.          
Key Programming                                                         
  aK   - Record or playback        
         keystrokes to/from a    
         file.                   


Key Conventions:
Some of the conventions used on SS1 screens, and in this manual are
explained below.

Commands - 
In many cases SS1 will show a list of commands (typically across the top of
the screen). To invoke one of these commands, just type the highlighted
letter (usually the first). There is no need to press the return key.

Shifted, ctrl and alt keys - 
The notation shiftF1 means: Press the F1 key while holding down the shift
key. This is often abbreviated sF1. Ctrl F1 and alt F1 mean the same thing
for the ctrl and alt keys, and are abbreviated cF1 and aF1.

Some examples:
  sF2      - means hold down the shift key and press the F2 key.
  aReplace - means hold down the alt   key and press the R  key.
  cF1      - means hold down the ctrl  key and press the F1 key.

The escape key -
The escape key is used to "escape" from commands that you start, and then
decide that you don't want to complete.  If you want to back-out of a
command, just press the esc key.

Using Help:
Two types of help are provided in SS1.

shift F2 - provides quick help on the following subjects:
  - Quitting and suspending applications.
  - Activating the aids (calculator, spell etc).
  - Using the learn keys.
  - Activating the full help facility.

.pb 28
The screen presented looks like this:

+-- Sample Help Screen ----------------------------------------------------+
 These Functions are Always Available:                                           
                                                                                 
          Shifted Function Keys                      Learn Keys  F1..F8
                  Aids                                                           
               +-------+                      To Learn Text to a Func Key:
        Help > |F1  F2 |< This Screen              Type ctrl function key.
               +-------+                           eg ctrl F3
  Calculator > |F3  F4 |< Spell, Phone etc
               +-------+                      To Recall Learned Text:
 Save Screen > |F5  F6 |< List/Change              Type alt function key.
               +-------+  Learn Keys               eg alt F6
 Files & Dir > |F7  F8 |< Graphing
               +-------+                       To List/Change Learned Keys:
                                                      Type shft F6
           Quits and Transfers                                                   
              +--------+                       See Help in Edit etc for
 Suspend Job >| F9  F10|< Normal Quit          more learn key info.
              +--------+  and Save
                                                                                 
 altK - Keystroke recorder - Record/Playback keys to a file.                     
 ctrlF9,F10 & altF9,F10 - Quick Record/Playback keys.                            
                              ShiftF1 For Full Help                              
                                                                                 
 Press any key to go on:                                                         
+--------------------------------------------------------------------------+

shift F1 - Provides full help on everything.
Pressing shift F1 will display a help screen that is appropriate for the
activity you are currently performing.

Once you have a help screen displayed, you have 3 options on what to do 
next:
  You can type:        Action:
  <return> .........  You will be returned immediately to your application.

  sF1 ..............  This will display a higher level help screen. You can
                      work your way up to higher level subjects with
                      repeated presses of sF1.

  1..9  ..........    If the help screen now being displayed lists lower
                      level or related help screens, these can be activated
                      by typing the NUMBER of the one you want to display.

.pb 23
A sample help screen looks like this:

+-- Entering Data ---------------------------------------------------------+
  Any time you are asked for data, the following data entry keys and          
  functions are available                                                     
                                                                              
  left/right arrow    - Cursor to left/right
  tab/bktab           - Forward/backward to next punctuation or space.
  home/end            - Cursor to start/end of line.
  del                 - delete char at cursor.
  ctrl end            - Delete to end of line.
  ins                 - Go into or out of insert mode.
  cF1..cF8            - Store text on function key.
  aF1..aF8            - Recall learned key at cursor location.
  sF1                 - Help.
                                                                              
  Related Helps:   1  - Learn keys                                            
                                                                              
                                                                              
 Enter a helpscreen number, or sF1 or <ret> to leave help
+--------------------------------------------------------------------------+

.fi
Typing a 1 would display the help screen on Learn Keys; typing an sF1 would
display a higher level help screen (the overview of SS1 in this case).
Typing a <ret> would return to your application.

.nf
Quitting and Suspending:
.fi
To quit any of the SS1 applications press shift F10.  You may be asked a
question or two having to do with saving your data.  You will then be
returned to the SS1 Main Menu.

To suspend any of the SS1 applications, press shift F9. You will be asked if you
want to suspend to the SS1 Main Menu, or to DOS, or if you want to execute a DOS
level command. Choose the Main Menu if you want to run another SS1 application;
choose DOS if you want to run some DOS commands or programs; choose execute if
you want to run a DOS command or another program and immediately return to SS1
(SS1 remains memory resident). In either case, your current application data and
environment will be saved so that you can return later just where you left. With
Main Menu and DOS suspend all files are updated on disk so that data will not be
lost if you choose not to return to the application. With execute you data is
only saved in memory rather than updating disk files, this means that you must
return to the application to update data. Suspended jobs are listed on the Main
Menu. See the Main Menu instructions (above) for restarting them.

.nf
Edit Keys:
Any time SS1 asks you to enter information, the following keys can be used
to reduce typing, correct mistakes.

left, right arrow   - Move the cursor left or right.
home, end           - Move the cursor to start or end of line.
tab                 - Move the cursor to next space or punctuation.
backspace           - Move the cursor back one.
del                 - Delete the character at cursor.
ins                 - Go into or out of insert mode.
ctrl end            - Delete text from cursor to end of line.
ctrlF1..ctrlF8      - Learn the text entered to a function key.
altF1..altF8        - Recall text previously learned to a function key.
ctrlF9..ctrlF10     - Record keystrokes to a function key.
altF9..altF10       - Playback keystrokes previously learned to a function
                      key.
sF1                 - Display help.

In many cases SS1 will provide you with a default. You can use the edit keys
to edit the default to what you want.

Examples:
  Default:          You Want:      Use These Edit Keys:
  B:STUFF1          B:STUFF2       end, left, '2'
  B:room            B:mushroom     right, right, ins, 'mush'
  C:playgolf.bas    C:playgolf.dat tab, tab, ctrl end, 'dat'
  A:junk            A:bombs.pas    right, right, altF4 (assuming that the F4
                                   had been previously learned to bombs.pas)


Learn Keys:
SS1 provides a facility to learn text strings to the function keys (F1
through F8) for recall at a later time. This capability is supported
throughout SS1, and can save a great deal of typing.

For example:
  - In the Editor:
     - To enter frequently use words or phrases.
     - To move or replicate small amounts of text quickly.
     - To enter words looked up in the spell or other lists.
  - In the File Manager:
     - To memorize the file name at the cursor location.
     - To enter file names.
  - In Communications:
     - To type frequently used commands to the host.
     - To enter words looked up in the spell or other lists.
  - In the List Manager:
     - To edit data lines.
     - To enter words looked up in the spell or other lists.
  - In the Spreadsheet:
     - Copy a cell value or equation.
     - Edit formula entries.
     - Transfer numbers from the calculator.
  - In the Aids:
     - To memorize a word in the spell check or other lists.
     - To remember or store a calculation result in the calculator.
     - In the files aid to remember a file name.

shift F6: 
.fi
Pressing shift F6 will display the current values of the learn
keys.  It will then allow you to either enter new values or edit the existing
ones for any of the learn keys.  The standard edit keys are available to
change values.
.nf

.pb 17
The screen looks like this:

+-- Sample Learn Keys Screen ----------------------------------------------+
Show/Change Learn Keys:                                                   
enter F1..F10 to change, <ret> to exit                                    
                                                                          
F1  Mary Had a Little Lamb                                                
F2                                                                        
F3  For I := 1 to Limit do begin                                          
F4                                                                        
F5  B:Edit.doc       -------+
F6                          |
   etc                      |
       etc                  |
                           To edit this string you would type F5.
+--------------------------------------------------------------------------+

When you have finished changing function keys, type <return> to return to
your application.

Using the learn keys within applications - 
.fi
To recall a value previously learned to a function key, position the cursor
at the desired screen location, and press alt Fn (where n is the number of the
function key to be recalled).

To save text on the screen to a learn key, you position the cursor at the
start of the text to be learned, and press ctrlFn (where n is the number of
the function key to be learned).

The chapter for each application provides more detailed explanations on use of
the learn keys within it.

.nf
Key Recorder
.fi

THIS SECTION HAS BEEN OMITTED FROM THE EVALUATION COPY DOCUMENT IN
ORDER TO SAVE DISK SPACE.

.nf
File Placement (Drives):
.fi
When SS1 is first installed, it expects to find all of the files it needs on
the default drive.  The Drives command allows you to tell SS1 to look in
other places for certain files.   This allows you to do things like 1)
put frequently used applications on RAM disk (transfers to applications on
RAM disk are instant), place all or part of SS1 in a subdirectory, or 3)
spread SS1 files over more than 1 diskette.

.nf
The following table shows all of the files that SS1 uses:

Name:       Function:                         When Needed:
SS1.COM     The SS1 main program and          At startup of SS1 and
SS1.OVL     SS1 aids and misc.                At startup of SS1 and
                                              at termination to
                                              remember settings

SS1.ED      Program code for Editor           When Editor is started
SS1.CO      Program code for Communications   When Communications is started
SS1.FM      Program code for File Manager     When File Manager is started
SS1.LM      Program code for List Manager     When List Manager is started
SS1.PR      Program code for Print/Format     When Print/Format is started
SS1.SP      Program code for Spreadsheet      When Spreadsheet is started

SS1.HLP     Help file                         When Help is needed

SS1.S       Spell aid word list               When Spell aid is used
SS1.A       ASCII table aid list              When ASCII table aid is used
SS1.P       Phone list aid                    When Phone list aid is used

SS1.PRN     Printer parameter file            When starting Print/Format
SS1.CFG     Communication configuration file  When starting Communications

SS1.SUS     SS1 creates this file on          Start of SS1 after suspend to
            suspend to DOS                    DOS

.pb 16
Drives is run by typing D from the Main Menu.  The following screen will
be displayed:

+----------------------------------------------------------
| Enter number of drive or path name to change >
| Quit or esc or sF1 for Help
|
| 1 File Manager                   Now =
| 2 Editor                         Now =
| 3 Communications                 Now =
| 4 List Manager                   Now =
| 5 Print                          Now =
| 6 Spreadsheet                    Now =
| 7 Help, spell, phone etc         Now =
| 8 SS1.OVL file                   Now =
|

.fi
To tell SS1 to look on drive B: for the Editor file, you would type "2",
then "B:".  To tell SS1 to look on a subdirectory called SS for the List
Manager, you would type "4", then "C:\SS" (assuming that SS is on drive C:)

Here are some alternative ways to arrange the SS1 files:

Simplest - Do not use the Drive command at all.  SS1 will expect to find
all SS1 files on the default drive.  If it can't find the file there, it
will prompt you to insert a disk with the file it wants.

Fastest - If you have more than 256KB of memory, you may want to create a RAM
disk drive (software to do this is usually provided with your memory expansion
card. Place the files for the parts of SS1 you use the most on the RAM disk.
If you place SS1.COM and SS1.OVL on RAM disk, then initial startup is almost
instant; if you place (for example) SS1.FM on RAM disk, then transfers to the
File Manager will be almost instantaneous.

Subdirectories - You can place all or some of the SS1 files on subdirectories.
Hard disk owners may find this useful to keep the top level directory from
getting too cluttered. However, putting files on subdirectories does degrade
access time.  The degradation is not particularly objectionable on a hard
disk.
.nf

Display:
.fi
If you notice "snow" or interference on your display when scrolling, then
from the Main Menu type a D (for Display). After the new menu comes up, type D
to change to Slow display mode (repeated presses of D will alternate between a
Fast and Slow display modes. The Slow mode will eliminate the interference, but
will result in slower scrolling. This should only be necessary when using the
IBM graphic display adaptor card.


```
{% endraw %}

## PERRPT.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1 
.he ||Software Performance||
.ce
SOFTWARE PERFORMANCE REPORT

.fi
If there are parts of SS1 that could be modified to improve it's usefulness
for your application, features you would like to see added, Or
changes to the document, we would like to hear from you.

To suggest a change fill out the form below with a description of the change
and mail it to:
.nf

                           Seattle Software Works
                           29303 - 63rd. Pl. South
                           Auburn, WA 98001





          Name                                                  

          Address                                               

                                                                

          Phone                         Computer                

          SS1 Version          


DESCRIPTION:                                                              

                                                                          

                                                                                                                                                      

                                                                                                                                                      

                                                                                                                                                      

                                                                                                                                                      



```
{% endraw %}

## PRINT.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1
.he ||Print/Format||
.fo |||Page 7-$P|
.CE
PRINT AND FORMAT

.fi
The Print and Format utility prints and formats files that were created in
the Editor or List Manager (it may also be able to print or format standard
text files that were created by other programs you write or use).
.nf

It offers the following features:
       - Pagination.
       - Headers and footers (with optional date, time and page numbers)
       - Margin and indent control.
       - Justification.
       - Underline and Bold printing.
       - Support for several printers, adaptable to many.

.fi
Most of the features are activated by commands that you imbed in the text of
your document. For example to leave 10 blank lines, you would put a line in
your file that says:
.nf

 .sp 10

All of the commands consist of:
  - A period followed by 2 characters, followed by an optional numeric
    or text argument. 
  - Each command must start in column 1.
  - Each command must be on a line by itself.

Note that a list of formatting commands is available in the Editor by typing
shiftF1 (help).

.fi
The Print/Formatter will print any standard ascii text file (with or without
the imbedded commands described below). The files can include output files from
other programs if the programs produce regular text files (for example, most
compiler listings). Do not attempt to print binary files (.com or .exe), or
files from other wordprocessors that have not been converted to standard ascii
text files.


Running the Formatter:
.br
To use the Print/Format utility, make the Print choice from the Main Menu.
You will be asked to enter the name of the file to print.  Enter your file
name and type <ret>.  You will then be asked for an output device or file,
with the default choice being the printer (PRN).  If the printer is OK, then
type <ret>, otherwise type in a file or device name and press <ret>.  You
will then be asked for the "First Page to Print:", with a default of page 1.
If you wish to have the first page to be printed be page 1, then press <ret>,
otherwise enter the number of the first page to be printed.  You will then
be asked for the last page to be printed, answer in the same way as for the
first page to print (specifying a large number will print all pages).

The print will then be started.  The page number that is currently being
printed is displayed on the screen.  

The print can be canceled at any time by pressing any key. If you press a key
to stop the print, there will be a delay while the rest of the buffer is
printed, then a message asking you to confirm the cancel will be displayed -
answer yes or no.

The Print/Format utility cannot be suspended.  You must either wait for it
to complete the print, or cancel the print.
.nf

Basic Commands:
 .bp n         Begin a new page with page number n. If n is omitted, it will
               be set to 1 greater that the current page.

 .sp n         Space down n lines. If n is omitted, than n is assumed to be
               1.

 .ce n         Center the next n lines. n is assumed to be 1 if not
               supplied. Centering is done between the current right margin,
               and the current indent level.

 .pl n         Set the page length to n lines.  The page length must be set
               to match paper you are printing on.  The most commonly used
               numbers are:
               66 for 11 inch long paper at 6 lines per inch (the default).
               51 for 8.5inch long paper at 6 lines per inch.
               88 for 11 inch long paper at 8 lines per inch.
               68 for 8.5inch long paper at 8 lines per inch.

 .ml n         Tell the print software what the maximum line length your
               printer can handle is n. Lines longer than n will be
               truncated at n. This will prevent the printer from "wrapping"
               lines, which will confuse pagination.

 .pb n         Protect block of n lines. When this code is encountered, if
               there are not at least n lines left on the current page, a
               new page will be started. This code can be used when you want
               to insure that a section of text (eg a table) is not split by
               a page break.

Filled Text:
.fi
The text formatter will take text with uneven line lengths and "fill" it into
text that is evenly formatted between the current indent level and the right
margin. For example if text filling is on, and the indent level is 10, and
the right margin is 60, then this text:
.nf

       This is text with uneven
       line
       lengths, because it was changed after it
       was entered. But its going to
       look great (or at least straight) after the formatter gets done
       with it.

Would come out looking like this:

       This is text with uneven line lengths, because it was
       changed  after it was entered. But its  going to look
       great (or at least straight) after the formatter gets
       done with it.

.fi
This allows you to enter text without worrying how it looks.  The text
formatter will straighten it out.  It also allows you to make extensive
changes to the document by only changing a few imbedded commands.

.nf
The following are used in conjunction with filling:
 .fi           Begin filled text.  The following text will be "filled"
               between the current indent level and the right margin.

 .nf           No filling.  Turn off filled text. Text after this will be
               printed "as is".

 .rm n         Set the right margin to column n. The right margin is used
               in centering text, and for filled text. The default is 80.
               Examples: .rm 78    set margin to col 78
                         .rm -10   sets margin to ten less than it was

 .in n         Set indent level to n spaces.  This will result in n spaces
               being printed before each line is started when filled text is
               being output.  Centering and filled text use indent.  The
               default is 0.
               Examples: .in 20    indent all following lines by 20.
                         .in +4    set indent level to 4 more than current.
                         .in -4    set indent level to 4 less than current.

 .ti n         Set a temporary indent of n spaces. The temporary indent will
               be used for one line only, then the indent level will revert
               to the value set by the .in command. It is used for starting
               paragraphs, or bullet items. The temporary indent can be
               expressed as a positive or negative increment from the
               current indent level. The default is 0.

               Examples: .ti 20   set indent for next line to 20.
                         .ti +6   set indent for next line to 6 more than
                                  current level. (-6 would also be legal)

 .br           Put a break in the filled text. This means start a new line
               with the following line of text. Use this command to
               explicitly start a new paragraph (a blank line will also
               trigger the start of a new paragraph).Other things that have
               the same effect as the .br command:
                - A blank line.
                - A .bp  command.
                - A .sp command.
                - A .ti command.
                - The .nf command.


Headers and Footers:
.fi
Commands are provided to print headers and footers on pages. The header
command provides for left, right and center justified portions, as well as
the capability to automatically include the time, date or page number in the
header or footer.
.nf

 .he |Left|Centered|Right|
               Place a page header at the top of each page. The portion
               between the first and second |'s is left justified, the part
               between the second and third |'s is centered, and the part
               between the last two |'s is right justified. The centering
               and justification take place between the indent level and
               right margin in affect at the time the .he command is
               encountered.

               The header for this page was printed with:
               .he |Print/Format|SS1 User Manual|Chapter 7|

 .fo |left|center|right|
               Provides the same capability for footers as is described
               above for headers.

               The footer for this page was printed with:
               .fo |$D||page 7- $P|

 $D, $T, $P    Print the date ($D), or time ($T), or page number ($P) as
               part of a header or footer. Simply imbed the commands in the
               header or footer text.


Including files:
.fi
The include file feature allows you to "pull in" text from outside files and
include it at any desired location in your file. This can be used to break up
long documents into more manageable units, or to include "boiler plate"
paragraphs or sections in your document.

The include files can be anything from a word or two to many pages of text.
Include files can themselves include files (to a limit of 3 deep).
The command is:
.nf

 .ci  getme.dat
               Change the source of input to getme.dat. Lines will be read
               from getme.dat until its end (or another .ci) is reached,
               then reading will continue on the line following the .ci
               command. 
               .ci files may contain .ci commands themselves to a
               level of three deep. This manual was created with a separate
               file for each chapter, then printed with a file that looks
               like this:

               .ci contents.doc
               .ci overview.doc
               .ci edit.doc
               .ci filemngr.doc
                 etc etc

               This keeps files to a manageable size, and allows several
               people to work on separate chapters of a document.

Bold and Underline:
.fi
Bold and underline codes placed in the text by the Editor will be honored by
the Formatter (use the F8 key to enter bold or underline in the editor).

Underline and bold are done by imbedding special characters in the file. Bold
printing is started when the formatter encounters a character with an ASCII
value of 2 (this shows up as a (bold) face on the screen). Bold printing is
stopped when a second ascii 2 is encountered.

Underline works the same way as bold except that the special character is an
ascii 22 (this looks like a chubby underline on the screen).  Your programs
can imbed these codes to do bold or underline.

Printer Control Strings:
.fi
The .ps command allows you to access your printers special features in a way
that can be tailored for your needs. Some example uses could include changing
pitch, changing fonts, or changing line spacing. The command is:
.nf

 .ps n         Send user defined printer control string number n. The
               printer control strings are defined by using the setup
               utility. There can be up to 9 (1..9) printer control strings,
               each with up to six characters.

               Example: You have an Epson printer, and you want to be able
               to print some sections in italics. Use Setup utility to tell
               SS1 to send the printer an esc "4" when .ps 1 is encountered,
               and an esc "5" when a .ps 2 is encountered.

               Then insert in your text the command .ps 1 to start italics,
               and .ps 2 to end italics.

Printer Support:
.fi
This section explains how to get the print/format utility to take better
advantage of the features of your particular printer.  It covers the
following subjects:
.nf
     -  The way in which SS1 accommodates variations  in printers.
     -  How to tell SS1 which printer you are using if it is one
        of the printers supported by SS1.
     -  What to do if SS1 does not support your printer.

How SS1 Supports Printers:
.fi
Before the Print/Format utility starts printing a file it looks for a file
called SS1.PRN.  This file (if it exists) is expected to have the parameters
that allow SS1 to take better advantage of the features of your printer.  If
this file does not exist, a set of default parameters is used.   The default
parameters will work with almost any printer, but in general, they will not
take best advantage of your printer's features.

Using SS1 Supported Printers:
.br
We provide printer parameter files for several common printers (they are
listed in appendix 3. If one of them matches your printer, then simply
copy it to the diskette that will be in the default drive when you run SS1.
The copy must be named SS1.PRN. In order for SS1 to find the file it must
either be on the default drive, or on the drive or path name that you have
defined for the SS1.HLP (help) file using the Drives command (see chap 1).

If your are in doubt about whether one of the supplied printer files will
work with your printer, then just try the most likely looking ones - no harm
will come if they don't work.

Build Custom Printer Parameter Files:
.br
If SS1 does not provide a printer parameter file for your printer, all is not
lost, you can build a printer parameter file based on an existing one, or
create a new one from scratch. To do this you use the Setup utility, which is
described in appendix 3.

The Setup utility is also used to access special features of your printer
that the supplied SS1 printer parameter file does not support.  Some examples
of the things that can be done by using the Setup utility to modify an
existing printer file are:
.nf
     -  Change printer pitches.
     -  Using letter quality or double strike modes.
     -  Changing fonts in mid document.




```
{% endraw %}

## SETUP.DOC

{% raw %}
```
.bp 1
.in 4
.ml 80
.rm 80
.he ||Setup||
.fo |||Page A2-$P|
.ce

THE ENTIRE SETUP UTILITY PROGRAM AND ALL OF THE DOCUMENTATION COVERING
THE SETUP UTILITY HAVE BEEN OMITTED FROM THE EVALUATION COPY OF SS1 IN
ORDER TO SAVE DISK SPACE.

THE SETUP UTILITY CONSISTS OF THREE PARTS HAVING THE FOLLOWING FUNCTIONS:

 - THE SCREEN PART OF SETUP ALLOWS YOU CUSTOMIZE THE SCREEN COLORS
   USED IN SS1.

 - THE COMMUNICATION PART OF SETUP ALLOWS YOU TO SET MANY COMMUNICATION
   PARAMETERS. THESE INCLUDE BAUD RATES, PARITY, HANDSHAKING, MAPPING OF
   KEYS TO ACTIONS, GRAPHING CHARACTERS, AUTODIAL SETUP AND MUCH MORE.
   IT ALLOWS YOU TO CREATE COMMUNICATION CONFIGURATION FILES TO EMULATE
   A VARIETY OF TERMINALS.

 - THE PRINTER SETUP ALLOWS YOU TO TAKE ADVANTAGE OF SPECIAL PROPERTIES THAT
   YOUR PRINTER MAY HAVE (EG SPECIAL FONTS), OR TO CREATE PRINTER
   CONFIGURATION FILES FOR PRINTERS NOT CURRENTLY SUPPORTED BY SS1.




```
{% endraw %}

## SS.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1
.he ||Spreadsheet||
.fo |||Page 8-$P|
.ce
SPREADSHEET

.fi 
The SS1 Spreadsheet is a general purpose spreadsheet capable of performing
all of the usual spreadsheet functions.  In addition it has some additional
features such as offering a third dimension (multiple pages), and offering
easy interchange of data with the other SS1 tools.

If you are familiar with spreadsheets in general and are tempted to "dive
right in", go ahead, but first read the part of this section that
explains how the SS1 spreadsheet differs from other common spreadsheets.
.nf


The topics covered in this chapter are:

       -  Introduction

       -  A Summary of Spreadsheet commands

       -  Some hints on how to use the Spreadsheet


.fi
Remember that help is available at all times when you are in the spreadsheet
by typing <shift> F1 and/or <shift> F2.
.bp
The top and bottom line of the screen are used to list the spreadsheet
commands (so you don't have to memorize them). Pressing <shift> F1 will bring
up help, which provides complete explanations of how to use each command.

The commands listed on the top line of the screen (aTop etc) are activated
by pressing the <alt> key, then the first (highlighted) letter of the command,
then releasing the <alt> key. The commands on the bottom line are activated
by pressing the indicated function key (eg F4 to copy a range of cells).

The second line on the screen lists 1) the current cell location on the screen
(eg 1A3 means that the cursor is on the cell at page 1, row 3, column A), 2)
the kind of information stored in this cell (FORMULA, LABEL, or EMPTY), and 3)
the current contents of the cell.

.nf
.pb 18
+--- Sample Spreadsheet Screen --------------------------------------------+
Spread: aTop aBot aFind aSetGlobal Ins Del aClr aPrint aInsfile aLoad aUpdte
1A4     LABEL :    Division                                                      
---|-------A-------|---B---|---C---|---D---|---E---|---F---|---G---|---H---      
  1|                                                                             
  2|                        Summary of Widget Sales for 1988                     
  3|                                                                             
  4|Division              Q1      Q2      Q3      Q4    Year                     
  5|  North            43690     990      56    5236   49972                     
  6|  South             3690     990     156     236    5072                     
  7|  East               690     990     456      36    2172                     
  8|  West               690     990     879    4436    6995                     
  9|                   -----   -----   -----   -----                             
 10|                   48760    3960    1547    9944                             
       etc                                                                       

F1Edit F3GoTo F4Cpy F5Format F6RptFnd F7CalcPg F8CalcAll F9Loc F10DelCell
+--------------------------------------------------------------------------+

.fi
To enter data in a cell you simply move the cursor to it, then type the data
in (see the section below on entering FORMULAS and LABELS for more detail).

There is a wide selection of commands (keys) to move the cursor to a new
location in the spreadsheet.  These commands are explained in the section on
Cursor Moving Keys.

.nf
SS1 Spreadsheet Features and Differences:
.fi
This section explains some important features and characteristics of the SS1
Spreadsheet.
You will want to read this section carefully even if you are familiar with
other spreadsheets, since it explains some the differences between the SS1
Spreadsheet and others, and some of its unique features.

.nf
Executing Commands:
.fi
The SS1 spreadsheet lists commands along the top and bottom of the screen,
and these commands are directly available by pressing the indicated key.
Many spreadsheets require that you press a special character (usually a /) to
bring up a menu of commands, and then a letter  to activate the command.

.nf
Multiple Pages:
.fi
Perhaps the most unusual (and useful) feature of the SS1 spreadsheet is
that it is a three dimensional (multiple page) spreadsheet.  This means that
the spreadsheet is organized as 255 pages in which each page is 255 rows by
64 columns.  This allows (for example) pages 1 through 12 to be used to
calculate monthly figures, and page 13 to be used for a yearly summary.  All
of the usual spreadsheet commands operate across pages, including copy,
calculations, ins/del rows, columns or pages etc.

Since SS1 is a multiple page spreadsheet, YOU MUST ALWAYS SPECIFY THE PAGE
as well as the row and column when referencing a cell.  For example the cell
12F34, occurs on page 12, column F, row 34.

.nf
Saving and Loading Files:
.fi
SS1 will ask you for the file name to store your spreadsheet model in when
you first enter the spreadsheet tool. You must supply a file name for the
model at this time. If you want to work on an existing model, enter its name.
If you want to start a new model, enter a new name for it. SS1 asks for the
name of the file at startup so that it will know the model file name in case
you want to suspend, and to maintain consistency with the other SS1 tools.
The spreadsheet will give you the opportunity on exit to update the file if
you wish to.

.nf
Find and Memorize:
.fi
The SS1 spreadsheet provides a find command that allows you to search the
spreadsheet of a particular text or numeric value you may be looking for. It
also provides a command to "memorize" the location of the current cell, so that
you can return to it later. These commands are very useful and also provide
consistency with the other SS1 tools.

.nf
Transferring Data:
.fi
Most of the SS1 tools use ordinary text files to store their data. This
results in completely transparent transfer of data between SS1 tools. In the
case of the spreadsheet it was necessary for performance reasons to store the
data in a file that is specially formatted, and that is not directly compatible
with the files used by the other SS1 tools. However, easy to use commands are
provided to transfer data between the spreadsheet and the other SS1 tools. The
aPrint command allows the transfer of data from the spreadsheet to any of the
other SS1 tools (or to outside programs), and the aInsFile command provides
for reading files created in the other SS1 tools into the spreadsheet. Read
the section on these commands for more detail.
.nf

Recalculation:
.fi
The Spreadsheet is recalculated by pressing the F7 key to recalculate the
current page, or F8 to recalculate all pages.  Since it is useless on all but
small models, an automatic recalculation mode is not offered.

.nf
Capacities and Limitations:
.fi
The SS1 spreadsheet provides 255 pages, each of which can have 255 rows and 64
columns. A maximum of 4000 of these cells can be filled. You will get an error
message if you exceed this limit. Maximum formula or label length is 64
characters (formulas can reference formulas in other cells if a formula
exceeds this length).

.nf
Entering Data:
.fi
To enter data in a cell, you simply move the cursor to that cell and type
the data in.  There are three types of data you may enter into a cell -
these are:
.nf
   LABELS These are text strings that are typically used for table headings,
          or to explain the numeric entries in the spreadsheet. LABELS can
          be up to 64 characters long, and can extend into cells to the
          right of the cell you enter the label as long as the cells to the
          right are free. SS1 will assume you are entering a label if the
          first character you type is not a number or an arithmetic
          operator. To enter a label starting with a numeric character,
          start the label with a single quote (eg '123 this will be a
          label).

   VALUES These are numbers.  Examples: 12, 45.66, +4, -5.666.

 FORMULAS These are formulas or equations. Formulas allow the value of the
          formula cell to depend on the values in other cells. If you
          entered the following equations in cell 1G22, the result would be:

               34.5+1A45        -Cell 1G22 is the sum of 34.5 and the
                                 contents of cell 1A45.

               2B10..2C12-4.0   -Cell 1G22 is the sum of all of the cells
                                 in the range 2B10..2C12 minus 4.0.

               1C4*(3.4+1C2)    -Cell 1G22 is computed by multiplying the
                                 contents of cell 1C4 times the quantity 3.4
                                 plus the contents of cell 1C2.

               +SIN(1C2)+1C4/4  -Cell 1G22 is computed by dividing the
                                 contents of cell 1C4 by 4, and adding the
                                 result to the sine of the angle stored in
                                 cell 1C2. The leading + must be entered as
                                 the first character to keep SS1 from
                                 thinking this is a LABEL rather than a
                                 formula.

               (1C3+3.4) 2.31   -Cell 1G22 is computed by adding 3.4 to the
                                 contents of cell 1C3, and then raising this
                                 quantity to the power 2.31.

          SIN in the example above is an example of a function. Other
          functions are available, and are explained in the commands section
          under Functions.

          The evaluation order for formulas is as follows:
               Functions (such as SIN) are evaluated first.
               The   (raise to power) is evaluated next.
               Multiplication and division are performed next.
               Addition and subtraction are performed last.
          If there is more than operation at the same precedence (eg two
          multiplies), then the operations are performed left to right.

          Parenthesis can be used to change the evaluation order - example:
            4 + 2*6 = 16
           (4 +2)*6 = 48

          When entering formulas sometimes it is more convenient to enter
          cell references by moving the cursor to the cell you want to
          reference rather than typing the cell into the equation. To do
          this during formula entry press F2, you will be placed in cursor
          entry mode. Using the cursor movement keys position the cursor to
          the cell you want referenced in your formula. The current cell
          location will be displayed in the formula as the cursor is moved.
          Press any non cursor movement key or F2 to return to type in mode
          with the cell reference added at the end of the formula. Press esc
          if you want to cancel the cell entry without adding the cell
          reference. If you enter an illegal formula, SS1 will print an
          error message that tells you to fix the error (you can use the
          edit keys), or press <esc> to abort the equation entry.

.fi
When you are entering data in a cell, you can make use of the usual SS1 edit
keys (eg arrows, ins, del, home, end etc). If you want to change the contents
of an existing cell, move the cursor to the cell, and press F1 (edit). This
will allow you to use the edit keys to change the cell. Press <ret> when you
have completed the change.  The cursor will be moved to the next cell when
you press <ret>; the direction of the "next" cell is determined by the
direction you last moved the cursor with the arrow keys.
If you want to delete the data in cell (possibly to replace it with new data),
move the cursor to the cell and press F10.


.nf
Entering Ranges:
.fi
Several of the spreadsheet commands (Copy, Print etc) ask you to enter a range
of cells.  A range of cells is all of the cells within a rectangular area.
You specify the range by typing in the cell descriptor for the upper left
corner or the area, then two periods, then the cell descriptor for the lower
right cell.  Here are some legal and illegal cell descriptions:
.nf

       1B2..1C4       Ok - specifies an area containing 6 cells.
       1C4..1C4       Ok - specifies an area containing 1 cell.
       1AB4..3AB6     OK - note that ranges can span pages.
       C4..D5         Illegal - page numbers must be included.
       1D5..1C4       Illegal - order must be upper right..lower left.
       1C5.1D56       Illegal - two periods must separate the cells.

.fi
SS1 offers two alternatives for entering ranges.  You can type them in
exactly as specified above, or you can use the arrow and other cursor moving
keys to move the cursor to the two corners of the range. Here is an
example:
.nf
  You are asked to enter the source range for a copy - the screen will look
  like this:

  Copy: enter source range  (eg aB4..1G10) or <esc>
  > 1D5..1D5

  Where 1D5 is the current cursor location. Using ANY of the cursor moving
  commands (arrows, home/end etc) move the cursor to the lower right corner
  of the range. The 1D5 will be updated to the cell the cursor is on as you
  move the cursor. When the correct lower right corner is displayed, type a
  <ret> to complete the source range entry. If you moved the cursor to cell
  1E9, the final display would look like this. > 1D5..1E9

  If you wish to change the first 1D5 (the upper left corner of the range),
  then press the <backspace> key. This will erase the ..1D5, and allow you
  to change the upper left corner of the range using the arrow keys as
  described above.


  This method is usually faster and easier than typing in the range.

  Notes:
  You can toggle between the type in method for entering a range and the
  cursor movement method by pressing F2. The default mode is enter the range
  using the cursor keys.

  If you are entering the second cell in a range, and decide you must
  correct the first cell, use the backspace key to return to the first cell.

  If you are typing in the cell range, then all of the regular edit keys are
  available (eg arrows, ins, del, home, end etc).

.bp
.nf
.ce
SPREADSHEET COMMANDS

This section provides explanations for each of the spreadsheet commands.

Starting The Spreadsheet:
To start the spreadsheet, type S from the Main Menu.

You Type:              Resulting actions:
S ...................  From the Main Menu. Type S. You will be prompted to
                       enter the name of a spreadsheet model to load. If you
                       want to load a previously saved model, enter its
                       name. If you are starting a new model, enter a new
                       name for it. If the file exists, it will be loaded,
                       if not you will be asked if a new (empty) model file
                       should be created (answer Yes or No). All spreadsheet
                       model files must have a .spd extension, however, SS1
                       will add the .spd extension if you don't


Leaving the Spreadsheet:
There are three ways to quit the spreadsheet:
<shift>F10 .........   Quit the Spreadsheet. You will be asked if you want
                       to Save the data to the same file you specified on
                       entry, save the data to a New file, or Quit without
                       saving your changes. Enter S, N, or Q (or <esc> to
                       return to the spreadsheet). If you use the N option,
                       you will be asked to enter a file name to save the
                       data to. All model files must have a .spd extension,
                       however, if you don't enter the .spd, SS1 will add
                       it.

<shift>F9 ..........   The spreadsheet will be suspended. You will be given
                       the option of suspending to the SS1 Main Menu, to
                       DOS, or eXecuting a DOS command. If you select
                       Suspend to the Main Menu (by typing S), your
                       spreadsheet data and environment will be saved, and
                       you will be returned to the SS1 Main Menu. From here
                       you can run any of the SS1 tools. The spreadsheet job
                       you just suspended will be listed in the suspended
                       job list and can be restarted in the usual way.
                       If you select suspend to DOS (by typing D), your
                       model data and environment will be saved, SS1 will be
                       terminated, and you will be returned to DOS. The next
                       time you start SS1, you will be returned to your
                       spreadsheet model in the exact position you suspended
                       from.

                       If you select eXecute a DOS command (by typing X) you
                       will be temporarily sent to DOS to run a DOS command.
                       When the command terminates, you will be instantly
                       returned to the spreadsheet. With this option, SS1
                       remains memory resident, which makes the return to
                       SS1 instant (it also requires more memory - a minimum
                       of 320K is required to make this option useful).

.bp
Cursor Moving Keys:
The following keys move the cursor to a new cell.

You Type:              Resulting Cursor Move:
<up/down arrow> .....  Move cursor up or down one cell.
<home> ..............  Move the cursor to the first cell of current row.
<end> ...............  Move the cursor to the last occupied cell in the
                       current row.
<pgdn>/<pgup> .......  Move cursor 12 rows up/down, scrolling if necessary.
aTop ................  Move cursor to first cell on current page of model.
aBottom .............  Move cursor to last  cell on current page of model.

F3 ..................  Go to a specific cell.  Press F3.  You will be asked
                       to enter the cell to move to (eg 2P45).  See also the
                       introductory section on enter cell specifications.

F9 ..................  Memorize a location, or return to a memorized
                       location.  Press F9.  You will be prompted to either
                       enter M to memorize the current location, or press
                       <ret> to return to a previously memorized location.

Enter/Edit/Delete Cell Data:
Entering a ..........  To enter data into a new cell, or to replace the data
                       new cell in an existing cell, move the cursor to the
                       cell and type in the new data. See the introductory
                       section on entering data. Formulas must start with a
                       number, +, -, or (. Text labels can be started with a
                       number by starting the label with a single quote (').
                       Any of the edit keys listed below can be used to
                       speed up data entry.

F1 ..................  Edit the contents of a cell. Move the cursor to the
                       cell to be edited, and press F1. You can then edit
                       the current contents of the cell using the SS1 edit
                       keys (listed below). See also the introductory
                       section on entering data.


The following keys are used when entering or editing data for a cell:
<left arrow> ........  Cursor left one column.
<right arrow> .......  Cursor right one column.
<home> ..............  Cursor to start of data.
<tab> ...............  Cursor to next word.
<end> ...............  Cursor to end of data.
<ctrl end> ..........  Delete from cursor to end of data.
<ins> ...............  Alternate between insert and typeover modes.
<del> ...............  Delete the character cursor is on.
<ret> ...............  Accept entered data, and leave the cell.
F2 ..................  Toggle between cursor and type in modes.
(Note: learn keys may also be used.)

F10 .................  Blank the cell that the cursor is on. Press F10. The
                       cell that the cursor is will be erased (no
                       confirmation is requested).

Insert or Delete Rows, Columns or Pages:
Use the following commands to insert or delete rows, columns or pages.

<ins> ................ Insert rows, columns or pages. Press the <ins> key.
                       You will be asked if you want to insert a Row, Column
                       or a Page. Answer by typing R, C or P. You will then
                       be asked how many rows, columns or pages to insert.
                       Type in a number, then <ret>. If you are inserting
                       rows or columns, you will then be asked if the
                       insertion is to be performed only on the current
                       Page, or on All pages. Answer P or A. The insertion
                       will then be performed, and any equations references
                       occurring after the insertion will be corrected.

<del> ...............  Delete rows, columns or pages from the spreadsheet.
                       This command works in exactly the same way as the
                       insert command described above.

Loading and Saving the Model:
Use the following commands to load or save the spreadsheet model.
aLoad ...............  Load a spreadsheet model from a file it was saved
                       to previously. Type <alt> L to request the Load. You
                       will be asked for a file name to load (normally a
                       default file name will be provided). Enter the name
                       of the file to load. This must be a file that was
                       previously saved by the spreadsheet, and it must have
                       the extension .spd (if you don't enter the .spd, SS1
                       will add it). It is also possible to insert tabular
                       data from an ordinary text file in the spreadsheet.
                       See the aInsfile command described below.

                       Note: This command will replace the current
                             spreadsheet model.

aUpdate .............  Save the spreadsheet model you are currently 
                       working on to a file without leaving the spreadsheet.
                       You should use the update command to save the model
                       you are working on from time to time. This takes very
                       little time, and insures that you will not lose data
                       if the power or computer were to fail while you are
                       working on the model. Type <alt> U to request the
                       update. You will be asked if you want to Save the
                       data to the file you entered with, or save the data
                       to a New file. Answer S or N. If you answered N, you
                       will be asked to enter a new file name to save the
                       model to (the file must have a .spd extension, SS1
                       will add it if you don't enter it).

aClear ..............  Clear the spreadsheet.  Press <alt>C.  You will be
                       asked if you want to perform this potentially
                       disastrous action. If you answer Y, all cells will be
                       blanked. WARNING - all changes that you made since
                       the last time you saved your data will be lost.


Printing, Inserting files, and Transferring Data:
aPrint ..............  Output a range of cells to the printer or a file.
                       Type <alt> P to begin a print.  You will be asked to
                       input the range of cells to be printed.  Enter the
                       range as described in the section above on entering
                       ranges.  You will then be asked for the name of the
                       printer or file to output the data to.  PRN (the
                       standard printer name) is provided as a default.  If
                       you wish to send the data to the printer, just type
                       <ret>.  If the data is to go to a file, enter the
                       name of the file and a <ret>.
                       The print command is also used to transfer the
                       contents of all or part of a spreadsheet to any of
                       the other SS1 tools, or to outside programs.  To do
                       this, just specify that your data be sent to a file
                       (as described above).  The print command writes a
                       standard ASCII text file which can be inserted in the
                       editor or data manager, and can also be read by many
                       outside programs.

F2 ..................  Alternate between cursor mode and type in mode for
                       entering the range of cells to be printed.  See the
                       introductory section on entering ranges of cells.

aSetGlobals .........  Set the default column format. Set printer 
                       parameters. To change the page length and/or maximum
                       line width for output printed by the Print command,
                       type <alt>S, enter the new pagelength, and/or width,
                       then press F1.

aInsfile ............. Insert the contents of a text file into the 
                       spreadsheet at the location you specify. Type <alt> I
                       to initiate the insertion. You will be asked to enter
                       the cell coordinates for the cell that will be at the
                       upper left corner of the insertion. Enter a cell
                       specification - eg 1G10. You will then be asked to
                       enter the name of the file to be inserted. Enter the
                       name and a <ret>. The data from the file will then be
                       inserted according to the rules described below. The
                       first non-blank line of the file determines how the
                       data will be inserted into the spreadsheet. For
                       example, if this file:

.pb 17
                            Month    Yr Income          Length
                              Jan    85  50566            67.8
                              Feb    85   4444             0.8
                            March    99    -55           33333

                       was inserted at cell 1C2, the spreadsheet would look
                       like this:

               ---|--A---|---B---|---C----|----D----|----E----|----F----|
                 1|
                 2|                   Month        Yr    Income    Length
                 3|                     Jan        85     50566      67.8
                 4|                     Feb        85      4444       0.8
                 5|                   March        99       -55     33333

                       The first non-blank line of the file is used to mark
                       the start of each column and the width of each
                       column. It must consist of text strings that start at
                       the beginning of each column, and end at the end of
                       the column. If the first line of the file you wish to
                       add does not conform to these rules, then you must
                       add one that does.

                       The insertfile command is also used to import data
                       from other SS1 tools into the spreadsheet, and from
                       external programs into the spreadsheet. For example,
                       if you have created a table in the editor and want to
                       read it into the spreadsheet, use the editors put
                       block command to put it into a file, then used the
                       insertfile command to read it into the spreadsheet.
                       You will usually have to add a first line to the file
                       to mark the columns as described above.

Copying Ranges of Cells:
F4 ..................  Make one or more copies of a source range of cells
                       into a destination range.  Press F4. You will be
                       asked to enter the source range. Enter the source
                       range (see range entry instructions in the
                       introductory section).  The source range can be
                       anything from 1 cell to an entire page.  You will
                       then be asked to enter the destination range. Enter
                       the destination range.
                       NOTES:
                       - To make multiple copies of the source range, enter
                         a destination range large enough to hold multiple
                         copies.
                       - The destination range can overlap the source
                         range, but must not be totally surrounded by it eg:
                         SOURCE:          DESTINATION:
                         1C4..1D5         1C4..1G12    - ok
                         1C4..1D5         1A1..1G12    - illegal
                         1F10..1G12       1C4..1G12    - ok
                         1F10..1G12       1C4..1H13    - illegal
                       - If the cells to be copied contain formulas, you
                         will be asked if the formulas are to be adjusted,
                         or left unchanged. If you elect to adjust formulas
                         (the usual choice), the equations will be changed
                         as they are copied to reference cells in the same
                         relative position from the destination cell as the
                         source cell did. If you do not adjust, the
                         equations will be copied exactly as is.

F2 ..................  Alternate between cursor mode and type in mode for
                       entering the range of cells to be copied.  See the
                       introductory section on entering ranges of cells.



Changing Column Format:
F5 ..................  Change the format for the column cursor is in. Press
                       F5. You will be prompted to enter the total width of
                       the column. Enter a number between 3 and 64. You will
                       then be asked for the number of decimals to display.
                       enter a number between 0 and 9. Enter 0 decimals for
                       text. To set the format to be used as the default for
                       all columns use the SetGlobals command.

                       NOTE: Only the first 10 pages can have unique
                       formats; pages 11 through 255 will use the format of
                       page 10.

aSetGlobals .........  Set the default column format. Set printer 
                       parameters. To change the default column format,
                       press <alt>S, enter the column total width and number
                       of decimals, then enter F1.

Recalculation:
F7 ..................  Recalculate the current page.  Press F7.
F8 ..................  Recalculate all pages of the model. Press F8. The
                       equations on the current page (or all pages for F8)
                       will be recalculated, and the display updated. If
                       equations in your model reference cells that are
                       downward or to the right (ie forward) whose values
                       can change, you may have to do the recalculation
                       twice to get accurate values. Because it is useless
                       for anything but small models, "automatic"
                       recalculation is not provided - so you must use F7 or
                       F8 to update the model after you make changes.

.nf
Functions:
The following functions are provided to perform calculations on spreadsheet
cells.

SIN(N)  .............  Calculate the sine N.
COS(N)  .............  Calculate the cosine of N.
ARCTAN(N) ...........  Calculate the arctangent of N.
SQRT(N) .............  Calculate the squareroot of N.
SQR(N)  .............  Calculate the square of N.
ABS(N) ..............  Calculate the absolute value of N.
LN(N) ...............  Calculate the natural log of N.
LOG(N) ..............  Calculate the base 10 log of N.
EXP(N) ..............  Raises e to the power of N.

1C2..1D4  ...........  Sum all of the cells in the indicated range.
1C2 1D4 .............  Raises 1C2 to the power of 1D4.

Examples of formulas containing functions:
       1C4..1C10             - sum the cells in column C from rows 4
                               through 10.
       (1C4..1E4)*(3.4+2D6)  - sum the cell in the range 1C4..1E4, and
                               multiply by the quantity 3.4 plus cell 2D6.
       3C4..6E12             - sum all of the cells in columns C through E,
                               rows 4 through 12 over pages 1 through 6.
       SIN(34)+SQRT(1C45)    - Add the sine of 34 degrees to the squareroot
                               of the contents of cell 1C45.












```
{% endraw %}

## SUPPRN.DOC

{% raw %}
```
.ml 80
.in 4
.rm 80
.bp 1 
.he ||Supported Printers||
.fo |||Page A3-$P|
.ce 
SUPPORTED PRINTERS

.fi
Special support is provided for the following list of printers. See the
appendices on Installation and Setup, and the chapter on the Print
Formatter for details on how to install and use these printer pattern files.
If your printer is not listed here, you might try some of the ones that are
listed (many dot matrix printers emulate the Epson printer), or you can
create or customize a printer pattern file for your printer; see the Setup
appendix.  A ".DOC" file is also supplied for each that shows how the printer
is set up, and what the .ps strings do.
.nf

DIABLO    DIABLO.PRN    Diablo 630 (and most other Diablos).

EPSON     EPSON.PRN     All Epson printers (and many other printers).

HP        HPLASER.PRN  Hewlett Packard Laser Jet Printer.

OKIDATA   OKIDAT.PRN    Okidata Printers.

PROWRITER PRO.PRN       C. Itoh Prowriter

QUME      QUME.PRN      Qume letter quality printers.

TI855     TI855.PRN     TI 855 printer using the "WP" codes.
                        (use EPSON.PRN  for "DP" codes)

TTX1014   TTX1014.PRN  Teletex TTX-1014 printer.


```
{% endraw %}

## TI855.DOC

{% raw %}
```
Printer Pattern File for TI 855 Printers:


Bold = is done with the hardware bold.
Undl = is done with the hardware underline.
ps 1 = Letter Qual print.
ps 2 = Draft print.
ps 3 = font cartridge 1.
ps 4 = font cartridge 2.
ps 5 = font cartridge 3.
ps 6 = 10 ptich.
ps 7 = 12 ptich.




```
{% endraw %}

## TTX1014.DOC

{% raw %}
```
Printer Pattern File for TTX 1014 Printers:

Bold = is done with the hardware shadow printing and double pass.
Undl = is done with a separate underline pass.
ps 1 = 10 pitch.
ps 2 = 12 pitch.
ps 3 = 15 pitch.
ps4..ps9 not used




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1415

     Volume in drive A has no label
     Directory of A:\

    DIABLO   DOC       230   6-05-88   5:47p
    DIABLO   PRN       523   6-05-88   5:47p
    DIABLO2  DOC       280   6-05-88   5:47p
    DIABLO2  PRN       523   6-05-88   5:47p
    EPSON    DOC       287   6-05-88   5:47p
    EPSON    PRN       523   6-05-88   5:47p
    FILE1415 TXT      1806   6-01-89  10:08a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       386   6-01-89  10:10a
    LASERJET DOC      1705   6-05-88   5:47p
    LASERJET PRN       523   6-05-88   5:47p
    SAMPLE   SPD      2517   6-11-88  10:46a
    TI855    DOC       301   6-05-88   5:46p
    TI855    PRN       523   6-05-88   5:46p
    TTX1014  DOC       242   6-05-88   5:46p
    TTX1014  PRN       523   6-05-88   5:46p
    TTY      CFG       622   6-05-88   5:46p
    VT       CFG       622   6-05-88   5:46p
    DOC          <DIR>    
           19 file(s)      12174 bytes

     Directory of A:\DOC

    .            <DIR>    
    ..           <DIR>    
    AIDS     DOC     11997   6-11-88  10:31a
    ALL      DOC       301   6-06-88   7:56p
    COMM     DOC     29184   6-05-88   5:36p
    CONTENTS DOC      2094   6-11-88  10:31a
    EDIT     DOC     29073   6-06-88   5:34p
    FM       DOC     26139   6-05-88   5:36p
    INDEX    DOC      8281   6-05-88   5:36p
    INSTALL  DOC      2410   6-05-88   5:36p
    INTRO    DOC      3265   6-11-88  10:31a
    LM       DOC     15930   6-05-88   5:36p
    OVERVIEW DOC     22901   6-11-88  10:31a
    PERRPT   DOC      1673   6-05-88   5:36p
    PRINT    DOC     14127   6-05-88   5:36p
    SETUP    DOC       954   6-05-88   5:36p
    SS       DOC     34103   6-05-88   5:35p
    SUPPRN   DOC      1205   6-05-88   5:35p
           18 file(s)     203637 bytes

    Total files listed:
           37 file(s)     215811 bytes
                           86016 bytes free
