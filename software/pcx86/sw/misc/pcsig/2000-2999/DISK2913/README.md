---
layout: page
title: "PC-SIG Diskette Library (Disk #2913)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2913/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2913"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## ADCACHE.DOC

{% raw %}
```
                            ADCACHE - EMS HARD-DISK CACHE


          NAME
               adcache - the awesome disk cache

          SYNOPSIS
               adcache [-12fhinsu] [-a#] [-e#] [-r{#|+}] [-w#]

          DESCRIPTION
               ADCache is a TSR hard-disk cache that uses EMS memory.  It
               requires EMS version 3.2 or better and MS/PC-DOS 2.0 or
               above.  ADCache is small and fast.  It works on any IBM
               PC/XT/AT or PS/2 or compatible with one or two hard disk
               drives that use the BIOS INT 13h interface.

               ADCache is shareware.  Please read "Licensing" at the end of
               this document for details.

          OPTIONS
               In option descriptions, the symbol "#" stands for a decimal
               number.

               This option is always available:

               -h   Print a usage message describing ADCache's command-line
                    options.  Does not install the cache.

               These options are available only when installing ADCache:

               -1, -2
                    Cache only the first or second hard drive.  By default,
                    ADCache caches both drives (or drive 1 if only one is
                    installed).

               -i   Place the cache index in EMS.  Normally, the index is
                    kept in conventional memory.  Placing it in EMS may
                    slow access, but reduces the amount of system memory
                    required.  Using "-i" allocates 16K of EMS to the
                    index.  This is less effective with a small cache, as
                    ADCache requires only 1 to 2K of index per megabyte of
                    cache.

               -n   Do not use 32-bit transfers.  Normally, if ADCache
                    detects that it is running on an 80386 processor, it
                    will use 32-bit instructions to transfer data in and
                    out of the cache.  This option forces it to use 16-bit
                    instructions compatible with the 80286 and earlier
                    processors.

               -a#  Allocate all but #K of EMS to the cache.  This option
                    will leave the specified amount of EMS available for
                    other programs.  Use either -a or -e but not both.

               -e#  Allocate #K of EMS to the cache.  The default is 512K. 
                    The actual amount of EMS used may differ from the
                    number given by several K because of rounding of block
                    sizes.  Values may range up to 32768 (32M bytes), but
                    varying limits on the sizes of internal data structures
                    may restrict the amount of memory that can be used.

               -r#  Enable readahead when filling the cache from disk.  Up
                    to # additional sectors are read and cached beyond the
                    number requested.  The default is approximately 1/4 of
                    a full track.

               -r+  Enable readahead and set the readahead length to one
                    full track.

               -w#  Enable delayed-write caching where # is the time in
                    seconds that data are held before writing to disk.  The
                    legal range of values is 0.0 to 60.0, with an optional
                    decimal point followed by one digit for 1/10 second
                    resolution.  Selecting 0 (or omitting the number)
                    delays writes by 0.2 second, long enough to catch most
                    multiple writes to a single track.  Delayed writes are
                    off by default.

               These options are available only after installing ADCache:

               -f   Flush the cache.  This option forces ADCache to flush
                    all delayed-write data in the cache to disk.  It does
                    not invalidate the cache.

               -s   Display statistics on cache hits and misses.

               -u   Uninstall ADCache.  This function attempts to remove
                    ADCache completely from memory, but that may not be
                    possible if other TSRs have been installed afterwards. 
                    In that case, it disables the cache.

          LIMITATIONS
               ADCache requires that all drives being cached have the same
               number of sectors per track.  If you have two drives and use
               a controller with sector translation, you can only cache one
               of the drives if they are not configured for the same number
               of sectors.

               ADCache caches hard disks only.  It does not work with
               removable-media drives.

          BUGS
               ADCache will not work correctly with EMS emulators.  It will
               crash horribly if used with a disk-based EMS emulator.

               "Awesome disk cache" is a stupid name.  Please send me
               suggestions for better ones.

          COPYRIGHT
               ADCache and this document are copyright 1990 by:

                    David H. Rifkind
                    1800 W. Hillcrest Dr., #287
                    Newbury Park, CA  91320

                    BIX: drifkind

          LICENSING
               ADCache is shareware.  You may use it and give it to others
               to use as long as you include this document and charge no
               fee other than reasonable distribution charges.  You may try
               ADCache without paying for it, but if you continue to use
               it, you must pay for it.

               To pay for and register your copy of ADCache, send $15 U.S.
               by check or money order to the author at the address above
               ($10 per copy if registering multiple copies).  Include your
               name and address and the version number of ADCache displayed
               when you run the program.  If you pay an additional $5, I
               will send you a copy of the next upgrade (or the current
               version if you register an older version).

               This is a single-user license, but may be applied to more
               than one computer as long as only one copy of ADCache is
               running at a time.

               Site licenses are available.  Contact the author for more
               information.

          ADCache version 1.20
          Last update: February 19, 1990
```
{% endraw %}

## README.DOC

{% raw %}
```
           Installation Notes for ADCache version 1.20

Before using ADCache, please read the documentation.  The
default option settings are not the optimum for most computers. 
You will want to change at least the memory size, and probably
to enable delayed-write caching as well.

Please be careful when using delayed writes.  Although ADCache
has proven quite reliable in beta testing, delayed writing is
inherently more dangerous than write-through caching.  Power
failures, or buggy software which locks your machine up before
the disk has been updated, can corrupt your disk and lead to the
loss of valuable data.  As always, a complete and recent backup
is your best line of defense against disk failure.

With delayed writes, remember that your disk has not been
updated until the write cycle completes or the cache has been
flushed.  Most beta-testers have, at one time or another, turned
off or rebooted their machines before a write has completed. 
This is not a good idea!  The "-f" (flush cache) option can help
here; if you have batch files that reboot your machine, insert:

     adcache -f

somewhere before the reboot.

ADCache has been tested on a number of computers running a
variety of software.  It works correctly with DESQview if loaded
before running DESQview.  ADCache almost certainly will *not*
work with EMS emulators; don't even try it.  (80386 memory
managers like 386MAX and QEMM are not emulators by this
definition; ADCache works fine with both.)

I run ADCache with these options:

     adcache -a512 -w

This:

     1.   Allocates all but 512K of the available memory to the
          cache, and,

     2.   Enables delayed writes with the default delay of 0.2
          second.

You may also want to consider the "-i" option which will free up
several K of main memory.

My address, for bug reports, complaints, and suggestions, is
given in the documentation.  Let me know what you think of it!
```
{% endraw %}

## PCLOCK.TXT

{% raw %}
```




Bypass to a bug found in the setup program for PCLOCK, V0.03 (bug
prevents the multiple user capability):

  1. Run the Setup file for PCLOCK.
  2. Enter the names and passwords of the people who will be allowed
     access to the computer work station. Follow the directions.
  3. Boot up the system.
  4. The first time you log on, use the name and password of the person
     that was entered LAST into the setup program.  That will give you
     access to the system.
  5. To correct the bug, go to your root directory and with an editor
     edit the file NMS.DEF. The name and password of the last person
     entered in the Setup program will have replaced all other entries.
     Edit the file to include the original names and passwords.  From
     then on when logging in, the program should work fine.
```
{% endraw %}

## PCSIG.TXT

{% raw %}
```


                            P C  -  S I G





++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Welcome to the world of Shareware, state of the art software you can
actually try before you buy.

Shareware, a term coined in the early eighties, refers to the method of
distribution chosen by the software authors.  With shareware, you can
receive a program and put it through its paces without having to pay for
it. If you find the program useful, and choose to keep the program, then
you pay a modest registration fee to the author.

For the last nine years, PC-SIG has been providing shareware and public
domain software to its customers and members.  Since 1982 PC-SIG has
developed an unprecedented library of shareware programs, constantly
updated, consistently strong in every category.  Our library of
shareware contains over 2700 titles divided into 120 logical categories.

Every program we add to the library is thoroughly reviewed and tested to
insure that each one meets the high standards of reliability and value we
insist upon and you expect.  As a result, our library doesn't contain
every shareware program available, just those that really work.

PC-SIG has grown into the premier distributor of shareware and and
shareware information by producing shareware collections on CD-ROM,
publishing an encyclopedia of shareware, and by publishing Shareware
Magazine, a bi-monthly magazine distributed world-wide.

Quality and support - guaranteed.  All of our programs are guaranteed
virus free.  We've isolated our systems and check every program
submitted to insure that no viruses make their way to your computer or
ours.

Our support staff is available by phone as well as on our BBS to help
you with questions about installation and operation of PC-SIG's
products.

Through our network of international distributors, PC- SIG strives to
bring you the most current, exciting, technically advanced software
available as shareware.

If you can't find the software you need in PC-SIG's library, it may well
not exist.

To order the latest in Shareware, in the U.S.A: Call (800) 245-6717

Outside the U.S.A. call (408) 730-9291 for the name of the dealer in
your country.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
```
{% endraw %}

## TSR.DOC

