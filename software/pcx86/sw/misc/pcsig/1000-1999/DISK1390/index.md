---
layout: page
title: "PC-SIG Diskette Library (Disk #1390)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1390/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1390"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SLIDE MANAGER"

    SLIDE MANAGER organizes and catalogs your photographic slides or prints
    to make retrieval easy -- with special features for artists who
    photograph their paintings for submissions to competitions.
    
    For each slide or work of art, this specialized database stores the
    title, subject matter (12 categories), the medium (20 categories),
    dimensions of photo print or object, date created, ID number and special
    keywords.  An additional history of where and when the slide has been
    shown, sent, sold or given an award can also be recorded.
    
    The database allows you to search for a particular slide or group of
    slides by name, ID, or any of the other categories you've chosen.  It
    can also produce a printed catalog of your collection sorted in a
    variety of ways, such as by subject, alphabetically by title, etc.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1390.TXT

{% raw %}
```
Disk No: 1390
Program Title:  SLIDE MANAGER version 1.1
PC-SIG version: 1

SLIDE MANAGER organizes and catalogs your photographic slides or prints
to make retrieval easy-----with special features for artists who
photograph their paintings for submissions to competitions.

For each slide or work of art, this specialized database stores the
title, subject matter (12 categories), the medium (20 categories),
dimensions of photo print or object, date created, ID number and special
keywords.  An additional history of where and when the slide has been
shown, sent, sold or given an award can also be recorded.

The database allows you to search for a particular slide or group of
slides by name, ID, or any of the other categories you've chosen.  It
can also produce a printed catalog of your collection sorted in a
variety of ways, such as by subject, alphabetically by title, etc.

Synopsis:  Cataloging, and retrieval system for photographic
slides---with special features for artists who send photos of their
paintings to competitions.

Usage:  Hobby/Photography/Cataloging Slides/Art.

Special Requirements:  None.

How to Start:  Type GO (press ENTER).

Suggested Registration:  $54.95

File Descriptions:

SLIDEMGR EXE  Main program.
SLIDEMAN TXT  Documentation.

PC-SIG
1030D E. Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk No 1390 SLIDEMANAGER  >>>>                  ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To start the program, type SLIDEMGR (press enter)                       ║
║                                                                         ║
║ To look at the documentation on your screen, type VIEW (press enter)    ║
║                                                                         ║
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## SLIDEMAN.TXT

{% raw %}
```
                            OVERVIEW

     SLIDEMANAGER was designed primarily for visual artists and
photographers.  Visual artists make photographic slides of their
work for permanent records and for submission to galleries and
competitions. Photographers produce slides as the final product
of their work, or take slides of prints for submission purposes.
The SLIDEMANAGER program provides a method of uniquely numbering
the slides, for storing information as to the date the work was
created, the medium (20 catagories), the subject (12 catagories),
height and width of the work, the title, and key words (or
description) for easy retrieval. Histories of the slide (when and
where the work was submitted, shown, sold, given, or has received
an award) may be entered either at the time of entering the slide
information or any other time. If the medium is photographic, an
entry of photo-facts may be made; these include the type of
camera, lens, filter, lights, film, and developing and printing
information. Provision for retrieval of the stored information is
extensive. Slides may be recalled by number, keywords, title,
subject, media, or year. If the medium is photographic, the
photo-facts are recalled with the slide. Histories may be
recalled by the type (submissions, shows, sales, gifts, awards)
or by slide number or key words occurring in the place submitted
or in the name of the competition. As each item is recalled to
the screen, an option for print-out of that item is given. In
addition, a print-out menu allows for mass printout of all
slides/photo-facts, and histories for each recall classification,
without corresponding on-screen display.

                       SYSTEM REQUIREMENTS

     SLIDEMANAGER is supplied as a compiled program intended to
run on machines compatible with IBM PCs, XTs, or ATs. The program
is less than 130 Kbytes and uses very little memory space for
running purposes. Either a monochrome or color monitor may be
used, and any printer may be used that runs under PCDOS or MSDOS.

                    DISK SPACE CONSIDERATIONS

     The program file is named SLIDEMGR.EXE and the program
