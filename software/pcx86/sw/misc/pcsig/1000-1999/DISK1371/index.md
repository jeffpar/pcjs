---
layout: page
title: "PC-SIG Diskette Library (Disk #1371)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1371/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1371"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "QUICKTRAN"

    QUICKTRAN is a telecommunications file-transfer program which
    compresses files as they are sent across phone lines, providing
    savings in time and money.
    
    In standard file transfer protocols (like Xmodem), the computer spends
    a great deal of time waiting to send or receive data.  QUICKTRAN puts
    this time to use, compressing and decompressing data as it comes in or
    goes out.  A comparison of QUICKTRAN to Xmodem demonstrated that
    QUICKTRAN is, on the average, almost twice as fast.
    
    The program is fully documented, easy to install and use.  A copy is
    required by both the sending and receiving computer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1371.TXT

{% raw %}
```
Disk No: 1371
Program Title: QUICKTRAN
PC-SIG version 1

QUICKTRAN is a telecommunications file-transfer program which compresses
files as they are sent across phone lines for saving in time and cost.

In standard file transfer protocols (like Xmodem), the computer spends a
great deal of time waiting to send or receive data.  QUICKTRAN puts this
time to use, compressing and decompressing data as it comes in or goes
out.  A comparison of QUICKTRAN to Xmodem demonstrated that QUICKTRAN
is, on the average, almost twice as fast.

The program is fully documented, easy to install and use.  A copy is
required by both the sending and receiving computer.

Synopsis: Telecommunications program that compresses files before
transmission resulting in a savings of both time and phone bills.

Usage:  Telecommunications.

Special Requirements:  Hayes compatible modem.

How to Start:  Type GO (press enter).

Suggested Registration:  $19.95

File Descriptions:

QT       EXE  Main program.
QT       DOC  Documentation file.

PC-SIG
1030D E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## QT.DOC

{% raw %}
```






                           Eidolon Technologies presents:

           QUICKTRAN(tm) - as seen in Byte, Online Today, PCM and PC Week

                 Copyright 1988 Adrian Burton - All Rights Reserved


              QuickTran is a new telecommunications file transfer program
         which compresses files as they are sent across phone lines.  In
         standard file transfer protocols (like Xmodem), the computer spends
         a great deal of time merely waiting to send or receive data. 
         QuickTran puts this time to use - compressing and decompressing
         data as it comes in or goes out.  QuickTran uses a variety of
         state-of-the-art compression techniques, and picks the one it
         thinks is best suited to the file being transferred.  Head to head
         comparison of QuickTran to Xmodem demonstrated that QuickTran is,
         on the average, almost twice as fast.  A 1200 baud modem transfers
         files at the functional equivalent of 2000 baud, a 2400 baud modem
         at 4000 baud.  With certain files, such as spreadsheet and database
         files, QuickTran is even faster - up to five times as fast as
         Xmodem.  Regardless of what kinds of files are transferred, using
         QuickTran will result in substantial savings in time and on phone
         bills.

              A sophisticated 16 bit CRC block error detection method is
         used to protect against bad connections or random noise during the
         transmission, thereby insuring error free transfers.

              QuickTran also offers convenience and simplicity.  With
         QuickTran, it's easy to pause during a phone conversation in order
         to transfer one or more files.  The complete file transfer can be
         invoked with a single short command line.  In most cases, it is as
         simple as "qt s FILENAME" to send a file, and "qt r FILENAME" to
         receive a file.  Sending and receiving multiple files is also
         supported.  QuickTran can be called directly from DOS or from
         within a terminal program which has a DOS shell feature.

              This version of QuickTran is the shareware version.  You may
         distribute copies of it freely provided that both the program and
         documentation are distributed together in their original unmodified
         state.  The only permissible distribution fee is a reasonable fee
         charged by a business which distributes shareware programs.  You
         are granted a limited license to use this version of QuickTran on a
         trial basis - solely to determine whether or not it will be useful
         to you.  Any subsequent unregistered use of QuickTran is
         prohibited.

              Registration entitles you to continue using QuickTran - but
         only on one computer at any given time.  Although great effort has
         been taken to insure the proper functioning of QuickTran, Eidolon
         Technologies and the author do not make any guarantees as to the
         fitness of QuickTran for any particular purpose and disclaim
         liability for losses of any kind or nature, incurred or alleged to
         have been incurred as a result of the use or misuse of QuickTran.





          This shareware version of QuickTran is for the IBM PC series and
          compatibles.  It requires 144K of memory and a Hayes or Hayes
          compatible modem.

          As a possible alternative to registering the shareware version,
          you may want to consider ordering the commercial version of
          QuickTran described at the end of this document.  Although it is
          more expensive, it offers a number of advantages and features not
          present in the shareware version.

          ----------------------------------------------------------------

          To register your copy of the shareware version of QuickTran,
          send your name, address and $19.95 to:

          -----------------------
          Eidolon Technologies
          Department E5
          P.O. Box 20680
          Columbus Circle Station
          New York, N.Y. 10023
          -----------------------

          Since QuickTran is needed on both ends of a file transfer
          (sending and receiving), both users will need to register
          their copies of the program.

          ----------------------------------------------------------------
                      
          Trademark acknowledgements:
          Hayes is a trademark of Hayes Microcomputer Products, Inc.
          IBM PC is a trademark of International Business Machines Corp.

          ----------------------------------------------------------------

          The complete documentation for the shareware version of QuickTran
          can be found on the following three pages.

          The documentation is divided into five sections:

          Installation
          Overview
          Command Line Switches
          Multiple File Transfers
          During The Transfer




          INSTALLATION:

               QuickTran is supplied as a single executable program file,
          "qt.exe".  QuickTran needs to be installed before it can be used
          properly.  The first step in the installation procedure is to
          copy "qt.exe" from your original program disk to a work disk (or
          to your hard drive).  Your work copy should also be called
          "qt.exe".  Keep the original program disk as a backup copy. 
          Since QuickTran modifies itself during the installation
          procedure, the work copy of "qt.exe" must not be write protected
          during the installation process.  From the directory of your work
          copy, at the DOS prompt, enter "qt install" - executing QuickTran
          with the 'install' parameter.  QuickTran will present menus
          asking for your modem type, your default com port, and your
          default baud rate.  Your default com port should be your modem's
          com port, and your default baud rate should be the baud rate you
          use most often.  If you should want to change these settings
          later on, you can do so by entering "qt install" and answering
          the questions again.

               If you have a hard drive, it is a good idea to place
          "qt.exe" in the DOS command path.  This way, QuickTran can be
          used from any directory on your hard drive.  This can be
          accomplished by using the DOS 'path' command.


          OVERVIEW:

               If QuickTran is executed without supplying any command line
          parameters, it will respond with an information screen.  The
          screen displays, among other things, the selections you made
          during the installation process.  It also displays the following
          line describing QuickTran's usage:

          qt [install] [/ac] [/bRATE] [/cN] s|r FILE1 [FILE2 FILE3 ...]

               As the above line suggests, QuickTran can be executed with
          one or more command line parameters which are separated by
          spaces. The square brackets indicate that the enclosed parameters
          are optional.  A bar (such as the one in 's|r') indicates that
          one of the two (not both) separated parameters should appear on
          the command line.  Parameters that start with '/' are known as
          'switches'.  We have already seen how the first parameter,
          'install', is used (in the installation process).  The three
          switches are not always used and will be considered later on.

               The 's|r' parameter is used to indicate whether you want to
          send or receive the file in question.  Either 's' or 'r' should
          appear on your command line.  For example, "qt s FILENAME" is
          used to send a file, while "qt r FILENAME" is used to receive a
          file.  'FILENAME' is, of course, not to be taken literally - it
          is the equivalent of 'FILE1' in the one line usage description,
          and represents the name of the file you want to send or receive. 
          The receiver and sender can but do not have to use the same file
          names.  Using QuickTran without switches or multiple file names
          presupposes that you are using the default com port and baud
          rate, that you want to transfer only one file, and that you are
          presently in the voice mode of communication.



          COMMAND LINE SWITCHES:

               Any combination of the three switches, '/ac', '/bRATE', and
          '/cN', can appear in any order on the command line, but they must
          all be before the 's' or 'r'.

               The '/ac' switch is known as the "already-connected" switch. 
          It is used to tell QuickTran that a data connection has already
          been established (i.e. the modems are already connected).  This
          switch can be used to transfer files over a 'null-modem' cable,
          but is most often used in conjunction with the DOS shell feature
          of a terminal program.  In other words, you can connect your
          modem from a terminal program, temporarily exit to DOS, transfer
          files using QuickTran, and then resume communication in your
          terminal program - all without ever disrupting your carrier.  For
          example, the sender would, after temporarily exiting to DOS,
          enter "qt /ac s FILENAME".  If the '/ac' switch is not used,
          QuickTran will assume that you are presently involved in voice
          communication and will automatically perform the steps necessary
          to begin data transmission.

               The '/bRATE' switch is used when you want to communicate at
          a baud rate other than your default baud rate.  Valid baud rates
          are 300, 600, 1200, 2400, 4800, 9600, and 19200 baud.  One of
          these rates should replace the 'RATE' in '/bRATE' - leaving no
          spaces after the 'b'.  You need only specify the first two digits
          of the baud rate.  For example, "qt /b24 s FILENAME" and
          "qt /b2400 s FILENAME" both do the same thing - send a file using
          2400 baud.

               The '/cN' switch is used to specify a com port other than
          the default com port.  Either '1' or '2' should replace the 'N'
          in '/cN' - leaving no spaces after the 'c'.  For example,
          "qt /c2 s FILENAME" would send a file using com port 2.

               As mentioned earlier, multiple switches can be used on the
          same command line.  For example, "qt /b300 /c2 /ac s FILENAME"
          specifies that 300 baud and com port 2 should be used to send a
          file between already connected modems.


          MULTIPLE FILE TRANSFERS:

               QuickTran can be used to send and receive multiple files. 
          This is accomplished by listing the files at the end of the
          command line.  The one line usage description describes this as
          'FILE1 [FILE2 FILE3 ...]'.  You can specify as many files as will
          fit on your command line.  The sender and receiver can use
          different file names, but both should specify the same number of
          files.  For example, the sender can use "qt s letter.wp data.dbf"
          while the receiver uses "qt r letter.doc stats.dat".  After the
          transfer the corresponding files will be identical - although
          their names differ.  Before sending multiple files QuickTran
          checks to make sure that all the files exist.  Before receiving
          files, QuickTran checks for already existing files of the same
          name and, if it finds matches, asks you for overwrite permission.



          DURING THE TRANSFER:

               When one party (either the sender or receiver) initiates a
          file transfer his QuickTran will wait for the other party to get
          started.  If the other party does not enter an appropriate
          QuickTran command line within 90 seconds, the originating party's
          QuickTran will automatically abort the transfer.  Users can
          initiate an earlier abort with Alt-A (Pressing the 'A' key while
          holding down the 'Alt' key).  Alt-A can also be used to abort at
          other times during a transfer.

               QuickTran provides a variety of status information
          throughout a transfer.  At the beginning QuickTran supplies an
          "Estimated transfer time" (in minutes) and an "Estimated number
          of blocks in transfer".  This is meant to provide a rough
          estimate of how long the transfer of the specified file will
          take.

               If you are using QuickTran from a voice connection, you will
          be reminded to  '[Enable mute or hang up handset]' at the
          beginning of the transfer and '[Disable mute or pick up handset]'
          at the end.  The idea is to prevent extraneous noise from
          interfering with your transfer.  These steps are usually
          optional, though some modems (eg. EV-920) will not connect with
          an off-hook handset.

               Once the transfer of blocks (of data) begins, QuickTran lets
          you know which block is presently being transferred and how many
          times it has tried to send that block.  QuickTran will abort
          after unsuccessfully sending or receiving a given block nine
          times.  For long files, QuickTran will occasionally have to pause
          to save or reload its buffer.  QuickTran tells you how many bytes
          it has saved or loaded.

               After the entire file is transferred, QuickTran gives you a
          "Percent saved (vs. Xmodem)".  This figure tells you how much
          more efficiently the data was sent (when compared to Xmodem). 
          You thus get an idea of how much time you saved.

               When the transfer of all file(s) is completed, QuickTran
          will beep three times.




          QuickTran(tm) - Commercial Version

          The latest commercial version of QuickTran comes complete with a
          printed manual and user support.  It maintains compatibility with
          the shareware version yet offers a number of advantages and
          features not present in the shareware version.  The enhancements
          are not trivial - they add the power and ease of use which makes
          the commercial version of QuickTran a complete turbo file
          transfer system.


          Enhancements found only in the commercial version of QuickTran:

          - Faster Transfers
          - Unattended Transfers: Auto-answer and Auto-dial
          - Wildcard Support
          - Transfer of Filename Along With Data
          - Unique Filename Generation
          - Combined Sending and Receiving
          - Transfer Log
          - Password Protection
          - Increased Resistance to Line Noise


          A description of each enhancement follows:

          FASTER TRANSFERS:
          Refinements in compression algorithm selection make it more
          likely that the compression technique used is the one best suited
          to the file being transferred.  The result is that transfers can
          be up to 30% faster than those with the shareware version.

          UNATTENDED TRANSFERS - AUTO-ANSWER AND AUTO-DIAL:
          When auto-answer mode is specified, QuickTran waits for an
          incoming phone call, answers it, and then sends or receives
          files.  The other end of the transfer uses the auto-dial feature
          to dial in.  If so desired, it is possible to tell QuickTran to
          wait until a certain time before dialing out.  This makes it easy
          to take advantage of lower off-peak phone rates.
          The automatic, unattended file transfers made possible with auto-
          answering and auto-dialing make QuickTran ideal for sending
          and/or receiving files to or from travelling businessmen or
          scattered corporate sites.

          WILDCARD SUPPORT:
          The sender may now use wildcard file specifications to specify
          which files are to be sent (eg. qt s *.*). The sender may provide
          multiple file specifications - as many as will fit on his command
          line.  Using wildcards makes sending multiple files much easier.

          TRANSFER OF FILENAME ALONG WITH DATA:
          The receiver can, as before, specify names of files he wants to
          receive on his command line - but now does not have to.  If
          filenames are not supplied, the receiving end will automatically
          obtain them from the sender.  Thus, if the receiver is satisfied
          with the filenames used by the sender, he or she needs not
          specify any filenames on the command line (e.g. "qt r").  This
          makes receiving files much simpler.



          UNIQUE FILENAME GENERATION:
          In case receiving a certain filename would result in overwriting
          an existing file, QuickTran no longer prompts the user for
          overwrite permission.  Instead, QuickTran generates a unique
          filename by changing the file's extension.

          COMBINED SENDING AND RECEIVING:
          One can combine both sending and receiving into a single short
          command.  Thus just one auto-dialed call can handle a complete
          interchange of files.

          TRANSFER LOG:
          Invoking the log option causes QuickTran to keep a complete
          record of the transfer.  Information stored in the log file
          includes file name, file size, and time and date of transfer. 
          The log feature is especially useful for keeping track of
          unattended transfers (eg. auto-answer or delayed auto-dial).

          PASSWORD PROTECTION:
          If one end of the transfer specifies a password the other needs
          to match it - otherwise the file transfer will not take place. 
          This feature is most often used in conjunction with auto-answer
          mode to insure that the person who calls in to send or receive
          files has clearance to do so.

          INCREASED RESISTANCE TO LINE NOISE:
          Refinements make certain types of line noise even less likely to
          cause an error during the transmission.


          ----------------------------------------------------------------


          The commercial version of QuickTran described above is for the
          IBM PC and PS/2 series and compatibles.  It requires 196K of
          memory and a Hayes or Hayes compatible modem.

          The commercial version of QuickTran is available
          from Eidolon Technologies for $39.95
          N.Y. residents please add sales tax.

          The program is, upon request, available on a 3.5" floppy disk.

          -----------------------
          Eidolon Technologies
          Department E5
          P.O. Box 20680
          Columbus Circle Station
          New York, N.Y. 10023
          -----------------------

          Since QuickTran is needed on both ends of a file transfer
          (sending and receiving), both users will need to order a copy.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1371

     Volume in drive A has no label
     Directory of A:\

    FILE1371 TXT      1155   5-02-89  10:17a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   5-02-89  10:19a
    MANUAL   BAT       148   5-02-89  10:21a
    PAGE     COM       325   1-06-87   4:21p
    QT       DOC     19719  10-27-88   2:08p
    QT       EXE     46418  10-01-88   2:38a
    VIEW     BAT        38   5-02-89  10:20a
            8 file(s)      68535 bytes
                           89088 bytes free
