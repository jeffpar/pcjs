---
layout: page
title: "PC-SIG Diskette Library (Disk #3884)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3884/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3884"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CISMAIL.DOC

{% raw %}
```




                File: CISMAIL.DOC -- OZCIS AND CISMAIL

This section covers OzCIS' Address Book, CISMail (private mail), and
OzCIS' editors.


                THE ADDRESS BOOK

The OzCIS Address Book stores names and UserID numbers of, and
comments about, people with whom you're in frequent contact on CIS.
Its window can be opened from many places in the program,
including the editors.

The "book" is a plain-text file called ADDRBOOK.DB ("DB" means
"database") whose contents can be viewed with a file viewer like
LIST.COM or edited with any text editor. (CAUTION: If you edit
ADDRBOOK.DB outside of OzCIS, *ALWAYS* save the file as a plain-text
file - never in the proprietary file format of a word-processing
program like Microsoft Word, WordStar, and so on. ADDRBOOK.DB should
not be renamed, and it should be stored in the directory where
OZCIS.EXE itself resides).

There is an ADDRBOOK.DB in the OzCIS distribution archives; but you
you could create it from within OzCIS - as follows:

From OzCIS' main screen, select MAIL > ADDRESS BOOK SERVICES. First,
an alert appears announcing:

        ERROR 2 INITIALIZING ADDRESS BOOK

(which will appear if you don't unpack ADDRBOOK.DB from the OzCIS
distribution archive that contains it.)

Close the alert. The Address Book window opens, headed CURRENT
ADDRESS ENTRIES. A new menu bar appears that temporarily replaces the
normal main menu bar, showing EDIT, DELETE, ADD, and QUIT commands.
The following instructions apply whether or not you have unpacked
ADDRBOOK.DB from the OzCIS distribution archive OZCIS3.EXE:


        CREATING A NEW ENTRY

Select ADD. An EDIT ADDRESS BOOK ENTRY dialogue opens, containing
Name, Address, and Notes data fields. (See the documentation file
INTRO.DOC to review the keystrokes used in OzCIS dialogues.)

As in some other OzCIS dialogues, information about each data field
appears at the bottom of the screen. Hints about commands used in the
dialogue appear in the dialogue window's border.





  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 42




NAME field: Enter a name - as many characters as the width of the
window. Don't enter a CIS UserID number here.

ADDRESS field: This is the field for the CIS UserID number; it can
hold up to 132 characters. When the text of the address is wider than
the window, OzCIS automatically scrolls it left and right as you edit
it or move the cursor through it.

NOTES field: You can enter up to three comment lines. The number of
characters allowed per line is equal to the screen width of the field.

IMPORTANT: OzCIS uses semicolons in the ADDRBOOK.DB file to separate
           blocks of information from one another within a given
           entry. NEVER type a semicolon into the data fields of any
           address book entry.

Press F10 to save the new entry. If you change your mind, press ESC
(or click the right mouse button) to close the dialogue without
saving. If you're creating a new Address Book from scratch and close
this first entry's dialogue without saving the information, OzCIS will
not write the ADDRBOOK.DB file to disk.

OzCIS often places brackets around the UserID number - e.g.,
"[12345,6789]". This is normal. CIS automatically strips the brackets.
Sometimes OzCIS itself needs them for sorting or other purposes;
please don't remove them.

If you create an Address Book entry without filling in the name, or if
you enter something in the Address field that OzCIS doesn't recognize
as a bona fide UserID number, "UNKNOWN" will appear in the Address
Book after you've saved the entry. Editing that entry and correcting
the information in the field in question will remove "UNKNOWN."

A new entry moves to the top of the list. Likewise, editing an entry
moves it to the top of the list.

As you add names, the Address Book window expands vertically. After it
has reached its maximum depth and when there are more entries than fit
into one window, you can scroll the list up and down via the mouse
(and scroll bars) or via the PG UP, PG DN, HOME, and END keys. (When
there are more names than will fit into the window, OzCIS displays
"MORE" in the lower-right-hand part of the window frame.)

As soon as you have more than one name in the Address Book, it becomes
a pick-list. Select an entry using the highlighted cursor bar or
by left-clicking its name with the mouse.

        QUICK LOCATION OF NAMES

You can move through the Address Book by typing the first character of
a name you want to find. Each time you press a key, the cursor bar



  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 43




will jump to the next entry beginning with that character. When the
bar has reached the last matching entry, another press of the same key
will send the bar back to the first matching entry. If two entries
begin with the same characters, you can narrow the selection by typing
as many characters as are needed to make the name unique. Typing "ca"
would make the cursor bar jump first to "cab" and only after that to
"car". But typing "car" would send the bar straight to "car".

        EDITING AN ENTRY

When a name in the Address Book is highlighted, pressing ENTER selects
the EDIT command by default. (Or left-click "EDIT" or press ALT-E.)
Press F10 to save the edits or ESC to close the editing dialogue
without saving them.

        DELETING AN ENTRY

Move the cursor bar to the entry you want to delete. Left-click on
"DELETE" in the menu bar or press ALT-D. OzCIS will then ask you to
confirm the deletion.

        CLOSING THE ADDRESS BOOK

Press ESC, or click the right mouse button, or left-click "QUIT" in
the menu bar, or press ALT-Q.

        ENTERING AN INTERNET ADDRESS

Enter the person's name into the NAME field. In the ADDRESS field,
enter:

>INTERNET: username@address

... where "username@address" is a standard Internet address. The ">"
character is required. Do not use "]" or "}"" or ")" instead of ">".
Do NOT put a space anywhere WITHIN the character string ">INTERNET:".
Example:

In NAME field:     John Q. Public
In ADDRESS field:  >INTERNET: jpub@grungy.dufus.party.skool.edu

In the (extremely unlikely) event the Internet address is too long to
fit into the ADDRESS field, try:

In NAME field:     >INTERNET:
In ADDRESS field:  jpub@grungy.dufus.party.skool   [etc.]

Other such gateways or services (FAX, POSTAL, and so on) are
discussed in documentation you can obtain from CIS.





  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 44




        SORTING THE ADDRESS BOOK

OzCIS comes with a utility called SORTADDR.EXE, used to sort the names
in the ADDRBOOK.DB file quickly. See the file UTILS.DOC for more
information on SORTADDR.EXE. You can also move lines around in
ADDRBOOK.DB by loading the file into a text editor (including OzCIS'
own General Editor) - BUT:

CAUTION: If you edit ADDRBOOK.DB, make sure that

         1) You do not allow any line-wrapping to occur. Each
            address entry, INCLUDING any associated comments,
            must be on a SINGLE line.

         2) The file is saved in plain-text format.

         3) All semicolons on each line are left intact.

Before moving on to the next section, add two or three names and
UserID numbers to the Address Book, even if they are fictitious.
You'll use them in an upcoming tutorial; you can delete any fake
entries later on.


                        CISMAIL (PRIVATE MAIL)

Brief explanation of CISMail procedures:

o  Create new outgoing mail by selecting MAIL > NEW MESSAGE COMPOSE.
   This command starts the New Message Editor.

o  Select MAIL > READ CURRENT MESSAGES to read CISMail messages
   sent to you (uses the Message Reader.)

o  Give the "reply" command in the Message Reader, which splits the
   screen and starts the Reply Editor.

o  Before sending new outgoing mail, you can review it (and change it
   if need be) using the Review Editor.

OzCIS' fifth editor is the General Editor, whose commands will be
discussed later in this file.

Detailed reference sections for the editors' command sets will follow,
along with more information on other CISMail functions. First, a kind of
tutorial for new users, covering the following subjects:








  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 45




Creating a new message;
Using the Address Book when creating new mail;
Sending a private message to CIS;
Reading and replying to new incoming mail;
Using the Address Book when reading/replying to private mail;
Reviewing outgoing messages.


        CREATE A NEW MESSAGE -- USING THE NEW MESSAGE EDITOR

From the main screen, select MAIL > NEW MESSAGE COMPOSE. This opens
the New Message Editor.

Start a new outgoing message - type a few lines. As you type, OzCIS
performs line-wrapping, breaking the lines at the column you specified
during general program configuration. Note the status-line display of
information about what you're writing: cursor position by line number,
by column number, by number of characters into the message, and
finally the total number of characters entered so far.

If you change your mind and decide to abandon the new message, press
ESC or select QUIT from the menu bar. OzCIS will ask you to confirm
abandoning the message. Answer YES, and you'll be returned to the main
screen. Answer NO (or press ESC), and you'll be back in the editor.

Here are some of the cursor- and screen-control commands used in the
New Message Editor:

PG UP       scroll up one screen
PG DN       scroll down one screen
HOME        cursor to beginning of line
END         cursor to end of line
^HOME       cursor to top of screen
^END        cursor to bottom of screen
^PG UP      cursor to top of message
^PG DN      cursor to end of message
LEFT        cursor left one character
RIGHT       cursor right one character
^LEFT       move cursor one word to the left
^RIGHT      move cursor one word to the right
UP          cursor up one line
DOWN        cursor down one line

When you've typed several lines of text, select SEND from the top-line
menu (not SAVE, which has a different purpose).

OzCIS doesn't yet know who the recipient is and opens a MESSAGE
ADDRESS dialogue, which contains NAME, ADDRESS, SUBJECT, RECEIPT, and
COPIES fields. Note that the dialogue's window frame contains hints
on commands available when the cursor is in a particular data field.




  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 46




With the cursor in either the NAME or ADDRESS field, press F2. This
opens the Address Book. Move the cursor bar within the Address Book to
highlight an entry; press ENTER (or left-click the name) to select
it. OzCIS enters the person's name and UserID number into the NAME and
ADDRESS fields of the MESSAGE ADDRESS dialogue. The Address Book closes.
Move the cursor to the SUBJECT field and type something like "Test
message."

NOTE: CIS has a 40-character limit for the subject line. OzCIS will
      allow you to enter more characters there; but if CIS encounters
      that long a subject line, it will halt, ask you to enter a
      shorter line, and wait until you do so. This could cause some
      interesting (translation: expensive) trouble if you run an
      unattended mail pass on CIS. So keep the subject line as short
      as possible. On occasion CIS truncates that long a subject line.
      The RECOMMENDED maximum length is 36 characters.

      (The limit for FORUM message subject lines is 24 characters.)

At this point you could close the MESSAGE ADDRESS dialogue by pressing
F10, confirming the newly-entered name/address information and saving
the outgoing message. The New Message Editor would close and you'd
return to the main screen. But don't press F10 yet; there's more you
can do here with the Address Book.

Move the cursor into the NAME field of the MESSAGE ADDRESS dialogue.
Press F2 to open the Address Book again. Highlight an entry different
from the one you selected the last time and press ENTER. Note how the
old name/address information is completely replaced by the new
information (the SUBJECT field doesn't change).

Again, you could press F10 to confirm, save, and quit - don't do
it yet. Move the cursor into the NAME field again and type your OWN
name. (Right: You're going to send the test message to yourself.) The
text now in the filed disappears and is replaced by what you type.
Move the cursor into the ADDRESS field and type your own CIS UserID
number. Move the cursor into the SUBJECT field, but don't type
anything there yet.

Here is a way of storing new name/address information without having
to re-type it into the Address Book:

With the cursor in any of the MESSAGE ADDRESS dialogue fields, press
F4. The Address Book window opens again, but pressing F4 also opens
the EDIT ADDRESS BOOK ENTRY dialogue. OzCIS automatically puts the
recipient's name and address information into the dialogue. Type a
comment into the Notes field if you wish.

NOW confirm the new information by pressing F10, saving it into the
Address Book (and closing the edit-dialogue). Right: You've entered
your own name and UserID into the Address Book.



  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 47




Close the MESSAGE ADDRESS dialogue by pressing F10 again. The message
you're sending to yourself is now saved to disk, and you're back at
the main screen. OzCIS saves outgoing CISMail messages into the file
CISMAIL.REP, which is stored in the same directory as OZCIS.EXE.

NOTE:  Whenever you open the Address Book in an OzCIS editor, all
       Address Book functions are available. You can also open the
       Address Book (via the top-line ADDRESS menu) BEFORE you give the
       "save message" command. When you do save the new message, the
       MESSAGE ADDRESS dialogue will appear again for you to confirm
       the information about the recipient.

There is a method of saving a new message and REMAINING in the New
Message Editor to write another message. For information about that
command, see the upcoming command reference section for the editor.


        WHAT NOT TO PUT INTO CISMAIL MESSAGES

The following apply to CISMail messages and forum messages alike:
Never place CTRL or "highbit" characters into your messages. The one
exception is the "split message" character (which OzCIS can place into
the message text for you).

NEVER type a semicolon as the FIRST character of a line in a message;
OzCIS will take it to be part of an instruction. This will lead to
undesirable results (errors when transmitting mail, or what will look
like file corruption if you try to read the outgoing mail in the
Review Editor). If you need to place a semicolon as the first
character on a line, first indent the line by at least one space, then
type the semicolon.

When you finish the last line of a message, press ENTER at least once,
leaving the cursor BELOW the last line of text. Otherwise, the last
line of the message might be lost.

NEVER enter either a semicolon, nor a double-quote mark ( " ), into
ANY part of a message address (in a CISMail message or forum message).


        MESSAGE FORMATTING; LINE LENGTHS

CISMail lines will always break exactly as YOU wrote them. Not so with
forum messages: CIS dynamically reformats forum messages to varying
line lengths, based on callers' screen widths, many of which will be
different from yours (width information is stored in each caller's
on-line profile data). You can tell OzCIS to prevent this dynamic
reformatting when you save outgoing forum messages (more on that in
the documentation file FORUMS.DOC).





  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 48




        GOING ON-LINE TO SEND THE TEST MESSAGE

Now you'll transmit the new message to yourself.

Make sure you have chosen the right Host (note the display in the
upper-left of the main screen). If you need to change it, select
CONFIGURATION > HOSTS MAINTENANCE. The AVAILABLE HOSTS window opens.
Highlight the desired Host name and choose SELECT (ALT-S) from the
menu. The new Host name is now displayed on the main screen.

Select MAIL > SEND/RECEIVE MAIL ONLINE. OzCIS goes into terminal
mode and dials the Host. Note the status messages at the bottom of the
screen as OzCIS logs onto CIS, enters your UserID and password, then
goes to the CISMail service and sends the outgoing mail. This
description assumes there isn't any new mail waiting for you. If there
is, OzCIS first retrieves it, then sends your outgoing mail.

NOTE:  During dialing and as OzCIS begins making the connection to CIS,
       it displays "<ESC> Aborts" on its terminal-mode screen. As long
       as "<ESC> Aborts" appears there, pressing the ESC key will
       stop the dialing and log-on processes. When the connection is
       made, "<ESC>" will disappear and be replaced momentarily by
       "Connected."


        GETTING THE TEST MESSAGE YOU JUST SENT YOURSELF

After it sends the outgoing mail, OzCIS logs off CIS and returns to
the main screen. Wait 10 minutes or so for your new message to be
posted to your own CIS mail box. During that time, compose and save
another short message to yourself. Again select MAIL > SEND/RECEIVE
MAIL ONLINE and transmit the second message to yourself. This time
you'll see OzCIS retrieve the first message, then send the second.

NOTE:  When OzCIS finishes sending new outgoing mail, it always
       deletes the outbound-mail file (CISMAIL.REP). If you want to
       save outbound messages: 1) Make sure the particular Host is
       configured always to save outbound mail (see file INTRO.DOC for
       more information on Host configuration); or 2) Make sure it is
       configured to "ASK" - then review outbound messages (OzCIS
       asks if you want an "outbox save" done when you finish the
       review). See "Saving All Outgoing Messages To A File," below.
       You can restrict the "save" to the current message only. The
       way to do so is covered in the command reference section for
       the New Message Editor, later in this file.









  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 49




        READING NEW MAIL -- USING THE MESSAGE READER

OzCIS alerts you to the arrival of new mail via a small window at the
lower-right corner of the main screen ("MAIL!"). Left-click within the
"MAIL!" alert to start the mail reader (or select MAIL > READ PENDING
CISMAIL MESSAGES).

The Message Reader opens. Its functions are limited to scrolling
through messages, copying text that will be pasted into another
editing window, and replying. You can't alter any text in it.

If you want to quit back to OzCIS' main screen right away, press ESC
or select "QUIT" from the menu bar.

Screen- and cursor-movement keys are the same as those used in the New
Message Editor. Other Message Reader commands include:

ALT-N       Next message
            Alternate keystrokes: F5, space bar, "+", or "n"

ALT-P       Previous message
            Alternate keystrokes: F3, "-", or "p"

ALT-R       Reply to current message
            Alternate keystrokes: F2 or "r".

ALT-J       Jump to message number...
            This opens a data-entry field in which you type the
            number of the message to view. Press ENTER, and OzCIS
            moves immediately to that message.

            The ALT-J command is available in several of the other
            editors. Review their menus to see which ones support the
            "jump to..." command.

NOTE:  The Message Reader is unique among the editors in supporting
       the use of single keystrokes (without using ALT or CTRL) for
       "next," "previous," "reply," and some of its other commands.

Pressing the space bar is probably the most convenient way of moving
through new mail, because it 1) scrolls through a message one screen
at a time; 2) moves to the next message within the present group (when
you have reached the end of the current message).

FORWARDING A MESSAGE: Press ALT-F while reading a message. A MESSAGE
ADDRESS dialogue opens. It's similar to the one you've seen before,
but it does not have a SUBJECT field. As before, press F2 if you need
to open the Address Book. When you have filled in the dialogue's
fields and pressed F10 to save the information, the message you're now
reading is forwarded in its entirety to the person whose name and CIS
address you just placed into the MESSAGE ADDRESS dialogue.



  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 50




OzCIS automatically fills in the SUBJECT field with the words
"Forwarded Message" and adds a line reading "This is a forwarded
message" to the top of the outgoing message (which goes right into
your outbound-CISMail file, CISMAIL.REP). YOU are always shown to be
the sender of a forwarded message. The forwarded message will also
contain quoted header information to show the name, date, and subject
matter attached to the original message.

As with any other outgoing CISMail, a forwarded message can be edited
in the Review Editor (see below).

Other Message Reader commands will be discussed in detail in its
command-reference section, below.


        USING THE ADDRESS BOOK FROM WITHIN THE MESSAGE READER

Select ADDRESS from the menu bar (or press ALT-A). The Address Book
opens, followed right away by the EDIT ADDRESS BOOK ENTRY dialogue. In
this case OzCIS automatically selects "ADD" and enters the sender's
name and UserID number into the NAME and ADDRESS fields of the dialogue
box. Type a comment into the NOTES field if you want, then press F10
to close the edit-window. This is a quick way to add new names and
UserID numbers without having to re-type them.

If you don't want to add the name, press ESC to close the dialogue. In
either case, the Address Book stays open (at which point you have
access to all of its functions).

        HOW OZCIS STORES CISMAIL IN "GROUPS"

Each time OzCIS logs onto CIS and collects private mail, it stores the
messages in the file CISMAIL.MES (located in the same directory with
OZCIS.EXE). Don't rename CISMAIL.MES or move it to some other directory,
or OzCIS won't be able to find it.

OzCIS considers each new batch of incoming mail (CISMail or forum
messages) as being in a different "group" from the last batch you
received. As you continue to collect new mail, OzCIS continues to
store new groups in first-in/first-out fashion. The most-recently-
retrieved mail is always the first group displayed when you start the
Message Reader and is assigned the highest group number.

You can keep up to 99 such mail groups.

For example, if you've collected 30 batches of CISMail and haven't
erased the CISMAIL.MES file (or altered it in a text editor), the
command MAIL > READ PENDING CISMAIL MESSAGES from the main screen
will first show the 30th (most recent) group in the Message Reader
(watch its status line for the display of current group number, total
number of groups, and which message within the current group you're



  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 51




now viewing). Selecting "previous group" will display the mail you got
the last time you logged onto CIS - the 29th group. The oldest batch
of mail is Group 1.

See the command reference for the New Message Reader, below, for a
complete list of "next/previous" group commands.

As you move from one group to the other, the status lines at the top
of the screen will display the changing group numbers; the total-
number-of-messages information will also change from group to group.

During the general-configuration step, you made a selection telling
OzCIS how to delete CISMail - never delete it, always delete it,
delete by "sessions," or delete by "days."

NEVER      OzCIS continues to store groups of mail in CISMAIL.REP
           until you delete the file or edit it to remove messages
           manually.

ALWAYS     OzCIS stores only a SINGLE group; each new session on CIS
           removes the last batch of messages and replaces it with
           the new ones.

SESSIONS   OzCIS will keep only 'n' groups, where 'n' is the number
           you entered in the Purge Counter of the General
           Configuration dialogue.

DAYS       OzCIS will retain only 'n' days' worth of mail. If you
           collect CISMail more than once per day, the number of mail
           groups retained will not be the same number you entered in
           the Purge Counter.


        REPLY TO THE NEW MESSAGE -- USING THE REPLY EDITOR

Press F2 or ALT-R or just "r". The screen splits into two windows,
and the cursor moves into the bottom window - OzCIS' Reply Editor.

The Reply Editor has many more functions than the Message Reader. Note
that it has its own menu bar, appearing along the "split" in the
screen. Its cursor-movement and screen-control commands are the same
as those of the Message Reader. Some of the other important commands
are shown just below. Unless otherwise noted, the keystrokes discussed
below work ONLY when the cursor is in the Reply Editor.

F2      Move cursor into the top window (the "parent" message).
        Pressing F2 again - or ESC - moves the cursor back to the
        Reply Editor. Notice that the commands in the top menu bar
        change depending on whether the cursor is in the upper
        ("parent" message) or lower (reply) window.




  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 52




F4      Save/send the reply. If there is no text in the reply-window
        at all, pressing F4 simply closes the reply-window.

ALT-S   Same as F4.

F6      View next line (up) in upper window (Message Reader).

F8      View next line (down) in upper window (Message Reader).

F10     Move cursor into the upper menu bar (if cursor is in top
        window when you press F10, jumps back into the reply window)

ALT-F10  Move cursor into the Reply Editor's own menu bar.

ESC     If the window is not split, quits the Message Reader and
        returns to the main screen.

        If the window is split and the cursor is in the upper window,
        sends the cursor into the lower window (like F2).

        If the cursor is in the lower window and the lower window
        contains text, ESC means "abandon reply"; OzCIS will ask you
        to confirm this choice before it closes the Reply Editor.
        Pressing either "n" or ESC in response to the query will tell
        OzCIS not to abandon the reply. If there's no text in the
        lower window: Closes the Reply Editor's window.

F1      Context-sensitive help, including a quick reference to all
        of the above commands and others used in the editors.

There are two commands to "unload" the message in the upper (parent)
window and load into it either the previous or next message in the
current group:

F5      Get previous message

F7      Get next message. These two commands enable you to make a
        single reply to a several-part message from the same person,
        quoting from the several messages into your reply-message.


        COPYING TEXT FROM THE "PARENT" MESSAGE WHEN YOU REPLY TO IT

OzCIS has a universal "clipboard" you can use to transfer text from
one window to another. Mark a block of text; copy it to the Clipboard;
move the cursor to a new location; paste the copied text there. These
block commands use the following WordStar-style commands:

^KB    Start marking the text at the present cursor position.





  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 53




^KK    Used after you've moved the cursor to the end of the block of
       text you want to mark; highlights the block. Use ^KH to hide
       the highlighting or re-display it when hidden.

^JC    Copies the selected text to the Clipboard, whether or not the
       highlighting is visible. If highlighting is visible, this
       command hides it again. This is a visual confirmation that the
       highlighted block has in fact been copied into the clipboard.

^JP    Pastes the text in the clipboard at the current cursor
       position. (Note: You can't paste any text into the Message
       Reader window.) (^JP has no effect if there isn't any text in
       the Clipboard.)

       The stored text stays in the Clipboard until you quit OzCIS and
       return to DOS or until you store some other text in the
       Clipboard.

If the text pasted into the Reply Editor is not formatted to the
proper line width, use the "reformat paragraph" command (^B). You can
rapidly reformat all text in the reply-window to your normal line
length via the command ^KG.

When you are done with the reply, give the SAVE command (ALT-S, or
press F4 if the cursor is in the reply-window). OzCIS then asks you
if this is a "Standard" or "Receipt Requested" message. Normally
you'll want to send mail "Standard". If you ask for a receipt, you get
a confirming message from CIS, also via CISMail. There is an
additional $ 0.25 charge from CIS for this service.


        REVIEWING OUTGOING MAIL -- USING THE REVIEW EDITOR

From the main screen, select MAIL > VIEW OUTGOING MESSAGES to open the
Review Editor.

The Review Editor's command set will be discussed in detail later.
There are a few commands we'll note here.

F3      View previous message  (Alternative: ALT-P)
F5      View next message      (Alternative: ALT-N)
ALT-K   Kill the message now on the screen.

If you select press ALT-K (or select "KILL" from the menu bar), OzCIS
asks you to confirm this choice. If you reply YES, the message you're
now reading (and only that one) is removed from the outbound mail
file, CISMAIL.REP. If it is the ONLY outgoing message, CISMAIL.REP
will be deleted.






  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 54




        SAVING ALL OUTGOING MESSAGES TO A FILE

When you quit the Review Editor, OzCIS asks if you want to save
outgoing messages - if, during Host configuration, you selected the
"ASK" option in the save-outbox-messages field.

If you answer YES, all are saved to a file called CISMAIL.OBS ("OBS"
means "outbox save"), written into the same directory where OZCIS.EXE
resides. If the .OBS file doesn't exist, OzCIS creates it. If it
exists, the newly-saved text will be added to it. If you chose "ASK" -
but then don't review the outgoing messages before sending them -
OzCIS automatically saves them when it has completed a mail "pass" on
CIS. If you chose "ALWAYS," the messages are automatically saved to
CISMAIL.OBS without query.

There are other ways to save individual messages or selected text in
individual messages. They will be discussed shortly.


        ABOUT THE ADDITIONAL "TO:" LINE VISIBLE IN THE REVIEW EDITOR

OzCIS adds an additional line to the text you've just written, placing
it at the top of the message. You won't see it until you review
outgoing mail with the Review Editor. The line might look like this:

TO: J. Schmoe [12345,6789]

If J. Schmoe is the only recipient, the extra "TO:" line is not
required for proper message routing and will be stripped when OzCIS
posts the message on CIS. There is no need for you to remove it
manually. Careful: If you alter the UserID information in the "TO:"
line, OzCIS will think you're sending a copy of the message to another
person and will try to comply with your request. If you don't want to
send an unwanted copy, don't alter the "TO:" line.

If you are sending copies of the message to other people, there will be
more than one of these "TO:" lines at the top of the text. In that
case, they MUST remain in the file. For more information about carbon
copies, see "Sending Copies of Mail and Getting Return-Receipts,"
later in this file.


                COMMAND REFERENCE - NEW MESSAGE EDITOR

The menu bar has several "flags" at its right side to give you
information about editor status:

INSERT
  Indicates that "insert mode" is on (typing text pushes other
  text to the right). If you toggle this mode via the INS key, or
  via ^V, "INSERT" changes to "OVER" (for "over-strike").



  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 55




SMART
  Indicates that you have enabled "smart" tabs. Toggling them off
  changes the flag to "FIXED".

  With "smart" tabs enabled, pressing the space bar several times in a
  row sets an automatic tab length. Let's say you use the space bar to
  create columns of unequal width, then press ENTER to begin a new
  line. Each time you press the TAB key, the cursor jumps to the next
  column whose position you established in the previous line via the
  space bar.

INDENT
  Means you have the auto-indent function enabled. Otherwise,
  that part of the menu bar is blank.

  With auto-indent mode on, pressing ENTER at the end of a line
  indented from the left margin will begin a new line indented by the
  same amount. If you indent that line even more, the next new line
  will begin at the new indent-position. Pressing ENTER twice turns
  auto-indenting off, returning the cursor to the default left margin.

WRAP
  Indicates that you have word-wrapping enabled. If you turn word-
  wrapping off, that part of the menu bar is blank.

SAVE
  As soon as you alter a message's text in any way, "SAVE" appears to
  alert you of the changes. If you make changes to a line but then
  restore it to its original state, SAVE" will disappear. However, any
  change that includes adding or deleting lines will cause "SAVE" to
  appear and remain on the screen.

(These flags also appear in the menu bars of the Review Editor and the
General Editor.)

CURSOR/SCREEN CONTROL

UP, DOWN, LEFT, RIGHT, PG UP, PG DN
  As discussed in earlier sections of the documentation.

^LEFT  and  ^RIGHT
  Move cursor to previous word and next word, respectively

HOME  and  END
  Beginning of line and end of line, respectively

^HOME  and  ^END
  Top and bottom of current screen, respectively






  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 56




^PG UP and ^PG DN
  Beginning of current message and end of current message,
  respectively

CURSOR/SCREEN CONTROL (additional keystrokes not shown in menus)

^A
  Move to previous word (identical to ^LEFT)

^D
  Move cursor right one character

^E  and  ^X
  Cursor up one line and down one line, respectively - identical
  to UP and DOWN

^C  and  ^R
  Scroll up one screen and down one screen, respectively - identical
  to PG UP and PG DN

^W  and  ^Z
  Scroll window upward one line and downward one line, respectively
  (without moving the cursor)

^JL
  Jump to line number ... then a data field appears in which you type
  the desired line number. The value OzCIS places there by default
  is the CURRENT line number.


MENU BAR ACCESS - F10
  Move cursor into menu bar

EDITOR - ALT-E
  Opens the General Editor

ADDRESS BOOK - ALT-A
  Opens the MESSAGE ADDRESS dialogue. You can then open the Address
  Book by using commands discussed in the tutorial section, above.

HELP - ALT-H or F1
  Invokes the on-line-help system.

FILE OPERATIONS

SEND - ALT-S
  If you haven't yet addressed the message, opens a blank Message
  Address dialogue. Fill in the information and press F10 to
  confirm. Saves the message and quits the New Message Editor.





  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 57




SAVE - ALT-V
  If you haven't yet addressed the message, opens a blank Message
  Address dialogue. When the information is filled in, then confirmed
  via F10, this command saves a copy of the message in the file
  CISMAIL.OBS, after which you are still in the editor, editing the
  same message. SAVE is not the same as "save and quit" - use "SEND"
  for that.

  If you have already used the Address Book and filled in the
  recipient's information, SAVE immediately saves a copy of the
  message into CISMAIL.OBS and leaves you in the editor.

SEND message, then start another one - F4
  Opens the MESSAGE ADDRESS dialogue (blank unless you have already
  filled in the information via the "ADDRESS" command). Address the
  message. Press F10 to confirm. OzCIS briefly displays a small window
  confirming the "save" and then leaves you in the editor with a blank
  editing screen.

  If you have already filled in the MESSAGE ADDRESS fields, F4 opens
  the dialogue with the previously-written information in it. Pressing
  F10 confirms the information and stores the message with the other
  outgoing mail, leaving you in the editor with a blank editing screen.

  F4, used here, is different from other "save" or "send" commands. It
  tells OzCIS to remember the name and UserID information you last
  entered. The next SEND or F4 command will bring up the MESSAGE
  ADDRESS dialogue with the previous name and UserID information
  ALREADY typed into the NAME and ADDRESS fields.

  As long as you keep using F4, OzCIS keeps recalling the information
  about the last recipient and will continue to save and clear the
  screen. Thereafter, selecting SEND (from the top-line menu) saves
  the current message, then quits the New Message Editor.

OTHER COMMANDS

TEXT menu - ALT-T

  ^K followed by 0, 1, 2, or 3. Set one of four possible markers
  in the text.

  ^Q-[0 to 3]  Jump to one of the numbered markers.

  ^KM  Toggle the display of numbered markers on and off.

  ^QF  Search for text.

  ^QA  Search and replace text.





  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 58




  The "search" and "search and replace" commands use certain flags
  that tell OzCIS how to find text. These single-character flags are
  typed into a data field that appears when you've typed the search
  text and pressed ENTER (or typed first the search text and pressed
  ENTER, then the replacement text and pressed ENTER).

  Some of the flags described below (group-related commands) are
  applicable only to the Message Reader:

     U    Treats all text as if it were upper-case. That is, case is
          completely ignored during the search.

     B    Search backwards through the message or group. If "B" is
          used in combination with "A" (see below), the search begins
          in the newest (highest-numbered) group and moves backward
          through it, then to the next-most-recent group, ending
          finally in Group 1.

     G    Search the entire current group, either forward or backward,
          depending on whether "B" is also used - but only the current
          group. In a search/replace, "G" is necessary for replacing
          all occurrences of a character string.

     A    Search all groups, either forward or backward, depending on
          whether "B" is also used. "A" always over-rides "G".

  ^L    Repeat the last search. If the last command was a "search-
        and-replace" command, ^L performs another replacement.

  ^OC   Center the current line

  ^B    Reformat paragraph (re-wrap the lines to the presently-
        specified line length). If you set a temporary right margin
        (and/or left margin), ^B uses it (them) rather than the
        default value you established when you configured OzCIS.

  ^KG   Global reformat - reformat ALL paragraphs in the message.

  ^QL   Restore current line. If you make changes to a line, this
        command removes the changes (works only if you have not
        yet moved the cursor to another line).

COMMANDS NOT SHOWN IN THE MENUS

^G
  Delete one character to the right

^T
  Delete word to right




  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 59




^N
  Open a new line (split present line) at the cursor position

^Y
  Delete entire line

^QY
  Delete from cursor position to end of line


BLOCK menu - ALT-B

  ^KB  Begin marking a block of text
  ^KK  End marking of a block
  ^KT  Mark a single word as a block

  ^KC  Copy a marked block, inserting it at the current
       cursor position

  ^KV  Move marked block, inserting it at the current
       cursor position (and removing it from its
       original position)

  ^KY  Delete a marked block

  ^KH  "Toggle" command to hide a marked block or re-display it
       when it has been hidden.

  ^KI  Indent block

  ^KU  Un-indent a block

  ^QB  Jump to beginning of marked block

  ^QK  Jump to end of marked block

  ^KP  Print marked block

  ^KW  Write marked block out to disk; OzCIS will then prompt
       you for the output file name

  ^KR  Read a block of text now on disk, inserting it at the
       present cursor position.

  NOTE:  ^KW and ^KR both allow you to specify file names containing
         wildcards. Using that kind of file name opens an OzCIS file
         pick-list.

        The ^KW command always over-writes files rather than appending
        text to them. If you specify an existing output file name,
        OzCIS asks you to confirm over-writing it.



  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 60




  Case conversion:

  ^OU  Convert marked text to upper case

  ^OV  Convert marked text to lower case

  ^OO  Toggle case

CLIPBOARD menu - ALT-C

  ^JC  Copy marked block of text to OzCIS' Clipboard. Highlighting
       will then be hidden - visual confirmation that text has been
       put into Clipbaord.

  ^JK  Cut marked block of text to Clipboard (stores block
       in Clipboard and removes it from the text)

  ^JP  Paste text in Clipboard at present cursor position

OPTIONS menu - ALT-O

  INS   Toggle insert/overstrike mode

  ^V    Same as INS

  ^OI  Set text-indent mode ("Smart" versus "Fixed")

  ^OB  Set block indent. Sets the number of spaces the block
       indent/unindent commands (see above) move a marked block.
       Default value: 2 spaces.

  ^OR  Set right margin

  ^OW  Word-wrap on/off

  ^OF  Toggle TAB mode - "SMART" versus "FIXED"

  ^OT  Set size of fixed tabs (maximum = 10)

MISCELLANEOUS FUNCTIONS

  ^P    "Print" a character onto the screen. Command is not shown in
        any menus. This is a means of quoting a CTRL character onto
        the screen. Rarely needed.

        It is absolutely, positively, NOT a good idea to put CTRL
        characters into CISMail messages (other than the "split"
        character - see below).






  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 61




        SENDING COPIES OF MAIL AND GETTING RETURN-RECEIPTS

The MESSAGE ADDRESS dialogue appears in the New Message Editor
when you are ready to send a newly-composed message or when you select
the ADDRESS command. The dialogue's COPIES field contains the word
"ENTER," meaning that when you move the cursor into the field, press
ENTER to get access to the Copies sub-dialogue.

That dialogue contains two columns of blank entries. You can enter up
to 30 different name/UserID entries for the message you want to copy.
Pressing F2 when the cursor is in any of the fields opens the Address
Book. If you make select an entry from the Address Book, the
name/address information for that person will be entered into a field
in the Copies dialogue.

Press F10 when you're ready to confirm the "carbon-copy" information
and close the dialogue. You'll be returned to the MESSAGE ADDRESS
dialogue. Press ESC if you decide not to make any copies after all.

OzCIS can mark a message "Return receipt requested." In that case, CIS
will send you a confirming message noting the date and time the
message was received by the addressee. CIS charges you a fee for this
service (usually 25 cents per receipt request).

Note also that CIS charges a fee for each message sent to the second
and subsequent addressees in a CC'ed message (again, usually 25
cents). CC'ing messages can also become expensive.

Using CC can be a great convenience for groups of people working
together. But it can also be abused; there have been instances of
people's doing advertising or sending "junk mail" information that
way. CIS has rules about the use of the CC capability, and such
"scattergrams" are specifically prohibited; violating the rule can
lead to the suspension or revocation of your CIS access. Give the
command "GO RULES" at a CIS "!" prompt for more information on CIS
operating rules and policies.



                  COMMAND REFERENCE -- MESSAGE READER

CURSOR/SCREEN CONTROL: Same as for the New Message Editor.

MOVING AMONG MESSAGE GROUPS:

ALT-V, F4, or "v" alone,
  Display previous group (lower group number)

  (Again, the Message Reader is unique among the editors in supporting
  single alphabetic keystrokes as commands.)




  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 62




ALT-X, F6, or "x" alone
  Display next group (higher group number)

MOVING AMONG MESSAGES WITHIN A GROUP:

ALT-P, F3, "-" (on either keypad), or "p" alone
  View previous message

ALT-N, F5, "+" (on either keypad), space, or "n" alone
  View next message. ("space" is like PG DN until the end of
  a given message is reached; then pressing "space" again moves to
  the next message)

ALT-J  (no alternate keystrokes)
  Jump to message number. A small data field appears into which
  you type the desired line number. Then press ENTER.

REPLYING:

ALT-R, F2, or "r" alone
  Reply to current message

BLOCK AND CLIPBOARD COMMANDS: Same as for the New Message Editor

ADDRESS BOOK SERVICES:

ALT-A or "a" alone
  Opens the Address Book, followed immediately by the dialogue for
  editing an Address Book entry. The name and address of the sender
  (of the message now being viewed) will be automatically entered into
  the NAME and ADDRESS fields of the add/edit dialogue. When you close
  this window (confirming or not-confirming the new information, your
  choice), all normal Address Book services are available. Pressing
  ESC will close the Address Book window.

PRINTING: ALT-I or "i" alone
  Print the current message. If the printer is not ready, OzCIS warns
  you about it and gives you a chance to try again. (ESC to abort.)

  If you chose FILE instead of a printer port during general
  configuration, selecting PRINT brings up a data field in which you
  specify the file name for the printout. OzCIS supplies the name "PRN"
  by default, allowing you to print to your line printer after all.

SAVE MESSAGE: ALT-S or "s" alone
  Save the current message to a file of your choosing. OzCIS supplies
  the file name CISMAIL.SAV by default; type some other name there if
  you want. Typing a file name containing wildcards, then pressing
  ENTER, will bring up an OzCIS file pick-list.





  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 63




  This command never over-writes such "save files"; it will always
  append new text to them.

EDITING: ALT-E or "e" alone

  Opens the General Editor. Commands used in the General Editor will
  be discussed shortly.

OTHER FUNCTIONS - OTHER menu (ALT-O)

ALT-M
  Rename file. This command is available only when OzCIS has retrieved
  a binary file someone has sent to you via CISMail. OzCIS gives such
  files names like "CM031092.2" (that name would mean it's the second
  CISMail binary file received on 03-10-92) to avoid any possibility
  of over-writing a file now in the OzCIS directory. When it downloads
  a binary file, OzCIS creates a short CISMail message that usually
  displays the downloaded file's original name.

  When you are viewing that message, choose "rename file". You can
  then rename the file to its original name. "Rename file" is
  accessible ONLY when you are viewing the message confirming the
  binary-file download.

ALT-F
  Forward copy.  This command allows you to forward a copy of the
  current message to another user.  You will be prompted for the
  name and address of the user to whom the message is being
  forwarded.  The entire message, including the "header", is sent.

ALT-J
  Jump to message number. Brings up a small data field in which
  you type the number. Example: If you want to look at the third
  message in the current group, type ALT-J, then "3", then ENTER.

ALT-T  (or ^QF, which is not shown in the menu)
  Search for text. This opens a window into which you type the
  text to be searched. Press ENTER. A second window appears in which
  you type one or more single-letter search-criteria ("flags"). For
  more information on the flags, see the command reference for the New
  Message Editor, above.

NOTE: The WordStar-style command ^L - "search again" - can be used
      following your first search launched from the dialogues brought
      up via ALT-T. ^L is not displayed in any menus.









  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 64




                   COMMAND REFERENCE -- REPLY EDITOR

CURSOR/SCREEN CONTROL:

Cursor and screen movement keystrokes
  See "Command Reference -- Message Reader" (above)

WINDOW CONTROL; MENU BAR ACCESS

F2
  Toggle back and forth from Reply Editor window to Message
  Reader Window.

ALT-R
  Same as F2 in either window (means "review parent message" when
  in Reply Editor and "return to reply" in Message Reader)

ESC
  Same as F2 if cursor is in Message Reader. Abandons reply
  (with confirmation query) if cursor is in Reply Editor.

F5
  Display the previous message in the group (in the UPPER window).

F6
  Move text in the upper (Message Reader) window upward one line.

F7
  Display the next message in the group (in the UPPER window).

F8
  Move text in the upper (Message Reader) window downward one line.

F10
  Move cursor into top-line menu bar (if it's in the Reply Editor; if
  it's in the Message Reader, F10 puts cursor back into Reply Editor)

ALT-F10
  Move cursor into Reply Editor's own menu bar (which appears along
  the "split" in the screen)

FILE OPERATIONS

F4
  Selects SEND from main menu bar; OzCIS then prompts for decision on
  your getting back a receipt from CIS, or no receipt ("Standard").

ALT-S
  Same as F4





  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 65




ALT-V
  Selects SAVE from main menu bar. Save this reply-message to the file
  OZCIS.OBS ("outbox save"), located in same directory as OZCIS.EXE.

COMMANDS ACCESSIBLE FROM THE REPLY EDITOR'S OWN MENU BAR

These commands are identical to those of the New Message Editor. The
difference is that whereas the New Message Editor shows its functions
in a single menu bar, the Reply Editor has some of them in the "split"
between the windows and has the rest in the main menu bar.


                  COMMAND REFERENCE -- REVIEW EDITOR

CURSOR MOVEMENT; MENU BAR ACCESS

As noted in command references for the other editors.

MOVEMENT AMONG MESSAGES

ALT-P  or  F3
  Previous message

ALT-N  or  F5
  Next message

NOTE:  If you have edited a message, then given "previous message" or
       "next message" commands before saving the changes, OzCIS will
       ask you to confirm saving the changes before moving on.

KILL A MESSAGE - ALT-K
  Remove the current message from the file of outgoing
  messages. You will be asked to confirm.

SPLIT A MESSAGE - ALT-L
  OzCIS will insert a ^S character into the message text at the
  current cursor position. The character will cause the message to be
  split at that point. OzCIS will automatically insert new message
  header information into the continuation of the message, plus add
  "continued in" and "continued from" text into the two (or more)
  parts of the split message.

  OzCIS can automatically split messages, however, and it's usually
  more convenient to let it do the work for you. Use ALT-L to force a
  split, over-riding any decision OzCIS would make.

  Even if you put a "split" character into a message that is not
  long enough to warrant splitting, OzCIS will split the message.






  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 66




  NOTE: The maximum size of a forum message is 2100 characters or 92
        lines, whichever occurs first.

        The maximum size of a CISMail message is 512K. It is not
        usually necessary to split CISMail messages, and OzCIS will
        not do so even if you give a manual split-command.

EDITOR - ALT-E
  Opens the General Editor

ADDRESS BOOK: ALT-A
  Opens the Address Book. Does NOT also open the MESSAGE ADDRESS
  dialogue.

HELP: ALT-H or F1
  Invokes the on-line-help system

SEND MESSAGE: ALT-S
  Saves the message and quits the Review Editor. If the current
  message has been changed, OzCIS asks you to confirm saving the
  changes before quitting.

ESC
  Quit the Review Editor. If the current message has been altered, you
  are asked to confirm the changes before quitting.

NOTE:  Any "quit" command given in the Review Editor will bring up a
       dialogue in which you are asked if you want to save the replies
       to the "outbox save" file. See the upcoming section "A Review of
       'Save' Options in the Message Editors" for more information.

OTHER REVIEW EDITOR FUNCTIONS

Virtually all editing commands available in the New Message editor -
block commands, Clipboard commands, and so on - are also available in
the Review Editor, even though its menu bar doesn't refer to these
commands at all. See the command reference for the New Message Editor
for complete information.


                  COMMAND REFERENCE -- GENERAL EDITOR

The General Editor, accessible from a number of different OzCIS
editors and from the main screen (WINDOW > EDITOR), can edit any
plain-text file and has an input-file size limitation of 64K.

When you open the General Editor, OzCIS supplies "*.*" by default as
the name of the file to load. As in other such situations, supply a
file name of your choosing or leave "*.*" in the data-entry field (or
some other name containing wildcards) to get a file pick-list.




  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 67




To start with a blank editing screen, type the name of a non-
existent file into the data field, then press ENTER.

FILE menu - ALT-F

F2
  Save file and continue editing.

ALT-F2
  "Save As..." - choose a new name for the file being edited, then
  save it using the new name.

^F2
  Save the file and quit the General Editor.

ESC
  Quit the General Editor. If the file on the screen has been changed
  but hasn't been saved yet, you're asked to confirm before quitting.

F3
  Get a new file. If the text on the screen has been changed but has
  not been saved, OzCIS asks you to choose saving the edits or
  abandoning them before loading the new file.

TEXT menu - ALT-T   (commands are all identical to those of the New
Message Editor's TEXT menu; see above for information on the New
Message Editor)

BLOCK menu - ALT-B  (identical to New Message Editor BLOCK menu
commands)

CLIPBOARD menu - ALT-C  (again, identical to New Message Editor)

WINDOW menu - ALT-W

ALT-Z
  Zoom the window. Depending on where you are in OzCIS when you open
  the General Editor, its window will cover the full screen or only
  half the screen. Use the "zoom" command to toggle between a full-
  and half-screen display for the editor.

ZOOMING AND MOVING THE WINDOW WITH THE MOUSE

You can resize and re-position the General Editor window dynamically
with the mouse: The "+" symbol in the window's lower-right corner is a
"hotspot" that allows you to change the window size when the window is
NOT "zoomed." Put the mouse pointer there and hold down the left
button as you drag the "hotspot." The top bar of the window is the
window's movement "hotspot": Place the mouse pointer there and "drag"
with the left button held down to move the window around the screen.




  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 68




        A REVIEW OF "SAVE" OPTIONS IN THE MESSAGE EDITORS

NEW MESSAGE EDITOR: Pressing F4 or selecting SAVE from the New
Message Editor's menu bar stores the header and body text information
of the current message (and only that message) to a file called
CISMAIL.OBS. If CISMAIL.OBS exists, the saved message is appended to
the end of the file.

If, during Host configuration, you put ALWAYS into the data field
relating to outbox-saving, all outgoing messages will automatically be
saved into CISMAIL.OBS.

The "write marked block to disk" (^KW) command is available in the New
Message Editor, but remember that it over-writes file (with your
permission) rather than appending information to them.

MESSAGE READER: Selecting "SAVE" stores the current message in a file.
OzCIS supplies the destination file name CISMAIL.SAV by default; you
supply another name if you want. If you include wildcards, you'll
first see a standard file pick-list. This kind of "save" always
appends to a file if it now exists.

There is no "write block to disk" command in the Message Reader.
However, you can copy a block of text in the window to the Clipboard;
open the General Editor; paste the block into the General Editor
window; then save the text in the window to a file (or use the "write
block to disk" command within the General Editor).

REVIEW EDITOR: There is no "save" menu selection, but when you quit
the editor, OzCIS asks if you want to save the messages to a file (if,
that is, you placed YES within the Host configuration dialogue field
relating to outbox message saving). If you answer "yes," ALL of the as-
yet-unsent messages are saved to the file CISMAIL.OBS.

The Review Editor also supports the "write block to disk" command.

GENERAL EDITOR: This editor also supports the "write block to disk"
command, but there is no "save to file" option similar to that of the
Review Editor or Message Reader. Use "Save As" instead.

OzCIS considers CISMAIL.SAV and CISMAIL.OBS as "folders" (accessible
via the MAIL > MESSAGES STORED IN FOLDERS command). They have a
file format of their own. See "Messages Stored in Folders," later in
this file, for more information.










  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 69




                       OTHER "MAIL" MENU OPTIONS

        UPLOADING A BINARY FILE AS PRIVATE MAIL

You can transmit a binary file as mail that will be stored in the
recipient's private CIS mailbox.

Select MAIL > UPLOAD A FILE AS MAIL. This opens an INPUT FILE TO MAIL
dialogue containing FILE NAME, SEND TO, and ADDRESS fields:

FILE NAME

  Type the name, including path information if necessary, or press F2
  to bring up a standard file pick-list.

  If the FILE NAME field is blank when you press F2, OzCIS assumes you
  want it to display all files in the current directory. Or type a
  file name containing wildcards that will limit the display - e.g.,
  "*.DOC" - then press ENTER (not F2) for a file pick-list. You can
  include path information in the FILE NAME field; an ambiguous name
  like E:\*.DOC would restrict the display to all .DOC files on E:\.

  If you don't select a file from the first pick-list shown after
  supplying an ambiguous file name, OzCIS will then present a file
  pick-list showing all files in the current directory.

SEND TO

  Enter the recipient's name here.

ADDRESS

  Enter the recipient's UserID number here.

  If you press F2 with the cursor in either the SEND TO or ADDRESS
  fields, the Address Book opens.

Press F10 to confirm the information or ESC to close the INPUT FILE
TO MAIL dialogue without saving the information.

After saving and confirming the information, if you review the
outgoing mail, there will be a message looking something like this:

  **OzCIS Automatic upload to CISMail**
    File: D:\UPLOADS\FILENAME.EXT

The recipient's name and UserID will appear in the usual place at the
top of the Review Editor window.

If you decide not to send the file, use the Review Editor's KILL
command. This prevents the upload but does not delete the file itself.



  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 70




        MONITORING UPLOAD STATUS

When OzCIS starts to upload the binary file, it will open a window
that displays a lot of information about the file transfer, including
the file transfer protocol ("B Plus"), the file name and size,
estimated transfer time, elapsed time, remaining time, number of
errors encountered (if any), throughput (number of characters
transferred per second), and efficiency (actual transfer speed as a
percentage of the ideal speed for that baud rate).

At the bottom of the window a "thermometer bar" shows, graphically,
how much of the file has been sent and how much remains to be sent.
Below that a status indicator reads "OK" as long as there are no
errors. If there are errors, it will display what kinds of errors
they were.

CIS and OzCIS together will make a maximum of ten attempts to fix
errors during the file transfer. If the tenth try fails, the file
transfer is aborted, after which OzCIS continues with other mail
processing, if any.


        DOWNLOADING A FILE SENT TO YOU AS PRIVATE MAIL

If someone sends you a binary file as CISMail, OzCIS downloads it as
part of a normal mail run.

What happens when there is a binary file in your CIS mailbox depends
on how you answered the question "Prompt on auto-download?" during
Host configuration. If you answered NO, OzCIS automatically downloads
the binary file without further ado. If you answered YES, OzCIS halts
before downloading and asks you if you want the file.

You have 15 seconds to decide. If you answer NO, OzCIS leaves the file
in your mailbox; you can download it some other time. If you answer
YES or don't respond within 15 seconds, OzCIS downloads the file, then
deletes it from your mailbox.

During the download, OzCIS opens a file transfer status window like
the one it displays during CISMail file uploads.

The file is stored on your system not with its real name, but with a
name like CM12189.1 - "CM" means "CompuServe Mail"; the next six
digits are the date of the download; the extension reflects how many
binary files have been downloaded via CISMail that day. This naming
scheme is used to avoid over-writing any existing files. To give the
file its real name back, leave it in the directory where OzCIS stored
it, and:

Read your new mail. OzCIS will have written you a short message
containing information about the file, often including something like



  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 71




"UPLOAD: FILENAME.EXT" in the "Subj" line. The name after "UPLOAD:" is
the file's real name. (This information is sometimes NOT available in
the message.)

Select OTHER > RENAME FILE (or press ALT-M). OzCIS will ask you to
confirm renaming the file. Press N or ESC for NO, or Y for YES, then
enter the new name into the next data field that appears. This
function is available only in the Message Reader and only when you're
reading the message that confirms the download.


        MESSAGES STORED IN "FOLDERS"

As discussed earlier, you can save outbound messages to a file named
CISMAIL.OBS from the New Message and Review editors. From the Message
Reader, you can save individual messages written TO you in a file
named CISMAIL.SAV (or some other name of your choosing). These "save"
files - "folders," in OzCIS parlance - are not accessible from any of
the OzCIS editors you normally use for writing or reviewing CISMail.

However, you can read them using an altered version of the Message
Reader by selecting MAIL > MESSAGES STORED IN FOLDERS from the main
screen. A sub-menu then appears with four own menu items:

SAVED RECEIVED MESSAGES: Messages TO you that have been stored to the
file CISMAIL.SAV (or some other file you named when you chose SAVE in
the Message Reader). This menu item will not be accessible if OzCIS
cannot find a CISMAIL.SAV file in the OzCIS directory.

You can reply to these messages, and the reply will be sent via
CISMail as if you'd replied to them directly from the Message Reader.

SAVED OUTBOX MESSAGES: Messages FROM you that have been saved to the
file CISMAIL.OBS (the menu item is not accessible at all if OzCIS
can't find CISMAIL.OBS). You can also reply to such messages in this
kind of "folder". Selecting REPLY splits the screen and opens the
Reply Editor. Thereafter, saving the reply sends it directly to the
original recipient.

PURGED MESSAGES: Messages you've had OzCIS "purge" but when you've
also told OzCIS to save "purged" messages. This menu item is not
accessible if OzCIS can't find a CISMAIL.PRG file in the OzCIS
directory.

MANUAL SELECTION: Saved messages written TO you that you've stored in
some file other than the default (CISMAIL.SAV). If you choose MANUAL
SELECTION, a data field appears in which you enter a single file name
or else an ambiguous file name (OzCIS supplies the name CISMAIL.SAV to
begin with). Entering a name containing wildcards opens a standard file
pick-list.




  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 72




Here again, replying to such a message addresses it automatically to
the original recipient.

If you ask OzCIS to open a "folder" that is not in the correct format,
you'll get an error message. OzCIS expects to find a plain-text file
containing messages with headers that look like this:

Date:  30-Dec-91 07:05 PST
From:  Josephine Schmoe [12345,9876]
Subj:  What are messages in folders?

OzCIS will also display an error message if you have significantly
altered the header information in the first message of the "folder."

NOTE:  The reader that displays messages in "folders" is like the
       Message Reader, but it doesn't support the Message
       Reader's "Previous Group" and "Next Group" commands.


        STAYING ON-LINE AFTER AN AUTOMATIC CISMAIL "PASS"

You can't interrupt the transfer of CISMail unless you do something
drastic like turn your modem off - NOT recommended! However, after
the mail processing is done, you can prevent OzCIS from automatically
logging off CIS, and instead stay on-line until you're ready to quit.

During automatic mail processing, OzCIS' menu bar shows two commands,
ALT-T and ALT-S. Press ALT-T while OzCIS is transferring mail (either
to you or from you). A flag (highlighted text) appears at the lower
right of the screen, notifying you that manual-terminal mode is pending.

When OzCIS is done transferring mail, it halts and leaves you at the
"!" prompt of the CIS mail service (sometimes you will not see a "!"
prompt, but rather the word "OK"). The top-line menu changes as OzCIS
shifts into its on-line-terminal mode.

Do whatever you need to do on CIS. When you're ready to log off, press
ALT-X or left-click EXIT in the terminal-mode menu bar. This logs you
off CIS properly. (When you're in terminal mode, typing BYE at a
"!" prompt will not log you off; you'll have to type additional
commands. The EXIT command makes it much easier.

IMPORTANT: Pressing ESC in that situation (instead of using the EXIT
           command) tells OzCIS to drop carrier. This is not a good
           idea; dropping carrier can confuse CIS such that it doesn't
           "stop the meter" for as long as 15 minutes after you log
           off. You would be charged for those extra minutes of
           phantom on-line time.






  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 73




           If for some reason you MUST drop carrier, immediately log
           back onto CIS, then log right off again; this will properly
           reset the "meter."

ALT-T OR ALT-S?

If OzCIS is processing only CISMail, ALT-T and ALT-S have the same
effect: They prevent OzCIS from automatically logging off at the end
of the mail "pass." However, if the CIS session also involves forum
messages and/or files, ALT-T and ALT-S have different functions.

Use ALT-T to suspend automatic processing as soon as the work NOW in
progress is done. Do whatever you need to do at the CIS prompt, then
press ESC to get out of on-line-terminal mode. OzCIS, knowing where it
left off, resumes automatic processing and finally logs off CIS
(unless you interrupt it again with another ALT-T or ALT-S command.)

Use ALT-S if you don't need to go into on-line-terminal mode until
ALL automated processing is finished. When you've used ALT-S, by the
time you see the CIS prompt, all automated processing will be done -
do NOT press ESC thereafter to log off CIS; use the menu bar's EXIT
command instead.

NOTE:  Both ALT-T and ALT-S are "toggles"; pressing them once makes
       the request for terminal mode; pressing them again cancels the
       request. The "flag" at the lower-right of the screen will
       disappear if you toggle the request off.

Manual terminal mode commands will be covered in detail in the
documentation file TERMINAL.DOC, which covers all manual on-line
operations, including "conferencing" and OzCIS' script language.

                            # # #





















  -------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 74


```
{% endraw %}

