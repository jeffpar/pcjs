---
layout: page
title: "PC-SIG Diskette Library (Disk #78)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0078/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0078"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-WRITE 1 OF 3 (ALSO 627, 1235)"

    PC-WRITE is a wordprocessor with features and power that
    overshadow many commercial wordprocessing programs on the market.
    Advanced users and wordprocessing professionals will find the package
    very multi-faceted; it can accomplish virtually any task on almost any
    printer.  While essentially an advanced program, thanks to a special
    tutorial and new help screens, beginners can be running the program in
    minutes.
    
    PC-WRITE handles files that are as large as the available RAM memory in
    your computer.  The program allows quick and easy access to the
    features that most wordprocessors include: cut-and-paste of blocks of
    text; headers and footers; automatic page numbering; editing multiple
    documents; bold type and other special text enhancements; a spell
    checker that lets you add words; and many others.  Other features
    include:  multiple-column layout; cut-and-paste of rectangular boxes of
    text; menus to help you select page layout and fonts; support of
    foreign language characters; and a feature that lets you use your
    computer like a typewriter.
    
    PC-WRITE supports most printers (over 800) and includes special
    supports for laser printers, including Postscript.  It also accepts most
    WordStar commands and converts WordStar files.  The  pop-up menus make
    most tasks easier and the user guide is included on-disk.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## INSTALL.DOC

{% raw %}
```
Making a Working Diskette or Directory Without WORKDISK

If you must use DOS 3.0, it has a bug that makes the WORKDISK program not work.
You may also not have enough "environment" memory to use the WORKDISK command.  
But you can still make a working diskette or directory manually. 

To make a working diskette or directory manually:

1. Place the PC-Write Program diskette in drive A. Type "A:" and press Enter. 

2. To place your registration number on the front screen, type this command:
       ED =  <Enter>   (make sure there is a space between ED and =) 
   
3. For a floppy disk system, make two blank formatted diskettes (if you have 
   the smaller 3.5 inch diskettes, you only need one), called the working 
   diskette and the extra diskette. Place the working diskette in drive B. 
   Type "B:" and press Enter. 

   For a hard disk system, first you need to make your hard disk the default 
   drive (usually, you type "C:"). Then use the MKDIR command to create a 
   working directory (for example, MKDIR \PCW). Then use the CHDIR command to 
   make it the current directory (for example, CHDIR \PCW). 

4. At the DOS prompt, type the following commands:
       COPY  A:ED.EXE  <Enter>
       COPY  A:ED.HLP  <Enter>
       COPY  A:ED.DEF  <Enter>

5. If you have a Tandy 1000 with the old keyboard, type the following command:
       COPY  A:ED.TRS  ED.DEF  <Enter>

6. If you have a color monitor and want to edit in color, type the following:
       ECHO  %C  >>  ED.DEF  <Enter>

7. To get the three Reminder lines at the top of the screen by default, type: 
       ECHO  %M  >>  ED.DEF  <Enter>

8. If you want an automatic file save every five minutes, type the following:
       ECHO  %R] &R:5  >>  ED.DEF  <Enter>

9. Place the PC-Write Utility diskette in drive A.  

10. If you use Windows, DesqView, or a program that needs a PIF file, type: 
       COPY A:ED.PIF  <Enter>

11. The next steps show how to make a PR.DEF file for your printer with the 
    Printer Picker. 

12. If you have a laser printer, skip to step 18.

13. If you have an HP DeskJet with soft fonts, type the following command: 
        COPY  A:DESKDOWN.BAT  <Enter>

14. Make drive A the default drive (type "A:" and press Enter).

15. If you have a hard disk system, skip to step 17.

16. You have a floppy disk system and a non-laser printer. 
    Type the following then skip to step 25. 
       MENUPRT  B:PR.DEF  <Enter>

17. You have a hard disk system but not a laser printer. Type the following 
    command, where "c:\pcw" is your working directory, then skip to step 25. 
       MENUPRT  c:\pcw\PR.DEF  <Enter>

18. You have a laser printer. If you have an HP LaserJet with soft fonts, 
    type this command: 
       COPY  A:HPDOWN.BAT   <Enter>

19. If you have a Quadram QuadLaser with soft fonts, type the following:
       COPY  A:QUADDOWN.BAT  <Enter> 

20. If you have a printer using Adobe PostScript, type the following commands: 
       COPY  A:PSDOWN.INI  PR.INI  <Enter>
       COPY  A:PSDOWN.FIN  PR.FIN  <Enter>

21. Make drive A the default drive (type "A:" and press Enter).

22. If you have a hard disk system, skip to step 24.

23. You have a floppy disk system and a laser printer. Your print control file 
    probably won't fit on your working diskette (unless you have 3.5 inch 
    diskettes), so replace the working diskette in drive B with the extra 
    diskette. Type the following command, then skip to step 25. 
       MENULAZ  B:PR.DEF  <Enter>

24. You have a hard disk system and a laser printer. Type the following, where 
    "c:\pcw" is your working directory, and continue with step 25. 
       MENULAZ  c:\pcw\PR.DEF  <Enter>

25. Make your working diskette (B:) or directory the default again.

26. Place the PC-Write Reference Diskette in drive A.

27. The master word list is a large (110 KB) file used to check spelling. Your 
    computer must have at least 448 KB RAM to use this master word list. Also, 
    the PC-Write program and word list file won't fit on one diskette (unless 
    you have 3.5 inch diskettes). If you have a floppy disk system, first 
    insert your extra disk in drive B. Then type the following command: 
       COPY  A:WORDS.MAS  <Enter>

28. Smaller Help files for beginners and advanced users are available. If you 
    choose a small Help file, the main Help file won't be available. If you 
    want the normal full Help file, installation is complete.  

29. To get one of the smaller Help files, if you have a floppy disk system, 
    place the working diskette (not the extra diskette) in drive B. 

30. To get beginner's Help, type the first command below, for advanced Help 
    the second command: 
       COPY  A:EDBEGIN.HLP  ED.HLP  <Enter>
       COPY  A:EDQUICK.HLP  ED.HLP  <Enter>

You may also want to make backup copies of your diskettes. If you have a less-
than-compatible computer, or a mouse, follow the directions in the manual. 

Remarks

If you are copying all the files on the PC-Write diskette to your hard disk to 
upgrade from a version of PC-Write earlier than 2.6, delete the MENUPRT.COM 
file from the hard disk before you run WORKDISK. If you are upgrading from 
versions 2.6, 2.7, or 2.71 delete the file MENUPRT.EXE. You can also delete 
the file PR.EXE, used in PC-Write versions before 3.0. 

If you are upgrading from a version of PC-Write before 3.0, most of the old 
keyboard commands and Dot lines are the same. Page break format has changed, 
but repage (Alt F7) or the Alt F3 then F5 command will fix this. However, to 
use your old edit control files, you must change many of your old % and & 
commands. Key and operation code numbers in macros have not changed. 
```
{% endraw %}

