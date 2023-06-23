---
layout: page
title: "PC-SIG Diskette Library (Disk #280)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0280/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0280"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "MAGAZINE"

    This disk contains references to articles in two areas: Amateur Radios
    and Computers.  The computer magazine bibliography begins approximately
    August, 1983.  The Amateur Radio and Shortwave bibliographies begin
    January, 1982.  Most technical articles are listed.  Also, many letters
    or other comments that refer to technical topics are listed.  Articles
    of a short "news" nature and other general articles are NOT listed.
    Software announcements are NOT listed but many TRUE software reviews
    are listed.
    
    How to Start: Consult the .DOC and .TXT files for each program. To run a
    program suffixed .COM or .EXE, enter the program name and press
    <ENTER>.
    
    File Descriptions:
    
    HAMINDEX DOC  Documentation for hamindex 1,2,3
    HAMINDEX 3    Index of codes and settings for a ham radio operator
    HAMINDEX 2    Index of codes and settings for a ham radio operator
    HAMINDEX 1    Index of codes and settings for a ham radio operator
    PCFILTER EXE  Many feature file cleanup up program
    CWP      EXE  Easy to use code practice tutor(char & word rates)
    CWP      DOC  Documentation for CWP.EXE
    CONFIG   TTY  Configuration file for PCRTTY.EXE
    PCFILTER DOC  Documentation for PCFILTER.EXE
    PCRTTY   EXE  Full featured ham radio RTTY baudot program
    PCRTTY   DOC  Documentation for PCRTTY.EXE
    README        Notes on Disk0280
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CWP.DOC

{% raw %}
```
CWP.EXE is a simple code practice tutor.  The course includes eight lessons
of five characters each.  The characters may be sent at either the normal
rate or the characters may be sent at a rate greater than the word per minute
rate.  The character and word per minute rates as well as the audio frequency
can be changed at any time during the operation of the program.

The program operates in two modes, LEARN or PRACTICE.  On entry, the program
is in LEARN mode.  Here, hitting any key will produce the corresponding
character out of the speaker.  F10 will toggle the program to PRACTICE mode
where the computer sends random five letter groups.

The lesson number can be changed at any time by hitting the appropriate
function key.  Also, all previous lessons can be toggled on and off with
F9.


F1...............................   .  E  J  I  Q
F2...............................   ?  T  Y  A  Z
F3...............................   ,  R  C  S  O
F4...............................   5  8  N  D  P
F5...............................   6  2  X  H  F
F6...............................   4  9  M  Q  U
F7...............................   7  0  K  B  X
F8...............................   -  3  1  V  W
F9..................Toggle previous groups on/off
F10.......Toggle between learn and practice modes
Alt-C.......................Change character rate
Alt-F......................Change audio frequency
Alt-H......................Display this help menu
Alt-W.............................Change wpm rate
Alt-X...........................Exit this program

Patrick E. O'Farrell  K7NTV
3O9 Hillcrest Drive
Selah, WA  98942
(5O9) 697-3133

```
{% endraw %}

## FILES280.TXT

{% raw %}
```
------------------------------------------------------------------------
DISK NO  280  BIBLIOGRAPHIC                                          v1.1
------------------------------------------------------------------------
 
This disk is highly useful for the ham radio users, it supplies you with
technical indexes of Amateur Radio magazines,covered include QST, CQ, Ham
Radio, 73, QEX, Rtty Journal, and A5 ATV Magazine.
 
HAMINDEX   1  Index of codes and settings for a ham radio operator
HAMINDEX   2  Index of codes and settings for a ham radio operator
HAMINDEX   3  Index of codes and settings for a ham radio operator
HAMINDEX DOC  Documentation for hamindex 1,2,3
CONFIG   TTY  Configuration file for PCRTTY.EXE
CWP      DOC  Documentation for CWP.EXE
CWP      EXE  Easy to use code practice tutor(char & word rates)
              Use with PC-File (use USQ2 then LU86402)
PCFILTER EXE  Many feature file cleanup up program
PCFILTER DOC  Documentation for PCFILTER.EXE
PCRTTY   EXE  Full featured ham radio RTTY baudot program
PCRTTY   DOC  Documentation for PCRTTY.EXE
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## HAMINDEX.DOC

{% raw %}
```
        ----- AMATEUR RADIO MAGAZINE INDEXES -----
