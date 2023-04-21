---
layout: page
title: "PC-SIG Diskette Library (Disk #439)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0439/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0439"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "COMMUNICATION #3"

    MODEM86 is a communications program for Intel 8086/88 based computers.
    It runs under both CP/M-86 and MS(PC)-DOS.  It provides such features as
    file copying using XMODEM protocol, terminal emulation, file transfer
    with all hosts, X-ON/X-OFF flow control, batch mode, optional on-line
    help and menus, file transfer and conversion utilities, and
    auto-dialing.
    
    Special Requirements:  A modem.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  $35.00 for MODEM86
    
    File Descriptions:
    
    BIN2HEX  COM  Converts a binary file to a hex file.
    COM2CMD  COM  Converts MS(PC)-DOS programs to CP/M-86 programs.
    COM2CMD  CMD  Converts MS(PC)-DOS programs to CP/M-86 programs.
    CMD2COM  COM  Converts CP/M-86 programs to MS(PC)-DOS programs.
    DISTMDM  BAT  Copies distribution disk files - for MS(PC)-DOS.
    DISTMDM  SUB  Copies distribution disk files - for CP/M-86.
    EXPAND   COM  Replaces tabs with blanks.
    MODEMSET COM  Configures MODEM86 for running environment.
    MODEM86  DOC  Abbreviated user manual.
    MODEM86  HST  Program's revision history info.
    MODEM86  SET  Unconfigured MODEM86 program.
    PATCHES  DOC  Text file containing a history of programming patches.
    PHONES   DAT  Example phone number directory.
    REMOVECC COM  Removes FORTRAN-style carriage controls.
    SHRINK   COM  Replaces blanks with tabs.
    SIOBIOS  A86  Source for an example CP/M-86 custom serial I/O BIOS.
    SIOBIOS  MAC  Source for an example MS(PC)-DOS custom serial I/O BIOS.
    UNSQZ    COM  Decodes squeezed files.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES439.TXT

{% raw %}
```
Disk No:  439
Program Title: Communications Programs
PC-SIG version: 1.1

MODEM86 is a communications program for Intel 8086/88 based computers.
It runs under both CP/M-86 and MS(PC)-DOS.  It provides such features as
file copying using XMODEM protocol, terminal emulation, file transfer
with all hosts, X-ON/X-OFF flow control, batch mode, optional on-line
help and menus, file transfer and conversion utilities, and
auto-dialing.

Usage:  Telecommunications

Special Requirements:  A modem.

How to Start:  Type GO (press enter).

Suggested Registration:  $35.00 for MODEM86

File Descriptions:

BIN2HEX  COM  Converts a binary file to a hex file.
COM2CMD  COM  Converts MS(PC)-DOS programs to CP/M-86 programs.
COM2CMD  CMD  Converts MS(PC)-DOS programs to CP/M-86 programs.
CMD2COM  COM  Converts CP/M-86 programs to MS(PC)-DOS programs.
DISTMDM  BAT  Copies distribution disk files - for MS(PC)-DOS.
DISTMDM  SUB  Copies distribution disk files - for CP/M-86.
EXPAND   COM  Replaces tabs with blanks.
MODEMSET COM  Configures MODEM86 for running environment.
MODEM86  DOC  Abbreviated user manual.
MODEM86  HST  Program's revision history info.
MODEM86  SET  Unconfigured MODEM86 program.
PATCHES  DOC  Text file containing a history of programming patches.
PHONES   DAT  Example phone number directory.
REMOVECC COM  Removes FORTRAN-style carriage controls.
SHRINK   COM  Replaces blanks with tabs.
SIOBIOS  A86  Source for an example CP/M-86 custom serial I/O BIOS.
SIOBIOS  MAC  Source for an example MS(PC)-DOS custom serial I/O BIOS.
UNSQZ    COM  Decodes squeezed files.

PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 198687,88,89 PC-SIG, Inc.

```
{% endraw %}

## MODEM86.DOC

