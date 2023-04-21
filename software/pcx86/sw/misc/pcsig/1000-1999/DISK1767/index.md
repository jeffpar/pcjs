---
layout: page
title: "PC-SIG Diskette Library (Disk #1767)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1767/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1767"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ZIPKEY"

    With ZIPKEY no one with a PC will ever again have to manually type in
    the name of a United States city or town (at least not one big enough to
    have its own zipcode).
    
    When run as an ordinary program, ZIPKEY allows you to instantly access
    any of the 43000+ zipcodes in the directory by searching by zipcode, by
    state-and-city, or by city-only.  But ZIPKEY is at its best when
    installed permanently in memory.  In this "memory-resident" mode, you
    can invoke ZIPKEY from within any other program (a wordprocessor, a
    database manager, etc.).  You can type just a 5-digit zipcode, and
    ZIPKEY will fool the program you're running into thinking that you have
    typed any or all of the following: the city name, the state name and/or
    abbreviation, the zipcode, and any other combination of fixed
    keystrokes.  This "keystroke output" can be in any format you wish.
    
    ZIPKEY is completely configurable.  You can specify any combination of
    keystrokes (the "hotkey") that will invoke ZIPKEY.  You can also
    specify
    alternate hotkeys to allow differing configurations of ZIPKEY to be
    available at the same time.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1767.TXT

{% raw %}
```
Disk No: 1767                                                           
Disk Title: Zipkey                                                      
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Zipkey                                                   
Author Version: 1.08                                                    
Author Registration: $30.00                                             
Special Requirements: Hard drive recommended.                           
                                                                        
With ZIPKEY no one with a PC will ever again have to manually type in   
the name of a United States city or town (at least not one big enough to
have its own zipcode).                                                  
                                                                        
When run as an ordinary program, ZIPKEY allows you to instantly access  
any of the 43000+ zipcodes in the directory by searching zipcode, state-
and-city, or city-only.  But ZIPKEY is at its best when installed       
permanently in memory.  In this "memory-resident" mode, you can invoke  
ZIPKEY from within any other program (a word processor, a data-base     
manager, etc.).  You can type just a 5-digit zipcode, and ZIPKEY will   
fool the program you're running into thinking that you have typed any or
all of the following: the city name, the state name and/or abbreviation,
the zipcode, and any other combination of fixed keystrokes.  This       
"keystroke output" can be in any format that you wish.                  
                                                                        
ZIPKEY is completely configurable.  You can specify any combination of  
keystrokes (the "hotkey") that will invoke ZIPKEY.  You can also specify
alternate hotkeys to allow differing configurations of zipcode to be    
available at the same time.                                             
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## ZIPKEY.DOC

{% raw %}
```
ZIPKEY zipcode directory program  V1.08      January 19, 1990

The entire package is Copyright 1989 Eric Isaacson.
All rights reserved.

   Eric Isaacson Software
   416 E. University Ave.
   Bloomington, IN 47401-4739
   (812)339-1811

PLEASE read Chapter 1 for legal terms, how to register/subscribe
for the package, and the overview of the program.  Just type
ZIPKEY if you don't like reading manuals.

This DOC file is an entire manual-- over 70 pages.  I have
formatted this file so that it can be printed at 10cpi with
margins.  To save space, I don't have a left margin in the file.
You'll need to set your printer to a one-inch left margin to have
room to punch holes for a ring binder.

This is an experimental version of ZIPKEY, preliminary to the
V1.1 release.  I have added the ZIPKEY 7 command to uninstall
ZIPKEY from memory, a zip-from-last keystrokes option to allow
usage within graphic programs, and I have corrected some
incompatibilities with other programs.

If you got ZIPKEY from an XYZ software house, that advertises
great software for $5 per disk, and you are now confused as to
your rights, you might ask the following

QUESTION: "What's going on here?  Have I already bought the
  program, or what?"

ANSWER: Well, no, not exactly.  You've bought a disk that has
  great software on it; unless you legally purchased the
  registered version of ZIPKEY, you haven't bought the software
  yet.  ZIPKEY, like most major software offered by the
  $5-per-disk distribution houses, is free-distribution software
  (also known as "shareware", or "user-supported software").
  That means I retain the rights to ZIPKEY, but I choose to let
  people pass the evaluation copy around.  I have no business
  relationship with any distribution houses in the U.S.; I don't
  get a penny of the $5 (or whatever) you paid them for the disk
  containing ZIPKEY.  So I need and expect to be paid by you,
  because I make my living out of making and supporting shareware
  products.

  Some distribution houses do a pretty poor job of revealing the
  shareware nature of the software they sell.  If you thought you
  had purchased the software free and clear, you might feel
  justified in being angry with them for having misled you.  And
  you might look around for houses that do a better job of
  informing the public.  But I hope you'll take the time to
  consider everybody's role in the shareware marketing scene; if
  you do, I think you'll conclude that although you may have been
  misled, you haven't really been cheated out of anything.
                                                              0-2

  Shareware is great for authors like me, who have spent all
  their years in their computer holes, learning to be great
  programmers, and no time in business school learning marketing
  and distribution techniques.  We simply cast our programs to
  the winds.  They are distributed at practically no cost to us.
  That's why we can charge a lot less than the cost of
  "commercial" software.

  Shareware is also great for customers like you.  You can try
  out the software before paying for it.  You'll know that a
  successful shareware product is good, because only satisfied
  customers pay for it.  The existence of shareware infuses
  healthy competition into the entire software market, for both
  price and quality.  In the case of ZIPKEY, I'm utterly
  convinced that you'll never find a better value for a zipcode
  directory, anywhere.

  Finally, let's consider the distribution houses.  They provide
  a legitimate service, for which they charge a reasonable price.
  The best houses act as librarians, evaluating and cataloguing
  software.  Most pay thousands of dollars for advertising.
  Their cut is far less than the distributor's cut for
  "commercial" software (they prosper because their volume is
  bigger and their support responsibilities are smaller).  Most
  customers for the distribution houses are repeat customers, who
  are aware of, and happy with, what they are getting.  If it
  weren't for your XYZ House, you might never have heard of
  ZIPKEY, or might never have figured out where to obtain it.

  So I hope you'll be happy with shareware, and actively desire
  to support it.  You'll feel good about promoting a healthy
  situation for everybody.  And you'll encourage the best
  programmers in the world to keep writing for you, instead of
  for the big corporations.

Now that I've said that, let's move on to the package.   The
ZIPKEY evaluation package consists of the program ZIPKEY.EXE, the
database file ZIPKEY.OVL, and this manual ZIPKEY.DOC.



TABLE OF CONTENTS


CHAPTER 1  INTRODUCTION AND LEGAL TERMS

Overview of This Manual                                     1-1
Overview of ZIPKEY                                          1-1
What ZIPKEY Doesn't Do                                      1-2
Operating Requirements                                      1-3
Legal Terms                                                 1-3
Legal Conditions for Free Distribution                      1-4
Sources and Copyright Status of ZIPKEY's Database           1-5
Difference Between the Evaluation and Registered Versions   1-6
Naming Conventions for Distribution                         1-7
About the Author                                            1-8
How to Contact Me                                           1-8
                                                              0-3

CHAPTER 2  LOOKING UP ZIPCODES

Demonstration Mode                             2-1
Signon Window                                  2-1
Zipcode Search                                 2-2
Arrow and Paging Keys During Zipcode Search    2-4
State and City Search                          2-5
Multiple Zipcode Cities                        2-6
City Only Search                               2-7
Moving From State to State                     2-7
Unabbreviation                                 2-8
Repeat Last Zipcode                            2-8


CHAPTER 3  ZIPKEY CONFIGURATION

Determining Your Configuration Needs      3-1
How to Create a ZC File                   3-2
Default Options                           3-2
Memory Model                              3-3
Intermediate Results                      3-4
Numlock On                                3-4
Slow Down Keyboard                        3-5
Window Characteristics                    3-5
Monochrome and Color Window Settings      3-6
Hotkey Configuration                      3-6
Hotkey Name                               3-7
Zipcode Source                            3-8
Format of City/State/Zip Keystrokes      3-10
Multiple Hotkeys                         3-12
Exit Keys                                3-12
Configuration Editing Menu               3-13
Named Configuration Files                3-14
Modifying Configuration Files            3-14
More Hotkey Examples                     3-15
Conclusion                               3-16


CHAPTER 4  RUNNING MEMORY-RESIDENT ZIPKEY

Installing ZIPKEY as a Memory-Resident Program     4-1
Correcting Your Configuration                      4-2
Uninstalling ZIPKEY                                4-3
Re-installing a New Configuration                  4-3
Making ZIPKEY Permanently Available                4-4
ZIPKEY and Other Memory-Resident Programs          4-4
Finding ZIPKEY Files on Your Disk                  4-5
Installing Files on a Network                      4-7


CHAPTER 5 GENERATING AN ORDER FORM

Automatic Order-Form Generation            5-1
ZIPKEY's Schedule of Prices                5-1
Gathering Your Order Information           5-2
Answering the Order-Form Questionnaire     5-3
Possible Amendments to the Total Price     5-3
                                                              0-4

CHAPTER 6 PROGRAMMATIC INTERFACE

The ZIPKEY Interrupt                6-1
Testing for ZIPKEY's Presence       6-1
ZIPKEY Calling Conventions          6-2
The ZIPKEY Functions                6-3
Sample Program Code                6-10


INDEX

CHAPTER 1   INTRODUCTION AND LEGAL TERMS


Overview of This Manual

Welcome to ZIPKEY!  I've tried to make the ZIPKEY program as
self-explanatory as possible, so that you won't need to consult
this manual very much.  I believe I have succeeded to the extent
that if you're a somewhat experienced computer user, you'll be
able to figure out the program on its own.  But ZIPKEY is a
complex program with a fair number of sophisticated features.  If
you're a less experienced computer user, or if you'd like to
explore every nook and cranny of ZIPKEY's functionality, you'll
want to read this manual.  It describes ZIPKEY in more detail
than the built-in documentation, and provides examples you can
work through as you read.

Some of this manual (especially in Chapters 2 and 3) tries to do
double duty, as both a tutorial and a reference guide.  A
tutorial is intended to be read from start to finish; it may
contain a thread of discussion that runs from section to section.
A reference guide is intended to be consulted a section at a
time, to look up specific facts; it may repeat information so
that the user doesn't need to read the whole manual to obtain the
desired fact.  I've tried to keep the tutorial-vs.-reference
annoyances to a minimum: the continuing (tutorial) threads are
restricted to the more elaborate examples presented; I hope they
are easy enough to pick up when you consult a section as a
reference.  And I have tried to organize things to keep
repetitions to a minimum, so you can read the manual as a
tutorial.

I would, of course, like you to read this first chapter,
including the legal terms and conditions pertaining to the
program.  Then, if you're just getting started with ZIPKEY, you
should read through Chapter 2 while running ZIPKEY in
demonstration mode, to follow the examples and gain a familiarity
with all of ZIPKEY's search capabilities.  Chapter 3 tells you
how to configure ZIPKEY for memory-resident use, and Chapter 4
tells you how to set up the files on your computer so that ZIPKEY
is permanently available.  Chapter 5 gives you details about
ZIPKEY's built-in facility for creating an order form to
subscribe to ZIPKEY and regularly receive fresh data.  Chapter 6
is for computer programmers who wish to access ZIPKEY's functions
from within their programs.


Overview of ZIPKEY

ZIPKEY is a complete city-level directory of 5-digit United
States zipcodes, combined with a keyboard enhancement program.
The goal of ZIPKEY is to provide enough power and flexibility so
that no one with an IBM-PC (or hardware-compatible computer) will
ever again have to manually type in the name of a United States
city or town (at least not one big enough to have its own
zipcode).
                                                              1-2

When run as an ordinary program, ZIPKEY allows you to instantly
access any of the 43000+ zipcodes in the directory, searching by
zipcode, state-and-city, or city-only.  If you want to use ZIPKEY
just to occasionally look up a zipcode, you simply choose
main-menu option 2 and follow the prompts.

ZIPKEY achieves its full power when installed permanently in
memory.  In this "memory-resident" mode, you can invoke ZIPKEY
from within any other program (a word processor, a data-base
manager, etc.).  You can type just a 5-digit zipcode, and ZIPKEY
will fool the program you're running into thinking that you have
typed any or all of the following: the city name, the state name
and/or abbreviation, the zipcode, and any other combination of
fixed keystrokes.  This "keystroke output" can be in any format
that you wish.

ZIPKEY is completely configurable.  You can specify any
combination of keystrokes (the "hotkey") that will invoke ZIPKEY
when you're running another program.  You can also specify
alternate hotkeys to allow differing sources of zipcode
specifications (repeat the last zipcode, use a fixed sequence of
first digits, or get the zipcode from your screen), and/or a
differing format when ZIPKEY feeds the city/state/zip back
through your keyboard.  You may have up to 99 different hotkeys.
Your configuration is stored in a disk file, which is
automatically read by ZIPKEY whenever it is invoked.

ZIPKEY has a sophisticated abbreviation algorithm, allowing you
to specify a limit to the length of the city name, so that it
will fit into a fixed field.

ZIPKEY's database is based on data from numerous sources,
including the U.S. Postal Service.  It has been extensively
cross-checked to ensure accuracy and consistency.  The data is
highly compressed, so it won't occupy very much space on your
disk or in memory.  The compression method was custom-designed
for this database, providing for maximum compaction while
retaining instant access.  It occupies less than 128K bytes (less
than 3 bytes per entry), small enough to allow installation of
the data base in either LIM-EMS or main memory.  But access to
the data is fast enough so that it is perfectly reasonable to
leave the database on your hard or RAM disk.


What ZIPKEY Doesn't Do

ZIPKEY's database doesn't contain street names, so ZIPKEY can't
tell you the exact zipcode for a street address within a city
that has more than one zipcode.  Such a database would occupy
megabytes, even with ZIPKEY's rate of compression.  Right now I
consider that too big for mass distribution; but in the coming
years, when storage capacities increase, I hope to offer such a
database.
                                                              1-3

ZIPKEY has been tested against all the major database managers,
word processors, and spreadsheets, and works fine with the vast
majority of them. But there are some programs that ZIPKEY is
incompatible with.  Here are the problems that I know about and
haven't been able to solve:  Keystroke playback doesn't work
within Microsoft Works, which apparently ignores the usual
keyboard drivers in your computer.  ProKey 2.1 causes problems,
but 4.0 works fine.  Microsoft Word 4.0 doesn't allow typeahead
within ZIPKEY's window so you must either disable intermediate
results or type slowly -- Word 5.0 solved this problem.  NamePal
1.4 has a bug that limits playback to 15 keystrokes.



Operating Requirements

ZIPKEY requires an IBM-PC, IBM-PC AT, or 100% hardware-compatible
computer with at least 256K bytes of memory, running MS-DOS V2.0
or later.  A hard disk is not required but is recommended unless
you have lots of memory to store ZIPKEY's data after it is
installed.

Most of the "clone" computers work fine running ZIPKEY.  The
areas of compatibility needed are in the memory-mapping of the
video interface, the BIOS variables and buffers managing both
video and keyboard, the timer-interrupt hardware, and the
keyboard-interrupt mechanism.  Some computers are compatible
except for the mapping of internal codes passed from the keyboard
to the computer.  For those computers, ZIPKEY will work properly
except during configuration, when the wrong names are displayed
for the hotkeys.


Legal Terms

ZIPKEY is a copyrighted work -- it is not and never has been in
the public domain.  Each release of the ZIPKEY program comes in
two versions: ZIPKEY.EXE, the evaluation copy, may be copied and
distributed to others, subject to the conditions I'm about to
describe.  The other version ZIPKEY.COM, the registered user's
copy, is subject to the same legal restrictions as
traditionally-distributed ("commercial") software.  Neither
version has any physical copy-protection schemes.

WARNING: Before installing this or ANY new software, you should
BACK UP any valuable data on your computer system.  ZIPKEY has
been extensively tested on numerous different machines, and it is
believed to be reliable and non-harmful.  However, software is
the most complicated kind of product there is.  No mortal human
can be absolutely and completely certain that a piece of
complicated software will work on any given machine.  So you are
completely responsible for determining the fitness or usability
of this package.  I will not be liable for damages of any kind,
including but not limited to lost sales or profits, arising from
any failure of this package to perform as expected.
                                                              1-4

If you have the evaluation copy ZIPKEY.EXE, I hereby grant you
permission to install this version of ZIPKEY in its
memory-resident mode for up to one month.  After that, you must
either remove ZIPKEY from your system, or subscribe -- option 5
of the main menu (described in detail in Chapter 5) will create
an order form for you.

If you have the registered copy ZIPKEY.COM, you may install it
only on those computers servicing the keyboards you have
licensed.  You may make copies for backup and archival purposes.
You may not allow the registered copy to be run from more
keyboards than you have licensed.  The license for running ZIPKEY
in its non-memory resident (demonstration) mode is permanent --
you don't need to renew unless and until you want fresh data.
The license for running ZIPKEY in its memory-resident mode
(hotkeys, key playback, and/or program interface) is paid by the
year, according to the rate schedule published in Chapter 5, and
built into the order-form section of ZIPKEY, option 5 of ZIPKEY's
main menu.

A simple registration for a single keyboard, with printed manual
and one disk with the latest data, is $30.  Update disks are $25
apiece.  Again, the license is permanent if you use ZIPKEY only
in demonstration mode; it is good for one year if you use ZIPKEY
in memory-resident mode.

If you are a casual user -- only calling up ZIPKEY occasionally
in non-memory-resident mode for private, non-commercial use --
then your subscription is optional.  You may send however much
money you feel the program is worth to you.  If you send $30
($31.50 in Indiana), you'll get the printed manual and a disk
with the registered version of the program and the most current
database.  Your support is much appreciated, and will encourage
the continued production of high-quality "try before you buy"
software.

I reserve the legal right to change legal terms and prices for
future versions without prior notice.  At the present time I have
no plans to change prices until inflation has seriously reduced
the value of the dollar (by, say, at least a third off its 1989
value).  I will never consider you committed to a higher price
before being advised of the price-- you'll always have the option
to cancel your subscription and receive a refund for unused time.


