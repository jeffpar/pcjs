---
layout: page
title: "PC-SIG Diskette Library (Disk #349)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0349/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0349"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "LETUS A-B-C VOL 5"

    Letus A-B-C is a database in PC-FILE III format containing references
    to articles in six major PC oriented magazines, beginning with 1982.
    This disk of Letus A-B-C covers the following four magazines devoted
    to the IBM PC: Byte Magazine (BYTE), PC Magazine (PCMAG), PC World
    (PCW), and PC Tech Journal (PCTEC).
    
    See Disk #121 for further description.
    
    How to Start: It is very important to read the Documentation file
    (Letus.doc) located on this disk, either by screening it (entering
    TYPE LETUS.DOC at the A> and using CTRL-S to pause it) or accessing it
    with your word processor.  To run it, "boot-up" the DOS system and put
    PC-FILE system disk in drive A; enter PC-FILE <CR>.  PC-FILE will ask
    where the database is; you will have put Letus A-B-C Disk #5 in drive
    "B", so you will enter B:LETUS <CR>.  The various files on this
    diskette, corresponding to magazine and year, will be displayed on the
    screen for your selection.
    
    File Descriptions:
    
    PCTEC84B ???  PC TECH JOURNAL Apr-Jun 1984 reference files (4 files)
    PCMAG84B ???  PC Magazine Apr-Jun 1984 reference files (4 files)
    BYTE84B  ???  BYTE Magazine Apr-Jun 1984 reference files (4 files)
    PLOGO82  COM  Generates LETUS logo part 2
    LOGO84N5 COM  Generates LETUS logo part 1
    LETUS    DOC  Information about LETUS
    LETUS    BAT  Batch file for starting LETUS A-B-C
    FILES    TXT  Description of LETUS A-B-C
    PCW84B   ???  PC WORLD Magazine Apr-Jun 1984 reference files (4 files)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
