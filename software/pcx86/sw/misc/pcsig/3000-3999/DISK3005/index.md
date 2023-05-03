---
layout: page
title: "PC-SIG Diskette Library (Disk #3005)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3005/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3005"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## FILE3005.TXT

{% raw %}
```
Disk No: 3005                                                           
Disk Title: WordCruncher 1 of 2 (also 3015)                             
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: WordCruncher                                             
Author Version: 4.50                                                    
Author Registration: $47.00                                             
Special Requirements: A hard disk drive.                                
                                                                        
Add WORDCRUNCHER to the list of high-quality commercial software        
programs now offered as shareware.  WORDCRUNCHER is a full- featured,   
text retrieval program suitable for even the biggest jobs. If you       
have a large body of text, and you want to be able to browse, search,   
and even organize for computer access, consider WordCruncher for the    
job.                                                                    
                                                                        
WORDCRUNCHER comes in two parts: Index and View.  The WORDCRUNCHER      
Index portion takes a standard ASCII text file and indexes it on every  
word.  Indexing on every word means it records where every single       
word in the text occurs.  Once a text file is indexed, the View portion 
lets you specify a single word or combination of words to search for    
in the original text file, and jump directly to every place in the      
text file that the word appears.  View also lets you browse through     
the text or locate other words with new searches.                       
                                                                        
WORDCRUNCHER was originally developed for academic study, but is suited 
to books or manuals whose use can benefit from random searching.  Its   
most obvious use is for electronic versions of technical manuals.  With 
a WORDCRUNCHER version of a manual, users could quickly search and      
locate any word and topic.  Clear text presentation, highlighted search 
hits, and informational headers make text retrieval very manageable,    
without programming.                                                    
                                                                        
WORDCRUNCHER can handle the biggest jobs, and is routinely used         
on CD-ROM-based products.  This is an industrial-strength program.      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1992 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
  ╔═════════════════════════════════════════════════════════════════════════╗
  ║      <<<<  PC-SIG Disk #3005 WORDCRUNCHER 1/2 (also #3015)  >>>>        ║
  ╠═════════════════════════════════════════════════════════════════════════╣
  ║ To install the WordCruncher you must decopress both diskettes onto      ║
  ║ your hard drive.                                                        ║
  ║                                                                         ║
  ║      To install, type:       C:\           (press Enter)                ║
  ║                              MD WC         (press Enter)                ║
  ║                              CD WC         (press Enter)                ║
  ║                              COPY A:.      (press Enter)                ║
  ║                                                                         ║
  ║ Insert disk #2, and Type:    COPY A:.      (press Enter)                ║
  ║                              PKZ WCSHARE1.ZIP    (press Enter)          ║
  ║                              PKZ WCSHARE2.ZIP    (press Enter)          ║
  ║                                                                         ║
  ║ To start the program, type:  WCVSHARE     (press Enter)                 ║
  ║                                                                         ║
  ║                                           Copyright 1992, PC-SIG, Inc.  ║
  ╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INFO.DOC

{% raw %}
```
      =================================================================
      = WORDCRUNCHER SHARE -- MUSCLE TO MASTER THE AGE OF INFORMATION =
      =================================================================
                          =========================
                          =  GENERAL INFORMATION  =
                          =========================

Usage:	Text Indexing, Retrieval and Analysis - Electronic Publishing

Special Requirements:	Hard Disk, 640K

How to Start:	Type "WCISHARE" for Index, "WCVSHARE" for View

Tutorials:	Includes multi-lesson tutorials for both View and Index which 
		can be imported into your word processor and printed -- see 
		WCVLEARN.DOC AND WCILEARN.DOC. 

Directory & File Descriptions:

WCSHARE Directory
-----------------
BARABIC.BYC	Arabic Character Sort Table	
BDANISH.BYC	Danish Character Sort Table
BENGLISH.BYC	English Character Sort Table
BFRENCH.BYC	French Character Sort Table
BGERMAN.BYC	German Character Sort Table
BSPANISH.BYC	Spanish Character Sort Table
WCISHARE.BYM	Index processing message file
WCISHARE.BYS	Screen Files
WCISHARE.EXE	Indexing Program
WCVATRB.BYS	Attribute File
WCVATRB.BYK	Attribute File Backup
WCVSSCRN.BYS	Screen Files
WCVSHARE.EXE	Viewing Program

