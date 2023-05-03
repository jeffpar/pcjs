---
layout: page
title: "PC-SIG Diskette Library (Disk #1775)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1775/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1775"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "XPORT"

    This utility uses the serial communication adapters (serial ports) in
    your PCs to transfer files from one machine to another.  Serial
    transfer is much easier and faster than copying files from machine to
    disk to machine again.  XPORT will allow you to transfer files
    between: a 5.25" disk drive on one machine and a 3.5" drive on
    another; or directly from one hard drive to another (regardless of file
    size); or between two drives that can't seem to read from each other's
    disks (common between 360K and 1.2MB drives).
    
    Many full-blown communication packages will do this job.  But if you
    just want a simple, inexpensive method of getting the files from one
    system into another with a minimum of fuss and as conveniently as
    possible, use XPORT.
    
    Not sure about serial port parameters and how to set them?  Forget it.
    The transporter sets them up the way it needs them.  More than one port
    in your machine, but you're not sure which is COM1, COM2, COM3, and
    COM4?  Don't worry.  The transporter automatically detects which port
    you've got the cable plugged into.
    
    XPORT also includes XCLONE.  Because the XPORT program must be on both
    computers to operate, you may need a way to get the XPORT program file
    installed on another computer with incompatible disk drives. XCLONE is
    a nifty little utility that copies XPORT to the other computer without
    the use of the disk drives.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1775.TXT

