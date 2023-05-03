---
layout: page
title: "PC-SIG Diskette Library (Disk #1987)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1987/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1987"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "BSR"

    Transfer files back and forth between computers using different sizes
    of disk drives; e.g., between laptop 3.5" disk drives and desktop 5.25"
    drives.  BSR is particularly handy in situations where you don't have
    copies of the .EXE program on both 3.5" and 5.25" media.  BASIC versions
    of the Send and Receive programs are included and can be typed into both
    computers relatively quickly.  Then all that's needed is a version of
    BASIC to run the Send and Receive programs.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BR.BAS

{% raw %}
```bas
10 ' Read file from laptop (com1)
20 ' reads 130 byte 'records' from com port with header,data,checksum
30 ' if header = 255 then new file name else header=bytes to write
40 ' checksum = sum of data bytes + header
50 ' returns nak on bad transmission else ack
60 ' ends when Esc pressed or timeout or new file name is $
70 ' Brad Jensen Datamate Company PO Box 471404 Tulsa Ok 74147
80  CML = 1 ' change this line to "CML = 2" for COM2: port
90 IF CML = 1 THEN PORT=&H3F8:CM$="COM1":ELSE PORT=&H2F8:CM$="COM2"
100 TIMEOUT=120 ' seconds to timeout
110 OPEN CM$+":9600,N,8,1,cs,ds,cd" AS #1 'open COM1: or COM2:
120 HOLD=INP(PORT+3):OUT PORT+3,HOLD OR &H80 'chang ebaud from 9600 to 38400
130 OUT PORT,3:OUT PORT+1,0:OUT PORT+3,HOLD ' set baud to 38400
140 CLS:PRINT "Waiting for start of file transmission"
150 WHILE LOC(1)=0 AND INKEY$ <> CHR$(27):WEND  ' wait for transmit to start
160 CLS:PRINT "Receiving file"
170 A$="":ACK$=CHR$(1):NAK$=CHR$(2) ' used to signal good/bad checksum
180 FL$="NUL":GOTO 230 ' open the NUL device as the general case
190 LOCATE 2,1:CLOSE #2 ' close old file
200 FL$=LEFT$(FL$,INSTR(FL$,"@")-1) ' get file name in first block
210 IF FL$="$" THEN LOCATE 12,1:PRINT "All Done ":END ' signals end of transmit
220 PRINT "Writing to "FL$"                              "
230 OPEN FL$ FOR OUTPUT AS #2 ' file is always in current directory on this end
240 BLOCKS=0:A$="":B=TIMER:NEWFILE=0:BAD=0  ' initialize for this file
250 LOCATE 4,1:PRINT "Receiving Block ";
260 IF LEN(A$) < 130 THEN GOSUB 300:ELSE GOSUB 320:IF NEWFILE THEN 190 'get data
270 IF INKEY$=CHR$(27) THEN LOCATE 12,1:PRINT "ESCaped":END ' Esc cancels
280 IF TIMER-B < TIMEOUT THEN GOTO 260 ' no characters in n seconds , quit
290 LOCATE 12,1:PRINT "Timed out...":END
300 IF LOC(1) <> 0 THEN A$=A$+INPUT$(LOC(1),1):B=TIMER ' get from com
310 RETURN
320 ALEN=LEN(A$):CK=0:BAD=-1  ' checksum calculation
330 FOR I = 1 TO ALEN-1:CK=CK+ASC(MID$(A$,I,1)):NEXT I:CK=CK AND 255
340 IF CHR$(CK) <> MID$(A$,ALEN,1) THEN A$="":PRINT #1,NAK$;:RETURN ' bad !
350 IF MID$(A$,1,1)=CHR$(255) THEN NEWFILE=-1:FL$=MID$(A$,2,ALEN-2):GOTO 390
360 BLEN=ASC(MID$(A$,1,1)) ' normally 128 bytes except last file block
370 PRINT #2,MID$(A$,2,BLEN);  ' print except for header & checksum byte
380 LOCATE 4,20:BLOCKS=BLOCKS+1:PRINT BLOCKS;
390 PRINT #1,ACK$;:BAD=0:A$="" ' not bad, good
400 RETURN      ' done receiving this block
410 REM BR.BAS
```
{% endraw %}

