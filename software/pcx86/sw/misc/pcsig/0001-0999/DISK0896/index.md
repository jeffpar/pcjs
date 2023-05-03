---
layout: page
title: "PC-SIG Diskette Library (Disk #896)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0896/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0896"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "POCKET FILER/POCKET NOTES (ESYPL ON 1541"

    POCKET FILER and POCKET NOTES are two programs that make double-sided
    pocket address or note booklets from the entries in the program.
    
    Entries can be edited, deleted, sorted, searched, and saved.  Print a
    hard copy in a pocketbook format that will fit into a checkbook cover.
    Each program also allows you to page through and browse the records.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE0896.TXT

{% raw %}
```
Disk No:  896
Disk Title: Pocket Filer, Pocket Notes
PC-SIG Version: S1.2

Program Title: Pocket Filer & Pocket Notes
Author Version: 1.0
Author Registration: $25.00
Special Requirements: Printer.

POCKET FILER and POCKET NOTES are two programs that make double-sided
pocket address or note booklets from the entries in the program.

Entries can be edited, deleted, sorted, searched, and saved.  Print a
hard copy in a pocketbook format that will fit into a checkbook cover.
Each program also allows you to page through and browse the records.

File Descriptions:

PF       COM  POCKET FILER -- main program.
PN       COM  POCKET NOTES -- main program.
PF       DOC  Documentation for POCKET FILER.
PN       DOC  Documentation for POCKET NOTES.

PC-SIG
1030D East Duane Avenue
Sunnyvale, Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║         <<<<  Disk No 896 Pocket Filer, Pocket Notes  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print the documentation for POCKET FILER, Type:                      ║
║             COPY PF.DOC LPT1: (press enter)                             ║
║ To run the program POCKET FILER, Type: PF (press enter)                 ║
║                                                                         ║
║ To print the documentation for POCKET NOTES, Type:                      ║
║             COPY PN.DOC LPT1: (press enter)                             ║
║ To run the program POCKET NOTES, Type: PN (press enter)                 ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## PF.DOC

{% raw %}
```




                             POCKET FILER
                       by CBT Horizons (C) 1987




     Congratulations on your choice of POCKET FILER to manage your
business and or personal address records. POCKET FILER is the first
of The Personal Reference Set (PRS) series for managing personal data.

    ***********************************************************
    *                                                         *
    *    POCKET FILER is made available to you as shareware.  *
    *                                                         *
    *    You are encouraged to try it and if you like the     *
    *    functions it provides you please register with us;   *
    *                                                         *
    *    CBT Horizons, PO Box 1768, Montrose, Colorado 81402. *
    *                                                         *
    *    Please also pass copies along to interested friends  *
    *    and associates. In this way you can feel free to     *
    *    show and share with them this handy program that     *
    *    you enjoy. Then if they find it also usefull they    *
    *    are encouraged to register with CBT Horizons.        *
    *                                                         *
    *          The registration fee is $25.00.                *
    *                                                         *
    ***********************************************************

     The big plus with POCKET FILER is that you are not bound to your PC.
Whether you are at your PC's side or not, you will have complete access
to the records. If you need to locate an individual record simply refer
to the pocket size address book generated with POCKET FILER. Please note
that the booklet generated will slide into a standard check book cover
and then your pocket.


                          INSTALLATION

     Initially make a copy of the PF.COM file located on the disk
received. Locate this copy on your work diskette or appropriate
sub-directory on your hard disk drive. Then store for safe keeping the
distribution disk. For those using a hard disk drive we suggest that you
make a directory named 'PRS' for Personal Reference Set. Here you can
locate POCKET FILER and the other applications in the Personal Reference
Set series.


     To begin POCKET FILER simply enter 'PF' from the DOS prompt. The
opening screen clearly displays all of the operating commands that are
needed to begin. Initially you will need to start entering the address
records since an existing file does not exist. From the command menu
located along the bottom of the screen note that the function key F3
is for adding records to the file. F3 may be used whenever a record is
to be added.









                           F3 ADD

     Once F3 is pressed, you will see the field of the record to be