## FILES.DOC

{% raw %}
```




                File: FILES.DOC -- OZCIS AND FILE MANAGEMENT

                INTRODUCTION

CompuServe contains a large number of files of various kinds, stored
in the file libraries of its forums. Navigating your way through the
libraries and file descriptions would be a tedious job if you had to
do it all manually. OzCIS has a number of procedures that make viewing
file information, and uploading and downloading files, simple and
mostly automatic.

Typical procedure: Open a forum's configuration dialogue and tell
OzCIS the numbers of file libraries whose contents you want to view.
On the next 1st or 2nd pass, OzCIS retrieves either brief or detailed
file lists - or both kinds if you want.

Then - off-line - you view the file lists, make selections from them,
assemble a list of files to download, and have OzCIS log back onto CIS
and fill your order.

The retrieval of abbreviated file information is a "short scan" that
provides a "short-format catalogue." Retrieval of detailed file
information is a "long scan" and provides a "long-format catalogue."
An "update" is a long scan that retrieves only new or changed
information from a library.


                GETTING LIBRARY INFORMATION

By now you should have had OzCIS do a configuration pass for the
forums that interest you. If so, there is now a file with the
extension .SEC in each forum's directory. .SEC files contain lists
of forum discussion sections and forum library numbers and names.
OzCIS uses the .SEC file to provide a pick-list of library names and
numbers.

If you have not done a forum config pass yet, we suggest you do so -
unless you know all of the names and numbers of your favorite forum
libraries by heart. Making a forum config pass is covered in the OzCIS
documentation file FORUMS.DOC.


                WHICH KIND OF SCAN?

A SHORT scan retrieves a list similar to what you'd see if you give
the command "DIR" at a library's "!" prompt. Here is a representative
line from a short scan:

  NEWDTP.ZIP  5   28K 11-22-91 Extensive comparison of DTP programs





  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 109




That's it. The short-format listing gives you only file name, library
number, size in "K," file date, and a brief description.

A LONG scan gives you information similar to what you'd see if you
give the command "BROWSE" from a library's "!" prompt:

  [12345,6789]    Lib: 5
  NEWDTP.ZIP/Bin  Bytes:  28288, Count:   89, 22-May-91

    Title   : Extensive comparison of DTP programs
    Keywords: DTP MAC PC DOS REVIEWS PROGRAMS COMPARISON

    Archive contains text file - abstracts from various trade mags'
    reviews of the latest versions of major (and some minor) DTP
    programs for Mac, PC, other platforms. Covers features lists,
    strengths and weaknesses, quality of tech support, prices.

Here you also have information on the UserID of the uploader, the
library number, the file name and file type, exact file size in bytes,
number of times the file has been downloaded ("Count"), file date, and
an brief and detailed descriptions. The "Keywords" are short
descriptive words added by the file's uploader (and/or the forum
sysops) to facilitate file searches.

The long-scan file OzCIS writes can be from 5 to 8 times larger than
the one it writes during a short scan. If you don't know for starters
how many files there are in a library that interests you, we suggest
you first do a short scan.

Once you've looked at the short-format catalogue, you can get a better
idea whether or not you want to do a long scan in the library. Doing
the short scan holds down your connect-time and saves hard disk space.

        FILES WRITTEN DURING A SCAN

During a LONG scan OzCIS writes a file (in the forum's subdirectory)
whose base name is the first 8 characters of the forum's "GO" word and
whose extension begins "L" and ends with the library number. A long
scan of the DTPFORUM's library 5 would produce the file DTPFORUM.L5.
The result of a SHORT scan is a similarly-named file, but with an ".S"
extension. A short scan of DTPFORUM, library 12, would result in the
file DTPFORUM.S12. During an UPDATE OzCIS writes a file with a name
like DTPFORUM.U3 (that would be an update taken from DTPFORUM's
library 3).


                PICKING THE LIBRARIES TO SCAN

Choose a forum via FORUMS > SELECT FORUMS > AVAILABLE FORUMS.
Then select FORUMS > PASS OPTION SETTINGS to open the main forum
configuration dialogue.



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 110




The lower "panel" of the dialogue ("1st/2nd One-Pass Options")
contains SCAN LIBS (LONG) and SCAN LIBS (SHORT) data fields.

Fill in either or both fields the same way you have filled in section-
number fields: Enter a library number into the field; if you enter
more than one number, put commas between the numbers. Do NOT type
spaces between the numbers and commas.

To see a pick-list of library names and numbers, press F2 when the
cursor is in either the long-scan or short-scan field.

A window named "LIBRARIES" opens at the right side of the screen.
Select a single library by highlighting it with the cursor bar and
pressing ENTER (or by left-clicking it). Select more than one library
by tagging multiple entries with the space bar; a check-mark appears
next to the selected entries. When you're done selecting them, press
ENTER or F10 to confirm (or ESC to abort). Select all libraries by
typing "ALL" into the field or selecting "ALL" from the bottom of the
pick-list. To the immediate right of each SCAN LIBS field there's a
"Y/N" field. When you're ready to do a scan, make sure to change "N"
to "Y" for whichever field applies to the scan you want done.

It's not safe to assume each message section in a forum has an
associated file library with the same number. If in doubt, check the
library pick-list.

Do NOT enter SECTION names into the SCAN LIBS data fields!

Close the dialogue and save the new configuration by pressing F10. Or
press ESC to close the dialogue without saving new information.

NOTE:  After the scan, OzCIS will automatically change a "Y" to the
       right of a SCAN LIBS field back to "N". The library numbers
       will remain as-is in the data to the right of the "Y/N" field.
       If you need to scan again, you'll need to open the config
       dialogue and change the "N" back to "Y" again. Options
       in this part of the dialogue are executed only once before
       being reset.


        THE "UPDATE" FIELD

Library contents change all the time. Set the UPDATE field to "Y" to
have OzCIS perform a long scan in selected libraries, retrieving ONLY
NEW OR CHANGED INFORMATION. Using "update" rather than scanning from
scratch can save you considerable time on-line, especially in large
libraries. (However, don't set this option to "Y" if you have never
before done a file scan.)






  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 111




                EXECUTING THE SCANS

Short and long scans are executed during either a 1st or 2nd pass.
OzCIS first takes care of any CISMail or forum messages, then does
scans, updates, or other work set up in the bottom "panel" of the
forum configuration dialogue.

        IF YOU HAVE TO INTERRUPT A SCAN ...

Keep in mind that if you're logged on at 9600 baud, the following
procedure might not work very well. At 2400 baud or slower, it should
work ok.

As the file information is scrolling down the screen, press ^C - the
normal CIS (not OzCIS) "abort" command. When CIS detects the ^C it
presents a menu of choices. Select the one that returns you to the
prior menu (don't choose "continue").

You are now at a CIS "!" prompt. OzCIS is still in the middle of its
automated routine, but you'll have (deliberately) thrown it off the
track; it won't be trying to do anything right at the moment.

Abort the automatic pass by pressing ESC once (and once ONLY). OzCIS
then presents you with several choices, including ESC to log off
immediately or "T" to go into on-line-terminal mode.

Don't press ESC - that tells OzCIS to drop carrier - not a good way to
log off CIS. Press "T" to go into terminal mode. When the terminal-
mode menu appears at the top of the screen, select EXIT (keystroke:
ALT-X) to make OzCIS log off CIS normally.

If you abort this way, OzCIS will have written as much of the scan-
file as it could write before you pressed ^P. You can leave the
partially-written scan file in the forum's directory or delete it -
your choice. If you do another scan in the same library later on, the
partial file will be over-written by the new scan.



                VIEWING CATALOGUES AND ABSTRACTS

After retrieving file information, select FORUMS > DOWNLOAD FILE(S).

This command opens a sub-menu with four choices.

SHORT LISTINGS

  After selecting the library to view, you are able to scroll though a
  list of its files, including a brief description of each file. If
  you have also done a long scan for this library, you can view




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 112




  extended file descriptions from the short-scan window and/or pick a
  file or files to download. More on that shortly.

LONG LISTINGS

  After selecting the library to view, you see a list of files similar
  in appearance to the list shown via SHORT LISTINGS. There are some
  additional options, including searching for text within the list.
  This command is also explained in greater detail below.

MANUAL INPUT

  This command opens a dialogue called INPUT DOWNLOAD FILE INFO. The
  dialogue can also be opened when you are viewing a short- or long-
  format file listing and will be explained in the "Viewing A Short-
  Format Catalogue" section, below.

EDIT LIST

  If you've selected files (by any method) to download from one or
  more forum libraries, this selection opens a window that allows you
  to make changes in the list of downloads - including removing files
  from the list. The command opens a PENDING DLS window, also
  accessible when you are viewing file catalogues. See "Viewing A
  Short-Format Catalogue," just below.



        VIEWING A SHORT-FORMAT CATALOGUE

Selecting FORUMS > DOWNLOAD FILE(S) > SHORT LISTINGS opens a LIBRARIES
window at the right of the screen, showing all of the forum libraries
in the .SEC file OzCIS retrieved when you did the forum configuration
pass. This is a pick-list from which you select one library at a time
for viewing. If you have not yet done a short scan for the library you
select, OzCIS notifies you that it can't find the necessary file and
returns you to the FORUMS > DOWNLOAD FILE(S) sub-menu.

(Shortcut: When you are looking at the "Libraries" pick-list,
pressing, say, "5" makes the cursor bar jump to the line for
library number 5.)

If the short-format file (with an extension of .S, plus library number)
exists, a window opens showing the complete library directory, with a
one-line listing for each file (see the example above in the section
called "Which Kind of Scan?"). The window is called SHORT FORMAT SCAN
OF (followed by the selected forum name and library number).

The list can be scrolled with the PG UP and PG DN keys or with the
mouse (HOME, END, and other screen-control keys are not active when



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 113




you open this window). The cursor bar can be moved from file to file
via the UP- and DOWN-arrow keys.

The window has a number of menus, explained here not in strict left-
to-right order but in order from simplest to least simple:

QUIT  (ALT-Q)

  Return to the main screen. Alternative: Press ESC.

HELP  (ALT-H)
  Brings up a help-window with information about viewing
  short scans. Alternative: Press F1.

EXTERNALS  (ALT-X)

  Call an external program. Externals are discussed in the documentation file
  MISC.DOC.

EDITOR  (ALT-E)

  Opens OzCIS' General Editor.

LIBCHANGE  (ALT-L)

  View a different library (short scan catalogue). This command opens a
  LIBRARIES window on the right side of the screen. Select a library
  from the pick-list or press ESC to close the window without switching.
  If OzCIS can't find a file associated with your choice, you'll get an
  error-message saying so.

  NOTE:  You cannot use LIBCHANGE to change from viewing a short-
         format catalogue to viewing a long-format catalogue - only to
         another short-format catalogue.

REQUEST

  A "Request" asks OzCIS to retrieve an abstract for the file
  currently highlighted by the cursor bar. (An abstract is detailed
  file information. See above - "Which Kind of Scan?" - for an
  example.) OzCIS asks you to confirm this selection. If you confirm
  it, OzCIS writes a file with the forum's name as its base name and
  the extension .SLR ("single library request"), containing filename
  and library-number information about one or more files to be
  "abstracted." The abstract is retrieved during OzCIS' next trip into
  the forum, after which the .SLR file is deleted.

  The abstract, when retrieved this way, is stored in a file with a
  ".U" extension (example: DTPFORUM.U5, which would be created if you
  request abstracts for files in library 5 of the DTPFORUM). The ".U"



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 114




  file is later merged into a long-format file for that library (if
  you have such a file), then erased.

  If you don't have a long scan file at all: If you are viewing a
  short scan catalogue and ask for an abstract of a file now present
  in a ".U" file, selecting "Abstract" here will display the detailed
  information for the highlighted file.

DOWNLOAD  (ALT-D or ENTER)

  "Download" is the default if you press ENTER while viewing a short-
  format list. The command opens an INPUT DOWNLOAD FILE INFO dialogue
  at the bottom of the screen. These are its data fields:

  CIS NAME. OzCIS will already have filled in the name of the file
  highlighted by the cursor bar when you gave the "download" command.

  LIBRARY. OzCIS will already have provided the number of the library
  whose file catalogue you're now viewing.

  LOCAL NAME. The cursor will be in this field. If you want OzCIS to
  write a file to disk with a name different from CIS' name for the
  file, enter the information here. You can include path information
  if you like; if you type a path, you MUST also include a file name.
  Entering nothing in this field tells OzCIS to store the file using
  its present CIS name and store it in the forum's own subdirectory.

  NOTE:  No wildcards allowed in this field! Use of wildcards in the
         file name will probably result in a CIS error message like
         "Remote out of disk" during the attempt to download the file.

  Press F10 to save the information about the file to be downloaded.
  Pressing ESC closes the dialogue without saving the information.

  When you confirm information in this dialogue, OzCIS writes a file
  with the extension ".DL" into the forum's subdirectory (example:
  DTPFORUM.DL). The files listed in the .DL file are downloaded during
  either the next 1st pass or next 2nd pass to the forum, after which
  OzCIS erases the .DL file.

  Downloaded files are stored in the selected forum's directory if you
  have not provided path information within the LOCAL NAME field of
  the download-information dialogue.

VIEWDLS  (ALT-V)

  Allows you to review the list of files you've asked OzCIS to
  download (the contents of the .DL file). If there is no such file,
  you get only an error message. Otherwise, a window called "PENDING
  DLS FOR [name of forum being viewed]" opens at the top of the
  screen, with several menu items:



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 115




  ADD. Re-opens a blank "INPUT DOWNLOAD FILE INFO" dialogue, allowing
  you to add a new name to the existing list of downloads.

  DELETE. Removes the file now highlighted by the cursor bar in the
  PENDING DLS dialogue. If there is only one file in the list and you
  delete it, the .DL file itself is deleted.

  EDIT. Opens the INPUT DOWNLOAD FILE INFO dialogue, discussed above
  in the discussion of the "Download" menu.

  HELP. Opens OzCIS' help window. Alternative: Press F1.

  QUIT. Closes the "PENDING DLS" window and returns you to the short-
  format file list.

ABSTRACT

  Allows you to view detailed information (the "abstract") for the file
  now highlighted by the cursor bar.

  If there is a long-format catalogue (".L file) or an update (".U"
  file) containing the abstract for this particular file, OzCIS opens
  a full-screen window called ABSTRACT FOR FILE (followed by the name
  of the file currently highlighted by the cursor bar). If there is
  neither a long scan file nor update file available, OzCIS displays
  an error message and returns you to the short-format catalogue
  window. The window containing the abstract might not open right
  away. There will be a delay if OzCIS needs to index the long-format
  file, and/or if OzCIS needs to merge any library update-files into
  the long-format file.

  The display shows several kinds of information about the file. To
  review (using the same example used earlier-on):

    [12345,6789]    Lib: 5

  The UserID number of the person who uploaded the file, and the
  library where the file is stored.

    NEWDTP.ZIP/Bin  Bytes:  28288, Count:   89, 22-May-91

  The file's name, file type ("Bin" in this case - meaning "binary"),
  size, number of times downloaded ("Count"), and the date the file
  was uploaded. (File types will be explained in the section on
  uploads.)

    Title   : Extensive comparison of DTP programs

  The short title the uploader gave the file; this is the same
  description line you see in the short-format catalogue window.




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 116




    Keywords: DTP MAC PC DOS REVIEWS PROGRAMS COMPARISON

  Words the uploader (or sysops) provided to facilitate on- or off-
  line searches for files.

  Finally, there is an extended description for the file (which we
  won't repeat right here).

  You cannot edit any text in the abstract window. However, you can
  highlight text using the block commands used in most of OzCIS'
  editors; a block of text copied to the clipboard from this window
  can be pasted into an editing-window later on.

  Menu items when viewing the abstract-information:

  NEXT  (ALT-N; alternative: PG DN). Get abstract-information for the
  next file in the list. If you are now viewing information stored in
  an  update file and that is the ONLY information in it, you will get
  an error message, since there ISN'T any "next" file. Otherwise,
  OzCIS gets an abstract for the next file in the list. (This is a
  quick way to view a number of abstracts in a row without having to
  return first to the short-format catalogue window.)

  PREVIOUS (ALT-P; alternative: PG UP). View an abstract for the
  previous file in the catalogue.

  DOWNLOAD (ALT-D). Download the file whose abstract you're now
  reading. This command brings up the INPUT DOWNLOAD FILE INFO
  dialogue discussed above.

  VIEWDLS (ALT-V). Review pending file downloads. Opens the PENDING
  DLS window (see above).

  EDITOR  (ALT-E). Opens the General Editor. Any text you've copied
  from an abstract to the clipboard can be pasted into the editor.

  RETURN  (ALT-R; alternative: ESC). Close the viewing window and
  return to the short-format catalogue window.


        VIEWING A LONG-FORMAT CATALOGUE

Select FORUMS > DOWNLOAD FILE(S) > LONG LISTINGS to open the LIBRARIES
window at the right of the screen. Pick a library for which you've
previously done a long scan (you'll get an error message if there is
no long-format file for the selected library).

OzCIS opens a window called LONG FORMAT SCAN OF [library name]. Its
file  display and most of its menus are exactly like those of the
short-format catalogue window. The QUIT, HELP, EDITOR, EXTERNALS, and
VIEWDLS commands (and their associated keystrokes) are exactly the



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 117




same. DOWNLOAD is shortened to DNLOAD to take up less space. There are
a few new commands:

LIBCH  (ALT-L)

  Change Library. This name is also shortened. Selecting LIBCH allows
  you to switch to another library's long-format catalogue listing
  (not to a library's short-format catalogue listing).

SORT  (ALT-S)

  Allows you to sort the display of files using one of three criteria:

  NAME. This is the default sorting method: Sort alphabetically by
  file name.

  DATE. Sort by date, with the newest files at the top of the list.

  UPLOADER. An ascending-order sort by UserID number of the people who
  uploaded the files.

  There is a short delay as the file listing is sorted; OzCIS re-
  writes the index for the long-format file. If no index yet exists,
  OzCIS will first build one.

ABSTRACT  (ALT-A)

  The window that opens when you request an abstract is virtually
  identical to the one shown when you're viewing files in the short-
  format-catalogue window. There is one difference:

  Back in the old days (a few documentation files ago), you went
  through OzCIS' general configuration. At that time you chose between
  "Y" or "N" in answering the question: "Uploader in Abstracts?" If
  you answered "Y," viewing an abstract from the long-format catalogue
  window displays not just the uploader's UserID, but his or her name
  as well - IF that UserID number is also in your own OzCIS Address
  Book. The display looks like this:

  [12345,6789]    Lib: 5   Uploader: Melvina Cowznofski

  Enabling this option increases the time it takes OzCIS to index the
  long-format catalogue, especially if you have a large Address Book.

  The menu commands available in the abstract-window are the same as
  those discussed above in the section on viewing an abstract from a
  short-format catalogue listing.







  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 118




KEYSRCH  (ALT-K)

  This means "keyword search" - allows you to search the library for
  words in "keywords" lines. Pressing ALT-K opens a window with a
  field into which you type the keyword. OzCIS temporarily turns on
  capitalization (keywords are always in caps). Type the word, then
  press ENTER. Another window opens in which you enter one (or both)
  of two single-letter search flags:  G  for a global search - through
  the entire list, or  B  to search backward through the list. When
  OzCIS finds a file whose keyword line contains the searched-for
  word, it positions the cursor bar onto that line in the window, then
  displays the abstract for that file.

  This abstract-window is different from others you've seen. Its top-
  line menu contains only two commands:

  NEXT SEARCH (ALT-N): Resume the search. The abstract-window closes
  and the search continues in the long-format-catalogue window. If there
  is another "find," the cursor bar jumps to the next file where
  there is a match, and then its abstract-window opens.

  Alternatives to ALT-N: You can use ^L for "resume search," either
  when you're viewing the catalogue window or the abstract displayed
  after a "find." When you're viewing the abstract, PG DN will also
  execute the "resume search" command. Both ^L and PG DN will execute
  "resume search" backward if you have set the "B" flag.

  RETURN  (ALT-R): Return to the long-format-catalogue window.


                UPLOADING FILES TO A FORUM LIBRARY

Selecting FORUMS > UPLOAD FILE(S) opens a full-screen window titled
FORUM UPLOAD INFORMATION. As with other FORUMS menu items, this
selection is not accessible until you've picked a forum from the
AVAILABLE FORUMS window. The upload-dialogue's data fields are:

FILE NAME

  Enter the name (including path information, if necessary) of the
  file as it now exists on your system. Press F2 for a standard OzCIS
  file pick-list for the current directory. If you use the pick-list
  to select a file in some other directory or on another disk drive,
  OzCIS inserts the full path information for the file into the FILE
  NAME field.

  Or type a file name containing wildcards and press ENTER (not F2) to
  bring up a pick-list showing only files matching the name-criteria
  you typed. (Pressing F2 alone is equivalent to typing "*.*" into the
  FILE NAME field and then pressing ENTER.)




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 119




  If OzCIS cannot find the file whose name you've entered here, it
  displays an error-alert the moment you move the cursor out of the
  FILE NAME field.

  Enter only ONE file name into this field.

CIS NAME

  Files stored in libraries have "base" names of no more than 6
  characters. Shorten the name to 6 characters, if necessary. (If you
  don't, CIS will truncate the name on its own.) Do NOT include path
  information of any kind in this field.

LIBRARY

  If you know the number of the library where you want the file
  stored, enter it here. Or press F2 for a pick-list of the forum's
  libraries (if you have a .SEC file for this forum).

FILE TYPE

  CIS libraries contain a number of different file types; your upload
  must describe the "type" correctly. With the cursor in the FILE TYPE
  field, toggle among the available "types" by pressing the space bar:

  BINARY (the default)  Archive files, like those created by PKZIP or
  LHA on the PC, or Compact Pro on the Mac, are binary files. So are
  executable programs or text files saved in a word-processor's
  proprietary file format. Binary files are 8-bit data and are not to
  be changed in any way. This kind of file can only be downloaded; it
  cannot be viewed on-line.

  ASCII   A plain-text file, which can be viewed on-line via CIS'
  "read" command. Files created by most text editors - PC-Write,
  Qedit, and the like - are plain-text files. Those created by most
  word processors (Microsoft Word, WordPerfect, and so on) are not
  plain-text files unless you save the files using the programs'
  "save unformatted" options.

  NOTE:  Uploading a binary file but telling CIS it is "ASCII" will
         trash the contents of the file, making it useless.

  GIF   This type should always be used for GIF (Graphics Interchange
  Format) image files and ONLY for GIF files. A GIF image file can be
  viewed on-line by OzCIS and other CIS navigation programs. If you
  upload a GIF file as "Binary," it will not be viewable on-line even
  if the file's extension is .GIF.

  RLE   Like GIF, but used for the older RLE graphics format. RLE has
  all but disappeared from CIS. Supported only for compatibility.




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 120




  NAPLPS   Like GIF and RLE, but for the old NAPLPS (North American
  Line Print Standard) format. This format has extremely limited use
  on CIS, but is supported here for compatibility. Used only for
  NAPLPS files of the proper format.

  IMAGE   A special type used only by some non-PC-compatible computers
  such as the small Commodores and Ataris. Most people will never use
  this kind of file, but "Image" is also provided for compatibility.
  Never select "Image" when you upload files to be used on either an
  IBM-compatible or Macintosh computer.

KEYWORDS

  These are words used in indexing and during a search for files
  matching a specific class or category. They're the words used when
  you give an on-line command like "BRO KEY: word". Keywords should be
  typed as single words, each separated from the next by a single
  space. You can type up to 10 keywords for each file. The maximum
  number of characters in this whole field is 80; no one keyword can
  be longer than 17 characters.

  Once sent to CompuServe, keywords are fed thru a "Stoplist" filter
  that removes common words such as "I", "AN", "OR", "MY", and so on.
  Contractions or hyphenated words ("CAN'T", "VER-1" etc.) are
  stripped of punctuation and treated as two separate words. Many
  punctuation marks are disallowed altogether. OzCIS understands this
  and strips the line for you, if necessary.

TITLE

  A short description - 49 characters or less. The "title" is the one-
  line description you see in an OzCIS short-format catalogue (or when
  you give the command "dir" at a CIS library "!" prompt).

DESCRIPTION

  A free-form description of the file, up to 549 characters long - the
  information shown when you ask OzCIS to display a file's abstract
  (the same information displayed on-line when you give a "browse"
  command at a CIS library "!" prompt).

  The editing area supports a part of the General Editor's command
  set, including its cursor movement keys, block and clipboard
  commands, commands for changing case and searching, and some others.
  Experiment a bit here (there are no menus).

  The status-line in the editing window shows how many characters
  you've entered. If you reach the limit, OzCIS displays an error-
  alert. After you reach the limit, you can't type any more past
  the last character unless you first erase some other text within
  the window.



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 121




  Before you put the cursor into the editing window, the UP and DOWN
  keys move the cursor among data fields in the dialogue. Once the
  cursor is in the editing window, use ESC to move it out of the
  window into another field of the dialogue.

  IMPORTANT: NEVER place control or "highbit" characters into file
             titles, keywords, or descriptions.


When you're done entering file-upload information, press F10 to
confirm it and close the dialogue. Or press ESC to close the dialogue
without saving the information. OzCIS will not allow you to close the
dialogue and save the information until you've filled in all of the
data fields.

CAUTION:  Pressing ESC will close the dialogue immediately - without any
          query from OzCIS. Keep a light touch on the ESC key when you
          use it to move the cursor out of the DESCRIPTION window!

Closing the dialogue and confirming the information creates a file (in
the forum's subdirectory) whose base name is the first 8 characters of
the forum's "GO" name and whose extension is .UL (like: DTPFORUM.UL).
If there is now an .UL file, OzCIS appends the new information to it.

OzCIS reads the contents of the .UL file and makes the uploads to the
forum at the end of a 1st or 2nd pass, then deletes the .UL file from
the forum's subdirectory.


        REVIEWING OR ALTERING UPLOAD INFORMATION

This release of OzCIS does not have a VIEW UPLOADS menu similar
to the VIEW DOWNLOADS menu selection in a short- or long-format
catalogue window. But there is a way to review pending uploads and
change information within the .UL file.

Select FORUMS > CUSTOM SERVICES > EDIT ONLINE PROCESS FILE. An ONLINE
FILES window opens at the right of the screen. Select "Pending Uploads
(.UL)".

The General Editor immediately finds and opens the .UL file for the
selected forum. If there isn't any such file, OzCIS displays an error
message saying there are no pending uploads. Here is how the
information for a file upload appears in the .UL file:










  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 122




  ;6;ASCII;DTPREV.TXT;D:\TEXT\DTPREVUE.TXT
  This text file contains a summary of various trade magazines' reviews
  of a number of DTP programs for use under Windows and on the Mac.
  Subjects covered include user interface features, typographic
  features, graphics handling capabilities, trapping functions, system
  requirements, and list prices.

  *EOM*
  DTP PROGRAMS DESCRIPTION REVIEW DOS MAC WINDOWS COMPARISON
  Overview of current PC/Windows/Mac DTP programs

(The first-line indents, above, are used to make the information stand
out from other text here but are not present in the .UL file itself.)

If you edit this file, make very sure not to alter its overall format.
In particular, do not change the positions of semicolons in the first
line, nor delete or add any semicolons. The first line contains:

Library number (in this case, "6"); the file type ("ASCII"); the name
to be used on CIS ("DTPREV.TXT"); the file's name and path on your
system ("D;\TEXT\DTPREVUE.TXT"); and the extended description
(abstract) follows. If you must edit the abstract, be careful not to
increase its length past the maximum of 549 chraracters. An end-of-
message flag ("EOM") follows. Make sure to LEAVE IT ON A LINE BY
ITSELF.

There are two asterisks in the line containing "EOM," above. In
the .UL itself file there will not be asterisks, but rather two
"highbit" (box-drawing) characters required by OzCIS. (We have removed
the highbit characters from the documentation, figuring that some
people's dot-matrix or letter-quality printers cannot reproduce them.)
DO NOT ALTER OR REMOVE THE HIGHBIT CHARACTERS.

If you accidentally delete one of them: The character to the immediate
left of "EOM" has the decimal value of 204; the character to the
immediate right of "EOM" has the decimal value of 185. Most text
editors - and OzCIS' General Editor as well - support the entry of
highbit characters via the ALT-plus-numeric-keypad method. I.e., ALT-
204 would print the highbit character placed to the left of "EOM".

The next line (text in all caps) contains the keywords. The final
line is the short description.

The next block of file information, if any, in an .UL file should be
separated from the previous block by a single blank line.

There is no quick "delete .UL file" option in this release of OzCIS.
If you want to delete an .UL file entirely, you must do so at the DOS
prompt.





  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 123




On the other hand, if you would rather not exit from OzCIS to kill all
pending uploads, use the General Editor to remove all of the lines in
the .UL file, leaving an empty .UL file on disk. OzCIS, finding
nothing in the file, will ignore it.

                            # # #
















































  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 124


```
{% endraw %}

