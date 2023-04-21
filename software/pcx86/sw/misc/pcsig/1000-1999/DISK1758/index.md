---
layout: page
title: "PC-SIG Diskette Library (Disk #1758)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1758/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1758"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "POSTNET"

    Save money at the post office by taking advantage of "bar code bulk
    rates."  POSTNET will allow you to add bar codes to labels or envelopes
    so you can qualify for lower postage rates.  Any database or other label
    program you might currently be using can feed addresses to POSTNET in an
    ASCII file.  As long as your addresses are three lines long and all have
    the zip code on the third line POSTNET can automatically print your
    labels on one-up label stock.
    
    POSTNET is your first step to getting the most out of your postage
    dollar.  Your Postal Office bulk mailing representative can show you how
    to do the presort, and how to convert your old five digit zip codes to
    the +4 format.  This program supports most dot matrix printers
    including 24-pin printers and the Okidata 192.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1758.TXT

{% raw %}
```
Disk No: 1758                                                           
Disk Title: PostNet                                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: PostNet                                                  
Author Registration: $25.00                                             
Special Requirements: Graphics Dot Motrx Printer (or Emulator)          
                                                                        
Save money at the post office by taking advantage of ``bar code bulk    
rates.'' POSTNET will allow you to add bar codes to labels or envelope  
so you can qualify for lower postage rates.  Any database or other label
program you might currently be using can feed addresses to POSTNET in an
ASCII file.  As long as your addresses are three lines long and all have
the zip code on the third line POSTNET can automatically print your     
labels on one-up label stock.                                           
                                                                        
POSTNET is your first step to getting the most out of your postage      
dollar.  Your Postal Office bulk mailing representative can show you how
to do the presort and even how to convert your old five digit zip codes 
to the +4 format.  This program supports most dot matrix printers       
including 24-pin printers and the Okidata 192.                          
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## POSTNET.DOC

{% raw %}
```
                         POSTNET ADDRESSING PROGRAM 
                                 USER MANUAL

                                Version 1.0

                                     by

                               NELSON HOCHBERG
                           NELDON ENTERPRISES INC.
                                 P O BOX 192
                          FLAGSTAFF AZ  86002-0192

                          Wednesday, June 21, 1989


This is a user-supported product.  It is not public domain and it is not 
free.  You are granted a limited license to use this product on a trial 
basis.  If you wish to continue using the product after evaluating it, 
please register.  Send $25.00 to the address below.  (Using the postnet 
barcode on your bulk mailing would save you $25.00 on 5000 pieces.  All the 
tips in this manual could save you $25.00 on a 555 piece mailing.)  The 
POSTNET.COM program will print a registration form (by pressing 'R' at the 
opening screen).  You may make copies of this software for your friends or 
computer club, etc. if you copy all the files on the disk and put 
"POSTNET.COM (c) 1989 Nelson Hochberg" on the disk label.  You may not 
resell the software for your own profit. 


BENEFITS OF REGISTRATION:   

Your $25.00 registration will get you:  1) technical support; 2) one free 
driver for custom output and other printers; 3) one free update; 4) free 
correction disks within an update (you pay for the disk and postage); 5) if 
you're a registered user, we will convert your disk to POSTNET input file 
format for $15 per disk; 6) a warm, honest feeling; 7) protection from 
copyright infringement suits (may happen); 7) a company continuing to 
support the product.  If enough people register, we will release updates 
with improvements (see Chapter 11 Planned Future Improvements.) If not 
enough people register, then the POSTNET.COM program you now have is it -- 
no future improvements will be available. 


THIS SOFTWARE AND ACCOMPANYING WRITTEN MATERIALS, INCLUDING INSTRUCTIONS FOR 
USE, ARE PROVIDED "AS IS" WITHOUT WARRANTY AS TO THEIR PERFORMANCE, 
MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE.  THE ENTIRE RISK AS 
TO THE RESULTS AND PERFORMANCE OF THE SOFTWARE IS ASSUMED BY YOU. 

