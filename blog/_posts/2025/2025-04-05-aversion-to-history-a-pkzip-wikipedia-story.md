---
layout: post
title: "Aversion to History: A PKZIP/Wikipedia Story"
date: 2025-04-05 10:00:00
permalink: /blog/2025/04/05/
preview: /blog/images/aversion-to-history.png
description: "Some observations about Wikipedia guidelines and PKZIP version history."
---

A couple of years ago, while sifting through lots of ZIP archives from old [Shareware CD-ROMs](https://www.pcjs.org/blog/2023/04/06/),
I found quite a few that couldn't be unzipped, either because they were corrupted, encrypted, or used compression methods that were
no longer supported by modern ZIP utilities.  That took me on a journey of ZIP (and ARC) decompression, and I created some new PCjs
decompression tools in the process, including the ability to [create disk images directly from ZIP files](https://www.pcjs.org/blog/2023/04/06/#creating-disk-images-from-zip-files).

Of course, you can't go down that rabbit hole without digging into the history of the [ZIP file format](https://en.wikipedia.org/wiki/ZIP_(file_format)),
or the person who developed it, [Phil Katz](https://en.wikipedia.org/wiki/Phil_Katz), or the first program to create ZIP files: [PKZIP](https://en.wikipedia.org/wiki/PKZIP).
There's a lot of history there, and many other rabbit holes you can go down, but this post is going to focus on one "hole" in particular.

### PKZIP Version History

Specifically, I'm talking about the [PKZIP Wikipedia Page](https://en.wikipedia.org/wiki/PKZIP) and the history of its
version history.

I remembered visiting that Wikipedia page several years ago and seeing a fairly detailed history of PKZIP and all
its versions.  But when I visited the page earlier *this* year, the version history was gone.

At first, I thought perhaps I misremembered where I'd seen that version history, so I searched the web, and one of the top results
was "[Survey of PKZIP versions for MS-DOS](https://entropymine.wordpress.com/2019/08/09/survey-of-pkzip-versions-for-ms-dos/)"" from Jason Summer's [Entropymine blog](https://entropymine.wordpress.com/),
which, coincidentally, mentioned the same Wikipedia page:

> "I wanted to know exactly what versions of the old PKZIP compression software were publicly released for MS-DOS,
> and some basic characteristics about them, particularly what compression methods they used when compressing files.
> Sure, [Wikipedia](https://en.wikipedia.org/wiki/PKZIP) has a list, but it wasn’t quite what I wanted, and it omitted
> at least one version I was pretty sure existed."

So I wasn't wrong.  In 2019, Wikipedia had a list, and I was pretty sure I'd seen the same list back in 2022.  But now it was gone.

It's not hard to find the old list -- once you know it existed -- by browsing the page's [history](https://en.wikipedia.org/w/index.php?title=PKZIP&action=history)
and choosing, for example, [this page from January 2018](https://en.wikipedia.org/w/index.php?title=PKZIP&oldid=823135028)
(that revision caught my eye only because someone had added information about PKZIP versions 1.93a and 2.04c).

### The Great Deletion

On December 3, 2022, Wikipedia user [Pppery](https://en.wikipedia.org/wiki/User:Pppery) (someone who never before and never
again contributed anything substantive to the page) decided to delete the entire "Version history" section, using the
citation **WP:NOTCHANGELOG**.

Here's what that citation refers to:

> [Wikipedia is not an indiscriminate collection of information](https://en.wikipedia.org/wiki/Wikipedia:What_Wikipedia_is_not#Wikipedia_is_not_an_indiscriminate_collection_of_information)
>
> To provide encyclopedic value, data should be put in context with explanations referenced to independent sources.
> As explained in § Encyclopedic content above, merely being true, or even verifiable, does not automatically make
> something suitable for inclusion in the encyclopedia. Wikipedia articles should not be:
>
> ...
>
> **Exhaustive logs of software updates**. Use reliable third-party (not self-published or official) sources in articles
> dealing with software updates to describe the versions listed or discussed in the article. Common sense must be applied
> regarding the level of detail to include. A list of every version/beta/patch is inappropriate. Consider a summary of
> development instead.

That all sounds reasonable to me, and even if it didn't, I'm not an authority on "encyclopedic values", so my opinion is
pretty irrelevant.  Besides, I agree that anyone creating new content should make an effort to abide by Wikipedia's
guidelines.  However, guidelines evolve over time, so it's not always clear whether a contributor simply ignored guidelines
or their content later fell victim to evolving standards.

And speaking of standards, there seems to be a "double-standard", because it's not hard to find other Wikipedia pages
on other popular or significant software packages that have their own detailed version history, such as
[Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows) or [Adobe Photoshop](https://en.wikipedia.org/wiki/Adobe_Photoshop).
In fact, the version histories of DOS and Windows are *so* important that they have their own dedicated pages
(see [Timeline of DOS operating systems](https://en.wikipedia.org/wiki/Timeline_of_DOS_operating_systems)
and [List of Microsoft Windows versions](https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions)).

However, my real quibble is not with the guidelines or how loosely they're followed.  What bothers me is the wholesale
act of *deleting* a large amount of information *after* it has already been created, without making any effort to first
summarize that information (as the guidelines specifically suggest) *or* even alerting the Wikipedia community that
there are issues with it.

I'm always seeing notices on Wikipedia pages about the need to improve content, from small "[citation needed]" notations to
large banners, like this very notice on the PKZIP page:

> "This article relies excessively on references to primary sources. Please improve this article by adding secondary or
> tertiary sources."

Those notices are great ways to engage people to help improve the content.  What is *not* a great way is simply deleting
the content.

### PKZIP Version History (2007-2022)

PKZIP version history was first added to Wikipedia in October 2007 by [Jacob Poon](https://en.wikipedia.org/wiki/User:Jacob_Poon)
and regularly updated by him through 2009.  Here's what it looked like right before it was deleted in late 2022.

  - PKZIP 0.8 (released on January 1, 1989) initial version
  - PKZIP 0.9 (released on February 10, 1989) supported reducing algorithm (from SCRNCH by Graeme McRae)[1] with four compression settings and shrinking. In addition to PKZIP and PKUNZIP, it also included ZIP2EXE, a utility for creating a self-extracting archive which required an external self-extracting executable header created by MAKESFX from the PKZIP executable package.
  - PKZIP 0.92 (released on March 6, 1989): In addition to bug fixes, PKZIP included an option to automatically choose the best compression method for each file. New tools included with PKZIP include PKZipFix.
  - PKZIP 1.01 (released on July 21, 1989) added Implode compression, while reduced files can only be extracted from ZIP archive. Imploding was chosen based on the characteristics of the file being compressed.[2] New utility included Thomas Atkinson's REZIP conversion utility (part of ZIP-KIT). PKZIP's default compression behavior was changed from fastest (Shrink) to best (Implode). Supported platforms include OS/2, DOS.
  - PKZIP 1.02 (released on October 1, 1989) includes new utility BIOSFIX.COM, which preserved the entire 80386 register set during any mode switches via INT 15H. OS/2 version added ZIP2EXE and 2 self-extracting archive headers.
  - PKZIP 1.10 (released on March 15, 1990): New features included authenticity verification, "mini" PKSFX self-extracting module, integrating self-extracting module into ZIP2EXE, ability to save & restore volume labels. Imploding was up to 5X faster and compression ratio was improved over 1.02. EAX register was always saved on 80386 or above CPU. Removed tools included BIOSFIX, REZIP, MAKESFX.
  - PKZIP 1.93a (released in October 1991): An alpha version that introduced a new compression method which Katz called "deflating". It was supposed to be quickly followed by a final PKZIP 2 release, but there were numerous delays.
  - PKZIP 2.04g (released in January 1993): By the time the release was ready, fake 2.x releases were circulating, some of them malware, so an untainted version number was chosen instead of 2.0. This new version dispensed with the miscellaneous compression methods of PKZIP 1.x and replaced them with the deflate algorithm (although several levels of deflation were provided by the program). The resulting file format has since become ubiquitous on Microsoft Windows and on the Internet – almost all files with the .ZIP (or .zip) extension are in PKZIP 2.x format, and utilities to read and write these files are available on all common platforms. PKZIP 2.x also supported spanning archives to multiple disk, which simply split the files into multiple pieces, and using volume label on each drive to differentiate each other. A new Authenticity Verification (AV) signature format was used. Registered version included PKUNZJR, PK Safe ANSI, PKCFG utilities.
  - PKZIP 2.06 was released in 1994. It was a version of PKZIP 2.04g licensed to IBM.[3]
  - PKZIP 2.50 (released on April 15, 1998) was the first version released for Windows 3.1, 95, NT platforms. DOS version of PKZIP 2.50 was released on 1999-03-01, as its final MS-DOS product. PKZIP 2.50 supported long file names on all builds, and Deflate64 extraction. DCL Implode extraction was supported on non-DOS ports. A new command-line product was introduced in Windows 95, OS/2, UNIX platforms, called "PKZIP Command Line" (later expanded to "PKZIP Server"), which featured new command line syntax.
  - PKZIP 2.6 was the last version to support Windows 3.1 and Windows NT for the Alpha and PowerPC platforms.
  - PKZIP 2.70 added email MAPI (i.e. Send To) support. Registered version included creation of configurable self-extracted archives, added Authenticity Verification (AV) Information. Distribution Licensed versions included enhanced self-extractors. Professional distribution licensed version could create self-extracting patch files, and includes self-extractors for several new platforms.
  - PKZIP 4.0 was an updated version of PKZIP 2.7. Version 3 was skipped as a result of PKZIP 3.0 Trojan.[4] It supported Deflate64 and DCL Implode compression, and the use of X.509 v3 certificate-based authentication.,[5] creation of Span or Split large .ZIP archives. Old PKZIP command line conversion tools were introduced.
  - On August 21, 2001, PKWARE announced the availability of PKZIP 4.5.[6] PKZIP 4.5 included ZIP64 archives support, which allowed more than 65535 files per ZIP archives, and storing files larger than 4 gigabytes into .ZIP archive. A version called PKZIP Suite 4.5 also included PKZIP Command Line 4.5, PKZIP Explorer 1.5, PKZIP Attachments 1.1, and PKZIP Plug-In 1.0.
  - PKZIP 5.0 was announced in 2002,[7] which introduced Strong Encryption Specification (SES) for the Professional version of the product, which initially included DES, 3DES, RC2, RC4 encryption formats, and the use of using X.509 v3 certificate-based encryption.
  - PKZIP 6.0 (released in 2003) added support for bzip2 (based on Burrows–Wheeler transform) compression, with Professional Edition supporting 256-bit AES.[8]
  - PKZIP 7.0 changed SES to use non-OAEP key wrapping for compatibility with smart cards and USB tokens. Support of creating AV authenticity verification archives was dropped. PKZIP could now create archives of the following types: ZIP, bzip2, GZIP, tar, UUEncoded, XXEncoded.
  - PKZIP 8.0 was released on April 27, 2004.[9] In addition, PKWARE renamed its PKZip Professional to SecureZIP.[10] Creation of ZIP archives with encrypted headers was available.
  - PKZIP 9.0 was the first version to unofficially support Windows Vista (as administrator).[11] Creation of RC2, DES-encrypted ZIP archives are dropped.
  - PKZIP 10 Enterprise Edition and SecureZIP 10 were released on i5/OS. It offered the ability to create ZIP64 archives for the target platform.[12] Desktop PKZIP version was no longer developed beyond version 9.

And yes, I'm well aware that instead of wasting my time on this "rant", I could create a Wikipedia account, become a contributor,
and fix the PKZIP page myself -- or at least try to.

And in fact, I did recently create an account on Wikipedia with that thought in mind, but that was just the first step in a long process.
After signing up, Wikipedia wanted me to spend a certain amount of time editing other articles first, learning the ropes, reading the
guidelines, etc.  Perhaps I could have immediately jumped to the PKZIP page and clicked "undo" on the "Version history" deletion,
but even if that had been allowed, that seemed a little too passive-aggressive.

It's much easier for me to just write whatever I want on my own website -- adhering at all times to the strictest of guidelines, of course. ;-)

## My Own Limited Survey of PKZIP Versions (1989-1993)

On a tangential note, here's a summary of what I recently learned about PKZIP versions while working through the [ibm-wgam-wbiz-collection](https://archive.org/details/ibm-wgam-wbiz-collection),
which has now been ingested by [DiscMaster](https://discmaster.textfiles.com/).

A few versions were missing from Wikipedia's list, and even a couple were missing from Jason Summers' list (1.00ß and 2.01).

In all cases, I tried to find downloads that appeared to be close to, if not actual, distribution copies.
I have not tried to enumerate all the differences between the versions, although I have included the various `WHATSNEW` documents
that shipped alongside each `PKZIP.EXE` below.


| Version          | Dated       | Timestamp           | Size  | Download       | MD5 Hash                           | Contents                          |
|------------------|-------------|---------------------|-------|----------------|------------------------------------|-----------------------------------|
| PKZIP 0.80 Beta  | Jan 10 1989 | 1989-01-11 05:55:22 | 23835 | [PKZ080.ZIP](http://cd.textfiles.com/originalsw/25/pkz080.zip) | d13726356d84956cf05faefa3331d468 | [Contents](#pkzip-080-beta)
| PKZIP 0.90       | Feb 01 1989 | 1989-02-10 00:00:00 | 26334 | [PKZ090.EXE](http://cd.textfiles.com/originalsw/25/pkz090.exe) | 8944c0215e7832c93ff77c8274ce5a94 | [Contents](#pkzip-090)
| PKZIP 0.92       | Mar 06 1989 | 1989-03-06 00:00:00 | 26796 | [PKZ092.EXE](http://cd.textfiles.com/originalsw/25/pkz092.exe) | 38d76628b87c1b84e5dd3c50a2d2e3bf | [Contents](#pkzip-092)
| PKZIP 1.00ß      | Jun 30 1989 | 1989-06-30 18:47:30 | 30818 | [PKZ100B.ZIP](https://discmaster.textfiles.com/file/29986/wbiz0020-0029/wbiz0021.tar/wbiz0021/PKZ100B.ZIP) | 31d14f13d9329b1ad5fbaaf664a0ef93 | [Contents](#pkzip-100ß)
| PKZIP 1.01       | Jul 21 1989 | 1989-07-21 01:01:00 | 31342 | [PKZ101.EXE](http://cd.textfiles.com/originalsw/25/pkz101.exe) | 36408e97e694cd17b12c3e3bfdac2a71 | [Contents](#pkzip-101)
| PKZIP 1.02       | Oct 01 1989 | 1989-10-01 01:02:00 | 31408 | [PKZ102.EXE](https://discmaster.textfiles.com/file/11833/sdf.org.zip/sdf.org/pub/computers/pcjr/arc/PKZ102.EXE) | 6e762ea5460dcaae43b73a6ec51e50cc | [Contents](#pkzip-102)
| PKZIP 1.10       | Mar 15 1990 | 1990-03-15 01:10:00 | 34296 | [PKZ110.EXE](https://discmaster.textfiles.com/file/17384/TheUltimateSharewareCollect.cdr/ut/ut037.zip/PKZ110.EXE) | 5036d372ac010331a78071a574354cf0 | [Contents](#pkzip-110)
| PKZIP 1.93 Alpha | Oct 15 1991 | 1991-10-15 19:30:00 | 24411 | [PKZ193A.EXE](https://discmaster.textfiles.com/file/29622/ibm0040-0049/ibm0044.tar/ibm0044/PKZ193A.EXE) | 0ece8648324cafda50549ca040421fc5 | [Contents](#pkzip-193a)
| PKZIP 2.01       | Mar 15 1992 | 1992-03-15 02:01:00 | 24869 | [PKZ201.ZIP](https://discmaster.textfiles.com/file/30009/wbiz0250-0259/wbiz0250.tar/wbiz0250/PKZ201.ZIP) | b2d208014330d764510bdc54de3a51fd | [Contents](#pkzip-201)
| PKZIP 2.04c      | Dec 28 1992 | 1992-12-28 02:04:12 | 41462 | [PKZ204C.EXE](https://discmaster.textfiles.com/file/18224/World_Of_Computer_Software-02-386-Vol-2of3.iso/w/wxpress2.zip/PKZ204C.EXE) | 60de53bc608d662f02bf8037e302e337 | [Contents](#pkzip-204c)
| PKZIP 2.04e      | Jan 25 1993 | 1993-01-25 02:04:14 | 42475 | [PKZ204E.EXE](https://discmaster.textfiles.com/file/4695/sound_sensations.iso/utils/zipfiles/pkz204e.exe) | fe72c498c1012fca65055250d90802e9 | [Contents](#pkzip-204e)
| PKZIP 2.04g      | Feb 01 1993 | 1993-02-01 02:04:16 | 42166 | [PKZ204G.EXE](https://discmaster.textfiles.com/file/6140/BSTETRS2.bin/utils/pkware/pkz204g/pkz204g.exe) | e5a48751250ffa94a8cf2ecaf8073098 | [Contents](#pkzip-204g)

Other `PKZIP.EXE` variations included versions licensed to Microsoft and IBM, such as:

| Version          | Dated       | Timestamp           | Size  | Download       | MD5 Hash                           | Contents                          |
|------------------|-------------|---------------------|-------|----------------|------------------------------------|-----------------------------------|
| PKZIP 1.1  [MS]  | Nov 10 1990 | 1990-11-10 00:00:02 | 23509 | [PKZIP.EXE](https://discmaster.textfiles.com/file/29651/ibm0330-0339/ibm0333.tar/ibm0333/MSONLIN2.ZIP/PKZIP.EXE) | 901ddd289e845024511ce19eafb16870 | [Contents](#pkzip-11-ms)
| PKZIP 1.11 [IBM] | Nov 23 1990 | 1990-11-23 00:00:00 | 23458 | [PKZIP.EXE](https://discmaster.textfiles.com/file/29622/ibm0040-0049/ibm0040.tar/ibm0040/W3DRV12.ZIP/PKZIP.EXE) | caf3d28e4e27628a28e97a238780d72a | [Contents](#pkzip-111-ibm)

## PKZIP 0.80-Beta

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=http://cd.textfiles.com/originalsw/25/pkz080.zip
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

ARC2ZIP  EXE    11776   1-25-89   5:32p
BETA     DOC    12420   1-10-89   7:39p
BUGREP   DOC     1270   1-11-89  12:12a
DISCLAIM DOC     1622   1-11-89  12:15a
EXTRACT  DOC     5382   1-11-89  12:25a
FORMAT   DOC     7395   1-11-89  12:15a
HOW2USE  TXT     3069   1-25-89  10:42p
PKUNZIP  EXE    16003   1-10-89  11:21p
PKZIP    EXE    23835   1-11-89   5:55a
SDK      DOC     1372   1-11-89   6:38p
       10 File(s)     73728 bytes free

A:\>PKZIP

PKZIP   Create/Update Utility   Version 0.80 Beta   1-10-89
Copyright 1989 PKWARE Inc.  All Rights Reserved.  Not For Distribution.

See Beta documentation for help.

Beta Version - Please do not distribute!

PKWARE hereby disclaims all warranties relating to this software, whether
express or implied, including without limitation any implied warranties of
merchantability or fitness for a particular purpose. PKWARE will not be liable
for any special, incidental, consequential, indirect or similar damages due to
loss of data or any other reason, even if PKWARE or an agent of PKWARE has
been advised of the possibility of such damages.  In no event shall PKWARE's
liability for any damages ever exceed the price paid for the license to use
software, regardless of the form of the claim.  The person using the software
bears all risk as to the quality and performance of the software.
```

## PKZIP 0.90

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=http://cd.textfiles.com/originalsw/25/pkz090.exe
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

README   DOC      535   2-10-89
RELEASE  DOC      307   2-10-89
MANUAL   DOC    73345   2-10-89
ORDER    DOC     5729   2-10-89
DEDICATE DOC      718   2-10-89
APPNOTE  TXT    13715   2-10-89
PKZIP    EXE    26334   2-10-89
PKUNZIP  EXE    18034   2-10-89
ZIP2EXE  EXE     6674   2-10-89
MAKESFX  COM      846   2-10-89
       10 File(s)     10752 bytes free

A:\>PKZIP

PKZIP (tm)   FAST!   Create/Update Utility   Version 0.90   02-01-89
Copyright 1989 PKWARE Inc.  All Rights Reserved.  PKZIP/h for help

Usage: PKZIP [-b[path]] [options] zipfile [@list] [files...]
Options are:
  -a = add files to zipfile         -b = create tmp zipfile on alternate drive
  -d = delete files from zipfile    -f = freshen files in zipfile
  -i = add changed files to zipfile -l = display software license
  -u = update files to zipfile      -z = add zipfile comment
  -v[t] = view files in zipfile [with long technical info]
  -m = move files to zipfile (can be combined with A,F,U options)
  -r = recurse subdirectories       -p = store pathnames in zipfile
  -e[a,b][n] = use extra compression on [Ascii,Binary] files with
       compression factor of N.  Default factor is 2 if not given.
zipfile = ZIP file name, wildcards *,? ok.  Default extension is .ZIP
file    = Name(s) of files to compress. Wildcards *,? ok. Default is ALL files.

If you find PKZIP fast, easy, and convenient to use, a registration of $25
would be appreciated.  If you send $47 or more you will receive, when
available, the next version of the PKZIP, PKUNZIP, and PKSFX programs.
Please state the version of the software that you currently have.  Send
check or money order to:   PKWARE, Inc.
                           7545 N. Port Washington Rd.
                           Glendale, WI 53217
```

## PKZIP 0.92

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=http://cd.textfiles.com/originalsw/25/pkz092.exe
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

MANUAL   DOC    73345   2-10-89
OMBUDSMN ASP      592   3-06-89
ORDER    DOC     7253   3-06-89
DEDICATE DOC      718   2-10-89
APPNOTE  TXT    13715   2-10-89
PKZIPFIX DOC     2434   2-23-89
PKZIPFIX EXE     8388   2-23-89
MAKESFX  COM      846   3-06-89
ZIP2EXE  EXE     6686   3-06-89
PKZIP    EXE    26796   3-06-89
PKUNZIP  EXE    18208   3-06-89
VER092   DOC     2920   3-06-89
RELEASE  DOC      307   3-06-89
README   DOC      535   3-06-89
       14 File(s)    152576 bytes free

A:\>PKZIP

PKZIP (tm)   FAST!   Create/Update Utility   Version 0.92   03-06-89
Copyright 1989 PKWARE Inc.  All Rights Reserved.  PKZIP/h for help

Usage: PKZIP [-b[path]] [options] zipfile [@list] [files...]
Options are:
  -a = add files             -b = create tmp zipfile on alternate drive
  -d = delete files          -f = freshen files    -i = add changed files
  -l = display license info  -u = update files     -z = add zipfile comment
  -m[u,f] = move files       -r = recurse subdirs  -p = store pathnames
  -v[t] = view files [with long technical information]
  -e[a,b][n] = use extra compression on [Ascii,Binary] files with
       compression factor of N, (1-4).  Default factor is 2 if not given.
  -ex = use maximum optimal compression on all files.

zipfile = ZIP file name.  Default extension is .ZIP
file    = Names of files to compress. Wildcards *,? ok. Default is ALL files.

If you find PKZIP fast, easy, and convenient to use, a registration of $25
would be appreciated.  If you send $47 or more you will receive, when
available, the next version of the PKZIP, PKUNZIP, and PKSFX programs.
Please state the version of the software that you currently have.  Send
check or money order to:   PKWARE, Inc.
                           7545 N. Port Washington Rd.
                           Glendale, WI 53217
```

## PKZIP 1.00ß

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=https://discmaster.textfiles.com/file/29986/wbiz0020-0029/wbiz0021.tar/wbiz0021/PKZ100B.ZIP
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

MANUAL   DOC    86718   6-30-89   6:47p
PKZIP    EXE    30818   6-30-89   6:47p
PKUNZIP  EXE    21396   6-30-89   6:47p
APPNOTE  TXT    20951   6-30-89   6:47p
        4 File(s)    160768 bytes free

A:\>PKZIP

PKZIP (tm)   FAST!   Create/Update Utility   Version 1.0ß   06-30-89
Copyright 1989 PKWARE Inc.   All Rights Reserved.   DO NOT DISTRIBUTE!

Usage: PKZIP [-b[path]] [options] zipfile [@list] [files...]
Options are:
  -d = delete files           -f = freshen files     -i = add changed files
  -l = display license info   -u = update files      -m[u,f] = move files
  -a = add files              -b = create temp zipfile on alternate drive
  -c = add/edit file comments -C = add comments to new files only
 -es = use fast compression  -ex = use maximal compression (default)
  -k = keep same ZIP date     -o = set ZIP date to latest file
  -q = enable ANSI comments   -s<pwd> = Scramble files with password
  -p = store pathnames recursed into                 -r = recurse subdirs
  -P = store pathnames specified & recursed into     -z = add zipfile comment
  -w<H,S> = include Hidden/System files       -x<filespec> = eXclude filespec
  -W<H,S> = don't include Hidden/System files (default)
  -j<H,S,R> = mask Hidden/System/Readonly attributes when adding files
  -J<H,S,R> = don't mask Hidden/System/Readonly attributes when adding files
  -v[b,c,d,e,n,p,s,r,t] = view ZIP(s) [Brief listing/show Comments/sort by -
    Date/Ext/Name/Percentage/Size/sort Reverse/Technical (long) listing]

zipfile = ZIP file name.  Default extension is .ZIP
file    = Names of files to compress. Wildcards *,? ok. Default is ALL files.
@list   = listfile containing names of files to add or view etc.
                         
If you find PKZIP fast, easy, and convenient to use, a registration of $25
would be appreciated.  If you send $47 or more you will receive, when
available, the next version of the PKZIP, PKUNZIP, and PKSFX programs.
Please state the version of the software that you currently have.  Send
check or money order to:   PKWARE, Inc.
                           7545 N. Port Washington Rd.
                           Glendale, WI 53217
```

## PKZIP 1.01

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=http://cd.textfiles.com/originalsw/25/pkz101.exe
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

README   DOC      873   7-21-89   1:01a
MANUAL   DOC   140355   7-21-89   1:01a
DEDICATE DOC      720   7-21-89   1:01a
LICENSE  DOC     8959   7-21-89   1:01a
ORDER    DOC     4607   7-21-89   1:01a
APPNOTE  TXT    25662   7-21-89   1:01a
OMBUDSMN ASP      595   7-21-89   1:01a
PKZIP    EXE    31342   7-21-89   1:01a
PKUNZIP  EXE    21440   7-21-89   1:01a
MAKESFX  COM      896   7-21-89   1:01a
ZIP2EXE  EXE     6898   7-21-89   1:01a
PKZIPFIX EXE     8926   7-21-89   1:01a
REZIP    ZIP    14592   7-21-89   1:01a
       13 File(s)     51200 bytes free

A:\>PKZIP

PKZIP (tm)   FAST!   Create/Update Utility   Version 1.01   07-21-89
Copyright 1989 PKWARE Inc.   All Rights Reserved.   PKZIP/h for help

Usage: PKZIP [-b[path]] [options] zipfile [@list] [files...]
Options are:
  -d = delete files           -f = freshen files     -i = add changed files
  -l = display license info   -u = update files      -m[u,f] = move files
  -a = add files              -b = create temp zipfile on alternate drive
  -c = add/edit file comments -C = add comments to new files only
 -es = use fast compression  -ex = use maximal compression (default)
  -k = keep same ZIP date     -o = set ZIP date to latest file
  -q = enable ANSI comments   -s<pwd> = Scramble files with password
  -p = store pathnames recursed into                 -r = recurse subdirs
  -P = store pathnames specified & recursed into     -z = add zipfile comment
  -w<H,S> = include Hidden/System files       -x<filespec> = eXclude filespec
  -W<H,S> = don't include Hidden/System files (default)
  -j<H,S,R> = mask Hidden/System/Readonly attributes when adding files
  -J<H,S,R> = don't mask Hidden/System/Readonly attributes when adding files
  -v[b,c,d,e,n,p,s,r,t] = view ZIP(s) [Brief listing/show Comments/sort by -
    Date/Ext/Name/Percentage/Size/sort Reverse/Technical (long) listing]

zipfile = ZIP file name.  Default extension is .ZIP
file    = Names of files to compress. Wildcards *,? ok. Default is ALL files.
@list   = listfile containing names of files to add or view etc.
                         
If you find PKZIP fast, easy, and convenient to use, a registration of $25
would be appreciated.  If you send $47 or more you will receive, when
available, the next version of the PKZIP, PKUNZIP, and PKSFX programs.
Please state the version of the software that you currently have.  Send
check or money order to:   PKWARE, Inc.
                           7545 N. Port Washington Rd.
                           Glendale, WI 53217
```

## PKZIP 1.02

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=https://discmaster.textfiles.com/file/11833/sdf.org.zip/sdf.org/pub/computers/pcjr/arc/PKZ102.EXE
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

WHATSNEW 102     5837  10-01-89   1:02a
BIOSFIX  COM      295  10-01-89   1:02a
README   DOC      873  10-01-89   1:02a
MANUAL   DOC   140355   7-21-89   1:01a
DEDICATE DOC      720   7-21-89   1:01a
LICENSE  DOC     8959   7-21-89   1:01a
ORDER    DOC     4607   7-21-89   1:01a
APPNOTE  TXT    25662   7-21-89   1:01a
OMBUDSMN ASP      595   7-21-89   1:01a
PKZIP    EXE    31408  10-01-89   1:02a
PKUNZIP  EXE    22022  10-01-89   1:02a
MAKESFX  COM      896  10-01-89   1:02a
ZIP2EXE  EXE     6906  10-01-89   1:02a
PKZIPFIX EXE     8926   7-21-89   1:01a
REZIP    ZIP    14592  10-01-89   1:02a
       15 File(s)     43008 bytes free

A:\>PKZIP

PKZIP (tm)   FAST!   Create/Update Utility   Version 1.02   10-01-89
Copyright 1989 PKWARE Inc.   All Rights Reserved.   PKZIP/h for help

Usage: PKZIP [-b[path]] [options] zipfile [@list] [files...]
Options are:
  -d = delete files           -f = freshen files     -i = add changed files
  -l = display license info   -u = update files      -m[u,f] = move files
  -a = add files              -b = create temp zipfile on alternate drive
  -c = add/edit file comments -C = add comments to new files only
 -es = use fast compression  -ex = use maximal compression (default)
  -k = keep same ZIP date     -o = set ZIP date to latest file
  -q = enable ANSI comments   -s<pwd> = Scramble files with password
  -p = store pathnames recursed into                 -r = recurse subdirs
  -P = store pathnames specified & recursed into     -z = add zipfile comment
  -w<H,S> = include Hidden/System files       -x<filespec> = eXclude filespec
  -W<H,S> = don't include Hidden/System files (default)
  -j<H,S,R> = mask Hidden/System/Readonly attributes when adding files
  -J<H,S,R> = don't mask Hidden/System/Readonly attributes when adding files
  -v[b,c,d,e,n,p,s,r,t] = view ZIP(s) [Brief listing/show Comments/sort by -
    Date/Ext/Name/Percentage/Size/sort Reverse/Technical (long) listing]

zipfile = ZIP file name.  Default extension is .ZIP
file    = Names of files to compress. Wildcards *,? ok. Default is ALL files.
@list   = listfile containing names of files to add or view etc.
                         
If you find PKZIP fast, easy, and convenient to use, a registration of $25
would be appreciated.  If you send $47 or more you will receive, when
available, the next version of the PKZIP, PKUNZIP, and PKSFX programs.
Please state the version of the software that you currently have.  Send
check or money order to:   PKWARE, Inc.
                           7545 N. Port Washington Rd.
                           Glendale, WI 53217

A:\>TYPE WHATSNEW.102
Version 1.02 is a minor bug fix for version 1.01 of PKZIP,
PKUNZIP, and ZIP2EXE for the MS-DOS software; and PKSFX and
ZIP2EXE for the OS/2 software.  No new features have been added
to the software in this release.

Those who have registered version 1.0x and are due a free
upgrade will receive PKZIP/PKUNZIP/PKSFX(R) etc. version 1.1,
with manual, when it becomes avaliable.


MS-DOS
======

New files:  PKZIP.EXE, PKUNZIP.EXE, ZIP2EXE.EXE, BIOSFIX.COM
            REZIP.ZIP, MAKESFX.COM

All other files are the same as for version 1.01.

Description of changes
----------------------

  o An updated version of Thomas Atkinson's REZIP is included
    with this version, that properly handles paths stored
    within a .ZIP file.

  o Several people have reported problems with PKZIP/PKUNZIP
    1.01 on 80386 computers, especially with disk caching
    programs using EXTended memory, such as Super PC-Kwik.
    This is due to the fact that Super PC-Kwik will access
    '80286 extended memory' during the timer interrupt via
    the BIOS interrupt 15H.  However, this corrupts the 32-bit
    accumulator (EAX) in the 80386 CPU, and neither many BIOS's
    nor PC-Kwik bother to preserve the EAX register.  If you have
    an 80386 CPU and have had problems with PKZIP/PKUNZIP 1.01,
    try these work-arounds, in the following order:

    - Run BIOSFIX.COM supplied with version 1.02.  BIOSFIX
      is a small (288 bytes resident) TSR program that preserves
      the entire 80386 register set during any mode switches via
      INT 15H.  This has been tested with Super PC-Kwik, and
      should work with other programs that may be performing
      asynchronouos CPU mode switching.

    - Use an 80386 memory manager such as QEMM or 386^MAX which
      will control and preserve the 80386 machine state.  Also,
      use exPANded memory with your application instead of
      exTENded memory, if possible.

    - If you are using Super PC-Kwik, place /H- /D- on the
      SUPERPCK command line.

    - SET the environment variable PKNO386=xxxx where "xxxx"
      is any string you want.  If the string PKNO386 is present
      in the environment, then PKZIP/PKUNZIP 1.02 will not use
      80386 instructions or registers.  Note however that
      disabling the 80386 usage will make PKZIP run up to 20%
      slower and PKUNZIP up to 40% slower than if the 80386
      instructions are used.

  o Using the "-c" option with PKZIP 1.01 could, in very rare
    instances, cause random corruption of the .ZIP file.  This
    was due to an anomoly in the MSC _ffree() function when
    passed a canonical pointer.  This has been corrected in
    PKZIP 1.02.

  o There is bug in MS-DOS 3.3 and 4.x when SHARE is loaded and
    I/O redirection is used, that sometimes prevents a file or
    device, once redirected to, from ever being opened in a
    sharing mode.  This would cause PKUNZIP to display the message 
    "can't open: NUL" when using the "-t" test option.  PKUNZIP 1.02
    first tries to open NUL in share-deny-none mode, and if that
    fails, it will open the NUL device in compatibility mode,
    bypassing SHARE.

  o ZIP2EXE 1.01 could, on occasion, erroneously report that the
    .ZIP file it was converting contained Reduced files.  This has
    been corrected in this release.

  o When PKZIP 1.01 would be unable to open a file that it was
    trying to compress (it is locked by another program on a
    network, for example) PKZIP would display a message that
    the file could not be added.  However, when PKZIP terminated
    it would exit with an exit code of 0 in this circumstance.
    Several people have requested a way of determining this
    condition when run from a program or batch file, so PKZIP 1.02
    will exit with an errorlevel of 18 when it is unable to open
    one or more files that were specified.  It should be noted that
    this is a 'warning' condition only, and that otherwise PKZIP
    was able to construct the .ZIP file without any errors.


OS/2
====

New files:  PKSFX2.PRG, PKSFXF.PRG, ZIP2EXE.EXE

All other files are the same as for version 1.01.

Description of changes
----------------------

  o The same condition reported above for ZIP2EXE could also
    occur with the OS/2 version of ZIP2EXE.

  o The PKSFX2 and PKSFXF programs would fail if the self-
    extracting file contained more than approximately 50 files.
    This was due to an anomoly between memory allocation under
    MS-DOS vs OS/2, and has been corrected in this release.

Some Common Questions & Answers
-------------------------------

o Where is my copy of PKSFX??  I ran PKZ102.EXE, but I don't have 
  the third program, PKSFX.
  
  - You have to run the program MAKESFX to create the file PKSFX.PRG.

o Why is the new version of PKZIP so much slower than my earlier version?

  - PKZIP version 0.90 or 0.92 defaulted to its fastest compression
    method, called Shrinking.  PKZIP 1.0 defaults to its best
    compressing, albeit slower method called Imploding.  Imploding
    typically compresses much better than Shrinking.  However, you can
    still tell PKZIP 1.02 to perform Shrinking if you want by specifying
    "-es" on the PKZIP command line, or by placing COMPRESS=SPEED in
    your PKZIP.CFG file.  See MANUAL.DOC for more information about
    specifying what compression method is to be used with PKZIP.

o Do I have to convert the .ZIP files I made with earlier version of PKZIP?

  - No, PKZIP and PKUNZIP 1.02 can read and extract .ZIP files created
    by any version of the software.  However, converting .ZIP files
    created by PKZIP 0.92 with the new software can result in additional
    compression.
```

## PKZIP 1.10

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=https://discmaster.textfiles.com/file/17384/TheUltimateSharewareCollect.cdr/ut/ut037.zip/PKZ110.EXE
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

WHATSNEW 110     2916   3-15-90   1:10a
README   DOC      800   3-15-90   1:10a
MANUAL   DOC   140355   7-21-89   1:01a
ADDENDUM DOC    21473   3-15-90   1:10a
DEDICATE DOC      720   3-15-90   1:10a
LICENSE  DOC     9366   3-15-90   1:10a
ORDER    DOC     4701   3-15-90   1:10a
APPNOTE  TXT    25811   3-15-90   1:10a
AUTHVERI FRM     1744   3-15-90   1:10a
OMBUDSMN ASP      595   3-15-90   1:10a
PKZIP    EXE    34296   3-15-90   1:10a
PKUNZIP  EXE    23528   3-15-90   1:10a
ZIP2EXE  EXE    22188   3-15-90   1:10a
PKZIPFIX EXE     9224   3-15-90   1:10a
PUTAV    EXE     4479   3-15-90   1:10a
       15 File(s)     13312 bytes free

A:\>PKZIP

PKZIP (R)   FAST!   Create/Update Utility   Version 1.1   03-15-90
Copr. 1989-1990 PKWARE Inc.  All Rights Reserved.  PKZIP/h for help
PKZIP Reg. U.S. Pat. and Tm. Off.

Usage: PKZIP [-b[path]] [options] zipfile [@list] [files...]
Options summary - consult the PKWARE documentation for additional information
  -x<filespec|@list> = eXclude filespec(s)            -z = add zipfile comment
  -d = delete files            -f = freshen files     -i = add changed files
  -l = display license info    -u = update files      -m[u,f] = move files
  -a = add files               -b = create temp zipfile on alternate drive
  -c = add/edit file comments  -C = add comments to new files only
  -k = keep same ZIP date      -o = set ZIP date to latest file
  -q = enable ANSI comments    -s<pwd> = Scramble files with password
  -r = recurse subdirs         -$[drive] = save volume label 
  -t[mmddyy] = Compress files on or after specified date (default=today)
  -e[x,i,s] = use maXimal compression/Implode only/Shrink only
  -<p|P> = store pathnames | p=recursed into | P=specified & recursed into
  -<w|W><H,S> = | w=include | W=don't include | Hidden/System files
  -<j|J><H,S,R> = | j=mask | J=don't mask | Hidden/System/Readonly attributes
  -v[b,c,d,e,n,p,s,r,t] = view ZIP [Brief listing/show Comments/sort by -
    Date/Ext/Name/Percentage/Size/sort Reverse/Technical (long) listing]
zipfile = ZIP file name.  Default extension is .ZIP
file    = Names of files to compress. Wildcards *,? ok. Default is ALL files.
@list   = listfile containing names of files to add or view etc.
                         
If you find PKZIP fast, easy, and convenient to use, a registration of $25
would be appreciated.  If you send $47 or more you will receive, when
available, the next version of the PKZIP, PKUNZIP, and PKSFX programs.
Please state the version of the software that you currently have.  Send
check or money order to:   PKWARE, Inc.
                           7545 N. Port Washington Rd.
                           Glendale, WI 53217

A:\>TYPE WHATSNEW.110

Several new features have been added to PKZIP/PKUNZIP/PKSFX
version 1.1.  Read the file ADDENDUM.DOC for a complete
description of these changes and enhancements.  Highlights
of PKZIP/PKUNZIP/PKSFX etc. version 1.1 include:

- PKZIP 1.1 Imploding is up to 5X faster, particularly on large
  spreadsheet and database type files where PKZIP 1.02 would run
  relatively slowly.  Most 'typical' types of files should
  implode 5% to 25% faster.  In addition, compression has been
  improved over version 1.02 as well.

- Authenticity Verification.

- A 2,934 byte "mini" PKSFX self-extracting module.

- ZIP2EXE no longer requires the external file PKSFX.PRG.

- The ability to save & restore volume labels.

- Defensive use of the 32 bit accumulator EAX on 80386 or 80486
  computers. In many instances, such as when using MultiSoft's
  PC-KWIK cache or Novell non-dedicated NetWare software, if you
  needed to set the PKNO386 environment variable with
  PKZIP/PKUNZIP version 1.02, you probably don't need to set this
  anymore with PKZIP/PKUNZIP version 1.1.

  There appear to be many programs that use exTENded memory
  and/or '80286 protected mode' that have absolutely no regard to
  saving or restoring the EAX register when switching to and from
  protected mode on an 80386 or 80486 CPU.  There were no bugs in
  PKZIP/PKUNZIP 1.02 regarding usage of the 80386 instructions or
  registers.  However, PKZIP/PKUNZIP 1.02 did not expect that the
  EAX register would be wantonly corrupted from one instruction
  to the next.  PKZIP/PKUNZIP 1.1 do expect that other programs
  may randomly destroy the EAX register, and defends against
  this.  PKZIP/PKUNZIP 1.1 treat all references to EAX as a
  critical section, briefly disallowing programs from
  interrupting PKZIP/PKUNZIP when the EAX register is used.

  If it sounds ludicrous that a program would need to protect
  access to a CPU register like this, particularly the
  accumulator, that's because it is!  Considering that 80386
  computers have commonly been available for over two years now,
  it is unfortunate that many '80286 specific' programs don't
  have any consideration that they could be running on an 80386
  or 80486 CPU.  It takes approximately 30 bytes of code for a
  program to determine if it is running on an 80286 CPU versus an
  80386/80486 CPU, and two instructions (namely PUSH EAX and POP
  EAX) to save and restore the EAX register.  Any program that
  uses exTENded memory or 80286 protected mode has little excuse
  not to save and restore EAX when running on an 80386 or 80486
  CPU, especially if they are going to interrupt the currently
  executing program!  Programs that are negligent of this will
  only cause additional problems in the future as more software
  is developed to take advantage of the 80386 and 80486
  instruction sets and 32-bit registers.
```

## PKZIP 1.1 [MS]

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=https://discmaster.textfiles.com/file/29651/ibm0330-0339/ibm0333.tar/ibm0333/MSONLIN2.ZIP
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

ABORT    DIA       75  11-10-92  12:00a
HAYESOFF DIA      597  11-10-92  12:00a
HAYESON  DIA     2881  11-10-92  12:00a
ISAMREPR DLL   101100  11-10-92  12:00a
LOGOFF   DIA      684  11-10-92  12:00a
LOGON    DIA     2685  11-10-92  12:00a
PKUNZIP  EXE    16622  11-10-92  12:00a
PKZIP    EXE    23509  11-10-92  12:00a
PKZIP10  TXT   122513  11-10-92  12:00a
PKZIP11  TXT    16587  11-10-92  12:00a
PKZIPFIX EXE     7523  11-10-92  12:00a
FILE_ID  DIZ       47   4-20-95   8:30p
       12 File(s)     21504 bytes free

A:\>PKZIP

PKZIP (R)   FAST!   Create/Update Utility   Version 1.1   03-15-90
Copr. 1989-1990 PKWARE Inc.  All Rights Reserved.  PKZIP/h for help
PKZIP Reg. U.S. Pat. and Tm. Off.

Usage: PKZIP [-b[path]] [options] zipfile [@list] [files...]
Options summary - consult the PKWARE documentation for additional information
  -x<filespec|@list> = eXclude filespec(s)            -z = add zipfile comment
  -d = delete files            -f = freshen files     -i = add changed files
  -l = display license info    -u = update files      -m[u,f] = move files
  -a = add files               -b = create temp zipfile on alternate drive
  -c = add/edit file comments  -C = add comments to new files only
  -k = keep same ZIP date      -o = set ZIP date to latest file
  -q = enable ANSI comments    -s<pwd> = Scramble files with password
  -r = recurse subdirs         -$[drive] = save volume label 
  -t[mmddyy] = Compress files on or after specified date (default=today)
  -e[x,i,s] = use maXimal compression/Implode only/Shrink only
  -<p|P> = store pathnames | p=recursed into | P=specified & recursed into
  -<w|W><H,S> = | w=include | W=don't include | Hidden/System files
  -<j|J><H,S,R> = | j=mask | J=don't mask | Hidden/System/Readonly attributes
  -v[b,c,d,e,n,p,s,r,t] = view ZIP [Brief listing/show Comments/sort by -
    Date/Ext/Name/Percentage/Size/sort Reverse/Technical (long) listing]
zipfile = ZIP file name.  Default extension is .ZIP
file    = Names of files to compress. Wildcards *,? ok. Default is ALL files.
@list   = listfile containing names of files to add or view etc.
                         
This copy of PKZIP has been licensed to Microsoft Corporation for
distribution to Microsoft customers.
```

## PKZIP 1.11 [IBM]

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=https://discmaster.textfiles.com/file/29622/ibm0040-0049/ibm0040.tar/ibm0040/W3DRV12.ZIP
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

PKZIP    EXE    23458  11-23-90
DRVRDSK1 ZIP   362246  10-16-91  11:02a
DRVRDSK2 ZIP   324181  10-16-91  11:04a
        3 File(s)    503296 bytes free

A:\>PKZIP

PKZIP (R)   FAST!   Create/Update Utility   Version 1.11  11-23-90
Copr. 1989-1990 PKWARE Inc.  All Rights Reserved.  PKZIP/h for help
PKZIP Reg. U.S. Pat. and Tm. Off.    IBM LICENSED VERSION

Usage: PKZIP [-b[path]] [options] zipfile [@list] [files...]
Options summary - consult the PKWARE documentation for additional information
  -x<filespec|@list> = eXclude filespec(s)            -z = add zipfile comment
  -d = delete files            -f = freshen files     -i = add changed files
  -l = display license info    -u = update files      -m[u,f] = move files
  -a = add files               -b = create temp zipfile on alternate drive
  -c = add/edit file comments  -C = add comments to new files only
  -k = keep same ZIP date      -o = set ZIP date to latest file
  -q = enable ANSI comments
  -r = recurse subdirs         -$[drive] = save volume label 
  -t[mmddyy] = Compress files on or after specified date (default=today)
  -e[x,i,s] = use maXimal compression/Implode only/Shrink only
  -<p|P> = store pathnames | p=recursed into | P=specified & recursed into
  -<w|W><H,S> = | w=include | W=don't include | Hidden/System files
  -<j|J><H,S,R> = | j=mask | J=don't mask | Hidden/System/Readonly attributes
  -v[b,c,d,e,n,p,s,r,t] = view ZIP [Brief listing/show Comments/sort by -
    Date/Ext/Name/Percentage/Size/sort Reverse/Technical (long) listing]
zipfile = ZIP file name.  Default extension is .ZIP
file    = Names of files to compress. Wildcards *,? ok. Default is ALL files.
@list   = listfile containing names of files to add or view etc.
                         
PKWARE, Inc.
7545 N. Port Washington Rd.
Glendale, WI 53217
```

## PKZIP 1.93A

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=https://discmaster.textfiles.com/file/29622/ibm0040-0049/ibm0044.tar/ibm0044/PKZ193A.EXE
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

ALPHA193 DOC     9299  10-15-91   7:30p
BUGREP   DOC     2275  10-15-91   7:30p
BENCH    DOC     2449  10-15-91   7:30p
PKZIP    EXE    24411  10-15-91   7:30p
PKUNZIP  EXE    19411  10-15-91   7:30p
APPNOTE  TXT    32227  10-15-91   7:30p
CRC      DOC     1547  10-15-91   7:30p
        7 File(s)     67072 bytes free

A:\>PKZIP

PKZIP (R)  FAST!  Create/Update Utility  Version 1.93  ALPHA  10-15-91
Copr. 1989-1991 PKWARE Inc.  All Rights Reserved.  PKZIP/h for help
PKZIP Reg. U.S. Pat. and Tm. Off.   Patent No. 5,051,745

Usage: PKZIP [-b[path]] [options] zipfile [@list] [files...]
Options summary - consult the PKWARE documentation for additional information
  -x<filespec|@list> = eXclude filespec(s)            -z = add zipfile comment
  -d = delete files            -f = freshen files     -i = add changed files
  -l = display license info    -u = update files      -m[u,f] = move files
  -a = add files               -b = create temp zipfile on alternate drive
  -c = add/edit file comments  -C = add comments to new files only
  -k = keep same ZIP date      -o = set ZIP date to latest file
  -q = enable ANSI comments    -s<pwd> = Scramble files with password
  -r = recurse subdirs         -$[drive] = save volume label
  -<T|t>[mmddyy] = Compress files before|after specified date (default=today)
  -e[x,n,s] = maXimal compression/Normal compression/Speed(fast) compression
  -<p|P> = store pathnames | p=recursed into | P=specified & recursed into
  -<w|W><H,S> = | w=include | W=don't include | Hidden/System files
  -<j|J><H,S,R> = | j=mask | J=don't mask | Hidden/System/Readonly attributes
  -v[b,c,d,e,n,p,s,r,t] = view ZIP [Brief listing/show Comments/sort by -
    Date/Ext/Name/Percentage/Size/sort Reverse/Technical (long) listing]
zipfile = ZIP file name.  Default extension is .ZIP
file    = Names of files to compress. Wildcards *,? ok. Default is ALL files.
@list   = listfile containing names of files to add or view etc.
                         
NOTICE: THIS IS PRE-RELEASE SOFTWARE AND, AS SUCH, HAS NOT BEEN COMPLETELY
TESTED.  PERSONS USING THIS SOFTWARE MAY ENCOUNTER PROBLEMS AND IT IS LIKELY
THAT YOU MAY LOSE OR DESTROY DATA.  YOU MUST BACKUP YOUR SYSTEM PRIOR
TO USING THIS SOFTWARE, AND SHOULD DO SO OFTEN DURING SUBSEQUENT USE.

PKWARE, Inc.
9025 N. Deerwood Drive
Brown Deer, WI 53223

A:\>TYPE ALPHA193.DOC
Copyright 1989-1991 PKWARE Inc.  All Rights Reserved.

NOTICE
------

  THIS IS PRE-RELEASE SOFTWARE AND, AS SUCH, HAS NOT BEEN COMPLETELY
  TESTED. PERSONS USING THIS SOFTWARE MAY ENCOUNTER PROBLEMS AND IT IS
  LIKELY THAT YOU MAY LOSE OR DESTROY DATA.  YOU MUST BACKUP YOUR SYSTEM
  PRIOR TO USING THIS SOFTWARE, AND SHOULD DO SO OFTEN DURING SUBSEQUENT
  USE. PLEASE DON'T COMPRESS ANYTHING THAT CANNOT BE EASILY REPLACED OR
  RESTORED. THIS VERSION OF PKZIP POSSIBLY MAY NOT BE COMPATIBLE WITH
  LATER VERSIONS OF THE SOFTWARE AND SHOULD NOT BE USED TO ARCHIVE FILES
  YOU PLAN TO EXCHANGE WITH OTHER PERSONS.


Disclaimer
----------

Although PKWARE will attempt to supply current and accurate information
relating to its file formats, algorithms, and the subject programs, the
possibility of error can not be eliminated. PKWARE therefore expressly
disclaims any warranty that the information contained in the associated
materials relating to the subject programs and/or the format of the
files created or accessed by the subject programs and/or the algorithms
used by the subject programs, or any other matter, is current, correct
or accurate as delivered.  Any risk of damage due to any possible
inaccurate information is assumed by the user of the information.
Furthermore, the information relating to the subject programs and/or the
file formats created or accessed by the subject programs and/or the
algorithms used by the subject programs is subject to change without
notice.

                                 ALPHA 1.93

Due to the extensive changes in PKZIP including the incorporation of our
new data compression technology, this ALPHA version is being made
available for a wide-spread test.  PLEASE be aware that this is NOT
final software, and must be treated as such.  It is EXTREMELY LIKELY
that files created with this version of PKZIP will NOT be compatible
with future/final releases of the product.  Therefore, do NOT use this
program to archive any data which cannot be replaced easily.  BBS SysOps
SHOULD NOT convert their archives to this release of PKZIP.  Although it
is true that significant space savings can be realized on all BBS's by
converting to the new compression, PLEASE wait until the final version
is available to ensure compatibility with your users and other BBS's.

This generation of PKZIP offers the following significant improvements
over previous releases:

1)  ALL NEW COMPRESSION ALGORITHM.  This new process allows PKZIP to
    compress data TIGHTER and FASTER.  In fact, the new FAST method gets
    more compression than the maximum compression in PKZIP 1.10, yet is
    almost as fast as Shrinking!

2)  MULTI-VOLUME ARCHIVES.  PKZIP can now create and extract ZIP files
    which cross more than one disk.  This is not functional in this
    Alpha 1.93 version.

3)  EMS SUPPORT.  When sufficient EMS is available PKZIP now requires
    only 85K of conventional memory to run.  Without EMS PKZIP requires
    183K.  PKUNZIP requires approximately 75K if EMS is present and
    approximately 81K without EMS.

=================
NEW PKZIP OPTIONS
=================
Brackets [] are used in command option descriptions only to indicate the
position of optional or required switches and are NEVER typed as part of
a command.

****
Compression Type
-e[s/n/x]

Specifying this parameter allows you to select the compression type you
desire.  (s) specifies the FAST compression algorithm, (x) specifies the
EXTRA compression algorithm.  (n) specifies the NORMAL (default)
compression type and is provided to override the configuration file in
future revisions.

Examples:

        pkzip -es test.zip *.doc
        pkzip -ex test2.zip *.gif

****
Date Specifier
-t[mmyydd]    (files on or AFTER this date)
-T[mmyydd]    (files BEFORE this date)

With this option, you can specify a date so that only files with a date
that is equal to or more recent/older will be included in the PKZIP
operation.  These options MAY be combined, but take care not to have
them overlap or you will exclude all files!

Examples:

        pkzip -ex -m -T010191 oldstuff *.wk1

        This example would compress all files matching the file
        specification *.wk1 and created before January 1st, 1991, and
        place them into the ZIP file called 'oldstuff.zip'.  This
        example is also using the EXTRA compression option and MOVING
        the files (deleting them after they are compressed).

        pkzip -t110191 catalog catalog.*

        This example would compress all files matching the file
        specification catalog.* (i.e. all files names catalog,
        regardless of extension) and created on or after November
        1st, 1991, and copy them into a ZIP files called 'catalog.zip'.

****
Create Multi-Volume Archives
-&

This feature is not functional in this ALPHA 1.93 version, but will be
in the final release of the product.

When this option is specified, and a ZIP file is being created on a
REMOVABLE DOS media device, PKZIP has permission to create a ZIP file
that is larger than that single media.  When a ZIP file reaches the
point where it would exceed the capacity of the storage device, the user
is prompted to insert another one.  In the case of standard floppy disks
(360K/720K/1.2M/1.44M) these disks may be formatted on-the-fly, that is,
if an un-formatted disk is inserted it will be formatted before PKZIP
continues to write the archive.

****
Open files in compatibility mode
-=

When this option is specified, PKZIP will open files for archiving in
compatibility mode, as opposed to 'sharing' mode.  On some systems this
will bypass any network sharing and allow PKZIP to read files opened by
other programs or applications.

****
Disable EMS usage
-+

If you experience strange behavior when testing PKZIP, try using this
option. When this option is on PKZIP will use only conventional memory.
Use of this switch may reveal problems or incompatibilities with your
EMS driver.  Please report these occurances.

===================
NEW PKUNZIP OPTIONS
===================
Brackets [] are used in command option descriptions only to indicate the
position of optional or required switches and are NEVER typed as part of
a command.

****
Command line options for PKUNZIP may now be combined!  This was possible
with previous versions of PKZIP but never before with PKUNZIP.  For
example in the past if you wanted to extract a ZIP file while restoring
directory paths AND overwrite any previously existing files by the same
name you needed to give the command with separate -d -o options, you may
now combine them as the single option -do.

Please note: As with PKZIP, you still MUST separate options which take
additional parameters themselves, such as -e (extract files in
designated order).  The -ed option is the extract files in order of file
date, thus if you had planned it to also restore directories it would
not be interpreted in that fashion.

****
Exclude Files
-xfilename
-x@exclude.lst

PKZIP allows you to create plain ASCII text files containing file names
that you wish to compress, or exclude from an operation.  Now with this
option you may specify a list of files to EXCLUDE from an unzip
operation, or a particular file.

Example:

        pkunzip testfile.zip -xmanual.txt

        This example would extract the files contained in the archive
        'testfile.zip' but not the file 'manual.txt'

        pkunzip -d a:project2.zip -x@nowant.lst

        This example would extract the files contained in the archive
        'project2.zip' (which incidentally is located on the a: drive
        and is having it's directory structure restored via the -d
        option and the a: being added to the file name).  The files
        contained in the list file 'nowant.lst' would NOT be extracted
        from this archive.

****
Disable EMS usage
-+

If you experience strange behavior when testing PKUNZIP, try this
option. When this option is on PKUNZIP will use only conventional
memory.  Use of this switch may reveal problems or incompatibilities
with your EMS driver.  Please report these occurances.

****
New Overwrite Option
(automatic)

Past versions of PKUNZIP, when encountering a file it was extracting
that already existed, would prompt you as to whether or not you wished
to overwrite the existing file.  This question could only be answered in
a yes or no manner.

Starting with this revision, PKUNZIP will now prompt you with:

File already exists overwrite (y/n/a/r)?

The four possible responses to this question are:

Y - Yes, overwrite the existing file with the version that is contained
    in the archive.

N - No, leave the existing file alone and skip to the next file.

A - All, overwrite the existing file, and do so for any others that are
    run across as well.  This is useful if you forget to specify -o when
    you give the original PKUNZIP command.

R - Rename it!  This will prompt you for a new name of the file and then
    extract the file in the archive to this new name.  This is very
    useful when extracting downloads from BBS systems, which frequently
    contain files such as 'readme.doc' or 'manual.doc' in many different
    files.
```

## PKZIP 2.01

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=https://discmaster.textfiles.com/file/30009/wbiz0250-0259/wbiz0250.tar/wbiz0250/PKZ201.ZIP
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

OMBUDSMN ASP      595   3-15-92   2:01a
FILE_ID  DIZ      118   3-15-92   2:01a
BENCH    DOC     2449   3-15-92   2:01a
CRC      DOC     1888   3-15-92   2:01a
DEDICATE DOC      720   3-15-92   2:01a
MANUAL   DOC   132199   3-15-92   2:01a
ORDER    DOC     4654   3-15-92   2:01a
README   DOC      789   3-15-92   2:01a
WHATSNEW DOC     7885   3-15-92   2:01a
PKUNZIP  EXE    19793   3-15-92   2:01a
PKZIP    EXE    24869   3-15-92   2:01a
APPNOTE  TXT    32227   3-15-92   2:01a
WAREZ        <DIR>   
       13 File(s)     86016 bytes free

A:\>PKZIP

PKZIP (R)  FAST!  Create/Update Utility    Version 2.01   03-15-92    
Copr. 1989-1992 PKWARE Inc.  All Rights Reserved.  PKZIP/h for help
PKZIP Reg. U.S. Pat. and Tm. Off.                       

Usage: PKZIP [-b[path]] [options] zipfile [@list] [files...]
Options summary - consult the PKWARE documentation for additional information
  -x<filespec|@list> = eXclude filespec(s)            -z = add zipfile comment
  -d = delete files            -f = freshen files     -i = add changed files
  -l = display license info    -u = update files      -m[u,f] = move files
  -a = add files               -b = create temp zipfile on alternate drive
  -c = add/edit file comments  -C = add comments to new files only
  -k = keep same ZIP date      -o = set ZIP date to latest file
  -q = enable ANSI comments    -s<pwd> = Scramble files with password
  -r = recurse subdirs         -$[drive] = save volume label
  -<T|t>[mmddyy] = Compress files before|after specified date (default=today)
  -e[x,n,s] = maXimal compression/Normal compression/Speed(fast) compression
  -<p|P> = store pathnames | p=recursed into | P=specified & recursed into
  -<w|W><H,S> = | w=include | W=don't include | Hidden/System files
  -<j|J><H,S,R> = | j=mask | J=don't mask | Hidden/System/Readonly attributes
  -v[b,c,d,e,n,p,s,r,t] = view ZIP [Brief listing/show Comments/sort by -
    Date/Ext/Name/Percentage/Size/sort Reverse/Technical (long) listing]
zipfile = ZIP file name.  Default extension is .ZIP
file    = Names of files to compress. Wildcards *,? ok. Default is ALL files.
@list   = listfile containing names of files to add or view etc.
                         
If you find PKZIP fast, easy, and convenient to use, a registration of $33
would be encouraged. If you send $60 you will receive, when available,      
the next version of PKZIP, PKUNZIP, programs. Please state the version
of the software that you have, Please send check or money order to: PKWARE, Inc
7545 N.PORT Washington Rd.
Glendale, WI 53217
   
A:\>TYPE WHATSNEW.DOC
Copyright 1989-1992 PKWARE Inc.  All Rights Reserved.

Disclaimer
----------

Although PKWARE will attempt to supply current and accurate information
relating to its file formats, algorithms, and the subject programs, the
possibility of error can not be eliminated. PKWARE therefore expressly
disclaims any warranty that the information contained in the associated
materials relating to the subject programs and/or the format of the
files created or accessed by the subject programs and/or the algorithms
used by the subject programs, or any other matter, is current, correct
or accurate as delivered.  Any risk of damage due to any possible
inaccurate information is assumed by the user of the information.
Furthermore, the information relating to the subject programs and/or the
file formats created or accessed by the subject programs and/or the
algorithms used by the subject programs is subject to change without
notice.

                                 PKZIP V2.01

This generation of PKZIP offers the following significant improvements
over previous releases:

1)  ALL NEW COMPRESSION ALGORITHM.  This new process allows PKZIP to
    compress data TIGHTER and FASTER.  In fact, the new FAST method gets
    more compression than the maximum compression in PKZIP 1.10, yet is
    almost as fast as Shrinking!

2)  MULTI-VOLUME ARCHIVES.  PKZIP can now create and extract ZIP files
    which cross more than one disk.  This is only available in  the
    Registered version.

3)  EMS SUPPORT.  When sufficient EMS is available PKZIP now requires
    only 85K of conventional memory to run.  Without EMS PKZIP requires
    183K.  PKUNZIP requires approximately 75K if EMS is present and
    approximately 81K without EMS.

=================
NEW PKZIP OPTIONS
=================
Brackets [] are used in command option descriptions only to indicate the
position of optional or required switches and are NEVER typed as part of
a command.

****
Compression Type
-e[s/n/x]

Specifying this parameter allows you to select the compression type you
desire.  (s) specifies the FAST compression algorithm, (x) specifies the
EXTRA compression algorithm.  (n) specifies the NORMAL (default)
compression type and is provided to override the configuration file in
future revisions.

Examples:

        pkzip -es test.zip *.doc
        pkzip -ex test2.zip *.gif

****
Date Specifier
-t[mmyydd]    (files on or AFTER this date)
-T[mmyydd]    (files BEFORE this date)

With this option, you can specify a date so that only files with a date
that is equal to or more recent/older will be included in the PKZIP
operation.  These options MAY be combined, but take care not to have
them overlap or you will exclude all files!

Examples:

        pkzip -ex -m -T010191 oldstuff *.wk1

        This example would compress all files matching the file
        specification *.wk1 and created before January 1st, 1991, and
        place them into the ZIP file called 'oldstuff.zip'.  This
        example is also using the EXTRA compression option and MOVING
        the files (deleting them after they are compressed).

        pkzip -t110191 catalog catalog.*

        This example would compress all files matching the file
        specification catalog.* (i.e. all files names catalog,
        regardless of extension) and created on or after November
        1st, 1991, and copy them into a ZIP files called 'catalog.zip'.

****
Create Multi-Volume Archives
-&

This feature is only available in Registered versions!

When this option is specified, and a ZIP file is being created on a
REMOVABLE DOS media device, PKZIP has permission to create a ZIP file
that is larger than that single media.  When a ZIP file reaches the
point where it would exceed the capacity of the storage device, the user
is prompted to insert another one.  In the case of standard floppy disks
(360K/720K/1.2M/1.44M) these disks may be formatted on-the-fly, that is,
if an un-formatted disk is inserted it will be formatted before PKZIP
continues to write the archive.

****
Open files in compatibility mode
-=

When this option is specified, PKZIP will open files for archiving in
compatibility mode, as opposed to 'sharing' mode.  On some systems this
will bypass any network sharing and allow PKZIP to read files opened by
other programs or applications.

****
Disable EMS usage
-+

If you experience strange behavior when testing PKZIP, try using this
option. When this option is on PKZIP will use only conventional memory.
Use of this switch may reveal problems or incompatibilities with your
EMS driver.  Please report these occurances.

===================
NEW PKUNZIP OPTIONS
===================
Brackets [] are used in command option descriptions only to indicate the
position of optional or required switches and are NEVER typed as part of
a command.

****
Command line options for PKUNZIP may now be combined!  This was possible
with previous versions of PKZIP but never before with PKUNZIP.  For
example in the past if you wanted to extract a ZIP file while restoring
directory paths AND overwrite any previously existing files by the same
name you needed to give the command with separate -d -o options, you may
now combine them as the single option -do.

Please note: As with PKZIP, you still MUST separate options which take
additional parameters themselves, such as -e (extract files in
designated order).  The -ed option is the extract files in order of file
date, thus if you had planned it to also restore directories it would
not be interpreted in that fashion.

****
Exclude Files
-xfilename
-x@exclude.lst

PKZIP allows you to create plain ASCII text files containing file names
that you wish to compress, or exclude from an operation.  Now with this
option you may specify a list of files to EXCLUDE from an unzip
operation, or a particular file.

Example:

        pkunzip testfile.zip -xmanual.txt

        This example would extract the files contained in the archive
        'testfile.zip' but not the file 'manual.txt'

        pkunzip -d a:project2.zip -x@nowant.lst

        This example would extract the files contained in the archive
        'project2.zip' (which incidentally is located on the a: drive
        and is having it's directory structure restored via the -d
        option and the a: being added to the file name).  The files
        contained in the list file 'nowant.lst' would NOT be extracted
        from this archive.

****
Disable EMS usage
-+

If you experience strange behavior when testing PKUNZIP, try this
option. When this option is on PKUNZIP will use only conventional
memory.  Use of this switch may reveal problems or incompatibilities
with your EMS driver.  Please report these occurances.

****
New Overwrite Option
(automatic)

Past versions of PKUNZIP, when encountering a file it was extracting
that already existed, would prompt you as to whether or not you wished
to overwrite the existing file.  This question could only be answered in
a yes or no manner.

Starting with this revision, PKUNZIP will now prompt you with:

File already exists overwrite (y/n/a/r)?

The four possible responses to this question are:

Y - Yes, overwrite the existing file with the version that is contained
    in the archive.

N - No, leave the existing file alone and skip to the next file.

A - All, overwrite the existing file, and do so for any others that are
    run across as well.  This is useful if you forget to specify -o when
    you give the original PKUNZIP command.

R - Rename it!  This will prompt you for a new name of the file and then
    extract the file in the archive to this new name.  This is very
    useful when extracting downloads from BBS systems, which frequently
    contain files such as 'readme.doc' or 'manual.doc' in many different
    files.
```

## PKZIP 2.04c

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=https://discmaster.textfiles.com/file/18224/World_Of_Computer_Software-02-386-Vol-2of3.iso/w/wxpress2.zip/PKZ204C.EXE
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

README   DOC      537  12-28-92   2:04a
SHAREWAR DOC      573  12-28-92   2:04a
WHATSNEW 204     2430  12-28-92   2:04a
LICENSE  DOC     3707  12-28-92   2:04a
ORDER    DOC     3456  12-28-92   2:04a
ADDENDUM DOC    13700  12-28-92   2:04a
MANUAL   DOC   191376  12-28-92   2:04a
AUTHVERI FRM     2299  12-28-92   2:04a
PKZIP    EXE    41462  12-28-92   2:04a
PKUNZIP  EXE    28806  12-28-92   2:04a
PKZIPFIX EXE     7672  12-28-92   2:04a
ZIP2EXE  EXE    27069  12-28-92   2:04a
PKUNZJR  COM     2750  12-28-92   2:04a
OMBUDSMN ASP      591  12-28-92   2:04a
       14 File(s)     28672 bytes free

A:\>PKZIP

PKZIP (R)   FAST!   Create/Update Utility   Version 2.04c   12-28-92
Copr. 1989-1992 PKWARE Inc.  All Rights Reserved.  Shareware Version
PKZIP Reg. U.S. Pat. and Tm. Off.   Patent No. 5,051,745


PKZIP /h[1] for basic help   PKZIP /h[2|3|4] for other help screens.


Usage:  PKZIP [options] zipfile [@list] [files...]


       Simple Usage:   PKZIP zipfile file(s)...
                         |      |      |
Program -----------------       |      |
                                |      |
New zipfile to create ----------       |
                                       |
File(s) you wish to compress ----------

The above usage is only a very basic example of PKZIP's capability.


Press 2 for more options (including spanning & formatting), press 3 for
advanced options, 4 for trouble shooting options, any other key to quit help.

If you use PKZIP on a regular basis you are strongly encouraged to register
it.  With a full registration of US $47.00 you will receive a comprehensive
printed manual, the latest version of PKZIP, PKUNZIP & PKSFX software, and
when available, the next version of the software.  See the documentation for
commercial and distribution licensing info.  Send check or money order to:
                PKWARE, Inc.
                9025 N. Deerwood Drive
                Brown Deer, WI 53223

A:\>TYPE WHATSNEW.204

Several new features have been added to PKZIP/PKUNZIP/PKSFX
version 2.04c.  Read the file ADDENDUM.DOC for a complete
description of these changes and enhancements.  Highlights
of PKZIP/PKUNZIP/PKSFX etc. version 2.04c include:

-Improved Compression

        PKZIP/PKUNZIP 2.04c implements a new compression algorithm
        called Deflating.  Deflating has varying levels of compression
        and speed available.  Both speed and compression are greatly
        improved over previous versions of PKZIP.

-Multi-Volume Archive Support/Formatting

        PKZIP/PKUNZIP 2.04c has the ability to "span" a .ZIP file across
        multiple diskettes if the final .ZIP file size would be greater
        than a single diskette.  PKZIP 2.04c also has the ability to
        format the destination diskettes on the fly.

-XMS/EMS Usage

        PKZIP/PKUNZIP 2.04c has the ability to use of EMS, UMB, and HMA
        memory, which will allow the ability to process more files or be
        able to run with less conventional memory.  PKZIP/PKUNZIP 2.04
        will run in as little as 85K of conventional memory if EMS or
        XMS memory is available.

-Novell Network Aware

        PKZIP 2.04c is Novell Netware "aware".  Updating or creating
        a .ZIP file on a network drive is much faster with the network
        support in PKZIP 2.04c.

-Auto CPU type detection.
        
        PKZIP/PKUNZIP 2.04c will detect what type of CPU it is being run
        on and will use instructions specifcally optimized for an 808x
        CPU, 80386 CPU, or 80486 CPU.

-DPMI support
        
        PKZIP/PKUNZIP 2.04c automatically detects if DPMI (DOS Protected
        Mode Interface) support is available and will execute code in
        32-bit protected mode for better speed.

-PKCFG program

        PKZIP 2.04c can be configured to best suit your needs through
        the use of the PKCFG program.  This is only available in the
        registered version of PKZIP.

-PKSFX Junior and PKUNZIP Junior

        These "Junior" programs use very little memory and are extremely
        small.  Although they are reduced in ability, their small size
        makes them very useful.

-Password Encryption

        Sensitive data files can be scrambled with password protection.
        The security of this feature has been significantly improved in
        PKZIP/PKUNZIP 2.04c.

-Authenticy Verification

        Users requiring authentication of archive files may request an
        Authenticy Verification code.  This allows users to create .ZIP
        files which PKUNZIP can detect tampering of.
```

## PKZIP 2.04e

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=https://discmaster.textfiles.com/file/4695/sound_sensations.iso/utils/zipfiles/pkz204e.exe
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

README   DOC      536   1-25-93   2:04a
SHAREWAR DOC      573   1-25-93   2:04a
WHATSNEW 204     2430   1-25-93   2:04a
V204E    NEW     8837   1-25-93   2:04a
LICENSE  DOC     3707   1-25-93   2:04a
ORDER    DOC     3304   1-25-93   2:04a
ADDENDUM DOC    18782   1-25-93   2:04a
MANUAL   DOC   202252   1-25-93   2:04a
AUTHVERI FRM     2330   1-25-93   2:04a
PKZIP    EXE    42475   1-25-93   2:04a
PKUNZIP  EXE    29371   1-25-93   2:04a
PKZIPFIX EXE     7682   1-25-93   2:04a
ZIP2EXE  EXE    27326   1-25-93   2:04a
PKUNZJR  COM     2750   1-25-93   2:04a
OMBUDSMN ASP      591   1-25-93   2:04a
       15 File(s)      2048 bytes free

A:\>PKZIP

PKZIP (R)   FAST!   Create/Update Utility   Version 2.04e   01-25-93
Copr. 1989-1993 PKWARE Inc.  All Rights Reserved.  Shareware Version
PKZIP Reg. U.S. Pat. and Tm. Off.   Patent No. 5,051,745


PKZIP /h[1] for basic help   PKZIP /h[2|3|4] for other help screens.


Usage:  PKZIP [options] zipfile [@list] [files...]


       Simple Usage:   PKZIP zipfile file(s)...
                         |      |      |
Program -----------------       |      |
                                |      |
New zipfile to create ----------       |
                                       |
File(s) you wish to compress ----------

The above usage is only a very basic example of PKZIP's capability.


Press 2 for more options (including spanning & formatting), press 3 for
advanced options, 4 for trouble shooting options, any other key to quit help.

If you use PKZIP on a regular basis you are strongly encouraged to register
it.  With a full registration of US $47.00 you will receive a comprehensive
printed manual, the latest version of PKZIP, PKUNZIP & PKSFX software, and
when available, the next version of the software.  See the documentation for
commercial and distribution licensing info.  Send check or money order to:
                PKWARE, Inc.
                9025 N. Deerwood Drive
                Brown Deer, WI 53223

A:\>TYPE V204E.NEW

The following changes have been made in version 2.04e of
PKZIP/PKUNZIP from version 2.04c.

1) DPMI.

     The DPMI support in PKZIP/PKUNZIP has been changed to work
     around bugs and anomolies with the following DPMI drivers or
     environments.  PKWARE would like to thank Quarterdeck Office
     Systems and Qualitas, Inc. for their technical assistance
     regarding DPMI.

    a) PC-KWIK

      According to PC-KWIK corporation's document, 'PC-KWIK
      Technical Issues "Summer '92"':

        PC-KWIK is unable to recognize memory requests from programs
        using VCPI or DPMI protocols ... For programs [that use VCPI
        or DPMI] it is necessary to reduce the size of the cache and
        disable lending.

      PC-KWIK has a lending feature that allows memory to loaned
      from the cache memory to applications.  However, PC-KWIK is
      not aware of any memory allocated or used by DPMI, and will
      loan this memory as well, possibly causing corruption of the
      DPMI driver and usually resulting in a system crash or reboot.

      This problem seems to present in most versions of SUPERPCK,
      through version 5.01.

      In other words, when using PC-KWIK with any program that uses DPMI,
      including PKZIP and PKUNZIP, you should either make sure that you
      have enough memory in your computer so that lending will not occur,
      reduce the size of your cache, or disable PC-KWIK's lending.

      Therefore, PKZIP/PKUNZIP detect for the presence of PC-KWIK
      and default DPMI to DISABLE when PC-KWIK is installed.  This
      can be overidden by specifying -)+ on the PKZIP or PKUNZIP
      command line, or by placing DPMI=ENABLE in your PKZIP.CFG for
      PKZIP or setting the environment variable PKUNZIP=-)+ for PKUNZIP.

  b) QDPMI 1.00

      If a program tries to use DPMI and EMS memory with QDPMI 1.00,
      QDPMI would become unstable or crash.  PKZIP/PKUNZIP now
      check for the presence of QDPMI 1.00 and if PKZIP/PKUNZIP
      are using EMS memory, they do not attempt to use DPMI at all.

  c) QDPMI 1.01

      When a program switches to protected mode, QDPMI does not
      'synchronize' the EMS page frame.  The result is that programs
      can not correctly read or write any data in the EMS page frame
      while in proteced mode.  PKZIP/PKUNZIP now check for the presence
      of QDPMI 1.01 and will use slower real-mode code for any
      manipulation of data in the EMS page frame rather than faster
      protected mode code.

  d) OS/2 2.0 DOS BOX

      The OS/2 2.0 DOS box does not allow programs to allocate the
      'DPMI private data area' in an UMB.  Doing so causes a system
      violation error.  PKZIP/PKUNZIP now check to see if they are
      running in the OS/2 2.0 DOS box and will not allocate the DPMI
      private data area in an UMB.  (This is actually kind of a shame,
      as the OS/2 DOS box (unlike the Windows DOS box) provides UMB
      memory to DOS applications.  It should be able to allow programs
      to store the DPMI data area in these UMB's.)

  e) Windows 3.0 DOS BOX

      The DPMI support in the Windows 3.0 DOS box does not always
      seem to work correctly.  Therefore, PKZIP/PKUNZIP detect if
      they are running in the Windows 3.0 DOS box and will not support
      DPMI in this environment.

  f) Windows 3.1 DOS BOX

      The way PKZIP/PKUNZIP allocates the DPMI save/restore state
      buffer has been changed to be more compatible with Windows 3.1.

2)  The Norton AntiVirus program FALSELY reported that PKZIPFIX and
    PKUNZIP contained the Maltese Ameoba virus.  The software DID
    NOT contain this virus.  All files in this release have been
    modified so as to not trigger any FALSE virus reports by the
    Norton AntiVirus program.

3)  QEMM versions 5.1x would corrupt the high word of the 32-bit
    registers on an 80386 or 80486 CPU.  PKZIP/PKUNZIP check for
    this condition, and will not use 32-bit instructions if QEMM
    version 5.1x is present.

4)  Apparently some peer-to-peer networks such as Novell Netware Lite
    and others do not support canonical or fully specified filename.
    PKZIP now uses noncanonical filenames when specifying temporary
    filenames on a network drive to avoid this problem.

5)  PKZIP would erroneously report "E28 Destination is same as temp
    directory" when creating a new .zip file on drive A:.  This has
    been fixed.

6)  The keywords on/enable and off/disable are now synonymous when
    used in the PKZIP configuration file.

7)  Using EMS= options in the PKZIP configuration file would enable
    or disable both EMS and XMS usage.  The XMS= option had no effect.
    This has been corrected.

8)  The Quick format option in PKZIP would zero out the existing FAT
    on the disk (by design).  However, if the disk had any bad
    sectors on it (in which case, it isn't a good idea to use that
    disk as a backup disk anyway...) they would now be marked as
    good.  By popular demand, PKZIP now reads the existing FAT and
    leaves any bad sectors marked as bad.  This however, makes the
    'Quick' format function about twice as slow as it was (although
    still much faster than an unconditional format).  In most cases
    however, unless there are several subdirectories on the diskette,
    the -&w (wipe) option is faster than the -&f (format) option when
    backing up to pre-formatted diskettes.

9)  Under some cirumstances, PKZIP could possibly store the last
    file in a multi-disk backup set incorrectly.  This has been
    corrected.

10) The volume label option in PKZIP would not work.  This has been
    fixed.

11) PKZIP/PKUNZIP now searches for a PKNOFASTCHAR variable in the
    DOS environment.  If this variable is present, PKZIP/PKUNZIP
    will use the slower DOS 1.x/2.x character output functions
    rather than the 'DOS Fast Character Output' function.  This is
    provided for compatability with some TSR's, BBS Doors and mail
    readers etc., that redirect or capture the output of programs and
    do not support the DOS Fast Character Output function.

12) PKZIP will now accept either MAXIMUM or MAXIMAL in the
    configuration file.

13) Some people have requested that the -& backup option support the
    DOS verify function.  Specifying -&v on the PKZIP command line
    or BACKUP=VERIFY in the PKZIP.CFG file will turn on the DOS
    verify flag when writing to the backup disk(s).  This makes
    PKZIP run slower, but ensures better integrity of each diskette.

14) Using the -m option with -rp in PKZIP will delete any empty
    subdirectories that have been saved in the .ZIP file after all
    the files have been moved into the .ZIP file.  Some people have
    requested a way to have PKZIP leave these empty subdirectories
    behind.  This can be accomplished by using -m- on the PKZIP
    command line.

15) It appears that some versions of NoGate's PAK program would
    place incorrect information in the .ZIP file directories that it
    created.  Specifically, the disk number information for where
    files, the central directory, and the central end directory
    started is inconsistent, causing PKUNZIP to think it was
    extracting a multi-disk .ZIP file when it really wasn't.
    PKUNZIP now checks for this condition, and ignores this
    erroneous information.