## FORUMS.DOC

{% raw %}
```




                File: FORUMS.DOC -- OZCIS AND COMPUSERVE FORUMS

                INTRODUCTION

When you work with forum messages, you use the same editors discussed
in the CISMail chapter. The editor commands for forum messages are
virtually identical to those used when you're working with CISMail
messages. On the other hand, configuration, and the methods of working
with forums, are much different from those for CISMail.

Uploading and downloading binary files will not be covered in this
section of the documentation. See FILES.DOC for more information.



                     WHAT'S A FORUM?

Forums are special areas of CIS for topical discussions and for
exchanges of files often relating to those discussions. A forum might
focus on a manufacturer's products, a kind of computer or software, or
some other topic of interest to a specific group of people. Some
forums are general, like the ISSUES forum, where there are discussions
place on everything from the day's news events to UFOs; some forums
are specific, like the DATASTORM forum, where that company's products
are supported. Some forums are only for discussions and have very few
files available for download. Others have relatively few messages but
lots of files in their libraries.

All forums have a common user interface. A forum has one or more areas
("sections") where messages are stored and exchanged, and usually one
or more areas ("libraries") that contain files available for
downloading. Most forums also have conference rooms, facilities for
members to chat together online. From time to time most forums post a
set of announcements that provide up-to-date information on news of
the forum, a "sysop roster" where the names and PPNs of the sysops are
listed, perhaps a forum conference schedule, and other information.


                     DEFINITION OF TERMS

Here are some terms you've seen before and a couple of new ones:

CATALOGUE: Conventional CIS term - the file generated by a long scan.

DOWNLOAD: Receive a file from CIS and store it on your computer.

LIBRARY: The area of a forum where binary files are stored.

LONG SCAN: The part of a "pass" that gets extensive file information
(more than you get in a short scan) - each file description may be
several lines long.



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 75




MERGE: Process an uploaded file, making it available for others to
download. Uploaded files go into a special holding area; the sysops
are responsible for checking out the uploads (making sure they match
the forum's topic, doen't contain viruses, and so on.) before making
them available to forum members. Files checked and approved by sysops
are then "merged" into the library.

NEW MESSAGES: As-yet-unread messages from anyone in the forum to
anyone else in the forum.

PENDING MESSAGES (or PENDING UPLOADS): Outgoing forum messages (or
files for uploading) you have not yet sent to the forum.

QUICK SCAN: Retrieving a list of forum message headers (headers only).
The result is a list of "quickscan headers"; you select (tag) them to
tell OzCIS which messages to retrieve in their entirety during its
next pass to the forum.

SCROLL: Each forum has a fixed number of message "slots." Whenever a
new message is posted to a forum, the oldest message "falls out" and
is discarded, whether or not it has been received by its addressee.
Old messages' "falling out" is called also "scrolling"; a message that
has been discarded in this manner is said to have "scrolled off."

SCROLL RATE: How long it takes from the time a message is posted to
the time it scrolls off. The scroll rate is a function of how many
message slots the forum has been given and how busy the forum is;
some busy forums have average scroll rates of only 2 to 3 days, while
others' rates may be as long as two weeks. The typical scroll rate is
around a week.

SECTION: The part of a forum in which specific topics are discussed.
Sections have names, but CIS navigation programs usually refer to them
by number.

SHORT SCAN: The part of a forum pass that gets brief (single-line)
information about files in a library.

SLOT: Each message occupies a "slot" in a forum's message database.

SYSOPS: The people in charge of a forum.

THREAD: A series of messages having the same subject matter (same
subject-line in the message headers).

UPLOAD: Transmit a file from your computer to CIS.

WAITING MESSAGES: Conventional CIS terminology: as-yet-unread forum
messages addressed specifically TO YOU.





  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 76




                         "PASSES"

Virtually all CIS navigation programs work on a "1st pass / 2nd pass"
basis: You log onto CIS and make a 1st pass for forum messages. This
includes retrieving forum messages written specifically to you; and/or
retrieving ALL new mail; and/or retrieving only "quickscan" headers.

Then comes the 2nd pass: Having looked over quickscan headers, you
select (tag) the messages that look interesting and log back onto CIS,
retrieving tagged messages in their entirety. Normally in a 2nd pass
you also transmit any outbound mail you're writing to the forum. The
2nd pass might also involve uploading or downloading binary files to
one or more forum libraries and retrieving the text of one or more
announcements.

The differences among 1st- and 2nd-pass options in many CIS navigators
are quite distinct. OzCIS blurs this distinction by allowing you a
number of choices of what to do during a 1st or 2nd pass.

In general: During a 1st pass, OzCIS stops at any forums you have
marked "active." It retrieves messages written to you; or retrieves
quickscan headers; or retrieves ALL messages you haven't read yet. You
can toggle these options on or off. You can also tell OzCIS to process
pending (out-going)  forum messages or binary file uploads or
downloads during a 1st pass.

During a 2nd pass, OzCIS stops only at forums for which there is
pending work: Replies you're making to forum messages, new messages
you're posting, or files to upload and download. However, there are a
few operations (like getting "waiting" mail) that you can also have
OzCIS do during a 2nd pass.


               FORUM CONFIGURATION

You'll recall the suggestion in INTRO.DOC that you have OzCIS make a
full profile configuration pass for one or more Host entries. A good
reason to do so, even if your CIS options were already set before you
started using OzCIS, is that the config pass retrieves an up-to-date
list of forums - a description of each, along with its associated "GO"
name. The forum information is stored in a file called OZCIS.FN in the
main OzCIS directory. Use of this file will be explained shortly.

You must join a forum before you can participate in it. Joining is
usually a quick process that puts your name into a list of forum
members. OzCIS can automatically join a forum for you if you're not
already a member.

After initial forum setup and before doing any work in the forum, you
should have OzCIS do a forum configuration pass - a short, automated
operation during which OzCIS retrieves up-to-date information about



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 77




the forum's section names and numbers. This information will be
important later as you work with the forum's sections and libraries.


        1ST CONFIGURATION STEP -- SELECTING A FORUM

From the main screen, select CONFIGURATION > FORUMS MAINTENANCE. An
AVAILABLE FORUMS windows opens at the upper-left of the screen (it
looks much like the AVAILABLE HOSTS window you've already seen). If
you have not unpacked the FORUMS.DB file from the OzCIS distribution
archive OZCIS3.EXE, OzCIS will first display an alert reading:

        ERROR 2 OPENING FORUMS FILE

and the AVAILABLE FORUMS window will open with "**NONE**" in it.
Otherwise, the name of the sample forum in the .DB file will appear in
the window.

The main menu bar items are temporarily replaced by EDIT, DELETE, ADD,
SORT, and QUIT. We've already discussed using EDIT, DELETE, and QUIT
with respect to Host names; the method of selecting these commands is
identical when you're working with forums. The SORT command will be
discussed later in this file.

Select ADD. A small dialogue called EDIT FORUM ENTRY appears at the
bottom of the screen. This is one of several OzCIS dialogues that
contain hints on available commands in the window border and hints (at
the bottom of the screen) on the purposes of data fields. The
following representation of the dialogue has all of the box-drawing
characters removed; the "[o]" represent's the dialogue's "close
without saving changes" check-box; "[x]" represents the dialogue's
"close and save changes" check-box.

.-[o]-[x]----------- Edit Forum Entry --------------------.
| Forum Title    Desktop Publishing                       |
| "GO" Command   DTPFORUM                                 |
| Service prefix CIS                                      |
| Files Path     C:\OZCIS\DTPFORUM                        |
| User Name      Aaron Aardvark                           |
| Remove duplicate messages when reading? Y               |
| Autosave Outbox messages when sending?  Always          |
| Set Options    <Enter>                                  |
`------- <F2> list, <F10> accepts, <Esc> abandons --------'

