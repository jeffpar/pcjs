---
layout: page
title: "PC-SIG Diskette Library (Disk #2095)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2095/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2095"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "VIRUSCAN, VSHIELD, AND CLEAN-UP"

    Stop viruses in their tracks!  VIRUSCAN scans diskettes or entire
    systems for known viruses, identifies the intruder, removes the virus,
    and often repairs any damage to the system.
    
    VIRUSCAN looks for any preexisting PC virus infection.  Over 95
    different virus strains and numerous sub-varieties for each strain can
    be identified by this program.  These viruses include the ten most
    common viruses that account for over 95% of all reported PC infections.
    The documentation lists all the viruses by name (and what a list), for
    example:  "The Do-Nothing Virus, Lisbon Virus, Ghost Virus-Ghostball,
    New Jerusalem, Disk Killer-Ogre, Dark Avenger, 1514- Datacrime II,
    Icelandic-II, and the Pakistani Brain, to name a few.
    
    It indicates the specific files or system areas infected and identifies
    the virus strain that's caused the infection.  Removal can then be done
    automatically, or as a separate step.
    
    The memory resident version of VIRUSCAN, VSHIELD prevents viruses from
    getting into your system in the first place.  It monitors and scans
    programs as they're loaded and prevents infected programs from
    executing.  It also scans specific areas of the system -- the boot
    sector, partition table, hidden files, command interpreter and itself,
    when it is first executed.  It's your first line of defense against
    virus attacks.
    
    The last in VIRUSCAN's trilogy of defense, CLEAN-UP kills
    and removes computer viruses, and in most instances, repairs infected
    files, reconstructs damaged programs and returns the system to normal
    operation.  It works for all viruses identified by the current version
    of VIRUSCAN.
    
    CLEAN-UP searches the entire system looking for the virus that you wish
    to remove.  When found, the infected file is identified, the virus is
    isolated and removed, and for the more common viruses, the infected file
    is repaired.  If the file is infected with a less common virus that
    can't be separated from the file, the infected
    file is wiped from the disk and deleted from the system.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CLEAN66.DOC

{% raw %}
```
            CLEAN-UP VIRUS REMOVER   Version 4.3 V66
                            Copyright 1989, 1990 McAfee Associates

                                            4423 Cheeney Street
                                            Santa Clara, CA 95054
                                            408 988 3832 (voice)
                                            408 988 4004 (BBS)


Executable Program (CLEAN.EXE):
	CLEAN contains a self test at load time.  If CLEAN has been
modified in any way, a warning will be displayed.  The program will
still continue to repair and clean infected programs, however.  In
addition, versions 55 and above are packaged with a VALIDATE
program that will authenticate the integrity of CLEAN.EXE.  Refer
to the VALIDATE.DOC instructions for the use of the validation
program.
	The validation results for V66 should be:
			    SIZE: 77,961
			    DATE: 8-10-1990
    FILE AUTHENTICATION:
		Check Method 1 - 18B6
		Check Method 2 - 0705

	You may also call the McAfee Associates bulletin board at 408
988 4004 to obtain on-line SCAN.EXE verification data.  The
VALIDATE program distributed with CLEAN may be used to authenticate
all future versions of CLEAN.  

Notes on Version 66:
	Version 66 is able to remove and repair four new viruses: 
Joshi, Vienna, Fish6, and Zerobug.  All of these viruses have been
reported at multiple sites.  In addition, 27 new viruses have been
included in the Clean-Up detection and eradication processing.  An
outline of the new viruses in included in the enclosed file -
VIRLIST.TXT.  For a complete description of the viruses, please
refer to Patricia Hoffman's VSUM document.		
	
OVERVIEW:

	CLEAN-UP kills and removes computer viruses, and in most
instances it repairs infected files, re-constructs damaged programs
and returns the system to normal operation.  CLEAN-UP works for all
viruses identified by the current version of McAfee Associates'
SCAN.
	CLEAN-UP searches the entire system looking for the virus that
you wish to remove.  When found, the infected file is identified,
the virus is isolated and removed, and for the more common viruses,
the infected file is repaired.  If the file is infected with a less
common virus that cannot be separated from the file, the infected
file is wiped from the disk and deleted from the system.  A warning
message is displayed by CLEAN-UP before erasing any files, and you
have the option of overriding the erase function.  
	The common viruses that CLEAN-UP is able to remove
successfully and repair and restore the damaged programs are:  

Jerusalem B     Alabama      Jerusalem A     Ping Pong  
Jerusalem E     Stoned       Dark Avenger    Pakistani Brain 
Suriv03         Payday       Alameda         1701
1704            Disk Killer  Ping Pong-B     Ashar
Sunday          1260         4096            Yankee Doodle
Vacsina         V800         Joshi           Fish
Vienna          Zerobug

	These viruses account for the overwhelming majority of
infection occurrences.  All other known viruses will be identified
and isolated by CLEAN-UP and the infected files' area of disk will
be wiped clean and the files will be removed from the system. 

                ******   I M P O R T A N T   ******

	*	Note: EXE viruses cannot be successfully removed
          from all infected .EXE files in 100% of the cases.  A
          few EXE programs will be damaged beyond repair by the
          infection and they will have to be deleted.  In all
          cases, however, the virus in the file will be killed and
          rendered harmless by CLEAN-UP.  Additionally, removing
          the Stoned virus can cause loss of the partition table 
          in systems with non-standard disk controllers or systems
          that use special purpose device drivers for disk access.
          If you are removing the Stoned virus, as a precaution 
          back-up all critical data before running Clean-up.  Loss
          of the partition table will cause -- LOSS OF ALL DATA
          ON THE DISK. 
    

     ******* FOLLOW THE REMOVAL INSTRUCTIONS CLOSELY *******

* POWER DOWN AND RE-BOOT FROM A CLEAN DISKETTE BEFORE BEGINNING *

RUNNING CLEAN-UP:
	Before running CLEAN-UP, verify the suspected virus infection
by running VIRUSCAN (SCAN.EXE) Version 55 or greater.  SCAN will
identify the virus strain and sub-strain and will display the I.D.
to be used as input to the CLEAN-UP program.  CLEAN-UP uses this
I.D. to determine which virus to seek out and remove.  The I.D. for
each virus is displayed inside a set of brackets - [ ].  For
example, the I.D. for the Disk Killer virus will be displayed by
SCAN as [Killer].  This identical identifier must be used in the
command line of CLEAN-UP in order to remove the Disk Killer
virus.
		
***  Important:  Before you begin the disinfection process, you
MUST power down the infected computer and then re-boot the computer
from a clean, write-protected system diskette.  This step is very
important.  It will remove the virus from control in memory and
prevent the virus from continuing to infect during the clean-up
process.  After Re-booting from the clean diskette, run SCAN on the
diskette to verify that it is indeed not infected.

	To run CLEAN-UP type:

	CLEAN    d1: d2: ... dn: [virusname] /a /many 

			where:

	   dn: - Drive designators for drives to be cleaned.
              (up to 10 drives may be cleaned with one command)

[virusname] - The virus I.D. (brackets must be included)

         /a - Option to check all files

      /many - Option to allow cleaning multiple floppies


      Examples:
 
     CLEAN   C: D: [Jeru]       will clean Jerusalem from C and D
                                drives

     CLEAN   C:\TEMP [Dav] /a   Will clean Dark avenger from
                                C:\TEMP and will search all file
                                extensions for the virus


	CLEAN-UP will display the name of each infected file as it is
found.  When the virus has been removed from each file, a
"successful" message will be displayed.  


	  NOTE:	If a file has been infected multiple times by a
               virus, clean will display the name of the file and
               the "successful" message for each infection
               occurrence.  Thus, multiple lines will be displayed
               for each file infected more than once.


	After running CLEAN-UP, run SCAN again, this time with the /a
option, to ensure that all remnants of the virus have been removed.
	After cleaning the fixed disk drives, SCAN all floppies and
if any infections are found, remove them with CLEAN-UP.

	The clean-up I.D.'s for each of the known viruses are listed
in brackets below:

Oropax [Oro]                    Pakistani Brain [Brain]
4096 [4096]                     Chaos [Chaos]
AIDS Trojan [AIDS]              Virus-90 [90]
Amstrad [Amst]                  Devil's Dance [Dance]
Holland Girl [Holland]          Datacrime II-B [Crime-2B]
Do-Nothing virus [Nothing]      Sunday virus [Sunday]
Lisbon virus [Lisb]             Typo COM virus [Typo]
DBASE virus [Dbase]             Ghost / Ghostball Boot  
Ghost COM Version [Ghost-C]     New Jerusalem [Jeru]
Alabama [Alabama]               Yankee Doodle [Doodle]
2930 [2930]                     Ashar [Brain]
AIDS / Taunt [Taunt]            Disk Killer / Ogre [Killer]
1536 / Zero Bug [Zero]          MIX1 [Mix1]
Dark Avenger [Dav]              3551 / Syslock [Syslock]
Vacsina [Vacs]                  Ohio 
Typo                            Swap / Israeli Boot
Datacrime II [Crime-2]          Icelandic-II / System [Ice-2] 
Pentagon                        3066 / Traceback [3066]
Datacrime-B [Crime-B]           Icelandic [Ice]
Saratoga [Toga]                 405 [405]
1704 Format [170X]              Fu Manchu / 2086 [Fu]
1280 / Datacrime [Crime]        1701 / Cascade [170X]
1704 / Cascade-B [170X]         Stoned / Marijuana [Stoned]
1704 / Cascade [170X]           Ping Pong-B / Cascade Boot [Ping]
Den Zuk                         Ping Pong / Bouncing Dot [Ping]
Vienna-B [Vienna-B]             Lehigh [Lehigh]
Vienna / DOS-62 [Vienna]        Jerusalem-B [Jeru]
Yale / Alameda [Alameda]        Friday 13th COM virus [13]
Jerusalem-A / 1813 [Jeru]       Suriv03 / Jerusalem-E [Jeru]
Suriv02 [jeru-D]                Suriv01 [April]
Taiwan [Taiwan]			  Halloechen [Hal]
Perfume [Fume]				  Joker [Joke]
Icelandic-3 [Ice-3]             1260 [1260]
Virus-101 [101]                 V2000 [2000]
Saturday 14th [Sat14]           1720 [1720]
1210 [1210]                     Christmas Tree [XA1]
1392 [1392]                     Korea [Korea]
2000-B [Solano]                 Kennedy [Kennedy]
Yankee-2 [Doodle2]              Eight Tunes [1971]
June 16th [June16]              V800 [800]
Murphy [Murphy]                 Shake [Shake]
Fish-6 [Fish]                   Liberty [Liberty]
Frere Jacques [frere]           Slow [Slow]
W-13 [W13]                      JoJo [JoJo]
Victor [Victor]                 5120 [5120]
June 13 [J13]                   Form [Form]
Print Screen [Prtscr]           Microbes [Micro]
Joshi [Joshi]                   Vp [VP]
RedX [RedX]                     1024 [1024]
Sorry [Sorry]                   1381 [1381]
Aramagedon [Arma]               Taiwan-3 [T-3]
VHP [VHP]                       Stoned-II [S-2]
1008 [1008]                     Flash [Flash]
Fellowship [Fellow]             Flip [Flip]
Doom2 [Dm2]                     Wolfman [Wolf]
Plastique [Plq]                 V2100 [2100]
1226 [1226]                     Ontario [Ont]
P1 [P1]                         400 [400]
AirCop [AirCop]                 1253 [1253]
Mardi Bros. [Mardi]             TCC [TCC]
651 [651]                       Anthrax [Atx] 

REGISTRATION:
	CLEAN-UP is a required registration shareware product.  It may
be use in a home environment for a registration fee of $35.  Please
use the enclosed REGISTER.DOC file for registration information. 
For corporate, organizational or agency use, however, a corporate
site license is required.  For site license information please
contact:

			McAfee Associates
			4423 Cheeney Street
			Santa Clara, CA 95054
			408 988 3832 (voice)
			408 988 4004 (BBS)
			408 970 9727 (Fax)



```
{% endraw %}

