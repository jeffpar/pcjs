---
layout: page
title: "PC-SIG Diskette Library (Disk #1468)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1468/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1468"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "ZIP INSULATION"

    Save money on your home's heating and cooling bills!  The National
    Institute of Standards and Technology wrote this program to help you
    determine how much insulation your home really needs to be both
    comfortable to live in and provide you energy savings of at least a
    seven per cent return over inflation on your cost of insulating.
    
    To have the program calculate your insulation needs for having a
    warmer/cooler, more energy efficient home, you simply answer a few basic
    questions: whether your home is new or used, what components can be
    insulated (such as attic, walls, floor), costs of insulation, how your
    home is heated and air-conditioned, and the efficiency of your furnace.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1468.TXT

{% raw %}
```
Disk No: 1468                                                           
Disk Title: ZIP Insulation                                              
PC-SIG Version: S1.1                                                    
                                                                        
Program Title: Zip Insulation                                           
Author Version: 1.0                                                     
Author Registration: None specified.                                    
Special Requirements: None.                                             
                                                                        
Save money on your home's heating and cooling bills!  The National      
Institute of Standards and Technology wrote this program to help you    
determine how much insulation your home really needs to be both         
comfortable to live in and provide you energy savings of at least a     
seven per cent return over inflation on your cost of insulating.        
                                                                        
To have the program calculate your insulation needs for having a        
warmer/cooler, more energy efficient home, you simply answer a few basic
questions: whether your home is new or used, what components can be     
insulated (such as attic, walls, floor), costs of insulation, how your  
home is heated and air-conditioned, and the efficiency of your furnace. 
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## ZIP.BAS

{% raw %}
```bas
'ZIP - LAST MODIFIED NOVEMBER 31, 1988
'AUTHOR: STEVE PETERSEN, NATIONAL INSTITUTE OF STANDARDS AND TECHNOLOGY (301) 975-6136
'ZIP IS WRITTEN IN QUICKBasic version 4.0 (TM)
'ZIP MUST BE COMPILED WITH /X /O
'ZIP STARTED WITH /BAT RUNS IN BATCH MODE
ZIP:
CLEAR
DBUG = 0  'WHEN DBUG=1 INTERMIEDIATE CALCULATIONS ARE WRITTEN TO A FILE CALLED DBUG.ZIP
VERSION$ = COMMAND$
IF VERSION$ = "" THEN VERSION = 1
IF UCASE$(VERSION$) = "/BAT" THEN VERSION = 2
'VERSION = 2'USE THIS LINE WHEN RUNNING BATCH IN THE QUICKBASIC INTERPRETER ENVIRONMENT (NO COMMAND$)
IF VERSION = 0 THEN PRINT "IMPROPER RUN PARAMETER (USE /BAT OR <CR>)": END

LOCATE , , 1, 6, 7  'CURSOR PARAMETERS

DIM P(4, 45), HUPW(6), REGFACTOR(12)
DIM CAT$(10), NCAT(10), CODEAREA(10), MODEL(10), CODE$(50)
DIM ADDR(10, 8), RW(12), OPTIMAL(12), NETSAVINGS(12), COMPONENT(12), COMP$(12), MESSAGE$(12), EXR(12)
DIM BU$(50), life(2), EQUIPEFF$(5), GASEFF(5), OILEFF(5), SEER(5), HPHSPF(5), HPSEER(5)
DIM RESISEFF(5), DUCTEFF(5), HSYS$(5), CSYS$(5), Energy$(5), LOW(10), HIGH(10)
DIM ATTIC(8), FLOOR(8), CRAWL(8), cost(10, 8), TOTR(10, 8), BASEU(10)
DIM RLEVEL(10), ULEVEL(10, 8), BETAH(10), BETAC(10), UNIT$(5), CF(5), REQUIV(10)

life(1) = 30 'study period for new house
life(2) = 20 'study period for existing house
DISCOUNTRATE = .07'does not include inflation

'COMPONENTS:
COMP$(1) = "Attic Insulation"
COMP$(2) = "Wood-Frame Wall Insulation"
COMP$(3) = "Masonry Wall Insulation"
COMP$(4) = "Floors over Crawlspace"
COMP$(5) = "Slab-Edge Insulation"
COMP$(6) = "Crawlspace Wall Insulation"
COMP$(7) = "Exterior Insulation for Deep Basement"
COMP$(8) = "Interior Insulation for Deep Basement"
COMP$(9) = "Exterior Insulation for Shallow Basement"
COMP$(10) = "Interior Insulation for Shallow Basement"

'EQUIPMENT EFFICIENCIES:
EQUIPEFF$(1) = "LOW": EQUIPEFF$(2) = "MED": EQUIPEFF$(3) = "HIGH": EQUIPEFF$(4) = "VERY HIGH"
   GASEFF(1) = .5:    GASEFF(2) = .65:   GASEFF(3) = .8:     GASEFF(4) = .9  'GAS AND OIL FURNACE EFF
   OILEFF(1) = .5:    OILEFF(2) = .65:   OILEFF(3) = .8:     OILEFF(4) = .9  'GAS AND OIL FURNACE EFF
     SEER(1) = 6!:      SEER(2) = 8!:      SEER(3) = 10!:      SEER(4) = 12! 'ELEC AC SEER
   HPHSPF(1) = 5.5:   HPHSPF(2) = 6.5:   HPHSPF(3) = 7.5:    HPHSPF(4) = 8.5 'HP HSPF ZONE IV (FROM ARI DIRECTORY)
   HPSEER(1) = 7.25:  HPSEER(2) = 8.75:  HPSEER(3) = 10.25:  HPSEER(4) = 11.75'HP SEER CORRESPONDING TO HSPF ABOVE
   RESISEFF(1) = 1! 'ELECTRIC FURNACE
   RESISEFF(2) = 1! 'BASEBOARD ELECTRIC
   DUCTEFF(1) = .85 'ONE-STORY HOUSES
   DUCTEFF(2) = .9  'TWO-STORY HOUSES
HSYS$(1) = "NATURAL GAS FURNACE": HSYS$(2) = "OIL FURNACE": HSYS$(3) = "ELECTRIC FURNACE"
HSYS$(4) = "ELECTRIC BASEBOARD": HSYS$(5) = "HEAT PUMP"
CSYS$(0) = "NONE": CSYS$(1) = "CENTRAL-ELECTRIC": CSYS$(2) = "WINDOW UNIT - ELECTRIC": CSYS$(3) = "EVAPORATIVE COOLER"


Energy$(1) = "ELECTRICITY": UNIT$(1) = "kWh": CF(1) = .003412
Energy$(2) = "FUEL OIL": UNIT$(2) = "gallon": CF(2) = .14
Energy$(3) = "LPG (PROPANE)": UNIT$(3) = "pound": CF(3) = .02156
Energy$(4) = "NATURAL GAS": UNIT$(4) = "therm": CF(4) = .1

'NEED ERROR TRAP IF NO CLIMATE.DAT FILE
OPEN "R", 1, "CLIMATE.DAT"
FIELD #1, 25 AS CTY$, 2 AS ST$, 2 AS COSTREG$, 2 AS DOE$, 2 AS HDD65$, 2 AS CDH74$
BU = 0 'BACKUP INITIALIZER

IF VERSION = 1 THEN  'BEGIN INDIVIDUAL HOUSE
GETZIP:
GOSUB SCREEN1

LOCATE 10, 1
PRINT "     ZIP was written at the National Institute of Standards and Technology"
PRINT "     (formerly the National Bureau of Standards) to compute economic levels"
PRINT "     of insulation for attics, walls, floors, crawlspaces, and basements."
PRINT
PRINT "  The economic level of insulation is the level that provides the greatest long-"
PRINT "  term net savings to the homeowner, including a minimum rate of return of 7%"
PRINT "  above inflation. (20 years used for existing houses, 30 years for new houses)."
PRINT "     Print out the ZIP.DOC file on this disk for more information about ZIP."

LOCATE 19, 1:
PRINT "     Calculations of energy savings in ZIP are keyed to 3-digit Zip Codes."
LOCATE 21, 27: PRINT "(Enter X to exit program)"
LOCATE 20, 71: COLOR 0, 7: PRINT "   ": COLOR 7, 0
DEF SEG = 0: POKE 1050, PEEK(1052): DEF SEG 'CLEAR KEYBOARD BUFFER
LOCATE 20, 7: PRINT "To start ZIP, please enter your Zip Code (first 3 digits only): ";
AA$ = "": N = 0
100 A$ = INKEY$: IF A$ = "" THEN 100
IF N = 0 AND UCASE$(A$) = "X" THEN CLS : END
IF N > 0 AND A$ = CHR$(8) THEN
   N = N - 1:
   AA$ = MID$(AA$, 1, N):
   X = POS(0) - 1:
   LOCATE , X:
   COLOR 0, 7: PRINT " "; : COLOR 7, 0:
   LOCATE , X:
   GOTO 100
END IF
IF INSTR("0123456789", A$) > 0 THEN AA$ = AA$ + A$: N = N + 1: PRINT A$;
IF N < 3 THEN 100 ELSE ZIP$ = AA$
IF ZIP$ = "" THEN GOTO GETZIP
GETZIP2:
ZIP = VAL(ZIP$): IF ZIP = 0 THEN DOE = 0: GOTO SORRY1
GET #1, ZIP
DOE = CVI(DOE$)

SORRY1:
IF DOE = 0 THEN
 CLS
 LOCATE 15, 16: PRINT USING "Sorry, & is not a valid three-digit Zip Code"; ZIP$
 LOCATE 17, 27: PRINT "Press <CR> to continue...";
2200 Q$ = INKEY$: IF Q$ = "" THEN 2200 ELSE Q$ = UCASE$(Q$)
IF Q$ = "X" THEN CLS : END
IF Q$ <> CHR$(13) THEN 2200
GOTO GETZIP
END IF

GOSUB CLIMATEDATA
COSTREG = CVI(COSTREG$)
CITY$ = CTY$
STATE$ = ST$
CLOSE

CITY:
FOR I = 4 TO 19
  IF MID$(CITY$, I, 1) = " " AND MID$(CITY$, I + 1, 1) = " " THEN CITY$ = MID$(CITY$, 1, I - 1) + ", " + STATE$: GOTO CITY
NEXT I

'HEATING DEGREE DAY MESSAGE
IF HDD65 < 900 THEN HDD$ = "less than 1000"
IF HDD65 >= 900 THEN
 XX = HDD65 MOD 1000
 X = INT(HDD65 / 1000) * 1000
 Y$ = "s"
 SELECT CASE XX
   CASE 0 TO 100
      X$ = "approximately"
      Y$ = ""
   CASE 101 TO 350
      X$ = "in the low"
   CASE 351 TO 650
      X$ = "in the mid"
   CASE 651 TO 899
      X$ = "in the high"
   CASE 900 TO 999
      X$ = "approximately"
      Y$ = ""
      X = X + 1000
 END SELECT
 Z$ = STR$(X)
 HDD$ = X$ + Z$ + Y$
END IF

'COOLING HOURS MESSAGE
 CDH74 = INT(CDH74 / 1000 + .5) * 1000
 Z$ = STR$(CDH74)
 CH$ = "approximately" + Z$


'HDD CLASS
SELECT CASE HDD65
   CASE IS < 1000
     HTG$ = "very low"
   CASE 1000 TO 2500
     HTG$ = "low"
   CASE 2501 TO 4500
     HTG$ = "moderate"
   CASE 4501 TO 7000
     HTG$ = "high"
   CASE 7001 TO 9000
     HTG$ = "very high"
   CASE IS > 9000
     HTG$ = "extremely high"
END SELECT

'COOLING HOUR CLASS
SELECT CASE CDH74
   CASE IS < 2000
      CLG$ = "very low"
   CASE 2000 TO 4999
      CLG$ = "low"
   CASE 5000 TO 9999
      CLG$ = "moderate"
   CASE 10000 TO 14999
      CLG$ = "high"
   CASE 15000 TO 24999
      CLG$ = "very high"
   CASE IS >= 25000
      CLG$ = "extremely high"