Amateur Radio magazines covered include QST, CQ, Ham Radio,
73, QEX, Rtty Journal, and A5 ATV Magazine.
************************************************************
HAM RADIO TECHNICAL INDEXES
     PATRICK O'FARRELL K7NTV
     3O9 HILLCREST DRIVE
     SELAH, WA 98942
     (509) 697-3133

001 QST
002 CQ
003 HAM RADIO
004 73
005 QEX
006 RTTY JOURNAL
007 A5 AMATEUR TV MAGAZINE

  60                                         SUBHEADINGS
  70                                         XX0  GENERAL
 130                                         XX1  160 METERS
 220                                         XX2  80 METERS
 290                                         XX3  40 METERS
 440                                         XX4  20 METERS
 459                                         XX5  15 METERS
 831 160 METER EQUIPMENT                     XX6  10 METERS
 420 ALTERNATE POWER SOURCES                 XX7  VHF
 727 AMATEUR TV, CIRCUITS                    XX8  UHF
 724 AMATEUR TV, EQUIPMENT REVIEWS           XX9  OTHER BANDS
 721 AMATEUR TV, FAST SCAN
 723 AMATEUR TV, FAX
 720 AMATEUR TV, GENERAL
 726 AMATEUR TV, MODIFICATIONS
 725 AMATEUR TV, OPERATING
 722 AMATEUR TV, SLOW SCAN
 300 AMPLIFIERS (BY BAND)
 830 ANTENNAS, 160 METER
 150 ANTENNAS, BALUNS
  20 ANTENNAS, BEVERAGE AND OTHER WAVE (BY BAND)
 230 ANTENNAS, BROADBAND (BY BAND)
 630 ANTENNAS, COLLINEARS (BY BAND)
 120 ANTENNAS, CURTAINS-BRUCE,STERBA (BY BAND)
 760 ANTENNAS, DIPOLES (BY BAND)
 820 ANTENNAS, DRIVEN ARRAYS-OTHER THAN LOG PERIODICS (BY BAND)
  30 ANTENNAS, GROUND SYSTEMS
 660 ANTENNAS, HARDWARE
 280 ANTENNAS, HELICAL (BY BAND)
  10 ANTENNAS, INVERTED VEE (BY BAND)
 260 ANTENNAS, LOG PERIODICS (BY BAND)
  90 ANTENNAS, LOOPS, QUADS, DELTAS (BY BAND)
 180 ANTENNAS, MATCHING SYSTEMS
 270 ANTENNAS, MINIATURE AND REDUCED SIZE (BY BAND)
  80 ANTENNAS, MINIATURE RECEIVING (BY BAND)
 780 ANTENNAS, MISC AND INTERESING (BY BAND)
 110 ANTENNAS, RHOMBICS (BY BAND)
 100 ANTENNAS, SHUNT EXCITATION (BY BAND)
 140 ANTENNAS, SLOPING (BY BAND)
 390 ANTENNAS, STACKING
 870 ANTENNAS, SWR
 530 ANTENNAS, TRAP AND STUB MATCHING
 200 ANTENNAS, VEE (BY BAND)
 240 ANTENNAS, VERTICAL (BY BAND)
  40 ANTENNAS, YAGI PARASITIC (BY BAND)
 900 ARTICLES, GENERAL AND INTERESTING
 700 AUDIO
 590 BREAK-IN
 520 BROADCAST INTERFERENCE
 880 CIRCUITS, GENERAL AND INTERESTING
 310 COAXIAL CABLE
 800 COMPONENTS
 840 COMPUTERS, GENERAL
 843 COMPUTERS, PERIPHERALS
 841 COMPUTERS, PROGRAMMING AND PROGRAMS
 413 CONNECTORS
 490 CONSTRUCTION HINTS
 430 CONVERTERS
 750 COUNTERS
 411 COUPLERS
 920 DIGITAL TECHNIQUES
 212 DIRECTION FINDING
 770 FILTERS
 190 FREQUENCY SYNTHESIZERS
 620 HAZARDS
 601 HEADPHONES
 490 HOMEMADE CONSOLES
 650 KEYERS AND KEYBOARDS
 571 LF
 541 LICENSING
 360 LIMITERS
 600 LOUDSPEAKERS
 210 MEASURING TECHNIQUES
 602 MICROPHONES
 842 MICROPROCESSORS
 680 MOBILE (BY BAND)
 347 MODIFICATION, COMPUTERS
 170 MODIFICATIONS, COLLINS
 340 MODIFICATIONS, HEATHKIT SB SERIES
 341 MODIFICATIONS, HEATHKIT-OTHER
 345 MODIFICATIONS, ICOM
 343 MODIFICATIONS, KENWOOD
 342 MODIFICATIONS, MFJ
 344 MODIFICATIONS, MISC
 346 MODIFICATIONS, TENTEC
 910 MODIFICATIONS, YAESU
 457 NEW PRODUCTS, AMPLIFIERS
 454 NEW PRODUCTS, ANTENNAS
 456 NEW PRODUCTS, CW
 450 NEW PRODUCTS, GENERAL
 452 NEW PRODUCTS, RECEIVERS
 455 NEW PRODUCTS, RTTY
 451 NEW PRODUCTS, TRANSCEIVERS
 453 NEW PRODUCTS, TRANSMITTERS
 360 NOISE BLANKERS
 160 OPERATING
 930 OPERATING
 850 OPTICAL
 690 OSCILLATORS (BY BAND)
 844 PACKET RADIO
 400 PC BOARDS
 890 POWER LINE CIRCUITS
 730 POWER SUPPLIES, GENERAL
 330 PREAMPLIFIERS (BY BAND)
  50 PROPAGATION, ASTRONOMY
 250 QRP
 560 RECEIVERS (BY BAND)
 540 REGULATIONS AND AGREEMENTS
 501 RELAYS
 320 REMOTE CONTROL DEVICES
 740 REPEATERS
 370 ROTATORS, DRIVES AND INDICATORS
 717 RTTY, ASCII, BAUDOT
 711 RTTY, COMPUTER PROGRAMS
 710 RTTY, GENERAL
 712 RTTY, KEYBOARDS
 716 RTTY, NEW TECHNIQUES
 715 RTTY, OLD MACHINES
 714 RTTY, SWL'ING
 713 RTTY, TERMINAL UNITS
 810 SATELLITES, GENERAL
 813 SATELLITES, HOME TVRO
 811 SATELLITES, OSCAR
 812 SATELLITES, UOSAT
 480 SIGNAL ENHANCEMENT TECHNIQUES
 860 SPREAD SPECTRUM
 580 SSB
 460 STATION ACCESSORIES
 670 SURPLUS
 350 TELEPHONE
 211 TEST EQUIPMENT
 790 THEORY
 380 TOWERS AND MASTS
 500 TRANSFORMERS
 412 TRANSMISSION LINES
 610 TRANSMITTERS AND TRANSCEIVERS
 550 TUBES
 410 TUNERS, MATCHING NETWORKS
 520 TVI
 646 UHF, AMPLIFIERS
 641 UHF, ANTENNAS
 642 UHF, CIRCUITS
 640 UHF, GENERAL
 643 UHF, RECEIVERS
 645 UHF, TRANSCEIVERS
 644 UHF, TRANSMITTERS
 516 VHF, AMPLIFIERS
 511 VHF, ANTENNAS
 512 VHF, CIRCUITS
 510 VHF, GENERAL
 513 VHF, RECEIVERS
 515 VHF, TRANSCEIVERS
 514 VHF, TRANSMITTERS
 570 VLF
 470 WEATHER AND FAX