entered highlited. Also the command menu along the bottom of the screen
now list the supported entry commands. Within a field you may use the
left and right cursor keys to move left or right. Also the typeover or
insert modes can be selected with the INSERT key. The up and down cursor
keys allow you to move amongst the fields within the record for editing.
Once the entry is complete press F10 to exit the record entry routine and
return to the main command menu.


                     RECORD LISTING WINDOW

     Now you will notice that the last name and first initial of the record
just entered are displayed in the record listing window. As more records are
entered, these will also be displayed. To move the highlited bar within the
window use the commands displayed along the lower edge of this window. Besides
these, the HOME and END key commands are also supported. By moving the
highlited bar over the record of interest and pressing the RETURN key, the
record will be selected and displayed.


                           F2 SAVE

     Now that records exist these are saved by pressing the F2 function
key. After pressing F2 POCKET FILER will prompt you to enter the file name
where these records are to be saved. An extension to the name is not needed
since POCKET FILER will automatically append a '.ABK' to the end. In this
way when you look at the sub-directory listing you can identify which files
are associated with POCKET FILER.


                           F1 LOAD

     Once an existing file has been saved it can later be reloaded using
the F1 function key. POCKET FILER will prompt you for the file name to
be loaded. At this time you do not need to provide the files extension
(.ABK) to the name, POCKET FILER will do that for you. Files generated
can not exceed the size of 200 records. For need of a file larger than
200, break the file record into two or more logical subgroups.


                           F4 EDIT

     To edit your data base of records, select a file and then press F4.
This will put you in the edit mode which is identical to the ADD mode.
Here you can freely choose and move about within a field for editing.


                           F5 SORT

     To arrange the records in alphabetical order press F5. This sort routine
will rearrange the records from 'A' to 'Z' based upon the last name. If two
identical last names are located then the first names will be checked and the
placement made. Also note the a name with all capitals will be placed ahead
of the identical name which is entered with upper and lower case letters.









                           F6 SEARCH

     To rapidly locate an individual record press F6 for the search function
of POCKET FILER. You will then be prompted to enter the last name to search
for. Once a record is found matching the entered search name you may choose:

          1. To repeat the search (F6) for a subsequent match,
          2. To print the record found (F7) by the search, or
          3. To quit searching (F10) and return to the opening menu.


                           F7 PRINT

     The print function of POCKET FILER is where the double sided address
booklet is generated. Also record listings are supported without the comments
section. This allows for the generation of mailing labels. These labels
can be either last name or first name first. If a single record is needed
this is also supported here. Instructions for these print routines are
embedded and are displayed as the routine progresses.


                           F8 DELETE

     Press F8 to delete a record from the file. This does not effect the
data base as originally entered unless you SAVE the altered file when exiting
POCKET FILER. In this way an initial file can be narrowed down temporarily for
a limited mailing or booklet. When finished do not save the altered file,
resulting in the initial file still being complete.


                           F10 QUIT

     To quit POCKET FILER press F10. If you have altered the file initially
loaded and not saved your work, you will be prompted if you want to save your
work. At this prompt simply enter a 'Y' to go to the save routine or a 'N'
to directly exit without saving the altered file.









```
{% endraw %}

## PN.DOC

{% raw %}
```




                             POCKET NOTES
                       by CBT Horizons (C) 1987




     Congratulations on your choice of POCKET NOTES to manage your
business and or personal records. POCKET NOTES is the second program
of The Personal Reference Set (PRS) series for managing personal data.
    
    ***********************************************************
    *                                                         *
    *    POCKET NOTES is made available to you as shareware.  *
    *                                                         *
    *    You are encouraged to try it and if you like the     *
    *    functions it provides you please register with us;   *
    *                                                         *
    *    CBT Horizons, PO Box 1768, Montrose, Colorado 81402. *
    *                                                         *
    *    Please also pass copies along to interested friends  *
    *    and associates. In this way you can feel free to     *
    *    show and share with them this handy program that     *
    *    you enjoy. Then if they find it also usefull they    *
    *    are encouraged to register with CBT Horizons.        *
    *                                                         *
    *          The registration fee is $25.00.                *
    *                                                         *
    ***********************************************************
    
     The big plus with POCKET FILER is that you are not bound to your PC.
Whether you are at your PC's side or not, you will have complete access
to the records. If you need to locate an individual record simply refer
to the pocket size address book generated with POCKET NOTES. Please note
that the booklet generated will slide into a standard check book cover
and then your pocket.


                          INSTALLATION

     Initially make a copy of the PN.COM file located on the disk
