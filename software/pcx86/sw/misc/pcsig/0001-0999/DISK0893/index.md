---
layout: page
title: "PC-SIG Library Disk #893"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0893/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0893"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRIVATE LINE AND WEAK LINK"

    Information is the currency of today's world.  Protect your data with
    THE PRIVATE LINE, an encryption/decryption program.
    
    When encrypting or decrypting a file, THE PRIVATE LINE prompts you
    before overwriting an existing file.  Single and double encryption is
    provided, the latter involving the encryption of an encrypted file,
    preferably with a different key.
    
    An encrypted file usually contains binary data, but some bulletin
    boards, such as CompuServe and EasyLink, require ASCII text files. THE
    PRIVATE LINE can convert a file from binary format to printable ASCII
    and then print it.  Included is an option which demonstrates compliance
    with the 171 tests required to meet the Data Encryption Standard of the
    NBS.
    
    Use WEAKLINK to transfer files between your PCs via RS232 serial
    ports.
    
    Its primary use is to allow file transfers between two machines that
    have different or non-removable media.  For example, file transfers can
    be made from the 3.5" floppy drive of one machine to the 5.25" drive of
    another.  When installed and activated, the master unit can access and
    transfer files to or from any or all of the drives of the slave unit
    incuding RAM disks.  Transfer speed of data is selectable from 1200 to
    115K baud.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## LISTER.BAS

```bas
100 ' list asm
102 CLS:PRINT "Printer Not Ready"
105 LPRINT CHR$(27);CHR$(66);CHR$(2);:WIDTH "LPT1:",130
110 CLS:INPUT "File Name";I$
120 OPEN I$ FOR INPUT AS #1
125 LIN=0
126 ON ERROR GOTO 400
129 '
130 LINE INPUT #1,I$
135 IF MID$(I$,1,4)=";off" THEN GOSUB 300
140 IF MID$(I$,1,5)=";page" THEN LPRINT CHR$(12);:GOSUB 200
150 LPRINT TAB(12);I$
155 LIN=LIN+1
160 GOTO 130
198 '
199 '
200 LINE INPUT #1,I$:IF I$=""THEN 200
205 IF I$<>";off" THEN RETURN
206 GOSUB 300
210 RETURN
298 '
299 '
300 LINE INPUT #1,I$:IF MID$(I$,1,3)<>";on" THEN 300
301 LINE INPUT #1,I$
310 RETURN
398 '
399 '
400 SYSTEM
```

## RCV.BAS

```bas
100 CLOSE
110 OPEN "com1:300,n,8,1,ds" FOR INPUT AS #1
120 CLS
130 L%=1
140 GOSUB 410
150 ON INSTR("NCE+Z/",B$) GOTO 170,200,240,290,330,370
160 GOTO 140
170 '
180 N$=""
190 GOTO 140
200 '
210 GOSUB 410
220 N$=N$+B$
230 GOTO 140
240 '
250 PRINT "Transfering file = ";N$
260 CLOSE #2
270 OPEN N$ FOR OUTPUT AS #2
280 GOTO 140
290 '
300 GOSUB 410
310 PRINT #2,B$;
320 GOTO 140
330 '
340 CLOSE #2
350 GOTO 140
360 '
370 CLOSE
380 PRINT "Files all transfered"
390 STOP
400 '
410 IF L%>LEN(A$) THEN 450
420 B$=MID$(A$,L%,1)
430 L%=L%+1
440 RETURN
450 IF EOF(1) THEN 450
460 A$=INPUT$(LOC(1),#1)
470 L%=2
480 B$=MID$(A$,1,1)
490 RETURN
```

## TMT.BAS

```bas
100 OPEN "com1:300,n,8,1,ds" FOR OUTPUT AS #1
110 CLS
120 PRINT :PRINT :PRINT "                          Bootstrap to different media"
130 N$="config.s"
140 GOSUB 240
150 N$="net0.sys"
160 GOSUB 240
170 N$="ps.com"
180 GOSUB 240
190 PRINT #1,"/";
200 CLOSE
210 PRINT "Files all transfered"
220 STOP
230 '
240 PRINT #1,"N";
250 FOR L%=1 TO LEN(N$)
260 PRINT #1,"C";MID$(N$,L%,1);
270 NEXT L%
280 PRINT #1,"E";
290 ON ERROR GOTO 340
300 OPEN N$ AS #2 LEN=1
310 FIELD 2,1 AS B$
320 GOTO 390
330 '
340 BEEP
350 PRINT "Error openning ";N$
360 CLOSE #2
370 STOP
380 '
390 ON ERROR GOTO 560
400 '
410 IF EOF(2) THEN 480
420 GET #2
430 PRINT #1,"+";B$;
440 LOCATE 1,1:SZ%=SZ%+1:PRINT SZ%;
450 FOR L=1 TO 100:NEXT L
460 GOTO 410
470 '
480 PRINT #1,"Z";
490 CLOSE #2
500 LOCATE 12,30
510 PRINT N$;" Transfered           "
520 ON ERROR GOTO 0
530 SZ%=0
540 RETURN
550 '
560 ON ERROR GOTO 0
570 PRINT "Data line error"
580 CLOSE #2
590 RETURN

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0893

     Volume in drive A has no label
     Directory of A:\

    AC       SYS       568  11-21-87   8:19p
    ADDCOM   DOC      2957  11-21-87  10:24p
    CONFIG   M          17   6-10-87   1:18a
    CONFIG   S          19   6-10-87  12:34a
    DIAGNOSE DOC      2456   1-15-88  10:40a
    FACT     SHT      7296   9-30-89  10:43a
    FILE0893 TXT      1721  11-30-89   4:21p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT      1158  10-21-89  12:49a
    LISTER   BAS       626   9-24-87   8:33a
    MENU              2944   2-19-89   1:10p
    MSG      DAT     19840   4-19-88   5:18p
    MSG      ENC     19840   3-25-89   8:33a
    NET00000 SYS       247   6-11-87  10:52a
    PM       SYS      2085   7-28-88   8:19p
    PRIVATE  DOC    121856   9-30-89  11:23a
    PRIVATE  EXE     39168   9-09-89   8:06a
    PS       COM      2534   7-28-88   8:20p
    RCV      BAS       671   6-11-87  10:16a
    RCV      COM      1835  10-20-87  10:35p
    READ     ME       4096   7-08-89   6:26p
    README            4315  11-22-87  10:48a
    REVIEW            5632   9-30-89  12:57p
    TMT      BAS       984   6-11-87  10:40a
    TMT      COM      1338  11-21-87  11:22p
    WEAKLINK DOC     18118   7-29-88   9:30a
           26 file(s)     262359 bytes
                           46080 bytes free
