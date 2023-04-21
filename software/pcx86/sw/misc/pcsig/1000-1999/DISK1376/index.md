---
layout: page
title: "PC-SIG Diskette Library (Disk #1376)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1376/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1376"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ARMADA UTILITIES"

    A collection of PC utilities for use in wordprocessing, printer control,
    screen display and electronic music composition.
    
    The utilities are:
    
    ~ ALTPAGE lets you print on both sides of a page by splitting an ASCII
    file into two separate files while allowing you to specify the
    page-lengths.
    
    ~ AUTHOR performs the functions of both ALTPAGE and PRINTIT while giving
    you a notepad, a quick text viewer, a typewriter emulator, a WordStar to
    ASCII converter, and a quick directory viewer.
    
    ~ BOOTFIX and RB1000 give Tandy 1000 users means for speeding up the
    rebooting of their systems.
    
    ~ CASE changes an ASCII or WordStar file into all upper- or lower-case
    characters.
    
    ~ CASIOID generates a random text patch for the Casio CZ-101 or CZ-1000
    synthesizer.
    
    ~ CRLF converts the carriage return of an ASCII file into a carriage
    return plus a linefeed or vice versa.
    
    ~ CRT31 changes the screen colors.
    
    ~ CURSOR changes the size and blink rate of the cursor.
    
    ~ DOCMAKER creates an executable .COM file from an ASCII file.  You will
    be able to read an existing file and edit it, display the text and
    change the screen colors.  Super fast display of single screens.  Great
    for batch file use.
    
    ~ FRQCNV4 prints musical staff paper, converts a frequency to the
    nearest musical note and vice versa and can change one key to another.
    
    ~ FXPRNT is a set-up utility for an Epson-FX or Brother printer.
    
    ~ MIDIPOP pops up tables showing a list of MIDI commands in hex and
    decimal for programming the MIDI synthesizer.
    
    ~ PRINTIT is a companion file to ALTPAGE and page formatting printer
    which sets margins, lines per page, headers and page numbers.
    
    ~ TSRMAKER, similar to DOCMAKER, can also retain the file in the
    background for a pop-up display when you want it.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ALTPAGE.DOC

{% raw %}
```
ALTPAGE2.ARC                                                  PRINTIT!

NOTE!!  PRINTIT!  is  no  longer  included in the archive with ALTPAGE
since I've had people express a desire to  use  their  own  formatting
utility to print the Odd/Even files. Also, PRINTIT! has been rewritten
to be a general use formatting utility that allows the user to set the
margins  at  the top, bottom and left edge and determine the number of
lines  per page  that are printed.  ALTPAGE  now allows you to set the
number of lines/page  so you must remember the count and enter it into
PRINTIT! when you do the actual printing.

Version 2.1 - November 7,1986
  This new release has some assembly language routines  included  that
help   to   speed   up  processing,  mostly  in  the  screen  handling
areas...also cleared up a minor bug with  the  Title  page  that  only
appeared at certain times. A CGA adapter (or equivalent such as T1000)
is  recommended...the  new code makes a lot of ROM BIOS calls so close
compatibles are needed to use the new version.

             Alternate Page Print Utility v2.1

This  is  the  new release version of a utility that will allow you to
split up an ASCII text file and print it on both sides of your printer
paper, thereby cutting paper costs in half! 

This  program is released as Shareware; it is the copyrighted property
of Armada Software  and is for private, non-profit use  only.  It  may
not  be sold, combined or packaged with other programs without express
written permission from ASL. 


                    How to use ALTPAGE
                    ==================

Start by running the Altpage.com program. It will ask for the name  of
the  file  that you wish to split up into even and odd pages. You must
give a valid filename (drive:filename.ext)  or  this  version  of  the
program bombs out. If the input filename is okay, the program will ask
for  the  drive to write the 'split files' onto....for example A or A:
are valid drivenames. Altpage then begins working and divides the file
into 56 line sections and creates two new  files  called  ODD.TXT  and
EVEN.TXT.  There  must  be  room  for these two files on your drive or
we'll bomb out again! Assuming that everything is done correctly,  you
now have the text divided and ready to print. 

Printit.com is provided to allow you to correctly print the  even  and
odd  pages. The ODD.TXT file MUST be printed first (well I designed it
that way but it might work the other way too). Start  with  the print-
head at the very top of the paper.  A margin of 5 lines at the top and
5  lines  at  the  bottom will be automatically provided. Printit will
output 56 lines of text in addition to the margins for a total  of  66
lines per page. 

After  ODD.TXT is printed, remove the paper from the printer (allow an
extra sheet at the bottom in case the even pages run  slightly  longer
than  the  odd) and flip the paper over and reinsert it into the prin-
ter. Again, make sure that the printhead is at the top of the page and
run Printit, this time specifying EVEN.TXT as the file to be  printed.
When  the  printout  is complete, you will have printed your text file
using both sides of the paper. 

Remember, this program only works with straight ASCII text files. Some
word  processors  write  their  output  in a special format or set the
parity bit (7) for special functions. If you think that your file  may
contain  graphics or other characters with the high bit set, I suggest
that you run your file through the STRIP2.COM program that is included
with this release of ALTPAGE. It will remove formfeeds and convert all
characters with the parity bit set to a printable form...and its FAST!
To use the strip program, run it in the following manner:

STRIP2 < d:infile.ext > d:outfile.ext  

D:  is  the drive letter (optional) and infile.ext is the filename and
extention of the file to be stripped while outfile.ext if the name  of
the new file that you will be creating that will be in ASCII form. Now
use  ALTPAGE on the stripped file to split your text into even and odd
pages.

                   **** REGISTRATION ****
The registration fee for Altpage.com is $20.00 which entitles the user
to a disk containing the complete collection of our utilities. Some of
the  programs  on the registration disk have never  been  released  as
shareware.

Send your check or money order for $20.00 to:

                 Jack A. Orman
                 Armada Software
                 Box 858
                 Southaven, MS  38671

Comments and suggestions are welcome...
On GEnie send e-mail to J.Orman
On Delphi send to username JAO.

```
{% endraw %}

