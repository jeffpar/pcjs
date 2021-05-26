---
layout: post
title: "More Old CD-ROMs and Gotchas"
date: 2019-06-01 10:00:00
permalink: /blog/2019/06/01/
preview: https://cds005.pcjs.org/microsoft/reference/Bookshelf-Windows-1991/BSWIN91.png
---

Before acquiring a copy of the 1988 [Microsoft Programmer's Library 1.0 CD-ROM](/blog/2019/05/31/),
the oldest Microsoft CD-ROM I owned was the 1991 edition of Bookshelf for Windows.

![Bookshelf for Windows 1991 - Case](https://cds005.pcjs.org/microsoft/reference/Bookshelf-Windows-1991/BSWIN91-Case.png)

I recently decided to add [CD-ROM support](/blog/2019/05/31/#introducing-pcjs-cd-rom-support) to PCjs,
starting with the venerable IBM PC AT.  Early IBM PC-compatible CD-ROM drives would come with their own ISA
controller boards, but I had no desire to emulate the hardware of old third-party controllers that probably
also had very little existing documentation.  The advantage of starting with the IBM PC AT is that
its hard disk controller was the basis for future ATA and ATAPI controllers, so adapting the AT's controller
to support ATAPI commands was the simplest way to [connect a simulated CD-ROM drive to a PCjs machine](/machines/pcx86/ibm/5170/vga/cdrom/).

### Bookshelf for Windows (1991)

Once I had CD-ROM support limping along, I decided to try **Bookshelf for Windows** on Windows 3.1.

![Bookshelf for Windows 1991](https://cds005.pcjs.org/microsoft/reference/Bookshelf-Windows-1991/BSWIN91.png)

And initially, things looked very promising:

![Bookshelf for Windows 1991 - Install 1 of 4](/blog/images/BSWIN31-Install1of4.png)

![Bookshelf for Windows 1991 - Install 2 of 4](/blog/images/BSWIN31-Install2of4.png)

![Bookshelf for Windows 1991 - Install 4 of 4](/blog/images/BSWIN31-Install4of4.png)

My first reaction to the "Fatal Error": what just went wrong with my new CD-ROM emulation?

Even though this was a 27-year-old error message, I decided to [Google It](https://www.google.com/search?q=CloseFontProgress+%22error+writing+to+the+system+setup+file%22),
and I got back exactly ONE hit... on my OWN website:

[![CloseFontProgress "error writing to the system setup file"](/blog/images/Google-Q101464.png)](https://jeffpar.github.io/kbarchive/kb/101/Q101464/)

The good news: this was a known problem (and fortunately not *my* problem).

The bad news: as I [lamented](/blog/2017/10/13/) a couple years ago, Microsoft is *still* a crappy archivist.
I suppose I should be happy that early KnowledgeBase articles are now the tiniest bit easier to find, thanks to
an archive that I helped create, but I would still rather see Microsoft take some responsibility for this.

So, back to the story.  The KB article provided three work-arounds, so I opted #2, which involved opening SETUP.INF
in WRITE.EXE, searching for large comment blocks, and deleting them.  After that, Bookshelf for Windows setup
was successful.

![Bookshelf for Windows 1991 - Install Done](/blog/images/BSWIN31-InstallDone.png)

You can give it a try yourself in this [IBM PC AT with ATAPI CD-ROM Support](/machines/pcx86/ibm/5170/vga/cdrom/).
I did not preinstall **Bookshelf for Windows** in that machine, because I wouldn't want to deprive you
of the authentic experience of installing buggy software from 1992 and choosing whichever "Fatal Error"
work-around works best for you.

### Pandora's Box (1999)

In other recent, coincidental, and entirely unrelated news, a friend was trying to create a preservation
copy of a 20-year-old Microsoft CD-ROM entertainment title called **Pandora's Box**.

![Pandora's Box](https://cds001.pcjs.org/microsoft/games/Pandoras-Box/Pandoras-Box.png)

There were no problems cloning the CD-ROM, and the software would install fine from the clone, but when it was run,
it would either crash or display "Please insert the correct CD-ROM....", depending on the machine and operating system
being used.

![Pandora's Box - Unpatched](https://cds001.pcjs.org/microsoft/games/Pandoras-Box/WindowsXP-PandorasBox-ISO-Unpatched.png)

This led one to believe there was something wrong with the copy -- and there was, because it turns out
that **Pandora's Box** was one of many software titles from the late 1990s that used a third-party copy-protection
technology called "SafeDisc".  Suffice to say that if the game's EXE file was accompanied by an ICD file,
along with other files such as CLOKSPL.EXE, then it's a safe bet the CD-ROM was protected by SafeDisc.

In the case of **Pandora's Box**, however, the plot thickens.  It's possible that this copy-protection feature
created problems for users with certain processors and/or operating systems, because in early 2000, less than
one year after the software's release, Microsoft issued a patch, along with the following notes on their
website:

> NEW! Pandora's Box Update
>
> Patch Set 1.0
>
> Important Note: This patch is used for English, French and Japanese versions of Pandora's Box.
> 
> These self­-extracting, self­-installing files install 2 modified files, PANDORA.EXE and LANGENU.DLL.
> This patch fixes a bug specific to computers with new Pentium III processors, which produce the error
> "Unable to create DirectDraw surface. Make sure that DirectX is installed, and then try again" upon startup.
> If you do not have a computer with a Pentium III processor and do not recieve [sic] this error upon startup,
> then there is no need to patch your existing setup.

One important side-effect of the patch: the copy-protection was removed.  Whether that's because the
copy-protection itself was responsible in some way for the bug, or because the copy-protection simply
made a conventional patch too difficult to perform, is unclear.  If the latter, then the makers of
"SafeDisc" (or Microsoft) must not have thought through the implications of encrypting and renaming the
main executable to PANDORA.ICD and calling the SafeDisc loader PANDORA.EXE.  It appears that Microsoft's
"patch" simply replaced the SafeDisc loader with an updated and unencrypted PANDORA.EXE.

### The Art of Software Preservation

**Pandora's Box** illustrates more than just the obvious principle that "copy-protected software is hard to
copy", to which I've already [alluded](/blog/2019/05/05/#the-software-preservation-quandary).

More than that, it shows that there's more to preservation than simply figuring out how to "copy the bits".
There is also a history associated with each piece of software that needs to be researched, captured, and
preserved as well.  And that history may span a variety of obsolete media, including print media (magazine
articles, advertisements, newsletters, etc) and online media (product pages and support articles that have
been deleted, FTP servers that have been decommissioned, etc).

The worst-case scenario is software that requires a live server to authenticate users or provide some sort
of virtual environment -- a scenario that has tended to get more attention and hand-wringing lately, with the
recent rise and fall of various Internet-enabled games.

In the case of **Pandora's Box**, the [CD insert](https://cds001.pcjs.org/microsoft/games/Pandoras-Box/Pandoras-Box.pdf)
said to visit [http://www.microsoft.com/games/pandorasbox](http://www.microsoft.com/games/pandorasbox).

That's a dead end now, but at least it's a starting point.  The problem I ran into with **Bookshelf
for Windows** is that it predated websites, and even if websites had existed at the time, it's
unlikely that a "Bookshelf for Windows" web page would have mentioned any relevant KB articles.
Companies don't like mixing Product Support with Marketing, because that might make you think their
software is less than perfect.

Thanks to the Internet Archive's "Wayback Machine", all hope is not lost when it comes to old websites,
and it's still possible to access the web pages for [Pandora's Box](https://web.archive.org/web/2018*/http://www.microsoft.com/games/pandorasbox),
including the [Downloads](https://web.archive.org/web/20000815060252/http://www.microsoft.com/games/pandorasbox/downloads.htm) page,
where the previously mentioned patch is described.

Unfortunately, the patch is located on Microsoft's decommissioned FTP server, which the Internet Archive
apparently didn't snapshot.  But other people did, and some of them even [uploaded](https://archive.org/details/ftp.microsoft.com)
their snapshots to the Internet Archive.  So with a bit more work, it's possible to eventually locate and
download the patch for **Pandora's Box**, eliminate the copy protection, and preserve another fine piece of software
for many puzzle-loving generations to come.

NOTE: **Pandora's Box** does not run in any PCjs machines at this time.  The machine running [Windows 95](/software/pcx86/sys/windows/win95/4.00.950/)
is the best candidate, but PCjs ATAPI CD-ROM support isn't quite up to the job yet.