If you purchased the software directly from Neldon Enterprises Inc., we will 
replace a defective diskette without charge for 90 days after you purchase 
it. 

IN NO EVENT SHALL NELSON HOCHBERG, NELDON ENTERPRISES INC. OR ANYONE ELSE 
WHO HAS BEEN INVOLVED IN THE CREATION, PRODUCTION OR DELIVERY OF THIS 
SOFTWARE BE LIABLE FOR ANY DIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES 
(INCLUDING DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS 
OF BUSINESS INFORMATION, AND THE LIKE) ARISING OUT OF THE USE OR INABILITY 
TO USE THE PRODUCT, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH 
DAMAGES. 



                                    CONTENTS

Chapter  1. Program Description and System Requirements . . . . . page 3

Chapter  2. Selecting a Printer Driver. . . . . . . . . . . . . . page 3

Chapter  3. Input File Format . . . . . . . . . . . . . . . . . . page 3

Chapter  4. Command Line Input. . . . . . . . . . . . . . . . . . page 3

Chapter  5. Main Screen Selections. . . . . . . . . . . . . . . . page 4

Chapter  6. Error/Pause Screen Selections . . . . . . . . . . . . page 4

Chapter  7. Entering Addresses Directly from Keyboard . . . . . . page 5

Chapter  8. Modifying/Writing a Printer Driver. . . . . . . . . . page 5

Chapter  9. Locating the Postnet Bar Code on the Mailer . . . . . page 6

Chapter 10. Other Bulk Mailing Tips . . . . . . . . . . . . . . . page 7

Chapter 11. Planned Future Improvements . . . . . . . . . . . . . page 7

Chapter 12. A Final Word about Shareware and NEInc. . . . . . . . page 8



POSTNET.DOC                                                         page 3

CHAPTER 1  Program Description

The POSTNET program reads a file of addresses, prints it on a dot matrix 
printer (or a lasar printer that will emulate a dot matrix printer) in any
format and adds the U.S. Postal Office postnet bar code.  

System Requirements

POSTNET-EXE requires 64K of memory, at least one disk drive, and a dot matrix 
printer capable of graphics.  


CHAPTER 2  Selecting a Printer Driver

There are several printer drivers on the disk.  If you have an Epson, IBM or 
compatible printer, the first one to try would be the generic driver.  
GENERIC.LBL will print 3 1/2 " by 1" labels and GENERIC.ENV will print 
standard business size envelopes.  OKI192.LBL and OKI192.ENV are for an 
Okidata 192 and compatible printers.  If you have a 24 pin printer, try the 
LQ1500 drivers for greater speed.  They redefine characters for the zip code 
as opposed to using the graphics mode.  The printer driver you will be using 
most should be renamed to POSTNET.DRV (see Chapter 4  Command Line Input).


CHAPTER 3  Input File Format

The input file should be an ASCII format file as shown:

                        SOMEONE'S NAME
                        1234 SOMEPLACE ST
                        SOMEWHERE ST  12345-6789

Each address is three lines long with a carriage return/line feed pair at 
the end of each line. The third line should have a ZIP Code in it.  If 
POSTNET.COM finds an address without a ZIP Code on the third line, it will 
stop on that line and display the three lines (see Chapter 6).  You then 
have the option of printing that line without the ZIP Code.  Each line can be 
a maximum of 32 characters long. 


CHAPTER 4  Command Line Input

The proper command line input is:

        postnet  d:\path\filename  [d:\path\drivername]

The file name is required.  The printer driver name is optional.  If the 
drive and path is not specified, the default drive and path will be used.  
If a printer driver is not specified, the default printer driver 
"POSTNET.DRV" will be used, so if there is a printer driver you will be 
using often, name it POSTNET.DRV to save key strokes. 



POSTNET.DOC                                                         page 4

CHAPTER 5  Main Screen Selections

