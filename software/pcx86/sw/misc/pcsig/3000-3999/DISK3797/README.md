---
layout: page
title: "PC-SIG Diskette Library (Disk #3797)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3797/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3797"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ACCENT.TXT

{% raw %}
```
                           Accent  Version 2.1
                       The Diacritic Key Translator

_____________________________________________________________________________


                               USER'S MANUAL

_____________________________________________________________________________


OVERVIEW

Accent is a Windows application that enables you to input special characters
that are not normally found on a regular keyboard. These characters include 
accented characters, called diacritics, and other special symbols such as 
the copyright sign "⌐" or the trademark sign "«".

Although Windows supports diacritic characters and extended symbols through 
the use of foreign keyboards, only one of these can be installed at a time 
and keys assigned to the diacritic characters or extended symbols cannot be 
used to display the standard character they normally represent.

In order to display these characters, you must switch back to the standard 
keyboard by using the Control Panel International application and select the
US keyboard.  Even when implemented with macros, this process takes time and
is not as transparent as it could be.

One other drawback is that there is no established standard among keyboard 
manufacturers; the key assignment on your keyboard may differ from what is 
supported by the Windows keyboard DLL. In such cases, the label of a key 
will differ from the symbol that is displayed. You then have to either 
change the key on your keyboard on stick one of those specialized keycap 
label on it.

The alternative to using a non standard keyboard is to have an ANSI 
character set chart handy to look-up the value of the special symbol and 
enter it with the Alt-0 code sequence.

Accent, when installed and set up properly, will allow you to virtually 
enter all the special ANSI symbols directly from your standard keyboard by 
using a two-key combination. Since Accent can be customized, it will also 
allow you to make key assigments that are consistent with the layout of your
keyboard.

The effects of Accent propagate throughout the system and are available in 
all Windows applications.


INSTALLATION

To run Accent, you need Windows version 3.0 or 3.1 running in standard or 
enhanced mode. Accent requires about 50K of memory to run but only 12K of 
this memory must be resident at all times. 

Use the Program Manager, the File Manager or your prefered Shell to run the 
INSTALL program. To do this, use the Run command and type:
 
				x:INSTALL

where x stands for the drive letter of the Accent diskette.
  
You can change all the defaults that INSTALL assumes before commiting to 
installation. In particular, you can select from a list of default Setups 
that implement some of Windows keyboard DLLs. Once this selection is made 
and Accent installed, you can use the Setup menu to customize Accent to 
your liking.
   
If you have been using Accent Version 1.5 and you want that Setup, select 
"Version 1.5 Setup" as the Setup to install.

INSTALL will copy all the required files to the path you have specified, 
build the required Setup and start Accent Version 2.1. If you have set
the "Load Accent automatically when starting Windows" check box on,
INSTALL will append the string "\path\accent.exe" to the "LOAD=" command
line of your WIN.INI file.

SETTING UP ACCENT

Hot Key

Switching the translation mode of Accent to ON or OFF is done through the 
use of a Hot Key.  The translation mode is reflected by the Icon, which 
displays the accented letter "Γ" when ON.

Mode switching occurs as soon as you hit the Hot Key combination (no macro 
execution to perform and slow you down) and is available in all Windows 
applications.

The Hot Key is a combination of the Ctrl key (the use of Alt and Shift key 
is optional) with any key in the range A-Z typed simultaneously. 

You can choose the Hot Key you want from the drop down list box of the Setup
menu. The default Hot Key is Ctrl-T.

If you have defined Accelerator Keys for keyboards, you can set the Hot Key
to none and use the Accelerator Keys to switch keyboard definitions. In this
case, you must make sure that the Translation mode is always on .

Translation mode

The translation mode check box can be used to switch Accent's operation. It 
also sets the mode Accent is in when first started.

Beeps

The Beeps check box will instruct Accent to beep you PC speaker when the 
translation mode is switched: two beeps will sound for OFF mode, and three 
beeps for ON mode. This is very handy and allows you to know in which mode 
Accent is in when you are working on a full screen document and Accent's 
Icon is not visible.

Diacritic Keys

Accent can translate all the diacritic symbols that are found in the ANSI 
character set.

In order to do this, you select one of your keyboard keys to act as a dead
key representing the accent you want. You then type this key followed by the
character you want as a diacritic.

The Setup menu has four edit fields per diacritic key. The first two edit 
fields, labeled "Char" allow you to enter the shifted and unshifted 
character of the key so that the key will act as a dead key in both shifted
or unshifted state.

If you have an enhanced keyboard, you can use the next two edit fields 
labeled "Alt Char" to specify the accent. In this mode, you need to press 
the key labeled Alt-Char on your keyboard (or the right-hand Alt key) 
together with the key you dedicated as a dead key for the accent in order  
to display the diacritic. Here also you can enter the shifted and unshifted 
character for the key to act as a dead key in both states.

The requirement of using shifted and unshifted keys is optional. If only one
character is specified in either the "Char" or "Alt Char" entries, then only
that character will act as a dead key.

As an example, if you have assigned the key representing the "/" and "?" as
"Char" characters to act as the dead key for the acute accent , then typing
"/" or "?"  followed by the uppercase letter "E " will give you the "╔" 
symbol. If you have assigned these characters in the "Alt Char" entries, 
then typing the right-hand Alt key simultaneously with either "/" or "?" 
then typing the uppercase letter "E" will give you "╔".

The symbol of a key assigned as a dead key is still available however, 
either by typing the key twice in succession or, if the character is not an
"Alt Char" character, by using the Hot Key to disable the translation mode 
of Accent. 

The following table shows the diacritic symbols Accent can generate:

			Characters
	  Accent                 
	1-Acute:	ß  Θ  φ  ≤  ·  ²  ┴  ╔  ═  ╙  ┌  ▌	  
	2-Grave:	α  Φ  ∞  ≥  •  └  ╚  ╠  ╥  ┘ 
	3-Circumflex:	Γ  Ω  ε  ⌠  √  ┬  ╩  ╬  ╘  █
	4-Umlaut:	Σ  δ  ∩  ÷  ⁿ     ─  ╦  ╧  ╓  ▄	  
	5-Tilde:		 π  ⌡  ├  ╒  ±  ╤
	6-A ring:	σ  ┼
	7-Cedilla:	τ  ╟

Aliases

Accent can also translate special symbols by remapping standard keyboard
keys.

You tell Accent which character you want translated by using the Aliases 
table. The table can support 120 entries and is displayed in groups of 24 
entries in two columns. Each entry consist of a double edit field. You use 
the first edit field to identify the key you want to remap, the second edit 
field tells Accent what symbol to display.

At the bottom of the Aliases table are two directional push buttons that 
allow you to scan the table. Each push of a button will shift the table 12 
entries in the direction of the button. The button will beep if your are at
the beginning or the logical end of the table. The logical end of the table
is defined as the end of entries you have made, not the 120th entry, but 
otherwise will always display the next 12 free entries so you can enter new
data.

As an example, if you need to represent amounts of money in Japanese yen, 
you could assign the "$" symbol to be translated to "Ñ". Whenever you type 
a "$" with Accent translation enabled, a "Ñ" will be displayed. 

If you need to display the actual dollar sign, toggle Accent translation 
mode to OFF with the Hot Key.

One other way of generating special symbols is to assign an alias to an 
unused diacritic symbol. Assuming you have setup Accent to generate umlaut 
diacritic symbols and that you don't require all of them, you might use one 
that is not needed to be translated to something else.

In the above example, you could have requested the diacritic " " to have "Ñ"
as an alias. This is done by typing the dead key assigned for the umlaut and
then the lowercase letter "y". Accent will generate the diacritic " " and
replace it with the alias "Ñ".

Alternates

If you have an enhanced keyboard, you can use the Alternates table to 
generate special symbols. 

The Alternates table works with the extended Alt key (the right-hand Alt
key) but otherwise has the same functionality as the Aliases table. The 
table can support up to 120 entries and can be scanned with the two 
directional buttons at the buttom in exactly the same way you do with the 
Aliases table.

For instance, if you decide to set the alternate to the lowercase letter "c"
be the copyright symbol "⌐", then by typing the right-hand Alt key together
with the letter "c" will generate the "⌐" symbol.

Here also you can redirect unused diacritics to have alternates as you can
with the Aliases table. The only requirement is that the diacritics be
defined in the "Alt Char" entries of the Diacritic Keys table.
 
The functionality of the Alt key for Windows operation (menu selection and
accelerators) is still available by using the left-hand Alt key. The
Extended Alt key is captured by Accent when translation mode is ON, but is
otherwise available to Windows.

Num Keypad

Accent normally remaps keys from the main keyboard. You can use the Num
Keypad table to remap keys from the numeric keypad. The extended Alt key
does not apply to the Num Keypad table since it is reserved to enter the
Alt-0 code sequence.

Extended Char 

You can use the Extended Char table to enter a special symbol in an edit 
field. You can do that either by entering the Alt-0 code sequence given in 
the table or you can do it directly: to do a direct entry, position the 
cursor in an edit field and then click an entry in the Extended Char table 
(or use the Alt-x menu selector). The edit field  will display the symbol 
you have selected. You can move around in the table with the mouse or the 
direction keys. To confirm your selection, double-click the symbol or type
<cr>; to cancel your selection and delete the edit field symbol, type the
escape key.

OK button

The OK button is used to exit the Setup menu.

Save button

The Save button is used to save your Setup. The Setup is saved in the
WIN.INI file. This is the Setup that will be used the next time you start
Accent.

Keyboard button

You can use the Keyboard button to load one of the predefined keyboards
supported by Accent and to save or delete keyboard definitions. Clicking
this button will bring up a dialog box with the following controls:

	Keyboard list: displays the list of supported keyboards.

	Load Keyboard: sets the Setup to the keyboard selected from 
		       the Keyboard list.

	Erase Setup: erases the Setup.

	Undo: resets the Setup to the one recorded in the WIN.INI file. 
	      This button is disabled if the Setup has not been modified.

	Done: ends the Keyboard dialog.

	Add Setup to Keyboard list: use this button if you want to save 
			            the current Setup under a new name or to
				    one of the existing keyboard definitions;
				    in this latter case, the name you give
				    must be identical to the one in the
				    Keyboard list but is otherwise case
				    insensitive.

	Remove Keyboard form Keyboard list: use this button to delete a
					    keyboard definition. You will
					    be prompted to confirm the 
					    deletion of the definition file.

	Set Keyboard Accelerator: you can attach a keyboard Accelerator Key
				  to any keyboard from the Keyboard list.
				  Follow the instructions in the dialog box
				  to enter the desired Accelerator. Once an
				  Accelerator is defined for a keyboard,
				  that keyboard can be enabled by typing in
				  this Accelerator. This is identical to
				  using the Load Keyboard button but is much
				  faster and the Accelerator is available in
				  all Windows applications.  

Help button

The help button will provide online help on the use of Accent.


DISTRIBUTION

Accent is distributed as SHAREWARE. You may make copies of the software and
give it to whomever you wish as long as you do not alter it in any way and
that you copy all the files, including this manual.

The program is provided "as is" with no warranty of any kind. It is your
responsibility to decide if this software is suitable for your use.


REGISTRATION

If you use the program on a regular basis, you must register with pro++
Software. Registration entitles you to receive the latest version of Accent
on disk and grants you a non-exclusive license to use Accent on one machine.
It will also enable pro++ Software to notify you of future updates and
enhancements.

To register, send $25.00 US (S & H included) or equivalent CDN funds in 
cheque or money order to:

			pro++ Software
			8045 Saguenay
			Brossard, Qc
			J4X 1N2  CANADA

Please make cheque or money order payable to pro++ Software. Allow 3 weeks
for personal cheque to clear the bank.

You can also register with Public (software) Library with your MC, Visa, 
AmEx or Discover card by calling 800-242-4PsL (from overseas: 713-524-6394)
or by FAX to 713-524-6398 or by CompuServe to 71355,470. Please quote item
#10613 for faster processing. THESE NUMBERS ARE FOR REGISTERING ONLY.
pro++ Software cannot be reached at those numbers.

To contact pro++ Software for information about dealer pricing, volume 
discounts, site licensing, the status of shipment of the product, the 
latest version number or for technical information, call 514-465-9306 or 
write to the above address.

Comments and suggestions are welcome and can be mailed to the above address
or forwarded via Compuserve at 72571,724.

_____________________________________________________________________________


Copyright ⌐ 1992, pro++ Software.
Windows is a trademark of Microsoft Corporation. 
```
{% endraw %}

