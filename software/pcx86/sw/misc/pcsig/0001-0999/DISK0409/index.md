---
layout: page
title: "PC-SIG Diskette Library (Disk #409)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0409/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0409"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}
{% comment %}samples_begin{% endcomment %}

## CONFIG.DOC

{% raw %}
```
The license number for the public domain version is 12345.

This file explains the procedure for changing the configuration of
SNOBASIC. It is assumed that you have read the "Getting Started"
section of the manual and the "Configuring" section of the manual
before proceeding in this file.

This file has sections dealing with the major topics of re-configuration.
You should proceed now to the section that deals with the configuration
you wish to perform.

HARD DISK SYSTEMS

    Insure that you are in the root directory of your hard disk ("cd \").
    
    Create a directory on your hard disk named SNOW ("md snow").
    
    Copy the root directory of SNOBASIC disk one to the directory SNOW
    ("copy a:\*.* c:\snow").
    
    Create a directory on your hard disk named DK0 ("md dk0").
    
    Copy the DK0 directory from SNOBASIC disk one to the directory DK0
    on your hard disk ("copy a:\dk0\*.* c:\dk0").
    
    Place SNOBASIC disk two in a.
    
    Create a directory on your hard disk named DK1 ("md dk1").
    
    Copy the DK1 directory from SNOBASIC disk two to the directory DK1
    on your hard disk ("copy a:\dk1\*.* c:\dk1").
    
    Use a text editor such as EDLIN to make the following change to
    the STARTUP.BAT file that you wish to use:
    	SET D1=B:\DK1	should now be	SET D1=\DK1
    
    Change directories to the directory SNOW ("cd snow").
    
    Bring up SNOBASIC ("startup" or "startup2" or "startup3").
    
ONE DRIVE SYSTEMS:

    First, be sure that you have made a copy of SNOBASIC disk one
    as described in the "INSTALL.DOC" file. This will place DOS
    on SNOBASIC disk one.
    
    Format a blank disk ("format b:")
    
    Create a directory DK0 on the new disk ("md b:dk0").
    
    Copy the DK0 directory of SNOBASIC disk one to the new disk
    (Place SNOBASIC disk one in the drive and "Copy a:\dk0\*.* b:\dk0".
    DOS will prompt you to swap disks from time to time.)
    
    Make a directory DK1 on the new disk ("md b:dk1").
    
    Copy the programs and files that you wish to use from SNOBASIC disk
    two to the DK1 directory on the new disk (SNOBASIC disk two will
    be disk a and the new disk will be disk b. Type
    "Copy a:\dk1\filename b:\dk1\" for each file to be transferred.
    DOS will prompt you to swap disks from time to time.)
    
    Use a text editor such as EDLIN to make the following change to
    the STARTUP.BAT file (on SNOBASIC disk one) that you wish to use:
    	SET D1=B:\DK1	should now be	SET D1=\DK1
    
    With SNOBASIC disk one in the drive, bring up SNOBASIC ("startup"
    or "startup2" or "startup3").
    
    When asked for a license number, before answering the question,
    remove SNOBASIC disk one and place the new disk into the drive.
    Then answer the license number question.
    
INTERFACE BOARDS (TERMINALS) OTHER THAN COM1 OR COM2:
    
    First, read the section "Configuring" in the manual.
    
    It is necessary to know the "device address" of your board. This
    should be listed somewhere in the documentation that came with
    your board. The device address given there will probably be
    given in "Hexadecimal" notation. It must be converted to decimal
    to be used here. (Your dealer may be able to help you or you
    may call Snowcrest at 916-926-3817 for help).
    
    Add a "set" command to the "STARTUP.BAT" file that you wish to
    use. Usually this will be:
    	SET U3=aaaa,ii,ssss
    Where aaaa is the device address as discussed above. ii is the
    interrupt level of the new board. Unless your board is capable
    of using interrupt level 2 (should be stated in the documentation
    if so - most boards use only level 3 or level 4), you will be
    assigning this new board to "piggyback" on the clock interrupt
    by setting ii to 128. ssss is the baud rate that you wish for the
    new board. This may be selected from the list given in the manual
    or may be the number zero (0). If you choose zero, the baud rate
    will be changed every time the user presses "break" on his terminal
    (cycling through 110, 300, 1200 and 9600 baud). You may also find
    that the rate will change when the terminal is turned off, so this
    option should primarily be used only on telephone lines with modems.
    
    Don't forget to change the entry in the STARTUP.BAT file "NU" to
    reflect the new number of users ("SET NU=4").
    
LARGE SYSTEMS - "OUT OF ENVIRONMENT SPACE"
    
    As you add information to the DOS environment by adding SET commands
    or by adding to the length of the existing SET commands, you may
    encounter the problem of running out of environment space. DOS provides
    a mechanism for increasing the space needed to hold SET commands, but
    this mechanism only works when you type the SET commands from the
    keyboard. The SET commands for SNOBASIC come from the STARTUP.BAT
    files, and DOS will not allocate more space when these files are
    being used. SNOBASIC is distributed with a program called ENVIR which
    will modify COMMAND.COM on the disk you wish to use for SNOBASIC to
    allocate additional environment space when the system is booted
    (power on or ctrl-alt-del). If you encounter the problem of running
    out of environment space, you need to perform the following steps:
    
    First, insure that you have made a copy of SNOBASIC disk one as
    described in the INSTALL.DOC file.
    
    Place the copy of SNOBASIC disk one in drive a if you are running
    on a floppy disk system.
    
    Boot the system (ctrl-alt-del).
    
    If you have a hard disk system, type "path \snow".
    
    Type "envir 30". The number 30 tells the system to provide thirty 16
    byte blocks to hold the environment SET commands (total 480 bytes).
    This number may be as large as 99 or as small as 6, but the recommended
    number for SNOBASIC is 30. (Typing "envir 14" will restore DOS to its
    original state).
    
    When the DOS prompt returns, boot the system again (ctrl-alt-del). There
    is now enough space in the environment to hold the necessary SET commands.
    
    This procedure modifies the program COMMAND.COM on the root directory
    of the disk. In order to have the additional space in the environment,
    you must boot from the disk that has been modified. If you boot from
    another disk first, such as your original DOS disk, and then change
    to the SNOBASIC disk to run SNOBASIC, you will again run out of
    environment space.
    
PRINTERS:

    SNOBASIC accesses the printer through the DOS device PRN:. This device
    may be changed by use of the DOS "mode" command to be LPT1, LPT2,
    COM1 or COM2. If it is desired to use a serial printer, you must
    insure that the same serial port is not assigned by SNOBASIC to a
    user. If you have both COM1 and COM2 and need a serial printer, the
    easiest way to configure for it is to place the printer on COM2,
    use the DOS "mode" command to inform DOS that the printer is on
    COM2, and bring SNOBASIC up using STARTUP2.BAT, thus configuring
    only COM1 for SNOBASIC. If you have only COM1, you may bring SNOBASIC
    up using STARTUP.BAT (thus having only a single user basic) and
    place your printer on COM1. If you wish to use COM1 in this case
    for a terminal, you should first set PRN: to LPT1 or LPT2 with
    the DOS "mode" command and use STARTUP1.BAT to start SNOBASIC.
    The serial printer then would not be used by SNOBASIC.
    
    Of course, if you have a parallel printer, there is no such problem.
    
    
```
{% endraw %}

## DIREC.DOC

