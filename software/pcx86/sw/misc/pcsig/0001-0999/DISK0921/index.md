---
layout: page
title: "PC-SIG Library Disk #921"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0921/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0921"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ASTRONOMY AND AERONAUTICS"

    A trio of programs applicable to the performance of rockets and
    gliders, and the air in which they fly.
    
    ATMOS determines properties of the standard atmosphere. ROCKET1
    explores the flight performance of a single stage model rocket. GLIDER
    determines the maximum flight range and endurance conditions of boost
    and rocket gliders. This is also applicable to sailplanes, hang
    gliders, and radio-controlled gliders.
    
    Explore some of the mechanics of the solar system with these tutorials
    and calculators.
    
    KEPLER solves Kepler's equation for elliptic, parabolic and hyperbolic
    orbits. SIDEREAL introduces you to the relationships between Julian
    calendar dates and solar and sidereal times.
    
    J2000 converts stellar positions, proper motion, parallax and radial
    velocity from the standard epoch B1950 (FK4) to epoch J2000 (FK5).
    GALILEAN determines the position of the Galilean satellites relative to
    Jupiter.
    
    SYNCSAT and TNODE help you determine the location of several
    Earth-orbiting satellites. You can use this information for radio
    tracking, communications and visual observations of Earth satellites.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ATMOS.BAS

```bas
' PROGRAM "ATMOS"

' COPYRIGHT (C) 1982 BY DAVID EAGLE

' PUBLIC DOMAIN FOR IBM-PC ON NOVEMBER 21, 1986

' IBM-PC  << MICROSOFT QUICKBASIC COMPILER VERSION 3.0 >>

' DETERMINES PROPERTIES OF THE STANDARD ATMOSPHERE

' TEMPERATURE, DEGREES FAHRENHEIT AND CELSIUS
' PRESSURE, NEWTONS PER SQUARE METER
' DENSITY, KILOGRAMS PER CUBIC METER

'**********************************************************

DEFDBL A-Z

CONST C0=288.15D0
CONST F0=518.67D0
CONST ALTITUDE0=10999.9272D0
CONST PRESSURE0=101325.016D0
CONST DENSITY0=1.22557D0

DO
   CLS
   PRINT
   PRINT
   PRINT "Program ATMOS"
   PRINT "(C) Copyright 1982 by David Eagle"
   PRINT
   PRINT "Microsoft QuickBASIC Compiler"
   PRINT "(C) Copyright Microsoft Corp. 1982-1987"
   PRINT
   CALL KEYCHECK

   CLS
   PRINT
   PRINT
   PRINT
   PRINT TAB(32);"Program ATMOS"
   PRINT
   PRINT
   PRINT "Initial Altitude ( meters )"
   INPUT IALT
   PRINT
   PRINT
   PRINT "Final Altitude ( meters )"
   INPUT FALT
   PRINT
   PRINT
   PRINT "Altitude increment ( meters )"
   INPUT DALT

   J%=INT(IALT/DALT+.5D0)
   K%=INT(FALT/DALT+.5D0)

   CLS
   PRINT
   PRINT TAB(5);"ALTITUDE";TAB(25);"PRESSURE";TAB(45);"DENSITY";TAB(65);"TEMPERATURE";
   PRINT TAB(4);"( meters )";TAB(24);"( nt/sq m )";TAB(44);"( kg/m^3 )";TAB(64);"( degrees F, C )";
   PRINT
   PRINT

   FOR I%=J% TO K%
       PNUM%=PNUM%+1
       ALTITUDE=I%*DALT

       IF ALTITUDE < ALTITUDE0 THEN
          RHO2=1D0-2.2556913D-5*ALTITUDE
          RHO1=RHO2^5.256116D0
       ELSE
          RHO1=.2233618D0*EXP(1.7345477D0-1.576872D-4*ALTITUDE)
          RHO2=.7519D0
       END IF

       DRATIO=RHO1/RHO2
       PRESSURE=RHO1*PRESSURE0
       DENSITY=DRATIO*DENSITY0

       TEMPF=RHO2*F0-459.67D0
       TEMPC=RHO2*C0-273.15D0

       ' PRINT DATA

       PRINT
       PRINT USING "######.##";TAB(2);ALTITUDE;TAB(25);PRESSURE;
       PRINT USING "###.#######";TAB(42);DENSITY;
       PRINT USING "###.##";TAB(64);TEMPF;TAB(73);TEMPC

       IF PNUM%=7 THEN
          CALL KEYCHECK
          CLS
          PRINT
          PNUM%=0
       END IF

   NEXT I%

   IF PNUM%>0 AND PNUM%<7 THEN CALL KEYCHECK

   CLS
   PRINT
   PRINT
   PRINT "Another selection ( y = yes, n = no )"
   INPUT SELECTION$
LOOP UNTIL INSTR("nN",SELECTION$)

END

'**********************************************************

SUB KEYCHECK STATIC

    ' CHECK USER RESPONSE SUBROUTINE

    PRINT
    PRINT
    PRINT
    PRINT TAB(25);"< press any key to continue >"

    A$=""
    WHILE A$=""
      A$=INKEY$
    WEND

END SUB

```

## GALILEAN.BAS

```bas
' Program "GALILEAN"

' copyright (C) 1986 by David Eagle

' public domain for IBM-PC on November 23, 1986

' IBM-PC  << QuickBASIC Compiler Version 3.0 >>

' determines position of Jupiter's great satellites

' x-position (positive west of Jupiter; units of Jupiter radii)
' y-position (positive north of Jupiter; units of Jupiter radii)
' position angle (relative to inferior junction with Jupiter; degrees)
' Jupiter semi-diameter (units of arc seconds)
' Julian Date

'********************************************************************

OPTION BASE 1
DEFDBL A-Z

DIM SHARED MONTH$(12),SATELLITE$(4),R(4),X(4),Y(4),U(4)

COMMON SHARED JULIAN.DATE0,HOUR%,MINUTE%,LCT$,MONTH%,DAY%,YEAR%
COMMON SHARED DST%,ZONE%,JULIAN.DATE,SEMIDIAMETER,CDATE$,TDELAY

CONST PI=3.141592653589793D0
CONST PIDIV2=.5D0*PI
CONST PI2=2D0*PI
CONST RTD=180D0/PI

DEF FNMOD(X)=X-PI2*INT(X/PI2)

DEF FNJDATE(MONTH%,DAY%,YEAR%)
    'JULIAN Date function
    F=367D0*YEAR%-INT(7*((YEAR%+INT((MONTH%+9)/12))/4))
    F=F+INT(275*MONTH%/9)+DAY%+1721028.5D0
    FNJDATE=F-INT(3*(INT((YEAR%+SGN(MONTH%-9)*INT(ABS((MONTH%-9)/7)))/100)+1)/4)
END DEF

DEF FNASN(X)
    ' inverse sine function
    IF ABS(X)>=1D0 THEN
       FNASN=SGN(SINANGLE)*PIDIV2
    ELSE
       FNASN=ATN(X/SQR(1D0-X^2))
    END IF
END DEF

' calendar months

MONTH$(1)="January"
MONTH$(2)="February"
MONTH$(3)="March"
MONTH$(4)="April"
MONTH$(5)="May"
MONTH$(6)="June"
MONTH$(7)="July"
MONTH$(8)="August"
MONTH$(9)="September"
MONTH$(10)="October"
MONTH$(11)="November"
MONTH$(12)="December"

' satellite names

SATELLITE$(1)="Io"
SATELLITE$(2)="Europa"
SATELLITE$(3)="Ganymede"
SATELLITE$(4)="Callisto"

TDELAY=10

'********************************************************************

CLS
PRINT
PRINT "Program Galilean"
PRINT "(C) Copyright 1986 by David Eagle"
PRINT
PRINT "Microsoft QuickBasic Compiler"
PRINT "(C) Copyright Microsoft Corp. 1982-1987"
PRINT
CALL KEYCHECK

CLS
PRINT
PRINT
INPUT "Program introduction ( y = yes, n = no ) ";INTRO$
IF INSTR("yY",INTRO$) THEN CALL INTRODUCTION

DO
   CLS
   PRINT
   PRINT
   PRINT
   PRINT "Calendar date ( month [ 1 - 12 ], day [ 1 - 31 ], year [ YYYY ] )"
   PRINT "< NOTE: B.C. dates are negative, A.D. dates are positive >"
   PRINT "< For example, October 21, 1986 is input as 10,21,1986 >"
   INPUT MONTH%,DAY%,YEAR%
   PRINT
   PRINT "Local civil time ( hours [ 0 - 23 ], minutes [ 0 - 59 ] )"
   PRINT "< For example, 8:30 pm is input as 20,30 >"
   INPUT HOUR%,MINUTE%
   PRINT
   PRINT "Time zone ( 0 - 23 )"
   PRINT "< For example, Mountain Standard Time (MST) is time zone 7 >"
   INPUT ZONE%
   PRINT
   PRINT "Daylight Savings Time ( y = yes, n = no )"
   INPUT DST.FLAG$
   IF INSTR("yY",DST.FLAG$) THEN
      DST%=1
   ELSE
      DST%=0
   END IF

   JULIAN.DATE0=FNJDATE(MONTH%,DAY%,YEAR%)
   CALL MAIN.DRIVER

   CLS
   PRINT
   PRINT
   PRINT "Another selection ( y = yes, n = no )"
   INPUT SELECTION$
LOOP UNTIL INSTR("nN",SELECTION$)

END

'********************************************************************

SUB MAIN.DRIVER STATIC

    ' main driver subroutine

    FIRSTPASS$="TRUE"
    RESPONSE%=0
    JULIAN.DATE0=JULIAN.DATE0-1D0
    LCT$=STR$(HOUR%)+" hours "+STR$(MINUTE%)+" minutes"
    WHILE RESPONSE%<>4
      RESPONSE%=0
      WHILE RESPONSE%<=0 OR RESPONSE%>5
        CLS
        CALL SELECTION.MENU(RESPONSE%)
      WEND
      IF RESPONSE%=3 OR FIRSTPASS$="TRUE" THEN
         JULIAN.DATE0=JULIAN.DATE0+1D0
         CALL GREGORIAN.DATE(JULIAN.DATE0+.5D0)
         CALL SAT.POSITIONS
      END IF

      IF RESPONSE%=1 THEN CALL DISPLAY.DATA
      IF RESPONSE%=2 THEN CALL GRAPHICS

      FIRSTPASS$="FALSE"
    WEND

END SUB

'********************************************************************

SUB ELAPSED.DAYS(EDAYS) STATIC

    ' elapsed days subroutine

    GMT=HOUR%+MINUTE%/60D0-DST%+ZONE%
    A=(JULIAN.DATE0-2415020D0)/36525D0
    JULIAN.DATE=JULIAN.DATE0+GMT/24D0+(.41D0+1.2053D0*A+.4992D0*A^2)/1440D0
    EDAYS=JULIAN.DATE-2415020D0

END SUB

'********************************************************************

SUB SAT.POSITIONS STATIC

    ' satellite positions subroutine

    CALL ELAPSED.DAYS(D2)
    V=FNMOD(2.34974D0+.0000194756D0*D2)
    M=FNMOD(6.256586D0+.01720197D0*D2)
    N=FNMOD(3.93272126D0+.0014501127D0*D2+.00576D0*SIN(V))
    J=FNMOD(3.8684699D0+.015751909D0*D2-.00576D0*SIN(V))
    O=FNMOD(.0334405D0*SIN(M)+.000349D0*SIN(2D0*M))
    P=FNMOD(.0969007D0*SIN(N)+.0029147D0*SIN(2D0*N))
    K=FNMOD(J+O-P)
    R1=1.00014D0-.01672D0*COS(M)-.0014D0*COS(2D0*M)
    R2=5.20867D0-.25192D0*COS(N)-.0061D0*COS(2D0*N)
    D3=SQR(R1^2+R2^2-2D0*R1*R2*COS(K))
    S4=FNASN(.00047726615D0/D3)
    SEMIDIAMETER=206264.806D0*S4
    S2=R1*SIN(K)/D3
    S3=FNASN(S2)
    L1=4.154756D0+.0014502D0*D2+.00576D0*SIN(V)+P
    A=.05358D0*SIN(L1+.77667D0)
    D4=A-.03752D0*S2*COS(L1+.4189D0)-.02286D0*((R2-D3)/D3)*SIN(L1-1.73486D0)
    A=D2-D3/173.1446D0
    U(1)=FNMOD(1.475686D0+3.550102027D0*A+S3-P)
    U(2)=FNMOD(.724338D0+1.767872488D0*A+S3-P)
    U(3)=FNMOD(1.9194607D0+.876757718D0*A+S3-P)
    U(4)=FNMOD(3.07803823D0+.375036004D0*A+S3-P)
    G=FNMOD(3.269D0+.87808691D0*A)
    H=FNMOD(5.4297D0+.376454063D0*A)
    R(1)=5.9061D0-.0244D0*COS(2D0*(U(1)-U(2)))
    R(2)=9.3972D0-.0889D0*COS(2D0*(U(2)-U(3)))
    R(3)=14.9894D0-.0227D0*COS(G)
    R(4)=26.3649D0-.1944D0*COS(H)
    U(1)=FNMOD(U(1)+.0082296D0*SIN(2D0*(U(1)-U(2))))
    U(2)=FNMOD(U(2)+.018727D0*SIN(2D0*(U(2)-U(3))))
    U(3)=FNMOD(U(3)+.003037D0*SIN(G))
    U(4)=FNMOD(U(4)+.014748D0*SIN(H))
    FOR I%=1 TO 4
        X(I%)=R(I%)*SIN(U(I%))
        Y(I%)=-R(I%)*COS(U(I%))*SIN(D4)
    NEXT I%

END SUB

'********************************************************************

SUB GREGORIAN.DATE(JDATE) STATIC

    ' Gregorian Date subroutine

    IF JDATE<2299161D0 THEN
       A=JDATE
    ELSE
       A=INT((JDATE-1867216.25D0)/36524.25)
       A=JDATE+A-INT(A/4)+1D0
    END IF
    B=A+1524D0
    C=INT((B-122.1)/365.25D0)
    D=INT(365.25D0*C)
    E=INT((B-D)/30.6001D0)
    DAY%=B-D-INT(30.6001D0*E)
    IF E<13.5 THEN
       MONTH%=E-1
    ELSE
       MONTH%=E-13
    END IF

    IF MONTH%>2.5 THEN
       YEAR%=C-4716
    ELSE
       YEAR%=C-4715
    END IF

    CDATE$=MONTH$(MONTH%)+STR$(DAY%)+","+STR$(YEAR%)

END SUB

'********************************************************************

SUB SELECTION.MENU(SELECTION%) STATIC

    ' selection menu subroutine

    CLS
    PRINT
    PRINT
    PRINT "                           *** Please Note ***"
    PRINT
    PRINT
    PRINT "   After a data or graphics display page appears on the screen, it may"
    PRINT "  be saved to a printer by pressing the <Shift> <PrtSc> key combination."
    PRINT
    PRINT "   Printing a graphics screen requires that the program 'GRAPHICS.COM'"
    PRINT "      from the system disk be executed before running this program."
    PRINT
    PRINT "   The program will automatically display data or graphics screens every"
    PRINT TDELAY;"seconds. The user may manually cycle the screen by pressing any key."
    PRINT
    PRINT
    PRINT
    PRINT "Would you like to change the screen display interval ( y = yes, n = no )"
    INPUT A$
    IF INSTR("yY",A$) THEN
       PRINT
       PRINT
       INPUT "New time interval ( seconds )";TDELAY
    END IF

    CLS
    PRINT
    PRINT
    PRINT TAB(25);"Galilean Menu"
    PRINT
    PRINT
    PRINT TAB(20);"< 1 > Display Data"
    PRINT
    PRINT TAB(20);"< 2 > Graphics"
    PRINT
    PRINT TAB(20);"< 3 > Continue"
    PRINT
    PRINT TAB(20);"< 4 > End"
    PRINT
    PRINT
    PRINT "Selection"
    INPUT SELECTION%

END SUB

'********************************************************************

SUB DISPLAY.DATA STATIC

    ' display data subroutine

    CLS
    PRINT
    PRINT TAB(5);"Calendar date";TAB(60-LEN(CDATE$));CDATE$
    PRINT
    PRINT TAB(5);"Local civil time";TAB(60-LEN(LCT$));LCT$
    PRINT
    PRINT TAB(5);"Julian Date";
    PRINT TAB(48);
    PRINT USING "########.###";JULIAN.DATE
    PRINT
    PRINT TAB(5);"Semidiameter ( arc seconds )";
    PRINT TAB(48);
    PRINT USING "########.###";SEMIDIAMETER
    PRINT
    PRINT
    PRINT TAB(5);"Satellite       X-position       Y-position       Angle"
    PRINT TAB(5);"---------       ----------       ----------       -----"
    FOR I%=1 TO 4
        A$=STR$(INT(U(I%)*RTD))
        PRINT
        PRINT TAB(5);SATELLITE$(I%);
        PRINT TAB(22);
        PRINT USING "###.###";X(I%);
        PRINT TAB(39);
        PRINT USING "###.###";Y(I%);
        PRINT TAB(59-LEN(A$));A$
    NEXT I%

    TDELAY=20
    CALL KEYCHECK

END SUB

'********************************************************************

SUB GRAPHICS STATIC

    ' graphics subroutine

    SCREEN 2

    PRINT
    PRINT TAB(5);CDATE$;
    PRINT TAB(75-LEN(LCT$));LCT$
    PRINT TAB(38);"North"
    LOCATE 9,1
    PRINT TAB(70);"West"
    A$="JUPITER"
    LOCATE 5,1
    FOR J%=1 TO 7
        PRINT TAB(40);MID$(A$,J%,1)
    NEXT J%
    CIRCLE (315,110),10
    PAINT (315,110)
    LOCATE 16,1
    FOR I%=1 TO 4
        X=315+10*X(I%)
        Y=110-4.4444*Y(I%)
        S$="^ "+SATELLITE$(I%)
        CIRCLE (X,Y),5
        PAINT (X,Y)
        IF (X+LEN(S$))>550 THEN
           S$=SATELLITE$(I%)+" ^"
           X=X-7*LEN(S$)
        END IF
        PRINT TAB(X/8);S$
    NEXT I%

    A=TIMER
    B=TIMER+TDELAY
    A$=""

    WHILE A$="" AND A<B
      A=TIMER
      A$=INKEY$
    WEND

    SCREEN 0

END SUB

'********************************************************************

SUB INTRODUCTION STATIC

    ' program introduction subroutine

    CLS
    TDELAY=30

    PRINT
    PRINT
    PRINT TAB(4);"GALILEAN is an interactive QuickBASIC program which can be"
    PRINT TAB(4);"used to determine the position of the Galilean satellites"
    PRINT TAB(4);"relative to Jupiter. This information is useful for such"
    PRINT TAB(4);"activities as astronomical observations, astrophotography"
    PRINT TAB(4);"and the study of occultations between the moons."
    PRINT
    PRINT TAB(4);"This program provides the position of each of the four"
    PRINT TAB(4);"Galilean moons in the units of the radius of Jupiter. The"
    PRINT TAB(4);"x-position of each satellite is measured positive west of"
    PRINT TAB(4);"Jupiter and the y-position is measured positive north."
    PRINT TAB(4);"It also calculates the 'position angle' of each satellite."
    PRINT TAB(4);"This angle helps determine if any of the satellites are"
    PRINT TAB(4);"in front of or behind Jupiter. A position angle near 0"
    PRINT TAB(4);"or 360 degrees is called 'inferior conjunction' and an"
    PRINT TAB(4);"angle near 180 degrees is called 'superior conjunction'."
    PRINT TAB(4);"A satellite is in front of Jupiter at inferior conjunction"
    PRINT TAB(4);"and behind Jupiter at superior conjunction."
    CALL KEYCHECK

    CLS
    PRINT
    PRINT
    PRINT TAB(4);"Inputs required by program 'GALILEAN' include the user's"
    PRINT TAB(4);"observation date, the local time and time zone. The user"
    PRINT TAB(4);"must also specify if Daylight Savings Time is in effect."
    PRINT TAB(4);"The date is input in numerical format and the local time"
    PRINT TAB(4);"in 24 hour format. The time zone will be an integer number"
    PRINT TAB(4);"between 0 and 23."
    PRINT
    PRINT TAB(4);"The 'Galilean Menu' will allow the user to display the"
    PRINT TAB(4);"data and/or graphics for the selected date. The 'Continue'"
    PRINT TAB(4);"selection of this menu will calculate the information for"
    PRINT TAB(4);"the next day. The user can then choose to display data or"
    PRINT TAB(4);"and/or graphics for the new date. Please note that you can"
    PRINT TAB(4);"print the data or graphics screen by pressing the <Shift>"
    PRINT TAB(4);"<PrtSc> keys. The 'End' selection of the 'Galilean Menu'"
    PRINT TAB(4);"will allow you to end the current session and select a new"
    PRINT TAB(4);"date and/or time."
    CALL KEYCHECK
END SUB

'********************************************************************

SUB KEYCHECK STATIC

    ' check user response subroutine

    PRINT
    PRINT
    PRINT TAB(20);"< press any key to continue >"

    A=TIMER
    B=TIMER+TDELAY
    A$=""

    WHILE A$="" AND A<B
      A=TIMER
      A$=INKEY$
    WEND

END SUB

```

