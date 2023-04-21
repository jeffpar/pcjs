---
layout: page
title: "PC-SIG Diskette Library (Disk #1782)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1782/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1782"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "HEXCALIBUR"

    This powerful hex editor provides a full set of editing commands for use
    with any file, text or code, in either hex mode or in ASCII mode.
    Character insertion and deletion -- as well as overtyping -- are all
    supported.  In addition, both find and replace operations are supported
    in either ASCII or hex.  Block mode operations like move, copy, and
    delete are also supported.
    
    This hex editor stands out because it supports character insertion and
    deletion, as well as finding, replacing, and block mode operations, at
    the Hex level.  It is a RAM editor, so the file you wish to edit must
    fit into main memory.
    
    With HEXCALIBUR, you can: examine and change the contents of WordStar or
    other specially encoded files; filter incompatible codes out of files;
    convert Unix or BTOS text files (line terminator = 0a) to MS-DOS format
    (line terminator = 0d0a) or to MacIntosh format (line terminator = 0d),
    or vice versa; and much more.  HEXCALIBUR provides a convenient tool for
    making the kind of changes that, until now, were extremely difficult to
    do!
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1782.TXT

{% raw %}
```
Disk No: 1782                                                           
Disk Title: Hexcalibur                                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: Hexcalibur                                               
Author Version: 1.021                                                   
Author Registration: $30.00                                             
Special Requirements: None.                                             
                                                                        
This powerful hex editor provides a full set of editing commands for use
with any file, text or code, in either Hex mode or in ASCII mode.       
Character insertion and deletion -- as well as overtyping -- are all    
supported.  In addition, both FIND and REPLACE operations are supported 
in either ASCII or Hex.  Block mode operations -- MOVE, COPY, and DELETE
-- are also supported.                                                  
                                                                        
This Hex Editor stands out because it supports character insertion and  
deletion, as well as finding, replacing, and block mode operations, at  
the Hex level.  It is a RAM editor so the file you wish to edit must fit
into main memory.                                                       
                                                                        
With HEXCALIBUR, you can: examine and change the contents of WordStar or
other specially encoded files; filter incompatible codes out of files;  
convert Unix or BTOS text files (line terminator = 0a) to MS-DOS format 
(line terminator = 0d0a) or to MacIntosh format (line terminator = 0d), 
or vice versa, and much more.  Hexcalibur provides a convenient tool for
making the kind of changes that, until now, were extremely difficult to 
do!                                                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## HCDOC.TXT

{% raw %}
```















                                H E X C A L I B U R
                                = = = = = = = = = =


                            The

                                      Hex

                                                 Editor


                                   Version 1.02


                            Reference            Manual


















                            Gregory Publishing Company
                            333 Cobalt Way, Suite 107
                            Sunnyvale, California, 94086
                                  (408) 727-4660


                     Copyright (c) 1989 Gregory Publishing Company
                                 All Rights Reserved

                                   LICENSE
                                   =======


All versions of "HEXCALIBUR -- The Hex Editor" are NOT public domain software,
nor are they free software.

Non-registered users are granted a limited license to use Hexcalibur on a trial
basis for the purpose of determining whether or not it may be suitable to their
needs.  Any use of Hexcalibur, except for this limited purpose, requires
registration.  Any use of copies of Hexcalibur that are not registered by any
individual, corporation, private enterprise, governmental agency, or other
entity or institution is strictly forbidden.

Registration permits a user the license to use Hexcalibur on a single computer. 
The registered user may use Hexcalibur on more than one computer, but it must
not be used on two or more computers at the same time.

No user may modify Hexcalibur in any way, including, but not limited to,
decompiling, disassembling, or otherwise reverse engineering the program.

All users are encouraged to copy Hexcalibur for the trial use of others subject
to the above mentioned restrictions and also subject to the following
conditions:

(1) Hexcalibur must be copied without modification, complete with the file
    containing this license information.

(2) Verbal or written notice must be given the person receiving the copy that
    use of Hexcalibur requires the payment of a $30.00 registration fee to
    Gregory Publishing Company.

(3) All support files must be included with the copy.  These files are:
      HC.EXE        --   The Hexcalibur program.
      HCDOC.TXT     --   This document.
      SAMPLE1.TXT   --   A sample file of data characters.
      HCMONO.FIL    --   The black and white colors file.
      Any README or HEXNOTES files that may be on the original disk.

(4) Hexcalibur may not be distributed along with any other product.

Operators of electronic bulletin board systems (Sysops) may post Hexcalibur for
downloading by their users providing the above conditions are met.