END SELECT

CLS
LOCATE 5, 10: PRINT USING "The reference location for Zip & in the Zip Climate File is:"; ZIP$
C = (79 - LEN(CITY$)) / 2
COLOR 0, 7: LOCATE 7, C: PRINT CITY$: COLOR 7, 0
SPACES = 35 + LEN(HDD$)
LOCATE 9, (79 - SPACES) / 2: PRINT "Heating degree days (base 65F) are "; HDD$
SPACES = LEN(HTG$) + 2
LOCATE 10, (79 - SPACES) / 2: PRINT USING "(&)"; HTG$
SPACES = 35 + LEN(CH$)
LOCATE 12, (79 - SPACES) / 2: PRINT USING "Cooling degree hours above 74F are &"; CH$
SPACES = LEN(CLG$) + 2
LOCATE 13, (79 - SPACES) / 2: PRINT USING "(&)"; CLG$
ADVISE$ = ""
IF ZIP = 804 THEN ADVISE$ = "For Denver suburbs (e.g., Golden) use ZIP 800 (Denver)"
IF ZIP = 860 THEN ADVISE$ = "At elevations lower than Flagstaff use ZIP 863 (Holbrook)"
IF ZIP = 890 THEN ADVISE$ = "For locations close to Las Vegas use ZIP 891 (Las Vegas)"
IF ZIP = 920 THEN ADVISE$ = "For inland locations use ZIP 925 (Riverside)"
IF ZIP = 930 THEN ADVISE$ = "For inland locations use ZIP 915 (Burbank)"
IF ZIP = 934 THEN ADVISE$ = "For coastal areas use ZIP 939 (Monterey)"
IF ZIP = 939 THEN ADVISE$ = "For inland areas use ZIP 934 (San Luis Obispo)"
IF ZIP = 945 THEN ADVISE$ = "For upper East Bay locations use ZIP 946 (Oakland)"
IF ZIP = 950 THEN ADVISE$ = "For coastal and bay locations use ZIP 951 (San Jose)"
IF ZIP = 954 THEN ADVISE$ = "For coastal areas use ZIP 949 (San Rafael)"
IF ZIP = 967 OR ZIP = 968 THEN ADVISE$ = "Analysis for Hawaii only valid if air conditioning is used extensively."
IF ADVISE$ <> "" THEN LOCATE 16, (79 - LEN(ADVISE$)) / 2: PRINT ADVISE$

PRINT : PRINT
LOCATE 20, 63: COLOR 0, 7: PRINT "   ": COLOR 7, 0
LOCATE 20, 17: PRINT "Press <CR> to proceed, or enter new Zip Code: ";
AA$ = "": N = 0
200 A$ = INKEY$: IF A$ = "" THEN 200
IF N = 0 AND UCASE$(A$) = "X" THEN CLS : END
IF N = 0 AND A$ = CHR$(13) THEN GOTO HOUSETYPE
IF N > 0 AND A$ = CHR$(8) THEN
   N = N - 1:
   AA$ = MID$(AA$, 1, N):
   X = POS(0) - 1:
   LOCATE , X:
   COLOR 0, 7: PRINT " "; : COLOR 7, 0:
   LOCATE , X:
   GOTO 200
END IF
IF INSTR("0123456789", A$) > 0 THEN AA$ = AA$ + A$: N = N + 1: PRINT A$;
IF N < 3 THEN 200 ELSE ZIP$ = AA$
OPEN "R", 1, "CLIMATE.DAT"
FIELD #1, 25 AS CTY$, 2 AS ST$, 2 AS COSTREG$, 2 AS DOE$, 2 AS HDD65$, 2 AS CDH74$
GOTO GETZIP2


HOUSETYPE:
CLS
LOCATE 6, 21: PRINT "Do you want insulation information for:"
LOCATE 8, 30: PRINT "(1) NEW HOUSE"
LOCATE 9, 30: PRINT "(2) EXISTING HOUSE"
LOCATE 24, 1: PRINT "Note: You can back up at any question by entering B or start over by entering S";
LOCATE 13, 25: PRINT "Enter your selection by number: "; :
300 Q$ = INKEY$: IF Q$ = "" THEN 300 ELSE Q$ = UCASE$(Q$)
IF INSTR("SB12", Q$) = 0 THEN 300
IF Q$ = "S" OR Q$ = "B" THEN GOTO ZIP
HT = VAL(Q$)

BUP = 0 'INITIALIZE BACKUP INDEX
HSYSSELECT:
CLS
LOCATE 5, 8: PRINT "         What type of primary heating system do you have?"
LOCATE 7, 8: PRINT "(1) NATURAL GAS   (3) ELECTRIC FURNACE      (5) ELECTRIC HEAT PUMP"
LOCATE 8, 8: PRINT "(2) OIL           (4) ELECTRIC BASEBOARD"
LOCATE 10, 20: PRINT "Enter your selection by number (1-5): ";
400 Q$ = INKEY$: IF Q$ = "" THEN 400 ELSE Q$ = UCASE$(Q$)
IF INSTR("SB12345", Q$) = 0 THEN 400
IF Q$ = "B" THEN GOTO HOUSETYPE
IF Q$ = "S" THEN GOTO ZIP
HSYS = VAL(Q$)
IF HSYS = 5 THEN CSYS = 5: AC = 1
BUP = BUP + 1: BU$(BUP) = "HSYSSELECT"
IF HSYS = 1 OR HSYS = 2 THEN
  LOCATE 14, 16: PRINT "What is the approximate efficiency of your furnace?"
  LOCATE 16, 16: PRINT " (1) LOW    (2) MEDIUM   (3) HIGH  (4) VERY HIGH"
  LOCATE 17, 16: PRINT "     50%          65%         80%         90%"
ELSEIF HSYS = 5 THEN
  LOCATE 14, 16: PRINT "What is the approximate efficiency of your heat pump?"
  LOCATE 16, 16: PRINT "  (1) LOW    (2) MEDIUM   (3) HIGH  (4) VERY HIGH"
END IF
IF HSYS = 1 OR HSYS = 2 OR HSYS = 5 THEN
HEFFSELECT:
  LOCATE 18, 21: PRINT "Enter your selection by number (1-4),"
  LOCATE 19, 21: PRINT "or press <CR> to default to medium: ";
500 Q$ = INKEY$: IF Q$ = "" THEN 500 ELSE Q$ = UCASE$(Q$)
  IF INSTR("SB1234", Q$) = 0 AND Q$ <> CHR$(13) THEN 500
  IF Q$ = "B" THEN GOTO BACKUP
  IF Q$ = "S" THEN GOTO ZIP
  IF Q$ = CHR$(13) THEN Q$ = "2" 'DEFAULT = MEDIUM
  EFF = VAL(Q$)
END IF

DUCTS:
IF HSYS <> 4 THEN
  CLS
  LOCATE 8, 7: PRINT "Do you have ductwork in attic, crawlspace, or other unheated areas?"
  LOCATE 20, 7: PRINT "(If there is ductwork in these areas, duct losses will be estimated"
  LOCATE 21, 7: PRINT "   in calculating the energy savings from any added insulation.)"
  LOCATE 9, 35: PRINT "Enter Y or N: ";
600 Q$ = INKEY$: IF Q$ = "" THEN 600 ELSE Q$ = UCASE$(Q$)
  IF INSTR("SBYN", Q$) = 0 THEN 600
  IF Q$ = "B" THEN GOTO BACKUP
  IF Q$ = "S" THEN GOTO ZIP
  IF Q$ = "N" THEN DUCTS = 0
  IF Q$ = "Y" THEN
     DUCTS = 1
     LOCATE 10, 20: PRINT "Does house have 2 or more stories (Y/N)? ";
700  Q$ = INKEY$: IF Q$ = "" THEN 700 ELSE Q$ = UCASE$(Q$)
     IF INSTR("SBYN", Q$) = 0 THEN 700
     IF Q$ = "B" THEN CLS : GOTO DUCTS
     IF Q$ = "S" THEN GOTO ZIP
     IF Q$ = "Y" THEN STORIES = 2 ELSE STORIES = 1
  END IF
BUP = BUP + 1: BU$(BUP) = "DUCTS"
END IF

GOSUB HEATINGSYSEFF

CSYSSELECT:
IF HSYS <> 5 THEN 'BEGIN COOLING SYSTEM DEFINITION
  CLS
  LOCATE 5, 14: PRINT "What type of air conditioning system do you have?"
  LOCATE 7, 14: PRINT "(0) NONE                  (2) WINDOW UNIT-ELECTRIC"
  LOCATE 8, 14: PRINT "(1) CENTRAL-ELECTRIC      (3) EVAPORATIVE COOLER"
  LOCATE 10, 14: PRINT "    Enter your selection by number (0-3): ";
800 Q$ = INKEY$: IF Q$ = "" THEN 800 ELSE Q$ = UCASE$(Q$)
  IF INSTR("SB0123", Q$) = 0 THEN 800
  IF Q$ = "B" THEN GOTO BACKUP
  IF Q$ = "S" THEN GOTO ZIP
  CSYS = VAL(Q$)
  AC = 0: IF CSYS = 1 OR CSYS = 2 THEN AC = 1
  BUP = BUP + 1: BU$(BUP) = "CSYSSELECT"
  IF AC = 1 THEN 'GET AIR CONDITIONER EFFICIENCY
    LOCATE 15, 11: PRINT "What is the approximate efficiency of your air conditioner?"
    LOCATE 17, 11: PRINT "      (1) LOW   (2) MEDIUM   (3) HIGH  (4) VERY HIGH"
    LOCATE 18, 11: PRINT "   SEER:   6          8           10           12"
EFFCOOLING:
    LOCATE 20, 20: PRINT "Enter your selection by number (1-4),"
    LOCATE 21, 20: PRINT " or press <CR> to default to medium: ";
900 Q$ = INKEY$: IF Q$ = "" THEN 900 ELSE Q$ = UCASE$(Q$)
    IF INSTR("SB1234", Q$) = 0 AND Q$ <> CHR$(13) THEN 900
    IF Q$ = "B" THEN GOTO BACKUP
    IF Q$ = "S" THEN GOTO ZIP
    IF Q$ = CHR$(13) THEN Q$ = "2"  'DEFAULT TO MEDIUM
    EFF = VAL(Q$)
    GOSUB COOLINGSYSEFF
  END IF  'END AC EFFICIENCY
END IF  'END COOLING SYSTEM DEFINITION

SHOWPRICES:
CLS
GOSUB ENPRICES
HUNIT$ = UNIT$(HENERGY): HENERGY$ = Energy$(HENERGY): HCF = CF(HENERGY): HP = P(HENERGY, PIVOTYR) * GNPDEF1
CUNIT$ = UNIT$(CENERGY): CENERGY$ = Energy$(CENERGY): CCF = CF(CENERGY): CP = P(CENERGY, PIVOTYR) * GNPDEF1
LOCATE 5, 10: PRINT USING "Default & price for space heating =$$#.###/&"; HENERGY$, HP * HCF, HUNIT$
IF AC = 1 THEN
LOCATE 7, 10: PRINT USING "Default & price for space cooling =$$#.###/&"; CENERGY$, CP * CCF, CUNIT$
IF HENERGY = 4 THEN LOCATE 23, 3: PRINT "Note: A 'therm' of gas is 100,000 Btu, or approximately 100 cubic feet.";
 IF HENERGY = 1 AND CENERGY = 1 THEN
   LOCATE 20, 1: PRINT "   Note: summer and winter electricity rates are different in many areas.";
		 PRINT "   If they are different in your area, the rates shown above should be changed";
		 PRINT "   to reflect this.  (Use summer rates for cooling, winter rates for heating.)";
 END IF
END IF

J = HENERGY: GOSUB UPW: HUPW = UPW
IF AC = 1 THEN
   IF CENERGY = HENERGY THEN CUPW = HUPW
   IF CENERGY <> HENERGY THEN
     J = CENERGY
     GOSUB UPW
     CUPW = UPW
   END IF
END IF