builds four data files: SLIDEMGR.DAT, HISTMGR.DAT, PHOTOMGR.DAT,
and SLIDEMGR.IDX. The first three files are "Random" files, with
a respective length of 136, 188, and 374 bytes. The .IDX file is
a B-plus Tree index file with a record length of 256 bytes;
however, the overall length of this file will vary greatly
depending on the number of key words included for recall of each
slide. As an example, storage of 175 slides with no histories,
each slide having an "average" number of key words in the
description, results in an IDX file size of 44800 bytes. Since
histories require much less index storage than do slides, and
photo-facts even less, it can be estimated that the IDX file
would not exceed 2 1/2 times the size of the SLIDEMGR.DAT file.
Although the program will certainly work best with a hard disk,
non-photographers or those with a limited number of slides to
file, may find that the space afforded by a single floppy disk is
sufficient.  In any event, the program files all of the
information on the active disk; it is therefore advisable to load
the program into "working memory" and then replace the disk with
a formatted non-system floppy to afford maximum file storage
space. For those with a hard disk, the program may be stored in a
directory with a name of your choice, and will file the data
there.
     No unusual printer sequences are used, nor are any graphics
characters sent to the printer. Presumably any dot matrix or
daisy wheel or any other type of printer that will operate under
the PCDOS or MSDOS system will give satisfactory printed output.

                      STARTING THE PROGRAM

     Copy the SLIDEMGR.EXE file to whatever disk you may want to
use, using the DOS COPY command. Put it into any directory you
want to put it in. Then make that the active directory and type 
SLIDEMGR and hit ENTER. The "factory disk" also contains an ASCII
file named SLIDEMAN.TXT which is the manual for this program. It
may be read on the screen with the DOS TYPE command, or printed
out on your printer (see your DOS manual for details).
     The program uses multiple menus, and they are quite self-
explanatory. However, the manual does provide a lot of helpful
hints as to use of key words, and suggestions as to how to
include information on your slides or histories that may be of
importance to you but for which no specific entry line is
provided by the program designer.

          WHAT YOU GET IN RETURN FOR YOUR REGISTRATION

     Every time you run the program, you will be reminded that
this is a SHAREWARE program and that you are expected to register
it if you use it beyond a reasonable evaluation period. Cost of
registration is $49.95 plus $5.00 for shipping. Upon registration
you will be sent (1) the latest version of the program, (2) any
utility programs that have been developed for it, and (3) a copy
of the manual, including information on any enhancements. AS AN
ADDED INDUCEMENT TO REGISTER, if you request customization of the
subjects and/or media portion of the slide-entry layout, to
better satisfy your needs as an artist, your registered program
will contain that customization (providing, of course, that it
fits within the number-of-items and line-length constraints
imposed by the program).

        REGISTER AND MAIL YOUR CHECKS AND/OR COMMENTS TO
                        EPPSTEIN SOFTWARE
                      2519 East Allen Road
                      Tucson, Arizona 85716
                        Phone 602-881-0131  
                                


                        USING THE PROGRAM

     After reading the SHAREWARE notice, hit any key to go to the
Main Menu. Entry to every section of the program is made by
responding to the Main Menu prompt. Erroneous entries to the
prompt of any menu will result in a beep. Hitting the <ESC> key
in any part of the program (excepting the Main Menu) will return
you to an earlier menu. To quit the program, return to the Main
Menu and enter a Q to the prompt.
     Remember that the <ESC> key is a totally safe key: if you
are entering data and hit <ESC> you will be given a fresh layout
or will be returned to the last previous menu. NO FILING IS EVER
DONE WHEN YOU HIT <ESC>. This feature prevents the filing
erroneous data, whether you are in a data entry portion of the
program or at the option line of the data entry layout.
     The Main Menu appears below, and a full description of each
of the Main Menu options follows this page.







         (Use Shift/PrtSc to put copy of Main Menu here)











                   "ENTER NEW SLIDES" SECTION

     Until the information for a slide has been entered, the