{% raw %}
```





        This is file: MODEM86.DOC.

        It is readable on-line.  It is also printable  on  most  printers, if
        they are first set to print 66 lines per page (no perforation skip).




             MODEM86(tm) User Manual             _______             MODEM86(tm) User Manual
             Version 1.25 - March 4th, 1985             Version 1.25 - March 4th, 1985


             No Smoking Software(tm)             __ _______ ________             No Smoking Software(tm)


             (C) Copyright 1982-85             (C) Copyright 1982-85
             Hersey Micro Consulting, Inc.             Hersey Micro Consulting, Inc.
             P.O. Box 8276             P.O. Box 8276
             Ann Arbor, Michigan  48107             Ann Arbor, Michigan  48107
             (313) 994-3259             (313) 994-3259





        MODEM86    NOT                                        MODEM86        _______                                               _______        MODEM86 is NOT a free program.   Usage and copying of MODEM86 and its
        abbreviated user manual  are  subject to extremely friendly licensing
        terms found within this manual.


































        MODEM86(tm)        _______        MODEM86(tm)






                             Table of Contents


        Chapter 1 Introduction                                          1

                       MODEM86                       _______           1.1 What is MODEM86?                                         1
                         MODEM86                         _______           1.2 What does MODEM86 do?                                    2

              1.2.1 Is configurable for your computer                   2
              1.2.2 Runs under both CP/M-86 and MS(PC)-DOS              3
              1.2.3 Provides reliable file copying using XMODEM
                       protocol                                         3
              1.2.4 Provides terminal emulation                         4
              1.2.5 Provides file transfer with all hosts               4
              1.2.6 Provides X-ON/X-OFF flow control                    4
              1.2.7 Provides batch mode                                 4
              1.2.8 Provides optional on-line help and menus            5
              1.2.9 Provides helpful file transfer utilities            5
              1.2.10 Provides auto-dialing                              5

        Chapter 2 Starting Quickly                                      6

                                           MODEM86                                           _______           2.1 Do I have to read the whole MODEM86 user manual?         6

              2.1.1 NO!                                                 6
              2.1.2 Manual Style Notes                                  7

                                        MODEM86                                        _______           2.2 How do I quickly install MODEM86?                        8

              2.2.1 Verify distribution diskette                        8
              2.2.2 Backup distribution diskette                        9
              2.2.3 Configure MODEM86.SET using MODEMSET                9
              2.2.4 Write a Customized Serial I/O BIOS                  10
                        MODEM86                        _______              2.2.5 Run MODEM86                                         10

                              MODEM86                              _______        Chapter 3 Configuring MODEM86                                   12

                                  MODEM86                                  _______           3.1 How do I configure MODEM86 for my computer?              12

              3.1.1 Introduction to MODEMSET                            12
              3.1.2 MODEMSET Main Menu                                  13
              3.1.3 Computer Group                                      15
              3.1.4 CPU and Memory Group                                18
              3.1.5 Serial I/O Port Hardware Group                      19
              3.1.6 Terminal Mode Control Characters Group              27
              3.1.7 Default Values Group                                29
              3.1.8 Example Configuration Answers                       33

        Chapter 4 Customized Serial I/O BIOS                            48

        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)



           4.1 Do I really have to write one?                           48

              4.1.1 Not usually                                         48

           4.2 What Does A Customized SIOBIOS Do?                       48

                  MODEM86                  _______        Chapter 5 MODEM86 Command Syntax                                50

                            MODEM86                            _______           5.1 How do I run MODEM86?                                    50
                           MODEM86                           _______           5.2 What does a MODEM86 command look like?                   51
           5.3 What Do the Menu Options Do?                             54
           5.4 What Do the Command Suboptions Do?                       56

        Chapter 6 General Communications                                60

           6.1 How do I get my computer to be a terminal?               60

              6.1.1 'T' menu option - Terminal mode                     60
              6.1.2 'E' menu option - Terminal mode with echoing        62
              6.1.3 'H' menu option - Terminal mode with
                       half-duplex                                      62

           6.2 How do I transfer files from a host computer?            63

              6.2.1 'W' menu option - Write and close conversation
                       file                                             63
              6.2.2 'P' menu option - Purge conversation file           64

           6.3 How do I transfer files to a host computer?              65
           6.4 Could you give me some examples?                         67

        Chapter 7 Error Free File Transfer                              69

           7.1 How do I send and receive files without errors?          69

              7.1.1 'S' menu option - Send file mode                    69
              7.1.2 'R' menu option - Receive file mode                 69

           7.2 Could you give me some examples?                         71
           7.3 How does the XMODEM protocol work?                       73

              7.3.1 Single file transfer                                74
              7.3.2 Multifile transfer                                  75
              7.3.3 CRC-16 Checksum                                     76
                                        MODEM86                                        _______              7.3.4 Differences Between MODEM86 And The CP/M MODEM
                       7.2                                              79

        Chapter 8 Modem Control                                         80

           8.1 How do I get my auto-dial chip to dial my host?          80

              8.1.1 Make a phone number directory                       80

        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)


              8.1.2 'C' menu option - Call the host                     81

           8.2 How to I disconnect from my host?                        81

              8.2.1 'D' menu option - Disconnect from the host          81

           8.3 Could you give me some examples                          82

        Chapter 9 Using under both operating systems                    83

                                MODEM86                                _______           9.1 How do I convert MODEM86 programs from CP/M-86
                       format to MS(PC)-DOS format?                     84
                                MODEM86                                _______           9.2 How do I convert MODEM86 programs from MS(PC)-DOS
                       format to CP/M-86 format?                        85

        Chapter 10 File Transfer Utilities                              87

           10.1 How do I print host files with "logical" carriage
                       controls?                                        87

              10.1.1 REMOVECC                                           87

           10.2 What do I do with a squeezed file?                      88

              10.2.1 UNSQZ                                              88

           10.3 What do I do with files that have tab characters?       89

              10.3.1 SHRINK                                             89
              10.3.2 EXPAND                                             89

           10.4 How do I transfer binary files to an ASCII only
                       host?                                            90

              10.4.1 BIN2HEX                                            90

        Chapter 11 Problem Determination Procedures                     92

           11.1 Why does MODEMSET say it can't open MODEM86.SET"?       92
           11.2 Why does MODEMSET print the incompatible versions
                       error message?                                   92
           11.3 Why does MODEMSET gives strange default answers?        93
                         MODEM86                         _______           11.4 Why does MODEM86 print the SIO parameter error
                       message?                                         94
           11.5 Why do half of the characters look wrong?               95
           11.6 Why does is data lost from each line?                   96
           11.7 Why does the checksummed file copy cancel?              97
           11.8 Why does the checksummed file copy always start
                       with a timeout?                                  98
           11.9 Why aren't file data and host messages displayed?       99
                          MODEM86                          _______           11.10 Why does MODEM86 run but nothing is received from
                       the host?                                        100
           11.11 Why doesn't the backspace or delete key work?          102

        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)



        Chapter 12 Compatibility and Limitations                        103

                                      MODEM86                                      _______           12.1 What limitations does MODEM86 have?                     103
                                              MODEM86                                              _______           12.2 Are there several versions of MODEM86?                  104
                                                   MODEM86                                                   _______           12.3 What computers are compatible with MODEM86?             105
                                                     MODEM86                                   __                _______           12.4 What computers are incompatible with MODEM86?           107

        Chapter 13 Credits                                              108

           13.1 How did you do that?                                    108

        Chapter 14 Distribution and Licensing                           110

                         MODEM86                         _______           14.1 You mean MODEM86 isn't freeware?                        110
                                               MODEM86                                               _______           14.2 How are you limiting my use of MODEM86?                 112

              14.2.1 Limitations                                        112
              14.2.2 Rights                                             114

                                 MODEM86                                 _______           14.3 How do I know if MODEM86 is right for me?               115

              14.3.1 DISCLAIMER                                         115

                                                 MODEM86                                                 _______           14.4 How do I get updated versions of MODEM86?               116
           14.5 What do we pay if we have more than one computer?       117
                                             MODEM86                                             _______           14.6 Can I get a printed complete MODEM86 user manual?       118
                                  MODEM86                                  _______           14.7 Can I publish the MODEM86 complete user manual?         119
                              MODEM86                              _______           14.8 Can I buy the MODEM86 program source?                   119

























        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)                                              Introduction        _______        MODEM86(tm)                                              Introduction








                                      Chapter 1                                      Chapter 1

                                     Introduction                                     Introduction




                    MODEM86        ____________________        1.1 What is MODEM86?


                 MODEM86(tm)                 _______        Briefly, MODEM86(tm) is a communication  program  for  Intel  8086/88
        based computers which run either a version of MicroSoft's  MS(PC)-DOS
        or a version of Digital Research's CP/M-86.  It  is  named  after the
        CP/M   User   Group  "MODEM"  program,  a   popular   public   domain
        communications program for CP/M machines, because it  uses  the  same
        protocol for file transfers.

                                                  MODEM86                                                  _______        This chapter gives an  overview  of  what MODEM86 can do for you, and
        explains why you'll want to use it.  The next chapter tells  you  how
        to get started, so that you can try it right away.




























        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 1        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 1








        MODEM86(tm)                                              Introduction        _______        MODEM86(tm)                                              Introduction






                      MODEM86        _________________________        1.2 What does MODEM86 do?


        MODEM86(tm)        _______        MODEM86(tm) is a communication  program  for  most 8086/88 computers,
        which provides several features which are described  briefly  in  the
        following subsections.  "8086/88 computer" is the name we use for any
        computer which uses a  chip  from  the Intel iAPX 8086 family for the
        central processing unit (CPU).  This family includes  the  8086,  the
                                                        MODEM86                                                        _______        8088,  the  80186,  the  80188,  and the 80286. MODEM86 and  all  its
        utilities  run  under  both  CP/M-86  and  MS(PC)-DOS  when  properly
        installed.  "MS(PC)-DOS" is the name we use for  Microsoft's  MS-DOS,
                                                             MODEM86                                                             _______        of which IBM-PC DOS and  Zenith  ZDOS are variants.  MODEM86 requires
        about 32KB of read/write  memory  for  itself,  and  so  runs on most
                                                        MODEM86                                                        _______        machines with only 64KB of read/write memory.   MODEM86  requires  at
        least one  serial  port,  through which it can communicate.  Only one
                                                     MODEM86                                                     _______        disk drive, of any type, is necessary to run MODEM86.


        1.2.1 Is configurable for your computer

                            MODEM86                            _______        The best feature of MODEM86, and an unusual one for products  of  its
                                            MODEM86                                            _______        type,  is  that a single version of MODEM86 runs  on  many  different
                                MODEM86                                _______        types  of  computers.   MODEM86  comes  with  an intelligent  utility
        program called  MODEMSET  which  configures  it  for  use  with  most
        computers, serial I/O chips, or  serial  I/O boards.  In general, you
        don't need to know the technical details about your hardware, because
                                                             MODEM86                                                             _______        MODEMSET knows about your computer.  This means that MODEM86 supports
        many standard computers and  serial  I/O  devices  "off  the  shelf".
                                        MODEM86                                        _______        Although the source code of the MODEM86  main program is not included
               MODEM86               _______        in the MODEM86 package, there is a facility which allows you to write
                                                                     MODEM86                                                                     _______        your own  customized  serial  I/O BIOS routines for use with MODEM86.
        This allows the use of any  type of serial I/O hardware, even one-of-
                                                                MODEM86                                                                _______        a-kind hardware, without requiring a special version of MODEM86.  For
        more details about configuring, see the chapter entitled "Configuring
        MODEM86                                              abbreviated        _______                                              ___________        MODEM86".  Please  note  this  chapter is not in the abbreviated user
        manual found  on  the  distribution diskette, but is contained in the
        complete printed user manual.  For more details about which  machines
                                   MODEM86                                   _______        are    compatible   with   MODEM86,   see   the   chapter    entitled
        "Compatibilities and Limitations".











        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 2        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 2








        MODEM86(tm)                                              Introduction        _______        MODEM86(tm)                                              Introduction




        1.2.2 Runs under both CP/M-86 and MS(PC)-DOS

                                       MODEM86           MODEM86                                       _______           _______        Another  unusual  feature  of  MODEM86  is  that MODEM86 and all  its
        utilities  run  under  both  CP/M-86  and  MS(PC)-DOS  when  properly
        installed.  It comes with a pair of utility  programs,  one  for each
                                                  MODEM86                                                  _______        operating system, which can convert  the  MODEM86 object files to the
        executable format required for the other operating system.  For  more
                                 MODEM86                                 _______        details about converting MODEM86  for  another  operating system, see
        the chapter entitled "Using  Under  Both  Operating Systems".  Please
                                         abbreviated                                         ___________        note this chapter is not in  the abbreviated user manual found on the
        distribution diskette, but is contained in the complete printed  user
        manual.  Note also that these  utilities  are not usable on arbitrary
        program object files, and nor do they transfer  the  result  files to
        diskettes formatted for the other operating system.


        1.2.3 Provides reliable file copying using XMODEM protocol

        MODEM86        _______        MODEM86 provides reliable file copying using an error free  protocol.
        MODEM86        _______        MODEM86 uses the same checksummed  file  transfer protocol as used by
        the  various  versions of the CP/M User Group file  transfer  program
        MODEM,  originally  written  by  Ward Christensen, up  through  MODEM
        version 7.2. This protocol is often called the  XMODEM protocol.  All
        the file transfer modes  of  the  CP/M  MODEM  7.2  program (and most
                                                                     MODEM86                                                                     _______        earlier versions  as well) are communication compatible with MODEM86.
        The  CP/M  MODEM program is the file transfer program  used  by  most
        remote  CP/M  (RCPM) bulletin board systems.   Most  MS-DOS  bulletin
        board systems, especially RBBS-PC and FIDO  use  the  same  protocol.
                                                          MODEM86                                                          _______        Because of the compatibility with these programs, MODEM86 can be used
        to transfer data files without data corruption to any CP/M system, or
                                                                MODEM86                                                                _______        bulletin board system, or any other computer which runs MODEM86, even
                                                                      MODEM86                                                                      _______        if the diskette formats are incompatible.  In addition, with  MODEM86
        a 16-bit  CRC  checksum  mode can be specified for extremely reliable
        file copying.   Both  ASCII  (character)  and  binary  files  can  be
        transferred when using  the  checksummed file transfer protocol.  The
        checksumming assures reliable file copying in spite  of  noisy  phone
        lines.  For more details about reliable file copying, see the chapter
        entitled "Error Free File Transfer".  Please note this chapter is not
               abbreviated               ___________        in the abbreviated user manual found on  the  distribution  diskette,
        but is contained in the complete printed user manual.












        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 3        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 3








        MODEM86(tm)                                              Introduction        _______        MODEM86(tm)                                              Introduction




        1.2.4 Provides terminal emulation

        MODEM86        _______        MODEM86 provides for a "dumb" terminal  emulation.   This  means  the
        ability to be used as a terminal to any host computer  not  requiring
        the special characteristics of a specific terminal.   The  bit  rate,
        originate or  answer  mode,  number of stop bits, and optional parity
                           MODEM86                           _______        can be specified.  MODEM86 can be used to connect an 8086/88 computer
        to  practically  any  host,  including  timesharing  systems such  as
        CompuServe or  Source.   If  your computer has a console driver which
        emulates a standard  terminal  by processing escape sequences written
                                 FANSI-CONSOLE(tm)                                 _____________        to the console, like our FANSI-CONSOLE(tm) program for the IBM-PC and
                             MODEM86                             _______        compatibles,   then  MODEM86  provides  a  complete  smart   terminal
        emulation of that standard terminal.  For more details about terminal
        emulation, see the chapter entitled "General Communications".  Please
                                         abbreviated                                         ___________        note this chapter is not in  the abbreviated user manual found on the
        distribution diskette, but is contained in the complete printed  user
        manual.


        1.2.5 Provides file transfer with all hosts

            MODEM86            _______        The MODEM86 communication conversation can  be  saved to a disk file,
        allowing the capture of ASCII data files from  the  host.   Files can
        also be sent to a  host  as  though  they  were  just typed in to the
        host.   The  same mechanism can be used for auto-dialing  with  smart
        modems, and for auto-logon.  For more details about file transfer see
        the  sections  entitled  "How  do  I  transfer  files   from  a  host
        computer?"  and "How do I transfer files to a host computer?"  in the
        the chapter  entitled  "General  Communications".   Please  note this
                                   abbreviated                                   ___________        chapter  is  not  in  the  abbreviated  user  manual   found  on  the
        distribution diskette, but is contained in the complete printed  user
        manual.


        1.2.6 Provides X-ON/X-OFF flow control

            MODEM86            _______        The MODEM86 terminal emulation and file copying  allow the use of the
        X-ON/X-OFF  protocol  for flow control by the host to  avoid  missing
                     MODEM86   MODEM86                     _______   _______        data sent by MODEM86.  MODEM86 also uses the  X-ON/X-OFF flow control
        to avoid missing data  send  by  the  host.   For  more details about
        X-ON/X-OFF,  see  the  chapter  entitled  "General   Communications".
                                                abbreviated                                                ___________        Please note this chapter is not in  the abbreviated user manual found
        on the distribution  diskette,  but  is  contained  in  the  complete
        printed user manual.


        1.2.7 Provides batch mode

        MODEM86        _______        MODEM86  can  be  run  in   a   batch  mode  without  requiring  your
        interaction, or it  can  be  run  in a more interactive fashion.  For
        more  details  about  batch  mode, see the  description  of  the  'B'

        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 4        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 4








        MODEM86(tm)                                              Introduction        _______        MODEM86(tm)                                              Introduction


        suboption in the section entitled "Command Suboptions" in the chapter
                  MODEM86                  _______        entitled "MODEM86 Command Syntax".  Please note this chapter  is  not
                 abbreviated                 ___________        in  the  abbreviated user  manual  found  on  the  diskette,  but  is
        contained in the complete printed user manual.


        1.2.8 Provides optional on-line help and menus

        In the interactive mode, you have the choice of having a command menu
                                                                      MODEM86                                                                      _______        displayed before every command or displayed only by request.  MODEM86
        has a help command which gives  an overview of the command syntax and
        sub-options.  For more details about help command,  see  the  chapter
                  MODEM86                  _______        entitled "MODEM86 Command Syntax".  Please note this chapter  is  not
                 abbreviated                 ___________        in  the  abbreviated user  manual  found  on  the  diskette,  but  is
        contained in the complete printed user manual.


        1.2.9 Provides helpful file transfer utilities

        It also  comes  with  several small utilities which are useful before
        and after file  transfer.   For  more  details  about  file  transfer
        utilities,  see  the  chapter  entitled  "File  Transfer  Utilities".
                                                abbreviated                                                ___________        Please note this chapter is not in  the abbreviated user manual found
        on  the  diskette,  but  is  contained  in the complete printed  user
        manual.


        1.2.10 Provides auto-dialing

        MODEM86        _______        MODEM86 can automatically dial phone numbers  if  an  auto-dial  chip
        requiring direct software control  is  used  in  your  serial  board.
        Please note that this is not the same  as  what  is  often  called an
        "auto-dial modem", which has textual (ASCII) commands which you  must
             _______        send through your serial port to cause it to auto-dial.  What we mean
        by an "auto-dial chip"  is  one  that  has  no  textual commands, but
                                                                  MODEM86                                                                  _______        instead requires direct  software  control to auto-dial.  MODEM86 has
        no extra  automatic  support  for auto-dial modems, since they are so
        easy to use in the first place.   For more details about auto-dialing
        with  auto-dial   serial  chips,  see  the  chapter  entitled  "Modem
        Control".  For more details about auto-dialing with auto-dial modems,
        see the chapter entitled "General Communications".  Please note these
                                    abbreviated                                    ___________        chapters  are  not in  the  abbreviated  user  manual  found  on  the
        distribution diskette, but are contained in the complete printed user
        manual.










        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 5        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 5








        MODEM86(tm)                                          Starting Quickly        _______        MODEM86(tm)                                          Starting Quickly








                                      Chapter 2                                      Chapter 2

                                   Starting Quickly                                   Starting Quickly




                                        MODEM86        ____________________________________________________        2.1 Do I have to read the whole MODEM86 user manual?


        2.1.1 NO!

               ___        You do not have to read this whole manual from cover to cover to take
                     MODEM86                     _______        advantage of MODEM86.  You only have  to know what is in this chapter
                                     ______                          ____        to get started.  If you want really brief instructions, just read the
        description of this chapter in the table of  contents!   We  know how
        much  you  hate  to  have  to  read the manual before  trying  out  a
        program.

        We have provided an extensive index  at the end of this manual.  It's
        there to help you if you have  problems  finding  what  you  want  to
        know.  Please use it, especially if you don't  read  the  manual from
        cover to cover.  For example,  solutions  to many common problems can
        be found by looking  up  the  keyword "problem" in the index.  If you
        can't  find  something where you looked first in the  index,  let  us
        know!  We think the index should be  comprehensive.   That  minimizes
        the  number  of  calls  we  get asking about things which  are  fully
        explained in the manual but aren't found.

        If what you want to know is only found  in  the complete printed user
        manual and not the abbreviated user manual found  on the distribution
        diskette,  then  it's  probably  time  you  paid for a complete  user
        manual.  You can tell this is the case when you find yourself looking
        for a page number listed in the index or table of contents that isn't
        in your abbreviated user manual.  The index and the table of contents
        are  complete,  but  your  abbreviated  user  manual  found  on   the
                                 ___        distribution diskette is not!

                                                  MODEM86                                                  _______        Lastly, even though it is possible to use MODEM86 without reading the
        chapter  on  its distribution, please read it, too.  It  has  details
        which are important to us about what we expect in return from you for
                               MODEM86                               _______        your being able to use MODEM86.






        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 6        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 6








        MODEM86(tm)                                          Starting Quickly        _______        MODEM86(tm)                                          Starting Quickly




        2.1.2 Manual Style Notes

        Throughout  the  user manual, upper case  and  underlining  indicates
        input which you must provide.  This is for emphasis only.  Input does
        not need to be in upper case, as all  lower  case input is translated
        into upper case before interpretation as a command.

             ^        The "^" preceding a capital letter represents the typing of a control
                                  ^C               Control-C        character.  For example, "^C" is read as  "Control-C".   To  generate
        the character from the keyboard, hold down  the control key and press
                     C        the letter ("C" in the example).









































        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 7        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 7








        MODEM86(tm)                                          Starting Quickly        _______        MODEM86(tm)                                          Starting Quickly






                                     MODEM86        _____________________________________        2.2 How do I quickly install MODEM86?


                                     MODEM86                                     _______        If you are in a hurry to try MODEM86,  the  following is the simplest
                                                           MODEM86                                                           _______        possible setup  procedure.   Bear  in  mind  that  MODEM86  has  some
                             ___        features which  can  not be taken advantage of in this case.  Further
        reading will allow you to take advantage of those features at a later
        time.




        2.2.1 Verify distribution diskette        _____ ______ ____________ ________        2.2.1 Verify distribution diskette

        The first step is to verify that  the  following  files  are  on  the
        distribution diskette:

        BIN2HEX.COM         BIN2HEX.CMD        BIN2HEX.COM      or BIN2HEX.CMD
                         Converts a binary file to a hex file.

        CMD2COM.COM         CMD2COM.CMD        CMD2COM.COM      or CMD2COM.CMD
                         Converts CP/M-86 programs to MS(PC)-DOS.

        COM2CMD.COM         COM2CMD.CMD        COM2CMD.COM      or COM2CMD.CMD
                         Converts MS(PC)-DOS programs to CP/M-86.

        EXPAND.COM          EXPAND.CMD        EXPAND.COM       or EXPAND.CMD
                         Replaces tabs with blanks.

        DISTMDM.BAT         DISTMDM.SUB        DISTMDM.BAT      or DISTMDM.SUB
                         Copies distribution diskette files.

        MODEMSET.COM        MODEMSET.CMD        MODEMSET.COM     or MODEMSET.CMD
                                    MODEM86                                    _______                         Configures MODEM86.

        MODEM86.DOC      MODEM86 abbreviated                         _______ ___________        MODEM86.DOC      MODEM86 abbreviated user manual.  PRINT or TYPE this
                         file.  You are reading it now!

        MODEM86.HST        MODEM86.HST      Revision history information.  PRINT  or  TYPE  this
                         file.

        MODEM86.SET                   MODEM86                                      _______        MODEM86.SET      Unconfigured MODEM86 program.

        PHONES.DAT        PHONES.DAT       Example phone number directory.

        REMOVECC.COM        REMOVECC.CMD        REMOVECC.COM     or REMOVECC.CMD
                         Removes FORTRAN style carriage controls.



        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 8        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 8








        MODEM86(tm)                                          Starting Quickly        _______        MODEM86(tm)                                          Starting Quickly


        SHRINK.COM          SHRINK.CMD        SHRINK.COM       or SHRINK.CMD
                         Replaces blanks with tabs.

        SIOBIOS.A86        SIOBIOS.A86      Source for  an  example  CP/M-86  Custom  Serial I/O
                         BIOS.

        SIOBIOS.MAC        SIOBIOS.MAC      Source  for an example MS(PC)-DOS Custom Serial  I/O
                         BIOS.

        UNSQZ.CMD           UNSQZ.COM        UNSQZ.CMD        or UNSQZ.COM
                         Decodes squeezed files.

        If the listed files are not all  there,  ask  whomever  you  got  the
        program from to provide the missing files.  They are supposed to give
        you all the files listed here.   There  may  be  additional  optional
        files on the distribution diskette which  not  listed  here.   Please
        note that the user manual which appears on  the distribution diskette
           abbreviated           ___________        is abbreviated.

        Chapters describing advanced features in  detail  have  been  omitted
                 abbreviated                 ___________        from the abbreviated user manual on the distribution  diskette.   See
        the chapter entitled "Distribution and Licensing".




        2.2.2 Backup distribution diskette        _____ ______ ____________ ________        2.2.2 Backup distribution diskette

        The  second  step  is  to make backup  copies  of  your  distribution
        diskette.  Start out by making sure that the distribution diskette is
        write protected, so that you don't accidentally destroy  what's on it
                   __                       ____        by copying to it instead of copying from it.  After all,  the  reason
        that  you  should make the backup copy in the first place is so  that
        you'll have extra copies if one  copy  gets  accidentally  destroyed.
        Then use  whatever  commands  you  normally  use to make a copy of an
        entire  diskette.   Just  follow  the directions in  your  computer's
        operating system manual for making a copy of a diskette.




        2.2.3 Configure MODEM86.SET using MODEMSET        _____ _________ ___________ _____ ________        2.2.3 Configure MODEM86.SET using MODEMSET

        The third step is to  configure  MODEM86.SET  using  MODEMSET.   This
              MODEM86              _______        tells MODEM86 what type of  serial  device your 8086/88 computer has.
                        MODEM86                        _______        It  also  tells MODEM86 what the settings of various  default  values
                    MODEM86                    _______        should be.  MODEM86 does  not work if this is not done, or if this is
        not done properly.  Fortunately, it is not that difficult to do.

                     MODEM86                     _______        To configure MODEM86 to your specific 8086/88 computer and its serial
        device, enter the following MS(PC)-DOS or CP/M-86 command:

             A>MODEMSET               ________             A>MODEMSET

        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 9        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.            Page 9








        MODEM86(tm)                                          Starting Quickly        _______        MODEM86(tm)                                          Starting Quickly



        MODEMSET asks a series of  questions  about your 8086/88 computer and
                                                                      MODEM86                                                                      _______        personal preferences,  and  then  writes out a new version of MODEM86
        which works on that computer.  It is completely  menu  driven,  so it
        should  be  self  explanatory.   All  that  absolutely  needs  to  be
        specified the first time you run  it is which computer you are using,
        and which  serial  port  you  want  to use.  This may be specified by
        choosing choice 1 from the main menu and answering two questions, and
        then choosing  choice  6  from the main menu.  Details of configuring
        MODEM86        _______        MODEM86,  if  necessary,  may  be  found  in  the  chapter   entitled
                     MODEM86                     _______        "Configuring MODEM86".  Please note that this chapter is not included
               abbreviated               ___________        in the abbreviated user manual found on  the  distribution  diskette,
        but is contained in the complete printed user manual.




        2.2.4 Write a Customized Serial I/O BIOS        _____ _____ _ __________ ______ ___ ____        2.2.4 Write a Customized Serial I/O BIOS

        The  fourth  step  may  be necessary if  your  8086/88  computer  has
        non-standard serial hardware.  If the serial device is not a standard
        one which is already supported, it requires writing a small amount of
        assembly language code.  In other  words,  for most people, this step
        has been automatically completed for you by us.  Details may be found
        in the chapter entitled "Customized Serial I/O  BIOS".   Please  note
                                                    abbreviated                                                    ___________        that this chapter is not included  in  the  abbreviated  user  manual
        found on the distribution diskette, but is contained  in the complete
        printed user manual.




        2.2.5 Run MODEM86        _____ ___ _______        2.2.5 Run MODEM86

                                            MODEM86                                            _______        The  fifth  and last step is to run MODEM86.   The  chapter  entitled
         MODEM86                                             MODEM86         _______                                             _______        "MODEM86 Command Syntax" gives details about running MODEM86.  Please
                                                      abbreviated                                                      ___________        note that this chapter is not included in the abbreviated user manual
        found on the distribution diskette, but is contained  in the complete
        printed user manual.

                                     MODEM86                                     _______        The simplest way to run  the MODEM86 program is to type the file name
        and a return, as follows:

             A>MODEM86               _______             A>MODEM86










        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 10        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 10








        MODEM86(tm)                                          Starting Quickly        _______        MODEM86(tm)                                          Starting Quickly


                           MODEM86                           _______        When run this way, MODEM86  starts  in an interactive mode, expecting
                               MODEM86                               _______        to converse with you.  MODEM86 starts by displaying a menu of options
        which are grouped by function.  The menu options  are described later
                                 MODEM86                                 _______        in the chapter entitled "MODEM86 Command Syntax".  Please  note  that
                                             abbreviated                                             ___________        this chapter is not included in the  abbreviated user manual found on
        the distribution diskette, but is contained in the  complete  printed
                               MODEM86                               _______        user manual.  However, MODEM86 has  an  on-line help command: the '?'
                                                 MODEM86                                                 _______        command.   After  displaying  the  menu, MODEM86 then  indicates  the
        current default  disk  drive and prompt for a command.  At this point
        MODEM86        _______        MODEM86 expects a command to be typed in, followed by a return.

        If you use the CP/M MODEM program, you should note that  the  command
        syntax  is  similar,  but  some of the  menu  option  characters  and
        suboption characters are different.   A  partial  list of differences
                MODEM86                _______        between MODEM86 and MODEM7.2 is given  in  an  appendix.   If  you've
        never used the CP/M MODEM program, you  should note that no knowledge
                                                      MODEM86                                                      _______        of the CP/M MODEM program is necessary to use MODEM86.

        If you don't see the  single line banner with the name of the program
        and our copyright message at the top of your  screen  and a menu when
                               MODEM86                               _______        you start, you'll know MODEM86 is not  properly installed.  If you do
        see the banner and menu when you start, it may still be the case that
        MODEM86        _______        MODEM86 is not properly installed,  although  that  is  less  likely.
        Notice  that  we  don't  beat  you  over the head with a full  screen
        request for payment of the usage royalty,  like some programs do.  We
        just do that in the user manual!

        If troubles are encountered, refer to the chapter  entitled  "Problem
        Determination Procedures".   There are directions in that chapter for
        solving the  most commonly reported problems.  Alternatively, you may
        look in  the  index under the keyword "problem", for a description of
        your problem.  Most of  all,  please  refer  to  the  user manual for
        possible solutions to a problem before  calling  us  with  a  problem
        report.




















        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 11        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 11








        MODEM86(tm)                          Problem Determination Procedures        _______        MODEM86(tm)                          Problem Determination Procedures








                                      Chapter 11                                      Chapter 11

                           Problem Determination Procedures                           Problem Determination Procedures



                         MODEM86                         _______        If problems with MODEM86 are encountered, this is the section to look
        at for solutions.  Look for a heading which describes the problem and
        read the corresponding section.  Another alternative is  to  look  in
        the index under  the  keyword  "problem"  for  a  description of your
        problem.  In  most  cases,  it points to this chapter.  Most problems
        can be solved this way.  Only if the  problem  description  cannot be
        found here or if the problem stubbornly refuses  to  go  away, should
        you contact Hersey Micro Consulting, Inc.






        11.1 Why does MODEMSET say it can't open MODEM86.SET"?        ______________________________________________________        11.1 Why does MODEMSET say it can't open MODEM86.SET"?


        MODEM86.SET is the file that MODEMSET  reads  to  create  a  runnable
                   MODEM86                   _______        version of MODEM86.  MODEMSET gives this error message if MODEM86.SET
        is not on the default disk, or  not  in  the  default  directory  for
        MS(PC)-DOS, or  has  a different user number for CP/M-86, or has been
        given a different  name  than  MODEM86.SET.   The  solution  to  this
        problem  is  to either copy the file into the  current  disk  current
        directory or user number.






        11.2 Why does MODEMSET print the incompatible versions error message?        _____________________________________________________________________        11.2 Why does MODEMSET print the incompatible versions error message?


        Occasionally  an   incompatible   MODEMSET   program   placed   on  a
                                    MODEM86                      MODEM86                                    _______                      _______        distribution diskette with  MODEM86.   Both MODEMSET and MODEM86 have
        internal version numbers to prevent this  from  happening  without  a
                                                                      MODEM86                                                                      _______        warning.   MODEMSET  leaves a copy of its version number  in  MODEM86
        during  the  configuration process.  The version  numbers  are  later
                      MODEM86                      _______        compared when MODEM86 runs.  If the versions are  not  the  same then
        this error message is given.  The solution is to contact Hersey Micro
        Consulting, Inc.  and ask for a new distribution diskette.

        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 92        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 92








        MODEM86(tm)                          Problem Determination Procedures        _______        MODEM86(tm)                          Problem Determination Procedures







        11.3 Why does MODEMSET gives strange default answers?        _____________________________________________________        11.3 Why does MODEMSET gives strange default answers?


        MODEMSET gets the default answers from  the  MODEM86.SET  file.   The
                                                       MODEM86                                                       _______        MODEM86.SET file  is  really just a version of MODEM86 which has been
        configured for some computer.  So the  default  values  for  MODEMSET
        question answers should usually be reasonable values.  If  the  wrong
        computer is indicated as the 8086/88 computer being  used, this leads
        to values which do not look right.  The solution  is  to  just  press
        return until the  main  menu  is  printed again, and choose the first
        selection again, remembering to be  more  careful  in  answering  the
        questions.

        This problem might also indicate that the  version of MODEMSET is not
                                       MODEM86                                       _______        compatible with the version of MODEM86 in  MODEM86.SET.   This  means
        that  the  distribution  diskette  was  not  properly made up by  the
        MODEM86        _______        MODEM86 distributor.   The  solution  is  to  ask  the  Hersey  Micro
        Consulting, Inc.  for a new distribution diskette.  The old one might
        have to be returned as well.






























        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 93        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 93








        MODEM86(tm)                          Problem Determination Procedures        _______        MODEM86(tm)                          Problem Determination Procedures







        11.4 Why does MODEM86 print the SIO parameter error message?        ____________________________________________________________        11.4 Why does MODEM86 print the SIO parameter error message?


        MODEM86        _______        MODEM86 only prints this error  when  it detects something wrong with
        the  serial  I/O port description given to it by  MODEMSET.   Usually
        this is because the questions  asked  by  MODEMSET  were  incorrectly
                                        MODEM86                                        _______        answered for the computer which MODEM86 is currently running on.  The
        solution is to run MODEMSET, and  be careful about the answers to the
                              MODEM86                              _______        questions.  Sometimes MODEM86  cannot  detect  a configuration error.
        Usually when this happens, it does something bad  immediately and the
        8086/88 computer often requires resetting.  Again, the solution is to
                     MODEM86                     _______        reconfigure  MODEM86  using  MODEMSET,  being careful to  answer  the
        questions correctly.  The sample configuration answers might be used,
        but there is a chance that they might be wrong.  Usually it is a good
        idea to verify the  answers  by  carefully  reading  the  appropriate
                                                                  MODEM86                                                                  _______        technical reference manual for the 8086/88 computer that  MODEM86  is
        to run on.

        Sometimes what is required is to find  the correct address or channel
        number  for  the  serial  device involved, as  this  user  manual  or
        MODEMSET might be incorrect about the values for some computers.




























        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 94        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 94








        MODEM86(tm)                          Problem Determination Procedures        _______        MODEM86(tm)                          Problem Determination Procedures







        11.5 Why do half of the characters look wrong?        ______________________________________________        11.5 Why do half of the characters look wrong?


        If half of the characters look right but half of them look wrong when
        you connect to a host, then you probably have set the serial port for
        the wrong kind of parity.  When this happens some of the  letters  of
        the alphabet will always look correct and the others will always look
        incorrect.  So on any given line about half  of  the  characters will
        look OK, but the other half are  often  displayed  as  some  kind  of
        graphics character or other special character,  or  possibly  with  a
        different video attribute like inverse video, depending on  the  type
                                                     MODEM86                                                     _______        of 8086/88 computer on which you are running MODEM86.

                                                                         'N'        This  only  happens when  you  have  selected  the  no  parity  ('N')
                                                               'O'        suboption  when  your host computer is using the odd  ('O')  or  even
         'E'        ('E') parity.  When this happens, half of  the alphabet will have the
                           MODEM86                           _______        parity expected by MODEM86 and half of the  alphabet  will  not.  The
        solution is to choose the correct parity  suboption for use with that
        host computer.






























        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 95        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 95








        MODEM86(tm)                          Problem Determination Procedures        _______        MODEM86(tm)                          Problem Determination Procedures







        11.6 Why does is data lost from each line?        __________________________________________        11.6 Why does is data lost from each line?


        For some 8086/88 computers which  take a long time to do a line feed,
        serial data is missed when a line feed is  followed  too  closely  by
        characters from the next line.   It is wise to tell the host to delay
        after sending a line feed  and before sending more data, if it can be
                            MODEM86                            _______        done.   Otherwise,  MODEM86  might  miss  a  few  characters  at  the
        beginning of each line  at  the  higher bit rates (>= 1200 BPS).  The
        IBM-PC running MS(PC)-DOS is an example of such an 8086/88 computer.

        If a host delay after a line feed does  not  solve this problem, then
        the  bit  rate is probably higher than the 8086/88  computer  or  its
        console terminal can handle.  Try lowering the bit  rate  to  300, as
        this  should  be  slow  enough  to be handled by most  computers  and
        terminals.  If this works  then  it  was probably too high a bit rate
        originally.  Now try higher bit rates until the highest rate that the
        computer and terminal can handle is found.































        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 96        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 96








        MODEM86(tm)                          Problem Determination Procedures        _______        MODEM86(tm)                          Problem Determination Procedures







        11.7 Why does the checksummed file copy cancel?        _______________________________________________        11.7 Why does the checksummed file copy cancel?


        This  is  often  a  bit rate problem.   There  are  several  possible
        solutions.

        The most common problem is  that  the  bit  rates  used  by  the  two
        computers are not the same.  The  solution is to change the bit rates
        to match and try again.

        Another common problem is the  use  by  a  CP/M  system  of  a  newer
        protocol  which  uses  CRC  checking but is  not  yet  understood  by
        MODEM86                        MODEM86        _______                        _______        MODEM86.   When  this happens, MODEM86 manages to send files  to  the
                                                                          'C'        CP/M system but not receive files.  The solution is  to  us  the  'C'
        suboption on the CP/M system's send command, if it has one.  Give the
        CP/M system a command something like:

             XMODEM  SC  FILENAME.EXT                      _             XMODEM  SC  FILENAME.EXT

        On some other versions of the CP/M program, there is a command like:

             TCC             ___             TCC

        command to toggle the checksum type.

        Another common problem is that the data  rate  is  set  too  high  in
        relation  to  the  rate  of the console  screen.   This  is  because,
        sometimes, writing  things  to  the console takes long enough to miss
        characters on the serial device.  When the characters are missed, the
        data must be resent,  but  usually  the  result  of  resending is the
        same.  The IBM-PC running MS(PC)-DOS  is  a  serious  offender  here,
        since it takes "forever" to do a line feed.  When this  happens,  the
                        'Q'                             MODEM86                                                        _______        quiet suboption 'Q'  can  be  used  to keep any MODEM86 messages from
                                                         MODEM86                                                         _______        being displayed on the console.   This  can keep MODEM86 from missing
        the data,  since  it  doesn't print the message.  The quiet suboption
        can speed up file copies at  higher bit rates, or sometimes make file
        copies at higher bit rates work.

                'Q'        If the  'Q'  suboption fails to work, another possible solution is to
                  'F'        use  the  'F'  suboption  on  both  computers.  This might slow  both
        computers down at the critical points.








        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 97        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 97








        MODEM86(tm)                          Problem Determination Procedures        _______        MODEM86(tm)                          Problem Determination Procedures


                              'Q'      'F'        If  neither  of  the  'Q'  or  'F' suboptions allow the file copy  to
        proceed, then you probably have to reduce the bit rate for  the  file
        copy.  The appropriate bit  rate  can  be found in the same manner as
        for  screen  writing problems.  Sometimes it is possible to  do  file
                         'Q'      'F'        copying with the 'Q'  or  'F'  suboptions  at  higher  bit rates than
        normal terminal operations.






        11.8 Why does the checksummed file copy always start with a timeout?        ____________________________________________________________________        11.8 Why does the checksummed file copy always start with a timeout?


        If  the  transmitting  computer  starts  the  file  copy  before  the
        receiving computer, then there is often a delay of  as  much  as  one
        minute before the copying of  data  becomes regular.  This is because
        the  receiving  computer  misses  the  first  time  the  transmitting
        computer sends the data.  If the start up delay is annoying,  it  can
        be avoided by always starting the receiving computer first.

        Regardless of which computer starts first,  it  is  likely  that  the
        first computer that starts will indicate several timeouts.   This  is
                                              MODEM86                                              _______        very normal for the XMODEM protocol.  MODEM86 is set up to start with
        very  small  timeout  periods  which get increasingly  longer.   This
        allows the file copy to start  up quickly if both computers are setup
        in about the same time, and yet still work without too  many  timeout
        messages if it takes much longer to setup one computer than the other
        computer.  Once  both  computers  are set up, the file copying starts
        the next time receiving computer indicates a timeout.























        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 98        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 98








        MODEM86(tm)                          Problem Determination Procedures        _______        MODEM86(tm)                          Problem Determination Procedures







        11.9 Why aren't file data and host messages displayed?        ______________________________________________________        11.9 Why aren't file data and host messages displayed?


                                                                   ^T        During a simple non-checksummed file transfer started by a ^T when in
        Terminal  mode,  file  data  and  host  messages  are  not   normally
        displayed.  This speeds up the file  transfer  because  there  is  no
        delay caused by  the  scrolling  of  the console of the computer that
        MODEM86        _______        MODEM86 is running on.  However,  if  something goes wrong, any error
        message generated by the host is not  displayed on the console.  This
        can make it difficult to figure out what went wrong.  The solution is
                   'F'      'V'                     'T'        to use the 'F'  or  'V'  suboptions  on the 'T' command used to enter
        Terminal mode.  When one of these options is  used,  all  echoing and
        messages from the host are displayed on the console during the simple
        file  transfer.   Depending  upon  the  type  of console used on  the
                         MODEM86                         _______        computer running MODEM86, this often  also  has the effect of slowing
        down the transfer by delaying after each line  feed.   This  can help
        the file copy if the host needs time to digest each line as they come
        in.































        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 99        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.           Page 99








        MODEM86(tm)                          Problem Determination Procedures        _______        MODEM86(tm)                          Problem Determination Procedures







        11.10 Why does MODEM86 run but nothing is received from the host?        _________________________________________________________________        11.10 Why does MODEM86 run but nothing is received from the host?


        There are many situations which have this symptom.  Check out all the
        following possibilities.

                                                  'V'        Check the handshaking signals line in the 'V' command report.

            MODEM86            _______        If  MODEM86  indicated that the handshaking signals were not  all  on
        then DCD (Data Carrier  Detect = pin 8), CTS (Clear To Send = pin 5),
        or DSR (Data Set Ready = pin  6)  was not connected to the modem, and
        might be required for the serial chip to send data to the host.

        It might also be the  case  that RTS (Request to Send = pin 4) or DTR
        (Data Terminal Ready = pin 20) was not connected and the host doesn't
                                               MODEM86                                               _______        see any data from the computer running MODEM86.

        For some computers (not  many,  but  some)  a  "null  modem" cable is
        necessary for connection to a modem.   For  most  computers,  a  null
        modem is necessary to connect two  computers.  A null modem is just a
        cable with the wires "crossed"  so  that:  pin  2  on  each  side  is
        connected to pin 3 on the other side; pin 8 on each side is connected
        to pin 20 on  the  other  side, and to pins 5 and 6 on the same side;
        pins 1 and 7 connect  directly to the same numbered pins on the other
        side.

        A wiring diagram for a null modem would look something like this:


             pin  1 ----------------------- pin  1

             pin  2 >---------| |---------< pin  2
                               X
             pin  3 <---------| |---------> pin  3

             pin  5 <---|             |---> pin  5
             pin  6 <---|             |---> pin  6
             pin  8 >---|-----| |-----|---< pin  8
                               X
             pin 20 <---------| |---------> pin 20
             pin  7 ----------------------- pin  7


        The  resulting  null  modem  is  a  symmetric cable, other than  that
        possibly one side requires a female connector, and the other requires
        a male connector.  In other words, if the connectors are the same, it
        does not matter where each end of the cable is connected.


        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 100        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 100








        MODEM86(tm)                          Problem Determination Procedures        _______        MODEM86(tm)                          Problem Determination Procedures


        Check that the instructions  for  installing  the asynchronous serial
        card were followed correctly.

        Sometimes what is required is to find  the correct address or channel
        number  for  the  serial  device involved, as  this  user  manual  or
        MODEMSET might be incorrect about the values for some computer.

        If the modem being used has a half/full duplex  switch,  is it set on
        full duplex?  If it is set to half duplex, change it to full duplex.

        If the modem being used has a originate/answer switch, is it  set  to
        originate?  If it  is  set  to  answer, change it to originate.  Most
        hosts use answer mode, and expect "terminals" to use originate mode.

        If the modem is an acoustic modem, one with "ear muffs" for the phone
        handset, is the handset placed in the  modem correctly?  There is one
        end of  the  modem's acoustic coupler which must always have the cord
        end of the handset, and the modem is usually marked to indicate which
        end.

        Also, is the handset placed  in  the modem's acoustic coupler quickly
        enough?  If not, the host will probably hang up the phone  before  it
        is in.

        If  the  handset  is  never  placed  in the acoustic coupler  quickly
        enough,  try  putting the handset in the acoustic coupler  after  the
        first ring, instead of when the carrier signal comes on as  the  host
        answers the phone.

        Is the modem a "smart"  modem,  capable of "auto-dialing"?  The modem
        must be told to  dial up the host.  See the user manual for the modem
        for help in doing this.

        Was  the  bit  rate  specified  correctly  using MODEMSET, or in  the
        MODEM86                                      MODEM86        _______                                      _______        MODEM86 command?   If specified incorrectly, MODEM86 does not receive
        any characters correctly, although it  is  able to detect the carrier
        signal and so thinks  the  host  is  connected.   The  solution is to
        specify the correct bit rate.

           MODEM86           _______        Is MODEM86 running  when  the  network  or host phone number is being
        dialed?  If not, then the network or host might hang up  because  the
        DTR  (Data  Terminal Ready) signal cannot be provided when  the  host
        answers  the  phone.   The  solution  is to hang up, and  then,  when
        MODEM86        _______        MODEM86 is running, dial up the host again.

        Is the phone number being dialed the correct number for the  host  to
        be used?  Is it the correct phone  number  for  the  bit  rate  being
        used?  If not, then the solution is to use the correct phone number.






        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 101        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 101








        MODEM86(tm)                          Problem Determination Procedures        _______        MODEM86(tm)                          Problem Determination Procedures







        11.11 Why doesn't the backspace or delete key work?        ___________________________________________________        11.11 Why doesn't the backspace or delete key work?


        Some  hosts  do  not  allow  the  use  of  both backspace and  delete
        (sometimes called rubout) to delete  characters.   The  solution,  of
        course,  is  use the character appropriate for the host.   Note  that
        this is only a problem in terminal mode.










































        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 102        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 102








        MODEM86(tm)                             Compatibility and Limitations        _______        MODEM86(tm)                             Compatibility and Limitations








                                      Chapter 12                                      Chapter 12

                            Compatibility and Limitations                            Compatibility and Limitations




                                   MODEM86        ________________________________________        12.1 What limitations does MODEM86 have?


        MODEM86        _______        MODEM86 does have some limitations and we hope to remedy these in the
        future.

              MODEM86              _______          1.  MODEM86 does not emulate any particular type of terminal,  such
              as VT52 or VT100, unless your  8086/88  computer's  version  of
              MS(PC)-DOS or CP/M-86 emulates that type  of  terminal  or  has
                                                   MODEM86                                                   _______              that kind of terminal as a console.  MODEM86 also does not make
              any use of such special  escape  sequences to format the screen
              output.  It should have full screen output support using escape
              sequences.

              MODEM86              _______          2.  MODEM86  should  have an improved command  language  with  more
              command options.  The main problem here is  that it is too much
              like  the  CP/M Modem program syntax.  It should be  made  more
              friendly.

              MODEM86              _______          3.  MODEM86 supports only  one  error checking protocol.  It should
              support the Kermit protocol, and maybe others.

                                               MODEM86                                               _______          4.  It should  be  easier  to change MODEM86 options and to restore
              them.  It should be able to save options to a file.  This would
              make it easier to set up for use with several hosts.

              MODEM86              _______          5.  MODEM86 should allow writing new serial I/O code to be easier.

              MODEM86              _______          6.  MODEM86  should allow complete pathnames for MS(PC)-DOS  files,
              but currently it does not.   Currently  it expects all files to
              be in the current directories of the drives which are on-line.










        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 103        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 103








        MODEM86(tm)                             Compatibility and Limitations        _______        MODEM86(tm)                             Compatibility and Limitations






                                           MODEM86        ___________________________________________        12.2 Are there several versions of MODEM86?


        MODEM86        _______        MODEM86 has at exactly one  current  version.  That same version runs
                                                                 MODEM86                                                                 _______        on all the types of computer and  operating system which MODEM86 runs
        on.  This makes it convenient for distribution  purposes.   Only  one
        distribution master needs to be made for a new version.











































        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 104        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 104








        MODEM86(tm)                             Compatibility and Limitations        _______        MODEM86(tm)                             Compatibility and Limitations






                                                MODEM86        ________________________________________________        12.3 What computers are compatible with MODEM86?


                                                              MODEM86                                                              _______        This list of hardware we believe is compatible  with  MODEM86  is not
        all inclusive by any means!

        (Names below are all trademarks of indicated companies)

        Currently supported serial devices include:

             2651 ACIA (Synertek)
             2661/68661 EPCI (Motorola)
             6551 ACIA (Synertek)
             6850 ACIA (Motorola)
             7201 MPSCC (NEC)
             8250 ACE
             8274 MPSC (Intel)
             8530 SCC (Zilog)
             8251 USART (Intel/NEC)
             9551 USART (Advanced Micro Devices)
             Alpha-Microsystems 100
             Altos Intelligent Serial Concentrator
             Cromemco TUART
             Godbout Interfacer 3 and 4
             Hayes Micro Modem II
             IBM Displaywriter
             Morrow Designs Switchboard
             Morrow Disk Jockey
             Novation APPLE CAT II
             PMMI-100 board
             Zilog Z80SIO/Z80DART



















        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 105        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 105








        MODEM86(tm)                             Compatibility and Limitations        _______        MODEM86(tm)                             Compatibility and Limitations


        This  includes   the  standard  hardware  in  the  following  popular
        computers:

             Altos 8600
             APPLE with Metamorphic MetaCard card
                  (and most popular serial cards)
             AT&T 6300 PC
             Compaq Deskpro
             Data General One
             Digital Equipment Corporation (DEC) Rainbow
             Eagle 1600
             Godbout Systems with Interfacer 3 or 4
             Heath/Zenith Z100 series
             IBM Displaywriter
             IBM-PC and multitudes of very compatibles
             IBM-PC AT
             IBM-PC Jr.
             Lomas Data Products S100 PC
             Lomas Data Products Lightning One
             Lomas Data Products Thunder
             Nippon Electric Company (NEC) APC
             Sanyo 550
             Seattle Computer Products 8086 (Gazelle)
             Tandy 2000
             Tektronix 4170
             Texas Instruments Professional Computer
             TMSI H1000
             Victor 9000 (Sirius 1)
             Wang Professional Computer

        If a particular 8086/88  computer  is  not  listed  here,  ask for it
        anyway!






















        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 106        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 106








        MODEM86(tm)                             Compatibility and Limitations        _______        MODEM86(tm)                             Compatibility and Limitations






                                                  MODEM86        __________________________________________________        12.4 What computers are incompatible with MODEM86?


                                                                   MODEM86                                                                   _______        This list  of  computers  we believe are incompatible with MODEM86 is
        not all inclusive by any means!

                                                     MODEM86                                                     _______        Computers we believe are NOT compatible with MODEM86:

        (Names below are all trademarks of indicated companies)

        Bytec Hyperion -
             We have some code for it, but it's untested.
        Otrona Attache -
             We believe we have enough information, but no  one's  asked
             for it.



































        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 107        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 107








        MODEM86(tm)                                                   Credits        _______        MODEM86(tm)                                                   Credits








                                      Chapter 13                                      Chapter 13

                                       Credits                                       Credits




        _________________________        13.1 How did you do that?


        We know you have questions about our company and how our products are
        produced.   Needless  to  say,  we  use  only  the  finest  unnatural
        ingredients.

        Hersey Micro Consulting, Inc.  is a small  new company formed in 1984
        from a  three  year old consulting business owned by Mark Hersey.  We
        are specialists in  system  software for microcomputers.  Our company
        is dedicated to promoting software portability among machines.

        MODEM86        _______        MODEM86 was conceived as  a notion that there must be a way to make a
        program like the CP/M Users Group MODEM  which would work for 8086/88
        computers, which would be able to talk with  existing remote bulletin
                                                               MODEM86                                                               _______        board systems and exchange files.  The programming of  MODEM86  began
        in March, 1982. It was introduced  to the public in June, 1982. Until
        December, 1984, it was sold through CompuView Products, Inc.

            MODEM86            _______        The MODEM86 source program is about 20000 lines  of  code  written in
        Microsoft's  Macro  Assembler.   For  some reason, it  keeps  getting
        bigger, too.  Unlike many folks, we like  that  assembler,  including
        its primitive  type  checking.  We use a set of macros for structured
        programming that give us nested IF-THEN-ELSE type statements and LOOP
        type statements.

        Some utility programs were written in C and  compiled  with  either a
        Lattice  C  compiler  (we  like the generated  code)  or  a  Computer
        Innovations C compiler (we like the library source).












        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 108        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 108








        MODEM86(tm)                                                   Credits        _______        MODEM86(tm)                                                   Credits


        Rough drafts  and  abbreviated  on diskette forms of this user manual
        were processed by the Mark of the Unicorn's FinalWord word processing
        program for MS-DOS computers.   Final  copies  of  the  printed  user
        manual were produced by passing the FinalWord source  text through an
        conversion program  called  FW2TXF  written  by  Pat  Sherry  at  the
        University of Michigan Computing Center and a word processing program
        called Textform written at the University of Alberta.  Textform  runs
        on IBM 360/370 type computers  under  the MTS operating system, which
        was  originally  written by the staff of the University  of  Michigan
        Computing Center.  The camera ready printed manual was  produced on a
        Xerox 9700 page printer.

        Programs were  compiled  and assembled on a 6 MHz Lomas Data Products
        Lightning 286 S-100 bus computer running MS-DOS, which  is  sometimes
        downgraded  with  an 8 MHz Seattle Computer Products 8086  card  set.
        Memory  used  includes CompuPro RAM 22 256K static memory  cards  and
        Seattle Computer Products SCP-110 64K static memory cards.

        Programs were tested first and most frequently on  an  IBM-PC  with a
        Tecmar Graphics Master display adaptor board and a Princeton Graphics
        color monitor.  It  also  has  an  AST  Six  Pack Plus multi-function
        board, a Mountain fixed disk  controller,  and an Interface I**2 Disk
        System.  Naturally, we use IBM-PC DOS.

        We thank these companies for  their  creative efforts and for putting
        their useful products in the marketplace.

        We also thank our beta-testers for putting up  with unstable versions
        and providing useful comments.

























        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 109        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 109








        MODEM86(tm)                                Distribution and Licensing        _______        MODEM86(tm)                                Distribution and Licensing








                                      Chapter 14                                      Chapter 14

                              Distribution and Licensing                              Distribution and Licensing




                      MODEM86        _____________________________________        14.1 You mean MODEM86 isn't freeware?


                      MODEM86(tm)                      _______        The  program  MODEM86(tm) is a commercial product and is  not  public
        domain.  It is not "freeware" either, although  its  distribution  is
        similar to that of "freeware".

                  NOT                  ___        We prefer NOT to call it "freeware" for three reasons:

          1.  The name "freeware" implies something for nothing, and we still
              believe that we are  entitled  to  be paid by you for using our
              software, if you like it enough to use it.

                         abbreviated                         ___________          2.  Only  the  abbreviated  user  manual  is  on  the  distribution
              diskettes.  Several chapters describing  advanced  features  in
                                                   complete                                                   ________              detail have been removed  from  the  complete  user  manual  to
              create the abbreviated  user  manual.  The complete user manual
              is not free and must be purchased if one is desired.

          3.  "Freeware" is also a trademark of  The  Headlands  Press,  Inc.
              and not of our own.  If it were not trademarked and were merely
              a generic classification, we  would  have  less complaint about
              that aspect of things.

        Instead, perhaps we should call it "fairware".   We want things to be
        fair for you and for us.















        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 110        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 110








        MODEM86(tm)                                Distribution and Licensing        _______        MODEM86(tm)                                Distribution and Licensing


                                                       MODEM86                                                       _______        The basic difference between the license  for  MODEM86  and  that  of
                                                  MODEM86                                                  _______        software which is freeware is that use of MODEM86 beyond a free trial
                                      _________ _____ _______ _______        period, is subject to a  low  mandatory usage royalty payment instead
        of   a   voluntary  usage  royalty  payment   (sometimes   called   a
        "contribution" in  the latter case).  Unlike many commercial software
        vendors, we feel that you are entitled  to  a  test  drive  with  our
        software for a free  trial  period.   On  the  other  hand, like many
        commercial  software  vendors, we feel that if you continue  use  our
        software  you  should pay us for the privilege.  The  price  you  pay
        should still be fair, but it should not be free.












































        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 111        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 111








        MODEM86(tm)                                Distribution and Licensing        _______        MODEM86(tm)                                Distribution and Licensing






                                            MODEM86        ____________________________________________        14.2 How are you limiting my use of MODEM86?


                      MODEM86(tm)              abbreviated                      _______                  ___________        The  program  MODEM86(tm)   and   its  abbreviated  user  manual  are
        copyrighted                                                restricted        ___________                                                __________        copyrighted  by  Hersey Micro Consulting, Inc.   We  give  restricted
        permission to make unlimited numbers of copies for  personal use.  We
                  restricted                  __________        also give restricted permission to make unlimited numbers  of  copies
        of the diskettes for distribution to others.  To  allow such copying,
              ___ ____ _________        it is not copy protected.


        14.2.1 Limitations

        The restrictions on this permission to make unlimited numbers  copies        ___ ____________ __ ____ __________ __ ____ _________ _______  ______        The restrictions on this permission to make unlimited numbers  copies
        are as follows:        ___ __ ________        are as follows:

              _______  ______  __  ___  ____ _______ _______  ___________  __          1.  Printed  copies  of  the  user manual, whether  abbreviated  or
              _________ ____ ___ __ ___________              complete, must not be distributed  without  a  written  license
              from Hersey Micro  Consulting,  Inc.   to  do so, even if it is
              done  for  free  and  with  no  service charge.  All copies  of
              MODEM86          abbreviated              _______          ___________              MODEM86 and its  abbreviated  user manual which are distributed
              to others must be on magnetic media,  such as diskettes, or via
              electronic communications such as via electronic bulletin board
              systems or electronic  information  networks.   The  recipients
              must each print  their  own  copies  of  the  abbreviated  user
              manual.

              ___ _____ __ ___  ________  ____  ______  ____  ___  ___ __ ___          2.  The parts of the  complete  user  manual  that  are  not in the
              ___________ ____ ______ ____ ___ __ ___________              abbreviated user manual must not be distributed  in  any  form,
              especially  printed  or on magnetic media,  without  a  written
              license from Hersey Micro Consulting, Inc.



















        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 112        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 112








        MODEM86(tm)                                Distribution and Licensing        _______        MODEM86(tm)                                Distribution and Licensing


              ___ ______ ___________  __  ______ ____ _______ _____ _________          3.  All copies distributed  to  others must include files identical
              __ ___ ___ ________ _____              to all the original files.  A list of files is included in this
              manual.  So the program must not  be  distributed  without  the
              abbreviated  user  manual,  for  example.   The  files  may  be
              condensed via data compression  techniques if the decompression
              process results in files identical to all the  original  files,
              and that the decompression program is included on  the media in
              object  form.   Versions  of  the program or  abbreviated  user
              manual which have been otherwise modified, or incorporated into
              other  programs  in  whole  or in part,  must  not  be  further
              distributed.  Files indicating program  patches, or user manual
              addenda, may be added to the media as separate files, providing
              that there  is  room for such files on the media.  Such changes
              must not  remove  or  change the copyright notices found in the
              program or abbreviated user manual.

                     MODEM86              ___ __ _______ ______ ___ ____ __ _____ ___ __ ___ ________ ___          4.  Use of MODEM86 beyond ten days of first use of the program, the
              _____ _____ ________ __ _______ __ _  _________  _____  _______              "free trial period", is subject to a  mandatory  usage  royalty
              _______ __ ___              payment of $35 (United States)  per  computer  console  CRT  on
              which it  will  be used.  This is true unless you have received
              the published (printed and bound) form  of  the  complete  user
              manual, the cost of which includes the usage  royalty  payment.
              This usage royalty must be delivered directly to  Hersey  Micro
              Consulting, Inc.  at the address on  the  cover  page  of  this
              manual.  The free trial period is intended  to allow you to try
              the program before paying  for  it.   If at the end of the free
              trial period, you decide  you  do  not  want  to  pay the usage
              royalty, this may be done  providing  all copies of the program
              which are or will be in your possession are never used  by  you
              again.  Even in this case  they  may  be  further  distributed.
              Obviously, even though payment is  legally  mandatory,  we  are
              relying on your honesty, because in most  cases, we do not have
              much capability to enforce it.  Remember that your payment will
              help us  to  afford to develop other fine programs that you may
              also be interested in using.

                            MODEM86              __________ __ _______ ______ ___________ __ ______ ____ ___  __          5.  Recipients of MODEM86 copies distributed to others must not  be
              _______ ___ ___  _____  _______ __ __________ ____________              charged for the  usage  royalty by unlicensed distributors.  In
              fact, the recipients must be encouraged to follow  the terms of
              this  licensing  agreement.  Recipients should note  that  this
              means that payment of such distribution fees does not cover the
              usage royalty,  which  must  still  be  paid  to  Hersey  Micro
              Consulting, Inc., if the program is used beyond  the free trial
              period.   Distribution charges (such as materials and  postage)
              may be made if they are no  more  than $10 per copy and no more
              than  that  charged for other media  of  similar  construction,
              capacity, and quantity from the same distributor.







        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 113        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 113








        MODEM86(tm)                                Distribution and Licensing        _______        MODEM86(tm)                                Distribution and Licensing




        14.2.2 Rights

        Payment of the usage royalty fee entitles you to:

          1.  A  copy  of the next program update (does not  include  printed
              complete user manual) directly from  us.   If  you  describe  a
              feature you would like included, and we feel that we are likely
              to add some similar feature, we will delay  shipment until that
              similar feature is supported.

                           use                     MODEM86                           ___                     _______          2.  A license to use updated versions of MODEM86, if you can obtain
                                                                  not                                                                  ___              them, for no additional usage royalty fee.  It does not include
              the costs of distributing such updated versions.

                                           MODEM86                                           _______          3.  Request  help  with  solving MODEM86  related  problems.   Note
              however, that we do not  guarantee  that telephone help will be
              provided to each licensed user.  Remember that such things cost
              a good deal of money  to support.  We hope to set up a bulletin
              board system to provide information about new  versions  and  a
              mechanism for initiating problem resolution.

          4.  Assignment of a new serial number.  It will  be  placed  in the
              version heading of any update you receive directly from us.  It
              should be used as an identifying number when requesting updates
              or help.



























        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 114        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 114








        MODEM86(tm)                                Distribution and Licensing        _______        MODEM86(tm)                                Distribution and Licensing






                              MODEM86        ______________________________________________        14.3 How do I know if MODEM86 is right for me?





        14.3.1 DISCLAIMER        14.3.1 DISCLAIMER

        MODEM86        _______        MODEM86 and its user manual are  provided "as is".  If you don't like
        it  after  the free trial period, don't use it.  If you don't use  it
        after the free trial period, don't  pay for it.  We cannot warrant it
        for all possible purposes, as we know it  has  limitations.   We have
        even tried to notify you of the limitations  we  already  know about.
        We  cannot  warrant it for your specific purposes, because  it  would
        cost us much more to determine its suitability for your purposes than
        we are charging.

                                                                 MODEM86                                                                 _______        It is up to  you  to  determine the suitability of using MODEM86 with
        any other program or with any computer.  Mention of any other program
        or a computer in this manual is  not  a  guarantee  by  Hersey  Micro
                                                   MODEM86                                                   _______        Consulting, Inc.  of suitability of using  MODEM86  with  that  other
        program or  computer.   We  do occasionally make mistakes in the user
        manuals,  and  they  cannot  always  be  rectified  by  changing  the
        program.

        In no event will Hersey Micro Consulting,  Inc.  be liable, either to
        you  or to any other  party,  for  any  damages,  including  loss  of
        profits, lost savings,  or  other incidental or consequential damages
                                                          MODEM86                                                          _______        arising out of the  use  of  or  inability to use MODEM86, even if we
        have been advised of the possibility of such damages.

        Since you may have received this  version  from  someone  other  than
        Hersey Micro Consulting, Inc., it may have been mangled on its way to
        you.  We obviously can't  warrant  that  no  one  has  done that.  We
        certainly hope no one will do that, anyway.

        We reserve the right to make modifications to  the  program  and user
        manuals without notification to you.












        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 115        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 115








        MODEM86(tm)                                Distribution and Licensing        _______        MODEM86(tm)                                Distribution and Licensing






                                              MODEM86        ______________________________________________        14.4 How do I get updated versions of MODEM86?


        All prices below are subject  to change if our costs get out of hand.
        We  will  try  to  hold  the  price as low as possible, to  encourage
        everyone        MODEM86        ________        _______        everyone to use MODEM86.  It is also the case  that  as  the  program
        goes in function, the printed user manual will grow in size, and this
        will require a higher price for the manual.

        Updated versions of the  program  and  abbreviated  user  manual,  or
        versions on differently formatted  diskettes,  may  be purchased from
        Hersey Micro Consulting, Inc.  for $10 per diskette.  This requires a
        previously or simultaneously paid  license  fee.   The price includes
        the media, so please don't send us any.  We don't want our mailperson
        to be  overwhelmed  with  incoming packages.  Of course, you can also
        get updates from other customers of Hersey  Micro  Consulting,  Inc.,
        for whatever they charge.

        Diskettes are currently available in 8-inch  SSSD  formats  and  most
        5-inch DSDD formats.  We also expect availability in some  sub-4-inch
        formats when  such  formats  become more common.  We're sorry, but we
        cannot directly support  formats  requiring  one-of-a-kind  hardware,
        such as Victor 9000 (Sirius  1),  Apple  II,  or  any  type  of  hard
        sectored diskettes.  Orders  requiring  such  one-of-a-kind  hardware
        will require  an  extra  $25 processing charge per order, assuming we
        can find such hardware to borrow.

        We provide software  update  notice  service  for a $25 one time fee.
        This requires a previously or simultaneously paid license fee.   This
        puts you on our mailing list of customers who are interested in being
        directly notified of the availability of  newer  versions.   We  will
        send you a notice giving an overview of new features and bug fixes in
        new versions on a quarterly basis.  Then you  can  decide  whether to
        obtain a new version, either directly from  us or elsewhere.  We will
        also notify you of the availability of other programs from us.















        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 116        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 116








        MODEM86(tm)                                Distribution and Licensing        _______        MODEM86(tm)                                Distribution and Licensing






        ______________________________________________________        14.5 What do we pay if we have more than one computer?


        Site licenses may be purchased from  Hersey  Micro  Consulting,  Inc.
        The  charge for such a  site  license  is  $25  (United  States)  per
        computer console CRT  owned  by  the  licensing entity on which it is
                        MODEM86                        _______        possible to use MODEM86 (fair  estimates  accepted).   If  additional
        computers are purchased by the licensing entity, the  royalty  should
        be recalculated and the increase paid annually.  Site licenses  cover
        all use by  all  employees  or  students,  regardless  of whether the
        computers used are  owned  by  the  licensing entity.  So home use is
        included, for example.  Site license pricing  does  not  include  any
        printed user  manuals.   They  may be purchased for an additional $40
        each.




































        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 117        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 117








        MODEM86(tm)                                Distribution and Licensing        _______        MODEM86(tm)                                Distribution and Licensing






                                          MODEM86        ______________________________________________________        14.6 Can I get a printed complete MODEM86 user manual?


        Printed user manuals in "IBM  standard"  size loose leaf binders with
        slip covers may be purchased for $75.  The  $75  price  includes: the
        printed  manual;  a usage royalty fee for one CRT;  one  distribution
        diskette,  formatted  for  either  MS(PC)-DOS  or  CP/M-86, with  the
        program and a magnetically copyable version of the  abbreviated  user
        manual.  This is the "commercial"  version  of the program.  When the
        order is prepaid, the price also  includes  ground  shipping  by  UPS
        within  the  USA.   Other  shipping arrangements require  a  shipping
        charge.

                          MODEM86                          _______        If you  received  MODEM86  from us or from another commercial product
        vendor, and did not receive a  printed user manual, then you may have
                                                   MODEM86                                                   _______        received our registration coupon with your MODEM86 serial  number  on
        it.   Receiving  that  coupon  means  that  vendor  has  paid  us  to
                   MODEM86                   _______        distribute MODEM86 with their product,  and  it means that your usage
        royalty (for one CRT)  has  already  been paid for you by the vendor.
        If you did  not  receive  our  registration  coupon  with your serial
        number on it, or a printed user manual, then  the  vendor did not pay
        your  usage  royalty  fee,  and  you  must  pay   it  yourself.   The
        registration coupon  is  redeemable  for a printed user manual at the
        reduced cost of $40.

        Updates for the complete user  manual  will cost $25, assuming you've
        purchased the commercial version of the program,  or  have  otherwise
        payed the usage royalty licence fee.

        We didn't include  the  complete  user  manual  on  the  distribution
        diskettes for several reasons:

              ________ __  ________  ___  __ _ _________ _____          1.  Frankly, it  wouldn't  fit  in a printable form.  At least, not
              the way we want it printed.

          2.  Using data compression might have  made  it fit, but would have
              scared  away   some   potential   users,   and   made  printing
              inconvenient.

          3.  An abbreviated user manual is quicker and less discouraging  to
              print, or to download from a bulletin board system.

          4.  We wanted some control over how it got  abbreviated, for people
              desiring only a shorter form.

          5.  It  provides  some small encouragement to pay us for  our  hard
              work.



        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 118        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 118








        MODEM86(tm)                                Distribution and Licensing        _______        MODEM86(tm)                                Distribution and Licensing






                               MODEM86        ____________________________________________________        14.7 Can I publish the MODEM86 complete user manual?


                                     MODEM86                                     _______        You  may  want  to  include  MODEM86  with your hardware or  software
        product.  Companies interested in publishing the complete user manual
        should contact  us.   We would prefer to program than to publish!  We
        can provide you with a license to publish  the  complete  user manual
        with  a  distribution diskette; or we can provide you  a  license  to
        distribute  diskettes  with   a   serialized   registration   coupons
        redeemable for reduced cost printed user manuals.  The  license  cost
        includes the usage royalty  fee  for  one CRT for each recipient of a
        published  complete  user  manual,  or  the  serialized  registration
        coupon.  Essentially,  all  we  are doing is selling you a particular
        lot of serial numbers and a clear conscience.  However, your customer
        gets an even bigger bargain on our product.

        Generally, we would prefer that you use one or the other of the above
        licenses  if  you  distribute   our   software   with  your  product.
        Distributing  our  software  with  your product without  the  license
        falsely implies to  the  customer  that  you've paid us a royalty and
        therefore that customer has already paid to use our software.




                           MODEM86        __________________________________________        14.8 Can I buy the MODEM86 program source?


                                                                  MODEM86                                                                  _______        We would be happy to provide you with the source code for MODEM86, if
        you are willing to sign a non-exclusive licensing  agreement, and pay
        $250,000 U.S. dollars for the privilege.  For  an even larger sum, we
        might even allow  you  to  publish  the  source.   We obviously don't
        expect  too  many  takers.   Although  we  don't  expect  to   become
        millionaires selling this program, we  do  have some stake in keeping
        the  source  to  ourselves  until  we have made some money  from  our
        efforts.














        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 119        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.          Page 119








        MODEM86(tm)        _______        MODEM86(tm)


                              MODEM86                              _______                              MODEM86 REGISTRATION FORM

        Person completing form:

        Date:

        Company:

        Address:



        When did you first receive this product:



        Release number:

        Old serial number:

        What type of computer are you using it on:

        Comments:































        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)
























































        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)



        Hersey Micro Consulting, Inc.           Invoice # 8401
        P.O. Box 8276                           Michigan and Federal
        Ann Arbor, Michigan  48107              EIN 38-2532624
        (313) 994-3259                          Date:    /    /


        Product                 Quantity Price Each Item Total

        MODEM86        _______        MODEM86:

        complete user manual        ___ @ $75.00 = ______
        (includes royalty & disk)

        software usage royalty      ___ @ $35.00 = ______
        (includes next update disk)

        software update disk DSDD   ___ @ $10.00 = ______
        (requires paid usage royalty)

        user manual update          ___ @ $25.00 = ______
        (requires paid usage royalty)

        update notice service       ___ @ $25.00 = ______
        (requires paid usage royalty)


        Subtotal:                                  ______


        4% sales tax (Michigan residents) x0.04=   ______


        Total:                                     ______

        Make checks payable to: Hersey Micro Consulting, Inc.
        MasterCharge and Visa are accepted.

        Card number: ____________________ Expires: ______

        You should retain this a copy of this invoice for your tax records.













        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)


                    MODEM86                    _______                    MODEM86 USAGE AND PROBLEM REPORT QUESTIONNAIRE

        We at Hersey Micro Consulting greatly appreciate your taking the time
        to complete this questionnaire.   Your  suggestions  and comments are
        important to us, as they help us both to  evaluate  and  improve  our
        products.  Please feel  free  to  file  this report with us more than
        once.

        Person completing form:

        Date:

        Company:

        Address:



        When did you first receive this product:

        Release number:

        Serial number:

        What type of computer was it used on:



        During the usage period, about how many hours per  day  did  you  use
        this product on average?


        Do you have  any  experience  with  similar  products,  even on other
        computers?  If so, please describe the products and computers.






        How long have been using computers?



        Please give a brief description of your business and how this product
        was used:








        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)


        Using a scale of 1 to 10 (1=terrible, 5=average, 10=excellent) please
        indicate your general satisfaction with the following:

        The product on the whole:

        The user manual:

        The setup procedures:

        The ease of using this product:

        The practicality or usefulness of this product:

        The performance of this product:

        The help provided by Hersey Micro Consulting:

        The following questions  may  require more lengthy responses.  Please
        use the reverse side of this sheet or additional sheets of  paper  as
        necessary.

        What would you say are the BEST features of this product?






        What would you say are the WORST features of this product?






        List any extraneous or useless features of this product that you have
        noticed.






        List any enhancements  you  would  like  to see added to the existing
        features of this product.









        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)


        Describe any problems you have encountered  in  using  this  product,
        including examples if possible.




















































        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)






                                        Index


        '!'  59
        '~'  59
        16-bit checksum  57, 76
        6300 PC, AT&T  35
        8600  33
        MODEM86  1
        MODEM86.DOC  8
        MODEM86.HST  8
        MODEM86.SET  8, 9, 92
        ^B  62
        ^D  62
        ^E  61, 68
        ^L  62
        ^P  61
        ^R  61
        ^T  65
        ^Y  60, 68
        abbreviated user manual  8, 9
        AIO Card  34
        Altos 8600  33
        answer mode  56, 59
        Apple  34
        Apple Cat II  34
        Apple Serial  34
        Apple Super Serial Card  34
        AT&T 6300 PC  35
        AT, IBM-PC  40
        Attache  42
        auto-dial chips  53
        auto-dialing  5, 54, 66, 81
        auto-logon  66
        backspace key  102
        backup distribution diskette  9
        batch mode  4, 52, 56
        BBS  118
        BIN2HEX  8, 65, 90
        binary to character conversion  90
        BIOS, custom serial I/O  48
        bit rate  51, 52, 55, 59, 61, 67, 71, 72, 96, 97, 101
        break  62
        bugs  103
        bulletin board system  118
        Bytec Hyperion  35
        cables  100
        call phone number  54, 81
        cancelling suboption  59

        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)


        carriage controls  87
        CCS 7701  34
        changing default drive  52
        character to binary conversion  90
        CMD2COM  3, 8, 84
        COM2CMD  3, 8, 85
        command syntax  51
        command syntax, examples  51
        commercial version  118
        Compaq Deskpro  35
        compatible computers  105
        complementing suboption  59
        complete user manual  118
        compression  118
        computer group  15
        Computer, configuring  15
        configuring MODEM86  2, 12
        configuring MODEM86  94
        configuring, answers  33
        configuring, Computer  15
        configuring, control characters  27
        configuring, CPU and Memory  18
        configuring, customized SIOBIOS  20, 48
        configuring, default values  29
        configuring, defaults  13
        configuring, group menu  14
        configuring, questions  13
        configuring, serial device  19
        connecting  100
        continuous redial  57, 80
        control characters, configuring  27
        conversation save file  51, 60, 67
        conversation save file, delete  64
        conversation save file, display name  55
        conversation save file, example  68
        conversation save file, purge  54, 61
        conversation save file, write and close  55, 63
        converting from CP/M-86 to MS(PC)-DOS  84
        converting from MS(PC)-DOS to CP/M-86  85
        CP/M MODEM  1, 3
        CPU and Memory, configuring  18
        CRC-16 checksum  57, 76
        current value display  55, 57
        custom serial I/O BIOS  10, 48
        customized SIOBIOS, configuring  20, 48
        data compression  118
        Data General One  36
        data viewing  56
        DEC Rainbow  36
        default answers  93
        default values, configuring  29
        delete conversation save file  54
        delete key  102

        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)


        Deskpro, Compaq  35
        dialing  54, 81
        directories  103
        directory  54
        disclaimer  115
        disconnect  54, 56, 62, 81
        DISTMDM  8
        distribution  110
        distribution diskette  8
        documentation  8, 9, 118
        duplex  60, 62
        Eagle 1600  37
        echo mode  54, 62
        examples, command syntax  51
        examples, general communications  67
        examples, modem control  82
        examples, phone number directory  82
        examples, program call  52
        examples, transferring files  67, 71
        EXPAND  8, 89
        expert mode  53, 55
        extended checksum  57, 76
        FIDO  3
        file data display  54
        file list  8
        file transfer  4
        free trial period  113
        freeware  110
        full screen output  103
        full-duplex  60
        Gazelle  43
        Godbout Systems  37
        group menu, configuring  14
        half-duplex  62
        hang up  54, 56, 62, 81
        Hayes Micromodem II  34
        Heath/Zenith Z100  37
        help  5
        help text  51, 52, 53, 55
        Hitachi B16  38
        host files, printing  87
        Hyperion  35
        IBM Display Writer  38
        IBM PC Jr.  40
        IBM-PC AT  40
        IBM-PC or very compatible  39
        incompatible computers  107
        incompatible versions  92
        index  6
        installing MODEM86, simple  8
        Interfacer 3 or 4  37
        interrupt driven  48
        introduction to MODEMSET  12

        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)


        joke  11, 85, 108
        Kermit  103
        light-minutes  85
        limitations  103
        line feed  65, 96, 97
        literal next  62
        Lomas Data Products Lightning 286 w/Hazitall  41
        Lomas Data Products Lightning One 8086 w/Hazitall  41
        Lomas Data Products S100 PC w/Hazitall  41
        lower case  7
        manual  8, 9, 118
        menu  50, 54
        menu option, '?'  51, 55, 81
        menu option, 'C'  54, 81, 82
        menu option, 'D'  54, 55, 67, 82
        menu option, 'E'  54, 60, 62, 67
        menu option, 'F'  54
        menu option, 'H'  60, 62
        menu option, 'L'  54
        menu option, 'M'  54
        menu option, 'P'  54, 55, 60, 63, 64
        menu option, 'Q'  55, 63, 64
        menu option, 'R'  55, 69, 71, 72
        menu option, 'S'  55, 69, 71, 72
        menu option, 'T'  55, 60, 67
        menu option, 'V'  55
        menu option, 'W'  55, 60, 61, 63, 64, 67, 68
        menu option, 'X'  55
        menu option, list  50
        menu option, overview  54
        MetaCard  34
        Micromodem II  34
        MODEM 7.2, differences  79
        modem control  80
        modem mode  55
        modems  101
        MODEMSET  2, 8, 9, 12, 92, 93, 94
        multifile copy  56, 71, 72
        negating suboption  59
        Nippon Electric (NEC) APC  42
        Novation Apple Cat II  34
        null modem  100
        operating systems, changing  83
        options  103
        originate mode  56, 59
        Otrona Attache  42
        parity  55, 95
        parity, clear  56
        parity, even  56
        parity, mark  57
        parity, none  56
        parity, odd  57
        parity, set  57

        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)


        paths  103
        PC-Talk  103
        phone line noise  69
        phone number  101
        phone number directory  80
        phone number directory, examples  82
        PHONES.DAT  8
        poll driven  48
        printed user manuals  118
        printing host files  87
        problem determination procedures  92
        problem, backspace key doesn't work  102
        problem, checksummed file copy cancels  97
        problem, checksummed file copy starts with timeout  98
        problem, data lost from each line  96
        problem, default MODEMSET answers are strange  93
        problem, delete key doesn't work  102
        problem, file data not displayed  99
        problem, half of the characters look wrong  95
        problem, host messages not displayed  99
        problem, incompatible versions  92
        problem, installation  11
        problem, MODEMSET says it can't open MODEM86.SET  92
        problem, not MODEM86  13
        problem, nothing received from host  100
        problem, screen written incorrectly  95, 96
        problem, SIO parameter error  94
        program call  52
        program call, examples  52
        program source  119
        Promethus Versacard  34
        protocols, XMODEM  73
        purge conversation save file  54
        quiet mode  57
        quit  55
        Rainbow  36
        RBBS-PC  3
        RCPM  3
        receiving files  55, 60, 63, 67, 69
        receiving files, examples  67, 71
        REMOVECC  8, 87
        royalty  111
        Sanyo 550  43
        Seattle Computer 8086  43
        send file  55
        sending files  65, 69
        sending files, examples  71
        serial card  101
        serial device, configuring  19
        serial I/O  2
        serial I/O BIOS (SIOBIOS)  20, 48
        serial I/O BIOS, custom  48
        serial I/O, writing code  103

        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)


        setting up MODEM86, simple  8
        SHRINK  9, 89
        SIOBIOS  48
        SIOBIOS.A86  9
        SIOBIOS.MAC  9
        Sirius 1  47
        site licenses  117
        smart modems  101
        source program  119
        split rates  52
        squeezed files  88
        SSM AIO Card  34
        Stearns PC  43
        stop bits  55, 59
        stop bits, one (1)  57
        stop bits, two (2)  58
        subdirectories  103
        suboption, '1'  57
        suboption, '2'  58
        suboption, 'A'  56, 67, 71, 72, 82
        suboption, 'B'  56
        suboption, 'C'  56
        suboption, 'D'  55, 56
        suboption, 'E'  56
        suboption, 'F'  56, 71, 97
        suboption, 'G'  56, 67, 71, 82
        suboption, 'M'  56, 70, 71, 72
        suboption, 'N'  56
        suboption, 'O'  57
        suboption, 'Q'  57, 71, 97
        suboption, 'R'  57, 80, 82
        suboption, 'S'  57
        suboption, 'T'  57, 71
        suboption, 'V'  57
        suboption, 'X'  57, 71
        suboption, cancelling  59
        suboption, list  53
        suboptions, meanings  56
        Super Serial Card  34
        tab character processing  89
        Tandy 2000  44
        Tektronix 4170  44
        terminal emulation  4, 103
        terminal mode  55, 57
        terminal mode, description  60
        Texas Instruments Professional Computer  46
        TI Professional Computer  46
        timeout  98
        TMSI H1000  46
        transferring files  55, 60, 63, 65, 67, 69
        transferring files, examples  67, 71
        trial period  113
        unsqueezed files  88

        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.








        MODEM86(tm)        _______        MODEM86(tm)


        UNSQZ  9, 88
        update notice service  116
        updated versions  116
        upper case  7
        user manual  8, 9, 118
        utilities  3, 5, 87
        value display  52, 55, 57
        verify distribution diskette  8
        Versacard  34
        versions  104
        Victor 9000  47
        Wang Professional Computer  47
        wiring diagram  100
        X-ON/X-OFF  4, 28, 61, 65
        XMODEM  3, 97







































        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.        (C) Copyright 1982-85 Hersey Micro Consulting, Inc.





```
{% endraw %}