The dialogue's data fields:

FORUM TITLE  (initially blank)

  Type a description of the forum here; it doesn't have to be the
  forum's "GO" word. For example, if you are configuring DTPFORUM,
  you could type "Desktop Publishing" here.



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 78




  Do you need to see a list of available forums? If you had OzCIS make
  a full profile configuration pass, you now have a file called
  OZCIS.FN in the OzCIS directory. In that case, "F2 list" appears in
  the window border when the cursor is in the FORUM TITLE field. (If
  there is no .FN file or you've moved it to a place OzCIS can't find
  it, "F2 list" will not appear at all.) Press F2 to pop up a pick-
  list (COMPUSERVE FORUM NAMES) showing all forums listed in
  the OZCIS.FN file.

  The pick-list contains a brief description of each forum in the left
  column and the forum's "GO" word in the right column. Select a forum
  name from the list; the pick-list window closes. OzCIS then puts the
  description - the text in the left column - into the FORUM TITLE
  field of the dialogue and the "GO" word from the right column into
  the GO COMMAND field. You can change the FORUM NAME field if you
  prefer another description, but don't alter the "GO" word.

"GO" COMMAND  (initially blank)

  Enter the "GO" word required to log onto the forum. Again, if
  OZCIS.FN is in the OzCIS directory, you can press F2 to open the
  pick-list of current forums and select the information that way.

SERVICE PREFIX  (defaults to "CIS")

  CompuServe is not just one service, but rather a collection of
  services accessible through the general CIS network. CompuServe
  Information Service (CIS) is the one with which most people are
  familar; others include CompuServe Business Services and ZiffNet
  (operated in conjunction with Ziff-Davis Publishing, publishers of
  PC MAGAZINE, COMPUTER SHOPPER, and several other publications.)

  When you join CompuServe you do so via one of these services, which
  is then your "home" service. If you joined CIS through the usual
  channels (sign-up kit purchased at a software store, membership
  arranged by calling CIS directly, and so on), CIS is your "home." If
  you joined by using the information provided in one of the Ziff
  publications, ZiffNet is your "home." Most of these services are
  interconnected via CompuServe's network, so you can call one local
  number for access no matter which service is "home." A few are
  "private" - specialty services operated under contract between
  CompuServe and other corporations, and not accessible to the general
  member population.

  Your "home" is the only place to go for certain CompuServe services.
  Example: Each service has its own private mail area, and you can get
  access to it only via your home service; a user whose "home" is CIS
  cannot use the private mail facility of ZiffNet. No matter what
  service you are using at a given moment, a "GO MAIL" command will
  always take you to your home service. (But most other ZiffNet areas
  are accessible by CIS members and vice versa.)



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 79




  In some cases, the services have forums or other areas that are
  named the same. The SERVICE PREFIX field tells the network on which
  service the forum or other area you want resides. This eliminates
  ambiguities and facilitates switching from one service to another.

  The majority of users will have CIS as their home service. OzCIS
  therefore defaults to "CIS" as the Service Prefix. If the forum you
  are configuring is on a different service, make sure you provide the
  correct prefix. For ZiffNet, use "ZNT." To get the right initials
  for other services, consult your CIS sign-up agreement.

FILES PATH  (initially blank)

  Where do you want to store incoming and outgoing message files
  and/or binary files downloaded from this forum? We suggest you
  create special subdirectories for forums. For instance, if you're
  configuring DTPFORUM and your main OzCIS directory is C:\OZCIS,
  you might type "C:\OZCIS\DTPFORUM" into the FILES PATH field.

  There's no need to create the subdirectory BEFORE you start the
  forum configuration - more about that shortly.

  Leaving the directory field blank tells OzCIS to store ALL forum
  files in the main OzCIS directory itself (we don't recommend this;
  you'll end up with far too many files for comfort in the OzCIS
  directory).

USER NAME  (initially blank)

  The name you'll use for yourself when you post messages to this
  forum. If you'd rather use a name other than the one you gave when
  you did the Host configurations, type the new name into this field.
  If you leave the field blank, OzCIS uses the name you entered for
  yourself in the name-field of the Host configuration dialogues.

  NOTE:  Most forums do not permit handles in lieu of real names.
         Check with sysops before using a handle in their forums.

In the list of fields, below, OzCIS' default selection is shown in
parentheses; other options are shown in square brackets.

REMOVE DUPLICATE MESSAGES WHEN READING?  (Y)     [ N ]

  It's possible at times you'll see the same messages twice when
  reading forum messages. It's likely to happen if you have configured
  OzCIS to retrieve all "waiting" messages in a forum as well as read
  other new messages (those options are explained below). Answering
  "Y" to this question forces OzCIS to suppress the display of
  duplicate messages. (The duplicates will not be deleted from the
  file containing the forum messages.)




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 80




AUTOSAVE OUTBOX MESSAGES WHEN SENDING?  (NEVER)    [ ALWAYS  ASK ]

  Determines whether and/or how OzCIS saves outgoing forum messages.
  If "NEVER," outgoing messages are never saved. If "ALWAYS," the
  current group of outbound forum messages are saved to a file whose
  name is the first 8 characters of the forum's "GO" word, with an
  .OBS extension ("outbox save"). If "ASK," OzCIS asks you to decide
  at the time whether to save the messages.

SET OPTIONS

  "ENTER" appears in this field, meaning that the only option here
  is to press ENTER. Doing so brings up the main forum configuration
  dialogue, headed FORUM AUTOPASS PRIMARY OPTIONS.


        2ND CONFIGURATION STEP -- AUTOMATIC CONFIGURATION (ON-LINE)

Don't faint when the configuration dialogue opens. We'll explain the
options by and by.

For now, just notice that all but two of the "Y/N" questions are
answered "N". The two answered "Y" are in the bottom part of the
window: UPDATE SECTION NAMES LIST and CONFIGURE FORUM OPTIONS. They
are all you need for a forum configuration pass. You'll do the config
pass, then complete the forum configuation afterward.

Close the configuration dialogue, then close the EDIT FORUM ENTRY
dialogue, saving changes.

Just then, if the subdirectory you specified a moment ago doesn't
exist, OzCIS asks if you want it created. Answer YES. If you answer
NO, the dialogue won't close. Either let OzCIS create the directory or
else supply the name of an existing directory.


From the main screen, drop down the FORUMS menu. This also opens an
AVAILABLE FORUMS window (which will always be in view when you are
working in the FORUMS menu).

Left-click the name of your newly-added forum. Alternative: Press
ENTER. Because the cursor bar is initially on SELECT FORUM, pressing
ENTER activates the AVAILABLE FORUMS window). Move the cursor bar to
the name of the new forum and press ENTER.

When the AVAILABLE FORUMS window is accessible, its border will
contain hints on available commands. When the window is not
accessible, the border will not contain any hints or other text.






  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 81




When you've made your selection, the forum's name appears at the top
of the screen, and other FORUMS menu items are now accessible. They
are never accessible until a forum name is selected.

NOTE:  If you drive OzCIS from the keyboard, there's a shortcut for
       forum selection when the cursor bar is not on SELECT FORUM:
       Pressing the TAB key puts the cursor bar into the AVAILABLE
       FORUMS window right away. Move the cursor bar to the name of
       the forum you want and press ENTER. This gets the job done with
       the fewest keystrokes and, when you're done, leaves the cursor
       bar on the present menu item.


Now select FORUMS > 2ND PASS IN THIS FORUM.

OzCIS goes into terminal mode and dials CIS. Any CISMail to send or
retrieve is processed first. Then OzCIS logs onto the forum you're
configuring, joins it, sets various forum parameters for you,
retrieves current section and library names and numbers, logs off, and
returns to its main screen. (If you are already a member of the forum,
OzCIS skips the "join" step.)

NOTE:  Once OzCIS goes into terminal mode, you can press ESC to abort
       dialing until the word "ESC" has disappeared from the window in
       the middle of the terminal-mode screen.

Suppose the forum you joined is DTPFORUM. When the config pass is
over, there will be a file called DTPFORUM.SEC in the directory you
specified during the first forum configuration step. The .SEC file
contains a list of the forum's section and library names. Don't move
it from the directory, nor rename it; you'll be needing it later.


        YOU CAN'T "JOIN" A GATEWAY

Sometimes you see a forum name in the COMPUSERVE FORUM NAMES pick-list
that turns out not to be a forum at all, but rather a "gateway" - a
menu that leads to other forums. The "gateway" has a "GO" word, but
trying to auto-join or auto-configure a "gateway" doesn't work. OzCIS
cannot join forums via these gateways.

If you inadvertently pick such a pseudo-forum, you'll see OzCIS try
to log onto it during the configuration pass, then come to a halt.
You'll probably be left at a CIS "!" prompt. OzCIS won't be able to
complete the configuraton pass.

Press ESC - ONLY ONE TIME. A prompt appears asking if you want to
abort immediately, not abort, or go into on-line-terminal mode. Press
"T" for terminal mode. Then select EXIT from the menu at the top of
the screen. The EXIT command does a proper disconnection from CIS. If




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 82




you choose to abort instead (by answering "Y" to the prompt rather
than "T"), OzCIS drops carrier.

NOTE:  Logging off CIS by dropping carrier is not a good idea; doing so
       during mail processing can confuse CIS. When you drop carrier,
       the CIS "meter" continues running. However, it will usually
       stop running about 30 seconds after the carrier drop.

       At one time you would have needed to log immediately back onto
       CIS, then log off again, to reset the "meter." This is no
       longer necessary when you've dropped carrier.


        3RD CONFIGURATION STEP -- COMPLETING FORUM CONFIGURATION

Now that the auto-configuration pass is done, re-open the forum
configuration dialogue and finish the setup process.

From the main screen, pull down the FORUMS menu and select the forum
to be configured, if it is not already selected.

Select FORUMS > PASS OPTION SETTINGS. The large forum configuration
dialogue opens. With some of its fields filled in, it might look
like this:

.-[o]-[x]------- AutoPass Primary Options for DTPFORUM ----------------.
| Include this forum in 1st Pass? Y                                    |
| Read NEW Messages                                                    |
| QuickScan Headers 1,2,6,7,12,13,14,17                                |
| Reset HIGH Message Number after QuickScans? Y                        |
| Purge old messages by Always                          Save purge? N  |
|---------------------- Other 1st-Pass Options ------------------------|
| Read WAITING messages? Y                   Send PENDING messages? N  |
| Get pending DOWNLOADS? N                   Send pending UPLOADS?  N  |
| Permanent script                        Read WAITING on 2nd Pass? Y  |
|--------------------- 1st/2nd One-Pass Options -----------------------|
| New HIGH Msg Num                                                     |
| Update sections names list? N            Configure forum options? N  |
| Scan Libs (Long)  N Sec 5,12                              Update? Y  |
| Scan Libs (Short) N Sec 5,6,12,17                                    |
| Read announcements                                                   |
| New Default Sections                                                 |
| Temporary script                                                     |
`------------------- <F10> accepts, <Esc> abandons --------------------'

It is divided into three sections:

The top part is AUTOPASS PRIMARY OPTIONS. It contains options relevant
ONLY to a 1st pass. The middle part (OTHER 1ST-PASS OPTIONS) sets
options for work to be performed during either a 1st pass or a 2nd




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 83




pass. The lower part (1ST/2ND ONE-PASS OPTIONS) sets other options for
work to be done during either kind of pass.

As you work in this dialogue, keep your eye on the window border and
the bottom screen line for helpful hints.

In the list of fields, below, OzCIS' default selection is shown in
parentheses; other options are shown in square brackets.


        FORUM AUTOPASS PRIMARY OPTIONS
(Options controlling basic 1st-pass processing)

INCLUDE THIS FORUM IN 1ST PASS?  (Y)     [ N ]

  If "Y", the forum will be processed any time you request a 1st pass.
  If "N", the forum will be skipped.

  When you select "Y", OzCIS considers the forum "active"; its name
  will be marked with a "*" character in the AVAILABLE FORUMS window.

READ NEW MESSAGES  (blank by default)

  (That's ALL messages you haven't read yet.) Here you enter the names
  of forum sections from which OzCIS will get new messages. Press F2
  to open a pick-list showing sections by number and name. If you want
  only one section, highlight it with the cursor bar and press ENTER
  (or left-click on it).

  Each time you select from the pick-list that way, any information
  now in the field will be replaced with a single section number. To
  select MORE than one number from the pick-list, move the cursor bar
  from one entry to another, selecting by pressing the space bar. A
  check-mark will appear next to each selected section. Press F10 or
  ENTER to confirm, closing the window. This puts multiple section
  numbers into the field.

  Or type the numbers yourself, separating them by commas (thus:
  1,2,4,6,12). Use a hyphen to indicate a range of sections - like:
  1,3,4-7,10 for sections 1 and 3, 4 through/including 7, and 10. Do
  not type spaces within the string of numbers and commas. To select
  all of the forum's section numbers, type the word "all" into the
  field or select "ALL" from the pick-list.

  NOTE:  The pick-list is available only after OzCIS makes an auto-
         config pass for this forum and writes the .SEC file to disk.

QUICKSCAN HEADERS   (blank)

  During a 1st pass, shall OzCIS retrieve subject-matter header lines
  for you to review off-line? If so, type the desired section numbers



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 84




  into the field, separated by commas. Press F2 to open a pick-list of
  section names and numbers if the .SEC file is now in the forum's
  subdirectory. Enter section numbers, separated by commas and/or
  hyphens, as discussed just above.

RESET HIGH MESSAGE NUMBER AFTER QUICKSCANS?   (N)     [ Y ]

  Shall OzCIS reset your "high message" (last-read) number for the
  forum after getting a list of message headers? If "Y" the quickscan
  AFTER that will begin at the next highest (unread) message number.
  We recommend you set this option to "Y," especially if you do NOT
  have OzCIS read "new" messages (via the "read new" option, discussed
  above). "Read new" automatically re-sets the high message number;
  others kinds of message retrieval do not.

PURGE OLD MESSAGES BY  (Always)     [ Never   Sessions   Days ]

  Toggle the settings by pressing the space bar. The options mean the
  same as they do in OzCIS' general configuration dialogue. As before,
  selecting SESSIONS or DAYS opens a PURGE COUNTER field within the
  dialogue; use that field to chose the number of sessions (or days'
  worth) of mail to retain.

  The fewer "sessions" you keep on hand, the faster OzCIS indexes the
  message file each time you start reading forum messages.

  NOTE:  If you use the "Always" setting, a 1st pass will replace all
         old messages with the new ones. However, a 2nd pass will ADD
         new messages to the old ones. Example: You do a 1st pass to a
         forum and get waiting message and quickscan headers. This
         removes all old messages. You tag quickscan headers and make
         a 2nd pass soon afterward. Even if the "PURGE" field is set
         to "Always," the 2nd pass will APPEND the new messages to the
         ones you just retrieved during the 1st pass.

SAVE PURGE? (N)     [ Y ]

  "Y" tells OzCIS to save purged messages into a file. If you were
  configuring DTPFORUM, the purge file's name would be DTPFORUM.PRG. A
  .PRG file can be read (and messages within it replied-to) via
  the FORUMS > MESSAGES IN FOLDERS command.


        OTHER 1ST-PASS OPTIONS SECTION
(Options for work performed during either a 1st pass or 2nd pass, and
performed EVERY time you make a 1st or 2nd pass.)

READ WAITING MESSAGES? (N)     [ Y ]

  If "Y": During a 1st pass OzCIS will always download new forum
  messages addressed specifically TO YOU before it does anything else.



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 85




  If "N": OzCIS will take no extra steps to get messages addressed to
  you. Messages to you will be retrieved from a section for which you
  have the "read new" option set. "Waiting" messages in OTHER sections
  will be ignored.

SEND PENDING MESSAGES?  (N)     [ Y ]

  If "Y": OzCIS will send any outgoing messages FROM YOU during a 1st
  pass. If "N", it will send them only during a 2nd pass.

GET PENDING DOWNLOADS?  (N)     [ Y ]

  If "Y": during a 1st pass OzCIS will download any binary files
  you've requested; if "N": it will do so only during a 2nd pass.

SEND PENDING UPLOADS?  (N)     [ Y ]

  If "Y": during a 1st pass OzCIS will upload any binary files you're
  sending to the forum; if "N": it will do so only during a 2nd pass.

PERMANENT SCRIPT  (blank)

  Enter the name (including path information, if need be) of an OzCIS
  script file that will be executed during EVERY 1st pass to this
  forum. The script is always executed when OzCIS has completed all
  other normal work for this forum. Scripts are discussed in detail in
  TERMINAL.DOC.

READ WAITING ON 2ND PASS?  (N)     [ Y ]

  If "Y": OzCIS will read any waiting messages during a 2nd pass in
  the forum - not only during a 1st pass. A "Y" setting in this field
  tells OzCIS to retrieve waiting messages even if you have the 1st-
  pass "retrieve waiting?" field (see above) set to "N".


        "1ST/2ND ONE-PASS OPTIONS" SECTION
(Options controlling work performed during either a 1st or 2nd pass,
but performed only ONCE; to have the work done again, you must re-
enter the configuration dialogue and re-enable the options.)

NEW HIGH MSG NUM  (blank)

  This is an alternative to having OzCIS set the "high message" number
  following a quickscan. Here, enter the message number to become the
  "last-read" message. OzCIS automatically blanks out this field
  following the pass. Use the field if you find you're seeing mail
  several times that you've already read one or more times and if you
  HAVE told OzCIS to reset the "high message" number following
  quickscans. CIS' own software has a bug that sometimes causes a




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 86




  "reset high number" command not to work properly. This is a way of
  defeating the bug.

UPDATE SECTION NAMES LIST?  (N)     [ Y ]

  If "Y": OzCIS updates all section and library information for the
  forum, creating a new .SEC file in the forum's directory (e.g.,
  DTPFORUM.SEC if you're working in DTPFORUM). The update will be
  done during either a 1st or 2nd pass. As soon as the pass is over,
  the "Y" is automatically reset to "N".

CONFIGURE FORUM OPTIONS?  (N)     [ Y ]

  If "Y": OzCIS will do an auto-configuration pass in addition to any
  other work performed during the pass. The auto-config takes place
  during either a 1st or 2nd pass. When the configuration is done, the
  "Y" is automatically reset to "N".

SCAN LIBS (LONG)  (blank)

  Enter library numbers into the data field just as you entered
  section numbers into the READ NEW MESSAGES field (and others - see
  above). Press F2 to see a list of libraries for the forum (if you
  made a configuration pass and OzCIS wrote a .SEC file for this
  forum).  NOTE: Unlike message section number lines, you CANNOT use
  the hyphen to denote sequential library numbers.  In other words,
  this is legal: "1,2,3,4,6,8" and this is not: "1-4,6,8".

  Note the "Y/N" field to the left of the section-numbers field. The
  default setting is "N". When you're ready to do a scan, change the
  "N" to "Y", then close the configuration dialogue, saving changes.
  When OzCIS has finished the scan, the "Y" will be automatically
  reset to "N".

  Make sure to enter library numbers, NOT SECTION NUMBERS, into the
  field - and the same with the short-scan field (see below).

UPDATE?  (N)     [ Y ]

  A "long scan" writes a file with the extension .L?? into the forum's
  subdirectory (where "??" is a a forum library's number). Library
  contents change all the time. Set this option to "Y" to have OzCIS
  perform a long scan in selected libraries but retrieve ONLY new or
  changed information. Using "update" rather than scanning from
  scratch can save much time on-line, especially in large libraries.

  Updating writes a file with the extension .U?? into the forum's
  subdirectory - with "??" again being a specific library number.
  Later, when you view the long-scan information, OzCIS merges the
  contents of the .U?? file into its associated .L?? file, then
  deletes the .U?? file.



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 87




SCAN LIBS (SHORT)  (blank)

  Enter library numbers into this field if you want OzCIS to make a
  "short scan" of selected forum libraries.

  As with the SCAN LIBS (LONG) option, this one also has a "Y/N"
  field, set to "N" by default. As with the other one, change the "N"
  to "Y" when you're ready to do a short-format scan and tell OzCIS to
  save changes in the dialogue. When the scan is done, OzCIS
  automatically resets the "Y" to "N" again.

READ ANNOUNCEMENTS  (blank)

  Forums often have announcements about new products, services, files,
  real-time conferences on specific topics, and so on. Press F2 to see
  a list of possible announcement topics. Enter the desired
  announcements into the field, again separating the numbers by
  commas. Select multiple announcement numbers with the space bar,
  then press F10 or ENTER to have OzCIS automatically type the numbers
  into the field. Do NOT enter SECTION or LIBRARY numbers here.

  Announcement names and numbers are the same in virtually all forums,
  though it is up to sysops whether all possible announcement numbers
  are used at all times. If an announcement isn't available at a given
  moment, OzCIS' attempting to read it won't have any ill effect.

  When the pass is completed, OzCIS writes files to disk containing
  the text of the announcements. If the forum were DTPFORUM and you'd
  asked for announcements 2, 3, and 5, your DTPFORUM subdirectory
  would now contain files named DTPFORUM.AN2, DTPFORUM.AN3, and
  DTPFORUM.AN5.

  NOTE:  There is no reader within OzCIS that automatically opens
         the announcement files. But you can use the General Editor
         to read them; from the main screen, select WINDOWS > EDITOR
         and then specify the path and name for an announcement file.

  After the pass that retrieves the announcements, the READ
  ANNOUNCEMENTS field is automatically blanked out.

NEW DEFAULT SECTIONS  (blank)

  CIS stores a list of sections you normally visit - set to "ALL" when
  you join a forum. OzCIS' own work in forum sections does not change
  the default. Entering section numbers here DOES change the default.
  Restricting default sections can save you a bit of time on-line. You
  can always enter new information into the field later to alter the
  default setting.






  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 88




TEMPORARY SCRIPT  (blank)

  Here you can specify the name of an OzCIS script file to be executed
  only ONCE - the next time OzCIS enters the forum. The temporary
  script takes precedence - one time only - over any other script you
  normally run in the forum (see information about the PERMANENT
  SCRIPT field, above). The script is executed when OzCIS has finished
  all other work in the forum. After the end of the pass during which
  the temporary script is used, the TEMPORARY SCRIPT field is
  automatically blanked out. For more information on OzCIS scripts,
  see the documentation file TERMINAL.DOC.


To save the settings in the forum configuration dialogue, press F10.
Or press ESC to quit without saving the settings.


  CONFIGURATION VIA THE FORUMS-MENU, VERSUS THE CONFIGURATION-MENU

The dialogue you open via FORUMS > PASS OPTIONS SETTINGS is a subset
of the full configuration routine. It is usually all you need once you
have done the initial forum setup. But if you ever need to change,
say, subdirectory information, do so via the CONFIGURATION menu.
Select CONFIGURATION > FORUMS MAINTENANCE. Then selecting EDIT brings
up the first config dialogue you saw; then you can change directory
information or the other options not available via FORUMS > PASS
OPTIONS SETTINGS.


        WHAT ARE THE RIGHT PASS OPTION SETTINGS?

Answer: There are no "right" options. What you tell OzCIS to do in the
configuration dialogue is entirely dependent on your needs with
respect to forum messages and files.

Many people use a 1st pass only to get waiting messages and quickscan
headers. They read and reply to the waiting mail off-line and tag the
quickscan headers for retrieval of forum messages in their entirety.
Then they do a 2nd pass in which OzCIS retrieves the full text of
tagged headers and sends any replies. Uploads and downloads are
usually sent or retrieved only during a second pass, too. Other users
prefer always to capture all new messages in some or all sections of a
forum, to eliminate the second "2nd Pass" that sending replies might
require. Some users intermix the two methods, depending on the forum,
level of message traffic and other factors.

We suggest you experiment a bit with pass option settings until you
arrive at a routine you like. Remember that you can use CIS' forum
called PRACTICE to carry out these experiments without piling up
connect-time charges (although you might be charged for certain
connection surcharges related to your use of a particular Host).



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 89




        PASSES VIA FORUMS-MENU VERSUS PASSES VIA ONLINE-MENU

The main screen's ONLINE menu also has 1st- and 2nd-pass selections.
The difference between them and a pass selected from FORUMS menu: When
you select FORUMS > 1ST PASS IN THIS FORUM or FORUMS > 2ND PASS IN
THIS FORUM, the pass is made only with respect to the CURRENTLY
SELECTED FORUM. CISMail (if any) is processed then as well, but no
other forums are entered.

When you select ONLINE > 1ST PASS, OzCIS enters ALL forums you have
marked "active."

When you select ONLINE > 2ND PASS, OzCIS enters ALL forums for which
there is 2nd-pass work pending.


        FLAGS IN THE AVAILABLE FORUMS WINDOW

From time to time symbols (flags) appear in the AVAILABLE FORUMS
window:

*     Forum is "active"

  Means: This forum has been marked "active" - you've answered "YES"
  to the question "Include this forum in 1st Pass?" in the forum
  configuration dialogue.

  NOTE:  Shortcut - move the cursor bar within the AVAILABLE FORUMS
         window to a forum name and press F2 to toggle its "active"
         status on and off. The corresponding field in the forum
         config dialogue automatically changes from "Y" to "N" or back
         again, depending on how you've toggled "active" status in the
         AVAILABLE FORUMS window. Likewise, changing the setting in
         the config dialogue will toggle the "*" on and off in the
         AVAILABLE FORUMS window.

"2" (SUPERSCRIPT)    2nd-Pass work pending

  Means: There is 2nd pass work to be done the next time OzCIS enters
  this forum. For example, you might have tagged quickscan headers.
  The "2" appears next to the forum's name until OzCIS logs onto CIS
  again and performs the pending 2nd-pass work, which could include
  messages to be sent, library scans you've requested, or files to be
  uploaded to or downloaded from the forum.










  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 90




CHECK-MARK      Unread mail

  Means: There are new forum messages you have not read yet.

  Note:  If you erase the forum message file (the one with the
         extension .MES), the check-mark will sometimes appear in the
         window, anyway.

"SMILEY-FACE" (the ^A symbol)     Unread personal mail

  Means: There are "waiting" messages you haven't yet read. If your
  new mail includes messages to you, this symbols take the place of
  the check-mark - but only if "read waiting" is part of your forum
  configuration settings.

?     Quickscan headers

  Means: OzCIS has retrieved quickscan headers, but you haven't
  yet tagged any of them. The first time you start a "tag headers"
  routine (discussed below), the "?" disappears from the window).


        SORTING THE LIST OF FORUMS

You can change the order of forum names in the AVAILABLE FORUMS
window. Select CONFIGURATION > FORUMS MAINTENANCE. The AVAILABLE
FORUMS window opens not in the center of the screen, but in the upper
left.

First highlight the name of the forum whose position you want to
change in the list. Select SORT from the menu bar. (Notice the hint
that appears at the bottom of the screen.)

Move the cursor bar to the forum name BELOW WHICH you want the
selected name to be moved. Press ENTER. The name you selected first
(the one that was highlighted when you pressed Alt-S or left-clicked
"SORT") will be moved below the presently-highlighted name. To move
the name to the top of the list, highlight it, select SORT, move the
cursor bar to the very BOTTOM of the list, then press ENTER.


                       FORUM MESSAGES

After configuring a forum, make sure the configuration options include
getting quickscan headers or waiting messages in one or more forum
sections, then have OzCIS make a 1st Pass there.

Even if this is your first time in the forum, go ahead and tell OzCIS
via the forum configuration dialogue to check for waiting messages;
there won't be any for you yet, but you won't do any harm by setting
the option to "Y". If you know you'd like to see ALL mail in



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 91




particular sections right off the bat, put the desired section numbers
into the configuration-dialogue's field for "NEW" mail.

Make sure you have the right Host and forum names selected. From the
main screen, select FORUMS > 1ST PASS IN THIS FORUM. (If you want to
begin collecting mail in more than one forum, mark the desired forums
"active" - as discussed above - and select ONLINE > 1ST PASS. The
following discussion assumes you're doing the pass via the FORUMS
menu, however).

OzCIS logs onto CIS, processes outgoing and incoming CISMail (if any),
logs onto the forum, collects the messages you've told it to get, then
logs off and returns to the main screen.

New forum messages are written to a file whose base name is the first
8 characters of the forum's "GO" word and whose extension is .MES
(example: DTPFORUM.MES for the DTPFORUM). The quickscan information
(message headers only) is written to a .QS file (example:
DTPFORUM.QS). Both files are stored in the directory you specified
during forum configuration (example: C:\OZCIS\DTPFORUM\DTPFORUM.MES).


        READING FORUM MESSAGES

After OzCIS has retrieved new forum messages, from the main screen
select FORUMS > READ CURRENT MESSAGES.

There will be a short pause as OzCIS indexes the messages. If you have
configured it not to display duplicated mail, an alert containing
"Removing duplicates" will appear briefly. Then the Message Reader opens.

The first thing you see is a kind of greeting-message. Using DTPFORUM
as the example - the greeting looks something like this:

   #: 0 S0/Forum Header Announcement
       02-Jan-92  17:41:37
   Sb: Pass 1 Header
   Fr: OzCIS
   To: Melvin Cowznofski 12345,6789

  Welcome to Desktop Publishing Forum, V. 2G(31)

   Hello, Melvin Cowznofski
   Last visit:  02-Jan-92  15:02:22

   Forum messages: 161081 to 167918
   Last message you've read: 167780

   Section(s) Selected: All
   2 members are in conference.
   You have 2 messages waiting.



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 92




This is essentially the same screen you'd see if you were to log onto
the forum manually from the CIS prompt. The "last message" number will
be the lowest message number in the forum if this is your first visit
(aside from the forum auto-configuration pass). If it is your first
visit, the "You have 'x' messages waiting" line does not appear.

The line reading "Fr: OzCIS" indicates that it's a message to which
you cannot reply; if you try to make a reply here, nothing happens.

When the Message Reader is used to read forum messages, virtually all
of its commands and functions are identical to those available when
you use it with CISMail, including commands that pertain to moving
within and between "groups" of messages. We won't go over all the
Message Reader commands again here, but will note a couple of
differences in its OTHER menu:

DELete online - DEL key

  This command is accessible ONLY if the message you're reading is
  either to you or from you. Its purpose is to remove the message from
  the forum's message base. Pressing DEL opens an alert in which OzCIS
  asks you to confirm deleting the message the next time you're on-
  line in the forum. Press "N" or "ESC" if you don't want to do this,
  or "Y" if you do. The message will be deleted during either the next
  1st pass or the next 2nd pass. A flag reading DELETE ONLINE will
  appear any time you view this message. Pressing DEL again will
  toggle OFF the "delete on-line" status, and the flag will disappear.

  Deleting your own messages on-line is not usually necessary for
  forum housekeeping purposes and in fact is frowned upon by some
  sysops, although some strongly prefer that you delete messages
  posted PRIVATELY by or to you in the forum. Deletion of publicly-
  viewable messages can disrupt message threads or keep others from
  seeing useful information. If you've posted a message you later
  decide you really don't want others to see, go ahead and delete it.
  If in doubt about forum policy, post a message to the sysop or
  sysops and ask for further information.

FORWARD COPY - ALT-F

  This command allows you to forward a copy of the current message to
  another user, either in the forum or via CISMail.  You will be
  prompted for the destination and the addressee's information. See
  the "Forward Copy" command in CISMAIL.DOC for more information,
  especially concerning copyright on messages.

PREVIOUS FORUM - F7

  Moves to the previous ACTIVE forum in your list of forums.





  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 93




NEXT FORUM - F9

  Moves to the next ACTIVE forum in your list of forums. In either
  case (F7 or F9) OzCIS looks for a ".MES" file containing messages.
  If none exists in the next forum area, OzCIS presents a "file not
  found" error message.

There are also several commands that jump rapidly from one message
"thread" to another:

JUMP TO PREVIOUS MESSAGE IN THREAD - ALT-F3

JUMP TO NEXT MESSAGE IN THREAD - ALT-F5

JUMP TO THE FIRST MESSAGE IN THIS THREAD - ALT-F4

ALT-F7

  returns to the message you were reading when you first began reading
  the thread (might not be the same as the very first message in the
  thread).

MOVE TO THE NEXT MESSAGE THREAD - ALT-W

One major difference in what you now see in the Message Reader is the
way messages begin. A typical forum message has a header that looks
like this (here we use a fictitious section name):

   #: 167828 S2/Advanced Keyboard Designs
       02-Jan-92  13:10:04
   Sb: #167783-MY KEYS ARE STUCK WORSE THAN I AM
   Fm: Aaron A. Aardvark 00000,111
   To: Irving Arglebargle 12345,6789

The first line of the header shows the message number, the section
number ("S2" for "section 2" in this example), and the section's title
(in this example, "Advanced Keyboard Designs"). The next line shows
the date and time the message was posted to the forum. The third line
is the subject-matter line, where you can see if the current message
is a reply to another.

In that example, Mr. Aardvark has posted forum message number 167828,
a reply to Mr. Arglebargle's message number 167783, the subject being
"MY KEYS ARE STUCK WORSE THAN I AM."

Sometimes "#" characters appear in the subject-line. They are inserted
automatically by CIS.

  Sb: #167783-MY KEYS ARE STUCK WORSE THAN I AM

means the message is a reply to message 167883.



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 94




  Sb: #167783-#MY KEYS ARE STUCK WORSE THAN I AM

means the message is a REPLY TO A REPLY to message 167883.

From time to time other flags appear at the ends of "To:" lines in
forum messages:

(X)  Message has been received by addressee.

(P)  Message is private.

(T)  You have used a CIS procedure, not an OzCIS procedure, to
     tag the message for later retrieval.

(H)  Message has been placed "on hold" by a forum sysop, who might
     have deemed a particular message important enough to keep around
     rather than allow it to scroll out of the forum's message base.

"[F]," appearing between "To:" and an recipient's name, means the
message was manually forwarded by a forum sysop to the recipient,
perhaps from another section. A sysop might forward a message once
addressed to "ALL" if its content indicates it should be sent to a
particular forum member, not to "ALL". Sysops sometimes forward
messages that have been inadvertently mis-addressed.

A sysop can also forward a forum message via CISMail - sometimes done
when the addressee has not yet read it, it's about to scroll out of
the message base, and the sysop deems the contents important enough
that the addressee should see the message.


        REPLYING TO FORUM MESSAGES

You start a reply to a forum message the same way you start a reply to
a CISMail message. The screen splits, and the cursor moves into the
lower window - OzCIS' Reply Editor. You can move from one window to
another, scroll text in both windows, and copy text from the upper
window into the lower one, just as when you reply to CISMail.

Remember that when you're using the Reply Editor, F5 and F7 load the
next message in the current group, and the previous message in the
current group, respectively, into the upper window. You can use these
commands to copy text easily from several messages, pasting them into
a SINGLE reply (the one you're working on in the lower window).

IMPORTANT: As with CISMail, NEVER begin a line in a forum message with
           a semicolon. If you have to have a semicolon as the first
           character on the line, start the line with at least one
           space. Otherwise, OzCIS will become mighty confused; it
           uses semicolons in its own headers (normally not visible).




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 95




           Always press ENTER at least one time following the last
           character of the last line of a forum message. Otherwise,
           the last line might be cut off.


        THE ADDRESS BOOK

The Address Book is available when the window is not split, and you
can have OzCIS enter names automatically into the Address Book as is
possible with CISMail messages.

But there is a major difference: When you're reading forum messages,
you have the choice to enter either the name/address information in
the "Fm:" ("From") line into the Address Book, or else the
name/address information in the "To:" line. Selecting ADDRESS from the
top-line menu opens a small window in which you choose either the "To"
line or the "From" line. Then the Address Book opens; the procedure
thereafter is the same as you've seen before for CISMail. If you want
to put the information for both sender and recipient into the Address
Book, make a couple of passes with the Address Book here.

These Address Book commands are available when you're looking at a
message in the Message Reader but NOT when the window is split and
you're using the Reply Editor.


        SENDING THE REPLY

When you're done in the Reply Editor, give the SEND command (pressing
ESC, on the other hand, allows you to quit the reply without saving).

If you were working with CISMail, you'd then see a window in which you
select "Standard" or "Return Receipt". There are different options
(flags) for forum messages:

Standard

  A standard "save" allows CIS to format the reply (wrap the lines)
  in a way that suits the terminal type of each reader. This may not
  be desirable if you want a message's lines to remain as you've
  typed them.

Unformatted

  "Unformatted" prevents CIS from wrapping the lines to suit the
  reader's terminal type, preserving your original line endings.
  Suppose you make a reply that includes quotes taken from the
  "parent" message, marking the quoted lines with ">" - thus:

  > So, when the keys got stuck, what did you
  > figure you were going to do about them?



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 96




  CIS, in reformatting such a message, will probably bring the second
  ">" up onto the first line. Using "save unformatted" prevents the
  reformatting.

Private

  Some forums support private messages, which stay in the forum (they
  aren't sent via CISMail), but only the senders and recipients can
  see them. If you don't know for sure that private replies are
  allowed in a given forum, ask the sysops about this. If you post a
  private message in a forum, a reply to it and any reply to THAT
  reply will always have the "private" flag set.

Both Pri/Unf

  A private reply is normally saved "formatted." This option makes
  the reply private (within the forum) and prevents CIS from doing its
  own line-wrapping.

NOTE:  No one other than the sender and recipient of private messages
       can see the messages, but it is possible that once in a great
       while, a software error could make public a message intended to
       be private. If you desire more secure mail, post via CISMail.
       Even then, you should be aware that no electronic mail can ever
       be considered truly private.

Via CISMail

  This is, in our opinion, a better way of making a private reply,
  even if a forum supports private replies WITHIN the forum. Private
  replies take up space in the forum's message base; if people go hog-
  wild leaving private replies, they take up too many message "slots,"
  limiting the number of public messages the forum can hold at a given
  time. This can become a nuisance to all forum participants.

  This flag does not place the reply into the file containing your
  other outbound CISMail messages. When OzCIS transmits your outbound
  forum messages, a "Via CISMail" message is routed to CISMail at the
  moment OzCIS finishes posting the message. This option always saves
  messages "unformatted."

Change Info

  This opens a CHANGE REPLY ADDRESS dialogue, containing SEND TO,
  SUBJECT, and SEC (section) fields. The fields will already be filled
  in with the existing name, address, and subject information. You can
  call up a pick-list of section numbers by pressing F2 when the
  cursor is in the SEC field. Change information as needed and press
  F10 to close the dialogue and save changes - or press ESC to close
  it without making any changes.




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 97




  Confirming new name, subject, or section information closes the
  dialogue but leaves the window containing "Standard," "Unformatted,"
  et al., on the screen.


Choosing any option BUT "Change Info" completes the reply, closes the
Reply Editor, stores the reply in your outbound forum message file,
and returns you to the Message Reader.

OzCIS stores outbound forum messages (replies and brand-new messages)
in a file whose base is the first 8 characters of the forum's "GO"
word and whose extension is .REP. As with .MES and .QS files, the .REP
file is stored in the forum's own subdirectory.


        COMPOSING A NEW FORUM MESSAGE

Select FORUMS > NEW MESSAGE COMPOSE from the main screen.

Writing new forum messages is like writing new CISMail; you use the
New Message Editor in both cases. But when you choose SEND from the
menu, the MESSAGE ADDRESS dialogue options are different:

As before, you enter the recipient's name and UserID, and the subject
matter. But there are also fields for the forum section number and for
flags you might need to add ("Private," "unformatted," or "Via
CISMail").

You can leave the flag-fields blank, but you must fill in the NAME,
SUBJECT, and SECTION fields. Otherwise OzCIS beeps, puts an alert on
the screen reading "ALL FIELDS MUST BE PROVIDED," and refuses to close
the dialogue (unless you press ESC to cancel addressing the message).
The ADDRESS field can be left blank so that you can post a message to
"All" ("All" doesn't have a UserID number of its own, of course.)

You can also address messages to particular people, omitting their
UserID numbers from the ADDRESS fields. It's entirely possible the
recipients will see the messages the next time they log onto the
forum. However, if they log on to check ONLY "waiting" mail, they will
not get any messages missing the UserID numbers - CIS alerts them to
"waiting" mail by reference to UserID numbers, not names.

TIP: If you need to post a message to a forum sysop but don't know
     his or her name or UserID number, post to "*SYSOP" (without the
     double quote marks but WITH the asterisk). CIS will send a
     message, thus addressed, privately to the sysop; when he or she
     replies, then you'll know the name and UserID number and will be
     able to store the information in your Address Book if you want.
     This kind of message is stored privately within the forum; it is
     not sent to the sysop via CISMail.




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 98




        COMPOSING A NEW MESSAGE AND STAYING IN THE EDITOR

As with CISMail, you can compose a new message and use F4 to begin
saving it instead of selecting SEND from the menu bar. As long as you
go on using F4, confirming the name/address (etc.) information will
save the message and leave you in the New Message Editor with a new
blank editing screen.


        REVIEWING OUTGOING FORUM MESSAGES

The menu item FORUMS > VIEW OUTGOING MESSAGES is accessible when
you've made replies to forum messages or composed entirely new
messages (that is, when OzCIS has written a .REP file in the forum's
subdirectory). The command opens the Review Editor, whose commands are
the same as those you've seen when reviewing CISMail.

Selecting "KILL" from the top line of the Review Editor has the same
effect as selecting "KILL" when you're reviewing outgoing CISMail: It
gives you the choice to remove the message completely from the
outbound mail file (the .REP file).

It's not the same as the "DELETE" command that can be given when you
read forum messages in the Message Reader; in that case, the "kill"
doesn't occur until the next time OzCIS goes on-line in the forum.

        SAVING REVIEWED MESSAGES

As with CISMail, when you quit the Review Editor, OzCIS asks if you
want to save the messages - IF you set the configuration dialogue's
"auto-save?" field to "ASK." If you reply YES, ALL of the new outbound
messages are stored in the selected forum's subdirectory. The "save
file" has a base name consisting of the first 8 characters of the
forum's "GO" word and the extension .OBS (for "outbox save"). This
file is a "folder" that can be opened later via the command FORUMS >
MESSAGES IN FOLDERS. If you put "ALWAYS" into the configuration
dialogue's "auto-save?" field, the outbound messages are saved in the
.OBS file at roughly the time they are being posted in the forum.


        MAXIMUM LENGTH OF FORUM MESSAGES; SPLITTING A MESSAGE

CISMail messages can be up to 512 Kbytes, but the maximum length of a
forum message is only about 2,100 characters. As you write, keep an
eye on the character count displayed in the New Message Editor's (or
Reply Editor's) status line.

If the message length exceeds the maximum figure, OzCIS automatically
splits it. At the end of each section, it inserts a line reading:
"[OzCIS: Continued in next msg]" and at the beginning of the next
section, it inserts a line reading "[OzCIS: Continued from previous



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 99




msg]". A split always occurs at the beginning of a line - never in
the middle of a line.

The automatic split does not take place until after you have finished
composing the message and have closed the editor. You'll be able to
see the "splits" when you review the outgoing mail.

There are times when you might want to force a split at a particular
line rather than let OzCIS make the decision. In that case, use the
SPLIT command (in the menu bar). Selecting SPLIT inserts a ^S
character into the message at the present cursor position. A
highlighted letter "S" appears there. This split will occur FIRST,
over-riding any decision OzCIS makes UNLESS you put the "split
character" too far down in the message body (in which case OzCIS will,
itself, split the message, THEN read the manually inserted ^S).
(You can confirm the cursor position - number of bytes "into" the
message - by watching the readouts in the editor's status line.)

If you are replying to an existing message, all "splits" are sent as
replies to the original message, unless the first message in the split
group is flagged "Private" or "Via CISMail."

When you compose a NEW multi-part message (i.e., not a reply to
someone else's mail), whether split manually or automatically, OzCIS
sends the second and any additional segments as a reply to the first
message of the REPLY. In other words, when you see the message in the
forum during your next pass, you'll see the second segment of the
reply addressed TO YOU - even though you'd addressed the first part
will to the recipient. This method best preserves message-thread
ordering.

Exceptions: Again, in multi-part new messages posted PRIVATELY to a
forum, or posted using the "Via CISMail" option, the original
recipient's name will be used in all of the "TO:" lines of the message
headers.


        IF YOU NEED TO CHANGE AN OUTGOING FORUM MESSAGE

The outbound-message file OzCIS writes - the .REP file - is a plain-
text file stored in the directory you've established for the forum.
Each message within the file has a distinct header area you don't see
when you're writing or reviewing outbound messages (unless you use the
General Editor to view or edit the file). See "Custom Message
Services," below, for information on quickly opening forum mail or
other files without having to quit OzCIS and run a text editor.

Editing the text of an outbound message is simple enough; use the
Review Editor. And you should use it for changing body text, rather
than the General Editor. See note below for the reasons. But what if
you need to change the header of a given message?



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 100




Here's a typical-looking header as it appears in the .REP file:

;REP 168277;;Bjorn MacFeldman 12345,987;Peculiar names;2

This would be a reply (REP) to message number 168277. The double-
semicolon marks the place where a message-formatting instruction might
be inserted. In this example, the formatting "field" is blank,
indicating that CIS will apply "standard" formatting. The recipient is
Bjorn MacFeldman, CIS UserID number 12345,987. The subject of the
message is "Peculiar names." The message is to be posted in section 2
of the forum.

If you wanted to send the message "unformatted," you'd add the flag
"UNF" to the header between the double semicolons. Thus:

;REP 168277;UNF;Bjorn MacFeldman 12345,987;Peculiar names;2

If it were not a reply but an entirely new message from you, the
header information might look something like this:

;COMP;;Bjorn MacFeldman 12345,987;Peculiar names;2

... with "COMP" standing for "compose new message." This is also a
message to the infamous MacFeldman and is also posted to section 2.
Note, again, the double-semicolon string.

Other formatting flags that might appear in such headers:

PRI: private and with standard CIS formatting

UNF PRI: UNformatted and private

;MAIL;;Bjorn MacFeldman 12345,987;More about weird names;2

The line just above means the message goes to Mr. MacFeldman not in
the forum but via CISMail. Formatting flags won't appear in a via-
CISMail message posted initially to a forum. Note that the section
number still appears at the end of the line.

If you need to open a .REP file and change any header information or
message text, make VERY sure that:

1) You save the file in plain-text format; 2) You do NOT add or remove
any semicolons in the header area; 3) You do NOT alter the string
"EOM" at the end of each message. "EOM" will have on each side of it
two "highbit" characters - box-drawing characters; do not alter or
remove either of those.

OzCIS' General Editor always saves in plain-text format, so consider
using it - if only to save time - when you need to alter .REP file
headers (see "Other FORUM Commands," below).



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 101




IMPORTANT: If you edit a forum message outside the Reply Editor or the
           Review Editor, OzCIS is NOT able to keep track of the
           message size such that it can automatically place a "split"
           character into the message body when need be. For this
           reason, PLEASE limit custom editing done with the General
           Editor (or your own text editor) to changing header
           information ONLY, and use the Review Editor to change the
           message body itself.


          SAVING INDIVIDUAL FORUM MESSAGES TO A FILE

The procedures are the same as noted elsewhere (for saving individual
outgoing or incoming CISMail messages). You can save an individual
message written TO you, using any file name you want. One difference
between this procedure and the CISMail procedure: OzCIS stores the
name of the last "save file" you used and puts that name by default
into the data field that appears when you choose "SAVE".

Saving a message FROM you stores the message in a file whose base name
is the first 8 characters of the forum's "GO" word and whose extension
is .OBS. The .OBS file is stored in the subdirectory containing all of
the other files for this forum; you cannot supply alternate path or
file name information for an outbox-save file. As with CISMail,
messages stored this way can be read again, and replied-to, via the
command FORUMS > MESSAGES IN FOLDERS.


        QUICKSCAN HEADERS

When you go on-line and collect quickscan headers from a forum, OzCIS
writes a file with the extension .QS in the forum's subdirectory. You
peruse this file off-line, looking for messages of interest and
selecting those you'd like OzCIS to retrieve in their entirety during
the next 2nd pass to the forum.

NOTE:  Later, during a 2nd pass when you retrieve messages in their
       entirety, OzCIS appends the new messages to the end of the file
       (if any) containing existing forum messages. This is different
       from the result of making a first pass and retrieving "waiting"
       or "new" messages, either of which will cause an existing forum
       message file to to be OVER-WRITTEN.

Selecting FORUMS > TAG QUICKSCAN LIST opens a window that shows the
most recently retrieved headers. If you'd collected headers for the
DTPFORUM, the display might look something like this:








  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 102




Quickscan Headers, 19:24:10 06-Jan-92                 0 Msgs Tagged

Reality of tech support            #169607: S 1  / The Corner Pub
5000 degrees KEVIN??               #169590: S 1  / The Corner Pub
Latest scanners              (1)   #169602: S 6  / Scanners & Gizmos
Font prices, etc.                  #169609: S 12 / Type & Typography
PFM->AFM?                          #169612: S 12 / Type & Typography
Direct-to-plate tech.        (6)   #169605: S 13 / Printing & Prepress

On each line OzCIS displays the subject of the message, the number of
replies to that message (in parentheses), the message number, the
forum section number and section name.  In the above example, message
169602 has one reply; message 169605 has 6 replies.

This is a stamdard pick-list. You can scroll the list up and down with
PG UP and PG DN (or use the mouse and the scroll bars and scroll
arrows) if the list is longer than one screen. The other commands are:

SPACE BAR  Tags the message now highlighted by the cursor bar. Tagging
           a message puts a check-mark next to it and moves the cursor
           bar to the next line. The space bar is also used to UNtag
           tagged messages. You can also left-click on a given line to
           tag a message.

ALT-T      Tags ALL messages in the quickscan list.

ALT-U      UNtags ALL messages in the quickscan list.

ALT-S      Send (store) the tagged selections.

ESC        Close the window without saving tagged messages.

When you save the list, OzCIS writes a file with the extension .GET
into the forum's subdirectory (in this example, it would write
DTPFORUM.GET). During the next 2nd pass, OzCIS reads the .GET file and
retrieves in their entirety all messages you've tagged, including all
the replies, plus any replies posted in the forum since you did the
quick-scan. (You might end up with more messages than you originally
thought you'd retrieve.) The .GET file is deleted when OzCIS is done
retrieving the messages.

NOTE:  Tagging a quickscan list and saving the selections ALWAYS
       causes any existing .GET file to be over-written.

Can't remember whether or not you've tagged the latest crop of
quickscan headers?  It's easy enough to forget if you have made
several passes to a given forum on the same day. Keep an eye on the
Available Forums window, always visible when you have the FORUMS menu
dropped down. If a "?" appears next to a forum's name, there is a
quickscan file that you haven't yet inspected. (The first time you




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 103




open it, whether or not you tag headers, the "?" flag disappears from
the Available Forums window.)

If you re-open the quickscan-headers window before going on-line to
get the tagged messages, the check-markss will still be there. Alter
them if you need to, then use the SAVE command to save the altered
list. If you don't need to make any changes at all, press ESC to close
the window. OzCIS then asks if you want to save the tagged headers. If
you made NO changes, answering "N" will have no effect on the present
tagging. Answer "Y" if you made changes and want to save them.


                       OTHER FORUM MENU COMMANDS


        MESSAGES IN FOLDERS

Selecting FORUMS > MESSAGE IN FOLDERS opens a sub-menu with four
items. The first three mentioned below are accessible only if OzCIS
can find specific files it considers "folders".

SAVED RECEIVED MESSAGES

  Opens a .SAV file whose base name is the first 8 characters of the
  selected forum's "GO" word. This is the file you create or add to by
  selecting "SAVE" when you're in the Message Reader. You can also
  give such files another name (see "Manual Selection," below).

SAVED OUTBOX MESSAGES

  Opens an .OBS file whose base name is the first 8 characters of the
  selected forum's "GO" word. The .OBS file is created by OzCIS when
  you select "SAVE" in the Review Editor.

PURGED MESSAGES

  When you configure a forum, you can tell OzCIS to save any forum
  message "sessions" it removes from the current message file (the
  .MES file). The purged-but-saved messages are stored in a file with
  the extension .PRG (as before, its base name is the first 8
  characters of the forum's "GO" word). This menu item opens the
  forum's .PRG file, if any.

MANUAL SELECTION

  Allows you to select a "save file" for which you've assigned the
  name (rather than use OzCIS' default name). Selecting this item
  opens a window containing a data field for the file name (supply
  path information if need be). Entering a name including wildcards
  gives you a standard OzCIS file pick-list.




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 104







  If the file you specify is not in the correct format for a "folder,"
  OzCIS displays an error message and refuses to open the file (for
  more information about the correct file format, review the "messages
  in folders" section of the OzCIS documentation for CISMail).

Selecting a "folder" opens the Message Reader. The previously-
discussed Message Reader commands are available there, including
access to the Reply Editor.


                        CUSTOM MESSAGE SERVICES

Selecting FORUMS > CUSTOM SERVICES opens a sub-menu with three items:

        CUSTOM ONLINE PROCESSING

Selecting this item opens a Custom Message Services window on the
right side of the main screen - a pick-list with about 30 selections
for custom processing, including retrieval of forum messages with
specific message headers, messages posted in the past 'x' days (you
specify what 'x' is), and so on. As you move the cursor bar through
the list, text explaining the purpose of each selection appears at the
bottom of the main screen. We think the hints are informative enough
that the selections do not need to be discussed here one by one.

Two of the items (near the top) contain your OWN CIS UserID number.
The initial OzCIS configuration you did automatically inserts the
number into this part of the pick-list. The first item is a custom
command to read all messages written by you; the second reads all
written TO you.

There are a few items toward the bottom of the pick-list that pertain
to collecting message headers (only). Most other ("read") options
retrieve forum messages in their entirety.

Some of the items, when selected, will bring up one or two additional
windows into which you enter forum section numbers, subject matter
text, date information, or someone's UserID.

These fields are all fairly long, but if you happen to fill a field
completely, the cursor disappears from the field and the highlighted
text in the field changes to the regular text attribute. The contents
of the field are temporarily un-editable - but: Notice that there is a
command name in the field, containing a single highlighted letter.
Press that letter. You will be able to resume editing the field.

Custom processing commands are stored in the forum's subdirectory in
the .GET file - the same one where OzCIS stores information about any



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 105




quickscan headers you've tagged. Each new custom-processing command
you select is added to the .GET file. During the next 2nd pass, OzCIS
executes the custom instructions in the order you entered them.

NOTE:  The .GET file is ALWAYS OVER-WRITTEN each time you tag
       quickscan headers. Therefore, if you want to retrieve tagged
       messages AND have custom-on-line-processing executed, do all of
       the tagging first, THEN select the custom processing commands.


        CUSTOM LIBRARY SCAN

This menu item allows you to make a custom scan of the selected
library, selecting scanning criteria in ways not supported via the
scan options of the forum configuration dialogue. The command opens a
window called CUSTOM LONG SCAN IN <name of forum>, containing these
fields:

LIBS TO SEARCH

  The numbers of libraries where you want to search for files. As with
  other such data fields, enter the numbers separated by commas, or
  press F2 for a pick-list from which you select libraries.

CIS NAME MASK

  Here, type a file name or file name "mask." If you wished to
  do a custom long scan for all of the OzCIS files in the IBMCOM
  forum, you could type a name like "OZC*.*".

AGE PARAMETERS

  Enter a number representing how many days back you'd like to have
  OzCIS check for files matching the name-criteria just entered.

KEYWORDS

  Enter a keyword you are hoping to find within the keywords "field"
  for the files in question (maximum, 17 characters). For more
  information on keywords, see the OzCIS documentation file FILES.DOC.

CUSTOM PARAMS

  Customization information of the sort that you would normally enter
  at a CIS forum prompt when searching for files.

Close the dialogue in the usual ways. A custom scan will be executed
on either the next 1st or 2nd pass that visits this particular forum.






  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 106




        EDIT ONLINE PROCESS FILE

This is the second sub-menu item for custom message services.
Selecting it opens an ONLINE FILES window on the right side of the
screen, containing a list of files OzCIS reads and writes when
processing forum messages. For the purposes of this explanation,
suppose we're talking about DTPFORUM and that you've created the
subdirectory C:\OZCIS\DTPFORUM for it. These are the ONLINE FILES
window's menu items:

OUTBOX FILE (.REP)

  C:\OZCIS\DTPFORUM\DTPFORUM.REP is the file containing all of your
  replies and all newly-composed mail to be posted to the forum.

CUSTOM FILE (.GET)

  C:\OZCIS\DTPFORUM\DTPFORUM.GET contains information pertaining to
  any quickscan headers you've tagged - and/or: any custom-on-line-
  processing information you've created via the command FORUMS >
  CUSTOM SERVICES > CUSTOM ONLINE PROCESSING.

SECTION NAMES (.SEC)

  C:\OZCIS\DTPFORUM\DTPFORUM.SEC is the plain-text file OzCIS created
  when you had OzCIS make the automatic forum configuration pass.

PENDING UPLOADS (.UL)

  C:\OZCIS\DTPFORUM\DTPFORUM.UL contains information about any binary
  files you are going to upload to one or more of the forum's libraries.

PENDING DOWNLOADS (.DL)

  C:\OZCIS\DTPFORUM\DTPFORUM.DL contains information about any binary
  files you will download from one or more of the forum's libraries.

CURRENT MESSAGES (.MES)

  C:\OZCIS\DTPFORUM\DTPFORUM.MES is the file containing all forum
  messages retrieved by OzCIS during 1st or 2nd passes.

CURRENT QS HEADERS (.QS)

  C:\OZCIS\DTPFORUM\DTPFORUM.QS contains the list of quickscan headers
  you peruse (and tag) off-line - not the list of headers you have
  already TAGGED for later retrieval in their entirety.

The files with the extensions .REP, .GET, .UL, and .DL are deleted at
the end of the pass in which OzCIS reads them to get forum message or
file processing instructions.



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 107




All of these menu items are accessible whether or not the files in
question exist. If you select a file name that doesn't exist, OzCIS
notifies you that it can't find the file, and you are returned to the
FORUMS > CUSTOM SERVICES menu item.

Otherwise, OzCIS finds and opens the file at once in the General
Editor. This is a convenient way to edit or view the various utility
files without having to run the General Editor and then specify a full
path and file name (or via choosing from a file pick-list).

NOTE:  When you open a file this way, you are looking at the "raw"
       file, including all header information OzCIS normally does not
       display when you're using the Message Reader, Reply Editor, or
       Review Editor. And this method of opening, say, the .MES file
       does NOT provide you with a way to reply to the messages in it.


When you have one of these text files open in the General Editor, take
careful note of the formatting for instruction lines within the file.
It is especially important that if you need to edit an instruction
line, you leave its general formatting as-is.

That is: Don't add or remove any semicolons; don't add or remove any
"highbit" characters or character strings reading "SOM" or "EOM"; if
an instruction appears entirely on one line, don't allow the line to
break or wrap. If you change the subject-matter part of the header in
an outgoing message, make sure it doesn't exceed the 24-character limit.

IMPORTANT: If you edit a forum message outside the Reply Editor or the
           Review Editor, OzCIS is NOT able to keep track of the
           message size such that it can automatically place a "split"
           character into the message body when need be. For this
           reason, PLEASE limit custom editing done with the General
           Editor (or your own text editor) to changing header
           information ONLY, and use the Review Editor to change the
           message body itself.


        1ST PASS IN THIS FORUM

Selecting FORUMS > 1ST PASS IN THIS FORUM runs a 1st pass during which OzCIS
visits ONLY the currently selected forum. If you want to run a 1st
pass to ALL forums you have marked "active," use the ONLINE menu.


        2ND PASS IN THIS FORUM

Selecting FORUMS > 2ND PASS IN THIS FORUM runs a 2nd pass during which
OzCIS visits ONLY the currently selected forum. Again, if you want to
do a 2nd pass and process instructions for ALL forums that have 2nd-
pass work pending, use the ONLINE menu.

                                ###

  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 108


```
{% endraw %}

