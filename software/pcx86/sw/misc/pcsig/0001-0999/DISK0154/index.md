---
layout: page
title: "PC-SIG Library Disk #154"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0154/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0154"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRINTER ART"

    This PRINTER ART package is a collection of ASCII text files, that when
    sent to your printer, create many wondrous sights such as a clown,
    Schroeder of Charlie Brown fame, the Enterprise, and more.  Some of
    these sights may not be suitable for young eyes to view, so please use
    your own discretion.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## SHUTTL3D.BAS

```bas
10 KEY OFF
20 X=0:Y=0:Z=0:X3=0:Y3=0:Z3=0:AM=0:BM=0:CM=0:DM=0:EM=0:FM=0:GM=0:HM=0:IM=0:D=0:P=0:B=0:H=0:U=0:V=0:U1=0:V1=0
30 DIM V(300,3),E(300)
40 CLS
50 READ NV
60 FOR P=1 TO NV
70 READ V(P,1),V(P,2),V(P,3)
80 V(P,1) = 0.12 * V(P,1)
90 V(P,2) = 0.12 * V(P,2)
100 V(P,3) = 0.12 * V(P,3)
110 NEXT P
120 READ NE
130 FOR E=1 TO NE
140 READ E(E)
150 NEXT E
160 SCREEN 2
170 D=120
180 LOCATE 1,1
190 INPUT"INPUT  ANY 3 ANGLES (X,Y,Z)"; P0,P1,P2
210 CLS
220 P=6.28 * P0 / 255 - 3.1416
230 B=6.28 * P2 / 255
240 H=6.28 * P1 / 255
250 GOSUB 390
260 XV = -D * CP * SH: REM ---SEE SUB.---
270 YV = -D * CP * CH
280 ZV = -D * SP
290 REM ---PROJECT NE POINTS---
300 FOR E=1 TO NE
310 X = V( ABS ( E ( E ) ), 1 )
320 Y = V( ABS ( E ( E ) ), 2 )
330 Z = V( ABS ( E ( E ) ), 3 )
340 GOSUB 520
350 IF E(E)>0 THEN LINE (U1*2+75,V1+20)-(U*2+75,V+20)
360 U1 = U: V1 = V
370 NEXT E
380 GOTO 190
390 CH = COS (H): SH = SIN (H)
400 CP = COS (P): SP = SIN (P)
410 CB = COS (B): SB = SIN (B)
420 AM = CB * CH - SH * SP * SB
430 BM = -CB * SH - SP * CH * SB
440 CM = CP * SB
450 DM = SH * CP
460 EM = CP * CH
470 FM = SP
480 GM = -CH * SB - SH * SP * CB
490 HM = SH * SB - SP * CH * CB
500 IM = CP * CB
510 RETURN
520 X = X - XV
530 Y = Y - YV
540 Z = Z - ZV
550 X3 = AM * X + BM * Y + CM * Z
560 Y3 = DM * X + EM * Y + FM * Z
570 Z3 = GM * X + HM * Y + IM * Z
580 U = 135 + 13.5 * D * X3 / Y3
590 V = 80 - 11.5 * D * Z3 / Y3
600 RETURN
610 DATA 124
620 DATA 0,-2.2,46,1.5,-2.6,46,2.2,-4.6,46,1.7,-6.5,46,0,-6.7,46
630 DATA -1.7,-6.5,46,-2.2,-4.6,46,-1.5,-2.6,46
640 DATA 0,-.8,43,2.8,-1.5,43,4,-4.5,43,3,-7.2,43,0,-8,43,-3,-7.2,43
650 DATA -4,-4.5,43,-2.8,-1.5,43
660 DATA 0,1.7,38,4.6,0,38,5.8,-4.4,38,4,-8.2,38,0,-9,38,-4,-8.2,38
670 DATA -5.8,-4.4,38,-4.6,0,38
680 DATA 0,4,32.5,4.5,1,32.5,5.8,-4.6,32.5,4,-9,32.5,0,-9.5,32.5,-4,-9,32.5
690 DATA -5.8,-4.6,32.5,-4.5,1,32.5
700 DATA 0,8,26.3,3.5,7,26.3,7.8,2,26.3,8,-7,26.3,0,-9.8,26.3,-8,-7,26.3
710 DATA -7.8,2,26.3,-3.5,7,26.3
720 DATA 0,8,21.5,3.8,7.5,21.5,8,3,21.5,8,-8,21.5,0,-9.8,21.5,-8,-8,21.5
730 DATA -8,3,21.5,-3.8,7.5,21.5
740 DATA 0,8,14,4.7,7,14,8,4,14,8,-8.7,14,0,-10,14,-8,-8.7,14,-8,4,14
750 DATA -4.7,7,14
760 DATA 0,8,4,4.7,7,4,8,4,4,8,-8.7,4,0,-10,4,-8,-8.7,4,-8,4,4
770 DATA -4.7,7,4
780 DATA 0,8,-12,4.7,7,-12,8,4,-12,8,-8.7,-12,0,-10,-12,-8,-8.7,-12,-8,4,-12
790 DATA -4.7,7,-12
800 DATA 0,8,-27.3,4.7,7,-27.3,8,4,-27.3,8,-8.7,-27.3,0,-10,-27.3,-8,-8.7,-27.3
810 DATA -8,4,-27.3,-4.7,7,-27.3
820 DATA 0,8,-35.6,4.7,7,-35.6,8,4,-35.6,8,-8.7,-35.6,0,-10,-35.6,-8,-8.7,-35.6
830 DATA -8,4,-35.6,-4.7,7,-35.6
840 DATA 0,9,-43,2,8.5,-43,8.8,1.5,-43,9,-10,-43,0,-10.8,-43,-9,-10,-43
850 DATA -8.8,1.5,-43,-2,8.5,-43
860 DATA 0,9.5,-48,2,9.3,-48,9.2,1.5,-48,10,-10,-48,0,-10.2,-48,-10,-10,-48
870 DATA -9.2,1.5,-48,-2,9.3,-48
875 DATA 8.7,-8.7,21,15,-8.7,-16,35,-10,-36,35,-10,-40
876 DATA -8.7,-8.7,21,-15,-8.7,-16,-35,-10,-36,-35,-10,-40
877 DATA 0,13,-37,0,33,-60,0,33,-69,0,14,-60
878 DATA 6,11,-43,6,11,-48,11,5,-43,11,5,-48,-6,11,-43,-6,11,-48,-11,5,-43
879 DATA -11,5,-48
880 DATA 259
890 DATA -1,2,3,4,5,6,7,8,1,-9,10,11,12,13,14,15,16,9,-17,18,19,20,21,22,23,24,17
900 DATA -25,26,27,28,29,30,31,32,25,-33,34,35,36,37,38,39,40,33
910 DATA -41,42,43,44,45,46,47,48,41,-49,50,51,52,53,54,55,56,49
920 DATA -57,58,59,60,61,62,63,64,57,-65,66,67,68,69,70,71,72,65
930 DATA -73,74,75,76,77,78,79,80,73,-81,82,83,84,85,86,87,88,81
940 DATA -89,90,91,92,93,94,95,96,89,-97,98,99,100,101,102,103,104,97
950 DATA -1,9,17,25,33,41,49,57,65,73,81,89,97
960 DATA -2,10,18,26,34,42,50,58,66,74,82,90,98
970 DATA -3,11,19,27,35,43,51,59,67,75,83,91,99
980 DATA -4,12,20,28,36,44,52,60,68,76,84,92,100
990 DATA -5,13,21,29,37,45,53,61,69,77,85,93,101
1000 DATA -6,14,22,30,38,46,54,62,70,78,86,94,102
1010 DATA -7,15,23,31,39,47,55,63,71,79,87,95,103
1020 DATA -8,16,24,32,40,48,56,64,72,80,88,96,104
1030 DATA -44,105,106,107,108,92
1040 DATA -46,109,110,111,112,94
1050 DATA -81,113,114,115,116,89
1060 DATA -82,117,118,-83,119,120
1070 DATA -87,121,122,-88,123,124
1080 DATA -117,119,-121,123,-118,120,-122,124
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0154

     Volume in drive A has no label
     Directory of A:\

    ACNUDE4  NQD      1032  10-03-87   9:06p
    ACNUDE5  NQD      3661  10-03-87   8:28p
    ALFRED   PQC      1283   9-11-86  11:55p
    BARDOT   PQC      1571   2-07-88  10:23p
    BATCHICK NQD      1665  11-16-86   2:14a
    BETTY    NQD      2139   7-19-87   5:55p
    CINDY    NQD      2540  11-16-86   3:31a
    CLOWN    PQC      1139  11-14-86   6:21p
    DRAGON   IMG     16075   2-23-89  11:51a
    DRU      NQD      2616  11-15-86   1:00p
    ELLEN    NQD      1896  11-16-86   4:01a
    ENTEP    PQC       729  11-15-86   1:21p
    FILES154 TXT      2642   3-16-89  10:43a
    FRAN     NQD      1474   7-19-87   6:51p
    HONEY    NQD      2376  11-15-86   3:23p
    JANE     NQD      2853  11-16-86   2:46a
    KIRK     PQC      3275   9-26-86  10:45p
    LORETTA  PQC      1703   1-01-88   1:17p
    MARIA    NQD      3777   9-26-86  10:40p
    MICKEY   PQC       820  11-16-86   4:15a
    MONA     PQC      6230   1-29-87  10:10p
    MOTHER   PQC      2083  10-30-87  12:16a
    NUSQ     COM      2176   5-19-84   5:31p
    PANTHER  PQC       979  11-15-86   3:40p
    PHANTOM  PQC      1407  11-15-86   3:56p
    READMAC  IMG     16076   2-07-88  10:43p
    REPP310  DOC     52864   2-16-89  11:19p
    REPP310  EXE    136683   2-23-89  12:36p
    REPPHELP DAT      4224   2-07-89  10:18p
    ROXANN   NQD      2948  11-15-86   7:02p
    SAMPLE   SHO       109   2-23-89  12:11p
    SANTA4   PQC      2199   8-03-86  12:02a
    SANTA8   PQC      3522  11-15-86  10:32p
    SCHROEDR PQC       766  10-31-83   3:13a
    SHUTTL3D BAS      3804   2-14-88  11:51a
    SHUTTLE  PQC      1213  12-25-83   6:08p
    SMURF    PQC      1551   8-28-86  11:30p
    SUNNY    NQD      1988   3-15-86  12:28a
    SUSAN    NQD      3399   7-29-86  10:12p
    SYLVIA   NQD      3065  11-15-86   5:54p
    TIGER    MAC     14010   2-15-89   8:57p
    TIGER    PQC      3209  10-30-87  12:42a
    TWEETY   PQC      1166  11-16-86   4:27a
    UN-NQD   BAT       384   2-14-88  12:02p
    UN-PQC   BAT       384   2-14-88  12:01p
    UTILHELP DAT      6656   2-07-89  10:21p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617   3-09-89   9:59a
    MANUAL   BAT        21   6-15-88   8:47a
           49 file(s)     329037 bytes
                            6144 bytes free
