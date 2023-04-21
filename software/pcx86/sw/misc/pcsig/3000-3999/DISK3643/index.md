---
layout: page
title: "PC-SIG Diskette Library (Disk #3643)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3643/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3643"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## DCF42.DOC

{% raw %}
```


















				DISK  COPY  FAST



				   Version 4.2



				  Documentation


























   DISK COPY FAST  Copyright 1992, 1993  Chang Ping Lee ALL RIGHTS RESERVED



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 1



				  Table Of Contents


	  Disclaimer of warranty. . . . . . . . . . . . . . . . . . . .  3

	  License . . . . . . . . . . . . . . . . . . . . . . . . . . .  4

	  Terms of distribution . . . . . . . . . . . . . . . . . . . .  5

	  Acknowledgements. . . . . . . . . . . . . . . . . . . . . . .  6

	  1.   Introduction . . . . . . . . . . . . . . . . . . . . . .  7

	  2.   Main Features. . . . . . . . . . . . . . . . . . . . . .  8

	  3.   System requirement and compatibility . . . . . . . . . .  9

	  4.   How to install and run DISK COPY FAST. . . . . . . . . . 10

	  5.   Command line arguments and examples. . . . . . . . . . . 11

	  6.   How to use pull-down menus in DISK COPY FAST . . . . . . 14
	       6.1  Select a command  . . . . . . . . . . . . . . . . . 14
	       6.2  Execute a command . . . . . . . . . . . . . . . . . 14
	       6.3  ESC key . . . . . . . . . . . . . . . . . . . . . . 14
	       6.4  Mouse . . . . . . . . . . . . . . . . . . . . . . . 14

	  7.   Windows
	       7.1  Resource window . . . . . . . . . . . . . . . . . . 15
	       7.2  Option window . . . . . . . . . . . . . . . . . . . 15
	       7.2  Information window  . . . . . . . . . . . . . . . . 15

	  8.   Commands reference . . . . . . . . . . . . . . . . . . . 16
	       8.1  Read  . . . . . . . . . . . . . . . . . . . . . . . 16
	       8.2  Write . . . . . . . . . . . . . . . . . . . . . . . 16
	       8.3  Compare . . . . . . . . . . . . . . . . . . . . . . 16
	       8.4  Option  . . . . . . . . . . . . . . . . . . . . . . 16

	  9.   Hot keys . . . . . . . . . . . . . . . . . . . . . . . . 17

	 10.   Benchmark and comparison . . . . . . . . . . . . . . . . 18
	       10.1 Benchmark, HOW FAST CAN IT GO . . . . . . . . . . . 18
	       10.2 Comparison, HOW MUCH CAN YOU SAVE . . . . . . . . . 19

	 11.   What is an image file. . . . . . . . . . . . . . . . . . 20

	 12.   About extended memory. . . . . . . . . . . . . . . . . . 21

	 13.   About boot sector virus protection . . . . . . . . . . . 22



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 2






	 14.   Examples . . . . . . . . . . . . . . . . . . . . . . . . 23

	 15.   Questions and answers. . . . . . . . . . . . . . . . . . 25

	 16.   Support and suggestions. . . . . . . . . . . . . . . . . 26

	 17.   Introducing other fine products. . . . . . . . . . . . . 27
	       17.1 DISK COPY PLUS. . . . . . . . . . . . . . . . . . . 27
	       17.2 DISK UTIL PACK. . . . . . . . . . . . . . . . . . . 30

	 18.   Registration benefit . . . . . . . . . . . . . . . . . . 33
	       18.1 DISK COPY FAST. . . . . . . . . . . . . . . . . . . 33
	       18.2 DISK COPY PLUS. . . . . . . . . . . . . . . . . . . 34

	 19.   How to register. . . . . . . . . . . . . . . . . . . . . 35

	 ORDER FORM



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 3



			DISCLAIMER  OF WARRANTY


	THIS SOFTWARE AND MANUAL ARE SUPPLIED "AS IS". THE AUTHOR HEREBY
	DISCLAIMS ALL WARRANTIES RELATING TO THIS SOFTWARE AND ITS
	DOCUMENTATION FILE, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
	TO DAMAGE TO HARDWARE, SOFTWARE AND/OR DATA FROM USE OF THIS
	PRODUCT. IN NO EVENT WILL THE AUTHOR OF THIS SOFTWARE BE LIABLE
	TO YOU OR ANY OTHER PARTY FOR ANY DAMAGES. YOUR USE OF THIS
	SOFTWARE INDICATES THAT YOU HAVE READ AND AGREE TO THESE AND
	OTHER TERMS INCLUDED IN THIS DOCUMENTATION FILE.


	DUE TO THE NATURE OF EVOLVING PROGRAMMING AND THE VARIOUS
	HARDWARE AND SOFTWARE ENVIRONMENTS IN WHICH THIS SOFTWARE MAY
	BE USED, IT IS UNDERSTOOD THAT OCCASIONAL "BUGS" OR UNFITNESS
	MAY ARISE. THE USER SHOULD ALWAYS TEST THIS SOFTWARE THOROUGHLY
	WITH NON-CRITICAL DATA BEFORE RELYING ON IT.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 4



				LICENSE


	DISK COPY FAST v4.2 is neither free software nor is it in the
	public domain. The software and its documentation, this file, are
	property of the author and may not be sold without written
	permission from the author.


	DISK COPY FAST v4.2 is distributed as shareware. This means that
	you are granted a limited license to use it for a period of 30
	days. If you find it useful and decide to continue using it after
	the trial period, registration is required.


	Registered users will be granted a just-like-a-book license which
	means a registered version of the software can be used by more
	than one person and can be moved from one computer to another so
	long as there is NO POSSIBILITY of it being used by two different
	persons on two different computers at the same time, just like a
	book can not be read by two different persons in two different
	places at the same time.


	By registering for a non-commercial license you agree that the
	software will not be used in a business, organization, institution
	or government agency. You agree that the software will not be used
	for profit purpose and do not duplicate more than 10 diskettes from
	any particular source diskette or image file.


	A commercial license allows you to use the software in a business,
	organization, institution or government agency, for profit or
	non-profit purposes. With a commercial license you can duplicate
	as many diskettes as you like.


	Site licenses for use of DISK COPY FAST on multiple computers are
	also available upon request at a reduced fee.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 5



			TERMS OF DISTRIBUTION :


	Redistribution of DISK COPY FAST must include the software, its
	documentation file, order form and all supplemental files (see
	FILES.TXT) as a single unit without any modification AND subject
	to the following conditions :


	1. Any individual is welcome to make copies for his/her friends
	   and/or colleagues if NO FEE is charged.


	2. Electronic bulletin boards, whether they charge or do not
	   charge their users subscription fee, are welcome to post the
	   program for down loading as long as they do not charge any fee
	   in particular for the distribution of DISK COPY FAST.


	3. Computer information services such as CompuServe (CIS), Genie,
	   etc., may post this software for their subscribers.


	4. Non-commercial user groups and computer clubs may distribute
	   the program to their members if the fee charged for the
	   diskette containing DISK COPY FAST does not exceed $10.


	5. Disk vendors approved by the Association of Shareware
	   Professionals or disk vendors who explain the concept of
	   shareware in their ads that quote a price may distribute the
	   shareware version of DISK COPY FAST.


	6. Other commercial enterprises wishing to distribute DISK COPY
	   FAST either alone or in combination with other hardware,
	   software, books or materials must obtain permission in writing
	   from the author.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 6



			   ACKNOWLEDGEMENTS


	The author of DISK COPY FAST sincerely wish to thank the following
	people.


	Mr. Jeff. Chen from TAIWAN provided valuable information about
	diskette controller. Without his help DISK COPY FAST can not be
	really fast. Joe Warjas, co-sysop of the PIE BBS, provided many
	valuable suggestions. He also helped proof read the DOC and TXT
	files and distributed the program to many BBSes.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 7



	1. INTRODUCTION:


	   DISK COPY FAST is a one pass diskette duplication utility which
	   makes copies of 1.44 MB, 720 KB, 1.2 MB and 360 KB diskettes.

	   DISK COPY FAST is incredibly fast. For example, using DOS
	   command DISKCOPY to duplicate a 360 KB, 1.2 MB, 720 KB or 1.44
	   Mb diskette, assuming diskette shuffling doesn't take any time,
	   will take 43%, 50%, 42% or 57% longer than using DISK COPY FAST.
	   Add up the shuffling time the saving becomes unbelievable. See
	   section 10 for details.

	   More importantly, DISK COPY FAST achieves its high performance
	   by precise timing, not by sacrificing compatibility. Every
	   single read, write or format is done following the industry
	   standard, strictly, no compromise!

	   Can you ask for anything more?

	   See the next section for other outstanding features.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 8



	2. MAIN FEATURES


	   ***  Performs the DOS commands FORMAT, DISKCOPY and DISKCOMP
		all in one single pass.

	   ***  Copy VERY fast from 8088 to 486, from monochrome to SVGA.

	   ***  Friendly, informative and visually appealing user interface
		with on-line help and mouse support. No need to go through
		a lengthy DOC file and you still couldn't remember all the
		options and switches.

	   ***  Command line arguments for working with batch files.

	   ***  Hot keys designed to make your backup or mass production
		much easier.

	   ***  Utilizes extended memory (XMS) for faster speed and to
		save your hard disk from unnecessary wear and tear.

	   ***  Creates an exact image file of a diskette.

	   ***  Fast mode that reads and writes only the diskette portion
		which contains data and does not waste any time reading
		and writing the empty portion.

	   ***  Supports four diskette drive systems.

	   ***  Provides Some degree of protection against boot sector
		virus. (See section 13. Although not complete, this
		sometimes can be a life-saver.)

	   ***  Audio signal at end of reading and writing a diskette or 20
		seconds of inactivity.

	   ***  High efficiency. When copying a 1.2 MB diskette in a
		system with 590 KB free memory, DISK COPY FAST easily
		stored 32 tracks while another diskette copy program could
		only store 17 tracks of data in conventional memory.

	   ***  More features waiting for you to discover. The more
		experienced you are the better the DISK COPY FAST stands
		out.

	   If you duplicate large quantities of diskettes on a regular basis
	   there is more for you. Check the features of DISK COPY PLUS, a
	   professional version of DISK COPY FAST, on section 18.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 9



	3. SYSTEM REQUIREMENT AND COMPATIBILITY


	   To run DISK COPY FAST you need at least 200K Bytes of free
	   conventional memory. In addition, the total of free conventional
	   and extended memory plus free current disk (hard disk or RAM
	   disk) space should be at least 128K Bytes more than the diskette
	   you want to duplicate.


	   If you intend to use extended memory, some type of extended
	   memory driver, such as HIMEM.SYS which comes with DOS 5.0 or
	   QEMM which you need to purchase separately, is required.
	   Extended memory can be accessed without any driver but it is
	   dangerous to do so.


	   The program has been tested on machines with different hardware
	   and software configurations. The testing results show that it
	   runs almost as fast on an 8088 as on a 486 machine. If your
	   system does not have enough memory and needs to use the hard
	   disk instead, your hard disk should have at least a 200 KB/sec
	   transfer rate and should not be overly fragmented.

	   PS/2 with micro channel is not supported.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee      page 10



	4. HOW TO INSTALL AND RUN DISK COPY FAST


	   It's easy! Just copy all the files to a directory created for
	   DISK COPY FAST. In order to run the program anywhere you like
	   you need to include the directory in the PATH defined in your
	   AUTOEXEC.BAT file or create a one-line batch file containing
	   the path of DCF.EXE.


	   To run the program type "DCF" followed by the "enter" key. If
	   you only have one or two floppy drives you can skip the rest of
	   this section and continue at section 5 for command line
	   arguments.


	   In systems with four floppy drives, if a device driver which
	   came with the controller is installed DISK COPY FAST usually can
	   detect the drive letters automatically and the drive letters
	   should be used to specify the third and fourth drives. If no
	   device driver (TSR) is installed you need to use 3 and 4 as the
	   drive letters for the third and fourth drives. In this case you
	   need to edit a text file that provides the information on floppy
	   drive capacity.


	   The following is an example of the text file in which a 1.2MB,
	   a 1.44MB and a 360KB drives are specified as the first, the
	   second and the third drives with drive letters A: B: and G:,
	   respectively. The 0 on the last line indicates that the fourth
	   drive is not installed. If all drives are defined, such as in
	   the example, DISK COPY FAST will not check with DOS for drive
	   capacity. This can speed up the initialization process.


	   $DRIVE
	    1 1200 A:
	    2 1440 B:
	    3  360 G:
	    4    0


	   The name of the text file is CONFIG.DCF. DCF automatically looks
	   for this as its configuration file. If you use a different name
	   you will need to specify the file name on the command line. For
	   example, "DCF @ABC" if the file name is ABC.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 11



	5. COMMAND LINE ARGUMENTS AND EXAMPLES


	   There are thirteen options you can specify using command line
	   arguments. You can also toggle the first six with the pull down
	   menu. Other options can only be specified on the command line
	   and/or in the CONFIG.DCF file. The command line options override
	   the CONFIG.DCF options.


	   In addition, you can also specify an alternative configuration
	   file, source, and/or target drive/image file on the command line.
	   See examples at the end of this section.


	   Note that the '+' sign after any option can be omitted.


	   /c  followed by +/-. Set Compare ON/OFF. When ON the program
	       performs read-back and byte-by-byte comparison for every
	       track written to a target diskette.  Default is ON.

	   /m  followed by +/-. Set Format ON/OFF. When ON the program
	       formats before writing to target diskettes. If OFF the
	       program will format only when necessary.  Default is OFF.

	   /f  followed by +/-. Set Fast ON/OFF. When ON the program will
	       only read/write the portion with active data and skip empty
	       portion of diskettes.  Default is ON.

	   /s  followed by +/-. Set Sound ON/OFF. When ON the program will
	       give an audio signal after reading and writing a diskette or
	       20 seconds of inactivity. Default is ON.

	   /k  followed by +/-. Set Keystrokes +/-. When + you need to
	       press the highlighted letter followed by the "enter" key to
	       execute a command. When - NO "enter" key is required.
	       Default is +.

	   /n  followed by +/-. Set Menu +/-. Available only when a mouse
	       driver is present. When + you can see and click at every
	       command to execute. When - you need to pull the second level
	       commands down from a level one command. Default is -.

	   /d  followed by +/-. Set Delay ON/Off. If your machine is not so
	       slow as an 8088/4.77MHz and would like to see whether the
	       program can copy at highest speed on your system try /d-.
	       Default is ON.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 12






	   /t  followed by +/-. Set density priority. If + the program tries
	       reading a new disk as a high density disk in a 1.2 or 1.44MB
	       drive. If - low density has higher priority. Default is +.

	   /o  followed by +/-. Set "mono in color" mode. In a color
	       system, you can use /o+ to force DISK COPY FAST run in black
	       and white. Default is -.

	   /x  followed by +/-. Set multiple target ON/OFF. If ON the
	       program will read source once and write targets repeatedly.
	       The program quits automatically when you press the ESC key.
	       To turn this option ON you also need to specify the source
	       and target on the command line. Default is OFF.

	   /b  followed by +/-. Set backup ON/OFF. If ON the program will
	       repeatedly read source and write target. The program quits
	       automatically when you press the ESC key. To turn this
	       option ON you also need to specify the source and target on
	       command line. Default is OFF.

	   /a  followed by +/-. Set analyze ON/OFF. If ON the program will
	       check density before copying to a target diskette. If you
	       copy a low density to a high density disk or vice versa
	       (usually a mistake) the program will give a warning and you
	       can decide to skip, go ahead, or format before writing.
	       Default is ON.

	   /w  followed by +/-. Set "write protect" ON/OFF. If ON the
	       program will not read a diskette which is not write-
	       protected. This is useful when you are backing up a sequence
	       of diskettes and the source are all write-protected. You use
	       this option to prevent the mistake of reading a diskette
	       which should be a target instead of source. Default is OFF.

	   @file_name  specify alternative name for the configuration file.

	   file_name  define file_name as source or target image file.

	   drive:  define a floppy drive as source or target drive.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 13






	   EXAMPLES:


	   DCF /m-k+n-    Set defaults of Format, Keystrokes and Menu to
			  OFF, + and -.

	   DCF /m-kn-     Same as the last example. The '+' can be and is
			  omitted.

	   DCF /mcd-      Set defaults of Format, Compare and Delay to
			  ON, ON and OFF.

	   DCF A:         Read from drive A: and write to drive A:.

	   DCF A: B:      Read from drive A: and write to drive B:.

	   DCF 3: 4:      Read from third drive and write to fourth drive
			  when device driver is not installed.

	   DCF G: H:      Read from third drive and write to fourth drive
			  when device driver is installed and the drive
			  letters are G and H, respectively.

	   DCF A: ABC     Read from drive A: and write to image file ABC.

	   DCF /x+ ABC A: Read from image file ABC and produce as many
			  target as you like using drive A:.

	   DCF /b+ B:     Back up a sequence of diskettes using drive B:



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 14



	6. HOW TO USE PULL-DOWN MENUS IN DISK COPY FAST


	   After you type DCF followed by the "enter" key, the Shareware
	   screen appears. Press the enter key again, after three seconds,
	   and the Main Menu appears.


	   6.1 SELECT : To select a command, use the arrow keys or simply
	       press the highlighted letter. If Option|Key is - the
	       command will be executed immediately.


	   6.2 EXECUTE : To execute a command, press the enter key after
	       you have selected the command. If Option|Key is - you don't
	       need to press the enter key.


	   6.3 ESC key : You can press the ESC key to interrupt a Read or
	       Write action. If the program is not busy doing something
	       this will return you to the Main Menu. If you are already at
	       the Main Menu, the program will exit to the operating system.


	   6.4 Mouse : With this version mouse support is added. You can
	       use the mouse on any screen except Help|register. When
	       prompted you can click the left button on an answer. You can
	       also click the right button to signal an interrupt. Clicking
	       the right button is the same as pressing the ESC key.
	       Options can be toggled by clicking on the option window.
	       When a mouse driver is present you can choose between Full
	       and Regular menu by Option|Menu. Full menu is highly
	       recommended.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 15



	7. WINDOWS


	   There are three windows in DISK COPY FAST.


	   7.1 RESOURCE window : This window shows you the resources in
	       your system which can be utilized for duplicating a
	       diskette. Inside this window, "Con mem" shows you the size
	       of free conventional memory, "Ext mem" shows you the size
	       of free extended memory and "Cur dsk" shows you the size of
	       free space on the current disk (hard or RAM disk.) It also
	       shows you the capacities of available diskette drives.


	   7.2 OPTION window : It shows you current read/write options.
	       See command "Option" in the next section for details and how
	       to change them.


	   7.3 INFORMATION window : It shows you the status of the loaded
	       source diskette. For example if it says 61 out of 80 tracks
	       it means the source diskette has 80 tracks but only the
	       first 61 tracks contains useful data and the last 19 tracks
	       are empty. Then it will show you how these 61 tracks are
	       loaded in your system. For example, it may says 34 tracks in
	       conventional memory, 20 in extended memory and 7 on current
	       disk. It also shows you other information such as the time
	       it took to perform the last read, write (in seconds) and how
	       many copies you have made so far.

	       Note that the information window won't be visible until you
	       have a source diskette loaded in your system. Also note
	       that the track numbers shown when reading or writing a
	       diskette are 0 based which means if the diskette has 80
	       tracks the track numbers will be 0 to 79 instead of 1 to
	       80.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 16



	8. COMMAND REFERENCE


	   8.1 Read: Loads the source diskette data from a diskette drive
	       or from an image file created previously by DISK COPY FAST
	       to conventional memory and extended memory and then hard
	       disk.


	   8.2 Write: Writes a loaded source diskette's data to a diskette
	       drive or an image file.


	   8.3 Compare: Compares the loaded source diskette with another
	       diskette in a diskette drive or an image file.


	   8.4 Option: Includes six subcommands for you to set read/write
	       options, sound, keystroke and menu style.

	       "Format ON" means format target diskette before writing.

	       "Format OFF" means format only when necessary.

	       "Compare ON" means perform a read-back and BYTE-BY-BYTE
			    comparison immediately after writing a track to
			    target diskette.

	       "Fast ON" means don't read/write empty portion of source and
			 target diskette.

	       "Sound ON" turns audio signal ON.

	       "Key -" saves you some keystrokes.

	       "Menu +" gives you a Full and faster menu.

	       If a mouse driver is present, options can be toggled
	       directly by clicking on the option window.

	       The current status of these options is shown in the OPTION
	       window. Note that subcommands "Format" and "Compare" affect
	       write only while "Fast" affects both read and write.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 17



	9. HOT KEYS


	   When you purchase software, you know how important it is to make
	   a backup. So you FORMAT, DISKCOPY... shuffle, shuffle. After all
	   the hard work you still feel a little uneasy. So you DISKCOMP
	   and again you are busy shuffling. What a waste of time and
	   energy!


	   Let DISK COPY FAST do the hard work and save time for you. Type
	   DCF to bring up the menu, press F5 (or F6) and then alternate
	   between source and target diskettes. When you are finished just
	   press the ESC key. It's fast and it's easy. No more shuffling.
	   You don't need to repeat the same command sequences and all the
	   switches over and over again. Best of all, the BYTE-BY-BYTE
	   comparison is already done. No need to DISKCOMP.


	   Sounds good? Give it a try. Just remember F5 (function key) is
	   for copying a sequence of diskettes in drive A and F6 is for
	   copying a sequence of diskettes in drive B. If you want to
	   change the read/write options do it before using the hot keys.


	   With this version two more hotkeys are added. F7 and F8 produce
	   multiple target diskettes in drive A: and B:, respectively. The
	   source diskette needs to be loaded before using these two
	   hotkeys.


	   Note : 1) DISK COPY FAST has an auto-sensing feature. The
		     program will start reading or writing a diskette when
		     it senses that a diskette is present. The only
		     exception is when you are using the same drive
		     repeatedly. In this case, to give you a chance to
		     change diskettes, the program will wait for a "drive
		     door opened followed by a drive door closed" even if
		     it has sensed that a diskette is already present.


		  2) Because of the auto-sensing feature mentioned above,
		     no matter how many diskettes you need to copy the
		     whole operation requires only two keystrokes, one of
		     the F5 to F8 keys at the beginning and the ESC key at
		     the end. Between these two keystrokes all you have to
		     do is changing diskettes when reading or writing is
		     completed.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 18



	10. BENCHMARK AND COMPARISON


	   10.1   Benchmark, HOW FAST CAN IT GO


	   The following results are from a 386, 16.7 MHz (33 MHz with
	   Turbo mode turned off) compatible machine with 360KB, 1.2MB and
	   1.44MB diskette drives. The numbers are the time in seconds for
	   DISK COPY FAST and DOS commands to perform the specific task.
	   In each cell, the 1st number is for a 100% full diskette the
	   second number (in parentheses) is for 25% loaded diskette.

	   The time for DOS commands does NOT include diskette shuffling
	   time.



		    task     360 KB     1.2 MB     720 KB      1.44 MB
	   ------------------------------------------------------------
	   DCF         R    15  (4)    30   (8)    35  (10)    35   (9)
	   DCF         W    15  (4)    30   (9)    35  (10)    35   (9)
	   DCF        WC    29  (7)    57  (14)    69  (18)    68  (17)
	   DCF        FW    33 (28)    67  (57)    81  (69)    80  (69)
	   DCF       FWC    47 (32)    93  (64)   112  (77)   112  (76)
	   ------------------------------------------------------------
	   DISKCOPY   RW    43 (43)    90  (90)   102 (102)   110 (110)
	   DISKCOPY  FRW    84 (84)   162 (162)   220 (220)   223 (223)
	   DISKCOMP   RC    43 (43)    93  (93)   102 (102)   133 (133)



	   Note : (1) Time for DOS commands does NOT include diskette
		      shuffling time.

		  (2) Under the "task" column in the above table, R stands
		      for Read, W stands for Write, F stands for Format
		      and C stands for BYTE-BY-BYTE comparison.

		  (3) Performance varies on different machine.

		  (4) The benchmark was performed with option delay ON. If
		      your machine is not too slow you can do better with
		      option delay OFF.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 19



	   10.2   Comparison, HOW MUCH CAN YOU SAVE


	   Again, we give DOS commands the best possible conditions. We
	   assume diskette shuffling doesn't take any time. When there is
	   more than one way to have the work done using DOS commands, we
	   choose the one with the shortest time. For example, while you
	   can use DISKCOPY to copy from source to unformatted target, it
	   would be faster to format the diskette first before copying and
	   this will be the DOS method we use for comparison.

	   Still, there are some problems with DOS commands which we can't
	   help. For example, DOS commands have no FAST mode and can't
	   read a source once and write target many times.

	   The following tables show how much longer, in percentage, it
	   takes using DOS commands than using DISK COPY FAST. The first
	   table is for a 100% full diskette and the second table is for
	   a 25% loaded diskette. In each table, the first row is for
	   straight copying, no format, no comparison, the second row
	   includes comparison but not formatting, the third row includes
	   formatting but not comparison. The last row includes both.


	   task   360K   1.2M   720K   1.44M    Comment
	   ------------------------------------------------------------
	   RW      43%    50%    42%    57%
	   RWC     95%   110%    92%   136%     DOS needs to read twice
	   RFW     65%    67%    50%    61%
	   RFWC    97%   107%    88%   116%     DOS needs to read twice



	   task   360K   1.2M   720K   1.44M    Comment
	   ------------------------------------------------------------
	   RW     438%   429%   410%   511%
	   RWC    682%   732%   629%   835%     DOS needs to read twice
	   RFW    147%   149%   123%   137%
	   RFWC   239%   254%   220%   274%     DOS needs to read twice



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 20



	11. WHAT IS AN IMAGE FILE ?


	    When you format a 1.2 M Bytes diskette, it actually contains
	    1,228,800 bytes but DOS tells you only 1,213,952 bytes are
	    available. Where are the other 14,848 bytes? They are used by
	    DOS to store information about the format, allocation of files
	    and root directory of the diskette. When you use COPY or XCOPY
	    to copy files from one diskette to another this information is
	    not copied. Also, the file allocation may be different. Same
	    files may occupy different sectors on the two diskettes.


	    An image file is created by reading the source diskette
	    sector-by-sector, track-by-track in the original order. It
	    contains every bit of information of the source diskette.
	    Thus, the size of the image file of a 1.2 MB diskette will be
	    exactly 1,228,800. This file can be stored on the hard disk or
	    on tape. (You can use some type of compression utility program
	    such as ARJ, LHA or PKZIP to save storage space if you like)


	    Why do I want to do that, You ask? I'll describe one possible
	    application here.


	    For archive purpose: You know the importance of backing up
	    the software you bought. How do you do that? DISKCOPY them to
	    another set of floppies? You can do that but what if you
	    already have hundreds of floppies around? If you are rich you
	    can save image files to hard disk. If you are not so rich save
	    them to tape. With compression one tape (costs about $20) can
	    hold as many as 200 image files of 1.2 MB floppies yet the
	    size is smaller than an audio cassette. Several months from
	    now if your original diskettes are damaged you can retrieve
	    image files from the tape, write to new diskettes and you have
	    an identical copy of the original (this won't work if the
	    original is copy-protected.) Of course tape drives are slow,
	    but this is archiving and you are not supposed to have to do
	    it often.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 21



	12. ABOUT EXTENDED MEMORY


	    To use extended memory (i.e. memory beyond 1 MB) you need the
	    following.

	    1. At least IBM PC AT or compatible with 80286 or better CPU.

	    2. Of course you need to have extended memory installed.

	    3. For safety reasons DISK COPY FAST also requires that you
	       have some kind of extended memory manager (or driver)
	       installed which conforms to the Microsoft eXtended Memory
	       Specification (XMS), version 2.0 or above. You can use
	       HIMEM.SYS which is included with DOS 5.0 so you don't need
	       to spend extra money to get one. You can also use QEMM386
	       or any other memory manager as long as it conforms to the
	       XMS specification.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 22



	13. ABOUT BOOT SECTOR VIRUS PROTECTION


	!!! IMPORTANT : Do not assume a diskette is virus-free just because
	    it is accepted by DISK COPY FAST.


	    As a bonus, DISK COPY FAST also gives you some protection
	    against boot sector viruses such as Michaelangelo. DISK COPY
	    FAST was never intended to be an anti-virus program and by no
	    means should this kind of protection be considered complete.
	    Having said that, here is how it works.


	    Every diskette contains some important information in the boot
	    sector which is usually damaged when infected by a boot sector
	    virus. If DISK COPY FAST finds any invalid data in the boot
	    sector it will warn you and refuse to copy the diskette. You
	    can then use an anti-virus program to check it and/or kill it.
	    This feature can be very helpful or even a life-saver when you
	    don't think so, but you actually have a boot sector virus on
	    a source diskette.


	    A side effect of this feature is that sometimes you have a
	    virus-free diskette with invalid data in the boot sector and
	    DISK COPY FAST refuses to copy it. For example, the way some
	    anti-virus programs kill a boot sector virus is to write a
	    constant value on the boot sector. The virus is killed but the
	    boot sector information is never recovered. For your protection
	    DISK COPY FAST will not accept a diskette if it has any doubt.


	    This feature actually saved me twice. I believe it will save
	    some of you too.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 23



	14. EXAMPLES


	    In the following examples "xxx|yyy" means  you select and
	    execute first level command "xxx" followed by its subcommand
	    "yyy". The "Drive A" subcommand in these examples can be
	    replaced by "Drive B" or the drive letters of the third and
	    fourth drive. The "file_name" can replaced by any file name or
	    your choice.


	    1. How to make a single copy from source to target diskette.

	       menu: (1) "Read|Drive A" to read source diskette.
		     (2) "Write|Drive A" to write target diskette.

	       command line: Use "DCF A:" to copy from drive A: to drive A:,
			     "DCF A: B:" to copy from drive A: to drive B:.

	    2. How to read one source diskette and write many target
	       diskettes.

	       menu: (1) "Read|Drive A" to read source diskette.
		     (2) Press function key F7 (or F8) if you want to use
			 drive A (or drive B). See section 9.

	       command line: Use "DCF /x+ A:" to read once from drive A: and
			     write as many targets as you like on drive A:,
			     "DCF /x+ A: B:" to read once from drive A: and
			     write as many targets as you like on drive B:.

	    3. How to read a source diskette and create its image file on
	       hard disk.

	       menu: (1) "Read|Drive A" to read source diskette.
		     (2) "Write|File" to produce image file.

	       command line: Use "DCF A: file_name" to read from drive A:
			     and write to an image file.

	    4. How to read an image file (already created) and write many
	       target diskettes.

	       menu: (1) "Read|File" to read image file.
		     (2) Press function key F7 (or F8) if you want to use
			 drive A (or drive B). See section 9.

	       command line: Use "DCF /x+ file_name A:" to read from an
			     image file and write as many targets as you
			     like on drive A:.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 24






	    5. How to duplicate a diskette in large quantity.

	       (1) Create an image file and keep it in hard disk (see 3
		   above)
	       (2) Each working session perform a read once and write many
		   (see 4)

	    6. How to backup a sequence of diskettes such as the original
	       diskettes of the software you just bought.

	       menu: (1) Use "Option" and its subcommands "Fast", "Compare"
			 and "Format" to set desired read/write option. see
			 section 8.
		     (2) Press function key F5 (or F6) if you want to use
			 drive A: (or drive B:). See section 9.

	       command line: Use "DCF /b+ A:" to back up a sequence of
			     diskettes with drive A:, "DCF /b+w+ A:" when
			     all source diskettes are write protected. See
			     section 5 for other useful options.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 25



	15. QUESTIONS AND ANSWERS


	    1.  Q: After I made a copy using DISK COPY FAST I used DOS
		   command DISKCOMP and it says that the two diskettes
		   are not identical. What's wrong?

		A: If you turn Fast mode ON (default) DISKCOPY will only
		   copy the portion of source diskette with useful data to
		   target. The empty portion is not copied and  this is
		   what DISKCOMP complains about. If you don't like this
		   for any reason, just turn the Fast mode OFF. Then every
		   track will be copied and the whole diskette will be
		   identical to the original.

	    2.  Q: I just installed more extended memory in my computer
		   but DISK COPY FAST still says that I don't have any.

		A: There are other requirements. See section 12 for details.

	    3.  Q: My PC is slow. Can it achieve the same performance as
		   described in this documentation?

		A: Testing results show that DISK COPY FAST can copy almost
		   as fast on an 8088 as on 486. If you don't have enough
		   memory and need to use hard disk instead make sure your
		   hard disk is not too slow (transfer rate 200 KB/sec or
		   better) and not overly fragmented.

	    4.  Q: I have an old PC (or XT) can I use DISK COPY FAST on
		   it?

		A: Yes. See answer to question 3.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 26



	16. SUPPORT AND SUGGESTIONS


	    If you need support or you have comments, suggestions, or you
	    believe there is a bug (*) in the program, feel free to
	    contact me, whether you are a registered user or not.

	    You can contact me in four ways, listed below according to
	    their timeliness. Registered users do have priority but I will
	    try to help anyone in need.

	    1. PIE BBS in Sunnyvale, CA, U.S.A. (408) 733-4670
	       3 nodes with 14,400 HST Dual Standards.

	       I check my mail almost daily on the PIE BBS. For the
	       fastest response please send your message to CHANG LEE in
	       the Shareware Authors Conference on this BBS.

	       Effective 8/1/92 The PIE BBS has graciously allowed me to
	       use their BBS as the main distribution point for DISK COPY
	       FAST (DCF).  I will personally upload the most current
	       version of DCF to this BBS.

     ----->    DCF is a free download to all callers on the PIE BBS.


	    2. Shareware conferences on ILINK, INTELEC and RIME.

	       I monitor these conference almost daily. If your local BBS
	       carry one of them you are welcome to send your message to
	       CHANG LEE via one of these conferences.

	    3. CompuServe Information Service (CIS)

	       I check my mail at least once a week on CIS and will get
	       back to you as soon as I receive your mail. Please send
	       your mail to 71053,3517.

	       The most current version of DCF can also be downloaded from
	       CIS, forum IBMHW, Lib 1.

	    4. You can also send your suggestions, questions and/or
	       registration to the following address.

	       Chang Ping Lee
	       P.O. Box 60064
	       Palo Alto, CA 94306



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 27



	17. INTRODUCING OTHER FINE PRODUCTS


	    17.1   DISK COPY PLUS


	    "I really find your DISK COPY PLUS a very very fine program. It
	    literally has saved me a lot of time copying diskettes."
					    -----   one user, United States


	    DISK COPY PLUS is the professional version of DISK COPY FAST.
	    It includes all the features of DISK COPY FAST plus some
	    advanced features.


	    To many people, large quantity diskette duplicating means that
	    you need to buy high-price copier. Not so any more. With DISK
	    COPY PLUS you can assemble two low-end 286 PCs each equipped
	    with up to four floppy drives at much lower price and achieve
	    much higher copying speed. Not only do You get higher
	    productivity, but also that you get two computers instead of a
	    special purpose machine.


	    DISK COPY PLUS is even better for you if you only need to copy
	    a small quantity of the same source diskette every day.
	    Consider the low cost, incredibly high speed (see section 10 in
	    DCF42.DOC) and other powerful features (explained later), DISK
	    COPY PLUS is hard to beat.


	    One of the most powerful features of DISK COPY PLUS is
	    customized hot keys. You define up to 10 hot keys according
	    to your special needs.


	    A feature similar to hot keys but requiring no keystrokes is
	    the AUTOEXEC feature. You define what DISK COPY PLUS should do
	    automatically when you run the program, just like AUTOEXEC.BAT
	    does when you reboot your computer.


	    For example, DISK COPY PLUS can be configured so that each
	    time you type DCP at the DOS prompt it will read an image file,
	    set up a serial number (explained later), define read/write
	    options and then prompt for the target disk. You then insert



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 28






	    the target into drive A:, close the door and it will start
	    copying. After you have done with one format, at the press of
	    one key it converts the source to another format, say, from
	    720KB to 360KB, and continue copying in another drive.


	    In this example, it takes only two keystrokes (one to change
	    format, another to quit.) to produce as many 360KB and 720KB


	    target diskettes as you like. Each copy produced can have a
	    unique serial number and each copy can be double checked with
	    a BYTE-BY-BYTE comparison to make sure they are identical to
	    the original, except for the serial number.


	    This high degree of automation means that you can save time for
	    more creative work, or you can hire someone who knows nothing
	    about computers to do the copying for you.


	    Another nice feature of DISK COPY PLUS is automatic serial
	    number assignment. Some people like to change the disk serial
	    number that DOS shows you when you use the DIR command. Other
	    people like to imbed a unique serial number in their product.
	    DISK COPY PLUS allow you to do either or both types of these
	    serial numbers. In addition, it provides other tools to help
	    you find and VERIFY the right location for imbedding serial
	    numbers and show you the imbedded serial number on any
	    duplicated diskette. This feature can be done automatically
	    using the hot keys or AUTOEXEC features.


	    DISK COPY PLUS also keeps track of serial number of EVERY
	    image file for you so that you don't need to specify the
	    serial number each time you run the program. It also keeps
	    a log file for your diskette duplication. With a little
	    editing (you add the distribution destination) the log file
	    becomes a nice record of your diskette distribution.


	    The power of DISK COPY PLUS keeps growing. Listed below are
	    some other powerful commands.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 29






	    The DIAG command checks boot sector, file allocation table
	    (FAT) and directory structure and provides reports for diskette
	    usage and fragmentation.


	    The CONVERT command convert diskette image from one format to
	    another, so long as the data on original format can fit into
	    the new format. For example, a 1.44 MB disk can be converted to
	    360 KB diskette if the data on the 1.44 MB disk does not exceed
	    the total data space on a 360 KB diskette.


	    The DEFRAG command performs defragmentation on a diskette. It
	    does more than just sectors swapping. The entire diskette is
	    checked thoroughly for any possible way of compaction. The
	    result is a perfect with no waste of space and no fragmentation.


	    The DUMP command lets you move around the loaded diskette at
	    very high speed. You can use it to check the contents of a
	    diskette or verify the imbedded location(s) of a serial number.


	    DISK COPY PLUS also provides commands that allow you to see
	    the directory of a diskette, image file or diskette loaded in
	    memory.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 30



	   17.2   DISK UTIL PACK


	   "Your Disk Utility Package has many useful features. I was
	   amazed by the copying speed of the F2H & H2F. They are time
	   saving utilities. Great to use."     -----  one user, Singapore


	   DISK UTIL PACK is a collection of five high performance and
	   useful diskette utility programs. For example, the author uses
	   H2F every day for filling orders for DISK COPY FAST and related
	   products.


	   F2H  (Floppy to Hard disk)

	   A utility to copy a diskette to hard disk or RAM disk at very
	   high speed. See the following table for benchmark results.


	   H2F  (Hard disk to Floppy)

	   A utility to copy recursively from current directory on hard
	   disk or RAM disk to a diskette at very high speed. This program
	   combined with F2H is ideal for backing up a small directory.
	   See the following table for benchmark results.



				 H2F vs XCOPY      F2H vs XCOPY
	      --------------------------------------------------
	       Case 1 (1.2MB)     8  vs  40         8  vs  17
	       Case 1 (1.44MB)    9  vs  50         9  vs  19
	       Case 2 (1.2MB)     9  vs  33         9  vs  18
	       Case 2 (1.44MB)    8  vs  40         9  vs  19

	       Note: (1) Case 1 contains 36 files and no sub directory.
			 Case 2 contains 13 files in 21 sub directories.
			 Total file size in both cases is about 300 KB.

		     (2) Performance varies on different system. The
			 above benchmark results is provided as an example,
			 NOT guarantee.

		     (3) The above results were measured with a RAM disk
			 on a 33 MHz 386 compatible system.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 31



	   FMT

	   A utility to format 360KB, 1.2MB, 720KB and 1.44MB diskettes.
	   Features include no keyboard operation, serial number assignment,
	   label assignment and bad sectors handling.

	   You type the program name at DOS prompt to start and press the
	   ESC key to end, no keystroke in between!

	   The serial number and label can be assigned incrementally with
	   a text file which stores the serial number and label for the
	   next diskette to be formatted. You can keep more than one text
	   file for this purpose. Before exit, FMT will update the file
	   automatically.

	   Conventionally, a cluster is marked as bad cluster if the
	   formatting program fails to access after three tries. FMT,
	   however, adopts a more strict policy to ensure that your
	   valuable data won't be saved on places which are bad or about to
	   turn bad. FMT will try three times too. The difference is that
	   if FMT fails to access a sector in the first try it will mark
	   the sector bad and tell you how many tries has failed.


	   CLN

	   A utility to make full use of cleaning kits sold by 3M, Memorex
	   and other companies.

	   Without CLN, all you can do is to use commands such as DIR to
	   get the disk drive moving and bring head into contact with the
	   cleaning disk and the cleaning solution on it. However, there
	   are two problems that only CLN can help you.

	   Firstly, how many DIR commands you need to keep typing to keep
	   the disk head in contact with the cleaning disk for 30 to 60
	   seconds? With CLN you only need to type CLN to start and press
	   the ESC to end the process, no keystrokes in between. CLN also
	   "reads" both sides of every "track" to make full use of your
	   cleaning kit. Try CLN once and you will know how many keystrokes
	   it can save for you.

	   Secondly, since there is no data on the disk DOS will stop after
	   it fails to access the first track. This means you may only be
	   using 0.625% of the surface of your cleaning disk! (There are 80
	   tracks on a high density drive. Each track has two sides and you
	   are only using one side on the first track.)



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 32






	   CLN not only forces your system to keep on "reading" different
	   tracks on the cleaning disk and thus clean the head more
	   thoroughly but also provides you simple and easy ways to verify
	   that it does what it claims. Your will have the confidence that
	   you give your diskette drive the best care possible.


	   CHDK (CHeck DisKette)

	   A utility which gives detailed information about a diskette. It
	   shows you the information contained in the system area of the
	   diskette, check the integrity of the system area, gives you
	   detailed layout of system area, root directory and data area and
	   then give you a report of the fragmentation on the diskette.

	   The program also shows you other important or interesting
	   information about a diskette. For example, it shows you the
	   sectors, clusters and tracks with active data, maximum number of
	   root directory entries.

	   CHDK shows you lots of information packed in one screen.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 33



	18. REGISTRATION BENEFIT


	    18.1   DISK COPY FAST


	    If you find DISK COPY FAST useful and would like to continue
	    using the program please register. The fee is only $20.00 plus
	    $5.00 shipping and handling. In return, you will receive the
	    following benefit.


	    1. Life time registration! You'll be given a key to convert the
	       shareware version to registered version. When a new release
	       is available all you need to do is to down load it from your
	       BBS and use the key to convert it to a registered version.
	       This way you don't have to pay for updates no matter whether
	       you registered for a commercial or non-commercial license.


	    2. Personalized appreciation screen. Your name will be part of
	       of the program and will be shown at the initial screen.


	    3. No initial delay and no registration reminder screen. Batch
	       file users can enjoy no keystroke operation except an ESC
	       for multiple read and write.


	    4. Customized sound effect. You will be shown how to edit a
	       text file to produce your own audio signals or even have your
	       PC play your favorite song when DISK COPY FAST or DISK COPY
	       PLUS finishes reading or writing a diskette or when there is
	       20 seconds of inactivity.


	    5. Free telephone support.


	    6. Super low price for the Diskette Utility Package. See the
	       file PRODUCT.TXT for more information about the package.


	    7. Special discount if you later decide to upgrade to DISK COPY
	       PLUS.


	    8. You will be shown how to edit the CONFIG.DCF file to use
	       more options.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 34






	18.2   DISK COPY PLUS


	    Registered users of DISK COPY PLUS will receive the following.
	    For more details about the features of DISK COPY PLUS, see
	    section 18 of this documentation.


	    1. Everything that a registered user of DISK COPY FAST receives.
	       You are also granted a license of DISK COPY FAST so that you
	       use DISK COPY PLUS on one PC and DISK COPY FAST on another
	       at the same time.


	    2. Serial number assignment.


	    3. AUTOEXEC feature.


	    4. Customized hot keys.


	    5. DIAG command which diagnoses a diskette.


	    6. CONVERT command which converts diskette format.


	    7. DEFRAG command which defragments a diskette.


	    8. DUMP command which dumps the contents of the loaded disk on
	       the screen.


	    9. DIR command which checks root directory.


	    10. You also get the key for DISK COPY FAST.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 35



	    19. HOW TO REGISTER


	    This page contains order information and payment methods. Order
	    form is on the next two pages. You can also run REGISTER.EXE
	    which helps you fill out the order form.


	    1. License agreement:

	       Please see page 4 of DCF42.DOC file for details.


	    2. Related products:

	       Information regarding DISK COPY PLUS and DISK UTIL PACK is
	       in section 18 of DCF42.DOC file.


	    3. Payment methods.

	       a. Check. Both bank checks and personal checks are accepted.

	       b. Money order issued by banks, post office or American
		  Express.

	       c. Credit card (VISA or Master Card.) Products must be
		  mailed to the same person.

	       d. Cash. Please note that the author can not be responsible
		  for any loss in the mail.


   ---->    4. Foreign orders:

	       If you pay by credit card or checks/money order in U.S.
	       dollars drawn on a U.S. bank, simply fill out the order form
	       and mail it with your payment.

	       If you pay by your currency or check/money order in foreign
	       fund or drawn on a foreign bank, please add US $12 to the
	       total on the order form as currency exchange fee then
	       multiply the result by proper exchange rate. Products will
	       not be mailed if underpaid.

	       U.K users can register with Simon Brain at PC Independent
	       User Group, 87 High St., Tonbridge, Kent TN9 1RX, England.

	       Italian users, please consider any other method than money
	       order issued by post office.



       ----------------------- < ORDER FORM - Page 1 > -----------------------


      I have read and agree to the terms in DCF42.DOC file and would like
      to order the following:
					     price     quantity   total

	     DISK COPY FAST  version 4.2       $20       ____    $______

	     DISK COPY PLUS  version 2.2       $50       ____    $______

	     FMT             version 2.2       $10       ____    $______

	     F2H             version 2.2       $15       ____    $______

	     H2F             version 2.2       $20       ____    $______

	     CLN             version 2.2       $10       ____    $______

	     CHDK            version 2.2       $10       ____    $______

	     DISK UTIL PACK  version 2.2
	     for non-registered users          $40       ____    $______

	     DISK UTIL PACK  version 2.2
	     for registered users of DISK
	     COPY FAST or DISK COPY PLUS       $20       ____    $______

	     Sub total                                           $______

	     Double sub total for commercial license (*)         $______

	     Shipping & handling (U.S.A.              $5)        $______
				 (Canada, Mexico      $6)
				 (all other countries $8)

	     CA residents please add 7.25% sales tax             $______

	     < CTRL 0335NF >                             TOTAL   $______

      NOTE: |--------------------------------------------------------|
	    | * Above prices are for individual, non-commercial use. |
	    |   For commercial license, please double the prices.    |
	    |   See page 4 of DCF42.DOC for license agreement.       |
	    |--------------------------------------------------------|



       ----------------------- < ORDER FORM - Page 2 > -----------------------


      Payment: ( ) money order  ( ) check  ( ) cash  ( ) VISA  ( ) Master card


      Credit card orders:

	   Name as shown on the credit card: _______________________________

	   Credit card number: _____________________________________________

	   Expiration date: ________________________________________________

	   Total amount in U.S. dollars: $__________________________________

	   Signature: _______________________________  Date:________________

	   * All credit card orders are mailed on the following Monday after
	     they are received.


      Disk type :   ( ) 3.5" 720k     ( ) 5.25" 360k

      Name      :   _____________________________________

      Address   :   _____________________________________

		    _____________________________________

		    _____________________________________


      Comments  :   ______________________________________________________

		    ______________________________________________________

		    ______________________________________________________

		    ______________________________________________________

		    ______________________________________________________

		    ______________________________________________________


      Please mail this form with payment to the following address.

	    DCF Software
	    P.O. Box 60064
	    Palo Alto, CA 94306
	    U. S. A.

```
{% endraw %}

