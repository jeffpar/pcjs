5     GOSUB INIT
10    fensternr=3:xpos=0:ypos=010:breit=320:hoch=190:gosub setwind
20    clearw 2:closew 0
30010 X0=320:Y0=-9:XM=639:YM=190:RS=2.54:GX=319:GY=199
30020 DIM IC(31,7):IC=0:FL(0)=1:FL(1)=-1:DX=0:DY=0
30050 GOSUB 35600
30100 AX=PX:AY=PY
30110 GOSUB MAUS
30130 IF MAUSX < X0 THEN 30110
30135 IF taste=2 THEN  GOSUB 35000
30140 PX=MAUSX-X0:PY=- MAUSY+YM:GOTO 30100
35000 PX=PX:PY=PY
35010 CLEARW 2:GOTOXY 4,2:PRINT "0:    1:    2:    3:    4:";
35020 GOTOXY 1,4:PRINT "STECKER  IC  DIREC. PLOT  RTN";
35030 GOTOXY 8,7:PRINT "Bitte auswaehlen !"
35040 IN=INP(2):IF IN<48 OR IN>52 THEN IF IN =7 THEN END ELSE 35040
35050 ON IN-47 GOSUB 35100,35200,35300,35400,35500
35060 IF IN=52 THEN  RETURN 
35070 GOTO 35000
35100 REM  **0**
35110 INPUT "ANZAHL DER STIFTE=";P:RESTORE 39030: READ RB,RA,BH
35120 PO=P:BL=(P-2)*RA/2: RETURN 
35200 REM  **1**
35210 RESTORE 39000: INPUT "EINGABE DER POLZAHL ";P
35215 READ PO,BL,BH: IF PO=0 THEN 35210
35220 IF PO<>P THEN 35215
35225 RA=RS:RB=BH: RETURN 
35300 REM  **2**
35310 INPUT "RICHT.(HOCH,RECHTS)BEZ PIN 1";D
35315 IF D<0 OR D>1 THEN 35310
35320 IX=PX*RS/2:IY=PY*RS/2:DX=IX+D*BL+(D-1)*BH:DY=IY+D*BH-(D-1)*BL
35325 IF DX>GX OR DY>GY THEN 35700
35330 Z=IC: FOR R=0 TO IC-1: IF IC(R,1)=IX AND IC(R,2)=IY THEN 35345
35332 IF ABS(IC(R,1)-IX)<4 AND ABS(IC(R,2)-IY)<4 THEN 35345
35335 NEXT :IC=IC+1: GOTO 35380
35340 IC=IC+1: IF Z=IC-1 THEN 35380
35345 Z=R: INPUT "BAUTEIL LOESCHEN (0,1) ";P: IF P<0 OR L>1 THEN 35345
35350 IF P=0 THEN 35380
35355 FOR R=0 TO 7:IC(Z,R)=IC(IC-1,R): NEXT 
35360 IC=IC-1: RETURN 
35380 IC(Z,0)=PO:IC(Z,1)=IX:IC(Z,2)=IY:IC(Z,3)=DX
35385 IC(Z,4)=DY:IC(Z,5)=RA:IC(Z,6)=RB:IC(Z,7)=D
35390 RETURN 
35400 REM  **3**
35410 LPRINT "OE;IN;IW;SC0,237,0,170;VS0;SP0;";
35412 LPRINT "PA0,0;PD";GX;0;GX;GY;0;GY;0;0;";PU;";
35415 FOR R=0 TO IC-1: FOR RE=0 TO 1
35420 DX=FL(RE)*(IC(R,7)-1):DY=FL(RE)*IC(R,7): FOR XX=1 TO IC(R,0)/2
35425 LPRINT "PA";IC(R,1+RE*2)+DY*(XX-1)*IC(R,5);
35427 LPRINT IC(R,2+RE*2)-DX*(XX-1)*IC(R,5);
35430 RESTORE 39010: READ P: FOR YY=1 TO P: READ X,Y
35435 IF X=5 THEN LPRINT "PU;";: GOTO 35450
35440 IF X=6 THEN LPRINT "PD;";: GOTO 35450
35445 GOSUB 35480
35450 NEXT : NEXT : NEXT : NEXT 
35455 LPRINT "OE;IN;";
35460 RETURN
35480 LPRINT "PR";DX*X+DY*Y;DY*X-DX*Y;: RETURN
35500 REM  **4**
35510 CLEARW 2: GOSUB 35600
35520 IF IC=0 THEN  RETURN 
35530 FOR R=0 TO IC-1:X=IC(R,1)/RS:Y=IC(R,2)/RS
35540 XX=IC(R,3)/RS/2:YY=IC(R,4)/RS/2
35545 XPOS1=2*X+X0:XPOS2=2*XX+X0:YPOS1=-2*Y+YM:YPOS2=-2*YY+YM
35550 COLOR 1,1,1:FUELL=1:GOSUB RECHTECK: NEXT : RETURN
35600 REM  **RAND ZEICH.**
35606 XPOS1=X0:XPOS2=XM:YPOS1=Y0:YPOS2=YM
35610 FUELL=1:COLOR 1,0,1:GOSUB RECHTECK:color 1,1,1
35620 PX=0:PY= INT (YM/2):AX=0:AY=0: RETURN 
35700 PRINT "ERROR !!"
35710 RETURN
39000 DATA 14,15.24,7.62,16,17.78,7.62,24,27.94,15.24
39005 DATA 28,33.02,15.24,40,48.26,15.24,8,7.62,7.62,0,0,0
39010 DATA 25,1.7,0,6,0,0,-.18,-.8,0,0,-.36,-1.8,0,0,.2,1.44,0,0,.68
39015 DATA -1.08,0,0,-.52,-2.16,0,0,.36,1.8,0,0,.36,1.8,0,0,-.36,.8,0
39017 DATA 0,-.18,5,0,0,1.27,6,0,-4.4,0,4.4,0,5,0
39020 DATA 2,4.5,0,-4.5,0
39030 DATA 5.08,2.54,5.08
62000 setwind:
62005 poke gintin,fensternr:poke gintin+2,5:poke gintin+4,xpos
62010 poke gintin+6,ypos:poke gintin+8,breit:poke gintin+10,hoch
62015 gemsys 105:return
62050 fullwind:
62055 poke gintin,3:poke gintin+2,5:poke gintin+4,-1:poke gintin+6,-2
62060 poke gintin+8,665:poke gintin+10,213:gemsys 105:return
62080 cleardesk:
62085 color 1,0,1:xpos1= 0:xpos2=639:ypos1=-9:ypos2=3
62090 fuell=1:gosub rechteck:color 1,1,1:return
62100 schrumpfbox:
62105 schrumpf%=1
62110 growbox:
62115 poke control+2,8:poke control+4,1:poke gintin,xalt:poke gintin+6,hoch1
62120 poke gintin+2,yalt+9:poke gintin+4,breit1:poke gintint8,xneu
62125 poke gintin+10,yneu+9:poke gintin+12,breit2:poke gintin+14,hoch2
62130 gemsys 73+schrumpf%:schrumpf%=0:return
62150 movebox:
62155 poke control+2,6:poke control+4,1:poke gintin,breit:poke gintin+6,yalt+9
62160 poke gintin+2,hoch:poke gintin+4,xalt
62165 poke gintin+10,yneu+9:poke gintin+8,xneu:gemsys 72:return
62700 farbe:
62705 poke contrl,14:poke intin,farbnr:poke intin+2,rot*140
62710 poke intin+4,gruen*140:poke intin+6,blau*140:vdisys
62715 return
62750 polymarkerfarbe:
62755 poke contrl,20:poke intin,markerfarbe:vdisys
62760 return
62900 init:
62905 aes#=gb:control=peek(aes#):global=peek(aes#+4)
62910 gintin=peek(aes#+8):gintout=peek(aes#+12):addrin=peek(aes#+16)
62915 addrout=peek(aes#+20):return
63000 maus:
63005 mausx=peek(gintout+2):mausy=peek(gintout+4)-9
63010 taste=peek(gintout+6):key=peek(gintout+8):gemsys 79
63015 return
63030 showmaus:
63035 poke contrl,122: poke intin,0:vdisys
63040 return
63200 mausdata:
63205 for iii=0 to 15:read mustervor,musterhinter:poke intin+iii*2+42,mustervor
63210 poke intin +iii*2+10 ,musterhinter:next
63250 mausneu:
63255 poke control,111:poke contrl+6,37:poke intin,5:poke intin+2,5
63260 poke intin+4,1:poke intin+6,0:poke intin+8,1:vdisys
63265 out 2,7:return
63280 mausform:
63285 add#=gb: gintin=peek(add#+8):addrin=peek(add#+16)
63290 poke gintin,mausnr:poke addrin,0:gemsys(78):return
63400 polymarker:
63405 poke contrl,18:poke contrl+2,0:poke contrl+6,1
63410 poke intin,markertyp:vdisys
63415 poke contrl,19:poke contrl+2,1:poke contrl+6,0
63420 poke ptsin,0:poke ptsin+2,markergroesse:vdisys
63430 markersetzen:
63435 poke contrl,7:poke contrl+2,1:poke ptsin,xpos
63440 poke ptsin+2,ypos+9:vdisys
63445 return
64000 rechteck:
64005 poke contrl,11:poke contrl+2,2:poke contrl+6,0:poke contrl+10,fuell and 9
64010 poke ptsin,xpos1:poke ptsin+2,ypos1+9
64015 poke ptsin+4,xpos2:poke ptsin+6,ypos2+9:vdisys
64020 return
64100 vieleck:
64105 phi=3.1415927/ecken/2
64110 stern:
64115 poke contrl,9:poke contrl+6,0:poke contrl+2,ecken
64120 for iii=0 to ecken*4 step 4:poke ptsin+iii,xpos+cos(phi*iii)*radius
64125 poke ptsin+(iii+2),9+ypos+sin(phi*iii)*radius/2:next:vdisys
64130 return
64140 polyline:if anzahl > 250 then anzahl = 250
64145 poke contrl,6:poke contrl+6,0:poke contrl+2,anzahl
64150 for iii=0 to anzahl:poke ptsin+iii*4,xkoord(iii)
64155 poke ptsin+2+iii*4,ykoord(iii)+9:next:vdisys
64160 return
64165 grafikmodus:
64170 poke contrl,32:poke contr+2,0:poke contrl+6,1
64175 poke intin,modus:vdisys
64200 clipping:
64205 poke contrl,129:poke intin,schalter:poke ptsin,xpos1:poke ptsin+2,ypos1
64210 poke ptsin+4,xpos2:poke ptsin+6,ypos2:vdisys
64215 return
64230 rechtrund:
64235 fuell=fuell or 8:goto rechteck
64250 schriftgroesse:
64255 poke contrl,107:poke contrl+2,0:poke contrl+6,1
64260 poke intin,groesse:vdisys
64265 return
64270 textausgabe:
64275 for iii=0 to len(text$)-1:poke intin+iii*2,asc(mid$(text$,iii+1,1)):next
64280 poke intin+ii*2,0:poke contrl,8:poke contrl+2,1
64285 poke contrl+6,ii-1:poke ptsin,xpos:poke ptsin+2,ypos+9:vdisys
64290 return
64300 zeichenhoch:
64305 poke contrl,12:poke ptsin+2,zeichenhoehe:vdisys
64310 return
64320 Umrahmung:
64325 poke contrl,104:poke intin,rahmen:vdisys
64330 return
64350 eventmaus:
64355 poke gintin,evevtdir:poke gintin+2,xpos:poke gintin+4,ypos+19
64360 poke gintin+6,breit:poke gintin+8,hoch:gemsys 22
64365 return
64370 rubberbox:
64375 poke gintin,mausx:poke gintin+2,mausy+9
64380 poke gintin+4,1:poke gintin+6,1
64385 AES.3: gemsys 70
64390 breit=peek(gintout+2):hoch=peek(gintout+4)
64395 if hoch <3 or breit <3 then goto AES.3 else return