Legal Conditions for Free Distribution

Here are the conditions for free distribution of the evaluation
version of ZIPKEY:

1. You may copy the disk-file version of this manual, the
   evaluation version ZIPKEY.EXE, and any version of ZIPKEY.OVL
   more than six months old, and give them to anyone who accepts
   all the legal terms spelled out in this chapter.  The copies
   you distribute must be complete and unmodified.  You are
   specifically prohibited from distributing the ZIPKEY.OVL data
   in any unpacked format, or any format other than ZIPKEY.OVL.
                                                              1-5

   Each ZIPKEY.OVL file that I distribute begins with a copyright
   message containing the date after which the file can be
   distributed freely.

2. No part of ZIPKEY may be sold to anyone without my prior
   written permission.  If the package is distributed on a
   diskette, any fees collected must be specified as
   materials/handling, and may not exceed $10 for the diskette.
   Thus, I am allowing shareware distribution houses to
   distribute the evaluation version of ZIPKEY, as long as they
   don't try to deceive their customers into thinking they have
   bought the full rights to the program.

3. I reserve the right to prohibit specific individuals and/or
   companies from distributing any or all of my copyrighted
   works.  If I exercise this right, I shall inform such
   individuals/companies in writing, by certified letter.

   So far, I have exercised this right against only one company,
   Sizzleware.  They received a prohibition against distributing
   my A86/D86 packages after they marked the packages Public
   Domain in their catalog, and then neglected to change the
   entry in the next catalog.  The subsequent catalog was
   published three months after I wrote them and they wrote back
   saying they would make the change.  It is my impression that
   this was sheer carelessness on their part; but the mistake,
   particularly after they were notified and had three months to
   correct it, was a grave one.  I considered the prohibition
   necessary to protect my copyright.  The prohibition was lifted
   when they published a catalog with a corrected entry for
   A86/D86.


Sources and Copyright Status of ZIPKEY's Database

ZIPKEY's database consists of over 43000 zipcode entries,
covering over 31000 different cities and towns.  It was created
using numerous different references, most notably the data files
provided by the U.S. Postal Service correlated against the cities
and zipcodes from the 150000-entry database of a fair-sized mail
order firm.  The latter "real-world" data provided much better
accuracy in terms of the city names people actually use for their
own addresses, as opposed to the Postal Service's
officially-designated "primary city" for a zipcode.  The
following references were also used, as a part of an extensive
cross-checking and verification effort:

   * zipcode maps from several dozen telephone directories

   * U.S. Census data files

   * USPS National Five-Digit Zip Code & Post Office Directory

   * AAA Road Atlas

   * Rand McNally Commercial Atlas and Marketing Guide
                                                              1-6

   * National Atlas of the United States of America

   * Rand McNally Road Atlas

The resulting ZIPKEY database differs by thousands of entries
from any database that could be derived by mechanical means from
any of the sources I have mentioned.  It is much more accurate
than any of the sources for its purpose: to provide the city name
actually used by the most people in a given zipcode.

So the ZIPKEY database contains a large body of information that
is public knowledge, but at the same time represents a
substantial creative compilation effort.  It enjoys the same
copyright protection as other reference works, such as
dictionaries, that contain compilation effort.  You may use the
ZIPKEY database as a reference source, but you cannot simply
unpack and publish the database without independently
cross-checking and verifying the entire work, and adding
substantial effort to make it your own.  If you do such
unverified publishing, you will be in violation of federal
criminal copyright law.

Note that a skilled programmer can use ZIPKEY's programmatic
interface to unpack ZIPKEY.OVL into an ASCII format.  Again, I
emphasize that the data in ASCII still contains my creative
compilation effort, and is still under my copyright.  You may
create and manipulate such a data file from the keyboards for
which ZIPKEY is licensed, but you are specifically prohibited
from distributing such data to non-licensed computers, or in any
printed format.


Difference Between the Evaluation and Registered Versions

The evaluation copy of ZIPKEY has full functionality.  The only
differences between the evaluation and registered versions are as
follows:

1. The evaluation version is distributed as an EXE file, and the
   registered version is distributed as a COM file.

2. The version number, that appears on the console when ZIPKEY is
   run and also on the signon popup window, has an "e" appended
   to it for the evaluation copy, and an "r" appended to it for
   the registered copy.

3. Some of the help messages of the program are different, to
   reflect the program's registered vs. evaluation status.  But
   there is no missing information in the evaluation copy.
                                                              1-7

4. When you install in memory the evaluation copy of ZIPKEY on or
   after the second month after you have created a ZC file,
   ZIPKEY will remind you at installation time (typically when
   the computer is started up) that you need to register, and
   invite you to fill out an order form.  You can type N to the
   invitation and ZIPKEY will be installed normally and work just
   fine.  I'm just hoping you'll get tired of having to type that
   N every time you start your computer, and send for the
   registered copy.

5. The evaluation copy will refuse to install a ZIPKEY.OVL
   database whose free distribution is not yet allowed (less than
   six months old).  If everyone follows the distribution rules,
   this prohibition should never be encountered.


Naming Conventions for Distribution

This section describes the naming conventions I'd like you to use
when distributing files, especially on bulletin-board systems.
I'm not putting any legal insistence behind these conventions;
I'm just giving them so that there can be standardization.  If
their names follow these conventions, my files should be easier
to find on BBS's, and there should be less duplication of
identical files with different names.

If you distribute files in a compressed format, using PKZIP, ARC,
ZOO, or a similar program, I recommend that the evaluation
ZIPKEY.EXE file and the manual be packed together into one file,
and the ZIPKEY.OVL file be provided as a second file.

If you are a BBS sysop, with the ability to delete files on your
BBS, you can maintain the single name ZIPKEY for the package.
The compressed EXE-and-manual file can have the extension (.ZIP,
.ARC, etc.) reflecting the compressing program used.  The OVL
file can keep its name ZIPKEY.OVL.  ZIPKEY.OVL does not need to
be compressed-- it's already so compact that there is little or
no further gain from compression.

If you are uploading to a BBS on which you cannot delete the
previous version, I suggest that the names contain the version
information. The EXE-and-manual file should be named ZKxx, where
xx is the ZIPKEY.EXE version number -- for example, ZK10.ARC for
ZIPKEY V1.0e.  The ZIPKEY.OVL file should be stored using a
compression program (not for the compression, which is minimal,
but so that the file will be named ZIPKEY.OVL again when it is
extracted).  The compressed OVL file should be named ZKmmyy,
where mm is the 2-digit month and yy is the year of the ZIPKEY
database -- for example, ZK0988.ARC for the September, 1988
version of the data.

Here are sample directory lines for ARC files, including
recommended comment lines:

ZK10.ARC         ZIPKEY zipcode dir V1.0 prog/doc, 1 of 2
ZK0988.ARC       ZIPKEY.OVL 09/88 zipcode data,    2 of 2
                                                              1-8

Note that the data file does NOT contain the program version
number in its comment line.  I will be releasing new data files
more often than new program versions, so that the data file is
not married to the program version number.  People will be able
to download new data files even if they already have the latest
program version.


About the Author

I am a professional software author.  I have been programming for
myself since 1965, and professionally since 1975.  I worked for
Intel Corporation for several years, first as a subcontractor,
then as an employee, and then as an independent contractor.  I
have also done contract work for numerous other software firms.
In 1986 I started marketing programs directly to the public,
releasing my A86 assembler and D86 debugger packages as
shareware.  I have been making a living from A86/D86 receipts
since 1987, supporting myself, my wife, and my daughter.  A86 is
my first (computer) love, and I will continue to support and
improve it-- ZIPKEY was developed using A86/D86, and I refuse to
write code using anyone else's compilers.  But the market for
assemblers is rather narrow, fiercely competitive, and
surprisingly crowded with products.  I don't think I'll make
enough from A86/D86 alone to see me through my retirement years.

Enter ZIPKEY.  In the summer of 1988 I was persuaded by a friend
that the world needed a zipcode-directory and
keyboard-enhancement program.  I naively thought I could complete
the program in about ten weeks.  At my level of experience I
should have known better-- the project has taken about seven
months of full-time work.  (My only consolation for this
scheduling embarrassment is that another friend of mine, with
even more experience in computers than I have, thinks that he
could have produced a marketable product in about one week!)  The
resulting product is much more powerful and elaborate than the
original vision.  The extra time spent also reflects the
difference between a software tool and a professional-quality
software product -- self-documentation, internal error detection
for "bullet-proof" operation, configurability to anticipate a
wide range of uses, and extensive testing in the field to enhance
the program's design as well as its reliability.


How to Contact Me

I have no plans to move from my present location at least through
the millennium.  So you can write to:

    Eric Isaacson Software
    416 East University Ave.
    Bloomington, IN 47401-4739

or call (812)339-1811.
                                                              1-9

Sorry, I can't guarantee to return everybody's long distance
calls.  If you'd like to be SURE I'll get back to you, please
invite me to call you back collect, or tell me to charge the cost
of the call to your credit card.

I also accept BBS mail at PC-Link Central, (812)855-7252, which I
try to check into daily.  Type J 3 when you get on that system,
to reach my conference.  Another BBS which I check into about
twice a week is Indiana On-Line, at (812)332-7227.  I also check
into Compuserve every 10 days or so-- my ID number there is
71520,74.

PLEASE contact me if you find bugs in my programs; I'll fix them!
I accept bug reports from anyone, registered or non-registered,
no questions asked.  It's very frustrating to hear about people
telling each other about bugs, and not telling me.  I still await
Greg Wettstein's bug list.

CHAPTER 2   LOOKING UP ZIPCODES


In this chapter we'll explore all of ZIPKEY's search
capabilities, accessible from ZIPKEY's popup window.  As you read
along, you can execute the examples given from ZIPKEY's
demonstration mode, which pops up the ZIPKEY window without
installing ZIPKEY as a program permanently resident in your
computer's memory.  Occasionally I'll talk about what happens in
the keystroke playback sequence, which occurs in ZIPKEY's
memory-resident mode.  Those features will show themselves after
you've configured ZIPKEY and then installed the program
permanently in memory, as described in Chapters 3 and 4.


Demonstration Mode

You can enter ZIPKEY's demonstration mode by selecting option 2
from ZIPKEY's main menu, or directly from the DOS command prompt
by typing

   ZIPKEY 2

followed by the Enter key.  If there is enough memory, ZIPKEY
will load the entire zipcode database into memory for the
demonstration.  If you are running ZIPKEY from a floppy disk,
this will take a few seconds (but the subsequent searches will be
breathtakingly fast if you're accustomed to floppy access speeds
for data lookup).  After the data is loaded, ZIPKEY's window will
pop up onto your screen, with the ZIPKEY signon message.  As long
as any ZIPKEY window is on the screen, it will tell you what
ZIPKEY expects you to be typing next, at or near the blinking
cursor.  Whenever the popup window is visible (whether in
demonstration mode or memory-resident mode), you can return to
the signon window by pressing the Home key, or you can pop away
the window by pressing the Esc key.

Whenever a zipcode specification is complete, ZIPKEY invites you
to confirm the entry by typing the Enter key.  In demonstration
mode, this will simply return you to the signon window, ready to
type another specification.  Later, when you install ZIPKEY as a
memory-resident program, the confirming Enter will initiate the
keystroke playback sequence, in which ZIPKEY fools your computer
(and whatever program you are running) into thinking you have
typed a complete city/state/zip combination.


Signon Window

The signon window contains information establishing my copyright
and advertising my name and address.  It also tells whether you
are running the evaluation copy of the program or the registered
user's copy.  This information exists to remind you that ZIPKEY
is not in the public domain, and that I appreciate being paid for
my efforts.  But it doesn't waste your time-- you can start
typing your zipcode specification right away.

The blinking cursor appears just beyond the prompt indicating
each of the three types of zipcode search available to you:
                                                              2-2

1. If you type a digit (0 through 9), ZIPKEY treats it as the
   start of a zipcode to look up.

2. If you type a letter, ZIPKEY assumes you are typing a
   two-letter state abbreviation, to be followed by a city name.

3. If you type a question mark, you are signalling ZIPKEY that a
   city name without a state will follow.

There is a fourth specification type, not mentioned explicitly on
the window: the quote mark " to repeat the last zipcode.

We'll discuss each search type individually in the following
sections.


Zipcode Search

The zipcode search is simple: you type in a five-digit zipcode,
and ZIPKEY instantly tells you the associated city, if there is
one.  If there isn't, ZIPKEY will tell you, and try to make a
guess as to what city it might be. You can either accept the
guess with a confirming Enter key, correct the entry with the
backspace key, or explore nearby zipcodes with the arrow keys
(described shortly).

ZIPKEY is so fast that it can afford to display intermediate
results as you type each digit of the zipcode.  Most people will
ignore these results when typing in most zipcodes-- they are
frills added to make ZIPKEY a little more convenient (and more
fun).  Here is a description of what you see after each digit,
that you can follow while typing the sample zipcode 47125:

1. After you type one digit, ZIPKEY lists the possible states
   having zipcodes with that first digit.  If a state from this
   list has a zipcode after it, that is the only zipcode from
   that state having the indicated first digit.  For example,
   type 4 when you see ZIPKEY's signon window.  The list of
   states includes Wisconsin 49936.  All of Wisconsin's zipcodes
   start with 5, except Alvin, Wisconsin, which gets its mail
   from a nearby Michigan post office and thus has a Michigan
   zipcode.

2. After two digits, ZIPKEY lists the ten zipcode regions that
   begin with those two digits.  In our example, if you type the
   second digit 7, you get a list of Indiana regions for zipcodes
   beginning with 47: 470, 471, 472, etc.  If a third digit
   yields no valid zipcodes, its line is blank on this display.
                                                              2-3

3. After three digits, ZIPKEY lists the main city for the zipcode
   region.  Zipcodes are organized around three-digit regions:
   all non-local mail is sorted according to region, and shipped
   to a main center for that region.  Only when the mail reaches
   the regional center is it sorted by the last two zipcode
   digits.  Most cities listed by ZIPKEY are the postal service's
   regional centers for those three digits, but many are not.
   The exceptions are the regions surrounding large cities, in
   which the cities themselves have their own first-three digits.
   The postal service considers the large city to be the regional
   center; ZIPKEY will instead typically give the name of a large
   suburb within that region.  For example, the postal service's
   regional center for 471 is Louisville, KY, which handles the
   mail for nearby areas across the Ohio River in Indiana.
   ZIPKEY gives the main city for 471 as Jeffersonville, IN,
   because it gives a better sense of where the region is.

   If you type a three-digit combination for which there are no
   valid zipcodes, ZIPKEY will tell you, and ignore any
   subsequent digits typed.

   Also included in the three-digit message is a reminder about
   arrow keys during zipcode entry.  We'll discuss arrow keys
   shortly.  The message applies just as well when any number of
   digits are typed-- I placed it there in the three-digit case
   because there is room on the window for it, and because I
   wanted to let people who never read manuals know that the
   feature exists.

4. After four digits, ZIPKEY lists the city for each of the ten
   possible values for the final digit.  If a final digit does
   not have a valid city, its line is left blank.  For example,
   after 4712, you'll see the listing of cities for 47120, 47121,
   47122, etc.

5. Finally, after 5 digits are typed, you get the city, with the
   invitation to confirm the entry with the Enter key.  If there
   is no city for this zipcode, ZIPKEY will guess the last valid
   zipcode's city, or, if the zipcode is before the first or
   beyond the last valid zipcode for the region, ZIPKEY will
   guess the main city for the region.

   In demonstration mode, the confirming Enter key will put you
   back to the signon window, ready to type in another zipcode
   specification.  Later, when you run ZIPKEY as a
   memory-resident program, the confirming Enter will pop away
   the window and play the city/state/zipcode combination through
   your keyboard.  The guessed city will be used if the zipcode
   did not exist.  If you don't want the guessed city to be used,
   you exit via the Esc key, and type in the city/state/zip
   yourself.
                                                              2-4

Arrow and Paging Keys During Zipcode Search

To allow exploration of ZIPKEY's database, ZIPKEY allows you to
use the up-arrow, down-arrow, PgUp, and PgDn keys at any time
during the entry of a zipcode.  These keys either add or subtract
1 from the value already typed, letting you "move" through the
database.

The up-arrow key subtracts 1 from the digits typed (reflecting
the fact that if the zipcodes were listed in order on a page, the
zipcodes would decrease as you move physically up the page).  The
down-arrow key adds one to the digits typed.  For example, if you
type the single digit 0 to ZIPKEY's signon window, you'll get the
list of states whose zipcodes begin with 0.  You can now press
the down-arrow key repeatedly, to get the states lists for 1, 2,
3, etc.  You can go backwards by pressing the up-arrow key.
Likewise, you can type the two digits 00 to ZIPKEY's signon
window, then press down-arrow repeatedly to get successive lists
of main region cities.  The value will increment from 09 to 10,
so that the entire list of regions can be cycled through with 100
presses of the down-arrow key.  You get similar results after 3,
4 and 5 digits -- the 4-digit case is most useful, letting you
page through the individual cities in order.  Holding the
down-arrow key down for auto-repeat with 4 digits typed will give
you a sense of the sheer size of ZIPKEY's database, all packed
into your computer's memory.

The PgUp and PgDn keys don't provide any radically new
functionality over the up- and down-arrow keys: they simply work
because you might subconsciously think you are in a
word-processor, and expect them to work.  If you press PgUp or
PgDn after 1, 2, or 4 digits are pressed, you get exactly the
same action as the corresponding arrow key.  If you press PgUp or
PgDn after 3 or 5 digits are pressed, ZIPKEY will drop you back
to the 2- and 4-digit cases, respectively, to give you the
"paging" action you might have expected.  If you have configured
ZIPKEY not to display intermediate results (see Chapter 3 for how
to do this), the PgUp and PgDn keys will temporarily enable the
intermediate-results display.