## CDROM.TXT

{% raw %}
```
T h e  P C - S I G  L i b r a r y  o n  C D - R O M,

                1 2 t h E d i t i o n



++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The PC-SIG Library on CD-ROM, winner of the Optical Publishing
Association's Best Consumer Product Award, has added a hypermedia
interface that makes it easy to find and download any type of program
you could want. The WordCruncher text retrieval program has also been
implemented to assist you insearching this vast collection.

This CD-ROM contains over 3700 fully functional shareware programs, each
with a detailed review. The 12th Edition has added over 300 new programs
and over 500 updates since the release of the 11th Edition. The
collection is always kept current and now contains over 70 megabytes of
Windows 3.0 and 3.1 applications, fonts, icons, games and wallpaper
files.

The range of software is phenomenal! There are huge assortments of
games, everything from adventure games with full SVGA and SoundBlaster
support to favorites like Klondike, Chess and Othello. Spreadsheets,
databases, wordprocessors and graphics programs are instantly available
and there are literally hundreds of unique and specialized programs that
will save you time and money. This amazing collection will help you get
a handle on all your business and home accounting and also teach your
children about zoology.

Each of the more than 3700 programs has a one-line description for quick
reference, Just pick one of the 13 software categories and a subcategory
to begin browsing for a program that interests you. You might choose the
Games Category, where you can pick from 12 subcatgories including
Adventure, Arcade, Cards and more. A mouse click (or keyboard stroke) on
the program title takes you to a detailed description of the program.
you can immediately download the software to your hard or floppy drive,
and in many cases view a screen shot.

You can find any program in the collection quickly and easily by using
the search button. When you are in a program category just type in the
title of the program and you will be taken to the description of that
program. The popular WordCruncher text retrieval program has been added
to allow searching every description for any word within that
description, not just in the title or keywords chosen by someone who
thinks differently than you do. The WordCruncher is ideal for finding
programs which perform a specific function, just try searching for
"split", "math" or "subtract". Or switch to the Disks section where you
will find an alphabetical list of all the programs which can be searched
by program title or disk number.

Everyone has their favorite programs and we're no exception. Our 44
favorite programs can be run immediately. No downloading is necessary,
all you do is click on the word "RUN" in the program description and
you'll be working or playing with top notch software right on the CD.

The power of hypermedia will allow you to try out more software than you
ever thought possible. We are sure that you will find a multitude of
programs to your liking on the P-SIG Library on CD-ROM.

System Requirements: IBM PC/AT PS/2 or compatible with 640K, DOS 3.3 or
higher, Microsoft MS-DOS CD-ROM Extensions and a CD-ROM player. We
recommend a 386 with a VGA monitor.










T h e E s s e n t i a l H o m e & B u s i n e s s C o l l e c t i o n
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

"Never before has such a valuable collection of popular shareware been
compiled on one CD-ROM that everyone can afford." Dr. File Finder a.k.a.
Michael Callahan

Finally, 368 of the most useful, popular, important shareware programs
have been put together on one CD. No matter what your need, it's on The
Essential Home & Business Collection.  Everything from Administration to
Windows software is here.

The Essential CD incorporates the WordCruncher text retrieval system.
Every program on the disc is indexed by title, filename, PC-SIG disk
number, and every word in the program description.  A new utility, Narc,
is implemented so you can look at the program files and the author's
on-line documentation without having to first copy the program to your
hard disk.  By using WordCruncher and Narc, you can quickly find the
program you want and review it to be sure, without ever having to run it
from your hard disk.

If you've got a CD-ROM player at home and want to get more use of it and
your computer, or if you're trying to avoid purchasing another Nintendo
cartridge, or if you just enjoy looking at new software, you need The
Essential Home & Business Collection.

System Requirements:

IBM PC/XT/AT PS/2 or compatible with 384K memory DOS 3.1 or higher and
Microsoft MS-DOS CD ROM extensions.


T h e  P C - S I G   G a m e s    C D - R O M
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Now you can play a game a day fo over a year.  This CD-ROM is jammed
with over 380 shareware games of all types, designed to appeal to the
new generation of CD-ROM users out for fun.  The CD incorporates a
hypermedia interface and allows 250 of the games to be played directly
from the CD-ROM.

The hottest games in shareware are on this disk, including the
action/arcade games "Jill of the Jungle" and "Wolfenstein 3D," which
rival or surpass commercial PC and Nintendo for use of animation,
SoundBlaster audio, and VGA graphics.  There are also games designed to
teach children mathematics, spelling and even ecology.  All these games
for less than a dime each!

Over 250 of the games can be played directly from the CD without copying
them to a floppy or a hard drive.  Being able to run from the CD means
that users can explore games without using up valuable hard disk space
or spending time downloading and deleting files.  The hypermedia
interface makes it easy to browse the titles, read a one line
description or full review, and copy or start a game by clicking the
mouse or using the keyboard.

T h e   P C - S I G   W o r l d   o f   G a m e s   C D - R O M
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The new PC-SIG World of Games CD-ROM contains over 550 of the best
shareware games, including 53 educational games for children and 57
Windows games. 430 of them can be played directly from the CD without
using your hard drive space.

This edition employs the award-winning HyperReader interface, allowing
easy searching and playing by using a mouse or the keyboard.

This CD is the first in a six-volume PC-SIG Encyclopedia of Shareware
series. Each volume will include the programs from a section of the
PC-SIG collection and also the programs and text from the current issue
of Shareware Magazine. This CD contains the entire text from the
May/June issue of Shareware Magazine, featuring hardware reviews of
the Tandy Sensation and the Media Vision Pro 16 Multimedia System.
Software reviews included cover 58 new shareware releases, security,
educational, CD audio and PIM's. 159 of the programs mentioned in the
magazine are included and can be downloaded using the HyperReader
interface.

There are also 89 programs which were updated since the last issue of
Shareware Magazine, helping those of you who have purchased the 12th
edition of the PC-SIG Library keep on top of the everchanging world
of shareware.

As well, a description of every program in the PC-SIG Library can be
searched with the WordCruncher text retrieval program. This Games CD
continues the ten year PC-SIG tradition of providing quality programs
and information to help you find the best program for your purpose.

System Requirements: IBM PC/AT/PS/2 or compatible computer with 640K,
DOS 3.3 or higher, Microsoft MS-DOS CD-ROM Extensions and a CD-ROM
player. We recommend a 386 with a VGA monitor.



To Order in the U.S.A.: Call 800-245-6717 and ask for Customer Service.

For Technical information: Call 408-730-9291 and ask for Technical
Support

Outside the U.S.A.: Call (408) 730-9291 for the name of the dealer near
you.
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
shareware contains over 3500 titles divided into 120 logical categories.

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

Outside the U.S.A.: Call (408) 730-9291 for the name of the dealer near
you.

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

Outside the U.S.A.: Call (408) 730-9291 for the name of the dealer near
you.
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
           Non-member $3.50 for 5.25" or $4.00 for 3.5"

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  _____

_____  _____  _____  _____  _____  _____  _____  _____  total  ______

One year subscription to Shareware Magazine            $19.95  ______

Super Saver Membership                                 $39.95  ______
(includes a 1 year subscription to Shareware Magazine,
 the PC-SIG Encyclopedia on Disk with WordCruncher,
 and 5 free disks)

The PC-SIG Catalog on Disk                              $5.00  ______
($5.00 is refundable with your first order)

The PC-SIG Encyclopedia on Disk with WordCruncher      $20.00  ______

The PC-SIG World of Games CD-ROM                       $19.95  ______ 

The PC-SIG 12th Edition Library CD-ROM                 $99.00  ______

Upgrade to the 12th Edition from ANY previous edition
of the PC-SIG Library on CD-ROM!                       $59.00  ______

Upgrade from ANY other CD-ROM just!                    $59.00  ______

The Essential Home & Business Collection CD-ROM        $39.00  ______  

The PC-SIG Encyclopedia of Shareware on CD-ROM
(1 year subscription)                                  $99.00  ______


                                                    Subtotal   ______

Shipping and Handling                                          $4.00

                    California residents add 8.25% sales tax   ______

                                                       TOTAL   ______



      If you have any comments or suggestions, please let us know!

To order by phone with VISA or MASTERCARD: Call (800) 245-6717
Ask for operator #2351
```
{% endraw %}