16) PKZIP now ignores any ZIPDATE= or -o or -k options when creating
    multi-disk .ZIP files, rather than displaying the help screens.

17) On some 80386 machines running PKZIP could leave allocated UMB's
    behind.  This has been corrected.

18) In some circumstances, running PKZIP with EMS memory and very low
    free conventional memory could cause corruption of the .ZIP file.
    This has been corrected.

19) When PKZIP prompts for an encryption password, it will now ask the
    user to enter the password twice for verification.

20) PKZIP/PKUNZIP would not work under DOS 2.x.  This is because
    DOS 2.x crashes on many int 2Fh installation check calls for
    EMS/XMS drivers etc.  These calls work properly under DOS 3.0
    or above.  Therefore, PKZIP/PKUNZIP detect for the presence
    of DOS 2.x, and will not support any of the advanced features
    including 32-bit instructions, EMS memory, XMS memory, DPMI
    support and Netware usage.

21) PKSFX could in some instances erroneously report failed AV's or
    garble any AVEXTRA text present.  This has been fixed.

22) Using PKZIP with the -o option or ZIPDATE=LATEST in the configuration
    file would set the date of the .ZIP file to the latest dated file
    or directory.  Directory dates are now ignored in this version.
```

## PKZIP 2.04g

```
pc.js v3.00
Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
Options: --disk=https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json --diskette=https://discmaster.textfiles.com/file/6140/BSTETRS2.bin/utils/pkware/pkz204g/pkz204g.exe
[Press CTRL-D to enter command mode]

