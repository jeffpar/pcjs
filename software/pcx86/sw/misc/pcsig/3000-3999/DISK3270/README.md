---
layout: page
title: "PC-SIG Diskette Library (Disk #3270)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3270/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3270"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CDROM.TXT

{% raw %}
```
        T h e  P C - S I G  L i b r a r y  o n  C D - R O M


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This may well be the greatest collection of software ever compiled.

The PC-SIG Library on CD-ROM is our premier collection of the entire
PC-SIG library. It has over 3000 different, and complete applications
for your every need.  Every shareware program we have is on one disc;
over 700 megabytes (unzipped) of software you can have immediate access
to.

Easy to use, all you have to do is insert the disc and type 'GO' at the
DOS prompt.  We've included all the tools you need for fast easy access
to the programs and their descriptions.

Whether you're interested in Accounting or Windows, there's a shareware
program for you on the PC-SIG Library on CD-ROM.

Winner of the Optical Publishing Assn's Best Consumer Product Award.

Shareware for every imaginable need: Accounting Chemistry Educational
Engineering Games Hypertext Networks Programming Spreadsheets Utilities
Word Processing

#             #             #
PC-SIG UPDATES PC-SIG LIBRARY ON CD-ROM

For Immediate Release


PC-SIG LIBRARY ON CD-ROM UPDATED TO INCLUDE A NEW USER INTERFACE AND MORE
THAN 800 MB OF PROGRAMS June 21, 1992, SUNNYVALE, CALIF. - PC-SIG, Inc.
today announced availability of The Eleventh Edition of the PC-SIG Library
on CD-ROM.  The PC-SIG Library on CD-ROM contains over 800 megabytes of
shareware and includes more than 300 new programs, 550 updated programs,
and the addition of 75 megabytes of Windows 3.x shareware.  The
user-interface has been completely re-engineered to take advantage of the
HyperWriter! hypermedia and multimedia authoring system from NTERGAID, Inc.

The implementation of HyperWriter! provides significant performance and
ease of use enhancements.  Programs can access and download much faster
than with previous editions.  Programs have been reorganized and indexed
for better referencing.  Users just c lick with a mouse, or point with the
cursor, on a program name to see a complete description of the program.
Downloading or copying a program is handled automatically by HyperWriter!
Addition of a preview option is especially important for anyone who uses
images, icons, or fonts.  "You can preview the whole library of images to
find the right one," according to Bruce Kent, product development manager.
"This CD finally makes it possi ble to conserve your disk space and paper,
yet still have all the information you need to make an informed decision,"
said Kent.

All new and updated programs have been reviewed and tested by PC-SIG. Every
program goes through extensive virus checking using the most recent version
of VIRUSCAN from McAfee Associates, and other anti-virus software.
According to Kent, "In the ten ye ars we've distributed shareware, we have
never had a confirmed report of a virus on any of our distributed programs
or CD-ROMs."

The PC-SIG Library on CD-ROM, Eleventh Edition has a list price of $179.

Upgrades from previous editions are available for $99.

Users of PC-SIG's Essential Home & Business Collection CD-ROM can upgrade
for $120.

PC-SIG CD-ROMs are distributed worldwide through a network of distributors
and resellers. Based in Sunnyvale, Calif., PC-SIG, Inc. markets and
supports one of the world's largest collections of shareware for IBM PCs
and compatible systems.  PC-SIG also publishes Shareware Magazine, which is
devoted solely to shareware.  The magazine is availa ble by subscription
and on newsstands nationwide.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 640K memory, DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions, and a hard drive. Microsoft compatible
mouse supported and VGA highly recommended.

To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## COMX.DOC

{% raw %}
```







                                                                          1

          COMx
          Version 2.0
          User's Guide

          Copyright   This COMx documentation and the software are
          copyrighted with all rights reserved.  Under the copyright laws,
          neither the documentation nor the software may be copied,
          photocopied, reproduced, translated, or reduced to any electronic
          medium or machine-readable form, in whole or in part, without the
          prior written consent of Biologic, except in the manner described
          in this manual.  The unregistered version of COMx and
          accompanying documentation may be freely copied and distributed.

          Copyright (C) Biologic 1987,1988.

          All rights reserved.  First edition printed 1988.  Printed in the
          United States.

          Software License Notice   Your license agreement with Biologic,
          which is included with the product, specifies the permitted and
          prohibited uses of the product.  Any unauthorized duplication or
          use of COMx in whole or in part, in print, or in any other
          storage and retrieval system is forbidden.

          Licenses and Trademarks   COMx is a registered trademark of
          Biologic.  WordPerfect is a registered trademark of WordPerfect
          Corporation.  123 is a registered trademark of Lotus Corporation. 
          MS-DOS is a registered trademark of Microsoft Corporation.


          Biologic
          7950 Blue Gray Circle
          Manassas, VA 22110-2829
          703-368-2949
































                                                                          2

          Contents

          License Agreement and Disclaimer of Warranty  3
          Introduction  4
          Condensed Instructions  6
          Installation  8
          COMx.sys  9
          COMx.exe  10
          Copying Files  13
          Error Messages  16
          Problem Determination  18
          Notes  20
          Site License  21
          Your Turn  22



















































                                                                          3

          License Agreement and Disclaimer of Warranty

          License agreement
          Disclaimer of warranty


          License agreement   The terms of this license agreement apply to
          you and to any subsequent licensee of this COMx software. 
          Biologic retains the ownership of this copy of COMx software. 
          This copy is licensed to you for use under the following
          conditions.

            You may use the COMx software on any compatible computer,
            provided the COMx software is used on only one computer and by
            one user at a time.

            You may not provide use of the software in a computer service
            business, network, timesharing, multiple CPU or multiple user
            arrangement to users who are not individually licensed by
            Biologic, except that you may designate any employee to use
            such products on a one employee per license basis.

            You may not disassemble or decompile the COMx software.

          Disclaimer of warranty   Biologic excludes any and all implied
          warranties, including warranties of merchantability and fitness
          for a particular purpose.  Biologic does not make any warranty of
          representation, either express or implied, with respect to this
          software program, its quality, performance, merchantability, or
          fitness for a particular purpose.  Biologic shall not have any
          liability for special, incidental, or consequential damages
          arising out of or resulting from the use of this program.

































                                                                          4

          Introduction

          Description
          Overview
          Highlights
          Requirements
          Contents of the COMx disk


          Description   COMx connects any two PCs, including the IBM PS/2
          series, so that files can be easily transferred between them.  

          Overview   COMx creates a simple and functional link between two
          PCs.  It enables a user to read drives on both computers as if
          they were attached to a single computer.  Drives not on the
          user's PC (remote drives) are assigned drive letters beginning
          with the first unused letter.  Files are copied from remote
          drives to drives on the user's PC (local drives) using DOS
          commands.

          The installation of COMx involves connecting the PCs by their
          serial ports, either COM1 or COM2, and setting up the
          communications link with the programs comx.sys and comx.exe.  A
          universal cable consisting of modular telephone wire and 4
          modular connectors is included in the COMx package, allowing any
          combination of 9 pin or 25 pin connectors to be used.  The file,
          comx.sys, is loaded as a device driver when DOS is started.  The
          serial ports are then initialized with the program comx.exe.

          Highlights

            Remote drives can be accessed by DOS commands or other software
            such as word processors or spreadsheet programs.  Users don't
            have to learn new commands.

            Both PCs can be running any program while files are
            transferred.  The remote PC doesn't have to run a slave program
            and remain idle.

            32 ft. modular cable designed to connect any combination of
            PCs, including IBM PS/2.

            Variable transfer speed up to 115,200 baud.

            Uses only 4K of memory.  COMx is written in assembly language
            for maximum speed and compactness.

            5.25" and 3.5" disks.

          Requirements

            IBM Personal Computers (PC, PC/XT, PC/AT, PS/2) (or













                                                                          5

            compatibles).  Both computers must have at least 1 serial port.

            IBM Personal Computer Disk Operating System (DOS) version 3.0
            or greater (or compatible).

          Contents of the COMx disk   The following files are included in
          the root directory of the distribution disk.

               comx.sys
               comx.exe
               comx.hlp

          There may also be a \freeware directory which contains
          unregistered versions of our other software products.



















































                                                                          6

          Condensed Instructions

          The following instructions briefly describe the installation and
          use of COMx.  If you are a knowledgeable computer user, you
          should be able to get COMx working by following these steps. 
          More detailed information can be found in the sections,
          Installation, COMx.sys, COMx.exe, and Copying Files.

          1.   Connect the cable to the PCs.  Each connector has a sticker
               with a "0" or a "1" on it.  You can use any combination of
               the 4 connectors as long as one is labeled "0" and the other
               is labeled "1".

          2.   Add a line to the config.sys file on both PCs instructing
               DOS to load comx.sys as a device driver.  For example,
               [device=comx.sys] (don't type the brackets).

          3.   Reboot both PCs.

          4.   Execute comx.exe on each PC.  By default, comx.exe
               initializes COM1.  If you connected the cable to COM2 enter
               the command, [comx/c2].

          5.   Test the connection by using the DIR command to access a
               drive on the remote PC.  Remote drives are assigned drive
               letters beginning with the first unused letter on the local
               PC.  If your PC has 2 floppy drives only, and the first
               unused drive letter is C, list the directory of drive A on
               the remote PC with the command, [dir c:].

          6.   Copy files with the DOS COPY command.  For example, [copy
               c:file.txt a:] will copy file.txt from drive A on the remote
               PC to drive A on the local PC.1  COMx does not support
               transfer of files from a local PC to a remote PC.
           
          7.   COMx transfers files at 9600 baud unless a higher speed is
               specified on the command line with the /b option.  Once
               you've established that COMx is working, try communicating
               at faster baud rates.  Be sure to set both PCs to the same
               baud rate.  Valid baud rates are 9600, 11520, 12800, 14400,
               19200, 23040, 28800, 38400, 57600, and 115200.  For example,
               to communicate at 28800 baud, type [comx/b28800] (or
               [comx/c2/b28800] if COM2 is used) on both PCs.





                              
          ____________________

               1This example assumes  your PC has  2 floppy drives and  the
          first unused letter is C. 













                                                                          7

          Installation

          Connecting the cable
          Copying program files (floppy drive system)
          Copying program files (hard disk system)


          Connecting the cable   The cable consists of modular telephone
          wire and connectors.  Four connectors- two 9 pin and two 25 pin-
          are included so that all computer models can be connected.  Each
          connector has a sticker with a "0" or a "1" on it.  You can use
          any combination of the 4 connectors as long as one is labeled "0"
          and the other is labeled "1".  To install the cable, attach a
          connector to the serial port of each machine and join them with
          the telephone wire.

          Copying program files (floppy drive system)   To install COMx,
          copy the files comx.sys, comx.exe, and comx.hlp from the
          distribution disk to the disks you use to boot your PCs.  To do
          this,

          1.   Insert the distribution disk in drive A

          2.   Insert your boot (DOS) disk in drive B

          3.   Type [copy a:comx.* b:] (don't type the brackets)

          4.   Repeat steps 2 and 3 with the boot disk for the second PC

          Copying program files (hard disk system)   To install COMx on a
          hard disk, make a directory named \comx and copy the files
          comx.sys, comx.exe, and comx.hlp to it.  Follow these steps.

          1.   Insert the distribution disk in drive A

          2.   Make the directory \comx by typing [md\comx]

          3.   Type [copy a:comx.* c:\comx]2










                              
          ____________________

               2This  command  will copy  files  to  drive C.    Change the
          destination drive letter if your hard disk is not drive C.













                                                                          8

          COMx.sys

          Config.sys


          The file, comx.sys, is installed as a device driver when DOS is
          started and remains resident in memory until your PC is turned
          off or rebooted.  Comx.sys, which occupies about 4K of memory,
          performs all of the communications activity with the remote PC3.

          Since comx.sys is a device driver, all file transfers are
          performed through DOS.  This provides a lot of flexibility. 
          Although you'll normally use COPY or XCOPY to transfer files, any
          program that reads drives through DOS can access the drives of
          the remote PC.  For example, you can retrieve a document stored
          on the remote PC from within WordPerfect or you can make a remote
          drive the default drive and run Lotus 123 even if it's located
          only on the remote PC.4

          Config.sys   When booting up, DOS obtains configuration
          information from the file config.sys.  You must add a line to the
          config.sys file on both PCs that tells DOS to load comx.sys as a
          device driver5.  Put the line after any other lines that install
          drivers.  For example, if comx.sys is in the root directory, add
          the line [device=comx.sys].  If comx.sys is in the directory
          \comx on your hard disk, add the line [device=\comx\comx.sys].

          Reboot both PCs so that DOS reads the modified config.sys files
          and loads comx.sys.










                              
          ____________________

               3The names local and remote depend on which PC you're using.
          The one you're using is the local PC; the one you're communicated
          with is the remote PC.  If you move to the other PC, the local PC
          becomes the remote PC, and vice versa.

               4WordPerfect  is  a  registered   trademark  of  WordPerfect
          Corporation.  123 is a registered trademark of Lotus Corporation.

               5You can use an editor or a word processor that supports DOS
          text files to  modify config.sys.   If you  aren't familiar  with
          config.sys you can read more about it in your DOS manual.













                                                                          9

          COMx.exe

          Format
          Options
          Examples
          Notes


          The program, comx.exe, initializes the serial ports and must be
          run on both PCs before transferring files.  It is not memory
          resident and can be executed an unlimited number of times.  Its
          options allow you to specify the serial port number and baud
          rate, and override the default values for serial adapter address,
          interrupt number, interrupt request line, and timeout.

          Since you'll need to run comx.exe every time you boot your PC,
          you should put it in your autoexec.bat file6.  Use an editor or
          word processor to put the COMx command anywhere in your
          autoexec.bat.  The options you may want to specify with the COMx
          command are described below.  Your DOS manual contains more
          information about autoexec.bat.

          Format   The format of the COMx command is

          [d:][path]COMX [options]

          where

          [d:][path]
            before COMX specifies the drive and path that contains the COMx
            program.

          [options]
            specifies the optional parameters described in the following
            section.










                              
          ____________________

               6Run comx.exe  from the DOS prompt until you've decided what
          options to  use.   You'll avoid  rebooting your  PC unnecessarily
          while experimenting with the baud rate and other options.















                                                                         10

          Options   The following options can appear in the COMx command. 
          You'll probably only need to use the /b (set baud rate) and /c
          (set serial port number) options.  

          /?
            Display help.

          /aaddress
            Set serial adapter address.  address is specified in hex and is
            the base i/o address of the serial adapter.  You don't need to
            use this option if the cable is attached to serial port 1 or 2.

          /bbaud
            Set baud rate.  baud can be 9600, 11520, 12800, 14400, 19200,
            23040, 28800, 38400, 57600, or 115200.  Files are transferred
            in less time at higher baud rates.  If this option is omitted,
            baud is set to 9600.  Both PCs should be set to the same baud
            rate.  For example, to set the baud rate to 28800 type
            [comx/b28800].

            Some PCs aren't fast enough to support all baud rates.  To
            determine the fastest rate your configuration will support,
            start at 9600 and increase it until a file cannot be
            transferred successfully (both PCs must be set to the same baud
            rate).  The section, Copying Files, explains how to use the
            COPY command to transfer files.

          /cnumber
            Set serial port number.  number can be 0 or 1 and identifies
            the serial port.  If this option is omitted, serial port number
            1 (COM1) is assumed.  If the cable is connected to serial port
            number 2, enter the command [comx/c2].

          /ninterrupt
            Sets adapter interrupt number.  This parameter identifies the
            interrupt number for the adapter specified with the /a option. 
            You don't need to use this option if the cable is attached to
            serial port 1 or 2.

          /rline
            Sets adapter interrupt request line.  This parameter identifies
            the interrupt request line for the adapter specified with the
            /a option.  You don't need to use this option if the cable is
            attached to serial port 1 or 2.





















                                                                         11

          /ttime
            Sets the timeout value between 1 and 30 seconds.  COMx will
            wait time number of seconds for a response from the remote PC
            before returning an error.  The default timeout is 10 seconds. 


            If you receive the Abort, Retry, Ignore? message when copying
            files, press Retry (more than once if necessary).  If this
            works, you may want to increase the timeout value.  For
            example, [comx/t15].  If Retry doesn't work you may have a bad
            connection or too high a baud rate.

          Examples

          1.   The following example initializes COMx to communicate
               through serial port 1 (COM1) at 57600 baud.

               comx/b57600

          2.   The following example initializes COMx to communicate
               through serial port 2 (COM2) at 19200 baud.

               comx/b19200/c2

          3.   The following example initializes COMx to communicate
               through serial port 1 at 115200 baud with a timeout value of
               5 seconds.

               comx/b115200/c1/t5

          Notes

            Some programs- BASIC is a good example- may reset the serial
            ports and cause COMx to malfunction.  If you find that a
            program affects COMx, it may have changed the serial port
            configuration.  Executing the COMx command will probably
            correct the problem.  In rare instances, you may have to reboot
            your PC.



























                                                                         12

          Copying Files

          COPY and XCOPY
          Examples


          After comx.sys has been loaded and the serial ports have been
          initialized with comx.exe, DOS thinks you've added drives to your
          system.  Drive letters are assigned to the new drives beginning
          with the first unused drive letter.  For example, if you're using
          a PC (with 2 floppy drives only) linked to an AT, the AT's floppy
          drives and hard disk are accessed with the drive letters C, D,
          and E, respectively.  Similarly, if you're using the AT, drives A
          and B on the PC are accessed with the letters D and E.7  

          COMx does not support the transfer of files from the local PC to
          the remote PC.  This greatly simplifies the comx.sys driver and
          prevents the deletion or overwriting of files by the remote PC. 
          Files can easily be transferred in both directions by using the
          COPY command on both PCs.  

          COPY and XCOPY   The DOS COPY and XCOPY commands provide the best
          way to transfer files between PCs.  Although they perform similar
          functions, XCOPY has advantages when copying files from several
          directories.  With XCOPY, you can copy an entire hard disk with
          one command, and selectively copy groups of files based on date
          or archive bit.  Read more about COPY and XCOPY in your DOS
          manual.  

          Examples   The following examples assume you are using a PC/XT
          attached to another PC/XT.  If this is not your configuration,
          you may have to substitute different drive letters in the
          commands shown below.










                              
          ____________________

               7Some  PCs  may  be  configured  for  more drives  than  are
          physically present.   You  may have  to experiment  with the  DIR
          command, by  typing [dir c:], [dir  d:], and so on,  to determine
          which letters have  been assigned  to remote drives  (be sure  to
          have a disk in each floppy drive on both PCs).  















                                                                         13

          1.   To list the directory of a disk in drive A on the remote PC,
               type

               dir d:

          2.   To list the root directory of drive C on the remote PC, type

               dir f:\

          3.   To copy the file, file.txt, from the root directory of drive
               C on the remote PC to the root of drive C on the local PC,
               type

               copy f:\file.txt c:\

          4.   To copy all files in the root directory of drive C on the
               remote PC to the root of drive C on the local PC, type

               copy f:\*.* c:\

          5.   If you want to copy selected files in the root directory of
               drive C on the remote PC to the root of drive C on the local
               PC, you can instruct XCOPY to display a (Y/N?) prompt before
               copying each file.

               xcopy f:\*.* c:\ /p

          6.   Suppose you have several files in a directory named \123 on
               the remote PC and you need to create that directory on the
               local PC and copy those files to it.  You can do this with
               one command.

               xcopy f:\123\*.* c:\123

          7.   If you need to copy every file on drive C of the remote PC
               to the local PC, you can also do this with one command.8

               xcopy f:\*.* c:\wp /s









                              
          ____________________

               8XCOPY does not copy hidden files or files with 0 bytes.















                                                                         14

          8.   If you have a directory named \wp on the remote PC and
               several subdirectories below this directory and you need to
               copy every file in these directories to the local PC, use
               the command

               xcopy f:\wp\*.* c:\wp /s

          Notes

            The DOS DISKCOPY command is not compatible with COMx.  Use the
            COPY command to copy all files from one floppy to another.

            COMx only supports reading from remote drives.  DOS will
            display the message, Bad command error reading drive x, if a
            program attempts to write to a remote drive.


















































                                                                         15

          Error Messages

          DOS errors
          COMx errors


          DOS errors

          Bad command or file name   DOS could not find an EXE or COM file
          for the command you entered.  If you're trying to run COMx, the
          file comx.exe is not in the current directory or in a directory
          listed in your PATH.  Change to the directory that contains
          comx.exe and enter the COMx command again.

          Bad command error reading drive x   DOS tried to write to a
          remote drive.  COMx only supports reading from remote drives. 
          Press Abort.

          General failure error reading drive x   DOS was not able to read
          the remote drive.  This may occur for many reasons- the wrong
          combination of connectors or improper initialization of the
          serial ports will cause this error.  Press Retry one or more
          times.  If this works, you may want to increase the timeout value
          specified with the COMx command.  The section, Problem
          Determination, explains how to correct this error.

          COMx errors

          Adapter not found   The specified serial adapter was not found. 
          The serial port you specified with the COMx command is not
          installed in your system.  

          Can't find file comx.hlp   The help file, comx.hlp, isn't in the
          current directory or in a directory listed in the PATH.

          Can't find file comx.reg   The file containing registration
          information, comx.reg, isn't in the current directory or in a
          directory listed in the PATH.

          Can't initialize comx.sys   The device driver, comx.sys, hasn't
          been installed.  See the section, COMx.sys.

          Invalid adapter number   An invalid adapter number was specified. 
          Adapter number can be 1 or 2.

          Invalid baud   The baud rate is incorrect.  Valid baud rates are
          9600, 11520, 12800, 14400, 19200, 23040, 28800, 38400, 57600, and
          115200.  See the section, COMx.exe.

          Invalid timeout value   The timeout value is incorrect.  Timeout
          is specified in seconds and must be between 1 and 30.














                                                                         16

          Problem Determination

          COMx has never worked
          COMx works intermittently


          COMx has never worked   COMx is not communicating properly with
          the remote PC if, when accessing a remote drive, DOS always
          displays the message, General failure error reading drive x. 
          This may be due to a variety of factors.  To determine why COMx
          isn't working, reread the sections Installation, COMx.sys,
          COMx.exe, and Copying Files, and follow the steps outlined below.

          1.   Make sure you've initialized the correct serial ports.  If a
               PC has one serial port, don't assume it's configured as
               COM1; if a PC has two serial ports, don't assume they're
               COM1 and COM2.  Verify that the ports initialized with the
               COMx command are connected to the cable.  If possible, test
               the serial ports with a printer or a modem.

          2.   Check the cable.  The connectors should be screwed in place. 
               Make sure the telephone wire is snapped into each connector
               firmly.

          3.   Edit the autoexec.bat file on both PCs so that RAM resident
               software is not loaded when they are booted.  If this helps,
               COMx may not be compatible with the software you removed.

          4.   Initialize the serial port on both PCs to 9600 baud.  IF
               COMx works at this baud rate, you may have been using too
               high a baud rate.  The section, COMx.exe, explains how to
               determine the optimum baud rate for your system.

          COMx works intermittently   If you have successfully copied files
          from a remote drive, the DOS message, General failure error
          reading drive x, is probably an indication of a software problem
          not a hardware problem.  The most likely causes of an
          intermittent error condition are listed below.

          1.   In some situations, DOS may not wait long enough for the
               remote PC to respond to its requests.  You may need to
               increase the timeout value.  Read about the /t option in the
               section, COMx.exe.

          2.   It's possible, although unlikely, that RAM resident software
               may be interfering with the operation of COMx.  Edit the
               autoexec.bat file on both PCs so that RAM resident software
               is not loaded when they are booted.  If this helps, COMx may
               not be compatible with the software you removed.
















                                                                         17

          Notes

            When copying files, the program running on the remote PC may
            not respond to keystrokes for several seconds.  This enables
            COMx to process read requests as quickly as possible.




























































                                                                         18

          Site License

          COMx can be licensed on a per location basis which allows a
          company to use it on a network or use multiple copies of COMx
          without purchasing them individually.  Pricing is dependent on
          the number of copies and is very reasonable.  Please contact
          Biologic for further information.


























































                                                                         19

          Your Turn

          We value you opinions.  Please let us know what you like and
          dislike about the COMx program and documentation.  We're
          dedicated to developing the most innovative and useful software
          available- and selling it at reasonable prices.  Your support
          helps make this possible.

          Please send all comments and suggestions to

          Biologic 
          P.O. Box 1267
          Manassas, VA  22110
          USA

          THANK YOU.











































```
{% endraw %}

## COMX1.DOC

{% raw %}
```

DESCRIPTION

COMx connects any two PCs, including the IBM PS/2 series, so
that files can be easily transfered between them.

REGISTRATION

A package which contains the unregistered version of COMx has
been released as "freeware".  This gives users on opportunity to
thoroughly test COMx before purchasing it and helps us market
our software.  

The unregistered version of COMx is equivalent to the registered
version except that file transfer speed is limited to 9600 baud.  The
registered version can tranfer files up to 115,200 baud.  If you find
the unregistered version of COMx useful, but would like to transfer
files in less time, please consider ordering the registered version.  

Your help in distributing the unregistered version of COMx is
greatly appreciated.  Thank you.

HARDWARE REQUIREMENTS

COMx transfers files through a null modem cable connected to the
serial port of your PCs.  Null modem cables are available at
computer supply stores or can be purchased separately from
Biologic (COMx does hardware handshaking and requires a 5 line
cable--it will not work with a 3 line cable).

ORDERING INFORMATION

COMx (registered version, with          $59
32 ft. universal cable) 

COMx (registered version, without       $49
cable)
    
32 ft. universal cable                  $23

All items are available directly from Biologic, P.O. Box 1267,
Manassas, VA  22110  703-368-2949.  We'll ship your order
to you the same day we receive your it via UPS 2nd day air.  
Please include $4 for shipping ($13 for next day air).

Guarantee:   Complete satisfaction is guaranteed by Biologic's
unconditional money back guarantee.

```
{% endraw %}

## DISKPAC1.DOC

{% raw %}
```

REGISTRATION

A package which contains the unregistered versions of
Diskpack and dRestore has been released as "freeware". 
This gives users on opportunity to thoroughly test Diskpack
before purchasing it and helps us market our software.  

The unregistered versions of Diskpack and dRestore are
equivalent to the registered versions except that dRestore
can only compare the files on your backup disks with the
files on your hard disk- not restore them.  You can use
Diskpack to make regular backups of your hard disk and,
since dRestore compares it with your backup disks, you can
be certain your backup copy is accurate.  If you need to
restore files from your backup disks, please contact us and
we'll get a registered version to you as quickly as you
need it. 

Your help in distributing the unregistered versions of
Diskpack and dRestore is greatly appreciated.  Thank you.


ADVANTAGES OF DISKPACK

*    Diskpack is much faster than the DOS Backup command. 
     On an IBM AT, Diskpack backs up 10 Megabytes of data
     in about 4 minutes.

*    Diskpack compresses files up to 80%.  This means you
     can back up a 20 Megabyte hard disk onto 4 floppies. 
     Diskpack compresses files more efficiently than the
     "other" backup program, and it does it faster.  The
     "other" program has a compression mode that runs
     slower than its non-compression mode and only
     compresses about 25%.  Diskpack compresses files
     without sacrificing speed.

*    Diskpack is more reliable.  It uses DOS to write files
     to your backup disks.  All other fast backup programs
     bypass DOS and take direct control of your machine- a
     practice that is generally considered risky.  That's
     why they don't work with all PCs or non-standard disk
     drives.  You can use Diskpack on all IBM and
     compatible PCs and back up files to any DOS device
     (including tape).


QUICK START

Backing up files:  To back up all of the files on your hard
disk, follow these steps.

1.   You should have some formatted disks ready to use as
     backup disks.

2.   Type  verify off

3.   If Diskpack is on your hard disk, make the directory
     containing the Diskpack program, DISKPACK.EXE, the
     current directory.

4.   If Diskpack is on a floppy disk, put it in drive A and
     make drive A the current drive.

5.   Type   diskpack c:\*.* a:/s/v

Comparing files:  To compare the files on your hard disk
with your backup disks, follow this procedure.

1.   If Diskpack is on your hard disk, make the directory
     containing the dRestore program, DRESTORE.EXE, the
     current directory.

2.   If Diskpack is on a floppy disk, put it in drive A and
     make drive A the current directory.

3.   Type   drestore a: c:\*.*/s/v


ORDERING INFORMATION

The registered version of Diskpack is available directly from
Biologic, P.O. Box 1267, Manassas, VA  22110
703-368-2949.  We'll send Diskpack to you the same day we 
receive your order via UPS 2nd day air (next day air is 
available).


Price:

$49.  Please include $3 for shipping.


Guarantee:

Complete satisfaction is guaranteed by Biologic's
unconditional money back guarantee.

```
{% endraw %}

## DISKPACK.DOC

{% raw %}
```



                                                            1

          Diskpack

          Version 2.0
          User's Guide

          Biologic Company
          7950 Blue Gray Circle
          Manassas, VA 22110-2829
          703-368-2949



                                                            2

          Diskpack

          Copyright and License Agreement  3
          Introduction  5
          Installation  7
          Quick Start  9
          Using Diskpack  11
          Using dRestore  16
          Notes  20
          Site License  21
          Your Turn  22



                                                            3

          Copyright and License Agreement

          Copyright
          License agreement
          Disclaimer of warranty

          Copyright   This Diskpack documentation and the software
          are copyrighted with all rights reserved.  Under the
          copyright laws, neither the documentation nor the software
          may be copied, photocopied, reproduced, translated, or
          reduced to any electronic medium or machine-readable form,
          in whole or in part, without the prior written consent of
          Biologic Company, except in the manner described in this
          manual.  The unregistered version of Diskpack and
          accompanying documentation may be freely copied and
          distributed.

          Copyright (C) Biologic Company 1987,1988.  7950 Blue Gray Circle,
          Manassas, VA  22110  USA

          All rights reserved.  First edition printed 1987.  Printed in
          the United States.

          License agreement   The terms of this license agreement
          apply to you and to any subsequent licensee of this Diskpack
          software.  Biologic Company retains the ownership of this
          copy of Diskpack software.  This copy is licensed to you for
          use under the following conditions.

          o  You may use the Diskpack software on any compatible
             computer, provided the Diskpack software is used on only
             one computer and by one user at a time.

          o  You may not provide use of the software in a computer
             service business, network, timesharing, multiple CPU or
             multiple user arrangement to users who are not


                                                            4

             individually licensed by Biologic Company, except that you
             may designate any employee to use such products on a
             one employee per license basis.

          Disclaimer of warranty   Biologic company excludes any and
          all implied warranties, including warranties of merchantability
          and fitness for a particular purpose.  Biologic does not make
          any warranty of representation, either express or implied,
          with respect to this software program, its quality,
          performance, merchantability, or fitness for a particular
          purpose.  Biologic shall not have any liability for special,
          incidental, or consequential damages arising out of or
          resulting from the use of this program.   



                                                            5

          Introduction

          Description
          Advantages of Diskpack
          File compression
          Contents of the Diskpack disk
          Requirements

          Description   Diskpack and dRestore are general purpose file
          backup utility programs designed to replace the DOS Backup
          and Restore commands.  

          You can use Diskpack to back up files from a hard disk or a
          diskette to diskettes or any other DOS storage device
          (including tape).  Files are compressed as they are copied so
          that they occupy less disk space on the backup disks than on
          the source disk.

          dRestore uncompresses and copies files from the backup
          disks.  You can also use dRestore to perform a file by file
          comparison of the backup disks with the source disk.
           
          Advantages of Diskpack   

          o  Diskpack is much faster than the DOS Backup command. 
             On an IBM AT, Diskpack backs up 10 Megabytes of data
             in about 4 minutes.

          o  Diskpack compresses files up to 80%.  This means you can
             back up a 20 Megabyte hard disk onto 4 floppies. 
             Diskpack compresses files more efficiently than the
             "other" backup program, and does it faster.  The "other"
             program has a compression mode that runs slower than its
             non-compression mode and only compresses about 25%. 
             Diskpack compresses files without sacrificing speed.



                                                            6

          o  Diskpack is more reliable.  It uses DOS to write files to
             your backup disks.  All other fast backup programs bypass
             DOS and take direct control of your machine- a practice
             that is generally considered risky.  That's why they don't
             work with some IBM clones or non-standard disk drives. 
             You can use Diskpack on all IBM and compatible PCs and
             back up files to any DOS device (including tape). 

          File compression   Diskpack uses a very fast proprietary file
          compression method.  The amount of compression is
          dependent on file type- about 80% for database files, 60% for
          word processing and worksheet files, and 25% for executable
          files. Files which can be compressed the most will be backed
          up the fastest.  

          Contents of the Diskpack disk   The following files are
          included in the root directory of the distribution disk.

               diskpack.exe
               diskpack.hlp
               drestore.exe
               drestore.hlp

          There may also be a \FREEWARE directory which contains
          unregistered versions of our other software products.

          Requirements

          o  An IBM Personal Computer (PC, PC/XT, PC/AT, PS/2) (or
             compatible).

          o  IBM Personal Computer Disk Operating System (DOS)
             version 2.0 or greater (or compatible).

          o  Minimum 320K of conventional memory.  Additional
             memory will increase performance.


                                                            7

          Installation

          Procedure
          Notes

          To install Diskpack, create a new directory \DISKPACK on
          your hard disk and copy the files in the root directory of
          the distribution disk to it.

          Procedure

          1. Create a directory for the Diskpack files with the
             command

               md   \diskpack

          2. Put your distribution disk in drive A and type

               copy   a:\*.*   c:\diskpack

          3. Modify your AUTOEXEC.BAT file to include the
             \DISKPACK directory in your PATH command.  This allows
             you to access the Diskpack program from any current
             directory.  For example,

               path   c:\;c:\diskpack

          Notes

          o  Your \CONFIG.SYS file should contain a BUFFERS
             statement allocating at least 16 disk buffers.  This will
             maximize the performance of your computer, not just
             Diskpack.  For example,

               buffers=16



                                                            8

          o  The DOS VERIFY flag significantly increases backup time. 
             If you have a VERIFY ON statement in your
             AUTOEXEC.BAT file, you should set VERIFY to OFF
             before using Diskpack.  With VERIFY ON, DOS performs
             an operation following each disk write to verify that the
             data just written can be read without error- it does not
             verify that the data is the same data read from your hard
             disk.  If you really want to be safe, use dRestore to
             perform a file by file comparison of your backups with
             your hard disk.

          o  The first time you back up your hard disk, you must use
             dRestore to perform a comparison of it with your backup
             disks to ensure that Diskpack is compatible with your
             system.



                                                            9

          Quick Start

          Backing up files
          Comparing files
          Restoring files
          Notes

          Backing up files   To back up all of the files on your hard
          disk, follow these steps.

          1. You should have some formatted disks ready to use as
             backup disks.

          2. Type    verify   off

          3. If Diskpack is on your hard disk, make the directory
             containing the Diskpack program, DISKPACK.EXE, the
             current directory.

          4. If Diskpack is on a floppy disk, put it in drive A and
             make drive A the current drive.

          5. Type   diskpack   c:\*.*   a:/s/v

          Comparing files   To compare the files on your hard disk
          with your backup disks, follow this procedure.

          1. If Diskpack is on your hard disk, make the directory
             containing the dRestore program, DRESTORE.EXE, the
             current directory.

          2. If Diskpack is on a floppy disk, put it in drive A and
             make drive A the current directory.

          3. Type   drestore   a:   c:\*.*/s/v



                                                            10

          Restoring files   To restore the files on your backup disks to
          your hard disk, follow these steps.

          1. If Diskpack is on your hard disk, make the directory
             containing the dRestore program, DRESTORE.EXE, the
             current directory.

          2. If Diskpack is on a floppy disk, put it in drive A and
             make drive A the current directory.

          3. Type   drestore   a:   c:\*.*/s/v/r

          Notes   Don't restore files unless you have verified that
          Diskpack is compatible with your system by performing a
          complete backup and compare.



                                                            11

          Using Diskpack

          Format
          Options
          Notes
          Examples

          Format   The format of the Diskpack command is

          [d:][path]DISKPACK   [d:][path]filename[.ext]   d:   [options]

          where

          [d:][path] 
             before DISKPACK specifies the drive and path that
             contains the Diskpack program.  

          [d:][path] 
             after DISKPACK specifies the drive and path that contain
             the file(s) you want to back up (source).

          filename[.ext] 
             specifies the file(s) you want to back up.  Global file
             name characters are allowed in the file name, and cause
             all of the files matching the file name to be backed up.

          d: 
             specifies the drive that will contain the backed up files
             (target).

          [options]
             specifies optional parameters described below.

          Options   The following options can appear in the Diskpack
          command.



                                                            12

          /? 
             Display help.

          /1
             Do not prompt to insert the first backup disk.

          /A 
             Do not change the archive bit of each file copied. 
             Without this option, Diskpack clears the archive bit of
             each file it backs up.  When cleared, the archive bit
             indicates that a file has not been changed since it was
             backed up.  Whenever DOS writes to a file, it sets the
             archive bit to mark it as changed.  Normally, you should
             omit this option so that /M can be used to back up files
             that have been modified since the last backup.

          /B 
             Beep when prompted to insert a disk.

          /C[[d:][path]filename[.ext]]
             Create a catalog file containing a list of all the files
             backed up.  You can specify the name of the catalog file
             (and a drive and path).  If you don't, the file
             DISKPACK.CAT will be created in the current directory. 
             You cannot put the catalog file on the backup disk.

             The catalog file is a DOS text file and can be viewed
             using a text editor or displayed on the screen with the
             DOS TYPE command.

               type   diskpack.cat

          /Dmm-dd-yy
             Back up files that have been modified on or after the
             specified date.  The format of the date specified must be
             mm-dd-yy.


                                                            13


          /H 
             Include hidden files.  This will cause all files marked as
             hidden to be included on the backup disks. If you're
             backing up the root directory, the DOS hidden files
             IBMBIO.COM and IBMDOS.COM will be copied.  You can
             avoid restoring these files to a system using a different
             version of DOS with the dRestore /P1 option.    

          /I 
             Display registration information (unregistered version
             only).

          /M 
             Back up files that have been modified since the last
             backup.  A file has been modified if its archive bit is set
             (see option /A).

          /P 
             Display a (y/n)? prompt before copying each file.  You
             can choose to back up the file or not.

          /S 
             Back up subdirectory files in addition to the files in the
             specified or current directory.

          /V 
             Display a verbose description of the back up process. 

          /W 
             Prompt the user to press a key before reading source
             file(s).

          Notes

          o  Press Ctrl-Break to stop Diskpack.


                                                            14


          o  New disks must be formatted with the DOS FORMAT
             command.

          o  You can't back up to a hard disk.

          o  Files are backed up from the current directory if you do
             not specify a path.  

          o  Files are compressed as they are copied.

          o  You can't use the DIR command on backup disks.  To get
             a list of files, display the catalog file or use the dRestore
             /D option.

          o  You can't use the COPY command to copy files contained
             on backup disks.  

          o  Use high quality disks.  

          o  Do not use disks with bad sectors as backup disks.
             Diskpack will check the File Allocation Table of each disk
             and reject those that have clusters marked as bad.

          o  Diskpack erases files already present on the backup disks.

          Examples   The following example backs up all the files from
          disk drive C to drive A.

             diskpack   c:\*.*   a:/s

          The following example backs up the file FILE.TXT from drive
          C to drive A.  A verbose description of the backup process
          is displayed.

             diskpack   c:file.txt   a:/v


                                                            15


          The following example backs up all files from drive C that
          have been modified since the date 01-01-88 to drive A.

             diskpack   c:\*.*   a:/s/d01-01-88

          The following example backs up all files from drive C to
          drive A that have been modified since the last backup.

             diskpack   c:\*.*   a:/s/m

          The following example backs up all files in the current
          directory to drive A and creates catalog file DISKPACK.CAT
          in the current directory.

             diskpack   *.*   a:/c

          The following example backs up all files with an extension
          WK1 in directory \123 and all subdirectories of \123 to drive
          A.

             diskpack   \123\*.wk1   a:/s


                                                            16

          Using dRestore

          Format
          Options
          Notes
          Examples

          Format   The format of the dRestore command is

          [d:][path]DRESTORE   d:   [d:][path]filename[.ext]   [options]

          where

          [d:][path]
             before DRESTORE specifies the drive and path that
             contain the dRestore program.

          d:
             specifies the drive that contains the backed up files
             (source).

          [d:][path]filename[.ext]
             specifies the file(s) you want to restore and where you
             want to restore them (target).  Global file name
             characters are allowed in the file name, and cause all of
             the files matching the file name to be restored.  The files
             must be restored to the same directory they were in when
             Diskpack copied them.

          [options]
             specifies the optional parameters described below.

          Options   The following options can appear in the dRestore
          command.

          /?


                                                            17

             Display help.

          /1
             Do not prompt to insert the first backup disk.

          /B
             Beep when prompted to insert a disk.

          /D
             Display file names only.  This operation takes as long as
             restoring files, since dRestore must uncompress the data
             on the backup disks to obtain the file names.  If you
             created a catalog file when backing up, it's faster to
             display its contents with the DOS TYPE command.

               type   diskpack.cat

          /I
             Display registration information (unregistered version
             only).

          /P1
             Display a (y/n)? prompt before restoring a file if it is
             hidden or has been changed since it was last backed up. 
             You can choose to restore the file or not.

          /P2
             Display a (y/n)? prompt before restoring each file.  You
             can choose to restore the file or not.

          /R
             Restore files.  If /R is omitted, dRestore will compare the
             files on the backup disks with the target disk- not
             restore them.

          /S


                                                            18

             Restore subdirectory files in addition to the files in the
             specified or current directory.

          /V
             Display a verbose description of the restore process. 

          Notes

          o  Press Ctrl-Break to stop dRestore.

          o  The files being restored must have been placed on the
             source with Diskpack.

          o  dRestore isn't as fast as Diskpack.  Diskpack's
             compression method was developed to be as fast as
             possible even though some of the techniques used to
             increase compression speed actually decrease the speed of
             uncompression.  This is a good tradeoff since Diskpack is
             used more frequently than dRestore.

          o  You don't have to start with disk 1 when restoring files. 
             If you want to restore a single file from a set of backups,
             start with the backup disk that contains the file (the
             catalog lists each file and its disk number).  If dRestore
             doesn't find the file, try starting with the previous disk.

          o  Before formatting your hard disk, you should back it up
             completely, compare the backup disks with your hard disk
             to be sure you have a good copy, and back it up again on
             another set of disks.

          o  dRestore will automatically create directories on the
             target disk if they don't already exist.

          Examples   The following example compares the files on the
          backup disks in drive A with the files on drive C.  The files


                                                            19

          are not restored.

             drestore   a:   c:\*.*/s

          The following example restores all files on the backup disks
          from drive A to drive C.

             drestore   a:   c:\*.*/s/r

          The following example restores the file FILE.TXT from drive
          A to drive C.  A verbose description of the restore process
          is displayed.

             drestore   a:   c:file.txt/r/v

          The following example restores all files from drive A that
          were backed up from the current directory and prompts the
          user before restoring each file.

             drestore   a:   *.*/p2/r

          The following example restores all files from drive A with
          the extension WK1 that were backed up from the directory
          \123 and all subdirectories of \123.

             drestore   a:   \123\*.wk1/s/r



                                                            20

          Notes

          o  You must reformat backup disks if you wish to use them
             for another purpose.

          o  The red light on the disk drive will remain on during disk
             changes.  It does not harm the disk or drive to open the
             drive door when the light is on.



                                                            21

          Site License

          Diskpack can be licensed on a per location basis which allows
          a company to use it on a network or use multiple copies of
          Diskpack without purchasing them individually.  Pricing is
          dependent on the number of copies and is very reasonable. 
          Please contact Biologic for further information.



                                                            22

          Your Turn

          We value you opinions.  Please let us know what you like
          and dislike about the Diskpack program and documentation. 
          We're dedicated to developing the most innovative and useful
          software available- and selling it at reasonable prices.  Your
          support helps make this possible.

          Please send all comments and suggestions to

          Biologic Company
          P.O. Box 1276
          Manassas, VA  22110
          USA

          THANK YOU.







```
{% endraw %}

## HRAM.DOC

{% raw %}
```






                                                                          1


          HRAM
          Version 1.2
          User's Guide

          COPYRIGHT   

          This HRAM documentation and the software are copyrighted with all
          rights reserved.  Under the copyright laws, neither the
          documentation nor the software may be copied, photocopied,
          reproduced, translated, or reduced to any electronic medium or
          machine-readable form, in whole or in part, without the prior
          written consent of Biologic, except in the manner described in
          this manual.  The unregistered version of HRAM and accompanying
          documentation may be freely copied and distributed.

          Copyright (C) Biologic 1990-1992

          All rights reserved.  First edition printed 1990.  Printed in the
          United States.

          Software License Notice   

          Your license agreement with Biologic, which is included with the
          product, specifies the permitted and prohibited uses of the
          product.  Any unauthorized duplication or use of HRAM in whole or
          in part, in print, or in any other storage and retrieval system
          is forbidden.

          Licenses and Trademarks   

          MS-DOS is a registered trademark of Microsoft Corporation.  HRAM
          is a trademark of Biologic.


          Biologic
          POB 1267
          Manassas VA 
          22110
          USA

















                                                                          2


          CONTENTS

          License Agreement and Disclaimer of Warranty  3
          Introduction  4
          Notes on Memory and Memory Addresses  5
          Testing Your Memory with Chkmem  9
          Notes for 8088 and 80286 PCs  10
          Notes for 80386 PCs  11
          Condensed Instructions  12
          hramdev.sys  14
          hram.exe  16
          hram.sys  20
          Your Turn  22











































                                                                          3


          LICENSE AGREEMENT AND DISCLAIMER OF WARRANTY

          License agreement   

          The terms of this license agreement apply to you and to any
          subsequent licensee of this HRAM software.  Biologic retains the
          ownership of this copy of HRAM software.  This copy is licensed
          to you for use under the following conditions.

             You may use the HRAM software on any compatible computer,
             provided the HRAM software is used on only one computer and by
             one user at a time.

             You may not provide use of the software in a computer service
             business, network, timesharing, multiple CPU or multiple user
             arrangement to users who are not individually licensed by
             Biologic, except that you may designate any employee to use
             such products on a one employee per license basis.

             You may not disassemble or decompile the HRAM software.

          Disclaimer of warranty   

          Biologic excludes any and all implied warranties, including
          warranties of merchantability and fitness for a particular
          purpose.  Biologic does not make any warranty of representation,
          either express or implied, with respect to this software program,
          its quality, performance, merchantability, or fitness for a
          particular purpose.  Biologic shall not have any liability for
          special, incidental, or consequential damages arising out of or
          resulting from the use of this program.

























                                                                          4


          INTRODUCTION

          Description   

          HRAM is a powerful memory management program for 8088, 8086,
          80286, 80386 and 80486 PCs that enhances the utilization of high
          memory (memory between 640K and 1024K).  It works in conjunction
          with DOS 5 to create up to 96K of extra low DOS memory and up to
          224K of high DOS memory for use by device drivers (such as
          network drivers) and memory resident programs (TSRs).  In
          addition, it provides many of the necessary memory management
          features DOS 5 left out: 

             HRAM creates high memory on 8088, 80286, and 80386 PCs (DOS 5
             creates high memory on 386 PCs only.) 

             On 386 PCs, HRAM provides more high memory than DOS 5 by
             thoroughly searching the area between 640K and 1024K and
             converting ALL unused areas to high memory--memory that DOS 5
             often overlooks 

             HRAM gives you an extra 64K of high memory for program
             initialization by using expanded memory for loading drivers
             and TSRs--this means you'll often load programs you couldn't
             load before. 

             HRAM optimizes your high memory by  automatically determining
             which order and in which memory region your drivers and TSRs
             should be loaded. This one step can easily double the
             utilization of your high memory. (DOS 5 suggests that you
             "experiment with different combinations and orders of
             programs".  When you consider that your high memory may
             consist of several separate regions and that you probably use
             up to a dozen drivers and TSRs, this process, without HRAM,
             could require rebooting your PC thousands of times!)

          Overview   

          HRAM is a set of programs that consists of: 

             hramdev.sys, a device driver that manages upper memory and can
             fill unused upper memory areas with expanded memory or shadow
             RAM.

             hram.exe, a program that works in conjunction with the DOS
             LOADHIGH command to optimally load TSRs into the high DOS
             memory created by hramdev.sys.  hram.exe also provides a
             status report of high memory and lists the programs that have
             been loaded into it.

             hram.sys, a special driver that works in conjunction with the





                                                                          5

             DOS DEVICEHIGH command to optimally load device drivers into
             high DOS memory.

          A utility program, Chkmem, is included in the package and
          provides information about the status of memory in your PC.

          Requirements

             A PC with a 8088, 8086, 80286, 80386 or 80486 microprocessor.

             IBM Personal Computer Disk Operating System (PC-DOS) or
             Microsoft Disk Operating System (MS-DOS) version 5.0 or
             greater.

             On 8088 and 80286 PCs, expanded memory version 4 or Chips &
             Technologies shadow RAM.

          Contents of the HRAM disk   

          The following files are included in the root directory of the
          distribution disk.

             hramdev.sys
             hram.exe
             hram.sys
             chkmem.exe
             read.me

          There may also be a \freeware directory which contains
          unregistered versions of our other software products.



























                                                                          6


          NOTES ON MEMORY 
          AND MEMORY ADDRESSES

          Conventional Memory   

          Conventional memory is located between 0K and 1024K and is the
          maximum amount of memory that can be addressed by the 8088
          microprocessor on which the IBM PC is based.1  The designers of
          the original PC divided conventional memory space into a 640K
          block of memory to be used by MS-DOS programs (low DOS memory)
          and a 384K block of upper memory (which can be used for high DOS
          memory) for system hardware and ROM.  The term, conventional
          memory, is sometimes used to refer just to memory from 0 to 640K.

          Expanded Memory   

          Expanded memory is "paged" memory that can exist in 8088, 80286,
          and 80386 based PCs.  As the memory requirements of programs
          grew, expanded memory was developed to support up to 32M of
          memory by swapping small blocks or "pages" of extra memory into
          the 1M address space of the 8088 processor so that only a few
          pages are addressable at a time.  Memory pages that are not in
          use are stored as deactivated pages on an expanded memory board.

          The original expanded memory specification, EMS version 3.2, was
          developed jointly by Lotus, Intel, and Microsoft.  Soon after,
          AST and Ashton-Tate developed a similar, but enhanced,
          specification called EEMS.  These two specifications were
          replaced by EMS version 4.0, which incorporated features of both
          specifications.

          Below is a summary of a few important features:

             An expanded memory page is 16K in size.

             Expanded memory that conforms to the version 3.2 specification
             can be mapped only into a 64K region in high memory called the
             page frame.  EMS version 4.0 supports the mapping of expanded
             memory into any location in conventional memory.

             A software control program, called an expanded memory manager,
             manages the placement of memory pages, and is typically loaded
             by the config.sys file when your PC is turned on or restarted.

          Extended Memory   

          Intel's newer processors, starting with the 80286, are capable of
                                        ____________________

               11K equals 1,024 bytes. 1024K equals 1,048,576 bytes or 1
          megabyte.





                                                                          7

          addressing memory above 1M--extended memory.  Unfortunately, this
          memory is not addressable when these processors are in a
          processor state called real mode (a mode designed to maintain
          compatibility with the 8088) and cannot be fully utilized when
          using a real mode operating system such as MS-DOS.  

          The problem of accessing extended memory while running MS-DOS has
          spawned several solutions:  

             On PCs that support extended memory, a feature of the ROM BIOS
             allows programs to copy data between conventional and extended
             memory.  Although programs cannot execute in extended memory,
             they can use it as storage space.  Programs that take
             advantage of this feature include RAM disks, print spoolers,
             and 80286 expanded memory simulators.  

             Protected mode run-time environments which allow an
             application program to execute in protected mode under MS-DOS.

             80386 memory managers, like VRAM/386, that use the page
             mapping capability of the 80386 processor to convert extended
             memory into expanded memory and provide additional
             conventional memory for use by MS-DOS.  

          Memory Addresses   

          Memory addresses and ranges are typically specified using
          hexadecimal (hex) numbers.  Hex numbers include the digits 0-9
          and the letters A-F, giving 16 possible values for each hex
          digit. 

          Conventional memory can be divided into 64 pages of 16K each.
          These pages can be referred to as page 0, page 1, page 2, and so
          on, or, as is the case in this manual, by their hexadecimal
          segment addresses.  Using this notation, page 0 is at segment 0,
          page 1 is at segment 0400, page 2 is at segment 0800, etc.  The
          following table lists some page numbers and their corresponding
          segment address and linear address:

                            Segment      Linear
               Page         Address     Address               ________________________________

                  0         0000             0K
                  1         0400            16K
                  2         0800            32K
                  3         0c00            48K
                  4         1000            64K
                  5         1400            80K
                  8         2000           128K
                 12         3000           196K
                 40         a000           640K
                 44         b000           704K





                                                                          8

                 63         fc00         1,008K

                  
          The first 40 pages (640K) of conventional memory are used by MS-
          DOS and the other 24 pages are reserved for system hardware and
          ROM.  The exact usage of the upper 384K of conventional memory
          depends on the hardware configuration of your machine; typically,
          several blocks of this area are not used and are simply empty
          space.

          The table below lists the memory map of a typical PC:


             Address
             Range        Description                             ________________________________________

             0000-9fff    low DOS memory (640K)
             a000-bfff    VGA display adapter (128K)
             c000-c7ff    hard disk controller (32K)
             c800-cfff    unused address space (32K)
             d000-dfff    expanded memory page frame (64K)    
             e000-efff    unused address space (64K)
             f000-ffff    ROM


































                                                                          9


          TESTING YOUR MEMORY WITH CHKMEM

          The Chkmem program is a memory utility which displays the types
          and amounts of memory in your PC.  With it, you can determine the
          current status of the upper memory area (the area between 640K
          and 1024K) and the amount of high DOS memory that can be created
          from it.  

          Enter the command [chkmem] (don't type the brackets) to display
          the amount of upper memory that can be created on your PC. 
          Example output is shown below:

          Biologic Chkmem, version 1.1
          copyright (c) Biologic 1990-1991. all rights reserved.

              655360 bytes conventional memory (low DOS memory)
                   0 bytes extended memory
              351232 bytes available XMS memory
              655360 bytes expanded memory

                   0 bytes high DOS memory
                   0 bytes upper memory blocks (UMBs)
                   0 bytes expanded memory can be converted to high DOS mem 
                   0 bytes shadow ram can be converted to high DOS memory
              163840 bytes unused areas can be converted to high DOS memory
              163840 bytes high DOS memory can be created


             If the last line in the listing, "bytes high DOS memory can be
             created", is not 0, then HRAM can create and/or manage high
             DOS memory on your PC.

             If you have a 8088 or a 80286 PC and the listing shows that
             the only available source of high DOS memory is "unused
             areas", as in the example above, then you must add expanded
             memory to your system.  Read the section, "Notes for 8088 and
             80286 PCs" for more information on installing expanded memory.

             If you have expanded memory and only 65536 bytes (64K) can be
             converted to high DOS memory, your expanded memory may not be
             fully compatible with the EMS version 4.0 specification or it
             may need to be configured differently.  Read the section,
             "Notes for 8088 and 80286 PCs" for more information on
             configuring your expanded memory.












                                                                         10


          NOTES FOR 8088 AND 80286 PCS

          1. HRAM can utilize shadow RAM provided on PCs with the NEAT
             Chipset from Chips & Technologies.  Expanded memory is not
             required on PCs that have this chipset.

          2. HRAM can also convert expanded memory to high DOS memory,
             provided your expanded memory is hardware compatible with EMS
             version 4.0.  If the Chkmem program reported that only 65536
             bytes of high DOS memory can be created from expanded memory,
             then your expanded memory is either not hardware compatible
             with EMS 4 or it needs to be reconfigured.  Consult the
             documentation for the board or contact your computer dealer to
             make this determination (note: many memory boards are software
             compatible with EMS 4 but are not fully compatible on a
             hardware level). 

          3. If your expanded memory is hardware compatible with EMS 4 and
             Chkmem reports that only 65536 bytes of high DOS memory can be
             created from expanded memory, then you need to reconfigure
             your expanded memory by changing the line in your config.sys
             file that loads the expanded memory manager for the board. 
             Run the command [chkmem /c] to display a recommended command
             line for your expanded memory manager.

          4. If your expanded memory is not hardware compatible with EMS 4,
             you can still create high DOS memory by using the hramdev /f
             option.  This option will give you 64K of high DOS memory, but
             will make your expanded memory unavailable to other programs.



























                                                                         11


          NOTES FOR 80386 PCS

          1. HRAM can utilize shadow RAM provided on PCs with the AT/386
             Chipset from Chips & Technologies.  If you do not need to
             convert extended memory to expanded, the expanded memory
             manager, emm386.exe, is not required on PCs that have this
             chipset.

















































                                                                         12


          CONDENSED INSTRUCTIONS

          Creating high DOS memory

          1. If you have a 386 PC or if you have EMS 4 expanded memory, you
             need to add a [device=] line to your config.sys file which
             loads your expanded memory manager.  An expanded memory
             manager is a single file which, typically, has "EMM" in its
             name.  If this line already exists in your config.sys file,
             you may need to change the parameters so that your expanded
             memory is configured correctly.  If you are using shadow RAM
             to create high DOS memory, you should skip this step.

                80386 PCs: DOS 5 provides an expanded memory manager,
                emm386.exe, for use on 386 PCs.  If you have a 386 PC, you
                should run the [chkmem /c] command to list the recommend
                command line for emm386.exe, and add this line to your
                config.sys file (or modify it if it already exists). This
                line should be located immediately after the line
                [device=himem.sys].

                8088/80286 PCs: Run the command [chkmem /c] to list a
                recommended command line for the expanded memory manager
                that was provided with your memory board.  You should add
                this line to your config.sys file (or modify it if it
                already exists).  Since expanded memory managers are
                different for every board, the syntax of this command may
                differ slightly from what is displayed by [chkmem /c].  You
                should consult the documentation for your memory board for
                information on the exact syntax of this command.

          2. Add the line [dos=umb] to your config.sys file. 

          3. Add the line [device=hramdev.sys] to your config.sys file. 
             This line should be located immediately after the line that
             loads emm386.exe [device=emm386.exe] or, if you have a 8088 or
             80286 PC, this line should be located immediately after the
             line that loads the expanded memory manager for your memory
             board.  If you do not have expanded memory, this line should
             be located near the beginning before any other [device=]
             lines.

          4. Reboot your PC and run the Chkmem program.  Chkmem should
             report a non-zero value for "bytes high DOS memory".  Enter
             the command [chkmem /h] to display the size and location of
             the high DOS memory regions in your PC.

          Optimizing high DOS memory

          High DOS memory is utilized in two ways: (1) programs that
          recognize this area will automatically take advantage of it, and





                                                                         13

          (2) TSRs and device drivers can be loaded into it with the DOS
          commands DEVICEHIGH and LOADHIGH.  

          The process of loading programs high is complicated by the fact
          that high DOS memory is a relatively small area, which may
          consist of several regions of different sizes, and that, when
          loaded, programs have an initialization size which may be much
          larger (or smaller) than their resident size.  Loading programs
          in a different order or into different memory regions can
          significantly increase the number of programs you are able to
          load high.  

          HRAM provides features which allow you to gain optimum use of
          your high DOS memory: it automatically determines the resident
          size and initialization size of each of your drivers and TSRs, it
          calculates the best configuration for your high memory, it allows
          you to load a program into a specific region, and it provides an
          extra 64K of memory for program initialization by temporarily
          adding expanded memory to high DOS memory.

          Follow the steps below to optimize your memory:

          1. Add the /s option to the [device=hramdev.sys] line in your
             config.sys file and add a new line as shown below:

             device=hramdev.sys /s
             device=hram.sys on

          2. Reboot your PC.

          3. Type the command [hram /l] to list the analysis of your
             drivers and TSRs.

          4. Type the command [hram /c] to list recommended commands for 
             loading your programs high and add these lines to your
             config.sys and autoexec.bat files. 

          5. Remove the /s option from the [device=hramdev.sys] line in
             your config.sys file and reboot your PC.

          6. Use the [hram /m] command to list the programs that have been
             loaded into high DOS memory.















                                                                         14


          HRAMDEV.SYS

          Command reference   

          The format of the hramdev.sys command is

          device=d:\path\hramdev.sys [options]

          [options]
             specifies the optional hramdev.sys parameters described in the
             following section.

          The following options can appear in the hramdev.sys command.  

          /f
             Use the expanded memory page frame for high DOS memory.  The
             page frame is a 64K buffer in the high memory area into which
             expanded memory pages are mapped.  Although EMS version 4.0
             supports mapping of expanded memory to areas outside the page
             frame, most software programs, at a minimum, require the page
             frame to be available.  This option will create an additional
             64K of high memory, but will, in most cases, prevent other
             programs from utilizing expanded memory.

          /i<addressrange>
             Include address range.  The memory range specified by
             <addressrange> will be converted to high DOS memory.  It must
             be above a000 (hex).  <addressrange> is specified with
             hexadecimal segment addresses which must be multiples of 16K
             (0000, 0400, 0800, 0c00, 1000, 1400, ...).  For example, to
             include the range c000 to c800 use the parameter [/ic000-
             c800].  Multiple include ranges should be separated by commas. 
             For example, [/ic000-c800,e000-f000].

             If /i is used, only the memory areas with the include range(s)
             will be available as high DOS memory.

             This option is useful only if there are mappable areas in high
             memory that should not be under the control of hramdev.sys. 
             Normally, this option should not be used; hramdev.sys will
             automatically convert all mappable high memory (excluding the
             page frame) into high DOS memory.  

          /n
             No pause on error.  If hramdev.sys reports an error, it waits
             for you to press a key.  This option causes hramdev.sys to
             continue without waiting for a key.

          /p
             Do not use expanded memory for program initialization. 
             Normally, HRAM provides extra memory for use by programs





                                                                         15

             during their initialization by temporarily adding 64K of
             expanded memory to high DOS memory. 

          /s
             Get size of programs.  HRAM will calculate the resident size
             and initialization size of every driver and TSR that is loaded
             after it and write this information to the file
             "\hram0000.dat" for use by the [hram /l] command.  Programs
             will not be loaded high when this option is used.


          /x<addressrange>
             Exclude address range.  This option prevents hramdev.sys from
             using a particular range of addresses.  <addressrange> is
             specified with hexadecimal segment addresses which must be
             multiples of 16K.  For example, to exclude the range c000 to
             c800 use the parameter [/xc000-c800].  Multiple exclude ranges
             should be separated by commas.  For example, [/xc000-
             c800,e000-f000].






































                                                                         16


          HRAM.EXE

          Displaying regions and programs in high memory   

          The command, [hram /m], will display a status report of the high
          memory created by hramdev.sys.  As illustrated in the following
          example, the report lists the location and size of each high
          memory region as well as the TSRs and drivers that have been
          loaded:

          Biologic HRAM, version 1.1
          copyright (c) Biologic 1990-1991. all rights reserved.

          region  address                size
          ------  ---------  ----------------
          0       b002-b7fd    32704 ( 31.9k)
          1       c802-dfff    98272 ( 96.0k)

          region  address                size  program
          ------  ---------  ----------------  -------
          0       b003-b01b      400 (  0.4k)  (character device) setverxx
          0       b01d-b122     4192 (  4.1k)  (character device) con     
          0       b124-b67d    21920 ( 21.4k)  (character device) smartaar
          0       b684-b6e0     1488 (  1.5k)  c:\util\unblink.com
          0       b6e7-b7d9     3888 (  3.8k)  c:\util\calc.com
          0       b7db-b7fd      560 (  0.5k)  (avail)
          0                      128 (  0.1k)  other allocated blocks
          1       c803-cba0    14816 ( 14.5k)  (character device) ms$mouse
          1       cba7-cdcc     8800 (  8.6k)  c:\util\anarkey.com
          1       cdd3-cdfe      704 (  0.7k)  c:\util\fastkey.com
          1       ce05-ce27      560 (  0.5k)  c:\util\scrnsave.com
          1       ce29-dfff    73072 ( 71.4k)  (avail)
          1                      192 (  0.2k)  other allocated blocks

          expanded memory page frame located at: e000
          hram: off


          Note that each region is identified by a number, starting with 0,
          and that the report indicates into which region each TSR or
          device driver has been loaded.  The amount of available space
          remaining in each region is listed also.

          The command, [hram /a], will list the raw memory allocations in
          high memory.


          Loading TSRs into high DOS memory   

          hram.exe, itself, does not load programs into high memory, it
          works in conjunction with DOS to improve the function of the





                                                                         17

          LOADHIGH command.  hram.exe provides a way to load a program into
          a specific memory region and provides an extra 64K for program
          initialization by temporarily converting expanded memory to high
          DOS memory.  To illustrate, suppose you wish to load a TSR
          program, called Notepad, into high DOS memory.  The command you
          normally use to load it into low memory is:

          notepad /i

          The command to load it into high memory, without using HRAM,
          would be:

          loadhigh notepad /i

          The commands to load the program into the second memory region in
          high memory (regions are numbered starting with 0) and provide an
          additional 64K of memory would be:

          hram on /r1
          loadhigh notepad /i
          hram off

          Although the LOADHIGH command alone will load notepad into high
          memory, it will load it into the first available high memory
          region; the advantage to using HRAM is that it will force
          LOADHIGH to load it into a specific region.  This is an important
          feature, since in order to gain optimum use of high memory, your
          programs should be loaded into the region recommended by HRAM
          (with the [hram /l] command).  In addition, suppose you have 100K
          of high memory, but the notepad program requires 150K for
          initialization.  Without HRAM, there would not be enough high
          memory and LOADHIGH would load it into low memory.  Since HRAM
          provides an additional 64K for initialization, the program would
          be successfully loaded high.

          The HRAM command can be executed at the DOS prompt or it can be
          used within a batch file (usually your autoexec.bat file).  When
          the HRAM command is executed without any parameters, [hram], it
          reports the current status of HRAM--on or off.


          Command reference   

          The format of the HRAM command is

          hram [on|off] [options] 

          [on|off]
             specifies whether HRAM should be "on" or "off".  When HRAM is
             on, programs can only be loaded into the memory region
             specified on the HRAM command line (with the /r option) and
             64K of expanded memory is temporarily converted to high DOS





                                                                         18

             memory. 

          [options]
             specifies the optional HRAM parameters described in the
             following section.

          The following options can appear in the HRAM command. 

          /?
             Display help.

          /7
             Increase low DOS memory size to 704K or 736K. If a high DOS
             memory region exists at the address a002h (use the command
             [hram /m] to display these regions), the command [hram /7]
             will add this region to the low dos memory pool and increase
             its size to 704K or 736K. The /7 option can only be used if
             no programs have been loaded into the region at a002h.
             Programs cannot be loaded high after this option has been
             used.

          /a
             List raw memory allocations in high DOS memory.  Use this
             option to display the memory control blocks that have been
             allocated from high memory.

          /c
             List recommended config.sys and autoexec.bat files.  When the
             /s option is added to the hramdev.sys command and your PC is
             rebooted, information about the memory requirements of your
             drivers and TSRs is written to the file "\hram0000.dat".  The
             command [hram /c] analyzes this information and displays a
             list of recommended commands for your config.sys and
             autoexec.bat files.

          /i
             Display registration information.  This option causes hram.exe
             to list information about registering your copy of HRAM.  If
             you have not purchased a registered copy of HRAM, and you
             continue to use it after a reasonable testing period, you are
             required to register your copy.

          /l
             List analysis of programs.  When the /s option is added to the
             hramdev.sys command and your PC is rebooted, information about
             the memory requirements of your drivers and TSRs is written to
             the file "\hram0000.dat".  The command [hram /l] analyzes this
             information and displays the optimum load order and memory
             region for each program.

          /m
             List regions and programs in high DOS memory.  [hram /m] lists
             a status report of high memory, including the size and
             location of each memory region and program or device driver. 
             Read the previous section, "Displaying regions and programs in
             high memory", for more information.

          /n
             No pause on error.  If hram.exe reports an error, it waits for
             you to press a key.  This option causes hram.exe to continue
             without waiting for a key.






                                                                         19

          /o<order>
             Set program load order.  This option is useful only if you
             have a program which must be loaded before one or more other
             programs.  For example, to ensure that program1.exe is loaded
             before program2.exe and program3.exe, include these commands
             in your autoexec.bat file:

             hram on /o1
             program1
             hram on /o2
             program2
             program3
             hram on

             To ensure that program1.exe is loaded before program2.exe and
             that program2.exe is loaded before program3.exe, use these
             commands:

             hram on /o1
             program1
             hram on /o2
             program2
             hram on /o3
             program3
             hram on

             This option is valid only if the /s option is used on the
             hramdev.sys command line.  Otherwise, it is ignored.

          /p
             Do not temporarily convert 64K of expanded memory to high DOS
             memory for use during program initialization.

          /r<region>
             Load into memory region number <region>.  This option causes
             LOADHIGH to load one or more programs into the specified
             memory region.  For example, the following commands would load
             the programs, notepad.exe and calc.exe, into memory region 1
             (memory regions are numbered starting with 0): 

             hram on /r1
             loadhigh notepad
             loadhigh calc
             hram off

             Without this option, LOADHIGH loads programs into the first
             memory region in which they fit.










                                                                         20


          HRAM.SYS

          Like hram.exe, hram.sys does not load programs into high memory,
          it works in conjunction with DOS to improve the function of the
          DEVICEHIGH command.  hram.sys provides a way to load a device
          driver into a specific memory region and provides an extra 64K
          for driver initialization by temporarily converting expanded
          memory to high DOS memory.  To illustrate, suppose you wish to
          load the device driver, ansi.sys, into high DOS memory.  The
          command you normally use to load it into low memory is:

          device=ansi.sys

          The command to load it into high memory, without using HRAM,
          would be:

          devicehigh=ansi.sys

          The commands to load the program into the second memory region in
          high memory (regions are numbered starting with 0) and provide an
          additional 64K of memory would be:

          device=hram.sys on /r1
          devicehigh=ansi.sys
          device=hram.sys off


          Command reference   

          The format of the hram.sys command is

          device=hram.sys [on|off] [options]

          [on|off]
             specifies whether HRAM should be "on" or "off".  When HRAM is
             on, programs can only be loaded into the memory region
             specified on the HRAM command line (with the /r option) and
             64K of expanded memory is temporarily converted to high DOS
             memory. 

          [options]
             specifies the optional HRAM parameters described in the
             following section.

          The following options can appear in the HRAM command. 

          /n
             No pause on error.  If hram.sys reports an error, it waits for
             you to press a key.  This option causes hram.sys to continue
             without waiting for a key.






                                                                         21

          /o<order>
             Set program load order.  This option is useful only if you
             have a program which must be loaded before one or more other
             programs.  For example, to ensure that program1.sys is loaded
             before program2.sys and program3.sys, include these commands
             in your config.sys file:

             device=hram.sys on /o1
             device=program1.sys
             device=hram.sys on /o2
             device=program2.sys
             device=program3.sys
             device=hram on

             This option is valid only if the /s option is used on the
             hramdev.sys command line.  Otherwise, it is ignored.

          /p
             Do not temporarily convert 64K of expanded memory to high DOS
             memory for use during program initialization.

          /r<region>
             Load into memory region number <region>.  This option causes
             DEVICEHIGH to load one or more programs into the specified
             memory region.  For example, the following commands would load
             the programs, notepad.sys and calc.sys, into memory region 1
             (memory regions are numbered starting with 0): 

             device=hram.sys on /r1
             devicehigh=notepad.sys
             devicehigh=calc.sys
             device=hram.sys off

             Without this option, DEVICEHIGH loads drivers into the first
             memory region in which they fit.






















                                                                         22


          YOUR TURN

          We value you opinions.  Please let us know what you like and
          dislike about the HRAM program and user's guide.  We're dedicated
          to developing the most innovative and useful software available--
          and selling it at reasonable prices.  Your support helps make
          this possible.

          Please send all comments and suggestions to

          Biologic 
          POB 1267
          Manassas VA  
          22110
          USA

          THANK YOU.



































```
{% endraw %}

## MIN-MEM.DOC

{% raw %}
```

                                                                          1

          min-mem
          Version 2.11
          User's Guide







          NOTE:

          Version 2.11 includes two new program files, min-meme.exe and 
          min-memx.exe, which load TSRs into expanded memory and extended 
          memory, respectively.  As discussed in the min-mem user's guide, 
          the min-mem.exe program swaps TSRs to your disk. To load TSRs 
          into expanded or extended memory, follow the directions in the 
          user's guide, but substitute one of these new programs for min-
          mem.exe.












          2

          Copyright   This min-mem documentation and the software are
          copyrighted with all rights reserved.  Under the copyright laws,
          neither the documentation nor the software may be copied,
          photocopied, reproduced, translated, or reduced to any electronic
          medium or machine-readable form, in whole or in part, without the
          prior written consent of Biologic, except in the manner described
          in this manual.  The unregistered version of min-mem and
          accompanying documentation may be freely copied and distributed.

          Copyright (C) Biologic 1989-1991.

          All rights reserved.  First edition printed 1989.  Printed in the
          United States.

          Software License Notice   Your license agreement with Biologic,
          which is included with the product, specifies the permitted and
          prohibited uses of the product.  Any unauthorized duplication or
          use of min-mem in whole or in part, in print, or in any other
          storage and retrieval system is forbidden.

          Licenses and Trademarks   PC Tools is a registered trademark of
          Central Point Software, Inc.  Metro is a registered trademark of
          Lotus Corporation.  PC-DOS is a registered trademark of
          International Business Machines, Inc.  SideKick is a registered
          trademark of Borland International, Inc.  Homebase is a
          registered trademark of Brown Bag Software Inc.  min-mem is a
          registered trademark of Biologic.  


          Biologic
          POB 1267
          Manassas, VA 
          22110
          USA
          703-368-2949

























                                                                          3

          Contents

          License Agreement and Disclaimer of Warranty  5
          Introduction  6
          Condensed Instructions  8
          Installation  9
          Using min-mem  11
          Command Reference  12
          Error Messages  15
          Notes  16
          Site License  17
          Your Turn  18















































          4




























































                                                                          5

          License Agreement and Disclaimer of Warranty

          License agreement
          Disclaimer of warranty


          License agreement   The terms of this license agreement apply to
          you and to any subsequent licensee of this min-mem software. 
          Biologic retains the ownership of this copy of min-mem software. 
          This copy is licensed to you for use under the following
          conditions.

               You may use the min-mem software on any compatible computer,
               provided the min-mem software is used on only one computer
               and by one user at a time.

               You may not provide use of the software in a computer
               service business, network, timesharing, multiple CPU or
               multiple user arrangement to users who are not individually
               licensed by Biologic, except that you may designate any
               employee to use such products on a one employee per license
               basis.

               You may not disassemble or decompile the min-mem software.

          Disclaimer of warranty   Biologic excludes any and all implied
          warranties, including warranties of merchantability and fitness
          for a particular purpose.  Biologic does not make any warranty of
          representation, either express or implied, with respect to this
          software program, its quality, performance, merchantability, or
          fitness for a particular purpose.  Biologic shall not have any
          liability for special, incidental, or consequential damages
          arising out of or resulting from the use of this program.


























          6

          Introduction

          Description
          Overview
          Highlights
          Requirements
          Contents of the min-mem disk


          Description   min-mem frees up memory for large programs by
          swapping memory resident programs (TSRs) to your disk--giving you
          instant access to up to 24 popup programs such as SideKick, PC
          Tools, and Lotus Metro while using only 15K of memory.

          Overview   A memory resident program, as its name implies, is
          installed in memory and remains there until your PC is turned off
          or rebooted.  Popup programs, such as SideKick, are memory
          resident and can be "popped up" instantly and used while running
          any other program.  A disadvantage of installing a popup program
          is that it must occupy a significant portion of conventional
          memory that becomes unavailable to other applications.  

          min-mem provides a solution to this problem by individually
          loading each of your popup programs and writing a memory image of
          the popup to your disk.  The memory used by the popup is then
          released back to the operating system.  The min-mem program
          itself remains resident and uses 15K of memory.  

          min-mem acts like any other popup program.  When you press the
          min-mem key combination, min-mem displays a list of your popups
          and allows you to select one by moving the highlight bar and
          pressing Enter or by pressing a single key.  A section of your
          memory is saved to disk, and the selected popup is loaded in its
          place.  Pressing the popup's hotkey will activate the program as
          usual.

          When you exit the popup and min-mem, the section of memory that
          was saved to your disk is restored, and you'll return to your
          original program.

          Highlights

               min-mem can be popped up at any time, within any
               application, to load and run a TSR program.

               All of your TSRs are displayed in a menu and can be selected
               with a highlight bar or a single keystroke.

               Does not required setting aside memory for the largest TSR
               like similar programs.

               Compatible with all TSRs.







                                                                          7


               Uses only 15K of memory.  Frees all memory used by TSRs.

               Eliminates conflicts between TSRs and between applications
               and TSRs.  Enables any TSR to pop up within a graphics
               program.

          Requirements

               IBM Personal Computer Disk Operating System (PC-DOS) or
               Microsoft Disk Operating System (MS-DOS) version 2.0 or
               greater.

               Fixed disk or network disk.  Disk free space must be equal
               to or greater than the amount of total memory used by your
               popup programs.

          Contents of the min-mem disk   The following files are included
          in the root directory of the distribution disk.

                    min-mem.exe
                    min-meme.exe
                    min-memx.exe
                    read.me

          There may also be a \freeware directory which contains
          unregistered versions of our other software products.


            
































          8

          Condensed Instructions

          The following instructions briefly describe the installation and
          use of min-mem.  If you are a knowledgeable computer user, you
          should be able to get min-mem working by following these steps. 
          More detailed information can be found in the sections,
          "Installation", "Using min-mem", and "Command Reference".

          1.   Copy the file, min-mem.exe, to the directory that has your 
               utility programs.

          2.   Create a text file which lists your popup programs and the
               parameters needed to load them.  Be sure to include a path
               for each TSR and its file name extension.  For example, the
               following would load SideKick and PC Tools.

               \sk\sk.com
               \pctools\pcshell.exe /r

          3.   Run the min-mem program and use the /f parameter to specify
               the text file which lists your TSRs.  For example, if the
               file you created in step 2 is called min-mem.txt, enter the
               command1

               min-mem /fmin-mem.txt

          4.   To use min-mem, press the Ctrl and Alt keys simultaneously
               and follow the directions on the screen.


















                                        ____________________

               1The file name specified with the /f parameter can include a
          path.







                                                                          9

          Installation

          Copying min-mem
          Configuring min-mem

          Copying min-mem   The file, min-mem.exe, should be copied to the
          directory on your hard disk you use for utility programs.  You
          should have a command in your autoexec.bat file which includes
          this directory in your path so that your utility programs,
          including min-mem, can be executed from any directory on your
          hard drive.2  The following installation procedure assumes you
          have a directory named \util in the root directory of drive C.

          1.   Insert the distribution disk in drive A.

          2.   Type [copy a:min-mem.exe c:\util] (don't type the brackets).

          Configuring min-mem   Before running the min-mem program, you
          must create a file which lists the popup programs you want min-
          mem to load.  The file should be a standard DOS text file and can
          be created using the DOS edlin program or any other editor or
          word processor.  You can also create the file by copying from the
          console device as shown in the example below.  

          Each line in the file should list the name of a TSR, including
          its path and file name extension, and the parameters, if any, you
          normally use to load the TSR.  The following procedure will
          create a file, named min-mem.txt, that will load Sidekick and PC
          Tools.3

          1.   Type [copy con \util\min-mem.txt] and press Enter (don't
               type the brackets).

          2.   Type [\sk\sk.com] and press Enter.

          3.   Type [\pctools\pcshell.exe /r] and press Enter.

          4.   Press the F6 function key and Enter.

          Some TSRs, such as Homebase (Brown Bag Software), consist of a
          group of programs that are loaded separately.  To instruct min-
          mem to load several files together in memory, enclosed them with
          braces in the file specified by the /f parameter.  For example,

                                        ____________________

               2Read about the path command in your DOS manual.

               3This  examples  assumes  ctr-alt.exe  is  in the  directory
          \util, SideKick is in  the directory \sk, and PC Tools  is in the
          directory  \pctools.   If this  is not the  case on  your system,
          substitute the correct directory names in this example.







          10

          the following lines would load SideKick and Homebase.4

               {
               \homebase\hbkernel.com k=128 8 @ c12
               \homebase\hbasync.com
               \homebase\hbvsi.com 35k
               \homebase\hb.exe z -k
               }

               \sk\sk.com

          Normally, the min-mem menu will list the filename of each TSR it
          has loaded.  If you would like min-mem to list another name for a
          TSR, indicate this by adding a line with the format

               /name newname

          where newname is the name of up to 12 characters to be displayed
          on the min-mem menu. This line and the line (or lines) which load
          the TSR should be enclosed by braces.  The following example
          would load SideKick and display "sidekick" on the menu.

               {
               \sk\sk.com
               /name sidekick
               }






















                                        ____________________

               4In order  to install Homebase  correctly, make  "\homebase"
          the current directory before executing the min-mem command.







                                                                         11

          Using min-mem

          The min-mem command
          Popping up min-mem


          The min-mem command   After you've created the file that lists
          your TSRs you can execute the min-mem command.  Use the /f
          parameter to specify the name of the file which lists your TSRs
          as shown in the example below.

          min-mem /f\util\min-mem.txt

          If, after executing this command, the message

          Bad command or file name

          is displayed, DOS was unable to find min-mem.exe.  The directory
          which contains min-mem.exe must be in DOS PATH.  If you received
          the message

          min-mem : error C0006: can't open program name list

          then min-mem was unable to find the file you entered on the min-
          mem command line.  Be sure the file name you entered includes the
          correct file name extension and path.  In other words, for the
          example above the file, min-mem.txt, must be in the directory
          \util.

          Popping up min-mem   Press the Ctrl and Alt keys simultaneously
          to pop up min-mem.5  min-mem will display the names of your TSRs
          and allow you to select one by either moving a highlight bar and
          pressing Enter or pressing the letter next its name.  After min-
          mem loads the selected TSR into memory, it can be activated by
          pressing its hotkey, and will work just as if it had been
          resident in memory.  

          When you exit the TSR, you can press Esc to return to the min-mem
          menu, where you can select another TSR or press Esc to exit.









                                        ____________________

               5Use the Ctrl  key on the left if your keyboard has two Ctrl
          keys.







          12

          Command Reference

          Format
          Parameters


          Format   The format of the min-mem command is

          min-mem [parameters]

          where

          [parameters]
               specifies the min-mem parameters described in the following
               section.

          Parameters   The following parameters can appear in the min-mem
          command.  The /f parameter, as described in the section "Using
          min-mem", specifies the TSRs to be loaded and is required.  The
          other parameters are provide to increase flexibility only and are
          not required.  It is not necessary that you know how to use them.

          /?
               Display help.

          /dd:path
               Drive/path for paging file.  This parameter specifies the
               location of the paging file, min-mem0.dat,  that min-mem
               uses to store a memory image of your TSRs.  If you omit this
               parameter, the paging file is placed in the root directory
               of the default drive.  For example, this parameter places
               the paging file in the root directory of drive D, [/dd:]. 
               If you need to put the file in a directory other than the
               root, you can specify a path also.  For example,
               [/dd:\private\].

          /fname
               Program name list.  This parameter specifies the name of the
               text file which lists the TSRs min-mem should load.  Each
               TSR should be listed on a separate line.  Include a path and
               a file name extension.  Read the sections "Installation" and
               "Using min-mem" for more information on the /f parameter.

















                                                                         13

          /hscancode
               Alternate hotkey.  Use this parameter to change the hotkey
               that pops up min-mem.  scancode specifies the scan code of
               the key, in combination with the Alt key, that will pop up
               min-mem.  For example, the Alt-Left Shift hotkey would be
               specified by [/h42].

               Scan codes for the IBM PC keyboard can be obtained in any
               hardware reference manual; a few are listed below.

                    Key            Scan Code

                    Left Shift          42
                    Right Shift         54
                    Space               57
                    Esc            1

          /q
               Quick install.  This causes min-mem to bypass its normal
               initialization procedure of loading each TSR and writing a
               memory image of it to disk, by using an image file that was
               created previously.  The image file, min-mem0.dat, must be
               located in the root directory of the default drive6 and must
               have been created by a previous invocation of the min-mem
               command that did not include the /q parameter.  It is also
               necessary that, when using /q, min-mem be loaded in exactly
               the same place in memory as when /q was not used.  

               This option is most useful when min-mem is executed by
               autoexec.bat.  This ensures that it will be consistently
               placed in the same memory location unless your config.sys or
               autoexec.bat files are altered.  To do this successfully,
               add the min-mem command, without the /q parameter, to your
               autoexec.bat file and reboot.  After min-mem has been
               installed and the image file created, add the /q parameter
               to the min-mem command line in your autoexec.bat file and
               reboot again.  

          /r
               Restore screen after loading TSR.  After loading a TSR,
               instead of displaying the message "Program loaded", min-mem
               will restore the screen as it appeared before min-mem was
               popped up.  This is useful when running a TSR, such as an
               envelope printing program, that reads characters from the
               screen.  Remember to press the hotkey after loading the TSR
               and to press Esc after exiting the TSR to return to the min-
               mem menu.

                                        ____________________

               6Unless another drive and/or directory is specified with the
          /d parameter.







          14

          /v
               Don't change video mode.  This parameter causes min-mem to
               never change the video mode of the display.  Normally, when
               popping up in a graphics screen, min-mem changes the display
               to text mode and then restores the original graphics mode
               when exiting.  Although unlikely, if min-mem is incompatible
               with a program that uses a graphics mode, you can avoid
               problems by using this parameter.  Although the min-mem menu
               or messages will not be displayed, min-mem will work the
               same as usual--you just have to remember which letter loads
               a particular TSR and to press Esc twice after exiting the
               TSR.















































                                                                         15

          Error Messages

          already installed   min-mem is already installed.

          can't install   The min-mem program is not compatible with your  
           computer system.

          can't open program name list   The file name specified with the
          /f parameter does not exist.  If you specified a path, verify
          that the file is in that directory.  If you did not specify a
          path, the file must be in the current directory.

          min-mem0.dat file not found   The image file, min-mem0.dat, does
          not exist in the root directory of the default drive or in the
          drive and/or directory you specified with the /d parameter.

          invalid parameter   At least one of the parameters on the command
          line is invalid.  Read the section, "Command Reference".

          no programs were loaded   min-mem was unable to load any of the
          programs specified in the program name list or none of them are
          TSRs.

          not enough disk space   There is not enough disk space to save a
          memory image of each TSR.  You must increase the free disk space
          on your disk or reduce the number of TSRs loaded by min-mem.

          program did not stay resident   The program loaded by min-mem did
          not stay resident in memory and cannot be reloaded from the min-
          mem menu.  If the program is a TSR, then you may have omitted a
          parameter which causes the program to stay resident.  For
          example, PC Tools requires the /r parameter to be installed as a
          TSR.  Read the section "Installation".

          program not found   At least one of the programs listed in the
          file specified by the /f parameter was not found.  Be sure that
          the path you specified for each program is correct and that each
          file has a file name extension.  Read the sections
          "Installation", "Using min-mem", and "Command Reference" for more
          information on the /f parameter.



















          16

          Notes

               When min-mem is popped up on a screen in graphics mode,
               garbage characters may be displayed around the min-mem
               window.  This is normal.  The original graphics screen will
               be restored when you exit min-mem.





















































                                                                         17

          Site License

          min-mem can be licensed on a per location basis which allows a
          company to use it on a network or use multiple copies of min-mem
          without purchasing them individually.  Pricing is dependent on
          the number of copies and is very reasonable.  Please contact
          Biologic for further information.




















































          18

          Your Turn

          We value you opinions.  Please let us know what you like and
          dislike about the min-mem program and documentation.  We're
          dedicated to developing the most innovative and useful software
          available--and selling it at reasonable prices.  Your support
          helps make this possible.

          Please send all comments and suggestions to

          Biologic 
          P.O. Box 1267
          Manassas, VA  22110
          USA

          THANK YOU.











































                                                                         19




























































          20




























































```
{% endraw %}

## VRAM.DOC

{% raw %}
```

                                                                          1

          VRAM
          Version 4.21
          User's Guide
























































          2

          Copyright   This VRAM documentation and the software are
          copyrighted with all rights reserved.  Under the copyright laws,
          neither the documentation nor the software may be copied,
          photocopied, reproduced, translated, or reduced to any electronic
          medium or machine-readable form, in whole or in part, without the
          prior written consent of Biologic, except in the manner described
          in this manual.  The unregistered version of VRAM and
          accompanying documentation may be freely copied and distributed.

          Copyright (C) Biologic 1986-1991.

          All rights reserved.  First edition printed 1986.  Printed in the
          United States.

          Software License Notice   Your license agreement with Biologic,
          which is included with the product, specifies the permitted and
          prohibited uses of the product.  Any unauthorized duplication or
          use of VRAM in whole or in part, in print, or in any other
          storage and retrieval system is forbidden.

          Licenses and Trademarks   DESQview is a registered trademark of
          Quarterdeck Office Systems, Inc.  1-2-3 and Symphony are
          registered trademarks of Lotus Corporation.  MS-DOS, Excel, and
          Windows are registered trademarks of Microsoft Corporation.  PC-
          DOS is a registered trademark of International Business Machines,
          Inc.  Quattro is a registered trademark of Borland International,
          Inc.  VRAM is a registered trademark of Biologic.  WordPerfect is
          a registered trademark of WordPerfect Corporation.


          Biologic
          7950 Blue Gray Circle
          Manassas, VA 22110-2829 
          USA
          703-368-2949
























                                                                          3

          Contents

          License Agreement and Disclaimer of Warranty  4
          Introduction  5
          Condensed Instructions  8
          Installation  9
          Examples  10
          Command Reference  11
          Notes about specific software packages  14
          Error Messages  17
          Notes  18
          Site License  19
          Your Turn  20














































          4

          License Agreement and Disclaimer of Warranty

          License agreement
          Disclaimer of warranty


          License agreement   The terms of this license agreement apply to
          you and to any subsequent licensee of this VRAM software. 
          Biologic retains the ownership of this copy of VRAM software. 
          This copy is licensed to you for use under the following
          conditions.

               You may use the VRAM software on any compatible computer,
               provided the VRAM software is used on only one computer and
               by one user at a time.

               You may not provide use of the software in a computer
               service business, network, timesharing, multiple CPU or
               multiple user arrangement to users who are not individually
               licensed by Biologic, except that you may designate any
               employee to use such products on a one employee per license
               basis.

               You may not disassemble or decompile the VRAM software.

          Disclaimer of warranty   Biologic excludes any and all implied
          warranties, including warranties of merchantability and fitness
          for a particular purpose.  Biologic does not make any warranty of
          representation, either express or implied, with respect to this
          software program, its quality, performance, merchantability, or
          fitness for a particular purpose.  Biologic shall not have any
          liability for special, incidental, or consequential damages
          arising out of or resulting from the use of this program.


























                                                                          5

          Introduction

          Description
          Expanded Memory
          Extended Memory
          Overview
          Highlights
          VRAM vs. Expanded Memory
          Requirements
          Contents of the VRAM disk


          Description   VRAM creates up to 32 megabytes of memory by using
          disk space or extended memory to simulate expanded memory.

          Expanded Memory   Expanded memory was introduced so that programs
          such as Lotus 1-2-3 could have access to memory above the 640K
          conventional memory limit.  Although the 8088 microprocessor
          cannot support more than 1 megabyte, a way was developed to let
          programs use large amounts of memory by paging in sections of
          memory as they are needed.1  Memory that is not in use is stored
          as deactivated pages on an expanded memory board.

          The original expanded memory specification, LIM EMS version 3.2,
          was developed jointly by Lotus, Intel, and Microsoft.  Soon
          after, AST and Ashton-Tate developed a similar, but enhanced,
          specification called EEMS.  These two specifications were
          replaced by LIM EMS version 4.0, which incorporated features of
          both specifications.2

          Extended Memory   Extended memory is memory above 1 megabyte that
          can be accessed when the 80286 or 80386 chip is in protected
          mode.  Since the DOS operating system runs in real mode and
          cannot execute programs in extended memory, the utility of this
          memory is limited.3

          Overview   VRAM breaks the 640K memory barrier--creating up to 32
          megabytes of expanded memory--by using disk space or extended
          memory to simulate expanded memory.  No add-on memory boards are
          required.  Instead of storing deactivated pages on an expanded
          memory board, as actual expanded memory managers do, VRAM stores
          them in a temporary file on your hard disk or in extended memory
          and copies them to conventional memory as needed, giving
                                        ____________________

               1The 80286 and 80386 processors are  limited to 1M of memory
          in real mode.  384K is reserved for video buffers and ROM.

               2Programs written for LIM 3.2 are compatible with LIM 4.0.

               3The DOS  program, vdisk.sys, can  be used to  turn extended
          memory into a ram disk.







          6

          applications the illusion that they have more memory than
          actually exists in your computer.  Except for an occasional disk
          read/write, applications will operate just as if an expanded
          memory board is present.  

          VRAM can be loaded as a memory resident program or loaded
          temporarily while using a program that requires expanded memory. 
          Optional command line parameters allow you to specify the
          expanded memory size and whether to use disk space or extended
          memory as expanded memory.

          Highlights

               Compatible with almost all programs that support any version
               of the Lotus/Intel/Microsoft expanded memory specification.

               Allows the creation of very large worksheets in Lotus 1-2-3,
               Symphony, Quattro, Excel, and other software.

               Compatible with windowing software such as Microsoft Windows
               and DESQview.

               Supports version 4.0 of LIM EMS.  All functions are
               supported, not just a subset.  

               Runs on any PC that uses PC-DOS or MS-DOS.

               Supports all fixed disk drive types, including network
               drives.

               Occupies memory only while in use.

               Allows placement of the page frame in unused memory above
               the 640K DOS limit.

          VRAM vs. Expanded Memory

               VRAM costs less than expanded memory.

               VRAM is slower that expanded memory.  Expanded memory boards
               use bank switching to swap pages between expanded and
               conventional memory almost instantaneously; VRAM must read
               and write your disk or perform extended memory block moves.

               VRAM may have to allocate a 64K page frame in conventional
               memory into which it swaps expanded memory pages.  Expanded
               memory boards use a page frame located above video memory
               and do not use conventional memory.  You can avoid using
               conventional memory for the page frame if you have 64K of










                                                                          7

               unused memory above the DOS limit.4

          Requirements

               IBM Personal Computer Disk Operating System (PC-DOS) or
               Microsoft Disk Operating System (MS-DOS) version 2.0 or
               greater.

               Minimum 256K of conventional memory.  VRAM uses 25K of
               memory and may allocate 64K for the page frame.  You must
               have enough memory left over to load any software you are
               using with VRAM.

               Fixed disk or network disk.  Disk free space must be equal
               to or greater than the amount of simulated expanded memory. 
               (required only if disk space is used to simulate expanded
               memory).

          Contents of the VRAM disk   The following files are included in
          the root directory of the distribution disk.

                    vram.exe
                    read.me

          There may also be a \freeware directory which contains
          unregistered versions of our other software products.























                                        ____________________

               4Read about the /b option in the Command Reference section.







          8

          Condensed Instructions

          The following instructions briefly describe the installation and
          use of VRAM.  If you are a knowledgeable computer user, you
          should be able to get VRAM working by following these steps. 
          More detailed information can be found in the sections,
          Installation, Examples, and Command Reference.

          1. Copy the file, vram.exe, to the directory that has your utility
             programs.

          2. To load VRAM temporarily while using a program that requires
             expanded memory, use the format

               vram [parameters] program [program parameters]

          3. To load VRAM as a memory resident program, use the format

               vram [parameters] /m

          4. Use the /s parameter to specify the amount of expanded memory
             desired.  For example, [vram /s512 /m] (don't type the brackets).

          5. Specify the /e parameter to use extended memory as expanded
             memory.  Or, if you have loaded the himem.sys driver in your
             config.sys file, use the /x parameter.  If you do not use /e
             or /x, disk space will be used to simulate expanded memory.


































                                                                          9

          Installation

          The file, vram.exe, should be copied to the directory on your
          hard disk you use for utility programs.  You should have a
          command in your autoexec.bat file which includes this directory
          in your path so that your utility programs, including VRAM, can
          be executed from any directory on your hard drive.5  The
          following installation procedure assumes you have a directory
          called \util in the root directory of drive C.

          1. Put the distribution disk in drive A.

          2. Type [copy a:*.* c:\util] (don't type the brackets).




































                                        ____________________

               5Read about the path command in your DOS manual.







          10

          Examples

               The following example instructs VRAM to create 512K of
               expanded memory using disk space, and execute Lotus 1-2-3. 
               When you exit 1-2-3, VRAM will unload itself from memory.

                    vram /s512 123

               The following command will temporarily load VRAM, turn 384K
               of extended memory into expanded memory, and execute 1-2-3.

                    vram /s384 /e 123

               The following example runs Excel after creating 1024K of
               expanded memory from disk space.  The /d parameter tells
               VRAM to put the paging file on drive D.  

                    vram /s1024 /dd: excel

               The following example loads VRAM as a memory resident
               program and creates 512K of expanded memory from disk space. 
               This expanded memory will be available to all programs until
               your PC is rebooted.

                    vram /s512 /m

               The following example turns 512K of extended memory into
               expanded memory.  WordPerfect is loaded and it retrieves the
               file, letter.wp, for editing.  The /r parameter tells
               WordPerfect to store part of itself in expanded memory.

                    vram /s512 /e wp letter.wp /r



























                                                                         11

          Command Reference

          Format
          Parameters


          Format   The format of the VRAM command is

          VRAM [parameters] [program] [program parameters]

          where

          [parameters]
               specifies the optional VRAM parameters described in the
               following section.

          [program]
               specifies the program you want to run with VRAM if you are
               not installing VRAM as a memory resident program.

          [program parameters]
               specifies the parameters for the program you are running
               with VRAM if you are not installing VRAM as a memory
               resident program.

          Parameters   The following parameters can appear in the VRAM
          command.  

          /?
               Display help.

          /dd:path
               Drive/path for paging file.  This parameter specifies the
               location of the paging file, vram0000.dat,  when using disk
               space to simulate expanded memory.  If you omit this
               parameter, the paging file is placed in the root directory
               of the default drive.  For example, this parameter places
               the paging file in the root directory of drive D, [/dd:]. 
               If you need to put the file in a directory other than the
               root, you can specify a path also.  For example,
               [/dd:\private\].

          /e
               Use extended memory.  With this parameter, extended memory
               is used to simulate expanded memory.  If this parameter is
               omitted, disk space is used instead.
          /f
               Erase paging file when exiting.  This parameter instructs
               VRAM to erase the paging file when it exits.  In normal use,
               you should not use this parameter so that VRAM won't have to
               create the file every time it starts.  You can also delete
               the paging file with the DOS ERASE command.







          12


          /x
               Use XMS memory.  With this parameter, XMS memory
               is used to simulate expanded memory.  XMS memory is extended
               memory that is under the control of the device driver,
               himem.sys.  If you load himem.sys in your config.sys file,
               you should use the /x option instead of /e.

          /m
               Install as a memory resident program.  This parameter tells
               VRAM to install itself permanently in memory.  The expanded
               memory created by VRAM will be available to all programs
               until your PC is rebooted.  If you do not specify this
               parameter, VRAM will remain loaded only while you run the
               program you entered on the VRAM command line and, therefore,
               will not occupy memory when not in use.

          /skbytes
               Expanded memory size.  This parameter specifies the amount
               of simulated expanded memory in 1K increments.  128K of
               expanded memory is created if this parameter is omitted. 
               For example, 1024K of expanded memory would be specified by
               [/s1024].

          Advanced Parameters   The following options are provided to
          increase flexibility only and are not required.  It is not
          necessary that you know how to use them.

          /bsegment
               Page frame base address.  segment specifies the hexadecimal
               segment address of the start of the page frame.  The page
               frame is a 64K buffer into which expanded memory pages are
               swapped.  If you omit this parameter, VRAM allocates 64K of
               conventional memory for the page frame.  

               This parameter is useful only if you have 64K of unused
               memory between 640K and 1M, such as memory that is provided
               on expansion boards for ram disks.  VRAM does not test if
               this memory exists or if it is unused.  For example, to use
               a block of memory immediately above 640K, use the parameter
               [/bA000].

          /c
               Map conventional memory.  This parameter instructs VRAM to
               allow mapping of expanded memory pages into all of
               conventional memory--not just the page frame.  Use this
               parameter only if an application requires it.









                                                                         13
          /g
               Ignore dos critical flag.  This parameter instructs VRAM to
               ignore the DOS critical flag when using DOS to read and
               write the paging file.  It must be specified when using VRAM
               in a DESQview window.

               Since DOS is not re-entrant and may fail if processing more
               than one request at a time, VRAM checks the DOS critical
               flag before performing a mapping request and will return a
               busy status if it finds that DOS is already running.6  This
               will occur only when using a memory resident program that
               utilizes expanded memory or when using windowing software
               that performs multitasking.  Although DESQview may interrupt
               DOS while allocating processing time between applications,
               it is done intelligently, making it safe for VRAM to call
               DOS.

          /h
               align page frame on multiple of 200h.  This parameter is
               ignored if /b is used.

          /i
               simulate lim 3.2.  With this option, VRAM supports version
               3.2 of the Lotus/Intel/ Microsoft Expanded Memory
               Specification instead of version 4.0.  Use this option when
               running VRAM with Microsoft Windows.


















                                        ____________________

               6VRAM  does  not  use  DOS  when using  extended  memory  to
          simulated expanded  memory and does  not check  the DOS  critical
          flag.







          14

          Notes about Specific Software Packages7

          Lotus 1-2-3 and Symphony
          Quattro
          Excel
          DESQview
          Windows
          WordPerfect


          Lotus 1-2-3 and Symphony   VRAM works exceptionally well with 1-
          2-3 and Symphony.  Although simulated memory is slower than
          actual expanded memory, most operations, such as moving around a
          worksheet and entering data, are accomplished in a comparable
          amount of time.

               To see if 1-2-3 is utilizing expanded memory, use the 1-2-3
               command [/ worksheet status].  In Symphony the command is
               [services settings].

               1-2-3 and Symphony must use conventional memory to store
               particular parts of a worksheet.  Therefore, it is possible
               to run out of conventional memory, and receive the Out of
               Memory error, even though expanded memory is available.

               Do not copy many rows in one operation while using VRAM.  If
               you need to copy a range with a large number of rows, copy a
               few rows of the range at a time.  

               When copying ranges, Lotus 1-2-3 and Symphony allocate
               memory for new cells in columnwise order.  If you copy a
               large number of rows in one operation, adjacent cells along
               each row may be located in different pages of expanded
               memory.  Since 1-2-3 and Symphony perform many operations,
               such as copying ranges and saving worksheets, in rowwise
               order, this may cause an excessive amount of memory paging.

               It is suggested that you experiment with copying large
               ranges to learn how many rows can be copied without causing
               a problem.

               For the reason discussed above, do not recalculate in
               columnwise order.

               Create enough expanded memory so that you always have plenty
               of memory available.  1-2-3 and Symphony tend to do more
               paging when running out of expanded memory.

                                        ____________________

               7VRAM  is compatible with almost all  programs, not just the
          ones listed in this section.







                                                                         15

               Do not sort a database while running VRAM.  Sorting causes a
               large amount of memory paging and may take a very long time.

               When using Lotus HAL with VRAM, turn undo off.  With the
               undo feature on, HAL will do more paging.  Although VRAM
               will work fine with undo on, 1-2-3 will take more time to
               respond to your keystrokes.

               Lotus HAL will ignore expanded memory if it is less than
               256K.

          Quattro   Same as Lotus 1-2-3 and Symphony.

          Excel   Same as Lotus 1-2-3 and Symphony.

          DESQview

               VRAM can be run in a DESQview window to give a single
               application simulated expanded memory.  VRAM should not be
               executed before starting DESQview and used for program
               swapping.

               Specify the /g parameter.  Details about this parameter can
               be found in the Command Reference section.

               For example, to run Lotus 1-2-3 with 512K of simulated
               expanded memory, select the DESQview Change a Program option
               and set the configuration as follows:8

               Program...: c:\util\vram.exe
               Parameters: /s512 /g 123
               Directory.: c:\util

               If you'd like to run 1-2-3 in a window, you can specify the
               DESQview loader for 1-2-3 on the parameters line:

               Parameters: /s512 /g ls-load \123\123.com

               It is not beneficial to load VRAM before starting DESQview
               and use simulated memory as a program swap area.  DESQview
               already provides the ability to swap programs to disk space,
               either to a hard disk or to an extended memory ram disk.

               Do not install VRAM as a memory resident program.

               Don't run VRAM in more than 1 window.

                                        ____________________

               8This example assumes  that 1-2-3  is in  a directory  named
          \123 on  drive C and that  vram is in a directory  named \util on
          drive C.  The directory, \123, must be in your path.







          16

          Windows

               VRAM can be used to supply expanded memory for applications
               programs within Windows; it cannot be used for multitasking.

               Specify the /i parameter so that VRAM simulates LIM 3.2
               memory.

               Windows will not show any expanded memory in the status
               window although it is available to applications.

          WordPerfect

               WordPerfect is capable of storing overlay files and
               documents in expanded memory or on a disk.  Therefore, VRAM
               provides a performance advantage only when turning extended
               memory into expanded memory.

               Use the WordPerfect /r parameter if you want to load overlay
               files into expanded memory.







































                                                                         17

          Error Messages

          /s option not allowed with unregistered version   The default
          expanded memory size of 128K cannot be adjusted with the
          unregistered version.  Read the file vram1.doc for information on
          obtaining a registered version.

          can't get dos critical flag address   VRAM was not able to obtain
          the address of the DOS Critical Flag which indicates whether or
          not DOS is in use.

          can't install   VRAM can't be installed on your system.

          invalid expanded memory size   Expanded memory size is specified
          in 1K increments and must be between 64 and 32768.

          invalid parameter   At least one of the parameters on the command
          line is invalid.  Read the section, Command Reference.

          not enough disk space   You do not have enough disk space to
          create the paging file.  Free space on your disk must be equal to
          or greater than the expanded memory size.

          not enough extended memory   There is not enough extended memory
          to simulate the amount of expanded memory requested.  If you
          specified an extended memory address with the /a parameter, there
          is not enough extended memory following that address.

          not enough memory   There is not enough conventional memory for
          VRAM.  Read about memory requirements in the section,
          Introduction.

          program not found   The program specified on the VRAM command
          line was not found in the current directory or in the path.  The
          program name you specified must be an exe or com file.
          If you use a batch file to execute a program, put the vram
          command in the batch file.

          vram is already installed   VRAM is already installed as a memory
          resident program.



















          18

          Notes

               VRAM uses DOS to read and write your hard disk.  This
               greatly improves its reliability and its compatibility with
               non-IBM PCs and non-standard hard disks at a cost of a small
               reduction in speed.  For this reason,  VRAM is not
               compatible with memory resident programs that use expanded
               memory while interrupting DOS.



















































                                                                         19

          Site License

          VRAM can be licensed on a per location basis which allows a
          company to use it on a network or use multiple copies of VRAM
          without purchasing them individually.  Pricing is dependent on
          the number of copies and is very reasonable.  Please contact
          Biologic for further information.




















































          20

          Your Turn

          We value you opinions.  Please let us know what you like and
          dislike about the VRAM program and documentation.  We're
          dedicated to developing the most innovative and useful software
          available- and selling it at reasonable prices.  Your support
          helps make this possible.

          Please send all comments and suggestions to

          Biologic 
          P.O. Box 1267
          Manassas, VA  22110
          USA

          THANK YOU.











































```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## SHAREMAG.TXT

{% raw %}
```
              S H A R E W A R E  M A G A Z I N E
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Shareware Magazine has distinguished itself as the only internationally
distributed periodical devoted to the use and business of shareware.
Shareware Magazine provides detailed reviews of new products,
hard-hitting comparisons of shareware programs with regular retail
software, and timely information about changes in the industry and the
latest technology.

Intriguing columnists and regular features add to the excitement.  The
beginners section sheds light on new user's concerns regarding
everything from choosing the right operating system to alleviating the
intimidation of using on-line systems.

Educational sections focus on how low cost shareware can aid in
classroom learning, curriculum development, and as a forum for
discussing the impact of computers and technology in schools.

Graphics Gallery renders expert advice and suggestions on how to better
work with graphics, desktop publishing, CAD systems, and the Windows
environment.

Programmers benefit from others experience in developing new programs or
polishing existing ones as well as choosing the right programming
language.

And columnists provide that subjective component, sometimes
controversial, that calls for a closer look at the way we compute and
how shareware effects what we do.

Published bimonthly, Shareware Magazine is available on a subscription
or at your local newsstand or computer bookstore.  In conjunction with
PC-SIG, there are special benefits for subscribers as well as
opportunities for discount purchases from PC-SIG.


To Order, in the U.S.A.: Call 800-245-6717 and ask Customer Service.

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.
```
{% endraw %}

## SIGORDER.TXT

{% raw %}
```
                                      [B]

FROM:  ___________________________

       ___________________________

       ___________________________
[A]                                                                         [B]
       ___________________________


                                  PC-SIG Inc.
[A]                                                                         [B]
                            1030-D East Duane Avenue

                               Sunnyvale  California

                                     94086


























Fold - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - Fold

       HOW TO USE THIS RETURN ENVELOPE

       1.  Place any other pages underneath this page.
       2.  Using the Fold lines (above) as a guide, fold this flap under.
       3.  Fold the address flap so it covers this flap.
       4.  Tape or staple the envelope at the two spots marked [A].
       5.  Slip in any other enclosures (business cards, cheques, etc.).
       6.  Tape or staple the envelope at the spots marked [B].














THANKS FOR TAKING THE TIME TO PRINT THIS FORM -*- MAIL YOUR ORDER TO:
PC-SIG Inc. 1030-D East Duane Avenue Sunnyvale CA 94086






---------------------------------------------------------------------

     Do not mail cash.   Please allow four weeks for processing.

---------------------------------------------------------------------




Check the items desired:

PC-SIG Disks - Member $2.49 for 5.25" or $2.99 for 3.5"
           Non-member $3.25 for 5.25" or $3.75 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $12.95  ______

Super Saver Membership                                 $34.95  ______
(includes a 1 year subscription to Shareware Magazine )
(also The Encyclopedia of Shareware, and 5 free disks )

The Encyclopedia of Shareware special price at         $14.95  ______

The Essential Home & Business Collection for           $59.00  ______

*** PC-SIG Library on CD-ROM 11th Edition  ***         $159.00 ______
              NEW LOWER PRICE!

Upgrade to the 11th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $85.00  ______

Upgrade from ANY other shareware CD-ROM just           $99.00  ______

                                                    Subtotal   ______

If you want 3-1/2 inch disks please add .25 cents per disk     ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD call (800)245-6717
Ask for operator #2316





                                *****




              TO PRINT THIS ORDER FORM, PRESS ANY KEY AND
              THEN "Quit" ONCE TO RETURN TO THE MAIN MENU.
                     SELECT "Print Reply Form."
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3270

     Volume in drive A has no label
     Directory of A:\

    MEMKIT   ZIP    138979   2-02-92   1:59p
    DISKPACK ZIP     54827   3-03-90   9:38a
    COMX     ZIP     32578   3-03-90   9:38a
    UNBLINK  ZIP      2460   7-14-90  10:36a
    CDROM    TXT      3972   6-24-92   1:25p
    SHAREMAG TXT      1837   1-21-92   6:11a
    PCSIG    TXT      2335   1-21-92   6:09a
    GO       EXE     26022   1-10-92  12:14p
    SIGORDER TXT      3332   6-25-92   2:28p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO-FORM  DAT      3109   6-29-92   3:26p
    GO-STRT  DAT       545  12-03-92   9:57a
           12 file(s)     293524 bytes
                           23552 bytes free