## FILE2095.TXT

{% raw %}
```
Disk No: 2095
Disk Title: VIRUSCAN, VSHIELD, AND CLEAN-UP
PC-SIG Version: 1.66

Program Title: VIRUSCAN
Author Version: 66
Author Registration: $25.00
Special Requirements: None.

Stop viruses in their tracks!  VIRUSCAN scans diskettes or entire
systems for known viruses, identifies the intruder, removes the virus,
and often repairs any damage to the system.

VIRUSCAN looks for any preexisting PC virus infection.  Over 75
different virus strains and numerous sub-varieties for each strain can
be identified by this program.  These viruses include the ten most
common viruses that account for over 95% of all reported PC
infections.  The documentation lists all the viruses by name.  The DO-
NOTHING VIRUS, LISBON VIRUS, GHOST VIRUS-GHOSTBALL, NEW JERUSALEM, DISK
KILLER-OGRE, DARK AVENGER, 1514- DATACRIME II, ICELANDIC-II, and The
PAKISTANI BRAIN, to name a few.

It indicates the specific files or system areas infected and
identifies the virus strain that's caused the infection.  Removal can
then be done automatically, or as a separate step.


Program Title: VSHIELD (formerly Scanres)
Author Version: 66
Author Registration: $25.00
Special Requirements: None.

The memory resident version of VIRUSCAN, SCANRES prevents viruses from
getting into your system in the first place.  It monitors and scans
programs as they're loaded and prevents infected programs from
executing.  It also scans specific areas of the system -- the boot
sector, partition table, hidden files, command interpreter and itself,
when it is first executed.  It's your first line of defense against
virus attacks.


Program Title: CLEAN-UP
Author Version: 60
Author Registration: $35.00
Special Requirements: None.

The last in VIRUSCAN's trilogy of defense, CLEAN-UP kills
and removes computer viruses, and in most instances, repairs infected
files, reconstructs damaged programs and returns the system to normal
operation.  It works for all viruses identified by the current
version of VIRUSCAN.

CLEAN-UP searches the entire system looking for the virus that
you wish to remove.  When found, the infected file is identified, the
virus is isolated and removed, and for the more common viruses, the
infected file is repaired.  If the file is infected with a less common
virus that can't be separated from the file, the infected
file is wiped from the disk and deleted from the system.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989, 1990 PC-SIG, Inc.
```
{% endraw %}

## SCANV66B.DOC