A:\>DIR

 Volume in drive A has no label
 Directory of  A:\

README   DOC      741   2-01-93   2:04a
SHAREWAR DOC      573   2-01-93   2:04a
WHATSNEW 204     2430   2-01-93   2:04a
V204G    NEW    10704   2-01-93   2:04a
HINTS    TXT    14109   2-01-93   2:04a
LICENSE  DOC     3707   2-01-93   2:04a
ORDER    DOC     3304   2-01-93   2:04a
ADDENDUM DOC    19361   2-01-93   2:04a
MANUAL   DOC   202252   2-01-93   2:04a
AUTHVERI FRM     2330   2-01-93   2:04a
PKZIP    EXE    42166   2-01-93   2:04a
PKUNZIP  EXE    29378   2-01-93   2:04a
PKZIPFIX EXE     7687   2-01-93   2:04a
ZIP2EXE  EXE    27319   2-01-93   2:04a
PKUNZJR  COM     2750   2-01-93   2:04a
OMBUDSMN ASP      591   2-01-93   2:04a
       16 File(s)    839680 bytes free

A:\>PKZIP

PKZIP (R)   FAST!   Create/Update Utility   Version 2.04g   02-01-93
Copr. 1989-1993 PKWARE Inc.  All Rights Reserved.  Shareware Version
PKZIP Reg. U.S. Pat. and Tm. Off.   Patent No. 5,051,745


