---
layout: page
title: "PC-SIG Diskette Library (Disk #2392)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2392/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2392"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC REVIEWS"

    PC REVIEWS is a collection of original ``hands-on'' reviews that can
    save you lots of money!  How?  By telling you what PC software and
    hardware to buy and what to avoid!
    
    PC REVIEWS features professional evaluations by a computer journalist
    and consultant.  The reviews are concise, to-the-point, and tell you
    exactly what you need to know about the products.  This is a menu-
    driven program, and easy to use.  The author uses a handy five-star
    rating system, too.  All reviews are pure ASCII files and can be
    printed easily.
    
    PC REVIEWS can help the MIS professional, office PC guru, or home user
    make the right PC purchasing decisions.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 1450PLUS.TXT

{% raw %}
```
                         GoldStar 1450 Plus VGA Monitor
                         Copyright 1990 David Batterson

     When buying a color monitor today, there's really no reason to buy an EGA
monitor.  They don't cost that much less than a VGA monitor, and VGA is so much
better.  As for CGA, don't even think about it.
     You might decide on a regular VGA monitor.  However, if you're heavy into
graphics you should consider one that supports Super VGA.  Such a product is
GoldStar's new 1450 Plus VGA Monitor.
     The 1450 Plus is an analog monitor supporting the usual VGA modes of
640x480, 640x350 and 720x400.  In Super VGA mode, the resolution is 800x600.
     Remember that in 800x600 Super VGA mode, you only get 16 colors.  It
displays 256 colors (from a palette of 256,000 +) in 320x200 resolution.
     Let's look at some more of the specs.  It has a high-quality .31 dot
pitch, non-glare CRT (don't buy a monitor with a higher number).  It's rated a
14-inch diagonal screen, but the actual exposed area is 13" diagonal.
     The important controls are right up front:  on/off switch and sliding
contrast and brightness controls.  It's a light gray color, preferable to the
usual dull beige of typical PCs and monitors.  I would prefer a charcoal or
black case if I had a choice.
     The tilt/swivel base works smoothly, unlike my Tatung VGA monitor which
requires a Sumo wrestler to change the tilt.  Behind the cabinet are the
vertical size, horizontal size, horizontal position and vertical center
controls.  These are factory set but can be adjusted to your liking.
     The 1450 Plus comes with some handy anti-static wipes.  I used one and it
worked very well, keeping away the annoying dust.  I've tried Staticide spray
on my own monitor, and it still attracts dust.  These wipes work.
     So how does it look to the eye?  That's the ultimate test.  The colors
were very accurate and sharp, as was the text display.
     I tested the monitor with my built-in Paradise VGA Plus adaptor.  I tried
different VGA modes with PC Paintbrush IV Plus, including Super VGA.  The 1450
Plus supports 43 line, 132 column text mode if you want it.
     I also used it with Publish It!, GEM, PFS: First Publisher 3.0, SPLASH!
and other programs.  The picture quality was superior to my monitor.
     Not all software supports the Super VGA 800x600 graphics mode, but this is
changing.  Programs that do include Windows, GEM, AutoCad, Ventura Publisher
and Framework II/III.  With WordStar and WordPerfect, you'll be able to display
the 132 column text mode.
     The 1450 Plus should serve your needs quite well.  It has a suggested list
price of $699, but the actual cost will be much less.
     For more information, contact GoldStar Technology, Inc., 3003 N. First
Street, San Jose, CA  95134-2004; 408-432-1331, FAX: 408-432-6053.
                                       #
     David Batterson reviews PC hardware and software on a regular basis.  Send
any comments via MCI Mail: DBATTERSON.
```
{% endraw %}

## 2400ETC.TXT

{% raw %}
```
                The 2400etc - Internal 2400 Baud Modem With MNP
                         Copyright 1989 David Batterson


     ATI Technologies Inc. in Canada is a manufacturer of high-performance
communications and graphics boards.  It makes the VGAWONDER card, among other
products.
     Its newest product is the 2400etc, a 2400 baud modem with MNP (Microcom
Networking Protocol).  The 2400etc is made both in internal and external types.
This review covers the internal modem.
     What is MNP anyway?  MNP is a hardware protocol, as opposed to a software
protocol like XMODEM, YMODEM, etc.  It not only provides error-checking,
resulting in 100% error-free transmissions, but speeds things up considerably.
     The 2400etc has MNP Class 5 data compression.  Though only a 2400 baud
modem, this compression feature allows the modem to actually achieve over 4800
baud throughput.
     MNP Class 5 uses two methods:  Adaptive Packet Assembly and Data Phase
Optimization.  Data is sent in packets.  What Adaptive Packet Assembly does is
to monitor the phone line during transmission.  If it detects that the line is
mostly error-free, it automatically increases the size of those packets.
Likewise, if there is line trouble, the packet sizes are decreased.
     MNP also eliminates much "administrative information," by use of the Data
Phase Optimization.  In addition, the 2400etc uses a single chip Digital Signal
Processor.
     All of these work in harmony to provide the highest possible speed, with
zero errors.  However, the modem you are calling must also support MNP protocol
for it to work.
     The 2400etc automatically detects whether that modem has MNP, and will
fall back to MNP levels 4, 3, 2 or 1 as necessary.  If it finds that the
receiving modem doesn't support MNP, it operates as a normal modem.  In this
case, your maximum speed is 2400-bps throughput, and error-checking is done by
your software, not by the modem itself.
     Supplied with the modem is the excellent MIRROR II software (the Crosstalk
clone), customized for the 2400etc.  Once you install the board (selecting COM
1, 2, 3 or 4), you proceed with the easy software installation.  At that time,
you select either MNP or non-MNP operation.  This can be changed at any time.
     MIRROR II supports a new YMODEM setting, so that you indicate whether the
remote modem has MNP.  This is done using the /y or /n switches in your
command.  For instance, you might use the command:  "RY BATMAN.ARC/y."
For non-MIRROR II users, that means you wish to receive file BATMAN.ARC using
YMODEM, and MNP is used by both modems.
     It's best to find out ahead of time if the modems you'll be calling have
MNP.  For example, if you call a BBS which doesn't have an MNP modem, you'll
get a delay.  The manual says about 18 seconds, but it seemed to take longer
with one BBS I called.
     The delay is caused because the modem is trying to establish an MNP link.
If it doesn't find one, it connects as a non-MNP modem.  If the delay bothers
you, then don't keep the MNP installation.  I was unable to find any MNP modems
to call locally, so I reinstalled the modem in non-MNP mode.
     You can also change the MNP setting, using the "AT" commands.  In this
way, you can call one modem with MNP, and another without MNP, without running
the installation each time.  The command "AT&F" selects non-MNP, and "AT&F1"
selects MNP mode.
     The 2400etc has several diagnostic tests, each of which is explained in
the manual.  If you have any trouble, just run these and look at the onscreen
responses you get.  I had no problems with it.
     At a suggested list of $239, the 2400etc internal MNP modem is a good
value.  Remember, you'll save on long distance costs if the modem you're
calling has MNP capability.  Transmission speed will be double that of a
regular 2400 baud modem.  As more MNP modems are installed, many users will be
able to enjoy faster uploads/downloads, and lowered phone bills.
     For more information, contact ATI Technologies Inc., 3761 Victoria Park
Ave., Scarborough, Ontario, CANADA M1W 3S2; 416-756-0718; FAX: 416-756-0720.
                                    -----
     UPDATE August 26, 1989
     The new version of the 2400etc/i modem now supports the CCITT v.42
standard:  LAP-M (Link Access Procedure for Modems).  LAP-M is the "primary
protocol" for v.42 modems, with MNP as the "Annex A" (secondary) protocol.
     All registered owners of a 2400etc modem bought between May 1 and August
1, 1989, will receive a free v.42 upgrade.  The upgrade is a new EPROM which
replaces the one on your 2400etc modem.  This is a very generous offer from
ATI, and not one you would generally receive from a U.S. company.
     Upgrades outside that period cost only $20.  That's very reasonable.
     The new 2400etc/e [external] v.42 modem has a suggested retail of only
$299.  This is reportedly the lowest-priced v.42-compliant modem available at
this time.
                                       #
     David Batterson writes articles and reviews about modems and the online
industry.  Contact him via MCI MAIL: DBATTERSON.
```
{% endraw %}

## 4DOS.TXT

{% raw %}
```
              4DOS, Ver. 2.21 - A PC-DOS/MS-DOS Command Processor
                         Copyright 1990 David Batterson


     Most PC users have opted not to purchase OS/2, due to the expense.  But
many users are not satisfied with plain vanilla DOS either.
     So a few software companies have introduced enhancements, generally called
DOS extenders, which add new features and commands to PC- and MS-DOS (see my
review of DR DOS elsewhere in PC REVIEWS).
     4DOS, a recent shareware software product, is another DOS extender.  It
replaces COMMAND.COM, the command interpreter used by PC- and MS-DOS.  4DOS has
already been updated to Version 2.21 by its author, Rex Conn.
     Although 4DOS is a DOS shell, it is not the same as other DOS shells, such
as Marshall Magee's Automenu.  It's NOT designed to eliminate the DOS command
line, but rather to give the user superior DOS commands.  In other words, if
you are seeking a menu program which gets you away from DOS, this isn't it!
     If you're worried about RAM hogging, 4DOS uses less than 5K for the
resident portion; the transient portion can use EMS memory or disk swapping.
     For those who like online help, 4DOS has it:  for all the MS-DOS external
commands as well as the 4DOS internal commands.  Just press <F1> at the DOS
prompt.
     There's command line editing too, including insert and delete, so you
don't have to rekey whole lines when you make a mistake.  4DOS includes command
history, which means you can view, search, modify and re-execute previous
commands.
    You can enter file descriptions, up to 40 characters, for any file or
directory.  Whenever you use the DIR or SELECT command, the descriptions are
displayed.
     There are many more features in 4DOS, including flexible file wildcards,
multiple commands on a single line, environment variables, conditional
commands, more redirection options, and aliases (which let you rename and
reconfigure commands).
     The DIR command in 4DOS offers many options: 1, 2 or 5 column display;
sorting by name, extension, size or date; display subdirectories; display file
attributes, and display subtotals only.
     With 4DOS you can RENAME directories as well as files.  SELECT uses point-
and-shoot selection to perform a command on selected files.  LIST displays
ASCII text files, with scrolling, search for text, and printing.  EXCEPT
executes a command except on the specified files.
     These brief explanations only begin to reveal all the power and
intricacies of 4DOS.  This is a program for power users too, with an enhanced
batch processor that is more versatile, and faster too.
     4DOS is compatible with PC- and MS-DOS 2.0 through 4.01, DESQview, Novell
Netware, 3Com 3Plus, InvisibleNet, and the Word Perfect Library.  The shareware
version of 4DOS may be downloaded from CompuServe and many BBSs, or obtained
from shareware distribution companies.
     The company offers easy access to tech support via CompuServe's IBMSYS,
CONSULT and PCMagNet UTILFORUM areas, on the PC Relay and InterLink BBS
networks, and on Boston's Future Technology BBS, in addition to e-mail on
CompuServe and BIX.  Bravo!
     The commercial version, including manual and next update free, costs $50
($35 with no free update).  For more information, contact J.P. Software, P.O.
Box 1470, E. Arlington, MA  02174; 617-646-3975, CompuServe: 73577,243,
BIX: trawson.
                                       #
     David Batterson reviews numerous PC software applications.  Contact him
via MCI Mail: DBATTERSON.
```
{% endraw %}

## ABOVEBD.TXT

{% raw %}
```
                      Intel's Above Board Plus, With 2MB
                        Copyright 1990 David Batterson
 
     When you move to a larger home or apartment (as I did recently), one has
little trouble making use of the extra space.  It's the same with PC memory.
     The original IBM PC had 64K, later boosted to a whopping 128K!  Even
though typical AT clones now come with 640K, that is not enough for many
applications.
     My 286 has 1MB RAM, with 384 reserved (as an option) for Shadow RAM.  The
Shadow RAM feature lets you execute system and video BIOS through RAM,
increasing performance.  This leaves me with only 640K.
     If you use high-end CAD, graphics or DTP programs, you already know that
they require more RAM.  Publisher's Paintbrush, Ventura Publisher and
PageMaker, for instance, can't be used without added memory.
     One of the easiest (though not inexpensive) ways to add memory is with
Intel's memory boards.  The one we reviewed is the Above Board Plus (model
PCMB4525), with 2MB.
     There are many PC users who've never even popped open the case to look
inside.  Not to worry if you haven't, because Intel provides an excellent
installation guide for the Above Board Plus.
     The Above Board Plus provides three kinds of memory:  conventional,
expanded and extended.  The board comes with instructions and software which
help you decide how to allocate the extra memory.
     If your system has only 512K, you definitely need to use 128K to bring
your conventional RAM up to 640K.  Extended memory isn't used for most DOS
applications (Framework II/III and AutoCAD can use it).  It's used mainly for
OS/2, XENIX, VDISK RAM disk software & similar uses.  Nor can 8088 PCs use
extended memory.
     Programs that support Lotus/Intel/Microsoft Expanded Memory Specification
(LIM EMS) use expanded memory.  You cannot use EMS with OS/2 or XENIX.
     The board installation is performed in logical steps, and you should
experience no difficulty if you follow the instructions to the letter.
     Unlike most other add-on boards, you don't have to bother with DIP
switches.  Instead, the hardware settings are done by the software program
called SETBOARD.
     SETBOARD works automatically, unless your system runs at 10MHz or higher
(which ATs do).  In those cases, you must use the "manual setup."  I had no
problems with it.
     Next you must run your own computer's setup program if you will be adding
conventional or extended memory.  I skipped this step, as I didn't require
either one.
     The next step is optional, but highly recommended.  That's the TESTAB
program, which does a diagnostic check on the board's RAM chips.
     Now it's time to run the INSTALL program.  Among other things, this easy-
to-use software alters your AUTOEXEC.BAT and CONFIG.SYS files automatically.
It sets up EMS memory, and lets you add one or more RAM disks and a print
buffer if you want them.
     Another optional program to run is CHKMEM; it tells you the size of
conventional, extended and expanded memory in use, and how much available.
     After the installation procedure was completed, I tested the Above Board
Plus with several applications, including PC Paintbrush IV Plus, Professional
Write 2.1, Freedom of Press 2.2, and PC TOOLS DELUXE 5.5.  It worked flawlessly
with each.
     The Above Board Plus comes with a five-year warranty.  DRAMs are still
experiencing price volatility, so memory board prices change accordingly.  As
of this writing (March '90), the suggested list for the PCMB4525 is $995.
Check with discount mail order firms for the current best street price.
     For more information, contact Intel PCEO, 5200 N.E. Elam Young Parkway,
Hillsboro, OR  97124; 800-538-3373; or 503-629-7576 for FaxBack service.
                                       #
     David W. Batterson would like a memory board for his brain too.  Send
comments via MCI Mail: DBATTERSON.
```
{% endraw %}

## ARTLINE.TXT

{% raw %}
```
                     GEM Artline - PC Publication Graphics
                         Copyright 1990 David Batterson

     I recently spent many hours playing around with GEM Artline, the
professional illustration program from Digital Research Inc (DRI).  If you
haven't tried it yet, I think you're going to like it.
     Yes, I know what you're thinking:  is it as good as Corel Draw, which gets
rave reviews?  Well, the publisher of Corel Draw refused to send me a review
copy, so I'm unable to make a comparison.  DRI was happy to let me evaluate GEM
Artline (I also reviewed their DR DOS and 1st Word Plus for PC REVIEWS).
     GEM Artline is not a DTP program, and is not considered a full-featured
DRAW program like its companion program, GEM Draw Plus.  GEM Artline is meant
more for producing headlines, illustrations, "designer-quality" logos,
letterheads and special effects (stretched or twisted text, unusual shapes and
so forth).
     Like all draw programs (as opposed to "paint" programs), GEM Artline is
an object-based illustrator.  Images you create can be enlarged or reduced with
no loss in resolution; you don't get the "jaggies" found in bitmapped images.
A bonus is that these files take a fraction of the storage space on your hard
drive, compared to .IMG, .TIF and .PCX graphics files.
     GEM Artline can import .IMG, .TIF and .PCX formats (only if you have
expanded memory), allowing you to trace them.  By doing so, you can convert
that image to the .GEM format and preserve image quality.  I wasn't able to
test that procedure, however.
     You can either do freehand drawings, or import scanned images.  Both
drawings and text can be scaled, merged, colored, rotated, shadowed and
mirrored.  There's a nice library of symbols which can be enlarged and
manipulated.  You can create and save new symbols too.
     It comes with Nimbus Roman and Nimbus Sans (like Dutch and Swiss)
typefaces.  The supplied Bitstream Fontware installation kit, which includes
the Charter typeface, generates font/width files that are Ventura-compatible.
     Text can be entered in sizes of 1 to 999 points, and can be rotated at any
angle from 1 to 360 degrees.  You can also alter individual letters, words or
whole sentences easily.
     Ever want to put text in a circle?  This is a snap with GEM Artline.  It's
also easy to modify the circle so that the text appears to be flattened out,
giving it a 3-D look.
     GEM Artline is, as you would expect, very compatible with Xerox Ventura
Publisher because both run under GEM.  It can also save illustrations in
encapsulated PostScript format (.EPS) for use in Aldus PageMaker and similar
programs.  It is also Windows-friendly.
     Printing to PostScript printers is VERY fast, since it uses a "print
direct to PostScript facility" to accomplish this.  In technical terms, it
"represents all illustrations and text in terms of bezier curves which are
highly optimized for performance in PostScript printers."
     GEM Artline creations not only print well on color printers, but also work
with PostScript compatible color photo-typesetters through standard 4-color
(CMYK) or spot color separations.  Or you can send your files to service
bureaus for 4000-line resolution color slides.
     Gray scales are fully supported, and can be set in lines per inch for
PostScript photo-typesetters.  However, you don't need a PostScript printer for
excellent output from GEM Artline.
     Requirements are 640K RAM, EGA or better monitor/card, hard disk, mouse
or graphic sketchpad, and 512K minimum EMS or EEMS for image tracing.  All
popular printers/output devices are supported.  Suggested list price: $495.
     For more information, contact Digital Research Inc., Box DRI, Monterey, CA
 93942; 408-649-3896, FAX: 408-649-0750.
                                       #
     David Batterson reviews graphics and other PC applications.  Contact him
via MCI Mail: 273-7218, or Internet: dbatterson@mcimail.com.
```
{% endraw %}

## BACKLOAD.TXT

{% raw %}
```
                     BackLoader 2 - Automatic Font Handler
                         Copyright 1990 David Batterson

     Since more and more people use laser printers, they soon find themselves
downloading fonts to their HP LaserJet/DeskJet (and compatibles).  This can be
a tedious task, and many users don't like doing it at all.
     There are some public domain and shareware programs which help out.  Now
there's a sophisticated commercial program to do the job for you.
     It's called BackLoader 2.  This is an update to BackLoader 1, released
back in October '88.  BackLoader 2 has also been updated, since its original
release in June '89.
     BackLoader 2 is a memory-resident program which manages hundreds of fonts
and downloads them to your printer as needed.  It does away with manual
downloading, and thus speeds up your document printing.  The download speed is
a zippy 25,000 to 50,000 bps.
     By the way, the software publisher is no slouch when it comes to word
processing and font handling.  The company is called ROXXOLID [pronounced "rock
solid"], and was founded by the principal author of WordStar 4 and 5.
     BackLoader 2 is designed both for PC novices and experts.  That is, it'll
work just fine after doing the General configuration.  As newcomers gain more
experience, they'll want to run the Advanced configuration.
     The program works with WordPerfect, WordStar, Microsoft Word, MultiMate,
Ventura Publisher, Aldus PageMaker, Borland Sprint, PFS:First Publisher,
XyWrite, Q&A Write, and most other word processing and DTP software.  It works
with most soft fonts, including Bitstream, Conographic, HP, SoftCraft,
MicroLogic, and many others.
     You may also use it with "laser-dumb" applications like Lotus 1-2-3 or
dBASE, by inserting two-character Control Tags.  These are converted to printer
instructions by BackLoader 2, letting you use any fonts you want.
     BackLoader 2 also has the ability to observe your software application's
printing, and recall what fonts have already been downloaded to your printer.
So if there's a font change, it won't be downloaded again if it's already
resident.
     After running BKL.COM (or the small-memory version, SBKL.COM), the opening
screen displays useful information, such as printer type, port, hot key, memory
usage, number of soft fonts on your hard disk, and so forth.
     Pressing <Alt>B displays the pop-up screen, where you'll see all your
fonts described, as well as total fonts and printer memory.  There are also
markers in the left border.  These markers indicate the status, such as
"currently loaded in the printer," or "font that's downloading now."
     The small-memory version of BackLoader saves memory, but should also be
used with graphics-based applications like Ventura and PageMaker.  That's
because BackLoader 2 cannot display the pop-up screen with these.
     BackLoader 2 requires 384K RAM minimum, with 32K used while it is
resident, a hard disk, and DOS 2.0 or higher.  Just remember to change your
AUTOEXEC.BAT file if it contains any commands for downloading.
     You must also indicate in your word processing/DTP software that you DON'T
want fonts downloaded.  For instance, in PFS:First Publisher, when it asks if
you want to download fonts, you answer "N" since it's now being handled
transparently by BackLoader 2.
     NOTE:  BackLoader 2 is not effective with programs such as Publish It! or
Finesse.  ROXXOLID's tech support person indicated that these two GEM-based
applications don't download fonts, but instead create proprietary bit-mapped
fonts (which are in graphics mode).
     The suggested list price is $89.  You may buy it from a dealer or direct
from ROXXOLID Corporation, 3345 Vincent Road, Pleasant Hill, CA 94523-4318;
800-336-7699, 415-256-0105, FAX: 415-256-9053.
                                       #
     David Batterson does lots of writing and laser printing.  Contact him via
MCI Mail: 273-7218.
```
{% endraw %}

## BROWSE.TXT

{% raw %}
```
             PC-Browse Ver. 1.00 - The file scan and hypertext tool
                         Copyright 1989 David Batterson


     Hypertext is one of those "old" ideas that suddenly became new and
fashionable, thanks in part to the success of Apple Computer's HyperCard.  Ted
Nelson is credited with the concept of hypertext.  He wrote about it long
before the Mac was even a blip in Steve Job's bloated ego.
     As of this writing I am still waiting to receive one of the commercial
hypertext programs to evaluate.  Since I didn't have one, I broke my rule of
not reviewing shareware programs in PC REVIEWS.  PC-Browse is shareware, but
well worth a review.
     First a word about shareware.  Programmer Bob Wallace coined the word
shareware when he introduced PC-Write in 1983.  His company, Quicksoft, is
reportedly the second largest of all shareware companies.
     Shareware has changed over the years.  The original and popular Procomm
communications software is still distributed by shareware companies and on
BBSs.  But Procomm Plus is now a commercial product (the same thing with Red
Ryder on the Mac side).
     Wallace's PC-Write remains shareware, but he now publishes a stylish
catalog in which you can buy the registered version of PC-Write, along with
many commercial programs related to writing.  PC-Write now has more than 45,000
registered users.
     Along with making a nice living through shareware, Wallace has an
admirable philosophy which I agree with 1000 per cent!  Bob says that "writing
is the primary tool that advances civilization. . . to help people create
documents, helps the individual be creative, and furthers the evolution of
society."
     With the way that so many adult Americans write today, we need all the
help we can get to improve our communication skills through the written word.
In spite of this being the video generation, writing is just as important as
ever, and probably more so.
     That brings us back to our subject, PC-Browse, which Quicksoft calls "a
file scan and hypertext information tool."  So what does that mean?
     First of all, PC-Browse works like GOfer, searching for text strings and
lost files.  You can search by specific word, a phrase, or wild cards, and look
through multiple directories.  Then you can paste it into your application.
     A "Lookup" search finds a file within 1.1 seconds in a 2 MB file, using an
AT or compatible.  This is used, for instance, to search a large database for a
customer name.
     The use of the hypertext capability is limited only by your imagination.
To get your creative juices flowing, PC-Browse bundles some sample hypertext
applications.  They include a list of commonly misused words (like
affect/effect and it's/its), an area code file, a cross-referenced segment of
Hamlet, a decision tree, and others.
     Suggested hypertext uses include online help for a custom program,
genealogical searches, a library of page layout styles, famous quotations,
telemarketing scripts, or a menu to launch other programs.
     PC-Browse offers multiple windows, and a slew of parameters to set things
like text buffer size, screen attributes, EMS, hot keys, and so forth.
     The program runs either in TSR mode--it takes up 60K RAM--or as a
standalone program.  If you make use of LIM EMS, it uses only 3K.  The only
other requirements are DOS 2.0 or above and "creativity."
     You can order PC-Browse from shareware companies, or download it from a
BBS.  Or order the registered version, which includes the manual and tech
support, direct from Quicksoft for $49.  Quicksoft offers phone tech support,
as well as daily responses on CompuServe and BIX conferences.
     Contact Quicksoft, Inc., 219 First Ave. N., #224, Seattle, WA  98109; 800-
888-8088, 206-282-0452, FAX: 206-286-8802, MCI Mail: QUICKSOFT, CompuServe:
73247,257, BIX: pcwrite, TELEX: 6502755814 MCI UW.  (Now that's communicating,
Bob!)
                                       #
     David Batterson spends most of his computer hours writing and editing.
Contact him via MCI Mail: DBATTERSON.
```
{% endraw %}

## CAREER.TXT

{% raw %}
```
                 The Perfect Career - Career Counseling Program
                         Copyright 1989 David Batterson


     Choosing or changing a career is a hot topic these days.  It seems that
many of us are unhappy with our job, and are looking for that "greener grass"
on the other side of the street.
     The labor market has shifted dramatically.  The Bureau of Labor Statistics
indicates that "industries providing services will account for nearly 4 out of
5 jobs by the year 2000."  Service jobs are growing the fastest, while those in
manufacturing, mining and agriculture continue to decrease.
     The Perfect Career was created by James C. Gonyea, a specialist in the
area of educational and career guidance.  He has "personally counseled over
13,000 students and adults" in career planning and job placement.
     The program is set up for either high school/college students with little
or no work experience ("Interest Inventory"), or for adults with work
experience ("Interest/Ability Inventory").
     It also applies to other situations, such as women reentering the
workforce, mid-life career changers, dislocated workers, and senior citizens.
     The Perfect Career is easy to use, although I didn't like all the command
keys (more on that later).  The first step is to indicate your interest and/or
ability in 12 general career fields, rating from 4 (highest) to 1 (lowest).
     Next you answer 180 questions related to a wide variety of job functions,
on a scale of 3 down to 1.  Again, you indicate both interest and/or ability.
Your answers are then analyzed, to see what you should be doing for a living.
     After my own testing, The Perfect Career suggested a number of career
choices, including writer, editor, artist, critic and computer operator!  No
surprises there, as I've done them all.
     There are colorful bar charts to show your strengths and weaknesses.  The
manual also includes printed forms to help with followup action.
     Now about those software commands.  When moving between screen pages,
you'd expect to use <PageDown> and <PageUp>.  But with this program, you "PRESS
F TO MOVE FORWARD."  Likewise you use "B" to go back.  It's kind of awkward.
     Another inappropriate command involves the cursor keys.  You have to use
the DOWN arrow to move ACROSS the two columns where you indicate your numbered
choices.  It should be the RIGHT arrow key instead.  It's not intuitive!
     The bottom of the screen contains the instruction line.  It's red letters
on black; too dark, and not a good color choice to draw your attention.  Also,
When you are selecting numbers from a menu, it would be quicker if there were a
cursor bar to move--selected with <Enter>--rather than typing a number.
     Some displayed commands, like <Enter>, properly use the angle brackets.
But <Esc> is indicated as Esc.  There needs to be more consistency.  If a
program doesn't use common commands, it becomes a chore to use.
     It's unfortunate when software publishers pay more attention to content
than the program's user interface.  Both parts are equally important.
     There's a technical error in the manual.  It says to make a backup copy,
and then "boot the program."  Unless you have created a bootable backup disk--
using FORMAT A:/s to copy the operating system files to the disk--that's an
incorrect term.  You just run the program; you don't "boot" it!
     The Perfect Career is useful, but won't take the place of a professional
career counselor, as Gonyea admits.  Use it first, then take the results of
your testing to a career specialist; it'll save time.
     The program requires 256K, and CGA, EGA or Hercules graphics; suggested
list price is $39.95.  For more information, contact Mindscape, Inc.., 19808
Nordhoff Pl., Chatsworth, CA  91311; 818-885-9000, FAX: 818-772-6809.
                                       #
     David Batterson writes articles and reviews on PC hardware and software.
Contact him via MCI Mail: DBATTERSON
```
{% endraw %}

