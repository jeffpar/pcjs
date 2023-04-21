---
layout: page
title: "PC-SIG Diskette Library (Disk #2695)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2695/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2695"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}
{% comment %}samples_begin{% endcomment %}

## CCL.DOC

{% raw %}
```
 
 
                      C Communications Library ( CCL )
 
 
 
                               Version 1.0
 
                              14 January 1991
 
 
 
                            Copyright (C) 1991
                              By MarshallSoft
                            All rights reserved
 
 
 
 
 
 
 
 
                                MarshallSoft
                                PO Box 4543
                             Hunstville, AL 35815
                               (205) 881-4630
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 1
 
 
 
 
                             Table of Contents
 
 
 
 
 
          Chapter                                     Page
 
          Introduction.................................3
          Registration.................................4
          Serial COM Ports.............................5
          RS232........................................6
          National INS8250 UART........................7
          Revision History.............................7
          Warranty.....................................7
          Using the Library............................8
             Compiling & Linking.......................9
             Problems.................................10
          Library Reference...........................11
             SioBaud..................................12
             SioBrkKey................................13
             SioBrkSig................................14
             SioCrtWrite..............................15
             SioDTR...................................16
             SioDelay.................................17
             SioDone..................................18
             SioError.................................19
             SioGetc..................................20
             SioKeyPress..............................21
             SioKeyRead...............................22
             SioLine..................................23
             SioModem.................................24
             SioParms.................................25
             SioPutc..................................26
             SioRTS...................................27
             SioReset.................................28
             SioRxBuf.................................29
             SioRxFlush...............................30
             SioRxQue.................................31
             SioTimer.................................32
          Error Code Summary..........................33
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 2
 
 
 
 
                             Introduction
 
 
 
          The  C  Communications  Library  (  CCL  ) is  an  asynchronous
          communications  library   designed   for   experienced   software
          developers  programming  in  Microsoft  C  or  Turbo  C.   An IBM
          PC/XT/AT or compatible is required.  The CCL features:
 
          o  16 communications functions + 6 support functions.
          o  Receiver is interrupt driven.
          o  Runs from 300 baud to 115,200 baud.
          o  Supports COM1, COM2, COM3, and COM4.
          o  Adjustable receive queues from 8 bytes to 16 KB.
          o  Control-BREAK error exit.
          o  11 comm error conditions trapped.
          o  Supports all memory models.
          o  Allows 2 ports to run concurrently.
          o  Complete modem control & status.
          o  Written in hand optimized assembly language.
          o  Low overhead & very reliable !
 
          A typical application program  using  CCL  might  look  like  the
          following code outline:
 
          +-------------------------------------------------------+
          | #include "ccl.h"                                      |
          |                                                       |
          | char far buffer[1024];                                |
          | main()                                                |
          | {                                                     |
          |  SioRxBuf(Port,Buffer,Size1024);                      |
          |  SioParms(Port,NoParity,OneStopBit,SevenDataBits);    |
          |  SioReset(Port,Baud2400);                             |
          |                                                       |
          |  ...application code...                               |
          |                                                       |
          |  SioDone(Port);                                       |
          | }                                                     |
          +-------------------------------------------------------+
 
          A   simple   terminal  emulator  program CALLPGM.C is provided in
          source code form as an example  of  the  use  of  CCL  functions.
          CALLPGM  can  be  used  to  call  up  bulletin  board services or
          mainframe computers.
 
          If you find any problems with the  C  Communications  Library  or
          have  any  suggestions  for improvement, please call or write.  A
          Pascal version of CCL ( to be called PCL ) may  be  available  if
          demand warrants.
 
          Custom versions of CCL can be developed for special needs. Custom
          communication packages can also be developed. Call for prices.
 
 
 
 
 
 
 
 
                                                               Page 3
 
 
 
 
                             Registration
 
 
 
          The  shareware  version  of  CCL.LIB  is provided so that you may
          personally determine the usefulness of the product for  yourself.
          If you can use CCL.LIB, please register your use with us.
 
                MarshallSoft
                PO Box 4543
                Huntsville, AL
                35815-4543
 
          Please  pay  by  check  in  US  dollars.  Payment  must accompany
          purchase orders. Print the file CCL.INV if an invoice is  needed.
          The registered package is $35 postpaid and includes:
 
          o  CCL.LIB   C Communications Library - without shareware screen.
          o  CCL.ASM   C Communications Library source code.
          o  CCL.DOC   C Communications Library documentation file.
          o  XMODEM.C  Source for the XMODEM file transfer code.
          o  YMODEM.C  Source for the YMODEM file transfer code.
          o  LZW.C     Source for Lempel-Ziv-Welch file compression code.
          o  CRC.C     Source for cyclic redundancy check code.
          o  CALLPGM.C Source for terminal emulator. Uses XMODEM & YMODEM.
          o  Backbone bound printed users manual.
          o  Telephone support for one year.
          o  All future updates are $10
 
          CCL.ASM  is  the  source code for the library. The source code is
          copyrighted by MarshallSoft. The user is granted a license to use
          the CLL object code in his own application only. CLL.ASM  is  not
          shareware and may not be sold or given away to anyone.
 
          XMODEM.C  is  an  implementation  of the industry standard XMODEM
          protocol, including XMODEM/1K ( uses 1K blocks ) and XMODEM/CRC (
          uses CRCs instead of checksums ). Virtually every bulletin  board
          offers XMODEM file transfer.
 
          YMODEM.C  is  basically  XMODEM/CRC/1K  with the  file  name  and
          length   encoded in the first block. Thus, the receiver knows the
          file  length  and  filename.  YMODEM  is also widely available on
          bulletin board services.
 
          LZW.C   is   an   implementation  of  the  Lempel-Ziv-Welch  file
          compression algorithm.  It  is  used  in  many  file  compression
          utilities available today. LZW can compress file to as much as 40
          percent of their original size.
 
          CRC.C is an implementation of the 16 bit Cyclic Redundancy  Check
          algorithm   as   specified   by  the  Comsultative  Committee  in
          International Telegraphy and Telephoney ( CCITT ). It is used  in
          XMODEM/CRC  and  in  YMODEM. It will detect 99.99 percent of data
          errors.
 
          The  registered user will receive the  latest  version  of CCL by
          return  mail.   A  5.25"  diskette  is  provided  unless  a  3.5"
          diskette is requested when ordering.
 
 
 
                                                               Page 4
 
 
 
 
                             Serial COM Ports
 
 
 
          IBM  PC  compatible  computers can have up to four serial  ports.
          The  BIOS  table  located  at address 40:0000 has room  for  four
          communication  port  addresses: COM1 to COM4. During boot up, the
          COM1 and COM2 addresses are placed in the  BIOS  table  providing
          that  the  hardware  is present. Unfortunately, the COM3 and COM4
          addresses are not placed in the table in  many  IBM  compatibles.
          This  can  be  corrected by using DEBUG to assemble the following
          program SETCOM3 which should be added to the  AUTOEXEC.BAT  file.
          When  executed,  this  program  will place the standard COM3 port
          address 03E8 in the BIOS table. For COM4, change 03E8 to 02E8 and
          [0004] to [0006].
 
 
 
                   PUSH DS
                   MOV AX,0040
                   MOV DS,AX
                   MOV AX,03E8
                   MOV [0004],AX
                   POP DS
                   MOV AX,4C00
                   INT 21
 
 
 
          If you have never used DEBUG, refer  to  your  MSDOS  manual  for
          detailed instructions.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 5
 
 
 
 
                             RS-232C
 
 
 
          RS-232    is    the   name  of the serial data interface standard
          used  to  connect  computers  to  modems.   Most  IBM  compatible
          computers are built with at least one serial port and use  either
          DB9 ( 9 pin ) or DB25 ( 25 pin ) connectors.
 
          A summary of these pins and  their  function  follows.  For  more
          detailed information, refer to one of the many books dealing with
          RS-232 interfacing.
 
          Signal Ground         Pin 7 (DB25),  Pin 5 (DB9)
 
          The  SG line is used as the common signal ground, and must always
          be connected.
 
          Transmit Data         Pin 2 (DB25),  Pin 3 (DB9)
 
          The TX line is used to carry data from the computer to the modem.
 
          Receive Data          Pin 3 (DB25),  Pin 2 (DB9)
 
          The RX line is used to carry data from the modem to the computer.
 
          Data Terminal Ready   Pin 20 (DB25), Pin 4 (DB9)
 
          The  DTR line is used by the computer to signal the modem that it
          is ready.
 
          Data Set Ready        Pin 6 (DB25),  Pin 6 (DB9)
 
          The DSR line is used by the modem to signal the computer that  it
          is ready.
 
          Request to Send       Pin 4 (DB25),  Pin 7 (DB9)
 
          The   RTS  line  is used to "turn the line around" in half duplex
          modems, but is not necessary in full duplex modems.
 
          Clear to Send         Pin 5 (DB25),  Pin 8 (DB9)
 
          The CTS line, like the RTS line, in not necessary in full  duplex
          modems.
 
          Data Carrier Detect    Pin 8 (DB25),  Pin 1 (DB9)
 
          The DCD line is used by the modem to signal the computer  that  a
          data carrier signal is present.
 
          Ring Indicator         Pin 22 (DB25), Pin 9 (DB9)
 
          The RI line is asserted when a 'ring' occurs.
 
 
 
 
 
 
 
                                                               Page 6
 
 
 
 
                             National INS8250
 
 
 
          The   C   Communications   Library   is  based  on  the  standard
          National INS8250 UART. The 8250  consists  of  6  register  ports
          based at the following standard addresses:
 
          COM1 = 3F8H  COM2 = 2F8H  COM3 = 3E8H  COM4 = 2E8H
 
          If  you are not familiar with the INS8250, several good books are
          available.  Although  a knowledge of the 8250 is not necessary to
          use CCL, a general  knowledge  of  the  theory  of  operation  of
          Univeral  Asynchronous  Receiver  /  Transmitters  (  UARTs  ) is
          recommended.
 
          Offset R/W  Register
 
            0       R/W   Receiver ( read ) / Transmitter ( write )
            1       R/W   Interrupt Enable
            2       R     Interrupt Identification
            3       R/W   Data Format ( Line Control )
            4       R/W   RS-232 ( Modem ) Control
            5       R/W   Line Status
            6       R/W   RS-232 ( Modem ) Status
 
 
 
                             Revision History
 
 
 
          Version 1.0 -- 14 January 1991 -- original release.
 
 
 
                             Warranty
 
 
 
          The  user  of this software assumes all liability for its use. In
          no case shall MarshallSoft be liable for any  damages,  including
          any incidental or consequential damages.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 7
 
 
 
 
                             Using the Library
 
 
 
          The first thing  to  do  is  to  copy  all  the  files  from  the
          CCL distribution disk to a working disk, and put the original CCL
          distribution disk in a safe place.
 
          The  C  Communications  Library  is  provided   as   the  library
          file  CCL.LIB.   It  has  been  tested  with both Microsoft C and
          Turbo C compilers.  CCL.LIB may be used with  any  memory  model.
          However, your application must be certain to include CCL.H and to
          specifically declare the receive buffers as FAR ( see SioRxBuf ).
 
          Please examine the CCL.H file. Note that COM1 is defined as  port
          zero,  not  port  one. The user must assume the responsibilty for
          passing  the  correct  information  when  calling  CCL functions.
          Function prototypes are not provided in CCL since some earlier  C
          compilers  don't support them. However, the CCL.H file can easily
          be modified to provide them if so desired.
 
          For   an   example   of  CCL  use,  examine the terminal emulator
          program  CALLPGM.C.   It  uses  most every CCL function. The user
          should compile CALLPGM.C and link with CCL.LIB as a test  of  the
          library.
 
          If  you  have  two  computers, then you can connect them together
          with a null  modem  cable  and  run  CALLPGM  on  both  machines.
          Whatever  is typed on one machine should appear on the other, and
          vice versa. Depending on the design  of  the  null  modem  cable,
          CALLPGM.C  may  need  to be modified so that it does not wait for
          DSR & CTS. This is clearly documented in the CALLPGM.C code.
 
          If you have a modem, then use CALLPGM to  call  up  any  bulletin
          board  system  (  BBS  ).  There  are  many  free BBSs around the
          country. Look in any issue of "Computer Shopper" (  available  in
          bookstores,  computer shops, and many grocery stores ) for a list
          of current systems.
 
          CCL functions can be called from any language  supporting  the  C
          language  calling  convention  and FAR arrays and functions.  See
          your compiler manual.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 8
 
 
 
 
                             Compiling and Linking
 
 
 
          CCL  has  been  tested with both Microsoft C and Turbo C. Other C
          compilers may work as well provided that they recognize  the  FAR
          keyword.
 
          Any  memory model can be used with CCL since all functions in CCL
          are declared as  FAR.  Recall  that  the  receive  buffer  (  see
          function SioRxBuf ) must also be declared as FAR.  If  two  ports
          are  to  be  run  simultaneously, be sure to use seperate receive
          buffers.
 
          Registered users may  wish  to  assemble  CLL.ASM.  Use  the  /MX
          switch  in  order to disable automatic conversion from lower case
          to upper case.  If the /MX switch  is  not  used,  then  all  CLL
          function  references in C code must be in upper case. To assemble
          using the Microsoft assembler:
 
          MASM CCL /MX;
 
          Then make CCL.OBJ into a library file:
 
          LIB CCL +CCL,CCL.LST,CCL.LIB;
 
          When compiling with the Microsoft compiler, use the /Ze switch to
          enable  recognition of the FAR keyword. To compile and link using
          Microsoft C:
 
          MSC -Ze TE;
          LINK CALLPGM,CALLPGM,CALLPGM,CCL.LIB
 
          To compile and link using Turbo C:
 
          TCC CALLPGM CCL.LIB
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 9
 
 
 
 
                             Problems
 
 
          If you cannot get your application to run properly, first compile
          and run  the  terminal  emulator  program   CALLPGM  provided  on
          your distribution disk.
 
          If  CALLPGM  runs  correctly,  then  you  have made a programming
          mistake in your  application.   MarshallSoft  cannot  debug  your
          application,  especially  over  the telephone!  However, consider
          each of the  following  when  searching  for  an  error  in  your
          application.
 
          1.  Have you included the file CCL.H in your application ?
 
          2.  Have  you declared your receive buffer to be FAR ? Your code
              should include something like:
 
                        char far Buffer[1024];
 
                        SioRxBuf(Port,Buffer,Size1024);
 
          3.  Is your receive buffer large enough ? If  you  are  using  1K
              data  blocks in YMODEM, then your receive buffer should be 1K
              or more.
 
          4.  Have you selected too high a baud rate ?  Always  start  with
              the   slowest   baud   rate.   If  only one COM port is being
              run, you should be able to run at 38400 baud.
 
          5.  Are  you  attempting  to  run  another  application  in  the
              background  ?  Try running without any other programs running
              in the background.
 
          6.  If  you  are  running  two COM ports simultaneously, are you
              using seperate receive buffers ? ( you should )
 
          7.  Did SioReset return a zero value ? If not, then you must call
              SioReset again. See CALLPGM.C for an example.
 
          If   CALLPGM  does  not  run,  then  either  there  is a physical
          connection problem or your computer isn't as  compatible  as  you
          thought!  Registered users can always call (205) 881 - 4630 after
          5 PM CST Monday through Friday for help.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 10
 
 
 
 
                             Library Reference
 
 
 
          The remainder of this manual list all the  CCL  functions.  Every
          library function will return a value as follows:
 
          1.  Negative  values  for error conditions. See last page of this
              manual for a list of error values and their meanings.
 
          2.  Non-negative values when returning data ( eg: SioLine ).
 
          3.  Zero otherwise.
 
          When  debugging  an   application,   be  sure  to test all return
          values. Use SioError to print the associated text for errors.
 
          /*** example code segment ***/
 
          int code;     /* MUST be 'int', not 'char' */
 
          code = SioFunction(); /* any CCL function */
          if(code<0)
                {SioError(code);
 
                }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 11
 
 
 
 
                             SioBaud
 
 
          Function
 
          Sets the baud rate of the selected port.
 
          Syntax
 
          int SioBaud(Port,BaudCode)
          int Port;             /* Port selected (COM1,COM2,COM3,or COM4) */
          int BaudCode;         /* Baud code */
 
          Remarks
 
          The  SioBaud  function  sets  the baud rate without resetting the
          port. It is used to change the baud rate after calling SioReset.
 
          Baud Code        Baud Rate        CLL.H Name
             0                 300            Baud300
             1                 600            Baud600
             2                1200            Baud1200
             3                2400            Baud2400
             4                4800            Baud4800
             5                9600            Baud9600
             6               19200            Baud19200
             7               38400            Baud38400
             8               57600            Baud57600
             9              115200            Baud115200
 
          Returns
 
           -2 : Port not enabled. Must call SioReset first.
           -4 : Bad port selected. Value must be 0 to 3.
          -11 : Bad baud rate code. See above code values.
 
          Example
 
          #include "ccl.h"
 
          /* do auto baud detect */
          for(Code=0;Code<10;Code++)
                {SioBaud(Port,Code);
                 SioPutc(Port,'A');
                 SioPutc(Port,'A');
                 if(SioGetc(Port,18)=='A'))
                        {puts("Baud rate detected");
                         ...do something here...
                        }
                }
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 12
 
 
 
 
                             SioBrkKey
 
 
          Function
 
          Return non-zero if the Control-BREAK key was pressed.
 
          Syntax
 
          int SioBrkKey()
 
          Remarks
 
          The  SioBrkKey  function returns a TRUE value ( non-zero ) if the
          Control-BREAK key was pressed,  else  it  returns  a  zero.   Use
          SioBrkKey  as  a safety exit form a polling loop.  Don't mix this
          function up with SioBrkSig.
 
          Returns
 
           0 : Control-BREAK was pressed.
          !0 : Control-BREAK was not pressed.
 
          Example
 
          #include "ccl.h"
          int c;
 
          while(1)
                {if(SioBrkKey())
                        {puts("User typed Contrl-BREAK");
                         SioDone(Port);
                         exit(1);
                        }
                 if(SioKeyPress())
                        {c = SioKeyRead();
                         SioPutc(Port,c);
                        }
                 c = SioGetc(Port,0);
                 if(c!=-1)  SioCrtWrite(c);
                }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 13
 
 
 
 
                             SioBrkSig
 
 
 
          Function
 
          Asserts, cancels, or detects  BREAK signal.
 
          Syntax
 
          int SioBrkSig(Port,Cmd)
          int Port;             /* Port selected (COM1,COM2,COM3,or COM4) */
          char Cmd;             /* 'A','C', or 'D' */
 
          Remarks
 
          The  SioBrkSig  function controls the BREAK bit in the line status
          register. The legal commands are:
 
              'A' to assert BREAK
              'C' to cancel BREAK
              'D' to detect BREAK
 
          See CALLPGM.C for an example of the use of SioBrkSig.
 
          Returns
 
           -2 : Port not enabled. Must call SioReset first.
           -4 : Bad port selected. Value must be 0 to 3.
           -6 : Illegal command. Expected 'A', 'C', or 'D'.
           >0 : BREAK signal detected ( READ only )
 
          Example
 
          /* Assert BREAK for 1 second */
          SioBrkSig(Port,'A');
          SioDelay(18);
          SioBrkSig(Port,'C');
 
          /* Detect BREAK */
          if(SioBrkSig(Port,'D'))
                {puts("BREAK signal detected");
                 /* do some more stuff */
                }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 14
 
 
 
 
                             SioCrtWrite
 
 
 
          Function
 
          Write character to the screen.
 
          Syntax
 
          int SioCrtWrite(ch)
          char ch;              /* character to write */
 
          Remarks
 
          The  SioCrtWrite  function  uses  the  BIOS  to  write  a  single
          character to the screen at the current cursor location.
 
          SioCrtWrite is faster than a call to the C library and  for  this
          reason is included in CCL.
 
          Returns
 
          zero
 
          Example
 
          #include "ccl.h"
 
          if( (c = SioGetc(COM1,18)) != -1)
                {/* echo to screen */
                 SioCrtWrite(c);
                }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 15
 
 
 
 
                             SioDTR
 
 
 
          Function
 
          Set, clear, or read the Data Terminal Ready ( DTR ) bit.
 
          Syntax
 
          int SioDTR(Port,Cmd)
          int Port;             /* Port selected (COM1,COM2,COM3,or COM4) */
          char Cmd;             /* command */
 
          Remarks
 
          The  SioDTR function controls the Data Terminal Ready ( DTR ) bit
          in the modem control register. Commands used are:
 
                'S'  to set DTR ( ON )
                'C'  to clear DTR ( OFF )
                'R'  to read DTR
 
          Returns
 
           -2 : Port not enabled. Must call SioReset first.
           -4 : Bad port selected. Value must be 0 to 3.
           -5 : Not one of 'S', 'C', or 'R'.
            0 : DTR is OFF (READ Command).
           >0 : DTR is ON (READ Command).
 
          Example
 
          #include "ccl.h"
 
          /* turn DTR on for modem */
          SioDTR(COM4,'S');
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 16
 
 
 
 
                             SioDelay
 
 
 
          Function
 
          Delays one or more tics.
 
          Syntax
 
          int SioDelay(tics)
          int tics;                     /* # tics */
 
          Remarks
 
          The  SioDelay  function  is used to delay one or more timer tics,
          where each timer tic is approximately 55 milliseconds ( 18 to the
          second ). See SioTimer also.
 
          Returns
 
          zero
 
          Example
 
          #include "ccl.h"
 
          SioDelay(5*18);               /* delay 5 seconds */
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 17
 
 
 
 
                             SioDone
 
 
 
          Function
 
          Terminates further serial processing.
 
          Syntax
 
          int SioDone(Port)
          int Port;             /* Port selected (COM1,COM2,COM3,or COM4) */
 
          Remarks
 
          The  SioDone  function  terminates  further  serial   processing.
          SioDone  MUST  be  called before exiting your application so that
          interrupts can be restored to their original state. Failure to do
          this can crash the  operating  system.  If  you  forget  to  call
          SioDone before exiting, be sure to re-boot your computer.
 
          Returns
 
           -2 : Port not enabled. Must call SioReset first.
           -4 : Bad port selected. Value must be 0 to 3.
 
          Example
 
          #include "ccl.h"
 
          /* terminate processing for COM3 */
          SioDone(COM3);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 18
 
 
 
 
                             SioError
 
 
          Function
 
          Displays error in text.
 
          Syntax
 
          int SioError(Code)
          int Code;          /* Error code returned from a CCL function */
 
          Remarks
 
          The   SioError  function displays the error in text corresponding
          to   the  error  code.  During  development  of  a communications
          application, it is a good idea to always test return  codes,  and
          print out their descriptions with SioError.
 
          Returns
 
          none
 
          Example
 
          #include "ccl.h"
 
          code = SioReset(Port,Baud4800);
          if(code<0) SioError(code);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 19
 
 
 
 
                             SioGetc
 
 
 
          Function
 
          Reads the next character from the serial line.
 
          Syntax
 
          int SioGetc(Port,Tics)
          int Port;             /* COM1 to COM4 */
          int Tics;             /* # timer tics */
 
          Remarks
 
          The SioGetc function reads the selected serial port. The function
          will  wait  for  the  number  of  system tics given by the 'Tics'
          argument before returning 'timed out'. There are 18 tics  to  the
          second.
 
          To specify no waiting, call SioGetc with Tics = 0.
 
          Returns
 
           -2 : Port not enabled. Must call SioReset first.
           -4 : Bad port selected. Value must be 0 to 3.
           -1 : If timed out.
           >0 : Character read.
 
          Example
 
          #include "ccl.h"
 
          int c;   /* MUST be 'int', not 'char' !!! */
 
          if( (c=SioGetc(COM1,1)) != -1) printf("Character is '%c'\n", c);
          else puts("Timed out");
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 20
 
 
 
 
                             SioKeyPress
 
 
 
          Function
 
          Detects if keyboard has been pressed.
 
          Syntax
 
          int SioKeyPress()
 
          Remarks
 
          The   SioKeyPress function uses the BIOS to test the keyboard for
          a key press.
 
          Returns
 
          zero
 
          Example
 
          if( SioKeyPress())
                {
                 /* do something */
                }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 21
 
 
 
 
                             SioKeyRead
 
 
 
          Function
 
          Reads the keyboard.
 
          Syntax
 
          int SioKeyRead()
 
          Remarks
 
          The SioKeyRead function uses the BIOS to read the keyboard.  Will
          wait until a character is typed.
 
          SioKeyRead is faster than using the C library.
 
          Returns
 
          character typed.
 
          Example
 
          if(SioKeyPress())
                {
                 c = SioKeyRead();
                }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 22
 
 
 
 
                             SioLine
 
 
 
          Function
 
          Reads the line status register.
 
          Syntax
 
          int SioLine(Port)
          int Port;             /* Port selected (COM1,COM2,COM3,or COM4) */
 
          Remarks
 
          The   SioLine  function  reads  the  line  status  register.  The
          individual bit masks are as follows:
 
          0x20  = Transmitter Buffer Empty.
          0x10  = Break detected.
          0x08  = Framming error.
          0x04  = Parity error.
          0x02  = Overrun error.
          0x01  = Data ready.
 
          The above are documented in the file CCL.H.
 
          Returns
 
          -2 : Port not enabled. Must call SioReset first.
          -4 : Bad port selected. Value must be 0 to 3.
          >0 : Line status ( rightmost byte of word ).
 
          Example
 
          #include "ccl.h"
          int rc;
 
          rc = LineStatus(Port);
          if(rc & (FramingError|ParityError|OverrunError))
                {if(rc & FramingError) puts("Framing Error");
                 if(rc & ParityError)  puts("Parity Error");
                 if(rc & OverrunError) puts("Overrun Error");
                }
          else puts("No error");
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 23
 
 
 
 
                             SioModem
 
 
 
          Function
 
          Reads the modem status register.
 
          Syntax
 
          int SioModem(Port)
 
          Remarks
 
          The SioModem function   reads   the   modem   register.  The  bit
          definitions are as follows:
 
                Bit    CCL.H Name   Function
                 7      DCD         Data Carrier Detect
                 6      RI          Ring Indicator
                 5      DSR         Data Set Ready
                 4      CTS         Clear To Send
                 3      DeltaDCD    Delta DCD   ( DCD has changed )
                 2      DeltaRI     Delta RI    ( RI has changed )
                 1      DeltaDSR    Delta DSR   ( DSR has changed )
                 0      DeltaCTS    Delta CTS   ( CTS has changed )
 
          Bits 4 through 7 represent the absolute state of their respective
          RS-232 inputs. Bits 0 through 3 repesent a change in the state of
          their respective RS-232 inputs since last read.
 
          The  above definitions are also in the CCL.H file for use by your
          application program.
 
          Returns
 
          -2 : Port not enabled. Must call SioReset first.
          -4 : Bad port selected. Value must be 0 to 3.
          >0 : Modem status ( rightmost byte of word ).
 
          Example
 
          /* any change in DCD or CTS ? */
          if(delta=SioModem(Port,DeltaDCD|DeltaCTS))
              {status = SioModem(Port,DCD|CTS);
               if(delta&DeltaDCD) {if(status&DCD) c='T'; else c='F';
                                   printf("DCD=%c\n",c);
                                  }
               if(delta&DeltaCTS) {if(status&CTS) c='T'; else c='F';
                                   printf("CTS=%c\n",c);
                                  }
              }
 
 
 
 
 
 
 
 
 
                                                               Page 24
 
 
 
 
                             SioParms
 
 
 
          Function
 
          Sets parity, stop bits, and word length.
 
          Syntax
 
          int SioParms(Port,ParityCode,StopBitsCode,WordLengthCode)
          int Port;             /* Port selected (COM1,COM2,COM3,or COM4) */
          int ParityCode;       /* parity code [0,1,2] */
          int StopBitsCode;     /* stop bits code  [0,1] */
          int WordLengthCode;   /* word length code [0,1,2,3] */
 
          Remarks
 
          The   SioParms  function  sets  the  parity,  stop bits, and word
          length.  If the default parity ( none ), stop bits ( 1 ), or word
          length ( 8 ) is not acceptable,  then  they  can  be  changed  by
          calling  SioParms.  SioParms can be called either before or after
          calling SioReset. See file CCL.H.
 
                           Value      Description    CLL.H Name
              ParityCode:   *0        no parity      NoParity
                             1        odd parity     OddParity
                             2        even parity    EvenParity
 
              StopBitsCode:  *0       1 stop bit     OneStopBit
                              1       2 stop bits    TwoStopBits
 
              WordLengthCode: 0       5 data bits    FiveDataBits
                              1       6 data bits    SixDataBits
                              2       7 data bits    SevenDataBits
                             *3       8 data bits    EightDataBits
 
          * = Default
 
          Returns
 
           -2 : Port not enabled. Must call SioReset first.
           -4 : Bad port selected. Value must be 0 to 3.
           -7 : Bad parity code selected. Value must be 0 to 2.
           -8 : Bad stop bits code. Value must be 0 or 1.
           -9 : Bad word length code. Value must be 0 to 3.
 
          Example
 
          #include "ccl.h"
 
          SioParms(COM1,NoParity,OneStopBit,SevenDataBits);
 
 
 
 
 
 
 
 
 
                                                               Page 25
 
 
 
 
                             SioPutc
 
 
 
          Function
 
          Transmit a character over a serial line.
 
          Syntax
 
          int SioPutc(Port,c)
          int Port;             /* Port selected (COM1,COM2,COM3,or COM4) */
          char c;               /* character to send */
 
          Remarks
 
          The SioPutc function transmits one character  over  the  selected
          serial line.
 
          Returns
 
          -2 : Port not enabled. Must call SioReset first.
          -4 : Bad port selected. Value must be 0 to 3.
 
          Example
 
          #include "ccl.h"
 
          char crc;
          char buffer[128];
 
          crc = 0;
          for(i=0;i<128;i++)
                {crc = crcupdate( buffer[i], crc);
                 SioPutc(Port, buffer[i]);
                }
          SioPutc(crc);
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 26
 
 
 
 
                             SioRTS
 
 
 
          Function
 
          Sets, clears, or reads the Request  to  Send ( RTS ) bit.
 
          Syntax
 
          int SioRTS(Port,Cmd)
          int Port;             /* COM1 to COM4 */
          char Cmd;             /* command */
 
          Remarks
 
          The  SioRTS  function controls the Request to Send ( RTS ) bit in
          the modem control register. Commands are as follows:
 
                     'S'  set RTS ( ON )
                     'C'  clear RTS ( OFF )
                     'R'  read RTS
 
          Returns
 
          -2 : Port not enabled. Must call SioReset first.
          -4 : Bad port selected. Value must be 0 to 3.
          -5 : Command is not one of 'S', 'C', or 'R'.
           0 : RTS is OFF (READ Command).
          >0 : RTS is ON  (READ Command).
 
          Example
 
          #include "ccl.h"
 
          /* turn on RTS for modem */
          SioRTS(Port,'S');
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 27
 
 
 
 
                             SioReset
 
 
 
          Function
 
          Initialize a serial port for processing.
 
          Syntax
 
          int SioReset(Port,BaudCode)
          int Port;             /* Port selected (COM1,COM2,COM3,or COM4) */
          int BaudCode;         /* baud code */
 
          Remarks
 
          The  SioReset  function  initializes  the  selected  serial port.
          SioReset should be called after calling SioParm and SioRxBuf  but
          before  making  any other calls to CCL. SioReset uses the parity,
          stop bits, and word length value previously set  if  SioParm  was
          called, otherwise the default values ( see SioParm ) are used.
 
          Recall that COM1 and COM3 share the  same  interrupt  vector  and
          therefore  cannot  operate  simultaneously.  Similiarly, COM2 and
          COM4 cannot operate simultaneously. Any other combination of  two
          ports can be used.
 
          See SioBaud for a list of the baud rate codes, or see "CCL.H".
 
          Returns
 
           -4 : Bad port selected. Value must be 0 to 3.
          -11 : Bad baud rate code selected. Value must be 0 to 9.
 
          Example
 
          #include "ccl.h"
          char far Buffer[128];
          int rc;
 
          SioRxBuf(COM1,Buffer,Size128);
          rc = SioReset(Com1,Baud38400);
          if(rc==0) puts("RESET ok");
          else if(rc<0) SioError(rc);
          else
                {if(rc&OverrunError) puts("Overrun Error");
                 if(rc&ParityError) puts("Parity Error");
                 if(rc&FramingError) puts("Framing Error");
                 if(rc&BreakDetected) puts("Break Detected");
                }
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 28
 
 
 
 
                             SioRxBuf
 
 
 
          Function
 
          Sets up receive buffers.
 
          Syntax
 
          int  SioRxBuf(Port,Buffer,SizeCode)
          int Port;             /* Port selected (COM1,COM2,COM3,or COM4) */
          char far *Buffer;     /* Receive buffer */
          int  SizeCode;        /* Buffer size code */
 
          Remarks
 
          The  SioRxBuf function passes the address and size of the receive
          buffer to CCL. Recall that CCL requires a receive buffer for each
          port in simultaneous operation  since  the  receive  function  is
          interrupt  driven.  SioRxBuf passes the receive buffer to CCL for
          both the primary ( COM1/COM3 ) and secondary ( COM2/COM4 ) ports.
          It must be called before any incoming characters can be received.
          SioRxBuf should be called before SioReset. Buffer size codes  are
          listed in "CCL.H".
 
          Size Code       Buffer Size    CLL.H Name
              0              8 bytes        Size8
              1             16 bytes        Size16
              2             32 bytes        Size32
              3             64 bytes        Size64
              4            128 bytes        Size128
              5            256 bytes        Size256
              6            512 bytes        Size512
              7           1024 bytes        Size1024
              8           2048 bytes        Size2048
              9           4096 bytes        Size4096
             10           8192 bytes        Size8192
             11          16384 bytes        Size16384
 
          Returns
 
           -2 : Port not enabled. Must call SioReset first.
           -4 : Bad port selected. Value must be 0 to 3.
          -10 : Bad buffer size code. Value must be between 0 and 11.
 
          Example
 
          #include "ccl.h"
 
          char far RxBuf[128];
          SioRxBuf( COM1, RxBuf, 128);
 
 
 
 
 
 
 
 
 
                                                               Page 29
 
 
 
 
                             SioRxFlush
 
 
 
          Function
 
          To flush the receive buffer associated with the specified port.
 
          Syntax
 
          int SioRxFlush(Port)
          int Port;             /* Port selected (COM1,COM2,COM3,or COM4) */
 
          Remarks
 
          The  SioRxFlush  function  will  delete  any  characters  in  the
          receive  buffer  for  the  specified  port.  After execution, the
          receive  buffer  will  be empty. Call SioRxBuf after resetting  a
          port in order to delete any spurious characters.
 
          Returns
 
           -2 : Port not enabled. Must call SioReset first.
           -4 : Bad port selected. Value must be 0 to 3.
 
          Example
 
          #include "ccl.h"
 
          char far buffer[1024];
 
          /* setup receive buffer & reset port */
          SioRxBuf(COM1,buffer,Size1024);
          SioReset(COM1,Baud115200);
          /* flush any spurious character */
          SioRxFlush(COM4);
          /* ready for serial processing ! */
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 30
 
 
 
 
                             SioRxQue
 
 
 
          Function
 
          Returns the number of characters in the receive queue.
 
          Syntax
 
          int SioRxQue(Port)
          int Port;             /* Port selected (COM1,COM2,COM3,or COM4) */
 
          Remarks
 
          The SioRxQue function will return the  number  of  characters  in
          receive queue. It can be used to implement XON/XOFF flow control.
 
          Returns
 
           -2 : Port not enabled. Must call SioReset first.
           -4 : Bad port selected. Value must be 0 to 3.
 
          Example
 
          #include "ccl.h"
          #define XON 0x11
          #define XOFF 0x13
 
          int count;
          char last = XON;
          char far Buffer[128];
 
          SioRxBuf(COM1,Buffer,Size128);
 
          /* implement XON / XOFF */
          count = SioRxQue(COM1);
          if((last==XON)&&(count>120))
                {SioPutc(COM1,XOFF);
                 last = XOFF;
                }
          if((last==XOFF)&&(count<8))
                {SioPutc(COM1,XON);
                 last = XON;
                }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 31
 
 
 
 
                             SioTimer
 
 
          Function
 
          Returns    the    number   of   system clock tics since midnight.
 
          Syntax
 
          long SioTimer()
 
          Remarks
 
          The SioTimer function will return the number of system clock tics
          since midnight, at 18.2065 tics  per  second.  This  function  is
          usefull for timeing various functions. Also see SioDelay.
 
          Returns
 
          timer tics
 
          Example
 
          #include "ccl.h"
 
          long time;
          time = SioTimer();
 
          /* do some stuff */
 
          printf("Elasped time = %ld tics\n", SioTimer() - time );
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 32
 
 
 
 
                             Error Code Summary
 
 
 
          Code        Description
 
            0          No error.
 
           -1          Timeout waiting for input. Only returned by SioGetc.
 
           -2          Port not enabled. Must call SioReset first.
 
           -3          No buffer available. Must call SioRxBuf before
                       calling SioReset.
 
           -4          Bad port specified. Must be 0 to 3. Recall that COM1
                       is port 0, COM2 is port 1, etc.
 
           -5          Expected 'S', 'C', or 'R' as second argument.
 
           -6          Expected 'A', 'C', or 'D' as second argument.
 
           -7          Bad parity code specified. Must be 0 to 7.
 
           -8          Bad stop bits code specified. Must be 0 or 1.
 
           -9          Bad wordlength code specified. Must be 0 to 3.
 
          -10          Bad buffer size code specified. Must be 0 to 11.
 
          -11          Bad baud rate code. Must be 0 to 9.
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
                                                               Page 33
 
 
 
 
 
 
 
```
{% endraw %}

