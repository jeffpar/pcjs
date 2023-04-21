---
layout: page
title: "PC-SIG Diskette Library (Disk #737)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0737/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0737"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "XANADU UTILITIES"

    XANADU UTILITIES has some very useful programs. HOTDIR, for example, is
    a colorful sorted directory program that displays different colors based
    on file extension. The directory listing can be sent to the screen,
    printer, or disk file. Files can be sorted by name, extension, date,
    size, or other criteria. It can automatically display all files:
    hidden, system, archive, directory, read-only, and normal.
    
    PCSTAT3 displays disk/RAM statistics and is much more extensive and
    quicker than CHKDSK.
    
    SFIND finds files quickly anywhere on the disk and then lists on the
    screen all the matching files. SFIND can list files found even in an
    archive file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES737.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  737  XANADU Utilities                                       v1
---------------------------------------------------------------------------
Xanadu Utilities contains several programs. HOTDIR is a colorful sorted
directory program which displays different colors based on file extension.
The directory listing can be displayed to the screen, printer or disk file.
Many sorting options are present such as sort by name, extension, date, or
size. HOTDIR automatically displays all files: hidden, system, archive,
directory, read-only, and normal. PCSTAT3 displays disk/Ram statistics and
is much more extensive and quicker than CHKDSK. SFIND finds files quickly
anywhere on the disk and then lists all the matching files found to the
screen. SFIND is capable of listing files found even in an archive file.
 
READ     ME   Message concerning the programs
HDIR     COM  HotDIR, main file
HDIRCOLS DOC  How to customize colors on HotDIR
PCSTAT3  COM  PC Statistics, main file
SFIND    COM  Super Find, main file
XANADU   DOC  Documentation for Xanadu Utilities
XANADU   ARC  Archived file containing the above files
CURSORC  COM  Sets your cursor for a color screen
CURSORM  COM  Sets your cursor for a monochrome screen
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## HDIRCOLS.DOC

{% raw %}
```
Patches for customizing HotDIR 2.0 colors and other features
Copyright 1987 by Tony Overfield and Robert Woeger


For documentation on how to run the Xanadu utilities, see the XANADU.DOC file.


To customize HotDIR 2.0 you will need a file or sector modify utility such as
FM, NORTON, DISKZAP, etc. and position yourself to HDIR.COM's 1st sector.
This sector contains the Copyright message and a space where you can modify
(or PATCH) new defulat colors and values into the program.
You should be experienced with sector "zapping" and be sure and have a backup
copy of the HDIR.COM program (unmodified) in case you make any mistakes
during the patch procedure.

Find the phrase [Patch> in the sector and we will begin our patch reference
(below) from the byte immediately following the ">" of [Patch>.

To prevent problems with different versions, relative offsets from this byte
will be given instead of absolute offsets into the sector.


Offset 0	Currently 00H	Background color attribute (ORd with
				foreground color attribute when character
				is written to the screen).  Do not change this
				unless you want to play with the background
				color of the text displayed.  This byte is
				only in effect when the color for the extension
				is less than 10H (i.e. black background).

Offset 1	Currently 07H	Color value used for filenames which don't
				match any of the defined extensions/colors.
				Colors should be 00-0FH for colors with
				black background.

Offset 2	'EXE'           First file extension definition
Offset 5	0BH		Color attribute for .EXE files to display
.
.
.		The file extension definitions repeat until the end of ???
		All extensions may be replaced by your user defined extensions
		and colors.  Just place the color value after the extension.
		To add a color for files with DB3 extensions, choose a ??? or
		unwanted extension and replace it with DB3.  Then put the hex
		value of the color desired in the byte following the DB3.


After the last ???, there is a byte with a 00 value.  This is our new reference
point and all offsets below will be off of that 00 byte.

Offset	4	Value 03	Color of graphics line characters
Offset	5	Value 0DH	Color of directory entries
Offset	6	Value 02	Color of hidden files
Offset	7	Value 09	Color of file attributes
Offset	8	Value 0CH	Color of dates
Offset	9	Value 0AH	Color of file times
Offset 10	Value 0EH	Color of file sizes

About 10-16 bytes following this you should see a string of zero byte values.
Immediately following the last 00 byte you should see an 'FF' byte.  Change
this 'FF' to a '00' to toggle the current pause option.  If 'FF' then pause
at end of screen is enabled, '00' disables pause (unless you say HDIR /p).

We are considering writing an install program that makes it unnecessary for
you to manually "zap" your changes into HotDIR, but at the current time (2.0)
we have not added it.  Your comments and suggestions on how best to let you
change the colors and options would be greatly appreciated.

Tony Overfield & Rob Woeger    2/27/87

```
{% endraw %}