## GLIDER.BAS

```bas
' PROGRAM "GLIDER"

' COPYRIGHT (C) 1982 BY DAVID EAGLE

' PUBLIC DOMAIN FOR IBM-PC ON AUGUST 20, 1986

' IBM-PC  << QUICKBASIC COMPILER VERSION 3.0 >>

' DETERMINES MAXIMUM RANGE AND MAXIMUM ENDURANCE
' FLIGHT PERFORMANCE OF GLIDERS, SAILPLANES, ETC.

' GLIDE SPEED, METERS PER SECOND
' GLIDE ANGLE, DEGREES
' HORIZONTAL RANGE, METERS
' RATE-OF-DESCENT, METERS PER MINUTE
' LIFT-TO-DRAG RATIO, NON-DIMENSIONAL

'*********************************************************

DEFDBL A-Z

DEF FNA(X)=(1D0-2.2556913D-5*X)^4.256116D0

CONST PI=3.14159265D0
CONST RHOSL=1.22557D0
CONST GRAVITY=9.80665D0
CONST RTD=180D0/PI

CLS
PRINT
PRINT
PRINT "Program GLIDER"
PRINT "(C) Copyright 1982 by David Eagle"
PRINT
PRINT "Microsoft QuickBASIC Compiler"
PRINT "(C) Copyright Microsoft Corp. 1982-1987"
PRINT
CALL KEYCHECK

CLS
PRINT
PRINT
INPUT "Introduction ( y = yes, n = no ) ";A$
IF INSTR("yY",A$) THEN CALL INTRO

DO
   CLS
   PRINT
   PRINT TAB(33);"Program GLIDER"
   PRINT
   PRINT
   PRINT "Launch site altitude ( meters )"
   INPUT ALTSITE
   PRINT
   PRINT "Launch site temperature ( degrees F )"
   INPUT TEMPSITE

   ' DETERMINE LAUNCH SITE AMBIENT DENSITY

   RHOSITE=RHOSL*FNA(ALTSITE)/(1D0+(TEMPSITE-59D0)/518.67D0)

   ' REQUEST USER INPUTS

   PRINT
   PRINT "Flight altitude ( meters )"
   INPUT ALTITUDE
   PRINT
   PRINT "Wingspan ( centimeters )"
   INPUT WINGSPAN
   WINGSPAN=.01D0*WINGSPAN
   PRINT
   PRINT "Wing area ( square centimeters )"
   INPUT WINGAREA
   WINGAREA=.0001D0*WINGAREA
   PRINT
   PRINT "Mass ( grams )"
   INPUT MASS
   MASS=.001D0*MASS
   PRINT
   PRINT "Zero-lift drag coefficient ( non-dimensional )"
   INPUT CD0
   PRINT
   PRINT "Efficieny factor ( non-dimensional )"
   INPUT EFACTOR

   ' COMPUTE ASPECT RATIO, EFFICIENCY PARAMETER, DENSITY AND WEIGHT

   ASPECT=WINGSPAN*WINGSPAN/WINGAREA
   K1=PI*ASPECT*EFACTOR
   RHO=RHOSITE*FNA(ALTITUDE)
   WEIGHT=GRAVITY*MASS

   ' DETERMINE MAXIMUM RANGE FLIGHT CONDITIONS

   LIFT1=SQR(CD0*K1)
   DRAG1=2D0*CD0
   GANGLE1=ATN(DRAG1/LIFT1)
   GSPEED1=SQR(2D0*WEIGHT*COS(GANGLE1)/(RHO*WINGAREA*LIFT1))
   ROD1=GSPEED1*SIN(GANGLE1)
   RANGE1=ALTITUDE/TAN(GANGLE1)

   ' DETERMINE MAXIMUM ENDURANCE FLIGHT CONDITIONS

   LIFT2=SQR(3D0*K1*CD0)
   DRAG2=4D0*CD0
   GANGLE2=ATN(DRAG2/LIFT2)
   GSPEED2=SQR(2D0*WEIGHT*COS(GANGLE2)/(RHO*WINGAREA*LIFT2))
   ROD2=GSPEED2*SIN(GANGLE2)
   RANGE2=ALTITUDE/TAN(GANGLE2)

   ' PRINT RESULTS

   CLS
   PRINT
   PRINT
   PRINT TAB(25);"MAXIMUM RANGE GLIDE CONDITIONS"
   PRINT
   PRINT
   CALL PDATA(GANGLE1,GSPEED1,ROD1,RANGE1,LIFT1,DRAG1)

   CLS
   PRINT
   PRINT
   PRINT TAB(23);"MAXIMUM ENDURANCE GLIDE CONDITIONS"
   PRINT
   PRINT
   CALL PDATA(GANGLE2,GSPEED2,ROD2,RANGE2,LIFT2,DRAG2)

   CLS
   PRINT
   PRINT
   INPUT "Another selection ( y = yes, n = no ) ";A$
   IF INSTR("nN",A$) THEN EXIT DO
LOOP

END

'*********************************************************

SUB PDATA(GANGLE,GSPEED,ROD,RANGE,LIFT,DRAG) STATIC

    ' PRINT SUBROUTINE

    FORMAT$="#######.####"

    PRINT
    PRINT TAB(5);"Glide speed          ( meters per second )";
    PRINT USING FORMAT$;TAB(55);GSPEED
    PRINT
    PRINT TAB(5);"Glide angle          ( degrees )";
    PRINT USING FORMAT$;TAB(55);GANGLE*RTD
    PRINT
    PRINT
    PRINT TAB(5);"Horizontal range     ( meters )";
    PRINT USING FORMAT$;TAB(55);RANGE
    PRINT
    PRINT TAB(5);"Rate-of-descent      ( meters per minutes )";
    PRINT USING FORMAT$;TAB(55);60D0*ROD
    PRINT
    PRINT
    PRINT TAB(5);"Lift-to-Drag ratio   ( non-dimensional )";
    PRINT USING FORMAT$;TAB(55);LIFT/DRAG
    PRINT
    CALL KEYCHECK

END SUB

'*********************************************************

SUB INTRO STATIC

    ' DOCUMENTATION SUBROUTINE

    CLS
    PRINT
    PRINT
    PRINT "     PROGRAM 'GLIDER' IS AN INTERACTIVE BASIC COMPUTER PROGRAM WHICH CAN BE USED";
    PRINT "TO DETERMINE BOTH THE MAXIMUM RANGE AND MAXIMUM ENDURANCE FLIGHT CONDITIONS FOR";
    PRINT "MODEL ROCKET BOOST GLIDERS. THESE ARE THE FLIGHT CONDITIONS WHEN THE GLIDER";
    PRINT "WILL FLY THE FARTHEST OR STAY IN THE AIR THE LONGEST TIME. THE 'GLIDER' SOFTWARE";
    PRINT "COMPENSATES FOR THE VARIATION IN DENSITY AT THE INITIAL GLIDE ALTITUDE AND 'NON-";
    PRINT "STANDARD' FLYING CONDITIONS SUCH AS HOT OR COLD DAYS OR FLYING SITES WHICH ARE";
    PRINT "NOT AT SEA LEVEL. THESE UNIQUE FEATURES WILL PROVIDE THE USER WITH AN ACCURATE";
    PRINT "PREDICTION OF THE MOTION OF GLIDERS."
    PRINT
    PRINT "     PROGRAM 'GLIDER' WILL PROMPT THE USER FOR SEVERAL INPUTS NECESSARY FOR THE";
    PRINT "SOFTWARE TO WORK PROPERLY. THIS IS A DESCRIPTION OF THESE REQUESTS AND A SHORT";
    PRINT "DISCUSSION OF HOW THE USER SHOULD RESPOND.";
    CALL KEYCHECK
    CLS
    PRINT
    PRINT "     LAUNCH SITE ALTITUDE ( METERS )"
    PRINT
    PRINT "THE USER RESPONSE SHOULD BE THE ALTITUDE AT THE FLYING SITE IN METERS. FLYING";
    PRINT "SITES ABOVE SEA LEVEL ARE POSITIVE AND THOSE BELOW SEA LEVEL ARE NEGATIVE."
    PRINT
    PRINT "     LAUNCH SITE TEMPERATURE ( DEGREES F )"
    PRINT
    PRINT "THE RESPONSE TO THIS REQUEST SHOULD BE THE TEMPERATURE AT THE FLYING SITE IN";
    PRINT "DEGREES FAHRENHEIT."
    PRINT
    PRINT "     FLIGHT ALTITUDE ( METERS )"
    PRINT
    PRINT "AT THIS POINT THE USER SHOULD INPUT THE INITIAL FLIGHT ALTITUDE OF THE GLIDER IN";
    PRINT "METERS. THIS IS THE ALTITUDE ABOVE THE FLYING SITE WHEN THE GLIDE BEGINS."
    PRINT
    PRINT "     WINGSPAN ( CENTIMETERS )"
    PRINT
    PRINT "THE USER SHOULD RESPOND WITH THE WINGSPAN OF THE GLIDER IN CENTIMETERS. THIS";
    PRINT "IS THE DISTANCE FROM WINGTIP TO WINGTIP."
    CALL KEYCHECK
    CLS
    PRINT
    PRINT "     WING AREA ( SQUARE CENTIMETERS )"
    PRINT
    PRINT "THE USER SHOULD INPUT THE WING AREA OF THE GLIDER IN SQUARE CENTIMETERS."
    PRINT
    PRINT "     MASS ( GRAMS )"
    PRINT
    PRINT "THE RESPONSE TO THIS REQUEST SHOULD BE THE MASS OF THE GLIDER IN GRAMS."
    PRINT
    PRINT "     ZERO-LIFT DRAG COEFFICIENT ( NON-DIMENSIONAL )"
    PRINT
    PRINT "THE USER SHOULD INPUT THE 'NO-LIFT' DRAG COEFFICIENT. THIS IS THE PLANFORM DRAG";
    PRINT "COEFFICIENT WHICH IS USUALLY DETERMINED FROM WIND TUNNEL TESTS. TYPICAL VALUES";
    PRINT "RANGE FROM .01 TO .05."
    PRINT
    PRINT "     EFFICIENCY FACTOR ( NON-DIMENSIONAL )"
    PRINT
    PRINT "THIS IS A NON-DIMENSIONAL NUMBER WHICH MUST BE DETERMINED FROM WIND TUNNEL TEST";
    PRINT "OR ESTIMATED NUMERICALLY. TYPICAL VALUES RANGE FROM .6 TO .9."
    PRINT
    CALL KEYCHECK
    CLS
    PRINT
    PRINT
    PRINT "     AFTER THE PROGRAM HAS RUN, IT WILL ASK THE USER FOR ANOTHER SELECTION. THE";
    PRINT "USER SHOULD RESPOND WITH 'Y' IF HE OR SHE DESIRES THE SELECTION OR 'N' IF NOT."
    PRINT
    PRINT "     ANOTHER SELECTION ( Y = YES, N = NO ) ?"
    PRINT
    PRINT "THE USER SHOULD RESPOND WITH 'N' TO EXIT THE PROGRAM."
    PRINT
    CALL KEYCHECK
    CLS
    PRINT
    PRINT "     PROGRAM 'GLIDER' OUTPUTS DATA ABOUT BOTH THE MAXIMUM RANGE AND MAXIMUM";
    PRINT "ENDURANCE FLIGHT CONDITIONS OF THE BOOST GLIDER. THIS INFORMATION INCLUDES THE";
    PRINT "GLIDE SPEED AND ANGLE, THE HORIZONTAL RANGE AND RATE-OF-DESCENT AND THE GLIDER";
    PRINT "LIFT-TO-DRAG RATIO. THE GLIDE SPEED IS PRINTED IN METERS PER SECOND AND THE";
    PRINT "RATE-OF-DESCENT IS IN METERS PER MINUTE. THE HORIZONTAL RANGE IS GIVEN IN METERS";
    PRINT "AND THE GLIDE ANGLE IS IN DEGREES. THE LIFT-TO-DRAG RATIO IS NON-DIMENSIONAL."
    PRINT
    PRINT "     FOR USERS WHO MAY WANT TO SEE OTHER VARIABLES COMPUTED BY THE SOFTWARE,";
    PRINT "'RHOSITE' IS THE AMBIENT DENSITY AT THE FLYING SITE AND 'RHO' IS THE DENSITY";
    PRINT "AT THE INITIAL FLIGHT ALTITUDE. THE ASPECT RATIO OF THE GLIDER IS COMPUTED IN";
    PRINT "THE VARIABLE 'ASPECT'.";
    CALL KEYCHECK

END SUB

'*********************************************************

SUB KEYCHECK STATIC

    ' CHECK USER RESPONSE SUBROUTINE

    PRINT
    PRINT
    PRINT TAB(25);"< press any key to continue >"

    A$=""
    WHILE A$=""
      A$=INKEY$
    WEND

END SUB
```

