---
layout: page
title: "PC-SIG Diskette Library (Disk #1330)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1330/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1330"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PKPAK, PKUNPAK, AND PKSFX"

    PKPAK, PKUNPAK and PKSFX are a set of archiving utilities that allow you
    to compress your files into an archive file which takes up less disk
    space for storage and helps reduce the transmission time when sending
    files over the modem. PKPAK compresses multiple files into an archive
    file, PKUNPAK extracts some or all these files from the archive for
    normal program usage, and PKSFX creates self-extracting archive files.
    Archive files may be updated, listed to the screen, annotated with
    comments, printed, and password protected.
    
    Other features include: extract only the most recent files when the same
    named file already exists on disk, extract files to the printer in both
    ASCII and binary mode, an easier to read listing of files, and updating
    archives which are larger than half your floppy disk storage area.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## APPNOTE.TXT

{% raw %}
```
The general format for an archive file is:

[[archive-mark + header_version + file header + file data]...] + 
archive-mark + end-of-arc-mark

The archive-mark is 1 byte and is the value 1A hex.  The file header
can be defined by the following 'C' structure, and is 27 bytes in size.
Note that this is a "packed" structure with fields aligned on odd-address
boundries.

typedef struct archive_file_header
  { char name[13];		/* file name */
    unsigned long size;		/* size of compressed file */
    unsigned short date;	/* file date */
    unsigned short time;	/* file time */
    unsigned short crc;		/* cyclic redundancy check */
    unsigned long length;	/* size of uncompressed file */
  };

The name field is the null terminated file name.

The size is the number of bytes in the file data area following the
header.

The date and time are stored in the same packed format as a DOS
directory entry.

The CRC is a 16-bit CRC on the file data area based on a CRC polynomial
from the article by David Schwaderer in the April 1985 issue of PC
Technical Journal.

The length is the actual uncompressed size of the file.

The header versions are defined as follows:

Value	Method		Notes
-----	--------	-----------------------------------------------------
  0	  -		This is used to indicate the end of the archive.
  1	Stored		(obsolete) (note 1)
  2	Stored		The file is stored (no compression)
  3	Packed		The file is packed with non-repeat packing.
  4	Squeezed	The file is squeezed with standard Huffman squeezing.
  5	crunched	The file was compressed with 12-bit static Ziv-Lempel-
			Welch compression without non-repeat packing.
  6	crunched	The file was compressed with 12-bit static Ziv-Lempel-
			Welch compression with non-repeat packing.
  7	crunched	(internal to SEA) same as above but with different
			hashing formula.
  8	Crunched	The file was compressed with Dynamic Ziv-Lempel-Welch
			compression with non-repeat packing.  The initial
			ZLW code size is 9-bits with a maximum code size
			of 12-bits (note 2).  An adaptive reset is used
			on the ZLW table when it becomes full.
  9	Squashed	The file was compressed with Dynamic Ziv-Lempel-Welch
			compression without non-repeat packing.  The initial
			ZLW code size is 9-bits with a maximum code size
			of 13-bits (note 3).  An adaptive reset is used
			on the ZLW table when it becomes full.

Note 1:
  For type 1 stored files, the file header is only 23 bytes in size,
  with the length field not present.  In this case, the file length
  is the same as the size field since the file is stored without
  compression.

Note 2:
  The first byte of the data area following the header is used to
  indicate the maximum code size, however only a value of 12 (decimal)
  is currently used or accepted by existing archive programs.

Note 3:
  The algorithm used is identical to type 8 crunched files with the
  exception that the maximum code size is 13 bits - i.e. an 8K entry
  ZLW table.  However, unlike type 8 files, the first byte following
  the file header is actual data, no maximum code size is stored.




References
----------

Source code for general Ziv-Lempel-Welch routines by Kent Williams.

Source code and documentation from the Unix COMPRESS utilities.

Terry A. Welch, "A Technique for High Performance Data Compression."
IEEE Computer, vol. 17, no. 6 (June 84)

Ziv, J. and Lempel, A., "Compression of individual sequences via
variable-rate coding." IEEE Trans. Inform. Theory IT-24, 5 (Sept. 1978),
530-536.

PC Technical Journal, April 1985.

The IBM DOS Technical Reference Manual, part number 6024125.

```
{% endraw %}

## FILE1330.TXT

{% raw %}
```
Disk No: 1330
Program Title:  PKPAK, PKUNPAK, PKSFX version 3.6
PC-SIG version: 1

PKPAK, PKUNPAK and PKSFX are a set of archiving utilities that allow you
to compress your files into an "archive file" which takes up smaller
disk space for storage and helps reduce the transmission time when
sending files over the modem.  PKPAK compresses multiple files into an
"archive" file, PKUNPAK extracts some or all these files from the
archive for normal program usage, and PKSFX creates self-extracting
archive files.  Archive files may be updated, listed to the screen,
annotated with comments, printed, and password protected.

Other features include: the option to extract only the most recent files
when the same named file already exists on disk, ability to extract
files to the printer in both ASCII and binary mode, easier to read
listing of files, and the ability to update archives which are larger
than half your floppy disk storage area.

Usage:  Archiving Utility.

Special Requirements:  None.

How to Start:  Type GO (press enter).

Suggested Registration:  $20.00

File Descriptions:

PK361    EXE  Self-extracting archive.
README        How to get started.
APPNOTE  TXT  Technical notes.
MAKESFX  COM  Makes self-extracting archives.
MANUAL   DOC  Documentation.
ORDER    DOC  Order form.
PKPAK    EXE  Main archiving program.
PKPAKJR  EXE  Smaller version of PKPAK.EXE.
PKUNPAK  EXE  Main extraction program.
PKUNPAKJ EXE  Smaller version of PKUNPAK.EXE.
README   DOC  How to get started.
RELEASE  DOC  Note on version 3.6.
SOFTDEV  DOC  Message to software developers.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG, Inc.

```
{% endraw %}

## MANUAL.DOC