CHANGEENERGYPRICES:
PRINT
IF AC = 1 THEN LOCATE 12, 14: PRINT "Do you want to change these energy prices to better "
IF AC = 0 THEN LOCATE 12, 14: PRINT "Do you want to change this energy price to better "
LOCATE 13, 25: PRINT "reflect local prices (Y/N)? ";
1000 Q$ = INKEY$: IF Q$ = "" THEN 1000 ELSE Q$ = UCASE$(Q$)
IF INSTR("SBYN", Q$) = 0 THEN 1000
IF Q$ = "B" THEN GOTO BACKUP
IF Q$ = "S" THEN GOTO ZIP
IF Q$ = "Y" THEN 'ACCEPTABLE PRICE RANGES FOR ENERGY
   LOW(1) = .03: HIGH(1) = .2'ELECTRICITY
   LOW(2) = .75: HIGH(2) = 2!'FUEL OIL
   LOW(3) = .75: HIGH(3) = 3!'LPG
   LOW(4) = .3: HIGH(4) = 1.25'NAT GAS
CHANGEHEATPRICE:
   CLS
   LOCATE 18, 20: PRINT "Press <CR> when entry is completed.";
   IF HENERGY = 4 THEN LOCATE 23, 3: PRINT "Note: A 'therm' of gas is 100,000 Btu, or approximately 100 cubic feet.";
   LOCATE 5, 13: PRINT USING "Enter current & price for heating ($/&)"; HENERGY$, HUNIT$
   LOCATE 6, 25: INPUT "or press <CR> if no change: ", Q$: Q$ = UCASE$(Q$)
    IF Q$ = "B" THEN GOTO SHOWPRICES
    IF Q$ = "S" THEN GOTO ZIP
    IF Q$ <> "" THEN
     IF MID$(Q$, 1, 1) = "$" THEN Q$ = MID$(Q$, 2, 6)
     HHP = VAL(Q$)
     IF HHP < LOW(HENERGY) OR HHP > HIGH(HENERGY) THEN
      LOCATE 9, 15: PRINT USING "& price must be between $$#.## and $$#.##/&"; HENERGY$, LOW(HENERGY), HIGH(HENERGY), HUNIT$
      LOCATE 18, 1: PRINT STRING$(79, " ");
      LOCATE 12, 27: PRINT "Press <CR> to continue...";
2900  Q$ = INKEY$: IF Q$ = "" THEN 2900 ELSE Q$ = UCASE$(Q$)
      IF INSTR("S", Q$) = 0 AND Q$ <> CHR$(13) THEN 2900
      IF Q$ = "S" THEN GOTO ZIP  'NO BACKUP ALLOWED HERE
      GOTO CHANGEHEATPRICE
     END IF
     HP = HHP / HCF
   END IF

CHANGECOOLPRICE:
   IF AC = 1 THEN
     LOCATE 18, 20: PRINT "Press <CR> when entry is completed.";
     LOCATE 15, 13: PRINT USING "Enter current & price for cooling ($/&)"; CENERGY$, CUNIT$
     LOCATE 16, 25: INPUT "or press <CR> if no change: ", Q$: Q$ = UCASE$(Q$)
     IF Q$ = "B" THEN GOTO SHOWPRICES
     IF Q$ = "S" THEN GOTO ZIP
     IF Q$ <> "" THEN
       IF MID$(Q$, 1, 1) = "$" THEN Q$ = MID$(Q$, 2, 6)
       CCP = VAL(Q$)
       IF CCP < LOW(CENERGY) OR CCP > HIGH(CENERGY) THEN
	 LOCATE 18, 15: PRINT USING "& price must be between $$#.## and $$#.##/&"; CENERGY$, LOW(CENERGY), HIGH(CENERGY), CUNIT$
	 LOCATE 19, 27: PRINT "Press <CR> to continue...";
3000     Q$ = INKEY$: IF Q$ = "" THEN 3000 ELSE Q$ = UCASE$(Q$)
	 IF INSTR("S", Q$) = 0 AND Q$ <> CHR$(13) THEN 3000
	 IF Q$ = "S" THEN GOTO ZIP
	 CLS : GOTO CHANGECOOLPRICE
       END IF
       CP = CCP / CCF
      END IF
   END IF
END IF
BUP = BUP + 1: BU$(BUP) = "SHOWPRICES"

NEWHOUSE:
IF HT = 1 THEN
COMPONENTMENUNEW:
  INSCOST$ = "INSCOST.NEW": GOSUB INSCOST
  BU = 0: GOSUB MENU: IF BU = 1 THEN GOTO BACKUP
  EXATTIC = 0: EXFLOOR = 0: EXCRAWL = 0
  BUP = BUP + 1: BU$(BUP) = "COMPONENTMENUNEW"
END IF          'END NEW HOUSE


RETROFIT:
IF HT = 2 THEN
COMPONENTMENURET:
   INSCOST$ = "INSCOST.RET": GOSUB INSCOST
   BU = 0: GOSUB MENU: IF BU = 1 THEN GOTO BACKUP
   BUP = BUP + 1: BU$(BUP) = "COMPONENTMENURET"
  
  
   IF COMPONENT(1) = 1 THEN
ATTIC:
    ATTIC(0) = 0: ATTIC(1) = 7: ATTIC(2) = 11: ATTIC(3) = 19: ATTIC(4) = 22: ATTIC(5) = 30: ATTIC(6) = 38
    CLS
    LOCATE 3, 15: PRINT "   How much insulation is there in your attic now?"
    LOCATE 5, 15: PRINT "                    Approximate Equivalent in Inches"
    LOCATE 6, 15: PRINT "  Existing          --------------------------------"
    LOCATE 7, 15: PRINT " Insulation              Fiberglass       Cellulosic"
    LOCATE 8, 15: PRINT "   Level            --------------------    Blown"
    LOCATE 9, 15: PRINT "------------------  Batt       Blown      ----------"
    LOCATE 10, 15: PRINT "(0) None             O           O            O"
    LOCATE 11, 15: PRINT "(1) R-7             2.5       2.0 -3.0     2.0-3.0"
    LOCATE 12, 15: PRINT "(2) R-11            3.5       3.75-5.0     3.0-3.5"
    LOCATE 13, 15: PRINT "(3) R-19            6.0       6.5 -8.75    5.0-6.0"
    LOCATE 14, 15: PRINT "(4) R-22            7.0       7.5 -10.0    6.0-7.0"
    LOCATE 15, 15: PRINT "(5) R-30            9.0      10.25-13.75   8.0-9.5"
    LOCATE 16, 15: PRINT "(6) R-38           12.0      13.75-18.25  10.3-12.0"
ATTIC1:
    LOCATE 18, 20: PRINT "Enter your selection by number (0-6): ";
1200 Q$ = INKEY$: IF Q$ = "" THEN 1200 ELSE Q$ = UCASE$(Q$)
    IF INSTR("SB0123456", Q$) = 0 THEN 1200
    IF Q$ = "B" THEN GOTO BACKUP
    IF Q$ = "S" THEN GOTO ZIP
    EXATTIC = VAL(Q$)
    BUP = BUP + 1: BU$(BUP) = "ATTIC"
  END IF 'component(1)=1

   IF COMPONENT(2) = 1 THEN
WFWALL:
    CLS
    LOCATE 3, 13: PRINT "             Exterior Wood-Frame Walls:"
    LOCATE 5, 13: PRINT "Do these walls already contain some insulation (Y/N)? ";
1300 Q$ = INKEY$: IF Q$ = "" THEN 1300 ELSE Q$ = UCASE$(Q$)
    IF INSTR("SBYN", Q$) = 0 THEN 1300
    IF Q$ = "B" THEN GOTO BACKUP
    IF Q$ = "S" THEN GOTO ZIP
    IF Q$ = "Y" THEN
      LOCATE 7, 10: PRINT "Exterior wood frame walls that already have some insulation "
      LOCATE 8, 10: PRINT "are not usually economic to reinsulate and are not included"
      LOCATE 9, 10: PRINT "                in this analysis."
      COMPONENT(2) = 0
      LOCATE 15, 27: PRINT "Press <CR> to continue...";
2300  Q$ = INKEY$: IF Q$ = "" THEN 2300 ELSE Q$ = UCASE$(Q$)
      IF INSTR("SB", Q$) = 0 AND Q$ <> CHR$(13) THEN 2300
      IF Q$ = "B" THEN GOTO BACKUP
      IF Q$ = "S" THEN GOTO ZIP
    END IF
   BUP = BUP + 1: BU$(BUP) = "WFWALL"
   END IF


   IF COMPONENT(3) = 1 THEN
MWALL:
    CLS
    LOCATE 3, 5: PRINT "                       Exterior Masonry Walls:"
    LOCATE 5, 5: PRINT "  Insulation of masonry walls in existing houses is typically impractical"
    LOCATE 6, 5: PRINT "unless you are about to install new wall board or an exterior wall covering."
    LOCATE 8, 5: PRINT "    Do you still want to include insulation of masonry walls (Y/N)? ";
1400 Q$ = INKEY$: IF Q$ = "" THEN 1400 ELSE Q$ = UCASE$(Q$)
    IF INSTR("SBYN", Q$) = 0 THEN 1400
    IF Q$ = "B" THEN GOTO BACKUP
    IF Q$ = "S" THEN GOTO ZIP
    IF Q$ = "N" THEN COMPONENT(3) = 0
    IF Q$ = "Y" THEN
      LOCATE 11, 5: PRINT " The economic analysis of insulation of masonry walls will not include"
      LOCATE 12, 5: PRINT "the cost of removing and replacing the wall covering unless these costs "
      LOCATE 13, 5: PRINT "   are specifically included in the insulation costs displayed below."
      LOCATE 15, 5: PRINT "                    Press <CR> to continue...";
3100  Q$ = INKEY$: IF Q$ <> CHR$(13) THEN 3100
    END IF
   BUP = BUP + 1: BU$(BUP) = "MWALL"
   END IF
			
   IF COMPONENT(4) = 1 THEN
FLOOR:
    IF FLAG6 = 1 THEN COMPONENT(6) = 1'RESTORE COMPONENT(6) IF BACKUP USED TO GET HERE
    FLOOR(0) = 0: FLOOR(1) = 7: FLOOR(2) = 11: FLOOR(3) = 13: FLOOR(4) = 19
    CLS
    LOCATE 1, 18: PRINT "        Floors over Crawlspaces:"
    LOCATE 3, 18: PRINT "How much insulation is under the floor now?"
    LOCATE 5, 26: PRINT "  Approximate   Approximate"
    LOCATE 6, 26: PRINT "    R-Value      Thickness"
    LOCATE 7, 26: PRINT "                 (inches)"
    LOCATE 8, 26: PRINT "(0)  R-0            0"
    LOCATE 9, 26: PRINT "(1)  R-7           2.5"
    LOCATE 10, 26: PRINT "(2)  R-11          3.5"
    LOCATE 11, 26: PRINT "(3)  R-13          4.O"
    LOCATE 12, 26: PRINT "(4)  R-19          6.0"
FLOOR1:
    LOCATE 14, 18: PRINT "Enter your selection by number (0-4): ";
1500 Q$ = INKEY$: IF Q$ = "" THEN 1500 ELSE Q$ = UCASE$(Q$)
    IF INSTR("SB01234", Q$) = 0 THEN 1500
    IF Q$ = "B" THEN GOTO BACKUP
    IF Q$ = "S" THEN GOTO ZIP
    EXFLOOR = VAL(Q$)
    BUP = BUP + 1: BU$(BUP) = "FLOOR"
   END IF 'comp(4)=1

    IF COMPONENT(6) = 1 THEN
CRAWL:
    IF EXFLOOR > 0 THEN
      CLS
      LOCATE 4, 10: PRINT "                        Crawlspace Walls:"
      
      LOCATE 6, 10: PRINT "  You already have insulation under the floor above crawlspace."
      LOCATE 7, 10: PRINT "Insulation of crawlspace walls is unlikely to be economic and will"
      LOCATE 8, 10: PRINT "               not be evaluated in this analysis."
      COMPONENT(6) = 0: FLAG6 = 1 'FLAG6=1 MEANS THAT COMPONENT(6) HAD BEEN =1
      LOCATE 15, 27: PRINT "Press <CR> to continue...";
