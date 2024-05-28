## Fixes for Microsoft's MS-DOS repository

Microsoft's [MS-DOS](https://github.com/microsoft/MS-DOS) repository requires some modifications to build MS-DOS 4.0 successfully.  Those modifications include:

- Changes to **SELECT** source files (from [E. C. Masloch](https://hg.pushbx.org/ecm/msdos4/rev/63a05668c5f3))
- Changes to **SETENV.BAT** in the **v4.0/src** folder (to correct LIB and INCLUDE environment variables)

To download the sources and build them with pc.js, run **build.sh** in the v4.0 folder.  This will download a working copy of the repository in the `tools/pc/disks/MS-DOS` folder and then start pc.js, which will build a bootable hard disk image from the `v4.0` folder of the repository.

When you see the `C:\>` prompt, perform the following commands:

- `CD SRC`
- `SETENV`
- `NMAKE`

When **NMAKE** is finished, you can type `QUIT` to exit pc.js, at which point all modified files on the hard disk image will be automatically synchronized with your working copy of the repository.

If you want to change any source files and then re-run DOS build commands, you can make all your changes in your host environment and then restart pc.js in the `tools/pc/disks/MS-DOS/v4.0` folder:

    pc.js --maxfiles=3000 --system=msdos --version=3.30 --target=30M

Alternatively, you can choose to boot with `pcdos` instead of `msdos`, as well as any version of those operating systems that PCjs has archived.
