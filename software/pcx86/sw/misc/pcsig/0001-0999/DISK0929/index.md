---
layout: page
title: "PC-SIG Diskette Library (Disk #929)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0929/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0929"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOTTO FEVER"

    LOTTO FEVER is a synthesis of astrology and lottery simulation with a
    sprinkling of numerology.  Told the date and year of your birth, it
    gives your astrological forecast and a description of your personality.
    Next, it asks for the range of numbers for the lottery you are playing.
    LOTTO FEVER chooses numbers and shows your lucky lotto numbers, based on
    the data you have given it.
    
    NOTE: The program will not display your lotto numbers on a monochrome
    monitor. If your system has a monochrome monitor,  you must have a
    printer in order to see your numbers.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CURSE.DOC

{% raw %}
```
 


                 As recorded in the Ancient book of Demons
                 I, Michael do hereby transcribe and attest
                 the following to be true as originally
                 written.

                 Know Ye WHO are weak of heart, and frail of
                 body READ NO FURTHER.

         The Ancient programmer toiled day and night, the vision
         of a bug free program consumed his every waking moment.
         All things of pleasure were put aside. His beautiful
         young wife and 9 children were ignored. Life was only the
         program. The bits, the bytes, the strings, and the syntax,
         all this had become his life. But he was not with out hope
         for in times past, others such as him had toiled long and
         hard, but always the reward would come. SHARE WARE, SHARE
         WARE, the magical incantation that many a programmer and
         wizards of the byte had earned there just dues. It was not
         the small pittance of gold they sought, but the meager means
         to continue there mystical profession.

         At last as the winter wings of his life blew, a time of rest
         appeared on the horizon for the Ancient programer. The bugs
         were gone, the compiler was quiet. A lass it was time to reap
         the meager harvest of his meg a byte crop.

         But all was not right in the homes of the hackers and the
         users. Time had past and some hackers and users had changed.
         The darkness of the parity error had seduced them.  They
         succumbed to the type O and the bad command. They had
         forgotten there teachings, the darkness closed in, there bus
         cards slowly warped. For they no longer listened to the
         teaching of the OLD Z80. The object, the honesty of the SHARE
         WARE concept no longer lingered in the heart of there
         individual CPU's.

         Upon hearing of this evil with in his beloved community the
         Ancient programmer laughed, for he new, and believed in his
         fellow users. Even to the last he was heard saying " keep the
         faith young wife, I believe in SHARE WARE, and the Great CPU
         teachings." "My program will earn us enough to keep the
         children feed and electricity in the computer." He never
         doubted he believed they would never allow the power company
         to turn off his beloved little 286 CPU.

         But it came to pass, the users forgot, they used his program
         and NEVER REGISTERED or paid the small fee. They passed it
         among there friends, it was enjoyed, and used. Every version
         of DOS commanded it. Never once was the Ancient programmer
         thought of.






         Then that faithful day came, and with out tribute to pay the
         Ancient programers power was turned off. The ancient
         programmer stood by, heart broken and disillusioned as his
         beautiful beloved CPU cooled off, all his hopes and dreams
         were lost as the Ram Disk disappeared. All was lost he never
         programed again. His wife and 9 children left him.

         Some members of the computer village still had no remorse.
         But then a quiver of fear could be felt, all was not right.
         Bits were missing, power surges were destroying memory. Hard
         Disks begin crashing. Those who abused SHARE WARE tried to
         repent by making back ups, but the time of repentance was
         past.

         Then the lights dimmed, and dark clouds covered there
         computers and the All electrons and the power of the GREAT
         CPU spoke forth:

               CHILDREN OF THE ELECTRON I THE GREAT CPU
               FORGIVE YOU FOR NOT FOLLOWING THE TEACH-
               INGS OF SHARE WARE - BUT NEVER AGAIN WILL I
               ALLOW YOU TO TURN OFF ONE SUCH AS THE
               ANCIENT PROGRAMMER.
               KNOW YE ONE AND ALL, RESPECT THE SHARE WARE
               PRINCIPLE OR BEWARE, IF YOU VALUE YOUR DISK
               AND RAM, FOR ANY WHO DO NOT RESPECT THE
               SHARE WARE WILL SURELY LOOSE ALL !!!

    SIGNED
      MICHAEL HUSKEY
        TRANSCRIBER  FOR THE GREAT CPU
    WITNESSED
      RICHARD LEW
        POWER USER AND KEEPER OF THE TRUE FAITH
```
{% endraw %}

