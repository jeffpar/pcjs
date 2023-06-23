---
layout: page
title: "PC-SIG Diskette Library (Disk #893)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0893/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0893"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRIVATE LINE AND WEAK LINK"

    Information is the currency of today's world.  Protect your data with
    THE PRIVATE LINE, an encryption/decryption program.
    
    When encrypting or decrypting a file, THE PRIVATE LINE prompts you
    before overwriting an existing file.  Single and double encryption is
    provided, the latter involving the encryption of an encrypted file,
    preferably with a different key.
    
    An encrypted file usually contains binary data, but some bulletin
    boards, such as CompuServe and EasyLink, require ASCII text files. THE
    PRIVATE LINE can convert a file from binary format to printable ASCII
    and then print it.  Included is an option which demonstrates compliance
    with the 171 tests required to meet the Data Encryption Standard of the
    NBS.
    
    Use WEAKLINK to transfer files between your PCs via RS232 serial
    ports.
    
    Its primary use is to allow file transfers between two machines that
    have different or non-removable media.  For example, file transfers can
    be made from the 3.5" floppy drive of one machine to the 5.25" drive of
    another.  When installed and activated, the master unit can access and
    transfer files to or from any or all of the drives of the slave unit
    incuding RAM disks.  Transfer speed of data is selectable from 1200 to
    115K baud.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDCOM.DOC

{% raw %}
```
                       Adding Communication ports


        AC.SYS can be inserted into your CONFIG.SYS file to add non-standard 
communication ports for use as COM1, COM2, COM3, or COM4.  If your serial card 
uses a hardware port address which your BIOS ROM does not know then that card 
will be unavailable to DOS,  The Weak Link  and  The $25 Network.  With this 
program you can give the BIOS its proper address.  Serial card port addresses 
are kept as follows: 

                word at 40h:0  = COM1
                        40h:2  = COM2
                        40h:4  = COM3
                        40h:6  = COM4


        This program merely "pokes" a proper port address to the appropriate 
memory address.  You must know your card's port address in order to use this 
program.  Usually, a card will have several different address options which are 
set via jumpers or DIP switches.  Your manual is usually a good place to find 
this information but I have found several Taiwanese manuals with bad 
information.  I have several boards which are almost identical but the later 
versions have COM3 at 1F8h even though the manuals clearly state the COM3 
address of the card is 2E8h.  Evidently the board was revised but not the 
manual.  

        Once you find out your hardware's port address then add AC.SYS to your 
CONFIG.SYS file (with the appropriate parameters) prior to The Weak Link or 
The $25 Network. For example: 

                       DEVICE=AC.SYS COM2=1F8 COM3=2E8
                       DEVICE=PM.SYS COM2                    <-- Weak Link

        This will add COM2 and COM3.  Characters can be entered in upper or 
lower case. You cannot add the ":" to the COM name and you cannot add a space 
before or after the "=" sign.  The port address must be a hex number.  If the 
port address you give is not found then an error message will be printed and 
that parameter will be skipped.  

        Also note that you can use this program to expand the number of 
available ports beyond COM4.  Immediately after the four communication port 
addresses are kept 4 parallel port addresses.  If you are using only LPT1 then 
you could use the LPT4 slot as COM8, LPT3 as COM7, and LPT2 as COM6.  It would 
be best to use COM8 first, then COM7, etc.  But remember that all port 
addresses must be different.  Also remember that a special DOS device driver 
must be written in order for DOS to use anything above COM2.  These extended 
ports are only available to programs which simply need to know port addresses, 
such as The Weak Link and The $25 Network.  


                                                Don Jindra
                                                Information Modes
                                                P.O. Drawer F
                                                Denton, Texas  76202
                                                Ph. 817-387-3339
```
{% endraw %}

## DIAGNOSE.DOC

{% raw %}
```
                               RS232 TEST


        This program will test various RS232 hardware functions.  If it runs OK 
then The Weak Link and The $25 Network should run on the hardware.  

  1) hook up the cable between machines
  2) run  TMT.COM on one machine
  3) run  RCV.COM on the other machine
  4) the screen will display all errors

RCV runs continuosly until any key is pressed.  It prints "z" characters while 
the other machine is dormant. TMT runs once and then exits to DOS.  Both 
programs assume you are using COM1 to communicate. If not then enter the COM 
number on the command line when you run the program: 


        A>TMT COM1

        or

        A>RCV COM2

        or

        A>TMT 3


        The TMT program initiates the test.  The 1st test is to make sure the 
COM number you specify is really installed.  Then each RS232 card that is 
installed is printed out along with its hardware port address.  The total 
number of ports is then printed. (To find out what ports are on a machine, run 
RCV.)  The 2nd test is of the data channel.  If this test fails then the cable 
may be bad, or it may not be a null modem cable, or it may be hooked up to the 
wrong port.  MAKE SURE YOU DO NOT HAVE TWO CARDS INSTALLED AT THE SAME PORT 
ADDRESS. Unfoutunately a program cannot test for this possibility.  But with 
the proliferation of Multi I/O cards it is a common mistake to put two 
different cards in a computer with the same RS232 port address. If your 
computer has more RS232 connectors than the number of ports RCV shows you have 
installed then it is possible you have 2 ports at one address.  

        After the data line test is the DSR-DTR line test.  If this test fails 
then the cable you have is probably missing these two lines or they are not 
crossed between the machines.  

        The last test is a string transfer from RCV to TMT.   The test string 
will be printed to the TMT screen.  If this message appears then the test is 
good and "CHECK OK" will be printed to both screens.  If you encounter errors 
which you cannot decipher or fix then please call.  

                                        Don Jindra, Owner
                                        Information Modes
                                        P.O. Drawer F
                                        Denton, Texas  76202
                                        Ph. 817-387-3339
```
{% endraw %}

## FILE0893.TXT

{% raw %}
```
Disk No:  893
Disk Title: Private Line and Weak Link
PC-SIG Version: S2.2

Program Title: Private Line, The
Author Version: 7.02
Author Registration: $30.00
Special Requirements: RS232 serial port and a modem.

Information is the currency in today's world.  Protect your data with
THE PRIVATE LINE, an encryption/decryption program.

When encrypting or decrypting a file, THE PRIVATE LINE prompts you
before overwriting an existing file.  Single and double encryption is
provided, the latter involving the encryption of an encrypted file,
preferably with a different key.

An encrypted file usually contains binary data, but some bulletin
boards, such as CompuServe and EasyLink, require ASCII text files.  This
program is able to convert a file from binary format to printable ASCII
and then print it.  Also included is an option which demonstrates
compliance with the 171 tests required to meet the Data Encryption
Standard of the NBS.

Program Title: Weak Link
Author Version: 1.1
Author Registration: $15.00
Special Requirements: RS232 serial port and cable.

Use WEAKLINK to transfer files between your PCs via RS232 serial
ports.

Its primary use is to allow file transfers between two machines that
have different or non-removable media.  For example, file transfers can
be made from the 3-1/2" floppy drive of one machine to the 5-1/2" drive
of another.  When installed and activated, the master unit can access
and transfer files to or from any or all of the drives of the slave unit
incuding RAM disks.  Transfer speed of data is selectable from 1200 to
115K baud.

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
║           <<<< Disk No 893 The PRIVATE LINE and WEAKLINK >>>>           ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for PRIVATE LINE, Type:                      ║
║                  COPY PRIVATE.DOC PRN  (press enter)                    ║
║                                                                         ║
║ To run the program PRIVATE LINE, Type: PRIVATE (press enter)            ║
║                                                                         ║
║ To print the documentation for Weaklink, Type:                          ║
║                  COPY WEAKLINK.DOC PRN  (press enter)                   ║
║                                                                         ║
║ To start WEAKLINK, install PM.SYS and CONFIG.M on master unit, NET0.SYS ║
║ and CONFIG.S on slave unit. Connect PC's with modem cable. Type "PS" on ║
║ slave unit. (See documentation for optional parameters).                ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## LISTER.BAS

{% raw %}
```bas
100 ' list asm
102 CLS:PRINT "Printer Not Ready"
105 LPRINT CHR$(27);CHR$(66);CHR$(2);:WIDTH "LPT1:",130
110 CLS:INPUT "File Name";I$
120 OPEN I$ FOR INPUT AS #1
125 LIN=0
126 ON ERROR GOTO 400
129 '
130 LINE INPUT #1,I$
135 IF MID$(I$,1,4)=";off" THEN GOSUB 300
140 IF MID$(I$,1,5)=";page" THEN LPRINT CHR$(12);:GOSUB 200
150 LPRINT TAB(12);I$
155 LIN=LIN+1
160 GOTO 130
198 '
199 '
200 LINE INPUT #1,I$:IF I$=""THEN 200
205 IF I$<>";off" THEN RETURN
206 GOSUB 300
210 RETURN
298 '
299 '
300 LINE INPUT #1,I$:IF MID$(I$,1,3)<>";on" THEN 300
301 LINE INPUT #1,I$
310 RETURN
398 '
399 '
400 SYSTEM
```
{% endraw %}

## PRIVATE.DOC

{% raw %}
```














                              THE PRIVATE LINE:(TM)

                          A User's Guide to a MS-DOS

                           Data Encryption Standard

                                Implementation

                                  Version 7.02





                                      by
                                       
                               Surry P. Everett
                                       
                                       
                                       
                                       
                                       
                                       
                                 Sep 30, 1989














_________________________________________________________________
EVERETT Enterprises, 7839 Vervain Court, Springfield, VA 22152






     Copyright (c) 1985, 1986, 1987, 1988, 1989 by Everett Enterprises.  


      All rights reserved worldwide.  No part of this publication may be
      reproduced, transmitted, transcribed, stored in a retrival system,
      or translated into any language or computer language, in any form
      or by any means, electronic, mechanical, magnetic, optical,
      chemical, manual or otherwise, without the prior written permission
      of Everett Enterprises, 7839 Vervain Court, Springfield, VA 22152.

        
Non-registered users are granted a limited license to use this product on a
trial basis for evaluation purposes, and to copy the program for trial use by
others subject to the following limitations:


      The program is distributed in unmodified form, complete with
      documentation.

      No fee, charge or other consideration is required or accepted.

      The program is not distributed in conjunction with any other product.






                             Single CPU License


      Registration of The Private Line(TM) licenses you to use the product on
      one CPU. 


                                  DISCLAIMER

      Everett Enterprises makes no representations or warranties with respect
      to the contents hereof and specifically disclaims any implied warranties
      of merchantability or fitness for any particular purpose.  Further,
      Everett Enterprises reserves the right to revise this publication and to
      make changes from time to time in the content hereof without obligation
      of Everett Enterprises to notify any person of such revision or changes.

                                  TRADEMARKS

      CP/M is a registered trademark of Digital Research.
      CompuServe is a trademark of CompuServe Inc.
      EasyLink is a service mark of Western Union Telegraph Company.
      MS-DOS is a registered trademark of Microsoft Corp.
      PROCOMM is a trademark of PIL Software Systems.
      QMODEM is a trademark of the Forbin Project.
      WORDSTAR is a registered trademark of MicroPro Intl Corp.
      The Private Line is a trademark of Everett Enterprises.






                                REGISTRATION


The Private Line(TM) is distributed as User-Supported Software.  We encourage 
you to try the program and share it with anyone as long as:

      The program is distributed complete and unchanged, accompanied by the
      documentation.

      No fee, charge or other compensation is requested or received except by
      Everett Enterprises.

      The Private LineTM is not distributed in conjunction with any other
      product.


If you use our program for anything other than evaluation purposes, you are
required to register such use.  A printed User's Guide will be mailed upon
registration.  You may register by sending a check or money order for $30.00
to:


                              Everett Enterprises
                              7839 Vervain Court
                             Springfield, VA 22152


Program disks are not included in the registration fee.

If you or your company need an invoice in order to generate payment, one is
included in this manual.


















          Privacy, like freedom, is not missed until it's not there.


















                      The Private Line(TM) is dedicated to 
                                Dorothy Everett
                 who shares her friend with a machine or two.







We have enclosed invoice and order forms to simplify processing your orders. 
Use the order form to place an order with us.  Use the invoice within your
organization to generate payment for The Private Line(TM) registrations.

We are now providing the program on diskettes for your convenience.  Please 
note that the $10 disk fee covers media costs, postage and handling only.  It 
does not cover registration.  If you are using the program for other than 
evaluation purposes, you are required to register.

          Business, commercial or governmental use of non-registered
          copies of The Private Line(TM) is strictly forbidden.  Write 
          for details of site or corporate licensing.







                                Invoice Form





          Remit to:          Everett Enterprises              
                             7839 Vervain Court
                            Springfield, VA 22152
                               (703) 866-3914




          Sold to:                       Ship to:
                   --------------------           --------------------

                   --------------------           --------------------

                   --------------------           --------------------



          ============================================================
          Date:                        PO #:
          ============================================================
           Quan          Description                  Unit    Extended
          ------------------------------------------------------------
               |                                   |        |
               |  The Private Line Registration    | $30.00 | $
          -----|                                   |        |
               |  The Private Line Evaluation Disk | $10.00 | $
          -----|                                   |        |
               |  The Private Line User's Guide,   | $ 6.00 | $
          -----|  printed version                  |        |
          ------------------------------------------------------------

                                                       Total: $

          Orders outside the U.S.: Add $15, send check drawn on U.S. 
                     bank in U.S. dollars, or international money order
                     in U.S. dollars.







                                   Order Form



          Make check         Everett Enterprises           
          payable to:        7839 Vervain Court
                            Springfield, VA 22152

          ============================================================
          Date:                          PO #:
          ============================================================
           Quan          Description                  Unit    Extended
          ------------------------------------------------------------
               |                                   |        |
               |  The Private Line Registration    | $30.00 | $
          -----|  (Includes printed User's Guide,  |        |
               |  but does not include disk)       |        |
               |                                   |        |
               |  The Private Line Evaluation Disk | $10.00 | $
          -----|     (current version, manual on   |        |
               |      disk)                        |        |
               |                                   |        |
               |  The Private Line User's Guide,   | $ 6.00 | $
          -----|  printed version                  |        |
          ------------------------------------------------------------

                                                       Total: $

          Payment by: ( ) Check   ( ) Money Order   

               Name:
                     ------------------------------------------------
            Address:
                     ------------------------------------------------
                   :
                     ------------------------------------------------

          Orders outside the U.S.: Add $15, send check drawn on U.S. 
                     bank in U.S. dollars, or international money order
                     in U.S. dollars.


          Orders may also be placed using CompuServe: 70320,107






                              Information Request


          Mail to:           Everett Enterprises          
                             7839 Vervain Court
                            Springfield, VA 22152

          Please send information regarding corporate and site licenses.


               Name:
                     -------------------------------------------------
              Title:
                     -------------------------------------------------
            Company:
                     -------------------------------------------------
            Address:
                     -------------------------------------------------
                   :
                     -------------------------------------------------
               City:
                     -------------------------------------------------
              State:
                     -------------------------------------------------
                Zip:
                     -------------------------------------------------
          Day Phone:
                     -------------------------------------------------

          Estimated copies needed:
                                   -----------------------------------
          Possible uses:
                         ---------------------------------------------

                         ---------------------------------------------

                         ---------------------------------------------

                         ---------------------------------------------
          Questions:
                     -------------------------------------------------

                     -------------------------------------------------

                     -------------------------------------------------

                     -------------------------------------------------

                     -------------------------------------------------






                              Table of Contents


       Section                                            Page

   I.  Introduction                                         1

       A.  What is it?                                      1

       B.  Who needs it?                                    1

  II.  Operating The Private Line(TM)                       2

       A.  Receiving The Private Line(TM)                   2

           1.  Making a back-up copy                        2
           2.  Floppy disk system                           2
           3.  Hard disk system                             3
  
       B.  Using The Private Line(TM)                       3

           1.  Single file encryption                       3
           2.  Single file decryption                       9
           3.  Displaying files                             9
           4.  Purging files                               10
           5.  Displaying disk directories                 13
           6.  Double file decryption/encryption           14
           7.  Converting files to ASCII format            15
           8.  Converting files to binary format           16
           9.  Printing files                              17
          10.  Disk write verify toggle switch             17
          11.  Key entry echo toggle switch                19
          12.  Creating a sub-directory                    19
          13.  Changing the current sub-directory          20
          14.  Removing a sub-directory                    21
          15.  Erasing a file from a sub-directory         22
          16.  Verification of compliance with the
               Data Encryption Standard                    23
          17.  Selecting Alphabetic or Hexadecimal keys    28
          18.  Changing Purging Status                     29
          19.  Saving Switch Settings                      30
          20.  Selecting Command Line exit action          31
          21.  Changing File Re-use Status                 32
          22.  DES Modes of Operation                      33
                          
               Electronic Code book                        33
               Cipher Block Chaining                       34
               Cipher Feedback                             35
               Output Feedback                             36







                         Table of Contents (continued)


       Section                                            Page


            23.  Short Block Processing                    36
            24.  Initialization Values                     38
            25.  Speaker Switch Setting                    38
            26.  Filename Display Status                   39

       C.  Command Line execution                          40

           1.  Encryption                                  40

                   Using alphabetic keys
                   Using hexadecimal keys

           2.  Decryption                                  40

                   Using alphabetic keys
                   Using hexadecimal keys

           3.  Convert file to ASCII form                  41
           4.  Convert file to Binary form                 41
           5.  Command line exit action                    41

       D.  Other Aspects of the Private LineTM             41

           1.  Selection of keys                           41
           2.  Protection of keys                          41
           3.  Destruction of unencrypted data             42

 III.  Requirements                                        43

  IV.  References                                          44

   V.  Problem Report                                      45

  VI.  Changes and Updates                                 46

 VII.  Index                                               49






                              I.  Introduction

