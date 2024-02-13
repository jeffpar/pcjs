---
layout: post
title: Building DOS-Compatible Hard Disks
date: 2023-08-10 00:00:00
permalink: /blog/2023/08/10/
---

Last month, I [wrote](/blog/2023/07/15/) about a new tool I've been working on. [pc.js](/tools/pc/) is a stripped-down version of the web-based PCjs emulator that runs console-based DOS programs from the command-line.  Since then, I've added a few more features *and* improved its ability to construct and load hard disk images.

Before I get into the changes, I want to re-emphasize something I mentioned last time:

> "Only text-based "standard I/O" DOS programs are usable in this environment...."

Does that restriction exclude lots of DOS software?  Absolutely.  Does that make the tool useless?  Absolutely not.  For starters, virtually all the utilities bundled with DOS itself run fine; with a few exceptions, like `BASIC` and `FDISK`, they are all console-based applications, and even `FDISK` is usable, as is `BASIC` as long as you stick to `INPUT` and `PRINT` statements as your "basic" means of input and output.  There are also quite a few DOS compilers, assemblers, linkers, debuggers, etc, that work well, too.  Those kinds of programs -- and only those -- are what this tool was designed for.  The ability to create and load DOS disk images, copy and delete files, compile and link programs, and perform other command-line tasks, all from the comfort of your *modern* command-line, is what `pc.js` is all about.

### Running Local Commands

Previously, I went over how `pc.js` can automatically build a hard disk image containing all the files and folders in your current directory and then execute a DOS command or program, such as `DIR`:

    $ pc.js dir

If you want a small collection of DOS files to start with, `pc.js` can fetch those for you:

    $ pc.js --commands
    pc.js v3.00
    Copyright © 2012-2024 Jeff Parsons <Jeff@pcjs.org>
    Options: --commands
    [Type help for list of commands, CTRL-C to terminate]
    >> fetch https://harddisks.pcjs.org/pcx86/10mb/MSDOS330-C400.json disks/msdos
    >> quit

This should create a folder named `disks/msdos` containing a variety of DOS utilities and programs, which you can then pass to `pc.js`, along with an initial DOS command:

    $ pc.js disks/msdos dir
    [Press CTRL-D to enter command mode]

     Volume in drive C is MSDOS      
     Directory of  C:\

    AUTOEXEC BAT      190   7-26-23  10:36a
    CONFIG   SYS       22   1-01-80  12:03a
    DOS          <DIR>      7-26-23  10:05a
    PUZZLED      <DIR>      7-26-23  10:05a
    TMP          <DIR>      1-01-80  12:13a
    TOOLS        <DIR>      7-26-23  10:05a
            6 File(s)   5820416 bytes free

Next, let's look at [pc.json5](https://github.com/jeffpar/pcjs/blob/master/tools/pc/pc.json5), the configuration file for `pc.js`:

```
{
  "defaults": {
    "type": "pcx86",
    "sys": "msdos",
    "ver": "3.30",
    "target": "10M",
    "maxfiles": 1024,
    "directory": ".",
    "machine": "compaq386.json",
    "state": "state386.json"
  },
  "apps": {
    "ls": {},
    "vi": {},
    ".edit": {
      "exec": "vi $*"
    }
  },
  "systems": {
    "msdos": {
      "vendor": "microsoft",
      "files": ["IO.SYS", "MSDOS.SYS", "COMMAND.COM"]
    },
    "pcdos": {
        "vendor": "ibm",
        "files": ["IBMBIO.COM", "IBMDOS.COM", "COMMAND.COM"]
    }
  }
}                                                                                                                                                           
```

The `apps` section defines a set of local commands you can invoke from the DOS prompt.  One of those commands is `vi`.  Let's try it:

    C:\>vi AUTOEXEC.BAT

This runs a hidden `VI.COM` DOS program that silently shuts down the `pc.js` virtual machine, executes `vi` with the name of the `AUTOEXEC.BAT` file in your local directory, and when you save and quit `vi`, the virtual machine's hard disk will be automatically rebuilt with any changes found in your local directory, the virtual machine will be restarted, and you should be back at the `C:\>` prompt within a few seconds.

You can add or remove programs from the `apps` section, and the next time you run `pc.js`, it will automatically create matching hidden `.COM` files in the root of the virtual hard disk.  Make sure you stick to app names that are 8 characters or less; you can use the `exec` property to map a short filename to a longer or different local filename (see the `edit` example).

Aside from the commands listed in the `apps` section, two other programs are always included on the virtual hard disk: `LOAD.COM`, which makes it easy to load PCjs diskette images into drive A: or B:, and `QUIT.COM`, which shuts down the machine and returns to your local prompt (alternatively, you can press `CTRL-D` and type `quit`).

