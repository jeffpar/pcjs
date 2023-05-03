---
layout: page
title: "PC-SIG Diskette Library (Disk #1834)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1834/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1834"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "AT-SLOW/LOADKEY/HANDY DANDY UTILITIES"

    Sometimes your speedy AT has a little too much speed for a game or older
    application you may want to run.  AT-SLOW is your solution.  This easy-
    to-use program will pull back the reins on your AT or 386 without any
    hardware modification -- even if the original manufacturer only intended
    the machine to run at top speeds.
    
    AT-SLOW uses the high resolution timer found in a PC-AT or close clone
    to slow down games and other programs which run too fast on PC-ATs.
    Your machine can run at almost any slower speed thanks to a variable
    startup command.  Play around with different speeds until you find a
    speed that keeps both you and your computer happy.  AT-SLOW can also be
    turned off or set to a different speed without rebooting your machine.
    
    LOADKEY is a utility for batch files that allows you to customize and
    accelerate the execution of an application program by preloading a
    string of key strokes to the BIOS keyboard buffer.
    
    LOADKEY operates in two modes -- direct entry and hot key.  In direct
    entry, you can invoke LOADKEY in a batch file by supplying a string of
    key strokes as a parameter to the call.  When the batch file is run,
    LOADKEY executes and preloads the keyboard buffer.  LOADKEY then
    terminates and the batch file now loads the application program.  When
    input is requested by the program, it is immediately obtained from the
    keyboard buffer.  In the hot key mode, LOADKEY allows you to assign an
    ASCII code to the entire string.  This code can be used later to replace
    the batch parameter(%n) in the batch file.
    
    LOADKEY limits the strings to 15 key strokes and only accommodates 80
    individual strings.
    
    HANDY DANDY UTILITIES offers you a no-fuss alternative to learning
    complicated utility programs or frustrating DOS commands. This easy to
    learn set of file management utilities offers an uncomplicated approach
    to commonly used batch file and DOS commands.
    
    ~ MOV -- Moves files between subdirectories. A command DOS has long
    been lacking.
    
    ~ CSR -- Hides and unhides the cursor. Useful in batch file creation.
    
    ~ SEEMORE -- Displays text files to screen a page at a time.
    
    ~ DIRTREE -- Displays a diagram of your directory structure. Move
    cursor through diagram to select a directory to change to. Press
    return and you are automatically placed in that directory.
    
    ~ FF -- Causes printer to formfeed. Use in batch files or just to save
    trips to the printer.
    
    ~ BOOT -- Warm boots your computer. Convenient in batch file creation.
    
    ~ CHOOSE -- Allows multiple user choices in batch files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AT-SLOW.DOC