Selections on the Main screen are: 'Q' for Quit, 'T' for Test, 'R' for 
Registration Form and 'P' to Print.  'Q' will quit POSTNET and return you to 
DOS.  'T' prints out a test pattern, one label or one envelope to check for 
the printer alignment.  You can push 'T' as often as you like until you get 
the labels lined up.  After pushing 'R', POSTNET will ask you to get the 
printer ready to print and then to press a key.  The printer will print out a 
registration form for you to fill out and mail in. When you push 'P', 
POSTNET will ask you to get the printer ready to print and then to press a 
key.  POSTNET will then read the input file and print.  If POSTNET finds an 
error in the input file, it will display the error and give you several 
options to handle it (see Chapter 6).  You can pause printing the input file 
by pressing 'P'.  POSTNET will then stop at the beginning of the next label 
and display that label on the screen.  Your printer may not stop immediately 
if it or your computer has a printer buffer. 


CHAPTER 6  Error Pause Screen Selections

Either when POSTNET finds an error in the input file, or when you push 'P' for 
Pause while POSTNET is printing the input file, the Error/Pause screen comes 
up.  The Error/Pause screen displays the reason POSTNET stopped on the top 
line, the record POSTNET stopped at on the next three lines and offers 
several options for action on the last line.  The reasons POSTNET stopped 
and their explanations are: 

"Printing stopped.  Next record to process:"
    You pressed 'P' to Pause.  
"Cannot find zip on third line:"
    No ZIP Code was found on the third line.  The address may not have a 
    recognizable zip code or the input file may have a missing or extra line 
    in it. 
"Incomplete record at end of file:"
    The input file probably has a missing or extra line in it. 

Your action options are to press 'Q' for Quit, 'U' for Up, 'D' for Down, 'C' 
for Continue and 'P' for Print this record.  'Q' will quit POSTNET and 
return you to DOS.  'U' will move POSTNET up one line (toward the beginning) 
in the input file.  'D' will move POSTNET down one line (toward the end) in 
the input file.  'U' and 'D' are used to realign the input file around an 
incomplete record or to skip or reprint a record. 'C' will continue printing 
starting with the record showing on the screen and continuing until the file 
is printed, or until you press 'P' or an error is found. 'P' will print just 
the record that is shown on the screen and then stop. 'P' will print the 
record even if it does not have a ZIP Code. 



POSTNET.DOC                                                         page 5

CHAPTER 7  Entering Addresses Directly from the Keyboard  

You can enter addresses into POSTNET directly from the keyboard by entering 
"postnet con [d:\path\drivername]" as the command line.  In this case the 
input file is the keyboard--"con" (for console).  When you press P for 
print, POSTNET will ask you to get the printer ready to print and then to 
press a key.  After you press a key, nothing will seem to happen.  POSTNET 
is simply waiting for input.  What you type will be shown on the bottom line 
of the screen and you can edit that line with the backspace key.  When you 
press return, the line you just entered can no longer be edited.  Enter a 
three line address with the ZIP Code on the third line in the same format 
that your input file would have.  No printing will take place until after 
you have entered the third line.  You may enter as many three line addresses 
as you like.  When you are done entering addresses, enter a ^Z (press z 
while holding down the control key) on a line by itself and press 'enter'.  
POSTNET will then quit normally.  The ^Z is the end of file character. 



CHAPTER 8  Modifying/writing a printer driver
                    
NEInc. will create a printer driver for you as part of your registration.  
If you wish us to do that, send a copy of your printer manual to us with the 
registration form.  If you would like to create or modify a printer driver 
yourself this is how:

A printer driver is an ASCII file and can be modified or created with a text 
editor or a word processor using ASCII format.  A printer driver is composed 
of eight lines.  The purpose of the lines is as follows:

     Line 1:  Printer initiation codes
     Line 2:  Codes to be sent to the printer before the name line
     Line 3:  Codes to be sent to the printer before the address line
     Line 4:  Codes to be sent to the printer before the city, state, zip line
     Line 5:  Codes to be sent to the printer before the postnet code
     Line 6:  Codes to be sent to the printer before the next label
     Line 7:  Printer codes to create the postnet one code
     Line 8:  Printer codes to create the postnet zero code


