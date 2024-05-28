## Fixes for Microsoft's MS-DOS repository

Microsoft's [MS-DOS](https://github.com/microsoft/MS-DOS) repository requires some modifications to build MS-DOS 4.0 successfully.  Those modifications include:

- Changes to **SELECT** source files (from [E. C. Masloch](https://hg.pushbx.org/ecm/msdos4/rev/63a05668c5f3))
- Changes to **SETENV.BAT** in the **v4.0/src** folder (to correct paths for LIB and INCLUDE environment variables)

To download the sources and build them with **pc.js**, run **build.sh** in the v4.0 folder.