## MISC.DOC

{% raw %}
```




                File: MISC.DOC -- OTHER INFORMATION ABOUT OZCIS

This section contains information not covered in the other sections.


                MAKING THE MOST OF YOUR CIS DOLLAR

No one ever said using CIS was cheap. The fact that you are looking
for or using an automated navigation program like OzCIS is most likely
motivated by a desire to save some of your hard-earned bucks.

Saving money when using CIS requires, much more than anything else,
careful planning and thought by YOU, before you ever go on-line. Your
patterns of accessing the service, what areas you frequent, and how
you spend time in those areas, will play a major role in your bill.

Right out of the box, let's dispell a common myth:

        USING A NAVIGATOR MAY *NOT* SAVE YOU MONEY.

That's right. A navigator makes your on-line time far more productive.
It reduces the time you WASTE on-line to a minimum and helps you get
the most out of each connect-minute; the value of the time you spend
connected to CIS rises dramatically.

However, many people find that because the time they spend on-line is
more productive, they can do MORE - and end up spending just as much
time on-line, albeit covering a lot more ground in the process. As
long as you take control of your access, limit yourself to those areas
that you would use had you not decided to use an automated program,
you will save a substantial amount on your CIS bills. If you start
keeping up with several new forums, or grabing the weather reports
every time you log on, or making trips to the stock quotes areas three
or four times a day instead of once at the end of the day, your CIS
bill will reflect it. A little restraint can go a long way.


        HELPFUL INFO

The best defense against surprising bills is a knowledgable consumer.
the following information will explain some areas of CIS billing,
charges and services that most new users don't completely understand.

Do note that the following is gleaned from my 8 years on the service
as user and sysop, from conversations with other "old hands" and CIS
Customer Service personnel, and careful reading of on-line and paper
CIS information; it is neither "the official word" nor guaranteed to
be 100% accurate. If in doubt, contact CIS Customer Service (GO
FEEDBACK) for the latest official position or information.





  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 125




        CONNECT CHARGES VS. NETWORK SURCHARGES:

CIS charges at least two fees: a flat per-hour rate for your access to
CIS, as the cost of the computer time and providing the various
services; and one or more "network surcharge(s)" to cover the cost of
connecting to the CIS computers.

The flat connect rate is based strictly on the BAUD rate at which you
connect, and while the rate is expressed per hour it is calculated by
minute - and rounded up to the next whole minute. In some cases the
connect charge varies by time of day; connect-time at a given BAUD
rate during "prime time" hours (weekday business hours) will have a
higher per-hour charge than connect-time at the same BAUD rate made
during "non-prime time" hours.

Network surcharge rates vary depending on what network you use to
access CIS and where you are located in the U.S. or abroad. CIS
operates its own network, and most U.S. nodes are on that network.
Other U.S. and/or foreign nodes are operated by "supplemental
carriers" such as TYMNET, SprintNet, DataPac, Datex-P and others; on
these carriers the network surcharge pays the supplemental carrier,
with CIS just doing the billing. In either case, many network
surcharges are based on time OR connect - in other words, you are
charged a flat rate per connect whether you are on-line 1 minute or
59 minutes.

I mentioned early in this documentation that there is no "right" way
to set up OzCIS for forums access; the above is one reason why. I
discussed that many users find it more convenient to quick scan
message headers, retrieve just the messages that interest them, and
then reply. Note that doing so means you must connect to CIS THREE
times: Once to retrieve the headers, once to retrieve the full
messages selected from the quickscan list, and once to send replies.
Depending on the network in use and the way its rates are structured,
and the activity level of the forum(s) in question, this extra connect
experience may end up costing you more than it would have cost to just
retrieve all new messages on the first pass and send replies on the
second. On the other hand, scanning headers can save you money when
used regularly in forums where you may not pick up much traffic.

As I mentioned, these rates vary from network to network, and change
periodically. You can always find out the current rates for your
network in the RATES area (GO RATES).

TIP:  If you use a non-CIS-network node to access the service, it's a
      good idea to periodically visit GO RATES and capture the current
      rate information to a file for offline review.







  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 126




        SURCHARGED SERVICES:

Some areas of CIS are special areas provided by other contractors,
such as some of the stock trading information areas, the airlines
areas, and others. Many of these are surcharge areas, meaning you pay
an extra fee for using them. Some are charged per-access while others
charge per minute/quote/look-up/etc. Again, the GO RATES area details
what services are surcharged and what those charges are.

A few "custom" service packages, like the Executive Service Option
package CIS offers, add a single fixed monthly surcharge to your bill.

TIP:  Again, if you use any of these surcharged areas, GO RATES
      periodically to stay abreast of the current rates.


        "THE CHEAP SEATS" - BASIC SERVICES PACKAGES:

CompuServe has for some time offered a package deal for users called
"Basic Services". (As of this writing they are finalizing an updated
version of the BasSrv package that provides users with extra value.)

The BasSrv package, for a fixed monthly charge, gives you unlimited
access to several areas of CIS, such as Weather and the Weather Maps,
the Electronic Mall and others. HOWEVER... access to areas not
included in the BasSrv group are charged at the normal rate! No forums
are included in BasSrv other than the PRACTICE forum and the special
forums that support the CompuServe CIM products for PC's and Macs.

Additionally, CISMail is handled on an "allowance" basis; you are
given a credit allowance of a fixed amount per month and then charged
a fixed fee per message. When you exceed that allowance you incur the
per-message charge in your bill. (Starts to sound like some of the
billing packages offered by the phone companies, doesn't it?) The
exclusions, conditions and restrictions on the BasSrv package should
be reviewed carefully.

BasSrv can save you money, but how much depends on how you use the
Service. If you tend to handle a lot of forum traffic each month but
don't do a lot in other areas, BasSrv may not save you much. But for
some users it can be a real money-saver, and should not be overlooked
as a means of reducing the monthly hit to your wallet. Note also that
all new members signed up after 1 April 92 will be under the Basic
Services billing plan; current members get to choose which billing
plan they prefer.

TIP:  Not being a BasSrv user, I am not familar with all the
      intricacies of its billing. However, it has been reported to me
      that the smart BasSrv user groups access areas carefully,
      putting all BasSrv areas together at the start or the end of the




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 127




      on-line session. This reduces potential costs when moving
      to/from BasSrv areas and other services such as forums.


        HIGH-SPEED ACCESS:

That new 9600bps modem is just the ticket to help save you big bucks
on CIS, right? Not nessessarily! If you do a lot of file transfers,
high-speed access will certainly save you a substantial amount of
money. If your use of CIS is geared more towards messages in the
forums, the issue becomes more complicated.

As you've probably noticed, time spent on-line with CIS consists of
time spent receiving or sending data, and periods of time waiting
while CIS processes the most recent request (as when moving between
forums after a GO command).

The time required to move between forums or process commands remains
fairly constant regardless of the BAUD rate at which you connect,
while the time required to send or receive a certain amount of data
decreases as BAUD rate increases. As you increase the BAUD rate, the
percentage of the total on-line session devoted to "waiting" becomes
Larger and has a more noticable effect on the overall connection. This
can be expressed as an overall characters-per-second efficiency figure
- the higher the c.p.s.-figure relative to the connect BAUD rate, the
more efficient the session; the lower the c.p.s.-figure, the more time
you spent waiting while CIS processed your requests.

An "average" 2400bps session, with a typical mix of CISMail and a
half-dozen forums, will usually return an efficiency in the 80 to 100
CPS range (notice this is less than half of the theoretical maximum of
240 CPS.) However, if the forums are all or mostly "small" (have a
small number of new/waiting messages to be retrieved or sent, and
little other data to be retrieved), the efficiency will be
dramatically less, sometimes down in the 40 c.p.s. range - much of the
total connect time is spent "waiting on CIS". On the other hand, a
session spent mostly in "busy" forums with a large number of messages
to capture, or time spent transfering files, will have a substantially
higher efficiency, sometimes approaching or even exceeding 200 c.p.s.

But, as mentioned above, at 9600bps the "waiting" time becomes a much
larger factor. If the forums you visit are small, it is not uncommon
to see 9600bps efficiencies be only 10%-20% higher than 2400bps
efficiencies. If the forums you access are busy, that difference
becomes quite a bit larger.

9600bps connect time costs almost twice as much as 2400bps access, and
at present it carries an additional $10 hourly surcharge above the
normal 30 cent network surcharge if you call via the 800 number. While
9600 theoretically provides 4 times the throughput of 2400 access, in
practice it provides somewhat less (in some cases substantially less,



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 128




depending on network traffic load and other factors.) With the
increased cost of 9600 access, you need to see somewhere between two
and three times the efficiency CPS in order for 9600 to "pay for
itself." Generally a noticeable increase in efficiency will occur only
when you do a lot of file transfers or library scans, and/or if all
the forums you visit are busy.

Only you can determine if 9600bps will save you money over 2400bps. In
addition to what I've mentioned already, you have to factor in any
long distance charges that might be associated with your access,
and/or any extra network surcharges. The only way to know for sure is
to keep careful track of your usage at both BAUD rates, and calculate
which is best for you.

TIPS:  Use OzCIS' access logs (and the accessory OzLOG program) to
       help you keep close track of your on-line times and
       efficiencies. Never do interactive manual work at 9600bps
       unless you're only transfering files; you're sure to be wasting
       money otherwise. Do large library scans at 9600; like file
       transfers they will almost always be more efficient. Plan your
       access times; because heavier network loading during the day
       and early evening slows down 9600 access by a larger percentage
       than it does 2400, save your 9600 sessions until later in the
       evening or early morning hours. Take advantage of OzCIS'
       ability to "hold" files (pending downloads in CISMail) by doing
       your normal mail access at 2400, then logging back on at some
       other time at 9600 to get the actual files.


        CONFERENCING:

Conferencing can be the most expensive time you spend on-line. I'm not
discouraging conferencing; it can be a wonderful way to meet people,
learn new things, familarize yourself with a forum's membership and
"spirit," or just spend some time chatting with friends. But in terms
of raw data throughput, no use of CIS will give you less per-minute
return on your dollar. If your bill is important to you, make sure you
limit your conferencing to those areas and things that will give you a
return on your investment.

Tip:  ALWAYS conference at 300 BAUD. Real-time conferences run at
      typing speeds; few people can type 30 characters per second, so
      conferencing at 300 BAUD gives you the cheapest connect rate
      while still being plenty fast enough to keep up.


        USING CIM:

The CompuServe Information Manager (CIM), for simplifying access to
the Service, is a program written and sold by CIS itself. While it is
quite limited in its automation capabilities compared to OzCIS and the



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 129




other navigator programs, it excels in interactive on-line operation,
especially in certain areas like the Executive News Service and the
Airlines areas, and in conferencing. Its user interface is quite
similar to that of OzCIS in several ways, although the two cannot
share files such as messages or forums lists.

I cannot recommend CIM for regular CISMail or forum traffic or file
transfers, but I do recommend it for conferencing and some other
manual on-line chores. CIM can be ordered on-line (GO ORDER). The cost
is $25, but an included $20 usage credit means the net cost is $5 -
well worth it. CIM can be installed as an external in OzCIS for easy
access.


        THE "PRACTICE" FORUM:

Becoming familar with CIS, even when using an automated program, can
be an expensive process. CIS provides a free forum called PRACTICE,
where connect time charges are waived (but network surcharges still
apply!) and in which you can "play." The sysops are friendly,
knowledgable people, ready to answer any question and understanding of
people who don't know the ropes and get confused over the multitude of
commands, etc. If you're unsure about doing something on the service,
stop by the PRACTICE forum and try it out on CompuServe's nickel -
instead of your own.



                SAVING MONEY WITH OzCIS

As mentioned throughout the preceeding section, YOU are the primary
determining factor in how your CIS bill looks at the end of the month.
However, OzCIS provides several things that can be used to your
advantage.

1)  As mentioned in the discussion of 9600bps access, using the
    access log files generated by OzCIS to keep track of the on-line
    time you spend and where you spend it can be very helpful in
    determining ways to save money. The OzLOG utility included with
    the program can help you quickly make sense of the logs. (See
    below for more information.)

2)  Keep your access limited to later evening and weekend hours as
    much as possible, especially when doing file transfers or library
    scans; you'll get higher efficiency. Avoid Monday early evenings
    if possible; this is traditionally the highest-access time for
    the Service. By the same token, don't start long scans or
    downloads in the wee hours of the morning unless you are familar
    with the down-for-maint. schedule for that forum. All forums are
    taken down for a short time every day, to do a complete backup




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 130




    and freshen programs as needed; usually this is done between 2AM
    and 5AM EST, but some forums come a bit earlier or later.

3)  Short-format scans of forum libraries take MUCH less time to
    retrieve than do long-format scans. If you are investigating a new
    forum's libraries, do a short-format scan first - then use the
    Retrieve option from the short-list display to get the full
    abstracts for only the files that interest you.

4)  By the same token, never re-scan a complete long catalog unless
    you have to; use the Update option to retrieve only new files.
    Or use the Custom Library Scans facility to reduce the scan list
    even further.

5)  Looking for a file, but aren't sure what forum it's in? Never
    just start hopping from forum to forum browsing the libraries!
    GO IBMFF instead; use the FileFinder to zero in on the file
    you're looking for rapidly. If the file is a graphics image, use
    GO GRAPHFF. Other FileFinders exist for other computer types,
    such as MACFF.

6)  If you access a non-forum area regularly, look into writing or
    acquiring a script to automate it as far as possible rather than
    always doing it manually.

7)  Never send a mail message "Receipt requested" unless it's REALLY
    nessessary. Those 25-cents-per-receipt charges can add up quickly
    when you RR most or all of your mail messages.

8)  Ditto for CC'ed messages. Hint: if you only have a few addressees
    for a given message, create the first copy and then call up the
    CISMAIL.MES file in the General Editor, block-copy the duplicate
    messages and edit the address info to suit. The break-even point
    for this technique is about 5 smaller messages; if the message is
    long or you have more than 4 or 5 people to send it to, the time
    spent sending all the extra text will equal or exceed the per-copy
    costs for CC'ing a message.

9)  When setting up or sorting your forums, if you have one or more
    forums in a different "gateway" (such as ZiffNet), group those
    forums together and put them at the end of your forums list. Doing
    so reduces the "dead" time CIS spends switching thru the gateway.

10) Never start a file transfer and walk away, especially if you don't
    use an error-corrected modem and the line has been showing
    symptoms of being noisy or problematic. If a download is visibly
    slow due to high network loading, or is getting a number of
    errors, abort the transfer and try again later (taking advantage
    of the B+ protocol's "resume" feature.)





  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 131




11) Unless it's your primary reason for using CIS, never set up areas
    such as Weather or ENS to be processed each and every time you log
    on. These areas generally are slower processing than the forums
    and CISMail, and can sometimes result in a large amount of data
    being re-captured.

12) Save processing of Weather Maps until mid- to late-afternoon if
    possible. Some of the maps do not become available until the
    afternoon, so requesting one of these maps before they are
    available means a deadhead pass thru the AWM area.


                ACTIVITY LOGS

OzCIS generates and maintains an activity log of all on-line sessions.
This log contains both timing information for accounting purposes, and
reports of file transfer success or failure.

Activity log files are named MMM-YY.LOG, where "MMM" is the three-
letter identifier for the current month, and "YY" is the last two
digits of the current year. A new log file is created the first time
you log on (or after the first of each month) and is stored in the
directory where OzCIS itself is stored. These log files can grow quite
large, depending on the frequency with which you log onto CIS, how
many forums you visit, how often you run scripts, and how often you
operate in manual terminal mode. Once you are finished with activity
log files that are no longer current, I recommend you archive them off
to floppy disk or otherwise store them away.

The OzCIS distribution set contains a small utility program called
OzLOG. This program will read the session log file and generate a
tabular report by host, session and forum, showing on-line time by
host in each forum and time spent performing non-OzCIS work. It also
provides approximate costs for the time you spent on-line. This
utility is quite handy for getting an idea of how much you're spending
on CIS access, but it should not be construed to be an accurate
representation of charges - it has no knowledge of areas that are free
of charge or surcharged.

See the file UTILS.DOC for information on using OzLOG.



                OzCIS COLOR CONFIGURATION

The colors configuration area (CONFIGURATION > COLORS CONFIG) allows
you to change the colors OzCIS uses for display. While we have tried
to set up a colors scheme that most users will find pleasing, to each
his own!





  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 132




OzCIS maintains two sets of colors, one for the editor/viewer windows
and their related fields, and one for the menus, picklists and entry
dialogs. (It also maintains a set of colors for error alerts and
dialog boxes, but these are not currently configurable.) Within each
color set are two subsets, one for color systems and one for
monochrome systems. All screen element types will have one each of the
two types of attributes.

The "Color Map" window on the left side of the screen shows the
available attributes. Each attribute's value is composed of two
numbers, the top number and the side number in the matrix. When
entering an attribute value, use the top number first and then the
side number to create the actual attribute. (Some users will instantly
recognize this as standard hexidecimal attribute notation, but some
users may not be familar with it.)

For example, find the attribute in the matrix for white text on a blue
background (close to the lower-left corner.) The value above that
attribute's column is "1", and the value for that attribute's row is
"F". Therefore, the attribute value you would input in a field if you
wanted white text on a blue background would be "1F". Yellow on blue
(just above white-on-blue) would be "1E", and so forth.


                OzCIS SVGA VIDEO TYPES SUPPORTED

OzCIS supports the following SuperVGA types when displaying GIF
images on-line:

  Standard VGA      - IBM-compatible VGA with no SVGA support.
                      Should be used if your card does not support
                      SVGA modes or does not fall in the group
                      below.
  AutoDetect        - OzCIS will attempt to detect which type of
                      video hardware is available.
  VESA Driver       - Any SVGA card that is using a VESA driver.
                      This is the recommended setting if at all
                      possible.
  Tseng Labs ET3000 - All SVGA cards using the ET3000 chipset with
                      512K of video memory.
  Tseng Labs ET4000 - All ET4000-based cards with 1Mb of video
                      memory.
  Trident 88/8900   - Trident 8800- and 8900-based cards with max
                      memory. The three above chipsets comprise the
                      vast majority of both "brand-name" and "no
                      name" cards that are not made by one of the
                      mfgrs below.
  Paradise          - Most recent Paradise and AST cards. Includes
                      some motherboard-mounted video.
  Video7            - Vega, VRAM and FastRAM cards with max memory.




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 133




  ATI               - ATI VGA Wonder and Small Wonder cards only,
                      with max memory.
  Chips&Tech        - The C&T "451" chipset-based cards.
  Ahead             - "A" and "B"-based cards with max memory.
  Everex            - Most Everex cards, including some that
                      actually use the Trident 8800 chipsets.

If you're unsure about the chipset used by your video card, look at
the card itself or consult your dealer/vendor.

OzCIS provides a small external program call OZGIF.EXE for viewing GIF
images off-line. The program must be installed in the same directory
as OzCIS in order for the main program to find it. You can then select
WINDOW > VIEW GIF from the main screen to view GIF files off-line.

OZGIF is a small and simplistic program that will display GIFs but
does not provide many of the advanced features of some of the
available offline graphics viewers available. Many of these other
programs can resize, pan and zoom images, handle other formats such as
BMP, PCX and TIFF, and allow editing color palettes and other image
manipulation. Some will also support a wider range of video hardware
than OZGIF as well. There is a wide selection of such programs
available in the PICS Forum, library 3. My favorites are CSHOW and
VPIC, but many others are just as good. A few that work with Microsoft
Windows are also available.

If you prefer to use one of the other programs to view GIF images,
hooking it into OzCIS is fairly simple. Create a batch file called
OZGIF.BAT which executes your preferred offline viewer, and put it in
the same directory as the main program. OzCIS will note the existance
of that batch file and execute it rather than OZGIF.EXE if it is
found.


                ERROR CODES

OzCIS has a number of error codes that may be reported during the
operation of the program. Most of these are internal errors that you
will never see unless there is a system conflict or out-of-memory
condition. Some are DOS errors that you may see, and these are listed
below. Note that error codes are broken into "classes", where a class
has a hundreds prefix indicating error class (such as the 29xx and
89xx errors for comm-port-related errors below.)

  ecFileNotFound           = 2;    {File not found}
  ecPathNotFound           = 3;    {Path not found}
  ecTooManyFiles           = 4;    {Too many open files}
  ecAccessDenied           = 5;    {File access denied}
  ecInvalidHandle          = 6;    {Invalid file handle}
  ecOutOfMemory            = 8;    {Insufficient memory}
  ecInvalidDrive           = 15;   {Invalid drive}



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 134




  ecNoMoreFiles            = 18;   {No more files}

  ecDiskRead               = 100;  {Attempt to read past EOF}
  ecDiskFull               = 101;  {Disk is full}
  ecNotAssigned            = 102;  {File not Assign-ed}
  ecNotOpen                = 103;  {File not open}
  ecNotOpenInput           = 104;  {File not open for input}
  ecNotOpenOutput          = 105;  {File not open for output}

  ecWriteProtected         = 150;  {Disk is write-protected}
  ecUnknownUnit            = 151;  {Unknown disk unit}
  ecDriveNotReady          = 152;  {Drive is not ready}
  ecUnknownCommand         = 153;  {Unknown command}
  ecCrcError               = 154;  {Data error}
  ecBadStructLen           = 155;  {Bad request structure length}
  ecSeekError              = 156;  {Seek error}
  ecUnknownMedia           = 157;  {Unknown media type}
  ecSectorNotFound         = 158;  {Disk sector not found}
  ecOutOfPaper             = 159;  {Printer is out of paper}
  ecDeviceWrite            = 160;  {Device write error}
  ecDeviceRead             = 161;  {Device read error}
  ecHardwareFailure        = 162;  {General failure}


Other errors you may see refer to problems with the serial port, such
as parity, framing or overrun errors or errors during protocol
sessions. These include:

  ecNoMorePorts            = 2900;  {Can't open port}
  ecOverrunError           = 2901;  {UART receiver overrun}
  ecParityError            = 2902;  {UART receiver parity error}
  ecFramingError           = 2903;  {UART receiver framing error}

  ecBlockIncomplete        = 2920;  {Block shorter than requested}
  ecBufferIsFull           = 2921;  {No room for new char in buffer}
  ecBufferIsEmpty          = 2922;  {No characters to get}
  ecTimeout                = 2923;  {Timed out waiting for something}
  ecStringIncomplete       = 2924;  {String shorter than requested}
  ecStringOverrun          = 2925;  {String longer than 255}
  ecUserAbort              = 2926;  {User aborted during "wait"}

  ecBadPortNumber          = 8900;  {Out-of-range port number}
  ecOutofRange             = 8901;  {General out-of-range error}
  ecPortNotOpen            = 8902;  {Port not open}
  ecInvalidBaudRate        = 8903;  {Bad BAUD rate for this device}
  ecInvalidArgument        = 8904;  {General programming error}
  ecNoDevice               = 8905;  {No device layer installed}
  ecNotaUart               = 8906;  {Couldn't find a uart}
  ecInvalidParity          = 8907;  {Bad parity option}
  ecBadFileList            = 8909;  {No end of list marker found}




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 135




  ecInitFail               = 9900;  {init failed}
  ecInitCancel             = 9901;  {init was canceled on request}
  ecCancelRequested        = 9902;  {Cancel requested}
  ecDuplicateBlock         = 9903;  {Duplicate block received}
  ecSequenceError          = 9904;  {Wrong block number received}
  ecDirNotFound            = 9905;  {Directory not found}
  ecNoMatchingFiles        = 9906;  {No matching files}
  ecLongPacket             = 9907;  {Long packet received}
  ecEndFile                = 9908;  {End of transmitted file}
  ecHandshakeInProgress    = 9909;  {protocol handshake in progress}
  ecFileRenamed            = 9910;  {Incoming file was renamed}
  ecFileAlreadyExists      = 9911;  {Incoming file already exists}
  ecInvalidFilesize        = 9912;  {Ymodem header bad file size}
  ecInvalidDateTime        = 9913;  {Ymodem header bad date/time}
  ecUnexpectedChar         = 9914;  {Unexpected char during protocol}
  ecBlockCheckError        = 9915;  {Incorrect CRC/checksum received}
  ecNoSearchMask           = 9916;  {No search mask specified}
  ecNoFilename             = 9917;  {No filename specifed}
  ecAsciiReceiveInProgress = 9918;  {Ascii receive in progress}
  ecFileRejected           = 9919;  {Receiver rejected file}
  ecTooManyErrors          = 9920;  {Too many errors received}


The other possible codes are internal errors. If you see one of these,
please report it to me, including the sequence of commands or
operations that lead up to the error. In general the 7xxx class of
errors are recoverable and the program will continue, while the 8xxx
class of errors are "fatal".

  ecFieldRequired   = 7000; {field is required}
  ecBadFormat       = 7001; {bad format (number/date/time, etc.}
  ecOutOfRange      = 7002; {value entered is out of range}
  ecBlanksInField   = 7003; {field contains blanks}
  ecPartialEntry    = 7004; {field contains a partial entry}
  ecBadCharacter    = 7005; {field contains an illegal character}

  ecStringNotFound  = 7100; {search string not found}
  ecNotToScreen     = 7101; {cannot write output to screen}
  ecInvalidNumber   = 7102; {invalid number entered}

  ecBufferFull      = 7110; {edit buffer is full}
  ecLineTooLong     = 7111; {line too long, CRLF inserted}
  ecTooManyLines    = 7112; {max line limit would be exceeded}
  ecOverLineLimit   = 7113; {max line limit already exceeded}
  ecFileTruncated   = 7114; {file truncated}
  ecFileTooLarge    = 7115; {file too large to fit in buffer}
  ecNoBlock         = 7116; {block not marked or hidden}

  ecWinCoordsBad    = 8100; {bad coordinates specified}
  ecWinNotActive    = 8101; {window must be active}
  ecWinNotCurrent   = 8102; {window must be current}



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 136




  ecWinIsActive     = 8103; {window must be inactive}
  ecWinInaccessible = 8104; {stacked window not accessible}
  ecWinIsZoomed     = 8105; {zoomed window cannot be zoomed again}
  ecWinBadIndex     = 8106; {invalid header or hot spot index}
  ecWinNotSizeable  = 8107; {window must be sizeable}
  ecNoProcessor     = 8108; {no command processor is available}
  ecWinIsChild      = 8109; {operation is not valid on child window}

  ecNoPickItems     = 8200; {attempt to pick from empty list}
  ecBadPickOrient   = 8201; {invalid pick orientation}
  ecBadPickHandler  = 8202; {invalid pick command handler}

  ecHelpInvalid     = 8220; {invalid help file format}
  ecNoHelpForTopic  = 8221; {no help for specified topic}
  ecNoBoundHelp     = 8222; {pointer for help not registered}

  ecTooManyFields   = 8300; {too many fields in a entry screen}
  ecBadCoordinates  = 8301; {bad coordinates for a field}
  ecNotScrollable   = 8302; {virtual screen not allocated}
  ecNoFields        = 8303; {selector/entry screen has no fields}
  ecFieldNotFound   = 8305; {attempt to move to non-existent field}

  {reported by various units}
  ecNilPointer      = 8500; {nil pointer where one shouldn't be}
  ecBadParam        = 8501; {bad parameter to a procedure}



                COMMAND LINE SWITCHES

OzCIS provides several command line switches that can make using the
program, or debugging problems with on-line operations, much easier:

   /? or ?    - Display a list of available command line switches,
                then exit at once.

   /S         - Create a log file of the entire on-line session. The
                first time you log on after starting OzCIS, the file
                SESSION.LOG is created (overwriting any existing file
                with that name). All com-port activity is captured
                into this file as well as into the program itself. If
                you log off and then log back on later, without
                exiting OzCIS completely, the file is appended to.
                NOTE: session log file can get very large, especially
                if you do larger library scans, etc.; using this
                switch all the time is not a good idea.

   /M         - Force the use of monochrome video attributes. This
                switch is handy for those with mono video or laptop
                type displays connected to color video cards.




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 137




   /1         - Force a 1st Pass to be executed immediately upon
                startup.

   /2         - Force a 2nd Pass to be executed immediately upon
                startup.

   /X         - When used with either the /1 or /2 switch, forces
                the program to exit once the automated pass is
                complete. Otherwise ignored.

   /43 or /50 - Use 43-line mode on EGA or 50-line mode on VGA.


                COMMON QUESTIONS AND ANSWERS

Q. My system gets a little way into the Profile Configuration pass
   and stops. What's up?

A. The most likely problem is that you have the CIS config option
   "BRIEF Prompts" set to [NO]. The fix: log on manually and issue GO
   PROFILE. Select "User Profile", then "Terminal Settings", then
   "General Options", then item 2 ("BRIEF Prompts") and set this
   option to [YES]. Exit the area, saving your changes. Log off, then
   give the Profile Config pass command again.


Q. My system gets a little way into on-line processing and locks up,
   always in a different place, at 9600bps; at 2400 everything works
   fine. Bug?

A. The single most common cause of lockups at 9600bps and higher port
   speeds, for _all_ comm programs, is having a slow disk cache or
   other TSR or driver running that takes a lot of time processing its
   interrupts. This can include programs like Stacker and other
   runtime disk compression programs, EMS/XMS drivers, TSR's that sit
   on a regular interrupt like the clock-tick interrupt, etc. To find
   out if this is your problem, un-install as needed all TSR's,
   EMS/XMS device drivers, Stacker, etc., and run the program (it
   should work fine.) Then add back one driver or TSR at a time and
   retest, until you hit the one causing the problem. (Note: load
   order can also be important.) Consult the documentation for the
   TSR, driver or tool causing the problem, or contact that company's
   tect support line. Many disk cache and other programs have specific
   sections in their documentation on this problem, because it is so
   common.

   NOTE: DR-DOS 6.0's XMS driver has a known serious bug that can
   cause problems. DRI is aware of the problem and is supposedly
   working on a fix; until such time as a fix is generally available,
   do not use DR-DOS' XMS driver with OzCIS.




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 138




   One other MAJOR help: install a 16550AFN UART chip if you can. This
   kind of serial chip provides an internal 16-byte buffer than can
   eliminate the vast majority of such problems. OzCIS automatically
   detects and takes advantage of a 16550AFN is one exists. Consult
   your hardware vendor for more information.


Q. I just switched to the new Basic Services option; will this cause
   problems for OzCIS?

A. No. The changes to menus, etc., for Basic Services are transparent
   to OzCIS.


Q. The reported on-line costs by OzLOG don't come close to matching
   the reports I get when I do a GO BILL. Why?

A. OzLOG has no way to know which areas are free, which are part of
   Basic Services, and which are surcharged services. All it knows is
   how long you were on-line, and where. It therefore cannot adjust
   billing info to account for those increases or decreases in per-
   area costs. OzLOG is intended to be a simple helper to give you a
   general idea of your on-line time and billing, not as an accurate
   report; for an accurate report you should GO BILL.


Q. My CPS readings at 9600bps seem awfully low, often less than 300
   characters per second. Shouldn't 9600 access be much faster than
   this? What's wrong with OzCIS?

A. See the section on 9600 access above. OzCIS can handle data at
   any speed CIS will send it; the program is not slowing down CIS.
   CIS itself slows down when host computer and/or network traffic
   is high, and this slow-down is more appearent at 9600 than at
   2400. Review your 9600 access per the guidelines above - you may
   well find that using 9600 is not economical for your access
   patterns.


Q. My modem won't connect. I've juggled the init string, but it
   still balks. Why?

A. Different modems work differently; while the Hayes "AT" command
   set _style_ is pretty much universal today, there are a lot of
   variations. For example, some modems don't use the standard "ATZ"
   command to reset the modem, they add a numeric parameter such as
   "ATZ1". OzCIS allows flexibility in how you configure the modem.
   Here are some general tips:

   1) You can control whether OzCIS resets the modem on initialization
   via the "Reset Modem?" switch in the Host config. OzCIS resets the



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 139




   modem by sending the standard "ATZ"; if your modem needs something
   different, try turning off the auto reset and include the reset in
   the initialization string (see next.)

   2) OzCIS allows you to embed special characters for 1/2-sec delay
   (~) and carrage-return (|) in the init string. You should never
   _end_ the init string with the CR character, but otherwise it's
   acceptable to use in the string itself. For example, an init
   string might include a reset sequence, like so:

     ATZ1|~~~~AT\M3

   where the string resets the modem, waits 2 seconds and then sends
   the init string.

   3) Probably the most common error is to include a "DT" or "DP" (or
   just the "D" command) as part of the init string. Don't! OzCIS
   does it for you, so duplicating the command will usually confuse
   the modem.

   4) The second-most-common error is to confuse the init string as
   being just a reset string - in other words, putting only "ATZ" in
   the init string field. This also will confuse some modems.


Q. Everything works OK except for Forum downloads; I can't get the
   program to get past the "Lib xx" prompt. What can I do?

A. The most common cause of this is having the "BRIEF Prompts" option
   in the Profile Config area set to NO. The give-away on this
   problem is when OzCIS sends the "LIB 1" command, CIS sends back
   something like "LIB 1 - Customer Files !"; OzCIS expects the
   brief format prompt in response, which would be just "LIB 1 !"
   Another common mistake is prepending a 0 on a library number, so
   that OzCIS sends "LIB 01" but gets "LIB 1 !" back. To correct the
   brief prompts problem, perform a Profile Config pass.


Q. "Fast Logon" doesn't work, it hangs at the ^P... but it works OK
   when I call at 2400bps.

A. Fast Logon often does not work at 9600bps, because the CIS network
   swallows the following prompt at these high speeds. Never use
   Fast Logon at 9600bps.


Q. I can't find a way to make OzCIS always scan a library for new
   files each time I enter that forum. Can this be done?

A. Yes and No. No, because there is no way to do it 100% automatically
   from within the program. Yes, because you can easily create a



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 140




   script to scan your chosen libraries, and then install the script
   as the "Permanent Script" in the forum configuration dialogue. See
   TERMINAL.DOC for info on the script language and example scripts.


Q. I've grown accustomed to using RECON and TAPPET to manage my forum
   messages and threads, and scan headers. Can I use these tools
   with OzCIS? How about CATSCAN?

A. Yes to RECON and TAPPET, with a couple of notes. You can use
   RECON with OzCIS for all forum messages (sorry, not CISMail
   messages) by doing the following things:

   1) In the Pass Options window for the forums you wish to manage
   with RECON, set "Purge Type" to NEVER.

   2) Install RECON as an external program.

   3) Included in the OZCIS3.EXE archive are two files: RECONVRT.EXE
   and PARAMS.OZ. RECONVRT is a utility to convert RECON's outbox
   file (replies and new messages to be sent) to OzCIS' format; you
   will need to run this program on the outbox files before OzCIS can
   send them. Creating a batch file to do this is the easiest way.
   PARAMS.OZ is a special params file for RECON when used with OzCIS;
   you will need to edit it for your Name, User ID and path
   information.

   The message file format OzCIS uses, and its QS (quick-scan) headers
   file format, works fine with TAPPET. TAPPET's output files work
   with OzCIS. The only problem is file names; TAPPET expects TAPCIS
   filename conventions. To use TAPPET with OzCIS, you will need to
   create a batch file something like the following:

   rename *.mes *.msg
   rename *.qs *.qsn
   tappet /r
   rename *.msg *.mes
   rename *.thd *.get
   del *.qsn

   This renames all OzCIS received-message and QS-headers files to the
   names TAPPET expects, and runs TAPPET. It then renames the messages
   files back to OzCIS' names and renames the TAPPET output files to
   the names OzCIS expects, then deletes the now-unneeded QS headers
   file. If you have created separate directories for your forums, you
   will of course need to account for that in your batch file. Install
   this batch file as an "external."

   At this writing, CATSCAN has not been tested with OzCIS. I
   personally have no idea what would be required to make CATSCAN
   work with OzCIS.

                        # # #

  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 141


```
{% endraw %}