San Francisco PC Users Group:     S O F T W A R E   L I B R A R Y
=================================================================
Volume 122:  LETUS A-B-C (Disk #5/6) referencing (1984) magazines

+---------------------------------------------------------------+
|  This public domain media material is made available to club  |
|  membership, for its use and distribution, by the following:  |
|                          LETUS A-B-C                          |
|  Database of articles & letters from magazines on the IBM PC  |
|                           R. Nelson                           |
|    (3790 El Camino Real, Suite 2006, Palo Alto, CA  94306)    |
|  If, after trial, one finds the software application useful,  |
|  SFpcUG encourages your becoming a registered user (donation  |
|  of $10 per disk is sought by the author of this database...  |
|  the user-supported concept is extended to include donations  |
|  by subscription to monthly releases [$15/month | $150/year]  |
|  or to quarterly releases [$20/quarter] of new Letus A-B-C).  |
+---------------------------------------------------------------+

This is a DOUBLE-SIDED diskette (requiring PC-FILE III: Disk #32)

Index#  Name           Description
                                                     +----------+
122.01  README  .122   YOU ARE READING IT            |   also   |
122.02  LETUS   .BAT   ^Start with this batch file <-+  prints  |
122.03  LETUS   .DOC   ^Documentation (13pp) manual  |  manual  |
122.04  LOGO84N5.COM   ^Introductory Screen #1       +----------+
122.05  PLOGO82 .COM   ^Introductory Screen #2
122.06  BYTE84B .HDR   ^    X
122.07  BYTE84B .INX   ^   /|\
122.08  BYTE84B .KWD   ^    |
122.09  BYTE84B .DTA   ^ L E T U S   A - B - C   ( # 5   of   6 )
122.10  PCMAG84B.HDR   ^ Literature Evaluation Table User Service
122.11  PCMAG84B.INX   ^    |
122.12  PCMAG84B.KWD   ^ ...an extensive cataloguing of articles,
122.13  PCMAG84B.DTA   ^ reviews and commentary focusing on IBM's
122.14  PCTEC84B.HDR   ^ Personal Computer using database PC-FILE
122.15  PCTEC84B.INX   ^    |
122.16  PCTEC84B.KWD   ^ +--+------------1-9-8-4----------------+
122.17  PCTEC84B.DTA   ^ | Byte / PC / Tech Journal / PC World  |
122.18  PCW84B  .HDR   ^ | (... see Disks #74-#76, #121, #123)  |
122.19  PCW84B  .INX   ^ +--+-----------------------------------+
122.20  PCW84B  .KWD   ^   \|/
122.21  PCW84B  .DTA   ^    X



```
{% endraw %}

## FILES349.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 349   Letus A-B-C (tm) #5 (volume 121)                  v1   DS
------------------------------------------------------------------------
 
Literature Evaluation Table  User Service -  a database of  articles and
letters from 2nd  quarter 1984 magazines  about IBM personal  computers.
It requires PC-FILE III  (may need to be  converted to new format  using
PC-FIX)  and  can  be  searched  using  keywords,  author names, article
titles, issue numbers, page numbers and descriptive text.
 
FILES    TXT description of LETUS A-B-C
LETUS    BAT Batch file for starting LETUS A-B-C
LETUS    DOC information about LETUS
LOGO84N5 COM generates LETUS logo part 1
PLOGO82  COM generates LETUS logo part 2
BYTE84B  HDR BYTE Magazine Apr-Jun 1984 reference files
BYTE84B  INX  "
BYTE84B  KWD  "
BYTE84B  DTA  "
PCMAG84B HDR PC Magazine Apr-Jun 1984 reference files
PCMAG84B INX  "
PCMAG84B KWD  "
PCMAG84B DTA  "
PCTEC84B HDR PC
```
{% endraw %}

## LETUS.DOC

{% raw %}
```









				  Letus A-B-C (tm)

		      LITERATURE EVALUATION TABLE USER SERVICE

		       A Database of Articles and Letters From
		       Magazines About IBM Personal Computers



			   (C)Copyright 1984 by R. Nelson































	R. Nelson
	3790 El Camino Real, Suite 2006
	Palo Alto, CA 94306

	(415) 493-4306







							       Rev. 6/1/84


-







				  TABLE OF CONTENTS







	    INTRODUCTION................................................ 1
	    LETUS A-B-C DOCUMENTATION AND DISKETTE BACKUP............... 2
	    PC-FILE: GENERAL INFORMATION................................ 2
	    GETTING STARTED WITH LETUS A-B-C............................ 3
	    LETUS A-B-C FILE NAMES...................................... 3
	    TABLE OF DISKETTE FILES: MAGAZINES/ISSUES................... 4
	    LETUS A-B-C RECORD DEFINITION............................... 5
	    CONTENTS OF EACH RECORD..................................... 5
	    KEYWORD LISTS............................................... 7
	    RATIONALE FOR A SINGLE KEYWORD FIELD........................ 7
	    TIPS ON SEARCHING........................................... 8
	    DISCLAIMER.................................................. 9
	    PERMISSION TO COPY.......................................... 9
	    THE USER-SUPPORTED CONCEPT.................................. 9
	    CONCERNING FUTURE LETUS A-B-C DATABASES.....................10



































-


			   LETUS A-B-C (tm) USERS GUIDE 	   Page 1.




	INTRODUCTION.

	Letus A-B-C is a database of articles and letters from magazines
	about IBM Personal Computers.  It was created using PC-File III, a
	general purpose "Data Base Manager" program written and distributed
	by Jim Button under the "user-supported software" concept.  Togeth-
	er with PC-File III (or earlier versions), the Letus A-B-C database
	provides the IBM PC user with a tool for easily performing litera-
	ture searches at a very nominal cost in one's office or home.

	The initial release of Letus A-B-C covers the period 1982 through
	1983 for the following five magazines devoted to the IBM PC:
	Softalk (SOFT), Personal Computer Age (PCAGE), PC Magazine (PCMAG),
	PC World (PCW), and PC Tech Journal (PCTEC).  The database normally
	comes on three double-sided, double density diskettes, with all of
	1982 on a single diskette and with 1983 distributed on the other
	two.

	An attempt was made to include every article of each magazine, even
	when the authorship at times was unclear (e.g., magazine editor-
	ials, promotionals, etc.).  Generally each magazine provides its
	own index on a periodic basis, most typically at the end of the
	year or end of the volume, with articles categorized by Subject,
	Author, and Title.  The Letus A-B-C database extends this index
	table method by providing a "keyword" field that can quickly be
	searched with PC-File.	For example, one can search for all of the
	articles that make reference to a particular product or idea (e.g.,
	PC-File, User-Supported Software, etc.).  However, since each mag-
	azine index is by itself quite useful, we have included a "record"
	for each in the Letus A-B-C database (keyword=index).

	Letus A-B-C also contains many "Letters to the Editor", "Questions
	and Answers", "Helpful Hints", etc...........those things that are
	so hard to find when you really need them!  Apropos to this discus-
	sion, the reader might find it amusing that during the period of
	time when we were busily creating Letus A-B-C, a glass of soda pop
	was accidently poured into the keyboard.  A quick PC-File/Letus
	A-B-C search on another PC for the keyword "keyboard" unearthed a
	letter telling how to take the IBM PC keyboard apart, clean it, and
	put it back together again.  Very timely indeed!

	Inclusion of "letters" into the database required a certain amount
	of subjectiveness on our part.	Our general philosophy has been to
	include only those letters that contain information "of value", ex-
	amples being:  maintenance and repair tips, do-it-yourself items,
	bugs and corrections to software and hardware, patches to word pro-
	cessors, programming helps, benchmark calculations, etc.  What we
	purposely tried not to include were:  complaints (or compliments)
	about products, comments on mistakes made in review articles, re-
	buttals, and gossip.








-


			   LETUS A-B-C (tm) USERS GUIDE 	   Page 2.




	In addition to the keyword field and the identification fields
	(i.e., author, title, magazine issue, and page), we have included
	three lines that give a general, terse description of the article.
	We have NOT commented on the worth or value of any product or idea
	in these lines.  We do give the names of products and, whenever
	possible, the manufacturer since most everybody reads these mag-
	azines for product reviews (over half the articles that appear in
	the IBM PC literature seem to be reviews (or overviews) of hardware
	and software products).


	LETUS A-B-C DOCUMENTATION AND DISKETTE BACKUP.

	If you haven't already printed this document, please do so before
	trying to access the Letus A-B-C database with PC-File (or with any
	other program for that matter).  Instructions for printing the doc-
	umentation are given on the labels of the diskettes mailed by us.
	However, you might have a copy of Letus A-B-C that has been copied
	for you by a friend or club, so we will repeat the instructions:

	     1.  "Boot-up" the DOS system and put Letus A-B-C Disk #1 in
		 drive "A".

	     2.  Type A:LETUS (no spaces).  Press the "ENTER" key (do not
		 enter the quote marks, of course).

	We recommend that you read this document in order to gain some
	insight into the organization of the database, as well as obtaining
	tips on search methods.  YOU SHOULD ALSO MAKE BACKUP COPIES OF ALL
	THE LETUS A-B-C DISKETTES AND YOU SHOULD PLACE "WRITE-PROTECT" TABS
	ON THEM (assuming, of course, that you are only going to be search-
	ing from these diskettes, not writing onto them).


	PC-FILE: GENERAL INFORMATION.

	In order to search the Letus A-B-C database most effectively, we
	recommend using PC-File III, although earlier versions will work
	almost as well (differences that affect searching on Letus A-B-C
	will be discussed later on).  One can obtain a copy of PC-File III
	directly from Jim Button by sending a $45 check to:

				  Jim Button
				 P.O. Box 5786
			       Bellevue, WA 98006

	[MasterCharge and Visa are accepted (telephone: (206) 746-4296)].
	The remainder of this documentation assumes that you are reasonably
	familiar with one of the versions of PC-File.  [If not, then at
	least study "FINDING A RECORD" from the PC-FILE USERS GUIDE before
	proceeding any further].



	-------------------------------------------------------------------
	[Note:	The authors wish to express their thanks to Jim Button for
		several helpful discussions and his general support].

-


			   LETUS A-B-C (tm) USERS GUIDE 	   Page 3.




	GETTING STARTED WITH LETUS A-B-C.

	The following is intended to be used by those people with two-drive
	systems.  If you have a single-drive system, it might be useful to
	refer to the PC-FILE USERS GUIDE (see "A NOTE FOR USERS WITH ONLY 1
	DISK DRIVE").

	Put the PC-File operation diskette in one of the disk drives (this
	is typically the "A" drive) and enter the drive name followed by a
	colon.	Thus, if the diskette is in the left-side drive, type "A:"
	and press "ENTER" (do not enter the quote marks).  You have now
	established the "default" drive for your system and you should see
	the A> prompt on the screen.

	Next, insert one of the Letus A-B-C diskettes into any other drive,
	such as drive "B".

	Then type "PC-FILE" and press "ENTER".  You are now under the con-
	trol of PC-File.  When prompted with the question "Which drive
	(A-H) for the Database:", enter the letter corresponding to the
	disk drive where the Letus A-B-C diskette has been inserted ("B" in
	this example).	The various files on this diskette, corresponding
	to magazine and year, will be displayed on the screen for your
	selection, and you may proceed with PC-File at your discretion.

	However, if you are confused at this point, or if this is your
	first attempt at using PC-File, it is highly recommended that you
	study the appropriate documentation for that program before pro-
	ceeding.  You may push the "Esc" key one or more times in order to
	get back to DOS.  IN ANY CASE, YOU SHOULD MAKE SURE THAT YOU HAVE
	PROVIDED YOURSELF WITH SOME PROTECTION BY PLACING "WRITE-PROTECT"
	TABS ON YOUR LETUS A-B-C DISKETTES, AND BY MAKING BACKUP COPIES.


	LETUS A-B-C FILE NAMES.

	Each of the Letus A-B-C diskettes contains three files (per mag-
	azine) that are used by PC-File, and are of the form:

	magazineyear.HDR - Contains information on the field names/lengths,
			   where "magazineyear" mnemonically identifies
			   magazine and year (e.g., SOFT83) [note: suffixes
			   "A" and "B" divide the year (PC Magazine only)].

	magazineyear.INX - The index for this file of the database.

	magazineyear.DTA - The actual data for this file of the database.

	In addition to this document (LETUS.DOC), which is on Disk #1 only,
	there are three files (per diskette) that relate to the Letus A-B-C
	screen-logo or control the printing of the documentation
	(LETUS.BAT, LOGOyear.COM, and PLOGOyear.COM).  Finally, there are
	files containing lists of keyword strings (magazineyear.KWD)
	corresponding to each "magazineyear.DTA" file (we will discuss
	these later on).



-


			   LETUS A-B-C (tm) USERS GUIDE 	   Page 4.




	TABLE OF DISKETTE FILES: MAGAZINES/ISSUES.


	Disk #	Filename.Ext  Bytes  Magazine  Year  Mo./Vol.	     #Rec.
	-------------------------------------------------------------------
	  1	SOFT82.DTA    22784  Softalk   1982   Jun/1	       55
		      .INX     1280		      thru
		      .HDR	128		      Dec/1
		      .KWD     1450
	       PCMAG82.DTA    91392  PC        1982   Feb-Mar/1(1)    222
		      .INX     4992		      thru
		      .HDR	128		      Dec/1(8)
		      .KWD     5724
	       PCAGE82.DTA    48256  PC Age    1982   Jan/1.1	      116
		      .INX     2688		      thru
		      .HDR	128		      Dec/1.9
		      .KWD     2848
		BYTE82.DTA     2560  Byte      1982   Jan/7(1)		5
		      .INX	256		      thru
		      .HDR	128		      Dec/7(12)
		      .KWD	128
	-------------------------------------------------------------------
	  2	SOFT83.DTA    94208  Softalk   1983   Jan/1	      230
		      .INX     5120		      thru
		      .HDR	128		      Dec/2
		      .KWD     5738
	      PCMAG83A.DTA    80384  PC        1983   Jan/1(9)	      195
		      .INX     4352		      thru
		      .HDR	128		      Jun/2(1)
		      .KWD     6713
	       PCAGE83.DTA    88960  PC Age    1983   Jan/2.1	      216
		      .INX     4864		      thru
		      .HDR	128		      Dec/2.12
		      .KWD     6164
	-------------------------------------------------------------------
	  3	 PCW83.DTA    95104  PC World  1983   Apr/1(1)	      231
		      .INX     5120		      thru
		      .HDR	128		      Dec/1(10)
		      .KWD     6830
	      PCMAG83B.DTA   117120  PC        1983   Jul/2(2)	      285
		      .INX     6400		      thru
		      .HDR	128		      Dec/2(7)
		      .KWD     8162
	       PCTEC83.DTA    22528  PC Tech   1983   Jul-Aug/1(1)     53
		      .INX     1280  Journal	      thru
		      .HDR	128		      Nov-Dec/1(3)
		      .KWD     1997
		BYTE83.DTA    18432  Byte      1983   Jan/8(1)	       43
		      .INX     1024		      thru
		      .HDR	128		      Dec/8(12)
		      .KWD     1518
	-------------------------------------------------------------------






-


			   LETUS A-B-C (tm) USERS GUIDE 	   Page 5.




	LETUS A-B-C RECORD DEFINITION.

	Each record (i.e., magazine article or letter) in the Letus A-B-C
	database consists of nine fields as follows:

			 Field No.   Field Name   Length
			 ---------   ----------   ------
			     1	     keyword(s)     65
			     2	     author(s)	    45
			     3	     title	    65
			     4	     magazine	     8
			     5	     issue	    25
			     6	     page	     4
			     7	     1st line	    65
			     8	     2nd line	    65
			     9	     3rd line	    65


	A typical example is shown below:

	keyword(s)  company,interview,Microsoft,MS-DOS
	author(s)   A. Tommervik
	title	    "EXEC Microsoft: Young, Old, and Way Ahead"
	magazine    Softalk
	issue	    82/11 Nov v.1
	page	      14
	1st line    Interview with the management of Microsoft, the
	2nd line    company that produced MS-DOS (PC-DOS for the
	3rd line    IBM PC).


	CONTENTS OF EACH RECORD.

	The amount of data that can be placed in each field is limited to
	the "lengths" defined above.  However, PC-File allows the user to
	change these limits (to a maximum field length of 65) or even to
	add and delete fields.	Our choice of fields and lengths was found
	to be adequate for the majority of articles.  On occasion a title
	was too long and it was simply continued into the "1st line", as
	shown in the following example:

	keyword(s)  general,editorial,performance
	author(s)   W. Fastie
	title	    DIRECTIONS - "On the Matter of Performance: What You...
	magazine    PC Tech
	issue	    83/09 Sep-Oct v.1 n.2
	page	      10
	1st line    ...See May Not Be What You Get".  General editorial.
	2nd line
	3rd line

	The magazine, issue, and page were placed in separate fields in
	order to facilitate sorting and merging.  As shown above, the date
	of issue was formatted as "yy/mm",  with additional information
	such as volume, number, and actual month(s) included afterwards.



-


			   LETUS A-B-C (tm) USERS GUIDE 	   Page 6.




	It was fairly easy, therefore, to sort each set of magazine files
	the way they are presented on the diskettes.  Namely, within each
	magazine-year the records (articles) are in descending order by
	month and ascending order by page number within each month.

	It was anticipated that many users of Letus A-B-C will want to con-
	catenate the various magazine files into one file on a hard disk
	using the merging facilities of PC-File.  After doing this, the
	data can then be re-sorted in any manner the user desires.  We
	elected to group the database into individual files of less than
	160KB so that they could be used on systems with single-sided
	drives, as well as with RAM-drives (for speed).  We sorted first by
	month (descending) and then by page (ascending) because one gener-
	ally wants the "latest" information on a given subject.

	In many cases, as shown in the example above, a "monthly column"
	has been indicated in the title field with upper case letters.
	Other examples that will appear in the database include THE HELP
	SCREEN, PC TUTOR, STAR-DOT-STAR, USER-TO-USER, TECH NOTEBOOK, etc.

	A small number of records have no data in the commentary lines.
	In most of these cases the title adequately describes the article.
	Sometimes, however, the article is simply too general or vague to
	warrant any description.

	Quite often a magazine article will contain one or more "insert"
	articles, sometimes written by others.	We have included most of
	the inserts as separate records and have referenced the parent
	article in the insert, and vice versa.	By cross referencing in
	this manner, one is given the opportunity to see articles that
	relate to the parent subject, but might otherwise be missed in a
	search on a particular keyword string.	The following two articles
	serve to illustrate this point:

	keyword(s)  PC-File FAST-SORT,Info-SORT,DBM,bubble,review,insert
	author(s)   J. M. Woram
	title	    "A Review - Of Sorts"
	magazine    PC Mag
	issue	    83/10 Oct v.2 n.5
	page	     549
	1st line    Review of FAST-SORT, Info-SORT, and PC-File.  Also, a
	2nd line    simple bubble sort program (BASIC) is listed.  [Insert
	3rd line    entitled "Survival of the Fittest Program" by J.Button]

	keyword(s)  user-supported,software,free,market,business,money
	author(s)   J. Button
	title	    "Survival of the Fittest Program"
	magazine    PC Mag
	issue	    83/10 Oct v.2 n.5
	page	     554
	1st line    Insert article in "A Review - Of Sorts" by J. M. Woram,
	2nd line    describes the concept of `user-supported software': a
	3rd line    free-market approach to selling software.

	(The connection between these two articles should be obvious).



-


			   LETUS A-B-C (tm) USERS GUIDE 	   Page 7.




	KEYWORD LISTS.

	On each Letus A-B-C diskette there are files, identified by
	"magazineyear.KWD", that contain a sorted list of keyword-strings
	corresponding to the various "magazineyear.DTA" files.  We have
	included these files so that the user can determine whether or not
	a particular keyword that is being looked for actually exists in
	that database file.  The lists also provide the user with "ideas"
	for searching on a particular subject.

	In order to create a list on your printer of any one of these
	keyword files, do the following:

	  1.  Put the appropriate Letus A-B-C diskette into drive "d"
	      (i.e., "A", "B", "C", etc.).

	  2.  Set up your printer.

	  3.  Type "COPY d:magazineyear.KWD PRN" and press the "ENTER" key.
	      (e.g., COPY A:PCMAG83A.KWD PRN if you have Disk #2 in the "A"
	      drive and you want the keyword list for PCMAG83A).


	THE RATIONALE FOR A SINGLE KEYWORD FIELD.

	Selecting "good" keyword-strings for an article or letter can be a
	very subjective thing to say the least.  The task is made somewhat
	easier if the database management program has the capability of
	searching on substrings (i.e., it is "tree-structured").  We could
	have set up this kind of system with PC-File, more or less, by in-
	cluding one or more sub-keyword fields.  The disadvantages of this,
	however, are:

	   1.  The database would take up more memory.
	   2.  Multiple field searching would take more time.
	   3.  Using the FINd command from the "MASTER MENU SCREEN" of
	       PC-File would have required multiple passes through the
	       database, which would have been tedious as well as slow.
	   4.  The alternative approach of using the LISt command, to-
	       gether with the "multiple comparison" capabilities of
	       PC-File, would also have been slow.

	The single keyword line system that we chose requires that the key-
	words be chosen rather carefully.......but the system is reasonably
	fast and the user can, as a result, keep trying various words in
	order to find an article.  If the user is not successful at first,
	then the keyword lists may prove to be of value.

	In any case, the user is at liberty to modify the Letus A-B-C data-
	base or to clone it to some other form (e.g., additional keyword
	lines or a personal keyword system).







-


			   LETUS A-B-C (tm) USERS GUIDE 	   Page 8.



	TIPS ON SEARCHING.

	1.  It is better to choose a subset of a word.	For example, when
	    looking for the word "printer", use "print" instead.

	2.  Be aware of the fact that many of the word-strings in the com-
	    puter world are composite strings made up of a mixture of upper
	    and lower case alphabet letters, plus numbers, plus funny sym-
	    bols, plus super- and subscripts, plus..........etc. etc. etc.

	3.  PC-File III treats upper and lower case equally.  This is very
	    important since words like "PC-TALK" and "PC-talk" will both be
	    found in a search for "PC-Talk".

	4.  If you are using an earlier version of PC-File, you will need
	    to be aware of the various upper/lower case spellings of some
	    words (check the appropriate keyword list carefully).

	5.  If you cannot find an article by searching the keyword field,
	    try searching in the 1st, 2nd, or 3rd lines.

	6.  The "letters" contain many items, probably too many to make a
	    keyword list even feasible at times.  In order to make it
	    fairly easy to locate these types of records, we have used the
	    keywords "help" and "Q&A".  Furthermore, the word "help" is
	    always left-justified in the field so that a much faster search
	    can be made (i.e., compared to searching on ">help").

	7.  The strings "help" and "Q&A" also occur in the keyword fields
	    of the regular articles, as well as in the "letters".  The only
	    advantage for searching on "help" instead of ">help" is that it
	    significantly speeds up the search.  If you only are looking
	    for a "Letter to the Editor" or "Questions and Answers" column,
	    you can take advantage of the increase in speed.

	8.  Be aware of the fact that an article (usually a "letter") can
	    span several records.  For example

	keyword(s)  help,Q&A,Spanish,symbol,snow,color,SYSTEM,Apple,DIF,file
	author(s)   M. Zachmann
	title	    PC TUTOR
	magazine    PC Mag
	issue	    83/12 Dec v.2 n.7
	page	     636
	1st line    1)Spanish symbol/NEC printer, 2)Avoiding "snow" with color
	2nd line    adapter, 3)Getting BASIC back after issuing SYSTEM, 4)DIF
	3rd line    file interchange/Apple & IBM... continued to next record..

	keyword(s)  help,Q&A,4164,chip,speed,calendar,computer log,NEC,print
	author(s)   M. Zachmann
	title	    PC TUTOR
	magazine    PC Mag
	issue	    83/12 Dec v.2 n.7
	page	     636
	1st line    ...cont. from previous record..5)4164 chip speed, 6)Obtain-
	2nd line    ing day of week from calendar date, 7)Program to keep log of
	3rd line    computer usage, 8)Overprinting underlines/NEC printer.