{% raw %}
```
                        TSR Utilities Version 3.2
                             Kim Kokkonen
                          TurboPower Software
                               11/22/91

Table of Contents
---------------------------------------------------------------------
1. Introduction
2. MARK, FMARK, and RELEASE
3. MARKNET and RELNET
4. WATCH and DISABLE
5. MAPMEM, RAMFREE, and DEVICE
6. EATMEM
7. Known Limitations
8. Version History
9. Copyright and License Information

1. Introduction
---------------------------------------------------------------------
The TSR Utilities are a collection of programs useful for managing DOS
memory, particularly for managing memory-resident programs, also known
as TSR's. TSR stands for "Terminate and Stay Resident". The most
popular use of these utilities is for removing TSR's from memory
without rebooting the PC. There are many other uses, however,
especially if you are a software developer.

The TSR Utilities have grown to include 11 programs. Here's a quick
overview of each one:

  MARK     marks a position in memory above which TSR's can be
           released.
  RELEASE  removes TSR's from memory.
  FMARK    performs the same function as MARK but uses less memory.
  MARKNET  like MARK, but saves a more complete picture of system
           status.
  RELNET   removes TSR's marked with MARKNET.
  WATCH    a TSR itself, it keeps records of other TSR's.
  DISABLE  disables or reactivates TSR's, leaving them in memory.
  RAMFREE  shows how much RAM memory is available.
  MAPMEM   shows what memory resident programs are loaded.
  DEVICE   shows what device drivers are loaded.
  EATMEM   uses up memory for controlled program testing.

These programs are described in detail in the following sections. If
you haven't used them before, be sure to read the documentation: All
of the programs are command line driven, and unexpected events may
occur if you just start typing the program names at the DOS command
line. Also be sure to read section 7, "Known Limitations".

The most notable feature of TSR Utilities version 3.0 is support for
MS-DOS 5.0 and TSR's loaded in high memory. If you're familiar with
previous versions of the TSR Utilities, see the file TSR30.DOC for a
summary of the changes in version 3.0. Version 3.1 cleans up bugs and
compatibility problems discovered in 3.0. Version 3.2 of the utilities
generalizes the high memory support, so that it no longer requires DOS
5.0 or particular memory manager versions.


2. MARK, FMARK, and RELEASE
---------------------------------------------------------------------
MARK.COM and RELEASE.EXE are used to remove TSR's from memory, without
requiring a system reboot. In their simplest form, MARK and RELEASE
are used as follows:

1. Run MARK before installing your TSR(s). This marks the current
position in memory and stores information that RELEASE will later need
to restore the system. A common place to call MARK is in your
AUTOEXEC.BAT file.

2. Install whatever TSR's you want, using the normal method for each
TSR.

3. To remove those TSR's from memory, run RELEASE. This will release
all of the memory above (and including) the last MARK, and will
restore the system to the state at the time the MARK was made.

There are a number of variations of this simple method. If you want to
release TSR's loaded in high memory, be sure to read the remainder of
this section for instructions on how to do so.

MARKs can be stacked in memory, as shown in the following hypothetical
batch file:

    MARK
    TSR1
    MARK
    TSR2
    MARK
    TSR3

Each call to RELEASE releases memory above and including the last
MARK. In this example, the first call to RELEASE would remove TSR3 and
the last MARK from memory, the second call would remove TSR2 and its
MARK, and so on.

MARK and RELEASE may be called using a command line parameter. The
parameter specifies a "mark name" and allows releasing TSR's to a
specific point in memory. Consider the following example:

    MARK TSR1
    TSR1
    MARK TSR2
    TSR2
    MARK TSR3
    TSR3

This loads the three TSR's just as in the previous example. However,
if RELEASE were called like this,

    RELEASE TSR2

then both TSR2 and TSR3 would be removed from memory. Note that the
use of such a name does not allow just a single layer of TSR's to be
removed (just TSR2, for example). RELEASE always removes all TSR's
including and beyond the one named.

A mark name is any string up to 126 characters long. The name may not
include white space (blanks or tabs). Case (upper or lower) is not
significant when matching mark names.

When named marks are used as in this example, calling RELEASE without
specifying a mark name will still remove the last TSR from memory.
Assuming that TSR1, TSR2, and TSR3 were still in memory, typing just
RELEASE would remove TSR3 and the last mark. It is possible to change
this behavior by using "protected marks", which can be released only
by explicitly specifying their names. A protected mark is placed by
giving it a name that starts with an exclamation point, '!'. Consider
the following:

    MARK TSR1
    TSR1
    MARK TSR2
    TSR2
    MARK !TSR3
    TSR3

Here !TSR3 specifies a protected mark. Typing just RELEASE would
produce an error message "No matching marker found, or protected
marker encountered". The same error would occur after entering the
command RELEASE TSR2. When this error occurs, RELEASE does not remove
any TSR's from memory.

The only way to remove TSR3 in this case is by entering

    RELEASE !TSR3

Each time a MARK is placed in memory, it consumes about 1600 bytes of
RAM space, which is used to store a copy of the system interrupt
vector table and other information with which RELEASE can later
restore the system. Although 1600 bytes isn't very much, we can reduce
this memory usage by storing the information in a disk file rather
than in memory. FMARK.COM is a variation on MARK that does just that.
You can call FMARK at any time that you would call MARK. FMARK uses
only about 150 bytes of memory.

All calls to FMARK must include a command line parameter to specify
the name of the file:

    FMARK [d:][directory]filename

You should generally specify a complete pathname for the mark file.
When you later call RELEASE, you must give it the identical pathname,
regardless of what the current directory happens to be at the time.
For example, if you specified the following file mark

    FMARK C:\TEST\TEST.MRK

then the following calls to RELEASE would generate an error,

    RELEASE TEST.MRK
    RELEASE C:TEST.MRK

even if the current directory on drive C: was \TEST. The only way to
call RELEASE is with

    RELEASE C:\TEST\TEST.MRK
or
    release c:\test\test.mrk

RELEASE can use either type of mark: in-memory or on-disk. Note that
file marks placed by FMARK are never treated as protected marks,
although of course their names must be passed to RELEASE in order to
remove them directly.

Consider the following example:

    MARK TSR1
    TSR1
    FMARK C:\MARKS\TSR2.MRK
    TSR2

Typing just RELEASE in this situation generates the warning message
"No matching marker found, or protected marker encountered", because
the file mark's name has not been provided.

TSR2 can be removed from memory by entering

    RELEASE C:\MARKS\TSR2.MRK

RELEASE deletes the mark file when it has finished.

Alternatively, TSR2 and TSR1 could be removed at the same time by
typing

    RELEASE TSR1

MARK may be called with one optional command line parameter:

    /Q         write no screen output. (-Q means the same.)

The /Q option is useful when you are using MARK in an integrated
system. Redirecting MARK's output may waste system file handles and
should never be done.

RELEASE has several command line options to modify its behavior. The
following table lists the options, which must start with a slash, '/',
or a hyphen, '-'.

    /E         do NOT access EMS memory.
    /K         release memory, but keep the mark in place.
    /Q         write no screen output.
    /S chars   stuff string (<16 chars) into keyboard buffer on exit.
    /U         consider upper memory blocks for release.
    /?         write this help screen.

None of the options is required for normal use of RELEASE.

/E is made available for systems running early, buggy EMS (expanded
memory) drivers that don't correctly implement all of the EMS 3.2
system calls. Don't use it unless you have an EMS-related problem
during or after running RELEASE.

/K is useful when you will be releasing and reloading a TSR
repeatedly. With it, you avoid the need to replace the mark each time
the TSR is released. Using /K in combination with a file mark also
prevents RELEASE from deleting the mark file.

/Q prevents RELEASE from writing any screen output (unless an error
occurs). This is useful when you are using RELEASE in an integrated
system. Note that redirecting RELEASE's output causes technical
problems and should not be done.

/S followed by at least one space and then a short string (15
characters or fewer) tells RELEASE to stuff this string into the
keyboard buffer just before exiting. RELEASE automatically adds a
carriage return to the end of the string. The string may not contain
tabs or spaces.

To explain why the /S option is important, we must digress a moment.
Let's assume that you normally keep SideKick loaded, but that you must
unload it in order to have enough memory free to run Lotus 1-2-3. It
would seem reasonable to write a little batch file like this:

   RELEASE SK
   LOTUS
   MARK SK
   SK

which would remove the previously loaded SideKick from memory, run
Lotus, and then load SideKick again. Unfortunately, this doesn't work!

The reason is complicated to explain. It must suffice here to say that
DOS batch files trap memory, and the memory freed by a call to RELEASE
does not truly become available until the current batch file ends.

Now perhaps the need for the /S option becomes clear. We can split the
previous batch file into two:

  batch1:
    RELEASE SK /S BATCH2

  batch2:
    LOTUS
    MARK SK
    SK

The first batch file releases the memory and stuffs the characters
'BATCH2<Enter>' into the keyboard buffer. When the batch file ends,
the released memory becomes available. DOS automatically reads the
keystrokes waiting in the buffer and starts up the second batch file,
which runs Lotus and later reloads SideKick.

To keep things simple, the /S option pokes the specified keystrokes
directly into the system keyboard buffer. As a result, the number of
keystrokes is limited to 15 (not counting the <Enter> key, which
RELEASE adds automatically). This always allows enough keys to start
another batch file, however, and the new batch file can take over from
there.

RELEASE detects when it is releasing memory within a batch file. It
writes a warning message to that effect, but continues processing
anyway under the assumption that the batch file is about to end. You
can ignore the warning if you've already taken account of DOS's memory
management behavior within batch files.

The /U option is required when you are releasing a TSR that has been
loaded into high memory (memory between 640K and 1 megabyte). It may
be also appropriate even for a TSR loaded into low memory, if other
TSR's have been loaded into high memory.

The high memory features of TSR Utilities version 3.0 are available
only if you are running a compatible memory manager. Any memory
manager that supports the UMB (upper memory block) features of XMS
(extended memory specification) memory managers should work with the
high memory features of the TSR Utilities. This includes 386MAX
(Qualitas), QEMM386 (Quarterdeck), HIMEM/EMM386 (Microsoft), and
HIDOS/EMM386 (Digital Research).

If you're using just the high memory features of MS-DOS 5.0 itself,
without additional memory managers, note that you must have at least
the following in your CONFIG.SYS in order for the TSR Utilities to
access high memory:

  DEVICE=HIMEM.SYS
  DEVICE=EMM386.SYS RAM
  DOS=UMB

See the discussion of the EMM386.SYS driver in your MS-DOS 5.0
documentation for more information about options compatible with
creating upper memory blocks.

With other memory managers such as QEMM and 386MAX you should *not*
put the DOS=UMB statement in CONFIG.SYS. (This is a change from
versions 3.0 and 3.1 of the TSR Utilities.)

To test whether your memory manager is compatible with the TSR
Utilities high memory features, try entering MAPMEM /U at the DOS
command line. If you get a high memory report from MAPMEM, then you
can assume that the memory manager is compatible with TSR Utilities
3.0. Because of the lack of complete standards for managing high
memory, the names and attributes of programs in high memory may
sometimes appear garbled: unfortunately there is little we can do
about this without building features specific to particular memory
managers into the TSR Utilities.

Note that even if you don't get a high memory report from MAPMEM, you
can still use the TSR Utilities 3.0 without upper memory support.

The /U option causes a fundamental change in the behavior of RELEASE.
It is important that you understand what it does in order to use it
properly.

When the /U option is *not* specified, RELEASE removes programs in
address order. That is, with a few exceptions, it deallocates any
memory blocks that have a memory address greater than or equal to that
of the mark.

This behavior is almost never appropriate when TSR's are loaded high.
When high memory is involved, the *chronological* order in which TSR's
were loaded rarely matches the *address* order in which they were
loaded. Before TSR's could be loaded high, these two orderings were
usually the same, so no distinction was necessary. Now, however, it's
common to load one program high, then one low, then another high; or
to load one program into "region 2" of high memory, then another into
"region 1", and so on.

Therefore, when the /U option is activated, RELEASE frees memory in
*chronological* order. That is, it frees all memory blocks allocated
since the time the mark was placed, regardless of the address position
of the memory. Additional information is now stored in the mark file
or memory image to allow this to occur. Only when /U is specified does
RELEASE access high memory.

If you have *any* TSR's loaded into high memory, you should use the /U
option, even if the particular TSR you're unloading is located in low
memory. Depending on the chronological order in which you loaded the
TSR's, an unload from low memory may also trigger unloads from high
memory, or vice versa.

When you intend to use the /U option, you must provide a unique mark
name for each mark (because there is no unambiguous way to find the
correct unnamed mark). Note that a mark name is inherent in the
filename specified to FMARK.

Because of the chronological nature of RELEASE /U, you can load the
MARK high and the associated TSR low (or vice versa) if desired.

Technical note: due to the lack of comprehensive standards for
managing high memory, the TSR Utilities must use a heuristic technique
for finding the first block of high memory. They search on each
paragraph boundary starting at the top of normal memory (normally
0A000h) for the character 'M', which is always found at the beginning
of a valid memory control block. Then, using this location as the
starting point, they trace the block chain searching for a terminating
'Z' block. If no 'Z' block is found, they start searching again at the
paragraph beyond the previously found 'M' block. This requires that at
least two blocks be already allocated in high memory (an 'M' block and
a 'Z' block); we haven't found any cases where this is a practical
limitation. Overall, the heuristic technique appears to be reliable
with the common high memory managers, and has the advantage that it
doesn't count on unique features of any one of them.

The high memory features of the TSR Utilities count on the "link UMB"
feature of DOS 5 being turned off. When link UMB is on, normal RAM and
high memory are linked together into a single chain of memory control
blocks, and in this case the heuristic technique used by the utilities
would cause the blocks in high memory to be processed twice.
Fortunately, we don't know of any cases where "link UMB" is activated
by DOS application programs except temporarily during times when the
TSR Utilities could not possibly be used.


3. MARKNET and RELNET
---------------------------------------------------------------------
Use of these utilities is very similar to that described in the
preceding section. MARKNET is analogous to FMARK, and RELNET is like
RELEASE. MARKNET stores more information about the system's status
than does MARK, so it is appropriate for managing TSR's, such as
network shells, that hook into the system at a low level.

Because MARKNET stores so much information about the system, it always
writes the data to a disk file in order to reduce its own memory
usage.

Command line syntax for MARKNET and RELNET is:

  MARKNET [d:][directory]filename [/Q]
  RELNET  [d:][directory]filename [options]

The main command line parameter to each program specifies the name of
the file where the mark information will be stored. We refer to this
file as the net mark file. A complete pathname should be specified for
the net mark file. RELNET's pathname must exactly match that passed to
MARKNET, with the exception of case.

Note that MARKNET and RELNET may be used in almost any situation where
FMARK and RELEASE are used. MARKNET saves all of the same system
information as does FMARK, but it goes further to store information
such as the device driver chain, DOS internal variable areas, DOS
system file tables, DOS environment, communications port status, XMS
memory state, and other information. Nevertheless, MARKNET and RELNET
were written primarily because of the large demand to release the
NetWare shell. We'll refer to NetWare specifically in the following
and provide an example of how to load and release it.

The only new restriction for using MARKNET is that the system must be
running DOS version 3.0 or later. MARKNET depends on the format of
certain internal DOS data structures that were quite different in DOS
version 2.

Like FMARK, MARKNET leaves a small (144-192) byte mark in memory, and
writes a disk file to store the system status. MARKNET's file varies
in size, but is typically 3-4K bytes. The size depends on the number
of device drivers, the value of the 'FILES=' directive in CONFIG.SYS,
the number of EMS and XMS memory blocks allocated, and other DOS
implementation details.

Do not attempt to redirect the output of MARKNET. Doing so will waste
at least one file handle that cannot be recovered later by RELNET.
MARKNET's /Q option is provided to prevent it from writing any screen
output.

Marks placed with MARK, FMARK, and MARKNET may be mixed in the same
system. RELEASE treats all marks placed with MARKNET as protected;
such marks may be released only by calling RELNET explicitly. Consider
the following example:

  MARK TSR1
  TSR1
  FMARK C:\MARKS\TSR2.MRK
  TSR2
  MARKNET C:\MARKS\TSR3.MRK
  TSR3

Entering RELEASE by itself would generate a warning and do nothing
else. Entering RELEASE C:\MARKS\TSR2.MRK would generate the same
warning. The only way to get all three of these TSR's out of memory
would be to enter the following commands in sequence:

  RELNET C:\MARKS\TSR3.MRK
  RELEASE C:\MARKS\TSR2.MRK
  RELEASE TSR

RELNET has options to control how much of the system state it
restores. Several of the options match those of RELEASE; new ones are
also provided to control the additional information that MARKNET
stores. RELNET accepts the following options:

  /C        do NOT restore the communications ports.
  /E        do NOT access EMS memory.
  /I        do NOT shut down IPX events and sockets.
  /K        release memory, but keep the mark in place.
  /P        do NOT restore DOS environment.
  /Q        write not screen output.
  /R        revector 8259 interrupt controller to powerup state.
  /S chars  stuff string (<16 chars) into keyboard buffer on exit.
  /T        do NOT reset the system timer chip.
  /U        consider upper memory blocks for release.
  /V        verbose: show each step of the restore.
  /X        do NOT access XMS memory.
  /?        write help screen.

None of these options, except perhaps /U, is required in order to
release the NetWare workstation shell.

/C prevents RELNET from restoring the communications state of the
system (as encoded in the 8250 async chip and the 8259 programmable
interrupt controller). Because both of these chips provide readable
registers, MARKNET is able to store an accurate picture of the
communications state when the mark is stored; RELNET can restore the
state to exactly what it was. Therefore, the /C option should be
needed rarely, perhaps only on newer PS/2 models that don't use the
8250 as a communications controller. Note that MARKNET stores
information only about COM1 and COM2.

/E is made available for systems running early, buggy EMS drivers that
don't correctly implement all of the EMS 3.2 system calls. Don't use
it unless you have an EMS-related problem during or after running
RELNET.

/I prevents RELNET from detecting and deactivating IPX events and
sockets owned by the memory blocks being released. (IPX is the low
level communications protocol used on Novell networks.) Don't use it
unless it solves a problem for you.

/K is useful when you will be releasing and reloading a TSR
repeatedly. With it, you avoid the need to replace the mark each time
the TSR is released. Using /K prevents RELNET from deleting the net
mark file.

/P keeps RELNET from restoring the DOS environment, which it normally
does because NetWare modifies the DOS PATH. In some cases, other
changes to the environment should not be undone; use the /P switch
only when such changes must be preserved.

/Q prevents RELNET from writing any screen output (unless an error
occurs). This is useful when you are using RELNET in an integrated
system. Redirecting RELNET's output causes technical problems and
should never be done.

/R may be useful for unloading task-switching utilities that
"revector" the hardware interrupt controller. Use it only if it solves
a problem.

/S followed by at least one space and then a short string (15
characters or fewer) tells RELNET to stuff this string into the
keyboard buffer just before exiting. RELNET automatically adds a
carriage return to the end of the string. The string may not contain
tabs or spaces. See the discussion of /S in the preceding section for
more details.

/T keeps RELNET from resetting the system timer chip to its default
rate, which it does by default.

/U allows RELNET to access high memory. See the discussion of high
memory in the previous section for more information.

/V activates additional status reporting during the release and may
provide useful information in cases when RELNET isn't working.

/X prevents RELNET from restoring the state of XMS (extended) memory.
This option is provided in case of an unforeseen conflict with an XMS
memory driver.

The following is a simple version of a NetWare LOGIN.BAT file with
support for releasing the shell:

  rem place the mark
      marknet C:\NET\NETWARE.MRK

  rem load the NetWare shell TSR's
      ipx
      net3
  rem optional portions of the shell
  rem netbios
  rem int2f

  rem switch to login drive and log in
      F:
      login USERNAME

At a minimum, the items in uppercase will need to be customized for a
given user and workstation.

NetWare could then be released with the following batch file:

  rem let the server know we're leaving
      z:\public\logout
  rem restore the workstation
      relnet C:\NET\NETWARE.MRK

As of TSR Utilities version 3.0, you may release the NETBIOS emulator
independently from NETx and IPX. You should always release NETx and
IPX together.


4. WATCH and DISABLE
---------------------------------------------------------------------
WATCH.COM is a memory-resident program that keeps track of other
memory resident programs. As a TSR goes resident, WATCH updates a data
area in memory that contains information about what interrupt vectors
were taken over. This information can later be used by MAPMEM and
DISABLE to show more details about interrupts than normally available.

Installation of WATCH.COM is optional. All of the TSR Utilities except
DISABLE can be used whether or not WATCH is installed.

If you want to use it, WATCH.COM should be installed as one of the
first TSR's in your AUTOEXEC.BAT file. WATCH may be loaded into low
memory or, if a compatible memory manager is in use, into high memory.

WATCH uses about 3100 bytes of memory when it is installed. Most of
this memory holds various information about the TSR's installed in the
system -- it includes a copy of the interrupt vector table and a data
area containing a list of the interrupt vectors taken over by each
TSR. This information is used by DISABLE to deactivate and reactivate
TSR's without removing them from memory. It is also used by MAPMEM to
report more accurately on the interrupt vectors trapped by each TSR.

With DISABLE.EXE, you can disable and reenable specified memory
resident programs without removing them from memory. Its function is
analogous to that performed by REFEREE from Persoft, although DISABLE
has neither a fancy user interface nor an option to work from within
other programs. DISABLE can allow conflicting TSR's to coexist, and it
can let you run applications whose keystrokes conflict with those of
TSR's already loaded. DISABLE also provides a small bonus in that it
can be used to detect the presence of a particular TSR in memory, thus
allowing the design of semi-intelligent batch files. (Note that, as of
version 3.0, MAPMEM also can detect the presence of a particular TSR,
without requiring that WATCH be loaded.)

In order to use DISABLE, you must install WATCH.COM prior to loading
any TSR that you wish to disable. WATCH keeps the detailed information
about each memory resident program that DISABLE uses to later control
them.

Like the other TSR Utilities, DISABLE is operated from the command
line. You specify a single TSR by its name (if you are running DOS 3.0
or later) or by its address as determined from a MAPMEM report
(described below). If you specify an address, immediately precede the
address with a dollar sign "$" and specify the address in hexadecimal.

The name specified for a TSR is the one reported by MAPMEM in the
"Name" column. If this column reports "n/a", then you must instead
specify the address from the "PSP" column.

DISABLE accepts the following command line syntax:

  DISABLE TSRname|$PSPaddress [options]

Options may be preceded by either / or -. Valid options
are as follows:

     /A     reactivate the specified TSR.
     /C     check for the presence of the specified TSR.
     /O     disable the TSR even if dangerous (Override).
     /Q     write no screen output.
     /U     work with upper memory blocks.
     /?     write a help screen.

If no option is specified, DISABLE will disable the named TSR. When /A
is specified, a previously disabled TSR is reenabled.

/C causes DISABLE simply to check for the presence of a TSR. It writes
an appropriate screen message and returns a DOS ERRORLEVEL to indicate
whether the TSR is currently in memory: 0 if the TSR is present, 2 if
it is not present, 254 or higher if an error occurs.

/O allows DISABLE to proceed with disabling a TSR even if internal
checks indicate that it isn't safe to do so. Use this option only
after careful experimentation indicates that it is safe to do so.

/Q prevents DISABLE from writing any screen output. DOS ERRORLEVEL is
still set to allow batch files to determine the results.

/U allows DISABLE to access upper memory blocks. You cannot disable a
TSR loaded high without using this option. As with RELEASE and RELNET,
you must have a compatible memory manager in order to use the DISABLE
/U option. See section 2 for more information.

DISABLE sets the DOS ERRORLEVEL in order to return status information
to a batch file. It uses the following values of errorlevel:

  0       success: TSR is present, was disabled, or was reenabled.
  1       TSR is present, but no action was required to enable or disable it.
  2       TSR is not present in memory.
  254     invalid command line.
  255     severe error.

Examples of using DISABLE:

  DISABLE SK              disables SideKick
  DISABLE SK /A           reenables SideKick
  DISABLE SK /C           checks for the presence of SideKick
  DISABLE SK /A /U        reenables SideKick when it was loaded into
                          high memory
  DISABLE $2F2E           disables the TSR at address 2F2E (hex)


5. MAPMEM, RAMFREE, and DEVICE
---------------------------------------------------------------------
These three utilities provide status information about DOS memory
usage. They don't make active changes to the system like RELEASE and
DISABLE do.

MAPMEM.EXE displays a map of DOS memory. It shows the resident
programs, how much memory they use, and what interrupt vectors each
one controls. MAPMEM also shows information about expanded and
extended memory when available.

MAPMEM writes to the standard output -- hence, the output can be
printed or stored to a file by using DOS redirection.

Here is an example of MAPMEM output:

MAPMEM 3.2, Copyright 1991 TurboPower Software

Psp  Cnt   Size Name       Command Line        Hooked Vectors
---- --- ------ ---------- ------------------- ----------------------
      2  74,704 DOS
1240  2   3,296 4DOS                           2E
      1      80 ---free---
1316  1     464 MODE
133B  2   9,216 DESKPOP    /k /x /1            05 08 09 13 16 25 26 28
157F  2   3,296 TPE                            1B
164F  3   3,328 4dos       /e /x /u            22 23 24 2F
1722  2 560,736 ---free---
        655,360 ---total--

EMS Memory
0000     16,384 n/a
        770,048 ---free---
      1,048,576 ---total--

XMS Memory
0001    409,600 n/a
0002    266,240 n/a
0003     73,728 n/a
0004    568,320 n/a
0005     22,528 n/a
         35,840 ---free---
      1,376,256 ---total--

"Psp" stands for Program Segment Prefix. This is the physical address,
specified in hexadecimal, where the program was loaded. If you're
running DOS 2.x, you'll need to use an address from this column to
pass to DISABLE.

"Cnt" is the number of memory blocks DOS is using to manage the
program. This will typically be two: one for the program itself and
another for the environment that stores the program name, the DOS
path, and other environment variables.

"Size" is the number of bytes of memory, specified in decimal,
allocated to the program.

The "Name" column shows the name of the program that allocated the
block. An "n/a" in this column means either that the program
deallocated its environment to reduce memory usage or that the system
is running DOS 2.x, where the owner names are simply not available.
Note that, under MS-DOS 5.0, an alternate method allows MAPMEM to find
the TSR name even if it deallocated its environment.

"Command line" shows the command line entered when the TSR was
originally loaded. Some TSR's overwrite their command line with other
code or data in order to save memory space. MAPMEM can usually detect
this behavior and will display "n/a" in the command line column when
it does.

The last column will be titled as either "Chained vectors" or
"Hooked vectors". When WATCH is loaded, "Chained" will appear;
otherwise, "Hooked" will. The numbers in this column indicate what
interrupt vectors the TSR has grabbed. Without WATCH, MAPMEM must use
a heuristic technique to identify the owner of each vector; don't be
surprised if you see some ridiculous looking vector numbers. With
WATCH, MAPMEM should report an accurate list for each TSR, and should
show the complete chain of control for each interrupt.

MAPMEM indicates disabled TSR's by displaying the word "disabled" in
the interrupt vector column of the report.

MAPMEM displays free memory blocks with the notation "---free---", and
the total amount of memory in a particular region with the notation
"---total--".

On systems running a compatible memory manager, MAPMEM will also
contain a section reporting memory used in the region between 640K and
1 megabyte. This section is interpreted just like the one for lower
memory. Because of the lack of complete standards for managing high
memory, the names and attributes of programs in high memory may
sometimes appear garbled: unfortunately there is little we can do
about this without building features specific to particular memory
managers into the TSR Utilities.

The expanded memory report shows each allocated block of expanded
memory, as well as the free and total EMS space. If a program has
assigned a name to an EMS memory block, that name will appear adjacent
to the block size.

Similarly, when an XMS (extended) memory driver such as HIMEM.SYS is
loaded, MAPMEM reports the blocks of allocated extended memory. A name
is never available for XMS memory.

If extended memory is available and no HIMEM driver is loaded, MAPMEM
will report the free and total amount of raw extended memory. These
numbers can be misleading because some applications allocate extended
memory by making it appear that the memory is no longer installed on
the system.

MAPMEM offers the following command line options:

     /C name  check whether TSR "name" is loaded.
     /E       report expanded (EMS) memory.
     /F       report free areas only.
     /H       do not use WATCH information for vectors.
     /Q       write no screen output with /C option.
     /S       show summary of all memory areas.
     /U       report upper memory blocks.
     /V       verbose report.
     /X       report extended (XMS) memory.
     /?       write this help screen.

When /C is specified, MAPMEM does not produce its normal report.
Instead, it simply checks to see whether the named TSR is currently in
memory. MAPMEM then writes an appropriate screen message, and also
sets the DOS ERRORLEVEL so that a batch file can detect the results.
MAPMEM returns errorlevel 2 if the TSR isn't loaded, 1 if there was a
syntax error, and 0 if the TSR is in memory. Note that this option
does *not* require WATCH to be loaded.

/E causes MAPMEM to generate its expanded memory report.

/F causes MAPMEM to report just the free areas in normal, high,
expanded, and extended memory.

/H causes MAPMEM to report "hooked" vectors, even if WATCH is loaded.

/Q prevents MAPMEM from writing any screen output. This option is only
meaningful in combination with the /C option.

/S generates a "summary" report. The report shows just the size, name,
and command line of each program in conventional memory, including any
free blocks. It also shows the free and total memory for EMS and XMS.

/U causes MAPMEM to write information about MS-DOS 5.0 high memory
(upper memory blocks).

/V generates a verbose report instead of the standard report about
normal and high memory. In this case, MAPMEM shows each individual
memory block rather than just one for each program. It also adds two
new columns of information. "Mcb" stands for Memory Control Block.
This is a physical address, expressed in hexadecimal, of the DOS data
structure used for managing each block of memory. The MCB address is
typically one less than the address of the program. "Files" reports
the number of files kept open by the TSR. In most cases this will be
zero, in which case the corresponding column of the report is left
blank. When it is non-zero, the maximum number of files opened by the
rest of the programs (including the foreground application) is reduced
accordingly.

When /V is active, MAPMEM also reports the memory allocation of each
DOS device driver under DOS 5. It also shows details of memory
associated with the interrupt vector table, the BIOS data area, and
various DOS data areas.

RAMFREE.COM is a tiny program with a single purpose: to tell you how
many bytes of memory are free for the next application. The number it
reports is the same as that reported by (some versions of) the DOS
CHKDSK utility. RAMFREE's advantage is that you don't need to wait for
your hard disk to be analyzed before you find out how much memory is
free.

DEVICE.EXE reports on device drivers installed by the CONFIG.SYS file.
It shows the memory used by DOS itself, any additional drivers
installed in CONFIG.SYS, and the space used for DOS file handles and
buffers. Here is a simple example of DEVICE output:

 Address     Bytes   Name           Hooked vectors
---------   ------   -------------- --------------
0070:0BB3        -   CON
0070:0C68        -   AUX
0070:0C7A        -   COM1
0070:0D17        -   PRN
0070:0D29        -   LPT1
0070:0E15        -   CLOCK$
0070:0EE5        -   3 Block Units
0070:2071        -   LPT2
0070:2083        -   LPT3
0070:2095        -   COM2
0000:2C58    37712   NUL            08 0A 0C 0D 0E 13 25 26 29 31 70 72
                                    73 74 75 76 77
09A5:0000     3488   0 Block Units
0A7F:0000       18   EMMXXXX0
0A7F:0012       46   386MAX$$       20
0A83:0000      768   1 Block Unit   19
0AB3:0000      768   1 Block Unit
0AE3:0000    18256   DOS buffers

The devices up to and including NUL are all part of DOS. DEVICE lumps
their memory usage into a single value next to the NUL device. The
memory usage associated with NUL does not include the interrupt vector
table, the BIOS data area, or the low-memory DOS data area. If you
wish to add this memory to the total, just take the hexadecimal
segment of the first driver you see (in this case CON) and multiply it
by 16 decimal. When the segment is 0070 as shown, that adds 1792 bytes
to the total space for DOS.

DEVICE also lumps all of the drivers up to NUL into a single block
when it comes to reporting hooked interrupt vectors. Because WATCH
can't be installed prior to these device drivers, DEVICE must use an
empirical technique to detect which vectors each driver controls.
Therefore, some meaningless vectors may appear in the list. Any
vectors that are grabbed by another program after the driver is loaded
will not appear.

"Block units" typically refer to disk drives. Any drivers that appear
after the NUL device are in the order that you've entered them in
CONFIG.SYS. Drivers loaded for non-standard hard disks, like
SpeedStor, sometimes make odd entries in the DEVICE report, as shown
with "0 Block Units" above. RAM disks appear more logically: each of
the "1 Block Unit" entries above is a VDISK with the data stored in
extended memory.

Devices like 386MAX may also cause odd-looking entries: 386MAX puts
most of its code in extended memory, and leaves just a bit behind in
normal memory.

DEVICE offers the following command line options:

     /R     raw report.
     /?     write a help screen.

The raw report shows more information about the device drivers, but in
a less convenient format. Here's an example, taken on the same system
as the previous report.

 Starting      Next             Strategy   Interrupt   Device
 Address     Hdr Addr   Attr   Entry Pnt   Entry Pnt   Name
---------   ---------   ----   ---------   ---------   --------
0000:2C58   0AB3:0000   8004   0000:14C6   0000:14CC   NUL
0AB3:0000   0A83:0000   0800   0000:00A9   0000:00D4   1 Block Unit
0A83:0000   0A7F:0012   0800   0000:00A9   0000:00D4   1 Block Unit
0A7F:0012   0A7F:0000   C000   0000:0036   0000:003B   386MAX$$
0A7F:0000   09A5:0000   8000   0000:0036   0000:003B   EMMXXXX0
09A5:0000   0070:0BB3   2000   0000:0012   0000:001D   0 Block Units
0070:0BB3   0070:0C68   8013   0000:00C6   0000:00D1   CON
0070:0C68   0070:0D17   8000   0000:00C6   0000:00D7   AUX
0070:0D17   0070:0E15   A040   0000:00C6   0000:00E6   PRN
0070:0E15   0070:0EE5   8008   0000:00C6   0000:010C   CLOCK$
0070:0EE5   0070:0C7A   0840   0000:00C6   0000:0112   3 Block Units
0070:0C7A   0070:0D29   8000   0000:00C6   0000:00D7   COM1
0070:0D29   0070:2071   A040   0000:00C6   0000:00EC   LPT1
0070:2071   0070:2083   A040   0000:00C6   0000:00F4   LPT2
0070:2083   0070:2095   A040   0000:00C6   0000:00FC   LPT3
0070:2095   0070:FFFF   8000   0000:00C6   0000:00DD   COM2

In this report, the drivers are listed in DOS priority order rather
than the order in which they are loaded in memory. Additional columns
describe how DOS treats each driver. Ray Duncan's book "Advanced
MS-DOS" is a good place to learn more about these details.

The DEVICE program assumes that all device drivers are loaded in the
CONFIG.SYS file. That is not the case with the NetWare shell, which
patches itself into the device driver chain. DEVICE will write a
warning message and terminate before reporting the first patched-in
driver. The raw device report will still show all of the devices even
in this case.


6. EATMEM
---------------------------------------------------------------------
EATMEM is a small program that is useful only to software developers.
It is a TSR that consumes a specified amount of memory. Developers can
use it to simulate a system with less memory, or to create a buffer
zone between an application and programs preceding it.

The memory used by EATMEM can be freed only by using MARK and RELEASE.

Call EATMEM with a single command line parameter, specifying the
(decimal) number of KILOBYTES to eat up:

  EATMEM KiloBytesToEat

For example, EATMEM 10 consumes 10K bytes of memory.

EATMEM will allow you to eat up all available memory, leading to a
system crash when COMMAND.COM cannot be reloaded. Be sure to calculate
how much memory to use before calling EATMEM.


7. Known Limitations
---------------------------------------------------------------------
RELEASE and RELNET are capable of removing many, but not all, TSR's
from memory. If you find that RELEASE doesn't successfully remove a
TSR, try RELNET instead. Even with RELNET, however, some TSR's cannot
be released without specific internal knowledge of the TSR. Since we
don't have (or care about) all such TSR's, RELEASE and RELNET may not
be compatible with them. If you find that RELNET won't release a TSR,
there is little we can do to help you.

The most common examples of TSR's that we can't be released are those
that cooperate with other TSR's in memory. Examples include
Microsoft's MOUSE driver and its associated MENU program; and the
program CED with its "user-installed commands" such as KEYIN, HS, RAW,
and others. These programs can be released, but only if all the
cooperating partners are released at the same time. CED is
well-behaved in that it provides a built-in command (KILL) to release
its partners. MOUSE is not so flexible, though.

Another problem TSR (and one that we hear about regularly) is the
Token Ring IPX driver for Novell NetWare. For some reason, IBM
designed this IPX driver in two pieces: one part that is loaded as a
device driver in CONFIG.SYS and another that is loaded as a TSR in
AUTOEXEC.BAT. RELNET does not release device drivers in general, and
it cannot release the TSR portion of the Token Ring driver without
also releasing the device driver portion.

You should almost never use RELEASE or RELNET to release disk caching
programs. If you do so, part of the information that should be stored
on disk will never be written there, and you may end up with a
corrupted disk as a result. If you know that the disk cache uses a
"write-through" algorithm (which guarantees that all writes
immediately go to disk), or if the disk cache has a "flush the cache"
command, then it may be safe to release the cache.

You cannot release the FASTOPEN and APPEND TSR's provided with DOS 3.3
and later. These TSR's patch internal DOS data areas that cannot be
reliably located even by MARKNET and RELNET.

You cannot use DISABLE to deactivate SideKick Plus, whose swapping
technique is incompatible with DISABLE.

For reasons we haven't been able to determine, when using the
combination of PC-DOS 4.00 and 386MAX 6.00 it isn't possible to reload
the NetWare NETX shell high after unloading it once using RELNET /U.
If you have this problem, we recommend that you toss your DOS 4.00 and
upgrade to MS-DOS 5.0.


8. Version History
---------------------------------------------------------------------
If you're converting to this version from version 2.5 or earlier, be
sure to delete RELEASE.COM, DISABLE.COM, and MAPMEM.COM from your
directories. The new versions of these programs are EXE files instead
of COM files.

Always be sure to make just one version of the TSR Utilities
accessible on your disk. Many of the utilities cooperate with one
another and require matched versions to work correctly.

See the source code for the programs for more detailed information
about changes.

Version 3.2  11/22/91
  All
    - the approach to identifying high memory blocks was generalized
      to allow the utilities to work with more memory managers
  MAPMEM
    - handle some DRDOS 6.0 segment numbering conventions
    - fix cosmetic indentation problem in raw extended memory summary
  RELEASE
    - reverse order in which memory blocks are released to work
      correctly with the 386MAX high memory manager
    - merge free blocks in high memory when possible (QEMM doesn't do
      this automatically)
    - don't restore parent segment if it's no longer valid (applies
      to QEMM LOADHI)
  RELNET
    - a change made in 3.1 caused RELNET to crash under DOS 3.3
    - reverse order in which memory blocks are released to work
      correctly with the 386MAX high memory manager
    - merge free blocks in high memory when possible (QEMM doesn't do
      this automatically)
    - don't restore parent segment if it's no longer valid (applies
      to QEMM LOADHI)
  WATCH
    - deal with odd vector addresses as trapped by DOS 5 MODE command

Version 3.1  11/4/91
  Documentation
    - clarified compatibility issues with various versions of 386MAX
      and QEMM386
  MAPMEM
    - EMS report wasn't showing last EMS block
    - there was a name reporting problem with TSR's that shrink their
      environment block to zero size but don't deallocate it (found
      with FluShot+)
    - was leaving interrupts 0, 3F, and others pointing to itself
      after halting
    - wouldn't show command line and hooked vectors for TSR's that
      overwrote the low portion of the PSP with data
    - wouldn't find a program (using /C) whose name was stored in
      lowercase in the environment (noticed with Windows 3.0).
  RELNET
    - needed to restore less of the DOS variables table. Restoring
      something in the previously restored region sometimes disabled
      high memory access after the release
    - added /I option to prevent shutting down IPX events and sockets
  RAMFREE
    - now supports >640K free RAM
    - now adds RAMFREE's environment block to free memory reported
  WATCH
    - lost control of int 21 when FluShot+ grabbed it
    - didn't save vector change when a program grabbed int 27
    - didn't update stubs when a program grabbing int 21 or 27 was
      released
    - ended up rewriting WATCH again to solve these compatibility
      problems. The memory consumed by WATCH shrank by 1700 bytes as a
      result!

Version 3.0 10/12/91
  Numerous changes to provide compatibility with MS-DOS 5.0 and
  programs loaded into high memory. See TSR30.DOC for details.

Version 2.9  5/4/89
  MAPMEM
    - fix problem when EMS is available but none is allocated
  DISABLE
    - fix problem when TSR to disable is last one loaded
    - disallow disable when patches would overlap (SK+)
    - add /O option to allow disable even for overlap (Periscope)
  RELEASE/RELNET
    - don't treat file marks as protected marks

Version 2.8  3/10/89
  add MARKNET/RELNET
  add DEVICE
  add extended memory reporting to MAPMEM
  add TSR detection capability to DISABLE
  treat file and net marks as protected in RELEASE
  add key stuffing routine to RELEASE
  remove 8259 revector routine from RELEASE (available in RELNET)

Version 2.7  3/4/89
  used for private testing of MARKNET/RELNET

Version 2.6  1/15/89
  fix problem in MARK/RELEASE when command processor is EXE file
  convert source to Turbo Pascal 5.0

Version 2.5  6/2/87
  version checks to avoid mixing different MARK/RELEASE
:
many intervening versions
:
Version 1.0  1/2/86
  initial version

For information about other versions, see the source files.


9. Copyright and License Information
---------------------------------------------------------------------
The TSR Utilities are Copyright (c) 1986,1991 by Kim Kokkonen. All
Rights Reserved.

Although these programs are copyrighted, you may distribute them
freely as long as you do not sell them or include them with other
software that you sell. The TSR Utilities may be sold by user's groups
and shareware distributors for a fee not to exceed $10. Otherwise, if
you wish to sell the TSR Utilities, alone or as part of another
software package, please contact us for a license agreement.

These programs are not shareware: we're not asking for a donation.
However, if you request that we send you a new version, we'll ask for
$20 to cover our time and costs. The disk you receive will include the
latest version of the TSR Utilities, including the complete source
code.

We upload new versions of the TSR Utilities to LIB 6 of the PCVENB
forum on CompuServe. The executable programs are stored in a file
called TSRCOM.ZIP, and the source code is stored in a file called
TSRSRC.ZIP. From CompuServe, the programs fan out to public bulletin
boards around the world.

TurboPower Software also maintains a small bulletin board system just
for the purpose of downloading our software. The BBS number is
719-260-9726. You'll find TSRCOM.EXE and TSRSRC.EXE in file area 2
(TurboPower Software Files). These are self-extracting archives. Our
BBS is a Wildcat! system; just follow the prompts to log in the first
time. Due to the transient nature of bulletin boards, we cannot
recommend other BBS's you should call to download the latest version.

The TSR Utilities were written by Kim Kokkonen of TurboPower Software,
with thanks to Neil Rubenking for the original idea behind MARK and
RELEASE. Special thanks also to Richard Wilson and Barry Simon at
Cal Tech for the idea that lead to FMARK, and for much useful
correspondence about the TSR Utilities. The TSR Utilities are written
in Turbo Pascal and assembly language.

You can reach Kim Kokkonen at:

     TurboPower Software
     P.O. Box 49009
     Colorado Springs, CO 80949-9009

     719-260-6641 (voice, Monday-Friday 9AM-5PM)
     719-260-7151 (fax)
     Compuserve: 76004,2611

```
{% endraw %}