## FILES929.TXT

{% raw %}
```
Disk No  929
Program name: LOTTO FEVER version 2.0
PC-SIG version: 1
 
    LOTTO FEVER is an interesting combination of Astrology and Lottery
simulation. The program first asks for the year and date of your birth and
then gives your astrological forecast and a description of your personality
characteristics. You are then asked for a range of numbers for the lottery
simulation, since each state has different combinations of range and
numbers chosen. The program then randomly chooses numbers and shows your
lucky lotto numbers. Note: The program will not display your lotto numbers
on a monochrome monitor. You must have a printer in order to see your
numbers. This is not a problem with color monitors.
 
Usage: Entertainment
 
System Requirements: 256K, color graphics, one disk drive, and a printer is
optional
 
How to Start: Type: TYPE MENU (press enter).
 
Suggeted Regisration: $9.00
 
File Descriptions:
 
1        BAT  Batch file to run install program.
2        BAT  Batch file for Hercules graphics installation.
3        BAT  Batch fle to print documentation to printer.
4        BAT  Batch file to start LOTTO FEVER.
5        BAT  Batch file to print CURSE.DOC to printer.
5A       BAT  Batch file to type CURSE.DOC and readme files.
A        BAT  Batch file to type SIMCGA.DOC and run Hercules installation.
B        BAT  Batch file to copy SIMCGA.DOC to printer.
C        BAT  Batch file to type readme file.
CURSE    DOC  Authors introduction to program.
DAILYS   DAT  Data file used by LOTTO FEVER.
F_ASTRO  DAT  Data file used by LOTTO FEVER.
FILEFILE DAT  Data file used by LOTTO FEVER.
HERCINST      Hercules graphics installation program.
INSTALL  DOC  Documentation for installation procedure.
LF       COM  LOTTO FEVER program.
MENU          Menu screen. Instructions on starting program.
NUMBERS  SCR  Screen to show numbers chosen in lottery simulation.
README   BAT  Batch file to type menu file.
SCR_SCR  SCR  Display screen used by LOTTO FEVER.
SETCGA   COM  Program to set CGA mode on.
SETMONO  COM  Program to set monochrome mode on.
SIMCGA   COM  Program to allow LOTTO FEVER to run on a Hercules system.
SIMCGA   DOC  Documentation for SIMCGA.COM.
START    COM  Moniter setup program.
START    DTA  Data file used by START.COM.
START    MSG  Message file used by START.COM.
USER     DAT  Contains data about LOTTO FEVER users.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                 <<<<  Disk No 929  Lotto Fever  >>>>                    ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To run the program, Type: TYPE MENU (press enter)                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
 

        LOTTO FEVER INSTALLATION INSTRUCTIONS  4/15/87


LOTTO FEVER is compatible with IBM CGA, EGA, or Monochrome
graphics cards. To install use the following procedure: To install
LOTTO FEVER with a Hercules graphics card, see the SIMCGA.DOC file
and use the SIMCGA.COM program before running LOTTO FEVER, NOTE
there are some Hercules like cards that will not allow LOTTO FEVER
to run.

TERMINAL INSTALLATION

Before you use LOTTO FEVER,  it must be installed for your parti-
cular terminal, i.e. provided with information regarding control
characters required for certain functions.  This installation  is
easily performed using the program START.COM which is described
below.

After making a working copy, please store your distribution
diskette in a safe place and use only the working copy.

Start the installation by typing START.COM at your terminal.
Select Screen installation from the main menu. Depending on your
version of LOTTO FEVER, the installation proceeds as described in
the following two sections.

IBM PC Display Selection
If you use LOTTO FEVER without installation, the default screen
set-up  will be used. You may override this default by selecting
another screen mode from this menu:
-----------------------------------------------------------------
   Choose one of the following displays:
      0) Default display mode
      1) Monochrome display
      2) Color display 80x25
      3) Color display 40x25
      4) b/w   display 80x25
      5) b/w   display 80x25
   Which display (enter no. or ^X to exit)  !
-----------------------------------------------------------------
                 IBM PC Screen Installation Menu

Each time LOTTO FEVER runs, the selected mode will be used, and
you will return to the default mode on exit.

IBM Monochrome graphics terminals NOTE: After entering LF the screen
will go blank, then press B to start program.

The installation is finished, installation data is written to
LOTTO FEVER, and you return to the outer menu.  New  installation
data is  also saved in the installation data file  and  the new
terminal will appear on the terminal selection list when you run
START.COM in future.


L AND H ENTERPRISES
9723 A FOLSOM BLVD. STE # 223
SACRAMENTO, CA 95827
(916) 363-8403







LOTTO FEVER is SHARE WARE if you use our program, please register
it by sending $ 9.00 to L AND H ENTERPRISES. Your name will be
added to our mailing list, and you will be notified of up dates.

If you like LOTTO FEVER, you'll LOVE the Commercial Version. In
LOTTO FEVER COMMERCIAL VERSION you receive :

1.  A license to sell the printed output.
2.  The program is written for you to operate it as a business
    The COMMERCIAL VERSION ORIGINALLY SOLD FOR $ 69.95.
3.  The program allows you to advertise on the printed out put,
    in addition to the ASTROLOGY information and Lottery prediction
    numbers.
4.  Each output is two pages long with 5 days of predictions and
    LOTTO FEVER NUMBERS.
5.  The program is NOT COPY PROTECTED.
6.  With each COMMERCIAL VERSION you receive the disk with program
    and installation programs, printed instructions and advertising
    POSTER.

L AND H ENTERPRISES
9723 A FOLSOM BLVD STE # 223
SACRAMENTO, CA  95827


ANY PERSON WHO LEGITIMATELY RESISTERS LOTTO FEVER MAY up grade to
the COMMERCIAL VERSION by sending their previously registered
name and address TO: L AND H ENTERPRISES with ********** $ 11.00
*********************************shipping and handling   $  2.00
                                                        _______
                                               TOTAL    $ 13.00

REGISTRATION AND UPGRADING PURCHASE OF THE COMMERCIAL VERSION
MAY BE DONE AT THE SAME TIME BY SENDING BOTH THE REGISTRATION
FEE AND THE UP GRADE FEE.
***************************************************************
**** $ 22.00 WILL REGISTER LOTTO FEVER AND PURCHASE ***********
********* THE COMMERCIAL VERSION INCLUDING SHIPPING COST ******
***************************************************************



"LOTTO FEVER IS HERE" (T-SHIRTS are available in LIMITED
quantities-small, medium, and large ( SPECIFY SIZE ) S M L
MAKE T-SHIRT CHECK SEPARATELY OF OTHER ORDERS -- IF WE DO NOT
HAVE YOUR SIZE YOUR CHECK WILL BE RETURNED UNCASHED.

===============================================================
A T-SHIRT ordered with your LOTTO FEVER registration:
ALL SHIRT ORDERS MADE WITH SEPARATE CHECK OR MONEY ORDER !!!!

IN ADDITION TO REGISTRATION FEE COST >>>>>>>>>> $ 5.00 + $ 2.00
* $ 2.00 SHIPPING AND HANDLING ************************--------
************************************************** TOTAL $ 7.00

T-SHIRT WITH UPGRADE to COMMERCIAL. VERSION
**************************************************cost>> $ 5.00
SHIPPING / HANDLING FEE INCLUDED WITH PURCHASE OF COMM. VERSION
===============================================================













REGISTRATION will also enable us to notify you of our NEW
CHINESE ASTROLOGY prediction program due out in late 1987.
Beautiful new color or monochrome graphics based on the
ancient study of Chinese Astrology. Receive your daily,
monthly, and unique prediction from the world's oldest
civilization.

/////////////////////////////////////////////////////////////
REGISTRATION AND ORDER FORM --- LOTTO FEVER

NAME  ______________________________________________________

ADDRESS ____________________________________________________

CITY __________________________ STATE ______ ZIP ___________

                    CHECK 1 OR MORE

____ ........................LOTTO FEVER REGISTRATION  $ 9.00
____.......................COMMERIAL VERSION UP GRADE  $11.00
___T-SHIRT IN ADDITION TOO, & AT THE TIME OF
   REGISTRATION. Circle one (s)(m)(L) SEPARATE CHECK   $ 7.00

___.... COMMERCIAL VER UP GRADE WITH OUT REGISTRATION  $17.00


ADD $ 2.00 shipping/handling charge with each complete
order (exclude LOTTO FEVER registration) ----------> $_______

......................................TOTAL ENCLOSED $________
SEND TO:

L AND H ENTERPRISES             Personal check _______
9723 A FOLSOM BLVD Ste# 223
SACRAMENTO, CA 95827               Money Order _______

THANK YOU

MICHAEL HUSKEY and RICHARD LEW
```
{% endraw %}