## CERTMAKR.TXT

{% raw %}
```
                    Certificate Maker - Personalized Awards
                         Copyright 1990 David Batterson

     It's fun sometimes to look at low-end programs that are designed to do a
simple task.  Such a program is Springboard Software's Certificate Maker, now
distributed by Spinnaker.
     Certificate Maker lets you make quick, personalized awards for offices,
schools or organizations.  You can use it also for funny birthday cards, gag
gifts at a party, or for family celebrations.
     The program comes with 220 templates, for most any occasion or type of
recognition you wish to make.  Examples include writing proficiency,
mathematics award, scholastic achievement, various sports awards, best mom,
religious certificates, licenses, congratulations, and certificates of
excellence and honor.
     Making certificates couldn't be any easier.  You select a template, border
and type style, then enter the body text, date and signature block.  The 24
borders are very decorative, and include such styles as Persian, weave,
African, snake, legal, art nouveau, maze and spiral.
     The number of font choices is limited to five:  serif, sans serif, script,
gothic and art deco.  Additional borders and fonts are available as an option.
     One useful feature is the *name* file.  This allows you to create lists of
names that are used to print multiple copies of the same certificate.  You can
select all the names in a list, or specify only the ones you want.
     The program comes with a supply of gold foil and colored stickers, with
various sayings--some serious and some funny.  You can put a couple of ribbon
strips under the sticker to dress your certificate up even more.
     I think Certificate Maker could be used a lot by businesses that want to
motivate and recognize their employees.  Studies have shown that certificates
of appreciation make a very favorable impression.
     In testing Certificate Maker, I created a certificate of recognition.
Then I took it to a copy shop, and made a copy on parchment paper.  This made
it look much more professional than using regular printer paper.
     I also recommend you frame the certificates, especially those you present
at the office.  The recipient is more likely to display it on the wall.
     Certificate Maker requires only DOS 2.1 or higher, 256K RAM, CGA or better
monitor, and printer.  The list price is $39.95 but most dealers will charge
less for it.
     For more information, contact Spinnaker Software, 201 Broadway, 6th Floor,
Cambridge, MA  02139-1901; 617-494-1200, 800-826-0706 (orders).
                                       #
     David Batterson reviews various PC software and hardware.  Send any
comments via MCI Mail: 273-7218.
```
{% endraw %}

## COMPLETE.TXT

{% raw %}
```
             The Complete Communicator - Fax, Voice Mail and Modem
                       Copyright 1989 David W. Batterson

     Fax boards and computerized voice mail have been around for awhile, but
they weren't cheap enough for the average user until recently.
     The Complete Communicator is an integrated fax/voice mail/modem board, and
it all works on one phone line.
     You can send or receive Group III faxes, download/upload files or access
online services via the 2,400-bps modem, create customized greetings for
different callers, receive phone messages, and even deliver voice messages to
other phones automatically.
     The Complete Communicator requires at least 640K RAM (expanded memory
highly recommended), hard disk with at least 4 MB available, Hercules/CGA/EGA
or VGA card and monitor, and a printer (preferably laser).  Useful options are
the hand scanners from The Complete PC or full-page scanners, and a speaker
(Radio Shack Mini Amplifier-Speaker is recommended).
     Installation of the board is not too difficult.  Be careful to set DIP
switches exactly, or you'll have problems.  These switch settings configure the
board's I/O address, the modem's COM port, and the IRQ (interrupt) for the
scanner or COM port.
     Plug in the phone line and phone, along with scanner and speaker if you
have them.  Pop in disk #1, and type A: INSTALLC.  And away we go!
     You then set Hardware, PC, Print and Mailbox configurations, input phone
system information (default values should be OK), set hot keys, and the like.
Once you use the program awhile, you'll probably need to run INSTALLC again and
do some fine-tuning--I did.
     For instance, the default hot key for Send/Receive--<Alt> F--may conflict
with your word processor.  Change it to another combination--using left or
right <Shift>, <Alt> or <Ctrl> along with any letter, number or function key.
     You might also want to change printers, mailbox ID length, or allow/delete
password protection for PC access.  (A password is ALWAYS required for access
to your mailbox from a phone.)
     The Complete Communicator's software runs in background (TSR mode) and in
foreground mode.  Faxes and voice messages are sent/received in the background,
while you're running other software, or out having lunch.
     To access the menus, and perform fax, modem and voice mail functions, you
must run the foreground program, CCOM.  (NOTE: CCOM won't run as a standalone
program; the background program CCBACK must always be loaded first.)
     All commands are menu-driven, using either the cursor bar or function
keys, whichever you prefer.  There is context-sensitive help anytime via <F1>.
     The main menus consist of: The Complete Answering Machine, The Complete
Fax, SmartScan, BITCOM, Phone Book, System Configuration, and System Status.
Each has several sub-menus too.
     There's a lot to learn and master before getting The Complete Communicator
to do just what you want.  Once you have the parameters set, you'll see how
efficient it can be for sending/receiving faxes.  Cover sheets are generated
automatically too, if you select this option.
     One of the most useful features is being able to send a fax from your word
processor, like you do with Intel's Connection CoProcessor.  You first set your
word processor to print to the Epson FX.
     After preparing a document, you access the pop-up window, enter a few
lines of information, then return to your word processor and "print" it.  The
data is captured, converted to fax format, and transmitted.
     The Answering Machine can also SEND messages to any phone number(s) you
select.  Messages left for you can be forward to another phone.  Or you could
broadcast a series of messages to a recipient list, just like you can do with
faxes.
     The Complete Communicator can be set to answer automatically for either
fax, modem or voice.  Callers receive different voice greetings for each, and
they may switch to the other two by using a mailbox ID.  The manual isn't very
clear in explaining this function, however.
     Another shortcoming in the manual was the poor explanation of how to add a
graphics logo (from a graphics program or scanned) to the cover sheet template.
There's NO indication of what size or shape to make your logo.  I wasn't
successful performing this function, so used the default text heading instead.
     The 2,400 baud modem comes with Bitcom software, but you may specify to
use your own communications software, during installation.  Bitcom was easy
enough to use, but it's not the greatest!
     If you use your fax and answering machine as much as you do your PC, The
Complete Communicator may be just what you're looking for.  The suggested list
price is $899.
     For more information, contact The Complete PC, 1983 Concourse Drive, San
Jose, CA 95131; 408-434-0145, FAX: 408-434-1048
                                       #
     David Batterson communicates a lot via modem, fax and voice.  Send your
comments via MCI Mail: DBATTERSON.
```
{% endraw %}

## CONVERT.TXT

{% raw %}
```
                     Graphics Transformer - Revision 1.10B
                       Copyright 1989 David W.  Batterson

     IMSI (International Microcomputer Software, Inc.) has the easy solution
to graphics file compatibility hassles with its conversion utility program
called Graphics Transformer.
     Graphics Transformer provides control over the plethora of pix that many
of us use.  IMSI has updated Graphics Transformer considerably over its
predecessor, Reflection.
     Following is the rundown on formats supported now:

        Type of File             Direction               Extension
        ~~~~~~~~~~~~             ~~~~~~~~~               ~~~~~~~~~
     Amiga                          S/D                    .IFF
     CCITT Group III Fax            S/D                    .FAX
     Complete PC Fax                S/D                    .CPF
     Compressed TIFF                S/D                    .CTF
     CompuServe                     S/D                    .GIF
     Dr.HALO                        S/D                    .CUT
     GEM Paint                      S/D                    .IMG
     HP LaserJet                    S/D                    .PCL/.HPC
     HP Plotter *                   S/D                    .PGL
     InSet/Graphics Transformer     S/D                    .PIX
     Intel Fax                      S/D                    .MCX
     JetFAX/EFax Mgr./Fax Mgr.      S/D                    .XFX
     JT Fax                         S/D                    .JTF
     Lotus 1-2-3 *                  S/D                    .PIC
     Lotus Freelance                S/D                    .PIC/.PCL/.PGL
     MacPaint                       S/D                    .MAC
     Microsoft Paint                S/D                    .MSP
     NewsMaster                     S/D                    .SHP
     PC Paintbrush                  S/D                    .PCX
     PostScript                      D                     .EPS/PSC
     PrintMaster                    S/D                    .PM
     Ricoh Fax                      S/D                    .RIC
     Scanner TIFF                   S/D                    .TIF
     Teli Fax                       S/D                    .MH
     Text                           S/D                    .TXT
     WordPerfect                    S/D                    .WPG

[ S = source file, D = destination file.  NOTE:  * indicates that destination
files can be created ONLY if source file is .PIC or .PCL.  You can convert only
TO a PostScript (.EPS or .PSC) file, not FROM, since it is an ASCII file.  The
extensions used are the DEFAULT name; you can convert a file with a different
extension, such as READ.ME for a text file. ]

     If you don't see your paint or DTP program, don't fret.  Look for the file
extension your software uses.  For example, Ventura Publisher uses .IMG and
.PCX files.  WordPerfect 5.0 will accept .TIF and .PCX formats.  PFS: First
Publisher uses .MAC/.PCX, while PageMaker supports .PCX and .TIF.
     The left side of the menu is for your source file and the right for
destination file.  You don't even have to enter most types.  Just press the
spacebar and a list of file formats is displayed below.  Scroll through and
select your choice.
     The extension names are entered automatically, or you can change them if
necessary.  Change path, and options such as resolution, width and invert
next.  When you're ready, pressing <F10> starts the conversion.
     The text conversion has a useful feature.  If you are converting FROM a
text file, you have a choice of fonts that will be used for your graphics file.
These include ASCII, Computer, Helvetica and Roman.  Be careful that your
source file contains only ASCII keyboard characters; "high-bit" characters will
not convert.
     You can also convert TO a text file.  However, you must first save any
text screen by using Graphics Transformer's "Capture" utility.  Then the
resulting .TXT file can be used in your word processing program or text editor.
     When converting text to PostScript, the program uses a downloadable high-
resolution PostScript outline font.
     The Capture program captures graphic screens, and saves them to disk in
the .PIX format.  These can then be converted to your choice of formats.  You
can also do a printer capture, so that the data normally sent to a LaserJet
printer is saved to disk (in .PCL or .PGL format).
     Another useful feature of Graphics Transformer is the ability to run
directly from DOS.  This allows you to set up batch files to automate the
conversion of multiple files.  Several examples of useful batch files are
provided; these can be real timesavers.  Modify them to suit your own needs.
     I tested a vector-to-vector graphics conversion, and it worked fine.  I
printed a DesignCad file to disk in the .PCL format.  Then I converted it to
PostScript (.EPS), and printed it on a PostScript-compatible printer.
     Raster-graphics conversions, such as .MSP to .MAC are fast.  When
converting to PostScript, or to/from HP LaserJet .PCL files, it can take quite
a while, as you are dealing with a lot of data.
     While Graphics Transformer won't save a bad marriage, it will solve
"irreconcilable differences" between battling graphics programs!  I use it
regularly, and can recommend it highly.  It now offers support for VGA/MCGA,
along with Wyse 700 and Genius graphics cards.
     Check with your favorite software dealer, or contact IMSI, 1299 Fourth
St., San Rafael, CA 94901; 415-454-7101, 800-222-4723, FAX: 415-454-8901.
                                       #
     David Batterson writes about various microcomputer applications including
graphics and desktop publishing.  Contact him via MCI MAIL: DBATTERSON.
```
{% endraw %}

## COPROCSR.TXT

{% raw %}
```
                            Connection CoProcessor
                        Copyright 1990 David Batterson

     The Connection CoProcessor was the first product to support the DCA/Intel
Communicating Applications Specification (CAS).
     The CAS standard provides the means of sending e-mail, binary files and
faxes directly from word processing, database, spreadsheet or other software.
It eliminates the need to stop and load a separate program.
     CAS was introduced into the public domain to get software developers to
add the interface to their programs.  Those programs supporting CAS include
WordPerfect 5.0, Ventura Publisher, Lotus 1-2-3, GEM applications, Q&A 3.0,
Freedom of Press, Higgins TO:FAX 1.0, FAXit for Windows and many others.
     With the CAS interface, you use a command or menu selection to start
communicating, similar to selecting Print.  You don't have to exit to
send/receive files or faxes, and you can continue working immediately after
the command is made.
     With CAS, you can send a Lotus graph directly to another user's PC, zip
off faxes to any Group III fax machine, send a database file to a mainframe,
and zap a memo via your local area network (LAN).
     The Connection CoProcessor lets you exchange any file--text, graphics and
binary data--with other Connection CoProcessor owners at 9600 bps.  Users can
also send faxes to (and receive from) any Group III fax machine.  You can
choose high or standard resolution for faxes.
     The board works with all IBM compatibles, including the PS/2 series.  It
has its own 10MHz 80188 microprocessor and 256K of memory.  This lets it work
in the background, independently from the PC's microprocessor.
     It works with all scanners that save files in the .PCX format.  These
include the HP ScanJet, Canon IX-12, MicroTek M5300A and Datacopy 220/230.  It
also supports more than 50 dot matrix and laser printers.
     The Connection CoProcessor's software (CONNECT) is easy to use, with
well-designed menus.  There's a phone book, containing up to 999 distribution
lists with 999 names in each one.  The activity Log keeps track of things.
     CONNECT requires 640K RAM (with minimum 480K free), a hard disk, and a
CGA/EGA/VGA or Hercules graphics card.  A mouse is recommended.
     You can make logos and other graphics with the bundled PC Paintbrush, and
edit graphics files that you receive.
     Senders can broadcast the same file(s) to a large number of recipients.
Transmissions can be delayed to any time and date you wish.  You can include a
custom made cover sheet with logo, or no cover.  When you send without a
cover, it still indicates who it's coming from, and a time/date stamp.
     In the Status section you watch a call going through (or cancelled if it
doesn't go through.)  It reports the time it was sent, length of transmission
and any errors encountered.
     Transmissions that are aborted or fail to go through may be sent again
easily by using the Retry command.
     The optional 2400 bps internal modem pops into a handy piggyback site on
the board.  The Connection CoProcessor and modem share the same phone line,
with calls routed to the right place automatically.
     The advantages of using a fax board are convenience and image quality.
Most fax machines (except expensive ones) use thermal paper.  Faxes sent
directly to your PC can be printed on a laser printer for higher quality.
     Suggested list price of the Connection CoProcessor is $695; the optional
2400B Piggyback Modem is $195.  Those who buy a Connection CoProcessor by June
30, 1990, can get FAXit for Windows for $19.95 (list price $179.95).
     The CAS program, Send Off!, is now bundled with the board.  This program,
used with Lotus 1-2-3, has a list price of $50.
     For more information, contact Intel PCEO, Mail Stop C03-7, 5200 N.E.
Elam Young Parkway, Hillsboro, OR 97124-6497; 800-538-3373; 503-629-7354; to
receive product information via fax, call FaxBack: 503-629-7576 (voice).
                                       #
     David Batterson is an independent computer writer who lives in Sausalito,
CA.  Contact him via MCI MAIL: DBATTERSON.
```
{% endraw %}

## CRYSPUB.TXT

{% raw %}
```
          CrystalPrint Publisher - PostScript-compatible page printer
                         Copyright 1989 David Batterson


     Although Apple Computer continues to dominate the PostScript laser printer
market with its LaserWriter Plus, IINT and IINTX models, several printer
companies are going after a chunk of this growing business.
     Qume Corporation has done an superb job in creating a laser-class printer
which matches the LaserWriter IINTX not only in printing speed, but output
quality.  This was verified by extensive independent tests conducted by
Infonetics, Inc. of Santa Clara, and published in "The Infonetics Analyst."
     [Since this printer uses Liquid Crystal Shutter technology rather than a
laser, it is technically a laser-CLASS printer, not a laser printer.  This
makes no difference to the end user, however, as it works virtually the same.]
     The CrystalPrint Publisher was found to be considerably faster than the
IINT, and in some cases (desktop presentation and graphics) outperformed the
IINTX configured with a hard drive.
     Infonetics also reported that the "CrystalPrint Publisher's font metrics
were quite good in all instances and compatible with LaserWriter IINT output in
every tested file, including a number of quite demanding applications in the
page composition and graphic arts document categories."
     My evaluation didn't take place in an expensive testing lab, running
benchmark tests.  I simply used the CrystalPrint Publisher in the real world
situation, printing hundreds of pages of word processing, presentation
graphics, desktop publishing and paint program files.
     The only glitch I encountered was while printing some graphs and charts
created with Pinstripe Presenter.  In text charts, the "bullets" did not line
up with the text.  Likewise, in the legend for graphs, the little boxes didn't
line up with the graph titles.
     I can only conclude that the problem is with the Pinstripe Presenter
PostScript printer driver, as I had no problems using the program previously
with a dot matrix printer.  I also experienced no similar problem with any
other software while using the CrystalPrint Publisher.
     So how does this printer do its magic?  First of all, it uses the WEITEK
XL-8200 HyperScript-Processor, a 32-bit RISC raster image processor designed
especially for page printers.  There's also 3 megabytes of RAM, and 1.5 MB ROM.
The CrystalPrint Publisher uses the Casio LCS-130 marking engine.
     For most uses, the output from the CrystalPrint Publisher will be
perfectly acceptable for your document printing needs.  For those situations
where you need true typeset quality, use this printer for proof copies.  Then
use a service bureau to obtain PostScript typesetting, like the Linotronic 300
provides.
     The CrystalPrint Publisher comes standard with parallel, serial and
AppleTalk interfaces.  It will accept letter, legal, and DIN A4 or B5 paper
sizes.  The input bin holds 100 sheets.  Resolution is the standard 300 dpi.
It also prints transparencies (I tested the Polaroid 1076 brand).
     The drum unit was originally believed to handle only 10,000 pages.  The
printer was engineered so that it wouldn't print past 10,000, without replacing
the drum.  Later tests concluded that the drum would print 20,000 pages before
needing replacement.  The disabling mechanism has been eliminated from the
printer, and you now use your own judgement as to when the drum needs
replacing.
     You get the same eleven font families as the LaserWriter IINT, but there's
a total of 39 rather than 35 typefaces.  Fonts include Bitstream Dutch,
Bitstream Swiss, Courier, Symbol, ITC Avant Garde Gothic, ITC Bookman, New
Century Schoolbook, Bitstream Swiss Narrow, Zapf Calligraphic, ITC Zapf
Chancery, and ITC Zapf Dingbats.
     The four new fonts (added through a firmware enhancement) are Swiss Light,
Swiss Oblique, Swiss Black and Swiss Black Oblique.  These are Helvetica
typefaces equivalent to Adobe Helvetica soft fonts.
     The firmware enhancement provided the printer with enhanced font caching,
to improve printing speed even more.  Also, the CrystalPrint Publisher can now
make better use of Bitstream PostScript-compatible soft fonts.
     Owners of the earlier models can take advantage of a "return-to-depot"
upgrade, paying only shipping costs both ways.  On-site upgrades are available
for $125.  That's quite a bargain, and an example of fine customer service.
     Along with the overall performance of this printer, it has "the smallest
footprint in the page printer market" (15.7" wide x 13.4" deep x 9.1" high).
All in all, it adds up to an exceptional value.
     The CrystalPrint Publisher has a suggested list price of $4,499, much less
than Apple's IINTX.  (Why make Apple Computer any richer when you don't have
to?)  Replacement drum and toner sets retail for $129 and $99, respectively.
Check with your local Qume dealer, or contact Qume Corp., 500 Yosemite Drive,
Milpitas, CA  95035; 408-942-4000, FAX: 408-942-4052.
                                       #
      David Batterson does a lot of printing, and tests a lot of printers.
Send your comments via MCI Mail: DBATTERSON.
```
{% endraw %}

## DEMOII.TXT

{% raw %}
```
         Dan Bricklin's Demo II Program - A Topnotch Demonstration Tool
                       Copyright 1989 David W. Batterson

     For those who don't know who Dan Bricklin is, a brief biography is in
order.  In a recent article, top industry leaders were asked to name the most
influential people in the personal computing industry.
     Dan Bricklin's name came up the most.  He was the coauthor of VisiCalc,
the spreadsheet program which helped make Apple Computer a viable contender.
Before VisiCalc, the Apple II was still a toy for hobbyists and programmers. 
VisiCalc was an immediate hit, and had tremendous sales.  [It was reportedly
the first spreadsheet program for a personal computer, but Microsoft's Bill
Gates disputes this.]
     While at Digital Equipment Corp., Bricklin helped create DEC's first word
processing program.  He also worked at Prime Computer, Inc.
     While VisiCalc is still widely used by Apple owners, the company was later
involved with lawsuits, and is no longer a software player.  But Bricklin's
contributions have been major.
     Bricklin dropped out of the limelight after VisiCalc.  He started up a
small company called Software Garden, Inc.  This resulted in the popular and
critically acclaimed Dan Bricklin's Demo Program, awarded the Best Programming
Tool of 1986 by the Software Publishers Association.
     Dan Bricklin's Demo II Program is an update to that first slide show
program, which is used mainly by programmers to demonstrate prototypes, create
software demos, and to make onscreen tutorials.  It is not your usual
presentation program, where you show slides of charts and graphics pics.  It
can do that, but a lot MORE too.
     Perhaps as a visual joke about his old Apple days, Bricklin stuck a bright
red fat tomato on the manual's cover!  It's very appealing to the eye.
     Let's get this out in the open right away:  Dan Bricklin's Demo II Program
is NOT for the new user.  Unless you are already have some programming
background and are skilled in graphics presentations, I'd advise you to stay
away from it.  It's not for the fainthearted!
     For those who care about this sort of information, it contains more than
30,000 lines of C code (Microsoft C version 4.0).
     Even with the included tutorial and thorough manual, mastering Dan
Bricklin's Demo II Program takes a lot of effort.  It's one of the more complex
software products I've reviewed.  It's not easy to learn because:  (1) it has
very powerful features, and (2) Bricklin assumes you're already a power user.
     Dan Bricklin's Demo II Program has some 75 new features and changes.  It
comes with a function key template, to assist you with commands.  There's also
a help screen to remind you of function and editing keys.
     The program makes use of the popular .PCX picture format (used by PC
Paintbrush and other graphics programs).  It cannot create these images, but it
will use .PCX files you create with paint programs or have captured to disk.
It includes its own CAPTURE program to save bitmapped and text screens.
     If you need a power-packed program to produce outstanding slide shows (and
you're no slouch as a programmer), Dan Bricklin's Demo II Program will perform
wonders for you.  The suggested list price is $195.
     Contact Peter Norton Computing, Inc., 100 Wilshire Blvd., 9th Floor, Santa
Monica, CA  90401-1104; 800-365-1010, 213-453-2361; FAX: 213-453-6398.
                                       #
     David Batterson is an independent writer of computer articles, reviews and
commentary.  Contact him via MCI Mail: DBATTERSON.
```
{% endraw %}

## DIAGRAPH.TXT

{% raw %}
```
           Diagraph/2000 Ver. 4.1 (Charts and Presentation Graphics)
                         Copyright 1989 David Batterson


     I'm always on the lookout for good business graphics software to review.
It seems that corporate PC users can't get enough of these programs.
     Diagraph/2000 (Ver 4.1) isn't new, but I had not heard of it until
recently.  It is used primarily by engineers, industrial designers, architects
and draftsmen.
     Diagraph is not a paint program, like PC Paintbrush.  It's more like a CAD
program, such as DesignCAD.  Rather than design, you cut and paste, using the
outstanding collection of symbols and typefaces.
     The publisher of Diagraph, Computer Support Corporation, also makes the
more sophisticated Arts & Letters (Graphics Composer and Graphics Editor),
which comes in Microsoft Windows and OS/2 Presentation Manager versions.
     Diagraph is strictly DOS-based, and will appeal to those who don't have
or relish Windows (like myself).  It doesn't support a mouse, but instead uses
function keys for commands, and cursor keys for moving text and graphics.
     Believe it or not, there are many PC users who aren't crazy about mice.
These people should feel right at home with Diagraph.
     The manual itself is rather slim, but it does include a 10-lesson
tutorial.  There's plenty of onscreen, context-sensitive help too.  Diagraph
goes against the grain, however, by not using the normal <F1> key for help.  It
uses <F7> instead.
     There is a vast library  of over 2,200 symbols included with Diagraph.  At
least 3000 optional symbols are available now, with more being designed.  So
it's most likely you'll find about any symbol you need for your design.
     Symbols include:  Graphic Aids (like accents, boxes, arrows, stars, word
balloons, borders, and geometrics--both 2-D and 3-D), Signs and Icons
(including road signs, depictions of cars, transportation symbols, office and
industry icons, people and sports), Pictorials (generally larger, miscellaneous
artwork), and Applications (symbols for flowcharts, pie/bar/line charts,
networks and office layouts).
     Diagraph's typefaces consist of Hardware Character Set, Modern Medium,
Modern Bold, Simplex Roman, Duplex Roman, Complex Roman, Triplex Roman, Greek,
Simplex Script, Complex Script, Gothic English, Complex Italic, and Triplex
Italic.
     Note on typefaces: Hardware Character Set corresponds to the typeface used
by HP Plotters.  Modern Medium and Modern Bold are high-res, solid-filled
Helvetica equivalents.  The other 10 are Hershey typefaces, optimized for
speed of drawing with proportional spacing.  There are many more optional
typefaces, for just about any graphics need.
     Don't worry about not having enough shading patterns, either.  There are
about 250 of those, including low, medium and high density patterns, simulated
halftones, dither patterns, and raster patterns.
     Diagraph/2000 requires 512K RAM (640K recommended) and a graphics card;
hard disk and math coprocessor are highly recommended.  It supports most
graphics cards/monitors, including touchscreens like the HP Touch Accessory.
     Most printers and plotters will work fine, including HP LaserJets (and
compatibles).  PostScript printers are NOT supported; however, it does work
with film recorders, like the Polaroid Palette or HP Computer Image Recorder.
     Like other presentation software, you can send your finished files to a
service bureau via mail, courier or modem.  You get back high-quality, 35mm
slides, overhead transparencies, and color handouts in a jiffy!
     The suggested list price is $395.  For more information, contact Computer
Support Corporation, 15926 Midway Road, Dallas, TX  75244; 214-661-8960, FAX:
214-661-5429, or MCI Mail: 370-6103
                                       #
     David Batterson enjoys graphics programs almost as much as getting a check
in the mail!  Contact him via MCI Mail: DBATTERSON.
```
{% endraw %}

## DRDOS.TXT