## TSR30.DOC

{% raw %}
```
                 Changes in TSR Utilities Version 3
                             Kim Kokkonen
                          TurboPower Software
                               11/22/91
                ------------------------------------

This file describes changes in version 3.2 of the TSR Utilities,
relative to an earlier version, 2.9. It assumes familiarity with
previous versions of the utilities. See TSR.DOC for more information.

Version 3.0 of the utilities was the first new version for a couple of
years, and included a number of major changes. Version 3.1 of the
utilities was a cleanup version, fixing compatibility problems and
downright bugs discovered in version 3.0. Version 3.2 of the utilities
generalizes the high memory support, so that it no longer requires DOS
5.0 or a particular version of any memory manager.

If you're updating from a previous version of the utilities, be sure
to replace every file with the new version, since many of the programs
work cooperatively.

Generally, the utilities have been updated for compatibility with
MS-DOS 5.0, and to support high memory (upper memory blocks) as
implemented by DOS 5.0 and other third party memory managers. Any
memory manager that supports the UMB (upper memory block) features of
XMS (extended memory specification) memory managers should work with
the high memory features of the TSR Utilities. This includes 386MAX
(Qualitas), QEMM386 (Quarterdeck), HIMEM/EMM386 (Microsoft), and
HIDOS/EMM386 (Digital Research).

If you're using just the high memory features of MS-DOS 5.0 itself,
without additional memory managers, note that you must have at least
the following in your CONFIG.SYS in order for the TSR Utilities to
access high memory:

  DEVICE=HIMEM.SYS
  DEVICE=EMM386.SYS RAM
  DOS=UMB

See the discussion of the EMM386.SYS driver in your MS-DOS 5.0
documentation for more information about options compatible with
creating upper memory blocks.

With other memory managers such as QEMM and 386MAX you should *not*
put the DOS=UMB statement in CONFIG.SYS. (This is a change from
versions 3.0 and 3.1 of the TSR Utilities.)

To test whether your memory manager is compatible with the TSR
Utilities high memory features, try entering MAPMEM /U at the DOS
command line. If you get a high memory report from MAPMEM, then you
can assume that the memory manager is compatible with TSR Utilities
3.0. Because of the lack of complete standards for managing high
memory, the names and attributes of programs in high memory may
sometimes appear garbled: unfortunately there is little we can do
about this without building features specific to particular memory
managers into the TSR Utilities.

Note that even if you don't get a high memory report from MAPMEM, you
can still use the TSR Utilities 3.0 without upper memory support.

The /U option of DISABLE, MAPMEM, RELEASE, and RELNET activates the
high memory features of these utilities. DISABLE won't deactivate or
reactivate a TSR loaded in high memory unless /U is specified. MAPMEM
doesn't report programs loaded above 640K unless /U is specified.
WATCH, MARK, FMARK, and MARKNET transparently access high memory when
it is available.

The /U option causes a fundamental change in the behavior of RELEASE
and RELNET. It is important that you understand what it does in order
to use these utilities properly.

When the /U option is *not* specified, RELEASE and RELNET remove
programs in address order. That is, with a few exceptions, they
deallocate any memory blocks that have a memory address greater than
or equal to that of the mark.

This behavior is almost never appropriate when TSR's are loaded high.
When high memory is involved, the *chronological* order in which TSR's
were loaded rarely matches the *address* order in which they were
loaded. Before TSR's could be loaded high, these two orderings were
usually the same, so no distinction was necessary. Now, however, it's
common to load one program high, then one low, then another high; or
to load one program into "region 2" of high memory, then another into
"region 1", and so on.

Therefore, when the /U option is activated, RELEASE and RELNET release
memory in *chronological* order. That is, they free up all memory
blocks allocated since the time the mark was placed, regardless of the
address position of the memory. Additional information is now stored
in the mark file or memory mark to allow this to occur. Only when /U
is specified do RELEASE and RELNET access high memory.

If you have *any* TSR's loaded into high memory, you should use the /U
option, even if the particular TSR you're unloading is located in low
memory. Depending on the chronological order in which you loaded the
TSR's, an unload from low memory may also trigger unloads from high
memory, or vice versa.

When you intend to use the /U option, you must provide a unique mark
name for each mark (because there is no unambiguous way to find the
correct unnamed mark). A mark name is inherent in the filename
specified to FMARK and MARKNET.

Because of the chronological nature of RELEASE /U, you can load the
MARK high and the associated TSR low (or vice versa) if desired.

--------------------------------------------------------------------

The following list details the changes made for version 3.2 to each
program in the TSR Utilities:

DEVICE.EXE
  - no substantive changes

DISABLE.EXE
  - deactivates programs loaded high if the new /U option is specified
  - uses a feature new to DOS 5 to find TSR's by name even if they
    have released their environment
  - new /Q option prevents writing any screen output

EATMEM.COM
  - no substantive changes

FMARK.COM
  - new /Q option prevents writing any screen output
  - stores new "mcb chain" section of mark file for use in releasing
    programs loaded high
  - the mark itself may be loaded high

MAPMEM.EXE
  - rewritten from scratch to allow reporting of upper memory blocks
  - fixes problems that occurred when TSR's were loaded in CONFIG.SYS
  - low memory report includes pre-DOS memory blocks so that the
    blocks total to 640K
  - reports on device driver memory allocation under DOS 5 when the /V
    option is active
  - reports EMS handle names when available
  - uses a feature new to DOS 5 to report TSR's by name even if they
    have released their environment
  - modifies some command line options (type MAPMEM /? to see current
    options)
  - new /C option checks for presence of a named TSR
    (syntax: /C TsrName). Halts with ErrorLevel 2 if the TSR isn't
    loaded, ErrorLevel 1 if there is a command line syntax error, or
    ErrorLevel 0 if the TSR is loaded. Note that this feature does not
    require WATCH to be in memory.
  - new /F option reports on just the free memory blocks available in
    normal, high, expanded, and extended memory
  - new /Q option prevents writing any screen output when the /C
    option is used
  - new /S option reports a summary of all memory areas
  - new /U option activates upper memory reporting
  - new /X option activates reporting of extended (XMS) memory
  - supports some segment naming conventions of DRDOS 6
  - fixes problem with TSRs that shrink their environment to zero size
    (Flushot+)

MARK.COM
  - new /Q option prevents writing any screen output
  - stores new "mcb chain" section of memory mark for use in releasing
    programs loaded high. This increases the amount of memory used for
    a mark by about 50 to 500 bytes depending on the number of memory
    blocks allocated.
  - the mark itself may be loaded high

MARKNET.EXE
  - new /Q option prevents writing any screen output
  - stores new "mcb chain" section in mark file for use in releasing
    programs loaded high
  - saves BIOS data area associated with LPT ports
  - saves XMS (extended memory) allocation state
  - the mark itself may be loaded high. Note, however, that MARKNET
    needs up to 18K of free memory when it is initially loaded, even
    though it keeps less than 300 bytes when it goes resident.

RAMFREE.COM
  - now supports >640K free RAM
  - adds current environment block size to reported free RAM

RELEASE.EXE
  - fixes problems that occurred when TSR's were loaded in CONFIG.SYS
  - closes open file handles of released memory blocks
  - updated for new behavior of WATCH
  - new /Q option prevents writing any screen output
  - new /U option allows it to remove programs loaded high
  - increases maximum number of memory blocks to 256
  - won't do an unnamed release on a memory mark loaded prior to a
    file mark
  - reverses order in which memory blocks are released to work
    correctly with 386MAX high memory
  - merges free blocks in high memory when possible (QEMM doesn't do
    this automatically)

RELNET.EXE
  - fixes problems that occurred when TSR's were loaded in CONFIG.SYS
  - updated for new behavior of WATCH
  - new /Q option prevents writing any screen output
  - new /U option allows it to remove programs loaded high
  - increases maximum number of memory blocks to 256
  - adds automatic cancellation of NetWare IPX event control blocks,
    now allowing independent release of Novell's NETBIOS.EXE TSR
  - new (in 3.1) /I option prevents cancellation of IPX control blocks
  - restores BIOS data area associated with LPT ports
  - restores XMS (extended memory) allocation state
  - reverses order in which memory blocks are released to work
    correctly with 386MAX high memory
  - merges free blocks in high memory when possible (QEMM doesn't do
    this automatically)

WATCH.COM
  - corrects problem that occurred when TSR's unloaded themselves
  - WATCH itself may be loaded high
  - adds support for TSR's loaded high
  - reduce resident size of WATCH by about 1000 bytes

```
{% endraw %}

