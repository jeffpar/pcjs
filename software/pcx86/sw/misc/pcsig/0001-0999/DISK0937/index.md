---
layout: page
title: "PC-SIG Diskette Library (Disk #937)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0937/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0937"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "REORDERS AND WEDPRICE"

    A quote generation and reorder system for a professional photography
    business.
    
    REORDERS stores the number of each negative, a description, and the
    location, size, and quantity of the original.  Call up a record by its
    number and enter a reorder by size and quantity.  You can also print a
    listing of all originals and the amount of reorders.  WEDPRICE gives
    three different versions of quotations for wedding pictures.
    File Descriptions:
    
    README   1ST  How to view documentation.
    REGISTER DOC  Registration form.
    ST       COM  Program to view documentation.
    REORDERS BAS  REORDERS program.
    REORDER  SAM  Data file.
    WEDPRICE BAS  WEDPRICE program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES937.TXT

{% raw %}
```
Disk No  937
Program Title: PHOTO ONE
PC-SIG version 1.3
 
PHOTO ONE process portrait and wedding picture reorders for a photography
business.  IT lets you store the number of each negative, a
description, the location of the original picture, the size of the
original, and the quantity of the original.  The originals should be
numbered to match the negatives.  Afterward, you can call up a record by
its number and enter a reorder by size and quantity.  A listing of all
originals and the amount of reorders can be printed on the printer.
WEDPRICE gives three different printouts of personal quotations for
pictures, which can be customized by registered users.
 
Usage:  Portrait Reorders
 
System Requirements:  256K memory, one disk drive, a printer, and a
version of BASIC.
 
How to Start:  Consult your BASIC language manual for complete
instructions on how to start the programs written in BASIC.
 
Suggested Registration:  $25.00 for REORDERS and $25.00 for WEDPRICE ($35.00
for both REORDERS & WEDPRICE).
 
File Descriptions:
 
README   1ST  How to view documentation.
REGISTER DOC  Registration form.
ST       COM  Program to view documentation.
REORDERS BAS  REORDERS program.
REORDER  SAM  Data file.
WEDPRICE BAS  WEDPRICE program.
??????   BAT  Batch file (3 files).
AUTOEXEC BAT  Batch file to automatically start program on bootup
CONFIG   SYS  System configuration file
FORMAT   COM  Performs a data rediness procedure
GO       BAT  Batch file to start program
PHOTO1   DOC  Documentation
SET-UP   BAT  Installation batch file
WS-FORMS<DIR> Subdirectory containing Wordstar format files
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987,1988 PC-SIG, Inc.

```
{% endraw %}

## PHOTO1.DOC

{% raw %}
```








                                   PHOTO ONE
                                 DOCUMENTATION
                                  Version 1.0


This document is to familiarize you with the features of this program. This has 
come about by combining previous programs and files into one larger program and 
given the title of `PHOTO ONE'. In addition to combining separate programs, 
screen prompts have been added to make the entire process more user-friendly. 
PHOTO ONE should be able to be used by those new or experienced with computers. 
But it is recommended that this document be reviewed before actually using. 

There are presently three (3) major subdivisions which will be described in 
greater detail in this document's subheadings. The information should appear in 
approximatly the same sequence as the information will be used for a typical 
wedding customer. Therefore, you may keep your present system (or lack of one) 
and gradually convert to this system by simply starting with your next wedding 
presentation and follow it through its entire cycle. As you gain confidence in 
using PHOTO ONE (hopefully long before one wedding has been through it--that 
could be over a year!), you may start adding exceptionally small ones. Or (if 
you're desperate) exceptionally large ones! Procedures assume at least 256K RAM 
and 360K dual-disk drives designated as `A' and `B' plus an Epson-compatible 
for print-outs. It's further assumed that if your system does NOT meet the 
above criteria (i.e. a hard disk), you'll be able to use the `Batch' files 
after modifying them (i.e. change drive `B' calls to `C', etc.).


                                Original Set-Up

With the original disk in the `A' drive, type `SET-UP' and `<CR>' (the Enter 
key). Leave the original in the `A' drive as the `source'. You'll be prompted 
for a `Volume Label'; it will be displayed when various `DOS' commands (i.e. 
`DIR', etc.) are invoked. Note that the first disk produced will be used in 
`Step #3' as a data disk. Put it away until you get to that segment. The second 
disk will normally have to be made only once. Use only the new copies so the 
original remains unchanged. You'll be modifying many files so please do this!

If you're already `up-and-running', after the DOS prompt type `GO' `<CR>' 
(henceforth meaning press the `Enter' key) and your monitor will display how to 
begin various segments. Even this is done automatically when starting (or you 
may reboot w/`<Ctrl-Alt-Del>') w/PHOTO ONE in Drive `A'. The files with a 
`.BAT' extension do this and set required parameters (including date and time). 
These work best if they're all on each DATA disk (the `SET-UP' file does this 
for you); they're the ones that prompt you to put in the correct PROGRAM disk 
in the `A' drive, etc. Hard disk users will want to put the batch files on the 
hard disk. Unless they're changed directly (such as `VERIFY OFF' after the 
system prompt) they'll remain in effect until the system is rebooted. IF all of 
the parameters are set when placing the disk in the drive (i.e. if another 
application was run but `PATH', etc. weren't changed), you may simply start the 
first segment by typing `1' <CR> after the DOS prompt without using `GO' first.



                                -*- Page #1 -*-





                                 Presentations
                                    Step #1

A `FORMS' subdirectory contains various files to help with getting all of the 
necessary information TO prospects as well as FROM them to provide realistic 
quotations for a wide array of coverage. Most are merely product descriptions 
and may have to be changed accordingly. But the data sheet is a key element and 
should be helpful in a wide range of styles. For example, flat-rate `creation 
fees' could easily go in the `labor' blank. You may fill that information in at 
the initial presentation or during confirmation--whichever works best for you.

Provided that several assumptions are met, typing `1' provides easy access with 
or without the start-up menu as previously explained. One assumption is that 
they'll be used with a word processor that is WordStar (tm)-compatible. Not 
only that, but also the installation must be done similarly to work the same. 

The `WSU.COM' and/or `WS.COM' file was saved as `WSEPSON.COM'. If your version 
doesn't have a file with that name you may now do so--or you'll have to change 
the `1.BAT' file accordingly (with DOS's EDLIN, WordStar's non-document mode or 
similar) or you'll have to start this segment by other means.

To print as intended, your WordStar (tm) version needs the same `user patches'. 
As usual, ^PA is elite (alternate 12 cpi), ^PN is pica (normal 10 cpi), ^PQ is 
compressed, ^PE undoes compressed and ^PT/^PV is superscript/sub-script. But 
the same code undoes both for my LX-80 Epson so I use ^PR and the `^R' appears 
at the beginning of each document in order to cancel scripting the entire page. 
The ^PW is the expanded (or `Wide') mode that uses a carriage return/line feed 
combination to stop it. See your printer's manual for your specific codes to 
enter or simply modify the files to accommodate your version(s).

Once you're at WordStar's (tm) Main Menu, note the `INFORM.COM' command file. 
Because of the `.COM' extention, it appears last in the displayed directory to 
make it easy to find. Although it isn't necessary, I like the uncluttered look 
made by the `F' command before anything else to remove the directory of files. 
To start, press `M' (or `m') for MailMerge (tm), `INFORM.COM' for the file name 
and the ESCape key for all of the program's defaults. After becoming familiar 
with how it is set up you'll be able to print on letterheads (with simplified 
layout similar to ours) and/or continuous forms on both sides with relative 
ease. If you're familiar with WordStar (tm) you shouldn't have any trouble from 
that point on as there are many prompts to guide you along the way. If you have 
started wrong or don't wish to choose anything simply abort MailMerge.

If you don't have a WordStar (tm)-compatible word processor available, `ST.COM' 
has been supplied to display the information. After the DOS prompt, just type 
`ST' and follow its instructions or try a shortcut--`ST REGISTER.DOC'. Note 
the display is much more readable than the DOS `TYPE REGISTER.DOC' command. You 
can even make a `screen dump' by pressing `<Shift-PrtSc>' which is holding the 
`Shift' key down and simultaneously pressing the `Print Screen' key.

Undoubtedly, there are many gross misassumptions in the above output but one 
has to start somewhere. You may modify the files to better suit your way of 
doing things. Or you just might consider trying my way--but DO TRY it! No 
matter how well the print-outs describe your work you won't be able to simply 
hand it to your prospects. Depending on how many questions, etc. it generally 
takes from about 30 minutes to an hour and a half for an initial presentation 
in our studio. All materials shown are given to her/them for reference. But 
only the checklist has their data--unless they pay for a confirmed booking.



                                -*- Page #2 -*-





                                Wedding Prices
                                    Step #2

This number `2' portion is started similarly to the above except it (as well as 
`3') is presently run with GWBASIC or BASICA (tm). To get a better `feel' of 
how these programs work, I suggest initially using in their present state. 
They're basically ready-to-go, but you may wish to modify the source code to 
change `Broad Street Photo' to something more appropriate for you as well as 
prices, etc. To assist you with that, a brief outline of line numbers has been 
provided. While the program isn't running (press `<Ctrl-Break>' to stop execu-
tion), restart with `RUN 3210' and the usual `<CR>'.

If you don't presently use Leathermark, you may use something very similar. In 
that case, changes may need to be nothing much more than the names--or you may 
simply not use that subroutine. On the other hand, if you aren't currently 
handling Art Leather's albums, may I suggest you give them a try? Registered 
users may request information about cover sets we feature, which labs are used, 
what film/equipment, and other such things--be specific! Future versions may 
include frequently-requested information. You hopefully will get more out of 
learning these programs than you bargained for!

The source code of this program is mostly printer output with minimal screen 
display. Note that multiple-quantity answers are entered together with COMMAS 
to SEPARATE SIZES.  You may save paper when really not needed by running it 
with the printer turned off--but wait for the output to `print through'. The 
formulas (few as they are) basically allow larger quantities lower unit rates. 
Minimal monitor display allows quick and easy quotes (right over the phone) and 
is an excellent way to become accustomed to how the program works.

Note the prompts for guidelines; a simple `enter' without information (hence-
forth referred to as `<CR>') produces what for us is usually the most common 
selections and is set up as a default intentionally. Therefore I often can 
merely press `<CR>' five times in quick succession to quote wedding originals 
in our `regular' 8x10 album series. I can mentally add the price of our lowest 
price cover set if they want a starting point with one. But that's usually as 
far as I go with phone inquiries--ONLY a beginning price. If they get too 
insistant, rather than simply turn them away I ask if they agree that one of 
our photos can be worth more than someone else's entire album. Custom quotes 
require a session which uncovers more information than merely answering "How 
much are your weddings?" produces. Getting prospects into your studio should 
result in a high percentage booked. You might normally use the `Data Sheet' 
from `Step #1' for a firm quote at a presentation. We have HALVED presentation 
time AND improved performance by using this program for every prospect!

If asked about reorders, they probably are aware that some photographers use 
that as a `trap'. After all, if the wedding has already been shot, where else 
can they get QUALITY prints if your contract requires that you're the only 
professional photographer? My approach is usually running (if asked) a quote 
with 10 of each of the three sizes--but I prefer to run that part LAST. Note 
that it still retains the original name(s) (such as Smith/Jones) and prints it 
on the `Reorder Form'. Why "10" of each? Because it makes it easy compute the 
price-per-size and implies you don't expect a giant reorder--imagine how YOU 
would feel in THEIR shoes if 100-8x10's was listed! If you choose the discount 
option, they can note how much can be saved. I show them how the current dis-
count applies--but I add that THEIR REORDER rates may be slightly different 
because different rates may be in effect at that time. Most customers prefer 
you be `up front' with them. It makes them feel there's no hidden surcharges. 



                                -*- Page #3 -*-





Italics was chosen for a more personal-looking touch--remember the motto that 
you only get one chance to make a good first impression! This also allows 
easily distinguishing this form from others. A quotation should fit on just a 
sheet or two--two or three of one appropriate `Combination' would be a usual 
minimum. Ask for a few guidelines before print-out, do it quickly while they're 
reviewing another album and go over it with them. I like to be flexible but I 
don't show everything to everyone--it's initially too confusing on their part. 
You can always run another variation. You want to impress them that you can do 
it THEIR way--they're already aware many different styles are available. They 
know they want pictures taken but they usually don't know what they want: how 
many, what kind of album, who should do them, etc.--show them WHY YOU!

A perforation skip-over has been inserted to produce more-readable continuous 
forms. This can be removed to allow easier copies on both sides of one sheet--
great for complete file copies. I provide prospects a copy to take with them IF 
they're undecided--AND with incentive to get back to us and book with us soon!

Enough of the `helps' and `hints'...I don't wish to intimidate you! Give it a 
whirl with your BASIC program. If there are specific items (such as the `Form 
Feed' code so you can identify it and change it for your printer) you wish to 
know, drop me a note and I'll try to explain what is used.


                                    Reorders
                                    Step #3

This program was originally intended to be a fast, efficient means of handling 
wedding photo orders. And I believe that goal can be reached with this version 
if you follow the guidelines. PC-SIG's try-before-you-buy philosophy sounded 
like an attractive, fair and innovative means to market this program; this is 
how it was originally distributed in March '88. `On-the-job experience' has 
shown where modifications can improve the original idea.

Most photo studios would undoubtedly agree that a LOT of time is needed just to 
process the paper work in wedding reorders. Everyone has their own way of doing 
things but I believe they'll find the system suggested here (or variations of 
it) is accurate AND efficient--and will go a long ways in solving the following 
`sticklers' (conveniently forgotten until the next wedding--and you only need 
to remember `SHE' will do the next one...): (1) WHICH cake-cutting pose, (2) 
WRONG poses chosen (especially phone orders!), (3) call-backs to ask for more 
information than `Our Family' provides, (4) remembering if the quantities of 
the reorders INCLUDE originals or IN ADDITION to them, (5) how much of the bill 
is OURS (or after everything is back: "Could we have the charges separate?").

The first step is to have the processing lab number the originals to match the 
negatives. Many mail-order labs offer this service for little or no charge. 
There are several variations; the `trick' is to separate by subject (and keep 
it so!) and use the negative/print number from them. You may use up to the last 
THREE digits. This allows nearly 1000 poses per wedding but we usually don't 
exceed 10 or 15% of that. However, some may produce `sub-series' of 122988-
123050, 123519-123601 and a few `stragglers' like 49077, 50522 and 51220. It 
seems that most labs have a few reprinted and use whatever series of numbers 
come through. Other labs start over with every roll; in which case you should 
renumber duplicates. Then the easiest way is to first sort the rolls in approx-
imate order with the first roll remaining the same, the next roll is `101' to 
`122' (if only 22 poses printed), etc. You may find it a helpful reference to 
`code' the available light (ISO 400) roll starting with `401'.



                                -*- Page #4 -*-