## BOOT.DOC

{% raw %}
```
                            BOOT.COM v1.1                      9/7/87

                                  by

                            Jack A. Orman


         This short  machine language program will perform a warm boot
         on your system in order to avoid  the  lengthy  delay  caused
         when the computer checks  all  available  memory  as  happens
         when the computer is first started.

         Proper syntax is:       BOOT WARM   or   boot warm
                                 
                              or

                                 BOOT COLD   or   boot cold

         A cold boot, of course, will go through the memory check and
         included in the program for completeness.

         This version corrects a booting error that happened on some
         machines and a syntax error in the command parsing.
```
{% endraw %}

## BOOTFIX.DOC

{% raw %}
```






                              BOOTFIX.SYS

                        by George A. Stanislav



    BootFix is a device driver for Tandy 1000. I was not even aware of the
fact that interrupt 19h (warm boot) works on the Tandy 1000. Whenever I tried
to issue this interrupt, it locked up my system.

    Then I read Quick Boot, by Dave Rowell, in the May 1987 issue of 80 MICRO.
He published a device driver called REBOOT.SYS which makes Tandy 1000 to have
a warm boot whenever Ctrl-Alt-Del is pressed. A warm boot as opposed to the
cold boot does not go through the initial checking. Therefore, a warm boot
is immediate, while a cold boot takes 16-20 seconds.

    In his article Dave Rowell explained why interrupt 19 fails so often
on the Tandy 1000: If a memory resident program intercepts an interrupt and
changes its address, a warm boot will have that interrupt address point to
a random place in the memory which leads to a lockup of the system. His
driver saves the addresses of all the interrupts before they are changed.
When you hit Ctrl-Alt-Del, the driver restores the original interrupt address
table and issues interrupt 19 for the warm boot. That's why his driver has
to be installed as the first device in config.sys - oh well had to up untill
now.

    I decided to take Dave Rowell's idea one step further and wrote a device
driver which too saves the original interrupt table. Then it intercepts inter-
rupt 19. If a program issues int 19, my driver will restore the original
interrupt address table and issue int 19 one more time. This time, as its
address was restored with the other interrupts, int 19 will do what it is
supposed to do: warm-boot the computer.

    The main reason for writing this device driver was the fact that I am
running an Opus bulletin board. If any of the support programs of my BBS
(or even Opus itself) want to reboot the computer (e.g. watchdog) by issu-
ing int 19, the computer would lock up and the board would be down.

    With the driver installed, the computer will reboot and restart the
bulletin board from autoexec.bat. That way I can go on vacation trusting
that two weeks later I will find my bulletin board up and running.

    Another advantage of BOOTFIX.SYS is that during warm boots the
system time remains unchanged. The date is lost (can be reentered),
but the time of the day is preserved. I wished I had it before I got
my battery backed up clock! Bulletin boards are time driven, so preserv-
ing the time at warm reboot maybe the most important reason why you
install this driver.

    As I am not running the only Tandy 1000 Opus bulletin board, I am
releasing my driver for public use. I am sure that other Tandy 1000 owners
will find it useful as well. Some programs issue interrupt 19 when they
get into a blind alley. Others do when they think their copy protection
scheme was violated. Some older programs may issue int 19 just for the
fun of it whenever they are finished.

    BOOTFIX.SYS is my first step in developing a FOSSIL driver for the
Tandy 1000. A FOSSIL driver is expected to be able to reboot the computer
either in the cold or the warm way. My FOSSIL driver will be able to do
either. BOOTFIX.SYS was my "study" part of developing the larger driver.

    How to use BOOTFIX.SYS? It has to be installed as a device in the
config.sys file like this:


              device=[drive:][\path\]bootfix.sys


    I have mine in my opus\util directory on drive c:. As I boot from
drive c:, I do not need to mention the drive. This is what is in my
config.sys:

              device=opus\util\bootfix.sys

    Now, the ABSOLUTELY IMPORTANT thing is that this driver M*U*S*T
be installed before any other driver, including Dave Rowell's REBOOT.SYS.
You may be using drivers like ANSI.SYS, KEYCNVRT.SYS, BRK.SYS etc. All these
must be installed after BOOTFIX.SYS. The reason is that most likely these
drivers change the address of an interrupt. If BOOTFIX.SYS were loaded after
any of them, it could not save the original interrupt address table.

    If you use Dave Rowell's REBOOT.SYS on your Tandy 1000 together with my
BOOTFIX.SYS (a combination I highly recommend), REBOOT.SYS no longer has to
be the first device installed. As long as BOOTFIX.SYS is the first device
installed, REBOOT.SYS can be anywhere following (before or after any other
drivers, e.g. ANSI.SYS). In that case, REBOOT.SYS will restore a wrong inter-
rupt table. That however does not matter, as REBOOT.SYS ends by calling int 19
which will be fixed with BOOTFIX.SYS.

    I tested BOOTFIX.SYS on two Tandy 1000 computers, one was an older one
(the original Tandy 1000). The other one was a Tandy 1000 A. I tested it
with 3 versions of DOS: MS-DOS 2.11 which came from Tandy, PC DOS 3.10 (the
IBM version) and "generic" MS DOS 3.20. With all three versions BOOTFIX.SYS
worked with no difficulties.

    I tested it after I loaded several memory resident programs including
the "famous offenders" PRINT and SIDEKICK. Issuing int 19 resulted in an
immediate warm reboot. Issuing the same interrupt under the same circum-
stances but without BOOTFIX.SYS installed resulted in the lock-up of the
system.

    One final note to novice users: A device driver is installed at the
boot time. That means after you add device=bootfix.sys into your
config.sys you have to reboot to install it for the first time.

    I have enclosed a test program INT19.COM which does nothing but
issuing interrupt 19. You can type INT19 from the DOS prompt. If it
locks up your computer (which is likely), you need BOOTFIX.SYS. If it
reboots the computer and does not lock it up, you can do well without
BOOTFIX.SYS. The program is meant for Tandy 1000 users only. I do not
know if other PC's need it or could use it. You can test it with INT19.COM
if you wish. If you find out that this program helps on other computers,
please let me know. I can be reached on my bulletin board (you need a
modem to call it) at (412) 571-0472. You can probably send me a message
from any Opus bulletin board. Just make sure it is addressed to 129/39.

```
{% endraw %}