Distributors of public domain or user supported software may distribute copies
of Hexcalibur subject to the above conditions.

An order form is included in this file which may be used to register your copy
of Hexcalibur.


THANK YOU FOR YOUR SUPPORT!

                                   WARRANTY
                                   ========


Gregory Publishing Company makes no warranty of any kind, express or implied,
including without limitation, any warranties or merchantability and/or fitness
for a particular purpose.  Gregory Publishing Company shall not be liable for
any damages, whether direct, indirect, special, or consequential arising from a
failure of this program to operate in the manner desired by the user. Gregory
Publishing Company shall not be liable for any damage to data or property which
may be caused directly or indirectly by use of this program.

IN NO EVENT SHALL GREGORY PUBLISHING COMPANY BE LIABLE TO YOU FOR ANY DAMAGES,
INCLUDING ANY LOST PROFITS, LOST SAVINGS, OR OTHER INCIDENTAL OR CONSEQUENTIAL
DAMAGES ARISING OUT OF YOUR USE OF OR INABILITY TO USE HEXCALIBUR, OR FOR ANY
CLAIM BY ANY OTHER PARTY.


                             ORDERING  INFORMATION
                             ========  ===========


Registration of Hexcalibur licenses you to use the product for any reasonable
purpose as you need.  Users need only register one version of Hexcalibur. 
Registration automatically includes licensed use of all upgrades.

The version of Hexcalibur on this disk is version 1.02, dated August, 1989.
Depending upon how long after August, 1989, you are reading this, there may be
later versions of Hexcalibur available.  We have a large list of enhancements
already planned for future versions.

Upon receipt of your payment for registration, we will automatically ship you
(providing you supply a clearly written mailing address and phone number) the
most current version of the program.  Additional updates are available to
registered users ONLY for a nominal fee of $10.00 per disk.

Please use the order form supplied on the next page when placing an order.




NOTICE TO CUSTOMERS OUTSIDE NORTH AMERICA:
   Please send only checks that are drawn on a US Bank that are payable in
   US Dollars.  Please add an additional $1.50 to cover postage for the
   mailing of the diskette outside the USA.


                                 ORDER      FORM
                                 =====      ====
                             Gregory Publishing Company
                          333 Cobalt Way, Suite 107, Dept. F1
                             Sunnyvale, California  94086
                                   (408)  727-4660
Quantity   Item
--------   ----

________   Registration for Hexcalibur ............. @ $30.00 ea  $ ___________
             (Includes one copy on disk of the most current version.)

________   Upgrade of Hexcalibur ................... @ $10.00 ea  $ ___________
             (For already registered users only.)


Recordings from Gregory Publishing Company on cassette tape:
------------------------------------------------------------

________  Synthesized Sullivan, volume I ........... @ $ 9.00 ea  $ ___________
            (Gilbert & Sullivan overtures orchestrated on a synthesizer.)

________  Synthesized Sullivan, volume II .......... @ $ 9.00 ea  $ ___________


Documentation for Unisys A-Series Computer Systems:
---------------------------------------------------

________  The Complete CANDE Primer ................ @ $30.00 ea  $ ___________

________  The Extended ALGOL Primer, volume I ...... @ $25.00 ea  $ ___________

________  The Extended ALGOL Primer, volume II ..... @ $29.00 ea  $ ___________

________  The Extended ALGOL Primer, volume III .... @ $31.00 ea  $ ___________

________  A-Series DMSII Programming ............... @ $40.00 ea  $ ___________

________  Gregory's A-Series Technical Journal ..... @$225.00 ea  $ ___________
            (Annual subscription, 10 issues per year.)
                                                       SUBTOTAL   $ ___________

                   California Residents add applicable Sales Tax  $ ___________
                     (No sales tax on Journal subscriptions)

                                                          TOTAL   $ ___________


Name: _____________________________________________________________

Company: __________________________________________________________

Address: __________________________________________________________

         __________________________________________________________

Phone:   __________________________________________________________

Pre-paid orders only.  Purchase orders o.k. if TOTAL amount exceeds $100.00.

                      Corporate/Government/Multiple Users
                      ===================================


All corporate, business, government, and other commercial users of Hexcalibur
must register.

The registration fee for the first license of Hexcalibur is $30.00. This price
includes the delivery of an updated disk which will be mailed to the licensee.

Additional registration fees for users AT THE SAME ORGANIZATION are $25.00 each
for 2 - 20 users and $20.00 each per additional user after that.  This fee is
for registration only.  Users are expected to make their own copies of the
updated software from the disk sent the original licensee.  NO DISK WILL BE
MAILED TO A CUSTOMER WHO AVAILS HIMSELF OF ANY DISCOUNTED REGISTRATION FEE.

