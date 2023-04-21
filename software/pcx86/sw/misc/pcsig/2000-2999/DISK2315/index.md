---
layout: page
title: "PC-SIG Diskette Library (Disk #2315)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2315/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2315"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "$HAREWARE MARKETING $YSTEM"

    The $HAREWARE MARKETING $YSTEM is a detailed two-part resource for
    shareware authors who need creative ideas and a RATED mailing list of
    over 800 major shareware distributors, large computer clubs and
    recommended BBS systems. The first part of the package, the shareware
    distributor's database, contains mailing addresses, phone numbers, a
    SHAREWARE DISTRIBUTOR RATING and other detailed data which can be used
    to prepare envelope mailing labels or BBS calling uploads.
    
    The database file is rated by shareware distributor so you can mail
    your shareware to vendors rated A, B or C. The database file is
    supplied in standard file formats such as dBASE and 123 which can be
    directly imported into your database!  Sort lists of shareware
    distributors by zip, state or other criteria. Foreign and U.S.
    distributors and computer clubs are included.
    
    The second part of the package is a detailed newsletter and marketing
    strategy guide, prepared by an established shareware author. It
    contains dozens of creative tips, tricks and traps which every
    shareware author should know. Written by the author of the PC-LEARN
    computer tutorial, the $HAREWARE MARKETING $YSTEM provides detailed and
    valuable information in a frank, candid and sensible style.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DATABASE.TXT

