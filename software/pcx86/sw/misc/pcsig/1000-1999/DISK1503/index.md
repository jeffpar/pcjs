---
layout: page
title: "PC-SIG Diskette Library (Disk #1503)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1503/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1503"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "GETFILE AND MORE"

    WISEDIR streamlines and updates the old DOS DIR command. It shows ALL
    your files -- including system, hidden, and read-only files -- in ALL
    your subdirectories.
    
    Copy to the screen or print the file list of filenames with attributes,
    file size, and date and time of creation. WISEDIR also tells you the
    system date and time, and provides a summary of disk space available and
    used. WISEDIR can be used on networks.
    
    SETATTR makes it easy to set or change the attributes of your files.
    
    With a single command, you can make a file normal, hidden, read only,
    or a system file. SETATTR saves time by supporting wild cards and
    directories. Change the attributes of entire blocks of files. It
    displays the names and new or old attributes of changed files. A help
    function is included. Networks are supported.
    
    If you've ever experienced the frustration of looking for a rarely-used
    file on a crowded disk, you will appreciate this utility. GETFILE will
    immediately find a file on a disk drive, even if it is hidden!
    
    Tell GETFILE the drive and filename and it will search all directories
    and subdirectories until it is found... and then switch you to that
    subdirectory! OK, so it's been a long time and you're not sure what the
    filename is. GETFILE can deal with wildcards. Get as close as you can
    to the vaguely remembered name and it will offer you a list of those
    files that match your request, and the subdirectory path to find them.
    
    GETFILE is especially useful for finding files on a hard disk.
    
    Like to increase the amount of storage available on your floppy disks?
    Format your disks with MAXI FORM and you can expand storage on your 360K
    disks by one-sixth: you get 420K bytes free.  On 1.2 Meg drives, you get
    1.4 meg; on 720K 3.5 inch drives you get 800K; and on 1.44 Meg 3.5 inch
    drives you get an incredible 1.6 Meg per disk!  You also get 800K on a
    normal 360K 5.25 inch disk in a 1.2 Meg drive.
    
    It's as simple as putting a disk in a slot and typing MAXI A: (with a
    few command line options, if you wish).  The default "fast format"
    method can create a 420K disk in under 40 seconds, while an optional
    verify switch lets you check each track as it is formatted.  MAXI
    created disks are not bootable.
    
    Forget the DOS backup command.  Now there's COPYALL which backs up hard
    disk files quicker and neater.  COPYALL copies files in alphabetical
    order.  That means folks with messy hard disks can use it to bring
    order to their files.  Happily, it uses wild cards and shows the
    name of each file as it's copied.  COPYALL works on any file as long as
    it is not larger than the diskette it is copied to.
    
    FILEVIEWER -- a alternative to the hassle of DOS. If you still can't
    find your magic DOS-decoder ring, try this file manager.
    
    Every DOS command can be executed with a maximum of two keystrokes. Move
    smoothly from file to file, directory to directory. Sort entire
    directories for viewing on screen by name, extension, age, or size of
    files.  Tag files for mass copying and deleting. A thoughtful touch is
    the confirmation prompt to protect against accidental deletion or
    copying over existing files.
    
    FILEVIEWER provides an execution menu that calls application programs
    in two quick keystrokes. Flip between displaying 20 sorted files at a
    time with size and date information, or 80 files at a time with only
    the filenames.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COPYALL.DOC

{% raw %}
```
'     COPYALL Version 1.2 ----- Copyright 1988, Timothy J. O'Malley

     COPYALL is a shareware program that can be used much like the DOS
COPY command and may be distributed and copied freely as long as both
files, COPYALL.EXE and COPYALL.DOC, are copied in their entirety and
without modification. This software is intended to be used on an "AS IS"
basis and the author assumes NO responsibility for the performance or
application of this software product or any damages arising from its use.
The user, therefore, must determine the suitability of this software for
his computer or application.

     Here are three examples:


C>COPYALL C:\*.COM A:          This copies all .COM files in the root
                           directory on drive C: to diskettes on drive A:

C>COPYALL PA* B:               This copies all files starting with PA in
                           the current directory to diskettes on drive B:

C>COPYALL FILES A:             If FILES is a subdirectory from the current
                           directory, it will copy all those files to A:
                               If FILES is the name of a file, then it
                           will copy it.

ADVANTAGES:
     You can copy multiple files to several diskettes without using the
DOS BACKUP command (which doesn't allow you to see file names). The files
are copied in alphabetical order and all of an individual file resides on
only one diskette.

DISADVANTAGES:
     Large files can't be copied if they exceed the size of the diskette.
COPYALL can't be used in a batch file and must have a drive destination
letter assigned. You can't use CON or PRN with it. Files with spaces
inside their names, like PAGE 1.TXT, aren't copied (just like DOS COPY).

```
{% endraw %}

## FILE1503.TXT

{% raw %}
```
Disk No: 1503                                                           
Disk Title: Getfile and More                                            
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: WiseDir                                                  
Author Version: 2.00                                                    
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
WISEDIR streamlines and updates the old DOS DIR command.  It shows ALL  
your files -- including system, hidden, and read-only files -- in ALL   
your subdirectories.                                                    
                                                                        
Copy to the screen or print the file list of filenames with attributes, 
file size, and date and time of creation.  WISEDIR also tells you the   
system date and time, and provides a summary of disk space available and
used.  WISEDIR can be used on networks.                                 
Program Title: SetAttr                                                  
Author Version: 2.0                                                     
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
SETATTR makes it easy to set or change the attributes of your files.    
                                                                        
With a single command, you can make a file normal, hidden, read only,   
or a system file.  SETATTR saves time by supporting wild cards and      
directories.  Change the attributes of entire blocks of files.  It      
displays the names and new or old attributes of changed files.  A help  
function is included.  Networks are supported.                          
Program Title: GetFile                                                  
Author Version: 2.00                                                    
Author Registration: $15.00                                             
Special Requirements: None.                                             
                                                                        
If you've ever experienced the frustration of looking for a rarely-used 
file on a crowded disk, you will appreciate this utility.  GETFILE will 
immediately find a file on a disk drive, even if it is hidden!          
                                                                        
Tell GETFILE the drive and filename and it will search all directories  
and subdirectories until it is found...and then switch you to that      
subdirectory!  OK, so it's been a long time and you're not sure what the
filename is.  GETFILE can deal with wildcards.  Get as close as you can 
to the vaguely remembered name and it will offer you a list of those    
files that match your request, and the subdirectory path to find them.  
                                                                        
GETFILE is especially useful for finding files on a hard disk.          
Program Title: MAXI Form                                                
Author Version: 1.6                                                     
Author Registration: $10.00 individuals; $100.00 corporate site license.
Special Requirements: DOS 3.2 or later.                                 
                                                                        
Like to increase the amount of storage available on your floppy disks?  
Format your disks with MAXI FORM and you can expand storage on your 360K
disks by one-sixth: you get 420K bytes free.  On 1.2 Meg drives, you get
1.4 meg; on 720K 3.5 inch drives you get 800K; and on 1.44 Meg 3.5      
inch drives you get an incredible 1.6 Meg per disk!                     
                                                                        
It's as simple as putting a disk in a slot and typing MAXI A: (with a   
few command line options, if you wish).  The default "fast format"      
method can create a 420K disk in under 40 seconds, while an optional    
verify switch lets you check each track as it is formatted.  MAXI       
created disks are not bootable.                                         
Program Title: CopyAll                                                  
Author Version: 1.2                                                     
Author Registration: None.                                              
Special Requirements: None.                                             
                                                                        
Forget the DOS backup command.  Now there's COPYALL which backs up hard 
disk files quicker and neater.  COPYALL copies files in alphabetical    
order.  That means folks with messy hard disks can use it to bring      
order to their files.  Happily, it uses wild cards and shows the        
name of each file as its copied.  COPYALL works on any file as long as  
it is not larger than the diskette is copied too.                       
Program Title: FileViewer                                               
Author Registration: $25.00                                             
Special Requirements: None.                                             
                                                                        
FILEVIEWER -- a alternative to the hassle of DOS.  If you still can't   
find your magic DOS-decoder ring, try this file manager.                
                                                                        
Every DOS command can be executed with a maximum of two keystrokes.     
Move smoothly from file to file, directory to directory.  Sort entire   
directories for viewing on screen by name, extension, age, or size of   
files.  Group files with the tagging option for mass copying and        
deleting.  A thoughtful touch is the confirmation prompt to protect     
against accidental deletion or copying over existing files.             
                                                                        
FILEVIEWER provides an execution menu that calls application programs in
two quick keystrokes.  You can flip between displaying 20 sorted files  
at a time with size and date information, or 80 files at a time with    
only the filenames.                                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GETFILE.DOC

{% raw %}
```










		++++++++++++++++++++++++++++++++++++++++++++++
	 	+               G E T F I L E      	     +
		+	                       		     +
		+	        User's Guide                 +
		+	       Version - 2.00		     +
		+					     +
		+               July 27, 1988		     +
		+		         		     +
		+  (C) Copyright 1988 - All Rights Reserved. +
		+					     +
		++++++++++++++++++++++++++++++++++++++++++++++





	  +++++++++++++++++++++++++++++++++++++++++++++++++++++++
	  |		      Shareware		                |
	  |						        |
	  | We encourage you to freely copy and share unmodified|
	  | copies of this program with other people. If you    |
	  | decide to use the program, support the Shareware    |
	  | marketing concept by becoming a registered user.    |
	  | Read the appendix for further details.	        |
	  +++++++++++++++++++++++++++++++++++++++++++++++++++++++














   			  	Tarbex Software
		              523 Albany Ave. NE
		             Orange City, IA 51041















  		       THE USER-SUPPORTED CONCEPT


User-supported software is an experiment in distributing computer programs
based on the following beliefs:

1.	That the value and utility of software is best assessed
	by the user on his/her own system.

2.	That the creation of personal computer software can and should be
	supported by the computing community.

3.	That copying of programs should be encouraged, rather than restricted.


Anyone may legally obtain an evaluation copy of the program from a friend or
computer club. After you have had a chance to use and evaluate the program in
your own environment, you are trusted to either forward a payment to Tarbex
Software or to discontinue use of the program.

If an "Evaluation notice" screen is displayed and you have to press a key to
continue each time you start the program, then you are using the Shareware
version and you are encouraged to register.

Free distribution of software and voluntary payment for its use eliminates
costs of advertising and copy protection schemes. Users obtain quality
software at greatly reduced costs. They can try it out before buying, and
do so at their own pace and in the comfort of their own home or office.
The best programs will survive, based solely on their quality and usefulness.

Program Licensing Agreement

