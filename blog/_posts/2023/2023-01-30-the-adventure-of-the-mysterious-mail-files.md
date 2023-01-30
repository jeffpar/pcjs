---
layout: post
title: "The Adventure of the Mysterious Mail Files"
date: 2023-01-30 12:00:00
permalink: /blog/2023/01/30/
preview: /blog/images/mmf-adventure3.jpg
---

I've recently been sifting through many boxes of loose diskettes.  Any disks with personal information are
being copied and then destroyed, while any "commercial" disks are also being copied and then put in a box for
resale or donation.  Hopefully later this year, my house will finally be free of ancient disk clutter.

Anyway, last week, I came across a few 10-diskette boxes containing disks labelled "MAIL1.1", "MAIL1.2", etc.
Not very illuminating.  So I made copies of them all and then looked at their contents; here's what was on the
first couple of disks:

     Volume in drive A has no label
     Directory of A:\

    MAIL1    1     1442584   1-27-94  11:58a
            1 file(s)    1442584 bytes
                           14848 bytes free

     Volume in drive A has no label
     Directory of A:\

    MAIL1    2     1442584   1-27-94  11:58a
            1 file(s)    1442584 bytes
                           14848 bytes free

and except for one string near the beginning of the first file:

    00000090  45 6e 67 6c 69 73 68 20  28 41 6d 65 72 69 63 61  |English (America|
    000000a0  6e 29 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |n)..............|

the rest of the files contained no human-readable text.

There were 18 diskettes altogether, and fortunately, there was a clue on disk #14:

     Volume in drive A has no label
     Directory of A:\

    MAIL2    A      265513   1-27-94  12:11p
    MAIL3    MMF    408321  10-18-93   5:34p
            2 file(s)     673834 bytes
                          783360 bytes free

At last it was clear that these files were pieces of Microsoft Mail Files or MMFs, and while MAIL3.MMF had
been small enough to fit on a single diskette, all the other MMF files had been chopped up into diskette-sized pieces,
using some sort of "splitting" utility that I had probably written specifically to make my own email backups.

It was easy enough to recombine the pieces and recreate four presumably complete MMF files, but now the question was how to read them.

My first thought was **OUTLOOK**, since I already had a copy of it on my MacBook; however, I couldn't find any options
for importing MMF files.  I gradually came to the conclusion that the simplest solution would be to use the Inbox (Windows
Messaging) application that came with Windows 95, which would allow me to create a PST file, import the MMF files, and
then I could move the PST file to my MacBook and open it with **OUTLOOK**.

Well, that may have seemed like the simplest solution, but it was anything but simple....

### Windows 95

I had upgraded to an M1 (Apple Silicon) MacBook a few months ago, so it turned out that getting Windows 95 to run in a
virtual machine on my MacBook was harder than I'd expected.  In "the old days", with an Intel MacBook, I could (and did)
run Windows 95 in a VM using VMware Fusion, Parallels, and VirtualBox.  However, with an M1 MacBook, none of those were
options anymore, because they all require an Intel processor to "virtualize" an x86 environment; they could not actually
"emulate" one.

> UPDATE: VirtualBox may eventually become a viable solution, because Oracle recently released a V7 beta that supports
x86 emulation on Apple Silicon; unfortunately, the beta crashes a lot, so I'm holding off until it becomes more stable.