{% raw %}
```

              THE $HAREWARE MARKETING $YSTEM (c) 1990   
                  (A shareware software package)

                  from Seattle Scientific Photography 
                    EDITOR, JIM HOOD (206) 236-0470
       MAILING ADDRESS: PO BOX 1506, MERCER ISLAND, WA 98040

████████████████████████████████████████████████████████████████████████████

            NOTES ABOUT THE DATABASE BUT FIRST A HOT TIP!

████████████████████████████████████████████████████████████████████████████

This file contains ESSENTIAL information describing the database file(s) 
on this disk. Be sure to read ALL items of information prior to using the
mailing list database! But first this special hot tip for shareware authors!

██████ HOT TIP ██████ Here is an interesting idea: I would like to find 20 
or 30 dependable shareware authors to form the Bulletin Board $HAREWARE 
MARKETING $YSTEM NETWORK ($M$ Net). Here is how it works: When my shareware 
package is released by myself in my city (Seattle) I mail disk copies to 
30 willing shareware authors in New York, Orlando, Sacramento, Washington DC, 
etc. These people IMMEDIATLEY upload it to 10 HOT BBS systems in their city. 
In exchange, EVERYONE does the same for EVERYONE else in $M$ NET. Nothing like 
knowing that 300 guaranteed copies (10 BBS uploads times 30 major US cities) 
of your program are somewhat simultaneously being shipped to major BBS systems 
throughout America within one week for the simple cost of a little postage!
And obviously there are more than 30 major American cities - if you follow
the drift . . .

Contact me if you would like to participate. Key criteria: you have to 
live in a large city and have routine access to the HOT BOARDS in your city. 
You must be a shareware author. One author per city. No cash flow or charges, 
just a common sense courtesy among authors! In future issues I will include a 
database listing of members in $M$ NET within this shareware package which you 
can search to see if your city is represented and thus if an opening 
(for you) exists! The listing will also have the HOT BBS phone numbers 
we intend to upload to which should also be useful to you as a shareware 
author! This way we all get a shot at the brass ring by helping each other 
at the cost of a little postage! 

████████████████████████████████████████████████████████████████████████████

             ABOUT THE SHAREWARE DISTRIBUTOR DATABASE

████████████████████████████████████████████████████████████████████████████

                       DATABASE FILE FORMAT

You must have a database product or spreadsheet to use this data. This
package contains data files which can be loaded into products such
as dBase, PC-File, Wampum, Rbase, Reflex and other popular database
packages. Alternatively you can use any popular spreadsheet program
which can import Lotus (tm) files in WKS (Lotus Ver 1) files. A hard
drive is suggested, but the author can supply the file in smaller portions
suitable for floppy drive systems if you do not have a hard drive.

The database file is supplied in a self-extracting format. DISTRIB1.EXE
will unpack to produce a dBase III format file while DISTRIB2.EXE will
produce a Lotus 123 (tm) WKS format file. Both files are large when unpacked 
and are best unpacked from a hard drive. To unpack the files, once you 
have safely copied them onto your hard drive into the same subdirectory
or area as your database or spreadsheet, simply execute the command:

C>DISTRIB1  <then press return>    produces dBase format file:  DISTRIB.DBF

                      ------      or    -------

C>DISTRIB2  <then press return>    produces 123 format file:   DISTRIB.WKS

Depending on the database product you use, either or both file(s) should 
import directly into your database software. Write the author of this 
package if you need an unsual format or prefer an ASCII text file version 
which can also be imported into many database products. For those not
having a hard drive, a special "multi-part" database file is available
which can be used with floppy systems. Contact the author.

The file has "live data" already inserted and ready for you to import into 
your database. The data consists of lists of shareware distributors, BBS
systems and computer clubs which maintain shareware libraries. Basically
the list of organizations within the database is the "target audience"
for your mailing or BBS upload campaign. PC File (tm) and Wampum (tm) are 
popular shareware database products which will accept the dBase III (tm) 
file format. The primary database is retained in Borland's Reflex V2.0 (tm) 
which can export to MANY popular formats. The author can ship you a copy 
of one or several shareware database programs or you can contact any of the 
shareware distributors in the distributor database for a database program if 
you do not currently use a database package. This package only contains
the data, not the database program! Next, let's look at two typical records 
with a few notes about field usage. 

                        DATABASE RECORD EXAMPLES


 DISTRIB_MNEUMONIC: D           RATING: A    DATE LISTED_REVISED: 8/21/90   
 ------------------------------------------------------------------------
 LABELTOP: AUTHOR SUBMISSIONS & UPDATES            
 COMPANY: SOFT A'WARE         FIRSTNAME: George  LASTNAME: Van Valkenburg
 ADDRESS: 1221 CUSHMAN AVENUE, SUITE E                POSITION:           
 CITY: SAN DIEGO                     
 STATE: CA                                   ZIP: 92110       
 ------------------------------------------------------------------------
 DAY TEL: 619/298-3392              BBS TEL:                
 FAX TEL: 619/298-3619              TOLLFREE_ORDER TEL:           
 ------------------------------------------------------------------------
 REMARKS1: Owner, George V. is superior source of ideas, enthusiasm!         
 REMARKS2: ASP says catalog has "best descriptions . . . one of best seen"
 ------------------------------------------------------------------------
 PRINT?:  
 DISTRIB_TYPE: DISTRIBUTOR                     AFFILIATION: ASP  

                 ========= (second example:) =========

 DISTRIB_MNEUMONIC: M           RATING: A    DATE LISTED_REVISED: 8/21/90   
 ------------------------------------------------------------------------
 LABELTOP:                                         
 COMPANY: Seattle Times            FIRSTNAME: Paul      LASTNAME: Andrews   
 ADDRESS: POB 70                                      POSITION: PC Columnist
 CITY: Seattle                       
 STATE: WA                                   ZIP: 98111       
 ------------------------------------------------------------------------
 DAY TEL:                           BBS TEL:                
 FAX TEL: 382-8879                  TOLLFREE_ORDER TEL:           
 ------------------------------------------------------------------------
 REMARKS1: Paul's Compuserve ID is 76050,161, Paul is a key contact!         
 REMARKS2: Paul writes an extremely well-respected column for major newspaper
 ------------------------------------------------------------------------
 PRINT?:  
 DISTRIB_TYPE: MAGAZINE OR NEWSPAPER WRITER    AFFILIATION:      

                          (end of records)

A few field names deserve closer examination. The DISTRIBUTOR MNEUMONIC
is used by myself as a simple entry code: D=DISTRIBUTOR, C=COMPUTER
CLUB, B=BBS SYSTEM, M=MAGAZINE OR NEWSPAPER WRITER, A=ASP KEY CONTACT 
PERSON. 

This code causes the Reflex (Ver 2.0) database to automatically enter 
data for both the DISTRIBUTOR TYPE field and LABELTOP field. This saves me 
some typing and adds a little clarity and usefulness to the data.

The PRINT? field can be used by yourself to mark selected entries
prior to printing. Both the RATING and DATE LISTED\REVISED fields are
somewhat obvious and are discussed in greater detail below.

My favorite use of the data fields for mailing label production is
to use the LABELTOP as the first line, COMPANY as the second line,
ADDRESS as the third, and finally CITY, STATE and ZIP on the final line(s).
Add the FIRSTNAME and LASTNAME to the LABELTOP field if you have a name in 
the name(s) field. An example printout of a mailing label series is presented 
in a few paragraphs . . .

                         USING THE DATABASE

Just as there are many different types of shareware packages and authors,
there are many ways of using the database list of shareware vendors.
Some authors may prefer to sort the database by RATING and mailing 
exclusively to the "A" rated vendors or BOTH the "A" and "B" rated 
vendors. This can be EXTREMELY EFFECTIVE. 

You might also wish to sort by distributor type (D=DISTRIBUTOR, C=COMPUTER
CLUB, B=BBS SYSTEM plus other codes as mentioned above) which will allow 
you to separate out certain classes of vendors for consideration.

Other shareware authors may wish to mail only to vendors within their
state or possibly only computer clubs.

Other unusual mailings might involve sorting mailing labels by zip code, 
by state or even by ASP (tm) affiliation. Yet another way to use the 
database is to import the list and then ADD additional custom fields 
yourself to track response time by the distributor, date you mailed your 
shareware, name of key contact person or even a tracking field to show you 
which distributor has higher response for your package judging by 
registrations from that state, city or county! If you stumble upon a 
NECESARY FIELD let me know and I will add it to the database in future 
editions of this package! 

Some shareware authors may wish to ADD field(s) describing particular 
distributor specialization (e.g., bible shareware, graphics images or 
application packages.) In future editions of the database I could add fields 
to indicate number of pages in the distributor's catalog or other data. 
Wouldn't it be great to mail your shareware to distributors having the largest 
catalogs or some other criteria which is important to YOU the author? I am 
open to other constructive suggestions to modify or enhance the master 
database field structure! 

I have carefully added a field showing the date the distributor was 
revised or listed in the database, so if you only wish to examine or append 
the latest updates to the list, sort on the date field and you will 
quickly find the latest revisons which need to be added to your list. Most 
database products will let you append a similar file to an existing file. 
Thus you may add to your list or simply start over with the newer, larger 
and revised list from my quarterly update. If a distributor has a new phone 
number, rating or other update, the date field will be changed in my master 
listing so you can always spot changes by sorting on the date field!

PC File (tm) offers a mailing label generator directly within the package
and may be attractive if you have not as yet selected a database package.
Other packages also have mailing label generators, of course.

Here is an example of one sample printout of a small portion of the
database file in mailing label format which might give you an idea of
both the "live data" inside the database as well as consideration of a
user selected subset of the data:


  AUTHOR SUBMISSIONS & UPDATES        AUTHOR SUBMISSIONS & UPDATES
  CALIFORNIA FREEWARE, Unit C-1       COMPUTER HUT
  1747 EAST AVENUE Q                  1825-F1 TAMIAMI TR.
  PALMDALE  CA                        PORT CHARLOTTE  FL
                     93550                               33948

  SHAREWARE LIBRARY SUBMISSION        SHAREWARE LIBRARY SUBMISSION
  CHICAGO COMPUTER SOCIETY            FOG
  POB 8681                            POB 3474
  CHICAGO  IL                         DALY CITY  CA
                     60680                               94015

  AUTHOR SUBMISSIONS & UPDATES        AUTHOR SUBMISSIONS & UPDATES
  DATA OUTLET                         DISK COUNT DATA
  BOX 776                             PO Box 36
  MACON  GA                           Lake Hamilton  AR
                     31202                               71951


  AUTHOR SUBMISSIONS & UPDATES        AUTHOR SUBMISSIONS & UPDATES
  DISK JOCKEY                         FLORIDA PC LIBRARY
  POB 7009                            P.O. BOX 2878
  BOCA RATON  FL                      LEESBURG  FL
                     33431                               32749

  SHAREWARE LIBRARY SUBMISSION        SHAREWARE LIBRARY SUBMISSION
  BOSTON COMPUTER SOCIETY             CAPITOL PC USERS GROUP
  ONE CENTER PLAZA                    4520 EAST-WEST HWY, STE 550
  BOSTON  MA                          BETHESDA  MD
                     02108                               20814


  SHAREWARE LIBRARY SUBMISSION        SHAREWARE LIBRARY SUBMISSION
  HOUSTON AREA LEAGUE OF PC USERS     NYPC
  POB 61266                           40 WALL ST, STE 2124
  HOUSTON  TX                         NY  NY
                     77208                               10005


  AUTHOR SUBMISSIONS & UPDATES        AUTHOR SUBMISSIONS & UPDATES
  GEMINI SHAREWARE                    GENERIC COMPUTER SYSTEMS
  12404 SE 38TH ST                    22612 FOOTHILL BLVD, STE 200C
  BELLEVUE  WA                        HAYWARD  CA
                     98006                               94541


  AUTHOR SUBMISSIONS & UPDATES        AUTHOR SUBMISSIONS & UPDATES
  NEW ENGLAND SOFTWARE LIBRARY        PC ARCADE
  9 DAVIS AVENUE                      276 MOREHOUSE RD.
  SHELBURNE  VT                       EASTON  CT
                     05482                               06612


  AUTHOR SUBMISSIONS & UPDATES        AUTHOR SUBMISSIONS & UPDATES
  PC SHAREWARE                        PC-SIG
  1943 FELSPAR ST.                    1030D EAST DUANE AVE.
  SAN DIEGO  CA                       SUNNYVALE  CA
                     92109                               94086

  SHAREWARE LIBRARY SUBMISSION        SHAREWARE LIBRARY SUBMISSION
  PASADENA IBM USERS GROUP            PHILADELPHIA COMPUTER SOCIETY
  711 - EAST WALNUT ST                LA SALLE UNIV, 20TH & OLNEY AV
  PASADENA  CA                        PHILADELPHIA  PA
                     91101


████████████████████████████████████████████████████████████████████████████

           ABOUT THE SHAREWARE DISTRIBUTOR RATING SYSTEM 

████████████████████████████████████████████████████████████████████████████

The rating system for each shareware distributor in the database listing is 
very simple to sort, use and understand in maintaining your direct mail 
campaign. Each distributor receives a rating of A, B or C. A rating of A 
is PREFERRED status. A rating of B is COMMENDABLE status. A rating of C 
is ACCEPTABLE status or PENDING FURTHER RESEARCH. Affiliation with a 
professional group if noted means membership in the ASP (Association of 
Shareware Professionals (tm) or other trade group as noted. 

Ratings of shareware distributors are based on a variety of factors in 
approximately the following priority (highest to lowest): evidence of 
customer volume, volume of direct mail advertising, national magazine 
advertising, quality and size of catalog, degree of feedback and support 
to AUTHORS, years in business, professional trade affiliations, telephone 
support, multiple offices/sales locations, BBS support, response to 
request for information, promptness of shipments, refund policy, reporting 
of sales volumes to authors and other criteria. I also consider requests
by vendors for extreme discounts on registered packages and overt
requests for advertising revenues or other solicitations of money or 
exclusive distribution rights from authors by a vendor as negative factors. 

In general a high distributor rating may indicate a high volume of customers 
and thus a more attractive distributor to whom a shareware author might
wish to submit software. The rating does not in any way provide an 
endorsement and as such is is offered only as a SUGGESTION. The purpose of 
this document is to serve shareware authors as a primary concern and 
shareware distributors as a secondary consideration. 

                    INVITATION TO DISTRIBUTORS:  

If a shareware distributor provides updated information concerning the points 
of evaluation listed above, I will enthusiastically consider revising the 
rating in future issues of this package. Unlisted distributors are 
encouraged to submit a catalog and detailed letter ON DISK (ASCII format) 
explaining helpful evaluation factors if they wish to be added to or revised 
in the mailing list database. The reason I would like the detailed letter on 
disk is that I may more easily insert all or part of that distributor's 
comments or supporting statements directly into the remarks field of the
database if I determine this is helpful to shareware authors. I harbor no 
particular ill feelings towards distributors and recognize that they provide 
a valuable service to authors. However I have noticed that some distributors 
could improve in many areas. Here again are the points of evaluation a 
distributor should discuss on DISK in ASCII format:

Ratings of shareware distributors are based on a variety of factors in 
approximately the following priority (highest to lowest): evidence of 
customer volume, volume of direct mail advertising, national magazine 
advertising, quality and size of catalog, degree of feedback and support 
to AUTHORS, years in business, professional trade affiliations, telephone 
support, multiple offices/sales locations, BBS support, response to 
request for information, promptness of shipments, refund policy, reporting 
of sales volumes to authors and other criteria. I also consider requests
by vendors for extreme discounts on registered packages and overt
requests for advertising revenues or other solicitations of money or 
exclusive distribution rights from authors by a vendor as negative factors. 
```
{% endraw %}