program cannot generate a slide number and no history or photo-
facts can be entered for the slide. On the page following this
section, a slide layout is shown in the manner it first appears
on the screen, and in its completed form.
     The cursor will be positioned for entry of the Date created,
and since this is a required entry, you can only leave this data
entry point by correct completion or by <ESC>. All data on the
slide layout is required EXCEPT height and width; those two
things are optional. The length of the reverse video field at the
cursor position will indicate the maximum length of each entry.
The date required is the month and the year; there is no
provision for entry of the day of the month on this particular
layout. This date refers to the date (month and year) of the
creation of the art work, in the case of media other than
photographic slides. If the media is a photographic slide then of
course the date the slide was taken would also be the date of
creation of the art work. HELPFUL HINT: If the day of the month
is important to you, include it, or the full day/month/year date,
as a keyword or in the title. Also, if titles really aren't
important to you, type in only a single character or short word,
to satisfy the requirement that you can't leave that line blank.
Titles are stored in the key index and can be up to 50 characters
long; the index file, however, stores only the number of letters
you actually enter. A full title would take up 50 bytes of index
file space but a single character will only take up one byte. Of
course, sometimes a title is really important for you to recall
the content of an art work. In other instances the title is
changed from time to time, depending on where the slide is
eventually submitted. Just remember, short titles save index file
space.
     Note that keywords must be separated by commas. This permits
the filing of more than a single word as a keyword; for example
Great Britain or Blue Vase. HELPFUL HINT: Avoid plural words
ending in S as key words. A key word search requires the EXACT
key word; a search for the key word "BOYS" will not find "BOY".
As will be explained in detail in the section of the manual
entitled RECALL SLIDES, a slower method of key word search will
find any combination of letters occurring in either the entire
string of key words, or in the title of the slide. ANOTHER
HELPFUL HINT: Don't use a word that is also a listed subject, or
a listed media, as a key word; that just wastes space because a
separate recall is provided for subject and media. Since you can
recall directly by subject and media you don't need them as key
words.
     When you have entered all of the required data, the slide
number is formed by the program and printed in the proper portion
of the layout. The number is a combination of the year, a unique
number starting with 1 (padded to five digits), and two letters
which represent the alphabetical equivalent of the subject number
and the media number.
     Once you have entered the necessary information for the
slide number to be formed, you can edit any entry with the arrow
keys on your keyboard. On some keyboards the NumLock must be off,
in order to use the arrow keys. Changing the information as to
year created, subject or media, will cause a corresponding change
to the slide number. After all corrections are made, the cursor
may be placed on the option line by use of the down arrow key,
the Home key, or the PgDn key.

     The option line of the slide layout gives you four options:

(F)ile, (A)dd History/File, (P)rint/File, (ESC) to Menu, don't
file

Entering F will file all of the information in the SLIDEMGR.DAT
file, and the date, media, subject and key words in the index
file. What happens next depends on the media you chose. If the
media is not photographic, then you will be presented with a
fresh slide layout after the filing is complete. If the media is
photographic, you will be presented with the photo-Facts layout.
Entry of photo-facts is optional; it need not be done at the time
of slide entry, or at all. If you are presented with the photo-
facts layout and do not wish to enter data, simply hit <ESC>.
Otherwise, complete all or a portion of the information
requested; there are no required answers to the photo-fact entry
lines. Furthermore, you can add information to a previously
filed, partially completed photo-fact at any time.

Entering A will permit you to add one or more histories for the
slide you just entered, after the program files the slide
information. If the media is not photographic, immediately after
filing takes place the Enter History Menu will be presented. If
the media is photographic, the photo-fact layout will first be
presented and, after completion of that (or abandonment by
<ESC>), the Enter History Menu will be presented. 

Entering P will cause a filing of the slide information, and then
a print-out of that information on your printer (assuming you
have it turned on). After the print-out, the slide layout will
remain, and you may again choose among all four of the options.
Even though there is a separate Print-out Menu, it is useful to
print out each slide it so that you have a running printed
inventory of the slide you have entered. 