{% raw %}
```
Documentation for SNOBASIC in a binder as well as source code
for the basic routine ADVNT and SNOTERM, SNOBACK and SNOREST
are available for $39.95 from Snowcrest Computer Specialties,
527 McCloud Ave., Mt. Shasta, CA  96067.

README.DOC	updates for SNOBASIC
INSTALL.DOC	installation instructions for SNOBASIC
CONFIG.DOC	configuration instructions for SNOBASIC
STARTUP.BAT	startup batch file for SNOBASIC (1 user)
STARTUP2.BAT	startup batch file for SNOBASIC (2 users)
STARTUP3.BAT	startup batch file for SNOBASIC (3 users)
SNOTERM.EXE	terminal emulator (fast - up to 9600 baud)
SNOTERM.DOC	documentation for SNOTERM
SNOBACK.COM	fast backup routine
SNOBACK.DOC	documentation for SNOBACK
SNOREST.COM	fast restore routine
SNOREST.DOC	documentation for SNOREST
SNOBASIC.EXE	SNOBASIC for machines without 8087
SNOBAS87.EXE	SNOBASIC for machines with 8087
		(Must be renamed to SNOBASIC.EXE to use)

The directory DK0 contains files needed to run SNOBASIC

```
{% endraw %}

## FILES409.TXT

{% raw %}
```
-------------------------------------------------------------------------
Disk No 409   SNOCREST BASIC #1                                 v2
-------------------------------------------------------------------------
Just in case you don't have BASIC in your machine this is it. A BASIC
interpreter that is made for multiusers. One of two disks.
 
The license number of the public domain version is 12345.  Needed when
basic is started.
 
README   DOC  Updates for SNOBASIC
INSTALL  DOC  Installation instructions for SNOBASIC
CONFIG   DOC  Configuration instructions for SNOBASIC
STARTUP  BAT  Startup batch file for SNOBASIC (1 user)
STARTUP2 BAT    "       "    "    "     "     (2 users)
STARTUP3 BAT    "       "    "    "     "     (3 users)
DK0     <DIR> Contains files needed to run SNOBASIC
SNOBASIC EXE  SNOBASIC for machines without 8087
SNOBAS87 EXE    "       "     "     with 8087
SNOTERM  EXE  Terminal emulator (fast - up to 9600 baud)
SNOBACK  DOC  Documentation for SNOBACK.COM
SNOTERM  DOC  Documentation for SNOTERM.EXE
SNOBACK  COM  Fast backup routine
SNOREST  DOC  Documentation for SNOREST.COM
SNOREST  COM  Fast restore routine
DIREC    DOC  Disk directory
SNOBACK  ASM  Source code for SNOBACK.COM
SNOREST  ASM  Source code for SNOREST.COM
 
PC-SIG
1030D E Duane Ave
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## INSTALL.DOC

{% raw %}
```
The license number for the public domain version is 12345.

This file explains installation of SNOBASIC.

1.  The very first procedure is to make copies of all the SNOBASIC
    disks. The original disks should be stored as backups and the
    copies should be used so as to not lose the information on the
    original disks. The procedure is as follows:
	If you have a single floppy drive system, the following steps
	    will be exactly as stated. DOS will prompt you to change
	    disks as the process continues.
	Boot your DOS (2.0 or higher) disk from drive a.
	Type "Diskcopy a: b:" and press return.
	When Diskcopy asks for the source and target disks, place the
	    SNOBASIC disk into drive a and the blank disk into drive b.
	    (If you have a single-drive system, place the SNOBASIC disk
	    into drive a. DOS will ask for the disk for drive b. At that
	    time place the blank disk into drive a. Continue to swap back
	    and forth when DOS prompts.)
	When Diskcopy asks if you wish to copy another, answer "n".
	If this is SNOBASIC disk one:
		Put your DOS disk into drive a.
		Type "Sys b:". This will place a copy of DOS on the
		    SNOBASIC copy which is in drive b (the disk which
		    originally was blank).
		Type "Copy command.com b:". This will place a copy of
		    the DOS file COMMAND.COM on the copy disk.
	Mark the blank disk the same as the SNOBASIC disk (including
	    the copyright message - this is one of the three copies
	    allowed by your license agreement).
	Follow the above procedure for each of the SNOBASIC disks.

2.  Place your copy of SNOBASIC disk one into drive a.

3.  If you have an 8087 math co-processor installed in your system,
    type "Ren snobasic.exe snobasic.sav" and press return. Then
    type "Ren snobas87.exe snobasic.exe" and press return.

4.  If you wish to bring up SNOBASIC with the default configuration,
    type:
	STARTUP		to install a single-user system (normal
			keyboard and terminal-console-only)
	STARTUP2	to install a two-user system (console and
			COM1)
	STARTUP3	to install a three-user system (console and
			COM1 and COM2)
    
5.  The system will ask for your license number. This is printed on the
    bottom of the license agreement on the diskette envelope and in
    the beginning of the manual. Enter the license number and press
    "return". If this number is entered incorrectly, you will not
    be able to load programs from the disk or save them to the disk.
    Therefore, enter the number carefully.
    
6.  The disk light will flash. Press the escape key (ESC) to start the
    sign-in procedure.
    
7.  SNOBASIC will ask for your terminal information. Type CRT and press
    return.
    
8.  Your account number will be requested. Type 9999 and press return.
    
9.  Your password will be requested. Type START and press return.
    
10. SNOBASIC will then respond with the "Hello" message and print "Ready".
    
11. You may enter a BASIC program, look at the disk directory ("Lib" for
    public programs, "Direc" for private programs assigned to the
    account 9999, "Lib[-1]" to see all SNOBASIC files on the directory),
    load a program ("Load filename", where filename is the name of any
    file in the public or private directory which has a "B" attribute),
    list a program ("List" after loading the program), run a program
    ("Run" after loading or "Run filename"), ask the time ("Time"), see who
    else is using the system ("Lines"), add new accounts ("Run account"),
    look at the system log ("Run log"), or sign off ("Bye"). Of course,
    other commands found in the manual may also be tried.
    
12. If you started a two or three user system, you may do the same from
    terminals attached to COM1 or COM2. If the system does not respond
    when you press escape on one of these terminals, press the "break"
    key to change baud rates and try escape again (do this sequence
    several times). If it still does not operate, make sure you used
    either INSTALL2 or INSTALL3 and check the manual to insure that
    your terminal is connected correctly.
    
13. When you are through testing and wish to return to DOS, sign in at
    the console and type "Kill".
    
14. To configure for more than three users, look in the file CONFIG.DOC.
    
15. Disk number two contains public domain BASIC programs which will
    run under SNOBASIC. The three startup files configure the system
    to run this disk as disk b:. If you have a two-disk system, insert
    this disk in drive b. If you do not have a two-disk system, the
    programs on this disk will have to be placed on disk one. Look in
    the file CONFIG.DOC for more information. If you have a hard disk,
    look in CONFIG.DOC. Once you have inserted this disk (or configured
    for its use), bring up SNOBASIC (as discussed above) and type
    "Disk 1". Then type "Lib" to see the SNOBASIC directory for the
    disk. Programs may be run by typing "Run filename" (where filename
    is any name printed in the directory which shows the "B" attribute).

    To run Adventure, type "Disk 1" then "Run Advnt".
    
16. The startup files set the user space (SU parameter - see CONFIG.DOC)
    large enough to run the public domain programs. If you need a larger
    or smaller user space, see CONFIG.DOC for information.

```
{% endraw %}

## README.DOC

{% raw %}
```
The license number for the public domain copy is 12345.


INFORMATION REGARDING FILES ON THIS DISK CAN BE FOUND IN THE FILE

DIREC.DOC

Documentation for SNOBASIC in a binder as well as source code
for the basic routine ADVNT and SNOTERM, SNOBACK and SNOREST
are available for $39.95 from Snowcrest Computer Specialties,
527 McCloud Ave., Mt. Shasta, CA  96067.