DOC Subdirectory
----------------
INFO.DOC	General Information on WordCruncher Share
WCVLEARN.DOC	View Tutorial 
WCILEARN.DOC	Index Tutorial
ORDER.DOC	Ordering Information
LICENSE.DOC	License Information
QUICKREF.DOC	View Quick Reference Summary

MANUAL Subdirectory (The BYA, BYC, BYU, and BYX files were created by WCIShare)
-------------------
WCMANUAL.BYA	WCSHARE Reference Manual Abbreviation File
WCMANUAL.BYB	WCSHARE Reference Manual Text File
WCMANUAL.BYC	WCSHARE Reference Manual Language Character Sort File
WCMANUAL.BYU	WCSHARE Reference Manual Attribute File
WCMANUAL.BYX	WCSHARE Reference Manual Index File

TUTOR Subdirectory
------------------
Files used in tutorials


                          =========================
                          =   SOFTWARE OVERVIEW   =
                          =========================

WCShare is the Shareware version of a robust, mature text retrieval and 
analysis program for the PC: WordCruncher. This program is fully documented 
(See WCMANUAL).  This program is designed for many text retrieval uses, 
especially Electronic Publishing. WordCruncher includes two programs: 

	1)	WCISHARE "indexes" data 
	2)	WCVSHARE retrieves text from DOS text files. 


                         ===========================
                         =  ELECTRONIC PUBLISHING  =
                         ===========================

WCVSHARE allows you to create an electronic book, then bundle a "run-time" 
copy of WCVShare with your text. This is an economical method for distributing
electronic texts which benefit from access by a text retrieval program. A quick 
look at how WordCruncher works and what it does:


                               ==============
                               =  INDEXING  =
                               ==============

	With WCISHARE, each word in a text is catalogued and alphabetically 
sorted into a WordCruncher Index. The location of every occurrence of every 
word becomes a part of the index. The result is a detailed electronic 
"roadmap" of a text that makes possible sophisticated search combinations 
of large documents with amazing speed.

	Existing electronic texts require very little preparation before 
processing with WCISHARE. A simple set of markup codes allow electronic texts 
to be structured in a manner similar to their paper counterparts, e.g. Title, 
Section, Paragraph; Book, Chapter, Verse; Chapter, Page, Paragraph.

	WordCruncher allows indexing of documents in many foreign languages. 
Users are able to define the proper sorting sequence of characters, such as 
umlauts in German, accents in French, the "ch" in Spanish, etc.

                                =============
                                =  VIEWING  =
                                =============

	With WordCruncher's WCView, data can be retrieved according to a set of 
user-defined parameters from large documents. With WCView, you can launch 
searches according to flexible parameters that you define, using:

	+	single words
	+	combinations or lists of words
	+	substrings, such as a suffix or stem
	+	combinations of word lists
	+	boolean operators (and, or, but not) 
	+	proximity (within "n" characters)

	+	Help displays are available throughout.
	+	WordCruncher is fast! Even in very large documents, 
		it generally takes only a second or two to located every 
		reference you're looking for - no matter how obscure - and 
		display it on your computer screen in context.
	+	References can be displayed in windows with as much or as 
		little surrounding text as required. Fill the whole screen 
		with text if necessary, and page forward or backward through 
		the document.


                                  ================
                                  = MANIPULATING =
                                  ================

        The WCVShare version of WordCruncher does not include the cut and paste 
functions available in WCView software. Registered users receive a copy of 
WCView with which they can manipulate the text in any number of ways. Print 
data immediately, save it in a DOS text file, or place it in a temporary file 
such as the WordPerfect Office Clipboard provides. Print or save:

	+	Specific blocks of text.
	+	A list of just the locations of your "hits"
	+	A report containing a certain number of lines of text 
		around your hit, or the complete paragraph or verse.
	+	Book style indexes.
	+	Keyword (KWIC) concordances of words or phrases.


                            ===========================
                            =  HARDWARE REQUIREMENTS  =
                            ===========================

	+	IBM compatible personal computer.
	+	640K of internal RAM 
	+	One 5.25" and/or one 3.5" disk drive.
	+	MS-DOS or PC-DOS Version 2.1 or later.
	+	A hard disk drive with enough space to accomodate your texts.


                   ===========================================
                   = WHAT THE EXPERTS SAY ABOUT WORDCRUNCHER =
                   ===========================================

        "WordCruncher has been developed into one of the most powerful 
