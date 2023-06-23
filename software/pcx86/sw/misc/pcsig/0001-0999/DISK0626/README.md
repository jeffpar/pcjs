---
layout: page
title: "PC-SIG Diskette Library (Disk #626)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0626/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0626"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}
{% comment %}samples_begin{% endcomment %}

## FILES626.TXT

{% raw %}
```
-----------------------------------------------------------------------
Disk No  626  PC-Dial                                         v1   DS2
-----------------------------------------------------------------------
PC-Dial is a modem communications program from Jim Button, the author
of PC-File III.  It has the ability to create autologon scripts but
lacks some of the functions of PC-Talk III. With this version the
author provides a special program just for PCjr owners to communicate
with.
 
DOC      BAT  A batch file that will print the documentation on the printer
JR-DIAL  COM  Version for the PCjr
PC-DIAL  DOC  Documentation for PC-Dial
PC-DIAL  COM  The main program
PC-DIAL  PRO  A control file used by PC-Dial
READ     ME   Intro. to PC-Dial
 
PC Software Interest Group (PC-SIG)
1030D East Duane Avenue
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## PC-DIAL.DOC

{% raw %}
```
 
 
 
 
 
 
 
 
 
 
 
 
                                                              PC-Dial(tm)
 
                                                 A Communications Program
                                            For the IBM Personal Computer
 
 
 
 
                                       (C)Copyright 1984,85 by Jim Button
 
                                                              Version 1.5
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Jim Button
                                                               ButtonWare
                                                            P.O. Box 5786
                                                       Bellevue, WA 98006
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
_
 
 
 
 
 
        TABLE OF CONTENTS
 
 
            GENERAL INFORMATION:..................................  1
            GETTING STARTED.......................................  2
            USING THE AUTOMATIC FEATURES..........................  3
            USING THE FUNCTION KEYS...............................  5
            COMMANDS..............................................  11
            THE "PROFILE" FILE (PC-DIAL.PRO)......................  11
            STOPPING THE PROGRAM..................................  11
            COMMAND KEY SUMMARY...................................  12
            ERROR MESSAGES........................................  14
            SOME FREQUENTLY ASKED QUESTIONS:......................  14
            DISCLAIMER............................................  14
            Restricted Permission to Copy.........................  15
            THE USER-SUPPORTED CONCEPT............................  16
            Why Should I Pay?.....................................  17
            INDEX.................................................  19
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                      ( 2 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE              Page 1.
 
 
        A Note About Your Evaluation Copy
 
        At several places in this copy of the User's Guide you'll see the
        following notice.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        We honestly feel that we've supplied enough of the manual to
        allow you to make a good evaluation of the program.  There are
        several reasons why we didn't provide the entire manual on disk.
 
        -   We'd like to encourage more of our users to "come out of the
            closet".  We've priced our software so that you can afford
            it.  Frankly, it's the best bargain in the industry.  We also
            suspect and hope that you (the buying public) will want to
            cast your "vote" for lower priced software by paying readily
            for such programs.  Other software publishers would then be
            forced to take notice.
 
        -   We feel that the honesty of our "registered" users should be
            rewarded.  They're entitled to some extra value that should
            rightfully be denied to those who don't pay.
 
        -   It takes up too much room on the diskette.
 
        We trust that you'll be open-minded about the omissions.  We hope
        that we can soon add you to our list of very satisfied customers.
 
 
        GENERAL INFORMATION:
 
        PC-Dial is a general purpose asynchronous communications program.
        Although it employs a simple and straightforward approach to
        communications, its capabilities surpass those of some of the
        more expensive communications programs on the market today.
 
        With PC-Dial you'll be able to:
 
        -   Communicate at speeds up to 9600 baud (limited by the speed
            of your serial port and modem.)
 
        -   Exchange (send or receive) text files with other computers.
            While sending text files, you may dynamically send selected
            records from the file and skip past other records not to be
            sent.
 
        -   Exchange (send or receive) non-text (exe or com) files with
            other computers which support the "X-Modem" protocol.
 
        -   Use modems which don't support Auto-dial.
 
        -   Use modems which do support Auto-dial. This includes not only
 
 
                                      ( 1 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE              Page 2.
 
 
            the Hayes SmartModem, but also a variety of other modems
            which use other commands to AutoDial a phone number.
 
        -   Have PC-Dial automatically redial a phone number over and
            over again, until connection is made.
 
        -   Capture incoming data in a disk file.
 
        -   Save a "picture" of your screen to disk at any time.
 
        -   Setup your own "filters" to remove or change undesirable
            characters in the incoming data.
 
        -   Dynamically slow down the speed at which you transmit, so as
            not to overrun the computer at the other end.
 
        -   Dynamically alter your communications parameters, such as
            Parity, Speed, and number of data bits.
 
        -   Build automatic logon sequences of any length, to enable you
            to log on to a variety of remote computers without having to
            remember phone numbers, passwords and access commands.
 
        -   Change the colors on your display (if you have a color
            display) to suit your personal taste.
 
        -   Move back and forth between different directories on your
            hard disk (if you have DOS 2.0) for retrieving and sending
            data.
 
        -   Communicate properly with computers which use "XON/XOFF"
            characters.
 
        In short, PC-Dial is easy to use, easy to understand, powerful,
        and small in size.
 
        PC-Dial requires a 64K or larger IBM PC (with PC-DOS 1.0 or 1.1),
        a 96K or larger IBM PC (with PC-DOS 2.0 or later), one disk
        drive, and a serial I/O port with a Modem.  You must also have a
        video monitor capable of displaying 80 characters per line.
 
        PC-Dial will run on the PCjr, but downloading of files must be
        done using X-Modem protocol.
 
 
        GETTING STARTED.
 
        1.  Read the documentation.
 
        2.  Copy the "PC-DIAL.COM" program and the "PC-DIAL.PRO" file
            onto any disk which has been formatted with PC-DOS. This will
            become your communications disk.  Example:
 
                  COPY  A:PC-DIAL.*  B:
 
 
                                      ( 2 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE              Page 3.
 
 
 
 
        3.  File your PC-Dial distribution diskette in a safe place. You
            may need it someday for "backup" purposes.
 
        4.  Turn on your modem and make sure that you are properly
            connected to the phone line and to your PC.
 
        5.  To run PC-Dial, assign the "logged on" drive to the disk that
            contains the PC-Dial program, like this:
              B:
            Then type the program name, like this:
              PC-DIAL
 
        6.  You may be asked to choose one of five pre-chosen
            communications protocols. You can probably choose number two,
            as this is the most common one in use. To see what these
            protocols are, you'll have to turn to your IBM BASIC manual
            (the one which came with your PC).  Turn to section 4 and
            find the documentation for the "OPEN 'COM..." statement.
 
        7.  Place a phone call to the computer with which you wish to
            communicate. When you hear the high pitched squeal from the
            other end, you can switch your modem to "data" mode and you
            should be on the air.  If you have an autodial modem, please
            read carefully the section on using autodial modems.
 
        8.  When you're through communicating, type in (Alt)Q  (while
            holding down the "Alt" key, type a "Q") and this will cause
            PC-Dial to return control back to DOS.
 
        9.  Switch your modem back to "talk" mode.
 
 
        USING THE AUTOMATIC FEATURES
 
        For normal operations, it's indeed possible to use PC-Dial
        knowing only that whatever you enter through the keyboard will be
        sent out over the phone line.  However, to really make use of the
        program, you need to understand just a few of the extended
        features.
 
        Although PC-Dial can do the normal transfer of files using either
        X-Modem protocol or ASCII transfer with XON/XOFF standards, it
        has the unique and powerful ability to send one record each time
        the "send record" key is pressed.  This, coupled with the ability
        to preview each record before sending it, and to skip forward in
        the transmit file to selectively transmit records, makes the
        program flexible enough to adjust to almost any requirement.
 
        The record that is sent can be data intended for the remote
        computer. It might also be a command to be sent to your
        "intelligent" modem.  Or, it can be a command which PC-Dial will
        intercept and act upon. For example, I've created the following
 
 
                                      ( 3 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE              Page 4.
 
 
        file which allows me to call up a local computer and log onto it:
             \COM1:0300,N,8,1
             AT DT 575-3011
             BUTTON
             JIM
             BELLEVUE, WA
             JGB
 
        I have built one of these little files for each computer that I
        call regularly.  One of the files is named "SOURCE.LOG", another
        is named "COMPUSER.LOG", and another is named "DOWJONES.LOG".
 
        When I first start PC-Dial and am ready to communicate, I push F9
        ("send record").  PC-Dial shows me all of my automatic logon
        files (all files with a suffix of "LOG") and asks me "FILE NAME
        TO SEND:".  I enter the name of my automatic logon file for the
        remote computer with which I wish to communicate.  I then press
        F9 again.  PC-Dial reads the first record (\COM1:0300,N,8,1) and
        sees that it's a command to automatically set the communications
        protocol for that computer. It does it.  I press (F9) again. The
        program reads the next record (AT DT 575-3011) and since it's not
        a command, it sends it out over the line.  As it turns out, my
        Hayes SmartModem sees this and realizes that it's a command to it
        to dial the phone number.  It dials the number.
 
        When I hear the beep from the remote computer, I know that the
        connection is completed. Also, the remote computer detects my
        presence and asks me for my last name.  I press F9 again.
        PC-Dial reads the next record (BUTTON) and sends it out over the
        line.  The remote computer asks me for my first name. I press F9
        again and the PC reads the next record (JIM) and sends it. The
        remote computer asks me what city I'm calling from. I press F9
        and PC-Dial sends the record (BELLEVUE, WA).  The remote computer
        asks me for the password, I press F9, and PC-Dial sends the last
        record (JGB).
 
        Notice that I don't have to remember to enter anything special in
        order to automatically log on to the remote computer.  All I need
        to do is press F9 each time that input is needed from me.
        Because I built the logon file with the proper commands,
        everything else happens automatically.
 
        You should also know that I could freely intermix data from the
        keyboard with pressing of F9. Thus, if something went wrong in
        the logon sequence, such as the remote computer saying "We are
        taking a survey today, please answer a question...", I could type
        some input from the keyboard which would be sent over the line. I
        could later go back to using F9 to complete my logon sequence, or
        I could just continue to do it manually from the keyboard.
 
        In order to create one of these "logon" files, you'll need an
        editor program, such as Edlin, Wordstar, or Personal Editor.
        Then, you will need to keep track of all the keys you press while
        you're calling and logging on to the remote computer. When you
 
 
                                      ( 4 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE              Page 5.
 
 
        have done this once, you can use your editor program to create a
        "logon" file for that computer and you're then ready to have it
        all happen automatically, as described above.  If you give the
        file a suffix of ".LOG", such as "SOURCE.LOG", then it'll be
        automatically shown in the display of autolog file names each
        time you initiate a file transmission.
 
        The ability to send one record at a time is an extremely simple
        concept, but it gives PC-Dial tremendous power and flexibility.
        It's so easy to use, easy to implement, and pleasant to work with
        that I'm surprised it's not available in all other communications
        programs.
 
        Another use for this "send record" capability is in the sending
        of electronic mail.  You can build your letter using your editor
        program, and save it in a file called "LETTER".  Then, call up
        your information utility and when you get to the spot where they
        prompt you for the first line of your letter, just push F9 and
        send the first line of your "LETTER" file. Each time they ask you
        for the next line, push F9.  The remote computer thinks that you
        certainly are a fast and accurate typist!  It would get confused
        if you sent it the whole file at once, (as some other
        communications programs force you to do), because it was
        programmed to prompt you before the sending of each line.  No
        problem when you're using PC-Dial. After you have sent the last
        line of your "LETTER" file, you just continue communications from
        the keyboard.
 
 
        USING THE FUNCTION KEYS.
 
        While PC-Dial is running you will see a command key summary line
        printed at the bottom of your screen. The command keys may be
        pushed at any time the program is running and will take effect
        immediately. (Exceptions to this are while you are in "send file"
        mode (F7), or are uploading/downloading files using the "X-Modem"
        protocol). During the X-modem up/download process, the only
        command keys active will be F2(stop receive) and F10(stop send).
        If either of these keys is pressed, the file transfer will be
        discontinued.)
 
        (F1) - Receive file.
 
        Pressing (F1) tells PC-Dial that you would like to receive a
        file.  You will be asked for the File name to receive into.
        Enter any valid "filespec". Example: "B:INMAIL.TXT".  (Omit the
        quote marks and the trailing period.)  From then on, every
        character coming in on the communications line will automatically
        be saved on the disk file which you've named.  If the file didn't
        exist previously, it will be created. If the file did exist
        previously, all incoming data will be added at the end of the
        previous data.
 
        Warning:  If you're using a PCjr, this operation will produce
 
 
                                      ( 5 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE              Page 6.
 
 
        unreliable results unless you use the X-Modem protocol described
        below.
 
        This facility is excellent for keeping a "log" of your entire
        communications session. After you're finished, you can go back in
        with your editor program and clean up the disk file containing
        the record of your session (removing the parts which are
        unimportant). Then, just print the whole thing on your printer
        and save it for future reference.
 
        If you wish to receive the file using "X-Modem" protocol (which
        automatically does error checking and error recovery), wait until
        the remote computer says it is ready to send the file, then press
        (F1) and enter the filespec followed by the characters =X.
        Example: "B:DOWNLOAD.COM=X".  Caution: When you are using X-Modem
        for file transfer, you are required to use 8-data bits in your
        communications protocol.  Read the section on (F4) changing
        communications parameters.  With X-Modem transfer, a new file
        will always be created. If one existed previously by the same
        name, it will first be deleted.
 
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
        you enter them.  When this happens, pressing (F3) will turn
        "echo" on, and PC-Dial will automatically display your data as
        you enter it. Pressing (F3) again will turn "echo" off again.
        Each time you press the key, "echo" will switch to the opposite
        state.  If you ever see "double" characters on your screen, it is
        because "echo" is on and the remote computer also is echoing your
        data back to you. Just press (F3) to turn "echo" off at this end,
        and everything should look normal again.
 
        (F4) - Change Communications Parameters.  Sometimes you'll want
        to change one or more of your communications parameters.  You may
        need to slow down your speed from 1200 baud to 300 baud. Or you
        may need to change the number of "data bits" from 7 to 8.
        Pressing (F4) will allow you to make these changes from the
        keyboard.  You will be given six choices. Choice number 1 is to
        return to communications. Use this if you pressed (F4)
        accidentally and don't wish to make any changes. The next two
 
 
                                      ( 6 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE              Page 7.
 
 
        choices are some standard protocols for 300 baud transmission
        speed. The next two choices are some standard protocols for 1200
        baud transmission speed. The last choice, called "SPECIFY" will
        let you type in an entire communications specification, assuming
        that none of the above choices is adequate.
 
        For almost all cases, one of the four predefined communications
        protocols will be adequate. Select number 6 "SPECIFY" only if you
        have to.  You then will be shown a "skeleton" of the standard
        entry format and asked to completely overstrike it with your new
        specification.  Your textbook on accomplishing this is the IBM
        BASIC manual which came with your PC.  You will have to turn to
        section 4 in the manual and locate the pages which describe the
        "OPEN COM..." statement.  If you can understand this material,
        you will have no trouble entering whatever communications
        protocol is required.
 
        (F5) - Set the "DELAY" counter.
 
        When you're sending files or records to the remote computer, you
        will occasionally come across a computer which can't receive data
        as fast as you can send it.  This is normally handled
        automatically by the remote computer sending you an "x-off"
        character, in which case PC-Dial will stop sending until the
        remote computer sends an "x-on" character. In those cases where
        the remote computer doesn't know about x-on and x-off and also
        can't receive as fast as you can send, they will lose some of
        your data.  This will be seen by you as missing parts of your
        message or file as they are echoed to your screen.
 
        You can slow down your sending speed to give the remote computer
        time to catch its breath between characters by using the (F5)
        key. This allows you to set the "delay counter", which simply
        tells PC-Dial to count to some number after each character that
        it sends.  This, of course, slows the output down.  You will be
        shown the current value of the delay counter, which is 0 at
        startup. You will have to enter some new number, which will
        become the value of the delay counter. Some experimentation will
        be required on your part to discover a number just large enough
        to slow things down to the right amount.  Values of a few hundred
        will slow things down a little bit (this computer counts fast!)
        and values in the multiple hundreds will slow things down much
        more.
 
        (F6) - Change Directory.
 
        If you are using DOS 2.0 or a later version, with perhaps a "hard
        disk", it is nice while running a program to be able to change to
        a different directory without having to stop and restart the
        program. PC-Dial lets you change directories whenever you press
        (F6). You will be asked which directory you would like to change
        to. Just give the name of the new directory. You'll be told
        whether or not the change was successful.  This works just like
        the DOS "CHDIR" command.  It's very convenient, when you're
 
 
                                      ( 7 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE              Page 8.
 
 
        sending or receiving files, to be able to change to the
        appropriate directory right in the middle of your communications
        session.
 
        (F7) - Send File.
 
        When you wish to send a file to the remote computer, you can
        press (F7) to send the entire file without stopping.  PC-Dial
        shows you a list of all the filenames ending with ".LOG".  This
        is for convenience.  If you named all of your automatic logon
        files with a suffix of ".LOG", this shows you all of your logon
        files.  If each of your logon files includes the dialing commands
        to autodial the phone number, this list serves as a "dialing
        directory".  You don't have to transmit one of these files.  You
        can transmit any file that exists on your disk.
 
        You will be asked to enter the name of the file to be
        transmitted.  Enter a valid file specification.  Example:
        "B:SAMPLE.DOC". (Omit the quote marks and the final period).
        After receiving the file name, PC-Dial will start transmitting
        the file, so be sure not to press (F7) until the remote computer
        is ready to receive your data. Once transmission begins, data
        will be sent continuously until either the entire file has been
        sent, or you have pressed (F9) or (F10).
 
        If you will be sending your file using "X-Modem" protocol, wait
        until the remote computer has signaled that it is ready to
        receive your file.  Then press (F7) and enter the file name
        followed by the characters "=X".  Example: "A:DEMO.EXE=X".
 
        (F8) - Turn the PEEK window off or on.
 
        Normally, you'll want the bottom line of the screen to show your
        command summary menu. However, when you're transmitting a file in
        "one record at a time" mode (F9) it is handy to see which record
        you are about to transmit, before you press F9 to send it. That
        way, if you want to override the record and enter from the
        keyboard instead, or just turn off record transmission, you can
        do so. Pressing (F8) turns on the peek window. The bottom line of
        your screen will now display the record that's "in the batter's
        box" (the one that's destined to be transmitted, if you choose to
        do so).  This is very handy for your automatic logon sequences.
 
        When the peek window is on you have several options available
        with respect to the record being shown in the window.
 
        First, you can ignore the record being shown and provide input
        through the keyboard.
 
        Second, you can transmit the record being displayed as if you had
        entered it from the keyboard, by pressing (F9).
 
        Third, you can skip past the record in the window to the next
        record in the file, by pressing the "cursor down" arrow (the "2"
 
 
                                      ( 8 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE              Page 9.
 
 
        key on the numeric keypad at the right side of your keyboard).
 
        Here are some of the other operations you can perform while
        manipulating the transmit file.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
        The peek window will remain on until you press (F8) again, or
        until a \PEEK OFF command is read from your transmission file.
        If you are running with the peek window on but can't remember
        which function key you need to push, just push (F8) to get your
        menu back. View it, then push (F8) again to continue with the
        peek window.
 
        (F9) - Send Record.
 
        If you wish to send your file one record at a time, with you
        controlling when each record will be sent, use (F9). You will be
        asked to enter the name of the file to be transmitted. Enter a
        valid file name.  PC-Dial will then wait for you to press (F9)
        again before transmitting the first record in your file.  Each
        time you press (F9), one more record will be sent out.  In this
        manner, you can control the sending of records, usually sending
        one each time you observe that the remote computer is ready to
        receive it.  However; if you transmit your file using X-modem
        protocol, it will all be sent without pausing. The "one record at
        a time" only applies to upload of ASCII files.
 
        When the record in the window is one of the predefined commands,
        PC-Dial will not pause after sending it. Commands will continue
        to be sent automatically until data appears in the window which
        is not a command.
 
        Rather than transmitting the record in the window, you may choose
        to skip past it. This can be done by pressing the "cursor down"
        arrow. If you do this, PC-Dial will bypass the record in the peek
        window and retrieve the next record from the transmit file.  Or,
        you can press the "cursor right" arrow. If you do this, you will
        be prompted for a character string to be searched for in the
        transmit file. The prompt is ">". Enter the character string
        followed by the "return" key. PC-Dial will then bypass all
        records in the transmit file until it finds the character string
        starting in column 1 of a record in your transmit file.
 
        Incidentally, there is a nice way to view an ASCII dataset just
        to see what's in it. You can press (F9) to open it, then use the
        cursor-down key to view each record in the peek window, without
        sending anything over the phone line. Press (F10) when you're
        through looking at it.
 
        There is also a "retransmit record" capability provided. When you
        are in "send record" mode, you can retransmit the record which
 
 
                                      ( 9 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE             Page 10.
 
 
        was most recently transmitted. To do this, press (Alt)R. Each
        time you press these two keys together, the record will be
        retransmitted.  This feature makes it easy to redial a phone
        number if you get a busy signal. Just wait a few minutes and
        press (Alt)R to redial the number.
 
        Your file will be closed for you when you have sent the last
        record, or when you press (F10). Note that you can press (F7) at
        any point in time and transmission mode will switch from "one
        record at a time" to "the whole remainder of the file".
 
        You may have commands for PC-Dial imbedded in your transmit file.
        These begin with a backwards slash "\" and have a command encoded
        in CAPITAL LETTERS. (See the section on commands).  When PC-Dial
        detects one of these commands, it will act on it and will not
        send the command out over the phone line as data.
 
        (F10) - Stop Sending the File.
 
        If you wish to stop sending the file before you reach the end of
        it, you can press (F10).  PC-Dial will close the file and
        discontinue the sending of file data.  If you have been in "send
        file" mode (F7), as opposed to "send record" mode (F9), it may
        take a while for PC-Dial to empty all of its communications
        buffers.  Don't panic. Eventually (after a few more lines of
        output), the buffers will all be empty and you'll see the data
        stop going out over the phone line.
 
        (Alt)C - Save Color/graphics screen to disk.
 
        Holding down the (Alt) key while simultaneously depressing the
        "C" key will cause the Color graphics screen to be saved to a
        disk file.  This is like taking a snapshot of your screen for
        later viewing.  You should only use this command if your
        communications session is being displayed on a television set or
        other type of graphics monitor.  If you're using the Monochrome
        display, see the next command.  The screen image will be saved to
        a file called "SCREEN.SAV" on the default drive.  Each new
        snapshot that you make will be appended (added to the end) of the
        file.
 
        Warning:  If you're using a PCjr, you should only do this
        operation when the remote computer isn't actively writing to your
        screen.  Otherwise, parts of the incoming message may be lost.
 
        (Alt)M - Save Monochrome screen to disk.
 
        Holding down the (Alt) key while simultaneously depressing the
        "M" key will cause the Monochrome screen to be saved to a disk
        file.  This snapshot image of your screen will be appended to a
        file called "SCREEN.SAV".  Use this command only if your session
        is being displayed on a Monochrome display.  If you use the
        color/graphics card, you should use the (Alt)C command described
        above.
 
 
                                      ( 10 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE             Page 11.
 
 
        COMMANDS.
 
        Certain commands can be imbedded in your disk files to be acted
        upon by PC-Dial whenever it comes across one while transmitting
        file data. This is typically done at the start of a file which
        will be used to help you automatically log on to a remote
        computer.  You may wish to create a series of different files,
        one for each computer you will wish to call up and log onto. The
        commands at the front of this file can instruct PC-Dial to change
        its communications parameters to match those of the remote
        computer, or to change the characters which it will "filter" out
        of the incoming data, etc.
 
        Here are the commands which can be used.  Important: all commands
        must be entered in UPPER CASE only. If they are not, they will be
        treated as data and sent out over the phone line.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        THE "PROFILE" FILE (PC-DIAL.PRO).
 
        Whenever PC-Dial is started, it looks on the default disk drive
        for a file called "PC-DIAL.PRO".  If it finds it, it executes all
        of the commands it finds in the file.  We've provided a "default"
        profile file for you to show you how it's done, and to get you
        started in case you don't care to provide your own.  However, if
        you wish to change the file to suit your own operating
        conditions, you should do so.  You can use any of the commands
        found in the above section.  This would be a good place, for
        example, to place your "\COLOR" command to initialize your screen
        colors.
 
 
        STOPPING THE PROGRAM.
 
        When you're finished communicating, you can end your session by
        pressing (Alt)Q. To do this, press down on the (Alt) key on the
        left side of your keyboard. While holding this key down, also
        press the "Q" key.  This will cause PC-Dial to close all disk
        files and return control to the PC-DOS operating system.  You can
        also stop PC-Dial with the (Ctrl)\ combination.
 
 
 
 
 
 
 
 
 
 
 
 
                                      ( 11 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE             Page 12.
 
 
        COMMAND KEY SUMMARY
 
        F1 - RECEIVE FILE.
            Opens a disk file. Saves all incoming data.  The open is for
            "Append". (see note 1)
 
        F2 - END RECEIVE.
            Closes the "receive" file.
 
        F3 - ECHO.
            Toggles "ECHO" (to screen) "on" or "off".
 
        F4 - PARMS.
            Allows changing the communications parameters.
 
        F5 - DELAY.
            Allows slowdown of outbound characters.
 
        F6 - CHDIR.
            Changes the current directory (DOS 2.0)
 
        F7 - SEND FILE.
            Sends an entire file. (see note 1). (see note 2).
 
        F8 - PEEK.
            Toggles "Peek" to ON/OFF. When on, shows the record that will
            be sent next.
 
        F9 - SEND RECORD.
            Same as F7, but only one record is sent each time F9 is
            pressed.  You may switch back and forth between F7 and F9.
            (see note 1). (see note 2).
 
        F10- STOP SEND.
            Closes the "send" file.
 
        (Alt)B
            Send a "BREAK" character.
 
        (Alt)C
            Save Color-graphics screen to disk.
 
        (Alt)M
            Save Monochrome screen to disk.
 
        (Alt)R
            Retransmit a record.
 
            *Note 1: Here are some example file names:
                     ?A         Display directory on "A:"
                     ?C:*.LOG   Display directory of *.LOG
                                files on "C:" drive
                     AB.XYZ     File is "AB.XYZ" in ASCII mode
                     AB.XYZ=X   File is "AB.XYZ" using
 
 
                                      ( 12 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE             Page 13.
 
 
                                "X-Modem" protocol
 
            *Note 2: The following "commands", if found in
                     your "SEND" file, will be acted upon
                     (and not transmitted).
 
                  **************************************
                  *  Omitted from the evaluation copy  *
                  **************************************
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                      ( 13 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE             Page 14.
 
 
        ERROR MESSAGES.
 
        To keep the size of the program as small as possible, PC-Dial
        uses the standard error messages as discussed in your IBM BASIC
        manual. The program will try to recover from all errors, and will
        always issue the line number in the program where the error
        occurred and the error number. For the more common errors, it
        will also print out a brief description of the error.
 
              **************************************
              *  Omitted from the evaluation copy  *
              **************************************
 
 
        SOME FREQUENTLY ASKED QUESTIONS:
 
        1.  "Will it help if I buy more RAM memory for my PC?".  ANSWER:
            No, PC-Dial fits very nicely into 64K and would not benefit
            from any additional memory.
 
        2.  "In what language was PC-Dial written?".  ANSWER: It was
            written in BASIC, then compiled with the IBM BASIC Compiler.
            Some portions were done in Assembler language.
 
        3.  "Can I obtain the source code for the program?".  ANSWER: No,
            it's considered to be proprietary.
 
        4.  "What is your update policy?".  ANSWER: All registered users
            will be notified by mail of each new update.
 
        5.  "Do you have any other programs that you're distributing?".
            ANSWER: Yes, PC-File III(tm), a database manager program,
            PC-Graph, a program which produces graphs of a PC-File III
            database (PC-Graph will be available January 1985), and
            PC-Calc, a spreadsheet program.
 
        6.  "Is there a version of PC-Dial for other computers?".
            ANSWER: No.
 
 
        DISCLAIMER.
 
        These programs are provided "as is" without warranty of any kind,
        either expressed or implied, including, but not limited to the
        implied warranties of merchantability and fitness for a
        particular purpose.
 
        The entire risk as to the quality and performance of the programs
        is with you.  You assume the responsibility for the selection of
        the programs to achieve the results you desire and for the
        installation, use and results from the programs.
 
        In no event will ButtonWare be liable to you for any damages,
        including any lost profits, lost savings or other incidental or
 
 
                                      ( 14 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE             Page 15.
 
 
        consequential damages arising out of the use of or inability to
        use this program, even if ButtonWare has been advised of the
        possibility of such damages, or for any claim by any other party.
 
 
        RESTRICTED PERMISSION TO COPY
 
        PC-Dial is not a public domain program, and never has been.  It
        is Copyright(C) 1984, 1985 by Jim Button.  The conditions under
        which you may copy the PC-Dial programs and documentation are
        clearly outlined below.  WARNING!!!  The author intends to
        vigorously prosecute copyright violations.
 
        Individuals are granted permission by the author to freely copy
        the PC-Dial diskette for their own use or for others to evaluate,
        so long as no price or other consideration is charged.  The
        printed material may not be copied without the express written
        permission of the author.
 
        Computer clubs (non-profit) are granted permission by the author
        to copy the PC-Dial diskette and share it with their members, so
        long as:
 
        1.  No price or other consideration is charged.  However, a
            distribution cost may be charged for the cost of the
            diskette, shipping and handling, as long as it's not more
            than $9 total.
        2.  The program or documentation are not modified in any way and
            are distributed together.
        3.  PC-Dial may not be sold as part of some other more inclusive
            package.
        4.  The program may not be "rented" to others.
        5.  The program may not be distributed via computerized "bulletin
            boards" or through any other telecommunications link.
        6.  The printed manual may not be copied or reproduced in any
            way.
 
        Any group, person, or organization which purchases advertising
        space in any publication may not distribute PC-Dial under the
        "computer club" conditions.
 
        Companies, schools, universities, government and other
        organizations are granted permission by the author to copy the
        PC-Dial programs and documentation for use on other computers and
        at other locations in the organization, so long as:
 
        1.  The full registration fee of $29 has been paid for the
            original copy of the program.
        2.  A usage fee of $25 is paid to ButtonWare for each additional
            building where PC-Dial will be used.  Within any building for
            which the usage fee has been paid, PC-Dial may be copied
            freely for use on any computer in that building.
        3.  Where Local Area Networks, "LAN"s, are involved, the above
            building rule also applies.  The building usage fee must be
 
 
                                      ( 15 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE             Page 16.
 
 
            paid if PC-Dial is copied into the memory or storage of any
            computer in the building.
 
        Organizations are invited to correspond with ButtonWare
        concerning a special license agreement which would enable you to
        copy and distribute the diskettes with impunity within your
        organization.  We also offer quantity purchase discounts.
 
        Programmers, Software and hardware distributors and system
        developers are encouraged to include PC-Dial with their own
        products.  You must have written permission from ButtonWare
        before you can copy or distribute PC-Dial.  Please contact
        ButtonWare to obtain a written agreement.
 
 
        THE USER-SUPPORTED CONCEPT.
 
                              User-Supported Software
          You are encouraged to copy and share this program with others.
            If after evaluating this program you find it to be useful,
          I trust you to send a $29 payment. The payment will "register"
              you as a user.  You'll receive a printed user's guide,
               notification of future updates and new programs, and
                            product support if needed.
 
                                    Jim Button
                                   P.O. Box 5786
                                Bellevue, WA  98006
 
 
 
        User-supported software is an experiment in distributing computer
        programs, based on these beliefs:
 
        1.  That the value and utility of software is best assessed by
            the user on his/her own system.
 
        2.  That the creation of personal computer software can and
            should be supported by the computing community.
 
        3.  That copying of programs should be encouraged, rather than
            restricted.
 
        Anyone may legally obtain an evaluation copy of the program from
        a friend or computer club.  After you've had a chance to use and
        evaluate the program in your own environment, you're trusted to
        either forward a payment to the author, or to discontinue use of
        the program.  In any case, you are encouraged to copy the program
        for evaluation by others.
 
        Free distribution of software and voluntary payment for its use
        eliminates costs for advertising and copy protection schemes.
        Users obtain quality software at greatly reduced cost. They can
        try it out before buying, and do so at their own pace and in the
 
 
                                      ( 16 )
 
 
 
_
 
 
                             PC-Dial(tm) USERS GUIDE             Page 17.
 
 
        comfort of their own home or office.  The best programs will
        survive, based purely on their quality and usefulness.
 
        Please join the experiment.
 
        If you believe in these ideals, your payment is solicited to
        help make them work.
 
 
 
 
 
        WHY SHOULD I PAY?
 
        We were hoping you would ask.
 
        You're trusted to use this copy of PC-Dial for evaluation
        purposes only, until the requested payment is made.  There are
        some solid reasons for sending in your payment:
 
        -   It's the right thing to do.  You'll feel a lot better about
            yourself!
 
        -   When we receive your payment, we'll send you the latest
            version of PC-Dial.  This is the version with the fewest bugs
            and the newest enhancements.
 
        -   You'll receive a complete, printed copy of the User's Guide.
 
        -   We'll add you to our database of supporters.  Every time a
            new version comes out, we'll automatically send you a flyer
            giving  you the option of buying the new version for a
            nominal update charge - usually about $15.
 
        -   We'll give you "priority" treatment if you need to write to
            us with problems or questions.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                      ( 17 )
 
 
 
_
 
 
 
 
 
                                    ORDER FORM
           -------------------------------------------------------
           JIM BUTTON         Federal Employer I.D.# 91-1228699
           ButtonWare
           P.O. Box 5786                    (Quantity and dealer
           Bellevue, WA  98006               discounts available)
                                              PRICE     PRICE
           ITEM                        QTY    EACH      EXTENDED
           ==========================  ===    =====     ========
           "PC-Dial version 1.5                $29      $
           (Includes User's Guide)     ---               -------
 
           Usage fee for additional            $25      $
           copies (each building)      ---               -------
 
           Extra printed User's Guide          $15      $
           (Registered users only)     ---               -------
 
           Package of 10                      $100      $
           Printed User's Guides       ---               -------
 
           Package of 100                     $700      $
           Printed User's Guides       ---               -------
 
                                           SUBTOTAL:    $
                                                         -------
           7.8% state sales tax                         $
           (Washington state residents)                  -------
                                              TOTAL:    $
                                                         -------
 
 
 
 
           MasterCard      or Visa      or personal check
                     -----        -----                  -----
           Card number:
                       -------------------------------------------
           Expiration date:          Signature:
                           ---------           -------------------
           Name
                  ------------------------------------------------
           Address
                  ------------------------------------------------
 
                  ------------------------------------------------
           City                            State      Zip
                  ------------------------      -----    ---------
 
 
 
 
 
 
 
 
 
 
 
 
_
 
 
 
 
 
        INDEX
 
 
        **************************************
        *  Omitted from the evaluation copy  *
        **************************************
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                      ( 19 )
 
 
 

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0626

     Volume in drive A has no label
     Directory of A:\

    PC-DIAL  COM     41242  12-01-84   1:51a
    PC-DIAL  PRO       286  12-01-84   1:50a
    GO       BAT       509   1-05-98   9:43a
    DOC      BAT       247  12-01-84   1:50a
    PC-DIAL  DOC     49985  12-01-84   1:50a
    JR-DIAL  COM     41590  12-01-84   1:50a
    READ     ME       1098  12-01-84   1:50a
    FILES626 TXT      1024   1-01-80   7:09a
            8 file(s)     135981 bytes
                           22528 bytes free
