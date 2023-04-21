---
layout: page
title: "PC-SIG Diskette Library (Disk #2004)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2004/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2004"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-IRIS, PC-MERLIN, PC-LOCK"

    A file containing sensitive information may be encrypted by IRIS,
    effectively precluding unauthorized disclosure.  The (encrypted) file
    may be copied to floppy disk and sent via public mail (an insecure
    channel) to another party, who, having access to IRIS and the "KEY"
    used to encrypt the document, will be able to decrypt the file,
    producing the original spreadsheet.
    
    IRIS implements these commercial cryptographic techniques:
    
    ~ ADFGVX
    
    ~ RSA public key cryptography
    
    ~ DES
    
    ~ LITTLEWOOD
    
    ~ VERNAM (XOR)
    
    ~ PLAYFAIR
    
    ~ BAZERIES
    
    ~ VIGENERE
    
    ~ CRC (checksum) generation
    
    ~ Secure file erasure.
    
    PC-LOCK allows the user of a PC to "lock" a DOS session, thereby
    inhibiting unauthorized usage of the machine during short absences such
    as lunchbreak.  The PC-LOCK program prompts the user for a password (and
    re-prompts for verification), and then prevents any further use of the
    machine until the correct password is re-entered.
    
    PC-MERLIN integrates the DOS "copy" program with data encryption.  This
    allows the user to copy multiple files to a target disk or directory,
    encrypting the data as the copy proceeds.  Such a function is
    particularly useful to users who only need to encrypt data that goes
    offsite to remote users, or backups.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2004.TXT

{% raw %}
```
Disk No: 2004                                                           
Disk Title: PC-IRIS, PC-MERLIN, PC-LOCK                                 
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: PC-Iris                                                  
Author Version: 4.0                                                     
Author Registration: $39.00 for PC-IRIS, PC-MERLIN, and PC-LOCK.        
Special Requirements: None.                                             
                                                                        
A file containing sensitive information may be encrypted by IRIS,       
effectively precluding unauthorized disclosure.  The (encrypted) file   
may be copied to floppy disk and sent via public mail (an insecure      
channel) to another party, who, having access to IRIS and the "KEY"     
used to encrypt the document, will be able to decrypt the file,         
producing the original spreadsheet.                                     
                                                                        
IRIS implements these commercial cryptographic techniques:              
                                                                        
~ RSA public key cryptography                                           
                                                                        
~ DES cryptography                                                      
                                                                        
~ VERNAM (XOR) cryptography                                             
                                                                        
~ PLAYFAIR cryptography                                                 
                                                                        
~ BAZERIES cryptography                                                 
                                                                        
~ CRC (checksum) generation                                             
                                                                        
~ Secure file erasure.                                                  
Program Title: PC-Lock                                                  
Author Version: 1.1                                                     
Author Registration: $39.00 for PC-IRIS, PC-MERLIN, and PC-LOCK.        
Special Requirements: None.                                             
                                                                        
PC-LOCK allows the user of a PC to "lock" a DOS session, thereby        
inhibiting unauthorized usage of the machine during short absences such 
as lunchbreak.  The PC-LOCK program prompts the user for a password (and
re-prompts for verification), and then prevents any further use of the  
machine until the correct password is re-entered.                       
Program Title: PC-Merlin                                                
Author Version: 2.0                                                     
Author Registration: $39.00 for PC-IRIS, PC-MERLIN, and PC-LOCK.        
Special Requirements: None.                                             
                                                                        
PC-MERLIN integrates the DOS "copy" program with data encryption.  This 
allows the user to copy multiple files to a target disk or directory,   
encrypting the data as the copy proceeds.  Such a function is           
particularly useful to users who only need to encrypt data that goes    
offsite to remote users, or backups.                                    
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## LOCK.DOC

{% raw %}
```
			PC-Lock V1.1-1
			==============

Overview
---------

PC-Lock allows the user of a PC to 'Lock' a DOS session, thereby inhibiting
unauthorised usage of the machine during short absences such as lunchbreak.

The PC-Lock program prompts the user for a password (and re-prompts for
verification), and then prevents any further use of the machine until
the correct password is re-entered.

Once PC-Lock has activated (by entering a valid password and verification)
there are only 2 ways to de-activate it:

	1: Enter the correct password
	2: Re-boot the machine (By power-off/on)

Re-booting the machine is a rather ham-fisted way of gaining access to the
machine, and will be obvious to the legitimate user, who will then investigate
who has been using the machine in his absence.


PC-Lock operation
-----------------

Example:

	C:>lock

	PC-Lock v1.1-1
	(c) Copyright 1990 Digital Crypto & Peter Moreton

	Lock Password> BATMAN
	Verification> BATMAN
	-- Session locked --
	Lock timestamp: Tue Mar 13 15:35:36 1990

	Unlock Password> BITMAN
	Unlock Password> BAPMAN
	Unlock Password> MADBAT
	Unlock Password> BATMAN
	-- Session unlocked --

	3 Failed unlock attempts

	C:>