## DIST.TXT

{% raw %}
```
  
 

                        TERMS OF DISTRIBUTION :


        Redistribution of DISK COPY FAST must include the software, its
        documentation file, order form and all supplemental files (see
        FILES.TXT) as a single unit without any modification AND subject
        to the following conditions :


        1. Any individual is welcome to make copies for his/her friends
           and/or colleagues if NO FEE is charged.


        2. Electronic bulletin boards, whether they charge or do not
           charge their users subscription fee, are welcome to post the
           program for down loading as long as they do not charge any fee
           in particular for the distribution of DISK COPY FAST.


        3. Computer information services such as CompuServe (CIS), Genie,
           etc., may post this software for their subscribers.


        4. Non-commercial user groups and computer clubs may distribute
           the program to their members if the fee charged for the
           diskette containing DISK COPY FAST does not exceed $10.


        5. Disk vendors approved by the Association of Shareware
           Professionals or disk vendors who explain the concept of
           shareware in their ads that quote a price may distribute the
           shareware version of DISK COPY FAST.


        6. Other commercial enterprises wishing to distribute DISK COPY
           FAST either alone or in combination with other hardware,
           software, books or materials must obtain permission in writing
           from the author.
```
{% endraw %}

## FILES.TXT

{% raw %}
```
        This archive should contain the following files:

	DCF.EXE      ---  DISK COPY FAST version 4.2 executable file

        DCFHELP.EXE  ---  Utility program providing help for using DCF.EXE

        REGISTER.EXE ---  Utility program for registering DISK COPY FAST

	DCF42.DOC    ---  DISK COPY FAST documentation file

        VENDOR.DOC   ---  distribution terms for shareware vendors

        PRODUCT.TXT  ---  information about other fine products

        DIST.TXT     ---  Distribution terms

        FILES.TXT    ---  List of files included in the package

	READ.ME      ---  Brief introduction for getting started

	ORDER.FRM    ---  Order form for DISK COPY FAST and/or DISK COPY PLUS

        WHATS.NEW    ---  describes new features or enhancements in this version

	FILE_ID.DIZ  ---  eight lines description of DISK COPY FAST

        DESC.SDI     ---  one line description of DISK COPY FAST
```
{% endraw %}