{% raw %}
```






                                                                  |
                                                                  |
                                                                  |
                                                         PKware   |
                                                                  |
                                    The file compression system   |
                                                          where   |
                                         SPEED and SMALL SPACES   |
                                          make a BIG difference   |
                                                                  |
                                                                  |
                                                                  |
                                                                  |
                                                          PKPAK   |
                                                        PKUNPAK   |
                                                          PKSFX   |
                                                        PKPAKJR   |
                                                      PKUNPAKJR   |
                                                                  |
                                                                  |








         Upgrade Version 3.6 of PKware File Compression Programs 

       ______________________________________________________________
       |                                                            |
       |                 Previous Users of PKware                   |
       |                         NOTICE                             |
       |                Difference in Installation                  |
       |                                                            |
       |    PKPAK and PKUNPAK (including JR versions) are now       |
       |    EXE files instead of COM files.                         |
       |                                                            |
       |    You MUST delete, or remove from your system, all the    |
       |    old program files BEFORE proceeding.                    |
       |____________________________________________________________|
 



                    9 Files are included in PK36.EXE


      PKPAK.EXE  Main archiving program
    PKUNPAK.EXE  Main extraction program

    PKPAKJR.EXE  Archiving program for limited memory
  PKUNPAKJR.EXE  Extraction program for limited memory

    MAKESFX.COM  Starts the process of creating self-extracting files

     README.DOC  Read FIRST !  
      ORDER.DOC  Registration information and order form
     MANUAL.DOC  Reference manual for PKware File Compression Programs
    APPNOTE.TXT  Technical background material
           
  

















                                    i

                          UPGRADE ENHANCEMENTS

              Version 3.6 PKware File Compression Programs



 1.  FAST !  PKPAK is now up to 25% faster

             PKUNPAK is now up to 10% faster 

 2.  You can add 3,095 files to an archive in one sweep.

 3.  Special limited-disk-size handling to enable the update of archive
     files which are larger than 50% of your floppy disk storage area.

 4.  Added flexibility to the MOVE option by combining it with other
     update and freshen options.

 5.  A  List Files  feature has been added to further automate the
     archiving and file reconstruction process.

 6.  Your choice of having PKPAK stop when it encounters a "can't find"
     file situation, or having it make a notation on the screen and then
     proceeding to the next step.

 7.  Improved network support.

 8.  The addition of the MORE command for the PKPAK verbose file listing
     which provides pausing after each screen of information.  

 9.  The addition of the MORE command for PKUNPAK which provides pausing
     after each screen of information during the "extract file to the
     screen" process.
     
10.  New printer options for PKUNPAK.

11.  A new  -n  option which saves time by reconstructing only the most
     recent version of the file to be extracted when another same-named
     file already resides on your disk.

12.  Additional information about the archiving process is displayed
     which includes the version number and program.















                                   ii

                     PKware File Compression System

                            Table of Contents


 1.  SUPER QUICK
     A.  UNarcing a File from a BBS Archive . . . . . . . . . 1
     B.  Use of PKware in Telecommunications - BBS  . . . . . 1

 2.  Introduction to File Compression
     A.  File Compression . . . . . . . . . . . . . . . . . . 2
     B.  Two Related Programs - PKPAK & PKUNPAK . . . . . . . 2
     C.  Three Special Programs 
             - PKSFX, PKPAKJR & PKUNPAKJR . . . . . . . . . . 2
     D.  File Compression Terms . . . . . . . . . . . . . . . 3
     E.  Using PKware with Hard Disk and 
             Floppy Disk Systems  . . . . . . . . . . . . . . 4
     F.  General Rules and DEFAULT Settings . . . . . . . . . 5

 3.  PKPAK - compress files into archive files
     A.  QUICK START - make an ARCHIVE file . . . . . . . . . 7
     B.  Command Structures Used in AREA 2  . . . . . . . . . 8
     C.  Description of Archiving Commands  . . . . . . . . . 9

 4.  PKUNPAK - reconstruct & extract archive files
     A.  QUICK START - reconstruct an ARCHIVE file  . . . . .13
     B.  Full PKUNPAK Command Structure CHART . . . . . . . .14
     C   Description of Extraction Commands . . . . . . . . .15

 5.  Special Handling Procedures
     A.  Creating a Pre-Select File List  . . . . . . . . . .17
     B.  Password Protection  . . . . . . . . . . . . . . . .18
     C.  Revealing File Compression Method  . . . . . . . . .19
     D.  LAN (local area network) Support . . . . . . . . . .20
     E.  Configuration File Considerations  . . . . . . . . .20
     F.  Batch File and Other Programming . . . . . . . . . .21
     G.  RAM Disk . . . . . . . . . . . . . . . . . . . . . .21
     H.  Using PKPAK in Limited Memory  . . . . . . . . . . .22
     I.  Compatibility with other File Compression Programs
         1)  Compatibility  . . . . . . . . . . . . . . . . .24
         2)  Archive Time & Date  . . . . . . . . . . . . . .24
         3)  Disabling Squashing  . . . . . . . . . . . . . .24
     J.  Error Messages
         1)  PKPAK - File Compression . . . . . . . . . . . .25
         2)  PKUNPAK - File Extraction & Reconstruction . . .27

 6.  PKSFX - Self-Extraction Utility  . . . . . . . . . . . .29

 7.  Registration and Background
     A.  Technical Support  . . . . . . . . . . . . . . . . .30
     B.  Registration . . . . . . . . . . . . . . . . . . . .31









                                                                  |
                                                                  |
                                                                  |
                                                      SUPER QUICK |
                                                                  |
                               UNarcing a File from a BBS Archive |
                                                                  |
                                                                  |
                                                                  |
                                                                  |
                                                                  |
                                                                  |

_________________________________________________________________________
|                                                                       |
|                              QUICK START                              |
|                                                                       |
|        UNarcing or Reconstructing an ARCHIVE File from a BBS          |
|                                                                       |
|      A BBS is a Computer Bulletin Board Service.  People who use      |
|      this type of service can acquire programs or other information   |
|      in the form of ARCHIVE files.  These files are picked up via     |
|      a modem.  In order to use them, they must be RECONSTRUCTED       |
|      (UNarced) through the use of PKUNPAK.                             |
|                                                                       |
|      Follow this pattern to UNarc your files:                         |
|                                                                       |
|                                                                       |
|            C:>PKUNPAK  A:AnyFile.ARC   C:                             |
|               _______  _____________   ___                            |
|                 |         |             |                             |
|                 |         |             DESTINATION of your choice    | 
|                 |         |                                           |
|                 |         the NAME and LOCATION of the archive file   |
|                 |         > Use any MS-DOS file notation              |
|                 |                                                     |
|                 the PROGRAM command                                   |
|                 >  The program MUST be located at the prompt position |
|                        or...                                          |
|                 >  The program can be located elsewhere through the   |
|                    PATH= setting                                      |
|_______________________________________________________________________|


                Use of PKware in Telecommunications - BBS


Compressed or ARCHIVED files pack a lot of information into a small space. 
PKware file compression methods are the standard used by many successful
BBS systems across the country.

Archive files created through PKware assure you of the highest level of
file accuracy.  PKware compressed files are the most compact, meaning they
take less telecommunications time to deliver, PLUS PKware is FAST! 
According to benchmarks published in major computer magazines, you will be
able to manipulate your compressed files many times faster with PKware as
compared to similar programs on the market.  PKware provides YOU with the
highest standards of the industry.

If you find the software fast, easy, and convenient to use, a registration
of $20 would be appreciated.  If you send $47 or more, you will receive,
when available, an ALL NEW data compression utility with better & different
compression methods, enhanced functionality, and increased user friendliness.
Send check or money order to:

                              PKware, Inc.
                           7032 Ardara Avenue
                           Glendale, WI  53209


                                  - 1 -






                                                                  |
                                                                  |
                                                                  |
                                 Introduction to File Compression |
                                                                  |
                                                 File Compression |
                           Two Related Programs - PKPAK & PKUNPAK |
                    Special Programs - PKSFX, PKPAKJR & PKUNPAKJR |
                                           File Compression Terms |
                              Use of Hard and Floppy Disk Systems |
                               General rules and DEFAULT Settings |
                                                                  |
                                                                  |
                                                                  |

                    Introduction to File Compression

File Compression

     The term "compression" means to reduce in size.   Computer file
     compression means that by using PKware programs, files are quickly
     reduced in size and thereby take up less storage space.  This
     process, sometimes called ARCing, creates ARCHIVE files.  

     Archive files have three distinct benefits:

         1.  They use less disk space than normal files.  Archive filing
             increases the life and storage availability of your expensive
             hard disk.

         2.  Many individual files can be stuffed into a single archive
             file.  This makes file group identification, copying, and
             transporting faster and easier.

         3.  Archived files travel faster via modem which reduces
             telecommunication transmission and reception.  Many BBS
             (computer bulletin board services) use PKware archive files
             as their standard.  This enables the BBS to store more files
             and you to have easier access to them by way of speedier
             communications.

Two Related PKware Programs - PKPAK & PKUNPAK

     Together, PKPAK and PKUNPAK handle all of your file compression needs.

     PKPAK is the program that compresses files.  This shrinking process
     is often referred to as archiving or ARCing and it results in the
     creation of an ARCHIVE file.  Terms you will see during the compress-
     ing process are Stored, Packed, Squeezed, Crunched and Squashed. 
     PKPAK also handles all ARCHIVE file maintenance including adding and
     deleting files, as well as reporting on technical information from
     within the archive.

     PKUNPAK is the program that reconstructs or extracts archived files.
     A shorthand word for this process is UNarcing.  In addition to UNarcing
     a complete archive file, it can selectively release individual files,
     and show files on the screen for fast viewing, or print them out on a
     printer.

Three Special Programs - PKSFX - PKPAKJR & PKUNPAKJR

     There are times you must give archived files to people who do not
     have PKware programs, or who have not yet learned how to use them. 
     PKSFX creates a "self-extracting" file.  This means that the archive
     can be reconstructed WITHOUT using PKUNPAK.  The people who receive
     the archives you have created will be able to use them immediately.

     The JR series of PKware does everything that PKPAK and PKUNPAK does,
     however, they were designed to work within a limited memory area. 
     This is of particular importance to programmers who use PKware within
     their own program or creations.

                                  - 2 -

File Compression Terms

     FILE COMPRESSION is the process of reducing a file's size.  Sometimes
     called ARCing or compressing.

     FILE means the SINGLE name that identifies information on your floppy
     disk or hard drive.

     ARCHIVE FILE holds information that has been reduced in size for
     better storage.  Sometimes called an ARC or ARCed file.

     An ARCHIVE FILE can be made up of either one big file OR several
     files bunched together under one file name.

     A file with the extension ARC    FileName.ARC    is a SINGLE file
     that contains from one to many independent files stuffed inside.

 ______________________________________________________________________
 |                                                                    |
 |        An ARC file contains SEVERAL files or one BIG file          |
 |                                                                    |
 |                                                                    |
 |    Suitcase.ARC    contains -->  Pants.Txt  Tie.Txt  Sox.Wks       |
 |                                                                    |
 |    Big.ARC    contains -->  Huge.Wks                               |
 |                             This is a very BIG worksheet that      |
 |                             has been shrunk in size for better     |
 |                             storage and faster telecommunications. |
 |____________________________________________________________________|


     FILE RECONSTRUCTION  or  FILE EXTRACTION  refers to the process of
     recreating files that have been previously compressed or ARCed. 
     People also refer to this as OPENING UP FILES or UNarcing.























                                  - 3 -

             Using PKware with Hard and Floppy Disk Systems

PKware works BEST on a hard disk system.  

 1.  Even though you are making files smaller, the process used to shrink
     them can BRIEFLY DOUBLE the storage space you need.  The process
     creates a NEW archive which will be used as a REPLACEMENT for the old
     version.  Both the OLD and the NEW versions will be on your disk
     until just prior to the program's final stages.

 2.  When you UNarc (reconstruct) a file, the amount of space needed to
     hold that file can double.  A large hard disk drive normally insures
     that enough storage area is available.

Many ARCed (compressed) files are stored on floppy disks.  The limit to
floppy storage is the number of characters your floppy system will hold:

     Standard double density floppy     360K
     High density floppy                1.2 meg 
     3-1/2" floppy                      .7 or 1.4 meg 

You may have problems either ADDING files to an archive stored on a floppy
disk, or UNarcing files to a floppy disk system when the number of
characters in the archive file is more than 50% of the available storage
space of one floppy.  Consider a standard floppy disk system:
   ____________________________________________________________________
   |                                                                  |
   |                  Standard Floppy Disk Drive of 360K              |
   |                                                                  |
   |  A:> BigFile.ARC  has 250,000 characters                         |
   |                                                                  |
   |           1.  In order to ADD files to BigFile.ARC, you need     |
   |               500,000 of space.  The extra space is used to      |
   |               hold a NEW updated archive created BEFORE the old  |
   |               archive is deleted.                                |
   |                                                                  |
   |           2.  The reconstructed (UNarced) BigFile might require  |
   |               400,000 of space.                                  |
   |                                                                  |
   |  B:>  ...   (The LIMIT it can expand to is 360,000 characters)   |
   |__________________________________________________________________|

There are a number of ways to avoid the limitations.  A thorough knowledge
of PKware Programs will show you how to:

     1.  Selectively RECONSTRUCTING files from an archive.  Instead of
         UNarcing everything at once, you can view file size information
         and then select SPECIFIC FILES to be reconstructed (UNarced) to a
         floppy.  (See pages 1, 14)

     2.  Create the archive file on your second disk drive so that you
         have the full 360K available to you.  (See page 7)

     3.  Use of the special  -b  command which routes the NEW file to a
         larger disk drive during the archiving process then copies it
         back to the floppy upon completion.  (See page 22)

                                  - 4 -

                   General Rules and DEFAULT Settings


 1.  PKware programs MUST be located in:

     A.  The drive you are working on, OR . . .

     B.  Any directory accessible through the PATH= setting.

         C:> PATH=C:/Utils

         In this example, PKware is in the Utils Directory.  The computer
         will find and execute the program even though you are in a
         different directory or drive.  Consult your MS-DOS documentation.

     C.  Any directory through the use of PATH notation if you are using
         MS-DOS 3.0 or later.


         C:>B:PKPAK  a  OldFile.ARC  *.*      PKPAK is located on the
                                              B:> drive

         C:>\UTILS\PKPAK  v  Stuff.ARC        PKarc is located in \UTILS
                                              as indicated in the PATH
                                              notation

 2.  All PKware program commands are typed at the prompt.


 3.  Typed information can be in CAPS, lower case, or a mixture.
       ____________________________________________________________
       |                                                          |
       | IMPORTANT:  In FUTURE versions of PKware, the commands   |
       |             must be typed in lower case.                 |
       |__________________________________________________________|


 4.  The DEFAULT is  *.*  or ALL FILES when specific files are not named.


 5.  It is NOT necessary to type the extension  .ARC  when processing an
     archive file.  This extension is used in this documentation for
     clarity.


 6.  A   HELP SCREEN  is displayed when you type the program name at the
     prompt then hit carriage return/enter.

            C:>PKPAK      enter       gives you HELP
            C:>PKUNPAK    "            "    "    "







                                  - 5 -

 7.  The notation  *  or  *.ARC  will UNarc all archive files within a
     given area.


 8.  During the UNarcing process, the notation *.* will tell PKUNPAK to try
     to reconstruct ALL files whether archives or not.  This would waste
     time, but will not damage any files.


 9.  The default area for the work-in-progress archive is on the same
     drive as the original archive.  As this can cause a space shortage on
     a floppy disk, the -b option is recommended.  (See page 4 on disk
     space use, and page 22 on the -b option)


10.  The archiving function will STOP if specific, pre-specified files are
     not found.  This default can be changed in the configuration file to
     the RELAXED mode which will make a notation on the screen regarding
     file absence, then will continue processing.  (See page 20)


11.  All MS-DOS file handling procedures can be used:

               Filename.ext          Full file name designations

                  *Name.ext          Names with wild card markers 
                      *.ext         
               Filename.*
                      *.*
               File?ame.ext

             A:filename.ext          Disk drive and file name

             C:\Lotus\March\*.*      Disk drive and PATH locations

     





















                                  - 6 -





                                                                  |
                                                                  |
                                                                  |
                        PKPAK - Compress files into Archive Files |
                                                                  |
                               QUICK START - Make an ARCHIVE File |
                                                Command Structure |
                                                                  |
                                                                  |
                                                                  |

_________________________________________________________________________
|                                                                       |
|                              QUICK START                              |
|                                                                       |
|                      How to ARC (compress) files                      |
|                                                                       |
|    Use  PKPAK  to reduce or compress the size of your files.          |
|    All compressed files are stored in an ARCHIVE file.  The           |
|    benefits of ARCing are:                                            |
|                                                                       |
|       >  Better use of disk storage area                              |
|       >  Faster telecommunication file transfer via a modem           |
|       >  Collecting numerous files under a SINGLE FILE NAME           |
|                                                                       |
|    PKPAK uses 4 AREAS typed at the prompt:                            |
|                                                                       |
|    1.  The actual program name         PKPAK                          |
|                                                                       | 
|    2.  The COMMAND                     a  (alphabet letter command)   |
|                                                 a = add files         |
|                                                                       |
|    3.  The name YOU give your          NewFile  and  LOCATION         |
|        ARCHIVE file.  NO extension.                                   |
|                                                                       |
|    4.  The files that get stuffed      any MS-DOS file notation       |
|        into the NewFile                                               |
|                                                                       |
|                 1      2      3         4    <--- AREAS               |
|             C:>PKPAK   a   A:NewFile   *.*                            |
|               ______   _   _________   ___                            |
|                 |      |      |         |                             |
|                 |      |      |       goes INTO the ARC file          |
|                 |      |      NAME and LOCATION of the ARCHIVE file   |
|                 |      NECESSARY alphabet letter COMMAND              |
|                 the PROGRAM                                           |
|                                                                       |
|                        This will create a file named    NewFile.ARC   |
|                                                                       |
|                        The  .ARC  extension is added automatically    |
|                        when the program has been completed.           |
|                                                                       |
|    Patterns to guide you:                                             |
|                                                                       |
|         C:>PKPAK  a  NewFile   Checks.Wks  Money.Wks  June.Txt        |
|                                ________________________________       |
|                                               |                       |
|                       Three files to be stuffed into NewFile which    |
|                       will result in NewFile.ARC on the C:> drive.    |
|                                                                       |
|         C:>PKPAK  a  A:NewFile   *.Wks  *.Txt  \LOTUS\Graph.Pix       |
|                                  ______________________________       |
|                                                |                      |
|                         All files with the extension .WKS and .TXT    |
|                         plus a single file named Graph.PIX will be    |
|                         packed into NewFile.ARC on the A:> drive.     |
|_______________________________________________________________________|

                                  - 7 -
       TABLE:  Commands used in AREA 2 of PKPAK Archiving Process

    AREAS -->              1    2     3      4
                      C:>PKPAK  a  NewFile  *.*
_______________________________________________________________________
        |.....Prompting  Commands.....|                  |   **View    
Create  |                             |                  | Information
  or    |   Make LABEL Descriptions   | *Archive         |       
Add to  |                     Files & | Password         | Tech-       
Archive |  Files    Archive   Archive | Protect   Delete | nical   File
________|_____________________________|__________________|_____________
        |          |        |         |         |        |       | 
   /    |    c     |   x    |  cx     |     /   |    d   |   v   |  vc
   a    |    ac    |   ax   |  acx    |   __g   |    /   |   /   |  / 
   u    |    uc    |   ux   |  ucx    |   __g   |    /   |   /   |  / 
   f    |    fc    |   fx   |  fcx    |   __g   |    /   |   /   |  / 
   i    |    ic    |   ix   |  icx    |   __g   |    /   |   /   |  /
   m    |    mc    |   mx   |  mcx    |   __g   |    /   |   /   |  / 
   mu   |    muc   |   mux  |  mucx   |   __g   |    /   |   /   |  / 
   mf   |    mfc   |   mfx  |  mfcx   |   __g   |    /   |   /   |  /  
________|__________|________|_________|_________|________|_______|____

     *NOTE:  g - When selected, Password option MUST be combined with
                 commands from ANY cell in Row 2-8, Column 1-4

    **NOTE:  vm & vcm  -  creates a MORE prompt.  The list of file
                 information will stop scrolling when the screen is
                 filled and waits until you ask for MORE.

Creating, Adding To and/or Updating ARC Files
     a - Add files to a newly created or existing ARCHIVE
     u - Update existing files with most recently dated files, PLUS add
            new files to an EXISTING archive
     f - Update ONLY existing files in an archive from most recent date
     i - Back up ONLY the files that WEREN'T backed up the last time
     m - Add files to a new OR existing archive with AUTOMATIC DELETION
            of the original source files (A TIME SAVER)
    mu - Combination of   m & u  features.  Updates existing files with
            most recently dated files, adds new files to EXISTING
            archive, then automatically DELETES original source files
    mf - Combination of   m & f  features.  Updates ONLY existing files
            in an archive from most recent date, then automatically
            DELETES original source files

Labeling (describing) ARC File and Contents
     x - Label the ARCHIVE file
     c - Label the INDIVIDUAL FILES within the archive

Create a password protected ARCHIVE or individual files within ARCHIVE
     g - Create password protection

Delete an individual or a range of files from WITHIN an ARCHIVE
     d - Delete files from within an archive

Viewing file background information
     v - View technical information about archive
    vc - View file information within archive
                                                                    Page 8

          How Each PKPAK Area 2 Command Archiving Option Works 


REFER To Page 7   "Quick Start" for setup patterns
         Page 5   "General Rules and DEFAULT Settings"
         Page 8   "TABLE:  Commands used in AREA 2 of PKPAK Archiving
                   Process"

SIZE         An archive can hold any number of files subject to the
FACTORS      storage size of your disk.  You NEED unused storage space at
             least equal to the size of the existing archive in order to
             complete any updating process.  (See page 4 & 22 for a
             complete description.)

                 250K Archive needs   250K for ACTUAL storage
                                      250K for the UPDATING process

             No more than 24 PATHS can be specified during a single
             session.  This includes PATHS within all List Files as well
             as on the command line.

             The actual List File (page 17) is limited to 32K.  This does
             NOT limit the size of the files it selects.

             Although a single archive can hold an UNLIMITED number of
             files, the maximum number of files for one archiving session
             is 3,977 for PKPAK and 2,425 for PKPAKJR.  The session can be
             repeated over and over again.

COMMANDS
       _________________________________________________________________
       |                                                               |
       |  The commands CAN be combined.  The sequence is found on      |  
       |                                                               |
       |     TABLE: Commands used in AREA 2 of PKPAK Archiving         |
       |            Process                  Page 8                    |
       |                                                               |
       |  The DEFAULT setting will STOP archiving if a specified file  |
       |  is NOT found.  See page 20 to change to the RELAXED mode.    |
       |_______________________________________________________________|


a - Add files to an archive

        Add files to either a NEWLY CREATED or EXISTING archive file.  
        Same-name files will overwrite those already in the archive
        regardless of which has the latest date. 

        A:>PKPAK  a  Arrange   Flowers.Txt  Pictures.Wks  Pots.Dbs

            Once the program is finished creating a new archive, the
            extension  .ARC  will be added to the word "Arrange" making it 
            Arrange.ARC




                                  - 9 -

u - Update existing files with most recent time & date, PLUS add new
    files to an EXISTING archive

        Although similar to the   a - Add   command, it has an update
        SAFEGUARD.  It will overwrite existing archived files ONLY if the
        selected files have the most recent time and date.  It will also
        add new files to the archive.
                         
        C:>PKPAK  u  OldFile.ARC   *.Txt  Money.Wks  A:Funds.Wks         


f - Update ONLY existing files in an archive with most recent time & date

        Limited to working with files that ALREADY exist within an ar-
        chive.  It will overwrite existing archived files ONLY if the
        selected files have the most recent time and date.  It will NOT
        add new files.

        C:>PKPAK  f  Picky.ARC  *.*

            PKPAK will automatically select only the files listed within
            Picky.ARC from the range noted as *.*

i - Selective BACKUP feature

        Add only files to the archive that WERE NOT backed up the last
        time.  The notation "No files found" means that everything had
        been previously backed up.


m - Add files to a new OR existing archive then automatically DELETE
    the original or source file

        Similar to the  a - Add  command except that it automatically
        deletes the original files.  This is a REAL TIME SAVER, for
        example, when compressing an entire directory.  The  m  option
        stuffs all your files into a single archive, then deletes the
        surrounding files.

        The deletion is completed after the program verifies archiving
        accuracy.  If an error does occur, such as DISK FULL, the original
        files will NOT be deleted.

        C:\DBASE >PKPAK  m  tiny.ARC  *.dbf

            In this example, all the database files will be archived into
            tiny.ARC and then will be erased from the /DBASE directory.

mu - Combination of  m & u  features  

        Does everything the  u  command does plus automatically deletes
        the source files involved in the transaction.





                                 - 10 -

mf - Combination of  m & f  features

        Does everything the  f  command does plus automatically deletes
        the source files involved in the transaction.


x - Label (describe) the actual ARChive file - you will be prompted for
                                               a description

        Will prompt you to create a 32 character description of an archive
        file.  

            1.  Describe new archive
            2.  Describe existing archive
            3.  Change the description on an existing archive

        The  x  can be used alone on an EXISTING archive file or in
        COMBINATION with any of the 5 add/update commands as well as with
        the "c - label individual files".  See chart on page 8 for
        patterns.


c - Label (describe) individual files WITHIN an archive - you will be
                                                          prompted for 
                                                          a description

        Will prompt you to create a 32 character description of a file
        found within an archive file.  

            1.  Describe all newly added files
            2.  Describe all existing files
            3.  Change the description on all existing files
            4.  Select SPECIFIC existing files for description

        The  c  can be used alone on an EXISTING archive file, or
        COMBINATION with any of the 5 add/update commands as well as
        with the "x - label archive file".
        

g - Create a password protected ARCHIVE file or protect INDIVIDUAL
    files within an archive file

    SEE   "Password Protection Procedures"  page 18.
        

d - Delete individual or a range of files from WITHIN an ARCHIVE

        Will delete a single or multiple files within an archive using
        any of the MS-DOS file handling descriptions.  You will see the
        name of the file on the screen as it is being deleted.

        C:>PKPAK  d  OldFile.ARC   Garbage.Txt  Useless.Dbf

            In this sample, Garbage.Txt and Useless.Dbf were deleted
            from the numerous files found on OldFile.ARC


                                - 11 -

v - View technical information about archive

        The following information will be displayed about EACH file
        found inside of the archive:

            Filename       Name of the file
            Length         ORIGINAL length of the file 
            Method         Type of file compression used
            Size           Reduced or compressed size of the file
            Ratio          Percent reduction in file size
            Date           Actual date of the file
            Time           Actual time of the file
            CRC            Notation indicating the CRC numeric value
            Total Files    Number of files inside the archive
            Total Length   Total of the original size of all the files
            Total Size     Total compressed size of the archive
            Total Ratio    Percent of reduction of all files combined


vc - View FILE information within archive

        The following information will be displayed about EACH file
        found inside of the archive:

            Filename       Name of the individual file
            Comment        The description made through the  x & c
                           commands
                           NOTE:  If no description was made, this area
                           will appear blank.
            Date           Actual date of the file
            Time           Actual time of the file
            CRC            Notation indicating the CRC numeric value
            Total Files    Number of files inside the archive
            Total Length   Total of the original size of all the files
            Total Size     Total compressed size of the archive
            Total Ratio    Percent of reduction of all the files
                           combined


vm  and  vcm   The same as  v  and  c  with the MORE command added

    MORE    Information will flow on to the screen and will STOP when
            the display area is filled.  You will be prompted to
            request MORE information.
    
               Spacebar      - gives you next screen full
               Enter         - plays out line-by-line
               ESC           - will abort this file and jump to display
                               the NEXT file in sequence
               Ctrl + C  or  - Quit (abort) the process
               Ctrl + Break






                                - 12 -





                                                                  |
                                                                  |
                                                                  |
                    PKUNPAK - Reconstruct & Extract Archive Files |
                                                                  |
                        QUICK START - Reconstruct an ARCHIVE File |
                                                Command Structure |
                                                                  |
                                                                  |
                                                                  |


_________________________________________________________________________
|                                                                       |
|                              QUICK START                              |
|                                                                       |
|                How to UNarc (reconstruct) an ARCHIVE File             |
|                                                                       |
|                      --> modified instructions <--                    |
|                                                                       |
|      An ARCHIVE file is one which holds a lot of information in       |
|      a greatly reduced space.  Use the PKUNPAK program to UNarc,      |
|      or reconstruct an archive file.                                  |
|                                                                       |
|                                                                       |
|      PKUNPAK uses a MINIMUM of 3 areas typed at the prompt:           |
|                                                                       |
|          1.  The actual program name         PKUNPAK                  |
|                                                                       |
|          2.  The ARC file name               AnyFile.ARC              |
|                                                                       |
|          3.  The destination where you       Optional                 |
|              want your information to                                 |
|              be located                                               |
|                                                                       |
|                 1           2        3    <--- AREAS                  |
|            C:>PKUNPAK  AnyFile.ARC   A:                               |
|               _______  ___________  ___                               |
|                 |         |          |                                |
|                 |         |          DESTINATION (not necessary if    | 
|                 |         |          the program is started in the    |
|                 |         |          file destination area)           |
|                 |         |                                           |
|                 |         the NAME and LOCATION of the archive file   |
|                 |                                                     |
|                 the PROGRAM command                                   |
|                                                                       |
|       Patterns to guide you:                                          |
|                                                                       |
|         C:>PKUNPAK  A:AnyFile.ARC                                     |
|                                                                       |
|                            The file is located in the A:> drive       |
|                            and will be expanded onto the C:> drive.   |
|                                                                       |
|                            NOTE that Area 3, the destination, is      |
|                            NOT mentioned.  Your files will be         |
|                            placed in the SAME area as you start       |
|                            PKPAK by "default."                        |
|                                                                       |
|         C:>PKUNPAK \Collect\AnyFile.ARC  A:                           |
|                                                                       |
|                             This illustrates a MS-DOS file            |
|                             designation using the PATH location.      |
|                             The file will be reconstructed onto       |
|                             the  A:>  drive.                          |
|                                                                       |
|_______________________________________________________________________|


                                 - 13 -
_________________________________________________________________________
|                                                                       |
|       Complete File RECONSTRUCTION or EXTRACTION Command Structure    |
|                       Including OPTIONAL Areas                        |
|                                                                       |
|                                                                       |
|  PKUNPAK can use up to 5 AREAS typed at the prompt:                   |
|                                                                       |
|            1.  Actual program name       PKUNPAK                      |
|                                                                       |
|  Optional  2.  Command                   DEFAULT or alpha letter      |
|                                          preceded with a dash  -r     |
|                                                                       |
|            3.  The ARC file name         AnyFile.ARC                  |
|                                                                       |
|  Optional  4.  File destination          DEFAULT or your selection    |
|                                                                       |
|  Optional  5.  Selected files to UNarc   DEFAULT or any MS-DOS        |
|                from within the archive   file notation                |
|                file                                                   |
|                                                                       |
|          1     2        3         4            5            <--AREAS  |
|     C:>PKUNPAK -r  B:OldFile.ARC  A:  Forest.Pix  Trees.Dbf           |
|        ______  __  _____________  __  _____________________           |
|        |       |   |              |   |                               |
|        |       |   |              |   SELECTED files to reconstruct   |
|        |       |   |              |                                   |
|        |       |   |              DESTINATION of reconstructed files  |
|        |       |   |                                                  |
|        |       |   NAME and LOCATION of the archive file              |
|        |       |                                                      |
|        |       letter COMMAND preceded by a DASH                      |
|        |                                                              |
|        the PROGRAM command                                            |
|                                                                       |
|                                                                       |
|            DEFAULTS by AREA:                                          |
|                                                                       |
|            Area 2   A prompt will appear if the file you are          |
|                     reconstructing ALSO appears on disk.  The         |
|                     prompt will ask "Overwrite?" and you select       |
|                     yes or no.                                        |
|                                                                       |
|            Area 3   It is NOT necessary to type the  .ARC  extension. |
|                                                                       |
|            Area 4   The destination will be the location where        |
|                     the program is started.                           |
|                                                                       |
|            Area 5   ALL files will be UNarced or reconstructed.       |
|                                                                       |
|_______________________________________________________________________|







                                 - 14 -

                  Complete COMMAND Structure for AREA 2
             PKUNPAK - Archive Reconstruction and Extraction 
                                 
              ______           
              |    |   
       1      | 2  |        3       4            5            <--AREAS 
     ______   | __ |   ___________  __  _____________________
              |    |     
  C:>PKUNPAK  | -r |   OldFile.ARC  A:  Forest.Pix  Trees.Dbf      
              |    |    
              |    |___________________
              |                       |
              | Optional COMMAND area | 
              |_______________________| 


DEFAULTS     See page 14  "Complete File RECONSTRUCTION or EXTRACTION
             Command Structure Including Optional Areas"

             See page 5  "General Rules & DEFAULT Settings"


SIZE         Files can be extracted up to the available storage on your
FACTORS      disk.

             Only 240 files can be specified from a List File (page 17)
             within one sweep.


OPTIONAL COMMANDS:

-r   =   Files will be extracted without prompting and WILL AUTOMATICALLY
         OVERWRITE any other same-named files found in that area on the
         disk.  It will turn off the "overwrite" default.  


-n   =   Files will be extracted with an OVERWRITING SAFEGUARD.  It will
         NOT allow an older version of a file in an archive to overwrite a
         newer version on disk as defined by the time and date created.  

-c   =   Extracts files to the screen only.  The files flow non-stop.


-cm  =   Same as  -c  and adds the command MORE.  Information will flow on
         to the screen and will STOP when the display area is filled.  You
         will be prompted to request MORE information.
     
                Spacebar      - gives you next screen full
                Enter         - plays out line-by-line
                ESC           - will abort this file and jump to display
                                the NEXT file in sequence
               Ctrl + C  or   - Quit (abort) the process
               Ctrl + Break


-t   =   Displays whether an archive is good or has been corrupted. 

                                 - 15 -

-v   =   Lists (prints out on the screen) the contents of an archive from
         within the PKUNPAK program.  See PKPAK Chart on page 8, and
         indepth explanation on page 12 for a MORE COMPLETE content and
         information listing.


-vv  =   Displays the ARCHIVE PROGRAM AND VERSION that created the archive
         file. 


-g   =   Extract password protected archive.  CARE must be taken to insure
         proper retrieval of your files.

         SEE   "Password Protection Procedures" page 18 for instructions.


-p   =   Extracts files and sends them to the printer for printing.  It
         will NOT change the printer device mode from prior setting and
         WILL default to whatever was used last (see  -pa  and  -pb ). 


-pa  =   Same as  -p  but specifically sets printer device to the ASCII
         mode.  This is commonly used to print text.  It will form feed
         after each file.


-pb  =   Same as  -p  but specifically sets printer device to BINARY mode. 
         This corresponds to the COPY command commonly used to send fonts
         or graphics to a laser printer.  It will NOT form feed after each
         file.

                                                                        
 _________________________________________________________________________
 |                                                                       |
 |                  Printing from an ARCHIVE File                        |
 |                                                                       |
 |         Comparison of  MS-DOS COPY  to  PKUNPAK -pb comand            |
 |                                                                       |
 |                                                                       |
 |        MS-DOS copy command                                            |
 |        |                                                              |
 |        |                                                              |
 |  C:>COPY  Pretty.Pix  lpt1; /b           Sending graphics directly    |
 |                                          to the printer from MS-DOS   |
 |        Functions like the COPY command                                |
 |              |                                                        |
 |              |                                                        |
 |  C:>PKUNPAK -pb Picture.ARC              Sending ARCHIVED graphics    |
 |                                          directly to the printer      |
 |                                                                       |
 |                                                                       |
 |  C:>PKUNPAK -pb Picture.ARC  @PixList    Sending a SELECTION of       |
 |                                          graphics directly to the     |
 |                                          printer                      |
 |_______________________________________________________________________|


                                 - 16 -






                                                                  |
                                                                  |
                                                                  |
                                      Special Handling Procedures |
                                                                  |
                                  Creating a Pre-Select File List |
                                              Password Protection |
                                Revealing File Compression Method |
                                                              LAN |
                                               Configuration File |
                                 Batch File and Other Programming |
                                                         RAM Disk |
                                    Using PKPAK in Limited Memory |
                                                   Error Messages |
                                                                  |
                                                                  |
                                                                  |
                                                                  |



                    Creating a Pre-Selected File List


Create List Files to record file selections you use frequently.

With PKPAK:  Can be used with any commands except the View Technical and
             File Information commands. See Command Structure Chart page
             8, Col 7 & 8   PATH directions can be used inside the list.

With PKUNPAK: Can be used with ANY default or optional command.  No PATH
             location can be used inside the list.

             __________________________________________________          
             |                                                |    
             |                 CREATE LIST                    |
             |                                                |           
             |   1.  Create the list using a word processor   |         
             |       or text editor.                          |         
             |                                                |           
             |   2.  Type in the names of the files you       |         
             |       select using any MS-DOS file notation.   |         
             |                                                |           
             |   3.  The  @  symbol is needed to indicate     |        
             |       directory (PATH) changes.                |         
             |                                                |
             |   4.  RESTRICTION:  See SIZE FACTOR for        |
             |       PKPAK (page 9) and PKUNPAK (page 15)     |
             |                                                |           
             |                                List With       |
             |    List Without            Directory Notation  |
             |  Directory Notation          (files follow)    |
             |                                                |           
             |    Group      <--file name-->  NewGroup        |      
             |                                                |         
             |    Letters.Txt   <-inside->    @c:\LOTUS       |       
             |    Reports.*                   Account-?.Wks   |       
             |    Account-?.Wks               Monthly.*       |       
             |                                @c:\DBASE       |           
             |                                Address.Dbf     |     
             |________________________________________________|

How to Use the List:

     The List File is preceded by the @ symbol.  If the List File is
     not in the directory, the @ symbol is put BEFORE the PATH 
     designation.

     The List File can be mixed with other selections.

            C:>PKUNPAK  -r  NewFile.ARC   @Group  

            C:>PKUNPAK  AnyFile.ARC   Today.Txt  @Group  @Data

            C:>PKPAK  fc  MoreFile  @Group  @\LOTUS\Accounts

            C:>PKPAK  a  OldFile   *.Dbf  @OldStuff

                                 - 17 -

                           Password Protection


Password Protection keeps your files LOCKED.  It is important that you
follow EXACT procedures to insure that you can retrieve your files when
you want them.  

PKPAK and PKUNPAK contain NO record of your password.  The protection is
provided through a mathematical matching process contained in the CRC
check. 

WARNING:  Without the correct password, you file is garbled and CANNOT be
retrieved.

Refer to Command Reference Table for PKPAK, page 8 for further
information.

                                                                         
            _________________________________________________            
            |                                               |           
            |       CREATE a Password Protected File        |           
            |                                               |           
            |    Password can contain up to 63 letters      |
            |                                               |
            |  1.  Use the PKPAK program.                   |           
            |                                               |           
            |  2.  Use the  g  option in combination with   |           
            |      other options.  (Page 8)                 |           
            |                                               |           
            |  3.  NO SPACE between any options.            |           
            |                                               |           
            |  4.  NO SPACE between  g  and your password.  |           
            |                                               |
            |                  Placement of PASSWORD        |
            |                  |                            |           
            |                  |                            |           
            |      C:>PKPAK  agSECRET  NewFile  *.*         |           
            |                                               |           
            |      C:>PKPAK  mfcxgSECRET  NewFile  *.*      |           
            |_______________________________________________|           

            _________________________________________________ 
            |                                               |           
            |        UNarc a Password Protected File        |           
            |                                               |           
            |  1.  Use the PKUNPAK program.                 |           
            |                                               |           
            |  2.  Use the  -g  option by ITSELF.           |           
            |                                               |           
            |  3.  NO SPACE between  -g  and your password. |           
            |                                               |           
            |                    Placement of PASSWORD      |
            |                    |                          |           
            |                    |                          |           
            |       C:>PKUNPAK -gSECRET  NewFile.ARC        |           
            |_______________________________________________|           

                                 - 18 -
                 Revealing the File Compression Method




PKUNPAK is used in conjunction with the  -vv  Area 2 Command Option


-vv  =   Will display the ARCHIVE PROGRAM AND VERSION that the selected
         archive was created by.


             C:>PKUNPAK  -vv   VeryOld.ARC


             You Will See       What It Means

             PK 1.1             Made by PKARC version 1.1
             PK 1.2             Made by PKARC version 1.2
             PK 2.0             Made by PKARC version 2.0
             PK 3.5             Made by PKARC version 3.5
             PK 3.6             Made by PKPAK version 3.6
             PK >=2.0           Probably made by a version of PKARC of
                                  at least 2.0
             PK >3.6            Probably made by a version of PKPAK
                                  later than 3.6
             SEA ARC            Probably made by SEA's ARC program
             ???                Unknown
             
       ___________________________________________________________
       |                                                         |
       |   NOTE:   It is NOT always possible to discover the     |
       |           exact method used to develop the archive.     |
       |                                                         |
       |           -vv  is meant as a guide, but is not an       |
       |           absolute reference.                           |
       |_________________________________________________________|





















                                 - 19 -

                        LAN - Local Area Network

PKUNPAK automatically opens all archives with SHARE "deny write access"
under DOS 3.0 or above, so that files can be read concurrently by other
tasks.   PKPAK uses a UNIQUE filename for all temporary files created. 
This allows PKPAK to be run by concurrent programs or on a network drive
without any file contention or conflict.

PKPAK 3.6 can be forced to use fixed names for temporary files under DOS
3.0 and above by adding the line  TEMPNAMES=FIXED  to the configuration
file.  Care should be taken when using this option to make sure that
either the current directory or the directory pointed to by the PKPAKTMP
environment variable (see below) is on a local drive, to prevent any file
contention when PKPAK is run concurrently on multiple networked machines.


            PKPAK Archiving Configuration File Considerations


The config file MUST be set as an environmental string.  Two settings can
reside in the PKPAK.CFG file which are:

         ARCCOPY=C:\        Discussion on page 22

         FILECHECK=NORMAL    |__ choose either   
                  =RELAXED   |

         The default is "normal" which means that the program STOPS if it
         does not find a specified file.  The "relaxed" mode will simply
         make a notation on the screen that a file is NOT FOUND and will
         continue the process of archiving.  (See pages 6 and 9)

Two ENVIRONMENTAL VARIABLES can also be set.  This will speed up the time
it takes to execute the program.

     C:>SET  PKPAK.CFG=C:\UTILS      --->  In this case, PKPAK.CFG is
                                           located in \UTILS directory.
                                           Use the location of your
                                           choice.

     C:>SET  PKPAKTMP=D:             --->  This speeds up the program     
                      |                    operation DEFAULT by directing
                      |                    the mechanics of PKPAK to a
                      RAM disk.            RAM disk.
                      Drive Notation 
                      your choice.         NOTE:  This has NOTHING to do
                                           with the creation of the "new"
                                           archive file during the add or
                                           upgrade process.








                                 - 20 -

   Use of PKware in Batch File and Other Programs Where RAM is Limited 


The amount of RAM memory needed is as follows:

     PKPAK   -   125K                  PKPAKJR   -  90K
     PKUNPAK -    92K                  PKUNPAKJR -  68K
     PKSFX   -    71K

Number of files that can be handled during ONE sweep:

     PKPAK  3,977 files in archive    PKPAKJR  2,425 files in archive

There is NO limit to the amount of files an archive can hold outside of
available disk space.

The JR series of PKware does everything that the standard series does
except that it requires less memory, executes somewhat slower, and holds
1,552 fewer files in a single archive.  The JR series is excellent to use
in a smaller computer, environments using programs similar to DesqView,
Double DOS, Software Carousal, or linked with other programs developed in
dBase, Clipper, FoxBase, C, etc.
 
You can test if PKUNPAK experienced an error by using the DOS error level
variable.  PKUNPAK returns zero error level if no errors have occurred.  If
an error has occurred, PKUNPAK will display the following error codes:

     Abort Exit Codes
         2 - out of memory
         3 - no archives found to extract
         4 - can't open archive file
         5 - read error on archive
         6 - internal table overflow
         7 - disk full

     Non-Abort (warning) Exit Codes
         1 - bad CRC, file is not an archive, unknown compression method,
             can't create a file, squeeze table is invalid or no files
             found to extract.

You can test if PKPAK has aborted with an error using the DOS error level
variable.  PKPAK returns a non-zero error level if an error occurred, and
a zero error level for normal termination.


                      Use of a RAM Disk with PKPAK

PKPAK swaps information on and off disk memory as it runs.  This process
is NOT the same as the physical creation of the NEW archive.  The default
drive for this program activity is the drive from which the program was
executed.  You can speed up performance as well as gain disk space by
telling PKPAK which drive and/or subdirectory to use through a DOS
environmental strings.  (See page 20)  All routing can be directed to your
RAM Disk.

          C:>PKPAKTMP=D:   --->  where "D:" stands for the RAM disk

                                 - 21 -

                       Limited Disk Storage Space
                    Creating or Adding to an Archive

PKPAK creates a NEW pre-archive file every time you add information to an
existing one.  When the updating is completed, the old archive is
automatically deleted and the pre-archive file is substituted.  

Available disk storage space must be at minimum EQUAL TO or bigger than
the old archive.  If this is not available, the program will stop.

Space is not a problem on a hard disk.  It does pose restrictions on a
floppy disk.

You can route the creation of the pre-archive to another disk drive
through the combination of three activities:

     1.  The  -b  command option
     2.  The creation of a PKPAK.CFG config file which routes temporary
         files.
     3.  The setting of a MS-DOS environmental string.

The routing will cause more time to be used during the pre-archive
process, however, you can use it to successfully avoid floppy disk
limitations.

       ___________________________________________________________
       |                                                         |
       |     -b  Command - Pre-Archive File Routing Set Up       |
       |                                                         |
       |   Overrides the DEFAULT setting which places the        |
       |   pre-archive file in the SAME area as where the        |
       |   original archive exists.                              |
       |                                                         |
       |                                                         |
       |   1.  A PKPAK.CFG file MUST be created and placed in    |
       |       the area of your choice.                          |
       |                                                         |
       |             PKPAK.CFG      <---config file NAME         |
       |                                                         |
       |             ARCCOPY=C:\    <---config file CONTENTS     |
       |                     |                                   |
       |                     |                                   |
       |                     Your CHOICE of location             |
       |                                                         |
       |                                                         |
       |   2.  A MS-DOS environmental string must be set for the |
       |       config file.                                      |
       |                                                         |
       |       C:>SET  PKPAK.CFG=C:\UTILS   In this case, the    |
       |                         ________   config file is in    |
       |                           |        the \UTILS directory |
       |                           |                             |
       |                           AREA of your choice           |
       |                                                         |
       |_________________________________________________________|
                                                          continued ...

                                 - 22 -

                       Limited Disk Storage Space
               Creating or Adding to an Archive, continued



How to Use the  -b  Command:

     There are normally 4 AREAS that are typed on the command line.  The 
     -b  command immediately FOLLOWS the PROGRAM NAME. 

            1           2        3           4      <--Areas
         C:>PKPAK  -b   a   A:OldFile.ARC   *.*
                   ___
                    |
                    |
                    Place -b in this position

       _____________________________________________________________
       |                                                           |
       |                   Use of  -b  Command                     |
       |                                                           |
       |   1.  NO MENTION of the  -b  will DEFAULT to normal.      |
       |                                                           |
       |   2.  -b  by itself will invoke the SET UP as found in    |
       |       the config file.  If the config file isn't there,   |
       |       it will default to the CURRENT drive and directory. |
       |                                                           |
       |   3.  -bc:  will OVERRIDE either the set up or default    |
       |       and cause the pre-archive file to be written to     |
       |       the drive of your choice.  A RAM disk can be an     |
       |       option.                                             |
       |                                                           |
       |                 -bc:                                      |
       |                   |                                       |
       |                   |                                       |
       |                   Disk Drive location                     |
       |___________________________________________________________|

                                                                          
                         How An ARCHIVE is Made
                                                                          
      PKPAK creates a temporary archive file that has an extension        
      of .$$$  such as in  OldFile.$$$  during the archiving              
      process.  OldFile.$$$ is the upgraded version of OldFile.ARC        
                                                                          
      When all of your files have been successfully ARCed, the            
      old archive is deleted and the file with the extension .$$$         
      is simply renamed with a new extension .ARC                         
                                                                          
      It is FASTER to rename the temporary archive file than to           
      copy it from one disk drive to another.  The FASTEST way to         
      create your archive files is to do so from your largest disk 
      drive.  The -b option is used only when your space is limited.




                                 - 23 -

      Compatibility of PKware with Other File Compression Programs

PKware is upwardly compatible with all its own upgrades as well as with
most other file compression programs.  You can UNarc almost all of the
archive files that have been created.

There may be times when you need to CREATE an archive that is compatible
to one which can be read by SEA's ARChiving program.  This means you will
use LESS features to maintain compatibility.

         C:>PKPAK  otc   a   OldFile.ARC   *.*  
                   ___
                    |
                    |
                    This option, which IMMEDIATELY follows the program
                    name, will create an archive file that is compatible
                    with SEA's ARC.


                           Archive Time & Date

By default, whenever an archive is created or updated, PKPAK will set the
date of the archive file to the LAST TIME it was manipulated.  It is
possible to change the default so that the archive file date will be that
of the LATEST FILE WITHIN the archive.

The string  ARCHTIME=LATEST  in the PKPAK.CFG file will direct the program
to set the archive file date to match the date of the latest file within
the archive.

The option  -ot  can be used IN PLACE OF the configuration file:

            C:>PKPAK  -ot  a  OldFile.ARC

If you do have the alternative dating procedure set up in your configura-
tion file, you can OVERRIDE it with the  -nt  option:

            C:>PKPAK  -nt  a  BigFile.ARC


                           Disabling Squashing

PKPAK employs a compression technique known as Squashing.  Most archive
programs can extract squashed files.  Older archive programs, or archive
programs for some computers, may not support this method.  Squashing can
be disabled in PKPAK by placing  SQUASH=DISABLE  in the PKPAK.CFG file.

If you have placed the  SQUASH=DISABLE  string in your configuration file,
you can disable it using the  -oc  option:

            C:>PKPAK  -oc  a  MoreFile.ARC

You can also invoke the  -nt  option to OVERRIDE any directions in the
configuration file so that Squashing is used.

           C:>PKPAK  -nt  a  Ordinary.ARC

                                 - 24 -

                             Error Messages

                  PKPAK - File Compression / Archiving


Insufficient memory

     There is not enough free RAM memory to run PKPAK.  Try using PKPAKJR
     which uses less RAM memory.

Insufficient memory for List Files

     There is not enough free RAM memory to run PKPAK.  The physical "File
     List" file exceeds the RAM memory of your computer.  Break the large
     "File List" into several small "File Lists."

No archive specified
     
     The name of the archive file  (a file with an ARC extension) was not
     keyed correctly OR not keyed in at all.

No files specified for deletion

     SPECIFIC names must be given for file deletion.  

Can't find the "file/s specified"

     The specified file or files can not be found and archiving will not
     proceed.  The program will be aborted.

     NOTE:  If you choose the RELAXED method in your PKware config file,
     you will get the same warning, however, the program will CONTINUE. 
     (See page 20)

No file(s) found

     No files were found to add or update to the archive.

Can't create file "specified"

     The specified file can not be created.
     1.  The output directory has been incorrectly keyed
     2.  The output directory does not exist
     3.  The directory is full
     4.  The number of FILES specified in your computer's Config.Sys is
         too small.  The minimum should be  FILES=12.

Too many files

     The standard archive can store 3,977 files at a time.  PKPAKJR can
     store 2,425.

Too many paths

     A limit of 24 different drive and/or PATH specifiers can be used at a
     time.

                                 - 25 -
                 PKPAK - File Compression / Archiving

                        Error Messages, continued


"Specified archive file" - Error in Archive 

     1.  Although a file with the extension ARC is on the disk, it is not
         a true archive.

     2.  The name of the archive was mis-keyed

     3.  The archive was damaged or corrupted

Can't open "specified archive file"

     1.  The File Command Options (page 8) work only on an existing
         archive.

     2.  The archive name may be misspelled.
     
Disk full

     The disk you are working on is full.  You will be told specific
     information about which disk area is full: 

                    Drive   Path   File Location

"Specified archive file" is read-only!

     The displayed archive file is a read-only or system file.  No
     modification (add, update, delete, etc.) is possible.

Can't open config file:  PKPAK.CFG

     The environment string PKPAK.CFG= is incorrect, or a file error
     occurred while opening the configuration file.


Insufficient disk space for updated archive -- "specified archive file"

     Only happens when the -b option is used during addition or upgrading
     of files.  Although your file might have been successfully compiled
     on a large disk drive, there may not be enough space on the small
     drive to hold the increased size of the archive.













                                 - 26 -
               PKUNPAK - File Reconstruction / Extraction

                             Error Messages


Warning!  File "selected" already exists!  overwrite (y/n)?

     A file to be extracted from the archive already exists on disk.
         Answer   Y    "selected file"  will overwrite what is on disk
                  N     "        "      will NOT overwrite what is on disk

     Use of the  -r  option will avoid this warning.


Unknown packing method for:  "selected file"

     The file is compressed or encoded in an unknown way.  The archive is
     either CORRUPT or requires a LATER VERSION of PKUNPAK for proper
     extraction.


Warning!  File "selected" fails CRC check

     The file is probably corrupt.  The Cyclic Redundancy Check
     calculation did not match the stored value.


"Selected archive file" - error in archive 

     The file selected is either not an archive or is corrupt.


Can't find "selected archive file"

     The selected archive file cannot be found.  This could be caused by a
     typing error or the actual absence of a file.


No files found

     The select file/s within an archive do not exist or have been
     miskeyed.


Can't create:  "selected file"

     The output DIRECTORY is either INVALID or FULL.  Check your directory
     name and/or whether or not it has been created. 


File has invalid decode tree

     The file is corrupt.





                                 - 27 -

Disk full

     You will be told specific information about which disk area is full:
     Drive   Path   File Location


Internal table overflow

     The file is corrupt.


Insufficient memory

     There is not enough free RAM memory to run PKUNPAK.  Try using
     PKUNPAKJR which uses less RAM memory.



     






































                                 - 28 -






                                                                  |
                                                                  |
                                                                  |
                                  PKSFX - Self-Extraction Utility |
                                                                  |
                                                                  |
                                                                  |


                     PKSFX - Self-Extraction Utility


Archives can be reconstructed without PKUNPAK through the use of Self-
Extraction methods.  This is handy for those times when you simply need to
transfer compressed files to a person who may not be familiar with
archiving.


    ___________________________________________________________________
    |                                                                 |
    |                    Creating the PKSFX.PGM                       |
    |                                                                 |
    |       The self-extracting utility must be created prior to      |
    |       the FIRST time you use it.                                |
    |                                                                 |
    |       In the SAME directory as your file PK36.EXE, type         |
    |       the following:                                            |
    |                                                                 |
    |                C:>MAKESFX                                       |
    |                                                                 |
    |        You will be prompted through the steps.                  |
    |_________________________________________________________________|


    ___________________________________________________________________
    |                                                                 |
    |              Creating a SELF-EXTRACTING Archive                 |
    |                                                                 |
    |                                                                 |
    |    1.  Create the archive file with PKPAK.                      |
    |                                                                 |
    |    2.  Copy the archive file as follows:                        |
    |                                                                 |
    |     C:>COPY/b  PKSFX.PGM  +  OldFile.ARC   NewName.EXE          |
    |        ______  _________  _  ___________   ___________          |
    |         |       |         |   |              |                  |
    |         |       |         |   |              |                  |
    |        DOS     PROGRAM    |   Existing       Name YOU give      |
    |        Command            |   archive file   to the self-       |
    |                           |                  extracting file    |
    |                           type + sign        with EXE extension |
    |_________________________________________________________________|


             PKSFX.PGM can be used in conjunction with ALL
             of the PKUNPAK commands. 










                                 - 29 -






                                                                  |
                                                                  |
                                                                  |
                                      Registration and Background |
                                                                  |
                                                                  |
                                                                  |


                            Technical Support


If you have any further questions or comments about PKware File
Compression programs, contact:

         Mail

             PKware, Inc.
             7032 Ardara Avenue
             Glendale, WI  53209

         BBS by Modem - 24 hour support 

             1 - 414 - 352-7176

         Voice

             1 - 414 - 352-3670




                      Other Background Information


Phil Katz is a registered member of the Association of Shareware
Professionals.

Special thanks goes to...

     Karen Little for writing the PKware User's Manual.  An additional
     thanks to Bob Mahoney of Exec-PC BBS, Rob Greenberg, Joe Vincent,
     Alan Losoff, and everyone else who has generously contributed their
     time toward this endeavor.

                                            Phil Katz




















                                 - 30 -


    ___________________________________________________________________
    |                                                                 |
    |                         REGISTRATION                            |
    |                                                                 |
    |   If you find PKPAK, PKUNPAK, and PKSFX fast, easy, and con-    |
    |   venient to use, a partial registration of $20 would be        |
    |   appreciated.                                                  |
    |                                                                 |
    |   If you send $47 or more, you will receive, when available,    |
    |   an ALL NEW data compression utility with better & different   |
    |   compression methods, enhanced functionality, and increased    |
    |   user friendliness.                                            |
    |                                                                 |
    |   Please state the current version number of the software you   |
    |   are presently using.  Send check or money order to:           |
    |                                                                 |
    |                       PKware, Inc.                              |
    |                       7032 Ardara Avenue                        |
    |                       Glendale, WI  53209                       |
    |_________________________________________________________________|


                            Software License

PKPAK, PKUNPAK  Copyright 1986-1988 PKWARE Inc.  All Rights Reserved.
PKSFX           Copyright 1987-1988 PKWARE Inc.  All Rights Reserved.

You are free to use, copy and distribute PKPAK, PKUNPAK, and PKSFX for
NONCOMMERCIAL use if:

           No fee is charged for use, copying or distribution.

                     It is not modified in any way.


Clubs and user groups may charge a nominal fee for expenses and handling
while distributing PKPAK, PKUNPAK, and PKSFX.

Site licenses, commercial licenses and custom versions of PKPAK, PKUNPAK,
and PKSFX are available.  Consult the file ORDER.DOC for more information
or write or call PKware for more information.


    ___________________________________________________________________
    |                                                                 |
    |                           WARRANTY                              |
    |                                                                 |
    |   PKware, Inc. makes no warranties, expressed or implied,       |
    |   including, but not limited to, merchantability or fitness     |
    |   for any particular purpose.  In no event shall PKware, Inc.   |
    |   be liable for indirect or consequential damages arising from  |
    |   the use of the software programs.                             |
    |_________________________________________________________________|



                                 - 31 -

                Disk Drive location                     |
       |___________________________________________________________|

                                                                         
                         How An ARCHIVE is Made
                                                                
      PKPAK creates a temporary archive file that has an extension          
      process.  OldFile.$$$ is the upgraded version of OldFile.ARC        
                                
```
{% endraw %}