## J2000.BAS

```bas
' Program  "J2000"

' copyright (C) 1986 by David Eagle

' public domain on November 14, 1986

' IBM-PC  << QuickBASIC Compiler Version 3.0 >>

' conversion of stellar positions, proper motions, parallax and
' radial velocity from the standard epoch B1950 (FK4) to J2000 (FK5)
' reference: Astronomical Almanac, 1985, page X

'***************************************************************

OPTION BASE 1
DEFDBL A-Z

DIM A1(3),A2(3),UPV(3),UVV(3),R1(3),R2(6),R3(6),V2(3),M(6,6)

COMMON SHARED RAS.HR.1950,RAS.MIN.1950,RAS.SEC.1950
COMMON SHARED DEC.DEG.1950,DEC.MIN.1950,DEC.SEC.1950
COMMON SHARED RAS.PMOTION.1950,DEC.PMOTION.1950
COMMON SHARED PARALLAX.1950,RADIALV.1950

COMMON SHARED RAS.HR.2000,RAS.MIN.2000,RAS.SEC.2000
COMMON SHARED DEC.DEG.2000,DEC.MIN.2000,DEC.SEC.2000
COMMON SHARED RAS.PMOTION.2000,DEC.PMOTION.2000
COMMON SHARED PARALLAX.2000,RADIALV.2000

CONST PI=3.141592653589793D0
CONST PIDIV2=.5D0*PI
CONST DTR=PI/180D0
CONST RTD=180D0/PI
CONST XE=PI/12D0
CONST XER=12D0/PI

A1(1)=-.00000162557D0
A1(2)=-.00000031919D0
A1(3)=-.00000013843D0
A2(1)=.001244D0
A2(2)=-.001579D0
A2(3)=-.00066D0

' define elements of transformation matrix

M(1,1)=.9999256782D0
M(1,2)=-.0111820611D0
M(1,3)=-.0048579477D0
M(1,4)=.00000242395018D0
M(1,5)=-.00000002710663D0
M(1,6)=-.00000001177656D0
M(2,1)=.011182061D0
M(2,2)=.9999374784D0
M(2,3)=-.0000271765D0
M(2,4)=.00000002710663D0
M(2,5)=.00000242397878D0
M(2,6)=-.00000000006587D0
M(3,1)=.0048579479D0
M(3,2)=-.0000271474D0
M(3,3)=.9999881997D0
M(3,4)=.00000001177656D0
M(3,5)=-.00000000006582D0
M(3,6)=.00000242410173D0
M(4,1)=-.000551D0
M(4,2)=-.238565D0
M(4,3)=.435739D0
M(4,4)=.99994704D0
M(4,5)=-.01118251D0
M(4,6)=-.00485767D0
M(5,1)=.238514D0
M(5,2)=-.002667D0
M(5,3)=-.008541D0
M(5,4)=.01118251D0
M(5,5)=.99995883D0
M(5,6)=-.00002718D0
M(6,1)=-.435623D0
M(6,2)=.012254D0
M(6,3)=.002117D0
M(6,4)=.00485767D0
M(6,5)=-.00002714D0
M(6,6)=1.00000956D0

' initialization

CLS
PRINT
PRINT "Program J2000"
PRINT "(C) Copyright 1986 by David Eagle"
PRINT
PRINT "Microsoft QuickBASIC Compiler"
PRINT "(C) Copyright Microsoft Corp. 1982-1987"
PRINT
CALL KEYCHECK

CLS
PRINT
PRINT
PRINT "Program introduction ( y = yes, n = no )"
INPUT INTRO$
IF INSTR("yY",INTRO$) THEN CALL INTRODUCTION

' main program loop

DO
CLS
PRINT
PRINT
PRINT "Right ascension with respect to 1950"
PRINT "( hours [ 0 - 23 ], minutes [ 0 - 59 ], seconds [ 0 - 59 ] )"
INPUT RAS.HR.1950,RAS.MIN.1950,RAS.SEC.1950
PRINT
PRINT "Declination with respect to 1950"
PRINT "( degrees [ -90 to +90 ], minutes [ 0 - 59 ], seconds [ 0 - 59 ] )"
INPUT DEC.DEG.1950,DEC.MIN.1950,DEC.SEC.1950
PRINT
PRINT "Right ascension proper motion with respect to 1950"
PRINT "( arc seconds per tropical century )"
INPUT RAS.PMOTION.1950
PRINT
PRINT "Declination proper motion with respect to 1950"
PRINT "( arc seconds per tropical century )"
INPUT DEC.PMOTION.1950
PRINT
PRINT "Parallax with respect to 1950 ( arc seconds )"
INPUT PARALLAX.1950
PRINT
PRINT "Radial velocity with respect to 1950 ( kilometers per second )"
INPUT RADIALV.1950

' convert 1950 right ascension and declination to radians

RAS.1950=XE*(RAS.HR.1950+RAS.MIN.1950/60D0+RAS.SEC.1950/3600D0)
DEC.1950=DTR*SGN(DEC.DEG.1950)*(ABS(DEC.DEG.1950)+(DEC.MIN.1950*60D0+DEC.SEC.1950)/3600D0)

' calculate unit position vector

UPV(1)=COS(RAS.1950)*COS(DEC.1950)
UPV(2)=SIN(RAS.1950)*COS(DEC.1950)
UPV(3)=SIN(DEC.1950)

K1=21.095D0*RADIALV.1950*PARALLAX.1950

' calculate unit velocity vector

UVV(1)=-RAS.PMOTION.1950*SIN(RAS.1950)*COS(DEC.1950)-DEC.PMOTION.1950*COS(RAS.1950)*SIN(DEC.1950)+K1*UPV(1)
UVV(2)=RAS.PMOTION.1950*COS(RAS.1950)*COS(DEC.1950)-DEC.PMOTION.1950*SIN(RAS.1950)*SIN(DEC.1950)+K1*UPV(2)
UVV(3)=DEC.PMOTION.1950*COS(DEC.1950)+K1*UPV(3)

' E-term constants

K2=A1(1)*UPV(1)+A1(2)*UPV(2)+A1(3)*UPV(3)
K3=A2(1)*UPV(1)+A2(2)*UPV(2)+A2(3)*UPV(3)

FOR I%=1 TO 3
    R1(I%)=UPV(I%)-A1(I%)+K2*UPV(I%)
    R2(I%)=R1(I%)
    V2(I%)=UVV(I%)-A2(I%)+K3*UPV(I%)
    R2(I%+3)=V2(I%)
NEXT I%

' matrix multiplication

FOR I%=1 TO 6
    A=0D0
    FOR J%=1 TO 6
        A=A+M(I%,J%)*R2(J%)
    NEXT J%
    R3(I%)=A
NEXT I%

RM.2000=SQR(R3(1)^2+R3(2)^2+R3(3)^2)

' compute declination wrt J2000

CALL ARCSIN(R3(3)/RM.2000,B)
CALL CONVERT(B*RTD,DEC.DEG.2000,DEC.MIN.2000,DEC.SEC.2000)

' compute right ascension wrt J2000

CALL ATAN3(R3(2),R3(1),C)
CALL CONVERT(C*XER,RAS.HR.2000,RAS.MIN.2000,RAS.SEC.2000)

K4=R3(1)^2+R3(2)^2

' compute proper motions wrt J2000

RAS.PMOTION.2000=(R3(1)*R3(5)-R3(2)*R3(4))/K4
DEC.PMOTION.2000=(R3(6)*K4-R3(3)*(R3(1)*R3(4)+R3(2)*R3(5)))/(RM.2000^2*SQR(K4))

' compute parallax and radial velocity wrt J2000

IF PARALLAX.1950=0D0 THEN
  RADIALV.2000=RADIALV.1950
ELSE
  RADIALV.2000=(R3(1)*R3(4)+R3(2)*R3(5)+R3(3)*R3(6))/(21.095D0*PARALLAX.1950*RM.2000)
END IF

PARALLAX.2000=PARALLAX.1950/RM.2000

CALL DISPLAY.DATA

CLS
PRINT
PRINT
PRINT "Another selection ( y = yes, n = no )"
INPUT SELECTION$
LOOP UNTIL INSTR("nN",SELECTION$)

END


'***************************************************************

SUB CONVERT(DEG,HR,MIN,SEC) STATIC

    ' convert degrees to hms or dms subroutine

    HR=FIX(DEG)
    C=ABS(HR-DEG)*60D0
    MIN=INT(C)
    D=(C-MIN)*60D0
    SEC=INT(D+.5D0)

END SUB

'***************************************************************

SUB DISPLAY.DATA STATIC

    ' display data subroutine

    FORMAT$="########.###"

    CLS
    PRINT
    PRINT TAB(24);"* 1950 < FK4 > *"
    PRINT
    a$=STR$(RAS.HR.1950)+" hours"+STR$(RAS.MIN.1950)+" minutes"+STR$(RAS.SEC.1950)+" seconds"
    PRINT TAB(5);"Right ascension";TAB(60-LEN(a$));a$
    a$=STR$(DEC.DEG.1950)+" degrees"+STR$(DEC.MIN.1950)+" minutes"+STR$(DEC.SEC.1950)+" seconds"
    PRINT TAB(5);"Declination";TAB(60-LEN(a$));a$
    PRINT
    PRINT TAB(5);"Right ascension proper motion";
    PRINT USING FORMAT$;TAB(48);RAS.PMOTION.1950
    PRINT TAB(5);"Declination proper motion";
    PRINT USING FORMAT$;TAB(48);DEC.PMOTION.1950
    PRINT
    PRINT TAB(5);"Parallax        (arc seconds)";
    PRINT USING FORMAT$;TAB(48);PARALLAX.1950
    PRINT TAB(5);"Radial velocity (kilometers per second)";
    PRINT USING FORMAT$;TAB(48);RADIALV.1950
    PRINT
    PRINT TAB(24);"* 2000 < FK5 > *"
    PRINT
    a$=STR$(RAS.HR.2000)+" hour"+STR$(RAS.MIN.2000)+" minutes"+STR$(RAS.SEC.2000)+" seconds"
    PRINT TAB(5);"Right ascension";TAB(60-LEN(a$));a$
    a$=STR$(DEC.DEG.2000)+" degrees"+STR$(DEC.MIN.2000)+" minutes"+STR$(DEC.SEC.2000)+" seconds"
    PRINT TAB(5);"Declination";TAB(60-LEN(a$));a$
    PRINT
    PRINT TAB(5);"Right ascension proper motion";
    PRINT USING FORMAT$;TAB(48);RAS.PMOTION.2000
    PRINT TAB(5);"Declination proper motion";
    PRINT USING FORMAT$;TAB(48);DEC.PMOTION.2000
    PRINT
    PRINT TAB(5);"Parallax        (arc seconds)";
    PRINT USING FORMAT$;TAB(48);PARALLAX.2000
    PRINT TAB(5);"Radial velocity (kilometers per second)";
    PRINT USING FORMAT$;TAB(48);RADIALV.2000
    CALL KEYCHECK

END SUB

'***************************************************************

SUB ATAN3(SINANGLE,COSANGLE,ANGLE) STATIC

    ' four quadrant inverse tangent subroutine

    IF ABS(SINANGLE)<1D-08 THEN
       ANGLE=(1-SGN(COSANGLE))*PIDIV2
       EXIT SUB
    END IF

       ANGLE=(2-SGN(SINANGLE))*PIDIV2

    IF ABS(COSANGLE)<1D-08 THEN
      EXIT SUB
    ELSE
      ANGLE=ANGLE+SGN(SINANGLE)*SGN(COSANGLE)*(ABS(ATN(SINANGLE/COSANGLE))-PIDIV2)
    END IF

END SUB

'***************************************************************

SUB ARCSIN(SINANGLE,ANGLE) STATIC

    ' inverse sine subroutine

    IF ABS(SINANGLE)>=1 THEN
       ANGLE=SGN(SINANGLE)*PIDIV2
    ELSE
       ANGLE=ATN(SINANGLE/SQR(1-SINANGLE^2))
    END IF

END SUB

'***************************************************************

SUB INTRODUCTION STATIC

    ' program introduction subroutine

    CLS
    PRINT
    PRINT TAB(10);"J2000 is an interactive QuickBASIC program which can be"
    PRINT TAB(10);"used to convert stellar positions, proper motions,"
    PRINT TAB(10);"parallax and radial velocity from the standard epoch"
    PRINT TAB(10);"B1950 (FK4) to J2000 (FK5). The method used in this"
    PRINT TAB(10);"program is based on the algorithm published in the 1985"
    PRINT TAB(10);"edition of the Astronomical Almanac, Addendum to Section"
    PRINT TAB(10);"B, page X. This technique is an approximation because"
    PRINT TAB(10);"it does not account for systematic and individual star"
    PRINT TAB(10);"corrections between the FK4 and FK5 epochs."
    PRINT
    PRINT TAB(10);"J2000 will first request the right ascension, declination,"
    PRINT TAB(10);"right ascension proper motion, declination proper motion,"
    PRINT TAB(10);"parallax and radial velocity of a stellar object with"
    PRINT TAB(10);"respect to the 1950 (FK4) epoch. Each program prompt will"
    PRINT TAB(10);"advise you of the proper units to input. If you do not"
    PRINT TAB(10);"have a number for proper motion or parallax or radial"
    PRINT TAB(10);"velocity, then input '0' for any of these values."
    CALL KEYCHECK

END SUB

'***************************************************************

SUB KEYCHECK STATIC

    ' check user response subroutine

    PRINT
    PRINT
    PRINT TAB(20);"< press any key to continue >";

    A$=""
    WHILE A$=""
      A$=INKEY$
    WEND

END SUB

```

