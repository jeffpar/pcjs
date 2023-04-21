---
layout: page
title: "PC-SIG Diskette Library (Disk #2003)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2003/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2003"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SERIAL FILE COPY"

    SERIAL FILE COPY allows the transfer of files between any two IBM-PC
    compatible computers equipped with standard serial ports.  SFC is
    particularly useful in copying files between PCs with 5.25" disks and
    those with 3.5" disks, such as the IBM PS/2 and the various IBM-PC
    compatible laptops.
    
    Other features include:
    
    ~ COM1 through COM4 ports are supported
    
    ~ Baud rates of 1200, through 38400 may be selected
    
    ~ Select groups of files with DOS wildcards
    
    ~ Select entire directories
    
    ~ Complete disk and transfer status on screen
    
    ~ On-line help provided for all SFC commands
    
    ~ Full 16-bit CRC checksum is used
    
    ~ Bad file packets are automatically retransmitted
    
    ~ Supports command line parameters
    
    ~ Supports batch file lists
    
    ~ Option to send or skip any file from selected group
    
    ~ Print files on remote computer.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE2003.TXT

{% raw %}
```
Disk No: 2003                                                           
Disk Title: Serial File Copy                                            
PC-SIG Version: S2                                                      
                                                                        
Program Title: Serial File Copy                                         
Author Version: 3.0                                                     
Author Registration: $25.00                                             
Special Requirements: Serial ports and a null modem cable.              
                                                                        
SERIAL FILE COPY is designed to allow the transfer of files             
between any two IBM-PC compatible computers equipted with standard      
serial ports.  SFC is particularly useful in copying files between PCs  
with 5.25 inch disks and those with 3.5 inch disks such as the IBM PS/2 
and the various IBM-PC compatible laptops.                              
                                                                        
Other features include:                                                 
                                                                        
~ COM1 through COM4 ports are supported                                 
                                                                        
~ Baud rates of 1200, through 38400 may be selected                     
                                                                        
~ Select groups of files with DOS wildcards                             
                                                                        
~ Select entire directories                                             
                                                                        
~ Complete disk and transfer status on screen                           
                                                                        
~ On line help provided for all SFC commands                            
                                                                        
~ Full 16 bit CRC checksum is used                                      
                                                                        
~ Bad file packets are automatically retransmitted                      
                                                                        
~ Supports command line parameters                                      
                                                                        
~ Supports batch file lists                                             
                                                                        
~ Option to send or skip any file from selected group                   
                                                                        
~ Can print files on remote computer.                                   
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## SFC.DOC

{% raw %}
```
 
 
                        Serial File Copy
 
 
 
                          Version 3.0
 
 
 
                    Copyright (C) 1989 & 1990
                         By MarshallSoft
                     All rights are reserved.
 
 
 
 
                          MarshallSoft
                          PO Box 4543
                      Huntsville, AL. 35815
                          (205) 881-4630
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               page 1
 
 
 
 
 
 
                        TABLE OF CONTENTS
 
 
 
      Chapter                                 Page
      -------                                 ----
 
        1.0  Introduction........................  3
        2.0  Summary of SFC Features.............  3
        3.0  Distribution Files..................  4
        4.0  Null Modem Cables...................  5
             4.1 Purchasing a Null Modem Cable...  5
             4.2 Building a Null Modem Cable.....  5
        5.0  Serial COM Ports....................  7
        6.0  Running SFC.........................  8
             6.1  Startup Menu...................  8
             6.2  Startup Problems...............  9
             6.3  Status Window.................. 10
             6.4  Command Menu................... 11
             6.5  Terminating SFC................ 11
             6.6  CRC Calculations............... 12
        7.0  Support Programs.................... 13
             7.1  CLONE, GETSFC, and PUTSFC...... 13
             7.2  LOOPBACK....................... 13
             7.3  TERM........................... 13
             7.4  MODEM.......................... 13
             7.5  PORTEXAM....................... 13
             7.6  CHECKCRC....................... 14
             7.7  CRYPT.......................... 14
             7.8  SPACE.......................... 14
             7.9  SETCOM3 and SETCOM4............ 14
             7.10 FLAGS.......................... 14
        8.0  Performance......................... 15
             8.1  Test 1......................... 15
             8.2  Test 2......................... 15
             8.3  Test 3......................... 15
             8.4  Other Tests.................... 15
        9.0  Using SFC to back up HARD DISKS..... 16
       10.0  User Registration................... 17
       11.0  Revision History.................... 18
       12.0  Warranty............................ 19
       13.0  Final Comments...................... 19
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               page 2
 
 
 
 
       1.0 Introduction
 
       The Serial File Copy program SFC is designed to allow the transfer
       of disk files ( including entire directories which may  themselves
       contain  directories ) between any two IBM PC compatible computers
       using standard RS232 serial ports. The SFC program is particularly
       useful in copying files between  IBM  PC  compatibles  with  5.25"
       disks  and  those  with  3.5"  disks  such as the IBM PS/2 and the
       various IBM PC compatible laptops. The computers must both be  IBM
       PC compatible ( this includes the TANDY 1000 ) with 256 KB or more
       of  RAM.   SFC  is also an easy way to backup a hard disk onto the
       hard disk of another computer.
 
       Both computers ( between which you want to transfer files  )  must
       have  RS232  serial  ports  configured for use with a modem. COM1,
       COM2, COM3 or COM4 may be used. Baud rate  of  1200,  2400,  4800,
       9600,  19200,  or  38400  may be selected. Baud rates of 57600 and
       115200 are available in the registered version.
 
       There are only two differences between the shareware  version  and
       the  registered  version of the SFC program. The first is that the
       registered version can run at baud rates of 57600 and 115200 baud.
       The second is that  the  registered  version  does  not  have  the
       opening shareware screen.
 
       2.0 Summary of SFC Features
 
           o Supports COM1, COM2, COM3 and COM4.
           o Supports baud rates from 1200 to 115200.
           o Select groups of files with DOS wildcards ( eg: *.DOC )
           o Select entire directories ( recursively ).
           o Complete disk & transfer status on screen.
           o On line help provided for all SFC commands.
           o Option to send only files with a later timestamp.
           o Option to send only files with ARCHIVE attribute set.
           o Option to send files with READ ONLY attribute set.
           o Load DOS Shell from within SFC.
           o Full 16 bit CRC checksum is used.
           o Bad file packets are automatically retransmitted.
           o Change logged drive and path from within SFC.
           o Display directories from within SFC.
           o File date & time preserved after copying.
           o Supports batch file lists ( lists of files to send ).
           o Option to send or skip any file from selected group.
           o Can print files on remote computer.
           o Choice of B&W or color displays.
           o Can save choices in configuration file.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               page 3
 
 
 
 
       3.0 Distribution Files
 
       If  a  previous  version  of  SFC is used to copy the distribution
       files be sure to rename the older version  (  eg:  rename  sfc.exe
       sfc_old.exe ) so that there is no attempt to run the older version
       with  the  newer version. The following files should be on the SFC
       distribution disk:
 
        SFC.EXE  --  The executable Serial File Copy ( SFC ) program.
        SFC.DOC  --  This documentation file.
        SFC.HLP  --  File required for on-line help ( Type F1 for help ).
        SFC.QRC  --  Quick reference card.
        SFC.CFG  --  SFC configuration file.
        SFC.INV  --  Invoice ready to print (shareware only).
        SFCSW.EXE -  Displays shareware screen for SFC (shareware only).
 
       Registered users are also  provided  with  the  following  support
       programs. None are necessary in order to run SFC, but are provided
       as  a  "Thank  You"  for  registering.  For a description of these
       programs see the section on "Support Programs".
 
       CLONE.COM    -- 'Clones' SFC on the target computer.
       CLONE.DOC    -- CLONE documentation file.
       GETSFC.COM   -- Created by CLONE on the target computer.
       PUTSFC.COM   -- Sends SFC to GETSFC on the target computer.
       LOOPBACK.COM -- Performs loopback testing on specified port.
       TERM.COM     -- Simple communications program.
       MODEM.EXE    -- Controls and displays modem control status.
       PORTEXAM.EXE -- Displays all information about specified port.
       CHECKCRC.EXE -- Computes the CRC for any file.
       CRYPT.EXE    -- Encrypts and decrypts any file.
       SPACE.COM    -- Displays free disk space and allocation units.
       SETCOM3.COM  -- Installs COM3 address ( 3E8 ) in BIOS table.
       SETCOM4.COM  -- Installs COM4 address ( 2E8 ) in BIOS table.
       FLAGS.EXE    -- Examine, sets, or clears file attributes.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               page 4
 
 
 
 
       4.0  Null Modem Cables
 
       A   'null   modem   cable'   is necessary to connect two computers
       together using the RS232 modem ports. They are widely available or
       can be home built for less than $10.
 
       4.1  Purchasing a Null Modem Cable
 
       A null modem cable can be  purchased  ready  for  use  or  can  be
       assembled  by  connecting a 'null modem adapter' to a normal RS232
       modem cable. Null modem adapters and cables can be purchased  from
       several  sources  such  as  Radio Shack and most electronics parts
       houses. "Computer Shopper" regularly  carries  advertisements  for
       null modem adapters and cables. Be advised that not all null modem
       adapters  and  cables connect all the lines that may be necessary.
       Although all should work for SFC some may not work for  the  MSDOS
       CTTY command which is used by the CLONE program.
 
       4.2 Building a Null Modem Cable
 
       Building the null modem cable is easy. The  only  tricky  part  is
       being  absolutely  positive  that  you have identified the correct
       pins. Refer to the diagrams below as necessary. The pin  numbering
       is  shown for the front of each connector, where the pins ( male )
       or holes ( female ) are located. When viewed from the back side  (
       where  the  wires  are  soldered  )  the pins and holes run in the
       opposite direction. Soldering is recommended, although  solderless
       connectors  which use crimp pins can be used instead. You can also
       solder each wire to a crimp pin as its much easier than  soldering
       the wire directly onto the connector.
 
 
                         Male DB 25                       Male DB 9
         *****************************************    *****************
       *  1  2  3  4  5  6  7  8  9 10 11 12 13  *  *  1  2  3  4  5  *
        *  14 15 16 17 18 19 20 21 22 23 24 25  *    *   6  7  8  9  *
         ***************************************      ***************
 
 
                        Female DB 25                     Female DB 9
        *****************************************    *****************
       * 13 12 11 10  9  8  7  6  5  4  3  2  1  *  *  5  4  3  2  1  *
        *   25 24 23 22 21 20 19 18 17 16 15 14 *    *   9  8  7  6  *
         ***************************************      ***************
 
        DB 25   DB 9    Pin Definition
        =====   ====    ==============
          7       5      Signal Ground ( SG )
          2       3      Transmit Data ( TX )
          3       2      Receive Data ( RX )
         20       4      Data Terminal Ready ( DTR )
          6       6      Data Set Ready ( DSR )
          4       7      Request to Send ( RTS )
          5       8      Clear to Send ( CTS )
          8       1      Carrier Detect ( CD )
 
 
 
 
 
 
                                                               page 5
 
 
 
 
       SFC  itself  requires  only signal ground (SG), transmit (TX), and
       receive (RX) lines in order to  operate.  The  first  step  is  to
       determine  the  type  of  connectors  required.  Examine the RS232
       connectors on your computers. You will need to purchase connectors
       that mate with the computers connectors.  For  example,  lets  say
       that  you  have  a laptop with a male DB 9 connector and a desktop
       with a female DB 25 connector. Then you need a female DB 9  and  a
       male DB 25 connector for your cable. IBM ATs and laptops require a
       female  DB 9 to mate while most XT class machines require a female
       DB 25 to mate.
 
       The  DB  25  and  DB  9  connectors  can  be  purchased  at   most
       electronics  parts  houses.  Radio  Shack  also stocks both solder
       type and solderless DB connectors.
 
       Next you will need about 6 feet of  ordinary  4-wire  solid  phone
       cable,  although  any  3-wire  cable  of  24  to  20  gauge can be
       substituted. If the CLONE program is to be used then 5  wires  are
       required.  Up  to  50 feet of cable can be used. Shielded cable is
       even better but not necessary. Cable can be purchased by the  foot
       at most stores that sell it.
 
       Once the connectors and cable have been purchased you are ready to
       assemble  your null modem cable. First connect the signal ground (
       SG ) line straight between connectors. Then connect Transmit  Data
       (  TX ) from one connector to Receive Data ( RX ) on the other. If
       you wish to use the  SFC  cloning  program  CLONE  you  must  also
       connect  Data Terminal Ready ( DTR ) from the end connected to the
       computer running CLONE to Data Set Ready ( DSR ) on the other end.
       Some computers ( like my TANDY 3000 ) also require you to  connect
       Request  To  Send  (  RTS ) from the end connected to the computer
       running CLONE to Clear To Send ( CTS ) on the other end.
 
       You then should have either 3 ( or 5 in order to use CLONE ) lines
       connected between connectors. Once completed, test the TX  and  RX
       connections  by  running the TERM ( or any terminal emulator )
       program on both sides. Whatever is typed on one side is  displayed
       on  the  other. Finally, test the remaining connections by cloning
       SFC from one computer to the other.
 
       Refer to the Pin Definition Table above in order to  identify  the
       correct  pins  for your connector. When viewing the connector side
       of both the DB 9 and DB 25 with the wide  part  at  the  top,  the
       pins  are  numbered  left to right, top to bottom. Most connectors
       have the pin  numbers  on  the  connector  itself  but  are  often
       difficult to read because they are very small.
 
       If   you  have  never  soldered  before,  you  should  use  either
       solderless connectors ( you crimp the wires on ) or find a  friend
       who   has  some  experience  soldering.  Remember  that  soldering
       doesn't have to be pretty in order  to  work.  Practice  a  little
       first  with  some  spare wire if you are out of practice. When you
       have completed construction of your null modem cable, verify  that
       the  correct  pins  have  been connected. If you cannot get SFC to
       operate, then most likely you made a mistake in constructing  your
       cable.
 
 
 
 
 
                                                               page 6
 
 
 
 
       5.0 Serial COM Ports
 
       IBM PC compatible computers can have up to  four  or  more  serial
       ports.  The BIOS table located at paragraph 40 has room  for  four
       communication  port  addresses : COM1 to COM4. During boot up, the
       COM1  and COM2 addresses are placed  in  the  BIOS table providing
       that the hardware is present. Unfortunately,  the  COM3  and  COM4
       addresses  are  not  placed in the table. This can be corrected by
       using   DEBUG   to  assemble  the  following program SETCOM3 which
       should be added to the AUTOEXEC.BAT  file.   When  executed,  this
       program  will  place  the  standard  COM3 port address 03E8 in the
       BIOS table. For COM4, change 03E8 to 02E8 and [0004] to [0006].
 
 
 
                   PUSH DS
                   MOV AX,0040
                   MOV DS,AX
                   MOV AX,03E8
                   MOV [0004],AX
                   POP DS
                   MOV AX,4C00
                   INT 21
 
       If  you  have  never  used DEBUG, refer to your MSDOS  manual  for
       detailed  instructions.  SETCOM3  and  SETCOM4  are  provided  for
       registered users.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               page 7
 
 
 
 
       6.0 Running SFC
 
       Connect  your  PC  compatible computers together with a null modem
       cable between the RS232 ports ( the port used to talk to  a  modem
       ).  Be  sure  that  you are using a proper null modem cable rather
       than a standard cable.
 
       Normally,  SFC can be started on both computers by typing 'SFC' on
       each.  This is referred  to  as  the  AUTOSYNC  startup.  On  some
       computers,  AUTOSYNC  will not work well. In this case, choose one
       computer to be the MASTER and the other the  SLAVE.  It  makes  no
       difference  which is which. Start SFC on the MASTER by typing "SFC
       M" followed by the ENTER key. Start SFC on  the  SLAVE  by  typing
       "SFC  S"  followed  by  the ENTER key. If AUTOSYNC is specified on
       one side, it must also be specified on the other.
 
       6.1 Startup Menu
 
       After startup, a menu will be  displayed  at  the  bottom  of  the
       screen with 8 options. Use up and down arrow keys to move the menu
       bar  --  use  ENTER  to  make selection. Note that on-line help is
       available by typing function key 1 ( F1 ).
 
       CONNECT: Attempts to connect to the other computer. The baud  rate
       must be the same on both computers.
 
       SET  BAUD: Allows the user to select the baud rate. 57600 baud and
       115200 baud are available only in  the  registered  version.  Note
       that some 4.77 MHZ PC compatibles won't run at 115200 baud.
 
       SET  COM  PORT: Allows the user to select the communications port,
       COM1  to COM4.  SFC uses the port addresses in the BIOS table.  If
       you have hardware installed for COM3  or  COM4  you  may  need  to
       install  the  port  addresses  in this table. See section 5.0.  Of
       course, hardware must exist for the port selected.
 
       SET LPT PORT: Allows the user to select the printer port, LPT1  to
       LPT3 for printing by the remote system.
 
       B&W or COLOR: The toggles between black and white and  color  mode.
       Use  "Save  Config."  (  see  below  ). When SFC is restarted, the
       selected mode will be in effect.
 
       TOGGLE FLAGS: Allows the user to toggle each of the  five  runtime
       options  (  ARC,  ASK, CHK, DIR, and R/O ). The current setting is
       always displayed in the status area.   For  a  definition  of  the
       runtime options, see section 6.3.
 
       SAVE CONFIG: After selected the baud rate, COM port, LPT port, and
       B&W or color, use this selection to save  the  configuration.  The
       next time that SFC is run, it will be initialized as configured.
 
       QUIT: Quits and returns to MSDOS.
 
       Set  the  port and/or baud rate on both computers if the default (
       COM1 at 38400  in  shareware  version  and  115200  in  registered
       version  )  is not acceptable. Then select the CONNECT option. SFC
       will now attempt connection to the other  computer.
 
 
 
                                                               page 8
 
 
 
 
       6.2 Startup Problems
 
       If  the  message  "Connection completed" is not displayed then the
       computers are not talking to each other. The problem  may  be  one
       of the following:
 
       (1)  You  must  start SFC on both computers! SFC should be started
       on both computers within one minute of each other.
 
       (2) The wrong port is selected. For example, if  SFC  is  told  to
       use COM1 but COM2 is actually connected to the cable.
 
       (3)  You may have selected different baud rates. They must match !
       The default baud rate is  38400  for  the  shareware  version  and
       115200 for the registered version.
 
       (4)  You  do  not  have  a  null modem cable connecting the two. A
       normal cable ( without a null modem adapter ) will not work.  Test
       the null modem cable by running TERM or any terminal emulation
       program.  Whatever is typed on one side is displayed on the other.
       If this does not happen then you have a  problem  with  your  null
       modem cable.
 
       (5)  One  of  the computers may be configured as DCE ( in order to
       talk to a serial printer ) instead of DTE ( in order to talk to  a
       modem  ).  In  this case, a normal cable ( instead of a null modem
       cable ) will work.
 
       (6) Your serial port is defective. This  is  unlikely.  Registered
       users can run LOOPBACK to test the port.
 
       (7) Your PC is not  IBM  hardware  compatible!  For  example,  the
       TANDY  2000  is not hardware compatible with respect to the serial
       ports.
 
       Occasionally, SFC will run correctly for a while and then lock up.
       This is almost always due to a marginal homemade null modem cable.
       If you use SFC on a regular basis, then you should either  buy  or
       make  a  SHIELDED  cable.
 
       If SFC will not connect, then use the manual mode on COM1 at  9600
       baud:  Type  "SFC  M" on one computer and "SFC S" on the other. If
       you still cannot get communication between  computers,  registered
       users  can  call  the  technical  support  telephone  number (205)
       881-4630 after 5:00 PM CST Monday through Friday or Saturday after
       2:00 PM CST for assistance.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               page 9
 
 
 
 
       6.3 Status Window
 
       The "Status" window contains information having  to  do  with  the
       status of SFC. The definition of each field follows:
 
       PORT: The Communications port ( COM1 to COM4 ) is displayed.
 
       BAUD: The baud rate ( 1200 to 115200 ) is displayed.
 
       UNIT:  #  bytes  per  allocation unit is displayed. Space for disk
       files is always allocated as a multiple of this value.
 
       DISK: The currently logged disk drive is displayed.
 
       PATH: The current directory path is displayed.
 
       MODE: Runtime mode is displayed.
 
       "ready"   -- Displayed when ready to accept keyboard input.
       "MENU"    -- Displayed after having selected a menu command.
       "send"    -- Displayed while sending files.
       "receive" -- Displayed while receiving files.
 
       FREE: Free disk space in bytes is displayed.
 
       Five runtime options  (  ARC,  ASK,  CHK,  DIR,  R/O  )  are  also
       displayed  as  either  "On"  or "Off".  All options can be toggled
       between "On" and "Off" by use of the "Toggle Flags"  selection  of
       the command menu ( See section 6.4 ). All flags are normally off.
 
       ASK:  Asks  the  user  for  permission  before  sending each file.
       Typically selected when using wildcards in specifying a  range  of
       files for which you wish to exclude some files.
 
       DIR:  Enables  sending of files in subdirectories ( recursively ).
       For example, to send all "*.ASM" files on the C drive, select  the
       C  drive  and  the  root path, turn on the DIR flag, and then send
       "*.ASM" with "Send File(s)".
 
       CHK: Send only files with a later date  &  time  if  file  already
       exists.   Normally  off, toggle this on if you want to do a backup
       of more recently modified files. "...skipped(CHK)" is displayed if
       the file is not copied because of the CHK option.
 
       ARC: Send only files where the ARCHIVE attribute is set, then turn
       off the ARCHIVE attribute.  An ARCHIVE attribute is maintained  by
       MSDOS  for  each  file on your disk.  It is automatically set each
       time the file is written to and closed. Please refer to your MSDOS
       manual.
 
       R/O: Allows the sending of read only (R/O) files. Many users  mark
       their  executable  programs  as  read  only using the MSDOS ATTRIB
       program.  Since one normally doesn't need to back up  applications
       and  systems  programs,  the R/O flag provides a convenient method
       for excluding read only files from copies.
 
       Notes: (1) All options need only be set on the  sending  computer.
       (2)  Be  sure that the clocks on your two computers are set to the
       same date and time ( to within a few seconds  )  if  you  plan  on
       using the CHK option.
 
                                                               page 10
 
 
 
 
       6.4 Command Menu
 
       The Command Menu contains the choices the user has  once  SFC  has
       connected. Use the up and down arrow keys to move the menu bar and
       ENTER  to  make  your  selection.  Once  one  of  the  choices  is
       selected, the user can return without SFC performing the  selected
       function by typing the ESC key. Type the F1 function key for help.
 
       QUIT: Quits SFC and returns to MSDOS.
 
       SET  CURRENT DRIVE: Changes the currently selected drive. The user
       can "log onto" any legal DOS drive ( A, B, etc. ). If  you  change
       diskettes  then you must always select the SET DRIVE option before
       continuing.
 
       SET CURRENT PATH: Changes the currently selected path.  When  this
       option  is selected, a "Enter Path:" prompt is displayed. The user
       then edits the current path which is displayed.
 
       All paths must start with a backslash ( full path name ). When the
       user is satisfied, typing ENTER will save  the  path.  Then  MSDOS
       will  attempt to change the "current" path. If successful, the new
       path will be displayed in the "Status" window.
 
       DIRECTORY: Displays a directory  of  files  requested.  When  this
       option  is selected, a "Enter files" prompt is displayed. The user
       then types the file or files ( using the MSDOS wildcards *  and  ?
       ). Filenames can be edited similarly to paths.
 
       SEND FILE(S): Sends files to the other computer. No special action
       is required on the receiving side except that both sides must have
       previously  selected  CONNECT.  The  user will be prompted for the
       filename  in  the  same  way  as  when  "Directory"  was  selected
       including  the  use of the MSDOS wildcards * and ?. If you specify
       that a directory is to be sent and the DIR option is set to  "On",
       then  all  files in that directory ( including other directories )
       will be sent. In this  way  entire  directory  structures  can  be
       copied. The date and time for normal files ( but not directories )
       will be preserved.
 
       An  indirect  file can also be specified by prefixing the filename
       by the '@' character. An indirect file is a  standard  ASCII  text
       file  containing  the  list of files to be sent. The indirect file
       must have been previously prepared  and  contain  one  filename  (
       wildcards  accepted  ) per line. Indirect files are typically used
       to specify a list of files  that  are  transferred  on  a  regular
       basis.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               page 11
 
 
 
 
       REMOTE  PRINT:  Sends  the  specified file to the remote ( other )
       computer for printing.  No wildcards are  allowed.   The  printing
       can  be  canceled  at any time by typing any key before the normal
       end of the print job.
 
       TOGGLE FLAGS: Allows the  user  to  toggle  each  of  the  five
       runtime   options   (   ARC, ASK, CHK, DIR, and R/O ). The current
       setting is always displayed in the status area.  For a  definition
       of the runtime options, see section 6.3.
 
       DOS  SHELL:  Loads the DOS shell, allowing the user to execute DOS
       commands. The user must be very careful not to execute any command
       that changes the serial ports or modifies the screen  environment.
       Please  note  that  many application programs do change the screen
       environment. It is safer to stay with the  standard  DOS  commands
       unless  a particular executable has been  previously  tested.  Use
       the MSDOS EXIT command to return to SFC.
 
       When  entering text in response to any of the above commands, type
       ESC to return back to the main menu without selecting. The  editor
       starts  in  "Overstrike"  mode ( each typed character overlays the
       previous character ), but can be switched to "Insert" mode (  each
       typed character is inserted at the cursor, shifting all characters
       to  the  right  over  one  space) by typing the INSERT key ( which
       toggles between Overstrike and  Insert  mode  ).  The  DELETE  key
       deletes the character underneath the cursor. The END key moves the
       cursor  to  the  end  of  the string, while the HOME key moves the
       cursor to the start of the string.
 
       6.5 Terminating SFC
 
       A series of files being transmitted can be  terminated  (  without
       aborting  the system ) by typing ESC during transmission. The user
       will be returned to the SFC  menu  after  the  completion  of  the
       current file transmission.
 
       The  user  may break out of SFC at any time and return to MSDOS by
       typing "CTRL" and "BREAK"  simultaneously.  This  should  only  be
       used  when  the  program  hangs  for  some reason and SFC does not
       respond to the keyboard. Always try to use the menu selection QUIT
       to quit SFC and return to MSDOS rather than Control Break.
 
       6.6 CRC Calculations
 
       A  full  16  bit Cyclic Redundancy Check ( CRC ) using the CCITT (
       The  Consultative  Committee  in  International   Telegraphy   and
       Telephony  )  polynomial  is  used by SFC. The CRC of each file is
       computed before transmission by the sender and sent along with the
       file being transmitted. The receiver then computes the CRC of  the
       received  file and compares it to the CRC sent. If the CRCs match,
       then the file is considered to be correct and a "OK" is displayed.
       CRC calculations are considered to be the  best  available  method
       for  verifing  data integrity. They are much superior to checksums
       and detect 99.99 percent of data errors. If an error is  detected,
       the  offending  packet ( part of the file ) will be re-transmitted
 
 
 
 
 
 
                                                               page 12
 
 
 
 
       7.0 Support Programs
 
       The following support programs are not necessary in order  to  run
       SFC but are provided as a "Thank You" for registered users.
 
       7.1 CLONE, PUTSFC, and PUTSFC.
 
       Don't have  SFC  on  the  target  computer  ?  The  CLONE  program
       provides  a  way to 'clone' SFC onto another computer. The program
       PUTSFC is used to send a copy of SFC to GETSFC which is created by
       CLONE on the target computer. With CLONE you only need  your  null
       modem  cable to connect to computers with a different disk format.
       Cloning is fully described in CLONE.DOC.
 
       7.2 LOOPBACK
 
       If you suspect that your serial port may be  defective,  then  use
       LOOPBACK  to  test the internal circuitry. The serial ports have a
       built in 'loop back' test capability which is used by the LOOPBACK
       program. For example, to test the COM1 port, type 'LOOPBACK 1'
 
       7.3 TERM
 
       Need a simple communications program to test your null modem cable
       ?   TERM  is a terminal emulator program in which everything typed
       on one machine is displayed on the other, and vice versa.  Connect
       your  two  computers together with a null modem cable and then run
       TERM on each side. Usage is "TERM port baud" where port =  1,2,3,4
       and  baud = 300, 600, 1200, 2400, 4800, 9600, 19200, 38400, 57600,
       115200. For example, type "TERM 1 1200" for COM1 at 1200 baud.
 
       7.4 MODEM
 
       The MODEM program is used to turn the modem control lines DTR  and
       RTS  on  and off, and to display DTR, DSR, RTS, and CTS. MODEM can
       help you test out your null modem cable. For example, to work with
       COM3, type 'MODEM 3'. A  menu  will  be  displayed  providing  all
       options.
 
       7.5 PORTEXAM
 
       The  PORTEXAM  program  will  tell you all you ever wanted to know
       about the status of any serial port. It reports  the  serial  port
       address,  the  interrupt vector, the location of the ISR code, the
       status of all modem control and modem status  lines,  and  if  the
       serial  interrupt  is  enabled.   Very  useful  as a cable testing
       program and for advanced users. For example, to examine COM1  type
       'PORTEXAM  1'.  PORTEXAM  does  not  reset  the  port  so that the
       "current" status of the port can be examined.
 
       7.6 CHECKCRC
 
       The  CHECKCRC  program  is  used  to compute the Cyclic Redundancy
       Check ( CRC ) of any file ( sort of a 16-bit file 'fingerprint' ).
       For example, to compute the CRC  of  all  files  ending  with  the
       extension  .DOC type 'CHECKCRC *.DOC'. Use the CHECKCRC program to
       verify that two copies of the same file are indeed the same file.
 
 
 
 
                                                               page 13
 
 
 
 
       7.7 CRYPT
 
       Need to protect your data ? The CRYPT program is used  to  encrypt
       and decrypt any file. To use, type 'CRYPT filename1 filename2 key'
       and  the  file 'filename1' will be encryted to produce 'filename2'
       using the numeric key 'key'. If 'key' is not  specified  then  you
       will be prompted for it. The same key performs both encryption and
       decryption. For example 'CRYPT MYFILE.C MYFILE.X 123' will encrypt
       MYFILE.C using the key 123 and create file 'MYFILE.X'. To decrypt,
       repeat  the  process  using the same key: 'CRYPT MYFILE.X MYFILE.C
       123'.
 
       7.8 SPACE
 
       Need a quick and easy way to determine how much free disk space is
       available ? Use the SPACE program to display  the  remaining  free
       disk  space and the allocation unit size of the specfied disk. For
       example, type 'SPACE C' to display free space on drive C.
 
       7.9 SETCOM3 and SETCOM4
 
       Got COM3 and/or COM4 serial port hardware but SFC and other serial
       programs  don't  know its there ? The BIOS table is not updated by
       MSDOS as is the case for COM1 and COM2. SETCOM3 updates  the  BIOS
       table  for  COM3 if you have serial port hardware installed at the
       standard COM3 address 03E8.  Similiarly, use SETCOM4 if  you  have
       serial  port hardware installed at the standard COM4 address 02E8.
       Place SETCOM3 and/or SETCOM4 in your AUTOEXEC.BAT file so that the
       BIOS table can be updated automatically at bootup.
 
       7.10  FLAGS
 
       Need an easy way to examine, set,  and  clear  the  ARCHIVE,  READ
       ONLY,  and  HIDDEN  attributes  of  your files?  Later versions of
       MSDOS provide the ATTRIB utility, which does the same thing except
       for hidden files. But if you don't have ATTRIB or want  to  change
       the  HIDDEN  attribute,  use  FLAGS. For example, "FLAGS +H *.SAV"
       sets the hidden attribute of all files ending  in  "SAV",  whereas
       "FLAGS  -H  *.SAV"  clears  the  hidden attribute.  Use R for READ
       ONLY, H for HIDDEN, and A for ARCHIVE attributes.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               page 14
 
 
 
 
       8.0 Performance
 
       The following benchmark results were obtained using a  Tandy  1000
       (  4.77 MHZ), a Tandy 1400LT ( 4.77 & 9.16 MHZ ), and a Tandy 3000
       ( 10 MHZ ) computer. Note that the 'standard' IBM PC runs at  4.77
       MHZ.  Virtual  disks  (  ramdisks  ) were used in order to measure
       performance as independent of disk speed as possible. The  use  of
       hard  disks  will result in a little slower times than shown while
       the use of floppy disks will result in slower times still. The use
       of faster computers will result in faster times than shown.  Three
       files  were  used:  file  A is 10,000 bytes long, file B is 50,000
       bytes and file C is 100,000 bytes long. All times are  in  seconds
       and  are  from  start  to  finish  including  ramdisk access. Your
       results should be very similiar.
 
       8.1 Test 1 ( 10 MHZ Tandy 3000 to 4.77 MHZ Tandy 1000 )
 
           baud rate   File A   File B   File C
           ---------   ------   ------   ------
             38400       4.0     16.5     32.3
            115200       2.2      9.8     14.7
 
       8.2 Test 2 ( 10 MHZ Tandy 3000 to 4.77 MHZ Tandy 1400LT )
 
           baud rate   File A   File B   File C
           ---------   ------   ------   ------
             38400       3.3     15.3     30.3
            115200       1.6      6.7     12.7
 
       8.3 Test 3 ( 9.16 MHZ Tandy 1400LT to 10 MHZ Tandy 3000 )
 
           baud rate   File A   File B   File C
           ---------   ------   ------   ------
            115200       1.5      6.1     12.1
 
       8.4 Other Tests
 
       Serial File  Copy  has  been  benchmarked  against  several  other
       shareware  programs.  All that we have tried ( 3 ) are slower when
       using the same baud rate. One program took almost twice as long to
       transfer files. If anyone finds a  faster  file  transfer  utility
       than SFC please write or call!
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               page 15
 
 
 
 
       9.0 Using SFC to back up HARD DISKS
 
       SFC is an easy way to back up one  hard  disk  onto  another  hard
       disk.   Of  course,  there    must   be  sufficient  room  on  the
       receiving disk.
 
       Normally,  you  only  need  to  back  up your work files that have
       changed  since your last backup. You should have  the  masters  of
       any application programs backed up to disk separately.
 
       To   begin,   it  is  usually  a good idea to mark your system and
       application  files  as  "READ  ONLY"  (R/O) using the MSDOS ATTRIB
       command. Registered users can  use  the  FLAGS  utility  for  this
       purpose  if  ATTRIB  is  not available. Unless the SFC R/O flag is
       set, these files will always be skipped by SFC. By the way, making
       your files "read only" affords you some degree of  computer  virus
       protection.
 
       The CHK flag can be used which  will  only  allow  copying a  file
       with  a  more  recent time and date on the source computer than on
       the destination computer. If you use this method, be sure that the
       clocks  on  your two computers are reasonably close - within a few
       seconds if you will be backing up  immediately  after  updating  a
       file.
 
       Alternately, the SFC ARC flag can be set  which  will  only  allow
       copying  a  file  that  has not been written to since the last SFC
       copy. SFC does this by only  coping  files  with  the  MSDOS  file
       ARCHIVE  attribute  set,  then  clearing  this attribute. However,
       please note  that  MSDOS  commands  like  BACKUP  also  clear  the
       ARCHIVE  attribute. This means that if  you  use  BACKUP  or  some
       commercial  backup program to make backups, don't use the ARC flag
       with SFC unless you know what you are doing.
 
       For  example,  in order to backup all files ending in  .WK1, .WK2,
       .WK3, etc. anywhere on your harddisk, we do the following:
 
       1) After connecting your two computers, start SFC and  select  the
       proper  drive  and path on both computers. To back up  the  entire
       disk, select the root path.
 
       2) Set the DIR flag to Y using the "Toggle Flags" menu item.
 
       3) Select "Send File(s)" and type "*.WK?".
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               page 16
 
 
 
 
       10.0 User Registration
 
       The  shareware  version  of  SFC  is  provided  so  that  you  may
       personally  determine  the  usefulness of SFC for yourself. If you
       can use SFC please register your use with us.
 
       MarshallSoft
       P.O. Box 4543
       Huntsville, AL.
       35815-4543
 
 
       Please pay by  check.  Payment  must  accompany  purchase  orders.
       Print  the  file SFC.INV if an invoice is needed. Two packages are
       available. The "Personal Package" is available  for  $15  postpaid
       and includes:
 
       o High Speed Version - 115200 baud.
       o No shareware screens.
       o All  12+ support  programs  -  See 'Support Programs' section.
       o Notices of new versions.
 
       The  "Business Package" is available for $25 postpaid and includes
       all of the Personal Package plus:
 
       o Telephone support ( voice ).
       o At least 1/2 off all future releases of SFC.
       o Backbone bound printed Users Manual.
 
       The registered user will receive  the  latest  version  by  return
       mail.  Both a 720 KB 3.5" and a 360KB 5.25" diskette are provided.
 
       The  latest  shareware version is always available for $7.50. Both
       5.25"  and  3.5"  disks  are provided. You will also be put on the
       mailing list for notices of new versions.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               page 17
 
 
 
 
       11.0 Revision History
 
       Version 1.0 -- 10 April 1989 -- Original release
 
       Version 1.1 -- 30 July 1989
 
       Added ASK and CHK options.
       Moved DIR option from separate menu item to options menu.
       Fixed bug in disk file size reporting.
       Changed units of FREE from kilobytes to bytes.
       Changed internal parameters for  easier  synchronization.
       Increased  PATH length from 58 to a full 64 characters.
       SLAVE side must start SFC with "SFC  /S".
       Could not generate backslash on Tandy 1000.
 
       Version 1.2  --  16 October 1989 ( no shareware version )
 
       Added a new AUTOSYNC mode as well as manual startup mode.
       Added help file support.
       Greatly expanded documention file.
 
       Version 1.3  -- 1 November 1989 ( no shareware version )
 
       Fixed problem with port COM2.
       Support the port and baud rate specified on command line.
       Simplified operation of AUTOSYNC.
       Added indirect file ( '@' file ) support.
       Added support for COM3 and COM4.
 
       Version 2.0  -- 10 November 1989
 
       Internal change to allow 4.77 MHZ PCs to run at 115200.
       Allows transfer of read only files.
 
       Version 2.1 -- 16 February 1990
 
       Added DOS Shell menu option.
       Modified AUTOSYNC for increased reliability.
       Increased buffer size to 2000 bytes for 57600 & 115200 baud.
       Provide cloning program and other supporting programs.
       Added ability to do remote printing.
       'NO RESPONSE' error does not abort system.
       Fixed error in sending files > 50KB ( affected version 2.0 only )
 
       Version 2.2 -- 15 May 1990 ( no shareware version )
 
       Changing drives clears file message string back to "*.*".
       Minor changes and bug fixes.
 
       Version 3.0 -- 11 Aug 1990
 
       Supports both B&W and color displays.
       Supports configuration file (SFC.CFG)
       Added ARCHIVE flag to options.
       Added R/O flag to options.
       The  file  spec. applies  to all subdirectories if DIR is set.
 
 
 
 
 
                                                               page 18
 
 
 
 
       13.0 Warranty
 
       The  user  of  this software assumes all liability for its use. In
       no case shall MarshallSoft be liable for  any  damages,  including
       any  incidental  or  consequential  damages. The prudent user will
       keep multiple backups of all important programs and data.
 
       14.0 Final Comments
 
       An update to SFC is planned  about  twice  a  year  for  the  next
       several  years.  It  is  amazing that as one gets into programming
       something like SFC new  ideas  are  constantly  occurring.  Future
       upgrades  will  add new features, make SFC easier to use, make SFC
       faster, add new supporting programs, or enhance the documentation.
 
       If you find any errors or have  any  suggestions  for  improvement
       please  write  or  call  (205)  881-4630  after 5:00 PM CST Monday
       through Friday or after 2:00 PM Saturday.
 
       Thanks for trying SERIAL FILE COPY -- Mike Marshall ( Author ).
 
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2003

     Volume in drive A has no label
     Directory of A:\

    SFC      CFG        20   9-09-90   4:13p
    SFC      DOC     45101   9-03-90   2:18p
    SFC      HLP      2786   8-15-90   8:30p
    SFC      INV      1115   8-26-90   3:44p
    SFC      QRC      1906   8-26-90   4:53p
    SFCSW    EXE      9044   7-07-90   5:16p
    SFC      EXE     52652   9-09-90   3:32p
    GO       BAT        38   1-01-80   1:37a
    FILE2003 TXT      3405   9-18-90  12:25p
    GO       TXT       727   1-01-80   4:34a
           10 file(s)     116794 bytes
                           40448 bytes free