{% raw %}
```




                                AT-SLOW
                    PC-AT High Performance Slowdown
                             By David Keil

        AT-SLOW is a utility which when loaded will use the high 
   resolution timer found in a PC-AT or close clone to slow down 
   games and other programs which run to fast on PC-AT's.

        This program is hardware dependent and requires a PC-AT or 
   close clone and a 80286/80386 processor to operate. AT-SLOW uses
   the AT's real time clock found at interrupt 70h to slow down the
   AT's speed.
        Using the real time clock's interrupt has two advantages 
   over the usual use of the normal PC's timer.

     1 - The high resolution timer can occur up to 8096 times a second
         (as opposed to 18.2 with the normal timer). This provides a much 
         smoother slow down than with the normal timer. This also 
         provides a higher degree of performance reduction.
     2 - Since this slow down uses interrupt 70h and only AT's use 
         this interrupt, programs don't know to re-vector it. So
         programs that don't work with mormal slow down programs 
         will work with AT-SLOW.






   Using AT-SLOW:

        The command for using AT-SLOW is

            at-slow [/t[+|-|???]][/f[?]][/h][/?]

        Where:
            /t = ??? is amount to slowdown PC-AT. Valid range is 0-999.
            /h = Show this help screen.
            /f = Fix value for high speed machines. Valid range is 1-9.
                 Use when AT-SLOW does not seem to work or is disabled by
                 higher speed machines. Default value is 1.
            /? = Show current program settings.
            +  = Enable option.
            -  = Disable option.

        The range of values for delay is 1-999. Values of 20-60
   on 286 machines is usually adequate. As the delay value is increased
   there will come a point when the computer actually begins to speed
   back up. This is because there is to much delay for the computer to
   service all the interrupts being generated so the total delay is
   actually decreased. When this happens reduce the delay value slowly
   until there is a sudden decrease in performance.
        Once installed AT-SLOW can be disabled by using the /t- option 
   and can be re-enabled using the /t+ option or by changing the delay 
   value. The /t- option will disable the timer interrupt and return 
   the computer to normal speed (entering /t0 will eliminate the delay
   but will not disable the interrupt). AT-SLOW should not be removed
   or disabled using memory management programs as the interrupt may
   remain active and this will cause about a 20 to 30 percent reduction in
   performance. The program uses very little memory however and when
   disabled does not effect performance so leaving it in memory should
   not be of great concern.

        A couple of major enhancements have been made since the last
   version of AT-SLOW.

   1) The AT's real time clock has been speeded up to give a smooth delay
      right down to the same speed as a 4.77mhz PC. Even on 386 machines
      that require higher delay values.

   2) Before if too large of a delay value was entered the computer would
      slowdown to a point of being useless or would lockup completely.
      Now if too large a delay value is entered the computer will actually
      speed back up.

        This program is provided AS IS without any warranty,  expressed
   or implied,  including  but  not  limited  to fitness for a particular
   purpose.






   If you find AT-SLOW useful:

        This program is copyrighted and may only be distributed
   in unmodified form and with this DOC file included.

        A lot of time and effort went into the finding of information
   and writing of AT-SLOW. So if you find this program useful (and I'm
   sure you will) and would like to support the development of more PC-AT 
   (and other high performance computers) related software.
   Please fill out the registration form on the following page and send it
   along with the registration fee to:

   David Keil / Better Software Co.
   10 W. Wilburn Ave.
   Greenville, S.C. 29611

   Important announcement:

        The registered version of AT-SLOW has had new options added.
   These options include:

   1) Option to enable hot-key changing and disabling of slowdown value.
      This feature remains active even in programs that normaly disable
      hot-key routines.

   2) Option to remove delay program from memory.

   3) Eliminates the push any key so program can be used more easily in
      batch files.

    So don't wait register today so you can make full use of the power
    of your AT machine.



              Please support quality shareware by registering it.
                        We thank you for your support.

                    AT-SLOW PAID Registration form

Remit To:           David Keil / Better Software Co.
                    10 W. Wilburn Ave.
                    Greenville, SC 29611
                    Voice   (803) 295-4971


____   AT-SLOW Registration                                           $10.00

____   Update on 5.25 inch disk plus shipping & handling              $ 2.50

____   Update on 3.25 inch disk plus shipping & handling              $ 5.00

                                             Total amount enclosed  $_______

Payment by check or money order (U.S. bank or branch)

         ..... Following needed for shipment of upgrade.

Name     ___________________________________________________________________

Address  ___________________________________________________________________

         ___________________________________________________________________

         ___________________________________________________________________

         ___________________________________________________________________
```
{% endraw %}

## AT-SLOW.DOC