## BBS_ORD.TXT

{% raw %}
```
############################################
DOWNLOAD & ORDER THE LATEST SOFTWARE VIA BBS
############################################


All TOTAL SYSTEM SOLUTIONS Software products 
may be downloaded and registered on-line at:

     ATTENTION to Details RyBBS 
     Riverside, CA
     909/681-6221
     v.32bis 14.4Kbps

Major credit cards are accepted.

 
Logging on at Attention to Details RyBBS:
-----------------------------------------
     Set your Communications Program to the normal 8/N/1 settings. Dial 
     up	the BBS, and enter your Real Name and Voice Telephone Number 
     when prompted. Please complete the brief New User Questionnaire 
     that follows. After completion of the Questionnaire, dated SYSTEM 
     NEWS Notes appear. You may press [S]top at any time to end viewing 
     of the News. 

     Your First Menu will give you several Options for navigating the BBS.


FREE! Download the most recent versions of Total System Solutions software:
---------------------------------------------------------------------------
     1)  Press [M] from the first Menu to access the [M]ain Menu.
     2)  From the Main Menu, press [F] for the [F]iles Menu.
     3)  From the Files Menu, press C to [C]hange File Area.
     4)  Enter 47 to access File Area 47 - TOTAL SYSTEM SOLUTIONS.
     5)  The system will place you again at the Files Menu. Press [L] 
         to List the Files contained in the TSS Area.


To purchase Total System Solutions Software with your credit card:
------------------------------------------------------------------
     Press [T] for [T]eleShoppe OnLine Ordering from the first Menu. You 
     will find this On-Line Ordering system easy to use - and there are 
     built-in Help Screens to assist you.


You may download any of the Total System Solution files free on your first 
log-on! After viewing the File Titles, choose [D]ownload from the Files 
Menu, and follow the prompts. Several download protocols are available 
for your convenience.

Feel free to browse the BBS - and please leave any Questions or Comments 
that may arise. Messages may be entered from the Message Menu. You are 
also given the opportunity to [L]eave a Message when logging off the BBS.

```
{% endraw %}