Note that these "exploration" keys do not place you into any
special mode: when the typed zipcode increments or decrements, it
is just as if you had typed in the new digits in the first place,
and you can continue typing the zipcode from the new value.  For
example, any of the following keystroke sequences will get you
from the signon window to zipcode 12345:

   12345
   0{down}2345
   2{up}2345
   119{down}{down}{down}{down}45
                                                              2-5

State and City Search

Now we'll discuss the case in which you know the city and state,
and you want to look up the zipcode.  For this case, you start
from ZIPKEY's signon window, and type the two-letter abbreviation
for the desired state.  If you don't remember what the
abbreviation is, don't worry: just type the first letter of the
state's name, and you'll get a display of all the states, with
their abbreviations, that begin with that letter.

Your entry of either the state code or the city name can be in
either lower-case or upper-case: ZIPKEY doesn't care.  I give
them in upper case in the following paragraphs just to make them
easier for you to read.

After you type the two-letter state abbreviation, ZIPKEY prompts
you for the city name.  As you type the city, ZIPKEY will look up
all cities within that state that start with the letters you have
typed so far.  As soon as there are 50 or fewer matching cities
(usually after only one or two letters), ZIPKEY generates a
display of matching cities.

For example, suppose you need to know the zipcode for Robinson,
Illinois.  When you see the ZIPKEY signon window, you can type IL
for Illinois, followed by the city name.  There are more than 50
towns in Illinois whose name begins with R, so you don't get a
display if you type just R.  But after you type the second letter
O, a display is generated.  You may continue typing the city name
until there is only one city left.  Or, once there is a display
of cities, you can type a digit to select one of the cities on
the list.  In the database current to this writing, Robinson is
on the line numbered 3 in the RO display, so the complete
specification ILRO3 will select Robinson.  In the ROB display
Robinson moves up to number 2, so that ILROB2 would also select
Robinson.  Robinson is the only city in Illinois starting with
ROBI, so ILROBI would also select Robinson.

If there are more than ten cities in the generated display,
you'll see PgDn displayed off the end of the tenth city.  This is
your indication that the PgDn key will give you more cities.  If
you type PgDn once, you'll get the second ten cities that match
what you've typed so far.  A PgUp appears above the top right of
the cities list, to signal that you can now page back to the
first ten cities.  If there are still more cities beyond this
group of ten, the PgDn indicator will remain.  For example,
suppose you want to view all cities in Oregon whose name begins
with the letter B.  You type ORB to the ZIPKEY signon window,
followed by several PgDn keys to reveal several pages of Oregon
"B"-cities.
                                                              2-6

Multiple Zipcode Cities

If you perform a city search for a city having more than one
zipcode, ZIPKEY will give you the complete list of zipcodes for
that city, but it can't tell you which zipcode matches your
address-- that's beyond the scope of ZIPKEY's city-level data
base.  In this case, once the search has narrowed down to the
single city, ZIPKEY invites you to complete the zipcode with the
trailing digits it needs to resolve the multiple-zip ambiguity.
In ZIPKEY's demonstration mode, this will serve no purpose other
than to show you how the window will work in memory-resident
mode.  In memory-resident mode, the digits you type are needed to
provide the complete zipcode in the keystroke playback of
city/state/zip.  If you type a confirming Enter at a time that
ZIPKEY is prompting you to complete the digits of a zipcode,
ZIPKEY will fill out the zipcode with x's, just as you might do
when addressing an envelope with a zipcode whose final digits you
don't know.

For example, suppose you wish to look up the zipcode for
Worcester, MA.  You type MAWORCES to the ZIPKEY signon window,
which is more than enough to narrow the display to the single
city.  Worcester has numerous different zipcodes, all beginning
with 016.  ZIPKEY places the blinking cursor after the common
digits 016, and invites you to complete the zipcode.  If you type
01, the prompt changes to a confirming Enter, and you'll get a
keystroke playback of 01601 as the zipcode.  If you type Enter
right away instead of 01, you'll get 016xx as the zipcode.

A note about the list of zipcodes for a city: it consists of a
sequence of either individual zipcodes or zipcode ranges.  In a
zipcode range, the first and last zipcodes are always valid
zipcodes for the city displayed.  There will be no zipcodes in
the range that represent a city different than the one displayed.
However, there may be zipcodes within the range that are
undefined.  For example, in the database current at this writing,
the range 01613-55 for Worcester, MA represents a range running
from 01613 to 01655.  You can view the range in detail if you
switch back to zipcode lookup: type Home to return you to
ZIPKEY's signon window, then type 0161 followed by four presses
of the down-arrow key.  You'll see that there aren't any
non-Worcesters between 01613 and 01655, but that most of the
range is undefined.
                                                              2-7

City-Only Search

ZIPKEY also allows you to search for a city name without
specifying the state.  To use this feature, you type a question
mark to the ZIPKEY signon window.  ZIPKEY will prompt for the
city name, and tell you to press the Enter key when you want the
search to begin.  This search requires ZIPKEY to walk through the
entire zipcode database, which is too slow to display
intermediate results.  You may type either a partial name (the
first few characters), or a complete name.  When you press the
Enter key, ZIPKEY will change the state display to the first
state containing a matching city name, and list the matching
cities.

If there are no matching cities, ZIPKEY tells you, and invites
you to correct the entry with the backspace key.  Remember, you
don't have to type the whole city name-- the first few letters
may narrow the possibilities enough for you to find your city
without risking a misspelling.

Let's do a sample city-only search.  There's a commercial on TV
in which a woman tells how they prepare Shredded Wheat back home
in Nome.  A co-worker replies, "I didn't know you were from
Alaska.", to which the woman replies, "I'm not; I'm from Nome,
Texas."  As a vigilant ZIPKEY user, you wish to know if there are
any other Nomes out there.  You type ?NOME followed by the Enter
key to the ZIPKEY signon window.  ZIPKEY displays the first
state, Alaska, containing a Nome.  Now read on to the next
section to see how to get the other Nomes.


Moving From State to State

The city-only search just described will give you just the first
state containing a matching city.  To move on to subsequent
states, you press the down-arrow key.  So, from our previous
example, when you have Nome, Alaska selected, you press the
down-arrow key to find the next state containing a matching city.
ZIPKEY reveals a hitherto-unrevealed Nome, in North Dakota.
Pressing down-arrow again moves the display to the Nome, Texas of
the Shredded-Wheat woman.  Another down-arrow cycles us back to
Alaska, so we conclude that there are exactly three Nomes in the
database.

What happens when there is a state containing a matching city,
but that is the only such state?  If you press down-arrow, ZIPKEY
will take several seconds to try to find another state, then
return to the same display.  You can tell that the search is
complete because the blinking cursor goes to the state code
during the search, then returns to the city name when the search
is over.
                                                              2-8

Again, I've tried to minimize the number of special modes in
which you can be.  When you perform a city-only search, and reach
the first state, it is just as if you had typed that state's code
instead of ? in the first place.  Conversely, if you type a
state-and-city specification, you can move to other states with
that same city specification by pressing the down-arrow key to
move to the next state; or the up-arrow key to move to the
previous state containing a matching city.


Unabbreviation

For consistency and completeness, ZIPKEY's data base stores all
city names in a totally unabbreviated form, spelling out words
such as Saint, Sainte, Fort, Mount, North, South, East, and West.
(The one exception is the word "National" in cities containing
the phrase "National Park", which is stored as "Natl".  I wanted
to minimize the number of excessively long city names.)  The
unabbreviated forms will not cause a problem for you if you need
to fit your city name into a fixed field, because ZIPKEY does a
good job of abbreviating names as necessary to fit in such fields
(details are in Chapter 3).  But you might forget to spell out a
name such as St. Louis when typing a city specification that you
would like ZIPKEY to search.  So ZIPKEY allows the abbreviations
St, Ste, Ft, Mt, N, S, E, and W for the above-mentioned full
names.  The abbreviations must be followed by a period or a space
for ZIPKEY to accept them.

For example, suppose you type MNST to the ZIPKEY signon window.
You'll get a list of Minnesota cities beginning with ST, and none
with Saint.  But if you now type a period or space, ZIPKEY will
switch to a list of Saint cities.


Repeat Last Zipcode

Finally, we cover a fourth specification that can be typed from
ZIPKEY's signon window-- a double-quotes mark " to call up the
last zipcode returned.  This option exists to accommodate hotkeys
that repeat the last zipcode specified, and also hotkeys that
play back a keystroke sequence unrelated to any zipcode.  These
possibilities are covered, with examples, in Chapter 3, in the
fixed-keystrokes option of the Zipcode Source section.

Typing the quotes mark " causes ZIPKEY to display the previous
zipcode, city, and state found, and immediately prompt for the
confirming Enter key.  The "previous" zipcode specification
starts out nonsense (Aaron, AL 00000 in the current database at
this writing) until a real zipcode is looked up.  The "previous"
specification does not change if a lookup is cancelled via Home
or Esc -- it changes only after the confirming Enter or alternate
exit key is pressed.

CHAPTER 3   ZIPKEY CONFIGURATION


In this chapter we discuss how you can tailor ZIPKEY to your
specific needs.  You can choose where the zipcodes are stored
when ZIPKEY is loaded into your computer's memory, which keys you
will press to invoke ZIPKEY, the location and color of the ZIPKEY
popup window, and the format for the city/state/zip combination
to be played back though your keyboard.

These adjustable selections for ZIPKEY are stored in a special
file on your disk, called a ZC (for ZIPKEY Configuration) file.
Every time ZIPKEY is installed in your computer's memory, a ZC
file is automatically read, to determine all of the configuration
choices you made.


Determining Your Configuration Needs

Before you attempt to create a ZC file, you should spend a little
time exploring how you are currently typing in addresses.  In
order to let ZIPKEY fool the computer into thinking you have
typed in a complete city/state/zip, you'll have to tell ZIPKEY
exactly what you type-- this can include preliminary positioning
keystrokes, intervening keystrokes for punctuation, spacing, or
further positioning, and trailing keystrokes for termination or
still more positioning.

For example, suppose that you use two different programs to enter
addresses: a database management program and a word processor.
Before you try to configure ZIPKEY, you should invoke each
program and type in a sample address.  You enter the database
manager, which puts an address template onto the screen.  You
type in a name and an address, noticing that you use the Enter
key to move from field to field.  You press the Enter key to
reach the start of the city field.  At this point, you should
count the number of available spaces in the city field.  If this
is visually difficult, the sample name you type can assist you:
type Xxxx xxxx xxxx xxxx etc. to mark spaces.  Let's suppose
there are 17 spaces available.  Make a note of this number:
ZIPKEY will need it.  You press the Enter key to advance the
cursor to the two-letter state abbreviation field.  You type a
sample two-letter state code, and notice that the cursor
automatically advances to the zipcode field without your typing
Enter -- such a detail is important for the accurate recording of
the keystroke sequence.  Finally, you type the five-digit zipcode
and notice that another Enter is required to advance the cursor
to the next field.  So the exact keystroke sequence for getting
from the last field before the city to the first field after the
zipcode is:

{Enter}C{Enter}AZ{Enter}

where the variable parts of the entry are denoted by the letters
C,A,Z.  Again, the lack of an {Enter} between A and Z reflects
the fact that the cursor moves automatically from the state
abbreviation to the zipcode field.
                                                              3-2

Now you discard the sample record you have created, exit your
database manager, and invoke your word processor.  You use this
program to type letters: addresses are typed in as a letterhead.
The format consists of the city name, a comma, a space, the
two-letter state abbreviation, a space, the zipcode, and two
Enter keys.  In our notation, this is

C, A Z{Enter}{Enter}

with no limitation to the length of the city name.  You have now
gathered the information needed for a ZIPKEY specification.  You
can exit your word processor and invoke ZIPKEY's configuration
option, described in the next section.


How to Create a ZC File

You create a ZC file by selecting ZIPKEY main menu option 3,
"Configure ZIPKEY for memory-resident use".  You may also go
directly to this option from DOS's command prompt, by typing
ZIPKEY 3 followed by the Enter key.

When option 3 is selected, ZIPKEY tells you whether a ZC file
already exists, and gives you options just in case it wasn't what
you expected.  Type N if the file didn't exist, and 2 if it did,
to walk through a complete configuration.


Default Options

The following sections describe each configuration option you'll
encounter.  Before we begin each option, however, let's discuss a
feature that covers the entire ZIPKEY configuration process: the
default option.

In most situations during ZIPKEY configuration, ZIPKEY attempts
to discern what option it thinks you are most likely to select.
It will display that option underneath the current cursor
position as it waits for your response.  If you wish to select
this default option, you may do so explicitly by retyping the
already-displayed selection.  But you can also select the default
option by simply pressing the Enter key.

If you are respecifying a previously-existing configuration, the
default options will be those from the old file.  You can press
Enter for those sections that you don't want to change.  If you
are configuring for the first time, the default is the option
that I think most people will choose.  If you are confused by an
option and aren't sure what to select, press Enter to get the
default setting.
                                                              3-3

Memory Model

ZIPKEY consists of two parts: the ZIPKEY program that controls
ZIPKEY's functions, and the database that contains the zipcodes
themselves.  When you install ZIPKEY as a memory-resident
program, the ZIPKEY program is always installed in your main
computer memory -- it occupies about 20000 bytes (20K of the 640K
available in most late-model computers).  You don't have any
choice as to where the ZIPKEY program is stored.  However, you do
have a choice as to where the database (occupying about 128K) is
stored:

1. You may have the database stored in Lotus-Intel-Microsoft
   expanded (EMS) memory.  This is a special kind of memory,
   provided by add-on boards such as Intel's AboveBoard, designed
   to break the 640K memory capacity "barrier" of the IBM-PC
   family.

   If you're not sure whether your system has EMS memory, don't
   worry: ZIPKEY determines this for you, and makes this option
   the default if there is sufficient EMS memory available to
   load the database.

   If this option is available to you, it is usually the best.
   It allows the fastest access to the database without occupying
   main memory, and it avoids any potential problems resulting
   from attempting to access the disk from a popup utility.

2. You may keep the database on your disk, causing ZIPKEY to
   access the database file every time it looks up a zipcode.
   This option is slower than the other two options, but not too
   slow: only two disk read operations (maximum 400 bytes and
   usually much less) are required to look up each zipcode entry.
   On a hard disk this takes a small fraction of a second.

   There is another potential problem with disk access on local
   area networks (LANs).  I have tested ZIPKEY on several
   networks, and on all networks it works fine in all modes, with
   one exception: on a Network-OS network in which the data comes
   from the disk (not necessarily on the network) ZIPKEY will
   often refuse to pop up its window until you exit your program
   and go back to the DOS command prompt.  Much diagnosis
   revealed that Network-OS was mismanaging an internal DOS flag
   (InDOS), and deceiving ZIPKEY into thinking DOS was constantly
   busy.  I have tried repeatedly to persuade CBIS, the company
   that markets Network-OS, to provide me with some meaningful
   technical support on this, and so far they haven't.  So if you
   have the just-described troubles on your network, you may
   refrain from getting your data from the disk.  Either EMS or
   main memory work fine on all networks I have tried.  Meanwhile
   I can't recommend Network-OS-- their system seems to have a
   bad bug, and their technical support was useless, at least to
   me.
                                                              3-4

3. You may load the database into main memory.  This allows the
   same fast access as the EMS option (maybe even a shade
   faster), but it means that every other program running on your
   computer will have 128K bytes less memory to work with.  There
   are many situations in which this won't be a problem: for
   example, if the computer is dedicated as a workstation for
   order entry, you can experiment to see if it works just as
   well with ZIPKEY's data stored in main memory.  If it does,
   fine: you get the fastest access without having to buy an EMS
   memory board.


Intermediate Results

As an added convenience (and also for fun!) ZIPKEY is capable of
displaying what it knows about the specification you have typed
so far.  For example, if you have typed in exactly 4 of the 5
digits of a zipcode, ZIPKEY will display a list of the 10
possibilities for the fifth digit.  If you type a partial
specification and then use the up-arrow, down-arrow, PgUp, and
PgDn keys, you can "explore" the database.

There are two reasons why you might want to suppress the display
of intermediate results: first, to avoid the time it takes to
look them up.  If you are getting the zipcode data from a slow
disk, or you are running on an older slow (4.77 MHz) computer,
then the results are likely to lag a bit behind your typing.  The
lag is typically no more than about a second-- it's a matter of
taste whether this is acceptable to you.  The second reason for
suppressing intermediate results is purely a matter of taste: you
might be visually annoyed by all that unused information flashing
past as you type.  If that is the case, however, you may wish to
choose the option (described later) of taking zipcodes from the
screen -- that way you can arrange for ZIPKEY's window not to pop
up at all, which absolutely minimizes the visual distraction.


Numlock On

This is a feature inspired by the possibility of using the 5 key
on the numeric keypad as the "hotkey" that will pop up ZIPKEY's
window.  If you habitually compute with Numlock turned off, the 5
key has no other useful function.  If that is the case, since
your hand is already on the numeric keypad, you may wish to keep
it there to type in the zipcode.  By selecting this option, you
are instructing ZIPKEY to activate Numlock when its window pops
up.  ZIPKEY will restore the old status of Numlock when the
window pops away.
                                                              3-5

Slow Down Keyboard

This option insures that ZIPKEY doesn't provide keystrokes too
fast for your program to successfully digest.  To be on the
conservative side, you should select Y for this option when you
configure ZIPKEY for the first time.  Then, after you have ZIPKEY
working, you can try changing this option to N, so that the
entire city/state/zip combination appears instantaneously in your
program.

Two programs that definitely need Y are the Condor database
system, and older versions of the Wordstar word processor.

If you select N when you needed Y, you'll see missing keystrokes
in the playback of city/state/zip.  The problem exists in some
modern programs, but it is most common in older programs.  The
problem was made widespread when Borland, in its Turbo Pascal
version 2, published a recommended procedure for programs to
fetch keystrokes from the computer.  The procedure involved
fetching each keystroke two or three times, relying on the fact
that no human could type the next key before such multiple
fetches were made.  This programming method did not foresee the
advent of keyboard enhancement programs such as SmartKey, ProKey,
and now ZIPKEY, that simulate keyboard typing at computer speeds.



Window Characteristics

This section of ZIPKEY's configuration allows you to adjust the
visual characteristics of ZIPKEY's popup window.

