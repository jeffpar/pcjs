---
layout: page
title: "PC-SIG Diskette Library (Disk #876)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0876/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0876"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "G.I.F.T.S. GREAT GIFT IDEAS"

    Having that same old trouble coming up with a gift for Aunt Gertrude
    year after year? How about Mom? Given her all the gifts you could
    think of already?
    
    G.I.F.T.S. is a database designed to give you gift ideas for people.
    From a menu you select two key words for the price range of the present,
    the category of the item, and the type of person it's for. Gifts are
    then selected out of the database, which may be viewed on the screen or
    printed on the printer. Each listing will display the title of the
    gift, the approximate cost, the supplier, a description, and a comment.
    
    Got that charge card ready?
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
GO.BAT  is the batch file which introduces you to the volume.  It displays
	on the screen a brief description of the major programs contained in
	the volume.  The HELLO*.DOC files are used by GO.BAT. 

FILES.* is the name of this file, a list of the contents of this Volume.

		G.I.F.T.S. by Hulen & Associates, Version 2.0

GIFTS.EXE is the actual G.I.F.T.S. program.  Enter `gifts' at the
	DOS prompt in order to start it.

HARDDISK.BAT is used to install G.I.F.T.S. on hard disk C: in a directory
	named C:\GIFTS.  Enter `harddisk' to install the program on drive C:.
	See GO, or Appendix B of the manual, to install on floppy disks.

GIFTS.KBD, GIFTS.KBK, and GIFTS.KBT are the three (3) files that make up the
        G.I.F.T.S. data base.

GIFTS.DEF is provided to enable using a LOGIMOUSE C7 mouse for inquiries.

MANUAL is the 40-page user's manual.

```
{% endraw %}

## FILES876.TXT

{% raw %}
```
Disk No  876
Program Title:  GIFTS version 2.0
PC-SIG version 1
 
    GIFTS is a database program designed to give you gift ideas for other
people. From a menu you may select two key words for the price range of the
gift, the category of the gift, and the type of person the gift is for. You
may enter the keywords from the the keyboard. Records are then selected out
of the database, which may be viewed on the screen or printed on the
printer. Each record will display the title of the gift, the approximate
cost, the supplier, a description, and a comment.
 
Usage: Gift Ideas
 
System Requirements:  128K memory and one disk drive.
 
How to Start:  Type GO (press return).
 
Suggested Registration: $10.00
 
File Descriptions:
 
GO       BAT  Batch file to display HELLO*.DOC files.
HELLO4   DOC  How to install program on a hard disk.
HELLO3   DOC  How to view/print documentation.
HELLO5   DOC  How to install program on a floppy disk.
HELLO2   DOC  File descriptions.
HELLO1   DOC  Introduction.
GIFTS    KBK  Data base file.
GIFTS    KBT  Data base file.
GIFTS    KBD  Data base file.
GIFTS    DEF  File for using program with LOGIMOUSE C7.
GIFTS    EXE  Main program.
HARDDISK BAT  Batch file to install program on a hard disk.
MANUAL        Documentation.
FILES    TXT  File descriptions.
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## HELLO1.DOC

{% raw %}
```
    --------------------------------
              G.I.F.T.S.  
    Gifts Ideas For Timely Shopping,   does juat that:
    --------------------------------

it takes the drudgery out of your shopping chores.  Browse from your PC,
instead of fighting the crowds!

Do you want something different for your wife?  Select "young and woman"
from our menu of keywords, and G.I.F.T.S. will display several ideas, with
suppliers and approximate costs.

To find an educational gift for your son, select "educational and boy", etc.

brought to you by:

	Hulen & Associates
	2074 Vista Mar Dr.
	El Dorado Hills, CA 95630-3716
	Ph. (916) 933-0911


```
{% endraw %}

## HELLO2.DOC

{% raw %}
```
GO.BAT  is the batch file which introduces you to the volume.  It displays
	on the screen a brief description of the major programs contained in
	the volume.  The HELLO*.DOC files are used by GO.BAT. 

FILES.* is the name of this file, a list of the contents of this Volume.

		G.I.F.T.S. by Hulen & Associates, Version 2.0

GIFTS.EXE is the actual G.I.F.T.S. program.  Enter `gifts' at the
	DOS prompt in order to start it.