A.  What is The Private Line(TM)?

     The Private Line(TM)  is a software implementation of the Data Encryption
Algorithm using the Data Encryption Standard (DES) published by the National
Bureau of Standards, U.S. Department of Commerce (NBS).  The Private Line(TM) 
will decrypt files and messages encrypted by either hardware or other software
implementations of the DES which meet NBS specifications.  Files of either text
or object code may be easily encrypted or decrypted.  

     The Private Line(TM) provides a secure means of transmitting and storing
messages and MS-DOS files without the danger of having an uninvited person read
them.  It provides a remedy to that age-old fear of having some one, be it a too
nosy neighbor on a party line, hackers breaking a computer bulletin board's
safeguards, or your 'friendly' big brother, reading your private material.

     In order for a file which has been encrypted by The Private Line(TM) to be
transmitted to another user, a communications package, such as XMODEM by Ward
Christensen (which is in the public domain), KERMIT, PROCOMM or QMODEM and a
modem may be needed.  The Private Line(TM) works without them but it will not
allow one to up or download files from CompuServe or the Source.  By using the
expansion option of The Private Line, one may send encrypted messages on
EasyLink, telegraph networks and other standard telecommunications networks and
bulletin boards such as CompuServe and the Source in ASCII form.  

B.  Who needs The Private Line(TM)?

    Anyone who transmits MS-DOS files of messages, data, or executable programs
that are subject to be read, viewed, copied or otherwise accessed by people
other than the intended recipient.

     Users who communicate by bulletin board or other electronic systems such
as Telex or EasyLink may wish to use The Private Line.  Writers who submit
articles over networks such as CompuServe or the Source should consider using
The Private Line.  Anyone who has sensitive data laying around on a diskette
should encrypt it in order to prevent unauthorized access.  People who develop
software in teams and communicate by leaving messages on networks should use
The Private Line.  People such as doctors and lawyers who keep personal
financial or other sensitive records on diskettes, or on line, either on hard
disks, bulletin boards, or otherwise, should use The Private Line.

     In short anyone should use The Private Line who has something that the user
does not want to share, be it a message, a program, or just personal data.






                       II.  Operating The Private Line(TM)


A.  Receiving The Private Line.

    1.  Making a back-up copy.  It will arrive on a diskette readable by your
computer system.  Before using The Private Line you should, for your own
protection, make a back-up work copy of the distribution diskette and store the
original in a safe place.  Remember that the User's License allows you to make
as many copies as you need for backup purposes only (if you registered your use
of The Private Line) or to give away for evaluation purposes.  Use a file copy
program, such as MS-DOS's COPY, to make the copy and verify that it is
accurately copied.  A MS-DOS command such as COPY A: B: will copy all files on
The Private Line original diskette.  Remember that The Private Line does not
have a copy of the MS-DOS operating system on it and that the backup diskette
must be formatted before it can be used to store a copy of The Private Line. 
If you need additional help, refer to your MS-DOS system documentation on FORMAT
and COPY or refer to one of the MS-DOS references listed in Section V of this
manual.  In short, take the following steps to make a back-up copy:

        a.  Format a blank diskette and copy MS-DOS to it using FORMAT.

        b.  Put the new diskette containing MS-DOS on Drive A: and put The
Private Line original diskette on Drive B:.

        c.  Execute the command COPY B:*.* A:.  All files on The Private line
will be copied to your backup copy.  The following files are on The Private Line
diskette:

            (1)  PRIVATE.EXE - The heart of The Private Line.  This is the
executable program which one uses.

            (2)  MSG.DAT - additional information and a sample message in clear
text and 

            (3)  MSG.ENC - sample message in encrypted form.

            (4)  Read.me - any last minute information from Everett Enterprises.

        d.  Execute the command COMP A: B:.  All files on The Private line
original diskette will be compared to your backup copy.  

        e.  Put The Private Line original diskette in a secure, safe place.

     2.  Floppy disk system.  Begin using The Private Line by inserting the
diskette containing the work copy of The Private Line into a disk drive and by
typing 'X:PRIVATE' after the MS-DOS prompt and pressing RETURN.  'X' is the
letter designator of the disk drive in which you inserted the diskette.  The






Private Line will begin execution just like any other executable MS-DOS file. 
The Private Line will provide easy, clear and user-friendly instructions as it
is used.

    3.  Hard disk system.

        a.  Create a subdirectory called 'C:\tpl' using the MS-DOS command,
MKDIR.

        b.  Insert the working copy of The Private Line into drive A and type:
copy a:*.* C:\tpl.  Press RETURN and all files contained on the diskette will
be copied to the correct sub-directory.

        c.  Edit or create the autoexec.bat file contained on the root directory
on the boot drive so that it will include a path command which requires the
operating system to check the sub-directory, 'C:\tpl'.  The path line in the
autoexec.bat file will look similar to: 'path C:\tpl'.  If there are multiple
entries in the path command, each entry is separated with a semi-colon.

        d.  After editing the autoexec.bat file, reboot the system by pressing
the CNTL, ALT, and DEL keys at the same time.

        e.  Begin using The Private Line by typing 'PRIVATE' after the MS-DOS
prompt and pressing RETURN.  The Private Line will begin execution just like
any other executable MS-DOS file.  The Private Line will provide easy, clear
and user-friendly instructions as it is used.

B.  Using The Private Line.

    1.  Single file encryption:

        a.  Insert the diskette containing the work copy of The Private Line
into a disk drive.  If the disk drive is not the currently logged disk drive,
type the letter designator (A-P) of the disk drive being used, followed by a
colon.  Press RETURN.

        b.  Type 'PRIVATE' after the MS-DOS prompt and press RETURN.  (Note:
some keyboards use ENTER or CARRIAGE RETURN, rather than RETURN).  The Private
Line will begin execution by displaying a copyright notice which will quickly
be replaced by the master menu for The Private Line (see Figure 1).

        c. Press the letter 'A' (either upper or lower case) to encrypt a file.






____________________________________________________________________________
                          THE PRIVATE LINE

                            MASTER MENU


    A.  Single File Encryption         G.  Convert File to ASCII
    B.  Single File Decryption         H.  Convert File to Binary
    C.  Return to MS-DOS               I.  Double File Encryption
    D.  Display File in Hex Format     J.  Double File Decryption
    E.  Purge File from Disk           K.  Print Disk File
    F.  Display Disk Directory         L.  Additional Options

               Enter the letter of your choice:
____________________________________________________________________________
                    Current Switch Selections
DES Mode: Electronic Code book       Short Block: No Padding
Key type: Alphabetic                     Disk verify after write: On
Automatic Purging (after encryption): No Purge Prompt (after encryption): Yes
                  (after decryption): NO              (after decryption): Yes
Times purged file overwritten: 1         Command Line: Exit      Speaker: Off
Re-use existing files: Prompt      Filename Display: On   Key Entry Echo: On
____________________________________________________________________________
 (C) Everett Enterprises, 7839 Vervain Court, Springfield, VA 22152


____________________________________________________________________________
                             Figure 1.                            


        d.  The Private Line will ask for the name of the file to be encrypted
(see Figure 2).  If filename display is enabled (see paragraph 26), The Private
Line will display the filenames of files contained in the current directory. 
The top filename in the display will be high-lighted.  You may select it by
pressing RETURN or you may move the high-light bar by using the cursor keys. 
Or you may enter the file name in the MS-DOS format, filename.filetype, if the
file to be encrypted is on the currently logged disk drive and in the current
directory.  The currently logged disk drive is the drive which appears with the
MS-DOS prompt symbol, such as A> or B>.  Otherwise, use the form
X:\pathname\filename.filetype where 'X' is a disk drive (A-P) that exists on
your system; \pathname is a valid pathname; filename is a 1-8 character
filename; filetype is a 3 character file type, such as ASM, BAS, COM, DAT, HEX,
PAS, or PRN.  Either lower or upper case characters may be used, but all
characters are changed to upper case.  If the file to be encrypted is not on the
same disk as The Private Line, insert that diskette into another disk drive
before entering the name of the file.  If the disk drive does not exist or the
file can not be found, The Private Line will tell you to press the RETURN key
and will then ask you to enter the file name.  If at any time you wish to cancel






the current operation and to return to either the master menu or the additional
options menu, simply press the CONTROL key and the letter 'R' at the same time
(CNTL-R) whenever The Private Line is waiting for input from the terminal.  
  _______________________________________________________________
                         THE PRIVATE LINE

  WHAT IS THE NAME OF THE FILE TO BE ENCRYPTED?
     (DISK:FILENAME.FILETYPE)
  _______________________________________________________________
                              Figure 2.                           


  _______________________________________________________________
                         THE PRIVATE LINE

  WHAT IS THE NAME OF THE FILE TO BE ENCRYPTED?
     (DISK:\PATHNAME\FILENAME.FILETYPE)

  FILE NOT FOUND
    (PRESS RETURN TO RE-ENTER)

  _______________________________________________________________
                            Figure 3.

                           
     e.  After entering the file name, The Private Line will open a file to
contain the encrypted data.  The file will be placed on the chosen disk.  The
file name of the encrypted file will be the same as that of the file to be
encrypted.  The file type, however, will be 'ENC'.  For example, if the file to
be encrypted is 'A:SECRET.DAT', then the file to hold the encrypted data will
be X:SECRET.ENC' where 'X' is the disk drive you selected.  If the user did not
enter a disk drive, the currently logged disk drive is used.  If the file can
not be found, a message (see Figure 3) is displayed, and the user is instructed
to press the RETURN key.

             (1)  The Private Line will attempt to open the new file if there
is room on the chosen disk.  If there is not enough room to open the file or if
there is another error, a message will be displayed.  Press RETURN to return to
the master menu.

             (2)  The Private Line will also check to see if the file to contain
the encrypted data already exists on the selected disk.  If it does and the user
has not changed the settings of the file re-use switch (default=prompt), the
user will be asked if it should be overwritten (see Figure 4).  The user should
press either 'Y' for yes or 'N' for no.  If yes, The Private Line continues. 
If no, The Private Line asks if the user wants to return to the master menu or
if the user  wants to enter a new file name to contain the encrypted data (see






Figure 5).  The user should press either 'A' or 'B'.  If 'A' is pressed, The
Private Line returns to the master menu.  If 'B' is selected, the user  
_______________________________________________________________
                         THE PRIVATE LINE


  WHAT IS THE NAME OF THE FILE TO BE ENCRYPTED?
     (DISK:\PATHNAME\FILENAME.FILETYPE)

  ENTER THE LETTER DESIGNATOR (A-P) OF THE DISK ON WHICH THE 
  ENCRYPTED FILE IS TO BE PLACED:

  FILE ALREADY EXISTS.  DO YOU WANT TO OVERWRITE IT (Y/N)? 
  _______________________________________________________________
                            Figure 4.                           


is asked for the name of the file to contain the encrypted data (see Figure 6). 
Any valid MS-DOS \pathname\filename.filetype on any valid disk drive may be
used.  If the file re-use switch has been set to re-use, the file will
automatically be overwritten.

        f.  After the file to be encrypted and the file to hold the encrypted
data have been selected and opened, The Private Line will ask for the key to be
used (see Figure 7).  The key will be echoed to the terminal as it is entered. 
If the user desires to disable the key entry echo feature, see para 11, 'Key
Entry Echo Toggle Switch.'

  _______________________________________________________________
                         THE PRIVATE LINE

                              OPTIONS

          A - RETURN TO THE MASTER MENU.

          B - ENTER A NEW NAME FOR THE NEW FILE.


  ENTER THE LETTER OF YOUR CHOICE:  

  _______________________________________________________________
                            Figure 5.                          






  _______________________________________________________________
                         THE PRIVATE LINE


  WHAT IS THE NAME OF THE FILE TO BE CREATED?
    (DISK:\PATHNAME\FILENAME.FILETYPE)

  _______________________________________________________________
                            Figure 6.                          


  _______________________________________________________________
                         THE PRIVATE LINE


  Enter the alphabetic key to be used (1-8 characters):
    (FOR EXAMPLE:  aBcdeFGh)

  _______________________________________________________________
                           Figure 7.   


             (1)  The user should enter 1-8 characters in the format in Figure
7 and press RETURN.  After entering 8 characters, the user will be allowed only
to enter a character editing key such as left-arrow or back-space or to press
RETURN.  If less than 8 characters are entered when RETURN is pressed, the key
is right-filled with blanks (hex value 20H).  Please note that key characters
are case specific, i.e., there is a difference between an upper and lower case
letter.

             (2)  After pressing RETURN, The Private Line will display the key
which you entered (see Figure 8) and ask if it is correct.  Press a 'Y' or 'N'
for yes or no.  If 'Y' is pressed, The Private Line continues.  If 'N' is
pressed,  The Private Line again asks for the key to be used.  Remember, CNTL-R
will return the user to the master menu.  If the key entry echo feature has been
turned off, the verification step will be bypassed.

  _______________________________________________________________
                         THE PRIVATE LINE

  LISTED BELOW IS THE KEY YOU ENTERED:

  aBcdeFGh

  IS IT CORRECT (Y/N)?

  _______________________________________________________________
                            Figure 8.






         g.  After the key has been verified, The Private Line begins to read
the input file, encode it and write the encrypted file to the output disk.  As
a reminder the names of the encrypted file and the file being encrypted are
displayed.  A counter is displayed and incremented as each 256 bytes of data is
processed.  

        h.  After the file has been encrypted, the user may be asked if the
plain text source file should be purged (overwritten with binary zeros and then
removed from the directory).  If the answer is no, the user is returned to the
master menu.  If the answer is 'yes', then after confirmation, the file is
purged before the user is returned to the master menu (see Figures 9 and 10). 
When the file has been purged, the user will be notified and told to press
RETURN to continue (see Figure 11).  The user will then be returned to the
master menu.  The default setting for the automatic purge after encryption is
NO.  The default setting for the purge prompt is YES.  If the automatic purge
switch has been set to automatic, the source file will automatically be purged,
regardless of the purge prompt switch setting.

  _______________________________________________________________
                         THE PRIVATE LINE

  ENCRYPTING:  X:FILENAME.FILETYPE

  ENCRYPTED FILE IS: X:FILENAME.ENC

  USING: Electronic Code book

  DO YOU WANT TO PURGE THE ABOVE PLAIN TEXT SOURCE FILE (Y/N)?

  _______________________________________________________________
                            Figure 9.   


  _______________________________________________________________
                         THE PRIVATE LINE

  ENCRYPTING:  X:FILENAME.FILETYPE

  ENCRYPTED FILE IS: X:FILENAME.ENC

  USING: Electronic Code book

  DO YO WANT TO PURGE THE ABOVE PLAIN TEXT SOURCE FILE (Y/N)?

  PHYSICALLY ERASING:  X:FILENAME.FILETYPE

  _______________________________________________________________
                            Figure 10.                          








  _______________________________________________________________
                         THE PRIVATE LINE

  ENCRYPTING:  X:FILENAME.FILETYPE

  ENCRYPTED FILE IS: X:FILENAME.ENC

  USING: Electronic Code book

  CONFIRM PURGE OF X:FILENAME.FILETYPE (Y/N)?

  PHYSICALLY ERASING:  X:FILENAME.FILETYPE

  FILE OVERWRITTEN WITH BINARY ZEROS AND THEN DELETED

  PRESS RETURN TO CONTINUE
  _______________________________________________________________
                            Figure 11.                          


    2.  Decrypting files:

        Files may be decrypted using the same procedures as in encryption. 
