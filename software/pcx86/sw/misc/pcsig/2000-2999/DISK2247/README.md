---
layout: page
title: "PC-SIG Diskette Library (Disk #2247)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2247/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2247"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "CBASE THE C DATABASE LIBRARY"

    This is a C database file management library.  Records may be accessed
    both randomly and sequentially through indexes stored in B+-trees.
    Records may also be accessed sequentially in the order in which they
    are stored.  Multiuser access is supported under any operating system
    with file locking capabilities.
    
    Designed to be extremely portable, it's written in strict adherence to
    the ANSI C standard and can still be used with the K&R C compilers. All
    system dependent code is isolated to make it easy to port to new
    operating systems.
    
    CBASE is actually made up of four individual libraries, each complete
    and independently accessible.  At its foundation is the block buffered
    I/O library which models a file as a collection of blocks made up of
    fields.  The linked sequential file library provides all the
    facilities necessary for the creation and manipulation of doubly-
    linked sequential files.  The btree library provides the same for B+-
    tree files.  The program's library uses the linked sequential file and
    btree libraries to perform all structured file management
    operations. The linked sequential library is used for record storage
    and the btree library is used for inverted file key storage.  Database
    size is limited only by available disk storage.
    
    CBASE comes complete with all source code, and a demo database is
    included to demonstrate its capabilities.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## RLSNOTES.TXT

{% raw %}
```
----------------------------------------------------------------------
| Citadel                                                            |
| 241 East Eleventh Street * Brookville, IN 47012 * 317-647-4720     |
|                                               BBS 317-647-2403     |
----------------------------------------------------------------------

                       blkio 1.1 Release Notes
                       -----------------------

o bopen has been modified to open block files which do not end on a
  block boundary.  This was done to allow blkio to be used to rebuild
  corrupt files.

o bsetvbuf bug for connecting user-supplied buffer fixed.

o function prototypes used if __STDC__ == 1

o const used if __STDC__ == 1

o bgethf sets errno to EINVAL instead of BEBOUND if the field extends
  beyond the end of the header.

o bgetbf sets errno to EINVAL instead of BEBOUND if the field extends
  beyond the end of the block.

o lockb len parameter type changed from size_t to bpos_t.

























                                                        Citadel  89-10
```
{% endraw %}

## DISTRIB.TXT

{% raw %}
```
----------------------------------------------------------------------
| Citadel                                                            |
| 241 East Eleventh Street * Brookville, IN 47012 * 317-647-4720     |
|                                               BBS 317-647-2403     |
----------------------------------------------------------------------

                    CBASE DISTRIBUTION APPLICATION

In order to distribute cbase for profit, prior written permission must
be obtained from Citadel.  The following additonal restrictions apply
to distribution for profit.

     - cbase may not be included on a diskette with any other
       software.

     - The distribution fee is limited to $10.00.  No additional
       remuneration may be accepted.

     - The distributor must make fully evident the fact that cbase
       is not in the public domain, and that the fee paid to the
       distributor does not apply toward the purchase of cbase.

Along with this application form, a copy of the distributor's
promotional material and advertising copy should be included.

----------------------------------------------------------------------
|                        Mailing Information                         |
|                                                                    |
|                                                 Date: ____________ |
|                                                                    |
|    Name: __________________________________________                |
|                                                                    |
|   Title: __________________________________________                |
|                                                                    |
| Company: __________________________________________                |
|                                                                    |
| Address: __________________________________________                |
|                                                                    |
|    City: _____________________, _____  ____________                |
|                                 State    Zip Code                  |
|   Phone: _____________________                                     |
|                                                                    |
|  Copying Fee Per Diskette: __________                              |
----------------------------------------------------------------------







                                                        Citadel  89-10
```
{% endraw %}

## ORDER.TXT