PKZIP /h[1] for basic help   PKZIP /h[2|3|4] for other help screens.


Usage:  PKZIP [options] zipfile [@list] [files...]


       Simple Usage:   PKZIP zipfile file(s)...
                         |      |      |
Program -----------------       |      |
                                |      |
New zipfile to create ----------       |
                                       |
File(s) you wish to compress ----------

The above usage is only a very basic example of PKZIP's capability.


Press 2 for more options (including spanning & formatting), press 3 for
advanced options, 4 for trouble shooting options, any other key to quit help.

If you use PKZIP on a regular basis you are strongly encouraged to register
it.  With a full registration of US $47.00 you will receive a comprehensive
printed manual, the latest version of PKZIP, PKUNZIP & PKSFX software, and
when available, the next version of the software.  See the documentation for
commercial and distribution licensing info.  Send check or money order to:
                PKWARE, Inc.
                9025 N. Deerwood Drive
                Brown Deer, WI 53223

A:\>TYPE V204G.NEW

Please note that the only program that has functionally changed
from version 2.04e to 2.04g is PKZIP.EXE, PKUNZIP.EXE and PKCFG.EXE.
The other programs in this release have been changed to read version
2.04g for consistency.  However, no functional changes have been made
to them.


The following changes have been made in version 2.04g of PKZIP.EXE
from version 2.04e.