{% raw %}
```
                                DR DOS Ver. 5.0
                        Copyright 1990 David Batterson

     Microsoft has been talking about its upcoming release of MS-DOS 5.0, not
expected until late '90.  In the meantime, Digital Research decided to jump
into that void by releasing DR DOS 5.0 in June.
     Maybe you've never heard of DR DOS.  Although the name DR DOS sounds like
a PC repairman, the name is pronounced DEE ARE DOS not DOCTOR DOS.
     The basic DOS commands are the same as MS-DOS/PC-DOS, but with many more
features and capabilities.  To use the extended part, you'll need to learn a
few new commands, and parameters for the usual commands (such as FORMAT).
     For instance, you type FORMAT A: /4/V to format a 360K disk in a 1.2 MB
drive, with volume label.  But DR DOS 5.0 has added a new option: FORMAT
/F:nnnn (nnnn stands for disk capacity).  Example:  FORMAT B: /F:720.
     DR DOS 5.0 is 100% compatible with the DOS 4.1 method of setting up disk
partitions; it supports disk partitions up to 512 MB.
     There is on-screen help for each utility, accessed with the /H switch.
Typing SORT/H displays the help lines, telling you that SORT is an ASCII sort
filer, and has the following usage:
          SORT [ /R ]  [ /+number ]
          /R     reverse sort order
          /+n    start sorting with column n (default is column 1)
     DR DOS 5.0 has a full screen text editor, unlike the shabby EDLIN program
found in PC-and MS-DOS.  The editor allows you to create ASCII text files, or
easily edit existing ones, such as your AUTOEXEC.BAT and CONFIG.SYS files.
     DR DOS 5.0 uses slightly less RAM than MS-DOS (72K vs. 75K).  However,
FASTOPEN and SHARE are loaded by default.  The DR DOS 5.0 kernel can be stored
in and executed from ROM, including Intel's FLASH EPROM.
     A new device driver, HIDOS.SYS, is used to load the DR DOS 5.0 kernel
into high memory.  This allows a 286 (with NEAT or LEAP chip set), 386 or i486
to retain 620K of conventional RAM.
     MODE lets you specify the display lines, e.g., MODE CON: LINES = 43.
Keyboard input speed and delay between keystrokes can be changed with MODE
CON: RATE = r DELAY = d.
     MEM is a very useful command.  It shows in both text and graphics display
just how all of your RAM and ROM are allocated.  HILOAD lets you load TSRs
into high memory.
     The TREE /G command displays a graphical depiction of the specified
subdirectory structure.  XDIR has multiple options to display directories and
subdirectories in various forms, such as sort by date or file size.
     ERAQ and DELQ (unlike the MS-DOS DEL command) always query you before
erasing a file.  Now that's handy!
     If you have a laptop, you'll appreciate the CURSOR command.  This creates
a large block cursor with a variable flash rate on VGA, EGA and CGA LCD
screens.
     Laptop owners will also make use of FileLINK, a file-transfer utility.
It lets you transfer files via standard serial cable at up to 115,200-bps.
FileLINK installs itself on the remote PC also.
     Do you want password protection for files and directories?--you've got it
with DR DOS 5.0.  There are three levels of password protection, selected by
the /R /W or /D switches.  Passwords are eight characters maximum.
     There's extended command line editing, using function keys, cursor keys
and <Ctrl> key combinations.  You can even move to previous commands too.
     An included DOS shell is the GUI (Graphical User Interface) called
ViewMAX.  It features the CUA (Common User Access) standard, and can be used
via keyboard or mouse.  You can choose icon, text or tree displays.
     DR DOS 5.0 is fully compatible with LANs, such as Novell Netware, 3COM
and Banyan VINES.  It also supports code page switching.  Installation of DR
DOS 5.0 isn't difficult, and no hard disk reformatting is needed.
     After installing and using DR DOS 5.0, I've deleted my old MS-DOS 3.31
from the hard drive.  I can't see how MS-DOS 5.0 will be able to surpass it,
and I recommend it without reservations.
     DR DOS 5.0 is sold directly to end users for $199; the upgrade from
earlier DR DOS versions is $70.  OEMs may purchase it at a reduced price.
     For more information, contact Digital Research Inc., Box DRI, 70 Garden
Court, Monterey, CA  93942; 800-443-4200, 408-649-3896, FAX: 408-649-0750.
                                       #
     David Batterson reviews various microcomputer applications.  Contact him
via MCI Mail: DBATTERSON.
```
{% endraw %}

## EPL6000.TXT

{% raw %}
```
                   Epson EPL-6000 (HP LaserJet II-compatible)
                         Copyright 1989 David Batterson


     As the leading printer manufacturer, Epson had a slow start in the laser
printer field.  I guess it's because they wanted to get it right, not just be
among the first to sell HP LaserJet clones.
     With so many companies now offering laser (and laser-class) printers, even
Hewlett-Packard is fighting back by offering a lower-priced model, with slower
speed and less features.
     Let's see what the new Epson EPL-6000 has to offer.  It's fully compatible
with the HP LaserJet II series, so any software supporting the HP will work
with the EPL-6000.
     It comes with 512K RAM onboard, with options for 2MB or 4MB upgrades (more
on that later).  The EPL-6000 supports HP-compatible soft fonts, and accepts HP
font cartridges.  Optional is the Epson FX Identity Cartridge.
     Printed output is at 300 x 300 dpi, at six pages per minute (for standard
letter-size paper).  The EPL-6000 uses the Motorola 68000 microprocessor,
running at 10 MHz.  Printouts can be delivered face-up or face-down.
     There are three interfaces: parallel, RS-232C (standard serial), and RS-
422A.  The size is very convenient:  8.3" high x 16.1" wide x 15.4" deep.  The
EPL-6000 weighs in at 36 pounds (including paper cassette, drum unit and toner
cartridge).
     The resident fonts consist of Courier 12 pt., Courier 12 pt. Bold, and
Line Printer 8.5 pt.  All are available in both portrait and landscape, adding
up to six fonts.
     The SPL-6000 will accept four standard sizes of paper: Letter (8½ x 11"),
Legal (8½ x 14"), A4 (8.3 x 11.7"), and Executive (7¼ x 10½").  Capacity of the
paper cassette is 150 sheets.
     Through manual feeding, you can use a minimum of 3.2 x 5" up to 8½ x 14"
paper sizes.  You may also print business envelopes and transparencies.
     The printer's "durability" is rated at 5 years or 300,000 sheets
(whichever comes first).  MPBF (Mean Prints Between Failures) is 30,000 sheets
per month, and MTBF (Mean Time Between Failures) is 3,000 hours.
     OK, on to the actual printing.  If you plan on using the RS-232C or RS-
422A ports, you'll have to reset the DIP switches.  There's easy access to the
DIP switches in back, along with easy-to-follow instructions in the manual.
     I particularly like the EPL-6000's well-designed Control Panel, consisting
of LCD, buttons and lights.  There are no mysteries here, no intimidating
commands, and no nonsense.
     With the Control Panel, you can always tell just what the printer is doing
(or not doing), such as PROCESSING data, OFF LINE, running a SELF TEST or FONT
PRINT test, filled with DATA IN BUFFER, or instructing you to PUSH MANUAL KEY
to print an envelope.
     The SPECIAL button is used to select a higher fuser temperature.  This is
recommended for printing envelopes and heavy paper (27-34 lb. weight).  You may
also press SPECIAL for transparencies and labels.
     The SelectType button takes you into a new command menu, where you have
precise control over the EPL-6000's extensive features.  (NOTE: DIP switches
are used ONLY for serial port usage, not for other changes.)  Users who don't
care much for messing around with DIP switches will appreciate SelecType.
     Using SelecType you select such desired options as default PAPER SIZE,
EMULATION, COPIES, I/F (parallel or serial), DATA BUFFER size, and BUZZER.
     In the HP emulation submenu, you select your FONT SOURCE (internal,
cartridge or downloadable soft font), FONT NUMBER (based on FONT SOURCE
option), FORM (number of lines printed on a page), and SYMBOL (character sets,
like ROMAN8, IBM-US, IS06 (ASCII), SPANISH, and so forth.
     For serial port users, the I/F submenu lets you set BAUD RATE, PROT
(protocol), DATA BIT, PARITY, STOP BIT, and ROBUST-XON options.
     I printed all kinds of text and graphics documents, with software
including Finesse, PFS:First Publisher, Professional Write, PUBLISH IT!,
Pinstripe Presenter, PaintShow Plus, The New Print Shop, Formtool, and
Diagraph.  I printed on copier paper, laser paper, envelopes, labels and
transparencies.
     My review unit came with the 2MB memory card.  If you plan on printing
extensive graphics, the extra memory is a requisite, not a luxury.  Make sure
you get it.  If you order it at the same time, ask your dealer to install it.
But it's easy to install yourself.
     This is one powerhouse, hassle-free, super-quality laser printer.  Usually
a reviewer can find something that needs to be redesigned, a feature added, or
a drawback.  The EPL-6000 is mistake-free as far as I could determine.  It
rates an A+ for value, features and performance.
     Epson dropped its suggested list price for the EPL-6000 to $1,499, which
translates into a street price of around $1000.  The 2MB memory upgrade board
lists for $899, and the FX identity cartridge, $299.  For information, contact
Epson America, Inc., P. O.  Box 1842, Torrance, CA  90505; 800-922-8911.
                                       #
     David Batterson looks forward to the day when dot matrix printers go the
way of the Dodo Bird!  Send your comments via MCI Mail: DBATTERSON.
```
{% endraw %}

## EPSONLT.TXT

{% raw %}
```
                 Epson Equity LT-286e -- Modular Design Laptop
                         Copyright 1990 David Batterson

     About a year ago I reviewed the Epson Equity LT, a V30 CPU, 10 MHz laptop
which hasn't made a large dent in the thriving laptop marketplace.
     Epson recently released a AT-compatible laptop, which is called the Equity
LT-286e.  It's not a top-of-the-line 386 laptop like the NEC ProSpeedCSX color
machine, nor a notebook computer like the Compaq LTE/286 or Zenith MinisPort.
It fits in right in the middle ground.
     Some users may recall Tandon Computer's ATs with their removable hard
drives.  The LT-286e is the first name-brand laptop to feature a removable hard
disk (either 20 or 40 MB).
     These hard drives are easily popped out and reinstalled.  My review unit
came with the 40 MB hard drive, which has an embedded controller, 25ms average
access time, and a 1:1 interleave.  It has a shock indicator on the bottom; the
indicator turns red if the hard disk has been jarred severely.
     Let's look at some more of the LT-286e's features.  It has the 80C286 8/12
MHz CPU, 1 MB RAM, a 3.5" 1.44 MB floppy drive, serial and parallel ports,
clock/calendar, port for external AT-compatible keyboard, internal speaker,
a paper-white NTN high contrast LCD screen (640 x 480 graphics resolution; 16-
level gray scale, 80 x 25 text display,  and selectable inverse video).
     There are also ports to connect an external EGA monitor and an optional
external 1.2 MB floppy drive.  The external power supply is 100 to 240 volt,
auto-adjusting, 42.5 watts.  There's a removable NiCad battery with battery
life of about 2.5 hours.  The battery is protected against overcharging.
     Without the battery attached to the back, the LT-286e weighs in at 13
pounds, heavier than notebook PCs but lighter than some laptops and all
transportables.  With the battery unit, it weighs 17 pounds.
     For expansion, there are three I/O slots: the modem "snap-slot" is at the
left rear, memory "snap-slot" at right rear, and 2/3 size AT-compatible slot.
RAM can be expanded to 2 MB by installing the Epson proprietary 1 MB memory
card, or to 8 MB by installing an Epson 6 MB RAM card in the AT slot.  There's
also a socket for an 80287 math coprocessor.
     The LT-286e comes with MS-DOS 4.01, which includes a DOS shell.  I don't
use shells, but many users will find it functional.  The LT-286e also came with
Turbo EMS--expanded memory software.  This allows you to make use of software
requiring expanded or extended memory, through disk-swapping.  It doesn't
require an EMS board.
     The HDDPSAVE utility program is used to turn off the hard drive after a
specified period of inactivity.  Likewise, SETLCD lets you set how long the LCD
stays on.  Both of these utilities save valuable battery time.
     Epson has included a narrow LCD screen called the "status indicator bar."
This displays CPU speed, battery status, whether using LCD or external CRT,
floppy/hard disk indicators, and indicators for <ScrollLock>, <NumLock> and
<CapsLock>.
     The keyboard features 84 keys, and has a nice click touch.  It's a fine
improvement over the older LT's keyboard.  The numeric keypad isn't separate,
but is instead located in the top right section.  My only complaint with the
keyboard is that the <Backspace> key is undersized, and a bit hard to reach.
     This model has a list price of $4,999, but will cost less at street price.
The 1MB memory card lists for $499; an extra battery unit lists for $349.  The
soft travel case is $99, and the 2400 baud modem card is $299.
     I enjoyed using the LT-286e.  You get excellent computing power, clear
screen, improved battery life and keyboard, and an agile hard drive you can pop
in and out with no trouble.
     I'd recommend buying any desired options at the same time, and then
bargain for the best overall price from your dealer.  For more information,
contact Epson America, Inc., 23530 Hawthorne Boulevard, Torrance, CA  90505;
800-922-8911.
                                       #
     David Batterson writes articles and reviews for various computer and
business publications.  Send any comments via MCI Mail: DBATTERSON.
```
{% endraw %}

## FAXPORT.TXT

{% raw %}
```
                           The Complete FAX/Portable
                         Copyright 1990 David Batterson

     The laptop/notebook PC market continues on an upward spiral, as more
businesses realize the importance of using computers on the road.  Two of the
leading remote PC uses are for e-mail and FAX.
     Stand-along fax machines keep shrinking, and they will eventually be
used routinely with cellular phones.  Right now, most cellular phone owners
don't use them for FAX messages.
     Most laptops have limited slot availability, so internal FAX cards may not
be practical.  The Complete FAX/Portable is designed for laptop use in hotel
rooms, remote offices and warehouses, at airports and similar locations.
     It's a true pocket-size unit, measuring 5 3/4 x 3 x 1 inches.  It uses a
standard 9v battery [for up to three hours continuous use] or the AC adapter.
It comes with cable, 25-pin adapter and phone cord.  FAX resolution is standard
98 x 204  or fine resolution (196 x 204).
     Requirements include 640K RAM, hard disk with 3MB available, PC- or MS-DOS
3.1 or higher, analog (not digital) phone line, and Hercules, CGA, EGA or VGA
monitor.  You'll need a printer, of course, if you want hard copies.
     More than 100 dot matrix and laser printers are supported, so no problems
there.  If you want to send hard copies, you'll have to carry along a page
scanner, like those from DEST, HP, Microtek, The Complete PC and Canon.
     The Complete FAX/Portable [abbreviated as CFAX/P] allows conversions of
FAX files.  You can convert to FAX from: .PCX (PC Paintbrush), .CUT (Dr.
HALO), .MSP (Microsoft Paint), .PRN (Epson FX) and ASCII formats.  You can
covert from FAX to: .PCX, .CUT, .MSP. and .TIF (scanners).
     You don't have to convert any of those files before sending.  The software
converts them to FAX format automatically.  You have the option of converting
them beforehand, as it speeds up things somewhat.
     Like a FAX machine, you can broadcast a FAX to multiple locations,
schedule for later transmission, and perform polling (to and from).  One handy
feature is the ability to fax from within your word processor or spreadsheet
program, using a pop-up FAX window.
     Installation of the CFAX/P software is not difficult.  Configuration
requires selecting your COM port, printer, page scanner (if any), phone system
information and hot key choice.  Changes will be made in your AUTOEXEC.BAT and
CONFIG.SYS files, with the old ones saved.
     I didn't especially like software used by The Complete Communicator
(reviewed last year).  The CFAX/P software is also somewhat awkward, and needs
a major updating.
     It does the job, but users will find it dated.  There are no pull-down
menus, for instance.  You use F-keys and/or menu bars to select commands, and
there is no mouse support.
     There's another drawback with the CFAX/P.  It cannot receive or send FAXes
in the background, like The Complete FAX and Connection CoProcessor internal
boards do.  However, it will convert or print files in the background.
     Therefore, when CFAX/P sends/receives a FAX, your other applications come
screeching to a halt temporarily.  Depending on how you configure CFAX/P,
you either get a pop-up FAX status window or beep tones during transmissions.
     Displaying received FAXes is competent enough.  You can change the view
from the default half page to full page, or zoom in to see detail.  You can
reverse and flip the FAX images too.
     As for hard copies, you can configure CFAX/P to print automatically, or
just manually print the ones you wish.  CFAX/P lets you create cover sheets,
and you can customize these with a logo, via a scanner or paint program.
     I did like the ability to send just a cover sheet, as there is adequate
space for average-length text messages.  There's a phone book, which can
contain up to 999 entries.  This lets you select groups or individuals for
your automated FAX transmissions.
     The CFAX/P has its uses, but I still prefer FAX cards to the portable
external models.  It might serve your needs just fine.
     The list price is $499.  For more information, contact The Complete PC,
1983 Concourse Drive, San Jose, CA  95131; 408-434-0145, FAX: 408-434-1048.
                                       #
     David Batterson reviews various PC hardware and software.  Send comments
via MCI Mail: DBATTERSON.
```
{% endraw %}

## FILE2392.TXT

{% raw %}
```
Disk No: 2392                                                           
Disk Title: PC Reviews                                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: PC Reviews                                               
Author Version: 05/90                                                   
Author Registration: $10.00                                             
Special Requirements: CGA                                               
                                                                        
PC REVIEWS is a collection of original "hands-on" reviews that can save 
you lots of money!  How?--by telling you what PC software and hardware  
to buy, and what to avoid!                                              
                                                                        
PC REVIEWS features professional evaluations by a computer journalist   
and consultant.  The reviews are concise, to-the-point, and tell you    
exactly what you need to know about the products.  This is a menu-driven
program, and easy to use.  The author uses a handy five-star rating     
system, too.  All reviews are pure ASCII files and can be printed out   
easily.                                                                 
                                                                        
PC REVIEWS can help the MIS professional, office PC guru, or home user  
make the right PC purchasing decisions.                                 
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FINESSE.TXT

{% raw %}
```
                Finesse Ver. 3.1 - Desktop Publishing Software
                        Copyright 1990 David Batterson

     Many desktop publishers, like myself, have been searching for a quality
DTP program, with outstanding features, reasonable price, and easier to learn
than Xerox Ventura Publisher or Aldus PageMaker.
     We do have a winner, folks!  It's called Finesse.  It comes from
Logitech, the mice and scanner company.
     Many publications have gone the DTP route, avoiding the old pasteup and
klunky typesetting methods carried over from the days of yore!  However,
some--like Computer Currents--have gone through major stress and sticker shock
getting these systems up to speed.
     Meanwhile, newsletters editors, corporate PR people, schools, publicity
people at nonprofit organizations, and self-published authors also want better
DTP software.  Ventura is still the number one choice, but it's not easy to
master.  The price is a bit hefty, too.
     The Logitech team correctly saw that there was a need for an alternative.
Finesse is the result, and I think you're going to like it as much as I do.
     Finesse uses a runtime version of GEM (Graphics Environment Manager), the
graphical user interface (GUI) from Digital Research Inc., or it will run under
your existing GEM Desktop.  GEM is a competitor to Windows, but I prefer it.
Ventura also runs under the GEM GUI.
     To create a document with Finesse, you place text and graphics frames on
your page(s).  Next you import text to the text frames, or create new text,
selecting the various Bitstream fonts used by Finesse.
     Imported text can be in ASCII (.TXT), WordPerfect (.WPF), WordStar (.STR),