However, press 'B' for decryption when the master menu is displayed, and then
continue exactly as for encryption in accordance with the instructions contained
in paragraph B1c through B1h.  Remember, the same key which was used in the
encryption process must be used for decryption. 

    3.  Displaying files:

     Normally there is no need to display files which have been encrypted or
are to be encrypted.  Displaying COM files certainly does not reveal anything,
but it can be done by using utilities such as DUMP and Cntl-P.  Text files which
are in the clear may be displayed using utilities such as TYPE or text editors
such as WORDSTAR.  However, for the few times that one may want to review a
file, The Private Line provides the capability.  It should be understood that
an encrypted text file is not a text file.

        a.  From the master menu of The Private Line, press 'D'.  The Private
Line will ask for the name of the file to be displayed (see Figure 12).  It must
be contained in the current or specified directory.  The existence of the file
will be checked.  If an error is found, the user will be prompted (see Figure
13) for corrective action.  







  _______________________________________________________________
                         THE PRIVATE LINE

  WHAT IS THE NAME OF THE FILE TO BE DISPLAYED?
     (DISK:\PATHNAME\FILENAME.FILETYPE)

  _______________________________________________________________
                            Figure 12.


  _______________________________________________________________
                         THE PRIVATE LINE

  WHAT IS THE NAME OF THE FILE TO BE DISPLAYED?
     (DISK:\PATHNAME\FILENAME.FILETYPE)

  FILE NOT FOUND
    (PRESS RETURN TO RE-ENTER)
  _______________________________________________________________
                            Figure 13.                          


        b.  The Private Line will read the desired file and display a CRT screen
of data and then pause.  The user will be prompted to choose between viewing the
next screen of data (see Figure 14) by pressing RETURN or returning to the
master menu by pressing CNTL-R.  Each byte will be printed in hex format (two
hex digits).  In addition, all displayable bytes (hex value 20H through 7EH)
will be displayed.  Nondisplayable bytes are represented by a period.

        c.  After the end of the file has been reached, the user will be
informed and asked to press the RETURN key (see Figure 15).  This allows the
user to view the last screen of data in the file.

    4.  Purging files:

        After a file has been encrypted or decrypted, it may be necessary, for
security purposes, to purge the original file.  When MS-DOS erases a file, only
the name is removed from the disk directory, the data remains on the disk (see
para 15, 'Erasing Files').  With patience and a little effort, some one could
reconstruct the file thought to be erased.  Therefore, a means is provided in
which the file to be erased is overwritten with binary zeros before it is purged
from the MS-DOS disk directory.  It also should be noted that because of the
manner in which backup files are created by text editors such as WORDSTAR and
EDLIN, care should be exercised to avoid leaving backup files (file type: BAK)
available for general access.  Please note that the 







  _______________________________________________________________
                         THE PRIVATE LINE

00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F ................
20 21 22 23 24 25 26 27 28 29 2A 2B 2C 2D 2E 2F  !"#$%&'()*+,-./
30 31 32 33 34 35 36 37 38 39 3A 3B 3C 3D 3E 3F 0123456789:;<=>?
40 41 42 44 44 45 46 47 48 49 4A 4B 4C 4D 4E 4F @ABCDEFGHIJKLMNO
50 51 52 55 54 55 56 57 58 59 5A 5B 5C 5D 5E 5F PQRSTUVWXYZ[ ]^-
60 61 62 66 64 65 66 67 68 69 6A 6B 6C 6D 6E 6F 'abcdefghijklmno
70 71 72 77 74 75 76 77 78 79 7A 7B 7C 7D 7E 7F pqrstuvwxyz{|}~.
20 21 22 23 24 25 26 27 28 29 2A 2B 2C 2D 2E 2F  !"#$%&'()*+,-./
30 31 32 33 34 35 36 37 38 39 3A 3B 3C 3D 3E 3F 0123456789:;<=>?
40 41 42 44 44 45 46 47 48 49 4A 4B 4C 4D 4E 4F @ABCDEFGHIJKLMNO
50 51 52 55 54 55 56 57 58 59 5A 5B 5C 5D 5E 5F PQRSTUVWXYZ[ ]^-
20 21 22 23 24 25 26 27 28 29 2A 2B 2C 2D 2E 2F  !"#$%&'()*+,-./
30 31 32 33 34 35 36 37 38 39 3A 3B 3C 3D 3E 3F 0123456789:;<=>?

PRESS RETURN FOR NEXT SCREEN, CNTL-R FOR MASTER MENU
  _______________________________________________________________
                            Figure 14.                          


  _______________________________________________________________
                         THE PRIVATE LINE

00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F ................
01 11 12 13 14 15 16 17 18 19 1A 1B 1C 1D 1E 1F ................
20 21 22 23 24 25 26 27 28 29 2A 2B 2C 2D 2E 2F  !"#$%&'()*+,-./
50 51 52 55 54 55 56 57 58 59 5A 5B 5C 5D 5E 5F PQRSTUVWXYZ[ ]^-

END OF FILE REACHED. PRESS RETURN TO CONTINUE. 
  _______________________________________________________________
                             Figure 15.      


default settings of the automatic purge and purge prompt switches are 'no' and
'prompt' respectively.  This means that unless the user changes the default
settings, the user will be prompted after a file is encrypted.  In order to
completely purge a file, follow these steps:

        a.  From The Private Line master menu, press the letter 'E' (either
upper or lower case) to purge a file.

        b.  The Private Line will ask for the name of the file to be purged (see
Figure 16).  The file to be purged must be in the current or specified
directory.  If the file can not be found, The Private Line will tell you to
press the RETURN key and will then ask you to enter the file name (see Figure
25).  If at any time you wish to return to the master menu, simply press the






CONTROL key and the letter 'R' (CNTL-R) at the same time whenever The Private
Line is waiting for input from the terminal.  The master menu will then
re-appear.


  _______________________________________________________________
                         THE PRIVATE LINE

  WHAT IS THE NAME OF THE FILE TO BE PURGED?
     (DISK:\PATHNAME\FILENAME.FILETYPE)

  _______________________________________________________________
                              Figure 16.                        

  _______________________________________________________________
                         THE PRIVATE LINE

  WHAT IS THE NAME OF THE FILE TO BE PURGED?
     (DISK:\PATHNAME\FILENAME.FILETYPE)

  FILE NOT FOUND
    (PRESS RETURN TO RE-ENTER)

  _______________________________________________________________
                            Figure 17.                          

     c.  If the file is found, the user will be asked to verify that the file
is to be purged by pressing 'Y' or 'N' (see Figure 18).  If 'Y' is pressed,
purging begins and the data will be destroyed (see Figure 19).  If 'N' is
pressed, the user will be returned to the master menu.  After the file has been
purged, the user will be informed that the file has been overwritten with binary
zeros and deleted.  The user is then instructed to press RETURN to continue (see
Figure 20).  After pressing RETURN, the user is returned to the master menu. 
The file will be overwritten 1-9 times before the file name is removed from the
directory.  The default number is 1; it may be changed from the Additional
Options Menu.
  _______________________________________________________________
                         THE PRIVATE LINE

  Confirm PURGE of x:\pathname\filename.filetype (y/n)?

  _______________________________________________________________
                            Figure 18.                          








  _______________________________________________________________
                         THE PRIVATE LINE

  Confirm PURGE of x:\pathname\filename.filetype (y/n)?

  PHYSICALLY ERASING X:\PATHNAME\FILENAME.FILETYPE
  _______________________________________________________________
                            Figure 19.                          


  _______________________________________________________________
                         THE PRIVATE LINE

  Confirm PURGE of x:\pathname\filename.filetype (y/n)?

  PHYSICALLY ERASING X:\PATHNAME\FILENAME.FILETYPE

  FILE OVERWRITTEN WITH BINARY ZEROS AND DELETED

  PRESS RETURN TO CONTINUE

  _______________________________________________________________
                            Figure 20.                          


    5.  Displaying disk directories:

        a.  From The Private Line master menu, press the letter 'F' (either
upper or lower case) to list a disk directory.  

        b.  The Private Line will ask for the pathname of the directory which
is to be displayed (see Figure 21).  Type any valid disk drive,pathname and use
any valid wildcard characters.  You may simply press RETURN for the default
directory (*.*).

        c.  The Private Line will then display the pathname which you entered. 
The filenames contained in that directory will be printed in alphabetical order
in one to four columns.  Directory entries will be marked with an asterisk.  If
there are more than fifty-six entries a message will be shown which will
instruct the user to press RETURN for more listings.  When there are no more
listings, a message indicating the end of the listings will be shown and the
user will be instructed to press RETURN to return to the master menu (see Figure
22).






  _______________________________________________________________
                         THE PRIVATE LINE


  Enter the pathname of the desired directory: 
    (disk:\pathname\filename.filetype, RETURN = *.*)
  _______________________________________________________________
                            Figure 21.                          


  _______________________________________________________________
                         THE PRIVATE LINE

  Directory of - A:\ROOT\SUB1

   PROG1    ASM     :
   PROG1    HEX     :
   PROG1    PRN     :
   SUB11       *    :
   TEST     DAT     :
   TEST     HEX     :

  * DIRECTORY ENTRIES

  END OF DIRECTORY LISTINGS.  PRESS RETURN TO RETURN TO MASTER MENU.         

  _______________________________________________________________
                            Figure 22.                          


    6.  Double file decryption and encryption:

        a.  Single file encryption generally is secure enough for most users. 
However, some people feel that it is too vulnerable and suggest double
encryption.  Double encryption involves encrypting an encrypted file, preferably
with a different key.  Even the most doubtful critic of the Data Encryption
Standard admits that a file doubly encrypted with two different keys, will be
secure from brute force solution for at least five to ten years!

        b.  Options 'I' and 'J' on the master menu will automatically double
encrypt or decrypt a file.  When either option is selected, the user will be
prompted to enter a second key after providing the first key if hexadecimal keys
are used.  If alphabetic keys are used, only one key consisting of 1-16
characters is entered.  The default key type is alphabetic.  Of course double
encryption takes more time than single encryption, but it is less than twice as
much.  Remember, for decryption the same keys must be entered in the same order
as for the encryption process.  Thus, the 1st key for encryption also is the 1st
key for decryption.  Note: if single decryption is used twice to decrypt a






double encrypted file, then the key entered second in the encryption process
must be used first in the decryption process.  Other than being prompted to
enter a second key, double encryption and decryption proceed as in para 1,
'Encrypting files.'  Remember that alphabetic keys of length 9 to 15 characters
are right-filled with blanks (hex value 20H).

    7.  Converting files to ASCII format:

        a.  An encrypted file contains binary data, i.e., values from 00H
through 0FFH or 0 through 255 decimal.  Thus, a communications program such as
XMODEM normally is required to transfer an encrypted file.  However, for the
people who desire to send encrypted files over Western Union, E-Mail, or similar
services, ASCII files are required.  ASCII files do not contain control
characters.  Option 'G' will expand any file into an ASCII file with a normal
file type of EXP.  It will be about 37% larger than the original file.  Carriage
returns and line feeds are inserted after each 64 characters in the 
expanded file.

        b.  The file to be expanded must be in the current or specified
directory of the selected disk.

        c.  Press the letter 'G' (either upper or lower case) to expand a file.

        d.  The Private Line will ask for the name of the file to be expanded
(see Figure 23).


  _______________________________________________________________
                         THE PRIVATE LINE


  WHAT IS THE NAME OF THE FILE TO BE EXPANDED?
     (DISK:\PATHNAME\FILENAME.FILETYPE)
  _______________________________________________________________
                            Figure 23.                          

     e.  After entering the file name, The Private Line will open a file to
contain the expanded data.  The file will be placed on the chosen disk using
its current or specified directory.  The file name of the expanded file will be
the same as that of the file to be expanded.  The file type, however, will be
'EXP'.  For example, if the file to be expanded is 'A:SECRET.DAT', then the file
to hold the expanded data will be X:SECRET.EXP' where 'X' is the disk drive you
selected.  If the user did not enter a disk drive, the currently logged disk
drive is used.

        (1)  The Private Line will attempt to open the new file if there is room
on the chosen disk.  If there is not enough room to open the file or if there
is another error, a message will be displayed.  Press RETURN to return to the






master menu.

        (2)  The Private Line will also check to see if the file to contain the
expanded data already exists on the selected diskette.  If it does, the user
will be asked if it should be overwritten (see Figure 24).  The user should
press either 'Y' for yes or 'N' for no.  If yes, The Private Line continues. 
If no, The Private Line asks if the user wants to return to the master menu or
if the user  wants to enter a new file name to contain the expanded data (see
Figure 5).  The user should press either 'A' or 'B'.  If 'A' is pressed, The
Private Line returns to the master menu.  If 'B' is selected, the user is asked
for the name of the file to contain the expanded data.  The file will be placed
on the selected disk using its current or specified directory.

  _______________________________________________________________
                         THE PRIVATE LINE


  WHAT IS THE NAME OF THE FILE TO BE EXPANDED?
     (DISK:\PATHNAME\FILENAME.FILETYPE)

  FILE ALREADY EXISTS.  DO YOU WANT TO OVERWRITE IT (Y/N)?
  _______________________________________________________________
                            Figure 24.


     f.  After the file to be expanded and the file to hold the expanded data
have been selected and opened, The Private Line will read the input file,
expanded it, and write it to the expansion file.  As a reminder, the names of
the expanded file and the file being expanded are displayed.  The user will be
returned to the master menu upon completion of the expansion.

    8.  Converting files to binary format:

        a.  Option 'H' will contract any file into a binary file with a normal
file type of CON.  Carriage returns and line feeds inserted by Option 'G' are
discarded.  It will not make sense to use Option 'H' on any file other than a
file of type EXP.  The same checks are made for overwriting existing files as
in the expansion option.

        b.  Files may be contracted using the same procedures as in the
expansion process.  However, press 'H" for converting a file into binary format
when the master menu is displayed, and then continue as for expansion in
accordance with the instructions in para 7, 'Converting files to ASCII format.' 








    9.  Printing Files.

        a.  Option 'K' will print a selected file on the MS-DOS PRN device. 
Remember, only ASCII files can be printed.  Thus, encrypted files can not be
printed.  However, you could encrypt a file, use Option 'G' to convert it to an
ASCII file, and then print the new file using Option 'K'.  If a file with a file
type of EXE, COM, CON, or ENC is selected for printing, a warning message will
be displayed and the user will be allowed to continue or to return to the master
menu.  During print, an 'S' will stop/start the printing process.  A CNTL-R will
return the user to the master menu.  

        b.  The file to be printed must be in the current or specified directory
prior to option 'K' being selected.

   10.  Disk Write Verify switch:

        a.  If the disk write verify toggle switch is on, a verify is performed
during write operations to the disk drive to insure that data was written
correctly.  Although more time is required with the verify switch on, a higher
degree of confidence in the data written is obtained.  The additional time
required is very small.  Therefore, it is recommended that the verify switch be
left on.  The default condition is ON.

        b.  To change the disk write verify toggle switch, select 'L',
ADDITIONAL OPTIONS, on the master menu.  The additional options menu (see Figure
25), will appear.  Press 'A' and the verify toggle switch will be displayed (see
Figure 26).

        c.  Press 'A' to turn the switch on.  The switch will be turned on and
the display updated to reflect the new condition.  Press 'C' to return to the
additional options menu. 







____________________________________________________________________________
                         THE PRIVATE LINE

                     ADDITIONAL OPTIONS MENU

A.  Disk Write Verify Toggle Switch   I.  Change Purging Status
B.  Key Entry Echo Toggle Switch      J.  Save Switch Settings to Disk
C.  Create Sub-Directory              K.  Command LineExit Status
D.  Change Current Sub-Directory      L.  Change FileRe-use Status
E.  Remove Sub-Directory              M.  Set DES Mode of Operation
F.  Erase File                        N.  Return to Master Menu
G.  Return to Master Menu             O.  Change Initialization Value
H.  Select Alphabetic / Hex Keys      P.  Turn Speaker Switch On/Off
                                      Q.  Change Filename Display Status
Enter the letter of your choice:      R.  Return to Master Menu
____________________________________________________________________________
                    Current Switch Selections
