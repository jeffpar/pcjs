---
layout: page
title: "PC-SIG Library Disk #255"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0255/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0255"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

## Information about "DOS UTILITIES NO 14"

    This entry in our DOS utility series includes a comprehensive collection
    of tools for handling files, configuring some system options (NEWBELL,
    and SCRNCOLR), cleaning up directories (OLDER and PURGEDUP), and
    finding lost files (WHEREIS).  Some very nice BASIC routines are
    included.  For instance, SCREEN is an input-verify routine and DOCUFILE
    helps you generate custom help screens.
    
    How to Start: To run a COM program simply type its name and press
    <ENTER>.  For instructions on ASM or 'C' listings, refer to your
    Assembler or 'C' language manuals.  For instructions on running BASIC
    programs, please refer to the GETTING STARTED section in this catalog.
    To read DOC files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  DOCUFILE  $10.00
    
    File Descriptions:
    
    NEWBELL  ASM  Source for NEWBELL.COM
    NEWBELL  COM  Run once to shorten DOS (not BASIC) bell tone
    BATQUES  COM  Prompts for character returned as error level
    HERMREAD ME   Notes on BATQUES, SCRNCOLR, Compaq video, and FORMAT
    BATQUES  ASM  Source for BATQUES.COM
    BATQUES  DOC  Documents BATQUES.COM  (2K)
    BAT-CD   ASM  Source for BATCD.COM
    KBD_FIX  ASM  Source for KEY_FIX.COM  (See Softalk PC, Nov 83-Jan 84)
    BAT-CD   DOC  Documents BATCD.COM
    BAT-CD   COM  Changes working directory based on standard input
    DOS-SIZE DOC  Reference table, size of various DOS versions
    SCRNCOLR COM  Intercepts screen writes to change colors
    SCRNCOLR ASM  Source for SCRNCOLR.COM
    SCRNCOLR DOC  Documents SCRNCOLR.COM  (2K)
    KBD_FIX  COM  Expands DOS typeahead buffer to 160 characters
    KBFIX    DOC  Documentation for KBFIX.COM
    KBFIX    ASM  Source for KBFIX.COM
    KBFIX    COM  CAPS, NUM & SCROLL flags plus a 127 byte kybd buffer
    L4       ASM  Source for L4.COM
    L4       DOC  Documentation for L4.COM  (4K)
    L4       COM  Displays file w/ up/down paging, horz scroll, find
    WHEREIS  COM  Searches subdirectories for filename
    WHEREIS  ASM  Source for WHEREIS.COM
    OLDER    ASM  Source for OLDER.COM
    OLDER    COM  Returns information on relative age of two files
    SCREEN   BAS  Utility for data input and verification
    LABEL    DOC  Documentation for LABEL.EXE
    LABEL    C    Source for LABEL.EXE
    LABEL    EXE  Change/Create Volume Labels - command line input
    SCREEN   DOC  Documentation for SCREEN.BAS  (3.6K)
    TIMER    EXE  Provides continuous time of day clock on screen
    MORSE    BAS  Morse code practice program
    PURGEDUP COM  Compares DIRs & erases = fnams with <= date/time
    DOSEDIT  COM  Provides re-executable history file of DOS commands
    PURGEDUP DOC  Documentation for PURGEDUP.COM
    DOCUFILE BAS  Generates BASIC program Help screens from text file
    DOSEDIT  DOC  Documentation for DOSEDIT.COM  (3.2K)
    DOCUFDOC BAS  Sample made using DOCUFILE.BAS and DOCUFILE.DOC
    DOCUFILE DOC  Documentation for DOCUFILE.BAS  (3.6K)
    SDIR     DOC  Documentation for SDIR.COM
    SDIR     COM  Sorted Directory with numerous options - best to date
    BYE      BAS  Protects screen, provides date & time on idle system
    CHN      PAS  Provides command line execution of Turbo .CHN files
    SPEED    ASM  Source for SPEED.COM, easily modified to your taste
    SPEED    COM  Modifies disk parameter table
    PX       DOC  Documentation for PX.COM  (14K)
    PX       COM  Procedure Cross Referencer for ASM and MASM
    CRYPTO   BAS  Aids in solving cryptograms
    LIST     DOC  Documentation for LIST.COM  (2.1K)
    LIST     COM  ASCII file lister, viable alternative to TYPE/MORE