YOU SHOULD CAREFULLY READ THE FOLLOWING TERMS AND CONDITIONS BEFORE USING
GETFILE. USING GETFILE INDICATES YOUR ACCEPTANCE OF THESE TERMS AND CONDITIONS.
IF YOU DO NOT AGREE WITH THEM, PROMPTLY RETURN THE PACKAGE.


LICENSE

A limited license is granted to any user of the program to freely copy and
distribute the product on the following conditions:

You may:

	-  Use this program on any microcomputer on which this
           program was designed to operate.
	-  Copy the program into any machine readable form for
	   backup purposes.
	-  Freely copy and share unmodified copies of this
           program with your associates.

YOU MAY NOT:
	-  Sell the product for a fee and/or distribute the
           product along with other products without express
           written permission.
        -  Grant sublicense, leases, or other rights of the
           software to others.
        -  Make verbal or media translations of the user's
           manual.
	-  Modify or remove the Copyright notice from the
           program, diskette or its manual.





	-  Modify the program, diskette or manual and/or merge
	   it into another program for any machine.
	-  "Rent" the product to others.
	-  Bundle and sell this product as part of another
           more inclusive package.
	-  Club members  who receive the program are informed
	   in writing of the user-supported concept and
           encouraged to support it with their payments.

TERMS AND CONDITIONS

The license is effective until terminated. You may terminate it at any time
by destroying the diskette(s) containing the program. The license and the
rights thereof terminate if you fail to comply with any term or condition
of this agreement. You agree further, upon termination, to destroy the
program together with any modifications and/or merged portions in any form.


Limited Warranty
----------------

THE PROGRAM IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER
EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FAIRNESS FOR A PARTICULAR PURPOSE.
THE ENTIRE RISK AS TO QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH
YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE ENTIRE COST
OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION. SOME STATES DO NOT
ALLOW THE EXCLUSION OF IMPLIED WARRANTIES SO THE ABOVE EXCLUSION MAY
NOT APPLY TO YOU. THIS WARRANTY GIVES YOU SPECIFIC LEGAL RIGHTS AND
YOU MAY ALSO HAVE OTHER RIGHTS WHICH VARY FROM STATE TO STATE.

IN NO EVENT WILL TARBEX SOFTWARE BE LIABLE TO YOU FOR ANY DAMAGES INCLUDING
ANY LOST PROFITS, LOST SAVINGS OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES
ARISING OUT OF THE USE OR INABILITY TO USE THIS PROGRAM EVEN IF TARBEX
SOFTWARE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR ANY CLAIM BY
ANY OTHER PARTY.

SOME STATES DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR
INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION
MAY NOT APPLY TO YOU.

Should you have any questions concerning this agreement, you may contact
Tarbex Software by writing to :

		Tarbex Software
		523 Albany Ave. NE
		Orange City, IA 51041


YOU ACKNOWLEDGE THAT YOU HAVE READ THIS AGREEMENT AND UNDERSTAND IT AND
AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS. YOU FURTHER AGREE THAT
IT IS THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN US
WHICH SUPERSEDES ANY PROPOSAL OR PRIOR WRITTEN AGREEMENT, ORAL OR WRITTEN,
AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO THE SUBJECT MATTER OF
THIS AGREEMENT.











SITE LICENSES AND BUNDLING ARRANGEMENTS:

Companies, schools, universities, government, and other organizations are
granted permission to copy the program with the documentation file for use
on other computers and at other locations in the company, so long as :
	1.	The program has been registered.
	2.	The full registration fee of $15 has been paid for each
                and every system on which the program will be used.

Corporate site licences and bundling arrangements are available direct
from Tarbex Software.

Corporate licenses and volume discounts are available upon request.

Bundling arrangements can be used to distribute copies of this program in
order to promote some other product or service.

Note that neither of these activities are permitted under the limited
license granted to all users of this program without the expressed written
consent of Tarbex Software.


				   REGISTRATION


If you purchased a copy of this program directly from Tarbex Software in
your name, then your copy is already registered and you will receive all
the benefits of registration. You do not need to send the registration form.
If you received this program some other way then you need to register your
copy of the program. To register and to avail registration benefits, complete
the order/registration form and mail it to Tarbex Software with your check
of $15 to cover postage and handling and other benefits mentioned below.

As a registered user you will receive:

	- The new version of this program. Some additional
          features of which are:
	     - While using wild-cards the list is printed in the DOS Dir format.
	     - Pauses the output once the screen is full.

	- Printed 2-3 pages of documentation in the DOS manual format
          and size. Ready for you to insert in the DOS manual for further
          reference.

	- Limited telephone and written support.

	- Evaluation copies of other programs from Tarbex
          Software will be sent to you at no extra charge.

In addition, you will be supporting software distribution under the
shareware concept and will be contributing to the further development
of this and other shareware products.















		    ORDER/REGISTRATION  FORM


Mail To:


Tarbex Software
523 Albany Ave. NE
Orange City, IA 51041

______________________________________________________________

					PRICE	    PRICE
PRODUCT			QTY		EACH	    EXTENDED
______________________________________________________________

GetFile               	___	X       $15.00  =  $__________



				          TOTAL   $___________




Name:_______________________________ Phone:___________________

Company:______________________________________________________

Address:______________________________________________________

Address:______________________________________________________

City/State:___________________________________________________

Zip:____________________

Where did you learn about this program or where did you first obtain
a copy of this program?
__________________________________________________________________

__________________________________________________________________

__________________________________________________________________









* Foreign orders must be paid in US$ with a check drawn on a US bank
or through the US branch of a foreign bank,or through an international
money order.









					GetFile
				Written By Rahul Bhandari


	Have you experienced the frustration of looking thru all those
never ending directories for a file which you needed immediately. You
were sure that its somewhere on that hard drive BUT WHERE in all those
Directories and subdirectories? And God help you if the file you were
looking for is a hidden one!
	 Well here is a program which will make finding any kind of file
just a matter of moments no matter if the file is Hidden or buried deep
down in the dense jungle of directories and subdirectories. All you have
to know is the drive in which your file might be. Incase you don't remember
the exact file name --  no problem use wild cards. GetFile will give you
a list of all the files in all the directories which match your wild cards.
You think GetFile will tell you -- Hey, this is where your file is now
get to work and start changing the drive and directories like most other
programs on the market do. Well GetFile will do more than that. It will
not only tell you where your file is but will also change the drive and
directories for the first complete filename that will match the one you
have supplied and that too just in moments! In case of wildcards it'll
give you the list of the files as mentioned above.
	Do you think GetFile will be tough to work with? You can answer
this yourself after using it just once. Here are some of the commands:

	GetFile [Drive:FileName]   and Press <<ENTER>>

And belive it or not this is it! you don't have to give it any directories
just the drive and the file name. For filename you may use wild cards.
And what more, GetFile also works with networks.
	If anytime you get stuck just type in "GetFile /H" and a help screen
will appear.
       Pretty Nifty UH!
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk No 1503 GETFILE & More  >>>>                ║
╠═════════════════════════════════════════════════════════════════════════╣
║         To run the GETFILE program, type GETFILE (press enter)          ║
║                                                                         ║
║         To run the COPYALL program, type COPYALL (press enter)          ║
║                                                                         ║
║         To run the SETATTR program, type SETATTR (press enter)          ║
║                                                                         ║
║         To run the WISEDIR program, type WISEDIR (press enter)          ║
║                                                                         ║
║         To run the FILEVEIWER program, type FV (press enter)            ║
║                                                                         ║
║         To run the MAXI-FORM program, type MAXI (press enter)           ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INFO.DOC

{% raw %}
```

                          ** Revised **

Disk Number:     X6209
Program Name:    MAXI Form version 1.54a
PC-SIG version:  1

Like to increase the amount of storage on your floppy disks? 
MAXI Form does it for you in the blink of an eye!  Format your
floppy disks with MAXI Form and you can expand storage on your
360k disks by one sixth: you get 420k bytes free.  On 1.2 meg
drives, you get 1.4 meg; while on 720k 3.5 inch drives you get
800k and on 1.44 meg 3.5 inch drives you get an incredible 1.6
meg per disk!  It's as simple as putting the disk in your drive
and typing MAXI A: (with a few command line options, if you
wish).  The default 'fast format' method can create a 420k disk
in under 40 seconds, while an optional verify switch lets you
check each track as it is formatted.  With verify on, the program
will even attempt to format a bad track several times before
reporting an error.

The MAXI created disks are not bootable and MAXI Form requires
DOS version 3.20 or later.  The program includes a summary
instruction screen (obtained by typing MAXI with no command line
options) and a doc file.  Full printed docs are available to
registered users.

MAXI Form is written by a member of the ASP (Association of
Shareware Professionals).

Usage:                Expand floppy disk storage space

Special Requirements: DOS 3.20 or later

How to start:         Type GO (press enter)

Registration fee:     $10   


```
{% endraw %}

## MAXI.DOC