## FILE2695.TXT

{% raw %}
```
Disk No: 2695
Disk Title: C Communications Library
PC-SIG Version:    S1

Program Title: C Communications Library
Author Version: 1.0
Author Registration: $35.00
Special Requirements: C compiler and modem.

The C COMMUNICATIONS LIBRARY is an asynchronous communications library
designed for experienced software developers programming in Microsoft C
or Turbo C.

Sixteen communications functions as well as six support functions are
provided.

Included are:

~ Set Baud Rate for a selected port

~ Monitor CTRL-BREAK key

~ Write Char to screen,

~ Set/Clear/Read the data terminal ready bit

~ Delay

~ Terminate selected port

~ ...and many more

Communications rates from 300 to 115,200 baud are supported.  The
Receive queues are adjustable from 8 bytes to 16KB.  All four ports,
COM1 through COM4, are supported.  (Most libraries only provide support
for COM1 and COM2.)  Additionally, two ports can be run concurrently.

The C COMMUNICATIONS LIBRARY provides complete modem control and status.

Eleven different communications errors can be trapped and reported.
There is even support for the CTRL-BREAK error exit.  The library
supports all memory models and was written in optimized assembly
language for small size and fast speed.

The source code for a simple terminal emulator program is provided as an
example of the use of the library functions.  This sample program can be
used to call up bulletin board services and mainframe computers, or even
to build a specialized communications interface for your application.

The C COMMUNICATIONS LIBRARY can be called from any language that
supports the C-language calling convention and FAR arrays and functions.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1991 PC-SIG, Inc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2695

     Volume in drive A has no label
     Directory of A:\

    CCL      LIB      6144   1-12-91   7:53p
    CCL      DOC     49449   1-12-91   8:09p
    CCL      H        1856   1-10-91   9:18p
    CCL      INV      1072   1-11-91   7:48p
    CALLPGM  C        5052   1-13-91   9:07a
    PREVIEW  EXE      7347   4-18-91   1:15p
    GO       BAT       105   7-26-91   1:17a
    FILE2695 TXT      1828   7-25-91  12:22a
            8 file(s)      72853 bytes
                           85504 bytes free