1)  PKZIP's Quick format in an over-zealous effort to leave bad
    sectors marked as bad, could in some instances leave unallocated
    sectors (orphaned clusters) on the diskette.  This has been fixed.


The following changes have been made in version 2.04g of PKZIP.EXE
from version 2.04c/2.04e.

1)  Using the BACKUP= option in the PKZIP.CFG file would automatically
    turn on the SPAN option and cause PKZIP to generate a E27 or E28
    error, or display the help screen when creating a .ZIP file
    on non-removable media.  This has been corrected.

2)  When Norton Utilities creates a volume label on a diskette, it 
    stores trailing nulls rather than trailing spaces after the volume 
    name, as DOS does (and expects).  A volume label created by NU can 
    not be changed by even the LABEL command in DOS.  PKZIP uses the 
    volume label when creating multi-disk .ZIP files, and could not 
    change any volume label created by NU.  PKZIP has been modified to 
    be able to deal with and change volume labels created by NU.  
    PKUNZIP -$ was also unable to restore volume labels over NU created 
    labels.  PKUNZIP has been modified to deal with NU volume labels as 
    well.


The following changes have been made in version 2.04e of
PKZIP/PKUNZIP from version 2.04c.

1) DPMI.

     The DPMI support in PKZIP/PKUNZIP has been changed to work
     around bugs and anomolies with the following DPMI drivers or
     environments.  PKWARE would like to thank Quarterdeck Office
     Systems and Qualitas, Inc. for their technical assistance
     regarding DPMI.

    a) PC-KWIK

      According to PC-KWIK corporation's document, 'PC-KWIK
      Technical Issues "Summer '92"':

        PC-KWIK is unable to recognize memory requests from programs
        using VCPI or DPMI protocols ... For programs [that use VCPI
        or DPMI] it is necessary to reduce the size of the cache and
        disable lending.

      PC-KWIK has a lending feature that allows memory to be loaned
      from the cache memory to applications.  However, PC-KWIK is
      not aware of any memory allocated or used by DPMI, and will
      loan this memory as well, possibly causing corruption of the
      DPMI driver and usually resulting in a system crash or reboot.

      PKWARE has tested several versions of SUPERPCK, through version
      5.01 and running PKZIP (as well as several commercial programs
      that use DPMI) consistently causes a system reboot or some kind
      of protected mode error such as a page fault.  PC-KWIK Corporation
      is aware of this problem, and is trying to correct it.

      In other words, when using PC-KWIK with any program that uses DPMI,
      including PKZIP and PKUNZIP, you should either make sure that you
      have enough memory in your computer so that lending will not occur,
      reduce the size of your cache, or disable PC-KWIK's lending.

      Therefore, PKZIP/PKUNZIP detect for the presence of PC-KWIK
      and default DPMI to DISABLE when PC-KWIK is installed.  This
      can be overidden by specifying -)+ on the PKZIP or PKUNZIP
      command line, or by placing DPMI=ENABLE in your PKZIP.CFG for
      PKZIP or setting the environment variable PKUNZIP=-)+ for PKUNZIP.

  b) QDPMI 1.00

      If a program tries to use DPMI and EMS memory with QDPMI 1.00,
      QDPMI would become unstable or crash.  PKZIP/PKUNZIP now
      check for the presence of QDPMI 1.00 and if PKZIP/PKUNZIP
      are using EMS memory, they do not attempt to use DPMI at all.

  c) QDPMI 1.01

      When a program switches to protected mode, QDPMI does not
      'synchronize' the EMS page frame.  The result is that programs
      can not correctly read or write any data in the EMS page frame
      while in proteced mode.  PKZIP/PKUNZIP now check for the presence
      of QDPMI 1.01 and will use slower real-mode code for any
      manipulation of data in the EMS page frame rather than faster
      protected mode code.

  d) OS/2 2.0 DOS BOX

      The OS/2 2.0 DOS box does not allow programs to allocate the
      'DPMI private data area' in an UMB.  Doing so causes a system
      violation error.  PKZIP/PKUNZIP now check to see if they are
      running in the OS/2 2.0 DOS box and will not allocate the DPMI
      private data area in an UMB.  (This is actually kind of a shame,
      as the OS/2 DOS box (unlike the Windows DOS box) provides UMB
      memory to DOS applications.  It should be able to allow programs
      to store the DPMI data area in these UMB's.)

  e) Windows 3.0 DOS BOX

      The DPMI support in the Windows 3.0 DOS box does not always
      seem to work correctly.  Therefore, PKZIP/PKUNZIP detect if
      they are running in the Windows 3.0 DOS box and will not support
      DPMI in this environment.

  f) Windows 3.1 DOS BOX

      The way PKZIP/PKUNZIP allocates the DPMI save/restore state
      buffer has been changed to be more compatible with Windows 3.1.

