---
layout: page
title: "PC-SIG Diskette Library (Disk #2037)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2037/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2037"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "L-A-S-E-R LETTERHEAD PLUS"

    This program is an easy-to-use laser printing program that will let you
    create letterhead stationery and matching envelopes on your HP LaserJet
    printer.  This includes all Hewlett Packard printers except the original
    LaserJet Model.  Supported models are the LaserJet Plus, LaserJet 500
    Plus, LaserJet 200, Series II, Series IID, Series IIP, and the new
    Series III. A closely compatible laser printer may also be used.
    
    All font handling is automatically done for you.  Copy your fonts into
    the directory with the program files, place the font names in the Setup
    program, and you are ready to go.  With a few menu choices you can
    create stationery that looks as though it came from a typesetter's
    workbench.
    
    Any laser printer using Level IV (page formatting feature) HP Printer
    Command Language (PCL) can use LASER LETTERHEAD.  Using proportional
    fonts of your choice you may select centered or left justified groupings
    with ten variations of borders and shadings precisely formatted and
    calculated.  You do not need bold type: the program will make bold type
    from your light or regular fonts.
    
    Create not only a business letterhead, but a personal version also. You
    do not have to calculate each line of print, nor worry about the
    difficult task of centering proportional fonts.  The program does it all
    for you.  Boxing in lines is a snap, and shading the letterhead is a
    matter of choice.  Everything is menu-driven to make it easy.
    
    Addresses placed on envelopes can be saved to the address database and
    used again.  This dBASE-type file can be exported to a wordprocessor
    and used to write form letters.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2037.TXT

{% raw %}
```
Disk No: 2037                                                           
Disk Title: L-a-s-e-r Letterhead plus                                   
PC-SIG Version: S1                                                      
                                                                        
Program Title: Laser Letterhead Plus                                    
Author Version: 2.0                                                     
Author Registration: $25.00                                             
Special Requirements: 512K RAM and a laser printer.                     
                                                                        
This program is an easy to use laser printing program that will let you 
create Letterhead Stationery and matching envelopes on your Hewlet      
Packard LaserJet Printer. This includes ALL Hewlett Packard printers    
except the original LaserJet Model. Supported models are the LaserJet   
Plus, LaserJet 500 Plus, LaserJet 2000, Series II, Series IID, and the  
new Series IIP. A closely compatible laser printer may also be used.    
                                                                        
All font handling is automatically done for you. Copy your fonts into   
the directory with the program files, place the font names in the Setup 
program, and you are ready to go. With a few menu choices you can create
stationery that looks as though it came from a typesetter's workbench.  
                                                                        
Any laser printer using Level IV (page formatting feature) HP Printer   
Command Language (PCL) can use Laser Letterhead. Using any proportional 
font of your choice you may select centered or left justified groupings 
with ten variations of borders and shadings precisely formatted and     
calculated. You do not need bold type: the program will make bold type  
from your light or regular fonts.                                       
                                                                        
Create not just a business letterhead, but a personal name version also.
You do not have to calculate each line of print, nor worry about the    
difficult task of centering proportional fonts. The program does it all 
for you. Boxing in lines is a snap, and shading the letterhead is a     
matter of choice.  Everything is menu driven to make it easy.           
                                                                        
Addresses placed on envelopes can be saved to the address database and  
used again. This dBase type file can be exported to a word processor and
used to write form letters.                                             
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## README.DOC

{% raw %}
```

            README FILE FOR LASER LETTERHEAD PLUS Version 2.0
==============================================================================
To Print on a LASER PRINTER, Enter at prompt: PRINT README.DOC and Press ENTER
------------------------------------------------------------------------------ 


  Thank you for trying Laser Letterhead Plus. The big change in Version 2 
Laser Letterhead Plus is the flexible address database that adds much to the
program. Every function key now has a program on it from printing labels to
performing the internal test and print out for your HP LaserJet Series II or
IIP.   


 
  Before going any further, make a copy of the program disk and put the orig-
  inal away. (Use Diskcopy A: A: or the wildcard Copy *.* B: ...whatever you
  are comfortable using.)


 
  -> 1. INSTALLATION: The program disk has 4 files on it: 
                        


        a. LHP.EXE - Self extracting compression file comprised of all files
           for LASER LETTERHEAD PLUS. When expanded they will occupy around
           550K. If you are using soft fonts, they will use about the same 
           amount of space, so plan on taking up at least a megabyte of disk
           area to run Laser Letterhead. Typing LHP at the command line will
           start all the Laser Letterhead files to expand automatically,
           so don't do that unless it's what you want to do. The install 
           programs will handle that for you. 

        

        b. INSTALLF.BAT - This is the installation for placing the files on
           a large floppy diskette, like a 1.2M or 1.4M. You can't install
           onto a 360K or run off of two separate 360's. There are just too
           many PCL commands that have to be fired back and forth between 
           your laser and the computer to make this practical. The error
           recovery system will flip out if you attempt it. 



        c. INSTALL.BAT - This is the hard disk installation. It's really the 
           way we recommended you go. Floppy diskettes are too slow for most
           people and you will need all the speed you can get on the crucial
           first pass through the printer. More on that later... 



        d. README.DOC - You're here now.