## CASIOID.DOC

{% raw %}
```
                   Casioid - Random Patch Generator
                             Version 1.0
                   Copyright 1987 by Jack A. Orman

                           Armada Software
                               Box 858
                         Southaven, MS  38671

"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

*  What is Casioid?
    It  is  a  program  that will generate a random text patch for the
Casio CZ-101 or CZ-1000 synthesizer using a preset array of parameters
that ensures that no invalid settings are chosen.

*  What kind of computer?
    This is an IBM PC or compatible program. It makes a  lot  of  BIOS
calls  and  assumes  that  you have a CGA card for your video. If your
video adapter card does not follow the strict IBM  memory  table  then
the  printout  and file save functions may not work properly; however,
you can always hit the PrtScr button to get  a  screen  dump  to  your
printer.  Besides the IBM PC, it has been tested on a Tandy 1000, 3000
and Leading Edge and found to work properly.

*  Do I need a MIDI interface?
    No,  this program is not a patch librarian but instead generates a
text file that must be entered manually into the CZ patch memory.

*  How does it work?
    It's very simple...start the program by typing  in  the  name  and
wait  for  the  graphics and title screens to finish running. You will
see a full screen display of the operating parameters for the CZ. Each
time you hit the number '1' key, a new random patch is generated. Once
you see something that you like, hit number '2' for  a  printout.  The
program tests your printer to make sure that it is on-line and that it
has  paper in it. Hitting the number '3' key will cause the patch that
is currently on the screen to be dumped to a disk file with  the  name 
"CZ_?.PAT"  where  the  ?  is  a  digit from 0 to F, for a total of 16
patches that can be saved at one time. There must be enough disk space
in the current directory for the  files.  Each  patch  is  about  2050
bytes. A file that has been saved to disk can be printed by giving the
DOS  command:  "Copy CZ_?.PAT prn".    The  patch  will be sent to the
printer properly formatted exactly like the screen.  Number  '4'  will
cause the program to end. 

* Does it take a long time to generate a random patch?
   NO! This program uses a lot  of  machine  language  subroutines  to
speed  up  the  process  and can generate a random patch almost before
your finger leaves the key. 

* What does it cost?
   This program is copyrighted and is for the  private,  noncommercial
use of individual musicians. It may not be sold, alone or bundled with
other  software,  without  written  consent of the author. But for the
individual user it is FREE!

                   **** REGISTRATION ****
The registration fee for Casioid.com is $20.00 which entitles the user
to a disk containing the complete collection of our utilities. Some of
the  programs  on the registration disk have never  been  released  as
shareware.

Send your check or money order for $20.00 to:

                 Jack A. Orman
                 Armada Software
                 Box 858
                 Southaven, MS  38671

Comments and suggestions are welcome...
On GEnie send e-mail to J.Orman
On Delphi send to username JAO.


```
{% endraw %}

## CRLF.TXT

{% raw %}
```
                 CRLF.com version 1.1

                        by
                   Jack A. Orman
                   Copyright 1988

        This program is used to process a text file that is
stored in ASCII format and converts all of the carriage returns
($0D) into carriage return/line feed pairs ($0D,$0A). This is
necessary for the files to be displayed properly on many word
processors. Files created by Macintosh word processors (and others)
often use a carriage return only.

Proper syntax for using CRLF.com is:

      CRLF <d:readfile> <d:writefile> <ENTER>

where d: is the drive and an optional path, readfile is the name
of the ASCII text file to be read, and writefile is the name of the
ASCII text file that you wish to save the converted file to. If the
writefile already exists, CRLF will write over it with no warning.

Note: DO NOT use CRLF for files that are larger than 62k bytes.
      Break larger files into sections that are less than 62k and
      process them separately.

```
{% endraw %}

## CRT.DOC

{% raw %}
```
10/29/88                     CRT v3.1

                                 by
                            Jack A. Orman

                           ARMADA SOUND LAB
                               BOX 858
                          Southaven, MS 38671


CRT  is a small machine language program that allows you to change the
border, background and foreground colors. There are three  subroutines
in CRT.  They are:
         
         BORDER  -  which sets the border color.

         CLEAR   -  which clears the screen and sets new foreground
                    and background colors.
         COLOR   -  now just as fast as  Clear but it does not wipe the
                    text off the screen as it changes attributes.
         MONO    -  which allows you to set the mono screen
                    to a new attribute

The color set values for the CGA video system are:

         0  -  black                   8  -  dark gray 
         1  -  blue                    9  -  light blue 
         2  -  green                   A  -  light green
         3  -  cyan                    B  -  light cyan
         4  -  red                     C  -  light red
         5  -  magenta                 D  -  light magenta
         6  -  brown                   E  -  yellow
         7  -  white                   F  -  bright white

To use CRT to set a mono screen, you would use:

         CRT MONO parm1 parm2 <ENTER>

where parm1 is the foreground and parm2 is the background.
valid options for mono are:
          MONO 7 0 - for a normal screen
          MONO 1 0 - for all underlined characters
          MONO 0 7 - for reverse video characters
          MONO F 0 - for bright characterson a black screen

To use CRT to set borders, you would run it as follows:

         CRT BORDER parm1 <ENTER> 

where parm1 is one of the color set values from the chart above.

To use the other features, type in one of the following:
    
         CRT CLEAR parm1 parm2 <ENTER>
                  or
         CRT COLOR parm1 parm2 <ENTER>

where parm1 is the foreground color that you wish to use and parm2  is
the background color.

As an example, to clear the screen and set the colors to green text on
a black background, you would use:    

         CRT CLEAR 2 0 <ENTER>          

There must be only one space between the command and the parameters.
I  hope  that you get lots of use out of this small utility and let me
hear your comments or suggestions for improvements.

                   **** REGISTRATION ****
The registration fee for CRT31.com is $20.00 which entitles the user
to a disk containing the complete collection of our utilities. Some of
the  programs  on the registration disk have never  been  released  as
shareware.

Send your check or money order for $20.00 to:

                 Jack A. Orman
                 Armada Software
                 Box 858
                 Southaven, MS  38671

Comments and suggestions are welcome...
On GEnie send e-mail to J.Orman
On Delphi send to username JAO.
On Compuserve to 72261,677

```
{% endraw %}

