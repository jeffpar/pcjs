---
layout: page
title: "PC-SIG Diskette Library (Disk #77)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0077/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0077"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "1RD"

    "1-RingyDingy" is a general purpose asynchronous communications program.
    It was designed with the "KISS" ("Keep It Simple, Stupid") principle in
    mind.  Although it employs a simple and straightforward approach to
    communications, its capabilities surpass those of some of the more
    expensive communications programs on the market today.
    
    Features:
    
    ~ Communicate at speeds up to 9600 baud
    ~ Exchange (send or receive) text files with other computers
    ~ Exchange (send or receive) non-text (exe or com) files with
    other computers which support the "X-Modem" protocol
    ~ Use modems which don't support Auto-dial
    ~ Use modems which do support Auto-dial
    ~ Capture incoming data in a disk file
    ~ Setup your own "filters" to remove or change undesirable characters
    in the incoming data
    ~ Dynamically slow down the speed at which you transmit.
    ~ Dynamically alter your communications parameters, such as Parity,
    Speed,and number of data bits
    ~ Build automatic logon sequences of any length
    ~ Move back and forth between different directories on your hard disk
    
    Special Requirements:  Modem.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $25.00
    
    File Descriptions:
    
    1RD      COM  Modem communications from the author of PC-FILE.
    1RD      PRO  File of setup commands.
    1RD      DOC  Documentation for 1RD  (49K).
    DOC      BAT  Batch file for printing documentation.
    SCRN          Data file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 1RD.DOC

