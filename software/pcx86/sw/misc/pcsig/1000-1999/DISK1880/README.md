---
layout: page
title: "PC-SIG Diskette Library (Disk #1880)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1880/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1880"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CONTACT  TRACKER"

    CONTACT TRACKER packs just about every function a small businessman or
    crack salesman needs to record every prospect or key person he meets.
    It stores those contacts in a crisp database and converts your computer
    to a neat phone dialer.  An arranger and organizer, CONTACT can maintain
    your calendar and schedule while prioritizing your chores.  It lets you
    sort those contacts in a variety of ways, write a letter, and then its
    mail merge function makes sure the letter gets out to the right people.
    
    You can set up CONTACT TRACKER to track important appointments, calls,
    meetings, dates, people and projects.  You can send out price updates to
    selected customers or memos to selected employes.  The program boasts it
    can churn out up to 60 letters in an hour and then print mailing labels.
    When needed, it will dial your telephone and let you make notes of your
    calls and store them with each contact file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1880.TXT

{% raw %}
```
Disk No: 1880                                                           
Disk Title: Contact  Tracker                                            
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Contact Tracker                                          
Author Version: 04/90                                                   
Author Registration: $50.00                                             
Special Requirements: Two floppy drives.  Hard drive recommended.       
                                                                        
CONTACT TRACKER packs just about every function a small businessman or  
crack salesman needs to bird-dog every prospect or key person he deals  
with.  It stores those contacts in a crisp database and converts your   
computer to a neat phone dialer.  An arranger and organizer, CONTACT can
maintain your calendar and schedule while prioritizing your chores.  It 
lets you sort those contacts in a variety of ways, write a letter, and  
then its mail merge function makes sure the letter gets out to the right
people.                                                                 
                                                                        
You can set up CONTACT TRACKER to track important appointments, calls,  
meetings, dates, people and projects.  You can send out price updates to
selected customers or memos to selected employes.  The program boasts it
can churn out up to 60 letters in an hour and then print mailing labels.
When needed, it will dial your telephone and let you make notes of your 
calls and store them with each contact file.                            
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║               <<<<  Disk #1880  CONTACT TRACKER  >>>>                   ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║ To start program, type: TRACKER      (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY TRACKER.DOC PRN  (press enter)       ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIG Inc.

```
{% endraw %}

## TRACKER.DOC

