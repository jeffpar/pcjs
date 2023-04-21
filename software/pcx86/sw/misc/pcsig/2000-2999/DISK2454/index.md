---
layout: page
title: "PC-SIG Diskette Library (Disk #2454)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2454/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2454"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "CHURCH VISITATION SYSTEM"

    CHURCH VISITATION SYSTEM helps anyone active in their church keep track
    of their church contacts--visits, phone calls, or letters. Several
    information formats help you keep track of those who need you the most.
    
    Printouts can be generated in the form of 3x5 or 4x6 cards, mailing
    labels, full contact lists or selected contact lists for organized
    follow-up and mailings. And anyone can learn this simple system.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CVS.DOC

{% raw %}
```
                     CHURCH VISITATION SYSTEM DOCUMENTATION

 ==============>> (Press ESCape to return to the Main Menu) <<===============

              Thank you for using the Church Visitation System !!
              If you have questions, need help or would like to
              make suggestions about the Visitation System please 
              contact:

                           SonShine Software, Inc.
                           P. O. Box 4761
                           Dublin, Georgia  31040

                      (912) 272-1714   (9am - 4pm, EST)

                    Copyrighted (c) by Ronald Bryan Byxbe

 ============================================================================

                         1.  General System Concepts
                         2.  What Happens On Each Screen
                         3.  Problem/Error Resolution

           ********************************************************


1.  General System Concepts

        The Church Visitation system (CVS) is designed to help you keep
        track of all your contacts.

        Within the Visitation System, you simply enter all your people.
        Each time a visit is made you can record the visit, or contact,
        along with pertinent information, and notes about the visit.


           ********************************************************


2.  What Happens On Each Screen.

    a.  Documentation Menu

        1.  View Documentation - displays this documentation file.

        2.  Print Documentation - prints this documentation file.

        3.  Print Order Form - prints an order form.

    b.  Contacts Database

        1.  Overview

            The contacts database is a file of all your contacts.  They
            should be entered into the file by LAST NAME then FIRST NAME.

            Example:  Byxbe, Ronald

            This will insure that they display in alphabetical order.

        2.  Menu Keys

            a. Add - allows you do add a new contact.

            e. Edit - allows you to change information about the contact.

            d. Delete - allows you to delete this contact.

            p. Print - this will display a menu with the following choices.

               1.  3x5 Cards
               2.  4x6 Cards
               3.  Contacts List
               4.  Labels - always printed in zip code order for mailing.

            f. Find - allows you to go directly to a desired contact record
               by entering part of the contacts name.

SELECT ==> s. Select - this will display all the visitation records for
               this contact.  If no records are found then a screen will
               be displated asking if you would like to add a new record.

               This option can also be selected by press the ENTER KEY.

               TRANSACTION OPTIONS:

               Add - will add a new contact transaction

               Edit - allows change of contact transaction

               Delete - allows deletion of transaction

               Notes - here you can input general notes about this
               particular visit or contact.  This is generally were
               we tell what happened on the visit.

               Help - displays a help screen.


            t. Tag - The tag option will tag certain records to be
               printed.  Only the records tagged will print.  There
               are three options when using the tag.  Current, All,
               and Selected.

               Selected Tag.  On this screen you will select certain
               fields to be tagged.  If you wish to ignore a certain
               field the leave the field blank.  Date fields are
               initialized to 01/01/80.  This is considered to be
               blank.

               After you have tagged the records you desire you
               can select the print option.

            u. UnTag - This option will Untag all records

            n. Notes - this is where you can type general notes about
               the contact.  At this time the notes will not print.

            ?. Help - displays a help screen

    c.  Display Contacts
        1. Edit - changes a transaction record
        2. Delete - deletes a transaction record
        3. Notes - changes or displays notes
        4. Print - prints report as shown on screen

    d.  Contacts by Date
        1. Edit - changes a transaction record
        2. Delete - deletes a transaction record
        3. Notes - changes or displays notes
        4. Print - prints report as shown on screen

    e.  ReIndex Data Files

        This option should be taken if you delete a lot of records over
        a period of time.  "A Lot" can be defined several ways.  We will
        define it as 10% of the database or 10 to 50 records.

        The ReIndex option will remove all deleted records from the file
        and place the file back into sorted order.

    f.  Edit System Record

        This option is used to record the Name, Address, City of
        your church.  It is also where you input your monitor type.

    g.  Quit to DOS - Exits the program.


3.  Problem/Error Resolution

    a.  System Locks up while loading
    b.  Error 100
    c.  Error 212
    d.  Corrupted Index File

    Correction to the above errors can be done by deleting all the index
    files for the program.  The system will rebuild the index files the
    next time you call it up.

    To delete the index files simply do the following.

    ===>  Go to the directory where you loaded the program

          cd\cvs    if cvs is the directory

    ===>  Delete all index files

          DEL *.IN?  <enter>

    ===>  Call up the program

          CVS

```
{% endraw %}

## FILE2454.TXT

{% raw %}
```
Disk No: 2454                                                           
Disk Title: Church Visitation System                                    
PC-SIG Version: S1                                                      
                                                                        
Program Title: Church Visitation System                                 
Author Version: 4.02                                                    
Author Registration: $49.00                                             
Special Requirements: 640K RAM and hard disk.                           
                                                                        
CHURCH VISITATION SYSTEM is designed to keep track of church contacts   
made by visits, phone calls, or letters. Simply enter the pertinent     
information and necessary notes each time a visit is made. Printouts    
in the form of 3x5 or 4x6 cards, mailing labels, full contact lists or  
selected contact lists can be generated for organized follow-up and     
mailings. And an extra plus is that anyone can learn this system, making
it even more possible to keep track of the ones who need you most.      
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2454

     Volume in drive A has no label
     Directory of A:\

    CVS      EXE    328464   6-07-90   9:24a
    CVS      DOC      5876   6-03-90   9:12a
    TRANS    HLP       459   6-03-90   9:33a
    CONTACT  HLP      1344   5-24-90   3:38p
    CONTACTS HLP       207   6-03-90   9:34a
    INSTALL  BAT        24   6-03-90   9:40a
    INSTALL  CVS       545   6-03-90   9:41a
    PROSPECT DBD      1591   6-03-90   9:57a
    PROTRANS DBD       493   6-03-90   9:57a
    PROTRANS DBM      2172   6-03-90   9:57a
    PROSPECT DBM      1784   6-07-90   8:44a
    FILE2454 TXT      1629  10-25-90   5:22p
    GO       BAT        40   1-01-80   6:00a
    GO       TXT      1002   1-01-80   2:04a
           14 file(s)     345630 bytes
                            9216 bytes free
