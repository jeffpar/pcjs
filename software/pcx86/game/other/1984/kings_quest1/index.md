---
layout: page
title: "King's Quest (1984)"
permalink: /software/pcx86/game/other/1984/kings_quest1/
machines:
  - id: ibm-5160-cga
    type: pcx86
    config: /configs/pcx86/machine/ibm/5160/cga/640kb/debugger/machine.xml
    autoMount:
      A:
        name: "King's Quest (Disk 1)"
      B:
        name: None
---

This version of King's Quest is also known as the "PC Booter" edition, because you use Disk 1 as a boot disk to start the machine,
which in turn starts the game.  And it is sometimes called "King's Quest I", but when it hit store shelves in 1984, it was simply called
"King's Quest".

NOTE: The PCjs disk image preserves the [Copy-Protection](#copy-protection) that the game used, and PCx86 successfully passes the game's
copy-protection test.  However, as you can see, there is a display issue we need to resolve before the game will be playable.  Once that's
fixed, we'll remove the PCjs Debugger from the page and update this notice.

{% include machine.html id="ibm-5160-cga" %}

### Copy-Protection

This version of King's Quest (from [archive.org](https://archive.org/details/kingsquestipcbooter)) seemed like a good copy-protection candidate
to examine, because it came with a complete set of Kryoflux files (along with an IMG file) for each of the game's two 360K diskettes.

The Kryoflux RAW files included 84 tracks of data for each diskette, even though these were 40-track diskettes, so I moved all the odd-numbered
tracks (and tracks >= 80) into a tmp directory, loaded the 40 remaining even-numbered tracks in the HxC Floppy Emulator, saved the data as a new
IMG file, and then compared the resulting IMG file to the one included with the download.

They were identical, up until offset 0x55800 (350208).  If we divide that by 4608 (the number of bytes in a normal 9-sector track),
we get 76, which corresponds to track 38 on side 0.  And when I examined the tracks visually in the HxC Floppy Emulator, using "Disk view mode",
I could see that track 38 contained 10 256-byte sectors; in addition, the first sector ID was 1, whereas all the other 9 sector IDs were 0.

Next, just as I did for [Microsoft Adventure](/blog/2019/06/13/), I wanted to create a PSI ("PCE Sector Image") representation of the disk,
since I already have some tools that understand PSI files.

To quickly recap, here are the basic steps:

 1. From the Kryoflux RAW files, create a PFI ("PCE Flux Image") file
 2. Next, create a PRI ("PCE Raw Image") file, with the flux reversal pulses converted to bits
 3. From the PRI file, create a PSI ("PCE Sector Image") file
 4. From the PSI file, create a JSON-encoded disk image file, using the PCjs `diskdump` utility

which translates to these commands:

    pfi KINGS_QUEST1-DISK1.00.0.raw disk1.pfi
    pfi disk1.pfi -p double-step -r 600000 -p decode pri disk1.pri
    pri disk1.pri -c 40-99 -p delete disk1.pri
    pri disk1.pri -p decode mfm disk1.psi
    diskdump --disk=disk1.psi --format=json --output=disk1.json

NOTE: Prior to running the above PCE utilities, I put all the odd-numbered Kryoflux RAW track files back with the even numbered ones,
to avoid any confusion.

Now, the first step (creating a PCE Flux Image file) is optional, because you can actually create a PRI file directly from the RAW files:

    pfi KINGS_QUEST1-DISK1.00.0.raw -p double-step -r 600000 -p decode pri disk1.pri

but it's nice to have the PCE flux representation of the diskette in a single PFI file as well, because then you can use the PFI utility
to display image information (`pfi disk1.pfi -p info`), track information (`pfi disk1.pfi -l`), and more (see `pfi --help`).

Similarly, the PSI utility has some handy display options (eg, `psi disk1.psi -L`).

### Debugging Notes

The following disk operations were observed after turning on the PCjs Debugger's FDC (Floppy Disk Controller) messages (`m fdc on`):

    FDC initialized for 4 drive(s)
    fdcNEC.doRead(drive=0,CHS=0:0:1,PBA=0,addr=0x7c00)
    fdcNEC.doRead(drive=0,CHS=0:0:2,PBA=1,addr=0x7dba)
    fdcNEC.doRead(drive=0,CHS=0:0:6,PBA=5,addr=0x7dba)
    fdcNEC.doRead(drive=0,CHS=0:1:4,PBA=12,addr=0x9f3f0)
    fdcNEC.doRead(drive=0,CHS=0:1:5,PBA=13,addr=0x9f5f0)
    fdcNEC.doRead(drive=0,CHS=0:1:6,PBA=14,addr=0x9f7f0)
    fdcNEC.doRead(drive=0,CHS=0:0:2,PBA=1,addr=0x9f9ba)
    fdcNEC.doRead(drive=0,CHS=0:0:6,PBA=5,addr=0x9fdba)
    fdcNEC.doRead(drive=0,CHS=0:1:8,PBA=16,addr=0x600)
    fdcNEC.doRead(drive=0,CHS=1:0:1,PBA=18,addr=0xa00)
    fdcNEC.doRead(drive=0,CHS=1:1:1,PBA=27,addr=0x1c00)
    fdcNEC.doRead(drive=0,CHS=2:0:1,PBA=36,addr=0x2e00)
    fdcNEC.doRead(drive=0,CHS=2:1:1,PBA=45,addr=0x4000)
    fdcNEC.doRead(drive=0,CHS=3:0:1,PBA=54,addr=0x5200)
    fdcNEC.doRead(drive=0,CHS=3:1:1,PBA=63,addr=0x6400)
    fdcNEC.doRead(drive=0,CHS=4:0:1,PBA=72,addr=0x7600)
    fdcNEC.doRead(drive=0,CHS=0:1:2,PBA=10,addr=0x693)
    fdcNEC.doRead(drive=0,CHS=38:0:0,PBA=683,addr=0xf000)

That last read occurs when the game executes this code:

    &0060:4D28 33D2             XOR      DX,DX
    &0060:4D2A 32C9             XOR      CL,CL
    &0060:4D2C 8A2E4C1E         MOV      CH,[1E4C]
    &0060:4D30 8B1E2F10         MOV      BX,[102F]
    &0060:4D34 8EC3             MOV      ES,BX
    &0060:4D36 33DB             XOR      BX,BX
    &0060:4D38 C6064B1E03       MOV      [1E4B],03
    &0060:4D3D B001             MOV      AL,01
    &0060:4D3F B402             MOV      AH,02
    &0060:4D41 CD13             INT      13

which requests sector ID 0 from track 38.  But, as noted above, there *nine* sectors on that track with a sector ID of 0.
And originally, PCx86's simplistic seek() logic would always return the *first* sector with a matching ID on the desired track.
However, as the **Nerdly Pleasures** blog pointed out, this copy-protection scheme relies on the controller returning whichever
sector happened to be next, and depending on timing, that will *not* always be the first such sector on the track.

I resolved this problem by having the FDC drive object maintain a cached reference to the last sector read (or written) on that drive,
which is then passed to the Disk component's seek() function.  If the previous sector matches the next *candidate* sector, then
the rest of the track is checked for any *other* candidate sectors with the same sector ID, and if such a sector is found, that sector
is selected instead.

That appears to have resolved the copy-protection issue.  The next hurdle is now adding support for the graphics mode the game uses.

### Online References

  - [Kryoflux Forum](https://forum.kryoflux.com/viewtopic.php?t=765)
  - [Vintage Computer Forum](http://www.vcfed.org/forum/archive/index.php/t-40843.html)
  - [Nerdly Pleasures](http://nerdlypleasures.blogspot.com/2015/11/ibm-pc-floppy-disks-deeper-look-at-disk.html)

![King's Quest Artwork]({{ site.software.gamedisks.server }}/pcx86/game/other/1984/kings_quest1/KINGS_QUEST1.jpg)
