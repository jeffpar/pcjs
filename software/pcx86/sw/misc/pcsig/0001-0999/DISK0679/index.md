---
layout: page
title: "PC-SIG Diskette Library (Disk #679)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0679/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0679"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "IDEAL TERMINAL"

    IDEAL TERMINAL (IT) is a VT-100 and VT-52 terminal emulator and a
    full-service communications program.
    
    Features:
    
    ~ Fast -- suitable for screen editing at 9600 baud
    
    ~ On-line help, including current macro definitions
    
    ~ KERMIT, XMODEM, and ASCII file-transfer capabilities
    
    ~ Wildcard file specs for KERMIT transfers
    
    ~ Auto-dialing/auto-retry for Hayes-compatible modems
    
    ~ Save and review screen images
    
    ~ Log to printer or disk
    
    ~ History of the most recent 16 screens of data
    
    ~ Automatic screen blanking, after 30 minutes of inactivity
    
    ~ Macro key definition and script files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0679.TXT

{% raw %}
```
Disk No:  679                                                           
Disk Title: Ideal Terminal                                              
PC-SIG Version: S1.3                                                    
                                                                        
Program Title: Ideal Terminal (IT)                                      
Author Version: 3.7                                                     
Author Registration: $20.00                                             
Special Requirements: Modem.                                            
                                                                        
IDEAL TERMINAL (IT) is a VT-100 and VT-52 terminal emulator and a       
full-service communications program.                                    
                                                                        
Features:                                                               
                                                                        
~ Fast -- suitable for screen editing at 9600 baud                      
                                                                        
~ On-line help, including current macro definitions                     
                                                                        
~ KERMIT, XMODEM, and ASCII file-transfer capabilities                  
                                                                        
~ Wildcard file specs for KERMIT transfers                              
                                                                        
~ Auto-dialing/auto-retry for Hayes compatible modems                   
                                                                        
~ Save and review screen images                                         
                                                                        
~ Log to printer or disk                                                
                                                                        
~ History of the most recent 16 screens of data                         
                                                                        
~ Screen blanks, after 30 minutes of no use                             
                                                                        
~ Macro key definition and script files                                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989, 1990 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  Disk No 679  IT (Ideal Terminal)  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation, type: COPY IT.DOC PRN (press enter)         ║
║                                                                         ║
║ To run the program, type:  IT (press enter)                             ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## IT.DOC

{% raw %}
```











                                   IT

                             Ideal Terminal

                         Version  3.7   1/24/90

               Copyright 1986,1987,1988,1989,1990 Harbaugh



         This is shareware.  I encourage you to share copies of
         this program and document.

         If you find IT of value and decide to use it regularly,
         please register and send the fee of $20.

         Upon receiving your registration payment, I will send you
         one program update free of charge, and will answer questions
         by phone or mail.  I will occasionally send all registered
         users a synopsis of program versions, and offer to send the
         latest for a fee of $10.

         Distribution is on 5 1/4 inch 360k diskette.

         You may use the next page as a registration form.  Please
         indicate which version of IT you have, and where you got IT.

         Thank you.

         Donald G. Harbaugh
         771 Blanchard Way
         Sunnyvale, CA 94087
         408 737-9130























         IDEAL TERMINAL Registration Form


         _______________________________________________
         Name

         _______________________________________________
         Address

         _______________________________________________


         ______________________   ________  ____________
         City                     State     Zip



         I got IT (Version  3.7   1/24/90)  from:


         Bulletin board  _______________________________

         Mail-Order Shareware distributor

                         _______________________________
                         _
         Friend         |_|

         Other           _______________________________


         Please send $20 to:
         Donald G. Harbaugh
         771 Blanchard Way
         Sunnyvale, CA 94087





















                                               USER'S GUIDE for IT
                                                            Page 3
      
      
      
      
      
      
      
      
      
                                CONTENTS
      
                            1.0 INTRODUCTION
                            2.0 INSTALLATION
                            3.0 OPERATION
                            4.0 THE SET-UP FILE
                            5.0 TERMINAL EMULATION
                            6.0 THE STATUS LINE
                            7.0 IT COMMANDS
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      



                                               USER'S GUIDE for IT
                                                            Page 4
      
      
      
      
      1.0     INTRODUCTION
      
      This is Ideal Terminal (IT for short), a VT-100 and VT-52
      terminal emulator and communications program for the IBM PC,
      PC-XT, PC-AT, and compatible computers.
      
      To use IT, your PC needs to be equipped with version 2.0 (or later)
      of DOS and an asynchronous communications adapter (COM1 or COM2).
      IT works with both monochrome and color graphics display adapters.
      
      With IT, you can use your PC as a terminal connected directly to a
      main frame computer or other device, such as a prom programmer or
      an in-circuit emulator.  IT can also communicate via modem with a
      dial-up host.  IT auto-dials modems that are Hayes Smartmodem
      command compatible.
      
      IT is fast, suitable for screen editing at 9600 baud, even when run
      on a 4.7 mhz PC.
      
      IT can do file transfers between the PC and the host using two
      popular error checking protocols (Xmodem and Kermit).  IT can
      also send and receive files unchecked to and from hosts that have
      no Xmodem or Kermit services.
      
      Other features of IT:
        - Simple to install, only 4 files on distribution diskette,
          including this document
        - Simple to operate, with on-line help
        - Retains history of session for instant review and capture
        - Commands from session history may be edited and reissued
        - Dialing directory for use with Hayes compatible modem
        - Macro keys may be used to automate key sequences or dial
          modems that are not Hayes compatible
        - Set-up file may be used to set defaults, define macro keys
        - Logging (capture) to disk
        - Logging to printer
        - Wildcard file specifications may be used in Kermit transfers
        - Path search for set-up and dialing directory files allows
          running IT from any directory
        - Escape to DOS while IT stays resident, beeps to signal
          receipt of data from host
        - Screen blackout after 30 minutes of no activity to avoid
          phosphor etching
      
      



                                               USER'S GUIDE for IT
                                                            Page 5
      
      
      
      
      2.0     INSTALLATION
      
      IT consists of the following files:
      
        - IT.DOC    This user's guide
        - IT.EXE    The executable program
        - IT.SET    Set-up file
        - IT.DIR    Auto-dial phone numbers file
      
      Print a copy of this user's guide, if you like, for reference.
      
      Copy the other 3 files into a directory that is in your DOS PATH
      command --- you do NOT need a copy in every directory where you
      will use IT.
      
      IT works with asynchronous communications adapters COM1 and COM2.
      
      For modem hookup, follow directions supplied with the modem.
      
      For a direct connection between the PC and a host (not a modem),
      you may need a null modem or a cable that is wired as one.
      Check your host's installation manual for terminal cabling.
      
      If you want to make an RS-232 cable, you should know that IT only
      needs TRANSMIT DATA, RECEIVE DATA, and SIGNAL GROUND.  IT asserts
      REQUEST TO SEND and DATA TERMINAL READY always.  IT ignores
      CLEAR TO SEND and DATA SET READY.  IT ignores SIGNAL DETECT except
      to display the time in minutes since it was asserted.
      
      IT does flow-control using XOFF/XON characters in the data, rather
      than using RS-232 signals.  IT sends XOFF (ASCII 19) when there is
      a significant backlog in its receive buffer, and sends XON (ASCII 17)
      when the backlog is cleared.  IT ignores XOFF and XON from the host,
      except when sending a file in the ASCII or script protocol.
      
      To run IT, simply type IT at the DOS prompt:
      
      C> it
      
      The screen will go blank except for IT version identification
      at the top and a status line at the bottom.  Note the baud rate
      and comm adapter shown in the status line.  Type ALT-B to change
      baud rate and ALT-C to change comm adapter until they are set
      properly.  (ALT-B means hold down the ALT key and hit the B key,
      either upper or lower case).



                                               USER'S GUIDE for IT
                                                            Page 6
      
      
      
      
      With IT there is no "connect" command, i.e. you are "connected"
      the moment you run IT.  All keys you type are sent out the
      currently selected comm port, except for ALT keys and your
      responses to the prompts that result from ALT keys.
      
      Type a command to the host attached to the selected comm adapter,
      and see if you get the right response.  If attached to a
      Hayes-compatible modem, type "ATH" then carriage return.  You
      should see "ATH" and then "OK".
      
      If you get the right response, you can skip the rest of this
      section.
      
      If you see a garbled response, type ALT-V to select VT-52 mode
      (seen in the bottom line) and try again.  If the response is
      still garbled, try selecting different combinations of parity
      and frame length (number of data and stop bits) by making
      changes in the set-up file.  The following sections explain
      the set-up file.
      
      If each character that you type appears twice or not at all,
      type ALT-O to change the full or half-duplex (echo) selection.
      
      If you still do not get the right response, you may have a comm
      adapter conflict, i.e. more than one comm adapter configured as
      COM1 (or COM2).  Read the manuals for your system and add-on
      boards to identify all the comm adapters in your system.  Make
      sure that the comm adapter you want to use is the only one
      configured as COM1 (or COM2).  You may need to change jumpers or
      switches on add-on boards, or even remove a board.
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      



                                               USER'S GUIDE for IT
                                                            Page 7
      
      
      
      
      3.0     OPERATION
      
      The complete DOS command-line format for IT is:
      
      C> it  [setup_file]  [ALT-key]
      
      where: "setup_file" is the set-up file name, and "ALT-key" is
      the alt key to be invoked initially (as if you had typed it
      immediately after running IT).  More about alt keys in the next
      section.  Both setup_file and ALT-key are optional, and may be used
      in any combination and order.
      
      Set-ups for IT can be selected in an ASCII file.  The set-up file
      name is assumed to be IT.SET unless you use the setup_file parameter
      on the DOS command line.
      
      IT searches for the set-up file by looking first in the current
      directory and then through the directories given in the DOS "path"
      command.  If the file is not found, IT uses the default set-ups
      shown in section 4.
      
      This gives you 2 convenient ways to set up for operation with
      different hosts:
      
      (1) Create a directory for each host, with a set-up file to match
          (named IT.SET) in each.  Run IT from the directory of the
          current host, no command-line file name is needed.
      
      (2) Create set-up files (in any directory listed in your PATH)
          named for the host they are used with.  Run IT from any
          directory and specify the set-up file on the command line.
          For example, you might have one set-up file named COMPU.SET,
          and another named VAX.SET.  You run IT from any directory
          by typing:
          C> it compu  (or)
          C> it vax
      
      EXAMPLES:
      
      C> it
      causes (by default) a search for a file named IT.SET.
      
      C> it  compu
      causes a search for a file named COMPU.SET.  Note that the file
      extension must be .SET and you don't need to type it on the



                                               USER'S GUIDE for IT
                                                            Page 8
      
      
      
      command line.
      
      C> it  alt-7
      executes it and executes the alt-7 key as if you had typed it.
      This option is useful when you invoke IT from a batch file such
      as AUTOEXEC.BAT.
      
      C> it  alt-f10  compu
      combines the two options on one DOS command line, they may be
      in either order.
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      



                                               USER'S GUIDE for IT
                                                            Page 9
      
      
      
      
      4.0     THE SET-UP FILE
      
      The set-up file is an ASCII file that you can create and modify using
      an ASCII editor such as EDLIN.
      
      Here is the set-up file distributed with IT:
      
      ;   IT.SET   Set-ups for IT.
      ;
      ;   Comments begin with ";"
      ;   Case (UPPER and lower) is ignored.
      ;   The active choice shown in this document is also the default,
      ;   used if no choice is made, or if no set-up file is found.
      ;
      ;   active
      ;   choice:        choices:             meaning:
      ;   ~~~~~~~        ~~~~~~~~~~~~~~~~~~~  ~~~~~~~~
          com1           ; com1, com2         comm adapter
          1200           ; 9600, 150, 300,    baud rate
                         ; 1200, 2400, 4800
          8data          ; 8data, 7data       number of data bits
          1stop          ; 1stop, 2stop       number of stop bits
          noparity       ; noparity,          parity selection
                         ; oddparity,
                         ; evenparity
          full           ; full, half         (duplex) echo selection
          7bit           ; 7bit, 8bit         receive character masking
          vt52           ; vt52, vt100        terminal emulation mode
          del            ; del, bs            backspace character code
          number         ; number, arrow      keypad mode
          nowrap         ; nowrap, linewrap   screen wrap mode
          tone           ; tone, pulse        modem dialing mode
          kermit         ; kermit, xmodem,    file transfer protocol
                         ; ascii, script
      
      ; Beep freqency, use "beep x", where x is 10 to 64000:
      ;   beep 10        ; silence
      ;   beep 200       ; high-pitched beep
      ;   beep 50000     ; low-pitched beep
          beep 32000     ; default
      
      ; Screen color definition, use "x on y", where x and y are:
      ;   0 for black      4 for red
      ;   1 for blue       5 for magenta
      ;   2 for green      6 for brown



                                               USER'S GUIDE for IT
                                                           Page 10
      
      
      
      ;   3 for cyan       7 for white
          7 on 1         ; white on blue
      
      ; Alt key assignments.
      ; Alt keys are used to issue IT commands.  For example, alt-H
      ; (meaning hold down the Alt key while you type the H key) is the
      ; alt key assigned to the HELP command.  When you type alt-H, IT
      ; displays on-line help on your screen.  This help includes a list
      ; of the IT commands and for each command, the assigned alt key(s)
      ; and a brief description.  There are 48 alt keys and 22 IT commands.
      ; The 48 alt keys are:
      ;   alt-=
      ;   alt--
      ;   alt-A thru alt-Z
      ;   alt-0 thru alt-9
      ;   alt-F1 thru alt-F10
      ; Each IT command is assigned to one alt key by default (within IT).
      ; By changing this file you can add, delete, or change alt key
      ; assignments.  You can assign none, one, or more than one alt key to
      ; each command.  The only restrictions are:
      ;   1. You cannot change alt-H, it is always assigned to HELP.
      ;   2. You cannot change alt-X, it is always assigned to QUIT.
      ; The format of an alt key assignment is (two examples):
      ;   alt-Q  QUIT         ; this assigns QUIT to alt-Q in addition
      ;                       ; to alt-X
      ;   alt-C               ; this gives alt-C no assignment, prevents
      ;                       ; you from accidently changing comm ports
      ; If no assignment is present in this file for a given alt key, the
      ; default assignment remains in effect for that key.
      ; Here are the default alt key assignments:
      
          alt-W  wrap         ; change line wrap mode
          alt-E  dos          ; enter dos temporarily
          alt-R  recv         ; receive file
          alt-Y  hist         ; view scroll history
          alt-O  echo         ; change echo mode
          alt-P  logp         ; change printer logging
          alt-S  send         ; send file
          alt-D  dial         ; auto-dial a modem
          alt-H  help         ; display IT help
          alt-K  xfer         ; change file xfer mode
          alt-L  logf         ; change file logging
          alt-X  quit         ; quit IT
          alt-C  comm         ; change comm port
          alt-V  term         ; change vt52/vt100 mode
          alt-B  baud         ; change baud rate



                                               USER'S GUIDE for IT
                                                           Page 11
      
      
      
          alt-N  mask         ; change input char mask
          alt-1  get1         ; view screen 1
          alt-2  get2         ; view screen 2
          alt-3  get3         ; view screen 3
          alt-F1 put1         ; save screen 1
          alt-F2 put2         ; save screen 2
          alt-F3 put3         ; save screen 3
      
      ; Macro key definitions.
      ; Alt keys can also be used as macro keys.  A macro key consists of a
      ; string (up to 246 characters long) that is sent, as if typed, when the
      ; assigned alt key is typed.  In other words, you can type a single
      ; alt key, and IT will "type" a string of characters for you.  Up to 40
      ; macro keys can be defined.  Note that if the same alt key is used in
      ; more than one definition (IT command or macro key), the last
      ; definition in the file is used, all others are ignored.
      ; The macro string can also contain certain groups of characters
      ; beginning with backslash (\) for these special actions:
      ;   \Axxx.      to "type" another alt key, e.g. \Af1. for alt-F1
      ;               Note the period, required to mark the end of the group.
      ;   \B          for comm line break
      ;   \D          for 1 sec delay
      ;   \E          for the escape character
      ;   \N          for carriage return
      ;   \R          also for carriage return
      ;   \Sxxxx.     to choose a set-up, e.g. \Svt100. for vt100
      ;               Note the period, required to mark the end of the group.
      ;   \nnn        for any ascii char, nnn = character code in octal
      ; To send the backslash itself, use \\.
      ; The format of a macro key definition is:
      ;   alt-XXX  "macro string"
      ; Note the double-quotes around the string, they are required.
      ; It is ok to use double-quotes within the string.  The entire
      ; definition must be on one line.  Here are the macro key definitions:
      
        ; The following defines alt-F6 to be a macro that sets the terminal
        ; emulation mode to vt-100, sets the baud rate to 1200, sets the
        ; modem's "wait for carrier" register to 15 seconds, waits 2 seconds,
        ; and then types alt-d to bring up the dialing directory.
        alt-f6   "\svt100.\s1200.ats7=15\n\d\d\ad."
      ; End of IT.SET
      
      
      
      
      



                                               USER'S GUIDE for IT
                                                           Page 12
      
      
      
      
      5.0     TERMINAL EMULATION
      
      IT emulates a VT-100 terminal.
      
      The VT-100 is a CRT terminal made by Digital Equipment Corp. (DEC).
      The VT-100 has a mode of operation in which it emulates the VT-52,
      another DEC terminal.  IT supports both the VT-100 and VT-52 modes.
      IT emulates most, but not all, features of the VT-100.
      
      
      5.1     DISPLAY EMULATION
      
      The VT-100 display has 24 lines of 80 or 132 characters.  The PC
      display has only 80 columns, and so it's not possible to show 132
      columns on one line.  Instead, IT "wraps" to the next line when
      necessary in the 132-column mode.
      
      The VT-100 has programmable tab stops, but IT only emulates the
      8-column tabs.
      
      The VT-100 has double size characters not possible on the IBM PC.
      These are displayed in normal size and with normal spacing.
      
      The VT-100 has special graphics characters that are emulated by IT, as
      nearly as the IBM PC display font permits.  However, six of these
      graphic characters have no equal in the IBM PC font, namely the
      2-letter characters:  HT, FF, CR, LF, NL, and VT.  IT displays a blank
      for each of these.
      
      Line noise or baud rate mismatch may accidentally cause IT to go into
      the graphics mode (just as an actual VT-100 terminal would).  When
      this happens you see graphic symbols in place of lower-case alphabetic
      characters.  To correct this problem, select vt-52 emulation mode and
      then vt-100 mode again.
      
      The IBM PC has one more display line than the VT-100, and IT uses that
      line (the bottom line of the screen) to display status.
      
      The VT-100 can display characters in high intensity, blinking, reverse
      background, and underlined.  IT emulates all of these features on a
      monochrome display, and all but the underline feature, which is not
      possible, on a color display.
      
      The slow-scroll and inverse video features are not emulated.
      



                                               USER'S GUIDE for IT
                                                           Page 13
      
      
      
      After 30 minutes of inactivity, IT blacks-out the screen to prevent
      phosphor etching.  Type any character key to restore the screen, that
      keystroke is ignored except to restore the screen.
      
      
      5.2     KEYBOARD EMULATION
      
      IT uses the PC function keys F1 through F4 to emulate the VT-100
      programmable function keys PF1 through PF4.
      
      The VT-100 arrow keys are emulated as follows:  F5 and F6 (both) for
      the up-arrow, F7 for the left-arrow, F8 for the right-arrow, and F9
      and F10 (both) for the down-arrow.
      
      The PC numeric keypad is used for the VT-100 keypad.  The PC keypad
      asterisk (*) is used for keypad comma (,) and keypad plus (+) is used
      for ENTER.
      
      The VT-100 has two keypad modes, called NORMAL and ALTERNATE.  The
      terminal is initially in the NORMAL mode, but some host programs
      command the terminal to go to ALTERNATE and then back to NORMAL
      during the course of program operation.  The terminal sends different
      character codes for the keypad keys, depending on which of the modes
      is currently active.
      
      When in the NORMAL keypad mode, you can use the PC keypad in
      either of the PC keypad modes:  NUMERIC, or ARROW, as controlled by
      the NUM LOCK key.
      
      However, when in the ALTERNATE keypad mode, the PC keypad must be in
      NUMERIC so that keypad 5 will be usable.  Therefore, IT automatically
      selects NUMERIC when the host commands ALTERNATE keypad mode, and
      restores the original state when the host commands NORMAL.
      
      Later versions of the VAX VMS operating system allow command line
      editing, where previously typed commands can be recalled, edited, and
      reissued.  Using the ARROW mode, you can do VMS command line editing
      using the PC keypad "naturally", i.e. in the way the keys are marked.
      
      That is, the 4 keypad keys marked with arrows produce the same codes as
      the VT-100 arrow keys.  The Home key produces ^H (<CONTROL>-H), the End
      key produces ^E, the Ins key produces ^A, and the Del key produces the
      right-arrow code followed by the delete code.
      
      The VT-100 terminal has both a backspace key (ascii 8) and a "del" key
      (ascii 127), but the PC has only a backspace key.  You can select



                                               USER'S GUIDE for IT
                                                           Page 14
      
      
      
      which of these 2 character codes you want the backspace key to send.
      See section 4, set-up file.  Typing <CONTROL>-H (hold down the control
      key while you type the H key) can always be used to send the backspace
      character code.
      
      The VT-100 break key is emulated by both the SCROLL LOCK and the
      <CONTROL>-BREAK keys.
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      



                                               USER'S GUIDE for IT
                                                           Page 15
      
      
      
      
      6.0     THE STATUS LINE
      
      IT uses the bottom line of the display to show status, prompt for
      input, and display messages.
      
      
      6.1     STATUS FIELDS
      
      The status line shows the fields described below, left to right.
      
      "ALT-H for help" is displayed to show you how to call up the help
      display.  At certain times, IT shows "<ESC> to cancel" here to tell
      you that the Esc key may be used to cancel the current operation.
      
      IT shows the keyboard caps-lock status, either "CAP" or blank.
      
      IT displays NUM LOCK status (NUMERIC or ARROW) by showing an "N" or an
      up-arrow.
      
      The currently selected file transfer protocol (Kermit, Xmodem, ASCII,
      or script) is displayed.  If ASCII, a digit (7 or 8) is appended to
      show the character masking choice from the set-up file.  If 7 bit
      character masking is selected, and if there are 8 data bits per
      character, IT discards the most significant bit of each character
      received.  This selection has no effect on characters transmitted,
      nor any effect during Kermit and Xmodem transfers.
      
      IT shows the currently selected communications adapter, COM1:  or
      COM2:.
      
      The currently selected baud rate (150, 300, 1200, 2400, 4800, or
      9600) is displayed next.
      
      IT shows the currently selected terminal emulation mode:  "VT-52" or
      "VT-100".  This field blinks when the host has commanded the
      ALTERNATE keypad mode.
      
      "W" is shown when in the line wrap (132 column) mode.
      
      "O" is shown when local echo (half-duplex) is on.  In this mode,
      keys typed are displayed on the screen in addition to being sent to
      the host.  If the host echoes characters received back to the
      terminal, then the terminal should be in full duplex mode (no local
      echo) to avoid duplicating each character typed.
      



                                               USER'S GUIDE for IT
                                                           Page 16
      
      
      
      "LOG" is shown when logging to disk.
      
      "PRT" is displayed when logging to printer.
      
      The time (in minutes) since CARRIER DETECT is shown.  This is how
      long you have been connected.
      
      The current date and time are also shown.
      
      When RECEIVING a file using Kermit or Xmodem protocol, IT shows the
      current block number as "Block:nnnn".  For Xmodem, the block size is
      128 bytes.  For Kermit, the block size is variable up to 96 bytes.
      
      When SENDING a file using Kermit or Xmodem protocol, IT shows current
      block and total blocks as "Block:nnnn/tttt".  For Xmodem transfers,
      tttt is exact.  But for Kermit transfers, tttt is a rough estimate.
      For binary files, this estimate can be quite low.
      
      
      6.2     STATUS LINE PROMPTING
      
      Some of the IT commands need additional information (such as file name),
      and in those cases IT prompts for the added info in the status line.
      
      You will see the cursor to the right of the prompt, where you must
      type the needed info.  In some cases, a default type-in is provided
      for you, and to accept it you just type <CR>.  If you want to discard
      the default, you can use the DELETE key to erase it one character at a
      time, or you can discard the whole default with the ESCAPE key <ESC>.
      
      When you have typed the response to the prompt, type <CR> and IT will
      do the requested function and restore the status line to normal.
      
      Any time before typing <CR>, you can edit your response using the
      arrow keys, Home, End, Del, backspace, tab, shift-tab, and <ESC>.  The
      insert mode is active at the start of each prompt.  In insert mode,
      characters under and to the right of the cursor are pushed right to
      make room for each new character typed.  Use the Ins key to toggle
      between insert and overwrite mode.  In overwrite mode, each character
      typed replaces the one under the cursor.
      
      
      
      
      
      



                                               USER'S GUIDE for IT
                                                           Page 17
      
      
      
      
      6.3     STATUS LINE MESSAGES
      
      IT displays messages in the status line in the same way as
      prompts.  Each message is announced with a beep, and is followed
      by the prompt: "hit <CR> to continue".  Here are the messages:
      
          can't find IT.DIR
              You issued the DIAL command, but IT could not find the file
              named IT.DIR.  Check path.
          can't open IT.DIR
              A disk error was found opening IT.DIR.
          can't find: xxxxxxxxxxxxx
              The wildcard file spec given for a Kermit send does not match
              any file.  Check device, path, and file name.
          can't open: xxxxxxxx.xxx
              The file name given for disk logging, sending, or receiving
              could not be opened.  Check device, path, and file name.
          error logging to disk
              Error writing to the disk log file.  May mean that the disk is
              full.
          error receiving xxxxxxxx.xxx
          error sending xxxxxxxx.xxx
              Kermit file transfer has failed.  May mean that the host
              Kermit has timed-out because you were too slow starting the
              transfer on the PC end.  Try again.
          error writing: xxxxxxxx.xxx
              Error writing the file being received.  May mean that the disk
              is full.
          host error: xxxxx
              Kermit file transfer has been aborted by the host for the
              reason xxxxx.
          no scroll history
              There is not enough free memory to keep scroll history.
          not enough memory for help
              There is not enough free memory to build the help display.
      
      
      
      
      
      
      
      
      
      



                                               USER'S GUIDE for IT
                                                           Page 18
      
      
      
      
      7.0     IT COMMANDS
      
      ALT keys are used to issue commands to IT.  For example, ALT-H calls
      up the IT help display.  ALT-H means hold down the ALT key and hit the
      H key (upper or lower case).  There are 22 IT commands, assigned
      to alt keys in the set-up file.  See 4.0 for a complete list of
      commands and how to assign alt-keys to them.  You can also see the
      list of commands and current alt key assignments by typing ALT-H.
      
      Some of the commands need explanation, and these are described here.
      The commands are described by name, e.g. DIAL, DOS, LOGF, etc.
      Remember that a command is invoked by typing the alt-key that is
      assigned to it.  You never type the command name.
      
      
      7.1     DIAL: AUTO-DIAL A MODEM
      
      If your PC has a modem that is Hayes Smartmodem command compatible, IT
      will dial for you.
      
      You first use an editor to make a file named IT.DIR containing phone
      numbers you want to dial.  The file can be up to 23 lines long, and
      each line can have one phone number.  Blanks are ignored and you can
      put comments beginning with a semicolon after each phone number.
      
      When you type the DIAL alt key, IT searches through the list of
      directories given in the DOS "path" command for the file IT.DIR.
      
      IT displays the first 23 lines of IT.DIR, putting the line number
      (1 to 23) at the left for identification.  IT then prompts with:
      "dial number:"
      
      Enter the number (1 though 23) and <CR>.
      
      IT will then command the modem with "ATDT" (or "ATDP") followed by the
      number on the line you have selected.  ATDT is the smartmodem command
      to dial a number using touch-tones, ATDP, using pulses.  You can
      choose tone or pulse dialing in the set-up file.
      
      You will hear the dial tone, the touch-tones (or pulses), and the ring
      tone (or a busy signal).  If the line is not busy, and if a modem
      answers, you will hear the carrier tones briefly and see "CONNECT".
      
      After CONNECT, the device at the other end of the telephone line is
      the host, rather than the modem.  This means that you can no longer



                                               USER'S GUIDE for IT
                                                           Page 19
      
      
      
      control the modem by typing smartmodem commands --- everything you
      type is passed through to the remote host.  Everything except for the
      escape code, 3 plus signs typed quickly.
      
      If you type 3 plus signs, you will see "OK", the smartmodem prompt.
      You can now type any of the smartmodem commands.  The command that you
      need most often is "ATH <CR>" to hang up.
      
      If the modem does not CONNECT within a certain time, IT will hang up
      and re-dial the same number.  IT will continue re-dialing until
      CONNECT or until you cancel by typing <ESC>.
      
      If IT CONNECTS after re-dialing, IT will beep the PC's speaker every 2
      seconds until you hit a key.  This lets you go about other business
      within earshot while IT repeatedly re-dials a busy number.
      
      
      7.2     DOS: ENTER DOS TEMPORARILY
      
      If you want to execute a DOS command without missing any data from the
      host, use the DOS command.  The screen will go blank and you will see
      the DOS identification.  You may now type DOS commands, as before you
      ran IT.
      
      IT remains in memory and beeps if any data is received from the host.
      Type EXIT at the DOS prompt to return to IT.  IT will restore the
      screen and display any new data received while running DOS.  Before IT
      restores the screen, it saves the screen image in buffer 1 (as if you
      had typed the command PUT1).  So if the screen contained something
      useful (such as a directory listing) you can view it using GET1.
      
      In order for the DOS command to work, the DOS file COMMAND.COM must
      be present in one of the directories listed in the currently active
      PATH definition.
      
      
      7.3     GET AND PUT SCREEN IMAGES
      
      If you want to save a copy of the screen for review later, use PUT1,
      PUT2, or PUT3.  These commands each save an image of the current
      screen for you to review later, using GET1, GET2, or GET3 respectively.
      When you type a GET command, the first 12 lines of the saved screen
      image will appear in a window at the top of the screen.  Then you can
      scroll through the image to view the rest of it.
      
      See 7.9, the HIST command, for information on other functions you



                                               USER'S GUIDE for IT
                                                           Page 20
      
      
      
      can perform while viewing a screen image.
      
      
      7.4     LOGF: LOG TO A FILE
      
      The LOGF command starts or stops logging to a file.  While logging
      to a file, all characters seen on the screen are also written to a
      file.  When you command LOGF, IT will prompt you with:
        "log file: xxxxxxxx.xxx"
      where xxxxxxxx.xxx = the name of the last log file used.
      
      Hit <CR> to accept the file name in the prompt, or hit ESCAPE to
      clear the default, and then type a file name and <CR>.
      
      If the file name you enter already exists, IT will append new data
      to it.  This allows you to turn logging on and off repeatedly to
      accumulate only what you want into a single file.
      
      
      7.5     LOGP: LOG TO THE PRINTER
      
      The LOGP command starts or stops logging to the printer.  While
      logging to the printer, all characters seen on the screen are also
      printed.
      
      
      7.6     XFER: CHANGE FILE TRANSFER MODE
      
      The XFER command changes the currently selected file transfer mode.
      There are 4 modes:  Kermit, Xmodem, ASCII, and script.  This command
      does not start a transfer, it only selects the mode to be used when the
      SEND and RECV commands are typed.  See the SEND and RECV commands for
      more.
      
      
      7.7     RECV: RECEIVE FILE(S)
      
      
      7.7.1   ASCII RECEIVE
      
      ASCII receive is the same as logging to disk except that, rather than
      appending new data to an existing file, a new file is created each
      time an ASCII receive is started.  If a file of the same name
      already exists, IT prompts: "xxxxxxxx exists, overwrite it ?"
      
      



                                               USER'S GUIDE for IT
                                                           Page 21
      
      
      
      7.7.2   SCRIPT RECEIVE
      
      No such operation.  If you command RECV while in the "script" transfer
      mode, nothing happens.
      
      
      7.7.3   XMODEM AND KERMIT FILE TRANSFERS
      
      To transfer files using the Xmodem and Kermit modes, IT needs the
      cooperation of a host program.  Kermit and Xmodem servers are
      available on many hosts.
      
      Some host Xmodem and Kermit programs give you several choices of error
      detection method, IT uses only the 8-bit checksum method.
      
      Remember two things about starting a file transfer in either of these
      modes:
      
        1. Always start the host transfer program first, then command IT to
           send or receive last.
      
        2. Command the host and IT to do complementary operations, i.e. if
           the host is sending, then the PC must receive and vice versa.
      
      After each file is transferred, IT displays the file name, number of
      bytes, elapsed time, and effective transfer rate.
      
      
      7.7.4   XMODEM RECEIVE
      
      IT will prompt: "file name:"
      
      Type the name (drive and path are optional) you want the received
      file to have.  If the file exists, IT will prompt:
        "file exists, overwrite it ?"
      
      Type "y <CR>" to overwrite the existing file, type any other
      character and IT will again prompt:
        "file to receive:"
      
      
      7.7.5   KERMIT RECEIVE
      
      IT will prompt: "receive path (<CR> for default):"
      
      Hit <CR> to accept the default drive and path.  Otherwise, type the



                                               USER'S GUIDE for IT
                                                           Page 22
      
      
      
      drive and/or path where you want the received file(s) to go.  Do not
      type the file name.  File name will be receive along with each file,
      and IT will create the file with that name, DOS limitations
      permitting.  Under DOS, file names are limited to 8 characters, with
      a 3 character extension.  If a file name from the host exceeds these
      limits, the additional characters are dropped.
      
      If a file of the same name already exists, IT will prompt:
        "xxxxxxxx.xxx exists, overwrite ? (a=yes,all)"
      
      Respond with "y" to overwrite the existing file.  Respond with "a" to
      overwrite this and any other existing files in a multi-file transfer.
      Type any other character and IT will prompt:
        "file to receive:"
      
      
      7.8     SEND: SEND FILE(S)
      
      
      7.8.1   ASCII SEND
      
      IT will prompt: "file to send:"
      
      Type the name (drive and path are optional) of the file you want to
      send.  IT does not search the DOS paths for the file.  While sending
      the file in this mode, IT checks received characters for XOFF.  IT
      will suspend sending when it receives an XOFF, and resume when it
      receives an XON.
      
      
      7.8.2   SCRIPT SEND
      
      This mode is similar to ASCII send, except that the file being sent
      can contain groups of characters starting with \ (backslash) to cause
      certain actions (such as delays) by IT.  See section 4.0 under
      "Macro Keys" for the list of \ groups and their actions.
      
      
      7.8.3   XMODEM SEND
      
      IT will prompt: "file to send:"
      
      Type the name (drive and path are optional) of the file you want to
      send.  IT does not search the DOS paths for the file.
      
      



                                               USER'S GUIDE for IT
                                                           Page 23
      
      
      
      7.8.4   KERMIT SEND
      
      IT will prompt: "file(s) to send:"
      
      Type the filespec (drive and path are optional) of the file(s) you
      want to send.  DOS wildcard characters may be used in the filespec.
      IT does not search the DOS paths for the files.  IT will send all
      files that match the given filespec.
      
      
      7.9     HIST: VIEW SCROLL HISTORY
      
      Whenever the screen scrolls up, the line that scrolls off the top is
      saved in a 400-line buffer that you can review using the HIST command.
      Also, when the host clears the screen, all lines being cleared are
      first copied into the buffer as if they had scrolled off the top.
      
      When you issue the HIST command, IT displays a window at the top of
      the screen, and puts the last 12 lines from the buffer there to view.
      The cursor will be within the window.  Now you can review all 400
      lines in the buffer by using the Home, End, PgUp, and PgDn keys.
      The Home and End keys have dual effects: if the cursor is not at
      the beginning or end of the line, IT moves it there.  If already at
      the beginning or end of line, IT displays the beginning or end of
      the history buffer.
      
      You can also move the cursor within the window and scroll the window
      using the arrow keys and the tab key (shifted moves right, and
      unshifted moves left).
      
      While you are reviewing the history buffer, terminal emulation is
      suspended, but you will be notified by a beep if characters are
      received from the host.
      
      When you are finished viewing, type <ESC> and the screen will be
      restored to the way it was before you began the review, and terminal
      emulation resumed.  If you want to return to emulation but leave the
      window in view, type the Q key rather than <ESC>.
      
      If you have typed a long command to the host, but made a small
      mistake in it, you can edit and reissue that command using the HIST
      feature.  You command HIST, point to the mistyped command with the
      cursor, and hit <CR>.  The text from the cursor to the end of the
      line is displayed in the status line after the prompt "Command:".  Now
      you can edit the command just as with any IT prompt (see 6.2).  When
      you have finished editing the command, type <CR> to send it to the



                                               USER'S GUIDE for IT
                                                           Page 24
      
      
      
      host, restore the screen, and resume terminal emulation.
      
      You can also search for a string within the buffer.  Type the keypad +
      key and you will see the prompt "Fwd Find:" or "Rev Find:".  Type the
      string you want to search for, and then keypad + again.  The buffer is
      searched from the line where the cursor is now, in the direction
      indicated by the prompt.  Upper and lower case differences are
      ignored.  You will be notified via a message in the bottom line whether
      or not the search was successful.  If no match is found, the cursor
      remains where it was.  If a match is found, the window is scrolled so
      that the match is in view, and the cursor is put on the beginning of
      the matched string.
      
      When you type keypad + again (after no match) the search direction is
      automatically reversed for the next search.  You can manually change
      search direction by typing the keypad 5 key.  The prior search string
      is remembered, so if you want to search for the same string again,
      just hit keypad + twice.  If you do not want to search on the prior
      string, use the backspace key or <ESC> to clear it.
      
      If you want to write the contents of the buffer into a file, type
      the F key.  IT will prompt for a file name, and copy all lines in the
      buffer to that file.
      
      
      7.10    QUIT: EXIT FROM IT
      
      Type ALT-X to exit from IT.  You cannot QUIT via <CONTROL>-C or
      <CONTROL>-break:  <CONTROL>-C generates ASCII code 3, and
      <CONTROL>-break generates a line break.
      
      Upon exit, IT automatically closes the log file, if open.
      
      Exiting from IT does not hang up the modem.
      
      Do not QUIT IT while in the ALTERNATE keypad mode, i.e. with VT100
      or VT52 (in the bottom line) blinking.  If you do, the host will be
      left thinking that the terminal is in the ALTERNATE keypad mode.
      But when you next run IT, emulation will begin in the NORMAL keypad
      mode.  So before commanding QUIT, make sure to terminate the host
      operation that put IT into the ALTERNATE keypad mode.
      
      
      THE END
      
      

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0679

     Volume in drive A has no label
     Directory of A:\

    READ     ME        539   2-10-90   5:56p
    IT       DOC     47748   2-10-90  12:26p
    IT       SET      5879   2-09-90   3:23p
    IT       DIR       502   7-07-89   6:23p
    IT       EXE     48446   1-25-90  10:30p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       540   5-05-90   2:30p
    FILE0679 TXT      2893   5-29-90   3:51a
            8 file(s)     106585 bytes
                           51200 bytes free