## EATMEM.ASM

{% raw %}
```
;use up memory by allocating and staying resident
;for memory size testing of various programs
;call as EATMEM kBytesToEat
;
;written 8/7/85 Kim Kokkonen, TurboPower Software
;modified 5/2/87 to use MASM version 4.0

Cseg    segment public para
        assume  cs:Cseg, ds:Cseg, es:Cseg
        org     100H

eat     proc    near

;parse command line to get amount of memory to eat
comentry:
        mov     si,0081H           ;point to command line string
        mov     di,offset amount$  ;and to string storage area
        xor     cx,cx              ;count chars in cx
        cld
getst:  lodsb                      ;get first non-blank
        cmp     al,' '
        je      getst
        cmp     al,13              ;check for end of input
        jne     more
        mov     dx,offset noinp$   ;no parameter specified ==>error
        jmp     short error

more:   inc     cx
        stosb                      ;store the non-blank character
        lodsb                      ;get next char into al
        cmp     al,' '             ;terminate with <space> or <cr>
        je      done
        cmp     al,13
        je      done
        jmp     short more

;convert amount$ to an integer in amount
;cx holds count of chars
done:   mov     al,36
        stosb                      ;put string terminator on amount$
        mov     si,offset amount$
        mov     di,10
        inc     cx
nextc:  dec     cx
        jcxz    eatit              ;exit if all digits used

        mov     ax,amount          ;partial result into ax
        mul     di                 ;multiply by 10 (should all fit in ax)
        mov     amount,ax          ;store ax

        lodsb                      ;next char into al
        cmp     al,30H             ;make sure it's a digit
        jb      baddig
        cmp     al,39H
        ja      baddig
        and     al,0FH             ;convert to digit
        xor     ah,ah
        add     amount,ax          ;add to amount
        jmp     short nextc

;calculate the paragraphs to eat up
eatit:  mov     dx,amount
        cmp     dx,512
        ja      baddig             ;don't eat more than 512k
        push    dx

;show a success message
        mov     dx,offset succ1$
        mov     ah,9
        int     21H
        mov     dx,offset succ2$
        mov     ah,9
        int     21H

;eat up the memory (free with mark and release)
        pop     dx
        mov     cl,6
        shl     dx,cl           ;convert kB to paras
        mov     ax,3100H        ;return code 0
        int     21H             ;exit and remain resident

baddig: mov     dx,offset baddig$

error:  mov     ah,9
        int     21H
        mov     ax,4C01H
        int     21H

eat     endp

succ1$  db      'Eating up '
amount$ db      32,32,32,32                 ;string holding amount of kB
succ2$  db      ' kBytes of RAM space',13,10,36
amount  dw      0                           ;integer holding amount of kb, then paras
noinp$  db      'No parameter specified. Usage: EATMEM kBtoEat',13,10,36
baddig$ db      'Bad number of kB specified',13,10,36

Cseg    ends
        end     ComEntry
```
{% endraw %}