## CIS_ORD.TXT

{% raw %}
```
Attention CompuServe Users
###########################

SWREG - CompuServe On-Line Shareware Registration Forum 

Charge payment for DocuPower right to your CompuServe account. 
No waiting! We'll send your registration license code back to 
you immediately via CompuServe E-Mail. 

Heres how to do it: 

1. Log onto CompuServe.
2. Go to the Shareware Registration Forum - GO SWREG.
3. Select "Register Shareware" from the main menu.
4. Select Registration ID from the "SEARCH BY" menu.
5. When prompted for the ID, enter 731.
6. This will bring up a description of DocuPower. 
   Enter "Y" to charge payment to your CompuServe account.
7. Complete the order by answering the remaining questions when prompted.

For more details, please see the "Methods of Payment" section of JUMPTEXT.DOC.
```
{% endraw %}

## DP_RLS.TXT

{% raw %}
```
############
NEWS RELEASE
############

DATE:     25 February 1993
FROM:     Total System Solutions, Inc.
CONTACT:  Daniel Goodman
PHONE:    718-375-1261

DocuPower 1.3
*************
Powerful Macro System for 
Microsoft Word For Windows 

After you create Word for Windows documents, how do you find them?
You know they're on your hard drive, or on the LAN file server... 
somewhere. So you keep clicking through the "File Open" list box. 
If only you could remember the file name (click, click), or the directory
(click, click) - you might actually be able to get some work done! 

Give long, descriptive names to documents! 

DocuPower breaks the eight character DOS file name barrier. It's a 
powerful document management tool that makes it easy to organize and 
quickly access your work. Best of all, DocuPower integrates seamlessly
into WinWord. It's a quality macro system from Total System Solutions, 
the makers of the award winning Fileware macro collection.

Regardless of how you have your DOS directory structure organized 
(or disorganized), DocuPower  keeps all the files you need always 
on hand, immediately available.

If you create or use a document that you know youÆll come back to
again, just point and click to put it in a DocuPower "folder". Give
each folder a descriptive title, and keep related items grouped together 
in each folder. Every DocuPower item can be opened, inserted or printed. 

OPEN ANY FILE that you want to work on - just highlight its 
description. No need to search through directory after 
directory every time you need it.

INSERT THE CONTENTS of one document into another. This can be 
a very powerful tool for automated document assembly. 
Keep standard document components in separate files. 
Group similar elements together in each folder. Access these 
items in any order to compose complex, individualized 
documents in minutes.

PRINT A DOCUMENT without having to open it first - just by 
selecting its description.

DocuPower  crosses document management and office 
automation to turbo-charge Word for Windows. It's a  
valuable tool for word-smiths like attorneys, paralegals,
secretaries, writers - anyone whose job includes word processing. 

DocuPower is available now for only $24.95
For more product information call: 718-375-1261

Get your copy now!

Telephone Order Info
====================
* Call 718-375-2997

File Download Info
===================
Download the shareware file DPWR13.ZIP from:
* CompuServe -- WINADV forum (GO WINADV; File Utilities Library #2)
* The "Attention to Details" BBS 909-681-6221 (v.32bis 14.4Kbps).

CompuServe on-line registration is available: 
GO SWREG, and order product 602.

Register on-line by credit card on the "Attention to Details" BBS.
```
{% endraw %}