DES Mode: Electronic Code book           Short Block: No Padding
Key type: Alphabetic                     Disk verify after write: On
Automatic Purging (after encryption): No Purge Prompt (after encryption): Yes
                  (after decryption): NO              (after decryption): Yes
Times purged file overwritten: 1         Command Line: Exit      Speaker: Off
Re-use existing files: Prompt      Filename Display: On   Key Entry Echo: On
____________________________________________________________________________
 (C) Everett Enterprises, 7839 Vervain Court, Springfield, VA 22152


____________________________________________________________________________
                            Figure 25.

  _______________________________________________________________
                         THE PRIVATE LINE

                  DISK WRITE VERIFY TOGGLE SWITCH

                       CURRENT STATUS:  ON

                    A.  TURN VERIFY SWITCH ON

                    B.  TURN VERIFY SWITCH OFF

                    C.  RETURN TO OPTIONS MENU

  _______________________________________________________________
                            Figure 26.


        d.  Press 'B' to turn the switch off.  The switch will be turned off






and the display updated to reflect the new condition.  Press 'C' to return to
the additional options menu.

   11.  Key Entry Echo toggle switch:

        a.  If the key entry toggle switch is on, the key is displayed as it is
entered during the encryption and decryption process.  If the switch is turned
off, the cursor will move as each character is entered, but only the commas will
be shown and the verify step will be skipped.  The default condition is ON. 

        b.  To change the key entry echo toggle switch, select 'L', ADDITIONAL
OPTIONS, on the master menu.  The additional options menu (see Figure 41), will
appear.  Press 'B' and the key entry toggle switch will be displayed (see Figure
27).

        c.  Press 'A' to turn the switch on.  The switch will be turned on and
the display updated to reflect the new condition.  Press 'C' to return to the
additional options menu. 


  _______________________________________________________________
                         THE PRIVATE LINE

                  KEY ENTRY ECHO TOGGLE SWITCH

                       CURRENT STATUS:  ON

                    A.  TURN VERIFY SWITCH ON

                    B.  TURN VERIFY SWITCH OFF

                    C.  RETURN TO OPTIONS MENU

  _______________________________________________________________
                            Figure 27.

   12.  Creating a sub-directory:

        a.  Creating a sub-directory is the same as the MKDIR function in
MS-DOS.

        b.  To create a sub-directory, choose option 'L' on the master menu in
order to obtain the additional options menu.

        c.  Press 'C' when the additional options menu appears.  The user will
be asked to enter the disk drive on which the new sub-directory is to be created
(see Figure 28).







        d.  Press any letter (A-P) lower or upper case, which represents a disk
drive on your system.  Again The Private Line will check to determine if the
entered disk drive actually exists.  If it does not exist, a message will be
displayed.  If it exists, but is not the default drive, a message will be
displayed which instructs the user to insert the desired diskette and to press
RETURN.

       e.  The current directory pathname of the selected disk drive will be
displayed and the user will be prompted to enter the name of the sub-directory
to be created (see Figure 29).  You have to enter the backslash followed by the
name of the sub-directory to be created.  Press RETURN.
  
  _______________________________________________________________
                         THE PRIVATE LINE

  ENTER THE LETTER DESIGNATOR (A-P) OF THE DISK DRIVE
  ON WHICH THE SUB-DIRECTORY SHOULD BE CREATED?

  _______________________________________________________________
                            Figure 28.


  _______________________________________________________________
                         THE PRIVATE LINE

  CURRENT DIRECTORY:
  X:

  WHAT IS THE PATHNAME OF THE SUB-DIRECTORY TO BE CREATED?

  _______________________________________________________________
                            Figure 29.


        f.  The sub-directory will be created and the user returned to the
additional options menu.  If an error occurs, a message will be displayed and
the user will be instructed to press RETURN to return to the additional options
menu.

   13.  Changing the current sub-directory:

        a.  Changing the current sub-directory is the same as the CHDIR function
in MS-DOS.

        b.  To change the current sub-directory, choose option 'L' on the master
menu in order to obtain the additional options menu.

        c.  Press 'D' when the additional options menu appears.  The user will
be asked to enter the disk drive on which the current sub-directory is to be
changed (see Figure 30).

        d.  Press any letter (A-P) lower or upper case, which represents a disk
drive on your system.  







        e.  The current directory pathname of the selected disk drive will be
displayed and the user will be prompted to enter the name of the new current
sub-directory (see Figure 31).  You have to enter the backslash followed by the
name of the sub-directory to be changed.  Press RETURN.
  
        f.  The current sub-directory will be changed and the user returned to
the additional options menu.  If an error occurs, a message will be displayed
and the user will be instructed to press RETURN to return to the additional
options menu.

  
  _______________________________________________________________
                         THE PRIVATE LINE

  ENTER THE LETTER DESIGNATOR (A-P) OF THE DISK DRIVE
  OF WHICH THE SUB-DIRECTORY SHOULD BE CHANGED?

  _______________________________________________________________
                            Figure 30.


  _______________________________________________________________
                         THE PRIVATE LINE

  CURRENT DIRECTORY:
  X:

  WHAT IS THE PATHNAME OF THE NEW SUB-DIRECTORY?

  _______________________________________________________________
                            Figure 31.


   14.  Removing a sub-directory:

        a.  Removing a sub-directory is the same as the RMDIR function in
MS-DOS.

        b.  To remove a sub-directory, choose option 'L' on the master menu in
order to obtain the additional options menu.

        c.  Press 'E' when the additional options menu appears.  The user will






be asked to enter the disk drive on which the sub-directory is to be removed
(see Figure 32).

        d.  Press any letter (A-P) lower or upper case, which represents a disk
drive on your system.  

        e.  The current directory pathname of the selected disk drive will be
displayed and the user will be prompted to enter the name of the sub-directory
to be removed (see Figure 33).  You have to enter the backslash followed by the
name of the sub-directory to be removed.  Press RETURN.
  
        f.  The sub-directory will be removed and the user returned to the
additional options menu.  If an error occurs, a message will be displayed and
the user will be instructed to press RETURN to return to the additional options
menu.

  
  _______________________________________________________________
                         THE PRIVATE LINE

  ENTER THE LETTER DESIGNATOR (A-P) OF THE DISK DRIVE
  OF WHICH THE SUB-DIRECTORY SHOULD BE REMOVED?

  _______________________________________________________________
                            Figure 32.


  _______________________________________________________________
                         THE PRIVATE LINE

  CURRENT DIRECTORY:
  X:

  WHAT IS THE PATHNAME OF THE SUB-DIRECTORY TO BE REMOVED?

  _______________________________________________________________
                            Figure 33.


   15.  Erasing a file from a sub-directory:

        a.  Erasing a file from a sub-directory is the same as using the 'del'
command in MS-DOS.

        b.  From The Private Line master menu, choose option 'L' in order to
obtain the additional options menu.

        c.  When the additional options menu appears, press 'F' (either upper






or lower case) to erase a file from the directory.  

        d.  The Private Line will ask for the name of the file to be erased (see
Figure 34).  The file to be erased must be in the current or specified directory
of the selected drive. 

  _______________________________________________________________
                         THE PRIVATE LINE

  WHAT IS THE NAME OF THE FILE TO BE ERASED?

  _______________________________________________________________
                            Figure 34.


The Private Line will then attempt to find the desired file.  If the file is
found, the user will be asked to verify that the file is to be erased by
pressing 'Y' or 'N' (see Figure 35).  If 'Y' is pressed, the filename will be
removed from the directory.  If 'N' is pressed, the user will be returned to
the additional options menu.  After the filename has been erased, the user will
be informed that the filename has been removed from the directory.  The user is
then instructed to press RETURN to continue.  After pressing RETURN, the user
is returned to the additional options menu.


  _______________________________________________________________
                         THE PRIVATE LINE

  Confirm Erasure of x:\pathname\filename.filetype (y/n)?

  _______________________________________________________________
                            Figure 35.


    16.  Verification of Compliance with Data Encryption Standard.

     Another feature is provided for those who desire more proof that The
Private Line actually works in compliance with the requirements of the Data
Encryption Standard contained in NBS Special Publication 500-20.  Listed below
are the hexadecimal values of the test keys, plain text, and ciphers used by
the National Bureau of Standards in order to determine if an encryption
algorithm produces the correct output.  You may check these by selecting Option
G, Test DES Compliance, on the Additional Options Menu.  As each of the 171
tests are performed, The Private Line will display the test key, test plain
text, expected cipher code and the generated cipher.  The expected cipher will
be compared to the cipher generated by The Private Line and the results of the
comparison will be displayed for each test.  These tests are also performed each
time that The Private Line is started, as part of the initialization process, 






however, no indication is given unless one of the tests fail.  If one of the
tests fail, the only thing a user can do is to copy the source diskette of The
Private Line in order to obtain a good copy.  If that does not work, something
has damaged or destroyed the data contained on the diskette.  You will need to
obtain another copy by downloading it or by requesting another disk from Everett
Enterprises at a nominal handling/postage charge of $10.


               KEY                    PLAIN TEXT               CIPHER TEXT

                                   IP and E tests    

  1. 01,01,01,01,01,01,01,01 95,F8,A5,E5,DD,31,D9,00 80,00,00,00,00,00,00,00
  2. 01,01,01,01,01,01,01,01 DD,7F,12,1C,A5,01,56,19 40,00,00,00,00,00,00,00
  3. 01,01,01,01,01,01,01,01 2E,86,53,10,4F,38,34,EA 20,00,00,00,00,00,00,00
  4. 01,01,01,01,01,01,01,01 4B,D3,88,FF,6C,D8,1D,4F 10,00,00,00,00,00,00,00
  5. 01,01,01,01,01,01,01,01 20,B9,E7,67,B2,FB,14,56 08,00,00,00,00,00,00,00
  6. 01,01,01,01,01,01,01,01 55,57,93,80,D7,71,38,EF 04,00,00,00,00,00,00,00
  7. 01,01,01,01,01,01,01,01 6C,C5,DE,FA,AF,04,51,2F 02,00,00,00,00,00,00,00
  8. 01,01,01,01,01,01,01,01 0D,9F,27,9B,A5,D8,72,60 01,00,00,00,00,00,00,00
  9. 01,01,01,01,01,01,01,01 D9,03,1B,02,71,BD,5A,0A 00,80,00,00,00,00,00,00
 10. 01,01,01,01,01,01,01,01 42,42,50,B3,7C,3D,D9,51 00,40,00,00,00,00,00,00
 11. 01,01,01,01,01,01,01,01 B8,06,1B,7E,CD,9A,21,E5 00,20,00,00,00,00,00,00
 12. 01,01,01,01,01,01,01,01 F1,5D,0F,28,6B,65,BD,28 00,10,00,00,00,00,00,00
 13. 01,01,01,01,01,01,01,01 AD,D0,CC,8D,6E,5D,EB,A1 00,08,00,00,00,00,00,00
 14. 01,01,01,01,01,01,01,01 E6,D5,F8,27,52,AD,63,D1 00,04,00,00,00,00,00,00
 15. 01,01,01,01,01,01,01,01 EC,BF,E3,BD,3F,59,1A,5E 00,02,00,00,00,00,00,00
 16. 01,01,01,01,01,01,01,01 F3,56,83,43,79,D1,65,CD 00,01,00,00,00,00,00,00
 17. 01,01,01,01,01,01,01,01 2B,9F,98,2F,20,03,7F,A9 00,00,80,00,00,00,00,00
 18. 01,01,01,01,01,01,01,01 88,9D,E0,68,A1,6F,0B,E6 00,00,40,00,00,00,00,00
 19. 01,01,01,01,01,01,01,01 E1,9E,27,5D,84,6A,12,98 00,00,20,00,00,00,00,00
 20. 01,01,01,01,01,01,01,01 32,9A,8E,D5,23,D7,1A,EC 00,00,10,00,00,00,00,00
 21. 01,01,01,01,01,01,01,01 E7,FC,E2,25,57,D2,3C,97 00,00,08,00,00,00,00,00
 22. 01,01,01,01,01,01,01,01 12,A9,F5,81,7F,F2,D6,5D 00,00,04,00,00,00,00,00
 23. 01,01,01,01,01,01,01,01 A4,84,C3,AD,38,DC,9C,19 00,00,02,00,00,00,00,00
 24. 01,01,01,01,01,01,01,01 FB,E0,0A,8A,1E,F8,AD,72 00,00,01,00,00,00,00,00
 25. 01,01,01,01,01,01,01,01 75,0D,07,94,07,52,13,63 00,00,00,80,00,00,00,00
 26. 01,01,01,01,01,01,01,01 64,FE,ED,9C,72,4C,2F,AF 00,00,00,40,00,00,00,00
 27. 01,01,01,01,01,01,01,01 F0,2B,26,3B,32,8E,2B,60 00,00,00,20,00,00,00,00
 28. 01,01,01,01,01,01,01,01 9D,64,55,5A,9A,10,B8,52 00,00,00,10,00,00,00,00
 29. 01,01,01,01,01,01,01,01 D1,06,FF,0B,ED,52,55,D7 00,00,00,08,00,00,00,00
 30. 01,01,01,01,01,01,01,01 E1,65,2C,6B,13,8C,64,A5 00,00,00,04,00,00,00,00
 31. 01,01,01,01,01,01,01,01 E4,28,58,11,86,EC,8F,46 00,00,00,02,00,00,00,00
 32. 01,01,01,01,01,01,01,01 AE,B5,F5,ED,E2,2D,1A,36 00,00,00,01,00,00,00,00
 33. 01,01,01,01,01,01,01,01 E9,43,D7,56,8A,EC,0C,5C 00,00,00,00,80,00,00,00
 34. 01,01,01,01,01,01,01,01 DF,98,C8,27,6F,54,B0,4B 00,00,00,00,40,00,00,00
 35. 01,01,01,01,01,01,01,01 B1,60,E4,68,0F,6C,69,6F 00,00,00,00,20,00,00,00
 36. 01,01,01,01,01,01,01,01 FA,07,52,B0,7D,9C,4A,B8 00,00,00,00,10,00,00,00






               KEY                    PLAIN TEXT               CIPHER TEXT

                             IP and E tests (continued)

 37. 01,01,01,01,01,01,01,01 CA,3A,2B,03,6D,BC,85,02 00,00,00,00,08,00,00,00
 38. 01,01,01,01,01,01,01,01 5E,09,05,51,7B,B5,9B,CF 00,00,00,00,04,00,00,00
 39. 01,01,01,01,01,01,01,01 81,4E,EB,3B,91,D9,07,26 00,00,00,00,02,00,00,00
 40. 01,01,01,01,01,01,01,01 4D,49,DB,15,32,91,9C,9F 00,00,00,00,01,00,00,00
 41. 01,01,01,01,01,01,01,01 25,EB,5F,C3,F8,CF,06,21 00,00,00,00,00,80,00,00
 42. 01,01,01,01,01,01,01,01 AB,6A,20,C0,62,0D,1C,6F 00,00,00,00,00,40,00,00
 43. 01,01,01,01,01,01,01,01 79,E9,0D,BC,98,F9,2C,CA 00,00,00,00,00,20,00,00
 44. 01,01,01,01,01,01,01,01 86,6E,CE,DD,80,72,BB,0E 00,00,00,00,00,10,00,00
 45. 01,01,01,01,01,01,01,01 8B,54,53,6F,2F,3E,64,A8 00,00,00,00,00,08,00,00
 46. 01,01,01,01,01,01,01,01 EA,51,D3,97,55,95,B8,6B 00,00,00,00,00,04,00,00
 47. 01,01,01,01,01,01,01,01 CA,FF,C6,AC,45,42,DE,31 00,00,00,00,00,02,00,00
 48. 01,01,01,01,01,01,01,01 8D,D4,5A,2D,DF,90,79,6C 00,00,00,00,00,01,00,00
 49. 01,01,01,01,01,01,01,01 10,29,D5,5E,88,0E,C2,D0 00,00,00,00,00,00,80,00
 50. 01,01,01,01,01,01,01,01 5D,86,CB,23,63,9D,BE,A9 00,00,00,00,00,00,40,00
 51. 01,01,01,01,01,01,01,01 1D,1C,A8,53,AE,7C,0C,5F 00,00,00,00,00,00,20,00
 52. 01,01,01,01,01,01,01,01 CE,33,23,29,24,8F,32,28 00,00,00,00,00,00,10,00
 53. 01,01,01,01,01,01,01,01 84,05,D1,AB,E2,4F,B9,42 00,00,00,00,00,00,08,00
 54. 01,01,01,01,01,01,01,01 E6,43,D7,80,90,CA,42,07 00,00,00,00,00,00,04,00
 55. 01,01,01,01,01,01,01,01 48,22,1B,99,37,74,8A,23 00,00,00,00,00,00,02,00
 56. 01,01,01,01,01,01,01,01 DD,7C,0B,BD,61,FA,FD,54 00,00,00,00,00,00,01,00
 57. 01,01,01,01,01,01,01,01 2F,BC,29,1A,57,0D,B5,C4 00,00,00,00,00,00,00,80
 58. 01,01,01,01,01,01,01,01 E0,7C,30,D7,E4,E2,6E,12 00,00,00,00,00,00,00,40
 59. 01,01,01,01,01,01,01,01 09,53,E2,25,8E,8E,90,A1 00,00,00,00,00,00,00,20
 60. 01,01,01,01,01,01,01,01 5B,71,1B,C4,CE,EB,F2,EE 00,00,00,00,00,00,00,10
 61. 01,01,01,01,01,01,01,01 CC,08,3F,1E,6D,9E,85,F6 00,00,00,00,00,00,00,08
 62. 01,01,01,01,01,01,01,01 D2,FD,88,67,D5,0D,2D,FE 00,00,00,00,00,00,00,04
 63. 01,01,01,01,01,01,01,01 06,E7,EA,22,CE,92,70,8F 00,00,00,00,00,00,00,02
 64. 01,01,01,01,01,01,01,01 16,6B,40,B4,4A,BA,4B,D6 00,00,00,00,00,00,00,01


              KEY                    PLAIN TEXT               CIPHER TEXT

                                  PC1 AND PC2 TESTS

 65. 80,01,01,01,01,01,01,01 00,00,00,00,00,00,00,00 95,A8,D7,28,13,DA,A9,4D
 66. 40,01,01,01,01,01,01,01 00,00,00,00,00,00,00,00 0E,EC,14,87,DD,8C,26,D5
 67. 20,01,01,01,01,01,01,01 00,00,00,00,00,00,00,00 7A,D1,6F,FB,79,C4,59,26
 68. 10,01,01,01,01,01,01,01 00,00,00,00,00,00,00,00 D3,74,62,94,CA,6A,6C,F3
 69. 08,01,01,01,01,01,01,01 00,00,00,00,00,00,00,00 80,9F,5F,87,3C,1F,D7,61
 70. 04,01,01,01,01,01,01,01 00,00,00,00,00,00,00,00 C0,2F,AF,FE,C9,89,D1,FC
 71. 02,01,01,01,01,01,01,01 00,00,00,00,00,00,00,00 46,15,AA,1D,33,E7,2F,10
 72. 01,80,01,01,01,01,01,01 00,00,00,00,00,00,00,00 20,55,12,33,50,C0,08,58
 73. 01,40,01,01,01,01,01,01 00,00,00,00,00,00,00,00 DF,3B,99,D6,57,73,97,C8
 74. 01,20,01,01,01,01,01,01 00,00,00,00,00,00,00,00 31,FE,17,36,9B,52,88,C9






              KEY                    PLAIN TEXT               CIPHER TEXT

                            PC1 AND PC2 TESTS (continued)

 75. 01,10,01,01,01,01,01,01 00,00,00,00,00,00,00,00 DF,DD,3C,C6,4D,AE,16,42
 76. 01,08,01,01,01,01,01,01 00,00,00,00,00,00,00,00 17,8C,83,CE,2B,39,9D,94
 77. 01,04,01,01,01,01,01,01 00,00,00,00,00,00,00,00 50,F6,36,32,4A,9B,7F,80
 78. 01,02,01,01,01,01,01,01 00,00,00,00,00,00,00,00 A8,46,8E,E3,BC,18,F0,6D
 79. 01,01,80,01,01,01,01,01 00,00,00,00,00,00,00,00 A2,DC,9E,92,FD,3C,DE,92
 80. 01,01,40,01,01,01,01,01 00,00,00,00,00,00,00,00 CA,C0,9F,79,7D,03,12,87
 81. 01,01,20,01,01,01,01,01 00,00,00,00,00,00,00,00 90,BA,68,0B,22,AE,B5,25
 82. 01,01,10,01,01,01,01,01 00,00,00,00,00,00,00,00 CE,7A,24,F3,50,E2,80,B6
 83. 01,01,08,01,01,01,01,01 00,00,00,00,00,00,00,00 88,2B,FF,0A,A0,1A,0B,87
 84. 01,01,04,01,01,01,01,01 00,00,00,00,00,00,00,00 25,61,02,88,92,45,11,C2
 85. 01,01,02,01,01,01,01,01 00,00,00,00,00,00,00,00 C7,15,16,C2,9C,75,D1,70
 86. 01,01,01,80,01,01,01,01 00,00,00,00,00,00,00,00 51,99,C2,9A,52,C9,F0,59
 87. 01,01,01,40,01,01,01,01 00,00,00,00,00,00,00,00 C2,2F,0A,29,4A,71,F2,9F
 88. 01,01,01,20,01,01,01,01 00,00,00,00,00,00,00,00 EE,37,14,83,71,4C,02,EA
 89. 01,01,01,10,01,01,01,01 00,00,00,00,00,00,00,00 A8,1F,BD,44,8F,9E,52,2F
 90. 01,01,01,08,01,01,01,01 00,00,00,00,00,00,00,00 4F,64,4C,92,E1,92,DF,ED
 91. 01,01,01,04,01,01,01,01 00,00,00,00,00,00,00,00 1A,FA,9A,66,A6,DF,92,AE
 92. 01,01,01,02,01,01,01,01 00,00,00,00,00,00,00,00 B3,C1,CC,71,5C,B8,79,D8
 93. 01,01,01,01,80,01,01,01 00,00,00,00,00,00,00,00 19,D0,32,E6,4A,B0,BD,8B
 94. 01,01,01,01,40,01,01,01 00,00,00,00,00,00,00,00 3C,FA,A7,A7,DC,87,20,DC
 95. 01,01,01,01,20,01,01,01 00,00,00,00,00,00,00,00 B7,26,5F,7F,44,7A,C6,F3
 96. 01,01,01,01,10,01,01,01 00,00,00,00,00,00,00,00 9D,B7,3B,3C,0D,16,3F,54
 97. 01,01,01,01,08,01,01,01 00,00,00,00,00,00,00,00 81,81,B6,5B,AB,F4,A9,75
 98. 01,01,01,01,04,01,01,01 00,00,00,00,00,00,00,00 93,C9,B6,40,42,EA,A2,40
 99. 01,01,01,01,02,01,01,01 00,00,00,00,00,00,00,00 55,70,53,08,29,70,55,92