## ORDER.DOC

{% raw %}
```

Features of PKPAK FAST! Archive Create/Update Utility,
	    PKUNPAK FAST! Archive Extract Utility and
	    PKSFX FAST! Self-Extract Utility:

  o PKPAK can compress your files to increase disk storage capacity
    and reduce modem transmission time.  PKPAK can typically compress
    files better than any other comparible archive utility.

  o PKPAK can place many files into one archive file, reducing the
    number of files needed to be stored on diskettes or a hard disk.
    The files within each archive can be listed in alphabetical
    order, and the exact number of files in each archive displayed.
    Each archive and each file within an archive can be given a
    comment up to 32 characters in length, allowing for easy
    self-documenting archives.

  o PKPAK employs several differnt state-of-the-art data compression
    algorithms, and uses the most optimal method for each file.  The
    result of the compression is an average savings in disk space of
    40-60%, with spreadsheet and database files oftentimes compressing to
    1/10th of their original size or less.  In addition to doubling disk
    storage capacity, this can reduce modem transmission time in half!

  o PKPAK and PKUNPAK have full archive maintenance functions and 
    advanced features, such as file encryption, configuartion 
    options, and multitasking & network support.  Data intregity
    is ensured by a 16 bit CRC.

  o PKSFX converts an archive file into an executable file that
    automatically extracts and decompresses your files when run,
    creating convenient self-extracting archives.

  o PKPAK, PKUNPAK, and PKSFX are written in C, with highly optimized
    assembly language routines, making them the FASTEST archive programs
    available anywhere.

  o PKPAK, PKUNPAK, and PKSFX will run on any MS-DOS computer using MS-DOS
    version 2.0 or above, and require only 90K of free memory to run.

  o PKPAK, PKUNPAK, and PKSFX are not copy protected.


Features of StupenDOS, the only DOS shell you'll ever need:

  o Menu driven, easy to use keyboard commands and full mouse support.
  o Copy or Move multiple files to any drive or subdirectory.
  o Delete tagged files from the current subdirectory.
  o Delete all *.BAK or other specfied files from the entire hard disk.
  o Tree feature shows the entire hard disk subdirectory structure.
    Easily change drive and/or subdirectory, with memory recall.
  o Sort files by name, size, date & time, or extension, ascending or
    descending order.
  o View text files on the screen using the DOS "type" command or
    use your favorite program to display a file.
  o Make and Remove subdirectories.
  o Select and run other programs or DOS commands from within StupenDos.
  o Change file attributes.  Hide and unhide files and subdirectories.
  o StupenDOS supports Black & White and Color monitors, including
    EGA 43 line mode.  Requires an IBM or compatible computer with 128K
    free memory  StupenDOS is not copy protected.

                                                        PKWARE Inc., 1988
                            ORDER FORM__________


TO:                           FROM:

PKWARE, Inc.                  Name: __________________________________
7032 Ardara Avenue
Glendale, WI 53209       (Company): __________________________________

414-352-3670 Voice         (Title): __________________________________
414-352-7176 BBS
			   Address: __________________________________
Today's          
date: ___________       City,State: __________________________________
                                                              Zip Code
		      Phone Number: _________________________


PKPAK, PKUNPAK, and PKSFX  Current Version: 3.61
  * Diskette with programs and manual ................... $45.    ______

  * Commercial site license for the use of PKPAK, PKUNPAK & PKSFX.
    (Includes one diskette with programs & manual.
     Additional program disks with manuals $7.00 each)  ___x  7   ______
     2 to  9 computers ..... at $32 each    # computers ___x 32   ______
    10 to 24 computers ..... at $23 each    # computers ___x 23   ______
    25 to 49 computers ..... at $18 each    # computers ___x 18   ______
    50 to 99 computers ..... at $14 each    # computers ___x 14   ______
    100 or more computers .. $1400 one time fee                   ______

StupenDOS                 Current Version: 1.0
 ** Diskette with program and documentation files ....... $35.    ______

 ** Commercial site license for the use of StupenDOS
    (Includes one diskette with programs & documentation files
     additional program disks available for $5.00 each) ___x  5   ______
     2 to  9 computers ..... at $25 each    # computers ___x 25   ______
    10 to 24 computers ..... at $21 each    # computers ___x 21   ______
    25 to 49 computers ..... at $18 each    # computers ___x 18   ______
    50 to 99 computers ..... at $15 each    # computers ___x 15   ______
    100 or more computers .. $1500 one time fee                   ______

Please add $3.50 for shipping and handling.                 $5.00 / 3.50
(Please add $5.00 for overseas orders.)

Wisconsin residents add 5% sales tax.                             ______

					Total enclosed            ______

Diskette format (choose one)        5.25" disk ____    3.5" disk ____

Terms:  Check drawn on a U.S. banks in U.S. funds.
	International bank or postal money order in U.S. funds.
	Purchase orders accepted from larger corporations.
	All foreign orders must be prepaid.

*  Includes one free upgrade to an ALL NEW data compression utility,
   when avaliable, with better & different compression methods,
   enhanced functionality, and increased user friendliness.
** Includes one free upgrade of the software, when available.


                                                       PKWARE, Inc. 1988
Information on Site & Commercial Licenses and Custom Versions
-------------------------------------------------------------


Corporate Site License

    This is a license for use of the software within your 
    company, and is not transferable.  This allows internal use 
    and copying of the software by as many users/machines as 
    contracted for.  (See the order form for Site License price 
    schedule).  An unlimited Site License allows unlimited 
    copying of the software for internal use by your company.  
    Distribution, repackaging, or reselling of the software to 
    third parties is not allowed.


Distribution License

    This allows distribution of the software with commercial 
    software that is manufactured by your company.  This license 
    is non-exclusive and non-transferable.  Please complete and 
    return the application for a distribution license on the 
    reverse side of this form.  Once we receive the completed 
    application you will be sent a quote for a one time 
    Distribution License fee.
    
    This license is not necessary for clubs or users groups 
    distributing the software on a ShareWare basis providing that 
    the entire PKPAK/PKUNPAK/PKSFX package with accompanying 
    documentation files is included in the distribution and no 
    more than a nominal fee (not to exceed $10) is charged for 
    such distribution.


Custom Versions of the Software

    If you require any modifications or changes to the software, 
    please include detailed information describing all changes 
    you are interested in.  Customization fees will be based on 
    the extent of modifications required to the software so that 
    it performs as you describe.  Depending on the changes 
    requested, please allow up to four weeks for custom versions 
    of the software.


Availability of Source Code

    It is the policy of PKWARE Inc. not to release source code 
    for its products.









                                                       PKWARE, Inc. 1988
		Application for Distribution License
		------------------------------------



Name:       __________________________________

(Company):  __________________________________

(Title):    __________________________________

Address:    __________________________________

City,State: __________________________________
                                      Zip Code
Phone #:    (_____)___________________

Today's date: ________________________________



Please complete as best as possible:


1)  I am interested in distributing the program(s) PKUNPAK ___
    PKPAK ___ PKSFX ___ (check all that apply).


2)  In what quantity do you estimate distributing the software 
    indicated above?  __________ copies.  This is per year ___ or 
    one time ___ (check only one).


3)  If you are interested in distributing PKUNPAK or PKSFX to save 
    diskettes required to distribute your software, how many 
    disks does your software package require without 
    compression _____, and how many disks are required if the 
    software is distributed in compressed form _____?


4)  Please describe the intended usage of the PKWARE programs 
    indicicated in question 1.  If possible, please describe the 
    software package(s) that you intend to distribute with the 
    PKWARE programs and their price.  Also, list below any other 
    relevant information:








5)  Your company is incorporated in what State/Country _________________




                                                       PKWARE, Inc. 1988

```
{% endraw %}