## FILE2315.TXT

{% raw %}
```
Disk No: 2315                                                           
Disk Title: $hareware Marketing $ystem                                  
PC-SIG Version: S1                                                      
                                                                        
Program Title: The Shareware Marketing System                           
Author Version: 90.FA                                                   
Author Registration: $10.00                                             
Special Requirements: Database (DBF files), or Spreadsheet program (WKS 
                                                                        
The $HAREWARE MARKETING $YSTEM is a detailed two part resource for      
shareware authors who need creative ideas and a RATED mailing list of   
over 800 major shareware distributors, large computer clubs and         
recommended BBS systems. The first part of the package, the shareware   
distributor's database, contains mailing addresses, phone numbers, a    
SHAREWARE DISTRIBUTOR RATING and other detailed data which can be used  
to prepare envelope mailing labels or BBS calling uploads.              
                                                                        
The database file is RATED by shareware distributor so you can mail     
your shareware to vendors rated A, B or C. The database file is supplied
in standard file formats such as dBase and 123 which can be directly    
imported into your database!  You can also sort lists of shareware      
distributors by zip, state or other criteria. Foreign and U.S.          
distributors and computer clubs are included.                           
                                                                        
The second portion of the package is a detailed newsletter and marketing
strategy guide which has been prepared by an established shareware      
author and contains dozens of creative tips, tricks and traps which     
every shareware author should review. Written by the author of the      
PC-LEARN computer tutorial which has accumulated over 9000 registrations
in 3 years, the $HAREWARE MARKETING $YSTEM provides detailed and        
experienced information in a frank, candid and sensible style. This is a
package for the shareware author who desperately needs CREATIVE IDEAS   
for positive financial results.                                         
                                                                        
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## TUTORIAL.TXT

{% raw %}
```

              THE $HAREWARE MARKETING $YSTEM (c) 1990   
                  (A shareware software package)

                  from Seattle Scientific Photography 
                    EDITOR, JIM HOOD (206) 236-0470
       MAILING ADDRESS: PO BOX 1506, MERCER ISLAND, WA 98040

████████████████████████████████████████████████████████████████████████████

SHAREWARE MARKETING STEP ONE - THE SOFTWARE MUST FILL A NEED!

████████████████████████████████████████████████████████████████████████████

To begin at the beginning, you have a software package or at least an
idea for a package. The first question is does your software fill a 
market need? And is the need so great that someone will pay money for
your solution? It is easy to confuse the hard work and frustration of
programming - which is considerable - with the perception that the package
must be worth something since you worked so hard to produce it. In reality
there is NO relation between your programming effort and the real need
for the program. Spend some time imagining and researching a large group of
computer users who have a need for a package you could produce. I'll
present a list of "new ideas for shareware" in just a few paragraphs.

Successful shareware fills definite market needs. Glance at the following  
list of truly successful shareware authors and ponder how your package 
fits into the market pattern of these documentable winners. You don't have 
to offer a similar package, just something that fills a real need that 
people will pay for! Notice that the serious players offer SEVERAL packages 
or offer one mainstream package and develop it to near commercial quality. 

Another pattern is that the successful packages tend to be somewhat 
mainstream (databases, spreadsheets, serious utilities, accounting) BUT
NEW IN CONCEPT. Still another pattern is that the winners hang in there for 
the long haul. They have patience measured in a duration of years. Another
pattern is speed: successful shareware authors bring a program to market
quickly before any other shareware (or commercial) company can. In some
ways this is the advantage of remaining an proudly independent programmer: 
you can quickly decide on program features and bring your new idea to market
faster than a large organization. A final pattern is dedication to 
excellence - successful authors continually refine and hone their programs 
to be the fastest, most user friendly then continuously update them which 
itself attracts considerable market attention. Study this list for patterns 
of SHAREWARE SUCCESS carefully!

LARGEST SHAREWARE ENTERPRISES

Buttonware - Baker's Dozen utilities, PC-Calc, PC-Type, XD, PC-File
Datastorm - Procomm telecommunications package
Quicksoft - PC-Write, PC-Browse, PC-Write Lite
Brown Bag - Homebase, Powermenu, Goalseeker, PC-Outline, Cash-Trac
Magee Enterprises - Automenu, Treeview
Expressware - File Express, Express Calc, Check, Graph, Onside.
PKWare - Pkzip
Hooper Inc - Finance Manger Accounting Series, Cheque it Out

MAJOR SOFTWARE COMPANIES

Trius - ASEASYAS, Draft Choice
AM Software - AM-TAX
Sydex - 22 Disk, Teledisk
FormalSoft - CubeCalc
Mustang - Mortplan, PrtLabel, Wildcat
Omniverse - Galaxy Word Processor

REASONABLY SUCCESSFUL INDIVIDUAL AUTHORS 

Neil Wagstaff - Family Ties
Justin Boyan  - Boyan Telecommunications program
Mark Adler - NY Word
John Friel - Qmodem
Mark Harris - LQ utilities
Dennis Lozen - Fastbucks
Robert Hime - Letters and Labels
Jerry Medlin - Medlin Accounting, PC-GL and others

