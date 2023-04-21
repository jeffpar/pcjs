---
layout: page
title: "PC-SIG Diskette Library (Disk #3496)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3496/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3496"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILES.DOC

{% raw %}
```

**************************************************************************
PC PLUS CONSULTING  # 328   Utilities and Fonts for HP Laserjet
**************************************************************************
This disk contains a set of Helvetica portrait and landscape fonts
normal,, bold and italic in 8,10,12,and 18 point sizes. The fonts are archived 
to fit on the disk and the program to extract them is provided.

The following utilities are on this volume:


  Pmode is a very simple utility to set a serial port to 19200 baud.  I
use it with an HP LaserJet (connected to several PC's) to reset the
serial port on the PC, to allow faster transmission of graphics data.

  Pmode works on any comm port recoginzed by the BIOS data area.  It
does not include or interfere with the features of the DOS Mode command,
such as timeout support.  For printer applications, we set the port
FIRST with Mode (with the 'p' option), then reset the baud rate with
Pmode.
---------------------------------------------------------------------------

PAMPHLET Ver 1.1,  is a user supported printing utility for the HP LaserJet
by Martin Beattie, 9190 Rolling Tree Lane, Fair Oaks, CA 95628

PAMPHLET  is  a  printing  utility to  help  keep  your  hardcopy printouts, 
listings, etc neatly and in a more managable size.  It lists  a text file 
to the HP Laser Jet in the landscape mode  and places  2  pages  side  by 
side.  These  pages  are  not  printed sequentially,  but  in  the  order 
required  to  create  a  small manuscript  or  pamphlet.  It requires two 
passes  of  the  paper through  the printer and thereby prints 4 pages per  
sheet.   The page  placement is calculated by the program making a  dummy  
run through  the  file to be printed to determine page  breaks.   The
pages  are counted, the number of sheets are calculated and  then the  
individual pages are assigned to a specific sheet  location. The printing 
process then begins and all of the "front sides"  of the  sheets  are 
printed.  The operator is prompted to  turn  the paper  over and, when ready, 
touch the <ENTER> key to  start  the "back page" printing.  If you have a 
LaserJet Series II, all  you need  to do is to use PAMPHLET.COM.  After the 
first half of  the pages are printed, then take the entire stack EXACTLY as 
it  lies in  the out tray and place it in the paper tray.  DO NOT turn  it
over or around -- the alignment and sequencing should be correct.
----------------------------------------------------------------------------

HPL2VEN
A Font Conversion Utility 

If you use Ventura Publisher you probably love everything about it. But, 
almost everyone I know wishes that they could add a few fonts to the list. 
If your in that group you'll be happy to know that most (but not all) fonts 
that are available for the HP Laserjet can be converted for use with Ventura. 
All the tools needed for the conversion are found on the utilities disk. The
only problem is that the process of conversion is tedious and not very well 
documented. I played around with the conversion programs until I got reason-
ably adept at getting what I wanted. But converting more then a couple of 
fonts at a time was just not something to look forward to. Their had to be a 
better way. HPL2VEN is, at least for me, less frustrating and a lot faster. 
---------------------------------------------------------------------------

 GEMCAP is a shareware program by Natural Software, 19 South 5th. Street
St. Charles, Illinois 60174  (312) 377-7320

This share-ware  utility program:  GEMCAP.COM, allows  you to capture
screen images  from other  programs, save  them in  separate GEM .IMG
files, and  later load  them into  other programs  that can read this
format such as Ventura Publisher. 

 GEMCAP is a Terminate and Stay Resident (TSR)  program. When  you run
it  from  the  DOS  command  line,  it will announce its presence and
quietly sink into the background and  wait to  be called  into action
(when  its  "hot  key"  is  pressed).  When  you run GEMCAP, you must
provide it with the location and starting file  name to  use to store
the screen  images it  captures. For  example, you might start GEMCAP
with this command:

 

```
{% endraw %}

## GEMCAP.DOC

