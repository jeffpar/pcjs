---
layout: page
title: "PC-SIG Diskette Library (Disk #3121)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3121/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3121"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CONVERT5.DOC

{% raw %}
```

 If you have existing names in Brother's Keeper data files from version 4.0,
 4.1, 4.2, 4,3, or 4.5, then you will need to run the CONVERT5 program one
 time in order to convert the data files into the new format used by version
 5.0 of Brother's Keeper.  The CONVERT5 program will read your existing data
 files and create new data files that version 5.0 can read.  The CONVERT5 
 program will NOT erase or change your old data files - it just reads them 
 when creating new version 5.0 data files.  After you convert to version 5.0, 
 and after you verify that version 5.0 is working correctly, you may remove 
 the old version 4 data files from your hard disk if you wish.  Before 
 removing your old data files, be sure you have a copy of them on diskettes, 
 and save the diskettes for several months in case there is any need for them. 

 If you have used text files to hold message lines for people (if you have 
 used $$FILENAME in a message line) then you will need to copy the text files
 over to the new area that contains the version 5.0 data files.  You should 
 use the DOS COPY command to copy text files from one directory to another.

 Before you start CONVERT5, you should know where the version 4 data files are 
 located (what is the name of the subdirectory) and you should know where you 
 want to place the version 5.0 data files.  As an example, you might currently 
 have your version 4 data files in a subdirectory called C:\BK and you might 
 want to create the version 5.0 data files in a directory called C:\BK5 or 
 perhaps you have your existing data files in C:\DATA and maybe you want to 
 create the new version 5.0 data files in the same C:\DATA subdirectory. If 
 you do not know where your existing version 4 data files are located, look in 
 the subdirectory that contains the version 4 programs or look in the 
 subdirectory that you are "in" when you start BK version 4 or 4.5.  The 
 version 4 data files have names that end with .DT4 (for example 
 FAMLFILE.DT4).  It is possible that you have FAMLFILE.DT4 in more than one 
 subdirectory.  If you do a DIR and it shows a file length of 0 (zero), then 
 that is not the correct subdirectory.  If in doubt, you may look at the file 
 by typing: TYPE FAMLFILE.DT4 <enter> and that will display the names on the 
 screen.  When you are running BK version 4 or 4.5, the option screen number 1 
 will contain the "path" for the data files.  If the "path" is blank, then the 
 data files are located in the "current" subdirectory (that is, the 
 subdirectory you start the program from.) 

 OK, assuming you know where your existing data files are located, the only 
 other thing you need to know is whether or not you used the "check" fields in 
 version 4 or 4.5.  If you did, then you will need to decide where to put them 
 when you run CONVERT5.  Version 5 has "source" lines for each date and 
 location.  You can have three full lines of "source" information and you also 
 have a "page" field.  If you have put information such as "yes" or "no" in 
 the check fields, or if you have put page numbers in the check field, then you 
 would choose to move the check fields to the "page" fields.  If you have put 
 some sort of code information in the check fields, such as "B101" which is a 
 code you made up to refer to a "source" for the information, then you should 
 choose to move the check fields to the first "source" line.  The utility 
 program will let you change each source to a new source - for example you 
 could use the utility program to change source "B101" to "Barnes Family 
 History, written by Jack Barnes, published 1982, in possession of Joe Doe".
 This might all be more clear after you use version 5.0 for an hour, so pick
 what you think is the right answer for your situation, and if you find it is 
 not correct, you could run CONVERT5 a second time and erase the version 5 
 data files and pick the other choice for the check fields.

 To start CONVERT5, change to the directory that contains the version 5.0 
 programs and type CONVERT5 and enter.  It will take a while if you have a lot 
 of names.  After converting, you may start BK version 5.0 by typing BK5 and 
 enter.

```
{% endraw %}

## REGISTER.DOC

{% raw %}
```

   To: John Steed                              Date _______________________
       6907 Childsdale Rd
       Rockford, MI  49341   U.S.A.

         I have version 5.0 of Brother's Keeper.  (11/30/91)
    __
   |__|  I would like to become a Registered user.  Enclosed is a check for
         $45 (U.S. check or Canadian check in U.S. funds) or MasterCard or VISA
         number and expiration date.  Please send me the printed manual
         and the current version of the programs. ($45 includes all programs.)
    __
   |__|  I have data in Brother's Keeper version ________  Please send the
         CONVERT5 program also.
    __
   |__|  Please send information on genealogy computer bulletin boards.
    __
   |__|  I have data in  ___Genealogy on Display   ___FHS   ___Linkages and
         would like a program to transfer the data to Brother's Keeper.
    __
   |__|  Send the program in __French   __German   __Danish   __Polish   __Dutch
           __Swedish   __Finnish   __Norwegian
           (Translations are available in version 4.5 now and some will not be
           available in version 5.0 until after February 1992.)
         __send the translation program so that I may translate to ____________

         I am using the program on the following type of equipment.

         Computer brand _________________________ Do you have a modem? _____

         Amount of RAM memory     384     512      640     _________

         Hard disk?          Yes        No

         Diskette size preference      3 1/2      5 1/4

         Monitor             mono       color -  CGA     EGA     VGA

         Printer      __________________________

   Name / Address     ______________________________________________

                      ______________________________________________

                      ______________________________________________

                      Country ______________________________________

   Comments and suggestions:  _________________________________________________

   ____________________________________________________________________________
   use back side also

   (Thank you very much for responding.  John)

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3121

     Volume in drive A has no label
     Directory of A:\

    DISK     ID         50   2-24-92   2:41p
    BKREP5   EXE    105102   2-19-92  10:50p
    BK5DOC   EXE     56571   1-08-92  10:37a
    BKUTIL5  EXE     94737  11-25-91   9:04p
    REGISTER DOC      2228  11-29-91   9:00p
    BKBOX5   EXE     91979  11-29-91   2:58p
    CONVERT5 DOC      4262  11-30-91   3:41p
            7 file(s)     354929 bytes
                            3072 bytes free