Entering <ESC> will abandon the data WITHOUT FILING IT, and will
return you to the Main Menu.


   (Use Shift/PrtSc to put copy of Slide layout on next page)



      "ENTER SUBMISSIONS/SHOWS/SALES/GIFTS/AWARDS" SECTION

     This section may be entered directly from the Main Menu, or
entered as a result of choosing the option (A)dd History/File
from the option line of the slide layout. In either case, the
History Entry Menu will be presented as it appears below.







    (Use Shift/PrtSc to put copy of History Entry Menu here)










Entering A will cause the submissions layout to appear. If the
Enter History section was entered from the option line of the
slide layout, then the slide number of the slide just entered
will appear in the proper position on the top line. The title of
the slide will also appear above the "Sent to" data entry line.
The cursor will be positioned for entry of the "Sent to" data. 
     If this section was entered from the Main Menu, the cursor
will be positioned to receive data as to the slide number. Only
the numeric portion of a slide number must be entered, and
leading zeros may be omitted. If no slide has ever been filed for
the number entered as the slide number, an error message appears
in the option box of the history layout and the erroneous slide
number is rejected. If you can't remember the correct number of
the slide for which you want to enter a history, hit <ESC> to
return to the Main Menu; from there you can choose a Recall
option, see the slides that are filed, and get a valid slide
number.
     Responses are required as to Sent to, Street Address, City
State, and Date submitted. Other entries are optional. HELPFUL
HINT: The Name of competition/comment line is quite useful for
other notations as well, and will be scanned for key word search
if you use that method of recall.
     The option line of the submissions layout is a little
different if you enter this section from the Main Menu, than the
option line presented if entry is from the slide layout option
line. The page following this section of the manual shows the
option entry line as it would appear if entry to the History
Entry section were from the Main Menu. The options are:

(F)ile/Menu, (N)ext submission/File, (R)epeat/File, (ESC) don't
file

Entering F causes filing, and return to the History Entry Menu.
At that menu, you may choose to file a different type of history
(show, sale, etc) or to return to the Main Menu.

Entering N causes filing, and gives a fresh submissions layout.

Entering R causes filing, and a repeat of the submissions layout
that contains all of the data you just entered, excepting for the
slide number. You may then enter a new slide number and again
choose an option. The purpose of the R option is to save
repetitive data entry when multiple slides are submitted to the
same place, or shown in the same show. Use of this feature
permits very fast filing of identical histories for different
slide numbers.

Entering <ESC> returns you to the History Entry Menu, without
filing. 

     When entry to the History Entry section is from the option
line of the slide layout, the option line of the history entry
layout is:

(F)ile, (N)ext slide/File, (ESC) to Menu

Entering F causes filing and a new History Entry Menu so that
additional types of history may be entered for this slide.

Entering N causes filing and a return to a new slide layout.

Entering (ESC) brings the History Entry Menu without filing.

     If, instead of choosing SLIDES SUBMITTED from the History
Entry Menu, you chose B) SHOWS/PLACES EXHIBITED, C) SALES, D)
GIFTS OR E) AWARDS, then the layout for your choice would appear
for data entry. Those layouts are essentially the same as the
submissions layout excepting for certain wording. For example,
the line "Sent to" of the submissions layout is replace by "Shown
at" in the show layout, "Sold to" in the sales layout, and "Given
to" in the awards layout. The option line in the sales, gifts and
awards layout does not permit the (R)epeat/file option. Other
than that, the procedure for completion of data is exactly the
same in all history entry layouts.


                "ENTER PHOTO INFORMATION" SECTION

     This section may be entered from the Main Menu, or will be
entered automatically after entry of a slide having a
photographic media. If entry is the result of filing a slide with
a photographic media, and the option chosen at the slide layout
option line was (A)dd History/File, the photo-fact layout will
appear BEFORE the History Entry Menu is presented. In that case,
completion and filing of the photo-fact data (or abandonment or
skipping the layout by hitting <ESC>) will bring up the History
Entry Menu.
     All data entry on the photo-fact layout is optional. The