## BS.BAS

{% raw %}
```bas
10 ' BS.BAS   by Brad Jensen Datamate Company PO Box 471404 Tulsa Ok 74147
20 ' sends files with checksum to PC running BR.BAS
30 ' use with BASICA or GWBASIC and COM1: or COM2:
40 CML = 1 ' change this to "CML = 2" for COM2:
50 IF CML = 1 THEN PORT=&H3F8:CM$="COM1":ELSE PORT = &H2F8:CM$="COM2"
60 CLOSE   'this cleans up if you Ctrl-Break'ed out of last transmit
70 ACK$=CHR$(1):NAK$=CHR$(2) ' reply characters from other PC
80 OPEN CM$+":9600,N,8,1,Cs,ds,cd" AS #1 ' open COM1: or COM2:
90 HOLD=INP(PORT+3):OUT PORT+3,HOLD OR &H80 ' chang ebaud rate to 38400
100 OUT PORT,3:OUT PORT+1,0:OUT PORT+3,HOLD ' set baud to 38400
110 S$=SPACE$(130)
120 CLS:PRINT "Send file to PC " LS$
130 INPUT "File name (= for file list) ";FL$       ' no file name ends programs
140 IF FL$="" THEN LSET S$=CHR$(255)+"$@":GOSUB 390:LOCATE 12,1:END
150 IF FL$="=" THEN FILES:PRINT "Press Any Key":WHILE INKEY$="":WEND:GOTO 120
160 OPEN FL$ AS #2 LEN=128 ' the file may have any path name
170 ST=1 ' strip off path or disk name for transmit to host
180 FOR I=1 TO LEN(FL$):IF MID$(FL$,I,1) = ":" OR MID$(FL$,I,1)="\" THEN ST=I+1
190 NEXT I ' all files will be received to the current directory on the host
200 LSET S$=CHR$(255)+MID$(FL$,ST)+"@":GOSUB 390 ' send file name
210 FIELD #2,128 AS A$:FLEN=LOF(2)
220 PRINT FLEN "Bytes" ' number of bytes in file
230 GR=INT(FLEN/128):GR2=GR*128
240 LOCATE 4,1:PRINT "Blocks to send";GR
250 LOCATE 6,1:PRINT "Sending block";
260 START=TIMER
270 FOR I = 1 TO GR
280 GET #2,I
290  LOCATE 6,15:PRINT I;
300 LSET S$=CHR$(128)+A$:GOSUB 390   ' send full data block
310 NEXT I
320 IF GR2=FLEN THEN 380      ' file is exactly / 128
330 GET #2,INT(GR)+1
340 LSET S$=CHR$(FLEN-GR2)+A$:GOSUB 390 ' send last short block
350 LAST=TIMER:LS$=" Last file sent : "+FL$+STR$(FLEN)
360 LS$=LS$+" bytes at "+STR$(INT(FLEN/(LAST-START)))+" per second"
370 CLOSE #2    '  end of this file, go do another
380 LOCATE 2,1:PRINT SPACE$(80);:LOCATE 2,1:GOTO 120 ' next file
390 CK=0:FOR J = 1 TO 129:CK=CK+ASC(MID$(S$,J,1)):NEXT J ' checksum
400 CK=CK AND 255:MID$(S$,130,1)=CHR$(CK) ' add checksum to end
410 RETRY=0 ' allowable retries for possible error transmission
420 PRINT #1,S$; ' send block of data + checksum to host
430 WHILE LOC(1)=0:WEND:REPLY$=INPUT$(1,1) ' get ack (good) or nak (bad)
440 IF REPLY$<>ACK$ THEN RETRY=RETRY+1:IF RETRY < 10 THEN 420:ELSE 460
450 RETURN              ' transmission was good, ack was received
460 PRINT :PRINT "***Too many retries***":END ' errors in transmit
470 REM BS.bas
```
{% endraw %}

## BSBR.DOC