## FMARK.ASM

{% raw %}
```
;==============================================================================
;FMARK.ASM - mark a position in memory,
;            above which TSRs will later be cleared by RELEASE
;            this version leaves a minimal size MARK in memory,
;              storing the rest on disk
;            requires a single command line parameter naming
;              the file where the mark will be stored
;
; Syntax:  FMARK [/Q] [d:][path]filename
;==============================================================================
; written for TASM
; by Kim Kokkonen, TurboPower Software
; Copyright (c) 1986,1991 Kim Kokkonen, TurboPower Software.
; May be freely distributed but not sold except by permission.
; telephone: 719-260-6641, Compuserve 76004,2611
;==============================================================================
; version 2.0  6/17/86
;   start at a version number compatible with other TSR utilities
; :
; long intervening history
; :
; version 3.0  9/24/91
;   add Quiet option
; version 3.1  11/4/91
;   no change
; version 3.2  11/22/91
;   change method of accessing high memory
;   store parent len as well as parent segment
;==============================================================================
;
Cseg    segment public para
        assume  cs:Cseg, ds:Cseg, es:Cseg
        locals  @@

        org     016H               ;access to parent's PSP
parpsp  label   word

        org     02CH
envseg  label   word               ;access to environment segment

        org     80H
cmdlen  label   byte               ;command line length
        org     81H
cmdlin  label   byte               ;first character of command line

        org     100H

fmark   proc    near

;deallocate environment block of this mark
        push    es
        mov     ax,envseg       ;environment segment
        mov     es,ax           ;  into es
        mov     ah,49H
        int     21H             ;deallocate, no reason for an error to occur
        pop     es

;find first mcb in high memory, if any
        mov     ax,3000h                ;get DOS version
        int     21H
        cmp     al,3
        jb      @@7                     ;no XMS driver possible
        mov     ax,4300h
        int     2Fh                     ;multiplex call for XMS
        cmp     al,80h                  ;proper signature?
        jne     @@7                     ;no XMS driver
        mov     ax,4310h                ;get XMS control address
        int     2Fh
        mov     xmsxxx,bx               ;save it
        mov     xmsxxx[2],es
        mov     ah,10h
        mov     dx,0FFFFh
        call    dword ptr xmsadr        ;ask to allocate FFFF paras of UMB
        cmp     bl,0B0h                 ;will fail with B0 if UMBs avail
        je      @@0
        cmp     bl,0B1h                 ;will fail with B1 if UMBs all allocated
        jne     @@7                     ;no UMBs exist
@@0:    int     12H
        mov     cl,6
        shl     ax,cl                   ;get segment of top of memory

@@1:    mov     es,ax
        cmp     byte ptr es:[0000h],'M' ;potential mcb?
        jnz     @@6                     ;not an mcb, try next segment
@@2:    mov     cx,ax                   ;save potential start mcb in cx
@@3:    inc     ax
        add     ax,es:[0003h]           ;ax = start of next mcb
        jc      @@5                     ;can't be an mcb if we wrapped
        mov     es,ax                   ;address of next mcb
        mov     dl,es:[0000h]
        cmp     dl,'M'
        jz      @@3                     ;good start mcb
        cmp     dl,'Z'
        jz      @@9                     ;good end mcb
@@5:    mov     ax,cx                   ;restore last start segment
@@6:    cmp     ax,0FFFFh               ;top of memory?
        je      @@7
        inc     ax                      ;try next segment
        jmp     @@1

@@7:    xor     cx,cx                   ;no matching UMB
@@9:    mov     firsthimcb,cx           ;store first high mcb

;parse command line for file name
        push    cs
        pop     es
        mov     si,offset cmdlin ;point to command line
        mov     di,offset filnm  ;point to filename storage string
        cld

get1:   lodsb                    ;get first non-blank
        cmp     al,32            ;skip space
        je      get1
        cmp     al,9             ;skip tab
        je      get1
        cmp     al,13            ;check for end of input
        jne     geto             ;got a non-blank, now get the parameter
        cmp     di,offset filnm  ;filename already specified?
        jne     gotit            ;done if so
        jmp     error            ;no parameter --> error

geto:   cmp     al,'/'           ;check for option
        je      getoc
        cmp     al,'-'
        jne     get2
getoc:  lodsb
        call    upcase
        cmp     al,'Q'
        jnz     operr
        mov     quiet,1          ;set quiet option
        jmp     get1             ;loop around

operr:  mov     dx,offset badopt ;bad option
        jmp     errmsg

get2:   cmp     di,offset filnm  ;filename already specified?
        jne     operr            ;error if so

get2a:  call    upcase           ;upcase char in al
        stosb                    ;store the non-blank character
        lodsb                    ;get next character
        cmp     al,32
        je      get1             ;loop back around for blank
        cmp     al,9
        je      get1             ;loop back around for tab
        cmp     al,13
        je      gotit            ;terminate for <cr>
        jmp     short get2a      ;keep adding characters to filename

;create the specified file
gotit:  mov     al,0
        stosb                    ;terminate ASCIIZ pathname
        mov     dx,offset filnm
        xor     cx,cx            ;normal attribute
        mov     ah,3CH
        int     21H              ;DOS CREAT
        jae     store

        mov     dx,offset badfil ;bad file name
        jmp     errmsg

;store the interrupt vector table
store:  mov     bx,ax           ;keep file handle in bx
        push    ds              ;save ds
        mov     cx,400H         ;1024 bytes to store
        xor     ax,ax
        mov     ds,ax           ;segment 0
        assume  ds:nothing
        mov     dx,ax           ;offset 0
        mov     ah,40H
        int     21H             ;write block to file
        pop     ds              ;get ds back
        assume  ds:cseg
        jae     egasav          ;ok, continue

        mov     dx,offset nowrit ;write error
        jmp     errmsg

;store the EGA save pointer
egasav: push    ds             ;save ds
        mov     cx,0008H        ;8 bytes to store
        mov     ax,0040H
        mov     ds,ax           ;BIOS data segment
        assume  ds:nothing
        mov     dx,00A8H        ;EGA save table pointer
        mov     ah,40H
        int     21H             ;write block to file
        pop     ds              ;get ds back
        assume  ds:cseg
        jae     intcom          ;ok, continue

        mov     dx,offset nowrit ;write error
        jmp     errmsg

;store the interapplications communications area
intcom: push    ds             ;save ds
        mov     cx,0010H        ;16 bytes to store
        mov     ax,0040H
        mov     ds,ax           ;BIOS data segment
        assume  ds:nothing
        mov     dx,00F0H        ;interapplications communication area
        mov     ah,40H
        int     21H             ;write block to file
        pop     ds              ;get ds back
        assume  ds:cseg
        jae     parent          ;ok, continue

        mov     dx,offset nowrit ;write error
        jmp     errmsg

;store the parent's psp
parent: mov     cx,2                    ;2 bytes to store
        mov     dx,offset parpsp        ;point to parent's psp
        mov     ah,40H
        int     21H                     ;write block to file
        jae     parlen                  ;ok, continue

        mov     dx,offset nowrit ;write error
        jmp     errmsg

parlen: mov     ax,ds:[parpsp]
        dec     ax
        push    ds
        mov     ds,ax
        mov     dx,3                    ;ds:dx -> parent's length
        mov     ah,40H
        mov     cx,2
        int     21H                     ;write block to file
        pop     ds
        jae     ems                     ;ok, continue

        mov     dx,offset nowrit        ;write error
        jmp     errmsg

;determine whether EMS is present
ems:    push    bx              ;temporarily store the file handle
        xor     bx,bx           ;zero the EMS handle count in case EMS not present
        mov     dx,offset emsnm
        mov     ax,3D00H
        int     21H
        jb      sthand          ;EMS driver not installed

;EMS present, close the open "handle" first
        mov     bx,ax           ;EMS handle into bx
        mov     ah,3EH
        int     21H             ;close handle

;get the current EMS page map
        mov     ah,4DH
        mov     di,offset emsmap ;es=cs already
        xor     bx,bx           ;required by some versions of EMM (bug workaround)
        cld                     ;required by some versions of EMM
        int     67H
        or      ah,ah
        jz      sthand          ;result ok
        xor     bx,bx           ;error, return zero EMS handles

;store the number of active handles
sthand: mov     emscnt,bx               ;count of active handles

;write the handle table to disk
        shl     bx,1
        shl     bx,1                    ;4 bytes per handle
        inc     bx
        inc     bx                      ;2 more bytes for the handle count
        mov     cx,bx                   ;number of bytes to write
        pop     bx                      ;get file handle back
        mov     dx,offset emscnt        ;what we're writing
        mov     ah,40H
        int     21H                     ;write out the table
        jae     stomcb                  ;ok,continue

        mov     dx,offset nowrit        ;error while writing
        jmp     errmsg

;write the allocated mcb chain
stomcb: push    bx                      ;save file handle
        mov     ah,52H                  ;get first mcb segment
        int     21H
        mov     ax,es:[bx-2]            ;ax=first mcb
        push    cs
        pop     es                      ;es=cs

        mov     di,emscnt               ;get starting address of mcbmap
        shl     di,1
        shl     di,1
        add     di,offset emsmap
        mov     si,di                   ;cs:[si] -> mcbcnt
        add     di,2                    ;cs:[di] -> mcbmap
        xor     cx,cx                   ;cx will count mcbs
        cld
        push    ds
        assume  ds:nothing

mcbnext:stosw                           ;store mcb segment held by ax
        mov     ds,ax                   ;ds:[0] points to mcb
        mov     ax,ds:[1]               ;get mcb owner
        stosw                           ;store it
        inc     cx                      ;increment count
        cmp     byte ptr ds:[0],'Z'     ;end of mcb chain?
        je      mcbdone
        mov     ax,ds                   ;restore ax to mcb segment
        inc     ax                      ;skip over mcb itself
        add     ax,ds:[3]               ;add length of memory block
        jmp     mcbnext

mcbdone:mov     ax,cs:firsthimcb        ;check for high memory
        or      ax,ax
        jz      mcbend
        mov     cs:firsthimcb,0         ;only do it once
        jmp     mcbnext

mcbend: pop     ds
        assume  ds:cseg
        mov     [si],cx                 ;store number of mcbs
        sub     di,si                   ;di=number of bytes in mcb group table
        mov     cx,di                   ;count of bytes in cx
        mov     dx,si                   ;what we're writing (mcbcnt+mcbmap)
        pop     bx                      ;get file handle back
        mov     ah,40H
        int     21H                     ;write out the table
        jae     closfl                  ;ok,continue

        mov     dx,offset nowrit        ;error while writing
        jmp     errmsg

;close up the table file
closfl: mov     ah,3EH
        int     21H                     ;close handle
        jae     idstr                   ;ok, continue

        mov     dx,offset badcls        ;error while closing file
        jmp     errmsg

;put a standard ID string into the PSP for RELEASE to check
idstr:  mov     si,offset id
        mov     di,60H                  ;unused area of the PSP
        mov     cx,idlen                ;characters in ID string
        cld
        rep     movsb                   ;copy string

;copy the filename into the command tail
        mov     si,offset filnm
        mov     di,offset cmdlin
        xor     cx,cx
nxtf:   lodsb
        or      al,al
        jz      donf
        inc     cx
        stosb
        jmp     nxtf
donf:   mov     cmdlen,cl

;print message and TSR
gores:  cmp     quiet,0         ;check quiet flag
        jnz     gores1
        mov     dx,offset didit
        mov     ah,9
        int     21H             ;write success message including filename
        mov     dx,offset crlf  ;newline
        mov     ah,9
        int     21H

gores1: xor     dx,dx           ;get number of paragraphs to keep
        mov     dl,cmdlen       ;length of command line
        add     dx,0090H        ;rest of PSP plus paragraph margin
        mov     cl,4
        shr     dx,cl           ;convert to paragraphs
        mov     ax,3100H
        int     21H             ;terminate but stay resident

;error output - show syntax line
;dx has offset of error message
errmsg: mov     ah,9
        int     21H
error:  mov     dx,offset syntax
        mov     ah,9
        int     21H
        mov     ax,4C01H
        int     21H

fmark   endp

upcase  proc    near
        cmp     al,'a'
        jb      noup
        cmp     al,'z'
        ja      noup
        and     al,0DFH          ;uppercase
noup:   ret
upcase  endp

emsnm   db      'EMMXXXX0',0    ;file name for testing EMS presence
id      db      'FM3.2 TSR'     ;id string for RELEASE check
idlen   equ     $-id

;messages
badfil  db      13,10,'Could not open file for writing',36
nowrit  db      13,10,'Error while writing',36
badcls  db      13,10,'Error closing table file',36
badopt  db      13,10,'Bad command line option',36
syntax  db      13,10,'Syntax:  FMARK [/Q] [d:][path]filename'
crlf    db      13,10,36
didit   db      'FMARK 3.2, Copyright 1991 TurboPower Software',13,10
didit2  db      'Marked current memory position in '

;data storage area
filnm   db      50H dup (36)    ;mark file name
quiet   db      0               ;quiet flag
xmsadr  label   dword           ;XMS control address
xmsxxx  dw      2 dup (0)
firsthimcb dw   0               ;segment of first mcb in high mem
emscnt  dw      0               ;holds number of active pages in map that follows
emsmap  =       $               ;EMS page map (up to 1024 bytes)
mcbcnt  =       emsmap+400H     ;number of allocated mcbs
mcbmap  =       mcbcnt+2        ;MCB map (up to 1024 bytes)

Cseg    ends
        end    Fmark
```
{% endraw %}