## PATCHES.DOC

{% raw %}
```
All patches require read and writing MODEM86.SET
Followed by rerunning MODEMSET.
For versions before 04/24/83 with problems with:
    Cloberring op system/can't handle large files:
	For CP/M-86:
	    Need to DDT86 MODEM86.CMD to find the address as follows:
	    IRQ    (change command tail to do RCV QUIET)
	    L50 look for "JMF" followed by "CALL", take dest addr (~185F)
	    L at that addr until "CALL BX", take addr of call inst (~18BD)
	    G to that addr and then L once, take dest of 3rd call (~113C)
	    L twice at that addr, look for "INC AL","CMP AL,[?]", "JNZ",
		"CALL" take destination of that call (~D64)
	    L at that addr, look for "MOV", "MOV", "MOV", "REP MOV", "MOV"
		"INC", "CMP". 
	    If the CMP is "CMP DI" forget this patch!  (Some other problem)
	    If the CMP is "CMP SI" then change to "CMP DI".
	    To do that, remember address of CMP inst and exit DDT86
	    DDT86 MODEM86.SET and add 080H to address and change
		inst at that address (should be the CMP!)
	For MS-DOS:
	    Same a above but:
		first two addresses are 80 less.
		must add 100H to address to find it when finally patching.
For version 04/30/83:
    Machines using 2651 or 2661 SIO chip gives SIO parameter error:
	For CP/M-86:
	    A260E	CMP AL,00
	    A26F4	AND AL,38	
	For MS-DOS:
	    @ 258E change 3C 05 (CMP AL,05) to 3C 00 (CMP AL,00)
	    @ 2674 change 24 1C (AND AL,1C) to 24 38 (AND AL,38)
For version date 06/06/83:
    For DEC RAINBOW CP/M-86:
	To turn handshaking signals on:
	    A2652   JMP 2600
	    A2600   CALL [1440]
		    XOR AL,AL
		    OUT 02,AL
		    JMP 2656
	To select port correctly:
	    SIO dev#=6 (NEC 7201)
	    Not memory mapped
	    Base=40
	    Spacing=1
	    Order=1
	    Channel=0
	    BPS dev#=1 (Must use setup key to change rate)
	    Base=0
    For NEC APC both CP/M-86 and MS-DOS:
	Cannot set or change data rate:
	    Select BPS channel 1, not 0 for COM1: (2 not 1 for COM2:)
For version of 08/15/83 with problems with:
    Godbout Interfacer 3 or other 2651 based serial I/O:
	SIO parameter error problem:
	    For CP/M-86 or MP/M-86:
		A2490 NOP	;Clears error jump after buggy SIO check.
		      NOP	;Was a JZ.
		A265A JMP 2542	;Use correct baud rate table.
		A2643 JMP 2693  ;Fix channel selection....
		A2693 XCHG AH,AL ;This patch will make it not work on
		      MOV AL,[16D4] ;Non 2651 system ... other serial 
		      MOV DX,7   ;chip code is clobbered...
		      ADD DX,[1B12]
		      OUT DX,AL
		      XCHG AL,AH
		      RET
	Note that it will probably cause MP/M-86 to crash if other user's
	use keyboards (ie. unsafe unless single user)
	Newer version should fix this.
For version of 08/15/83 with problems with:
    CP/M-86 or MP/M-86 won't allow new commands after an R command or
    Goes into loops when saving conversation or
    Gets into problems with any other situation calling for making a file:
	A1D63 OR AL,01
	      JMP 1D7B
	Has side effect: Will not delete old files (files named same
	as ones received), but instead reuses them.  If new file is
	supposed to be smaller, it may have garbage (from old file)
	at the end.  CP/M-86 may also make two files with same name!
    Break causes MODEM86 to lock up on 2661/2651 code:
	For CP/M-86:			Was:
	    A25CE MOV AL,08		MOV AL,09
		  XOR AL,37		XOR AL,36
	For MS-DOS:			Was:
	    A264E MOV AL,08		MOV AL,09
		  XOR AL,37		XOR AL,36
For version of 10/06/83:
    This version has problems with nearly all of the MODEM7 protocol
    file transfer options.  These patches fix all of the problems.
    For CP/M-86:  (10/06/83)
		New:				Old (for verify):
	A1149 MOV CH,1			CALL 4C9
	      CALL 4E5			JZ 1155
	      JNZ 1149			MOV CH,1
	      MOV AL,15			CALL 4E5
	      CALL 481			JNZ 1149
	      XOR AL,AL			MOV AL,15
	      NOP			CALL 481
	      NOP			
	      NOP
	A16C9 JMP 16F2			JMP 16D6* (Both off by a few bytes?)
	A0EB3 JZ ED1			JNZ ED1
	A125A CMP AL,04			CMP AL,04* (Both off by a few bytes?)
	      NOP			LAHF
	      NOP			AND AH,40
	      NOP
	      NOP
	CP/M-86 version probably also needs patch similar to one for
	08/15/83 version.  Contact MH.
    For MS-DOS: (10/06/83)
		New:				Old (for verify):
	A11C9 MOV CH,1			CALL 549
	      CALL 565			JZ 11D5
	      JNZ 11C9			MOV CH,1
	      MOV AL,15			CALL 565
	      CALL 501			JNZ 11C9
	      XOR AL,AL			MOV AL,15
	      NOP			CALL 501
	      NOP			
	      NOP
	A1749 JMP 1772			JMP 1756* (Both off by a few bytes?)
	A0F33 JZ F51			JNZ F51
        A12DA CMP AL,04                 CMP AL,04* (Both off by a few bytes?)
 	      NOP			LAHF
	      NOP			AND AH,40
	      NOP
	      NOP
For version of 10/21/83:
    This version has problems with nearly all of the MODEM7 protocol
    file transfer options.  These patches fix all of the problems.
    For CP/M-86: (10/21/83)
		New:				Old (for verify):
	A114D MOV CH,1			CALL 4C9
	      CALL 4E5			JZ 1159
	      JNZ 114D			MOV CH,1
	      MOV AL,15			CALL 4E5
	      CALL 481			JNZ 114D
	      XOR AL,AL			MOV AL,15
	      NOP			CALL 481
	      NOP			
	      NOP
	A16CD JMP 16F6			JMPS 16DA
	A0EB7 JZ ED5			JNZ ED5	
        A125E CMP AL,04			CMP AL,04
	      NOP			LAHF
	      NOP			AND AH,40
	      NOP
	      NOP
    For MS-DOS: (10/21/83)
		New:				Old (for verify):
	A11CD MOV CH,1			CALL 549
	      CALL 565			JZ 11D9
	      JNZ 11CD			MOV CH,1
	      MOV AL,15			CALL 565
	      CALL 501			JNZ 11CD
	      XOR AL,AL			MOV AL,15
	      NOP			CALL 501
	      NOP			
	      NOP
	A174D JMP 1776			JMP 175A
	A0F37 JZ F55			JNZ F55	
	A12DE CMP AL,04			CMP AL,04
	      NOP			LAHF
	      NOP			AND AH,40
	      NOP
	      NOP
With the 11/21/83 version:
    All equipment labelled as untested by MODEMSET will probably work.
    (Other than Altos 8600/586 see below)
    Patches, if required, would be minor since we have managed
    to provide successful patches (via phone call) to owners of
    previous versions.
For version of 11/21/83 to make Altos 8600/586 code work:
    Will still likely cause MP/M to fail mysteriously after running
    MODEM86.  Later versions will fix this. 
    In DDT86 on MP/M-86:
	A2058 TEST ES:BYTE PTR 04[BX],80	Was DI
	A2064 JMP 5030
	A5030 MOV AX,DS
	      MOV CL,4		These two insert this instruction.
	      ROL AX,CL
	      JMP 2068
	M208A,20B4,2081		These two will reorder instructions.
	A20AC POP SI
	      POP AX
	      ADD SI,204D
	      ADC AX,0000
	A2081 MOV CH,B4         Was 74
	A208A MOV CH,97		Was 57
	A2093 MOV CH,95		Was 55
	A20B9 MOV ES:BYTE PTR 0C[BX],AL		Was 0A
	      MOV ES:WORD PTR 0A[BX],SI		Was 0B
For version of 11/21/83 to make Godbout code work:
    In DDT86 on CP/M-86:
	A2991 CALL 2873		Was CALL 2863
	A2979 JMP 5030		Was MOV AX,[1864]
	A5030 PUSH AX		Was zeroes
	      MOV AL,[1864]
	      MOV DX,0007
              ADD DX,[1CA2]
	      CLI
	      CALL [15E2]
	      POP AX
	      RET
For version of 11/21/83:
    Break causes MODEM86 to lock up on 2661/2651 code:
	For CP/M-86:			Was:
	    A28FF MOV AL,08		MOV AL,09
		  XOR AL,37		XOR AL,36
	For MS-DOS:			Was:
	    A297F MOV AL,08		MOV AL,09
		  XOR AL,37		XOR AL,36
For version of 12/28/83 to make Altos 8600 code work:
    Will still likely cause MP/M to fail mysteriously after running
    MODEM86.  Later versions will fix this. 
    In DDT86 on MP/M-86:		Was:
	A2228 JMP 5050			MOV AX,[BX+11]
	A5050 MOV AX,[BX+11]		Patch area (zeroes)
	      MOV DX,AX
	      JMP 222B
	A2237 MOV BX,DX			MOV BX,AX
	A2154 JMP 5060			ES:INC BYTE 05[BX]
	A5060 ES:INC BYTE 05[BX]	Patch area (zeroes)
	      MOV BX,[2054]
	      ES:MOV BYTE 04[BX],83
	      MOV BX,[2052]
	      ES:INC BYTE 05[BX]
	      OR AL,TRUE
	      JMP 2158
For version of 12/28/83:
    MODEMSET does not allow choice of Customized Serial I/O BIOS:
    (Apply patch to MODEMSET, not MODEM86)
	For CP/M-86:			Was:
	    A50D NOP			JZ ...
		 NOP
	For MS-DOS:
	    A58D NOP 			JZ ...
		 NOP
For version of 12/28/83:
    Break causes MODEM86 to lock up on 2661/2651 code:
	For CP/M-86:			Was:
	    A2931 MOV AL,08		MOV AL,09
		  XOR AL,37		XOR AL,36
	For MS-DOS:			Was:
	    A29B1 MOV AL,08		MOV AL,09
		  XOR AL,37		XOR AL,36
For version of 01/19/83 to make Altos 8600 code work:
    May require patches...but it should not cause MP/M to fail now.
For version of 01/19/83:
    Break causes MODEM86 to lock up on 2661/2651 code:
	For CP/M-86:			Was:
	    A29BD MOV AL,08		MOV AL,09
		  XOR AL,37		XOR AL,36
	For MS-DOS:			Was:
	    A2A3D MOV AL,08		MOV AL,09
		  XOR AL,37		XOR AL,36
Documentations have been incorrect for some time on SIOBIOS vector
    number to use on IBMPC.SIO.  It should be 60 not 40.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0439

     Volume in drive A has no label
     Directory of A:\

    BIN2HEX  COM      3444   8-17-84   9:35a
    CMD2COM  COM      3001   8-17-84   9:33a
    COM2CMD  CMD      3328   3-04-85  11:09a
    COM2CMD  COM      3131   8-17-84   9:32a
    DISTMDM  BAT       512   1-10-85   1:34p
    DISTMDM  SUB       512   1-10-85   1:40p
    EXPAND   COM      3208   8-17-84   9:34a
    FILES439 TXT      1735   1-11-89   1:05p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       925   1-09-89   2:48p
    MANUAL   BAT       147  12-15-88  12:39p
    MODEM86  DOC    133671   5-03-85  10:51a
    MODEM86  HST      1536   5-03-85  12:17a
    MODEM86  SET     28032   6-10-85  10:40a
    MODEMSET COM     18024   5-03-85  12:15a
    PATCHES  DOC      8832   1-24-84   9:21p
    PHONES   DAT      1280   3-23-85   3:09p
    REMOVECC COM      3541   8-17-84   9:28a
    SHRINK   COM      3256   8-17-84   9:32a
    SIOBIOS  A86     11264   2-06-83  11:31p
    SIOBIOS  MAC     13824  11-13-83  10:15p
    UNSQZ    COM      5576   4-14-85  12:58a
           22 file(s)     248817 bytes
                           61440 bytes free