{% raw %}
```




                                AT-SLOW
                    PC-AT High Performance Slowdown
                             By David Keil

        AT-SLOW is a utility which when loaded will use the high 
   resolution timer found in a PC-AT or close clone to slow down 
   games and other programs which run to fast on PC-AT's.

        This program is hardware dependent and requires a PC-AT or 
   close clone and a 80286/80386 processor to operate. AT-SLOW uses
   the AT's real time clock found at interrupt 70h to slow down the
   AT's speed.
        Using the real time clock's interrupt has two advantages 
   over the usual use of the normal PC's timer.

     1 - The high resolution timer can occur up to 8096 times a second
         (as opposed to 18.2 with the normal timer). This provides a much 
         smoother slow down than with the normal timer. This also 
         provides a higher degree of performance reduction.
     2 - Since this slow down uses interrupt 70h and only AT's use 
         this interrupt, programs don't know to re-vector it. So
         programs that don't work with mormal slow down programs 
         will work with AT-SLOW.






   Using AT-SLOW:

        The command for using AT-SLOW is

            at-slow [/t[+|-|???]][/f[?]][/h][/?]

        Where:
            /t = ??? is amount to slowdown PC-AT. Valid range is 0-999.
            /h = Show this help screen.
            /f = Fix value for high speed machines. Valid range is 1-9.
                 Use when AT-SLOW does not seem to work or is disabled by
                 higher speed machines. Default value is 1.
            /? = Show current program settings.
            +  = Enable option.
            -  = Disable option.

        The range of values for delay is 1-999. Values of 20-60
   on 286 machines is usually adequate. As the delay value is increased
   there will come a point when the computer actually begins to speed
   back up. This is because there is to much delay for the computer to
   service all the interrupts being generated so the total delay is
   actually decreased. When this happens reduce the delay value slowly
   until there is a sudden decrease in performance.
        Once installed AT-SLOW can be disabled by using the /t- option 
   and can be re-enabled using the /t+ option or by changing the delay 
   value. The /t- option will disable the timer interrupt and return 
   the computer to normal speed (entering /t0 will eliminate the delay
   but will not disable the interrupt). AT-SLOW should not be removed
   or disabled using memory management programs as the interrupt may
   remain active and this will cause about a 20 to 30 percent reduction in
   performance. The program uses very little memory however and when
   disabled does not effect performance so leaving it in memory should
   not be of great concern.

        A couple of major enhancements have been made since the last
   version of AT-SLOW.

   1) The AT's real time clock has been speeded up to give a smooth delay
      right down to the same speed as a 4.77mhz PC. Even on 386 machines
      that require higher delay values.

   2) Before if too large of a delay value was entered the computer would
      slowdown to a point of being useless or would lockup completely.
      Now if too large a delay value is entered the computer will actually
      speed back up.

        This program is provided AS IS without any warranty,  expressed
   or implied,  including  but  not  limited  to fitness for a particular
   purpose.






   If you find AT-SLOW useful:

        This program is copyrighted and may only be distributed
   in unmodified form and with this DOC file included.

        A lot of time and effort went into the finding of information
   and writing of AT-SLOW. So if you find this program useful (and I'm
   sure you will) and would like to support the development of more PC-AT 
   (and other high performance computers) related software.
   Please fill out the registration form on the following page and send it
   along with the registration fee to:

   David Keil / Better Software Co.
   10 W. Wilburn Ave.
   Greenville, S.C. 29611

   Important announcement:

        The registered version of AT-SLOW has had new options added.
   These options include:

   1) Option to enable hot-key changing and disabling of slowdown value.
      This feature remains active even in programs that normaly disable
      hot-key routines.

   2) Option to remove delay program from memory.

   3) Eliminates the push any key so program can be used more easily in
      batch files.

    So don't wait register today so you can make full use of the power
    of your AT machine.



              Please support quality shareware by registering it.
                        We thank you for your support.

                    AT-SLOW PAID Registration form

Remit To:           David Keil / Better Software Co.
                    10 W. Wilburn Ave.
                    Greenville, SC 29611
                    Voice   (803) 295-4971


____   AT-SLOW Registration                                           $10.00

____   Update on 5.25 inch disk plus shipping & handling              $ 2.50

____   Update on 3.25 inch disk plus shipping & handling              $ 5.00

                                             Total amount enclosed  $_______

Payment by check or money order (U.S. bank or branch)

         ..... Following needed for shipment of upgrade.

Name     ___________________________________________________________________

Address  ___________________________________________________________________

         ___________________________________________________________________

         ___________________________________________________________________

         ___________________________________________________________________
```
{% endraw %}

## AT-SLOW.DOC

