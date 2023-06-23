---
layout: page
title: "PC-SIG Diskette Library (Disk #3955)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3955/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3955"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```

                          ┌────────────────────────────┐
                          │  { MONEY & BANKS }  v1.4a  │
                          │  Personal Banking Manager  │
                          └────────────────────────────┘

  { MONEY & BANKS }  *must*  be installed on a hard drive.    Do not attempt
  to install to, or run the program on, a floppy drive.

  To install  { MONEY & BANKS }, type:

                 A:INSTALL <Enter>     or     B:INSTALL <Enter>

  There  *must* be at least 1.4MB of free space available on the target hard
  drive or the install process will be incomplete, with indication of an er-
  ror and an exit to DOS.   After installation, the program  uses about 880k
  of space.   The install process will create a directory on the destination
  drive, the default selection being  \MONEY.   The install process does NOT
  modify your path, autoexec.bat, or config.sys.

  For users UPGRADING from any previous version,  answer  "N"  or  no to the
  prompt asking if this is a new installation.   Answering "N" will  replace
  all needed files EXCEPT data tables that you have been working on.    Your
  data tables will remain intact and usable with upgrade versions.    Please
  retain a current backup of your  \MONEY  directory(ies)  before performing
  the upgrade.

  NEW USERS without a previously installed copy  of  { MONEY & BANKS }  must
  answer "Y" to the prompt asking if this is a new installation.

  UPGRADE users may need to reselect their default printer (on the Utilities
  menu) as the printer codes table is replaced with the latest version.   If
  you have edited the printer codes table, please retain a backup.

  The four files included in this package are:
      README.TXT (this file)     INSTALL.EXE     __001.EXE       __002.EXE

 ┌───────────────────────────────────────────────────────────────────────────┐
 │ The following paragraph relates *ONLY* to bulletin board downloads:       │
 │  If this program has been downloaded from a BBS,  the four files may  be  │
 │  moved to a diskette from which INSTALL.EXE is to be used,  as indicated  │
 │  above.  You may also run INSTALL.EXE from your downloads directory *IF*  │
 │  you are installing to a *DIFFERENT* logical drive from the one in which  │
 │  INSTALL.EXE exists.  Do not attempt to install TO a floppy drive.        │
 └───────────────────────────────────────────────────────────────────────────┘

  After installation, read the documentation MONEY.DOC for further installa-
  tion options, as well as usage of the program.   You will be given an opt-
  ion to print out the documentation (about 42 pages) during installation.

  In the program itself,  press <Alt-M> to access the on-line documentation;
  <F1> brings up context-sensitive help.

  In your Config.sys file, you must have the FILES=  statement set at 30  or
  greater (ie, FILES=30). (If you are not sure how to do this, you will find
  complete instructions in the Question & Answer section at the end  of  the
  main documentation file, Money.doc.)


  After a *NEW* installation,  the following 15 files must be present in the
  \MONEY directory for a complete installation:

      ALLOCATE.DBF      ARCHIVE .DBF      CARDS   .DBF      MONEY   .DOC
      MONEY   .EXE      PNAMES  .DBF      PRINTER .DBF      REGISTER.DOC
      SAMPLE  .BNK      SECUR   .DBF      _2OVERL .EXE      _ADMIN  .DBT
      _ADMIN  .PCX      _ADMIN  .RO       _MASTER .RO

  Several index files will be built when the program first executes.


  Changes in v1.3:    <Alt-S>  calls up the new  { MONEY & BANKS }  Appoint-
  ments Scheduler.    "Add a New Account" and "Label Writer" have been moved
  from the Main Menu to the Utilities Menu.     The "About" screen has a new
  item.  There were numerous behind-the-scenes improvements in v1.3.

  Changes in v1.4a:  Fixed potential problems when adding multiple (more than
  a few dozen) new PCode (actually, any table) entries at one time  in  Form
  View.   Consecutive additions may now be made by the dozens,  hundreds  or
  thousands, if need be.   Due to several requests by registered users,  the
  color scheme of most screens in Table View has been changed  back  to  the
  original color combination (that in v1.2 and prior).  There are additional
  minor changes in v1.4a.


  Our sincere thanks go out to all the many registered users who  sent  such
  kind comments (and occasionally a suggestion) along with  their  registra-
  tions.   The many complimentary remarks  are  deeply  appreciated  by  our
  programmers, and *every* suggestion has been given serious consideration.


  (C) Copyright MCMXCIII RCCO Research Associates.




  <<  Please SHARE this program.   UPLOAD it to your favorite bulletin board.
      MAIL it to a vendor that doesn't list it.  DONATE it to your user group
      library.  GIVE it to a friend or colleague.  >>




Possible problems with DOS 6.0
───────────────────────────────
If you are using DOS 6.0 and are utilizing the  EMM386  memory  manager  that
comes with DOS 6.0,  the potential for system lockups exists in running  this
or other programs which use expanded memory.

If the user installs DOS 6 and uses the MEMMAKER utility to help load  things
high it will ask if there are programs that  use  EMS.   If  you  answer  NO,
MEMMAKER will add the NOEMS  parameter  to  the  EMM386  driver  line,  which
increases the amount of high memory by 64K  (i.e.,  the size of the pageframe
- nice if you have lots  of  drivers  to  load  high).   Unfortunately,  this
parameter has a different meaning with DOS 6 than it did with DOS 5.

If problems should occur and you are using the NOEMS parameter on the  EMM386
line in your config.sys file, add the parameter NOVCPI after NOEMS.  Save the
change and reboot.  It has  also been suggested that you might omit the NOEMS
parameter altogether.   If problems persist, and you are using the FRAME=NONE
switch, you should remove that parameter.

We have found DOS versions 3.3 through 5.0 to be very stable.




A few of the programs developed by RCCO Research:

          { MONEY & BANKS }(tm), Personal Banking Manager
          { SDB:  Safe Deposit Box }(tm)
          { CCM:  Credit Cards Minder }(tm)
          { PASS:  Appointments Scheduler }(tm)
          { BooksNexus:  book library records }(tm)
          { StampsNexus:  philatelic collection records }(tm)
          { VideoNexus:  video collection records }(tm)
          { AudioNexus:  music library records }(tm)
          { CoinsNexus:  numismatic collection records }(tm)
          { SportsNexus:  sports cards collection records }(tm)

          { WOLFGANG:  Automotive Service Records }(tm) for Windows 3.1+
          { BIBLIOTEK:  Book Library Records }(tm) for Windows 3.1+
          { CinemaNexus:  video collection records }(tm) for Windows 3.1+
          { MusicaNexus:  audio library records }(tm) for Windows 3.1+

Please consult your favorite shareware source for the availability of current
DOS and Windows versions of RCCO Research programs.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3955

     Volume in drive A has no label
     Directory of A:\

    INSTALL  EXE      8927   8-22-93   1:40a
    __001    EXE      4885   8-22-93   1:40a
    __002    EXE    338463   8-22-93   1:40a
    README   TXT      7188   8-30-93   1:40a
    FILE_ID  DIZ       423   8-22-93   1:40a
            5 file(s)     359886 bytes
                               0 bytes free