## FW_RLS.TXT

{% raw %}
```
############
NEWS RELEASE
############

DATE:     13 February 1993
FROM:     Total System Solutions, Inc.
CONTACT:  Daniel Goodman
PHONE:    718-375-1261

FILEWARE 2.1
************
File Maintenance, Document Management
& Program Launching Macro Utilities 
For Microsoft Word For Windows 2.x

FILEWARE is an award winning suite of thirteen file maintenance, 
document management & program launching utilities which integrate 
seamlessly into Microsoft Word for Windows 2.x. It provides the many 
commonly requested features that Microsoft "forgot" to include. After 
auto-installation to the "File" or "Tools" menu, the Fileware system
is never more than a mouse click or keystroke away. NOW YOU CAN DO 
EVERYTHING YOU NEED WITHOUT EVER LEAVING WORD FOR WINDOWS...

FORGET FILE MANAGER. Make directories; delete, rename, copy or move files. 
Because it's integrated into WinWord, Fileware  is the easiest, safest way 
to manage files - on stand-alone PCÆs or over networks.

FORGET PROGRAM MANAGER. Launch programs instantly with "Run 
Buttons", a customizable toolbox of pushbuttons (or type a 
command on the convenient "Quick Run" line).

FORGET EIGHT CHARACTER DOS FILE NAMES. "Fast Files" keeps a 
customizable list of document descriptions close at hand. Just 
point and click to open the files you want.

FORGET COMPLICATED DIRECTORY PATHS. "Directory Jump" gives you 
pushbutton access to the directories you use the most. Just one 
click jumps you anywhere on your PC... or across your network.

ABOLISH REPETITIVE KEYSTROKES. Close all open files at the same 
time with just one command. Options include "Close Without Saving" 
& "Prompt To Save".

PROTECT YOUR CONFIDENTIAL DATA. "Word Lock" provides password 
protection for the complete Word for Windows application (not 
just certain files).

EDIT DOCUMENT TEMPLATES instantly even if you don't know which 
directory they're in.

EXIT WINDOWS when you're done working with just one click.

Fileware is a powerful yet inexpensive suite of utilities. 
It was chosen one of the "48 Best Add In" products by PC Magazine; 
PC Week says, "...adds a good selection of file and program management 
features that were left out of Word for Windows." In "Hacker's Guide to
Word for Windows" (Addison Wesley) Woody Leonhard writes, "...the system
that Microsoft forgot...makes WinWord stand on its ear."

Fileware is available now for only $39.95.
For more product information call: 718-375-1261

Get your copy now!

Telephone Order Info
====================
* Call 718-375-2997

File Download Info
===================
Download the shareware file FW21.ZIP from:
* CompuServe -- WINADV forum (GO WINADV; File Utilities Library #2)
* The "Attention to Details" BBS 909-681-6221 (v.32bis 14.4Kbps).

CompuServe on-line registration is available: 
GO SWREG, and order product 490.

Register on-line by credit card on the "Attention to Details" BBS.
```
{% endraw %}

