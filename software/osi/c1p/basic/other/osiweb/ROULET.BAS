10    EI=5:GE=5+10+20+40+80+160+320
20    F$(0)="SCHWARZ":F$(1)="ROT"
30    clearw2 :gotoxy 10,18:print "ROULETT DEMO"
50    T0=EI:KA=GE
60    gotoxy 1,19:print "EINSATZ  FARBE  KAPITAL"
65    T0=EI
70    FA= INT ( RND (8)*2):N=N+1
80    KA=KA-T0: IF KA<0 THEN 200
90    gotoxy 1,20:print T0," ";:gotoxy 9,20:print F$(FA),"    ";
91    gotoxy 18,20:print KA,"  "
95    SE= INT ( RND (8)*2)
100   IF FA=SE THEN KA=KA+2*T0:T0=EI: GOTO 150
110   T0=T0*2
150   gotoxy 1,21:print T0," ";:gotoxy 9,21:print F$(SE),"    ";
151   gotoxy 18,21:print KA,"  "
160   IF T0<>EI THEN 70:SE= RND (8)
165   IF N<S THEN 70
170   gotoxy 23,5:print KA-GE," MARK GEWONNEN BEI",N," SPIELEN"
180   TA=TA+1:N=0:GW=GW+KA-GE:gotoxy 0,13:print "GEWINN",GW," MARK": GOTO 50
200   PRINT "LEIDER AUS DER TRAUM NACH";N;"SPIELEN"
210   PRINT "EIN UEBERSCH.VON ";GW-GE;"MARK"
220   PRINT "FUER ";TA;"TAGE ARBEIT"
230   a=inp(2):TA=0:GW=0: GOTO 10
