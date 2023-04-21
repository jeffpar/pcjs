---
layout: page
title: "PC-SIG Diskette Library (Disk #783)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0783/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0783"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "GT POWER 2 OF 4 (ALSO 782,1549,1550)"

    GT POWER is an example of telecommunications at its finest.  An easy
    set-up routine and quick simple-to-use commands make communicating with
    other computers and BBSs a snap.  GT POWER is a set of programs and
    files that provide complete capabilities for your system. Designed for
    use on IBM/compatible micro-computers, it supports a wide variety of
    modems including all Hayes compatibles, USRobotics, and IBM.
    
    Just a few of the features you will find on GT POWER are:
    
    ~ ANSI standard terminal emulation
    
    ~ ANSI.SYS style color graphics, without the need of ANSI.SYS!
    
    ~ Multiple telephone directories with 999 entries each. Records the
    password for each BBS, as well as the date and time of last contact.
    The total number of calls, accumulated time, uploads and downloads are
    also recorded.
    
    ~ Numerous protocols are supported, such as: SEAlink, Xmodem/CRC,
    WXmodem, Ymodem/CRC, Telink/CRC batch file, the CompuServe "B"
    protocol and more.  Also, ten slots for external protocols to be added
    by the user.  GT comes with several of these slots pre-setup for the
    most popular protocols; i.e., Zmodem, Ymodem-G, Kermit, Jmodem,
    Super8k, and BiMode. These can be changed easily or added to, by
    modifying the External Protocol Table in the GT configuration.
    
    ~ ASCII file transmission, using XON/XOFF protocol and/or line-by-line
    pacing and/or inter-character delays.
    
    ~ Full control of all communication parameters.
    
    ~ 40 function keys, to store logon, passwords, etc.
    
    ~ Full printer support, using XON/XOFF flow control with the host.
    
    ~ DOS Shell. Exit to DOS and return, GT stays in the background.
    
    ~ Interactive script language, to automate many repetitive tasks.
    
    ~ Optional LOG file. Keeps a complete record of your calls.
    
    ~ Detects BUSY, VOICE, NO DIAL TONE, and more, with modems that support
    extended result codes, such as the USRobotics Courier 2400 Modem.
    
    ~ On-screen clock, so there is no need for a memory-resident clock
    program.
    
    ~ Host mode. Allows user to set up a system to accept incoming calls.
    
    ~ Support for the non-standard COM ports: 3 and 4.
    
    A comprehensive Help menu is available at any time.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES783.TXT

{% raw %}
```
Disk No:  783                                                           
Disk Title: GT Power 2 of 4 (also 782,1549,1550) 
PC-SIG Version: S2                                                      
                                                                        
Program Title: GT Power                                                 
Author Version: 15.0                                                    
Author Registration: $40.00                                             
Special Requirements: Two floppy drives or a hard drive.                
                                                                        
Telecommunications at its finest is what will be found in GT POWER.  An 
easy set-up routine and quick simple-to-use commands will make          
communicating with other computers and BBS's a snap.  GT POWER is a set 
of programs and files that provide complete capabilities for your       
system.  It has been designed to be based on IBM and compatible         
micro-computers and it supports a wide variety of modems including all  
Hayes compatibles, USRobotics, and IBM.                                 
                                                                        
Just a few of the features you will find on GT POWER are:               
                                                                        
~ ANSI standard terminal emulation                                      
                                                                        
~ ANSI.SYS style color graphics, without the need of ANSI.SYS!          
                                                                        
~ Multiple telephone directories with 999 entries each.  Records the    
  password for each BBS, as well as the date and time of last contact.  
  The total number of calls, accumulated time, uploads and downloads are
  also recorded.                                                        
                                                                        
~ Numerous protocols supported, such as: SEAlink, Xmodem/CRC, WXmodem,  
  Ymodem/CRC, Telink/CRC batch file, the Compuserve "B" protocol, and   
  more.  Also, ten slots for external protocols to be added by the user;
  GT comes with several of these slots pre-setup for the most popular   
  protocols, i.e.  Zmodem, Ymodem-G, Kermit, Jmodem, Super8k, and BiMode
  These can be easily changed or added to by modifying the External     
  Protocol Table in the GT configuration.                               
                                                                        
~ ASCII file transmission, using XON/XOFF protocol and/or line-by-line  
  pacing and/or inter-character delays.                                 
                                                                        
~ Full control of all communication parameters.                         
                                                                        
~ 40 function keys, to store logon, passwords, etc.                     
                                                                        
~ Full printer support, using XON/XOFF flow control with the host.      
                                                                        
~ DOS Shell.  Exit to DOS then return, GT stays in the background.      
                                                                        
~ Interactive script language, to automate many repetitive tasks.       
                                                                        
~ Optional LOG file.  Keeps a complete record of your calls.            
                                                                        
~ Detects BUSY, VOICE, NO DIAL TONE, and more, with modems that support 
  extended result codes, such as the USRobotics Courier 2400 Modem.     
                                                                        
~ On-screen clock, so there is no need for a memory resident clock      
  program.                                                              
                                                                        
~ Host mode.  Allows the user to setup a system to accept incoming calls
                                                                        
~ Support for the non-standard COM ports: 3 and 4.                      
                                                                        
You will quickly see that these functions have been provided in a very  
friendly environment for your use and that the software is quite easy to
use.  It is not necessary, for example, to remember any commands or     
special features of the program as there is a comprehensive Help Menu   
available to you at any time the program is running.                    
                                                                        
File Descriptions:                                                      
                                                                        
The First Disk Contains:                                                
                                                                        
GT1500_1 LZH  General GT POWER documentation.                           
GT1500_2 LZH  Main GT POWER program.                                    
GTMISC   LZH  Miscellaneous documentation for external protocols.       
FILELIST DOC  Listing of files.                                         
                                                                        
The Second Disk Contains:                                               
                                                                        
GT1500_3 LZH  External protocol drivers: CISB, DSZ and PCKERMIT.        
GT1500_4 LZH  Terminal mode version of GT POWER.  Dubbed GTO!           
TC810    LZH  Turbo CALC spreadsheet.  SHAREWARE from P&M Software Co.  
                                                                        
The Third Disk Contains:                                                
                                                                        
GT1500_5 LZH  GT POWER Host mode documentation and examples.            
ST200A   LZH  Sysop Tools program and documentation.                    
                                                                        
The Fourth Disk Contains:                                               
                                                                        
BIMOD110 LZH  BiModem 1.10.  A Super protocol!                          
BIMOD    TXT  A note about BIMODEM.                                     
LHARC    EXE  Used to unpack LZH archives.                              
NMAIL200 GGG  Netmail programs.  
DECODE11 LZH  Contains the DECODE program to unpack the .GGG format file
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1988 PC-SIG, Inc.                                         
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0783

     Volume in drive A has no label
     Directory of A:\

    FILES783 TXT      7339  10-16-89   9:26p
    GO       BAT        38  10-13-89  10:15a
    GO       TXT       694  10-20-89  10:28a
    GT1500_3 LZH     67452   6-27-89   8:15p
    GT1500_4 LZH     98086   7-06-89   1:37p
    TC810    LZH    120872   6-26-89  10:32a
            6 file(s)     294481 bytes
                           24576 bytes free