.

README - 2

 -> INSTALLATION ON A FLOPPY DISKETTE:
    
    This installation will assume you are placing the copy of the program on
    disk Drive A and copying all expanded files to at least a l.2M or 1.4M
    high density Drive B. The program disk is a 360K with compressed files
    on it, and you can copy a 360K from a high density drive to another high
    density drive, if you have that combination. 

    Insert the copied program disk in Drive A.  Target diskette is in Drive B.
    Log onto Drive A. At the "A" prompt, type INSTALLF B  ...do not place a
    colon after the B. It makes no difference if you use upper or lower
    case letters... and be sure you spell "INSTALLF" with an "F" on the end:

                               A> INSTALLF B

    The screen will tell you what is happening. When it is finished you will
    be on drive B with the program files. You may now print out the Manual so
    you can do the Setup Program. To print the Manual, turn on your  laser 
    printer and make sure it is ready to go and you have at least 57 blank
    pages loaded. Type PRINTER at the B prompt. Get your fonts together and
    you can begin a interesting session with your laser, the Manual, and 
    LASER LETTERHEAD PLUS.  

 -> INSTALLATION ON A HARD DISK: No prior Laser Letterhead on the disk. 

    This installation will assume you are placing the copy of the program 
    disk in Drive A and installing the program on hard disk C. If this isn't 
    the case, substitute the appropriate drives. The program disk is a 360K
    disk containing around 550K of programming compressed into less than half
    that amount. If all you have is a high density 1.2M drive, that will do
    fine. 
    
    Place the copied program disk in disk in Drive A. Log onto Drive A. The
    target disk is Drive C. The directory will be created for you and called
    LETTER. If you do not want this name for your directory you can create
    another name later, and copy all files to that directory. If that will
    not do, then use the manual install method below.
 
    At the "A" prompt, type INSTALL A C  ...the first letter is the drive you
    are installing from, and the second letter is the drive you are installing
    to.  Do not add a colon after any of the letters:

                                A> INSTALL A C

    The screen will move quickly, but will tell you what is happening. When 
    the action stops, you will be told that the installation is finished and
    find yourself in drive C and directory LETTER. 
  
    If you want to take a break, first load your laser printer with at least
    57 blank paper pages, make sure it is on and connected, and type at the
    C prompt PRINTER and strike <ENTER>.

                                    C> PRINTER



.

README - 3

    On screen you will be shown how to set your printer for printing lines
    with the text. This is necessary because the illustrations in the Manual
    require the IBM or USASCII symbol set and COURIER 10 font. If your
    default font or symbol set will not do this, follow the instructions
    (If you have a HP Series II or HP Series IIP). The popular Roman-8 symbol
    set will not work.
   
    The laser printer will begin printing out the Manual so you can do the
    SetUp program. Then take a break.        

    After printing the Manual, make sure your laser is on and switched to the
    computer, and type LP ...then strike <ENTER> at the C prompt. LASER 
    LETTERHEAD PLUS will come on the screen. Gather up any soft fonts or get
    your Font Cartridges together and follow the instructions in the Manual on 
    SetUp. This is one of the best ways to spend a little time.

 -> INSTALLATION ON A HARD DISK with copy of Laser Letterhead version 1+.

    This installation will assume you are placing the copy of the program 
    disk in Drive A and installing the program on hard disk C and that a copy
    of Laser Letterhead version 1+ is on the hard drive in a directory called
    LETTER. If this is not the case follow the manual instructions below. 
    
    The general idea in this installation is to do a PRTSC or print screen
    of your SetUp in the old Laser Letterhead. You will then Exit the program 
    and install LASER LETTERHEAD PLUS files over the old Laser Letterhead
    files. Bear with us on the details of things you may already know.
     
    Before doing the install program, call up the old Laser Letterhead, and
    press <F10> to bring up SetUp. When SetUp is on the screen, press your
    <PrtSc> or print screen key. You may have to press <SHIFT> + <PRTSC>
    to actually strike <PRTSC>. Press the ON LINE key on the Control Panel
    of your laser printer to take it off line, and then press FORM FEED.
    In order for print screen to work on a laser printer set for 60 lines,
    you would have to have at least 60 lines on your screen. Since this is
    probably not the case, you must insert a form feed to print and eject
    the page. You want to get a picture of your SetUp so you can duplicate
    it. Don't forget to press the ON LINE key again after printing the page
    to put your laser printer back on line. 

    You will not be able to use old LETTER.DAT in your new LASER LETTERHEAD
    PLUS, so you will have to know how you have SetUp arranged.

    Exit old version 1+ of Laser Letterhead. Log back onto drive A where the
    new Laser Letterhead Plus Program diskette is located. Type INSTALL A C
    at the A prompt and strike <ENTER>:

                                A> INSTALL A C

    The screen will move quickly, but will tell you what is happening. Before 
    overwriting any old files with the same name, you will be asked if you  
    want to do that.  Answer Y to every question. You want to replace every
    old file of Laser Letterhead with the new LASER LETTERHEAD PLUS file with
    the same name.


