## Fixes for Microsoft's MS-DOS Repository

Microsoft's [MS-DOS](https://github.com/microsoft/MS-DOS) repository requires some modifications to build MS-DOS 4.0 successfully.  Those modifications include:

- Changes to **SELECT** source files (from [E. C. Masloch](https://hg.pushbx.org/ecm/msdos4/rev/63a05668c5f3))
- Changes to **SETENV.BAT** in the **v4.0/src** folder (to correct LIB and INCLUDE environment variables)
- Changes to **MAKEFILE** in the **DEV/XMAEM** and **MEMM/MEMM** folders (to correct minor build dependency mistakes)

To download the sources and build them with pc.js, run **build.sh** in the v4.0 folder inside this folder.  That script downloads a working copy of the repository into the `pcjs/tools/pc/disks/MS-DOS` folder, makes the above modifications (see the [fixes](v4.0/fixes) folder), and then starts pc.js, which builds a bootable hard disk image with the contents of the repository's `v4.0` folder.

pc.js is started with the following options:

    pc.js --system=msdos --version=3.30 --target=30M --normalize

to create a 30Mb hard disk that boots MS-DOS 3.30.  The pc.js `normalize` option automatically fixes known text files during the hard disk build process (ie, line-endings are converted to CR/LF and non-CP437 characters are translated/replaced as appropriate).

By default, pc.js uses a COMPAQ DeskPro 386 [configuration](../compaq386.json) running at 16Mhz.  For more information about pc.js, see this [blog post](https://www.pcjs.org/blog/2023/09/05/).

When you see the `C:\>` prompt, run the following commands:

- `CD SRC`
- `SETENV`
- `NMAKE`

When **NMAKE** is finished, you can type `QUIT` to exit pc.js, at which point all modified files in the hard disk image will be automatically synchronized with your working copy of the repository.

If you want to edit any files and re-run any DOS commands, you can make all changes in your host environment and then restart pc.js in the `pcjs/tools/pc/disks/MS-DOS/v4.0` folder, using the same options shown above.  If desired, you can also change the `system` or `version` options to boot any version of PC DOS or MS-DOS that PCjs has archived.

### Log of MS-DOS 4.0 Build

    Cloning into 'MS-DOS'...
    remote: Enumerating objects: 1859, done.
    remote: Counting objects: 100% (220/220), done.
    remote: Compressing objects: 100% (123/123), done.
    remote: Total 1859 (delta 104), reused 97 (delta 97), pack-reused 1639
    Receiving objects: 100% (1859/1859), 117.41 MiB | 13.18 MiB/s, done.
    Resolving deltas: 100% (288/288), done.
    pc.js v3.00
    Copyright © 2012-2025 Jeff Parsons <Jeff@pcjs.org>
    Options: --system=msdos --version=3.30 --target=30M --normalize
    [Press CTRL-D to enter command mode]
    C:\>cd src

    C:\SRC>setenv
    setting up system to build the MS-DOS 4.01 SOURCE BAK...
    C:\SRC>nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cd messages
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            attrib -R usa-ms.msg
            buildidx usa-ms.msg
    Index file and message file are of different levels.
    Message file and index file will be updated.
    Message file updated.
    Index file updated.
            attrib +R usa-ms.msg
            cd ..\mapper
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\inc -I..\dos chdir.asm,chdir.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos getver.asm,getver.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos f_first.asm,f_first.obj;
    find.inc 
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos set_tod.asm,set_tod.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos write.asm,write.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos beep.asm,beep.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos mkdir.asm,mkdir.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos exit.asm,exit.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos delete.asm,delete.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos getcntry.asm,getcntry.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos f_close.asm,f_close.obj;
    find.inc 
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos open.asm,open.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos read.asm,read.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos rmdir.asm,rmdir.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos qcurdir.asm,qcurdir.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos qcurdsk.asm,qcurdsk.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos qverify.asm,qverify.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos qfilemod.asm,qfilemod.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos sverify.asm,sverify.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos sfilemod.asm,sfilemod.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos lseek.asm,lseek.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos sfileinf.asm,sfileinf.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos close.asm,close.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos allocseg.asm,allocseg.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos freeseg.asm,freeseg.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos sel_disk.asm,sel_disk.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos qfsinfo.asm,qfsinfo.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos f_next.asm,f_next.obj;
    find.inc 
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos getmsg.asm,getmsg.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos get_tod.asm,get_tod.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos charin.asm,charin.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos flushbuf.asm,flushbuf.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos devconfg.asm,devconfg.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos reallseg.asm,reallseg.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos putmsg.asm,putmsg.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos execpgm.asm,execpgm.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos qhandtyp.asm,qhandtyp.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos cwait.asm,cwait.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos kbdgstat.asm,kbdgstat.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos kbdsstat.asm,kbdsstat.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos casemap.asm,casemap.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos dbcs.asm,dbcs.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos ioctl.asm,ioctl.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos sighand.asm,sighand.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos error.asm,error.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos setint24.asm,setint24.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos qfileinf.asm,qfileinf.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos scurpos.asm,scurpos.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos scrollup.asm,scrollup.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos wchstra.asm,wchstra.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos scntry.asm,scntry.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos setfsinf.asm,setfsinf.obj;
    macros.inc 
            masm -Mx -t  -I. -I..\inc -I..\dos gmachmod.asm,gmachmod.obj;
    macros.inc 
            del  mapper.lib
    File not found
            lib  @mapper.lbr

    Microsoft (R) Library Manager  Version 3.10
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Library name:mapper.lib
    Library does not exist.  Create? (y/n) y
    Operations:+CHDIR&
    Operations:+GETVER&
    Operations:+F_FIRST&
    Operations:+SET_TOD.obj&
    Operations:+WRITE.obj&
    Operations:+BEEP.obj&
    Operations:+MKDIR.obj&
    Operations:+EXIT.obj&
    Operations:+DELETE.obj&
    Operations:+GETCNTRY.obj&
    Operations:+F_CLOSE.obj&
    Operations:+OPEN.obj&
    Operations:+READ.obj&
    Operations:+RMDIR.obj&
    Operations:+QCURDIR.obj&
    Operations:+QCURDSK.obj&
    Operations:+QVERIFY.obj&
    Operations:+QFILEMOD.obj&
    Operations:+SVERIFY.obj&
    Operations:+SFILEMOD.obj&
    Operations:+LSEEK.obj&
    Operations:+SFILEINF.obj&
    Operations:+CLOSE.obj&
    Operations:+ALLOCSEG.obj&
    Operations:+FREESEG.obj&
    Operations:+SEL_DISK.obj&
    Operations:+QFSINFO.obj&
    Operations:+F_NEXT.obj&
    Operations:+GETMSG.obj&
    Operations:+GET_TOD.obj&
    Operations:+CHARIN.obj&
    Operations:+FLUSHBUF.obj&
    Operations:+DEVCONFG.obj&
    Operations:+REALLSEG.obj&
    Operations:+PUTMSG.obj&
    Operations:+EXECPGM.obj&
    Operations:+QHANDTYP.obj&
    Operations:+CWAIT.obj&
    Operations:+KBDGSTAT.obj&
    Operations:+KBDSSTAT.obj&
    Operations:+CASEMAP.obj&
    Operations:+DBCS.obj&
    Operations:+IOCTL.obj&
    Operations:+SIGHAND.obj&
    Operations:+ERROR.obj&
    Operations:+setint24.obj&
    Operations:+QFILEINF.obj&
    Operations:+SCURPOS.obj&
    Operations:+SCROLLUP.obj&
    Operations:+WCHSTRA.obj&
    Operations:+SCNTRY.obj&
    Operations:+SETFSINF.obj&
    Operations:+GMACHMOD.obj
    List file:mapper.lst;
            cd ..\boot
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            nosrvbld boot.skl ..\messages\usa-ms.msg
    Creating .CT? files for boot.skl using ..\messages\usa-ms.msg file of messages. 

    SKL, MSG and IDX files have been opened for reading.
    Writing to boot.cl1
    Message files for boot.skl completed.
            masm -Mx -t  -I. -I..\inc -I..\dos msboot.asm,msboot.obj;
    ... CLONE version build switch on ... 
            link msboot;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    LINK : warning L4021: no stack segment
            exe2bin msboot.exe msboot.bin
            dbof msboot.bin boot.inc 7c00 200
            copy boot.inc ..\inc
            1 File(s) copied
            del boot.inc
            cd ..\bios
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            nosrvbld msbio.skl ..\messages\usa-ms.msg
    Creating .CT? files for msbio.skl using ..\messages\usa-ms.msg file of messages. 

    SKL, MSG and IDX files have been opened for reading.
    Writing to msbio.cl1
    Writing to msbio.cl2
    Writing to msbio.cl3
    Writing to msbio.cl4
    Writing to msbio.cl5
    Message files for msbio.skl completed.
            masm -Mx -t  -I. -I..\inc -I..\dos msbio1.asm,msbio1.obj;
    ...MSBIO1.ASM 
    DEVSYM.INC... 
    ...MSBIO1.ASM 
    DEVSYM.INC... 
            masm -Mx -t  -I. -I..\inc -I..\dos mscon.asm,mscon.obj;
    ...MSCON.ASM 
    MSEQU.INC... 
    MSBDS.INC... 
    ...MSCON.ASM 
    MSEQU.INC... 
    MSBDS.INC... 
            masm -Mx -t  -I. -I..\inc -I..\dos msaux.asm,msaux.obj;
            masm -Mx -t  -I. -I..\inc -I..\dos mslpt.asm,mslpt.obj;
    ...MSLPT.ASM 
    MSEQU.INC... 
    MSBDS.INC... 
    DEVSYM.INC... 
    IOCTL.INC... 
    BPB.INC... 
    ...MSLPT.ASM 
    MSEQU.INC... 
    MSBDS.INC... 
    DEVSYM.INC... 
    IOCTL.INC... 
    BPB.INC... 
            masm -Mx -t  -I. -I..\inc -I..\dos msclock.asm,msclock.obj;
            masm -Mx -t  -I. -I..\inc -I..\dos msdisk.asm,msdisk.obj;
    ...MSDISK.ASM 
    MSEQU.INC... 
    MSBDS.INC... 
    DEVSYM.INC... 
    BIOSTRUC.INC... 
    MSIOCTL.SIL... 
    IOCTL.INC... 
    BPB.INC... 
    ...MSDISK.ASM 
    MSEQU.INC... 
    MSBDS.INC... 
    DEVSYM.INC... 
    BIOSTRUC.INC... 
    MSIOCTL.SIL... 
    IOCTL.INC... 
    BPB.INC... 
            masm -Mx -t  -I. -I..\inc -I..\dos msbio2.asm,msbio2.obj;
    ...MSBIO2.ASM 
    MSEQU.INC... 
    MSBDS.INC... 
    DEVSYM.INC... 
    MS96TPI.INC... 
    ...MSBIO2.ASM 
    MSEQU.INC... 
    MSBDS.INC... 
    DEVSYM.INC... 
    MS96TPI.INC... 
            masm -Mx -t  -I. -I..\inc -I..\dos msinit.asm,msinit.obj;
    ...MSINIT.ASM 
    MSEQU.INC... 
    MSBDS.INC... 
    BIOSTRUC.INC... 
    ...MSINIT.ASM 
    MSEQU.INC... 
    MSBDS.INC... 
    BIOSTRUC.INC... 
            masm -Mx -t  -I. -I..\inc -I..\dos mshard.asm,mshard.obj;
            masm -Mx -t  -I. -I..\inc -I..\dos sysinit1.asm,sysinit1.obj;
    ...SYSINIT1 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    IOCTL.INC... 
    BIOSTRUC.INC... 
    ... CLONE version build switch on ... 
    ...SYSINIT1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    IOCTL.INC... 
    BIOSTRUC.INC... 
            masm -Mx -t  -I. -I..\inc -I..\dos sysconf.asm,sysconf.obj;
    ...SYSCONF 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    IOCTL.INC... 
    BIOSTRUC.INC... 
    ... CLONE version build switch on ... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
    ...SYSCONF 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    IOCTL.INC... 
    BIOSTRUC.INC... 
            masm -Mx -t  -I. -I..\inc -I..\dos sysinit2.asm,sysinit2.obj;
    ...SYSINIT2 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    IOCTL.INC... 
    ...SYSINIT2 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    IOCTL.INC... 
            masm -Mx -t  -I. -I..\inc -I..\dos sysimes.asm,sysimes.obj;
    ...SYSIMES 
    MSEQU.INC... 
    MSBDS.INC... 
    ...SYSIMES 
    MSEQU.INC... 
    MSBDS.INC... 
            masm -Mx -t  -I. -I..\inc -I..\dos msload.asm,msload.obj;
    ASSEMBLING: Non-Contiguous IBMBIO Loader (MSLOAD) 

    BOOTFORM.INC... 
    ... for DOS Version 4.00 ... 
    BOOTFORM.INC... 
            link msload.obj,msload,,;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    LINK : warning L4021: no stack segment
            exe2bin msload.exe msload.com
            link @msbio.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: MSBIO1+
    Object Modules [.OBJ]: MSCON+
    Object Modules [.OBJ]: MSAUX+
    Object Modules [.OBJ]: MSLPT+
    Object Modules [.OBJ]: MSCLOCK+
    Object Modules [.OBJ]: MSDISK+
    Object Modules [.OBJ]: MSBIO2+
    Object Modules [.OBJ]: MSHARD+
    Object Modules [.OBJ]: MSINIT+
    Object Modules [.OBJ]: SYSINIT1+
    Object Modules [.OBJ]: SYSCONF+
    Object Modules [.OBJ]: SYSINIT2+
    Object Modules [.OBJ]: SYSIMES,MSBIO,MSBIO/M;
    LINK : warning L4021: no stack segment
            exe2bin msbio.exe msbio.bin <locscr
    Fix-ups needed - base segment (hex): 70
            copy /b msload.com+msbio.bin io.sys
    MSLOAD.COM
    MSBIO.BIN
            1 File(s) copied
            del msbio.bin
            del msbio.exe
            cd ..\dos
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            nosrvbld msdos.skl ..\messages\usa-ms.msg
    Creating .CT? files for msdos.skl using ..\messages\usa-ms.msg file of messages. 

    SKL, MSG and IDX files have been opened for reading.
    Writing to msdos.cl1
    Writing to msdos.cl3
    Message files for msdos.skl completed.
            cd ..\inc
            nmake -i

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cl -c -AS -Os -Zp  -I. -I..\h -Foerrtst.obj errtst.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    errtst.c
            cl -c -AS -Os -Zp  -I. -I..\h -Fosysvar.obj sysvar.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    sysvar.c
            cl -c -AS -Os -Zp  -I. -I..\h -Focds.obj cds.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    cds.c
            cl -c -AS -Os -Zp  -I. -I..\h -Fodpb.obj dpb.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    dpb.c
            masm -Mx -t  -I. -I..\inc -I..\dos nibdos.asm,nibdos.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    WARNING!!! Debug fields are being included!!! 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    WARNING!!! Debug fields are being included!!! 
            masm -Mx -t  -I. -I..\inc -I..\dos const2.asm,const2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
            masm -Mx -t  -I. -I..\inc -I..\dos msdata.asm,msdata.obj;
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    XXX... pass 1 
    DEVSYM.INC... 
    XXX... pass 2 
            masm -Mx -t  -I. -I..\inc -I..\dos msdosme.asm,msdosme.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    MAP_CASE... pass 1 
    OEMFunctionKey... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    MAP_CASE... pass 2 
    OEMFunctionKey... pass 2 
            masm -Mx -t  -I. -I..\inc -I..\dos mstable.asm,mstable.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            cd ..\dos                  
            masm -Mx -t  -I. -I..\inc -I. mscode.asm,mscode.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    SNULDEV... pass 1 
    AbsSetup... pass 1 
    ABSDRD... pass 1 
    ABSDWRT... pass 1 
    GETBP... pass 1 
    SYS_RETURN... pass 1 
    CAL_LK... pass 1 
    ETAB_LK... pass 1 
    SetBad... pass 1 
    BadCall... pass 1 
    OKCall... pass 1 
    INT2F_etcetera... pass 1 
    RW32_CONVERT... pass 1 
    Fastxxx_Purge... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    SNULDEV... pass 2 
    AbsSetup... pass 2 
    ABSDRD... pass 2 
    ABSDWRT... pass 2 
    GETBP... pass 2 
    SYS_RETURN... pass 2 
    CAL_LK... pass 2 
    ETAB_LK... pass 2 
    SetBad... pass 2 
    BadCall... pass 2 
    OKCall... pass 2 
    INT2F_etcetera... pass 2 
    RW32_CONVERT... pass 2 
    Fastxxx_Purge... pass 2 
            masm -Mx -t  -I. -I..\inc -I. time.asm,time.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    $GET_DATE... pass 1 
    $SET_DATE... pass 1 
    $GET_TIME... pass 1 
    $SET_TIME... pass 1 
    DATE16... pass 1 
    READTIME... pass 1 
    DSLIDE... pass 1 
    SETYEAR... pass 1 
    DODATE... pass 1 
    DSUM... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $GET_DATE... pass 2 
    $SET_DATE... pass 2 
    $GET_TIME... pass 2 
    $SET_TIME... pass 2 
    DATE16... pass 2 
    READTIME... pass 2 
    DSLIDE... pass 2 
    SETYEAR... pass 2 
    DODATE... pass 2 
    DSUM... pass 2 
            masm -Mx -t  -I. -I..\inc -I. getset.asm,getset.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    $GET_VERSION... pass 1 
    $GET_VERIFY_ON_WRITE... pass 1 
    $SET_VERIFY_ON_WRITE... pass 1 
    $INTERNATIONAL... pass 1 
    $GetExtCntry... pass 1 
    $GetSetCdPg... pass 1 
    $GET_DRIVE_FREESPACE... pass 1 
    $GET_DMA... pass 1 
    $SET_DMA... pass 1 
    $GET_DEFAULT_DRIVE... pass 1 
    $SET_DEFAULT_DRIVE... pass 1 
    $GET_INTERRUPT_VECTOR... pass 1 
    $SET_INTERRUPT_VECTOR... pass 1 
    RECSET... pass 1 
    $CHAR_OPER... pass 1 
    $GetExtendedError... pass 1 
    Get_Global_CdPg... pass 1 
    $ECS_call... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $GET_VERSION... pass 2 
    $GET_VERIFY_ON_WRITE... pass 2 
    $SET_VERIFY_ON_WRITE... pass 2 
    $INTERNATIONAL... pass 2 
    $GetExtCntry... pass 2 
    $GetSetCdPg... pass 2 
    $GET_DRIVE_FREESPACE... pass 2 
    $GET_DMA... pass 2 
    $SET_DMA... pass 2 
    $GET_DEFAULT_DRIVE... pass 2 
    $SET_DEFAULT_DRIVE... pass 2 
    $GET_INTERRUPT_VECTOR... pass 2 
    $SET_INTERRUPT_VECTOR... pass 2 
    RECSET... pass 2 
    $CHAR_OPER... pass 2 
    $GetExtendedError... pass 2 
    Get_Global_CdPg... pass 2 
    $ECS_call... pass 2 
            masm -Mx -t  -I. -I..\inc -I. parse.asm,parse.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    $PARSE_FILE_DESCRIPTOR... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $PARSE_FILE_DESCRIPTOR... pass 2 
            masm -Mx -t  -I. -I..\inc -I. misc.asm,misc.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    $SLEAZEFUNC... pass 1 
    $GET_INDOS_FLAG... pass 1 
    $GET_IN_VARS... pass 1 
    $GET_DEFAULT_DPB... pass 1 
    $DISK_RESET... pass 1 
    $SETDPB... pass 1 
    $Dup_PDB... pass 1 
    $CREATE_PROCESS_DATA_BLOCK... pass 1 
    FETCHI_CHECK... pass 1 
    $GSetMediaID... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $SLEAZEFUNC... pass 2 
    $GET_INDOS_FLAG... pass 2 
    $GET_IN_VARS... pass 2 
    $GET_DEFAULT_DPB... pass 2 
    $DISK_RESET... pass 2 
    $SETDPB... pass 2 
    $Dup_PDB... pass 2 
    $CREATE_PROCESS_DATA_BLOCK... pass 2 
    FETCHI_CHECK... pass 2 
    $GSetMediaID... pass 2 
            masm -Mx -t  -I. -I..\inc -I. misc2.asm,misc2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    StrCmp... pass 1 
    StrCpy... pass 1 
    FStrCpy... pass 1 
    uCase... pass 1 
    StrLen... pass 1 
    DStrLen... pass 1 
    XCHGP... pass 1 
    Idle... pass 1 
    TableDispatch... pass 1 
    TestNet... pass 1 
    IsSFTNet... pass 1 
    FastInit... pass 1 
    FastRet... pass 1 
    NLS_OPEN... pass 1 
    NLS_LSEEK... pass 1 
    Fake_User_Stack... pass 1 
    GetDevList... pass 1 
    NLS_IOCTL... pass 1 
    NLS_GETEXT... pass 1 
    MSG_RETRIEVAL... pass 1 
    Fake_version... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    StrCmp... pass 2 
    StrCpy... pass 2 
    FStrCpy... pass 2 
    uCase... pass 2 
    StrLen... pass 2 
    DStrLen... pass 2 
    XCHGP... pass 2 
    Idle... pass 2 
    TableDispatch... pass 2 
    TestNet... pass 2 
    IsSFTNet... pass 2 
    FastInit... pass 2 
    FastRet... pass 2 
    NLS_OPEN... pass 2 
    NLS_LSEEK... pass 2 
    Fake_User_Stack... pass 2 
    GetDevList... pass 2 
    NLS_IOCTL... pass 2 
    NLS_GETEXT... pass 2 
    MSG_RETRIEVAL... pass 2 
    Fake_version... pass 2 
            masm -Mx -t  -I. -I..\inc -I. crit.asm,crit.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    EcritDisk... pass 1 
    LcritDisk... pass 1 
    EcritDevice... pass 1 
    LcritDevice... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    EcritDisk... pass 2 
    LcritDisk... pass 2 
    EcritDevice... pass 2 
    LcritDevice... pass 2 
            masm -Mx -t  -I. -I..\inc -I. cpmio.asm,cpmio.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    $STD_CON_INPUT_NO_ECHO... pass 1 
    $STD_CON_STRING_OUTPUT... pass 1 
    $STD_CON_STRING_INPUT... pass 1 
    $RAW_CON_IO... pass 1 
    Save_Restore_Packet... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $STD_CON_INPUT_NO_ECHO... pass 2 
    $STD_CON_STRING_OUTPUT... pass 2 
    $STD_CON_STRING_INPUT... pass 2 
    $RAW_CON_IO... pass 2 
    Save_Restore_Packet... pass 2 
            masm -Mx -t  -I. -I..\inc -I. cpmio2.asm,cpmio2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    $STD_CON_INPUT... pass 1 
    $STD_CON_OUTPUT... pass 1 
    $STD_AUX_INPUT... pass 1 
    $STD_AUX_OUTPUT... pass 1 
    $STD_PRINTER_OUTPUT... pass 1 
    $STD_CON_INPUT_STATUS... pass 1 
    $STD_CON_INPUT_FLUSH... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $STD_CON_INPUT... pass 2 
    $STD_CON_OUTPUT... pass 2 
    $STD_AUX_INPUT... pass 2 
    $STD_AUX_OUTPUT... pass 2 
    $STD_PRINTER_OUTPUT... pass 2 
    $STD_CON_INPUT_STATUS... pass 2 
    $STD_CON_INPUT_FLUSH... pass 2 
            masm -Mx -t  -I. -I..\inc -I. msdisp.asm,msdisp.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    $SET_CTRL_C_TRAPPING... pass 1 
    $SET_CURRENT_PDB... pass 1 
    $GET_CURRENT_PDB... pass 1 
    $Set_Printer_Flag... pass 1 
    SYSTEM_CALL... pass 1 
    restore_world... pass 1 
    save_world... pass 1 
    SAVE_USER_MAP... pass 1 
    RESTORE_USER_MAP... pass 1 
    get_user_stack... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    $SET_CTRL_C_TRAPPING... pass 2 
    $SET_CURRENT_PDB... pass 2 
    $GET_CURRENT_PDB... pass 2 
    $Set_Printer_Flag... pass 2 
    SYSTEM_CALL... pass 2 
    restore_world... pass 2 
    save_world... pass 2 
    SAVE_USER_MAP... pass 2 
    RESTORE_USER_MAP... pass 2 
    get_user_stack... pass 2 
            masm -Mx -t  -I. -I..\inc -I. fcbio.asm,fcbio.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    $Get_FCB_Position... pass 1 
    $FCB_Delete... pass 1 
    $Get_FCB_File_Length... pass 1 
    $FCB_Close... pass 1 
    $FCB_Rename... pass 1 
    SaveFCBInfo... pass 1 
    ResetLRU... pass 1 
    SetOpenAge... pass 1 
    LRUFCB... pass 1 
    FCBRegen... pass 1 
    BlastSFT... pass 1 
    CheckFCB... pass 1 
    SFTFromFCB... pass 1 
    FCBHardErr... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $Get_FCB_Position... pass 2 
    $FCB_Delete... pass 2 
    $Get_FCB_File_Length... pass 2 
    $FCB_Close... pass 2 
    $FCB_Rename... pass 2 
    SaveFCBInfo... pass 2 
    ResetLRU... pass 2 
    SetOpenAge... pass 2 
    LRUFCB... pass 2 
    FCBRegen... pass 2 
    BlastSFT... pass 2 
    CheckFCB... pass 2 
    SFTFromFCB... pass 2 
    FCBHardErr... pass 2 
            masm -Mx -t  -I. -I..\inc -I. fcbio2.asm,fcbio2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    GetRR... pass 1 
    GetExtent... pass 1 
    SetExtent... pass 1 
    GetExtended... pass 1 
    GetRecSize... pass 1 
    FCBIO... pass 1 
    WARNING!!! Make sure sf_position+2 is OpenAGE 
    $FCB_Open... pass 1 
    $FCB_Create... pass 1 
    $FCB_Random_Write_Block... pass 1 
    $FCB_Random_Read_Block... pass 1 
    $FCB_Seq_Read... pass 1 
    $FCB_Seq_Write... pass 1 
    $FCB_Random_Read... pass 1 
    $FCB_Random_Write... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    GetRR... pass 2 
    GetExtent... pass 2 
    SetExtent... pass 2 
    GetExtended... pass 2 
    GetRecSize... pass 2 
    FCBIO... pass 2 
    WARNING!!! Make sure sf_position+2 is OpenAGE 
    $FCB_Open... pass 2 
    $FCB_Create... pass 2 
    $FCB_Random_Write_Block... pass 2 
    $FCB_Random_Read_Block... pass 2 
    $FCB_Seq_Read... pass 2 
    $FCB_Seq_Write... pass 2 
    $FCB_Random_Read... pass 2 
    $FCB_Random_Write... pass 2 
            masm -Mx -t  -I. -I..\inc -I. search.asm,search.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    $DIR_SEARCH_FIRST... pass 1 
    $DIR_SEARCH_NEXT... pass 1 
    $FIND_FIRST... pass 1 
    $FIND_NEXT... pass 1 
    PackName... pass 1 
    GET_FAST_SEARCH... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $DIR_SEARCH_FIRST... pass 2 
    ***** Possible stack size error in $DIR_SEARCH_FIRST ***** 
    $DIR_SEARCH_NEXT... pass 2 
    $FIND_FIRST... pass 2 
    $FIND_NEXT... pass 2 
    PackName... pass 2 
    GET_FAST_SEARCH... pass 2 
            masm -Mx -t  -I. -I..\inc -I. path.asm,path.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    $CURRENT_DIR... pass 1 
    $RMDIR... pass 1 
    $CHDIR... pass 1 
    $MKDIR... pass 1 
    Check_PathLen... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $CURRENT_DIR... pass 2 
    $RMDIR... pass 2 
    $CHDIR... pass 2 
    $MKDIR... pass 2 
    Check_PathLen... pass 2 
            masm -Mx -t  -I. -I..\inc -I. ioctl.asm,ioctl.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    IOCTL.INC... 
    $IOCTL... pass 1 
    TEST_IFS_REMOTE... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    IOCTL.INC... 
    $IOCTL... pass 2 
    TEST_IFS_REMOTE... pass 2 
            masm -Mx -t  -I. -I..\inc -I. delete.asm,delete.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    DOS_DELETE... pass 1 
    REN_DEL_Check... pass 1 
    FastOpen_Delete... pass 1 
    FastOpen_Update... pass 1 
    FastSeek_Open... pass 1 
    FSeek_dispatch... pass 1 
    FastSeek_Close... pass 1 
    FastSeek_Delete... pass 1 
    Delete_FSeek... pass 1 
    FastSeek_Lookup... pass 1 
    FastSeek_Insert... pass 1 
    FastSeek_Truncate... pass 1 
    FS_doit... pass 1 
    IFS_SEARCH_FIRST... pass 1 
    IFS_REN_DEL_CHECK... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    DOS_DELETE... pass 2 
    REN_DEL_Check... pass 2 
    FastOpen_Delete... pass 2 
    FastOpen_Update... pass 2 
    FastSeek_Open... pass 2 
    FSeek_dispatch... pass 2 
    FastSeek_Close... pass 2 
    FastSeek_Delete... pass 2 
    Delete_FSeek... pass 2 
    FastSeek_Lookup... pass 2 
    FastSeek_Insert... pass 2 
    FastSeek_Truncate... pass 2 
    FS_doit... pass 2 
    IFS_SEARCH_FIRST... pass 2 
    IFS_REN_DEL_CHECK... pass 2 
            masm -Mx -t  -I. -I..\inc -I. rename.asm,rename.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    DOS_RENAME... pass 1 
    NEW_RENAME... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    DOS_RENAME... pass 2 
    NEW_RENAME... pass 2 
            masm -Mx -t  -I. -I..\inc -I. finfo.asm,finfo.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    GET_FILE_INFO... pass 1 
    SET_FILE_ATTRIBUTE... pass 1 
    GET_FAST_PATH... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    GET_FILE_INFO... pass 2 
    SET_FILE_ATTRIBUTE... pass 2 
    GET_FAST_PATH... pass 2 
            masm -Mx -t  -I. -I..\inc -I. dup.asm,dup.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    DOS_DUP... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    DOS_DUP... pass 2 
            masm -Mx -t  -I. -I..\inc -I. create.asm,create.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    DOS_Create... pass 1 
    DOS_Create_New... pass 1 
    Set_Media_ID... pass 1 
    Set_EXT_mode... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    DOS_Create... pass 2 
    DOS_Create_New... pass 2 
    Set_Media_ID... pass 2 
    Set_EXT_mode... pass 2 
            masm -Mx -t  -I. -I..\inc -I. open.asm,open.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    DOS_Open... pass 1 
    SHARE_ERROR... pass 1 
    DO_SHARE_CHECK... pass 1 
    OWN_SHARE... pass 1 
    OWN_SHARE2... pass 1 
    SET_THISDPB... pass 1 
    IFS_SHARE_CHECK... pass 1 
    Check_Access_AX... pass 1 
    Code_Page_Mismatched_Error... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    DOS_Open... pass 2 
    ***** Possible stack size error in DOS_Open ***** 
    SHARE_ERROR... pass 2 
    DO_SHARE_CHECK... pass 2 
    OWN_SHARE... pass 2 
    OWN_SHARE2... pass 2 
    SET_THISDPB... pass 2 
    IFS_SHARE_CHECK... pass 2 
    Check_Access_AX... pass 2 
    Code_Page_Mismatched_Error... pass 2 
            masm -Mx -t  -I. -I..\inc -I. dinfo.asm,dinfo.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    DISK_INFO... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    DISK_INFO... pass 2 
            masm -Mx -t  -I. -I..\inc -I. isearch.asm,isearch.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    DOS_SEARCH_FIRST... pass 1 
    DOS_SEARCH_NEXT... pass 1 
    CHECK_QUESTION... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    DOS_SEARCH_FIRST... pass 2 
    DOS_SEARCH_NEXT... pass 2 
    CHECK_QUESTION... pass 2 
            masm -Mx -t  -I. -I..\inc -I. buf.asm,buf.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    GETCURHEAD... pass 1 
    SET_MAP_PAGE... pass 1 
    SAVE_MAP... pass 1 
    RESTORE_MAP... pass 1 
    ScanPlace... pass 1 
    PLACEBUF... pass 1 
    PLACEHEAD... pass 1 
    PointComp... pass 1 
    GETBUFFR... pass 1 
    FlushBuf... pass 1 
    CHECKFLUSH... pass 1 
    BufWrite... pass 1 
    SET_RQ_SC_PARMS... pass 1 
    INC_DIRTY_COUNT... pass 1 
    DEC_DIRTY_COUNT... pass 1 
    Map_Entry... pass 1 
    detect_collision... pass 1 
    Setup_EMS_Buffers... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    GETCURHEAD... pass 2 
    SET_MAP_PAGE... pass 2 
    SAVE_MAP... pass 2 
    RESTORE_MAP... pass 2 
    ScanPlace... pass 2 
    PLACEBUF... pass 2 
    PLACEHEAD... pass 2 
    PointComp... pass 2 
    GETBUFFR... pass 2 
    FlushBuf... pass 2 
    CHECKFLUSH... pass 2 
    BufWrite... pass 2 
    SET_RQ_SC_PARMS... pass 2 
    INC_DIRTY_COUNT... pass 2 
    DEC_DIRTY_COUNT... pass 2 
    Map_Entry... pass 2 
    detect_collision... pass 2 
    Setup_EMS_Buffers... pass 2 
            masm -Mx -t  -I. -I..\inc -I. abort.asm,abort.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    DOS_ABORT... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    DOS_ABORT... pass 2 
            masm -Mx -t  -I. -I..\inc -I. close.asm,close.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    DOS_CLOSE... pass 1 
    FREE_SFT... pass 1 
    DirFromSFT... pass 1 
    DOS_COMMIT... pass 1 
    SetSFTTimes... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    DOS_CLOSE... pass 2 
    FREE_SFT... pass 2 
    DirFromSFT... pass 2 
    ***** Possible stack size error in DirFromSFT ***** 
    DOS_COMMIT... pass 2 
    SetSFTTimes... pass 2 
            masm -Mx -t  -I. -I..\inc -I. dircall.asm,dircall.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    DOS_MKDIR... pass 1 
    DOS_CHDIR... pass 1 
    DOS_RMDIR... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    DOS_MKDIR... pass 2 
    DOS_CHDIR... pass 2 
    DOS_RMDIR... pass 2 
            masm -Mx -t  -I. -I..\inc -I. disk.asm,disk.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    SWAPBACK... pass 1 
    SWAPCON... pass 1 
    DOS_READ... pass 1 
    DOS_WRITE... pass 1 
    get_io_sft... pass 1 
    DirRead... pass 1 
    FATSecRd... pass 1 
    CHECK_WRITE_LOCK... pass 1 
    CHECK_READ_LOCK... pass 1 
    choose_buf_page... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    SWAPBACK... pass 2 
    SWAPCON... pass 2 
    DOS_READ... pass 2 
    DOS_WRITE... pass 2 
    get_io_sft... pass 2 
    DirRead... pass 2 
    FATSecRd... pass 2 
    CHECK_WRITE_LOCK... pass 2 
    CHECK_READ_LOCK... pass 2 
    choose_buf_page... pass 2 
            masm -Mx -t  -I. -I..\inc -I. disk2.asm,disk2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    DskRead... pass 1 
    HARDERRRW... pass 1 
    SETUP... pass 1 
    BREAKDOWN... pass 1 
    READ_LOCK_VIOLATION... pass 1 
    WRITE_LOCK_VIOLATION... pass 1 
    DISKREAD... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    DskRead... pass 2 
    HARDERRRW... pass 2 
    SETUP... pass 2 
    BREAKDOWN... pass 2 
    READ_LOCK_VIOLATION... pass 2 
    WRITE_LOCK_VIOLATION... pass 2 
    DISKREAD... pass 2 
            masm -Mx -t  -I. -I..\inc -I. disk3.asm,disk3.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    DISKWRITE... pass 1 
    DIV32... pass 1 
    SHR32... pass 1 
    File_Handle_Fail_Error... pass 1 
    BUFF_RANGE_CHECK... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    DISKWRITE... pass 2 
    DIV32... pass 2 
    SHR32... pass 2 
    File_Handle_Fail_Error... pass 2 
    BUFF_RANGE_CHECK... pass 2 
            masm -Mx -t  -I. -I..\inc -I. dir.asm,dir.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    SEARCH... pass 1 
    MetaCompare... pass 1 
    NextEntry... pass 1 
    GETENTRY... pass 1 
    SETDIRSRCH... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    SEARCH... pass 2 
    MetaCompare... pass 2 
    NextEntry... pass 2 
    GETENTRY... pass 2 
    SETDIRSRCH... pass 2 
    ***** Possible stack size error in SETDIRSRCH ***** 
            masm -Mx -t  -I. -I..\inc -I. dir2.asm,dir2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    GETPATH... pass 1 
    ChkDev... pass 1 
    ROOTPATH... pass 1 
    StartSrch... pass 1 
    MatchAttributes... pass 1 
    DEVNAME... pass 1 
    Build_device_ent... pass 1 
    ValidateCDS... pass 1 
    CheckThisDevice... pass 1 
    LookupPath... pass 1 
    InsertPath... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    GETPATH... pass 2 
    ChkDev... pass 2 
    ROOTPATH... pass 2 
    StartSrch... pass 2 
    MatchAttributes... pass 2 
    DEVNAME... pass 2 
    Build_device_ent... pass 2 
    ValidateCDS... pass 2 
    CheckThisDevice... pass 2 
    LookupPath... pass 2 
    InsertPath... pass 2 
            masm -Mx -t  -I. -I..\inc -I. dev.asm,dev.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    IOFUNC... pass 1 
    DEV_OPEN_SFT... pass 1 
    DEV_CLOSE_SFT... pass 1 
    DEVIOCALL... pass 1 
    SETREAD... pass 1 
    RW_SC... pass 1 
    IN_SC... pass 1 
    INVALIDATE_SC... pass 1 
    VIRREAD... pass 1 
    SC2BUF... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    IOFUNC... pass 2 
    DEV_OPEN_SFT... pass 2 
    DEV_CLOSE_SFT... pass 2 
    DEVIOCALL... pass 2 
    SETREAD... pass 2 
    RW_SC... pass 2 
    IN_SC... pass 2 
    INVALIDATE_SC... pass 2 
    VIRREAD... pass 2 
    SC2BUF... pass 2 
            masm -Mx -t  -I. -I..\inc -I. mknode.asm,mknode.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    BUILDDIR... pass 1 
    SETDOTENT... pass 1 
    MakeNode... pass 1 
    NEWENTRY... pass 1 
    FREEENT... pass 1 
    CHECK_VIRT_OPEN... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    BUILDDIR... pass 2 
    SETDOTENT... pass 2 
    MakeNode... pass 2 
    ***** Possible stack size error in MakeNode ***** 
    NEWENTRY... pass 2 
    FREEENT... pass 2 
    CHECK_VIRT_OPEN... pass 2 
            masm -Mx -t  -I. -I..\inc -I. rom.asm,rom.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    FNDCLUS... pass 1 
    BUFSEC... pass 1 
    BUFRD... pass 1 
    BUFWRT... pass 1 
    NEXTSEC... pass 1 
    OPTIMIZE... pass 1 
    FIGREC... pass 1 
    ALLOCATE... pass 1 
    RESTFATBYT... pass 1 
    RELEASE... pass 1 
    GETEOF... pass 1 
    FS_TRUNC_EOF... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    FNDCLUS... pass 2 
    BUFSEC... pass 2 
    BUFRD... pass 2 
    BUFWRT... pass 2 
    NEXTSEC... pass 2 
    OPTIMIZE... pass 2 
    FIGREC... pass 2 
    ALLOCATE... pass 2 
    RESTFATBYT... pass 2 
    RELEASE... pass 2 
    GETEOF... pass 2 
    FS_TRUNC_EOF... pass 2 
            masm -Mx -t  -I. -I..\inc -I. fcb.asm,fcb.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    MakeFcb... pass 1 
    NameTrans... pass 1 
    GetLet... pass 1 
    PATHCHRCMP... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    MakeFcb... pass 2 
    NameTrans... pass 2 
    GetLet... pass 2 
    PATHCHRCMP... pass 2 
            masm -Mx -t  -I. -I..\inc -I. msctrlc.asm,msctrlc.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    DSKSTATCHK... pass 1 
    SPOOLINT... pass 1 
    STATCHK... pass 1 
    CNTCHAND... pass 1 
    DIVOV... pass 1 
    OutMes... pass 1 
    CHARHARD... pass 1 
    HardErr... pass 1 
    SET_I24_EXTENDED_ERROR... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    DSKSTATCHK... pass 2 
    SPOOLINT... pass 2 
    STATCHK... pass 2 
    CNTCHAND... pass 2 
    DIVOV... pass 2 
    OutMes... pass 2 
    CHARHARD... pass 2 
    HardErr... pass 2 
    ***** Possible stack size error in HardErr ***** 
    SET_I24_EXTENDED_ERROR... pass 2 
            masm -Mx -t  -I. -I..\inc -I. fat.asm,fat.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    IsEof... pass 1 
    UNPACK... pass 1 
    PACK... pass 1 
    MAPCLUSTER... pass 1 
    FATREAD_SFT... pass 1 
    FATREAD_CDS... pass 1 
    FAT_operation... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    IsEof... pass 2 
    UNPACK... pass 2 
    PACK... pass 2 
    MAPCLUSTER... pass 2 
    ***** Possible stack size error in MAPCLUSTER ***** 
    FATREAD_SFT... pass 2 
    FATREAD_CDS... pass 2 
    FAT_operation... pass 2 
            masm -Mx -t  -I. -I..\inc -I. proc.asm,proc.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    $WAIT... pass 1 
    ... CLONE version build switch on ... 
    Please make sure that the following are contiguous and of the 
    following sizes: 

    OpenBuf     128 
    RenBuf      128 
    SearchBuf    53 
    DummyCDS    CurDirLen 
    $Exec... pass 1 
    exec_long_ret... pass 1 
    ExecRead... pass 1 
    exec_dealloc... pass 1 
    exec_alloc... pass 1 
    ChangeOwners... pass 1 
    ChangeOwner... pass 1 
    Scan_Execname... pass 1 
    Scan_Special_Entries... pass 1 
    Reset_Version... pass 1 
    $Keep_process... pass 1 
    Stay_resident... pass 1 
    $EXIT... pass 1 
    $ABORT... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $WAIT... pass 2 
    Please make sure that the following are contiguous and of the 
    following sizes: 

    OpenBuf     128 
    RenBuf      128 
    SearchBuf    53 
    DummyCDS    CurDirLen 
    $Exec... pass 2 
    exec_long_ret... pass 2 
    ExecRead... pass 2 
    exec_dealloc... pass 2 
    exec_alloc... pass 2 
    ChangeOwners... pass 2 
    ChangeOwner... pass 2 
    Scan_Execname... pass 2 
    Scan_Special_Entries... pass 2 
    Reset_Version... pass 2 
    $Keep_process... pass 2 
    Stay_resident... pass 2 
    $EXIT... pass 2 
    $ABORT... pass 2 
            masm -Mx -t  -I. -I..\inc -I. alloc.asm,alloc.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    arena_free_process... pass 1 
    arena_next... pass 1 
    check_signature... pass 1 
    Coalesce... pass 1 
    $ALLOC... pass 1 
    $SETBLOCK... pass 1 
    $DEALLOC... pass 1 
    $AllocOper... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    arena_free_process... pass 2 
    arena_next... pass 2 
    check_signature... pass 2 
    Coalesce... pass 2 
    $ALLOC... pass 2 
    $SETBLOCK... pass 2 
    $DEALLOC... pass 2 
    $AllocOper... pass 2 
            masm -Mx -t  -I. -I..\inc -I. srvcall.asm,srvcall.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    $ServerCall... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $ServerCall... pass 2 
    ***** Possible stack size error in $ServerCall ***** 
            masm -Mx -t  -I. -I..\inc -I. util.asm,util.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    pJFNFromHandle... pass 1 
    SFFromHandle... pass 1 
    SFFromSFN... pass 1 
    JFNFree... pass 1 
    SFNFree... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    pJFNFromHandle... pass 2 
    SFFromHandle... pass 2 
    SFFromSFN... pass 2 
    JFNFree... pass 2 
    SFNFree... pass 2 
            masm -Mx -t  -I. -I..\inc -I. macro.asm,macro.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    $AssignOper... pass 1 
    FIND_DPB... pass 1 
    InitCDS... pass 1 
    $UserOper... pass 1 
    GetVisDrv... pass 1 
    GetThisDrv... pass 1 
    GetCDSFromDrv... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $AssignOper... pass 2 
    FIND_DPB... pass 2 
    InitCDS... pass 2 
    $UserOper... pass 2 
    GetVisDrv... pass 2 
    GetThisDrv... pass 2 
    GetCDSFromDrv... pass 2 
            masm -Mx -t  -I. -I..\inc -I. macro2.asm,macro2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    TransFCB... pass 1 
    TransPath... pass 1 
    Canonicalize... pass 1 
    PathSep... pass 1 
    SkipBack... pass 1 
    CopyComponent... pass 1 
    Splice... pass 1 
    $NameTrans... pass 1 
    DriveFromText... pass 1 
    TextFromDrive... pass 1 
    PathPref... pass 1 
    ScanPathChar... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    TransFCB... pass 2 
    TransPath... pass 2 
    Canonicalize... pass 2 
    PathSep... pass 2 
    SkipBack... pass 2 
    CopyComponent... pass 2 
    Splice... pass 2 
    ***** Possible stack size error in Splice ***** 
    $NameTrans... pass 2 
    DriveFromText... pass 2 
    TextFromDrive... pass 2 
    PathPref... pass 2 
    ScanPathChar... pass 2 
            masm -Mx -t  -I. -I..\inc -I. ifs.asm,ifs.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    IFS_DOSCALL... pass 1 
    GET_DOS_INFO... pass 1 
    $IFS_IOCTL... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    IFS_DOSCALL... pass 2 
    GET_DOS_INFO... pass 2 
    $IFS_IOCTL... pass 2 
            masm -Mx -t  -I. -I..\inc -I. handle.asm,handle.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    $Close... pass 1 
    $Commit... pass 1 
    $ExtHandle... pass 1 
    $READ... pass 1 
    Align_Buffer... pass 1 
    $WRITE... pass 1 
    $LSEEK... pass 1 
    $File_Times... pass 1 
    $DUP... pass 1 
    $Dup2... pass 1 
    CheckOwner... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $Close... pass 2 
    $Commit... pass 2 
    $ExtHandle... pass 2 
    $READ... pass 2 
    Align_Buffer... pass 2 
    $WRITE... pass 2 
    $LSEEK... pass 2 
    $File_Times... pass 2 
    $DUP... pass 2 
    $Dup2... pass 2 
    CheckOwner... pass 2 
            masm -Mx -t  -I. -I..\inc -I. file.asm,file.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    $Open... pass 1 
    $Creat... pass 1 
    $CHMOD... pass 1 
    $UNLINK... pass 1 
    $RENAME... pass 1 
    $CreateNewFile... pass 1 
    HexToAsciz... pass 1 
    $CreateTempFile... pass 1 
    SetAttrib... pass 1 
    $Extended_Open... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $Open... pass 2 
    ***** Possible stack size error in $Open ***** 
    $Creat... pass 2 
    ***** Possible stack size error in $Creat ***** 
    $CHMOD... pass 2 
    $UNLINK... pass 2 
    $RENAME... pass 2 
    $CreateNewFile... pass 2 
    ***** Possible stack size error in $CreateNewFile ***** 
    HexToAsciz... pass 2 
    $CreateTempFile... pass 2 
    SetAttrib... pass 2 
    $Extended_Open... pass 2 
            masm -Mx -t  -I. -I..\inc -I. lock.asm,lock.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    $LockOper... pass 1 
    LOCK_CHECK... pass 1 
    LOCK_VIOLATION... pass 1 
    CheckShare... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    $LockOper... pass 2 
    LOCK_CHECK... pass 2 
    LOCK_VIOLATION... pass 2 
    CheckShare... pass 2 
            masm -Mx -t  -I. -I..\inc -I. share.asm,share.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    SHARE_CHECK... pass 1 
    SHARE_VIOLATION... pass 1 
    ShareEnd... pass 1 
    ShareEnter... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    SHARE_CHECK... pass 2 
    SHARE_VIOLATION... pass 2 
    ShareEnd... pass 2 
    ShareEnter... pass 2 
            masm -Mx -t  -I. -I..\inc -I. extattr.asm,extattr.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    GetSet_XA... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    GetSet_XA... pass 2 
            link @msdos.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: ..\INC\NIBDOS.OBJ    +
    Object Modules [.OBJ]: ..\INC\CONST2.OBJ   +
    Object Modules [.OBJ]: ..\INC\MSDATA.OBJ  +
    Object Modules [.OBJ]: ..\INC\MSTABLE.OBJ +
    Object Modules [.OBJ]:  MSDISP.OBJ          +
    Object Modules [.OBJ]:  MSCODE.OBJ          +
    Object Modules [.OBJ]: ..\INC\MSDOSME.OBJ +
    Object Modules [.OBJ]:  TIME.OBJ             +
    Object Modules [.OBJ]:  GETSET.OBJ           +
    Object Modules [.OBJ]:  PARSE.OBJ            +
    Object Modules [.OBJ]:  MISC.OBJ             +
    Object Modules [.OBJ]:  MISC2.OBJ            +
    Object Modules [.OBJ]:  CRIT.OBJ             +
    Object Modules [.OBJ]:  CPMIO.OBJ            +
    Object Modules [.OBJ]:  CPMIO2.OBJ           +
    Object Modules [.OBJ]:  FCBIO.OBJ            +
    Object Modules [.OBJ]:  FCBIO2.OBJ           +
    Object Modules [.OBJ]:  SEARCH.OBJ           +
    Object Modules [.OBJ]:  PATH.OBJ             +
    Object Modules [.OBJ]:  IOCTL.OBJ            +
    Object Modules [.OBJ]:  DELETE.OBJ           +
    Object Modules [.OBJ]:  RENAME.OBJ           +
    Object Modules [.OBJ]:  FINFO.OBJ            +
    Object Modules [.OBJ]:  DUP.OBJ              +
    Object Modules [.OBJ]:  CREATE.OBJ           +
    Object Modules [.OBJ]:  OPEN.OBJ             +
    Object Modules [.OBJ]:  DINFO.OBJ            +
    Object Modules [.OBJ]:  ISEARCH.OBJ          +
    Object Modules [.OBJ]:  ABORT.OBJ            +
    Object Modules [.OBJ]:  CLOSE.OBJ            +
    Object Modules [.OBJ]:  DIRCALL.OBJ          +
    Object Modules [.OBJ]:  DISK.OBJ             +
    Object Modules [.OBJ]:  DISK2.OBJ            +
    Object Modules [.OBJ]:  DISK3.OBJ            +
    Object Modules [.OBJ]:  DIR.OBJ              +
    Object Modules [.OBJ]:  DIR2.OBJ             +
    Object Modules [.OBJ]:  DEV.OBJ              +
    Object Modules [.OBJ]:  MKNODE.OBJ           +
    Object Modules [.OBJ]:  ROM.OBJ              +
    Object Modules [.OBJ]:  FCB.OBJ              +
    Object Modules [.OBJ]:  MSCTRLC.OBJ         +
    Object Modules [.OBJ]:  FAT.OBJ              +
    Object Modules [.OBJ]:  BUF.OBJ              +
    Object Modules [.OBJ]:  PROC.OBJ             +
    Object Modules [.OBJ]:  ALLOC.OBJ            +
    Object Modules [.OBJ]:  SRVCALL.OBJ          +
    Object Modules [.OBJ]:  UTIL.OBJ             +
    Object Modules [.OBJ]:  HANDLE.OBJ           +
    Object Modules [.OBJ]:  MACRO.OBJ            +
    Object Modules [.OBJ]:  MACRO2.OBJ           +
    Object Modules [.OBJ]:  FILE.OBJ             +
    Object Modules [.OBJ]:  LOCK.OBJ             +
    Object Modules [.OBJ]:  SHARE.OBJ            +
    Object Modules [.OBJ]:  EXTATTR.OBJ          +
    Object Modules [.OBJ]:  IFS.OBJ
    Run File [NIBDOS.EXE]: MSDOS.EXE
    List File [NUL.MAP]: MSDOS.MAP /M
    Libraries [.LIB]: ;
    LINK : warning L4021: no stack segment
            exe2bin msdos.exe msdos.sys
            del msdos.exe
            cd ..\cmd
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cd command
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos command1.asm,command1.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos command2.asm,command2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    ... CLONE version build switch on ... 
    SetSize... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    SetSize... pass 2 
            buildmsg ..\..\messages\usa-ms command.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [command.skl]
    Utility Name = [COMMAND]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 24000 bytes)
    Created include file [COMMAND.CL1]
    Created include file [COMMAND.CL2]
    Created include file [COMMAND.CL3]
    Created include file [COMMAND.CL4]
    Created include file [COMMAND.CLA]
    Created include file [COMMAND.CLB]
    Created include file [COMMAND.CLC]
    Created include file [COMMAND.CLD]
    Created include file [COMMAND.CLE]
    Created include file [COMMAND.CLF]
    Completed [COMMAND.CL1]
    Completed [COMMAND.CL2]
    Completed [COMMAND.CL3]
    Completed [COMMAND.CL4]
    Completed [COMMAND.CLA]
    Completed [COMMAND.CLB]
    Completed [COMMAND.CLC]
    Completed [COMMAND.CLD]
    Completed [COMMAND.CLE]
    Completed [COMMAND.CLF]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos rucode.asm,rucode.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos rdata.asm,rdata.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class D 
    ... Including message Class C 
    ... Including message Class E 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos init.asm,init.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos iparse.asm,iparse.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos uinit.asm,uinit.obj;
    ... CLONE version build switch on ... 
    DBCS Enabled IBM  version 
    ... for DOS Version 4.00 ... 
    ... Including message Class B 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tcode.asm,tcode.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tbatch.asm,tbatch.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    ... CLONE version build switch on ... 
    PromptBat... pass 1 
    GetKeyStroke... pass 1 
    ReadBat... pass 1 
    SkipToEOL... pass 1 
    Free_TPA... pass 1 
    Alloc_TPA... pass 1 
    BatCom... pass 1 
    BatchOff... pass 1 
    StrCpy... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    PromptBat... pass 2 
    GetKeyStroke... pass 2 
    ReadBat... pass 2 
    ***** Possible stack size error in ReadBat ***** 
    SkipToEOL... pass 2 
    Free_TPA... pass 2 
    Alloc_TPA... pass 2 
    BatCom... pass 2 
    BatchOff... pass 2 
    StrCpy... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tbatch2.asm,tbatch2.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    GETBATBYT... pass 1 
    Shift... pass 1 
    SkipDelim... pass 1 
    BatClose... pass 1 
    BatOpen... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    GETBATBYT... pass 2 
    Shift... pass 2 
    SkipDelim... pass 2 
    BatClose... pass 2 
    BatOpen... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tfor.asm,tfor.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tcmd1a.asm,tcmd1a.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    IOCTL.INC... 
    DOSSYM in Pass 2 
    BPB.INC... 
    IOCTL.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tcmd1b.asm,tcmd1b.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    ... CLONE version build switch on ... 
    IOCTL.INC... 
    DOSSYM in Pass 2 
    BPB.INC... 
    IOCTL.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tcmd2a.asm,tcmd2a.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    IOCTL.INC... 
    DOSSYM in Pass 2 
    BPB.INC... 
    IOCTL.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tcmd2b.asm,tcmd2b.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tenv.asm,tenv.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tenv2.asm,tenv2.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tmisc1.asm,tmisc1.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tmisc2.asm,tmisc2.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    IOCTL.INC... 
    DSTRLEN... pass 1 
    TriageError... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    IOCTL.INC... 
    DSTRLEN... pass 2 
    TriageError... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tpipe.asm,tpipe.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos parse2.asm,parse2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos path1.asm,path1.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    ... CLONE version build switch on ... 
    Path_Search... pass 1 
    Store_PChar... pass 1 
    Path_Crunch... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    Path_Search... pass 2 
    Store_PChar... pass 2 
    Path_Crunch... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos path2.asm,path2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    ... CLONE version build switch on ... 
    Search... pass 1 
    Search_Ftype... pass 1 
    Strip... pass 1 
    Save_Args... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    Search... pass 2 
    Search_Ftype... pass 2 
    Strip... pass 2 
    Save_Args... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tucode.asm,tucode.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos copy.asm,copy.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos copypr1.asm,copypr1.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos copypr2.asm,copypr2.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos cparse.asm,cparse.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tparse.asm,tparse.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tprintf.asm,tprintf.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tdata.asm,tdata.obj;
    ... CLONE version build switch on ... 
    DBCS Enabled IBM  version 
    ... for DOS Version 4.00 ... 
    ... Including message Class F 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tspc.asm,tspc.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            link @command.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: /MAP COMMAND1.OBJ COMMAND2.OBJ RUCODE.OBJ RDATA.OBJ INIT.OBJ IPARSE.OBJ +
    Object Modules [.OBJ]: UINIT.OBJ TCODE.OBJ TBATCH.OBJ TBATCH2.OBJ TFOR.OBJ TCMD1A.OBJ TCMD1B.OBJ +
    Object Modules [.OBJ]: TCMD2A.OBJ TCMD2B.OBJ TENV.OBJ TENV2.OBJ TMISC1.OBJ TMISC2.OBJ TPIPE.OBJ +
    Object Modules [.OBJ]: PARSE2.OBJ PATH1.OBJ PATH2.OBJ TUCODE.OBJ COPY.OBJ COPYPR1.OBJ COPYPR2.OBJ +
    Object Modules [.OBJ]: CPARSE.OBJ TPARSE.OBJ TPRINTF.OBJ TDATA.OBJ TSPC.OBJ,COMMAND.EXE,,;
    LINK : warning L4021: no stack segment
            exe2bin command.exe command.com
            del command.exe
            cd ..\attrib
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cl -c -AS -Os -Zp  -I. -I..\..\h -Foattrib.obj attrib.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    attrib.c
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos attriba.asm,attriba.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _parse.asm,_parse.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            buildmsg ..\..\messages\usa-ms attrib.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [attrib.skl]
    Utility Name = [ATTRIB]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [ATTRIB.CL1]
    Created include file [ATTRIB.CL2]
    Created include file [ATTRIB.CLA]
    Created include file [ATTRIB.CLB]
    Completed [ATTRIB.CL1]
    Completed [ATTRIB.CL2]
    Completed [ATTRIB.CLA]
    Completed [ATTRIB.CLB]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _msgret.asm,_msgret.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class 1 
    ... Including message Class 2 
            link @attrib.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: ATTRIBA+
    Object Modules [.OBJ]: ATTRIB+
    Object Modules [.OBJ]: _PARSE+
    Object Modules [.OBJ]: _MSGRET
    Run File [ATTRIBA.EXE]: ATTRIB
    List File [NUL.MAP]: NUL;
            cd ..\assign
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms assign.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [assign.skl]
    Utility Name = [ASSIGN]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [ASSIGN.CL2]
    Created include file [ASSIGN.CLA]
    Created include file [ASSIGN.CL1]
    Completed [ASSIGN.CL2]
    Completed [ASSIGN.CLA]
    Completed [ASSIGN.CL1]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos assgmain.asm,assgmain.obj;
    ... for DOS Version 4.00 ... 
    ... CLONE version build switch on ... 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos assgparm.asm,assgparm.obj;
    COMPONENT=ASSIGN, MODULE=ASSPARM.SAL... 
    COMPONENT=ASSIGN, SUBCOMPONENT=PARSE, MODULE=PARSE.ASM... 
    COMPONENT=ASSIGN, SUBCOMPONENT=PARSE, MODULE=PSDATA.INC... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            link assgmain.obj+assgparm.obj,assign,,;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    LINK : warning L4021: no stack segment
            exe2bin assign.exe  assign.com
            del assign.exe
            cd ..\chkdsk
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos chkdsk1.asm,chkdsk1.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    IOCTL.INC... 
    DOSSYM in Pass 2 
    BPB.INC... 
    IOCTL.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos chkdsk2.asm,chkdsk2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos chkproc.asm,chkproc.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos chkproc2.asm,chkproc2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos chkprmt.asm,chkprmt.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos chkdisk.asm,chkdisk.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos chkfat.asm,chkfat.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos chkinit.asm,chkinit.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
    IOCTL.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
    IOCTL.INC... 
            buildmsg ..\..\messages\usa-ms chkdsk.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [chkdsk.skl]
    Utility Name = [CHKDSK]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 25000 bytes)
    Created include file [CHKDSK.CLA]
    Created include file [CHKDSK.CLB]
    Created include file [CHKDSK.CLC]
    Created include file [CHKDSK.CLD]
    Created include file [CHKDSK.CL1]
    Created include file [CHKDSK.CL2]
    Completed [CHKDSK.CLA]
    Completed [CHKDSK.CLB]
    Completed [CHKDSK.CLC]
    Completed [CHKDSK.CLD]
    Completed [CHKDSK.CL1]
    Completed [CHKDSK.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos chkdisp.asm,chkdisp.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class C 
    ... Including message Class D 
    ... Including message Class 1 
    ... Including message Class 2 
            link @chkdsk.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: CHKDISK+
    Object Modules [.OBJ]: CHKDISP+
    Object Modules [.OBJ]: CHKDSK1+
    Object Modules [.OBJ]: CHKDSK2+
    Object Modules [.OBJ]: CHKFAT+
    Object Modules [.OBJ]: CHKINIT+
    Object Modules [.OBJ]: CHKPRMT+
    Object Modules [.OBJ]: CHKPROC2+
    Object Modules [.OBJ]: CHKPROC
    Run File [CHKDISK.EXE]: CHKDSK.EXE,CHKDSK.MAP ;
            convert chkdsk.exe
    chkdsk.exe => chkdsk.com [OK]
            cd ..\debug
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos debug.asm,debug.obj;
    COMPONENT=DEBUG, MODULE=DEBUG 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    Including DEBEQU.ASM... 
    Including ..SYSVER.FAL.. 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos debcom1.asm,debcom1.obj;
    COMPONENT=DEBUG, MODULE=DEBCOM1 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    Including DEBEQU.ASM... 
    Including ..SYSVER.FAL.. 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos debcom2.asm,debcom2.obj;
    COMPONENT=DEBUG, MODULE=DEBCOM2 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    Including DEBEQU.ASM... 
    Including ..SYSVER.FAL.. 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos debcom3.asm,debcom3.obj;
    COMPONENT=DEBUG, MODULE=DEBCOM3 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    Including DEBEQU.ASM... 
    Including ..SYSVER.FAL.. 
    CHECKNONE... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    CHECKNONE... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos debems.asm,debems.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    Including DEBEQU.ASM... 
    Including ..SYSVER.FAL.. 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos debasm.asm,debasm.obj;
    COMPONENT=DEBUG, MODULE=DEBASM 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    Including DEBEQU.ASM... 
    Including ..SYSVER.FAL.. 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos debuasm.asm,debuasm.obj;
    COMPONENT=DEBUG, MODULE=DEBUASM 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    Including DEBEQU.ASM... 
    Including ..SYSVER.FAL.. 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos deberr.asm,deberr.obj;
    COMPONENT=DEBUG, MODULE=DEBERR 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    Including DEBEQU.ASM... 
    Including ..SYSVER.FAL.. 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos debconst.asm,debconst.obj;
    COMPONENT=DEBUG, MODULE=DEBCONST 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    Including DEBEQU.ASM... 
    Including ..SYSVER.FAL.. 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos debdata.asm,debdata.obj;
    COMPONENT=DEBUG, MODULE=DEBDATA 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    Including DEBEQU.ASM... 
    Including ..SYSVER.FAL.. 
    DOSSYM in Pass 2 
    BPB.INC... 
            buildmsg ..\..\messages\usa-ms debug.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [debug.skl]
    Utility Name = [DEBUG]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 26000 bytes)
    Created include file [DEBUG.CL1]
    Created include file [DEBUG.CLA]
    Created include file [DEBUG.CLB]
    Created include file [DEBUG.CLC]
    Created include file [DEBUG.CLD]
    Created include file [DEBUG.CL2]
    Completed [DEBUG.CL1]
    Completed [DEBUG.CLA]
    Completed [DEBUG.CLB]
    Completed [DEBUG.CLC]
    Completed [DEBUG.CLD]
    Completed [DEBUG.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos debmes.asm,debmes.obj;
    COMPONENT=DEBUG, MODULE=DEBMES 
    ... for DOS Version 4.00 ... 
    Including ..SYSVER.FAL.. 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class C 
    ... Including message Class D 
    ... Including message Class 1 
    ... Including message Class 2 
            link @debug.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: DEBUG+
    Object Modules [.OBJ]: DEBCOM1+
    Object Modules [.OBJ]: DEBCOM2+
    Object Modules [.OBJ]: DEBCOM3+
    Object Modules [.OBJ]: DEBASM+
    Object Modules [.OBJ]: DEBUASM+
    Object Modules [.OBJ]: DEBERR+
    Object Modules [.OBJ]: DEBCONST+
    Object Modules [.OBJ]: DEBMES+
    Object Modules [.OBJ]: DEBEMS+
    Object Modules [.OBJ]: DEBDATA
    Run File [DEBUG.EXE]: DEBUG.EXE;
            convert debug.exe
    debug.exe => debug.com [OK]
            del debug.exe
            cd ..\edlin
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos edlin.asm,edlin.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos edlcmd1.asm,edlcmd1.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos edlcmd2.asm,edlcmd2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            buildmsg ..\..\messages\usa-ms edlin.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [edlin.skl]
    Utility Name = [EDLIN]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [EDLIN.CL1]
    Created include file [EDLIN.CLA]
    Created include file [EDLIN.CLB]
    Created include file [EDLIN.CLC]
    Created include file [EDLIN.CL2]
    Completed [EDLIN.CL1]
    Completed [EDLIN.CLA]
    Completed [EDLIN.CLB]
    Completed [EDLIN.CLC]
    Completed [EDLIN.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos edlmes.asm,edlmes.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class C 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos edlparse.asm,edlparse.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            link @edlin.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: EDLIN+
    Object Modules [.OBJ]: EDLCMD1+
    Object Modules [.OBJ]: EDLCMD2+
    Object Modules [.OBJ]: EDLMES+
    Object Modules [.OBJ]: EDLPARSE
    Run File [EDLIN.EXE]: EDLIN.EXE;
            convert edlin.exe
    edlin.exe => edlin.com [OK]
            del edlin.exe
            cd ..\exe2bin
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos display.asm,display.obj;
            buildmsg ..\..\messages\usa-ms exe2bin.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [exe2bin.skl]
    Utility Name = [EXE2BIN]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [EXE2BIN.CL1]
    Created include file [EXE2BIN.CL2]
    Created include file [EXE2BIN.CLA]
    Created include file [EXE2BIN.CLB]
    Completed [EXE2BIN.CL1]
    Completed [EXE2BIN.CL2]
    Completed [EXE2BIN.CLA]
    Completed [EXE2BIN.CLB]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos e2binit.asm,e2binit.obj;
    ... for DOS Version 4.00 ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    ... CLONE version build switch on ... 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class 1 
    ... Including message Class 2 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
    DOSSYM in Pass 2 
    BPB.INC... 
            link @exe2bin.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: /DOSSEG /MAP /E+
    Object Modules [.OBJ]: E2BINIT.OBJ+
    Object Modules [.OBJ]: DISPLAY.OBJ
    Run File [E2BINIT.EXE]: EXE2BIN.EXE, EXE2BIN.MAP;
            cd ..\find
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms find.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [find.skl]
    Utility Name = [FIND]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [FIND.CL1]
    Created include file [FIND.CL2]
    Created include file [FIND.CLA]
    Completed [FIND.CL1]
    Completed [FIND.CL2]
    Completed [FIND.CLA]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos find.asm,find.obj;
    ... for DOS Version 4.00 ... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos findmes.asm,findmes.obj;
            link find+findmes,find.exe/ex;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

            cd ..\fc
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cl -c -AS -Os -Zp  -I. -I..\..\h -Fofc.obj fc.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    fc.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Foerror.obj error.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    error.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fofgetl.obj fgetl.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    fgetl.c
            masm -Mx -t  -I. -I..\..\INC -I..\..\DOS getl.asm,getl.obj;
    ... CLONE version build switch on ... 
    cMacros Version 1.04 
    ! Small Model 
            masm -Mx -t  -I. -I..\..\INC -I..\..\DOS itoupper.asm,itoupper.obj;
    ... CLONE version build switch on ... 
    cMacros Version 1.04 
    ! Small Model 
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fo..\..\INC\kstring.obj ..\..\INC\kstring.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    ..\..\INC\kstring.c
            masm -Mx -t  -I. -I..\..\INC -I..\..\DOS maxmin.asm,maxmin.obj;
    ... CLONE version build switch on ... 
    cMacros Version 1.04 
    ! Small Model 
            masm -Mx -t  -I. -I..\..\INC -I..\..\DOS move.asm,move.obj;
    ... CLONE version build switch on ... 
    cMacros Version 1.04 
    ! Small Model 
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fontoi.obj ntoi.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    ntoi.c
            masm -Mx -t  -I. -I..\..\INC -I..\..\DOS string.asm,string.obj;
    ... CLONE version build switch on ... 
    cMacros Version 1.04 
    ! Small Model 
            cl -c -AS -Os -Zp  -I. -I..\..\h -Foupdate.obj update.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    update.c
            masm -Mx -t  -I. -I..\..\INC -I..\..\DOS xtab.asm,xtab.obj;
    ... CLONE version build switch on ... 
    cMacros Version 1.04 
    ! Small Model 
            masm -Mx -t  -I. -I..\..\INC -I..\..\DOS messages.asm,messages.obj;
            link @fc.lnk;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: FC.OBJ ERROR.OBJ FGETL.OBJ GETL.OBJ ITOUPPER.OBJ ..\..\INC\KSTRING.OBJ +
    Object Modules [.OBJ]: MAXMIN.OBJ MOVE.OBJ NTOI.OBJ STRING.OBJ UPDATE.OBJ XTAB.OBJ MESSAGES.OBJ
    Run File [FC.EXE]: FC.EXE
    List File [NUL.MAP]: 
            cd ..\format
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos format.asm,format.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    IOCTL.INC... 
    ... CLONE version build switch on ... 
    BPB.INC... 
    IOCTL.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos forproc.asm,forproc.obj;
    IOCTL.INC... 
    BPB.INC... 
    IOCTL.INC... 
    BPB.INC... 
            copy ..\..\boot\boot.cl1
            1 File(s) copied
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos msfor.asm,msfor.obj;
    ..filesize.inc 
    IOCTL.INC... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    BOOTFORM.INC... 
    ..filesize.inc 
    IOCTL.INC... 
    BPB.INC... 
    BOOTFORM.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos forexec.asm,forexec.obj;
    ASSEMBLING: DOS 3.3 FORMAT EXEC LOADER 

            buildmsg ..\..\messages\usa-ms format.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [format.skl]
    Utility Name = [FORMAT]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 25000 bytes)
    Created include file [FORMAT.CL1]
    Created include file [FORMAT.CLA]
    Created include file [FORMAT.CLB]
    Created include file [FORMAT.CLC]
    Created include file [FORMAT.CL2]
    Completed [FORMAT.CL1]
    Completed [FORMAT.CLA]
    Completed [FORMAT.CLB]
    Completed [FORMAT.CLC]
    Completed [FORMAT.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos display.asm,display.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class C 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos forinit.asm,forinit.obj;
    IOCTL.INC... 
    BPB.INC... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
    IOCTL.INC... 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos forlabel.asm,forlabel.obj;
            link  @format.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: DISPLAY.OBJ+
    Object Modules [.OBJ]: FORINIT.OBJ+
    Object Modules [.OBJ]: FORLABEL.OBJ+
    Object Modules [.OBJ]: FORMAT.OBJ+
    Object Modules [.OBJ]: FORPROC.OBJ+
    Object Modules [.OBJ]: MSFOR.OBJ+
    Object Modules [.OBJ]: FOREXEC.OBJ
    Run File [DISPLAY.EXE]: FORMAT.EXE,FORMAT.MAP;
            convert format.exe
    format.exe => format.com [OK]
            del format.exe
            cd ..\join
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cl -c -AS -Os -Zp  -I. -I..\..\h -Fojoin.obj join.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    join.c
            buildmsg ..\..\messages\usa-ms join.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [join.skl]
    Utility Name = [JOIN]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [JOIN.CL1]
    Created include file [JOIN.CL2]
    Created include file [JOIN.CLA]
    Completed [JOIN.CL1]
    Completed [JOIN.CL2]
    Completed [JOIN.CLA]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _msgret.asm,_msgret.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _parse.asm,_parse.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            link @join.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: JOIN.OBJ+
    Object Modules [.OBJ]: ..\..\INC\ERRTST.OBJ+
    Object Modules [.OBJ]: ..\..\INC\SYSVAR.OBJ+
    Object Modules [.OBJ]: ..\..\INC\CDS.OBJ+
    Object Modules [.OBJ]: ..\..\INC\DPB.OBJ+
    Object Modules [.OBJ]: _MSGRET.OBJ+
    Object Modules [.OBJ]: _PARSE.OBJ
    Run File [JOIN.EXE]: JOIN
    List File [NUL.MAP]: NUL
    Libraries [.LIB]: ..\..\INC\COMSUBS.LIB+
    Libraries [.LIB]: ..\..\MAPPER\MAPPER.LIB;
            cd ..\more
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms more.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [more.skl]
    Utility Name = [MORE]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [MORE.CLA]
    Created include file [MORE.CL1]
    Created include file [MORE.CL2]
    Completed [MORE.CLA]
    Completed [MORE.CL1]
    Completed [MORE.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos more.asm,more.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class 1 
    ... Including message Class 2 
    ... Including message Class A 
            link @more.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: MORE;
    LINK : warning L4021: no stack segment
            exe2bin more.exe more.com
            del more.exe
            cd ..\print
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms print.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [print.skl]
    Utility Name = [PRINT]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [PRINT.CL1]
    Created include file [PRINT.CL2]
    Created include file [PRINT.CLA]
    Created include file [PRINT.CLB]
    Created include file [PRINT.CLC]
    Created include file [PRINT.CLD]
    Completed [PRINT.CL1]
    Completed [PRINT.CL2]
    Completed [PRINT.CLA]
    Completed [PRINT.CLB]
    Completed [PRINT.CLC]
    Completed [PRINT.CLD]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos print_r.asm,print_r.obj;
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... for DOS Version 4.00 ... 
    ... for DOS Version 4.00 ... 
    DEVSYM.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos print_rm.asm,print_rm.obj;
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... for DOS Version 4.00 ... 
    ... for DOS Version 4.00 ... 
    DEVSYM.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos print_t.asm,print_t.obj;
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... for DOS Version 4.00 ... 
    ... for DOS Version 4.00 ... 
    DEVSYM.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos print_tm.asm,print_tm.obj;
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... for DOS Version 4.00 ... 
    ... for DOS Version 4.00 ... 
    ... Including message Class 1 
    ... Including message Class 2 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class C 
    ... Including message Class D 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
    DEVSYM.INC... 
            link @print.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: PRINT_RM+PRINT_R+PRINT_T+PRINT_TM,PRINT,PRINT.MAP /M;
            convert print.exe
    print.exe => print.com [OK]
            del print.exe
            cd ..\recover
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms recover.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [recover.skl]
    Utility Name = [RECOVER]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [RECOVER.CLA]
    Created include file [RECOVER.CL1]
    Created include file [RECOVER.CL2]
    Completed [RECOVER.CLA]
    Completed [RECOVER.CL1]
    Completed [RECOVER.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos recover.asm,recover.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos recproc.asm,recproc.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos recinit.asm,recinit.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
    DOSSYM in Pass 2 
    BPB.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos recdisp.asm,recdisp.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
    DOSSYM in Pass 2 
    BPB.INC... 
            link @recover.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: RECDISP+
    Object Modules [.OBJ]: RECINIT+
    Object Modules [.OBJ]: RECPROC+
    Object Modules [.OBJ]: RECOVER
    Run File [RECDISP.EXE]: RECOVER.EXE,RECOVER.MAP ;
            convert recover.exe
    recover.exe => recover.com [OK]
            cd ..\sort
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms sort.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [sort.skl]
    Utility Name = [SORT]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [SORT.CL1]
    Created include file [SORT.CL2]
    Created include file [SORT.CLA]
    Completed [SORT.CL1]
    Completed [SORT.CL2]
    Completed [SORT.CLA]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos sort.asm,sort.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos sortmes.asm,sortmes.obj;
            link sort+sortmes,sort.exe;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

            exefix sort.exe 1 1
            cd ..\subst
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cl -c -AS -Os -Zp  -I. -I..\..\h -Fosubst.obj subst.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    subst.c
            buildmsg ..\..\messages\usa-ms subst.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [subst.skl]
    Utility Name = [SUBST]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [SUBST.CL1]
    Created include file [SUBST.CL2]
    Created include file [SUBST.CLA]
    Completed [SUBST.CL1]
    Completed [SUBST.CL2]
    Completed [SUBST.CLA]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _msgret.asm,_msgret.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _parse.asm,_parse.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            link @subst.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: SUBST.OBJ+
    Object Modules [.OBJ]: ..\..\INC\ERRTST.OBJ+
    Object Modules [.OBJ]: ..\..\INC\SYSVAR.OBJ+
    Object Modules [.OBJ]: ..\..\INC\CDS.OBJ+
    Object Modules [.OBJ]: ..\..\INC\DPB.OBJ+
    Object Modules [.OBJ]: _MSGRET.OBJ+
    Object Modules [.OBJ]: _PARSE.OBJ
    Run File [SUBST.EXE]: SUBST
    List File [NUL.MAP]: NUL
    Libraries [.LIB]: ..\..\INC\COMSUBS.LIB+
    Libraries [.LIB]: ..\..\MAPPER\MAPPER.LIB;
            cd ..\sys
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms sys.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [sys.skl]
    Utility Name = [SYS]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [SYS.CL1]
    Created include file [SYS.CL2]
    Created include file [SYS.CLA]
    Created include file [SYS.CLB]
    Created include file [SYS.CLC]
    Created include file [SYS.CLD]
    Completed [SYS.CL1]
    Completed [SYS.CL2]
    Completed [SYS.CLA]
    Completed [SYS.CLB]
    Completed [SYS.CLC]
    Completed [SYS.CLD]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos sys1.asm,sys1.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    IOCTL.INC... 
    BOOTFORM.INC... 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    DOSSYM in Pass 2 
    BPB.INC... 
    IOCTL.INC... 
    BOOTFORM.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos syssr.asm,syssr.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    IOCTL.INC... 
    BOOTFORM.INC... 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    ... for DOS Version 4.00 ... 
    ... Including message Class 1 
    ... Including message Class 2 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class C 
    ... Including message Class D 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
    DOSSYM in Pass 2 
    BPB.INC... 
    IOCTL.INC... 
    BOOTFORM.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos sys2.asm,sys2.obj;
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    IOCTL.INC... 
    BOOTFORM.INC... 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    DOSSYM in Pass 2 
    BPB.INC... 
    IOCTL.INC... 
    BOOTFORM.INC... 
            link @sys.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: SYS1+SYS2+SYSSR,SYS,SYS.MAP /M;
    LINK : warning L4021: no stack segment
            exe2bin sys.exe sys.com
            del sys.exe
            cd ..\share
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms share.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [share.skl]
    Utility Name = [SHARE]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [SHARE.CL1]
    Created include file [SHARE.CL2]
    Created include file [SHARE.CLA]
    Completed [SHARE.CL1]
    Completed [SHARE.CL2]
    Completed [SHARE.CLA]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos gshare.asm,gshare.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    mft_enter... pass 1 
    MFTclose... pass 1 
    MFTclU... pass 1 
    MFTcloseP... pass 1 
    MFTcloN... pass 1 
    Set_Mult_Block... pass 1 
    Load_Regs... pass 1 
    clr_mult_block... pass 1 
    Clr_List... pass 1 
    Set_Block... pass 1 
    Clr_Block... pass 1 
    CLP... pass 1 
    Chk_Block... pass 1 
    MFT_get... pass 1 
    ASC... pass 1 
    BCS... pass 1 
    CSL... pass 1 
    CUC... pass 1 
    CSI... pass 1 
    GOM... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    mft_enter... pass 2 
    MFTclose... pass 2 
    MFTclU... pass 2 
    MFTcloseP... pass 2 
    MFTcloN... pass 2 
    Set_Mult_Block... pass 2 
    Load_Regs... pass 2 
    clr_mult_block... pass 2 
    Clr_List... pass 2 
    Set_Block... pass 2 
    Clr_Block... pass 2 
    CLP... pass 2 
    Chk_Block... pass 2 
    MFT_get... pass 2 
    ASC... pass 2 
    BCS... pass 2 
    CSL... pass 2 
    CUC... pass 2 
    CSI... pass 2 
    GOM... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos gshare2.asm,gshare2.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    ... for DOS Version 4.00 ... 
    FNM... pass 1 
    GCM... pass 1 
    RMN... pass 1 
    MRG... pass 1 
    RSC... pass 1 
    SLE... pass 1 
    OFL... pass 1 
    CPS... pass 1 
    CPJ... pass 1 
    SFM... pass 1 
    ShChk... pass 1 
    ShSave... pass 1 
    ShCol... pass 1 
    ShCloseFile... pass 1 
    ShSU... pass 1 
    New_Sft... pass 1 
    Call_IFS... pass 1 
    INTERR... pass 1 
    EcritShare... pass 1 
    LcritShare... pass 1 
    Init... pass 1 
    SHAREINIT... pass 1 
    ShLoadMsg... pass 1 
    ShDispMsg... pass 1 
    ShComndParse... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    FNM... pass 2 
    GCM... pass 2 
    RMN... pass 2 
    MRG... pass 2 
    RSC... pass 2 
    SLE... pass 2 
    OFL... pass 2 
    CPS... pass 2 
    CPJ... pass 2 
    SFM... pass 2 
    ShChk... pass 2 
    ShSave... pass 2 
    ShCol... pass 2 
    ShCloseFile... pass 2 
    ShSU... pass 2 
    New_Sft... pass 2 
    Call_IFS... pass 2 
    INTERR... pass 2 
    EcritShare... pass 2 
    LcritShare... pass 2 
    Init... pass 2 
    SHAREINIT... pass 2 
    ShLoadMsg... pass 2 
    ShDispMsg... pass 2 
    ShComndParse... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos sharesr.asm,sharesr.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos sharelnk.asm,sharelnk.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    LCRITDEVICE... pass 1 
    SETMEM... pass 1 
    SKIPONE... pass 1 
    TWOESC... pass 1 
    $STD_CON_STRING_INPUT_NO_ECHO... pass 1 
    $STD_CON_INPUT_NO_ECHO... pass 1 
    INT2F... pass 1 
    $dup_pdb... pass 1 
    LEAVEDOS... pass 1 
    GETCH... pass 1 
    COPYONE... pass 1 
    $SETDPB... pass 1 
    CALL_ENTRY... pass 1 
    ECRITDISK... pass 1 
    COPYLIN... pass 1 
    LCRITDISK... pass 1 
    QUIT... pass 1 
    BACKSP... pass 1 
    DIVOV... pass 1 
    STAY_RESIDENT... pass 1 
    CTRLZ... pass 1 
    EXITINS... pass 1 
    OKCALL... pass 1 
    SKIPSTR... pass 1 
    ABSDWRT... pass 1 
    BADCALL... pass 1 
    REEDIT... pass 1 
    INULDEV... pass 1 
    ABSDRD... pass 1 
    SNULDEV... pass 1 
    COPYSTR... pass 1 
    ECRITDEVICE... pass 1 
    COMMAND... pass 1 
    ENTERINS... pass 1 
    DEVIOCALL2... pass 1 
    FASTOPENTABLE... pass 1 
    HEADER... pass 1 
    SYSINITTABLE... pass 1 
    FETCHI_TAG... pass 1 
    IFS_DOSCALL... pass 1 
    KILNEW... pass 1 
    PACKET_TEMP... pass 1 
    Swap_in_DOS_Len... pass 1 
    swap_always_area... pass 1 
    swap_always_area_len... pass 1 
    swap_in_dos... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    LCRITDEVICE... pass 2 
    SETMEM... pass 2 
    SKIPONE... pass 2 
    TWOESC... pass 2 
    $STD_CON_STRING_INPUT_NO_ECHO... pass 2 
    $STD_CON_INPUT_NO_ECHO... pass 2 
    INT2F... pass 2 
    $dup_pdb... pass 2 
    LEAVEDOS... pass 2 
    GETCH... pass 2 
    COPYONE... pass 2 
    $SETDPB... pass 2 
    CALL_ENTRY... pass 2 
    ECRITDISK... pass 2 
    COPYLIN... pass 2 
    LCRITDISK... pass 2 
    QUIT... pass 2 
    BACKSP... pass 2 
    DIVOV... pass 2 
    STAY_RESIDENT... pass 2 
    CTRLZ... pass 2 
    EXITINS... pass 2 
    OKCALL... pass 2 
    SKIPSTR... pass 2 
    ABSDWRT... pass 2 
    BADCALL... pass 2 
    REEDIT... pass 2 
    INULDEV... pass 2 
    ABSDRD... pass 2 
    SNULDEV... pass 2 
    COPYSTR... pass 2 
    ECRITDEVICE... pass 2 
    COMMAND... pass 2 
    ENTERINS... pass 2 
    DEVIOCALL2... pass 2 
    FASTOPENTABLE... pass 2 
    HEADER... pass 2 
    SYSINITTABLE... pass 2 
    FETCHI_TAG... pass 2 
    IFS_DOSCALL... pass 2 
    KILNEW... pass 2 
    PACKET_TEMP... pass 2 
    Swap_in_DOS_Len... pass 2 
    swap_always_area... pass 2 
    swap_always_area_len... pass 2 
    swap_in_dos... pass 2 
            link @share.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: GSHARE+
    Object Modules [.OBJ]: GSHARE2+
    Object Modules [.OBJ]: SHARESR+
    Object Modules [.OBJ]: SHARELNK+
    Object Modules [.OBJ]: ..\..\INC\NIBDOS+
    Object Modules [.OBJ]: ..\..\INC\CONST2+
    Object Modules [.OBJ]: ..\..\INC\MSDATA+
    Object Modules [.OBJ]: ..\..\INC\MSDOSME
    Run File [GSHARE.EXE]: SHARE,SHARE.MAP /M;
            cd ..\nlsfunc
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms nlsfunc.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [nlsfunc.skl]
    Utility Name = [NLSFUNC]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [NLSFUNC.CL2]
    Created include file [NLSFUNC.CLA]
    Created include file [NLSFUNC.CL1]
    Completed [NLSFUNC.CL2]
    Completed [NLSFUNC.CLA]
    Completed [NLSFUNC.CL1]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos nlsfunc.asm,nlsfunc.obj;
    DEVSYM.INC... 
    ... for DOS Version 4.00 ... 
    ... Including message Class 1 
    ... Including message Class 2 
    ... Including message Class A 
    DEVSYM.INC... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos nlsparm.asm,nlsparm.obj;
    COMPONENT=NLSFUNC, MODULE=NLSPARM.SAL... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            link nlsfunc+nlsparm;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

            cd ..\ifsfunc
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos ifssess.asm,ifssess.obj;
    INSTALLED version                                                ;AN000; 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    IFS_ASSOPER... pass 1 
    RETURN_ASSIGN_MODE... pass 1 
    SET_ASSIGN_MODE... pass 1 
    GET_IFSFUNC_ITEM... pass 1 
    ATTACH_START... pass 1 
    ATTACH_END... pass 1 
    IFS_RESET_ENVIRONMENT... pass 1 
    IFS_ABORT... pass 1 
    GET_IFS_DRIVER_NAME... pass 1 
    FIND_IFS_DRIVER... pass 1 
    AssignOn... pass 1 
    AssignOff... pass 1 
    PrintOn... pass 1 
    PrintOff... pass 1 
    GET_UNC_ITEM_INFO... pass 1 
    CHECK_END_SPACE... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    IFS_ASSOPER... pass 2 
    RETURN_ASSIGN_MODE... pass 2 
    SET_ASSIGN_MODE... pass 2 
    GET_IFSFUNC_ITEM... pass 2 
    ***** Possible stack size error in GET_IFSFUNC_ITEM ***** 
    ATTACH_START... pass 2 
    ***** Possible stack size error in ATTACH_START ***** 
    ATTACH_END... pass 2 
    IFS_RESET_ENVIRONMENT... pass 2 
    IFS_ABORT... pass 2 
    GET_IFS_DRIVER_NAME... pass 2 
    FIND_IFS_DRIVER... pass 2 
    AssignOn... pass 2 
    AssignOff... pass 2 
    PrintOn... pass 2 
    PrintOff... pass 2 
    GET_UNC_ITEM_INFO... pass 2 
    ***** Possible stack size error in GET_UNC_ITEM_INFO ***** 
    CHECK_END_SPACE... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos ifsdir.asm,ifsdir.obj;
    INSTALLED version                                                ;AN000; 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    IFS_RMDIR... pass 1 
    IFS_MKDIR... pass 1 
    IFS_CHDIR... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    IFS_RMDIR... pass 2 
    IFS_MKDIR... pass 2 
    IFS_CHDIR... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos ifsfile.asm,ifsfile.obj;
    INSTALLED version                                                ;AN000; 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    IFS_DISK_INFO... pass 1 
    IFS_SEQ_SET_FILE_ATTRIBUTE... pass 1 
    IFS_SET_FILE_ATTRIBUTE... pass 1 
    IFS_SEQ_GET_FILE_INFO... pass 1 
    IFS_GET_FILE_INFO... pass 1 
    IFS_SEQ_RENAME... pass 1 
    IFS_RENAME... pass 1 
    IFS_SEQ_DELETE... pass 1 
    IFS_DELETE... pass 1 
    IFS_SEQ_OPEN... pass 1 
    IFS_OPEN... pass 1 
    IFS_SEQ_CREATE... pass 1 
    IFS_CREATE... pass 1 
    IFS_SEQ_XOPEN... pass 1 
    IFS_XOPEN... pass 1 
    IFS_SEQ_SEARCH_FIRST... pass 1 
    IFS_SEQ_SEARCH_NEXT... pass 1 
    IFS_SEARCH_FIRST... pass 1 
    IFS_SEARCH_NEXT... pass 1 
    OPEN_CHECK_DEVICE... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    IFS_DISK_INFO... pass 2 
    ***** Possible stack size error in IFS_DISK_INFO ***** 
    IFS_SEQ_SET_FILE_ATTRIBUTE... pass 2 
    IFS_SET_FILE_ATTRIBUTE... pass 2 
    IFS_SEQ_GET_FILE_INFO... pass 2 
    IFS_GET_FILE_INFO... pass 2 
    ***** Possible stack size error in IFS_GET_FILE_INFO ***** 
    IFS_SEQ_RENAME... pass 2 
    IFS_RENAME... pass 2 
    IFS_SEQ_DELETE... pass 2 
    IFS_DELETE... pass 2 
    IFS_SEQ_OPEN... pass 2 
    IFS_OPEN... pass 2 
    IFS_SEQ_CREATE... pass 2 
    IFS_CREATE... pass 2 
    IFS_SEQ_XOPEN... pass 2 
    IFS_XOPEN... pass 2 
    ***** Possible stack size error in IFS_XOPEN ***** 
    IFS_SEQ_SEARCH_FIRST... pass 2 
    IFS_SEQ_SEARCH_NEXT... pass 2 
    IFS_SEARCH_FIRST... pass 2 
    ***** Possible stack size error in IFS_SEARCH_FIRST ***** 
    IFS_SEARCH_NEXT... pass 2 
    OPEN_CHECK_DEVICE... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos ifshand.asm,ifshand.obj;
    INSTALLED version                                                ;AN000; 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    IFS_CLOSE... pass 1 
    IFS_COMMIT... pass 1 
    IFS_LSEEK... pass 1 
    IFS_READ... pass 1 
    IFS_WRITE... pass 1 
    IFS_XLOCK... pass 1 
    IFS_FILE_XATTRIBUTES... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    IFS_CLOSE... pass 2 
    ***** Possible stack size error in IFS_CLOSE ***** 
    IFS_COMMIT... pass 2 
    ***** Possible stack size error in IFS_COMMIT ***** 
    IFS_LSEEK... pass 2 
    IFS_READ... pass 2 
    IFS_WRITE... pass 2 
    IFS_XLOCK... pass 2 
    IFS_FILE_XATTRIBUTES... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos ifsdev.asm,ifsdev.obj;
    INSTALLED version                                                ;AN000; 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    PRINTER_GETSET_STRING... pass 1 
    IFS_DEVICE_CHECK... pass 1 
    IFS_DEVICE_CLOSE... pass 1 
    IFS_DEVICE_OPER... pass 1 
    IFS_SPOOL_ECHO_CHECK... pass 1 
    IFS_DEPENDENT_IOCTL... pass 1 
    DEVICE_IOCTL... pass 1 
    GET_DFL_FROM_INDEX... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    PRINTER_GETSET_STRING... pass 2 
    ***** Possible stack size error in PRINTER_GETSET_STRING ***** 
    IFS_DEVICE_CHECK... pass 2 
    IFS_DEVICE_CLOSE... pass 2 
    IFS_DEVICE_OPER... pass 2 
    IFS_SPOOL_ECHO_CHECK... pass 2 
    IFS_DEPENDENT_IOCTL... pass 2 
    DEVICE_IOCTL... pass 2 
    GET_DFL_FROM_INDEX... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos ifsutil.asm,ifsutil.obj;
    INSTALLED version                                                ;AN000; 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    IFSFlushBuf... pass 1 
    IFS_UPDATE_CB... pass 1 
    SERVER_DOSCALL_CLOSEFILES_FOR_UID... pass 1 
    SERVER_IFSFUNC_DATA_AREA... pass 1 
    DRIVE_FROM_CDS... pass 1 
    DRIVE_FROM_SFT... pass 1 
    PREP_IFSR... pass 1 
    CALL_IFS... pass 1 
    CREATE_DFL_ENTRY... pass 1 
    DELETE_DFL_ENTRY... pass 1 
    DFL_SINGLE_FILE_CHECK... pass 1 
    DFL_MATCH... pass 1 
    SFT_TO_SFF... pass 1 
    SFF_TO_SFT... pass 1 
    CDS_TO_CD... pass 1 
    CD_TO_CDS... pass 1 
    DFL_TO_DF... pass 1 
    DF_TO_DFL... pass 1 
    CONSIST_SFT... pass 1 
    CONSIST_DFL... pass 1 
    PRN_CHECK... pass 1 
    CHECK_REAL_DEVICE... pass 1 
    XCHGP... pass 1 
    IFSDrvFromCDS... pass 1 
    SET_THISIFS_UNC... pass 1 
    SET_CATEGORY... pass 1 
    SET_DEPIOCTL_IFSR... pass 1 
    GET_UNC_FS_NAME... pass 1 
    MOVE_DRIVER_NAME... pass 1 
    CONVERT_NAME_ASCIIZ... pass 1 
    CHECK_SEQ... pass 1 
    INIT_DFL... pass 1 
    NET_TRANS... pass 1 
    STRIP_WFP_START... pass 1 
    CHECK_IFS_ATTRIBUTE... pass 1 
    CHECK_IFS_SUPPORT... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    IFSFlushBuf... pass 2 
    ***** Possible stack size error in IFSFlushBuf ***** 
    IFS_UPDATE_CB... pass 2 
    SERVER_DOSCALL_CLOSEFILES_FOR_UID... pass 2 
    SERVER_IFSFUNC_DATA_AREA... pass 2 
    DRIVE_FROM_CDS... pass 2 
    DRIVE_FROM_SFT... pass 2 
    PREP_IFSR... pass 2 
    CALL_IFS... pass 2 
    CREATE_DFL_ENTRY... pass 2 
    ***** Possible stack size error in CREATE_DFL_ENTRY ***** 
    DELETE_DFL_ENTRY... pass 2 
    DFL_SINGLE_FILE_CHECK... pass 2 
    DFL_MATCH... pass 2 
    SFT_TO_SFF... pass 2 
    SFF_TO_SFT... pass 2 
    CDS_TO_CD... pass 2 
    CD_TO_CDS... pass 2 
    DFL_TO_DF... pass 2 
    DF_TO_DFL... pass 2 
    CONSIST_SFT... pass 2 
    CONSIST_DFL... pass 2 
    PRN_CHECK... pass 2 
    CHECK_REAL_DEVICE... pass 2 
    ***** Possible stack size error in CHECK_REAL_DEVICE ***** 
    XCHGP... pass 2 
    IFSDrvFromCDS... pass 2 
    SET_THISIFS_UNC... pass 2 
    SET_CATEGORY... pass 2 
    SET_DEPIOCTL_IFSR... pass 2 
    GET_UNC_FS_NAME... pass 2 
    MOVE_DRIVER_NAME... pass 2 
    CONVERT_NAME_ASCIIZ... pass 2 
    CHECK_SEQ... pass 2 
    INIT_DFL... pass 2 
    NET_TRANS... pass 2 
    ***** Possible stack size error in NET_TRANS ***** 
    STRIP_WFP_START... pass 2 
    CHECK_IFS_ATTRIBUTE... pass 2 
    CHECK_IFS_SUPPORT... pass 2 
            buildmsg ..\..\messages\usa-ms ifsfunc.skl
    BuildMsg - PSP at 3b5e
    Program memory size is 20408
    Allocatable memory size is 328816
    Processing [ifsfunc.skl]
    Utility Name = [IFSFUNC]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [IFSFUNC.CL1]
    Created include file [IFSFUNC.CL2]
    Created include file [IFSFUNC.CLA]
    Completed [IFSFUNC.CL1]
    Completed [IFSFUNC.CL2]
    Completed [IFSFUNC.CLA]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos ifserror.asm,ifserror.obj;
    INSTALLED version                                                ;AN000; 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... for DOS Version 4.00 ... 
    ... Including message Class 1 
    INT_2F_5... pass 1 
    SET_EXTERR_INFO... pass 1 
    DEVICE2EXTERR... pass 1 
    IFS_I24... pass 1 
    PHONEY_DPB... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    INT_2F_5... pass 2 
    ***** Possible stack size error in INT_2F_5 ***** 
    SET_EXTERR_INFO... pass 2 
    DEVICE2EXTERR... pass 2 
    IFS_I24... pass 2 
    PHONEY_DPB... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos ifsfdos.asm,ifsfdos.obj;
    INSTALLED version                                                ;AN000; 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    SET_IFS_DOSCALL@... pass 1 
    IFSFUNC_DOSCALL@... pass 1 
    DOS_RETURN_ASSIGN_MODE... pass 1 
    DOS_TO_NET_DATE... pass 1 
    NET_TO_DOS_DATE... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    SET_IFS_DOSCALL@... pass 2 
    IFSFUNC_DOSCALL@... pass 2 
    DOS_RETURN_ASSIGN_MODE... pass 2 
    DOS_TO_NET_DATE... pass 2 
    NET_TO_DOS_DATE... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos ifsinit.asm,ifsinit.obj;
    INSTALLED version                                                ;AN000; 
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    ... for DOS Version 4.00 ... 
    GetIFSFCSinES... pass 1 
    UnusedFunc... pass 1 
    IDispatch... pass 1 
    EcritNet... pass 1 
    LcritNet... pass 1 
    EcritIFS... pass 1 
    LcritIFS... pass 1 
    IFSFINIT... pass 1 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
    ... Including message Class A 
    ... Including message Class 2 
    AUTO_ATTACH... pass 1 
    CHECK_UNC_PRESENCE... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    GetIFSFCSinES... pass 2 
    UnusedFunc... pass 2 
    IDispatch... pass 2 
    EcritNet... pass 2 
    LcritNet... pass 2 
    EcritIFS... pass 2 
    LcritIFS... pass 2 
    IFSFINIT... pass 2 
    AUTO_ATTACH... pass 2 
    CHECK_UNC_PRESENCE... pass 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos ifsflink.asm,ifsflink.obj;
    ... for DOS Version 4.00 ... 
    BPB.INC... 
    ... CLONE version build switch on ... 
    DEVSYM.INC... 
    OUTT... pass 1 
    DOSSYM in Pass 2 
    BPB.INC... 
    DEVSYM.INC... 
    OUTT... pass 2 
            link @ifsfunc.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: IFSSESS.OBJ IFSDIR.OBJ IFSFILE.OBJ IFSHAND.OBJ     +
    Object Modules [.OBJ]: IFSDEV.OBJ  IFSUTIL.OBJ IFSERROR.OBJ IFSFDOS.OBJ IFSINIT.OBJ  +
    Object Modules [.OBJ]: ..\..\INC\NIBDOS.OBJ+
    Object Modules [.OBJ]: ..\..\INC\CONST2.OBJ+
    Object Modules [.OBJ]: ..\..\INC\MSDATA.OBJ+
    Object Modules [.OBJ]: ..\..\INC\MSTABLE.OBJ+
    Object Modules [.OBJ]: ..\..\DOS\MSDISP.OBJ +
    Object Modules [.OBJ]: ..\..\DOS\MSCODE.OBJ +
    Object Modules [.OBJ]: ..\..\INC\MSDOSME.OBJ+
    Object Modules [.OBJ]: IFSFLINK.OBJ
    Run File [IFSSESS.EXE]: IFSFUNC.EXE,IFSFUNC.MAP /EX;
            cd ..\mem
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cl -c -AS -Os -Zp  -I. -I..\..\h -Fomem.obj mem.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    mem.c
            buildmsg ..\..\messages\usa-ms mem.skl
    BuildMsg - PSP at 3d5e
    Program memory size is 20920
    Allocatable memory size is 320624
    Processing [mem.skl]
    Utility Name = [MEM]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 26000 bytes)
    Created include file [MEM.CL1]
    Created include file [MEM.CLA]
    Created include file [MEM.CLB]
    Created include file [MEM.CL2]
    Completed [MEM.CL1]
    Completed [MEM.CLA]
    Completed [MEM.CLB]
    Completed [MEM.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _msgret.asm,_msgret.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _parse.asm,_parse.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            link mem+_msgret+_parse,,,..\..\lib\mem;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

            cd ..\filesys
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cl -c -AS -Os -Zp  -I. -I..\..\h -Fofilesys.obj filesys.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    filesys.c
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _parse.asm,_parse.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            buildmsg ..\..\messages\usa-ms filesys.skl
    BuildMsg - PSP at 3d5e
    Program memory size is 20920
    Allocatable memory size is 320624
    Processing [filesys.skl]
    Utility Name = [FILESYS]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [FILESYS.CL1]
    Created include file [FILESYS.CLA]
    Created include file [FILESYS.CL2]
    Completed [FILESYS.CL1]
    Completed [FILESYS.CLA]
    Completed [FILESYS.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _msgret.asm,_msgret.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            link filesys+ _parse+ _msgret; /NOI

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

            cd ..\backup
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cl -c -AS -Od -Zp  -I. -I..\..\h -Fobackup.obj backup.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    backup.c
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _parse.asm,_parse.obj;
    ... CLONE version build switch on ... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            buildmsg ..\..\messages\usa-ms backup.skl
    BuildMsg - PSP at 3d5e
    Program memory size is 20920
    Allocatable memory size is 320624
    Processing [backup.skl]
    Utility Name = [BACKUP]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [BACKUP.CLA]
    Created include file [BACKUP.CL1]
    Created include file [BACKUP.CL2]
    Completed [BACKUP.CLA]
    Completed [BACKUP.CL1]
    Completed [BACKUP.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _msgret.asm,_msgret.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            link /NOE backup + _parse + _msgret,,,..\..\mapper\mapper + ..\..\inc\comsubs;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

            convert backup.exe backup.com
    backup.exe => backup.com [OK]
    Not implemented
            del backup.exe
            cd ..\comp
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos comp1.asm,comp1.obj;
    COMPONENT=COMP, MODULE=COMP1.ASM 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos comppar.asm,comppar.obj;
    COMPONENT=COMP, MODULE=COMPPAR.SAL... ;AN000; 
    INCLUDING COMPEQ.INC...                               ;AN000; 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos compp.asm,compp.obj;
    COMPONENT=COMP, MODULE=COMPP.SAL... ;AN000; 
    COMPONENT=COMP, SUBCOMPONENT=PARSE, INCLUDED PARSE.ASM... ;AN000; 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            buildmsg ..\..\messages\usa-ms comp.skl
    BuildMsg - PSP at 3d5e
    Program memory size is 20920
    Allocatable memory size is 320624
    Processing [comp.skl]
    Utility Name = [COMP]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [COMP.CLA]
    Created include file [COMP.CL1]
    Created include file [COMP.CL2]
    Completed [COMP.CLA]
    Completed [COMP.CL1]
    Completed [COMP.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos compsm.asm,compsm.obj;
    COMPONENT=COMP, MODULE=COMPSM.SAL...             ;AN000; 
    ... for DOS Version 4.00 ... 
    INCLUDING MSGHAN.INC...;AN000; 
    COMPONENT=COMP, MODULE=COMPMS.INC...                    ;AN000; 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos comp2.asm,comp2.obj;
    COMPONENT=COMP, MODULE=COMP2.SAL 
    INCLUDING COMPEQ.INC...                               ;AN000; 
            link @comp.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: COMP1+
    Object Modules [.OBJ]: COMPPAR+
    Object Modules [.OBJ]: COMPP+
    Object Modules [.OBJ]: COMPSM+
    Object Modules [.OBJ]: COMP2,COMP,COMP.MAP/M;
    LINK : warning L4021: no stack segment
            exe2bin comp.exe comp.com
            del comp.exe
            cd ..\diskcomp
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos diskcomp.asm,diskcomp.obj;
    COMPONENT=DISKCOMP, MODULE=DISKCOMP.SAL 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    INCLUDING DCMPMACR.INC...;AN000; 
    INCLUDING DISKCOMP.EQU... 
    BOOTFORM.INC... 
    BOOTFORM.INC... 
            buildmsg ..\..\messages\usa-ms diskcomp.skl
    BuildMsg - PSP at 3d5e
    Program memory size is 20920
    Allocatable memory size is 320624
    Processing [diskcomp.skl]
    Utility Name = [DISKCOMP]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [DISKCOMP.CLA]
    Created include file [DISKCOMP.CL1]
    Created include file [DISKCOMP.CL2]
    Completed [DISKCOMP.CLA]
    Completed [DISKCOMP.CL1]
    Completed [DISKCOMP.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos dcompsm.asm,dcompsm.obj;
    COMPONENT=DISKCOMP, MODULE=DCOMPSM.SAL... ;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    ... for DOS Version 4.00 ... 
    INCLUDING MSGHAN.INC...;AN000; 
    COMPONENT=DISKCOMP, MODULE=DCOMPMS.INC...;AN000; 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos dcompp.asm,dcompp.obj;
    COMPONENT=DISKCOMP, MODULE=DCOMPP.SAL... ;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos dcomppar.asm,dcomppar.obj;
    COMPONENT=DISKCOMP, MODULE=DCOMPPAR.SAL... ;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos compinit.asm,compinit.obj;
    COMPONENT=DISKCOMP, MODULE=COMPINIT.SAL 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    INCLUDING DCMPMACR.INC...;AN000; 
    INCLUDING DISKCOMP.EQU... 
    BOOTFORM.INC... 
    BOOTFORM.INC... 
            link @diskcomp.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: DISKCOMP+
    Object Modules [.OBJ]: DCOMPSM+
    Object Modules [.OBJ]: DCOMPP+
    Object Modules [.OBJ]: DCOMPPAR+
    Object Modules [.OBJ]: COMPINIT;
    LINK : warning L4021: no stack segment
            exe2bin diskcomp.exe diskcomp.com
            del diskcomp.exe
            cd ..\diskcopy
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos diskcopy.asm,diskcopy.obj;
    COMPONENT=DISKCOPY, MODULE=DISKCOPY.SAL ; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    COMPONENT=DISKCOPY, INCLUDING DCPYMACR.INC...;AN000; 
    COMPONENT=DISKCOPY, INCLUDING DISKCOPY.EQU... ; 
    BOOTFORM.INC... 
    BOOTFORM.INC... 
            buildmsg ..\..\messages\usa-ms diskcopy.skl
    BuildMsg - PSP at 3d5e
    Program memory size is 20920
    Allocatable memory size is 320624
    Processing [diskcopy.skl]
    Utility Name = [DISKCOPY]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [DISKCOPY.CLA]
    Created include file [DISKCOPY.CL1]
    Created include file [DISKCOPY.CL2]
    Completed [DISKCOPY.CLA]
    Completed [DISKCOPY.CL1]
    Completed [DISKCOPY.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos dcopysm.asm,dcopysm.obj;
    COMPONENT=DISKCOPY, MODULE=DCOPYSM.SAL... ;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    ... for DOS Version 4.00 ... 
    INCLUDING MSGHAN.INC...;AN000; 
    COMPONENT=DISKCOPY, MODULE=DCOPYMS.INC...         ;AN000; 
    ... Including message Class 1 
    ... Including message Class 2 
    ... Including message Class A 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos dcopyp.asm,dcopyp.obj;
    COMPONENT=DISKCOPY, MODULE=DCOPYP.SAL... ;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos dcopypar.asm,dcopypar.obj;
    COMPONENT=DISKCOPY, MODULE=DCOPYPAR.SAL... ;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos copyinit.asm,copyinit.obj;
    COMPONENT=DISKCOPY, MODULE=COPYINIT.SAL 
    COMPONENT=DISKCOPY, INCLUDING DCPYMACR.INC...;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    COMPONENT=DISKCOPY, INCLUDING DISKCOPY.EQU... ; 
            link @diskcopy.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: DISKCOPY.OBJ+
    Object Modules [.OBJ]: DCOPYSM.OBJ+
    Object Modules [.OBJ]: DCOPYP.OBJ+
    Object Modules [.OBJ]: DCOPYPAR.OBJ+
    Object Modules [.OBJ]: COPYINIT.OBJ;
    LINK : warning L4021: no stack segment
            exe2bin diskcopy.exe diskcopy.com
            del diskcopy.exe
            cd ..\fdisk
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cl -c -AS -Os -Zp  -I. -I..\..\h -Fofdisk.obj fdisk.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    fdisk.c
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos reboot.asm,reboot.obj;
    ASSEMBLING: Reboot 

            nosrvbld fdisk5.skl ..\..\messages\usa-ms.msg
    Creating .CT? files for fdisk5.skl using ..\..\messages\usa-ms.msg file of messages. 

    SKL, MSG and IDX files have been opened for reading.
    Writing to fdisk5.cl1
    Message files for fdisk5.skl completed.
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos fdboot.asm,fdboot.obj;
            link fdboot;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    LINK : warning L4021: no stack segment
            exe2bin fdboot
            del fdboot.exe
            dbof fdboot.bin fdboot.inc 600 200
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos bootrec.asm,bootrec.obj;
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fodisplay.obj display.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    display.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Foinput.obj input.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    input.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fotdisplay.obj tdisplay.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    tdisplay.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fovdisplay.obj vdisplay.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    vdisplay.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fospace.obj space.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    space.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fopartinfo.obj partinfo.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    partinfo.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fovideo.obj video.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    video.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fomakepart.obj makepart.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    makepart.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Foint13.obj int13.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    int13.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fodiskout.obj diskout.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    diskout.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fomessages.obj messages.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    messages.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fofdparse.obj fdparse.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    fdparse.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Foconvert.obj convert.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    convert.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Foglobal.obj global.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    global.c
            menubld fdisk.msg  ..\..\messages\usa-ms.MSG
    Creating .C files for fdisk.msg using ..\..\messages\usa-ms.MSG file of messages. 

    All four files have been opened for menu creation.
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fofdiskm.obj fdiskm.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    fdiskm.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fomain.obj main.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    main.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Foc_menus.obj c_menus.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    c_menus.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fod_menus.obj d_menus.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    d_menus.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fomainmenu.obj mainmenu.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    mainmenu.c
            buildmsg ..\..\messages\usa-ms fdisk.skl
    BuildMsg - PSP at 415e
    Program memory size is 21944
    Allocatable memory size is 304240
    Processing [fdisk.skl]
    Utility Name = [FDISK]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 21000 bytes)
    Created include file [FDISK.CLA]
    Created include file [FDISK.CLB]
    Created include file [FDISK.CL1]
    Created include file [FDISK.CL2]
    Completed [FDISK.CLA]
    Completed [FDISK.CLB]
    Completed [FDISK.CL1]
    Completed [FDISK.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _msgret.asm,_msgret.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _parse.asm,_parse.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            cd ..\..\inc
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cd ..\cmd\fdisk
            link @fdisk.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: /DOSSEG /MAP /CPA:1000 /SEG:1024 /E+
    Object Modules [.OBJ]:  MAIN.OBJ       +
    Object Modules [.OBJ]:  MAINMENU.OBJ   +
    Object Modules [.OBJ]:  D_MENUS.OBJ    +
    Object Modules [.OBJ]:  C_MENUS.OBJ    +
    Object Modules [.OBJ]:  FDISK.OBJ      +
    Object Modules [.OBJ]:  REBOOT.OBJ     +
    Object Modules [.OBJ]:  BOOTREC.OBJ    +
    Object Modules [.OBJ]:  FDBOOT.OBJ     +
    Object Modules [.OBJ]:  DISPLAY.OBJ    +
    Object Modules [.OBJ]:  INPUT.OBJ      +
    Object Modules [.OBJ]:  TDISPLAY.OBJ   +
    Object Modules [.OBJ]:  VDISPLAY.OBJ   +
    Object Modules [.OBJ]:  SPACE.OBJ      +
    Object Modules [.OBJ]:  PARTINFO.OBJ   +
    Object Modules [.OBJ]:  VIDEO.OBJ      +
    Object Modules [.OBJ]:  MAKEPART.OBJ   +
    Object Modules [.OBJ]:  INT13.OBJ      +
    Object Modules [.OBJ]:  DISKOUT.OBJ    +
    Object Modules [.OBJ]:  MESSAGES.OBJ   +
    Object Modules [.OBJ]:  FDPARSE.OBJ    +
    Object Modules [.OBJ]:  CONVERT.OBJ    +
    Object Modules [.OBJ]:  GLOBAL.OBJ     +
    Object Modules [.OBJ]:  _PARSE.OBJ     +
    Object Modules [.OBJ]:  _MSGRET.OBJ    +
    Object Modules [.OBJ]:  FDISKM.OBJ
    Run File [MAIN.EXE]: FDISK.EXE,
    List File [C:FDISK.MAP]: FDISK.MAP,
    Libraries [.LIB]: ..\..\MAPPER\MAPPER.LIB +
    Libraries [.LIB]: ..\..\INC\COMSUBS.LIB;
            cd ..\label
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos label.asm,label.obj;
    COMPONENT=LABEL, MODULE=LABEL.SAL 
            buildmsg ..\..\messages\usa-ms labl.skl
    BuildMsg - PSP at 425e
    Program memory size is 22200
    Allocatable memory size is 300144
    Processing [labl.skl]
    Utility Name = [LABL]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [LABL.CL1]
    Created include file [LABL.CLA]
    Created include file [LABL.CL2]
    Completed [LABL.CL1]
    Completed [LABL.CLA]
    Completed [LABL.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos labelm.asm,labelm.obj;
    COMPONENT=LABEL MODULE=LABELM.SAL 
    INCLUDING SYSMSG.INC 
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            link @label.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: LABEL+
    Object Modules [.OBJ]: LABELM
    Run File [LABEL.EXE]: LABEL.EXE;
    LINK : warning L4021: no stack segment
            exe2bin label.exe label.com
            del label.exe
            cd ..\mode
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms mode.skl
    BuildMsg - PSP at 425e
    Program memory size is 22200
    Allocatable memory size is 300144
    Processing [mode.skl]
    Utility Name = [MODE]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 25000 bytes)
    Created include file [MODE.CL1]
    Created include file [MODE.CL2]
    Created include file [MODE.CLA]
    Created include file [MODE.CLB]
    Completed [MODE.CL1]
    Completed [MODE.CL2]
    Completed [MODE.CLA]
    Completed [MODE.CLB]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos main.asm,main.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos scrntab.asm,scrntab.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos modescrn.asm,modescrn.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos rescode.asm,rescode.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos modecom.asm,modecom.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos modeprin.asm,modeprin.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos modevid.asm,modevid.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos modeleng.asm,modeleng.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos modeecho.asm,modeecho.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos modecp.asm,modecp.obj;
    INCLUDE MODECPRO.INC ;MODULE PROLOGUE 
    INCLUDE MODECPEQ.INC ;MACROS,DOS EQUATES,STRUCS,OTHER EQUATES 
    INCLUDE MODECPMS.INC ;DESCRIPTIONS OF MESSAGES 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos display.asm,display.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos typamat.asm,typamat.obj;
    ... CLONE version build switch on ... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos invoke.asm,invoke.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos parshell.asm,parshell.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos modepars.asm,modepars.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos modemes.asm,modemes.obj;
    including  MODESUBS.INC 
    including  MODEDEFS.INC 
            link @mode.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: /MAP RESCODE+
    Object Modules [.OBJ]: MODEECHO+
    Object Modules [.OBJ]: MODELENG+
    Object Modules [.OBJ]: MODEMES+
    Object Modules [.OBJ]: MODESCRN+
    Object Modules [.OBJ]: MAIN+
    Object Modules [.OBJ]: MODEVID+
    Object Modules [.OBJ]: MODEPRIN+
    Object Modules [.OBJ]: MODECOM+
    Object Modules [.OBJ]: SCRNTAB+
    Object Modules [.OBJ]: MODECP+
    Object Modules [.OBJ]: DISPLAY+
    Object Modules [.OBJ]: TYPAMAT+
    Object Modules [.OBJ]: INVOKE+
    Object Modules [.OBJ]: PARSHELL+
    Object Modules [.OBJ]: MODEPARS,MODE;
    LINK : warning L4021: no stack segment
            exe2bin mode.exe mode.com
            del mode.exe
            cd ..\restore
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cd ..\..\mapper
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cd ..\cmd\restore
            cl -c -AS -Os -Zp  -I. -I..\..\h -Forestore.obj restore.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    restore.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Forestpars.obj restpars.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    restpars.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fortdo.obj rtdo.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    rtdo.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fortdo1.obj rtdo1.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    rtdo1.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fortfile.obj rtfile.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    rtfile.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fortfile1.obj rtfile1.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    rtfile1.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fortnew.obj rtnew.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    rtnew.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fortnew1.obj rtnew1.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    rtnew1.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fortold.obj rtold.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    rtold.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fortold1.obj rtold1.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    rtold1.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fortt1.obj rtt1.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    rtt1.c
            cl -c -AS -Os -Zp  -I. -I..\..\h -Fortt3.obj rtt3.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    rtt3.c
            buildmsg ..\..\messages\usa-ms restore.skl
    BuildMsg - PSP at 425e
    Program memory size is 22200
    Allocatable memory size is 300144
    Processing [restore.skl]
    Utility Name = [RESTORE]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [RESTORE.CLA]
    Created include file [RESTORE.CL1]
    Created include file [RESTORE.CL2]
    Completed [RESTORE.CLA]
    Completed [RESTORE.CL1]
    Completed [RESTORE.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _msgret.asm,_msgret.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _parse.asm,_parse.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            link @restore.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: /STACK:50000 +
    Object Modules [.OBJ]: RESTORE    +
    Object Modules [.OBJ]: RESTPARS   +
    Object Modules [.OBJ]: RTT1        +
    Object Modules [.OBJ]: RTT3        +
    Object Modules [.OBJ]: RTDO        +
    Object Modules [.OBJ]: RTDO1       +
    Object Modules [.OBJ]: RTOLD       +
    Object Modules [.OBJ]: RTOLD1      +
    Object Modules [.OBJ]: RTNEW       +
    Object Modules [.OBJ]: RTNEW1      +
    Object Modules [.OBJ]: RTFILE      +
    Object Modules [.OBJ]: RTFILE1    +
    Object Modules [.OBJ]: _PARSE      +
    Object Modules [.OBJ]: _MSGRET
    Run File [RESTORE.EXE]: RESTORE.EXE,,..\..\MAPPER\MAPPER + ..\..\INC\COMSUBS;
            convert restore.exe restore.com
    restore.exe => restore.com [OK]
    Not implemented
            erase restore.exe
            cd ..\tree
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos tree.asm,tree.obj;
    COMPONENT=TREE, MODULE=TREE.SAL... ;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    COMPONENT=TREE, MODULE=TREEQU.INC...;AN000; 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos treesysp.asm,treesysp.obj;
    COMPONENT=TREE, MODULE=TREESYSP.SAL... ;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            buildmsg ..\..\messages\usa-ms tree.skl
    BuildMsg - PSP at 425e
    Program memory size is 22200
    Allocatable memory size is 300144
    Processing [tree.skl]
    Utility Name = [TREE]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [TREE.CLA]
    Created include file [TREE.CL1]
    Created include file [TREE.CL2]
    Completed [TREE.CLA]
    Completed [TREE.CL1]
    Completed [TREE.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos treesysm.asm,treesysm.obj;
    COMPONENT=TREE, MODULE=TREESYSM.SAL... ;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    ... for DOS Version 4.00 ... 
    INCLUDING MSGHAN.INC...;AN000; 
    COMPONENT=TREE, MODULE=TREEMS.INC...;AN000; 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos treepar.asm,treepar.obj;
    COMPONENT=TREE, MODULE=TREEPAR.SAL... ;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
            link @tree.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: TREE+
    Object Modules [.OBJ]: TREEPAR+
    Object Modules [.OBJ]: TREESYSP+
    Object Modules [.OBJ]: TREESYSM;
    LINK : warning L4021: no stack segment
            exe2bin tree.exe tree.com
            del tree.exe
            cd ..\replace
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cl -c -AS -Os -Zp  -I. -I..\..\h -Foreplace.obj replace.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    replace.c
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _replace.asm,_replace.obj;
            buildmsg ..\..\messages\usa-ms replace.skl
    BuildMsg - PSP at 425e
    Program memory size is 22200
    Allocatable memory size is 300144
    Processing [replace.skl]
    Utility Name = [REPLACE]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [REPLACE.CL1]
    Created include file [REPLACE.CL2]
    Created include file [REPLACE.CLA]
    Completed [REPLACE.CL1]
    Completed [REPLACE.CL2]
    Completed [REPLACE.CLA]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _msgret.asm,_msgret.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos _parse.asm,_parse.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            link @replace.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: REPLACE.OBJ+
    Object Modules [.OBJ]: _REPLACE.OBJ+
    Object Modules [.OBJ]: _MSGRET.OBJ+
    Object Modules [.OBJ]: _PARSE.OBJ
    Run File [REPLACE.EXE]: REPLACE
    List File [NUL.MAP]: NUL
    Libraries [.LIB]: ..\..\MAPPER\MAPPER.LIB+
    Libraries [.LIB]: ..\..\INC\COMSUBS.LIB /STACK:31620;
            cd ..\xcopy
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms xcopy.skl
    BuildMsg - PSP at 425e
    Program memory size is 22200
    Allocatable memory size is 300144
    Processing [xcopy.skl]
    Utility Name = [XCOPY]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [XCOPY.CLA]
    Created include file [XCOPY.CL1]
    Created include file [XCOPY.CL2]
    Completed [XCOPY.CLA]
    Completed [XCOPY.CL1]
    Completed [XCOPY.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos xcopy.asm,xcopy.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos xcopypar.asm,xcopypar.obj;
    COMPONENT=XCOPY, MODULE=XCOPYPAR.SAL... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    COMPONENT=XCOPY, SUBCOMPONENT=PARSE 
    COMPONENT=XCOPY, SUBCOMPONENT=PARSE, MODULE=PARSE.ASM... 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos xcpyinit.asm,xcpyinit.obj;
    ... for DOS Version 4.00 ... 
            link @xcopy.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: XCOPY+
    Object Modules [.OBJ]: XCPYINIT+
    Object Modules [.OBJ]: XCOPYPAR ;
            cd ..\graftabl
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grtab.asm,grtab.obj;
    GRTAB.SAL... 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grtabp.asm,grtabp.obj;
    COMPONENT=GRAFTABL, MODULE=GRTABP.SAL... ;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            buildmsg ..\..\messages\usa-ms graftabl.skl
    BuildMsg - PSP at 425e
    Program memory size is 22200
    Allocatable memory size is 300144
    Processing [graftabl.skl]
    Utility Name = [GRAFTABL]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [GRAFTABL.CLA]
    Created include file [GRAFTABL.CL1]
    Created include file [GRAFTABL.CL2]
    Completed [GRAFTABL.CLA]
    Completed [GRAFTABL.CL1]
    Completed [GRAFTABL.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grtabsm.asm,grtabsm.obj;
    COMPONENT=GRAFTABL, MODULE=GRTABSM.SAL... ;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
    ... for DOS Version 4.00 ... 
    INCLUDING MSGHAN.INC...;AN000; 
    COMPONENT=GRAFTABL, MODULE=GRTABMS.INC...;AN000; 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grtabpar.asm,grtabpar.obj;
    COMPONENT=GRAFTABL, MODULE=GRTABPAR.SAL... ;AN000; 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grtabhan.asm,grtabhan.obj;
    COMPONENT=GRAFTABL, MODULE=GRTABHAN.SAL... 
    COMPONENT=COMMON, MODULE=PATHMAC.INC ... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grtabus.asm,grtabus.obj;
    GRTABUS.ASM... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grtabno.asm,grtabno.obj;
    GRTABNO.ASM... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grtabpo.asm,grtabpo.obj;
    GRTABPO.ASM... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grtabcf.asm,grtabcf.obj;
    GRTABCF.ASM... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grtabml.asm,grtabml.obj;
    GRTABML.ASM...  ;AN000; 
            link @graftabl.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]:  GRTABHAN+
    Object Modules [.OBJ]:  GRTABUS+
    Object Modules [.OBJ]:  GRTABML+
    Object Modules [.OBJ]:  GRTABPO+
    Object Modules [.OBJ]:  GRTABCF+
    Object Modules [.OBJ]:  GRTABNO+
    Object Modules [.OBJ]:  GRTABSM+
    Object Modules [.OBJ]:  GRTABPAR+
    Object Modules [.OBJ]:  GRTABP+
    Object Modules [.OBJ]:  GRTAB
    Run File [GRTABHAN.EXE]:        GRAFTABL.EXE;
    LINK : warning L4021: no stack segment
            exe2bin graftabl.exe graftabl.com
            del graftabl.exe
            cd ..\fastopen
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos fastopen.asm,fastopen.obj;
    ... CLONE version build switch on ... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos fastseek.asm,fastseek.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos fastinit.asm,fastinit.obj;
    ASSEMBLING: FASTINIT - FASTOPEN initialization 
    ... CLONE version build switch on ... 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos fastp.asm,fastp.obj;
    COMPONENT=fastopen, MODULE=fastp.asm... 
    COMPONENT=fastopen, SUBCOMPONENT=PARSE, MODULE=PARSE.ASM... 
    COMPONENT=fastopen, SUBCOMPONENT=PARSE, MODULE=PSDATA.INC... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            buildmsg ..\..\messages\usa-ms fastopen.skl
    BuildMsg - PSP at 425e
    Program memory size is 22200
    Allocatable memory size is 300144
    Processing [fastopen.skl]
    Utility Name = [FASTOPEN]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [FASTOPEN.CLA]
    Created include file [FASTOPEN.CL1]
    Created include file [FASTOPEN.CL2]
    Completed [FASTOPEN.CLA]
    Completed [FASTOPEN.CL1]
    Completed [FASTOPEN.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos fastsm.asm,fastsm.obj;
    COMPONENT=fastopen, MODULE=fastsm.asm... 
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class 2 
            link @fastopen.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: FASTOPEN.OBJ+
    Object Modules [.OBJ]: FASTSEEK.OBJ+
    Object Modules [.OBJ]: FASTINIT.OBJ+
    Object Modules [.OBJ]: FASTP.OBJ+
    Object Modules [.OBJ]: FASTSM.OBJ
    Run File [FASTOPEN.EXE]: FASTOPEN.EXE,/M;
            cd ..\append
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms append.skl
    BuildMsg - PSP at 425e
    Program memory size is 22200
    Allocatable memory size is 300144
    Processing [append.skl]
    Utility Name = [APPEND]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [APPEND.CLA]
    Created include file [APPEND.CLB]
    Created include file [APPEND.CL1]
    Created include file [APPEND.CL2]
    Completed [APPEND.CLA]
    Completed [APPEND.CLB]
    Completed [APPEND.CL1]
    Completed [APPEND.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos append.asm,append.obj;
    ... for DOS Version 4.00 ... 
    ... for DOS Version 4.00 ... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    ... Including message Class A 
    ... Including message Class 1 
    ... Including message Class B 
    ... Including message Class 2 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            link append;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

            cd ..\graphics
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos graphics.asm,graphics.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grint2fh.asm,grint2fh.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grpattrn.asm,grpattrn.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grctrl.asm,grctrl.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grcpsd.asm,grcpsd.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grcolprt.asm,grcolprt.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grbwprt.asm,grbwprt.obj;
            buildmsg ..\..\messages\usa-ms graphics.skl
    BuildMsg - PSP at 425e
    Program memory size is 22200
    Allocatable memory size is 300144
    Processing [graphics.skl]
    Utility Name = [GRAPHICS]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [GRAPHICS.CLA]
    Created include file [GRAPHICS.CLB]
    Created include file [GRAPHICS.CLC]
    Created include file [GRAPHICS.CL1]
    Created include file [GRAPHICS.CL2]
    Completed [GRAPHICS.CLA]
    Completed [GRAPHICS.CLB]
    Completed [GRAPHICS.CLC]
    Completed [GRAPHICS.CL1]
    Completed [GRAPHICS.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grinst.asm,grinst.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class 1 
    ... Including message Class 2 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class C 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grparse.asm,grparse.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grparms.asm,grparms.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grload.asm,grload.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grload2.asm,grload2.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos grload3.asm,grload3.obj;
            link @graphics.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: GRAPHICS+
    Object Modules [.OBJ]: GRINT2FH+
    Object Modules [.OBJ]: GRPATTRN+
    Object Modules [.OBJ]: GRCTRL+
    Object Modules [.OBJ]: GRCPSD+
    Object Modules [.OBJ]: GRCOLPRT+
    Object Modules [.OBJ]: GRBWPRT+
    Object Modules [.OBJ]: GRINST+
    Object Modules [.OBJ]: GRPARSE+
    Object Modules [.OBJ]: GRPARMS+
    Object Modules [.OBJ]: GRLOAD+
    Object Modules [.OBJ]: GRLOAD2+
    Object Modules [.OBJ]: GRLOAD3
    Run File [GRAPHICS.EXE]: GRAPHICS.EXE;
    LINK : warning L4021: no stack segment
            exe2bin graphics.exe graphics.com
            del graphics.exe
            cd ..\keyb
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos keyb.asm,keyb.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos parser.asm,parser.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            buildmsg ..\..\messages\usa-ms keyb.skl
    BuildMsg - PSP at 431e
    Program memory size is 22392
    Allocatable memory size is 297072
    Processing [keyb.skl]
    Utility Name = [KEYB]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [KEYB.CL2]
    Created include file [KEYB.CLA]
    Created include file [KEYB.CL1]
    Completed [KEYB.CL2]
    Completed [KEYB.CLA]
    Completed [KEYB.CL1]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos keybcmd.asm,keybcmd.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class 1 
    ... Including message Class 2 
    ... Including message Class A 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos keybtbbl.asm,keybtbbl.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos commsubs.asm,commsubs.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos keybi2f.asm,keybi2f.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos keybi48.asm,keybi48.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos keybcpsd.asm,keybcpsd.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos keybi9.asm,keybi9.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos keybi9c.asm,keybi9c.obj;
            link @keyb.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: KEYB+KEYBI9+KEYBI9C+KEYBI2F+KEYBI48+
    Object Modules [.OBJ]: KEYBCPSD+COMMSUBS+KEYBTBBL+PARSER+KEYBCMD;
    LINK : warning L4021: no stack segment
            exe2bin keyb.exe keyb.com
            del keyb.exe
            cd ..
            cd ..\dev
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cd country
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos mkcntry.asm,mkcntry.obj;
            link mkcntry;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

            mkcntry
    COUNTRY.SYS created
            cd ..\ansi
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos ansi.asm,ansi.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos ioctl.asm,ioctl.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos ansiinit.asm,ansiinit.obj;
            buildmsg ..\..\messages\usa-ms ansi.skl
    BuildMsg - PSP at 431e
    Program memory size is 22392
    Allocatable memory size is 297072
    Processing [ansi.skl]
    Utility Name = [ANSI]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [ANSI.CLA]
    Created include file [ANSI.CL1]
    Created include file [ANSI.CL2]
    Completed [ANSI.CLA]
    Completed [ANSI.CL1]
    Completed [ANSI.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos parser.asm,parser.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class 1 
    ... Including message Class 2 
    ... Including message Class A 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            link    @ansi.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: ANSI.OBJ+
    Object Modules [.OBJ]:  IOCTL.OBJ+
    Object Modules [.OBJ]:  ANSIINIT.OBJ+
    Object Modules [.OBJ]:  PARSER.OBJ
    Run File [ANSI.EXE]: ANSI.EXE
    List File [NUL.MAP]: ANSI.MAP /M
    Libraries [.LIB]: ;
    LINK : warning L4021: no stack segment
            exe2bin ansi.exe ansi.sys
            del     ansi.exe
            cd ..\keyboard
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfsp.asm,kdfsp.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfpo.asm,kdfpo.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdffr120.asm,kdffr120.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdffr189.asm,kdffr189.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfdk.asm,kdfdk.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfsg.asm,kdfsg.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfge.asm,kdfge.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfit141.asm,kdfit141.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfit142.asm,kdfit142.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfuk166.asm,kdfuk166.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfsf.asm,kdfsf.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfbe.asm,kdfbe.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfnl.asm,kdfnl.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfno.asm,kdfno.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfcf.asm,kdfcf.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfla.asm,kdfla.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfsv.asm,kdfsv.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfeof.asm,kdfeof.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfnow.asm,kdfnow.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos kdfuk168.asm,kdfuk168.obj;
            link @keyboard.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: KDFNOW.OBJ+KDFSP.OBJ+KDFPO.OBJ+KDFFR120.OBJ+KDFFR189.OBJ+KDFDK.OBJ+
    Object Modules [.OBJ]: KDFSG.OBJ+KDFGE.OBJ+KDFIT141.OBJ+KDFIT142.OBJ+KDFUK166.OBJ+KDFUK168.OBJ+
    Object Modules [.OBJ]: KDFSF.OBJ+KDFBE.OBJ+KDFNL.OBJ+KDFNO.OBJ+KDFCF.OBJ+
    Object Modules [.OBJ]: KDFSV.OBJ+KDFLA.OBJ+KDFEOF.OBJ
    Run File [KDFNOW.EXE]: KEYBOARD.EXE;
    LINK : warning L4021: no stack segment
            exe2bin keyboard.exe keyboard.sys
            del keyboard.exe
            cd ..\display
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos display.asm,display.obj;
    .Compiling:     DISPLAY.ASM 
    .                    * CPS-CON driver 
    .                    * Version 3.30 
    .Include Files: 
    .               *MACROS  .INC* 
    .               *DEF-EQU .INC* 
    .                    *INT2FCOM.INC* 
    .                    *INT10COM.INC* 
    .               *CPS-FUNC.INC* 
    .               *WRITE   .INC* 
    .                    *F-PARSER.SRC* 
            buildmsg ..\..\messages\usa-ms display.skl
    BuildMsg - PSP at 4380
    Program memory size is 22490
    Allocatable memory size is 295504
    Processing [display.skl]
    Utility Name = [DISPLAY]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [DISPLAY.CLA]
    Created include file [DISPLAY.CL1]
    Created include file [DISPLAY.CL2]
    Completed [DISPLAY.CLA]
    Completed [DISPLAY.CL1]
    Completed [DISPLAY.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos init.asm,init.obj;
    .COMPILING:     INIT.ASM 
    .                    * INSTALL CPS-CON DRIVER 
    .                    * VERSION 3.30 
    .INCLUDE FILES: 
    ... for DOS Version 4.00 ... 
    .               *MACROS  .INC* 
    .               *DEF-EQU .INC* 
    .                    *TABLES  .INC* 
    ... Including message Class 1 
    ... Including message Class 2 
    ... Including message Class A 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos parser.asm,parser.obj;
    .               *DEF-EQU .INC* 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            link @display.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: DISPLAY.OBJ+
    Object Modules [.OBJ]: INIT.OBJ+
    Object Modules [.OBJ]: PARSER.OBJ
    Run File [DISPLAY.EXE]: DISPLAY.EXE;
    LINK : warning L4021: no stack segment
            exe2bin display.exe display.sys < zero.dat
    Fix-ups needed - base segment (hex): 0
            del display.exe
            cd ega
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos cpi-head.asm,cpi-head.obj;
            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos 437-cpi.asm,437-cpi.obj;
    EGA.CPI creation file 
    . 
    CP SRC files: 
    . 
    .       CODE PAGE:  437 
            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos 850-cpi.asm,850-cpi.obj;
    EGA.CPI creation file 
    . 
    CP SRC files: 
    . 
    .       CODE PAGE:  850 
            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos 860-cpi.asm,860-cpi.obj;
    EGA.CPI creation file 
    . 
    CP SRC files: 
    . 
    .       CODE PAGE:  860 
            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos 863-cpi.asm,863-cpi.obj;
    EGA.CPI creation file 
    . 
    CP SRC files: 
    . 
    .       CODE PAGE:  863 
            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos 865-cpi.asm,865-cpi.obj;
    EGA.CPI creation file 
    . 
    CP SRC files: 
    . 
    .       CODE PAGE:  865 
            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos copyrigh.asm,copyrigh.obj;
            link @ega.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: CPI-HEAD+
    Object Modules [.OBJ]: 437-CPI+
    Object Modules [.OBJ]: 850-CPI+
    Object Modules [.OBJ]: 860-CPI+
    Object Modules [.OBJ]: 863-CPI+
    Object Modules [.OBJ]: 865-CPI+
    Object Modules [.OBJ]: COPYRIGH;
    LINK : warning L4021: no stack segment
            exe2bin cpi-head.exe ega.cpi
            del   cpi-head.exe
            cd ..
            cd lcd
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos font-r3.asm,font-r3.obj;
            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos 437-cpi.asm,437-cpi.obj;
    EGA.CPI creation file 
    . 
    CP SRC files: 
    . 
    .       CODE PAGE:  437 
            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos 850-cpi.asm,850-cpi.obj;
    EGA.CPI creation file 
    . 
    CP SRC files: 
    . 
    .          CODE PAGE:  850 
            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos 860-cpi.asm,860-cpi.obj;
    EGA.CPI creation file 
    . 
    CP SRC files: 
    . 
    .          CODE PAGE:  860 
            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos 863-cpi.asm,863-cpi.obj;
    EGA.CPI creation file 
    . 
    CP SRC files: 
    . 
    .               CODE PAGE:  863 
            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos 865-cpi.asm,865-cpi.obj;
    EGA.CPI creation file 
    . 
    CP SRC files: 
    . 
    .               CODE PAGE:  865 
            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos copyrigh.asm,copyrigh.obj;
            link @lcd.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: FONT-R3+
    Object Modules [.OBJ]: 437-CPI+
    Object Modules [.OBJ]: 850-CPI+
    Object Modules [.OBJ]: 860-CPI+
    Object Modules [.OBJ]: 863-CPI+
    Object Modules [.OBJ]: 865-CPI+
    Object Modules [.OBJ]: COPYRIGH;
    LINK : warning L4021: no stack segment
            exe2bin font-r3.exe lcd.cpi
            del font-r3.exe
            cd ..
            cd ..\printer
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\inc -I..\..\dos cpspm10.asm,cpspm10.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos cpsfont3.asm,cpsfont3.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos parser.asm,parser.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            buildmsg ..\..\messages\usa-ms printer.skl
    BuildMsg - PSP at 4380
    Program memory size is 22490
    Allocatable memory size is 295504
    Processing [printer.skl]
    Utility Name = [PRINTER]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [PRINTER.CLA]
    Created include file [PRINTER.CL1]
    Created include file [PRINTER.CL2]
    Completed [PRINTER.CLA]
    Completed [PRINTER.CL1]
    Completed [PRINTER.CL2]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos cpspi07.asm,cpspi07.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class 1 
    ... Including message Class 2 
    ... Including message Class A 
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos prtint2f.asm,prtint2f.obj;
            link    @printer.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: CPSPM10+
    Object Modules [.OBJ]:  CPSFONT3+
    Object Modules [.OBJ]:  PRTINT2F+
    Object Modules [.OBJ]:  CPSPI07+
    Object Modules [.OBJ]:  PARSER
    Run File [CPSPM10.EXE]: PRINTER.EXE
    List File [NUL.MAP]: PRINTER.MAP /M
    Libraries [.LIB]: ;
    LINK : warning L4021: no stack segment
            exe2bin printer.exe printer.sys < zero.dat
    Fix-ups needed - base segment (hex): 0
            del     printer.exe
            cd 5202
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t  -I. -I..\..\..\inc -I..\..\..\dos 5202.asm,5202.obj;
            link 5202;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    LINK : warning L4021: no stack segment
            exe2bin 5202 5202.cpi
            del 5202.exe
            cd ..
            cd ..\driver
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms driver.skl
    BuildMsg - PSP at 4380
    Program memory size is 22490
    Allocatable memory size is 295504
    Processing [driver.skl]
    Utility Name = [DRIVER]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 28000 bytes)
    Created include file [DRIVER.CL2]
    Created include file [DRIVER.CLA]
    Created include file [DRIVER.CL1]
    Completed [DRIVER.CL2]
    Completed [DRIVER.CLA]
    Completed [DRIVER.CL1]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos driver.asm,driver.obj;
    ... for DOS Version 4.00 ... 
    MSBDS.INC... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
    ... Including message Class 1 
    ... Including message Class 2 
    ... Including message Class A 
    MSBDS.INC... 
            link @driver.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: DRIVER.OBJ
    Run File [DRIVER.EXE]: DRIVER.EXE;
    LINK : warning L4021: no stack segment
            exe2bin driver.exe driver.sys
            del driver.exe
            cd ..\ramdrive
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t -I../../inc ramdrive;
    DEVSYM.INC... 
    DEVSYM.INC... 
            masm -Mx -t -I../../inc messages;
            link @ramdrive.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: RAMDRIVE MESSAGES
    Run File [RAMDRIVE.EXE]: RAMDRIVE.EXE
    List File [NUL.MAP]: RAMDRIVE.MAP -MAP;
    LINK : warning L4021: no stack segment
            exe2bin ramdrive ramdrive.sys
            del ramdrive.exe
            cd ..\smartdrv
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm smartdrv.asm;
    Microsoft (R) Macro Assembler Version 5.10 
    Copyright (C) Microsoft Corp 1981, 1988.  All rights reserved.


    48498 + 119464 Bytes symbol space free

        0 Warning Errors
        0 Severe  Errors
            link smartdrv,,smartdrv/M;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    LINK : warning L4021: no stack segment
            exe2bin smartdrv smartdrv.sys
            cd ..\xma2ems
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            nosrvbld xma2ems.skl ..\..\messages\usa-ms.msg
    Creating .CT? files for xma2ems.skl using ..\..\messages\usa-ms.msg file of messages. 

    SKL, MSG and IDX files have been opened for reading.
    Writing to xma2ems.cl1
    Message files for xma2ems.skl completed.
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos xma2ems.asm,xma2ems.obj;
    MSBDS.INC... 
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
    ... CLONE version build switch on ... 
    MSBDS.INC... 
            link xma2ems;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    LINK : warning L4021: no stack segment
            exe2bin xma2ems.exe xma2ems.sys
            del xma2ems.exe
            cd ..\vdisk
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\..\messages\usa-ms vdisk.skl
    BuildMsg - PSP at 4380
    Program memory size is 22490
    Allocatable memory size is 295504
    Processing [vdisk.skl]
    Utility Name = [VDISK]
    Loading messages from ..\..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 27000 bytes)
    Created include file [VDISK.CL2]
    Created include file [VDISK.CLA]
    Created include file [VDISK.CL1]
    Completed [VDISK.CL2]
    Completed [VDISK.CLA]
    Completed [VDISK.CL1]
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos vdisksys.asm,vdisksys.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class 1 
    ... Including message Class 2 
    ... Including message Class A 
            link @vdisk.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: VDISKSYS.OBJ
    Run File [VDISKSYS.EXE]: VDISK.EXE;
    LINK : warning L4021: no stack segment
            exe2bin vdisk.exe vdisk.sys
            del vdisk.exe
            cd ..\xmaem
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            nosrvbld xmaem.skl ..\..\messages\usa-ms.msg
    Creating .CT? files for xmaem.skl using ..\..\messages\usa-ms.msg file of messages. 

    SKL, MSG and IDX files have been opened for reading.
    Writing to xmaem.cl1
    Message files for xmaem.skl completed.
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos INDEINI.asm,INDEINI.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos INDEEMU.asm,INDEEMU.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos INDEEXC.asm,INDEEXC.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos INDEXMA.asm,INDEXMA.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos INDEDMA.asm,INDEDMA.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos INDEIDT.asm,INDEIDT.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos INDEGDT.asm,INDEGDT.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos INDEI15.asm,INDEI15.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos indemaus.asm,indemaus.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos INDEmsg.asm,INDEmsg.obj;
            masm -Mx -t  -I. -I..\..\inc -I..\..\dos INDEpat.asm,INDEpat.obj;
            link @xmaem.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: INDEINI+
    Object Modules [.OBJ]: INDEEXC+
    Object Modules [.OBJ]: INDEEMU+
    Object Modules [.OBJ]: INDEXMA+
    Object Modules [.OBJ]: INDEDMA+
    Object Modules [.OBJ]: INDEI15+
    Object Modules [.OBJ]: INDEIDT+
    Object Modules [.OBJ]: INDEGDT+
    Object Modules [.OBJ]: INDEMSG+
    Object Modules [.OBJ]: INDEPAT
    Run File [INDEINI.EXE]: XMAEM.SYS
    List File [NUL.MAP]: NUL;
    LINK : warning L4021: no stack segment
            cd ..
            cd ..\select
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            buildmsg ..\messages\usa-ms select.skl
    BuildMsg - PSP at 453f
    Program memory size is 22937
    Allocatable memory size is 288352
    Processing [select.skl]
    Utility Name = [SELECT]
    Loading messages from ..\MESSAGES\USA-MS.MSG
    (Available message memory space: 32000 bytes)
    (Still available message memory space: 26000 bytes)
    Created include file [SELECT.CLA]
    Created include file [SELECT.CLB]
    Created include file [SELECT.CL1]
    Created include file [SELECT.CL2]
    Completed [SELECT.CLA]
    Completed [SELECT.CLB]
    Completed [SELECT.CL1]
    Completed [SELECT.CL2]
            masm -Mx -t  -I. -I..\inc -I..\dos select0.asm,select0.obj;
    ... for DOS Version 4.00 ... 
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class 1 
    ... Including message Class 2 
            masm -Mx -t  -I. -I..\inc -I..\dos select1.asm,select1.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos select2.asm,select2.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos select2a.asm,select2a.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos select3.asm,select3.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos select4.asm,select4.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos select5.asm,select5.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos select6.asm,select6.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos select7.asm,select7.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos select8.asm,select8.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos select9.asm,select9.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos routines.asm,routines.obj;
    ... for DOS Version 4.00 ... 
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos routine2.asm,routine2.obj;
    ... for DOS Version 4.00 ... 
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos gen_coms.asm,gen_coms.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos intvec.asm,intvec.obj;
    ... for DOS Version 4.00 ... 
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos select5a.asm,select5a.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos ckdisp.asm,ckdisp.obj;
            masm -Mx -t  -I. -I..\inc -I..\dos scn_parm.asm,scn_parm.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos prn_def.asm,prn_def.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos var.asm,var.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos caservic.asm,caservic.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos input.asm,input.obj;
            masm -Mx -t  -I. -I..\inc -I..\dos initmem.asm,initmem.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos mparse.asm,mparse.obj;
    INCLUDING COMP=COMMON DSN=PSDATA.INC...;AN000; 
    INCLUDING COMP=COMMON DSN=PARSE.ASM...;AN000; 
            masm -Mx -t  -I. -I..\inc -I..\dos mod_copy.asm,mod_copy.obj;
            masm -Mx -t  -I. -I..\inc -I..\dos s_disply.asm,s_disply.obj;
            masm -Mx -t  -I. -I..\inc -I..\dos bridge.asm,bridge.obj;
            masm -Mx -t  -I. -I..\inc -I..\dos asm2c.asm,asm2c.obj;
            cl -c -AS -Os -Zp  -I. -I..\h -Foget_stat.obj get_stat.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    get_stat.c
            cl -c -AS -Os -Zp  -I. -I..\h -Foglobal.obj global.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    global.c
            cl -c -AS -Os -Zp  -I. -I..\h -Foint13.obj int13.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    int13.c
            copy ..\cmd\fdisk\bootrec.obj
            1 File(s) copied
            masm -Mx -t  -I. -I..\inc -I..\dos selquit.asm,selquit.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos selchild.asm,selchild.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos services.asm,services.obj;
    ... for DOS Version 4.00 ... 
            masm -Mx -t  -I. -I..\inc -I..\dos get_help.asm,get_help.obj;
            masm -Mx -t  -I. -I..\inc -I..\dos selserv.asm,selserv.obj;
            lib services.lib -+ selquit;

    Microsoft (R) Library Manager  Version 3.10
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.


    LIB : warning U4155: selquit : module not in library
            lib services.lib -+ selchild;

    Microsoft (R) Library Manager  Version 3.10
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.


    LIB : warning U4155: selchild : module not in library
            lib services.lib -+ services;

    Microsoft (R) Library Manager  Version 3.10
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.


    LIB : warning U4155: services : module not in library
            lib services.lib -+ get_help;

    Microsoft (R) Library Manager  Version 3.10
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.


    LIB : warning U4155: get_help : module not in library
            lib services.lib -+ selserv;

    Microsoft (R) Library Manager  Version 3.10
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.


    LIB : warning U4155: selserv : module not in library
            link /noe @select.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]:  SELECT0+
    Object Modules [.OBJ]:  SELECT1+
    Object Modules [.OBJ]:  SELECT2+
    Object Modules [.OBJ]:  SELECT2A+
    Object Modules [.OBJ]:  SELECT3+
    Object Modules [.OBJ]:  SELECT4+
    Object Modules [.OBJ]:  SELECT5+
    Object Modules [.OBJ]:  SELECT5A+
    Object Modules [.OBJ]:  SELECT6+
    Object Modules [.OBJ]:  SELECT7+
    Object Modules [.OBJ]:  SELECT8+
    Object Modules [.OBJ]:  SELECT9+
    Object Modules [.OBJ]:  ROUTINE2+
    Object Modules [.OBJ]:  GEN_COMS+
    Object Modules [.OBJ]:  ROUTINES+
    Object Modules [.OBJ]:  INTVEC+
    Object Modules [.OBJ]:  CKDISP+
    Object Modules [.OBJ]:  SCN_PARM+
    Object Modules [.OBJ]:  PRN_DEF+
    Object Modules [.OBJ]:  VAR+
    Object Modules [.OBJ]:  CASERVIC+
    Object Modules [.OBJ]:  INPUT+
    Object Modules [.OBJ]:  INITMEM+
    Object Modules [.OBJ]:  MPARSE+
    Object Modules [.OBJ]:  MOD_COPY+
    Object Modules [.OBJ]:  S_DISPLY+
    Object Modules [.OBJ]:  BRIDGE+
    Object Modules [.OBJ]:  ASM2C+
    Object Modules [.OBJ]:  GET_STAT+
    Object Modules [.OBJ]:  GLOBAL+
    Object Modules [.OBJ]:  INT13+
    Object Modules [.OBJ]:  BOOTREC,
    Run File [SELECT0.EXE]: SELECT.EXE /EXEPACK
    List File [NUL.MAP]: SELECT/MAP
    Libraries [.LIB]: SERVICES.LIB+
    Libraries [.LIB]: CASSFAR.LIB;
            masm -Mx -t  -I. -I..\inc -I..\dos sel-pan.asm,sel-pan.obj;
            copy USA.inf panel.inf
            1 File(s) copied
            masm -Mx -t  -I. -I..\inc -I..\dos panels.asm,panels.obj;
            masm -Mx -t  -I. -I..\inc -I..\dos colors.asm,colors.obj;
            masm -Mx -t  -I. -I..\inc -I..\dos scroll.asm,scroll.obj;
            link @sel-pan.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: SEL-PAN+
    Object Modules [.OBJ]:   PANELS+
    Object Modules [.OBJ]:   COLORS+
    Object Modules [.OBJ]:   SCROLL,,,
    Libraries [.LIB]:   CASSFAR.LIB;
    LINK : warning L4021: no stack segment
            exe2bin sel-pan.exe sel-pan.dat
            compress
            masm -Mx -t  -I. -I..\inc -I..\dos sstub.asm,sstub.obj;
    ... for DOS Version 4.00 ... 
    ... Including message Class A 
    ... Including message Class B 
    ... Including message Class 1 
    ... Including message Class 2 
            link sstub;

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    LINK : warning L4021: no stack segment
            exe2bin sstub.exe select.com
            erase select.hlp
    File not found
            attrib -R USA.txt
            asc2hlp USA.txt select.hlp
    The number topic(s) and text string(s) written = 57     attrib +R USA.txt
            cd ..\memm
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cd emm
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            cl /ASw /G2 /Oat /Gs /Ze /Zl /Fc /c emmfunct.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    emmfunct.c
            cl /ASw /G2 /Oat /Gs /Ze /Zl /Fc /c emm40.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    emm40.c
            masm /Mx /t /DI386  /i..\memm /DNOHIMEM emmp.asm,emmp.obj,emmp.lst;
            masm /Mx /t /DI386  /i..\memm /DNOHIMEM emmsup.asm,emmsup.obj,emmsup.lst;
            masm /Mx /t /DI386  /i..\memm /DNOHIMEM emmdisp.asm,emmdisp.obj,emmdisp.lst;
            masm /Mx /t /DI386  /i..\memm /DNOHIMEM emmdata.asm,emmdata.obj,emmdata.lst;
            masm /Mx /t /DI386  /i..\memm /DNOHIMEM emminc.asm,emminc.obj,emminc.lst;
            del emmlib.lib
    File not found
            lib emmlib+emmfunct.obj+emm40.obj+emmp.obj+emmsup.obj+emmdisp.obj+emmdata.obj,;

    Microsoft (R) Library Manager  Version 3.10
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

            cd ..\memm
            nmake

    Microsoft (R) Program Maintenance Utility   Version 1.00.05
    Copyright (c) Microsoft Corp 1987, 1988. All rights reserved.

            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm memm386.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm elimfunc.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm init.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm allocmem.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p ppage.asm;
    ppage.asm(263): warning A4100: Impure memory reference
    ppage.asm(323): warning A4100: Impure memory reference

    49174 + 119935 Bytes symbol space free

        2 Warning Errors
        0 Severe  Errors
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p emmmes.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p inittab.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p memmonf.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm rom_srch.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p i286.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p trapdef.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p i386.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p tabdef.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p vmtrap.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p vminst.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm elimtrap.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p vminit.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm moveb.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p em286ll.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p em386ll.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p retreal.asm;
    retreal.asm(203): warning A4057: Illegal size for operand

    49144 + 119484 Bytes symbol space free

        1 Warning Errors
        0 Severe  Errors
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p rrtrap.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p vdminit.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm initepg.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p errhndlr.asm;
    kbd.inc(46): warning A4016: Reserved word used as symbol: ESC
    errhndlr.asm(94): warning A4016: Reserved word used as symbol: ENTER

    49040 + 119571 Bytes symbol space free

        2 Warning Errors
        0 Severe  Errors
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p maplin.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p ekbd.asm;
    kbd.inc(46): warning A4016: Reserved word used as symbol: ESC
    ekbd.asm(129): warning A4016: Reserved word used as symbol: WAIT

    49740 + 141424 Bytes symbol space free

        2 Warning Errors
        0 Severe  Errors
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm util.asm;
    util.asm(196): warning A4057: Illegal size for operand
    util.asm(197): warning A4057: Illegal size for operand

    48784 + 106001 Bytes symbol space free

        2 Warning Errors
        0 Severe  Errors
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p initdeb.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p emm.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p emminit.asm;
    emminit.asm(444): warning A4100: Impure memory reference
    emminit.asm(512): warning A4100: Impure memory reference

    48822 + 115694 Bytes symbol space free

        2 Warning Errors
        0 Severe  Errors
            cl /ASw /G2 /Oat /Gs /Ze /Zl /Fc /c mapdma.c
    Microsoft (R) C Optimizing Compiler Version 5.10
    Copyright (c) Microsoft Corp 1984, 1985, 1986, 1987, 1988. All rights reserved.

    mapdma.c
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p iotrap.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p a20trap.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p oemproc.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p m_state.asm;
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p shiphi.asm;
    shiphi.asm(247): warning A4100: Impure memory reference
    shiphi.asm(248): warning A4100: Impure memory reference
    shiphi.asm(249): warning A4100: Impure memory reference
    shiphi.asm(250): warning A4100: Impure memory reference
    shiphi.asm(279): warning A4100: Impure memory reference

    49342 + 111099 Bytes symbol space free

        5 Warning Errors
        0 Severe  Errors
            masm -Mx -t -DI386 -DNoBugMode -DNOHIMEM -i..\emm -p extpool.asm;
    extpool.asm(121): warning A4100: Impure memory reference
    extpool.asm(122): warning A4100: Impure memory reference
    extpool.asm(128): warning A4100: Impure memory reference
    extpool.asm(129): warning A4100: Impure memory reference
    extpool.asm(173): warning A4100: Impure memory reference
    extpool.asm(174): warning A4100: Impure memory reference

    49612 + 133359 Bytes symbol space free

        6 Warning Errors
        0 Severe  Errors
            link /NOI @emm386.lnk

    Microsoft (R) Overlay Linker  Version 3.65   
    Copyright (C) Microsoft Corp 1983-1988.  All rights reserved.

    Object Modules [.OBJ]: MEMM386+
    Object Modules [.OBJ]: ELIMFUNC+
    Object Modules [.OBJ]: EMM+
    Object Modules [.OBJ]: EMMMES+
    Object Modules [.OBJ]: EMMINIT+
    Object Modules [.OBJ]: MEMMONF+
    Object Modules [.OBJ]: INIT+
    Object Modules [.OBJ]: M_STATE+
    Object Modules [.OBJ]: ROM_SRCH+
    Object Modules [.OBJ]: PPAGE+
    Object Modules [.OBJ]: ALLOCMEM+
    Object Modules [.OBJ]: INITTAB+
    Object Modules [.OBJ]: SHIPHI+
    Object Modules [.OBJ]: EXTPOOL+
    Object Modules [.OBJ]: VDMINIT+
    Object Modules [.OBJ]: I286+
    Object Modules [.OBJ]: I386+
    Object Modules [.OBJ]: TABDEF+
    Object Modules [.OBJ]: TRAPDEF+
    Object Modules [.OBJ]: VMTRAP+
    Object Modules [.OBJ]: VMINST+
    Object Modules [.OBJ]: ELIMTRAP+
    Object Modules [.OBJ]: IOTRAP+
    Object Modules [.OBJ]: A20TRAP+
    Object Modules [.OBJ]: OEMPROC+
    Object Modules [.OBJ]: INITEPG+
    Object Modules [.OBJ]: VMINIT+
    Object Modules [.OBJ]: EM286LL+
    Object Modules [.OBJ]: EM386LL+
    Object Modules [.OBJ]: MOVEB+
    Object Modules [.OBJ]: MAPLIN+
    Object Modules [.OBJ]: RETREAL+
    Object Modules [.OBJ]: RRTRAP+
    Object Modules [.OBJ]: ERRHNDLR+
    Object Modules [.OBJ]: EKBD+
    Object Modules [.OBJ]: UTIL+
    Object Modules [.OBJ]: INITDEB+
    Object Modules [.OBJ]: MAPDMA
    Run File [MEMM386.EXE]: EMM386.EXE
    List File [NUL.MAP]: EMM386.MAP/M
    Libraries [.LIB]: ..\EMM\EMMLIB.LIB
            del emm386.sys
    File not found
            ren emm386.exe emm386.sys
            cd ..
            cd ..

    C:\SRC>