{% raw %}
```






                                  Natural Software
                                19 South 5th. Street
                             St. Charles, Illinois 60174
                                   (312) 377-7320


        This share-ware  utility program:  GEMCAP.COM, allows  you to capture
        screen images  from other  programs, save  them in  separate GEM .IMG
        files, and  later load  them into  other programs  that can read this
        format such as Ventura Publisher. 

        GEMCAP is a Terminate and Stay Resident (TSR)  program. When  you run
        it  from  the  DOS  command  line,  it will announce its presence and
        quietly sink into the background and  wait to  be called  into action
        (when  its  "hot  key"  is  pressed).  When  you run GEMCAP, you must
        provide it with the location and starting file  name to  use to store
        the screen  images it  captures. For  example, you might start GEMCAP
        with this command:

                    GEMCAP C:\SCREENS\SCREENA.IMG

        Now GEMCAP will store its screens  in the  SCREENS sub-directory. The
        first screen  it saves will be called SCREENA.IMG, the second will be
        called SCREENB.IMG. Each  subsequent  .IMG  file  will  increment the
        character in  the filename just before the extension. These files are
        graphic bit image files  compatible with  any program  that reads GEM
        .IMG files,  regardless of  whether the  original screen  was in text
        mode or graphics mode.

        To activate GEMCAP and save the  current screen  to a  .IMG file, you
        press the [Alt + left Shift] keys together. You will hear a beep when
        GEMCAP is  called. Three  beeps means  it successfully  wrote an .IMG
        file to the specified directory. Only one beep means it was unable to
        create the file (could not find the directory?). Only two beeps means
        it created  the file, but could not write the full 16k screen buffer,
        (disk full?).

        GEMCAP will  detect the  current video  mode and  adjust. It converts
        text mode screens into bit mapped graphics.

        Like any other TSR, GEMCAP may have compatibility problems with other
        software, especially other TSR's. If you have trouble, try installing
        GEMCAP by  itself and  adding your  other TSR utilities one at a time
        after you get GEMCAP to work.

        Removing GEMCAP:

        You can remove GEMCAP from memory (well, almost) by pressing the [Alt
        + Right  Shift] key  combination. This  disengages GEMCAP  so that it
        will not interfere with other software. This will  also release (most
        of) the  memory used  by GEMCAP.  When loaded and active, GEMCAP uses
        3856 bytes of memory. After removal  with [Alt  + Right  Shift], only
        288 bytes remain allocated.






        Different sized images:

        The size of the captured image is controlled by two words in the .IMG
        file. These are constants  in  the  GEMCAP  program.  The  first word
        specifies  the  pixel  size  in  width, the second word specifies the
        pixel size in height  (unit of  measure is  in microns).  The default
        values are: (in hexidecimal):

          Address        Value        
          0108           00D5 (width), 
          010A           01AA (heigth).

        To make  the displayed image one half the size of the default, change
        these values to


          Address        Value        
          0108           006A (width), 
          010A           00D5 (heigth).

        The steps using Debug to do this are: (you enter the stuff marked ^^)

               DEBUG XYZ.IMG                 (Load the image file)
	       ^^^^^^^^^^^^^
               E 0108                        (enter data at address 0108)
	       ^^^^^^
               XXXX:0108 00.00 D5.6A         (change  00D5   to  006A,  press
                            ^^    ^^           space bar between entries)

               E 010A                        (do the same for address 010a)
	       ^^^^^^
               XXXX:010A 01.00 AA.D5         (change 01AA to 00D5)
			    ^^	  ^^
               W                             (write the changes to the file)
	       ^
               Writing 4020 bytes

               Q                             (return to DOS)
	       ^
        You can experiment with other values. However, some combinations will
        cause truncations of pixels when the image is displayed.

        If you  find a  set of values that work for your application and wish
        to make them the default values for all  captured images,  change the
        corresponding values in the program (GEMCAP.COM) itself. These are at
        address locations 0951 and 0953  (hex)  when  GEMCAP  is  loaded into
        DEBUG.











        ShareWare:

        GEMCAP is  being distributed  as shareware. This means that it is not
        free. This means that you must  pay to  use it.  However, you  do not
        have to pay to try it, test it, and to determine if it is going to be
        useful to you. You  are probably  familiar with  the concept  by now.
        ShareWare programs give you the advantage of "test driving" them. The
        advantage to the developer  is a  relatively inexpensive distribution
        method.  For  this  concept  to  work and keep working for our mutual
        advantage, you really must register  and  pay  for  the  software you
        actually find useful.

        To register  your use  of GEMCAP,  send $20.00 to Natural Software at
        the address above. We  will  send  you  a  description  of  our other
        software offerings and provide telephone support. 

        If you  have suggestions for improvement, or problems please write or
        call.




```
{% endraw %}