## ORD_FORM.TXT

{% raw %}
```
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ TOTAL SYSTEM SOLUTIONS, INC.                                 +
+ 1530 East 18th Street, Brooklyn NY 11230                     +
+ Voice: 718-375-2997 FAX: 718-375-6261 CompuServe: 70154,2463 +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

#################
## TEXT JUMPER ##
#################


Registration & Order Forms 
***************************
Please complete & send this form along with payment. 
You may print and send via regular mail or Fax. Or if
you prefer, send this text file via e-mail.


From what source did you receive your copy of Text Jumper?
----------------------------------------------------------

[ ] CompuServe  Forum Name: ________________________________

[ ] BIX  [ ] Genie  [ ] AOL  [ ] Other BBS ___________________________

[ ] Catalog ______________________  [ ] Other _________________________


Name:  ________________________________________________

Company: _______________________________________________

Title: _________________________________________________

Street:  _______________________________________________

City: __________________________________________________

State: ________________________   ZIP: __________________

Country: ________________________________________________


HOME PHONE: ________________________________
             (include area/country code)

WORK PHONE: ________________________________

FAX: _______________________________________

E-Mail Service:______________________ E-Mail Address:______________________
         

#############
## PAYMENT ##
#############

Text Jumper Registration Fee:  $14.95


Date Ordered:  Month ________  Day _____  Year ______

Credit Card Orders 
------------------  
Credit card orders may be sent via mail, E-Mail, FAX, or telephone.
   

Please Check:  [ ] MasterCard  [ ] Visa   
                                                    
Credit Card Number:  _________________________________
                     
Expiration Date:  Month __________  Year _____________


Name As It Appears On Card: _________________________________________


Cardholder's Signature:  ____________________________________________
                          

______ Number of Copies @ 14.95 per Copy = $ ___________
  
   New York State residents add Sales Tax: $ ___________
                                                    
                 Total Amount Authorized:  $ ___________


Checks or Money orders
-----------------------
Please make checks and money orders payable to: 
Total System Solutions, Inc.
(Payments should be made in U.S. currency only.)


______ Number of Copies @ 14.95 per Copy = $ ___________

   New York State residents add Sales Tax: $ ___________
                                                    
                   Total Amount Enclosed:  $ ___________

```
{% endraw %}

