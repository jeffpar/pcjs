---
layout: page
title: "PC-SIG Diskette Library (Disk #3127)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3127/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3127"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## GREET.TXT

{% raw %}
```
Thank you for evaluating this program. I hope you enjoy it and I 
hope to here from you soon with your registration and comments.
The following files will explain how to install and run the Voice Blaster
program.
Thank you again!
From the Author, Mark E Cowan

```
{% endraw %}

## README.TXT

{% raw %}
```
		   GETTING STARTED WITH VBLASTER V1.1
		 (C) 1991 Copyright by Mark E Cowan
═══════════════════════════════════════════════════════════════════════
■ Introduction

Thank you for acquiring this product.  VBLASTER.EXE is a quality
program that provides an easy to use 'Windows' like operator interface.
Being nearly CUA (Common User Access) compliant, this program was
intended to provide you with the capabilities to create SoundBlaster
voice files, and to Play both SoundBlaster voice and CMF music files.
With List boxes, radio buttons, and scroll bars, even the novice with
no knowledge of DOS can run this program.

Voice Blaster will record RAW Voice files, but can play both RAW and
Creative Labs Compressed Voice files.  If you register for this 
product, you will receive notices of updates and enhancements of
Voice Blaster which will include file compression, more voice file
editting capabilities, and a 'WINDOWS 3.0' application version!
To find out how to register after running this program, simply select
the 'HELP' pull down menu and choose 'REGISTER'!

On-line help is provided to accelerate learning the various menues and
dialog boxes.  Press F1 anytime to receive help.

NOTE: VOICE BLASTER V1.1

This version has been released to fix some minor bugs in the program.
Here is a summary:

	1) Files in the root directory can now be selected to Play

	2) Program checks for proper file name when entering filename
	   to record. 

	3) When card status is selected, the Creative Labs Voice 
	   driver version is also displayed


■ Installation

Simply copy the following files into the same directory:

	VBLASTER.EXE     The main program
	BLASTM.HLP      Help file for the main program functions
	BLASTR.HLP      Help file for the Record dialog box
	BLASTP.HLP      Help file for the Play dialog box
	REGISTER.TXT    Text file describing how to register this product

The directory you chose can be any directory.  If you chose a current
directory that is on the DOS path, then you can then run VBLASTER from
any directory without having to type the full path name.

You can also create a new directory for the new files and launch this
program from other applications such as Pctools or Windows.

For those of you not familiar with DOS, here is an example for setting
up VBLASTER.EXE to run after downloading this program into the
directory c:\pcplus\dwn

	c:
	md c:\blast
	cd \blast
	copy c:\pcplus\dwn\vblaster.exe
	copy c:\pcplus\dwn\*.hlp
	copy c:\pcplus\dwn register.txt

■ Running

To run this program, simply type VBLASTER anytime at the DOS prompt if
the files were copied into a directory which was on the path.  
Otherwise, type the full path name such as \blast\VBLASTER to run.

You can also create a batch file which would call this program with the
path if the directory used is not on the DOS path.

■ Registering

Please send in your registration if you decide you like VBLASTER.  It
will enable me to continue to upgrade and enhance the program with new
functions and to support bug fixes.  Also, you will receive notices of
new program releases I am currently working on that use the 
SoundBlaster card. 

Read the file Register.txt to find out how to register this product, 
and how to contact the author.

SoundBlaster is a trademark of Creative Labs.
DOS and Windows are a trademark of Microsoft Corporation

```
{% endraw %}

## REGISTER.TXT

