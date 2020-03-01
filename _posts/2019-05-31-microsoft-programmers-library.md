---
layout: post
title: "Microsoft Programmer's Library CD-ROM (1988)"
date: 2019-05-31 10:00:00
permalink: /blog/2019/05/31/
preview: https://cds002.pcjs.org/microsoft/tools/MSPL10/MSPL10.png
machines:
  - id: ibm5170
    type: pcx86
    config: /disks/pcx86/drives/cdrom/machine.xml
    cdromDrives: '[{name:"CD",type:0,path:"/disks-cds/cds002/microsoft/tools/MSPL10/cdrom"}]'
---

I recently obtained a copy of Microsoft Programmer's Library 1.0, a CD-ROM released in 1988.
Microsoft had released only a handful of products on CD-ROM at that point, the first being the
1987 edition of Microsoft Bookshelf, so this is one of Microsoft's oldest CD-ROMs.

From the November 29, 1988 issue of PC Magazine:

> [Programmer's Library Added to Microsoft's List of CD-ROM Titles](/blog/documents/Early_Microsoft_CD-ROMs.pdf)

> The promise of CD-ROM is fast access to huge volumes of information. Microsoft has taken
> another step toward the fulfillment of that promise with the release of *Microsoft Programmer's
> Library*, which packs more than 20,000 pages of reference material and sample code onto a single CD.

> *Programmer's Library* includes 48 books and technical manuals on Microsoft operating systems and
> languages. The information ranges from quick-reference help to more-in-depth material, grouped into
> nine categories: MS-OS/2, *Windows*, MS-DOS, C, BASIC, Macro Assembler, Pascal, FORTRAN, and hardware.
> Among the several books included are *Inside OS/2*, by Gordon Letwin, and *Programming Windows*, by
> PC Magazine contributing editor Charles Petzold. The library's 1,200 sample programs would require 20
> floppy disks to store them.

> All of the material in Programmer's Library can be accessed from inside a text editor or word processor
> and copied directly into programs or documents. When the library is popped up within a text editor or
> word processor, the word at the cursor can be automatically searched on. The library can also be run as
> a standalone program and is extensively cross-referenced.

> List Price: Microsoft Programmer's Library, $395 through December 1988.

> Requires: 640K RAM. CD-ROM disk drive with MS-DOS CD-ROM extensions. DOS 3.1 or later. Software not copy protected.

A few months later, Microsoft released **Stat Pack** ($125) and **Small Business Consultant** ($149),
which sound like real yawners by comparison.  According to the March 14, 1989 issue of PC Magazine:

> *Stat Pack* comprises the full text and tables of five federal government publications: *The Statistical
> Abstract of the United States 1987*, *Public Land Statistics*, *Survey of Current Business*, *Area Wage Surveys*,
> and *Agricultural Statistics*. Every table comes in both .WK1 and .XLS formats for easy importation into your
> spreadsheet program.

Interestingly, those old CD-ROMs can still be purchased on eBay for around $100 each, so maybe they've actually
held their value better than Microsoft Programmer's Library, but they certainly hold no interest for me.

![Microsoft Programmer's Library 1.0](https://cds002.pcjs.org/microsoft/tools/MSPL10/MSPL10.png)

Described on the back of the box as "[t]he single source for answers to most programming questions,"
the Microsoft Programmer's Library CD-ROM contained:

- *The MS-DOS Encyclopedia*
- MS OS/2 Software Development Kit manuals
- *Inside OS/2* by Gordon Letwin
- Microsoft C Optimizing Compiler version 5.1 manuals
- *Proficient C* by Augie Hansen
- Microsoft Windows version 2.0 Software Development Kit manuals
- *Programming Windows* by Charles Petzold
- Microsoft Macro Assembler version 5.1 manuals
- MS-DOS version 3.3 programmer's manual
- *Advanced MS-DOS Programming* by Ray Duncan
- *Programmer's Guide to PC and PS/2 Video Systems* by Richard Wilton
- Microsoft BASIC and Pascal Compiler manuals and Microsoft FORTRAN Optimizing Compiler manuals
- More than 1,000 sample programs

It's worth noting that this first version of the Programmer's Library does not appear to contain any
Microsoft KnowledgeBase articles.  Those may not have been added until the 1.3 release of the library in 1991.

### Introducing PCjs CD-ROM Support

Since CD-ROMs are more interesting if you can actually *use* them, I decided to add [CD-ROM support](/disks/pcx86/drives/cdrom/)
to PCjs.  To demonstrate, the IBM PC AT below has been configured with a secondary ATA controller that responds
to ATAPI commands, allowing the use of a virtual ATAPI CD-ROM drive.

When you click the list of removable disk drives, you should see a "CD" drive in the list, along with a handful
of disc (ISO) images that have been added to the online PCjs disk library.  Currently, those include:

- Bookshelf for Windows (1991)
- Programmer's Library 1.0 (1988)

The machine is using the same hard disk image created for [Microsoft Windows 3.1](/disks/pcx86/windows/3.10/).
The disk's CONFIG.SYS was modified to load a real-mode ATAPI CD-ROM driver, and its AUTOEXEC.BAT loads
the Microsoft CD-ROM Extensions (MSCDEX.EXE).

{% include machine.html id="ibm5170" %}

![Microsoft Programmer's Library 1.0 - Box Front](https://cds002.pcjs.org/microsoft/tools/MSPL10/MSPL10-Box-Front.png)

![Microsoft Programmer's Library 1.0 - Box Back](https://cds002.pcjs.org/microsoft/tools/MSPL10/MSPL10-Box-Back.png)

*[@jeffpar](https://jeffpar.com)*  
*May 31, 2019*