-


			   LETUS A-B-C (tm) USERS GUIDE 	   Page 9.




	DISCLAIMER.

	This database and associated documents were developed solely by the
	Authors, Walter Ralph Nelson and Randall Eric Nelson.  They make no
	warranty, expressed or implied, or assume any liability or respon-
	sibility for accuracy, completeness or usefulness of any informa-
	tion, apparatus, product or process disclosed, or represent that
	its use will not infringe privately-owned rights.  Mention of any
	product, its manufacturer, or suppliers shall not, nor is it in-
	tended to, imply approval, disapproval, or fitness for any partic-
	ular use.  A royalty-free, non-exclusive right to use and dissem-
	inate this database and associated documents for any purpose what-
	soever is expressly reserved to the Authors.  In no event will the
	Authors be liable to you for any damages, including any lost pro-
	fits, lost savings, or other incidental or consequential damages
	arising out of the use of or inability to use this database, even
	if the Authors have been advised of the possibility of such dam-
	ages, or for any claim by any other party.


	PERMISSION TO COPY.

	Clubs and other non-profit organizations are granted permission by
	the authors to freely copy this database and documentation and
	share it with their members, so long as:

	1.  No price is charged for the database or documentation.  However,
	    a distribution cost may be charged for the cost of the diskette,
	    so long as it is not more than $10 total.

	2.  Club members are informed of the user-supported concept and
	    encouraged to support it with their donations.

	3.  The database or documentation are not modified in any way and
	    are distributed together.


	THE USER-SUPPORTED CONCEPT.

	User-supported software is an experiment in distributing computer
	programs and databases, based on these beliefs:

	1.  That the value and utility of software is best assessed by the
	    user on his/her own system.

	2.  That the creation of personal computer software can and should
	    be supported by the computing community.

	3.  That copying of programs and databases should be encouraged,
	    rather than restricted.

	Anyone may request a copy of a user-supported program or database
	by sending blank, formatted disk(s) to the author.  An addressed,
	postage-paid return mailer must accompany the disk(s) (no excep-
	tions, please).  A copy of the program or database, with documen-
	tation on the disk(s) will be sent by return mail.  The program


