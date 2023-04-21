---
layout: page
title: "PC-SIG Diskette Library (Disk #2988)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2988/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2988"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE2988.TXT

{% raw %}
```
Disk No: 2988                                                           
Disk Title: First Impression                                            
PC-SIG Version: S1                                                      
                                                                        
Program Title: First Impression                                         
Author Version: 2.0                                                     
Author Registration: $45.00                                             
Special Requirements: No special requirements. Supports a mouse.        
                                                                        
FIRST IMPRESSION, or IMPRESSION, allows users to install your software  
easily and also save you development time by not having to create your  
own install procedures.                                                 
                                                                        
The basis of this software consists of two programs, IMPRESS.EXE and    
INSTALL.EXE.  With these tools you can create a customized install      
program for many applications.  IMPRESSION will take you through        
several steps to personalize your install.  Once you complete the       
design, copy the INSTALL.EXE and INSTALL.CFG files to the distribution  
disk.  Then on the label write A:INSTALL.                               
                                                                        
A few features IMPRESSION offers developers is the ability to select the
source or destination drive and subdirectory, to print any documentation
included, to check the destination to confirm there is enough space to  
install the software, to hard code registered users name into your      
program, to utilize compress files using your own compression utility,  
and to also add the subdirectory to the path statement if the user      
wishes to do so and to automatically update the CONFIG.SYS file if      
necessary.  There are other features that you will see along the way as 
you create your configuration file.                                     
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
			  IMPRESSION 2.0
		      (FORMERLY INSTALL IT)
			REGISTRATION FORM

Please answer the registration questionnaire below and return this form with
your cash, check or money order to :


			Lincoln Beach Software
			P.O. Box 1554
			Ballwin, MO 63022
			Phone: (314) 227-2431


 Firm __________________________________________________________________

 Address _______________________________________________________________

	 _______________________________________________________________

	 _______________________________________________________________

	 _______________________________________________________________

 Phone (_____)_____-______  Occupation _________________________________

 Type of computer(s) you own ___________________________________________

 DOS version  _____

 Where did you get IMPRESSION from:

    BBS Name ________________________________ Number (_____)_____-______

    Other ______________________________________________________________


     IMPRESSION Registration .................   $ 45.00 ea  $ _______
     (Includes latest version of program diskette)
     (and printed documentation.)

     Check One Please:

		[  ] 3.5" Disk   [  ] 5.25" Disk

     Non-US Shipping ........................... $  5.00 ea  $ _______
	(Payments must be in US Dollars, US bank)

 TOTAL Enclosed ......................................... $ ____________

 Non-U.S. orders need to include $5.00 extra to cover additional
 shipping and handling charges.  Checks and money orders must be
 drawn on a U.S. bank.  Please send all payments payable in U.S. Dollars.


```
{% endraw %}

## UPDATES.DOC

{% raw %}
```
                        VERSION CHANGES & UPDATES

Version 2.0    2/8/92

Renamed to FIRST IMPRESSION and down to less that 45k!

Hard error recovery was added.  This will prevent thing from going awry
if a user takes out the disk or uses a write protected disk and the like.

Now checks for game port, math coprocessor and base memory.

Developers now have the option of letting the user have the option to add
the subdirectory to the PATH statement in the AUTOEXEC.BAT file.

Graphical Display Amusers(GDA) were added.  One of six may be displayed
as the files are being copied.  This may prevent the user from falling
asleep while the installation is occuring.

A file browser was also added to let users view up to four README.1ST files.

Improved multiple directory installations.

Added a windowing utility, SETUP.EXE, that will allow developers to create
customized windows.

Sound was added and is optional.
                     
The fill character that appeared in all the fields to fill in, '_', was
changed to a small dot.  When the character was used in text it was converted
to a space.


Version 1.5c

Allows the CONFIG.SYS file to update the FILES and BUFFERS statements.
If the subdirectory is not added to the path statement in the AUTOEXEC.BAT
the user will be prompt for the drive that the computer boots from,
otherwise it uses the same drive that the autoexec.bat file was located.
This routine will not ask the user if they want to do this or not, it is
performed automatically.  After all, your program will not work without it.
The values are filled in in the INSTALL ENHANCEMENTS menu option.

The ability to Shell to DOS was added when in INSTALIT.

Version 1.5b

The window that copies files from source to destination was not clearing
itself and kept showing files being copied as Error Opening: filename
after it needed the next disk with the following file.

You can now hardcode the user name into two files.  This was orginally
done for internal purposes but I thought others might be interested in
it as well.


Version 1.5a

Four more border types have been added to the window sections.

INSTALL.EXE will now check if the DOS version on the system running
meets your minimum required version.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2988

     Volume in drive A has no label
     Directory of A:\

    SETUP    EXE     20013   2-08-92   8:00a
    INSTALL  WIN      3043   2-08-92   8:00a
    INSTALL  CFG      3600   2-08-92   8:00a
    INSTALL  EXE     44884   2-08-92   8:00a
    IMPRESS  EXE     43792   2-08-92   8:00a
    README   1ST       569   2-08-92   8:00a
    REGISTER DOC      1650   2-08-92   8:00a
    IMPRESS  DOC     30935   2-08-92   8:00a
    UPDATES  DOC      2292   2-08-92   8:00a
    GO       BAT        38   1-31-91  12:58a
    FILE2988 TXT      2591   5-01-92   2:32p
    GO       TXT       924   5-01-92   3:39p
           12 file(s)     154331 bytes
                            2048 bytes free