{% raw %}
```
----------------------------------------------------------------------
| Citadel                                                            |
| 241 East Eleventh Street * Brookville, IN 47012 * 317-647-4720     |
|                                               BBS 317-647-2403     |
----------------------------------------------------------------------

                           cbase Order Form

----------------------------------------------------------------------
|                        Mailing Information                         |
|                                                                    |
|                                                 Date: ____________ |
|                                                                    |
|    Name: __________________________________________                |
|                                                                    |
|   Title: __________________________________________                |
|                                                                    |
| Company: __________________________________________                |
|                                                                    |
| Address: __________________________________________                |
|                                                                    |
|    City: _____________________, _____  ____________                |
|                                 State    Zip Code                  |
|   Phone: _____________________                                     |
----------------------------------------------------------------------

----------------------------------------------------------------------
|            Description              Unit Price  Quantity    Price  |
|                                                                    |
| cbase ............................    $77.00     _____   $ _______ |
|                                                                    |
| License Additional Programmers ...     35.00     _____     _______ |
|                                                                    |
|                                               Sub-total  $ _______ |
|                                                                    |
|                      Indiana residents add 5% sales tax    _______ |
|                                                                    |
|                Shipping ($3.50 domestic, $5.00 foreign)    _______ |
|                                                                    |
|                                                   Total  $ _______ |
|                                                                    |
| Diskette Format (select one)                                       |
|    MS-DOS:  5.25" 360K _____  3.5" 720K _____                      |
----------------------------------------------------------------------

Comments: ____________________________________________________________

______________________________________________________________________



                                                        Citadel  89-10

License
  The cbase license is for one programmer.  Included is one copy of
  the software on diskette and one copy of the printed documentation.
  There are no restrictions on the number of machines on which the
  software is installed.

  A company may extend its software license to cover additional
  programmers.  A copy of the printed documentation is provided for
  each licensed programmer.

Terms of Payment
  Check drawn on U.S. Bank in U.S. funds.
  International bank or postal money order in U.S. funds.
  Purchase orders accepted from larger corporations.
  All foreign orders must be prepaid.

Updates
  The update to the next release of the software is provided free of
  charge.  Information on updates may be obtained on the Citadel BBS.

Technical Support
  There is no additional charge for technical support.  See the
  documentation for information on contacting technical support.



























                                                        Citadel  89-10
```
{% endraw %}

## RLSNOTES.TXT

{% raw %}
```
----------------------------------------------------------------------
| Citadel                                                            |
| 241 East Eleventh Street * Brookville, IN 47012 * 317-647-4720     |
|                                               BBS 317-647-2403     |
----------------------------------------------------------------------

                     cbase 1.0 beta Release Notes
                     ----------------------------

In this file are summarized the additions and modifications made to
cbase this release.  Owners of previous releases should read it
completely.

o The parameter list of the cbcreate and cbopen functions have been
  modified.  The original functions were

     int cbcreate(char *cbname, size_t recsize,
                              cbfield_t fields[], size_t fldcnt);
     int cbopen(char *cbname, char *type,
                              cbfield_t fields[], size_t fldcnt);

  The new functions are

     int cbcreate(char *cbname, size_t recsize,
                              int fldc, cbfield_t fldv[]);
     int cbopen(char *cbname, char *type,
                              int fldc, cbfield_t fldv[]);

o The cbfield_t bit flags CBFKEY and CBFUNIQ have been changed to
  CB_FKEY and CB_FUNIQ.

o Field numbering now begins at zero.

o Because of an enhancement made to the btree library, it is no longer
  necessary to include the record position in the data type comparison
  functions.

o The functions cbimport and cbexport have been added to import and
  export data to printable files.  When adding a new data type,
  an import function and an export function must be provided in
  addition to the comparison function.

o There is no longer a maximum number of cbase fields.  The fldv array
  is now dynamically allocated when a cbase is opened.

o cbclose bug fixed.  Would not close first key file.

o function prototypes used if __STDC__ == 1

o const used if __STDC__ == 1

                                                        Citadel  89-10
o long double data types (t_double, t_doublev) enabled if __STDC__ ==
  1

o cblock sets the cursors to null when unlocking.

o A pair of functions for converting names between the formats
  last-name-first and first-name-first has been provided.  fmltolfm
  and lfmtofml are located in the file fml.c in the example program
  directory.


                       btree 1.0 Release Notes
                       -----------------------

o The btree library has been enhanced to recognize fields. This has
  required changes in the btcreate and btopen parameter lists.  The
  original functions were

     int btcreate(char *filename, size_t m, size_t keysize);
     int btopen(char *filename, char *type,
                int (*cmp)(const void *p1, const void *p2, size_t n));

  The new functions are

     int btcreate(char *filename, size_t m, size_t keysize,
                                int fldc, btfield_t btfldv[]);
     int btopen(char *filename, char *type,
                                int fldc, btfield_t btfldv[]);

o The btfix function has been added to fix corrupt btree files.  This has
  required a slight change in the btree file format.  A utility to
  convert existing btree files from the old format to the new will be
  made available on the Citadel BBS.

o btlock sets the cursor to null when unlocking.


                        lseq 1.0 Release Notes
                        ----------------------

o lslock sets the cursor to null when unlocking.


                       blkio 1.1 Release Notes
                       -----------------------

o bpos_t has been changed from size_t to unsigned long.  If size_t is
  not equivalent to unsigned long, existing files containing fields of
  type bpos_t will require conversion.  A utility to convert existing
  cbase files will be made available on the Citadel BBS.

                                                        Citadel  89-10
o bopen has been modified to open block files which do not end on a
  block boundary.  This was done to allow blkio to be used to rebuild
  corrupt files.

o bsetvbuf bug for connecting user-supplied buffer fixed.

o bgethf sets errno to EINVAL instead of BEBOUND if the field extends
  beyond the end of the header.

o bgetbf sets errno to EINVAL instead of BEBOUND if the field extends
  beyond the end of the block.

o lockb len parameter type changed from size_t to bpos_t.






































                                                        Citadel  89-10
```
{% endraw %}