100. 01,01,01,01,01,80,01,01 00,00,00,00,00,00,00,00 86,38,80,9E,87,87,87,A0
101. 01,01,01,01,01,40,01,01 00,00,00,00,00,00,00,00 41,B9,A7,9A,F7,9A,C2,08
102. 01,01,01,01,01,20,01,01 00,00,00,00,00,00,00,00 7A,9B,E4,2F,20,09,A8,92
103. 01,01,01,01,01,10,01,01 00,00,00,00,00,00,00,00 29,03,8D,56,BA,6D,27,45
104. 01,01,01,01,01,08,01,01 00,00,00,00,00,00,00,00 54,95,C6,AB,F1,E5,DF,51
105. 01,01,01,01,01,04,01,01 00,00,00,00,00,00,00,00 AE,13,DB,D5,61,48,89,33
106. 01,01,01,01,01,02,01,01 00,00,00,00,00,00,00,00 02,4D,1F,FA,89,04,E3,89
107. 01,01,01,01,01,01,80,01 00,00,00,00,00,00,00,00 D1,39,97,12,F9,9B,F0,2E
108. 01,01,01,01,01,01,40,01 00,00,00,00,00,00,00,00 14,C1,D7,C1,CF,FE,C7,9E
109. 01,01,01,01,01,01,20,01 00,00,00,00,00,00,00,00 1D,E5,27,9D,AE,3B,ED,6F
110. 01,01,01,01,01,01,10,01 00,00,00,00,00,00,00,00 E9,41,A3,3F,85,50,13,03
111. 01,01,01,01,01,01,08,01 00,00,00,00,00,00,00,00 DA,99,DB,BC,9A,03,F3,79
112. 01,01,01,01,01,01,04,01 00,00,00,00,00,00,00,00 B7,FC,92,F9,1D,8E,92,E9
113. 01,01,01,01,01,01,02,01 00,00,00,00,00,00,00,00 AE,8E,5C,AA,3C,A0,4E,85
114. 01,01,01,01,01,01,01,80 00,00,00,00,00,00,00,00 9C,C6,2D,F4,3B,6E,ED,74
115. 01,01,01,01,01,01,01,40 00,00,00,00,00,00,00,00 D8,63,DB,B5,C5,9A,91,A0
116. 01,01,01,01,01,01,01,20 00,00,00,00,00,00,00,00 A1,AB,21,90,54,5B,91,D7
117. 01,01,01,01,01,01,01,10 00,00,00,00,00,00,00,00 08,75,04,1E,64,C5,70,F7
118. 01,01,01,01,01,01,01,08 00,00,00,00,00,00,00,00 5A,59,45,28,BE,BE,F1,CC






              KEY                    PLAIN TEXT               CIPHER TEXT

                            PC1 AND PC2 TESTS (continued)

119. 01,01,01,01,01,01,01,04 00,00,00,00,00,00,00,00 FC,DB,32,91,DE,21,F0,C0
120. 01,01,01,01,01,01,01,02 00,00,00,00,00,00,00,00 86,9E,FD,7F,9F,26,5A,09


              KEY                   PLAIN TEXT              CIPHER TEXT

                                     PTESTS

121. 10,46,91,34,89,98,01,31 00,00,00,00,00,00,00,00 88,D5,5E,54,F5,4C,97,B4
122. 10,07,10,34,89,98,80,20 00,00,00,00,00,00,00,00 0C,0C,C0,0C,83,EA,48,FD
123. 10,07,10,34,C8,98,01,20 00,00,00,00,00,00,00,00 83,BC,8E,F3,A6,57,01,83
124. 10,46,10,34,89,98,80,20 00,00,00,00,00,00,00,00 DF,72,5D,CA,D9,4E,A2,E9
125. 10,86,91,15,19,19,01,01 00,00,00,00,00,00,00,00 E6,52,B5,3B,55,0B,E8,B0
126. 10,86,91,15,19,58,01,01 00,00,00,00,00,00,00,00 AF,52,71,20,C4,85,CB,B0
127. 51,07,B0,15,19,58,01,01 00,00,00,00,00,00,00,00 0F,04,CE,39,3D,B9,26,D5
128. 10,07,B0,15,19,19,01,01 00,00,00,00,00,00,00,00 C9,F0,0F,FC,74,07,90,67
129. 31,07,91,54,98,08,01,01 00,00,00,00,00,00,00,00 7C,FD,82,A5,93,25,2B,4E
130. 31,07,91,94,98,08,01,01 00,00,00,00,00,00,00,00 CB,49,A2,F9,E9,13,63,E3
131. 10,07,91,15,B9,08,01,40 00,00,00,00,00,00,00,00 00,B5,88,BE,70,D2,3F,56
132. 31,07,91,15,98,08,01,40 00,00,00,00,00,00,00,00 40,6A,9A,6A,B4,33,99,AE
133. 10,07,D0,15,89,98,01,01 00,00,00,00,00,00,00,00 6C,B7,73,61,1D,CA,9A,DA
134. 91,07,91,15,89,98,01,01 00,00,00,00,00,00,00,00 67,FD,21,C1,7D,BB,5D,70
135. 91,07,D0,15,89,19,01,01 00,00,00,00,00,00,00,00 95,92,CB,41,10,43,07,87
136. 10,07,D0,15,98,98,01,20 00,00,00,00,00,00,00,00 A6,B7,FF,68,A3,18,DD,D3
137. 10,07,94,04,98,19,01,01 00,00,00,00,00,00,00,00 4D,10,21,96,C9,14,CA,16
138. 01,07,91,04,91,19,04,01 00,00,00,00,00,00,00,00 2D,FA,9F,45,73,59,49,65
139. 01,07,91,04,91,19,01,01 00,00,00,00,00,00,00,00 B4,66,04,81,6C,0E,07,74
140. 01,07,94,04,91,19,04,01 00,00,00,00,00,00,00,00 6E,7E,62,21,A4,F3,4E,87
141. 19,07,92,10,98,1A,01,01 00,00,00,00,00,00,00,00 AA,85,E7,46,43,23,31,99
142. 10,07,91,19,98,19,08,01 00,00,00,00,00,00,00,00 2E,59,19,DB,4D,19,62,D6
143. 10,07,91,19,98,1A,08,01 00,00,00,00,00,00,00,00 23,A8,66,A8,09,D3,08,94
144. 10,07,92,10,98,19,01,01 00,00,00,00,00,00,00,00 D8,12,D9,61,F0,17,D3,20
145. 10,07,91,15,98,19,01,0B 00,00,00,00,00,00,00,00 05,56,05,81,6E,58,60,8F
146. 10,04,80,15,98,19,01,01 00,00,00,00,00,00,00,00 AB,D8,8E,8B,1B,77,16,F1
147. 10,04,80,15,98,19,01,02 00,00,00,00,00,00,00,00 53,7A,C9,5B,E6,9D,A1,E1
148. 10,04,80,15,98,19,01,08 00,00,00,00,00,00,00,00 AE,D0,F6,AE,3C,25,CD,D8
149. 10,02,91,15,98,10,01,04 00,00,00,00,00,00,00,00 B3,E3,5A,5E,E5,3E,7B,8D
150. 10,02,91,15,98,19,01,04 00,00,00,00,00,00,00,00 61,C7,9C,71,92,1A,2E,F8
151. 10,02,91,15,98,10,02,01 00,00,00,00,00,00,00,00 E2,F5,72,8F,09,95,01,3C
152. 10,02,91,16,98,10,01,01 00,00,00,00,00,00,00,00 1A,EA,C3,9A,61,F0,A4,64








              KEY                   PLAIN TEXT              CIPHER TEXT

                                   S-BOX TESTS

153. 7C,A1,10,45,4A,1A,6E,57 01,A1,D6,D0,39,77,67,42 69,0F,5B,0D,9A,26,93,9B
154. 01,31,D9,61,9D,C1,37,6E 5C,D5,4C,A8,3D,EF,57,DA 7A,38,9D,10,35,4B,D2,71
155. 07,A1,13,3E,4A,0B,26,86 02,48,D4,38,06,F6,71,72 86,8E,BB,51,CA,B4,59,9A
156. 38,49,67,4C,26,02,31,9E 51,45,4B,58,2D,DF,44,0A 71,78,87,6E,01,F1,9B,2A
157. 04,B9,15,BA,43,FE,B5,B6 42,FD,44,30,59,57,7F,A2 AF,37,FB,42,1F,8C,40,95
158. 01,13,B9,70,FD,34,F2,CE 05,9B,5E,08,51,CF,14,3A 86,A5,60,F1,0E,C6,D8,5B
159. 01,70,F1,75,46,8F,B5,E6 07,56,D8,E0,77,47,61,D2 0C,D3,DA,02,00,21,DC,09
160. 43,29,7F,AD,38,E3,73,FE 76,25,14,B8,29,BF,48,6A EA,67,6B,2C,B7,DB,2B,7A
161. 07,A7,13,70,45,DA,2A,16 3B,DD,11,90,49,37,28,02 DF,D6,4A,81,5C,AF,1A,0F
162. 04,68,91,04,C2,FD,3B,2F 26,95,5F,68,35,AF,60,9A 5C,51,3C,9C,48,86,C0,88
163. 37,D0,6B,B5,16,CB,75,46 16,4D,5E,40,4F,27,52,32 0A,2A,EE,AE,3F,F4,AB,77
164. 1F,08,26,0D,1A,C2,46,5E 6B,05,6E,18,75,9F,5C,CA EF,1B,F0,3E,5D,FA,57,5A
165. 58,40,23,64,1A,BA,61,76 00,4B,D6,EF,09,17,60,62 88,BF,0D,B6,D7,0D,EE,56
166. 02,58,16,16,46,29,B0,07 48,0D,39,00,6E,E7,62,F2 A1,F9,91,55,41,02,0B,56
167. 49,79,3E,BC,79,B3,25,8F 43,75,40,C8,69,8F,3C,FA 6F,BF,1C,AF,CF,FD,05,56
168. 4F,B0,5E,15,15,AB,73,A7 07,2D,43,A0,77,07,52,92 2F,22,E4,9B,AB,7C,A1,AC
169. 49,E9,5D,6D,4C,A2,29,BF 02,FE,55,77,81,17,F1,2A 5A,6B,61,2C,C2,6C,CE,4A
170. 01,83,10,DC,40,9B,26,D6 1D,9D,5C,50,18,F7,28,C2 5F,4C,03,8E,D1,2B,2E,41
171. 1C,58,7F,1C,13,92,4F,EF 30,55,32,28,6D,6F,29,5A 63,FA,C0,D0,34,D9,F7,93


    17.  Selecting Alphabetic or Hexadecimal keys

         a.  Either hexadecimal or alphabetic keys may be selected by choosing