{% raw %}
```
After purchasing a laptop computer (NEC Multispeed EL - I love it), I
wanted a quick and easy way to send files from the laptop to another
PC using the null-modem cable included with the laptop. I happen to have
a 3 1/2 inch drive on my 'main' PC, but I wanted to be prepared for those
times when I am visiting a client or friend, and he doesn't.

There are a number of 'bridge' products out there, but they all assume
that you carry a 5 1/4" disk as well as a 3 1/2" everywhere you go. What
I wanted was a simple BASIC program that could be typed in to the 'host'
computer in five minutes or less, that would allow multiple file transfer
with error correction.

It must be easy to run, and designed for direct connection between the PC
and the laptop (no modems). The programs must also be short, so they don't
take up too much room on the laptop's system disk.

The following two programs are the result of these design criteria. They
work together to send data from the laptop to the host PC. (To send data
back the other way, send the 'BS.BAS' program to the host and run it there.)

If you don't have a way to copy media from 5 1/4" to 3 1/2" floppies,
these programs may do the trick for you. They can be a lifesaver in those
special situations where you need file transfer fast. They are extremely
simple to set up and run. They don't cost a dime, as long as you have
BASICA or GWBASIC on each PC.

You can transfer any file or program with this utility, including COM,
EXE, and DBF files, as well as word processing files.

If you need to do daily file transfer of large files, or you need to
call in over a modem, get yourself a professional 'bridging' product.
But for occasional or short file transfers, these programs should do
the trick.

The limitations of these programs are obvious and straightforward. You
can't do MS-DOS commands from one PC to the other, like some software
does. Transferred files do not retain the original file date and time.
All control is from the sending PC side. The software runs at 38400
baud, but since BASIC only uses strings up to 255 characters, it isn't
real fast.

Since you will probably be running this software with the PCs side
by side, these limitations should not be irksome.

These programs may also be a helpful 'first step' in connecting your
laptop to a host PC, so you can see how feasible the process itself is.
Once you have decided whether to use a 'bridging' product or add a
3 1/2" disk drive to your host, you can forget these programs (until
you are out on the road somewhere and need them at a client's office).

Keep in mid also that professional 'bridging' programs run at up to
38,400 baud (some even faster). This is four times as fast as the effective
throughput of these programs.

At the current speed, direct connect, you will probably never see a trans-
mission error. If you do, you may need to slow down your turbo processor,
or even check out your COM port.  The software will retry error transmiss-
ions up to 10 times (change the IF statement in the sending program if you
want to alter this number).

These programs are set up for COM port 1. If one or the other PC needs to
be COM2, change just that program. Change the line near the beginning of
the program that says CML=1 to CML=2.

If you like the idea of these programs but hate to type, send me $20
(cash or check) and I will send you both programs on BOTH a 3 1/2" and
a 5 1/4" disk. I will also include printed documentation and a layout
for the null-modem cable (both 9 pin and 25-pin versions). I'll also
include our shareware BSR.EXE that transfers files at 115,200 baud.

If you haven't bought a laptop yet, you should strongly consider it.
Even if you only work at home 3 hours a week, the availability of the
laptop will pay for itself in less than a year. I would strongly urge
you to find a laptop with at least 2 720k disks (or one and a hard
drive), plus a parallel and serial port (even if it has an internal
modem). It also helps to have a video output port. If you have to pay
extra for these items, it can drive the cost way up.

To use these programs, type GWBASIC or BASICA at the MS-DOS prompt.
Type the BS.BAS program in on the computer you want to send data from.
Type the BR.BAS program in on the computer you want to receive data on.
Connect the serial port of the sending computer to the serial port of the
receiving computer with a null-modem cable (usually available from the
manufacturer of the laptop, or you can purchase one at any computer
store).

When you are typing in the programs, you don't have to type in the
comments (anything after a single-quote character on a line).

Be sure to SAVE "BS",A on the sending computer, and SAVE "BR",A on
the receiving computer, so you don't have to type the programs in
again. Then type RUN on each computer.

On the sending computer, type the file name of each file you want to send.
You can't use wildcards, but if you type in '=' instead of a file name,
the sending program will list the files in the current directory. When
you are through sending files, type a carriage-return (enter key), and
the program will terminate.

When you are done sending files, type SYSTEM at the GWBASIC prompt "Ok".
This will return you to MS-DOS on each system. The next time you want
to run each program, type GWBASIC BS on the sending computer, and
GWBASIC BR on the receiving computer.

Keep these programs on your laptop disk, and you will always have a way
to transfer files no matter where you are. This "low-tech" solution works
just fine for occasional file transfers and emergency situations.

Brad Jensen
Datamate Company
4135 S 100th East Ave Suite 128
Tulsa Ok 74146

Program Listings

10 ' BS.BAS   by Brad Jensen Datamate Company PO Box 471404 Tulsa Ok 74147
20 ' sends files with checksum to PC running BR.BAS
30 ' use with BASICA or GWBASIC and COM1: or COM2:
40 CML = 1 ' change this to "CML = 2" for COM2:
50 IF CML = 1 THEN PORT=&H3F8:CM$="COM1":ELSE PORT = &H2F8:CM$="COM2"
60 CLOSE   'this cleans up if you Ctrl-Break'ed out of last transmit
70 ACK$=CHR$(1):NAK$=CHR$(2) ' reply characters from other PC
80 OPEN CM$+":9600,N,8,1,Cs,ds,cd" AS #1 ' open COM1: or COM2:
90 HOLD=INP(PORT+3):OUT PORT+3,HOLD OR &H80 ' change baud rate to 38400
100 OUT PORT,3:OUT PORT+1,0:OUT PORT+3,HOLD ' set baud to 38400
110 S$=SPACE$(130)
120 CLS:PRINT "Send file to PC " LS$
130 INPUT "File name (= for file list) ";FL$       ' no file name ends programs
140 IF FL$="" THEN LSET S$=CHR$(255)+"$@":GOSUB 390:LOCATE 12,1:END
150 IF FL$="=" THEN FILES:PRINT "Press Any Key":WHILE INKEY$="":WEND:GOTO 120
160 OPEN FL$ AS #2 LEN=128 ' the file may have any path name
170 ST=1 ' strip off path or disk name for transmit to host
180 FOR I=1 TO LEN(FL$):IF MID$(FL$,I,1) = ":" OR MID$(FL$,I,1)="\" THEN ST=I+1
190 NEXT I ' all files will be received to the current directory on the host
200 LSET S$=CHR$(255)+MID$(FL$,ST)+"@":GOSUB 390 ' send file name
210 FIELD #2,128 AS A$:FLEN=LOF(2)
220 PRINT FLEN "Bytes" ' number of bytes in file
230 GR=INT(FLEN/128):GR2=GR*128
240 LOCATE 4,1:PRINT "Blocks to send";GR
250 LOCATE 6,1:PRINT "Sending block";
260 START=TIMER
270 FOR I = 1 TO GR
280 GET #2,I
290  LOCATE 6,15:PRINT I;
300 LSET S$=CHR$(128)+A$:GOSUB 390   ' send full data block
310 NEXT I
320 IF GR2=FLEN THEN 380      ' file is exactly / 128
330 GET #2,INT(GR)+1
340 LSET S$=CHR$(FLEN-GR2)+A$:GOSUB 390 ' send last short block
350 LAST=TIMER:LS$=" Last file sent : "+FL$+STR$(FLEN)
360 LS$=LS$+" bytes at "+STR$(INT(FLEN/(LAST-START)))+" per second"
170 CLOSE #2    '  end of this file, go do another
380 LOCATE 2,1:PRINT SPACE$(80);:LOCATE 2,1:GOTO 120 ' next file
390 CK=0:FOR J = 1 TO 129:CK=CK+ASC(MID$(S$,J,1)):NEXT J ' checksum
400 CK=CK AND 255:MID$(S$,130,1)=CHR$(CK) ' add checksum to end
410 RETRY=0 ' allowable retries for possible error transmission
420 PRINT #1,S$; ' send block of data + checksum to host
430 WHILE LOC(1)=0:WEND:REPLY$=INPUT$(1,1) ' get ack (good) or nak (bad)
440 IF REPLY$<>ACK$ THEN RETRY=RETRY+1:IF RETRY < 10 THEN 420:ELSE 460
450 RETURN              ' transmission was good, ack was received
460 PRINT :PRINT "***Too many retries***":END ' errors in transmit
470 REM BS.bas


10 ' Read file from laptop (com1) Receives a file from BS.BAS
20 ' reads 130 byte 'records' from com port with header,data,checksum
30 ' if header = 255 then new file name else header=bytes to write
40 ' checksum = sum of data bytes + header
50 ' returns nak on bad transmission else ack
60 ' ends when Esc pressed or timeout or new file name is $
70 ' Brad Jensen Datamate Company PO Box 471404 Tulsa Ok 74147
80  CML = 1 ' change this line to "CML = 2" for COM2: port
90 IF CML = 1 THEN PORT=&H3F8:CM$="COM1":ELSE PORT=&H2F8:CM$="COM2"
100 TIMEOUT=120 ' seconds to timeout
110 OPEN CM$+":9600,N,8,1,cs,ds,cd" AS #1 'open COM1: or COM2:
120 HOLD=INP(PORT+3):OUT PORT+3,HOLD OR &H80 'chang ebaud from 9600 to 38400
130 OUT PORT,3:OUT PORT+1,0:OUT PORT+3,HOLD ' set baud to 38400
140 CLS:PRINT "Waiting for start of file transmission"
150 WHILE LOC(1)=0 AND INKEY$ <> CHR$(27):WEND  ' wait for transmit to start
160 CLS:PRINT "Receiving file"
170 A$="":ACK$=CHR$(1):NAK$=CHR$(2) ' used to signal good/bad checksum
180 FL$="NUL":GOTO 230 ' open the NUL device as the general case
190 LOCATE 2,1:CLOSE #2 ' close old file
200 FL$=LEFT$(FL$,INSTR(FL$,"@")-1) ' get file name in first block
210 IF FL$="$" THEN LOCATE 12,1:PRINT "All Done ":END ' signals end of transmit
220 PRINT "Writing to "FL$"                              "
230 OPEN FL$ FOR OUTPUT AS #2 ' file is always in current directory on this end
240 BLOCKS=0:A$="":B=TIMER:NEWFILE=0:BAD=0  ' initialize for this file
250 LOCATE 4,1:PRINT "Receiving Block ";
260 IF LEN(A$) < 130 THEN GOSUB 300:ELSE GOSUB 320:IF NEWFILE THEN 190 'get data
270 IF INKEY$=CHR$(27) THEN LOCATE 12,1:PRINT "ESCaped":END ' Esc cancels
280 IF TIMER-B < TIMEOUT THEN GOTO 260 ' no characters in n seconds , quit
290 LOCATE 12,1:PRINT "Timed out...":END
300 IF LOC(1) <> 0 THEN A$=A$+INPUT$(LOC(1),1):B=TIMER ' get from com
310 RETURN
320 ALEN=LEN(A$):CK=0:BAD=-1  ' checksum calculation
330 FOR I = 1 TO ALEN-1:CK=CK+ASC(MID$(A$,I,1)):NEXT I:CK=CK AND 255
340 IF CHR$(CK) <> MID$(A$,ALEN,1) THEN A$="":PRINT #1,NAK$;:RETURN ' bad !
350 IF MID$(A$,1,1)=CHR$(255) THEN NEWFILE=-1:FL$=MID$(A$,2,ALEN-2):GOTO 390
360 BLEN=ASC(MID$(A$,1,1)) ' normally 128 bytes except last file block
370 PRINT #2,MID$(A$,2,BLEN);  ' print except for header & checksum byte
380 LOCATE 4,20:BLOCKS=BLOCKS+1:PRINT BLOCKS;
390 PRINT #1,ACK$;:BAD=0:A$="" ' not bad, good
400 RETURN      ' done receiving this block
410 REM BR.BAS

```
{% endraw %}