.

README - 4

    When finished, you will have more files in your directory
    and any font files you had there will be untouched. You will end up in
    C drive in the LETTER directory. Stay there to print the Manual and do
    SetUp.
  
    If you want to take a break, first load your laser printer with at least
    57 blank paper pages, make sure it is on and connected.  Type at the
    C prompt PRINTER and strike <ENTER>.
                              
                               C> PRINTER 

    On screen you will be shown how to set your printer for printing lines
    with the text. This is necessary because the illustrations in the Manual
    require the IBM or USASCII symbol set and COURIER 10 font. If your
    default font or symbol set will not do this, follow the instructions
    (If you have a HP Series II or HP Series IIP). The popular Roman-8 symbol
    set will not work. 

    When that is completed, the laser printer will begin printing out the 
    Manual so you can do the SetUp program. Now take a break.        
 
    After your break, type LP at the C prompt and LASER LETTERHEAD PLUS will
    come up. You will find a new title screen: strike <ENTER> to go by it,
    and go directly to SetUp without downloading fonts. Take out your copy
    of the <PRTSC> snapshot of the old Laser Letterhead and copy it into
    the new Laser Letterhead Plus SetUp.  Do the download if you are using
    soft fonts, when SetUp is completed. Now you are ready to go. Read over
    the Manual, especially the parts on the Function Keys and the database.
    This is all new material.

 -> MANUAL INSTALLATION OF LASER LETTER LETTERHEAD FILES:

    If you are installing new LASER LETTERHEAD PLUS files over the old 
    Laser Letterhead files, enter the old program, press <F10> and do
    a <PRTSC> or print screen of the old SetUp. The old LETTER.DAT data
    file will not work in the new program. When expanding the new program
    in the same directory, the program will want you to confirm every new
    file that over writes an old one. Answer Y for Yes. You want to replace
    every old file of Laser Letterhead with Laser Letterhead Plus files.
  
    If you have not done a <PRTSC> or print screen with a laser printer,
    unless you have 60 lines on your screen, you must take your printer off
    line and press FORM FEED on your printer. This will eject the page since
    it is not a full 60 lines for an automatic eject. Don't forget to press
    your ON LINE again after doing this to put you laser back on line.
 
    A manual installation is simply copying all the Laser Letterhead Plus 
    files into a drive or directory where you want them.  In order to use the
    files, however, you must uncrunch or expand them. Here's how you do it:

  -> If target is a diskette that is at least a high density 1.2M or 1.4M,
    copy LP.EXE onto it. Then log onto that disk and type LP at the prompt.
    The files will uncrunch or expand. When done, DELETE LHP.EXE from the disk.
    You do not need this file any more and you will need the room for soft
    fonts. Make sure the printer is connected and on. Type LP to call up the
    program and use the Manual and your copy of <PRTSC> to help do SetUp.
.

