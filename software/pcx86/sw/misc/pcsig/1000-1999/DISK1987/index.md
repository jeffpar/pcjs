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

## BS.BAS

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