### Directory of PC-SIG Library Disk 0255

     Volume in drive A has no label
     Directory of A:\

    NEWBELL  COM        92   8-14-87   9:49a
    NEWBELL  ASM      1499   8-14-87   9:49a
    HERMREAD ME       7121   8-14-87   9:49a
    BATQUES  COM        36   8-14-87   9:49a
    BATQUES  DOC      2256   8-14-87   9:49a
    BATQUES  ASM      3086   8-14-87   9:49a
    SCRNCOLR COM       236   8-14-87   9:49a
    SCRNCOLR DOC      1056   8-14-87   9:49a
    SCRNCOLR ASM      6945   8-14-87   9:49a
    DOS-SIZE DOC      1991   8-14-87   9:49a
    WHEREIS  COM       451   8-14-87   9:49a
    WHEREIS  ASM      7242   8-14-87   9:49a
    OLDER    COM       124   8-14-87   9:50a
    OLDER    ASM      2928   8-14-87   9:50a
    LABEL    EXE      1232   8-14-87   9:50a
    LABEL    C        2531   8-14-87   9:50a
    LABEL    DOC      1730   8-14-87   9:50a
    SCREEN   BAS      3669   8-14-87   9:50a
    SCREEN   DOC      3628   8-14-87   9:50a
    TIMER    EXE      1408   8-14-87   9:50a
    MORSE    BAS      6784   8-14-87   9:50a
    PURGEDUP COM     10313   8-14-87   9:50a
    PURGEDUP DOC      1160   8-14-87   9:50a
    DOSEDIT  COM      1920   8-14-87   9:50a
    DOSEDIT  DOC      3280   8-14-87   9:50a
    DOCUFILE BAS      1690   8-14-87   9:50a
    DOCUFILE DOC      3643   8-14-87   9:51a
    DOCUFDOC BAS      4692   8-14-87   9:51a
    BYE      BAS       212   8-14-87   9:51a
    SDIR     COM      3221   8-14-87   9:51a
    SDIR     DOC      1280   8-14-87   9:51a
    CRYPTO   BAS      1612   8-14-87   9:51a
    PX       COM     22912   8-14-87   9:51a
    PX       DOC     14588   8-14-87   9:51a
    SPEED    COM        23   8-14-87   9:51a
    SPEED    ASM      1480   8-14-87   9:51a
    CHN      PAS       716   8-14-87   9:51a
    L4       COM      2668   8-14-87   9:52a
    L4       DOC      4195   8-14-87   9:52a
    L4       ASM     19409   8-14-87   9:52a
    KBFIX    COM      1360   8-14-87   9:52a
    KBFIX    ASM     32991   8-14-87   9:52a
    KBFIX    DOC       413   8-14-87   9:52a
    KBD_FIX  COM       689   8-14-87   9:52a
    KBD_FIX  ASM     12594   8-14-87   9:52a
    BAT-CD   COM       127   8-14-87   9:53a
    BAT-CD   DOC      1854   8-14-87   9:53a
    BAT-CD   ASM      2959   8-14-87   9:53a
    LIST     COM      6619   9-17-86   4:48a
    LIST     ~DO       136   7-03-87  11:10a
    LIST     DOC       479   7-03-87  11:23a
    FILES255 TXT      3169   8-14-87  10:06a
    GO       BAT        38   8-14-87  10:07a
    GO       TXT       463   8-14-87  10:10a
           54 file(s)     218950 bytes
                           70656 bytes free