## README.DOC

{% raw %}
```



This diskette contains the file PK361.EXE.  Type

PK361

followed by pressing the Enter key to create the program and
documentation files for PKUNPAK, PKPAK, and PKSFX version 3.6.
To print the documentation files after running PK36, type

COPY *.DOC PRN

followed by the return key.


If you distribute PKUNPAK, PKPAK, and PKSFX to friends, associates, 
or to a computer bulletin board system (BBS), please distribute the 
file PK361.EXE rather than the individual files for PKUNPAK, PKPAK
and PKSFX.


```
{% endraw %}

## RELEASE.DOC

{% raw %}
```
                FOR RELEASE ON AUGUST 1, 1988


From:     System Enhancement Associates, Inc. (SEA)
          and
          PKWARE, Inc. and Phillip W. Katz (PK)
          

August 1, 1988 - Milwaukee, WI

          In the first known "Shareware" litigation, pending in
the local United States District Court, the parties System En-
hancement Associates, Inc. (Plaintiff - SEA) and PKWARE, Inc.
/ Phillip W. Katz (Defendants - PK), after reaching agreement,
consented to the entry of the attached Judgment for Plaintiff
on Consent.  That Judgment was entered by Judge Myron L.
Gordon, effective on August 1, 1988.

          Part of the agreement reached by the parties included
a Confidential Cross-License Agreement under which SEA licensed
PK for all the ARC compatible programs published by PK during
the period beginning with the first release of PKXARC in late
1985 through July 31, 1988 in return for the payment of an
agreed upon sum which was not disclosed.  Additionally, PK was
licensed, for an agreed upon royalty payment, to distribute its
existing versions of PK's ARC compatible programs until January
31, 1989, after which PK is not licensed and agreed not to pub-
lish or distribute any ARC compatible programs or utilities that
process ARC compatible files.  In exchange, PK licensed SEA to
use its source code for PK's ARC compatible programs.

          PK agreed to cease any use of SEA's trademark "ARC"
and to change the names or marks used with PK's programs to
non-confusing designations.

          The Judgment provided for the standard copyright,
trademark and unfair competition injunctive relief for SEA a-
gainst PK, as well as damages and litigation expenses to be paid
by PK to SEA.

          Both parties agreed to refrain from any comment
concerning the settlement of the disputes, other than the text
of this press release.  Also, the parties instructed all of their
representatives to refrain from any such activity.

          Any other details of the Cross-License Agreement
were agreed to be maintained in confidence and under seal of
the Court.

          In reaching the agreement to dispose of the pending
litigation and to settle the disputes that are covered thereby,
PK did not admit any fault or wrongdoing.

```
{% endraw %}