Option H on the Additional Options Menu.

         b.  From the Master Menu, select Option L, Additional Options Menu by
pressing the letter 'L', upper or lower case.

         c.  From the Additional Options Menu, select Option H by pressing the
letter 'H', upper or lower case.  When the Key Type Status Menu appears (see
Figure 36), press the letter of your choice.  The menu will be changed to
reflect your selection.  Press the letter 'C' to return to the Additional
Options Menu.

         d.  Your selection will be effective for the duration of this work
session only.  If you wish to change it again during this session, repeat the
steps a through c, above.

         e.  If you wish to make your selection the new default which will be
in effect the next time The Private Line is started, see Section 19, Saving
Switch Settings.














_______________________________________________________________
                         THE PRIVATE LINE

                          KEY TYPE STATUS

                    CURRENT STATUS:  Alphabetic

                              OPTIONS

                    A.  Use Hexadecimal keys
                    B.  Use Alphabetic keys
                    C.  RETURN TO OPTIONS MENU

                    Enter the letter of your choice:
  _______________________________________________________________
                            Figure 36.


    18.  Changing Purging Status

         a.  Several features may be selected concerning the purging status.

         b.  From the Master Menu, select Option L, Additional Options Menu by
pressing the letter 'L', upper or lower case.

         c.  From the Additional Options Menu, select Option I by pressing the
letter 'I', upper or lower case.  When the Purging Status Menu appears (see
Figure 37), press the letter of your choice.  The menu will be changed to
reflect your selection.  Press the letter 'C' to return to the Additional
Options Menu.

         d.  Your selection will be effective for the duration of this work
session only.  If you wish to change it again during this session, repeat the
steps a through c, above.

         e.  If you wish to make your selection the new default which will be
in effect the next time The Private Line is started, see Section 19, Saving
Switch Settings.

         f.  It should be noted that if you select automatic purge of the input
file after encryption, you will not be prompted to confirm the purge, regardless






of the setting of the prompt switch.  This is also true for automatic purging
after decryption.

____________________________________________________________________________
                         THE PRIVATE LINE

                          PURGING STATUS

                              OPTIONS

          A.  Change Automatic purge status after encryption
          B.  Change Automatic purge status after decryption      
          C.  Change purge prompt status after encryption
          D.  Change purge prompt status after decryption
          E.  Enter the number of times purged file is overwritten
          F.  Return to Additional Options Menu

          Enter the letter of your choice:

____________________________________________________________________________
                    Current Switch Selections
DES Mode: Electronic Code book           Short Block: No Padding
Key type: Alphabetic                     Disk verify after write: On
Automatic Purging (after encryption): No Purge Prompt (after encryption): Yes
                  (after decryption): NO              (after decryption): Yes
Times purged file overwritten: 1         Command Line: Exit      Speaker: Off
Re-use existing files: Prompt      Filename Display: On   Key Entry Echo: On
____________________________________________________________________________
 (C) Everett Enterprises, 7839 Vervain Court, Springfield, VA 22152

____________________________________________________________________________
                            Figure 37.                          


    19.  Saving Switch Settings

         a.  The switch settings displayed below the Master Menu may be changed
from the Additional Options Menu for either the duration of the current session
by selecting the appropriate option or they may be changed permanently, also
from the Additional Options Menu using Option J.

         b.  To change an individual option for the duration of the current work
session, see the appropriate section.

         c.  To save the current settings permanently, select Option L,
Additional Options Menu from the Master Menu by pressing the letter 'L', upper
or lower case.







         d.  From the Additional Options Menu, select Option J by pressing the
letter 'J', upper or lower case.  When the Save Switch Settings to Disk Menu
appears (see Figure 38), press the letter of your choice.  The switch settings
will be saved in \tpl.def and you will be returned to the Additional Options
Menu.

         e.  The current settings will be effective until you change them during
this work session.  If you change your selection during this session but do not
save it to disk, you will obtain the previous default settings when you again
use The Private Line.

         f.  If you delete \tpl.def from the root directory, you will obtain
the original default settings shown below:

____________________________________________________________________________
                         THE PRIVATE LINE

                    Save Switch Settings to Disk

                              OPTIONS

               A.  Save Current Switch Settings to Disk
               B.  RETURN TO OPTIONS MENU

               Enter the letter of your choice:
____________________________________________________________________________
                    Current Switch Selections
DES Mode: Electronic Code book           Short Block: No Padding
Key type: Alphabetic                     Disk verify after write: On
Automatic Purging (after encryption): No Purge Prompt (after encryption): Yes
                  (after decryption): NO              (after decryption): Yes
Times purged file overwritten: 1         Command Line: Exit      Speaker: Off
Re-use existing files: Prompt      Filename Display: On   Key Entry Echo: On
____________________________________________________________________________
 (C) Everett Enterprises, 7839 Vervain Court, Springfield, VA 22152

____________________________________________________________________________
                            Figure 38.

    20.  Selecting Command Line exit action

         a.  You may either exit to the operating system or you may exit to the
master menu upon termination of the command line action.  Command line exit
action is selected by choosing Option K on the Additional Options Menu.

         b.  From the Master Menu, select Option L, Additional Options Menu by
pressing the letter 'L', upper or lower case.







         c.  From the Additional Options Menu, select Option K by pressing the
letter 'K', upper or lower case.  When the Command Line Exit Status Menu appears
(see Figure 39), press the letter of your choice.  The menu will be changed to
reflect your selection.  Press the letter 'C' to return to the Additional
Options Menu.

         d.  Your selection will be effective for the duration of this work
session only.  If you wish to change it again during this session, repeat the
steps a through c, above.

         e.  If you wish to make your selection the new default which will be
in effect the next time The Private Line is started, see Section 19, Saving
Switch Settings.
_________________________________________________________________
                         THE PRIVATE LINE

                     Command Line Exit Status

                       CURRENT STATUS: Menu

                             OPTIONS

               A.  Exit after Command Line
               B.  Return to Master Menu after Command Line
               C.  RETURN TO OPTIONS MENU

               Enter the letter of your choice:
_________________________________________________________________
                            Figure 39.



    21.  Changing File Re-use Status

         a.  You may automatically re-use a file which currently exits or you
may be prompted before it is re-used.

         b.  From the Master Menu, select Option L, Additional Options Menu by
pressing the letter 'L', upper or lower case.

         c.  From the Additional Options Menu, select Option L by pressing the
letter 'L', upper or lower case.  When the Change File Re-use Status Menu
appears (see Figure 40), press the letter of your choice.  The menu will be
changed to reflect your selection.  Press the letter 'C' to return to the
Additional Options Menu.

         d.  Your selection will be effective for the duration of this work
session only.  If you wish to change it again during this session, repeat the






steps a through c, above.

         e.  If you wish to make your selection the new default which will be
in effect the next time The Private Line is started, see Section 19, Saving
Switch Settings.


_________________________________________________________________
                         THE PRIVATE LINE

                     Re-Use Existing File Status

                      CURRENT STATUS: Prompt

                             OPTIONS

                    A.  Prompt user before re-use
                    B.  Automatically re-use
                    C.  RETURN TO OPTIONS MENU

                    Enter the letter of your choice:
_________________________________________________________________
                            Figure 40.



         22.  DES Modes of Operation.

                 a.  Electronic Code book Mode (ECB).  The electronic code book mode
is defined as follows:

                        (1)  In ECB encryption, a plain text data block is used
directly as the DES input block which is processed through a DES device in the
encrypt state.  The resulting output block is used as the cipher text.  If the
plain text does not consist of an integral number of data blocks, then the final
partial data block is processed using either padding or cipher text stealing,
depending on the user selection for Short Blocks.

                        (2)  In ECB decryption, a cipher text data block is used
directly as the DES input block which is processed through a DES device in the
decrypt state.  The resulting output block is the plain text.  If the plain text
does not consist of an integral number of data blocks, then the final partial
data block is processed using either padding or cipher text stealing, depending
on the user selection for Short Blocks.







                        (3)  To use ECB mode, take the following steps:

                             (a)  From the additional options menu, select Option 'M'. 
See Figure 41.

                             (b)  Select the DES Mode of choice by pressing the letter
which represents the desired mode.

____________________________________________________________________________
                         THE PRIVATE LINE

                      DES Mode of Operation

                          CURRENT STATUS: Electronic Code book

                             OPTIONS

                        A.  Electronic Code Book
                        B.  Cipher Block Chaining
                        C.  64 Bit Cipher Feedback
                        D.  64 Bit Output Feedback
                        E.  8 Bit Cipher Feedback
                        F.  8 Bit Output Feedback
                        G.  Return to Options Menu

                        Enter the letter of your choice:

____________________________________________________________________________
 (C) Everett Enterprises, 7839 Vervain Court, Springfield, VA 22152

____________________________________________________________________________
                            Figure 41.


                            (c)  Once you make a selection, the current status will
be changed and the DES Mode of Operation Menu will re-appear.  Press 'G' to
return to the Additional Options Menu.

                 b.  Cipher Block Chaining Mode (CBC).  The cipher block chaining
mode is defined as follows:

                        (1)  In CBC encryption, a plain text is divided into blocks. 
The first DES input block is formed by exclusive-ORing the first block of a
message with a 64-bit initialization value (IV).  The input block is processed
through a DES device in the encrypt state and the resulting output block is used
as the first cipher text.  The cipher text block is then exclusive-ORed with the
next plain text data block to form the next DES input block, which is processed






through the DES device in the encrypt state to produce the next cipher text
block.  This encryption process continues to "chain" successive cipher and plain
text blocks until the last plain text block in the message is encrypted.  If the
plain text does not consist of an integral number of data blocks, then the final
partial data block is processed using either padding or cipher text stealing,
depending on the user selection for Short Blocks.

                        (2)  In CBC decryption, the first cipher text block is used
as the input block and is processed through a DES device in the decrypt state; 
the resulting output block is then exclusive-ORed with the initialization value
(must be the same as that used during encryption) to produce the first plain
text block.  The second cipher text block is then used as the input block and
is processed through the DES device in the decrypt state and the resulting
output block is exclusive-ORed with the first cipher text block to produce the
second plain text block.  The CBC decryption process continues in this manner
until the last complete cipher text block has been decrypted.  If the cipher
text does not consist of an integral number of data blocks, then the final
partial data block is processed using either padding or cipher text stealing,
depending on the user selection for Short Blocks.

                        (3)  To use CBC mode, take the following steps:

                             (a)  From the additional options menu, select Option
'M'.  See Figure 41.

                             (b)  Select the DES Mode of choice by pressing the
letter which represents the desired mode.  After the current status has been
updated, select another choice or return to the Additional Options menu.

                 c.  Cipher Feedback Mode (CFB).  The cipher feedback mode is
defined as follows:

                        (1)  A message to be encrypted is divided into data units each
containing K bits.  In both the CFB encrypt and decrypt operations, an
initialization value (IV) is used.  The IV is placed in the least significant
bits of the DES input block with the unused bits set to '0's.  This input block
is processed through a DES device in the encrypt state to produce an output
block.  During encryption, cipher text is produced by exclusive-ORing a k-bit
plain text data unit with the most significant k bits of the output block. 
Similarly, during decryption, plain text is produced by exclusive-ORing a k-bit
unit of cipher text with the most significant k-bits of the output block.  In
both cases, the unused bits of the DES output block are discarded.  In both
cases the next input block is created by discarding the most significant k-bits
of the previous input block, shifting the remaining bits k positions to the left
and then inserting the k bits of cipher text just produced in the encryption
operation or just used in the decrypt operation into the least significant
positions.  This input block is then processed through the DES device in the
encrypt state to produce the next output block.  This process continues until






the entire plain text message has been encrypted or until the entire cipher text
message has been decrypted.

                        (2)  To use 64 or 8-bit CFB mode, take the following steps:

                                (a)  From the additional options menu, select Option
'M'.  See Figure 41.

                                (b)  Select the DES Mode of choice by pressing the
letter which represents the desired mode.  After the current status has been
updated, select another choice or return to the Additional Options menu.

                 d.  Output Feedback Mode (OFB).  The output feedback mode is
defined as follows:

                        (1)  A message to be encrypted is divided into data units each
containing K bits.  In both the OFB encrypt and decrypt operations, an
initialization value (IV) is used.  The IV is placed in the least significant
bits of the DES input block with the unused bits set to '0's.  This input block
is processed through a DES device in the encrypt state to produce an output
block.  During encryption, cipher text is produced by exclusive-ORing a k-bit
plain text data unit with the most significant k bits of the output block. 
Similarly, during decryption, plain text is produced by exclusive-ORing a k-bit
unit of cipher text with the most significant k-bits of the output block.  In
both cases, the unused bits of the DES output block are discarded.  In both
cases the next input block is created by discarding the most significant k-bits
of the previous input block, shifting the remaining bits k positions to the left
and then inserting the k bits of cipher text just used into the least
significant positions.  This input block is then processed through the DES
device in the encrypt state to produce the next output block.  This process
continues until the entire plain text message has been encrypted or until the
entire cipher text message has been decrypted.

                        (2)  To use 64 or 8-bit OFB mode, take the following steps:

                                (a)  From the additional options menu, select Option
'M'.  See Figure 41.

                                (b)  Select the DES Mode of choice by pressing the
letter which represents the desired mode.  After the current status has been
updated, select another choice or return to the Additional Options menu.

         23.  Short block processing.

                 The ECB and CBC modes are block methods of encryption and as such,
must operate on 64-bit data blocks.  Partial data blocks (short blocks of less
than 64-bits, or 8 characters) require special handling.  The Private Line uses
the following methods:






                 a.  Padding - If padding is used, The Private Line will extend the
input text to be encrypted to the next whole multiple of 64-bits using whatever
characters are present in the input buffer.  This precludes anyone from guessing
if the last block consists of mostly spaces, binary zeros, etc.  The user is
responsible for knowing what to expect in the decryption mode.  One cannot
select 'no padding' to decrypt a file which was encrypted using 'padding.'

                 b.  No Padding - If padding is not used, The Private Line will use
cipher text stealing to encrypt any short block at the end of the plain text. 
The will maintain the integrity of the security of the encryption process.  In
a plain text file with a short block, the last eight characters are encrypted
as a complete block.  In ECB mode, the short block will consist of the
characters in the short block and characters already encrypted from the previous
whole block in order to make a complete block.  In CBC mode, the last encrypted
whole block is used to produce the DES input text for the short block which also
has been lengthened by adding characters from the previously encrypted whole
block to those in the short block.

                 c.  Selecting Padding choice.  To use 64 or 8-bit OFB mode, take
the following steps:

                        (1)  From the additional options menu, select Option 'N'.  See
Figure 42.

                        (2)  Select the use of padding by pressing the letter which
represents the desired mode.  After the current status has been updated, select
another choice or return to the Additional Options menu.

____________________________________________________________________________
                         THE PRIVATE LINE

                      Short Block Processing

                       CURRENT STATUS: No Padding

                             OPTIONS

                        A.  Do not pad short blocks
                        B.  Pad short blocks
                        C.  Return to Options Menu

                        Enter the letter of your choice:
____________________________________________________________________________
 (C) Everett Enterprises, 7839 Vervain Court, Springfield, VA 22152

____________________________________________________________________________
                            Figure 42.







         24.  Initialization value.  All of the DES modes of operation used by the
Private Line use an initialization value or vector (IV) except ECB.  The user
is cautioned that the same IV must be used for decryption which was used for
encryption.  The default, or preset IV is: 12,34,56,78,90,ab,cd,ef in
hexadecimal pairs.  The user may change this default to one's own choice.  To
set a different IV, take the following steps:

                a.  From the additional options menu, select Option 'O'.  See Figure
43.

            b.  Select your choice by pressing the letter which represents the