ZIPKEY tries to present you with a window that is both easily
noticed and unobtrusive.  To be easily noticed, ZIPKEY pops a
window with a different color than the underlying screen (reverse
video for monochrome monitors).  To be unobtrusive, ZIPKEY avoids
popping up in a location that would cover up the current cursor
location on the screen.

For windows configuration, ZIPKEY simultaneously pops up two
windows.  The main window shows where ZIPKEY usually pops up.
The alternate window shows where ZIPKEY pops up if the main
window would cover the current cursor position.   You can
eliminate the alternate window (thus disabling the cursor-dodging
feature) by pressing the F5 key, which toggles the alternate
window on and off.  You'll need to disable the alternate window
if you want the main window to pop up in the middle of the
screen, where there isn't room on either side for an alternate
window.  You can swap the main and alternate windows by pressing
the F6 key.

During this configuration window display, you can use the arrow
keys (Up, Down, Left, or Right) to move the main window.  You
cannot move the alternate window directly, but you can
temporarily swap the main and alternate windows with F6, move the
temporarily-main window, and then reswap with F6 again.
                                                              3-6

The remaining function keys are used to adjust the colors for the
popup window.  The internal numeric codes for the colors are
displayed, so that you can manually record the settings if you
wish.  There are two function keys for each setting: one to
decrement the numeric code, the other to increment the code.  F1
and F2 change the window color (sometimes called the "background"
color) usually displayed.  F3 and F4 change the text
("foreground") color.  If most of the underlying screen (actually
a diagonal sample of cells, to save time) is the same background
color as the window's main color, then ZIPKEY uses the alternate
color, displayed on only four lines of the main configuration
window.  The alternate window color is adjusted by F7 and F8; the
text color by F9 and F10.

When you have completed adjusting the windows to your taste, you
press the Enter key to pop away the configuration windows, and
move on to the next stage of configuration.


Monochrome and Color Window Settings

If you are installing ZIPKEY on multiple computers, some with
monochrome screens and others with color screens, then you should
create your ZC file on one type of screen, and modify it for
window colors on another computer with the other type of screen.
ZIPKEY stores separate color codes for monochrome and color
screens.  When it is installed, ZIPKEY detects whether you have
color or monochrome.  If you have a color screen, ZIPKEY uses the
selections you configured on a color screen; if you have a
monochrome screen, ZIPKEY uses the other selections you made on
monochrome.  Thus, you don't need to have a different ZC file for
your monochrome vs. color computers.


Hotkey Configuration

All of the options described up to now are global settings-- they
determine the overall characteristics of ZIPKEY, that don't
depend on which hotkey was pressed to invoke ZIPKEY.  Now we'll
discuss the characteristics specific to hotkeys -- they change
depending on the keystroke combination used to invoke ZIPKEY.

We recall the example spelled out in the section "Determining
Your Configuration Needs" earlier in this chapter.  In that
example, you will invoke ZIPKEY in two different contexts: from
within a database manager, and also from within a word processor.
The format for typing city/state/zipcode differs in the two
contexts.  In the following sections, we'll present one method of
handling the difference: we'll define two different hotkey
combinations to invoke ZIPKEY.  One hotkey is to be used while in
the database manager, and the other hotkey is to be used while in
the word processor.  Later, we'll talk about other ways to handle
the difference (with alternate exit keys, or with alternate named
ZC files).
                                                              3-7

Hotkey Name

The first part of a hotkey specification is its name-- the
combination of keystrokes you will use to invoke ZIPKEY.  To
detect hotkeys, ZIPKEY monitors the signals coming directly from
the keyboard into your computer, so that ZIPKEY can tell when you
have pressed keys simultaneously.  You should select some
combination of keys that won't be pressed for any purpose other
than invoking ZIPKEY.  Often you won't need a combination: you
might find some individual keys on your keyboard that are
otherwise unused.  Here are some ideas for hotkeys you can use:

1. We've already mentioned the 5 key on the numeric keypad.  Of
   course, you should only choose this if you habitually keep
   Numlock off.  Otherwise, you wouldn't be able to use the
   keypad to type any numbers containing the digit 5.

2. Other individual keys that are seldom used are the F11 and F12
   keys on the newer-generation keyboards, and the SysReq key on
   the AT keyboard.

3. If the computer using ZIPKEY is dedicated to a single purpose,
   such as order entry, you might have a printing key on your
   keyboard, such as the back-quote key, that is almost never
   used.  You can make this key a ZIPKEY hotkey without causing
   too much inconvenience.  If you do so, you may wish to define
   Alt-backquote as a special hotkey that produces a back-quote
   (how to do this is discussed later).

4. Exotic combinations of the shifting keys (Shift, Ctrl, Alt),
   possibly combined with a single non-shifting key, are often
   used as hotkeys to invoke memory-resident programs.  Examples:
   Ctrl-RightShift, both Shift keys, Ctrl-Shift-Z, or both Shift
   keys and Z.  A couple of cautions are in order here: First, if
   there are other memory-resident programs residing
   simultaneously with ZIPKEY, you must insure that every
   programs' hotkeys can be detected by that program.  For
   example, Ctrl-Alt-Z wouldn't be a good ZIPKEY hotkey if you
   have Sidekick, because Sidekick would pop in when it saw the
   Ctrl-Alt.  Second, you should be aware that ZIPKEY
   distinguishes between left and right shifting keys.  If you
   don't want ZIPKEY to distinguish, you can define identical
   hotkeys with each combination.
                                                              3-8

5. If you've used up all the obvious sequences, ZIPKEY allows
   combinations not usually seen in hotkeys; namely, you can have
   more than one non-shifting key.  A mnemonic choice would be
   the Z and C keys pressed simultaneously-- they're close
   together but not adjacent so the combination won't be pressed
   accidentally.  This hotkey requires an extra consideration:
   from the computer's point of view, the keys will never be
   simultaneous: one code will always be received before the
   other.  ZIPKEY doesn't care which key comes first, as long as
   the second key is pressed before the first one is released.
   But before ZIPKEY can pop up, one of the two keycodes will be
   seen by the program (e.g. the database manager or word
   processor) that you're running.  So an unwanted Z or C will be
   displayed. You handle this in your returned city/state/zip
   keystroke sequence, by specifying the first returned keystroke
   to be the backspace key, wiping out the Z or C.

   Another caution is in order for the most exotic sequences:
   some keyboards get confused by more than two non-shifting keys
   pressed simultaneously, and don't deliver all the codes to the
   computer for ZIPKEY to see. ZIPKEY lets you verify that your
   sequence is being received correctly, by echoing the sequence
   for confirmation.  You can experiment with various
   combinations to see what works, before confirming the name for
   your hotkey.

The echoing of your hotkey is based on the internal codes
delivered by the IBM-PC and 100%-compatible keyboards.   Most
keyboards are compatible with the IBM-PC, but some aren't.  For
those keyboards, the echoed names won't match the names of the
keys as you know them.  However, as long as the echoing is
consistent (you get the same thing on several tries), the hotkey
will work correctly when you use ZIPKEY.

Recalling our database/word processing example: let's assume you
have a newer-generation keyboard with F11 and F12 keys.  You'll
use F11 for the database hotkey and F12 for the word processing
hotkey.  So the first time you are prompted for a hotkey name,
type the F11 key for the name, and Y to confirm the name.


Zipcode Source

Once you have confirmed the name of a hotkey, ZIPKEY next asks
for the first action it should take when you have pressed the
hotkey.  There are four choices: first, ZIPKEY can simply pop up
its window and wait for the operator to type a zipcode
specification.  Second, ZIPKEY can look at the contents of the
video display, to find a zipcode that already appears on the
screen.  Third, ZIPKEY can pretend that it has popped up its
window and that a fixed sequence of zipcode specification
keystrokes has already been typed. Finally, ZIPKEY can look at
the last 16 keystrokes typed, and use the last 5 digits typed as
the zipcode to be searched.  Let's consider each choice in turn:
                                                              3-9

1. The popup-window option is the simplest and most
   commonly-used.  There are no further configuration choices you
   need to make for this option.

2. The video screen option is used when the zipcode has already
   been typed at the time ZIPKEY is invoked.  You can use this
   option to create a hotkey that verifies existing address
   records, or to create a data-entry scenario in which ZIPKEY's
   window normally doesn't pop up at all, and so is the most
   unobtrusive.

   If you choose to take the zipcode from the video screen,
   ZIPKEY will look for five consecutive digits on the same line
   as the cursor, or on an immediately adjacent line, above or
   below the current line.  If no five-digit sequence is seen,
   ZIPKEY will pop up a window just as if option 1 had been
   selected.  If a five-digit sequence is seen but it isn't a
   valid zipcode, ZIPKEY will pop up its window with that
   zipcode, and tell you that the city wasn't found.  For the
   final possibility, a valid five-digit zipcode, you have an
   option: you can have ZIPKEY pop up its window so that you can
   confirm the city, or you can have ZIPKEY automatically play
   back the city/state/zip sequence without popping up at all.
   If you want to allow the possibility of using alternate exit
   keys (described later), you must choose to have ZIPKEY always
   pop up the window.

   What happens if there is more than one five-digit sequence on
   the screen? ZIPKEY uses the first sequence it finds, searching
   in the following order: first, it starts five characters
   beyond the current cursor position, looking backwards to the
   start of the current line.  Then it looks from the current
   cursor position forwards to the end of the current line.  Then
   it looks backwards from the end to the start of the line above
   the current cursor position.  Finally, it looks from the start
   to the end of the line below the current cursor position.

3. The fixed-keystroke option is used for a number of
   special-purpose applications.  For example, if a large number
   of addresses that you type are in a local area in which the
   first three zipcode digits are always the same, you may wish
   to define a hotkey with a fixed-keystroke sequence consisting
   of those three digits.  Or, if your data-entry scenario
   includes typing the zipcode twice (as a part of an ID number,
   then later as a part of the address), you may wish to define
   an option 1 (popup) hotkey for the first instance of the
   zipcode, then another, option 3 hotkey for the second
   instance, with a fixed-keystroke string of "{Enter} to repeat
   the zipcode.  Finally, you can use this option to make hotkeys
   to generate keystroke sequences having nothing to do with
   zipcodes.  To do this, you again use "{Enter} as the fixed
   input sequence, so that the ZIPKEY window doesn't pop up.
   Then you specify a playback sequence that doesn't use any of
   the zipcode entries -- I'll give an example at the end of this
   chapter.

                                                             3-10

   When you choose this option, ZIPKEY prompts you for the fixed
   keystroke sequence.  Remember, this is a sequence of keys that
   you could have typed if ZIPKEY's window had popped up.  Thus,
   it should follow ZIPKEY's popup syntax: either a sequence of
   digits for a zipcode, or a two-letter state code followed
   optionally by a (partial or complete) city name, or a
   question-mark followed by a city name, or the double-quotes
   mark " to repeat the last zipcode.

   Note that the Enter key can be included in the keystroke
   sequence.  Thus you must use another key to tell ZIPKEY right
   now that you've finished typing the keystroke sequence.  I
   have chosen the * character as the signal for this, as it
   isn't a part of ZIPKEY's popup syntax.

   A common mistake is to confuse this fixed keystroke sequence
   with the sequence of keys intended to be played back through
   your keyboard.  If, for example, you provide Bloomington, IN
   47401* here, ZIPKEY will pretend you had typed BLOO etc. when
   its window popped up.  It will try to find a state whose name
   begins with B, tell you there isn't any, and discard the rest
   of the sequence.  You should instead provide the simpler fixed
   sequence 47401{Enter}* and give a playback sequence (described
   shortly) that causes the desired fixed city/state/zip
   combination.

4. The last-keystrokes option is the only one you can use if you
   wish to type in zipcodes from within graphics programs such as
   Borland Reflex or Ventura Desktop Publisher.  ZIPKEY cannot
   pop up when your video display is in graphics mode; nor can it
   read the contents of the screen.  With this option, you type
   the zipcode first, before pressing the ZIPKEY hotkey.

In the database management example, you'll choose option 1, to
pop up a window and wait for the operator to type in the zipcode.


Format of City/State/Zip Keystrokes

In normal ZIPKEY usage, after the zipcode has been specified and
the Enter key is typed to confirm the city found, ZIPKEY will
fool the computer into thinking a complete city/state/zip
combination has been typed.  You specify the format for this
combination now, during the specification of your hotkey.

The sequence usually consists of variable parts (city, state,
zip) that depend on the zipcode, combined with fixed parts: the
keystrokes that separate the variable parts, such as spaces,
punctuation marks, and positioning keys.  As you specify the
sequence, you type most of the fixed parts (spaces, commas,
Enter, Tab, arrow keys, etc.) just as you want them played back.
For each variable part, you substitute a letter (which you can
type in either upper- or lower-case) from the following list:
                                                             3-11

C  causes the name of the city to be generated.  ZIPKEY will
   abbreviate the name as necessary to fit it into a fixed-sized
   field.  When you type the C now at configuration time, a
   window pops up, prompting you to follow the C with the
   two-digit width you would like the city to fit into. You
   should type 99 if there is no limit.  A limit of 15 will give
   you reasonable results in all cases.  A limit less than 15
   will make some entries undecipherable and/or ambiguous.  A
   limit of 19 will cause all but a few cities not to be
   abbreviated at all.  The longest city name in the database is
   King and Queen Court House (Virginia), which has 26
   characters.

   If you type a limit less than 99, ZIPKEY will then ask you to
   specify whether the playback should follow the city name with
   a sequence of spaces (or right-arrows, or whatever) to fill
   out the fixed field.  Most database managers (including the
   one in our example) won't require this -- they let you type a
   single key, such as Enter or Tab, to advance to the next
   field. You would typically need this padding only if you are
   using a simple text editor to maintain a fixed-field database.
   If you need the padding, type F followed by the padding
   character (typically the space bar).  If you don't need the
   padding, type N and continue the playback sequence by
   providing the character needed (Enter, Tab, etc.) to advance
   beyond the city field.

A  causes the two-letter state abbreviation (in capital letters)
   to be generated.

Z  causes the five-digit zipcode to be generated.  There is one
   case -- a city search which returned multiple zipcodes in
   which the operator didn't complete the zipcode -- that x's are
   provided to complete the zipcode.

In addition to the above commonly-used letters, ZIPKEY offers the
following letters for more special purposes:

B  causes a backspace to be generated.  This is on this list so
   you can use the backspace key right now to correct your
   configuration entry.  You will begin your playback sequence
   with B if the hotkey name was something like Z C, which causes
   one letter to escape to the application program.  You can also
   begin the playback sequence with BBBBB if you used option 2 or
   option 4 above to read a just-typed zipcode, and you wish to
   replace the zip with city/state/zip in the playback sequence.

L  causes the next character to be literalized -- that is, it is
   output as-is even though it might be on this list.  You can
   and should literalize all letters played back, just in case
   future versions of ZIPKEY add new letters to this list.  You
   can also literalize the * character to cause it to be played
   back instead of being interpreted as the terminator to this
   sequence.  For example, you may wish to embellish our
   word-processing example by appending LDLeLaLr followed by a
   space to the playback, causing "Dear " to be generated below
   the letterhead.
                                                             3-12

R  is used to retreat back across a variable-length city name.
   This would be used in a special case in which an address is
   being generated that might be indented on the page by an
   unknown amount.  Some text editors might require you to
   left-arrow back to the start of the name, then down-arrow to
   the next line to be aligned with the city-line.  You follow
   the R with the left-arrow key, or whatever other key you wish
   to be repeated by the length of the city name.

S  causes the full name of the state to be generated.  Most
   people will not use S, but instead use A to generate the
   two-letter abbreviation.

Just as with the fixed input specification, you can include the
Enter key as part of the sequence of keystrokes.  So you signal
ZIPKEY that the sequence is complete with the * character.

Returning to our database example, recall that the keystroke
sequence used for entering the city/state/zip combination was

{Enter}C{Enter}AZ{Enter}

This is what you should type when ZIPKEY asks for the keystroke
playback sequence.  When you type C, ZIPKEY asks for the maximum
city width-- you should give the field width 17.  Then ZIPKEY
tells you to type F if you need padding, and N if you don't.  You
don't need padding, so you type N.  The complete specification
you type, including the terminating *, is

{Enter}C17N{Enter}AZ{Enter}*


Multiple Hotkeys

As a more advanced option, ZIPKEY allows you to define multiple
hotkeys.  (The limit is 99, which I hope is much more than anyone
will ever need.)  When you are setting up a new configuration
file, ZIPKEY will invite you to define another hotkey after the
first hotkey specification is complete.  You may also add hotkeys
at any point later in time, by selecting the appropriate option
in the configuration editing menu.

In our example, you answer Y to the invitation to define another
hotkey, and name the second hotkey F12.  You again choose zipcode
source option 1, to pop up the window and wait for keyboard
input.  The keystroke return sequence for word processing,
including the 99 for unlimited width and the terminating *, is

C99, A Z{Enter}{Enter}*
                                                             3-13

Exit Keys

Here is another option for more advanced users.  We've just seen
that one way to specify different keystroke playback sequences is
to define a different hotkey for each sequence.  Another way is
to define one or more alternate ZIPKEY exit keys.

The normal method for confirming a zipcode and initiating key
playback is the Enter key.  If you have defined an alternate exit
key, you can press that alternate key instead of Enter to confirm
a zipcode.  The keystroke playback sequence is associated with
the exit key, and so remains the same no matter what hotkey was
used to invoke ZIPKEY.

Since the function keys (F1, F2, etc.) have no other meaning at
the moment you are about to exit the ZIPKEY window, they are good
choices for alternate exit keys.  Let's consider our
database-and-word processing example.  Suppose you don't have a
new-generation keyboard with F11 and F12 keys, and you don't like
exotic keystroke combinations.  So you wish to define only one
hotkey, numeric 5.  You decide that most addresses will be typed
in through the database manager, so you specify the database
return sequence {Enter}C17N{Enter}AZ{Enter}{Enter}* for the
hotkey.  It will be played back whenever the Enter key is used to
confirm a zipcode.  For word processing, you define an alternate
exit key F1, and specify the word-processing sequence C99,  A
Z{Enter}{Enter}* as the playback sequence for F1.  Then, whenever
an address is being typed to the word processor, it is confirmed
with F1 instead of Enter, to get the alternate playback.