## CURSOR.DOC

{% raw %}
```
                              CURSOR.COM
                              Copr. 1988
                                  by
                             Jack A. Orman

This a short machine language program that controls the size and blink
rate of the cursor that is displayed on the screen. It is activated by
entering the program name followed by the cursor type:

CURSOR [type] <Enter>

        Valid cursor types are:
======================================================================
FAST  - Blinking at 1/16 of the vertical field rate.

SLOW  - Blinking at 1/32 of the vertical field rate.

ON    - Same as FAST, this is the normal default cursor.

OFF   - Invisible cursor.

BLOCK - A large solid slow-blinking cursor. Seven scan lines tall.

HALF  - A solid blinking cursor about 1/2 the size of the block.

LINE  - A thin single-line blinking cursor.

MONO  - A normal cursor for monochrome adapters.

MBLOCK- A block cursor for mono adapters.


The Motorola 6845 CRT controller chip  that  is  inside  the  PC  (and
compatibles)  supports  a  non-blinking  cursor  mode  but that is not
possible to set due to the hardware implementation in most machines. A
modification to the circuitry around the 6845 would be  necessary.  My
guess  is  that  address  line RA4 (pin 34) of the 6845 should be con-
nected but that's just conjecture. 

7-25-87

                   **** REGISTRATION ****
The registration fee for Cursor.com is $20.00  which entitles the user
to a disk containing the complete collection of our utilities. Some of
the  programs  on the registration disk have never  been  released  as
shareware.

Send your check or money order for $20.00 to:

                 Jack A. Orman
                 Armada Software
                 Box 858
                 Southaven, MS  38671

Comments and suggestions are welcome...
On GEnie send e-mail to J.Orman
On Delphi send to username JAO.
On Compuserve to 72261,677

```
{% endraw %}

## DOCMAKER.TXT

{% raw %}
```

                            DOCMAKER v1.2

                                  by

                            Jack A. Orman 
                               Box 858
                          Southaven, MS 38671



        What is DOCMAKER?
        """""""""""""""""
        This program will create an executable  .COM  file  out  of  a
        text  file  of  24  lines  of  80  characters  each. This fast
        operating program can then be used  as  a  stand-alone  screen
        display  or  put  in  a  batch  file  to greatly speed-up text
        writing.


        Features!
        """""""""
        *  Full Screen text editor!

        *  DOCMAKER  will  read  the  text  out of a .COM file that it
           has created! No need to look for  the  original  text  just
           to modify the document.

        *  Use any word processor that can  save  a  file  as straight
           ascii  text  to make the display that you want to turn into
           a  .COM  program.  Then  use  DOCMAKER  to  turn  the  file
           into a rapid displaying program!

        *  Full selection of colors to  be  used  when  the  .COM file
           displays the text.

        *  On-line help.

 
        How to use DOCMAKER.
        """"""""""""""""""""
        Using  a  word  processor,  write  the screen of text that you
        would like to be displayed. There can only be 24 lines in  the
        file and each line may be a maximum of 80 characters. Save the
        text in ascii format and exit. 

        DOCMAKER <enter>, will put the program in operation. Select F2
        from the opening screen and you will be prompted for the  name
        of  the  text  file  to  read. DOCMAKER will read the text and
        display it so that it may be checked out before the .COM  file
        is created. 

        Assumming  that  the  file is ready to use, hit the F6 key and
        make a choice of colors to be used in the .COM  file  display.
        The  text  display  will  then  be  set to the colors you have
        chosen so that you may review the choices and modify  if  they
        are not what you want.

        To  create  the  .COM program, hit F3 and you will be prompted
        for a name to use for the  text  display  program.  The  drive
        letter is optional but the extention MUST be .COM! The default
        drive and directory will be used if one is not specified.

        Example:  If  I  want  to create a file called HELP on my hard
                 drive, I would enter 'C:HELP.COM' as  the filename to
                 use. If I want to write this file to my hard drive in
                 the UTIL directory, I would enter 'C:\UTIL\HELP.COM'

        DOCMAKER's  full-screen  editor  may  be used to write text or
        modify a file that has been read into the program's buffer. It
        operates like  a  basic  word  processor  with  no  frills.  A
        display  of  the status of the insert/delete mode is available
        on line 25. It is toggled by the INSERT key. The cursor  arrow
        keys  are  used to move around the screen and PgUp, PgDn, Home
        and End are used to move to extremes of the display. Tab  will
        advance the cursor 10 spaces.

        DOCMAKER  is  copyrighted  and for private, non-commercial use
        only! 

                   **** REGISTRATION ****
The registration fee for DOCmaker.com is $20.00 which entitles the user
to a disk  containing the complete collection of our utilities. Some of
the  programs  on  the registration disk have never  been  released  as
shareware.

Send your check or money order for $20.00 to:

                 Jack A. Orman
                 Armada Software
                 Box 858
                 Southaven, MS  38671

Comments and suggestions are welcome...
On GEnie send e-mail to J.Orman
On Delphi send to username JAO.
On Compuserve to ID# 72261,677
```
{% endraw %}