2400  Q$ = INKEY$: IF Q$ = "" THEN 2400 ELSE Q$ = UCASE$(Q$)
      IF INSTR("SB", Q$) = 0 AND Q$ <> CHR$(13) THEN 2400
      IF Q$ = "B" THEN GOTO BACKUP
      IF Q$ = "S" THEN GOTO ZIP
    END IF
  END IF
  IF COMPONENT(6) = 1 THEN
    CRAWL(0) = 0: CRAWL(1) = 7: CRAWL(2) = 11: CRAWL(3) = 13: CRAWL(4) = 19
    CLS
    LOCATE 1, 15: PRINT "                Crawlspace Walls:"
    LOCATE 3, 15: PRINT "How much insulation is on the crawlspace walls now?"
    LOCATE 5, 23: PRINT "  Approximate   Approximate"
    LOCATE 6, 23: PRINT "    R-Value      Thickness"
    LOCATE 7, 23: PRINT "                  (inches)"
    LOCATE 8, 23: PRINT "(0)  R-0            0"
    LOCATE 9, 23: PRINT "(1)  R-7           2.5"
    LOCATE 10, 23: PRINT "(2)  R-11          3.5"
    LOCATE 11, 23: PRINT "(3)  R-13          4.O"
    LOCATE 12, 23: PRINT "(4)  R-19          6.0"
CRAWL1:
    LOCATE 14, 20: PRINT "Enter your selection by number (0-4): ";
1600 Q$ = INKEY$: IF Q$ = "" THEN 1600 ELSE Q$ = UCASE$(Q$)
    IF INSTR("SB01234", Q$) = 0 THEN 1600
    IF Q$ = "B" THEN GOTO BACKUP
    IF Q$ = "S" THEN GOTO ZIP
    EXCRAWL = VAL(Q$)
    BUP = BUP + 1: BU$(BUP) = "CRAWL"
   END IF

   IF EXCRAWL > 0 AND COMPONENT(4) = 1 THEN
      CLS
      LOCATE 4, 5: PRINT "Since you already have insulation on the crawlspace walls rather than under"
      LOCATE 5, 5: PRINT " the floor, any additional insulation will be evaluated for the walls only."
      LOCATE 6, 5: PRINT "             Insulation under the floor will not be evaluated."
      LOCATE 10, 5: PRINT "                     Press <CR> to continue...";
2500  Q$ = INKEY$: IF Q$ = "" THEN 2500 ELSE Q$ = UCASE$(Q$)
      IF INSTR("SB", Q$) = 0 AND Q$ <> CHR$(13) THEN 2500
      IF Q$ = "B" THEN GOTO BACKUP
      IF Q$ = "S" THEN GOTO ZIP
      COMPONENT(4) = 0   'DELETE INSULATION UNDER FLOORS
   END IF

   IF COMPONENT(5) = 1 THEN
SLAB:
     CLS
     LOCATE 1, 10: PRINT "                      Concrete Slab Floors:"
     LOCATE 3, 10: PRINT "Do you already have perimeter insulation around the concrete"
     LOCATE 4, 10: PRINT "                    slab of your house (Y/N)? ";
1700 Q$ = INKEY$: IF Q$ = "" THEN 1700 ELSE Q$ = UCASE$(Q$)
    IF INSTR("SBYN", Q$) = 0 THEN 1700
    IF Q$ = "B" THEN GOTO BACKUP
    IF Q$ = "S" THEN GOTO ZIP
    IF Q$ = "Y" THEN
       LOCATE 7, 10: PRINT "Further slab edge insulation is not likely to be cost effective"
       LOCATE 8, 10: PRINT "and will not be evaluated in this analysis."
       COMPONENT(5) = 0
       LOCATE 15, 27: PRINT "Press <CR> to continue...";
3200  Q$ = INKEY$: IF Q$ <> CHR$(13) THEN 3200
     END IF
   BUP = BUP + 1: BU$(BUP) = "SLAB"
   END IF
 


   IF COMPONENT(7) = 1 OR COMPONENT(8) = 1 OR COMPONENT(9) = 1 OR COMPONENT(10) = 1 THEN
BASEMENT:
     CLS
     LOCATE 1, 10: PRINT "                  Basement Wall Insulation:"
     LOCATE 3, 10: PRINT "Is there some existing insulation in the basement wall (Y/N)? ";
1800 Q$ = INKEY$: IF Q$ = "" THEN 1800 ELSE Q$ = UCASE$(Q$)
    IF INSTR("SBYN", Q$) = 0 THEN 1800
    IF Q$ = "B" THEN GOTO BACKUP
    IF Q$ = "S" THEN GOTO ZIP
    IF Q$ = "Y" THEN
      LOCATE 5, 7: PRINT "Further basement wall insulation is not likely to be economic and"
      LOCATE 6, 7: PRINT "               is not evaluated in this analysis. "
      COMPONENT(7) = 0: COMPONENT(8) = 0: COMPONENT(9) = 0: COMPONENT(10) = 0
      LOCATE 15, 27: PRINT "Press <CR> to continue...";
2600  Q$ = INKEY$: IF Q$ = "" THEN 2600 ELSE Q$ = UCASE$(Q$)
      IF INSTR("SB", Q$) = 0 AND Q$ <> CHR$(13) THEN 2600
      IF Q$ = "B" THEN GOTO BACKUP
      IF Q$ = "S" THEN GOTO ZIP
     END IF
   BUP = BUP + 1: BU$(BUP) = "BASEMENT"
   END IF


   IF COMPONENT(7) = 1 THEN
EXTDPBASE:
    CLS
    LOCATE 3, 10: PRINT "         Exterior Insulation for Deep Basements:"
    LOCATE 5, 10: PRINT "For existing houses with deep basements, exterior insulation"
    LOCATE 6, 10: PRINT "  is generally practical for only the top half of the wall."
    LOCATE 8, 10: PRINT "    Only the top half will be evaluated in this analysis."
    LOCATE 15, 27: PRINT "Press <CR> to continue...";
2700 Q$ = INKEY$: IF Q$ = "" THEN 2700 ELSE Q$ = UCASE$(Q$)
    IF INSTR("SB", Q$) = 0 AND Q$ <> CHR$(13) THEN 2700
    IF Q$ = "B" THEN GOTO BACKUP
    IF Q$ = "S" THEN GOTO ZIP
   BUP = BUP + 1: BU$(BUP) = "EXTDPBASE"
   END IF

   IF COMPONENT(8) = 1 OR COMPONENT(10) = 1 THEN
INTBASE:
    CLS
    LOCATE 3, 15: PRINT "      Basement Walls (Interior Insulation):"
    LOCATE 5, 15: PRINT "Are the basement walls already finished off (Y/N)? ";
1900 Q$ = INKEY$: IF Q$ = "" THEN 1900 ELSE Q$ = UCASE$(Q$)
    IF INSTR("SBYN", Q$) = 0 THEN 1900
    IF Q$ = "B" THEN GOTO BACKUP
    IF Q$ = "S" THEN GOTO ZIP
    IF Q$ = "Y" THEN
      LOCATE 10, 3: PRINT "    Insulation of the interior basement walls is generally not economic"
      LOCATE 11, 3: PRINT "if the walls are already finished.  Consider using exterior wall insulation."
      COMPONENT(8) = 0: COMPONENT(10) = 0
      LOCATE 15, 27: PRINT "Press <CR> to continue...";
2800  Q$ = INKEY$: IF Q$ = "" THEN 2800 ELSE Q$ = UCASE$(Q$)
      IF INSTR("SB", Q$) = 0 AND Q$ <> CHR$(13) THEN 2800
      IF Q$ = "B" THEN GOTO BACKUP
      IF Q$ = "S" THEN GOTO ZIP
    END IF
   BUP = BUP + 1: BU$(BUP) = "INTBASE"
   END IF

END IF 'END RETROFIT EXISTING HOUSE

INSPRICECHANGE:
CLS
PRINT "  The following prices will be used to compute economic levels of insulation"
PRINT "                  for your house unless you change them:"

IF COMPONENT(1) = 1 THEN  'ATTIC INSULATION
COMP1:
  ICOST = 1
  INS$ = "Attic Insulation Costs:"
  EX1 = EXATTIC
  EX2 = ATTIC(EXATTIC)
  IF HT = 1 THEN BU = 10 ELSE BU = 11'BACKUP CODES
  BU = 0: GOSUB COSTDISPLAY: IF BU = 1 THEN GOTO BACKUP
  BUP = BUP + 1: BU$(BUP) = "COMP1"
END IF

IF COMPONENT(2) = 1 THEN
COMP2:
  ICOST = 2
  INS$ = "Wood-Frame Wall Insulation Costs:"
  EX1 = 0
  BU = 11
  CLS
  BU = 0: GOSUB COSTDISPLAY: IF BU = 1 THEN GOTO BACKUP
  BUP = BUP + 1: BU$(BUP) = "COMP2"
END IF

IF COMPONENT(3) = 1 THEN
COMP3:
  ICOST = 3
  INS$ = "Masonry Wall Insulation Costs:"
  EX1 = 0
  BU = 11
  CLS
  BU = 0: GOSUB COSTDISPLAY: IF BU = 1 THEN GOTO BACKUP
  BUP = BUP + 1: BU$(BUP) = "COMP3"
  END IF

IF COMPONENT(4) = 1 THEN
COMP4:
  ICOST = 4
  INS$ = "Floor Insulation Costs:"
  EX1 = EXFLOOR
  EX2 = FLOOR(EXFLOOR)
  BU = 11
  CLS
  BU = 0: GOSUB COSTDISPLAY: IF BU = 1 THEN GOTO BACKUP
  BUP = BUP + 1: BU$(BUP) = "COMP4"
END IF

IF COMPONENT(5) = 1 THEN
COMP5:
  ICOST = 5
  INS$ = "Slab-on-Grade Insulation Costs:"
  EX1 = 0
  BU = 11
  CLS
  BU = 0: GOSUB COSTDISPLAY: IF BU = 1 THEN GOTO BACKUP
  BUP = BUP + 1: BU$(BUP) = "COMP5"
  
END IF

IF COMPONENT(6) = 1 THEN 'BEGIN CRAWLCOST
COMP6:
  ICOST = 6
  INS$ = "Crawlspace Wall Insulation Costs:"
  EX1 = EXCRAWL
  EX2 = CRAWL(EXCRAWL)
  BU = 11
  CLS
  BU = 0: GOSUB COSTDISPLAY: IF BU = 1 THEN GOTO BACKUP
  BUP = BUP + 1: BU$(BUP) = "COMP6"
END IF

IF COMPONENT(7) = 1 THEN
COMP7:
  ICOST = 7
  INS$ = "Exterior Insulation on Deep Basement Walls"
  EX1 = 0
  BU = 11
  CLS
  BU = 0: GOSUB COSTDISPLAY: IF BU = 1 THEN GOTO BACKUP
  BUP = BUP + 1: BU$(BUP) = "COMP7"
END IF

IF COMPONENT(8) = 1 OR COMPONENT(10) = 1 THEN
COMP8:
  ICOST = 8
  INS$ = "Interior Insulation on Basement Walls"
  EX1 = 0
  BU = 11
  CLS
  BU = 0: GOSUB COSTDISPLAY: IF BU = 1 THEN GOTO BACKUP
  BUP = BUP + 1: BU$(BUP) = "COMP8"
END IF

IF COMPONENT(9) = 1 THEN
COMP9:
  ICOST = 9
  INS$ = "Exterior Insulation on Shallow Basement Walls:"
  EX1 = 0
  BU = 11
  CLS
  BU = 0: GOSUB COSTDISPLAY: IF BU = 1 THEN GOTO BACKUP
  BUP = BUP + 1: BU$(BUP) = "COMP9"
END IF