██████ TIP ██████ Know thy timeline: it will take 3 to 5 years to build
critical mass behind your product. Be patient and hold on to that mail
room job for a while. Fill a need. Don't program games (low registration
potential) if you can program an application. Don't spend hours programming
a killer database when 1,760 databases already exist. Find a niche market,
create a niche market or spot a problem that isn't being solved. Watch for
commercial software packages that seem new or unusual in concept then
see if you can "shareware" the same concept to market quickly. Study other
shareware that is "almost" market perfect but somehow misses the mark.
Consider weaving the good ideas from several packages into one package.
Consider collaborating with another shareware author. You will have to
write more than one package if you are serious about shareware as a
marketing method!

As a starting point, consider these concepts for shareware packages:
Mapping and plotting of contours, conversion of satellite imagery,
business plan creation tools and templates, decision making software,
IEEE 488 interface programming tools, contractor accounting package
for DOD 2002, OCR with spell checking and AI, Criterium clone, AI
resume generator, VGA demonstration systems, Windows 3.0 programs and
toolkits, toolbook clone, libraries in C and pascal, dBase compiler, 
label printer with AI which can scan in any source document and find and
format label information, Rbase clone with royalty free runtimes, AI
Video store management system, clone any of the programs in the PowerUp
software catalog, Reflex clone, extremely complex vertical market 
management and market research packages for banking, law, medicine
and biotechnology, database compilations of selected mailing lists,
shareware magazines, package-specific tutorial systems, home business
planning and marketing packages, shareware distributor inventory
and billing packages, direct mail planning and marketing kits, how
to deal with lower back pain for computer programmers, planning and
pricing a move to another state, job finding kits, foreign investment
guides, lists of Russian entrepreneurs, emerging home office income 
opportunity newsletters, tropical fish disease database, packages for 
senior citizens on a state by state resource basis and on and on! 
This is just a little from the "fat idea file" on my desk! 

If you really want to stretch your thinking, go down to your local library 
and scan through shelves of books and magazines and ask the question: could 
I do this as an interactive shareware package and find the precise market 
niche for the product? Books and magazines are the ultimate random access
device - a floppy disk and computer are really just the same thing with
a little more speed and intelligence. 

A beautiful concept for a package I had is a TOTAL management and billing 
control package for a person taking care of a senior citizen - the package 
would manage medical billings, physician appointments, banking and money, 
dental claims, unpaid bills, income sources and so forth. With the
graying of the baby boom generation this is sure to be an explosive 
opportunity. I have hundreds of ideas and more like this in a fat folder on 
my desk - and I don't have the time and programming skills to make these 
ideas happen! Write me if you want to brainstorm ideas for packages nobody 
has yet done which may have incredible market potential as the shareware 
market matures. I would like to see shareware distributors start compiling
a list of "needed software" derived from actual requests of their customers.

Better yet, this could become the "bright ideas" database within this
$hareware Marketing $ystem: you submit an idea which is maybe a little too
complex for you to program or team up with a programmer to write
the tough code while you work on an elegant user interface - follow
the drift? There are MILLIONS of programs which have yet to be written
and I would like to see shareware authors capture the largest part of
the pie. I'm on your side since I am a shareware author too!

My next bright idea is a shareware DISTRIBUTORS newsletter with a 
compilation of the best and brightest marketing ideas I have seen and
discovered from shareware distributors throughout America. I'll bet
most shareware distributors would find such a newsletter interesting and
my idea and concept file for that package is already 8 inches thick (still
too thin for me to get interested just yet!)

I hope you sense the concept: ORIGINALITY, PROFESSIONAL EXECUTION AND RAPID 
DISTRIBUTION are more important that raw programming skills! 

Avoid the standards which everyone else writes such as bible search 
programs, text managers, hard drive menu systems, checkbook programs, 
general ledgers, genealogy systems, tiny little printer utilities,
games, lotto pickers and spreadsheets. There are millions of other 
brighter ideas.

PC-LEARN evolved in a more or less logical fashion. As the coordinator for 
a computer club I noticed an insatiable need for a SIMPLE tutorial for 
beginners. I wrote a few articles for the club newsletter which were 
avidly snapped up. Next I compiled several articles into what might
be termed a PC-LEARN prototype. Response was good, but the articles were
deemed too complex! Back to the drawing board and another try. Each time
I got a little closer the market told me what to do next. I searched shareware
catalogs for competitors to PC-LEARN (there were some, but lacking in some 
areas of content and simplicity). I checked commercial sources for similar 
tutorials which gave me further encouragement. Finally I submitted an early 
version of the package to several BBS systems and PC-SIG which is a large 
shareware distributor in California. Still more revisions and more aggressive 
marketing followed. I was prepared to wait about five years and then
abandon the product since my commercial photography business was far more
profitable with a lot less effort. But then the magic happened and 
PC-LEARN began to bring in registration checks and I knew I might be onto 
something interesting. Moral: programming a package is the easy part.
Marketing persistence and patience measured in terms of years is where 
the work really starts!

Reasons to try shareware distribution methods? You can't afford a major
advertising and promotion budget. You need extra income but already have
a job. Your existing package for a consultation client is good and
might be adapted to a larger audience. Your small utility or game just
wouldn't be attractive in the commercial software market, but a realistic
extra $50 or $100 per year for your small package might be a stroke 
to the ego. 

████████████████████████████████████████████████████████████████████████████

SHAREWARE MARKETING STEP TWO - PROGRAM LOGISTICS

████████████████████████████████████████████████████████████████████████████

The best shareware adheres to certain common formulas:

Strive to have your package run on humble monochrome machines as well as
sophisticated VGA graphics computers. Can your software auto-detect 
various graphics resolutions and adjust accordingly? Remember that
there are more monochrome machines out there than anything else. The 
customer can't send you a registration if he/she can't even read the
registration request screen! High end packages have a very narrow base
of support for registrations!

Make the program run by intuition. Meaning: can the user fire it up and run
your program without even glancing at the documentation. Good shareware 
is self-documenting as it runs!

Don't rely on windows specific programs unless you are willing to wait
until the majority of users run Windows. If you must, offer a version
for windows and a non-windows version.

Don't program specifically for 286/386 chips or math co-processors unless you
want your program to leave the majority of users behind. Auto-detect these
chips but don't hardwire instructions for these chips directly into your
code. 

Make sure the program is REALLY bug free. If necessary reduce your
program features even if you suspect a bug might be contained in a 
flashy graphics or machine code sequence. Shareware already has a 
reputation for being buggy in the eyes of many users.

Consider having the program display a copyright and registration notice as
the first welcome screen. This protects you and certainly reminds the 
user of your program of the need to register. In the shareware trade this
is usually called the "beg screen."

Will your program fit in whole or logical portions of standard 360K floppy
disks? This is essential. Don't require a hard drive unless the program
absolutely needs it. Provide two versions - one hard drive compatible and
one floppy compatible, but don't neglect the big market of users with 
simple machines.  While we are speaking about drives, do not ever hard 
code a floppy drive or directory into your program. Always allow a default
directory and user selectable switching to other drives and directories.
If necessary provide either a separate configuration program for drives,
colors, and options or provide choices from a menu within the program. Not
everyone's computer is the same as yours! The majority of machines out
there are probably simpler than your machine.