This file contains updates and documentation of new features in
SNOBASIC. Please make notations in the manual to refer to the topics
given here.

CTRL-S vs. CTRL-NUM LOCK

    SNOBASIC provides ctrl-s as a means to pause printed output. Ctrl-s
    is used in place of ctrl-num lock since terminals attached to the
    serial cards (COM1 and COM2) do not have a num lock key. Ctrl-num
    lock also has the problem that it is implemented by actually stopping
    the processor of the computer (placing it in a tight loop) until
    the next key is pressed. If you use this feature, you will stop
    all processing on your program (thus stopping your screen output
    as you desired), but you will also stop all processing on all other
    terminals which are attached to the system! If you use ctrl-s, you
    will only stop your screen output and others may continue their
    processing. To start your screen again, use ctrl-q.
    
NEW OPTION ON SAVE AND PSAVE COMMANDS
    
    A protection option has been added to the Save and Psave commands
    which allows you to save a program in such a way that it may never
    be listed. After saving in this manner, the program may be loaded
    and run but the List command, Length command, Save command and Psave
    command will be inhibited. The option immediately protects the version
    of the program which is in memory also, so you must be sure that
    you have another copy saved elsewhere before using this option.
    In either the Save or Psave command, us the letter "p" and a comma ","
    before the file name:
    	Save p,prog1
    
ENLARGING SYSTEM FILES - BASICLOGS, BASICACCTS

    The four system files, Basiclogs, Basicaccts, Basicerror and Basicmesgs
    are opened by SNOBASIC as soon as the system starts. These files are
    not closed until the "Kill" command is given to return to DOS. Thus,
    the size of the files must not be changed "out from under" SNOBASIC.
    The recommended procedure to be used to enlarge these files is as
    follows:
    
	While SNOBASIC is running, create a new file with a different name
	for one of the system files, making it as large as you desire it to
	be (Create "newlogs",100). Then copy the present contents of the
	old file to the new file (Copy "basiclogs","newlogs"). Bring the
	system down (Kill), change to the directory which contains the
	file (cd \dk0), delete the old file (del fbasiclogs) and rename
	the new file (ren fnewlogs,fbasiclogs).
    
NEW ENVIRONMENT VARIABLES

    The "Configuring" section of the manual describes the environment
    variables and discusses their use. Two new variables have been added:
    
	PC -- Print "shorthand" character. Usually 63 (?). This is the
	      character which will be interpreted by SNOBASIC as the word
	      "Print". If it is desired to use a character other than the
	      question mark, set PC to the ascii value (see appendix A)
	      of the character desired. Using an unshifted character
	      is sometimes easier than the shifted question mark.
	
	DS -- DOS output switch. If this variable is set to 1 (normal),
	      output to the screen will be passed through DOS. This allows
	      SNOBASIC to work on computers where the screen address in
	      memory is not in tbe B000 page. This also allows the use
	      of the ANSI.SYS screen driver (for output only - does not
	      work with the keyboard). Setting this variable to zero
	      (0), however, greatly speeds screen output since SNOBASIC
	      will then write directly to the screen, bypassing DOS.

NEW SYS FUNCTION

    Sys(17) has been added. This function will return the value of the
    EIA port status word. The value returned may be interrogated as
    follows:
	10 Rem the variable A should be set to the bit number desired
	15 Rem in this case we are checking carrier detect (see below)
	20 Let A=7
	30 Let S=mod(int(sys(17)/(2^A))/2)
	40 If S=1 then Print "Caller is connected"
	50 If S=0 then Print "Caller has hung up"
    The table of status values by bit number is as follows:
    
     0 - Clear to send has changed
     1 - Data set ready has changed
     2 - Ring detect has changed
     3 - Carrier detect has changed
     4 - Clear to send (1=true)
     5 - Data set ready (1=true)
     6 - Ring indicator (1=true)
     7 - Carrier detect (1=true)
     8 - Received character ready to be read (not likely to be noticed
	 before SNOBASIC handles the character)
     9 - Overrun error (not likely to occur)
    10 - Parity error (can not happen - SNOBASIC initializes for no parity)
    11 - Framing error (may happen as terminal connects or disconnects)
    12 - Break detect (not likely to be noticed before SNOBASIC handles
	 the break)
    13 - Transmitter holding register empty (will be true when not
	 transmitting characters)
    14 - Transmitter shift register empty (same as 13)
    15 - Time out (can not happen - SNOBASIC does not wait for clear to
	 send or Data set ready before transmitting)

ADDITIONAL FLEXIBILITY IN COPY COMMAND

    The Copy command no longer must have the destination file already
    Created before use. If the destination file does not exist on the
    directory specified, it will automatically be created with the same
    size and attributes as the source file. If it already exists, it will
    be checked to insure that it has the same attributes as the source
    file and an error message will be issued if not. If the destination
    file is larger than the source, the source will be copied into the
    beginning of the destination file, leaving the rest of the destination
    file undisturbed. If the destination file is smaller than the source,
    it will be extended to the size of the source (this can be dangerous
    if another user has the destination file open when the copy occurs.
    The copy would extend the file. Then the other user would set it back
    to its original size when he closed the file. Flexibility sometimes
    must be used with caution!)


```
{% endraw %}

## SNOBACK.ASM

{% raw %}
```
	page ,132
	title snoback

	if2
	%out Pass 2
	endif

code	segment
	assume	cs:code,ds:code

	org 100h	;COM file

	public snoback
snoback	proc far
	jmp cont

	public splash
splash	db 13,10,"Snoback - Fast backup routine Version 1.1 Serial #00000"
	db 13,10,"Copyright (c) 1985 by Snowcrest Computer Specialties"
	db 13,10,"Provided AS IS. No warranty, express or implied."
	db 13,10,"Snowcrest Computer Specialties, 527 McCloud Ave.,"
	db 13,10,"Mt. Shasta, CA  96067.",13,10,"$"
	public flnam,fln1,fln2,fln3
flnam	db "a:sbackup."
fln1	db "0"
fln2	db "0"
fln3	db "1",0
	public mesgp
mesgp	db "Must specify two drives!$"
	public mesg0
mesg0	db "Must have at least 64k!$"
	public mesg1
mesg1	db "Source and destination drives cannot be the same!$"
	public mesg2
mesg2	db "Problem with source disk!$"
	public mesg3
mesg3	db "Problem with destination disk!$"
	public prepms,prepmn
prepms	db 13,10,"Mount diskette number "
prepmn	db "XXX in drive "
prepdk	db "A, press any key:$"
	public source
source	db 0
	public swapo
swapo	db 0
	public dest
dest	db 0
	db "sbackup ???",25 dup(0)
	public handle
handle	dw 0
	public bypsc
bypsc	dw 0	;bytes per sector
	public scpal
scpal	dw 0	;sectors per allocation unit
	public reserv
reserv	dw 0	;number of reserved sectors
	public nfats
nfats	dw 0	;number of fats
	public ndir
ndir	dw 0	;number of root directory entries
	public totsc
totsc	dw 0	;total number of sectors
	public scpfat
scpfat	dw 0	;number of sectors per fat
	public data
data	dw 0	;first sector of data area
	public nents
nents	dw 0	;number of FAT entries
	public fatpt
fatpt	dw 0	;pointer into FAT
	public fatsid
fatsid	dw 0	;left/right indicator
	public mempt
mempt	dw 0
	public memst
memst	dw 0
	public loavl
loavl	dw 0
	public hiavl
hiavl	dw 0
	public swapsw
swapsw	db 0	;non-zero for floppy swapping
	public bypal
bypal	dw 0	;bytes per allocation unit
	public rsc