IF COMPONENT(10) = 1 THEN   'INTERIOR INSULATION ON SHALLOW BASEMENT WALLS
COMP10:
   OLD = 8   'USE SAME COSTS AS INTERIOR INSULATION ON DEEP BASEMENT WALLS
   new = 10
   NCAT(new) = NCAT(OLD)
   CODEAREA(new) = CODEAREA(OLD)
   MODEL(new) = MODEL(OLD)
   FOR K = 1 TO NCAT(new)
      ADDR(new, K) = ADDR(OLD, K)
      cost(new, K) = cost(OLD, K)
   NEXT K
END IF
  
GOSUB COMPUTESAVINGS
GOTO PRINTREPORT

END IF  'END INDIVIDUAL HOUSE ANALYSIS

'----------------------------------------------------------------------------
IF VERSION = 2 THEN 'BEGIN ANALYSIS OF ALL ZIPS
GOSUB SCREEN1

GETZIPS:
  PRINT
  PRINT "                           Analysis for All Zip Codes:"
firstzip:
  LOCATE 10, 1
  INPUT "                Enter first Zip Code for analysis (3 digits): ", firstzip
  IF firstzip < 10 OR firstzip > 999 THEN
    LOCATE 12, 30: PRINT "Invalid Zip Code"
    LOCATE 10, 60: PRINT STRING$(10, " ")
    GOTO firstzip
  END IF
lastzip:
  LOCATE 12, 1
  INPUT "                Enter last Zip Code for analysis (3 digits): ", lastzip
  IF lastzip < 10 OR lastzip > 999 THEN
    LOCATE 15, 15: PRINT "Invalid Zip Code...Try again"
    LOCATE 12, 1: PRINT STRING$(70, " ")
    GOTO lastzip
  END IF
  IF lastzip <= firstzip THEN
    LOCATE 15, 15: PRINT "Last Zip must be greater than first Zip"
    LOCATE 12, 1: PRINT STRING$(70, " ")
    GOTO lastzip
  END IF

OUTFL:
  LOCATE 15, 1: PRINT STRING$(79, " ")
  LOCATE 15, 10: INPUT "Enter drive and name of output file (e.g.,C:ZIPFILE.1)"; OUTFL$
  LOCATE 17, 1: PRINT STRING$(79, " ")
  FLAGERROR = 0: ON ERROR GOTO ERROR1: OPEN "O", 3, OUTFL$
  IF FLAGERROR = 1 THEN GOTO OUTFL ELSE ON ERROR GOTO 0: GOTO HOUSETYPE2
ERROR1:
  LOCATE 17, 10: PRINT "Can't open file named "; OUTFL$; " -- try another file name..."
  FLAGERROR = 1
  RESUME NEXT


HOUSETYPE2:
  LOCATE
  LOCATE 20, 20: PRINT "(1) NEW CONSTRUCTION  OR  (2) RETROFIT";
2000 Q$ = INKEY$: IF Q$ = "" THEN 2000 ELSE Q$ = UCASE$(Q$)
    IF INSTR("12", Q$) = 0 THEN 2000
  IF VAL(Q$) = 1 THEN
    HT = 1
    INSCOST$ = "INSCOST.NEW"
  ELSE
    HT = 2
    INSCOST$ = "INSCOST.RET"
  END IF
  EXATTIC = 0: EXFLOOR = 0: EXCRAWL = 0
  GOSUB MENU
  FLAG = 0
  FOR I = 1 TO 10
    IF COMPONENT(I) = 1 THEN FLAG = 1
  NEXT I
  IF FLAG = 0 THEN PRINT : PRINT "YOU HAVE NOT DESIGNATED ANY COMPONENTS FOR ANALYSIS. PLEASE START OVER": END
  EFF = 2'MEDIUM EFFICIENCY FOR HEATING AND COOLING SYSTEMS

  CLS
  IF firstzip < 100 THEN FIRST$ = "0" + MID$(STR$(firstzip), 2, 2) ELSE FIRST$ = MID$(STR$(firstzip), 2, 3)
  IF lastzip < 100 THEN LAST$ = "0" + MID$(STR$(lastzip), 2, 2) ELSE LAST$ = MID$(STR$(lastzip), 2, 3)
  LOCATE 10, 26: PRINT USING "PROCESSING ZIPS & TO &"; FIRST$, LAST$
  LOCATE 12, 35: PRINT "AT ZIP "

PRINTHEADING:
  IF HT = 1 THEN PRINT #3, USING "New construction insulation alalysis for Zip Codes & to &"; FIRST$, LAST$
  IF HT = 2 THEN PRINT #3, USING "Retrofit insulation analysis for Zip Codes & to &"; FIRST$, LAST$
  PRINT #3, DATE$, TIME$
  PRINT #3,
  PRINT #3, "Heating System Types: "
  FOR HSYS = 1 TO 5
    PRINT #3, USING "(#) \                       \"; HSYS, HSYS$(HSYS)
  NEXT HSYS
  PRINT #3,
  PRINT #3, "DESIGNATED COMPONENTS FOR ANALYSIS:"
  IF COMPONENT(1) = 1 THEN PRINT #3, "(1) ATTIC    "
  IF COMPONENT(2) = 1 OR COMPONENT(3) = 1 THEN PRINT #3, "Exterior walls:"
  IF COMPONENT(2) = 1 THEN PRINT #3, "(2) WOOD FRAME "
  IF COMPONENT(3) = 1 THEN PRINT #3, "(3) CONCRETE-MASONRY"
  IF COMPONENT(4) = 1 OR COMPONENT(5) = 1 OR COMPONENT(6) = 1 THEN PRINT #3, "Floors/crawlspaces:"
  IF COMPONENT(4) = 1 THEN PRINT #3, "(4) FLOORS OVER UNHEATED/UNINSULATED SPACES"
  IF COMPONENT(5) = 1 THEN PRINT #3, "(5) SLAB FLOOR    "
  IF COMPONENT(6) = 1 THEN PRINT #3, "(6) CRAWL SPACE WALLS"
  IF COMPONENT(7) = 1 OR COMPONENT(8) = 1 THEN PRINT #3, "Basement walls - deep:"
  IF COMPONENT(7) = 1 THEN PRINT #3, "(7) EXTERIOR INSULATION"
  IF COMPONENT(8) = 1 THEN PRINT #3, "(8) INTERIOR INSULATION"
  IF COMPONENT(9) = 1 OR COMPONENT(10) = 1 THEN PRINT #3, "Basement walls - shallow:"
  IF COMPONENT(9) = 1 THEN PRINT #3, "(9) EXTERIOR INSULATION"
  IF COMPONENT(10) = 1 THEN PRINT #3, "(10)INTERIOR INSULATION"
  PRINT #3,
  PRINT #3,
  PRINT #3, "           Economic R-Values for Designated Components"
  PRINT #3, "        ";
  FOR I = 1 TO 10:
    IF COMPONENT(I) = 1 THEN PRINT #3, "-----";
  NEXT I: PRINT #3,
  PRINT #3, "ZIP  HTG";
  FOR I = 1 TO 10:
    IF COMPONENT(I) = 1 THEN PRINT #3, USING "   ##"; I;
  NEXT I: PRINT #3,
  PRINT #3, "CODE SYS";
  FOR I = 1 TO 10:
    IF COMPONENT(I) = 1 THEN PRINT #3, "   --";
  NEXT I: PRINT #3,

  FOR ZIP = firstzip TO lastzip
    IF ZIP < 100 THEN ZIP$ = "0" + MID$(STR$(ZIP), 2, 2) ELSE ZIP$ = MID$(STR$(ZIP), 2, 3)
    LOCATE 12, 42: PRINT ZIP$
    GET #1, ZIP
    DOE = CVI(DOE$)
    IF DOE > 0 THEN
      GOSUB CLIMATEDATA
      IF CDH74 >= 2000 THEN AC = 1 'AC IS ALSO SET = 1 WHEN HEAT PUMP IS USED
      COSTREG = CVI(COSTREG$)
      IF COSTREG <> LASTCOSTREG THEN GOSUB INSCOST
      IF DOE <> LASTDOE THEN
	GOSUB ENPRICES
	FOR HSYS = 1 TO 5
	  GOSUB HEATINGSYSEFF
	  J = HENERGY: GOSUB UPW: HUPW(HSYS) = UPW
	NEXT HSYS
	IF AC = 1 THEN
	    J = 1 'ELECTRICITY ALWAYS USED FOR COOLING
	    GOSUB UPW
	    CUPW = UPW
	END IF
	LASTDOE = DOE
	LASTCOSTREG = COSTREG
      END IF
    
      FOR HSYS = 1 TO 5
	HUPW = HUPW(HSYS)
	GOSUB HEATINGSYSEFF
	HP = P(HENERGY, PIVOTYR) * GNPDEF1
	IF AC = 1 THEN
	  GOSUB COOLINGSYSEFF
	  CP = P(CENERGY, PIVOTYR) * GNPDEF1
	END IF
	GOSUB COMPUTESAVINGS
'CONSTRAINTS
	IF OPTIMAL(4) > OPTIMAL(1) THEN OPTIMAL(4) = OPTIMAL(1)'CRAWLSPACE WALL INSULATION CANNOT BE HIGHER THAN ATTIC INSULATION
	IF OPTIMAL(3) > OPTIMAL(1) THEN OPTIMAL(3) = OPTIMAL(1)'FLOOR INSULATION CANNOT BE HIGHER THAN ATTIC INSULATION
	IF HSYS = 1 THEN PRINT #3, USING "\ \   # "; ZIP$, HSYS;
	IF HSYS > 1 THEN PRINT #3, USING "      # "; HSYS;
	FOR I = 1 TO 10
	  IF COMPONENT(I) = 1 THEN PRINT #3, USING "   ##"; TOTR(I, OPTIMAL(I));
	NEXT I: PRINT #3,
      NEXT HSYS
    END IF
    
  NEXT ZIP

LOCATE 17, 13: PRINT "Run completed for all houses and saved in file "; OUTFL$
CLOSE
END
END IF
									    
'----------------------------------------------------------------------------
COMPUTESAVINGS:
FOR I = 1 TO 12: OPTIMAL(I) = 0: NETSAVINGS(I) = 0: NEXT I'INITIALIZE VARIABLES
IF DBUG = 1 THEN GOSUB DBUG0

'ATTIC
IF COMPONENT(1) = 1 THEN
  HSLOPE = 25.91: CSLOPE = 1.978
  EXISTINGR = ATTIC(EXATTIC)
  ICOMP = 1: ICOST = 1
  GOSUB DELTAENERGY
  'PRINT:PRINT "ATTIC:" OPTIMAL(ICOMP),NETSAVINGS(OPTIMAL(ICOMP))
END IF

'WOOD-FRAME WALLS
IF COMPONENT(2) = 1 THEN
  HSLOPE = 21.19: CSLOPE = 1.005
  EXISTINGR = 0
  ICOMP = 2: ICOST = 2
  GOSUB DELTAENERGY
'PRINT:PRINT "WF WALL:" OPTIMAL(2),NETSAVINGS(OPTIMAL(2))
END IF

'MASONRY WALLS (INSULATION INSIDE)
IF COMPONENT(3) = 1 THEN
  HSLOPE = 20.02: CSLOPE = .739
  EXISTINGR = 0
  ICOMP = 3: ICOST = 3
  GOSUB DELTAENERGY
'PRINT:PRINT "MAS WALL:" OPTIMAL(3),NETSAVINGS(OPTIMAL(3))
END IF
'

'WOOD FLOORS OVER CRAWLSPACE
IF COMPONENT(4) = 1 THEN
  EXISTINGR = FLOOR(EXFLOOR)
  ICOMP = 4: ICOST = 4
  RESTORE TYPE8
  GOSUB DELTAENERGY
  'PRINT:PRINT "FLOOR OVER CRAWL:" OPTIMAL(4),NETSAVINGS(OPTIMAL(4))
END IF

'SLABS INSULATION -2 FT VERTICAL
IF COMPONENT(5) = 1 THEN
  EXISTINGR = 0
  ICOMP = 5: ICOST = 5
  RESTORE TYPE6
  GOSUB DELTAENERGY
  'PRINT:PRINT "SLAB FLOOR:" OPTIMAL(5),NETSAVINGS(OPTIMAL(5))