Example:  If your company has five users that want to use Hexcalibur, the
license fee for all five would be:

                  $30.00 (for the original license)
+ ($25.00 x 4) = $100.00 (for the other four users) 
                 -------
                 $130.00 TOTAL registration fee

The first user would be sent an updated disk, and the other four would obtain
copies from that user.

If your company has 25 users, all of whom are going to use Hexcalibur, the
registration fee would be:

                   $30.00 (for the original license)
+ ($25.00 x 20) = $500.00 (for users #2 - 20)
+ ($20.00 x 5)  = $100.00 (for users #21 -25)
                  -------
                  $630.00 TOTAL registration fee

Not all registrations need be made at once.  After payment of the first
registration, you may take advantage of the discount schedule by adding new
users.  Simply include your ORIGINAL LICENSE NUMBER (which is provided on the
disk mailed to you) with your order, and you will receive the discount.



NOTICE:  YOU MAY NOT USE HEXCALIBUR WITHIN YOUR ORGANIZATION WITHOUT A PRIOR
PURCHASE OR LICENSE ARRANGEMENT.

                                  Introduction           
                                  ============

Hexcalibur is a high quality editor designed expressly for examining, modifying,
or otherwise manipulating disk files in their raw, or binary, format.  You may
examine and change any part of a file using either hexadecimal characters (4-
bit characters) or standard ASCII characters.  Hexcalibur is especially useful
for examining and editing files that standard ASCII editors either will not read
or will read but display in a format that is not terribly useful.

With Hexcalibur, you can:

(1) Examine and change the contents of WordStar or other specially encoded
    files.

(2) Filter incompatible codes out of files.

(3) Convert Unix or BTOS text files (line terminator = 0a) to MS-DOS format
    (line terminator = 0d0a) or to MacIntosh format (line terminator = 0d),
    or vice versa.

(4) Examine and change the printer codes in a file to be printed.

(5) Search game programs for clues in the text portion of the codefile.

(6) Examine and change soft font data files for laser printers.

(7) Examine incoming .COM and .EXE files for software virus patterns and,
    possibly, eradicate them.

...and much more!  New ideas for using this product come to mind every day!

The key to doing any of these things is THAT YOU KNOW WHAT YOU ARE DOING.
Hexcalibur does not advise you or attempt to protect you from yourself. It will
let you do anything to a file at the binary level.  If you change an executable
codefile, you had better know what you are doing!  But for those who know,
Hexcalibur provides a convenient tool for making the kind of changes that, until
now, were extremely difficult to do!

An immediate use of Hexcalibur can be illustrated using this documentation file
you are now reading.  This file is formatted for printing on any printer that
uses the sequence "Form Feed/Carriage Return" ("0c0d" character sequence) as a
page separator.  If your printer does not use that character sequence, but uses
something else, you can easily change this file to print on your printer.

Suppose, for example, that your printer uses the hex character sequence "1f" as
its form feed instruction.  You could change every "0c0d" in this file to "1f"
by taking the following steps:

Beginning at the MS-DOS prompt, proceed as follows.  (The step numbers are for
reference purposes only.  Do not type them in.  "Alt" refers to the "Alt key",
and <ENTER> refers to the "ENTER key.")

1. HC HCDOC.TXT

2. press any key to leave the greeting screen

3. Alt-R

4. 0c0d <ENTER>
5. 1f <ENTER>

6. when the confirm prompt appears, type:
     r

7. Alt-X

8. y

9. <ENTER>

Now print the file using the MS-DOS PRINT command, and you will find that it
will eject pages properly on your printer that uses "1f" as a page eject
instruction.


The pages that follow provide instructions on how to use Hexcalibur. Hexcalibur
has been designed for intuitive operation.  Most of the commands are accessed by
different Alt keys.  (For example, Alt-B moves to the beginning of the file,
Alt-E to the end, Alt-F is FIND, Alt-R is REPLACE, and so forth.) Wherever
possible, standard DOS keys have been used for various paging functions.  (For
example, the cursor arrows work as expected; if you move to a line off of the
screen, the screen will scroll one line; Page Up and Page Down may be used to
move through the file in 256-character blocks.)

An on-line summary of the commands is readily available by pressing function key
F1.  Use this screen for quick reference to any command.

The screen colors are user-configurable.  If the appearance of the screen is not
right for your computer, type Alt-C.  This will bring up the Color Menu. Once in
the Color Menu, use the cursor arrows to change colors.  The Left and Right
arrows change the foreground color, while the Up and Down arrows change the
background color.  When you have your screen colors set as desired, press the
ENTER key to save them.  They will be saved in a file called HC.FIL and will be
available for all future runs of Hexcalibur.


                                  Installation
                                  ============

To install Hexcalibur onto a hard disk system, proceed as follows:

1. Insert the floppy into a floppy drive.  (We will assume you are using
   drive A.)

2. Select the drive you want the program to run from.  For example, if you want
   the program on drive C, enter:
     C:

3. Change to the directory you want the program to run from.  For example, to
   put the program under the directory DOS, enter:
     CD DOS
   For best results, put Hexcalibur into a directory that is part of your
   normal PATH.

4. COPY A:*.*

5. Set your screen colors.  To do this, enter:
     HC SAMPLE1.TXT
     Alt-C
     Select your colors as described in "Color Selections" (later in this
       document).
     Exit the color menu by pressing the ENTER key.
     Exit the program (if desired) by entering:
       Alt-X

   Your screen color selections are now saved in a location that is visible
   to your DOS PATH.  Hexcalibur will therefore find the color file every
   time you run it.  (You can also make additional color files under other
   directories if you wish to use different colors in different locations.)

6. Mail in your Registration on the enclosed order form.  If possible, please
   let us know to what use you plan to put this program to.

7. Make a copy of the original diskette and give it to a friend.

                                   Hexcalibur
                                   ==========

                              Command Summary List
                              --------------------
Function                                                        Key Sequence
--------                                                        ------------

Move 1 character to the left. . . . . . . . . . . . . . . . . . Left Arrow
Move 1 character to the right . . . . . . . . . . . . . . . . . Right Arrow
Move Up 1 line; scroll 1 line if at top of screen . . . . . . . Up Arrow
Move Down 1 line; scroll 1 line if a bottom of screen . . . . . Down Arrow
  (Each line is 16 characters long.)
Move Up 1 page. . . . . . . . . . . . . . . . . . . . . . . . . Page Up
Move Down 1 page. . . . . . . . . . . . . . . . . . . . . . . . Page Down
  (Each page is 256 characters in length.)

Beginning of line . . . . . . . . . . . . . . . . . . . . . . . Home
End of line . . . . . . . . . . . . . . . . . . . . . . . . . . End
Beginning of file . . . . . . . . . . . . . . . . . . . . . . . Alt-B or Alt-0
Move in 10% of the file . . . . . . . . . . . . . . . . . . . . Alt-1
Move in 20% of the file . . . . . . . . . . . . . . . . . . . . Alt-2
Move in 30% of the file . . . . . . . . . . . . . . . . . . . . Alt-3
Move in 40% of the file . . . . . . . . . . . . . . . . . . . . Alt-4
Move in 50% of the file . . . . . . . . . . . . . . . . . . . . Alt-5
Move in 60% of the file . . . . . . . . . . . . . . . . . . . . Alt-6
Move in 70% of the file . . . . . . . . . . . . . . . . . . . . Alt-7
Move in 80% of the file . . . . . . . . . . . . . . . . . . . . Alt-8
Move in 90% of the file . . . . . . . . . . . . . . . . . . . . Alt-9
End of file . . . . . . . . . . . . . . . . . . . . . . . . . . Alt-E

Go to specific sector and byte. . . . . . . . . . . . . . . . . Alt-G
  (Type in the desired sector and byte number and press ENTER.)
Switch between Hex Window and Text Window . . . . . . . . . . . F2

Toggle Insert Mode/Overtype Mode. . . . . . . . . . . . . . . . Insert
Delete Character. . . . . . . . . . . . . . . . . . . . . . . . Delete
  (In the Hex window, both hexades are deleted at once.)

Begin Block . . . . . . . . . . . . . . . . . . . . . . . . . . Alt-A
  Initiate Copy of Selected Block . . . . . . . . . . . . . . . Alt-C
  Initiate Move of Selected Block . . . . . . . . . . . . . . . Alt-M
  Delete Selected Block . . . . . . . . . . . . . . . . . . . . Alt-D
Retrieve most recently selected Block for Pasting . . . . . . . Alt-P

Find text . . . . . . . . . . . . . . . . . . . . . . . . . . . Alt-F
Find and Replace text . . . . . . . . . . . . . . . . . . . . . Alt-R

Save File . . . . . . . . . . . . . . . . . . . . . . . . . . . Alt-S
Exit Program (with option to save the file) . . . . . . . . . . Alt-X
Quit Program (same as Alt-X). . . . . . . . . . . . . . . . . . Alt-Q
Undo All Changes since the most recent Save . . . . . . . . . . Alt-U

Select Screen Colors. . . . . . . . . . . . . . . . . . . . . . Alt-C
Toggle Display All/Display only Printables in the text Window . Alt-Z
Display Product Information . . . . . . . . . . . . . . . . . . Alt-I
View Command Summary. . . . . . . . . . . . . . . . . . . . . . F1

Cancel an operation in progress . . . . . . . . . . . . . . . . Esc

                              The Screen Layout
                              === ====== ====== 

    HEXCALIBUR             Workfile: C:\HEXCAL\NONAME.TXT

    Sector: 000   Byte: 000                    F1  - HELP
            0           0                      F2  - Switch Window
    overtype                                   ESC - Cancel Operation

     0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F   0123456789ABCDEF 
00  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................  00
10  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................  10
20  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................  20
30  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................  30
40  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................  40
50  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................  50
60  00 00 00 00                      00 00 00 00 00   ..            ..  60
70  00 00 00 00    the hex window    00 00 00 00 00   ..  the text  ..  70
80  00 00 00 00                      00 00 00 00 00   ..   window   ..  80
90  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................  90
A0  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................  A0
B0  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................  B0
C0  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................  C0
D0  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................  D0
E0  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................  E0
F0  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00   ................  F0

    Size of File: 65536    Available Memory: 365160

When first coming up in Hexcalibur, you will notice two large windows taking up
the majority of the screen.  The smaller window on the right side is the text
window, consisting of the character translations of all the bytes in the file. 
The larger one on the left side is the hex window, containing two hex characters
for every byte in the file, one for the lower four bits and one for the upper
four bits.  Each character in the text window has a direct correspondence across
in the hex window, and vice versa.  The screen is laid out so that corresponding
hex and text characters are always visible when editing.  When editing in the
hex window, the corresponding character in the text window is simultaneously
updated; when editing in the text window, the corresponding hex character pair
is also updated.  You may edit in one window at a time and use the F2 command to
switch windows.

The top line of the screen consists of the title, HEXCALIBUR and the name of the
workfile being edited, including the name of the path to that file.  Other
features displayed on the screen include the exact location (in sectors and
bytes) of the cursor in the file.  This is displayed in the upper left hand
corner of the screen directly under the title, HEXCALIBUR, and it is updated as
the cursor moves through the file.

Beneath the position display is the mode display.  There are three separate
modes:  overtype, insert mode, and block mode.  Overtype and insert mode can by
toggled by the insert key.  Block mode is started by an Alt-A command, and no
editing can take place as in the other two.

The bottom line contains the size of the file and the remaining available memory
the editor may use.  The size of the file is updated as editing takes place. 
The available memory changes as blocks of space are assigned, which is typically
in blocks of 8K bytes.

                              Color Selections
                              ===== ========== 

    HEXCALIBUR             Workfile: C:\HEXCAL\NONAME.TXT

    Sector:       Byte:                        F1  - HELP
                                               F2  - Switch Window
    overtype                                   ESC - Cancel Operation

     0  1  2  3  4  5  6  7  8  9  A  B  C  D  E  F   0123456789ABCDEF 
00                  Color Selections                  ...-------------  00
10                                                    ------||||||||||  10
20               ......................               ||||||||||||||||  20
30               .   Current Field:   .               ||||||||||||||||  30
40               .        TEXT        .               |||||-----------  40
50               ......................               ----------------  50
60                                                    ----------------  60
70    Left/Right cursors   Change text color          ----------------  70
80    Up/Down cursors      Change background color    ----------------  80
90                                                    ----------------  90
A0    TAB                  Move to next field         ----------------  A0
B0    Shift-TAB            Move to previous field     ----------------  B0
C0                                                    ----------------  C0
D0    Alt-D                Load default colors        ----------------  D0
E0    ENTER                Return and save changes    ----------------  E0
F0    ESC                  Return without save        ----------------  F0

    Size of File:          Available Memory:       


All color selections are saved in a file named HC.FIL.  If this file is not
found when the program begins running, the editor will come up with its default
colors.  Another indication that it has not been found the HC.FIL file is that
the bottom of the title screen will display "To set screen colors, type Alt-C".

To enter the color selection menu once in the editor, use the Alt-C key. 

In response to the Alt-C command, the color selections screen will come up.  You
will be able to edit one color field at a time.  The field that is currently
being edited is displayed at the top center of the screen.  There are six
different color fields that you may edit.

While editing colors, the functions of the keyboard are redefined thusly:


Left/Right arrows
-----------------

Use the left and right arrow keys to change the current field's foreground text
color.


Up/Down arrows
--------------

Use the up and down arrow keys to change the current field's background color.


TAB
---

The TAB key shifts the editor to the next field.


Shift-TAB
---------

The Shift-TAB key shifts the editor to the previous field.


Alt-D
-----

Loads and displays the default colors of Hexcalibur.


ENTER
-----

Returns to Hexcalibur and saves the colors displayed on the screen to the HC.FIL
file.  These color selections are now permanently saved for all future runs of
Hexcalibur.


ESC
---

Returns to Hexcalibur without saving the displayed colors. 

                                   Tutorial
                                   ======== 


To begin running Hexcalibur from a DOS prompt, enter the command:

hc [filename]

where the filename is the name of the file to be edited.  Although the filename
is optional, if it is not provided, Hexcalibur will immediately prompt you for a
file name.

Note:  If you have no file to start with, begin editing using the file named
SAMPLE1 supplied on the disk.

As you load Hexcalibur, the title screen will first appear on the screen.  As
the program loads the file, a counter at the bottom left hand corner of the
screen displays how many bytes are currently loaded.  As soon as the file is
loaded, press any key to enter the editor.

IF THIS IS THE FIRST TIME YOU ARE RUNNING HEXCALIBUR, you may want to change the
screen colors.  To do so, type Alt-C.  You may then change your screen colors as
described on the Color Selection Menu.  (For additional information on color
selection, see the section on "Custom Color Settings".)

As the editor comes up, your cursor will be located at the top left hand corner
of the hex window.  To begin, use the arrow keys to move the cursor around the
hex window.  Move to the end of a line and notice that the cursor wraps around
to the next line of the hex window instead of moving over to the text window. 
To change windows use the F2 key.  This will move you to the corresponding
character in the text window.  Now move to the bottom of the screen and you will
see the file scroll up while the cursor holds its position. If you press the
home key, the cursor will move to the beginning of the line of the current
window.  The end key will move the cursor to the end of the line of the current
window.  Try a few page up and page downs.  The entire file will shift a page
(half of a sector) up or down.  For larger jumps through the file you will want
to use the Alt-(0..9) keys.  Try pressing Alt-3.  The cursor will move to a
position 30% of the way through the file.


Editing in Overtype Mode
------------------------

To start this sample editing session, do the following:

1. Press the insert key to change the program into Overtype mode.
2. Press function key F2 to switch to the text window.

Now begin typing some text characters.  You will notice that the characters you
are typing are overwriting the existing characters.  Also notice that the
corresponding characters in the hex window have changed their values in
accordance with the changes you are making in the text window.

Now press function key F2 again, and you will move to the hex window.  While you
are in the hex window, you can only use hexadecimal characters:  0-9 and A-F. 
As you type, you will notice that, as in the text window, the characters you
type will overwrite the character which the cursor sits on.  The corresponding
text characters are updated as well.


Editing in Insert Mode
----------------------

Now press the insert key and you will notice that, at the upper left hand corner
of the screen, it now says "insert mode" where it used to say "overtype."  Press
the F2 key so that your cursor is in the text window.  Begin typing, and you
will notice that the text from the cursor forward gets shifted forward, and the
typed character is inserted at the cursor.  The cursor is also shifted one space
to the right.  Again, the characters in the hex window are adjusted.

Move over to the hex window (by pressing F2) and try typing there.  You will
notice that insert mode in the hex window works a bit differently.  Move the
cursor to the left hex character of a pair.  Type a number and watch all of the
pairs of hex characters shift forward, from the cursor on.  The number pressed
will be inserted into the right hex character and the left hex character will
turn to 0.  The cursor is moved to the right hex character where the typed
number sits.  If you type another number, the right hex character will shift to
become the left hex character, and the character keyed becomes the right hex
character.  The cursor then moves another character to the right.



Working with Blocks
-------------------

In order to work with blocks you must always begin by pressing Alt-A (begin
block).  When you do so, you will notice that the mode indicator towards the
upper-left hand corner of the screen is flashing "block mode" and the character
your cursor sits on is now highlighted with a block mode color setting.  You are
now in block mode.  Note: You cannot edit text in block mode, but you can switch
freely between the hex and text window with F2.  Try moving the cursor around
the screen and you will see that the text between the start of the block and the
current position is highlighted.  Now hit F2 to switch to the opposite window
and notice that the block has remained the same.  When you have decided on a
block, look directly above the windows to see the block options:
  Alt-C = copy block   Alt-M = move block   Alt-D = delete block

First try a block copy by pressing Alt-C.  The block highlight will disappear,
not the text, and above the windows it will say "Move cursor to destination,
press ENTER." Do as the instructions say and you will see the formerly
highlighted text reappear where the cursor sits.  The cursor will appear at the
end of the copied block.

Try the same procedure with move block (Alt-M) this time. You must start a new
block again with Alt-A.  Notice that when you actually press Alt-M, the
highlighted text disappears instead of remaining as with an Alt-C.  Pressing
Enter at the destination will act the same as with an Alt-C.

Now try the procedure with delete block (Alt-D) after starting another block
with Alt-A.  When pressing Alt-D, the highlighted block is removed and you are
no longer in block mode.

Using Paste Block
-----------------

Now imagine that you accidentally deleted the wrong block.  It will be easy to
recover this deleted block with Paste Block (Alt-P).  When pasting a block you
must NOT be in block mode.  The last block used in block mode is automatically
saved in a block buffer and can be retrieved with Alt-P.  Press Alt-P now and
above the windows it will say "Move cursor to destination, press ENTER."  If the
cursor still sits in the same place when the delete was made, you do not need to
move it.  Press Enter and the block will be replaced.  If you wish to do another
Paste block with the same block, you may.  The block remains in the buffer until
it is replaced, when block mode is used. 

                            Basic Editing Features
                            ===== ======= ======== 

Overtype
--------

In overtype mode, anything typed on to the screen will overwrite existing
characters on the screen.  In the hex window, the overwrite will take place over
the character which the cursor is on, as in the text window.  In the hex window,
it edits only the upper or lower eight bits of the corresponding text character
in the text window.  The insert key toggles overtype and insert mode.


Insert
------
 
In insert mode, anything typed on to the screen will cause all text, from the
cursor forward, to move up a space, and the typed character to be placed at the
cursor.  When typing in the hex window, the first character typed will be
inserted as the rightmost 4 bits and prefixed by a zero; the second key typed
will cause the first character to be shifted to the left and then the second
character will become the lower 4 bits.  For example, if we have: 

90 91 92 93 94 95 96 97 98 99 9a 9b 9c 9d 9e 9f

and we are in insert mode with the cursor over the "9" of "98" and we type a
"6", the display will change to read:

90 91 92 93 94 95 96 97 06 98 99 9a 9b 9c 9d 9e

Now the cursor will be over the "6" of the "06" and the characters from "98" up
will have been shifted one full position to the right.  If (note we're still in
insert mode) we now (while over the "6") type "7", the "6" will be moved to the
left and the "7" inserted after it.  The display will then read:

90 91 92 93 94 95 96 97 67 98 99 9a 9b 9c 9d 9e

The cursor will be left over the "9" of the "98", which is the next available
position on the screen.

The insert key toggles overtype and insert mode.


Delete
------

When deleting a character, all text beyond that character is shifted back to
fill the void.  In the hex window, both hex characters are deleted with one
keystroke.


Change Display (Alt-Z)
----------------------

This will change the text window to display either all printable characters or
just ASCII characters.


Switch Between Hex and Character Edit (F2)
------------------------------------------

This will shift windows to the corresponding character in the other window. 
This allows you to edit using either hex characters or ASCII characters.


Color Selection (Alt-C)
-----------------------

Alt-C will bring up the color selection help screen.  There are six different
color fields to edit: text, background, special characters, help screens, block
characters, and non-printable characters (hex character who have no printable
translation).  The current field being edited is displayed in the top half of
the help screen, and the cursor is located at one of the characters of that
field.  The arrow keys change the color of the current field and the Tab keys
shift fields.  ESC will cancel all color changes and ENTER will save them.




                          Moving Around in the File
                          ====== ====== == === ==== 

Arrow Keys
---------- 

Using the arrow keys will move the cursor throughout the file.  When reaching
the end of a line or a page, the screen and cursor will automatically wrap. 
Note: The arrow keys will not move the cursor from one window to another.


Page Up, Page Down
------------------

Paging up and down will shift the file exactly one screen page (256 bytes)
accordingly.


Home
---- 

Moves the cursor to the beginning of the line of the current window.


End
--- 

Moves the cursor to the end of the line of the current window.


Beginning of File (Alt-B)
-------------------------

Moves the cursor to the beginning of the file.


End of File (Alt-E)
-------------------

Moves the cursor to the end of the file.


Move to x% of file (Alt-0..9)
-----------------------------

Moves to a certain percentage of the file (i.e., Alt-3 moves the cursor to a
position at 30% of the file size).


Goto (Alt-G)
------------ 

Lets you specify exactly where in the file you want to move to, using sector and
byte values.


Find (Alt-F)
------------

Searches for a given string in hex or text, depending on the current window, and
then moves the cursor to the position of the string if found.


Find and Replace (Alt-R)
------------------------

Alt-R prompts for two strings:  a target string and a replacement string.  Each
time the target string is found in the file, you are asked if you want the
replacement to be done.  The possible responses are:

  y -- yes:  replace this one occurrence of the target string with the
             replacement string.
  n -- no:   skip this occurrence of the target string but continue searching
             for the next occurrence of the target.
  r -- replace all:  replace all remaining occurrences of the target string
             without prompting again.

The ESC key may be used to cancel the Replace operation.

Any time while a Find or Replace is in progress, pressing any key on the
keyboard will stop the operation, and the prompt 

ENTER = continue / ESC = break

will appear.  When this happens, press the ENTER key to continue the operation. 
To abort the operation, press the Escape key.


                             Block Mode Editing
                             ===== ==== ======= 

Block Mode
----------

Block mode is initiated by executing an Alt-A.  In block mode, blocks of text
may be copied, moved, or deleted, regardless of which window you are in.  Both
windows will be updated to the change.  Text cannot be edited in block mode.

Begin Block (Alt-A)
-------------------

Turns block mode on and places a marker at the current position of the cursor. 
The cursor then should be moved to the position at the end of a desired block
before executing a block action, i.e. copy block.

Delete Block (Alt-D)
--------------------

To execute a delete block, you must be in block mode.  When the desired block to
remove is highlighted, an Alt-D will delete it.

Note:  In case of accidental delete, the block is still available in memory.  It
may be retrieved by typing Alt-P.  After typing Alt-P, move the cursor to the
location where you would like to put the accidentally deleted block, and press
ENTER.  The block will be inserted back into the file.

Blocks are only saved to one level deep.  Once a new block has been selected,
the previous block is no longer retrievable.

Copy Block (Alt-C)
------------------

To execute a copy block, you must be in block mode.  When the desired block to
copy is highlighted, press Alt-C.  The highlighting of the text will disappear. 
Move the cursor to the desired location where the block is to be copied and
press Enter.

Move Block (Alt-M)
------------------

To move a block, you must be in block mode.  When the desired block to move is
highlighted, press Alt-M.  The highlighted text will be removed.  Move the
cursor to the desired destination location and press Enter.

Paste Block (Alt-P)
-------------------

Alt-P will paste the most recently selected block to any position in the file. 
Alt-P is pressed OUTSIDE of block mode.  It causes the program to retrieve the
most recently selected block and make it available for insertion into the file. 
This may be a block that was previously deleted, moved, or copied.  As with move
block and copy block, after pressing Alt-P, move the cursor to the location in
the file where you desire the block to be inserted, and press ENTER.

                                 File Options
                                 ==== ======= 

Undo changes (Alt-U)
--------------------

Undoes changes in the file since the last save was made. 


Save File (Alt-S)
-----------------

Alt-S causes a small menu to appear in the Hex window.  You are given the option
to rename the file and then save it.  To actually save the file, you must press
the ENTER key in the last box on the menu.  To cancel the save operation, press
the Escape key at any time.

If there already exists a file with the name you are attempting to use, you will
be given the option of making a backup file (with the .BAK extension) when the
save takes place.

Upon completion of the save, the program returns to normal operation.


Exit Program (Alt-Q)
--------------------

Same as Alt-X.


Exit Program with Optional Save (Alt-X)
---------------------------------------

Alt-X exits the program and gives an option to save the file.  ESC may used to
escape the exit altogether.

Once you have moved to the Save menu via Alt-X, it is impossible to get back to
the program.  Pressing ESC while in the Save menu will exit the program, and the
file will NOT be saved.  (A notice to this effect is posted at the bottom of the
Save menu when Save is entered via Alt-X.)



```
{% endraw %}

## README.TXT

{% raw %}
```
Welcome to Hexcalibur -- the only Hex Editor (that we know of) that allows
you to insert and delete, as well as view and overtype, any disk file using
both ASCII characters and their hexadecimal equivalents!

For information on Hexcalibur, including how to install it and how to
run it, please PRINT the file HCDOC.TXT.



```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1782

     Volume in drive A has no label
     Directory of A:\

    FILE1782 TXT      2517  12-22-89  12:10p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540  12-22-89  12:15p
    HC       EXE     82750   8-13-89   6:10p
    HCDOC    TXT     40997   8-10-89  10:20p
    HCMONO   FIL        12   5-24-89  10:46p
    README   TXT       333   8-10-89  11:49p
    SAMPLE1  TXT      4096   7-30-89   3:41p
            8 file(s)     131283 bytes
                           26624 bytes free