## PRODUCT.TXT

{% raw %}
```


      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 27



        17. INTRODUCING OTHER FINE PRODUCTS


            17.1   DISK COPY PLUS


            "I really find your DISK COPY PLUS a very very fine program. It
            literally has saved me a lot of time copying diskettes."
                                            -----   one user, United States


            DISK COPY PLUS is the professional version of DISK COPY FAST.
            It includes all the features of DISK COPY FAST plus some
            advanced features.


            To many people, large quantity diskette duplicating means that
            you need to buy high-price copier. Not so any more. With DISK
            COPY PLUS you can assemble two low-end 286 PCs each equipped
            with up to four floppy drives at much lower price and achieve
            much higher copying speed. Not only do You get higher
            productivity, but also that you get two computers instead of a
            special purpose machine.


            DISK COPY PLUS is even better for you if you only need to copy
            a small quantity of the same source diskette every day.
            Consider the low cost, incredibly high speed (see section 10 in
            DCF42.DOC) and other powerful features (explained later), DISK
            COPY PLUS is hard to beat.


            One of the most powerful features of DISK COPY PLUS is
            customized hot keys. You define up to 10 hot keys according
            to your special needs.


            A feature similar to hot keys but requiring no keystrokes is
            the AUTOEXEC feature. You define what DISK COPY PLUS should do
            automatically when you run the program, just like AUTOEXEC.BAT
            does when you reboot your computer.


            For example, DISK COPY PLUS can be configured so that each
            time you type DCP at the DOS prompt it will read an image file,
            set up a serial number (explained later), define read/write
            options and then prompt for the target disk. You then insert



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 28






            the target into drive A:, close the door and it will start
            copying. After you have done with one format, at the press of
            one key it converts the source to another format, say, from
            720KB to 360KB, and continue copying in another drive.


            In this example, it takes only two keystrokes (one to change
            format, another to quit.) to produce as many 360KB and 720KB


            target diskettes as you like. Each copy produced can have a
            unique serial number and each copy can be double checked with
            a BYTE-BY-BYTE comparison to make sure they are identical to
            the original, except for the serial number.


            This high degree of automation means that you can save time for
            more creative work, or you can hire someone who knows nothing
            about computers to do the copying for you.


            Another nice feature of DISK COPY PLUS is automatic serial
            number assignment. Some people like to change the disk serial
            number that DOS shows you when you use the DIR command. Other
            people like to imbed a unique serial number in their product.
            DISK COPY PLUS allow you to do either or both types of these
            serial numbers. In addition, it provides other tools to help
            you find and VERIFY the right location for imbedding serial
            numbers and show you the imbedded serial number on any
            duplicated diskette. This feature can be done automatically
            using the hot keys or AUTOEXEC features.


            DISK COPY PLUS also keeps track of serial number of EVERY
            image file for you so that you don't need to specify the
            serial number each time you run the program. It also keeps
            a log file for your diskette duplication. With a little
            editing (you add the distribution destination) the log file
            becomes a nice record of your diskette distribution.


            The power of DISK COPY PLUS keeps growing. Listed below are
            some other powerful commands.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 29






            The DIAG command checks boot sector, file allocation table
            (FAT) and directory structure and provides reports for diskette
            usage and fragmentation.


            The CONVERT command convert diskette image from one format to
            another, so long as the data on original format can fit into
            the new format. For example, a 1.44 MB disk can be converted to
            360 KB diskette if the data on the 1.44 MB disk does not exceed
            the total data space on a 360 KB diskette.


            The DEFRAG command performs defragmentation on a diskette. It
            does more than just sectors swapping. The entire diskette is
            checked thoroughly for any possible way of compaction. The
            result is a perfect with no waste of space and no fragmentation.


            The DUMP command lets you move around the loaded diskette at
            very high speed. You can use it to check the contents of a
            diskette or verify the imbedded location(s) of a serial number.


            DISK COPY PLUS also provides commands that allow you to see
            the directory of a diskette, image file or diskette loaded in
            memory.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 30



           17.2   DISK UTIL PACK


           "Your Disk Utility Package has many useful features. I was
           amazed by the copying speed of the F2H & H2F. They are time
           saving utilities. Great to use."     -----  one user, Singapore


           DISK UTIL PACK is a collection of five high performance and
           useful diskette utility programs. For example, the author uses
           H2F every day for filling orders for DISK COPY FAST and related
           products.


           F2H  (Floppy to Hard disk)

           A utility to copy a diskette to hard disk or RAM disk at very
           high speed. See the following table for benchmark results.


           H2F  (Hard disk to Floppy)

           A utility to copy recursively from current directory on hard
           disk or RAM disk to a diskette at very high speed. This program
           combined with F2H is ideal for backing up a small directory.
           See the following table for benchmark results.



                                 H2F vs XCOPY      F2H vs XCOPY
              --------------------------------------------------
               Case 1 (1.2MB)     8  vs  40         8  vs  17
               Case 1 (1.44MB)    9  vs  50         9  vs  19
               Case 2 (1.2MB)     9  vs  33         9  vs  18
               Case 2 (1.44MB)    8  vs  40         9  vs  19

               Note: (1) Case 1 contains 36 files and no sub directory.
                         Case 2 contains 13 files in 21 sub directories.
                         Total file size in both cases is about 300 KB.

                     (2) Performance varies on different system. The
                         above benchmark results is provided as an example,
                         NOT guarantee.

                     (3) The above results were measured with a RAM disk
                         on a 33 MHz 386 compatible system.



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 31



           FMT

           A utility to format 360KB, 1.2MB, 720KB and 1.44MB diskettes.
           Features include no keyboard operation, serial number assignment,
           label assignment and bad sectors handling.

           You type the program name at DOS prompt to start and press the
           ESC key to end, no keystroke in between!

           The serial number and label can be assigned incrementally with
           a text file which stores the serial number and label for the
           next diskette to be formatted. You can keep more than one text
           file for this purpose. Before exit, FMT will update the file
           automatically.

           Conventionally, a cluster is marked as bad cluster if the
           formatting program fails to access after three tries. FMT,
           however, adopts a more strict policy to ensure that your
           valuable data won't be saved on places which are bad or about to
           turn bad. FMT will try three times too. The difference is that
           if FMT fails to access a sector in the first try it will mark
           the sector bad and tell you how many tries has failed.


           CLN

           A utility to make full use of cleaning kits sold by 3M, Memorex
           and other companies.

           Without CLN, all you can do is to use commands such as DIR to
           get the disk drive moving and bring head into contact with the
           cleaning disk and the cleaning solution on it. However, there
           are two problems that only CLN can help you.

           Firstly, how many DIR commands you need to keep typing to keep
           the disk head in contact with the cleaning disk for 30 to 60
           seconds? With CLN you only need to type CLN to start and press
           the ESC to end the process, no keystrokes in between. CLN also
           "reads" both sides of every "track" to make full use of your
           cleaning kit. Try CLN once and you will know how many keystrokes
           it can save for you.

           Secondly, since there is no data on the disk DOS will stop after
           it fails to access the first track. This means you may only be
           using 0.625% of the surface of your cleaning disk! (There are 80
           tracks on a high density drive. Each track has two sides and you
           are only using one side on the first track.)



      DISK COPY FAST    Copyright 1992, 1993    Chang Ping Lee       page 32






           CLN not only forces your system to keep on "reading" different
           tracks on the cleaning disk and thus clean the head more
           thoroughly but also provides you simple and easy ways to verify
           that it does what it claims. Your will have the confidence that
           you give your diskette drive the best care possible.


           CHDK (CHeck DisKette)

           A utility which gives detailed information about a diskette. It
           shows you the information contained in the system area of the
           diskette, check the integrity of the system area, gives you
           detailed layout of system area, root directory and data area and
           then give you a report of the fragmentation on the diskette.

           The program also shows you other important or interesting
           information about a diskette. For example, it shows you the
           sectors, clusters and tracks with active data, maximum number of
           root directory entries.

           CHDK shows you lots of information packed in one screen.

```
{% endraw %}