## README.TXT

{% raw %}
```
Text Jumper General Info
-------------------------
Make your on-line documents as user-friendly as the Windows "Help" system. 
Text Jumper is a slick utility which enables you to easily create HyperText 
in Word for Windows. Just point and click to jump to any part of a document. 
Stop scrolling line after line, page after page. Use Text Jumper to automate
references. Your documents will be easier to understand and fun to read. 
From Total System Solutions, makers of the award winning Fileware and 
DocuPower Winword macro collections.

Packing List
------------
1. JUMPTEXT.DOC - Program Installer & User's Guide
2. README.TXT - this file
3. ORD_FORM.TXT - Order & Registration Form
4. CIS_ORD.TXT - 24 hour ordering on CompuServe via SWREG
5. BBS_ORD.TXT - 24 hour credit card ordering on-line on the ATD BBS
6. SERVICES.TXT - custom services info
7. FW_RLS.TXT - Fileware Press Release
8. DP_RLS.TXT - DocuPower Press Release
9. FILE_ID.DIZ - program package description
10. DESC.SDI - program package description


If any of the above files is missing, please contact 
Total System Solutions immediately at 718-375-1261 (USA), or send us a 
CompuServe E-Mail message at 70154,2463. Tell us what's missing, and 
from what source you received your copy of this program. We will make 
sure you get a complete copy of Text Jumper.


Installation
------------
To enhance speed of installation, don't open JUMPTEXT.DOC from a floppy. 
Instead, copy ALL of the above files to the SAME directory on your hard drive. 
Then open the JUMPTEXT.DOC document in Word for Windows and follow the 
instructions. 


Registration & Payment
----------------------
Text Jumper costs only $14.95 US dollars (a real bargain). Payment can be made 
via check, money order, credit card, on-line CompuServe registration, or 
on-line BBS credit card registration. For more information, call 718-375-2997.


Attention CompuServe Users
--------------------------
On-line registration is available. This means you can charge payment for
Text Jumper right to your CompuServe account. No waiting! We'll send your
registration license code back to you immediately via E-Mail. 
Heres how to do it: 

1. Log onto CompuServe.
2. Go to the Shareware Registration Forum - GO SWREG.
3. Select "Register Shareware" from the main menu.
4. Select Registration ID from the "SEARCH BY" menu.
5. When prompted for the ID, enter 731.
6. This will bring up a description of Text Jumper.
   Enter "Y" to charge payment to your CompuServe account.
7. Complete the order by answering the remaining questions when prompted.

For more details, please see the "Methods of Payment" section of JUMPTEXT.DOC. 


Getting Updates
---------------
Two distribution sites always have the most recent 
versions of all Total System Solutions Software. Check
these places periodically for updates:

1) the Windows Advanced Forum on CompuServe 
   (GO WINADV -- in the File Utilities Library)
2) The "Attention to Details" BBS: 909-681-6221
   This is a free BBS. After signing on, download 
   Text Jumper, as well as many other fine programs.
   (see the included file, BBS_ORD.TXT for more info)

Please call Total System Solutions (718-375-2997)
for version update information. Remember, interim
incremental updates are free. You can use the same
registration code to re-install ugrades.


Now The Fun Starts
------------------
Shareware lets you try BEFORE you buy... enjoy evaluating Text Jumper!


___________________________________________________________________
Copyright ⌐ Total System Solutions, Inc. 1992. All Rights Reserved.
```
{% endraw %}

## SERVICES.TXT