2)  The Norton AntiVirus program FALSELY reported that PKZIPFIX and
    PKUNZIP contained the Maltese Ameoba virus.  The software DID
    NOT contain this virus.  All files in this release have been
    modified so as to not trigger any FALSE virus reports by the
    Norton AntiVirus program.

3)  QEMM versions 5.1x would corrupt the high word of the 32-bit
    registers on an 80386 or 80486 CPU.  PKZIP/PKUNZIP check for
    this condition, and will not use 32-bit instructions if QEMM
    version 5.1x is present.

4)  Apparently some peer-to-peer networks such as Novell Netware Lite
    and others do not support canonical or fully specified filename.
    PKZIP now uses noncanonical filenames when specifying temporary
    filenames on a network drive to avoid this problem.

5)  PKZIP would erroneously report "E28 Destination is same as temp
    directory" when creating a new .zip file on drive A:.  This has
    been fixed.

6)  The keywords on/enable and off/disable are now synonymous when
    used in the PKZIP configuration file.

7)  Using EMS= options in the PKZIP configuration file would enable
    or disable both EMS and XMS usage.  The XMS= option had no effect.
    This has been corrected.

8)  The Quick format option in PKZIP would zero out the existing FAT
    on the disk (by design).  However, if the disk had any bad
    sectors on it (in which case, it isn't a good idea to use that
    disk as a backup disk anyway...) they would now be marked as
    good.  By popular demand, PKZIP now reads the existing FAT and
    leaves any bad sectors marked as bad.  This however, makes the
    'Quick' format function about twice as slow as it was (although
    still much faster than an unconditional format).  In most cases
    however, unless there are several subdirectories on the diskette,
    the -&w (wipe) option is faster than the -&f (format) option when
    backing up to pre-formatted diskettes.