analytical tools in a scholar's kitbag ... In fact, businessmen and 
professionals of all kinds are likely to find it an invaluable tool."		

                                           Chicago Sun-Times

        "WordCruncher indexes text files ranging in size from the miniscule 
to the humongous and retrieves data in the twinkling of a cursor."	

                                           PC Magazine

        "WordCruncher performs functions that formerly were possible only 
with mainframe computer programs .. If you need text retrieval software, this 
program is outstanding."				

                                           Byte Magazine


                        =================================
                        = WHO USES WORDCRUNCHER AND HOW =
                        =================================


	A multi-national corporation has accounting offices throughout 
the world. Detailed policies and procedures governing the financial 
adminstration of the company are updated on a regular basis. The corporation 
replaces their old paper manuals with CD-ROMs which include both the indexed 
manuals and WordCruncher.

	A high school teacher in Long Island introduces his students to a new 
way of studying Shakespeare. They "own" words, seeing how the Bard used a 
particular word or image in a specific play, or throughout all his works. The 
end result  -- better papers, excited students, more learning.

	A political science major is comparing the various campaign platforms 
of several democratic contenders for the 1988 Presidential nomination. He 
indexes all their speeches and position papers, then uses WordCruncher to 
compare them on specific issues.

	A scientific society publishes their ten year index using the 
WordCruncher Publishers ToolKit.

				=================
				MARKETING CONTACT
				=================

                               JOHNSTON & COMPANY
                     "ELECTRONIC PUBLISHERS & CONSULTANTS"
                                 P.O. Box 446
                            American Fork, UT 84003
                         (801) 756-1111, Fax 756-0242 


	While it may be true that we are living in the Information Age, it is 
equally true that we are more adept at generating information that we are at 
keeping track of it. Business, education, industry and government are now 
distributing information in electronic form that once was delivered on paper. 

	Large texts are like haystacks, and the bits of information you're 
looking for are the proverbial needles hiding somewhere inside. Traditionally, 
finding these needles of information demanded tedious searches through 
incomplete indexes, or frustrating "thumb-searches" though page after page 
of printed matter. 

	Electronic Publishing is a new and rapidly growing industry. 
Johnston & Company has participated in hundreds of electronic publishing 
projects, ranging from the Federal Acquisition Regulations to the 
Riverside Shakespeare.

	Many text retrieval software companies have emerged, and Johnston & 
Company reviews, analyzes, and understands the different programs, 
technologies and approaches. There is no single program which satisfies all 
the needs of the vast array of electronic publishing projects.  

	If you or your company feels that Electronic Publishing may be an 
important part of your future, let us help you initiate your investigation 
into the world of electronic publishing and text retrieval.
```
{% endraw %}

## LICENSE.DOC

{% raw %}
```

Information on Site & Distribution Licenses and Custom Versions

WCSHARE REPRESENTS A SIGNIFICANT INVESTMENT OF TIME AND MONEY ON THE
PART OF MANY INDIVIDUALS. WE RESPECTFULLY REQUEST THAT YOU COMPLY WITH 
OUR LICENSING POLICIES.


CORPORATE AND GOVERNMENTAL SITE LICENSE

This is a license for use of the software within your company or
goverment agency, and is not transferable.  This allows internal
use and copying of the software for as many sites / computers as
contracted for.  (See the ORDER FORM for Site License price
schedule).  An unlimited Site License allows unlimited copying
of the software for internal use by your company or government
agency.  Distributing, repackaging, or reselling of the software
to third parties is not allowed, except in the case of computerized
book distribution when WCVShare Run-Time is included with the text.  
All licenses are prepaid.


PUBLISHER'S LICENSE