We explain beforehand to the newly-weds that we normally have at least some of 
the formals processed-and-printed to 8x10's. Then they can have the album com-
pleted with THEIR choice of poses (even though we may `help' a little) within a 
MONTH of the wedding. This greatly improves everyone's perception of their 
efficiency, increases reorders AND they'll often put more poses in their album 
than we would have. And THAT makes EVERYONE happy!

The beginning of this document explained starting the `SET-UP' procedures. It 
produces a data disk that was to be put aside until now. Put it in drive `B' 
and start with `3'. This will run the `REORDERS.BAS' program. Use write-protec-
tion tabs for inactive disks as well as your working original (disk #2). AND 
keep back-up copies of active disks produced by the following directions.

If you peek at the source code, you'll quickly see that most of the program 
consists of product descriptions that are self-explainatory, codes for the 
printer, etc. In brief, it's mostly screen output with a final print-out or two 
and there are TWO general sections. Throughout the program many answers may be 
simply and quickly answered with a default by pressing the `Enter' key (which 
is indicated as <CR>) and the first question is no exception. Type `y' or `Y' 
and add a <CR> or even just <CR> will put you in the first portion. Upper/lower 
case makes nicer print-outs but isn't essential. The name should have no more 
than eight (8) characters. Longer entries may print on your output but the 
created random file will be within DOS guide-lines. You may add `.BG' (DOS 
allows up to three characters after the optional dot) to designate the Bride 
and Groom's reorder. You may have only one reorder initially but give an 
incentive for early reorders and you'll have more to send with it in a month or 
two. Encourage orders neatly turned in with 50% down, by pose numbers, with 
chosen poses adequately described, for whom AND in a reasonable amount of time 
just didn't fly until we did most of the `work' for them with this program.

After entering the file name, the Main Menu is displayed. All records must 
initially have a `Null Value' entered as prompted at the top of the Main Menu 
or ALL numbers are VALID! Initialization `undoes' this after you press number 
`1'; then `y' (or `Y') and `<CR>'. Do this ONLY ONCE for each file! If `1' is 
accidentally entered, `n' or `N' and/or `<CR>' returns you to the Main Menu and 
avoids resetting everything back to the default `Valid-but-Without-Data' mode.

Main Menu selection `2' is for entry of the negative numbers and description. 
Responding with a pose number and `<CR>' starts the process. Invalid numbers 
aren't accepted. Answer the prompts for quantity and size of the ORIGINAL(S); 
pressing only `<CR>' results in a 4x5 `Size' default. The `Description' and 
`Original Situation' input must be no more than 20 characters each. A `guide-
box' for maximum length is shown for most entries that are length-sensitive. A 
`<CR>' creates defaults--they aren't especially descriptive but they're quick 
and valid. Until `1000' is entered you'll loop back for another pose.

Be sure to enter at least all poses that are likely to be ordered from--if not 
100% of them. If time doesn't permit all entries at one session, simply enter 
`1000'; `n' or `N' to NOT print and `7' to end the program. All information up 
to that point is automatically saved on the disk. Re-start with choice `2'--do 
NOT RE-INITIALIZE or your information will be DELETED! If you aren't working in 
sequence or don't know where you're at, the program will warn you if a number 
already has been entered. If your lab duplicates numbers, this is a good point 
to reassign those you're aware of--be sure to change the print AND negative. 
Using the last three digits in the example at the beginning of this document 
would present a problem only with 50522 and 123522. When the program alerts you 
to entering duplicates, simply indicate `n' or `N' if you don't wish to change 



                                -*- Page #5 -*-





it. Otherwise, you'll be prompted for all information as though that pose was 
never entered before. If an original hasn't been used and is saleable, it makes 
sense to use the original first; but DO NOT enter REORDERED quantities yet. 
When you're finished entering all of the poses, you'll be prompted if a print-
out is desired. The result is printed in space-saving format; further compact-
ness is possible by turning it over. Your monitor displays what has been sent 
to the printer. File it with the negatives and you'll be glad! Although the 
program assumes the printer is turned on--you MAY have it off to save paper.

After the poses are entered you'll have several options. But be sure to keep a 
permanent record at this point (i.e. WITHOUT the reorders entered). NOW is the 
time (while a reminder at the top of the main menu is active) to duplicate the 
file if you anticipate others ordering. Put simply: duplicate the file (but 
with different names) BEFORE entering any reorders; then place the reorders in 
the duplicated file(s). If you're at the Main Menu press `7' to exit `SMITH.BG' 
or whatever program is listed; the program will then exit to the familiar DOS 
prompt. Following that, type `DIR' after the `B>' (or `DIR B:' if `A>') to 
verify spelling, etc. Type after the prompt A>`COPY B:SMITH.BG B:SMITH.1' 
(assuming `A>' is already there--don't type it) or B>`COPY SMITH.BG JONES' and 
`<CR>' after THAT prompt. The whole thing takes hardly even a minute--and has 
all the poses and descriptions! Create one entire file (presently about 65,000 
bytes!) for EACH person reordering.

Each floppy disk may contain only up to 5 files/weddings. Therefore, you may 
have to put copies of files on separate disks. Additional disks can (and 
should) be easily created with the proper formatting via `SET-UP'. `Volume 
Labels' like `AUGUST1987', `WEEK#10' or `A-D' should help. Then place the 
original disk in the `A' drive; the newly-nade disk in the `B' drive and type 
A>`COPY SMITH.BG B:JONES.1'--and write the file names on a `stick-on' label.
After copying all files wanted at that time, restart the program with the 
newly-created variation--leave the original file in its original form.

When all poses are entered the first time, I suggest printing a copy for future 
reference. As poses are entered into the album, mark the location on that sheet 
for your permanent file. This will come in handy for entering changes under the 
Main Menu's `Item 6' (see below for full explaination). After they're updated I 
suggest re-entering `Step 2' and enter `1000' immediately. You may foresee that 
an offer to print another, updated summary could be useful. The resulting 
print-out (along with their ALBUM print-out--see `STEP 4') is to provide the 
new, proud owners of the album an `index' of the `extras' (which are in turn 
given to them on a temporary, approval basis with the album). This could be 
invaluable to help them determine whether or not a pose is in the album, keep 
track of who has which original, payments, etc. And when they come in with 
their reorders, you won't think, "Oh no, not another reorder!"

The program will add the actual reorders together for you AND keep each order 
separate. To start this phase (the files are initialized and the poses are 
labeled) let's assume we'll continue with `SMITH.BG' where we left off. Step 
`3' will ask for a pose number and verify if the number has been used. If the 
chosen number wasn't entered in step 2, it will bring back the main menu from 
where you may enter a valid number. Once into the subroutine, it alternately 
asks for [A] the size and [B] the quantity of that size, etc. Note that not 
only will it continue within that pose number but that it is NOT updated until 
a `9' and/or `<CR>' is pressed. Therefore, if you enter 3-4x5's and 1-8x10 but 
then `add' 2-4x5's it will put only the latter 2-4x5's and 1-8x10 into the 
file. You should enter `5' instead of `2'! Or enter `<CR>'; THEN adding `2' 
(with `Step 3') to the pose produces 5-4x5's. Try it and you'll understand.



                                -*- Page #6 -*-





Main Menu `Item 5' (`Subtract') works similarly to `Item 3' (`Add') except one 
or two details. If you deduct an amount which would produce less than zero, it 
will bring up the sub-menu as usual but add a comment that too large a figure 
was entered. For your convenience it also displays what amount IS present and 
you may try again or leave it as it stands since your quantity to be subtracted 
has already automatically been changed to zero. The `Add Mode' (`3') amount is 
similarly zeroed if you try to subtract a quantity by putting a minus amount. 
Experiment a little with `3' and `5' and you'll better understand them.

`Item 6' on the Main Menu will allow you to check the status of any pose 
quickly and thoroughly. When you've seen what you need, you may simply press 
the space bar (or `<CR>') to return to the Main Menu and select any choice from 
that point. Instead of just viewing the information you may actually change the 
original's situation, a description or delete the number by simply typing an 
upper-or-lower case `X' following those choices. Taking advantage of this 
doesn't necessarily result from mistakes. Review the previous description of 
`Step 2' (above) for one explaination. In either case, be sure to use the `/' 
abbreviation suggested for the Bride and Groom's album pages when you enter it. 
Another good reason to enter every pose is if they move out of town before the 
originals are back. If done before sending originals to the newly-weds, you'll 
make identification of those not returned easier. After all, why have them 
returned if non-album prints can be bought/sold? Furthermore, if they later 
decide to add pose #409 to their album it's quick and easy to update. While 
entering `new' data note that the `old' information is shown for reference.

Choosing `Step 4' and its default will print out the reorder. Unless you bypass 
the date while booting up, the program should include the print-out's date with 
the file's name. But first the program reminds you to put forms in the printer, 
etc. Although three-digit numbers are the MAXIMUM, one- and two-digits ARE 
valid. But if you DON'T use them, your printer will `pause' until a `valid' 
pose is reached. That's part of the reason that a display of how much of the 
series has been scanned appears on the screen. Even though it slows output, the 
entire file can be scanned in a minute or two. That's faster than many printers 
can print all of the information. So that should be no major obstacle.

The printed information is normally sorted by poses and shows how many of which 
size has been ordered. The output will line up nicely with the assumption that 
no more than 99 prints will be ordered from any one pose. Should that occur, 
the program will print the correct amount and add it correctly, but it will 
place a percent sign in front and not align the usual way.

Extra "room" has been provided to allow printing on letterheads for a nicer-
looking customer copy. If you use hand-fed cut sheets you may be able to take 
the printer off line and insert additional sheets when required. A summary is 
printed at the end of the print-out to make it easy to quote the entire reorder 
(a part of the first segment). Accepting the option to easily and quickly print 
another copy to keep on file will make it easier to sort the prints than `proof 
book' or similar forms--and even more so if they just bring in their own notes!

Instead of merely having REORDERED poses printed in NEGATIVE numerical order, 
you may have poses in PAGE sequence. This is done by entering `n' to `Step 4'. 
It uses the "Originals' Situation" entry of page listings; either `All Poses' 
(which prompts for a longer title length because of wider print-out) or from 
one of the albums. Either will allow entry of longer titles by simply typing 
more. But remember the title is printed double width so the PRINTER might not 
like it! And that's why using the abbreviations as suggested is so important. 
They not only save time but also make it possible to print useful reports.



                                -*- Page #7 -*-





Now it's easy for everyone to envision the Bride & Grooms' album as it is laid 
out--even pages facing each other are subgrouped. A better understanding of 
this and other functions is more-easily understood initially by utilizing the 
`REORDER.SAM' sample file. The sample file is easily opened by pressing the 
often-mentioned `<CR>' without any additional input. And by the way, the pose 
chosen for the cover was given a `#' after the `/' to have it sort FIRST in the 
print-out with the heading somewhat centered above it.

If you restart this program you'll recall it asks if you wish to create/update 
one file (NOTE: The `RUN 100' option bypasses this question!). This time answer 
`N' or `n' and you're well on your way. When it asks for the name simply enter 
`SMITH.BG' (or enter the provided `Reorder.Sam' sample file) as before and then 
press the `<CR>'. For now let's end the series with another `<CR>'. The result-
ing information is somewhat similar to previous forms. But note it will fit on 
standard 1"x4" labels with one pose per label and room to spare IF your printer 
also prints compressed elite, etc. A summary should appear on the last label or 
position. If you don't use the self-stick labels you can use regular paper (you 
may even turn it over and use the other side!) and cut them up and insert them 
with the negative in the glassine. You'll never go back to the `old' way.

I hope you feel that up until now this program is definetly worth your while. 
But here's the "REAL payoff"! If you copied the files as instructed it is just 
as easy to send the lab a print-out for COMBINED totals by pose number. Simply 
enter `SMITH.BG' for file #1, `SMITH1' or `SMITH.1' for file #2, `JONES.PAR' 
(for parents) for file #3, etc. You are limited to FIVE (5) files because [A] 
that's all that will fit on a 360K floppy, [B] DOS Version 2.xx will normally 
handle all of them and [C] that's usually adequate for most weddings. The files 
to be combined must have THE SAME POSES entered--even if there is no reorder 
quantity for any particular pose. ENTRY OF POSES WITH `Step 2' IN MORE THAN ONE 
FILE MAY CAUSE ERRATIC, UNRELIABLE BEHAVIOR IF ENTRIES ARE DIFFERENT! The only 
realistic means I'm aware of is described in detail above. Go back to your 
original file (from the newly-weds) if you need another file or you'll have to 
adjust it pose by pose (a LOT longer AND more subject to errors!).

Admitedly, much detail has been covered in this document. Much of it is aimed 
towards those familiar with BASIC in general but not some of GWBASIC's short-
cuts; some details that others (as thorough as they are) often ignore or leave 
you wondering what was meant. I feel things in that regard are starting to look 
up--but I'm not taking the credit for it! As usually the case, it's much easier 
than it sounds. Just try it before you enter a "real" project. In fact, the 
entire program should be easy to use. Once duplicate numbers are eliminated 
(which is still faster and easier than trying to match prints to negatives from 
scratch) most weddings can be entered in less than an hour--even when using the 
nicer-looking `Sandra & Douglas CU' instead of the "generic" `B/G CU'. But I 
still resort to squeezing more data in the small space I've allowed by using 
abbreviations for `Close-Up', `Horizontal', `Half-Length', etc. as you have 
undoubtedly already noted in the example file. If not, take a few minutes and 
take a peek at it now!

Use the following as a sample run if you just got the registered version and 
want to have print-outs of files already-created with the earlier version. Yes, 
the new version should work under those circumstances. In fact you should be 
able to have print-outs of about 10 or 12 files (that were made before) in 
album sequence in less than an hour--unless you have a lot of big weddings! 
Have fun and enjoy the time these programs will save you!





                                -*- Page #8 -*-





         1. (From Start-Up Menu...)       `3' `<CR>'
         2. (Open only one file?)         `Y' <CR>
         3. (Name of file to open?)       `<CR>'
         4. (For print-out options)       `4'
         5. (In sequence of negatives?)   `N' `<CR>'
         6. (To choose B&G's album)       `/' `<CR>'
         7. (Title of Print-Out)          `Russ & Susan's Album'
         8. (To end program)              `7'
         9. (Follow directions to restart--which amounts to back to #1)

                        Optional `Quick Restart' Method

         8. (To abort program)            `<Ctrl-Break'>'
         9. (To `quick-start' again)      `RUN 100'
(This takes you to the third step--repeat until all desired files are printed.)


                              Placement of Files

The batch files that start with a number (and end with `.BAT') should be placed 
on the `data' disk that is normally used in drive `B' (or in a subdirectory of 
drive `C' if you have a hard disk). The portion called by `3'(.BAT) will be 
able to hold them plus five random files. As mentioned before, this is done via 
the `SET-UP'(.BAT) file. You may simply indicate them on the label initially 
for easier recall of them. However, the `GO'(.BAT) file will print a mini-
directory on your monitor if you put it on your program disk. Note that the 
`(.BAT)' portion doesn't have to be typed--it's there for your reference. Use 
the following as a guide to place and execute them and the remaining files.

1.BAT--Place on data disk used in drive `B' to call up WordStar files
2.BAT--Place on data disk used in drive `B' to start GWBASIC wedding pricing
3.BAT--Place on data disk used in drive `B' for GWBASIC post-wedding data

GO.BAT--Place on program disk used in drive `A' for directory of `.BAT' files
SET-UP.BAT--Used to place program on floppies (especially helps newcomers)
AUTOEXEC.BAT--Place on program disk; automatically calls `GO'(.BAT) @ boot up

README.IST--Enter `TYPE README.1ST' to read initial instructions if same drive
REORDER.SAM--A sample random file called (by default) within `REORDERS.BAS'
REORDERS.BAS--Started with `3'(.BAT); the actual program with source code, etc.

WEDPRICE.BAS--Started with `2'(.BAT); the actual program with source code, etc.
PHOTO1.DOC--This documentation file; print by entering `COPY PHOTO1.DOC LPT1'
REGISTER.DOC--Provisions for use of programs, registration form, etc.

COMMAND.COM--Part of DOS; used with system disks for routines, etc.
FORMAT.COM--Called by `SET-UP'(.BAT); a DOS file to format disks, etc.
ST.COM--For displaying WordStar files on the monitor








                            -*- End of Document -*-



                                -*- Page #9 -*-





```
{% endraw %}

## REORDERS.BAS

{% raw %}
```bas
10 REM -*- A BASIC PROGRAM TO ASSIMULATE WEDDING REORDER INFORMATION
20 KEY OFF:COLOR 31,0:CLS:ON PLAY(5) GOSUB 3190:REM -*- OPENING SEQUENCE w/MUSIC
30 SCREEN 0,0:PLAY ON:LOCATE 21,18,0:PRINT "SEND TO: 221 Broad Street, Bellevue, OH 44811":LOCATE 9,13:PRINT "Copyright (c) 1988 by Ron Herner dba Broad Street Photo":LOCATE 17,15:PRINT "$25. donation suggested if most of program is useful"
40 COLOR 15,0:LOCATE 13,1:PRINT "If all files and credits included: program may be distributed FREE to $8.00 MAX.":LOCATE 5,23:PRINT "R E O R D E R S   -*-   Version 2.1":GOSUB 3190
50 FOR W=1 TO 1500:NEXT W
60 LOCATE 9,13:PRINT "Copyright (c) 1988 by Ron Herner dba Broad Street Photo"
70 FOR W=1 TO 2500:NEXT W:CLEAR:RESET:CLS:LOCATE 1,1,1:PRINT "The following lists the files within the immediate subdirectory...":PRINT:FILES
80 LOCATE 19,5:PRINT "Initially start with ONE file...you may simply press <CR> (`Enter' key)...":LOCATE 21,5:PRINT "You may choose to work with one file or print up to five (5) together..."
90 LOCATE 23,5:INPUT "Do you wish to create/update one file at this time (Y/N)";SF$:IF SF$="N" OR SF$="n" GOTO 2480
100 CLEAR:COLOR 0,7:CLS:REM -*- ENTRY OF CUSTOMER NAME AND OPENING OF ONE RANDOM FILE IN THAT NAME
110 PRINT"The files within the immediate subdirectory...":PRINT:FILES:LOCATE 21,2:PRINT"Pressing ONLY `<CR>' will provide the sample file (for initial familiarity)...":LOCATE 23,4:PRINT"The name of the file to open (subject to DOS limitations)..."
120 LOCATE 23,64:COLOR 15,0:PRINT SPC(14):LOCATE 23,65:INPUT "",C$:COLOR 0,7:CLS:IF C$=""THEN C$="Reorder.Sam"
130 OPEN C$ AS #1 LEN=66
140 REM -*- F$=NULL * N$=NEG# * S$=ORIG SIZE * D$=POSE DESC * O$=ORIG INFO
150 REM -*- Q1$=2½x3½ QTY * Q2$=3½x5 QTY * Q3$= 4x5 QTY * Q4$=5x7 QTY * Q5$=8x10
160 REM -*- Q6$=11x14 QTY * Q7$=16x20 QTY * Q8$=20x24 QTY * OQ$=ORIG QTY
170 FIELD #1,1 AS F$,2 AS N$,2 AS OQ$,5 AS S$,20 AS D$,20 AS O$,2 AS Q1$,2 AS Q2$,2 AS Q3$,2 AS Q4$,2 AS Q5$,2 AS Q6$,2 AS Q7$,2 AS Q8$
180 CLS:COLOR 15,0:LOCATE 7,5,0:PRINT " Note: Initialization is the first step ";:COLOR 31,0:PRINT "IF the file was just created";:COLOR 15,0:PRINT "... "
190 COLOR 0,7:LOCATE 9,5,0:PRINT"Step #1 -*- Initialization--Will Delete Previous Entries":LOCATE 11,5:PRINT"Step #2 -*- Entry of Negative/Originals' Numbers"
200 LOCATE 13,5:PRINT "Step #3 -*- Adding Reorders by Size and Quantity":LOCATE 15,5:PRINT "Step #4 -*- Print-Outs for "C$:LOCATE 17,5:PRINT "Item #5 -*- Subtract from Reorder Quantity":LOCATE 19,5:PRINT "Item #6 -*- Check or Alter Poses"
210 LOCATE 23,17:PRINT "Please choose...":LOCATE 21,5:PRINT "Item #7 -*- End ";:PRINT C$;:IF ASC(RIGHT$(C$,1))=83 OR ASC(RIGHT$(C$,1))=115 THEN PRINT "' Program" ELSE PRINT "'s Program"
220 COLOR 15,0:LOCATE 3,32:PRINT SPC(14):LOCATE 4,32:PRINT "  MAIN  MENU  ":LOCATE 5,32:PRINT SPC(14)
230 LOCATE 23,33:PRINT"   ":LOCATE 23,34,1:INPUT"",FUNC:COLOR 0,7:IF (FUNC <1) OR (FUNC >7) THEN CLS:COLOR 31,0:LOCATE 7,20:PRINT" Valid choices are `1' through `7'... ":COLOR 0,7:GOTO 190
240 CLS:ON FUNC GOSUB 260,340,760,1070,1940,2260,2470
250 GOTO 190
260 REM -*- INITIALIZE DATA FILE
270 CLS:LOCATE 21,5:PRINT "The "C$" data file will be reset if you choose to continue...":PRINT :PRINT TAB(5):INPUT "Are you sure it's OK to wipe out its present state (Y/N)";B$:IF B$="Y" OR B$="y" THEN 280 ELSE CLS:GOTO 180
280 CLS:LOCATE 23,3,0:PRINT "Please wait...";:COLOR 31,0:PRINT " Initialization in Progress ";:COLOR 0,7:PRINT "...program will beep when ready..."
290 LSET F$=CHR$(255)
300 FOR I%=1 TO 999
310 PUT#1,I%
320 NEXT I%
330 CLS:BEEP:COLOR 15,0:LOCATE 7,5:PRINT " Note: You ";:COLOR 31,0:PRINT "must";:COLOR 15,0:PRINT " enter negative numbers AFTER initialization... ":COLOR 0,7:RETURN
340 REM -*- ENTRY OF ALL KNOWN NEGATIVE NUMBERS AND RELATED INFO
350 CLS:GOSUB 2420
360 IF NEG%=1000 THEN CLS ELSE 470
370 LOCATE 23,5:INPUT "Would you like a listing of all poses with a brief description (Y/N)";E$
380 IF E$="N" OR E$="n" THEN 460 ELSE CLS:LOCATE 23,9:PRINT "Please turn on the printer; then strike any key to continue..."
390 IF INKEY$=""THEN 390
400 LPRINT CHR$(27)"@" CHR$(27)"0" CHR$(15):LPRINT TAB(11) "-*- "C$" poses @ " DATE$ " -*-":H=1:CLS:LOCATE 23,5,0:COLOR 15,0:PRINT " Information has been sent to the printer about negative number    ... "
410 FOR G%=H TO 999
420 GET#1,G%
430 IF ASC(F$)=255 THEN 450 ELSE LOCATE 23,69:PRINT USING "###";CVI(N$):LPRINT :LPRINT TAB(10)"Pose Number" CVI(N$) "has " CVI(OQ$) S$ " original(s)"
440 LPRINT O$" <> Description: "D$
450 NEXT G%
460 COLOR 0,7:LPRINT CHR$(12) CHR$(27)"@";:CLS:COLOR 15,0:LOCATE 7,5:PRINT " Note: You ";:COLOR 31,0:PRINT "MAY";:COLOR 15,0:PRINT " wish to copy all originals BEFORE adding reorders... ":COLOR 0,7:RETURN
470 IF ASC(F$)<>255 THEN CLS:LOCATE 21,5:PRINT USING "NOTE: Pose Number ### ";NEG%;:COLOR 31,0:PRINT " already exists... ":PRINT:COLOR 0,7:PRINT TAB(5):INPUT "Is it OK to change the previous information (Y/N)";A$:IF A$="Y" OR A$="y" THEN CLS ELSE 340
480 LSET F$=CHR$(0)
490 LSET N$=MKI$(NEG%)
500 LOCATE 22,5:PRINT USING "Use box as guide; from...  | < < <  to  > > > |  ...for Pose Number ###";NEG%:LOCATE 23,5:PRINT "Briefly Describe the Pose: ":COLOR 15,0:LOCATE 23,31:PRINT SPC(22):LOCATE 23,32:INPUT "",DESC$:COLOR 0,7:CLS
510 IF LEN(DESC$)>20 THEN LOCATE 21,5:PRINT"Please limit descriptions to a";:COLOR 16,7:PRINT " maximum ";:COLOR 0,7:PRINT"of 20 characters...":LOCATE 23,5:COLOR 31,0:PRINT" Briefly ";:COLOR 0,7:PRINT" Describe the Pose:";:INPUT" ",DESC$:CLS
520 IF DESC$="" THEN DESC$="-*-No Description-*-"
530 LSET D$=DESC$:LOCATE 18,5:PRINT "For example: `/02B' means upper-right of Bride & Groom's album...":LOCATE 20,5:PRINT "Or you may initially skip this entry to provide `Presently Unused' status..."
540 LSET OQ$=MKI$(OQ%):LOCATE 8,31:PRINT "Suggested Abbreviations":LOCATE 10,27:PRINT "+ = Bride's Parents' Album":LOCATE 11,27:PRINT "- = Groom's Parents' Album":LOCATE 12,27:PRINT "/ = Bride & Groom's Album":LOCATE 14,31:PRINT "w/2-digit page # and..."
550 LOCATE 15,31:PRINT"A=UL B=UR C=LL or D=LR":LOCATE 22,5:PRINT USING"Again, MAXIMUM length | < < <  to  > > > | for No. ###";NEG%:LOCATE 23,5:PRINT "Original's Situation: ":COLOR 15,0:LOCATE 23,26:PRINT SPC(22):LOCATE 23,27:INPUT"",ORIG$:COLOR 0,7:CLS
560 IF LEN(ORIG$)>20 THEN LOCATE 21,5:PRINT "Please limit descriptions to a ";:COLOR 16,7:PRINT "maximum ";:COLOR 0,7:PRINT "of 20 characters...":PRINT :PRINT TAB(5):COLOR 25,0:PRINT " Briefly ";:COLOR 0,7:INPUT " List Original's Situation: ",ORIG$:CLS
570 IF ORIG$="" THEN ORIG$="* Presently Unused *"
580 LSET O$=ORIG$
590 LOCATE 19,5:PRINT "Enter one of the following numbers to indicate the original's size..."
600 PRINT :PRINT TAB(7)"-*- 1=11x14 -*- 2=2½x3½ -*- 3=3½x5 -*- 4=4x5";:COLOR 16,7:PRINT " (Default) ";:COLOR 0,7:PRINT "-*- 5=5x7 -*-":PRINT TAB(11)"6=16x20  -*-  7=20x24  -*-  8=8x10  -*-  9=Neg. Only or Trio";:INPUT "  ",CHOICE
610 ON CHOICE GOTO 680,640,650,620,660,690,700,670,630
620 OS$=" 4x5":GOTO 710
630 OS$=" (!) ":GOTO 710
640 OS$="2½x3½":GOTO 710
650 OS$="3½x5":GOTO 710
660 OS$=" 5x7":GOTO 710
670 OS$=" 8x10":GOTO 710
680 OS$="11x14:GOTO 760
690 OS$="16x20":GOTO 710
700 OS$="20x24"
710 LSET S$=OS$
720 PRINT :PRINT TAB(5):INPUT "Now indicate the quantity of originals -*- <CR> = default of `1'...",OQ%:IF OQ%=0 THEN OQ%=1
730 LSET OQ$=MKI$(OQ%)
740 PUT#1,NEG%
750 CLS:GOTO 340
760 REM -*- ADDING REORDER QUANTITIES
770 GOSUB 2430
780 IF ASC(F$)=255 OR NEG%=1000 THEN CLS:COLOR 31,0:LOCATE 7,30:PRINT "-*- Null Entry -*-":COLOR 0,7:RETURN ELSE 800
790 PRINT " will become #"USING "###'s new quantity.      ";NEG%
800 COLOR 0,7:LOCATE 10,15:PRINT USING "Number ###'s description is...";CVI(N$);:PRINT D$
810 PRINT TAB(15) "The"CVI(OQ$) S$" original is......."O$
820 PRINT :PRINT TAB(20)"1 -*- 11x14" TAB(45) "2 -*- 2½x3½"
830 PRINT :PRINT TAB(20)"3 -*- 3½x5" TAB(45) "4 -*-  4x5"
840 PRINT :PRINT TAB(20)"5 -*-  5x7" TAB(45) "6 -*- 16x20"
850 PRINT :PRINT TAB(20)"7 -*- 20x24" TAB(45) "8 -*-  8x10"
860 PRINT :PRINT TAB(12) USING "<CR> or 9 -*- End Adding to Reorder for Number ###";CVI(N$);:COLOR 16,7:PRINT " (Default) ":COLOR 0,7:PRINT TAB(5):INPUT "Please enter choice...you may re-enter `1' to `8' before `9' to correct...",AD
870 ON AD GOTO 940,890,900,910,920,950,960,930,880
880 GOTO 970
890 CLS:LOCATE 23,23:INPUT "How many 2½x3½'s are to be added... ",A1%:CLS:COLOR 15,0:LOCATE 7,15:PRINT "    "CVI(Q1$)+A1%"2½x3½";:GOTO 790
900 CLS:LOCATE 23,23:INPUT "How many 3½x5's are to be added... ",A2%:CLS:COLOR 15,0:LOCATE 7,15:PRINT "     "CVI(Q2$)+A2%"3½x5";:GOTO 790
910 CLS:LOCATE 23,23:INPUT "How many 4x5's are to be added... ",A3%:CLS:COLOR 15,0:LOCATE 7,15:PRINT "      "CVI(Q3$)+A3%"4x5";:GOTO 790
920 CLS:LOCATE 23,23:INPUT "How many 5x7's are to be added... ",A4%:CLS:COLOR 15,0:LOCATE 7,15:PRINT "      "CVI(Q4$)+A4%"5x7";:GOTO 790
930 CLS:LOCATE 23,23:INPUT "How many 8x10's are to be added... ",A5%:CLS:COLOR 15,0:LOCATE 7,15:PRINT "     "CVI(Q5$)+A5%"8x10";:GOTO 790
940 CLS:LOCATE 23,23:INPUT "How many 11x14's are to be added... ",A6%:CLS:COLOR 15,0:LOCATE 7,15:PRINT "    "CVI(Q6$)+A6%"11x14";:GOTO 790
950 CLS:LOCATE 23,23:INPUT "How many 16x20's are to be added... ",A7%:CLS:COLOR 15,0:LOCATE 7,15:PRINT "    "CVI(Q7$)+A7%"16x20";:GOTO 790
960 CLS:LOCATE 23,23:INPUT "How many 20x24's are to be added... ",A8%:CLS:COLOR 15,0:LOCATE 7,15:PRINT "    "CVI(Q8$)+A8%"20x24";:GOTO 790
970 Q1%=CVI(Q1$)+A1%:IF Q1%>0 THEN LSET Q1$=MKI$(Q1%):A1%=0
980 Q2%=CVI(Q2$)+A2%:IF Q2%>0 THEN LSET Q2$=MKI$(Q2%):A2%=0
990 Q3%=CVI(Q3$)+A3%:IF Q3%>0 THEN LSET Q3$=MKI$(Q3%):A3%=0
1000 Q4%=CVI(Q4$)+A4%:IF Q4%>0 THEN LSET Q4$=MKI$(Q4%):A4%=0
1010 Q5%=CVI(Q5$)+A5%:IF Q5%>0 THEN LSET Q5$=MKI$(Q5%):A5%=0
1020 Q6%=CVI(Q6$)+A6%:IF Q6%>0 THEN LSET Q6$=MKI$(Q6%):A6%=0
1030 Q7%=CVI(Q7$)+A7%:IF Q7%>0 THEN LSET Q7$=MKI$(Q7%):A7%=0
1040 Q8%=CVI(Q8$)+A8%:IF Q8%>0 THEN LSET Q8$=MKI$(Q8%):A8%=0
1050 PUT#1,NEG%
1060 CLS:COLOR 15,0:LOCATE 7,5:PRINT " Enter `3' again IF you wish to add reorders for other poses... ":COLOR 0,7:RETURN
1070 REM -*- PRINTING ALL VALID POSES IN NUMERICAL SEQUENCE (DEFAULT) OR 1350
1080 CLS:LOCATE 23,8:INPUT "Do you wish to print the REORDER in sequence of negative numbers? ",K$:CLS:IF K$="N" OR K$="n" THEN 1300 ELSE LOCATE 23,9:PRINT "Please turn on the printer; then strike any key to continue..."
1090 IF INKEY$=""THEN 1090 ELSE LPRINT CHR$(27)"N" CHR$(12) CHR$(27)"@":B%=19-(LEN(C$)*2):CLS:LOCATE 23,16:COLOR 15,0:PRINT " One moment--program is searching through file... ":REM PRINTER RESET, 2 INCH PERFORATION SKIP AND CENTERING PRINT-OUT FOLLOWS
1100 LPRINT CHR$(14) CHR$(15);:LPRINT TAB(B%)"-*- ";:LPRINT CHR$(27)"-1";:LPRINT "Printed quotation on "DATE$" for ";:LPRINT CHR$(18) CHR$(27)"E";:LPRINT C$;:LPRINT CHR$(27)"F";:LPRINT CHR$(27)"-0";:LPRINT CHR$(15);:LPRINT " -*-";:LPRINT CHR$(18)
1110 M1%=0:M2%=0:M3%=0:M4%=0:M5%=0:M6%=0:M7%=0:M8%=0:J=1
1120 FOR I=J TO 999
1130 GET#1,I
1140 IF ASC(F$)=255 THEN 1270
1150 Q1%=CVI(Q1$):Q2%=CVI(Q2$):Q3%=CVI(Q3$):Q4%=CVI(Q4$):Q5%=CVI(Q5$):Q6%=CVI(Q6$):Q7%=CVI(Q7$):Q8%=CVI(Q8$):Z%=Q1%+Q2%+Q3%+Q4%+Q5%+Q6%+Q7%+Q8%:IF Z%<1 THEN 1270
1160 M1%=M1%+Q1%:M2%=M2%+Q2%:M3%=M3%+Q3%:M4%=M4%+Q4%:M5%=M5%+Q5%:M6%=M6%+Q6%:M7%=M7%+Q7%:M8%=M8%+Q8%
1170 LOCATE 23,4,0:PRINT USING " Information has been sent to the printer about negative number ###... ";CVI(N$):LPRINT :LPRINT TAB(20)"Pose Number" CVI(N$) "has" CVI(OQ$) "original(s) in "S$:LPRINT "Original Information: "O$" <> Description: "D$
1180 IF Q1%>=1 THEN LPRINT TAB(29) USING "Quantity of 2½x3½'s: ##";Q1%:Q1%=0
1190 IF Q2%>=1 THEN LPRINT TAB(29) USING "Quantity of 3½x5's:  ##";Q2%:Q2%=0
1200 IF Q3%>=1 THEN LPRINT TAB(29) USING "Quantity of  4x5's:  ##";Q3%:Q3%=0
1210 IF Q4%>=1 THEN LPRINT TAB(29) USING "Quantity of  5x7's:  ##";Q4%:Q4%=0
1220 IF Q5%>=1 THEN LPRINT TAB(29) USING "Quantity of  8x10's: ##";Q5%:Q5%=0
1230 IF Q6%>=1 THEN LPRINT TAB(29) USING "Quantity of 11x14's: ##";Q6%:Q6%=0
1240 IF Q7%>=1 THEN LPRINT TAB(29) USING "Quantity of 16x20's: ##";Q7%:Q7%=0
1250 IF Q8%>=1 THEN LPRINT TAB(29) USING "Quantity of 20x24's: ##";Q8%:Q8%=0
1260 LPRINT TAB(29) USING "###'s Total ";CVI(N$);:LPRINT USING "Prints: ###";Z%
1270 NEXT I
1280 M%=M1%+M2%+M3%+M4%+M5%+M6%+M7%+M8%:WIDTH LPRINT 96:LPRINT :LPRINT CHR$(27)"M";:LPRINT TAB(8) USING "##~2½x3½ ##~3½x5 ##~4x5 ##~5x7 ";M1%;M2%;M3%;M4%;
1290 LPRINT USING "##~8x10 ##~11x14 ##~16x20 ##~20x24 ";M5%;M6%;M7%;M8%;:LPRINT " -*-  Total:"M%;:LPRINT CHR$(12);:LPRINT CHR$(27)"@":COLOR 0,7:CLS:RETURN
1300 COLOR 15,0:LOCATE 2,23:PRINT SPC(33):LOCATE 3,23:PRINT "  -*- Listings of Originals -*-  ":LOCATE 4,23:PRINT STRING$(33,95):LOCATE 5,23:PRINT SPC(33):LOCATE 6,23:PRINT " -*- Suggested Abbreviations -*- ":LOCATE 7,23:PRINT SPC(33):REM  -*- HEADINGS
1310 COLOR 0,7:LOCATE 9,22:PRINT "+ = Printing bride's parents' album":LOCATE 11,22:PRINT "- = Printing groom's parents' album":LOCATE 13,22:PRINT "/ = Printing Bride & Groom's album":LOCATE 15,19:PRINT "<CR> = Listing with another indicator"
1320 LOCATE 18,7:PRINT "Note: Other keys will work IF they were used during initial entry...":LOCATE 20:PRINT STRING$(80,95):LOCATE 23,24,1:INPUT "Please enter your choice... ",WK$:REM -*- OPTIONS TO PRINT `PAGES' IN ASCII ORDER
1330 IF WK$="+"THEN LOCATE 9,18 ELSE IF WK$="-"THEN LOCATE 11,18 ELSE IF WK$="/"THEN LOCATE 13,18:ELSE 1350
1340 COLOR 16,7:PRINT ">>>":COLOR 0,7:GOTO 1370
1350 CLS:COLOR 15,0:LOCATE 3,24:PRINT SPC(31):LOCATE 4,24:PRINT " -*- Listings of Originals -*- ":LOCATE 5,24:PRINT SPC(31):COLOR 0,7:LOCATE 15,20:PRINT "<CR> = Basic information of ALL poses"
1360 LOCATE 23,8:INPUT "Please confirm your choice by entering an appropriate symbol... ",WK$
1370 REM -*- CONVERSION OF POSES TO ARRAYS FOR REARRANGEMENT OF SEQUENCE
1380 REM -*- D$(N)=DESCRIPTION -*- N$(N)=POSE# -*- O$(N)=ORIGINAL INFOMATION -*- (SAME AS VARIABLE BEFORE DIMENSIONED) -*- M%=POSE QUANTITY
1390 LOCATE 23,6,0:PRINT "Please stand by while information is entered into temporary storage...":M%=0:N%=1:REM -*- 1st STEP IS DETERMINE HOW MANY POSES
1400 FOR N%=1 TO 999
1410 GET#1,N%
1420 IF ASC(F$)=255 THEN 1430 ELSE M%=M%+1
1430 NEXT N%
1440 OPTION BASE 1:DIM D$(M%),N$(M%),O$(M%):N%=1:REM -*- 2nd STEP IS DIMENSION
1450 REM -*- DIM @ QUANTITY OF POSES...3rd STEP IS ENTER VARIABLES INTO ARRAYS
1460 M%=0:N%=1:WHILE N%<1000
1470    GET#1,N%
1480    IF ASC(F$)=255 THEN 1510
1490 IF LEN(WK$)>0 AND ASC(O$)=42 THEN 1510
1500    M%=M%+1:O$(M%)=O$:N$(M%)=N$:D$(M%)=D$
1510    N%=N%+1
1520 WEND
1530 BEEP:CLS:IF LEN(WK$)=0 THEN LOCATE 23,2:PRINT "Please enter the print-out's title...":LOCATE 23,39:COLOR 15,0:PRINT SPC(40):LOCATE 23,40:INPUT "",WT$:COLOR 0,7:GOTO 1550
1540 LOCATE 23,12:PRINT "Please enter the print-out's title...":LOCATE 23,49:COLOR 15,0:PRINT SPC(22):LOCATE 23,50:INPUT "",WT$:COLOR 0,7
1550 REM -*- DEFAULT (ALL) OR SYMBOL CHOSEN TO RESEQUENCE PRINT-OUT -*-
1560 X=(24-LEN(WT$))/2:Y=(41-LEN(WT$))/2:CLS:LOCATE 3,9:PRINT "This will take a few minutes...so while you're waiting please...":LOCATE 5,22:PRINT "turn on the printer, align forms, etc."
1570 LOCATE 21,16:COLOR 15,0:PRINT " One moment--program is searching through file... ":LOCATE 23,5,0:PRINT " Now sorting poses into `page' sequence...just exchanged ":LP%=1
1580 REM -*- CONVERSION OF SEQUENCE AND DISPLAYED THROUGH SUBROUTINE
1590 EXCH$="N"
1600 FOR LP%=1 TO M%-1
1610 IF ASC(O$(LP%))=42 THEN 1630
1620 IF O$(LP%)>O$(LP%+1) THEN EXCH$="Y":GOSUB 1900
1630 NEXT LP%
1640 IF EXCH$="Y" THEN 1590
1650 REM -*- PRINT-OUT OF POSES IN REQUESTED SEQUENCE -*- O%=POSES USED
1660 LPRINT :IF LEN(WK$)=0 THEN LPRINT TAB(Y); ELSE LPRINT TAB(X);
1670 LPRINT CHR$(27)"!"CHR$(224) WT$:LPRINT :LPRINT CHR$(27)"@" CHR$(27)"N"CHR$(6):REM -*- PRINTER LINE-FEED, HEADING CENTERED/UNDERLINED/EMPHASISE/ITALIC, ADDITIONAL LINE-FEED, PRINTER RESET AND SET PERFORATION SKIP-OVER FROM THAT POSITION
1680 COLOR 0,7:CLS:COLOR 15,0:LOCATE 23,4,0:PRINT " Information has been sent to the printer @ page and position #    ":TT%=1
1690 IF LEN(WK$)=0 THEN TA%=1:GOTO 1800
1700 LPRINT "Page -*- Pose # and brief description":LPRINT:O%=0:REM -*- SUBHEAD PLUS RESETTING POSE QUANTITY (O%)
1710 FOR TT%=1 TO M%
1720 IF LEFT$(O$(TT%),1)=WK$ THEN O%=O%+1 ELSE 1770
1730 LPRINT MID$(O$(TT%),2,3);:LPRINT TAB(6)"-*- ";:LPRINT USING " ###";CVI(N$(TT%));:LPRINT TAB(15)"~ ";:LPRINT D$(TT%)
1740 IF TT%>M%-1 THEN 1760 ELSE IF LEFT$(O$(TT%),3)<LEFT$(O$(TT%+1),3) THEN 1750 ELSE 1760
1750 IF (MID$(O$(TT%),3,1)="C") OR (VAL(MID$(O$(TT%),2,2))/2<>INT(VAL(MID$(O$(TT%),2,2))/2)) THEN LPRINT
1760 LOCATE 23,67,0:PRINT MID$(O$(TT%),2,3)
1770 NEXT TT%
1780 LPRINT :LPRINT TAB(11) USING "### total album prints";O%:LPRINT CHR$(12)
1790 COLOR 0,7:CLS:COLOR 15,0:LOCATE 23,13:PRINT " Would you like another print-out of this version (Y/N)?   ":LOCATE 23,70:INPUT"",AA$:IF AA$="y"OR AA$="Y"THEN 1650 ELSE 1870
1800 FOR TA%=1 TO M%
1810 LPRINT O$(TA%) USING " -*- ###";CVI(N$(TA%));:LPRINT " ~ "D$(TA%)
1820 IF TA%>M%-1 THEN 1830 ELSE IF LEFT$(O$(TA%),3)<LEFT$(O$(TA%+1),3) THEN LPRINT
1830 LOCATE 23,67,0:PRINT LEFT$(O$(TA%),13)
1840 NEXT TA%
1850 LPRINT :LPRINT TAB(21) USING "### total prints";M%:LPRINT CHR$(12)
1860 COLOR 0,7:CLS:COLOR 15,0:LOCATE 23,12:PRINT " Would you like another print-out of this version (Y/N)?   ":LOCATE 23,69:INPUT "",AO$:IF AO$="y"OR AO$="Y"THEN TA%=1:GOTO 1650
1870 LOCATE 23,3:PRINT " Would you like a print-out of this file but in a different version (Y/N)?   ":LOCATE 23,78:INPUT"",AX$:IF AX$="y"OR AX$="Y"THEN 1890
1880 LPRINT CHR$(12):ERASE O$:ERASE N$:ERASE D$:LPRINT CHR$(27)"@":COLOR 0,7:CLS:RETURN
1890 LPRINT CHR$(12):ERASE O$:ERASE N$:ERASE D$:LPRINT CHR$(27)"@":COLOR 0,7:CLS:GOTO 1300
1900 REM -*- SUBROUTINE-DISPLAY/EXCHANGE ELEMENTS OF ARRAY
1910 LOCATE 23,62:PRINT MID$(O$(LP%),2,3)" and "MID$(O$(LP%+1),2,3)"... "
1920 SWAP O$(LP%),O$(LP%+1):SWAP N$(LP%),N$(LP%+1):SWAP D$(LP%),D$(LP%+1)
1930 RETURN
1940 REM -*- SUBTRACTING REORDER QUANTITIES
1950 GOSUB 2430
1960 IF ASC(F$)=255 OR NEG%=1000 THEN CLS:COLOR 31,0:LOCATE 7,30:PRINT "-*- Null Entry -*-":COLOR 0,7:RETURN ELSE 1990
1970 PRINT " will become #"USING "###'s new quantity.     ";NEG%:GOTO 1990
1980 COLOR 15,0:PRINT " is present quantity -*- ";:COLOR 9,0:PRINT "INVALID DEDUCTION IGNORED";:COLOR 15,0:PRINT " "
1990 COLOR 0,7:LOCATE 10,15:PRINT USING "Number ###'s description is...";CVI(N$);:PRINT D$
2000 PRINT TAB(15) "The"CVI(OQ$) S$" original is......."O$
2010 PRINT :PRINT TAB(20)"1 -*- 11x14" TAB(45) "2 -*- 2½x3½"
2020 PRINT :PRINT TAB(20)"3 -*- 3½x5" TAB(45) "4 -*-  4x5"
2030 PRINT :PRINT TAB(20)"5 -*-  5x7" TAB(45) "6 -*- 16x20"
2040 PRINT :PRINT TAB(20)"7 -*- 20x24" TAB(45) "8 -*-  8x10"
2050 PRINT :PRINT TAB(12) USING "<CR> or 9 -*- End Subtracting from Reorder for Number ###";CVI(N$);:COLOR 16,7:PRINT " (Default) ":COLOR 0,7:PRINT :PRINT TAB(5);:INPUT "Please enter choice...you may re-enter `1' to `8' before `9' to correct...",SUB
2060 ON SUB GOTO 2130,2080,2090,2100,2110,2140,2150,2120,2070
2070 GOTO 2160
2080 CLS:LOCATE 23,20:INPUT "How many 2½x3½'s are to be subtracted... ",S1%:CLS:IF CVI(Q1$)-S1%<0 THEN S1%=0:COLOR 31,0:LOCATE 7,15:PRINT CVI(Q1$)"2½x3½";:GOTO 1980 ELSE COLOR 15,0:LOCATE 7,15:PRINT "   "CVI(Q1$)-S1%"2½x3½";:GOTO 1970
2090 CLS:LOCATE 23,20:INPUT "How many 3½x5's are to be subtracted... ",S2%:CLS:IF CVI(Q2$)-S2%<0 THEN S2%=0:COLOR 31,0:LOCATE 7,15:PRINT CVI(Q2$)"3½x5";:GOTO 1980 ELSE COLOR 15,0:LOCATE 7,15:PRINT "     "CVI(Q2$)-S2%"3½x5";:GOTO 1970
2100 CLS:LOCATE 23,20:INPUT "How many 4x5's are to be subtracted... ",S3%:CLS:IF CVI(Q3$)-S3%<0 THEN S3%=0:COLOR 31,0:LOCATE 7,15:PRINT CVI(Q3$)"4x5";:GOTO 1980 ELSE COLOR 15,0:LOCATE 7,15:PRINT "     "CVI(Q3$)-S3%"4x5";:GOTO 1970
2110 CLS:LOCATE 23,20:INPUT "How many 5x7's are to be subtracted... ",S4%:CLS:IF CVI(Q4$)-S4%<0 THEN S4%=0:COLOR 31,0:LOCATE 7,15:PRINT CVI(Q4$)"5x7";:GOTO 1980 ELSE COLOR 15,0:LOCATE 7,15:PRINT "     "CVI(Q4$)-S4%"5x7";:GOTO 1970
2120 CLS:LOCATE 23,20:INPUT "How many 8x10's are to be subtracted... ",S5%:CLS:IF CVI(Q5$)-S5%<0 THEN S5%=0:COLOR 31,0:LOCATE 7,15:PRINT CVI(Q5$)"8x10";:GOTO 1980 ELSE COLOR 15,0:LOCATE 7,15:PRINT "    "CVI(Q5$)-S5%"8x10";:GOTO 1970
2130 CLS:LOCATE 23,20:INPUT "How many 11x14's are to be subtracted... ",S6%:CLS:IF CVI(Q6$)-S6%<0 THEN S6%=0:COLOR 31,0:LOCATE 7,15:PRINT CVI(Q6$)"11x14";:GOTO 1980 ELSE COLOR 15,0:LOCATE 7,15:PRINT "   "CVI(Q6$)-S6%"11x14";:GOTO 1970
2140 CLS:LOCATE 23,20:INPUT "How many 16x20's are to be subtracted... ",S7%:CLS:IF CVI(Q7$)-S7%<0 THEN S7%=0:COLOR 31,0:LOCATE 7,15:PRINT CVI(Q7$)"16x20";:GOTO 1980 ELSE COLOR 15,0:LOCATE 7,15:PRINT "   "CVI(Q7$)-S7%"16x20";:GOTO 1970
2150 CLS:LOCATE 23,20:INPUT "How many 20x24's are to be subtracted... ",S8%:CLS:IF CVI(Q8$)-S8%<0 THEN S8%=0:COLOR 31,0:LOCATE 7,15:PRINT CVI(Q8$)"20x24";:GOTO 1980 ELSE COLOR 15,0:LOCATE 7,15:PRINT "   "CVI(Q8$)-S8%"20x24";:GOTO 1970
2160 Q1%=CVI(Q1$)-S1%:LSET Q1$=MKI$(Q1%):S1%=0
2170 Q2%=CVI(Q2$)-S2%:LSET Q2$=MKI$(Q2%):S2%=0
2180 Q3%=CVI(Q3$)-S3%:LSET Q3$=MKI$(Q3%):S3%=0
2190 Q4%=CVI(Q4$)-S4%:LSET Q4$=MKI$(Q4%):S4%=0
2200 Q5%=CVI(Q5$)-S5%:LSET Q5$=MKI$(Q5%):S5%=0
2210 Q6%=CVI(Q6$)-S6%:LSET Q6$=MKI$(Q6%):S6%=0
2220 Q7%=CVI(Q7$)-S7%:LSET Q7$=MKI$(Q7%):S7%=0
2230 Q8%=CVI(Q8$)-S8%:LSET Q8$=MKI$(Q8%):S8%=0
2240 PUT#1,NEG%
2250 CLS:RETURN
2260 REM -*- CHECK/MODIFY/REMOVE ONE NEGATIVE
2270 GOSUB 2430
2280 IF ASC(F$)=255 OR NEG%=1000 THEN CLS:COLOR 31,0:LOCATE 7,30:PRINT "-*- Null Entry -*-":COLOR 0,7:RETURN
2290 CLS:LOCATE 11,15,0:PRINT "The"CVI(OQ$) S$" original is......."O$
2300 PRINT TAB(15) USING "Number ###'s description is...";CVI(N$);:PRINT D$
2310 PRINT :PRINT TAB(24)"2½x3½ reorder quantity is...";CVI(Q1$)
2320 PRINT TAB(24)"3½x5  reorder quantity is...";CVI(Q2$)
2330 PRINT TAB(24)" 4x5  reorder quantity is...";CVI(Q3$)
2340 PRINT TAB(24)" 5x7  reorder quantity is...";CVI(Q4$)
2350 PRINT TAB(24)" 8x10 reorder quantity is...";CVI(Q5$)
2360 PRINT TAB(24)"11x14 reorder quantity is...";CVI(Q6$)
2370 PRINT TAB(24)"16x20 reorder quantity is...";CVI(Q7$)
2380 PRINT TAB(24)"20x24 reorder quantity is...";CVI(Q8$)
2390 PRINT :PRINT TAB(12)"Please press `";:COLOR 16,7:PRINT "X";:COLOR 0,7:PRINT "' ";:COLOR 16,7:PRINT "to modify";:COLOR 0,7:PRINT " or any other key to continue..."
2400 U$=INKEY$:IF U$=""THEN 2400
2410 IF U$="x" OR U$="X" THEN 3050 ELSE CLS:GOTO 2260
2420 LOCATE 21,17:PRINT "Enter `1000' to end entry of additional poses":GOTO 2440
2430 LOCATE 18,8:PRINT "Please enter a 1, 2 or 3-digit previously-entered pose number...":LOCATE 20,3:PRINT "Numbers not previously entered (i.e. `1000') will bring up the Main Menu..."
2440 LOCATE 23,30:PRINT "Negative Number":LOCATE 23,46:COLOR 15,0:PRINT SPC(5):LOCATE 23,47:INPUT "",NEG%:COLOR 0,7
2450 REM -*- GET RECORD FOR NEGATIVE
2460 CLS:IF (NEG%<1) OR (NEG%>1000) THEN COLOR 31,7:LOCATE 19,12:PRINT "Unacceptable Entry";:COLOR 0,7:PRINT "...please use only ";:COLOR 31,0:PRINT " Last Three Digits! ":COLOR 0,7:GOTO 2430 ELSE GET#1,NEG%:RETURN
2470 SYSTEM
2480 REM -*- LISTING PREVIOUSLY-EXISTING FILES
2490 CLEAR:KEY OFF:CLS:PRINT "The files within the immediate subdirectory...":PRINT :FILES:LOCATE 23,5:INPUT "Enter name (subject to DOS character limitations) of FILE #1: ",C1$
2500 OPEN C1$ AS #1 LEN=66
2510 LOCATE 21,5:PRINT "You may discontinue adding files with <CR>...":LOCATE 23,64:PRINT SPC(17):LOCATE 23,64:INPUT "2: ",C2$
2520 IF C2$=""THEN C=1:GOTO 2630 ELSE OPEN C2$ AS #2 LEN=66
2530 LOCATE 23,64:PRINT SPC(17):LOCATE 23,64:INPUT "3: ",C3$
2540 IF C3$=""THEN C=2:GOTO 2620 ELSE OPEN C3$ AS #3 LEN=66
2550 LOCATE 23,64:PRINT SPC(17):LOCATE 23,64:INPUT "4: ",C4$
2560 IF C4$=""THEN C=3:GOTO 2610 ELSE OPEN C4$ AS #4 LEN=66
2570 LOCATE 23,64:PRINT SPC(17):LOCATE 23,64:INPUT "5: ",C5$
2580 IF C5$=""THEN C=4:GOTO 2600 ELSE OPEN C5$ AS #5 LEN=66
2590 FIELD #5,1 AS FE$,2 AS NE$,2 AS OQE$,5 AS SE$,20 AS DE$,20 AS OE$,2 AS Q1E$,2 AS Q2E$,2 AS Q3E$,2 AS Q4E$,2 AS Q5E$,2 AS Q6E$,2 AS Q7E$,2 AS Q8E$
2600 FIELD #4,1 AS FD$,2 AS ND$,2 AS OQD$,5 AS SD$,20 AS DD$,20 AS OD$,2 AS Q1D$,2 AS Q2D$,2 AS Q3D$,2 AS Q4D$,2 AS Q5D$,2 AS Q6D$,2 AS Q7D$,2 AS Q8D$
2610 FIELD #3,1 AS FC$,2 AS NC$,2 AS OQC$,5 AS SC$,20 AS DC$,20 AS OC$,2 AS Q1C$,2 AS Q2C$,2 AS Q3C$,2 AS Q4C$,2 AS Q5C$,2 AS Q6C$,2 AS Q7C$,2 AS Q8C$
2620 FIELD #2,1 AS FB$,2 AS NB$,2 AS OQB$,5 AS SB$,20 AS DB$,20 AS OB$,2 AS Q1B$,2 AS Q2B$,2 AS Q3B$,2 AS Q4B$,2 AS Q5B$,2 AS Q6B$,2 AS Q7B$,2 AS Q8B$
2630 FIELD #1,1 AS FA$,2 AS NA$,2 AS OQA$,5 AS SA$,20 AS DA$,20 AS OA$,2 AS Q1A$,2 AS Q2A$,2 AS Q3A$,2 AS Q4A$,2 AS Q5A$,2 AS Q6A$,2 AS Q7A$,2 AS Q8A$
2640 CLS:LOCATE 8,30:PRINT "File #1: "C1$
2650 PRINT :PRINT TAB(30)"File #2: "C2$
2660 PRINT :PRINT TAB(30)"File #3: "C3$
2670 PRINT :PRINT TAB(30)"File #4: "C4$
2680 PRINT :PRINT TAB(30)"File #5: "C5$
2690 PRINT :PRINT TAB(15):INPUT "Would it be correct to proceed upon this basis";Z$
2700 IF Z$="N" OR Z$="n" THEN 2490
2710 CLS:LOCATE 23,1:INPUT "Please CHECK FORMS are in printer, TURN it ON and ENTER ORDER NUMBER... ",RN$
2720 REM -*- SET LX-80 PRINTER TO 1" FORMS * 34 RIGHT MARGIN * 8 LINES PER INCH
2730 LPRINT CHR$(27)"@" CHR$(27)"Q"CHR$(34) CHR$(27)"0" CHR$(27)"C"CHR$(8);:J=1
2740 LPRINT STRING$(34,88):CLS:LOCATE 23,8:INPUT "Is the test pattern at the top of the first form and centered? ",H$:IF H$="y" OR H$="Y" THEN 2750 ELSE 2730
2750 CLS:LOCATE 21,12:PRINT "Program has searched through   % of all the poses...":LOCATE 23,12,0:PRINT "Data is transmitted to printer for negative number...":FOR N%=J TO 1000
2760 IF J=1000 THEN LPRINT CHR$(15); ELSE 2830
2770 LPRINT CHR$(14);:LPRINT SPC(6)"Broad Street Photo":LPRINT "221 Broad Street, Bellevue, OH 44811 * Phone #419/483-5225":LPRINT CHR$(18);:LPRINT TAB(2)"Order #"RN$" sent: "DATE$:W=(68-LEN(C1$)-LEN(C2$)-LEN(C3$)-LEN(C4$)-LEN(C5$))/2
2780 LPRINT CHR$(15) CHR$(27)"M";:LPRINT TAB(W);:LPRINT C1$" "C2$" "C3$" "C4$" "C5$
2790 LPRINT SPC(2);:LPRINT USING "##~2½x3½ ##~3½x5 ##~4x5 ##~5x7 ##~8x10 ##~11x14 ##~16x20 ##~20x24";X1%;X2%;X3%;X4%;X5%;X6%;X7%;X8%
2800 X%=X1%+X2%+X3%+X4%+X5%+X6%+X7%+X8%:LPRINT CHR$(18) CHR$(27)"P";:LPRINT "Total Negs: ";:LPRINT CHR$(27)"-1";:LPRINT USING "##";Y%;:LPRINT CHR$(27)"-0";:LPRINT " * Total Prints: ";:LPRINT CHR$(27)"-1";:LPRINT USING "###";X%:LPRINT CHR$(12):GOTO 2470
2810 REM -*- DATA FOR NEGATIVE NUMBERS IF USED
2820 REM -*- @ SIZE >>> Q#=NEG/FILE -*- V#=NEG/ALL FILES -*- X#=ALL NEGS/FILES
2830 LOCATE 21,41:PRINT USING "##";INT(J/10):ON C GOTO 2880,2870,2860,2760,2840
2840 GET#5,N%:F$=FE$:IF ASC(F$)=255 THEN 3040 ELSE N%=CVI(NE$):OQ%=CVI(OQE$):S$=SE$:D$=DE$:O$=OE$:Q1%=CVI(Q1E$):Q2%=CVI(Q2E$):Q3%=CVI(Q3E$):Q4%=CVI(Q4E$):Q5%=CVI(Q5E$):Q6%=CVI(Q6E$):Q7%=CVI(Q7E$):Q8%=CVI(Q8E$):GOSUB 2900
2850 GET#4,N%:F$=FD$:IF ASC(F$)=255 THEN 3040 ELSE N%=CVI(ND$):OQ%=CVI(OQD$):S$=SD$:D$=DD$:O$=OD$:Q1%=CVI(Q1D$):Q2%=CVI(Q2D$):Q3%=CVI(Q3D$):Q4%=CVI(Q4D$):Q5%=CVI(Q5D$):Q6%=CVI(Q6D$):Q7%=CVI(Q7D$):Q8%=CVI(Q8D$):GOSUB 2900
2860 GET#3,N%:F$=FC$:IF ASC(F$)=255 THEN 3040 ELSE N%=CVI(NC$):OQ%=CVI(OQC$):S$=SC$:D$=DC$:O$=OC$:Q1%=CVI(Q1C$):Q2%=CVI(Q2C$):Q3%=CVI(Q3C$):Q4%=CVI(Q4C$):Q5%=CVI(Q5C$):Q6%=CVI(Q6C$):Q7%=CVI(Q7C$):Q8%=CVI(Q8C$):GOSUB 2900
2870 GET#2,N%:F$=FB$:IF ASC(F$)=255 THEN 3040 ELSE N%=CVI(NB$):OQ%=CVI(OQB$):S$=SB$:D$=DB$:O$=OB$:Q1%=CVI(Q1B$):Q2%=CVI(Q2B$):Q3%=CVI(Q3B$):Q4%=CVI(Q4B$):Q5%=CVI(Q5B$):Q6%=CVI(Q6B$):Q7%=CVI(Q7B$):Q8%=CVI(Q8B$):GOSUB 2900
2880 GET#1,N%:F$=FA$:IF ASC(F$)=255 THEN 3040 ELSE N%=CVI(NA$):OQ%=CVI(OQA$):S$=SA$:D$=DA$:O$=OA$:Q1%=CVI(Q1A$):Q2%=CVI(Q2A$):Q3%=CVI(Q3A$):Q4%=CVI(Q4A$):Q5%=CVI(Q5A$):Q6%=CVI(Q6A$):Q7%=CVI(Q7A$):Q8%=CVI(Q8A$):GOSUB 2900
2890 GOTO 2910
2900 V1%=V1%+Q1%:V2%=V2%+Q2%:V3%=V3%+Q3%:V4%=V4%+Q4%:V5%=V5%+Q5%:V6%=V6%+Q6%:V7%=V7%+Q7%:V8%=V8%+Q8%:RETURN
2910 V%=V1%+V2%+V3%+V4%+V5%+V6%+V7%+V8%:IF V%<1 THEN 3040
2920 REM -*- SET CHARACTER SIZE, PRINT DESCRIPTION/REORDER QUANTITY BY SIZES(S)
2930 Y%=Y%+1:LOCATE 23,65:PRINT USING "###";N%:LPRINT CHR$(14) CHR$(15)"Broad Street Photo NEG#";N%;:LPRINT CHR$(18)
2940 LPRINT TAB(6) D$:LPRINT TAB(8-(LEN(RN$)/2))"Order #"RN$" Subtotals":LPRINT CHR$(15) CHR$(27)"M";
2950 IF V1%>=1 THEN LPRINT USING "##~2½x3½ ";V1%;:X1%=X1%+V1%
2960 IF V2%>=1 THEN LPRINT USING "##~3½x5 ";V2%;:X2%=X2%+V2%
2970 IF V3%>=1 THEN LPRINT USING "##~4x5 ";V3%;:X3%=X3%+V3%
2980 IF V4%>=1 THEN LPRINT USING "##~5x7 ";V4%;:X4%=X4%+V4%
2990 IF V5%>=1 THEN LPRINT USING "##~8x10 ";V5%;:X5%=X5%+V5%
3000 IF V6%>=1 THEN LPRINT USING "##~11x14 ";V6%;:X6%=X6%+V6%
3010 IF V7%>=1 THEN LPRINT USING "##~16x20 ";V7%;:X7%=X7%+V7%
3020 IF V8%>=1 THEN LPRINT USING "##~20x24 ";V8%;:X8%=X8%+V8%
3030 LPRINT :LPRINT CHR$(27)"P" CHR$(18) TAB(6)"-*- Total:"V%"print";:IF V%>1 THEN LPRINT "s -*-";:LPRINT CHR$(12) ELSE LPRINT " -*-";:LPRINT CHR$(12)
3040 V1%=0:V2%=0:V3%=0:V4%=0:V5%=0:V6%=0:V7%=0:V8%=0:J=J+1:NEXT N%
3050 REM -*- MODIFICATION SUBROUTINE @ 1770
3060 U%=0:RESTORE 3070:COLOR 15,0:WHILE U%<9:READ U%,A%
3070    DATA 2,3,3,3,4,3,5,3,6,3,7,3,8,3,9,3:LOCATE U%,A%:PRINT SPC(76):WEND
3080 LOCATE 4,28:PRINT "1) Original's Situation":LOCATE 6,28:PRINT "2) Description of Pose":LOCATE 8,28:PRINT "3) Removal of Number ":COLOR 31,0:LOCATE 4,53:PRINT "<<< Default"
3090 COLOR 0,7:LOCATE 23,4:PRINT SPC(76):COLOR 15,0:LOCATE 23,10:PRINT " Please enter the number of the item you wish to specify...  ":LOCATE 23,69:INPUT "",WHICH
3100 IF WHICH=3 THEN C%=0:GOTO 3120:ELSE I%=0:RESTORE 3110:COLOR 15,0:WHILE I%<23:READ I%
3110    DATA 4,6,8,14,15,16,17,18,19,20,21,22,23:LOCATE I%,3:PRINT SPC(76):WEND
3120 ON WHICH GOTO 3130,3150,3170
3130 COLOR 0,7:LOCATE 23,2:PRINT SPC(77):COLOR 15,0:LOCATE 23,14:PRINT " Please enter the ";:COLOR 31,0:PRINT "new";:COLOR 15,0:PRINT " situation: ";:PRINT SPC(21)
3140 LOCATE 23,47:INPUT "",ORIG$:LSET O$=ORIG$:GOTO 3180
3150 COLOR 0,7:LOCATE 23,2:PRINT SPC(77):COLOR 15,0:LOCATE 23,13:PRINT " Please enter the ";:COLOR 31,0:PRINT "new";:COLOR 15,0:PRINT " description: ";:PRINT SPC(21)
3160 LOCATE 23,48:INPUT "",DESC$:LSET D$=DESC$:GOTO 3180
3170 LSET OQ$=MKI$(C%):LSET Q8$=MKI$(C%):LSET Q7$=MKI$(C%):LSET Q6$=MKI$(C%):LSET Q5$=MKI$(C%):LSET Q4$=MKI$(C%):LSET Q3$=MKI$(C%):LSET Q2$=MKI$(C%):LSET Q1$=MKI$(C%):LSET O$="":LSET D$="":LSET S$="":LSET N$="":LSET F$=CHR$(255)
3180 PUT#1,NEG%:COLOR 0,7:CLS:GOTO 2260
3190 REM -*- I DEDICATE THIS PROGRAM TO MY WIFE & ENTITLE THE SONG: `Abbey' -*-
3200 PLAY "MB ML O2 T120 B L8 G G D G B G G A F# E D B B G G C E D"
3210 PLAY "C A G G B G D D G B G A F# G D B G C C E E D C <A <G"
3220 RETURN
```
{% endraw %}

## WEDPRICE.BAS

{% raw %}
```bas
10 REM -*-*- COPYRIGHT NOTICE AND VERSION ON OPENING MENU @ RON HERNER
20 REM -*-*- 221 BROAD STREET, BELLEVUE, OH 44811 * DISTRIBUTION BY PC-SIG 1-88
30 REM -*-*- STARTED (WITH ASSISTANCE FROM DRH) 7/17/85 FOR BROAD STREET PHOTO
40 REM -*-*- FOR EASE-OF-USE MOST ANSWERS MAY BE ENTERED BY DEFAULT WITH <CR>
50 REM -*-*- WRITTEN IN `GWBASIC' V.2.01.10 UNDER DOS V.2.11.1O ON NCR MODEL4
60 REM -*-*- LAYOUT: START W/`RUN 3210' -*- NOTE THAT LONGER NAMES MAY ADD LINES
70 REM -*-*- ENTER DATA ENTRY OPERATOR'S/PRESENTER'S NAME W/8 OR LESS CHARACTERS
80 REM -*-*- DATE/NAME STAMPING IS PROVIDED FOR TIME-SENSITIVE OFFERS, ETC.
90 ON PLAY(5) GOSUB 3600:PLAY ON:GOTO 3600' -*- YOU MUST `BOOT UP' WITH TIME & DATE TO ENABLE ALL FEATURES
100 COLOR 0,7:CLS:KEY OFF:LOCATE 23,30,1:PRINT"Watch here for help...":LOCATE 10,17:PRINT"Enter YOUR NAME to produce a customer quote...":LOCATE 12,25:INPUT"DATA ENTRY operator's name? ",YN$:A$="afternoon":B$="morning":C$="evening":IF YN$=""THEN YN$="Ron"
110 IF LEFT$ (TIME$,2) <"12" THEN D$=B$:GOTO 140
120 IF LEFT$ (TIME$,2) >"17" THEN D$=C$:GOTO 140
130 D$=A$
140 LPRINT"    Good "D$" "YN$", I'd like to provide you with a personal quotation.":LPRINT"Thanks, but I'll take it from here. Allow me to introduce myself...":CLS:LOCATE 19,8:PRINT"Displays will work better if response is not longer than line allows..."
150 LOCATE 21,28:PRINT"Two examples: Smith/Jones":LOCATE 22,39:PRINT"O R":LOCATE 23,28:PRINT"Tammy Smith and Tom Jones":LOCATE 12,8:INPUT"For whom are we to produce a quotation? ",CN$:IF CN$=""THEN CN$="Testing Output..."
160 REM -*- A `PRINT-OUT' IS ALWAYS DONE BUT ACTUAL PRINTING MAY BY BYPASSED
170 REM -*- JUST LEAVE EPSON LX-80 OFF AND `LPRINT' STATEMENTS WILL BE `SKIPPED'
180 REM -*- LONG `PRINTED' PORTIONS MAY SLIGHTLY DELAY SCREEN DISPLAY `QUICKIES'
190 REM -*- ENTER CUSTOMER NAME(S) (i.e. Smith/Jones) IN RESPONSE TO `For whom?'
200 REM -*- AN UNUSUALLY LONG RESPONSE COULD POSSIBLY PRODUCE AN EXTRA LINE-FEED
210 REM -*- THAT'S OK, BUT IT DOESN'T LOOK AS NEAT ON THE CUSTOMERS' QUOTATIONS
220 LPRINT:LPRINT"    Hello there. I'm `Pal', BROAD STREET PHOTO's computer! It's my job to pro-  duce a quotation for you...and I would LOVE to offer the following as a custom"
230 REM -*- THE FOLLOWING MAY BE DEFAULTED SIMPLY BY <CR>--THE SAME AS `a' INPUT
240 REM -*- THIS ALLOWS A QUOTATION GIVEN OVER THE PHONE IN JUST A MINUTE OR TWO
250 REM -*- INKEY$ FUNCTION DOESN'T DISPLAY CURSOR OR DISPLAY/PRINT THE "ANSWER"
260 REM -*- THIS ALSO ALLOWS FASTER RESPONSE THAN <CR> CONFIRMATION WITH `INPUT'
270 LPRINT "quote for "CN$" on "DATE$" at precisely "TIME$"!"
280 CLS:LOCATE 23,1:PRINT "This, as most answers may be either upper OR lower case; default is first choice"
285 LOCATE 8,14:PRINT"Please choose one of the following for an estimate...":PRINT:PRINT TAB(6)"a) Wedding Originals      b) Original `Extras'      c) Wedding Reorder":PRINT:PRINT TAB(19)"d) No more quotes are needed at this time... ";
290 N$=INKEY$:IF LEN(N$)=0 THEN 290
300 IF N$="b" OR N$="B" THEN LPRINT:LPRINT"    The quality of our `Extras' are comparable to our regular prints PLUS they  are lacquer sprayed. You may choose a few at HALF of regular reorder prices--or ALL of them at even lower rates.":GOTO 460
310 IF N$="c" OR N$="C" THEN 820 ELSE IF N$="d" OR N$="D" THEN CLS:GOTO 3140
320 REM -*- IF N$ DOESN'T EQUAL `b', `c' `OR `d' THEN DEFAULT 350 (SAME AS `a')
330 REM -*- MOST ENTRIES ARE SHOWN IN LOWER CASE (i.e. w/`CAPS LOCK' KEY OFF!)
340 REM -*- MOST LINES SHOULD `CONVERT' LOWER CASE RESPONSES TO SAME AS UPPER
350 CLS:LOCATE 23,21:PRINT "Quantities for your choice will follow...":LOCATE 8,8:PRINT "Now enter a more specific category that has some possibilities...":LOCATE 10,8:PRINT "a) 8x10 album     b) 5x7 album     c) 4x5 album     d) Just Photos"
360 LOCATE 12,23:PRINT "e) I've found what I'm looking for! ";:REM -*- only <CR> OR a=8x10 ALBUM * b=5x7 ALBUM * c=4x5 ALBUM * d=PHOTOS * e=END
370 Q$=INKEY$:IF LEN(Q$)=0 THEN 370
380 REM -*- `ON CHOICE' WOULD HAVE BEEN APPROPRIATE BUT I WANTED INKEY$--SEE 250
390 IF Q$="a" OR Q$="A" THEN 1260
400 IF Q$="b" OR Q$="B" THEN 1990
410 IF Q$="c" OR Q$="C" THEN 2280
420 IF Q$="d" OR Q$="D" THEN 2510
430 IF Q$="e" OR Q$="E" THEN 3140
440 REM -*- AN "a" IS `BY THE BOOK' BUT "WRONG" RESPONSES (i.e. <CR>) GO TO 1260
450 GOTO 1260
460 CLS:LOCATE 23,5:PRINT "Note that a `y' (or `Y') response won't give the special `ALL' price..."
470 LOCATE 12,11:PRINT "Would you like only a portion of the extras quoted (y/n)? ";
480 M$=INKEY$:IF LEN(M$)=0 THEN 480
490 CLS:COLOR 16,7:LOCATE 23,9:PRINT "NOTE:":COLOR 0,7:LOCATE 23,15:PRINT "Your answer MUST include TWO COMMAS to separate sizes...":LOCATE 12,9:IF M$ = "y" OR M$ = "Y" GOTO 570
500 INPUT "Please enter the quantity of 4x5's, 5x7's and 8x10's. ",AZ,BZ,CZ
510 LPRINT:LPRINT TAB(20) "We are quoting"AZ"4x5 extras."
520 LPRINT TAB(20) "I believe you've indicated"BZ"5x7 extras."
530 LPRINT TAB(20) "And there should be"CZ"8x10 extras."
540 DZ=AZ+BZ+CZ:ZP=(AZ*5.95+BZ*9.95+CZ*15):ZT=ZP*0.4
550 LPRINT:LPRINT TAB(5) "Those"DZ"prints regularly total: " USING "$$###,.## worth WITHOUT lacquer spray.";ZP:LPRINT USING "However, ALL may be obtained for only $$###,.##.";ZT
560 CLS:LOCATE 12,5:PRINT USING "That would be a regular value: $$###,.## but ALL for only $$###,.##...";ZP,ZT:GOTO 780
570 REM -*- ABOVE BRANCHES TO `CONTINUE' OR `END' * BELOW FOR ONLY SOME EXTRAS
580 REM -*- EXTRAS (i.e. ALBUM `LEFT-OVERS') ARE HALF OF `REGULAR' REORDERS
590 REM -*- AY=4x5 EXTRAS * BY=5x7 EXTRAS * CY=8x10 EXTRAS
600 REM -*- AA=4x5 SUBTOTAL * BA=5x7 SUBTOTAL * CA=8x10 SUBTOTAL * DA=SUBTOTALS
610 REM -*- LINE 730 IS TO ROUND TAX UP IF ONE-TENTH OF A CENT OR MORE LEFT OVER
620 REM -*- TA AFTER LINE 670 EQUALS TAX & ADDING DA (SUBTOTALS) MAKES EA TOTAL
630 INPUT "Please enter the quantity of in 4x5, 5x7 and 8x10 `extras'...",AY,BY,CY
640 LPRINT:LPRINT "We are quoting a request of"AY"4x5 extras..."
650 LPRINT "This quote also includes"BY"5x7 extras..."
660 LPRINT "And a request of"CY"8x10 extras..."
670 AA=AY*2.98:BA=BY*4.98:CA=CY*7.5:DA=AA+BA+CA:TA=DA*0.06+0.004
680 REM -*- `$.004' IS ADDED TO TAX AMOUNTS SO PRINT USING ROUNDS >`$.001' UP...
690 LPRINT "Therefore, your total is computed as follows,"
700 LPRINT:LPRINT TAB(30) "4x5 *********" USING "**$##,.##";AA
710 LPRINT TAB(30) "5x7 *********" USING "**$##,.##";BA
720 LPRINT TAB(30) "8x10 ********" USING "**$##,.##";CA
730 LPRINT TAB(30) "----------------------"
740 LPRINT TAB(30) "SUBTOTAL ****" USING "**$##,.##";DA
750 LPRINT TAB(30) "Plus 6% Tax *" USING "**$##,.##";TA
760 LPRINT TAB(30) "----------------------":EA=DA+TA
770 LPRINT TAB(30) "GRAND TOTAL *" USING "**$##,.##";EA:CLS:LOCATE 10,5:PRINT USING "Then the extras come to $$###,.## plus about $$##.## tax.";DA,TA
780 PRINT:PRINT TAB(5) "Would you like a quote for something else (y/n)? ";
790 Z$=INKEY$:IF LEN(Z$)=0 THEN 790
800 IF Z$="y" OR Z$="Y" THEN 280 ELSE 3150
810 REM -*- THIS ENDS EXTRAS ROUTINE (NOT FOR `PRINTS ONLY COMBINATIONS')
820 REM -*- START OF REORDER SEGMENT * 10% OFF REGULAR PRICES WITHIN 45 DAYS
830 REM -*- THIS WILL ENABLE EFFICIENCY FOR INDIVIDUALS W/SEPERATE BILLS/QUOTES
840 REM -*- BASIC PRICES ARE LISTED FIRST FOR REFERENCE * PROVIDE COPY OF RESULT
850 REM -*- THE QUANTITY TO QUOTE: RS=4x5 * RM=5x7 * RL=8x10
860 REM -*- PRICE FOR EACH SUBTOTAL: ST=4x5 * MT=5x7 * LT=8x10 * RT=SUBTOTAL
870 REM -*- T=SUBTOTAL PLUS TAX *** THEN PROGRAM GOES TO END (RUN AGAIN IF NEED)
880 CLS:LOCATE 23,7:PRINT "Note: Anything other than a `1' will produce only regular prices...":LOCATE 12,11:INPUT "If this reorder is allowed 10% off, please enter a `1'... ",RZ
890 C=(40-LEN(CN$))/2:LPRINT:LPRINT CHR$(14);:LPRINT SPC(C) CN$:IF RZ<>1 THEN 900 ELSE LPRINT:LPRINT "    You save about 10% by turning in your reorder at this time. Be sure you add at least SALES TAX; maybe postage if out-of-town!":GOTO 1050
900 LPRINT:LPRINT "    We will guarantee the following prices for no more than one month. Our cur- rent regular reorder prices are as follows,"
910 LPRINT:LPRINT TAB(14)"$15.00 for 8x10's   $9.95 for 5x7's   $5.95 for 4x5's"
920 LPRINT:LPRINT "    Most of the photos will be those sizes. However, we don't wish to imply thatother options aren't available. Therefore, note the following,"
930 LPRINT:LPRINT TAB(10) "11x14's start at $39.95" TAB(49) "20x24's start at $109.95" TAB(10) "16x20's start at $89.95" TAB(49) "30x40's start at $295.00"
940 CLS:LOCATE 23,9:PRINT "NOTE: Your answer MUST include ";:COLOR 16,7:PRINT "TWO COMMAS";:COLOR 0,7:PRINT " to separate sizes...":LOCATE 12,9:INPUT "Quantity of reordered 4x5's, 5x7's and 8x10's... ",RS,RM,RL
950 LPRINT:LPRINT TAB(24) "Reordered quantity of 4x5's.....";RS:LPRINT TAB(24) "Reordered quantity of 5x7's.....";RM
960 LPRINT TAB(24) "Reordered quantity of 8x10's....";RL
970 ST=RS*5.95:MT=RM*9.95:LT=RL*15:RT=ST+MT+LT:CLS
980 LPRINT:LPRINT TAB(60) "AMOUNT"
990 LPRINT TAB(18) "Then your subtotal for 4x5's amounts to *" TAB(59) USING "**$#.##";ST
1000 LPRINT TAB(18) "The 5x7's subtotal comes to *************" TAB(59) USING "**$#.##";MT
1010 LPRINT TAB(18) "And your 8x10's subtotal at **********" TAB(56) USING "**$###,.##";LT
1020 LPRINT TAB(59) "_______":T=RT*0.06+0.004
1030 LPRINT TAB(18) "The entire reorder comes to **********" TAB(56) USING "**$###,.##";RT:LOCATE 12,12:PRINT USING "Then the reorder comes to $###,.## plus about $$##.## tax.";RT,T
1040 LPRINT:LPRINT TAB(5) "And we'll add approximately " USING "$$##.## State Sales Tax.";T:GOTO 3160
1050 REM -*- REORDERS WITH AND WITHOUT 10% DISCOUNT COMPARED (FOR INCENTIVE!)
1060 REM -*- SR SD=4x5 REGULAR PRICE AND DISCOUNT PRICE RESPECTIVELY
1070 REM -*- MR MD=5x7   "       "       "       "       "       "
1080 REM -*- LR LD=8X10  "       "       "       "       "       " * T=TAX
1090 REM -*- RT DT=TOTAL "       "       "       "       "       " * G=GRAND
1100 LPRINT:LPRINT "    We will guarantee the following prices for no more than one month. Our cur- rent reorder prices are as follows,"
1110 LPRINT:LPRINT TAB(5) "REGULAR PRICE    $15.00 for 8x10's   $9.95 for 5x7's   $5.95 for 4x5's":LPRINT TAB(5)"DISCOUNT PRICE   $13.50 for 8x10's   $8.96 for 5x7's   $5.36 for 4x5's"
1120 CLS:LOCATE 23,10:PRINT "Remember to separate the three sizes with commas--TWO are REQUIRED...":LOCATE 12,10:INPUT "What is the quantity to quote of 4x5's, 5x7's, and 8x10's...",DS,DM,DL
1130 LPRINT:LPRINT TAB(5)"Please verify that the following quantities are what you've indicated."
1140 CLS:LOCATE 10,5:PRINT "The following is based upon"DS"4x5's,"DM"5x7's and"DL"8x10's reordered..."
1150 SR=DS*5.95:SD=DS*5.355:MR=DM*9.95:MD=DM*8.955:LR=DL*15:LD=DL*13.5:RT=SR+MR+LR:DT=SD+MD+LD
1160 LPRINT:LPRINT TAB(38) "REGULAR" TAB(53) "W/DISCOUNT"
1170 LPRINT TAB(16) USING "### reordered 4x5's";DS;:LPRINT TAB(38) USING "$###.##          ";SR,SD
1180 LPRINT TAB(16) USING "### reordered 5x7's";DM;:LPRINT TAB(38) USING "$###.##          ";MR,MD
1190 LPRINT TAB(16) USING "### reordered 8x10's";DL;:LPRINT TAB(38) USING "$###.##          ";LR,LD
1200 LPRINT TAB(38) "-------          -------"
1210 LPRINT TAB(17) "The entire reorder" TAB(37) USING "$####.##         ";RT,DT
1220 LPRINT:LPRINT TAB(5) "Note that the savings amounts to about " USING "$$##.##. Don't forget that we will";RT-DT:T=DT*0.06+0.004:G=DT+T
1230 LPRINT USING "have to add about $$#.## for 6% State Sales Tax. We suggest about HALF of the   total is paid when placing the reorder. Either way, the reorder is $$##.## and";T,G
1240 LPRINT "is due to be paid in full when IN--usually about three (3) weeks.":PRINT:PRINT TAB(5) USING "Reorder amount is $####.## ($####.## w/o discount) plus about $$#.## tax.";DT,RT,T:GOTO 3160
1250 REM -*- THIS ENDS THE REORDER SECTION; 8x10 ALBUMS ARE NEXT IN PROGRAM LIST
1260 REM -*- FOLLOWING TEXT IS PRODUCT DESCRIPTION EXTRACTED MOSTLY FROM DISTRIB
1270 CLS:LOCATE 23,8:PRINT"`Imperial': per page (add cover); `Fantasy': Album-plus-Photos...":LOCATE 10,8:PRINT"Which of the following `Combinations' would you like quoted?":PRINT:PRINT TAB(10)"a) The `Imperial Wedding   -*- OR -*-   b) The `Fantasy' ";
1280 P$=INKEY$:IF P$="" THEN 1280
1290 IF P$="b" OR P$="B" THEN 1770
1300 LOCATE 14,18:PRINT "Printing is now in progress...";:COLOR 16,7:PRINT "please wait! ";
1310 LPRINT:LPRINT "     Our `Imperial Wedding' is very popular. In fact, in the 8x10 format, it's  our most popular of all! These albums start at about $300. WITH the cover set. Many  options are available, but note these standard features."
1320 LPRINT:LPRINT"* LACQUER SPRAYED ORIGINALS w/any of 8 finishes on REVERSIBLE, NON-ACETATE PAGES* Brown OR white `Original'; `Tiffany Gray' (or Brown) `Futura' Leaves/Mats     * MANY MAT CONFIGURATIONS for flexible, easy assembly--especially `Futura'"
1330 LPRINT"* MULTIPLE SIZES within your album at NO EXTRA CHARGE (i.e. 4-4x5's or 1-8x10)  * Verticals AND horizontals can be MIXED on the SAME PAGE with few restrictions * And YOU may CHOOSE the POSES that go into your album (shipping is inexpensive)"
1340 LPRINT:LPRINT "     The `Imperial Futura' was introduced into our `Imperial' line in 1987 and  is made-to-order for TODAY'S NEWLYWEDS! Available in many styles, it has a very durable spine and one of the LARGEST SELECTIONS of MAT OPENINGS; with many"
1350 LPRINT "UNIQUE configurations. Included are rectangles/ovals, hexagonal, 2 (or 3)-4x5's,etc. AND they're at the SAME per page RATE! However, they're NOT INTERCHANGEABLEbecause they are LARGER. But this allows a 5x7 AND 4x5's on the same page."
1360 LPRINT:LPRINT"     To provide an accurate quotation, we need to have an idea of how many posesand which sizes you would like to have in your album. This quote is based upon"
1370 LPRINT "requested poses for your album. With this `Combination', usually all but the    8x10's are quoted as 4x5's. SOME poses MAY be 5x7 size...ask for details.":GOTO 1490
1380 S=0:M=0:PL=0:CLS:COLOR 0,7:LOCATE 23,30:PRINT"Commas...":LOCATE 12,5,1:INPUT"Now how many 4x5's, 5x7's and 8x10's in the `Imperial' album? ",S,M,PL:LPRINT:LPRINT"    Now let's try the `Imperial 8x10 Combination' with different figures...":GOTO 1500
1390 REM -*- 1380 STARTS PRINT QUANTITY INPUT FIRST TIME * 1490 STARTS NEXT TIME
1400 REM -*- PS=4x5 PAGES * QUOTES ASSUME `PARTIAL PAGES' WILL BE FILLED (1100)
1410 REM -*- PM=5x7 PAGES * IF 1530 5x7 MINIMUM ISN'T MET THEN SKIP 1540
1420 REM -*- 1520 COMPUTES MINIMUM PAGES (WITH MAXIMUM OF 2-5x7's PER PAGE)
1430 REM -*- PL=8x10 PRINTS/PAGES * PT=TOTAL OF PAGES AS PREVIOUSLY COMPUTED
1440 REM -*- 1570 IS SUBROUTINE SHARED BY `Fantasy' AND `Imperial' 8x10 ALBUMS
1450 REM -*- SUBROUTINE LOCATED AT END OF PROGRAM FOR EASE OF CHANGE/REFERENCE
1460 REM -*- `Fantasy' USES BY DISPLAYING PAGE PRICE IF IMPERIAL COVER IS CHOSEN
1470 REM -*- PR=TOTAL PAGE RATE * HL=HALF-LEAF RATE * PP=PRINT OR PHOTO RATE
1480 REM -*- AT=TOTAL PAGES TIMES RATE-PER-PAGE OR `ALBUM (W/O COVER) TOTAL'
1490 S=0:M=0:PL=0:CLS:COLOR 16,7:LOCATE 21,9:PRINT "Note:":COLOR 0,7:LOCATE 19,12:PRINT "Your answer MUST include TWO COMMAS to separate sizes...":LOCATE 21,8:PRINT "Some examples...     `49,11,17' = 49-4x5's, 11-5x7's and 17-4x5's"
1495 LOCATE 23,12:PRINT "`,,20' = 20-8x10's     `48,,10' = 48-4x5's and 10-8x10's":LOCATE 12,5:INPUT "How many 4x5, 5x7 and 8x10 `Imperial' prints are to be quoted? ",S,M,PL
1500 PRINT :PRINT TAB(5)"Calculations (and printing!) are now in progress...";:COLOR 16,7:PRINT "one moment, please!":PS=S/4:IF INT(PS)<PS THEN PS=INT(PS)+1
1510 LPRINT:LPRINT TAB(5)"With"S"4x5 photos, you could have as few as"PS"pages."
1520 PM=M/2:IF INT(PM)<PM THEN PM=INT(PM)+1
1530 IF M=0 THEN 1550 ELSE IF PM<2 THEN LPRINT:LPRINT "    We often don't quote 5x7 prints with 8x10 albums in this `Combination'. But arrangements may be made for only"M"5x7's by resizing them.":GOTO 1550
1540 LPRINT:LPRINT TAB(4) M"5x7's add at least another"PM"pages with 8x10 albums."
1550 LPRINT:LPRINT TAB(5) "At least most, if not all, of the chosen formals are done as 8x10's. And":LPRINT "we're estimating"PL"8x10's as the quantity to go into your album at this time."
1560 LPRINT:LPRINT "    Of course,"PL"8x10's (and/or 8x8's) will add an additional"PL"pages."
1570 REM -*- NOTE THAT THE `Fantasy' (LINES 1890+) USES SUBROUTINE AS OPTION
1580 PT=PS+PM+PL:GOSUB 3560
1590 HL=PR*0.2:PP=PR-HL:LPRINT:LPRINT TAB(5) "This will make your album a MINIMUM of"PT"pages. Each PAGE would be at the":LPRINT USING "rate of only $##.##. This includes the leaf and the mat for the page. And the";HL
1600 LPRINT USING "PHOTO(S) on each page would add another $$#.## to it. Therefore, each `complete";PP
1610 LPRINT USING "page' is computed at $##.## with one (1) to four (4) prints assembled in an";PR
1620 LPRINT "appropriate mat, which is in turn mounted on the leaf, etc. You will have the   option of adding (an) additional page(s) (from the `extras') at that rate."
1630 AT=PT*PR:LPRINT:LPRINT TAB(5) USING "In other words, your total (without cover set) for the album is $$###,.##";AT:LPRINT "--but note that more pages would produce an agreement with lower per-page rates."
1640 COLOR 0,7:CLS:LOCATE 23,26:PRINT "Only a <CR> = default `y'...":LOCATE 10,5:PRINT "The "CN$ USING"'s 8x10 `Imperial' album is $$###,.## (@ $##.##/page).";AT,PR:LOCATE 12,5:PRINT "Would you like to see this with a different quantity (y/n)? ";
1650 Q$=INKEY$:IF LEN(Q$)=0 THEN 1650
1660 IF Q$ ="n" OR Q$ ="N" THEN 1950 ELSE 1380
1670 REM -*- 8x10 IMPERIAL WAS PREVIOUS ROUTINE * ENDING AT 1660
1680 REM -*- 1960 SIMPLY ASKS FOR CONTINUATION WITHIN PROGRAM OR END
1690 REM -*- 1820 RESTARTS CHOICE OF COMBINATION IF HIGHER PRICES INTIMIDATE
1700 REM -*- PS=4x5 PAGES * PM=5x7 PAGES * L=8x10 PAGES * PT=TOTAL PAGES
1710 REM -*- 1880 TO 3560 IS PRICE OF LEAVES FOR `IMPERIAL-STYLED' ALBUM OPTION
1720 REM -*- CC=PRICE OF PRINTS AT FULL RETAIL SINCE THEY'RE REORDERED
1730 REM -*- THIS PRICE PLUS ALBUM INCLUDES AUDIO-VISUAL PRESENTATION
1740 REM -*- SEE REMarks AROUND 1000 FOR FURTHER DESCRIPTIONS @ `Imperial'
1750 REM -*- 280 GOES BACK TO INITIAL CHOICES OF ORIGINALS, `EXTRAS' OR REORDERS
1760 GOTO 1950
1770 LPRINT:LPRINT TAB(5)"We consider `The Fantasy' to be our ""Top-of-the-Line"" combination! In the"
1780 LPRINT "8x10 format, albums featured in the `Fantasy Combination' start at around $700."
1790 CLS:LOCATE 10,5:PRINT "Are you sure the $700.+ `Fantasy combination' is the one wanted (y/n)? ";
1800 AN$=INKEY$:IF LEN(AN$)=0 THEN 1800
1810 IF AN$="n" OR AN$="N" THEN 1260
1820 LPRINT "But first, we need to make a few calculations based upon your checklist.":LOCATE 23,8:PRINT "Two commas MUST be used to separate three sizes for this answer...":LOCATE 12,5:INPUT "How many 4x5's, 5x7's and 8x10's do you wish to be used";S,M,L
1830 PS=S/4:IF INT(PS)<PS THEN PS=INT(PS)+1
1840 LPRINT:LPRINT TAB(5)"You can have four (4) 4x5's, or two (2) 5x7's, or `only' one (1) 8x10 on a"
1850 PM=M/2:IF INT(PM)<PM THEN PM=INT(PM)+1
1860 LPRINT "page. An appropriate mat will nicely frame either with a little manipulation."
1870 REM -*- NOTE THAT THE `Imperial' (LINES 1570+) USES THE SAME SUBROUTINE
1880 PT=PS+PM+L:GOSUB 3560
1890 HL=PR*0.2:LPRINT "You may choose our regular albums from the `Imperial Wedding' Combination. Just add the price of the cover set to your"PT"pages--which is " USING "$###.##. Or choose    Holson's `Leathermark' genuine leather albums.";PT*HL
1900 LPRINT:LPRINT TAB(9)"`Leathermark' Album w/30-PAGE    40-PAGE    50-PAGE    60-PAGE":LPRINT TAB(31)"----------------------------------------":LPRINT TAB(9)"`E' - Bonded Economy   $275.      $305.      $340.      $375."
1910 LPRINT TAB(9)"`F' - Oval Frame       $295.      $325.      $360.       ---":LPRINT TAB(9)"`L' - Natural Grain    $315.      $345.      $375.       ---":LPRINT TAB(9)"`S' - Italian Suede    $325.      $355.      $385.       ---"
1920 CLS:LOCATE 10,5:PRINT USING "If the `Imperial' album is chosen, the PAGES will run around..$$##.##.";PT*HL:PRINT:INPUT "    Please enter the price of the album-plus-pages (but w/o prints) $",AL
1930 LPRINT:LPRINT TAB(5)"Based upon"S"4x5's,"M"5x7's and"L USING"8x10's put in a $$##.## album, we";AL:CC=S*7.95+M*12.95+L*18.95+AL
1940 LPRINT USING "estimate your album: $$###,.## plus tax.";CC:CLS:LOCATE 10,5:PRINT USING "This `Fantasy' estimate: $$###,.## WITH chosen cover set (+ tax).";CC
1950 PRINT:PRINT:PRINT TAB(20)"Shall we provide another quote (y/n)? ";
1960 A$=INKEY$:IF LEN(A$)=0 THEN 1960
1970 IF A$="n" OR A$="N" THEN 3140 ELSE LPRINT:LPRINT TAB(5)"Let's try another angle you might consider; again based upon your data..."
1980 GOTO 280
1990 REM -*- START OF ROUTINE FOR 5x7 ALBUMS * `Imperial' OR `Fantasy' options
2000 LPRINT:LPRINT TAB(5) "Most initially feel that all of the poses will be 5x7's in these albums.":LPRINT "However, you'll see that many poses may be acceptable as 3½x5's--and cost less."
2010 LPRINT "These 5x7 albums are available as family albums or for the Bride & Groom. We canchoose from either of the following two `Combinations',":LPRINT:LPRINT TAB(10) "a) `The 5x7 Imperial Wedding'   or   b) `The 5x7 Fantasy'"
2020 CLS:LOCATE 23,15:PRINT"Type `b' for Photos-plus-Album; otherwise per-page...":LOCATE 10,5:PRINT"Which of the following two `Combinations' shall be chosen at this time?":LOCATE 12,10:PRINT"a) `The Imperial 5x7 Wedding'   or   b) `The 5x7 Fantasy' ";
2030 M$=INKEY$:IF M$="" THEN 2030
2040 IF M$="b" OR M$="B" THEN 2190
2050 REM *** MP=HALF (ROUNDED UP) OF 3½x5's QUANTITY PLUS QUANTITY OF 5X7's
2060 REM *** MR=RATE PER PAGE (W/PHOTO) * MT=PAGES TIMES RATE (MP*MR) SUBTOTAL
2070 REM *** AP=RATE PER PAGE (W/O LEAF)--IN OTHER WORDS THE PHOTO(S) ON PAGE
2080 REM *** THIS IS OUR LEAST-COMMON SIZE OF ALBUM--REASON: 8x10's `4-UP'
2090 LPRINT:LPRINT TAB(5)"To quote the `Imperial', we need to calculate how many pages will be in your"
2100 CLS:LOCATE 23,14:PRINT "You may skip one size but you MUST include a COMMA...":LOCATE 12,8:INPUT "Please indicate how many originals will be 3½x5's and 5x7's... ",SI,MI
2110 LPRINT "album. You may have some of your originals printed to 3½x5's with 2 per page.":SP=CINT(SI/2):MP=MI+SP
2120 LPRINT:LPRINT TAB(4) SI"3½x5's adds"SP"pages to the"MI"5x7's.":MR=18.5-(MP*0.05):MT=MP*MR:AP=MR-4.5
2130 LPRINT:LPRINT TAB(5) "Our rate for"MP"5x7 pages (your total indicated) is only " USING "$$#.##.";MR
2140 LPRINT:LPRINT TAB(5)"The cover set is only another $21.95; everything else comes to " USING "$$##.##.";MT
2150 LPRINT "This is based upon $4.50 for that side of the leaf and " USING "$$#.## for the photo(s).";AP
2160 CLS:LOCATE 10,5:PRINT "Our estimate for"MP"pages comes to"USING " $$###,.## WITH the $21.95 cover set.";MT+21.95:LOCATE 12,20:PRINT "Would you like another quote (y/n)? ";
2170 N$=INKEY$:IF LEN(N$)=0 THEN 2170
2180 IF N$="n" OR N$="N" THEN 3140 ELSE 280
2190 CLS:LOCATE 23,15:PRINT "Response must include a COMMA to separate sizes...":LOCATE 12,15:INPUT "How many 3½x5's and 5x7's are to be quoted";RL,GB
2200 LPRINT:LPRINT TAB(5) "Our featured 5x7 `Fantasy' album is available in 20 or 30-page sizes. With":LPRINT "some calculations (based upon"GB"5x7's and"RL"3½x5's) we arrive at your amount"
2210 PO=GB*12.95+RL*7.95:LPRINT USING "for the ordered PHOTOS: $$###,.##.";PO:MP=GB+CINT(RL/2):MA=MP*2.41
2220 LPRINT:LPRINT "    Our `Imperial Wedding' albums may be used for $21.95 instead of the featured`Leathermark' cover set. The minimum for"MP USING"Pages-with-Photos: $$##.##...or you ";MA:LPRINT "may choose from the following 5x7 `Fantasy' albums."
2230 LPRINT:LPRINT TAB(5)"* Simply pick the smallest sized album that will hold the desired quantity":LPRINT TAB(5)"* Flyleaves can economically compensate for less-than-full albums":LPRINT TAB(5)"* Multiple albums can accommodate greater than 30 pages"
2240 LPRINT:LPRINT TAB(42)"20-PAGE    30-PAGE":LPRINT TAB(19) "`E' - Bonded Economy   $159.95    $179.95"
2250 LOCATE 14,10:INPUT "Please enter the price of the Album-and-Pages desired... $",A
2260 T=A+PO:LPRINT:LPRINT TAB(5) USING "With `The Fantasy', that album (w/Pages and Photos) amount: $$###,.##.";T:CLS:LOCATE 10,7:PRINT USING "That 5x7 `Fantasy' album (w/Pages and Photos): $$###,.## plus tax...";T
2270 LOCATE 12,20:PRINT "Would you like another quote (y/n)? ";:GOTO 2170
2280 CLS:LOCATE 10,22:PRINT "Which `Combination' are we to quote?":PRINT:PRINT TAB(11) "a) `The 4x5 Imperial Wedding'   OR   b) `The 4x5 Fantasy' ";:LPRINT:LPRINT TAB(5) "Our 4x5 albums are full-featured; similar to their 8x10 and 5x7 `cousins'!"
2290 LPRINT "They can be done as (a) The `4x5 Imperial Wedding' or (b) The `4x5 Fantasy'."
2300 S$=INKEY$:IF S$=""THEN 2300
2310 IF S$="b" OR S$="B" THEN 2410
2320 LPRINT "The `Imperial Wedding Combination' is computed on a `per page' basis. Of course,with 4x5 albums the selections equal the pages--but we have a 10-page minimum."
2330 CLS:LOCATE 12,5:INPUT "How many 4x5 `Imperial' poses shall we quote";P:IF P<10 THEN LPRINT:LPRINT TAB(5)"Since we require a minimum of 10 pages, we've adjusted"P"pages. So now..."
2340 IF P<10 THEN P=10
2350 R=13.3-(P*0.03):T=R*P
2360 LPRINT "Our rate for"P"pages is " USING "$$#.## and includes our Imperial Princess' mats. There-";R
2370 LPRINT "fore, your estimate for photos, pages, etc. comes to only " USING "$$##.##.";T
2380 LPRINT:LPRINT TAB(5) "This is based upon $3.50 for the page itself and" USING "$$#.## for the photos. And";R-3.5
2390 LPRINT "normally includes us SHOOTING extras to give you a choice of poses, etc. Simply":CLS:LOCATE 10,5:PRINT USING "This 4x5 `Imperial' Combination quote is $$###,.## WITH the $17.50 covers.";T+17.5
2400 LPRINT "add only $17.50 for the binder set and your album is complete.":PRINT:PRINT TAB(22) "Would you like another quote? ";:GOTO 2170
2410 LPRINT:LPRINT "    Our featured `Fantasy' 4x5 album is available in 20 or 30-page configura-":CLS:LOCATE 12,5:INPUT "What is the quantity of poses for the 4x5 `Fantasy' album";Q
2420 LPRINT "tions. You've indicated an interest in, I believe, what the cost of"Q"photos"
2430 P=Q*7.95:LPRINT "would be. Well, the current price amounts to " USING "$$##.## for those PRINTS. Note that";P:SA=Q*2.06:ST=SA+17.5
2440 LPRINT "our regular `Imperial Wedding' albums may be used. The $17.50 cover set added tothe `page-only' price of" USING "$$##.##";SA;:LPRINT " is equal to" USING "$$##.##...OR you may use one of the";ST
2450 LPRINT "following `Leathermark' featured cover sets. Simply pick the smallest-sized"
2460 LPRINT "album that will hold the desired quantity. If you desire a larger-than 30-page  size, you may use more albums. Our flyleaves can beautifully and economically   compensate for less-than full albums."
2470 LPRINT:LPRINT TAB(44) "20-PAGE    30-PAGE":LPRINT TAB(22) "`E' - Bonded Economy  $129.95    $149.95"
2480 CLS:LOCATE 12,5:INPUT "Please enter the price of the `Fantasy' Album-and-Pages desired $",A
2490 T=A+P:LPRINT:LPRINT USING "    With $$##.## for the Album-and-Pages, adding the photos comes to $$##.##.";A,T
2500 CLS:LOCATE 10,5:PRINT USING "This `Fantasy' 4x5 album (with photos, etc.) amounts to $$##.##.";T:PRINT:PRINT TAB(20) "Would you like another quote?":GOTO 2170
2510 LPRINT :LPRINT "    If you feel you'd like `Just Photos' for your wedding, you may choose from  8x10's, 5x7's or 4x5's with our `Bride's Dream' combination. If you don't want":GOTO 2530
2520 IF A$ <> "y" OR A$ <> "Y" THEN 330 ELSE 2580
2530 LPRINT "albums or lacquer spray, then the straight-forward approach of this option prob-ably is for you. Our `Royal Family' variation features THREE (3) ORIGINALS in   TWO SIZES and MAY include one or more family albums."
2540 CLS:LOCATE 23,4:PRINT "Quantity request follows but choice `d' will first ask which variation...":LOCATE 12,10:PRINT "a) 8x10  -*-  b) 5x7  -*-  c) 4x5  -*-  d) 8x10 and `b' or `c' ";
2550 S$=INKEY$:IF LEN(S$)=0 THEN 2550
2560 IF S$ = "b" OR S$ = "B" THEN 2700
2570 IF S$ = "c" OR S$ = "C" THEN 2800
2580 IF S$ = "d" OR S$ = "D" THEN 2920
2590 CLS:LOCATE 12,5:INPUT "Now list the quantity of poses that are to be taken... ",LR
2600 LQ=LR*2:LE=15-0.08*LQ
2610 IF LE<10.55 THEN LE=10.55
2620 LP=LQ*LE
2630 IF LP<250 THEN 2890
2640 LPRINT:LPRINT TAB(5)"Requesting"LR"poses would produce about"LQ"8x10's for only " USING "$$###,.##.";LP:CLS:LOCATE 10,5:PRINT "In brief, about"LQ"8x10's are only "USING "$$###,.## plus tax.";LP
2650 LOCATE 12,5:PRINT "Shall we quote a different quantity of 8x10's (y/n)? ";
2660 A$=INKEY$:IF LEN(A$) = 0 THEN 2660
2670 IF A$="n" OR A$="N" THEN 280
2680 GOTO 2590
2690 GOTO 280
2700 CLS:LOCATE 12,10:INPUT"Now list the quantity of poses you wish taken. ",MR
2710 MQ=MR*2:MP=10.05-0.05*MQ
2720 IF MP<6.95 THEN MP=6.95
2730 MA=CINT(MP*MQ)-0.05
2740 IF MA<175 THEN 2900
2750 LPRINT:LPRINT "    Requesting"MR"poses would produce about"MQ"5x7's for only" USING "$$###,.##.";MA:CLS:LOCATE 10,5:PRINT "A request of"MR"poses would produce about"MQ"5x7's for "USING "$$###,.##.";MA
2760 LOCATE 12,5:PRINT "Would you like a different quantity of 5x7's quoted (y/n)?"
2770 B$=INKEY$:IF LEN(B$) = 0 THEN 2770
2780 IF B$="n" OR B$="N" THEN 2690 ELSE 2700
2790 IF C$="n" OR C$="N" THEN 2690
2800 CLS:LOCATE 12,18:INPUT "Now list the quantity of poses to be quoted. ",SR
2810 SQ=SR*2:SP=6.25-0.03*SQ
2820 IF SQ>99 THEN SP=3.25
2830 ST=SP*SQ
2840 IF ST<100 THEN 2910
2850 LPRINT:LPRINT TAB(5) "If you request"SR"poses, we suggest a MINIMUM of"SQ "4x5's. All"SQ"would be":LPRINT USING "only $###.##. You'd get to keep all of them for just $#.## each.";ST;SP
2860 CLS:LOCATE 10,12:PRINT "Requesting"SR"poses produces about"SQ USING "4x5's for $###.##.";ST:LOCATE 12,12:PRINT "Would you like a different quantity of 4x5's quoted (y/n)? ";
2870 C$=INKEY$:IF LEN(C$) = 0 THEN 2870
2880 IF C$="N" OR C$="n" THEN LPRINT :LPRINT "    Note that we MAY shoot a few additional poses--unless `FIRM' is requested to be put in the agreement. These would be at the same per print rate.":GOTO 2790 ELSE 2790
2890 LPRINT "Sorry, but 8x10's have a $250. minimum and"LQ"requested poses aren't enough.":LPRINT:GOTO 2590
2900 LPRINT "The minimum for 5x7's is $175., but requesting"MR"poses won't make it.":GOTO 2700
2910 LPRINT :LPRINT TAB(5)"A very reasonable minimum of $100. for 4x5's is required. However, request-":LPRINT "ing"SR"poses isn't sufficient to meet that restriction.":GOTO 2800
2920 REM -*- `ROYAL FAMILY' ROUTINES w/4x5's FIRST AND 5x7 OPTION FOLLOWING
2930 LPRINT:LPRINT "    Since `The Royal Family' offers multiple sizes of ALL the poses, it saves a lot of time and expense. The savings allows us to offer you our lowest per-printrates for originals. Either of the following two options are available,"
2940 LPRINT:LPRINT TAB(16) "(A) 8x10's & 4x5's  -*- OR -*-  (B) 8x10's & 5x7's":CLS:LOCATE 23,7:PRINT "Choose one at this time--the other may be chosen next to compare...":LOCATE 12,14:PRINT "a) 8x10's & 4x5's    -*- OR -*-    b) 8x10's & 5x7's ";
2950 D$=INKEY$:IF LEN(D$)=0 THEN 2950
2960 IF D$="b" OR D$="B" THEN 3050
2970 CLS:LOCATE 23,37:PRINT "(4x5/8x10)":LOCATE 12,14:INPUT"Now list the quantity of requested (i.e. 8x10) poses. ",MP:REM * MP=REQUESTED POSES * LS=LARGE SIZE * SS=SMALL SIZES * MZ=RATE @ SET* MM=TOTAL PRICE W/O TAX * TA=TOTAL 4X5 ALBUMS INCLUDED @ N/C
2980 IF MP<5 THEN MP=5
2990 LS=MP*2:SS=MP*4:IF LS<31 THEN TA=1 ELSE IF (LS=>31 AND LS<71) THEN TA=2 ELSE IF(LS=>71 AND LS<110) THEN TA=3 ELSE IF LS>109 THEN TA=4
3000 CLS:LOCATE 23,11:PRINT "This 4x5/8x10 `Trio' may include"TA"presentation albums...":IF LS>99 THEN MZ=10 ELSE MZ=20-(LS*0.1)
3010 MM=MZ*LS:LPRINT:LPRINT TAB(5)"Requesting"MP"poses would produce a MINIMUM of"LS"8x10 and"SS"4x5 prints.":LPRINT USING "These would cost only $$###.## INCLUDING";MM;:LPRINT TA "4x5 family album(s)! Additional poses"
3020 LPRINT USING "(if taken) would be $##.## per set...";MZ:LOCATE 10,5:PRINT "Those"LS"8x10's &"SS USING"4x5's would be $$###.## WITH # 4x5 family album(s).";MM;TA:PRINT:PRINT TAB(8) "Would you like another quantity of this variation quoted (y/n)? ";
3030 I$=INKEY$:IF LEN(I$) = 0 THEN 3030
3040 IF I$="n" OR I$="N" THEN 280 ELSE 2960
3050 CLS:LOCATE 23,36:PRINT"(5x7/8x10)":LOCATE 12,8:INPUT"Now list the quantity of requested poses (Minimum requests: 5) ",BP:'BP=POSES REQUESTED FOR 1-8x10 & 2-5x7; BS=POSES QUOTED AND QTY. 8x10's; LO=QTY. 5x7's; BC=PRICE @ SET; BD=TOTAL PRICE (PLUS TAX)
3060 IF BP<5 THEN BP=5
3070 BS=BP*2:LO=BP*4:BC=25-(0.1*BS)
3080 IF BC <15 THEN BC=15
3090 BD=BC*BS
3100 LPRINT:LPRINT TAB(5)"Requesting"BP"poses would produce"BS"8x10 &"LO USING"5x7 originals for $$###.##.";BD:LPRINT USING "Additional poses MAY be taken; you'd be obligated to take them unless `FIRM' is indicated; they'd be only $##.## per set.";BC
3110 CLS:LOCATE 10,5:PRINT "That would produce about"BS"8x10's &"LO USING "5x7's for only $$###.##.";BD:PRINT:PRINT TAB(5) "Would you like a different quantity of 8x10's & 5x7's quoted (y/n)? ";
3120 Q$=INKEY$:IF LEN(Q$) = 0 THEN 3120
3130 IF Q$="n" OR Q$="N" THEN 280 ELSE 3050
3140 LPRINT:LPRINT"    You may use this estimate to help you decide how large an album you'll want.If you can't decide now, we'd be happy to hold your date open a few more days.":GOTO 3170
3150 LPRINT:LPRINT "    Thank you for considering these options. You may keep this sheet for your   reference. You may bring it with you if reordering at another time.":GOTO 3170
3160 LPRINT:LPRINT "    Thank you for your reorder. We'll keep the negatives on file for possible   future reorders. Please keep this sheet for future reference."
3170 LPRINT:LPRINT "    If you have any questions, don't hesitate to call 419/483-5225 ANYTIME!":C=(66-LEN(YN$))/2:LOCATE 21,C:PRINT "That's all, "YN$"!":LPRINT CHR$(12):LOCATE 23,24:PRINT "Press any key to end program... ";
3180 Q$=INKEY$:IF LEN(Q$)=0 THEN 3180
3190 LPRINT CHR$(27) CHR$(64):SYSTEM'-*- LAST MAJOR REVISION BY RON HERNER: 5/88
3200 REM -*- FOLLOWING IS FOR DISPLAY OF PROGRAM OUTLINE--HELPFUL WHEN MODIFYING
3210 COLOR 0,7,0:KEY OFF:CLS:LOCATE 1,33,0:PRINT "SCREEN #1 OF 2":LOCATE 3,7:PRINT "10- 270 INTRO ROUTINE"
3220 PRINT "     280- 340 BRANCH ROUTINE 350 * 460 * 820 * 3140"
3230 PRINT "     350- 450 ORIGINALS 1260 * 2000 * 2290 * 2520 * 3150"
3240 PRINT "     460- 490 EXTRAS 500 * 570"
3250 PRINT "     500- 560 IF `ALL' EXTRAS 780 OR 3160"
3260 PRINT "     570- 770 IF `SOME' EXTRAS 780 OR 3160"
3270 PRINT "     780- 810 LOOP TO 280 OR 3160"
3280 PRINT "     820- 880 REORDERS 900 * 1050"
3290 PRINT "     890-1040 `REGULAR' REORDERS * END 3170"
3300 PRINT "    1050-1250 DISCOUNT REORDERS * END 3170"
3310 PRINT "    1260-1300 8x10 ALBUM 1310 * 1700"
3320 PRINT "    1310-1690 IMPERIAL 8x10 LOOP OR 1960"
3330 PRINT "    1700/1790-1950 FANTASY 8x10 LOOP OR 1960"
3340 PRINT "    1960-1990 TO 280 OR END 3150"
3350 PRINT "    2000-2050 5x7 ALBUM 2060 * 2200"
3360 PRINT "    2060-2170 IMPERIAL 5x7 ALBUM TO 2180"
3370 PRINT "    2180-2190 TO 280 OR END 3150"
3380 PRINT "    2200-2280 FANTASY 5x7 ALBUM TO 2180"
3390 PRINT "    2290-2320 4x5 ALBUM 2330 * 2420":LOCATE 23,5:PRINT "Press any key to display the program's second of two screens of layout... ";
3400 IF INKEY$=""THEN 3400 ELSE CLS
3410 LOCATE 3,33:PRINT "SCREEN #2 OF 2":LOCATE 6,5:PRINT "2330-2410 IMPERIAL 4x5 LOOP OR 2180"
3420 PRINT "    2420-2510 FANTASY 4X5 LOOP OR 2180"
3430 PRINT "    2520-2590 PHOTOS ONLY 2600 * 2710 * 2810 * 2940"
3440 PRINT "    2600-2700 8x10 PHOTOS LOOP OR 2900 OR 280"
3450 PRINT "    2710-2800 5x7 PHOTOS LOOP OR 2910 OR 280"
3460 PRINT "    2810-2890 4x5 PHOTOS LOOP OR 2920 OR 280"
3470 PRINT "    2900-2930 PHOTOS ONLY MINIMUMS AND RETURN"
3480 PRINT "    2940-2960 PHOTOS ONLY WITH TWO SIZES OF ORIGINALS 2970 * 3060"
3490 PRINT "    2970-3050 8x10/4x5 ORIGINALS LOOP OR 280"
3500 PRINT "    3060-3140 8x10/5x7 ORIGINALS LOOP OR 280"
3510 PRINT "    3150-3200 END SEQUENCES"
3520 PRINT "    3210-3550 OUTLINE OF PROGRAM"
3530 PRINT "    3560-3580 IMPERIAL 8x10 VARIABLES/COMPUTATIONS (ALSO FANTASY OPTION)
3540 PRINT "    3590-     OPENING SEQUENCE":LOCATE 23,5,0:PRINT "Press `1' to see the first screen again or any key to end both screens... ";
3550 G$=INKEY$:IF G$="" THEN 3550 ELSE IF G$="1" THEN CLS:GOTO 3210 ELSE CLS:COLOR 7,0,0:KEY ON:END
3560 REM -*- IMPERIAL VARIABLES/COMPUTATIONS (AND FANTASY OPTION) @ 1570/1890
3570 PR=31-(PT*0.25):IF PR<17.5 THEN PR=17.5
3580 RETURN
3590 REM -*- OPENING SUBROUTINE
3600 CLEAR:KEY OFF:LPRINT CHR$(27) CHR$(64) CHR$(27) CHR$(52) CHR$(27)"N"CHR$(6);:COLOR 0,7,0:CLS:COLOR 31,0:LOCATE 23,12,0:PRINT " COPYRIGHT (c) 1988 BY RON HERNER dba BROAD STREET PHOTO ":COLOR 0,7
3610 WHILE R<12:C=R:L$=MKI$(R)
3620    READ R,C,L$
3630    DATA 5,33,W,6,35,E,7,37,D,8,39,P,9,41,R,10,43,I,11,45,C,12,47,E
3640    LOCATE R,C:PRINT L$
3650 PLAY"MB MS O4 T150 L8 F E D B <A G C <B A >G D >A":WEND:'FOLLOWING IS TITLE OUTLINE
3660 WHILE U<15:READ U,A
3670    DATA 14,48,14,46,14,44,14,42,14,40,14,38,14,36,14,34,14,32
3680    DATA 14,30,13,30,12,30,11,30,10,30,9,30,8,30,7,30,6,30,5,30,4,30
3690    DATA 3,30,3,32,3,34,3,36,3,38,3,40,3,42,3,44,3,46,3,48,3,50
3700    DATA 4,50,5,50,6,50,7,50,8,50,9,50,10,50,11,50,12,50,13,50,14,50,23,10
3710    LOCATE U,A:PRINT "$"
3720 WEND:LOCATE 17,14:PRINT"A $25. donation is requested IF the program is useful":LOCATE 19,18:PRINT"Send to: 221 Broad Street, Bellevue, OH 44811":LOCATE 21,12:PRINT"You may distribute ALL files for $8.00 MAXIMUM @ the U.S.":LOCATE U,70:PRINT"Ver. 1.2"
3730 FOR P=1 TO 2000:IF INKEY$=""THEN NEXT P
3740 GOTO 100
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0937

     Volume in drive A has no label
     Directory of A:\

    1        BAT       354   6-02-88   5:13p
    2        BAT       180   6-02-88   5:00p
    3        BAT       180   6-02-88   5:02p
    AUTOEXEC BAT        27   6-09-88   5:01p
    CONFIG   SYS        50   4-15-88   7:00p
    FORMAT   COM      6032  11-09-84   2:11a
    GO       BAT       956   6-09-88   5:32p
    PHOTO1   DOC     34816   6-13-88  12:34p
    README   1ST      1587   6-09-88   2:00p
    REGISTER DOC      2560   6-10-88   1:36p
    REORDER  SAM     65934   5-12-88   1:46p
    REORDERS BAS     24483   6-10-88  10:51a
    SET-UP   BAT       937   6-11-88   1:01p
    ST       COM     14336   2-03-84   2:43a
    WEDPRICE BAS     33171   6-13-88   1:15p
    FILES937 TXT      1758   8-22-88  12:36p
           16 file(s)     187361 bytes
                          128000 bytes free