## MARK.ASM

{% raw %}
```
;==============================================================================
; MARK.ASM - mark a position in memory,
;            above which TSRs will later be cleared by RELEASE
;            MARK can be called multiple times, each RELEASE will clear
;            above the last MARK called.
; If MARK is called with something on the command line, that text will
; be stored in the program segment prefix at offset 80H, where it is
; later accessible to RELEASE for a "named" release.
;
; Syntax:    MARK [/Q] [!][MarkName]
;==============================================================================
; written for TASM
; Copyright (c) 1986,1991 Kim Kokkonen, TurboPower Software.
; May be freely distributed but not sold except by permission.
; telephone: 719-260-6641, Compuserve 76004,2611
;==============================================================================
; version 1.0  2/8/86
;     original public release
;     (thanks to Neil Rubenking for an outline of the method used)
; :
; long intervening history
; :
; version 3.0  9/24/91
;   add Quiet option
;   add code for tracking high memory
; version 3.1 11/4/91
;   no change
; version 3.2 11/22/91
;   change method of accessing high memory
;   store parent len as well as parent segment
;==============================================================================

Cseg    segment public para
        assume  cs:Cseg, ds:Cseg, es:nothing
        locals  @@

        org     81H
cmdlin  label   byte                    ;first character of command line

        org     100H
comentry: jmp     doit

;put the following in the MAP file
public idstr,vector,egasav,intcom,emscnt,emsmap

idstr   db      'MM3.2 TSR'             ;used to find this TSR
firsthimcb dw   0                       ;segment of first mcb in high mem

;**** the following will be overwritten by the vector table image *************
;success message and version number
didit  db      'MARK 3.2, Copyright 1991 TurboPower Software',13,10
didit2 db      'Marked current memory position',13,10,36
errst  db      'Invalid command line',13,10,36
;file name for testing EMS presence
emsnm  db      'EMMXXXX0',0
quiet  db      0
xmsadr  label   dword                           ;XMS control address
xmsxxx  dw      2 dup (0)
;******************************************************************************

vector equ     0120H           ;offset in code seg where vector table is copied
veclen equ     0400H           ;1024 bytes for vectors
egasav equ     vector+veclen
egalen equ     8               ;8 bytes for EGA save area
intcom equ     egasav+egalen
intlen equ     10H             ;16 bytes for interapps communication area
parent equ     intcom+intlen
parlen equ     parent+2        ;parent's PSP length
emscnt equ     parlen+2
emsmap equ     emscnt+2
;mcbcnt and mcbmap actually follow after used portion of emsmap
mcbcnt equ     emsmap+400H     ;count of allocated mcbs
mcbmap equ     mcbcnt+2        ;array of mcb segments
;newloc follows after the longest possible emsmap and mcbmap
newloc equ     mcbmap+400H     ;location of relocated code

;*****************************************************************************

doit   proc    near

;find first mcb in high memory, if any
        mov     ax,3000h                ;get DOS version
        int     21H
        cmp     al,3
        jb      @@7                     ;no XMS driver possible
        mov     ax,4300h
        int     2Fh                     ;multiplex call for XMS
        cmp     al,80h                  ;proper signature?
        jne     @@7                     ;no XMS driver
        mov     ax,4310h                ;get XMS control address
        int     2Fh
        mov     xmsxxx,bx               ;save it
        mov     xmsxxx[2],es
        mov     ah,10h
        mov     dx,0FFFFh
        call    xmsadr                  ;ask to allocate FFFF paras of UMB
        cmp     bl,0B0h                 ;will fail with B0 if UMBs avail
        je      @@0
        cmp     bl,0B1h                 ;will fail with B1 if UMBs all allocated
        jne     @@7                     ;no UMBs exist
@@0:    int     12H
        mov     cl,6
        shl     ax,cl                   ;get segment of top of memory

@@1:    mov     es,ax
        cmp     byte ptr es:[0000h],'M' ;potential mcb?
        jnz     @@6                     ;not an mcb, try next segment
@@2:    mov     cx,ax                   ;save potential start mcb in cx
@@3:    inc     ax
        add     ax,es:[0003h]           ;ax = start of next mcb
        jc      @@5                     ;can't be an mcb if we wrapped
        mov     es,ax                   ;address of next mcb
        mov     dl,es:[0000h]
        cmp     dl,'M'
        jz      @@3                     ;good start mcb
        cmp     dl,'Z'
        jz      @@9                     ;good end mcb
@@5:    mov     ax,cx                   ;restore last start segment
@@6:    cmp     ax,0FFFFh               ;top of memory?
        je      @@7
        inc     ax                      ;try next segment
        jmp     @@1

@@7:    xor     cx,cx                   ;no matching UMB
@@9:    mov     firsthimcb,cx           ;store first high mcb

;relocate ourselves out of the way
        push    cs
        pop     es
        mov     di,newloc
        push    di                      ;will act as a return address
        mov     si,offset parse
        mov     cx,lastcode-parse
        cld
        rep     movsb
        ret                             ;"return" to the relocated code

;scan command line for /Q option
parse:  mov     si,offset cmdlin
        cld
get1:   lodsb
        cmp     al,13                   ;end of command line?
        je      pmess
        cmp     al,'/'                  ;option switch?
        je      getop
        cmp     al,'-'
        jne     get1                    ;loop around
getop:  mov     di,si                   ;save option position
        lodsb
        cmp     al,'a'
        jb      noup
        cmp     al,'z'
        ja      noup
        and     al,0DFH                 ;uppercase
noup:   cmp     al,'Q'
        jne     error
        mov     quiet,1                 ;set quiet flag
        dec     di
        mov     al,' '
        stosb                           ;clear option
        stosb
        jmp     get1                    ;loop around

error:  mov     dx,offset errst
        mov     ah,9
        int     21H
        mov     ax,4C01H
        int     21H

;print message if not quiet
pmess:  cmp     quiet,0
        jnz     chkems
        mov     dx,offset didit
        mov     ah,9
        int     21H                     ;write success message

;determine whether EMS is present
chkems: mov     dx,offset emsnm
        mov     ax,3D00H
        int     21H
        jnc     emspres                 ;EMS driver installed
        xor     bx,bx
        jmp     short stocnt

;EMS present, close the open handle first
emspres:
        mov     bx,ax
        mov     ah,3EH
        int     21H

;store the EMS page map
        mov     ah,4DH
        mov     di,emsmap
        xor     bx,bx                   ;required by some versions of EMM
        cld                             ;required by some versions of EMM
        int     67H

;store the number of active EMS handles
stocnt:
        mov     ds:[emscnt],bx          ;count of active handles

;store the interrupt vector table (overwrites initial messages)
        xor     ax,ax
        mov     ds,ax                   ;source address segment 0
        assume  ds:nothing
        xor     si,si                   ;offset 0
        mov     di,vector               ;destination offset, es=cs already
        mov     cx,veclen shr 1         ;count of words to store
        rep     movsw                   ;copy vectors to our table

;store the EGA save area
        mov     ax,40H
        mov     ds,ax                   ;point to BIOS data area
        mov     si,00A8H                ;EGA save area pointer
        mov     di,egasav
        mov     cx,egalen shr 1
        rep     movsw                   ;copy information to our save area

;store the interapplications communication area
        mov     si,00F0H                ;interapps communication area address
        mov     di,intcom
        mov     cx,intlen shr 1
        rep     movsw                   ;copy information to our save area

;store the parent's PSP segment
        push    cs
        pop     ds                      ;ds = cs
        assume  ds:cseg
        mov     ax,ds:[16h]             ;get parent's PSP from our PSP
        mov     ds:[parent],ax          ;store in data save area
        dec     ax
        mov     es,ax
        mov     ax,es:[0003h]           ;get length of parent's psp
        mov     ds:[parlen],ax          ;store in data save area

;store the mcb chain
        mov     ah,52H                  ;get first mcb segment
        int     21H
        mov     ax,es:[bx-2]            ;ax=first mcb
        push    cs
        pop     es                      ;es=cs

        mov     di,cs:[emscnt]          ;get starting address of mcbmap
        shl     di,1
        shl     di,1
        add     di,emsmap
        mov     si,di                   ;cs:[si] -> mcbcnt
        add     di,2                    ;cs:[di] -> mcbmap
        xor     cx,cx                   ;cx will count mcbs
        cld
        push    ds
        assume  ds:nothing

mcbnext:
        stosw                           ;store mcb segment held by ax
        mov     ds,ax                   ;ds:[0] points to mcb
        mov     ax,ds:[1]               ;get mcb owner
        stosw                           ;store it
        inc     cx                      ;increment count
        cmp     byte ptr ds:[0],'Z'     ;end of mcb chain?
        je      mcbdone
        mov     ax,ds                   ;restore ax to mcb segment
        inc     ax                      ;skip over mcb itself
        add     ax,ds:[3]               ;add length of memory block
        jmp     mcbnext

mcbdone:mov     ax,firsthimcb           ;check for high memory
        or      ax,ax
        jz      mcbend
        mov     firsthimcb,0            ;only do it once
        jmp      mcbnext

mcbend: pop     ds
        assume  ds:cseg

;terminate and stay resident
gores:  mov     [si],cx                 ;store mcbcnt
        mov     dx,di                   ;dx = past last used mcb segment
        add     dx,000FH                ;add paragraph roundup
        mov     cl,4
        shr     dx,cl                   ;convert to paragraphs
        mov     ax,3100H
        int     21H                     ;terminate but stay resident

lastcode:
doit    endp

Cseg    ends
        end     ComEntry
```
{% endraw %}