## KEPLER.BAS

```bas
' PROGRAM "KEPLER"

' NUMERICAL SOLUTION OF KEPLER'S EQUATION FOR
' ELLIPTIC, PARABOLIC AND HYPERBOLIC ORBITS

' PUBLIC DOMAIN

' IBM-PC  << QUICKBASIC COMPILER VERSION 3.0 >>

DEFDBL A-Z

CONST PI=3.14159265D0
CONST RTD=180/PI
CONST DTR=PI/180

COMMON SHARED ECC,MANOM.RAD,EANOM.RAD

'**********************************************************

CLS
PRINT
PRINT
PRINT "Program KEPLER"
PRINT
PRINT "Microsoft QuickBASIC Compiler"
PRINT "(C) Copyright Microsoft Corp. 1982-1987"
PRINT
CALL KEYCHECK

CLS
PRINT
PRINT
PRINT "Program introduction ( y = yes, n = no )"
INPUT A$
IF INSTR("yY",A$) THEN CALL INTRODUCTION

DO
   CLS
   PRINT
   PRINT
   PRINT TAB(15); "Kepler's Equation"
   PRINT
   PRINT
   PRINT "Mean anomaly ( degrees [ 0 - 360 ] )"
   INPUT MANOM.DEG
   MANOM.RAD=DTR*MANOM.DEG
   PRINT
   PRINT "Orbital eccentricity ( non-dimensional )"
   INPUT ECC

   IF ECC<>0D0 THEN
      CALL KEPLER
   ELSE
      EANOM.RAD=MANOM.RAD
   END IF

   ' PRINT RESULTS

   FORMAT$="####.######"

   CLS
   PRINT
   PRINT
   PRINT TAB(22);"Kepler's Equation"
   PRINT
   PRINT
   PRINT TAB(5);"Eccentricity       ( non-dimensional )";TAB(45);
   PRINT USING FORMAT$;ECC
   PRINT
   PRINT TAB(5);"Mean anomaly       ( degrees )";TAB(45);
   PRINT USING FORMAT$;MANOM.DEG
   PRINT
   IF ECC<1 THEN PRINT TAB(5);"Eccentric anomaly  ( degrees )";TAB(45);
   IF ECC=1 THEN PRINT TAB(5);"Parabolic anomaly  ( degrees )";TAB(45);
   IF ECC>1 THEN PRINT TAB(5);"Hyperbolic anomaly ( degrees )";TAB(45);
   PRINT USING FORMAT$;EANOM.RAD*RTD
   CALL KEYCHECK

   CLS
   PRINT
   PRINT
   PRINT "Another selection ( y = yes, n = no )"
   INPUT SELECTION$
LOOP UNTIL INSTR("nN",SELECTION$)

END

'**********************************************************

SUB KEPLER STATIC

    ' KEPLER'S EQUATION SUBROUTINE

    EANOM.RAD=LOG(2*MANOM.RAD/ECC+1.8D0)
    IF ECC<1D0 THEN CALL ESTIMATE

    DO
       IF ECC<1D0 THEN L=ECC*SIN(EANOM.RAD)
       IF ECC>=1D0 THEN L=.5D0*ECC*(EXP(EANOM.RAD)-EXP(-EANOM.RAD))

       IF ECC<1D0 THEN M=EANOM.RAD-L-MANOM.RAD
       IF ECC>=1D0 THEN M=L-EANOM.RAD-MANOM.RAD

       IF ABS(M)<=1D-8 THEN EXIT DO

       IF ECC<1D0 THEN P=ECC*COS(EANOM.RAD)
       IF ECC>=1D0 THEN P=.5D0*ECC*(EXP(EANOM.RAD)+EXP(-EANOM.RAD))
       IF ECC<1D0 THEN Q=1D0-P
       IF ECC>=1D0 THEN Q=P-1D0

       R=-M/Q
       R=-M/(Q+.5D0*R*L)
       R=-M/(Q+.5D0*R*L+R*R*P/6D0)
       R=-M/(Q+.5D0*R*L+R*R*P/6D0-R*R*R*L/24D0)
       EANOM.RAD=EANOM.RAD+R
    LOOP

END SUB

'**********************************************************

SUB ESTIMATE STATIC

    ' EMPIRICAL ESTIMATE SUBROUTINE

    A=ECC^2
    B=MANOM.RAD^2

    EANOM.RAD=A*(-.0579437D0*B+.02665324D0*MANOM.RAD+.05868658D0)
    EANOM.RAD=EANOM.RAD+ECC*(-.19174923D0*B+.46905672D0*MANOM.RAD+.600725329D0)
    EANOM.RAD=EANOM.RAD-.04987627D0*B+1.17552263D0*MANOM.RAD-.12324871D0

END SUB

'**********************************************************

SUB INTRODUCTION STATIC

    ' INTRODUCTION SUBROUTINE

    CLS
    PRINT
    PRINT TAB(10);"PROGRAM 'KEPLER' IS AN INTERACTIVE BASIC"
    PRINT TAB(10);"PROGRAM WHICH CAN BE USED TO SOLVE"
    PRINT TAB(10);"KEPLER'S EQUATION. THE ORBITAL MOTION"
    PRINT TAB(10);"OF SATELLITES, COMETS AND ALL CELESTIAL"
    PRINT TAB(10);"BODIES CAN BE DETERMINED FROM KEPLER'S"
    PRINT TAB(10);"EQUATION. THIS EQUATION IS WRITTEN AS"
    PRINT
    PRINT TAB(10);"       M = E - e SIN E "
    PRINT
    PRINT TAB(10);"FOR ELLIPTIC ORBITS OR"
    PRINT
    PRINT TAB(10);"       M = e SINH F - F"
    PRINT
    PRINT TAB(10);"FOR PARABOLIC OR HYPERBOLIC ORBITS."
    PRINT
    PRINT TAB(10);"KEPLER'S EQUATION IS A TRANSCENDENTAL"
    PRINT TAB(10);"EQUATION WHICH IS USUALLY SOLVED WITH"
    PRINT TAB(10);"AN ITERATIVE NUMERICAL METHOD."
    CALL KEYCHECK

    CLS
    PRINT
    PRINT TAB(10);"   IN BOTH OF THESE EQUATIONS, 'M'"
    PRINT TAB(10);"IS CALLED THE 'MEAN ANOMALY' AND 'E'"
    PRINT TAB(10);"IS CALLED THE 'ORBITAL ECCENTRICITY'."
    PRINT TAB(10);"IN THE FIRST EQUATION, 'E' IS CALLED"
    PRINT TAB(10);"THE 'ECCENTRIC ANOMALY' WHILE IN THE"
    PRINT TAB(10);"SECOND EQUATION 'F' IS CALLED THE"
    PRINT TAB(10);"'PARABOLIC' OR 'HYPERBOLIC' ANOMALY."
    PRINT
    PRINT TAB(10);"THE TRIG FUNCTION 'SINH' IN THE SECOND"
    PRINT TAB(10);"EQUATION IS THE HYPERBOLIC SINE."
    PRINT
    PRINT TAB(10);"   THE TYPE OF ORBIT IS DETERMINED"
    PRINT TAB(10);"BY THE ECCENTRICITY."
    PRINT
    PRINT TAB(10);"       0 < e < 1   ELLIPTIC"
    PRINT TAB(10);"           e = 1   PARABOLIC"
    PRINT TAB(10);"           e > 1   HYPERBOLIC"
    CALL KEYCHECK

    CLS
    PRINT
    PRINT TAB(10);"THE ACTUAL POSITION OF A BODY IN ITS"
    PRINT TAB(10);"ORBIT IS CALLED 'TRUE ANOMALY' AND"
    PRINT TAB(10);"CAN BE DETERMINED FROM ECCENTRICITY"
    PRINT TAB(10);"AND THE ECCENTRIC OR PARABOLIC OR"
    PRINT TAB(10);"HYPERBOLIC ANOMALY."
    CALL KEYCHECK

END SUB

'**********************************************************

SUB KEYCHECK STATIC

    ' CHECK USER RESPONSE SUBROUTINE

    PRINT
    PRINT
    PRINT TAB(15);"< press any key to continue >"

    A$=""
    WHILE A$=""
      A$=INKEY$
    WEND

END SUB
```