## HPL2VEN.TXT

{% raw %}
```
HPL2VEN
A Font Conversion Utility 

If you use Ventura Publisher you probably love everything about
it. But, almost everyone I know wishes that they could add a few
fonts to the list. If your in that group you'll be happy to know
that most (but not all) fonts that are available for the HP
Laserjet can be converted for use with Ventura. All the tools
needed for the conversion are found on the utilities disk. The
only problem is that the process of conversion is tedious and not
very well documented. I played around with the conversion
programs until I got reasonably adept at getting what I wanted.
But converting more then a couple of fonts at a time was just not
something to look forward to. Their had to be a better way.
HPL2VEN is, at least for me, less frustrating and a lot faster. 
A few words of caution before you begin. I wrote this little
program for myself and can not guarantee that you will get
acceptable results. I will accept no responsibility for any
problems that you encounter. All I can say is that it works very
well for me and I use it all the time.
Because I wrote the program initially only for myself I decided
to include very little error checking. If I were to get some
favorable response I might be persuaded to polish things up a
bit. but for now you will have to be very careful that what you
type in at the prompts is what you meant. You will just have to
break  out of the program, delete the files that the program
created and start over. If you make a mistake but don't notice it
the bat files that are created will run but may produce files
that don't do what you had hoped for.
The program makes use of color to keep the different prompts
separated so that you can keep track of where you are in the
program. If you don't have color this program may not work.
The program works by taking your input and creating a .BAT file
and a .LST file that utilize the programs from the utilities disk
to convert the HP font files, create the font metric files for
use in creating the width table and finally to create the width
table.
Step by step: 
1. Create a directory to work from.
2. Copy three files from the Ventura utilities disk.
   a) HPLTOFNT.EXE
   b) HPLTOVFM.EXE
   c) VFMTOWID.EXE  
3. Copy the fonts that you wish to convert to the new directory.
4. Copy HPL2VEN.COM to the new directory.
5. Type HPL2VEN <CR> and follow the prompts.
6. Run the batch file that HPL2VEN created.
Depending on how many and how large the files are that you are
converting, the batch file may take quite a while to complete. If
all goes well you should end up with one new width file and new
font and font metric files for each of the fonts that you
converted.   
You then copy the width table and the font files to the VENTURA
directory. The font metric files (VFM) are not needed but you may
wish to keep them with your back-ups. 
The next step is to test the font by outputing something to see
if the new fonts work. Be sure to change the width table in the
SET PRINTER INFO dialogue box. If everything looks right on the
screen and prints out right, then you can merge the new width
table with the default table. 
Sometimes, and I don't know why, a new font will look very
strange on the screen but print out fine. If this happens make a
back-up of your default OUTPUT.WID table and try merging the new
one anyway. Sometimes this solves the screen problem. When the
program asks for font type you may have to go to the Ventura
manual (k. 15) to look up the code. This seems to have something
to do with which screen face is used.    
Expect to do some experimentation before you get things right.
Try converting just one font first. When you are sure that one
works the rest will probably go much easier.
My personal set up includes the Tall Tree Jlaser Plus board and a
Canon LBP-2A laser printer. I don't have access to other printers
so I can only assume that this procedure will work with other
printers. 
Remember, always work with back-ups. Keep all your conversion
files in a directory to themselves and proceed with caution. 
Since this is the very first version of this program, I am not
going to beg for the usual donations but I would appreciate any
comments. If I can be of assistance please call at the number
below.

Vince Campbell
P.O.Box 8313
Atlanta, Georgia  30306
(404) 872-0334
```
{% endraw %}

## PAMPHLET.DOC