## README.DOC

{% raw %}
```

                      README for OzCIS  1.0 (10-Mar-92)
                  -----------------------------------------

OzCIS is copyright(c)1990, 1992 by Steve Sneed.  All rights reserved.

"GIF" and "Graphics Interchange Format" are Service Marks of CompuServe,
Inc., a H&R Block Company.  Other trademarks and service marks used herein
are the properties of their respective owners.


This README.1ST file details additions and corrections that occured too late
to be placed in the main documentation.  I recommend you print out a copy
and keep it with your main documentation.



System requirements to use OzCIS
--------------------------------

The following are minimum hardware and software requirements in order to
run and use the OzCIS Navigator:

  * A IBM AT-compatible computer (80286 or better processor, 10MHz or
    faster) or IBM PS/2 MicroChannel(tm) computer with a 286 or better
    processor, and at least 1Mb of memory.  A minimum of 485K of free memory
    must be available when OzCIS loads; 520K to 550K or more is strongly
    recommended.  Additionally at least 1Mb of EMS and/or XMS memory is
    strongly recommended.

    NOTE: The program *will not run* on XT-class machines.

  * A hard disk with at least 1.5Mb free.  This is a bare minimum; if you
    maintain a large number of forums you will need more.  Sorry, floppy
    disk systems are *not* supported.

  * If a mouse is used, the driver must be of recent enough vintage to
    support the "Save State" and "Restore State" services.  MS v. 6.0 or
    later, Logitech 4.01 or later, etc.

  * A serial port and modem.  Ports 1 thru 4 are supported for AT-style
    machines, and ports 1 thru 8 on PS/2s.  The modem must be a fully Hayes
    compatible model, including most high-speed modems such as US Robotics
    HST/V.32/Dual Standard models or the Microcom MNP-series models. A
    "direct-connect" option is available for those connecting thru modem
    servers or pools, but no support for network comm servers is provided.
    An error-correcting modem (MNP or V.42) is *strongly* recommended.

  * A method of connecting to CompuServe that provides a full 8-bit data
    path.  OzCIS uses only 8/None/1 port parameters; the network you use to
    connect to CompuServe must be capable of making such a connection.


The following points are recommended capabilities in order to use OzCIS to
its best abilities:

  * A mouse is not required, but using one makes several things a bit
    easier.

  * At least 1Mb of EMS memory is strongly recommended.  The program is
    heavily overlaid, and having EMS available for overlay storage will
    dramatically improve program response.

  * You can use OzCIS under DesqView or Windows.  In either case, you need
    to define a PIF file for the program.  In either environment, it is better
    to run full-screen rather than in a window, though the program will work
    fine when run in a window where enough processor power is available (in
    other words, running the program in a window is not recommended on a
    386sx-based machine or slow 386dx.)

  * While DOS 3.1 or later will work, DOS 5.0 is highly recommended since it
    gives you a good bit more memory to work in.  The program has not been
    thoroughly tested under alternative OS shells such as 4DOS, but
    preliminary testing shows no conflicts.

  * While any PC color video system will work for text or graphics in the
    program, to take full advantage of the program's graphics capabilities a
    SuperVGA system is recommended.  If your SVGA card has an available VESA
    driver, use it.  OzCIS does not at this time support Herc Graphics
    Workstation or other TIGA or Targa type cards other than in SVGA
    emulation mode.  The program supports UltraVision, and all high-res text
    modes such as 132-column and/or 43/50-line modes.

  * While not required, an error-correcting modem is highly recommended.
    Line noise is the dread enemy of automated online processing; an error-
    correcting modem eliminates most all potential problems in this respect.
    Most CompuServe nodes support MNP level 4, while only some suplimental
    carrier (TYMNET, TeleNet, etc.) nodes provide MNP.  In order to use a
    9600bps node your modem should be V.42bis compliant or MNP 4 compliant.


Caveats, warnings and known problem areas:

  * Some laptops and recent desktop machines use special ASIC (Application-
    Specific Integrated Circuit) chips for the serial port hardware rather
    than the traditional NS8250-style UART chip.  These ASICs have varying
    levels of compatibility with the NS8250-style chips; some are known to
    be real problem children, especially the ones used in the new Toshiba
    "SXe" series machines (I've talked to several people who can't get *any*
    of their comm software to work on these machines.)  Great pains have
    been taken to assure OzCIS works with as broad a range of hardware as
    possible, however, I cannot promise it will function correctly when used
    on this kind of hardware.

  * Some EMS managers tend to keep interrupts turned off for too long a
    time while performing internal work, causing characters to be dropped at
    the serial port and creating "Port overrun" errors.  The faster your
    port speed, the more likely this problem is to occur.  While recent
    changes to OzCIS have pretty much eliminated this problem, the chance
    exists that it can still occur with old or brain-damaged EMS managers,
    especially when such drivers are used with some disk caching software. If
    you get port overrun errors, especially at 9600bps or above, try
    uninstalling your EMS driver and repeating the test; if this cures the
    problem you have one of these slow drivers and/or disk caches.



Quick-Start Information
-----------------------

I recognize that many users will want to get started right away.  I also know
that many people refuse to read documentation, often with good reason.  These
"Quick-start" instructions will help you get up and running in a minimum
amount of time and effort.   Note however that what is covered in this
section is aimed at experienced CIS users, assumed to have at least a basic
knowledge of CIS, the common terminology used on the Service, what a
navigator program is designed for and supposed to do, and troubleshooting
techniques for program installation and modem configuration.

1.  Create a subdirectory for OzCIS and its support files.  Copy all of the
    compressed program files into that subdirectory and unpack them. To save
    yourself disk space, copy the compressed files to a floppy disk for
    safekeeping and delete the compressed files from the program directory.
    Users of other navigator programs note: do *not* install OzCIS in the
    same directory as ATO, TAPCIS or CISOP.  OzCIS creates or uses several
    files with the same names as these other programs; while OzCIS should
    never "bomb" on files from one of the others and can easily read or deal
    with several of them, the files it creates can cause problems for these
    other programs.

2.  Run OzCIS.  The install package includes example HOSTS.DB and FORUMS.DB
    database files; you will need to select "Special -> Maintain Hosts" and
    add or edit one or more hosts for your connection number(s) to CIS, then
    select "Maintain Forums" from the same menu to add your forums.  The
    online help (press <F1> anywhere in the program) will provide enough
    information for most users familar with CIS to set up these areas, but
    consult the full documentation if you need extra information.

3.  Your first online session should be a Profile Configuration session.
    Select "Online -> Profile Configuration" to do so.  This process logs on
    to CIS and sets up your configuration options so that OzCIS works best.
    If you have defined multiple hosts for different baud rates, you will
    need to perform a Profile Configuration pass at each baud rate.

4.  If you have used TAPCIS or ATO, and your profile is set up for those
    programs, it will also be acceptable to OzCIS; however, you will not be
    able to take full advantage of the program's ability to display GIF
    graphics images online.  Performing a Profile Configuration pass will set
    things up so that GIFs (such as the Weather Maps area) can be properly
    managed.  Note that TAPCIS and ATO do not support online graphics, and
    turning on this capability for OzCIS may cause problems for those
    programs.

5.  Use the program.  Enjoy!



Late Additions
--------------

The following capabilities or enhancements were added to the program at the
last minute, and didn't make the documentation.

  Extra clipboard commands
  ------------------------

  Two new key commands have been added for clipboard copy and paste, which
  match the equivilent key commands in the new WordStar 7.0:

  ^K[  - Copies the currently-marked block to the clipboard.  Same as the
         existing ^JC command.

  ^K]  - Pastes from the clipboard to the current cursor location.  Same as
         the existing ^JP command.


  Upload ASCII files to Mail
  --------------------------

  Beta versions of OzCIS could only upload files to CISMail as binary files,
  which meant text files could not be uploaded to Internet addresses.
  Support for ASCII file uploads has been added, to allow this type of use.
  There is a new field in the "Upload File to Mail" dialogue:

  Binary?  [Y]       (N)

  If YES (the default), the specified file is uploaded as a binary file, in
  the normal manner.  If set to NO, the file is uploaded as an ASCII file.
  Warning: Neither OzCIS nor CIS does any checking to verify file contents,
  so if you mistakenly upload a "real" binary file (a program file,
  compressed archive, etc.) as an ASCII file, it's contents will be garbaged
  and useless to the recipient.  In general, never set this to NO unless you
  are _sure_ it is what you want.



Acknowledgements
----------------

My heartfelt appreciation and thanks go to these fine people and
organizations, without whom OzCIS would still be a pipe dream:

o  TurboPower Software and its staff (Kim Kokkonen, Brian Foley, Rich
   Sadowsky and Terry Hughes) for providing exceptional tools on which to
   base the program, consistent feedback and ready support... and for being
   understanding employers and co-workers...

o  The IBMNet Forums staff, especially Don Watkins and Connie Kageyama, for
   putting up with months of "This is a test, please ignore" messages and
   files, and providing much helpful information and encouragement...

o  The Rocknet Forums staff, especially Mark Oldham, for giving me a whole
   backroom of my own to develop and debug the sysop services, and listen to
   my belly-rumblings...

o  The Graphics Forums staff, especially Larry Wood, Valerie Zen, Tom
   Potoki, Jim Beebe and Chris Young, for years of help, support and
   encouragement on the online GIF decoder tools...

o  Many helpful individuals at CIS Corporate, especially Russ Ranshaw, Brion
   Jones and Paul Bradshaw, for tons of helpful insights and info...

o  The beta testers, too many to name, who beat the program up unmercifully
   and never hesitated to let me know what broke, and who in reality made
   the program what it is with their numerous ideas and suggestions...

o  My wife Robin, ever the loving Computer Widow, and my daughters Whitney
   and Caitlin, who didn't pester Daddy *too* much.


<eof>

```
{% endraw %}

## TERMINAL.DOC

