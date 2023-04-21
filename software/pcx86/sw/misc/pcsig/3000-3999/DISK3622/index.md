---
layout: page
title: "PC-SIG Diskette Library (Disk #3622)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3622/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3622"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## README.TXT

{% raw %}
```
   
 ------------------------------------------------------------------------------
              README.TXT: LETTERHEAD.PRO FOR AMI PRO FOR WINDOWS
 ------------------------------------------------------------------------------

 Thank for your interest in Letterhead Pro. This program will install 16 
 graphic sample letterheads, 6 logos, and 1 watermark into Ami Pro for 
 Windows. Each letterhead will also have a macro that installs the letterhead 
 into any Ami Pro document. Of course, you must have Ami Pro for Windows 
 installed prior to the installation of Letterhead Pro.

 The installation program is in two stages, DOS and Windows. The INSTALL 
 program MUST be started from DOS by placing the diskette in a floppy drive and
 typing INSTALL. Do NOT call up Windows and execute the RUN command. After 
 completing the necessary DOS portion of the installation, Ami Pro for Windows
 will be called up with the instruction document LETPRO.SAM on screen.   
 
 LETPRO.SAM contains instructions on how to use Letterhead Pro. You will be
 shown how to order your own customized letterhead, logo, and watermark. It is
 a Ami Pro document and must be viewed and printed from inside Ami Pro.
 
 You should print LETPRO.SAM so you may use it as a guide when displaying and
 printing the Letterhead Pro letterhead examples. All instructions, worksheets,
 and order forms are included. If you only want to copy your current letterhead
 into a graphic image for Ami Pro, it is necessary to read and print LETPRO.SAM.

 You may design your own letterhead, convert your present printed letterhead,
 or have CPI Software design a letterhead for you. CPI Software will place this
 design into a graphic PCX format, add a macro, and return it to you. The price
 for each letterhead, logo, or watermark is only $29.95 plus shipping.

 If the printer you are currently using will print Ami Pro graphics, it
 will print graphical PCX letterheads. This includes laserjets, ink jets, and 
 dot-matrix printers. You do NOT need special printer drivers or any add-ons to
 place a customized professionally created letterhead on all your Ami Pro
 documents. Ami Pro for Windows and Letterhead Pro are all you need.

 Before starting the installation, refresh yourself on whether you used the
 Complete or Custom installation when installing Ami Pro for Windows. If
 you do not remember, then locate the path to the macro files (files ending
 with .SMM), graphic or drawing files (files ending with .SDW), and Ami Pro
 document files (files ending with .SAM). Use the Custom installation for
 Letterhead Pro and type in the path data when prompted.

                                  INSTALLATION

 Letterhead Pro may be installed in one of three ways. It may also be removed
 from your hard disk (uninstalled) using the CLEANUP command below.

 1. Standard Installation:

 The installation corresponds to the Ami Pro for Windows COMPLETE installation.
 This installation program placed the macros into the \AMIPRO\MACROS directory,
 and the graphics in the \AMIPRO\GRAPHICS directory. The document files are in
 the \AMIPRO\DOCS directory. If you did not make any changes in the directory
 locations since installing Ami Pro with the COMPLETE installation, then this
 is the method of choice.

 2. Custom Installation:

 This installation will let you place the document file, the macros, and the
 graphics into any directory you wish. You must know the path to each of these
 directories. For example, if you placed all documents into a directory named
 "LETTERS" off the main "AMIPRO" directory on drive "C", then this would be the
 full path:

                               C:\AMIPRO\LETTERS                           

 You will be asked: a. the drive letter, b. the path for document files (files
 ending with .SAM), c. the path for macro files (files ending with .SMM), and 
 d. the path for graphic files (files ending with .SDW). If you are not sure
 how you had installed Ami Pro, then use this method. Locate these files before
 the installation, and write down their proper path. Even if you used the 
 COMPLETE Ami Pro installation, this method will work as long as you know where
 the files are located.

 You must be very careful that you type in the path correctly. The CUSTOM
 installation will take your absolute word for the locations of these files.
 If you make an error, you may have to wait until Ami Pro comes up, EXIT from
 Windows, and try again. If the files are deposited in the wrong directory,
 simply run the CLEANUP.EXE utility to remove them. 

 3. Manual Installation:

 This method does not use the Letterhead Pro INSTALL program, but it must be
 done exactly as follows: 

 a. Locate where the Ami Pro document files, macro files, and  graphic
    files are on your hard disk. 
    
 b. From the INSTALL disk, copy these files into the proper directory:

           1. DOCS.EXE into the documents directory.
           2. MACROS.EXE into the macros directory. 
           3. GRAPHICS.EXE into the graphics directory.
 
 c. DOCS.EXE, MACROS.EXE, and GRAPHICS.EXE, are self-extracting files. You need
    only to type their names and strike the ENTER key, and the Letterhead Pro
    file(s) will be extracted from them.

 d. A utility by the name of CLEANUP.EXE will be placed into each directory
    with the Letterhead Pro files. When you are through using Letterhead Pro,
    run CLEANUP.EXE to seek out and remove every file that was installed.

 e. After extracting all files from the above files, call up Windows and click
    on the Ami Pro icon. After Ami Pro comes up, open the LETPRO.SAM file. 
    Read and print the LETPRO.SAM file as instructed.

                         UNINSTALLING LETTERHEAD PRO

 The installation places the file CLEANUP.EXE into every directory where 
 Letterhead Pro files have been placed. When you wish to remove all installed
 Letterhead Pro files, do the following:

 a. From Windows, go to the Program Manager and click on FILE. Then click on
 the RUN command. On the RUN menu, click on BROWSE. Double click on the drive
 letter (ie., C:\). Find the Ami Pro directory and double click the mouse.
 Double click on each subdirectory. When you see the CLEANUP.EXE file, click
 on it. Select OK to return to the RUN menu, and click on OK. Follow the 
 instructions in CLEANUP. The CLEANUP utility will remove all files in that
 directory, as well as itself. You may have files in up to 3 directories that
 will have to be removed with CLEANUP.EXE.

 b. From DOS, go into the directories where you have installed files and find
 the CLEANUP.EXE file. At the DOS prompt, type:

                       CLEANUP   and strike the ENTER key

 You will be asked if you want to uninstall all Letterhead Pro files in that
 directory. Select 1. to remove all files. This will seek out every installed
 file and remove it, including CLEANUP.EXE. You may find CLEANUP.EXE in up to
 3 different directories. Wherever if is found, Letterhead Pro files are 
 present and should be removed.

 CPI Software also distributes Letterhead Pro for WordPerfect for DOS, Letter- 
 head Pro for WordPerfect for Windows, Letterhead Pro for Word for Windows, 
 Letterhead Pro for WordStar for DOS, and Letterhead Pro for WordStar for
 Windows. In addition, Laser Letterhead plus and The Laser Letterhead Kit are
 available specifically for laser printers. We have been designing letterheads
 for business and personal use since 1987. 
 
 Thank you again, and enjoy your experience with Laser Letterhead Pro.

                               CPI Software
                          Post Office Box 47097
                             Saint Petersburg
                            Florida 33743-7097
 
                           Technical Assistance
                             Voice/Message/Fax
                               813-544-0212   

                              
                                Member of the 
                          Association of Shareware
                          Authors and Distributors

  Letterhead Pro for Ami Pro has been produced by a member of the Association
  of Shareware Authors and Distributors, and as such, has met their demands for
  professional programming. Any problems of a shareware nature that cannot be 
  resolved by CPI Software, may be brought to the attention of the ASAD Ombuds-
  man for possible correction. Please send all information, including the name
  and address of the person or company you received Letterhead Pro for Ami Pro
  from, to: ASAD, ATTN: Ombudsman, 2425 North Limestone Street, Springfield,
  Ohio 45503-1109.  
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3622

     Volume in drive A has no label
     Directory of A:\

    DOCS     EXE     43505   3-30-93   1:17p
    GRAPHICS EXE    198465   3-30-93   1:20p
    MACROS   EXE     30305   3-30-93   1:21p
    INSTALL  EXE      9493   3-30-93  12:40p
    README   TXT      8789   3-30-93   4:13p
    BROWSE   COM      1088   2-01-93  12:00p
    GO       BAT        36   6-08-93   9:17a
    SHOW     EXE      2040   9-12-88  10:48a
            8 file(s)     293721 bytes
                           24576 bytes free