desired action.  After the current status has been updated, select another
choice or return to the Additional Options menu.  If 'Change Initial Value' is
selected, the user will be prompted to enter a new IV in hexadecimal pairs. 
After the new IV is entered, the user will be asked to verify the new IV.  If
it is correct, press 'Y' and return to the Additional Options Menu.  If it is
incorrect, press 'N' to re-enter a new IV.  A CNTRL-R will return the user to
the additional options menu at anytime.

____________________________________________________________________________
                         THE PRIVATE LINE

                           Initial Value

                         CURRENT VALUE: 12,34,56,78,90,ab,cd,ef

                             OPTIONS

                        A.  Change Initial Value
                        B.  Return to Options Menu

                        Enter the letter of your choice:
____________________________________________________________________________
 (C) Everett Enterprises, 7839 Vervain Court, Springfield, VA 22152

____________________________________________________________________________
                            Figure 43.


         25.  Turn Speaker Switch On/Off.  A beep will occur whenever The Private
Line is waiting for input from the user.  This is most annoying to some users! 
Thus, the user may select Option P from the Additional Options Menu in order to
turn the speaker on or off (See Figure 44).  The default is: speaker off.






____________________________________________________________________________
                         THE PRIVATE LINE

                           Speaker Switch

                          CURRENT STATUS: Speaker Off

                             OPTIONS

                  A.  Turn Speaker On
                  B.  Turn Speaker Off
                      C.  Return to Options Menu

                        Enter the letter of your choice:
____________________________________________________________________________
 (C) Everett Enterprises, 7839 Vervain Court, Springfield, VA 22152

____________________________________________________________________________
                            Figure 44.


         26.  Change Filename Display Status.  Whenever The Private Line is
waiting for a file name to be entered, the file names which are contained on the
current directory are displayed.  The user may select either the filename which
is high-lighted by pressing RETURN or the user may type in the desired file
name, with or without a path name.  The high-light bar may be moved by using the
cursor keys.  If the user does not want the file names displayed, the option
switch may be changed by using Selection Q from the Additional Options Menu (See
Figure 45).  The default is: display file names.
____________________________________________________________________________
                         THE PRIVATE LINE

                         Filename Display

                              CURRENT STATUS: Off

                             OPTIONS

                        A.  Display filenames
                        B.  Do not display filenames
                        C.  Return to Options Menu

                        Enter the letter of your choice:
____________________________________________________________________________
 (C) Everett Enterprises, 7839 Vervain Court, Springfield, VA 22152

____________________________________________________________________________
                            Figure 45.







C.  Command Line execution


    1.  Encryption - A file may be encrypted from the DOS prompt using either
an alphabetic key consisting of 1-16 characters or a hexadecimal key of 2-32 hex
characters.  The key will be right-filled with blanks (hex value 20H) to the
shorter of 8 or 16 characters.  If 16 characters are used, the file will be
doubly encrypted.  To encrypt a file from the DOS prompt, take the following
steps:

        a.  Type 'private e ' followed by a file name followed by a space and
an alphabetic key of 1 to 16 characters.  Remember that the characters in the
alphabetic key are case specific.  The file name may be any MS-DOS file name;
it may contain a pathname specification.

        b.  All current default switches are valid when the command line mode
is used except the key type.  Regardless of the key type setting, alphabetic
keys are the default on the command line entry.  The use of hexadecimal keys is
indicated by placing an 'h' before the 'e' or 'd' in the command line (see
example).  If the command line mode exits to the master menu, the current
setting for the key type again takes precedence.

        c.  Examples: 'private e \tpl\msg.dat abcdefgH',
                      'private he \tpl\msg.dat 7ca110454a1a6e57'.

    2.  Decryption - A file may be decrypted from the DOS prompt using either
an alphabetic key consisting of 1-16 characters or a hexadecimal key of 2-32 hex
characters.  The key will be right-filled with blanks (hex value 20H) to the
shorter of 8 or 16 characters.  If 16 characters are used, the file will be
doubly decrypted.  To decrypt a file from the DOS prompt, take the following
steps:

        a.  Type 'private d ' followed by a file name followed by a space and
an alphabetic key of 1 to 16 characters.  Remember that the characters in the
key are case specific.  The file name may be any MS-DOS file name; it may
contain a pathname specification.

        b.  All current default switches are valid when the command line mode
is used except the key type.  Regardless of the key type setting, alphabetic
keys are the default on the command line entry.  The use of hexadecimal keys is
indicated by placing an 'h' before the 'e' or 'd' in the command line (see
example).  If the command line mode exits to the master menu, the current
setting for the key type again takes precedence.

        c.  Examples: 'private d \tpl\msg.dat abcdefgH',
                      'private hd \tpl\msg.dat 7ca110454a1a6e57'.







    3.  Convert file to ASCII data - A file may be converted from binary data
to ASCII which can then be sent over a telecommunications network or printed.

        a.  Type 'private a ' followed by a file name followed by a carriage
return.  The file name may be any MS-DOS file name; it may contain a pathname
specification.

        b.  All current default switches are valid when the command line mode
is used.

        c.  Example: 'private a \tpl\msg.dat'.

    4.  Convert file to binary data. - A file may be converted from ASCII data
to binary.  Please note that it does not make sense to use this function unless
a file has first been converted to ASCII data using The Private Line.

        a.  Type 'private b ' followed by a file name followed by a carriage
return.  The file name may be any MS-DOS file name; it may contain a pathname
specification.

        b.  All current default switches are valid when the command line mode
is used.

        c.  Example: 'private b \tpl\msg.dat'.

    5.  Command Line Exit action - The command line mode may exit to DOS or it
may exit to The Private Line Master Menu.  If the current setting saved in
\tpl.def indicates 'EXIT', The Private Line will return to the DOS prompt upon
termination of encryption or decryption.  If 'MENU' is the current setting, the
command line mode will pass to the master menu upon completion of either
encryption or decryption.  To change the action taken upon termination of the
command line option, see paragraph 20, Section II B, 'Selecting Command Line
exit action.'

    6.  Only encryption/decryption, single or double, and conversion to and/or
from ASCII to binary form, may be performed from the MS-DOS command line.  All
other actions must be selected from the master menu.

D.  Other Aspects of The Private Line

    1.  Selection of keys - Users should pick keys which are random and known
only by the user and intended recipient.  Keys such as one's nickname, spouse's
name, or other keys which could be associated with either the user or the
recipient, should not be used.  Using one's birthday or wedding date is not a
good idea.  Such keys are too easy to guess.  Keys should be changed as
frequently as possible, depending on the criticality of the data involved.

    2.  Protection of keys - Keys should be afforded the same protection as the






data itself.  Keys should never be stored with either the clear text or the
associated encrypted file.  After a key has been used by The Private Line, it
as well as the input and output data areas, is overwritten with binary zeroes
in order to preclude a possible compromise.  For obvious reasons, users should
take special care not to lose or destroy keys of files which are maintained only
in encrypted form.

    3.  Destruction of unencrypted data - Files which have been encrypted may
be maintained in clear form in a safe and secure place, separate from that used
to store either the keys or the encrypted file.  This will protect the user
against either lost keys or destruction of data because of CPU or disk failure
(hopefully a rare occurrence).

    4.  When the Private Line terminates execution, it has destroyed all data,
including keys, maintained in RAM memory and input/output buffers.






                             III.  Requirements

A.  Hardware requirements:  IBM PC, XT, AT, PS/2 or compatible.

B.  Software requirements:  MS-DOS Operating System, Version 2.x or later,
including 3.x and 4.x.

C.  Memory requirements:  64K.







                               IV.  REFERENCES



a.  Bosworth, Bruce.  Codes, Ciphers, and Computers.  Rochelle Park, New        
         Jersey:  Hayden Book Company, 1982.

b.  'Data Encryption Standard,' Federal Information Processing Standards
         (FIPS) Publication 46, National Bureau of Standards, U.S. Department of
         Commerce, Washington, D.C., January 1977.

c.  'DES Modes of Operation,' Federal Information Processing Standards (FIPS)
         Publication 81, National Bureau of Standards, U.S. Department of
       Commerce, Washington, D.C., December 1980.

d.  'Guidelines for Implementing and Using the NBS Data Encryption Standard,'
         Federal Information Processing Standards (FIPS) Publication 81, National
         Bureau of Standards, U.S. Department of Commerce, Washington, D.C.,
         April 1981.

e.  Meyer, Carl H. and Stephen M. Matyas.  Cryptography.  New York:  John       
         Wiley & Sons, 1982.

f.  Norton, Peter.  MS-DOS and PC-DOS User's Guide.  Englewood Cliffs: 
         Prentics/Hall International, 1984.

g.  'Validating the Correctness of Hardware Implementations of the NBS Data     
         Encryption Standard,' NBS Special Publication 500-20, National Bureau of
         Standards, U.S. Department of Commerce, Washington, D.C., Revised 
         September 1980.






                     V.  THE PRIVATE LINE PROBLEM REPORT


Date: ________________  Version #: ___________
Please Report only one problem per report.

Describe your hardware and operating system.  Please include disk format,
graphics card, monitor, operating system, memory and TSRs in use.

Please provide a clear description of the problem and the circumstances
surrounding its occurrence.  If possible, give an example.  If a software patch
or other solution is being used, please provide a complete description.  This
form may also be used to submit suggested enhancements to The Private Line.

Problem Description:
















Please complete the following before submitting the form:

Name: ____________________________ Phone: ______________________
Company: _______________________________________________________
Address: _______________________________________________________
City: __________________________________________________________
State: _________ ZIP:______________

Return this form to:  Everett Enterprises
                      7839 Vervain Court
                      Springfield, VA 22152






                          VI.  Changes and Updates

A.  Changes.

     1.  Version 4.01 of The Private Line included an improved binary to ASCII
conversion routine.  Previous versions contained an algorithm which doubled the
size of the file when converting from binary to ASCII.  This version, however,
increases the file only by 37%.  The user must be cautioned that files converted
to ASCII by earlier versions must be converted to binary by the same version
before decryption can take place.

     2.  The other major change in Version 4.01 is an improved directory listing
routine.  Older versions of The Private Line only allowed the current directory
to be listed.  This version (4.01) allows the user to specify any pathname,
including wildcard characters.

     3.  Version 4.02 adds an automated compliance test to determine if the
program complies with the Data Encryption Standard.  The test is run at program
initialization time and is invisible to the user unless one of the 19 tests
fail.  The user may also run the compliance tests and view the results of each
test by selecting option G from the additional options menu.

     4.  Version 4.03 added all 171 tests used by the National Bureau of
Standards to verify compliance with the DES.

     5.  Version 4.04 contained an improved display routine and changed the
encryption routine so that the encrypted file was no more than 1-7 bytes longer
than the source file.  Previous versions expanded the encrypted file to the end
of the last 128 byte sector in the source file.

     6.  Version 4.05 added a routine which allowed the display of the default
directory (*.*) by simply pressing RETURN.  It also fixed a bug in the display
directory routine which occurred if a file type contained only 1 or 2
characters.

     7.  Version 5.0 adds the capability of using alphabetic keys, command line
execution and the following user-set default switches:

         a. key echo
         b. automatic purge of input files after encryption and/or decryption
         c. purge prompting of input file after encryption and/or decryption
         d. verify after disk writes
         e. key types
         f. re-use of existing files with or without prompts
         g. the number of times a file is overwritten with binary zeros before
the file name is removed from the directory.







     8.  Version 5.0 also uses raw output mode in order to speed up The Private
Line.

     9.  Version 6.0 adds additional modes of operation for the DES as
contained in FIPS Pub 81.  Specifically, the following modes are supported:

                 a.  electronic code book (this method, with padding, is the one
used by all earlier versions of The Private Line),
                 b.  cipher block chaining,
                 c.  cipher feedback (both 64 & 8 bit), and
                 d.  output feedback (both 64 & 8 bit).

         10.  In addition, the method of handling short blocks has been expanded
to include no padding, as well as the original method of padding the message to
a multiple of 8 bytes.  Ciphertext stealing is the method used by both
electronic code book and cipher block chaining modes to encrypt a short block. 
The other DES modes do not require padding.

         11.  Under Version 6.0, users may specify a default initialization value,
which if not changed, is set to: 12,34,56,78,90,ab,cd,ef in hexadecimal pairs.

         12.  The following additional user-set default switches have been added
in Version 6.0:

                 a.  DES Mode of Operation
                 b.  Padding Selection
                 c.  Initialization Value

         13.  Beginning with Version 6.0, printed User's Guides are mailed upon
registration.

         14.  Version 6.01 fixed a bug in the ECB padding routine.  

         15.  Version 6.02 added the capability to disable the speaker.  Several
users have voiced their dislike of the beeps each time the program is waiting
for user input.  The default is speaker disabled.  The user may enable the
speaker from the Additional Options Menu and change the default by saving the
selected options.

         16.  Version 6.02 also changed the key to return to the previous menu. 
In previous versions, Control-R was used.  Beginning with this version, ESCAPE,
will back the user out of each operation, except for the List Directory option
while the directory is being input by the user.  This change is downward
compatible; Control-R continues to work.

         17.  Version 6.03 includes the display of the current directory when the
program is waiting for a file name.  The hi-light bar may be moved by using the






arrow and page up/page down keys.  The high-lighted filename may be selected by
pressing RETURN.  The desired filename may still be entered by typing it and/or
the associated path.  If the user begins typing a file name, the high-light bar
may still be moved, but when RETURN is pressed, the filename used is the one
entered by the user, not the one under the high-light bar.  If a filename
entered by the user is erased by using the backspace key, then the filename
under the high-light bar may once again be selected by pressing RETURN.

         18.  Version 6.04 increased the number of filenames from 10 to 50 which
are displayed when the program is waiting for a filename to be entered by the
user.  Version 6.04 also added the use of hexadecimal keys from the command
line. 

         19.  Version 6.05 corrected a bug which occurred when the Private Line
was used in a non EGA environment.

         20.  Version 6.06 corrected an error which occurred when the Private Line
was used in a CGA or MGA environment.  Actually, the problem occurred because
of the manner in which older ROM programs returned from INT 16H.

         21.  Version 7.0 added screen memory write routines for the master and
additional option menus, the opening and closing screens, the directory display
and for the screens from which the filenames contained on the current directory
are displayed. 

	 22.  Version 7.01 corrected an error in the CBC short block
decryption routine.

	 23.  Version 7.02 corrected errors in the short block decryption 
routine.

B.  Updates.

     Updates to The Private Line may be obtained from the IBM Software Special
Interest Group (IBMSW SIG) on CompuServe by downloading the file, TPL.ARC.  This
file contains all of the files associated with The Private Line, including the
User Manual documentation.  It is located in Data Library 0 for the first 30
days and then moved to Data Library 3.  

     Or, one may order a diskette from Everett Enterprises, 7839 Vervain Court,
Springfield, VA 22152, containing the latest version of The Private Line at a
nominal cost of $10 (media, handling, and postage fee).  

     Registration fees have to be paid only once.  All updates are included in
that one price.  The nominal disk fee of $10 is due each time a diskette is
obtained from Everett Enterprises.


VII.  INDEX


command line use
        decryption 40
        encryption 40
        exit action 41
        file conversion 
                Binary to ASCII 41
                ASCII to Binary 41
compliance with DES tests 23
decrypting files  9
default switches 30
     changing 30
          temporary 30
          permanent 30
     original values 30
displaying disk directories  13
displaying files  9
double decryption 14
       encryption 14
encrypting files  3
erasing files  22
exit, action taken upon command line 41
files
     ASCII 15
     binary 16
     contracted 16
     erasing 22
     expanded 15
     printable 17
     purging 10
     re-use 31
          automatic 31
          with prompts 31
invoices viii
keys 28
     alphabetic 28
     hexadecimal 28
printing files 17
Private Line, The  
     action upon receipt  2
          floppy disk systems 2
          hard disk systems 3
     execution
          command line 40
          menu 3
     testing 22






                                  VII.  INDEX (continued)

Private Line, The  
     using  3
problem reports  45
purging
     automatic 29
     with prompts 29
references  44
requirements  43
     hardware  43
     memory  43
     software  43
trouble reports 45
user set options 30
     automatic purge 29
     command line exit action 41
     disk write verification 17
     file re-use 31
     key echo 19
     key type 28
     number of times files overwritten 29
     purge prompt 29
write verify 17






 