{% raw %}
```




                File: TERMINAL.DOC -- OZCIS' TERMINAL MODE

This section details use of the Online Terminal facility.


                THE ONLINE TERMINAL

While OzCIS works hard to automate your online chores, there will
always be times when you need to do something manually while connected
to CIS. OzCIS provides you with a manual terminal, similar in many
ways to other general-purpose communications terminal programs, to
make these chores easier. The manual terminal also provides several
special tools that can make accessing CIS in manual mode easier and
faster.

Some highlights of the manual terminal:

o   Access to your list of forums, and a quick method of selecting a
    forum from the list and GO-ing to that forum.

o   Access to your Address Book.

o   The ability to execute scripts from within the terminal.

o   The ability to capture incomming data to a file.

o   A 400-line scrollback buffer that lets you "look back" at data
    that has scrolled off the screen.

o   A "Split-screen" mode which makes conferencing and "chats"
    easier and faster.


                ACCESSING THE MANUAL TERMINAL

There are two ways to access the manual terminal: while on-line in
automated mode via the Alt-S or Alt-T commands, or from the main menu.

When on-line in automated processing mode, pressing Alt-T tells OzCIS
to complete processing the current area (Mail, Forum, etc.), then
enter manual mode. Pressing Alt-S in that situation tells OzCIS to
complete ALL automated processing before entering manual mode.

When you're not on-line with CIS, access to the manual terminal is via
the ONLINE > MANUAL TERMINAL menu option. When you select this option,
a submenu pops up in which you can choose to have OzCIS log on to CIS
for you before entering manual mode (AUTO LOGON), or enter manual mode
directly (MANUAL).






  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 142




                USING THE MANUAL TERMINAL: THE CIS SIDE

Once in manual mode, any text you enter via the keyboard will be sent
to the modem, and any data received will be displayed. Certain keys or
characters act as special commands to CIS. (The following information
is taken from the CIS "General Help" area.)

Every command must end with a carriage return. Pressing the carriage
return key (which may be marked ENTER on some keyboards) transmits the
command to CompuServe.

In on-line information, the carriage return key is represented by the
symbol <CR>. Pressing <CR> at the end of an article returns you to
the previous menu.

 T - TOP menu page
 M - previous MENU
 H or ? - HELP
 GO word or GO page - GO directly to a service
 FIND topic - FIND all references to topic
 OFF or BYE - sign off
 S n - SCROLL from n
 R - RESEND a page
 F - FORWARD a page
 B - BACK a page
 N - display NEXT menu item
 P - display PREVIOUS menu item
 SET option - SET terminal option
 PER - exit to Personal File Area

SCROLL allows you to to enter lists and/or ranges of menu selections.
The ALL or SCROLL ALL command displays every choice on the current
menu, including multiple page menus.

 Examples:
   !  ALL
   !  SCROLL ALL

Multiple menu selections are valid. Menu choices can be entered as a
list or a range, or any combination of the two. The same selections
arguments are valid with the SCROLL command.

 Examples:
   !  1,2,3  and  !  S 1,2,3
   !  5-9    and  !  S 5-9
   !  9-5    and  !  S 9-5
   !  1,3-5  and  !  S 1,3-5
   !  3-5,1  and  !  S 3-5,1






  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 143




CONTROL CHARACTER COMMANDS

NOTE:  These commands are entered by pressing two keys together:
       the Control key and a letter key.

 Control C - Stops the program being used.

 Control O - Discontinues the flow of information to your computer
             or terminal without stopping the current program.

 Control S - Immediately suspends output from the host computer.

 Control Q - Resumes output at the point where it was interrupted by
             Control S.

 Control U - Deletes the line you currently are typing.


COMMAND SUMMARY

Most CompuServe commands can be abbreviated to uniqueness. One letter
is sufficient in most cases. (Exceptions are FIND, SET, PER, EXIT, OFF
and BYE.) Terminate all commands with a carriage return (which may be
marked ENTER on some keyboards and is represented on-line as <CR>).

On the following pages, you will find a listing of commands with their
respective descriptions to assist you in using CompuServe.

T - TOP
  Goes directly to the first page (TOP) of CompuServe.

M - Menu
  Goes back to the menu page that points to the current page. A single
  <CR> will also return to the last menu if there isn't a next page.

H or ? - HELP
  Displays this information. Other HELP messages area available
  within specific services.

GO word or GO page - GO directly to a service.
  Takes you immediately to the service identified by word or page.

  "word" is any Quick Reference Word, as in GO WEATHER or GO TRAVEL.
  To display a list of these words, enter GO QUICK.

  "page" identifies a specific page (screen display) by database name
  and page number, as in GO HOM10. The database name by itself
  identifies the first page of the database (for instance, GO HOM is
  the same as GO HOM1). The page number by itself identifies a page
  in the current service.




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 144




S n - SCROLL n
  SCROLLs remainder of an article, displaying pages continuously
  without pausing. At a menu, S n selects item n and scrolls through
  all the pages for that item. Please note that a space is required
  between the S and item n.

B - BACKWARD
  Returns to the page preceding the current page.

R - RESEND
  RESENDS the current page. This is useful if the current page has
  scrolled off the screen or after a HELP command.

FIND topic
  Finds all index references to a topic and displays a menuized list
  with corresponding page numbers.

N - NEXT
  Goes to the NEXT item from last selected menu. If 5 was the last
  choice, N will display item 6.

P - PREVIOUS
  Goes to the PREVIOUS item from last selected menu. If 5 was the last
  choice, P will display item 4.

F - FORWARD
  Displays the next page in a series of pages. A single <CR> will do
  the same thing.

PER or EXIT
  EXITs to the Personal File Area. From some subsystems, EXIT takes
  you to the previous menu.

OFF or BYE
  Disconnects you from CompuServe immediately.


 CONTROL CHARACTER COMMANDS

Control characters transmit special commands to the host computer.
These commands are entered by pressing two keys together: the Control
key and a letter key.

Control C
  Stops the program you are using. You then can type another menu
  selection or command. ^C is displayed on your screen.

Control O
  Discontinues the flow of information from the host computer.
  Entering a second Control O turns the display back on at a later
  point in the transmission. ^O is displayed on your screen.



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 145




Control S
  Immediately suspends output from the host computer.

Control Q
  Resumes the running display of output at the point where it was
  interrupted by Control S.

Control U
  Deletes the line currently being typed. ^U is displayed.

For additional assistance type GO INSTRUCTIONS.


                A LOT TO LEARN...

Detailing all of the available CIS menu options, and for that matter
the dozens of available command words, would take a book. Such books
are available! CompuServe sells a guidebook to the service, and third-
party authors have written several exellent books on the subject. (My
personal recommendation is David Peyton's GETTING THE MOST OUT OF
COMPUSERVE.) Some of these books are available from your local
bookseller, and CIS also provides an area (GO ORDER) where you can
order books to be sent directly to you and charged to your CIS
account. If you are a novice CIS user, one of these books will prove
invaluable.


                USING THE MANUAL TERMINAL: THE OzCIS SIDE

Whenever you are in manual mode, a menu is available at the top of the
screen. You can access this menu with the mouse, or press F10 to
select the menu in general. You can also select specific menu options
via these commands:

ALT-C    Capture

  Captures all incomming data to a file. You are prompted for the file
  name. This command is a "toggle"; selecting it once turns capture
  ON, and selecting it again turns capture OFF. A status flag next to
  the "Capture" menu item keeps you informed of the state of capture.

ALT-E    Externals

  Gives you access to the external programs you have defined. An
  external can be run any time, whether or not you are connected to
  CIS. Note that running an external program that accesses the serial
  port for your modem may cause an existing connection to be broken
  unless the program was specifically designed for that purpose.




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 146




ALT-S    Script

  Allows you to execute an OzCIS command script you have created.
  See below for more information on scripts.

ALT-V    View       (alternate key: PgUp)

  Displays the Scroll-Back Buffer.

ALT-A    AddressBook

  Provides access to your AddressBook. This access is display-only;
  you cannot currently add or edit Address Book entries when in
  manual-terminal mode.

ALT-O    Other

  This command brings up a submenu of services. What that submenu
  contains depends on whether or not you are in Conference (split-
  screen) mode.

In normal manual mode, the options are:

    LOG ON  - If you are not already connected to CIS, dials the
              current Host and logs on.

    LOG OFF - If you are currently connected to CIS, logs off and
              breaks the connection.

    ENTER   - Presents the list of your defined forums for the current
              Host. Selecting a forum in this list causes OzCIS to
              issue the proper GO command to enter that forum.

    GO      - GO to a service. You are prompted for the service
              page name. Can be a forum or non-forum service.

    CONF.   - Enters Conference (split-screen) mode.

In Conference mode, the options are:

    WIDTH   - Set the wordwrap width for the split-screen "input"
              line.

    NORMAL  - Return to normal manual mode.


ALT-X    Exit

  Exit manual mode. If you entered manual mode via the Alt-T command
  while performing automated processing, OzCIS will continue automated
  processing where it left off. If you entered manual mode via the



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 147




  Alt-S command or via the ONLINE > MANUAL menu option, OzCIS will log
  off of CIS (if connected) and return to the main menu screen.


                A WORD ABOUT ON-LINE MODES...

When you do a Profile Configuration pass in OzCIS, one of the general
configuration options it sets up is the "access mode" used in the
forums. CIS supports two primary modes of access operation in the
forums: menu and command. OzCIS sets things up for command mode, which
allows it to operate much faster... but command mode can be very
intimidating for the CIS novice, because it requires you to remember
all the special forum commands in order to do anything.

But, if you can remember just one command, getting into menu mode is
simple - and from there, accessing all of the forum's services is
easy. The command is:

  OP;MODE MENU;S

Type this command at the "Forum !" prompt when you first enter the
forum and press <Enter>. This puts you into menu mode for that session
only; once you leave the forum your setup will be restored to command
mode so that OzCIS' automated capabilities will continue to work
correctly.


                CONFERENCE (SPLIT-SCREEN) OPERATION

This facility makes real-time conferencing much easier. The screen is
split into two areas, the "received data" area and the "input" area.
Text received from CIS is displayed in the main (upper) window. Text
you type is displayed in the input area at the bottom of the screen.
If the text you type exceeds the wordwrap length you have specified,
OzCIS automatically wraps the text to the nearest word boundary,
appends an elipsis (the "..." symbol that means "more to follow", an
accepted convention on all CIS conferences), and sends the text to
CIS. To send a shorter line of text, press <CR>. Note that a small
arrowhead in the line separating the two windows shows you where the
current wordwrap point is set.

The input area acts as a line editor, with several of the same
commands you are by now familar with in the various OzCIS dialogs,
and a couple that are new. The available commands are:

LEFT   - Move the cursor left one character
^LEFT  - Move the cursor left one word
HOME   - Move the cursor to the start of the line
RIGHT  - Move the cursor right one character
^RIGHT - Move the cursor right one word
END    - Move the cursor to the end of the line



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 148




DEL    - Delete the character at the cursor
BACKSP - Delete the character to the left of the cursor and move the
         cursor left one space
INS    - Toggle between Insert and Overwrite mode
PG UP  - Display the scrollback buffer
F10    - Access the top menu

                A WORD ABOUT CONFERENCING...

CompuServe makes real-time conferencing among many users easy. But
as with any group of people talking together, common courtesy and a
few simple rules of the road go a long way toward making the
experience an enjoyable one. The PRACTICE forum keeps a list of
information on conferencing rules, etiquette and commands; reviewing
the information will help you understand conferencing and enable you
to participate faster and more effectively. (For more information on
the PRACTICE forum, see MISC.DOC.)

There are two general catagories of conference: "formal" and
"informal". Formal conferences are usually planned offerings by forums
or other services, with a guest speaker or speakers and a moderator
whose job is to keep the conference running smoothly.

This type of conference may be held in a forum's conference area, or
may be held in the special CIS Conference Center (GO CONFERENCE). In
formal conferences, no one "speaks" until he or she is recognized by
the moderator, at which time he or she enters the statement or
question. To signify that you want to ask a question, enter a single
question mark (?); to let the moderator know you want to make a
statement, use a single exclamation mark (!). The moderator will
recognize each questioner in turn. The Conference Center area
maintains a list of formal conferences scheduled to be held in the
Center, but does not keep track of conferences held in forums.

Informal conferences are friendly free-for-alls, held in a forum's
conference rooms. Everyone "talks" at once, and often there are a
dozen or more conversation threads rolling by on the screen; keeping
up with the chatter can be an enjoyable challenge. Many forums have
regularly-scheduled periodic informal conferences, while others almost
never have conferences or only have announced conferences for specific
purposes. Usually the forum's Conference announcement will list the
time and day for any regular conference, and/or show a schedule of any
planned formal conferences.











  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 149




                      OzCIS SCRIPT LANGUAGE

OzCIS' script language is simple but powerful. The rules:

1) Blank lines, and line beginning with a semicolon (;) are ignored.
   Leading spaces are acceptable.

2) Commands are single words of two or three characters. You can
   spell out the command if it's easier for you; e.g. the "SEN"
   command can be written as "SEND" or "SENDTEXT" or whatever you
   like as long as the first characters match the chars of the
   command.

3) Each line can contain one and only one command, plus any parameters
   that command allows or requires. No parentheses or other delimiters
   are used.

4) Commands that take text strings as parameters *require* either
   single- or double-quotes as delimiters. If you need to use a
   control character in a string, use standard carat notation (i.e.,
   Control-C would be ^C, etc.) and make sure the ^char is unquoted;
   for example to send two strings with a carrage return between and
   after, you would send:

   SEN "This is the first string," ^M "and this is the second." ^M

   If you prefer, you can denote special characters using C-like hex
   notation; an unquoted lower-case "x" followed immediately by two
   hex digits will be interpreted as a single char of that ASCII
   value. Example using the same string as above:

   SEN "This is the first string," x0D "and this is the second." x0D

   WARNING: NEVER send high-bit characters this way! Any hex char
            should be x7F or less. Also, you should not prepend a zero
            (i.e., x0D is legal, 0x0D is not.) Lower-case alphas in
            hex numbers are acceptable.


SCRIPT LANGUAGE COMMANDS

  SEND    - Sends all following text as a string. Control chars can
            be embedded using normal carat notation. This command
            waits for the sent string to be echoed at the port before
            continuing.

  LSEND   - Like SEND above, but automatically adds a <CR> to the end
            of the string.

  USEND   - Unconditional Send; like SEND above but does not wait for
            sent-text echo. This one should be used wherever you may



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 150




            not see the sent text echoed, such as at the "Password:"
            prompt or when sending the ^C at network logon.

  ULSEND  - Like USEND above, but adds a <CR> to the end of the
            string.

  WAIT    - Waits for a char or string to be received. If the string
            must contain control chars, use carat notation. There is
            a fixed limit of 250 chars to wait for, though the
            smaller the string the better to improve speed and reduce
            potential for line hits and other errors causing a match
            to "miss".

  GO      - GO to a CIS service page. This will GO to any CIS service
            page, whether it is a forum or some other service. NOTE:
            other script commands that logically only work in a forum,
            such as the SL command below, will not work when you have
            used the GO command to enter the forum; for these forum-
            only commands to work you must have used the ENTER command
            to reach the forum.

  ENTER   - Like GO, but specifically for forums. The processor deals
            with ENTER differently from how it deals with GO; GO makes
            no effort to determine what kind of CIS service area you
            are going to, while ENTER processes forum entry just like
            the normal on-line processor, and expects the proper forum
            entry prompts to be received. Some other script commands,
            like the SL command below, require ENTER to be used to
            enter the forum before they will work.

  CAPTURE - Control capturing of data to a file. This command takes
            different parameters depending on use: to open a capture
            file, use a first param of "ON", and a second param of the
            filename. Opening a capture file appends to any existing
            file of the same name; to force an overwrite, add a "/O"
            as a third param. To close a open capture, use a parameter
            of "OFF". Issuing an "ON" command automatically closes any
            open capture file before performing the "ON" command. See
            the example scripts below for details.

  ERASE   - Erase an existing file. Provide a filename.

  TIMEOUT - Set the number of seconds the program will wait during a
            WAIt command before timing out.

  DELAY   - Delay the number of system timer tics specified in the
            parameter. Ignored if no parameter provided. Note this is
            TICS, not SECONDS; there are approx. 18 tics per second,
            so a 2-second delay would use a parameter of 36.





  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 151




  DOS     - Shell to DOS. If a parameter string is provided, executes
            that string as a DOS command or program to exec. Properly
            saves and restores the port around the shell, so you can
            execute other comm programs from within the shell. Uses a
            "swapping" shell, so you will have all but about 5K of
            your normal free RAM available.

  RUN     - Run a "sub-script". Once the sub-script is done, returns
            to the "parent" script at the point of subscript execution.

  TERM    - Enter "Manual terminal" mode. Press <Esc> or select "Exit"
            from the Terminal menu to return to script processing.

  GIF     - Sets the program's internal GIF capture file name for the
            next time an on-line GIF view/capture is performed. Since
            there are many places and ways GIFs can be viewed on-line,
            this command simply tells the program to 1) use this name
            on the next GIF capture, and 2) don't pause after capture
            is complete. The internal GIF capture file name is cleared
            each time a GIF is captured, so you will need to use this
            command before each capture.

  GWM     - Get Weather Map. A special GIF view command, used only in
            the AWM (Acu-Weather Maps) area of CompuServe. Since AWM
            has a complex structure with several possible prompts
            depending on map number, this command covers the whole
            base for you. Once you have issued a "GO AWM" in your
            script, just add a "GWM <map#> <region#>" line for each
            map you wish to capture (see example below.) Map files are
            named "MAP#.GIF" where "#" is the map number.

  SL      - "SCANLIB LONG" command; special command to ease scans
            processing.

            Syntax:
              SL [lib numbers] {modifiers} {/U}

            "[lib numbers]" is a string of comma-delimited numbers for
            the libs you wish to scan. "{Modifiers}" are any special
            CIS sub commands for lib scans you wish to use, like
            "/AGE:xx". "{/U}" tells OzCIS to save the scan file as an
            Update file rather than a main catalog file, which will
            then be merged into the main file at the next opportunity.
            OzCIS goes thru the libs specified, issuing a "DIR *.*
            /DES" command with any provided modifiers appended. All
            parameters except the lib numbers should be quoted. if
            the /U switch is used, it *must* be the last parameter.

            Example:
              SL 1,2,3,7,10 " /USER /AGE:10 /U"




  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 152




  DL      - Download Library file. Useful only in forums, as a simple
            method of downloading one or more files from forum
            library(s).

            Syntax:
              DL <lib#>;<CIS filename>;<local filename>

            <Lib#> is the number of the library where the file is
            stored. <CIS filename> is the name of the file to be
            downloaded as it is stored on CIS. (note that this field
            can include a PPN to accomodate ambiguous file names
            within a library.) <Local filename> is the name for the
            file on your local storage. All fields are required, as
            are the separating semicolons. You must be in the forum of
            choice, but do not have to be in the correct library.

            Examples:
              DL 9;OZCIS1.EXE [70007,3574];OZCIS1.EXE
              DL 6;OPRO.BRO;E:\DNLDS\OPRO.BRO

  BREAK   - Sends a BREAK signal out the port. Handy for some
            specialty type logon scripts to connect to modem servers,
            etc.

  WRITE   - Writes text parameter(s) to the screen.

            Example:
              SET $1 "Steve Sneed"
              WRITE "Welcome to OzCIS, " $1 "!" ^M^J

  LWRITE  - Like WRITE but uses appends CR/LF to string.

  CLS     - Clear the screen.

  WMH     - Writes a "fake" Mail Message Header to the capture file.
            This capability makes it possible for scripts to capture
            text info, such as weather reports, to the CISMAIL.MES
            file for easy reading. WMH only writes the fake header;
            you are responsible for opening and closing the file.

  JUMP    - Jump to a label in the script. Unconditional branch; the
  (GOTO)    flow of execution never automatically returns to the jump
            point.

  GOSUB   - Jump to a label, with the intention of returning to the
            jump point. Must be matched with a RETurn command
            somewhere after the jumped-to label unless an END or FAIL
            command in issued in the jumped-to block. GOSUBs can be
            nested up to 255 levels.





  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 153




  RETURN  - Return to the jump point of the associated GOSUB.

  ONERROR - Set a label to be automatically jumped to when an error,
            such as a wait timing out, occurs. If no such error label
            is assigned, the script aborts. Example syntax: "ONERROR
            ErrorPoint"

  END     - Terminate the script. Performs a clean termination of the
            script processor and returns a "success" status to
            following code. *ALL* scripts should have either an END or
            FAIL command to assure proper termination of the script.

  FAIL    - Terminate the script. Performs a clean termination of the
            script processor and returns a "failed" status to
            following code. This would be useful in logon scripts to
            indicate the connection could not be made, so that
            subsequent on-line processing was not performed.

  SET     - Sets one of the ten available string or integer variables.
            Note that literal values assigned to numeric variables
            must still be enclosed in quotes. The string variables are
            accessed by a dollar sign ($) followed by a number 0 to 9,
            and the integer variables are accessed by a pound sign (#)
            followed by a number 0 to 9.

            Examples:
              SET $1 "This is string variable #1"
              SET #0 "10"

  INC     - Increments a integer variable. Default increment is 1.

            Examples:
              INC #1       {increments int var 1 by 1}
              INC #1 "10"  {increments int var 1 by 10}

  DEC     - Same as INC but decrements rather than increments.

  IF      - Compares two variables or literals, performs following
            action if the comparison is true.

            Examples:
              IF $1 = "LIB 0 !" jump LoopDone
              IF #1 <> "10" jump DoScan {"!=" can be used for "<>"}
              IF #1 <= #2 Fail

  PROMPT  - Request input from the user and places that input in a
            variable you designate.







  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 154




            Syntax:
              PROMPT {var} {prompt txt}

            Examples:
              PROMPT $1 "Which ENS Folder to view?"
              PROMPT #1 "Which library to scan?"

  UPCASE  - Forces a string variable to all uppercase, to simplify
            some compare operations.

            Example:
              PROMPT $1 "Do you want to abort? (Y/N)"
              UPCASE $1
              IF $1 = "Y" Fail


Here's an example script that can be used for LOGON.SCR to log on to
CIS via a CIS Net node.

;Example for LOGON.SCR for CIS Net node
;first, delay 2 seconds (36 tics) to let node "settle"...
  Delay 36

;send a <CR> to wake things up...
  send ^M

;wait for the "Host:" prompt and respond...
  wait "Host:"
  lsend "CIS"

;wait for the "User ID" prompt...
  wait "User ID:"

;all done!
  end


This is a more complex script that uses most of the script commands.
It can be run from the "Custom Pass" option of the "Online" menu, and
will grab the current weather reports for the Colorado region and a
couple of GIF weather maps, displaying the GIF maps as it downloads
them.

    ; **Example script to get weather information**
    ;first, set up an error handler
  ONERROR ErrorHandler

    ;initialize a counter for later
  set #1 "1"

    ;now, go to the general WEATHER area...



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 155




  CLS
  LWrite "--- Processing script to capture weather information ---"

  GO WEA-1

    ;request State Summary (SS) report for Colorado...
  lsend "SS CO"

    ;jump to the subroutine that performs the capture...
  gosub CapWeather

    ;see if the user wants the Extended Forcast as well
  PROMPT $1 "Do you want the Extended forcast as well? (Y/N)"
  UPCASE $1
  if $1 = "N" goto SkipEF

    ;request Extended Forecast (EF) report...
  lsend "EF CO"

    ;capture the report...
  gosub CapWeather

    ;our label to jump to if the user wanted to skip the EF report
SkipEF:

    ;see if the user wants the Extended Forcast as well
  PROMPT $1 "Do you want the Weather Maps? (Y/N)"
  UPCASE $1
  if $1 = "N" goto SkipMaps

    ;now, go to AWM and get maps. First set timeout to 180 secs...
  timeout 180
  GO AWM

    ;use the GWM (GetWeatherMap) command to get some weather map GIFs
    ;the GWM <#> <#> command is only for use in AWM!!!
    ;get map #3, Satelite photograph...
  gwm 3

    ;get map #7, regional review, for region #6 (southwest)...
  gwm 7 6

SkipMaps:

    ;now drop into terminal mode...
  Terminal

    ;complete, end script processing
  End

    ;subroutine to capture weather info



  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 156




CapWeather:
  timeout 30

    ;open the capture file, in this case the normal CISMail file
  capture ON CISMAIL.MES

    ;if we're on the first loop thru this subroutine, write a fake
    ;mail msg header so we can find the report
  if #1 = "1" WMH

    ;increment the counter variable so we skip the header next time
  inc #1

  wait "ID:"
  capture OFF
  send ^M
  wait "choice!"

    ;go back to the main script
  return

ErrorHandler:
  Off
  Fail


This simple script will update the Forum Names List file (OZCIS.FN)
without having to perform a complete Profile Config pass. You would
run this script from the ONLINE > CUSTOM PASS menu item.

  ;go to the INDEX area
  go INDEX

  ;ask for listing
  lsend "1"
  wait ":"

  ;ask for all forum names
  lsend "FORUMS"

  ;capture the resultant listing
  timeout 0
  capture ON OZCIS.FN /O
  wait "PAGE!"
  capture OFF
  timeout 300
  END

                            # # #





  ------------------------------------------------------------------
  OzCIS 1.0  Copyright 1992 Steve Sneed                     Page 157


```
{% endraw %}

## UTILS.DOC

{% raw %}
```

    UTILS.DOC - Utility program documentation for OzCIS 1.0
    -------------------------------------------------------


(Note: in the "Syntax" entries below, a command line parameter
 surrounded by curly braces {} is considered an optional parameter,
 while those surrounded by square brackets [] is considered a
 required parameter.)


                                OZLOG

OzLOG is a utility to parse a OzCIS activity log and display a
report on online access times and connect charges.

OzLOG is a very basic tool; it only has knowledge of how much time
was spent online and what connect charge rates you have provided
it.  It does *not* know what services are surcharged, what services
are free, whether you are a Basic Services or Extended Services
subscriber, Executive Option user, etc.  While its online time
reports are accurate, you should not consider its costs reports to be
anything more than a approximation - for accurate billing
information, "GO BILL" while online.

Syntax:
  OZLOG {log file name} {/R}

Operation:
  If no log file name is provided, OZLOG assumes the current month's
  log in the current directory; if you want a past month's report or
  your log files exist in a different subdirectory, you must provide
  the full path name to the file.  (OzCIS activity logs are named
  MMM-YY.LOG, where MMM is the month (such as MAR for March) and YY
  is the last two digits of the year.)  OzLOG should be stored in
  and run from the same directory as OzCIS itself, as it needs
  access to the HOSTS.DB and OZCIS.RAT files.  If the /R switch is
  used, OzLOG doesn't process any log file; instead it allows you to
  create or edit the rates information it will use.  You can have
  the report sent to a file or the printer using normal DOS
  redirection (adding ">PRN" to the end of the command line to send
  the report to the printer, for example.)

---------------------------------------------------------------------


                               CVTADDR

CVTADDR is a utility to convert a TAPCIS 5.2 or later format address
book file (USERID.CIS) to OzCIS format.  This program can save you a
substantial amount of time when converting from TAPCIS to OzCIS.

CVTADDR will normally convert all USERID.CIS entries to OzCIS format
properly.  However, there are many possible combinations and types
of address information, so I cannot guarantee 100% conversion.  The
OzCIS ADDRBOOK.DB information is stored as a text file, loadable
into any text editor (such as the General Editor in OzCIS itself),
so it is a good idea to review the file in an editor after
processing and correct any potential incomplete entry conversions.
The format of the ADDRBOOK.DB file is discussed in the CISMAIL.DOC
file in the main OzCIS documentation.

Syntax:
  CVTADDR {no parameters}

Operation:
  Run CVTADDR in the directory where the USERID.CIS file is stored.
  A new ADDRBOOK.DB file will be created in that same directory.  If
  an ADDRBOOK.DB file already exists in that directory, the newly
  converted entries will be appended to it.

--------------------------------------------------------------------


                              SORTADDR

SORTADDR sorts your address book alphabetically.  If the "Name"
field in the address entry contains a recognizable name format such
as "Tom Smith", sorting will be on last name, otherwise sorting will
be on the name as a whole.

Syntax:
  SORTADDR {addrbook file path}

Operation:
  If no name is provided on the command line, SORTADDR assumes the
  current directory holds ADDRBOOK.DB.  If ADDRBOOK.DB is found, it
  is sorted on the listed criteria.

---------------------------------------------------------------------


                              CATSPLIT

CATSPLIT takes a long-format catalog file that contains the listings
for multiple libraries in one forum (such as the full catalog files
many forums provide) and splits it into the separate by-library
files OzCIS expects.

Syntax:
  CATSPLIT [catalog file]

Operation:
  CATSPLIT takes the file provided and splits it as outlined above.
  The catalog file name must be provided, including extension. It
  assumes that the name part of the filename provided is the same as
  the OzCIS "GO word" for the forum (i.e., IBMCOM.CAT for the IBMCOM
  forum.)  CATSPLIT creates separate files with the OzCIS-format
  .Lxx extension.  If files of that name exist they are overwritten.
  The original catalog file is left intact.

---------------------------------------------------------------------


                              RECONVRT

RECONVRT converts a Recon/TapCis-format .SND outbox file (messages
waiting to be sent online) to OzCIS' .REP format.  This allows Recon
to be used with OzCIS.  See MISC.DOC in the OzCIS main documentation
for details on using Recon and TappeT with OzCIS.

Syntax:
  RECONVRT [input path{.SND}] {output path}

Operation:
  If no output path is provided, RECONVRT uses the same filename as
  the input path with an extension of .REP.

Note:
  Also included here is a special parameters file for Recon called
  PARAMS.OZ.  You must edit this file in a text editor to insert
  your name, PPN and path before using Recon.

---------------------------------------------------------------------


                                OZGIF

OzGIF is a small stand-along GIF file display tool.  It is provided
for those users that do not have an offline GIF display program and
who want to be able to view GIF images downloaded or captured from
CIS.

OzGIF is a very simple tool, displaying a single file named on the
command line.  There is a large number of offline GIF display tools
available in the PICS forum and elsewhere on the Service that provide
many enhancements over OzGIF, such as "slide show" presentation of
multiple images, resizing and modifying images, conversion to/from
other formats such as Windows BMP or PCX.  If you plan on doing much
GIF viewing, I strongly recommend you aquire one of those viewers.

For details on using OzGIF from within OzCIS, see the MISC.DOC file.

Syntax:
  OZGIF [GIF filename]

Operation:
  Displays the specified GIF file.


<eof>
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3884

     Volume in drive A has no label
     Directory of A:\

    OZCIS    ZIP    320628   7-20-93   2:55p
            1 file(s)     320628 bytes
                            1024 bytes free