POSTNET.DOC                                                         page 6

Each line is composed of numbers separated by commas.  The number is the 
decimal ASCII value of a character to be sent to the printer.  For example, 
27,69 will send the characters ESC and E to the printer to turn on 
emphasized type for an Epson printer.  Do not place a comma after the last 
number on a line.  At the end of each line, you may place a comment within 
parenthesis.  Anything after the open parenthesis is ignored.  The maximum 
length of a line (including the comment) is 200 characters.  Each line 
should have a carriage return/line feed at the end.  Here are the characters 
for the decimal ASCII values to 127:  (1 - 31 are called control codes, 32 
is the space character.) 

     0: NUL   16: DLE   32: " "  48: 0   64: @   80: P    96: `   112: p
     1: SOH   17: DC1   33: !    49: 1   65: A   81: Q    97: a   113: q
     2: STX   18: DC2   34: "    50: 2   66: B   82: R    98: b   114: r
     3: ETX   19: DC3   35: #    51: 3   67: C   83: S    99: c   115: s
     4: EOT   20: DC4   36: $    52: 4   68: D   84: T   100: d   116: t
     5: ENQ   21: NAK   37: %    53: 5   69: E   85: U   101: e   117: u
     6: ACK   22: SYN   38: &    54: 6   70: F   86: V   102: f   118: v
     7: BEL   23: ETB   39: '    55: 7   71: G   87: W   103: g   119: w
     8: BS    24: CAN   40: (    56: 8   72: H   88: X   104: h   120: x
     9: HT    25: EM    41: )    57: 9   73: I   89: Y   105: i   121: y
    10: LF    26: SUB   42: *    58: :   74: J   90: Z   106: j   122: z
    11: VT    27: ESC   43: +    59: ;   75: K   91: [   107: k   123: {
    12: FF    28: FS    44: ,    60: <   76: L   92: \   108: l   124: |
    13: CR    29: GS    45: -    61: =   77: M   93: ]   109: m   125: }
    14: SO    30: RS    46: .    62: >   78: N   94: ^   110: n   126: ~
    15: SI    31: US    47: /    63: ?   79: O   95: _   111: o   127: DEL
                
The specifications for the postnet bar code is in "A Guide to Business Mail 
Preparation" available from the U.S. Postal Office.  Here is an abbreviated 
specification list for the bar code: 

        Bar width                             0.020 +/- 0.005"
        Bar spacing (center to center)        0.045" min - 0.050" max
           Pitch                              21 +/- 1 bars per inch
        One code bar height (tall bar)        0.125 +/- 0.010"
        Zero code bar height (short bar)      0.050 +/- 0.010"


CHAPTER 9  Locating the Postnet Bar Code on the Mailer
                
The ".LBL" printer driver will place the bar code in the correct position on a 
3-1/2" X 1" label.  The ".ENV" printer driver will place the bar code in the 
correct position on a 9-1/2 X 4-1/8 standard business envelope. The location 
of the bar code on the mailer is specified in "A Guide to Business Mail 
Preparation".  The postnet bar code should be in the lower right hand corner 
of the mailer.  The lower left hand corner of the bar code should be 3-7/8" 
to 3-1/4" to the left of the right edge of the mailer. The bottom of the bar 
code should be between 3/16" and 5/16" of an inch from the bottom edge of 
the mailer. Figure 11 on page 38 of "A Guide to Business Mail Preparation" 
will show you where bar code is supposed to go.  If you will be using labels 
on a pre-printed mailer, have a thin, faint line printed on your mailer at 
the proper location.  Place your labels so that the bar code lines up with 
that line. 



POSTNET.DOC                                                         page 7

CHAPTER 10. Other Bulk Mailing Tips

To get the bar code bulk rate, the mail must meet the 5 digit presort rate 
requirements and have ZIP + 4 ZIP Codes.  Explanation on how to prepare 
mail for the 5 digit presort rate is in "Third-Class Mail Preparation" 
available from the Postal Office. Your Postal Office bulk mailing 
representative can show you how to do the presort.  He or she may also have 
periodic classes on the subject.  

If you do not have ZIP + 4 on your addresses, the Postal Office has a free 
service to provide it.  You give the Postal Office A COPY (not your 
original) of your mailing database on floppy disk(s); they will return it 
with the +4 extension added.  The service has two additional benefits:  the 
returned database will be modified to fit the Postal Office recommended 
format (all capitals, no punctuation and standard abbreviations) and any 
problem addresses will be identified.  Your database must be in a fixed 
length format and a special form must be filled out specifying the field 
lengths and turned in with the disk(s).  It is best to have an extra 4 
spaces (or 5 if you want the '-' in the zip + 4 code) added to your database 
behind the 5 digit zip code.  Most of the larger post offices have a 
computer specialist that can help you.  If you are registered with us, we 
will also give you some help.  You can also send your database to us.  We 
will add the necessary space, figure out the field lengths, fill out the 
form, do the necessary communication with the Postal Office, check the 
modified disk and return the modified disk to you.  We charge $25.00 per 
disk for this service to registered owners of POSTNET.  

If your database is on magnetic tape, you must use a third party vendor to 
get the +4 added.  Your Post Office representative can give you a list of 
the approved third party vendors in your area.  If your mailing list is 
large enough, these third party vendors can sort the list for carrier 
presort.  This could save you additional money in your mailing.  


CHAPTER 11. Planned Future Improvements

NEInc. is planning the following future improvements to POSTNET (if enough 
people register):

1) The ability to print labels 2,3 and 4 up and output to laser printers.
2) A memory resident version that will:
   a) grab an address from the screen and print it with the postnet code.
   b) grab data being sent to the printer and add the postnet code, 
      eliminating the need to create another file.
3) A complete mailing database manager that will be able to import data, 
   sort it for 5 digit presort, automatically fill out the mailing manifest 
   for the Postal Office, automatically fill out the form for the zip + 4 
   service provided by the Postal Office and print out the postnet bar 
   codes.
4) We will also offer bulk mailing products (label affixers, labels, etc.) 
   if the interest is there.



POSTNET.DOC                                                         page 8

CHAPTER 12. A final word about Shareware and NEInc.

POSTNET.COM is the first software product released by NEInc.  We have 
decided to release it through the Shareware network as a test because we 
believe in the concept.  Shareware marketing can provide you, the buyer with 
a quality product for considerably less.  This is because commercial 
marketing is very expensive.  If we marketed POSTNET conventionally, we 
would have to sell the same product for three to four times more to pay for 
advertising.  For us, Shareware reduces the risk as our up front marketing 
costs are significantly lower. 

NEInc. has been developing a major software product for the past 2-1/2 
years, a full featured double entry accounting package that is as easy to 
use as writing a check.  We hope to release the first version by the end of 
1989.  If Shareware marketing of POSTNET is successful, we shall market the 
accounting package through Shareware.

It is up to you.  Remember, using this software without registering is not 
only illegal, it is dishonest.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1758

     Volume in drive A has no label
     Directory of A:\

    FILE1758 TXT      2073  12-19-89   1:01p
    GENERIC  ENV       295   6-15-89   9:54a
    GENERIC  LBL       262   6-15-89   9:52a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-01-80   4:57a
    LQ1500   ENV       392   6-15-89  10:25a
    LQ1500   LBL       356   6-06-89   5:38a
    OKI192   ENV       270   6-07-89   6:07a
    OKI192   LBL       293   6-06-89  10:12p
    POSTNET  COM     15184   8-22-89  11:18a
    POSTNET  DOC     18941   8-22-89  11:16a
           11 file(s)      38644 bytes
                          118784 bytes free
