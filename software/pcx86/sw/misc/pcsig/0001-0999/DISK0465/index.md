---
layout: page
title: "PC-SIG Diskette Library (Disk #465)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0465/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0465"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "FAMILY TIES"

    The FAMILY TIES Genealogy program is designed for the organized
    compilation of personal genealogical information.  All of the names
    entered in this program are automaticaly linked to each other.  Starting
    with one individual (usually yourself) use the edit mode to enter your
    information.  Then add a person linked to this first individual eg.
    parents, spouse, other spouse or child and enter their information.  You
    may start with any male person and then ancestors or decendants may be
    added in any order.  You may jump around and add as you please.  This
    program also does a nice job printing out a family tree.
    
    This program also has an optional mode which conforms to the preferences
    of the Church of Jesus Christ of Latter Day Saints (LDS) and maintains
    records according to sealings, baptisms, endowments, and temple dates.
    Other history of relatives can be entered in the record for every
    person covered.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES465.TXT

{% raw %}
```
-------------------------------------------------------------------------
Disk No 465   FAMILY TIES                                       v1.1 DS2
-------------------------------------------------------------------------
A genealogy program for genealogists to simplify their work.  It is
designed for the organized compilation of personal genealogical
information.
 
COPYPROG BAT  Batch program to copy the program files
FGRSH    INS  Messages file
FT       EXE  The main FAMILY TIES program
FTCOLOR  DAT  Data file containing color settings
FTDEMO   EXE  Demo/tutorial program
FTINSTAL DAT  Printer data used by the installation program
FTINSTAL EXE  Installation program for FAMILY TIES
LICENCE  DOC  Information on the licence for the program
MANUAL        The user manual/documentation text file (20 pages)
NAMES    DA1  Database constants
NAMES    NTS  Blank notes file
PRINT    CTR  Printer control file
README        Information regarding the files on this diskette
README   BAT  Batch file to display the README file
REGISTRN FRM  Text file of the Registration form
UPDATE   DOC  Information on how to uppdate early versions
UPDATE   BAT  Batch program to update early versions of Family Ties
USER-NO  EXE  Program to change the USER number encoded in a FAMILY TIES
              master disk.  For use when registering as a user.
QUERY    COM
```
{% endraw %}

## LICENCE.DOC

{% raw %}
```
                                 LIMITED LICENCE

        The copyright owner,  E.  Neil Wagstaff, hereby permits anyone to 
        copy the original FAMILY TIES master disk and to give the copy to 
        another, subject to the following conditions:

        1. No fee or consideration whatsoever shall be charged for the copy.
        2. The recipient must be given a copy of the UNMODIFIED ORIGINAL disk.
        3.  If the FAMILY TIES program is included with ANY other product 
            or  service  for which a charge is made then,  the  recipient 
            must  be informed that there is no charge for the FAMILY TIES 
            program  AND the billing supplied to the customer must  show:      
                FAMILY  TIES program ..............  No charge.
            Also  copies  of FAMILY TIES must be made  available  without 
            charge or obligation to any customer who requests a copy.

        A  $150  ROYALTY  FEE  will be payable  for  each  copy  sold  or 
        distributed   BUT  if  ALL  these  conditions  are observed  then
        NO ROYALTY will be payable.
        ( That is - follow the rules and you may give away free copies )
        NOTE:  The  recipient is expected to supply or pay for  the  disk 
        media  onto which the program is copied but no 'copying' fee  may 
        be charged.
```
{% endraw %}

## UPDATE.DOC

{% raw %}
```
                  UDATING OLD FAMILY TIES DATABASES
Use with VER 1.10 through VER 1.14  to update to VER 1.15
         [If you are using ver 1.00 to 1.09 then call for instructions.]

Overview of what to do:
Since changes have been made to all the program files a full re-install
is necessary.  Use VER 1.15 to create a new database using the same
name as was originally used.  DELete the 4 new data files and copy in the 
4 old data files.  NOTE: comments are in square brackets []

These are the steps:   (for floppy disks)
PLACE A WRITE PROTECT TAB ON THE NOTCHES IN THE OLD PROGRAM & DATA DISKS.
Use COPYPROG to copy the program files from the master disk to a formatted
disk with DOS installed. Format a second blank disk without DOS for data.
   All these files must be present on the program disk:
FT.EXE        PRINT.CTR    NAMES.DA1    FTINSTAL.EXE   COMMAND.COM(optional)
FTCOLOR.DAT   FGRSH.INS    NAMES.NTS    FTINSTAL.DAT
Enter  FTINSTAL<ret>     [to create a new database - use same name as old]
Enter DEL *.DA?<ret>     [delete the 2 new data files from the program disk A:]
Remove the new data disk from B:
Place the OLD program disk in B:
Enter  COPY B:*.DA?<ret>   [copy the old data from the old program disk]
Place the new data disk in A: and the OLD data disk in B:
Enter DEL A:*.*<ret>            [delete the new empty data files]
Enter COPY B:*.*/V<ret>         [copy the OLD data files to the new data disk]
The NEW program and data disks are now ready.
Save the OLD disks in case of error.

For HARD DISK users
BACK-UP the 4 OLD data files to floppy disks (or tape)
Create a new subdirectory on the hard disk (C:) & default to it
copy the master disk to the new subdir
enter   FTINSTAL<ret>
Create a new database using the same name used with the OLD data
DELete the 4 NEW empty data files
copy the OLD data files from their sub directory to this new subdir
CD to the old data subdir and delete all the files (if the data is backed up)

ALTERNATIVE
===========
There is a file UPDATE.BAT which will automatically step you through all the
above steps.  PLACE WRITE PROTECT TABS ON YOU OLD PROGRAM & DATA DISKS or if
using a HARD DISK THEN USE BACKUP TO BACKUP THE 4 DATA FILES.
FLOPPIES: Make a program disk & a blank data disk as described above.
HARD DISK:create a new subdir for the 1.15 version & default to it.
place the new program disk in A: and enter
       UPDATE DBNAME<ret>
where DBNAME is the name of the OLD database files
Follow the instructions on the screen NOTE: a CTRL-BREAK will abort anytime
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0465

     Volume in drive A has no label
     Directory of A:\

    FT       EXE     85938   2-23-86   8:21p
    FGRSH    INS      3072   2-05-86   3:04p
    FTCOLOR  DAT       128   1-26-86   3:39a
    PRINT    CTR      4736  10-25-85   6:35p
    UPDATE   DOC      2688   2-03-86   9:37a
    FTDEMO   EXE     62976   8-02-85  10:29p
    FTINSTAL DAT      1536   1-30-85   7:22p
    FTINSTAL EXE     53370  12-31-85   1:01p
    NAMES    DA1      1152   5-04-84  10:12p
    NAMES    NTS       257   1-06-84   4:14p
    README   BAT       128  10-25-85   6:30p
    USER-NO  EXE     21760   8-04-85  11:29a
    LICENCE  DOC      1408   2-03-86   7:15a
    QUERY    COM        99   1-03-86   7:07a
    REGISTRN FRM      2944   2-02-86   6:08p
    README            1792   2-03-86  10:26a
    MANUAL           61952   2-09-86  11:11a
    UPDATE   BAT      7552   2-08-86   7:41a
    COPYPROG BAT      1280   2-16-86   9:43a
    FILES465 TXT      1380   4-09-86  12:53p
           20 file(s)     316148 bytes
                           34816 bytes free