```
{% endraw %}

## PCFILTER.DOC

{% raw %}
```
                         PCFILTER.EXE
                         Version 3.0
                         ------------

Noisy telephone lines during ASCII data transfer often inject
printer control codes into the download file.  Later, when
the file is printed, these extraneous control codes may put
the printer into various unwanted print modes.  PCFILTER will
remove all ASCII codes below SPACE (32) except CR and LF.
Additionally, PCFILTER will optionally remove all ASCII codes
from 128 to 159 (since some editors may ignore the high bit
and interpret them as ASCII 0 to 31), restrict the file to a
particular line width, expand tabs, expand tab stops, create
output files with a maximum size limit, delete extra line
feeds and blank lines, delete extra spaces, and create a disk
file (.PRN) suitable for FILE IMPORT into LOTUS 1-2-3 for
file editing and printing.

OPERATING PCFILTER-

PCFILTER will create output file(s) on the default drive.
Other drives for input may be referenced but path names are
not supported in this version. Therefore, before PCFILTER is
run, make sure you have adequate space remaining for the
creation of the output file(s) on the default drive.

A typical command is  'PCFILTER IBMSIG'.  This command will
create a filtered file 'IBMSIG.PRN' on the default disk drive
using the default parameters.

The default parameters values are-
     Maximum line width (W) - 132 characters
     Replacement ASCII code (R) - SPACE (ASCII 32)
     Output file extension (E) - 'PRN'
     Tab stop expansion (T) - every 8 print positions
     Tab expansion (X) - defaults to (T), above
     Filter of ASCII 128-159 (N) - these codes are filtered
     Remove extra spaces (S) - extra spaces NOT filtered
     Limit file size (L) - limited to approximately 63K
     Delete line feeds (D) - extra line feeds NOT deleted

