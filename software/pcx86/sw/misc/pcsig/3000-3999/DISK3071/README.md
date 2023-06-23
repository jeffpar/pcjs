---
layout: page
title: "PC-SIG Diskette Library (Disk #3071)"
permalink: /software/pcx86/sw/misc/pcsig/3000-3999/DISK3071/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #3071"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## FILE3071.TXT

{% raw %}
```
Disk No: 3071                                                           
Disk Title: MEDPAS Disk 1 of 3 (also 3072, 3073)                        
PC-SIG Version: S1.0                                                    
                                                                        
Program Title: MEDPAS                                                   
Author Version: 2/92                                                    
Author Registration: $59.00                                             
Special Requirements: CGA and two floppy drives.                        
                                                                        
MEDPAS is an electronic medical reference manual designed for anyone    
without a medical background who wants to become a more informed        
patient. It covers a large part of the problems that are encountered by 
general practitioners in everyday work. The program is logically        
organized and it's easy to find the information you want. Most          
information is displayed on the screen for you to read. There is also a 
database to keep track of your medical treatments. MEDPAS is an         
impressive medical resource.                                            
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  PC-SIG Disk #3071  MEDPAS  >>>>                  ║
║                     Disk 1 of 3 (also #3072, #3073)                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║                                                                         ║
║  To display installation instructions, type:  README  (press Enter)     ║
║                                                                         ║
║  To print the registration form, type:  COPY REGISTER.FRM PRN  (Enter)  ║
║                                                                         ║
║                                                                         ║
║                                         (c) Copyright 1992, PC-SIG Inc. ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## README.TXT

{% raw %}
```
                          Welcome to MEDPAS, 
                 a shareware product from iDRSysems Ltd.
                       (c) iDRSystems Ltd 1992
           
           
Whatever format of disk you received, the following files should
be present:
             
          Readme.exe     - This file
          Readme.txt     - Corresponding text file
          Manual.lzh     - Manual (packed)
          Insth.bat      - Install to hard disk (not packed)
          Instf.bat      - Install to floppies (not packed)
          Register.frm   - Registration form (not packed)
          LHA.exe        - LHA packer/unpacker (c) Joshi
          LHADOC.lzh     - LHA documantation (packed)
          File1.lzh      - Medpas file (packed)   
          File2.lzh      - Medpas file (packed)
          File3.lzh      - Medpas file (packed)
          File4.lzh      - Medpas file (packed)
          File5.lzh      - Medpas file (packed)
             
             
The main files are packed using LH213 (c) Joshi. They will need
unpacking using the install batch files

              INSTH.BAT ..... for hard disk installation
              INSTF.BAT ..... for floppy disk installation).
            
The installation files above are NOT interchangeable between different 
formats. They are specific for the format they originated on. That is,
INSTH.BAT and INSTF.bat on the 3.5" disk are not the same as that on 
the 5.25" disk.
            
Registration:
                 
     MEDPAS is shareware, for evaluation only. If you wish to
continue using it after a trial period, or find it useful, you
must register with iDRSystems Ltd or Cambridge Technologies.
Registration will bring the benefits of

        ... a fuller illustrated manual
        ... the newest version of MEDPAS
        ... an enabled Dictionary and Notepad
        ... a clear conscience
        ... a substantial discount for the 256 color VGA
            illustrated Windows version ( now being written )
        ... technical support with automatic free upgrades.

        You may register

               by POST with the registration form
                    ... use either REGISTER.FRM
                        or the registration module in the manual

                or by PHONE on the numbers found
                        on REGISTER.FRM or in the manual.

         REGISTER.FRM may be printed by logging on to the disk containing
         it and typing REGISTER.FRM > PRN or by using the on screen manual
         and asking it to print the form.
                
       Payment

             ... CREDIT card by mail or phone (see Register.frm)
             ... MONEY order, personal cheque or bank draft in the
                 correct currency.
                 International  - USA Dollars
                 United Kingdom - Pounds sterling


Installation:
                  
     HARD DISK:
          To install MEDPAS to a hard disk, make sure you have
     more than 1.5 MB free. Place disk 1 in the floppy drive and
     type:

            INSTH <source drive > <destination drive>
         eg INSTH A C

     where <source drive> is the drive containing the MEDPAS disk 1
     you received from the distributor, and <destination drive> is
     the drive the MEDPAS files will be copied TO.
     A third parameter  is available eg Insth A C M  which will
     put you into the manual immeadiately you have installed MEDPAS.

     Follow onscreen instructions to continue.
         
     FLOPPY DISKS:
          To run from floppy disk you need 2 floppy drives, these
     may be any drive, 5.25, 3.5, 360K, 720k, 1.4 MB or 1.2 MB.
     Format 5 disk in your B: drive, place your original disk 1 in
     drive A: and type

            INSTF       (-no drive specification is needed)

          If Drives A: and B: are dissimilar, copy the newly installed
     Disk 1 onto a disk formatted in drive A: and label it Disk 1.
             
Further Info:

     On the hard disk all the unarchived files will be under
     the subdirectory of \IDRSYSMP. There will be one batch file
     MEDPAS.BAT  in the Root Directory. Note this is not the same
     as the MEDPAS.BAT file used to run the floppy disk version.
     The floppy disk file distribution is detailed in the file
     MEDFILES.TXT found on Disk 4 of the unarchived set or in the
     \IDRSYSMP subdirectory on your hard disk.


Running MEDPAS:
              
     The hard disk will have a subdirectory of IDRSYSMP and a
batch file called MEDPAS.BAT in the root directory. Simply type

                      MEDPAS  <CR>

and follow instructions. Help is available with <Alt><F1>.
          
     Running from floppies, place Disk 1 in Drive A: Disk 2
in Drive B: and also type

                      MEDPAS  <CR>
          
           
Manual:
            
     Manual.exe is a dedicated reading utility which allows you to
browse through an abridged version of the printed manual available
with registration. It is to be found in the \IDRSYSMP subdirectory
on the hard disk or on Disk 4 of the new disks.
           
           
Caveat:
                
     Please enjoy the program but remember...  
	
	The software should only be used as an educational adjunct 
	to the professional advice and help that is the proper domain 
	of a qualified physician. 
	It should never be used in any way as a replacement for it. 
	The software is not an expert system and is not to be used to
	diagnose, treat or otherwise be concerned with that which is the
	province of a physician. iDRSystems Ltd. advises that qualified
	medical help should be sought for any matter concerning the above.
	MEDPAS is meant for information only.
#
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #3071

     Volume in drive A has no label
     Directory of A:\

    INSTF    COM      3870   4-05-92   7:30p
    MEDPAS   HAT        67   3-12-92  10:04a
    README   EXE      2532   3-12-92  10:04a
    README   TXT      5809   3-12-92  10:04a
    REGISTER FRM      2459   3-12-92  10:04a
    FILE1    LZH    138177   5-17-92   4:03p
    LHA      EXE     34283   3-12-92  10:04a
    LHADOC   LZH     17283   3-12-92  10:04a
    FILE2    LZH     91778  10-13-55   2:56a
    INSTH    COM      5188   4-05-92   7:30p
    MANUAL   LZH     23104   4-03-92   8:51p
    MEDPAS   FAT        65   3-12-92  10:04a
    GO       TXT       924   6-25-92   5:39p
    GO       BAT        31   6-04-92   2:25a
    FILE3071 TXT      1777   6-25-92   5:48p
           15 file(s)     327347 bytes
                           27648 bytes free
