---
layout: page
title: "PC-SIG Diskette Library (Disk #988)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0988/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0988"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MESSAGE MASTER AND ADDRESS BOOK"

    Provide a message center in your computer.  Several users of the same
    computer can leave messages and notes to each other.
    
    Type, read, and delete messages of up to 1,000 characters using the
    Send and Read routines.  MAIL lists the names of the people who have
    messages waiting for them and can be set up to be executed when the
    computer is first turned on.  Although MESSAGE MASTER has limited text
    editing capabilities and no password protection, it is very easy to use
    and keeps a record of all messages sent until they are deleted.
    
    ADDRESS BOOK is an efficient way to keep the names, addresses, and phone
    numbers of your customers and vendors in good order and up-to-date.  It
    is designed for a small to mid-sized company.  Included is a way to add,
    edit and delete your addresses, and a printer menu to print any or all
    of your addresses.  Keep track of your personal and business address and
    telephone lists with ease.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
                Program Files
                -------------
ADDRESS.DBF - Main database file
CHECK.DBF   - Reference database file
ADDRESS.EXE - Program file
ADDRESS.FRM - Address listing report form
TELLIST.FRM - Telephone listing report form
INCOADD.LBL - International Company label report form
INHOADD.LBL - International Home label report form
USCOADD.LBL - USA company label report form
USHOADD.LBL - USA home label report form
ADRSBOOK.LBL - Addressbook generator file for home addresses
COMADRS.LBL - Addressbook generator for company addresses
```
{% endraw %}

## FILES988.TXT

{% raw %}
```
Disk No:  988
Program Title: Message Master & Address Book
PC-SIG version: 1.1

MESSAGE MASTER lets several users, who use the same computer, leave
messages for one another.  You can type, read, and delete the messages
using the SEND and READ programs.  In sending a message, names are
restricted to eight characters, subject headings to eighty characters,
and the entire message to 1,000 characters.  MAIL shows the names of the
people who have messages waiting for them, and can be set up to be
executed when the computer is turned on.  Although MESSAGE MASTER has
limited text editing capabilities and no password protection between
each person, it is very easy to use and keeps a record of all messages
sent until they are deleted.

And, if you're in need to send mail the old fashioned way, ADDRESS BOOK
is a good way to keep your addresses in order.  It is designed to be
used by a small to mid-sized company.  Included in the program is a way
to edit your addresses and erase.  Also included is a printer menu to
print any or all of your addresses.  It lets you keep track of your
personal and business address and telephone lists with ease.  The
program is case-sensitive; i.e., Lastname = "Doe" is correct, Lastname =
"doe" or "DOE" is incorrect.  With the exception of the country name,
all names begin with an uppercase letter.

Usage:  Message Keeper/Address Database.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $10.00 for MESSAGE MASTER.

File Descriptions:

SEND     EXE  Creates and stores messages.
READ     ME   Documentation.
MAIL     LOG  Listing of users who have used the program.
MAIL     EXE  Lists users who have messages on the system.
READ     EXE  Displays messages to be read.
ADDRESS  EXE  Main program.
TELLIST  FRM  Data file.
CHECK    DBF  Data file.
ADDRESS  FRM  Overlay file.
ADDRESS  DBF  Overlay file.
INSTALL  BAT  Batch file to install program on the C drive.
INTRO    TXT  Instructions on how to start program.
ADRSNAME NTX  Index data file.
COMP     NTX  Index data file.
CTY      NTX  Index data file.
STE      NTX  Index data file.
ADRSBOOK LBL  Label data files.
COMADRS  LBL  Label data files.
INCOADD  LBL  Label data files.
INHOADD  LBL  Label data files.
USCOADD  LBL  Label data files.
USHOADD  LBL  Label data files.
FILES    TXT  Listing of included files.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║         <<<<  Disk No 988 MESSAGE MASTER and ADDRESS BOOK  >>>>         ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for MESSAGE MASTER, Type:                    ║
║             COPY READ.ME LPT1: (press enter)                            ║
║                                                                         ║
║ To print the documentation for Address Book, Type:                      ║
║             COPY ADDRESS.DOC LPT1: (press enter)                        ║
║                                                                         ║
║ To run the program ADDRESS BOOK, Type:                                  ║
║             ADDRESS (press enter)                                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INTRO.TXT

{% raw %}
```
                        ADDRESS LIST
                        ------------

        Thank you for using the Address List program.

        If you would some guidance strike any key and
        read the read.me file, else strike ^C, and type 
        "ADDRESS" to start using the program.

        To print the read.me file strike ^C and type
        "PRINT READ.ME" 
        
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0988

     Volume in drive A has no label
     Directory of A:\

    ADDRESS  DBF      1024   6-07-87  10:53a
    ADDRESS  EXE    161760   6-07-87  10:52a
    ADDRESS  FRM      1990   6-07-87  10:52a
    ADRSBOOK LBL      1034   6-07-87  10:52a
    ADRSNAME NTX      2048   6-08-87   1:43p
    CHECK    DBF      8822   6-07-87  10:52a
    COMADRS  LBL      1034   6-07-87  10:52a
    COMP     NTX      2048   6-08-87   1:43p
    CTY      NTX     12288   6-08-87   1:41p
    FILES    TXT       566   6-07-87  11:19a
    FILES988 TXT      2531  12-16-88   1:46p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       925  12-16-87   4:05p
    INCOADD  LBL      1034   6-07-87  10:52a
    INHOADD  LBL      1034   6-07-87  10:52a
    INSTALL  BAT        81  11-24-87  11:12a
    INTRO    TXT       387   6-07-87   1:18p
    MAIL     EXE     15906  11-20-87   1:28p
    MAIL     LOG         5  11-24-87   9:50a
    READ     EXE     16996  11-20-87   1:16p
    READ     ME       5317   6-07-87  11:21a
    SEND     EXE     16800  11-24-87   9:25a
    STE      NTX      5120   6-08-87   1:43p
    TELLIST  FRM      1990   6-07-87  10:52a
    USCOADD  LBL      1034   6-07-87  10:52a
    USHOADD  LBL      1034   6-07-87  10:52a
           26 file(s)     262846 bytes
                           46080 bytes free