(Nb: Responses to prompts are NOT echoed, but are shown here for clarity)


New features in this release
----------------------------

F1  PC-Lock now intercepts and disables the CTRL-ALT-DEL reboot sequence.

F2  PC-Lock now erases the screen during startup.

```
{% endraw %}

## MERLIN.DOC

{% raw %}
```
			PC-Merlin V2.0-1
			================


Overview
---------

PC-Merlin implements the DOS 'copy' program with data encryption. This
allows the user to copy multiple files to a target disk or directory,
encrypting the data as the copy proceeds.

Such a function is particularly useful to users who need exchange
sensitive data with remote users, or who need to keep offsite backups
of such data.

PC-Merlin encrypts data using the DES (Data Encryption Standard) algorithm
in ECB, CBC, CFB, CFB8, OFB, OFB8 modes. There is currently no known general
solution to this algorithm.


PC-Merlin syntax
----------------

    MERLIN input output /K:keyvalue /E /D /S /B /M:mode /V:vector

       input         The source file(s)
       output        The destination file(s)
       /K:keyvalue   Keyphrase or DES 64 bit hex key
       /E            Encrypt the input
       /D            Decrypt the input
       /S            Secure erase the source after processing
       /B            Brief mode - suppress block counting for speed
       /M:mode       DES mode: ECB, CBC, CFB, CFB8, OFB, OFB8, default is ECB
       /V:vector     Initialization vector, default is 12-34-56-78-90-ab-cd-ef


The input & output files must be supplied as parameters 1 & 2 respectively.
The order in which the switches are supplied is unimportant.


Keyvalue expression:

The keyvalue may be entered in one of 2 forms:

	1. 64 bit Hex. This is a 64 bit or 8 byte Hex value entered thus:

		/K:1F-6C-F1-37-1A-D4-71-0F

	2. Keyphrase. This is any arbitrary sequence of characters such as
	   an easily remembered phrase. The minimum length allowed is 8 
	   chars, maximum 64 chars. Two rules should be considered when
	   selecting keyphrases:

		1. Easily remembered phrases are often easily guessable
		2. Long phrases produce more secure keys than short ones

	   An example of a good (ie: secure) keyphrase would be:

		/K:slowaheadallengines

Cipher function:

The user selects the cipher function, Encrypt or Decrypt with the /E or /D
switches. /E indicates that encryption is required, /D indicates that dec-
-ryption is required. If both switches are specified, then the last one on
the command line has precedence.


Secure erase:

It is often desirable to erase the input file after processing. This option
is selectable by specifying the /S switch. The secure erase function erases
files by repeatedly overwriting them with a changing pattern. After the file
data has been overwritten, it is then deleted.


Example:

A user wishes to copy all data from a directory to floppy, which will be 
stored off-site:

	C:> merlin c:\secrets\*.DBF a: /K:nevertalktostrangers /E

The user may choose to erase data after it has been copied thus:

	C:> merlin c:\secrets\*.DBF a: /K:nevertalktostrangers /E /S


If the data had to restored from floppy, then the following command would
be used:

	C:> merlin a:*.* c:\secrets\*.DBF /K:nevertalktostrangers /D


New features in this release
----------------------------

F1  DES chaining modes implemented. All common DES modes are now supported,
    these being:

	ECB  - Electronic code book 		(Default)
	CBC  - Cipher block chaining    	(Recommended)
	CFB  - Cipher feedback (64 bit)
	CFB8 - Cipher feedback (8 bit)		(V. Slow!)
	OFB  - Output feedback (64 bit)
	OFB8 - Output feedback (8 bit)		(V. Slow!)

    If unspecified, ECB mode will be used. Other modes can be selected
    by specification of the /M: switch, for example /M:CBC selects cipher
    block chaining mode.

F2  /V Initialization Vector switch. The initialization vector used in
    CBC, CFB, CFB8, OFB, OFB8 modes may be specified via the /V:vector
    switch. If unspecified, the IV will default to:

		/V:12-34-56-78-90-ab-cd-ef

F3  /B brief mode switch. Specification of this switch causes Merlin to
    not display the current block count during file processing. This 
    improves overall performance.

F4  DES performance. The performance of DES encryption/decryption has been
    improved by 300%.

F5  Secure erase performance. MERLIN now implements the FASTerase erasure
    algorithm, with 300% performance improvement.

```
{% endraw %}

## OZY.TXT

{% raw %}
```
I met a traveller from an antique land
who said: two vast and trunkless legs of stone
stand in the desert... near them, on the sand
half-sunk, a shattered visage lies, whose frown,
and wrinkled lip, and sneer of cold command
tell that its sculptor well those passions read
which yet survive, stamped on those lifeless things,
the hand that mocked them, and the heart that fed;
and on the pedestal, these words appear:
'My name is OZYMANDIAS, king of kings,
look on my works, ye mighty, and despair!'
Nothing besides remains, round the decay
of that colossal wreck, boundless and bare.
The lone and level sands stretch far away.
```
{% endraw %}

## REGISTER.DOC

{% raw %}
```
Digital Crypto Registration
---------------------------