HARDDISK.BAT is used to install G.I.F.T.S. on hard disk C: in a directory
	named C:\GIFTS.  Enter `harddisk' to install the program on drive C:.
	See GO, or Appendix B of the manual, to install on floppy disks.

GIFTS.KBD, GIFTS.KBK, and GIFTS.KBT are the three (3) files that make up the
        G.I.F.T.S. data base.

GIFTS.DEF is provided to enable using a LOGIMOUSE C7 mouse for inquiries.

MANUAL is the 40-page user's manual.


```
{% endraw %}

## HELLO3.DOC

{% raw %}
```
Note: the "A>" or "C>" represent your DOS prompt.

TO VIEW THE G.I.F.T.S. MANUAL:

  1)  Insert the G.I.F.T.S. distribution diskette in drive A:

  2)  A> TYPE A:MANUAL



TO PRINT THE G.I.F.T.S. MANUAL:

  1)  Insert the G.I.F.T.S. distribution diskette in drive A:

  2)  A> COPY A:MANUAL PRN:

    The documentation is thirty pages long, so have enough paper and time
 available.


 <*><*> NOTICE: You should read Chapter 2 of the manual.  Chapter 1 is
 optional.


```
{% endraw %}

## HELLO4.DOC

{% raw %}
```
TO INSTALL G.I.F.T.S. ON A HARD DISK:

  Put the G.I.F.T.S. distribution diskette in drive A: and set the DOS
  default prompt to the hard drive.  For example: to install on drive C:

  1)  Insert the G.I.F.T.S. distribution diskette in drive A:

  2)  C> CD C:\			( change directory to the root dir. of C: )

  3)  C> MKDIR C:\GIFTS		( "gifts" will be the new directory name )

  4)  C> CD \GIFTS		( change directory to the new name "gifts" )

  5)  C> COPY A:GIFTS.*		( copy from drive A: to C:\gifts\gifts.* )

or

  there is a batch file on the distribution diskette that will do all of the
  above steps for you.  Just type the following:

        C> A:HARDDISK



```
{% endraw %}

## HELLO5.DOC

{% raw %}
```
TO INSTALL GIFTS ON A FLOPPY DISK:

  Put the G.I.F.T.S. distribution diskette in drive B: and put a clean
  diskette in drive A:

  1)  Insert the G.I.F.T.S. distribution diskette in drive B:

  2)  Insert a blank ( newly formatted ) diskette in drive A:

  3)  ?> A:

  4)  A> COPY B:GIFTS.*		( copy from drive B: to drive A: )


AFTER THE INSTALLATION, TO EXECUTE GIFTS:

  at the DOS prompt enter:

        GIFTS

PLEASE REFER TO THE MANUAL, ESPECIALLY CHAPTER 2.


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0876

     Volume in drive A has no label
     Directory of A:\

    GO       BAT       158  10-08-87   4:05p
    HELLO2   DOC       882  10-18-87   1:08p
    HELLO4   DOC       693  10-08-87  10:53a
    HELLO3   DOC       492  11-25-87   9:45p
    HELLO5   DOC       492  11-25-87   9:47p
    HELLO1   DOC       658  10-08-87   3:42p
    GIFTS    KBK      7140  11-24-87   6:03p
    GIFTS    KBT     74000  10-17-87   9:56a
    GIFTS    KBD     88032  10-17-87   9:56a
    GIFTS    DEF       178   9-10-87   4:05p
    GIFTS    EXE     59227  11-27-87  11:57a
    HARDDISK BAT       449  10-07-87  11:48a
    MANUAL           48569  11-25-87   8:26a
    FILES    TXT       882  10-18-87   1:08p
    FILES876 TXT      1441  12-01-87   2:50p
    TK{0}    {!}       975   1-01-80  12:08a
           16 file(s)     284268 bytes
                           31744 bytes free