The only more-or-less stable "emulation" option appeared to be [QEMU](https://www.qemu.org), and I chose the version of QEMU bundled with [UTM](https://getutm.app),
since UTM includes some nice UI enhancements that make it easier to manage QEMU-based VMs.

Using QEMU, Windows 95 and the "Inbox" (Windows Messaging) application were easy enough to setup, and Windows Messaging
seemed willing to import my MMF files...

![MMF Adventure](/blog/images/mmf-adventure1.jpg)

But anticipation quickly turned to disappointment when it prompted me for a password. I had vague recollections of some passwords that I *might* have used over 30 years ago, but nothing I tried worked.

I knew that Microsoft's post-MMF storage solution -- PST files -- had had weak password protection, because several years
ago, I had unearthed some password-protected PST files, and it hadn't been hard to find a PST tool online that could
recreate working passwords.  The tool seemed unable to recover the *original* password, but it could apparently generate
any number of alternate strings that worked just as well as the original password.

Unfortunately, a quick online search for a similar MMF password recovery tool turned up absolutely nothing.  In fact, I could
barely find any information *at all* about MMF files, let alone how to recover a lost MMF password.  I did find some references
to an `ADMIN.EXE` tool as part of [Microsoft Mail for PC Networks](https://jeffpar.github.io/kbarchive/kb/118/Q118927/) that
*might* have offered some recovery options, but did I really want to set up my own Microsoft Mail "postoffice" server to find
out?  I didn't think so.

And there was a potentially shorter path to success.  Every time the "Import" command displayed the following MessageBox:

![MMF Adventure](/blog/images/mmf-adventure2.jpg)

it clearly had *some* idea (if it was comparing password hashes), and possibly even an *exact* idea (if it was comparing
plain-text passwords), of what the original password was.  All I needed to do was to fire up a debugger and find the exact
spot in memory where that check was being performed.

The game was afoot!

## Debugging Windows 95

I still find that the easiest way to debug software on Windows 95 is with `WDEB386.EXE`, the beloved kernel debugger that
I and my co-workers used to debug thousands of issues during the development of Windows 95.  And I still had a small collection
of symbol (SYM) files to make debugging easier, including `KERNEL32.SYM`, `USER32.SYM`, and `GDI32.SYM`.

So the debugging process seemed simple enough: set breakpoints on a few Win32 Dialog Box APIs, like *DialogBoxParamA*, then
bring up the MMF password dialog, make a note of the app's "dialog procedure" address, and then watch what happens when the
"OK" button is pressed.

The app immediately called *GetDlgItemTextA* (no big surprise) to get the string I had just typed.  At that point, debugging
should have been a simple exercise of using "data" breakpoints to watch the code read that string (as well as any copies it
made of the string), catching the code comparing the string to something else, and then seeing what that "something else" was.

And that's when QEMU let me down.  For whatever reason, whenever the kernel debugger's data read breakpoint *should* have fired,
QEMU simply hung.

So I gave up trying to do everything on my M1 MacBook, and fired up an old Windows 95 VM using VMware on an Intel Mac
Mini, and repeated the entire process.  And then VMware let me down.  It seemed that data breakpoints simply did not work in
VMware; the kernel debugger (`WDEB386.EXE`) could happily *set* the breakpoints, but they would never fire.

So, OK, I had v6.1 of VirtualBox on the Intel Mac Mini, so I decided to use that instead.  Well, that was even worse: every
time I tried to access a symbol, like *GetDlgItemTextA*, the kernel debugger would crash:

    1##u getdlgitemtexta
    Trap 6 - Invalid Opcode Exception - In Debugger
    eax=b0000000 ebx=c13a6f9b ecx=000000fe edx=00340104 esi=00005fe6 edi=c1596d9d
    eip=00000530 esp=00006a0a ebp=c13c4303 iopl=3 RF -- -- nv up di NG nz AC PE nc
    cs=0058 ss=0060 ds=0060 es=0060 fs=0030 gs=0030  cr2=7fe95000  cr3=004eb000
    0058:00000530 ffe8           jmp     eax

This was getting frustrating.  In the end, I resorted to using *two* VMs side-by-side: VirtualBox with its built-in debugger
to debug one machine, and QEMU running the Windows 95 kernel debugger in another machine.  I would look up symbols in the QEMU
machine, and then use the corresponding linear addresses in the VirtualBox machine.

### What I Finally Learned

The Windows Messaging application, `EXCHNG32.EXE`, uses a DLL called the "MMF Migration Library" (`MMFMIG32.DLL`)
to handle all things MMF-related.  Turning on the Windows 95 kernel debugger's segment load notifications revealed where
the DLL was loaded:

    MMFMIG32!MMFMIG32!undefined code(0001)=%7f801000 len 00031800
    MMFMIG32!MMFMIG32!undefined data(0002)=%7f833000 len 00007600
    MMFMIG32!MMFMIG32!undefined data(0003)=%7f83b000 len 00001600
    MMFMIG32!MMFMIG32!undefined data(0004)=%7f83d000 len 00000200
    MMFMIG32!MMFMIG32!undefined data(0005)=%7f83e000 len 00003800
    MMFMIG32!MMFMIG32!undefined data(0006)=%7f842000 len 00003400

I also created a disassembled copy of the [MMF Migration Library](/software/pcx86/sys/windows/win95/4.00.950B/WINDOWS/SYSTEM/MMFMIG32.ASM)
to make debugging a bit easier.

After numerous false starts, I eventually got the process down to a few steps.  First, I set an INT3 breakpoint
on GetDlgItemTextA ("bp %bff61657"), clicked "OK" in the password dialog, and when the breakpoint was hit, set a new
INT3 breakpoint in `MMFMIG32.DLL`, inside 7f810181, at 7f8101f3:

	eax=7f8367e4 ebx=7f8367d8 ecx=00000008 edx=00000008 esi=00000000 edi=00000008
	eip=7f8101f3 esp=0063f260 ebp=0063f270 iopl=0 rf nv up ei pl nz na pe cy
	cs=0137 ds=013f es=013f fs=1a8f gs=0000 ss=013f               eflags=00010203
	0137:7f8101f3 3b cf                   cmp ecx, edi

At this point, EDI was the length of the typed password, and ECX was the length of the stored password.  These lengths
include room for a terminator, so in the above example, since EDI contained 8, a 7-character password was expected. 
If the lengths didn't match, I would start over with a password guess that was the same length.

Ultimately, I finally found where the MMF's internal password was being extracted, so all I had to do was set a write
breakpoint on 7f8367e4 ("ba w 1 %7f8367e4").  It would stop on a "REP MOVSD" instruction, and after letting the instruction
finish, I dumped the memory at 7f8367e4.  For example, here's what the 7-character password for one of my MMF files looked
like:

    %000000007f8367e4: 56 45 52 54 49 47 4f 00-00 00 00 00 00 00 00 00  VERTIGO.........

The code that actually deciphers the password stored in the MMF is located at %7f8128e1, and one of the inputs is this data:

    %0000000000b84a8c: 9d f5 54 33 1d 9d 87 8e-18 f3 05 ed 2c 38 bf fb  ..T3........,8..
    %0000000000b84a9c: ad f3 2f 12 da 46 6c 24-76 79 d7 5f 67 2d aa 43  ../..Fl$vy._g-.C

which corresponds to this portion of the MMF:

    00004200  9d f5 54 33 1d 9d 87 8e  18 f3 05 ed 2c 38 bf fb  |..T3........,8..|
    00004210  ad f3 2f 12 da 46 6c 24  76 79 d7 5f 67 2d aa 43  |../..Fl$vy._g-.C|

However, the code is using multiple inputs, so you can't decipher the original password from that data alone.  In any case, once I had my passwords, I was done debugging.  If anyone else wants to dig into this more and write a general-purpose
MMF password recovery tool, there's absolutely no doubt it can be done, but I also have absolutely no interest in doing
that myself.

Besides, I have some old email to catch up on!

![MMF Adventure](/blog/images/mmf-adventure3.jpg)