This software is copyright (C) 1990 by Digital Crypto and Peter Moreton.

If you intend to make use of any Digital Crypto product, we would appreciate
your prompt registration. In return for registration you will receive the 
current IRIS disk with the latest versions of all our software.

Telephone UK: (0222) 711370.  Outside UK: +44 222 711370.
 
Contact Digital Crypto for details of VMS-Iris / UNIX-Iris / OS2-Iris,
source code access, application program interface, site licensing, or 
maybe we can help with your secure computing application development.


How to register
---------------

Print this file, fill out and return the order form that follows.

Submit Payment to:	DIGITAL CRYPTO
			PO BOX 1
			PENARTH
			SOUTH GLAMORGAN
			UNITED KINGDOM	CF6 2WB

Media codes:

        Enter the required media code in the media box of the order form.

	Code	Media

	MD1	5.25" 360  Kbyte disk
	MD2	5.25" 1.2  Mbyte disk
	MD3 	3.5"  720  Kbyte disk
	MD4 	3.5"  1.44 Mbyte disk

	MT1 	1/2" Mag tape  (VAX/VMS only)
	MT2	TK50 cartridge (VAX/VMS only)


Non-US residents:

	Please convert the Dollar amount shown to the equivalent local 
	currency, at the prevailing exchange rates. Submit payment by
        cheque in your local currency. Digital Crypto will negotiate
        such foreign currency payments, and accept the charges incurred.

Company Orders:

	Simply submit your order with an official company purchase 
        order number, we will supply goods and invoice accordingly.


Quantity discount:

	Qty 1-4		0%  discount
	Qty 5-9 	10% discount
	Qty 10-19	20% discount
	Qty 20-99	30% discount
	Qty 99+		See site/corporate pricing

=========================================================================
                             ORDER FORM
=========================================================================

Current IRIS version held: (check one)

  [] v3.5    [] v3.6    [] v3.7    [] v4.0


  Description          Media   Unit Cost       Qty   Amount
+------------------------------------------------------------------+
| PC-Iris License    |       | USD $39-00    |	   |               |
| (Single CPU)	     |       |		     |	   |               |
|--------------------+-------+---------------+-----+---------------|
| OS2-Iris License   | 	     | USD $39-00    |	   |	           |
| (Single CPU)	     |	     |		     |     |	           |
|--------------------+-------+---------------+-----+---------------|
| VMS-Iris License   |	     | USD $500-00   |	   |               |
| (Single CPU)       |       |   per VUP     |	   |               |
|--------------------+-------+---------------+-----+---------------|
| PC-Iris unlimited  |	     | USD $5000-00  |	   |               |
| Site License       |       |        	     |	   |               |
|--------------------+-------+---------------+-----+---------------|
| VMS-Iris unlimited |	     | USD $10000-00 |     |               |
| Site License       |       |       	     |     |               |
|--------------------+-------+---------------+-----+---------------|
| PC-Iris unlimited  |	     | USD $15000-00 |	   |               |
| Corporate License  |       |        	     |	   |               |
|--------------------+-------+---------------+-----+---------------|
| VMS-Iris unlimited |	     | USD $30000-00 |     |               |
| Corporate License  |       |       	     |     |               |
+--------------------+-------+---------------+-----+---------------|
                                                   |               |
                                            Total  |               |
                                                   |               |
                                                   +---------------+


Payment by: [] Check   [] Money Order   [] Purchase order #: [               ]

Company:
	------------------------------------------------
Name:
	------------------------------------------------
Addr:
	------------------------------------------------
        
        ------------------------------------------------
City:
	------------------------------------------------
State:
	------------------------------------------------
Zip:
	------------------------------------------------

=========================================================================

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2004

     Volume in drive A has no label
     Directory of A:\

    IRIS     EXE    135285   4-09-90   5:31p
    IRIS     DAT       610   4-10-90   5:43a
    IRIS     HLP    118784   4-15-90   4:35p
    DEMO     BAT      3584   4-10-90   7:42p
    OZY      TXT       768   4-24-89   8:18p
    KEYS     DAT      1553   3-16-90   6:15p
    SWIFT    MSG       640   4-10-90   6:53p
    ENCRYPT  BAT       128   3-25-90  11:56a
    DECRYPT  BAT       128   3-25-90  11:57a
    INSTALL  BAT       384   3-27-90  12:04p
    READ     ME       2688   4-10-90   6:44p
    REGISTER DOC      4480   3-31-90  12:13p
    MERLIN   EXE     51815   4-09-90   5:51p
    MERLIN   DOC      4352   3-31-90  11:08a
    LOCK     EXE     15079   4-09-90   5:51p
    LOCK     DOC      1536   3-31-90  10:55a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT      1002   5-08-90  11:57p
    FILE2004 TXT      4219   5-09-90   1:33p
           19 file(s)     347073 bytes
                            5120 bytes free