rsc	dw 1	;number of sectors to read
	public sect
sect	dw offset fat	;location of sector buffer
	public quiet
quiet	db 0	;non-zero for quiet mode
	public mtab
mtab	dw nine1-11	;fc - 1 side 9 sector
	dw nine2-11	;fd - 2 side 9 sector
	dw eight1-11	;fe - 1 side 8 sector
	dw eight2-11	;ff - 2 side 8 sector
	public nine1,nine2,eight1,eight2
nine1	dw 512		;bytes/sector
	db 1		;sectors/allocation unit
	dw 1		;reserved sectors
	db 2		;number of FATs
	dw 64		;number of directory sectors
	dw 0168h	;sectors/image
	db 0fch		;media descriptor
	dw 2		;sectors/FAT
nine2	dw 512
	db 2
	dw 1
	db 2
	dw 112
	dw 02d0h
	db 0fdh
	dw 2
eight1	dw 512
	db 1
	dw 1
	db 2
	dw 64
	dw 0140h
	db 0feh
	dw 1
eight2	dw 512
	db 2
	dw 1
	db 2
	dw 112
	dw 0280h
	db 0ffh
	dw 1
	public id
id	db 0
	public deflt
deflt	db 0

cont:	mov bx,cs	;set up stack
	cli
	mov ss,bx
	mov sp,offset staknd
	sti
	mov ds,bx

	mov dx,offset splash
	mov ah,9
	int 21h		;write the splash screen

	mov ax,cs
	mov bx,es:[2]	;need 64k
	sub bx,ax
	cmp bx,1000h
	ja pok
	mov dx,offset mesg0	;not enough memory
	jmp error
	public pok
pok:	xor bx,bx
	xor cx,cx
	mov cl,es:0080h[bx]	;check input for /s
	or cx,cx
	jz pdone
	public ploop
ploop:	mov al,es:0081h[bx]	;look for /s
	cmp al,'/'
	jne pnope
	cmp byte ptr es:0082h[bx],'s'
	je pyes
	cmp byte ptr es:0082h[bx],'S'
	je pyes
	cmp byte ptr es:0082h[bx],'q'
	je pyes2
	cmp byte ptr es:0082h[bx],'Q'
	jne pnope
	public pyes2
pyes2:	mov quiet,1	;set quiet switch
	jmp short pnope
	public pyes,pnope
pyes:	mov swapsw,1	;set swap switch
pnope:	inc bx
	loop ploop	;keep going till done

pdone:	mov al,es:[005ch]	;drive number of first parameter
	mov bl,es:[006ch]	;drive number of second parameter
	push cs
	pop es

	or al,al	;must be two drives given
	jz badpr
	or bl,bl
	jz badpr

	cmp al,bl
	jne ok1
	mov dx,offset mesg1	;cannot be the same drive

	public error
error:	mov ah,9
	int 21h
	mov al,1	;error return code
	mov ah,04ch
	int 21h

	public badpr
badpr:	mov dx,offset mesgp
	jmp error

	public bads
bads:	mov dx,offset mesg2	;problem with source
	jmp error

	public ok1
ok1:	mov source,al	;save drive numbers
	mov dest,bl
	mov swapo,bl	;save for swapping info

	call open	;open the output file

	mov ah,19h	;get default disk
	int 21h
	mov deflt,al
	mov dl,source
	dec dl
	mov ah,0eh	;select source disk
	int 21h
	push ds
	mov ah,01bh	;get FAT id
	int 21h
	mov al,ds:[bx]
	pop ds
	mov id,al
	mov dl,deflt	;change back
	mov ah,0eh
	int 21h

	mov dx,0	;get boot record for source
	call reads
	jc bads		;bad source disk

	mov ax,11[bx]	;bytes per sector
	or ax,ax	;zero? (diskette)
	jnz fixed

	mov bl,id	;media descriptor byte
	sub bl,0fch
	xor bh,bh
	shl bx,1
	mov ax,offset mtab
	add bx,ax
	mov bx,[bx]	;address of media table
	mov ax,11[bx]	;bytes per sector

fixed:	mov bypsc,ax
	mov al,13[bx]	;sectors per allocation unit
	xor ah,ah
	mov scpal,ax
	mul bypsc	;compute bytes per allocation unit
	mov bypal,ax
	mov ax,14[bx]	;number of reserved sectors
	mov reserv,ax
	mov ax,16[bx]	;number of fats
	xor ah,ah
	mov nfats,ax
	mov ax,17[bx]	;number of root directory entries
	mov ndir,ax
	mov ax,19[bx]	;total number of sectors
	mov totsc,ax
	mov ax,22[bx]	;number of sectors per fat
	mov scpfat,ax

	mov cx,reserv	;compute first data sector
	mov ax,scpfat
	mul nfats
	add cx,ax
	mov ax,ndir
	mov bx,32
	mul bx		;number of bytes for directory
	mov bx,bypsc
	div bx		;number of sectors for directory
	or dx,dx	;remainder?
	jz ok1a
	inc ax		;yes, increment
	public ok1a
ok1a:	add cx,ax
	mov data,cx	;first data sector

	mov ax,totsc	;compute number of fat entries
	sub ax,cx
	xor dx,dx
	div scpal
	mov nents,ax

	mov ax,scpfat	;compute sector buffer address
	mul bypsc
	add ax,offset fat
	mov sect,ax

	add ax,bypal	;compute data memory buffer address
	mov memst,ax
	mov mempt,ax

	mov cx,reserv	;write boot sector(s)
	mov dx,0
	public ok1b
ok1b:	call reads
	call mout
	inc dx
	loop ok1b

	mov cx,scpfat	;move first fat to disk and memory
	mov di,offset fat
	cld
	public ok1c
ok1c:	call reads
	mov si,bx
	push cx
	mov cx,bypsc	;move info to memory
	rep movsb
	pop cx
	call mout
	inc dx
	loop ok1c

	mov cx,data	;move rest of special sectors
	sub cx,reserv
	sub cx,scpfat
	public ok1d
ok1d:	call reads
	call mout
	inc dx
	loop ok1d

	mov ax,scpal	;sectors per allocation unit
	mov rsc,ax	;up the number of sectors read at a time
	mov ax,bypal	;also the number of bytes written
	mov bypsc,ax

	mov bx,offset fat+3	;first actual FAT entry
	mov fatpt,bx	;initialize pointer
	mov fatsid,0	;initialize left/right indicator

	public biglp
biglp:	mov si,fatpt
	mov ax,[si]	;get a FAT pointer
	inc fatpt
	mov di,fatsid
	inc fatsid
	and di,1	;left or right?
	jz right
	inc fatpt
	shr ax,1	;left, shift it
	shr ax,1
	shr ax,1
	shr ax,1
	public right
right:	and ax,0fffh	;mask it
	or ax,ax	;is it zero?
	jz ignor	;yes, ignore the cluster
	cmp ax,0ff0h	;is it reserved?
	jl fatok	;no
	cmp ax,0ff8h
	jl ignor	;yes, ignore the cluster
	public fatok
fatok:	call reads	;read a sector (number in dx)
	call mout	;write it (through memory buffer)
	public ignor,endlp
ignor:	add dx,scpal	;adjust sector pointer
endlp:	dec nents	;decrement number of FAT entries
	jz done		;quit if done
	jmp biglp

	public done
done:	call empty	;empty the buffer
	call close	;close the output file
	xor al,al
	mov ah,04ch
	int 21h		;return to DOS

snoback	endp

	public reads