## FILE2247.TXT

{% raw %}
```
Disk No: 2247                                                           
Disk Title: CBASE The C Database Library                                
PC-SIG Version: S1                                                      
                                                                        
Program Title: CBase:  The C Database Library                           
Author Version: 1.0B                                                    
Author Registration: $77.00                                             
Special Requirements: None.                                             
                                                                        
CBASE is a C database file management library.  Records may be accessed 
both randomly and sequentially through indexes stored in B+-trees.      
Records may also be accessed sequentially in the order in which they    
are stored.  Multiuser access is supported under any operating system   
with file locking capabilities.                                         
                                                                        
CBASE is designed to be extremely portable.  It is written in strict    
adherence to the ANSI C standard, and can still be used with the K&R    
C compilers.  All system dependent code is isolated in order to make    
it easy to port to new operating systems.                               
                                                                        
CBASE is actually made up of four individual libraries, each complete   
and independently accessible.  At the foundation of CBASE is the block  
buffered i/o library which models a file as a collection of blocks      
made up of fields.  The linked sequential file library provides all     
the facilities necessary for the creation and manipulation of doubly    
linked sequential files.  The btree library provides the same for       
B+-tree files.  The CBASE library uses the linked sequential file and   
btree libraries to perform all structured file management operations.   
The linked sequential library is used for record storage and the btree  
library is used for inverted file key storage.  Database size is        
limited only by available disk storage.                                 
                                                                        
CBASE comes complete with all source code, and a demo database is even  
included to demonstrate its capabilities.                               
                                                                        
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
║      <<<<  PC-SIG Disk #CBASE THE C DATABASE LIBRARY  >>>>              ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║   The files on this disk come in archived format.                       ║
║   Please refer to CBASE.RME for installation instructions.              ║
║                                                                         ║
║   To print the instructions, type: COPY CBASE.RME PRN (press enter)     ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                                                         ║
║                                           Copyright 1990, PC-SIG, Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2247

     Volume in drive A has no label
     Directory of A:\

    CBASE    RME      5970   1-08-90   2:55p
    CBASE10B ZIP    202769   1-08-90   2:51p
    CBUPDATE ZIP     23684   1-08-90   2:51p
    GO       BAT        37   6-21-90  10:39a
    GO       TXT      1079   6-23-90  12:19p
    FILE2247 TXT      2961   6-24-90   3:38p
            6 file(s)     236500 bytes
                           81920 bytes free
