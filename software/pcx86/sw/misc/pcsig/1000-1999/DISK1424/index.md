---
layout: page
title: "PC-SIG Diskette Library (Disk #1424)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1424/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1424"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VIDEO LIBRARIAN"

    VIDEO LIBRARIAN is a menu-driven database for VCR (VHS/BETA) users who
    want to catalog their video cassette libraries.  VLB records 18 fields
    of information about each movie selection, performs powerful
    cross-referenced searches, and prints reports to the screen, printer or
    disk.
    
    You can find any title, star, co-star, director or tape number in the
    datafile which can hold up to 64,000 selections -- about 1000 on a 360K
    floppy. The program also lets you create and print professional-looking
    cassette labels to identify your nameless black boxes and keep your
    collection neatly organized. A tutorial helps you get started.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1424.TXT

{% raw %}
```
Disk No: 1424                                                           
Disk Title: Video Librarian                                             
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Video Librarian                                          
Author Version: 2.12                                                    
Author Registration: $25.00                                             
Special Requirements: Dot matrix printer.                               
                                                                        
VIDEO LIBRARIAN is a menu-driven database for VCR (VHS/BETA) users who  
want to catalog their video cassette libraries.  VLB records 18 fields  
of information about each movie selection, performs powerful            
cross-referenced searches, and prints reports to the screen, printer or 
disk.                                                                   
                                                                        
You can find any title, star, co-star, director or tape number in the   
datafile which can hold up to 64,000 selections -- about 1000 on a 360K 
floppy.  The program also lets you create and print professional-       
looking cassette labels to identify your nameless black boxes and keep  
your collection neatly organized.  A tutorial helps you get started.    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FILES.TXT

{% raw %}
```
VIDEO        EXE     The Main Video Librarian Program
SBMIO        COM     Memory resident B-Tree ISAM routines
MARK         COM     File to mark beginning of memory resident
                     routine SBMIO.COM
RELEASE      COM     File to restore memory used by SBMIO.COM
                     to the system when exiting Video Librarian
SBM          SYS     File containing the system default set-up
PRTCODES     DEF     File containing printer set-up codes
MAINHELP     TXT     File containing help information
SELHLP       TXT     File containing help information
RSELHLP      TXT     File containing help information
MSELHLP      TXT     File containing help information
VLB          BAT     Start-up batch file for Video Librarian
VLBINST      COM     Program defines system defaults
LISTER       EXE     Program to print documentation
VLB          TXT     Documentation file
SAMPLE       DAT     Sample data file for Video Librarian
SAMPLE       K1      Index file for sample data
SAMPLE       K2      Index file for sample data
SAMPLE       K3      Index file for sample data
SAMPLE       K4      Index file for sample data
SAMPLE       K5      Index file for sample data
PRINT        BAT     Start-up batch file to print documentation
README       TX1     Author's introduction to Video Librarian
README       TX2     Short description of Video Librarian
FILES        TXT     This file
```
{% endraw %}

## MAINHELP.TXT

{% raw %}
```
                               ** MENU KEYS **                        Page 1
------------------------------------------------------------------------------
KEY         FUNCTION           COMMENT
------------------------------------------------------------------------------
N           Next Movie         The next movie in the library file alphabetized
                               by title will be displayed.

P           Prev Movie         The previous movie in the library file alpha-
                               betized by title will be displayed.

F           Find Movie         This key allows you to rapidly find any movie
                               in the library file by title, star, co-star,
                               director or tape number.

T           Top Movie          The first movie alphabetized by title in the
                               library file is displayed.

L           Last Movie         The last movie alphabetized by title in
                               the library file is displayed.

E           Edit Movie         Allows you to edit the data fields of the dis-
                               played movie.
------------------------------------------------------------------------------
                            ** MENU KEYS cont **                      Page 2
------------------------------------------------------------------------------
KEY         FUNCTION           COMMENT
A           Add Movie           Allows addition of a new movie to the file.

D           Delete Movie        Deletes the displayed movie from the file.

S           Search File         Allows you to search the library file using up
                                to eight search criteria.

R           Report Screen       Displays SELECT TYPE OF REPORT LISTING screen.
                                Allows you to select the type of report, where
                                you want the report listed, how you want it
                                sorted and whether you want all or some movies
                                listed.  See Page 5 for more details.

C           Change File         Allows you to switch to another file created
                                by Video Librarian or to create a new file.

U           Utility Menu        Displays utility menu -- see Page 14.

Q           Quit to Dos         Exit Video Librarian and return to Dos.
------------------------------------------------------------------------------
                             ** EDIT MODE KEYS **                    Page 3
------------------------------------------------------------------------------
F1          Abort               This key may be used to Abort the Edit or Add
                                functions from the main screen.  The library
                                files are not updated.  May be used to abort
                                from other screens or prompts requiring data.

F5          Delete Field        Deletes the field from the cursor position to
                                the end of the field and the cursor is placed
                                at the left margin of the field.

F9          Done                This key is used to end editing.  If using the
                                Edit function, the movie is written to the li-
                                brary file.

Return Key  End Field Edit      Pressing this key will end editing in the cur-
                                rent field.  The cursor is moved to the next
                                field.

BS Key      Backspace           Moves the cursor to the left and erase the
                                character to the left.

------------------------------------------------------------------------------
                             ** EDIT MODE KEYS **    cont            Page 4
------------------------------------------------------------------------------
Del           Del Char            Deletes the character under the cursor.

Up Arrow      Field Up            Moves cursor to previous field.

Down Arrow    Field Down          Moves cursor to the next field.















------------------------------------------------------------------------------
                     **  SELECT TYPE OF REPORT LISTING **            Page 5
------------------------------------------------------------------------------
This screen allows you to (1) select one of four report types, (2) specify one
of three output devices for the report, (3) decide whether to list all of
the movies or just some of the movies in your file, and (4) decide how you
want your report sorted.
1.  Report Type:

   A.  Tape labels      Prints out titles, starting counter number and time of
                        movie on 3 1/2 by 15/16 inch or custom lables.  Four
                        titles may be printed on regular labels.

   B.  Small Report     Prints out a formatted report to the screen, printer
                        or a disk text file.  The report contains the follow-
                        ing data fields: Title, Star, Category, Year, Rating,
                        Tape#, Starting counter #, and Time.

   C.  Large Report     Prints a formatted report to the printer or a disk
                        text file.  The report contains the following data
                        fields: Title, Star, Co-star, Cast, Director, Cat-
                        egory, Year, Rating, Tape#, Starting counter #,
                        Time and Recording Speed.
------------------------------------------------------------------------------
                 **  SELECT TYPE OF REPORT LISTING **   cont         Page 6
------------------------------------------------------------------------------
   D.  Custom Report    You design this report.  You select the fields
                        and the length of the fields you want included in
                        your report.

2.  List To:

   A.  Screen           The report will be listed on your monitor screen.  The
                        large report cannot be listed to the screen.


   B.  Printer          The report will be listed to your printer.  All reports
                        can be listed to your printer.

   C.  Text File        If you select this item, you will be prompted for a
                        file name to store the listing on a disk file.  All
                        reports  can be listed to a text file.




------------------------------------------------------------------------------
                 **  SELECT TYPE OF REPORT LISTING **   cont         Page 7
------------------------------------------------------------------------------
3.  List:

   A.  All Movies      All movies in your library file will be listed to the
                       output device previously selected.

   B.  Some Movies     Only those movies that meet the selection criteria you
                       specify later on the MOVIE SELECTOR screen (Page 10)
                       will be listed to the output device selected.

4.  Sort By:

   A.  Title           Report will be listed sorted alphabetically by title.

   B.  Star            Report will be listed sorted alphabetically by the
                       star's last names.

   C.  Co-Star         Report will be listed sorted alphabetically by the
                       co-star's last names.


------------------------------------------------------------------------------
                 **  SELECT TYPE OF REPORT LISTING **   cont         Page 8
------------------------------------------------------------------------------

   D.  Director        Report will be listed sorted alphabetically by the
                       director's last names.

   E.  Tape #          Reported will be listed sorted alpha-numerically by
                       tape number.
*** Notes ***

1.  If you select (A) Tape labels for report type, you can only
    select (E) Tape # for sort by.

2.  The Large Report cannot be listed to the screen.