reads	proc near
	push ax
	push cx
	push dx
	push si
	push di
	mov al,source	;read a sector from source
	dec al
	mov cx,rsc	;number of sectors to read
	mov bx,sect
	int 25h
	pop di		;pop original flags
	pop di
	pop si
	pop dx
	pop cx
	mov bx,sect
	pop ax
	ret
reads	endp

	public mout
mout	proc near
	push ax
	push bx
	push cx
	push dx
	push si
	push di
	mov di,mempt	;get buffer pointer
	mov ax,bypsc	;number of bytes
	add ax,di	;see if room
	jnc moutok
	mov dx,memst	;start of buffer
	mov mempt,dx
	sub di,dx
	mov cx,di	;number of bytes
	mov di,dx
	call write	;write dx=buffer, cx=# bytes
	public moutok
moutok:	mov si,sect
	cld
	mov cx,bypsc
	rep movsb	;move the bytes in memory
	mov mempt,di	;update pointer
	pop di
	pop si
	pop dx
	pop cx
	pop bx
	pop ax
	ret
mout	endp

	public write
write	proc near
	mov ax,cx
	sub loavl,cx	;see if room on disk
	sbb hiavl,0
	jnc mout4	;yes
	add loavl,cx	;number we can write
	mov cx,loavl
	public mout4
mout4:	push ax
	mov bx,handle	;write the info
	mov ah,40h
	int 21h		;write using DOS
	jc badd
	pop ax
	sub ax,cx	;see if end of disk
	je writok	;no, done
	add dx,cx
	push ax		;save number that are left
	push dx
	push di
	call close	;close the file
	call open	;open a new file
	pop di
	pop dx
	pop cx
	jmp write	;yes, do the rest of the write
	public writok
writok:	ret
write	endp

	public empty
empty	proc near
	mov cx,mempt
	mov dx,memst
	sub cx,dx	;byte count
	je emptrt	;return if nothing in buffer
	call write	;write using DOS (dx=buffer,cx=# bytes)
	public emptrt
emptrt:	ret
empty	endp

	public badd
badd	proc near
	mov dx,offset mesg3
	jmp error
badd	endp

	public open
open	proc near
	mov si,offset fln1	;update diskette number
	mov di,offset prepmn
	mov cx,3
	cld
	rep movsb

	mov al,dest
	add al,"A"-1
	mov prepdk,al		;update disk name

	cmp quiet,0	;is it quiet mode?
	jne open5	;yes

	mov dx,offset prepms
	mov ah,9
	int 21h		;write message

	cmp swapsw,0	;are we swapping?
	je open3	;no
	mov ah,08h	;wait for a character from buffer
	jmp short open4
open3:	mov ax,0c08h	;wait for non-buffer character
open4:	int 21h

open5:	mov dx,offset dest	;fcb to delete files
	mov ah,13h
	int 21h		;delete any backup files already on disk

	mov al,dest	;disk number
	add al,'a'-1	;make into disk letter
	mov flnam,al	;store in name
	mov dx,offset flnam	;create a new file
	xor cx,cx
	mov ah,03ch
	int 21h
	jc badd2
	mov handle,ax

	mov dl,dest	;compute free space
	mov ah,36h
	int 21h
	mul bx		;number of free sectors on drive in ax
	mul cx		;dx, ax = number of free bytes
	mov hiavl,dx
	mov loavl,ax

	mov al,fln3	;update file number
	add al,1
	aaa
	mov fln3,al
	mov al,fln2
	adc al,0
	aaa
	mov fln2,al
	mov al,fln1
	adc al,0
	aaa
	or al,30h
	mov fln1,al
	or fln2,30h
	or fln3,30h

	ret		;done

badd2:	jmp badd

open	endp

	public close
close	proc near
	mov bx,handle	;close the output file
	mov ah,03eh
	int 21h
	jc badd2

	cmp swapsw,0	;see if in swap mode
	je closr	;no
	mov al,swapo
	cmp al,dest	;same?
	jne cdiff
	inc dest	;same, increment the destination
	jmp short closr

cdiff:	mov dest,al	;different, make same

closr:	ret
close	endp

stack	db 64 dup('STACK   ')
staknd	equ this byte


;sector buffer starts at this address plus FAT buffer
;memory buffer starts after sector buffer
	public fat
fat	db 0		;rest of memory for copy of FAT

code	ends
	end snoback
```
{% endraw %}

## SNOBACK.DOC

{% raw %}
```
                SNOBACK COMMAND

Purpose:Backs up all files from a hard disk to a 
	number of floppy disks or backs up a RAM 
	disk (such as VDISK) to a single file on 
	hard disk or floppy disk.

Format:	[d:][path]SNOBACK d: d: [/S][/Q]

Type:	External

Remarks:Specify the parameters:
	
	[d:][path] before SNOBACK to specify the 
	drive and path that contains the SNOBACK 
	command file.
	
	d: to specify the drive that you wish to 
	back up (source).
	
	d: to specify the drive that will receive 
	the information to be backed up 
	(destination).  If the /S switch is used, 
	this parameter specifies the lower of two 
	drives to be used for the destination.
	
	/S to cause the destination drive to be 
	swapped between the drive specified above 
	and the next higher drive.  This allows 
	you to place a disk in the unused drive 
	while the routine is writing information 
	on the other drive.  This switch also 
	allows you to answer the "mount" prompt 
	before it is given (type-ahead).
	
	/Q to cause all prompts which require 
	your response to be bypassed (quiet).  
	This allows the SNOBACK command to be 
	placed in a batch file for automatic 
	backup of RAM disks.




           SNOBACK COMMAND (page 2)

Notes:	SNOBACK backs up all used allocation 
	units on the source disk.  The backup 
	made is a complete backup of all files in 
	all directories of the disk.  No 
	individual files may be named, since 
	SNOBACK obtains its speed by not 
	accessing each directory seperately.

	It is important that CHKDSK be run with 
	the /F switch before runnint SNOBACK.  
	This insures that the table which DOS 
	uses to mark used allocation units is 
	correct before the backup is made.
	
	If the destination is floppy disks, you 
	may wish to set VERIFY to ON so that DOS 
	will verify the information written to 
	the floppy for readability.  This greatly 
	increases the reliability of the 
	information written to the floppy disk 
	but also increases the time needed to 
	take the backup.  (This same 
	recommendation applies to using the DOS 
	BACKUP command).  Don't forget to set 
	VERIFY to OFF when done taking the backup 
	to prevent slower operation of your hard 
	disk.

	Destination disks must be pre-formatted 
	before being used.  SNOBACK will place a 
	file on these disks called SBACKUP.###, 
	where ### is the number (beginning with 
	001) of the disk.  If any file already 
	exists on the destination disk with the 
	name SBACKUP (with any extension), that 
	file will first be erased.
	






           SNOBACK COMMAND (page 3)

	If you are backing up a RAM disk, the 
	destination may of course be a hard disk. 
	In this case, the SBACKUP.### file will 
	be created in the current directory of 
	the hard disk.
	
	The backup copy of the disk includes 
	information used by DOS to indicate the 
	size and formatting parameters of the 
	disk.  This means that when restoring the 
	information, care must be taken to insure 
	that the disk to receive the restored 
	copy MUST be formatted exactly as it was 
	when SNOBACK was used to backup the 
	information.  Also, the partition size of 
	a hard disk (as created by FDISK) must be 
	the same.
	
Example:The following example backs up all files 
	from the fixed disk drive C to diskettes 
	in drive A:
	
	A>snoback c: a:
	
	If your system had two diskette drives, 
	you would use the following command:
	
	A>snoback c: a:/s
	
	The following example backs up all files 
	in a RAM disk configured as drive D to 
	the file SBACKUP.001 on the current 
	directory of the fixed disk in drive C.  
	The /q switch is used to suppress the 
	mount messages:
	
	A>snoback d: c:/q
	

