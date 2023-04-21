---
layout: page
title: "PC-SIG Diskette Library (Disk #1769)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1769/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1769"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOWNLOAD"

    DOWNLOAD is an utility program that manages the process of downloading
    soft fonts to a Hewlett Packard LaserJet, DeskJet, or compatible
    printers. DOWNLOAD can also select fonts as they are being sent.
    DOWNLOAD can send a font, or group of fonts, through the standard
    parallel printer port to your LaserJet or DeskJet printer. You have
    optional control over the soft font ID number, whether the font is
    permanent or temporary, and whether it is a primary or secondary font.
    A list of fonts may be sent to the printer by specifying the individual
    fonts names in an ASCII text file.  All fonts resident in your laser may
    be optionally deleted before new fonts are downloaded, or you can reset
    the printer first.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DOWNLOAD.TXT

{% raw %}
```









                                 DOWNLOAD









                                Version 1.8











           Copyright 1986, 1987, 1988, 1989 by Elfring Soft Fonts






                           Elfring Soft Fonts
                              P.O. Box 61
                            Wasco, IL 60183
                             312-377-3520

                            CIS: 32417,3437




                             TABLE OF CONTENTS


     SUMMARY....................................................... 1




     REQUIREMENTS.................................................. 1




     FONT CHARACTERISTICS.......................................... 1




     RUNNING DOWNLOAD.............................................. 2




     ERROR MESSAGES................................................ 5




     COMMON PROBLEMS............................................... 5




     DISTRIBUTION.................................................. 6




     WARRANTY...................................................... 6




     ORDER FORM.................................................... 7



                                  SUMMARY

     DOWNLOAD.EXE is an IBM PC utility program that manages the process 
     of downloading soft fonts to a LaserJet, DeskJet, or compatible 
     printers.  DOWNLOAD can also select fonts as they are being sent.  
     DOWNLOAD can send a font, or group of fonts, through the standard 
     parallel printer MS-DOS devices to your LaserJet or DeskJet printer.
     You have optional control over the soft font ID number, whether the 
     font is permanent or temporary, and whether it is a primary or sec-
     ondary font.  A list of fonts may be sent to the printer by specify-
     ing the individual fonts names in an ASCII text file.  All fonts 
     resident in your laser may be optionally deleted before new fonts 
     are downloaded, or you can reset the printer first.

     This package is now distributed as shareware and you are expected to 
     register it if you use it!  You may try this package out for a period 
     not to exceed 15 days. Registration costs $15 and bring you a number 
     of benefits.  See the end of this documentation file for a registra-
     tion form.

     Elfring Soft Fonts now offers a memory resident (TSR) version of 
     DOWNLOAD with features you won't believe.  This version finds your
     soft fonts and presents a list of them for you.  You can download or 
     select any font on either a laser printer or a DeskJet.  Font memory 
     requirements are shown and the program keeps track of all fonts that have 
     been sent to your printer.  Finally, you can change printer orrienta-
     tion, character size, default font, or reset the print.  TSR Download
     is $30.00 by itself or $45.00 with a set of soft fonts, (Helv & Roman
     portrait 8, 10, 12, 14 point medium/bold/italic + 18 point bold), 
     plus our 28 page soft font manual.  (The manual explains all there is
     to know about what a soft fonts is, how they are named, and how to 
     select them!)


                               REQUIREMENTS

     DOWNLOAD requires a minimum of 128K of memory, an HP LaserJet, DeskJet,
     or compatible printer, and a parallel port to talk to the printer.  
     Parallel printer ports LPT1:, LPT2:, LPT3: are supported by the program.  


                           FONT CHARACTERISTICS

     All soft fonts have three characteristics associated with them.  
     Each font must have a unique ID number assigned to it.  This lets 
     you select a soft font through software commands. Each font must 
     be defined as either temporary or permanent.  Temporary fonts are 
     deleted whenever the LaserJet is reset and are thus not as widely 
     used as permanent ones since most software that controls the 
     LaserJet sends a reset command out first, (deleting all temporary 
     fonts).  Finally, a font may be defined as either primary or sec-
     ondary.  (Note that only one primary and one secondary font can 
     exist at one time and you don not have to have a primary or sec-
     ondary font.)

                                   1


     The LaserJet lets you switch between primary and secondary fonts 
     with simple control characters.  Control-N selects the secondary 
     font, while control-O selects the primary font.  Embedding these 
     characters in your text file will let you switch between fonts.

     Fonts that have ID numbers assigned to them may be selected based 
     on that ID number. To do this you send an <Esc>(#X to the printer,
     where <ESC> stands for the escape key (1BH), and # is replaced by 
     the ASCII soft font ID number. (To select soft font ID 15 you would
     send <Esc>(15X. Finally fonts can be selected by font metrics. 
     In this method you describe the font. A sample Times-Roman selection
     string would be: <Esc>&l0O<Esc>(0U<Esc>(s1p12v0s0b5T (12 point, por-
     trait, medium weight, US ASCII, Times-Roman). This method is too 
     complex to explain here. We do offer an inexpensive Soft Font Manual
     that explains everything there is to know about how to name, use, 
     select, and recognize soft fonts if you want more information.

     The DOWNLOAD program is designed to send soft fonts to the laser 
     printer and to help you manage all these font characteristics.  
     You can select the font ID number, and font status at the same 
     time that you download the font.  You can also make list files 
     to manage the process of sending a number of soft fonts to your 
     printer at one time.  Finally, soft fonts may be archived into a 
     common file and automatically extracted for downloading.


                             RUNNING DOWNLOAD

     DOWNLOAD is easy to use.  The only thing you need to remember is 
     that DOWNLOAD will automatically prompt you with a brief descrip-
     tion of how to use it if you want it to.  Simply type DOWNLOAD 
     followed by a carriage return.  The program will print a short 
     explanation of its operation and options as shown below:


     Send soft fonts to a LaserJet or DeskJet printer, V1.8
     Copyright 1986, 1987, 1988 1989 by Elfring Soft Fonts

     Use ──> download fontname [device ID ─options]
       where: everything the between '[]'s is optional and...

        fontname = the name of the font to download or the name of
                   a list of fonts to download preceded by an '@'
                   character
        device   = LPT1, LPT2, or LPT3
        ID       = starting ID number to assign font to (0 ─ 32767)
        options  = T to make font temporary, P to make font primary
                   S to make font secondary, Q for quiet operation,
                   D for delete all fonts prior to downloading, or
                   R to reset the printer.

     When optional arguments are not present, download defaults to:
     LPT1, ID = 0, permanent font, and font is NOT selected.



                                   2

          For example:                                              
     download he100rpn.usp lpt1: 5 ─tp                              
     download @font.lst ─q                                          
     download od300rpn.usp 1000 ─sq LPT2                            

     To run DOWNLOAD you must specify either the name of the soft font 
     to send to your printer, or the name of a disk file that contains 
     a list of soft fonts to send to the printer.  You can optionally 
     specify the device to send the file to, LPT1, LPT2, or LPT3.  In 
     addition, you can optionally control the three font attributes, 
     (ID number, permanent/temporary, primary/secondary), specified 
     above.  To invoke DOWNLOAD type:

     download yourfont [port ID# -options]

     All items between the "[" and "]" characters are optional.  This 
     means you do not have to include them.  Note that the "[" and "]" 
     characters are not actually used in a command.  Also note that 
     these optional items can be specified in any order.  So, to down-
     load a Times-Roman 24 point bold font you would enter:

     download tr240bpn.usp

     The DOWNLOAD program will find that file, (if it doesn't exist 
     DOWNLOAD will let you know), and defaults to: printer port LPT1, 
     soft font ID 0, and permanent status.  The font will not be sel─
     ected as either primary or secondary.  The screen will look as 
     follows:

     Send soft fonts to a LaserJet or DeskJet printer, V1.8
     Copyright 1986, 1987, 1988, 1989 by Elfring Soft Fonts
     Sending font tr240bpn.usp with ID 0, 12427 bytes
     Sent 1 file, with a total of 12427 bytes.

     A more complicated command might involve using a different print─
     er port and assigning a soft font ID number.  For example:

     download tr100bpn.usp 1000 lpt2 ─s

     sends the bold faced Times─Roman font to the LaserJet via LPT2: 
     and assigns it font ID 1000, permanent and secondary status.  The 
     secondary status lets you select this font in a document by em─
     bedding a control─N, (you can change back to your primary font 
     with a control─O).

     DOWNLOAD is capable of using a list of file names created with any 
     ASCII text editor.  To do this type:

     download @fonts.lst 10 

     This instructs the program to find the disk file "fonts.lst".  
     This file is assumed to contain a list of font file names to send 
     to the LaserJet.  All files will be sent in the order they appear 
     in the list.  For example, if the file "fonts.lst" looks as fol─
     lows:


                                   3

     he100rpn.usp
     he100bpn.usp
     he100ipn.usp
     he180bpn.usp
     he300bpn.usp

     then the command "download @fonts.lst 10" will load all five 

     fonts to your LaserJet through LPT1.  The "he100rpn.usp" font 
     will be assigned font ID 10 and loaded first.  Font "he100bpn.usp" 
     will be loaded next with font ID 11.  This process will continue 
     sequentially until font "he300bpn.usp" is sent to the printer as 
     font ID 14.  All fonts will be assigned permanent status.  The 
     screen will look as follows after the downloading process is finished:

     Send soft fonts to a LaserJet or DeskJet printer, V1.8
     Copyright 1986, 1987, 1988, 1989 by Elfring Soft Fonts
     Sending font he100rpn.usp with ID 0, 12427 bytes
     Sending font he100bpn.usp with ID 1, 18834 bytes
     Sending font he100ipn.usp with ID 2, 33754 bytes
     Sending font he180bpn.usp with ID 3, 48531 bytes
     Sending font he300bpn.usp with ID 4, 68929 bytes
     Sent 5 files, with a total of 133944 bytes.

     For a more detailed explanation of soft font ID numbers, and font 
     status see you LaserJet user's manual.

     Another useful option is the "D" command.  This command lets you 
     delete all soft fonts resident in your laser printer prior to 
     downloading.  For example, if you have limited font memory you 
     can lose track of how many fonts have been sent to the laser 
     printer.  Rather than blindly sending more fonts, (which can 
     result in a "20" error), you can tell DOWNLOAD to delete 
     all soft fonts first, and then send the new fonts to the printer.

     download @batch.lst 1 -d

     Finally, the "quiet" option lets you disable much of the screen 
     output from DOWNLOAD.  This is particularly useful with batch 
     files since you are probably not interested in file statistics 
     when downloading a batch of files.  To use the quiet option you 
     would type:

     download @batch.lst 1000 -qt

     This would result in the following display:

     Send soft fonts to a LaserJet or DeskJet printer, V1.8
     Copyright 1986, 1987, 1988, 1989 by Elfring Soft Fonts

     Note that the "-t" option used above would give all soft fonts 
     listed above "temporary" status.  They would automatically be 
     erased after the first reset command is sent the the laser 
     printer.



                                   4

                               ERROR MESSAGES

     DOWNLOAD automatically checks the status of your laser printer 
     before sending anything to it.  If the printer is off, not con-
     nected, deselected, or out of paper DOWNLOAD will display an er-
     ror message.  For example, if your printer was out of paper you 
     would see:

     download cp300rpn.usp
     Send soft fonts to a LaserJet or DeskJet printer, V1.8
     Copyright 1986, 1987, 1988, 1989 by Elfring Soft Fonts
     Sending font cp300rpn.usp with ID 0
     Printer I/O error
     Printer out of paper
     Abort, Retry, Ignore?

     Answer with the appropriate letter (A/R/I) followed by a carriage 
     return.  This process lets you select the printer or add more 
     paper to correct the problem.


                              COMMON PROBLEMS

     1) MY LASER PRINTER WORKS FINE NORMALLY. HOWEVER, WHEN I USE DOWNLOAD
     TO SEND A SOFT FONT TO IT THE FONT IS GARBLED, DOESN'T APPEAR, OR WIERD
     THINGS HAPPEN.

     This is a common problem and is almost certainly due to bad hardware!
     When a soft font is downloaded your printer will be receiving data at 
     the maximum possible speed.  If you do not have a printer cable that 
     meets minimum specifications, or if your parallel printer port is marginal
     the problems mentioned above may occur. For the record: your parallel
     printer port cable should be 6 feet long or less and made of quality
     materials. You should NOT have a switch box in series with this cable!
     If your cable is OK try switching to a different parallel port. These 
     ports are easy to damage with static electricity. They may appear to
     work- but they fail during high speed transfers.

     2) I DOWNLOAD A SOFT FONT AND MAKE IT MY PRIMARY FONT, JUST AS YOUR
     MANUAL SAYS. IF I COPY FILES TO THE PRINTER THEY PRINT IN THAT FONT.
     IF I USE MY WORD PROCESSOR I ALWAYS SEEM TO RETURN BACK TO MY DEFAULT
     INTERNAL FONT (COURIER).

     The first thing a word processor does, (before printing anything), is
     to reset the printer. Resetting a laser printer (or the DeskJet) auto-
     matically causes the printer to return back to the default font,
     (Courier). The only practical way around this problem is to provide the
     word processor with a printer driver that tells it how to use soft fonts.

     3) WHEN DOWNLOADING A NUMBER OF SOFT FONTS MY PRINTER STOPS WORKING AND
     DISPLAYS A FLASHING "20" ON THE LCD DISPLAY.

     Congatulations, you have run out of memory in your printer. If you are
     sending new fonts to the printer try deleting the old ones before sending
     the new ones. (-D option in Download) If the problem occurs regularly
     you should start looking for a 1 meg memory add on board.

                                   5


     4) THE SOFT FONT ID NUMBERS I ASSIGN WITH DOWNLOAD DO NOT MATCH THE 
     NUMBERS SHOWN ON MY SAMPLE FONT PRINT SHEET.

     The Soft Font ID numbers assigned by DOWNLOAD can be used to select soft 
     fonts. However, these ID numbers have NO relationship to the numbers 
     displayed on a font print sheet. Font print sheet numbers always start at
     1 and go up. Soft font ID numbers can range from 0 - 65,535. There is no
     way to display a Soft Font ID number on a print sheet. Ignore the numbers
     shown on these sheets.

     5) MY WORD PROCESSOR DOESN'T SEEM TO WORK WELL WITH SOFT FONTS. WHAT CAN
     I DO?

     At present, the following word processors will work well with most soft 
     fonts. Note that most of these word processors come with printer drivers
     that support common soft font sets. (Some of these word processors build
     their own printer drivers automatically.)

     WordStar 2000 v3.0, WordStar 5.0, Word 4.0 & 5.0, Word Perfect 4.1 & 5.0,
     PC Write 2.71 & 3.02.


                                DISTRIBUTION

     This program is provided on a trial basis as shareware to all who 
     are interested in it.  To use this product on other than a trial 
     basis you must register it for $15.00.  Copies of this program may 
     be freely exchanged as long as no fee is charged for them. Please 
     distribute this package with BOTH this documentation file and the 
     executable program. This program and documentation are Copyright 
     1986, 1987, 1988, 1989 by Elfring Soft Fonts. All rights are reserved.  
     Commercial use without registration is strictly prohibited.

     We offer a large number of different downloadable fonts including Roman, 
     Helv, Century, Rockford, Broadway, Script, Square, Old English, Univer-
     sity, Courier, Line Draw, Prestige, Letter Gothic, Casual, LCD, Lotus 
     fonts, Symbol Sets, and title fonts for both laser printers and the 
     DeskJet.  If you don't see the font you are looking for, call or write 
     me.  I am always creating new fonts.  I also do inexpensive custom fonts. 
     In addition I have a number of soft font utility programs including: 
     download- send and select fonts to a LaserJet or DeskJet, dispfont- dis-
     play a sample sheet of a soft font, and TSR Download- an interactive easy 
     to use soft font management program.  For more information on these in-
     expensive downloadable soft fonts for your LaserJet or DeskJet contact 
     me at the address listed below.

                                 WARRANTY

     Elfring Soft Fonts specifically disclaims all other warranties, ex-
     pressed or implied, including but not limited to, implied war-
     ranties of merchantability and fitness for a particular purpose 
     with respect to defects in the disk or documentation, and the 
     program License granted herein. In no event shall Elfring Soft Fonts 
     be liable for any loss of profit or any other commercial damage, 
     including but not limited to special, incidental, consequential, 
     or other damages.
                                   6

     
                          SHAREWARE REGISTRATION FORM

     To register this copy of DOWNLOAD and to receive a copy of my 
     LaserJet or DeskJet font brochure, please fill out the following 
     form, and mail it along with a check for $15.00 to:

                            Elfring Soft Fonts
                                P.O. Box 61
                          Wasco, Illinois  60183
                               312-377-3520

                              CIS: 72417,3437

     Make all checks payable to: Elfring Soft Fonts.


              Please register my copy of DOWNLOAD V1.8:


     Name:             _________________________________________


     Address:          _________________________________________


     Address:          _________________________________________


     City, State, Zip: _________________________________________


     Comments:         _________________________________________


     Source of public domain version:  _________________________


     Printer:    [ ] LaserJet,  [ ] DeskJet,  [ ] Compatible

```
{% endraw %}