{% raw %}
```
                        PAMPHLET Ver 1.1
             A printing utility for the HP LaserJet

                       Copyright (C) 1987

                         Martin Beattie
                     9190 Rolling Tree Lane
                       Fair Oaks, CA 95628
                     CompuServe [76555,454]
                        GEnie [M.BEATTIE]

PAMPHLET  is  a  printing  utility to  help  keep  your  hardcopy
printouts, listings, etc neatly and in a more managable size.  It
lists  a text file to the HP Laser Jet in the landscape mode  and
places  2  pages  side  by side.  These  pages  are  not  printed
sequentially,  but  in  the  order required  to  create  a  small
manuscript  or  pamphlet.  It requires two passes  of  the  paper
through  the printer and thereby prints 4 pages per  sheet.   The
page  placement is calculated by the program making a  dummy  run
through  the  file to be printed to determine page  breaks.   The
pages  are counted, the number of sheets are calculated and  then
the  individual pages are assigned to a specific sheet  location.
The printing process then begins and all of the "front sides"  of
the  sheets  are printed.  The operator is prompted to  turn  the
paper  over and, when ready, touch the <ENTER> key to  start  the
"back page" printing.  If you have a LaserJet Series II, all  you
need  to do is to use PAMPHLET.COM.  After the first half of  the
pages are printed, then take the entire stack EXACTLY as it  lies
in  the out tray and place it in the paper tray.  DO NOT turn  it
over or around -- the alignment and sequencing should be correct.

If  you  have a LaserJet which does not have  internal  landscape
compressed  print,  you need a Y cartridge for  this  program  to
work.  I do not know if the orientation of the paper as it  comes
from the printer is appropriate with other LaserJet series.   You
may  have  to experiment.  The program PAMPH.COM will  print  the
pages in sequential order with the right hand page front first as
1, 3, 5 then left page back 2, 4, 6 if you have trouble with  the
ordering  of pages with PAMPHLET.COM.  After the first pass,  you
must  then re arrange the paper so the the back of 1 (3, 5,  etc)
will print in order for the second pass.  Place the numbered page
(1,3,5)  face  down with the top of the minipage  (and  the  page
number)  to the left of the paper tray.  Arrange it so  that  the
sheet  with  page 1 will feed first, 3 second,  etc.   Lastly,  a
title page will be printed if one has been requested.

Pagination is determined by linecount of 66 or the presence of  a
form  feed character.  Line length is limited to  80  characters.
Longer lines will wrap around--such lines will begin with "---->"

The program is run from the DOS prompt as follows:

C>PAMPHLET d:path\filename[.ext] [/fdpm] [Title string]

The  "/"  options will ELIMINATE the presence  of  the  filename,
date, and page numbers on the top line of each page.  The default
state prints a header line with all of this information.  If  you
elect  to use this option all desired options should be  adjacent
to the "/" (ie. "/fd") if they are separated by spaces they  will
inadvertantly  appear in the title page.  The "m" option  reduces
line  length to 70 to allow holes to be punched along the  center
margins.  The default line length is 80.

The  [Title String] can be more than one word an up to  about  40
characters  in  length.  It will be placed on  a  separate  title
page.

This program may be freely copied and distributed freely provided
1) that no fee is charged for such copying and distribution and
2) that it is distributed ONLY in its original, unmodified state.

If  you  like this program, and find it of  use,  a  contribution
and  registration  would be appreciated.  If you are  using  this
program  in a commercial environment, registration is  mandatory.
Registered  users will receive a diskette containing  the  latest
version of PAMPHLET (C) and the Turbo Pascal source code.  I have
recently  obtained  a  copy  of  Turbo C.   If  source  in  C  is
available, it will be provided as well.  A contribution of $15 is
suggested.

If  you  correspond with comments and/or  questions  please  note
which version you are using.

Have fun,


Martin


 
                R E G I S T R A T I O N   F O R M

Please enter me as a registered user of PAMPHLET (C).
[Disk copy provided by Tom Jernigan - Try-It Software.]


N A M E ______________________________________________

S T R E E T / B O X  _________________________________

        ______________________________________________

C I T Y ___________________________ S T A T E ____  Z I P _______

C O M M E N T S / S U G G E S T I O N S  about PAMPHLET:

        ______________________________________________

        ______________________________________________

        ______________________________________________





```
{% endraw %}