## SOFTDEV.DOC

{% raw %}
```

PKWARE is in the process of creating an ALL NEW data compression utility
with better & different compression methods, enhanced functionality, and
increased user friendliness.

If you are a software developer, and are interested in supporting files
created by this new utility, please fill out and send in the enclosed
application for a "software development kit".  This kit will include
pre-release information when available, such as file format specifications,
and beta software releases.  There is no charge for this kit to approved
software developers.


Name      __________________________________          Send to:

(Company) __________________________________          PKWARE Inc.
                                                      7032 N. Ardara Ave.
Address   __________________________________          Glendale, WI 53209

City, ST  __________________________________
                                         ZIP
Phone #   _________________________________




Please describe any archive processing software you have written in the
past:















Please describe the software that you intend to use this information
with:


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1330

     Volume in drive A has no label
     Directory of A:\

    APPNOTE  TXT      3695   8-02-88
    FILE1330 TXT      1729   2-23-89   3:34p
    GO       BAT        42   2-23-89   3:34p
    MAKESFX  COM       876   8-02-88
    MANUAL   DOC     91137   8-02-88
    ORDER    DOC      9680   8-02-88
    PK361    EXE    119591   8-02-88
    PKPAK    EXE     21720   8-02-88
    PKPAKJR  EXE     21702   8-02-88
    PKUNPAK  EXE     15112   8-02-88
    PKUNPAKJ EXE     15030   8-02-88
    README             529   8-02-88
    README   DOC       529   8-02-88
    RELEASE  DOC      2310   8-02-88
    SOFTDEV  DOC      1193   8-02-88
           15 file(s)     304875 bytes
                            9216 bytes free