{% raw %}
```
                    VIRUSCAN  Version 4.5V66-B
   Copyright 1990 by McAfee Associates.  All rights reserved.
                        McAfee Associates
                       4423 Cheeney Street
                     Santa Clara, CA  95054
                       408 988 3832 (phone)
                       408 970 9727 (fax)
                       408 988 4004 (BBS)

Executable Program (SCAN.EXE):
     SCAN contains a self test at load time.  If SCAN has been
modified in any way, a warning will be displayed.  The program will
still continue to check for viruses, however.  In addition,
versions 46 and above are packaged with a VALIDATE program that
will authenticate the integrity of SCAN.EXE.  Refer to the
VALIDATE.DOC instructions for the use of the validation program.
     The validation results for V66-B should be:
                   SIZE: 63,065
                   DATE: 8-13-1990
    FILE AUTHENTICATION:
        Check Method 1 - 4C47
        Check Method 2 - 0AB0

     You may also call the McAfee Associates bulletin board at 408
988 4004 to obtain on-line SCAN.EXE verification data.  The
VALIDATE program distributed with SCAN may be used to authenticate
all future versions of SCAN.

Notes on Version 66-B:
	Version 66-B fixes a bug in the validation removal processing
of SCAN.  Version 66 would not remove validation codes from
validated files unless the /CV option were set.  Version 66-B fixes
this problem.  It also fixes a bug that caused inconsistent results
when certain files (PKZIP is one example) were validated.  If you
have already used V66 to validate your files, then use 66-B to
remove the validation codes put in place by V66 (using /RV), and
then restore the validation codes using the /AV option.  We regret
any inconvenience this may have caused. 

Notes on Version 66:
	We skipped version 65 since a trojan version 65 of SCAN
appeared on a few bulletin boards in March of this year.  Better
safe than sorry.  So this version logically follows version 64 of
SCAN.
	This version of SCAN has added an option to transparently
attach a CRC validation code to all of your executable files, your
boot sector and your partition table.  This will help protect your
system in case a virus unknown to SCAN is encountered.  SCAN will
check these validation codes if requested and will alert the user
to any files or system areas that have changed.  Subsequent
versions of VSHIELD (Version 67 and above) will also check this
validation field if present, and will prevent programs infected
with unknown viruses from executing.
	Version 66 has added 31 new viruses to the list of known
viruses, bringing the current total to 213 viruses.  We have also
added the Joshi, Fish6, Vienna and Zerobug to the list of viruses
that can be non-destructively removed from your system by Clean-
Up.  All four of these viruses are becoming widespread.  
	Of interest in this release are two new viruses that infect
both executable programs and boot sectors.  The 1253 virus, which
activates on December 24th, infects boot sectors of floppies, the
partition table of hard disks and any COM files in the system,
including COMMAND.COM.  The virus originated in Eastern Europe. 
It is very destructive.  The second virus has been named Anthrax,
and is also from Eastern Europe.  This virus infects COM files, EXE
files and the partition table of the hard disk.  Both viruses are
difficult to remove without appropriate detectors and removers. 
	The list of all new viruses added to the SCAN list are
included in the enclosed file - VIRLIST.TXT.  For a detailed
description of each of these viruses, please refer to Patti
Hoffman's VSUM document.  VSUM is copyrighted by Patricia Hoffman.

Introduction:

     VIRUSCAN scans diskettes or entire systems and identifies any
pre-existing PC virus infection.  It will indicate the specific
files or system areas that are infected and will identify the virus
strain which has caused the infection.  Removal can then be done
automatically using the SCAN /D option.  If the infection is
widespread, automatic disinfector utilities are available which
can remove the infected segment of files and repair and restore the
infected programs.
     SCAN version 4.5B66 can identify all 134 known virus strains
and 213 virus sub-strains (varieties).  The 213 viruses include
the ten most common viruses which account for over 95% of all
reported PC infections.  The complete list (in order of most recent
appearance) can be found in the accompanying file: VIRLIST.TXT. 
The VIRLIST.TXT file lists and describes the 111 major strains and
includes the number of known variants of each strain in
parentheses.
     All known viruses infect one of the following areas:  The hard
disk partition table; the DOS boot sector of hard disks or
floppies; or one or more executable files within the system.  The
executable files may be operating system programs, system device
drivers, .COM files, .EXE files, overlay files or any other file
which can be loaded into memory and executed.  VIRUSCAN identifies
every area or file that has become infected and indicates the name
of the virus that has infected each file.  VIRUSCAN can check the
entire system, an individual diskette, a sub-directory or an
individual file for an existing virus.

Operation:

IMPORTANT: Always place VIRUSCAN on a write protected floppy prior
to using it.  This will prevent the program from becoming infected.

     To run VIRUSCAN type:

 SCAN d1: ... d10: /NLZ /M /D /A /E .xxx  /NOMEM /MANY /AV /RV /CV

              (d1-d10 indicate multiple drives that may be scanned)

                 Options are:
			   /NLZ - Do not scan inside compressed LZEXE files
                    /D - Overwrite and Delete infected files
                    /M - Scan memory for all viruses  
                         (See restrictions below)
                    /A - Scan all files 
          /E .xxx .yyy - Scan listed overlay extensions 
                /NOMEM - Skip memory scan
                 /MANY - Scan multiple floppies
                   /AV - Add validation codes to specified files
                   /RV - Remove validation codes from files
                   /CV - Check validation codes

     VIRUSCAN will check each area or file on the designated drive
that could be a host to a virus.  If a virus is found, the name of
the infected file or system area will be displayed, along with the
name of the identified virus.  
	VIRUSCAN will perform both an internal and an external scan
on programs that are compressed with LZEXE.  The compressed file
will first be scanned externally and then it will be automatically
de-compressed and scanned again for an internal infection.  The
/NLZ option will disable the decompression and internal scan
function.
     If the /D option is selected, SCAN will pause after each
infected file is displayed and will ask whether you wish to remove
the infected file.  If <Y> is selected, the file will be
overwritten with the hex code C3 (the Return instruction), and then
deleted.  This option is disallowed for boot sector and partition
table infections.  Use the shareware M-DISK utilities to remove
boot sector or partition table viruses.
     If the /M option is chosen, SCAN will search the first 640K
of memory for all known memory resident viruses.  Selecting this
option may cause false alarms if you are running SCAN in
conjunction with any other virus detection utility.  It will also
add from 12 seconds to 1 minute to the scanning time.  If the /M
option is not chosen, SCAN will in any case check memory for the
Dark Avenger virus.  If the Dark Avenger is found in memory, SCAN
will display a warning message, with instructions to power down and
re-boot from a clean floppy.

     >>> Do not use the /M option if you are running SCANRES V42
         or earlier.  Please upgrade SCANRES to the current version
         first.  Otherwise false alarms will result.

     Use the /E option to scan specified overlay files.  Scan will
default to OVL, OVG, OV1, OV2, OVR, SYS, BIN and PIF.  Scan will
search these overlay files for any viruses capable of infecting
overlays.  If you are using an application with overlay extensions
other than the defaults, then specify the extension names (up to
three) using the /E option.  Example:

          SCAN C: /E .ABC .XYZ .123

     It is important to note that viruses that infect overlays
always infect the original .COM, .EXE, .BIN or .SYS files that call
the overlay.  So the virus will always be discovered whether or not
the overlay is scanned.  To get rid of the virus, however, you must
identify and remove it from overlays.  If you do not know whether
an application uses overlay files, and SCAN has discovered one of
the viruses capable of infecting overlays, then use the /A option
to search all files.  
          NOTE:  The /A option will require a substantial amount
          of time to complete the scan.  Use it only after a .COM
          or .EXE infection has been discovered by VIRUSCAN, or
          when a new diskette or set of program files is to be
          scanned.


VALIDATION CHECKING for UNKNOWN VIRUSES:

	Version 66 and above allow the user to add validation codes
to specified files or areas of the system.  All COM and EXE files,
as well as the boot sector and partition table can be validated. 
The validation process adds 10 bytes to each validated file.  To
validate the entire disk type:

                          SCAN d: /AV

	This command will cause SCAN to add the validation codes to
all COM and EXE files.  SCAN will also create a hidden file in the
root of the designated drive that contains validation information
for the partition table, the boot sector, and COMMAND.COM.  The
command:

                   SCAN d:\TEMP\NEWFILE.EXE /AV

	will cause SCAN to add a validation code to the file
NEWFILE.EXE.  

Note:  SCAN will not create the file containing codes for the boot
sector and partition table unless the entire disk is selected for
validation.

     To remove the validation codes from validated files, use the
/RV option.  To cause SCAN to check the validation codes, use the
/CV option.  the /AV, /RV, and /CV options may be used in
conjunction with any other SCAN options.
			
     VIRUSCAN will require approximately 3 minutes of run time for
each 1,000 files on the designated drive.  If the /CV option is
selected, the run time will increase by 25%.
                    
WARNING:  Some systems, notably older Zenith PCs and some Hewlett
Packard models, use a non-standard boot sector or partition table
program.  These programs may modify the boot sector or partition
table each time the system is booted.  If you are experiencing a
warning flag from SCAN indicating continual changes in your boot
sector or partition table, refer to your system's owner's guide to
determine whether your system uses such a self-modifying boot
program.

Exit Codes:

     SCAN will exit with the following exit codes:

               0 - Normal termination, no viruses found
               1 - One or more viruses found
               2 - Abnormal termination (Error)
                    
Registration:

     A registration fee of $25 is required for the use of VIRUSCAN
by individual home users.  Please send registrations to the address
below.  This registration covers the copy currently in use and
any future versions for one year, providing they are obtained from
the McAfee Associates bulletin board or other public or private
board.  Diskettes will not be mailed unless specifically requested.
Add $9 for diskette mailings.  The McAfee Associates board number
is - 408 988 4004 - 1200/2400, N,8,1; 5 lines.

Corporate and organizational use:

     Corporate site licenses are required for corporate, agency and
organizational use.  For site license information contact:
               McAfee Associates
               4423 Cheeney Street
               Santa Clara, CA  95054
               408 988 3832

Scanning Networks:

     VIRUSCAN works only on stand-alone PCs.  If you are in a
corporate environment using local area networks you will need to
run NETSCAN.  NETSCAN is not a shareware product.  Site licenses
are available for NETSCAN through McAfee Associates - 408 988 3832.

Virus Removal:

     What do you do if a virus is found?  Well, if you are a
registered VIRUSCAN user, you may contact McAfee Associates for
free assistance in manually removing the virus or for information
on disinfection utilities.  Automatic disinfectors are available
for the majority of the known viruses and are available from McAfee
Associates.  We strongly recommend that you get experienced help
in dealing with many of the viruses, particularly partition table
and boot sector infections.  If you are not a registered user, the
following steps should be followed:

     Boot sector infections:
     Power down the system.  Power up and boot from an uninfected,
     write protected floppy.  Execute the DOS SYS command to
     attempt an overwrite of the boot sector.  This works in many
     cases.  If this does not work, backup all data files and
     perform a low level format of the disk.

     Executable file infections:
     Power down system.  Boot from clean, write protected floppy. 
     Remove all infected files.  Replace from the original
     distribution diskettes.

     Partition table infections:
     Without a removal utility, the only option is to low level
     format the media.

     Disinfecting utilities are available from McAfee Associates
     for the majority of the common viruses.  These utilities
     remove the virus and repair the infected files.  If you are
     not a registered user of VIRUSCAN, you may purchase these
     utilities from:

          McAfee Associates
          4423 Cheeney Street
          Santa Clara, CA 95054
          408 988 3832

          BBS: 408 988 4004


```
{% endraw %}