## SIMCGA.DOC

{% raw %}
```

    SIMCGA - Simulate CGA with Hercules Monochrome Card

	Written in September 1986 by
	    Chuck Guzis
	    153 North Murphy Ave.
	    Sunnyvale, CA  94086


This memory-resident utility allows you to "fool" most software requiring
a Color Graphics Adapter into using your Hercules (or compatible) mono-
chrome adapter in the graphics mode.  Graphics images are reproduced
in normal aspect ratio, using as much of the available screen area as
is possible.

The trick used here is to program the HGC to display more lines of 3
lines per character time instead of 4 (The CGA displays 2).  A service
routine hooked into the hardware timer interrupt (int 8) copies one line
to the third displayed line to give a filled-out image.

The method used here works and results in some useful color gray-scaling,
but it does have a few minor drawbacks -

    1.	Since the copy operation occurs in real-time concurrent with the
	display, some "ghosting" on moving images is inevitable.

    2.	Since the image is expanded vertically by 1/2, small line details
	will be affected by the line doubling technique.  This is mostly
	an aesthetic annoyance.

    3.	Those utilities which "read" the CGA registers at 03d4 et seq.
	are going to find no registers to read.	 This does not seem to
	affect many programs.

    4.	40x25 text mode is not supported - the hardware just isn't there.
	This mode is mapped into 80x25 and again, doesn't seem to bother
	many utilities.

    5.	When in text mode (modes 0, 1, 2 and 3), the normal monochrome
	character attributes are not available - this is a problem with
	the way the HGC handles the attribute memory map.


Quite a few programs have been tested, including Flight Simulator, PC-CAD,
BASICA and some games with no hitches.

This package contains three programs - SIMCGA, SETCGA, SETMONO.	 SIMCGA
is the memory-resident part and must be run before the CGA simulation
feature is available.  SETMONO will restore the monochrome-only mode;
SETCGA will reset CGA compatibility after a SETMONO.  If this feature
is used routinely, you might want to put this in your AUTOEXEC.BAT file -

	SIMCGA
	SETMONO

and then run a SETCGA when you need the CGA feature.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0929

     Volume in drive A has no label
     Directory of A:\

    1        BAT        41   4-12-87   5:55a
    2        BAT        32   4-10-87   9:41p
    3        BAT        47   1-03-80   1:27a
    4        BAT        19   4-12-87   6:00a
    5        BAT        44   1-03-80   1:26a
    5A       BAT        39   4-12-87   6:14a
    A        BAT        35   4-12-87   5:58a
    B        BAT        39   1-03-80   1:34a
    C        BAT        23   4-12-87   9:23a
    CURSE    DOC      4391   4-12-87   7:40p
    DAILYS   DAT     45630   4-10-87
    FILEFILE DAT       273   4-11-87   9:44a
    FILES929 TXT      2522  12-14-87   9:25a
    F_ASTRO  DAT     22464   4-10-87  12:00p
    GO       BAT        38  12-09-87   4:22p
    GO       TXT       386  12-09-87   3:53p
    HERCINST           802   4-12-87   9:25a
    INSTALL  DOC      6342   4-12-87  11:00p
    LF       COM     39514   4-10-87   9:47p
    MENU              1112   4-12-87   6:11a
    NUMBERS  SCR     11400   4-10-87
    README   BAT        26   4-10-87   8:47p
    SCR_SCR  SCR     98304   4-10-87
    SETCGA   COM         7   4-10-87
    SETMONO  COM         7   4-10-87
    SIMCGA   COM       618   4-10-87
    SIMCGA   DOC      2244   4-10-87
    START    COM     25984   4-10-87  12:50a
    START    DTA      3725   4-10-87  12:50a
    START    MSG      2151   4-10-87  12:50a
    USER     DAT       170   4-11-87   9:44a
           31 file(s)     268429 bytes
                           30720 bytes free
