---
layout: page
title: "PC-SIG Diskette Library (Disk #3823)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3823/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3823"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ORDER.TXT

{% raw %}
```
How to Register Periodic Table 2.01

Periodic Table 2.01 Registration Form/Invoice.  Please send to:

          SMI Corp., P.O. Box 582221, Tulsa, OK 74158

Ordering by check:  You can order by sending a check and this order form to the
address above.  To print this order form, click on Print Topic in the File pull-
down menu.  Alternately, you can print the ASCII text file ORDER.TXT (This 
document).

Credit card ordering:  You can order with MasterCard or Visa from SMI Corp. by 
calling (918)560-9536 from 8:00 am to 5:00 pm central time Monday through 
Friday.  You can also mail credit card orders by filling out this order form and
mailing it to the above address.

Site licenses:  Site licenses are available for Periodic Table.  Call (918) 
560-9536 to find out about the details.

Periodic Table 2.01 Single user lic. qty:___ @ $15.00 ea.= _____________

Disk (optional) check one: ___ 5.25  ___ 3.5  @ $2.50 ea.= _____________

Printed Manual (optional)           qty: ___ @ $10.00 ea.= _____________

Oklahoma residents add 7.5% sales tax                    + _____________

International orders add: License only --------- $0.00
(outside U.S. or Canada)  Disk orders ---------- $2.00
                          Manual --------------- $8.00   + _____________

                                            Total payment  _____________

Payments must be in US dollars drawn on a US bank or by MasterCard or Visa.
Prices are subject to change without notice.

            Name: __________________________________ Date: _________

         Company: __________________________________________________

         Address: __________________________________________________

                  __________________________________________________

City, State, Zip: _______________________________ Country: _________

       Day Phone: __________________ Evening Phone: ________________

Electronic mail address: ___________________________________________

For Credit Card orders:      ___ VISA      ___ MasterCard

    Card Number: ________________________________________

    Exp. Date: ________________

    Signature: __________________________________________

Comments:
```
{% endraw %}

## README.TXT

{% raw %}
```
Periodic Table v2.01 - ReadMe.TXT

This is a maintenance release of Periodic Table.  It has fixed
any known bugs and added a Maximize on Startup menu command.
See the PTOE.WRI files for details.  Please note that this
release is FREE for registered users of Periodic Table 2.0

This version of Periodic Table requires Windows 3.1.  If it is
installed on a Windows 3.0 system, it will not run.

If you received Periodic Table as a ZIP file, and you are using 
360kb disks, please unzip PTDISK1.ZIP and PTDISK2.ZIP to separate
diskettes and label them with the names:

  PERIODIC TABLE INSTALLATION DISK
  PERIODIC TABLE DOCUMENT DISK

respectivly.  If you are unziping the files to a disk format 
greater than 360kb, then you can unzip both files to the same 
diskette.

If you received Periodic Table on diskette, and your disk format 
is greater than 360kb, then you will receive only one diskette 
with all files on it.  The installation will proceed normally 
without asking you to change diskettes.

Insert your Installation Disk in drive A:  Then from the File/Run 
command of either Program Manager or File Manager type:

A:\INSTALL

Then just follow the screen prompts.

Thanks for choosing Periodic Table by SMI Corporation.

PLEASE NOTE:
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Several files in this application are compressed.  If you don't
use the installation program or you need to copy one of the
original files onto your hard disk, use the UNPACK.EXE file
located in your installation directory or on the install disk.

=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

If you received Periodic Table as a ZIP file, you should find the 
following files included.  If you received Periodic Table on diskette,
you should check to see that the files listed as being on Disk 1 or 
Disk 2 are on the proper diskettes.

PT200.ZIP	Periodic Table ZIP file
 PTDISK1.ZIP	 ZIP file for the Periodic Table Installation Disk
  INSTALL.EXE	  The installation program
  INSTALL.BIN	  An installation support file
  INSTALL.BMP	  An installation support file
  INSTALL.INF	  The installation script
  PTOE.EX$	  Periodic Table program
  PTOE.HL$	  Periodic Table help file
  ELEM0000.DA$	  Nuclide database
  ELEM0001.DA$	  Daughter nuclide database
  ELEM0000.KE$	  Nuclide database key file
  ELEM0001.KE$	  Daughter nuclide database key file
  ELEM.DBD	  Nuclide/Daughter database description file
 PTDISK2.ZIP	 ZIP file for the Periodic Table Document Disk
  PTOE.WR$	  Periodic Table Manual
  ORDER.TXT	  ASCII order form
  UNPACK.EXE	  A program to unpack individual files from the 
                  install disk(s)
  DUNPACK.EXE	  A DOS program to unpack individual files from the 
                  install disk(s)
  CTL3D.DL$       Microsoft 3D control library
  FILE_ID.DIZ     An ASCII file describing this product

Files that end in a '$' sign are packed.  To copy them 
individually to your hard disk, you will need to use the 
UNPACK.EXE program provided on the Document Disk and in your
installation directory.

If you have questions or want to leave us a comment you can...

Write us at:
               SMI Corporation
               P.O. Box 582221
               Tulsa, OK 74158

Call us at:

               (918) 560-9536  (8:00 AM through 5:00 PM
                                Monday through Friday)

Or send us E-Mail at:

               BIX:      rluhman
               Prodigy:  RJPB21A
               Internet: rluhman@bix.com
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3823

     Volume in drive A has no label
     Directory of A:\

    DUNPACK  EXE      9392   3-01-93   2:01a
    UNPACK   EXE     36864   3-01-93   2:01a
    ORDER    TXT      2239   3-01-93   2:01a
    PTOE     WR$    145617   3-01-93   2:01a
    CTL3D    DL$     10268   3-01-93   2:01a
    FILE_ID  DIZ       479   3-01-93   2:01a
    README   TXT      3592   2-15-93   2:00a
    GO       BAT        31   6-04-92   2:25a
    GO       TXT       924   6-22-93   9:48a
            9 file(s)     209406 bytes
                          107520 bytes free