## VALIDATE.DOC

{% raw %}
```
                      VALIDATE Version 0.2
					From McAfee Associates   408 988 3832


	VALIDATE is a file authentication program that may be used to
check shareware and other software for signs of tampering.  The
program uses two different methods to generate CRC checks for
designated files and displays the results.  The dual CRC checks
ensures a high level of security.  The results may then be compared
with validation data published by the author or obtained from any
reliable information source.  The Computer Virus Industry
Association, for example, maintains an on-line validation service
for participating shareware authors.  You may contact the CVIA
bulletin board at 408 988 4004 to access up-to-date validation data
for VIRUSCAN, SCANRES, SHEZ, LIST and other shareware programs. 
You need only run VALIDATE against the program in question, obtain
the authentication numbers and compare those numbers to the ones
on file in the on-line data base.  If they match, you can be
assured that the program has not been tampered with. 

	To run VALIDATE, type:

		VALIDATE d:\path\filename.ext

	The program will display the following validation information:

			     Size: (Number of Bytes)
			     Date: (File Creation Date)
	File Authentication:
		Check Method 1 - (4 digit CRC)
		Check Method 2 - (4 digit CRC)

	You may copy and distribute this program at no charge.  We ask
that you distribute the program with this documentation.  Please
report virus infection and verified instances of tampering to:

		Computer Virus Industry Association
		4423 Cheeney Street
		Santa Clara, CA 95054
		408 727 4559
```
{% endraw %}

## VIRLIST.TXT