Parameter (T) converts TAB STOPS (ASCII 9) in a file to the
number of SPACES (ASCII 32) necessary to create tabular
columns at the specified print positions.  Parameter (X)
converts TAB STOPS to the specified number of ASCII SPACES.
These parameters are MUTUALLY EXCLUSIVE.

The general format for PCFILTER is-

PCFILTER [d:]filename[.ext][-Optionxxx]

where  -Wx sets maximum line width
       -Rx selects replacement ASCII code
       -Ex specifies output file extension
       -Tx sets tab stop positions
       -Xx specifies tab stop SPACE expansion
       -N  no filter of ASCII 128-159
       -S  no repeat spaces
       -Lx specifies maximum output file size
       -D  no blank lines or extra line feeds

PCFILTER will now filter any size input file as long as there
is enough room for output on the default drive.  Output files
are limited to a maximum of approximately 63K (or less with
the -L option).  Any additional output files are named
TOOBIG1.PRN, TOOBIG2.PRN, etc.

For example, 'PCFILTER IBMSIG.DOC -W80 -R42 -ETXT -X4'
creates the output file IBMSIG.TXT on the default drive with
a maximum line length of 80 characters, ASCII 0-31 and
128-159 filtered and  replaced with ASCII 42 (*), and all
tabs replaced with 4 SPACES.

'PCFILTER B:IBMSIG -T6 -N' creates the output file IBMSIG.PRN
on the default drive, with a maximum line length ot 132
characters, ASCII 0-31 filtered and replaced with ASCII 32
(SPACE), and all tabs replaced with spaces to allow tabular
column printing every 6 print positions.

'PCFILTER C:K7NTV.TXT -l58000 -d -s' creates the output file
K7NTV.PRN on the default drive with blank lines and extra
linefeeds deleted, extra spaces removed and the maximum size
of the output file(s) restricted to 58K.  For example, if
K7NTV.TXT had a file size of 128k, three output files would
be generated, K7NTV.PRN(58K), TOOBIG1.PRN(58K), and
TOOBIG2.PRN(12K).

Using PCFILTER with LOTUS 1-2-3
LOTUS 1-2-3 makes a very nice editor when used with PCFILTER
files.  First, create a 'dummy' .WKS file that specifies your
printer output format.  For instance, this .WKS file will
have the page length, printer control codes, and optional
header or footer information specified (for example, use
'@|DATA TRANSFER FILE|PAGE #' as a header and you will get
nicely formatted pages with date and page number at the top
of every page).  File Retrieve this .WKS file, then use File
Import to import your PCFILTER file to the upper left corner
of your blank .WKS file.  Then edit the file with /WDR, F2,
etc., and print the file.  Be sure to NOT use the '-N' option
since Lotus 1-2-3 File Import Text only looks at the lower 7
bits and ASCII 128-159 must therefore be filtered out.

Patrick E. O'Farrell K7NTV
3O9 Hillcrest Drive
Selah, Wa 98942

(5O9) 697-3133