## BSR.DOC

{% raw %}
```
Brad's Send/Receive Program (BSR.EXE, BS.BAS, BR.BAS)  Version 1.2

2-21-89

The only other thing your laptop needs is a bellybutton. (I haven't
seen mine in years!)

Do you need to transfer files between two PC's with different diskette
types? The programs in BSR.ARC make this process simple and fast. This
is great if you have a laptop with a 3-1/2" disk and a desktop with
5-1/4" - or any other two PCs.

To do this you need:

        1) a COM1 or COM2 port on each PC

        2) either

           a) a standard RS-232 cable with a null modem
              (a null modem is a little connector you can buy
               at most computer stores, Radio Shack, or INMAC)

           b) a null-modem cable (my laptop came with one - you can
              also buy these at computer stores or by mail).

Part of the problem with commercial "bridge" programs is that you have
to remember to take a 5-1/4" copy of the software with you everywhere
you go, or you will be sure to need it when you don't have it.

This system includes a small but powerful "bootstrap" program written in
GWBASIC or BASICA (the BASIC that comes with MS-DOS/PC-DOS). If you find
it necessary to do file transfer and you don't have your bridge program
with you, you can type in the receive program in 2 minutes , and send
any kind of data between PCs.

Complete documentation of these programs is in BSBR.DOC. The sending
program is BS.BAS, the receiving program is BR.BAS. They work on any
PC with a COM 1 or 2 serial port.

You can then transfer the faster BSR.EXE program to the receiving PC,
and transfer multiple files with wildcards at baud rates to 115200. It's
just as fast as most commercial bridge programs, using error correction,
automatic retransmit, variable packet sizes, and it copies the source
file date and time to the destination file.

BSR.EXE will transfer a mostly full (600K) diskette to a receiving PC's
hard drive in as little as 4 minutes, 30 seconds. Transfer time is de-
pendent on number of files and whether retransmit occurs. The clock speed
of your PC also matters, but not as much as you might think.

The BSR.EXE program is written in QuickBasic 4.0 (plus assembly for the
communications - BASIC communications are SLOOOOOOOOW!). This means you
must be using DOS 2.1 or later. We do not suggest using DOS 3.1 - it
seems to have BUGS in it.

You can speed up transfer time by copying the files to your laptop's
ramdisk, and transferring them from there.

The simplest use of BSR is to type

BSR R

on the receiving PC. (The HOST).

Then type

BSR S

on the sending PC (The REMOTE).

You can then upload files to the host by typing in the filename. MS-DOS
wildcard characters * and ? are also okay. When you have transferred all
the files, just press the Enter key at the file name prompt to end the
programs.

You can also send in batch mode by typing

BSR S <filename>

on the sending computer. You can use wildcards here also. For example

BSR S *.WKS

to send your worksheets to the host PC. BSR will stop itself after sending
files in batch mode (so it's easy to set up a .BAT file to do the transfer).

You can use disk drives (B:,C:,etc.) or subdirectories (B:\LOTUS\) on
the sending PC only. It will open the proper file, strip off the path,
and send the file to the receiving PC. The receiving PC always puts the
files into the current directory.

If you need to upload files into a directory (such as \WP) that does not
contain BSR.EXE, do a CD \WP, then start BSR.EXE by typing in its full
pathname (for example, if it is in the root directory, \BSR.EXE).

If you use this software, please send us $20 for it. We'll send you the
latest version of all three programs, plus PD utilities that we like
best. Send Cash, Check, MO, VISA, MC, or Amex. The address is below.
Yes, we send them on both 3-1/2" and 5-1/4" diskettes.

The following is the display screen that you get when you type

BSR

without any command line arguments. If you press a key while this is
displayed, it will pause the display while you read it. Then press another
key to continue. Press P or p if you want to print out the order form.

When you order the software, we will include the latest version of
BSR.EXE, plus the best PD utilities we have found.

___________________Display Screen_____________________________________________
Press any key to pause this display...
Brad's Send Receive program (BSR.EXE)

Send/Receive files between two PCs (such as laptop and host)
Wire two PC's together serial port to serial port by null-modem
cable (avaliable at computer store). Use BSR S on one, BSR R on other.
   options (baud & packet size) must MATCH on both computers
Usage: BSR <options> [<file name /or/ wildcard>]
  baud rates: 1200 2400 4800 9600 19200 38400 76800 115200(default)
  on COM port 1(default) or 2  using wildcards (* or ?) or single file at a time
  S - send R -receive(default)  packet size P256 P512 P1024 P2048 P3072 P4096

Examples:
BSR 2 9600 S MYFILE.*   = Port 2 9600 baud Sendmode MYFILE.*
BSR                     = receive files at port 1 115200 baud
BSR S *.DAT             = send *.DAT port 1  115200 baud
BSR S                   = send port 1 115200 baud ask for files

If you use this program, please send $20 (cash, check, Visa/MC) to:

   Alfie Jensen's College Fund, PO Box 471404, Tulsa OK 74147

and we will send a 5-1/4 AND 3-1/2 diskette of PD utilities
plus the latest version of this software
_____________End of Display Screen____________________________________________

```
{% endraw %}