-


			   LETUS A-B-C (tm) USERS GUIDE 	   Page 10.




	will carry a notice suggesting a contribution to the author.
	Making a contribution is completely voluntary on the part of each
	user.  Free distribution and voluntary payment for its use elimi-
	nates costs for advertising and copy protection schemes.

	Users obtain quality software at reduced cost.	They can try it out
	before buying, and do so at their own pace and in the comfort of
	their own home or office.  The best products will survive, based
	purely on their quality and usefulness.

	Please join the experiment.

	If you believe in these ideals, your contribution is solicited to
	help make them work.


	+-------------------------------------------------------------------+
	|								    |
	|  You are encouraged to copy and share this database with others.  |
	|	      your contribution will be appreciated.		    |
	|		  ($10 PER DISKETTE is suggested)		    |
	|								    |
	|			    R. NELSON				    |
	|		  3790 El Camino Real, Suite 2006		    |
	|			Palo Alto, CA 94306			    |
	|								    |
	|-------------------------------------------------------------------|
	|      However, regardless of whether you make a contribution,	    |
	|	 you are encouraged to copy and share this database.	    |
	+-------------------------------------------------------------------+



	CONCERNING FUTURE LETUS A-B-C DATABASES.

	1.  It is our intention to provide future updates to Letus A-B-C
	    under the USER-SUPPORTED SOFTWARE concept (on an annual or semi-
	    annual basis).

	2.  In addition, because we have received requests for such a service,
	    the Letus A-B-C database for 1984 will be automatically mailed to
	    anyone who subscribes with a prepayment as follows:

		Monthly diskette..............$15/month (or $150/year)
		Quarterly diskette............$20/quarter

		(We supply the diskettes, mailers, and postage).




	---------------------------------------------------------------------
	For those of you who want to initiate payment through your company
	accounting system, or wish to have an invoice for tax purposes, the
	following invoice is provided.
	---------------------------------------------------------------------