██████ TIP ██████ Consider "brain bartering" Example: your package has
many software features, but you need some excellent documentation upgrades
for your package but aren't a good writer. Try swapping some programming
skills with another shareware programmer whose package needs some revision
or bug fixes in exchange for that author doing a serious rewrite of your
documentation. No matter how proud you are of your programming skills,
there is another shareware author out there who is better at machine code,
documentation production, beta testing or something you can't do. Make a 
list of what your program needs but you don't know how or have time to 
accomplish. Post a message on a BBS system or write directly to another 
shareware author. Brain bartering! I would like to list in this publication
a brain barter database: send me a note about what programming skill you
can offer and what programming skill you need. Write it like a little 
want ad, ship it to me on ASCII disk and we thus have the brain barter
database! I have some definite needs for programming upgrades to my
own package PC-LEARN that I do not know how to accomplish. Write me!
Believe it or not I don't know how to program in BASIC, C, PASCAL or
even dBASE. I just tinker with batch files and program in the english 
language. Take a look at PC-LEARN and you will see loads of English
but little programming!

Crippleware (a program with limited features, date or time traps, or other
cripples) is a sure looser. No crippled programs have ever made it in
shareware! At one time the famous WAMPUM database had a date trap cripple
which has now been removed. Moral: As soon as a user even faintly
smells a cripple your program is out of the running for that registration
check!

If you make references to DOS commands be PAINFULLY clear. A lot of users
still don't understand statements such as "boot DOS then diskcopy your master 
floppy onto a backup diskette then prepare two HD subdirectories, one for 
the program and one for the data." This seems pretty simple, but will 
confuse a lot of users who will not even try your program. Explain DOS 
commands clearly with painfully simple examples in both your program and 
documentation.

Consider offering a detailed DOS training course in your documentation 
which some users will register even if they could care less about 
your program! See my DOS Tutorial in PC-LEARN if you want to examine
painfully simple examples of DOS commands which many users can't seem
to get enough of! Notice that many good shareware distributor catalogs
always have little mini-DOS courses on the inside cover. Notice that
commercial software houses such as Borland include mini-DOS courses
in the appendix section of their program manuals. Moral: there are
a lot of computer novices out there who need clear instructions and
will send you a registration check if you can keep your documentation
clear, simple and useful.

████████████████████████████████████████████████████████████████████████████

SHAREWARE MARKETING STEP THREE - DISTRIBUTION AND MARKETING LOGISTICS

████████████████████████████████████████████████████████████████████████████

The final product pending yet another inevitable revision is the
DISTRIBUTION DISK which is duplicated and submitted to shareware vendors,
computer clubs and unsuspecting neighbors and co-workers. Some checkpoints:

Always include a file named README on the disk. The README file must be
sorted to the top of the directory listing. No exceptions! I suggest not 
even using a file extension (e.g., don't use README.TXT.) Here is why: when 
you sort the files in final distribution order (best by extension then 
filename) the README file will sort to the top of the directory where it 
belongs and where it will catch the eye and serve its purpose. Within the 
README file the first item at the top of the should be the program name, 
version number, author mailing address and provocative description 
including some "sizzle words."

The top of the README file is the most valuable real estate in a shareware
disk! Use it well! It demands more programming time and thought than the
rest of your program code!

Your program description must be provocative and precise. A reviewer will 
look for this first and frequently use it verbatim as a catalog listing. A 
user will be encouraged to try the program. The description isn't just a 
description, it must sizzle with what might be termed marketing adjectives! 
Obviously don't overdo the sizzle to the exclusion of the steak. Look again 
at the first item in the README file on this disk.

                         (example follows:)

                      VERSION 90.FA (1990-FALL)

               THE $HAREWARE MARKETING $YSTEM (c) 1990   
     A shareware software package from Seattle Scientific Photography 
                    Editor, Jim Hood (206) 236-0470
         Mailing address: PO BOX 1506, Mercer Island, WA 98040

 ---->     To start:     A>GO   <then press return/enter key>


                         DETAILED DESCRIPTION

The $HAREWARE MARKETING $YSTEM is a detailed two part resource for shareware 
authors who need creative ideas and a RATED mailing list of over 800 major 
shareware distributors, large computer clubs and recommended BBS systems. 
The first part of the package, the shareware distributor's database, contains 
mailing addresses, phone numbers, a SHAREWARE DISTRIBUTOR RATING and other 
detailed data which can be used to prepare envelope mailing labels or BBS
calling uploads. The database file is RATED by shareware distributor so you 
can mail your shareware to vendors rated A, B or C. The database file is 
supplied in standard file formats such as dBase and 123 which can be 
directly imported into your database!  You can also sort lists of shareware 
distributors by zip, state or other criteria. Foreign and U.S. distributors 
and computer clubs are included. The second portion of the package is a 
detailed newsletter and marketing strategy guide which has been prepared by 
an established shareware author and contains dozens of creative tips, tricks 
and traps which every shareware author should review. Written by the author 
of the PC-LEARN computer tutorial which has accumulated over 9000 
registrations in 3 years, the $HAREWARE MARKETING $YSTEM provides detailed 
and experienced information in a frank, candid and sensible style. This is a 
package for the shareware author who desperately needs CREATIVE IDEAS for 
positive financial results. Updates are planned (4 issues per year) and 
monthly updates are contemplated. Program runs on ALL systems and does NOT
require color or special graphics. You will need a database program such
as PC-File, Wampum, dBase, Rbase, Reflex or any database program which
can load in files in dBase III format (DBF files). You may also use any 
spreadsheet program which can load in Lotus (WKS) files as an alterntive 
if you do not have a database.

                         (end of example)

Notice that IMMEDIATELY the reader locates the essentials: what is the
name? What is the version? What is the description? Is the description
interesting? If space permits within the README file also include a list
of files and their descriptions, sizes and dates as well as further 
instructions on how to start the program and print the documentation.

A distribution disk should be defragged, date cleaned, EN sorted and spell 
checked. What does this mean? 1) Use a file defragmentation program to make 
all files contiguous prior to preparing the distribution disk. 2) Run a small 
utility like TOUCH.COM on the disk so all files have the same date/time stamp. 
3) Run a file sorter like Norton on the disk to sort the files first by 
extension then by name (EN sort). 4) Use your word processor's spelling 
checker to clean up unprofessional documentation spelling errors (we're all 
human!) I am always amazed at how many shareware authors overlook these 
basic requirements! Also never use subdirectories on your main distribution 
disk!!!

Prepare thorough documentation in ASCII text for your program. Include 
instructions on how to print it for the novice user. Maximum suggested
text width is about 65 columns to allow for margins and printer variations.
Consider ALL of your documentation for novices and prepare it accordingly.
Document all auxiliary programs, special drivers and configuration programs
as well as the main program! Don't use jargon; give examples of steps you
intend. Moral: Good software gets the customer interested, but good 
documentation gets the registration sent!

Many programs require adjustment of the AUTOEXEC.BAT or CONFIG.SYS files.
Explain this in detail and give examples! You cannot explain BATCH files,
AUTOEXEC.BAT or CONFIG.SYS too frequently!!!

If possible provide example letters, files or other data so a user can
play with the software with dummy data to quickly see if the package is 
useful.

Many shareware authors ship large programs in ZIP or ARC compressed format.
Be sure to thoroughly explain how to unpack to single drive systems, 
double drive systems and hard drive systems! Harder than it sounds when
you consider the variations! Try to construct batch file(s) to unpack or
configure the program to various systems. As a clue to unpacking to
single drive systems, instruct the batch file to create a ramdrive, ukpack
the archive file into the ramdrive and then copy it back onto a formatted
floppy. Conversely, you could copy the archive into the ramdrive and then
directly unpack onto one or several floppies. You get the idea . . .

Recently PC Magazine offered a batch file compiler utility which makes slow 
clunky batch files fly. Consider compiling your batch files. The little 
compiler is named BAT2EXEC.COM and was discussed in VOL9N15 of their 
Magazine. The utility itself is contained on many bulletin boards and the 
PC MagNet service on Compuserve. It is sure to become a classic!