{% raw %}
```
			    REGISTRATION
		  (C) 1991 Copyright by Mark E Cowan
═══════════════════════════════════════════════════════════════════════
■ Registration Fee

If you find this program useful, please send $10.00.  This will allow
us to continue enhancing the program with more features, and to
support bug fixes.  We will attempt to notify you when updated
versions of this program are available, and when new programs for the
SoundBlaster Card are available.  If you would like the latest program
with all the latest features enabled, and a well written manual with
extra information on using your SoundBlaster Card, please include
an extra $8.00.  You will also receive a program with documentation
that will 'speek' any text file in any directory.  Speek will 
automatically find and run the 'SBTALKER' program which comes with 
your sound blaster program, speek the specified text program, and 
unload the 'SBTALKER' driver freeing up your valuable memory.

Registered users will be notified when we bring out new programs for
the SoundBlaster and Adlib cards.  But we can only develop and
support these new programs if we receive your donation.  So please,
if you cannot send $18.00, then send us something!  Registration will
be valid for at least 1 year.  Send in your registration today and
find out what more you can do with your sound cards.

■ Send all registration checks to :

			Mark E Cowan
			P.O. Box 163
			West Alexandria, OH 45381

■ Support

After we receive your check, we will attempt to support this program
for bug fixes for a period of 1 year.  We value your feedback highly.
We want to here from you, so send us your comments for bugs and also
your ideas on new programs using the SoundBlaster Card.  We are
available for Software Consulting on custom applications, so contact
us today!

■ Windows 3.0 Application for the Sound Blaster

Look for a Windows 3.0 Application which will allow you to record and
play SB Voice files (*.voc), and to play standard Midi Music files 
(*.mid).  Expected release date is December, 1991.  Contact the author
for details and to receive your copy.  Registered users of Voice 
Blaster will receive a discount on the registered version of Voice
Blaster for Windows!

■ Contacting the Author

All suggestions, questions, or bug reports may be sent to the author at
address below:

			Mark E Cowan
			P.O. Box 163
			West Alexandria, OH 45381

			GEnie Mail      : M.COWAN1
			Compuserve ID#  : 70303,2050

Please contact me anytime for any reason, even if you decide not to 
register this product.  Give us your ideas about what you would like
to see!

			SOFTWARE LICENSE

	  YOU MUST READ THIS IN ORDER TO USE THIS PROGRAM

YOU MAY NOT DISTRIBUTE THE PROGRAM VBLASTER.EXE FOR PROFIT WITHOUT THE
EXPRESS WRITTEN PERMISSION OF MARK E COWAN.

VBLASTER.EXE is not public domain software, nor is it free software.

VBLASTER.EXE is copyright (C) 1991 by Mark E Cowan

No one may modify or patch the VBLASTER.EXE and BLAST?.HLP help files
in anyway, including but not limited to decompiling, disassembling, or
otherwise reverse engineering the program.


A limited license is granted to copy and distribute VBLASTER.EXE only
for the trial use of others, subject to the above limitations, and also
the following:

1) VBLASTER.EXE must be copied in unmodified form, complete with the
file containing this license information.


			LIMITED WARRANTY

EXCEPT AS PROVIDED ABOVE, MARK E COWAN DISCLAIM ALL WARRANTIES, EITHER
EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO
THE PRODUCT.  SHOULD THE PROGRAM PROVE DEFECTIVE, THE PURCHASER ASSUMES
THE RISK OF PAYING THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR,
OR CORRECTION AND ANY INCIDENTAL OR CONSEQUENTIAL DAMAGES.  IN NO EVENT
WILL MARK E COWAN BE LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING
WITHOUT LIMITATION DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS
INTERRUPTION, LOSS OF BUSINESS INFORMATION AND THE LIKE) ARISING OUT OF
THE USE OR THE INABILITY TO USE THIS PRODUCT EVEN IF MARK E COWAN HAS
BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

■ Use of this product for any period of time constitutes your
acceptance of this agreement and subjects you to its contents.

SoundBlaster is a trademark of Creative Labs.
Adlib is a trademark of Adlib.

```
{% endraw %}

## GREET.TXT

{% raw %}
```
Thank you for evaluating this program. I hope you enjoy it and I 
hope to here from you soon with your registration and comments.
The following files will explain how to install and run the Voice Blaster
program.
Thank you again!
From the Author, Mark E Cowan

```
{% endraw %}

## README.TXT