{% raw %}
```








                                        MAXI Form
                                        ^^^^^^^^^
                                          
                                          
                                       User Notes
                                          
                                      (version 1.6)
                                     
                                        90-May-29
                                          
                                          
                               Copyright (c) 1988, 89, 90
                                 Herne Data Systems Ltd.
                                      P.O. Box 250
                                        Tiverton
                               Ontario  CANADA  N0G 2T0
                                          
                              voice or FAX (519)366-2732



     If you  are not  yet a  registered user  of MAXI  Form, please consider
     becoming one.  The  cost is  low (only  $10.00 for  individual users or
     $100.00 for  unlimited user  corporate/institutional site licenses) and
     the benefits are many.


























                                                                           1





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------


                                New Features of v1.6
                                ====================

     MAXI Form  v1.6 has  the following  new features  and improvements over
     v1.54a:

          -  Supports  formatting  of  800k  double density disks in 1.2 meg
             drives.

          -  Improved version of SMAX to allow use of  800k DD  disks in 1.2
             meg drives,  and activation/de-activation without having to re-
             boot.

          -  Supports user adjustable number of cylinders to format.

          -  New address information for shareware registrations.
      
          -  Improved disk verify method  that writes  data to  a track when
             verifying it instead of just trying to read it.

          -  Updated documentation.

          -  Unlimited   user   corporate/institutional  site  licenses  now
             available.

























                                                                           2





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------



                                New Features of v1.54
                                =====================

     MAXI Form v1.54 has  the following  new features  and improvements over
     v1.52:

          -  Supports formatting 420k disks in 1.2 meg drives.

          -  Improved error detection and handling routines.

          -  On screen  display of type of disk being formatted.  (This lets
             you know how MAXI interpreted your command line switches).

          -  Automatically re-tries formatting a track up to 3  times before
             reporting an error (with verify option on).
           
          -  Improved version of SMAX compatible with more hardware BIOS's.

          -  Automatically determines  if you have correct DOS version (3.20
             or later).




























                                                                           3





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------


                                 The Fine Print
                                 ==============

     This summary documentation package is provided  solely for  the benefit
     of getting  new users  familiarized with  the features of the MAXI Form
     program.  Complete printed documentation is provided to  all registered
     users along with notification of and discounts towards future updates.

     MAXI Form  is intended  to format  blank disks  only.   Because it will
     destroy all existing data on a floppy disk, Herne Data  Systems assumes
     no  liability  for  losses  caused  by misuse or abuse of this product.
     This responsibility rests solely with the end user.

     Please note that  MAXI  Form  relies  on  quirks  in  the MS-DOS/PC-DOS
     operating system and BIOS ROM's.  Although it has been tested on a wide
     variety of  systems with  DOS versions  3.2x and  later,   it cannot be
     guaranteed to  work with  all systems,  especially ones which have been
     heavily customized and modified  (including  the  installation  of non-
     standard disk  drives and controller cards) by the user;  nor can it be
     guaranteed to work  with  future  releases  of  MS/PC-DOS.    (Some DOS
     releases  may  require  the  use  of  the special device driver program
     SMAX.COM (outlined later in the documentation) for reliable performance
     with some hardware systems.)

     This documentation  assumes that the reader is reasonably familiar with
     MS-DOS concepts and terminology and has a basic understanding of how to
     use his/her computer.


                                      NOTE:
                                      ====

          MAXI Form  is a  copyrighted program  written and produced by
          Herne Data Systems Ltd. It is distributed through user groups
          and bulletin  board systems  on the  basis of 'user supported
          software' or shareware.  While the  program and  this summary
          documentaion may  be freely  copied and distributed (provided
          that the copyright notices are NOT REMOVED), each end user is
          requested to register his or her copy with Herne Data Systems
          Ltd. with a one time fee  of  $10.00  (in  either  US  or CDN
          funds,  or  the  equivalent  in  any international currency).
          Payment of the registration fee entitles  the user  to a copy
          of  the  printed  documentation  package as well as technical
          support.    An  unlimited  user  corporate/institutional site
          license is available for $100.00.

     Herne Data Systems Ltd., PO Box 250, Tiverton, ON, CANADA, N0G 2T0


                                                                           4





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------


                                     Introduction
                                     ------------

          Are you  tired of  running out of space on your floppy disks?
          How would you like to fit 420k on a 360k disk, 800k on a 720k
          disk, 1.4  meg on a 1.2 meg disk, or an incredible 1.6 meg on
          a 1.44 meg disk? 

     Sound impossible?  Well not any more!!   If you  are using  DOS version
     3.2x or  later, then  the innovative  new shareware  program from Herne
     Data Systems called MAXI Form is just the  thing for  you.   Using MAXI
     Form for  all your  floppy disk  data storage  needs is like getting an
     extra one and a half disks  FREE with  every box  of floppies  that you
     buy!! 



     NOTE:   In  most  cases,    NO  SPECIAL  SOFTWARE  DRIVER  PROGRAMS ARE
             REQUIRED TO  ACCESS THESE  DISKS FROM  DOS.   However, in cases
             where reliable standalone operation cannot be achieved (it is a
             complex function of ROM  BIOS  details,  DOS  version  and disk
             controller characteristics),  the simple device driver SMAX.COM
             can be  used  to  patch  the  BIOS  code  and  provide resident
             support.  

     MAXI Form  is self  documenting to  the extent  that it  can be used by
     experienced MS-DOS users.  This summary  documentation provides  a full
     description  of  how  to  access  and  use  all  of the features of the
     program.

     In order to use MAXI Form you will need a 100% IBM  compatible computer
     (PC, XT,  AT, PS/2, Convertible, etc) with at least one 360k 5.25 inch,
     1.2 meg 5.25 inch,  720k 3.5 inch  or 1.44  meg 3.5  inch floppy drive.
     The 1.44  meg drive  can be used to format 800k 3.5 inch disks; and the
     1.2 meg drive can also be used  to  format  420k  disks  or  800k 5-1/4
     disks.  (Please note that 420k disks formatted in 1.2meg drives may not
     work on all 360k drives.  This is due to  a physical  limitation of the
     1.2 meg  drives, i.e. the read/write head is only half the size as that
     on a standard 360k drive.)  External 5.25 inch drives for the  PS/2 and
     most laptops are also supported under the given versions of DOS.

     With many  BIOSes, you will need to use the TSR driver program SMAX.COM
     to read and write MAXI style disks (especially 800k, 5-1/4 inch disks).

     MAXI Form works with all standard display adaptors and monitors




                                                                           5





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------

                              Starting Up MAXI Form
                              ---------------------

     MAXI  Form  relies  on  command  line  switches  to  specify  its input
     parameters.  If you simply type in:

          MAXI   <--     (note: in  this documentation  the symbol   <--  is
                         used to denote the "return" or "enter" key.)

     you will  be greeted  by an  extended sign  on message  which gives the
     shareware  registration  details  and  a  summary  of  the command line
     options.  The general syntax for the command line options is:

         MAXI {drive:} [/3] [/H] [/L] [/8] [/T:xx] [/V] <--

     Where:
          {drive:}  is either A: or  B: corresponding  to the  physical disk
                    drive  on  which  you  wish  to  perform  the formatting
                    operation.  Use of other drive letters will result in an
                    error  message.   This  parameter   must  be  explicitly
                    included. MAXI Form will not assume a default  value for
                    the drive.

          /3        is used  to denote  a 3.5  inch (720 k or 1.44 meg) disk
                    drive.  This will give an 800k disk  or a  1.6 meg disk.
                    (An 800k  disk will be assumed unless /H is also used in
                    a 1.44 meg drive).

          /H        is used to denote a high density (1.2 meg) AT  type 5.25
                    inch or 1.44 meg PS/2 type disk drive.  This will give a
                    1.4 meg disk or 1.6 meg, respectively.   (For a  1.6 meg
                    disk,  /H  must  be  used  in  combination  with  the /3
                    switch.)

          /L        is used to denote a 420k disk in a 1.2 meg drive.   This
                    should not be used in combination with the /3 or /H.

          /8        is used to denote an 800k disk in a 1.2 meg drive.  This
                    feature will format a  normal double  density 360k 5-1/4
                    inch disk to 800k when used in a 1.2 meg drive.  In most
                    cases, it must be used with the 80 track option of SMAX.

          /T:xx     is used to  specify  the  number  of  cylinders  (xx) to
                    format.   The defaults  are 42 cylinders for 360k, 5-1/4
                    inch drives; 82 cylinders for 1.2 meg, 5-1/4 inch drives
                    and 80  cylinders for  3-1/2 inch drives.  Changing this
                    parameter will maximize disk storage space  for specific
                    hardware  systems.    (Some  disk drives can handle more
                    cylinders than others.)

                                                                           6





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------


          /V        is used  to denote  a "format  with verify".   With this
                    option, the  sectors on each track are written with test
                    data just after the  formatting to  make sure  that they
                    are  OK.    A  message  will  be  displayed  during  the
                    formatting cycle indicating if any tracks had detectable
                    errors.    Note  that  cylinder  0  is always tested for
                    errors regardless of the setting  of  this  switch.   If
                    errors are found on track 0, the formatting operation is
                    aborted.  /V will automatically  re-try  a  format  on a
                    track up to 3 times before reporting an error.  A format
                    operation done without the verify option is considerably
                    faster than one done with the verify option.

     The /3, /H, /L, /8, /T:xx and /V switches are optional.  Spaces are not
     required between multiple  switches.    If  only  the  drive  letter is
     specified, then  MAXI Form  will default to a 420k disk with no verify.
     If an invalid command line option is specified,  an error  message will
     be displayed along with a summary of the valid options.


     EXAMPLES:

          MAXI B: /3/H/V      will  format  a  1.6  meg  disk  in  drive  B:
                              (assuming the drive is a 1.44  meg, 3-1/2 inch
                              drive) with verify on.

          MAXI A: /8/T:81     will format  an 810k (81 cylinder), 5-1/4 inch
                              disk in drive A:, assuming drive  A: is  a 1.2
                              meg drive.

          MAXI A: /L          will format  a 420k disk in drive A:, assuming
                              drive A: is a 1.2 meg drive.

          MAXI B:             will format a 420k disk in  drive B:, assuming
                              drive B: is a 360k drive.

          MAXI A: /H          will  format  a  1.4  meg  disk  in  drive A:,
                              assuming drive A: is a 1.2 meg drive.


     Note:   MAXI Form does not check to see what kind of drive is connected
             as the  specified device.   This allows you the flexibility of,
             for example, creating an 800k 5.25 inch disk in a 1.2 meg drive
             or an  800k disk  in a  1.44 meg  drive.   DO NOT SPECIFY AN 80
             TRACK DISK TYPE FOR A 40  TRACK (360K  5.25 INCH)  DRIVE.  THIS
             MAY CAUSE THE DRIVE TO PHYSICALLY JAM UP.



                                                                           7





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------

                              The Formatting Cycle
                              --------------------

     When it is ready to go, MAXI Form will prompt you to insert a disk into
     the specified drive.  It will display a message indicating  the type of
     disk  to  be  formatted,  and  in  which drive.  At this point, you can
     either insert the disk and  press      <--  to  procede,  or  press the
     <escape> key to abort and return to the DOS prompt.

     As the  disk is  being formatted,  the current  cylinder and head being
     processed is displayed, along  with  a  indication  of  the approximate
     percent completion.  If the verify option was specified, indications of
     the number of media errors detected and the current re-try  attempt (if
     re-tries are required on a given cylinder) are also given.  

     When  the  formatting  cycle  is  complete  (i.e the required number of
     cylinders have been formatted, and the disk boot record data  have been
     written),  you  will  be  asked  to  enter  a  volume  label of 1 to 11
     characters.  (This is  similar to  the DOS  FORMAT program  with the /V
     option specified.)   Type  in the label, then press <--.  If you do not
     wish to label the disk, press <-- alone.

     When the label has been written to the  disk, MAXI  Form will  beep and
     prompt you for formatting additional disks of the same type in the same
     drive.

























                                                                           8





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------

                                 Using SMAX.COM
                                 --------------

     While  DOS  versions  3.2x  and  later  can  automatically  handle  the
     housekeeping required to access MAXI style extended capacity disks, the
     BIOS and hardware on many systems  will  not.    SMAX.COM  is  a memory
     resident  driver  which  is  used  to improve the compatibility of MAXI
     extended capacity disks with some combinations of hardware and DOS.  It
     is  not  a  true  device  driver  in  the  conventional  sense  of  DOS
     terminology.  Rather, it is a simple TSR (terminate but  stay resident)
     program which  patches into  the BIOS  disk interrupt vector (interrupt
     hex 13) and changes the EOT (end of track, or  last sector  in a track)
     parameter to  match the  increased value  of the MAXI extended capacity
     disks when it detects a disk read or write operation.  

                                     * * * *
       
          SMAX may be freely copied and distributed to your friends for
          their  PRIVATE,  NON-COMMERCIAL  use  (so  that they can read
          files which  you  may  send  them  on  MAXI  formatted disks)
          provided  that  the  copyright  notice is not removed.  Third
          party software developers wishing to include  SMAX with their
          own commercial  products require the prior written permission
          of Herne  Data  Systems  along  with  a  runtime distribution
          license.

                                     * * * *
       

     When to Use SMAX

     To  determine  whether  or  not  you  need to use SMAX with your system
     configuration, perform the following simple test.  

     -    Install SMAX on a cold system boot.  

     -    Format an extended capacity (420k/800k/1.4meg/1.6 meg)   disk with
          MAXI Form.  

     -    Turn off  SMAX or  reboot your system without SMAX installed, then
          try to copy a number of relatively long files (eg.  over about 20k
          bytes  long  each)  to  the  new  disk using the DOS COPY or XCOPY
          command or equivalent.  

     If you get an error message (eg.   'general failure  reading drive ...'
     or 'sector  not found')  then you  need to install SMAX to use the MAXI
     formatted extended capacity disks.



                                                                           9





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------

                                     * * * *
       
          If SMAX is required  on your  system, it  should be installed
          BEFORE using  MAXI for formatting the extended capacity disks
          and before reading or  writing any  previously formatted MAXI
          disks.   This is  most easily  done by inserting the required
          line into your AUTOEXEC.BAT file.

                                     * * * *
       

     Installing SMAX

     To install SMAX automatically on a cold boot, insert the following line
     into your AUTOEXEC.BAT file:

             SMAX  <--

     SMAX  checks  to  see  that  you  are  using  DOS  3.20 or later before
     installing itself.   Once  installed,  SMAX  remains  resident  in your
     computer's RAM and is active for all floppy drives on your system.  The
     resident portion of SMAX requires only 512 bytes of memory.   SMAX also
     accepts several command line options.  These are:

     SMAX  0   Turns off  SMAX so  that it remains hooked into the interrupt
               13h chain, but does  nothing.   If SMAX  is not  resident, an
               error message  is displayed.  Note that the '0' can be either
               the letter o (uppercase or lowercase) or the numeral zero. 

     SMAX  1   Turns on SMAX that has been previously turned off with  the 0
               option.   If SMAX  is not  resident, it is installed as for a
               first time installation.  Note that the '1' can be either the
               letter i (uppercase or lowercase) or the numeral one.

     SMAX  40  Turns off the 80 track double density mode for 1.2 meg drives
               to allow them to access 360k/420k disks.

     SMAX  80  Turns on the 80 track double density mode for 1.2 meg drives.
               This allows  720k/800k 5-1/4  inch disks  to be formatted and
               used in 1.2 meg drives with  normal 360k  DD media.   On most
               systems, this  feature is only supported for drives A: and B:
               due to BIOS limitations.   In  addition, it  will also remove
               the ability for these drives to access 360k/420k disks.

     SMAX  R   Re-installs  a  previously  un-installed  copy of SMAX.  This
               option re-hooks an existing copy of  SMAX into  the interrupt
               13h chain  without placing  a new copy in memory.  If SMAX is
               not  resident,  it  is   installed  as   for  a   first  time
               installation.

                                                                          10





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------


     SMAX  U   Un-installs a previously installed copy of SMAX.  This option
               removes SMAX from the interrupt 13h  chain, thus deactivating
               it, but  leaves the  code resident in memory.  If SMAX is not
               resident or it is not the  last  link  in  the  interrupt 13h
               chain, an error message is displayed.

     SMAX  ?   Checks the current status of SMAX in memory, if present.  


     If you attempt to install SMAX with no options specified (or with the ?
     option) when it is already resident, a status message will be displayed
     showing the  currently active  options.  If you attempt to install SMAX
     with a  command line  option not  listed above,  you will  get an error
     message.   

     SMAX options  can be changed at any time after it is resident in memory
     by running the appropriate command line.  This will change  the current
     parameters  for  the  copy  of  SMAX  in  memory and will not result in
     another copy of SMAX being loaded into memory.
          

     Disabling SMAX

     SMAX will not normally interfere with  the use  of standard  floppy DOS
     disks and  it is  completely transparent  to hard  disks.  Both regular
     style  DOS  disks  and  MAXI  extended  capacity  disks   can  be  used
     interchangeably and transparently on any floppy drive in your system by
     most application software such  as  word  processors,  spreadsheets and
     databases.  However, it is recognized that some programs, such as those
     which  access  the  disk  at  the  physical  sector  level  or   in  an
     unconventional manner  (including some  hard disk fast backup utilities
     and some versions of the DOS FORMAT and DISKCOPY programs)  do not work
     correctly  with   SMAX  installed.     For  such  cases,  SMAX  can  be
     de-activated without  re-booting  the  computer  by  using  one  of two
     command line options as summarized above:

             SMAX  U  <--

             SMAX  0  <--

     The U  option will  completely remove  the SMAX code from the interrupt
     13h chain and return everything to its previous  state.   The SMAX code
     remains resident  in memory  and can  be re-activated later using the R
     command line option.  The U option can only be used if SMAX is the last
     link in  the interrupt  13h chain.  This condition is required in order
     to be able to correctly re-establish the previous  interrupt 13h chain.
     If SMAX  detects that it is not the last link, it will display an error
     message telling you to use the 0 option instead.

                                                                          11





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------


     The 0 option will set a  disabling  flag  within  SMAX  itself, without
     actually removing the code from the interrupt 13h chain.  SMAX can then
     be re-activated  using the  1 option  when required.   The  0 method is
     required when  SMAX is  not the  last link  in the interrupt 13h chain,
     since it does not disturb the existing chain.


     If you wish to install another  interrupt 13h  handler after installing
     SMAX,  but  wish  to  keep  SMAX  last in the chain, then the following
     procedure can be used:

     -    Un-install SMAX with the U option.   This  releases SMAX  from the
          chain, but keeps it in memory, and lets the other TSR hook in.

     -    Install the other TSR.

     -    Re-install SMAX  with the R option.  This re-links SMAX to the end
          of the interrupt chain.



     80 Cylinder Double Density Mode

     The 1.2 meg disk drives  used  in  AT  class  machines  are  capable of
     reading and  writing 80  cylinders.  Normally this feature is used only
     in high density mode (1.2 meg  or 1.4  meg).   However, in  order to do
     this  reliably,   special  (i.e.  more  expensive)  high  density  (HD)
     diskettes are required.   Some BIOSes  will let  you format  and use 80
     cylinder  double  density  (DD)  5-1/4  inch  disks  in 1.2 meg drives.
     However, most will not.     With the  80 option  of SMAX,  you can take
     advantage of  this to  get up  to 800k  on a normal 360k double density
     disk with any BIOS!  This is done by recording the data at the same bit
     density as  normal 360k  disks, but with twice the number of cylinders.
     In terms of reliability, the disks are just  as reliable  as 360k disks
     that have been formatted and used in 1.2 meg drives.  

     Of course,  the 80 cylinder DD disks will NOT be usable in 360k drives,
     but will be usable in the  80 cylinder  DD, 5-1/4  inch drives  used on
     some non-standard  MS-DOS systems.   The  80 option  is not required if
     your BIOS normally supports reading and writing this disk type.

     To activate the 80 cylinder mode of SMAX, use the command line:

             SMAX  80  <--

     (Because of  limitations of  BIOS flag  storage areas,  this feature is
     limited to  drives A:  and B:  only.   On most systems this is adequate
     because the standard AT type machine has only  two drives  with the 1.2

                                                                          12





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------

     meg  drive  as  A:.)    The  80 cylinder mode will not affect normal 80
     cylinder disks (i.e. 3-1/2 inch and 1.2/1.4 meg 5-1/4 inch).   However,
     with the  80 cylinder  mode activated, you will not normally be able to
     access 360k/420k disks in  the 1.2  meg drive.   To  de-activate the 80
     cylinder mode, use the command line:

             SMAX 40  <--

     This will  return the machine to normal 40 cylinder DD mode for 1.2 meg
     drives.








































                                                                          13





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------

     COMMERCIAL SOFTWARE PRODUCTS AVAILABLE FROM HERNE DATA SYSTEMS LTD:

     MAXI Disk:     MAXI Disk is a deluxe menu driven version  of MAXI Form.
                    If you  are confused  by the  vast array of difficult to
                    remember DOS FORMAT command  line  options,    MAXI Disk
                    provides a  convenient, easy  to use  menu interface for
                    formatting standard  DOS  disks  (360k/720k/1.2 meg/1.44
                    meg)  as  well  as  the  MAXI  extended  capacity disks,
                    including bootable disks.    (Bootable  versions  of the
                    MAXI  extended  capacity  disks  may  not  work  on  all
                    hardware/DOS configurations).  MAXI Disk supports  up to
                    four floppy  drives.  The default menu options are fully
                    user configurable. 

                    Single user copies of MAXI Disk can be obtained for only
                    $19.95  (US)  or  $22.95 (Canadian) (plus $2.00 shipping
                    and handling for  North  American  addresses,  $4.00 for
                    elsewhere.   Ontario residents  please add 8% provincial
                    sales tax for a total of  $26.79 CDN).     Site licenses
                    are available for $500.00 (US or CDN).


     FreeForm       FreeForm  is   the  ultimate  menu  driven  floppy  disk
                    formatting utility which lets  the  user  create  a wide
                    variety of MS-DOS and custom floppy disks with a PC, XT,
                    AT or  PS/2  compatible  computer  equipped  with either
                    5-1/4 inch  (360k or  1.2 M) or 3-1/2 inch (720k or 1.44
                    M) floppy disk drives.  FreeForm gives the user complete
                    control over  all primary disk parameters such as sector
                    size, sector numbering  scheme,  interleave  factors and
                    track ranges.   In addition, customized disk formats can
                    be created with up to three distinct user  defined zones
                    with different  characteristics.   These features can be
                    used for DOS disk copy protection  and data  security as
                    well as  for creating  non-DOS disks.  Up to 100 sets of
                    custom parameters can be  stored in  a default  file for
                    later recall and use by FreeForm.

                    Single  user  copies  of  FreeForm are available for the
                    price of $24.95 (US) or $27.95 (CDN) plus $2.00 shipping
                    and handling.

     Call, write or FAX for more information.
     Herne Data Systems Ltd., PO Box 250, Tiverton, ON  CANADA   N0G 2T0
     Voice or FAX (519)366-2732

     Software worth hunting for!



                                                                          14

```
{% endraw %}