END IF

'CRAWLSPACE WALLS - MASONRY -BATTS
IF COMPONENT(6) = 1 THEN
  EXISTINGR = CRAWL(EXCRAWL)
  ICOMP = 6: ICOST = 6
  RESTORE TYPE13
  GOSUB DELTAENERGY
END IF

'BASEMENT WALLS (DEEP) - EXTERIOR INSULATION
  IF COMPONENT(7) = 1 THEN
   EXISTINGR = 0
   ICOMP = 7: ICOST = 7
   IF HT = 1 THEN RESTORE TYPE2
   IF HT = 2 THEN RESTORE TYPE1
   GOSUB DELTAENERGY
  END IF
  
'BASEMENT WALLS (DEEP) - INTERIOR INSULATION
IF COMPONENT(8) = 1 THEN
  EXISTINGR = 0
  ICOMP = 8: ICOST = 8
  RESTORE TYPE4
  GOSUB DELTAENERGY
END IF

'BASEMENT WALLS (SHALLOW) EXTERIOR INSULATION
IF COMPONENT(9) = 1 THEN
  EXISTINGR = 0
  ICOMP = 9: ICOST = 9
  RESTORE TYPE3
  GOSUB DELTAENERGY
END IF

'BASEMENT WALLS (SHALLOW) - INTERIOR INSULATION
IF COMPONENT(10) = 1 THEN
  EXISTINGR = 0
  ICOMP = 10: ICOST = 8
  RESTORE TYPE5
  GOSUB DELTAENERGY
END IF

RETURN   'END COMPUTESAVINGS

'----------------------------------------------------------------------------
PRINTREPORT:
CLS
FLAG = 0
FOR I = 1 TO 12
IF COMPONENT(I) = 1 THEN FLAG = 1
NEXT I
IF FLAG = 0 THEN
  LOCATE 8, 1
	  PRINT "           Since you have specified no components to be insulated,"
	  PRINT "                 no insulation recommendations can be made."
  PRINT : INPUT "                         Press <CR> to start over...", Q$: GOTO ZIP
END IF

  LOCATE 1, 20: PRINT USING "Economic Insulation Levels for Zip &XX"; ZIP$
  X = LEN(CITY$) + 20: X = (80 - X) / 2
  LOCATE 2, X: PRINT USING "Reference Location: &"; CITY$
  IF HSYS = 5 THEN CSYS$(CSYS) = HSYS$(HSYS)'HEAT PUMP USED FOR COOLING
  LOCATE 3, 1: PRINT USING "  Heating system: \                    \  Cooling system: \                    \"; HSYS$(HSYS), CSYS$(CSYS)
  PRINT STRING$(79, "-")
  IF HT = 2 THEN
  EXR(1) = ATTIC(EXATTIC)
  EXR(4) = FLOOR(EXFLOOR)
  EXR(6) = CRAWL(EXCRAWL)

  LOCATE 5, 27: PRINT "Retrofit of Existing House"
  
  LOCATE 7, 1
   PRINT "                                          EXISTING     ADD     TOTAL"
  FLD$ = " \                                        \ R-##      R-##      R-##"
  FOR I = 1 TO 3
    IF COMPONENT(I) = 1 THEN PRINT USING FLD$; COMP$(I), EXR(I), ADDR(I, OPTIMAL(I)), EXR(I) + ADDR(I, OPTIMAL(I))
  NEXT I
 
  I = 4
  IF COMPONENT(I) = 1 THEN
    PRINT USING " \                                     \"; COMP$(I)
    PRINT USING FLD$; "   (If crawlspace walls are uninsulated)", EXR(I), ADDR(I, OPTIMAL(I)), EXR(I) + ADDR(I, OPTIMAL(I))
  END IF
 
  I = 6
  IF COMPONENT(I) = 1 THEN
    PRINT USING " \                                     \"; COMP$(I)
    PRINT USING FLD$; "   (If floor above is uninsulated)", EXR(I), ADDR(I, OPTIMAL(I)), EXR(I) + ADDR(I, OPTIMAL(I))
  END IF
 
  I = 5
  IF COMPONENT(I) = 1 THEN PRINT USING FLD$; COMP$(I), EXR(I), ADDR(I, OPTIMAL(I)), EXR(I) + ADDR(I, OPTIMAL(I))

  IF COMPONENT(7) = 1 OR COMPONENT(8) = 1 OR COMPONENT(9) = 1 OR COMPONENT(10) = 1 THEN
    PRINT " Insulation of Basement Walls:"
    FOR I = 7 TO 10
      IF COMPONENT(I) = 1 THEN PRINT USING FLD$; " " + COMP$(I), EXR(I), ADDR(I, OPTIMAL(I)), EXR(I) + ADDR(I, OPTIMAL(I))
    NEXT I
  END IF
END IF 'END EXISTING HOUSE

IF HT = 1 THEN
		       FLD$ = "               \                                        \  R-##"
  LOCATE 5, 28: PRINT "New House Construction"
  PRINT
 
  FOR I = 1 TO 3
    IF COMPONENT(I) = 1 THEN PRINT USING FLD$; COMP$(I), ADDR(I, OPTIMAL(I))
  NEXT I

  I = 4
  IF COMPONENT(I) = 1 THEN
    PRINT USING "               \                                     \"; COMP$(I)
    PRINT USING FLD$; "   (If crawlspace walls are uninsulated)", ADDR(I, OPTIMAL(I))
  END IF

  I = 6
  IF COMPONENT(I) = 1 THEN
    PRINT USING "               \                                     \"; COMP$(I)
    PRINT USING FLD$; "   (If floor above is uninsulated)", ADDR(I, OPTIMAL(I))
  END IF

  I = 5
  IF COMPONENT(I) = 1 THEN PRINT USING FLD$; COMP$(I), ADDR(I, OPTIMAL(I))

  IF COMPONENT(7) = 1 OR COMPONENT(8) = 1 OR COMPONENT(9) = 1 OR COMPONENT(10) = 1 THEN
    PRINT "               Insulation of Basement Walls:"
    FOR I = 7 TO 10
      IF COMPONENT(I) = 1 THEN PRINT USING FLD$; " " + COMP$(I), ADDR(I, OPTIMAL(I))
    NEXT I
  END IF

END IF 'END NEW HOUSE

LOCATE 21, 1: PRINT STRING$(79, "-")
LOCATE 22, 1
IF COMPONENT(4) = 1 OR COMPONENT(6) = 1 THEN LOCATE , 20: PRINT "Press <PgDn> for additional information."
LOCATE , 13: PRINT "Press <SHIFT> <PrtSc> to print this screen if desired."
LOCATE , 18: PRINT "Press <ESC> to exit, R to do another analysis: ";

HELP1:
Q$ = INKEY$: IF Q$ = "" THEN GOTO HELP1
IF UCASE$(Q$) = "R" THEN GOTO ZIP
IF ASC(Q$) = 27 THEN GOTO TERMINATE
IF ASC(MID$(Q$, 1)) = 0 THEN X = ASC(MID$(Q$, 2))
IF X = 81 THEN GOTO FOOTNOTE
GOTO HELP1

TERMINATE:
CLS
END
'----------------------------------------------------------------------------

FOOTNOTE:
CLS
  PRINT "                           Additional information"
IF COMPONENT(4) = 1 AND COMPONENT(6) = 1 THEN
  PRINT
  PRINT "        Insulate either the floor over the crawlspace or the crawlspace"
  PRINT "        walls, not both.  Consult an insulation specialist to determine"
  PRINT "        which is more appropriate for your house."
END IF
IF COMPONENT(6) = 1 THEN
  PRINT
  PRINT "        Crawlspace walls should only be insulated if the crawlspace is "
  PRINT "        closed off, unventilated, and dry all year.  The ground should"
  PRINT "        be covered with a vapor barrier (e.g., 4- or 6-mil polyethylene"
  PRINT "        sheeting) to minimize moisture migration into the crawlspace."
  PRINT "        Note: some building codes may not allow unventilated crawlspaces."
  PRINT "        If radon gas is a problem at the building site, closing off the "
  PRINT "        crawlspace may not be advisable."
END IF
IF COMPONENT(4) = 1 THEN
  PRINT
  PRINT "        When insulating floors over crawlspaces or other unheated areas,"
  PRINT "        make sure that exposed water pipes are freeze-protected and "
  PRINT "        ductwork is well insulated in those areas. "
END IF

LOCATE 21, 1
  PRINT STRING$(78, "-")
  PRINT "              Press <SHIFT> <PrtSc> to print this screen if desired."
  PRINT "                 Press <PgUp> to show economic insulation levels: ";
HELP2:
Q$ = INKEY$: IF Q$ = "" THEN GOTO HELP2
IF ASC(MID$(Q$, 1)) = 0 THEN X = ASC(MID$(Q$, 2))
IF X = 73 THEN GOTO PRINTREPORT ELSE GOTO HELP2

'----------------------------------------------------------------------------
TRYAGAIN:
	   LOCATE 25, 23: PRINT STRING$(35, " ");
	   LOCATE II + 1, 25: PRINT "Press <CR> and try again...";
3500       Q$ = INKEY$: IF Q$ <> CHR$(13) THEN 3500
	   LOCATE II - 2, 5: PRINT STRING$(60, " ");
	   LOCATE II - 1, 5: PRINT STRING$(60, " ");
	   LOCATE II, 5: PRINT STRING$(60, " ");
	   LOCATE II + 1, 5: PRINT STRING$(60, " ");
	   RETURN
'----------------------------------------------------------------------------

UPW:
UPW = 0
FOR Y = PIVOTYR + 1 TO PIVOTYR + life(HT)
  IF P(J, Y) = 0 THEN P(J, Y) = P(J, Y - 1)
  DEFLATOR = P(J, Y) / P(J, PIVOTYR)
  UPW = UPW + DEFLATOR / (1 + DISCOUNTRATE) ^ (Y - PIVOTYR)
NEXT Y
RETURN

'-----------------------------------------------------------------------------
INSCOST:
CODE$(1) = "SQUARE": CODE$(2) = "LINEAR"
OPEN "I", 2, INSCOST$
INPUT #2, COMMENT$
INPUT #2, GNPDEF2
FOR I = 1 TO 12
  INPUT #2, REGFACTOR(I)
NEXT I
INPUT #2, NCOMPS
FOR I = 1 TO NCOMPS
INPUT #2, CAT, CAT$(CAT), NCAT(CAT), CODEAREA(CAT), MODEL(CAT)
INPUT #2, MESSAGE$(CAT)
IF MODEL(CAT) = 1 THEN INPUT #2, BASEU(CAT)
FOR K = 1 TO NCAT(CAT)
IF MODEL(CAT) = 1 THEN INPUT #2, ADDR(CAT, K), ULEVEL(CAT, K), cost(CAT, K)
IF MODEL(CAT) = 2 THEN INPUT #2, ADDR(CAT, K), cost(CAT, K)
cost(CAT, K) = cost(CAT, K) * REGFACTOR(COSTREG) * GNPDEF2
NEXT K
NEXT I
CLOSE 2
RETURN

'----------------------------------------------------------------------------
ENPRICES:
FL$ = "ENPRICES." + MID$(STR$(DOE), 2, 2)
OPEN "I", 2, FL$
INPUT #2, COMMENT$
INPUT #2, BASEYR, NYRS, GNPDEF1
FOR K = 1 TO 4
FOR I = 1 TO NYRS
INPUT #2, P(K, I)
NEXT I
NEXT K
CLOSE 2
CURYR = VAL(MID$(DATE$, 7, 4)): IF CURYR < 1988 THEN CURYR = 1989
PIVOTYR = CURYR - BASEYR + 1
RETURN