{% raw %}
```









                                   "1-RingyDingy"(tm)

                                A Communications Program
                              For the IBM Personal Computer




                             (C)Copyright 1983 by Jim Button

                                       Version 1.2

























          Jim Button
          P.O. Box 5786
          Bellevue, WA 98006

          Source ID : CL2925
          Compuserve: 71435,2012













-





          TABLE OF CONTENTS

              GENERAL INFORMATION:................................... 1
              GETTING STARTED........................................ 2
              USING "1-RingyDingy's" AUTOMATIC CAPABILITIES.......... 3
              USING THE FUNCTION KEYS................................ 4
              COMMANDS............................................... 9
              THE "PROFILE" FILE (1RD.PRO)...........................12
              STOPPING THE PROGRAM...................................12
              COMMAND KEY SUMMARY  (A "quick-reference" sheet).......13
              ERROR MESSAGES.........................................14
              SOME FREQUENTLY ASKED QUESTIONS:.......................14
              DISCLAIMER.............................................14
              PERMISSION TO COPY:....................................15
              THE USER-SUPPORTED CONCEPT.............................15













































-


                             "1-RingyDingy"(tm) USERS GUIDE           Page 1.


          GENERAL INFORMATION:

          "1-RingyDingy" is a general purpose asynchronous communications
          program.  It was designed with the "KISS" ("Keep It Simple,
          Stupid") principle in mind. Although it employs a simple and
          straightforward approach to communications, its capabilities
          surpass those of some of the more expensive communications programs
          on the market today.

          With "1-RingyDingy" you will be able to:

          -   Communicate at speeds up to 9600 baud (limited by the speed of
              your serial port and modem.)

          -   Exchange (send or receive) text files with other computers.
              While sending text files, you may dynamically send selected
              records from the file and skip past other records not to be
              sent.

          -   Exchange (send or receive) non-text (exe or com) files with
              other computers which support the "X-Modem" protocol.

          -   Use modems which don't support Auto-dial.

          -   Use modems which do support Auto-dial. This includes not only
              the Hayes SmartModem, but also a variety of other modems which
              use other commands to AutoDial a phone number.

          -   Capture incoming data in a disk file.

          -   Setup your own "filters" to remove or change undesirable
              characters in the incoming data.

          -   Dynamically slow down the speed at which you transmit, so as
              not to overrun the computer at the other end.

          -   Dynamically alter your communications parameters, such as
              Parity, Speed, and number of data bits.

          -   Build automatic logon sequences of any length, to enable you to
              log on to a variety of remote computers without having to
              remember phone numbers, passwords and access commands.

          -   Change the colors on your display (if you have a color display)
              to suit your personal taste.

          -   Move back and forth between different directories on your hard
              disk (if you have DOS 2.0) for retrieving and sending data.

          -   Communicate properly with computers which use "XON/XOFF"
              characters.

          In short, "1-RingyDingy" is easy to use, easy to understand,
          powerful, and small in size.


                                         ( 1 )



-


                             "1-RingyDingy"(tm) USERS GUIDE           Page 2.


          "1-RingyDingy" requires a 64K or larger IBM PC (with PC-DOS 1.0 or
          1.1), a 96K or larger IBM PC (with PC-DOS 2.0 or later), one disk
          drive, and a serial I/O port with a Modem.  You must also have a
          video monitor capable of displaying 80 characters per line.


          GETTING STARTED.

          1.  Put your "1-RingyDingy" diskette into the "A:" drive and type
              "A:DOC". This will produce a printed set of documentation for
              you.

          2.  Read the documentation.

          3.  Copy the "1RD.COM" program onto any disk which has been
              formatted with PC-DOS. This will become your communications
              disk.

          4.  File your "1-RingyDingy" distribution diskette in a safe place.
              You may need it someday for "backup" purposes.

          5.  Turn on your modem and make sure that you are properly
              connected to the phone line and to your PC.

          6.  To run "1-RingyDingy", assign the "logged on" drive to the disk
              that contains the "1-RingyDingy" program, like this:

                B:
              Then type the program name, like this:

                1RD

          7.  You will be asked to choose one of five pre-chosen
              communications protocols. You can probably choose number two,
              as this is by far the most common one in use. To see what these
              protocols are, you will have to turn to your IBM BASIC manual
              (the one which came with your PC).  Turn to section 4 and find
              the documentation for the "OPEN 'COM..." statement.

          8.  Place a phone call to the computer with which you wish to
              communicate. When you hear the high pitched squeel from the
              other end, you can switch your modem to "data" mode and you
              should be on the air.  If you have an autodial modem, you
              should read carefully the section on using autodial modems.

          9.  When you are through communicating, type in a "(Ctrl)\"  (while
              holding down the Ctrl key, type the backwards slash) and this
              will cause "1-RingyDingy" to return control back to DOS.

          10.  Switch your modem back to "talk" mode.






                                         ( 2 )



-


                             "1-RingyDingy"(tm) USERS GUIDE           Page 3.


          USING "1-RingyDingy's" AUTOMATIC CAPABILITIES

          For normal operations, it is indeed possible to use "1-RingyDingy"
          knowing only that whatever you enter through the keyboard will be
          sent out over the phone line.  However, to really make use of the
          program, you need to understand just a few of the "neat" features.

          Although "1-RingyDingy" can do the normal transfer of files using
          either X-Modem protocol or ASCII transfer with XON/XOFF standards,
          it has the unique and powerful ability to send one record each time
          the "send record" key is depressed.  This, coupled with the ability
          to preview each record before sending it, and to skip forward in
          the transmit file to selectively transmit records, makes the
          program flexible enough to adjust to almost any requirement.

           The record that is sent can be data intended for the remote
          computer. It might also be a command to be sent to your
          "intelligent" modem.  Or, it can be a command which "1-RingyDingy"
          will intercept and act upon. For example, I have created the
          following file which allows me to call up a local computer and log
          onto it:

               \COM1:0300,N,8,1
               AT DT 575-3011
               BUTTON
               JIM
               BELLEVUE, WA
               JGB

          I have built one of these little files for each computer that I
          call regularly.  One of the files is named "SOURCE.LOG", another is
          named "COMPUSER.LOG", and another is named "DOWJONES.LOG".

          When I first start "1-RingyDingy" and am ready to communicate, I
          push F9 ("send record") and "1-RingyDingy" asks me "FILE NAME TO
          SEND:".  I enter the name of my "automatic logon" file for the
          remote computer with which I wish to communicate.  I then press F9
          again.  "1-RingyDingy" reads the first record (\COM1:0300,N,8,1)
          and sees that it's a command to automatically set the
          communications protocol for that computer. It does it.  I press
          (F9) again. The program reads the next record (AT DT 575-3011) and
          since it's not a command, it sends it out over the line.  As it
          turns out, my Hayes SmartModem sees this and realizes that it's a
          command to it to dial the phone number.  It dials the number.

          When I hear the beep from the remote computer, I know that the
          connection is completed. Also, the remote computer detects my
          presence and asks me for my last name.  I press F9 again.
          "1-RingyDingy" reads the next record (BUTTON) and sends it out over
          the line.  The remote computer asks me for my first name. I press
          F9 again and the PC reads the next record (JIM) and sends it. The
          remote computer asks me what city I'm calling from. I press F9 and
          "1-RingyDingy" sends the record (BELLEVUE, WA).  The remote
          computer asks me for the password, I press F9, and "1-RingyDingy"
          sends the last record (JGB).

                                         ( 3 )



-


                             "1-RingyDingy"(tm) USERS GUIDE           Page 4.


          Notice that I don't have to remember to enter anything special in
          order to automatically log on to the remote computer.  All I need
          to do is press F9 each time that input is needed from me.  Since I
          built the logon file with the proper commands, everything else
          happens automatically.

          You should also know that I could freely intermix data from the
          keyboard with pressing of F9. Thus, if something went wrong in the
          logon sequence, such as the remote computer saying "We are taking a
          survey today, please answer a question...", I could type some input
          from the keyboard which would be sent over the line. I could later
          go back to using F9 to complete my logon sequence, or I could just
          continue to do it manually from the keyboard.

          In order to create one of these "logon" files, you will need an
          editor program, such as Edlin, Wordstar, or Personal Editor.  Then,
          you will need to keep track of all the keys you press while you are
          calling and logging on to the remote computer. When you have done
          this once, you can use your editor program to create a "logon" file
          for that computer and you are then ready to have it all happen
          automatically, as described above.

          This is an extremely simple concept, but it gives "1-RingyDingy"
          tremendous power and flexibility.  It's so easy to use, easy to
          implement, and pleasant to work with that I'm surprised it's not
          available in all other communications programs.

          Another use for this "send record" capability is in the sending of
          electronic mail.  You can build your letter using your editor
          program, and save it in a file called "LETTER". Then, call up your
          information utility and when you get to the spot where they prompt
          you for the first line of your letter, just push F9 and send the
          first line of your "LETTER" file. Each time they ask you for the
          next line, push F9.  The remote computer thinks that you certainly
          are a fast and accurate typist!  It would get confused if you sent
          it the whole file at once, (as some other communications programs
          force you to do), because it was programmed to prompt you before
          the sending of each line. No problem when you're using
          "1-RingyDingy". After you have sent the last line of your "LETTER"
          file, you just continue communications from the keyboard.


          USING THE FUNCTION KEYS.

          While "1-RingyDingy" is running you will see a command key summary
          line printed at the bottom of your screen. The command keys may be
          pushed at any time the program is running and will take effect
          immediately. (Exceptions to this are while you are in "send file"
          mode (F7), or are uploading/downloading files using the "X-Modem"
          protocol). During the X-modem up/download process, the only command
          keys active will be F2(stop receive) and F9(stop send). If either
          of these keys is pressed, the file transfer will be discontinued.)

          (F1) - Receive file.


                                         ( 4 )



-


                             "1-RingyDingy"(tm) USERS GUIDE           Page 5.


          Pressing (F1) tells "1-RingyDingy" that you would like to receive a
          file.  You will be asked for the File name to receive into.  Enter
          any valid "filespec". Example: "B:INMAIL.TXT".  (Omit the quote
          marks and the trailing period.)  From then on, every character
          coming in on the communications line will automatically be saved on
          the disk file which you have named.  If the file didn't exist
          previously, it will be created. If the file did exist previously,
          all incoming data will be added at the end of the previous data.

          This facility is excellent for keeping a "log" of your entire
          communications session. After you are finished, you can go back in
          with your editor program and clean up the disk file containing the
          record of your session (removing the parts which are unimportant).
          Then, just print the whole thing on your printer and save it for
          future reference.

          If you wish to receive the file using "X-Modem" protocol (which
          automatically does error checking and error recovery), wait until
          the remote computer says it is ready to send the file, then press
          (F1) and enter the filespec followed by the characters =X.
          Example: "B:DOWNLOAD.COM=X".  Caution: When you are using X-Modem
          for file transfer, you are required to use 8-data bits in your
          communications protocol.  Read the section on (F4) changing
          communications parameters.  With X-Modem transfer, a new file will
          always be created. If one existed previously by the same name, it
          will first be deleted.

          (F2) - Stop Receive of file.

          Pressing (F2) will "close" the disk file and stop storing the
          incoming characters.  Later on, you could always press (F1) and
          reopen the same file to save more incoming data following the
          original data.  If you are receiving a file using "X-Modem, stay
          away from (F2) unless you have to abort the download.  The file
          will automatically be closed when the sending computer tells you
          that the last data in the X-Modem transmission has been sent.

          (F3) - Echo ON/OFF.

          Normally, the computer which you are communicating with will echo
          your data back to you, which causes it to be printed on your
          screen.  However, sometimes the remote computer won't do this for
          you. In this case, you will not be able to see your keystrokes as
          you enter them.  When this happens, pressing (F3) will turn "echo"
          on, and "1-RingyDingy" will automatically display your data as you
          enter it. Pressing (F3) again will turn "echo" off again. Each time
          you press the key, "echo" will switch to the opposite state.  If
          you ever see "double" characters on your screen, it is because
          "echo" is on and the remote computer also is echoing your data back
          to you. Just press (F3) to turn "echo" off at this end, and
          everything should look normal again.

          (F4) - Change Communications Parameters.  Sometimes you will want
          to change one or more of your communications parameters.  You may
          need to slow down your speed from 1200 baud to 300 baud. Or you may

                                         ( 5 )



-


                             "1-RingyDingy"(tm) USERS GUIDE           Page 6.


          need to change the number of "data bits" from 7 to 8. Pressing (F4)
          will allow you to make these changes from the keyboard.  You will
          be given six choices. Choice number 1 is to return to
          communications. Use this if you pressed (F4) accidentally and don't
          wish to make any changes. The next two choices are some standard
          protocols for 300 baud transmission speed. The next two choices are
          some standard protocols for 1200 baud transmission speed. The last
          choice, called "SPECIFY" will let you type in an entire
          communications specification, assuming that none of the above
          choices is adequate.

          For almost all cases, one of the four predefined communications
          protocols will be adequate. Select number 6 "SPECIFY" only if you
          have to.  You then will be shown a "skeleton" of the standard entry
          format and asked to completely overstrike it with your new
          specification.  Your textbook on accomplishing this is the IBM
          BASIC manual which came with your PC.  You will have to turn to
          section 4 in the manual and locate the pages which describe the
          "OPEN COM..." statement.  If you can understand this material, you
          will have no trouble entering whatever communications protocol is
          required.

          (F5) - Set the "DELAY" counter.

          When you are sending files or records to the remote computer, you
          will occasionally come across a computer which can't receive data
          as fast as you can send it.  This is normally handled automatically
          by the remote computer sending you an "x-off" character, in which
          case "1-RingyDingy" will stop sending until the remote computer
          sends an "x-on" character. In those cases where the remote computer
          doesn't know about x-on and x-off and also can't receive as fast as
          you can send, they will lose some of your data.  This will be seen
          by you as missing parts of your message or file as they are echoed
          to your screen.

          You can slow down your sending speed to give the remote computer
          time to catch its breath between characters by using the (F5) key.
          This allows you to set the "delay counter", which simply tells
          "1-RingyDingy" to count to some number after each character that it
          sends.  This, of course, slows the output down.  You will be shown
          the current value of the delay counter, which is 0 at startup. You
          will have to enter some new number, which will become the value of
          the delay counter. Some experimentation will be required on your
          part to discover a number just large enough to slow things down to
          the right amount.  Values of a few hundred will slow things down a
          little bit (this computer counts fast!)  and values in the multiple
          hundreds will slow things down much more.

          (F6) - Change Directory.

          If you are using DOS 2.0 or a later version, with perhaps a "hard
          disk", it is nice while running a program to be able to change to a
          different directory without having to stop and restart the program.
          "1-RingyDingy" lets you change directories whenever you press (F6).
          You will be asked which directory you would like to change to. Just

                                         ( 6 )



-


                             "1-RingyDingy"(tm) USERS GUIDE           Page 7.


          give the name of the new directory. You'll be told whether or not
          the change was successful.  This works just like the DOS "CHDIR"
          command.  It's very convenient, when you're sending or receiving
          files, to be able to change to the appropriate directory right in
          the middle of your communications session.

          (F7) - Send File.

          When you wish to send a file to the remote computer, you can press
          (F7) to send the entire file without stopping. You will be asked to
          enter the name of the file to be transmitted.  Enter a valid file
          specification.  Example: "B:SAMPLE.DOC". (Omit the quote marks and
          the final period).  After receiving the file name, "1-RingyDingy"
          will start transmitting the file, so be sure not to press (F7)
          until the remote computer is ready to receive your data. Once
          transmission begins, data will be sent continuously until either
          the entire file has been sent, or you have pressed (F9) or (F10).

          If you will be sending your file using "X-Modem" protocol, wait
          until the remote computer has signaled that it is ready to receive
          your file.  Then press (F7) and enter the file name followed by the
          characters "=X".  Example: "A:DEMO.EXE=X".

          (F8) - Turn the PEEK window off or on.

          Normally, you will want the bottom line of the screen to show your
          command summary menu. However, when you are transmitting a file in
          "one record at a time" mode (F9) it is handy to see which record
          you are about to transmit, before you press F9 to send it. That
          way, if you want to override the record and enter from the keyboard
          instead, or just turn off record transmission, you can do so.
          Pressing (F8) turns on the peek window. The bottom line of your
          screen will now display the record that's "in the batter's box"
          (the one that's destined to be transmitted, if you choose to do
          so).  This is very handy for your automatic logon sequences.

          When the peek window is on you have several options available with
          respect to the record being shown in the window.

          First, you can ignore the record being shown and provide input
          through the keyboard.

          Second, you can transmit the record being displayed as if you had
          entered it from the keyboard, by pressing (F9).

          Third, you can skip past the record in the window to the next
          record in the file, by pressing the "cursor down" arrow (the "2"
          key on the numeric keypad at the right side of your keyboard).

          Fourth, you can skip over multiple records in the file searching
          for a certain character sequence. To do this, press the "cursor
          right" key (the "6" key on the numeric keypad). You will be shown a
          ">" prompt. Enter a character string that you would like to search
          for in the transmit file, followed by the "return" key. All records
          in the transmit file will be bypassed until the character string

                                         ( 7 )



-


                             "1-RingyDingy"(tm) USERS GUIDE           Page 8.


          you entered is discovered starting in position 1 of a record in the
          file.

          You can precede the search string with question marks, in which
          each question mark will stand for one character to be skipped over
          before the comparison is made. For example:

           ???TH
          This example will locate records which start out "SMITH" or
          "ARITH", etc.  (The "TH" must start in at the fourth position in
          the record).

          If you precede the search string with a "greater than" sign,
          records will be found which contain the search string at any
          location. Example ">TH".  This will locate records which start out
          "THANK" or "PARENTHESES", etc.

          The peek window will remain on until you press (F8) again, or until
          a \PEEK OFF command is read from your transmission file.  If you
          are running with the peek window on but can't remember which
          function key you need to push, just push (F8) to get your menu
          back. View it, then push (F8) again to continue with the peek
          window.

          (F9) - Send Record.

          If you wish to send your file one record at a time, with you
          controlling when each record will be sent, use (F9). You will be
          asked to enter the name of the file to be transmitted. Enter a
          valid file name.  "1-RingyDingy" will then wait for you to to press
          (F9) again before transmitting the first record in your file.  Each
          time you press (F9), one more record will be sent out.  In this
          manner, you can control the sending of records, usually sending one
          each time you observe that the remote computer is ready to receive
          it.  However; if you transmit your file using X-modem protocol, it
          will all be sent without pausing. The "one record at a time" only
          applies to upload of ASCII files.

          When the record in the window is one of the predefined commands,
          "1-RingyDingy" will not pause after sending it. Commands will
          continue to be sent automatically until data appears in the window
          which is not a command.

          Rather than transmitting the record in the window, you may choose
          to skip past it. This can be done by pressing the "cursor down"
          arrow. If you do this, "1-RingyDingy" will bypass the record in the
          peek window and retrieve the next record from the transmit file.
          Or, you can press the "cursor right" arrow. If you do this, you
          will be prompted for a character string to be searched for in the
          transmit file. The prompt is ">". Enter the character string
          followed by the "return" key. "1-RingyDingy" will then bypass all
          records in the transmit file until it finds the character string
          start in column 1 of a record in your transmit file.

          Incidentally, there is a nice way to view an ASCII dataset just to

                                         ( 8 )



-


                             "1-RingyDingy"(tm) USERS GUIDE           Page 9.


          see what's in it. You can press (F9) to open it, then use the
          cursor-down key to view each record in the peek window, without
          sending anything over the phone line. Press (F10) when you're
          through looking at it.

          There is also a "retransmit record" capability provided. When you
          are in "send record" mode, you can retransmit the record which was
          most recently transmitted. To do this, press (Alt)R. Each time you
          press these two keys together, the record will be retransmitted.
          This feature makes it easy to redial a phone number if you get a
          busy signal. Just wait a few minutes and press (Alt)R to redial the
          number.

          Your file will be closed for you when you have sent the last
          record, or when you press (F10). Note that you can press (F7) at
          any point in time and transmission mode will switch from "one
          record at a time" to "the whole remainder of the file".

          You may have commands for "1-RingyDingy" imbedded in your transmit
          file.  These begin with a backwards slash "\" and have a command
          encoded in CAPITAL LETTERS. (See the section on commands).  When
          "1-RingyDingy" detects one of these commands, it will act on it and
          will not send the command out over the phone line as data.

          (F10) - Stop Sending the File.

          If you wish to stop sending the file before you reach the end of
          it, you can press (F10).  "1-RingyDingy" will close the file and
          discontinue the sending of file data.  If you have been in "send
          file" mode (F7), as opposed to "send record" mode (F9), it may take
          a while for DOS to empty all of its communications buffers.  Don't
          panic. Eventually (after a few more lines of output), the buffers
          will all be empty and you will see the data stop going out over the
          phone line.


          COMMANDS.

          Certain commands can be imbedded in your disk files to be acted
          upon by "1-RingyDingy" whenever it comes across one while
          transmitting file data. This is typically done at the start of a
          file which will be used to help you automatically log on to a
          remote computer.  You may wish to create a series of different
          files, one for each computer you will wish to call up and log onto.
          The commands at the front of this file can instruct "1-RingyDingy"
          to change its communications parameters to match those of the
          remote computer, or to change the characters which it will "filter"
          out of the incoming data, etc.

          Here are the commands which can be used.  Important: all commands
          must be entered in UPPER CASE only. If they are not, they will be
          treated as data and sent out over the phone line.

          \CHDIR - Change from the current DOS directory to a new one.


                                         ( 9 )



-


                             "1-RingyDingy"(tm) USERS GUIDE          Page 10.


          Example: \CHDIR \GAMES   (change to the "games" directory)
                   \CHDIR \       (change to the "root" directory)
          This command works exactly like the DOS "CHDIR" command. Of course,
          to use it you must be using DOS version 2.0 or a later version.

          \COLOR - Change the colors on the display screen.

          Example: \COLOR 14,1

          This command will change the colors to be used on your display
          screen.  The first number is the color of the foreground (the
          characters), and the second number is the color of the background
          and border. These color numbers can be found in your IBM BASIC
          manual, section 4, under the topic: "COLOR statement".  The
          foreground color must be a number from 0 to 15 inclusive, and the
          background color must be a number from 0 through 7. In the example
          above, the foreground color will be yellow, and the background
          color will be blue.

          \COM - Change the communications parameters.

          Example: \COM1:0300,S,7,1

          This command will allow you to change the communications port, the
          transmission speed, the type of parity, the number of data bits, or
          the number of stop bits to be used during communications. Your
          textbook on how to code this is chapter 4 in the IBM BASIC manual
          which came with your PC.  You will need to read the pages
          describing "OPEN COM..." to learn this command. When "1-RingyDingy"
          receives this command, it closes its communications port and then
          immediately reopens it using the new specifications.

          \DELAY - Change the "delay" counter.

          Example: \DELAY 500

          This command will change the delay counter for you, to slow down
          your outgoing transmissions if needed. Read the description on
          function key (F5) to understand this.

          \FILTER - Establish filters for the incoming data.

          Example: \FILTER 12,13,10,0

          "Filters" are instructions to "1-RingyDingy" to either remove or
          replace certain characters as they arrive from the remote computer.
          The filter values are entered in pairs. The first value in the pair
          is the ASCII value (base 10) of the incoming character to be acted
          upon.  The second value in the pair is the ASCII value of the
          character to be substituted whenever the first value is found.  In
          the example above, if a "Form Feed" (12) is received, it will be
          replaced with a "Carriage Return" (13). If the second value of the
          pair is a zero, nothing will be substituted for the character.
          Instead, it will be entirely removed from the incoming data stream.
          In the example above, if a "Line Feed" (10) is found, it will be

                                         ( 10 )



-


                             "1-RingyDingy"(tm) USERS GUIDE          Page 11.


          removed with nothing substituted for it. These ASCII values can be
          found in "Appendix G." at the back of your IBM BASIC manual.

          You may establish a maximum of 20 filters. Each time the \FILTER
          command is read, the old filters are discarded and the new ones are
          established.

          \PEEK - Turn the "PEEK" window ON or OFF.

          Example:  \PEEK ON
                    \PEEK OFF

          The peek window is the bottom line of your screen. It is normally
          turned off, so that the bottom line shows a brief menu of all the
          available function keys.

          When you are transmitting a file in "semiautomatic" mode (one
          record each time you press (F9)), it is very handy to be able to
          see which record you are ABOUT to transmit IF you press (F9). That
          way, you can decide in advance whether or not to go ahead with the
          transmission.  With the peek window on, you will be able to preview
          the record that is awaiting transmission. If you decide not to send
          it, or to override it with manual entry from the keyboard, you can
          do so.

          \RECYCLE - Branch back to top of "transmit" file.

          Example: \RECYCLE

          When the \RECYCLE command is encountered in the transmit file, the
          current transmit file is closed, then re-opened at the front of the
          file. \RECYCLE cannot be "scanned" past by using the "cursor down"
          or "cursor right" keys, as can the other commands.  It is usually
          placed at the end of an automatic logon file, so that the entire
          sequence can be redone if desired.  If you scan for a record that
          doesn't exist beyond your current position, the scan will resume at
          the top of the file if you have a \RECYCLE command at the end. In
          this way, you will be able to scan for records that are previous to
          your current position.  "What (you ask) will happen if the record
          I'm scanning for doesn't exist at all?  Will the program loop
          forever scanning through the file?" No, after the second scan is
          completed the program will stop scanning.

          \REM - Reminder to the operator.

          Example: \REM You are about to log on to "The Source".

          When "1-RingyDingy" receives the \REM command, it prints the data
          portion on your screen.

          \TOFILE - Branch to a different transmit file.

          Example: \TOFILE SOURCE.LOG

          When the \TOFILE command is encountered, the current transmit file

                                         ( 11 )



-


                             "1-RingyDingy"(tm) USERS GUIDE          Page 12.


          is closed, and the indicated file is opened as the transmit file.
          Unlike the \RECYCLE command, the \TOFILE command can be skipped
          over using the "cursor down" or "cursor right" keys.  Thus, you
          could have a series of \TOFILE commands in your file, and select
          the appropriate one by using the cursor keys and then pressing (F9)
          to cause transfer to the selected file to occur.


          THE "PROFILE" FILE (1RD.PRO).

          Whenever "1-RingyDingy" is started, it looks on the default disk
          drive for a file called "1RD.PRO".  If it finds it, it executes all
          of the commands it finds in the file.  I have provided a "default"
          profile file for you to show you how it's done, and to get you
          started in case you don't care to provide your own.  However, if
          you wish to change the file to suit your own operating conditions,
          you should do so.  You can use any of the commands found in the
          above section.  This would be a good place, for example, to place
          your "\COLOR" command to initialize your screen colors.


          STOPPING THE PROGRAM.

          When you are finished communicating, you can end your session by
          pressing (Ctrl)\. To do this, press down on the (Ctrl) key on the
          left side of your keyboard. While holding this key down, also press
          the "\" (backwards slash) key.  This will cause "1-RingyDingy" to
          close all disk files and return control to the PC-DOS operating
          system.



























                                         ( 12 )



-


                             "1-RingyDingy"(tm) USERS GUIDE          Page 13.


          COMMAND KEY SUMMARY  (A "quick-reference" sheet)

          F1 - RECEIVE FILE.  Opens a disk file. Saves all incoming data.
                              The open is for "Append". (see note 1)
          F2 - END RECEIVE.   Closes the "receive" file.
          F3 - ECHO.          Toggles "ECHO" (to screen) "on" or "off".
          F4 - PARMS.         Allows changing the communications parameters.
          F5 - DELAY.         Allows slowdown of outbound characters.
          F6 - CHDIR.         Changes the current directory (DOS 2.0)
          F7 - SEND FILE.     Sends an entire file.
                              (see note 1). (see note 2).
          F8 - PEEK.          Toggles "Peek" to ON/OFF. When on, shows
                              the record that will be sent next.
          F9 - SEND RECORD.   Same as F7, but only one record is sent each
                              time F9 is pressed.  You may switch back and
                              forth between F7 and F9.
                              (see note 1). (see note 2).
          F10- STOP SEND.     Closes the "send" file.
          (Alt)R              Retransmit a record.
          (Alt)B              Send a "BREAK" character

          *Note 1: Here are some example file names:
                   ?A         Displays directory on "A:" drive
                   ?C:*.LOG   Displays a directory of all *.LOG files
                              on "C:" drive
                   AB.XYZ     File is "AB.XYZ" in ASCII mode
                   AB.XYZ=X   File is "AB.XYZ" using "X-Modem" protocol

          *Note 2: The following "commands", if found in your "SEND" file,
                   will be acted upon (and not transmitted).
                   (Use all CAPITAL letters).
                   \CHDIR     Changes the current directory on disk. Code
                              as: \CHDIR newname
                   \COLOR fg,bg
                              fg and bg are the foreground and background
                              color numbers from the BASIC manual.
                   \COM       Resets your communications parameters. Code
                              as: \COM1.0300,S,7,1  (format used by BASIC)
                   \DELAY     Sets "delay" counter for file transmissions.
                   \FILTER    Sets "FILTERS" for the incoming data.
                              Code as: \FILTER from,to,from,to....
                              Values are in decimal, ASCII character set.
                              Maximum of 20 filters.
                              Example:  \FILTER 10,0,12,13
                   \PEEK      Turns "Peek" on or off. Peek lets you see
                              your records before you transmit them.
                              Code as:  \PEEK ON   or   \PEEK OFF
                   \RECYCLE   Branches to top of transmit file. Cannot be
                              scanned past.
                   \REM       A comment.  All data after "REM" will be
                              printed on screen.
                   \TOFILE    Transfers to a new transmit file. Example:
                              \TOFILE B:SOURCE.LOG



                                         ( 13 )



-


                             "1-RingyDingy"(tm) USERS GUIDE          Page 14.


          ERROR MESSAGES.

          To keep the size of the program as small as possible, 1-RingyDingy
          uses the standard error messages as discussed in your IBM BASIC
          manual. The program will try to recover from all errors, and will
          always issue the line number in the program where the error
          occurred (of no value to you, but of immense value to me) and the
          error number. For the more common errors, it will also print out a
          brief description of the error.

          You can look up these error numbers in your IBM BASIC manual.  They
          are found in "Appendix A" at the back of the book. With each number
          is a complete description of the error. After reading this
          description, the error will usually be apparent.


          SOME FREQUENTLY ASKED QUESTIONS:

          1.  "Will it help if I buy more RAM memory for my PC?".  ANSWER:
              No, 1-RingyDingy fits very nicely into 64K and would not
              benefit from any additional memory.

          2.  "In what language was 1-RingyDingy written?".  ANSWER: It was
              written in BASIC, then compiled with the BASIC Compiler.

          3.  "Can I obtain the source code for the program?".  ANSWER: No,
              it is considered to be proprietary.

          4.  "What is your update policy?".  ANSWER: I now have too many
              users to be able to notify you of updates (please accept my
              apologies).  Nor do I foresee a lot of updates to this program.
              You can mail me a diskette with postage and mailer, or a check
              for $6, every year or so, and I will send you the then-current
              version.  If you are not a "contributing" user, please don't do
              this.  Obtain a copy from a friend.

          5.  "Do you have any other programs that you are distributing?".
              ANSWER: Yes, PC-File(tm), a database manager program.

          6.  "Can you send me a FREEWARE(tm) catalog?".  ANSWER: No, for
              that you must write to The Headlands Press, Inc., P.O. Box 862,
              Tiburon, CA 94920.  1-RingyDingy(tm) is not associated with
              Freeware(tm).

          7.  "Is there a version of 1-RingyDingy for other computers?".
              ANSWER: No.


          DISCLAIMER.

          In no event will the Author be liable to you for any damages,
          including any lost profits, lost savings or other incidental or
          consequential damages arising out of the use of or inability to use
          this program, even if the Author has been advised of the
          possibility of such damages, or for any claim by any other party.

                                         ( 14 )



-


                             "1-RingyDingy"(tm) USERS GUIDE          Page 15.


          PERMISSION TO COPY:

          Clubs and other non-profit organizations are granted permission by
          the author to freely copy this program and documentation and share
          it with their members, so long as:

          1.  No price is charged for the software or documentation.
              However, a distribution cost may be charged for the cost of the
              diskette, so long as it is not more than $6 total.

          2.  Club members are informed of the user-supported concept and
              encouraged to support it with their donations.

          3.  The program or documentation are not modified in any way and
              are always distributed together.


          THE USER-SUPPORTED CONCEPT.

                                 User-Supported Software
                If you are using this program and find it to be of value
                         your contribution will be appreciated.
                                   ($25 is suggested)

                                       Jim Button
                                      P.O. Box 5786
                                   Bellevue, WA  98006

                     Regardless of whether you make a contribution,
                   you are encouraged to copy and share this program.



          User-supported software is an experiment in distributing computer
          programs, based on these beliefs:

          1.  That the value and utility of software is best assessed by the
              user on his/her own system.

          2.  That the creation of personal computer software can and should
              be supported by the computing community.

          3.  That copying of programs should be encouraged, rather than
              restricted.

          Anyone may request a copy of a user-supported program by sending a
          blank, formatted disk to the author of the program.  An addressed,
          postage-paid return mailer must accompany the disk (no exceptions,
          please). A copy of the program, with documentation on the disk,
          will be sent by return mail.  The program will carry a notice
          suggesting a contribution to the program's author.  Making a
          contribution is completely voluntary on the part of each user.

          Free distribution of software and voluntary payment for its use
          eliminates costs for advertising and copy protection schemes.

                                         ( 15 )



-


                             "1-RingyDingy"(tm) USERS GUIDE          Page 16.


          Users obtain quality software at reduced cost. They can try it out
          before buying, and do so at their own pace and in the comfort of
          their own home or office.  The best programs will survive, based
          purely on their quality and usefulness.

          Please join the experiment.

          If you believe in these ideals, your contribution is solicited to
          help make them work.





          Many of you have written requesting an invoice so that you could
          initiate payment through your company accounting system.  The
          following invoice is provided for those of you in this category, or
          for those who wish an invoice for your tax records. Perhaps it will
          serve the purpose.





































                                         ( 16 )



-






                                --------------------
                                       INVOICE
                                --------------------




            Purchased from:
                 JIM BUTTON
                 P.O. Box 5786
                 Bellevue, WA  98006


            DATE:     /     /                           Invoice No. 078329
            --------------------------------------------------------------
                                                 PRICE     PRICE
            PRODUCT                    QTY       EACH      EXTENDED
            -------------------------  ---       -----     --------

            "1-RingyDingy"(tm)
              communications program
              and documentation         1         $25         $25






                                                 SALES TAX      0

                                    --------------------------------------
                                    PLEASE PAY THIS AMOUNT    $25    TOTAL
            --------------------------------------------------------------



            Please make check payable to :JIM BUTTON


            You may retain this Invoice
            for your tax records.














                                         ( 17 )




```
{% endraw %}

