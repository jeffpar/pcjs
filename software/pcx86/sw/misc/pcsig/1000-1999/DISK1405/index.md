---
layout: page
title: "PC-SIG Diskette Library (Disk #1405)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1405/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1405"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-AGENT"

    PC AGENT is one of those rare, focused programs that performs with speed
    and elegance.  This no-nonsense program helps sell real estate by
    serving as a prospect card filing system for realtors.
    
    Everything important about the prospects and their desires is in the
    file.  Single family residence, townhouse or condo?  What price range?
    Location?  Do they want a garage?  When a home pops up on the market, it
    quickly calls up everyone on the list who wants a property like that and
    has the money, or credit line, to afford it.
    
    Sixteen fields for data cover: name, address, phone numbers, price
    range, income, cash down, number of bedrooms, style, garage, land, area
    desired, and comments.  A user guide is available, but the screen
    prompts are so self-explanatory you'll be in business in minutes.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1405.TXT

{% raw %}
```
Disk No: 1405
Program Name:  PC-AGENT version 4.81
PC-SIG version:  1.1

PC AGENT is one of those rare, focused programs that perform with speed
and elegance.  This no-nonsense program helps sell real estate by
serving as a prospect card filing system for realtors.

Everything important about the prospects and their desires is in the
file.  Single family residence, townhouse or condo?  What price range?
Location?  Do they want a garage?  When a home pops up on the market, it
quickly calls up everyone on the list who wants a property like that and
has the money, or credit line, to afford it.

Sixteen fields for data cover: name, address, phone numbers, price
range, income, cash down, number of bedrooms, style, garage, land, area
desired and comments.  A user guide is available, but the screen prompts
are so self-explanatory you'll be in business in minutes.

Program Limitations: Shareware version has a capacity of 60 prospects
per file.  Registered version will handle 600 prospects per file.

Synopsis: A single-minded program that provides the busy real estate
agent with a quick system for matching prospects with properties.

Usage:  Real Estate Sales/Prospect Card File.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $45.00

File Descriptions:

AGENT    CNF  Configuration file.
AGENT    KEY  Data file.
DEMO     REC  Demonstration data record.
FIELDS   KEY  Data file.
HELP     BAT  Displays information on registration.
INDEX    KEY  Index data file.
ORDER    FRM  Registration form.
PCAGENT  DOC  Documentation.
PCAGENT  EXE  Main program.
PCAGENT  HLP  Help file.
PCHELP   BAT  Batch file to bring up help.
PCTEMP   $$$  Temporary work file.
PRINT    BAT  Prints registration form.
RUN      BAT  Starts up PC-AGENT.

PC-SIG
1030 E Duane Avenue
Sunnyvale CA 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

```
{% endraw %}

## PCAGENT.DOC