Always include an invoice in standard layout format in several areas of
the program as well as an exclusive menu option. Some shareware programs
even make it an option every time the program exits! Corporate users and
Government offices require an invoice to process billings. The simple
statement "$30 registration required" doesn't cut the mustard! Include
a line for purchase order number if space permits.

Whenever you ship a disk to a distributor or customer the prevailing
thought is to enclose a pleasant business letter describing the
program and asking the reader to consider using it or adding it to his/her
list. My own personal opinion is to reprint the README file from your
disk verbatim and submit it instead of the pleasant business letter!
If you can't submit it verbatim, fix your README file! It should be more
effective than the polite business letter because it has a clearly focused 
market style understandable to readers, reviewers and users of shareware.

██████ TIP ██████ Make sure you receive a catalog from each distributor
to whom you have sent a disk. Jot a note in your computer database about 
the date you shipped them a disk. Get a catalog from them 4 to 6 months
later to determine if your program has been listed. Call their toll free 
number. Give them the name of your cat and mailing address for a free catalog 
so they don't cross reference your name on their mailing list. Some 
distributors are notoriously stingy sending out free catalogs and thus won't 
send you one if they know you are only a shareware author poking around 
trying to see if your software is finally listed in their catalog - they may 
have your name on file in their computer, but certainly not your cat's name!

Two disk-based catalogs which I especially enjoy are from PrairieWare
and Disk Count Data, both of which are listed in the main database.
Disk-based catalogs are interesting in that we are beginning to see
some distributors exploring new frontiers in catalog production using
disks which are infinitely more recyclable than chopping down trees for
paper - call this a personal bias, but I wish the shareware industry
would head this direction. When you are tired of the disk, put something
new on it and send it along to someone else! I don't think most trees will
complain, and the petrochemicals used to make disks are already dead!

If you are archiving all or sections of the program be logical! Will
each unpacked archive still fit on a single 360K floppy? I have seen 
many archived programs which are too large to unpack to single floppy disks.
You can kiss many registration checks goodbye from owners of simple 
machines.

Is the archive file name descriptive and possibly hint at the version number?
(e.g., THE LAWNMOWER REPAIR UTILITIES Version 3.6 = LAWNUT36.ZIP)

Label your disks professionally. On a single label at the top of your 
disk use a large font for the program name and version, a medium font for 
the startup command and finally a small font description of the program. 
Some shareware authors use oversize labels and almost squeeze the entire 
README file onto the label - which is not such a bad idea! Just as the
README FILE is the most valuable real estate inside a disk, the label is 
the most valuable real estate outside a disk! Think like a marketing animal
and program like a marketing animal! There are many good label programs
which will run on humble dot matrix printers. Many of these programs are
shareware or public domain. Speaking of labels, I prefer to make mailing
labels (for the outside of the shipping envelope) on plain paper, two
or three up, and simply cut and glue them to the face of the envelope.
Saves a lot of money on sticky Avery labels when you mail out a lot of
disks if you think about it!

Update your database list and record to who and when the distribution
disk was mailed.  Make a note to check back in 6 months to see if the
distributor added your disk to his/her catalog.

In general, mailing your shareware to a distributor not within the United 
States is a waste of time. I have received little if any response from 
either distributors or customers outside the United States. 

In some respects this may represent a poor understanding of shareware and 
how the cash flow should work. My personal opinion is that while about 
85% of U.S. users won't register your package even though they use if for 
many MONTHS, somehow about 154% of foreign users won't register even though 
they use it for many YEARS! In many respects U.S. distributors maintain 
operations in other countries (e.g., PC-SIG and GEMINI) so if you submit your 
shareware to them, it will find its way overseas anyway. 

██████ TIP ██████ I have put a single blank space in the database listing of 
shareware distributors in FRONT of the city field for foreign distributors. 
So if you sort the database by city, the foreign distributors will jump to 
the top of the list and you can ignore them or use them in your mailing as 
you wish.

██████ TIP ██████ Use "distributor leverage" to get your foot in the door.
Example: once my package PC-LEARN was officially listed by PC-SIG, most 
other shareware distributors were willing to add it to their library just to
"maintain marketing parity" with PC-SIG. Moral: work hard on listing
with the big distributors, then let the smaller ones know via a printed
letter accompanying your submission that major distributors have assigned 
your program to their catalog. Include the disk number/catalog number 
for that major distributor as evidence!

Should you distribute to computer clubs/users groups? My personal opinion is 
to mail to the shareware distributors first and mail to only the largest 
computer clubs sparingly. 

The reason, although this may raise the ire of computer clubs, is that most 
club members are awash in shareware anyway and seldom check each new offering. 
Only the largest clubs have a newsletter which might feature your shareware
as a new addition to the library. The rate of registrations I have 
experienced in my own documented analysis of registrations coming from 
computer club sources versus shareware distributors is about 20:1. Meaning 
I receive about 20 registrations from distributor's clients for every
one from a computer club member who directly traced their source copy to 
the club library. In general the shareware distributors catalogs reach 
more people who need shareware than those who are already awash in 
shareware! Mail to a few of the largest clubs and skip the rest. Them's the 
hard facts . . . 

██████ TIP ██████ Two superb target audiences are 1) folks living in smaller 
towns beyond the major metropolitan hubs and 2) seniors who have a little 
more time than most of us and are just getting started in computers. Sounds 
crazy but many registrations I receive are from little towns and are seniors 
if you carefully read the notes, questions and comments. However your package 
must be simple and attractive for this type of audience: a database, 
gardening guide, genealogy system, or personal accounting package would be 
a good candidate. A cross compiler wouldn't, obviously! Moral: if you decide 
to buy a small ad in a publication to try marketing your package directly, go 
for a logical four star choice like the TOPPSQUASH TRAVEL AND LEISURE GUIDE.
Or even your own church bulletin if you have a religious software package.
Skip the expensive ads in computer magazines. Are you after money or an
ego stroke in an expensive magazine?

You might consider joining the ASSOCIATION OF SHAREWARE PROFESSIONALS to 
further your education if you are serious about your software. The ASP
has the backing of major players like Buttonware, Magee and Quicksoft
and some fine ideas for marketing and mutual support. Dues are $50 per
year. One drawback is that currently information flow is limited to 
Compuserve meetings on line and personal updates at Comdex. I don't belong 
simply because I am just too busy, but I certainly endorse the concept of
shareware authors banding together and helping each other in a constructive
fashion. 

The ASP publishes a disk based catalog which freely circulates among U.S. 
BBS systems which you might wish to examine. The ASP was formed in 1987 
and members subscribe to a code of ethics. No ratings are given to member 
shareware. The ASP Ombudsman can help customers resolve disputes with ASP 
members. The ASP maintains four forums on Compuserve: IBMJR 8, 9, 10 and 11. 
IBMJR 8 and 9 are open to the public. Type GO SHAREWARE at any prompt. In 
addition a recent agreement with Compuserve will allow any shareware user 
who registers an ASP shareware program a free membership to Compuserve and 
a $15 usage credit. 

ASP members agree to allow their programs to be examined and approved by 
the membership board. In addition, ASP members must agree not to cripple 
the program and must provide adequate support and documentation.

Their trademarked symbol and address follows:

                               ┌─────────┐(tm)
                         ┌─────┴───┐     │
                       ──│         │o    │──────────────────
                         │   ┌─────┴╨──┐ │  Association of
                         │   │         ├─┘  Shareware
                         └───┤    o    │    Professionals
                       ──────│    ║    │────────────────────
                             └────╨────┘    

                              The Association of
                           Shareware Professionals
                                P.O. Box #5786
                              Bellevue, WA  98006