```
{% endraw %}

## SNOREST.ASM

{% raw %}
```
	page ,132
	title snorest

	if2
	%out Pass 2
	endif

code	segment
	assume	cs:code,ds:code

	org 100h	;COM file

	public snorest
snorest	proc far
	jmp cont

	public splash
splash	db 13,10,"Snorest - Fast restore routine Version 1.1 Serial #00000"
	db 13,10,"Copyright (c) 1985 by Snowcrest Computer Specialties"
	db 13,10,"Provided AS IS. No warranty, express or implied."
	db 13,10,"Snowcrest Computer Specialties, 527 McCloud Ave.,"
	db 13,10,"Mt. Shasta, CA  96067.",13,10,"$"
	public warn
warn	db 13,10,7,"Warning - all files on disk "
warndk	db "A will be destroyed by this program!"
	db 13,10,"To prevent this, press ctrl-break at the next prompt."
	db 13,10,"$"
	public flnam,fln1,fln2,fln3
flnam	db "a:sbackup."
fln1	db "0"
fln2	db "0"
fln3	db "1",0
	public mesgp
mesgp	db "Must specify two drives!$"
	public mesg0
mesg0	db "Must have at least 64k!$"
	public mesg1
mesg1	db "Source and destination drives cannot be the same!$"
	public mesg2
mesg2	db "Problem with source disk!$"
	public mesg3
mesg3	db "Problem with destination disk!$"
	public prepms,prepmn,prepdk
prepms	db 13,10,"Mount diskette number "
prepmn	db "XXX in drive "
prepdk	db "A, press any key:$"
	public wrmsg
wrmsg	db 13,10,7,"Wrong disk. Mount correct disk, press any key:$"
	public source
source	db 0
	public dest
dest	db 0
	public swapo
swapo	db 0
	public handle
handle	dw 0
	public bypsc
bypsc	dw 1024	;bytes per sector
	public scpal
scpal	dw 0	;sectors per allocation unit
	public reserv
reserv	dw 0	;number of reserved sectors
	public nfats
nfats	dw 0	;number of fats
	public ndir
ndir	dw 0	;number of root directory entries
	public totsc
totsc	dw 0	;total number of sectors
	public scpfat
scpfat	dw 0	;number of sectors per fat
	public data
data	dw 0	;first sector of data area
	public nents
nents	dw 0	;number of FAT entries
	public fatpt
fatpt	dw 0	;pointer into FAT
	public fatsid
fatsid	dw 0	;left/right indicator
	public loavl
loavl	dw 0
	public hiavl
hiavl	dw 0
	public swapsw
swapsw	db 0	;non-zero for floppy swapping
	public membf
membf	dw 0	;address of memory buffer start
	public mempt
mempt	dw 0	;address of byte we're using
	public memct
memct	dw 0	;number of bytes in buffer
	public bypal
bypal	dw 0	;bytes per allocation unit
	public rsc
rsc	dw 1	;number of sectors to read
	public sect
sect	dw offset fat	;location of sector buffer
	public quiet
quiet	db 0	;non-zero for quiet mode
	public mtab
mtab	dw nine1-11	;fc - 1 side 9 sector
	dw nine2-11	;fd - 2 side 9 sector
	dw eight1-11	;fe - 1 side 8 sector
	dw eight2-11	;ff - 2 side 8 sector
	public nine1,nine2,eight1,eight2
nine1	dw 512		;bytes/sector
	db 1		;sectors/allocation unit
	dw 1		;reserved sectors
	db 2		;number of FATs
	dw 64		;number of directory sectors
	dw 0168h	;sectors/image
	db 0fch		;media descriptor
	dw 2		;sectors/FAT
nine2	dw 512
	db 2
	dw 1
	db 2
	dw 112
	dw 02d0h
	db 0fdh
	dw 2
eight1	dw 512
	db 1
	dw 1
	db 2
	dw 64
	dw 0140h
	db 0feh
	dw 1
eight2	dw 512
	db 2
	dw 1
	db 2
	dw 112
	dw 0280h
	db 0ffh
	dw 1
	public deflt
deflt	db 0


cont:	mov bx,cs	;set up stack
	cli
	mov ss,bx
	mov sp,offset staknd
	sti
	mov ds,bx

	mov dx,offset splash
	mov ah,9
	int 21h		;write the splash screen

	mov ax,cs
	mov bx,es:[2]	;need 64k
	sub bx,ax
	cmp bx,1000h
	ja pok
	mov dx,offset mesg0	;not enough memory
	jmp error
	public pok
pok:	xor bx,bx
	xor cx,cx
	mov cl,es:0080h[bx]	;check input for /s
	or cx,cx
	jz pdone
	public ploop
ploop:	mov al,es:0081h[bx]	;look for /s
	cmp al,'/'
	jne pnope
	cmp byte ptr es:0082h[bx],'s'
	je pyes
	cmp byte ptr es:0082h[bx],'S'
	je pyes
	cmp byte ptr es:0082h[bx],'q'
	je pyes2
	cmp byte ptr es:0082h[bx],'Q'
	jne pnope
	public pyes2
pyes2:	mov quiet,1	;set quiet switch
	jmp short pnope
	public pyes,pnope
pyes:	mov swapsw,1	;set swap switch
pnope:	inc bx
	loop ploop	;keep going till done

pdone:	mov al,es:[005ch]	;drive number of first parameter
	mov bl,es:[006ch]	;drive number of second parameter
	push cs
	pop es

	or al,al	;must be two drives given
	jz badpr
	or bl,bl
	jz badpr

	cmp al,bl
	jne ok1
	mov dx,offset mesg1	;cannot be the same drive

	public error
error:	mov ah,9
	int 21h
	mov al,1	;error return code
	mov ah,04ch
	int 21h

	public badpr
badpr:	mov dx,offset mesgp
	jmp error

	public ok1
ok1:	mov source,al	;save drive numbers
	mov swapo,al
	mov dest,bl

	cmp quiet,0	;quiet mode?
	jne pyes3	;yes
	mov al,dest
	add al,'A'-1
	mov warndk,al
	mov dx,offset warn	;send warning
	mov ah,9
	int 21h

pyes3:	call open	;open the input file

	mov ah,19h	;get default disk
	int 21h
	mov deflt,al
	mov dl,dest
	dec dl
	mov ah,0eh	;select dest disk
	int 21h
	push ds
	mov ah,01bh	;get FAT id (to log in for DOS)
	int 21h
	pop ds
	mov dl,deflt	;change back
	mov ah,0eh
	int 21h

	mov ah,03fh
	mov bx,handle
	mov dx,sect
	mov cx,bypsc
	int 21h		;read boot record and first FAT from source
	xor cx,cx	;seek to beginning of file
	xor dx,dx
	mov bx,handle
	mov al,0
	mov ah,42h
	int 21h

	mov bx,sect
	mov ax,11[bx]	;bytes per sector
	or ax,ax	;zero? (diskette)
	jnz fixed

	mov bl,512[bx]	;media descriptor byte from FAT table
	sub bl,0fch
	xor bh,bh
	shl bx,1
	mov ax,offset mtab
	add bx,ax
	mov bx,[bx]	;address of media table
	mov ax,11[bx]	;bytes per sector