## MAXI.DOC

{% raw %}
```








                                        MAXI Form
                                        ^^^^^^^^^
                                          
                                          
                                       User Notes
                                          
                                      (version 1.6)
                                     
                                        90-May-29
                                          
                                          
                               Copyright (c) 1988, 89, 90
                                 Herne Data Systems Ltd.
                                      P.O. Box 250
                                        Tiverton
                               Ontario  CANADA  N0G 2T0
                                          
                              voice or FAX (519)366-2732



     If you  are not  yet a  registered user  of MAXI  Form, please consider
     becoming one.  The  cost is  low (only  $10.00 for  individual users or
     $100.00 for  unlimited user  corporate/institutional site licenses) and
     the benefits are many.


























                                                                           1





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------


                                New Features of v1.6
                                ====================

     MAXI Form  v1.6 has  the following  new features  and improvements over
     v1.54a:

          -  Supports  formatting  of  800k  double density disks in 1.2 meg
             drives.

          -  Improved version of SMAX to allow use of  800k DD  disks in 1.2
             meg drives,  and activation/de-activation without having to re-
             boot.

          -  Supports user adjustable number of cylinders to format.

          -  New address information for shareware registrations.
      
          -  Improved disk verify method  that writes  data to  a track when
             verifying it instead of just trying to read it.

          -  Updated documentation.

          -  Unlimited   user   corporate/institutional  site  licenses  now
             available.

























                                                                           2





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------



                                New Features of v1.54
                                =====================

     MAXI Form v1.54 has  the following  new features  and improvements over
     v1.52:

          -  Supports formatting 420k disks in 1.2 meg drives.

          -  Improved error detection and handling routines.

          -  On screen  display of type of disk being formatted.  (This lets
             you know how MAXI interpreted your command line switches).

          -  Automatically re-tries formatting a track up to 3  times before
             reporting an error (with verify option on).
           
          -  Improved version of SMAX compatible with more hardware BIOS's.

          -  Automatically determines  if you have correct DOS version (3.20
             or later).




























                                                                           3





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------


                                 The Fine Print
                                 ==============

     This summary documentation package is provided  solely for  the benefit
     of getting  new users  familiarized with  the features of the MAXI Form
     program.  Complete printed documentation is provided to  all registered
     users along with notification of and discounts towards future updates.

     MAXI Form  is intended  to format  blank disks  only.   Because it will
     destroy all existing data on a floppy disk, Herne Data  Systems assumes
     no  liability  for  losses  caused  by misuse or abuse of this product.
     This responsibility rests solely with the end user.

     Please note that  MAXI  Form  relies  on  quirks  in  the MS-DOS/PC-DOS
     operating system and BIOS ROM's.  Although it has been tested on a wide
     variety of  systems with  DOS versions  3.2x and  later,   it cannot be
     guaranteed to  work with  all systems,  especially ones which have been
     heavily customized and modified  (including  the  installation  of non-
     standard disk  drives and controller cards) by the user;  nor can it be
     guaranteed to work  with  future  releases  of  MS/PC-DOS.    (Some DOS
     releases  may  require  the  use  of  the special device driver program
     SMAX.COM (outlined later in the documentation) for reliable performance
     with some hardware systems.)

     This documentation  assumes that the reader is reasonably familiar with
     MS-DOS concepts and terminology and has a basic understanding of how to
     use his/her computer.


                                      NOTE:
                                      ====

          MAXI Form  is a  copyrighted program  written and produced by
          Herne Data Systems Ltd. It is distributed through user groups
          and bulletin  board systems  on the  basis of 'user supported
          software' or shareware.  While the  program and  this summary
          documentaion may  be freely  copied and distributed (provided
          that the copyright notices are NOT REMOVED), each end user is
          requested to register his or her copy with Herne Data Systems
          Ltd. with a one time fee  of  $10.00  (in  either  US  or CDN
          funds,  or  the  equivalent  in  any international currency).
          Payment of the registration fee entitles  the user  to a copy
          of  the  printed  documentation  package as well as technical
          support.    An  unlimited  user  corporate/institutional site
          license is available for $100.00.

     Herne Data Systems Ltd., PO Box 250, Tiverton, ON, CANADA, N0G 2T0


                                                                           4





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------


                                     Introduction
                                     ------------

          Are you  tired of  running out of space on your floppy disks?
          How would you like to fit 420k on a 360k disk, 800k on a 720k
          disk, 1.4  meg on a 1.2 meg disk, or an incredible 1.6 meg on
          a 1.44 meg disk? 

     Sound impossible?  Well not any more!!   If you  are using  DOS version
     3.2x or  later, then  the innovative  new shareware  program from Herne
     Data Systems called MAXI Form is just the  thing for  you.   Using MAXI
     Form for  all your  floppy disk  data storage  needs is like getting an
     extra one and a half disks  FREE with  every box  of floppies  that you
     buy!! 



     NOTE:   In  most  cases,    NO  SPECIAL  SOFTWARE  DRIVER  PROGRAMS ARE
             REQUIRED TO  ACCESS THESE  DISKS FROM  DOS.   However, in cases
             where reliable standalone operation cannot be achieved (it is a
             complex function of ROM  BIOS  details,  DOS  version  and disk
             controller characteristics),  the simple device driver SMAX.COM
             can be  used  to  patch  the  BIOS  code  and  provide resident
             support.  

     MAXI Form  is self  documenting to  the extent  that it  can be used by
     experienced MS-DOS users.  This summary  documentation provides  a full
     description  of  how  to  access  and  use  all  of the features of the
     program.

     In order to use MAXI Form you will need a 100% IBM  compatible computer
     (PC, XT,  AT, PS/2, Convertible, etc) with at least one 360k 5.25 inch,
     1.2 meg 5.25 inch,  720k 3.5 inch  or 1.44  meg 3.5  inch floppy drive.
     The 1.44  meg drive  can be used to format 800k 3.5 inch disks; and the
     1.2 meg drive can also be used  to  format  420k  disks  or  800k 5-1/4
     disks.  (Please note that 420k disks formatted in 1.2meg drives may not
     work on all 360k drives.  This is due to  a physical  limitation of the
     1.2 meg  drives, i.e. the read/write head is only half the size as that
     on a standard 360k drive.)  External 5.25 inch drives for the  PS/2 and
     most laptops are also supported under the given versions of DOS.

     With many  BIOSes, you will need to use the TSR driver program SMAX.COM
     to read and write MAXI style disks (especially 800k, 5-1/4 inch disks).

     MAXI Form works with all standard display adaptors and monitors




                                                                           5





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------

                              Starting Up MAXI Form
                              ---------------------

     MAXI  Form  relies  on  command  line  switches  to  specify  its input
     parameters.  If you simply type in:

          MAXI   <--     (note: in  this documentation  the symbol   <--  is
                         used to denote the "return" or "enter" key.)

     you will  be greeted  by an  extended sign  on message  which gives the
     shareware  registration  details  and  a  summary  of  the command line
     options.  The general syntax for the command line options is:

         MAXI {drive:} [/3] [/H] [/L] [/8] [/T:xx] [/V] <--

     Where:
          {drive:}  is either A: or  B: corresponding  to the  physical disk
                    drive  on  which  you  wish  to  perform  the formatting
                    operation.  Use of other drive letters will result in an
                    error  message.   This  parameter   must  be  explicitly
                    included. MAXI Form will not assume a default  value for
                    the drive.

          /3        is used  to denote  a 3.5  inch (720 k or 1.44 meg) disk
                    drive.  This will give an 800k disk  or a  1.6 meg disk.
                    (An 800k  disk will be assumed unless /H is also used in
                    a 1.44 meg drive).

          /H        is used to denote a high density (1.2 meg) AT  type 5.25
                    inch or 1.44 meg PS/2 type disk drive.  This will give a
                    1.4 meg disk or 1.6 meg, respectively.   (For a  1.6 meg
                    disk,  /H  must  be  used  in  combination  with  the /3
                    switch.)

          /L        is used to denote a 420k disk in a 1.2 meg drive.   This
                    should not be used in combination with the /3 or /H.

          /8        is used to denote an 800k disk in a 1.2 meg drive.  This
                    feature will format a  normal double  density 360k 5-1/4
                    inch disk to 800k when used in a 1.2 meg drive.  In most
                    cases, it must be used with the 80 track option of SMAX.

          /T:xx     is used to  specify  the  number  of  cylinders  (xx) to
                    format.   The defaults  are 42 cylinders for 360k, 5-1/4
                    inch drives; 82 cylinders for 1.2 meg, 5-1/4 inch drives
                    and 80  cylinders for  3-1/2 inch drives.  Changing this
                    parameter will maximize disk storage space  for specific
                    hardware  systems.    (Some  disk drives can handle more
                    cylinders than others.)

                                                                           6





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------


          /V        is used  to denote  a "format  with verify".   With this
                    option, the  sectors on each track are written with test
                    data just after the  formatting to  make sure  that they
                    are  OK.    A  message  will  be  displayed  during  the
                    formatting cycle indicating if any tracks had detectable
                    errors.    Note  that  cylinder  0  is always tested for
                    errors regardless of the setting  of  this  switch.   If
                    errors are found on track 0, the formatting operation is
                    aborted.  /V will automatically  re-try  a  format  on a
                    track up to 3 times before reporting an error.  A format
                    operation done without the verify option is considerably
                    faster than one done with the verify option.

     The /3, /H, /L, /8, /T:xx and /V switches are optional.  Spaces are not
     required between multiple  switches.    If  only  the  drive  letter is
     specified, then  MAXI Form  will default to a 420k disk with no verify.
     If an invalid command line option is specified,  an error  message will
     be displayed along with a summary of the valid options.


     EXAMPLES:

          MAXI B: /3/H/V      will  format  a  1.6  meg  disk  in  drive  B:
                              (assuming the drive is a 1.44  meg, 3-1/2 inch
                              drive) with verify on.

          MAXI A: /8/T:81     will format  an 810k (81 cylinder), 5-1/4 inch
                              disk in drive A:, assuming drive  A: is  a 1.2
                              meg drive.

          MAXI A: /L          will format  a 420k disk in drive A:, assuming
                              drive A: is a 1.2 meg drive.

          MAXI B:             will format a 420k disk in  drive B:, assuming
                              drive B: is a 360k drive.

          MAXI A: /H          will  format  a  1.4  meg  disk  in  drive A:,
                              assuming drive A: is a 1.2 meg drive.


     Note:   MAXI Form does not check to see what kind of drive is connected
             as the  specified device.   This allows you the flexibility of,
             for example, creating an 800k 5.25 inch disk in a 1.2 meg drive
             or an  800k disk  in a  1.44 meg  drive.   DO NOT SPECIFY AN 80
             TRACK DISK TYPE FOR A 40  TRACK (360K  5.25 INCH)  DRIVE.  THIS
             MAY CAUSE THE DRIVE TO PHYSICALLY JAM UP.



                                                                           7





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------

                              The Formatting Cycle
                              --------------------

     When it is ready to go, MAXI Form will prompt you to insert a disk into
     the specified drive.  It will display a message indicating  the type of
     disk  to  be  formatted,  and  in  which drive.  At this point, you can
     either insert the disk and  press      <--  to  procede,  or  press the
     <escape> key to abort and return to the DOS prompt.

     As the  disk is  being formatted,  the current  cylinder and head being
     processed is displayed, along  with  a  indication  of  the approximate
     percent completion.  If the verify option was specified, indications of
     the number of media errors detected and the current re-try  attempt (if
     re-tries are required on a given cylinder) are also given.  

     When  the  formatting  cycle  is  complete  (i.e the required number of
     cylinders have been formatted, and the disk boot record data  have been
     written),  you  will  be  asked  to  enter  a  volume  label of 1 to 11
     characters.  (This is  similar to  the DOS  FORMAT program  with the /V
     option specified.)   Type  in the label, then press <--.  If you do not
     wish to label the disk, press <-- alone.

     When the label has been written to the  disk, MAXI  Form will  beep and
     prompt you for formatting additional disks of the same type in the same
     drive.

























                                                                           8





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------

                                 Using SMAX.COM
                                 --------------

     While  DOS  versions  3.2x  and  later  can  automatically  handle  the
     housekeeping required to access MAXI style extended capacity disks, the
     BIOS and hardware on many systems  will  not.    SMAX.COM  is  a memory
     resident  driver  which  is  used  to improve the compatibility of MAXI
     extended capacity disks with some combinations of hardware and DOS.  It
     is  not  a  true  device  driver  in  the  conventional  sense  of  DOS
     terminology.  Rather, it is a simple TSR (terminate but  stay resident)
     program which  patches into  the BIOS  disk interrupt vector (interrupt
     hex 13) and changes the EOT (end of track, or  last sector  in a track)
     parameter to  match the  increased value  of the MAXI extended capacity
     disks when it detects a disk read or write operation.  

                                     * * * *
       
          SMAX may be freely copied and distributed to your friends for
          their  PRIVATE,  NON-COMMERCIAL  use  (so  that they can read
          files which  you  may  send  them  on  MAXI  formatted disks)
          provided  that  the  copyright  notice is not removed.  Third
          party software developers wishing to include  SMAX with their
          own commercial  products require the prior written permission
          of Herne  Data  Systems  along  with  a  runtime distribution
          license.

                                     * * * *
       

     When to Use SMAX

     To  determine  whether  or  not  you  need to use SMAX with your system
     configuration, perform the following simple test.  

     -    Install SMAX on a cold system boot.  

     -    Format an extended capacity (420k/800k/1.4meg/1.6 meg)   disk with
          MAXI Form.  

     -    Turn off  SMAX or  reboot your system without SMAX installed, then
          try to copy a number of relatively long files (eg.  over about 20k
          bytes  long  each)  to  the  new  disk using the DOS COPY or XCOPY
          command or equivalent.  

     If you get an error message (eg.   'general failure  reading drive ...'
     or 'sector  not found')  then you  need to install SMAX to use the MAXI
     formatted extended capacity disks.



                                                                           9





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------

                                     * * * *
       
          If SMAX is required  on your  system, it  should be installed
          BEFORE using  MAXI for formatting the extended capacity disks
          and before reading or  writing any  previously formatted MAXI
          disks.   This is  most easily  done by inserting the required
          line into your AUTOEXEC.BAT file.

                                     * * * *
       

     Installing SMAX

     To install SMAX automatically on a cold boot, insert the following line
     into your AUTOEXEC.BAT file:

             SMAX  <--

     SMAX  checks  to  see  that  you  are  using  DOS  3.20 or later before
     installing itself.   Once  installed,  SMAX  remains  resident  in your
     computer's RAM and is active for all floppy drives on your system.  The
     resident portion of SMAX requires only 512 bytes of memory.   SMAX also
     accepts several command line options.  These are:

     SMAX  0   Turns off  SMAX so  that it remains hooked into the interrupt
               13h chain, but does  nothing.   If SMAX  is not  resident, an
               error message  is displayed.  Note that the '0' can be either
               the letter o (uppercase or lowercase) or the numeral zero. 

     SMAX  1   Turns on SMAX that has been previously turned off with  the 0
               option.   If SMAX  is not  resident, it is installed as for a
               first time installation.  Note that the '1' can be either the
               letter i (uppercase or lowercase) or the numeral one.

     SMAX  40  Turns off the 80 track double density mode for 1.2 meg drives
               to allow them to access 360k/420k disks.

     SMAX  80  Turns on the 80 track double density mode for 1.2 meg drives.
               This allows  720k/800k 5-1/4  inch disks  to be formatted and
               used in 1.2 meg drives with  normal 360k  DD media.   On most
               systems, this  feature is only supported for drives A: and B:
               due to BIOS limitations.   In  addition, it  will also remove
               the ability for these drives to access 360k/420k disks.

     SMAX  R   Re-installs  a  previously  un-installed  copy of SMAX.  This
               option re-hooks an existing copy of  SMAX into  the interrupt
               13h chain  without placing  a new copy in memory.  If SMAX is
               not  resident,  it  is   installed  as   for  a   first  time
               installation.

                                                                          10





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------


     SMAX  U   Un-installs a previously installed copy of SMAX.  This option
               removes SMAX from the interrupt 13h  chain, thus deactivating
               it, but  leaves the  code resident in memory.  If SMAX is not
               resident or it is not the  last  link  in  the  interrupt 13h
               chain, an error message is displayed.

     SMAX  ?   Checks the current status of SMAX in memory, if present.  


     If you attempt to install SMAX with no options specified (or with the ?
     option) when it is already resident, a status message will be displayed
     showing the  currently active  options.  If you attempt to install SMAX
     with a  command line  option not  listed above,  you will  get an error
     message.   

     SMAX options  can be changed at any time after it is resident in memory
     by running the appropriate command line.  This will change  the current
     parameters  for  the  copy  of  SMAX  in  memory and will not result in
     another copy of SMAX being loaded into memory.
          

     Disabling SMAX

     SMAX will not normally interfere with  the use  of standard  floppy DOS
     disks and  it is  completely transparent  to hard  disks.  Both regular
     style  DOS  disks  and  MAXI  extended  capacity  disks   can  be  used
     interchangeably and transparently on any floppy drive in your system by
     most application software such  as  word  processors,  spreadsheets and
     databases.  However, it is recognized that some programs, such as those
     which  access  the  disk  at  the  physical  sector  level  or   in  an
     unconventional manner  (including some  hard disk fast backup utilities
     and some versions of the DOS FORMAT and DISKCOPY programs)  do not work
     correctly  with   SMAX  installed.     For  such  cases,  SMAX  can  be
     de-activated without  re-booting  the  computer  by  using  one  of two
     command line options as summarized above:

             SMAX  U  <--

             SMAX  0  <--

     The U  option will  completely remove  the SMAX code from the interrupt
     13h chain and return everything to its previous  state.   The SMAX code
     remains resident  in memory  and can  be re-activated later using the R
     command line option.  The U option can only be used if SMAX is the last
     link in  the interrupt  13h chain.  This condition is required in order
     to be able to correctly re-establish the previous  interrupt 13h chain.
     If SMAX  detects that it is not the last link, it will display an error
     message telling you to use the 0 option instead.

                                                                          11





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------


     The 0 option will set a  disabling  flag  within  SMAX  itself, without
     actually removing the code from the interrupt 13h chain.  SMAX can then
     be re-activated  using the  1 option  when required.   The  0 method is
     required when  SMAX is  not the  last link  in the interrupt 13h chain,
     since it does not disturb the existing chain.


     If you wish to install another  interrupt 13h  handler after installing
     SMAX,  but  wish  to  keep  SMAX  last in the chain, then the following
     procedure can be used:

     -    Un-install SMAX with the U option.   This  releases SMAX  from the
          chain, but keeps it in memory, and lets the other TSR hook in.

     -    Install the other TSR.

     -    Re-install SMAX  with the R option.  This re-links SMAX to the end
          of the interrupt chain.



     80 Cylinder Double Density Mode

     The 1.2 meg disk drives  used  in  AT  class  machines  are  capable of
     reading and  writing 80  cylinders.  Normally this feature is used only
     in high density mode (1.2 meg  or 1.4  meg).   However, in  order to do
     this  reliably,   special  (i.e.  more  expensive)  high  density  (HD)
     diskettes are required.   Some BIOSes  will let  you format  and use 80
     cylinder  double  density  (DD)  5-1/4  inch  disks  in 1.2 meg drives.
     However, most will not.     With the  80 option  of SMAX,  you can take
     advantage of  this to  get up  to 800k  on a normal 360k double density
     disk with any BIOS!  This is done by recording the data at the same bit
     density as  normal 360k  disks, but with twice the number of cylinders.
     In terms of reliability, the disks are just  as reliable  as 360k disks
     that have been formatted and used in 1.2 meg drives.  

     Of course,  the 80 cylinder DD disks will NOT be usable in 360k drives,
     but will be usable in the  80 cylinder  DD, 5-1/4  inch drives  used on
     some non-standard  MS-DOS systems.   The  80 option  is not required if
     your BIOS normally supports reading and writing this disk type.

     To activate the 80 cylinder mode of SMAX, use the command line:

             SMAX  80  <--

     (Because of  limitations of  BIOS flag  storage areas,  this feature is
     limited to  drives A:  and B:  only.   On most systems this is adequate
     because the standard AT type machine has only  two drives  with the 1.2

                                                                          12





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------

     meg  drive  as  A:.)    The  80 cylinder mode will not affect normal 80
     cylinder disks (i.e. 3-1/2 inch and 1.2/1.4 meg 5-1/4 inch).   However,
     with the  80 cylinder  mode activated, you will not normally be able to
     access 360k/420k disks in  the 1.2  meg drive.   To  de-activate the 80
     cylinder mode, use the command line:

             SMAX 40  <--

     This will  return the machine to normal 40 cylinder DD mode for 1.2 meg
     drives.








































                                                                          13





 MAXI Form                                                      User Notes
 -------------------------------------------------------------------------

     COMMERCIAL SOFTWARE PRODUCTS AVAILABLE FROM HERNE DATA SYSTEMS LTD:

     MAXI Disk:     MAXI Disk is a deluxe menu driven version  of MAXI Form.
                    If you  are confused  by the  vast array of difficult to
                    remember DOS FORMAT command  line  options,    MAXI Disk
                    provides a  convenient, easy  to use  menu interface for
                    formatting standard  DOS  disks  (360k/720k/1.2 meg/1.44
                    meg)  as  well  as  the  MAXI  extended  capacity disks,
                    including bootable disks.    (Bootable  versions  of the
                    MAXI  extended  capacity  disks  may  not  work  on  all
                    hardware/DOS configurations).  MAXI Disk supports  up to
                    four floppy  drives.  The default menu options are fully
                    user configurable. 

                    Single user copies of MAXI Disk can be obtained for only
                    $19.95  (US)  or  $22.95 (Canadian) (plus $2.00 shipping
                    and handling for  North  American  addresses,  $4.00 for
                    elsewhere.   Ontario residents  please add 8% provincial
                    sales tax for a total of  $26.79 CDN).     Site licenses
                    are available for $500.00 (US or CDN).


     FreeForm       FreeForm  is   the  ultimate  menu  driven  floppy  disk
                    formatting utility which lets  the  user  create  a wide
                    variety of MS-DOS and custom floppy disks with a PC, XT,
                    AT or  PS/2  compatible  computer  equipped  with either
                    5-1/4 inch  (360k or  1.2 M) or 3-1/2 inch (720k or 1.44
                    M) floppy disk drives.  FreeForm gives the user complete
                    control over  all primary disk parameters such as sector
                    size, sector numbering  scheme,  interleave  factors and
                    track ranges.   In addition, customized disk formats can
                    be created with up to three distinct user  defined zones
                    with different  characteristics.   These features can be
                    used for DOS disk copy protection  and data  security as
                    well as  for creating  non-DOS disks.  Up to 100 sets of
                    custom parameters can be  stored in  a default  file for
                    later recall and use by FreeForm.

                    Single  user  copies  of  FreeForm are available for the
                    price of $24.95 (US) or $27.95 (CDN) plus $2.00 shipping
                    and handling.

     Call, write or FAX for more information.
     Herne Data Systems Ltd., PO Box 250, Tiverton, ON  CANADA   N0G 2T0
     Voice or FAX (519)366-2732

     Software worth hunting for!



                                                                          14

```
{% endraw %}