entire layout may be skipped by hitting <ESC>. If this section
was reached from the Main Menu, you will have to enter a slide
number before you can enter any other information. Only the
numeric portion of the slide number need be entered, and leading
zeros may be omitted. Invalid slide numbers are those numbers for
which no slide has yet been entered, or a for a slide which has
been entered but which is not for a photographic media. In either
case the data is refused and an advisory message appears, and the
cursor positions for a correct entry.

     The option line will read:

(F)ile/next PhotoFacts, (ESC) return to Menu/don't file

     If this section was reached as a result of filing as slide
for a photographic media, the slide number will already have been
entered and the cursor will position at the "Camera" data entry
line. The arrow keys will move the cursor between data entry
points but will not allow alteration of the slide number.

     The option line will read:

(F)ile, (ESC) don't file

     Note that if this section was reached from the Main Menu,
the option (F)ile/next PhotoFacts allows you to enter multiple
photo-fact entries for multiple slide numbers, at one work
session. However, if entry to this section was a result of filing
a slide with a photographic media, (F)ile does the filing, but
returns you to either the slide entry layout for the next slide,
or brings up the History Entry Menu if the option choice from the
slide entry option line was (A)dd History/File.

UNLIKE A SLIDE ENTRY THAT HAS BEEN FILED, OR A HISTORY ENTRY THAT
HAS BEEN FILED, A PHOTO-FACT ENTRY MAY BE ADDED TO, CORRECTED, OR
EDITED IN ANY MANNER EVEN AFTER IT HAS BEEN FILED. The reason for
the exception is that none of the data entries of the photo-fact
layout are keys in the index file, and therefore there is no
problem as to deletion of changed keys (as there is as to slide
and history entries). 
     To edit a photo-fact filed entry, enter the section from the
main menu and then enter a slide number for which the photo-fact
entry has already been made. The layout will appear with the
previously filed data correctly positioned, and the arrow keys
will allow changes and then refiling. 

     A fresh photo-fact layout, and a completed layout, appear on
the page following this section of the Manual. Note the
difference in the option lines, depending on the entry point to
the photo-fact section.


       (Use Shift/PrtSc to make copies as mentioned above)



           "RECALL SLIDES (OPTIONAL PRINT-OUT" SECTION

     This section is reached from the Main Menu, and when it is
selected the Slide Recall/Print Menu is displayed. This menu
appears below:





  (Use Shift/PrtSc to put copy of Slide Recall/Print Menu here)















     Because of screen space considerations the display of slides
in the Recall section is not in the form of the original slide
entry data. Regardless of the choice from this menu, the slides
appear on the screen one at a time, and after each appearance the
choice is given for (N)ext slide, (P)rint the slide, or <ESC> to
the menu. In any instance where there are no slides filed, none
filed for the specific year/subject/media/key word/slide
number/title, you will be so advised and asked to enter something
different.
     If the slide recalled has had a photo-fact entered for it,
then the photo-fact will be displayed on the screen following the
display of the slide and the option line will appear following
the photo-fact. If (P)rint the slide is chosen, the photo-fact
will be printed out following the print-out of the slide.

     The menu choices have the following effects:

Entering A will display, one at a time, all slide entries that
have been filed, beginning with the most recent year.

Entering B will do the same, beginning with the oldest year.

Entering C will bring up a question line so that you may enter
the year. The entry may either be four digits (eg. 1987) or two
digits (eg. 87).

Entering D will bring up a listing of all of the subjects, at the
left of the menu. A question line will request entry of the
number of the subject you want to recall.

Entering E will cause a similar listing of all media, and present
the question line.

Entering F will bring a question line for the key word for which
you want to search. Since this search is an index key search, the
key word must match the key in the file exactly, if a match is to
be found. If a match is found, the slide will be displayed on the
screen. There may be many slides with the same key word and if
so, you can see them all by continuing to hit (N)ext slide.    

Entering G will bring a question line for the keyord or any
sequence of letters for which you want to search. This type of
search looks for the occurrence of the letter sequence, first in
the entire key word string and then the entire title line for
every slide in the file, retrieving the slide if a match is
found. Because of the nature of the search, it is slow compared
to the key word index search. On an AT, it took approximately one
minute to search 1000 slides. Obviously it will take longer on a
PC or XT. 