9)  Under some cirumstances, PKZIP could possibly store the last
    file in a multi-disk backup set incorrectly.  This has been
    corrected.

10) The volume label option in PKZIP would not work.  This has been
    fixed.

11) PKZIP/PKUNZIP now searches for a PKNOFASTCHAR variable in the
    DOS environment.  If this variable is present, PKZIP/PKUNZIP
    will use the slower DOS 1.x/2.x character output functions
    rather than the 'DOS Fast Character Output' function.  This is
    provided for compatability with some TSR's, BBS Doors and mail
    readers etc., that redirect or capture the output of programs and
    do not support the DOS Fast Character Output function.

12) PKZIP will now accept either MAXIMUM or MAXIMAL in the
    configuration file.

13) Some people have requested that the -& backup option support the
    DOS verify function.  Specifying -&v on the PKZIP command line
    or BACKUP=VERIFY in the PKZIP.CFG file will turn on the DOS
    verify flag when writing to the backup disk(s).  This makes
    PKZIP run slower, but ensures better integrity of each diskette.

14) Using the -m option with -rp in PKZIP will delete any empty
    subdirectories that have been saved in the .ZIP file after all
    the files have been moved into the .ZIP file.  Some people have
    requested a way to have PKZIP leave these empty subdirectories
    behind.  This can be accomplished by using -m- on the PKZIP
    command line.