'---------------------------------------------------------------------------
HEATINGSYSEFF:
IF HSYS = 1 THEN HEFF = GASEFF(EFF): HENERGY = 4'NATURAL GAS
IF HSYS = 2 THEN HEFF = OILEFF(EFF): HENERGY = 2'FUEL OIL
IF HSYS = 3 THEN HEFF = RESISEFF(1): HENERGY = 1'ELECTRICITY
IF HSYS = 4 THEN HEFF = RESISEFF(2): HENERGY = 1'ELECTRICITY
IF HSYS = 5 THEN
   HEFF = 1.06 * (2.3 - .1 * HDD65 / 1000) * HPHSPF(EFF) / HPHSPF(2)'1.06 FORCES HSPF=6.5 AT 5000 HDD65 (DOE ZONE IV)
   CEFF = HPSEER(EFF) / 3.412
   HENERGY = 1'ELECTRICITY FOR HEATING WITH HEAT PUMP
   AC = 1: CENERGY = 1'ELECTRICITY FOR COOLING WITH HEAT PUMP
   IF DUCTS = 1 THEN CEFF = CEFF * DUCTEFF(STORIES)
END IF
IF HSYS = 6 THEN HEFF = GASEFF(EFF): HENERGY = 3'LPG
IF DUCTS = 1 THEN HEFF = HEFF * DUCTEFF(STORIES)
RETURN

'----------------------------------------------------------------------------
COOLINGSYSEFF:
IF CSYS = 1 THEN CEFF = SEER(EFF) / 3.412: CENERGY = 1
IF CSYS = 2 THEN CEFF = SEER(EFF) / 3.412: CENERGY = 1
IF DUCTS = 1 THEN CEFF = CEFF * DUCTEFF(STORIES)
RETURN

'----------------------------------------------------------------------------
CLIMATEDATA:
    HDD65 = CVI(HDD65$): HDD65 = HDD65 * 100
    CDH74 = CVI(CDH74$): CDH74 = CDH74 * 100
    RETURN

'---------------------------------------------------------------------------
BACKUP:
BACKUP$ = BU$(BUP): BUP = BUP - 1
IF BACKUP$ = "HSYSSELECT" THEN GOTO HSYSSELECT
IF BACKUP$ = "DUCTS" THEN GOTO DUCTS
IF BACKUP$ = "CSYSSELECT" THEN GOTO CSYSSELECT
IF BACKUP$ = "SHOWPRICES" THEN GOTO SHOWPRICES
IF BACKUP$ = "COMPONENTMENUNEW" THEN GOTO COMPONENTMENUNEW
IF BACKUP$ = "COMPONENTMENURET" THEN GOTO COMPONENTMENURET
IF BACKUP$ = "ATTIC" THEN GOTO ATTIC
IF BACKUP$ = "WFWALL" THEN GOTO WFWALL
IF BACKUP$ = "MWALL" THEN GOTO MWALL
IF BACKUP$ = "FLOOR" THEN GOTO FLOOR
IF BACKUP$ = "SLAB" THEN GOTO SLAB
IF BACKUP$ = "CRAWL" THEN GOTO CRAWL
IF BACKUP$ = "BASEMENT" THEN GOTO BASEMENT
IF BACKUP$ = "EXTDPBASE" THEN GOTO EXTDPBASE
IF BACKUP$ = "INTBASE" THEN GOTO INTBASE
IF BACKUP$ = "COMP1" THEN CLS : GOTO COMP1
IF BACKUP$ = "COMP2" THEN CLS : GOTO COMP2
IF BACKUP$ = "COMP3" THEN CLS : GOTO COMP3
IF BACKUP$ = "COMP4" THEN CLS : GOTO COMP4
IF BACKUP$ = "COMP5" THEN CLS : GOTO COMP5
IF BACKUP$ = "COMP6" THEN CLS : GOTO COMP6
IF BACKUP$ = "COMP7" THEN CLS : GOTO COMP7
IF BACKUP$ = "COMP8" THEN CLS : GOTO COMP8
IF BACKUP$ = "COMP9" THEN CLS : GOTO COMP9

PRINT "CANT FIND BACKUP CODE"
END

'----------------------------------------------------------------------------
COSTDISPLAY:
  LOCATE 4, (79 - LEN(INS$)) / 2: PRINT INS$
  LOCATE 5, (79 - LEN(MESSAGE$(ICOST))) / 2: PRINT MESSAGE$(ICOST)
  IF EX1 > 0 THEN LOCATE 6, 25: PRINT USING "To your existing R-## add:"; EX2
  FOR K = 1 TO NCAT(ICOST)
    LOCATE 6 + K, 25: PRINT USING "R-##  $$#.## per & foot"; ADDR(ICOST, K), cost(ICOST, K), CODE$(CODEAREA(ICOST))
  NEXT K: I = NCAT(ICOST) + 6
    LOCATE I + 2, 22: PRINT "Do you want to change these (Y/N)? ";
2100 Q$ = INKEY$: IF Q$ = "" THEN 2100 ELSE Q$ = UCASE$(Q$)
    IF INSTR("SBYN", Q$) = 0 THEN 2100
    IF Q$ = "B" THEN GOTO BACKUP
    IF Q$ = "S" THEN GOTO ZIP
    IF Q$ = "Y" THEN
    LOCATE I + 2, 15: PRINT STRING$(50, " ")
    LOCATE I + 2, 15: PRINT "For each R level enter change or press <CR> if okay:"
    FOR K = 1 TO NCAT(ICOST)
COST1:
       LOCATE 25, 23: PRINT "Press <CR> when entry is complete.";
       LOCATE I + K + 2, 25: PRINT USING "R-##  $$#.## "; ADDR(ICOST, K), cost(ICOST, K); : INPUT "CHANGE TO: ", Q$: Q$ = UCASE$(Q$)
       IF Q$ = "B" AND K = 1 THEN CLS : GOTO COSTDISPLAY
       IF Q$ = "B" AND K > 1 THEN
	  K = K - 1
	  LOCATE I + K + 2, 25: PRINT STRING$(50, " ")
	  LOCATE I + K + 3, 25: PRINT STRING$(50, " ")
	  GOTO COST1
       END IF
       IF Q$ = "S" THEN GOTO ZIP
       IF Q$ <> "" THEN
	 Q = VAL(Q$)
	 II = I + K + 4: IF II > 24 THEN II = 24
	 IF Q < .5 * cost(ICOST, K) OR Q > 3 * cost(ICOST, K) THEN
	   LOCATE II, 20: PRINT USING "Cost must be between $$#.## and $$#.##"; .5 * cost(ICOST, K), 3 * cost(ICOST, K);
	   GOSUB TRYAGAIN: GOTO COST1
	 END IF
	 IF K > 1 AND Q <= cost(ICOST, K - 1) THEN
	   LOCATE II, 20: PRINT USING "Cost of R-## must be larger than cost of R-##"; ADDR(ICOST, K), ADDR(ICOST, K - 1)
	   GOSUB TRYAGAIN: GOTO COST1
	 END IF
	 cost(ICOST, K) = Q
       END IF
       IF K > 1 AND cost(ICOST, K) <= cost(ICOST, K - 1) THEN
	   II = I + K + 4: IF II > 24 THEN II = 24
	   LOCATE II, 20: PRINT USING "Cost of R-## must be larger than cost of R-##"; ADDR(ICOST, K), ADDR(ICOST, K - 1)
	   GOSUB TRYAGAIN: GOTO COST1
       END IF
     NEXT K
  CLS : GOTO COSTDISPLAY
  END IF
RETURN

'----------------------------------------------------------------------------
DELTAENERGY:
  TOTR(ICOMP, 0) = EXISTINGR
  FOR K = 1 TO NCAT(ICOST)
    TOTR(ICOMP, K) = EXISTINGR + ADDR(ICOST, K)
  NEXT K
  IF DBUG = 1 THEN GOSUB DBUG1
  OPTIMAL(ICOMP) = 0

  IF MODEL(ICOST) = 1 THEN
    IF EXISTINGR > 0 THEN  'CHANGE U VALUES TO REFLECT EXISTING INSULATIO
      ADDR(ICOST, 0) = 0
      ULEVEL(ICOST, 0) = BASEU(ICOST)
      FOR K = 0 TO NCAT(ICOST)
	REQUIV(K) = 1 / ULEVEL(ICOST, K)
      NEXT K
      FOR K = 0 TO NCAT(ICOST)
	IHIGH = 0
	FOR J = 1 TO NCAT(ICOST)
	  IF TOTR(ICOMP, K) >= ADDR(ICOST, J - 1) AND TOTR(ICOMP, K) < ADDR(ICOST, J) THEN IHIGH = J: EXIT FOR
	NEXT J
	IF TOTR(ICOMP, K) >= ADDR(ICOST, NCAT(ICOST)) THEN IHIGH = NCAT(ICOST)
	ratio = (TOTR(ICOMP, K) - ADDR(ICOST, IHIGH - 1)) / (ADDR(ICOST, IHIGH) - ADDR(ICOST, IHIGH - 1)) 'changed 2-2-90
	REQUIV = REQUIV(IHIGH - 1) + ratio * (REQUIV(IHIGH) - REQUIV(IHIGH - 1))  'changed 2-2-90
	ULEVEL(ICOST, K) = 1 / REQUIV
      NEXT K
      BASEU(ICOST) = ULEVEL(ICOST, 0)
    END IF 'EXISTINGR>0
    FOR K = 1 TO NCAT(ICOST)
      DELTAU = BASEU(ICOST) - ULEVEL(ICOST, K)
      BETAH = HSLOPE * DELTAU
      BETAC = CSLOPE * DELTAU
      GOSUB DELTA2
    NEXT K
    IF DBUG = 1 THEN GOSUB DBUG3
    RETURN
  END IF 'MODEL = 1
 
  IF MODEL(ICOST) = 2 THEN   'NOTE: MODEL IS DEFINED IN INSPRICE FILE, THUS ICOST INDEX
     READ TITLE$, NR, BASEU
     BASER = 1 / BASEU
     RLEVEL(0) = 0: BASEBETAH = 0: BASEBETAC = 0
     FOR I = 1 TO NR
       READ RLEVEL(I), BETAH(I), BETAC(I) 'CHRISTIAN-STRZEPEK VARIABLES
     NEXT I
     FOR K = 0 TO NCAT(ICOST)
       DELTAU = 0  'U VALUES NOT USED IN THIS MODEL
       IF K > 0 OR EXISTINGR > 0 THEN  'IF K=0 AND EXISTINGR>0, FIND BASEBEATA AND BASEBETAC
	 FOR J = 1 TO NR
	   IF TOTR(ICOMP, K) >= RLEVEL(J - 1) AND TOTR(ICOMP, K) < RLEVEL(J) THEN IHIGH = J: EXIT FOR
	 NEXT J
	 IF TOTR(ICOMP, K) >= RLEVEL(NR) THEN IHIGH = NR
	 BETAH = 0: BETAC = 0
	 IF IHIGH > 1 THEN
	   FOR I = 1 TO IHIGH - 1
	     BETAH = BETAH + BETAH(I)
	     BETAC = BETAC + BETAC(I)
	   NEXT I
	 END IF
	 RL = RLEVEL(IHIGH - 1) + BASER
	 RU = RLEVEL(IHIGH) + BASER
	 RT = TOTR(ICOMP, K) + BASER
	 ratio = (1 - RL / RT) / (1 - RL / RU)  'INTERPOLATION OF LAST CHRISTIAN-STRZEPEK COEFFICIENT
	 BETAH = BETAH + ratio * BETAH(IHIGH)
	 BETAC = BETAC + ratio * BETAC(IHIGH)
	 IF K = 0 THEN BASEBETAH = BETAH: BASEBETAC = BETAC
	 IF K > 0 AND EXISTINGR > 0 THEN BETAH = BETAH - BASEBETAH: BETAC = BETAC - BASEBETAC  'SUBTRACT OUT BETAS FOR EXISTING R
	 IF K > 0 THEN GOSUB DELTA2
       END IF
     NEXT K
     IF DBUG = 1 THEN GOSUB DBUG3
     RETURN
  END IF 'MODEL(ICOMP)=2