## SETATTR.DOC

{% raw %}
```










		++++++++++++++++++++++++++++++++++++++++++++++
	 	+               S E T A T T R     	     +
		+	                       		     +
		+	         User's Guide                +
		+	        Version - 2.00		     +
		+					     +
		+               July 27, 1988		     +
		+					     +
		+  (C) Copyright 1988 - All Rights Reserved. +
		+					     +
		++++++++++++++++++++++++++++++++++++++++++++++





	  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	  |		       Shareware		          |
	  |						      	  |
	  | We encourage you to freely copy and share unmodified  |
	  | copies of this program with other people. If you      |
	  | decide to use the program, support the Shareware	  |
	  | marketing concept by becoming a registered user.      |
	  | Read the appendix for further details.	      	  |
	  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++













   			  Tarbex Software
		         523 Albany Ave. NE
		        Orange City, IA 51041
















  		       THE USER-SUPPORTED CONCEPT


User-supported software is an experiment in distributing computer programs
based on the following beliefs:

1.	That the value and utility of software is best assessed
	by the user on his/her own system.

2.	That the creation of personal computer software can and should be
	supported by the computing community.

3.	That copying of programs should be encouraged, rather than restricted.


Anyone may legally obtain an evaluation copy of the program from a friend or
computer club. After you have had a chance to use and evaluate the program in
your own environment, you are trusted to either forward a payment to Tarbex
Software or to discontinue use of the program.

If an "Evaluation notice" screen is displayed and you have to press a key to
continue each time you start the program, then you are using the Shareware
version.

Free distribution of software and voluntary payment for its use eliminates
costs of advertising and copy protection schemes. Users obtain quality
software at greatly reduced costs. They can try it out before buying, and
do so at their own pace and in the comfort of their own home or office.
The best programs will survive, based solely on their quality and usefulness.

Program Licensing Agreement

YOU SHOULD CAREFULLY READ THE FOLLOWING TERMS AND CONDITIONS BEFORE USING
SETATTR PROGRAM. USING THIS PROGRAM INDICATES YOUR ACCEPTANCE OF THESE TERMS
AND CONDITIONS. IF YOU DO NOT AGREE WITH THEM, PROMPTLY RETURN THE PACKAGE.

LICENSE

A limited license is granted to any user of the program to freely copy and
distribute the product on the following conditions:

You may:

	-  Use the program on any microcomputer on which this
           program was designed to operate.
	-  Copy the program into any machine readable form for
	   backup purposes.
	-  Freely copy and share unmodified copies of the
           program with your associates.

YOU MAY NOT:
	-  Sell this program for a fee and/or distribute the
           program along with other products without express
           written permission.
        -  Grant sublicense, leases, or other rights of the
           software to others.
        -  Make verbal or media translations of the user's
           manual.
	-  Modify or remove the Copyright notice from the
           program, diskette or its manual.
	-  Modify the program, diskette or manual and/or merge
	   it into another program for any machine.





	-  "Rent" the product to others.
	-  Bundle and sell this product as part of another
           more inclusive package.
	-  Club members  who receive the program are informed
	   in writing of the user-supported concept and
           encouraged to support it with their payments.

TERMS AND CONDITIONS

The license is effective until terminated. You may terminate it at any time
by destroying the diskette(s) containing the program. The license and the
rights thereof terminate if you fail to comply with any term or condition
of this agreement. You agree further, upon termination, to destroy the
program together with any modifications and/or merged portions in any form.


Limited Warranty
----------------

THE PROGRAM IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER
EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FAIRNESS FOR A PARTICULAR PURPOSE.
THE ENTIRE RISK AS TO QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH
YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE ENTIRE COST
OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION. SOME STATES DO NOT
ALLOW THE EXCLUSION OF IMPLIED WARRANTIES SO THE ABOVE EXCLUSION MAY
NOT APPLY TO YOU. THIS WARRANTY GIVES YOU SPECIFIC LEGAL RIGHTS AND
YOU MAY ALSO HAVE OTHER RIGHTS WHICH VARY FROM STATE TO STATE.

IN NO EVENT WILL TARBEX SOFTWARE BE LIABLE TO YOU FOR ANY DAMAGES INCLUDING
ANY LOST PROFITS, LOST SAVINGS OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES
ARISING OUT OF THE USE OR INABILITY TO USE THIS PROGRAM EVEN IF TARBEX
SOFTWARE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR ANY CLAIM BY
ANY OTHER PARTY.

SOME STATES DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR
INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION
MAY NOT APPLY TO YOU.

Should you have any questions concerning this agreement, you may contact
Tarbex Software by writing to :

		Tarbex Software
		523 Albany Ave. NE
		Orange City, IA 51041


YOU ACKNOWLEDGE THAT YOU HAVE READ THIS AGREEMENT AND UNDERSTAND IT AND
AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS. YOU FURTHER AGREE THAT
IT IS THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN US
WHICH SUPERSEDES ANY PROPOSAL OR PRIOR WRITTEN AGREEMENT, ORAL OR WRITTEN,
AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO THE SUBJECT MATTER OF
THIS AGREEMENT.
















SITE LICENSES AND BUNDLING ARRANGEMENTS:

Companies, schools, universities, government, and other organizations are
granted permission to copy the program with the documentation file for use
on other computers and at other locations in the company, so long as :
	1.	The program has been registered.
	2.	The full registration fee of $15 has been paid for each
                and every system on which the program will be used.

Corporate site licences and bundling arrangements are available direct
from Tarbex Software.

Corporate licenses and volume discounts are available upon request.

Bundling arrangements can be used to distribute copies of this program in
order to promote some other product or service.

Note that neither of these activities are permitted under the limited
license granted to all users of this program without the expressed written
consent of Tarbex Software.


				   REGISTRATION


If you purchased a copy of this program directly from Tarbex Software in
your name, then your copy is already registered and you will receive all
the benefits of registration. You do not need to send the registration form.
If you received this program some other way then you need to register your
copy of the program. To register and to avail registration benefits, complete
the order/registration form and mail it to Tarbex Software with your check
of $15 to cover postage and handling and other benefits mentioned below.

As a registered user you will receive:

	- The new version of this program. Some additional
          features of which are:
	     - Will let you change attributes of all file's on a drive.
               Without you having to change the directories!
	- Printed 2-3 pages of documentation in the DOS manual format
          and size. Ready for you to insert in the DOS manual for further
          reference.

	- Limited telephone and written support.

	- Evaluation copies of other programs from Tarbex
          Software will be sent to you at no extra charge.

In addition, you will be supporting software distribution under the
shareware concept and will be contributing to the further development
of this and other shareware products.















		    ORDER/REGISTRATION  FORM


Mail To:


Tarbex Software
523 Albany Ave. NE
Orange City, IA 51041

_____________________________________________________________

					PRICE	 PRICE
PRODUCT			QTY		EACH	EXTENDED
_____________________________________________________________

SetAttr               	___	X       $15.00 =  $__________



				          TOTAL   $__________




Name:_______________________________ Phone:__________________

Company:_____________________________________________________

Address:_____________________________________________________

Address:_____________________________________________________

City/State:__________________________________________________

Zip:____________________

Where did you learn about this program or where did you first obtain
a copy of this program?
__________________________________________________________________

__________________________________________________________________

__________________________________________________________________









* Foreign orders must be paid in US$ with a check drawn on a US bank
or through the US branch of a foreign bank,or through an international
money order.











				SetAttr
			Written By Rahul Bhandari

   This is a powerful and easy to use utility program to help you set the
attributes of your files. One of the major advantage of SetAttr is that
it supports wild cards and directories. Thus saving you a lot of time and
hassle. SetAttr will also display the name of the files its changing the
attributes of, along with what its changing them to. After its done it'll
tell you the number of files the attributes of which it has changed.
SetAttr has been written so that it can be used on NetWorks. By using
SetAttr you can change the attributes of any/all files even if they are
hidden, ReadOnly, System File or combination of any/All of these attributes.

To use SetAttr here are some commands:

SetAttr [Drive:\Directory\FileName] [/][Choice of Attributes]  <<ENTER>>

Your options of changing the attributes are:

N :For making the file NORMAL.
H :For making the file HIDDEN.
S:For making the file a System File.
R :For making the file ReadOnly.

You may use any or all of the above mentioned options at the same time.
If you need help just type SetAttr /H and press <<ENTER>> and a help
screen will appear.

	Lets look at an example --  lets suppose we want to alter the
attributes of all the files with extension TXT in the directory named
Letters in drive "C" to be Normal, Hidden and ReadOnly all you have to
do is type :

	SetAttr C:\Letters\*.TXT /NHR  Press <<ENTER>>

SetAttr will do the rest for you.




```
{% endraw %}

