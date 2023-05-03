---
layout: page
title: "PC-SIG Diskette Library (Disk #311)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0311/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0311"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "THE MOVIE DATABASE 1 OF 2 (ALSO 774)"

    Old movie buffs and videotape collectors -- here's a database of nearly
    2,000 older movie titles now available on videotape.  You can search
    each entry by title, MPPA rating, major cast members, writer, director,
    and other information.  As you add to your collection, you can add new
    movies to the list with a wordprocessor or text editor.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0311.TXT

{% raw %}
```
Disk No:  311                                                           
Disk Title: The Movie DataBase 1 of 2 (#774 Second)  (Disk 1 of 2)      
PC-SIG Version: S2.5                                                    
                                                                        
Program Title: Movie Database, The                                      
Author Version: 3.1                                                     
Author Registration: $15.00                                             
Special Requirements: A word processor to add data.                     
                                                                        
Old movie buffs and videotape collectors -- here's database of nearly   
2,000 older movie titles now available on videotape.  You can search    
each entry by title, MPPA rating, major cast members, writer, director, 
and other information.  As you add to your collection, you can add new  
movies to the list with a wordprocessor or text editor.                 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║          <<<<  Disk #311 THE MOVIE DATABASE (Disk 1 of 2)  >>>>         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To copy the documentation to your printer, type MANUAL (press enter)    ║
║                                                                         ║
║ To start the program type: MOVIES (press enter)                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## MOVIES.DOC

{% raw %}
```
					   Eric Balkan
					   Packet Press
					   14704 Seneca Castle Ct.
					   Gaithersburg, MD 20878



Operating instructions for MOVIES

   MOVIES is a utility program specifically designed for
doing simple name searches on The Movie Database.  Here are
some examples of its use:    (Note that you can type in several
search requests in one run of the program.)

A>movies
 Search request #1 (e.g. Winger and Nolte) (Null line to stop):
Lou Gossett Jr
	 - lists all movies with Lou Gossett, Jr. in the cast

 Search request #2 (Null line to stop):
Gossett
	 - same as above

 Search request #3 (Null line to stop):
Winger and Nolte
	 - finds the movie starring (Debra) Winger and (Nick) Nolte

 Search request #4 (Null line to stop):
MacLaine or McLaine
	 - useful when not sure of spelling; the same effect could be
	   obtained by using MacLaine in one search set and McLaine
	   in the next.

 Search request #5 (Null line to stop):
Pink Panther
	 - finds all movies with Pink Panther in the title

 Search request #6 (Null line to stop):
(Aust.)
	 - finds all Australian movies

 Search request #7 (Null line to stop):

	 - an ENTER by itself ends the input


    Note that each search request (i.e., each line of search criteria) is
independent.  Each movie entry that matches a particular search will be
saved in memory.  After the entire database has been examined, you will
have the opportunity to separately review all of the movies that have
matched each search.  (At that time, you may save your results to a file
or print them out.)

    Note also that the program is not case-sensitive; it treats upper and
lower case as the same.

    Up to 15 searches may be requested.

    Please note that this program is quite simple-minded.  If the second
term in a search statement is AND or OR, then the first and third terms
are used as search arguments.  If AND/OR is not found, then
the entire string is used as a search argument.  In other words:

ILLEGAL:      Debra Winger and Nick Nolte

LEGAL:	      Keaton and Allen
		 to find all Diane Keaton and Woody Allen movies.
		 (Also finds all Diane Keaton and Karen Allen movies.

    There is no "wild card" capability.

ILLEGAL:     D:xxLester

LEGAL:	     D:Richard Lester
		or
	     Richard Lester
		or
	     Lester
	       (though this last one will probably show more movies than
		you'd intended)


Installation Instructions

    Copy all files into a subdirectory on your hard disk or a 3 1/2 "floppy".

    If you have only 2-5 1/4" disks, make backup copies of the
distribution disks.  (Before running MOVIES, you'll need to key in:
	SET DIRS=A:;B:
at the DOS prompt.

    That's all you need do to install The Movie Database.

    For those interested, the DOS SET command with a DIRS parameter tells
MOVIES what drives or directories to search.  For instance:
	  C> set DIRS=C:\dir1;c:\dir2;.;d:\
Each directory name is separated by a semi-colon (;).  A period means
to search the current directory, whatever that happens to be.  The word
DIRS is used only by MOVIES; otherwise the syntax is mostly similar to that
of the DOS PATH command.  (The SET command allows an easy way for users to
tell programs about things that don't change very often.)  If you want to
get rid of directories that have been previously specified, just key in:
	     set DIRS=
    With no directories specified, MOVIES will only search one directory
-- the one implied or specified with the filename.



Principles of Operation

    The program starts with the first entry in the current disk directory
(unless DIRS has been set).  For each filename that consists of
two-letters, the file is opened and searched.  As each movie record is
processed, the information for each movie is built into a single field for
search purposes.  Matches are then done on character strings within this
entire field.  When a match is found, the entire entry for the movie is
displayed on the screen.  As each file is searched, the name of the file
will also be displayed.  There is a limit of 2000 hits for any one search
request or 2000 hits for all search requests.  A typical search will
take a minute or two on an XT or about 17 seconds on a 386 AT with a
fast disk.

Note:  This program will operate with any free-form text files whose records
are separated by two dots (..), with no record larger than 1000 bytes, whose
filenames consist of 2 letters, and where no file is larger than 32K bytes.
If you need something more flexible or something customized to your needs, let
me know -- I can probably whip up something.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0311

     Volume in drive A has no label
     Directory of A:\

    AL               18426  10-07-89   6:32p
    AZ               18625   9-17-89   1:15a
    BF               22079  11-11-89   8:45p
    BN               16540  10-29-89   1:32p
    BZ               14226   8-21-89   2:06a
    CF               11664  10-29-89  12:29p
    CN               13397  10-15-89   6:03p
    CZ               18324  10-29-89   1:32p
    DL               25728  11-02-89   1:44a
    DZ               11357   8-21-89   2:06a
    EZ               13672   8-26-89   4:55p
    FILE0311 TXT      1481  12-08-89   4:47p
    FL               17365  11-11-89   5:44p
    FZ               12093  10-01-89  12:57p
    GO       BAT        38   6-10-87  11:21a
    GO       TXT       540  12-08-89   1:47p
    GZ               20412  10-01-89  12:57p
    HZ               27930   9-30-89   2:35p
    IZ               15443  11-02-89   2:22a
    JZ                9169  11-04-89   2:56p
    KZ                8935   8-21-89  12:58a
    LOGO               270   1-13-88   6:15a
    MANUAL   BAT       147   5-09-88   6:06p
    MOVIES   DOC      4690   7-09-89   5:46p
    MOVIES   EXE     22567  11-02-89   1:59a
    README   1ST      5758  11-11-89   8:57p
    README   MOV      8096  10-01-89  12:54p
           27 file(s)     338972 bytes
                            9216 bytes free