{% raw %}
```




                                AT-SLOW
                    PC-AT High Performance Slowdown
                             By David Keil

        AT-SLOW is a utility which when loaded will use the high 
   resolution timer found in a PC-AT or close clone to slow down 
   games and other programs which run to fast on PC-AT's.

        This program is hardware dependent and requires a PC-AT or 
   close clone and a 80286/80386 processor to operate. AT-SLOW uses
   the AT's real time clock found at interrupt 70h to slow down the
   AT's speed.
        Using the real time clock's interrupt has two advantages 
   over the usual use of the normal PC's timer.

     1 - The high resolution timer can occur up to 8096 times a second
         (as opposed to 18.2 with the normal timer). This provides a much 
         smoother slow down than with the normal timer. This also 
         provides a higher degree of performance reduction.
     2 - Since this slow down uses interrupt 70h and only AT's use 
         this interrupt, programs don't know to re-vector it. So
         programs that don't work with mormal slow down programs 
         will work with AT-SLOW.






   Using AT-SLOW:

        The command for using AT-SLOW is

            at-slow [/t[+|-|???]][/f[?]][/h][/?]

        Where:
            /t = ??? is amount to slowdown PC-AT. Valid range is 0-999.
            /h = Show this help screen.
            /f = Fix value for high speed machines. Valid range is 1-9.
                 Use when AT-SLOW does not seem to work or is disabled by
                 higher speed machines. Default value is 1.
            /? = Show current program settings.
            +  = Enable option.
            -  = Disable option.

        The range of values for delay is 1-999. Values of 20-60
   on 286 machines is usually adequate. As the delay value is increased
   there will come a point when the computer actually begins to speed
   back up. This is because there is to much delay for the computer to
   service all the interrupts being generated so the total delay is
   actually decreased. When this happens reduce the delay value slowly
   until there is a sudden decrease in performance.
        Once installed AT-SLOW can be disabled by using the /t- option 
   and can be re-enabled using the /t+ option or by changing the delay 
   value. The /t- option will disable the timer interrupt and return 
   the computer to normal speed (entering /t0 will eliminate the delay
   but will not disable the interrupt). AT-SLOW should not be removed
   or disabled using memory management programs as the interrupt may
   remain active and this will cause about a 20 to 30 percent reduction in
   performance. The program uses very little memory however and when
   disabled does not effect performance so leaving it in memory should
   not be of great concern.

        A couple of major enhancements have been made since the last
   version of AT-SLOW.

   1) The AT's real time clock has been speeded up to give a smooth delay
      right down to the same speed as a 4.77mhz PC. Even on 386 machines
      that require higher delay values.

   2) Before if too large of a delay value was entered the computer would
      slowdown to a point of being useless or would lockup completely.
      Now if too large a delay value is entered the computer will actually
      speed back up.

        This program is provided AS IS without any warranty,  expressed
   or implied,  including  but  not  limited  to fitness for a particular
   purpose.






   If you find AT-SLOW useful:

        This program is copyrighted and may only be distributed
   in unmodified form and with this DOC file included.

        A lot of time and effort went into the finding of information
   and writing of AT-SLOW. So if you find this program useful (and I'm
   sure you will) and would like to support the development of more PC-AT 
   (and other high performance computers) related software.
   Please fill out the registration form on the following page and send it
   along with the registration fee to:

   David Keil / Better Software Co.
   10 W. Wilburn Ave.
   Greenville, S.C. 29611

   Important announcement:

        The registered version of AT-SLOW has had new options added.
   These options include:

   1) Option to enable hot-key changing and disabling of slowdown value.
      This feature remains active even in programs that normaly disable
      hot-key routines.

   2) Option to remove delay program from memory.

   3) Eliminates the push any key so program can be used more easily in
      batch files.

    So don't wait register today so you can make full use of the power
    of your AT machine.



              Please support quality shareware by registering it.
                        We thank you for your support.

                    AT-SLOW PAID Registration form

Remit To:           David Keil / Better Software Co.
                    10 W. Wilburn Ave.
                    Greenville, SC 29611
                    Voice   (803) 295-4971


____   AT-SLOW Registration                                           $10.00

____   Update on 5.25 inch disk plus shipping & handling              $ 2.50

____   Update on 3.25 inch disk plus shipping & handling              $ 5.00

                                             Total amount enclosed  $_______

Payment by check or money order (U.S. bank or branch)

         ..... Following needed for shipment of upgrade.

Name     ___________________________________________________________________

Address  ___________________________________________________________________

         ___________________________________________________________________

         ___________________________________________________________________

         ___________________________________________________________________
```
{% endraw %}

