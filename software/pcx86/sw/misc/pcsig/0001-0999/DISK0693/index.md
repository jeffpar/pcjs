---
layout: page
title: "PC-SIG Diskette Library (Disk #693)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0693/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0693"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ACE 2 OF 2 (ALSO #692)"

    This program is a general-purpose astronomy software package with three
    separate parts -- ACECALC, ACESOLAR and ACECAT.
    
    ACECALC is a menu-driven astronomical ephemeris. Perform the most
    needed astronomical calculations involving the sun, moon and planets.
    The menu displays the local time, date and time zone name, universal
    time, local mean sidereal time, julian day, and the name of the location
    designated in the installation. It also calculates astrophotography
    exposures, precession of coordinates, phases of the moon, equinoxes and
    solstices, and satellites of Jupiter.
    
    ACESOLAR provides information on objects in the solar system such as
    numeric data on the sun, the planets and their satellites. Also
    available are narrative descriptions of the sun and planets and
    observational data.
    
    ACECAT lets you search the sky catalog for objects by name, catalog
    number, and position -- in terms of R.A./declination, object type, and
    constellation. This sky catalog provides data on over 2000 deep-sky
    objects, the entire Messier Catalog, 100 named objects, all bright stars
    to magnitude 2.00, and 100 prominent double stars, with detailed
    commentary on nearly 400 of these objects. Objects can be searched on
    the basis of one criterion or by a combination.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES693.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No  693  ASTROSOFT EPHEMERIS(ACE) Disk 2 of 2                   v1
---------------------------------------------------------------------------
 
 
ACECAT is a sky catalog program that will alow the user to search the sky
catalog for objects by name, catalog number, position(R.A./Declination),
object type,and constellation.
 
 
------------  Volume ACE2
ACECAT   COM  The Sky Catalog Program
DBLCAT   DAT  Double star catalog
DBLCOM   DAT  Double star commentary
DBLCOM   NDX  Double star commentary index
DEEPCAT  DAT  Deep sky catalog
DEEPCOM  DAT  Deep sky commentary
DEEPCOM  NDX  Deep sky commentary index
DEEPMES  DAT  Messier catalog
DEEPNAM  DAT  Named  objects catalog
HELP2    TXT  Help file
README        Information about ACE
SITE     DAT  Site information
STARCAT  DAT  Bright star catalog
STARCOM  DAT  Bright star commentary
STARCOM  NDX  Bright star commentary index
 
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
 
```
{% endraw %}

## GO.TXT

{% raw %}
```
This is disk #2 of a two disk set.
 
To run ACECAT (Sky Catalog Program), type:
              "ACECAT <enter>"
 
To run the rest of the software requires disk #692.
 
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## HELP2.TXT

{% raw %}
```
                                Search Options

         Use  this  option  to  search  for  objects in the currently-
         selected file option.

         Example entry format:

                                Catalog Number:
                                     Name:
                                Constellation:
                            Starting Ra Ending Ra :
                   Starting Declination Ending Declination :
                                 Object Type:

                   Display Commentary (if available) [Y/N]?
                                Hardcopy [Y/N]:

                                 File Options

         Use  this  option  to select the file to be used in searches.
         Use  the Spacebar or the Arrow Keys to move the shaded bar to
         the option of your choice; then hit the Enter key.

         Full Catalog:  over 2000 deep-sky objects
         Messier Catalog:  the 110 Messier Catalog objects
         Named Objects:  about 100 objects having common names 
         Bright Stars:  all stars with magnitudes less than 2.00
         Double Stars:  about 100 prominent double stars

         



                                  
                                   DOS Shell

         Use  this option to execute DOS commands without leaving ACE.
         To return to ACE, type "EXIT" at the DOS prompt.













                                     Exit

         Use  this  option  when  you  want  to exit from the menu and
         return to the DOS prompt.













```
{% endraw %}

## NOTES693.TXT

{% raw %}
```
Program name:The Astrosoft Ephemeris
Author name:Jerry Gardner and Martin Morrison
Address: Astrosoft Inc
        Post Office Box 4451
        Hayward, CA 9540-4451
 
Telephone Number:N/A
 
Suggested Donation:$ 25.00
 
Program Description:The Astrosoft Computerized Ephemeris is the P.C. users
guide to to the night sky.It will delight the novice and experienced sky
gazer. In three parts this two volume set will perform the most common
astronomical calculations,provide data on objects in the solar system and
search a sky catalog of over 2000 deep sky objects, the Messier Catalog,
100 named objects,all bright stars to MAG 2.00 and more. Objects may be
searched by one or more criterion. For example the catalog may be searched
for all double stars or just the ones in a section of the sky.
  All three programs are menu driven and a detailed 32 page users manual
(ACE.doc)is provided on the first volume.
   The first program Acecalc.com, is a menu driven Astronomical Ephemeris.
In the menu mode it reads the clock and converts the local time to G.M.T,
Mean Sidereal time and Julian day.By selecting an option from the menu one
may find data on the position of the sun, Moon,and planets for a selected time
and day.This  program will also calculate astrophotography exposures,Sidereal
time, precession of coordinates, phases of the Moon, Equinoxes and Solstices,
Galilean satellites of Jupiter, print a perpetual calendar, give the low down
on polaris and execute DOS commands without leaving Acecalc. Neat. No sky
junkey should be without one.
   The second program is Acesolar. This program provides reference data and
comments on objects in the solar system and plays a tune fitting the object
selected. The music may be turned off.
   The third program is Acecat. This is a sky catalog that may be searched
like a database. one can print the whole catalog or select search criterion
to narrow the field.
 
These programs will run on a P.C. , XT,and AT with a minimum of;
 
128K ram
1 double sided floppy disk
Mono or Color Graphics Adaptor
DOS version 2.10 or above
 
The FX-80 parallel printer is supported and a math Co-processer version is
available from the authors.
 
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0693

     Volume in drive A has no label
     Directory of A:\

    ACECAT   COM     45595   2-25-87  10:27p
    DBLCAT   DAT      4352   7-13-86   7:21p
    DBLCOM   DAT     13696  11-29-86  11:51a
    DBLCOM   NDX      3366  12-19-86  10:30p
    DEEPCAT  DAT    132096  10-18-86  12:01p
    DEEPCOM  DAT     94080  11-29-86  12:32p
    DEEPCOM  NDX      4126  12-19-86  10:30p
    DEEPMES  DAT      7552   7-13-86   7:28p
    DEEPNAM  DAT      8960  12-21-86  11:54a
    FILES693 TXT      1536   1-04-80  12:45a
    GO       BAT        18   1-29-87   9:41a
    GO       TXT       512   1-04-80  12:44a
    HELP2    TXT      1664  10-18-86   5:07p
    NOTES693 TXT      2560   1-04-80  12:46a
    README             256   9-21-86   8:43a
    SITE     DAT       179  10-16-86   7:37p
    STARCAT  DAT      3712   7-13-86   7:30p
    STARCOM  DAT     17920  10-18-86  11:09a
    STARCOM  NDX      2000  12-19-86  10:30p
           19 file(s)     344180 bytes
                            8192 bytes free