## FILE1376.TXT

{% raw %}
```
Disk No: 1376
Program Title: Armada Utilities
PC-SIG version: 1

A collection of utilities developed on Tandy computers for use in word
processing, printer control, screen display and electronic music
composition.  ALTPAGE lets you print on both sides of a page by
splitting an ASCII file into two separate files while allowing you to
specify the page-lengths.  CASE changes an ASCII or Wordstar file into
all upper or lower-case characters.  CRLF converts the carriage return
of an ASCII file into a carriage return plus a linefeed or vice versa.
DOCMAKER creates an executable .COM file from an ASCII file.  You will
be able to read an existing file and edit it, display the text and
change the screen colors.  TSRMAKER, similar to DOCMAKER, can also
retain the file in the background for a pop-up display when you want it.

PRINTIT is a simple page formatter that lets you set margins and include
headers and page numbers.  AUTHOR is a program which performs the
functions of both ALTPAGE and PRINTIT while giving you a notepad, a
quick text viewer, a typewriter emulator, a WordStar to ASCII converter,
and a quick directory viewer.  FXPRNT is a set-up utility for an
Epson-FX or Brother printers.

FRQCNV4 prints musical staff paper, converts a frequency to the nearest
musical note and vice versa and can change one key to another.  MIDIPOP
pops up tables showing a list of MIDI commands in hex and decimal for
programming the MIDI synthesizer.  CASIOID generates a random text patch
for the Casio CZ-101 or CZ-1000 synthesizer.

Two additional programs are CRT31, which allows you to change the screen
colors and CURSOR, which changes the size and blink rate of the cursor.
BOOTFIX and RB1000 give Tandy 1000 users means for speeding up the
rebooting of their systems.

Synopsis:  A collection of utilities for use in word processing,
printer control, screen display and electronic music composition.

Usage:  Utilities/Word Processing/Printer Control/Screen Display/Music.

Special Requirements:  Some programs require a CGA card.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

ALTPAGE  COM  Alternate page printing utility.
ALTPAGE  DOC  Documentation file for ALTPAGE.
AUTHOR   COM  Shell that runs several of these utilities.
AUTHOR   DOC  Documentation file.
BOOT     COM  Program to reboot your computer.
BOOT     DOC  Documentation file.
BOOTFIX  DOC  Documentation file.
BOOTFIX  SYS  Soft-boot system file for Tandy1000.
CASE     COM  Program to change text files to upper/lower-case.
CASE-DOC COM  CASE documentation.
CASIOID  COM  Random patch generator.
CASIOID  DOC  Documentation file.
CRLF     COM  Converts ASCII file carriage returns into linefeeds.
CRLF     TXT  Program info.
CRT      COM  Changes background, foreground, and border colors.
CRT      DOC  Documentation file.
CURSOR   COM  Changes size of you cursor.
CURSOR   DOC  Documentation file.
DOC      COM  Sub program for DOCMAKER.
DOCMAKER COM  Documentation lay-out program.
DOCMAKER TXT  Information on DOCMAKER.
FQ       COM  Musical utilities.
FQ       DOC  Documentation file.
FXPRNT   COM  Printer utility.
FXPRNT   DOC  Documentation file.
INT19    COM  Misc program.
MIDIHEX  COM  Midi Reference guide.
MIDIPOP  COM  Midi Reference guide.
MIDIPOP  DOC  Documentation file.
NOLF     COM  Convers carriage linefeeds into carriage returns only.
NOLF     TXT  Program info.
PRINTIT  COM  A page print utility.
PRINTIT  DOC  Documentation file.
RB1000   COM  Reboot program for Tandy1000.
RB1000   DOC  Documentation file.
README        Program info.
README   1ST  Program info.
STRIP2   COM  Misc. program.
TEMPLATE DOC  Documentation file.
TSRMAKER COM  Make your own memory resident files.
TSRMAKER TXT  Program info.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## FQ.DOC

{% raw %}
```
                    Musical Utilities v4.0
                    """"""""""""""""""""""

   This  program  and  the  documentation is copyright 1987 by Jack A.
Orman and is for non-commercial use only. It may not be sold,  bundled
with  other  software  or  otherwise  distributed for a profit without
written permission of the author.



* - What is this program?
      It's actually a collection of several useful  programs  in  one.
The main feature is the Frequency-Note conversions. It does some fancy
calculations  and  will  conevrt  either  a  frequency  to the nearest
musical note or if you input a frequency it will determine the closest
note and octave. It features a table of musical instrument ranges  and
a  key  transposition  calculator.  The  last feature is a staff paper
printing routine. If you have an Epson FX,  IBM  graphics  printer  or
another  printer that can do the IBM graphics character set, then this
feature will printout music staff paper with 9, 10,12, or 18  sets  of
lines per page.


* - How do I use it?
      Just run the program! Its got menus for everything and the arrow
keys  move the highlighted bar around to make your selection. Just hit
ENTER when your choice is highlighted to select it.


                   **** REGISTRATION ****
The registration fee for FRQCNV4.com is $20.00 which entitles the user
to a disk containing the complete collection of our utilities. Some of
the  programs  on the registration disk have never  been  released  as
shareware.

Send your check or money order for $20.00 to:

                 Jack A. Orman
                 Armada Software
                 Box 858
                 Southaven, MS  38671

Comments and suggestions are welcome...
On GEnie send e-mail to J.Orman
On Delphi send to username JAO.


```
{% endraw %}

## FXPRNT.DOC

{% raw %}
```
                      FXPRNT.EXE   VERSION 1.1
                                              
This program was originated and tested on a 640k Tandy 1000 but should
work  well  on  any IBM PC compatible with 128k memory. The codes that
are used are for the FX series Epson printers and work perfectly on my
Brother  M-1509.  Additional versions of this program are planned that
will support other printers so write to us with your requests.

The program is easy to use, merely hit the key that corresponds to the
feature desired ( ENTER is not required ) and use the  escape  key  to
exit the program.

Enjoy and we hope that you get a lot of use from this program.

J. Orman
May 1986




Updated to Version 1.2 on 6-12-86.

The Tiny print mode was changed to a more compressed, darker looking
print. And the startup routine was modified to reset all of the print
parameters each time the program is run...this makes sure that the 
on-screen display is showing the correct print mode(s).

J.A. Orman




Updated to Version 2.0 in August 1986

Completely rewritten in Turbo Pascal, the compiled program
is much smaller and faster operating.


September 1986

Made minor modifications to clean up some of the code and
changed screen colors to match the original version which
is easier to view on a monochrome monitor.

**************** NOTE *************************************

The disk of shareware programs that is advertised when the program
starts is now only $20.00!!!    This is LESS than a dollar per
program!  Register now by sending a check to:

          Jack A. Orman
          Armada Software
          Box 858
          Southaven, MS  38671


```
{% endraw %}

## MIDIPOP.DOC

{% raw %}
```
                           MIDI POPup v1.0                    9/25/87
                           by Jack A. Orman

                           ARMADA SOFTWARE
                               Box 858   
                          Southaven, MS  38671


As  a  progammer  working with MIDI, I often have to refer to the MIDI
Spec document to find out what bytes are used for the many commands so
I can put them in my programs. The commands are in binary format and a
calculator  is  needed  to convert them to decimal. Therefore, I wrote
this small pop-up utility that will terminate and  stay  resident  and
produce a list of MIDI commands at the touch of a key.

Not  every command is included in the pop-up, a few had to be left off
due to space limitations. Also in the language of MIDI, Channel  1  is
specified  by  a data byte of 0000 , Channel 2 by 0001 .... Channel 16
by 1111 (15 decimal or F hexadecimal). Therefore, for any  Channel  N,
the  proper  data  to use to designate that channel is equal to N - 1.
For example, a Note Off command is 128(decimal) + the channel number.
    For Channel  1, note off =  128 + 0
        Channel  2, note off =  128 + 1
        Channel  3, note off =  128 + 2
        ...                           
        Channel 16, note off =  128 + 15
The note and velocity must also be sent after the note off command, of
course.  The  same  numbering system applies to the channels when used
with all of the other commands also.

The active sensing command is optional but once it is sent, the  synth
will expect it to continue to be sent at least every 300 ms. It's best
to  stay away from this since it is just more data to clog up the MIDI
channel.

The Tune Request command is for analog synths that will need  to  tune
their oscillators.

Hitting  the Alt-Left Shift key calls the MIDI POPup to the screen and
escape will remove it. This program should have  no  problem  with any
IBM compatibles but there are NO guarantees.

MIDIhex.com is identical to MIDIpop.com except the numerical values 
are all in hexadecimal. Both programs were created with TSRmaker.

The MIDI POPup is a copyrighted work and is for private non-commercial
use  only!  Site  licenses  and tech support are available for a small
fee.

                   **** REGISTRATION ****
The registration fee for MIDIpop.com is $20.00 which entitles the user
to a disk containing the complete collection of our utilities. Some of
the  programs  on the registration disk have never  been  released  as
shareware.

Send your check or money order for $20.00 to:

                 Jack A. Orman
                 Armada Software
                 Box 858
                 Southaven, MS  38671

Comments and suggestions are welcome...
On GEnie send e-mail to J.Orman
On Delphi send to username JAO.


```
{% endraw %}

## NOLF.TXT

{% raw %}
```
                  NOLF.com version 1.0

                         by
                    Jack A. Orman
                    Copyright 1988

	This program is used to process a text file that is stored in
ASCII format and converts all of the carriage return/line feed
pairs ($0D,$0A) into carriage returns only ($0D). This is necessary
for the files to be displayed properly on many word processors used
by the Macintosh (and others). Also, some computer networks require
that you upload text with a carriage return only at the end of each
line.

Proper syntax for using NOLF.com is:

      NOLF <d:readfile> <d:writefile> <ENTER>

where d: is the drive and an optional path, readfile is the name
of the ASCII text file to be read, and writefile is the name of the
ASCII text file that you wish to save the converted file to. If the
writefile already exists, CRLF will write over it with no warning.

Note: DO NOT use NOLF for files that are larger than 62k bytes.
      Break larger files into sections that are less than 62k and
      process them separately.

```
{% endraw %}

## PRINTIT.DOC

{% raw %}
```

         PRINTIT!  Page Formatting Utility v. 2.10

This  program  started  as  a companion to our ALTPAGE program and was
merely used to provide a proper  printout  for  the  text  files  that
ALTPAGE  produced.  Since  then  it has grown to the extent that it is
useful as a stand-alone page formatter for printouts. 

                How to use PRINTIT!
                ===================
 Epson  and  a  lot  of other printers, defaults to a 66 line per page
spacing. So  does  PRINTIT!  but  you're  not  limited  to  that...the
parameters  in  the  setup menu can be set for any number of lines per
page, top, bottom or left hand margins.  The  defaults  that  PRINTIT!
opens  with are appropriate for use with files created by ALTPAGE. You
will be prompted for the name of the file to be printed; use the stan-
dard format - D:filename.ext - where D: is the drive where the file to
be printed is located (optional), and  filename.ext  is  the  complete
name  and  extention  of  the text file. Note that PRINTIT! only works
properly with a pure ASCII  text  file. If  the  file  that  you  wish
printed  is  other  than  straight  ASCII, run it through the included
utility STRIP2.COM to remove all non-printable characters.

The format to use with this  program  is  as  follows.  From  the  DOS
prompt   ( A> or  C>  etc.)  type  in:

  STRIP2 < d:infile.ext > d:outfile.ext  

Infile is the name of the program to have its high bits stripped while
outfile is the name of the file that will be  created  containing  the
ASCII version of the text. There must be room on the diskette for out-
file  to  reside in; approximatly the same number of bytes will be re-
quired for outfile.ext as are in the  the  text  file  that  is  being
processed. 
                        
The new version of PRINTIT! makes use of a lot  of  assembly  language
routines  and  ROM  Bios  calls.  It may only be compatible with close
clones of the IBM...it works perfectly on a Tandy 1000 for instance.

PRINTIT! , ALTPAGE , and STRIP2 are the copyrighted property of Armada
Software  and  Jack  A. Orman.  They  are for personal, non-profit use
only and are not to be sold, bundled with other software that is being
sold or otherwise used  for  profit-making  purposes  without  express
permission from A.S.L.

                   **** REGISTRATION ****
The registration fee for Printit.com is $20.00 which entitles the user
to a disk containing the complete collection of our utilities. Some of
the  programs  on the registration disk have never  been  released  as
shareware.

Send your check or money order for $20.00 to:

                 Jack A. Orman
                 Armada Software
                 Box 858
                 Southaven, MS  38671

Comments and suggestions are welcome...
On GEnie send e-mail to J.Orman
On Delphi send to username JAO.

```
{% endraw %}

## RB1000.DOC

{% raw %}
```
                           Reboot 1000 v1.0
                           """"""""""""""""
                                  by

                            Jack A. Orman

