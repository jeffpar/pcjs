---
layout: page
title: IBM PC DOS 3.20
permalink: /software/pcx86/sys/dos/ibm/3.20/
redirect_from: /disks/pcx86/dos/ibm/3.20/
machines:
  - id: ibm5170-pcdos320
    type: pcx86
    config: /devices/pcx86/machine/5170/ega/2048kb/rev3/machine.xml
    resume: 1
    autoMount:
      A:
        name: PC DOS 3.20 (Disk 1)
      B:
        name: PC DOS 3.20 (Disk 2)
    autoType: \r\r
---

IBM PC DOS 3.20
---------------

PC DOS 3.20 was first announced on March 18, 1986 and released April 1986.  Read the early
[PC Magazine Review](#pc-magazine-review) below.

A [Feature Summary](#feature-summary), along with [Directory Listings](#directory-of-pc-dos-320-disk-1) of the two
360Kb distribution diskettes, are provided below.  This version of PC DOS was also available on one [720Kb Diskette](#directory-of-pc-dos-320-720k).

### IBM PC DOS 3.21

Most copies of IBM PC DOS you'll find these days actually say "3.21" on the DOS diskette and "3.20" on the Supplemental
Programs diskette.  This is because shortly after 3.20 was released, a problem was discovered with IBM's newest keyboard.
The August 1986 issue of PC Magazine ("First Looks", p.54) explains:

> IBM Corp. released **PC DOS 3.21** in the form of a patch to DOS 3.2. Some users get an error when cursor keys
> on the new IBM keyboard (with 12 function keys) won't respond in BASICA edit mode. The patch fix is available free
> from dealers where users purchased DOS 3.2.

Even though the DOS diskette was labeled "3.21", the operating system version was not actually modified; the system still
reported itself as version 3.20.  However, since BASIC and BASICA had been updated, their displayed versions were changed
to "D3.21" and "A3.21", respectively.

IBM apparently decided to slip a few other last-minute changes into the same release, as you can see from the
file timestamps on the 360K diskette (the 720K diskette contains the original files).  The additional modifications
include:

- DISKCOPY.COM
- KEYBFR.COM
- KEYBGR.COM

Changes to KEYBFR.COM and KEYGR.COM are not surprising, since IBM's new 12-function-key keyboard
would have likely affected those programs as well.  However, the reasons for changing DISKCOPY.COM are unclear and
we're unaware of any public explanation from IBM.

### Feature Summary

New features:

- 720KB 3.5" floppy disk support
- Hardware interrupt stack switching support
- Master environment block size can be specified using COMMAND /E:size
- FORMAT supports /T and /N to specify number of tracks and number of sectors

New external commands:

- APPEND (MS-DOS)
- REPLACE
- XCOPY

New CONFIG.SYS commands:

- DRIVPARM
- STACK

New device drivers:

- DRIVER.SYS
- RAMDRIVE.SYS (MS-DOS)

New functions:

- INT 21h functions 440Ch-440Fh, 64h
- INT 2Fh multiplex functions 08h (IBMBIO/DRIVER.SYS), 13h (IBMBIO)
- Device driver command codes 13h, 17h, 18h

### Directory of PC DOS 3.20 (720K)

	 Volume in drive A has no label
	 Directory of A:\

	IBMBIO   COM     16369 12-30-85  12:00p
	IBMDOS   COM     28477 12-30-85  12:00p
	ANSI     SYS      1651 12-30-85  12:00p
	ASSIGN   COM      1536 12-30-85  12:00p
	ATTRIB   EXE      8247 12-30-85  12:00p
	BACKUP   COM      6234 12-30-85  12:00p
	BASIC    COM     19298 12-30-85  12:00p
	BASICA   COM     36396 12-30-85  12:00p
	CHKDSK   COM      9832 12-30-85  12:00p
	COMMAND  COM     23791 12-30-85  12:00p
	COMP     COM      4184 12-30-85  12:00p
	DISKCOMP COM      5792 12-30-85  12:00p
	DISKCOPY COM      6224 12-30-85  12:00p
	DRIVER   SYS      1115 12-30-85  12:00p
	EDLIN    COM      7508 12-30-85  12:00p
	FDISK    COM      8173 12-30-85  12:00p
	FIND     EXE      6416 12-30-85  12:00p
	FORMAT   COM     11135 12-30-85  12:00p
	GRAFTABL COM      1169 12-30-85  12:00p
	GRAPHICS COM      3220 12-30-85  12:00p
	JOIN     EXE      8955 12-30-85  12:00p
	KEYBFR   COM      3291 12-30-85  12:00p
	KEYBGR   COM      3274 12-30-85  12:00p
	KEYBIT   COM      3060 12-30-85  12:00p
	KEYBSP   COM      3187 12-30-85  12:00p
	KEYBUK   COM      3036 12-30-85  12:00p
	LABEL    COM      2346 12-30-85  12:00p
	MODE     COM      6864 12-30-85  12:00p
	MORE     COM       295 12-30-85  12:00p
	PRINT    COM      8976 12-30-85  12:00p
	RECOVER  COM      4297 12-30-85  12:00p
	REPLACE  EXE     11650 12-30-85  12:00p
	RESTORE  COM      6012 12-30-85  12:00p
	SELECT   COM      3826 12-30-85  12:00p
	SHARE    EXE      8580 12-30-85  12:00p
	SORT     EXE      1911 12-30-85  12:00p
	SUBST    EXE      9911 12-30-85  12:00p
	SYS      COM      4620 12-30-85  12:00p
	TREE     COM      3357 12-30-85  12:00p
	VDISK    SYS      3307 12-30-85  12:00p
	XCOPY    EXE     11200 12-30-85  12:00p
	ART      BAS      1879 12-30-85  12:00p
	BALL     BAS      1966 12-30-85  12:00p
	BASIC    PIF       369 12-30-85  12:00p
	BASICA   PIF       369 12-30-85  12:00p
	CIRCLE   BAS      1643 12-30-85  12:00p
	COLORBAR BAS      1427 12-30-85  12:00p
	COMM     BAS      4254 12-30-85  12:00p
	DEBUG    COM     15799 12-30-85  12:00p
	DONKEY   BAS      3572 12-30-85  12:00p
	EXE2BIN  EXE      3063 12-30-85  12:00p
	LINK     EXE     39076 12-30-85  12:00p
	MORTGAGE BAS      6178 12-30-85  12:00p
	MUSIC    BAS      8575 12-30-85  12:00p
	MUSICA   BAS     13431 12-30-85  12:00p
	PIECHART BAS      2180 12-30-85  12:00p
	SAMPLES  BAS      2363 12-30-85  12:00p
	SPACE    BAS      1851 12-30-85  12:00p
	VDISK    LST    136315 12-30-85  12:00p
	VENDOR-# DO1         0 07-04-83  12:00a
	       60 file(s)     563032 bytes
	                      135168 bytes free

### Directory of PC DOS 3.20 (Disk 1)

	 Volume in drive A has no label
	 Directory of  A:\
	
	IBMBIO   COM    16369  12-30-85  12:00p
	IBMDOS   COM    28477  12-30-85  12:00p
	ANSI     SYS     1651  12-30-85  12:00p
	ASSIGN   COM     1536  12-30-85  12:00p
	ATTRIB   EXE     8247  12-30-85  12:00p
	BACKUP   COM     6234  12-30-85  12:00p
	BASIC    COM    19298   2-21-86  12:00p
	BASICA   COM    36396   2-21-86  12:00p
	CHKDSK   COM     9832  12-30-85  12:00p
	COMMAND  COM    23791  12-30-85  12:00p
	COMP     COM     4184  12-30-85  12:00p
	DISKCOMP COM     5792  12-30-85  12:00p
	DISKCOPY COM     6266   4-11-86  12:39a
	DRIVER   SYS     1115  12-30-85  12:00p
	EDLIN    COM     7508  12-30-85  12:00p
	FDISK    COM     8173  12-30-85  12:00p
	FIND     EXE     6416  12-30-85  12:00p
	FORMAT   COM    11135  12-30-85  12:00p
	GRAFTABL COM     1169  12-30-85  12:00p
	GRAPHICS COM     3220  12-30-85  12:00p
	JOIN     EXE     8955  12-30-85  12:00p
	KEYBFR   COM     3295   3-07-86  12:00p
	KEYBGR   COM     3278   3-07-86  12:00p
	KEYBIT   COM     3060  12-30-85  12:00p
	KEYBSP   COM     3187  12-30-85  12:00p
	KEYBUK   COM     3036  12-30-85  12:00p
	LABEL    COM     2346  12-30-85  12:00p
	MODE     COM     6864  12-30-85  12:00p
	MORE     COM      295  12-30-85  12:00p
	PRINT    COM     8976  12-30-85  12:00p
	RECOVER  COM     4297  12-30-85  12:00p
	REPLACE  EXE    11650  12-30-85  12:00p
	RESTORE  COM     6012  12-30-85  12:00p
	SELECT   COM     3826  12-30-85  12:00p
	SHARE    EXE     8580  12-30-85  12:00p
	SORT     EXE     1911  12-30-85  12:00p
	SUBST    EXE     9911  12-30-85  12:00p
	SYS      COM     4620  12-30-85  12:00p
	TREE     COM     3357  12-30-85  12:00p
	VDISK    SYS     3307  12-30-85  12:00p
	XCOPY    EXE    11200  12-30-85  12:00p
	       41 File(s)     22528 bytes free

### Directory of PC DOS 3.20 (Disk 2)

	 Volume in drive A has no label
	 Directory of  A:\
	
	ART      BAS     1879  12-30-85  12:00p
	BALL     BAS     1966  12-30-85  12:00p
	BASIC    PIF      369  12-30-85  12:00p
	BASICA   PIF      369  12-30-85  12:00p
	CIRCLE   BAS     1643  12-30-85  12:00p
	COLORBAR BAS     1427  12-30-85  12:00p
	COMM     BAS     4254  12-30-85  12:00p
	DEBUG    COM    15799  12-30-85  12:00p
	DONKEY   BAS     3572  12-30-85  12:00p
	EXE2BIN  EXE     3063  12-30-85  12:00p
	LINK     EXE    39076  12-30-85  12:00p
	MORTGAGE BAS     6178  12-30-85  12:00p
	MUSIC    BAS     8575  12-30-85  12:00p
	MUSICA   BAS    13431  12-30-85  12:00p
	PIECHART BAS     2180  12-30-85  12:00p
	SAMPLES  BAS     2363  12-30-85  12:00p
	SPACE    BAS     1851  12-30-85  12:00p
	VDISK    LST   136315  12-30-85  12:00p
	       18 File(s)    107520 bytes free

---

## PC Magazine Review

The following article appeared in PC Magazine, Vol. 5, No. 13, July 1986, p. 110.

### DOS GETS BETTER--AND MORE EXPENSIVE, TOO

*by Charles Petzold*

> #### DOS 3.2 adds new commands and a unique device driver and makes some minor changes.

> As usual with new PC-DOS versions, PC-DOS 3.2 has been released in conjunction with a new product (the PC
Convertible), but it can run on all previous members of the IBM PC family. PC-DOS 3.2 is available on either one
3-1/2 inch 720K-byte disk or two 5.25-inch 360K disks. These disks include everything in PC-DOS 3.1, plus three new
programs. At $95, PC-DOS 3.2 is the most expensive PC-DOS yet.

> The shining star of the new PC-DOS is XCOPY, a fast file-copy utility that combines features of COPY, BACKUP,
and RESTORE. XCOPY is fast because it reads as many files as possible into available memory and then writes them
out to the target. (COPY and BACKUP, on the other hand, have to continually alternate between the source and target
drives for each file they copy.)

> Like COPY, XCOPY has /V switch to verify all file writes. Like BACKUP, it has /M and /D switches to restrict copying
based on file modification of the file date. A /S flag lets XCOPY find files in nested subdirectories and create the
subdirectories on the target disk if they don't already exist. A /P switch prompts you with a "Y/N?" for each file,
and a /W switch lets you swap disks before XCOPY starts up.

> You can also use XCOPY as a backup utility. The advantage over BACKUP is that the copied files are directly usable.
On a Bernoulli Box attached to a PC, I XCOPYed over 1,200 files from one 10-megabyte cartridge to another in just under
15 minutes. The bonus, of course, is that the fi1es are unfragmented on the target cartridge. However, XCOPY's
usefulness for backing up hard disks is diminished by two problems: first, it does not recognize hidden files, which
are used by many copy-protection schemes, and second, it has no built-in provision for changing target disks when they
become full. (You can get around this second problem by using the /M switch and repeatedly running the same XCOPY
command for different target disks.)

> The second new program in PC-DOS 3.2 is REPLACE, yet another file copy utility. REPLACE can replace all copies
of a particular file (which may be located in various subdirectories of a hard disk) with a new version. Using a /A
switch adds the source files to the target without overwriting existing files. The manual recommends using REPLACE
after a SYS command when upgrading an existing machine to DOS 3.2.

> The third new program is DRIVER.SYS, a device driver that can be included in your CONFIG.SYS file. It lets you create
a new logical disk drive letter that references the same physical disk as an existing disk drive letter. This type of
thing happens automatically on a PC with only one disk drive: logical drive letters A and B both refer to the same
physical disk drive. DRIVER.SYS lets you do the same thing for another drive. This is most useful when installing the
external 720K-byte 3-inch disk in a PC, XT, or AT. By using DRIVER.SYS to give this disk drive a second drive letter,
you can XCOPY files from one 3-inch disk to another using the same physical drive.

> PC users who have been getting an "Out of environment space" message after executing a few too many SET commands
from batch files need no longer resort to patches or undocumented COMMAND.COM switches. If you specify COMMAND.COM
as a SHELL program in your CONFIG.SYS file, you can use the /E switch to specify your environment size up to 32K bytes.
Note that this is the same switch that worked (but was undocumented) in DOS 3.1, but the DOS 3.1 switch required a
16-byte paragraph environment size instead of bytes.

> Some smaller changes: FORMAT and DISKCOPY now support the 720K-byte 3.5-inch disk format (of course).
FORMAT 3.2 will not run unless you give it a drive letter parameter--an added barrier to accidently formating your
hard disk. ATTRIB 3.2 lets you manipulate the archive attribute of files as well as the read-only attribute.

> The elongated shape of the PC Convertible display may make printing graphics screens on the printer a problem.
You may want printed graphics to look the way they do on the Convertible display or as they would appear on a normal
display. The GRAPHICS 3.2 resident graphics screen print program lets you make this decision yourself.

> The disappointing aspects of PC-DOS 3.2 are its omissions. Although Microsoft has stated that future versions of
MS-DOS will support the Lotus/lntel/Microsoft Expanded Memory Specification, that support is not included with PC-DOS
3.2. ANSI.SYS 3.2 still does not support the Enhanced Graphics Adapter (EGA) in 43-line mode or for video pages other
than page 0. No changes at all have been made to ANSI.SYS.

> Although documentation for BASICA 3.2 did not reach the editorial offices of PC Magazine, some creative
DEBUGing and experimentation reveal five new BASICA commands. Three of these commands are EXTERR, LOCK, and UNLOCK,
corresponding to the extended error-handling and file-locking and unlocking functions of DOS 3.x. Another new BASICA
command is PCOPY, which lets you copy one video page to another.

> BASICA 3.2 also includes some support for the EGA, but this support is so minimal that it is likely to infuriate
BASIC users. The PALETTE command lets you manipulate the EGA palette registers so that you can map default colors to
other colors. This is particularly useful in medium-resolution mode because it means you're no longer stuck with the
same two sets of three colors.

> The PALETTE command is the extent of EGA support in BASICA 3.2. In fact, the SCREEN and PCOPY commands do not even
recognize the additonal video pages in the EGA's 80-column text mode. Support of the EGA graphics modes is nowhere to
be seen.

> PC-DOS 3.2 gives the PC user a couple of extra tools that would certainly be worth a $30 update charge.
Unfortunately, there is no update policy for DOS, so you'll be shelling out the full $95 for it. That's obviously too
much money. But for those who spend many hours at their PCs, keeping up with the latest DOS version comes with the
territory.