{% raw %}
```
Disk No: 1775                                                           
Disk Title: XPort & XClone                                              
PC-SIG Version: S1                                                      
                                                                        
Program Title: XPort                                                    
Author Version: 1.3B                                                    
Author Registration: $24.95                                             
Special Requirements: Serial ports on both machines.                    
                                                                        
This utility uses the serial communication adapters (also known as      
"serial ports") in your PCs to transfer files from one machine to       
another.  Serial transfer is much easier and faster than copying files  
from machine to disk to machine again.  XPORT will allow you to transfer
files between a 5 1/4" disk drive on one machine, and a 3 1/2" drive on 
another; or directly from one hard drive to another (regardless of file 
size); or between two drives that can't seem to read from each other's  
disks (common between 360k and 1.2 meg drives).                         
                                                                        
Many full blown communication packages will to this job.  But if you    
just want a simple, inexpensive method of getting the files from one    
system into another with a minimum of fuss and as conveniently as       
possible, use XPORT.                                                    
                                                                        
Not sure about serial port parameters and how to set them?  Forget it,  
the Transporter sets them up the way it needs them.  You've got more    
than one port in your machine, but you're not sure which is "COM1",     
"COM2", "COM3" and "COM4"?  Forget it, the Transporter automatically    
detects which port you've got the cable plugged into.                   
Program Title: XClone                                                   
Author Version: 1.3B                                                    
Author Registration: $24.95                                             
Special Requirements: Serial ports on both machines.                    
                                                                        
This utility uses the serial communication adapters (also known as      
"serial ports") in your PCs to transfer files from one machine to       
another.  Serial transfer is much easier and faster than copying files  
from machine to disk to machine again.  XPORT will allow you to transfer
files between a 5 1/4" disk drive on one machine, and a 3 1/2" drive on 
another; or directly from one hard drive to another (regardless of file 
size); or between two drives that can't seem to read from each other's  
disks (common between 360k and 1.2 meg drives).                         
                                                                        
Many full blown communication packages will to this job.  But if you    
just want a simple, inexpensive method of getting the files from one    
system into another with a minimum of fuss and as conveniently as       
possible, use XPORT.                                                    
                                                                        
Not sure about serial port parameters and how to set them?  Forget it,  
the Transporter sets them up the way it needs them.  You've got more    
than one port in your machine, but you're not sure which is "COM1",     
"COM2", "COM3" and "COM4"?  Forget it, the Transporter automatically    
detects which port you've got the cable plugged into.                   
                                                                        
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
║               <<<<  Disk #1775  XPORT AND XCLONE  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start XPORT, type:  XPORT (press enter)                              ║
║ To start XCLONE, type:  XCLONE (press enter)                            ║
║                                                                         ║
║ To print XPORT documentation, type:  COPY XPORT.DOC PRN                 ║
║ To print XCLONE documentation, type:  COPY XCLONE.DOC PRN               ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## XCLONE.DOC

{% raw %}
```

                       XCLONE - Copy Utility for XPORT.EXE

                                   Version 1.1

                    Copyright (C) 1989 by Digital Innovations
                              All rights reserved.

            If you would like to use XPORT, the D. I. File Transporter,
       but you don't already have a way to transfer files between two
       systems with different disk sizes, or incompatible disk formats
       (or the program you do have just WON'T WORK), this utility will
       allow you to get XPORT.EXE to the system that doesn't have it.

            All you need on the inaccessible system is your DOS disk,
       with the files MODE.COM and DEBUG.COM.  Just run XCLONE on the
       system that has XPORT.EXE on it, and follow the simple directions.

            Basically, you will be following these steps:

       1)  Connect a null modem cable to both systems.

       2)  Run XCLONE on the source system (be sure XPORT.EXE is in the
           same directory as XCLONE).

       3)  Boot the other system - should be at the DOS prompt.

       4)  Type "MODE COMx:96,N,8,2", followed by ENTER, then type "CTTY
           COMx", followed by ENTER on the other system - its console
           will now be redirected to the specified serial port.
           (The 'x' in COMx is the port number that the cable is
           connected to, COM1 or COM2).

       5)  Hit any key on the source system.  XCLONE will ask you to
           verify the destination drive and directory.  If you approve
           the destination, it will create a copy of XPORT.EXE on the
           other system's disk.

            XCLONE takes control of the target system, runs DEBUG, sends
       a short loader program to it, starts it up and transfers the
       contents of XPORT.EXE into the target system's memory (the
       transfer and verification process takes less than a minute).  It
       then commands DEBUG to write the data to the disk, and names the
       resulting file XPORT.EXE.

            If you are making your own cable, you must include a
       connection between the DTR output on the source system and the DSR
       input on the target; this is required by the DOS CTTY function.
       On 25-pin connectors, DTR is pin 20 and DSR is pin 6.  On 9-pin
       connectors, DTR is pin 4 and DSR is pin 6.  Or, you can just
       connect DTR to DSR on the target system end of the cable - that
       makes CTTY happy, too.

            Helpful tip:  If for some reason you have XPORT on one
       system, and XCLONE on the other, and you need to get XCLONE itself
       to the other system, you can transfer XCLONE disguised as XPORT.
       Just copy XCLONE.COM to XPORT.EXE, run XCLONE, and let it transfer
       its disguised copy.  Once transferred, you can then rename it to
       XCLONE.COM on the other system.

            There is no charge for the use of XCLONE, but if you use
       XPORT, PLEASE register.  If you HAVE registered, thank you.

                                   Ken Logsdon
                               Digital Innovations