## FILE1987.TXT

{% raw %}
```
Disk No: 1987                                                           
Disk Title: BSR                                                         
PC-SIG Version: S1                                                      
                                                                        
Program Title: BSR                                                      
Author Version: 1.2                                                     
Author Registration: $20.00                                             
Special Requirements: RS-232 Port, Null Modem Cable, BASIC Language.    
                                                                        
BSR is a utility for transferring files back and forth between computers
using different types of disk drives, e.g. between laptops using 3.5"   
disk drives and desktop models with 5.25" drives.  BSR is particularly  
handy in unexpected situations, when you don't have at hand copies of   
the .EXE program on both 3.5" and 5.25" media, because it includes      
BASIC versions of the "Send" and "Receive" programs which can be typed  
in a relatively short time.  Although the author's claim that the BASIC 
listings can be typed in 2 minutes each is an exaggeration, they are    
short enough to type in manually in a pinch.  Then, you simply need     
BASICA or GW-BASIC to run the BASIC listing.                            
                                                                        
BSR will be most useful to those who must occasionally transfer files   
between computers using different types of disk drives.  Although the   
transfer rates achieved by BSR are comparable to the best that          
commercially available programs offer, individuals or businesses        
frequently needing to transfer files probably should invest in an       
additional diskette drive in order to avoid the awkwardness of          
constantly connecting and disconnecting computers, or in a commercial   
program, which provides more facilities for transferring large numbers  
of files at the same time.                                              
                                                                        
BSR does seem to contain either a "bug" or an error checking deficiency.
While the program worked flawlessly transferring files from my laptop (a
DataVue Spark running DOS 2.1, with a 9-pin RS-232 port addressed as    
COM1) to my desktop (an AT clone running DOS 3.3 with a 23-pin RS-232   
port addressed as COM2), I was unable to effect transfers in the other  
direction.  As the desktop computer indicated that it was executing     
"retries", the laptop would indicate that it was receiving a file and   
indicate that it was receiving bytes far in excess of the size of the   
file being sent.  After 20 retries the desktop would abort the transfer;
the laptop had written the correct filename to disk, but the file       
invariably contained 0 bytes.  I encountered the same problem with both 
the .EXE and .BAS versions of the program.  Using the same hardware and 
DOS versions, ZIP.COM transferred files in both directions without      
difficulty.  I am quite prepared to believe that the problem was due to 
an error on my part rather than to a "bug" in the programming.  However,
there were no error messages to give me a clue as to what the problem   
might be.                                                               
                                                                        
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
║                      <<<<  Disk #1987  BSR  >>>>                        ║
╠═════════════════════════════════════════════════════════════════════════╣
║ Use PKXARC to extract files from BSR.ARC.                               ║
║                                                                         ║
║ To start program, type: BSR          (press enter)                      ║
║                                                                         ║
║ To print documentation, type: COPY BSR.DOC PRN                          ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1987

     Volume in drive A has no label
     Directory of A:\

    BSR      ARC     76065   4-21-89   4:30p
    FILE1987 TXT      3923   1-02-90   6:27p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       694   1-01-80   1:34a
            4 file(s)      80720 bytes
                           78336 bytes free