Well,  when I tried BOOTFIX.SYS on my T1000 (early model with ROM 1.0)
it did work as Mr. Stanislav advertised. Which got  me  to  wondering,
the Ctrl-Alt-Del always did a cold boot on my machine, what  does  Int
19  do?  I  always  use  a  number  of  memory  resident  programs and
according to George, my T1k ought to hang up.  But  it  doesn't!  With
BOOTFIX.SYS installed or not, the INT 19 call does a warm boot!

Which  lead  me  to  try  and  find a way to redirect the Ctrl-Alt-Del
signal to head straight for Int 19. It is possible but could  lead  to
interference  with  other programs so I chose another route, one which
should work with IBMs or clones. I  decided  to  intercept  the  print
screen  interrupt (#5) so that my program wouldn't be in conflict with
other memory resident programs that were checking keystrokes. However,
I wanted to preserve the PrintScreen function. 

I chose the easy way out (why not?). Reboot 1000 works as follows:
   Run the program, RB1000.COM which will become resident in memory.
   To print the screen, hit  LeftShift-PrintScreen.
   To reboot via Int 19, hit RightShift-PrintScreen.

That's it. If your machine (T1000A, T1000SX, or clone) hangs  up  when
you  try  to reboot with Int 19 then load up George Stanislav's driver
program. If it doesn't (like mine) then use RB1000.COM  alone  so  you
won't tie up any extra memory with an unneeded resident driver.
```
{% endraw %}

## TSRHELP.DOC

{% raw %}
```
               Help for using TSRmaker pop-ups
               """""""""""""""""""""""""""""""

     The  pop-up screens that are created with TSRmaker can be
difficult to use if certain procedures are not followed.
 
  1)  TSRmaker  pop-ups  watch  for  certain   keystrokes   by
      intercepting INT 9. If you have any programs loaded that
      also grab that interrupt, it is possible that there will
      be  a  conflict.  To avoid a jam up, change the order in
      which your resident programs are loaded. If your  pop-up
      TSRmaker  is  being loaded last, for example, try moving
      it up a couple of places in your Autoexec.bat file.

  2)  TSRmaker screens only pop-up if your video display is in
      modes  2  or  3.  If  the  display  is  using one of the
      graphics modes, mono mode 7, or a 40 character  display,
      then  the  pop-up  will  not  come up on the screen. The
      solution is to switch to a CGA 80 column text  mode  and
      try the key-combo again.

  3)  TSRmaker  screens are being written to page 3 of the CGA
      display. If your application is using  this  page  there
      could  be  a  possible  conflict.  This  is  not likely,
      however.

  4)  TSRmaker  screens  only  work  on  CGA   or   compatible
      displays!  They  will not pop-up on an EGA or VGA screen
      that is not in the CGA mode.