{% raw %}
```


INTRODUCTION

PC-AGENT is a Database / Prospect Card Filing System for Real Estate
and Insurance Salesmen.

PC-AGENT is being distributed via the Shareware Concept.  That 
allows you, the consumer, to try out a program before you purchase it.

When you decide to use PC-AGENT regularly, you should send a 
Contribution of $35.00 to RDP Services, PO Box 6222, Parsippany, NJ,
07054.  For your donation, you get the latest version of the program,
a printed manual, and one year's mail support.  That means we answer
any questions about PC-AGENT you mail to us. After your support
agreement expires, you can extend it for another year for only $25.00.

For a donation of $65.00, you get a year's 24 hour response Phone 
Support. That means when you call 201-625-5804, we respond to your 
inquiries within 24 hours. After your support agreement has expired, 
you can extend it for another year for only $45.00.  

When you extend your support agreement, you get a copy of the latest 
version of PC-AGENT, as well as continued support, either by phone 
or mail. See the UPGRADES section on page 3 for more information.

If you like PC-AGENT but find it missing a desired function, we can 
custom tailor the program for you.  Customization Quotes are 
available on request. RDP Services also offers generous pricing on
Site Licenses and Multiple Copy discounts.  Please write for more
information.

You may contact the author of PC-AGENT, David Felder, through 
Compuserve EMAIL at 73327,1273.  He will answer your questions 
through Compuserve, but there is no guaranteed response time.

For abbreviated operation instructions, type in the command: PCHELP

NOTICE

Copyright 1988 by RDP Services and David Felder.  All Rights 
Reserved.  

THE SHAREWARE CONCEPT

The idea of Shareware is to allow the consumer to evaluate a product
before spending any money on it.

You are encouraged to copy this program and share it with friends,
business associates, clients and any one else.

When you decide to use PC-AGENT on a regular basis, it is your
Moral and Financial obligation to pay the developers of the software.

You may use RDP's Technical Support Number, 201-625-5804 if you have
questions about the program.  RDP will not provide free support to 
non-registered users.  We will only return calls to Registered users,
toll-free "800" numbers, or via collect calls.

If you are in a bind, RDP will allow you to register by phone, and
bill you later.  This is subject to change.

ENJOY PC-AGENT!






Page 2 of 5


SPECIFICATIONS

PC-AGENT will run in any IBM or True IBM Compatible with at least 
256K of memory, one floppy disk drive and DOS 2.11 or higher.

You will need a printer to use PC-AGENT to it fullest capability.

While PC-AGENT will run on a Monochrome system, it is a Color 
program that gives you the opportunity to customize it for your own 
use in your office.

PC-AGENT has been designed with a user friendly interface.  That 
means all the functions are designed to be accessed without the use
of an instruction manual.  If you take a few minutes to read the 
rest of this short document, you will be on your way.  PC-AGENT 
will prompt you with on-screen instructions as you go along.

PC-AGENT uses the Function keys on your Computer to move from one 
function to another.  If you're unfamiliar with your keyboard, the
Function keys are the ones labeled "F1", "F2" and so on.  If you 
have problems finding them, we suggest you check the instruction 
manual that came with your computer.

FILES

The PC-AGENT distribution diskette comes with several files you 
will need to run the program:

	PCAGENT.EXE	This is the main program

	INDEX.KEY	This is an index file where PC-AGENT 
			keeps track of your Database.

	DEMO.REC	A sample Database included so you can 
			experiment with the features of PC-AGENT
			without typing in a lot of information.

	TEMP.$$$	Temporary work file.

	HELP.BAT	This prints abbreviated information onto the
			screen about PC-AGENT licensing.

	PCHELP.BAT	This prints out the abbreviated manual you 
			are reading now.

	PCAGENT.HLP	This is the text printed out by HELP.BAT

	PCAGENT.DOC	This is the text printed out by PCHELP.BAT

	ORDER.FRM	This is an order form for registering your 
			copy of PC-AGENT

	PRINT.BAT	Prints out PC-AGENT order form

	RUN.BAT		Starts up PC-AGENT








Page 3 of 5

BACKING UP YOUR DATA

You should back up your data files on a regular basis to prevent the
loss of your valuable information.  If you are unfamiliar with using
DOS, the following procedure will do.

Put your Data Disk in Drive A.

Put a formatted Backup Disk in Drive B.

Type in the command:     COPY A:*.REC B:

Then type in the command:	COPY A:INDEX.KEY B:

If you have only one floppy disk, you will have to keep swapping the
backup diskette and data diskette.

If you have installed PC-AGENT onto a hard drive, you will type:

		COPY C:*.REC A:
		COPY C:INDEX.KEY A:

You must copy INDEX.KEY along with your files or you will not be able
to access them from the backup diskette.  The smartest thing to do is
to backup your data every time you use PC-AGENT.

NOTES FOR PROGRAMMERS

1) FILES

PC-AGENT stores your data as SEQUENTIAL files.  That means you will
be able to edit your data files with most word processors or with
programs you write yourself.  WARNING:  Don't expect PC-AGENT to be
able to read files you edit with another program.  If you move one 
comma or line feed, PC-AGENT will read your data incorrectly.  We 
suggest backing up your data files before you tinker with them using
other programs.

If you would like to write your own programs to use PC-AGENT data 
files, you should notice the marker "ZZZ" at the end of your data 
file.  This is only a marker that PC-AGENT uses when it closes
your files.

If you ever lose your INDEX.KEY file, you can create a new one with
any editor.  Just open a file and list all the files with a ".REC"
extension.  The reason we use INDEX.KEY is to make PC-AGENT as 
user friendly and transparent as possible.

UPGRADES

As new versions of PC-AGENT become available, registered users will
be notified by mail.  You will be given the opportunity to upgrade to
the new version during the remainder of the one year time period of 
your support agreement for only $5.00.  That $5.00 covers the cost of 
processing your order.











Page 4 of 5

DISCLAIMER

RDP Services (RDP) makes no representations or warranties with
respect to this software & accompaniment documentation.  Further,
RDP reserves the right to make changes in the specifications of
the product described at any time without notice and without any
obligation of RDP to notify any person of such revision or
changes.

IBM and DOS are registered trademarks of International Business
Machines and Microsoft.  


PC-AGENT PROGRAMS

HELP		Display's information on screen about PC-AGENT

PCHELP          Prints out an abbreviated instruction manual

PRINT		Prints out an order form

RUN		Run's the main program, PC-AGENT


WHY REGISTER YOUR COPY OF PC-AGENT

There are several reasons why you should register your copy
of PC-AGENT.

First, by paying the Author for his time and efforts, you
encourage programmers to write more programs.  This benefits
everyone.  The programmer because he is compensated for his
efforts.  And the consumer because it makes high quality, low
cost software available.  In case you hadn't noticed, there
are not a lot of computer programs written specifically for
Real Estate and Insurance salesmen.  And those that are are
usually very expensive and difficult to learn.

Second, this program is offered on a try-first, buy later
agreement.  If you are using it, you should pay for it.

Third, if you ever have problems using PC-AGENT, your support
agreement gives you a means of getting your questions answered.
Unless you are a computer expert, you will have difficulties
finding an expert on PC-AGENT.

















Page 5 of 5


                      PC-AGENT REGISTRATION FORM



Name ___________________________________________________

Address ________________________________________________

City ___________________________________________________

State _________ Zip ____________ Phone _________________


Please check one:

		_____ Please send me _____ copies of PC-AGENT to 
		      evaluate.  I have enclosed $5.00 for each copy.


		_____ Please register me as a user of PC-AGENT 
		      with one year's Mail Support.  I have enclosed
		      $35.00 plus sales tax where applicable.


		_____ Please register me as a user of PC-AGENT
		      with one year's 24 Hr. Response Telephone
		      Support.  I have enclosed $65.00 plus sales
		      tax where applicable.

TOTALS:

_______ Evaluation copies @ $5.00 ea.			____________

_______ Registered copies w/Mail support @ $35.00 ea.  ____________

_______ Registered copies w/24 hr. Response 
  	 telephone support @ $65.00 ea.			____________


					SUBTOTAL	____________

		   NJ Residents add 6% Sales Tax	____________

					   TOTAL       	____________

Mail your order to:

RDP SERVICES
PO Box 6222
Parsippany, NJ  07054

24 hr. Answering machine at 201-625-5804


9/88                               All prices subject to change






```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1405

     Volume in drive A has no label
     Directory of A:\

    AGENT    CNF        10   5-21-89   9:28p
    AGENT    KEY       321   2-01-89   2:59p
    DEMO     REC      3587   9-07-88  12:08p
    FIELDS   KEY       305   5-21-89   9:13p
    HELP     BAT       128  10-02-88   1:41p
    INDEX    KEY         6   9-08-88   8:22a
    ORDER    FRM      1140   6-19-89   7:52p
    PCAGENT  DOC      9600  10-02-88   1:44p
    PCAGENT  EXE     72652   6-19-89   7:39p
    PCAGENT  HLP      1184  10-02-88   1:52p
    PCHELP   BAT       688  10-02-88   1:53p
    PCTEMP   $$$      3456   9-08-88   9:18a
    PRINT    BAT       692  10-02-88   1:56p
    RUN      BAT       128  10-02-88   1:40p
    FILE1405 TXT      1940   8-25-89   8:10a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       694   5-31-89  10:59a
           17 file(s)      96569 bytes
                           58368 bytes free