Commercial and Governmental Use
--------------------------------------
This allows distribution of the WCVSHARE Run-Time software with 
computerized book(s) that are distributed by your company or 
government agency. (Please note that if you create a computerized book
using the WCShare program, you will need a license, since you would be
sending out WCSHARE code in the form of the .BYX, .BYA, and .BYC files, 
and the WCVShare Run-time software included with with your book(s).) 
This license is non-exclusive and non-transferable.  Please complete the 
Sample Publisher's License Agreement and return the with the order form and 
specify the Publisher's Version of WCShare. All licenses are prepaid.

Private Use
----------------
This license is not necessary for clubs or user groups distributing 
the software on a SHAREWARE basis, providing that the entire 
WCSHARE package with accompanying documentation files is 
included in the distribution, and no more than a nominal fee (not to 
exceed $10) is charged for such distribution.


Availability of Source Code
---------------------------------
It is the policy of Johnston & Company not to release source code of
its products.
SAMPLE SITE LICENSE

                         JOHNSTON & COMPANY
                           P.O. BOX 446 
                    AMERICAN FORK, UT 84003-0446 
    		      UNITED STATES OF AMERICA

Voice (801) 756-1111
FAX   (801) 756-0242

JOHNSTON & COMPANY hereby grants [ORGANIZATION NAME] a site license for 
[NUMBER OF SITES/COMPUTERS LICENSED] computers for the use of the 
following software programs:  [WCSHARE PRODUCTS LICENSED].

This is a perpetual license for the use of the software within your 
company, and is not transferable.  This license allows internal use and 
copying of the software by as many users/ machines as contracted for.  
Distribution, repackaging, or reselling of the software, to third 
parties is not allowed, except in the case of computerized book 
distribution when WCVShare Run-Time is included with the text.  
All licenses are prepaid.

The LICENSOR warrants that it has full power and authority to grant this 
license herein. 

JOHNSTON & COMPANY hereby disclaims all warranties relating to this software, 
whether express or implied, including without limitation any implied 
warranties of merchantability or fitness for a particular purpose. 
JOHNSTON & COMPANY will not be liable for any special, incidental, 
consequential, indirect or similar damages due to loss of data or any other 
reason, even if JOHNSTON & COMPANY or an agent of JOHNSTON & COMPANY has been 
advised of the possibility of such damages.  In no event shall JOHNSTON &
COMPANY's liability for any damages ever exceed the price paid for the 
license to use the software, regardless of the form of the claim.  The person 
using the software bears all risk as to the quality and performance of the 
software.

This agreement shall be construed and enforced in accordance with the 
laws of the STATE OF UTAH.  Any action or proceeding brought by 
either party against the other arising out of or related to this 
agreement shall be brought only in a STATE or FEDERAL COURT of competent 
jurisdiction located in Salt Lake City, Utah. The parties hereby 
consent to in personam jurisdiction of said courts.