Thanks and I hope this clears up most problems that users  run
into.
  
           -Jack A. Orman  *  July 1988

```
{% endraw %}

## TSRMAKER.TXT

{% raw %}
```

                            TSRMAKER v1.1

                                  by

                            Jack A. Orman 
                               Box 858
                          Southaven, MS 38671



        What is TSRMAKER?
        """""""""""""""""
        This program will create an executable  .COM  file  out  of  a
        text  file  of  25  lines  of  80  characters  each. This fast
        operating  program  when run will remain resident in memory to
        be popped up by hitting  the  selected  keys.  It  should  not
        cause any interference with other memory resident programs.


        Features!
        """""""""
        *  Full Screen text editor!

        *  TSRMAKER  will  read  the  text  out of a .COM file that it
           has created! No need to look for  the  original  text  just
           to modify the document.

        *  Use any word processor that can  save  a  file  as straight
           ascii  text  to make the display that you want to turn into
           a  .COM  program.  Then  use  TSRMAKER  to  turn  the  file
           into a memory resident screen display!

        *  Full selection of colors to  be  used  when  the  .COM file
           displays the text.

        *  Select the keys to activate from among several choices.

        *  Enter a message to be displayed when the program is loaded.

        *  Have several screens resident in memory at once by using
           different 'hot keys' to call up each.

        *  On-line help.

        *  Each resident program only uses about 2.3k of memory.

 
        How to use TSRMAKER.
        """"""""""""""""""""
        Using  a  word  processor,  write  the screen of text that you
        would like to be displayed. There can only be 25 lines in  the
        file and each line may be a maximum of 80 characters. Save the
        text in ascii format and exit. 

        TSRMAKER <enter>, will put the program in operation. Select F2
        from the opening screen and you will be prompted for the  name
        of  the  text  file  to  read. TSRMAKER will read the text and
        display it so that it may be checked out before the .COM  file
        is created. 

        Assumming  that  the  file is ready to use, hit the F6 key and
        make a choice of colors to be used in the .COM  file  display.
        The  text  display  will  then  be  set to the colors you have
        chosen so that you may review the choices and modify  if  they
        are not what you want.

        Next, use the F7 key to call up a menu to select the 'hotkey'.
        When  that  is  complete, hit F8 and enter the message  to  be
        displayed when the program loads.

        To  create  the  .COM program, hit F3 and you will be prompted
        for a name to use for the  text  display  program.  The  drive
        letter is optional but the extention MUST be .COM! The default
        drive and directory will be used if one is not specified.

        Example:  If  I  want  to create a file called HELP on my hard
                 drive, I would enter 'C:HELP.COM' as  the filename to
                 use. If I want to write this file to my hard drive in
                 the UTIL directory, I would enter 'C:\UTIL\HELP.COM'

        TSRMAKER's  full-screen  editor  may  be used to write text or
        modify a file that has been read into the program's buffer. It
        operates  like  a  basic  word  processor  with no frills. The
        screen changes color and a block cursor  appears  to  indicate
        that the editor is active. Since there is no on-screen display
        to  show the state of INS or DEL the screen colors will change
        according to the mode you are in. White text is INS and yellow
        text  indicates  the  Overwrite  mode.  F10  is  used  to exit
        from the editor routines. The cursor arrow keys  are  used  to
        move around the screen and PgUp, PgDn,  Home  and END are used
        to  move  to  extremes  of  the  display. Tab will advance the
        cursor 10 spaces. 
        
        The .COM program that is created by this program  operates  by
        resetting  the  interrupt  9  vector  and scans for the proper
        keystokes that will cause the resident program to be run. When
        the right  key  combination  is  hit  (Alt-RightShift  is  the
        default  selection),  the  program  sets  the active page to 4
        and writes the resident text to the screen in the blink of  an
        eye!   When  ESCAPE  is  hit  to  exit,  the  active  page  is
        restored to whatever it was upon entry. The pop-up  will  only
        operate  if  the  video  display  is in modes 2 or 3 which are
        25x80 text displays. Changing modes clears  the  video  memory
        but  doesn't  affect the TSR because it writes the text to the
        screen each time that it is popped up.
        
        A sample template is included to show the basic design of  the
        pop-up screen. It was created with  a  word-processor,  edited
        with  TSRmaker  and  used  to  make  the  MIDIpop  and MIDIhex
        programs. Feel free to incorporate it into your pop-ups!

        TSRMAKER  is  copyrighted  and for private, non-commercial use
        only!


                 **** REGISTRATION ****

    The registration fee for TSRmaker.com is $20.00 which entitles the user
    to a disk containing the complete collection of our utilities.  Some of
    the  programs  on  the registration disk have never  been  released  as
    shareware.

    Send your check or money order for $20.00 to:

                 Jack A. Orman
                 Armada Software
                 Box 858
                 Southaven, MS  38671