## NOTES737.TXT

{% raw %}
```
Program name:  Xanadu Utilities
 
Author name:   Xanadu Utilities
               P.O. Box FF
               College Station, TX 77841
 
Phone number:  (409) 693-6286
 
Suggested donation:  $25 or $35
 
Program description:
 
Xanadu Utilities contains several programs.  HDIR.COM is a colorful sorted
directory program which displays different colors based on file extension.
This program works on Monochrome, Color, and EGA. It displays a sorted
directory listing to the screen, printer, or disk file.  Many sorting options
are present such as sort by name, extension, date, or size.  Also the display
may be 1, 2, 4, or 6 columns.  Each type of file is displayed in a different
color based on its extension.  The files can also be listed across the screen
instead of up and down in columns.  HOTDIR can optionally clear the screen
before the directory is displayed and after every pause of screens.
HotDIR has been tested under DOS versions 2.1, 3.0, 3.1, and 3.2.  It should
also work on future DOS versions.  HOTDIR automatically displays ALL files
(hidden, system, directory, archive, read-only, normal).  PCSTAT3 displays
Disk/RAM statistics and other information in a well organized format. It is
much faster and displays more information than CHKDSK, even though it takes up
less disk space.  PCSTAT3 will respond by displaying the date, time, day of
week, disk volume label, DOS Version, DOS VERIFY status, BREAK status, disk
statistics for the drive, and amount of RAM installed and free. SFIND.COM
finds files fast anywhere on your disk, including ARC files. It searches the
entire disk and brings back a list of where all the matching files were found.
```
{% endraw %}

## HDIRCOLS.DOC

{% raw %}
```
Patches for customizing HotDIR 2.0 colors and other features
Copyright 1987 by Tony Overfield and Robert Woeger


For documentation on how to run the Xanadu utilities, see the XANADU.DOC file.


To customize HotDIR 2.0 you will need a file or sector modify utility such as
FM, NORTON, DISKZAP, etc. and position yourself to HDIR.COM's 1st sector.
This sector contains the Copyright message and a space where you can modify
(or PATCH) new defulat colors and values into the program.
You should be experienced with sector "zapping" and be sure and have a backup
copy of the HDIR.COM program (unmodified) in case you make any mistakes
during the patch procedure.

Find the phrase [Patch> in the sector and we will begin our patch reference
(below) from the byte immediately following the ">" of [Patch>.

To prevent problems with different versions, relative offsets from this byte
will be given instead of absolute offsets into the sector.


Offset 0	Currently 00H	Background color attribute (ORd with
				foreground color attribute when character
				is written to the screen).  Do not change this
				unless you want to play with the background
				color of the text displayed.  This byte is
				only in effect when the color for the extension
				is less than 10H (i.e. black background).

Offset 1	Currently 07H	Color value used for filenames which don't
				match any of the defined extensions/colors.
				Colors should be 00-0FH for colors with
				black background.

Offset 2	'EXE'           First file extension definition
Offset 5	0BH		Color attribute for .EXE files to display
.
.
.		The file extension definitions repeat until the end of ???
		All extensions may be replaced by your user defined extensions
		and colors.  Just place the color value after the extension.
		To add a color for files with DB3 extensions, choose a ??? or
		unwanted extension and replace it with DB3.  Then put the hex
		value of the color desired in the byte following the DB3.


After the last ???, there is a byte with a 00 value.  This is our new reference
point and all offsets below will be off of that 00 byte.

Offset	4	Value 03	Color of graphics line characters
Offset	5	Value 0DH	Color of directory entries
Offset	6	Value 02	Color of hidden files
Offset	7	Value 09	Color of file attributes
Offset	8	Value 0CH	Color of dates
Offset	9	Value 0AH	Color of file times
Offset 10	Value 0EH	Color of file sizes

About 10-16 bytes following this you should see a string of zero byte values.
Immediately following the last 00 byte you should see an 'FF' byte.  Change
this 'FF' to a '00' to toggle the current pause option.  If 'FF' then pause
at end of screen is enabled, '00' disables pause (unless you say HDIR /p).

We are considering writing an install program that makes it unnecessary for
you to manually "zap" your changes into HotDIR, but at the current time (2.0)
we have not added it.  Your comments and suggestions on how best to let you
change the colors and options would be greatly appreciated.

Tony Overfield & Rob Woeger    2/27/87

```
{% endraw %}