## ROCKET1.BAS

```bas
' PROGRAM "ROCKET1"

' COPYRIGHT (C) 1982 BY DAVID EAGLE

' PUBLIC DOMAIN FOR IBM-PC ON AUGUST 19, 1986

' IBM-PC  << QUICKBASIC COMPILER VERSION 3.0 >>

' DETERMINES FLIGHT PERFORMANCE OF MODEL ROCKETS

' ALTITUDE AT BURNOUT, METERS
' VELOCITY AT BURNOUT, METERS PER SECOND
' COAST TIME AND TOTAL FLIGHT TIME, SECONDS
' MAXIMUM ALTITUDE, METERS

DEFDBL A-Z

DEF FNA(X)=(1D0-2.2556913D-5*X)^4.256116D0

PI=3.14159265D0
GRAVITY=9.80665D0
RHOSL=1.22557D0

CLS
PRINT
PRINT "Program ROCKET1"
PRINT "(C) Copyright 1982 by David Eagle"
PRINT
PRINT "Microsoft QuickBASIC Compiler"
PRINT "(C) Copyright Microsoft Corp. 1982-1987"

PRINT
PRINT TAB(10);"< press any key to continue >"
A$=""
WHILE A$=""
  A$=INKEY$
WEND

CLS
PRINT
PRINT TAB(32);"Program ROCKET1"
SITE:
PRINT
PRINT
PRINT "Launch site altitude ( meters )"
INPUT ALTSITE
PRINT
PRINT "Launch site temperature ( degrees Fahrenheit )"
INPUT TEMPSITE
ENGINE:
PRINT
PRINT
PRINT "Thrust duration ( seconds )"
INPUT TDURATION
PRINT
PRINT "Total impulse ( newton-seconds )"
INPUT IMPULSE
MASS:
PRINT
PRINT
PRINT "Initial mass ( grams )"
INPUT MASSI
PRINT
PRINT "Propellant mass ( grams )"
INPUT MPROP
PRINT
PRINT
PRINT "Frontal diameter ( millimeters )"
INPUT FD
PRINT
PRINT "Drag coefficient"
INPUT CD

' CONVERT MASS TO KILOGRAMS AND DIAMETER TO SQUARE METERS

MASSI=.001D0*MASSI
MPROP=.001D0*MPROP
FD=PI*FD^2/4D6

' COMPENSATE FOR LAUNCH SITE ALTITUDE AND TEMPERATURE

RHO=RHOSL*FNA(ALTSITE)/(1D0+(TEMPSITE-59D0)/518.67D0)

' DETERMINE ALTITUDE PERFORMANCE

THRUST=IMPULSE/TDURATION
MASS=(MASSI-.5D0*MPROP)
K2=.5D0*RHO*FD*CD
WEIGHT=MASS*GRAVITY

B=TDURATION*SQR(K2*(THRUST-WEIGHT))/MASS
C=EXP(B)
D=EXP(-B)
E=.5D0*(C+D)
F=(C-D)/(C+D)

' BURNOUT CONDITIONS

ALTBO=(MASS/K2)*LOG(E)
VELBO=F*SQR((THRUST-WEIGHT)/K2)
MASSBO=MASSI-MPROP
WEIGHTBO=MASSBO*GRAVITY

' COAST CONDITIONS

TCOAST=SQR(MASSBO/(K2*GRAVITY))*ATN(VELBO*SQR(K2/WEIGHTBO))
ALTCOAST=(MASSBO/(2D0*K2))*LOG(K2*VELBO*VELBO/WEIGHTBO+1D0)

' FLIGHT TIME AND APOGEE ALTITUDE

TFLIGHT=TDURATION+TCOAST
ALTMAX=ALTBO+ALTCOAST

' PRINT RESULTS

CLS
PRINT
PRINT TAB(32);"Program ROCKET1"
PRINT
PRINT
PRINT TAB(5);"Burnout altitude   ( meters )";
PRINT USING "######.####";TAB(55);ALTBO
PRINT
PRINT TAB(5);"Burnout velocity   ( meters per second )";
PRINT USING "######.####";TAB(55);VELBO
PRINT
PRINT TAB(5);"Burnout mass       ( grams )";
PRINT USING "######.####";TAB(55);1000D0*MASSBO
PRINT
PRINT
PRINT TAB(5);"Coast time         ( seconds )";
PRINT USING "######.####";TAB(55);TCOAST
PRINT
PRINT TAB(5);"Total flight time  ( seconds )";
PRINT USING "######.####";TAB(55);TFLIGHT
PRINT
PRINT
PRINT TAB(5);"Maximum altitude   ( meters )";
PRINT USING "######.####";TAB(55);ALTMAX
PRINT
PRINT
PRINT TAB(5);"Average thrust     ( newtons )";
PRINT USING "######.####";TAB(55);THRUST

PRINT
PRINT
PRINT TAB(25);"< press any key to continue >"
A$=""
WHILE A$=""
  A$=INKEY$
WEND

' REQUEST ANOTHER SELECTION

CLS
PRINT
PRINT
PRINT "Another selection ( y = yes, n = no )"
INPUT SELECTION$
IF INSTR("nN",SELECTION$) THEN END
PRINT
PRINT "Another launch site ( y = yes, n = no )"
INPUT SELECTION$
IF INSTR("yY",SELECTION$) THEN GOTO SITE
PRINT
PRINT "Another rocket engine ( y = yes, n = no )"
INPUT SELECTION$
IF INSTR("yY",SELECTION$) THEN GOTO ENGINE
PRINT
PRINT "Different mass or drag ( y = yes, n = no )"
INPUT SELECTION$
IF INSTR("yY",SELECTION$) THEN GOTO MASS

END
```

## SIDEREAL.BAS