Comments and suggestions are welcome...
On GEnie send e-mail to J.Orman
On Delphi send to username JAO.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1376

     Volume in drive A has no label
     Directory of A:\

    ALTPAGE  COM     16205  11-11-18  11:11a
    ALTPAGE  DOC      4725  11-11-18  11:11a
    STRIP2   COM       154  11-11-18  11:11a
    AUTHOR   COM     40267  11-11-18  11:11a
    AUTHOR   DOC     14757  11-11-18  11:11a
    BOOT     COM       322  11-11-18  11:11a
    BOOT     DOC       876  11-11-18  11:11a
    CASE-DOC COM      2069   8-29-87  11:04a
    CASE     COM       557  11-05-88   9:21p
    CASIOID  COM     36892  11-05-88   9:24p
    CASIOID  DOC      3382   5-01-88  11:04a
    CRLF     COM       550  11-11-18  11:11a
    CRLF     TXT      1032  11-11-18  11:11a
    NOLF     COM       541  11-11-18  11:11a
    NOLF     TXT      1090  11-11-18  11:11a
    README             890  11-11-18  11:11a
    CRT      COM       598  11-05-88   9:30p
    CRT      DOC      3119  10-29-88  11:18p
    CURSOR   COM       496  11-05-88   9:33p
    CURSOR   DOC      1986  10-29-88   1:45a
    DOC      COM      2069   7-22-88   6:12p
    DOCMAKER COM     17597  11-05-88   9:35p
    DOCMAKER TXT      4006   7-22-88   5:58p
    FQ       COM     27342  11-05-88   9:39p
    FQ       DOC      1831   5-01-88  11:22a
    FXPRNT   COM     18334  11-05-88   9:43p
    FXPRNT   DOC      1712   5-01-88  11:26a
    MIDIHEX  COM      2378  11-05-88   9:48p
    MIDIPOP  COM      2369  11-05-88   9:48p
    MIDIPOP  DOC      2865   5-01-88  11:29a
    PRINTIT  COM     15006  11-05-88   9:51p
    PRINTIT  DOC      2909   5-01-88  10:43a
    BOOTFIX  DOC      6195   8-16-87   1:18a
    BOOTFIX  SYS       726   8-15-87   9:40p
    INT19    COM         2   8-15-87   8:53p
    RB1000   COM       390  11-05-88   9:54p
    RB1000   DOC      1613   9-07-87  10:20a
    README   1ST       142   9-07-87  10:23a
    TEMPLATE DOC      2064   9-16-87   5:01p
    TSRMAKER COM     27899  11-05-88   9:57p
    TSRMAKER TXT      5995   5-01-88  11:35a
    TSRHELP  DOC      1515  11-11-18  11:11a
    FILE1376 TXT      3954   5-11-89  10:26a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       771   5-11-89  10:29a
           45 file(s)     280230 bytes
                           17408 bytes free
