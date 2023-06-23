---
layout: page
title: "PC-SIG Diskette Library (Disk #3317)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3317/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3317"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```
(readme.doc)

		    MAPIT - Your Graphics Notepad on the World
    

    MAPIT is a user-extensible world map of the detail normally found 
    only in mainframe databases.  Scientist or salesman, MAPIT enables 
    you to investigate, analyze, organize, record, track, reproduce, and 
    communicate your graphical and textual data and concepts in pictures 
    as well as words.  A powerful vector-based reference tool, MAPIT 
    contains a wealth of information and is just plain fun to use.  

    Create private databases to distribute your own graphic and textual 
    data to co-workers and friends with lines and figures inserted to 
    within 200 feet ANYWHERE IN THE WORLD.  Seven scalable Stroked Text 
    faces, map or screen relative, and Hidden Text collapsing to small 
    markers support your text needs.

    The World Database, which includes coastlines, lakes, rivers, canals, 
    reefs, saltflats, national boundaries, and US state and Canadian 
    provincial borders, supports zooms of 750 or more without degradation.  
    Also included are 6,000 international cities as well as 20,000 US 
    cities with 1990 census population figures.
    

Quick Start:
    
    MAPIT, as a compute and disk-intensive application requires, an IBM 
    386SX (or more powerful) compatible computer, 512KB RAM, an EGA or 
    VGA display, and a MOUSE.
    
    Install a Mouse.

	MAPIT REQUIRES A MOUSE.  Unless you have a mouse physically 
	attached to your computer AND have installed its driver, you
	will be unable to operate MAPIT and will have to reboot your
	computer if you try.

	Install the mouse driver by issuing the following command
	at the command prompt.

		> "path"\MOUSE

	where "path" is the path to the directory containing the mouse
	driver.

	Place this command in your AUTOEXEC.BAT so MOUSE is always 
	available.
	

    The shareware version of MAPIT is distributed as a two disk set.  Both
    disks must be loaded onto your hard drive before beginning.

    Prepare MAPIT Directory.  (Optional)

	You probably want to create a directory on your hard drive to
	hold MAPIT's programs and data.

		> mkdir  MAPIT
		> cd	  MAPIT

    Load the Data.

	From the destination directory of your hard drive and with
	MAPIT Disk 1 in your floppy drive, issue one of the following
	two commands.

		> A:install		    (Assumes floppy drive A:)
		     or
		> X:install  X:   (Uses floppy drive X:)

	The install program will copy MAPIT to your hard drive, 
	prepare the data files, and, unless you Control-C when given 
	the opportunity at the end, will execute MAPIT for you.


    Running MAPIT.

	MAPIT will run this shareware package by entering 
	
		> MAPIT  DEMO

	Ing general, MAPIT is started from the command line by entering

		> MAPIT  data_file_name


	  where
		data_file_name  -  the name of any .mp3 format data file,
				   eg: demo.mp3

	MAPIT looks for three other files at startup time.

		std.fnt  -  The standard font file.  Without it, stroked
			    text doesn't work.

		std.fig  -  The standard figures file.  Normally this file
			    is user-created by EDITFIG and contains the
			    user's custom figures.  Without it, figures
			    won't be displayed.

		extended.mp3	  -  The user's private database.  If none
				 exists, a zero length file is created.
			    Adding lines, figures, and text expands it.

    Using the Mouse

	Some, may at first be confused by the two distinct ways the 
	mouse is used.

	DRAGGING  -  Some selections (eg. Zoom by Corners) require 
	depressing the left button to establish the starting corner or
	position and, WITH THE BUTTON STILL DEPRESSED, dragging the
	cursor to the second corner or position to be measured BEFORE
	RELEASING THE BUTTON.	 If you press and release at the same
	point when a drag is required, nothing happens.

	POINT & CLICK	 -  Other activities, notably those requiring 
	one-at-a-time point selections, look for the depression and 
	release of the left mouse button without any intervening 
	movement.  Sometimes use of the RIGHT mouse button is required
	to signal the end of multiple point entry.


    Tuning Your System.

	MAPIT requires a properly tuned high performance computer.  The
	most significant performance boost you can give is by using disk 
	cache software such as SMARTDRV which comes with DOS 5 and WINDOWS. 
	There are other good disk caches out there, too.

	The disk cache must be of adequate size, at least 500K, if it is
	to be of any use.  With a disk cache, you can reduce the buffers=
	statement in your CONFIG.SYS to a low as 3, some say.
	
	MAPIT's .mp3 data files are LARGE, but they are efficiently
	designed and already compact.	 Data compaction drivers such as 
	STACKER will NOT gain you appreciable space and will SLOW your
	disk system (to about one half).  Do NOT place MAPIT's data files 
	on compacted drives without first verify performance loss versus 
	space savings for your hardware/software combination.

	MAPIT is designed to display graphics adequately without a math
	coprocessor.  Stroked text, however, which can be oriented at any 
	angle, is compute intensive and will respond positively to the 
	addition of a math chip.


MAPIT Explained:

    MAPIT is a professional-level mapping application which includes a 
    detailed database of the world and programs to interact with and 
    supplement that database.  You have the shareware version of MAPIT, 
    a truncated version designed to give you the feel of MAPIT's full 
    capabilities in an affordable format.  

    Registered versions of MAPIT come in a range of mapping detail to
    fit a variety of users' mapping needs, hard disk limitations, and 
    pocketbooks.  The full MAPIT requires upwards of 30 MB of disk 
    storage and is shipped on multiple 1.44 MB 3.5" floppies.

    The different detail options of MAPIT's database can most easily
    be explained in terms of zoom factor.  The initial MAPIT display
    including the whole earth is defined as zoom factor 1 (shown in
    the lower left corner of the screen).  Zooming in to half that 
    distance changes the zoom factor to 2.  Zooming in on the US so it
    fills the whole screen, for instance, requires a zoom factor of
    approximately 5.  
    
    The world database included with shareware MAPIT holds resolution
    to a zoom factor of approximately 6.  Zoom much closer than that
    and you begin to notice the jaggies - a decided compromise in 
    object detail.  The one area of the globe which has been supplied 
    as an example of full detail is the island of Cuba, just south of
    the United States off the coast of Florida.  You should be able
    to zoom in to a factor of 750 or so before lack of detail becomes
    an issue.  At Cuba's latitude, this means the entire screen width 
    covers a distance of 31 miles (as opposed to 24,857 miles at zoom
    factor 1).	As noted above, to provide this level of detail every-
    where in the world requires a significant amount of disk space.  

    Not everyone needs or wants to devote resources to supporting the
    maximum available detail world-wide.  MAPIT's Base World Data level 
    supports a global zoom level of 24 and requires more than 3 MB of disk 
    space.  Those wanting maximum detail are free to order from the six 
    Detail packages, divided roughly by continent.  See REGISTER.DOC
    for particulars.


Included Programs:

    MAPIT

	The central display program for working with the voluminous 
	MAPIT database.  Detailed instructions are beyond the scope of
	this file.  Turing the system with the MAPIT Demo is the best way
	of learning its capabilities.

		> copy  MAPITDEM.MP3	  EXTENDED.MP3
		> MAPIT  DEMO

	The copy step should have been done by the install batch file,
	but the preceding example shows that EXTENDED.MP3 can be reloaded
	fresh with the MAPIT Instructional Demo if need be.  Run MAPIT
	with the shareware database DEMO.MP3 and follow the instructions
	in Hidden Text 1 (Press Left Mouse button in triangle 1).

	MAPIT's binary .mp3 data files can be combined together with the
	binary copy command:

		> copy /b FILE_1.MP3+FILE_2.MP3...  BIG.MP3
			or
		> copy /b FILE*.MP3  BIG.MP3

    FIGEDIT

	The figure creation/editing program.  This program operates on
	files ending in the extension .FIG.  It is in rather rough shape,
	without documentation, and offered with an apology.  Fool around
	with it and you'll figure out how to make and store figures.
	The menu items along the top row are really there - just click
	on them to make them reappear.

	There is a limit of 100 entities per figure (the count is on
	the bottom status line) with no way to delete bad entities!

	The key is to KEEP FIGURES SIMPLE.  Detail which looks good at
	full screen is clutter at 10%.  Here's where artistic talent is
	invaluable.

	.FIG files can be concatinated with the binary copy just as 
	.MP3 files.

    MP1TOMP3

	A conversion utility designed to convert straight text files 
	containing strings of latitutde/longitude pairs as might be 
	generated from a CAD system or digitizer into .MP3 file format.
	.MP3 files appear to be about 1/3 the size of their .MP1 counter-
	parts.
	
	Usage:
		MP1TOMP3  data_file  [/options]

	where
		data_file  -	  the name of a .mp1 file to be converted
				 to .mp3 format.  A .mp3 file of the same
				 name is created.
	options:
		/id	       -  Region Id stored in the region header.     

		/layer     -	  Layer assignment stored in entity header.
				 Defaults to layer 0.

		/minzoom   -	  Min zoom factor stored in entity header.
				 Defaults to 0.

		/maxzoom   -	  Max zoom factor stored in entity header.
				 Defaults to 0.

	The .mp1 file format is a simple ASCII listing of latitudes and 
	longitudes representing strings of connected points. String 
	termination is marked by separator records.  

	.MP1 File Format:  variable length ASCII records:
			   (latitude and longitude with comments)

	    Data Records
		field
		  1	    latitude	    floating point number

		  2	    blank	    field separator

		  3	    longitude	    floating point number

		 [4]	    optional	    begining with a blank
			   comment

		  5	    line feed	    end of record (LF - 10)

	   Separator Records
		field
		 [1]	    optional blanks[s]

		  2	    line feed	    end of record (LF - 10)

Known Bugs:

	Deadlines dictate that MAPIT be shipped with known bugs.

	There are large cities and capitals missing from the DEMO.MP3
	database.  These problems will be addressed in the full database.

	The MAPIT command EDIT/Copy works slowly.  Don't use with a large 
	database, or you may grow old waiting.  It also misses copying 
	Hidden Text whose triangle markers are not visible.

	EDIT/Assign to Layer also works VERY slowly and incorrectly.
	It changes the layers of objects other than those which you select.
	Avoid this command.


Enhancements:

	Many obvious and some not-so-obvious enhancements are in 
	planning.  Register your copy of MAPIT and let me know what
	YOU'D like to see.  The best ideas come from users.  This is 
	your chance to influence the direction of product growth.


Pretty Pictures:

	Those who have need for colorful output and pretty pictures can
	run MAPIT within a Windows DOS shell, capture a screen with
	the Print Screen key, switch back to Windows, and Shift/Insert 
	the image into the Paint program.  There use the Invert Option
	to change all the ugly black to white and fill the oceans with
	lovely blue.  Turn off the Grid while in MAPIT to make area
	fills easier.


Contents of Disks:
    
    The shareware distribution disks contain the following files:
    
    MAPIT Disk 1:

	readme.doc	  general information and instructions
	register.doc	  shareware registration form
	vendor.doc	  distributor information & product description
	install.bat	  installation batch file
	installx.bat	  auxillary installation batch file
	demo_a.mp3	  demo database, part 1
	mapitdem.mp3	  Mapit demo instruction database
	mapit.exe	  main program	     
       *mp1tomp3.exe	ASCII to .mp3 data converter
	std.fig  example figure file
	std.fnt  stroked font file

    * distributed with BBS version.

    MAPIT Disk 2:

	demo_b.mp3	  demo database, part 2
	figedit.exe	  figures creation program

	
Legal Considerations:
    
Copyright:
    
    The collection of software described in this file and contained on 
    this disk is the Shareware Version of MAPIT (the Software) and is 
    Copyright 1992 John B. Allison.

Ownership:
    
    You have purchased or otherwise obtained media containing a copy of 
    the Shareware Version of MAPIT.  The Software contained on the media 
    and all rights pertaining thereto remain the sole property of 
    John B. Allison.  By continuing to use the Software, you indicate 
    your acceptance of the terms and conditions outlined below.
    
Shareware License: 
    
    You are permitted to use the Software for an evaluation period of 
    THREE WEEKS.  After the evaluation period, you must either remove all 
    copies of the Software from your computer system(s) and refrain from 
    all additional use, or register your copy of the Software with
     
				Allison Software
				 166 Shady Lane
				  Apollo, PA 15613 USA
    
				 (412) 727-2198
				 CompuServe 72600,1200
    
    (See the file REGISTER.DOC on the distribution disk for registration 
    instructions.)

Shareware Distribution:
	
    You may give copies of the Software IN ITS UNMODIFIED ENTIRETY to
    friends or to other parties.

    You may distribute copies of the Software IN ITS UNMODIFIED ENTIRETY
    on a commercial basis for a fee not to exceed SIX DOLLARS per diskette, 
    or you may post the Software on electronic bulletin boards if you package 
    the Software so that each diskette must be downloaded IN ITS UNMODIFIED 
    ENTIRETY.  

    If you post it, you must compress or otherwise package the Software 
    in either a combined file named "MAPIT10.ext" or as two separate files 
    named "MAPIT10A.ext" and "MAPIT10B.ext" where ".ext" reflects the type 
    of compression or packaging used.

    You may not list the Software in advertisements, catalogs, or other
    literature as "FREE SOFTWARE".  Shareware is "Try-Before-You-Buy"
    software, not free.
    
    
Liability:    

    SINCE YOU ARE NOT PAYING ANY MONEY FOR THIS TRIAL USE VERSION, YOU 
    RECEIVE IT ENTIRELY "AS IS", AND WE SHALL NOT BE LIABLE TO YOU FOR 
    ANY DAMAGES OF ANY KIND WHATSOEVER.


ASP Member:


    This program is produced by a member of the Association of Shareware 
    Professionals (ASP).  ASP wants to make sure that the shareware 
    principle works for you. If you are unable to resolve a shareware-
    related problem with an ASP member by contacting the member directly, 
    ASP may be able to help. The ASP Ombudsman can help you resolve a 
    dispute or problem with an ASP member, but does not provide technical 
    support for members' products. Please write to the ASP Ombudsman at 
    545 Grover Road, Muskegon, MI 49442-9427 or send a Compuserve message 
    via CompuServe Mail to ASP Ombudsman 70007,3536

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
(register.doc)
			 MAPIT Registration Form


    Please provide me
	-  a registered version of MAPIT with Base World Data
	   and any Detail Packages I've marked below
	-  a MAPIT Users Manual
	-  3 month's free product support via phone/mail/CompuServe
	-  the next program update FREE OF CHARGE!

    Check all that apply:

	X  MAPIT executables and Base World Data	 $ 39	 $ 39

	Detail Data:

	_  North America Detail (northern islands &
		Greenland packaged with Australia)	  $ 30	  ____

	_  Africa Detail				 $ 30	 ____

	_  Asia Detail 				 $ 40	 ____

	_  Australia, Pacific Islands, Antarctica,
		Greenland, and northern islands Detail  $ 30	  ____

	-  Central and Sourth America Detail		 $ 30	 ____

	_  Europe and Middle East Discount		 $ 40	 ____
	-------------------------------------------------------------

						  SUBTOTAL	    _____
	Discounts:

	_  Three Detail Discount			 $(20)	 ____
		  or
	_  Six Detail Discount 			 $(40)	 ____

	_  ADDITIONAL INTRODUCTORY Six Detail Discount
		for orders received before Nov 30, 1992 $(60)   ____

	Charges:

	_  Purchase Order WITHOUT accompanying payment  $ 20	 ____

	_  US/Canadian/Mexican Shipping & Handling	 $ 10	 ____
		or
	_  Foreign Shipping & Handling 		 $ 20	 ____
	-------------------------------------------------------------

						TOTAL	     _____

	   Pennsylvania resident's 6% sales tax.		_____

							=============

						GRANDTOTAL	 $ ______ (US)


    Payment must be in US FUNDS
	by check drawn on a US BANK made payable to "Allison Software",
	by International money order, or
	by MasterCard or VISA

     __ 		      __	     __
    |__| Check Enclosed      |__| VISA	    |__| MasterCard

    Name on card (printed): _____________________________________

    Card # _________________________________  Exp. date _________

    Signature: ________________________________________

    Ship to:








    Please Note:  MAPIT data is shipped ONLY on 3 1/2" HD (1.44MB) diskettes
    in DOS 5 BACKUP format.  You will need this level of DOS to RESTORE.

    Send payment with order to:      Or Email this form via CompuServe Mail
					 (credit card orders only) to:
	 Allison Software
	  166 Shady Lane		   John B. Allison 72600,1200
       Apollo, PA  15613  USA

    Thank you for your business.

    Where did you obtain your shareware copy?



    What application will you use MAPIT for?







    What improvements or extensions would you like to see in MAPIT?

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
(vendor.doc)
				  MAPIT
    
			    Allison Software
				166 Shady Lane
			  Apollo, PA  15613, USA
    
			    (412) 727-2198
			  CompuServe 72600,1200
    
	     Member, Association of Shareware Professionals.


Product Description:
    
    MAPIT  -  a detailed, user-extensible world map/graphics notepad.

    Pushing the envelope of affordable technology, MAPIT brings to your PC
    an integrated world-wide mapping application using data which, up to 
    this time, existed only in large mainframe-resident databases. 

    Whether you are a secretary, scientist, salesman, or sea captain, MAPIT 
    enables you to investigate, analyze, organize, record, track, reproduce, 
    and communicate your graphical and textual data and concepts in pictures 
    as well as in words.  A powerful vector-based reference tool, MAPIT 
    contains a wealth of information and is just plain fun to use. 

    MAPIT enhances communication.  The large database is supplemented by 
    a private database to which you can add your own graphics and textual 
    information for easy and efficient distribution to others.	If your 
    problem can be stated in terms of location - what is the current 
    position (of my trucks, supertankers, sales force), where were they 
    yesterday, what is their status at this moment?  What are the locations 
    of those stores and who is in charge in each one?  How far has that 
    disease, the new species, or the competition spread?  What resources 
    do I have allocated at that site at this moment, how can I improve the 
    logistics? - MAPIT can help you visualize, analyze, and record the answer 
    to within 200 feet - ANYWHERE IN THE WORLD!

    You can zoom to virtually any detail (the current world data supports
    zoom factors of 750) and can insert colored lines to delineate your 
    own features to within 200 feet.  You can create and enter figures
    in multiple locations at any magnification with adjustable visibility.

    MAPIT supports two types of text: scalable stroked text in 7 faces 
    (including Italic and Old English) fixed in size to either the map 
    or to the screen and hidden text  -  up to 2400 hardware characters  
    collapsed to a small marker expandable with the click of the mouse.

    Almost 6000 international cities are displayed, ordered by population.  
    Click on the marker, and the city's size pops up.  20,000 US cities 
    with their 1990 populations are similarly available.  The underlying 
    geographic database consists of over 5 million points organized by 
    coastlines, lakes, rivers, canals, reefs, saltflats, national boundaries, 
    and US and Canadian state and provincial boundaries.  Believe me, 
    places you never even imagined are to be found in this database.

    The map is displayed in Mercator projection, the choice of navigators. 
    (Detail is insufficient for coastal piloting.)  Great circle distances 
    can be calculated between any two points and the results shown in 
    statute miles, nautical miles, or kilometers.

    So if you are looking for more than just a pretty picture - or perhaps
    need many different pretty pictures, let MAPIT be the end of your
    graphical quest.  MAPIT, your electronic notepad on the world.
    

System Requirements:

    System requirements are an IBM 386SX (or more powerful) compatible 
    running DOS 5 (for data RESTORE compatibility of the extended data sets), 
    512KB RAM, an EGA or VGA display, and a mouse.  Hard disk requirements 
    vary based upon data options, but are considerable, ranging from 3 to 
    30 MB.  The shareware version requires under 1 MB.	Registration ranges  
    from $39 (+ S&H) upward depending upon options.

    Registrants receive the most recent version, more detailed data 
    (as ordered), a printed manual, a full-use license, and mail/phone 
    product support.  VISA and MasterCard are accepted.  ASP Member.


Legal Considerations:

    THIS IS A TWO-DISK SET.  BOTH ARE NEEDED FOR PROPER OPERATION.

    Full legal considerations are covered in the file README.DOC. 
    MAPIT (the Software) is Copyright 1992 John B. Allison
    
    You may distribute copies of the Software IN ITS UNMODIFIED ENTIRETY
    on a commercial basis for a fee not to exceed SIX DOLLARS per diskette, 
    or you may post the Software on electronic bulletin boards if you package 
    the Software so that each diskette must be downloaded IN ITS UNMODIFIED 
    ENTIRETY.

    If you post it, you must compress or otherwise package the Software 
    in either a combined file named "MAPIT10.ext" or as two separate files 
    named "MAPIT10A.ext" and "MAPIT10B.ext" where ".ext" reflects the type 
    of compression or packaging used.

    You may not list the Software in advertisements, catalogs, or other
    literature as "FREE SOFTWARE".  Shareware is "Try-Before-You-Buy"
    software, not free.


Please Help Us Serve You Better:

    Please send us a copy of any reviews or articles you print regarding 
    this product.  Thank you for supporting the shareware marketing concept.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3317

     Volume in drive A has no label
     Directory of A:\

    README   DOC     15575   9-11-92  12:57p
    REGISTER DOC      2559   9-11-92  11:41a
    VENDOR   DOC      5225   9-11-92   2:11p
    INSTALL  BAT      1360   9-11-92  12:05p
    INSTALLX BAT       605   9-10-92   7:06p
    DEMO_A   MP3    183196   9-11-92   2:19p
    MAPITDEM MP3     22675   9-11-92  11:18a
    MAPIT    EXE     87003   9-11-92   8:20a
    STD      FIG      1510   9-10-92   5:35p
    STD      FNT     33090   1-10-92   9:00a
    GO       BAT        36  11-12-92   6:38p
    SHOW     EXE      2040   9-12-88  10:48a
           12 file(s)     354874 bytes
                            1024 bytes free