```bas
' Program "SIDEREAL"

' Copyright (C) 1986 by David Eagle

' Determines the relationships between times and dates

' public domain for IBM-PC on March 30, 1986

' IBM-PC  << QuickBASIC Compiler Version 3.0 >>

'********************************************************************

DEFDBL A-Z
OPTION BASE 1

DIM SHARED MONTH$(12)

COMMON SHARED OBSLONG$,LCT$,CDATE$,LST$,CHOICE%
COMMON SHARED OBSLONG.RAD,ZONE%,DST%
COMMON SHARED MONTH%,DAY%,YEAR%,JD0,JDATE
COMMON SHARED LCT.HR,LCT.MIN,LCT.SEC,LST.HR,LST.MIN,LST.SEC

CONST PI=3.141592653589793D0
CONST PI2=2D0*PI
CONST DTR=PI/180D0
CONST WE=.262516145D0
CONST XE=PI/12D0
CONST XER=12D0/PI

MONTH$(1)="January"
MONTH$(2)="February"
MONTH$(3)="March"
MONTH$(4)="April"
MONTH$(5)="May"
MONTH$(6)="June"
MONTH$(7)="July"
MONTH$(8)="August"
MONTH$(9)="September"
MONTH$(10)="October"
MONTH$(11)="November"
MONTH$(12)="December"

DEF FNJDATE0(MONTH%,DAY%,YEAR%)
    'Julian Date function
    F=367D0*YEAR%-INT(7*((YEAR%+INT((MONTH%+9)/12))/4))
    F=F+INT(275*MONTH%/9)+DAY%+1721028.5D0
    FNJDATE0=F-INT(3*(INT((YEAR%+SGN(MONTH%-9)*INT(ABS((MONTH%-9)/7)))/100)+1)/4)
END DEF

DEF FNGMT(H,M,S,ZONE%,DST%)=H+M/60D0+S/3600D0+ZONE%-DST%
DEF FNDEMOD(X)=X-PI2*INT(X/PI2)

'********************************************************************

' initialization

CLS
PRINT
PRINT "Program SIDEREAL"
PRINT "(C) Copyright 1986 by David Eagle"
PRINT
PRINT "Microsoft QuickBASIC Compiler"
PRINT "(C) Copyright Microsoft Corp. 1982-1987"
PRINT
CALL KEYCHECK

CLS
PRINT
PRINT
PRINT "Program introduction ( y = yes, n = no )"
INPUT INTRO$
IF INSTR("yY",INTRO$) THEN CALL INTRODUCTION

DO
   CALL SELECTION.MENU

   SELECT CASE CHOICE%
   CASE 1
        CALL JDATE.FROM.GDATE
   CASE 2
        CALL GDATE.FROM.JDATE
   CASE 3
        CALL LST.FROM.LCT
   CASE 4
        CALL LCT.FROM.LST
   END SELECT

   CALL DISPLAY.DATA

   CLS
   PRINT
   PRINT
   PRINT "Another selection ( y = yes, n = no )"
   INPUT SELECTION$
LOOP UNTIL INSTR("nN",SELECTION$)

END

'********************************************************************

SUB LCT.FROM.LST STATIC

    ' local civil time from local sidereal time subroutine

    CLS
    PRINT
    PRINT
    PRINT "Calendar date ( month [ 1 - 12 ], day [ 1 - 31 ], year [ YYYY ] )"
    PRINT "( NOTE: B.C. dates are negative, A.D. dates are positive )"
    PRINT "( For example, October 21, 1948 is input as 10,21,1948 )"
    INPUT MONTH%,DAY%,YEAR%
    CDATE$=MONTH$(MONTH%)+STR$(DAY%)+","+STR$(YEAR%)
    PRINT
    PRINT "Local sidereal time ( hours [ 0 - 23 ], minutes [ 0 - 59 ], seconds [ 0 - 59 ] )"
    INPUT LST.HR,LST.MIN,LST.SEC
    LST$=STR$(LST.HR)+" hours"+STR$(LST.MIN)+" minutes"+STR$(LST.SEC)+" seconds"
    PRINT
    PRINT "Observer west longitude"
    PRINT "( degrees [ 0 - 359 ], minutes [ 0 - 59 ], seconds [ 0 - 59 ] )"
    INPUT OBSLONG.DEG,OBSLONG.MIN,OBSLONG.SEC
    OBSLONG.RAD=DTR*(OBSLONG.DEG+OBSLONG.MIN/60D0+OBSLONG.SEC/3600D0)
    OBSLONG$=STR$(OBSLONG.DEG)+ " degrees"+STR$(OBSLONG.MIN)+" minutes"+STR$(OBSLONG.SEC)+" seconds"
    PRINT
    PRINT "Time zone ( 0 - 23 )"
    PRINT "( For example, Eastern Standard Time (EST) is time zone 5 )"
    INPUT ZONE%
    PRINT
    PRINT "Daylight Savings Time ( y = yes, n = no )"
    INPUT DST$
    IF INSTR("yY",DST$) THEN
       DST%=1
    ELSE
       DST%=0
    END IF
    JD0=FNJDATE0(MONTH%,DAY%,YEAR%)
    T2=(JD0-2451545D0)/36525D0
    LST=FNDEMOD(1.75336856D0+628.331971D0*T2+6.7707D-06*T2^2)
    T1=XE*(LST.HR+LST.MIN/60D0+LST.SEC/3600D0)

    IF ABS(LST-T1)<.001D0 THEN
       T2=(JD0-2451544D0)/36525D0
       LST=FNDEMOD(1.75336856D0+628.331971D0*T2+6.7707D-06*T2^2)
       T1=XE*(LST.HR+LST.MIN/60D0+LST.SEC/3600D0)
    END IF

    A=(T1-LST+OBSLONG.RAD)/WE-ZONE%+DST%
    A=A-24D0*INT(A/24D0)
    CALL CONVERT(A,LCT.HR,LCT.MIN,LCT.SEC)
    LCT$=STR$(LCT.HR)+" hours"+STR$(LCT.MIN)+" minutes"+STR$(LCT.SEC)+" seconds"
    JDATE=JD0+(LCT.HR+LCT.MIN/60D0+LCT.SEC/3600D0+ZONE%-DST%)/24D0

END SUB

'********************************************************************

SUB JDATE.FROM.GDATE STATIC

    ' Julian date from calendar date subroutine

    CLS
    PRINT
    PRINT
    PRINT "Calendar date ( month [ 1 - 12 ], day [ 1 - 31 ], year [ YYYY ] )"
    PRINT "( NOTE: B.C. dates are negative, A.D. dates are positive )"
    PRINT "( For example, October 21, 1948 is input as 10,21,1948 )"
    INPUT MONTH%,DAY%,YEAR%
    CDATE$=MONTH$(MONTH%)+STR$(DAY%)+","+STR$(YEAR%)
    PRINT
    PRINT "Local civil time ( hours [ 0 - 23 ], minutes [ 0 - 59 ] ), seconds [ 0 - 59 ] )"
    PRINT "( For example, 8:30:45 p.M. is input as 20,30,45 )"
    INPUT LCT.HR,LCT.MIN,LCT.SEC
    LCT$=STR$(LCT.HR)+" hours"+STR$(LCT.MIN)+" minutes"+STR$(LCT.SEC)+" seconds"
    PRINT
    PRINT "Time zone ( 0 - 23 )"
    PRINT "( For example, Eastern Standard Time (EST) is time zone 5 )"
    INPUT ZONE%
    PRINT
    PRINT "Daylight Savings Time ( y = yes, n = no )"
    INPUT DST$
    IF INSTR("yY",DST$) THEN
       DST%=1
    ELSE
       DST%=0
    END IF
    JD0=FNJDATE0(MONTH%,DAY%,YEAR%)
    GMT.TIME=FNGMT(LCT.HR,LCT.MIN,LCT.SEC,ZONE%,DST%)
    JDATE=JD0+GMT.TIME/24D0

END SUB

'********************************************************************

SUB LST.FROM.LCT STATIC

    ' local sidereal time from local civil time subroutine

    CLS
    PRINT
    PRINT
    PRINT "Calendar date ( month [ 1 - 12 ], day [ 1 - 31 ], year [ YYYY ] )"
    PRINT "( NOTE: B.C. dates are negative, A.D. dates are positive )"
    PRINT "( For example, October 21, 1948 is input as 10,21,1948 )"
    INPUT MONTH%,DAY%,YEAR%
    CDATE$=MONTH$(MONTH%)+STR$(DAY%)+","+STR$(YEAR%)
    PRINT
    PRINT "Local civil time ( hours [ 0 - 23 ], minutes [ 0 - 59 ], seconds [ 0 - 59 ] )"
    PRINT "( For example, 8:30:45 p.m. is input as 20,30,45 )"
    INPUT LCT.HR,LCT.MIN,LCT.SEC
    LCT$=STR$(LCT.HR)+" hours"+STR$(LCT.MIN)+" minutes"+STR$(LCT.SEC)+" seconds"
    PRINT
    PRINT "Observer west longitude"
    PRINT "( degrees [ 0 - 359 ], minutes [ 0 - 59 ], seconds [ 0 - 59 ] )"
    INPUT OBSLONG.DEG,OBSLONG.MIN,OBSLONG.SEC
    OBSLONG.RAD=DTR*(OBSLONG.DEG+OBSLONG.MIN/60D0+OBSLONG.SEC/3600D0)
    OBSLONG$=STR$(OBSLONG.DEG)+ " degrees"+STR$(OBSLONG.MIN)+" minutes"+STR$(OBSLONG.SEC)+" seconds"
    PRINT
    PRINT "Time zone ( 0 - 23 )"
    PRINT "( For example, Eastern Standard Time (EST) is time zone 5 )"
    INPUT ZONE%
    PRINT
    PRINT "Daylight Savings Time ( y = yes, n = no )"
    INPUT DST$
    IF INSTR("yY",DST$) THEN
       DST%=1
    ELSE
       DST%=0
    END IF
    JD0=FNJDATE0(MONTH%,DAY%,YEAR%)
    GMT.TIME=FNGMT(LCT.HR,LCT.MIN,LCT.SEC,ZONE%,DST%)
    JDATE=JD0+GMT.TIME/24D0
    T2=(JD0-2451545D0)/36525D0
    LST=FNDEMOD(1.75336856D0+628.331971D0*T2+6.7707D-06*T2^2-OBSLONG.RAD+WE*GMT.TIME)
    CALL CONVERT(LST*XER,LST.HR,LST.MIN,LST.SEC)
    LST$=STR$(LST.HR)+" hours"+STR$(LST.MIN)+" minutes"+STR$(LST.SEC)+" seconds"

END SUB

'********************************************************************

SUB CONVERT(DEG,HR,MIN,SEC) STATIC

    ' convert angular time to hms subroutine

    HR=INT(DEG)
    C=60D0*(DEG-HR)
    MIN=INT(C)
    SEC=INT(60D0*(C-MIN)+.5D0)
    IF SEC>=60D0 THEN
       MIN=MIN+1D0
       SEC=SEC-60D0
    END IF
    IF MIN>=60D0 THEN
       HR=HR+1D0
       MIN=MIN-60D0
    END IF
    IF HR>=24D0 THEN HR=HR-24D0

END SUB

'********************************************************************

SUB GDATE.FROM.JDATE STATIC

    ' Gregorian Date from Julian Date subroutine

    DST%=0
    ZONE%=0

    CLS
    PRINT
    PRINT
    PRINT "Julian Date"
    INPUT JDATE
    Z=INT(JDATE+.5D0)
    F=JDATE+.5D0-Z
    IF Z<2299161D0 THEN
       A=Z
    ELSE
       A=INT((Z-1867216.25D0)/36524.25D0)
       A=Z+A-INT(A/4)+1D0
    END IF
    B=A+1524D0
    C=INT((B-122.1D0)/365.25D0)
    D=INT(365.25D0*C)
    E=INT((B-D)/30.6001D0)
    DAY%=B-D-INT(30.6001D0*E)
    IF E<13.5D0 THEN
       MONTH%=E-1D0
    ELSE
       MONTH%=E-13D0
    END IF
    IF MONTH%>2.5D0 THEN
       YEAR%=C-4716D0
    ELSE
       YEAR%=C-4715D0
    END IF

    CDATE$=MONTH$(MONTH%)+STR$(DAY%)+","+STR$(YEAR%)

    CALL CONVERT(24D0*F,LCT.HR,LCT.MIN,LCT.SEC)
    LCT$=STR$(LCT.HR)+" hours"+STR$(LCT.MIN)+" minutes"+STR$(LCT.SEC)+" seconds"

END SUB

'********************************************************************

SUB DISPLAY.DATA STATIC

    ' display data subroutine

    CLS
    PRINT
    PRINT TAB(30);"Program SIDEREAL"
    PRINT
    PRINT
    PRINT TAB(5);"Calendar date";TAB(62-LEN(CDATE$));CDATE$
    PRINT
    PRINT TAB(5);"Julian Date";
    LOCATE ,47
    PRINT USING "########.####";JDATE
    PRINT
    PRINT TAB(5);"Local civil time";TAB(70-LEN(LCT$));LCT$

    IF CHOICE%=3 OR CHOICE%=4 THEN
       PRINT
       PRINT TAB(5);"Local sidereal time";TAB(70-LEN(LST$));LST$
       PRINT
       PRINT TAB(5);"Observer west longitude";TAB(70-LEN(OBSLONG$));OBSLONG$
    END IF

    PRINT
    PRINT TAB(5);"Time Zone";TAB(50);ZONE%
    PRINT

    IF DST%=1 THEN
       DST$="Yes"
    ELSE
       DST$="No"
    END IF

    PRINT TAB(5);"Daylight Savings Time";TAB(51);DST$
    PRINT
    CALL KEYCHECK

END SUB

'********************************************************************

SUB SELECTION.MENU STATIC

    ' user selection menu subroutine

    CLS
    PRINT
    PRINT
    PRINT TAB(30);"SIDEREAL Menu"
    PRINT
    PRINT
    PRINT TAB(15);"< 1 > Julian Date from calendar date"
    PRINT
    PRINT TAB(15);"< 2 > Calendar date from Julian Date"
    PRINT
    PRINT TAB(15);"< 3 > Local sidereal time from local civil time"
    PRINT
    PRINT TAB(15);"< 4 > Local civil time from local sidereal time"
    PRINT
    PRINT
    PRINT "Selection ( 1, 2, 3 or 4 )"
    INPUT CHOICE%

END SUB

'********************************************************************

SUB INTRODUCTION STATIC

    ' program introduction subroutine

    CLS
    PRINT
    PRINT TAB(10);"SIDEREAL is an interactive QuickBASIC program which can"
    PRINT TAB(10);"help us learn about time. We can explore the relationship"
    PRINT TAB(10);"between solar or civil time and sidereal time as well as"
    PRINT TAB(10);"the 'Julian Date' and calendar dates."
    PRINT
    PRINT TAB(10);"The Julian Date is the number of days that have passed"
    PRINT TAB(10);"since noon on January 1, 4713 B.C. It is an 'elapsed time'"
    PRINT TAB(10);"benchmark which is used in astronomy to predict the move-"
    PRINT TAB(10);"ment of celestial objects. The Julian Date also has a"
    PRINT TAB(10);"direct relationship with our calendar dates. For example,"
    PRINT TAB(10);"the number of days between two calendar dates is simply"
    PRINT TAB(10);"the difference between their Julian Dates."
    PRINT
    PRINT TAB(10);"The two most widely used calendars are the Julian and"
    PRINT TAB(10);"Gregorian calendars. The Julian calendar was used until"
    PRINT TAB(10);"October 4, 1582 and the Gregorian calendar (due to Pope
    PRINT TAB(10);"Gregory) went into effect on October 15, 1582."
    CALL KEYCHECK

    CLS
    PRINT
    PRINT TAB(10);"Solar or civil time is time measured relative to the sun"
    PRINT TAB(10);"while sidereal time is measured with respect to the stars."
    PRINT TAB(10);"Everyone and every star has a sidereal time. The sidereal"
    PRINT TAB(10);"time of a star or planet is called 'right ascension'. When"
    PRINT TAB(10);"your local sidereal time is equal to the right ascension"
    PRINT TAB(10);"of a celestial object, that object is aligned with your"
    PRINT TAB(10);"longitude position on the earth. This event is called a"
    PRINT TAB(10);"'meridian crossing'."
    PRINT
    PRINT TAB(10);"In this program both civil and sidereal time are input and"
    PRINT TAB(10);"output in hours, minutes and seconds. The calendar date is"
    PRINT TAB(10);"also input in numerical format. For example, May 1, 1984"
    PRINT TAB(10);"would be input as '5,1,1984'. Please note that B.C. dates"
    PRINT TAB(10);"are negative and A.D. dates are positive. Also, the first"
    PRINT TAB(10);"B.C. year is 0. When your longitude is requested, you"
    PRINT TAB(10);"should input this in degrees and minutes. This number is"
    PRINT TAB(10);"your west longitude on the earth."
    CALL KEYCHECK

    CLS
    PRINT
    PRINT TAB(10);"West longitude equals 360 - east longitude. For example,"
    PRINT TAB(10);"if you were at 85 degrees and 30 seconds east longitude,"
    PRINT TAB(10);"input '274,30' when prompted. Your time zone is an integer"
    PRINT TAB(10);"number between 0 and 23 and depends upon your location on"
    PRINT TAB(10);"the earth. For example, Eastern Standard Time is time zone"
    PRINT TAB(10);"number 5. You should also indicate if Daylight Savings"
    PRINT TAB(10);"Time is in effect at your location."
    CALL KEYCHECK

END SUB

'********************************************************************

SUB KEYCHECK STATIC

    ' check user response subroutine

    PRINT
    PRINT
    PRINT TAB(25);"< press any key to continue >"

    A$=""
    WHILE A$=""
      A$=INKEY$
    WEND

END SUB

```

## SYNCSAT.BAS