fixed:	mov bypsc,ax
	mov al,13[bx]	;sectors per allocation unit
	xor ah,ah
	mov scpal,ax
	mul bypsc	;compute bytes per allocation unit
	mov bypal,ax
	mov ax,14[bx]	;number of reserved sectors
	mov reserv,ax
	mov ax,16[bx]	;number of fats
	xor ah,ah
	mov nfats,ax
	mov ax,17[bx]	;number of root directory entries
	mov ndir,ax
	mov ax,19[bx]	;total number of sectors
	mov totsc,ax
	mov ax,22[bx]	;number of sectors per fat
	mov scpfat,ax

	mov cx,reserv	;compute first data sector
	mov ax,scpfat
	mul nfats
	add cx,ax
	mov ax,ndir
	mov bx,32
	mul bx		;number of bytes for directory
	mov bx,bypsc
	div bx		;number of sectors for directory
	or dx,dx	;remainder?
	jz ok1a
	inc ax		;yes, increment
	public ok1a
ok1a:	add cx,ax
	mov data,cx	;first data sector

	mov ax,totsc	;compute number of fat entries
	sub ax,cx
	xor dx,dx
	div scpal
	mov nents,ax

	mov ax,scpfat	;compute sector buffer address
	mul bypsc
	add ax,offset fat
	mov sect,ax

	add ax,bypal	;compute data memory buffer address
	mov membf,ax
	mov mempt,ax
	mov memct,0

	mov cx,reserv	;write boot sector(s)
	mov dx,0
	public ok1b
ok1b:	call reads
	call out
	inc dx
	loop ok1b

	mov cx,scpfat	;move first fat to disk and memory
	mov di,offset fat
	cld
	public ok1c
ok1c:	call reads
	mov si,bx
	push cx
	mov cx,bypsc	;move info to memory
	rep movsb
	pop cx
	call out
	inc dx
	loop ok1c

	mov cx,data	;move rest of special sectors
	sub cx,reserv
	sub cx,scpfat
	public ok1d
ok1d:	call reads
	call out
	inc dx
	loop ok1d

	mov ax,scpal	;sectors per allocation unit
	mov rsc,ax	;up the number of sectors written at a time
	mov ax,bypal	;also the number of bytes read
	mov bypsc,ax

	mov bx,offset fat+3	;first actual FAT entry
	mov fatpt,bx	;initialize pointer
	mov fatsid,0	;initialize left/right indicator

	public biglp
biglp:	mov si,fatpt
	mov ax,[si]	;get a FAT pointer
	inc fatpt
	mov di,fatsid
	inc fatsid
	and di,1	;left or right?
	jz right
	inc fatpt
	shr ax,1	;left, shift it
	shr ax,1
	shr ax,1
	shr ax,1
	public right
right:	and ax,0fffh	;mask it
	or ax,ax	;is it zero?
	jz ignor	;yes, ignore the cluster
	cmp ax,0ff0h	;is it reserved?
	jl fatok	;no
	cmp ax,0ff8h
	jl ignor	;yes, ignore the cluster
	public fatok
fatok:	call reads	;read a sector (number in dx)
	call out	;write it
	public ignor,endlp
ignor:	add dx,scpal	;adjust sector pointer
endlp:	dec nents	;decrement number of FAT entries
	jz done		;quit if done
	jmp biglp

	public done
done:	call close	;close the input file
	xor al,al
	mov ah,04ch
	int 21h		;return to DOS

snorest	endp

	public out
out	proc near
	push ax
	push bx
	push cx
	push dx
	push si
	push di
	mov al,dest	;write a sector to dest
	dec al
	mov cx,rsc
	mov bx,sect
	int 26h
	pop di		;pop original flags
	pop di
	pop si
	pop dx
	pop cx
	pop bx
	pop ax
	ret
out	endp

	public reads
reads	proc near
	push ax
	push cx
	push dx
	push si
	push di
	mov cx,bypsc	;number of bytes
	mov dx,sect	;place to put them
	public read7
read7:	mov ax,memct	;see if enough in buffer
	or ax,ax	;anything there?
	jne read8	;yes
	push cx
	push dx
	public read9
read9:	mov ax,membf
	neg ax		;number of bytes available in mem buffer
	mov cx,ax	;number of bytes to read
	cmp hiavl,0
	jne read3	;jump if that number in file
	cmp cx,loavl
	jb read3
	mov cx,loavl	;just read the number left
	or cx,cx	;any left in file?
	jnz read3
	call close	;open new file
	call open
	jmp read9
	public read3
read3:	mov dx,membf
	mov mempt,dx	;fix pointer
	mov bx,handle	;read the info
	mov ah,3fh
	int 21h		;read using DOS
	jc bads
	mov memct,cx	;store number of bytes in buffer
	sub loavl,cx	;adjust number of bytes left in file
	sbb hiavl,0
	pop dx
	pop cx
	jmp read7	;go read now
	public read8
read8:	mov si,mempt	;from here
	mov di,dx	;to here
	push cx
	cmp cx,ax
	jbe read6
	mov cx,ax	;this number of bytes
	public read6
read6:	mov ax,cx
	cld
	rep movsb	;move them
	mov mempt,si
	mov dx,di
	sub memct,ax
	pop cx		;number requested
	sub cx,ax	;number remaining
	jnz read7	;do remaining if necessary

	pop di
	pop si
	pop dx
	pop cx
	mov bx,sect
	pop ax
	ret
reads	endp

	public wrong
wrong:	mov dx,offset wrmsg	;tell user the wrong disk
	mov ah,9
	int 21h
	mov ax,0c08h		;wait for new disk
	int 21h
	jmp short open8		;ok, try again

	public bads
bads:	mov dx,offset mesg2	;problem with source
	jmp error

	public open
open	proc near
	mov si,offset fln1	;update diskette number
	mov di,offset prepmn
	mov cx,3
	cld
	rep movsb

	mov al,source
	add al,'A'-1
	mov prepdk,al		;update disk name

	cmp quiet,0	;quiet mode?
	jne open8	;yes

	mov dx,offset prepms
	mov ah,9
	int 21h		;write message

	cmp swapsw,0	;are we swapping?
	je open3	;no
	mov ah,08h	;yes, wait for a character from buffer
	jmp short open4
open3:	mov ax,0c08h	;wait for non-buffer character
open4:	int 21h

open8:	mov al,source	;make disk letter
	add al,'a'-1
	mov flnam,al
	mov dx,offset flnam	;open a file
	xor al,al
	mov ah,03dh
	int 21h
	jc wrong
	mov handle,ax

	mov bx,ax
	mov ah,42h	;do a seek to find size of file
	xor cx,cx
	xor dx,dx
	mov al,2	;end of file
	int 21h
	jc bads
	mov loavl,ax
	mov hiavl,dx
	xor dx,dx
	mov ah,42h
	mov al,0	;beginning of file
	int 21h
	jc bads

	mov al,fln3	;update file number
	add al,1
	aaa
	mov fln3,al
	mov al,fln2
	adc al,0
	aaa
	mov fln2,al
	mov al,fln1
	adc al,0
	aaa
	or al,30h
	mov fln1,al
	or fln2,30h
	or fln3,30h

	ret		;done
open	endp

	public close
close	proc near
	mov bx,handle	;close the input file
	mov ah,03eh
	int 21h
	jnc okcls
	jmp bads

okcls:	cmp swapsw,0	;see if in swap mode
	je closr	;no
	mov al,swapo
	cmp al,source	;same?
	jne cdiff
	inc source	;same, increment the source
	jmp short closr

cdiff:	mov source,al	;different, make same

closr:	ret
close	endp

stack	db 64 dup('STACK   ')
staknd	equ this byte

	public fat
fat	db 0		;rest of memory for copy of FAT

code	ends
	end snorest
```
{% endraw %}

## SNOREST.DOC

{% raw %}
```
                SNOREST COMMAND

Purpose:Restores all files from a number of 
	floppy disks to a hard disk or restores a 
	RAM disk (such as VDISK) from a file on 
	hard disk or floppy disk.

