---
layout: post
title: The PC-SIG Library and ZIP Files
date: 2023-04-06 10:00:00
permalink: /blog/2023/04/06/
preview: /software/pcx86/sw/misc/pcsig/CD-ROM.jpg
---

The PC Software Interest Group, aka PC-SIG, began advertising a directory of public domain software for the IBM PC in early 1983.  A year later, their collection featured over 135 diskettes, which you could purchase for $6 per diskette, plus $4 per order for shipping.  Each diskette was numbered, to make it easy to specify which diskettes you wanted.  By 1986, PC-SIG was one of the most prominent advertisers of user-supported software ("shareware"), sold annual memberships, and had a collection of nearly 500 diskettes.

As CD-ROM technology became popular in late 1980s, PC-SIG began distributing their library on CD-ROM as well.  As of 1987, the library contained over 700 diskettes, so this was a much more convenient and economical way to get the collection.

So far, I've seen only five of their CD-ROM releases:

  - 8th Edition (April 1990, Diskettes 1-2121)
  - 9th Edition (December 1990, Diskettes 1-2485)
  - 10th Edition (September 1991, Diskettes 1-2804)
  - 12th Edition (March 1993, Diskettes 1-3404, 2929 Available)
  - 13th Edition (March 1994, Diskettes 1-4313, 3064 Available)

I recently acquired the 8th Edition CD-ROM, previously unavailable except as a collection of files on Jason Scott's website, [cd.textfiles.com](http://cd.textfiles.com/directory.html) (see "PC-SIG Library Eighth Edition From PC-SIG (April 1990)"), so I uploaded a copy of the CD-ROM to the [Internet Archive](https://archive.org/details/pc-sig-library-cd-rom-8th-edition-1990-04).