15) It appears that some versions of NoGate's PAK program would
    place incorrect information in the .ZIP file directories that it
    created.  Specifically, the disk number information for where
    files, the central directory, and the central end directory
    started is inconsistent, causing PKUNZIP to think it was
    extracting a multi-disk .ZIP file when it really wasn't.
    PKUNZIP now checks for this condition, and ignores this
    erroneous information.

16) PKZIP now ignores any ZIPDATE= or -o or -k options when creating
    multi-disk .ZIP files, rather than displaying the help screens.

17) On some 80386 machines running PKZIP could leave allocated UMB's
    behind.  This has been corrected.

18) In some circumstances, running PKZIP with EMS memory and very low
    free conventional memory could cause corruption of the .ZIP file.
    This has been corrected.

19) When PKZIP prompts for an encryption password, it will now ask the
    user to enter the password twice for verification.

20) PKZIP/PKUNZIP would not work under DOS 2.x.  This is because
    DOS 2.x crashes on many int 2Fh installation check calls for
    EMS/XMS drivers etc.  These calls work properly under DOS 3.0
    or above.  Therefore, PKZIP/PKUNZIP detect for the presence
    of DOS 2.x, and will not support any of the advanced features
    including 32-bit instructions, EMS memory, XMS memory, DPMI
    support and Netware usage.

21) PKSFX could in some instances erroneously report failed AV's or
    garble any AVEXTRA text present.  This has been fixed.

22) Using PKZIP with the -o option or ZIPDATE=LATEST in the configuration
    file would set the date of the .ZIP file to the latest dated file
    or directory.  Directory dates are now ignored in this version.
```