## RAMFREE.ASM

{% raw %}
```
;RAMFREE
;determine amount of available RAM without using CHKDSK
;Kim Kokkonen, TurboPower Software, 6/85
;written for MASM or TASM
;Updated 10/20/91
;   work for free memory greater than 640K
;   add size of environment block
;
Cseg    segment public para
        assume  cs:Cseg, ds:Cseg, es:Cseg

        org     100H
ramfree proc    near

;shrink memory available to this program
coment: mov     bx,offset theend
        add     bx,15
        mov     cl,4
        shr     bx,cl                   ;convert bytes to paragraphs
        mov     ah,4AH
        int     21H                     ;DOS SETBLOCK function

;try to allocate the maximum memory
        mov     ah,4AH
        mov     bx,0FFFFH
        int     21H                     ;use SETBLOCK again
                                        ;BX contains paragraphs available

;add size of environment
        mov     ax,ds:[002CH]
        dec     ax
        mov     es,ax
        add     bx,es:[0003H]

;convert paragraphs to a doubleword number of bytes in dx:ax
        mov     ax,bx
        xor     dx,dx
        mov     dl,ah                   ;dl will contain top four bytes of ah
        mov     cl,4
        shr     dx,cl
        shl     ax,cl

;convert doubleword dx:ax to an ASCII string
        mov     di,offset outp$         ;di indexes next output position
        mov     si,offset digits        ;si indexes digit table

nextd:  mov     cx,[si]                 ;low word of digit
        add     si,2
        mov     bx,[si]                 ;high word of digit
        add     si,2
        xor     bp,bp                   ;counter for this digit
nextc:  sub     ax,cx
        sbb     dx,bx
        jc      ddone                   ;jump if carry
        inc     bp                      ;else increment counter
        jmp     nextc
ddone:  add     ax,cx                   ;undo last subtraction
        adc     dx,bx
        mov     cx,bp                   ;counter into cx
        cmp     di,offset outp$         ;first output character?
        jne     store                   ;output zeros if not leading
        jcxz    chknc                   ;no output for leading zeros
store:  or      cl,30H                  ;convert count to digit
        mov     [di],cl                 ;store output
        inc     di                      ;next output position
chknc:  cmp     si,offset theend        ;all of table?
        jb      nextd                   ;loop if not

;now output the string and halt
        mov     dx,offset bmess$
        mov     ah,09H
        int     21H                     ;print string
        mov     ax,4C00H
        int     21H

ramfree endp

;data area
bmess$  db      'RAM bytes available: '
outp$   db      32,32,32,32,32,32,32,13,10,36           ;ASCII output string
digits  dd      1000000,100000,10000,1000,100,10,1      ;conversion table
theend  label   byte

Cseg    ends
        end     ComEnt
```
{% endraw %}

## WATCH.ASM

