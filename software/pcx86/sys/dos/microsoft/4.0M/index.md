---
layout: page
title: Multitasking MS-DOS 4.00
permalink: /software/pcx86/sys/dos/microsoft/4.0M/
redirect_from:
  - /disks/pcx86/dos/microsoft/4.0M/
  - /disks/pc/dos/microsoft/4.0M/
  - /configs/pc/machines/5160/cga/640kb/dos400m/
  - /devices/pc/machine/5160/cga/640kb/dos400m/
  - /videos/pcjs/
machines:
  - id: ibm5160
    type: pcx86
    debugger: true
    config: /configs/pcx86/xml/machine/5160/cga/640kb/debugger/machine.xml
    autoMount:
      A:
        name: MS-DOS 4.0M (Disk 1)
      B:
        name: MS-DOS 4.0M (Disk 2)
---

These disk images contain the first unearthed copy of Microsoft's "multitasking" version of MS-DOS
since its *extremely* limited release around late 1985 or early 1986.  They were were discovered by the
[PCjs Project](/about/) in March 2013.  More information is available at
[Wikipedia](http://en.wikipedia.org/wiki/Multi-tasking_MS-DOS_4.0),
[OS/2 Museum](http://www.os2museum.com/wp/?p=1769), and
[MSDN Blogs](http://blogs.msdn.com/b/larryosterman/archive/2004/03/22/94209.aspx).

Note: The designation "4.0M" is not an official version number; it's an internal version number used only to
differentiate these disk images from those of the official MS-DOS 4.00 release in October 1988.

The [IBM Model 5160](/devices/pcx86/machine/) machine configuration below boots MS-DOS 4.0M.  To access the MS-DOS
"Session Manager" after it's booted, tap the **Alt** key.  Since the **Alt** key is not available in all browsers,
you may need to click the "Keys" button and use the **Alt** key on the on-screen keyboard.

{% include machine.html id="ibm5160" %}

### Additional Information From [PC DOS Retro](https://sites.google.com/site/pcdosretro/multitaskingdos4)

Multitasking MS-DOS 4.0 was a little known and separate development of DOS done in parallel with the development
of DOS 3.0 and 3.1 and was released in late 1985.  It should not be confused with the later retail DOS 4.0 that was
released in 1988.

DOS 4.0 supported preemptive multitasking, shared memory, semaphores, advanced memory management,
a session manager, imports, exports and a new executable format.  Many of the ideas and features introduced here found
their way into OS/2.  Unfortunately DOS 4.0 was limited by the real-mode 8086 environment and the 640KB address space.
Also programs which were not well-behaved or relied upon undocumented DOS functions would not run properly under
DOS 4.0, particularly TSR programs.

Despite these limitations Microsoft wanted to make DOS 4.0 a retail product but
IBM at the time was not interested in such a version of DOS, instead they formed a joint development agreement with
Microsoft which resulted in the development of OS/2 1.0.  Microsoft licensed DOS 4.0 to several European OEMs including
Goupil but it was never shipped in North America.  Microsoft released an updated version, DOS 4.1 in late 1987 for
the British company International Computers Limited (ICL).  DOS 4.1 incorporated features from DOS 3.2.  Like its
predecessor, DOS 4.1 was never shipped in North America.
 
List of features and differences between standard DOS and Multitasking MS-DOS 4.0:

* based upon DOS 3.1
* INT 21h functions 00h-62h, 83h-91h, 95h-99h
* INT 21h functions 3300h-3302h
* INT 21h functions 4400h-440Ch
* INT 21h functions 4B00h, 4B01h, 4B03h, 4B04h-4B06h, 4B08h, 4B0Ch-4B0Eh
* INT 21h functions 5D00h-5D0Ah
* INT 21h functions 58h and 5D06h not supported
* new INT 21h functions:
	* 61h: unknown function
	* 8301h: get/set memory partition size
	* 8400h-8402h: shared memory functions
	* 8500h-8504h: semaphore functions
	* 86h: set handle count
	* 87h: get process id
	* 8801h-8802h: unknown get/set function (handle related)
	* 89h: sleep
	* 8Ah: child wait
	* 8Bh: JOIN/SUBST
	* 8Ch: set signal handler
	* 8Dh: send signal
	* 8Eh: get/set process priority
	* 8Fh: unknown function (vector related)
	* 90h: unknown function (vector related)
	* 91h: unknown function
	* 95h: set hard error flag
	* 96h: unknown function
	* 97h: unknown function
	* 98h: unknown function
	* 99h: unknown function
* INT 21h functions 1Fh and 32h copy the DPB to DS:BX instead of returning a pointer in DS:BX
* INT 21h function 25h does not directly set interrupt vectors
* device driver command codes 00h-10h (same as DOS 3.x) and 11h-16h (new)
* new device driver command codes:
	* 11h: stop console output
	* 12h: restart console output
	* 13h: generic ioctl (same as DOS 3.2+)
	* 14h: unknown
	* 15h: unknown
	* 16h: unknown
* SYSVARS table:
	* 00h DPB pointer (DPB length = 18h)
	* 04h SFT pointer (SFT length = 37h)
	* 08h CLOCK$ device pointer
	* 0Ch KEYBD$ device pointer
	* 10h SCREEN$ device pointer
	* 14h disk buffer size
	* 16h disk buffer chain pointer
	* 1Ah ? (always 0, CDS pointer should be here)
	* 1Eh FCB SFT pointer
	* 22h FCB keep count
	* 24h drive count
	* 25h switch character
	* 26h ? (code pointer)
	* 2Ah NUL device header
* no MCB anchor at SYSVARS-2
* MCBs have previous MCB at 06h and next MCB at 08h (same seg as MCB = start/end of chain)
* InDOS flag is always FFh and the critical error flag does not precede it
* KEYBD$ and SCREEN$ in addition to CON
* no INT 28h or INT 2Ah function 84h idle callout
* no INT 2Ah critical section support
* no INT 2Fh redirector support
* no job file table in PSP
* INT 12h (40h:13h) value is altered to limit session memory
* CONFIG.SYS commands: BREAK, BUFFERS, COUNTRY, DEVICE, FCBS, FILES, LASTDRIVE, SHELL (same as DOS 3.1)
* additional internal commands: CALL, DETACH (DET), ENDLOCAL, EXTPROC, MEMSET, SETLOCAL
* NE format executables supported
* no PSP created for NE executables
* DOSCALLS exported function names:
	* 01 ALLOCSEG
	* 02 REALLOCSEG
	* 03 FREESEG
	* 04 LOCKSEG
	* 05 UNLOCKSEG
	* 06 GETSEGSIZE
	* 07 GETDSHANDLE
	* 08 CRITENTER
	* 09 CRITLEAVE
	* 0A FCRITENTER
	* 0B FCRITLEAVE
	* 0C PBLOCK
	* 0D PRUN
	* 0E SUBSCREEN
	* 0F GETPIDS
	* 10 DOSDISCARDCODE
	* 11 DOSGETHANDLE
	* 12 DOSHANDLEJUMP