You can, of course, have both multiple hotkeys and alternate exit
keys. This would be desirable, for example, if you wanted to have
a number of different input combinations (e.g. popup a window
immediately, take the zipcode from the screen, and several
different fixed keystroke combinations for different localities),
combined with a number of different playback sequences.  You
would define a different hotkey for each input possibility, and
an alternate exit key for each playback sequence (except the most
commonly-used sequence, which you specify for every hotkey as the
sequence used when Enter is pressed to confirm an entry).


Configuration Editing Menu

After your configuration specification is complete, ZIPKEY goes
to the configuration editing menu.  This menu allows you to
display and/or modify the configuration choices you have made.
There are display options for the global settings (memory,
intermediate results, numlock, slow keyboard, and all the window
settings), the hotkey names, and the exit key names and playback
sequences.  There are also corresponding modification choices,
that return you to the appropriate sections of the original
configuration process.  Again, the default values for the global
settings are the values you chose before -- if you wish to change
just a single global setting, choose "Global modify" and then
just keep pressing Enter until that setting comes up.
                                                             3-14

Option 7 of the configuration menu allows you to generate your
own quick reference card. I do not provide a printed
quick-reference card as a part of the ZIPKEY software package,
because much of the useful information contained on that card is
specific to your configuration.  Instead, this option prepares a
quick-reference document containing the configuration
information, that you can print out yourself.  The file is
written as ZIPKEY.ZQR (ZQR stands for Zipkey Quick Reference) on
your current disk directory.  You may wish to edit the document
for formatting before printing it; or you can simply type to the
DOS prompt the command COPY ZIPKEY.ZQR PRN.


Named Configuration Files

The final action in the configuration process is to save the ZC
(Zipkey Configuration) file to your disk, so that ZIPKEY can read
it every time you install ZIPKEY in memory.  If you will have
only one configuration, you should use the default file name,
ZIPKEY.ZC.

You may, however, wish to have different configurations, either
for different users or for different computing contexts.  In our
example, this would be a third way to provide a different
playback sequence for the database manager vs. word processor
case.  You could configure a single hotkey for the database, and
name its ZC file DATA.ZC.  Then you could make another
configuration, named WORD.ZC, with a single hotkey for the word
processor. Before entering the database manager, you always load
ZIPKEY using DATA.ZC; before entering the word processor, you
load ZIPKEY using WORD.ZC.

When ZIPKEY asks you for the name of the configuration file, you
do not need to type the file-name extension .ZC, but you can if
you want.  Any extension other than .ZC will be ignored, and .ZC
will be used.

The ZQR file produced by the quick reference document generation
option is always named after the ZC file.  For example, the ZQR
file for DATA.ZC is DATA.ZQR.


Modifying Configuration Files

You may modify a configuration file at any time, by selecting
option 3 from the main menu, or by invoking ZIPKEY 3 from the DOS
command prompt.  You may also include the name of the ZC file in
the DOS command prompt.  For example, ZIPKEY 3 DATA will cause
ZIPKEY to look for DATA.ZC.

If the ZC file you wish to modify is not found, ZIPKEY asks if
you are configuring it for the first time, giving you the chance
to change the file name in case you mistyped it.  Conversely,
you're also given options if the file was found, in case you
thought you were configuring for the first time.
                                                             3-15

The default choice in the configuration editing menu tells you if
you have made any modifications to the file.  If it is 9 (abort,
exiting without saving), you haven't modified the file.  If it is
8 (disk save), you have.


More Hotkey Examples

Here are the complete configuration specifications for a few of
the scenarios mentioned earlier in this chapter.  To work the
examples in this section, type ZIPKEY 3, then either walk through
a configuration process until you get to the "Hotkey name"
prompt, or select option 4, "Hotkey review, modify, add or
delete", of the configuration editing menu.

First, let's configure so that the zipcode comes from the screen,
and the ZIPKEY window doesn't pop up at all if the zipcode is
found.  When prompted for the hotkey name, press the back-quote
key.  Select option 2, "From the zipcode near the current cursor
position on the screen."  Then type N, you don't want the screen
to pop up for confirmation if the zipcode is found.  For the
playback sequence, we'll assume that you want to erase the
just-typed zipcode and replace it with a letterhead: type

BBBBBC99, A Z{Enter}

and terminate with the * key.

Because we used a displaying key (the backquote key) as the
hotkey in the previous example, let's define another hotkey that
generates a backquote.  When prompted for the hotkey name, type
Alt-backquote.  Select option 3, fixed string, for the zipcode
source.  ZIPKEY then asks for the fixed specification, and you
type the double-quotes key " followed by {Enter} and the
terminating * key.  Your keystroke playback sequence then has
nothing to do with zipcodes: it is simply the backquote key
followed by the terminating * key.  Now if you need to generate a
back-quote, you can type Alt-backquote.

Next, let's handle the case in which a zipcode is typed twice:
once as a part of an identification code, and then later as a
part of the address.  When prompted for the hotkey name, type the
Z and the 1 keys simultaneously.  For the zipcode source, choose
option 1, "The operator types it in after the window is popped
up."  Since you used two non-shifting keys, one of the keys will
have been fed to your application program: you now wipe it out by
beginning the playback sequence with B.  Since the city and state
name aren't part of the identification code, the playback is just
the backspace and the zipcode: BZ followed by the terminating *
key.  Next you specify a second hotkey, named with the Z and 2
keys.  Since you are repeating the zipcode just looked up for the
identification code, you specify option 3, fixed string, as the
zipcode source.  ZIPKEY then asks for the fixed specification,
and you again type the double-quotes key " followed by {Enter}
and the terminating * key.  Then you type the keystroke playback
sequence: C17N{Enter}AZ{Enter} followed by the terminating * key.
                                                             3-16

Finally, let's do an example in which we provide a fixed field on
a simple text editor.  The city field will be 19 characters wide,
starting at column 33 on a line, which is the fourth tab stop.
It will be followed by the state abbreviation and the zipcode.
For the hotkey name, press both Shift keys, then press the Z key.
Choose option 1 as the zipcode source.  For the playback
sequence, we assume that the Home key will put the cursor at the
start of the current line, so you can specify

   {Home}{Tab}{Tab}{Tab}{Tab}C19F A Z*

which will leave the cursor just beyond the zipcode.


Conclusion

This concludes the description of ZIPKEY configuration.  In the
next chapter we'll discuss how to arrange the ZC file together
with the other ZIPKEY files, so that ZIPKEY is permanently
available to you.

As you have seen, ZIPKEY has a wide array of options.  There is
often more than one method of handling a given configuration
requirement.  Which method you choose is often simply a matter of
personal taste.  If you are intimidated by the choices, then keep
things simple to start out with.  Like any complex program,
ZIPKEY will serve you best if you let yourself become familiar
with it before trying to exploit every feature.

CHAPTER 4   RUNNING MEMORY-RESIDENT ZIPKEY


This chapter assumes you have some familiarity with DOS concepts
and commands-- for example, it assumes you know what a
subdirectory is, and how to copy a file to a subdirectory.  If
you aren't very familiar with DOS (you run straight to your
word-processor and stay there when you turn your computer on),
you may need to have a DOS-knowledgeable person assist you.


Installing ZIPKEY as a Memory-Resident Program

In Chapter 3 we discussed how to create a ZC file to configure
ZIPKEY to your specific needs.  Once you have done so, you are
ready to run ZIPKEY as a memory-resident program.  You do so by
selecting option 4 of the ZIPKEY main menu.  You can also do so
directly from the DOS command prompt, by issuing the command

      ZIPKEY 4

followed by the Enter key.  If you have a ZC file named something
other than ZIPKEY, you include the ZC file name on the command
line.  For example, if you have a ZC file named DATA, either of
the following command lines will load ZIPKEY as a memory resident
program, using the configuration file DATA.ZC:

   ZIPKEY 4 DATA
   ZIPKEY DATA 4

The process of loading ZIPKEY as a memory-resident program causes
your computer to exit the ZIPKEY program, and return you to the
DOS command prompt.  You are now ready to run any other programs
you choose, but ZIPKEY is still in your computer's memory, ready
to be activated at any time by the hotkey or hotkeys you chose
when you configured ZIPKEY as described in Chapter 3.