## PCHELP.DOC

{% raw %}
```
              HELP FOR NEW USERS & PROBLEMS YOU MIGHT HAVE 
                        FROM PC PLUS CONSULTING

     Public domain software is actually very easy to use if you are familiar
with a few basic "DOS" commands. These commands are "COPY", "DISKCOPY", "DIR",  
"TYPE", "FORMAT", & a few others.  None of the disks are "bootable", which
means that you cannot place the disk in your computer and turn it on.
     The first thing is to make a backup copy of your disk with the following
command:
     A>DISKCOPY A: B:  <enter> - (will copy all files from 'A' to 'B')
     In the event that you get some sort of error message when using "DISKCOPY",
you will then have to use the "COPY" command to make a backup of your original
disk. Place a blank FORMATTED disk in the "B" drive and enter the following
command at the "A>" prompt: 
     A>COPY *.* B:  <enter> - (will copy all files from 'A' to 'B')
     Now put the original disk away and use the working copy.  The next thing
to do is see what files are on the disk.  Place the working copy in the "A"
drive and enter the following command:
     A>DIR   <enter> - will display the filenames
     Now you will see many different filenames.  A filename consists of two
parts; the filename & the extension.  The filename will be on the left (up to
8 characters long) & the extension will be just to the right (up to 3
characters long).  You will be looking for certain extension names; which
will tell you something about that type of file.  

******************************************************************************
*      IMPORTANT.....IMPORTANT.....IMPORTANT.....IMPORTANT.....IMPORTANT     *
*----------------------------------------------------------------------------*
* EXE - a program file - type in the name & press the enter key.             *
* COM - a command file - type in the name & press the enter key.             *
* BAT - a batch file - many uses, type in the name & press enter key.        *
* BAS - a "BASIC" program. Needs GWBASIC or BASICA to run the program.       *
* ARC - a archived file - needs to be unarchived, contains many files.       *
* DQC - a compressed file - needs to be uncompressed to be readable.         *
* DOC - A DOCUMENTATION FILE - instructions about the program - READ THIS    *
* TXT - A DOCUMENTATION FILE - instructions about the program - READ THIS    *
******************************************************************************

     You may also see files like READ.ME or README.1ST or just README. These
are all documentation files that will tell you about the program or how to
work the program properly.

VERY IMPORTANT:  READ DOCUMENTATION FILES FIRST BEFORE RUNNING THE PROGRAM!!!

===============================================================================

     To view a documentation file on your screen, use the "TYPE" command.
With your program disk in the "A" drive enter the following command:
     A>TYPE filename.ext  (enter) - where filename would be README.DOC
            or whatever the filename is that you wish to view.
     This will display the documentation to the screen.  To stop the text
from scrolling by, press "CTRL S" (the CTRL key and "S" key at the same
time), any other key to resume scrolling. To obtain a printout of the
documentation simply replace the "TYPE" command with the "DOS" command
"COPY". Turn your printer on and enter the following command:
     A>COPY filename.ext PRN <enter> - where filename would be README.DOC or 
                                       whatever file you wish to print.

===============================================================================

     An "EXE", "COM", or "BAT" file extension means that when you  
enter the filename, the computer will do something.  For instance,
if the filename were "POKER.EXE", or "POKER.COM, or "POKER.BAT" you would
enter the following at the "A" prompt:
     A>POKER  <enter> - the poker program would now come up on the screen.

===============================================================================

     Another type of file (a little tricky to run) is a "BASIC" file. These
types have the "BAS" extension.  Any file with this extension must be run with
the "BASIC" interpreter.  That simply means that you must have a copy of
"GWBASIC.EXE" if you have a clone, or "BASICA.COM" if you have an "IBM". These
2 files (GWBASIC & the "BAS" file) must reside together or be able to find
each other.  An easy way to do this is to simply copy "GWBASIC.EXE" to the 
disk that contains the "BAS" files. When both files are together &
this disk was in the "A" drive you would enter the following command:
     A>GWBASIC POKER  <enter> - the poker program would now be "running"
                                & you would be playing the game.

===============================================================================

     Another important file is one with an "ARC" extension.  This means it is
an archived file & contains many smaller files within it. This is done so 
all the files will fit on to the disk(s) you received. You must extract the
files with a special program.  The program most commonly used is called 
"PKXARC.EXE". To extract files from a file called "TEST.ARC", enter the
following command: 
     A>PKXARC TEST B:   <enter> - this would extract all the files and place
them on a disk that was in the "B" drive.  You must have a FORMATTED blank disk
in the "B" drive when issuing this command. You could copy the "ARC" files & 
the program "PKXARC.EXE" to your hard drive & enter the following command:
     C>PKXARC TEST   <enter>  -  this will extract all the files from an
                                 archived state. Then you will see some of
                                 the different filenames mentioned above when
                                 you use the "DIR" command.

===============================================================================

     Hopefully this help sheet will enable you to understand & use your disks.
If all this still sounds like "GREEK", then we strongly suggest that you 
purchase the following disks:
        #257 - BEGINNERS - a tutorial on using public domain software
        #256 - DOS TUTORIAL - an excellent program teaching about your
                              computer & how to use "DOS" commands
        #255 - DOS HELP - on-line help screens for "DOS" commands

     If you would like individual training on your computer, our services
can be obtained for the following rates by appointment only:

        In our office - $35.00 / hour     

                                                Happy computing,

                                                PC PLUS CONSULTING
                                                14536 ROSCOE BL. # 201
                                                PANORAMA CITY, CA. 91402
                                                (818) 891-7930





     



     

```
{% endraw %}