Microsoft Word (.DOC), FirstWord Plus (.WPL), or GEM Write (.DOC) formats.  You
can choose style options (plain, bold, italic, underline) and justification
(left align, right align, center, justify).
     Likewise, you import your graphics images, in four formats:  .IMG (used by
Finesse), .PCX and .PCC (PC Paintbrush), .TIF (Logitech's PaintShow), and .GEM
(Microsoft Windows Paint).  The latter three formats are converted to .IMG
format for use by Finesse.
     The images can be sized in three ways: Auto-Aspect (resized to fit within
frame while keeping same proportions), Scale to Frame (fills frame with image,
without regard to original proportions), or 1:1 (frame-shaped window on an
imported image, at full size).
     Frames are easily modified or removed.  Selecting "Size/Position" from the
Frame menu allows you to specify precise measurements.
     Documents you produce can be viewed onscreen in three ways: "Full Page,"
"Actual Size," and "Double Page."  Finesse comes with some page layout
templates, including a calendar, newsletter, brochure and so forth, with
suggested fonts for each section of the document.
     There are also 70 clip art images in the .TIF format, depicting various
business, lifestyle and holiday representations.  Also included is the
Bitstream Fontware installation kit, along with Dutch, Swiss, Courier and
Symbol typeface disks.
     Finesse requires 640K RAM, PC- or MS-DOS 2.1 or higher (3.1 or later if
you want to use Bitstream Fontware), a hard drive, most any graphics adapter,
and any mouse.  Finesse supports most popular printers, including HP LaserJets
(and compatibles) and PostScript printers (and compatibles).
     Ver. 3.1 keeps the same system requirements, but has some needed
improvements.  For instance, Ver. 3.0 treated VGA the same as EGA (something
that many software products are guilty of doing).
     Now you really get VGA display with your VGA monitor.  However, if you
created VGA documents using Ver. 3.0, and import them into Ver. 3.1, your
screen ratios are thrown off.  To correct this, you can run Finesse by typing:
                               C:>  FINESSE /XEGA
     Or you can manipulate the graphics and text manually, and then save it as
a new Ver. 3.1 document.  That's what I did.
     It's also now advised to avoid using fill pattern #1, if your printer is
an HP LaserJet Plus or Series II.  I don't know why this is necessary.
     Another new feature is support of Logitech's ScanMan and ScanMan Plus hand
scanners.  Ver. 3.1 automatically configures the default settings.
     Hairline rules have now been added, inside the horizontal/vertical rulers
at the top and left sides of the screen.  This helps you place lines and boxes
more accurately.
     Document size has been increased from the moderate 16 to a whopping 99
pages!  The Help section has been greatly improved also.
     If you feel limited by using the four graphics file formats (.PCX, .TIF,
.IMG and .GEM) in Finesse, Ver. 3.1 has added Catch.  Catch is a screen capture
TSR program, like FRIEZE in PC Paintbrush.
     After capturing screens from other graphics programs, Catch saves them in
the .TIF format for use with Finesse.  It works only in specified video modes.
     They've added new printer drivers for the HP DeskJet and PaintJet.  With
the price slashing and rebates on the DeskJet, lots of users are buying them.
Additional device drivers for printers, plotters and displays are available at
reasonable cost from Digital Research.
     Suggested list price of Finesse Ver. 3.1 is $179.95, but actual street
price will be much less.  The upgrade to 3.1 costs only $10.
     The optional Finesse Spell Checker uses the Proximity/Merriam-Webster
Linguibase containing 81,000 words.  I didn't review this option, however.
     Logitech has a 24-hour BBS called LBBS for tech support: 415-795-0408
(300/1200/2400 baud).  The company also sponsors a tech support conference on
BIX, the online system run by BYTE magazine.
     For more information, contact Logitech Inc., 6505 Kaiser Drive, Fremont,
CA  94555; 800-231-7717, 800-552-8885 (CA), 415-795-0801, FAX: 415-792-8901.
                                       #
     David Batterson writes about various PC applications.  Send comments via
MCI Mail: DBATTERSON.


 
```
{% endraw %}

## FIRSTWD.TXT

{% raw %}
```
  GEM 1st Word Plus Ver. 2.0 (with GEM/3 Desktop Ver. 3.1/GEM Paint Ver. 2.01)
                         Copyright 1989 David Batterson

     There are many of us who don't use Microsoft Windows, because it's
been too slow, buggy, and not particularly stylish in its screen design.
     The new Windows 3.0 and OS/2 Presentation Manager (PM) reportedly are much
better.  I haven't seen a copy of Windows 3.0 yet.
     Meanwhile, Digital Research (creator of the CP/M operating system) pushes
ahead with GEM (Graphical Environment Manager).  It sells GEM/3 Desktop Ver.
3.1, a program and file manager much like Windows MS-DOS Executive.  Digital
also publishes a series of GEM applications that run from within the GEM/3
Desktop.
     GEM 1st Word Plus is their word processor.  The current software package
contains 1st Word Plus Ver. 2.0, along with GEM/3 Desktop Ver. 3.1, and GEM
Paint Ver. 2.01.
     GEM/3 Desktop is closer to the Mac interface than Windows is.  Xerox
Ventura Publisher users are already familiar with GEM, since Ventura uses a
runtime version of GEM.
     Why hasn't GEM become as popular a GUI (Graphical User Interface) as
Windows, when many users prefer it?  Well, it's tough to go up against the
behemoth Microsoft (which, of course, also killed off Digital's CP/M).  But
Digital has decided to port GEM applications to OS/2-PM in the future.
     GEM/3 Desktop doesn't have to be used with GEM-based applications only,
like 1st Word Plus, GEM Artline, Finesse, and so forth.  It can also be used as
a file manager.  Copying files is as easy as dragging icons, just like Mac
users have done for years.
     You can configure your DOS-based applications to run by double-clicking a
program's document file or parameters.  For example, from the DOS prompt, I
type C:> MIRROR CHECKMCI, which loads MIRROR III and my CHECKMCI.XTK file, to
automatically call MCI Mail and download any messages.
     With GEM/3 Desktop (after completing "Configure Application"), you would
simple double-click the icon labeled CHECKMCI.XTK, and away it goes!  Both take
about the same time; it's just a choice between DOS commands and mouse clicks.
     On to the review of 1st Word Plus.  If you're a Ventura user, you may like
1st Word Plus, since it will be easy to learn.  Why?--Because once you use any
GEM-based application, you'll be comfortable with all others.
     I don't think WordPerfect Corp. has anything to worry about competition
from 1st Word Plus.  But this isn't the user Digital is aiming at anyway.
     1st Word Plus is a low-end word processor which is easy to use, yet offers
most of the features you'll ever need, including a spelling checker, multiple
windows, full editing functions, pull-down menus, and support of most popular
printers.  You get WYSIWYG (What You See Is What You Get) screens, including
display of bold, underline, light, and italic type styles.
     You can also select auto-hyphenation, justification, and save different
formats for various documents, such as letters, memos or fax cover sheets.
1st Word Plus includes a mail merge program called GEM 1st Mail.  I didn't test
this out, but it works like any other mail merge program.
     Also bundled with 1st Word Plus is GEM Paint.  This is your basic paint
program, much like PC Paintbrush or PaintShow Plus.  Documents are saved in the
.IMG format.  Graphics produced by GEM Paint can be easily imported into 1st
Word Plus.  GEM Paint also includes a Snapshot feature, to save screen images
to disk for editing.
     The 1st Word Plus software package lists for $99.  For more information,
contact Digital Research Inc., Box DRI, 70 Garden Court, Monterey, CA  93942;
800-443-4200; 408-649-3896; FAX: 408-649-0750.
                                       #
     David Batterson reviews PC hardware and software for various computer and
business publications.  Send comments via MCI Mail: DBATTERSON.
```
{% endraw %}

## FRACTALS.TXT

{% raw %}
```
          FracTools - An Electronic Kaleidoscope of Nature's Geometry
                         Copyright 1990 David Batterson


     Benoit Mandelbrot, an IBM Fellow at the Thomas Watson Research Center,
coined the term Fractal.  It refers to a family of irregular shapes and
patterns around us, such as clouds, coastlines, mountains and trees.
     Major universities, NASA and military research groups have done a lot of
study of this non-Euclidian geometry of nature.  These multi-colored fractal
images, straight out of the psychedelic 60s, are quite spectacular.
     FracTools is simply a way of modifying, creating and viewing fractal
images.  This is not really a practical program, but it's sure a lot of fun.
Of course, you could incorporate a few such images into a corporate slide show
to liven things up a bit.
     The program comes with a number of images ready for viewing, as well as
some very entertaining slide shows.  In the beginning, you'll probably want to
view most of these, just as they are.  Then you can begin exploring how to make
new images and slides, and manipulate them to your heart's content.
     The effects you can accomplish are as good as some special effects we saw
in science fiction films only a few years ago.  There's no sense in even
describing the images; just try to view them at your favorite software dealer.
     You play around with the fractal images by changing the Palettes,
Iteration ranges, Strobe, Stained Glass effect, Kaleidoscope, and Horizontal or
Vertical Pan.
     Since FracTools uses the EGA standard, you get 16 colors out of a palette
of 64.  Use the various palettes provided, or create your own.  Increasing the
iteration ranges creates fatter color bands.  Increasing minimum iterations
adds black to the images.
     The strobe effects can be changed as to speed and direction, either from
the effects menu, or by mouse movements.  Selecting stained glass alters the
image so that each color band is separated from its neighbor by a black line.
     By choosing the Black and White palette, a stained glass fractal image
looks like a paint-by-number painting.  By saving these images as a .PCX file,
you can print them, and then color them with magic markers (great rainy day
activity for kids!).
     The kaleidoscope effect creates four smaller images, mirrored horizontally
and vertically.  The horizontal/vertical pan commands shift the image
left/right and up/down.
     When you put all these tools together, you can change the images quite
drastically, for hours of amusement.  But wait, there's more.  The Generate
menu lets you create new image files, either Mandelbrot or Julia types.
     Since these images take a long time to generate, you can use the Header
Only option, which saves the data necessary to create an image file.  Then you
can produce the image later, when you are at work or asleep.
     Oops, almost forgot the Mouse Movies option.  This creates instant changes
to your images, by simply moving the mouse around the screen.  The only
drawback to this process is that it makes the menus unreadable (black on
black) when you finish.  You have to press <Ctrl> <Enter> to get readable
black-on-white menus.
     FracTools requires 640K, hard drive, EGA or VGA, and DOS 2.0 or higher.  A
math co-processor is recommended for faster performance (you are dealing with
millions of calculations).
     Suggested list price is $59.  For more information, contact Bourbaki Inc.,
P. O. Box 2867, Boise, ID 83701; 800-289-1347 (orders), 208-342-5849 (info).
                                       #
     David Batterson enjoys using and writing about all kinds of graphics
software.  Contact him via MCI Mail: 273-7218.
```
{% endraw %}

## FREEDOM.TXT

{% raw %}
```
   Freedom of Press Version 2.2 - PostScript Language Compatible Interpreter
                        Copyright 1989 David Batterson


     Laser and laser-quality printers are selling well as more manufacturers
enter the marketplace, thus lowering prices.  But PostScript (and compatible)
page printers still take a huge bite out of your wallet, and most of us simply
cannot afford one.  (I sure can't.)
     With over a million HP LaserJets in offices around the country, there was
a need for a product which would make those printers emulate a PostScript-ready
printer, with no hassles or hardware.
     Custom Applications Inc. (CAI) came up with the solution: Freedom of
Press.  Now Version 2.2 of this program has been released.
     Freedom of Press is a PostScript Language Compatible Interpreter.  That
means that your PostScript files created by Ventura Publisher, PageMager,
WordPerfect 5.0, and any other word processing, graphics or desktop publishing
software, can be printed on your non-PostScript printer.
     The software works with all popular 24-pin (NOT 9-pin) dot matrix
printers, most page printers (including laser, and laser-quality ink jet
variety like the popular HP DeskJets), color thermal printers, and even film
recorders (for slides and transparencies).
     Freedom of Press also supports the Intel Visual Edge, Tall Tree JLASER,
and AVR Megabuffer expansion cards.
     Another new feature is the ability to create a PC Paintbrush (.PCX)
graphics file on disk, with 200 dpi resolution.  These files can then be used
with fax boards, or in a graphics program which uses .PCX files.
     The best news about Version 2.2 is that it no longer requires expanded
memory (EMS), like the original version did.  [That previous requirement
eliminated millions of PC users who don't have memory boards or additional
onboard memory.]
     Now you only need 640K RAM, with a minimum of 450K available.  The
programmers at CAI accomplished this by recompiling the C code and other little
tricks of the trade.
     If you have extra RAM, Freedom of Press can still use .5 to 8 MB of EMS
to make the program run faster.  You'll also need about 4MB hard disk storage
space, and a 5 1/4" 1.2MB (high-density) or 3 1/2" floppy.  A math co-processor
is highly recommended, but not required.
     For laser printing, your printer should have at least 1.5MB memory if
you'll be printing complicated pages and graphics files.
     Installation of the software is easily done with the install program.  The
manual is well-organized, and comes in a 3-ring binder (which I prefer above
all other manual types).  Way to go, CAI!
     Freedom of Press also provides ready-made batch files, for users of
Ventura Publisher, PageMaker, WordPerfect and Microsoft Word.  This automates
the printing process.  When you exit one of these programs, Freedom of Press is
run by the appropriate batch file, and the PostScript output file is printed.
     It's no problem using other programs which create PostScript output.  I
tested Freedom of Press using Professional Write and other software with my
16MHz AT-clone.  I printed on an Epson EPL-6000 laser printer (HP LaserJet II-
compatible).  It worked just fine.
     After creating your PostScript document, you simply "print to disk,"
instead of sending the file to your printer, and then exit that program.  Now
you're ready to let Freedom of Press perform its magic.
     At the DOS prompt, you can start the printing process two ways.  One is to
type: FP! \<path>\<filename>.  You can enter up to six document filenames,
separated by spaces.  The other way is to type: FP-ASK.  It then prompts you
for the path and filename, and number of copies you want.  Use of DOS wildcards
[? or *] is OK too.
     You then watch a moving horizontal bar graph as the file undergoes the
interpreting process.  Upon completion, the bit map image is created and sent
to your printer.
     Remember, using even the best 24-pin printer, you cannot achieve true
laser quality, because you are still limited by that printer's dpi resolution.
It looks pretty close though.  But use a page printer for best results.
     You can transfer PostScript and Adobe Illustrator files from a Mac to a
PC, and then print them using Freedom of Press.  You may also use downloadable
PostScript fonts, or Adobe Type 1 fonts (but not HP soft fonts).
     If you are experienced in creating custom PostScript files, you won't have
any trouble printing these with Freedom of Press, either.
     Included are 35 fonts equivalent to Apple LaserWriter Plus fonts.  These
include font equivalents like Palatino, AvantGarde, Helvetica, New Century
Schoolbook, and Times-Roman.
     I recommend this software purchase for those who require high-quality
graphics and DTP printing, and want to save money doing it.
     Freedom of Press has a suggested list of $495 but shop around for best
street price.  It sure beats going out and buying an expensive PostScript-ready
printer.  The upgrade for registered users is only $45.
     For more information, contact Custom Applications Inc., Building 8, 900
Technology Park Drive, Billerica, MA  01821; 508-667-8585, 800-873-4367, FAX:
508-667-8821.
                                       #
     David Batterson is a writer/editor in Palm Springs, CA.  Contact him via
MCI Mail: DBATTERSON.
```
{% endraw %}

## GO1.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  PC-SIG Disk #2392  PC REVIEWS   >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To print author's documentation and installation instructions, type:   ║
║                   COPY README.TXT PRN (press ENTER)                     ║
║                                                                         ║
║  To start PC REVIEWS, type:  GO (press ENTER)                           ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GRAMATIK.TXT

{% raw %}
```
                    Grammatik IV - Grammar and Style Checker
                         Copyright 1990 David Batterson


     The problem of illiteracy in the U.S. is an enormous one.  According to
Project Literacy U.S. (PLUS), over 25 million Americans are functionally
illiterate, while some 50 percent of American workers have problems with
spelling, punctuation and grammar.
     Software products such as Grammatik, Readability Plus and RightWriter
correct grammar, style and spelling errors.  We still need a good writing
tutorial program (with lessons rather than corrections) for PCs, but that's
another story.
     More than a year ago I reviewed Grammatik III, an excellent
grammar/style/spelling checker.  The company, Reference Software, later
announced that Grammatik III Utilities were forthcoming.
     The Utilities offered improvements, including making Grammatik III RAM-
resident.  However, the Utilities were never released.  Instead the company
overhauled the software and released the enhanced Grammatik IV.
     It was worth the wait since Grammatik IV is quite an achievement.  I think
the best new feature is Grammatik IV's ability to run from within your word
processor.  It works with WordPerfect 5.0, Microsoft Word 5.0, Professional
Write 2.1, WordStar 5.5, and XyWrite III.
     The process works very easily.  Instead of typing your normal command to
start your word processor, you use: G4RUNWP.  Write your document, and then
press a hot key to access Grammatik IV.
     For instance, within Professional Write 2.1, you merely press <Alt>-G when
you're ready to check your document.  This automatically triggers Professional
Write to save your document before bringing up the Grammatik IV opening screen.
     When you are finished proofreading and correcting your document, press Q
(for Quit) and you go back to word processing with the edited changes now on
screen.  Grammatik IV saves the original file with the default extension .G4B
(you can change this if you want).
     For those who haven't used any version of Grammatik before, you're in for
a treat.  Improved Artificial Intelligence techniques and its Rule Dictionary
locate split infinitives, syntax errors, subject/verb disagreements, incorrect
homonyms, incomplete sentences, sexist terms, vague adverbs, archaic words,
wrong articles, cliches, punctuation mistakes and spelling blunders.
     Naturally, I had to test my own writing with Grammatik IV.  I checked an
opinion piece I wrote last month.  The only problem it flagged repeatedly was
too many instances of passive voice.  ["I'll have to watch this more closely"
is stronger than "This will have to be watched more closely."]
     Grammatik IV lets you choose among six writing styles for polishing up
your writing:  general, business, technical, fiction, informal and custom.  The
rules are slightly different for each style.
     For example, if you write a complex technical manual, you wouldn't want to
proofread it using the general style.  If you did, Grammatik IV would flag
jargon and technical words as inappropriate, even though they were fine for
your intended readers.
     Replacing recommended words or phrases is easier now.  Let's say that
Grammatik IV flagged "your" because you should have used "you're."  Simply
press <F2> and the word is corrected.  Then press <F10> to proceed to the next
problem area.
     At any time, you may ignore suggestions.  You may also type in your own
correction.  There are instances when this is better, since you might want to
rewrite the whole sentence.
     Grammatik IV checks for spelling errors, but you may choose not to use it
since most word processors have spelling checkers.  By default, this feature
is turned off.  Just remember to check spelling within your word processor
before using Grammatik IV.
     You'll find excellent context-sensitive help screens at the touch of <F1>.
Corporate users can also design their own customized help screens, explaining
rules for their particular company or industry.
     Grammatik IV rates an "A" for performance and value.  The suggested list
price is $99 (you'll pay less); a five-user Network Edition costs $189.
Registered owners of earlier versions may upgrade for $29.
     For more information, contact Reference Software International, 330
Townsend Street, Suite 123, San Francisco, CA  94107; 800-872-9933, 415-541-
0222, FAX: 415-541-0509, MCI Mail: 288-1979.
                                       #
     David Batterson is an independent writer and editor.  Contact him via MCI
Mail: 273-7218.
```
{% endraw %}

## HUMOR.TXT

{% raw %}
```
                  The Humor Processor (joke writing software)
                         Copyright 1989 David Batterson


     After evaluating so many of the usual software products like word
processing, desktop publishing, graphics, utility, database and communications
programs, it's always enjoyable to review something really fun and different.
     Such a product arrived in the mail recently, and I dropped what I was
doing at the time [good thing I wasn't carrying an anvil!] to take a look.
     It's called The Humor Processor.  I like the title, as it describes the
function of the program correctly.  Just like a word processor, it's a tool,
but the true creativity must still come from your own brain.
     Author Alan Macy of Berkeley, CA (where lots of brainy and witty people
live) could have called it The Gag Grabber, The Funny Formulator, The Comedy
Constructor, The Pun Picker, or The Joke Jerker.  But luckily for us, he
resisted the temptation.
     The Humor Processor is a two-part program.  The first part is a large
database of jokes.  You search the database by category (religion, lawyers,
animals, etc.), by occasion (birthday, dinner, speech, etc.), or by key words
(money, cats, women, work, football, etc.).
     If you like, you can just "Browse through the Database" and read the jokes
at random.  Some of them are funny, some rather stale (like the "Sahara Forest"
joke, or the prisoner telling jokes by calling out numbers), and a few I
thought were passe (the drinking jokes).
     I liked this one:  "The other day, the local department store was running
a special.  I bought a toaster, and they gave me a free Savings and Loan
Association."
     You can easily rewrite the jokes, or add new ones that you make up or hear
at work or parties.  The database is basically a starting point, and is not
meant to be the best source of jokes.  You can buy many books for that.
     The main purpose of The Humor Processor is to help newsletter editors,
politicians, teachers, deejays, columnists, dinner speakers and others to liven
things up with some good (and hopefully original) humor.
     As the manual states, "trying to come up with a funny line can be very
frustrating.  The Humor Processor eases the pain significantly...as you work at
it, you'll see a steady improvement in your comic output."
     Which brings us to the best part of the program, the Brainstorm section.
After hearing some of the humor on TV, I think some of those writers could use
a Brain Hurricane section!
     First of all, you come up with the humor concept, which The Humor
Processor calls the "setup."  This means the type of joke or humor, such as
"Exaggeration," perhaps used best by Rodney Dangerfield:  "I was so poor
that...she's so ugly that...", etc.
     Other Humor Processor setups include "Malapropisms" ["I guess I'll have to
start from scraps."--Casey Stengel], "Definitions," "Play on Words," "Cliche
Rewrites" ["Old postman never die, they just lose their zip."], "Misdirection,"
"Puns," and other types.
     The Brainstorm section lets you use lists of what are called "Images."
These images contain such data as movie titles, common cliches, well-known
personalities, things related to kids, television, and so forth.  The files can
be used as is, or edited.  You can easily create new categories too.
     You then load two image files of your choice, with each displayed side by
side.  You scroll through the lists (automatically or manually), to match up
words and ideas.  It's a lot easier that it may sound.
     For instance, I imported the COMPUTER.DTA file into the left side, and the
SONG.DTA file into the right.  I soon came up with this joke:  There's a new
antiviral computer software program out now.  It's called "Beat It."
     Next I loaded movie titles into the left side, and common expressions into
the right.  After scrolling around a while, I created this one:  "They say a
fool and his money are soon parted......I think that was said by the producer
of Conan The Barbarian."
     OK, those aren't the greatest, but it gives you the idea of how The Humor
Processor works.  It helps you use free association to conjure up new and
odd combinations, which is what humor is all about.
     The program's interface is nicely done, and very intuitive.  There were no
surprise offbeat commands, like I sometimes see in programs from small software
publishers, such as <Ctrl><Alt>(F2><Enter> to save a file!
     The requirements are simple:  320K available RAM, and PC- or MS-DOS 2.0 or
higher.  The program also supports a Microsoft-compatible mouse.  The spiral-
bound manual explains everything well, and even includes a list of humor books,
newsletters and organizations.
     I liked The Humor Processor very much, and recommend it highly.  I plan on
using it many times.
     The Humor Processor is available directly from the publisher for $49.95
plus $5 shipping and handling.  I don't know if it's available from software
stores and mail order companies.
     For orders or information, contact Responsive Software, 1901 Tunnel Road,
Berkeley, CA  94705; 800-669-4611, 415-843-1034.
                                       #
     David Batterson enjoys good humor as much as he does good software.
Send your favorite jokes or comments via MCI Mail: DBATTERSON.
```
{% endraw %}

## IMSIGRAF.TXT

{% raw %}
```
                 IMSI Presentation Graphics Version 4.0
                     Copyright 1989 David Batterson

     The presentation graphics software industry continues on its high-growth
curve.  Visual aids are a vital part of doing business; constant improvements
in graphics adapters and monitors have made these programs popular.
     It is always a quandary for a software company to decide what to include
in a graphics package, and what to leave out.  Another crucial factor is:  how
compatible is the package with other graphics software?  (Today, software
publishers cannot ignore the other applications you use, as they once did!)
     Transparencies and 35mm slides still dominate business presentations,
followed by printed handouts, computer on-screen slideshows, and flip charts.
Companies are reluctant to give up their Carousel slide projectors and overhead
projectors, but still want to make the best use of their PCs.
     Having said all that, let's take a look at IMSI Presentation Graphics.
First of all, it's a remake of The Magician (which is still sold).  But IMSI
Presentation Graphics Ver. 4.0 has a significant number of improvements.
     Images are saved (or imported) in the Microsoft Windows (.MSP) and PC
Paintbrush (.PCX) formats, allowing you to use your creations in Ventura
Publisher, PageMaker, WordPerfect, Springboard Publisher, and many other
desktop publishing programs.
     The fonts provided include both Bitstream-compatible bit-mapped fonts, and
vector (or outline) fonts.  There is support of the full 256 ASCII characters,
not just the usual keyboard letters, numbers and symbols.  Font sizes range
from 12 to a whopping 256 points.
     Charts and graphs (14 different types) are either created manually by
typing data into the 12-column by 370-row spreadsheet, or you can import data
from Lotus 1-2-3 and dBASE.  Then the variables begin, as you choose the type
of chart, select colors and type font, pick the location for the legend, and so
forth.
     It's best to experiment here, changing the variables repeatedly until you
see what you like.  You then save your charts and graphs as a bit-mapped .PCX
or .MSP file, for printing or use in a presentation.
     Text-only charts can be created easily too. If you want to preserve the
data in your chart or graph, you save it in the .PRN format (remember that this
is raw data ONLY, not an image file).
     The screen drawing section works like most paint programs, letting you
draw boxes, circles, lines and arcs, either for reworking graphics files and
clip art, or for original drawings.  With VGA, there's a palette of 262,144
colors, plus 20 brush shapes, 12 line styles, and four drawing thicknesses.
     There are also five different overlay types: Combine, Superimpose, Color
Invert, Absolute, and Image Invert.  These take some time to really learn how
to make the best artistic use of them.
     The Tool Window pops up when you want it, by simply pressing the right
mouse button.  Then you make your choice of drawing color, fill type (color,
grey or patterns), along with brush shape, line width and style.
     The most interesting (and powerful) part of IMSI Presentation Graphics is
the XScript programming language, which is similar to Adobe's PostScript page
description language.  Like PostScript, XScript programs are written entirely
in ASCII text.
     There are several advantages using this vector-based language.  One is
that writing and editing the program is easier.  Secondly, graphics
descriptions take up only about 1-5% of a similar bit-mapped image file.  Also,
XScript-created images can be scaled, rotated and translated [change size,
orientation & position], with no loss of resolution.
     At this writing, IMSI Presentation Graphics doesn't support PostScript
(and compatible) laser printers, only HP LaserJet (and compatible).  However,
PostScript support is coming, so such users should call IMSI for information.
You can, however, print an XScript file to an HPGL file (plotter format).
     I did so in my testing, and then converted the .HPG files to PostScript
(.EPS).  This worked just fine.  You can also convert a .PCX or .MSP file to
.EPS, but then you sacrifice image quality.
     Included on disk are XScript clip art files, some of which are quite
usable; others are "cartoony" and not for serious use.  There are no
reproductions of the clip art in the manual, though.  You have to load the
*-SHO.XST file in each clip art subdirectory, to view a screen showing small
depictions of each drawing.
     You can make on-screen slideshows, either animated with XScript files, or
with your .MSP and .PCX graphics files.  For actual 35mm slides, check with a
service bureau about converting files to slides.  Transparencies can be printed
on your laser printer or plotter.
     Extensive on-screen help is available for IMSI Presentation Graphics when
you need it.  You will for a while, as there is a lot to learn here.
     Suggested list price is $199.95 (after an introductory price of $99.95).
For information contact IMSI, 1299 Fourth St., San Rafael, CA; 800-222-GRAF,
415-454-7101, FAX: 415-454-8901.
                                   #
     David Batterson never met a graphics program he didn't like.  Contact him
(MCI Mail: DBATTERSON) with your comments.
```
{% endraw %}

## JTFAX.TXT

{% raw %}
```
          The JT Fax 9600 Fax Board (software ver. 1.16) from QUADRAM
                       Copyright 1989 David W. Batterson

     While sales of stand-alone fax machines continue to go through the roof,
many PC owners have opted to buy fax boards instead.  If you already have a
printer, then buying a fax board can save you money.
     One major disadvantage is that unless you have a laser-quality page
printer, you're going to be disappointed with fax printouts while using fax
boards.  The 24-pin dot matrix printers are OK, but unless the sender
transmitted using high-resolution mode, words and images can get a bit fuzzy.
     The JT Fax 9600 fax board, as fax boards go, isn't bad.  However, I found
it to be less friendly than Intel's Connection CoProcessor, which I reviewed
earlier.
     The INSTALL program is rather painless.  But the manual warns that you may
have problems if you are using other TSR (Terminate and Stay Resident) programs
along with the FAX.EXE program (which is RAM-resident too).
     The configuration program is easy to get along with.  Using it, you enter
your FAX ID (usually your fax phone number, but it can be a word or phrase
instead), choose your printer, define scanner brand and port, and select other
PC setup options.
     I found a couple of problems here.  There are three settings for the
board's speaker:  Speaker Always On, On Until Connect, and Speaker Always Off.
Although I chose the middle one, the speaker continued to stay ON after
connecting.  I reconfigured it several times, but it didn't help.
     Also, you can select the number of rings before the board picks up the
line, and accepts the fax call.  Although I chose "1" ring, testing it with a
friend showed that my phone always rang twice before the JT Fax answered.
     I did like one choice, which worked perfectly.  Some fax boards will
transmit a full page, even though you may be sending only a half-page of ASCII
text data.  With the JT Fax, you can select Variable Page Length.  In this way,
if you send a file of, say 15 lines, your transmission will be much faster.
     The Connection CoProcessor uses a modified version of PC Paintbrush to
view received faxes.  I don't know WHAT the JT Fax uses, but it's a bit
awkward.  For instance, faxes are displayed on screen in reverse video, i.e.,
white text (or graphics) on black background.  You press "R" to reverse the
display.  After using the R command, the image reversed and was totally
UNREADABLE.
     [Note: I have a VGA monitor.]  I could only read it by using the "+" key,
which enlarges the fax display.  But you then have to scroll up/down,
left/right to see the whole fax message or image.  When you use the cursor
keys, it takes too long for the screen refresh.  Using <PgUp> and <PgDn> helped
a little.
     There are the usual features of delayed transmissions, sending faxes to a
group (broadcasting), and using normal or high-res fonts (80-column or 132-
column compressed).  Polling of other fax machines or board is NOT supported.
     One difference between the JT Fax 9600 and the Connection CoProcessor is
the way files are sent.  The JT Fax doesn't convert the files into fax format
before transmitting them.  The conversion takes place AFTER the fax board has
connected with the receiving machine or fax board.
     This results in better efficiency.  I noticed that my test faxes generally
transmitted faster with the JT Fax than with the Connection CoProcessor.
     Some utility programs are included.  FAXV.EXE converts ASCII text or .PCX
(PC Paintbrush format) graphics files to fax format.  FAX2PCX.EXE converts fax
format files to .PCX files; then you can edit or view them with PC Paintbrush
or compatible graphics software.  PC Paintbrush is NOT included.
     You can send either ASCII text files, or you can use your word processor
to prepare a message.  From the "Transmit FAX" menu, you select Application,
instead of Filename.  When you finish writing, you use your word processor's
print command.  Instead of going to the printer, the data is captured,
converted to ASCII text, and then faxed.
     To use that feature, you must configure your word processor to the Epson
MX printer.  The Application Printer Capture won't work otherwise.
     Another unusual feature is the Print Screen option.  You select "Print
Screen" from the Transmit FAX menu; the next time you press the <PrintScreen>
key--or <Shift> + <PrintScreen>--the screen data is sent as a fax.
      The software needs some upgrading.  For instance, there is no way to
delete fax files you've read, without going to the DOS prompt and doing it
manually.  It's quite a memory-hog too, requiring about 200K; that's too much!
Overall, I give the JT Fax 9600 a grade B- after my evaluation.
      For more information, contact QUADRAM, One Quad Way, Norcross, GA
30093-2919; 800-548-3420, 404-564-5566, FAX: 404-564-5528.
                                       #
      David W. Batterson has written for various computer publications,
including PC WEEK, MicroTimes, LINK-UP, Information Today, and others.
```
{% endraw %}

## LQ860.TXT

{% raw %}
```
               Epson LQ-860 - Letter-Quality 24-pin Color Printer
                         Copyright 1990 David Batterson

     As graphics programs grow more popular by the minute, more users are
wanting color output to match the fine color graphics they create.  The color
printer has traditionally been a very expensive item.
     A PostScript color printer (like the QMS ColorScript 100) is fine if your
budget is open-ended.  This thermal transfer printer uses a wax-based ink to
print graphics in 300x300 dpi.  At $8-10,000, most of us can only afford to use
one at a service bureau.
     That means a color inkjet, such as the HP PaintJet.  The output caliber
is first-rate, but again we are talking fairly expensive ($1-4,000).
     So in order to get color printing without asking for an increase in your
VISA credit line, the solution is the color dot matrix printer.
     Epson has come out with a praiseworthy one called the LQ-860.  It is
much better than slow 9-pin models, and the output quality is commendable.
     Let's review the LQ-860 specs.  For one, you can print graphics in 360x360
dpi resolution.
     The text printing speed is 98 cps with LQ elite, or 82 cps with LQ pica.
There's a SuperDraft mode of 300 cps, while normal draft elite is 295 cps and
draft pica, 246 cps.
     Graphics-printing speed varies, depending on the color and complexity of
your graphics.  Obviously, printing pure reds, yellows and blues is the fastest
since there's only one pass.  (Good for printing "Dick Tracy" colors!)
     The LQ-860's resident fonts are Roman and Sans Serif in elite, pica and
proportional styles.  You get the usual international character sets, a legal
character set, extended characters and user-defined characters.  Pitch choices
include 10, 12, 15, 17 or 20 cpi.
     Besides the push feed tractor, there's friction feed and automatic single
sheet loading.  A pull tractor is optional.  You can load single sheets without
removing your continuous form paper.
     One has the choice of using the short-form tear off mode to stop wasting
paper.  You advance the printed sheet, tear it off, and the paper returns to
print position.  The LQ-860 can accomplish this automatically with a DIP switch
setting, or you can do it from the handy control panel.
     Speaking of DIP switches, these are placed exactly where they should be.
Flip down the control panel cover, and voila!  Besides short tear-off mode, you
can select character sets, print direction (uni- or bi-directional), cut sheet
feeder mode, page length, auto line feed, and more.
     As for the control panel, it's well-designed and easy to use.  There's
micro-adjustment, which allows fine modifications of the loading and short
tear-off positions.  The LOAD/EJECT button allows smooth paper loading and
ejecting.  Holding this button down upon powering up enables/disables the input
buffer.
     I tested the LQ-860 with The New Print Shop, printing some banners and
calendars.  Those came out nicely.  Then I tested some PC Paintbrush IV Plus
supplied graphics files.  The colors matched the screens approximately.
     Keep in mind that the color-printing process used in dot matrix printers
has its limitations.  You just aren't going to get spectacular and true colors
with complex graphics.
     Why?  Well, for the same reason that a top-quality dot matrix printer
simply cannot match a laser printer or typesetter.  Secondly, the colors are
created by a ribbon containing red, yellow, blue and black strips.
    To create green for instance, the printer does two passes, one in yellow
and one in blue.  Other colors are done similarly.  This is fine for major
colors, but the overall color capabilities are limited as a result.
    I also tested the color capability using Twist & Shout, printing some text
files sideways in color.  These also looked attractive, and could be useful for
spreadsheets to emphasize certain sections.
    I next printed some sample graphics that came with GEM Artline, a
sophisticated draw program.  GEM Artline doesn't support the LQ-860, but I was
able to print the color PostScript drawings to disk.  Then I used Freedom of
Press, a PostScript interpreter, to print the drawings on the LQ-860.  These
came out quite well.
     The LQ-860 comes with a black nylon ribbon and a color ribbon.  I found
that the color ribbon wore out rather fast, and the colors tend to get smeary
after awhile, due to the multiple passes.  So you'll have to stock up on fresh
color ribbons for best results.
     An optional black film ribbon is also available.  I wasn't able to test
this but I imagine the print quality is better, as it is with a typewriter.
     For many uses, the LQ-860 will do just fine.  For extremely high quality
color output, you'll probably want to use the LQ-860 for draft use only.
     The M.S.R.P. is $949, but look for deep discounting.  There are several
optional accessories, most of which you won't really need.
     For more information, contact Epson America, Inc., 2780 Lomita Blvd.,
Torrance, CA  90505; 213-539-9140.
                                       #
     David Batterson reviews PC hardware, software and peripherals.  Contact
him via MCI Mail: 273-7218.
```
{% endraw %}

## MIRROR3.TXT

{% raw %}
```
         Review of MIRROR III - Full-Featured Communications Software
                       Copyright 1989 David W. Batterson

     Rather than covering the program as a whole, I'll touch on the new
features found in MIRROR III, version 1.0.  The three major additions are the
ACT CommPressor protocol, Chat Mode, and PRISM (PRogrammable Integrated Scripts
for MIRROR) add-in modules.
     ACT (Adaptive Computer Technologies, Inc.) CommPressor is an error
correction and compression protocol which can increase transfer speeds by up to
2.5 times.  This type of transfer is called a reliable-link.
     Chat mode allows you to split incoming and outgoing messages (while
chatting) into two windows.  The top "Remote" window is for incoming words, and
the bottom "Local" window is where you type your words of wisdom!  This feature
prevents any overwriting of each other's messages.
     PRISM is the most important addition to MIRROR III.  If you are already
familiar with MIRROR and Crosstalk XVI Script language, you'll appreciate it
even more.  WARNING: writing PRISM scripts is for experienced users only!
     With PRISM, you can create your own help screens, draw boxes, change color
attributes, and place text on MIRROR's screens.
     "Point & Dial" allows dialing by pointing to a number and pressing a
hotkey.  "FSend" is a menu-driven utility to send files.  "Host Mode" is a
junior-type BBS.
     The "Pulldown" script does what it sounds like:  creates pulldown menus
for MIRROR III commands.
     The "Dialing Directory" is similar in appearance to those used by PC-Dial
III, ProComm Plus, QMODEM, and similar communications programs.  If you don't
like the provided layout, you can customize it.
     MIRROR III retains all the other features of MIRROR II, including the
"Password Maintenance Utility" (for security), a usage log, 15 emulations, 9
protocols, an editor, several DOS commands (without exiting to DOS), background
operation, and extensive help screens.
     My overall grade is A for MIRROR III.  SoftKlone offers free technical
support.  There is also the SoftKlone Information Exchange BBS, open 24 hours
daily, for tech support, PRISM scripts, more emulations and announcements.
     MIRROR III has a suggested list of $99.  For more information, contact
SoftKlone Distributing Corp. at 327 Office Plaza Dr., Suite 100, Tallahassee,
FL 32301; (voice) 904-878-8564; FAX: 904-877-9763; BBS: 904-878-9884; MCI Mail:
289-0683; CompuServe: 76224,134; Telex: 6714280 KLON.  Wow!--now that's a
company that likes to communicate with its users; bravo!
                                     -----
     UPDATE - August 21, 1989:
     I would compare SoftKlone, with its constant upgrading of its software and
fine tech support, with another software firm:  Central Point Software ("PC
Tools Deluxe").  Both companies are really on the ball!
     I've now had the opportunity the test drive SoftKlone's MNP (Microcom
Networking Protocol) Level 5 add-in module for MIRROR III.
     This clever software solution for MNP access worked fine.  Although I
didn't find any local BBSs with MNP modems, I did use the add-in to call MCI
Mail.  MCI Mail has a dedicated line for MNP users too: 800-333-1818, and it
supports up to 4,800-bps!
     Installation of the add-in is easy: add the line ADD-IN = MNP.MAF to the
MIRROR.CFG file, if you plan to use MNP often.  Or at the Command? prompt, just
type ADDIN LOAD MNP.  To turn it off, type MNP OFF.
     The MNP reliable-link protocol, which has won out over ACT CommPressor in
the error-correction and data-compression protocol wars, can increase data
throughput about double.  Thus using MNP with a 2,400-bps modem is like using a
4,800-bps modem without it!
     When performing data transfers between your PC and another MNP user,
optimum results are achieved by using YMODEM-G, with the no-acknowledgement
option.  The MNP add-in automatically selects that option for you.
     SoftKlone sells the MNP add-in for $31.95, plus shipping.  That's a
bargain compared to the cost of most MNP modems, and you'll get that money back
through lowered long-distance bills.  So I recommend it.

David W. Batterson was formerly a BBS co-SYSOP.  He writes about the online
industry, communications software, and modems/fax boards.  Contact him via MCI
Mail: DBATTERSON.
                                       #
```
{% endraw %}

## ONTIME.TXT

{% raw %}
```
            OnTime Version 1.15 - "The Calendar That Means Business"
                         Copyright 1990 David Batterson

     OnTime is one of those miscellaneous programs that sounds great in theory,
but you wonder how many people will actually end up using it.
     Forget-Me-Not was a pop-up reminder program I reviewed sometime back.  I
haven't seen or heard much about it since.
     The average busy executive does rather well with a day planner filled with
scribbled appointments and comments.  Companies have sold umpteen millions of
them, proving their popularity.
     This doesn't mean this isn't a well-designed program, because it is.
OnTime's screens have a contemporary look, and commands are intuitive.
     There's the week-at-a-glance screen, where you can view any week that you
choose.  The Day Planner screen lets you see your day's events in hour, half-
hour or 15-minute segments.
     The lifetime calendar goes up to 2079, which should be fine for everyone
but George Burns.  Events can be entered years into the future if you want.
You can be alerted of appointments through the Alarm feature, even while
running another program.
     Recurring events are no problem either.  OnTime works with daily, weekly,
biweekly, monthly, quarterly, semi-yearly and yearly events.  For example, if
your weekly sales meeting is Tuesday at 1 P.M., you can do one entry and then
all forthcoming days/times are marked.
     The calendar printout can cover up to nine weeks.  OnTime uses a special
format for HP LaserJets and compatibles.  These calendar printouts fold up for
pocket-size convenience too.
     Another nice touch is the Quick Look-up feature.  By using a name or
keyword, you can find the appointment you're looking for.  Rescheduling
appointments is accomplished easily.
     You can run OnTime in stand alone or memory resident mode.  As a TSR
program, it requires only 15K.
     So there you have it.  You know what it does now, so the decision on
whether to buy it is up to YOU.
     OnTime Ver. 1.15 requires DOS 2.1 or higher (3.1 or higher for memory
resident use) and 320K RAM.  The price has been reduced from the original
$69.95, so check with the company or a software dealer for current pricing.
     For more information, contact Campbell Services Inc., 21700 Northwestern
Highway, Suite 1070, Southfield, MI  48075; 313-559-5955.
                                       #
     David Batterson still keeps track of appointments with an old-fashioned
pocket calendar.  Send comments via MCI Mail: DBATTERSON.
```
{% endraw %}

## PAINTBR.TXT

{% raw %}
```
                             PC Paintbrush IV Plus
                         Copyright 1990 David Batterson

     Like other software companies that are doing well in today's competitive
marketplace, ZSoft continues to improve its products by leaps and bounds.
I recently spent several hours testing out their new PC Paintbrush IV Plus, the
latest member of the PC Paintbrush family.
     PC Paintbrush IV Plus conforms to the CUA (Common User Access) interface,
with pull-down menus and dialog boxes.  This gives it a look similar to
Windows, WITHOUT the buggy problems many have experienced with Windows.
     Other new features include three levels of online help, as well as a
constantly changing information line.  There are multi-levels of zoom-in and
zoom-out.  It supports .TIF as well as .PCX files.
     The seven special effects include blend, smudge, gradient, tiling, tint,
brightness and contrast.  These can be used for sections of a graphic image, or
can be applied to the overall image.
     You can draw all kinds of lines, curves and geometric shapes.  Editing
capabilities include rotate, shrink and grow.  You may also customize the
screen and palette style sheets.  A new eye-dropper allows for precise editing
of your color images.
     There are both bitmap and outline fonts.  Effects such as outlining,
shadows and gradient are easily accomplished.  For systems with no EMS or
extended memory, PC Paintbrush IV Plus can still handle large images through
disk swapping.
     I don't own a scanner, so wasn't able to test the new scanner commands.
However, you can fully control your scanner from within PC Paintbrush IV Plus.
This means you can choose resolution, halftones, page size, positive/negative,
scanning area, and rescaling (25 to 400 percent).
     The FRIEZE screen capture program now captures in VGA mode.  ZSoft also
offers an optional version of FRIEZE for Super VGA (640x480, 256 colors or
800x600, 16 colors).  There are several utility programs.  One translates
your HP soft fonts into XFR bitmap fonts.  Another converts gray scale images
into b&w images for use with Ventura Publisher.
     While most users will use PC Paintbrush IV Plus for DTP purposes, others
will find it useful for slide shows.  That's because there's a new service
bureau which turns any .PCX files into high resolution slides for $8 each.
     PC Paintbrush IV Plus requires a hard drive, DOS 3.0 or higher, and a
drawing device (mouse or drawing tablet).  Expanded or extended memory is
highly recommended.  Virtually all display adapters, printers and scanners are
supported, so "no worries mate."  All in all, quite a nice graphics package.
     Suggested list price is $199.  Owners of PC Paintbrush IV may upgrade for
$69; owners of PC Paintbrush Plus pay $50 for the upgrade.
     For more information on PC Paintbrush IV Plus, contact ZSoft Corporation,
450 Franklin Road, Suite 100, Marietta, GA  30067; 404-428-0008.  For more
information on the slide service, contact Accent Presentations, Inc., 12780
High Bluff Drive, Suite 250, San Diego, CA  92130; 800-222-2592.
                                       #
     David Batterson enjoys playing around with graphics software when he's
supposed to be working!  Contact him via MCI Mail: DBATTERSON.
```
{% endraw %}

## PCCOM.TXT

{% raw %}
```
                   PC COMplete 4.1 - Automated E-mail package
                         Copyright 1990 David Batterson

     E-mail usage continues to grow at a remarkable rate, particularly due to
surging numbers of LANs worldwide.
     Managing the flow of mail and files to and from all these e-mail addresses
can be a real bother.  Lotus gave it a shot a while back when they (in
cooperation with MCI Mail) created Lotus Express.
     While a good idea, Lotus Express is a memory-hog, and has no EMS support.
Its interface/command structure is equally poor.  I don't recommend using it.
     There's a new player, though, called PC COMplete, and Ver. 4.1 was
recently released.  It's more than just a communications program with log-on
scripts.  Any decent comm program will do that.
     PC COMplete is designed specifically for e-mail, rather than an all-
purpose modem program you'd use for calling BBSs.  PC COMplete only offers
plain vanilla XMODEM, no YMODEM and ZMODEM (the current fave of BBS callers).
     But that's probably OK for the purpose it was designed for.  While you can
use it as a interactive terminal program to call CompuServe, MCI Mail, and many
other mail services, its fundamental value is to post, grab and run!
     Busy executives, office staff, salespersons, and other heavy e-mail users
don't want to waste time checking their e-mail.  (I've personally experienced
leaving MCI Mail messages for individuals, and having them fail to retrieve
the messages for weeks or even months.)
     I wrote a script for MIRROR III, so I can type one letter from my C:\
prompt, and capture any messages in my MCI Mail box.  I could amend the script
so it would also send any messages I had prepared previously.
     PC COMplete does this for you and more.  No scripts are necessary either,
just some configuration time.  Besides good ol' MCI Mail, there's support of
HPDesk, OnTyme, SprintMail, CompuServe's EasyPlex mail, Dialcom, UNIX Mail, VMS
Mail, Envoy 100, and direct PC to PC (with both using PC COMplete).
     Many off-net mail systems are supported through Novell's Message Handling
Service (MHS) for LAN messaging.  These include IBM's PROFS, All-in-1, Wang
OFFICE, EasyLink (recently purchased by AT&T) and X.400 systems.  There are
also MHS gateways for FAX and Telex (that old dinosaur) usage.
     I'm not a LAN user so didn't test that aspect of PC COMplete.  I had to
limit my evaluation to MCI Mail messages, since that's the only e-mail service
I use.  Nope, there's no support of PRODIGY.
     Some users will like PC COMplete's interface, while others may not.  It's
function-key based for the most part.  If you're comfortable using the F keys a
lot, you'll feel right at home here.
     This latest version offers new shortcut keys, such as <Alt>-M to start an
automated mail session, or <Alt>-S to send MHS mail.
     However, program designers Michael Geary and Richard Moore decided (for
whatever reason) to go against the grain.  PC COMplete doesn't permit the usual
pressing of <Esc> to exit to previous menus.  I found that a bit irritating.
     After preparing a message in the program's editor, you must press <F2> to
return to the main menu.  I kept hitting <Esc> instead of <F2>.  (How about a
re-do, guys?)
     You can run PC COMplete as stand-alone or as a TSR.  However, the TSR is
for LAN use ONLY, not for direct modem access.  So it won't stay in memory and
dail up MCI Mail repeatedly (unless you are using a LAN gateway to MCI Mail).
     Most users of PC COMplete use it in a LAN system, so this is forgivable.
It still beats the socks off that second-rate Lotus Express.
     You may send attachments with messages, i.e., binary files, such as snappy
spreadsheet stuff, dandy dBASE data, and wonderful WordPerfect words.  For MCI
Mail attachments, however, you'll have to use a LAN gateway as there is no
direct support of the X.PC protocol (required of Lotus Express users).
     Not that many MCI Mail subscribers are attaching files anyway.  But
there's a way to do it if you need to.
     Heavy e-mail folks should be happy with this program, especially you
LANatics out there.  It'll save you time and trouble.
     PC COMplete lists for $229.  For information, contact Transend Corp., 884
Portola Road, Portola Valley, CA  94028; 415-851-3402; MCI Mail: 308-1736.
                                       #
     David Batterson enjoys receiving e-mail.  Send some to him via MCI Mail:
273-7218.
```
{% endraw %}

## PCGLOBE.TXT

{% raw %}
```
                 PC GLOBE 3.0 and PC USA - Computerized Atlases
                         Copyright 1990 David Batterson

     Not long ago, a survey revealed that an alarming number of high school
seniors could not locate well-known countries on a globe.  Some of them
couldn't even find the United States!
     The level of geography knowledge among young people today is shocking.
That's why two new software products are not only exciting and fun, but are
important tools for our educational improvement.
     They are PC GLOBE 3.0 and PC USA, both easy-to-use computerized atlases
that should help reverse this trend toward geographical ignorance.  If kids
spend less time with Nintendo and more time with software like PC GLOBE, they
will be better prepared for their futures!
     PC GLOBE provides up-to-date maps, graphics and data on 177 countries.
Using the pull-down menus, you pick a continent, region or individual country.
Or with a mouse, you simply point-and-shoot to get maps and data on the
specific country you want to study.
     There's a slim manual to get you started, but you really don't need it.
This software was designed to take the chore out of accessing information, and
make learning enjoyable.
     Soon you'll be learning about GNP (gross national product) figures in
France, the government leaders of Australia, major cities in Brazil, or the top
agricultural product of Canada.  Other information includes such topics as
population, ethnic groups, religions, telephone area codes, trade data,
political parties and tourist attractions.
     Country maps indicate major cities, rivers, mountains and other
geographical features.  You can create customized bar charts instantly, which
compare the various data among different countries.  These comparisons can also
be displayed via colorful maps.
     Don't get the idea that PC GLOBE is for schools and younger users only.
It's also useful for any company which does business out of the country, and
needs accurate, quick information.  PC GLOBE is currently used by Fortune 500
companies, government agencies, high schools and colleges, and major travel
agencies.
     Charts and maps may be saved in the .PCX (PC Paintbrush) format for use in
desktop publishing and graphics programs.  You may also export country data to
an ASCII or Lotus 1-2-3 file.
     Other utilities let you calculate distances between any two cities,
convert any two currencies, see the local time of any country, view text files,
and change screen colors.
     With the recent upheaval in the Eastern Bloc countries, Panama and other
areas, some political information is no longer valid.  Not to worry, since
regular updates will be available.
     PC USA is the newer program of the two, and follows the same format and
command structure.  It covers the 50 states, District of Columbia and Puerto
Rico.  Included utilities are also about the same.
     As with PC GLOBE, you get high-quality, detailed maps, along with lucid
graphics and extensive data.  The information is in diverse categories similar
to the countries, including population trends, education statistics, history,
crime rates, retail sales, incomes, tourism, and so forth.  Bar charts can
display the top 10 and bottom 10 states for any category.
     You can easily find locations which match area codes or ZIP codes you
enter, and find distances between cities.  There's a time zone map too.
     PC GLOBE 3.0 and PC USA require 512K RAM minimum, DOS 2.0 or higher, and
work with most graphics adaptors.  A Microsoft-compatible mouse is recommended.
They support most popular printers; additional printer drivers are available.
     I can recommend both PC GLOBE 3.0 and PC USA, as their high performance
and friendliness measure up to their ads.  Suggested list price for each is
$69.95; shop around for best street price.  A demo disk is available for $3
each.
     For information or orders, contact PC Globe, Inc., 4700 S. McClintock,
Tempe, AZ  85282; 800-255-2789 (orders); 602-730-9000; FAX: 602-968-7196.
                                       #
     David Batterson writes about various PC applications.  Contact him via MCI
Mail: DBATTERSON.
```
{% endraw %}

## PCKWIK.TXT

{% raw %}
```
              The PC-Kwik Power Pak (system enhancement utilities)
                         Copyright 1989 David Batterson


     There are many utility programs out there, both commercial and shareware,
to help speed up your system.  All of them work approximately the same, with
varying degrees of efficiency.  Some can be a bit tricky to implement.
     Multisoft Corp. has put together an impressive package of integrated
programs that not only provide high performance, but you don't have to be a
"techie" to install them and get up to speed.  That's what fun computing is all
about--increased productivity with less hassles.
     The PC-Kwik Power Pak incorporates five utility programs, designed to be
used with PCs, XTs, 286s and 386s.  The main program is Super PC-Kwik Disk
Accelerator, Version 3.08, a disk cache.  This program (which can be purchased
separately for $79.95 list price) features advanced disk reading/writing, and
can support a RAM-based disk cache up to 16 MB!
     Along with the cache are a print spooler, RAM-disk, screen accelerator and
keyboard accelerator.  Whether you use just one, or more of these, you can
achieve faster performance with your PC.
     A good indication this is a superior product is that top PC manufacturers
use Super PC-Kwik and other Multisoft programs.  I know that Art Lazere,
president of Northgate Computer Systems, sets high standards and does not
settle for anything less than excellence.  Northgate, along with AST Research,
ALR, Everex, Dell H-P, Iomega (Bernoulli boxes), Mitsubishi, Toshiba and many
others bundle the PC-Kwik technology with their products.
     Super PC-Kwik has a "smart" installation program which automatically
locates the cache in conventional, expanded or extended memory.  Super PC-Kwik
subsequently manages that RAM for the other Power Pak utilities.  It serves as
the RAM "director," parceling out RAM when and where needed.
     For instance, the PC-Kwik Print Spooler will borrow RAM while spooling
print data.  When printing is done, that RAM returns to the cache.  The same
process works with RAM disks.  They use the cache memory dynamically, grabbing
RAM as needed to store files; memory is returned to Super PC-Kwik when RAM
files are zapped.
     The PC-Kwik RAM Disk program creates RAM disks up to 16 megabytes.  A RAM
disk is particularly useful with programs like Lotus 1-2-3 or dBASE III, where
loading increased speed is desired.  It's also good for programs that make use
of a temporary file during processing, such as some DTP and graphics software.
     RAM disks and cache programs increase system quickness.  However, after
installing the PC-Kwik Screen Accelerator, you immediately get a visual
reference of increased velocity.  Do a DIR or TYPE, and watch the lines zip by!
Included is a scroll-back buffer called ReView.
     ReView borrows RAM from Super PC-Kwik; the default is 16K (four screens)
but this can be increased.  Using the cache's memory, ReView lets you see up to
4,000 previous screens.  Wow!
     Bear in mind that the Screen Accelerator affects text output only; it
won't increase output to the screen in graphics video mode.  Screen displays
will increase 30 to 100%; this can be adjusted if you find it TOO fast.
     Another speeder-upper is the Keyboard Accelerator.  It lets you set the
acceleration rate and the repeat rate--up to 100 characters per second (cps),
versus the usual DOS speed of nine cps.
     You can choose which keys you want to speed up.  Most users want faster
cursor keys, while using their word processor or spreadsheet programs.  But you
might also want to speed up the backspace, underline, delete and period, while
leaving the other keys alone.  Power Pak Keyboard Accelerator lets you do it.
     PC-Kwik Power Pak is designed for all users--from low-end, through
intermediate, to power users.  The latter will want to customize it for most
efficient use, as the number of options is amazing.
     Now if we just had a PC-Kwik Power Pak to plug into our brains, we would
really have something!  Maybe Multisoft will it ready by the year 2000!
     Super PC-Kwik requires 64K memory; EMS or extended memory is recommended
for top performance.  It supports LIM EMS (Lotus/Intel/Microsoft Expanded
Memory Specifications) 3.2 and 4.0.  Suggested list price is $129.95.
     For more information, contact Multisoft Corporation, 15100 S.W. Koll
Parkway, Suite L, Beaverton, OR  97006; 800-288-KWIK (sales), 503-644-5644,
FAX: 503-646-8267.
                                       #
     David Batterson says that you CAN be "too rich or too thin" but a PC
"can't be TOO quick."  Contact him speedily via MCI Mail: DBATTERSON
```
{% endraw %}

## PCTOOLS.TXT

{% raw %}
```
                          PC TOOLS DELUXE, Version 6.0
         Data Recovery, Desktop Manager, Hard Disk Backup and DOS Shell
                       Copyright 1990 David W. Batterson

     PC Tools Deluxe, Version 6.0, is the latest incarnation of this best-
selling utility package, which is the best value available, bar none.  Yes,
the new version has been greatly improved, thanks to the programming wizards at
Central Point Software.  These guys kick butt and take no prisoners!
     No matter how good, no software program is EVER finished.  All programs
can be improved, and should be if the company expects to remain competitive.
     That has been Central Point's philosophy since they first came out with
COPY II for Apple II computers.  Just about every //c or IIe owner used that
program to make copies of protected programs.  I had a copy too.
     PC Tools Deluxe Version 6.0 is once again an incredible value, when you
see how much it offers.  It lists for $149, but is heavily discounted, so often
has the lowest street price of comparable products.  It's $35 for the upgrade
from earlier versions.
     Besides the Compress program to optimize your disk, and PC Backup, which
backs up your hard disk in a remarkably short time, there is the improved PC
Cache to speed up hard drive access.  The Mirror program protects against
accidental formatting of your hard disk, while PC Secure is an encrypt/decrypt
and compression/expansion utility.
     While my hard disk may not have needed optimizing, I did it anyway for
test purposes.  The Compress program is very simple to use, and fast.  Its Disk
Analysis mode indicated I had only 1 percent fragmentation, but it gave me the
message: "Compress Recommended."
     Not long ago, my hard disk crashed, and I didn't have it backed up.  Sure,
I had all the original software, but I was forced to reinstall and reconfigure
all those programs again.  It took a long time.  Plus I lost a few text files
forever.
     It all could have been avoided by backing up to disk.  I've learned my
lesson, and now I do regular backups.  Since PC Tools provides a lucid backup
program, you can't say that it's too time-consuming.  Take the time!  It takes
me only about 15 minutes with PC Backup, depending on how much I've added to
and deleted from the hard disk.
     Now there's support for tape drives, including those from Mountain,
Colorado Memory, Compaq or IBM.  Another new addition is incremental/appended
backups.
     PC Tools Deluxe also offers an improved Desktop:  notepad with spell-
checker, appointment scheduler, dBASE III/IV-compatible database, three
calculators, communications program with background file transfers and enhanced
script-file handling.  Also, you'll find a macro editor, outliner, clipboard,
and CAS-compatible fax board (such as Intel's Connection Co-Processor) support,
to send/receive faxes anytime.
     But hold on, "thar's more."  The DOS Shell will make you zap the MS-DOS
4.1 Shell from your hard drive.  Its new features include being able to view
over 30 different types of files, such as QUATTRO, PC Paintbrush (.PCX),
R:Base, XyWrite and PKZIP.
     You can also locate files (by name or content), and customize function
keys for quicker commands.  There's a DOS command line too, if you want it, at
the menu's bottom.  A version of Traveling Software's LapLink is now bundled
too, for laptop file transfers.
     Another new feature, DiskFix, is a disk-repair program that works
automatically--it's idiot proof!  It does far more than the CHKDSK/F command,
and does its work fast too.
     PC Tools Deluxe Ver. 6.0 features pull-down menus, movable and resizable
windows, and has full mouse support, including the right mouse button too.  You
can run it in pop-up TSR mode or from the DOS prompt.  It supports LANs,
including Novell NetWare and IBM Token Ring.
     At the bottom of PC Shell screen, are the Status Line, Command Bar and
Message Bar.  These make using PC Shell easier and faster than ever.  For
instance, the Zoom command expands a file window to fill the screen.
     Ver. 6.0 conforms to CUA/SAA (Common User Access/Systems Application
Architecture) standards for the '90s.  It comes with three professionally-
written manuals, each containing lots of screen shots.  Context-sensitive help
is also available online by pressing <F1>.
     PC Tools Deluxe Ver. 6.0 deserves an A+ rating.  The company is dedicated
to quality, and has done 'the right thing' again.  For more information,
contact Central Point Software Inc., 15220 N.W. Greenbrier Parkway, #200,
Beaverton, OR  97006-5764; 503-690-8090, FAX: 503-690-8083, BBS: 503-690-6650.
                                       #
     David Batterson writes articles and reviews for computer and business
publications.  Contact him via MCI MAIL: DBATTERSON.
```
{% endraw %}

## PFSPUB.TXT

{% raw %}
```
                        PFS:First Publisher, Version 3.0
                         Copyright 1990 David Batterson

     Many PC users (including me) got their first DTP experience with PFS:First
Publisher.  It was a low-end product, but was fine for simple newsletters,
signs and flyers.
     The latest upgrade is Version 3.0, and it's gone through quite a welcome
changeover since Ver. 2.1.  One of the major complaints about older versions
was the poor resolution of fonts and clip art (72 dpi).
     Ver. 3.0 has moved up to the big-league world of 300 dpi now, and it's
long overdue.  As far as supplied typefaces, they've outdone the competition
like Publish It! and Finesse (also reviewed in PC REVIEWS).
     It includes the scalable (9 to 70 points) high-resolution Bitstream
typefaces Swiss and Dutch in the usual styles:  Roman, Bold, Italic and Bold
Italic.  [Quick trivia question:  who designed italic?.....it was Aldus
Manutius in 1501 A.D.]
     There are five additional Bitstream fixed-point typefaces: Amerigo,
Zurich, Goudy, Broadway and Cloister Black in different sizes, 22 in all.
These also output up to 300 dpi, depending on your printer.
     To really speed up font generation ("up to five times faster than with
competing technologies"), Ver. 3.0 uses the Bitstream Speedo method.  I
definitely noticed the improvement, especially when building the larger
(36, 48, 60) Swiss and Dutch sizes.  These usually take calendar pages!
     Remember when you had to exit to DOS to add/delete fonts?  Now it's right
in the Font pull-down menu.  That's a thoughtful addition.
     While Ver. 3.0 retains the old 72 dpi clip art (now called standard), it
now supports the huge amount of 300 dpi images available.  The 21 high-res
images provided are from Metro ImageBase.  These can be resized, flipped,
rotated, cropped and inverted.
     You can use scanned images too, or graphics created by such programs as PC
Paintbrush and Microsoft Windows Paint.  As long as the images are saved in the
.TIF, .PCX, .PIC or .MSP formats, you can use them.
     Preparing layouts was always a hassle in PFS:First Publisher.  Now they
have cleaned up their act by providing the Layout Gallery, 21 custom-designed
layouts.  These can be further refined by changing the column lengths and
widths to suit your requirements.
     You can import text in most popular WP formats, including WordStar 5.0,
WordPerfect 5.0, Microsoft Word 5.0, Professional Write, MultiMate, Wang PC,
and several others.
     I was happy to see they've now included landscape printing.  Landscape and
portrait pages can be combined in your publication, if you want.  Legal and A4
paper sizes are now supported.
     There's a Customize section in the File pull-down menu.  Here you can set
the units of measurement to inches or centimeters.  There are three color
display sets (I preferred the blue background).  You can also set paths for
your publication, text and art files.
     You can now draw circles and ovals (not possible previously).  Context-
sensitive help has been added, and there's increased printer support.
     A previous feature, the SNAPSHOT screen capture program, needs revamping.
The problem is that it still doesn't save the entire screen, but only what's
inside a flashing box.
     System requirements: 512K RAM minimum; hard drive and mouse highly
recommended (running it without both is unproductive); and Hercules, CGA, EGA
or VGA graphics card.
     PFS:First Publisher Ver. 3.0 has a suggested list price of $149, but
you'll pay less from discounters.  Owners of PFS:First Publisher 1.0, 2.0 or
2.1 can upgrade for $45.  Those who purchased Ver. 2.1 after February 19, 1990,
cam get a FREE upgrade with proof of purchase.
     For more information, contact Software Publishing Corp., 1901 Landings
Drive, P. O. Box 7210, Mountain View, CA 94039-7210; 415-962-8910.
                                       #
     David Batterson writes about various PC applications.  Contact him via MCI
Mail: DBATTERSON.
```
{% endraw %}

## POPDROP.TXT

{% raw %}
```
                     PopDrop Plus - RAM Management Utility
                       Copyright 1989 David W. Batterson

     Most of us have had difficulties at one time or another with TSR
(Terminate and Stay Resident) programs like SideKick, Tracker, print spoolers,
and other pop-up programs.  Unless installed in the proper order, TSRs often
conflict with one another.  Lotus Express is a typical example.
     Invariably, you have to reboot whenever your memory is used up, or if a
TSR is wreaking havoc with some other loaded software.  It's more than just a
little irritating!  It makes you want to do away with RAM-resident programs
altogether.
     PopDrop Plus is the upgrade from PopDrop, which I reviewed previously. 
PopDrop filled a real need (like teaching ethics to Wall St. brokers).
     I regularly use a separate thesaurus with my word processor.  There are
public domain and shareware utility programs which allow you to remove TSRs from
memory.  The problem is many of them remove ALL memory-resident programs, not
just the last one you loaded (an exception is the program Mark-Release).
     How does PopDrop do it?  It uses a system of layers.  Think of it like a
group of boxes, stacked on palettes.  The boxes represent your loaded software
and the palettes represent PopDrop.
     Here's an illustration, similar to what's in the manual:

            ┌─────────────────────┐
            │    Word Processor   │
            └─────────────────────┘
            ┌─────────────────────┐
            │   Spell Checker     │
            └─────────────────────┘
            ███████████████████████   PopDrop Layer 2
            ┌─────────────────────┐
            │   Keyboard Macro    │
            └─────────────────────┘
            ┌─────────────────────┐
            │                     │
            │     RAM Disk        │
            └─────────────────────┘
            ███████████████████████  PopDrop Layer 1
            ┌─────────────────────┐
            │                     │
            │        DOS          │
            └─────────────────────┘

     By setting up more than one layer [you can have up to 16], you have the
option of removing some TSR programs while leaving others alone.
     PopDrop works either from a menu, or manually from the DOS prompt. The
best way is to set up batch files to do the work.
     In the illustration above, after finishing with your word processing, you
would type:
     C:> POPDROP
     That removes any TSR software on the highest level, in this case Layer 2. 
So that would zap the Word Processor and Spell Checker from memory.
     You can also add or remove a layer by using the commands:
     C:> POPDROP UP   (or)   POPDROP DOWN
     The box illustration is not what you'll see on screen when you need to see
a report of what's happening.  You use POPDROP VIEW for this.
     This provides the menu command display.  Here you have a full array of
commands.  Plus there's a memory report, specifying the memory used on each
layer, and the total memory free at the top of the screen.
     The new part of PopDrop Plus is the PopLoad program which helps fight
"RAM-Cram."  PopLoad is an expanded memory manager which breaks the 640K DOS
barrier, allowing you to load TSRs into expanded memory, even if they weren't
designed for it.
     You create a list, which consists of the path, filename and hot key for
your TSRs (up to 50).  You press a hot key, and the selected TSR pops up.  By
putting TSRs in expanded memory, you keep your regular 640K free for regular
applications.
     PopLoad negates having to earmark high memory to your TSRs, as it loads
them from disk.  This eliminates the need to create and save a memory image
file.  Also, you can still use expanded memory for your applications.
     PopLoad requires any PC with expanded memory board (or a 386), and a
LIM/EMS 4.0 driver; it uses only 27K of conventional memory itself.  It will
NOT work with software EMS simulators.  Included are Intel LIM 4.0 drivers for
the AboveBoard expanded memory boards.
     Popdop Plus is easy to use, although new users will need help if they wish
to use batch files.  There are sample batch files in the manual, but these can
be confusing for the uninitiated.
     PopDrop Plus has a suggested list of $99.95.  An upgrade from PopDrop
costs $29.
     For information, contact BLOC Publishing Corp., 800 S.W. 37th Ave., Suite
765, Coral Gables, FL 33134; 800-888-2562, 305-445-0903; FAX: 305- 444-5010.
                                       #
   David W. Batterson is an independent computer journalist/reviewer. As he
gets older, he needs all the memory improvement he can get!  Contact him via
MCI Mail: DBATTERSON with your comments.
```
{% endraw %}

## PRNTRITE.TXT

{% raw %}
```
                PrintRite Ver 1.3 - Professional Print Spooling
                         Copyright 1990 David Batterson

     Print spoolers have been around for many years, and vary widely in
effectiveness and features.  They consist of catch-up software spoolers,
multi-feature software spoolers, network print spoolers, and professional
print spoolers.
     One of the newest professional print spoolers is PrintRite Ver. 1.3 from
BLOC Publishing.  PrintRite is a TSR (Terminate and Stay Resident) spooler that
uses the mainframe technology called time slicing--this is simply a method of
multitasking to give you back control of your PC after spooling.
     PrintRite requires 50K RAM.  If you have PopDrop Plus (reviewed in PC
REVIEWS), you can load PrintRite into expanded memory, lowering the
conventional RAM usage to 27K.
     Once loaded, PrintRite intercepts all printed output, compresses it,
writes the file to disk, and then the output goes to the printer.  You can
then return to your application, and continue working.
     PrintRite doesn't cause hard disk fragmentation, unlike some cheaper
spooler programs which spool output to one huge file.  It also groups print
jobs of a similar type (word processing, graphics, spreadsheets, etc.)
together.
     You may also view print jobs onscreen before deciding whether you want
a hard copy.  This can be useful if you want to look at something briefly
and then toss it, like a Lotus 1-2-3 file.  Or laptop users who don't have a
printer can see how the printed output will look.
     You can use up to five printers with PrintRite; more than 30 print
drivers are included.  A useful feature is the ability to do sideways
printing automatically.
      NOTE: PrintRite works with DESQview [you must load PrintRite before
DESQview], but not with Microsoft Windows.  You should also avoid graphics
programs such as AutoCAD, Microsoft Word in graphics mode, and Framework.
     The pop-up menu provides a full range of helpful commands, such as
number of copies, add or delete items from the print queue, pause or restart
a print job, change the printer order, and view a text file.
     The pull-down menus display the print job status, total number of pages
to be printed, spool file name, date/time for each queue entry, and so
forth.  PrintRite supports laser fonts, and supports font changes between
separate print jobs too.
     It will automatically strip characters not supported by your printer,
and convert characters to different laser printer symbol sets.  PrintRite
supports Novell networks; "other network environments should also work,"
according to BLOC.
     There are even more features that I haven't mentioned.  All in all,
this is quite a slick spooler.  The suggested list price is $99.  For more
information, contact BLOC Publishing Corp., 800 Southwest 37th Avenue, Suite
765, Coral Gables, FL 33134; 800-888-2562; 305-445-0903.
                                       #
     David Batterson does a lot of PC writing and printing.  Contact him via
MCI Mail: DBATTERSON.
```
{% endraw %}

## PRNTSHOP.TXT

{% raw %}
```
                The New Print Shop (Print Shop's Metamorphosis)
                         Copyright 1989 David Batterson

     Quick!--what's the most successful graphics program in computer history?
PC Paintbrush, Harvard Graphics, or The Newsroom?  Nope.  It's The Print Shop,
from Broderbund.
     Virtually every Apple owner has used Print Shop.  It later migrated to the
PC side, and was soon followed by The Print Shop Companion.
     I liked Print Shop too, using it mainly for cards and banners.  The
graphics were crudely-drawn and fonts had a case of terminal "jaggies," but it
sure touched a positive nerve with computer users.  Broderbund says Print Shop
has sold over a million copies.
     The New Print Shop is the latest incarnation, and it's quite an impressive
upgrade.  The New Print Shop--we'll use the "NEWPS" nickname from now on--
retains its ease-of-use which helped make it so popular, while adding a
noteworthy lineup of improvements.
     There are ten new fonts, of a wide variety.  You can use your old Print
Shop fonts, by converting them with an included conversion program.
     NEWPS comes with all-new, more refined, high resolution graphics.  They
look more like the clip art you find with popular DTP and paint programs.
There are also larger graphics, called full panels.
     Full panels come in vertical, horizontal, and letterhead formats.
Vertical full panels are used in tall signs, vertical banners, and sidefold
cards.  Horizontal full panels are for wide signs, topfold cards, and
horizontal banners.
     Letterhead full panels are used for letterheads, obviously, and also for
calendar headings and footings.  They are very artistic and eye-catching.
     NEWPS offers new borders--thin and wide.  Wide borders, with names like
CLIPBOARD and COLUMNS, look like large, decorative picture frames.
     Borders and graphics from the earlier Print Shop can likewise be converted
for use by NEWPS.  The graphics, however, will not look as impressive, as they
are low-resolution.
     Extra large calendars, and giant posters (up to 6 1/2 by 9 feet) can be
created with NEWPS.  All projects offer additional options through the
Customize Menu, such as Stretch/Shrink, Pick Color, and Flip.
     Another new feature is the Name File.  This is a master file containing
names which are inserted into NEWPS projects.  It works like the mail merge
function of your word processor.  You choose full names, or first names only.
     The graphics-layout capability for your designs has been increased
dramatically.  Precise placement of fonts and graphics can be accomplished.
You may also use different graphics and fonts on the same page.
     NEWPS supports most new printers, including HP LaserJets (and 100%
compatibles), DeskJets, Apple ImageWriter II, Epson LQ series, Citizen Tribute
series, Alps Allegro 24, and many more.
     The suggested retail price is $59.95, but it'll be heavily discounted by
many software dealers.  An upgrade from the old Print Shop costs $20.
     Three new Graphics Libraries (Sampler Edition, Party Edition and School &
Business Edition) each contain over 100 graphics, borders and fonts.  They
retail for $34.95 each.
     All in all, The New Print Shop is top-drawer, and looks like it'll be a
monster hit.  Too bad I don't own some stock in Broderbund!
     For information, contact Broderbund Software, Inc., 17 Paul Drive, San
Rafael, CA 94903-2101; 415-492-3200 (info), 800-999-3256 (credit card orders).
                                       #
     David Batterson is an old Print Shop user from his Apple //c days.
Contact him via MCI Mail: DBATTERSON.
 
```
{% endraw %}

## PRODIGY.TXT

{% raw %}
```
                  PRODIGY - The "Interactive Personal Service"
                         Copyright 1990 David Batterson

     PRODIGY has been around a couple of years, but I'm just now getting around
to reviewing it.  I had read articles and reviews, of course, and didn't think
I would care much for it.
     PRODIGY is unique in its own right.  One main difference is that it is
advertiser-supported, not user-supported like CompuServe.  Another difference
is that it is very graphics-intensive.
     I haven't seen what the graphics display looks like on a Mac.  But even
with an EGA display, the graphics are very colorful and imaginative.  With a
CGA or Hercules graphics card, the display is monochrome.
     (NOTE: the PRODIGY software doesn't feature a VGA driver at this time, so
it reverts to EGA.  The software upgrade due out sometime this year will
support 640 x 480 VGA and other modes.)
     The features found within PRODIGY duplicate much of what you find on
CompuServe, GEnie, DELPHI, and the other online services.  There's EAASY SABRE,
for homing in on the best airline fares and booking your seats.  You can
reserve hotel rooms or rental cars through the Service PLUS travel agency.
     Of course, you can shop for all kinds of products: computers, software,
sweaters and sneakers, books, CDs, videos, and lots more through dozens of
online merchants.  You can also do online grocery shopping (in major cities).
     Online merchants include J.C. Penney, Pepperidge Farm, Metropolitan Museum
of Art, Sears, The Price of His Toys, Books on Tape, Spinnaker Software, Casio,
Gumps, Spiegel, and many other companies.  More are coming online according to
PRODIGY customer service.
     There's online banking from different banks according to your geographical
location.  Banks, such as Wells Fargo which I checked out, mail information or
you can open a account while online, and also sign up for the computerized
banking as well.
     An online discount brokerage service serves stock market buffs, and stock
quotes come from Dow Jones News/Retrieval, on a minimum 15-minute delay basis.
     The online news is adequate, sort of like CNN's Headline News in text
form.  It's broken down in various categories, such as regional, area,
business, company, health, PC, movie, and so forth.  When you first log on, you
see a teaser news headline, plus highlights of other sections.
     Consumer Reports offers a database of articles, information and ratings on
hundreds of various products.  They offer a section on product recalls, for
autos and other products.
     Among the more popular features are the various SIGs, which PRODIGY calls
clubs.  There's the Computer Club (hardware, software, peripherals, etc.), Arts
Club (films, TV, books, photography, music, fine art, etc.), a Food and Wine
Club (guess what they cover?), Travel Club, and some others.
     Each club has its PRODIGY experts, such as computer writer Larry Magid,
movie critic Gene Siskel and Hollywood columnist Marilyn Beck.  They not only
write news items, but also are available on the bulletin boards to answer
questions from users.  They only respond to selected questions, however.
     Naturally, there's an e-mail section too.  Just like on a BBS, you can
respond to a bulletin board message by posting it publicly, or send it as
private mail.  E-mail must be composed online, however, as you cannot upload
text (or any other) files.  Likewise, you can print mail, but not save to disk
at this time.  I would assume this capability will be added down the line.
     PRODIGY's text display is enlarged, like the old APPLE II 40-column
display.  It takes a bit getting used to, but isn't objectionable.  However, it
means that you must scroll a lot to see more information.  The number of pages
for e-mail messages is limited to six pages.  But smaller text size is under
consideration by the PRODIGY programmers.
    On PRODIGY, there is continuous monitoring of public messages, so anything
of a questionable nature should be sent as private mail.  There have been some
complaints in the About Prodigy Bulletin Board section (where ideas, questions
and gripes are offered) about too much censorship.
     One has to remember that this is a different forum than a BBS, just as
TIME magazine is different from the Los Angeles Reader.  Obviously, there are
different standards for language and subject matter, according to the medium.
I didn't find any fault with this, but some users do.
     You have to remember that major corporations are actually footing the bill
here, to pay for their online commercials and shopping services.  (PRODIGY is a
partnership between IBM and Sears.)  Let's look at the ads while we're on the
subject.
     Teaser ads are displayed constantly in the lower part of the screen.
These advertisers also offer coupons, brochures and special offers.  You get
more details on the goods and services by using the Look command.  You then
return to the section you were in with the Zip command.
     Right now there are 400,000 + individual members.  Family members may also
be added, so they can have individual mailboxes.  The service is still
reportedly losing money; it has cost $millions to launch and keep afloat.
     When I first installed the software, it indicated it would work with COM1
or COM2 ports only!  However, a call to customer service brought a patch in the
mail, using DEBUG to make the change in the software.  It worked just fine.
     After quite a few hours online, I must admit I found it rather enjoyable,
informative, addictive, and a good value for the flat monthly rate of $9.95.
     Overall, I do recommend PRODIGY.  It's easy enough for computer novices,
but also attracts mid-level and power users.  A minor drawback is that you must
enter your ID number and password manually every time you call.
     Suggested retail price of the PRODIGY Start-up Kit is $49.99, but is
discounted by software sellers.  For more information, contact PRODIGY Services
Company, 445 Hamilton Avenue, White Plains, NY  10601; 914-993-8000.
                                       #
     David Batterson has reviewed several online services.  Send your comments
via MCI Mail: DBATTERSON.
```
{% endraw %}

## PROWRITE.TXT

{% raw %}
```
                        Professional Write, Version 2.2
                       Copyright 1990 David W. Batterson

     WordPerfect is still the best-selling word processing software, but many
users don't need its advanced features, or want to pay that high price.
However, there are dozens of other word processors to choose from.
     Software Publishing Corp. has now released Version 2.2 of Professional
Write, which is one of the easiest word processors to learn.  It also has the
power and features you need, without overkill.
     One of the major new features of Version 2.2 is a customized version of
Grammatik IV.  (We reviewed Grammatik IV in PC REVIEWS, and gave it 5 stars.)
     Previously, you could use a stand-alone copy of Grammatik IV with
Professional Write.  Now it's an option in the pull-down menus, and it requires
no separate installation.
     The Grammatik IV add-in program checks for common grammar, style, usage
and punctuation errors.  In setup, you can select "general," "business" or
"technical" writing, or customize it to your needs.
     Professional Write 2.2 has made one change in its excellent page preview
feature.  Besides font and/or style changes--and seeing how this affects line
and page breaks--you now can add automatic hyphenation.
     The previewed pages can be displayed side by side, or you can zoom in to
page portions for close detail.  For your documents that include a graph, the
placement of the graph is represented by a shadow box.
     Even without using page preview, you can add hyphenation prior to
printing as a print style option.  In this case, you don't see the hyphenation
prior to printing.
     There's additional printer support (over 150 now), including the HP
LaserJet III, HP DeskJet Plus and Canon LBP 8.  Ver. 2.2 has caught up with the
font frenzy too.  It supports most HP and compatible font cartridges, including
Pacific Data Product's popular 25 Cartridges In One.
     Since laser printers allow proportional fonts, this can cause problems
with your right margins coming out too wide.  At print time, Professional Write
rewraps lines to preserve the margin you wanted.
     Professional Write reads files from most popular word processors, so no
file conversions are required.  You can import files from WordPerfect 5.1,
WordStar 5.0, Microsoft Word 5.0, MultiMate 4.0 and others.  You can save in
those formats, or in ASCII.
     The spell checker (77,000 words) and thesaurus (20,000 keywords) have not
been upgraded from Version 2.1.  I wish they had beefed these up.  However, you
can add about 5,000 words to the personal dictionary.
     File length has been limited in earlier versions of Professional Write.
This problem is gone now.  Even if you have only 512K RAM and no EMS, it makes
use of your hard drive to allow extremely long documents.
     Form letters can be created using Professional Write's own Address Book,
or by using Professional File or dBASE files.  You can append delimited ASCII
files to your address book, or copy individual records to delimited ASCII
files.
     You may insert a Lotus 1-2-3 worksheet, or include a graph from Harvard
Graphics, Harvard Presentation Graphics 1.0, PFS: First Choice or Professional
Plan 1.0.
     In some word processing software, creating macros can be confusing.
Professional Write has online instructions to help you write macros.  You can
create as many as 35, with variable lengths.  If you forget what <Alt> key
combination it was, there's a handy menu of all your macros.
     Other useful features of Professional Write include a calculator, file
encryption, EMS memory support, and the Address Book.  The Address Book can
hold up to 2,000 names & addresses.  You can then insert these in letters, use
them for form letters (mail-merge), and print envelopes and mailing labels.
     There are a few minor omissions, that we may get in Ver. 3.0 some day.
One is support of .PCX graphics files.  The other is automatic saving of
documents (not crucial, but very useful).
     The suggested list is $249 but Egghead Software and other discount
software dealers sell it for much less, so shop around.  The upgrade from
earlier versions costs you $55 ($65 after September 15).  If you purchased Ver.
2.1 after April 16, you can get a free upgrade with proof of purchase.
     For more information, contact Software Publishing Corporation, P.O. Box
7210, 1901 Landings Drive, Mountain View, CA  94039-7210; 415-962-8910, FAX:
415-969-8466.
                                       #
     David W. Batterson is a freelance computer journalist who doesn't use the
"Big W" word processing programs.  Send comments via MCI MAIL: DBATTERSON.
```
{% endraw %}

## PUBLISH.TXT

{% raw %}
```
                              Publish It! Ver. 1.2
                         Copyright 1990 David Batterson

     Before we go into the new features of Publish It! Ver. 1.2, let's look at
the overall features of the program, as there are many users out there who
haven't seen the original version.
     Like Ventura Publisher, Publish It! Ver. 1.2 runs under GEM, the Digital
Research GUI (Graphical User Interface).  GEM was never able to compete in a
big way against Microsoft Windows, but it's similar and easy to use.
     Page layouts are either done from scratch, or by importing a style sheet
(template).  A few sample publications are included on disk; more are available
as an option.
     It's not difficult to create your own page layouts.  For some, it might be
a good idea to sketch out a rough design on paper first.  Then create your
Master Page, choosing page dimensions, orientation (portrait or landscape),
number of columns, gutters, and so forth.
     Publish It! uses text and picture frames which can be positioned precisely
(to 100ths of an inch) anywhere you like on your pages.  If you want to move
frames or change their size later, this is easily done.
     You can import text in many formats, including WordPerfect 5.1, Microsoft
Word 5.0, WordStar 5.0, ASCII, GEM 1st Word Plus, and others.  One useful
feature is that single/double quotation marks (' and ") are automatically
translated into standard typesetting quote marks (`' and `` '').
     You can also use Publish It! to prepare your text, as it contains word
processing features like cut/paste, search/replace, headers/footers, tabs,
centering, text aligning and more.
     It's no problem to choose justifications, indents, and leading for your
paragraphs.  [The term "leading"--pronounced LED-ING--is carried over from the
old typesetting days using lead type.]
     From the Options Dialog box, various bullet characters ("dingbats") can be
added at the beginning of phrases or sentences.  Or you can insert bullets
anywhere within your text, by selecting Font/Style from the STYLE menu, and
then typing the appropriate lowercase letter.
     Publish It! use Bitstream Fonts: Dutch (like Times Roman), Swiss
(Helvetica equivalent), Drury Lane (an Art Deco type), Madison (related to
Drury Lane), Ravinia (script), and Rockface (slab serifs).
     You can import clipart in the following formats: PC Paintbrush (.PCX), GEM
Paint (.IMG), GEM Draw (.GEM), Lotus 1-2-3 (.PIC), and three additional ones:
TIFF, SPLASH! (.SS) and EPS (Encapsulated PostScript) files.
     With the EPS support, you can import graphics created by CORELdraw!,
AutoCAD, and other draw programs.  These EPS files can also be rotated.
     While Publish It! is not designed for preparing elaborate graphics, you
can draw lines, boxes, circles, and polygons, with the usual variety of line
styles and fill patterns.
     There's a new and improved installation program.  For those upgrading,
you'll also need to install the whole program, saving only your document (.DTP)
files to another subdirectory temporarily.
     New printer drivers have been added, for the new HP Soft Font and
increased PostScript support.  Ver. 1.2 now supports PostScript fonts besides
the original Adobe set of 35.
     For those who need only an intermediate level DTP package, I recommend
Publish It! highly.  You'll save lots of money, learn it in a few hours, and
still get professional results.
     Publish It! Ver. 1.2 requires 512K RAM (640K recommended).  It supports
most printers including HP LaserJets and DeskJets, LaserWriters and
compatibles, as well as most graphics cards and monitors.
     About 150 pieces of clipart are included; the list price is $199.95, with
street price much less.  The optional Design Ideas contains more than 85
layouts and designs for brochures, ads, newsletters, menus and more.
     Registered users may update for $29.95. For more information, contact
TIMEWORKS, INC., 444 Lake Cook Road, Deerfield, IL  60015-4919; 800-535-9497,
708-948-9200, FAX: 708-948-7626.
                                       #
     Besides writing computer articles/reviews, David Batterson does desktop
publishing and business editing.  Contact him via MCI Mail: DBATTERSON.
```
{% endraw %}

## README.TXT

{% raw %}
```
       ****     ****          ****   *****  *   *  *  *****  *   *  *****
       *   *   *              *   *  *      *   *  *  *      *   *  *
       ****    *              ****   ****    * *   *  ****   * * *  *****
       *       *              ***    *       * *   *  *      ** **      *
       *        ****          *  **  *****    *    *  *****  *   *  *****


        Hands-on evaluations of PCs, printers, peripherals and software
                       COPYRIGHT 1990 DAVID W. BATTERSON

       ┌────────────────────────────────────────────────────────────────┐
       │  PC REVIEWS is dedicated to John Michael Thomas, (1939-89),    │
       │  a valued friend who loved life, liberty and computing.        │
       └────────────────────────────────────────────────────────────────┘

     PC REVIEWS is distributed by shareware companies such as The Public
(Software) Library, Micro Star, Best Bits & Bytes, Softshoppe, The Software
Labs, SHARE-NET and $izzleware.
     My computer articles, reviews and commentary have been published in PC
WORLD, MicroTimes, LINK-UP, Computer Currents, Los Angeles Business Journal,
Information Today, PC WEEK, The Editorial Eye, and other publications.
     You are encouraged to distribute copies of PC REVIEWS to others, as long
as it is kept intact.  If you upload it to a BBS, make a .ZIP or .ARC file of
the ENTIRE disk.  Thanks.
     There's now a star-rating to the left side of each listing in the menus.

     *****  =  Outstanding product; highly recommended.
      ****  =  Excellent value and features; not the BEST, though.
       ***  =  Good, useful product.
        **  =  Fair, but you might want to pass on it.
         *  =  P.U. City! Not good enough for brother-in-law's birthday.


                                    LICENSE

     Like other shareware programs, PC REVIEWS is copyrighted, and is NOT
public domain or free software.  It is distributed under the user-supported
software concept.  Non-registered users are granted a LIMITED license to use PC
REVIEWS for a trial period.
     Any use of non-registered copies of PC REVIEWS by a business, organization
or any type of institution is forbidden.  Registering PC REVIEWS allows you to
use the product after the trial period.
     Registered users receive notification of PC REVIEWS updates.  Registration
fee is only $10.  Send your registration fee to:

                               David W. Batterson
                               47 Crescent Avenue
                             Sausalito, CA   94965


                  To start PC REVIEWS, at the DOS prompt type:
                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                               A:> GO     <Enter>

          Then press a number key, following the menu's instructions.


                 To copy the files to your C: hard drive, type:
                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                            A:> HDINSTAL    <Enter>

                                      ###

     Following is a description of the text files on the disk:

FRACTALS.TXT - FracTools is an electronic kaleidoscope of nature's geometry.
You'll spend hours viewing and manipulating these beautiful fractal images.

DIAGRAPH.TXT - Diagraph/2000 Ver. 4.0 produces signs, word charts, and
presentation aids.  Includes over 2000 symbols and 13 high-res typefaces.

IMSIGRAF.TXT - IMSI Presentation Graphics offers 14 different graph types,
vector & bit-mapped fonts, a paint program, and animated slide shows.

ABOVEBD.TXT - Intel's new Above Board Plus memory board adds conventional,
extended or expanded memory (EMS) to your PC.  Works great but expensive.

PAINTBR.TXT - PC Paintbrush IV Plus is ZSoft's newest graphics package.  Lots
of new featues, especially the full range of scanning commands.

WINES.TXT - Wines On Disk is an expert system which uses recommendations from a
noted authority to help you choose the correct wine for all occasions.

BACKLOAD.TXT - BackLoader 2 is an automatic font handler; it downloads soft
fonts to HP LaserJets/DeskJets (and compatibles).  Efficient and easy to use.

ARTLINE.TXT - GEM Artline is a professional object-oriented graphics program
for making logos, headlines and illustrations.  Recommended.

FREEDOM.TXT - Freedom of Press Version 2.2 is a PostScript Language Compatible
Interpreter.  You get PostScript output on non-PostScript printers.

SYC.TXT - Solicit Your Congress (S.Y.C.) is a database and mailing program
which allows mass mailings of letters and cards to Congresspersons.

PRODIGY.TXT - PRODIGY Interactive Personal Service is the advertiser-supported
online system that offers news, information, shopping, banking and more.

LQ860-TXT - Epson's new LQ-860 24-pin letter-quality dot matrix printer is
about as good as it gets using the dot matrix technology.  Solid performer.

README.TXT - You're reading this one right now!

COMPLETE.TXT - The Complete Communicator is an integrated, add-in card
containing 9,600-bps fax, voice mail and 2,400-bps modem.  Utilitarian!

SPLASH.TXT - SPLASH! is a VGA paint program, featuring 256 on-screen colors,
unique icons, 60 patterns & brush sizes, plus numerous drawing features.

SWIFTAX.TXT - SWIFTAX is a user-friendly income tax preparation program.  It
calculates your tax, and prints the IRS-approved forms too.  Try it!

SAGELINE.TXT - Sageline's Write*On, GPOStyle and Almanac are hypertext-based
reference tools for writers and managers.  Easy, rapid access to text info.

WORDPUB.TXT - BetterWorking Word Publisher 5.0 is a very affordable word
processor/outliner with handy DTP features.  Six bitmapped fonts too!

PCCOM.TXT - PC COMplete is a communications program which automates your e-mail
activities.  Supports MHS (LAN messaging) and all the major e-mail services.

EPSONLT.TXT - Epson's Equity LT-286e is a high-performance 286 laptop.  It has
a removable hard drive, hi-res LCD, click keyboard, plus other fine features.

PCKWIK.TXT - The PC-Kwik Power Pak features five utility programs: disc cache,
print spooler, RAM disk, screen accelerator, and keyboard accelerator.

WRITEPRO.TXT - WritePro Ver. 1.4 is a tutorial program for teaching creative
writing.  The menus and overall interface leave a lot to be desired, though.

4DOS.TXT - 4DOS is a "PC-DOS/MS-DOS Command Processor."  It replaces your
current COMMAND.COM, giving you dozens of new and enhanced commands.

PFSPUB.TXT - PFS:First Publisher, Version 3.0.  It's now a high-resolution (300
dpi) desktop publishing package, with more fonts and graphics images.

FAXPORT.TXT - The Complete FAX/Portable is a pocket-size external FAX unit.  It
is handy, but the software needs improvement.  No background FAXing, either.

HUMOR.TXT - The Humor Processor is a unique program which helps you write jokes
and humor for all occasions.  It's fun to use, and useful for fun!

GRAMATIK.TXT - Grammatik IV is the new and improved version of Grammatik III.
This is a superb grammar and style checker.  Highly recommended.

CAREER.TXT - The Perfect Career is a program created by a professional career
counselor.  It helps you make career choices, based on interests and abilities.

BROWSE.TXT - PC-Browse is a pop-up file scan and hypertext tool.  It lets you
search for words and files, and link files using hypertext.  High quality!

ONTIME.TXT - OnTime is a lifetime calendar and to-do list manager.  It also
does pocket-size printouts.  But not as handy as a day planner book.

WORDFIND.TXT - Word Find Plus is a combination thesaurus, spell checker and
actual dictionary (gives definitions)  Easy and fun to use; recommended.

CRYSPUB.TXT - The CrystalPrint Publisher PostScript-compatible page printer
offers performance equal to the LaserWriter IINTX, and at much less cost.

VIRUSCAN.TXT - VIRUSCAN Ver. 3.1V62 is the latest version of this computer
virus tamer.  Identifies over 80 viruses.  Excellent and useful shareware.

SCANMAN.TXT - The ScanMan Plus is the new and improved hand-held scanner which
lets you scan, and import images into most graphics and DTP programs.

CONVERT.TXT - Graphics Transformer converts most all graphics file formats,
such as PC Paintbrush (.PCX) to PostScript (.EPS).  Handy and friendly.

PCGLOBE.TXT - PC GLOBE 3.0 and PC USA are two computerized atlases.  They
provide maps, graphics and extensive information on countries and states.

PROWRITE.TXT - Professional Write Ver. 2.2's new features include automatic
hyphenation, more printer support and Grammatik IV add-in.  Recommended.

WEATHER.TXT - WeatherBrief lets you access the latest weather information,
including detailed 16-color maps, via modem.  Quick and easy to use.

VPEXPERT.TXT - VP-Expert/SQL ("Intelligent Front Ends for SQL Databases")
provides SQL capability to this rule-based expert system development tool.

FINESSE.TXT - Finesse Ver. 3.1 is the improved version of this easy-to-use
desktop publishing software which runs under GEM (like Ventura Publisher).

PRNTRITE.TXT - PrintRite is a professional print spooling system based on
mainframe time-slicing technology.  Has oodles of sophisticated features.

POPDROP.TXT - PopDrop Plus is a memory management utility.  Added to the
earlier PopDrop program is PopLoad, which puts TSRs into expanded memory.

DRDOS.TXT - DR DOS 5.0 is the newest version of this substitute operating
system.  It offers tremendous features, so why wait for MS-DOS 5.0?

1450PLUS.TXT - The GoldStar 1450 Plus VGA Monitor supports all VGA modes plus
Super VGA (800x600 resolution).  Fine picture quality and handy controls.

COPROCSR.TXT - The Connection CoProcessor fax board uses the Communicating
Applications Specification (CAS).  Lower price & improved software too.

PRNTSHOP.TXT - Broderbund finally upgraded The Print Shop, the most popular
graphics software in history.  They did a great job on it too.

2400ETC.TXT - ATI Technologies Inc. has produced this 2400 baud internal modem
with MNP error-correcting protocol.  Now with v.42 error-control too.

DEMOII.TXT - Dan Bricklin's Demo II Program is a superior, power-packed slide
show program used to create software prototypes, demos, and tutorials.

EPL6000.TXT - Epson's EPL-6000 Laser Printer is fully compatible with the HP
LaserJet II series.  Slick performance and design make this printer a winner!

CERTMAKR.TXT - Certificate Maker allows you to make personalized awards for
office, school, organization and home use.  Quick, easy and fun to use.

PUBLISH.TXT - Publish It! Ver. 1.2 is the latest version.  It now supports HP
Soft Fonts, Encapsulated PostScript And TIFF files; more improvements too.

MIRROR3.TXT - SoftKlone has updated MIRROR III, adding MNP protocol, chat mode,
and a script language called PRISM for power users.

FIRSTWD.TXT - GEM 1st Word Plus 2.0 is a GEM-based word processor.  Included
are GEM/3 Desktop Ver 3.1, GEM 1st Mail and GEM Paint Ver 2.01.  $99 list.

PCTOOLS.TXT - PC Tools Deluxe Ver. 6.0 is the newest update to this excellent
collection of utility programs.  Another GREAT value for the low price.

JTFAX.TXT - QUADRAM's JT Fax 9600 fax board gets a B- grade.  Inferior display
capability is one drawback, plus it gobbles up too much RAM.

STARLASR.TXT - The Star LaserPrinter 8II is HP LaserJet II-compatible, and is
PostScript-compatible with the optional LincPage board.  Works great!
-----------------------------------------------------------------------------

            NOTE:  To print any review, just type at the DOS prompt:
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

                       A:> PRINT <FILENAME.TXT>   <Enter>


                        Latest update: September 5, 1990
 
```
{% endraw %}

## SAGELINE.TXT

{% raw %}
```
                   Sageline's Write*On, GPOStyle and Almanac
                         Copyright 1989 David Batterson

     Software companies continue to pour out hypertext software products, as
people like their ease of use and rapid display of text information.
     Sageline, whose motto is "software tools for thinkers," has now produced
three hypertext-based reference tools for writers.  Of course, others can use
them too, including teachers, office managers, public relations professionals,
lawyers and cab drivers.
     For those who HAVEN'T explored hypertext systems, you are in for a treat.
Though popularized by the Mac, the term "hypertext" was coined by visionary
writer Ted Nelson many years ago.
     Hypertext works in a non-linear fashion, linking various text topics
together, rather than the user merely scrolling through a text file.  This
approach is more like how our brains work, using free association and
narrowed-down choices to access information.
     You instantly know when you receive software with a seven-page manual
that it's going to be simple to use!  However, don't confuse "simplicity" with
"undeveloped," as these programs are packed with useful information.
     The large data files are compressed, and Sageline's hypertext engine
grabs the information instantly after you press the various hypertext buttons.
     Write*On Ver. 2.5 is a writing tutorial and reference work.  There are
five U.S. government writing handbooks contained in Write*On.  Rules of
punctuation, grammar, abbreviation, capitalization and numbering are covered
exhaustively.
     You also get tips on effective writing, and a style and usage guide for
common as well as unusual words and terminology.  Write*On features a thorough
index too, to help you find the exact writing topic or rule.
    GPOStyle Ver. 1.1 is the computerized version of the United States
Government Printing Office Style Manual, which is a standard reference widely
used both within government and in the private sector.  This is an abridged
version of the GPO Style Manual, containing the first 16 chapters.
     GPOStyle contains information that's of use by the general public.  It
covers some of the areas found in Write*On, but has much more information,
such as compound words, signs and symbols, footnotes, indexes and printing
mechanics.  There is also an extensive bibliography.
     Almanac Ver. 1.2 is a compendium of facts and information, divided into
categories:  Computers, Geography, History, Language, Math and Science.  These
are then subdivided into other topics.
     For instance, under History, you can access the U.S. Constitution, list
of Presidents, and text of Lincoln's Gettysburg address.  Under Geography,
you'll find area codes and state capitals.  Search under Science, and you can
study the table of the elements, or the planets.  There's much more too.
     Included with Almanac is the Sageline shell program.  It creates a menu
which incorporates these three (and any future) hypertext modules.  These are
useful reference works-on-a-disk which should find a market niche.
     Prices are:  Write*On ($49), GPOStyle ($79) and Almanac ($29).  For more
information or orders, contact Sageline, P. O. Box 2346, Kingston, NY 12401;
800-345-5571, 914-338-3025.
                                       #
     David Batterson writes about diverse PC applications.  Contact him via
the non-hypertext-based message system--MCI Mail: DBATTERSON.
```
{% endraw %}

## SCANMAN.TXT

{% raw %}
```
                        ScanMan Plus - Hand-Held Scanner
                       Copyright 1989 David W. Batterson

     While using this scanner, I couldn't help singing "Mr. ScanMan, bring me a
dream...."  They couldn't have picked a better name!
     ScanMan Plus is a hand-held scanner used to scan small to medium size
photos, drawings, magazine articles, signatures, logos and so forth.  You can
then import image files to desktop publishing and paint programs.
     ScanMan Plus is the upgrade to the earlier ScanMan, which I reviewed last
year in PC REVIEWS.
     I had discovered with the ScanMan that it wasn't easy to keep an exact
straight line down the image as you were scanning.  Wobbling could cause a
glitch in your scanned picture.  So I used a thick ruler or book as a guiding
edge.  This helped a lot.
     But the outer edges of ScanMan were slightly rounded.  When I was at
COMDEX, I suggested to a tech support person that it would be better if the
edges were perfectly straight.  This would help while using a makeshift guide.
     Apparently, great minds think alike!  ScanMan Plus changed its edge
design, so that using a straightedge works fine now.
     The maximum width is images is 4.1 inches.  A default length for the
scanned area is six inches (at 200 dpi), but this can be increased up to about
14 inches.  This depends upon available RAM--the default 4" x 6" image gobbles
up 120K.  At 300 and 400 dpi, more RAM is needed.
     Using the including PaintShow Plus paint program, you can scan full pages
(but at lower dpi).  Via the auxiliary screen in PaintShow Plus, you make three
passes over a document in horizontal position.  Then you rotate the picture 90
degrees, zoom in to edit out repeated images, and save your file.
     ScanMan comes with a half-slot board (or a full-slot board for IBM PS/2 50
or above).  It requires 384K RAM for black & white, or 640K for color.
     ScanMan Plus features a dither control with three settings, instead of
just one.  There's also a Line Art setting for text and line art.  You always
get the best results by using b&w line art.
     Logitech has added a scanning speed indicator light, which warns you if
you are scanning too fast.  Also new is a brightness control dial.
     Scanned images are saved in three methods.  One is to scan directly into
PaintShow Plus.  You are able to see the image on screen right away.  Then you
can manipulate the images any way you wish: invert, color, fill with patterns,
cut and paste, rotate, add text, etc.
     PaintShow Plus saves images as TIFF (Tagged Image File Format) files, with
the .TIF extension.  These can be read by PageMaker and WordPerfect 5.0.
     A second way is to scan directly to a file, from DOS.  Using this method,
you don't get to see the image on screen.  Instead, you save it as a .PCX, .TIF
or .IMG file.
     The .PCX file type is used by PC Paintbrush and other programs.  Ventura
Publisher, PageMaker, WordPerfect 5.0 and Microsoft Paint can read files in the
.PCX format.  Programs like Finesse use .TIF and .IMG files.
     The third way let you scan into the Microsoft Windows (version 2.03 or
above) clipboard, with the utility program called WScan.  Files are saved as
.PCX, .TIF or .MSP files.  As I don't use Windows, I didn't try this method.
     While scanning with ScanMan, you have to have a steady hand.  The
suggested speed of your hand movement is between 1/2" to 2" per second.  A
slower rate is recommended for shaded images, and a smooth motion--rather than
jerky--is the right way.
     Practice makes perfect, though.  With time you will probably learn to
increase the steadiness of your hand, like a surgeon or diamond cutter!
     There are also file conversion utilities.  These convert .TIF files to
.PCX files, .PCX to .TIF, and .MAC to .TIF.
     ScanMan Plus offers 32 levels of halftones.  In the recommend setting of
300 dpi, you get 1240 dots/line output.  An announced new OCR software is
Catchword, which converts most typefaces, 6 to 20 point sizes, into ASCII text
files for your word processor.
     ScanMan Plus requires a minimum of 384K RAM for black & white, or 640K for
color.  You'll need a mouse for the included PaintShow Plus.
     The ScanMan Plus is a fun and effective tool.  If you cannot afford a full
page scanner and do a lot of desktop publishing, you'll find it useful.  It
costs $339 directly from Logitech, but sells for less at discounters and mail
order companies.
     For more information, contact Logitech, Inc., 6505 Kaiser Dr., Fremont, CA
 94555; 415-795-8500; FAX (415) 792-8901.
                                       #
     David Batterson is an independent computer writer.  He also does tech
writing and desktop publishing.  Contact him via MCI MAIL: DBATTERSON. 
```
{% endraw %}

## SPLASH.TXT

{% raw %}
```
                         SPLASH! - The VGA Paint Program
                         Copyright 1989 David Batterson


     The SPLASH! VGA paint program has been out for more than a year, but I'm
just now getting around to reviewing it.
     There is such a cornucopia of paint programs today.  All of them are
basically the same, the main differences being the menus and icons they use.
     SPLASH!, however, was designed specifically for VGA monitors; it will not
work with CGA or EGA.  It makes use of VGA mode 13 (320x200 pixel resolution),
with 256 colors out of a palette of 256,000.
     First off, you'll need 640K RAM.  SPLASH! doesn't support LIM EMS 4.0
(Lotus/Intel/Microsoft Expanded Memory Specification 4.0).  A mouse is also
required, as there are no keyboard commands, except for a few Function keys.
     Your mouse must be a Microsoft Mouse Ver. 6.1 or higher (or any
compatibles); earlier versions will not work.
     The first thing you notice about SPLASH! are the unique icons, quite
different from other paint programs.  For instance, the "undo" or "oops" icon
is a circle with a slash through it.
     Instead of a "paste" command, you select the stamp icon (which looks like
a rubber stamp).  The realistic-looking Air Brush is the spray paint device.
You "fill" with the Paint Bucket (icon with paint pouring out of a can.
     Other icons, such as circle, rectangle, eraser and text, look about the
same as other paint programs.  There are more different brush shapes (called
tips) including geometric shapes than you would expect.  An abundance of
patterns are also available.
     SPLASH! has so many features that I still haven't used all of them.  They
include the usual (like flipping images or stretching them), to merging, use of
an alternate canvas, swapping colors, and overlaying/underlaying objects.  You
can also easily create 3-D effects by dragging images around.
     Included are sample SPLASH! ART files, some of which are quite impressive.
When you look at them while standing back from your monitor, it's like looking
at a 35mm slide show.  Color saturation, hue, and depth are excellent.
     SPLASH! saves files in a proprietary .SS format (or .ST for "stamped"
images).  However, you can also save them in the .PCX (PC Paintbrush ) and .TIF
(TIFF, scanner) formats, for importing into PageMaker and Ventura Publisher.
However, you cannot load images in the .PCX or .TIF formats.
     The program is configured to work with the ComputerEyes video digitizer.  
It does not support other digitizers or scanners at this time.
     Probably the biggest disappointment in using a high-resolution color paint
program is when you decide to print.  Most of us don't have color printers, so
your glorious colors are reduced to boring gray tones on paper.
     SPLASH! does work with the HP PaintJet Color Graphics Printer, as well as
with most dot matrix and HP LaserJet (or compatible) printers.  It doesn't
support PostScript printers; hopefully that will be changed soon.
     SPLASH! has a list price of $99.95, with street price much less.  Contact
Spinnaker Software, One Kendall Square, Cambridge, MA  02139; 800-826-0706;
617-494-1200.
                                       #
     David Batterson reviews PC hardware and software on a regular basis.
Contact him via MCI Mail: 273-7218.
```
{% endraw %}

## STARLASR.TXT

{% raw %}
```
                             Star LaserPrinter 8II
                         Copyright 1990 David Batterson

     Star Micronics has been producing Epson-compatible dot matrix printers for
years now with great success.  You just KNEW that Star's laser printers would
be right on the heels of Epson's.
     Star's hot item in the laser printer field is the LaserPrinter 8II.  This
eight-page-per-minute, HP LaserJet II-compatible printer is about 50 percent
faster than the older LaserPrinter 8.  Standard onboard RAM is now 1MB.
     Besides HP emulation, the LaserPrinter 8II can emulate the Epson EX-800,
IBM Proprinter and Diablo 630 ECS.  You get four resident fonts, Courier 10
point, Times Roman 10 point proportional, Prestige 12 point and that boring
Lineprinter 8.5 point.
     You get a 200-sheet cassette for standard 8 1/2 x 11 paper; the legal-size
paper cassette is optional.  Single sheets of varying widths and lengths can be
fed manually.  Naturally, you can also print on label stock, transparencies or
business envelopes.
     There's the usual choice of face-down or face-up output.  The face-down
output tray holds 100 sheets, while the face-up tray accommodates only 20.
     The LaserPrinter 8II model I reviewed came with an optional 1MB memory
board, bring total onboard RAM to 2MB.  There are also 2MB and 4MB RAM boards.
The 1MB board lists for $400 ($1,199 and $2,199 for the 2MB and 4MB).
     The review unit also had Star's LincPage PostScript-compatible interpreter
board ($999 suggested retail).  This board turns the LaserPrinter 8II into a
virtual PostScript printer, using 35 Bitstream Adobe-compatible fonts.  The
LincPage board requires at least 1MB additional onboard RAM.
     Using the control panel's Program mode, you can configure the printer to
emulate either HP LaserJet II or PostScript-compatible upon power-up.  Then you
can switch easily to the other emulation whenever you need it.
     The handy control panel also lets you change (temporarily or permanently)
the printer interface, character sets, margins, number of copies, and page
layout.  The front panel control has the other usual controls, such as on line,
test, reset and so forth.
     I found the control panel a quick learn, and the manual does a nice job at
explaining things.  There's a handy chart in "tree" format too, showing all
commands; the default settings are marked with the * symbol.
     You can print the Status and Setup Report any time.  It provides extensive
information on your power-up, current and factory settings, as well as a RAM
report and resident fonts available to you.
     My tests included using Professional Write, Publish It!, GEM Artline,
PFS:First Publisher, Finesse, PC Paintbrush IV Plus, Tracker Plus, The New
Print Shop, and other applications.  I experienced no problems at all.
     Don't be scared off by the suggested list prices, as these are always
artificially high and rather meaningless in the real world.  The LaserPrinter
8II itself has a suggested retail of $2,799, but this will be heavily
discounted on the street!
     For more information, contact Star Micronics Inc., 200 Park Avenue, Suite
3510, New York, NY  10166; 212-986-6770; TWX: 7105814082.
                                       #
     David Batterson reviews a lot of printers and DTP software.  Contact him
via MCI Mail: DBATTERSON.
```
{% endraw %}

## SWIFTAX.TXT

{% raw %}
```
                    SWIFTAX - Income Tax Return Preparation
                         Copyright 1990 David Batterson

     SWIFTAX is one of several software programs on the market designed to make
preparation and filing of your federal tax return easier and quicker.   The
software comes from Timeworks, sellers of Publish It! and other personal
productivity software noted for a quick learning curve.
     The package comes with a slim user manual--only 86 pages in 5 1/2 x 8 1/2
format--which is generally a good sign that the software is NOT going to be
difficult to learn and use.  You don't need to go out and buy a book that
teaches you how to use it either, as with WordPerfect, Lotus 1-2-3, dBASE,
Ventura Publisher and many other software products.
     Getting started is painless, with a goofproof auto install program, so new
users need not panic or yell for help.  Set up your program options (monitor
type, screen size, menu colors, and a few others), and you're ready to go.  For
EGA/VGA users, you can use the 43- or 50-line display option.
     Many taxpayers will find that they won't need to use IRS booklets to help
them out as they use SWIFTAX, as the program is surprisingly sophisticated.  It
follows a logical course of (1) completing the taxpayer information worksheet,
(2) completing the taxpayer interview (determines what forms and schedules to
use), and (3) filling in the tax return, beginning with the appropriate 1040
form for your return.
     By the way, SWIFTAX can import data from Quicken, Dollars and Sense,
Managing Your Money, Lotus 1-2-3, or an ASCII file, allowing easy transfer of
amounts into your forms and schedules.
     You won't need to pick up any IRS forms at the bank or post office either,
as SWIFTAX prints IRS-approved forms on most dot matrix or laser printers.
This includes forms 1040, 1040A, and 1040EZ, along with 37 common supporting
schedules and forms (A, B, C, SE, 2106, 4255, 8814, etc.).
     Most of us need someone to check for mistakes before we mail in the return
every year.  You won't need a friend or associate to do this, since SWIFTAX
includes the Data Integrity Check feature.  This option checks for missing
information, and that all key fields have data entered there.
     The Data Integrity Check also has an "Audit Alert" mode, comparing your
deductions against the IRS average for your tax bracket.  A warning will appear
in a window, showing which deduction is too high.  Now that's a good feature!
     SWIFTAX automatically calculates the lowest amount of income tax you must
pay.  You may, of course, override standard tax calculations.  SWIFTAX also
lets you set up a customized tax comparison analysis, in which you enter "What
if" scenarios to project your tax alternatives.
     There's lots of context sensitive help anywhere in the program, both
general software help as well as IRS instructions.  When you're all finished,
you can view your entire tax return in the pop-up tax return summary window.
     SWIFTAX comes with a free copy of the paperback tax guide, "The Price
Waterhouse Personal Tax Adviser, 1989-1990 Edition."  Buyers can purchase next
year's SWIFTAX for half price.  There's 60 days of free tech support.
     There's also an exchange guarantee: if you don't like SWIFTAX, you can
return it, and the company will purchase any other tax program you specify
(certain conditions apply).
     SWIFTAX requires 512K RAM, DOS 2.0 or higher, and a printer.  It comes on
5 1/4" or 3 1/2" disks.  It lists for $69.95, but check for discount prices.  I
think it is fairly priced for the power and ease of use.
     For more information, contact Timeworks, 444 Lake Cook Road, Deerfield, IL
60015-4919; 800-323-9755, 708-948-9202.
                                       #
     David Batterson writes articles about various PC applications.  Contact
him via MCI Mail: DBATTERSON.
```
{% endraw %}

## SYC.TXT

{% raw %}
```
                Solicit Your Congress - Database/Mailing Program
                         Copyright 1990 David Batterson

     Voter apathy is a big problem these days.  Likewise, it's difficult to get
those who do vote to write their U.S. senators and representatives.
     Now there's help for clubs, organizations, PACs, towns and others who want
to do mass mailings to Congress.  It's called Solicit Your Congress, or S.Y.C.
for short.
     S.Y.C. is a specialized database containing the names, addresses, party,
district, phone/FAX numbers and committee memberships for all senators and
representatives in the 101st Congress.  Notes (107 characters) and extended
notes (630 characters) can be attached to each address.
     Searches can be made in various ways.  For instance, you can enter "CA" in
the Home State field, then press <F9> to FIND the California senators and
representatives.  You can also search while in the Party field (D or R), Name
field (full or partial names), or Senator/Representative field.
     You may tag individual records easily for printing later.  You can either
exit the Data Entry Menu or just press <Ctrl>-Y to enter the Print Data Menu.
     There's a choice of whether to print tagged records ONLY, or all records.
You may also select selected fields, i.e., Name, Address, Phone, Committee and
Notes.  When you're ready to print, you decide whether to print to screen (the
default choice), printer or disk file.
     The print to screen first is a good idea, since you can double-check the
results of your search before going to hard copy or disk file.  Files are saved
in regular ASCII text, for use in your word processor.
     In the Name and Committee fields, you can use the DOS wildcard: the
asterisk key (*).  For instance, to select members on both the Judiciary and
Ethics Committees, you could input *ic* under Committee.  (Of course, you might
get those on the Rice Committee too!)
     If you prefer, you may export data to your favorite database program.
After choosing the fields you want included, you have the choice of three
different file formats:  fixed-length, comma delimited and text.
     There's also the ability to print labels (five standard sizes), single or
tractor-feed #10 envelopes, standard post cards, and Rolodex/index cards (three
sizes) for your mailings.  You can also print return address labels.
     The programs's menus are friendly enough, although it's usually better if
you can press <Esc> to return to a previous menu.  S.Y.C. doesn't use this
common software feature.  It does provide access to DOS without exiting the
program, which is handy.
     When you install S.Y.C., you have a choice of monochrome or color.  The
manual says that the color is "light blue foreground on a blue background,"
which is incorrect (it's low-intensity WHITE on blue background).  There is no
way to change the color palette, and you apparently can't change to monochrome
without reinstalling again.
     The company president, Terry D. Lanyi, says he wants "to hear from you
about your needs and desires."  So buyers should follow up and make suggestions
for changes they'd like to see in the next version.
     S.Y.C. is not really difficult to use, and there's online help available.
The manual could be improved a bit, however.  Pages 3-6 are printed with NO
paragraph breaks at all, making them a bit hard to read.
     Requirements are simple enough:  512K RAM and a hard disk.  S.Y.C. costs
$49.95, with yearly update at $24.95.  The LAN version costs $129.95, and LAN
update is $74.95.  You get either 5 1/4" or 3 1/2" disks.  There's free
unlimited telephone support (not toll-free).
     For more information or orders, contact T-Lan Systems, RR 2 Box 1290,
Norridgewock, ME  04957, 207-397-5511.  Another program, Solicit Your State
(S.Y.S.), has many states available, with the rest to follow soon; prices are
the same as S.Y.C.
                                       #
     David Batterson reviews various PC applications, and writes his
legislators regularly.
```
{% endraw %}

## VIRUSCAN.TXT

{% raw %}
```
                 VIRUSCAN Ver. 3.1V62 - Finds Elusive Viruses!
                         Copyright 1990 David Batterson


     The virus scare is partly real and partly a lack of knowledge on the part
of many new users.  I think it's accurate to state that in most cases where a
PC user suspects a virus, that is NOT the problem!
     However, viruses are indeed infecting PCs around the country.  From
reading BBS messages from around the country, I've learned that in many cases,
the virus is not spread through shareware/BBSs, but rather through illegal
copies of commercial software.
     There's a lesson to be learned here: if you are ripping off software
companies by using pirated copies, then perhaps you deserve to have your PC
infected with a virus.  You'll get no sympathy from here.
     OK, let's assume that's not the case, and you strongly suspect that your
PC is infected.  Then you'd better get a copy of VIRUSCAN from McAfee
Associates.  You may have seen it simply as SCAN.EXE on BBSs.
     The number of new viruses has grown from a handful to dozens, with new
ones popping up overnight, like daisies in a meadow.  So VIRUSCAN is updated on
a constant basis.  If you have an old version of SCAN.EXE, it just may not find
a recent virus in your system.
     Therefore, it's a good idea to send your registration fee of $25 [for home
use; corp. site licenses available], and get the latest version of VIRUSCAN.
It's also sure to be virus-free.  [Some anti-virus programs have been
downloaded from BBSs, and found to be infected themselves!]
     VIRUSCAN contains a self-test which runs at load time.  If SCAN.EXE has
been modified in any way, a warning will be displayed.  However, it will still
continue to check for viruses.  Also packaged is the VALIDATE program that will
authenticate the integrity of SCAN.EXE and other programs.
     VIRUSCAN Ver. 3.1V62 identifies four new viruses.  "The first is a .COM
and .EXE infector called the Eight Tunes virus (also called the 1971 virus).
This virus is memory resident and randomly plays one of eight German folk songs
on the system speaker.  It appears to have no destructive code within it.  A
second musical is the Yankee Doodle-2 virus.  This virus is similar to the
first Yankee Doodle, except that it plays the Yankee Doodle tune as soon as an
infected program is executed.  It infects .EXE files only."
     "The third virus reported is a small non-memory resident .COM infector
called the Kennedy virus.  It appears to have no destructive or disruptive code
but it does contain a reference to the Kennedy family.  The fourth virus is a
destructive virus called the June 16th virus.  It is a non-resident virus that
infects .COM files, including the Command Interpreter (COMMAND.COM).  On every
June 16th, the virus activates and replaces all FAT entries with the word
'ZAPPED.'"  (The preceding descriptions are from McAfee Associates.)
     VIRUSCAN will scans your disks or entire system, and identify any pre-
existing PC virus infection.  It will indicate the specific files or system
areas that are infected and will identify the virus strain.  SCAN version
3.1V62 can identify 86 virus strains and numerous sub-varieties for each
strain.  The 86 viruses include the ten most common viruses "which account for
over 95% of all reported PC infections."
     Removal can then be done automatically using the SCAN /D option.
Automatic disinfectors are available for the majority of the known viruses.
Registered VIRUSCAN users can contact McAfee Associates for free assistance in
manually removing the virus or for information on disinfection utilities.
     If the infection is widespread, you can get McAfee's CLEAN-UP VIRUS
REMOVER, Ver. 3.1V62.  This shareware product sells for $35 (home use).
     All known viruses infect one of the following areas:  The hard disk
partition table; the DOS boot sector of hard disks or floppies; or one or more
executable files within the system.  The executable files may be operating
system programs, system device drivers, .COM files, .EXE files, overlay files
or any other file which can be loaded into memory and executed.
     VIRUSCAN identifies every area or file that has become infected and
indicates the name of the virus that has infected each file.  VIRUSCAN can
check the entire system, an individual diskette, a sub-directory or an
individual file for an existing virus.
     VIRUSCAN will require approximately 3 minutes of run time for each 1,000
files on the designated drive.  SCAN will exit with the following exit codes:
          0 - Normal termination, no viruses found
          1 - One or more viruses found
          2 - Abnormal termination (Error)
     We've in a period in which treacherous viruses are causing a great deal of
heartbreak for people: HIV (the AIDS virus) and computer viruses.  Hopefully,
the first will be wiped out in time.  Thanks to John McAfee and others, at
least the latter will become tamed if not eliminated.
     To register VIRUSCAN shareware, or for more information, contact McAfee
Associates, 4423 Cheeney Street, Santa Clara, CA  95054; 408-988-3832,
BBS: 408-988-4004.
                                       #
     David Batterson reviews a lot of PC hardware and software.  Contact him
via virus-free MCI-Mail: DBATTERSON.
```
{% endraw %}

## VPEXPERT.TXT

{% raw %}
```
            VP-Expert/SQL - Advanced Expert System Development Tool
                         Copyright 1989 David Batterson

     Expert systems are quickly becoming a major software tool for various
professions, such as medicine, engineering, law, agriculture and the military.
     The name, expert system, isn't derived from the observation that you have
to be an EXPERT to use the system!  However, expert systems are not for Sunday
hackers; they are heavyweight programs.
     According to Jeffrey Hsu and Joseph Kusnan, writing in "The Fifth
Generation: The Future of Computer Technology" [reviewed in PC REVIEWS], "in a
sense, expert systems transfer the information found in a human expert into a
computerized form, making it able to solve problems in a certain specialized
area in much the same way that a trained professional would."
     An examples of an expert system is MYCIN, which contains knowledge about
bacterial infections, and can diagnose and suggest treatments.  Another is
PROSPECTOR, used by geologists to find ore deposits.
     Adam Osborne's Paperback Software (publisher of VP-Planner, VP-Graphics,
and Executive Writer) has created VP-Expert/SQL, which "makes intelligent
expert system front ends to SQL databases available for the first time on
standard microcomputers."
     SQL, standing for Structured Query Language, provides standard commands
for accessing relational databases.  IBM developed SQL for use in the mainframe
database program called DB2.
     Paperback has added SQL database server support to its best-selling expert
system development tool, VP-Expert, using Gupta Technology's SQLBase database
server.
     Basically, what VP-Expert/SQL does is allow you to develop expert systems
on your PC, and then access SQL databases on LANs, minis and mainframes.  It
also retrieves information and sends it to files compatible with Lotus 1-2-3,
dBASE, VP-Planner Plus and VP-Info.
     The user doesn't have to have any knowledge of SQL.  Instead you make
requests via usual database commands, which are then translated into SQL
automatically.
     One of the main purposes of VP-Expert/SQL is to gather specific and
usable information from the huge amounts of data accumulated in various file
formats, and deliver it fast!
     Paperback indicated how banks could use VP-Expert/SQL.  They could do a
quick search of many thousands of files containing loan information, analyze
the demographics of deadbeats, and save a dollop of dollars!
     VP-Expert/SQL includes the enhanced version of VP-Expert 2.1.  It also
bundles, for a limited time, the Single User version of SQLBase.  The suggested
list price is $695.
     VP-Expert/SQL requires at least a 286 with 640K, 384K extended (not
expanded) memory, DOS 3.1 or higher, and hard disk with 2 MB available.
     For information, contact Paperback Software International, 2830 Ninth St.,
Berkeley, CA  94710; 415-644-2116, orders: 800-255-3242, FAX: 415-644-8241.
                                       #
     David Batterson is no "expert" on any system, but writes articles and
reviews on PC applications.  Contact him via MCI Mail: DBATTERSON.
```
{% endraw %}

## WEATHER.TXT

{% raw %}
```
               WeatherBrief - "Your Personal On-Line Weathercast"
                         Copyright 1990 David Batterson

     The Software Toolworks has the knack for coming up with various unique
software, such as the Life and Death game which simulated surgery, and the
award-winning Mavis Beacon Teaches Typing!
     Their newest specialized program is WeatherBrief.  WeatherBrief is
published by MindScape, a company now owned by The Software Toolworks.
     There is more interest in the weather today than ever, especially
advance weather forecasting.  It is obviously serious business for farmers,
pilots, builders and outdoor recreation companies (theme parks, football
teams, water slides, etc.).
     But average citizens also want to know more about what the weather will
be today, next week or in a month.  That knowledge can help them plan their
work and play activities much better.
     TV weather reports today have very colorful, animated maps with the
latest radar, satellite and other weather maps.  These are downloaded to TV
station computers in a jiffy.
     Now the business or home PC user can access this same information, and
display the most up-to-date weather available.  That's because WeatherBrief
uses WeatherBank, the same online database used by TV and radio
meteorologists.
     Weather information is gathered from the National Weather Service,
Federal Aviation Administration, U.S. Forest Service and the U.S.  Military.
Using WeatherBrief, you'll be able to check to see if CNN's Flip Spiceland
told you the correct weather information!
     Some users might think dialing up a sophisticated weather database via
modem would be rather tricky, extremely expensive, and just not something
they would want to try.  Not to worry, because this is a very friendly
program, and it works like a charm.
     Unlike setting up a complex communications program or LAN (Local Area
Network), WeatherBrief's installation and configuration is quite painless.
The illustrated manual helps you every step of the way.
     Afterward, you are ready to select the information (weather items) that
you want to obtain from WeatherBank.  You do this by selecting up to 300
specified items, adding them to a menu called a Selection Group.
     You can have up to eight Selection Groups.  The reason for this is
to allow a different user on the same PC to have a separate group, or to
simply request different weather information.
     Don't think that 300 items will overwhelm you.  It's a large number
because there are subcategories of the major items.  You'll generally select
only a few items.
     For your needs, you might select such items as Current Weather
Conditions, Selected Major Metro Forecasts, Weather Forecasts, and National
and Regional Graphics.  You'd indicate more choices in each.
     For instance, under Current Weather Conditions you might choose
"California."  For your National and Regional Graphics, you might select
"Radar Maps," "Cloud Cover Maps" and "Jet Stream, Highs Lows and Fronts."
You'll want to experiment with your weather information retrieval, and then
adjust your Selection Groups accordingly.
     Next comes the fun part when you grab your preselected weather items
from WeatherBank.  Once you start the dialing process, all you have to do is
sit back as the weather information is quickly downloaded.
     NOTE: except for three advanced graphics, you are only downloading
data.  That's why downloads are fast, and don't cost much.  Typical items
are 3K bytes or less.  However, Manually Prepared Graphics (in .PCX format)
can be 20K to 60K in size.
     Displaying your info is a breeze too (sorry about that pun).  However,
there is a serious flaw with printing the maps.  WeatherBrief apparently
uses a generic printer driver, as you cannot configure the program for
different printers.  This makes no sense at all.
     In my tests, it would not print to an HP LaserJet III-compatible,
except in IBM ProPrinter emulation.  It wouldn't work with Epson EX
emulation either.  Hopefully, this shortcoming will be addressed ASAP.
Except for the printer problem, I like WeatherBrief very much.
     WeatherBrief lists for $49.95.  You have to pay a per-minute cost for
downloading, but it's quite affordable.  For more information, contact The
Software Toolworks, 19808 Nordhoff Pl., Chatsworth, CA  91311; 818-885-9000,
FAX: 818-772-6809.
                                      #
     David Batterson reviews various PC products and online services.
Contact him via MCI Mail: 273-7218.
 
```
{% endraw %}

## WINES.TXT

{% raw %}
```
                       Anthony Dias Blue - Wines On Disk
                         Copyright 1989 David Batterson

     Many of us have difficulty choosing an appropriate wine, either to go with
food or by itself.  As a non-drinker, I particularly need help when it's time
to make a selection for guests.
     Wines On Disk, with about 600 different American varietals and vintages
selected by noted wine authority Anthony Dias Blue, is an expert system that
will help you "make the right choice every time."
     Running the program is simple and straightforward.  You initially have two
choices:  searching for a wine to go with meals, or for drinking alone.  You
also choose whether to print the results or not.
     Let's say you are serving duck, and you don't know what wine to serve,
other than red.  First of all you have to select the type of sauce:  none,
spicy, medium, cream or tomato.  Then you choose the price ranges.  Price
ranges can be more than one, for example, $10-$14.99 as your lowest range, and
$30-$39.99 for the upper range.
     You still have two more selections to help narrow the search.  The program
now provides a list of possible red wines, such as Gamay Beaujolais, Pinot
Noir, Cabernet Sauvignon, Zinfandel, etc.  Then it lists the dryness/sweetness
level of each, and whether they are light or heavy.
     Now you make your choice, such as "dry" and "average."  The search begins,
and soon comes up with your choices.  Based on my test input, Wines On Disk
recommended Sequoia Grove Cabernet Sauvignon, 1983, $10-$15, dry, average
sweetness, 3 stars.
     You may also select a bottle of a wine varietal, when food is not
included.  It works about the same, except this time you choose based on price
or winery.  I don't know wineries from gas stations, so I searched for an
inexpensive Chenin Blanc.
     One of the choices was Bogle Vineyards Chenin Blanc, 1984, average
dryness, average lightness, 2 stars.  "Crisp, soft, fruity and clean...very
good value."
     Wines On Disk is helpful for wine neophytes, and I can recommend it.  The
only drawback is that the commands are a bit awkward.  For instance, to make
choices you must move the lightbar cursor (such as to "Yes" or "No").  You
cannot just type the initial cap of that choice, like "Y" or "N."
     Another annoyance is that even when you have only one choice, you still
have to press <Enter>, followed with the <End> key.  It isn't intuitive, and
it slows you down.  The software was published in 1986, and could use a
fresh updating.
     Wines On Disk comes on a 5 1/4" disk only; it requires 256K RAM.  List
price is $39.95.
     Check with your software dealer or Paperback Software, 2830 Ninth Street,
Berkeley, CA  94710; 800-255-3242, 415-644-2116, FAX: 415-644-8241.
                                       #
     David Batterson reviews diverse "varietals" of PC applications.
```
{% endraw %}

## WORDFIND.TXT

{% raw %}
```
            Word Finder Plus - Spelling Checker/Thesaurus/Dictionary
                         Copyright 1990 David Batterson

     Word processing programs routinely come with spell checkers these days.
Some software publishers call them dictionaries but they aren't, since you can
only check and correct spelling, not check definitions.
     Most popular WP programs also contain a thesaurus, but some have a
relatively small number of synonyms.  There are also stand-alone programs,
which comprise a spell checker, a thesaurus, or both.  An excellent one is Word
Finder, which I reviewed previously here.
     I've completed reviewing a beta test copy of Word Finder Plus Ver. 1.00
from Microlytics.  It has been released in Europe, but is not being distributed
in the U.S. at this writing.
     The advanced Word Finder Plus now provides real-time spell checking
(beeping and/or highlighting errors as you go), as well as dictionary
definitions (although they are short).
     NOTE:  I have a minor objection to the term "thesaurus" as used by
software companies.  While one definition of thesaurus is a "book of selected
words, or specialized vocabulary," a second definition is "a book of synonyms
and antonyms."  That's the definition many people accept.
     My worn copy of "Roget's Pocket Thesaurus" contains BOTH synonyms and
antonyms.  You still cannot look up antonyms in Word Finder Plus.
     Words are so precise.  Two words can describe the same thing but there's
always a slight difference.  Take the word dog, for instance.  Word Finder Plus
provides these synonyms: canine, mongrel, mutt, pooch, hound, puppy and pup.
     They are synonymous, but not exactly the same thing.  Well, enough of
splitting [dog] hairs.  Speaking of hair, I checked Word Finder Plus for
"hairy."  It didn't come up with "hirsute," as expected.
     Word Finder Plus is compatible with most word processing programs,
including WordPerfect, WordStar, Microsoft Word, XyWrite, DisplayWrite,
PC-Write, PFS:Write, and many others.
     In the simple setup program, you can copy the dictionaries to a RAM disk
(if you use one).  This will speed up Word Finder Plus.  When you run Word Find
Plus, it automatically checks for expanded memory, for use by the thesaurus and
definitions modules.
     If there isn't enough (or any) expanded memory, it uses hard disk
swapping.  If hard disk space is lacking, it then uses conventional memory.
     Pressing <Alt>H brings up a window with the Word Finder Plus main menu.
The main commands are Correction, Thesaurus, Screen Check and Definitions.
These are also individually selected with <Alt>C, <Alt>T, <Alt>S and <Alt>D,
respectively.  The hot keys can be changed in the setup program.
     When viewing synonyms, you can enter a new word to look up, by simply
typing any letter from a to z.  A smaller window appears.  You then type in the
rest of the word beginning with that letter, and press <Enter>.
     In the main menu, you can also select Add Word, Ignore Word, Program
Settings, Options Menu, and Flash Card (where you get a word definitions quiz).
     You remove Word Finder Plus from memory by pressing <Alt>H, choose
Options, and then choose Remove WFPlus.  Or simply type WFPLUS/R at the DOS
prompt.
     In the next version of Word Finder Plus, I'd like to see the addition of
antonyms.  That would be quite a challenge, but I think they could do it.
     For more information, contact Microlytics, Inc., Two Tobey Village Office
Park, Pittsford, NY  14534; 716-248-9620.
                                       #
     David Batterson would rather stroll through a dictionary than read the
sports page.  Send him some choice words via MCI MAIL: DBATTERSON.
```
{% endraw %}

## WORDPUB.TXT

{% raw %}
```
       BetterWorking Word Publisher 5.0 - Word Processing & Outline Program.
                         Copyright 1990 David Batterson

     Remember the "trickle-down" theory of the Reagan years?  Tax breaks for
the rich would supposedly flow downward to us working stiffs and to the poor.
Somehow it didn't work out that way--what a surprise!
     Fortunately, the trickle-down principle DOES work in the software
industry.  Features originally found in high-end programs migrate to mid-level,
lower-priced software.  A good example is Ventura Publisher.  Many of its
characteristics are found in Publish It! and Finesse.
     Furthermore, the programs once considered low-end now have features found
once in more expensive intermediate-level software.  An example of this is the
integrated product, BetterWorking Eight-In-One.
     Spinnaker has another good-quality, low-end product along these lines.
It's called BetterWorking Word Publisher 5.0, and it's a combination word
processor, outliner and simple desktop publishing (DTP) package.
     As you probably know, word processors and DTP programs have each taken
features from the other, so both are hybrids.  You can do DTP projects with
WordPerfect 5.1, and do word processing with IMSI Publisher.  Thus the name
Word Publisher indicates both abilities.
     You get the usual word processing features (spell checker/thesaurus,
search and replace, headers/footers, superscripts/subscripts, and auto
hyphenation) along with the separate outliner.  You can also have up to four
columns, draw vertical and horizontal lines, create boxes and specify fonts.
Lines/boxes can have specified line thicknesses too.
     Word Publisher 5.0 comes with six bitmapped fonts, similar to Bitstream
fonts, but with different names:  Vista (like Dutch), Monterey (like Swiss),
Fresno (outline), Doyle (Olde English), Santa Barbara and Baker.  You can also
use your printer's resident fonts, such as Courier and Lineprinter.
    You can have point sizes from 6 to 60.  Unlike with Bitstream fonts, you
don't have to spend time creating all the type sizes you wish to use.  You
simple use the Typeface pull-down menu, and change the typeface and size.  Then
when you print, the type sizes are created on the fly.
     Just remember not to mix printer fonts and program fonts in the same
paragraph.  You can't have more than nine total fonts in a document either.
     Printing is done in proof (printer fonts only, and double spaced), draft
(low resolution, faster than proof), and quality (high resolution).  There's a
print spooler (queue), allowing continued use of Word Publisher while it prints
your document or outline.
     A noteworthy feature is the WYSIWYG (What You See Is What You Get)
graphics mode.  The WYSIWYG display is much better than the one in Professional
Write 2.1 (also reviewed in PC REVIEWS).
     In addition to normal view, the WYSIWYG includes a view scale, letting you
select reduced, distorted, medium and large page display.  Also, you may zoom
in or out easily by pressing the <+> or <-> key on your numeric keypad.  You
toggle between WYSIWYG and text mode with the <Ctrl><W> command.
     If you have a scanner, you're familiar with TIFF graphics files.  You can
easily draw a frame and import these images, as well as the popular .PCX files.
Images can also be resized and positioned in a snap.  Either move/resize with a
mouse, or change the measurement/position via the pull-down menu.
     Switching from WYSIWYG to text display, you'll notice that your boxes,
lines and graphics are automatically translated into text commands.  For
instance, your picture would be indicated by "@picture <filename.pcx>" along
with numbers indicating scale, width, position, etc.  The <@> command is also
used in text mode for mail merge, tables of contents, lines, and so forth.
     I think small businesses, home offices and students will find this a very
appealing package.  It's quick to learn, affordable, and has capabilities
you'll enjoy using.
     Requirements are simple enough: 512K RAM, DOS 2.1 or higher, hard drive
recommended, and a mouse is needed for the Draw feature.  The suggested list is
$59.95 (for 5.25" disks) or $64.95 (3.5").  You can count on a discounted
street price in the $40 range.
     For more information, contact Spinnaker Software Corp., 201 Broadway, 6th
Floor, Cambridge, MA  02139-1901; 617-494-1200, 800-826-0706 (24-hr. orders),
617-494-1219 (FAX orders).
                                       #
     David Batterson does lots of word processing while reviewing PC hardware
and software, and he doesn't use WordPerfect!  Contact him with your comments
via MCI Mail: DBATTERSON.
```
{% endraw %}

## WRITEPRO.TXT

{% raw %}
```
            WritePro Ver. 1.4 - "creative writing made truly easy"
                        Copyright 1990 David Batterson

     For some time now, I've been wondering why there isn't a software product
which teaches writing.  Why?--because literacy among students and young adults
appears to be lower than it was 20 years ago.
     Someone told me about WritePro, so I decided to get a copy.  I wasn't
elated when I discovered the contents.
     I've looked at it briefly so far.  As I suspected, WritePro is NOT the
type of writing tutorial I was thinking about at all.  It has limited appeal
in my view.
     WritePro is concerned with CREATIVE writing, and specifically meant for
writers who want to write novels and plays.  That's a narrow market.
     What I have in mind is a BASIC WRITING tutorial program aimed at those
who don't have much writing ability, and who want to learn how to write
sentences, paragraphs, memos, letters, reports, etc. (the most common type of
writing in general use today).  That's where the true need is.
     We already have programs like Grammatik IV, RightWriter and Readability.
But those are grammar, style and usage checkers, not writing tutorials.
     But as the funny writer Max Schulman used to say:  I digress.  Let's see
what WritePro has to offer those who already have some writing know-how.
     The program was created by Sol Stein, a novelist, playwright and book
editor (for Elia Kazan and Jack Higgins).  The lessons are based on solid
rules of good writing, such as "writing is rewriting," "surprise creates
suspense," and "we need to see something visual on every page."
     As you progress through all four lessons, you work with 58 of these
time-tested rules.  I have no criticism here.
     The problem with small software publishers with no previous experience is
they don't realize the need to keep up with the rapid changes in menu design,
newer graphics cards, mouse support, etc.  Merely transferring a book of
lessons into software form doesn't work very well!
     For instance, WritePro has terrible color palettes, which can't be
changed from within the program.  Parts of the screen were almost unreadable
on my VGA color monitor!  It has no visual appeal at all; the screens are dull
and drab.  The whole interface is dated and unfriendly.
     Now some might say that this isn't important for a software tutorial
program, as long as the teaching aspect is there.  But that's incorrect.
     The best teachers are those who capture your interest and/or entertain
you.  Training films and videos do best when they entertain as well as
instruct.  I sat through enough boring Army training films to learn that!
     The type of program I envision would have graphics, sound, a FUN aspect,
and an arcade game, like Mavis Beacon Teaches Typing!, the smash-hit typing
tutorial.  WritePro just isn't like that at all.
     Stein's comments in the manual are a bit sexist; he uses "he/him/himself"
repeatedly.  The old "war stories" in the manual could be eliminated too.
     I would recommend WritePro, lukewarmly, to those who prefer computerized
lessons over a live teacher.  It really needs a design change, though.
     Lessons 1 and 2 cost $39.95.  Lessons 1/2/3/4 cost $79.95.  You get 5
1/4" OR 3 1/2" disks, not both.  For more information, contact The WritePro
Corporation, 43 Linden Circle, Scarborough, NY  10510; 914-762-1255.
                                       #
     David Batterson reviews PC hardware and software.  Send your written gems
of wisdom via MCI Mail: DBATTERSON.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2392

     Volume in drive A has no label
     Directory of A:\

    GO       BAT      5104   9-05-90   4:04p
    CREDITS  COM      4176   9-05-90   4:05p
    MENU8    COM      4176   9-05-90   4:07p
    README   TXT     11911   9-05-90   4:03p
    CERTMAKR TXT      2778   9-05-90   4:00p
    2400ETC  TXT      5202  10-17-89  11:19a
    ABOVEBD  TXT      3982   3-30-90  10:49a
    FIRSTWD  TXT      3965   5-27-90   1:15p
    BROWSE   TXT      4140  11-07-89   3:08p
    CAREER   TXT      4049   6-06-90   4:41p
    COMPLETE TXT      5103  11-15-89   7:51p
    CONVERT  TXT      5842   6-11-90  10:54a
    COPROCSR TXT      4213   3-29-90   4:09p
    CRYSPUB  TXT      5273  10-17-89   9:24a
    DEMOII   TXT      3654  11-15-89  11:52a
    DIAGRAPH TXT      4009  11-10-89  12:23p
    DRDOS    TXT      4546   7-30-90   1:42p
    EPL6000  TXT      5281   1-30-90  11:43a
    FINESSE  TXT      6072   5-07-90   1:39p
    FREEDOM  TXT      5428  11-29-89   7:33p
    GETKEY   COM         8   1-01-80  12:35a
    PRNTRITE TXT      3100  12-24-89  10:19p
    HDINSTAL BAT        50   9-08-89   2:27p
    HUMOR    TXT      5399  11-02-89   5:32p
    IMSIGRAF TXT      5394   6-11-90  10:52a
    JTFAX    TXT      5159  10-17-89  11:05a
    LIST     COM     10231   5-16-90  10:12p
    MELT     COM       307   4-18-87   9:05a
    MENU     COM      4176   5-20-90   9:12p
    MENU2    COM      4176   6-15-90   3:47p
    MENU3    COM      4176   8-08-90   4:02p
    MENU4    COM      4176   8-15-90   8:34p
    MENU5    COM      4176   8-24-90  12:00p
    MENU6    COM      4176   5-06-90   8:09p
    MENU7    COM      4176   8-04-90  10:34p
    MIRROR3  TXT      4433   8-23-89  11:10p
    PCKWIK   TXT      4752  11-07-89  10:31a
    PCTOOLS  TXT      4898   5-03-90   8:58a
    PFSPUB   TXT      4077   5-08-90   2:25p
    POPDROP  TXT      4803   2-15-90   2:12p
    PRNTSHOP TXT      3691  11-09-89  11:07a
    PROWRITE TXT      4755   8-04-90  10:14p
    PUBLISH  TXT      4305   7-28-90   9:53p
    WORDFIND TXT      3765  12-24-89   3:02p
    EPSONLT  TXT      4268   1-30-90  11:47a
    SAGELINE TXT      3513  12-08-89  10:29p
    SCANMAN  TXT      4856  11-15-89  11:14a
    SPLASH   TXT      3383  12-12-89  11:15a
    VPEXPERT TXT      3190   2-16-90   6:14p
    WINES    TXT      2931   1-05-90   7:21p
    PCGLOBE  TXT      4247  12-23-89   4:51p
    SWIFTAX  TXT      3936   2-12-90   2:07p
    CHOMP    COM       301   9-30-88   4:58a
    4DOS     TXT      3595   2-18-90   9:21a
    GRAMATIK TXT      4636   3-01-90   9:16p
    FRACTALS TXT      3765   3-02-90   3:10p
    BACKLOAD TXT      4013   3-14-90   7:44p
    PAINTBR  TXT      3325   3-18-90   9:25p
    ONTIME   TXT      2592   4-02-90   8:34p
    STARLASR TXT      3412   4-02-90   5:06p
    WRITEPRO TXT      3613   4-03-90  10:22a
    VIRUSCAN TXT      5381   5-02-90   5:02p
    SYC      TXT      4105   5-12-90   8:06p
    ARTLINE  TXT      4028   5-16-90  11:51a
    WORDPUB  TXT      4752   5-19-90   6:09p
    README   COM      4176   5-20-90   9:51p
    PRODIGY  TXT      6310   6-15-90  12:18p
    WEATHER  TXT      4619   6-17-90  11:37a
    PCCOM    TXT      4531   7-21-90   9:16p
    LQ860    TXT      5300   8-08-90   7:50p
    1450PLUS TXT      3049   8-15-90   8:27p
    FAXPORT  TXT      4465   8-24-90  11:50a
    GO1      BAT        41   1-01-80   4:39a
    GO1      TXT      1002   1-01-80   5:24a
    FILE2392 TXT      2221  10-15-90   2:05p
           75 file(s)     310819 bytes
                            8192 bytes free