## XANADU.DOC

{% raw %}
```
The Xanadu Utilities 1.1
(c) Copyright 1987 by Tony Overfield and Robert Woeger.  All rights reserved.
_____________________________________________________________________________


        The Xanadu utilities are a collection of useful small utilities which
were designed to help you get the most out of your PC.  The utilities may be
freely copied and given to other PC users with the following restrictions:

        1.  You must distribute the Xanadu utilities in their original form
with no modifications, additions, or deletions.

        2.  No fee may be charged for the Xanadu utilities other than a disk
duplication fee (not to exceed $10).

        3.  Software authors and software companies may include the Xanadu
utilities with their programs as long as it is made clear that the Xanadu
utilities are "bonus" programs and that the customers have not paid for the
right to be registered Xanadu utility users.

        4.  The software in the Xanadu utilities is copyrighted by Tony
Overfield and Robert Woeger, and only they or their authorized representatives
may accept payments (registrations) for the programs.  Xanadu Compusoft is the
only company authorized by the authors to accept payments and registrations
for the Xanadu utilities.

        The Xanadu utilities are a continually evolving collection of small,
useful utilities which are written in assembly language for speed.  The
utilities are distributed via the Shareware software distribution method and
may be given to others as long as the above conditions are met.  With
Shareware, you get to try out the programs before you decide whether or not to
buy them.  This prevents you from being "stuck" with programs you don't want
or can't use.  We strongly back the idea of Shareware and continue to improve
our software because we feel that our satisfied users deserve the best from
us.

        If you find the Xanadu utilities useful, we ask that you send us a
registration fee and become a registered Xanadu utility user.  In doing so,
you will be helping us further the development of this software, plus you will
gain many benefits that we hope you will enjoy.  Registration gives you the
legal right to use our software on your machine.  Corporate and governmental
users of the Xanadu utilities are required to register each copy of our
software that is used on separate machines.  Site licenses, quantity
discounts, and special arrangements are all available.  Please write for
details.

We offer 2 unique registration options:

1)  For $25, you will become a registered user and receive a diskette with the
latest version of the Xanadu utilities along with some bonus program(s),
registration verification, news of new versions and products, and special
discount offers for new software.

2)  For $35, you will receive the above benefits, plus you will receive a
customized version of the Xanadu utilities which will contain a unique serial
number embedded in it.  This number can make you money - all you have to do is
pass your copy around to your friends, bulletin boards, and other computers.
Everyone who registers their copy with us for $35 and uses your serial number
will cause a $4 check to be sent to you.  In this way you will get an extra
benefit each time a person downloads a copy of the Xanadu utilities which has
your serial number embedded in it and chooses to register that copy.  You
could make $40 a month if only 10 people/month register with your serial
number!  This more than pays for the $35 registration, and those $4 checks can
really add up.

Note:  We add 6.25% Texas sales tax to orders within Texas.  All shipping
charges are INCLUDED in the above $25 and $35 prices.


To Order by Phone
-----------------

Please call (409) 693-6286 and be ready to give us the following information:
*Or send electronic mail via MCI MAIL to address 312-8914.*

Please state that you want to order the Xanadu Utilities.
Choose either the $25 or $35 registration option (see above).
Please state the quantity that you are ordering.
Have your credit card (MC/VISA) number and expiration date handy.
Also please give the operator the serial number of your copy (if available).


Orders are normally processed within 1-2 days.  We ship both through UPS and
via regular mail.  All orders are sent regular mail (First class) if you don't
specify.  The office hours for orders are 9am to 5pm Monday through Friday,
and 10am to 1pm on Saturday (Central Time).  After those hours you may leave a
message on our machine with your order (please include the product name,
price, your name, address, phone, and credit card number and expiration).



To Order by Mail
----------------

Send check or money order along with the appropriate Texas sales tax (6.25%)
if you reside within Texas.  Please include your name, company name
(optional), address, phone (optional), and the serial number of the copy you
have (type HDIR/i to get the serial number).

Item                            Texas Address           Out of state

Xanadu Utilities (Disk,           $ 26.56                  $ 25.00
Registration, News)

Xanadu Utilities (Disk,
Registration, News, Serial        $ 37.19                  $ 35.00
Number)


Mail to:

                        Xanadu Compusoft
                        P.O. Box FF
                        College Station, TX 77841







Description of the programs in the utilities
--------------------------------------------

        The Xanadu utilities currently consists of 5 programs which are all
included in the XANADU.ARC distribution file.  The names of the files that
make up the Xanadu utilities are:

          HDIR.COM   -   The HotDIR, colorful sorted directory program 2.0
                         Displays different colors based on file extension.
                         Many options too!  Works on Monochrome, Color, & EGA.
          PCSTAT.COM -   PC Status Utility 3.11 - Displays Disk/RAM statistics
                         and other information in a well organized format.
                         It is much faster than CHKDSK too!  New colors added.
          SFIND.COM  -   Super File Find 1.02X - Finds files fast anywhere on
                         your disk (even inside ARC files).
          CURSORM.COM -  Resets your cursor back to normal on a monochrome
                         display.  Useful after a program changes your cursor
                         to a blinking blob, etc.
          CURSORC.COM -  Same as CURSORM, except it is for color monitors.
          XANADU.DOC -   This documentation file
          HDIRCOLS.DOC - Documentation on how to customize colors in HotDIR



PCSTAT
-------

        PCSTAT is our PC Status Utility which performs many functions similar
to the DOS CHKDSK command.  The advantage in using PCSTAT is that it is much
smaller on the disk and faster than CHKDSK!  PCSTAT also displays more
information than CHKDSK and provides an organized output format.  A new
feature in PCSTAT 3.11 is the use of vivid colors within the program.  The
colors really show you your PC's status.  It runs on a monochrome, color, and
EGA systems.

        The format for running PCSTAT is:

                PCSTAT d:        (where d: represents the disk drive
                                 you want information about.  If you do not
                                 specify a drive, the default drive is used.)


        PCSTAT will respond by displaying the date, time, day of week, disk
volume label, DOS Version, DOS VERIFY status, BREAK status, disk statistics
for the drive, and amount of RAM installed and free.




SFIND
-----

        SFIND, Super File Find, is a utility which searches the entire disk
and returns back a list of the location of all matching files.  For instance,
if you wanted to find all files on a disk ending in .COM, your would type:

                SFIND *.COM

        The beauty of SFIND is that it is lightning fast and searches inside
of .ARC files also to locate the specified files.  This is very handy for
people who keep a lot of ARCs on their hard disk, and don't remember where a
file is located.

        Other options are: 

                /n  -  Tells SFIND not to search ARC files for files
                /p  -  SFIND will pause when the screen is full


The format for running SFIND is:   SFIND [d:] filename.ext [/n /p]
Where everything in brackets is optional.

Examples:  SFIND A:R*.EXE /n    will search on A: drive for all files that
                                begin with R and end with .EXE.  ARC files
                                will not be searched due to the /n option.

           SFIND PCSTAT3.*      will search on default drive for all files
                                whose filename is PCSTAT3.  All ARC files
                                will be searched.  No pausing will occur when
                                screen is full.




HDIR
----

        HotDIR is one of our most popular utilities.  It displays a sorted
directory listing to the screen, printer, or disk file.  Many sorting options
are present such as sort by name, extension, date, or size.  Also the display
may be 1, 2, 4, or 6 columns.  Plus we add the Hot Colors (user definable) so
that your files will jump out at you on your screen.  If you haven't seen
HotDIR on a color monitor, you should!  Each type of file is displayed in a
different color based on its extension.  This means that all .COM, .EXE, .BAS,
.PAS, .BAT, .ARC files are different colors!  You can easily customize HotDIR
to meet your color preferences too!  The following options are available to
you in HotDIR:

        /c  -  Clears the screen before HotDIR displays directory and after
               every pause of screens
        /p  -  toggles the Pause mode  (on or off) when screen is full
        /h  -  displays the Help message  (these commands)
        /i  -  displays the ID number of the registered user
        /a  -  causes HotDIR to produce ANSI.SYS compatible output 
               (Note: Normally HotDIR uses BIOS to display its output)
        /#  -  Uses 1, 2, 4, or 6 column display mode (default is 4 column)
        /r  -  produces Redirectable ASCII output (so you can save to file or
               send the output to the printer)
        /l  -  Lists files across the screen instead of up and down in columns
        /n  -  Primary sort by Name
        /e  -  Primary sort by Extension
        /d  -  Primary sort by Date
        /s  -  Primary sort by file Size

To customize colors, see the HDIRCOLS.DOC file included with the Xanadu
utilities.

We know of many people who swear on HDIR and will never go back to using DOS's
'DIR' command again.  If you are one of those people, drop us a line and give
us your before and after HDIR story.  We may even use your story in our ads.
How many times have you used 'DIR' only to find that you couldn't locate the
file you wanted in that long, unsorted DIR output?  We created HotDIR so all
PC users could find their files more efficiently.  With SFIND and HotDIR used
together, you should have no problem locating those "hard to find" files.

The best way to learn HDIR is to use it and try different combinations!  The
format to run HotDIR is:

        HDIR [d:filename or wildcards] [/options]

If you just run HDIR with no drive, wildcards, or options, you will see a 4
column display of the files in your current display sorted alphabetically by
filename.

Only one primary sort option is recognized (the last one specified).  All
sorts are secondarily sorted by filename.
Below are some examples of HDIR commands:


        HDIR c:\util       Displays directory of c:\util files on screen

        HDIR \ham /r >prn  Displays an ASCII directory redirected to the
                           line printer.

        HDIR /a /d         Displays a directory of the current directory
                           sorted by Date using the ANSI display codes.

        HDIR /2/p/c        Displays a 2 column file listing, clears the screen
                           first, and does not pause at the end of each page.
                           The files are displayed from the current directory.


After all the files are displayed, you will be shown the number of files that
HotDIR has displayed, their total size, and the actual size they take up on
your disk.  Then HotDIR will display the space remaining on the drive you
selected plus its volume label.

HotDIR has been tested under DOS versions 2.1, 3.0, 3.1, and 3.2.  It should
also work on future DOS versions.  It works with monochrome, color, and EGA
video adapters.  HotDIR automatically displays ALL files (hidden, system,
directory, archive, read-only, normal).  We feel this is far superior to the
way the DOS 'DIR' and other directory programs only display some of the files.

The reason the ANSI (/a) switch is provided is for those PCs that are not 100%
IBM compatible (i.e. TI, Old COMPAQs).  The BIOS on these machines is not the
same as on the PC, and the ANSI method of displaying colors must be used for
them.  We do not recommend using the ANSI option on PC compatibles because it
is much slower than BIOS and the colors might not be displayed correctly if
you have another utility (TSR) loaded that uses colors.

If you do not see colors on your machine when running HotDIR, make sure that
you have a color monitor and adapter, and try HotDIR with and without the /a
option.  If none of the above works, you probably have a device driver or a
utility loaded (memory resident) that is doing something strange to the
screen. Remove the utility or device driver and try HotDIR again.

Operational note:  The first time you run HotDIR after you boot your machine
you may experience a slight delay while DOS searches your hard disk for data.
This is normal, and occurs on hard disk systems the first time you run HotDIR
only.  We recommend using a hard disk cache program to speed up HotDIR's disk
seek time also.




CURSORM and CURSORC
- - - - - - - - - -

Simply run the appropriate CURSOR program for your display type (M for mono
and C for color) after one of your 'nasty' programs has changed the normal
cursor on you without your permission.  That's all there is to it.  The cursor
will be reset to the original BIOS cursor for your machine.




Concluding remarks
------------------

        Thank you very much for taking the time to obtain the Xanadu utilities
and try them out.  Whether or not you choose to register your copy and receive
the benefits of being a registered user, we ask that you make copies of the
Xanadu utilities for your friends and business associates to try out.  If you
have any comments or suggestions we would like to hear from you.  Tony and
Robert are always looking for ways to add new functions and make their
programs more useable.  Thanks to you, Shareware works for all of us.  We hope
you enjoy our programs and we look forward to serving you in the future.


Notice:  The Xanadu utilities are distributed on an "AS IS" basis.  We assume
no responsibility for damages or loss of business arising out of the use or
incorrect use of our programs on your machine(s).  A common cause for problems
users have with running our programs is that they have many TSR (memory
resident) utilities already loaded which interfere with our programs.  None of
our utilities stay memory resident, but if you do find weird things happening,
it is a good idea to remove your TSRs from memory before running the Xanadu
utilities.


```
{% endraw %}