## PMODE.DOC

{% raw %}
```
  Pmode is a very simple utility to set a serial port to 19200 baud.  I
use it with an HP LaserJet (connected to several PC's) to reset the
serial port on the PC, to allow faster transmission of graphics data.

  Pmode works on any comm port recoginzed by the BIOS data area.  It
does not include or interfere with the features of the DOS Mode command,
such as timeout support.  For printer applications, we set the port
FIRST with Mode (with the 'p' option), then reset the baud rate with
Pmode.

  For an explanation of usage, type PMODE at the prompt.

  Source is included for your use or amusement.

  Pmode is placed into the public domain.  Support your PD and Shareware
programmers!

  Jim Beebe
  CIS 74746,2444

```
{% endraw %}

## README.DOC

{% raw %}
```
   To display a directory of the files  within an archive type:
                   ARCDIR   (name of archive)
   example: 
          ARCDIR 123A (return)
 
  To extract the files to a working disk- first backup this disk and
  and format one disk for each of archives on the disk.

  Place the backup disk in drive A: and a blank formatted disk in another
  drive (X)
  type:     EXTRACT (name of archive) (X) letter of target drive
     example: 
           EXTRACT WKS1  B (return)
   It will take a few minutes to create a new disk in drive B: with 
  all the expanded files from the archive.
 
 If you create a subdirectory on your hard drive and change to it, then
you can extract the programs to your hard by using your HD letter in
place  of "X" in the EXTRACT command.
 --------  Use a new formatted disk for each of the archives. -------
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3496

     Volume in drive A has no label
     Directory of A:\

    ARCDIR   BAT       100   1-02-80   7:41a
    EXTRACT  BAT       197   1-01-80   8:57a
    FILES    DOC      4298   1-11-88   1:35a
    GEMCAP   COM      3426   8-24-87   1:38p
    GEMCAP   DOC      6016   8-25-87   2:49p
    HELSOFT  ARC    122880  10-09-87  12:41a
    HPL2VEN  COM     35219   9-30-87  10:59p
    HPL2VEN  TXT      4480  10-01-87   5:26p
    PAMPH    COM     19859   6-05-87   2:47p
    PAMPHLET COM     20268   6-05-87   2:45p
    PAMPHLET DOC      5006   8-08-87   8:56a
    PCHELP   DOC      7062   3-08-88   2:29p
    PMODE    COM       323   8-25-87  12:28p
    PMODE    DOC       741  10-15-87  11:22p
    README   DOC       867   1-01-80   8:55a
    XARC     COM     11482   6-17-87   3:07p
    GO       BAT       233   4-05-93   4:43p
    SHOW     EXE      2040   9-12-88  10:48a
           18 file(s)     244497 bytes
                           69632 bytes free
