---
layout: page
title: "PC-SIG Diskette Library (Disk #1040)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1040/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1040"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-FOTO"

    Use PC-FOTO to create labels for your libraries of slides, prints, or
    any other objects that are classified and described like pictures.  Both
    professional and amateur photographers will appreciate the extensive
    information that can be included on labels.  All labels can have at
    least an account number, photographer's name, description of content,
    and location.  Up to nine sets of labels can be printed with four labels
    per set.  Also, a variety of label sizes are possible, so you can use it
    with a variety of photo products.  It works with IBM, Epson, Okidata,
    and Hewlett Packard printers.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1040.TXT

{% raw %}
```
Disk No: 1040
Program Title:  PCFOTO version 2.5S
PC-SIG version: 1.5

Use PC-FOTO to create labels for your libraries of slides, prints, or
any other objects that are classified and described like pictures.  Both
professional and amateur photographers will appreciate the extensive
information that can be included on labels.  All labels can contain at
least an account number, photographer's name, description of content,
and location.  Up to nine sets of labels can be printed with four labels
per set.  Also, a variety of labels sizes are possible so you can use it
with a variety of photo products.

Usage:  Picture/Slide Labeling.

Special Requirements:  Two disk drives and a printer with adjustable
width sprocket feed.

How to Start:  Type GO (press enter).

Suggested Registration:  $25.00

File Descriptions:

100      EXE  Program sub-routine file.
220      EXE  Program sub-routine file.
350      EXE  Program sub-routine file.
BRUN20   EXE  Special operating system.
CONFIG   DRV  System driver file.
FOTO     BAT  Automatic startup file.
FOTO     PAK  Data file.
FOTOD    BAT  Batch file to start the program.
HELP     EXE  On-screen help files.
HELP     PAK  Data file.
INSTALL  BAT  Batch file to install program for your system.
INSTALL  DOC  Documentation to install program.
PCFOTO   EXE  Main program file.
PCFOTO   PAK  Screen library file.
PRTDOC   BAT  Batch file to print INSTALL.DOC.
PRTREG   BAT  Batch file to print registration form.
README        Introductory text file.
REGFORM  DOC  Registration form.
SPEEDSCR COM  Screen operation program.
TEST0001 100  Data file.
TEST0001 220  Data file.
TEST0001 350  Data file.

PC-SIG
1030-D East Duane Avenue
Sunnyvale, CA 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                      <<<< Disk No 1040 PC-FOTO >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print documentation, type: PRTDOC (press enter)                      ║
║                                                                         ║
║ To run the program, type: FOTO (press enter)                            ║
║                                                                         ║
║ PC-FOTO has on-line help, simply press the appropriate key and the help ║
║ screen pops up.                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## INSTALL.DOC

{% raw %}
```

                          INSTALLATION OF PC-FOTO(C)

          PC-FOTO (C)COPYRIGHT 1988 FOTO 64, INC. ALL RIGHTS RESERVED

        PC-FOTO and it support programs are distributed on one disk. 
        It may be installed and used on either two disk drives or on 
        a hard drive. PC-FOTO was not designed for use on machines with
        single disk drive. Operations with a single disk drive are not
        recommended unless both program and data files are situated on 
        the same disk. This might be feasible with a hard drive or 
        on higher capacity disk drives.
        
        Programs are also included to support its operation on machines 
        containing both the IBM Monographic adapter and the Color 
        Graphics Adapter. These systems usually have both monographic 
        and color monitors. 

        Protect your master disks..!! PC-FOTO is not copy protected,
        however, it is designed so that individual routines will not
        function with out the presence of the other files. 

        Make back up copies using the DOS "diskcopy.com" command. These 
        should be verified as exact copies using the DOS "diskcomp.com"
        program. Put you original disks in a safe spot for future use. 
        Be sure to place write protect tabs on your masters before copying 
        them. Use your back up  copies for the creation of your working
        Program disks.

        Format one disk with the /V/S options. To do that with your DOS 
        disk in drive A: enter the following command.( A>FORMAT B:/V/S ) 
        You will be prompted to place disks to be formatted in Drive B: 
        and strike any key. When you are prompted for the Volume name 
        enter the following :PCFOTO22.The format program will when 
        finished indicate if there are any bad sectors. There must be no 
        bad sectors on the disk. 

        To make your working programs follow the following instructions.


        DISK DRIVE INSTALLATION
        Make your System working disk by placing Master Back Up Disks in 
        drive A:(BE SURE IT IS WRITE PROTECTED) and place your newly 
        formated disk in drive B:. Enter the following command at the A 
        prompt. ( A>COPY *.* B: ). When finished label your PC-FOTO 
        Program System disk. 

        This is your working program disk. Before running PC-FOTO format 
        a new disk with out the /S option for the data drive. Copy the 
        files "TEST0001.100. TEST0001.350 AND TEST0001.220" from the 
        master working disk. These files are sample label files which 
        will be helpful as you become aquatinted with the operation of 
        PC-FOTO. 

        If PC-FOTO is to be operated from a hard drive all files  
        from the working disk should be copied to the same 
        directory. To do this it will necessary for a directory to be 
        created on the hard disk and the PC-FOTO files copied to it. 

        Set your default drive to the hard disk. This is usually drive
        C:. At the C> prompt enter the following statement - MD FOTO.
        This will create the directory PCMAIL. Enter CD\FOTO enter the 
        new directory. Place the PC-FOTO System Disk in Drive A:. Enter
        COPY A:.*.*. This will copy the system disk files to hard disk. 
        
        The PC-FOTO disk contains the two batch files FOTO.BAT and 
        FOTOD.BAT. These files contain instructions to the computer
        on the sequence of file loading. It is important that the 
        PC-FOTO files be loaded in proper order. 

        FOTO.BAT is to be used on installations which have only a 
        graphics adapter and monitor. If you have a rare dual system
        containing both monographic and  color graphics adapter 
        (Dual Monitors) you will need to use FOTOD.BAT.

        To start PC-FOTO set your drive to the one containing your
        system disk. In the case of a hard disk set it to the PC-FOTO
        directory. If you have a single adapter system enter at the 
        prompt (a>) FOTO. The Speedscreen Module will be loaded and the
        PC-FOTO program will start. 

        If you have a dual adapter system enter FOTO if the system is 
        operating from the Color Graphics Adapter. It the system is 
        operating from the monographic adapter enter FOTOD. The later
        file will switch the system to the Color Graphics adapter and 
        load the Speedscreen Module and start PC-FOTO. In a dual 
        adapter systems PC-Mail must be operated from the Color Graphics
        Adapter. 

        When PC-FOTO starts the Introductory screen will be displayed. 
        To proceed strike the space bar or enter "h" for help.. The 
        PC-FOTO main menu screen will be displayed. To proceed it will 
        be necessary to place the data disk you created earlier in the 
        drive to receive data (usually B:). Enter this drive letter "B".  
        PC-FOTO will then validate your drive choice and proceed to the  
        menu selections. If the drive choice is not valid, or if the 
        drive is not ready instructions will be given. 

        PC-FOTO is designed as an interactive - self prompting program.
        Many screen and prompts will lead you through the routine. 

        It is highly recommended that when PC-FOTO is run for the first
        time that the HELP program be read. This will assist you is 
        becoming aquatinted the program and it operation. 

        Just enter "H" from the INTRODUCTORY SCREEN. 

        Every effort has been made to produce a reliable - trouble free 
        program in PC-FOTO. Foto 64, Inc. or the author assumes no 
        responsibility for problems arising from program use. Your use 
        of the program supports this understanding. Should you encounter 
        any bugs please note the conditions and send the information to 
        Carl F. Miescke at P.O. Box 2130  Saratoga, CA 95070. This feed-
        back will assist in improving PC-MAIL. 

            PC-FOTO (C)1988 - CARL F. MIESCKE - All Rights Reserved 

                        OTHER PROGRAMS BY CARL F. MIESCKE

        PC-MAIL(2.6): a mail address management program permitting 
        sorting and printing on up to ten fields. Prints on 16 sizes of 
        labels one to five labels wide. Allows for screen searches on up 
        to ten fields or combination of fields. Prints envelopes, file 
        cards,name tags, mailers, rosters, telephone lists, data lists, 
        and special parcel labels. Provides special programs for file 
        and disk management. 


        PC-POSTCARD(2.1): A program permitting the design,printing, and 
        saving of post cards for mailing. Permits message design and 
        printing, return address and permit mail stamp, and addressing 
        of cards from createrd address data files. Supports the creation 
        of new data files and screen searches of these files. PC-
        POSTCARD and PC-MAIL data files are fully compatable. 


        PC-DISK LABEL(2.0): This program permits the design, printing, 
        and storage of labels for 5 1/4" floppy disks. Up to five lines 
        of data are permitted. The labels are printed on 1" x 5" label 
        stock and are easy to read from a distance. 

        FOR FURTHER INFORMATION CONTACT

                        FOTO 64, INC.
                        P O BOX 2130
                        SARTATOGA, CA. 95070