{% raw %}
```
            VIRUS CHARACTERISTICS LIST  V66
                                 Copyright 1989, McAfee Associates
                                                 408 988 3832

The following list outlines the major characteristics of the known
IBM PC and compatible virus strains identified by SCAN.  Beginning with 
version 63 of the list, we are including the number of known varieties
of each strain.  This number is listed in parenthesis beside the name 
of the strain.  The total number of known viruses are summed at the 
end of the list.  For version 66, and above, the Clean-Up virus I.D. 
code has been added in brackets.  This was added to facilitate the use 
of SCAN shells and on-line virus help programs such as Virus Rescue.  
A column for "Stealth' viruses has also been added.

==========================================================================

Infects Fixed Disk Partition Table-----------------------+
Infects Fixed Disk Boot Sector-------------------------+ |
Infects Floppy Diskette Boot ------------------------+ | |
Infects Overlay Files------------------------------+ | | |
Infects EXE Files--------------------------------+ | | | |
Infects COM files------------------------------+ | | | | |
Infects COMMAND.COM--------------------------+ | | | | | |
Virus Remains Resident---------------------+ | | | | | | |
Virus Uses Self-Encryption---------------+ | | | | | | | |
Virus Uses STEALTH Techniques----------+ | | | | | | | | |
                                       | | | | | | | | | |  Increase in
                                       | | | | | | | | | |   Infected
                                       | | | | | | | | | |   Program's
                                       | | | | | | | | | |     Size
                                       | | | | | | | | | |      |
                                       | | | | | | | | | |      |
Virus                   Disinfector    V V V V V V V V V V      V     Damage
-----------------------------------------------------------------------------
Anthrax - Boot  [Atx]      M-Disk      . . x . . . . . . x     N/A    O,P,D
Anthrax - File  [Atx]      Clean-Up    . . x x x x . . . .    1206    O,P,D
651  [651]                 Clean-Up    . . x . x . . . . .     651    O,P,D
TCC  [TCC]                 Clean-Up    . . . x x x x . . .    4909    O,P,D,L
Leprosy                    Clean-Up    . . x x x x x . . .  Overwrites
Mardi Bros.  [Mardi]       M-DISK      . . x . . . . x x .     N/A    B,O
1253 - Boot  [1253]        M-DISK      . . x . . . . x x x     N/A    O,P,D,L
1253 - COM  [1253]         Clean-Up    . . x x x . . . . .    1253    O,P,D,L
AirCop  [AirCop]           M-DISK      . . x . . . . x . .     N/A    B,O
400  (5)  [400]            Clean-Up    . . x . x . . . . .    Vary    O,P,D
P1 (3)  [P1r]              Clean-Up    . x x . x . . . . .    Vary    O,P,D,L
Ontario  [Ont]             Clean-Up    . x x x x x . . . .    Vary    O,P,D
1226 (3)  [1226]           Clean-Up    . x x x x x x . . .    1226    O,P,D
V2100  [2100]              Clean-Up    . . x . x x . . . .    2100    O,P,D,L
Plastique (3)  [P1q]       Clean-Up    . . x x x x x . . .    3012    O,P,D
Wolfman  [Wolf]            Clean-Up    . . x x x x . . . .    2064    O,P
Doom2  [Dm2]               Clean-Up    . . x . x x . . . .    2504    O,P,D,L
Flip  [Flip]               Clean-Up    . x x x x x x . . .    2343    O,P,D,L
Fellowship  [Fellow]       Clean-Up    . . x . . x . . . .    1022    O,P,D,L
Flash  [Flash]             Clean-Up    . . x x x x . . . .     688    O,P,D,L
1008  [1008]               Clean-Up    . x x x x . . . . .    1008    O,P,D,L
Stoned-II  [Stoned]        M-DISK      . . x . . . . x . x     N/A    O,B,L
Taiwan3  [T3]              Clean-Up    . . x x x x x . . .    2905    O,P,D,L
Armagedon  [Arma]          Clean-Up    . . x x x . . . . .    1079    O,P
1381  [1381]               Clean-Up    . . . . . x x . . .    1381    O,P
Tiny (7)  [Tiny]           Clean-up    . . . x x . . . . .     163    O,P
Subliminal  [Sub]          Clean-Up    . . x x x . . . . .    1496    O,P
Sorry  [Sorry]             Clean-Up    . . x x x . . . . .     731    O,P
RedX  [Redx]               Clean-Up    . . . x x . . . . .     796    O,P
1024  [1024]               Clean-Up    . . x x x . . . . .    1024    O,P
Joshi  [Joshi]             M-DISK      x . x . . . . x x x     N/A    B,O,D
Microbes  [Micro]          M-DISK      . . x . . . . x x .     N/A    B,O,D
Print Screen  [Prtscr]     M-DISK      . . x . . . . x x .     N/A    B,O,D
Form  [Form]               M-DISK      . . x . . . . x x .     N/A    B,O,D
July 13th  [J13]           Clean-Up    . x . . . x . . . .    1201    O,P,D,L
5120 (2)  [5120]           Clean-Up    . . . x x x x . . .    5120    O,P,D,L
Victor  [Victor]           Clean-Up    . . x x x x x . . .    2458    P,D,L
JoJo  [JoJo]               Clean-Up    . . x . x . . . . .    1701    O,P
W-13 (2)  [W13]            Clean-Up    . . . . x . . . . .     532    O,P
Slow  [Slow]               Clean-Up    . x x . x x x . . .    1721    O,P,L
Frere Jacques  [Frere]     Clean-Up    . . x . x x x . . .    1811    O,P
Liberty  [Liberty]         Clean-Up    . . x x x x x . . .    2862    O,P
Fish-6  [Fish]             Clean-Up    x x x x x x x . . .    3584    O,P,L
Shake  [Shake]             Clean-Up    . . x . x . . . . .     476    O,P
Murphy  [Murphy]           Clean-Up    . . x x x x x . . .    1277    O,P
V800  [V800]               Clean-Up    x x x . x . . . . .    none    O,P,L
Kennedy  [Kennedy]         Clean-Up    . . x . x . . . . .     308    O,P
8 Tunes/1971  [1971]       Clean-Up    . . x . x x x . . .    1971    O,P
Yankee - 2  [Doodle2]      Clean-Up    . . . . x x . . . .    1961    O,P
June 16th  [June16]        Clean-Up    . . . x x . . . . .    1726    F,O,P,L
XA1  [XA1]                 Clean-Up    . x . . x . . . . .    1539    F,O,P,L
1392  [1392]               Clean-Up    . . x x x x . . . .    1392    O,P,L
1210  [1210]               Clean-Up    . . x . x . . . . .    1210    O,P,L
1720  [1720]               Clean-Up    . . x . x x x . . .    1720    F,O,P,L
Saturday 14th  [Sat14]     Clean-Up    . . x . x x x . . .     685    F,O,P,L
Korea (2)  [Korea]         M-DISK      . . . . . . . x x .     N/A    B,O
Vcomm (3)  [Vcomm]         Clean-Up    . . . . . x . . . .    1074    O,P,L
ItaVir  [Ita]              Clean-Up    . . . . . x . . . .    3880    O,P,L,B
Solano (2)  [Solano]       Clean-Up    . . x . x . . . . .    2000    O,P,L
V2000 (3)  [2000]          Clean-Up    . . x x x x x . . .    2000    O,P,L
1559  [1559]               SCAN/D      . . x x x x . . . .    1554    O,P,L
512 (4)  [512]             SCAN/D      x . x x x . . . . .    none    O,P,L
EDV (2)  [EDV]             M-DISK      x . x . . . . x x x     N/A    B,O
Joker  [Joke]              Clean-Up    . . x x x . . . . .            O,P
Icelandic-3  [Ice-3]       Clean-Up    . . x . . x . . . .     853    O,P
Virus-101  [101]           Clean-Up    . x x x x x x x . .    2560    P
1260  [1260]               Clean-Up    . x . . x . . . . .    1260    P
Perfume (2)  [Fume]        Clean-Up    . . . . x . . . . .     765    P
Taiwan (2)  [Taiwan]       Clean-Up    . . . . x . . . . .     708    P
Chaos  [Chaos]             MDISK       . . x . . . . x x .     N/A    B,O,D,F
Virus-90  [90]             Clean-Up    . . x . x . . . . .     857    P
Oropax (3)  [Oro]          Clean-Up    . . x . x . . . . .    2773    P,O
4096 (2)  [4096]           Clean-Up    x . x x x x x . . .    4096    D,O,P,L
Devil's Dance  [Dance]     Clean-Up    . . x . x . . . . .     941    D,O,P,L
Amstrad (5)  [Amst]        Clean-Up    . . . . x . . . . .     847    P
Payday  [Payday]           Clean-Up    . . x . x x x . . .    1808    P
Datacrime II-B  [Crime-2]  Clean-Up    . x . x x x . . . .    1917    P,F
Sylvia/Holland  [Holland]  Clean-Up    . . . . x . . . . .    1332    P
Do-Nothing  [Nothing]      Clean-Up    . . x . x . . . . .     608    P
Sunday (2)  [Sunday]       Clean-Up    . . x . x x x . . .    1636    O,P
Lisbon (2)  [Lisb]         Clean-Up    . . . . x . . . . .     648    P
Typo/Fumble  [Typo]        Clean-Up    . . x . x . . . . .     867    O,P
Dbase  [Dbase]             Clean-Up    . . x . x . . . . .    1864    D,O,P
Ghost Boot  [Ghost]        MDISK       . . x . . . . x x .     N/A    B,O
Ghost COM   [Ghost]        Clean-Up    . . . . x . . . . .    2351    B,P
New Jerusalem  [Jeru]      Clean-Up    . . x . x x x . . .    1808    O,P
Alabama (2)  [Alabama]     Clean-Up    . . x . . x . . . .    1560    O,P,L
Yank Doodle (3) [Doodle]   Clean-Up    . . x . x x . . . .    2885    O,P
2930  [2930]               Clean-Up    . . x . x x . . . .    2930    P
Ashar  [Brain]             Clean-Up    . . x . . . . x . .     N/A    B
AIDS (3)  [Aids]           Clean-Up    . . . . x . . . . . Overwrites
Disk Killer (2)  [Killer]  Clean-Up    . . x . . . . x x .     N/A    B,O,P,D,F
1536/Zero Bug  [Zero]      Clean-Up    . . x . x . . . . .    1536    O,P
MIX1  [Ice]                Clean-Up    . . x . . x . . . .    1618    O,P
Dark Avenger (2) [Dav]     Clean-Up    . . x x x x x . . .    1800    O,P,L
3551/Syslock  [Syslock]    Clean-Up    . x . . x x . . . .    3551    P,D
VACSINA (2)  [Vacs]        Clean-Up    . . x . x x x . . .    1206    O,P
Ohio  [Ohio]               MDISK       . . x . . . . x . .     N/A    B
Typo Boot  [Typo]          MDISK       . . x . . . . x x .     N/A    O,B
Swap Boot  [Swap]          MDISK       . . x . . . . x . .     N/A    B
Datacrime II  [Crime-2]    Clean-Up    . x . . x x . . . .    1514    P,F
Icelandic II  [Ice-2]      Clean-Up    . . x . . x . . . .     661    O,P
Pentagon  [Pentagon]       MDISK       . . . . . . . x . .     N/A    B
Traceback (2)  [3066]      M-3066      . . x . x x . . . .    3066    P
Datacrime-B  [Crime-B]     Clean-Up    . x . . x . . . . .    1168    P,F
Icelandic (2)  [Ice]       Clean-Up    . . x . . x . . . .     642    O,P
Saratoga  [Ice]            Clean-Up    . . x . . x . . . .     632    O,P
405  [405]                 Clean-Up    . . . . x . . . . . Overwrites
1704 Format  [170x]        Clean-Up    . x x . x . . . . .    1704    O,P,F
Fu Manchu (2)  [Fu]        Clean-Up    . . x . x x x . . .    2086    O,P
Datacrime (2)  [Crime]     Clean-Up    . x . . x . . . . .    1280    P,F
1701/Cascade  [170x]       Clean-Up    . x x . x . . . . .    1701    O,P
CASCADE-B (9)  [170x]      Clean-Up    . x x . x . . . . .    1704    O,P
Stoned (2)  [Stoned]       Clean-Up    . . x . . . . x . x     N/A    O,B,L
1704/CASCADE  [170x]       Clean-Up    . x x . x . . . . .    1704    O,P
Ping Pong-B (2) [Ping]     Clean-Up    . . x . . . . x x .     N/A    O,B
Den Zuk (3)  [Zuk]         MDISK       . . x . . . . x . .     N/A    O,B
Ping Pong (3) [Ping]       Clean-Up    . . x . . . . x . .     N/A    O,B
Vienna-B  [Vienna]         Clean-Up    . . . . x . . . . .     648    P
Lehigh  [Lehigh]           Clean-Up    . . x x . . . . . . Overwrites P,F
Vienna/648 (14) [Vienna]   M-VIENNA    . . . . x . . . . .     648    P
Jerusalem-B  [Jeru]        Clean-Up    . . x . x x x . . .    1808    O,P
Alameda (2)  [Alameda]     Clean-Up    . . x . . . . x . .     N/A    B
Friday 13th COM  [Fri13]   Clean-Up    . . . . x . . . . .     512    P
Jerusalem (9)  [Jeru]      Clean-Up    . . x . x x x . . .    1808    O,P
SURIV03  [SurivB]          Clean-Up    . . x . x x x . . .            O,P
SURIV02  [SurivA]          Clean-Up    . . x . . x . . . .    1488    O,P
SURIV01  [SurivA]          Clean-Up    . . x . x . . . . .     897    O,P
Brain (3)  [Brain]         Clean-Up    . . x . . . . x . .     N/A    B

Total Known Viruses - 213

Legend:

Damage Fields -	B - Corrupts or overwrites Boot Sector
				O - Affects system run-time operation
				P - Corrupts program or overlay files
				D - Corrupts data files
				F - Formats or erases all/part of disk
				L - Directly or indirectly corrupts file linkage

Size Increase -	The length, in bytes, by which an infected
               	program or overlay file will increase

Characteristics - x - Yes
                  . - No

Disinfectors -	SCAN/D 	 - VIRUSCAN with /D option
             	SCAN/D/A	 - VIRUSCAN with /D and /A options
             	MDISK/P	 - MDISK with "P" option
              	All Others - The name of disinfecting program
           Note:
                  The SCAN /D option will overwrite and then delete the
                  entire infected program.  The program must then be
                  replaced from the original program diskette.  If you wish
                  to try and recover an infected program, then use the
                  named disinfector if available.
```
{% endraw %}