## FILE1834.TXT

{% raw %}
```
Disk No: 1834                                                           
Disk Title: At-Slow/LoadKey/Handy Dandy Utilities                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: AT-Slow                                                  
Author Version: 1.0                                                     
Author Registration: $10.00                                             
Special Requirements: 80286 or 80386 processor.                         
                                                                        
Sometimes your speedy AT has a little too much speed for a game or older
application you may want to run.  AT-SLOW is your solution.  This easy- 
to-use program will pull back the reins on your AT or 386 without any   
hardware modification--even if the original manufacturer only intended  
the machine to run at top speeds.                                       
                                                                        
AT-SLOW uses the high resolution timer found in a PC-AT or close clone  
to slow down games and other programs which run too fast on PC-AT's.    
Your machine can run at almost any slower speed thanks to a variable    
startup command.  Play around with different speeds until you find a    
speed that keeps both you and your computer happy.  AT-SLOW can also be 
turned off or set to a different speed without rebooting your machine.  
Program Title: Loadkey                                                  
Author Version: 1.0                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
LOADKEY is a utility for batch files that allows you to customize and   
accelerate the execution of an application program by preloading a      
string of key strokes to the BIOS keyboard buffer.                      
                                                                        
LOADKEY operates in two modes - direct entry and hot key.               
In direct entry, you can invoke LOADKEY in a batch file                 
by supplying a string of key strokes as a parameter to                  
the call. When the batch file is run, LOADKEY executes and              
preloads the keyboard buffer. LOADKEY then terminates and               
the batch file now loads the application program.  When                 
input is requested by the program, it is immediately obtained           
from the keyboard buffer.                                               
In the hot key mode, LOADKEY allows you to assign an ASCII              
code to the entire string. This code can later be used                  
to replace the batch parameter(%n) in the batch file.                   
                                                                        
LOADKEY limits the strings to 15 key strokes and                        
only accomodates 80 individual strings.                                 
Program Title: Handy Dandy Utilities                                    
Author Version: 1.0                                                     
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
HANDY DANDY UTILITIES offers you a no-fuss alternative to learning      
complicated utility programs or frustrating DOS commands.  This easy to 
learn set of file management utilities offers an uncomplicated approach 
to commonly used batch file and DOS commands.                           
                                                                        
HANDY DANDY UTILITIES includes:                                         
                                                                        
MOV       Moves files between subdirectories.  A command DOS has long   
          been lacking.                                                 
                                                                        
CSR       Hides and unhides the cursor.  Useful in batch file creation. 
                                                                        
SEEMORE   Displays text files to screen a page at a time.               
                                                                        
DIRTREE   Displays a diagram of your directory structure.  Move cursor  
          through diagram to select a directory to change to.  Press    
          return and you are automatically placed in that directory.    
                                                                        
FF        Causes printer to formfeed.  Use in batch files or just to    
          save trips to the printer.                                    
                                                                        
BOOT      Warm boots your computer.  Convenient in batch file creation. 
                                                                        
CHOOSE    Allows multiple user choices in batch files.                  
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║     <<<<  Disk #1834  AT-SLOW/LOADKEY/HANDY DANDY UTILITIES  >>>>       ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start AT-SLOW, type:  AT-SLOW (press enter)                          ║
║ To start LOADKEY, type:  LOADKEY1 (press enter)                         ║
║                                                                         ║
║ To print documentation for AT-SLOW, type:  COPY AT-SLOW.DOC PRN         ║
║ To print documentation for LOADKEY, type:  COPY LOADKEY.DOC PRN         ║
║ To print documentation for HANDY DANDY UTILITIES, type:                 ║
║                                            COPY ALLABOUT.IT PRN         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LOADKEY.DOC

{% raw %}
```

                          LOADKEY DOCUMENTATION
                            by Dick Wingerson
                               Version 1.0

LOADKEY is a utility for use in batch files by which to customize and
automate heavy duty software through a preloaded file of the initial,
routine keystrokes needed after the main program is loaded.