COMPANY: [ORGANIZATION NAME]
ADDRESS: [ORGANIZATION ADDRESS]
CITY:    [ORGANIZATION'S CITY]  STATE:  XX   ZIP CODE: 00000
COUNTRY: [ORGANIZATION'S COUNTRY]

AUTHORIZED  SIGNATURE:   _____________________________________

TITLE: _______________________         DATE: _______________


JOHNSTON & COMPANY AUTHORIZED SIGNATURE: _________________________

TITLE:  President               DATE: ______________________SAMPLE PUBLISHERS LICENSE AGREEMENT

                         JOHNSTON & COMPANY
                           P.O. BOX 446 
                    AMERICAN FORK, UT 84003-0446 
    		      UNITED STATES OF AMERICA

Voice (801) 756-1111
FAX   (801) 756-0242

This agreement entered into, by and between JOHNSTON & COMPANY, INC., 
located at P.O. Box 446, American Fork, UT 84003-0446, USA (herein after 
referred to as "LICENSOR"), and <COMPANY NAME> a <STATE> CORPORATION  
located at <ADDRESS, CITY, STATE, ZIP CODE> (herein after referred to as 
"LICENSEE").

This contract allows LICENSEE to DISTRIBUTE the program(s) developed 
by LICENSOR referred to as WCVSHARE RUN-TIME with computerized books 
developed by LICENSEE.  This perpetual license of the WCSHARE software 
by LICENSOR TO LICENSEE IS NON-EXCLUSIVE AND  NON-TRANSFERABLE.  LICENSEE 
shall pay LICENSOR a one time fee of US $100.00 in exchange for said license.  
This is a license for DISTRIBUTION OF WCVSHARE RUN-TIME SOFTWARE ONLY,
and stipulates that the entire WCVSHARE RUN-TIME package with accompanying 
documentation and tutorial files is included in the distribution. 

The LICENSOR warrants that it has full power and authority to grant this 
license herein.

JOHNSTON & COMPANY hereby disclaims all warranties relating to this software, 
whether express or implied, including without limitation any implied 
warranties of merchantability or fitness for a particular purpose. 
JOHNSTON & COMPANY will not be liable for any special, incidental, 
consequential, indirect or similar damages due to loss of data or any other 
reason, even if JOHNSTON & COMPANY or an agent of JOHNSTON & COMPANY has been 
advised of the possibility of such damages.  In no event shall JOHNSTON & 
COMPANY's liability for any damages ever exceed the price paid for the 
license to use the software, regardless of the form of the claim.  The person 
using the software bears all risk as to the quality and performance of the 
software.

This agreement shall be construed and enforced in accordance with the 
laws of the STATE OF UTAH. Any action or proceeding brought by either party 
against the other arising out of or related to this agreement shall be brought 
only in a STATE or FEDERAL COURT of competent jurisdiction located in 
Salt Lake City, Utah. The parties hereby consent to in personam jurisdiction 
of said courts.

This agreement can only be modified by mutual written consent of both 
parties.

COMPANY:  <COMPANY NAME>

_________________________________________  _________________
AUTHORIZED SIGNATURE                             DATE

_________________________________________
TITLE

_________________________________________  _________________
JOHNSTON & COMPANY, INC.                         DATE
```
{% endraw %}

## ORDER.DOC

{% raw %}
```

You can order or register WCSHARE products by MasterCard or Visa!

To register with MasterCard or Visa, please fill out the information
requested below and the enclosed order form.

MasterCard ______ or Visa ______

Card Number _________________________________________________________

Expiration Date _____________

Card Holder's Signature REQUIRED ____________________________________


TO:                           FROM:

Johnston & Company            Name: __________________________________
P.O. Box 446               
American Fork, UT 84003  (Company): __________________________________

801-756-1111 Voice         (Title): __________________________________
801-756-0242 Fax
                	   Address: __________________________________
Today's          
date: ___________       City,State: __________________________________
                                                              Zip Code
			   Country: _________________________

		      Phone Number: _________________________


WCSHARE (Includes WCVShare and WCIShare) User Registration for MS-DOS: 
Includes WCVShare Upgrade to WCView, Printed Index Documentation

    Diskette set with programs and documentation files .. $47.    ______
    Site license for the use of WCVSHARE & WCISHARE 
    (Includes one diskette set with program disk & documentation.)
    2 to   9 computers ..... at $36 each    # computers ___x 36   ______
   10 to  24 computers ..... at $28 each    # computers ___x 28   ______
   25 to  49 computers ..... at $22 each    # computers ___x 22   ______
   50 to  99 computers ..... at $16 each    # computers ___x 16   ______
  100 to 149 computers ..... at $12 each    # computers ___x 12   ______
  150 to 199 computers ..... at $11 each    # computers ___x 11   ______
  200 or more computers .... $2000 one time fee                   ______

Diskette format (choose one)     5.25" disk ____    3.5" disk ____

Extra program disk & documentation with purchase of
site licenses of 2 or more available at $8.00 each.     ___x  8   ______


WCVSHARE VIEW Run-Time Registration for MS-DOS:
(Includes Upgrade to WCView)

    Diskette with programs and documentation files ...... $35.    ______
    Commercial site license for the use of WCSHARE.
    (Includes one diskette set with programs & documentation files.)
     2 to  9 computers ..... at $30 each    # computers ___x 30   ______
    10 to 24 computers ..... at $25 each    # computers ___x 25   ______
    25 to 49 computers ..... at $20 each    # computers ___x 20   ______
    50 to 99 computers ..... at $15 each    # computers ___x 15   ______
    100 or more computers .. $1000 one time fee                   ______

Diskette format (choose one)     5.25" disk ____    3.5" disk ____


Extra program disk & documentation with purchase of
site licenses of 2 or more available at $7.00 each.     ___x  7   ______


WCSHARE PUBLISHER Registration (includes WCCMPRS Compression 
SPLIT/INSTALL Programs, and replicable WCVShare Run-time Disk),
- Note: Publisher Version allows distribution of computerized 
books with WCVShare Run Time ONLY.

  * Diskette with programs and documentation files ......$100.    ______
  * Site license for the use of WCSHARE, WCCMPRS, WCSPLIT
    (Includes one diskette set with program disk & documentation.)
    2 to   9 computers ..... at $85 each    # computers ___x 85   ______
   10 to  24 computers ..... at $70 each    # computers ___x 70   ______
   25 to  49 computers ..... at $55 each    # computers ___x 55   ______
   50 to  99 computers ..... at $40 each    # computers ___x 40   ______
  100 or more computers .... $2500 one time fee                   ______

Diskette format (choose one)     5.25" disk ____    3.5" disk ____

Extra program disk & documentation with purhcase of
site licenses of 2 or more available at $8.00 each.     ___x  8   ______


Please add $5.00 for shipping & handling for each
package.                                         ___x $5.00/10.00 ______
(Please add $10.00 per package for overseas
orders.)

Utah residents add 5% sales tax.                                  ______

					Total enclosed            ______

Terms:
  MasterCard, Visa, Check or Money Order drawn on a U.S.A. bank in U.S. 
  funds.  Corporate Purchase orders (net 30) accepted for software from
  large corporations within the USA & Canada.  All licenses are prepaid
  only.  All orders outside of the United States & Canada must be prepaid.

* Includes a free upgrade to the next version of the software, when
  available.

```
{% endraw %}

## QUICKREF.DOC

{% raw %}
```
                      WORDCRUNCHER VIEW SHARE QUICK REFERENCE

FEATURE SUMMARY
===============
BookShelf (return to)                          [F5]
Bookmarks                                      [Alt]+[=]
Change Menu                                    [Ctrl]+[F4]
Citation Control                               [Shift]+[F4]
Color Set (monitor setting)                    [Shift]+[F8]
Combine Word Lists                             [F2]
Display Colors                                 [F8]
Duplicate References (delete)                  [Shift]+[Del]
Duplicate References (set criteria)            [2] (at Reference List display)
Exit Program                                   [Shift]+[F10]
Frequency Distribution                         [1] (at Reference List display)
Function Key Help                              [Shift]+[F9]
Help Screens                                   [F9]
List Files                                     [Shift]+[F5]
Main Menu (return to)                          [Alt]+F10]
Next Display (go to)                           [Enter]
Previous Display (return to)                   [Esc]
Print & TextOut                                [F6]
Restore Selected Reference List                [Ctrl]+[F3]
Retrieve Saved Reference List                  [Alt]+[F6]
Save Reference List                            [Shift]+[F6]
Search Bounds                                  [Alt]+[=]
Search Bounds (on/off)                         [Ctrl]+[Home]
View Selected Reference List                   [Shift]+[Ins]
Tunes                                          [Alt]+[F8]

TO START WCVSHARE:                             TO EXIT WCVSHARE:
=================                              =================
Type "wcvshare"                                Press [Shift]+[F10]

BOOKSHELF       
=========
Insert Book:                                   Select Book:
Press [Ins].                                   Highlight or type title and press [Enter].
Specify drive path and press [Enter].          Remove Book:
Highlight title and press [Enter].             Highlight title and press [Del].
                                               
MAIN MENU                                      SELECT REFERENCE
=========                                      ================
To look up words, press [1] or [Enter].        At Main Menu, press [2].
To look up a reference, press [2].             Use up/down arrows to select a reference, press [Enter].

PRINTING
========
Printing a Screen: Press [Ctrl]+[Print Screen]  
(ADDITIONAL OPTIONS AVAILABLE TO REGISTERED USERS)
SELECT WORD
===========
At BookShelf display, select a book.
At Main Menu, press [1].

To correct typing error                        [BackSpace]
To return to beginning of word                 [Ctrl]+[BckSpace]
To reposition cursor within word               Right/Left Arrows
 
To Look Up:                                    Use:
A single word                                  [Enter]
An exact phrase                                [Space]
A partial phrase                               [Alt]+[Space]
Words in the same paragraph                    [Shift]+[Space]
Words in the same window                       [Ctrl]+[Space]
Related words                                  [Ins]
Words with same prefix                         [prefix][*]
Words with same substring                      [*][substring][*]
Words with same suffix                         [*][suffix][.] (Use the asterisk found near the keypad.)
To combine two word lists                      [F2]

Press [Enter] to go to Reference List display.
Press [Enter] again to go to Expanded Window display.

        
MOVING FROM DISPLAY TO DISPLAY                 MOVING WITHIN DISPLAYS
==============================                 ======================
Move to next display           [Enter]         BookShelf, Word List, or Reference List:
Return to previous display     [Esc]           Up/Down one entry                      Up/Down Arrows
Return to Main Menu            [Alt]+[F10]     Up/Down one page                       [PgUp]/[PgDn]
Return to BookShelf display    [F5]            Beginning/End of list                  [Home]/[End]
View Help display              [F9]            At BookShelf display or Word List, you also may type
                                               book title or word.

EXPANDED WINDOW: 
================
Up/Down one line                               Up/Down Arrows
Previous/Next third-level code                 [Home]/[End]
Previous/Next second-level code                [Shift]+[Home]/[End]
Previous/Next first-level code                 [Ctrl]+[Home]/[End]
Beginning/End of computer book                 [Alt]+[Home]/[End]

EXPANDED WINDOW
===============
Positioning the Cursor:
Left/Right one word                            Left/Right Arrows 
Left/Right edge of screen                      [Shift]+Left/Right Arrows 
Top/Bottom edge of screen                      [Shift]+Up/Down Arrows 
Beginning of next line                         [Enter]




Distributed by:
Johnston & Company
Electronic Publishers
Post Office Box 446
American Fork, UT 84003
Voice (801) 756-1111, Fax 756-0242


```
{% endraw %}

## SUPPORT.DOC

{% raw %}
```
Technical support is offered for WordCruncher Share in two different ways:

1. Voice Support
        
        WCShare registered users receive 60 days of free voice support.
        You can call (801)-756-1111 between the hours of 1:00pm and 
        4:00pm MST for help with WCShare during the first 60 days after
        you purchase WCShare.  Voice support will not be available unless 
        your registration card is on file with Johnston & Company.  
        After 60 days if you desire voice support then you will be 
        billed at the rate of $25.00 for each 15 minutes, with a 15
        minute minimum.  This is payable by Master Card or Visa only.
        Please have your card number available when calling technical 
        support after expiration of your 60 day time period.


2. FAX Support

        FAX support is also free for the first 60 days.  After your 60 
        day support period has expired there will be a flat rate of 
        $10.00 per FAX.  Payable via Master Card or Visa only.  Please 
        include your card number on your FAX after the expiration of 
        your 60 day time period.


3. Contract Support

        Contract support can be purchased by companies that have site 
        license agreements with Johnston & Company or have multiple 
        installations of WCShare within the comapny. If you need support,
        give us a call or send us a FAX today for a quote on your 
        particular situation.


5. Phone Numbers

        Voice Technical Support - 801-756-1111  1:00pm - 4:00pm MST
        FAX - 801-756-0242  24 hours


Thank You,

Johnston & Company
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3005

     Volume in drive A has no label
     Directory of A:\

    WCSHARE1 ZIP    342386   2-12-92  11:21a
    GO       BAT        28   1-07-92  11:42a
    FILE3005 TXT      3035   4-21-92  10:37a
    GO       TXT      1501   4-21-92   3:05p
            4 file(s)     346950 bytes
                           13312 bytes free