## FILES77.TXT

{% raw %}
```
Disk No:   77
Program Title: 1RD
PC-SIG version: 1.1

"1-RingyDingy" is a general purpose asynchronous communications program.
It was designed with the "KISS" ("Keep It Simple, Stupid") principle in
mind.  Although it employs a simple and straightforward approach to
communications, its capabilities surpass those of some of the more
expensive communications programs on the market today.

Features:

  ~ Communicate at speeds up to 9600 baud
  ~ Exchange (send or receive) text files with other computers
  ~ Exchange (send or receive) non-text (exe or com) files with
    other computers which support the "X-Modem" protocol
  ~ Use modems which don't support Auto-dial
  ~ Use modems which do support Auto-dial
  ~ Capture incoming data in a disk file
  ~ Setup your own "filters" to remove or change undesirable characters
    in the incoming data
  ~ Dynamically slow down the speed at which you transmit.
  ~ Dynamically alter your communications parameters, such as Parity,
    Speed,and number of data bits
  ~ Build automatic logon sequences of any length
  ~ Move back and forth between different directories on your hard disk

Usage:  Communications.

Special Requirements:  Modem.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

1RD      COM  Modem communications from the author of PC-FILE.
1RD      PRO  File of setup commands.
1RD      DOC  Documentation for 1RD  (49K).
DOC      BAT  Batch file for printing documentation.
SCRN          Data file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 198,84,85,86,87,88,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                      <<<<  Disk No: 77  1RD  >>>>                       ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   To print the manual on this disk, type:                               ║
║                                                                         ║
║             DOC (press enter)                                           ║
║                                                                         ║
║   To run the program, type:                                             ║
║                                                                         ║
║             1RD (press enter)                                           ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0077

     Volume in drive A has no label
     Directory of A:\

    1RD      COM     37557   8-01-83   9:42p
    1RD      DOC     49719   8-01-83  10:33p
    1RD      PRO       288   8-01-83   9:33p
    FILES77  TXT      1678   1-26-89   3:31p
    GO       BAT        38  10-19-87   3:56p
    DOC      BAT       246   7-29-83  10:59p
    SCRN             49719   8-01-83  10:33p
    GO       TXT      1002  12-01-88   3:33p
            8 file(s)     140247 bytes
                           17408 bytes free