## FILE1769.TXT

{% raw %}
```
Disk No: 1769                                                           
Disk Title: LaserLabel and Download                                     
PC-SIG Version: S1                                                      
                                                                        
Program Title: LaserLabel                                               
Author Version: 1.1                                                     
Author Registration: $24.95                                             
Special Requirements: HPLaserJet, DeskJet, or compatible printer, and Gr
                                                                        
LASERLABEL has been created to allow users of the GRAB Plus Envelope    
Printer (PC-SIG disk # 1145) to turn their data files into a powerful   
label printing system.  Now you can take the data files from GRABDB and 
print labels on your LaserJet printer.  The program will allow you to   
use different label formats from Avery as well as using soft fonts for  
added impact to your mailings.  The program recognizes the tag fields of
GRABDB and will select by tags if you like.  The LASERLABEL system comes
with a sample set of soft fonts to show you how your labels can have a  
creative appearance for greater impact.                                 
                                                                        
You must have a copy of the GRAB Plus system to use this program.       
LASERLABEL utilizes the data files created by the GRABDB.EXE program    
from the GRAB Plus system to make great looking labels.                 
Program Title: Download                                                 
Author Version: 1.8                                                     
Author Registration: $15.00                                             
Special Requirements: HP LaserJet, HP DeskJet, or compatible printer.   
                                                                        
DOWNLOAD.EXE is an IBM PC utility program that manages the process of   
downloading soft fonts to a LaserJet, DeskJet, or compatible printers.  
DOWNLOAD can also select fonts as they are being sent.  DOWNLOAD can    
send a font, or group of fonts, through the standard parallel printer   
MS-DOS devices to your LaserJet or DeskJet printer. You have optional   
control over the soft font ID number, whether the font is permanent or  
temporary, and whether it is a primary or sec-ondary font.  A list of   
fonts may be sent to the printer by specify-ing the individual fonts    
names in an ASCII text file.  All fonts resident in your laser may be   
optionally deleted before new fonts are downloaded, or you can reset the
printer first.                                                          
                                                                        
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1769

     Volume in drive A has no label
     Directory of A:\

    DLFONTS  BAT        53   7-31-89
    DOWNLOAD EXE     15719   7-31-89
    DOWNLOAD TXT     19647  12-20-89  11:05a
    FILE1769 TXT      3405  12-20-89  11:22a
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694  12-20-89  11:30a
    HV100BPN USP     10106   7-31-89
    HV100RPN USP      9939   7-31-89
    HV120RPN USP     12340   7-31-89
    LL       EXE     88496   7-31-89
    README   COM     10429   7-31-89
           11 file(s)     170866 bytes
                          144384 bytes free
