---
layout: post
title: Daylight Savings Time Headache
date: 2017-12-23 10:00:00
permalink: /blog/2017/12/23/
---

This past summer, I added a couple sets of Lotus 1-2-3 disk images to the PCjs archives
([1-2-3 Release 1A](/software/pcx86/app/lotus/123/1a/) and [1-2-3 Release 1A*](/software/pcx86/app/lotus/123/1aa/)), and I had
noticed with some amusement that Lotus had timestamped all their files with the local time of 1:23am.

Fast-forward to this December, when I was updating the directory listings for these Lotus 1-2-3 disks with my
[DiskDump utility]({{ site.github.pages }}/tools/diskdump/), and I noticed that all the file times were *now* being
recorded as 2:23am.

I should explain that Diskdump doesn't crack the contents of each disk image itself: it leaves the details of the FAT file
system to the local operating system, which in my case is macOS (High Sierra).  Each disk image is mounted using the macOS
`hdiutil` utility, and then DiskDump enumerates the contents of the mounted volume.

Sure enough, if I set my computer's clock back 6 months, the first 1-2-3 disk image I mounted would show the correct times:

    ls -lT /Volumes/Untitled/
    total 478
    -rwxrwxrwx  1 Jeff  staff     256 Jun  7 01:23:00 1983 123.CNF
    -rwxrwxrwx  1 Jeff  staff   89856 Jun  7 01:23:00 1983 123.EXE
    -rwxrwxrwx  1 Jeff  staff  113416 Jun  7 01:23:00 1983 123.HLP
    ...

but when I set the clock back to December, this is what I got:

    ls -lT /Volumes/Untitled/
    total 478
    -rwxrwxrwx  1 Jeff  staff     256 Jun  7 02:23:00 1983 123.CNF
    -rwxrwxrwx  1 Jeff  staff   89856 Jun  7 02:23:00 1983 123.EXE
    -rwxrwxrwx  1 Jeff  staff  113416 Jun  7 02:23:00 1983 123.HLP
    ...

I ran some experiments with a disk image I created myself, from a folder containing a couple of old Microsoft Mouse
v2.50 serial drivers.  First, I added a new `test` file to the folder:

    ls -lT MSMOUSE-250/
    total 40
    -rw-r--r--@ 1 Jeff  staff  4138 Sep 13 10:00:00 1984 MOUSE.COM
    -rw-r--r--@ 1 Jeff  staff  4386 Sep 13 10:00:00 1984 MOUSE.SYS
    -rw-r--r--  1 Jeff  staff     5 Dec 23 10:37:46 2017 test

Next, I built a FAT diskette image from the folder, and then I loaded that disk into a PCjs machine, to confirm that all the
times had been preserved as shown:

	 Volume in drive A is MSMOUSE-250
	 Directory of  A:\

	MOUSE    COM     4138   9-13-84  10:00a
	MOUSE    SYS     4386   9-13-84  10:00a
	TEST                5  12-23-17  10:37a
	        3 File(s)    150528 bytes free

Then I mounted the diskette with macOS:

    ls -lT /Volumes/MSMOUSE-250/
    total 19
    -rwxrwxrwx  1 Jeff  staff  4138 Sep 13 11:00:00 1984 MOUSE.COM
    -rwxrwxrwx  1 Jeff  staff  4386 Sep 13 11:00:00 1984 MOUSE.SYS
    -rwxrwxrwx  1 Jeff  staff     5 Dec 23 10:37:46 2017 TEST

The December file time for `TEST` was left as-is, while the September file times were adjusted +1 hour.

Then I unmounted the diskette, set my laptop's date back 6 months, and remounted the diskette:

    ls -lT /Volumes/MSMOUSE-250/
    total 19
    -rwxrwxrwx  1 Jeff  staff  4138 Sep 13 10:00:00 1984 MOUSE.COM
    -rwxrwxrwx  1 Jeff  staff  4386 Sep 13 10:00:00 1984 MOUSE.SYS
    -rwxrwxrwx  1 Jeff  staff     5 Dec 23 09:37:46 2017 TEST

Now the December file time for `TEST` was adjusted -1 hour, while the September file times were left as-is.

On one level, this makes sense: `MOUSE.COM` and `MOUSE.SYS` were created during Pacific Daylight Time (PDT), which is "-0700"
or UTC minus 7 hours, while `TEST` was created during Pacific Standard Time (PST), which is "-0800" or UTC minus 8 hours, and
my local operating system is apparently trying to preserve that distinction.

On the other hand, DST is essentially a time zone "bias", and the entire notion of "time zone" is completely unknown
to the FAT file system.  All it stores are *local* times, not UTC-style times, so any files created at 10am on, say, the
east coast *must* be displayed as 10am files on the west coast, too.  No information is recorded regarding the original time
zone.

And if time zones are irrelevant, shouldn't Daylight Savings Time be irrelevant, too?  As it stands, there is no clock
setting I can choose that will display all three files in the above test with their original times.  Perhaps there's some
macOS "defaults" setting that I can tweak to change this behavior, but so far, I haven't found one.

Can we please just get rid of Daylight Savings Time?  There are no real practical benefits, it burdens our operating systems
and other time-sensitive software with extraneous logic, and it creates obscure headaches like this one.

And look at those two old serial mouse drivers, MOUSE.COM and MOUSE.SYS.  Chances are, they were originally timestamped with
the same local time as the bus mouse drivers (`12:00p`) because they all have the same date (`Sep 13, 1984`).  All it takes is
for the files to pass through a few hands, on computers with different time zones or DST settings, and their timestamps
may change in subtle, unexpected ways.

It's an archivist's nightmare.  Well, OK, maybe nightmare is a bit extreme, but certainly an archivist's headache.