## XANADU.DOC

{% raw %}
```
The Xanadu Utilities 1.1
(c) Copyright 1987 by Tony Overfield and Robert Woeger.  All rights reserved.
_____________________________________________________________________________


        The Xanadu utilities are a collection of useful small utilities which
were designed to help you get the most out of your PC.  The utilities may be
freely copied and given to other PC users with the following restrictions:

        1.  You must distribute the Xanadu utilities in their original form
with no modifications, additions, or deletions.

        2.  No fee may be charged for the Xanadu utilities other than a disk
duplication fee (not to exceed $10).

        3.  Software authors and software companies may include the Xanadu
utilities with their programs as long as it is made clear that the Xanadu
utilities are "bonus" programs and that the customers have not paid for the
right to be registered Xanadu utility users.

        4.  The software in the Xanadu utilities is copyrighted by Tony
Overfield and Robert Woeger, and only they or their authorized representatives
may accept payments (registrations) for the programs.  Xanadu Compusoft is the
only company authorized by the authors to accept payments and registrations
for the Xanadu utilities.

        The Xanadu utilities are a continually evolving collection of small,
useful utilities which are written in assembly language for speed.  The
utilities are distributed via the Shareware software distribution method and
may be given to others as long as the above conditions are met.  With
Shareware, you get to try out the programs before you decide whether or not to
buy them.  This prevents you from being "stuck" with programs you don't want
or can't use.  We strongly back the idea of Shareware and continue to improve
our software because we feel that our satisfied users deserve the best from
us.

        If you find the Xanadu utilities useful, we ask that you send us a
registration fee and become a registered Xanadu utility user.  In doing so,
you will be helping us further the development of this software, plus you will
gain many benefits that we hope you will enjoy.  Registration gives you the
legal right to use our software on your machine.  Corporate and governmental
users of the Xanadu utilities are required to register each copy of our
software that is used on separate machines.  Site licenses, quantity
discounts, and special arrangements are all available.  Please write for
details.

We offer 2 unique registration options:

1)  For $25, you will become a registered user and receive a diskette with the
latest version of the Xanadu utilities along with some bonus program(s),
registration verification, news of new versions and products, and special
discount offers for new software.

2)  For $35, you will receive the above benefits, plus you will receive a
customized version of the Xanadu utilities which will contain a unique serial
number embedded in it.  This number can make you money - all you have to do is
pass your copy around to your friends, bulletin boards, and other computers.
Everyone who registers their copy with us for $35 and uses your serial number
will cause a $4 check to be sent to you.  In this way you will get an extra
benefit each time a person downloads a copy of the Xanadu utilities which has
your serial number embedded in it and chooses to register that copy.  You
could make $40 a month if only 10 people/month register with your serial
number!  This more than pays for the $35 registration, and those $4 checks can
really add up.

Note:  We add 6.25% Texas sales tax to orders within Texas.  All shipping
charges are INCLUDED in the above $25 and $35 prices.


To Order by Phone
-----------------

Please call (409) 693-6286 and be ready to give us the following information:
*Or send electronic mail via MCI MAIL to address 312-8914.*

Please state that you want to order the Xanadu Utilities.
Choose either the $25 or $35 registration option (see above).
Please state the quantity that you are ordering.
Have your credit card (MC/VISA) number and expiration date handy.
Also please give the operator the serial number of your copy (if available).


Orders are normally processed within 1-2 days.  We ship both through UPS and
via regular mail.  All orders are sent regular mail (First class) if you don't
specify.  The office hours for orders are 9am to 5pm Monday through Friday,
and 10am to 1pm on Saturday (Central Time).  After those hours you may leave a
message on our machine with your order (please include the product name,
price, your name, address, phone, and credit card number and expiration).



To Order by Mail
----------------

Send check or money order along with the appropriate Texas sales tax (6.25%)
if you reside within Texas.  Please include your name, company name
(optional), address, phone (optional), and the serial number of the copy you
have (type HDIR/i to get the serial number).

Item                            Texas Address           Out of state

Xanadu Utilities (Disk,           $ 26.56                  $ 25.00
Registration, News)

Xanadu Utilities (Disk,
Registration, News, Serial        $ 37.19                  $ 35.00
Number)


Mail to:

                        Xanadu Compusoft
                        P.O. Box FF
                        College Station, TX 77841







Description of the programs in the utilities
--------------------------------------------

        The Xanadu utilities currently consists of 5 programs which are all
included in the XANADU.ARC distribution file.  The names of the files that
make up the Xanadu utilities are:

          HDIR.COM   -   The HotDIR, colorful sorted directory program 2.0
                         Displays different colors based on file extension.
                         Many options too!  Works on Monochrome, Color, & EGA.
          PCSTAT.COM -   PC Status Utility 3.11 - Displays Disk/RAM statistics
                         and other information in a well organized format.
                         It is much faster than CHKDSK too!  New colors added.
          SFIND.COM  -   Super File Find 1.02X - Finds files fast anywhere on
                         your disk (even inside ARC files).
          CURSORM.COM -  Resets your cursor back to normal on a monochrome
                         display.  Useful after a program changes your cursor
                         to a blinking blob, etc.
          CURSORC.COM -  Same as CURSORM, except it is for color monitors.
          XANADU.DOC -   This documentation file
          HDIRCOLS.DOC - Documentation on how to customize colors in HotDIR



PCSTAT
-------

        PCSTAT is our PC Status Utility which performs many functions similar
to the DOS CHKDSK command.  The advantage in using PCSTAT is that it is much
smaller on the disk and faster than CHKDSK!  PCSTAT also displays more
information than CHKDSK and provides an organized output format.  A new
feature in PCSTAT 3.11 is the use of vivid colors within the program.  The
colors really show you your PC's status.  It runs on a monochrome, color, and
EGA systems.

        The format for running PCSTAT is:

                PCSTAT d:        (where d: represents the disk drive
                                 you want information about.  If you do not
                                 specify a drive, the default drive is used.)


        PCSTAT will respond by displaying the date, time, day of week, disk
volume label, DOS Version, DOS VERIFY status, BREAK status, disk statistics
for the drive, and amount of RAM installed and free.




SFIND
-----

        SFIND, Super File Find, is a utility which searches the entire disk
and returns back a list of the location of all matching files.  For instance,
if you wanted to find all files on a disk ending in .COM, your would type:

                SFIND *.COM

        The beauty of SFIND is that it is lightning fast and searches inside
of .ARC files also to locate the specified files.  This is very handy for
people who keep a lot of ARCs on their hard disk, and don't remember where a
file is located.

        Other options are: 

                /n  -  Tells SFIND not to search ARC files for files
                /p  -  SFIND will pause when the screen is full


The format for running SFIND is:   SFIND [d:] filename.ext [/n /p]
Where everything in brackets is optional.

Examples:  SFIND A:R*.EXE /n    will search on A: drive for all files that
                                begin with R and end with .EXE.  ARC files
                                will not be searched due to the /n option.

           SFIND PCSTAT3.*      will search on default drive for all files
                                whose filename is PCSTAT3.  All ARC files
                                will be searched.  No pausing will occur when
                                screen is full.




HDIR
----

        HotDIR is one of our most popular utilities.  It displays a sorted
directory listing to the screen, printer, or disk file.  Many sorting options
are present such as sort by name, extension, date, or size.  Also the display
may be 1, 2, 4, or 6 columns.  Plus we add the Hot Colors (user definable) so
that your files will jump out at you on your screen.  If you haven't seen
HotDIR on a color monitor, you should!  Each type of file is displayed in a
different color based on its extension.  This means that all .COM, .EXE, .BAS,
.PAS, .BAT, .ARC files are different colors!  You can easily customize HotDIR
to meet your color preferences too!  The following options are available to
you in HotDIR:

        /c  -  Clears the screen before HotDIR displays directory and after
               every pause of screens
        /p  -  toggles the Pause mode  (on or off) when screen is full
        /h  -  displays the Help message  (these commands)
        /i  -  displays the ID number of the registered user
        /a  -  causes HotDIR to produce ANSI.SYS compatible output 
               (Note: Normally HotDIR uses BIOS to display its output)
        /#  -  Uses 1, 2, 4, or 6 column display mode (default is 4 column)
        /r  -  produces Redirectable ASCII output (so you can save to file or
               send the output to the printer)
        /l  -  Lists files across the screen instead of up and down in columns
        /n  -  Primary sort by Name
        /e  -  Primary sort by Extension
        /d  -  Primary sort by Date
        /s  -  Primary sort by file Size

To customize colors, see the HDIRCOLS.DOC file included with the Xanadu
utilities.

We know of many people who swear on HDIR and will never go back to using DOS's
'DIR' command again.  If you are one of those people, drop us a line and give
us your before and after HDIR story.  We may even use your story in our ads.
How many times have you used 'DIR' only to find that you couldn't locate the
file you wanted in that long, unsorted DIR output?  We created HotDIR so all
PC users could find their files more efficiently.  With SFIND and HotDIR used
together, you should have no problem locating those "hard to find" files.

The best way to learn HDIR is to use it and try different combinations!  The
format to run HotDIR is:

        HDIR [d:filename or wildcards] [/options]

If you just run HDIR with no drive, wildcards, or options, you will see a 4
column display of the files in your current display sorted alphabetically by
filename.

Only one primary sort option is recognized (the last one specified).  All
sorts are secondarily sorted by filename.
Below are some examples of HDIR commands:


        HDIR c:\util       Displays directory of c:\util files on screen

        HDIR \ham /r >prn  Displays an ASCII directory redirected to the
                           line printer.

        HDIR /a /d         Displays a directory of the current directory
                           sorted by Date using the ANSI display codes.

        HDIR /2/p/c        Displays a 2 column file listing, clears the screen
                           first, and does not pause at the end of each page.
                           The files are displayed from the current directory.


After all the files are displayed, you will be shown the number of files that
HotDIR has displayed, their total size, and the actual size they take up on
your disk.  Then HotDIR will display the space remaining on the drive you
selected plus its volume label.

HotDIR has been tested under DOS versions 2.1, 3.0, 3.1, and 3.2.  It should
also work on future DOS versions.  It works with monochrome, color, and EGA
video adapters.  HotDIR automatically displays ALL files (hidden, system,
directory, archive, read-only, normal).  We feel this is far superior to the
way the DOS 'DIR' and other directory programs only display some of the files.

The reason the ANSI (/a) switch is provided is for those PCs that are not 100%
IBM compatible (i.e. TI, Old COMPAQs).  The BIOS on these machines is not the
same as on the PC, and the ANSI method of displaying colors must be used for
them.  We do not recommend using the ANSI option on PC compatibles because it
is much slower than BIOS and the colors might not be displayed correctly if
you have another utility (TSR) loaded that uses colors.

If you do not see colors on your machine when running HotDIR, make sure that
you have a color monitor and adapter, and try HotDIR with and without the /a
option.  If none of the above works, you probably have a device driver or a
utility loaded (memory resident) that is doing something strange to the
screen. Remove the utility or device driver and try HotDIR again.

Operational note:  The first time you run HotDIR after you boot your machine
you may experience a slight delay while DOS searches your hard disk for data.
This is normal, and occurs on hard disk systems the first time you run HotDIR
only.  We recommend using a hard disk cache program to speed up HotDIR's disk
seek time also.




CURSORM and CURSORC
- - - - - - - - - -

Simply run the appropriate CURSOR program for your display type (M for mono
and C for color) after one of your 'nasty' programs has changed the normal
cursor on you without your permission.  That's all there is to it.  The cursor
will be reset to the original BIOS cursor for your machine.




Concluding remarks
------------------

        Thank you very much for taking the time to obtain the Xanadu utilities
and try them out.  Whether or not you choose to register your copy and receive
the benefits of being a registered user, we ask that you make copies of the
Xanadu utilities for your friends and business associates to try out.  If you
have any comments or suggestions we would like to hear from you.  Tony and
Robert are always looking for ways to add new functions and make their
programs more useable.  Thanks to you, Shareware works for all of us.  We hope
you enjoy our programs and we look forward to serving you in the future.


Notice:  The Xanadu utilities are distributed on an "AS IS" basis.  We assume
no responsibility for damages or loss of business arising out of the use or
incorrect use of our programs on your machine(s).  A common cause for problems
users have with running our programs is that they have many TSR (memory
resident) utilities already loaded which interfere with our programs.  None of
our utilities stay memory resident, but if you do find weird things happening,
it is a good idea to remove your TSRs from memory before running the Xanadu
utilities.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0737

     Volume in drive A has no label
     Directory of A:\

    CURSORC  COM        97   2-28-87  10:30p
    CURSORM  COM        94   2-28-87  10:28p
    FILES737 TXT      1420   4-15-87   3:50p
    GO       BAT        15   4-15-87   3:53p
    HDIR     COM      4639   3-01-87   3:11p
    HDIRCOLS DOC      3108   3-01-87   2:07p
    NOTES737 TXT      1696   4-15-87   3:37p
    PCSTAT   COM      2433   3-18-87   9:07p
    PCSTAT3  COM      2498   2-27-87   2:27a
    READ     ME       1249   3-21-87   3:44p
    SFIND    COM      2510   3-01-87  12:27p
    XANADU   ARC     18805   3-21-87   3:44p
    XANADU   DOC     15827   3-21-87   3:32p
           13 file(s)      54391 bytes
                          102400 bytes free