Format:	[d:][path]SNOREST d: d: [/S][/Q]

Type:	External

Remarks:Specify the parameters:
	
	[d:][path] before SNOREST to specify the 
	drive and path that contains the SNOREST 
	command file.
	
	d: to specify the drive which contains 
	the information stored by SNOBACK which 
	you wish to restore (source). If the /S 
	switch is used, this parameter specifies 
	the lower of two drives to be used for 
	the source.
	
	d: to specify the drive that will receive 
	the information to be restored 
	(destination).  ALL INFORMATION WHICH IS 
	PRESENTLY STORED ON THIS DRIVE WILL BE 
	ERASED!
	
	/S to cause the source drive to be 
	swapped between the drive specified above 
	and the next higher drive.  This allows 
	you to place a disk in the unused drive 
	while the routine is reading information 
	from the other drive.  This switch also 
	allows you to answer the "mount" prompt 
	before it is given (type-ahead).
	





           SNOREST COMMAND (page 2)

	/Q to cause all prompts which require 
	your response to be bypassed (quiet).  
	This allows the SNOREST command to be 
	placed in a batch file for automatic 
	restoration of RAM disks.

Notes:	SNOREST restores up all used allocation 
	units from the source disk.  All files in 
	all directories of the disk will be 
	restored.  No individual files may be 
	named, since SNOREST obtains its speed by 
	not accessing each directory seperately.
	
	SNOREST will read the file on the source 
	disk called SBACKUP.###, where ### is the 
	number (beginning with 001) of the disk.  
	If a disk with the wrong numbered file is 
	mounted, an error message will be given.
	
	If you are restoring a RAM disk, the 
	source may of course be a hard disk. In 
	this case, the SBACKUP.### file in the 
	current directory of the hard disk will 
	be used.
	
	The backup copy of the disk includes 
	information used by DOS to indicate the 
	size and formatting parameters of the 
	disk.  This means that when restoring the 
	information, care must be taken to insure 
	that the disk to receive the restored 
	copy MUST be formatted exactly as it was 
	when SNOBACK was used to backup the 
	information.  Also, the partition size of 
	a hard disk (as created by FDISK) must be 
	the same.
	






           SNOREST COMMAND (page 3)

Example:The following example restores all files 
	from the floppy disks in drive A to the 
	fixed disk in drive C:
	
	A>snorest a: c:
	
	If your system had two diskette drives, 
	you would use the following command:
	
	A>snorest a: c:/s
	
	The following example restores all files 
	to a RAM disk configured as drive D from 
	the file SBACKUP.001 on the current 
	directory of the fixed disk in drive C.  
	The /q switch is used to suppress the 
	mount messages:
	
	A>snorest c: d:/q
	

```
{% endraw %}

## SNOTERM.DOC

{% raw %}
```
                     Snowcrest Terminal Emulator

The Snowcrest Terminal Emulator program allows the IBM Personal Computer 
series to act as an asynchronous terminal at speeds up to 19,200 baud.  The 
emulator program will operate through either the COM1 or COM2 asynchronous 
ports of the computer.  Communication can use any parity scheme (8 bit, even 
parity, odd parity, forced mark or forced space).  Information received from 
the remote computer can be saved on the printer or on the disk (or both).  
The user may even pass control to DOS, run other programs and return to the 
terminal program without losing information arriving from the remote computer.

Operation -
The terminal emulator program is first copied from the distribution disk to 
the user's DOS disk using the DOS copy command.  The name of the program is 
SNOTERM.EXE.

The program is then executed by typing SNOTERM.

The copyright screen will appear and wait for you to type any key.  The 
terminal screen will then appear.  This screen is 24 lines high by 80 columns 
wide.  The 25th line (status line) details the use of the function keys.

f1- This key ends the terminal emulator and returns to DOS.
f2- This key sends a BREAK signal to the remote computer.  The signal will 
    continue to be sent until this key is pressed again.
f3- This key cycles the baud rates.  Each time the key is pressed a new baud 
    rate will be selected.
f4- This key cycles the parity options. "8 bit" will send and receive all 
    eight bits of the keys selected (to send the high bits, it would be 
    necessary to use the ALT-numeric pad sequence.  That is, to send an "a" 
    with the high bit on, hold down ALT and type 225 on the numeric keypad.)  
    "Even" or "odd" will send and receive even- or odd-parity data.  "Mark" 
    will send and receive data with the parity bit always on.  "Space" will 
    send and receive data with the parity bit always off.
f5- This key turns the Data Terminal Ready line (dtr) on or off on the COM 
    port which is selected.  Data Terminal Ready is pin 20 of the connector 
    and if used with a modem will cause the modem to hang up the telephone 
    when turned off.
f6- This key turns the Request to Send line (rts) on or off on the COM port 
    which is selected.  Request to Send must be on for most modems to allow 
    the computer to transmit data.
f7- This key will return to DOS while not ending the terminal emulator.  
    Other programs may be run as long as they do not use the selected COM 
    port. The terminal screen will continue to be updated. Data being sent to 
    the disk or the printer will continue to be collected (up to the size of 
    the internal buffers - about 25000 bytes), but that data will not be 
    written to the printer or disk until the user returns to the terminal 
    emulator program by typing "exit" to any DOS prompt.
f8- This key selects COM1 or COM2 for communications.
f9- This key turns the printer on or off.  The printer will print information 
    as it is received.
f10-This key turns disk collection on or off.  All information being received 
    will be APPENDED to a disk file named CAPTURE.TXT.

This program is provided as a "Freeware" concept program.  Although it is
copyrighted, Snowcrest extends permission to make copies FOR PERSONAL USE.
This program may not be used for commercial gain without written permission
from Snowcrest.  Sources in 8086 Macro Assembly Language are available by
sending $39.95 to Snowcrest Computer Specialties, 527 McCloud Ave., Mt.
Shasta, CA  96067.  Also included are sources to SNOBACK and SNOREST and
the documentation binder for SNOBASIC.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0409

     Volume in drive A has no label
     Directory of A:\

    CONFIG   DOC      7808   1-07-87   6:38p
    DIREC    DOC      1024   7-16-85   8:01p
    FILES409 TXT      1386   1-27-87   5:43p
    GO       BAT       324   1-04-80   2:37a
    INSTALL  DOC      5504   1-07-87   6:37p
    README   DOC      6528   1-07-87   6:36p
    SNOBACK  ASM     11136   7-16-85   5:32p
    SNOBACK  COM      2090   7-15-85   8:28p
    SNOBACK  DOC      3840   2-21-85   9:20p
    SNOBAS87 EXE     51269   7-15-85   6:41p
    SNOBASIC EXE     51749   7-15-85   6:41p
    SNOREST  ASM     11648   7-16-85   5:32p
    SNOREST  COM      2298   7-15-85   8:28p
    SNOREST  DOC      3072   2-21-85   9:20p
    SNOTERM  DOC      3840   7-15-85   8:13p
    SNOTERM  EXE     55104   7-15-85   8:04p
    STARTUP  BAT       128   9-18-84   1:09p
    STARTUP2 BAT       256   9-18-84   1:09p
    STARTUP3 BAT       256   9-18-84   1:09p
    B0SYS              796   9-18-84   1:36p
    B9999ACC OUN      5010  12-02-84   9:36p
    B9999LOG          5606  12-02-84   9:38p
    FBASICAC CTS     16384   1-07-87   6:30p
    FBASICER ROR      9600   9-14-84   9:49p
    FBASICLO GS       1024   1-07-87   6:30p
    FBASICME SGS       128   7-22-84   5:44p
           26 file(s)     257808 bytes
                           52224 bytes free