## VSHLD66.DOC

{% raw %}
```
 					VSHIELD.EXE 2.0 V66
					Copyright McAfee Associates 1989, 1990


NOTE:  This product may not be used in a business, corporate,
organizational, government or agency environment without a
negotiated site license.  Contact McAfee Associates for
information:

		408 988 3832 - Voice phone
		408 970 9727 - FAX
		408 988 4004 - BBS System
 

Executable Program (VSHIELD.EXE):
	Versions 46 and above are packaged with a VALIDATE program
that will authenticate the integrity of VSHIELD.EXE.  Refer to the
VALIDATE.DOC instructions for the use of the validation program.
	The validation results for V66 should be:
			    SIZE: 47,167
			    DATE: 8-10-1990
    FILE AUTHENTICATION:
		Check Method 1 - 474A
		Check Method 2 - 0957

	You may also call the McAfee Associates bulletin board at 408
988 4004 to obtain on-line VSHIELD.EXE verification data.  The
VALIDATE program distributed with VSHIELD may be used to
authenticate all future versions of VSHIELD.

Notes on Version 66:
	Version 66 now prevents infection from 31 new viruses
discovered since version 64.  Please refer to VIRLIST.TXT for a
schematic description of the new viruses.

Introduction:

	VSHIELD is a memory resident program that  prevents
viruses from getting into your system.  It monitors and scans
programs as they are loaded and prevents infected programs from
executing.  It also prevents boot viruses from entering the system
by trapping each warm-boot request (Ctrl-Alt-Del), and disallowing
re-boots from infected diskettes.  It also scans specific areas of
the system - the boot sector, partition table, hidden files,
Command Interpreter and itself, when it is first executed.  Thus,
if the power is turned off and then the system is booted from an
infected floppy (while VSHIELD is not running), VSHIELD will detect
any infection the next time VSHIELD is loaded.
	The memory resident module -- VSHIELD.EXE - will identify the
virus strain which has caused the infection in all cases of the
known viruses.  It remains active in your system at all times after
it is loaded.
	VSHIELD version 2.0V66 can identify and prevent infection from
133 major virus strains and 213 sub-strains.  The 213 viruses
include the ten most common viruses which account for over 95% of
all reported PC infections.  The complete list (in order of most
recent appearance) is outlined in the accompanying file:
VIRLIST.TXT.

	These viruses infect one of the following areas:  The hard
disk partition table; the DOS boot sector of hard disks or
floppies; or one or more executable files within the system.  The
executable files may be operating system programs, system device
drivers, .COM files, .EXE files, overlay files or any other file
which can be loaded into memory and executed.  VSHIELD identifies
the area or file that has become infected and indicates the name
of the virus that has infected each area.  
	When an infection is identified, the VIRUSCAN non-resident
system scanner should be used to scan the entire system and
determine the extent of the infection.  If you do not have the
VIRUSCAN non-resident program, it may be downloaded from the
HomeBase BBS at 408 988 4004. 


Operation:

IMPORTANT: First place VSHIELD on a write protected floppy prior
to installing it.  This will ensure a valid copy in the event that
the program becomes infected.

	To install VSHIELD, place the following line as the first
	entry in your AUTOEXEC.BAT file:

		VSHIELD [/SWAP[pathname] /F[pathname] /NB /NOMEM]
			
			/SWAP is an optional parameter that tells VSHIELD
			 to install only its kernel as memory resident.  The
			 remaining functions will be swapped in and out of
			 memory as needed, from the hard disk or from RAM
			 disk.  The SWAP paramater may also use an optional
			 pathname to specify where the swap file should be
			 kept. The default is the VSHIELD.EXE home location.

			 NOTE:  Use the SWAP parameter if your system has
			 limited free memory space available for memory
			 resident programs.  With the SWAP parameter set,
			 VSHIELD requires less than 3K of resident memory.

			/F is a required parameter if the SWAP function is
			 used on a system running DOS version 2 or earlier.
			 The /F parameter tells VSHIELD where it has been
			 loaded from.  
   
			/NB is an optional parameter that tells VSHIELD
			 not to check the boot sector of floppies for
			 viruses on a re-boot.  This option should only
			 be used if the re-boot check confilcts with 
			 other memory resident programs.

			/NOMEM is an optional parameter that tells VSHIELD
			 not to perform a memory scan as it loads.

	Examples:

			VSHIELD /SWAP  

			VSHIELD /SWAP d:\TEMP

			VSHIELD /SWAP /F C:\  (For DOS 2.0)

			VSHIELD /NB /NOMEM

	Place VSHIELD.EXE in the root directory of your hard drive. 
VSHIELD will then become active each time the system is
powered-on or re-booted.  It will check the critical areas of the
system for viruses, including itself, and then monitor all program
loads.  As programs are loaded, VSHIELD will scan the programs
looking for viruses.  If a virus is found, VSHIELD will display a
warning message and name the infection.  The infected program will
then be terminated.  If a re-boot is attempted while an infected
diskette is in the bootable floppy drive, VSHIELD will disallow the
boot attempt and will display a warning message.
	Unlike many memory resident virus filter programs, VSHIELD
will not cause false alarms.  If a warning message is issued by
VSHIELD, you can be assured the identified program or diskette is
infected.  Also, since it does not attempt to monitor file I/O or
normal disk accesses, it will not conflict with other memory
resident programs.

**************************************
MEMORY RESIDENT and NETWORK CONFLICTS:
**************************************

	VSHIELD should normally be loaded as the first entry in the
AUTOEXEC file.  However, disk cache programs that allow cache
writes as well as reads, such as PC Tools' PC-Cache, will not work,
and may cause severe damage to the disk data, unless they are
loaded before any other memory resident programs.  If you are
running a disk cache routine that caches reads AND writes to the
disk, then place VSHIELD at the end of the AUTOEXEC file.  
	If you place VSHIELD at the end of the AUTOEXEC file, then the
Write Delay paramaters for the cache program must be set to zero. 
If the Write Delay for the cache program is set to any value other
than zero, then data loss can occur if a re-boot is attempted in
the middle of a write to the disk.  Refer to your cache program's
user manual to determine how to set the write delay.

     VSHIELD must also be placed at the end of the AUTOEXEC.BAT
file if you are running in a local area network environment (IBM
Token Ring, Novell, Banyan or 3Com).   This is necessary for
VSHIELD to provide the proper protection against viruses that might
reside on the file server.

     If conflicts occur while using the /SWAP option of VSHIELD,
then remove the option and re-boot the system.

NOTE:  VSHIELD is not compatible with WINDOWS/386.


ERROR LEVELS:
	VSHIELD sets the DOS error level after it becomes resident. 
If it finds a virus in the boot sector, operating system, or itself
prior to going resident, it sets the error level thus:

        No viruses found  - 0
        One or more found - 1
        System Error      - 2

REMOVING VSHIELD:
	VSHIELD may be removed from memory by issuing the following
command:

               VSHIELD  /REMOVE

	This will de-install the program and remove it from memory. 
If there are other memory resident programs that have hooked the
same interrupts as VSHIELD and which have been loaded after
VSHIELD, it may not be safe to remove the program and VSHIELD will
not de-install.  An error message will be displayed in this
instance.

SYSTEM OVERHEAD:
	VSHIELD requires 3K of system memory when used in swap mode. 
It requires 25K if used in non-swap mode.  It will add an average
of 4 seconds to each program load, and 6 seconds to each re-boot. 
Swap mode will add an additional 600 milliseconds to each program
load.  After a program has loaded and begun execution, however,
VSHIELD will not degrade the performance or speed of the system in
any way.
				
Registration:

	A registration fee of $25 is required for the use of VSHIELD
by individual home users.  Please send registrations to the address
below.  This registration covers the copy currently in use and
future versions for one year, providing they are obtained from the
McAfee Associates bulletin board or other public or private board. 
Diskettes will not be mailed unless specifically requested.  Add
$9 for diskette mailings.  The McAfee Associates board number is
- 408 988 4004 - 1200/2400, N,8,1; 5 lines.

Corporate and organizational use:

	Corporate site licenses are required for corporate, agency and
organizational use.  For site license information contact:
			McAfee Associates
			4423 Cheeney Street
			Santa Clara, CA  95054
			408 988 3832 voice
			408 970 9727 fax

Virus Removal:

	What do you do if a virus is found?  Well, if you are a
registered VIRUSCAN or VSHIELD user, you may contact McAfee
Associates for free assistance in manually removing the virus.  We
strongly recommend that you get experienced help in dealing with
many of the viruses, particularly partition table and boot sector
infections.  If you are not a registered user, the following steps
should be followed:

	Boot sector infections:
	Power down the system.  Power up and boot from an uninfected,
     write protected floppy.  Execute the DOS SYS command to
     attempt an overwrite of the boot sector.  This works in many
     cases.  If this does not work, backup all data files and
     perform a low level format of the disk.

	Executable file infections:
	Remove all infected files.  Replace from the original
     distribution diskettes.

	Partition table infections:
	Without a removal utility, the only option is to low level
     format the media.

	Disinfecting utilities are available from McAfee Associates
     for the majority of the common viruses.  If you are not a
     registered user of VIRUSCAN, you may purchase these utilities
     from:

		McAfee Associates
		4423 Cheeney Street
		Santa Clara, CA 95054
		408 988 3832

		BBS: 408 988 4004


				Version Notes

Version 64:
	Version 64 has been completely re-designed to reduce required
memory and to speed the virus checking process.  VSHIELD now uses
an overlay structure that requires less than 3K of resident memory
space, using the /SWAP parameter, and the processing time has been
reduced by 20%.  All anti-virus functions, including boot virus
protection, have been retained.	

Version 63:
	Version 63 has been one of the most painful versions we have
put together.  There have been 17 new viruses and virus sub-strains
discovered in the 35 days since the release of version 62-B.  	
	In addition, we've been struggling with the issue of how to
count viruses in a meaningful way that does not place us in a
seemingly disadvantageous competitive position.  For example:
Numerous anti-virus programs advertise the number of viruses that
they are able to block, and these numbers range from less than 50
to over 100.  On analysis, these numbers included all of the known
sub-strains of the viruses, and their virus count by our
classification was always substantially less.  We group viruses by
major type, where possible, to make it easier to manage, both from
an identification and removal basis.  But on a sheer numbers
comparison, VSHIELD appears in a weaker light.  After careful
thought, we decided to stick with our classification scheme, but
in the VIRLIST.TXT we will list the known variants detected in
parentheses.  By the competition's counting scheme, we now block
167 viruses.  By our count, we block 97.   
	The 17 new viruses and new sub-strains added for version 63
have come from a variety of sources.  Vesselin Bontchev from
Bulgaria submitted three new variants of the 512, one new variant
of the W-13 virus and two entirely new viruses that have surfaced
in Eastern Europe.  Dave Chess from IBM provided me with three new
viruses collected through the various IBM contacts.  Patricia
Hoffamn provided one new virus and two new variants submitted from
users of the FidoNet network.  The Icelandic virus researcher
Fridrik Skulason provided one new virus.  The remaining four were
submitted directly by Homebase users.  The VIRLIST.TXT document
describes the main operating characteristics of the new viruses. 
To avoid duplication of effort, I am referring users to Patricia
Hoffman's most current VSUM document for a detailed description of
the new viruses.  This document may be obtained from most bulletin
boards.

Notes on Version 62-B:
	Version 62-B fixes a bug in version 62 that caused VSHIELD to
work incorrectly in systems that were infected prior to installing
VSHIELD.  An option was also added to allow skipping the floppy
boot sector check at re-boot time.  This option should only be used
if the re-boot check conflicts with other memory resident programs.

Version 62:
	Version 62 identifies four new viruses.  The first is a COM
and EXE infector called the Eight Tunes virus (also called the 1971
virus).  This virus is memory resident and randomly plays one of
eight German folk songs on the system speaker.  It appears to have
no destructive code within it.  The virus adds approximately 1975
bytes to infected files.  A second musical that appeared in the
past two weeks is the Yankee Doodle-2 virus.  This virus is similar
to the first Yankee Doodle, except that it plays the Yankee Doodle
tune as soon as an infected program is executed.  It infects EXE
files only.
	The third virus reported is a small non-memory resident COM
infector called the Kennedy virus.  It appears to have no
destructive or disruptive code but it does contain a reference to
the Kennedy family inside the virus code.  The fourth virus is a
destructive virus called the June 16th virus.  It is a non-resident
virus that infects COM files, including the Command Interpreter
(COMMAND.COM).  On every June 16th, the virus activates and
replaces all FAT entries with the word "ZAPPED".

Version 61:
	Version 61 is able to detect five new viruses reported since
March 1, 1990.  The first virus was submitted by Dave Chess of IBM.
It is a destructive COM and EXE infector called the Saturday the
14th virus.  The virus activates every Saturday that falls on the
14th of any month and causes the first 100 sectors of the A, B, and
C drives to be overwritten.  The net result is loss of all of the
control information for the media assigned to those drives.  The
Partition table, Boot Sector and FAT will be destroyed.  The virus
is 685 bytes long and is memory resident.
	The second new virus is the 1392 virus which was also
submitted by Dave Chess of IBM.  The virus does little damage,
other than corruption of the infected programs, but it does display
the following message:  "SMA KHETAPUNK - Nouvel Band A.M.O.E.B.A." 
No idea what this means.  The virus changes the date of infected
files to the date of infection; it is memory resident; it infects
both COM and EXE files, including COMMAND.COM and is 1392 bytes
long.
	The third new virus is the XA1, or Christmas Tree virus.  It
was submitted by Christoff Fischer of West Germany.  It is an
encrypted virus that only infects COM files.  It activates on April
the 1st and destroys the partition table of the hard disk.  From
December 24th till January 1st it will draw a full screen picture
of a christmas tree when an infected program is executed.  It is
not memory resident.
	The fourth and fifth new viruses were discovered in Spain and
are called the 1720 and 1210 viruses.  The 1720 infects both COM
and EXE files, while the 1210 only infects EXE files.  Little is
know of these viruses at this point other than that the 1720
appears to be destructive.  The viruses were named after their
respective lengths.
	In addition to the above new viruses, version 61 fixes a bug
which caused it to mis-identify the Korea Virus.

Version 60:
	Version 60 identifies four new viruses that have been reported
from widely dispersed parts of the world.  The first virus, the
Solano 2000, or Dyslexia virus, was widely and suddenly reported
in Solano County California in late February and Early March 1990. 
The first person to isolate and submit the virus was Edward
Winters.  The virus is 2000 bytes long, but bears no resemblance
to the V2000 virus from Bulgaria.  The virus infects only COM
files, is memory resident, and infects each file as it is executed.
The virus randomly reverses contiguous numeric data in the video
buffer.  No other damage has been observed.
	The second virus, ItaVir, was submitted by Andrea Salvia and
Emilio Caravaglia of Milan Polytechnic in Milan, Italy.  The virus
is 3,880 bytes long, infects only EXE files and is not memory
resident.  The virus is activated based on the amount of time it
has been in the system (apparently a random time greater than 24
hours) and when activated, it sequentially writes all values
(between 0 and 255) to all I/O ports in the system.  The result is
a dramatic confusion of all peripherals.  The video monitor will
flicker and if the monitor is VGA, will also hiss.  The boot sector
is also wiped out and the system will be non-bootable on power-up.
	The third virus, Vcomm, was submitted by Yuval Tal from
Rehovot, Israel.  It is a non-memory resident EXE infector and is
1074 bytes long.  After the virus is first executed, it infects one
other EXE file and then modifies the in-memory Command Interpreter
so that the DOS COPY command no longer works.  No other disruptions
have been reported from this virus.
	The fourth virus is a boot sector infector submitted from
Korea.  Limited analysis has been done so far on this virus other
than developing an identifier.  The virus has been named the Korea
Virus.

Version 59:
	Version 59 now catches a number of new variations of the
Vienna, Yankee Doodle and Vacsina.  These variations were submitted
by researchers in Eastern Europe.  The variations of the Yankee
Doodle and Vacsina appear to be earlier trial versions of these
viruses.  They don't appear to be harmful, other than corrupting
the programs that are infected and there have been no reported
incidents of infection in the U.S. or Western Europe.  The
variations of Vienna are likewise apparently harmless.  
	A completely new virus has also been added to the scan
list.  Called the V2000 virus, it works as follows:
	It installs resident in memory and then searches for and
infects the Command Interpreter (COMMAND.COM).  It will then infect
any COM or EXE file whenever the file is opened.  Thus, the
executable files are infected whenever they are executed, copied
or manipulated in any way.  The virus hides the length increase of
infected files, much like the 4096, so the user will not see the
increased file lengths in the listing displayed by the DIR command.
	The virus is very virulent and has caused system crashes and
lost data, as well as causing some systems to become non-bootable
after infection.        
                             
Version 58:
	Version 58 includes tests for three new viruses:  EDV, 512 and
1559 viruses.  These viruses are listed in the accompanying
VIRLIST.TXT document.

Version 57:
	SCANRS57 has been substantially modified to prevent infection
by viruses that use variable encryption techniques.  Two such
viruses surfaced for the first time in January.  These viruses
cannot be accurately identified with simple I.D. strings. The
changes to VSHIELD now allow these two viruses to be positively
blocked, and blocking future viruses that use similar techniques
has been simplified.
	Both of these encrypted viruses were written as "experimental"
viruses.  One surfaced on a number of bulletin boards in Minnesota
under the name of COM_AIDS.ZIP.  I have named it the 1260 virus,
although it is based in part on the original Vienna virus.  The
other was written by Patrick Toulme in Washington D.C. (author of
Virus-90).  He has called the new virus Virus-101.  Neither of
these viruses was designed to be destructive - they just attach
themselves to other programs.  However, there is no such thing as
a "harmless" virus.  All viruses corrupt the code of the host
programs, and none enter your system under invitation.  And none
have yet successfully been contained.  Even the most well designed
and coded "harmless" virus will cause problems in some mix of
hardware/BIOS/DOS-Version/Memory-resident-programs etc.  The
Pakistani Brain is a prime example of this.  For this reason we
oppose the public distribution of any kind of virus.  Once
released, they cannot be controlled.  In addition, many lazier
hackers can easily modify "harmless" viruses to become destructive,
and many instances of such modification exist.  Thus, V57 of
VSHIELD includes prevention for both of these viruses.
	In addition to the above two viruses, V57 blocks the Joker
and Perfume viruses from Poland, the Icelandic-3 found by
Fridrik Skulason in Iceland and the Halloechen virus reported by
Christoff Fischer at the University of Karlsruhe in West Germany. 
These are detailed in VIRLIST.TXT.

Version 56:
	Version 56 now does a memory scan for the Dark Avenger and
4096 viruses at the time it is loaded.  It also adds the Chaos and
Taiwan viruses to the list of identifiable viruses.

Version 54:
	Version 54 fixes a bug in V54 that caused false alarms for the
4096 virus in a few instances.  Please do not use version 53.

Version 52:
	Version 52 includes detection for the Devil's Dance virus and
the AIDS Information Trojan program.

Version 50:
	Version 50 detects the Holland Girl virus.  It infects .COM
files and increases their size by 1332 bytes.  It contains the name
and phone number of a girl named Sylvia in Holland.  Potential
damage from this virus is currently unknown.

Version 49:
	A new file - VIRLIST.TXT has been added to the VSHIELD
package.  This file lists the known viruses and describes, in table
format, their critical characteristics.    
	Version 49 also checks for the following new viruses:
		- 	Do-Nothing virus.  This virus was reported in
               October by Uval Tal in Israel.  It infects COM files
               but does no other damage and does not affect the
               system in any observable way.
		-	Lisbon Virus.  This virus was discovered by Jean Luz
               of Lisbon, Portugal in November.  It infects COM
               files and increases the size of infected programs
               by 648 bytes.  It destroys 1 out of 8 infected
               programs by overwriting - @AIDS over the first five
               bytes of the infected program.
		-	Sunday Virus.  This virus was discovered by multiple
               users in the Seattle, Washington area.  It activates
               on Sundays and displays the message - "Today is
               Sunday, why do you work so hard?".  Damage to the
               FAT has been reported from a number of infected
               sites.

Version 48:
	Version 48 identifies the TYPO .COM virus that has been
reported by Joe Hirst of Brighton, U.K.  The virus infects COM
files and garbles data sent to the parallel port.

Version 47:
	Version 47 identifies the DBASE virus reported by Ross
Greenburg of New York.  This virus infects COM files and will
corrupt data in any file with a DBF extension.

Version 46:
	Version 46 now includes a test for the Ghost virus.  This
virus was discovered in September by Fridrik Skulason at Icelandic
University.  The virus infects .COM files and the boot sectors of
hard disks and floppies.  The virus increases the size of infected
COM files by 2,351 bytes, and replaces the boot sector of infected
systems with a boot virus similar to Ping Pong.  Random file
corruption by this virus has been reported.  VSHIELD identifies
both the COM version and the boot version of this virus.

Version 45:
	Version 45 now checks for the New Jerusalem virus discovered
by FIDONET SysOps Jan Terpstra and Ernst Raedecker in the
Netherlands.

Version 44:
	Version 44 fixes a bug in 43.  Version 43 cannot identify the
Jerusalem-B virus (earlier versions of VSHIELD work correctly). 
DO NOT USE version 43.

Version 43:
	Version 43 now identifies the Alabama Virus.  This virus was
discovered by Ysrael Radai at Hebrew University and forwarded to
us through Dave Chess at IBM.  The virus infects .EXE files and
increases their size by 1560 bytes.  It manipulates the file
allocation table and swaps file names so that files are slowly
lost.
	Additional Version 43 enhancements are:
		- Fix to include EXE file searches for DataCrime II
		- Fix for duplicate reporting when Ashar virus is
            identified

Version 42:
	Version 42 of VSHIELD includes an identifier for the Yankee
Doodle Virus.  This virus was discovered in Vienna by Alexander
Holy at the United Nation's office on Sept 30th.  The virus has
reportedly been transmitted to the U.S. through U.N. employees via
the game - 'Outrun'.  The virus plays the tune - 'Yankee Doodle
Dandy' on the system's speaker 17 hours after an infected program
is loaded.  Both COM and EXE files can be infected, and infected
files grow by 2899 bytes.  No knowledge yet of eventual damage
potential.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2095

     Volume in drive A has no label
     Directory of A:\

    CLEAN66  DOC     10395   8-13-90   3:29p
    CLEAN    EXE     77961   8-10-90   4:01p
    VIRLIST  TXT     12892   8-13-90  10:15a
    VALIDATE COM      6485  10-31-89   4:16p
    VALIDATE DOC      1653  10-28-89  10:13p
    VSHIELD  EXE     47167   8-10-90   4:02p
    SCANV66B DOC     14167   8-13-90   3:28p
    VSHLD66  DOC     25905   8-10-90   6:10p
    SCAN     EXE     63065   8-13-90  10:20a
    GO       BAT        38   1-01-80   1:37a
    FILE2095 TXT      2537   8-14-90   3:55a
    GO       TXT      1541   8-14-90   3:58a
           12 file(s)     263806 bytes
                           51200 bytes free