{% raw %}
```
		   GETTING STARTED WITH VBLASTER V1.1
		 (C) 1991 Copyright by Mark E Cowan
═══════════════════════════════════════════════════════════════════════
■ Introduction

Thank you for acquiring this product.  VBLASTER.EXE is a quality
program that provides an easy to use 'Windows' like operator interface.
Being nearly CUA (Common User Access) compliant, this program was
intended to provide you with the capabilities to create SoundBlaster
voice files, and to Play both SoundBlaster voice and CMF music files.
With List boxes, radio buttons, and scroll bars, even the novice with
no knowledge of DOS can run this program.

Voice Blaster will record RAW Voice files, but can play both RAW and
Creative Labs Compressed Voice files.  If you register for this 
product, you will receive notices of updates and enhancements of
Voice Blaster which will include file compression, more voice file
editting capabilities, and a 'WINDOWS 3.0' application version!
To find out how to register after running this program, simply select
the 'HELP' pull down menu and choose 'REGISTER'!

On-line help is provided to accelerate learning the various menues and
dialog boxes.  Press F1 anytime to receive help.

NOTE: VOICE BLASTER V1.1

This version has been released to fix some minor bugs in the program.
Here is a summary:

	1) Files in the root directory can now be selected to Play

	2) Program checks for proper file name when entering filename
	   to record. 

	3) When card status is selected, the Creative Labs Voice 
	   driver version is also displayed


■ Installation

Simply copy the following files into the same directory:

	VBLASTER.EXE     The main program
	BLASTM.HLP      Help file for the main program functions
	BLASTR.HLP      Help file for the Record dialog box
	BLASTP.HLP      Help file for the Play dialog box
	REGISTER.TXT    Text file describing how to register this product

The directory you chose can be any directory.  If you chose a current
directory that is on the DOS path, then you can then run VBLASTER from
any directory without having to type the full path name.

You can also create a new directory for the new files and launch this
program from other applications such as Pctools or Windows.

For those of you not familiar with DOS, here is an example for setting
up VBLASTER.EXE to run after downloading this program into the
directory c:\pcplus\dwn

	c:
	md c:\blast
	cd \blast
	copy c:\pcplus\dwn\vblaster.exe
	copy c:\pcplus\dwn\*.hlp
	copy c:\pcplus\dwn register.txt

■ Running

To run this program, simply type VBLASTER anytime at the DOS prompt if
the files were copied into a directory which was on the path.  
Otherwise, type the full path name such as \blast\VBLASTER to run.

You can also create a batch file which would call this program with the
path if the directory used is not on the DOS path.

■ Registering

Please send in your registration if you decide you like VBLASTER.  It
will enable me to continue to upgrade and enhance the program with new
functions and to support bug fixes.  Also, you will receive notices of
new program releases I am currently working on that use the 
SoundBlaster card. 

Read the file Register.txt to find out how to register this product, 
and how to contact the author.

SoundBlaster is a trademark of Creative Labs.
DOS and Windows are a trademark of Microsoft Corporation

```
{% endraw %}

## REGISTER.TXT