3.  Your selection for Sort By may be overridden if you have selected (B)
    List Some Movies.  If you selected List Some Movies, you will go to
    the MOVIE SELECTOR screen after completing the current screen.  If one
    of the fields you list to search on is a key field (ie  title, star, co-
    star, director or tape#), the first key field you list will become the
    default Sort By selection.  By doing this, the search of the library
    file is rapidly speeded up.
------------------------------------------------------------------------------
                 **  SELECT TYPE OF REPORT LISTING **   cont         Page 9
------------------------------------------------------------------------------
KEY         FUNCTION           COMMENT
------------------------------------------------------------------------------
E           Edit               Allows you to edit the selections you previous-
                               ly entered.

C          Continue            After you completed your selections this key
                               allows you to have your report listed or
                               will take you to the next screen if required.

Q          Quite               This key will return you to the main screen.

H          Help                Displays these help screens.








------------------------------------------------------------------------------
                             ** MOVIE SELECTOR **                    Page 10
------------------------------------------------------------------------------
The MOVIE SELECTOR screen is displayed if you choose just to display some
movies from the SELECT REPORT TYPE LISTING screen or if you choose to create
a Sub-File from the UTILITY screen.  The purpose of this screen is to allow
you to selectively choose the movies you want included in your report or
Sub-File.  Selections of the movies that you require from the library file
are made through entries in four fields.

1.  Field        Enter the field name on which you wish to restrict output.
                 In addition to the 15 field names displayed on the screen,
                 you may use three additional field names, STARF for the
                 star's first name, COSTARF for the co-stars first name,
                 and DIRECF for the director's first name.  Using the field
                 names STAR, COSTAR and DIRECTOR are for their last names.

2.  Comparator  Requires entry of one of the comparators listed in the
                screen window.

3.  LogOp       Requires entry of one of the logical operators (and -- or).
                The word END is type in this field if the column is not
                filled, to end data entry on the screen.
----------------------------------------------------------------------------
                         ** MOVIE SELECTOR **  cont                  Page 11
----------------------------------------------------------------------------
4.  Value       Enter a constant against which you want the comparison made.

** Examples **

LogOp     Field        Comparator       Value
___________________________________________________________________________
          YEAR         GE               1985
AND       RATING       EQ               PG
AND       TIME         LE               100
END
   This example would select those movies in your library file that were made
on or after 1985, that were rated PG and had a running time of 100 min or less.

          STAR         EQ               EASTWOOD
OR        STAR         EQ               REYNOLDS
AND       CATEGORY     EQ               A
   This example would select those movies in your library file that starred
either Eastwood, or Reynolds that were in the Action category.


------------------------------------------------------------------------------
                            ** REPORT FORMATTER **                   Page  12
------------------------------------------------------------------------------
This screen allows you to select the fields you want included in your report.
You select the fields to include, the width you want the field to occupy and
select whether to truncate or wrap a field if the actual field width exceeds
the width you selected.  The screen displays five fields, three of which re-
quire you to make entries.  Two of the fields display information only and
cannot be edited.

Print Field       Enter the field you want printed in this field.

Field Width       Display only field, shows the width the field occupies in
                  the library file.

Print Width       Enter the width in characters, you want the field to occupy.
                  The minimum is six.

Wrap (Y/N)        Yes - if the field width of the field to be printed is
                  greater than the print width you selected, then the remain-
                  ing characters will be printed on the next line -- if No
                  the remaining characters will be truncated.
                  See Example on the next page.
------------------------------------------------------------------------------
                          ** REPORT FORMATTER **   cont              Page  13
------------------------------------------------------------------------------
** Wrap Example **

1. You enter TITLE for Print Field.
2. The screen would display 40 for Field Width.
3. You enter 20 for Print Width.
4. You enter Y for Wrap.

The movie title ' Star Trek III: The Search For Spock ' would print out as
follows with 'Y 'for Wrap:

Star Trek III: The
Search For Spock

If 'N' was entered for WRAP the title would be truncated as follows:

Star Trek III: The




------------------------------------------------------------------------------
                           ** UTILITY MENU **                        Page 14
------------------------------------------------------------------------------
Key      Function           Comment

D        Set Date           Sets the system date. The date you enter will be
                            displayed on the main screen.

T        Set Time           Sets the system time.  The time you enter will be
                            displayed on the main screen.

M        Merge Files        This function will enter the movies from a file
                            previously created by Video Librarian into the
                            current movie library file.

C        Create Sub-File    This function will create a fully functional sub-
                            file of the currently selected file.  After this
                            function is selected you will be sent to the
                            MOVIE SELECTOR screen where you will set up the
                            selection criteria for the movies to be included
                            in the new file.


------------------------------------------------------------------------------

```
{% endraw %}

## MSELHLP.TXT

{% raw %}
```
                             ** MOVIE SELECTOR **                    Page  1
------------------------------------------------------------------------------
The MOVIE SELECTOR screen is displayed if you choose to just display some
movies from the SELECT REPORT TYPE LISTING screen or if you choose to create
a Sub-File from the UTILITY screen.  The purpose of this screen is to allow
you to selectively choose the movies you want included in your report or
Sub-File.  Selections of the movies that you require from the library file
are made through entries in four fields.

1.  Field        Enter the field name on which you wish to restrict output.
                 In addition to the 15 field names displayed on the screen,
                 you may use three additional field names, STARF for the
                 star's first name, COSTARF for the co-stars first name,
                 and DIRECF for the director's first name.  Using the field
                 names STAR, COSTAR and DIRECTOR is for their last names.

2.  Comparator  Requires entry of one of the comparators listed in the
                screen window.

3.  LogOp       Requires entry of one of the logical operators (and -- or).
                The word END is type in this field if the column is not
                filled, to end data entry on the screen.
----------------------------------------------------------------------------
                         ** MOVIE SELECTOR **  cont                  Page 2
----------------------------------------------------------------------------
4.  Value       Enter a constant against which you want the comparison made.

** Examples **

LogOp     Field        Comparator       Value
____________________________________________________________________________
          YEAR         GE               1985
AND       RATING       EQ               PG
AND       TIME         LE               100
END
   This example would select those movies in your library file that were made
in or after 1985, that were rated PG and had a running time of 100 min or less.

          STAR         EQ               EASTWOOD
OR        STAR         EQ               REYNOLDS
AND       CATEGORY     EQ               A
   This example would select those movies in your library file that starred
either Eastwood, or Reynolds that were in the Action category.


------------------------------------------------------------------------------
```
{% endraw %}

## RSELHLP.TXT

{% raw %}
```
                            ** REPORT FORMATTER **                   Page  1
------------------------------------------------------------------------------
This screen allows you to select the fields you want included in your report.
You select the fields to include, the width you want the field to occupy and
select whether to truncate or wrap a field if the actual field width exceeds
the width you selected.  The screen displays five fields, three of which re-
quire you to make entries.  Two of the fields display information only and
cannot be edited.

Print Field       Enter the field you want printed in this field.

Field Width       Display only field, shows the width the field occupies in
                  the library file.

Print Width       Enter the width in characters, you want the field to occupy.
                  The minimum is six.

Wrap (Y/N)        Yes - if the field width of the field to be printed is
                  greater than the print width you selected, then the remain-
                  ing characters will be printed on the next line -- if No
                  the remaining characters will be truncated.
                  See Example on the next page.
------------------------------------------------------------------------------
                          ** REPORT FORMATTER **   cont              Page  2
------------------------------------------------------------------------------
** Wrap Example **

1. You enter TITLE for Print Field.
2. The screen would display 40 for Field Width.
3. You enter 20 for Print Width.
4. You enter Y for Wrap.

The movie title ' Star Trek III: The Search For Spock ' would print out as
follows with 'Y 'for Wrap:

Star Trek III: The
Search For Spock

If 'N' was entered for WRAP the title would be truncated as follows:

Star Trek III: The




------------------------------------------------------------------------------
```
{% endraw %}

## SELHLP.TXT

{% raw %}
```
                     **  SELECT TYPE OF REPORT LISTING **            Page 1
------------------------------------------------------------------------------
This screen allows you to (1) select one of four report types, (2) specify one
of three output devices for the report, (3) decide whether to list all of
the movies or just some of the movies in your file, and (4) decide how you
want your report sorted.
1.  Report Type:

   A.  Tape labels      Prints out titles, starting counter number and time of
                        movie on regular 3 1/2 by 15/16 inch or custom labels.
                        Up to four titles may be printed on each regular label.

   B.  Small Report     Prints out a formatted report to the screen, printer
                        or a disk text file.  The report contains the follow-
                        ing data fields: Title, Star, Category, Year, Rating,
                        Tape#, Starting counter #, and Time.

   C.  Large Report     Prints a formatted report to the printer or a disk
                        text file.  The report contains the following data
                        fields: Title, Star, Co-star, Cast, Director, Cat-
                        egory, Year, Rating, Tape#, Starting counter #,
                        Time and Recording Speed.
------------------------------------------------------------------------------
                 **  SELECT TYPE OF REPORT LISTING **   cont         Page 2
------------------------------------------------------------------------------
   D.  Custom Report    You design this report.  You will select from another
                        screen the fields and the length of the fields you
                        want included in your report.

2.  List To:

   A.  Screen           The report will be listed on your monitor screen.  The
                        large report can not be listed to the screen.


   B.  Printer          The report will be listed to your printer.  All reports
                        can be listed to your printer.

   C.  Text File        If you select this item, you will be prompted for a
                        file name to store the listing on a disk file.  All
                        reports to a text file.




------------------------------------------------------------------------------
                 **  SELECT TYPE OF REPORT LISTING **   cont         Page 3
------------------------------------------------------------------------------
3.  List:

   A.  All Movies      All movies in your library file will be listed to the
                       output device previously selected.

   B.  Some Movies     Only those movies that meet the selection criteria you
                       specify later on the MOVIE SELECTOR screen will be
                       listed to the output device selected.

4.  Sort By:

   A.  Title           Report will be listed sorted alphabetically by title.

   B.  Star            Report will be listed sorted alphabetically by the
                       star's last names.

   C.  Co-Star         Report will be listed sorted alphabetically by the
                       co-star's last names.


------------------------------------------------------------------------------
                 **  SELECT TYPE OF REPORT LISTING **   cont         Page 4
------------------------------------------------------------------------------

   D.  Director        Report will be listed sorted alphabetically by the
                       director's last names.

   E.  Tape #          Reported will be listed sorted alpha-numerically by
                       tape number.
*** Notes ***

1.  If you select (A) Tape labels for report type, you will only be allowed to
    select  (E) Tape # for sort by.

2.  The Large Report cannot be listed to the screen.

3.  Your selection for Sort By may be overridden if you have selected (B)
    List Some Movies.  If you selected List Some Movies, you will go to
    the MOVIE SELECTOR screen after completing the current screen.  If one
    of the fields you list to search on is a key field (ie  title, star, co-
    star, director or tape#), the first key field you list will become the
    default Sort By selection.  By doing this, the search of the library
    file is rapidly speeded up.
------------------------------------------------------------------------------
                 **  SELECT TYPE OF REPORT LISTING **   cont         Page 5
------------------------------------------------------------------------------
KEY         FUNCTION           COMMENT
------------------------------------------------------------------------------
E           Edit               Allows you to edit the selections you previous-
                               ly entered.

C          Continue            After you completed your selections this key
                               allows you to have your report listed or
                               will take you to the next screen if required.

Q          Quite               This key will return you to the main screen.

H          Help                Displays these help screens.








------------------------------------------------------------------------------
```
{% endraw %}

## VLB.TXT

{% raw %}
```






************************************************************
*                                                          *
*                                                          *
*                     VIDEO LIBRARIAN                      *
*                         Version                          *
*                           2.12                           *
*                                                          *
*                                                          *
*                            by                            *
*                                                          *  
*                      Lemuel D. Turner                    *
*                       TurboSystemsCo                     *
*                        P.O. Box 165                      *
*                     Roy, Ut. 84067-0165                  *
*                                                          *
************************************************************

              _______
         ____|__     |               (tm)
      --|       |    |-------------------
        |   ____|__  |  Association of
        |  |       |_|  Shareware
        |__|   o   |    Professionals
      -----|   |   |---------------------
           |___|___|    MEMBER

#13
                        LICENSE AGREEMENT
                     VIDEO LIBRARIAN PROGRAM

(C) Copyright 1986, 1987, 1988, 1989 Lemuel D. Turner and
TurboSystemsCo for this software, documentation, and user
interface.
Roy, Ut., United States of America. All rights reserved.

TurboSystemsCo grants you without charge the right to reproduce,
distribute and use copies of this "shareware" version of our
VIDEO LIBRARIAN software product (including the on disk
documentation), on the express condition that you do not receive
any payment, commercial benefit, other consideration for such
reproduction or distribution, or change this license agreement or
copyright notice.

The rights to receive any such financial or other benefit, and to
modify the product or its components, are reserved exclusively by
TurboSystemsCo and Lemuel D. Turner.

Support from users enables us to develop additional features and,
future versions of the VIDEO LIBRARIAN product.  Your payment of
$25.00 would be greatly appreciated; send your payment to:

                        TurboSystemsCo
                         P.O. Box 165       
                     Roy, Ut. 84067-0165  

By sending in your payment, along with your name, mailing address
version number, and where you heard about the VIDEO LIBRARIAN
product and obtained your copy, your copy of VIDEO LIBRARIAN will
be registered with us.  This will enable you to receive (1) tech-
nical support, (2) announcements of future releases, the latest
version and printed manual.  Feel free to contribute your ideas
regarding desired new features and functionality.



THIS PRODUCT IS LICENSED WITHOUT ANY WARRANTY OF MERCHANTABILITY,
FITNESS OF PARTICULAR PURPOSE, PERFORMANCE, OR OTHERWISE; ALL
WARRANTIES ARE DISCLAIMED. BY USING THE VIDEO LIBRARIAN PRODUCT,
YOU AGREE THAT NEITHER TurboSystemsCo NOR ANY OF OUR EMPLOYEES,
AFFILIATES, OWNERS, OR OTHER RELATED PARTIES WILL BE LIABLE TO
YOU OR ANY THIRD PARTY FOR ANY USE OF (OR INABILITY TO USE) THIS
SOFTWARE, OR FOR ANY DAMAGES WHATSOEVER. EVEN IF WE ARE APPRISED
OF POSSIBILITY OF SUCH DAMAGES OCCURRING.

This software may not be reversed-engineered or disassembled,
and includes certain trade secrets and confidential information
of TurboSystemsCo.


VIDEO LIBRARIAN is a trademark of TurboSystemsCo.
#13
           -------------------------------------------
            VIDEO LIBRARIAN Registration Payment Form
           -------------------------------------------

To order VIDEO LIBRARIAN, please fill out the form below:

                                              Date: _____________

Name: _____________________________  Title:   ___________________

Company: ________________________________________________________

Address: ________________________________________________________

_________________________________________________________________

City: ___________________________________________________________

State/Country: ________________________ Zip: ____________________

Phone  Work: (_____) _____ - ______  Home: (_____) _____ - ______

Source of Your Copy : ___________________________________________

Method of payment: Please complete the worksheet below and choose
one of the payment options indicated. Utah residents
must add sales tax. ALL CHECKS AND MONEY ORDERS MUST BE DRAWN ON
U.S. ACCOUNTS ONLY.
+----------+------------------------------+----------+----------+
|          |                              |   Cost   |   Total  |
| Quantity |          Description         | per unit |   Cost   |
+==========+==============================+==========+==========+
|          |                              |          |          |
|          |       VIDEO LIBRARIAN        |  $25.00  |          |
|          |                              |          |          |
+==========+=+============================+==========+==========+
             |          Utah residents add sales tax |          |
             +---------------------------------------+----------+
             | Shipping Cost if Overseas, add $ 5.00 |          |
             +---------------------------------------+==========+
                                               TOTAL |          |
Please indicate diskette format:  [ ] 5.25           +==========+
                                  [ ] 3.5

[ ] Check with order  [ ] Money Order

*****************************************************************
Send all items to:     TurboSystemsCo
                       VLB Order Department
                       P.O. Box 165                
                       Roy, Ut. 84067-0165 USA    
*****************************************************************
#13
                         --------------
                          COMMENT FORM
                         --------------

Your comments about this software and documentation are welcome.
Please take the time to fill out this form and return it with
comments.

Name: _____________________________  Title:   __________________

Company: _______________________________________________________

Address: _______________________________________________________

 ________________________________________________________________

City: __________________________________________________________

State/Country: ________________________ Zip: ___________________

Phone Work: (_____) _____ - ______  Home: (_____) _____ - ______

VIDEO LIBRARIAN Ver No.: _____________  Date: __________________


________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________


*****************************************************************
Send this form to:     TurboSystemsCo
                       VLB Comments
                       P.O. Box 165                 
                       Roy, Ut. 84067-0165    
*****************************************************************
#13








                     TABLE OF CONTENTS


INTRODUCTION .........................................       1

MAKE A BACKUP ........................................       2

INSTALLATION .........................................       4

START UP .............................................       7

MAIN SCREEN ..........................................       9

THE FIND FUNCTION ....................................      14

SEARCHING ............................................      18

REPORTS ..............................................      23

UTILITIES ............................................      27

VIDEO FIX ............................................      29

TAPE LABELS ..........................................      31  

CUSTOMER SUPPORT .....................................      32
#13
                        INTRODUCTION


VIDEO LIBRARIAN is a fast easy to learn and use database manager
that will help organize and keep track of your video library.
With this program you can quickly search your video library files
and print reports to the screen, printer or a disk text file. The
program will also print labels to place on your VCR tapes for easy
identification.

FEATURES

- Holds 18 Information Fields About Each Title
   -- Title, Star(first & last name), Co-star(first & last name),
      Cast, Rating, Director(first & last name), Company, Year,
      Comments, Tape#, Starting and Stop Counter, Recording
      Speed and Time

- Database Management Functions. Fourteen from Main Screen
  -- Next, Prev, Find, Top, Last, Edit, Add, Del, Search,
     Report, Change Files, Utilities, Help, Quit
  -- Four types of reports may be printed to screen, printer
     or disk text file.  Features two fixed format and one
     user designed report, also prints labels for casssettes.

 -- Tape labels can be printed on regular 3 1/2 by 15/16 labels
    or on special labels designed to fit the top and spine of
    VHS and BETA cassettes.

- Quickly create fully functional sub-files.

- Merge files previously created.

- Find any Title, Star, Co-Star, Director or Tape# in less than
  one second.

       
SYSTEM REQUIREMENTS

To use VIDEO LIBRARIAN you will require:

           IBM PC/XT/AT PS/2 or Compatible.

           At least 320k of memory and one floppy disk drive.

           A color or monochrome display.

           Printer (capable of print in compressed mode to use all
           the features of the program).

           MS-DOS/PC-DOS 2.0 or higher.
#13
                 BACKING UP YOUR PROGRAM DISK

MAKE A BACKUP COPY

Now that you have your VIDEO LIBRARIAN program, the first thing
to do is make a backup copy.  For your convenience Video Librar-
ian is not copy protected and can be used with a hard disk.  The
first thing you should do with your VIDEO LIBRARIAN master disk
is to make a backup to another floppy disk or to your hard disk,
or both.  You may utilize the DOS commands DISKCOPY or COPY to
backup your master disk.





BACKUP WITH A DUAL FLOPPY DISK SYSTEM

After booting your system with the DOS master disk, place a blank
disk in drive B:

Enter the DOS command:


                          DISKCOPY A: B:


Place your VIDEO LIBRARIAN master disk in Drive A, press RETURN
and all of your VIDEO LIBRARIAN files will be copied to the new
disk in Drive B.  Remove the VIDEO LIBRARIAN master disk from
Drive A and store in a safe place.





BACKUP WITH A SINGLE FLOPPY SYSTEM


After booting your system with the DOS master disk:

Enter the DOS command:


                          DISKCOPY A: A:


Follow the on screen prompts, when the copy process is complete,
place the VIDEO LIBRARIAN master disk in a safe place.
#13
BACKUP WITH A HARD DISK SYSTEM

We suggest you set a directory specifically for the use of the
VIDEO LIBRARIAN.  From the "root" directory:

Enter the DOS command:

                       MD\VLB

Next set the default to the new sub-directory by entering the DOS
command:
                       CD\VLB

With your VIDEO LIBRARIAN master disk in drive A: enter the DOS
command:

                       COPY A:\ *.*

The VIDEO LIBRARIAN files will be copied to your hard disk and
are now ready for use.  Place the VIDEO LIBRARIAN master disk in
a safe place.



VIDEO LIBRARIAN DISK FILES

VIDEO LIBRARIAN is distributed on one disk.  Check your backup
copy to insure that the following files are on your backup disk:


SBMIO.COM ..........:  Memory resident B-Tree ISAM routines.

VIDEO.EXE ..........:  The main VIDEO LIBRARIAN program.

SBM.SYS ............:  File containing the system default set-up.

PRTCODES.DEF .......:  File containing printer set-up codes.

VLBINST.COM ........:  Program allows installation of keyboard,
                       colors for the input fields and printer
                       codes.

MAINHELP.TXT
SELHLP.TXT
RSELHLP.TXT
MSELHLP.TXT ........:  Files containing help information.

MARK.COM 
RELEASE.COM ........:  Programs to release memory back to the 
                       system when Video Librarian is exited. 

VLB.BAT .............: A batch file that starts up Video
                       Librarian.
#13
                  INSTALLING VIDEO LIBRARIAN 

If your system consists of an IBM PC/XT/AT PS/2 or compatible
computer with a color card installed and an Epson MX printer or
Epson code compatible printer, then you will not need to run the
Installation program VLBINST.COM.

If your system differs from the default system listed above, then
you will need to run VLBINST.COM.  To run VLBINST.COM, you must be
at the operating system prompt level, A> for a floppy system and
C> for a hard disk system.

With the VIDEO LIBRARIAN disk in drive A: for a floppy base systems
and in the VIDEO LIBRARIAN directory for hard disk systems, type
the following command to invoke the installation program:



VLBINST (press RETURN)


A menu will display the following three installation options:

          1.  Install Non IBM PC Keyboard
          2.  Install Printer Escape Codes
          3.  Install VDU, Colors & Date Type


KEYBOARD INSTALLATION

THIS MODULE SHOULD ONLY BE USED IF YOUR KEYBOARD IS NOT IBM
COMPATIBLE.  IF YOU HAVE AN IBM PC/XT/AT TYPE KEYBOARD, DO NOT USE
THIS MODULE AS VIDEO LIBRARIAN COMES PRE-INSTALLED FOR IBM AND IBM
COMPATIBLE COMPUTERS.

This module allows the editing keys such as the cursor arrow keys
and some function keys to be re-assigned.  The defaults are:


Arrow keys for cursor movement
    F1 -  Abort edit and ignore any changes
    F5 -  Clear current field
    F9 -  Edit done


Note, if a new key code is assigned to any of the above, the
default keycode will still remain active for the function also.

The install module will show the current keycode in brackets.
Press the new key to be defined or press the RETURN key to accept
the current keycode.
#13
PRINTER INSTALLATION

The printer control codes for NORMAL PRINT and COMPRESSED PRINT
are defined in this module.  Your printer must be able to print
in COMPRESSED PRINT to print tape labels and some reports.

The printer control strings may be entered as ASCII characters
and/or decimal codes preceded by a # character and delimited by
a ; character eg:


          PRINTER CONTROL STRING           YOU MAY TYPE

             ESC $ 1 6 M                   #27;$16M  or
                                           #27,36,49,54,77;
             CTRL Q                        #15;
             ESC Q                         #27;Q



Refer to your printer manual, usually in a section called Printer
Installation Codes, or Escape Sequences, to determine the control
strings which are required to install your printer.

The printer installation module will write a file to your disk or
diskette called PRTCODES.DEF.


MONITOR TYPE AND COLOR SELECTION

The COLORS FOR PROMPTS, and INPUT FIELDS may be selected in this
module, however we suggest you accept the default codes initial-
ly.   You may experiment with different color combinations at a
later stage.

When the SYSTEM BUILDER COLOR/ATTRIBUTE & DATE INSTALLATION screen
is displayed:

If you have a color monitor just select the background, intensity
and foreground colors.

NOTE:  Many computers such as an AT&T or COMPAQ and many
compatible may not display colors on the screen but come with a
color card installed.  They should be installed as color
computers.  They will display both foreground and background
colors in different intensity shadings.

If you keep getting the Video Type Mismatch Error when you run
VIDEO LIBRARIAN and you have installed your computer as a MONO,
go back and install as a color computer.
#13
The monochrome video board recognizes a subrange of video codes.
They are:
                      WLN - Reverse Video
                      NHW - High Intensity Video
                      NLW - Low Intensity Video
                      NHB - High Intensity Video
                      NLB - Low Intensity Video

Suggested combinations will be displayed on the installation
screen.

*WARNING* Do not select NLN or NHN.  If you do, your cursor will
disappear.

After you entered your video codes, you will be prompted to se-
lect your video adapter type.  Enter M for monochrome or C for
color.

Enter R or D at the next prompt.  Use D which updates the screen
faster, however if there is significant screen flicker use R
which will eliminate the flicker.

For the next prompt, select the USA format.
#13
                         START UP

Use the following procedures for your system to enter VIDEO
LIBRARIAN:

SINGLE FLOPPY SYSTEMS:

First you need a blank formatted data disk to hold your files.
You will copy two files from your VIDEO LIBRARIAN program disk
to your data disk.  Place your VIDEO LIBRARIAN program disk into
drive A.  At the A> prompt type:

              COPY PRTCODES.DEF A:

Follow the on screen prompts; when the file copy is complete,
place the VIDEO LIBRARIAN program disk back in drive a. Type:

              COPY VLB.BAT A:

If you require access to the on screen help text, you will need
to copy the help files to your data disk.  With the VIDEO
LIBRARIAN program disk in drive A; Type:

              COPY *.TXT A:

Placing the help files on your data disk will reduce the amount
of storage space available.  You will find VIDEO LIBRARIAN so
easy to use that you'll find you don't need the help files.

To enter VIDEO LIBRARIAN, (1) boot your system with DOS, (2)
place your VIDEO LIBRARIAN program in drive A:, (3) at the A >
prompt, type VLB and press RETURN -- the program will load and
the title screen will be displayed.

Enter A for your data disk drive, then remove the VIDEO LIBRARIAN
program disk and place your data disk in drive A.  The data files
will be initialize and the data entry screen displayed.

DUAL FLOPPY SYSTEM START UP

You need your working copy of VIDEO LIBRARIAN and a blank
formatted disk.  To enter VIDEO LIBRARIAN, (1) boot your system
with your DOS disk, (2) place your working copy of VIDEO LIBRARIAN
in drive A, and your blank formatted disk in drive B:, (3) at the
A> prompt type VLB and press the RETURN/ENTER key and the title
screen will be displayed (see figure 3.1). ** Figure 3.1** not
shown in this "shareware" manual**.  At the bottom of the title
screen the following prompt will be displayed:

Enter Drive For Data File (A - Z)

Enter B, the data files will be initialized and the data entry
screen will be displayed.
#13
HARD DISK SYSTEM

To enter VIDEO LIBRARIAN, (1) boot your system, (2) at the C>
prompt type CD\VLB or whatever subdirectory name you used to copy
the VIDEO LIBRARIAN master disk files to. (3) Type VLB and press
the ENTER/RETURN key and the title screen will be displayed (see
figure 3.1). ** Figure 3.1 not shown in this "shareware" manual**
At the bottom of the title screen the following prompt will
be displayed:

Enter Drive For Data File (A - Z)

Enter the appropriate drive, the files will be initiali and the
data entry screen will be displayed.
#13
                      THE MAIN SCREEN


After the Title Screen is displayed VIDEO LIBRARIAN will display
the Main Screen.  The Main Screen contains 18 data entry fields
to store information about your video movies,  see Figure 4-1
below:  ** Figure 4-1 not shown in this shareware manual**.

Looking at the data entry screen figure 4.1, you will see that the
screen consists of a Status Line (top line on screen) the data
entry fields, and the Command Line (bottom line on the screen).

When the Status Line displays Command Mode as shown in figure 4.1,
you may use any of the commands displayed on the Command Line by
pressing the highlighted letter of the command.  When you enter
one of the following commands: Add, or Edit then the Status Line
will display:

Edit mode: OVERTYPE/INSERT.  F1:ABORT, F5:Clr Eol, F9:Edit Done,
INS: Ins On/Off



The Edit Mode definitions will be explained in a later section.


TOP SECTION

The top section of the data entry screen displays several
informational fields.  Two fields, Size and Used show the record
size of the file and the number of movie records used.  Before you
add movie titles to the file, both will show 0 and as you add a
movie title each is increased by one.  However, when you delete
a movie title, Size remains the same and Used decreases by one.
For example you have added 20 movie titles to your file, Size and
Used will both show 20.  If you delete 2 titles, then Size will
still show 20 and Used will show 18.  When you add titles again
to the file, VIDEO LIBRARIAN will use the space allocated for the
deleted titles before increasing the file size.

File shows the current file that VIDEO LIBRARIAN is working with.
When you first start up VIDEO LIBRARIAN, the file will always be
VIDEO.  You can switch to,  or create a new file by using the
Chfile function on the command line.  This function will be
explained in a later section.  The DOS date and time are also
displayed in the top section of the data entry screen.  The date
and time can be changed by the Utility function which is explained
later.
#13
COMMAND LINE DEFINITIONS

The Command Line provides the VIDEO LIBRARIAN data entry screen
with a selection of database maintenance functions that can be
accessed with one key stroke.

KEY          FUNCTION

Next         Displays the next Title in alphabetical order.

Prev         Displays the previous Title in alphabetical order.

Find         Use this feature to rapidly find any Title, Star,
             Co-Star, Director or Tape #.

Top          Display the first movie in Title index order.

Last         Display the last movie in Title index order.

Edit         Edit the movie currently displayed on the screen.

Add          Add a new movie to the library file.

Del          To delete the movie displayed on the screen.

Srch         Allows you to search the library file, using up to
             8 selection criteria.  Matches are displayed on the
             main screen.

Report       Switches you to the Select Report Type screen.

Chfile       Switches you from the currently selected file to
             another file.  If the file name you requests exits,
             then you will be asked if you want to open the file.
             If you respond yes, then the current file is closed
             and the new file is opened.  If you respond no, then
             the current file remains in use.  If the file name
             you specify does not exits, you will be asked if you
             want to create the file.  If you respond yes, the
             file will be created and you can start adding movie
             titles to the file.  If you respond no, then the
             current file remains in use.

Util         Displays the utility menu.  From this menu, you can
             set the date, time, merge files or create sub-files.

Help         Displays the help screens.

Quit         Ends the VIDEO LIBRARIAN program and returns you to
             the DOS prompt.
          #13
STATUS LINE FUNCTION/EDIT KEYS

The status line function/edit keys are in effect when you are
using the Add or Edit functions on the main screen or entering
data on any other screen.


KEY           FUNCTION                  OPERATION
---        --------------   -------------------------------------

F1         Abort Edit/Add   This key may be used to abort the Edit
                            or Add functions.  The movie files will
                            not be updated.  Also, used to abort
                            most operations requiring input.

F5         Delete Field     The field is deleted from the cursor
                            position to the end of the field and
                            the cursor is placed at the left
                            margin of the field.

F9         Done Edit/Add    This key is used to end editing.  The
                            movie data is written to the data file.

RETURN     End Field Edit   This key will end editing in the
                            current field. The cursor is moved to
                            the next field.

BACKSPACE  Backspace        This key will cause the cursor to move
                            left and erase the character to the
                            left.

INS        Insert/Toggle    This key will toggle between insert and
                            overwrite.

DEL        Delete Char      The character under the cursor is
                            deleted.

UP ARROW   Field Up         Moves cursor to the previous field.

DOWN ARROW Field Down       Moves cursor to the next field.

LEFT ARROW Cursor Left      Moves cursor to the left.

RGT ARROW  Cursor Right     Moves cursor to the right.
#13
INFORMATION FIELDS

Each of the movies in the data file contains the following
information fields.

FIELD       WIDTH                  CONTENTS
-----       -----  ---------------------------------------------

Title        40   Enter title of the movie in this field.  The
                  main index field.

Rating       04   Enter the MPAA rating of the film, ie, G, PG,
                  PG13, R, X, NR, ect.

Star(first)  12   Enter the star's first name in this field.

Star(last)   12   Enter the star's last name in this field.  This
                  is an indexed field which allows rapid searches
                  of the data file by the star's last name.

Costar(first)12   Enter the costar's first name in this field.

Costar(last) 12   Enter the costar's last name in this field.
                  This is an indexed field which allows rapid
                  searches of the data file by the costar's last
                  name.

Cast         30   This field holds the names of the remaining
                  cast members.

Dir(first)   08   Enter the director's first name in this field.

Dir(last)    12   Enter the director's last name in this field.
                  This is an indexed field which allows rapid
                  searches of the data file by the director's
                  last name.

Company      02   This field will hold a two letter abbreviation
                  for the name of the company that made or
                  distributed the movie.  For example: Warner - WR;
                  Paramount - PR;  CBS/FOX - CF.

Category     01   Holds a one letter abbreviation for the general
                  type of movie.  Examples: Comedy - C;
                  Action/Adventure - A;  Drama - D; Mystery - M;
                  Suspense - S;  Children - H;  Adult - X; ect.

Year         04   Holds the year the movie was copyrighted or
                  released.

Comments     64   Used to store any additional information about
                  the movie.
#13
FIELD       WIDTH                  CONTENTS
-----       -----  ---------------------------------------------

Tape#        04   Stores a number to identify a VCR cassette tape.
                  Numbering examples: (1) straight number system
                  ie first cassette tape 0001 up to 9999; (2)
                  combination of letters and numbers, ie your
                  comedy cassettes could be numbered C001 to C999.

Start        04   This field holds the VCR counter number where
                  the title begins.

Stop         04   Holds the VCR counter number where the title
                  ends.

RecSpeed     01   Holds a number representing the speed the movie
                  was recorded, ie 1 = 1 hr; 2 = 2hr; 6 = 6hr.

Time         03   Holds the length of the movie in minutes.
#13
                        The Find Function


The Find Key enables you to RAPIDLY find a movie by TITLE,
STAR(last name), COSTAR(last name),  DIRECTOR(last name) or TAPE
NUMBER.  When you select Find by pressing F the following prompt
will be displayed:

   Find -- Title, Star, Costar, TapeNo, Director: F1 = Abort

Press the highlighted key of the index key field you wish to find,
or press F1(abort) and return to the main menu selections.

If you press T for TITLE, the following prompt will be displayed:

              Enter Title To Find or  RETURN  For All

A similar prompt is displayed for the four additional key fields
if they are selected.  The prompt above allows you to specify a
string to search for, or just press RETURN.  If you press the
RETURN Key, then all movies for the index key selected will be
listed to the Find Display Screen.

If a search string is specified then all movies that have a string
in which the specified string is matched, (beginning at the first
character) will be listed to the Find Display Screen.

If you select Title and enter S for the search string, then all
movies beginning with S would be displayed on the Find Display
Screen.

Movies that match the search string are listed 20 at a time on the
Find Display Screen (unless there are fewer than 20 matches).
After each screen of matches is displayed, you will be: (1)
prompted to view more of the listing by pressing RETURN if there
are more matches than can be displayed on one screen or (2) quit
the screen and return to the Main Screen or (3) select a specific
movie to display on the Main Screen by entering the number of the
associated movie from the left of the Find Display Screen.  If no
match is found,  the following prompt is displayed on the screen:


             Key Not Found !!! (Press Any Key)


EXAMPLES

On the following pages are several examples of using the Find
Function.  In each example the following information is provided,
(1) the index field selected and (2) the search string.
#13
Example 1
  Index Field:    Title
  Search String:  Star

  Find Display Screen
+----------------------------------------------------------------+
| Edit mode : OVERTYPE.                                         
|
| No.  MOVIE TITLE                            Star              
|
+----------------------------------------------------------------+
| 1    Star Trek II: The Wrath of Kahn        Shatner, William  
|
| 2    Star Trek III: The Search For Spock    Shatner, William  
|
| 3    Star Trek: The Motion Picture          Shatner, William  
|
| 4    Star Wars                              Hamil, Mark       
|
| 5    Star80                                 Hemingway, Mariel 
|
| 6    Stardust Memories                      Allen, Woody      
|
| 7    Starman                                Bridges, Jeff     
|
|                                                               
|
|                                                               
|
|                                                               
|
| Enter: <Q>-Quit or Select Number >                            
|
+----------------------------------------------------------------+

Selecting any of the numbers on the left will display the
associated movie on the Main Screen instantaneously.





Example 2
  Index Field:     Star
  Search String:   Pryor

  Find Display Screen
+----------------------------------------------------------------+
| Edit mode : OVERTYPE.                                         
|
| No.  Star                 Movie Title                         
|
+----------------------------------------------------------------+
| 1    Pryor, Richard       Bustin' Loose                       
|
| 2    Pryor, Richard       Silver Streak                       
|
| 3    Pryor, Richard       Some Kind  Of Hero                  
|
| 4    Pryor, Richard       Stir Crazy                          
|
| 5    Pryor, Richard       Toy, The                            
|
| 6    Pryor, Richard       Which Way Is Up                     
|
| 7    Pryor, Richard       Blue Collar                         
|
| 8    Pryor, Richard       Brewsters Millions                  
|
| 9    Pryor, Richard       Jo Jo Dancer, Your Life Is Calling  
|
|                                                               
|
| Enter: <Q>-Quit or Select Number >                            
|
+----------------------------------------------------------------+
#13
Example 3
  Index Field:     Title
  Search String:   B
  Find Display Screen
+----------------------------------------------------------------+
| Edit mode : OVERTYPE.                                         
|
| No.  Movie Title                             Star             
|
+----------------------------------------------------------------+
| 1    Bachelor Party                          Hanks, Tom       
|
| 2    Back To School                          Dangerfield,Rodney|
| 3    Back To The Future                      Fox, Michael     
|
| 4    Bad News Bears, The                     O'Neal, Tatum    
|
| 5    Blazing Saddles                         Little, Clevon   
|
| 6    Bed Time For Bonzo                      Reagan, Ronald   
|
| 7    Berlin Express                          Oberon, Merle    
|
| 8    Best Defense                            Moore, Dudley    
|
| 9    Best Friends                            Hawn, Goldie     
|
| 10   Best Little Whorehouse In Texas, The    Reynolds, Burt   
|
| 11   Betrayal                                Irons, Jeremy    
|
| 12   Beverly Hills Cop                       Murphy, Eddie    
|
| 13   Beyond The Limit                        Caine, Michael   
|
| 14   Big Bad Mama                            Dickerson, Angie 
|
| 15   Big Chill                               Kline, Kevin     
|
| 16   Big Red One, The                        Marvin, Lee      
|
| 17   Big Sleep, The                          Bogart, Humphrey 
|
| 18   Billy Jack                              Laughlin, Tom    
|
| 19   Birds, The                              Hedren, Teppi    
|
| 20   Bitch, The                              Collins, Joan    
|
|                                                               
|
| Enter: <Q>-Quit, RETURN for Next Screen or Select Number >    
|
+----------------------------------------------------------------+
In example 3, there are more than 20 movies that match the search
string.  In this situation, you can: (1) enter Q and return to the
Main Screen or (2) enter one of the numbers on the left and
display the movie on the Main Screen or (3) press RETURN and list
the additional movies that match the search string.

Example 4
  Index Field:     CoStar
  Search String:   Garr

  Find Display Screen
+----------------------------------------------------------------+
| Edit mode : OVERTYPE.                                         
|
| No.  CoStar               Movie Title                         
|
+----------------------------------------------------------------+
| 1    Garr, Teri           Mr. Mom                             
|
| 2    Garr, Teri           Tootsie                             
|
| 3    Garr, Teri           Close Encounters of The Third Kind  
|
|                                                               
|
| Enter: <Q>-Quit or Select Number >                            
|
+----------------------------------------------------------------+
#13
Example 5
  Index Field:     Tape#
  Search String:   0010

  Find Display Screen
+----------------------------------------------------------------+
| Edit mode : OVERTYPE.                                         
|
| No.  Tape#                Movie Title                         
|
+----------------------------------------------------------------+
| 1    0010                 French Connection, The              
|
| 2    0010                 Guantlet, The                       
|
| 3    0010                 Goldfinger                          
|
|                                                               
|
| Enter: <Q>-Quit or Select Number >                            
|
+----------------------------------------------------------------+

Example 6
  Index Field:     Director
  Search String:   Br
+----------------------------------------------------------------+
| Edit mode : OVERTYPE.                                         
|
| No.  Director             Movie Title                         
|
+----------------------------------------------------------------+
| 1    Bradham, John        Wargames                            
|
| 2    Bradham, John        Saturday Night Fever                
|
| 3    Breast, John         Beverly Hills Cop                   
|
| 4    Brickman, Paul       Risky Business                      
|
| 5    Brickman, Marshall   Lovesick                            
|
| 6    Brickman, Marshall   Manhattan Project                   
|
| 7    Bridges, James       China Syndrome, The                 
|
| 8    Bridges, James       Mikes Murder                        
|
| 9    Bridges, James       Urban Cowboy                        
|
| 10   Bridges, James       Perfect                             
|
| 11   Brooks, Richard      Cat On A Hot Tin Roof               
|
| 12   Brooks, Richard      Looking For Mr. Goodbar             
|
| 13   Brooks, Richard      In Cold Blood                       
|
| 14   Brooks, James        Terms Of Enderament                 
|
| 15   Brooks, Mel          Blazing Saddles                     
|
| 16   Brooks, Mel          High Anxiety                        
|
| 17   Brooks, Albert       Lost In America                     
|
| 18   Brooks, Mel          Silent Movie                        
|
| 19   Brooks, Mel          To Be Or Not To Be                  
|
| 20   Brooks, Mel          Young Frankenstein                  
|
|                                                               
|
| Enter: <Q>-Quit, RETURN for Next Screen or Select Number >    
|
+----------------------------------------------------------------+
The FIND Function is extremely fast and efficient.  It can find a
screen of matches almost instantenously.  However it is limited
to searches on one field at a time, and the field must be one of
the five key fields.  If you need to search on multiple fields,
then use the Srch Function or the Report Function.
#13
                       THE SEARCH FUNCTION

The search function allows you to search your data file using
multiple fields.  The function uses two screens to complete the
task, the Movie Selector Screen and the Main screen.  To enter the
search Function, select Srch from the command line on the Main
screen.  The following prompt will be displayed:

   Sort By: Title, Star, Costar, TapeNo, Director: F1 = Abort

Selecting one of the above Key fields will determine the sort
order for the movies that meet your selection criteria.  After you
have made your selection, the Movie Selector Screen is displayed.


MOVIE SELECTOR SCREEN

OVERTYPE.  F1:Abort, F5:Clr Eol, F9:Edit Done, INS: Ins On/Off
+======================== MOVIE SELECTOR
==========================+
|| +------------------------ Fields ----------------------------+
||
|| | Star Category Director Comment Tape# RecSpeed Costar Cast  |
||
|| | Year Company  Title     Rating Start Stop     Time         |
||
|| +------------------------------------------------------------+
||
||                                                               
||
|| +--------------------- Comparators --------------------------+
||
|| |   EQ = equal       NE = not equal to      LT = less than   |
||
|| |   GE = greater than or equal to  GT = greater than         |
||
|| |   LE = less than or equal to     CT = search for string    |
||
|| +------------------------------------------------------------+
||
|| Logical Operators(LogOp) = AND, OR: Use END to quit selections
||
|| +-------+-------------+---------------+----------------------+
||
|| |       |             |               |                      |
||
|| | LogOp |    Field    |   Comparator  |        Value         |
||
|| +-------+-------------+---------------+----------------------+
||
|| |       |  Rating     |      EQ       |    PG                |
||
|| |  AND  |  YEAR       |      GE       |    1985              |
||
|| |  AND  |  CATEGORY   |      EQ       |    C                 |
||
|| |  END  |             |               |                      |
||
|| |       |             |               |                      |
||
|| |       |             |               |                      |
||
|| |       |             |               |                      |
||
+--+-------+-------------+---------------+----------------------+
--+

NOTE:   1.  The fields Star, Costar, and Director are used for
            last names.
        2.  There are three fields not shown on the screen above
            that may be used.  They are StarF, CostarF, DirecF;
            they are first name fields forStar, Costar, and
            Director.
#13
When you first enter the Movie Selector Screen, the cursor will
be in the first field waiting input.  If you want to abort this
screen or need help, press F1 and the following prompt will be
displayed:

                   Edit, Continue, Quit, Help

Selecting Edit will place the cursor back in the input screen to
start or edit any data previously input.  After entering your
search criteria, Continue will start the search process.  Quit
will return you to the Main Screen.  Help will display the help
files for the Movie Selector Screen.

MOVIE SELECTOR FIELDS
There are four fields on the screen used to set up the search
criteria;  Field, Comparator, Value and LogOp.

Field      Enter the name for one of the 18 Video Librarian fields
           in this field. Fourteen of the field names are listed
           in the top window of the Movie Selector Screen.  Four
           additional field names that may be used are listed in
           the note on the previous page.  This field holds the
           name of the field that you want searched.

Value      Enter a value in this field to make a comparison.  If
           you entered STAR for the field you wanted searched,
           then you would enter a star's lastname in this field
           for the value.

Comparator This field specifies how you want to compare the value
           entered in the Value field.  There are seven
           comparators that can be entered in this field.   See
           second window on the Movie Selector Screen.
           RESTRICTION- CT can't be used with the following
           fields: YEAR, STOP, START and TIME.  These fields are
           stored as numbers and CT only operates on string values.

LogOp      Two logical operators can be used in this field, AND and
           OR.  The string END entered in this field signifies
           completion of data entry on the Movie Selector Screen.
           The operators allow you  multiple search criteria.
           For the AND comparison to be true, the comparison before
           and after the AND operator must be true for selection
           of the movie record.  The OR comparison will be true if
           any of the comparisons connected by OR are true.  If the
           AND operator is proceeded by one or more OR comparators,
           and if any of the OR comparisons are true, then the
           before condition for the AND operator is true.

NOTE:  You can use all seven input fields in the LogOp field for
the comparators AND, OR ie.; END is not required to signify
completion of data input if all the LogOp fields are used.
#13
SEARCH EXAMPLES

Listed below and on the next page are several examples to
demonstrate setting up selection criteria.


Example 1
      +----------+------------+--------------+------------+
      |  LogOp   |   Field    |  Comparator  |  Value     |
      +----------+------------+--------------+------------+
      |          |   Star     |   EQ         |  EASTWOOD  |
      |  OR      |   STAR     |   EQ         |  REYNOLDS  |
      |  OR      |   Star     |   EQ         |  FORD      |
      |  AND     |   CATEGORY |   NE         |  A         |
      |  END     |            |              |            |
      +----------+------------+--------------+------------+

This example would select all movies in the data file that starred
EASTWOOD or REYNOLDS or FORD and was not and Action movie.


Example 2
      +----------+------------+--------------+------------+
      |  LogOp   |   Field    |  Comparator  |  Value     |
      +----------+------------+--------------+------------+
      |          |   STAR     |   EQ         |  FONDA     |
      |  AND     |   STARF    |   EQ         |  JANE      |
      |  END     |            |              |            |
      +----------+------------+--------------+------------+

This example would select all movies from the data file that
starred Jane Fonda. If the STARF field with a value of JANE was
not used and only the STAR field (FONDA) was used, then all movies
starring Jane, Peter, Henry and any other Fonda would be selected.


Example 3
      +----------+------------+--------------+------------+
      |  LogOp   |   Field    |  Comparator  |  Value     |
      +----------+------------+--------------+------------+
      |          |   STAR     |   EQ         |  PRYOR     |
      |  OR      |   COSTAR   |   EQ         |  PRYOR     |
      |  OR      |   CAST     |   CT         |  PRYOR     |
      |  END     |            |              |            |
      +-----------------------+--------------+------------+

This example would select all movies from the data file that had
PRYOR as a star, co-star or as a cast member.
#13
Example 4
      +----------+------------+--------------+------------+
      |  LogOp   |   Field    |  Comparator  |  Value     |
      +----------+------------+--------------+------------+
      |          |   TITLE    |   CT         |  LOVE      |
      |  AND     |   YEAR     |   GE         |  1960      |
      |  AND     |   YEAR     |   LT         |  1970      |
      |  END     |            |              |            |
      +----------+------------+--------------+------------+
This example would select all movies that contained LOVE any where
in the title and was made between 1960 and 1969.


Example 5
      +----------+------------+--------------+------------+
      |  LogOp   |   Field    |  Comparator  |  Value     |
      +----------+------------+--------------+------------+
      |          |   RATING   |   EQ         |  R         |
      |  OR      |   RATING   |   EQ         |  PG13      |
      |  AND     |   YEAR     |   GE         |  1986      |
      |  AND     |   TIME     |   LT         |  105       |
      |  AND     |   CATEGORY |   NE         |  C         |
      |  AND     |   COMPANY  |   EQ         |  CF        |
      |  END     |            |              |            |
      +----------+------------+--------------+------------+
This example would select all movies from the data file that met
the following criteria:  was rated R or PG13 and was made in 1986
or later, and with a running time of 104 minutes or less, and was
not a comedy and was released by CBS/FOX.

Video Librarian can perform some very powerful searches.  After
completing the Movie Selector Screen and pressing Continue, the
search begins.


SEARCH SCREEN

When the search process begins the search screen which is almost
identical to the Main Screen is displayed:


              ************  SEARCHING  ************


The prompt SEARCHING will flash while Video Librarian is searching
the data file for matches.   When a match is found, the movie is
displayed on the screen along with the Search Screen Menu seen
below:

                     Next,  Edit,  Continue
#13
Next will start the search process again to find the next movie
that meets the search criteria.

Edit functions the same as the Edit function on the Main Screen.
Any changes made are incorporated into the data file.

Quit stops the search process and returns you to the Main Screen.

When the search process is complete, a message is displayed.

Search Complete -- Movies Read = 650  Matches = 10 PRESS ANY KEY



Miscellaneous Search Notes

1.      When first entering the Search procedure, you are prompted
        for the sort field, ie. Title, Star, Costar, Director or
        TapeNo.  In some cases the movies are not displayed in the
        sort order selected.  Video Librarian overrides your
        selection if you use a different Index Key Field name as
        the first name in the FIELD input field on the Movie
        Selector Screen.  Video Librarian uses the first Index Key
        Field name on the Movie Selector Screen to determine the
        sort order.

2.      If you just want to search on a single field and that
        field is one of the five Index Key Fields, then the FIND
        procedure may be more convenient to use.

3.      The selection criteria you set up using the Movie Selector
        Screen are case insensitive.  All characters are
        automatically displayed in uppercase on the screen.  All
        fields in your data records are converted to uppercase
        before a comparison is made.
        #13
                       THE REPORT FUNCTION

REPORT SCREEN

The screen below will appear when you select Report from the Main
Screen menu.

   +-----------------------------------------------------------+
   |                                                           |
   |            SELECT  TYPE  OF  REPORT  LISTING              |
   |                                                           |
   +-----------------------------------------------------------+
+-----------------+--------------+----------------+--------------+
|  Report  Type:  |   List  To:  |    List:       |  Sort  By:  
|
|                 |              |                |             
|
| A. Tape Labels  | A. Screen    | A. All Movies  | A. Title    
|
|                 |              |                |             
|
| B. Small Report | B. Printer   | B. Some Movies | B. Star     
|
|                 |              |                |             
|
| C. Large Report | C. Text File |                | C. Costar   
|
|                 |              |                |             
|
| D. Custom Report|              |                | D. Director 
|
|                 |              |                |             
|
|                 |              |                | E. Tape #   
|
|                 |              |                |             
|
|  Enter  (A-D)   |  Enter (A-C) |   Enter (A/B)  |  Enter (A-E)
|
|        B        |       A      |        A       |       A     
|
+-----------------+--------------+----------------+--------------+

On this screen are four menus to make your selections to determine
the type of report you want, where you want the report listed,
whether to list all or some of the movies and the sort order you
want the report listed.

Upon arrival at this screen, the cursor will be in the input field
for Report Type. If you need help or want to exit from this screen
press F1 and the menu below is displayed.

                  Edit,  Continue,  Quit,  Help

Selecting Edit will allow updating of this screen.  Continue
indicates completion of updating.  Quit will return you to the
Main Screen.  Help will display the help screens for this screen.

If you are satisfied with the default selections (the highlighted
letters at the bottom of the screen), press function key F9 when
you first enter the screen.  You can press F9 at any point during
screen update to signify update completion.
#13
REPORT TYPE MENU

Tape Labels    Prints labels for placement on VCR cassette tapes
               /boxes.  Five choices for the type label to print.
               1. Regular  Labels  2. VHS Top  3. VHS Spine
               4. Beta Top  5. Beta Spine.

Small Report   This is a pre-formatted report that can be listed
               to the screen printer or text file. Prints eight
               information fields.  The fields are Title, Star,
               Category, Year, Rating, Tape#, Start and Time.

Large Report   This is a pre-formatted report that can be listed
               to a printer or a disk text file.  The report
contains
               twelve information fields.  The fields are Title,
               Star, Costar, Cast, Director, Category, Year,
               Rating, Tape#, Start, Time and Speed.

Custom Report  You select the fields to be contained in this
               report.  Make selections using the Report Formatter
               Screen.

LIST TO MENU

Screen      When selected, the report is listed to your monitor.

Printer     When selected, the report is listed to your printer.

Text File   When selected, you will be prompted to enter a drive
            and filename for the text file.  You can enter up to
            eight characters for the filename.  Do not add an
            extension.  The program adds the extension .TXT to
            your filename.  Pressing F1 at any point while entering
            the drive/filename will abort the filename input
            routine and return you to the screen.  The text file
            can be edited by a Wordprocessor capable of reading
            ASCII text.

LIST MENU

All Movies   When selected, all movies in the data file will be
             listed in the report.

Some Movies  When selected, you will be sent to the Movie Selector
             Screen to set up the selection criteria to list the
             desired movies.

Sort By Menu  Select the sort order in which you want your report
              listed.  Your choices are Title, Star, Costar, Direc-
              tor or Tape#.  Selecting Title would cause the report
              to be listed in alphabetical order by title.
             #13
REPORT FORMATTER

When Custom Report is selected from the Report Type Menu, the
screen
below (** screen not shown in this manual**) is displayed after
completing the current screen.  From this screen you select the
fields to be included in your report and how you want the fields
formatted.

REPORT FORMATTER FIELDS

Print Field    Enter the name of the data field that you want
               printed.  In addition to the 15 fields listed in the
               top window of the screen, there are three additional
               fields that may be used.  They are STARF,COSTARF and
               DIRECF which are for the star's, costar's and direc-
               tor's first names.  The fields Star, Costar, and
               Director will print last names only.  Enter END to
               signal completion of screen input.

Field Width    This is a display only field.  When a field name is
               entered in the print field, the number of characters
               the field occupies is displayed.

Print Width    This fields allows you to specify the width in
               characters that you want the field to occupy on a
               line.  This number is added to the Line Width dis-
               played at the bottom of the screen.  The minimum
               Print Width is 6.


Wrap(Y/N)      Answer YES(Y) when the Field Width is greater than
               the Print Width and you want all of the field
               information printed.  The extra characters will be
               wrapped to the next line.  The field information
               can occupy up to three lines if Wrap is used.

               If you select NO(N) and the Field Width is greater
               than the Print Width, the extra characters will be
               deleted.

               Selecting either YES or NO when the Field Width is
               less than or equal to Print width has no effect on
               the printout.

Line Width     Display only field.  This field displays the width
               the line will occupy as each Print Field and Print
               Width is selected.  It adds each Print Width, plus
               two for each field.  Note: The program does not
               prevent you from having line widths greater than
               79 for screen reports or 129 for printer reports,
               however if you exceed these limits the reports will
               not be properly formatted when listed.
               #13
WRAP EXAMPLE

This is a demonstration of the use and non use of Wrap on the Title
field.  The Field Width for Title is 40, the selected Print Width
is 20.  The first line of the example below is with YES to Wrap and
the second line is with NO to Wrap.

      Title                  Star          Costar        Year
    ---------------------------------------------------------------
1.    Close Encounters Of    Dreyfuss      Garr          1980
      The Third Kind

2.    Close Encounters Of    Dreyfuss      Garr          1980


PRINTING TAPE LABELS

Printing Tape Labels is a simple process with Video Librarian.  If
you want to print labels for all tapes, simply select Tape Labels
from the Report Type Screen and All Movies from the List Menu.

If you don't want to print labels for all your tapes, select Some
Movies from the List Menu.  You will then enter the Movie Selector
Screen.  The only field used by this screen when printing Tape
Labels is TAPENO.  For example if you had tapes numbered from 0001
to 0132 and you wanted to print labels for the first 20 you would
make the following entries on the Movie Selector Screen.

   +--------+-------------+----------------+------------------+
   | LogOp  |    Field    |   Comparator   |     Value        |
   +--------+-------------+----------------+------------------+
   |        |    TAPENO   |      LT        |   0021           |
   | END    |             |                |                  |
   |        |             |                |                  |
   +--------+-------------+----------------+------------------+
    #13
                        THE UTILITY MENU


The Utility Menu is accessed form the Main Screen by pressing Util
on the Main Screen.  From the Utility Menu you can set the system
date and time which will appear on the Main Screen when you return.
Also,  this screen allows you to create fully functional sub-files
of your main file.  Additionally, you can merge together two files
previously created by Video Librarian.


               +------------ Utility Menu -----------+
               |                                     |
               |               Set Date              |
               |                                     |
               |               Set Time              |
               |                                     |
               |               Merge Files           |
               |                                     |
               |               Create Sub-File       |
               |                                     |
               |                                     |
               |               End                   |
               |                                     |
               +-------------------------------------+

                Enter A Highlighted Letter (D,T,M,C,E)


UTILITY MENU FUNCTIONS


SET DATE

To set the date,  you will be prompted to enter the month, day and
year.  For month enter 1..12.  For day enter 1..31.  For year
enter 1980..2099.  You may press F1 at any point to abort from this
procedure and the current date will not be changed.


SET TIME

To set the time, you will be prompted to enter the hour, minutes
and seconds.  For hours enter 0..23.  For minutes enter 0..59.
For seconds enter 0..59.  You may press F1 at any point to abort
from this procedure and the current time will not be changed.
#13
MERGE FILES
This utility allows you to merge two files previously created into
one file.  When selected, you are prompted to enter the name of the
Input File.  The file cannot be the currently selected file.  The
movies from the Input File are added to the current file.

If the Input File selected cannot be found you will receive an
error message and given the chance to select another Input File.

If the Input File selected is found you are asked if you want
to open the file. If you answer Yes, the merge procedure will
start. This is indicated by Merge In Progress flashing at the top
of the Utility Screen.  If you answer No to the open file question
you will be returned to the Utility Menu for additional input.

If the operation is completed successfully, you will be notified
of the success and the number of movies added to the current file.

If doing the merge process you run out of disk space, the oper-
ation will halt.  You are notified of the out of disk space con-
dition, and the number of movies added to the current file.  The
file is fully functional, eventhough all movies were not added.

CREATE SUB-FILE
This utility allows you to create fully functional sub-files of any
file created by Video Librarian.  For example, if your main movie
file contain movies in the categories, comedy, action and drama.
By use of this procedure you could create a file that just con-
tained comedy movies.

When this item is selected,  you will be prompted to input the name
of the Output File.  If the name of the Output File already exits,
you will be given a chance to choose a new file name or continuing.
If you elect to continue, the contents of the file will be erased
and the new data added to the file.

If the name selected for the Output File does not exits, you will
be asked if you want to create the file.  If you answer No, you
will be returned to the Utility Screen Menu. If you answer yes the
program will create the required files and continue.

After selection of the Output File name, you will be enter the
Movie Selector Screen.  On this screen you will set up the selec-
tion criteria for the movies to be included in the Output File.

The message Adding Movies to New File will flash on the screen
while this procedure is in progress.  You will receive another
message when the operation is complete and be told the number
of movies transferred to the new file.

If you run out of disk space during the procedure, you will be
notified and told the number of movies transferred.  The file
is fully functional although all movies were not transferred.
#13
                        VIDEOFIX PROGRAM
** NOTE **  The utility program VIDEOFIX.EXE is no longer pro-
vided on this shareware disks due to space limitations.  Reg-
istered users will be provided this utility.
PURPOSE
A utility program is provided on your disk, called VIDEOFIX.EXE.
The purpose of this program is to re-index your Video Librarian
files if they should become damaged and to permanently remove
deleted records from the file.


CAUSE OF DAMAGE

Your index files can become damaged by severe power spikes or loss
of power to the computer while operating Video Librarian.  Your
index files have been damaged if you noticed that your star,
costar, title, director or tapeno fields are not in listed in the
proper alphabetical or numerical order.

Damaged index files are a very rare occurrence, in over two years
of extensive use of Video Librarian we have never experienced dam-
aged index files except where induced on purpose to test this
utility program.

We highly recommend that you regularly back up your Video Librarian
data files. If you have a recent back up disk, the quickest method
to repair damaged index files is to copy the files from your back
up disk to the main disk.  This is assuming that you have not
copied
the damaged files to your back up disk.


USING VIDEOFIX

If you find it necessary to use this program to repair damaged
index files perform the following:

1.  If you have been using Video Librarian, exit from the program
    and re-boot your computer.

2.  Make a backup copy of your damaged files.

3.  At the place where you normally type VLB to load Video
    Librarian.
    a. Type SBMIO.COM
    b. after the program has loaded and the DOS prompt returns
                     Type VIDEOFIX

The program will load and the following prompt will appear:

                  ReIndex or Delete Module R/D
 #13
ReIndex Module

Select R for re-index, the delete module will be discussed later.
You will then be prompted to input the drive and filename of the
file you wish to repair.  Enter the drive and filename without any
extensions.

The program will start processing the damaged files.  The message
Busy Repairing Files will flash on the screen.  When the process
is complete you will be returned to the DOS prompt.


Delete Module

When Video Librarian deletes a movie form the file, the movie is
not physically removed from the disk file, it is flagged as
deleted.  To permanently remove the records from the disk file run
VideoFix as directed previously.  Select D at the first prompt.

To remove the deleted records from your file, this utility creates
a temporary data file.  You will be prompted for the disk drive to
store the temporary data file.  If there is not enough room to
store the temporary file you will be prompted again for a disk
drive.  You can then select an alternate drive with a formatted
disk or PRESS F1 to abort.  When the program completes processing
all movies you will be returned to the DOS prompt.

This utility also repairs damaged files.  However if you only need
to repair damaged files, use the Re-Index Module.  The Re-Index
module performs about three times faster than this module.
#13
                     TAPE LABELS


Video Librarian will print labels on five different label formats.
The formats are (1) Regular labels (3 1/2 by 15/16) and on
specially designed video cassette labels - - (2) VHS Spine
(5 13/16 by 3/4), (3) VHS Top (3 1/16 by 1 13/16), (4) BETA Spine
(5 1/2 by 11/16) and  (5) BETA Top (2 1/2 by 2 5/8).

The regular labels can be found in most any store that carries
computer supplies.  The custom labels(2-5) may be obtained by
(** REGISTERED USERS ONLY **)contacting:

                  TurboSystemsCo
                   P.O. Box 165          
               Roy, Ut. 84067-0165

** Note ** If you are not a REGISTERED user, we will not respond
to your request for custom labels.


REGULAR LABELS

Each label lists the tape number and will hold a maximum of four
titles.  The title, time in minutes,  and the starting counter
umber for each title is listed.  See figure below:


     *****************************************************
     *                 Tape# 0003         Time   Start   *
     * Raiders Of The Lost Ark             115   0000    *
     * Repo Man                            092   1236    *
     * Romancing The Stone                 105   2346    *
     * Midnight Express                    121   3211    *
     *****************************************************


VHS/BETA SPINE LABELS

Although the size of the VHS and BETA Spine labels are slightly
different, the format printed on the tapes are the same.   Each
label list the tape number and will hold a maximum of four titles.
The title, rating, time in minutes and the starting counter
number for each title is listed.  See figure below:

*****************************************************************
***
* | Tape# 0008 |  Every Which Way But Loose    | R     119  0000
| *
* |            |  Final Countdown, The         | PG    092  1236
| *
* |            |  First Blood                  | R     096  2346
| *
* |            |  Forty-Eight Hours            | R     097  3245
| *
*****************************************************************
***
 #13
VHS TOP LABELS

Each label list the tape number and will hold a maximum of six
titles.  The title and the counter start number for each title is
listed.  See figure below:



             **********************************************
             *                   Tape# 010                *
             *                                            *
             *  MOVIE TITLE                      START    *
             *  --------------------------------------    *
             *  French Connection, The            0000    *
             *  Gauntlet, The                     1236    *
             *  Goldfinger                        2346    *
             *                                            *
             *                                            *
             **********************************************


BETA TOP LABELS

Each label list the tape number and will hold a maximum of eleven
titles.  The title and the counter start number for each title is
listed.  See figure below:


               ****************************************
               *               Tape# 008              *
               *                                      *
               * MOVIE TITLE                  START   *
               * ----------------------------------   *
               * Every Which Way But Loose     0000   *
               * Final Countdown, The          1236   *
               * First Blood                   2346   *
               * Forty-Eight Hours             3642   *
               *                                      *
               *                                      *
               *                                      *
               *                                      *
               *                                      *
               *                                      *
               ****************************************


NOTE:

If there are more titles with the same tape number than can be
printed on one tape label, Video Librarian will print additional
labels until all titles with the same tape number are printed.
Figures shown above are not actual size.
#13
                         CUSTOMER SUPPORT
                                                                
TurboSystemsCo has a strong commitment to customer service 
and product support to registered users of Video Librarian.
For non-registered users, we will provide assistance in get-
ting the program up and running on your system if problems
are encountered.  That is the only assistance that will be
provided to non-registerd users.

The author of Video Librarian and President of TurboSystemsCo
(Lemuel D. Turner) is a member of the Association of Shareware
Professionals (ASP).   Since this program is authored by a
 member of ASP, registered users have an additional avenue to
resolve any shareware related problems that may develop with
ASP members, the ASP Ombudsman.


ASSOCIATION OF SHAREWARE PROFESSIONALS OMBUDSMAN

Lemuel D. Turner is a member of the Association of Shareware
Professionals (ASP).  ASP wants to make sure the that the 
shareware principle works for you.  If you are unable to re-
solve a shareware-related problem with an ASP member by con-
tacting that member directly, ASP may be able to help.  The
ASP Ombudsman can help you resolve a dispute or problem with
an ASP member, but does not provide technical support for
members' products.  Please write the ASP Ombudsman at P.O.
Box 5786, Bellevue, Wa. 98006 or send a Compuserve message
via easyplex to ASP Ombudsman 70007,3536.
#13






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1424

     Volume in drive A has no label
     Directory of A:\

    FILE1424 TXT      1925  12-08-89   4:40p
    FILES    TXT      1423  11-27-89   2:09a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   6-01-89   3:03p
    LISTER   EXE      5104  11-24-88   2:21a
    MAINHELP TXT     15283  11-23-89  11:06p
    MANUAL   BAT       149   6-01-89   3:04p
    MARK     COM      1408   7-20-86   1:33p
    MSELHLP  TXT      2477   2-04-88   4:13p
    PAGE     COM       325   1-06-87   4:21p
    PRINT    BAT        17  11-24-88  12:16p
    PRTCODES DEF         9   2-06-87  11:37p
    README   TX1      1954  11-27-89   7:18p
    README   TX2      1096  11-27-89   7:20p
    RELEASE  COM     16647   7-20-86   1:32p
    RSELHLP  TXT      1948   2-04-88   4:54p
    SAMPLE   DAT     26145  11-26-89   2:43a
    SAMPLE   K1       6018  11-26-89   2:43a
    SAMPLE   K2       3138  11-26-89   2:43a
    SAMPLE   K3       3138  11-26-89   2:43a
    SAMPLE   K4       2178  11-26-89   2:43a
    SAMPLE   K5       3138  11-26-89   2:43a
    SBM      SYS        52  12-04-87  12:30a
    SBMIO    COM     35387   9-20-86   5:29a
    SELHLP   TXT      5348  11-23-89  11:12p
    VIDEO    EXE    101648  11-27-89   2:18a
    VIEW     BAT        39   6-01-89   3:03p
    VLB      BAT        65  11-20-89   6:43p
    VLB      TXT     73261  11-27-89   2:02a
    VLBINST  COM     26456   6-14-86  10:51p
           30 file(s)     336508 bytes
                            7168 bytes free