As an example, let's assume you have defined a ZC file with the
two hotkeys we discussed in Chapter 3: one, F11, for use within
your database manager, and the other, F12, for use within your
word processor.  Having loaded ZIPKEY as a memory-resident
program, you can now enter either your database manager or your
word processor to see if ZIPKEY works.  You reenter your database
manager, just as you did before you configured ZIPKEY, to type in
a sample address.  Just as before, the database manager puts an
address template onto the screen.  You type in a sample name and
street address; but instead of typing the Enter that will advance
you to the city field, you type the F11 hotkey instead.  The
ZIPKEY window pops onto the screen, inviting you to type a
zipcode specification.  (If it doesn't, see the section "ZIPKEY
and Other Memory-Resident Programs", later in this chapter.)  You
may type any specification as described in Chapter 2.
                                                              4-2

For most business applications, you will already have the zipcode
available to you, and you will be using ZIPKEY to make the data
entry faster and more accurate.  You type in a zipcode, 31625,
and get the city Barney, GA for confirmation.  You confirm with
the Enter key.  Now, if you defined your keystroke playback
sequence to duplicate what you would have typed to your database,
you should see the city, state, and zip fields of your address
template filled with the correct values.

What do you do if the template is not filled correctly?  You need
to determine if you got the keystroke playback sequence right.
If the city/state/zip appears to be there but is in the wrong
fields, then it's likely that you got your cursor-positioning
keys wrong -- either too many or not enough.  You should repeat
the exact keystroke sequence used to enter city/state/zip, and
make sure that is the sequence specified to ZIPKEY's
configuration.  You can get a listing of what you specified by
printing out the ZQR (Zipkey Quick Reference) file that you can
create via option 7 of the ZIPKEY configuration editing menu.
For example, if you created ZIPKEY.ZQR, type the command

   COPY ZIPKEY.ZQR PRN

to the DOS command prompt, and the listing will be sent to your
printer.

If ZIPKEY appears to be playing back only every second or third
letter of the city/state/zip, then your program needs the
keyboard slowdown option, one of the global settings of the
configuration.

In any case, if a configuration change needs to be made, follow
the instructions in the next section to reinstall a new
configuration.

Having checked out the database manager, you need to move on to
the word processor.  You exit the database and invoke the word
processor.  You type a sample name and street address.  Instead
of typing a city name, you press the F12 key, and the ZIPKEY
window pops up once again.  Now type 23054 to get the entry Fife,
VA.  When you press the confirming Enter key, the complete
specification Fife, VA 23054 appears, the cursor is positioned at
the second line below.  Again, if you didn't get the right
results, you need to figure out whether you got the playback
sequence right.


Correcting Your Configuration

If your check-out of memory-resident ZIPKEY revealed some changes
you need to make in the configuration, you may do so by typing

   ZIPKEY 3
                                                              4-3

followed by the ZC file name if it isn't ZIPKEY, to the DOS
command prompt.  You should then be told by ZIPKEY that the
configuration file already exists, at which point you choose
option 3, to go to the configuration editing menu to modify it.

The option "Global modify" followed by several presses of the
Enter key will get you to the "Slow down keyboard" option, which
you can change to Y if your program was missing regularly-spaced
keystrokes.  You may wish to temporarily slow down the keyboard
even if this wasn't the problem, so that you can more easily
watch the playback to diagnose how you got the sequence wrong.

The option "Hotkey review, modify, add or delete" will change the
keystroke playback sequence for a specific hotkey.  You need to
repeat the specification sequence, giving the hotkey name,
zipcode source, and the corrected playback sequence.

When you have made your changes, you can type Enter to the ZIPKEY
configuration menu, to execute default option 8, the disk save,
which puts you back to the ZIPKEY main menu.   Press Enter again
to execute default option 4, to re-install ZIPKEY as a
memory-resident program.


Uninstalling ZIPKEY

You may reverse the ZIPKEY 4 command with option 7 of the main
menu, which can be executed directly from DOS with the ZIPKEY 7
command.  This option removes ZIPKEY from memory.  If there have
been no other memory-resident programs installed after ZIPKEY,
the memory occupied by ZIPKEY is freed back for your other
programs to use.  In some systems, such as those running
Sidekick, a short stub of 200-300 bytes must be retained by
ZIPKEY after uninstallation.



Re-installing a New Configuration

In most cases, you do not need to uninstall ZIPKEY in order to
reinstall a new configuration.  You can simply repeat the command
to install ZIPKEY as a memory resident program-- either option 4
from ZIPKEY's main menu, or the DOS command ZIPKEY 4 followed by
the ZC file name if it isn't ZIPKEY. You may re-install after you
have modified the ZC file already installed, or you may reinstall
to change ZC files.  ZIPKEY will detect that it was already
installed, and simply substitute the new configuration.  You'll
be back at the DOS command prompt, ready to invoke ZIPKEY within
your programs again.

There are only two situations in which you need to execute ZIPKEY
7 to change configurations:

1. If you change the location of ZIPKEY's database -- EMS memory
   vs. stay-on-disk vs. main memory -- this one change will be
   ignored when ZIPKEY is re-installed, and not take effect until
   after ZIPKEY is uninstalled.
                                                              4-4

2. If the new ZC file is more than 256 bytes bigger than the
   first ZC file installed, ZIPKEY will tell you that the new ZC
   file is too big, and the new installation will not take
   effect.  ZC files are usually much smaller than 256 bytes, so
   unless you have unusually complicated configurations, you
   won't have this problem.  If you do, you should make sure that
   your largest ZC file is loaded first when your computer starts
   up.


Making ZIPKEY Permanently Available

The MS-DOS operating system has a mechanism that allows you to
specify that certain programs should be run every time your
computer is started.  You create a file called AUTOEXEC.BAT, on
the same disk drive from which the operating system is loaded.
If you have a hard disk system, this is usually drive C.
AUTOEXEC.BAT is a text file, containing lines that you might type
to the DOS command prompt to run programs.  Every time your
computer is started, MS-DOS reads the AUTOEXEC.BAT file and
pretends that the first commands you typed into your computer are
the commands in that file.  You can place a line into
AUTOEXEC.BAT, containing the command to load ZIPKEY as a
memory-resident program.  For example, if your ZC file is named
ZIPKEY, you simply place the line

   ZIPKEY 4

into your AUTOEXEC.BAT file.  If the ZC file is named DATA, you
place

   ZIPKEY 4 DATA

into AUTOEXEC.BAT.  You'll need a text editor to modify
AUTOEXEC.BAT.  Your word processor might do the job, as long as
you make sure that no word-processing control characters are
inserted -- most word processors have a "plain text" mode for
this.


ZIPKEY and Other Memory-Resident Programs

If you have other memory-resident programs installed at the same
time as ZIPKEY, you may need to experiment a little to determine
the best order in which to load the programs.  Memory-resident
programming is extremely tricky, and the techniques are
non-standardized and poorly documented.  A resident program must
monitor all the keyboard's signals to the computer, while passing
those signals to all the other resident programs as well.  I
believe ZIPKEY does a good job of this, passing along every
keystroke received except for its own hotkeys.  But other
memory-resident programs may not do a good job: they may prevent
certain keystrokes from being seen by ZIPKEY, so that a ZIPKEY
hotkey won't pop up ZIPKEY's window.  They may even become
extremely confused and freeze up your computer when ZIPKEY is
invoked, forcing you to shut down and restart the computer.
                                                              4-5

A specific example: Borland's Sidekick (the program SK) insists
that you install it after other resident programs such as ZIPKEY,
and with good reason.  You can get away with running one program
after SK that monitors keystrokes directly, but if you run two
such programs, SK locks out the first program and usually locks
out your keyboard as well.  So if you run ZIPKEY after SK, and
then run a text editor such as BRIEF or XYWrite, your computer
locks up.  If you make sure ZIPKEY appears before SK in your
AUTOEXEC.BAT file, there is no such problem.

A reverse example: Borland's SUPERKEY program must be run before
ZIPKEY. If you run SUPERKEY after ZIPKEY, the last keystroke you
typed to ZIPKEY's pop-up window (typically Enter) will be seen by
your program as well.

If ZIPKEY works in its demonstration mode (ZIPKEY 2), but not in
memory-resident mode (ZIPKEY 4), you should try ZIPKEY with all
other memory-resident programs removed.  You do this by renaming
your AUTOEXEC.BAT file to something else. For example, if your
current directory contains AUTOEXEC.BAT, you can issue the
command

   REN AUTOEXEC.BAT AUTOEXEC

to temporarily remove the .BAT extension from the file.  Then
shut down and restart your computer.  When the computer is
restarted, install ZIPKEY as a memory-resident program, and try
to invoke it with a hotkey.  If ZIPKEY now works, you know that
some other memory-resident program is interacting poorly with
ZIPKEY.  You can invoke the other memory-resident programs one at
a time, trying ZIPKEY after each one, to find the culprit. It's
possible that they will all load successfully and ZIPKEY will
still work -- in that case, you simply place the ZIPKEY
invocation at the start of the AUTOEXEC.BAT file, so it is loaded
first.

When you have sorted things out, don't forget to rename your
AUTOEXEC file back to AUTOEXEC.BAT.


Finding ZIPKEY Files on Your Disk

When you set up ZIPKEY to be permanently available, you need to
make sure that the ZIPKEY files are placed on your disk where
they can be found.  This section describes how to do so.

Normally, when you give the name of a disk file to your computer,
you must let the computer know where it can find the file.  If
the file is on a floppy drive, you give the letter of the drive;
for example, A:ZIPKEY.OVL.  If the file is on a hard disk drive,
you might also need to name a subdirectory on the drive; for
example, C:\DOS\ZIPKEY.OVL.  To reduce this burden, DOS maintains
a "current drive" and "current directory", which act as the
defaults if you don't give a drive letter or subdirectory.  For
example, the commands
                                                              4-6

    C:
    CD \DOS

make C the current drive and \DOS the current directory, so you
can refer to ZIPKEY.OVL instead of C:\DOS\ZIPKEY.OVL.

DOS's command processor adds an additional embellishment to the
current-drive-and-directory concept.  When you issue a command
such as ZIPKEY to DOS, it will look for the program file
ZIPKEY.COM first in the current directory.  If it doesn't find
ZIPKEY.COM there, it can be instructed to look in other default
directories, until ZIPKEY.COM is found.  You specify the list of
other default directories by the PATH (or SET PATH=) command,
placed into your AUTOEXEC.BAT file.  For example, your
AUTOEXEC.BAT file might contain the line

    PATH C:\DOS;C:\WP

or the equivalent line

    SET PATH=C:\DOS;C:\WP

to specify that programs may be found in the directories C:\DOS
and C:\WP as well as the current directory.

For convenience, ZIPKEY also recognizes the PATH command to find
its auxiliary files: ZIPKEY.OVL and the ZC file.  For example, if
your AUTOEXEC.BAT does contain the previously-mentioned PATH
specification, you may place ZIPKEY.COM, ZIPKEY.OVL, and your ZC
files into the C:\DOS subdirectory.  Just make sure that the PATH
command in your AUTOEXEC.BAT comes before your ZIPKEY command.
Then you won't have to worry about what the current directory is
when ZIPKEY is invoked.

Alternatively, if you want to keep ZIPKEY by itself on your disk,
you can either add ZIPKEY's subdirectory to the PATH command, or
make ZIPKEY's directory the current directory at the time ZIPKEY
is invoked, with a sequence such as

   CD \ZIPKEY
   ZIPKEY 4
   CD \

which makes \ZIPKEY the current directory, invokes ZIPKEY, and
then restores the root directory \ as the current directory.
\ZIPKEY should be a subdirectory that contains all the files
\ZIPKEY\ZIPKEY.COM, \ZIPKEY\ZIPKEY.OVL, and \ZIPKEY\*.ZC.

Note that you must change the current directory if the ZIPKEY
files are not in a PATH directory.  You cannot replace sequence
in the previous paragraph to

   ZIPKEY\ZIPKEY 4

because ZIPKEY won't be able to find its ZIPKEY.OVL or ZC file.
                                                              4-7

The only crucial factor here is the file-finding situation at the
time ZIPKEY is installed (the ZIPKEY 4 command).  After that, you
may change the current drive and/or directory to anything you
want, and ZIPKEY will always find the files it needs.  The only
exception: if you run ZIPKEY from a floppy disk and you have
configured ZIPKEY to take its data from the disk, you cannot
remove the disk containing ZIPKEY.OVL-- it must still be there so
ZIPKEY can read it.

When deciding whether to place ZIPKEY into a PATH directory, you
may wish to consider the ease with which you would like ZIPKEY to
be invoked for modifying and reloading configurations.  With
ZIPKEY in a PATH directory, it can be invoked at any time without
changing the current directory.  If you modify an existing ZC
file, ZIPKEY will find and rewrite the file wherever it is.  (New
ZC files are always written to the current directory.)  This is a
powerful and convenient feature.  On the other hand, if you have
untutored users on your computer for which you consider such
power too dangerous, you may deliberately place ZIPKEY in a
non-PATH directory, to make careless modifications a little more
difficult.


Installing Files on a Network

If you set up your system so that ZIPKEY.OVL is accessed over a
network, there is an additional optimization you can make: after
copying ZIPKEY.OVL to its permanent location, you can execute the
DOS command

   ATTRIB +R ZIPKEY.OVL

which makes ZIPKEY.OVL a read-only file.  This allows your
computer to buffer data without worrying about whether another
computer has changed the file.  The result is that access is
speeded up when the same disk sector is read consecutive times.

CHAPTER 5   GENERATING AN ORDER FORM


Automatic Order-Form Generation

Because ZIPKEY is widely available on an evaluation basis, I felt
it necessary to make it easy for people to realize that ZIPKEY
isn't free.  So ZIPKEY has a special option 5 on its main menu to
generate an order for based on your usage, disk requirements, and
method of payment.  You may also execute this option directly
from the DOS command prompt, by issuing the command

   ZIPKEY 5

followed by the Enter key.  You'll also be invited to generate an
order form when installing ZIPKEY in memory (using the ZIPKEY 4
command), in two circumstances:

1. If your data is 13 or more months old, you'll be warned that
   it's out of date.  The postal service regularly makes changes
   to its zipcodes, so that you need fresh data to insure
   continued accuracy.  I'll be releasing new ZIPKEY.OVL files
   based on those changes monthly.  You are required to
   resubscribe and receive a new disk at least once a year; and
   you can elect to receive disks more often if you wish.

2. If you are running the evaluation version of ZIPKEY, and it is
   now the second month or later following the first creation of
   your ZC file, you'll be reminded that your evaluation period
   has expired, and invited to fill out an order form.

In either case, if you choose Y to the order-form invitation, you
will initiate the interactive session described in this chapter,
after which ZIPKEY will install itself as intended, and
AUTOEXEC.BAT (if that's where ZIPKEY was invoked from) will
complete itself.

If you press N to the invitation, the order-form procedure is
skipped, and the computer continues normally, installing ZIPKEY
which will work just fine.  I'm not going to beat you over the
head with a club; I'm trusting that you'll answer Y eventually.


ZIPKEY's Schedule of Prices

The pricing scheme for ZIPKEY is a little unusual in that it
involves the maximum, not the sum, of two fees.  The basic,
single-keyboard registration is $30, which buys you a printed
manual, a disk, and a year's license to run ZIPKEY in
memory-resident mode.  I felt that if you want disks more often
than once a year, you should pay more.  And if you wanted to
license more keyboards you should pay more.  But I also felt that
if you chose either price-increasing option, you should
automatically be entitled to the other at no extra cost.  I can't
explain it beyond that-- it's simply what seems fair to me.
Hopefully I can implement this scheme without too much confusion,
thanks to ZIPKEY's ability to figure out your subscription price
for you.
                                                              5-2

So your subscription fee is the greater of two qualifying
amounts: the materials fee and the license fee.

The materials fee is $25 for every diskette mailed to you, plus
$5 for every printed manual mailed to you.  You may copy the
contents of a single disk onto all computer systems for which you
have licensed ZIPKEY, so you do not need to order multiple copies
of the same diskette.

The license fee depends on the number of keyboards accessing
ZIPKEY.  Keyboards using ZIPKEY only in its demonstration mode
(ZIPKEY 2) have a one-time, perpetual license fee fee of $10.
Keyboards using ZIPKEY as a memory-resident program (hotkeys, key
playback, and/or program interface) have a sliding scale of
annual fees: $25 for the first keyboard, $20 each for the second
and third keyboards, $15 each for the next five keyboards, and
$10 each for all subsequent keyboards.

Again, the total charge is the maximum, NOT the sum, of the
materials and license fees.  This means, for example, that if you
would like to receive disks quarterly (materials fee $100), you
may license 5 memory-resident keyboards (license fee $95) for no
extra charge.  Conversely, if you license a lot of keyboards, you
may be able to receive disks more often for no extra charge.


Gathering Your Order Information

Before answering ZIPKEY's order form questions, you should take a
census of the number of keyboards you wish to license.  (I refer
to keyboards, not computers, to resolve questions raised by
networks.)  The non-resident keyboards are those from which
ZIPKEY is accessible, and from which occasional ZIPKEY 2 commands
are issued to look up zipcodes in demonstration mode, but which
the ZIPKEY 4 command is never issued.  The resident keyboards are
those for which ZIPKEY 4 is used, to install ZIPKEY in memory,
and use any or all of the following: hotkeys, keystroke playback,
or the programmatic interface.  If you use the programmatic
interface to produce an unpacked zipcode database file from
ZIPKEY.OVL, then you must also license any keyboards that access
that database file, even if they don't run ZIPKEY directly.

You should also decide how you will pay for your order, by
obtaining either a purchase order number or a credit card number
(Visa, Mastercard, or American Express), or by seeing to it that
you can obtain a prepaid check.  Keep in mind that you must be
either an established customer, a Fortune 1000 corporation, an
accredited school, or a government agency to issue a non-prepaid
purchase order.  Also, there is a $5 surcharge for non-prepaid
purchase orders under $100.
                                                              5-3

Answering the Order-Form Questionnaire

Now you're ready to answer the order-form questionnaire.  You'll
first be asked the number of non-resident, then resident
keyboards you are licensing. If this is a simple, one-keyboard
registration, you'll answer 1 for one of them and 0 for the
other.  If you are renewing a license, you don't need to
redeclare the non-resident keyboards-- their license is
permanent.  You do need to redeclare the resident keyboards.

What about keyboards that change resident vs. non-resident
status?  You declare the newly resident keyboards, and not the
newly non-resident ones.

Next, ZIPKEY asks for the number of printed manuals you'd like.
You may order any number from zero up to the number of keyboards
being licensed.

Next, ZIPKEY asks for the number of years you are paying for.  I
expect almost everyone to answer 1 to this question; but I myself
like to pay off my utilities bills for months in advance, so
maybe somebody out there will be like that.

ZIPKEY then asks for the number of disks per year to be
delivered.  This number multiplied by the previous number gives
the total number of disks you are paying for with this order.
You'll get one disk immediately, and the rest in evenly-spaced
periods.  The disk to be shipped exactly one year from now is
part of next year's order.

You are then give a choice of disk type.  Choice 1 is the
older-generation, 360K flexible-sleeve floppy.  Choice 2 is the
newer (PS/2 style) hard-shell, 720K disk.

You are then prompted for your name, address, and telephone
number, followed by the choices for method of payment.  If you
choose a credit card or purchase order number, you'll be prompted
for the additional information.

After the payment information is given, the order form is
complete.  The only remaining choice is whether to send the form
directly to the printer, or to a disk file or device.  Make sure
your printer is turned on before sending it to the printer.


Possible Amendments to the Total Price

The order form that ZIPKEY outputs includes the total price of
the package calculated for you.  There are only two things that
could add to the total:

1. If your shipping address is in Indiana and you are not exempt,
   you must add sales tax (5% at this writing) to the total.

2. If your shipping address is overseas, add $2 per disk and $3
   per manual to cover extra postage.  There is no extra charge
   for postage on domestic orders.

CHAPTER 6   PROGRAMMATIC INTERFACE


This chapter is intended for computer programmers who wish to
access ZIPKEY directly from within their programs.  If you are
not a computer programmer, you may ignore this chapter.


The ZIPKEY Interrupt

When ZIPKEY is installed as a memory-resident program (using the
ZIPKEY 4 command), it takes over one of the 8086's interrupts,
INT 179 (decimal; it's B3 in hexadecimal).  This interrupt serves
two functions: first, it is the method by which ZIPKEY detects if
it has already been installed.  Second, it provides the interface
by which computer programs can call ZIPKEY directly, to obtain
zipcode-related services.

I conducted a survey of numerous computers before selecting INT
179 to be used by ZIPKEY.  I found no computers or peripherals
that use this interrupt, and I am hopeful that there are none.
If your computer does use INT 179, then ZIPKEY and the device or
program using INT 179 will interfere with each other.  You can
change the interrupt number ZIPKEY uses by modifying the ZIPKEY
program itself: the number 179 is stored in the fourth byte of
the ZIPKEY program code, immediately beyond the three-byte JMP
instruction that begins the program.  This JMP occurs at the very
start of the ZIPKEY.COM file, or immediately beyond the 512-byte
header of the ZIPKEY.EXE file.  You can use a debugger or a hex
editor to modify the byte to an unused interrupt number.


Testing for ZIPKEY's Presence

Before you program attempts to call ZIPKEY, it may wish to verify
that ZIPKEY has been installed, and report an error if it isn't.
Otherwise, you program may crash when it tries to call code that
isn't there.

You can test for ZIPKEY's presence by examining the INT 179
handler, whose doubleword pointer is stored at offset 179*4 (=716
=02CCH) within segment 0 of the 8086 memory space.  If ZIPKEY is
installed, the doubleword points to its code segment.  Location
075H within that code segment contains the signature string
ZIPKEY.  Thus, the following code sequence will check for
ZIPKEY's presence:
                                                              6-2

OUR_ZIPKEY:                ; our copy of the template
  DB 'ZIPKEY'

CHECK_FOR_ZIPKEY:
  PUSH DS                  ; save register value
  SUB AX,AX                ; load zero
  MOV DS,AX                ; point DS to 0 -- 8086 interrupts
  MOV DS,WORD PTR 02CEH    ; fetch the segment part of INT 179
  MOV SI,075H              ; point to signature in segment
  PUSH CS                  ; push our code segment
  POP ES                   ; set ES to our code segment
  MOV DI,OFFSET OUR_ZIPKEY ; now ES:DI points to 'ZIPKEY'
  MOV CX,3                 ; there are 3 words in 'ZIPKEY'
  REPE CMPSW               ; does DS:75H point to 'ZIPKEY'?
  POP DS                   ; restore register before jumping
  JZ ZIPKEY_INSTALLED      ; jump if it does match
ZIPKEY_NOT_INSTALLED:      ; it does not match

Following the ZIPKEY signature, at offset 07BH within the ZIPKEY
code segment, is a single byte that is zero in the initial
version of ZIPKEY, but will increment each time I release a
ZIPKEY with new features or any other changes to the programmatic
interface.  That way, if you program needs ZIPKEY to be of a
sufficiently recent version, it can ensure that it is.  (You can
also use the version number returned by the ZK_VERSION function
described shortly.)


ZIPKEY Calling Conventions

ZIPKEY's interface works similarly to that of the MS-DOS
operating system, or the LIM-EMS specification.  The interface is
specified in 8086 assembly language.  You load a function number
into the AH register, and possibly other input parameters into
other registers, then you execute an INT instruction with an
appropriate interrupt number -- in ZIPKEY's case, the INT 179
instruction.

When ZIPKEY has completed the function, it returns control to
your program at the instruction following the INT 179.  The
success of the call is indicated by the Carry flag: NoCarry (flag
= 0) indicates success; Carry (flag = 1) indicates failure.  If
the Carry flag is set, AL is usually set to an error code (the
exceptions are those functions which, as mentioned in their
following descriptions, return the state code for a suggested
city).  Here are the possible error codes:

0FDH is returned if ZIPKEY is busy.  This would happen only if
     the program calling ZIPKEY had interrupted another program
     which also happened to be in the middle of a ZIPKEY call.
     ZIPKEY is not reentrant, so it must refuse calls in this
     situation.  If you think this interrupted-programming
     scenario is possible, you should check for this possibility.
     If ZIPKEY is busy, you should give the interrupted code a
     chance to complete the ZIPKEY call, and try your call again
     later.
                                                              6-3

0FEH is returned if you provided an illegal function number in
     the AH register.

0FFH is returned if the searching function requested failed to
     find a valid entry, or even a suggested value.

Here are ZIPKEY's register-preserving conventions:  The AX
register is clobbered by an INT 179 call; but all other 8086
machine registers are preserved unless they are specifically
named as having return values.  If a function returns an error,
such return registers may be clobbered even if they contain no
values in the return case.  For example, the ZK_STCITY_ZIP
function returns values in BH, CX, and DX.  Except for AX, all
other registers not mentioned are preserved (SI,DI,BP,DS,ES).
The BH, CX, and DX registers may be clobbered even if the search
fails (and Carry is returned).


The ZIPKEY Functions

Following are the functions available to you when ZIPKEY is
installed. For each function, you load the input registers with
the values indicated, then invoke INT 179.

The names of the functions (ZK_VERSION, ZK_ABBR_ST, etc.) have no
significance to ZIPKEY-- I present them merely as suggested names
if you wish to implement a library of calls; and also so that I
can refer to the functions by name.

ZK_VERSION:   returns ZIPKEY version information.

  In: AH = 070H

 Out: AX = The ZIPKEY program version number, as shown when
         ZIPKEY is invoked or the ZIPKEY window is popped up.  AH
         is the major version number (to the left of the decimal
         point) and AL is the minor version number (to the right
         of the decimal point).  For example, for V1.0 the return
         AX value would be hex 100.

      CL = The number of states, (and territories, etc.) in the
         current database.  Each state is assigned an internal
         numeric code by ZIPKEY, that is used by many of the
         functions of ZIPKEY's programmatic interface.  These
         codes range from 0 to CL-1.

      DX = The date of the current ZIPKEY.OVL database.  DL is
         the month, ranging from 1 for January to 12 for
         December.  DH is the year minus 1900; e.g., decimal 89
         for 1989.
                                                              6-4

ZK_ABBR_ST:   converts a two-letter abbreviation into a state
              code.

 In:  AH = 071H

      BX = The 2-letter ASCII abbreviation for the state, in
         either upper- or lower-case.  BL is the first letter and
         BH is the second letter.

Out:  AL = The ZIPKEY state code, suitable for input to other
         ZIPKEY functions in this chapter.

         AL = 0FFH with the Carry flag set if not found.


ZK_ST_ABBR:   converts a state code into a two-letter
              abbreviation.

 In:  AH = 072H

      BL = The ZIPKEY state code, ranging from 0 through CL-1,
         where CL is returned by ZK_VERSION.

Out:  AX = The 2-letter ASCII abbreviation, upper case.  AL is
      the first letter and AH is the second letter.

      The Carry flag is set if the input state code BL was
      invalid.


ZK_ST_NAME:   converts a state code into a full state name.

 In:  AH = 073H

      BL = The ZIPKEY state code, as returned by ZK_ABBR_ST.

      ES:DI points to the buffer to contain the returned state
      name.

Out:  The full state name is output to ES:DI-pointed memory. DI
      is advanced beyond the output.

    The Carry flag is set if the input state code BL was invalid.
                                                              6-5

ZK_ZIP_DIGITS:  converts zipcode DXCH into a ASCII digits string.

 In:  AH = 074H

      DX = The zip region, ranging from 0 to 999.

      CH = The last 2 digits of the zipcode, from 0 to 99.

Out:  The 5 ASCII decimal digits of the zipcode are output to
      ES:DI-pointed memory.  DI advanced beyond the output.

      The Carry flag is set if DX was greater than 999.

      NOTE this is not really a database function-- it is just
      an unpacking function provided for convenience.


ZK_ZIP_ST:   looks up the state code for zipcode DXCH.

 In:  AH = 075H

      DX = The zip region, ranging from 0 to 999.

      CH = The last 2 digits of the zipcode, from 0 to 99.

Out:  AL = the ZIPKEY state code.

      The Carry flag is set, and AL=0FFH, if the zipcode
      region (the first three digits) is invalid.

      Note: for speed, this routine does not check for validity
      of the individual zipcode: it looks at only the zip
      region and the state-exceptions list.  If you wish to
      check the validity of a zipcode, use ZK_ZIP_CITY instead.
                                                              6-6

ZK_ZIP_CITY: looks up the state and city for zipcode DXCH.

 In:  AH = 076H

      DX = The zip region, ranging from 0 to 999.

      CH = The last 2 digits of the zipcode, from 0 to 99.

      ES:DI points to the buffer to contain the returned city
      name.

Out:  The ZIPKEY state code is returned in the AL register. The
      city name is output to ES:DI-pointed memory.  DI is
      advanced beyond the output.  To ensure that the name does
      not exceed a maximum width, you can set the width using the
      ZK_RESTORE function.  The Carry flag is set if the zipcode
      was not found, with AL/DI set to the suggested state/city
      if there is one.  AL is set to 0FFH if there is no
      suggested city.

      NOTE that a previous call to ZK_ZIP_ST can and should be
      made if you wish to suppress output for the not-found-but-
      suggested case.


ZK_ZIP_KEYS: plays the back exit key BX for the entry with
             zipcode DXCH.

 In:  AH = 077H

      BX = The 16-bit BIOS keycode for a defined ZIPKEY alternate
         exit key.  This is the code returned in the AX register
         after you call the keyboard service routine (MOV AH,0
         followed by INT 016H).  For example, the code for the F1
         function key on a 100% IBM-compatible is 03B00H; add
         0100H for subsequent function keys.

      DX = The zip region, ranging from 0 to 999.

      CH = The last 2 digits of the zipcode, from 0 to 99.

Out:  If there is a failure with no suggested city, ZIPKEY
      returns Carry to the caller.  Otherwise, it returns
      NoCarry, and the zipcode specification defined by the BX
      exit-key is inserted into the BIOS keystrokes buffer, as if
      a user had popped up the ZIPKEY window, typed in the
      zipcode, and exited with the BX exit key.
                                                              6-7

ZK_STCITY_ZIP:  looks up the zipcodes for a given state and city.

 In:  AH = 078H

      BL = The ZIPKEY state code for the city to be looked up.

      DS:SI points to the city-name specification.  The
          specification is a string of ASCII characters,
          terminated by a carriage-return (0DH) if the complete
          name has been given, terminated by a null (00H) if
          ZIPKEY should match any city whose name begins with the
          specification, whether or not that is the complete city
          name.  Letters in the string can be in either upper- or
          lower-case.  ZIPKEY will also unabbreviate the string,
          as described in Chapter 2.

Out:  ZIPKEY accumulates a list of all cities that match the
      specification given.  The list is sorted first
      alphabetically by city name, then numerically by zipcode.
      Each entry on the list is a range of zipcodes for a city
      that matches the specification.  If the first and last
      zipcodes in the range are the same, the range consists of
      just the one zipcode.  If they are different, then they
      both represent valid codes for a matching city.  Any
      zipcodes between the first and last may be either valid
      zipcodes for the same city, or undefined zipcodes.

      The capacity of ZIPKEY's matching-entries buffer is 50. If
      there are more than 50 entries for the specification,
      ZIPKEY will return a count of 51 entries.  You may make
      calls to ZK_CASE_ZIP to determine the entries returned, but
      be aware that unless the complete count happened to be 51,
      the list is incomplete.  The only way to obtain the
      complete list of entries is to extend the city-name
      specification by adding one or more letters in all possible
      combinations.

      The zipcode range for the first entry is returned with this
      call.  To obtain the remaining entries, you make repeated
      calls to ZK_CASE_ZIP.  To obtain a readable display for
      each entry, you call ZK_ZIP_CITY, ZK_ZIP_ST, and
      ZK_ZIP_DIGITS.

The return register values are:

      BH = The number of matching entries (Carry set if BH=0). If
         ZIPKEY's entries-buffer overflowed, BH is set to 51 (see
         the above discussion about capacity).

      DX = The zip region (0 to 999) of the first entry.

      CL = The value of the bottom two digits for the first
         zipcode in the range.

      CH = The value of the bottom two digits for the last
         zipcode in the range.
                                                              6-8

ZK_CITY_ZIP:   looks up zipcodes for a given city.

 In:  AH = 079H

      BL = The ZIPKEY state code of the first state to be
         searched.

      DS:SI points to the city-name specification, just as in
         ZK_STCITY_ZIP.

Out:  ZIPKEY accumulates a list of zipcode ranges, just as in
      ZK_STCITY_ZIP.  With this function, however, if no matching
      entries are found for state BL, then BL is incremented to
      search in the next state.  Searching continues until either
      a match is found or the last state code is reached.  If
      there is no matching entry for the last state, ZIPKEY
      returns AL=0FFH with the Carry flag set.  This differs from
      the city-only search that is initiated interactively from
      ZIPKEY's popup window-- the interactive search cycles
      around to the first state and continues looking from there.

      To get a complete list of matching cities for all states,
      you call this function first with BL=0, then repeat the
      call with BL set to the previous returned AL+1, until you
      get a failed find.


The return register values are:

      AL = The ZIPKEY state code of the first matching state. AL
         is set to 0FFH with Carry set if no state was found.

      BH = The number of matching entries (Carry set if BH=0). If
         ZIPKEY's entries-buffer overflowed, BH is set to 51.

      DX = The zip region (0 to 999) of the first entry.

      CL = The value of the bottom two digits for the first
         zipcode in the range.

      CH = The value of the bottom two digits for the last zipcode
         in the range.
                                                              6-9

ZK_CASE_ZIP:  fetches an entry from a previous ZK_(ST)CITY_ZIP
              call.

 In:  AH = 07AH

      BL = a case number, from 0 to BH-1, where BH is the number
         returned by the last call to ZK_STCITY_ZIP or
         ZK_CITY_ZIP.

Out:  AL = The ZIPKEY state code for this entry.  Note that this
         is the same value for all entries returned by a given
         call to ZK_STCITY_ZIP or ZK_CITY_ZIP.

      DX = The zip region (0 to 999).

      CL = The bottom 2 digits (0 to 99) of the first zipcode in
         the range.

      CH = the bottom 2 digits (0 to 99) of the last zipcode in
         the range. CH = CL if there is only one zipcode.


ZK_SAVE: fetches values necessary to save ZIPKEY's context.

 In:  AH = 07BH

Out:  BL = maximum number of characters for a ZK_ZIP_CITY city name.

      BH = the ZIPKEY state code for the last city-name search.

      BH = 0FF if there is no previous ZK_STCITY_ZIP or
         ZK_CITY_ZIP call.

      CXDX = internal codes identifying the last city search

      This function is provided just in case somebody wishes to
      incorporate ZIPKEY into a multitasking system, in which
      more than one task might be using ZIPKEY.  The task-
      switching code must call ZK_SAVE, record BX,CX, and DX as
      part of the task state, and feed those values to ZK_RESTORE
      before restarting the task.

      ZK_SAVE can also be used to read the current setting for
      the maximum city width, returned in the BL register.
                                                             6-10

ZK_RESTORE: restores ZIPKEY's context from a previous ZK_SAVE call.

 In:  AH = 07CH

      BL = the maximum number of characters for a city name.

      BH = the ZIPKEY state code returned by a previous ZK_SAVE
         call.

      BH = 0FF if you are just setting the city width.

      CXDX = internal codes returned by a previous ZK_SAVE call.

Out:  Carry if BH,CX,DX are not codes which could have been
      returned by a previous ZK_SAVE call

      This function will be used most often to set the maximum
      city width.  It is also used in multitasking systems, as
      described under the previous function ZK_SAVE.


ZK_POPUP:   pops up a ZIPKEY window from a program.

 In:  AH = 07DH

      BL = an index number if you wish to simulate the pressing of
         a hotkey.

      BL = 0FF for immediate popup with nothing played back after
         a confirming Enter key.

Out:  ZIPKEY takes action as if the hotkey indexed by BL has been
      pressed.  This typically includes popping up a window,
      waiting for the user to type a zipcode specification, and
      playing back an indicated sequence through the BIOS
      keystrokes buffer.  The values of BL are defined by the
      listing of hotkeys available from the configuration editing
      menu: BL=0 for the first hotkey, BL=1 for the second, etc.
      If BL is not a valid index ZIPKEY pops up a window, then
      plays back nothing if a confirming Enter is given (ZIPKEY
      will play back alternate exit keys, however).  ZIPKEY does
      not return from this interrupt call until the window is
      popped away-- then it returns NoCarry.
                                                             6-11

ZK_REGION_CITY:   outputs the name of the primary city for a
                  zipcode region.

 In:  AH = 07EH

      DX = The zip region, ranging from 0 to 999.

      ES:DI points to the buffer to contain the returned city
         name.

Out:  AL = The ZIPKEY state code for the region if the region
      exists.  The name of primary city for this region is output
      to ES:DI-pointed memory.  DI is advanced beyond the output.
      AL = 0FF with the Carry flag set if the region does not
      exist.


ZK_SWITCH:   enables/disables hotkeys.

 In:  AH = 07FH

      BL = a control code:
            0 for turn off hotkeys
            1 for turn on hotkeys
            2 for no change, just return hotkey status
            3 for toggle hotkey status

Out:  The activation of hotkeys is disabled/enabled/reported.
      When a hotkey is disabled ZIPKEY ignores it, and it reverts
      to its non-ZIPKEY functionality.  AL is returned set to the
      hotkeys status: 0 for off (disabled), 1 for on (enabled).



Sample Program Code

Following are fragments of assembly-language code that call
ZIPKEY's programmatic interface.  I've tried to make them
compatible with all the major assemblers, although they are
tested only against my A86 assembler. If you do use my A86
assembler, and you reuse the local labels L3, L4, and L6
elsewhere in your program, you should insert ">" into their
forward references in the following code: JC >L3; JC >L4; JMP
>L6.

RO_NAME:
  DB 'RO',0
NOME_NAME:
  DB 'nome',0DH
                                                             6-12

; output a list of states to memory at 08000H

L0:
  MOV AH,070H       ; ZIPKEY function number ZK_VERSION
  INT 179           ; fetch the version information
  MOV CH,0          ; extend states count CL to CX
  MOV BL,0          ; load the first state code
  MOV DI,08000H     ; load the output pointer
L1:                 ; loop here to output each state name
  MOV AH,072H       ; ZIPKEY function number ZK_ST_ABBR
  INT 179           ; fetch the state abbreviation
  STOSW             ; output the abbreviation
  MOV AL,' '        ; load blank
  STOSB             ; output an intervening blank
  MOV AH,073H       ; ZIPKEY function number ZK_ST_NAME
  INT 179           ; output the full state name
  MOV AX,0A0DH      ; load CRLF
  STOSW             ; output CRLF to end this line
  INC BL            ; increment BL to the next state code
  LOOP L1           ; loop to output the next state


; output to memory the list of valid zipcodes for region 474

  MOV DX,474        ; load the region number
  MOV DI,08000H     ; load the output pointer
  MOV CH,0          ; the first zipcode has bottom digits 00
L2:                 ; loop here to output each entry
  MOV AH,075H       ; ZIPKEY function number ZK_ZIP_ST
  INT 179           ; check the validity of this zipcode
  JC L3             ; skip if this is not a valid zipcode
  MOV BL,AL         ; zipcode valid: copy state code to BL
  MOV AH,074H       ; ZIPKEY function number ZK_ZIP_DIGITS
  INT 179           ; output the zipcode digits
  MOV AL,' '        ; load blank
  STOSB             ; output an intervening blank
  CALL CITY_ST_CRLF ; output the city, state, and CRLF
L3:
  INC CH            ; increment the bottom 2 digits counter
  CMP CH,100        ; have we completed the region?
  JB L2             ; loop if not, to output the next line
                                                             6-13

; output a list of Illinois cities starting with RO

  MOV DI,08000H     ; load the output pointer
  MOV BX,'LI'       ; characters IL are reversed on the 8086
  MOV AH,071H       ; ZIPKEY function number ZK_ABBR_ST
  INT 179           ; fetch the state code for this abbreviation
  MOV BL,AL         ; copy the state code to BL
  PUSH CS           ; push our code segment
  POP DS                 ; set DS to our code segment
  MOV SI,OFFSET RO_NAME  ; point to "RO" city specification
  MOV AH,078H            ; ZIPKEY function number ZK_STCITY_ZIP
  INT 179           ; get the list of entries for this city
  JC L4             ; skip if the list was empty
  CALL OUT_ENTRIES
L4:


; output a list of Nomes in the United States

  MOV DI,08000H            ; load the output pointer
  PUSH CS                  ; push our code segment
  POP DS                   ; set DS to our code segment
  MOV SI,OFFSET NOME_NAME  ; point to "Nome" specification
  MOV BL,0                 ; first state code is zero
  JMP L6                   ; jump into loop

L5:                        ; loop here for each matching state
  PUSH AX                  ; save the state code
  CALL OUT_ENTRIES         ; output the entries for this state
  POP BX                   ; restore the state code to BL
  INC BX                   ; increment to the next state
L6:
  MOV AH,079H              ; ZIPKEY function number ZK_CITY_ZIP
  INT 179                  ; find a state with the desired city
  JNC L5                   ; loop if found, to make display


; set the maximum city width to 17

  MOV BL,17         ; load the desired city width
  MOV BH,0FFH       ; code signals that we load width only
  MOV AH,07CH       ; ZIPKEY function number ZK_RESTORE
  INT 179           ; set the city width
                                                             6-14

; save and restore ZIPKEY context

  MOV AH,07BH       ; ZIPKEY function number ZK_SAVE
  INT 179           ; fetch the ZIPKEY context
  PUSH BX           ; push the context onto our stack
  PUSH CX
  PUSH DX
; ....
  POP DX            ; pop the saved context
  POP CX
  POP BX
  MOV AH,07CH       ; ZIPKEY function number ZK_RESTORE
  INT 179           ; restore the ZIPKEY context


; popup a window as if the first hotkey were pressed

  MOV AH,07DH       ; ZIPKEY function number ZK_POPUP
  MOV BL,0          ; index for the first hotkey is zero
  INT 179           ; popup the ZIPKEY window


; insert keystrokes for zipcode 47401, as if alternate
;   exit key F1 had been pressed

  MOV DX,474        ; load the region number 474
  MOV CH,01         ; load the last two digits 01
  MOV BX,03B00      ; load the BIOS code for the F1 key
  MOV AH,077H       ; ZIPKEY function number ZK_ZIP_KEYS
  INT 179           ; insert keystrokes for 47401 entry


; toggle the activation of ZIPKEY's hotkeys

  MOV BL,3          ; control code for "toggle"
  MOV AH,07FH       ; ZIPKEY function number ZK_SWITCH
  INT 179           ; toggle the activation of hotkeys



CITY_ST_CRLF:       ; subroutine for outputting a city line
  MOV AH,076H       ; ZIPKEY function number ZK_ZIP_CITY
  INT 179           ; output the city name
  MOV AL,' '        ; load blank
  STOSB             ; output an intervening blank
  MOV AH,072H       ; ZIPKEY function number ZK_ST_ABBR
  INT 179           ; fetch the state abbreviation
  STOSW             ; output the state abbreviation
  MOV AX,0A0D       ; load CRLF
  STOSW             ; output CRLF to end this line
  RET
                                                             6-15

OUT_ENTRIES:        ; subroutine for outputting a cities-range
  MOV BL,0          ; load the first entry number
L7:                 ; loop here to output each entry
  PUSH BX           ; save the entry number during output
  PUSH DI           ; save the starting output pointer
  ADD DI,5          ; advance beyond the zipcode we will output
  MOV AX,'  '       ; load blanks
  STOSW             ; blank out the trailing range slot
  STOSW             ; slot plus trailing blank are 4 characters
  POP DI            ; restore the pointer to the line start
  MOV AH,07AH       ; ZIPKEY function number ZK_CASE_ZIP
  INT 179           ; look up this entry
  MOV BL,AL         ; copy the state code to BL
  CMP CL,CH         ; is there only one zipcode?
  JE L8             ; skip if single zipcode: slot stays blank
  PUSH DI           ; it is a range: save output pointer
  ADD DI,3          ; advance the output pointer
  MOV AH,074H       ; ZIPKEY function number ZK_ZIP_DIGITS
  INT 179           ; output the end-value zipcode digits
  POP DI            ; restore starting output pointer
  ES MOV BYTE PTR [DI+5],'-' ; place the trailing hyphen
  MOV CH,CL         ; copy the start-value to CH
L8:
  MOV AH,074H       ; ZIPKEY function number ZK_ZIP_DIGITS
  INT 179           ; output the start-value zipcode digits
  ADD DI,4          ; advance beyond the end-value slot
  CALL CITY_ST_CRLF ; output the city, state, CRLF
  POP BX            ; restore the entry number BL
  INC BL            ; increment the entry number
  CMP BL,BH         ; have we exhausted the entries?
  JB L7             ; loop if not, to output the next entry
  RET

INDEX                                                  7-1
A-specifier for playback, 3-11
Aaron, AL, 2-8
abbreviating a city name, 3-11
abbreviation, 2-letter, playback, 3-11
abbreviation, state-code to, 6-4
abbreviation-to-state code, 6-4
abbreviations in database, 2-8
abbreviations, state, finding, 2-5
aborting a search (Esc), 2-1
about the author, 1-8
AboveBoard, 3-3
address, my, 1-8
AH function number, 6-2
aligning to a city name, 3-12
Alt key in hotkeys, 3-7
Alt-backquote hotkey example, 3-15
alternate exit keys, 3-13
alternate hotkeys, 3-12
alternate window, 3-5
amendments to total price, 5-3
answering the order-form questionnaire, 5-3
ARC files, 1-7
arrow keys during configuration, 3-5
arrow keys during state/city search, 2-7
arrow keys during zipcode search, 2-4
asterisk during fixed key entry, 3-10
asterisk, literal playback, 3-11
atlas sources, 1-5
ATTRIB command, use with networks, 4-7
author, contacting, 1-8
AUTOEXEC.BAT file, 4-4
automatic ZIPKEY installation, 4-4
availability, permanent, 4-4
B-specifier for playback, 3-11
back-quote hotkey, 3-7
backing up your data, 1-4
backquote hotkey example, 3-15
backspace and escaped hotkey code, 3-8
backspace generation on playback, 3-11
Barney, GA example, 4-2
BBS distribution, 1-7
big cities, zipcodes for, 2-6
biography, 1-8
blank-padding example , 3-16
blank-padding of city name, 3-11
Borland Reflex, 3-10
Borland TSRs, 4-5
Borland, 3-5
bugs, reporting, 1-9
bulletin boards, my, 1-9
busy error code, 6-2
buying a copy of ZIPKEY, 5-1
C-specifier for playback, 3-11
calling conventions, 6-2
calling ZIPKEY from programs, 6-1
cancelling a window (Esc), 2-1
capacity of cities display, 2-5
                                                       7-2
Carry flag return status, 6-2
case sensitivity, 2-5
CBIS network, problems with, 3-3
charges for ZIPKEY, 5-1
CHECK_FOR_ZIPKEY code example, 6-2
cities display capacity, 2-5
cities listing example, 6-12
cities, guessed, 2-3
cities, large, zipcodes for, 2-6
cities, listing, 2-3
city lookup function, 6-5
city name in playback, 3-11
city name, abbreviating, 3-11
city name, longest in database, 3-11
city only search, 2-7
city width, program set, 6-9
city-line subroutine, 6-14
city-list subroutine, 6-14
city-only failed find, 2-7
city-only lookup function, 6-7
city/state/zip format, 3-10
club, beat over the head with, 5-1
color of window, 3-6
color vs. monochrome video modes, 3-6
COM vs. EXE file, 1-6
compilation copyright, 1-6
completing a zipcode, 2-6
conditions for distribution, 1-4
Condor compatibility, 3-5
configuration editing menu, 3-13
configuration, creating, 3-2
configuration, large, 4-4
configurations, re-installing, 4-3
configuring ZIPKEY, 3-1
contacting me, 1-8
contents, 0-2
context saving, 6-9
context setting example, 6-13
copyright of database, 1-5
correcting hotkeys, 4-3
correcting keyboard slowdown, 4-3
correcting your configuration, 4-2
Ctrl key in hotkeys, 3-7
current drive and directory, 4-5
cursor during next-state search, 2-7
customizing ZIPKEY, 3-1
data source, changing, 4-3
data, possible sources of, 3-3
database example, playback, 3-12
database manager example, 3-1
database, sources and copyright, 1-5
date, detecting OVL, 6-3
Dear example, 3-11
default options during configuration, 3-2
demonstration mode, 2-1
detecting ZIPKEY's version, 6-2
determining needs, 3-1
                                                       7-3
differences, evaluation vs. registered, 1-6
digits output function, 6-5
directories, sources, 1-5
disabling other resident programs, 4-5
disk storage of zipcodes, 3-3
diskettes, charge for, 5-2
disks, 3.5" vs. 5.25", 5-3
disks, number ordered, 5-3
display of hotkey name, wrong, 3-8
display of intermediate results, 3-4
distribution conditions, 1-4
distribution houses, shareware, 0-2
distribution naming conventions, 1-7
down-arrow during city search, 2-7
down-arrow during zipcode search, 2-4
East, unabbreviation, 2-8
editing menu, configuration, 3-13
electronic mail, 1-9
EMS memory, 3-3
Enter key during configuration choices, 3-2
Enter key during fixed key entry, 3-10
Enter key during playback specification, 3-12
Enter key in demonstration mode, 2-1
entries-lookup function, 6-8
error codes, program, 6-2
escaping from a window, 2-1
evaluation copy of ZIPKEY, 1-4
evaluation period, length of, 1-4
evaluation vs. registered differences, 1-6
examples, programming, 6-11
EXE vs. COM file, 1-6
existing zipcode, looking up, 3-9
exit keys, alternate, 3-13
exit keys, programmatic invoke, 6-6
expiration of evaluation, 5-1
expiration of subscription, 5-1
exploration keys, 2-4
F-specifier example , 3-16
F-specifier following city width, 3-11
F11 and F12 as hotkeys, 3-7
failed-find program error code, 6-3
fees for using ZIPKEY, 5-1
Fife, VA example, 4-2
files, how ZIPKEY finds, 4-5
finding a city only, 2-7
finding state abbreviations, 2-5
finding state/city, 2-5
finding zipcodes, 2-2
finding ZIPKEY files on your disk, 4-5
fixed field example, 3-16
fixed zipcode, 3-9
fixed-keystroke source for hotkey, 3-9
format of city/state/zip playback, 3-10
Fort, unabbreviation, 2-8
frequency of disk updates, 5-3
full name of state, playback, 3-12
full name-to-state code, 6-4
                                                       7-4
function keys during configuration, 3-6
function keys, exiting ZIPKEY with, 3-13
functions, programming, 6-3
gathering order information, 5-2
generating an order form, 5-1
global settings, definition, 3-6
graphics mode usage, 3-10
guessed cities, 2-3
Home key, 2-1
hotkey configuration, 3-6
hotkey echoing, wrong display, 3-8
hotkey enable/disable example, 6-13
hotkey name, 3-7
hotkey, definition, 1-2
hotkeys, disable/enable, 6-11
hotkeys, more than one, 3-12
how to contact me, 1-8
how to create a ZC file, 3-2
how to order, 5-1
illegal function number error code, 6-3
incompatible programs with ZIPKEY, 1-3
indented addresses, 3-12
InDOS flag, 3-3
installation, testing for, 6-1
installing files on a network, 4-7
Intel, 1-8
Intel, 3-3
interfacing your programs to ZIPKEY, 6-1
interference of other programs, 4-4
interference via interrupts, 6-1
intermediate results for zipcode, 2-2
intermediate results, city-only, 2-7
intermediate results, suppressing, 3-4
interrupt number, changing, 6-1
interrupt, ZIPKEY, 6-1
invoice, generating, 5-1
Jeffersonville example, 2-3
key playback from a program, 6-6
keyboard interference, 4-4
keyboard slowdown, 3-5
keyboards, licensing, 5-2
keystroke playback sequence, 3-10
keystrokes, determining, 3-1
King and Queen Court House, VA, 3-11
L-specifier for playback, 3-11
LAN compatibility, 3-3
large cities, zipcodes for, 2-6
large configuration, changing to, 4-4
last-keystrokes source for hotkey, 3-10
Left vs. Right keys, 3-7
legal conditions for distribution, 1-4
legal terms, 1-4
length of city name, specifying, 3-11
length of subscription, 5-3
letters, fixed playback, 3-11
liabilities, 1-4
license length, 1-4
                                                       7-5
license, how to obtain, 5-1
LIM-EMS memory, 3-3
limitations, 1-2
listing cities example, 6-12
listing cities, 2-3
listing regions, 2-2
listing states example, 6-11
listing zipcodes example, 6-12
literalizing during playback, 3-11
local zipcode option, 3-9
location of window, 3-5
longest city name in database, 3-11
looking up a city only, 2-7
looking up a zipcode, 2-1
looking up state abbreviations, 2-5
looking up state/city, 2-5
looking up zipcodes, 2-2
Lotus-Intel-Microsoft memory, 3-3
Louisville example, 2-3
lower vs. upper sensitivity, 2-5
mail, electronic, 1-9
main city of a region, 2-3
main memory for zip data, 3-4
main menu option 2, 2-1
main menu option 3, 3-2
main menu option 4, 4-1
main menu option 5, 5-1
main menu option 7, 4-3
making ZIPKEY permanently available, 4-4
manual, overview, 1-1
manuals, charge for, 5-2
materials fee, 5-2
maximum city name size, 3-11
memory model, 3-3
memory model, changing, 4-3
memory requirements, 1-3
memory-resident mode, definition, 1-2
memory-resident mode, running, 4-1
memory-resident programs, other, 4-4
memory-resident use, configuring, 3-2
Microsoft Word 4.0 problem, 1-3
Microsoft Works, 1-3
Microsoft, 3-3
might-be cities, 2-3
missing characters, correcting, 3-5
missing playback keys, 4-2
modifications, see if you made, 3-14
modifying configuration files, 3-14
money, how to send, 5-1
monochrome vs. color video modes, 3-6
more hotkey examples, 3-15
Mount, unabbreviation, 2-8
moving from state to state, 2-7
multiple configuration files, 3-14
multiple hotkeys, 3-12
multiple-zipcode cities, 2-6
multitasking programming, 6-9
                                                       7-6
N-specifier following city width, 3-11
name of hotkey, wrong display, 3-8
named configuration files, 3-14
naming conventions for distribution, 1-7
National Park abbreviation, 2-8
network compatibility, 3-3
Network-OS, problems with, 3-3
networks, optimizing for, 4-7
Nome example, 2-7
Nomes list example, 6-12
North, unabbreviation, 2-8
num 5 hotkey, 3-4
number of states, 6-3
numlock on option, 3-4
operating requirements, 1-3
order form invitation, 1-6
order form, generating, 5-1
other memory-resident programs, 4-4
overseas postage, 5-3
overview of manual, 1-1
overview of ZIPKEY, 1-1
OVL date, detecting, 6-3
OVL file, how ZIPKEY finds, 4-6
OVL too new, 1-7
padding example, 3-16
padding of a city name, 3-11
paging keys, cities search, 2-5
paging keys, zipcode search, 2-4
PAK files, 1-7
PATH command, 4-6
PATH directory, putting ZIPKEY in, 4-7
payment for ZIPKEY, 5-1
permanent installation, 4-4
PgDn/PgUp in cities search, 2-5
PgDn/PgUp keys, zipcode search, 2-4
phone numbers of bulletin boards, 1-9
playback keys, missing, 4-2
playback of keystrokes, specifying, 3-10
playback unrelated to zipcodes, 3-15
playback, programmatic invoke, 6-6
pop up window from program, 6-10
pop-up window option for hotkey, 3-8
postage, adding overseas, 5-3
presence, testing for ZIPKEY's, 6-1
price notification policy, 1-4
price, amendments to, 5-3
prices, schedule of, 5-1
primary region-city lookup, 6-10
printed manuals, charge for, 5-2
printout of configuration (ZQR), 3-14
program code, sample, 6-11
program error codes, 6-2
program key insert example, 6-13
program popup example, 6-13
program width example, 6-13
programmatic interface, 6-1
programmed popup function, 6-10
                                                       7-7
prohibitions, specific, 1-5
Prokey 2.1 incompatibility, 1-3
ProKey, 3-5
publishing database, don't, 1-6
purchase orders, qualifying for, 5-2
question mark, 2-7
questionnaire, order-form, 5-3
quick-reference document, 3-14
quitting a search (Esc), 2-1
quotes mark at signon window, 2-8
R-specifier for playback, 3-12
ranges of zipcodes, 2-6
re-installing ZIPKEY, 4-3
read-only attribute, setting, 4-7
reference guide, definition, 1-1
references for database, 1-5
Reflex, Borland, 3-10
region city, primary lookup, 6-10
regions, definition of, 2-3
regions, listing, 2-2
register-saving conventions, 6-3
registered copy of ZIPKEY, 1-4
registering, how to, 5-1
release date, 0-1
removing ZIPKEY from memory, 4-3
repeat last zipcode, 2-8
repeat zipcode, example, 3-15
repeat-zipcode hotkeys, 3-9
requirements for operation, 1-3
resident programs, disabling other, 4-5
resident programs, other, 4-4
resident vs. non-resident, changing, 5-3
restarting computer, when needed, 4-3
restore context example, 6-13
restoring context, 6-9
retreat to start of city name, 3-12
Right vs. Left keys, 3-7
Robinson, IL example, 2-5
running memory-resident ZIPKEY, 4-1
S-specifier for playback, 3-12
Saint(e), unabbreviation, 2-8
sales tax, adding, 5-3
sample program code, 6-11
samples for keystrokes, 3-1
save/restore context example, 6-13
schedule of prices, 5-1
screen distractions, 3-4
screen, zipcode from, 3-9
search: city to state/zip, 2-7
search: state/city to zip, 2-5
search: zip to city, 2-2
send money, how to, 5-1
SET PATH command, 4-6
shareware, nature of, 0-2
Shift keys in hotkeys, 3-7
shredded wheat example, 2-7
Sidekick and uninstall, 4-3
                                                       7-8
Sidekick must be after ZIPKEY, 4-5
Sidekick, 3-7
signature, ZIPKEY's, 6-1
signon window, 2-1
signon window, quotes mark, 2-8
signon window, returning to, 2-1
six-months prohibition, 1-7
Sizzleware, 1-5
slow down keyboard, 3-5
SmartKey, 3-5
sources of database, 1-5
sources of ZIPKEY's data, 3-3
South, unabbreviation, 2-8
speed of zipcode lookup, 3-4
state abbreviations, finding, 2-5
state code, abbreviation-to-, 6-4
state code-to-abbreviation, 6-4
state code-to-full name, 6-4
state lookup function, 6-5
state name playback, 3-12
state-and-city search, 2-5
states listing example, 6-11
states, getting total number, 6-3
streets, lack of, 1-2
subroutines, 6-14
subscribe, how to, 5-1
Superkey must be before ZIPKEY, 4-5
surcharge for purchase orders, 5-2
SysReq hotkey, 3-7
system requirements, 1-3
table of contents, 0-2
tax, adding, 5-3
telephone directories, 1-5
telephone numbers, bulletin board, 1-9
testing for ZIPKEY installation, 6-1
toggle hotkey-enable, 6-11
toggle hotkeys example, 6-13
too many cities display, 2-5
total price, amendments to, 5-3
trouble: computer freezes up, 4-4
trouble: interrupt interference, 6-1
trouble: many playback keys missed, 4-2
trouble: playback in wrong fields, 4-2
trouble: window doesn't pop up, 4-4
TSRs (memory resident programs), 4-4
Turbo Pascal, 3-5
tutorial, definition, 1-1
two-letter state abbreviation, playback, 3-11
typeahead in Word 4.0, 1-3
U. S. Census, 1-5
unabbreviation, 2-8
undefined zipcodes within ranges, 2-6
uninstalling ZIPKEY, 4-3
unpacked database, licensing, 5-2
unpacking the database, 1-6
up-arrow during city search, 2-7
up-arrow during zipcode search, 2-4
                                                       7-9
updates, frequency of, 5-3
upper vs. lower sensitivity, 2-5
Ventura Desktop Publisher, 3-10
version function, 6-3
version number, "e" vs. "r", 1-6
version, detecting via program, 6-2
video modes: color vs. monochrome, 3-6
video screen, zipcode from, 3-9
West, unabbreviation, 2-8
Wettstein, Greg, 1-9
what ZIPKEY doesn't do, 1-2
width of city name, specifying, 3-11
window characteristics, 3-5
window prompts, 2-2
Worcester, MA example, 2-6
Word 4.0 typeahead, 1-3
word processor example, 3-2
Wordstar compatibility, 3-5
Works, Microsoft, 1-3
wrong display of hotkey name, 3-8
x's to complete a zipcode, 2-6
Z and C hotkey, 3-8
Z-specifier for playback, 3-11
ZC file, how to create, 3-2
ZC file, large, 4-4
ZC files, how ZIPKEY finds, 4-6
zero zipcode output, 2-8
ZIP files, 1-7
zip-to-city search, 2-2
zipcode from screen, 3-9
zipcode from screen, example, 3-15
zipcode listing example, 6-12
zipcode lookup function, 6-6
zipcode lookup, city-only, 6-7
zipcode playback, 3-11
zipcode source for a hotkey, 3-8
zipcode-to-city function, 6-5
zipcode-to-state function, 6-5
ZIPKEY 2 command, 2-1
ZIPKEY 3 command, 3-2
ZIPKEY 4 command, 4-1
ZIPKEY 5 command, 5-1
ZIPKEY 7 command, 4-3
ZIPKEY and other resident programs, 4-4
ZIPKEY calling conventions, 6-2
ZIPKEY configuration, 3-1
ZIPKEY functions, 6-3
ZIPKEY in computer's memory, 3-3
ZIPKEY interrupt, 6-1
ZIPKEY.COM vs. ZIPKEY.EXE, 1-6
ZK_ABBR_ST function, 6-4
ZK_CASE_ZIP function, 6-8
ZK_CITY_ZIP function, 6-7
ZK_POPUP function, 6-10
ZK_REGION_CITY function, 6-10
ZK_RESTORE function, 6-9
ZK_SAVE function, 6-9
                                                       7-10
ZK_STCITY_ZIP function, 6-6
ZK_ST_ABBR function, 6-4
ZK_ST_NAME function, 6-4
ZK_SWITCH function, 6-11
ZK_VERSION function, 6-3
ZK_ZIP_CITY function, 6-5
ZK_ZIP_DIGITS function, 6-5
ZK_ZIP_KEYS function, 6-6
ZK_ZIP_ST function, 6-5
ZOO files, 1-7
ZQR file, 3-14
ZQR file, name of, 3-14

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1767

     Volume in drive A has no label
     Directory of A:\

    FILE1767 TXT      2517   3-23-90   1:08p
    GO       BAT       140   2-22-90   1:42p
    READ     ME       3964   1-19-90  10:25a
    Z10      EXE     31900   3-30-89   2:52p
    ZIPKEY   DOC    164219   1-19-90  10:28a
    ZIPKEY   EXE     33100   1-19-90   9:39a
    ZIPKEY   OVL    122038   9-01-89   4:40p
            7 file(s)     357878 bytes
                               0 bytes free
