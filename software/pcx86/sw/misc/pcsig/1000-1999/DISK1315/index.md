---
layout: page
title: "PC-SIG Diskette Library (Disk #1315)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1315/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1315"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ERB, MINIMUF, HIGH POINT (DIVERSLOG 2050"

    EXTERIOR RIFLE BALLISTICS (ERB) is an aid for those sportsmen who reload
    their own ammunition.
    
    Determine expected bullet rise if the target is before the adjusted ZERO
    point, and bullet drop downrange beyond the adjusted ZERO point.  It
    saves deciphering of ballistic tables to estimate the correct
    combination of powder and primer for a bullet.
    
    A MUF calculator for the amateur radio operator.
    
    MINIMUF computes the Maximum Usable Frequency (MUF) for specified paths
    for a 24-hour period given in GMT (UTC).  The program gives the MUF for
    one path and draws a graph.  You can select from 15 pre-programmed
    paths or you can enter the latitude and longitude coordinates for any
    path in a setup data file.  The graph is displayed in the text mode so
    it can be printed on all IBM compatible printers.
    
    HIGH POINTS belongs at your next meet or sporting event.  Designed to
    assist in judging competitive events, it calculates and provides judges
    (and journalists) with tallies and standings, instantly.
    
    The program handles events of one to 10 rounds with up to 400
    participants grouped by one to 10 classes.  The data entry screen is
    self explanatory and the documentation contains many useful hints and
    precautions for the actual events.
    
    Save data to a file or print results of a round or current standings at
    any time.  There is even a supplementary program to help resolve ties
    when the judges are required to include secondary criteria.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1315.TXT

{% raw %}
```
Disk No: 1315
Disk Title: Diver's Log, ERB, MiniMuf, High Point
PC-SIG Version: S1.4

Program Title: Diver's Log
Author Version: 2.4
Author Registration: $15.00
Special Requirements: None.

DIVER'S LOG is for the active scuba diver or scuba club to record
information about each dive for future retrieval and analysis.

The database has fields for: the dive number, location, date, weather
conditions, surface conditions, current condition, air and water
temperature, visibility, air consumption, bottom time, and average or
maximum depth.  Records may be searched, edited, deleted, viewed, and
printed.

File Descriptions:

DIVE     EXE  Main program.
README   DOC  Instructions.
------------------------------------------------------------------------
Program Title: ERB
Author Version: 1.10
Author Registration: $5.00
Special Requirements: None.

EXTERIOR RIFLE BALLISTICS (ERB) is an aid for those sportsmen who reload
their own ammunition.

Determine expected bullet rise if the target is before the adjusted ZERO
point, and bullet drop downrange beyond the adjusted ZERO point.  It
saves deciphering of ballistic tables to estimate the correct
combination of powder and primer for a bullet.

File Descriptions:

BULLET20 EXE  EXTERIOR RIFLE BALLISTICS program.
------------------------------------------------------------------------
Program Title: MiniMuf
Author Version: 1.00
Author Registration: $20.00
Special Requirements: IBM printer or compatible.

A MUF calculator for the amateur radio operator.

MINIMUF computes the Maximum Usable Frequency (MUF) for specified paths
for a 24-hour period given in GMT (UTC).  The program gives the MUF for
one path and draws a graph.  You can select from 15 pre-programmed
paths or you can enter the latitude and longitude coordinates for any
path in a setup data file.  The graph is displayed in the text mode so
it can be printed on all IBM compatible printers.

File Descriptions:

READ     ME   Introduction.
MINIMUF  DOC  Documentation.
MINIMUF  PAS  Source code.
MINIMUF  COM  Main program.
MUFSETUP DAT  Setup file.
-----------------------------------------------------------------------
Program Title: High Points
Author Version: 1.00
Author Registration: $20.00
Special Requirements: None.

HIGH POINTS belongs at your next meet or sporting event.  Designed to
assist in judging competitive events, it calculates and provides judges
(and journalists) with tallies and standings, instantly.

The program handles events of one to 10 rounds with up to 400 participan
grouped by one to 10 classes.  The data entry screen is self explanatory
and the documentation contains many useful hints and precautions for the
actual events.

Save data to a file or print results of a round or current standings at
any time.  There is even a supplementary program to help resolve ties
when the judges are required to include secondary criteria.

File Descriptions:

CLIST    EXE  Competition listing program.
HP       EXE  HIGH POINTS Program.
HP       DOC  HIGH POINTS documentation.
NAF      TXT  Configuration file.
PERFSKIP COM  Print utility.

PC-SIG
1030D East Duane Avenue
Sunnyvale, Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.
```
{% endraw %}

## MINIMUF.DOC

{% raw %}
```






                             MINIMUF PROGRAM OPERATION
                                    Version 1.00
                         by Keith Seabourn, 5N6SKD & KD5NZ
            
            These program calculates the Maximum Usable Frequency (MUF)
            for specified paths for a 24 hour period given in GMT (UTC).
            The program gives the MUF for 1 path and draws a graph.  The
            user can select from 15 pre-programmed paths or can enter
            the latitude and longitude coordinates for any path desired.
            The program can customized for any QTH by putting the
            necesary information in a setup file.
            
            The program operates the screen in the text mode as opposed
            to the graphics mode.  The text mode is common to all IBM-
            compatible equipment whereas the graphics mode is not.  By
            using the text mode, all access is provided to greater
            numbers of amateur radio operators.  Also, the text mode
            allows any printer to be used to obtain a printed copy of
            the screen graph.  The printers use widely different
            standards for their graphics mode of operation.
            
            SETUP FILE
            
            A SETUP FILE called MUFSETUP.DAT customizes MINIMUF to your
            exact callsign and QTH.  It also contains 15 path choices.
            This disk is originally supplied with MUFSETUP.DAT
            containing information for a QTH in Dallas, Texas.  You
            should use any ASCII text file editor or a word processor
            that can read/write ASCII text files to create a
            MUFSETUP.DAT for your exact QTH.
            
            The MUFSETUP.DAT file should be created as follows:
            
            Line 1 would contain your callsign; your station latitude;
            your station longitude (all separated by semicolons)
            
            Line 2 to Line 16 would contain paths in the format path
            name; destination latitude; destination longitude (again
            separated by semicolons)
            
            NOTE:  MINIMUF expects Choices 16 and 17 to always be
            exactly as they are written.  The user must only enter 15
            path options in MUFSETUP.DAT.  The program requests
            additional data if Option 16 or 17 are chosen.  The user may
            freely change path options 1-15.  The latitude and longitude
            conventions used in this program are:
                      Latitude North is positive (+)
                      Latitude South is negative (-)
                      Longitude West is positive (+)
                      Longitude East is negative (-)
            




            MINIMUF DOCUMENTATION                     Page 1










            An example is:
                      KD5NZ;33.0;97.0
                      To USA-W.Coast(San Fran);38.0;122.0
                      To USA-E.Coast (Wash DC);39.0;73.0
                      To USA-Hawaii;21.0;158.0
                      To AFRICA-Zambia;-15.0;-28.0
                             |
                             |
                             v
                      To ASIA-Japan;36.0;-140.0
                      To EUROPE-London;51.0;0.0
            
            The maximum lengths of the various items are:
            Station Callsign              11 characters

            Station Latitude,             7 characters maximum (-xxx.xx)
                 Longitude

            Path Name                     24 characters

            Destination Lat, Lon          7 characters (same as Station
                                               Lat, Lon)

            The best way to customize the MUFSETUP.DAT is to use your
            word processor/text editor to read the MUFSETUP.DAT supplied
            with the program disk, called MUFSETUP.DAT.  Then modify the
            station call, station latitude/longitude and any path names
            and latitude/longitude.
            
            PROGRAM OPERATION
              The user works through the requested information.
              1. Choice.  The user must enter a choice from 1 to 17.
                 Press RETURN when ready to proceed.
              2. Day and month.  Enter the day and month as day <space>
                 month.  The <space> separates the 2 entries.  Enter
                 RETURN to proceed.
              3. Source of solar activity.  Enter either 's' for Sunspot
                 data or 'f' for Solar flux data.  RETURN to proceed.
              4. Sunspot number or Solar Flux.  Enter the correct value.
                 RETURN to proceed.
              5. Flag on MUF.  A 'y' will cause the graph to show a
                 special character when the MUF exceeds the frequency
                 entered.   A 'n' to omit flag.  RETURN to proceed. If
                 'y' selected, the user is asked to enter frequency in
                 MHz.  All points which exceed this frequency are
                 plotted with a different character.
            
            The MUF is calculated for all times from 0000z to 2300z at
            this time.  The screen shows the MUF information both
            graphically and tabular.
              




            MINIMUF DOCUMENTATION                     Page 2










              6. Want Printout (Y/N)?  Enter 'y' to print a hard copy of
                 this screen data.  Make sure the printer is turned on
                 and paper inserted before proceeding. Type an 'n' to
                 omit hard copy.  RETURN to proceed.
              7. Plot another (Y/N)?  Enter 'y' to calculate the MUF for
                 another path.  If 'y' is chosen, the 17 path choices
                 will appear again.  However, the items 2-5 are omitted
                 and the previous values are repeated for the new path.
                 Type an 'n' to cancel program.  RETURN to proceed.
            
            PROGRAM OUTPUT
            
            The program presents the MUF for the chosen path on the
            screen both graphically and in tabular form.  By pressing
            'y' when the question Want Printout (Y/N)? is asked, the
            program will print a copy of the screen.  The program sends
            no special printer control characters so any printer that
            can print 80 columns will work satisfactorily.  The program
            will use the default state of the printer (the normal,
            power-up state).



































            MINIMUF DOCUMENTATION                     Page 3




```
{% endraw %}

## NAF.TXT

{% raw %}
```
**  Four-nation archery tournament  **   (fictive test-data)
n18 t14 r4 l4
    countries
  1 U.S.A.
  2 Soviet Union
  3 Japan
  4 West Germany
--- men/3
 1A F. Henderson/1
    H. Froelich/4
    K. Takamoto/3
    B. Bondartsjuk/2
    T. Sato/3
    W. Schwartz/4
    W. Fletcher/1
    J. Nikolaievitz/2
    V. Orlov/2
    A. Spirelli/1
    K. Lamm/4
    O. Yamamoto/3
    I. Kammerer/4
    C. Williams/1
    M. Arbatov/2
    N. Motoyama/3
--- women/2
 5A L. Romanova/2
    S. Satashi/3
    G. Klammer/4
    E. Dupont/1
    M. Kanamuro/3
    U. Braun/4
    A. Kositskina/2
    A. Whitehead/1
    K. Russel/1
    T. Omatsu/3
    L. Albrecht/4
    G. Press/2
 ...
```
{% endraw %}

## README.DOC

{% raw %}
```
		  DIVER'S LOG VERSION 2.4  DOCUMENTATION FILE
		 --------------------------------------------
	 
	 September 8, 1989
	 
	 Many Improvements have been made to this program to produce a
	 high quality User friendly and reliable program. A manual has
	 been produced to replace the documentation file that
	 accompanied version 1.0 thru 2.3
	 
	 The manual is included in the registration price. The manual
	 is very close to an absolute necessity. It explains how to
	 use the mouse, the menus, the message box windows and the
	 editing keys.  The registration price is $15.00   
	 
	 If you give a copy of this program to a friend or other
	 person, that person must agree to these terms above and
	 below.
	 
	 This program cannot be placed onto a BBS.
	 
	 ALL USERS MUST REGISTER OR DESTROY THEIR COPY OF THIS
	 PROGRAM.  
	 
	 
	 
	 LICENSE AGREEMENT
	 ------------------
	 
	 The program in this package is a product of RTD Software
	 Systems and is protected by Copyright Law. RTD Software
	 Systems retains title to and ownership of the program. You
	 may use the program on a single computer or move the program
	 to and use it on another computer, but under no circumstances
	 may you use the program on more than one computer at the
	 same time. You may make one copy of the diskette for backup 
	 purposes only.

	 You may transfer the program to another party if
	 the other party agrees to accept the terms and conditions of
	 this License Agreement.

	 You may not de-compile, disassemble, or otherwise reverse
	 engineer the program. You may not modify the program in any
	 way without prior written permission of RTD Software
	 Systems.

	 
	 IF YOU HAVE BEEN GIVEN A COPY OF THIS PROGRAM AND you wish to
	 use it you MUST register your and buy a license agreement.
	 
	 Registration entitles user to full technical support.
	 
	 
	 
	 2. GETTING THE PROGRAM RUNNING
	 ------------------------------
	 
	 To Start Program, type DIVE at the A: prompt.
	 
	 To open a pull down menu you must press [ALT] + the
	 first letter of the menu name simultaneously.
	 
	 A selection can be made from the menu by pressing the first
	 letter of the option, then pressing return.
	 
	 
	 
	 
	      DIVERS LOG 2.4 REGISTRATION FORM
	 -------------------------------------------------------------
	 
	 Registration Fee: $15.00 (Check or Money Order only)
	 
	 To register your disk and receive a manual, send your
	 registration fee to:
	 
			     RTD Software Systems
			      Robert T. Dewenter
			    876 Congress Park Drive
			    Centerville, OH 454549
				      USA
	 
	 -------------------------------------------------------------
	 
	 ___________________________________________________
	 NAME
	 
	 ___________________________________________________
	 ADDRESS
	 
	 __________________________        _______________
	 CITY                              STATE
	 
	 _______________
	 ZIP
	 
	 -------------------------------------------------------------
	 Please provide some feedback, even if you are not registering
	 your use.  Your name and address is not necessary if you are
	 not registering.
	 
	 PRODUCT RATING
	 
	 ___ JUNK               __ PRETTY GOOD
	 
	 ___ PRETTY BAD         __ GOOD
	 
	 ___ NICE TRY           __ GREAT
	 
	 ___ OK                 __ EXCELLENT
	 
	 
	 ON A SCALE FROM 1 TO 10 : _______
	 
	 
	 
	 USER'S COMMENTS:
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1315

     Volume in drive A has no label
     Directory of A:\

    2        DAT       126  12-06-87  10:19p
    BULLET20 EXE     76307  11-30-88   1:19p
    CLIST    EXE     12580   1-07-88  10:17p
    DIVE     EXE     83722   9-08-89  11:42a
    FILE1315 TXT      3287  10-02-89  12:59p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848   9-01-89   3:52p
    HP       DOC     35487   9-30-88   9:31p
    HP       EXE     17218  10-16-88   7:30p
    MINIMUF  COM     29607   6-07-87  12:10p
    MINIMUF  DOC      6870   6-07-87  11:31a
    MINIMUF  PAS     27550   6-07-87  12:06p
    MUFSETUP DAT       488   6-07-87  10:17a
    NAF      TXT       698   3-25-88   4:33p
    PERFSKIP COM       384   4-10-85   8:13a
    PRINTDOC BAT       136   6-02-89  11:35p
    READ     ME        624   9-30-88   7:33p
    README            3617   6-07-87   9:15a
    README   DOC      3526   9-08-89  12:05p
    TIES     EXE     14610   9-23-88   7:16a
           20 file(s)     317723 bytes
                           34816 bytes free
