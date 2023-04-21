---
layout: page
title: "PC-SIG Diskette Library (Disk #3122)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3122/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3122"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.DOC

{% raw %}
```

Corrections or additions to the BK5 documentation as of 14-NOV-1991

The printed manual says you need the line FILES=20 in your CONFIG.SYS file.
Actually, two of the programs require that you have FILES=28 in the file.  The
INSTALL program will do this for you as BK5 is installed.

Brother's Keeper starts with a batch file called BK5.BAT.  If you need to 
return to a menu system on your computer, you could add line to the bottom of 
the BK5.BAT file (if your menu system does not restart automatically).

On group sheet, where is says "Print Today's Date  Yes No Age", if you answer
A for age, then it will print each person's current age, or age at death. 

To print mailing address labels for everyone that has them, first get the 
alignment of the labels correct in your printer by going to the Modify screen 
and displaying a mailing address and pressing CTRL-L to print some test 
labels. Then go to the main menu and pick N for names and then 2 for everyone 
or 3 and then 5 for everyone in alphabetical order or just the descendants of 
one person.  Then print a custom report that has only a field of 95.  In other 
words, the custom report would have 95 at the top and the rest would be zeros. 
Then press F1 to print the report.  It will print mailing labels for all the 
selected people (if they have an address entered).  The lines that print on 
the label, and the size of the label are set on option screen #3.

In the Tree routine and the Box routine, you have the option to have the 
descendant's names changed to uppercase and the spouse's names changed to 
lowercase.  If you answer "N" to that question, all names will print exactly 
the way you entered them.  If you answer "Y", the descendant names are forced 
to uppercase and the spouse names will be changed to lowercase (unless the 
first part of the spouse names are already in lowercase, in which case the 
spouse names are not changed.)  There are three new options for this question. 
These new options may be useful to you if you have entered people's names with 
the last name uppercase.  For example, if you entered names like this: 
Gerald R. FORD.  The new options are to enter "3" or "4" or "5" when asked if 
you want uppercase/lowercase.  If you answer "3" then the descendant name will 
be forced to uppercase and the spouse name will be left as is.  If you answer 
"4" then the descendant name will be left as is, but the spouse name will be 
forced to lowercase (even if the first part is already lowercase.)  If you 
answer "5" then the descendant name will be forced to uppercase and the spouse 
name will be forced to lowercase (even if the first part is already 
lowercase).  So the "5" option is just like "Y" except "Y" will not force a 
spouse name to lowercase if the first part (somewhere in the first 15 
characters) contains a lower case letter.  

The field below marriage date and other date says "Marriage ceremony Y/N."  
You may leave that field blank if you wish.  However, if you put an "N" in 
that field, then the couple will be treated as not married when printing the 
reports.  For example, it will not print the words "husband" and "wife" on the 
group sheets, and it will not put "m." on the tree charts.  The field for
"End year" is the year the marriage ended in divorce or separation.

In the Group sheet routine, where it says "Omit blank date/location lines" if
you answer "N" then it will print all fields including the new "Marriage
ceremony" and "Divorce" and "End" fields for the marriage information.  If you
do not want to print that new line if it is blank, then answer "3" for that
qestion.  If you do not want to print that new line whether it is blank or not 
blank then answer "4" and it will never print.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3122

     Volume in drive A has no label
     Directory of A:\

    DISK     ID         52   2-24-92   2:41p
    BKAA5    EXE    100353   1-08-92  10:42p
    BKSPLIT5 EXE     66499   1-12-92   1:58p
    LANGUAGE BKR     10896   1-08-92   2:23p
    README   DOC      3802   1-07-92   9:17p
    BKMERGE5 EXE     63832  11-27-91  10:47p
    LANGUAGE BKU     19983   2-12-92   3:01p
    BKBOX45  EXE     90945  11-29-91   2:58p
            8 file(s)     356362 bytes
                            2048 bytes free