Entering H will bring a question line for the slide number; if
the search is unsuccessful a different number will be requested. 

Entering I will bring a question line for the title; this is an
index key search, so your entry must be the EXACT title, no more,
no less. 


                 "HISTORY RECALL/PRINT" SECTION

     This section is entered from the Main Menu. Selection of
this main menu choice results in the display of the History
Recall/Print Menu; this menu appears below:







 (Use Shift/PrtSc to put copy of History Recall/Print Menu here)
















     Display of recalled histories is similar to the display of
recalled slides. With each history recalled, the slide number of
the slide, the title line, the media and the subject are also
recalled. An option of (N)ext History, (P)rint the history, and
<ESC> to menu is always given.

     The choices from this menu have the following effects:

Entering A will permit recall of all histories, of every kind,
for a specific slide number. A question line will appear for the
entry of the slide number. 

Entering B will cause a recall of all histories of every kind,
filed for all slides.

Entering C will cause a recall of all histories of every kind for
a specific year. Remember: the year of a history is not
necessarily the year of a slide! The year of a history refers to
the year the submission/show/sale/gift/award actually occurred.

Entering D will cause a recall submissions only, either for all
slides filed or for a given year. The year refers to the year of
the submission, not the year of the slide. When this type of
recall is chosen, a question line appears asking whether you want
(A)ll or a specific year (yy). 

Entering E will cause a recall of submissions only, with a
specific key word or letter sequence occurring in the place
submitted to, or the competition. This is not a key word index
search and therefore is comparatively slow.

Entering F will cause a recall of shows only, either for all
slides filed or for a given year. The year refers to the year of
the show, not the year of the slide.  When this type of recall is
chosen, a question line appears asking whether you want (A)ll or
a specific year (yy).

Entering G will cause a recall of shows only, with a specific key
word or letter sequence occurring in the place of the show or the
show name. This is not a key word index search and therefore is
comparatively slow. 

Entering H, I, or J will cause a recall of sales, gifts, or
awards, respectively; you may recall all that have been filed for
all slides, or all for a specific year. The year refers to the
year of the sale, gift or award, not the year of the slide.  When
this type of recall is chosen, a question line appears asking
whether you want (A)ll or a specific year (yy).


                   "PRINT-OUT SLIDES" SECTION
                  "PRINT-OUT HISTORIES" SECTION

     The menus and question lines of this section are identical
to those of the RECALL SLIDES and RECALL HISTORIES sections. The
effect of choosing any option is a print-out of the chosen slides
or histories, on a printer. There is no screen display of the
slides or histories being printed. The printer will print the
maximum number of slides (and photo-facts if there are any for
the slides), or the maximum number of histories, on a page; when
there is insufficient space for the next slide or photo-fact, the
printer will form-feed to the next page. Printing of histories
pages in the same manner.
     Because of the different sizes of printer buffers, there is
no practical way to interrupt printing while it is in process
excepting turning off the printer.



                   "UTILITY PROGRAMS" SECTION

     No utility programs are provided with this version of
SLIDEMANAGER. Editing programs and re-indexing programs are
planned for future development. When you register your program
you will receive the most recent version of SLIDEMANAGER
including any utility programs that have been developed.

                     COMMENTS ARE REQUESTED

     Regardless of whether you register your program, your
comments and suggestions for program enhancement are invited. It
is our intention to further develop this program and other
programs so as to best serve the needs of those who use or can
use such programs; we can only learn that from you, the user or
potential user.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1390

     Volume in drive A has no label
     Directory of A:\

    FILE1390 TXT      1410   5-26-89   2:21p
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   5-26-89   2:25p
    MANUAL   BAT       154   5-26-89   2:26p
    PAGE     COM       325   1-06-87   4:21p
    SLIDEMAN TXT     26963  11-13-88   2:10p
    SLIDEMGR EXE    106610  11-18-88   9:35a
    VIEW     BAT        44   5-26-89   2:26p
            8 file(s)     136238 bytes
                           21504 bytes free