{% raw %}
```
;WATCH.ASM
;resident routine watches programs going resident
;and keeps a list of interrupt vector changes in an internal data structure
;==============================================================================
; to be assembled by TASM
; Copyright (c) 1986,1991 Kim Kokkonen, TurboPower Software.
; May be freely distributed but not sold except by permission.
; telephone: 719-260-6641, Compuserve 76004,2611
;==============================================================================
; version 2.2  3/4/87
;   First release, version to be consistent with MAPMEM.PAS
; :
; long intervening history
; :
; version 3.0  9/24/91
;   add tracking for TSRs that unload themselves
;   add support for TSRs loaded high
;   WATCH may be loaded high
; version 3.1  11/4/91
;   rewrite again to solve problems with SWAPMM, FSP, DATAPATH, DATAMON
; version 3.2  11/22/91
;   change method of accessing high memory
;   deal with DOS 5 MODE int trapping (int seg < psp seg)
;==============================================================================
;
;uncomment following line to generate more publics in MAP file
;       debug   = 1

cseg    segment public para
        assume  cs:cseg, ds:nothing, es:nothing, ss:nothing
        locals  @@

        org     080H
cmdline label   byte                    ;pointer to command line

        org     100H
pentry: jmp     init

;always put the following in WATCH.MAP to update MEMU.PAS
public nextchange,emesg,changevectors,origvectors

;***********************************************************************
;data structures part of COM file
                even
nextchange      dw      0               ;next position to write in changes area

firstmcb        dw      ?               ;first MCB segment
firsthimcb      dw      0               ;first MCB segment in high memory

;temporary stack used by interrupt handler
newsp           dw      ?               ;initial stack pointer
newss           dw      ?               ;segment of our temporary stack (=cseg)
tmpret          dw      ?               ;used while switching stacks

;information saved about the calling program
oldsp           dw      ?               ;stack pointer
oldss           dw      ?               ;stack segment

;previous interrupt handlers
dos_int         label dword
old21           dw 2 dup (?)            ;old int21 vector
tsr_int         label dword
old27           dw 2 dup (?)            ;old int27 vector

;id code for a PSP data block
pspid           equ     0FFFFH          ;id used to indicate a PSP block

;structure of a changevectors data block
pspblock        struc
                id      dw      ?       ;id word, always pspid
                psp     dw      ?       ;psp segment
                len     dw      ?       ;length of psp
                unu1    dw      ?       ;unused
pspblock        ends
vecblock        struc
                vec     dw      ?       ;vector number 0..255
                veco    dw      ?       ;vector offset
                vecs    dw      ?       ;vector segment
                unu2    dw      ?       ;unused
vecblock        ends

;***********************************************************************
;resident data structures not part of COM file
changevectors   =       offset emesg            ;data area overwrites emesg & beyond
vrecsize        =       8                       ;number of bytes per vector change record
maxchanges      =       128                     ;maximum number of vector changes
vsize           =       maxchanges*vrecsize     ;size of vector change area in bytes

;vector table buffers
origvectors     =       offset changevectors+vsize ;location of original vector table
veclen          =       1024                    ;size of vector table in bytes
newstackpos     =       origvectors+veclen      ;location of newstack
ssize           =       128                     ;number of bytes in temporary stack
newloc          =       newstackpos+ssize       ;location for relocated installation code

;***********************************************************************
;int21 handler
;  traps functions 31, 49, 4C, and 7761
int21h  proc far
ifdef   debug
        public  int21h
endif
        assume ds:nothing
        pushf                           ;save flags
        sti                             ;allow interrupts

        cmp     ah,31H                  ;terminate and stay resident call?
        jne     @@1
        call    addcurrpsp              ;dx = paras to keep
        jmp     short @@4

@@1:    cmp     ah,49H                  ;deallocate block call?
        jne     @@2
        call    remblock                ;remove specified block if a psp
        jmp     short @@4

@@2:    cmp     ah,4CH                  ;normal program halt?
        jne     @@3
        call    checkblocks
        jmp     short @@4

@@3:    cmp     ax,7761H                ;"wa"tch ID call?
        jne     @@4
        call    checkblocks             ;assure change list up to date
        push    bp
        mov     bp,sp                   ;set up stack frame
        and     word ptr [bp+8],0FFFEH  ;clear carry flag
        pop     bp
        xchg    ah,al                   ;flip ah and al as a signature
        mov     bx,cs                   ;return WATCH psp in bx
        popf
        iret                            ;return to caller

@@4:    popf
        jmp     dos_int                 ;let DOS take over
int21h  endp

;***********************************************************************
;int27 handler
;  watches for programs going resident
int27h  proc far
ifdef   debug
        public int27h
endif
        assume ds:nothing
        pushf
        sti
        push   dx
        add    dx,15            ;pass size of block in paras to addcurrpsp
        shr    dx,1
        shr    dx,1
        shr    dx,1
        shr    dx,1
        call   addcurrpsp       ;get current psp and add block to list
        pop    dx
        popf
        jmp     tsr_int
int27h  endp

;***********************************************************************
;get current PSP in bx and add new block
;entry: dx = paragraphs to keep
addcurrpsp proc near
ifdef   debug
        public  addcurrpsp
endif
        assume  ds:nothing
        call    setup           ;switch stacks and save registers
        assume  ds:cseg
        mov     ah,51H          ;get current PSP in bx
        pushf
        call    dos_int
        call    addblock        ;add block at bx, length dx to changes
        call    shutdown        ;restore registers and switch stacks
        assume  ds:nothing
        ret
addcurrpsp endp

;***********************************************************************
;remove PSP block, if any, specified by es
remblock proc near
ifdef   debug
        public  remblock
endif
        assume  ds:nothing
        call    setup           ;switch stacks and save registers
        assume  ds:cseg
        mov     bx,es           ;save segment being deallocated in bx
        call    matchpsp        ;return offset in changevectors of segment
        or      si,si           ;any matching block?
        jz      @@1
        call    rempsp          ;remove psp
@@1:    call    shutdown        ;restore registers and switch stacks
        assume  ds:nothing
        ret
remblock endp

;***********************************************************************
;scan chain of mcbs starting at segment ax
;remove halting psp from change list if needed
checkchain proc near
ifdef   debug
        public  checkchain
endif
@@1:    mov     es,ax
        mov     bx,es:[0001h]           ;bx = psp of block
        mov     dx,es:[0003h]           ;dx = len of block
        inc     ax
        cmp     ax,bx                   ;does psp = mcb+1?
        jne     @@2                     ;jump if not
        cmp     ax,cx                   ;does psp = current program?
        je      @@2                     ;jump if so
        push    dx
        call    matchpsp                ;find matching psp in changevectors
        pop     dx
        or      si,si                   ;is there a matching psp?
        jnz     @@2                     ;jump if so
        push    ax
        push    cx
        push    dx
        call    addblock                ;add this psp
        pop     dx
        pop     cx
        pop     ax
@@2:    cmp     byte ptr es:[0000h],'Z' ;end of chain
        je      @@3
        add     ax,dx
        jmp     @@1
@@3:    ret
checkchain endp

;***********************************************************************
;check for new memory blocks and add if needed
;remove halting psp from change list if needed
checkblocks proc near
ifdef   debug
        public  checkblocks
endif
        assume  ds:nothing
        call    setup                   ;switch stacks and save registers
        assume  ds:cseg

        mov     ah,51H                  ;get current psp in bx
        pushf
        call    dos_int

        call    matchpsp                ;is current program in change list?
        or      si,si
        jz      @@0                     ;jump if not
        call    rempsp                  ;remove it if not

@@0:    mov     cx,bx                   ;cx = psp of halting program
        mov     ax,firstmcb             ;start with first mcb
        call    checkchain              ;check this chain
        mov     ax,firsthimcb           ;scan high memory
        or      ax,ax
        jz      @@1
        call    checkchain
@@1:    call    shutdown                ;restore registers and switch stacks
        assume  ds:nothing
        ret
checkblocks endp

;***********************************************************************
;setup routine for interrupt hook routines
; switches stacks, saves registers, sets ds=cs
setup   proc    near
ifdef   debug
        public  setup
endif
        assume  ds:nothing
        pop     cs:tmpret       ;save return address as we switch stacks
        mov     oldss,ss        ;save current stack
        mov     oldsp,sp
        cli                     ;switch to our stack
        mov     ss,newss
        mov     sp,newsp
        sti
        push    ax              ;store registers
        push    bx
        push    cx
        push    dx
        push    si
        push    di
        push    bp
        push    ds
        push    es
        push    cs              ;set ds=cs
        pop     ds
        assume  ds:cseg
        push    cs:tmpret       ;return
        ret
setup   endp

;***********************************************************************
;shutdown routine for interrupt hook routines
; restores registers, switches stacks
shutdown proc near
ifdef   debug
        public  shutdown
endif
        pop     cs:tmpret
        pop     es              ;restore registers
        pop     ds
        assume ds:nothing
        pop     bp
        pop     di
        pop     si
        pop     dx
        pop     cx
        pop     bx
        pop     ax
        cli                     ;restore stack
        mov     ss,cs:oldss
        mov     sp,cs:oldsp
        sti
        push    cs:tmpret       ;return
        ret
shutdown endp

;***********************************************************************
;add specified block to changes
;  entry: bx = psp of block, dx = length of block in paras
addblock proc near
ifdef   debug
        public  addblock
endif
        assume  ds:cseg
        call    addhdr          ;add a psp header block
        call    addvecs         ;add blocks for each hooked vector
        ret
addblock endp

;***********************************************************************
;add header for a psp block
;  entry: bx = psp of block, dx = length of block in paras
;  exit:  alters di
addhdr  proc near
ifdef   debug
        public  addhdr
endif
        assume  ds:nothing
        mov     di,nextchange
        cmp     di,vsize-vrecsize       ;assure room for next record
        ja      @@1
        mov     word ptr cs:changevectors[di].id,pspid
        mov     cs:changevectors[di].psp,bx
        mov     cs:changevectors[di].len,dx
        add     di,vrecsize
        mov     nextchange,di
@@1:    ret
addhdr  endp

;***********************************************************************
;add vector blocks for each hooked vector
;  entry: bx = psp of block, dx = length of block in paras
;  exit:  alters ax,cx,dx,si,di,bp
addvecs proc    near
ifdef   debug
        public  addvecs
endif
        assume  ds:cseg
        push    ds
        add     dx,bx                   ;now dx points to end of block
        mov     di,nextchange           ;cs:changevectors[di] -> output area
        xor     si,si
        mov     ds,si                   ;ds:si -> vectors
        assume  ds:nothing
        xor     cx,cx                   ;cx = vector counter
        cld                             ;forward

@@1:    lodsw                           ;ax = vector offset
        mov     bp,ax                   ;save vector offset
        lodsw                           ;ax = vector segment

        cmp     ax,dx                   ;is vector above high limit?
        jae     @@3

        push    cx
        mov     cx,ax
        cmp     bp,800h                 ;don't add unless a small offset
        ja      @@1a                    ;(this is a trap for DOS 5 MODE)

        push    bp
        shr     bp,1
        shr     bp,1
        shr     bp,1
        shr     bp,1
        add     cx,bp                   ;ax = equivalent segment of interrupt
        pop     bp

@@1a:   cmp     cx,bx                   ;is vector above low limit?
        jb      @@2

        pop     cx
        cmp     di,vsize-vrecsize       ;room for another entry?
        ja      @@3
        mov     cs:changevectors[di].vec,cx ;save entry for this vector
        mov     cs:changevectors[di].veco,bp
        mov     cs:changevectors[di].vecs,ax
        add     di,vrecsize
        jmp     short @@3

@@2:    pop     cx
@@3:    inc     cx                      ;next vector
        cmp     cx,0FFh
        jbe     @@1

        mov     nextchange,di
        pop     ds
        assume  ds:cseg
        ret
addvecs endp

;***********************************************************************
;find changeblock matching psp
;  entry: bx = psp to match
;  exit: si = matching block, or 0 if none
;        destroys dx
matchpsp proc near
ifdef   debug
        public  matchpsp
endif
        assume  ds:cseg
        mov     si,offset changevectors
        mov     dx,si
        add     dx,nextchange           ;dx = next unused spot in changevectors
@@1:    cmp     si,dx                   ;end of table
        jae     @@3
        cmp     word ptr [si].id,pspid  ;psp indicator?
        jnz     @@2                     ;jump if not
        cmp     [si].psp,bx             ;matching psp?
        jnz     @@2                     ;jump if not
        ret                             ;else return with match
@@2:    add     si,vrecsize
        jmp     @@1
@@3:    xor     si,si                   ;no match if here
        ret
matchpsp endp

;***********************************************************************
;remove all blocks associated with psp at offset si
;  exit: alters cx,dx,si,di,es
rempsp  proc near
ifdef   debug
        public  rempsp
endif
        assume  ds:cseg
        mov     di,si                   ;save destination
        add     si,vrecsize             ;move to next record
        mov     dx,offset changevectors
        add     dx,nextchange           ;dx = address of next unused
@@1:    cmp     si,dx                   ;end of table?
        jae     @@2                     ;jump if so
        cmp     word ptr [si].id,pspid  ;next psp indicator?
        je      @@2                     ;jump if so
        add     si,vrecsize             ;next block
        jmp     @@1                     ;and loop
@@2:    mov     cx,dx
        sub     cx,si
        shr     cx,1                    ;cx = words to move
        push    cs
        pop     es                      ;es = ds = cs
        cld
        rep     movsw                   ;copy down remaining blocks
        sub     si,di
        sub     nextchange,si           ;update nextchange
        ret
rempsp  endp

;***********************************************************************
;resident portion above, temporary portion below
;***********************************************************************
                align 16
emesg   db      'Cannot install WATCH more than once....',13,10,36
mesg    db      'WATCH 3.2, Copyright 1991 TurboPower Software',13,10
        db      'Installed successfully',13,10,36
pname   db      'TSR WATCHER'
plen    equ     $-pname                 ;length of string
xmsadr  label   dword                   ;XMS control address
xmsxxx  dw      2 dup (0)

;***********************************************************************
;add dummy changeblocks for all psps already resident in chain starting at ax
addchain proc near
ifdef   debug
        public  addchain
endif
        assume  ds:cseg
@@1:    mov     es,ax
        mov     bx,es:[0001h]           ;bx = psp of block
        mov     dx,es:[0003h]           ;dx = len of block
        inc     ax
        cmp     ax,bx                   ;does psp = mcb+1?
        jne     @@2                     ;jump if not
        cmp     ax,newss                ;does psp = WATCH itself?
        je      @@2                     ;jump if so
        call    addhdr                  ;add a header for this block
@@2:    cmp     byte ptr es:[0000h],'Z' ;end of chain
        je      @@3
        add     ax,dx
        jmp     @@1
@@3:    ret
addchain endp

;***********************************************************************
;return segment of first high memory mcb in ax
findhimemstart proc near
ifdef   debug
        public findhimemstart
endif
        mov     ax,3000h                ;get DOS version
        int     21H
        cmp     al,3
        jb      @@7                     ;no XMS driver possible
        mov     ax,4300h
        int     2Fh                     ;multiplex call for XMS
        cmp     al,80h                  ;proper signature?
        jne     @@7                     ;no XMS driver
        mov     ax,4310h
        int     2Fh
        mov     xmsxxx,bx               ;save XMS control address
        mov     xmsxxx[2],es
        mov     ah,10h
        mov     dx,0FFFFh
        call    xmsadr                  ;ask to allocate FFFF paras of UMB
        cmp     bl,0B0h                 ;will fail with B0 if UMBs avail
        je      @@0
        cmp     bl,0B1h                 ;will fail with B1 if UMBs all allocated
        jne     @@7                     ;no UMBs exist
@@0:    int     12H
        mov     cl,6
        shl     ax,cl                   ;get segment of top of memory

@@1:    mov     es,ax
        cmp     byte ptr es:[0000h],'M' ;potential mcb?
        jnz     @@6                     ;not an mcb, try next segment
@@2:    mov     cx,ax                   ;save potential start mcb in cx
@@3:    inc     ax
        add     ax,es:[0003h]           ;ax = start of next mcb
        jc      @@5                     ;can't be an mcb if we wrapped
        mov     es,ax                   ;address of next mcb
        mov     dl,es:[0000h]
        cmp     dl,'M'
        jz      @@3                     ;good start mcb
        cmp     dl,'Z'
        jz      @@9                     ;good end mcb
@@5:    mov     ax,cx                   ;restore last start segment
@@6:    cmp     ax,0FFFFh               ;top of memory?
        je      @@7
        inc     ax                      ;try next segment
        jmp     @@1

@@7:    xor     cx,cx                   ;no matching UMB
@@9:    mov     ax,cx                   ;return segment in ax
        ret
findhimemstart endp

;***********************************************************************
;add dummy changeblocks for all psps already resident
adddummypsp proc near
ifdef   debug
        public  adddummypsp
endif
        assume  ds:cseg
        mov     ah,52H
        int     21H                     ;get DOS list of lists
        mov     ax,es:[bx-2]            ;get first MCB segment
        mov     firstmcb,ax             ;save it for use later too
        call    addchain

        call    findhimemstart          ;find first high memory mcb
        mov     firsthimcb,ax           ;save it for use later too
        or      ax,ax
        jz      @@1
        call    addchain                ;add blocks in high memory too
@@1:    ret
adddummypsp endp

;***********************************************************************
init    proc    near
ifdef   debug
        public  init
endif
        assume  ds:cseg

;use int 21h test to check for previous installation
        mov     ax,7761H                ;special id function
        int     21H
        jc      @@1                     ;not installed if function fails
        cmp     ax,6177H
        jnz     @@1                     ;not installed if id code not returned

;error exit
        mov    dx,offset emesg          ;error message
        mov    ah,09H
        int    21H                      ;DOS print string
        mov    ax,4C01H                 ;exit with error
        int    21H

;not already installed
@@1:    mov    dx,offset mesg           ;success message
        mov    ah,09H
        int    21H                      ;DOS print string

;initialize location of WATCH stack
        mov     newsp,newstackpos+ssize
        mov     newss,cs                ;stack seg is code seg

;put an id label at offset 80H to allow other programs to recognize WATCH
        mov     cx,plen                 ;length of name string
        mov     si,offset pname         ;offset of name string
        mov     di,offset cmdline       ;offset of DOS command line
        cld                             ;transfer in forward direction
        mov     al,cl
        stosb                           ;store length byte first
        rep     movsb                   ;transfer characters

;add psp records for all blocks already resident
        call    adddummypsp

;relocate ourselves out of the way of the resident tables
        push    cs
        pop     es
        mov     di,newloc+10H
        push    di                      ;will act as a return address
        mov     si,offset @@2
        mov     cx,@@3-@@2
        rep     movsb                   ;move code
        ret                             ;"return" to the relocated code

;store image of original vector table (overwrites messages and non-res code)
@@2:    mov     di,origvectors
        push    ds
        xor     si,si                   ;offset 0
        mov     ds,si                   ;source address segment 0
        mov     cx,200H                 ;512 words to store
        rep     movsw                   ;copy vectors to our table
        pop     ds

;store current int 21 and 27 vectors
        mov     ax,3527H
        int     21H
        mov     old27,bx
        mov     old27[2],es
        mov     ax,3521H
        int     21H
        mov     old21,bx
        mov     old21[2],es

;install new vectors
        mov    ax,2527H
        mov    dx,offset int27h
        int    21H
        mov    ax,2521H
        mov    dx,offset int21h
        int    21H

;terminate and stay resident
        mov    dx,newloc
        add    dx,15
        mov    cl,4
        shr    dx,cl
        mov    ax,3100H         ;return success code
        int    21H              ;note WATCH will track itself
@@3:
init    endp

cseg    ends
        end     pentry
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2913

     Volume in drive A has no label
     Directory of A:\

    PC-LOCK3 ZIP    125184  11-20-91   8:13a
    TSR32    ZIP    147947   1-07-92   9:07a
    ADCACH12 ZIP     10402  11-19-91   2:02a
    DVORAK10 ZIP     18659   3-05-92   8:14a
    PKUNZIP  EXE     23528   3-15-90   1:10a
    PCLOCK   TXT       836   3-04-92   4:53p
    PCSIG    TXT      2335   1-21-92   6:09a
    GO       EXE     26022   1-10-92  12:14p
    GO-STRT  DAT       598   3-04-92   4:47p
            9 file(s)     355511 bytes
                            2048 bytes free
