---
layout: page
title: "PC-SIG Library Disk #1146"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1146/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1146"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOGIN"

    LOGIN restricts access to the computer by requiring each user to
    enter an authorized user name and password.
    
    A menu with up to 45 choices is then displayed from which each person
    can execute programs and DOS commands.  Users can temporarily exit the
    program to DOS, to do other functions.  If nothing is done by the user
    after a certain amount of time, LOGIN automatically logs off the user
    and blanks the computer screen.  Each time a user makes a selection,
    LOGIN asks whether it is for business or personal use and the user is
    allowed to make a short comment.  After the user is done and logs off,
    LOGIN records everything that was done into a special text file.  This
    text file lists the user's name, date and time of each action, menu
    choice that was selected, whether or not it was for business or personal
    use, and a short comment by the user.  LOGIN automatically creates
    separate monthly log files, according to the date entered when the
    computer boots up.
{% comment %}info_end{% endcomment %}


### Directory of PC-SIG Library Disk #1146

     Volume in drive A has no label
     Directory of A:\

    AUTH     ID        128   4-20-88   9:33p
    AUTOLOG  TXT        23   4-10-88   9:14a
    C        BAT        13   5-10-88   7:26a
    FILE1146 TXT      2293  10-07-88   9:16a
    FILES    DOC       896   4-22-88   6:00a
    GO       BAT        38  10-03-88   3:35p
    GO       TXT       540  10-03-88   3:39p
    INITIAL  EXE     54145   5-07-88   9:34a
    INSTALL  BAT       384   4-20-88   9:39p
    LN1      TXT        19   4-20-88   9:31p
    LOG      EXE     65899   5-08-88   7:54p
    LOG      INI       256   5-01-88   9:55a
    LOGIN    ARC    112320   5-14-88   7:47p
    MANUAL   BAT       152  10-03-88   3:36p
    MENU     1         128   4-20-88   9:30p
    README   DOC      9594   5-14-88   7:47p
    REGISTR  LOG        20   5-07-88   9:32a
           17 file(s)     246848 bytes
                           63488 bytes free