LOADKEY is for use with PC, XT, AT and compatables with 80 character
displays.

LOADKEY functions by preloading the BIOS keyboard buffer with up to 15
keystrokes. LOADKEY then terminates and the BATCH file loads the 
application program. At the point where this main program would request
input, the requested information is already in the keyboard buffer; so
it executes immediately. <Enter> and other control keystrokes can be
included in the buffer string as needed.

The LOADKEY disk may be shipped with the file designated LOADKEY1.COM.
This is to avoid accidental overwriting if the disk is copyied to an
archive disk and a later version is also copied to the same disk.
The working copy of the LOADKEY1.COM file must be renamed LOADKEY.COM

LOADKEY has two operating modes: direct entry and hot key. 

In the direct entry mode, a BATCH file might be written

                     YOURBAT.BAT
                        . . .
                        . . .
                     LOADKEY [string]         
                     YOURPRGM
                        . . .
                        . . .
The string should NOT be enclosed in brackets.  If LOADKEY is not in the
current directory, then the complete path should be used.

[string] may contain any keyboard ASCII characters with codes 1 through 255.
All the usual batch file features are available, and replaceable parameters
( %n ) may be useful. If the string is omitted, then LOADKEY merely empties
the keyboard buffer. <Enter> and <Space Bar> are needed for input and are
not available to place in the string. For string input, the tilde key (~)
has been reassigned as <Enter> and the accent key (`) is <Space>. If
the reassigned keys are needed in the string, then use <Alt-126> for
tilde and <Alt-96> for accent (grave). Note that in this documentation,
< > is used to show a single keyboard entry. <Alt-126> means to hold down
the Alt key, press the keys 1,2,and 6 in sequence, and then release the
Alt key. This produces a single ASCII entry and allows the use of codes 
that are not normally assigned to keyboard keys.

The direct input mode can be demonstrated by typing at the DOS prompt:

                 LOADKEY LOADKEY <Alt-255> ~ <Enter>

The first loadkey and the final enter load the rest of the string into
the keyboard buffer. COMMAND.COM (which hangs out a lot waiting for input)
reads the buffer just as if LOADKEY <Alt-255> <Enter> had been entered from
the keyboard. This command is then executed; LOADKEY is loaded and run a
second time; and the setup portion of the LOADKEY program is displayed. 
 
In the hot key mode, the [string] is replaced by <Alt-255> <ASCII char.>,
and the ASCII char. can be replaced with the batch parameter ( %n ).
The ASCII char. is coded to a stored string of up to 15 keystrokes that
will go into the keyboard buffer. Thus, if the BATCH entry were

                          . . .                          
                       if not "%1"=="" LOADKEY <Alt-255> %1
                       YOURPRGM
                          . . .

then the keyboard entry

                       YOURBAT x

would call up YOURPRGM and feed it the code string identified as x. With
several strings prestored under different codes, it is easy to have just
the configuration wanted with a single additional keystroke. If the 
extra parameter is omitted, LOADKEY will unobtrusively clear the keyboard
buffer, and YOURPRGM will be called in its usual way.

The hot key code string is created by the keyboard entry

                       LOADKEY <Alt-255> <Enter>

Strings can then be entered and edited using the Tab keys. The string
file can be saved to disk with <Ctrl-Backspace>, or the editing can be
aborted without saving with <Ctrl-Break>. During editing the strings are
displayed as words with the first byte being the keyboard scan code in
hex notation and the second byte being the ASCII code, again in hex.
Keystrokes are entered at the current cursor position. The Tab keys
move the cursor, and a new keystroke will overwrite an existing one. 

The hot key string can contain keystrokes from the extended character
set and thus includes function keys and control keys not available in
the direct entry mode. <Enter> terminates a string at the current
cursor position and can be used to erase unwanted strings or portions.
thereof. <Space> advances to the next string without modification.

The procedure for setting up a hot key string is as follows:

        1) Call up your application program in the usual way.

        2) Write down on paper the exact sequence of keystrokes 
           you use to get to the place you are ready to work.     

        3) Exit to DOS and call LOADKEY <Alt-255> <Enter>

        4) Chose the highest number hot key you want to use
           in all your applications. (Change this at any time.)
 
        5) Select your desired hot key by repeating <Space>

        6) Carefully type in the string you have written down.

        7) Exit to DOS with <Ctrl-Backspace>.

The hot key string is now ready for use in a Batch file. If you already
run your application from a Batch file (perhaps as part of a menu system),
then just insert the line 

                       LOADKEY <Alt-255> <hot key>
or
                     if not "%1"=="" LOADKEY <Alt-255> %1   

immediately before your application filename.

If you do not get the results expected, go through the instructions 
again. If nothing at all different from your usual operation occurs,
then see limitation 7 below.

LOADKEY makes no extra demands on RAM since it is loaded, active, and 
gone before the larger main program is loaded.

Alt-255 is used as the primary control character in LOADKEY in order 
to minimize potential conflict with strings for applications.

Although LOADKEY, version 1.0, can be quite useful; it does have some 
significant limitations:
     
        1) Strings can be only 15 keystrokes long.

        2) Only 80 individual strings are accommodated.

        3) The file must be named LOADKEY.

        4) LOADKEY must be in the current directory at the time hot key
           strings are being set up.

        5) Memory is wasted on disk by unused string spaces.

        6) Editing capability is limited.

        7) LOADKEY will not work with programs that start out by 
           clearing the keyboard buffer.

At the time this is being written, some planning and codeing has been
done toward overcoming all of the above limitations except the last. A
much improved version with additional features should be available before
Christmass 1988.

The last of the above limitations can only be overcome by modification
of the application program. When LOADKEY is used, it does the buffer 
clearing so this feature is no longer needed in the application program.
The application program can be simply modified by NOPing the unneeded
code. The problem lies in finding where that code is. This information
moy be obtainable from the program producer. If you get this information
but don't know what to do with it, send it to me with a copy of your 
program disk (5 1/4 inch) and I will fix it. If you can't get the needed
information, send me the disk, and I may be able to fix it anyhow. If it
is not obvious how your software is used, send me enough documantation
that I can write a Batch file to be sure LOADKEY works properly. Please
consider a little extra donation for my efforts. If I am not successful
your check will be returned with your disk. 
 
LOADKEY is being distributed as Shareware. If you find it useful, you can
keep your karma clean by sending $15 (or what you think it's worth) to

                       Dick Wingerson
                       Box 168
                       Crested Butte, CO 81224 

I will show my appreciation for your honesty and generosity by registering
your use and sending you the advanced version.
                         
I will appreciate any comments on the LOADKEY program and any thoughts
on operational nuisances that bug you in your regular computer use. If
I see a pattern of nuisances, maybe I can come up with another utility
to address them.          -DW

                                  ###
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1834

     Volume in drive A has no label
     Directory of A:\

    AT-SLOW  COM      3467   3-09-89   9:56p
    AT-SLOW  DOC      6044   8-05-89   1:05p
    AT-SLOW  ARC      4924   8-05-89   1:17p
    AT-SLOW  ZIP      5092   8-05-89   1:18p
    LOADKEY1 COM      4352  10-05-88  12:44p
    LOADKEY  DOC      8707  10-05-88  12:21p
    FILELIST           841  10-11-89   3:03p
    ALLABOUT IT       9791  10-13-89   8:42a
    QUICK    DOC      1447  10-11-89   8:41a
    README   BAT        73  10-02-89   8:13a
    MENU     BAT      2302  10-11-89   1:20p
    BOOT     COM         2  10-02-89   1:25p
    CHOOSE   COM      8548  10-02-89   6:10p
    CSR      COM      2432   9-18-89   4:53p
    DIRTREE  EXE     19460  10-13-89   8:33a
    FF       COM         8  10-02-89  11:04a
    MOV      COM      7514   9-29-89   2:50p
    SEEMORE  COM     10738  10-01-89   9:47p
    FILE1834 TXT      5847   1-22-90   1:08p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       848   1-22-90   1:19p
           21 file(s)     102475 bytes
                           52224 bytes free
