---
layout: page
title: "PC-SIG Diskette Library (Disk #2952)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2952/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2952"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## VERSIONS.TXT

{% raw %}
```
                            ARCHIVER for Windows
                            Versions Information
     MILLER-WARE DEVELOPMENT, 11103 ARIES DRIVE, ORLANDO, FLORIDA  32837
                              (407) 851-5268
                   GEnie: W.Miller22, CompuServe: 73750,2464


Version 1.0x
============
Version 1.00 - 11/91
	This was the initial release of ARCHIVER for Windows.

Version 1.01 - 11/91
	This was a clean-up release the original release.

Version 1.02- 11/91
	This fixed an incorrect error trapping call.

Version 1.03- 12/91
	This version added the Control Panel color selection option
        to the configuration.  Also a change was made to allow for an
	MS Windows bug.  In some faster 386+ machines, the program was
        unable to locate temp files which were created by ARCHIVER for
        Windows.  The problem was determined to be in the Windows Kernel.

Version 1.04- 1/92
	During the View/Print procedure, while attempting to close
        windows, ARCHIVER for Windows would lock up with a bad file call.
        It was never intended to be able to close those windows at that
        point in the program execution.  The Control Button option was
        disabled.  Also, the same problem fix as in version 1.03 above was
        made for self-extracting files. 

Version 1.05,1.06- 1/92
	A new method for handling the Windows file problem
        (see version 1.03) was incorporated.  Version 1.06 has the final
        fix of this problem.  Self-extracting archives are now placed in
        the target location.  Also, self-extracting LHA files are now
        created using the large model (/x1 option).  Self-extracting LHA
        files created using the large model and a TELOP file are
        consistent with CompuServe requirements.

Version 1.1x
============
Version 1.10- 2/92
	The AutoPause feature was added.  Also, a new method of
        handling events in the 386 Enhanced mode was incorporated.
        This allows for improved performance and reliability.

Version 1.11- 2/92
	The Control Panel refresh was reworked to ensure the most
        current file and directory information is always available.
        The converting routine was changed to ensure the converted
        program goes to the target location.

Version 1.2x
============
Version 1.20- 3/92
	The File Mask code was changed to allow dynamic updating.
        A compiling error was fixed which prevented the loading of the
        colors window from within the program.

Version 2.0x
============
Version 2.00- 6/92
	Major Update.  ARJ was added.  All screens were updated to
        include 3D graphics.  The file viewer was made selectable.
        The Launch Pad was rewritten to allow for smoother operation
        and 1st 2 launch buttons were added to control panel.  Control
        panel buttons were moved to the top of the window.
        Select/deselect all option was added   System info was added
        to About screen.  Windows Setup program was added.  Error
        trapping was enhanced.

Version 2.1x
============
Version 2.1x- 7/92
	This update was to fix minor bugs.  They were, 1) when creating
	multiple self-extracting archives, the prior archive would be
	erroneously included in the file.  Also, an error in the ARJ
	compression syntax was fixed.
	
<end of document>
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║           <<<<  PC-SIG Disk #2952 ARCHIVER FOR WINDOWS   >>>>           ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To copy all the files to your hard drive, type:                        ║
║                       COPY *.* [hard drive]:\[directory name]  <enter>  ║
║                                                                         ║
║  To unzip the program, type: PKUNZIP ARCHIVER (Enter)                   ║
║                                                                         ║
║  After unzipping the program, start the installation process by typing: ║
║                           SETUP <enter>                                 ║
║                                                                         ║
║                                        (c) Copyright 1993, PC-SIG Inc.  ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2952

     Volume in drive A has no label
     Directory of A:\

    ARCHIVER ZIP    318455  11-12-92   9:54p
    PKUNZIP  EXE     23528   3-15-90   1:10a
    GO       TXT      1078   1-18-93   1:02p
    GO       BAT        32  11-12-92   9:57p
            4 file(s)     343093 bytes
                           17408 bytes free