██████ TIP ██████ You can also try to simultaneously distribute both
commercially and via shareware. Kevin King, the brilliant owner at 
DISK-COUNT DATA shareware distributors, is one of the most amazingly
creative people I have bumped into. He developed a little commercial
retail package and distributes it to small stores with shareware packed
inside. It is easy to understand: Obtain standard 7 x 9 inch poly plastic
bags. You can use the expensive ones with ziplock seals from your grocery
store or just look in the yellow pages under BAGS and order 1000 count
non-ziplock types. Next design some nice artwork via a desktop publishing
program and professionally print it onto stiff colored card stock
exactly 7 x 5 inches in size. A printer can put two of these labels on
a single standard sheet of card stock. Fold the newly made card label
across the top of the bag, staple it shut and punch a hole in it for
hanging on a rack. Cheap, effective retail packaging. I have extended
the concept with PC-LEARN so that users return the yellow label for their
bonus disk which tells me they got it from a retail location. Good 
locations for this kind of humble retail package are college bookstores,
retirement homes, libraries, small stop and shop convenience stores and
many stores with magazine racks. It has worked for me. Be sure to contact
Kevin King at DISK-COUNT DATA for one of his amazing little DISK-BASED
shareware catalogs. Kevin runs a major business out of Hot Springs 
Arkansas and is a bottomless fountain of SUPERIOR marketing ideas! His 
address is in the main database.

Next let's examine superb author feedback and shareware distribution the way 
the pros do it: at PC-SIG and Public Brand (addresses in the main database.) 

At PC-SIG you will first be sent an application form which must be 
scrupulously filled out and returned. The review process takes from one to 
three months. A reviewer will eventually check out your shareware and send 
you a second response as the process moves along. 

The front of the PC-SIG form is a combined submission and update form. At 
the top right is a submission tracking number for packages under evaluation 
but not yet accepted into the library. Also on the front are spaces for 
the following: program title, version number, update or new submission 
checkboxes, author name, address, city, state, zip, day tel, evening tel, 
checkboxes to acknowledge that you are the author and submitting it as 
shareware or public domain, signature and date.

On the reverse of the form are spaces to assist the reviewer. It is highly
suggested that this information be submitted in ASCII on disk. The 
information on the back of the form is as follows: program title, detailed
description, who is intended user, (if this is update,) what are improvements 
over old version, unique features/why is your program better, program's
capacity or limitations such as record capacity, special system requirements 
such as memory/drives/monitor, how to start program, registration fee, 
materials or services which come with registration, list of files and one 
line description (ASCII file preferred).

Many packages don't make it at PC-SIG because of poor quality and
software bugs. The second advisory letter will acknowledge that PC-SIG
is reviewing your program in greater detail.
 
Finally if all goes well, the final acceptance letter arrives noting the 
formal PC-SIG catalog number. A nice shareware author's newsletter is also 
sent from time to time to keep you abreast of catalog deadlines and 
deadlines for their CD-ROM disk of library offerings. When you submit an 
update, the special submission form always accompanies your disk. 

Nice, effective and very professional. The newsletters give you an inside 
track on the shareware industry and you have a chance to change or edit the 
description of your program if the reviewer places your program in the main 
catalog. PC-SIG is one of the few distributors which can actually track and 
tell you how many of your packages have been shipped. They decline to give 
you customer names and addresses which makes sense when you consider the 
logistics, but this is a REAL PLUS which few smaller distributors can 
provide!