```bas
' Program "SYNCSAT"

' Copyright (C) 1982 by David Eagle

' IBM-PC  << QuickBASIC Compiler Version 2.0 >>

' Public domain for the IBM-PC on October 8, 1986

' computes direction of geosynchronous satellites

' azimuth angle; positive clockwise from north ( degrees )
' elevation angle; positive above the horizon ( degrees )

'**********************************************************

DEFDBL A-Z
OPTION BASE 1

CONST RREQ=1D0/637814D0
CONST FLAT=1D0/298.257D0
CONST PI=3.14159265D0
CONST PIDIV2=.5D0*PI
CONST HGEO=6.6107426D0
CONST DTR=PI/180D0
CONST RTD=180D0/PI

DIM SHARED LV(3),UP(3),MATRIX(3,3)

COMMON SHARED OBSLAT,OBSLONG,OBSALT,XOBS,YOBS,ZOBS
COMMON SHARED AZIMUTH,ELEVATION

CLS
PRINT
PRINT
PRINT "Program SYNCSAT"
PRINT "(C) Copyright 1982 by David Eagle"
PRINT
PRINT "Microsoft QuickBASIC Compiler"
PRINT "(C) Copyright Microsoft Corp. 1982-1987"
PRINT
CALL KEYCHECK

CLS
PRINT
PRINT
PRINT "Program introduction ( y = yes, n = no )"
INPUT intro$
IF INSTR("yY",intro$) THEN CALL INTRODUCTION

MAIN:
CLS
PRINT
PRINT
PRINT TAB(16);"Program SYNCSAT"
LOCATION:
PRINT
PRINT
PRINT "Observer latitude ( degrees [ - 90 to + 90 ] )"
PRINT "< north latitudes are positive, south latitudes are negative >"
INPUT OBSLAT
PRINT
PRINT "Observer west longitude ( degrees [ 0 - 360 ] )"
INPUT OBSLONG
PRINT
PRINT "Observer altitude ( meters )"
PRINT "< positive above sea level, negative below sea level >"
INPUT OBSALT
SATELLITE:
PRINT
PRINT "Satellite west longitude ( degrees [ 0 - 360 ] )"
INPUT SATLONG

' calculate observer's position

CALL OBSVECTOR

' calculate satellite's position

A=-SATLONG*DTR
XSAT=HGEO*COS(A)
YSAT=HGEO*SIN(A)

' calculate pointing angles to satellite

X3=XSAT-XOBS
Y3=YSAT-YOBS
Z3=-ZOBS

R=SQR(X3^2+Y3^2+Z3^2)

UP(1)=X3/R
UP(2)=Y3/R
UP(3)=Z3/R

CALL TOPOCENTRIC

' print results

FORMAT$="####.###"

CLS
PRINT
PRINT
PRINT TAB(28);"Program SYNCSAT"
PRINT
PRINT
PRINT
PRINT TAB(5);"Observer latitude         ( degrees )";
PRINT USING FORMAT$;TAB(50);OBSLAT
PRINT
PRINT TAB(5);"Observer west longitude   ( degrees )";
PRINT USING FORMAT$;TAB(50);OBSLONG
PRINT
PRINT TAB(5);"Observer altitude         ( meters )";
PRINT USING FORMAT$;TAB(50);OBSALT
PRINT
PRINT
PRINT TAB(5);"Azimuth                   ( degrees )";
PRINT USING FORMAT$;TAB(50);AZIMUTH
PRINT
PRINT TAB(5);"Elevation                 ( degrees )";
PRINT USING FORMAT$;TAB(50);ELEVATION
PRINT
PRINT
PRINT TAB(5);"Satellite west longitude  ( degrees )";
PRINT USING FORMAT$;TAB(50);SATLONG
PRINT
CALL KEYCHECK

' request another selection

CLS
PRINT
PRINT
PRINT "Another selection ( y = yes, n = no )"
INPUT REPLY$
IF INSTR("nN",REPLY$) THEN END
PRINT
PRINT "Another location ( y = yes, n = no )"
INPUT REPLY$
IF INSTR("yY",REPLY$) THEN GOTO LOCATION
PRINT
PRINT "Another satellite ( y = yes, n = no )"
INPUT REPLY$
IF INSTR("yY",REPLY$) THEN GOTO SATELLITE
GOTO MAIN

END

'***************************************************************

SUB OBSVECTOR STATIC

  ' observer position vector subroutine

  A=OBSLAT*DTR
  B=SIN(A)
  C=COS(A)
  D=1D0-FLAT
  E=SQR(1D0-(2D0*FLAT-FLAT^2)*B^2)
  F=1D0/E+OBSALT*RREQ
  G=D^2/E+OBSALT*RREQ
  H=-OBSLONG*DTR
  XOBS=F*C*COS(H)
  YOBS=F*C*SIN(H)
  ZOBS=G*B

END SUB

'***************************************************************

SUB TOPOCENTRIC STATIC

  ' eci to topocentric subroutine

  A=SIN(OBSLAT*DTR)
  B=COS(OBSLAT*DTR)
  C=SIN(-OBSLONG*DTR)
  D=COS(-OBSLONG*DTR)
  MATRIX(1,1)=A*D
  MATRIX(1,2)=A*C
  MATRIX(1,3)=-B
  MATRIX(2,1)=-C
  MATRIX(2,2)=D
  MATRIX(2,3)=0D0
  MATRIX(3,1)=B*D
  MATRIX(3,2)=B*C
  MATRIX(3,3)=A

  FOR I%=1 TO 3
    A=0D0
    FOR J%=1 TO 3
      A=A+MATRIX(I%,J%)*UP(J%)
    NEXT J%
    LV(I%)=A
  NEXT I%

  IF ABS(LV(3))>1D0 THEN
    ELEVATION=SGN(LV(3))*90D0
  ELSE
    ELEVATION=(ATN(LV(3)/SQR(1D0-LV(3)^2)))*RTD
  END IF

  A=LV(2)
  B=-LV(1)
  CALL ATAN3(A,B,C)
  AZIMUTH=RTD*C

END SUB

'***************************************************************

SUB ATAN3(A,B,C) STATIC

  ' 4-quadrant arc tangent subroutine

  IF ABS(A)<1D-08 THEN
    C=(1-SGN(B))*PIDIV2
    EXIT SUB
  ELSE
    C=(2-SGN(A))*PIDIV2
  END IF
  IF ABS(B)<1D-08 THEN
    EXIT SUB
  ELSE
    C=C+SGN(A)*SGN(B)*(ABS(ATN(A/B))-PIDIV2)
  END IF

END SUB

'***************************************************************

SUB KEYCHECK STATIC

  ' check user response subroutine

  PRINT
  PRINT
  PRINT TAB(20);"< press any key to continue >";

  A$=""
  WHILE A$=""
    A$=INKEY$
  WEND

END SUB

'***************************************************************

SUB INTRODUCTION STATIC

  ' program introduction subroutine

  CLS
  PRINT TAB(15);"    Program 'SYNCSAT' is an interactive"
  PRINT TAB(15);"BASIC computer program which can be"
  PRINT TAB(15);"used to determine both the azimuth and"
  PRINT TAB(15);"elevation pointing angles from an earth"
  PRINT TAB(15);"observer anywhere in the world to a"
  PRINT TAB(15);"geosynchronous satellite. The software"
  PRINT TAB(15);"in this program takes into account the"
  PRINT TAB(15);"effect of the flattening or 'oblateness'"
  PRINT TAB(15);"of the earth on the observer location"
  PRINT TAB(15);"on the earth. It also compensates for"
  PRINT TAB(15);"'non-sea level' observation and antenna"
  PRINT TAB(15);"sites. These features provide the user"
  PRINT TAB(15);"with very accurate pointing angles."
  PRINT
  PRINT TAB(15);"     USER INPUTS AND SELECTIONS"
  PRINT
  PRINT TAB(15);"   Program SYNCSAT will prompt the user"
  PRINT TAB(15);"for several inputs necessary for the"
  PRINT TAB(15);"software to work properly. This is a"
  PRINT TAB(15);"description of these requests and a"
  PRINT TAB(15);"discussion of the proper user response."
  CALL KEYCHECK

  CLS
  PRINT TAB(15);"    Observer latitude ( degrees )"
  PRINT
  PRINT TAB(15);"The user should respond with his or her"
  PRINT TAB(15);"geographic latitude in decimal degrees"
  PRINT TAB(15);"taking note of the sign convention. For"
  PRINT TAB(15);"example, an observer at 42 degrees, 30"
  PRINT TAB(15);"minutes north latitude would input 42.5."
  PRINT
  PRINT TAB(15);"    Observer west longitude ( degrees )"
  PRINT
  PRINT TAB(15);"The proper response here will be the"
  PRINT TAB(15);"observer's west longitude in decimal"
  PRINT TAB(15);"degrees. West longitude equals 360"
  PRINT TAB(15);"degrees minus east longitude."
  PRINT
  PRINT TAB(15);"    Observer altitude ( meters )"
  PRINT
  PRINT TAB(15);"At this point the user should input the"
  PRINT TAB(15);"altitude at his or her location in the"
  PRINT TAB(15);"units of meters. Sites above sea level"
  PRINT TAB(15);"are input as positive numbers and those"
  PRINT TAB(15);"below sea level are negative numbers."
  CALL KEYCHECK

  CLS
  PRINT TAB(15);"   Satellite west longitude ( degrees )"
  PRINT
  PRINT TAB(15);"The user should respond with the west"
  PRINT TAB(15);"longitude of the satellite of interest."
  PRINT TAB(15);"This number is input in decimal degrees."
  PRINT TAB(15);" After the program has run, it will ask"
  PRINT TAB(15);"the user for another selection. A user"
  PRINT TAB(15);"should respond with 'y' if he or she"
  PRINT TAB(15);"desires the selection or 'n' if not."
  PRINT
  PRINT TAB(15);"    Another selection ( y = yes, n = no ) ?"
  PRINT
  PRINT TAB(15);"A user response of 'n' will exit the"
  PRINT TAB(15);"'SYNCSAT' program."
  PRINT
  PRINT TAB(15);"    Another location ( y = yes, n = no ) ?"
  PRINT
  PRINT TAB(15);"The user should respond with 'y' to"
  PRINT TAB(15);"compute the location of a satellite"
  PRINT TAB(15);"relative to another geographic location."
  CALL KEYCHECK

  CLS
  PRINT TAB(15);"     Another satellite ( y = yes, n = no ) ?"
  PRINT
  PRINT TAB(15);"The user should respond with 'y' to"
  PRINT TAB(15);"compute the pointing angles to another"
  PRINT TAB(15);"geosynchronous satellite."
  PRINT
  PRINT TAB(15);"          PROGRAM OUTPUT"
  PRINT
  PRINT TAB(15);"Program 'SYNCSAT' outputs the observer-"
  PRINT TAB(15);"centered or 'topocentric' azimuth and"
  PRINT TAB(15);"elevation angles from an observer to a"
  PRINT TAB(15);"geosynchronous satellite. Azimuth is"
  PRINT TAB(15);"measured positive clockwise from north"
  PRINT TAB(15);"and elevation is positive above the"
  PRINT TAB(15);"observer's horizon. For example, an"
  PRINT TAB(15);"azimuth angle of 90 degrees is east and"
  PRINT TAB(15);"180 degrees is south, etc. Elevation"
  PRINT TAB(15);"angles which are negative indicate that"
  PRINT TAB(15);"the satellite cannot be seen from an"
  PRINT TAB(15);"observer's location. Both angles are"
  PRINT TAB(15);"printed in decimal degrees."
  CALL KEYCHECK

END SUB
```

## TNODE.BAS