## VENDOR.DOC

{% raw %}
```
 Dear ShareWare Vendor:

 This file contains the distribution policy of the shareware version,
 v4.2 of DISK COPY FAST.

 For catalog information please see the file FILE_ID.DIZ.

 DISK COPY FAST needs your help for the widest possible distribution.
 So long as you meet the requirement in this file, your distribution of
 DISK COPY FAST is highly appreciated.

------------------------------------------------------------------------

 You may distribute the shareware version of DISK COPY FAST if you include
 the software, its documentation file, order form and all supplemental
 files (see FILES.TXT) as a single unit without any modification AND if
 you satisfy one of the following.


 1. If you are a disk vendor approved by the Association of Shareware
    Professionals.

 2. If you identify it as shareware in your ads that quote a price.


 That's it.

------------------------------------------------------------------------

 When new version is available, DISK COPY FAST will be distributed in
 the following sequence.

 1. New version will be posted on PIE BBS, (408) 733-4670.

 2. New version will be posted on CIS, forum IBMHW, Lib 1.

 3. New version will be posted on EXECPC.

 4. A copy will be mailed to disk vendors who have notified me of their
    interest. If at least one registration results from the distribution
    of a vendor he/she will receive a copy of the new version automatically.















































































```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3643

     Volume in drive A has no label
     Directory of A:\

    DCF      EXE     55076   7-19-93   4:20a
    DCFHELP  EXE     15145   7-19-93   4:20a
    REGISTER COM     14285   7-19-93   4:20a
    DCF42    DOC     58608   7-19-93   4:20a
    VENDOR   DOC      1618   7-19-93   4:20a
    PRODUCT  TXT     11601   7-19-93   4:20a
    DIST     TXT      1604   7-19-93   4:20a
    FILES    TXT       936   7-19-93   4:20a
    FILE_ID  DIZ       362   7-19-93   4:20a
    DESC     SDI        61   7-19-93   4:20a
    ORDER    FRM      4771   7-19-93   4:20a
    WHATS    NEW      5748   7-19-93   4:20a
    READ     ME       1233   7-19-93   4:20a
    GO       BAT        29   9-17-93   8:40a
    SHOW     EXE      2040   9-12-88  10:48a
           15 file(s)     173117 bytes
                          142336 bytes free