DELTA2:
     DELTAAHR = BETAH * HDD65 / 1000000
     DELTAACR = BETAC * CDH74 / 1000000
     TOTSAVINGS = DELTAAHR / HEFF * HP * HUPW
     IF AC = 1 THEN TOTSAVINGS = TOTSAVINGS + DELTAACR / CEFF * CP * CUPW
     NETSAVINGS(K) = TOTSAVINGS - cost(ICOST, K)
     IF NETSAVINGS(K) > NETSAVINGS(OPTIMAL(ICOMP)) THEN OPTIMAL(ICOMP) = K
     IF DBUG = 1 THEN GOSUB DBUG2
     RETURN

'DBUG SUBROUTINES PRINT A SUMMARY OF INTERMEDIATE CALCULATIONS TO FILE DBUG.ZIP
DBUG0:
OPEN "O", 1, "DBUG.ZIP"
PRINT #1, "VALIDATION DATA FOR ZIP:"
PRINT #1,
PRINT #1, "HEATING EFF = "; HEFF
PRINT #1, "COOLING EFF = "; CEFF
PRINT #1, "HEATING ENERGY PRICE PER MBTU = "; HP
PRINT #1, "COOLING ENERGY PRICE PER MBTU = "; CP
PRINT #1, "HEATING ENERGY UPW* = "; HUPW
PRINT #1, "COOLING ENERGY UPW* = "; CUPW
PRINT #1, "LOCATION = "; CITY$
PRINT #1, "ZIP = "; ZIP$
PRINT #1, "HDD65 = "; HDD65
PRINT #1, "CDH74 ="; CDH74
PRINT #1,
RETURN

DBUG1:
PRINT #1, "COMPONENT #"; ICOMP; COMP$(ICOMP)
PRINT #1, "  R   DELTA   BETAh    BETAc   DELTA    DELTA    DELTA    DELTA     TOTAL    COST      NET"
PRINT #1, "VALUE   U                       AHR      ACR    ENERGYh  ENERGYc   SAVINGS           SAVINGS"
RETURN

DBUG2:
  DFLD$ = " ##  #.#### ###.###  ###.###  #.#####  #.#####  #.#####  #.##### $$###.### $$#.### $$###.### "
PRINT #1, USING DFLD$; TOTR(ICOMP, K), DELTAU, BETAH, BETAC, DELTAAHR, DELTAACR, DELTAAHR / HEFF, DELTAACR / CEFF, TOTSAVINGS, cost(ICOST, K), NETSAVINGS(K)
RETURN

DBUG3:
PRINT #1, "OPTIMAL = "; OPTIMAL(ICOMP)
PRINT #1,
RETURN


'----------------------------------------------------------------------------
MENU:
CLS
LOCATE 1, 9: PRINT "     MARK INSULATION SYSTEMS OF INTEREST WITH AN X"
LOCATE 2, 9: PRINT "   (Use cursor to move up and down, <End> to finish)"
LOCATE , , 1, 1, 6
LOCATE 4, 12: PRINT "ATTIC           ": RW(1) = 4
LOCATE 5, 12: PRINT "Exterior walls:"
LOCATE 6, 14: PRINT "WOOD FRAME      ": RW(2) = 6
LOCATE 7, 14: PRINT "CONCRETE-MASONRY": RW(3) = 7
LOCATE 8, 12: PRINT "Floors/crawlspaces:"
LOCATE 9, 14: PRINT "FLOORS OVER UNHEATED/UNINSULATED SPACES": RW(4) = 9
LOCATE 10, 14: PRINT "SLAB FLOOR     ": RW(5) = 10
LOCATE 11, 14: PRINT "CRAWL SPACE WALLS": RW(6) = 11
LOCATE 12, 12: PRINT "Basement walls - deep:"
LOCATE 13, 14: PRINT "EXTERIOR INSULATION": RW(7) = 13
LOCATE 14, 14: PRINT "INTERIOR INSULATION": RW(8) = 14
LOCATE 15, 12: PRINT "Basement walls - shallow:"
LOCATE 16, 14: PRINT "EXTERIOR INSULATION": RW(9) = 16
LOCATE 17, 14: PRINT "INTERIOR INSULATION": RW(10) = 17
LOCATE 20, 23: PRINT "  Press <End> When finished.  "

FOR I = 1 TO 10: LOCATE RW(I), 55: PRINT "[ ]": NEXT I
FOR I = 1 TO 10: COMPONENT(I) = 0: NEXT I
I = 1

MENU1:
LOCATE RW(I), 56: A$ = INKEY$: IF A$ = "" THEN GOTO MENU1
IF UCASE$(A$) = "X" THEN
  COMPONENT(I) = 1
  PRINT "X"
  IF I < 10 THEN I = I + 1
  GOTO MENU1
END IF
IF A$ = " " THEN
DELEET:
  COMPONENT(I) = 0
  PRINT " "
  IF I < 10 THEN I = I + 1
  GOTO MENU1
END IF
IF LEFT$(A$, 1) = CHR$(0) THEN X = ASC(MID$(A$, 2)) ELSE X = ASC(A$)
IF X = 72 AND I > 1 THEN I = I - 1: GOTO MENU1'UP
IF X = 80 AND I < 10 THEN I = I + 1: GOTO MENU1'DOWN
IF X = 79 THEN GOTO MENU2
IF X = 83 THEN GOTO DELEET
GOTO MENU1

MENU2:
LOCATE 20, 14, 1, 6, 7: PRINT STRING$(50, " ")
LOCATE 20, 23: PRINT "Is selection completed (Y/N)? ";
1100 QQ$ = INKEY$: IF QQ$ = "" THEN 1100 ELSE QQ$ = UCASE$(QQ$)
IF INSTR("SBYN", QQ$) = 0 THEN 1100
IF QQ$ = "B" THEN BU = 1: RETURN
IF QQ$ = "S" THEN GOTO ZIP
IF QQ$ = "Y" THEN RETURN
IF QQ$ = "N" THEN
LOCATE 20, 23: PRINT "  Press <End> When finished.  "
    GOTO MENU1
END IF

'----------------------------------------------------------------------------

TYPE1:
DATA PLASTIC FOAM ON UPPER HALF OF DEEP BASEMENT
DATA 6,.40
DATA 4, 20.69, 0.34
DATA 5,  1.01, 0.03
DATA 8,  1.92, 0.07
DATA 10, 0.86, 0.03
DATA 12, 0.70, 0.03
DATA 15, 0.89, 0.04

TYPE2:
DATA PLASTIC FOAM ON FULL HEIGHT OF DEEP BASEMENT
DATA 6,.40
DATA 4, 28.57, 0.45
DATA 5,  1.43, 0.02
DATA 8,  2.75, 0.03
DATA 10, 1.25, 0.01
DATA 12, 1.03, 0.01
DATA 15, 1.32, 0.02

TYPE3:
DATA PLASTIC FOAM ON FULL HEIGHT OF SHALLOW BASEMENT
DATA 6,0.40
DATA 4, 44.35, 0.95
DATA 5,  2.03, 0.04
DATA 8,  3.66, 0.07
DATA 10, 1.52, 0.02
DATA 12, 1.19, 0.02
DATA 15, 1.42, 0.02

TYPE4:
DATA BATT INSULATION ON INSIDE OF DEEP BASEMENT WALL
DATA 3,0.40
DATA 11,34.24,0.51
DATA 19, 0.96,0.01
DATA 30, 2.35,0.01

TYPE5:
DATA BATT INSULATION ON INSIDE OF SHALLOW BASEMENT WALL
DATA 3,0.40
DATA 11,51.36,1.08
DATA 19, 1.12,0.02
DATA 30, 2.50,0.03

TYPE6:
DATA SLAB ON GRADE - VERTICAL 2 FT
DATA 6,1
DATA 4,  2.79, 0.23
DATA 5,  0.15, 0.01
DATA 8,  0.31, 0.01
DATA 10, 0.15, 0.00
DATA 12, 0.13, 0.00
DATA 15, 0.17, 0.00

TYPE7:
DATA SLAB ON GRADE - VERTICAL 4 FT
DATA 6,1
DATA 4,  3.56, 0.23
DATA 5,  0.22, 0.01
DATA 8,  0.47, 0.01
DATA 10, 0.25, 0.00
DATA 12, 0.22, 0.00
DATA 15, 0.31, 0.00

TYPE8:
DATA FLOOR INSULATION
DATA 3,.25
DATA 11,1.7,.12
DATA 19,0.26,0
DATA 30,0.26,0

TYPE9:
DATA PERMANENT WOOD FOUNDATION BASEMENT WALL - DEEP
DATA 4,0.4
DATA 11,15.81,0.58
DATA 13, 1.08,0.00
DATA 19, 2.73,0.00
DATA 30, 4.39,0.00

TYPE10:
DATA PERMANENT WOOD FOUNDATION BASEMENT WALL - SHALLOW
DATA 4,0.4
DATA 11,27.42,1.15
DATA 13, 1.54,0.00
DATA 19, 3.69,0.00
DATA 30, 5.52,0.00

TYPE11:
DATA PERMANENT WOOD FOUNDATION BASEMENT WALL - CRAWLSPACE
DATA 4,0.4
DATA 11,09.90,0.59
DATA 13, 0.62,0.03
DATA 19, 1.53,0.07
DATA 30, 2.40,0.12

TYPE12:
DATA CONCRETE-MASONRY CRAWL SPACE WALLS -PLASTIC FOAM
DATA 4,0.4
DATA 5, 19.51,0.83
DATA 7,  1.08,0.03
DATA 10, 0.97,0.02
DATA 14, 0.81,0.02

TYPE13:
DATA CONCRETE-MASONRY CRAWL SPACE WALLS - BATTS
DATA 3,0.4
DATA 11, 21.80,0.93
DATA 13,  0.40,0.01
DATA 19,  0.87,0.02
'---------------------------------------------------------------------------
SCREEN1:
CLS
LN1$ = "             ZIP 1.0              "
LN2$ = "  THE ZIP-CODE INSULATION PROGRAM "
LN3$ = "    FOR NEW AND EXISTING HOUSES   "
LN4$ = "            (Nov 1988)            "

IYP = 2      'FIRST LINE
IWW = LEN(LN1$) + 5        'box width
IXP = INT((79 - IWW) / 2)  'center box
IWH = 6                    'box height
GOSUB DRAWWINDOW
LOCATE 3, 22: PRINT LN1$
LOCATE 4, 22: PRINT LN2$
LOCATE 5, 22: PRINT LN3$
LOCATE 6, 22: PRINT LN4$
RETURN

DRAWWINDOW:
LOCATE IYP, IXP - 1
PRINT CHR$(218); STRING$(IWW - 1, 196); CHR$(191)
FOR IY = IYP + 1 TO IYP + IWH - 2
LOCATE IY, IXP - 1
PRINT CHR$(179); SPACE$(IWW - 1); CHR$(179);
NEXT IY
LOCATE IYP + IWH - 1, IXP - 1
PRINT CHR$(192); STRING$(IWW - 1, 196); CHR$(217);
RETURN


```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1468

     Volume in drive A has no label
     Directory of A:\

    CLIMATE  DAT    127872   2-02-90   4:50p
    ENPRICES 1         835  12-01-88  10:25a
    ENPRICES 10        836  12-01-88  10:30a
    ENPRICES 2         835  12-01-88  10:26a
    ENPRICES 3         835  12-01-88  10:26a
    ENPRICES 4         835  12-01-88  10:26a
    ENPRICES 5         835  12-01-88  10:27a
    ENPRICES 6         835  12-01-88  10:28a
    ENPRICES 7         835  12-01-88  10:29a
    ENPRICES 8         835  12-01-88  10:29a
    ENPRICES 9         835  12-01-88  10:30a
    FILE1468 TXT      1925   3-22-90   2:47p
    GO       BAT        38   6-14-89   3:12p
    GO       TXT       386   1-01-80   4:28a
    INSCOST  NEW      1528  11-29-89   4:50p
    INSCOST  RET      1435  12-01-88  10:35a
    ZIP      BAS     60730   2-02-90  11:47a
    ZIP      DOC     25544   2-02-90   2:25p
    ZIP      EXE    112165   2-02-90   2:40p
           19 file(s)     339974 bytes
                           16384 bytes free