Public Brand is similar yet different. Step one is a submission and 
acknowledgement form similar to the PC-SIG method. Step two involves
posting on their BBS system for review by many others as well as their own
reviewers. Step three, of course is an acknowledgement letter. They do an
equally nice job and in some ways their catalog with ratings, registration
prices and new releases of previously commercial products like X Tree
and (previously Brown Bag Software's) VP-Info Relational Database places 
them among the best. 

Many other fine shareware distributors exist on the scene, but these two
place a premium on author feedback, acknowledgment letters, and logistic
support systems that redefine the word distributor. If nothing else, 
information about these two companies will prepare you for what lies ahead
and give you a yardstick by which to gauge other distributors. As a minimum
even the smaller distributors should at least send an inexpensive postcard
to authors to acknowledge submission of disks - many don't however!

Many smart shareware distributors are now paying for or swapping mailing 
lists of customers. Moral: keep a tight database of customers who register 
your product and resell it or swap for more names with a shareware 
distributor. Remember you can make money selling information and information 
ABOUT information.

████████████████████████████████████████████████████████████████████████████

SHAREWARE MARKETING STEP FOUR - CASHFLOW AND REGISTRATION CONSIDERATIONS

████████████████████████████████████████████████████████████████████████████

You will never forget the day. The day you open the mailbox and your
FIRST registration check arrives! My first check came from Orlando, Florida
several years ago. Orlando is a long way from Seattle where I live. It 
boggles the mind! You design something and toss it out on an electronic 
wind called the shareware distribution network and it finds someone who 
will pay you for your package. Over the space of about three years, more
than 9000 little envelopes arrived. Shareware is amazingly heady stuff!

But let's back up a few steps. How much should you charge for your package?
A good place to do some research is catalogs from Public Brand Software
and PC-SIG which are listed in the main database of this package. These
catalogs list the registration fees for many shareware packages and will
give you some ideas about what you should charge. In general, graphics
packages, games and small utilities are in the $5 to $20 range. Larger
applications packages like databases, accounting systems or word processors
typically are priced at about 30% to 50% of their commercial counterparts.
Specialized vertical market software (e.g., a billing system for a dental
office) are priced higher in the $50 to $300 range due to the smaller 
market and frequent need for higher and more sophisticated customer 
support. PC-LEARN, my package, is priced at only $10.00. My interest is
volume and a more than attractive price.

What goodies or "carrots" should you offer to induce registrations? 
Traditionally a printed manual, telephone support and a free update are 
commonly needed by users. Update notices should be mailed out giving the
chance for customers to upgrade. Upgrades are usually priced at about 
15% to 25% of the original package price. Other goodies might be a 
bonus disk which is the method my package PC-LEARN uses. What's in the
bonus disk? Why a BONUS, of course! Site licenses for larger software
installations, universities and businesses should be mentioned even if
no price is given. Other goodies to be considered are newsletters, source
code or utilities which augment the main package.

Registration cash flow is serious business. As a minimum PROMPTNESS is 
essential. Train yourself to provide same day or next day response to 
all arriving registration checks. Even if your package promises no support 
or update, send out a registration number and thank you letter as a minimum. 

Going on vacation? Hire a friend to cover your registration system. 

Visa and Mastercard are good possibilities if you want to aggressively enter
the profitable phone order business and is a good thing to mention in your 
documentation. Your bank can provide information about setup procedures 
which are fairly simple. A fee is charged to you for each transaction. 
You will probably be asked for trade references and account status 
information so be prepared to provide some financial background information. 

If you raise the price of your program you will have to content yourself 
with honoring the lower price for a few years since any older version of 
your software will inevitably sit on a bulletin board in Southeast Toppsquash 
for years before it is updated. Don't even be tempted to raise the price on 
a customer who sends you a check. You might, however make it a condition in 
a polite letter than you will give him/her the newer higher priced version 
at the old price if they will tell you where they got the old program so you 
can update it and get it forever out of your hair!

Telephone support is a pandora's box. It seems to be a bottomless pit of
time with no recognizable income potential. But just remember that 
Wordperfect (tm) has become a major word processor for, among many reasons, 
the unlimited excellence of its support. The toll free Wordperfect telephone 
number even appears on the help screens of the program itself! One 
reasonable way to provide support is to note in your documentation that
support is available only evenings or weekends or at certain times of the
day. 

Next an amazingly powerful idea from Bob Wallace of Quicksoft and PC-Write
fame:

On the subject of unregistered users, it is best to answer a few questions 
and politely suggest that other calls are on the line and mention that 
the caller may register for full support. The PC Write offices of Bob Wallace
use PC-Browse (one of their products) to pop up over ANY application they 
happen to be running and quickly scan for a registration number via a 
hypertext link. If the number is there, bingo, you are talking to a 
registered user. Yet you don't have to dedicate one computer to a 
registration database when everyone in the office can pop it up over any 
screen at any time. Clever, don't you think? Take a second look at PC-Browse
with this idea in mind and DON'T FORGET to register PC Browse if you
use it. Both Bob Wallace (Quicksoft/PC-Write fame) and Jim Button 
(Buttonware/PC-File fame) have personally presented programs at our small 
Mercer Island computer club in past years and I am impressed that authors 
of major programs like Jim and Bob as well as authors of little programs 
(like me!) appreciate and deserve that registration check! 

████████████████████████████████████████████████████████████████████████████

SHAREWARE MARKETING STEP FIVE - COMMERCIAL AND SEMI-COMMERCIAL MARKETING

████████████████████████████████████████████████████████████████████████████

So that is the system, right? Hardly. The next step which the largest and
most successful shareware authors have followed is both commercial and
"semi-commercial" marketing. This means stepping outside the shareware
distribution network into the real world of commercial advertising and
marketing. 

Consider PC-File from Buttonware. A classic product with superb features 
and ease of use. A shareware product which has also made its way into
commercial distribution channels like the Egghead Software Stores.
Another is Procomm which now has a commercial version. If you follow the
drift, the next target is to push yourself and your product a little 
harder. 

Can you convince a local retailer to carry your product on his or her 
magazine rack? Will a local software or magazine company accept 50 free
copies of your product (in attractive packaging) for a test market run
in their outlets? With PC-LEARN, my product, I place small ads in local
and community papers and allow editors of those local papers to serialize
the package in print as a computer column with questions, answers and
of course sections of PC-LEARN. I require that the editor run a display
ad featuring PC-LEARN next to each reprinted section of the article in
each issue of the paper. 

The traditional channels of shareware distribution can only take you so
far. Buttonware knows this and so do most of the major players on the
shareware scene. By carefully, inexpensively and cleverly finding
or bartering for commercial advertising space you ramp up your project
just as the major players do. Remember I said that PC-LEARN received
about 9,000 registrations in three years? I would estimate 1,500 to
2,000 came from traditional shareware sources. The remaining majority
from semi-commercial routes like newspaper ads and bartered swapping
of sections of PC-LEARN in exchange for advertising space. The point is 
this: to play for serious registration money you must be prepared to put 
in as much (if not more) time on marketing than on programming. 

████████████████████████████████████████████████████████████████████████████

SHAREWARE MARKETING STEP SIX - CURVEBALLS AND "SNAREWARE"

████████████████████████████████████████████████████████████████████████████

Into every life a little rain must fall, as they say. 

If you choose to actively and aggressively market your shareware through
established distributors, be aware of "interesting offers." Most shareware
distributors are reputable and fully understand that authors are their
lifeblood. However a few distributors like to put a spin on things and
will call you with various "pitches." 

Examples: one shareware distributor has an interest in offering registered
versions of your program in addition to shareware versions. Nothing
wrong with that, but be aware that the distributor may want a DEEP
discount for volume packages of the registered version which cuts into
your profit, depending on your interest. The distributor may propose that
deep discount registered versions be offered by you to him as a 
requirement to listing your program in that distributor's catalog.

Other distributors may call asking for exclusive rights which locks your 
package to them as a sole distributor. Still others may call or write asking 
you to help pay for advertising or mailing of their catalogs as a condition 
before they will accept your program. I personally feel there is nothing
wrong with purchasing advertising in a distributor's catalog or mailing
if the opportunity presents itself, but making this a requirement prior
to listing your program is an arm twist of a different sort. Still another 
distributor who we shall leave unnamed proposes that gold stickers 
(costing $1.00 each in minimum rolls of 100) be required to be placed on 
your disk and exclusively available from that one distributor - before other 
distributors can further pass around your software. The gold stickers arrive
with a serious legal contract which other distributors must sign.

You get the drift. Human ingenuity can put a mischievous spin on a simple 
idea (shareware - try it before you buy it.) Basically, be prepared
for interesting calls and proposals if you get involved with distributors.
For some reason a few distributors seem to feel that they can obtain
money both downstream (from the customer) as well as upstream (from the
author). Keep your antennae up. By the way, some of these "interesting
proposals" have come to me from ASP affiliated distributors which is
a curious twist on ethical standards, to say the least . . . 

Moral: don't allow shareware to turn into SNAREWARE!

Thanks for spending some time browsing through this article and considering
the opportunities in shareware. By helping each other we all have a little
fun and share in a little income. Even if you may not be interested in
registering or subscribing to the $HAREWARE MARKETING $YSTEM, drop me
a note if you would like to share an idea or provide constructive criticism. 
If it is a good idea, I'll give you a free one year subscription (four 
quarterly issues.)  

My best regards . . . I'm a very small shareware author by most standards, 
but my hope is that you will borrow some of my tricks and go for a shot at 
the brass ring. My sincerest wishes for your success in the shareware 
industry!

████████████████████████████████████████████████████████████████████████

                        ABOUT THE AUTHOR 

████████████████████████████████████████████████████████████████████████

Jim Hood is a commercial photographer by training and a computer hobbyist by 
preference. He resides about 3 miles from Seattle, Washington on Mercer 
Island, a city of about 24,000 people in the middle of Lake Washington. 

A former coordinator for the Mercer Island Computer Club, Jim divides his 
time between computer related hobby activities and the operation of Seattle 
Scientific Photography which produces 35mm lecture/presentation slides for 
a variety of clients. 
     
Jim attended the University of Sophia in Tokyo, Japan and Seattle University 
in Seattle. He has taught classes at the University of Washington 
Experimental College. His first shareware program, PC-LEARN was written 
using the PC-Write word processor. That program absorbed approximately 
950 hours of programming, editing and research time. PC-LEARN is distributed 
by many reputable shareware software distributors. Your honesty in 
submitting a registration fee for using PC-LEARN or THE $HAREWARE MARKETING 
$YSTEM is appreciated!
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2315

     Volume in drive A has no label
     Directory of A:\

    README            8665   8-23-90   3:02p
    DRIVER1  COM      2048   8-23-90   3:02p
    DRIVER2  COM      2048   8-23-90   3:02p
    DRIVER3  COM        34   8-23-90   3:02p
    GO       COM      1431   8-23-90   3:02p
    VIEW     COM       958   8-23-90   3:02p
    DISTRIB1 EXE     69065   8-23-90   3:02p
    DISTRIB2 EXE    102521   8-23-90   3:02p
    DATABASE TXT     18224   8-23-90   3:02p
    REGISTER TXT      4405   8-23-90   3:02p
    TUTORIAL TXT     51083   8-23-90   3:02p
    FILE2315 TXT      3109   9-21-90  11:56a
           12 file(s)     263591 bytes
                           53248 bytes free