```
{% endraw %}

## RCV.BAS

{% raw %}
```bas
100 CLOSE
110 OPEN "com1:300,n,8,1,ds" FOR INPUT AS #1
120 CLS
130 L%=1
140 GOSUB 410
150 ON INSTR("NCE+Z/",B$) GOTO 170,200,240,290,330,370
160 GOTO 140
170 '
180 N$=""
190 GOTO 140
200 '
210 GOSUB 410
220 N$=N$+B$
230 GOTO 140
240 '
250 PRINT "Transfering file = ";N$
260 CLOSE #2
270 OPEN N$ FOR OUTPUT AS #2
280 GOTO 140
290 '
300 GOSUB 410
310 PRINT #2,B$;
320 GOTO 140
330 '
340 CLOSE #2
350 GOTO 140
360 '
370 CLOSE
380 PRINT "Files all transfered"
390 STOP
400 '
410 IF L%>LEN(A$) THEN 450
420 B$=MID$(A$,L%,1)
430 L%=L%+1
440 RETURN
450 IF EOF(1) THEN 450
460 A$=INPUT$(LOC(1),#1)
470 L%=2
480 B$=MID$(A$,1,1)
490 RETURN
```
{% endraw %}

## TMT.BAS

{% raw %}
```bas
100 OPEN "com1:300,n,8,1,ds" FOR OUTPUT AS #1
110 CLS
120 PRINT :PRINT :PRINT "                          Bootstrap to different media"
130 N$="config.s"
140 GOSUB 240
150 N$="net0.sys"
160 GOSUB 240
170 N$="ps.com"
180 GOSUB 240
190 PRINT #1,"/";
200 CLOSE
210 PRINT "Files all transfered"
220 STOP
230 '
240 PRINT #1,"N";
250 FOR L%=1 TO LEN(N$)
260 PRINT #1,"C";MID$(N$,L%,1);
270 NEXT L%
280 PRINT #1,"E";
290 ON ERROR GOTO 340
300 OPEN N$ AS #2 LEN=1
310 FIELD 2,1 AS B$
320 GOTO 390
330 '
340 BEEP
350 PRINT "Error openning ";N$
360 CLOSE #2
370 STOP
380 '
390 ON ERROR GOTO 560
400 '
410 IF EOF(2) THEN 480
420 GET #2
430 PRINT #1,"+";B$;
440 LOCATE 1,1:SZ%=SZ%+1:PRINT SZ%;
450 FOR L=1 TO 100:NEXT L
460 GOTO 410
470 '
480 PRINT #1,"Z";
490 CLOSE #2
500 LOCATE 12,30
510 PRINT N$;" Transfered           "
520 ON ERROR GOTO 0
530 SZ%=0
540 RETURN
550 '
560 ON ERROR GOTO 0
570 PRINT "Data line error"
580 CLOSE #2
590 RETURN
```
{% endraw %}

## WEAKLINK.DOC

{% raw %}
```
















                             The WEAK Link


                               Version 1.1a
                           (Shareware version)





                         (c) Copyright 1987-1988

                             Don Jindra
                             Information Modes
                             P.O. Drawer F.
                             Denton, Texas  76202 
                             Phone 817-387-3339
























        This product may be distributed freely as long as nothing is added 
to, altered, or removed from the disk.  This is a shareware version of a 
commercial product.  It is fully functional but does not include source code.
A registered copy of this product can be purchased from Information Modes.

;page
                                                                        PAGE 1 
                               INTRODUCTION


        This is a simple master/slave serial link-up program.  Two standard 
IBMs or clones can be linked together via RS232 ports and a null modem cable.  
COM1 thru COM4 may be used.  The master program is a device driver which must 
be included in the config.sys file.  It is always resident and always "on".  
The slave is a .com program which, when run, allows the master to use any block 
device installed on that slave.   For instance, if the master has 1 floppy as 
A: and 1 hard disk as drive C:, then  drive D: can be the slave's drive A:, and 
drive E: can be the slave's drive C:, and drive F: can be the slave's RAMDRIVE.
Mapping of the slave's drives to the master can be in any order and can include 
or exclude any of the slave's block devices. Mapping is done via a 
SHARE:abcd...  parameter on the slave program's command line.  When the slave 
program is running the master has complete control of the computer.  This 
utility is primarily intended to allow file transfers between two machines with 
different or non-removable media.  You could transfer from a portable's 3 1/2 
inch drives to a 5 1/4 inch drive on another machine. Or you could transfer an 
entire directory of one hard disk to another on a different machine.  Transfer 
speed is selectable from 1200 to 115k baud.  Transfer is extremely simple since 
the master thinks the slave is a collection of drives.  Standard COPY and DIR 
commands work equally well on the master or slave drives.  



NOTE: Some later model PCs use 82C50 UARTs which have a bug.  NEC Multispeed
      is one example.  This bug causes The WEAK Link to run sporadically.
      A fix is in the works.


;page
                                                                        PAGE 2


                               INSTALLATION



        The WEAK Link will work on any IBM PC/XT/AT which has a serial card 
installed.  The card must follow the IBM specifications as outlined in the 
Technical Reference manual.  If it uses a 8250 or 16450 communications chip 
then it is probably ok.  The memory requirements are minimal.  DOS 2.0 or 
higher is required.  






SIMPLIFIED STEPS:


       COPY CONFIG.S                  to the slave's boot disk.
       REN  CONFIG.S  CONFIG.SYS      on the slave's boot disk.
       COPY NET00000.SYS              to the slave's boot disk.
       COPY PS.COM                    to the slave's boot disk.
                                      reboot the slave computer

       COPY CONFIG.M                  to the master's boot disk
       REN  CONFIG.M  CONFIG.SYS      on the master's boot disk
       COPY PM.SYS                    to the master's boot disk.
                                      reboot the master computer

       run PS.COM                     on the slave



       The master can now use the slave's drives as it's own.  These 
directions assume both systems have at least one 5 1/4 inch drive to read 
this disk.






TRANSFERING TO OTHER MEDIA:


        Included on this disk are two short BASICA programs which can be used 
to transfer the slave's startup files via a serial link. TMT.BAS should be run 
on the machine which can read this disk.  RCV.BAS should be run on the other 
machine, and will have to be typed in at the keyboard.  The program is short 
and shouldn't take much time to enter.  Once RCV.BAS has been entered on the 
other machine, run it under BASICA or GWBASIC.  Make sure your null cable is 
hooked up.  Then run TMT.BAS under BASICA on the main machine.  TMT.BAS will 
transfer (slowly) the three files you will need to set up the other machine as 
a slave.  Then you can transfer the rest of this disk mush faster using The 
WEAK Link.  

        If all else fails, other media can be supplied.


;page
                                                                        PAGE 3



SLAVE INSTALLATION:

        The config.sys file must include the line:

                device=net0.sys

        The net0.sys character device is used to setup the internal device 
driver list.  If net0.sys is not properly installed the slave program cannot 
find the addresses of the DOS device drivers.  It should be the first device 
in the list so should be the last line in the config.sys file.  
Programmers.... any 4 byte read of net0 will return the dword pointer to the 
net0 device driver.  This dword address can be used to search through the DOS 
device driver chain.  

        Once net0.sys is installed,  you can run ps.com to put the computer 
into the slave mode.  If the communication port you are using is not COM1 
then you must indicate which port you are using with the COMx parameter on 
the command line.  If the baud rate you want is not 56k baud then you must 
indicate your baud rate on the command line with the /nn parameter.  You can 
modify the order slave drives are presented to the master by using the 
SHARE:xxx parameter.  These parameters are described below.  When the 
master/slave link is no longer needed, just press "q" and the slave will 
return to normal operation.  

        EXAMPLE:

        A> PS COM1 /2 SHARE:ACDE






MASTER INSTALLATION:


        The config.sys file must include the line:

                device=pm.sys

        When the system reboots, the master is installed and will display its 
sign-on message.  Then the master can access the slave whenever the slave is 
running ps.com.  Necessary parameters are entered on the config.sys command 
line.  Parameters are just as in the slave device with the addition of an @nn 
parameter which tells DOS how many devices the slave will support.  

                EXAMPLE:

                DEVICE=PM.SYS COM2 /2 @4



COMBINATION MASTER/SLAVE:

        You can combine the master and slave configuration files.  This will
allow you to run the slave program PS.COM on either machine then access that 
machine from the other.  Both machines would have the master installed:

               DEVICE=NET00000.SYS
               DEVICE=PM.SYS
;page
                                                                        PAGE 4


                                COMMAND LINE PARAMETERS



COMx            You can use COM1 thru COM4 as the communications port on
                either machine.  If this parameter is not given then COM1
                is used.  If the port specified does not exist then the
                program cannot continue and will abort.

/nnn            This will specify the baud rate divisor.  The "nnn" is any 
                decimal number from 0 to 199.  The default is "/2" which is 56k 
                baud.  Both computers must use the same baud rate, so if this 
                parameter is entered on one machine, the same value must also 
                be entered on the other.  Some selected values are: 

                        /1      115,200 baud 
                        /2       57,600 baud   <-- default
                        /3       38,400 baud
                        /6       19,200 baud
                        /12       9,600 buad
                        /16       7,200 baud
                        /24       4,800 baud
                        /32       3,600 baud
                        /48       2,400 baud
                        /96       1,200 baud
                        /192        600 baud


SHARE:abc...    The slave can specify which drives the master may control and 
                in which order they are presented.  "SHARE:ca" would allow the 
                master to access drives C and A drives only, and in that order. 
                If the Master had drives A, B, and C installed locally, then 
                its logical drive D would be the slave's drive C because C was 
                the first drive in the slave's SHARE: list.  The master's drive 
                E would be the slave's drive A because A was the second drive 
                in the SHARE: list.  There can be no space between the colon 
                and the drive letters.  Up to 16 drive letters can be 
                specified.  The drive letters can be in any order and can be 
                any valid block device including ram drives.  The only 
                limitation is that the device must use 512 byte sectors.  If
                SHARE: is not specified then the default used is 
                "SHARE:abcdefghijklmnop".  This parameter is valid for the 
                slave only.


@nn             The master needs to know how many drive units to allocate to 
                the slave.  If this parameter is unused then the master assumes 
                4 drive units reside on the slave.  In most cases this is just 
                fine,  but if the master has too many drives of its own, or if 
                the master must define some more drives after the slave, or if 
                the slave has more than 4 drives, then the "@nn" parameter can 
                be used to limit or extend the number of logical drives used up 
                by the slave.  "nn" can be any decimal number from 1 to 16.  
                The default is "@4".  This parameter is valid for the master 
                only.  




        NOTE:   The command line parameters may be entered in any order and
                in either upper or lower case.
;page
                                                                        PAGE 5


                                     *** CABLE ***




NULL modem cable,  only 5 lines are used:




                       Computer 1                            Computer 2
                       ----------                            ----------

                       13*                                    13*
                             *25                                    *25
                         *                                      *
                             *                                      *
                         *                                      *
                             *                                      *
                         *                                      *
                             *                                      *
                         *                                      *
                             *                                      *
                         *                                      *
                             *-DTR------\  /----------------DTR-----*
                  GROUND *----------->>  \/  <<-----------------* GROUND
                             *           /\                         *
                     DSR *--------------/  \----------------DSR-*
                             *                                      *
                         *                                      *
                             *                                      *
                         *                                      *
                             *                                      *
                RCV DATA *-----------------\ /------------------* RCV DATA
                             *              X                       *
                TMT DATA *-----------------/ \------------------* TMT DATA
                             *14                                    *14
                        1*                                     1*




                  
                    
                    6' Ready made cable available for ...........$ 15.00
                    Programs and source on 5 1/4 inch media .....$ 15.00
                    Programs and source on 3 1/2 inch media ......+ 5.00
                    Shipping in U.S. .............................  free

                    Total package ...............................$ 30.00

;page
                                                                 9/23/87
                                                                 3/10/88
                                                                 7/28/88

                                  APPENDIX


        If you find this program to be of value please register your copy for 
$15.   The WEAK Link is as good as or superior to similar products which would 
cost you $70-$150.  Your money will directly help fund new products which may 
be even more valuable to you than this one.  We specialize in high quality 
software at ridiculously low prices.  Your $15 check can be sent to: 

                             Information Modes
                             P.O. Drawer F.
                             Denton, Texas  76202

You can also call me personally at 817-387-3339.  You'll never get an answering 
machine (I HATE THEM) and I'm always glad to answer any questions 7 days a 
week, day or night.  If you send me a check, a registered copy of the program, 
including all source code, will be sent within 24 hours.  You'll find the 
support you will get far exceeds the so-called support you get from the major 
software companies.  Try calling them with any technical question.  Here you 
can speak to the author direct.




        The WEAK Link was actually a spinoff product generated while working
on a far superior program called:
                            _____________________
                           [                     ]
                           [   The $25 Network   ]
                           [_____________________]

I had long wanted a network for my two computers but the cost of even the 
cheapest setup was prohibitive.  I decided to write my own network program 
using the RS232 cards I already had. Since networking software was relatively 
complex, I thought it would be best to tackle a simpler project first.  The 
WEAK Link was a "study" to make sure I understood DOS block device drivers.  It 
took me about 2-3 weeks.  I then used some of the concepts I had learned to 
develop The $25 Network.  It was far more complex because I wanted to be able 
to use both computers at any time, regardless of the activity on the other.  
This project took about 3 months.  But I now have a two or three computer 
network on which I can share any device - including disks and printers - at any 
time.  Its speed is equivalent to The WEAK Link.  I am also working on a larger 
network which will support even more machines, possible 20-30.  It will support 
computer to computer links via serial cards, parallel cards, or a cheap network 
card of my own design.  I also intend to support modem links.

        I hope you will register your copy of The WEAK Link.  But if you like 
the WEAK Link and are considering registering it, you may want to buy The $25 
Network instead because it renders The WEAK Link obsolete.  Of course, if you 
want source code then The WEAK Link will provide you with a good example of how 
to write DOS device drivers.  I will not offer source to The $25 Network.  
Neither will I offer it as a shareware program.  

;page
   __________________________________________________________________________
  [                                                                          ]
  [                         European customers                               ]
  [                                                                          ]
  [    As of 3/3/88, the registered version of The WEAK Link and a German    ]
  [    language version of The $25 Network is available from:                ]
  [                                                                          ]
  [                      Kirschbaum Software GmbH                            ]
  [                      Kronau 15                                           ]
  [                      D-8091 Emmering                                     ]
  [                      West Germany                                        ]
  [                      Tel. (0 80 67) 12 20                                ]
  [                      Fax. (0 80 67) 10 53                                ]
  [                                                                          ]
  [   Other versions may be available.                                       ]
  [__________________________________________________________________________]
 





Other software products available from Information Modes:


1)  The $25 Network ................................... $25
2)  DOS 1.1 Disassembled, fully commented ............. $20
3)  DOS 2.1 Disassembled, fully commented ............. $45
4)  DOS 3.2 Disassembled, fully commented ............. ??? not yet set
5)  Hercules Tools + CGA Emulator (+source)............ $15
6)  Technical Manual .................................. $5
7)  8741/2/8/9 Emulator (+source)...................... $15
8)  The WEAK Link, (this) serial version (+souce)...... $15
9)  The WEAK Link, parallel port version (+source)..... $15
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0893

     Volume in drive A has no label
     Directory of A:\

    AC       SYS       568  11-21-87   8:19p
    ADDCOM   DOC      2957  11-21-87  10:24p
    CONFIG   M          17   6-10-87   1:18a
    CONFIG   S          19   6-10-87  12:34a
    DIAGNOSE DOC      2456   1-15-88  10:40a
    FACT     SHT      7296   9-30-89  10:43a
    FILE0893 TXT      1721  11-30-89   4:21p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1158  10-21-89  12:49a
    LISTER   BAS       626   9-24-87   8:33a
    MENU              2944   2-19-89   1:10p
    MSG      DAT     19840   4-19-88   5:18p
    MSG      ENC     19840   3-25-89   8:33a
    NET00000 SYS       247   6-11-87  10:52a
    PM       SYS      2085   7-28-88   8:19p
    PRIVATE  DOC    121856   9-30-89  11:23a
    PRIVATE  EXE     39168   9-09-89   8:06a
    PS       COM      2534   7-28-88   8:20p
    RCV      BAS       671   6-11-87  10:16a
    RCV      COM      1835  10-20-87  10:35p
    READ     ME       4096   7-08-89   6:26p
    README            4315  11-22-87  10:48a
    REVIEW            5632   9-30-89  12:57p
    TMT      BAS       984   6-11-87  10:40a
    TMT      COM      1338  11-21-87  11:22p
    WEAKLINK DOC     18118   7-29-88   9:30a
           26 file(s)     262359 bytes
                           46080 bytes free