received. Locate this copy on your work diskette or appropriate
sub-directory on your hard disk drive. Then store for safe keeping the
distribution disk. For those using a hard disk drive we suggest that you
make a directory named 'PRS' for Personal Reference Set. Here you can
locate POCKET NOTES and the other applications in the Personal Reference
Set series.


     To begin POCKET NOTES simply enter 'PN' from the DOS prompt. The
opening screen clearly displays all of the operating commands that are
needed to begin. Initially you will need to start entering the
records since an existing file does not exist. From the command menu
located along the bottom of the screen note that the function key F3
is for adding records to the file. F3 may be used whenever a record is
to be added.











                           F3 ADD

     Once F3 is pressed, you will see the field of the record to be
entered highlited. Also the command menu along the bottom of the screen
now list the supported entry commands. Within the field you may use the
cursor keys to move left, right, up or down. The typeover or insert
modes can be selected with the INSERT key.

Once the entry is complete press F10 to exit the record entry routine and
return to the main command menu.


                     RECORD LISTING WINDOW

     Now you will notice that the name of the record just entered
is displayed in the record listing window. As more records are
entered, these will also be displayed. To move the highlited bar within the
window use the commands displayed along the lower edge of this window. Besides
these, the HOME and END key commands are also supported. By moving the
highlited bar over the record of interest and pressing the RETURN key, the
record will be selected and displayed.


                           F2 SAVE

     Now that records exist these are saved by pressing the F2 function
key. After pressing F2 POCKET NOTES will prompt you to enter the file name
where these records are to be saved. An extension to the name is not needed
since POCKET NOTES will automatically append a '.NBK' to the end. In this
way when you look at the sub-directory listing you can identify which files
are associated with POCKET NOTES.


                           F1 LOAD

     Once an existing file has been saved it can later be reloaded using
the F1 function key. POCKET NOTES will prompt you for the file name to
be loaded. At this time you do not need to provide the files extension
(.NBK) to the name, POCKET NOTES will do that for you. Files generated
can not exceed the size of 50 records. For need of a file larger than
50, break the file record into two or more logical subgroups.


                           F4 EDIT

     To edit your data base of records, select a file and then press F4.
This will put you in the edit mode which is identical to the ADD mode.
Here you can freely choose and move about within a field for editing.


                           F5 SORT

     To arrange the records in alphabetical order press F5. This sort routine
will rearrange the records from 'A' to 'Z' based upon the name. Also note
that a name with all capitals will be placed ahead of the identical name
which is entered with upper and lower case letters.










                           F6 SEARCH

     To rapidly locate an individual record press F6 for the search function
of POCKET NOTES. You will then be prompted to enter the name to search for.
Once a record is found matching the entered search name you may choose:

          1. To repeat the search (F6) for a subsequent match,
          2. To print the record found (F7) by the search, or
          3. To quit searching (F10) and return to the opening menu.


                           F7 PRINT

     The print function of POCKET NOTES is where the double sided note
booklet is generated. If a single record is needed this is also supported
here. Instructions for these print routines are embedded and are displayed
as the routine progresses.


                           F8 DELETE

     Press F8 to delete a record from the file. This does not effect the
data base as originally entered unless you SAVE the altered file when exiting
POCKET NOTES. In this way an initial file can be narrowed down temporarily for
a limited listing or booklet. When finished do not save the altered file,
resulting in the initial file still being complete.


                           F10 QUIT

     To quit POCKET NOTES press F10. If you have altered the file initially
loaded and not saved your work, you will be prompted if you want to save your
work. At this prompt simply enter a 'Y' to go to the save routine or a 'N'
to directly exit without saving the altered file.









```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0896

     Volume in drive A has no label
     Directory of A:\

    FILE0896 TXT       880   9-28-89   9:10a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848   9-12-89   3:52a
    PF       COM     38922   9-02-87   7:55p
    PF       DOC      7277   8-30-87   3:40p
    PN       COM     34031   9-03-87   7:14p
    PN       DOC      6866   8-30-87   3:35p
            7 file(s)      88862 bytes
                           69120 bytes free