{% raw %}
```
.op










                            *******************

                              CONTACT TRACKER 

                            *******************






               COPYRIGHT 1988,1989 CHARLES WILLIAM RAYMOND, 
           WEDGE MARKETING COMMUNICATIONS. ALL RIGHTS RESERVED.











































CONTACT TRACKER is the sole property of Charles W. Raymond and 
Wedge Marketing Communications. It is offered to you on a "trial 
and pay" basis subject to the licensing agreement that follows 
user documentation.

IF YOU LIKE CONTACT TRACKER SEND YOUR FIFTY DOLLAR ($ 50.00 U.S.) 
registration fee to;     
                         Wedge Marketing Communications
                         P.O. Box 747
                         Lake Arrowhead, CA 92352

Calif. Residents add 6% sales tax.

In addition to authorized use, registration entitles you to 
notification and availability of improvements, modifications, and 
updated versions of CONTACT TRACKER. 

Address your comments, etc., to the same. 


























                         WHAT IS CONTACT TRACKER?

CONTACT TRACKER is a program for persons interested in being THE 
BEST at the PEOPLE BUSINESS.

CONTACT TRACKER is a data base, a phone dialer, a priorizer, a 
mail merger, a manager, an arranger, an organizer, a labeler and 
even a telemarketer. It was initially designed as a sales 
prospector for Wedge Marketing Communications, an incentive 
marketing agency in California. The program helps account 
executives keep record, call, write letters of introduction, 
follow-up, and otherwise track sales prospects and clients. Even 
Wedge Marketing Communications' creative department began using 
CONTACT TRACKER to track vendors' and their bids and even projects, 
not to mention mail-merging Christmas letters to all their freinds.

CONTACT TRACKER can be made to merge leads into its data base 
or a separate one from a file created by a mainframe.

Some Valuable Advise: DON'T MAKE CONTACT TRACKER HARDER THAN IT IS. 

CONTACT TRACKER was written to be easy to use. You should be able 
to use it to its full potential, even without reading the written 
documentation. 

WHAT CAN I DO WITH CONTACT TRACKER?

You can set up CONTACT TRACKER to keep track of important 
appointments, calls, meetings, dates, people and even projects. 
It can send out price updates to selected customers. It 
can send out memos to employees or letters of introduction to 
prospects. (Writing and getting 60 letters in the mail on one 
hour is not unusual.) It can thank people for opportunites. It 
can create labels for mailings. It can dial numbers and keep 
track of who said what, how much, and when. It can sort every 
which way and print the results to your screen or printer. It can 
help you organize your days and plan for tomorrow.  It can 
distinguish between customers, clients, vendors, suppliers, 
friends and family.  AND USERS ARE FINDING MORE WAYS ALL THE TIME 
TO DO MORE WITH CONTACT TRACKER.














                       FILES NECESSARY FOR OPERATION

There are several files necessary to Contact Tracker. They are;

FILE NAME          DESCRIPTION
A                  CONTROL FILE
ONR                CONTROL FILE
TRACKER.EXE        CONTACT TRACKER OPS FILE
CAPNOTE            COMPILING, AUTHORIZATION, PROVISION FILE
NOTATION.DAT       DATA FILE FOR EXTENDED NOTE
SAMPLE.LET         A SAMPLE LETTER FILE
SETUP.DAT          DATA FILE CONTAINING STRING FILES FOR COMM.
SLIST              DATA FILE FOR CONTACT INFO
TRACKER.BAT        BATCH FILE FOR RUNNING TRACKER (CAN BE CHANGED TO SUIT)
TRACKER.DOC        INSTRUCTIONS AND LICENSE INFO.

If you are missing or have a bad copy of any of the control files, the
tracker.exe file, or the setup.dat file, Contact Tracker will not run.

If you are not able to acquire proper copies of these files OR IF YOU
EXPERIENCE A FLASHING MESSAGE that indicates a problem. Please write
or call;

             Wedge Marketing Communications
             CT Support
             P.O. Box 747
             Lake Arrowhead, CA 92352
             714/337-6770 (9-5 pst)



























If you like Contact Tracker and/or have comments, address them to:

                 Wedge Marketing Communications
                 CT Support
                 P.O. Box 747
                 Lake Arrowhead, CA 92352

A $50.00 (U.S.) registration fee will be appreciated and entitles you
to use Contact Tracker, notification and availability of improvements,
modifications, and updated versions.













































                       A NOTE TO ALL SALES MANAGER'S 

If you are in sales and value the Contact Tracker for prospecting and
are currently supplied with leads. Wedge Marketing can provide you
with an automatic merge tag-a-long program that will read new leads
from disk or file,sort them by sales area (or whatever) and then
write them into your Contact Tracker data base for telemarketing etc.
The Contact Tracker will print your letters of introduction and set
up a simple way to follow-up.

See tracker.doc for continuous form letterhead.

               Wedge Marketing Communications
               CT Support-Sales
               P.O Box 747
               Lake Arrowhead,CA 92353
               714-337-6770 (9-5 pst)
.PA
                              CORPORATE USERS

The Contact Tracker may be customized and licensed for large corporate
users and under which circumstances formatted/printed documentation
and hands-on training may be provided.

For more info call Charles W. Raymond 714-337-6770 (9-5 pst)
or write;
               Wedge Marketing Communications
               Attn: C. Raymond
               P.O. Box 747
               Lake Arrowhead,CA 92352











































                               GETTING SETUP

Boot DOS. 

Put your TRACKER diskette in A: drive and Type;

A: (and enter)

                              HARD DISK SETUP

HARD/FIXED DISK OPERATION - CONTACT TRACKER will work very well on 
floppy drive systems but really is much better when run on a hard 
drive. The main reason is access time. CONTACT TRACKER accesses 
data often and floppy drives are slow and when time is money, 
spend alittle on a hard drive or hard card.  In addition to faster 
operation, a hard drive can allow you to keep different CONTACT 
TRACKER data bases in different directories.

Next,

type CD\ and enter

type COPY CON:TRACKER.BAT and enter

type ECHO OFF and enter

type CD\ and enter

type CD\TRACKER and enter 

type TRACKER and enter

type CD\ and enter

Press the F6 key and enter

This will write a batch file called TRACKER.BAT to default 
directory. Whenever you want to run CONTACT TRACKER, type in the 
word TRACKER and press the enter key.

     Go to CONTACT TRACKER SETUP section.














                            FLOPPY DRIVE SETUP

NOTE: If you have a two floppy drive system and want to store 
data on a separate floppy in drive B: you must FORMAT A NEW BLANK 
DISK IN DRIVE B: and then DO THE FOLLOWING;

                        WITH CONTACT TRACKER MASTER IN DRIVE A:
                        TYPE;   A: (and hit return)
                        TYPE;   COPY SLIST B: (return)
                        TYPE;   COPY NOTATION.DAT B:
                               (return)
                        TYPE;   DEL SLIST (return)
                        TYPE;   DEL NOTATION.DAT
                               (return)

AUTOBOOTING CONTACT TRACKER

If you are running the TRACKER from floppy drives, you can make 
the program run from a cold start by putting your DOS master in 
A: drive and your CONTACT TRACKER in B: drive and typing SYS B: 
and enter. (This will put system on the TRACKER diskette and 
allow you to run the software without first booting DOS.)


































                           CONTACT TRACKER SETUP

Now there are a few things to do so CONTACT TRACKER will make all 
the right moves.

type TRACKER and enter

At the Main menu PRESS;

7         (no enter key is needed)

You will see;

SETUP PRINTER/MODEM

1ST PRINTER CODE FOR CONDENSED PRINT   0
2ND PRINTER CODE FOR CONDENSED PRINT   0
1ST PRINTER CODE FOR NORMAL PRINT      0 
2ND PRINTER CODE FOR NORMAL PRINT      0
CONTINUOUS FORM PAPER (1) 0=SHEET     1
DILAING PREFIX (ex. OUTSIDE LINE=9,)
MODEM PORT (COM1 or COM2)             OFF
DRIVE FOR DATA (C: B: OR SUBDIR)

The first 4 lines refer to ASCII codes that will, when sent to 
your printer, condense and reset to normal, the size of the 
characters printed by your printer. All printers (EXCLUDING 
LETTER QUALITY - DAISY WHEEL TYPES) allow you to condense output 
to 132 characters per line. Look in your printer manual for the 
proper ASCII sequences.

For Example:

If your manual says ESC SI (Epson) condenses, you would enter a 
27 (the ASCII code for ESCAPE);

1ST PRINTER CODE FOR CONDENSED PRINT   27

and a 15 (the ASCII code for SI);

2ND PRINTER CODE FOR CONDENSED PRINT   15

If your manual says DC2 turns off the condense mode, you would 
enter an 18 (the ASCII code for DC2);

1ST PRINTER CODE FOR NORMAL PRINT      18

and nothing for;

2ND PRINTER CODE FOR NORMAL PRINT      0

ASCII Codes can be found in both printer manuals and the manuals 
included with your computer.

IF YOU OWN A DAISY WHEEL PRINTER AND IT IS ABLE TO PRINT REPORTS 
132 COLUMNS WIDE, LEAVE THE FIRST FOUR ITEMS AT 0 (ZERO).

Next you must enter whether you want to set your default to 
continuous form or sheet feed paper.  Sheet feeding is 
inefficient but accomodated just the same because not everyone 
has continuous form letterhead. 

[If you are interested in purchasing continuous form letterhead
and have no sources for doing so, call or write Wedge Marketing 
Communications for details]

Enter 0 for sheet feed or a 1 for continuous form paper.

CONTINUOUS FORM PAPER (1) 0=SHEET     0

If your system has a Hayes/Compatible modem you may enter special 
characters on the next line that will allow you to dial an 
outside line, disable call waiting etc. 

DIALING PREFIX (ex. OUTSIDE LINE=9,)   9,

If your system has a Hayes/Compatible modem you MUST tell CONTACT 
TRACKER which port your modem is assigned to.  If your system 
does not currently have a modem, leave this item at OFF.
 
MODEM PORT (COM1 or COM2)             OFF      <--no modem

                 or

MODEM PORT (COM1 or COM2)             COM1     <--modem at COM1

DRIVE FOR DATA (C: B: OR DIR)                  <---harddisk*

(* not identifying any drive will put CONTACT TRACKER into the drive 
that is default. That is if you setup for floppy drive operation, 
CONTACT TRACKER will look to A: unless told to do otherwise. If you 
setup for two floppy drives with data to go to B: drive, you want B: 
to appear for DRIVE FOR DATA (C: B: OR DIR).

                     !!!! Hard drive users !!!!
[CONTACT TRACKER can use different lists as long as they are in 
different directories. No entry for DRIVE FOR DATA (C: B: OR DIR) 
will access the data in the TRACKER directory we made during setup.
You might want to create a directory called \cust for customers and 
one called \prospect for prospects, or?? If you have or expect to 
have more than 350 contacts, we recommend you keep them in sepate 
directories. You can then change to the list you want by going into 
the setup and identifying the appropriate directory. BUT YOU MUST 
IDENTIFY THE DIRECTORY WITH A BACKSLASH AT BOTH THE FRONT AND REAR 
OF THE DIRECTORY NAME.  IE. DRIVE FOR DATA (C: B: OR DIR) \CUST\.]




Once you are satisfied with the way you have set up CONTACT TRACKER 
answer;

         Y to the Ready (Y or N) prompt. Answering N will bring          
         you back to the main menu and you will have to select          
         option 7 once more to complete your setup.

Once you have completed setting up, you do not have to set up 
again unless you change the directory or printer or install a 
modem etc.













































                HANDS ON - GETTING USED TO CONTACT TRACKER

The Main Menu


SELECT ONE ------>

1. ENTER NEW CONTACTS
2. CHANGE A CONTACT'S RECORD
3. TRACKER-SEARCH/DIAL/NOTES
4. PRINT LABELS
5. SORT and PRINT CONTACTS (ALPHA)
6. LETTER MERGE with LABELS
7. SETUP PRINTER/MODEM
8. QUIT

Since option 7 has been completed, CONTACT TRACKER will operate 
correctly, we shall go through each option sequentially so you 
can quickly start to realize CONTACT TRACKER's power. 

FROM THIS POINT ON, CARRIAGE RETURNS (pressing the enter key) ARE 
NOT NECESSARY. DO NOT USE THEM UNLESS TOLD TO DO SO.

PRESS 1 (option 1 - Enter New Contacts)

Note what happens. The screen changed and was formatted with 
several items (each item is called a field in data base 
terminology).

Hey, I'm already on ENTRY # 2 and I haven't entered anyone! 
(CORRECT!)

ENTER THE WORD     END (for Co. Name)

Note that you type caps and your CAPS LOCK button may not have 
been pressed.  THIS IS AS IT SHOULD BE!! CONTACT TRACKER locks 
the caps because reports are easier read in caps. CONTACT 
TRACKER will turn the CAPS LOCK off and on whenever it needs to. 

NOW HIT ENTER

Notice how the word END took you back to the Main Menu? 

NOW PRESS 1 AGAIN

NOW TYPE IN  END (don't press return) 

Note that entering END for CO NAME: allows you to exit the entry 
option. Modify works the same way.

USE THE BACKSPACE KEY TO RUBOUT THE WORD END.

*CONTACT TRACKER does not allow you to use the arrow keys. 


Now what about that ENTRY # 2 business?

TYPE  END (return) and lets find out.

At the Main Menu; PRESS 3

You see;

(S)CROLL - (L)OOKUP - (A)LL - (F)IND

PRESS S

You see;

Enter the characters and Return to Select or just Return for all?

HIT RETURN

Ahhh Haaa! You see the author has put its record in the first 
position. 

1 -WEDGE MARKETING COMM.

(D)ial (E)xit

PRESS E

Now you see;

(S)CROLL - (L)OOKUP - (A)LL - (F)IND

HIT RETURN

You are back to the Main Menu.

PRESS 2

You see;

Enter RECORD# or COMPANY NAME to MODIFY 0=Quit _

ENTER 0 (the return alone will work too.) and enter

You went back again to the Main Menu.

PRESS 2

Again you see;

Enter RECORD# or COMPANY NAME to MODIFY 0=Quit _

ENTER  WEDGE (and enter)



You see;

--------------> ENTRY # 1 <------------------
                          ENTER 'END' FOR COMPANY NAME TO QUIT
CO NAME:          WEDGE MARKETING COMM.
   NAME:          CHUCK RAYMOND
ADDRESS:          
                  ETC.

ENTER  END (and enter) WITHOUT CARE FOR THE REST OF THE LINE.

You went back to the Menu again.

Now let's go back to option 1.

PRESS 1

ENTER (as follows)

CO NAME:          DOE'S DOUGH FACTORY
   NAME:          DON DOE
ADDRESS:          123 FLOUR ST.
   CITY:          DONUTDOWNS
  STATE:          CA
    ZIP:          11111
 PHONE1:          1-714-555-5555
 STATUS:          0
   NOTE:

IS THIS OK (Y/N)

PRESS N

Notice CONTACT TRACKER took you back up to the top for 
corrections.

PRESS RETURNS UNTIL YOU GET TO THE BOTTOM AND 
PRESS Y

If you entered anything other than a space on any line that you 
previously typed, you will have changed the data kept in that 
field.

Now you see;

(C)LEAR (K)EEP (R)EAD/WRITE/CHANGE EXTENDED NOTE

**** BE CAREFUL WHEN USING (C)LEAR. CLEAR means WIPEOUT the 
information stored in the EXTENDED NOTE FILE. If you are entering 
NEW contacts there is no danger, but when you are MODIFYING 
existing contact's records you will WIPEOUT the data stored there 
with this option.  The extended note file will be covered later.

PRESS C

You are now at entry # 3.

TYPE   END (and enter)

PRESS 3

PRESS S

PRESS RETURN

There is DOE'S  

PRESS E

PRESS RETURN

You should be back at the Main Menu.

PRESS 2

You see;

Enter RECORD# or COMPANY NAME to MODIFY 0=Quit _

ENTER  DOE'S (and enter)

PRESS RETURNS UNTIL YOU ARE ASKED FOR OK 

PRESS Y

PRESS R

You see;

-----------------Additional Notes-------------------
Hit RETURN if no change, Shift/Prt SC to print
 

>                                                  <




^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The extended note file allows you to keep additional information 
on DOE'S Dough Factory.

PRESS RETURN until you see;

Ok to Send to Disk (Y\N\Q)

PRESS N

You are back up to the top of the screen.
Now type in two lines of text that go all the way to the end of 
the line. (LISTEN FOR THE TONE CHANGE - TONE CHANGE MEANS YOU ARE 
COMING TO THE END OF THE LINE.)

The extended note file and all CONTACT TRACKER's word editors use 
this method of telling you, "you are near the line's end."

Try backspacing (RUBOUT), try the arrow keys and typing without 
paying attention the tone change.  CONTACT TRACKER will cut off a 
word where ever it hit the end of the line.

Note that CONTACT TRACKER will not let you edit a line above the 
one you are typing until you are done with the note.

USE RETURNS TO GET TO THE  Ok to Send to Disk (Y\N\Q) MESSAGE.

PRESS N

Go back and use the space bar to wipe out just the first 
character on any line that you typed.

NOW USE RETURNS TO GET TO THE BOTTOM AGAIN.

PRESS Y

NOW TYPE IN DOE'S AGAIN (AT THE PROMPT)

USE RETURNS ETC. (like before) AND 

R  FOR (R)EAD/WRITE/CHANGE EXTENDED NOTE

The space you entered on the line you typed WIPED OUT THE 
LINE!!!!! 

PRESS RETURNS UNTIL YOU REACH Ok to Send to Disk (Y\N\Q) 

PRESS Q

Q lets you keep the extended note file like it was before the 
changes BUT NOT IF YOU HAVE ALREADY USED Y to send it to disk.

ENTER DOES (this time without the apostophe) and enter

Whoops! It didn't find it.  That is because DOE'S and DOES are 
two different things to the computer. Just as Doe's and DOE'S 
are. You'll find this consistant with all other similar functions 
of CONTACT TRACKER.

Now try using both Wedge Marketing's and Doe's Dough Factory's 
record number to find them while in the CHANGE A CONTACT'S RECORD 
mode. (REC# 1 or 2). You can pull the up contacts either by 
Company Name or record number. (Number is always faster because 
the data is stored in a random access format).


OK when you are done getting familiar with the CHANGE option, GET 
BACK TO THE MAIN MENU and try option 3.

(at Main Menu) PRESS 3

PRESS L

You see;

Enter Company Name OR Contact Name to LOOK for ?

ENTER WEDGE (and enter)

CONTACT TRACKER will bring up record number 1, WEDGE MARKETING 
COMM.

PRESS E (to exit)

This time try it by contact name.

ENTER CHUCK (and enter)

CONTACT TRACKER will bring up record #1 again.

(you can search both ways for a contact using this method)

PRESS E (to exit again)

PRESS L (for Lookup)

ENTER D (and enter)

Note that CONTACT TRACKER will find the first D it runs into.  
CONTACT TRACKER will take anything and search for it.





















Look at the bottom submenu below DOE'S data.

(A)ll (L)ookup (E)xit (*)CB

(D)ial (F)orward  (B)ack

(N)ote (M)ore Note (C)alender

The above options in the submenu are called suboptions. They 
allow you to do the things they imply.

(A)ll - Pressing an A allows you to select a record number to 
start at and then go forward (the F suboption) or backward (the B 
suboption) through your entire file one record at a time.

(L)ookup - Pressing an L allows you to go directly to lookup 
another entry. Once the entry is found, it displays the entry's 
data and gives you the submenu again from which you may continue 
operations.

(E)xit - Pressing an E will get you back to the Main Menu.

(*)CB - Pressing an * or the numeral 8 will take the cursor to 
the C/A Day: line and after entering data and/or a return is hit, 
the cursor will take you to C|A Time:.  

     C/A Day means Call or Appointment date
     C|A Time means the time for C/A Day

**** These fields are extremely valuable as you will see. ****

     C/A Day:  Allows input of MO/DA/YEAR
     C|A Time: Allows input of an A designating an appointment
               in the following format:

               The C|A Time prefix designates special things:
               A10:00 (meaning a 10:00 appointment), or
               C18:00 (meaning call at 6:00PM-ALWAYS USE THE
                       24HOUR CLOCK. IT IS CRUCIAL TO SORTING
                       AND PRINTING YOUR APPOINTMENTS)

                    24 HOUR CLOCK TABLE

                    00:00 or 24:00      MIDNIGHT
                    01:00               1 AM
                    02:00               2 AM
                    -
                    -
                    -
                    12:00               NOON
                    13:00               1 PM
                    14:00               2 PM
                    -
                    -
                    23:00               11 PM                 
************************************************************
IMPORTANT! * You can designate any other characters as a            
C|A Time prefix to do specific things.
************************************************************

THIS IS WHERE CONTACT TRACKER WILL REALLY HELP TO KEEP YOU 
ORGANIZED BY ALLOWING YOU TO SPECIALLY IDENTIFY YOUR ENTRIES. 
COMBINE THIS WITH THE STATUS FIELD AND YOU CAN CROSS REFERENCE, 
TRACK AND ARRANGE YOUR ENTRIES IN AN INFINITE NUMBER OF WAYS!

Let's cover STATUS First.

Suppose you need to send out a letter or special product news to 
selected persons whose STATUS field (discussed again later) has a 
0 in it.

From the Main Menu:
(if you haven't figured out how to get back to the main menu, 
enter an E, then a return, and another return. You will see each 
prompt as you do.) 

1st - PRESS 3
2nd - PRESS F
3rd - PRESS S
4th - ENTER 0 (to: Enter Status to find _) AND RETURN

Notice CONTACT TRACKER jumped to DOE'S. It skipped WEDGE because 
WEDGE has a STATUS of 1. Doe's has a STATUS of 0.

5th - PRESS * (or 8)

ENTER 07/25/1988 (and hit return)
ENTER L (designating that you want to send a letter to this          
contact) and hit return

6th - PRESS E
7th - PRESS RETURN (you should be back to the Main Menu)
8th - PRESS 6 (for LETTER MERGE with LABELS)

You will see;

Make a Selection

                    1. SELECT/PRINT A LETTER
                    2. EDIT A LETTER
                    3. DELETE A LETTER
                    4. VIEW A LETTER
                    5. QUIT

These options for letter merge and labels are just as they imply. 
You can select a letter for merging and printing, edit a new 
letter or an exisiting one, delete a letter, view (look at) an 
existing letter, or exit to the Main Menu.


9th - PRESS 1 (SELECT/PRINT A LETTER)

(MAKE SURE YOUR PRINTER IS CONNECTED AND ON LINE ---- OTHERWISE 
TYPE  QUIT TO THE PROMPT AND FOLLOW ALONG WITHOUT MAKING THE NEXT 
ENTRIES)

10th - Enter SAMPLE.LET (you should be getting the nack of                
when to press RETURN by now)

     You will see;

     Enter QUANTITY of letters to print or (A)ll or (R)ange or           
(S)elected

          You can enter a number for which you will be           	  
          prompted to enter the record numbers of each contact
          to print a letter or..
          
          an A to send a letter to all of your contacts or..

          a R to send letters to all the contacts whose record
          numbers fall within a range of record numbers or..

          a S to send letters to selected contacts only.

11th - PRESS S

     By pressing S, you will see;

     Enter fields to Match and the fields that make up each 
     contact's record.

     Entering any data (except for a return) into any of the fields      
     will create conditions under which CONTACT TRACKER which 
     will search for that EXACT data in all of your records. If 
     CONTACT TRACKER finds a match, SAMPLE.LET will be printed 
     for that contact.

     PRESS RETURNS (until the cursor is opposite to TIME:)
     
     ENTER L

     ENTER Y to OK (Y/N)

     Next you will see;

     (C)ontinuous form (S)ingle sheet (A)uto from setup

     Depending on how you have set up CONTACT TRACKER, different 
     things will occur. For purposes of demonstration;

     PRESS S (for single sheet)

     DOE'S comes to the screen with a prompt for paper. 

     PUT PAPER IN THE PRINTER (or if you already have continuous      
     form in the printer;)

     PRESS RETURN
     
     Note that CONTACT TRACKER printed SAMPLE.LET for DOE'S and 
     now prompts you for labels. If you press Y, CONTACT TRACKER 
     will print a 1X3 inch standard label for DOE'S.

     PRESS N

GET BACK AT THE MAIN MENU.

It should be noted that the letter is personalized "Dear Don;." 
If CONTACT TRACKER encounters a MR.,MS. or MRS., CONTACT TRACKER 
reacts differently to the greeting/salutation. 

The important point to make is that the C|A Time field gives you 
the flexibility to do alot of things.
1. It allows you to merge letters with special contacts.
2. It allows you followup/track contacts as well.
3. It allows you to further categorize your contacts.
4. It allows you to find categorized contacts fast.

PRESS 3 (from the Main Menu)

Now, assume we have sent out SAMPLE.LET to many of our contacts 
and would like to follow up the letter with a call. If we have 
sent out the letter to different contacts at different times, we 
need to follow up only the letters we have sent during a specific 
time range.

PRESS F (for (F)ind )

You will see;

FIND CALLBACKS/APPOINTMENTS/STATUS

Select (C)allbacks (A)ppointment (B)oth C&A (S)tatus (T)ime 
Prefix     
PRESS T

ENTER L (for Time Prefix to FIND)

Now you see that you can enter a start date (limit) and an end 
date within the search will be performed. No start or end date 
will get each record with the L time prefix.

ENTER 07/24/1988

ENTER 07/25/1988

CONTACT TRACKER will find and display the appropriate record.


Now, if your modem is installed you could press suboption D and 
autodial the entry you sent a letter to.  You could also press N 
and note that you followed up SAMPLE.LET on todays date. 

Suppose DOE'S wanted to set an appointment for 07/30/1988 at 2:00 
in the afternoon.

PRESS *
ENTER 07/30/1988
ENTER A14:00

PRESS C (suboption for (C)alender)
*Below the current month's calender you see several suboptions. 
Try them to see the result. You can go backward and forward 
months or years at a time. GET JULY 1988.

You note that the 30th of July 1988 is a Saturday. 

PRESS B (Back to Options)

PRESS E (to (E)xit)
PRESS RETURN
PRESS F
PRESS A
ENTER 07/30/1988
ENTER 07/30/1988

DOE'S comes to the screen.

PRESS F (to see if there are any other appointments that day.           
There are none.)
          
PRESS RETURN

GET BACK TO THE MAIN MENU (E and a Return)

**********************************************************
It is entirely up to you how to maximize the C|A Time and the 
Status fields. The Status field allows you to cubbyhole your 
contacts into 10 designations for organization and special 
output.

Recommended designations for STATUS field

0 Clients
1 Prospects
2 Vendors
3 Suppliers
4 Projects
5 Other
6 Other
7 Personal
8 Freinds
9 Family

Next, lets try option 4 from the Main Menu.

Option 4 prints labels on a standard (inexpensive) 1 inch by 3 
inch mailing label. These labels can be purchased through all 
stationary or computer stores. It will also let you do 3 or 4 
up labels but these labels and printers are not standardized to 
the point where 3 and 4 up labels are really practical. We 
suggest the 1 up label.

For our demonstration, you may simply use a sheet of paper if 
need be.

If you haven't already, PRESS 4

You will see;

Please ready the printer (hit key when ready) - flashing

HIT RETURN

You see;

(1)UP (3)UP (4)UP LABELS?

PRESS 1

You must get the printer on line. Not doing so will cause CONTACT 
TRACKER to exit completely.

Again there are options.

     Pressing A will print labels for all of your contacts no      
     matter what STATUS.
     Pressing R will print labels for a range of record numbers.
     Pressing S will, as with the letter merge option, print      
     labels for selected contacts whose data matches that which 
     you enter.

PRESS A

Labels are printed for all of your contacts. In addition, you are 
prompted;

WANT RETURN LABELS (Y/N)

A Y response will allow you to print any number of labels with 
any address you input from the prompts. (Our users print up return 
labels with their home address so at the end of the month they don't 
have to hand address.)

PRESS N

REPORTS: From the Main Menu;


PRESS 5 (for SORT and PRINT CONTACTS (ALPHA))

You will see;

Want to select STATUS field variable as qualifier (Y/N/(E)xit)

     An E exits you to the Main Menu.
     A N will sort all of your records regardless of the Status                     
     designation you assigned them. (great for phone listings)
     A Y will allow you to sort and print only the Status      
     designations you assigned.

PRESS Y

You will see;

ENTER CONTENTS OF STATUS FIELD TO MATCH (EXCLUDES OTHERS) 

PRESS 1

You will see another Menu;

SELECT FIELD TO SORT BY

                    0. RECORD NUMBER
                    1. COMPANY NAME
                    2. CONTACT NAME
                    3. CITY
                    4. STATE
                    5. ZIP CODE
                    6. PHONE NUMBER 
                    7. APPOINTMENT/CALLBACKS
                    8. EXIT TO MAIN MENU

Selection of fields 0-7 will sort your contacts by that field.
In other words, if you simply need output by Company Name, you 
press 1. 

PRESS 1

You will see;

(P)Listing (COMPANY-NAME-PHONE-NOTE) in ADDITION TO REGULAR 
ROSTER

     Answering P to this prompt will print you a phone list to 
     the printer in the sort order you indicated. The phone list is 
     a shortened version of the regular listing.







PRESS S 

(print to the screen - a return here rather than a S will cause 
output to go to your printer. And if you had pressed P for the 
phone list, the phone list will not be printed in addition to the 
roster since the listing to the screen can serve dual purposes. The 
phone list is only printed when you select to print a hardcopy.)

You see WEDGE printed to the screen.

PRESS ANY KEY

PRESS N (to select STATUS filed variable to match)

PRESS 5 (sort by zip)
PRESS S
  (The data base was sorted by zip code.)
PRESS ANY KEY


Now enter the following with the printer ON.

PRESS N
PRESS 1
PRESS P
PRESS RETURN

You will see;

Turn PRINTER ON, set TOF and hit any key
               (TOF means Top of Form)

WEDGE and DOE'S will print on both a Phone Listing and a Roster.

PRESS N
PRESS 7
PRESS S (OR RETURN if you you rather see the sort by           
          appointment/callback to go to the printer)
 
PRESS ANY KEY

Continue trying different things with the sort and print option.
When you are done....

GO TO THE MAIN MENU AGAIN.

PRESS 6 (from the Main Menu)

Option 6 (the Letter Merge with labels option) was covered 
briefly earlier on. To help you become familiar with its other 
options, try the following;

PRESS 2
ENTER MYLET.LET 

(CONTACT TRACKER will only recognize letters with a .LET file type 
designation. Naming a letter with a different file type extension 
will cause it not to show on your letter listing.)

Next you will see;

42 LINES(65 CHAR EA.)MAX.-GREETING LINE IS ALREADY PROGRAMMED 
Dear Firstname

To the right you will see an arrow designating the end of a line, 
the line you are currently on and the number of total lines for 
your letter.

CONTACT TRACKER will only allow a one page letter. Based on the 
principles of effective written communications, letters of 1 full
page or less are more frequently read and comprehended better 
than long letters. If you require more pages, we suggest you use 
CONTACT TRACKER to produce a cover letter and establish your 
additional pages as a document which can be photocopied more 
cost-efficiently.

CONTACT TRACKER will print Dear Firstname, automatically. See 
your letter we sent to DOE'S earlier.

CONTACT TRACKER in the letter mode acts the same as it did when 
you used the extended note suboption except you can type in lower 
case letters. 

Note that CONTACT TRACKER will change tone toward the end of each 
line. This indicates you must use a carriage return soon. The 
backspace key will rubout previously typed lines. 

We recommend that you follow the normal procedure for letter 
writing. 1. Write a rough first 2. Refine 3. Rewrite using 
CONTACT TRACKER. REMEMBER-THIS LETTER SHOULD BE CLEAR, 
CONCISE AND TO THE POINT. You will be sending it to many 
contacts.

After you have completed your letter, you will see;

IS THIS CORRECT (Y/N/Q=quit)

A Y sends it to disk and takes you back to the letter menu.
A N takes you back to the first line for re-editing.
A Q takes you back to the MAIN MENU and not the letter menu.

PRESS Y
PRESS 4 (view a letter)

Option 4 allows you to examine letters for subsequent selection 
for merging, further editing, deleting, etc.




Once you have read the portion of the letter displayed on the 
screen;

PRESS RETURN
PRESS RETURN AGAIN
PRESS 5 (to return to the Main Menu)
   

NOW THAT YOU HAVE HAD A SHORT TOUR OF CONTACT TRACKER, TRY ALL 
THE OPTIONS AGAIN. ENTER MORE CONTACTS. CHANGE THEM, SORT THEM, 
PRINT THEM, CALL THEM, AND WRITE THEM.

THE MORE YOU USE CONTACT TRACKER, THE BETTER YOU WILL GET, AND 
THE MORE YOU WILL ACCOMPLISH.

CONTACT TRACKER WAS CREATED TO BE SIMPLE TO USE AND TO LET YOU DO 
IT YOUR OWN WAY. WRITE US WITH YOUR REVELATIONS REGARDING CONTACT 
TRACKER. WE'LL BE HAPPY TO HEAR WHAT CREATIVE THINGS YOU HAVE 
DONE WITH CONTACT TRACKER.




































                        LICENSE AGREEMENT


0. SHAREWARE AGREEMENT - CONTACT TRACKER is the sole property of 
Charles W. Raymond and Wedge Marketing Communications. It is 
offered to you on a "trial and pay" basis and is subject to the 
following terms:

This is a legal agreement between you, the end user, and Charles 
W. Raymond and Wedge Marketing Communications. UTILIZATION OF 
CONTACT TRACKER MEANS YOU ARE AGREEEING TO BECOME BOUND BY THE 
TERMS OF THIS AGREEMENT. DO NOT RETAIN OR USE THE PROGRAM IF YOU 
DO NOT AGREE TO THESE TERMS. 

LICENSE
1. GRANT OF LICENSE. Given due consideration in the amount of 
fifty dollars ($ 50.00 U.S.), Charles W. Raymond and Wedge 
Marketing Communications grants you the right to use this copy of 
the CONTACT TRACKER program. You may not network CONTACT TRACKER 
or otherwise use it one more than one computer (i.e., a single 
CPU) at the same time. CONTACT TRACKER is owned by Wedge 
Marketing Communications and Charles W. Raymond and is protected 
by United States copyright laws and international treaty 
provisions. Therefore you must treat CONTACT TRACKER just like 
any other copyrighted material. 2. OTHER RESTRICTIONS. You rent 
or lease CONTACT TRACKER, but you may transfer it on a permanent 
basis (sell your own copy without retaining a copy for yourself 
if you have paid and registered yourself as an authorized user 
with Wedge Marketing Communications and Charles William Raymond) 
and if the person receiving it agrees to these terms.
3. INDEMNIFICATION. You agree to indemnify, hold harmless, and 
defend Wedge Marketing Communications and Charles W. Raymond from 
and against any claims, or lawsuits, including attorney's fees, 
that arise or result from use of CONTACT TRACKER.
           DISCLAIMER OF WARRANTY AND LIMITED WARRANTY 
CONTACT TRACKER and the materials included are provided "AS IS" 
WITHOUT ANY WARRANTY OF ANY KIND, EXPRESSED OR IMPLIED. THE 
ENTIRE RISK AS TO THE RESULTS AND PERFORMANCE OF CONTACT TRACKER 
IS ASSUMED BY YOU. Wedge Marketing Communications and Charles W. 
Raymond DISCLAIMS ALL WARRANTIES, EITHER EXPRESSED OR 
IMPLIED,INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF 
MERCHANTABILITY AND FITNESS TO A PARTICULAR PURPOSE, WITH RESPECT 
TO THE SPECIFIC PROGRAM (CONTACT TRACKER) AND WRITTEN MATERIALS. 
THIS WARRANTY GIVES YOU SPECIFIC LEGAL RIGHTS. YOU MAY HAVE 
OTHERS, WHICH VARY FROM STATE TO STATE. IN NO EVENT SHALL WEDGE 
MARKETING COMMUNICATIONS OR CHARLES W. RAYMOND BE LIABLE FOR ANY 
DAMAGES WHATSOEVER (INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS 
OF BUSINESS PROFITS, BUSINESS INTERRUPTION, LOSS OF BUSINESS 
INFORMATION, AND THE LIKE) ARISING OUT OF THE USE OF OR INABILITY 
TO USE THIS WEDGE MARKETING COMMUNICATION PRODUCT EVEN IF WEDGE 
MARKETING COMMUNICATIONS OR CHARLES W. RAYMOND HAVE BEEN ADVISED 
OF THE POSSIBILITY OF SUCH DAMAGES. CHECKS YOUR STATE LAWS FOR 
LIMITATION APPLICATIONS.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1880

     Volume in drive A has no label
     Directory of A:\

    A                    1   7-26-88  12:42p
    CAPNOTE            291   9-22-87  12:53p
    CORPSALE NOT       512   7-26-88   1:24p
    NOTATION DAT       780   7-25-88   2:51p
    ONR                  4   7-25-88   2:52p
    PPCNT                7  10-23-87   2:58p
    README   1ST      1280   7-26-88   1:23p
    README   2ND       406   7-26-88   1:21p
    SALESMGR NOT       896   7-26-88   1:25p
    SAMPLE   LET      3360   6-01-88   5:19p
    SETUP    DAT        60   7-25-88   2:52p
    SLIST              205   7-25-88   2:51p
    TRACKER  BAT        58   7-25-88   2:13p
    TRACKER  DOC     38019   4-06-90  10:13a
    TRACKER  EXE    135280   4-06-90  10:56a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       728   1-01-80   2:27a
    FILE1880 TXT      2221   7-13-90  11:28a
           18 file(s)     184146 bytes
                          124928 bytes free