```
{% endraw %}

## PCRTTY.DOC

{% raw %}
```
                                PCRTTY.EXE V1.0
                                ---------------
                  A Full Featured Amateur Radio Public Domain
             Radio Teletype Program for the IBM PC and Compatibles

    Patrick O'Farrell  K7NTV
    3O9 Hillcrest Drive
    Selah, WA  98942
    voice (5O9) 697-3133

                                                            Revised 1/10/84

                                  INTRODUCTION

    PCRTTY.EXE is a complete baudot RTTY software package for the IBM PC
    and compatibles.  It requires the IBM serial RS 232 interface card and
    a terminal unit such as the AEA CP-1.

                              ***** FEATURES *****

          Interrupt driven receive buffer for no loss of received text
                      40 user configurable message strings
                     Split screen for transmit and receive
    Continually updated status indicator-current time and other station data
               Message strings for other station call, name, QTH
                        10000 character transmit buffer
            Quick transmit break without disturbing transmit buffer
                          Exchange letters and figures
                  Insert files from disk into transmit buffer
                         Optionally ignore C/R and LF's
                      Optionally kill repeating characters
                             Online list to printer
    Optionally preview all message strings before transmit buffer insertion
                           60, 67, 75, 100 WPM Baudot
                        Save incoming text to disk file
                          Optionally unshift on space
                      Online change of transmit line width

                                    COMMANDS

             Alt-B.........-B-reak for short response
             Alt-C.........change -C-all
             Alt-D.........-D-elete other station data
             Alt-E.........-E-xchange ltrs/figs
             Alt-F.........-F-ile upload
             Alt-H.........-H-elp
             Alt-I.........-I-gnore CR/LF
             Alt-K.........-K-ill nonchar repeats
             Alt-L.........-L-ist to printer
             Alt-N.........change -N-ame
             Alt-P.........-P-review enable
             Alt-Q.........change -Q-TH
             Alt-R.........change baud -R-ate
             Alt-S.........-S-ave to disk
             Alt-T.........-T-ransmit
             Alt-U.........-U-nshift on space
             Alt-W.........change transmit -W-idth
             Alt-X.........e-X-it to DOS

                                   CONFIG.TTY

    PCRTTY reads a file named "CONFIG.TTY" from the DEFAULT drive which
    specifies the 40 message strings as well as custom data regarding your
    station.  The following text is an example of a CONFIG.TTY file.
    ------------------------------------------------------------------------
    CQ CQ CQ CQ CQ CQ CQ CQ CQ DE K7NTV K7NTV K7NTV ##
    THE QTH HERE IS SELAH, WA  SELAH, WA ABOUT 110 MILES SOUTHEAST OF SEATTLE, WA
    THIS IS MESSAGE NUMBER 3-(A dummy message)
    THIS IS MESSAGE NUMBER 4-(A dummy message)
    THIS IS MESSAGE NUMBER 5-(A dummy message)
    DE K7NTV K7NTV ##
    RYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRYRY ##
    THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG'S BACK \0150123456789 ',!:()?/; ##
    THIS IS MESSAGE NUMBER 9-(A dummy message)
    THIS IS MESSAGE NUMBER 10-(A dummy message)
    THIS IS MESSAGE NUMBER 11
    THIS IS MESSAGE NUMBER 12
    THIS IS MESSAGE NUMBER 13
    THIS IS MESSAGE NUMBER 14
    THIS IS MESSAGE NUMBER 15
    THIS IS MESSAGE NUMBER 16
    THIS IS MESSAGE NUMBER 17
    THIS IS MESSAGE NUMBER 18
    THIS IS MESSAGE NUMBER 19
    THIS IS MESSAGE NUMBER 20
    THIS IS MESSAGE NUMBER 21
    THIS IS MESSAGE NUMBER 22
    THIS IS MESSAGE NUMBER 23
    THIS IS MESSAGE NUMBER 24
    THIS IS MESSAGE NUMBER 25
    THIS IS MESSAGE NUMBER 26
    THIS IS MESSAGE NUMBER 27
    THIS IS MESSAGE NUMBER 28
    THIS IS MESSAGE NUMBER 29
    THIS IS MESSAGE NUMBER 30
    THIS IS MESSAGE NUMBER 31
    THIS IS MESSAGE NUMBER 32
    THIS IS MESSAGE NUMBER 33
    THIS IS MESSAGE NUMBER 34
    THIS IS MESSAGE NUMBER 35
    THIS IS MESSAGE NUMBER 36
    THIS IS MESSAGE NUMBER 37
    THIS IS MESSAGE NUMBER 38
    THIS IS MESSAGE NUMBER 39
    THIS IS MESSAGE NUMBER 40
    K7NTV
    PAT
    SELAH, WA
    2
    PST
    ------------------------------------------------------------------------
    The first 40 lines (ending with CR/LF) specify the text for each of the
    40 messages.  THESE MUST BE THE FIRST 40 RECORDS OF THE FILE!!!!  Note
    that a CR/LF sequence can be inserted into the transmit buffer after
    each message string by entering "##" at the end of the string.  The
    strings are limited to 126 characters.

    The 41st record is your call.
    The 42nd record is your name.
    The 43rd record is your QTH.
    The 44th record is the communications port for your serial card.
    The 45th record is your 3 letter time zone abbreviation.  Note-if you
    wish to keep time in UTC, boot up your system with UTC day and time.

    Message strings 3,4,5,9 and 10 are actually "dummy messages".
    Message string 3 is the other station's call (Alt-C).
    Message string 4 is the other station's name (Alt-N).
    Message string 5 is the other station's QTH (Alt-Q).
    Message string 9 is the other stations call, name, qth DE your call,
    name, qth.  Example-If you are K7NTV, PAT, in SELAH, WA and have
    entered the other stations call, name, qth with Alt C,N,Q, (K6XYZ, DON,
    PALO ALTO, CA) then message string 9 is -
    K6XYZ K6XYZ " DON " PALO ALTO, CA DE K7NTV K7NTV " PAT " SELAH, WA
    SELAH, WA
    Message string 10 is the current day and time.

    Messages are entered as follows-
         Message 1-10  Keys F1-F10
         Message 11-20 Keys Uppercase F1-F10
         Message 21-30 Keys Ctrl F1-F10
         Message 31-40 Keys Alt F1-F10

                             COMMAND KEY OPERATION
                     (Most Command Keys are ON-OFF toggles)
            (If Command Key is set, Key letter shown on Status Line)

             Alt-B.........-B-reak for short response
    Transmit a short response, no output buffering, in response to a
    question, etc., from the other station.

             Alt-C.........change -C-all
    Enter the other station's call for use by F3 or F9 message keys.

             Alt-D.........-D-elete other station data
    Delete the other stations's call, name, and QTH from F3, F4, F5, and F9
    message keys.

             Alt-E.........-E-xchange ltrs/figs
    Change interpretation of incoming characters from letters to figures or
    vice versa.

             Alt-F.........-F-ile upload
    Upload a file from disk.  Drive letters are optional but path names are
    not accepted.  Depending on your inserted text, it may be necessary to
    enter 2 or 3 C/R's after the file is inserted to continue entering data
    into the transmit buffer.

             Alt-H.........-H-elp
    Display Help Screen.  All received characters are saved in the receive
    buffer up to a 1000 characters.

             Alt-I.........-I-gnore CR/LF
    To display as much information on the screen as possible, CR/LF's may
    optionally be ignored.

             Alt-K.........-K-ill nonchar repeats
    To ignore unusual "diddles", etc., noncharacter repeating codes can be
    ignored.

             Alt-L.........-L-ist to printer
    List incoming text to printer.

             Alt-N.........change -N-ame
    Enter other station's name for use by F4 or F9.

             Alt-P.........-P-review enable
    The first 80 characters of all message strings and files can be
    previewed before insertion into the transmit buffer.  If you wish to
    include the string enter "+" after message is displayed on the preview
    line, otherwise hit any key for noninsertion.

             Alt-Q.........change -Q-TH
    Enter other station's QTH for use by F5 or F9.

             Alt-R.........change baud -R-ate
    Change baud rate.  Enter 60, 67, 75 or 100.  A CR defaults to 60 WPM.

             Alt-S.........-S-ave to disk
    Save incoming text to disk file.  Drive names are optional, but path
    names are not accepted.

             Alt-T.........-T-ransmit
    Toggle between transmit and receive.  Transmit buffer is sent first,
    then any following text.  A "*" entered into the transmit buffer will
    automatically switch to receive from transmit.

             Alt-U.........-U-nshift on space
    Optionally, a received space will interpret all succeeding code as
    Letters.

             Alt-W.........change transmit -W-idth
    Change transmit line width.  80 characters is the default.

             Alt-X.........e-X-it to DOS
    Exit PCRTTY.

    ------------------------------------------------------------------------

    You are encouraged to copy and share PCRTTY with others.  Please report
    and bugs, suggestion, or other comments to me.
    (see top of file).

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0280

     Volume in drive A has no label
     Directory of A:\

    CONFIG   TTY      1282   1-11-85  10:16a
    CWP      DOC      1668   1-08-87   8:21a
    CWP      EXE     18432   5-31-84   6:05p
    FILES280 TXT      1193   2-02-87   8:01p
    HAMINDEX 1       62523   3-12-85   9:26a
    HAMINDEX 2       41030   3-12-85   9:27a
    HAMINDEX 3      101376   1-06-87   8:10a
    HAMINDEX DOC      4876   1-08-87   8:22a
    PCFILTER DOC      4719   1-08-87   8:22a
    PCFILTER EXE     14848  12-19-84  11:05a
    PCRTTY   DOC      9312   1-08-87   8:24a
    PCRTTY   EXE     27136   1-11-85  10:11a
    README            1538   1-08-87   8:19a
           13 file(s)     289933 bytes
                           25600 bytes free