```
{% endraw %}

## XPORT.DOC

{% raw %}
```











                       Digital Innovations File Transporter
                              Shareware Version 1.3b

                    Copyright (C) 1989 by Digital Innovations
                               All rights reserved.









                                Table of Contents
                                -----------------


             Introduction . . . . . . . . . . . . . . . . . . . . . 2

             Features . . . . . . . . . . . . . . . . . . . . . . . 3

             Operation  . . . . . . . . . . . . . . . . . . . . . . 5

             Other Functions  . . . . . . . . . . . . . . . . . . . 7

             Command Line Options . . . . . . . . . . . . . . . . . 8

             Technical Points . . . . . . . . . . . . . . . . . . . 9

             Limited Warranty . . . . . . . . . . . . . . . . . . . 11

             License  . . . . . . . . . . . . . . . . . . . . . . . 12

             Corporate and Quantity Purchases . . . . . . . . . . . 13


















                                       1




       INTRODUCTION
       ------------

            This is a reliable, easy to use shareware file transfer
       utility that uses the serial communication adaptors (also known as
       "serial ports") in your PCs.  Use it when you need to get files
       from one system to another, under circumstances such as:

       1) The two systems have dissimilar disk drives (5.25" vs.  3.5",
          for example) and you can't or don't want to buy and install an
          additional drive in one of them.

       2) The two systems both have 5.25" drives, but one is a high-
          density "AT" style and the other a low-density "XT" style, and
          you find that one of them won't read disks written on by the
          other.

       3) You have different versions of DOS on the two systems, and have
          the same trouble as 2 above.

       4) You have more files to transfer from the hard disk in one system
          to the hard disk in the other system than will fit on one
          floppy (or the one file is too big), and you hate to have to go
          through a slow backup/restore operation (which will also be
          derailed by the kinds of problems mentioned in 1, 2 and 3).
          Worse yet, you have to manually pick groups of files that will
          fit on one disk using the direct copy method.

       5) The other file transfer utilities you've tried are just too
          expensive, unreliable, cumbersome to use, just plain don't work
          period, require you to change your system configuration files or
          install memory-consuming resident programs or device drivers,
          or all of the above.  (All too common, I'm afraid.)

       6) The commercial or shareware terminal programs are cumbersome,
          requiring a lot of technical set-up by the user.  (Do you really
          care about or want to learn the difference between XMODEM and
          KERMIT protocols, or what "8 bits no parity one stop" means?)

       7) You would just like a simple, inexpensive method of getting the
          files from one system into another with a minimum of fuss and as
          conveniently as possible.



















                                       2




       FEATURES
       --------

            The Digital Innovations File Transporter is the solution to
       all of the above problems, and many others:

       * Worried that a shareware utility isn't going to do the job as
       fast as the commercial ones?  The Transporter runs as fast as they
       do; the speed depends on how fast your system can accept data
       coming to it via the serial port, not the top speed of the serial
       ports themselves (so don't believe the claims of certain companies
       saying they are "the fastest with 115,200 per second").  It also
       depends on how fast your system can access the disks, and whether
       you've loaded the system down with memory-resident utilities (such
       as on-screen clocks, timed hard-disk parkers, timed anti burn-in
       screen blankers, multitasking programs, etc.) that eat up processor
       time in the background.  The Transporter automatically adjusts its
       sending rate to accommodate your machines.

       * Not sure about serial port parameters and how to set them?
       Forget it, the Transporter sets them up the way it needs them.

       * You've got more than one port in your machine, but you're not
       sure which is "COM1", "COM2", "COM3" and "COM4"?  Forget it, the
       Transporter automatically detects which port you've got the cable
       plugged into.  (Just be ABSOLUTELY SURE that you really are
       plugging it into a serial port.  DO NOT accidentally plug a cable
       from an RS232 serial port on one machine into the printer or
       monitor port of another!  Doing so WILL destroy the non-RS232 port!
       If you're not sure, seek competent technical help.)

       * Worried about serial cable wiring, control lines, etc?  Forget
       it, you only need 3 wires.  If both of your machines use 25 pin
       connectors, you would need a simple "null modem" cable with female
       connectors on both ends wired like this:

                           Computer "A"    Computer "B"

                                2---------------3

                   (25-pin)     3---------------2     (25-pin)

                                7---------------7


            If one of the machines has a 9 pin connector, the cable should
       be wired like this:

                           Computer "A"    Computer "B"

                                2---------------2

                   (25-pin)     3---------------3     (9-pin)

                                7---------------5






                                       3




            On the other hand, if they are both 9 pin, then this would be
       the correct cable wiring:

                           Computer "A"    Computer "B"

                                2---------------3

                   (9-pin)      3---------------2     (9-pin)

                                5---------------5


            If there are other wires in the cable, that's OK; the
       Transporter ignores them.  If you don't care to wire your own
       cable, or the cable you have on hand isn't wired correctly or
       doesn't fit, a quick visit to your local Radio Shack or computer
       retailer should provide you with the necessary cabling, gender
       changers, and null modem adaptors that you may need.

       * You've tried other file transfer utilities that requires one of
       the machines to be in a "slave mode" and don't like it?  The
       Transporter is a fully symmetrical design; there is no slave mode
       to worry about.  The same program runs on both machines, and they
       behave identically.

       * You say you don't care for utilities with complicated setup
       requirements, confusing operator screens, that throw a lot of
       technical jargon at you, or leaves you out in left field wondering
       what to do next?  We put a lot of thought into making the
       Transporter easy to use, and think you'll be pleased.































                                       4




       OPERATION
       ---------

             To start up the Transporter, type XPORT on both machines.
       The first screen that will appear is an advisory, letting you know
       that XPORT is waiting for a response from the other system.
       Assuming that you have properly installed a serial cable, and that
       your serial ports are in working order, the first advisory should
       be quickly followed by another that says "Testing serial link".
       The testing process may take several seconds depending on the speed
       of the slowest machine of the pair.

            If the Transporter doesn't establish the link within several
       seconds, you may have a problem with the cable, or the serial
       ports.

            If one machine says "Waiting...", and the other is cycling
       between "Testing..." and "Waiting...", then the one that is stuck
       on "Waiting..." has a problem - it isn't properly receiving
       data from the other system.  Check the cable, and if that seems to
       be OK, switch to a lower speed.  (See Command Line Options, below).
       If that doesn't help, check your port configuration (particularly
       the interrupt line being used by that port, see Technical Points,
       below), or try another port.

             Once the testing process is completed, you are presented with
       the main menu, offering you the choice of transferring files either
       to the remote system or from it.  The "remote system" is the one
       you're not sitting in front of.  If you are going to be sending
       files to the remote system, hit ENTER.  You will then be asked to
       verify the destination path for the files, that is, where on the
       remote system the files will end up.  The Transporter displays the
       current drive and path setting of the remote system, and offers you
       the choice of changing drives via F9, changing directories via F10,
       or acceptance of the current path via ENTER.  Throughout the
       program, F9 is used to change drives, and F10 to change
       directories.

             If you selected "From remote system" at the main menu, you
       will be asked to verify/choose the destination path on the local
       system (the one you are typing on).  Change the drive and/or
       directory to the path you want the files to appear in by following
       the screen prompts.  If the desired subdirectory doesn't exist on
       the destination drive, you may create the subdirectory by pressing
       F5 while in the directory selection mode, and entering the
       subdirectory name.  The directory selection screen will then
       include the newly-created subdirectory, which you may then select
       if you desire to transfer your files there.

            If you changed the destination drive or directory, you will
       again be presented with the destination path verification screen.
       When you have the machine pointing to the right place, then, hit
       ENTER.  You will then be presented with the contents of the current
       directory of the source machine.  Note that whenever you are
       working with the remote machine - during destination selection when
       going TO the remote system, or file selection when coming FROM the
       remote system - the (REMOTE) indicator is provided in the upper
       right hand corner of the screen as a reminder.  Caution: some on-
       screen clocks use this area to display the time and can mask the
       (REMOTE) indicator, leading to confusion.

                                       5




            Select the files that you want to transfer by moving the
       cursor to each file individually and pressing the SPACE bar.  The
       selected file's name will start to blink, and the cursor will
       automatically move down to the next file.  Pressing the SPACE bar
       on a file that has already been selected will cancel the selection.
       If you would like to transfer all of the files in the current
       directory, press F1.  Pressing F2 cancels all selections.  Press F9
       or F10 to change drives or subdirectories as needed.  Only files in
       the current subdirectory can be chosen for transfer; if the drive
       or subdirectory is changed, all selections are cancelled.

            After selecting the files to be transferred, press ENTER.  If
       you selected more than one file, you will be asked "Pause before
       overwriting existing files?".  Press 'Y' if you would like the
       Transporter to pause and warn you about the duplicate file (thereby
       giving you the option of either skipping that file or overwriting
       the existing one), or 'N' if you would like the program to go ahead
       and replace all existing files.  The Transporter will then proceed
       to send the files from the source system to the destination.  If
       there is insufficient space at the destination for the file being
       transferred, the Transporter will notify you and give you the
       option of skipping that file and going on to the next file tagged
       for transfer by pressing ENTER, or aborting the entire transfer
       session by pressing ESC.

            Pressing ESC on either system during transfers aborts the
       transfer procedure and takes you back to the main menu, as does
       pressing ESC at the directory and subdirectory selection screens.

            After the transfer process is completed, both systems display
       the contents of their respective current directories.  You may then
       select more files for transfer, or press ESC to return to the main
       menu.  Pressing ESC, then 'Y' at the main menu will return you to
       DOS.



























                                       6




       OTHER FUNCTIONS
       ---------------

            The following functions are available only on the registered
       version of XPORT.EXE:

       Printing files:

            To print files from one system to the other system's printer,
       simply press F7 at the destination selection screen.  You are given
       the option of choosing between LPT1, LPT2 or LPT3.

            Be sure that the file that you intend to print is a straight
       'ASCII' text file, with no embedded control codes other than
       PRINTER controls.  (Many word processing programs record document
       data using their own format and internal control codes - these
       files cannot be sent to the printer directly.)  Be sure that your
       word processor is set to the type of printer that the file will be
       routed to, and 'print' the document to a temporary file on the
       local disk.  Then, use the Transporter to transfer THAT file to the
       remote printer.  If your word processor doesn't have a "print to
       file" facility, or it doesn't record needed printer control codes
       when it prints to a file, ask your local PC guru or users group to
       provide you with a printer interceptor program that will capture
       printer data to a disk file.

            If you change your mind about routing the file to the printer,
       just press F9 or F10 to change to a drive and/or directory.


       Viewing files:

       Pressing 'V' will display the contents of the highlighted file on
       the screen.  At that point, the valid keys are Page Down, Page Up,
       Home, End and ESC.  Pressing ESC takes you back to the file
       directory display.

            The remaining two "Other" functions, 'E' and 'N', allows you
       change the sorting of the files listing by either name or
       extension.  All of the functions are always enabled regardless of
       whether the "Other" functions are displayed at the bottom of the
       screen; the 'O' option is there simply to serve as a reminder, more
       than anything else.



            By the way, if you would like to hear the machines talking to
       each other, I have included a sound toggle function.  This is
       activated by pressing F8 at the main menu.  I originally installed
       it as a diagnostic aid during development, but thought I would
       leave it in for those of you that may like that feature.










                                       7




       COMMAND LINE OPTIONS
       --------------------

            There are two command line options that you can use when
       starting up XPORT: the /Sx option, to specify a slower Speed, and
       the /Px option, to force XPORT to use a particular Port.

            XPORT defaults to 115.2 Kilobaud when setting the speed of the
       serial port in the absence of the /Sx option.  The number 'x'
       equates to the following speeds:

                                   1 - 115.2 Kb
                                   2 -  57.6 Kb
                                   3 -  38.4 Kb
                                   4 -  28.8 Kb
                                   5 -  19.2 Kb
                                   6 -  9600 Baud
                                   7 -  4800 Baud
                                   8 -  2400 Baud
                                   9 -  1200 Baud

            Please note that operation at the lower speeds, such as 1200
       or 2400 baud, is very slow, comparable to a typical file transfer
       via modem.  If it is desired, however, XPORT can be used as an
       external protocol for your favorite modem-communications program,
       if it provides a way to temporarily exit to DOS.  Also, your
       communications program must not interfere with the port while in
       the background, as you are running another program in DOS.  One
       program that I am familiar with that allows this is Procomm Version
       2.42.  Simply use Procomm's DOS Gateway function, by pressing ALT-
       F4, after establishing your connection with the modem.  Then, run
       XPORT with the appropriate command line Speed option (/S9 if you
       are using a 1200 baud modem, /S8 if it's 2400).  If the party at
       the other end of the connection does the same thing, XPORT will
       establish its link through the modem.

            The "/Px" command line option is used to tell XPORT to use the
       port specified by the number you provide in place of 'x'.  For
       example, /P1 would tell XPORT to use COM1, and ignore any others in
       the system.  The default in the absence of the /Px option is to
       scan each port in turn looking for the link handshake codes to come
       across on one of them from the other system.

            Example DOS command line invocations for XPORT:

       C:\>XPORT             ....Run XPORT with the defaults of 115.2 Kb
                                 speed, and scan all ports.

       C:\>XPORT /S2/P3      ....Force XPORT to use COM3, at 57.6 Kb.

       C:\>XPORT /P1 /S8     ....Force XPORT to use COM1, at 2400 baud.

            The order of the /Sx and /Px options is not important.  If the
       value provided for the /S option is not one of the numbers 1
       through 9, it will be ignored.  If the value provided for the /P
       option is not one of the numbers 1 through 4, it will be ignored.





                                       8




       TECHNICAL POINTS
       ----------------

            You will note that there are no facilities provided for
       deleting files and directories - and that's the way I like it.  If
       you insist on messing up your disk, you'll have to do it with some
       other program.  The Transporter only creates files and directories,
       and there is just one instance where a file can be overwritten -
       when you explicitly tell it to do so in the course of a transfer.
       XPORT uses "high-level" DOS function calls (via INT 21H) using the
       file handle method to perform accesses to the disks - NO "direct",
       "BIOS" or "low-level" disk access is EVER attempted, even when just
       reading the directories.

            Older versions of the File Transporter looked up the serial
       port addresses in the BIOS data area at locations 40:0 and 40:2 for
       COM1 and COM2.  By popular demand, I have included support for COM3
       and COM4 as well, but now the port addresses are fixed in XPORT -
       it no longer looks them up in the BIOS area.  The port addresses
       assigned to each COM port are what has been in regular use
       throughout the PC industry, to the best of my knowledge as of the
       date of this release; they are as follows:  COM1 = 03F8, COM2 =
       02F8, COM3 = 03E8, COM4 = 02E8.  Also, interrupt line assignments
       are of prime importance when using more than two ports in a PC;
       there are only two interrupt lines available for handling serial
       communications: IRQ3 and IRQ4.  The convention in the PC industry
       thus far has been to use IRQ4 for COM1 AND COM3, while IRQ3 is used
       for COM2 AND COM4.  This is the way XPORT is set up.  Keep in mind
       that the potential for conflict between a COM2 and a COM4 in the
       same system, both using IRQ3 is ever present (and likewise for IRQ4
       and COM1/COM3); generally speaking, if one is in use, the other
       MUST be disabled, or it must be established with certainty that
       there can be no activity occurring on the other port.  In other
       words, if you are using XPORT on COM3, be sure that there is no way
       COM1 can attempt to generate an interrupt, and vice versa.

            Some brands of serial adaptors can be configured to use
       interrupt lines IRQ2 or IRQ5.  This capability may have caused more
       problems that it has solved, since the person installing such
       boards to use those lines must be aware of what IRQ2 and IRQ5 may
       already be used for in the particular machine that the card is
       being installed in.  Generally speaking, IRQ2 is either not used,
       or typically used by a mouse in XT-class machines, while in AT-
       class machines, it is the output from the second (slave) interrupt
       controller chip.  IRQ5, on the other hand, may be unused on AT-
       class machines, or it may be used for a mouse or printer port
       (although rarely).  On XT's, IRQ5 is reserved for the hard disk
       controller.  The Transporter does not and cannot be made to support
       serial port operation with either IRQ2 or IRQ5.

            Contact your local PC guru or users group if you need help in
       verifying the proper assignment of addresses and interrupt lines
       for each serial port.

            When you exit the Transporter, it leaves the serial ports (and
       everything else) in the same state as before it was started (except
       for the screen, of course).  Speaking of the screens, it was found
       that the screen handling routines provided by the BIOS were just
       too slow in some cases to be tolerable; I therefore chose to
       perform direct screen accesses.  This could pose a problem for some

                                       9




       users that may be running under a multitasking environment,
       preventing the use of the Transporter in a 'background' mode of
       operation.  The problem is that the screens will 'bleed through' to
       the foreground.  So, if that happens, don't say you weren't warned.

            Finally, XPORT has been operated, with varying degrees of
       success, under popular multitasking programs and operating systems.
       However, problems may be encountered when running XPORT at top
       speed (115.2 Kb) in such environments, due to the way such programs
       operate.  The cure is to reduce the serial port speed, using the
       /Sx command line option discussed above.

            The problem encountered, typically, has been lock-up of the
       system, either during XPORT startup or exit, resulting in no
       apparent response to keyboard entries, thus requiring a reboot.
       Some multitasking programs require careful consideration being
       given to ANY communication program, typically requiring them to be
       set to a "non-swappable" status and a "foreground-operation-only"
       status, among others.  Refer to your particular program's
       operator's manual, especially any discussion regarding running
       communication programs in general.  If your program requires you to
       specify the amount of memory to be allocated to a particular
       program, it is suggested that you allocate at least 100K to XPORT.

            In any case, since XPORT is designed to be used in a single-
       user non-multitasking system, no guarantee whatsoever is provided
       that it will operate in a manner acceptable by the user or that
       system malfunctions will not occur when used in a multitasking
       environment.  See limited warranty, below.
































                                       10




       LIMITED WARRANTY
       ----------------

            The program XPORT.EXE is warranted to perform in substantial
       accordance with the description outlined in this document, when
       operated on an IBM Personal Computer or close compatible system
       running under DOS Version 2.1 or greater.  No guarantee is provided
       that this program will operate as intended or expected by the user
       under all circumstances, combinations of hardware, or operating
       environments.  No warranty, express or implied, of merchantability
       or fitness for a particular purpose is provided.  This program is
       provided "AS IS" and user assumes all risk as to the quality or
       suitability of this program for whatever purposes contemplated.

       IN NO EVENT WILL DIGITAL INNOVATIONS OR KEN LOGSDON BE LIABLE TO
       YOU FOR ANY DAMAGES, WHETHER INCIDENTAL OR CONSEQUENTIAL, INCLUDING
       ANY LOST SAVINGS, LOST PROFITS, LOST DATA, OR ANY OTHER DAMAGES
       ARISING FROM THE USE OR INABILITY TO USE THIS PROGRAM, EVEN IF
       THE DEALER OR DIGITAL INNOVATIONS HAD BEEN ADVISED OF THE
       POSSIBILITY OF SUCH LIABILITY OR OTHER CLAIMS.

       Digital Innovations offers support and assistance to registered
       users only, and its sole liability shall be limited to a refund of
       the purchase price.

                 BY USING THIS PROGRAM, USER AGREES TO THE ABOVE.

            Every effort has been made to ensure that this program will
       operate reliably when executed on an "IBM-compatible" personal
       computer running under DOS version 2.1 and later.  Your particular
       brand of computer and/or DOS version may not be as well behaved;
       the only way that I can discover that is by way of user reports to
       that effect.  Please report any anomalies in writing to the address
       provided below.  This program has been tested and found to operate
       properly on the following systems:

                                    IBM PC/XT
                                    IBM PC/AT
                                IBM PS/2 Model 60
                        Multitech Plus 700 "XT-compatible"
                       Multitech Accel 900 "AT-compatible"
                                  Toshiba Laptop
                                    NEC Laptop
                                   Sharp Laptop
                                 Zenith Portable
                           Epson Equity "XT-compatible"
                               MMG "AT-compatible"
                               ALR "AT-compatible"
                               Wyse "XT-compatible"
                                  Compaq Deskpro
                            Five-Star "AT-compatible"










                                       11




       LICENSE
       -------

            As with all shareware utilities, this program is being
       distributed under the 'try before you buy' shareware concept; this
       is not free software, nor is it 'public domain'.  It is and shall
       remain the sole copyrighted property of Ken Logsdon and Digital
       Innovations.  You are hereby granted a limited license to evaluate
       the software, make as many copies as you wish, and distribute such
       copies to anyone, as long as no fee is charged for distribution,
       and as long as this document and the program are not modified in
       any way.  You are not authorized to use this program on an ongoing
       basis without registering.

            Shareware Distributors: contact me for written permission to
       distribute this package.  For business users, site licensing terms
       are available, as well as quantity discount arrangements.  Please
       see below, and call or write for further information.

            Many long hours over several months has been spent to develop
       this utility, (which is written entirely in Assembler) and it was
       done for one reason: to help support my family.  I'm not asking for
       sympathy cards, the registration fee will do just fine.  I'm hoping
       that most of you will feel that this program is worth the $24.95
       that I am asking.  If you find yourself using it on a regular
       basis, I would assume that you like it better than the other
       utilities of the same nature.

            In any case, I hope that the reminder/registration form
       presented when XPORT is terminated will serve to motivate you to
       register.  If you do, you will receive the latest version of the
       program (which will include the additional features of being able
       to print files, viewing file contents, and sorting the filename
       listings by either name or extension), minus the registration
       screen at the end.  Please be sure to specify the media (5.25"
       high-density, 5.25" double-density or 3.5" disk) that you would
       like to receive.  If you would like more than one, please add $1.00
       for each additional disk to cover the costs of the additional
       disks, postage and handling.  In all cases, please add $2.50 for
       shipping and handling, plus 5% sales tax if you are a resident of
       Kentucky.




















                                       12




       CORPORATE and QUANTITY PURCHASES
       --------------------------------

            All corporate, business, government or other commercial users
       of XPORT.EXE must be registered.  Quantity discounts are offered at
       the tenth copy.  Corporate or site licensing is also available.

            Purchase orders are accepted in amounts over $100 only.  All
       other orders should be prepaid.  Purchases of over 9 copies may be
       handled as quantity purchases or as corporate licensing agreements.
       Licensing agreements allow duplication and distribution of specific
       numbers of copies within the licensed institution.  Duplication of
       multiple copies is not allowed except through execution of a
       licensing agreement.

                      Quantity discount schedule as follows:

                              1-9 copies: No discount
                                  10-49 copies:  5%
                                  50-99 copies: 10%
                                100-149 copies: 15%
                                150-199 copies: 20%
                                200-249 copies: 25%
                                250-299 copies: 30%
                                 300 and above: call

            Prices and discount rates are subject to change without notice.
       Please call or write for a quotation.



            I would like to thank Dennis Deckmann, Elden DuRand, and Mike
       Weixler for their unflagging support and assistance towards making
       this utility the fine product that it is.  Comments and suggestions
       are always welcome.  Please call or write to the address provided
       below, or leave a message on Deckmann's Exchange BBS, (502) 267-
       7422, in the D. I. Support Conference area.

            Thank you for trying out the Transporter.  It is my sincere
       hope that you will enjoy using it.


                                   Ken Logsdon
                               Digital Innovations
                            4003 Northumberland Drive
                              Louisville, KY  40245
                                  (502) 423-9317














                                       13


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1775

     Volume in drive A has no label
     Directory of A:\

    FILE1775 TXT      4293  12-19-89   3:36p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694  12-20-89  12:39p
    READ     ME       2560   7-31-89  10:49p
    XCLONE   COM      3624   7-25-89  10:16p
    XCLONE   DOC      3200   7-25-89  10:25p
    XPORT    DOC     32768   7-31-89   2:48p
    XPORT    EXE     14393   7-31-89   2:44p
            8 file(s)      61570 bytes
                           96256 bytes free