[![PC-SIG 8th Edition CD-ROM (April 1990)](/software/pcx86/sw/misc/pcsig/CD-ROM.jpg)](https://archive.org/details/pc-sig-library-cd-rom-8th-edition-1990-04)

I'm sure there were more than those five CD-ROMs.  There was probably an 11th Edition released in 1992.  And "CD ROM" releases were mentioned in their advertisements going back to at least September 1987, so the 8th Edition was definitely not the *first* CD-ROM release.

![PC-SIG Ad Excerpt From PC Magazine 1987-09-15](/blog/images/PC-SIG_Ad_Excerpt_From_PC_Magazine_1987-09-15.jpg)

PC-SIG "editions" were not limited to CD-ROM releases, because at some point, their printed directories were labeled as "editions", too.  Another recent acquisition was a copy of "The PC-SIG Library 4th Edition", published in March 1987, which I've also uploaded to the [Internet Archive](https://archive.org/details/pc-sig-library-4th-edition-1987-03).

[![PC-SIG Library 4th Edition (March 1987)](/blog/images/PC-SIG_Library_4th_Edition_1987-03.jpg)](https://archive.org/details/pc-sig-library-4th-edition-1987-03)

On page 424 of that directory, there is a picture of their "February 1987" CD-ROM, and while the CD-ROM does not appear to mention any "edition", it would likely be considered the "PC-SIG Library 4th Edition" CD-ROM.  It was probably the *first* CD-ROM that PC-SIG produced, too, based on that early date.  At $295, it was also rather expensive, which means that not many people may have bought it, which may explain why the disc hasn't shown up anywhere -- at least not yet.

![PC-SIG Library 4th Edition, Page 424](/blog/images/PC-SIG_Library_4th_Edition_P424.jpg)

The layout of the PC-SIG CD-ROMs changed over time.  In the 8th Edition, the contents of each diskette were deposited in the their own folder.  For example, Disk #1 was stored in `/001_100/DISK0001/`:

       512 Oct  3  1985 ASK.COM
      8320 Jan  1  1970 BLACKJCK.BAS
      1681 Jun 11  1986 CASPAR.BAT
      4376 Jun 11  1986 CASPAR.HLP
      1177 Jun 11  1986 CASPAR0.HLP
      1359 Jun 11  1986 CASPAR1.HLP
      1139 Jun 11  1986 CASPAR2.HLP
       704 Jun 11  1986 CASPAR3.HLP
      1024 Jan  1  1970 CIRCLES.BAS
       198 Mar 26  1983 COPYOVER.BAT
       450 Mar 26  1983 COPYOVER.DOC
      1408 Feb  2  1982 DOTS.BAS
      1299 May 28  1987 FILES001.TXT
      1664 Jan  1  1970 HATDANCE.BAS
      2560 Mar 26  1982 KALEID.BAS
      4608 Mar 26  1982 MAXIT.BAS
      4096 Dec 24  1982 MENU.BAS
      6912 Jan  1  1970 OTHELLO.BAS
      4096 Sep  8  1982 PATTERNS.BAS
      4992 Jan  1  1970 PONGPONG.BAS
       128 Mar 26  1983 SAMPLES.BAS
       512 Mar 26  1982 STRINGS.BAS
     19712 Jun 17  1986 WOMBATS.BAS
     26880 Jun 10  1986 WOMBATS.DOC
     25933 Jun 10  1986 WOMBATS.WP
     15104 Mar 26  1982 YAHTZEE.BAS

However, beginning with the 9th Edition, diskette contents were stored on the CD-ROM as ZIP files (eg, DISK0001.ZIP through DISK2485.ZIP).

As PC-SIG explained, ZIP files were initially used on a case-by-case basis to preserve filenames that were not allowed on CD-ROM, but eventually it was done for all diskettes to save space as well:

> "This zipping was necessary because the High Sierra Format and MS-DOS Extensions allow only the characters A through Z, 0 through 9, and _(underscore) in filenames. Some of our nearly 30,000 files include other characters, so rather than change the original filename given by the author, we elected to zip those files and give the newly created zipped files allowable filenames. (Every disks’ files were zipped on the Ninth Edition in order to fit, as we had approached the maximum for a CD on the Eighth Edition.)"

[More details about the PC-SIG CD-ROM can be found in the [CD-ROM Booklet](https://ia902602.us.archive.org/20/items/pc-sig-library-cd-rom-8th-edition-1990-04/PC-SIG%20Library%20CD-ROM%20%288th%20Edition%29%20%281990-04%29.pdf) that I included with my upload].

It turns out there was another good for reason using for using ZIP files: on a CD-ROM, all files in a directory are stored in ascending (alphabetical) order, which would ruin the "DIR" listing order that some diskette authors depended on.  For example, [Disk #798](/software/pcx86/sw/misc/pcsig/0001-0999/DISK0798/) used filenames with line-drawing characters unique to the IBM PC:

    A:\>DIR
    
     Volume in drive A has no label
     Directory of  A:\
    
    DEMO     BAT      114   5-02-87  11:44a
    PMENU    DOC    25407   8-01-88  11:28a
    BRUN40   EXE    76816  10-08-87   5:57p
    MENGEN   EXE    67847   8-01-88  10:32a
    MG-C     EXE     6723   8-01-88  10:34a
    MG-M     EXE     5261   8-01-88  10:35a
    MGHLP    EXE    26805   8-01-88  10:37a
    PLIC     EXE     4791   8-01-88  10:38a
    PMENU    EXE    21215   7-30-88   4:57p
    DEMO     HLP     8562   5-05-87  12:16p
    DEMO     MEN     5115   5-02-87  12:36p
    M        MEN     1371   7-30-88  12:55p
    FILES798 TXT     2178   8-25-88   2:09p
    GO       BAT       38   7-02-87  11:29a
    GO       TXT      463   7-02-87  11:29a
    ┌─┬─┬─┐             0
    │T│G│S│             0
    │Y│O│T│             0
    │P│                 0
    │E│T│R│             0
    │                   0
    └─┴─┴─┘             0
           22 File(s)     60416 bytes free

While ZIP files did incidentally preserve file order, the ZIP format was not specifically designed for disk preservation (no volume labels, for example), and in the particular case of DISK0798, some filenames were still mangled at some point (though not necessarily by `PKZIP`), because the directory listing was probably intended to display as:

    ┌─┬─┬─┐
    │T│G│S│
    │Y│O│T│
    │P│  A│
    │E│T│R│
    │ │O│T│
    └─┴─┴─┘

Another interesting difference between CD-ROM editions was their degree of "completeness".  At first glance, the 9th Edition CD-ROM would appear to include every diskette from 0001 through 2485, but it turns out that at least 165 of diskettes had their contents removed from the library.  The ZIP file for those 165 diskettes contains nothing more than a `NOTE.TXT` that says:

    ╔═════════════════════════════════════════════════════════════════════════╗
    ║   This disk has been withdrawn by the author from the PC-SIG library.   ║
    ╚═════════════════════════════════════════════════════════════════════════╝

Later CD-ROM editions didn't bother including folders or ZIP files for removed or obsolete diskettes, which is why I noted above that the 12th Edition had only 2929 disks available (out of 3404 total), and the 13th Edition had only 3064 available (out of 4313 total).

### Putting the PC-SIG Library Online

Some years ago, I added part of the PC-SIG Library to PCjs; specifically, the [PC-SIG Library 8th Edition CD-ROM (April 1990)](https://www.pcjs.org/software/pcx86/sw/misc/pcsig08/0001/).  That process involved recreating 2121 diskette images from folders, and then producing four web pages, each with an IBM PC and directory listings for 500+ diskettes, along with buttons to load the desired diskette into the PC.

But I wanted to do something better -- something more comprehensive and user-friendly.

So I've added the [PC-SIG Diskette Library: The (Almost) Complete Collection](/software/pcx86/sw/misc/pcsig/), featuring over 4000 diskettes from all the available CD-ROMs, and supplemented with diskette images of *actual* PC-SIG diskettes where available.

[![PC-SIG Library Diskette]({{ site.software.pcsigdisks.server }}/pcx86/sw/misc/pcsig/0001-0999/DISK0147/DISK0147.jpg)](/software/pcx86/sw/misc/pcsig/)

Every disk now has its own page, and the [PC-SIG Diskette Library](/software/pcx86/sw/misc/pcsig/) page offers a *very* rudimentary search capability to help you find the program or diskette you're looking for.  I've also started adding PC-SIG documentation for each diskette to the individual pages.  Work on both search and documentation is on-going.

### Creating Disk Images from ZIP Files

Although I prefer original disk images, ZIP files are the next best thing, and while the standard practice of "unzipping" a ZIP file into a directory and then running [DiskImage](https://github.com/jeffpar/pcjs/tree/master/tools/diskimage) with the `--dir` option works, it's not ideal for several reasons, some of which were touched on above:

 1. While a ZIP file does (incidentally) preserve the *order* of the files as they appeared on the original diskette, modern operating systems do *not*, so the process of "unzipping" usually destroys that order.
 2. DOS file attributes and file modification dates and times are not always accurately preserved by modern operating systems.
 3. DOS filenames containing special characters from the IBM PC character set (ie, Code Page 437) are almost always mangled in the process.

For all those reasons, I decided to update `DiskImage` with a new `--zip` option.  It can now read and *decompress* the contents of an entire ZIP file into memory and then create a disk image, preserving the order of files, as well as the original attributes, dates, times, and filenames.

Next, I updated DiskImage's `--extract` option to automatically convert CP437 filenames to UTF-8 filenames, so by combining `--zip` and `--extract`, you can effectively "unzip" a ZIP file into your file system and not get mangled filenames -- even if they included PC graphics characters.

I also decided to "expand" on that feature with a new `--expand` option, so that any `.ZIP` files *inside* a ZIP file can be decompressed, too.  For example, if you have a `BACKUP.ZIP` that contains a `DOCS.ZIP`, the `--expand` option (in conjunction with `--extract`) will create a directory named `DOCS.ZIP` containing the decompressed contents of the `DOCS` ZIP file.  This feature should work for any number of nested ZIP files.

### Extracting BASIC Program Listings

Last but not least, the PC-SIG collection contained a large number of **BASIC** programs, which I thought would be nice to include listings of on the individual PC-SIG diskette pages.  Unfortunately, in those days, `.BAS` files were usually stored in tokenized (non-ASCII) format, since that was `BASIC`'s default `SAVE` behavior and the files were slightly smaller.

So, I added yet another `DiskImage` option (`--normalize`) to automatically convert tokenized `.BAS` files to CP437 text files (or UTF-8 files if extracting to your local file system).  As an added bonus, I included the ability to detect "protected" (encrypted) `.BAS` files and "de-protect" them in the process.

These "de-tokenization" and "de-protection" processes seemed straight-forward at first, thanks to several useful online resources that I credit in the source code (eg, [https://github.com/rwtodd/bascat](https://github.com/rwtodd/bascat) and [https://slions.net](https://slions.net/threads/deciphering-gw-basic-basica-protected-programs.50/)), but de-tokenization is actually a bit trickier than most people realize, in part because they didn't know how inventive BASIC programmers were in the early days of the IBM PC.

For example, some programmers liked to include PC graphics characters inside their strings, comments, and DATA statements -- which BASIC was perfectly fine with.  However, all the de-tokenization code and pseudo-code I saw would misidentify those characters as BASIC tokens.  There were also a few other tricky details, like rendering floating-point constants with the correct precision, appending '#' to double-precision constants, etc.

Here's just one example of the use of non-ASCII characters inside strings and comments, from PC-SIG [Disk #241](/software/pcx86/sw/misc/pcsig/0001-0999/DISK0241/):

```bas
3300 REM ▬ OTHER OTHELLO BOARD
3310 CLS:LOCATE 1,10:PRINT "O T H E L L O"
3320 LOCATE 3,5:PRINT"1   2   3   4   5   6   7   8"
3330 FOR N=1 TO 8:LOCATE 3+2*N,1:PRINT CHR$(N+64):NEXT
3340 LOCATE 4,3  :PRINT"╔═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╗":FOR N=1 TO 13STEP 2
3350 LOCATE 4+N,3:PRINT"║   ║   ║   ║   ║   ║   ║   ║   ║"
3360 LOCATE 5+N,3:PRINT"╠═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╣":NEXT
3370 LOCATE 4+N,3:PRINT"║   ║   ║   ║   ║   ║   ║   ║   ║"
3380 LOCATE 5+N,3:PRINT"╚═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╝"
3390 FOR I= 1TO 8
3400 FOR J= 1 TO 8:LOCATE 2* J+ 3,4* I+ 1:FACE= (A(I,J)+ 3)/2
3410 IF FACE = 1.5 THEN PRINT" " ELSE PRINT CHR$(FACE)
3420 NEXT J,I
3430 GOSUB 3250
3440 RETURN
```

In short, the collection of PC-SIG `.ZIP` and `.BAS` files provided an excellent set of test cases for ZIP decompression and BASIC de-tokenization, and the PCjs [DiskImage](https://github.com/jeffpar/pcjs/tree/master/tools/diskimage) utility now has some handy new capabilities.