{% raw %}
```
			    REGISTRATION
		  (C) 1991 Copyright by Mark E Cowan
═══════════════════════════════════════════════════════════════════════
■ Registration Fee

If you find this program useful, please send $10.00.  This will allow
us to continue enhancing the program with more features, and to
support bug fixes.  We will attempt to notify you when updated
versions of this program are available, and when new programs for the
SoundBlaster Card are available.  If you would like the latest program
with all the latest features enabled, and a well written manual with
extra information on using your SoundBlaster Card, please include
an extra $8.00.  You will also receive a program with documentation
that will 'speek' any text file in any directory.  Speek will 
automatically find and run the 'SBTALKER' program which comes with 
your sound blaster program, speek the specified text program, and 
unload the 'SBTALKER' driver freeing up your valuable memory.

Registered users will be notified when we bring out new programs for
the SoundBlaster and Adlib cards.  But we can only develop and
support these new programs if we receive your donation.  So please,
if you cannot send $18.00, then send us something!  Registration will
be valid for at least 1 year.  Send in your registration today and
find out what more you can do with your sound cards.

■ Send all registration checks to :

			Mark E Cowan
			P.O. Box 163
			West Alexandria, OH 45381

■ Support

After we receive your check, we will attempt to support this program
for bug fixes for a period of 1 year.  We value your feedback highly.
We want to here from you, so send us your comments for bugs and also
your ideas on new programs using the SoundBlaster Card.  We are
available for Software Consulting on custom applications, so contact
us today!

■ Windows 3.0 Application for the Sound Blaster

Look for a Windows 3.0 Application which will allow you to record and
play SB Voice files (*.voc), and to play standard Midi Music files 
(*.mid).  Expected release date is December, 1991.  Contact the author
for details and to receive your copy.  Registered users of Voice 
Blaster will receive a discount on the registered version of Voice
Blaster for Windows!

■ Contacting the Author

All suggestions, questions, or bug reports may be sent to the author at
address below:

			Mark E Cowan
			P.O. Box 163
			West Alexandria, OH 45381

			GEnie Mail      : M.COWAN1
			Compuserve ID#  : 70303,2050

Please contact me anytime for any reason, even if you decide not to 
register this product.  Give us your ideas about what you would like
to see!

			SOFTWARE LICENSE

	  YOU MUST READ THIS IN ORDER TO USE THIS PROGRAM

YOU MAY NOT DISTRIBUTE THE PROGRAM VBLASTER.EXE FOR PROFIT WITHOUT THE
EXPRESS WRITTEN PERMISSION OF MARK E COWAN.

VBLASTER.EXE is not public domain software, nor is it free software.

VBLASTER.EXE is copyright (C) 1991 by Mark E Cowan

No one may modify or patch the VBLASTER.EXE and BLAST?.HLP help files
in anyway, including but not limited to decompiling, disassembling, or
otherwise reverse engineering the program.


A limited license is granted to copy and distribute VBLASTER.EXE only
for the trial use of others, subject to the above limitations, and also
the following:

1) VBLASTER.EXE must be copied in unmodified form, complete with the
file containing this license information.


			LIMITED WARRANTY

EXCEPT AS PROVIDED ABOVE, MARK E COWAN DISCLAIM ALL WARRANTIES, EITHER
EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO
THE PRODUCT.  SHOULD THE PROGRAM PROVE DEFECTIVE, THE PURCHASER ASSUMES
THE RISK OF PAYING THE ENTIRE COST OF ALL NECESSARY SERVICING, REPAIR,
OR CORRECTION AND ANY INCIDENTAL OR CONSEQUENTIAL DAMAGES.  IN NO EVENT
WILL MARK E COWAN BE LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING
WITHOUT LIMITATION DAMAGES FOR LOSS OF BUSINESS PROFITS, BUSINESS
INTERRUPTION, LOSS OF BUSINESS INFORMATION AND THE LIKE) ARISING OUT OF
THE USE OR THE INABILITY TO USE THIS PRODUCT EVEN IF MARK E COWAN HAS
BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

■ Use of this product for any period of time constitutes your
acceptance of this agreement and subjects you to its contents.

SoundBlaster is a trademark of Creative Labs.
Adlib is a trademark of Adlib.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3127

     Volume in drive A has no label
     Directory of A:\

    VOICBLTR ZIP    248527   7-14-92   8:22a
    CANTGTUP ZIP     14817  10-31-90   3:24a
    COMANDER ZIP     12251   4-23-92   4:05p
    ILLBEBAC ZIP     10659   4-23-92   4:06p
    ALERTK2  ZIP     35768   4-23-92   4:03p
    PKUNZIP  EXE     23536   1-16-91  12:38p
    GO       BAT       109  11-22-91   8:57a
    GO       TXT      1155  12-21-92   1:35a
    GREET    TXT       268   7-04-91  11:02a
    README   TXT      3441   9-02-91  12:31a
    REGISTER TXT      4464  11-22-91   9:21a
    ELMER    VOC     31780   6-08-90   6:52p
    BLASTM   HLP      2190   6-22-91   8:17a
    BLASTR   HLP      2969   6-22-91   8:19a
    BLASTP   HLP      3387   6-22-91   8:18a
    LIST     COM      9209  11-10-90   1:00p
    VBLASTER EXE    116938  11-23-91  10:55a
    REPTEST  VOC     23467   3-20-91  10:46p
    BANJO    VOC    107774  11-19-91  12:21p
    KENTUCKY CMF      8740   6-06-90   7:58p
    IDOIT4U  CMF     11205   8-18-91   2:26a
    DRAWBACK CMF      9113  11-06-90   1:54p
           22 file(s)     681767 bytes
                          527872 bytes free