{% raw %}
```

Dear Winword User,

Word for Windows can do great things!
Ask yourself what you really wish computers could do. Then call us. 

Total System Solutions, Inc. creates customized Windows solutions for 
serious business users. We've developed turn-key Word for Windows 
applications to automate document processing for many major corporations. 
If you work with words or numbers in Windows, we can really help you. 

For example, we recently developed a system to automate the generation of 
commercial leases for one of the largest commercial real estate 
management companies in the world. The time required for the creation of 
customized leases was cut from over 2 weeks to under 20 minutes per 
lease!

We can save your company time and money while improving and 
standardizing the quality of your output. Call us today at 
718-375-1261 for more information.

Sincerely,

Daniel Goodman, President
Total System Solutions, Inc.
```
{% endraw %}

## W3_CONV.TXT

{% raw %}
```
			     W3 UNIT CONVERTER
			   Written By: Bill White
			       MicroVision II


The Unit Converter converts units - lots of units.  The program supports:
	Unit Search
	Clipboard copy and paste
	Unit double conversion
	ASCII data file that can be edited with any ASCII editor

Unit Conversion
Unit conversion is accomplished by entering numbers in a box which contains 
the cursor.  Numbers and scientific notation, such as 2.33455e3 are accepted.  
Conversion will work from right-to-left or left-to-right.  You can enter a 
number on either the right or left side of the table and the opposite side 
will calculate the answer.  

Unit Search
If a unit, such as "years", is entered, the program goes into the search mode.  
The entered unit will be located and displayed for use as conversion.  A 
complete word is not necessary to perform a search.

Clipboard
An entered number or an answer can be copied to the clipboard.  Position the 
cursor on the number to be "clipped" and press the "Copy" option in the menu.  
Paste works too.   To use it, position the cursor on the unit where the value 
is to be pasted and click the "Paste" option in the menu bar.  If the "Paste" 
option is grayed, there is no valid number in the clipboard.

Double Conversion
Any number in a box can be "Picked-up" and placed in a buffer.  To place the 
number in the buffer in another conversion, position the cursor to the 
desired conversion and click the right mouse button again.  The "Picked-up" 
value will be "deposited" where the cursor is located.  

For example: you wish to convert inches of mercury to Bars.  The program does 
not have this conversion, but it does have inches of mercury to pounds per 
square inch and bars to pounds per square inch.  To accomplish this 
conversion, enter the value to convert into the inches of mercury.  The 
program will calculate the pounds per square inch.  Move the cursor to the 
calculated pounds per square inch and click the right mouse button.  The 
search feature can now be used, and you can type bars.  The conversion from 
bars to pounds per square inch will appear on the screen.  Place the cursor 
in the pounds per square inch side of the conversion and click the right 
mouse button again and the resultant Bar calculation will appear.

When there is a value in the "pick-up" buffer the "Clear holder" option in 
the menu will go from grayed to black.  If you wish to clear this buffer 
click on this menu item.  Clicking the right mouse button will write the last 
value to this buffer making it unnecessary to clear the buffer.

If desired, the clipboard may also be used for this function.   The value in 
the clipboard may be used many times while the value in the "Pick-up" buffer 
can be used only once.

CHANGING CONVERSIONS
The file "W3_CONV.DAT" is where the conversion data resides.  It can be 
changed by any ASCII editor - such as DOS 5.0 EDIT.  The first file is 
configured such that the first entry is the left unit, the second entry is 
the right unit, the third entry is the multiplier, and the fourth entry is 
the adder.  These entries are delimited by commas.  The calculation takes the 
form of (x*y)+z=w where x is the first entry, y is the third entry, z is the 
fourth entry, and w is the second entry in the data file.  

The program does not sort the entries, so if you wish to keep the conversions 
in alphabetical order you must do it by its position in the data file.

REGISTRATION
This program is not Freeware it is Shareware.  Feel free to share this 
program with others, but please make sure that all files are included when
you pass the program on.

If you find this program useful, please send $10.00 to:
	 MicroVision II
	 BOX 51551
	 Midland, TX  79705
If it is not worth $10.00 to you, just send what it is worth to you. 
But if you use it, please register it.
		 Thanks
		 Bill White


FILES
Files included with this program are:
	W3_CONV.EXE     Windows Executable File
	W3_CONV.DAT     Conversion units file
	W3_CONV.TXT     This file


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3797

     Volume in drive A has no label
     Directory of A:\

    ACCENT   ZIP     70667   6-15-93   1:45p
    TXTJMPR  ZIP     51012   6-15-93   1:47p
    W3CONV   ZIP     20984   6-15-93   1:47p
    GO-STRT  DAT       541   6-01-93  11:07a
    SIGORDER TXT      3336   6-01-93   2:30p
    GO-FORM  DAT      3336   6-01-93   2:30p
    GO       EXE     26022   1-10-92  12:14p
    PKUNZIP  EXE     29378   2-01-93   2:04a
    PCSIG    TXT      2329   6-01-93   2:31p
    SHAREMAG TXT      1831   6-01-93   2:32p
    CDROM    TXT      8196   6-01-93   3:26p
           11 file(s)     217632 bytes
                           98304 bytes free