README - 5

  -> IF target drive is a hard disk, create a directory, called LETTER. If
    you do not want to use this name, then use any name: but you must also
    alter the LP.BAT file when it is uncrunched (below).    

    Copy LHP.EXE into the directory. At the command line type LHP ...Strike
    <ENTER> and the files will uncrunch or expand. When done, DELETE LHP.EXE  
    as you do not need it (You have extracted the files out of it). Type 
    PRINTER to print the Manual on your laser.

    After the Manual is printed, leave your laser printer connected and on.
    Then type LP and call up the program. With the Manual and the <PRTSC>
    copy you made above, do SetUp.

  -> IF IN ANY OF THE ABOVE YOU HAVE NOT INSTALLED THE PROGRAM ON DRIVE C
    AND IN A DIRECTORY CALLED LETTER, YOU MUST DO THE FOLLOWING:

    Using EDLIN, an Editor, or word processor in non-document or ASCII mode, 
    call up the file LP.BAT. You will find SET EPATH=C:\LETTER ...Carefully    
    change LETTER to the directory name you have chosen. If you have 
    installed the program files on another drive instead of C ...change that
    also. Put everything in upper case with a space between SET and EPATH 
    only. You will also find a SET CLIPPER setting. Do not alter SET 
    CLIPPER but only SET EPATH:
 
                             SET EPATH=C:\LETTER  


    This setting directs the program to your fonts, so you need this
    set properly when you call up the program or in your AUTOEXEC.BAT file
    when you boot up the computer. If the AUTOEXEC.BAT file is where you
    want it, place it after the SET PATH or PROMPT setting. You do not need
    it in both places. If you place it in the AUTOEXEC.BAT file, then delete
    it from the LP.BAT file.  Occasionally type SET at the command line and
    check that it is correct. A wrong setting means a long wait or error in
    the crucial first pass of your laser printer (see Manual).  


    ============================= [END INSTALLATION] =======================   

  -> TO PRINT THE REGISTRATION FORM ON YOUR LASER PRINTER:

    HP LaserJet Series II users should set the symbol set to SYM SET=IBM-US
    and the font should be a fixed width internal font such as COURIER 10.  
    This will provide the line drawing for the registration form. Leave it
    at this symbol set to print the Manual.

    HP LaserJet Series IIP set your default Internal symbol set to PC-8.
    (SYM SET=PC-8) Select any COURIER 10 font.

    All others: select a default fixed width font that uses an IBM or USASCII
    symbol set that uses lines or line drawing. 
          
    WHEN THIS IS DONE, TYPE AT THE COMMAND LINE OF THE DIRECTORY WHERE LASER
    LETTERHEAD PLUS IS LOCATED, THE WORD "REGISTER" AND STRIKE <ENTER>:
 
                                C> REGISTER
.

README - 6

    You will be asked if your laser printer is ready to print one page. Strike
    <ENTER> and you will be asked to enter the port - LPT1  LPT2  or LPT3
    or you may just strike <ENTER> for your default PRN port.  The form will
    then print on your laser printer if that is on the default port.

    You may print this form or a dot-matrix printer without difficulty. Set 
    printer to whatever setting or emulation mode that will print the IBM 
    character set. Follow the same instructions as above.
 
    There is also a copy of the Registration Form immediately after the cover
    sheet of the Manual.

 -> TO PRINT LASER LETTERHEAD PLUS MANUAL ON YOUR LASER PRINTER.

    Follow the same instructions as above to set to set your Laser printer to
    a symbol set that prints lines (SYM SET=IBM-US or SYM SET=PC-8).  This is
    very important, as there are many illustrations in the manual that make 
    use of lines.

    WHEN THIS IS DONE, TYPE AT THE COMMAND LINE OF THE DIRECTORY WHERE LASER
    LETTERHEAD PLUS IS LOCATED, THE WORD "PRINTER" AND STRIKE <ENTER>:

                                 C> PRINTER

    You will be asked if you laser printer is ready, and to press any key.
    Press any key and you will be asked to enter the printing port - LPT1
    LPT2 or LPT3. If, instead you strike <ENTER> your default print port
    (PRN) will be used. The form will then print on your printer if it is
    located on the default port.

    If using a dot-matrix printer to print the Manual, you will have diffi-
    cultly keeping the pages aligned with the perforations, since the Manual
    has been set up for 60 lines per page that laser printers use. This will 
    produce a readable scroll-like Manual, if you can work with it that way. 
    If possible, print the Manual on a laser printer.       

 -> LAST MINUTE NOTE: ALL SERIES IID AND SERIES IIP OWNERS: Although it is 
    mentioned in the Manual that you can use portrait orientated fonts in
    place of landscape orientated fonts, it should be emphasized here. Your
    printers will automatically rotate the fonts to the proper orientation,
    if they are portrait fonts being used in the landscape positions in 
    SetUp. If you have cartridge fonts with only portrait orientation, you
    can use them anywhere in SetUp. This will make the first pass much 
    quicker and speed up printing as a whole.

 -> END OF README.DOC    ENJOY LASER LETTERHEAD PLUS! 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2037

     Volume in drive A has no label
     Directory of A:\

    FILE2037 TXT      3257   1-15-90   6:27p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   1-16-90  12:02p
    INSTALL  BAT       688  12-05-89   8:53p
    INSTALLF BAT       707  12-09-89   7:04p
    LHP      EXE    243642  12-12-89   4:58p
    README   DOC     17057  12-12-89   5:15p
            7 file(s)     266083 bytes
                           53248 bytes free