```bas
' PROGRAM "TNODE"

' COPYRIGHT (C) 1983 BY DAVID EAGLE

' IBM-PC  << QUICKBASIC COMPILER VERSION 3.0 >>

' PUBLIC DOMAIN FOR IBM-PC ON NOVEMBER 20, 1986

' COMPUTES ASCENDING NODE CROSSINGS OF EARTH SATELLITES

' DATE OF CROSSING; MONTH, DAY, YEAR
' GMT OF CROSSING; HOURS, MINUTES, SECONDS
' WEST LONGITUDE OF CROSSING; DEGREES

'*********************************************************

DEFDBL A-Z

DIM SHARED MONTH$(12)

COMMON SHARED ECC,INC,ARGPER,TN,THOUR,TMIN,TSEC,CDATE$
COMMON SHARED MONTH%,DAY%,YEAR%,JDATE,WLONG,CTIME$

CONST PI=3.141592653589793D0
CONST PI2=2D0*PI
CONST PIDIV2=.5D0*PI
CONST DTR=PI/180D0
CONST RTD=180D0/PI
CONST MU=1.407645794D16
CONST REQ=20925656.2D0
CONST J2=.0010828D0
CONST WE=7.29211515D-5

MONTH$(1)="January"
MONTH$(2)="February"
MONTH$(3)="March"
MONTH$(4)="April"
MONTH$(5)="May"
MONTH$(6)="June"
MONTH$(7)="July"
MONTH$(8)="August"
MONTH$(9)="September"
MONTH$(10)="October"
MONTH$(11)="November"
MONTH$(12)="December"

'**********************************************************

CLS
PRINT
PRINT
PRINT "Program TNODE"
PRINT "(C) Copyright 1982 by David Eagle
PRINT
PRINT "Microsoft QuickBASIC Compiler"
PRINT "(C) Copyright Microsoft Corp. 1982-1987"
PRINT
CALL KEYCHECK

CLS
PRINT
PRINT
INPUT "Introduction ( y = yes, n = no )";A$
IF INSTR("yY",A$) THEN CALL INTRO

' PROMPT USER FOR INPUTS

CLS
PRINT
PRINT
PRINT TAB(12);"Program TNODE"
PRINT
SATELLITE:
PRINT
PRINT "Orbital period ( minutes )"
INPUT TKEPLER
TKEPLER=TKEPLER*60
PRINT
PRINT "Orbital inclination ( degrees [ 0 - 180 ] )"
INPUT INC
INC=INC*DTR
PRINT
PRINT "Orbital eccentricity ( non-dimensional )"
INPUT ECC
IF ECC>0D0 THEN
   PRINT
   PRINT "Argument of perigee ( degrees [ 0 - 360 ] )"
   INPUT ARGPER
   ARGPER=ARGPER*DTR
ELSE
   ARGPER=0D0
END IF

PRINT
REVENT:
CLS
PRINT
PRINT
PRINT TAB(16);"Reference Event"
PRINT
PRINT
PRINT TAB(10);"< 1 > Equatorial crossing"
PRINT
PRINT TAB(10);"< 2 > Apogee"
PRINT
PRINT
PRINT "Selection"
INPUT TYPE%
PRINT
PRINT
PRINT "Date of reference event ( month [ 1 - 12 ], day [ 1 - 31 ], year [ YYYY ] )"
PRINT "< For example, October 21, 1985 is input as 10,21,1985 >"
INPUT MONTH%,DAY%,YEAR%
PRINT
PRINT "GMT of reference event"
PRINT "( hours [ 0 - 23 ], minutes [ 0 - 59 ], seconds [ 0 - 59 ] )"
PRINT "< For example, 8:45:30 p.m. is input as 20,45,30 >"
INPUT THOUR,TMIN,TSEC
PRINT
PRINT "West longitude of reference event ( degrees [ 0 - 360 ] )"
INPUT WLONG
WLONG=WLONG*DTR
PRINT
PRINT "Number of crossings to compute"
INPUT NCROSS%

CLS
PRINT
PRINT TAB(8);"CALENDAR";TAB(31);"GMT";TAB(50);"WEST";
PRINT TAB(10);"DATE";TAB(31);"TIME";TAB(48);"LONGITUDE"
PRINT

' COMPUTE REFERENCE JULIAN DATE AND TIME BETWEEN CROSSINGS

JDATE=367D0*YEAR%-INT(7*((YEAR%+INT((MONTH%+9)/12))/4))+INT(275*MONTH%/9)+DAY%+1721014D0
A=TKEPLER/PI2
A=((MU*A*A)^(1D0/3D0))/REQ
B=1D0+ECC*COS(ARGPER)
C=1D0-ECC*ECC
D=A*A
E=B*B
F=SIN(INC)
G=COS(INC)
H=1D0/(A*C)
TN=TKEPLER*(1D0-.5D0*J2*((4D0-5D0*F*F)/(D*SQR(C)*E)+2D0*E*B/(C*C*C*D)))
RDOT=-1.5D0*J2*PI2*H*H*G/TKEPLER
DLONG=TN*(WE-RDOT)
A2=TN/3600D0
DHOUR=INT(A2)
A4=60D0*(A2-DHOUR)
DMIN=INT(A4)
DSEC=INT(60D0*(A4-DMIN)+.5D0)
IF TYPE%=2 THEN CALL APOGEE
WLONG=WLONG-DLONG
THOUR=THOUR-DHOUR
TMIN=TMIN-DMIN
TSEC=TSEC-DSEC

' COMPUTE SUCCESSIVE CROSSINGS

FOR I%=1 TO NCROSS%+1
    WLONG=WLONG+DLONG
    IF WLONG>PI2 THEN WLONG=WLONG-PI2
    THOUR=THOUR+DHOUR
    TMIN=TMIN+DMIN
    TSEC=TSEC+DSEC
    CALL CTIME
    CALL GDATE
    CALL PRTSUB
NEXT I%

PRINT
CALL KEYCHECK

CLS
PRINT
PRINT
INPUT "Another selection ( y = yes, n = no ) ";A$
IF INSTR("nN",A$) THEN END
PRINT
INPUT "Another satellite ( y = yes, n = no ) ";A$
IF INSTR("yY",A$) THEN GOTO SATELLITE
PRINT
INPUT "Another reference event ( y = yes, n = no ) ";A$
IF INSTR("yY",A$) THEN GOTO REVENT

END

'**********************************************************

SUB GDATE STATIC

    ' GREGORIAN DATE SUBROUTINE

    A=INT((JDATE-1867216.25D0)/36524.25D0)
    A=JDATE+A-INT(A/4D0)+1D0
    B=A+1524D0
    C=INT((B-122.1D0)/365.25D0)
    D=INT(365.25D0*C)
    E=INT((B-D)/30.6001D0)
    DAY%=B-D-INT(30.6001D0*E)
    IF E<13.5 THEN
       MONTH%=E-1
    ELSE
       MONTH%=E-13
    END IF
    IF MONTH%>2.5 THEN
       YEAR%=C-4716
    ELSE
       YEAR%=C-4715
    END IF

    CDATE$=MONTH$(MONTH%)+STR$(DAY%)+","+STR$(YEAR%)

END SUB

'**********************************************************

SUB PRTSUB STATIC

    ' PRINT SUBROUTINE

    PRINT TAB(5);CDATE$;
    PRINT ;TAB(26);CTIME$;
    PRINT USING "###.##";TAB(48);WLONG*RTD

END SUB

'**********************************************************

SUB KEYCHECK STATIC

    ' CHECK USER RESPONSE SUBROUTINE

    PRINT
    PRINT TAB(15);"< press any key to continue >";

    A$=""
    WHILE A$=""
      A$=INKEY$
    WEND

END SUB

'**********************************************************

SUB INTRO STATIC

    ' INTRODUCTION SUBROUTINE

    CLS
    PRINT TAB(10);"              INTRODUCTION              "
    PRINT
    PRINT TAB(10);"     PROGRAM 'TNODE' IS AN INTERACTIVE  "
    PRINT TAB(10);"BASIC COMPUTER PROGRAM WHICH CAN BE USED"
    PRINT TAB(10);"TO DETERMINE ASCENDING NODE CROSSINGS OF"
    PRINT TAB(10);"EARTH SATELLITES. THE ASCENDING NODE IS "
    PRINT TAB(10);"THE INTERSECTION OF THE EARTH'S EQUATORIAL"
    PRINT TAB(10);"PLANE AND THE SATELLITE ORBIT PLANE AS"
    PRINT TAB(10);"THE SATELLITE 'ASCENDS' FROM SOUTH TO"
    PRINT TAB(10);"NORTH. THE TIME AND GEOGRAPHIC LONGITUDE"
    PRINT TAB(10);"OF AN ASCENDING NODE CAN BE USED TO   "
    PRINT TAB(10);"PREDICT THE SATELLITE'S POSITION AT OTHER"
    PRINT TAB(10);"TIMES RELATIVE TO AN OBSERVER ANYWHERE"
    PRINT TAB(10);"IN THE WORLD.                     "
    PRINT
    PRINT TAB(10);"       USER INPUTS AND SELECTIONS      "
    PRINT
    PRINT TAB(10);"    PROGRAM 'TNODE' WILL PROMPT THE USER"
    PRINT TAB(10);"FOR SEVERAL INPUTS NECESSARY FOR THE    "
    PRINT TAB(10);"SOFTWARE TO WORK PROPERLY. THIS IS A    "
    PRINT TAB(10);"DESCRIPTION OF THESE REQUESTS AND A     "
    PRINT TAB(10);"DISCUSSION OF THE PROPER USER RESPONSE. "
    CALL KEYCHECK
    CLS
    PRINT
    PRINT TAB(10);"Orbital period ( minutes )"
    PRINT
    PRINT TAB(10);"THE USER SHOULD RESPOND WITH THE ORBITAL"
    PRINT TAB(10);"PERIOD OF THE SATELLITE IN MINUTES.     "
    PRINT
    PRINT TAB(10);"Orbital inclination ( degrees )"
    PRINT
    PRINT TAB(10);"THE RESPONSE TO THIS REQUEST SHOULD BE  "
    PRINT TAB(10);"THE ORBITAL INCLINATION OF THE SATELLITE"
    PRINT TAB(10);"IN DEGREES. THIS INPUT SHOULD BE A      "
    PRINT TAB(10);"NUMBER BETWEEN 0 AND 180 DEGREES.       "
    PRINT
    PRINT TAB(10);"Orbital eccentricity ( non-dimensional )"
    PRINT
    PRINT TAB(10);"THE USER SHOULD INPUT THE ECCENTRICITY  "
    PRINT TAB(10);"OF THE ORBIT. THIS IS A NON-DIMENSIONAL "
    PRINT TAB(10);"NUMBER BETWEEN 0 AND 1.                 "
    PRINT
    PRINT TAB(10);"Argument of perigee ( degrees )"
    PRINT
    PRINT TAB(10);"THE USER SHOULD RESPOND WITH THE ORBIT'S"
    PRINT TAB(10);"ARGUMENT OF PERIGEE IN DEGREES.         "
    CALL KEYCHECK
    CLS
    PRINT
    PRINT TAB(10);"            Reference Event             "
    PRINT
    PRINT TAB(10);"        <1> Equatorial crossing         "
    PRINT
    PRINT TAB(10);"        <2> Apogee                      "
    PRINT
    PRINT TAB(10);"Selection?                              "
    PRINT
    PRINT TAB(10);"HERE THE USER SHOULD INDICATE THE TYPE  "
    PRINT TAB(10);"OF REFERENCE EVENT. MOST PREDICTIONS ARE"
    PRINT TAB(10);"BASED ON EQUATORIAL CROSSINGS WHILE SOME"
    PRINT TAB(10);"PREDICTIONS, SUCH AS THOSE FOR OSCAR 10,"
    PRINT TAB(10);"ARE BASED ON APOGEE.                    "
    PRINT
    PRINT TAB(10);"Date of reference event ( month, day, year )?"
    PRINT
    PRINT TAB(10);"AT THIS POINT THE USER SHOULD INPUT THE "
    PRINT TAB(10);"NUMERICAL EQUIVALENT OF THE DATE OF THE "
    PRINT TAB(10);"REFERENCE EVENT. FOR EXAMPLE, MAY 12,   "
    PRINT TAB(10);"1982 IS INPUT AS '5,12,1982'.           "
    CALL KEYCHECK
    CLS
    PRINT
    PRINT TAB(10);"GMT of reference event ( hours, minutes, seconds )?"
    PRINT
    PRINT TAB(10);"THE USER SHOULD RESPOND WITH THE GREENWICH"
    PRINT TAB(10);"MEAN TIME (GMT), IN HOURS, MINUTES AND   "
    PRINT TAB(10);"SECONDS CORRESPONDING TO THE REFERENCE  "
    PRINT TAB(10);"EVENT DESCRIBED ABOVE.                  "
    PRINT
    PRINT TAB(10);"West longitude of reference event ( degrees )?"
    PRINT
    PRINT TAB(10);"THE RESPONSE TO THIS REQUEST SHOULD BE  "
    PRINT TAB(10);"THE WEST LONGITUDE, IN DEGREES, OF THE  "
    PRINT TAB(10);"REFERENCE EVENT. WEST LONGITUDE IS EQUAL"
    PRINT TAB(10);"TO 360 DEGREES MINUS EAST LONGITUDE.    "
    PRINT
    PRINT TAB(10);"Number of crossings to compute?    "
    PRINT
    PRINT TAB(10);"THE USER SHOULD RESPOND WITH THE NUMBER "
    PRINT TAB(10);"OF ADDITIONAL CROSSINGS THE PROGRAM     "
    PRINT TAB(10);"SHOULD COMPUTE. DATA ABOUT THESE CROSSINGS"
    PRINT TAB(10);"WILL BE BASED ON THE REFERENCE EVENT"
    PRINT TAB(10);"DESCRIBED ABOVE.                  "
    CALL KEYCHECK
    CLS
    PRINT
    PRINT TAB(10);"  AFTER THE PROGRAM HAS RUN, IT WILL ASK"
    PRINT TAB(10);"THE USER FOR ANOTHER SELECTION. THE USER"
    PRINT TAB(10);"SHOULD RESPOND WITH 'Y' IF HE OR SHE    "
    PRINT TAB(10);"DESIRES THE SELECTION OR 'N' IF NOT.    "
    PRINT
    PRINT TAB(10);"Another selection ( y = yes, n = no )?   "
    PRINT
    PRINT TAB(10);"THE USER SHOULD RESPOND WITH 'N' TO EXIT"
    PRINT TAB(10);"THE PROGRAM.                            "
    PRINT
    PRINT TAB(10);"Another satellite ( y = yes, n = no )?   "
    PRINT
    PRINT TAB(10);"THE USER SHOULD SELECT 'Y' TO COMPUTE   "
    PRINT TAB(10);"CROSSINGS FOR ANOTHER SATELLITE.        "
    PRINT
    PRINT TAB(10);"Another reference event ( y = yes, n = no )?  "
    PRINT
    PRINT TAB(10);"THE USER SHOULD INPUT 'Y' TO COMPUTE    "
    PRINT TAB(10);"EQUATORIAL CROSSINGS BASED ON ANOTHER   "
    PRINT TAB(10);"REFERENCE EVENT.                        "
    CALL KEYCHECK
    CLS
    PRINT
    PRINT TAB(10);"             PROGRAM OUTPUT"
    PRINT
    PRINT TAB(10);"PROGRAM 'TNODE' WILL OUTPUT THE CALENDAR"
    PRINT TAB(10);"DATE, GMT AND WEST LONGITUDE OF ASCENDING"
    PRINT TAB(10);"NODE CROSSINGS. GMT IS PRINTED IN HOURS,"
    PRINT TAB(10);"MINUTES AND SECONDS AND THE WEST LONGITUDE"
    PRINT TAB(10);"IS PRINTED IN DECIMAL DEGREES."
    CALL KEYCHECK

END SUB

'**********************************************************

SUB APOGEE STATIC

    ' APOGEE EVENT SUBROUTINE

    D=PI2-ARGPER
    A=SIN(D)*SQR(1D0-ECC*ECC)
    B=ECC+COS(D)
    CALL ATAN3(A,B,C)
    D=PI-C+ECC*SIN(C)
    TREL=-.5D0*D*TN/PI
    IF TREL<0D0 THEN TREL=TN+TREL
    A=TREL/3600D0
    THOUR=THOUR+INT(A)
    B=(A-INT(A))*60D0
    TMIN=TMIN+INT(B)
    TSEC=TSEC+INT((B-INT(B))*60D0+.5D0)
    CALL CTIME
    ARGLAT=ARGPER+PI
    A=SIN(ARGLAT)*COS(INC)
    B=COS(ARGLAT)
    CALL ATAN3(A,B,C)
    WLONG=WLONG+C+(WE+RDOT)*TREL
    IF WLONG>=PI2 THEN WLONG=WLONG-PI2

END SUB

'**********************************************************

SUB ATAN3(A,B,C) STATIC

    ' FOUR QUADRANT ARC TANGENT SUBROUTINE

    IF ABS(A)<1D-8 THEN
       C=(1D0-SGN(B))*PIDIV2
       EXIT SUB
    ELSE
       C=(2D0-SGN(A))*PIDIV2
    END IF
    IF ABS(B)<1D-8 THEN
       EXIT SUB
    ELSE
       C=C+SGN(A)*SGN(B)*(ABS(ATN(A/B))-PIDIV2)
    END IF

END SUB

'**********************************************************

SUB CTIME STATIC

    ' TIME SUBROUTINE

    IF TSEC>=60D0 THEN
       TSEC=TSEC-60D0
       TMIN=TMIN+1D0
    END IF
    IF TMIN>=60D0 THEN
       TMIN=TMIN-60D0
       THOUR=THOUR+1D0
    END IF
    IF THOUR>=24D0 AND TMIN>0D0 THEN
       THOUR=THOUR-24D0
       JDATE=JDATE+1D0
       PRINT
    END IF

    CTIME$=STR$(THOUR)+" h"+STR$(TMIN)+" m"+STR$(TSEC)+" s"

END SUB
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0921

     Volume in drive A has no label
     Directory of A:\

    ATMOS    BAS      2646   9-28-87   7:40a
    ATMOS    EXE      6384   9-29-87   5:13a
    BRUN3087 EXE     76112   4-07-87  10:52a
    CATALOG  TXT     25752   9-28-87  11:09a
    FILES921 TXT      2582  12-10-87   8:44a
    GALILEAN BAS     12714   9-30-87   7:13a
    GALILEAN EXE     20048   9-30-87   2:37p
    GLIDER   BAS      8320   9-29-87   5:02a
    GLIDER   EXE     13616   9-29-87   5:14a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       386  12-09-87  10:20a
    J2000    BAS      9615   9-30-87   6:34p
    J2000    EXE     14944  10-01-87   3:50a
    KEPLER   BAS      5348   9-30-87   5:51a
    KEPLER   EXE     10432   9-30-87   2:36p
    README   BAT        19   9-29-87   5:12a
    ROCKET1  BAS      3542   9-28-87   7:54a
    ROCKET1  EXE      8192   9-29-87   5:14a
    SIDEREAL BAS     13458   9-30-87   6:25a
    SIDEREAL EXE     18992   9-30-87   2:36p
    SYNCSAT  BAS      8963  10-01-87   3:46a
    SYNCSAT  EXE     15984  10-01-87   3:50a
    TNODE    BAS     12245   9-29-87   6:02a
    TNODE    EXE     20544   9-29-87   6:29a
           24 file(s)     310876 bytes
                           36864 bytes free