## NEWS303.DOC

{% raw %}
```

                   New Features and Changes in PC-Write 3.03 

We've added and changed a few things since the 3.03 manual was printed, but
none is very important (so don't worry if you don't understand any of this):

1. A new ruler letter, Y, sets normal reformat mode in which Shf F7 sets mode.
   The A, N, and Y Ruler letters can be used as Mini-Rulers. You can protect a 
   block from reformatting with <Alt-G>N at the start, and <Alt-G>Y at the end.
2. The Ctl F9 Frame menu has an F4 option to box-frame with ASCII -|+ symbols.
3. In F2 Ruler mode, Shf Grey+ goes to the first ruler, Shf Grey- to the last.
4. The new default is NO extended keyboard functions, since many computers do 
   not support them. &J:16 in ED.DEF enables F11, F12, and other new keys.
5. &J:1 works on non-extended keyboards, too, making Caps Lock another Ctl key.
   &J:32 stops setting the BIOS Scroll Lock bit, except on startup and exit.
   &J:36 stops all Scroll Lock bit setting, to fix problems on some computers. 
6. &F:3 locks all files. This fixes a problem using PC-Write with DOS SHARE.
7. &C:8 is for EGA's only. &C:9 is for VGA's. &Z:43 sets &C automatically.
8. New op codes: 731 exits without saving, 732 draws a box frame with -|+, 
   and 733 turns screen refresh back on if you turned it off with 707.
9. Notes: SET PR= overrides <Alt-G>.C: when selecting a print control file.
          Laptop and portable users should use %D in ED.DEF.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0078

     Volume in drive A has no label
     Directory of A:\

    ED       DEF        97  10-26-88   3:47a
    ED       EXE    260992   2-02-90   9:21p
    ED       HLP     72685   9-16-89   6:33p
    ED       SPC       934   9-18-89  11:30a
    ED       TRS      1023   9-18-89  11:28a
    GETYN    COM       806   9-25-89   5:18p
    GO       BAT        12   5-18-86   8:32p
    INSTALL  DOC      5819   9-25-89   4:56p
    NEWS303  DOC      1464   9-23-89   4:27p
    PROGRAM  DIR      1101   2-14-90  12:10p
    READ     ME       1001   9-29-89  12:48p
    WORKDISK BAT      6120   9-27-89   7:40p
           12 file(s)     352054 bytes
                            6144 bytes free