```
{% endraw %}

## REGFORM.DOC

{% raw %}
```

                                 FOTO 64 , INC

                          REGISTRATION FORM - PC FOTO (C)
        PC-FOTO (C) COPYRIGHT 1987 CARL F. MIESCKE ALL RIGHTS RESERVED

      NAME___________________________________________  DATE_________________

      ADDRESS_______________________________________________________________

      CITY_________________________________ STATE ____ ZIP__________________

      TELEPHONE_______________________________  
      
      REGISTRATION NUMBER SHOWN ON THE INTRODUCTORY PCM SCREEN _____________

      WHAT VERSION DO YOU HAVE OF PC-FOTO (top of intro. screen)____________
    
                 PC-FOTO IS BEING USED ON THE FOLLOWING SYSTEM
     
      COMPUTER _______________________________________ RAM _________________

      SYSTEM USED: (MONOGRAPHIC)  (CGA)  (HERCULES)  (OTHER ________________

      DISK DRIVES (1)  (2)  (3)     HARD DISK ____________________ CAPACITY

      MONITORS;  NUMBER ___ : TYPE  (COLOR)   (MONO)   (BOTH)

      TYPE OF APPLICATION OF PC-MAIL _______________________________________

      PRINTER: MAKE_________________________________ MODEL _________________

      HOW DID YOU RECEIVE PC-FOTO..? _______________________________
     
      ______PLEASE SEND INFORMATION ON AVAILABLE LABELS FOR PC-FOTO..                          

      COMMENTS ARE APPRECIATED..........
     
      Please complete this form and mail with your check for $25.00 to 
      following address...... Your registration confirmation and the 
      technical support number will be sent shortly. 
                      
      FOTO 64, INC.  SOFTWARE REGISTRATON   PO BOX 2130  SARATOGA, CA  95070
                           PC-MAIL (C) FOTO 64, INC.
     
                  THANK YOU FOR YOUR SUPPORT OF PC-FOTO.....    

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1040

     Volume in drive A has no label
     Directory of A:\

    100      EXE     21217   1-12-89  10:01p
    BRUN20   EXE     69454   1-16-87  11:44a
    PCFOTO   EXE     13121   1-11-89   3:28p
    HELP     EXE      4705   1-11-89   7:58a
    220      EXE     16945   1-12-89  10:03p
    350      EXE     21377   1-12-89  10:05p
    SPEEDSCR COM      5333  10-01-86  12:00p
    FILE1040 TXT      1808   2-01-89   4:14p
    PCFOTO   PAK     33241   1-13-89  12:43a
    FOTO     PAK      4909   1-13-89  12:53a
    HELP     PAK     19300  11-06-88   9:03a
    INSTALL  DOC      7632   8-06-88  11:03a
    REGFORM  DOC      1837  11-14-88   2:51p
    FOTO     BAT        66   1-13-89  12:06p
    FOTOD    BAT        66   1-13-89  12:07p
    INSTALL  BAT        18   7-30-87  12:28a
    PRTDOC   BAT       208   8-01-87   7:50a
    PRTREG   BAT       209   8-22-87   8:04a
    README            1518   8-04-88  12:06a
    TEST0001 100       210   7-31-88  11:16a
    TEST0001 220        97   7-31-88  11:21a
    TEST0001 350       156   7-31-88  11:08a
    CONFIG   DRV         7  11-01-88  12:19a
    GO       BAT        38   5-04-88   4:26p
    GO       TXT       771   1-30-89   1:25p
           25 file(s)     224243 bytes
                           83968 bytes free
