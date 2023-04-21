---
layout: page
title: "PC-SIG Diskette Library (Disk #1620)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1620/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1620"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "REALQUIK"

    REALQUIK is a "property management" program that will allow you to form
    a real estate database for all of your listings.  Entries in the
    database may be recalled rapidly based on the format of the Multiple
    Listing Service books.  For example, if you want to recall all
    houses in the 80 to 100,000 dollar range, or all houses with pools,
    only a few keystrokes and a couple of seconds later and you will
    have your data.  REALQUIK allows for complete market analysis of
    properties and allows you to make your own listing screen to suit your
    needs.
    
    REALQUIK performs numerous functions: listing management, recall homes/
    properties based on price/area/street or any number of search
    parameters, market analysis, agent sales analysis, buyer qualification,
    produce amortization schedules, produce mortgage comparison tables,
    calculate balloon payments, calculate commissions/fees/company dollars,
    and many more.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1620.TXT

{% raw %}
```
Disk No: 1620
Disk Title: RealQuik
PC-SIG Version: S1

Program Title: RealQuik
Author Version: 1.0
Author Registration: $49.00
Special Requirements: None.

RealQuik is a property management program that will allow you to form a
real estate data base for all of you listings.  Entries in the data base
may be recalled rapidly based on the format of the Multiple Listing
Service books.  For example, if you want to recall all houses in the
80 to 100,000 dollar range, or all houses with pools, only a few key-
strokes and a couple of seconds later and you will have your data.
RealQuik allows for complete market analysis of properties and allows
you to make your own listing screen to suit your needs.

RealQuik performs numerous functions; listing management, recall homes/
properties based on price/area/street or any number of search parameters
market analysis, agent sales analysis, buyer qualification, produce
amortization schedules, produce morgage comparison tables, calculate
balloon payments, calculate commissions/fees/company dollars, and many
more.

File Descriptions:

REALTY    EXE Main program.
REAL      MSK Data file.
READTHIS  DOC Documentation file.
CONFIG    DTA Configuration data file.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.
```
{% endraw %}

## READTHIS.DOC