See [Loading Diskettes from the DOS Prompt](/tools/pc/#loading-diskettes-from-the-dos-prompt) for more information and examples of the `LOAD` command (the internal `LOAD` command operates the same as the external `LOAD.COM` program).

### Building Hard Disk Images

You may have noticed the `defaults` section in the [pc.json5](https://github.com/jeffpar/pcjs/blob/master/tools/pc/pc.json5) configuration file:

```
  "defaults": {
    "type": "pcx86",
    "sys": "msdos",
    "ver": "3.30",
    "target": "10M",
    "maxfiles": 1024,
    "directory": ".",
    "machine": "compaq386.json",
    "state": "state386.json"
  }
```

These settings control what happens whenever `pc.js` builds (or rebuilds) a hard disk image from a specified folder.  First and foremost, `pc.js` wants to create a *bootable* hard disk image, so it fetches the corresponding system diskette image from PCjs (eg, [MSDOS330-DISK1](https://diskettes.pcjs.org/pcx86/sys/dos/microsoft/3.30/MSDOS330-DISK1.json)), extracts the boot sector and system files (ie, `IO.SYS` and `MSDOS.SYS`) from the diskette, and then based on `target`, `maxfiles`, and other settings, it builds a hard disk image, which is stored in the PCjs `/tools/pc/disks` folder by default.

To change those defaults, you can either edit `pc.json5` or pass command-line overrides; for example:

    $ cd disks/msdos
    $ pc.js ibm5170 --target=20M --fat=12 --maxfiles=2048 dir

This changes the default machine from a `compaq386` to an `ibm5170`, sets the target drive size to 20Mb, forces the default FAT size to 12-bit (which would otherwise be 16-bit for a 20Mb disk), and allows up to 2048 local files to be included in the disk image.

You can also use `--drivetype` for even more control of the virtual hard disk image, but make sure the values you specify are valid for the machine being used.  By default, `pc.js` loads a [compaq386](/tools/pc/compaq386.json) machine, which also uses a saved machine state (`state386.json`) that bypasses the system startup tests and floppy drive checks, so that it can start booting from the virtual hard disk immediately.  But the COMPAQ DeskPro 386 has a drive type table in ROM that differs significantly from the drive types defined by the IBM PC AT, so if you're using an AT-specific drive type (eg, `--drivetype=AT:6`), then you should also specify an IBM 5170 machine configuration.  An [ibm5170.xml](/tools/pc/ibm5170.xml) file is included in the `pc.js` folder to make this easier:

    $ pc.js ibm5170 --drivetype=AT:6 dir

### Some Caveats Regarding Disk Formats

With great disk-creating power comes great responsibility -- or at least some basic knowledge of the limitations of various versions of DOS.  For example, if you want to build a disk that uses a 16-bit FAT (perhaps because you want a smaller cluster size), then you must *also* build it with PC DOS or MS-DOS 3.0 or higher, since version 2.x only understood disks using a 12-bit FAT.

You can override the `sys` and `ver` defaults with command-line options `--sys` (short for `--system`) and `--ver` (short for `--version`); eg:

    $ pc.js --sys=pcdos --ver=3.00 dir

Stick with DOS versions 2.x or 3.x for now.  Support for other versions hasn't been tested yet.

`pc.js` also tries to detect and fix certain broken combinations.  For example, when I first tried to construct a 10Mb disk image with a 16-bit FAT running MS-DOS 3.30:

    $ pc.js --target=10M --fat=16 dir

it failed to boot for several reasons.

The first problem was one described in this OS/2 Museum [blog post](http://www.os2museum.com/wp/hang-with-early-dos-boot-sector/) from 2011: DOS 2.x and 3.x boot sectors read `IO.SYS`/`IBMBIO.COM` a track at a time, and if the final sector(s) of `IO.SYS`/`IBMBIO.COM` are located near the beginning of a track instead of the end of that track, the boot sector might read too much data and trash itself.  This problem cropped up more often on disks with large tracks, but it could *definitely* also occur on disks with only 17 sectors/track.  And even though I was using MS-DOS 3.30, which contained a [fix](https://www.os2museum.com/wp/dos-boot-hang-update/), that fix was only present in the `FORMAT.COM` and `SYS.COM` utilities, *not* in the diskettes' actual boot sector--which is what `pc.js` relies on.

`pc.js` now works around this bug by carefully adjusting the start of the partition, pushing the final sectors of `IO.SYS` to the end of a track.

However, that wasn't the end of the story.  A second problem occurs when `IO.SYS`/`IBMBIO.COM` examines the Master Boot Record (MBR) and DOS boot sector.  DOS versions 3.10 and higher honor the MBR partition type *and* boot sector BPB values *only* if the OEM signature in the BPB contains the string "3.1" or greater.  Otherwise, they fall back to the assumption that *any* disk with only 32680 (0x7FA8) or fewer sectors *must* be using a 12-bit FAT, 4K clusters, 512 directory entries, etc.

So, `pc.js` now ensures that any disk using a 16-bit FAT also contains an "IBM  3.1" OEM signature in its boot sector.

Finally, while testing `pc.js` with COMPAQ DOS 3.31, I discovered yet another problem.  During testing, I forced the creation of a 16-bit FAT with 16K clusters:

    pc.js --fat:16:16384 --sys=compaq:3.31g --halt

and discovered that COMPAQ DOS 3.31 crashes in a manner reminiscent of the earlier boot sector bug.  In this case, after the boot sector carefully reads `IBMBIO.COM` one sector at a time (instead of one track a time), `IBMBIO.COM` then reads the entire FAT into memory (starting at 0:8000h), and then for reasons unknown, *re-reads* the final clusters of itself into memory again.

Note that `IBMBIO.COM` must fit completely between 0:0700h (its starting address) and 0:7B00h (where the system stack resides at this point).  This is a 29K region, and `IBMBIO.COM` fits comfortably within that region.  However, because the code that is *re-reading* `IBMBIO.COM` is reading whole clusters, when it reads the final cluster, it reads many more sectors than `IBMBIO.COM` actually uses, overrunning the region and trashing the stack.

The crash is ironic, because it's identical to the boot sector crash that was finally *fixed* in this same release, except that instead of trashing itself with an entire (partially used) track, the code trashes itself with an entire (partially used) cluster.