-




			       -------------------
				     INVOICE
			       -------------------







	Purchased from:    R. NELSON
			   Letus A-B-C
			   3790 El Camino Real, Suite 2006
			   Palo Alto, CA 94306



	 DATE:	   /   /			    Invoice No. 8401-001
	-----------------------------------------------------------------
	 PRODUCT				QTY	 EACH	   TOTAL
	-----------------------------------------------------------------

	 Letus A-B-C database diskettes 	 3	 $10	   $30 *
	 for 1982 & 1983 (covering Byte,
	 Softalk, PC Tech Journal, PC Age,
	 PC World, and PC Magazine).



				       ----------------------------------
					PLEASE PAY THIS AMOUNT =>  $30 *
	-----------------------------------------------------------------
					* $40 if we provided diskettes,
					  mailer, and postage.


		  +------------------------------------------+
		  | Please make check payable to:  R. NELSON |
		  +------------------------------------------+



	Note:  You may retain this Invoice for your tax records.
	       Payments sent from within the State of California
	       require an additional 6% to cover state and local
	       sales tax (License No. SR GH 19-690581).















-

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0349

     Volume in drive A has no label
     Directory of A:\

    BYTE84B  DTA      8576  10-02-84   1:32p
    BYTE84B  HDR       128   8-26-84   6:39p
    BYTE84B  INX       512  10-02-84   1:32p
    BYTE84B  KWD       787  10-03-84  12:09a
    FILES    TXT      2560   3-04-85  11:34a
    FILES349 TXT      1024   5-23-85   2:10p
    LETUS    BAT        47  10-03-84  10:13p
    LETUS    DOC     28117   6-01-84   1:53a
    LOGO84N5 COM      2132  10-03-84   9:43p
    PCMAG84B DTA    179200  10-02-84  11:01p
    PCMAG84B HDR       128   6-29-84   9:45p
    PCMAG84B INX      9728  10-02-84  11:01p
    PCMAG84B KWD     14045  10-03-84  12:06a
    PCTEC84B DTA     24960   9-30-84  11:36p
    PCTEC84B HDR       128   9-13-84  11:15p
    PCTEC84B INX      1408   9-30-84  11:37p
    PCTEC84B KWD      2142  10-03-84  12:03a
    PCW84B   DTA     26624  10-02-84   1:35p
    PCW84B   HDR       128   8-14-84   9:01p
    PCW84B   INX      1408  10-02-84   1:35p
    PCW84B   KWD      3187  10-03-84  12:07a
    PLOGO82  COM      2132   1-28-84   5:45p
           22 file(s)     309101 bytes
                               0 bytes free