{% raw %}
```
IMPORTANT NOTE:

******************  IMPORTANT  --  READ THIS FIRST **********************
The latest version of RealQuik is 3.12.  This version is NOT compatible
with earlier releases.  Attempts to run version 3.12 on database listings
produced by earlier versions will have unpredicable results.

If you are a first time user you will have no problems, enjoy.

If you are using a previous shareware version of RealQuik and you
wish to maintain your old database, please register your copy with us
and note that you have files produced by a previous version.  We will
supply you an upgrade program which will convert your files to a format
compatible with this and all future releases.  We are sorry for any
inconvenience this may cause to our unregistered users however some of
the changes are significant and were required for future planned releases.

********** READ THE ABOVE MESSAGE BEFORE RUNNING YOUR PROGRAM *************


Thank you for taking the time to run this real estate managment
software.  This package will allow you to:

      - Perform listing managment
      - Recall homes/properties based on price,area,street or
        any number of search parameters.
      - Perform market analysis
      - Perform agent sales analysis
      - Perform buyer qualification much the same way as a
        lending institution.
      - Produce amortization schedules given any three of principal
        interest, term, or payments.
      - Produce mortgage comparison tables.
      - Calculate balloon payments
      - Produce professional looking reports for your clients.
      - Show the merits of owner financing.
      - Calculates commissions, fees and company dollars.
      - And much more.


Below are a collection of user notes for running our real estate
software package. This is not intended to be an operating manual.
To receive an operating manual you must first become a registered
user of this package.  Registering your software with us has the
following advantages, you will receive:

       1. Complete phone support.
       2. Complete operations manual.
       3. A copy of the latest software version.
           (This copy will not include the introductory message
            asking you to become a user.  You also will receive
            the latest version, which may have additional functions
            and bug fixes over this shareware version. We have no
            control over the amount of time the shareware version
            has been in the public domain, so this may be an older
            copy )
       4. A special program which will allow you to design your
          own MLS screen in place of ours.
       5. A special utility program which allows you to produce a
          printout of all listings on file.
       6. Copies of other utility packages (shareware versions)
          which may be of use to you.  These are both real estate and
          general purpose software and currently include a memory
          resident amortization package and a typewriter emulator
          package.




To run your system you will need at least 256k of RAM with DOS
version 2.0 or higher. A hard disk, color monitor and printer
are recommended but not mandatory.  (If you dont have a hard disk
the number of listings you may store will be limited to your disk
capacity divided by 1200).


To run the package, simply type REALESTATE at the dos prompt.


Additional files which must reside on the same drive/path are:
  CONFIG.DTA -- Contains special configuration data which you
                control

  REAL.MSK ---- Contains the screen mask for the listing management
                section.

  REAL.DAT
  REAL.IN1
  REAL.IN2 ---- These are the database files for listing management
                market analysis and agent performance. They will
                be created by the program when it is loaded the first
                time. You may want to back up all three files regularly
                as they contain all your listing information.
                ALWAYS restore ALL THREE files if one of the files
                should become erased or damaged.




********************** Additional User Notes *********************


Dear User:

     The only thing you should be aware of that has not reached the
latest manual is that your printer should be set for six lines to
the inch. This is only required if you intend to print reports.
If your not sure what print setting you have, try running off a
ten year amortization table. If your printer is set at other
than six lines per inch, you may find that the paper does not
line up correctly.

Also, we have discovered on some systems that the use of the
'print screen' key will work ok the first time,but then cause
strange printer problems. If this happens, turn the printer off
and then back on again to correct the fault. This is a function of
DOS and not your software package.


***

IMPORTANT, limited help information is provided on screen, look at
the bottom line, you will see a limited list of available commands
for each function. You may use the arrow keys and the backspace
and delete keys to perform editing functions.  If you are familiar
with the WordStar * editing keys, these may also be used. (* WordStar
is a registered trademark of MicroPro International).
We relize that this is a complex piece of software
which may be difficult to learn without a manual.  WE WILL give you
limited phone support even if you are not a registered user.
Please call 617-464-5474 for specific questions.
(IMPORTANT  after July 15, 1988 the phone company is changing our
 area code to 508, please dial 508-464-5474 after that date ).
****

The Princeton Realestate System (TM) has now been released.
This version of software will allow you to form a realestate data
base for all your listings. Entries in the data base may be recalled
rapidly based on the format of the MLS books. For example, if you
want to recall all houses in the 80 to 100,000 dollar range, or
all houses with pools, only a few keystrokes and a couple of seconds
later and you will have your data. This new software also allows for
complete market analysis of properties and allows you to make your
own listing screen to suit your needs.  As an example of how to recall
listings, you must first enter your listings using the ADD function
in the Listing Services Selection menu. Be sure to enter cities, streets
etc. in the same manner each time (i.e. for Boston, always enter it as
"Boston" or "BOS" or "Bstn", it doesn't matter how, just be consistent)
After you have made your entries lets say a client comes in and is
looking for property in Salem, simply call up the search function and
use the arrow keys to move to the "CITY" field in the MLS screen.
Enter the word "Salem" (upper and lower case never matters, feel free
to intermix  them ) and push the `End` key. The software will now search
and display all Salem entries.  For another example, lets say a client
wants a house in the 150,000 to 200,000 dollar range. Call up the
search screen again, move to the PRICE field with the arrow keys and
enter "150,000-200,000". The system will now display all houses
on file within this range.  You may add as many search parameters as
you wish before you push the 'End' key to begin the search. For example
you could enter "Salem" for city, "150,000-200,000" for price and
specify a fireplace and inground pool. The system will then recall only
those properties meeting the search criteria.

****

For MARKET ANALYSIS and AGENT PERFORMANCE ANALYSIS, find the entry
using the search critera above under the ADD or EDIT selections and
when the MLS screen appears, push function key F1. You will see a
window appear over the property screen giving you the options of
adding additional information. Fill in the desired information on
selling price, agents name, agent commissions, etc. You may then
search for agents, locations, prices, etc. the same way as you did
above.

****



Version 3.0 was released in January of 1986 to include the
section entitled "Financial Analysis". This is essentially a
buyer qualification package to determine how much money may be
financed based on PITI. (PITI stands for principal, interest
taxes and insurance. It is the figure used by lending institutions
to arrive at an acceptance figure for a loan).

Select entry -3- from the main menu to run this section. You
should answer each question with a number entry. The arrow keys
will move you around from entry to entry. The return key may
also be used to move down as an alternative. If you wish to enter
a zero for any entry, simply push the return key. As you move
down the screen entering numbers, the computer will calculate
figures leading up to the PITI amount. After the PITI is calculated
(NOTE: If you have a color screen, your entries will be in blue while
the computer calculated entries will be in yellow.) a ratio value
will be calculated for both PITI/income and PITI + installment debts/income.
These ratios are the primary factors used by banks to qualify you
for a loan. For the individual home buyer, the first ratio (PITI/income)
should be typically 25% or less. If you have a large down payment
this number could go higher. If you use the 25% figure as a maximum,
you will most likely be approved if all the other pertinent information
on your loan application is OK. (i.e. Credit ratings, consideration
for ALL installment debts, etc.,etc.,etc.)

After all the values have been entered, you may then "play" by
experimenting with different entries. (Every time you change an
entry after the initial screen is filled, all the numbers will
be automatically recalculated). A good example of this may be
that the ratio figure initially may be high, say 26%, possibly
blocking you from approval. You may find however that you can
lower an installment debt by paying it off with your some of
your downpayment money. Assuming you still have enough money
left for the banks minimum down payment and closing costs, you
may find that the ratio will now have dropped to a lower value.
Since you are using a lower down payment, you will find that
your monthly payments will increase somewhat, but you may
at this point be approved, where before you could not be.

When you are all done and want to return to the main menu, push
the 'End' key located on the right side of the keyboard. You
may push this key at anytime, even if you haven't finished
all your data entry.

IMPORTANT NOTE:
The figures produced are only a GENERAL GUIDE as to how large a
loan you may be approved for. Banks typically may take into account
other factors and may even consider some things as liabilities
which you may consider assets. The program will however give you
a good idea as to what you may afford, or will be allowed to
finance.


******
Version 3.02 was released on 3-18-88. This version corrects a small bug
which would show 'sold' houses under the search mode.  In this version,
the operator should call up the market data screen under EDIT or ADD and
change the 'Sale Status' to 'Sold' when a listing is sold.  Once done,
sold listings will not appear under the SEARCH mode unless the operator
specifically enters the word 'sold' in the market analysis screen (function
F1).  The operator may still search for all listings (sold or otherwise)
by entering a blank screen under the EDIT mode.


******

Version 3.12 supplies updates to the SCREEN program (registered users
only), used for customizing the MLS screen. Additional changes provide
hooks for future releases of network versions.


******

We always welcome your comments, both good and bad. Please let
us know how feel about your software by writing us at:


Princeton Economics, Inc.
P.O. Box 400
Princeton, MA. 01517
(508 see note below)  617-464-5474

Please send a check or money order for $49.00 to register your version
of RealQuik.

(IMPORTANT  after July 15, 1988 the phone company is changing our
 area code to 508, please dial 508-464-5474 after that date ).




```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1620

     Volume in drive A has no label
     Directory of A:\

    FILE1620 TXT      1346  10-12-89  11:27a
    GO       BAT        38  10-12-89  10:22a
    GO       TXT       540  10-12-89  11:18a
    READTHIS DOC     12281  10-19-88   2:50p
    REAL     MSK      1782  11-26-85   8:47p
    REALTY   EXE    122368  10-15-88  11:57a
            6 file(s)     138355 bytes
                           20480 bytes free