## WISEDIR.DOC

{% raw %}
```











		++++++++++++++++++++++++++++++++++++++++++++++
	 	+              W I S E D I R 	             +
		+	                       		     +
		+	        User's Guide                 +
		+	       Version - 2.00		     +
		+					     +
		+               July 27, 1988		     +
		+					     +
		+  (C) Copyright 1988 - All Rights Reserved. +
		+					     +
		++++++++++++++++++++++++++++++++++++++++++++++





	+++++++++++++++++++++++++++++++++++++++++++++++++++++++
	|		      Shareware		              |
	|						      |
	| We encourage you to freely copy and share unmodified|
	| copies of this program with other people. If you    |
	| decide to use the program, support the Shareware    |
	| marketing concept by becoming a registered user.    |
	| Read the appendix for further details.	      |
	+++++++++++++++++++++++++++++++++++++++++++++++++++++++














   			  Tarbex Software
		         523 Albany Ave. NE
		        Orange City, IA 51041














  		       THE USER-SUPPORTED CONCEPT


User-supported software is an experiment in distributing computer programs
based on the following beliefs:

1.	That the value and utility of software is best assessed
	by the user on his/her own system.

2.	That the creation of personal computer software can and should be
	supported by the computing community.

3.	That copying of programs should be encouraged, rather than restricted.


Anyone may legally obtain an evaluation copy of the program from a friend or
computer club. After you have had a chance to use and evaluate the program in
your own environment, you are trusted to either forward a payment to Tarbex
Software or to discontinue use of the program.

If an "Evaluation notice" screen is displayed and you have to press a key to
continue each time you start the program, then you are using the Shareware
version.

Free distribution of software and voluntary payment for its use eliminates
costs of advertising and copy protection schemes. Users obtain quality
software at greatly reduced costs. They can try it out before buying, and
do so at their own pace and in the comfort of their own home or office.
The best programs will survive, based solely on their quality and usefulness.

Program Licensing Agreement

YOU SHOULD CAREFULLY READ THE FOLLOWING TERMS AND CONDITIONS BEFORE USING
WiseDir PROGRAM. USING THIS PROGRAM INDICATES YOUR ACCEPTANCE OF THESE TERMS
AND CONDITIONS. IF YOU DO NOT AGREE WITH THEM, PROMPTLY RETURN THE PACKAGE.


LICENSE

A limited license is granted to any user of the program to freely copy and
distribute the product on the following conditions:

You may:

	-  Use the program on any microcomputer on which this
           program was designed to operate.
	-  Copy the program into any machine readable form for
	   backup purposes.
	-  Freely copy and share unmodified copies of the
           program with your associates.

YOU MAY NOT:
	-  Sell the product for a fee and/or distribute the
           product along with other products without express
           written permission.
        -  Grant sublicense, leases, or other rights of the
           software to others.
        -  Make verbal or media translations of the user's
           manual.







	-  Modify or remove the Copyright notice from the
           program, diskette or its manual.
	-  Modify the program, diskette or manual and/or merge
	   it into another program for any machine.
	-  "Rent" the product to others.
	-  Bundle and sell this product as part of another
           more inclusive package.
	-  Club members  who receive the program are informed
	   in writing of the user-supported concept and
           encouraged to support it with their payments.

TERMS AND CONDITIONS

The license is effective until terminated. You may terminate it at any time
by destroying the diskette(s) containing the program. The license and the
rights thereof terminate if you fail to comply with any term or condition
of this agreement. You agree further, upon termination, to destroy the
program together with any modifications and/or merged portions in any form.


Limited Warranty
----------------

THE PROGRAM IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER
EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FAIRNESS FOR A PARTICULAR PURPOSE.
THE ENTIRE RISK AS TO QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH
YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE ENTIRE COST
OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION. SOME STATES DO NOT
ALLOW THE EXCLUSION OF IMPLIED WARRANTIES SO THE ABOVE EXCLUSION MAY
NOT APPLY TO YOU. THIS WARRANTY GIVES YOU SPECIFIC LEGAL RIGHTS AND
YOU MAY ALSO HAVE OTHER RIGHTS WHICH VARY FROM STATE TO STATE.

IN NO EVENT WILL TARBEX SOFTWARE BE LIABLE TO YOU FOR ANY DAMAGES INCLUDING
ANY LOST PROFITS, LOST SAVINGS OR OTHER INCIDENTAL OR CONSEQUENTIAL DAMAGES
ARISING OUT OF THE USE OR INABILITY TO USE THIS PROGRAM  EVEN IF TARBEX
SOFTWARE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR ANY CLAIM BY
ANY OTHER PARTY.

SOME STATES DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR
INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION
MAY NOT APPLY TO YOU.

Should you have any questions concerning this agreement, you may contact
Tarbex Software by writing to :

		Tarbex Software
		523 Albany Ave. NE
		Orange City, IA 51041


YOU ACKNOWLEDGE THAT YOU HAVE READ THIS AGREEMENT AND UNDERSTAND IT AND
AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS. YOU FURTHER AGREE THAT
IT IS THE COMPLETE AND EXCLUSIVE STATEMENT OF THE AGREEMENT BETWEEN US
WHICH SUPERSEDES ANY PROPOSAL OR PRIOR WRITTEN AGREEMENT, ORAL OR WRITTEN,
AND ANY OTHER COMMUNICATIONS BETWEEN US RELATING TO THE SUBJECT MATTER OF
THIS AGREEMENT.













SITE LICENSES AND BUNDLING ARRANGEMENTS:

Companies, schools, universities, government, and other organizations are
granted permission to copy the program with the documentation file for use
on other computers and at other locations in the company, so long as :
	1.	The program has been registered.
	2.	The full registration fee of $15 has been paid for each
                and every system on which the program will be used.

Corporate site licences and bundling arrangements are available direct
from Tarbex Software.

Corporate licenses and volume discounts are available upon request.

Bundling arrangements can be used to distribute copies of this program in
order to promote some other product or service.

Note that neither of these activities are permitted under the limited
license granted to all users of this program without the expressed written
consent of Tarbex Software.


				   REGISTRATION


If you purchased a copy of this program directly from Tarbex Software in
your name, then your copy is already registered and you will receive all
the benefits of registration. You do not need to send the registration form.
If you received this program some other way then you need to register your
copy of the program. To register and to avail registration benefits, complete
the order/registration form and mail it to Tarbex Software with your check
of $15 to cover postage and handling and other benefits mentioned below.

As a registered user you will receive:

	- The new version of this program. Some additional
          features of which are:
	     - Prints out a sorted list of the files.
	     - Pauses the output once the screen is full.

	- Printed 2-3 pages of documentation in the DOS manual format
          and size. Ready for you to insert in the DOS manual for further
          reference.

	- Limited telephone and written support.

	- Evaluation copies of other programs from Tarbex
          Software will be sent to you at no extra charge.

In addition, you will be supporting software distribution under the
shareware concept and will be contributing to the further development
of this and other shareware products.















		    ORDER/REGISTRATION  FORM


Mail To:


Tarbex Software
523 Albany Ave. NE
Orange City, IA 51041

_____________________________________________________________

					PRICE	 PRICE
PRODUCT			QTY		EACH	EXTENDED
_____________________________________________________________

WiseDir               	___	X	$15.00 =  $__________



				          TOTAL   $__________




Name:_______________________________ Phone:__________________

Company:_____________________________________________________

Address:_____________________________________________________

Address:_____________________________________________________

City/State:__________________________________________________

Zip:____________________

Where did you learn about this program or where did you first obtain
a copy of this program?
__________________________________________________________________

__________________________________________________________________

__________________________________________________________________









* Foreign orders must be paid in US$ with a check drawn on a US bank
or through the US branch of a foreign bank,or through an international
money order.







			         WiseDir
			Written By Rahul Bhandari

This is a powerful and easy to use utility program to help you maintain
your complex directories.

Some of the outstanding features of this program are:

	- Works just like the DOS Dir command.
	- Alike DOS Dir command WiseDir will give you a list of ALL the files
          in ALL the Directories and their Subdirectories and so on until
          ALL the files in ALL the directories have been listed.
	- No file can fool WiseDir even if its a System File, Hidden,
          ReadOnly or a combination of all these.
	- WiseDir will give you the file attributes along with the filename,
          the date & time the file was created and its size.
	- As in DOS Dir command you can do a directory wrap by using Dir/W,
          you can do the same with WiseDir. The difference again will be
          that ALL the files will be listed, in a format of three columns,
          with the file attributes alongside.
	- WiseDir will put your computer's Time and Date on the top of the
          list, so that you know when you made the list.
	- At the end of the list WiseDir will give a brief summery of the
          DiskSpace. It will tell you how much Free Space you have, how much
          Space you have used and what is the total space you have.
	- Since you'd rather have this list printed out, you may just tell
          WiseDir and it'll print it out for you, provided you printer is all
          set to go.
	- Will work on the NetWorks.

The new version of WiseDir which you'll receive when you register will have
more additional feature such as -- Letting you use WildCards, Printing out
a Sorted Directory and many more.

Following are the commands that you may use with this version of WiseDir:

	"WiseDir [/Options] [Drive to get the listing of]" <<RETURN>>

You have the following options:

	/W : For wrapping the directory.
	/P : For Printing the directory on the printer

If you leave out the Drive option, you'll get the directory of the drive you're
running WiseDir from, but you may specify the drive and WiseDir will give
you the listing of that drive.

If anywhere you get stuck or forget these commands, just type WiseDir /H
and a help screen will appear.

Let's look at an example -- suppose we want a directory listing of
Drive "C". We want it wrapped and also a hard copy of it. So all we
do is at the prompt type :

	WiseDir /W /P C    and press <<ENTER>>




















```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1503

     Volume in drive A has no label
     Directory of A:\

    MAXI     EXE     45709   6-03-90   6:16p
    SMAX     COM      2416   5-07-90   7:05p
    MAXI16   ZIP     54747   6-05-90   6:22p
    MAXI     DOC     31932   6-03-90   6:44p
    GO       BAT        38   7-14-89   8:01a
    GO       TXT      1156   8-01-89   4:26p
    COPYALL  DOC      1777   8-10-88  10:37p
    COPYALL  EXE     38303   8-10-88  10:20p
    FILE1503 TXT      7179   7-10-90   2:14p
    FV       COM     10620  11-17-88  11:07a
    FV       DOC     31451  11-17-88  11:14a
    GETFILE  DOC     11348   8-07-88  10:59a
    GETFILE  EXE     13152   8-10-88   2:06p
    INFO     DOC      1465   5-16-89   8:20a
    READ-ME            149   9-13-88   3:25p
    SETATTR  DOC     11017   8-07-88  10:55a
    SETATTR  EXE     13408   8-05-88   1:09p
    WISEDIR  DOC     11977   8-05-88   1:12p
    WISEDIR  EXE     19072   8-05-88   1:10p
           19 file(s)     306916 bytes
                            4096 bytes free
