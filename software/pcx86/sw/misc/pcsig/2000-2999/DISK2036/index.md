---
layout: page
title: "PC-SIG Diskette Library (Disk #2036)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2036/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2036"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DPROG"

    DPROG, a dBase III programming tool, creates programs and writes user
    manuals from your screen designs. A "must have" program for anyone
    who uses (or wants to use) dBase III or Clipper.
    
    DPROG is a cluster of three programs controlled by a main menu. DPROG
    is a screen designer, the heart of the system. Simply draw the screen
    exactly as you want it, identify the fields (also very simple), and
    everything else is automatic. DPCOMP takes the screen layout you have
    created and produces all of the needed dBase III files. Then DPDOC
    prints out a 30-page step-by-step guide to your new database system.
    
    DPROG is extremely easy to use and it produces impressive results while
    requiring very little knowledge of dBase. The step-by-step
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BUG.TXT

{% raw %}
```








University Research, Inc.                                dPROG Software
602 South 48th Street. Suite 229                         Problem Report
Philadelphia, Pa. 19143                                  Version 1.31


We need your help to develop this system.  If you find any problems with
any of the programs or documentation, or you wish to make a suggestion for
an enhancement, please send in this form.  Only through your help can this
system be made the way you want it.  Thank you in advance for that help.


Name: _________________________________________________________________

Street: _______________________________________________________________

City: ___________________________________ State _____ Zip: ____________

Phone: ___________________________________ DATE: ______________________


                              Instructions

Use this form to report software bugs, documentation errors, or
suggested enhancements.  Mail the form to the above address.

                                Category

__ Software Problem  __ Documentation Problem  __ Enhancement  __ Other

                                Hardware

Computer Manufacture ______________________  Model ____________________

Graphics Board ____________________________  Memory ______________ KB

Other Hardware ________________________________________________________

                          Problem Description

(continue on other side if more space is needed)




















































































```
{% endraw %}

## HELPUS.TXT

{% raw %}
```






   Even if you don't order a copy of dPROG version 2, we would like to keep in
   touch with you.  Please take a few moments and tell us what we did wrong,
   what you liked, and what you need.  If we use any of your ideas, we'll send
   you a free copy of our next product, and in any case we'll put you on our
   mailing list and keep you informed about what we do.  Without your input, we
   don't know where we stand.

   Send to:           University Research, Inc.           Order Form
                   602 South 48th Street Suite 229
                       Philadelphia, Pa. 19143
                           Version 1.31


     Name   : _______________________________________________


     Company: _______________________________________________


     Address: _______________________________________________


            : _______________________________________________


     City   : ____________________ State: ____  Zip: ________


     Day Phone: _____________________________________________


     Eve Phone: _____________________________________________


     Have you ever done consulting, contract programming, written an application
   and sent it to a BBS, or in any way tried to make money with your computer?

                      [ ] YES  [ ] NO




























   What I liked about dPROG!

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________


   What I didn't like about dPROG!!!

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________


   What I would like to see developed.

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________

   _____________________________________________________________________________

   If you need more space, use the reverse side of this paper or continue on
   other paper.  Thank you for your input.








```
{% endraw %}

## PROGFORM.TXT

{% raw %}
```
*%%OPENFROM,SYSNAME
*%%IF,PRG
*%%DOCUMENT,PRG,Main Program
SET ESCAPE OFF
SET STATUS OFF
SET TALK OFF
SET ECHO OFF
SET BELL OFF
SET HEADING OFF
SET SAFETY OFF
SET DEVICE TO SCREEN
CLEAR
*%%SETPROC
PUBLIC DBVersion, UserScrn
*%%DBVERSION
*%%MMLOAD
SELECT A
USE &MainFile
DO IND WITH MainFile, IndxFile, IndxExpr, "ENSURE"
SET FILTER TO .T.
*%%IF,PUB
DO PUB
*%%ENDIF
*%%MMINIT
CLEAR GETS
MHH=MH1
P=0
DO WHILE .T.
   *%%MMSHOW
   @ 24,0
   @ 2,3 SAY DTOC(DATE())
   @ 2,69 SAY Time()
   @p+5,C GET MHH
   CLEAR GETS
   DO WHIL .T.
   o=0
   DO WHIL o<=0
   o=INKE()
   ENDD
   t=0
   @p+5,C SAY MHH
   DO CASE
   CASE o=5
   p=p-1
   CASE o=24
   p=p+1
   CASE o=13
   t=P+1
   OTHE
   t=AT(UPPE(CHR(o)),VK)
   p=IIF(t=0,p,t-1)
   ENDC
   p=IIF(p<0,NOP,p)
   p=IIF(p>NOP,0,p)
   DO CASE
   CASE P=0
   @ 5,C GET MH1
   MHH=MH1
   CASE P=1
   @ 6,C GET MH2
   MHH=MH2
   CASE P=2
   @ 7,C GET MH3
   MHH=MH3
   CASE P=3
   @ 8,C GET MH4
   MHH=MH4
   CASE P=4
   @ 9,C GET MH5
   MHH=MH5
   CASE P=5
   @ 10,C GET MH6
   MHH=MH6
   CASE P=6
   @ 11,C GET MH7
   MHH=MH7
   CASE P=7
   @ 12,C GET MH8
   MHH=MH8
   CASE P=8
   @ 13,C GET MH9
   MHH=MH9
   CASE P=9
   @ 14,C GET MH10
   MHH=MH10
   ENDC
   CLEAR GETS
   IF t>0
   MH_Function=SUBS(VK,t,1)
   EXIT
   ENDI
   ENDD
   DO CASE
      *%%IF,ADD
      CASE MH_Function="A"
         DO ADD
         LOOP
      *%%ENDIF
      *%%IF,UPD
      CASE MH_Function="U"
         IF RECCOUNT()=0
            *%%IF,PRG
            DO WAI WITH 24, 0, "File empty, request denied. "
            *%%ENDIF
            LOOP
         ENDIF
         DO UPD
         LOOP
      *%%ENDIF
      *%%IF,RPT
      CASE MH_Function="R"
         DO RPT
         GO TOP
         LOOP
      *%%ENDIF
      *%%IF,MM
      CASE MH_Function="M"
         DO MM
         GO TOP
         LOOP
      *%%ENDIF
      *%%IF,LAB
      CASE MH_Function="L"
         DO LAB
         GO TOP
         LOOP
      *%%ENDIF
      *%%IF,HLP
      CASE MH_Function="H"
         DO HLP WITH 1
         LOOP
      *%%ENDIF
      CASE MH_Function="P"
         @24,0
         @24,0 SAY "Delete all marked records"
         STORE "N" TO MH_Ans
         @24,30 GET MH_Ans
         READ
         IF UPPER(MH_Ans) = "Y"
            PACK
            GO TOP
         ENDIF
         RELEASE MH_Ans
         LOOP
      CASE MH_Function="I"
         DO IND WITH MainFile, IndxFile, IndxExpr, "REINDEX"
         LOOP
      CASE MH_Function="Q"
         RELEASE MH_Function
         *%%IF,REL
         DO REL
         *%%ENDIF
         CLOSE DATABASES
         CLOSE PROC
         CLEAR
         QUIT
      *%%IF,SRT
      CASE MH_Function="S"
         DO DPSORT
         *%%SETPROC
         USE &MainFile
         DO IND WITH MainFile, IndxFile, IndxExpr, "ENSURE"
         LOOP
      *%%ENDIF
      CASE MH_Function="D"
         RELEASE MH_Function
         *%%IF,REL
         DO REL
         *%%ENDIF
         CLOSE DATABASES
         CLOSE PROC
         CLEAR
         SET ESCAPE ON
         SET STATUS ON
         SET TALK ON
         SET BELL ON
         SET HEADING ON
         SET SAFETY ON
         RETURN
   ENDCASE
ENDDO
RETURN
*%%ENDIF

*%%IF,PRG
*%%DOCUMENT,WAI,Wait / Message routine
PROCEDURE WAI
PARA y, x, msg
PRIV dummy
dummy=" "
SET INTE OFF
@Y,X
@Y,X SAY msg+" Press any key to continue..." GET dummy
READ
SET INTE ON
@Y,X
RETU
*%%ENDIF

*%%IF,PRG
*%%DOCUMENT,BMU,Parameterized bar menu routine
PROCEDURE BMU
PARA m,s,L,R,p,C
* parameters:
* in:  m(menustr),L(len 1 opt),R(row);
* out: p (pos. in m, global for continuity), C (choice char)
PRIV g,t,o,sc
sc=" "+s
E=LEN(M)/L-1
g=SUBS(m,p*L+1,L)
@r,0 SAY m
@r,p*L GET g
CLEA GETS
t=0
c=" "
DO WHIL c=" "
o=0
DO WHIL o<=0
o=INKE()
ENDD
t=0
DO CASE
CASE o=4.OR.o=32
p=p+1
CASE o=19
p=p-1
CASE o=13
t=p+1
OTHE
t=AT(UPPE(CHR(o)),s)
p=IIF(t=0,p,t-1)
ENDC
p=IIF(p<0,E,p)
p=IIF(p>E,0,p)
C=SUBS(sc,t+1,1)
g=SUBS(m,p*L+1,L)
@r,0 SAY m
@r,p*L GET g
CLEA GETS
ENDD
RETU
*%%ENDIF

*%%IF,FMT
*%%DOCUMENT,FMT,Screen Format File
PROCEDURE FMT
*%%FMT
RETURN
*%%ENDIF

*%%IF,PUB
*%%DOCUMENT,PUB,Define Public Fields
PROCEDURE PUB
PUBLIC Clipper
*%%PUB
RETURN
*%%ENDIF

*%%IF,CAL
*%%DOCUMENT,CAL,Calculate and display Calculated fields
PROCEDURE CAL
PARAMETERS Updating
*%%CAL
RETURN
*%%ENDIF

*%%IF,INI
*%%DOCUMENT,INI,Initialize memory fields from Init or empty
PROCEDURE INI
*%%INI
RETURN
*%%ENDIF

*%%IF,STO
*%%DOCUMENT,STO,Store file fields to memory variables
PROCEDURE STO
*%%STO
RETURN
*%%ENDIF

*%%IF,REP
*%%DOCUMENT,REP,Replace file fields with memory variables
PROCEDURE REP
*%%REP
RETURN
*%%ENDIF

*%%IF,REL
*%%DOCUMENT,REL,Release Memory variables
PROCEDURE REL
*%%REL
RETURN
*%%ENDIF

*%%IF,ADD
*%%DOCUMENT,ADD,Add New records to file
PROCEDURE ADD
STORE " " TO MH_Wait
IF "DB3+" $ DBVersion
   CALL &UserScrn
ELSE
   CLEAR
   DO DB3
ENDIF
DO WHILE .T.
   *%%IF,INI
   DO INI
   *%%ENDIF
   *%%IF,FMT
   DO FMT
   *%%ENDIF
   @24,0
   @24,0 SAY "Press Ctrl-W without entering data to exit"
   READ
   *%%ADD
      *%%IF,VAL
      DO VAL
      *%%ENDIF
      @24,0
      APPEND BLANK
      *%%IF,CAL
      DO CAL WITH "ALL"
      *%%ENDIF
      *%%IF,REP
      DO REP
      *%%ENDIF
      *%%IF,PRG
      DO WAI WITH 24,0,""
      *%%ENDIF
   ELSE
     EXIT
   ENDIF
ENDDO
RELEASE MH_Wait
RETURN
*%%ENDIF

*%%IF,UPD
*%%DOCUMENT,UPD,Search,Update,Edit,Find,Print,Examine file
PROCEDURE UPD
PRIVATE MH_Function, MH_Answer
STORE "N" TO MH_Function
STORE "N" TO MH_Answer
STORE SPACE(65) TO MH_Filt
IF "DB3+" $ DBVersion
   CALL &UserScrn
ELSE
   CLEAR
   DO DB3
ENDIF
DO WHILE .T.
   *%%IF,STO
   DO STO
   *%%ENDIF
   *%%IF,DIS
   DO DIS
   *%%ENDIF
   *%%IF,CAL
   DO CAL WITH "VIRTUAL"
   *%%ENDIF
   IF LEN(TRIM(MH_Filt)) = 0
      @24,55 SAY "    "
   ELSE
      @24,55 SAY "FILT"
   ENDIF
   IF Deleted()
      @24,60 SAY "DEL"
   ELSE
      @24,60 SAY "   "
   ENDIF
   @24,65 SAY Ltrim(Str(RECNO()))+"/"+Ltrim(STR(RECCOUNT()))+"     "
   MH_Lcho=0
   DO BMU WITH "Next Prev Top  Bot  Quit Edit Set  List Find Help Del  ","NPTBQESLFHD",5,24,MH_Lcho,MH_Function
   @24,0 SAY SPACE(55)
   DO CASE
      CASE UPPER(MH_Function) = "N"
      IF .NOT. EOF()
          Skip 1
          IF EOF()
             GO BOTT
          ENDIF
      ENDIF
      LOOP
      CASE UPPER(MH_Function) = "P"
      IF .NOT. BOF()
         SKIP -1
         IF BOF()
            GO TOP
         ENDIF
      ENDIF
      LOOP
      CASE UPPER(MH_Function) = "E"
         *%%IF,STO
         DO STO
         *%%ENDIF
         *%%IF,FMT
         DO FMT
         *%%ENDIF
         READ
         *%%IF,VAL
         DO VAL
         *%%ENDIF
         *%%IF,CAL
         DO CAL WITH "ALL"
         *%%ENDIF
         *%%IF,REP
         DO REP
         *%%ENDIF
         LOOP
      CASE UPPER(MH_Function) = "T"
        GOTO TOP
        LOOP
      CASE UPPER(MH_Function) = "B"
        GOTO BOTTOM
        LOOP
      CASE UPPER(MH_Function) = "D"
         STORE "N" TO MH_Answer
         @24,0
         IF DELETED()
            @24,0 SAY "Recall this record?"
         ELSE
            @24,0 SAY "Delete this record?"
         ENDIF
         @24,22 GET MH_Answer
         READ
         IF UPPER(MH_Answer) = "Y"
            IF DELETED()
               RECALL
            ELSE
               DELETE
            ENDIF
         ENDIF
         LOOP
      CASE UPPER(MH_Function) = "S"
         STORE "N" TO MH_Answer
         STORE MH_Filt TO MH_FiltH
         @24,0
         @24,0 SAY "FILTER: "
         @24,9 GET MH_Filt
         READ
         @24,0
         IF MH_Filt <> MH_FiltH
            IF LEN(TRIM(MH_Filt))<>0
               IF IIF(Clipper,.F.,TYPE(MH_Filt)<>"L")
                  *%%IF,PRG
                  DO Wai WITH 24,0,"Filter expression defective, not usable. "
                  *%%ENDIF
                  MH_Filt=MH_FiltH
                  LOOP
               ENDIF
               SET FILTER TO &MH_Filt
            ELSE
               SET FILTER TO .T.
            ENDIF
            GOTO TOP
            IF EOF()
               *%%IF,PRG
               DO WAI WITH 24,0, "Nothing matches filter! "
               *%%ENDIF
            ENDIF
         ENDIF
         LOOP
      *%%IF,FND
      CASE UPPER(MH_Function) = "F"
        DO FND
        LOOP
      *%%ENDIF
      CASE UPPER(MH_Function) = "Q"
        EXIT
      CASE UPPER(MH_Function) = "L"
        *%%IF,3PLUS
        ON ERROR DO WAI WITH 24,0,"FIX PRINTER!!! "
        *%%ENDIF
        SET DEVICE TO PRINT
        *%%IF,DIS
        DO DIS
        *%%ENDIF
        SET DEVICE TO SCREEN
        *%%IF,3PLUS
        ON ERROR
        *%%ENDIF
        LOOP
      *%%IF,HLP
      CASE UPPER(MH_Function)="H"
        DO HLP WITH 2
        IF "DB3+" $ DBVersion
           CALL &UserScrn
        ELSE
           CLEAR
           DO DB3
        ENDIF
        LOOP
      *%%ENDIF
   ENDCASE
ENDDO
SET FILTER TO .T.
RETURN
*%%ENDIF

*%%IF,DIS
*%%DOCUMENT,DIS,Display-only Format file
PROCEDURE DIS
*%%DIS
RETURN
*%%ENDIF

*%%IF,FND
*%%DOCUMENT,FND,Find record by key routine
PROCEDURE FND
IF .NOT. Indexed
   *%%IF,PRG
   DO WAI WITH 24, 0, "Database is not indexed. Set a filter. "
   *%%ENDIF
   RETURN
ENDIF
PRIVATE MH_Find, MH_Answer, MH_Rec
@24,0
@24,0 SAY "Enter data to find in open fields"
*%%FND
IF LEN(TRIM(MH_Find)) # 0
   STORE RECNO() TO MH_Rec
   SEEK MH_Find
   IF EOF()
      GOTO MH_Rec
      *%%IF,PRG
      DO WAI WITH 24, 0, "Record Not Found. "
      *%%ENDIF
   ENDIF
ENDIF
@24,0
RETURN
*%%ENDIF

*%%IF,RPT
*%%DOCUMENT,RPT,Report module
PROCEDURE RPT
STORE .N. TO MH_Prt
STORE .Y. TO MH_Con
STORE .N. TO MH_Disk
STORE "        " TO MH_Frm
STORE ".T."+SPACE(73) TO MH_Cri
STORE "             " TO MH_DFname
IF "DB3+"$DBVersion
   *%%IF,3PLUS
   CALL DPOUT
   *%%ENDIF
ELSE
   CLEAR
   DO DPO
ENDIF
@5,22 SAY MH_Prt
@6,22 SAY MH_Con
@7,22 SAY MH_Disk
@7,42 SAY MH_DFname
@9,15 SAY MH_Frm
DO WHILE .T.
   @5,22 GET MH_Prt PICTURE "L"
   @6,22 GET MH_Con PICTURE "L"
   @7,22 GET MH_Disk PICTURE "L"
   @7,42 GET MH_Dfname PICTURE "!!!!!!!!!!!!!!"
   @9,15 GET MH_Frm PICTURE "!!!!!!!!"
   READ
   @24,0
   IF MH_Prt .AND. MH_Con
      @24,0 SAY "You must only specify one output device"
      LOOP
   ENDIF
   IF MH_Prt .AND. MH_Disk
      @24,0 SAY "You must only specify one output device"
      LOOP
   ENDIF
   IF MH_Con .AND. MH_Disk
      @24,0 SAY "You must only specify one output device"
      LOOP
   ENDIF
   IF MH_Disk .AND. MH_Dfname = "          "
      @24,0 SAY "You must specify a disk file name"
      LOOP
   ENDIF
   IF MH_Frm = "        "
      @24,0 SAY "You must enter a sort name or 'NOSORT'"
      LOOP
   ENDIF
   EXIT
ENDDO
IF MH_Frm = "NOSORT  "
   STORE .F. TO MH_NdxL
   ELSE
   IF .NOT.(FILE("DPSORT.DBF") .AND. FILE("DPSORT."+IndxExt))
      *%%IF,PRG
      DO WAI WITH 24,0,"DPSORT files not found. "
      *%%ENDIF
      RETURN
   ENDIF
   SELE I
   USE DPSORT INDEX DPSORT
   SEEK MH_Frm
   IF EOF()
      *%%IF,PRG
      DO Wai WITH 24,0, "Sort name not on selection file (DPSORT.DBF). "
      *%%ENDIF
      SELE A
      RETURN
   ENDIF
   STORE SORTCRI TO MH_Cri
   STORE SORTNDX TO MH_NDX
   STORE SORTFRM TO MH_FRM
   STORE .F. TO MH_NdxL
   MH_Srt="*"
   SortOk=.F.
   DO SortChk WITH MH_Srt, MH_NdxL, SortOk
   IF .NOT. SortOk
      *%%IF,PRG
      DO WAI WITH 24,0,"Unknown Sort Field, or Field Type not C,D,N. "
      *%%ENDIF
      RETURN
   ENDIF
ENDIF
@16,13 GET MH_Frm
@19,2  GET MH_Cri
READ
DO WHILE LEN(TRIM(MH_Frm)) = 0
   @24,0 SAY "You must specify a form for REPORTs and LABELS"
   @16,13 GET MH_Frm
   READ
ENDDO
@24,0
DO WHILE IIF(Clipper,.F.,TYPE(MH_Cri)<>"L")
   @24,0 SAY "Criteria NOT a legal expression"
   @19,2 GET MH_Cri
   READ
ENDDO
@24,0
STORE TRIM(MH_Frm)+".FRM" TO MH_work
IF .NOT. FILE(MH_Work)
   *%%IF,PRG
   DO WAI WITH 24,0,"REPORT FORM "+TRIM(MH_Frm)+" not found. "
   *%%ENDIF
   RETURN
ENDIF
IF MH_NdxL
   @24,0
   @24,0 SAY "SELECTING/SORTING DATA! PLEASE WAIT . . . "
   IF MH_Cri=SPACE(76)
   STORE ".T."+SPACE(73) TO MH_Cri
   ENDIF
   IF RECCOUNT()>1
   SORT TO &MH_NDX ON &MH_SRT FOR &MH_Cri
   ELSE
   COPY TO &MH_NDX FOR &MH_Cri
   ENDIF
   SELE J
   USE &MH_NDX
ELSE
    @24,0
    @24,0 SAY "Using Unsorted File"
ENDIF
@24,0
@24,0 SAY "PRODUCING OUTPUT. PLEASE WAIT . . . "
DO CASE
   CASE MH_Con
       REPORT FORM &MH_Frm FOR &MH_Cri
   CASE MH_Prt
        SET CONSOLE OFF
        REPORT FORM &MH_Frm TO PRINT FOR &MH_Cri
        SET CONSOLE ON
   CASE MH_Disk
      SET CONSOLE OFF
      SET ALTERNATE TO &MH_Dfname
      SET ALTERNATE ON
      REPORT FORM &MH_Frm FOR &MH_Cri
      SET ALTERNATE OFF
      CLOSE ALTERNATE
      SET CONSOLE ON
ENDCASE
IF MH_NdxL
   USE
ENDIF
SELE A
RETURN
*%%ENDIF

*%%IF,LAB
*%%DOCUMENT,LAB,Label Module
PROCEDURE LAB
STORE .N. TO MH_Prt
STORE .Y. TO MH_Con
STORE .N. TO MH_Disk
STORE "        " TO MH_Frm
STORE ".T."+SPACE(73) TO MH_Cri
STORE "             " TO MH_DFname
IF "DB3+"$DBVersion
   *%%IF,3PLUS
   CALL DPOUT
   *%%ENDIF
ELSE
   CLEAR
   DO DPO
ENDIF
@5,22 SAY MH_Prt
@6,22 SAY MH_Con
@7,22 SAY MH_Disk
@7,42 SAY MH_DFname
@9,15 SAY MH_Frm
DO WHILE .T.
   @5,22 GET MH_Prt PICTURE "L"
   @6,22 GET MH_Con PICTURE "L"
   @7,22 GET MH_Disk PICTURE "L"
   @7,42 GET MH_Dfname PICTURE "!!!!!!!!!!!!!!"
   @9,15 GET MH_Frm PICTURE "!!!!!!!!"
   READ
   @24,0
   IF MH_Prt .AND. MH_Con
      @24,0 SAY "You must only specify one output device"
      LOOP
   ENDIF
   IF MH_Prt .AND. MH_Disk
      @24,0 SAY "You must only specify one output device"
      LOOP
   ENDIF
   IF MH_Con .AND. MH_Disk
      @24,0 SAY "You must only specify one output device"
      LOOP
   ENDIF
   IF MH_Disk .AND. MH_Dfname = "          "
      @24,0 SAY "You must specify a disk file name"
      LOOP
   ENDIF
   IF MH_Frm = "        "
      @24,0 SAY "You must enter a sort name or 'NOSORT'"
      LOOP
   ENDIF
   EXIT
ENDDO
IF MH_Frm = "NOSORT  "
   STORE .F. TO MH_NdxL
ELSE
   IF .NOT.(FILE("DPSORT.DBF") .AND. FILE("DPSORT."+IndxExt))
      *%%IF,PRG
      DO WAI WITH 24,0,"DPSORT files not found. "
      *%%ENDIF
      RETURN
   ENDIF
   SELE I
   USE DPSORT INDEX DPSORT
   SEEK MH_Frm
   IF EOF()
      *%%IF,PRG
      DO Wai WITH 24,0,"Sort name not on selection file (DPSORT.DBF). "
      *%%ENDIF
      SELE A
      RETURN
   ENDIF
   STORE SORTCRI TO MH_Cri
   STORE SORTNDX TO MH_NDX
   STORE SORTFRM TO MH_FRM
   STORE .F. TO MH_NdxL
   MH_Srt="*"
   SortOk=.F.
   DO SortChk WITH MH_Srt, MH_NdxL, SortOk
   IF .NOT. SortOk
      *%%IF,PRG
      DO WAI WITH 24,0,"Unknown Sort Field, or Field Type not C,D,N. "
      *%%ENDIF
      RETURN
   ENDIF
ENDIF
@16,13 GET MH_Frm
@19,2  GET MH_Cri
READ
DO WHILE LEN(TRIM(MH_Frm)) = 0
   @24,0 SAY "You must specify a form for REPORTs and LABELS"
   @16,13 GET MH_Frm
   READ
ENDDO
@24,0
DO WHILE IIF(Clipper,.F.,TYPE(MH_Cri)<>"L")
   @24,0 SAY "Criteria NOT a legal expression"
   @19,2 GET MH_Cri
   READ
ENDDO
@24,0
STORE TRIM(MH_Frm)+".LBL" TO MH_work
IF .NOT. FILE(MH_Work)
   *%%IF,PRG
   DO WAI WITH 24,0,"LABEL FORM "+TRIM(MH_Frm)+" not found. "
   *%%ENDIF
   RETURN
ENDIF
IF MH_NdxL
   @24,0
   @24,0 SAY "SELECTING/SORTING DATA! PLEASE WAIT . . . "
   IF MH_Cri=SPACE(76)
   STORE ".T."+SPACE(73) TO MH_Cri
   ENDIF
   IF RECCOUNT()>1
   SORT TO &MH_NDX ON &MH_SRT FOR &MH_Cri
   ELSE
   COPY TO &MH_NDX FOR &MH_Cri
   ENDIF
   SELE J
   USE &MH_NDX
ELSE
    @24,0
    @24,0 SAY "Using Unsorted File"
ENDIF
@24,0
@24,0 SAY "PRODUCING OUTPUT. PLEASE WAIT . . . "
DO CASE
   CASE MH_Con
       LABEL FORM &MH_Frm FOR &MH_Cri
   CASE MH_Prt
        SET CONSOLE OFF
        LABEL FORM &MH_Frm TO PRINT FOR &MH_Cri
        SET CONSOLE ON
   CASE MH_Disk
      SET CONSOLE OFF
      SET ALTERNATE TO &MH_Dfname
      SET ALTERNATE ON
      LABEL FORM &MH_Frm FOR &MH_Cri
      SET ALTERNATE OFF
      CLOSE ALTERNATE
      SET CONSOLE ON
ENDCASE
IF MH_NdxL
   USE
ENDIF
SELE A
RETURN
*%%ENDIF

*%%IF,MM
*%%DOCUMENT,MM,Mail Merge module
PROCEDURE MM
STORE .N. TO MH_Prt
STORE .N. TO MH_Con
STORE .Y. TO MH_Disk
STORE "MMWORK    " TO MH_DFname
STORE "        " TO MH_Frm
STORE "WORDSTAR" TO MH_WP
STORE ".T."+SPACE(73) TO MH_Cri
IF "DB3+"$DBVersion
   *%%IF,3PLUS
   CALL DPOUT
   *%%ENDIF
ELSE
   CLEAR
   DO DPO
ENDIF
@11,2 SAY "Word Processor:"
@7,22 SAY MH_Disk
@7,42 SAY MH_DFname
@9,15 SAY MH_Frm
@11,19 SAY MH_WP
DO WHILE .T.
   @7,42 GET MH_Dfname PICTURE "!!!!!!!!!!"
   @9,15 GET MH_Frm PICTURE "!!!!!!!!"
   @11,19 GET MH_WP PICTURE "!!!!!!!!"
   READ
   @24,0
   IF MH_Disk .AND. MH_Dfname = "          "
      @24,0 SAY "You must enter a disk filename"
      LOOP
   ENDIF
   IF MH_Frm = "        "
      @24,0 SAY "You must enter a sort form or 'NOSORT'"
      LOOP
   ENDIF
   IF .NOT.(MH_WP = "WORDSTAR" .OR. MH_WP = "MSWORD  ")
      @24,0 SAY "Current WP formats are: WORDSTAR, MSWORD"
      LOOP
   ENDIF
   EXIT
ENDDO
IF MH_Frm = "NOSORT  "
   STORE .F. TO MH_NdxL
ELSE
   IF .NOT. (FILE("DPSORT.DBF") .AND. FILE("DPSORT."+IndxExt))
      *%%IF,PRG
      DO WAI WITH 24,0,"DPSORT files not found. "
      *%%ENDIF
      RETURN
   ENDIF
   SELE I
   USE DPSORT INDEX DPSORT
   SEEK MH_Frm
   IF EOF()
      *%%IF,PRG
      DO WAI WITH 24,0,"Sort name not on selection file (DPSORT.DBF). "
      *%%ENDIF
      USE
      SELE A
      RETURN
   ENDIF
   STORE SORTCRI TO MH_Cri
   STORE SORTNDX TO MH_NDX
   STORE .F. TO MH_NdxL
   MH_Srt="*"
   SortOk=.F.
   DO SortChk WITH MH_Srt, MH_NdxL, SortOk
   IF .NOT. SortOk
      *%%IF,PRG
      DO WAI WITH 24,0,"Unknown Sort Field, or Field Type not C,D,N. "
      *%%ENDIF
      RETURN
   ENDIF
ENDIF
@24,0
@19,2 GET MH_Cri
READ
DO WHILE IIF(Clipper,.F.,TYPE(MH_Cri)<>"L")
   @24,0 SAY "Criteria NOT a legal expression"
   @19,2 GET MH_Cri
   READ
ENDDO
@24,0
IF MH_NdxL
   @24,0
   @24,0 SAY "SELECTING/SORTING DATA! PLEASE WAIT . . . "
   IF MH_Cri=SPACE(76)
   STORE ".T."+SPACE(73) TO MH_Cri
   ENDIF
   IF RECCOUNT()>1
   SORT TO &MH_NDX ON &MH_SRT FOR &MH_Cri
   ELSE
   COPY TO &MH_NDX FOR &MH_Cri
   ENDIF
   SELE J
   USE &MH_NDX
ELSE
    @24,0
    @24,0 SAY "Using Unsorted File"
ENDIF
@24,0
@24,0 SAY "PRODUCING OUTPUT. PLEASE WAIT . . . "
IF (.NOT. MH_NdxL) .AND. (LEN(TRIM(MH_Cri)) <> 0)
   LOCATE FOR &MH_Cri
ENDIF
IF EOF()
   *%%IF,PRG
   DO WAI WITH 24,0,"No records meet criteria. "
   *%%ENDIF
   SELE A
   RETURN
ENDIF
*
* Turn on output device
*
SET CONSOLE OFF
STORE TRIM(MH_Dfname)+".DOC" TO MH_Ofn
SET ALTERNATE TO &MH_Ofn
SET ALTERNATE ON
*
* Output field header
*
DO CASE
   CASE MH_WP = "WORDSTAR"
      ?".OP"
      ?".DF "+MH_DFNAME+".DAT"
      ?".RV "
      *%%MMFIELDS
      ?
      SET ALTERNATE OFF
      CLOSE ALTERNATE
      STORE TRIM(MH_Dfname)+".DAT" TO MH_Ofn
      SET ALTERNATE TO &MH_Ofn
      SET ALTERNATE ON
   CASE MH_WP = "MSWORD  "
      ?
      *%%MMFIELDS
ENDCASE
*
* Output Selected data
*
DO WHILE .NOT. EOF()
   DO CASE
      CASE (MH_WP = "WORDSTAR") .OR. (MH_WP = "MSWORD  ")
         ? ""
         *%%MMDATA
   ENDCASE
   IF  MH_NdxL .OR. (LEN(TRIM(MH_Cri)) = 0)
       SKIP
   ELSE
       CONTINUE
   ENDIF
ENDDO
*
* Finish output
*
SET ALTERNATE OFF
CLOSE ALTERNATE
SET CONSOLE ON
IF MH_NdxL
   USE
ENDIF
SELE A
RETURN
*%%ENDIF

*%%IF,VAL
*%%DOCUMENT,VAL,Validate data module
PROCEDURE VAL
*%%VAL
RETURN
*%%ENDIF

*%%IF,HLP
*%%DOCUMENT,HLP,Give general information
PROCEDURE HLP
PARAMETERS What
*%%HLP
RETURN
*%%ENDIF

*%%IF,PRG
*%%DOCUMENT,IND,Build/re-build Index module
PROCEDURE IND
PARAMETERS DataFile, IndxFile, IndxExpr, action
IF .NOT. Indexed
   RETURN
ENDIF
USE &DataFile
@24,0
IF .NOT. File(IndxFile)
   @24,0 SAY "Please wait, file is being Indexed . . . "
   INDEX ON &IndxExpr TO &IndxFile
ELSE
   IF action="REINDEX"
      @24,0 SAY "Please wait, file is being Re-Indexed . . . "
      REINDEX
   ENDIF
ENDIF
SET INDEX TO &IndxFile
@24,0
RETURN
*%%ENDIF

*%%IF,PRG*(SRT+RPT+LAB+MM)
*%%DOCUMENT,SCH,Validate/Verify Sort Fields for Sort routine
PROCEDURE SortChk
PARAMETERS MH_Srt, MH_NdxL, SortOK
PRIVATE sfld, sortf, sorto, SVar
 SortOK=.T.
 SELE I
 USE DPSORT INDEX DPSORT
 MH_Srt=""
 sfld=1
 DO WHILE sfld<=10
    sortf="SORTF"+LTRIM(STR(sfld))
    sorto="SORTO"+LTRIM(STR(sfld))
    SVar=TRIM(&sortf)
    IF &SORTF <> "       "
       SELE A
       IF .NOT. TYPE(SVar)$"CDN"
          SELE I
          USE
          SELE A
          SortOK=.F.
          RETURN
       ENDIF
       SELE I
       IF LEN(MH_Srt)=0
          STORE TRIM(&SORTF)+"/"+&SORTO TO MH_Srt
       ELSE
          STORE MH_Srt+", "+TRIM(&SORTF)+"/"+&SORTO TO MH_Srt
       ENDIF
       STORE .T. TO MH_NdxL
     ENDIF
     sfld=sfld+1
 ENDDO
 USE
 SELE A
RETURN
*%%ENDIF
*%%IF,~(3PLUS)
*%%MAKEDB3
*%%ENDIF
*%%CLOSE

*%%IF,SRT*PRG
*%%OPENDIRECT,DPSORT
*%%DOCUMENT,PRG,Main Menu Program
* database: DPSORT
PRIVATE MH_Function, MH_Loop
SET STATUS OFF
SET TALK OFF
SET ECHO OFF
SET BELL OFF
SET HEADING OFF
SET SAFETY OFF
SET DEVICE TO SCREEN
SET PROCEDURE TO DPSORT
SELECT I
DO IND_ WITH "ENSURE"
USE DPSORT INDEX DPSORT
SET FILTER TO
DO PUB_
STORE .T. TO MH_Loop
DO WHILE MH_Loop
   DO CASE
      CASE "CLIPPER"$DBVersion
        *%%IF,CLIPPER
        CLEAR
        DO DPMMSRTS
        *%%ENDIF
      CASE "DB3+"$DBVersion
        *%%IF,3PLUS
        CALL DPMMSORT
        *%%ENDIF
      CASE "DB3"$DBVersion
        *%%IF,DB3
        CLEAR
        DO DPMMSRTS
        *%%ENDIF
   ENDCASE
   STORE " " TO MH_Function
   @ 24,0
   @ 2,3 SAY DTOC(DATE())
   @ 2,69 SAY Time()
   @ 23,47 SAY "Choice:"
   @ 23,55 GET MH_Function PICT "!"
   READ
   DO CASE
      CASE UPPER(MH_Function)="A"
         DO ADD_
         LOOP
      CASE UPPER(MH_Function)="U"
        IF RECCOUNT()=0
           DO WAI_ WITH 24, 0, "File empty, request denied."
           LOOP
        ENDIF
        DO UPD_
        LOOP
      CASE UPPER(MH_Function)="I"
        DO IND_ WITH "REINDEX"
        LOOP
      CASE UPPER(MH_Function)="H"
        DO HLP_ WITH 1
        LOOP
      CASE UPPER(MH_Function)="P"
        @24,0
        @24,0 SAY "Delete all marked records"
        PRIVATE MH_Ans
        STORE "N" TO MH_Ans
        @24,30 GET MH_Ans PICT "!"
        READ
        IF MH_Ans="Y"
           PACK
        ENDIF
        RELEASE MH_Ans
        LOOP
      CASE UPPER(MH_Function)="Q"
        DO REL_
        CLOSE DATABASES
        CLEAR
        QUIT
      CASE UPPER(MH_Function)="D"
        DO REL_
        CLOSE DATABASES
        RETURN
      CASE UPPER(mh_function)="R"
        IF Clipper
           DO WAI_ WITH 24, 0, "Report Create/Modify not implemented by Clipper."
           LOOP
        ENDIF
        STORE "        " TO MH_Name
        @24,0
        @24,0 SAY "Report Name:"
        @24,14 GET MH_Name
        READ
        IF MH_Name <> "        "
           SELE A
           *%%IF,~(CLIPPER)
           MODI REPORT &MH_Name
           *%%ENDIF
           SELE I
        ENDIF
        LOOP
      CASE UPPER(mh_function)="L"
        IF Clipper
           DO WAI_ WITH 24, 0, "Label Create/Modify not implemented by Clipper."
           LOOP
        ENDIF
        STORE "        " TO MH_Name
        @24,0
        @24,0 SAY "Label Name:"
        @24,14 GET MH_Name
        READ
        IF MH_Name <> "        "
           SELE A
           *%%IF,~(CLIPPER)
           MODI LABEL &MH_Name
           *%%ENDIF
           SELE I
        ENDIF
        LOOP
   ENDCASE
ENDDO
RETURN

*%%DOCUMENT,IND,Build/ReBuild Index
PROCEDURE IND_
PARAMETERS action
SELE I
USE DPSORT
IF (.NOT. FILE("DPSORT"+IIF(Clipper,".NTX",".NDX"))) .OR. action="REINDEX"
   @24,0
   @24,0 SAY "Please wait, file is being Indexed"
   INDEX ON SORTNAM TO DPSORT
   @24,0
ENDIF
SET INDEX TO DPSORT
RETURN

*%%DOCUMENT,FMT,Screen Format file
PROCEDURE FMT_
PARA Action
IF action="A"
   @4,13 GET MA_SORTNAM PICTURE "!!!!!!!!"
ENDIF
@4,48 GET MA_SORTNDX PICTURE "!!!!!!!!"
@4,70 GET MA_SORTFRM PICTURE "!!!!!!!!"
@5,15 GET MA_SORTDES
@8,2 GET MA_SORTCRI
RETURN

*%%DOCUMENT,PUB,Define Public Fields
PROCEDURE PUB_
PUBLIC MA_SORTNAM
PUBLIC MA_SORTNDX
PUBLIC MA_SORTFRM
PUBLIC MA_SORTDES
PUBLIC MA_SORTCRI
PUBLIC MA_SORTF1
PUBLIC MA_SORTO1
PUBLIC MA_SORTF2
PUBLIC MA_SORTO2
PUBLIC MA_SORTF3
PUBLIC MA_SORTO3
PUBLIC MA_SORTF4
PUBLIC MA_SORTO4
PUBLIC MA_SORTF5
PUBLIC MA_SORTO5
PUBLIC MA_SORTF6
PUBLIC MA_SORTO6
PUBLIC MA_SORTF7
PUBLIC MA_SORTO7
PUBLIC MA_SORTF8
PUBLIC MA_SORTO8
PUBLIC MA_SORTF9
PUBLIC MA_SORTO9
PUBLIC MA_SORTF10
PUBLIC MA_SORTO10
RETURN

*%%DOCUMENT,CAL,Calculate and Display Calculated Fields
PROCEDURE CAL_
RETURN

*%%DOCUMENT,INT,Initialize Memory fields from Init or empty
PROCEDURE INT_
STORE SPACE(8) TO MA_SORTNAM
STORE "SORTWORK" TO MA_SORTNDX
STORE SPACE(8) TO MA_SORTFRM
STORE SPACE(63) TO MA_SORTDES
STORE ".T."+SPACE(LEN(DPSORT->SORTCRI)-1) TO MA_SORTCRI
STORE SPACE(7) TO MA_SORTF1
STORE "A" TO MA_SORTO1
STORE SPACE(7) TO MA_SORTF2
STORE "A" TO MA_SORTO2
STORE SPACE(7) TO MA_SORTF3
STORE "A" TO MA_SORTO3
STORE SPACE(7) TO MA_SORTF4
STORE "A" TO MA_SORTO4
STORE SPACE(7) TO MA_SORTF5
STORE "A" TO MA_SORTO5
STORE SPACE(7) TO MA_SORTF6
STORE "A" TO MA_SORTO6
STORE SPACE(7) TO MA_SORTF7
STORE "A" TO MA_SORTO7
STORE SPACE(7) TO MA_SORTF8
STORE "A" TO MA_SORTO8
STORE SPACE(7) TO MA_SORTF9
STORE "A" TO MA_SORTO9
STORE SPACE(7) TO MA_SORTF10
STORE "A" TO MA_SORTO10
RETURN

*%%DOCUMENT,STO,Store file Fields to memory variables
PROCEDURE STO_
STORE DPSORT -> SORTNAM to MA_SORTNAM
STORE DPSORT -> SORTNDX to MA_SORTNDX
STORE DPSORT -> SORTFRM to MA_SORTFRM
STORE DPSORT -> SORTDES to MA_SORTDES
STORE DPSORT -> SORTCRI to MA_SORTCRI
STORE DPSORT -> SORTF1  to MA_SORTF1
STORE DPSORT -> SORTO1  to MA_SORTO1
STORE DPSORT -> SORTF2  to MA_SORTF2
STORE DPSORT -> SORTO2  to MA_SORTO2
STORE DPSORT -> SORTF3  to MA_SORTF3
STORE DPSORT -> SORTO3  to MA_SORTO3
STORE DPSORT -> SORTF4  to MA_SORTF4
STORE DPSORT -> SORTO4  to MA_SORTO4
STORE DPSORT -> SORTF5  to MA_SORTF5
STORE DPSORT -> SORTO5  to MA_SORTO5
STORE DPSORT -> SORTF6  to MA_SORTF6
STORE DPSORT -> SORTO6  to MA_SORTO6
STORE DPSORT -> SORTF7  to MA_SORTF7
STORE DPSORT -> SORTO7  to MA_SORTO7
STORE DPSORT -> SORTF8  to MA_SORTF8
STORE DPSORT -> SORTO8  to MA_SORTO8
STORE DPSORT -> SORTF9  to MA_SORTF9
STORE DPSORT -> SORTO9  to MA_SORTO9
STORE DPSORT -> SORTF10 to MA_SORTF10
STORE DPSORT -> SORTO10  to MA_SORTO10
RETURN

*%%DOCUMENT,REP,Replace file Fields with memory variables
PROCEDURE REP_
REPLACE DPSORT -> SORTNAM WITH MA_SORTNAM
REPLACE DPSORT -> SORTNDX WITH MA_SORTNDX
REPLACE DPSORT -> SORTFRM WITH MA_SORTFRM
REPLACE DPSORT -> SORTDES WITH MA_SORTDES
REPLACE DPSORT -> SORTCRI WITH MA_SORTCRI
REPLACE DPSORT -> SORTF1  WITH MA_SORTF1
REPLACE DPSORT -> SORTO1  WITH MA_SORTO1
REPLACE DPSORT -> SORTF2  WITH MA_SORTF2
REPLACE DPSORT -> SORTO2  WITH MA_SORTO2
REPLACE DPSORT -> SORTF3  WITH MA_SORTF3
REPLACE DPSORT -> SORTO3  WITH MA_SORTO3
REPLACE DPSORT -> SORTF4  WITH MA_SORTF4
REPLACE DPSORT -> SORTO4  WITH MA_SORTO4
REPLACE DPSORT -> SORTF5  WITH MA_SORTF5
REPLACE DPSORT -> SORTO5  WITH MA_SORTO5
REPLACE DPSORT -> SORTF6  WITH MA_SORTF6
REPLACE DPSORT -> SORTO6  WITH MA_SORTO6
REPLACE DPSORT -> SORTF7  WITH MA_SORTF7
REPLACE DPSORT -> SORTO7  WITH MA_SORTO7
REPLACE DPSORT -> SORTF8  WITH MA_SORTF8
REPLACE DPSORT -> SORTO8  WITH MA_SORTO8
REPLACE DPSORT -> SORTF9  WITH MA_SORTF9
REPLACE DPSORT -> SORTO9  WITH MA_SORTO9
REPLACE DPSORT -> SORTF10 WITH MA_SORTF10
REPLACE DPSORT -> SORTO10 WITH MA_SORTO10
RETURN

*%%DOCUMENT,REL,Release Memory variables
PROCEDURE REL_
RELEASE MA_SORTNAM
RELEASE MA_SORTNDX
RELEASE MA_SORTFRM
RELEASE MA_SORTDES
RELEASE MA_SORTCRI
RELEASE MA_SORTF1
RELEASE MA_SORTO1
RELEASE MA_SORTF2
RELEASE MA_SORTO2
RELEASE MA_SORTF3
RELEASE MA_SORTO3
RELEASE MA_SORTF4
RELEASE MA_SORTO4
RELEASE MA_SORTF5
RELEASE MA_SORTO5
RELEASE MA_SORTF6
RELEASE MA_SORTO6
RELEASE MA_SORTF7
RELEASE MA_SORTO7
RELEASE MA_SORTF8
RELEASE MA_SORTO8
RELEASE MA_SORTF9
RELEASE MA_SORTO9
RELEASE MA_SORTF10
RELEASE MA_SORTO10
RETURN

*%%DOCUMENT,ADD,Add new records to file
PROCEDURE ADD_
PRIVATE MH_Loop, MH_Wait
STORE .T. TO MH_Loop
STORE " " TO MH_Wait
DO CASE
   CASE "CLIPPER"$DBVersion
     *%%IF,CLIPPER
     CLEAR
     DO DPSORTS
     *%%ENDIF
   CASE "DB3+"$DBVersion
     *%%IF,3PLUS
     CALL DPSORT
     *%%ENDIF
   CASE "DB3"$DBVersion
     *%%IF,DB3
     CLEAR
     DO DPSORTS
     *%%ENDIF
ENDCASE
DO WHILE MH_Loop
   DO INT_
   DO FMT_ WITH "A"
   @24,0
   @24,0 SAY "Press Ctrl-W without entering data to exit"
   READ
   IF LEN(TRIM(MA_SORTNAM)) <> 0
       SEEK MA_SORTNAM
       @ 24,0
       DO WHILE .NOT. EOF()
          ?? CHR(7)
          @24,0 SAY "Sort Name is a duplicate; change it to allow the addition."
          @04,13 GET MA_SORTNAM PICTURE "!!!!!!!!"
          READ
          SEEK MA_SORTNAM
       ENDDO
       @ 24,0
       DO VAL_
       APPEND BLANK
       DO REP_
       DO CAL_
       DO WAI_ WITH 24, 0, ""
   ELSE
     STORE .F. TO MH_Loop
   ENDIF
ENDDO
RELEASE MH_Loop,MH_Wait
RETURN

*%%DOCUMENT,UPD,Search Update Edit Find Print Examine file
PROCEDURE UPD_
PRIVATE MH_Loop, MH_Function, MH_Answer
STORE .T. TO MH_Loop
STORE "N" TO MH_Function
STORE "N" TO MH_Answer
STORE SPACE(70) TO MH_Filt
STORE "Next,Previous,Top,Bottom,Quit,Help,Delete,Edit,More " TO MH_Menu1
STORE "Find,Set filter,pRint,More                          " TO MH_Menu2
STORE MH_Menu1 TO MH_Menu
DO CASE
   CASE "CLIPPER"$DBVersion
     *%%IF,CLIPPER
     CLEAR
     DO DPSORTS
     *%%ENDIF
   CASE "DB3+"$DBVersion
     *%%IF,3PLUS
     CALL DPSORT
     *%%ENDIF
   CASE "DB3"$DBVersion
     *%%IF,DB3
     CLEAR
     DO DPSORTS
     *%%ENDIF
ENDCASE
DO WHILE MH_Loop
   DO STO_
   DO DIS_
   DO CAL_
   @24,0 SAY MH_Menu
   @24,53 GET MH_Function PICT "!"
   IF LEN(TRIM(MH_Filt)) = 0
      @24,55 SAY "    "
   ELSE
      @24,55 SAY "FILT"
   ENDIF
   IF Deleted()
      @24,60 SAY "DEL"
   ELSE
      @24,60 SAY "   "
   ENDIF
   @24,65 SAY Ltrim(Str(RECNO()))+"/"+Ltrim(STR(RECCOUNT()))+"     "
   READ
   DO CASE
      CASE UPPER(MH_Function) = "N"
           IF .NOT. EOF()
              Skip 1
              IF EOF()
                 GO BOTT
              ENDIF
           ENDIF
           LOOP
      CASE UPPER(MH_Function) = "P"
           IF .NOT. BOF()
              SKIP -1
              IF BOF()
                 GO TOP
              ENDIF
           ENDIF
           LOOP
      CASE UPPER(MH_Function) = "E"
           DO STO_
           DO FMT_ WITH "E"
           READ
           IF READKEY()=12 .OR. READKEY()=268
              LOOP
           ENDIF
           DO VAL_
           DO CAL_
           DO REP_
           LOOP
      CASE UPPER(MH_Function) = "T"
           GOTO TOP
           LOOP
      CASE UPPER(MH_Function) = "B"
           GOTO BOTTOM
           LOOP
      CASE UPPER(MH_Function) = "D"
           STORE "N" TO MH_Answer
           @24,0
           IF DELETED()
              @24,0 SAY "Recall this record?"
           ELSE
              @24,0 SAY "Delete this record?"
           ENDIF
           @24,22 GET MH_Answer
           READ
           IF UPPER(MH_Answer) = "Y"
              IF DELETED()
                 RECALL
              ELSE
                 DELETE
              ENDIF
           ENDIF
           LOOP
      CASE UPPER(MH_Function) = "S"
           STORE "N" TO MH_Answer
           STORE MH_Filt TO MH_FiltH
           @24,0
           @24,0 SAY "FILTER: "
           @24,9 GET MH_Filt
           READ
           @24,0
           IF MH_Filt <> MH_FiltH
              IF LEN(TRIM(MH_Filt)) <> 0
                 IF IIF(Clipper,.F.,TYPE(MH_Filt)<>"L")
                    DO WAI_ WITH 24, 0, "Filter expression defective, not usable."
                    MH_Filt=MH_FiltH
                    LOOP
                 ENDIF
                 SET FILTER TO &MH_Filt
              ELSE
                 SET FILTER TO .T.
              ENDIF
              GO TOP
              IF EOF()
                 DO WAI_ WITH 24, 0, "Nothing matches filter!"
              ENDIF
           ENDIF
           LOOP
      CASE UPPER(MH_Function) = "F"
           DO FND_
           LOOP
      CASE UPPER(MH_Function) = "M"
           IF MH_Menu1 = MH_Menu
              STORE MH_Menu2 TO MH_Menu
           ELSE
              STORE MH_Menu1 TO MH_Menu
           ENDIF
           LOOP
      CASE UPPER(MH_Function) = "Q"
           STORE .F. TO MH_LOOP
           LOOP
      CASE UPPER(MH_Function) = "R"
           DO WAI_ WITH 24,0,"MAKE SURE PRINTER IS ON LINE!!!"
           DO CASE
             CASE "DB3+"$DBVersion
                *%%IF,3PLUS
                ON ERROR DO WAI_ WITH 24,0,"Fix PRINTER !!!"
                *%%ENDIF
             CASE "CLIPPER"$DBVersion
                *%%IF,CLIPPER
                DO WHILE .NOT. ISPRINTER()
                   ?? CHR(7)
                   DO WAI_ WITH 24,0,"Fix PRINTER !!!"
                ENDDO
                *%%ENDIF
           ENDCASE
           SET DEVICE TO PRINT
           DO DIS_
           SET DEVICE TO SCREEN
           *%%IF,3PLUS
           IF "DB3+"$DBVersion
             ON ERROR
           ENDIF
           *%%ENDIF
           LOOP
      CASE UPPER(MH_Function)="H"
           DO HLP_ WITH 2
           DO CASE
              CASE "CLIPPER"$DBVersion
                *%%IF,CLIPPER
                CLEAR
                DO DPSORTS
                *%%ENDIF
              CASE "DB3+"$DBVersion
                *%%IF,3PLUS
                CALL DPSORT
                *%%ENDIF
              CASE "DB3"$DBVersion
                *%%IF,DB3
                CLEAR
                DO DPSORTS
                *%%ENDIF
           ENDCASE
           LOOP
   ENDCASE
STORE "N" TO MH_Function
ENDDO
SET FILTER TO .T.
RELEASE MH_Function,MH_Loop,MH_Answer
RETURN

*%%DOCUMENT,DIS,Display-only Format file
PROCEDURE DIS_
@4,13 SAY MA_SORTNAM PICTURE "!!!!!!!!"
@4,48 SAY MA_SORTNDX PICTURE "!!!!!!!!"
@4,70 SAY MA_SORTFRM PICTURE "!!!!!!!!"
@5,15 SAY MA_SORTDES
@8,2 SAY MA_SORTCRI
@13,30 SAY MA_SORTF1 PICTURE "!!!!!!!"
@13,46 SAY MA_SORTO1 PICTURE "!"
@14,30 SAY MA_SORTF2 PICTURE "!!!!!!!"
@14,46 SAY MA_SORTO2 PICTURE "!"
@15,30 SAY MA_SORTF3 PICTURE "!!!!!!!"
@15,46 SAY MA_SORTO3 PICTURE "!"
@16,30 SAY MA_SORTF4 PICTURE "!!!!!!!"
@16,46 SAY MA_SORTO4 PICTURE "!"
@17,30 SAY MA_SORTF5 PICTURE "!!!!!!!"
@17,46 SAY MA_SORTO5 PICTURE "!"
@18,30 SAY MA_SORTF6 PICTURE "!!!!!!!"
@18,46 SAY MA_SORTO6 PICTURE "!"
@19,30 SAY MA_SORTF7 PICTURE "!!!!!!!"
@19,46 SAY MA_SORTO7 PICTURE "!"
@20,30 SAY MA_SORTF8 PICTURE "!!!!!!!"
@20,46 SAY MA_SORTO8 PICTURE "!"
@21,30 SAY MA_SORTF9 PICTURE "!!!!!!!"
@21,46 SAY MA_SORTO9 PICTURE "!"
@22,30 SAY MA_SORTF10 PICTURE "!!!!!!!"
@22,46 SAY MA_SORTO10 PICTURE "!"
RETURN

*%%DOCUMENT,FND,Find record by key routine
PROCEDURE FND_
PRIVATE MH_Find,MH_Answer,MH_Rec
STORE " " TO MH_Find
STORE " " TO MH_Answer
STORE 0   TO MH_Rec
@4,13 GET MA_SORTNAM PICTURE "!!!!!!!!"
@4,48 SAY MA_SORTNDX PICTURE "!!!!!!!!"
@4,70 SAY MA_SORTFRM PICTURE "!!!!!!!!"
@5,15 SAY MA_SORTDES
@8,2 SAY MA_SORTCRI
@13,30 SAY MA_SORTF1 PICTURE "!!!!!!!"
@13,46 SAY MA_SORTO1 PICTURE "!"
@14,30 SAY MA_SORTF2 PICTURE "!!!!!!!"
@14,46 SAY MA_SORTO2 PICTURE "!"
@15,30 SAY MA_SORTF3 PICTURE "!!!!!!!"
@15,46 SAY MA_SORTO3 PICTURE "!"
@16,30 SAY MA_SORTF4 PICTURE "!!!!!!!"
@16,46 SAY MA_SORTO4 PICTURE "!"
@17,30 SAY MA_SORTF5 PICTURE "!!!!!!!"
@17,46 SAY MA_SORTO5 PICTURE "!"
@18,30 SAY MA_SORTF6 PICTURE "!!!!!!!"
@18,46 SAY MA_SORTO6 PICTURE "!"
@19,30 SAY MA_SORTF7 PICTURE "!!!!!!!"
@19,46 SAY MA_SORTO7 PICTURE "!"
@20,30 SAY MA_SORTF8 PICTURE "!!!!!!!"
@20,46 SAY MA_SORTO8 PICTURE "!"
@21,30 SAY MA_SORTF9 PICTURE "!!!!!!!"
@21,46 SAY MA_SORTO9 PICTURE "!"
@22,30 SAY MA_SORTF10 PICTURE "!!!!!!!"
@22,46 SAY MA_SORTO10 PICTURE "!"
@24,0
@24,0 SAY "Enter data to search for in open fields"
READ
IF LEN(TRIM(MA_SORTNAM)) <> 0
   STORE MA_SORTNAM TO MH_Find
   STORE RECNO() TO MH_Rec
   FIND &MH_Find
   IF EOF()
      GOTO MH_Rec
      DO WAI_ WITH 24, 0, "Record NOT Found! "
   ELSE
      DO WAI_ WITH 24, 0, "Record Found! "
   ENDIF
ENDIF
RELEASE MH_Find,MH_Answer,MH_Rec
@24,0
RETURN

*%%DOCUMENT,VAL,Validate Data module
PROCEDURE VAL_
@ 24,0
SELE A
DO WHILE IIF(Clipper,.F.,TYPE(MA_SORTCRI)<>"L")
   ?? CHR(7)
   @ 24,0 SAY "Sort Criteria defective; repair the expression"
   @ 8,2 GET MA_SORTCRI
   READ
ENDDO
@ 24,0
SELE I
IF .NOT. CLIPPER
   SET ESCA OFF
ENDIF
ofs=12
sel=1
fc=10
key=0
nums="1 2 3 4 5 6 7 8 9 10"
DO WHIL key<>27
FVar="MA_SORTF"+SUBS(nums,(sel-1)*2+1,2)
OVar="MA_SORTO"+SUBS(nums,(sel-1)*2+1,2)
@ 24,0
@ 24,0 SAY "Up, Down arrows change fields;  <RETURN> = access;  <Esc> = quit"
@ sel+ofs,29 SAY "@"
DO GetKey WITH CHR(5)+CHR(24)+CHR(13)+CHR(27),key
@sel+ofs,29 SAY " "
DO CASE
  CASE key=5
    sel=sel-1
  CASE key=24
    sel=sel+1
  CASE key=13
    DO SDF WITH sel+ofs,30,46,&Fvar,&OVar
ENDC
sel=IIF(sel>fc,1,sel)
sel=IIF(sel<1,fc,sel)
ENDD
SET ESCA ON
@ 24,0
RETU

*%%DOCUMENT,SDF,Scan and Select; (or Enter) Sort Field Names
PROCEDURE SDF
PARA Ln, Cl, Cl2, Fld, Ord
PRIV key
fld=fld+SPACE(7-LEN(fld))
Ord=Ord+SPACE(1-LEN(Ord))
key=0
DO WHILE .T.
@ Ln,Cl SAY Fld
@ Ln,Cl2 SAY Ord
@ 24,0
@ 24,0 SAY "<SPACE> = Field Scan;  <RETURN> = Field Edit   <Esc> = done field"
DO GetKey WITH " "+CHR(13)+CHR(27),key
@ 24,0
DO CASE
   CASE key=27
      RETURN
   CASE key=13
      @ 24,0 SAY "Edit the fieldname; <Esc> restores original"
      fno=0
      fldh=fld
      DO WHIL fno=0
         @ Ln,Cl GET fld PICTURE "!!!!!!!"
         READ
         IF LEN(TRIM(fld))=0
            EXIT
         ENDIF
         IF READKEY()=12.OR.READKEY()=268
            fld=fldh
            EXIT
         ENDIF
         @ 24,55 say "CHECKING..."
         DO ValidFld WITH fld, fno
         @ 24,55
         @ 24,55 say IIF(fno>0,"OK","BAD FIELD")
      ENDD
      @ Ln,Cl SAY Fld
   CASE key=32
      @ 24,0 SAY "Arrows Scan, <RETURN> selects, <Esc> quits Scan"
      STOR 1 TO I,K
      sks=CHR(4)+CHR(19)+CHR(13)+CHR(27)
      SELE A
      DO WHILE LEN(FIELD(I))>0
        @ Ln,Cl SAY "           "
        @ Ln,Cl SAY FIELD(I)
        DO GetKey WITH sks,k
        DO CASE
        CASE k=13
          fld=FIELD(I)+SPACE(7-LEN(FIELD(I)))
          EXIT
        CASE k=19
          I=IIF(i>1,i-1,i)
        CASE k=4
          I=IIF(LEN(FIELD(i+1))=0,i,i+1)
        CASE k=27
          EXIT
        ENDC
      ENDDO
      SELE dpsort
ENDCASE
IF LEN(TRIM(fld))=0
   Ord=" "
ELSE
   badord=.T.
   @ 24,0
   DO WHILE badord
      @ 24,0 SAY "Enter 'A' or 'D' for Ascending/Descending Sort Order"
      @ Ln,Cl2 GET ord PICTURE "!"
      READ
      badord=.NOT.(ord$"AD")
   ENDDO
   @ 24,0
ENDIF
ENDD
RETU

*%%DOCUMENT,INK,Low-level keyboard-reading routine
PROCEDURE GetKey
PARA S,K
k=INKE()
DO WHIL k=0 .AND..NOT. CHR(k)$S
k=INKE()
ENDD
RETU

*%%DOCUMENT,VFD,Ensure valid Sort Field Name entry
PROCEDURE ValidFld
PARA fld, fno
fno=0
i=1
SELE A
SET EXAC ON
DO WHIL LEN(FIEL(I))>0
IF TRIM(fld)=FIEL(I)
fno=I
EXIT
ENDI
I=I+1
ENDD
SELE I
SET EXAC OFF
RETU

*%%DOCUMENT,HLP,Give general help information
PROCEDURE HLP_
PARAMETERS What
DO CASE
CASE What = 1
     @0,0 SAY "Sorry, No help available"
CASE What = 2
     @0,0 SAY "Sorry, No help available"
OTHERWISE
     @0,0 SAY "LOGIC ERROR IN PROGRAM"
ENDCASE
DO WAI_ WITH 24, 0, ""
@0,0
RETURN

*%%DOCUMENT,WAI,Low-level WAIT and Message-display routine
PROCEDURE WAI_
PARA y,x,msg
PRIV dummy
dummy=" "
SET INTE OFF
@Y,X
@Y,X SAY msg+" Press any key to continue..." GET dummy
READ
SET INTE ON
@Y,X
RETU

*%%DOCUMENT,SMM,Sort/select Main Menu screen (used when LOAD/CALL unavailable)
PROCEDURE DPMMSRTS
@ 1,0 SAY "╔══════════════════════════════════════════════════════════════════════════════╗"
@ 2,0 SAY "║                         Sort/select definition Menu                          ║"
@ 3,0 SAY "╟──────────────────────────────────────────────────────────────────────────────╢"
@ 4,0 SAY "║                                                                              ║"
@ 5,0 SAY "║                   A - Add new definitions                                    ║"
@ 6,0 SAY "║                   U - Update, Edit, Scan, Find definitions                   ║"
@ 7,0 SAY "║                   R - Create/Modify a Dbase III Report Form                  ║"
@ 8,0 SAY "║                                                                              ║"
@ 9,0 SAY "║                   L - Create/Modify a Dbase III Label Form                   ║"
@ 10,0 SAY "║                   I - Rebuild the Index                                      ║"
@ 11,0 SAY "║                   P - Pack the database to remove deleted definitions        ║"
@ 12,0 SAY "║                                                                              ║"
@ 13,0 SAY "║                                                                              ║"
@ 14,0 SAY "║                   Q - Quit Program, return to DOS                            ║"
@ 15,0 SAY "║                   D - Return to your application                             ║"
@ 16,0 SAY "║                                                                              ║"
@ 17,0 SAY "║                                                                              ║"
@ 18,0 SAY "║                   Please choose one of the above options                     ║"
@ 19,0 SAY "║                                                                              ║"
@ 20,0 SAY "╚══════════════════════════════════════════════════════════════════════════════╝"
@ 23,0 SAY "                                               Choice:                          "
RETURN

*%%DOCUMENT,STS,Sort Definitions screen (used when LOAD/CALL unavailable)
PROCEDURE DPSORTS
@ 1,0 SAY "╔══════════════════════════════════════════════════════════════════════════════╗"
@ 2,0 SAY "║                         Sort/Selection Definitions                           ║"
@ 3,0 SAY "╠══════════════════════════════════════════════════════════════════════════════╣"
@ 4,0 SAY "║ Sort Name:                 Sorted File Name:            Form Name:           ║"
@ 5,0 SAY "║ Description:                                                                 ║"
@ 6,0 SAY "╟──────────────────────────────────────────────────────────────────────────────╢"
@ 7,0 SAY "║                             Selection Criteria                               ║"
@ 8,0 SAY "║                                                                              ║"
@ 9,0 SAY "╟──────────────────────────────────────────────────────────────────────────────╢"
@ 10,0 SAY "║                                Sort Fields                                   ║"
@ 11,0 SAY "╟──────────────────────────────────────────────────────────────────────────────╢"
@ 12,0 SAY "║                             Field Name    Order                              ║"
@ 13,0 SAY "║                          1)                                                  ║"
@ 14,0 SAY "║                          2)                                                  ║"
@ 15,0 SAY "║                          3)                                                  ║"
@ 16,0 SAY "║                          4)                                                  ║"
@ 17,0 SAY "║                          5)                                                  ║"
@ 18,0 SAY "║                          6)                                                  ║"
@ 19,0 SAY "║                          7)                                                  ║"
@ 20,0 SAY "║                          8)                                                  ║"
@ 21,0 SAY "║                          9)                                                  ║"
@ 22,0 SAY "║                         10)                                                  ║"
@ 23,0 SAY "╚══════════════════════════════════════════════════════════════════════════════╝"
RETURN
*%%CLOSE
*%%ENDIF
```
{% endraw %}

## REG.TXT

{% raw %}
```







     Send to:           University Research, Inc.           Order Form
                     602 South 48th Street Suite 229
                         Philadelphia, Pa. 19143


     Please send:
                                           Copies   Price    Total

     Registration and copy of version 2.0   ___  x $39.95 = _________
     (includes version 2.0 and printed
      manuals)

     Shipping and handling                  ___  x  $5.00 = _________

     Pennsylvania residents must add
     $2.40 (6%) State sales tax.            ___  x ______ = _________


                                               Total Sent   _________


       Site licenses are available for a flat $500.00 per building,
       please write or call for more information.


       Name   : _______________________________________________


       Company: _______________________________________________


       Address: _______________________________________________


              : _______________________________________________


       City   : ____________________ State: ____  Zip: ________


       Day Phone: _____________________________________________


       Eve Phone: _____________________________________________


       Version 1.31

       ORDERS OUTSIDE THE US:  Use a check drawn on a US bank in US
       dollars.  Otherwise add $10.00 for collection.  Please send
       $10.00 for non-US shipping.

       C.O.D. orders call (215) 472-5050






```
{% endraw %}

## WALKTHRU.TXT

{% raw %}
```







                                         

                                         

                                         

                                         

                                         

                                         

                                         

                                         

                              dPROG Programmers Guide
                              dPROG Programmers Guide

                                   Version 1.31
                                   Version 1.31

                                  August 1, 1988
                                  August 1, 1988

                                  Getting Started
                                  Getting Started

                                         

                                         

                                         

                                         

                                         

                   Copyright 1987,1988 University Research, Inc.
                   Copyright 1987,1988 University Research, Inc.

             602 South 48th Street, Suite 229, Philadelphia, PA 19143
             602 South 48th Street, Suite 229, Philadelphia, PA 19143
   
   


























                                 TABLE OF CONTENTS
                                 TABLE OF CONTENTS

                                         

   What is dPROG?.............................................3

   How to use this manual.....................................4

   Starting the dPROG system..................................5

   The Help screen............................................7

   Describing your system.....................................8

   Designing a screen........................................11

   Inserting and deleting columns............................13

   Inserting and deleting rows...............................14

   Using special characters..................................15

   Centering lines...........................................17

   Describe your fields......................................17

   Saving your system........................................19

   Exiting dPROG.............................................20

   Creating the system.......................................21

   Documenting your system...................................22

   Installing your created system............................23

   Working with your created system..........................23

   Exiting your created system...............................23

   Reordering fields.........................................24

   Adding new fields to an existing system...................26

   Deleting existing fields..................................28

   Indexes and your system...................................30

   What is University Research?..............................33

   One last thing!...........................................35

   INDEX.....................................................37













   


                                     What is dPROG?
                                     ______________


   dPROG is a dBase programming utility that allows you to generate screens,
   format files, validation files, databases, entire systems and their
   documentation with very little work.  dPROG is composed of five main
   applications: the system integrater, the screen designer, the compiler, the
   documenter and the system converter.

   The system integrater (DPSYS) is a menu system which controls the use of the
   various functions.  It also allows you to specify the paths used for input
   screen files, output systems files and executable modules.

   The screen designer (DPROG) allows you to design screens and if desired,
   build entire applications by drawing a screen and describing the system
   parameters and the fields on your database.

   The compiler (DPCOMP) converts your screens, system description, and field
   descriptions from DPROG into dBase III+ code.  You will need either dBase
   III+, Runtime +, or a dBase compiler such as Clipper to run this system.

   The documenter (DPDOC) generates user documentation based on the information
   you described in dPROG.  A user's guide tailored to your new system is one of
   the components.  Using information you gave to dPROG, dPDOC tailors the
   manual to include the programmers name, copyright notice, system name and
   description, field names and descriptions, and more.  The manual is a full
   walk through and users guide for the end user on how to use your system.

   The converter (DPCONV) uses files created by a background utility (DPCLIP) to
   convert your existing applications into dPROG systems.

   dPROG version 1.31 (this version) is distributed as "shareware".  If you like
   this product, you should send $39.95 to University Research, Inc.  In
   exchange for this, you will receive version 2.0 (which will not be
   distributed as shareware), printed manuals, and be registered to find out
   about future versions and other utilities developed by us.

   dPROG version 2.0 expands the capabilities of version 1.  Version 2 allows 64
   fields on a screen, screen painting and coloring, line copies within the
   screen designer and more.  Version 2.0 is currently available.












dPROG dBase Programmers Guide.  Getting Started.                  Page 3










   dPROG version 3.0 is in development.  It will allow the use of up to 8 files,
   and enable you to develop relational applications. It will also have several
   other major enhancements over version 2.0.  Version 3.0 should be available
   October 1988 for a small upgrade charge for all registered version 2.0 users,
   or available at a higher price for new users.

   

                                    Some Notes
                                    __________

   dBase III+ and RUNTIME+ are trademarks of Ashton Tate


   Clipper is a trademark of Nantucket


                              How to use this manual
                              ______________________
   
   This manual is designed to help you understand and use the dPROG system.  If
   you follow each step exactly as written, it will demonstrate how an actual
   system is developed.
   This manual is broken up into sections on: Starting dPROG, the help screen,
   etc.  Under each section there are steps describing procedures and the proper
   responses.  What you should do is left justified, the computer's response is
   directly following and indented.
   Please try to follow each step in order to better understand the system.  If
   you have any questions about the terms used check, the glossary in the dPROG
   reference manual.
   


























dPROG dBase Programmers Guide.  Getting Started.                  Page 4










   


                               Starting the dPROG system
                               _________________________


   Type DPSYS and press carriage return
        The main system menu appears.  See below.
        
   .............................................................................
   .                                 dProg Menu                                .
   .                               System Control                              .
   .............................................................................
   .                                                                           .
   .                                                                           .
   .                 F1.   dProg                                               .
   .                       Screen design, file/field definition.               .
   .                 F2.   dPCOMP                                              .
   .                       System compiler. Generate a system from your screen..
   .                 F3.   dPDOC                                               .
   .                       System documentation generator.                     .
   .                 F4.   dPCONV                                              .
   .                       Convert a clipped screen into a system.             .
   .                 F5.   Set system parameters                               .
   .                       Change defaults                                     .
   .                 F10.  Exit to DOS                                         .
   .                       Quit to system                                      .
   .                                                                           .
   .                 ..........................................                .
   .                 .Copyright 1987 University Research, Inc..                .
   .                 ..........................................                .
   .                                                                           .
   .............................................................................
   
   
   Function keys F1-F5 and F10 each control a system function.
   
   F1 Starts dPROG the screen designer.  This will allow you to create your
      screens and describe the fields used on each screen.
   F2 Runs the compiler, this will convert the screen you designed with dPROG
      into dBase source code.
   F3 Runs the documentation generator.  This program will create a custom users
      manual for your new system.
   F4 Starts the conversion program.  To use this program you must first 'clip'
      a screen from an existing application using dPCLIP.  The file generated by
      dPCLIP can than be converted using dPCONV to a screen file for the dPROG
      system.
   F5 Allows you to set the system parameters.  With this function you can
      change the drive and path used for the input screens, output programs, and
      dPROG system programs.
   F10 Exits the system and returns to DOS.
   



dPROG dBase Programmers Guide.  Getting Started.                  Page 5










   Lets get started using dPROG.

   Press F1
        The dPROG introduction screen containing the copyright notice appears.
        To exit the introduction screen press carriage return, otherwise this
        screen will automatically disappear after 10 seconds.
        

   Press carriage return
        A blank design screen appears on the screen of your computer.  Stop for
        a moment and look at this screen.
        The bottom line is called the status line.  It contains information
        about the function of the program.  Any questions or error messages
        generated while designing a screen appear here, as well as any replies
        you may make to questions.
        Notice on the left side of the status line 'R: 1 C: 1 L:80' appears.
        This tells you the cursor is in row 1, column 1 and the screen lock
        column (more about that later) is column 80.
        On the right of the status line is 'F1 = HELP'.  This is a reminder that
        if you press F1 the help screen will appear.
        If you are using version 2 of the program, also on the right is a
        literal 'PAINT OFF' showing that the screen painting function is
        currently off.  The color of the 'PAINT OFF' is white on black
        indicating that painting will be white foreground colors on a black
        background.
        





























dPROG dBase Programmers Guide.  Getting Started.                  Page 6










        


                                    The Help screen
                                    _______________


   Press F1
        A help screen appears (see below).  The function keys are listed with a
        description of their functions.  In the center of the screen is a
        reminder that if you press F1 again you will get to the special
        character set.  Below that are indicators which show that you can repeat
        the last character by pressing Ctrl and PgUp, PgDn, right arrow or left
        arrow. To exit from the help menu you would press Esc.
        
        
   ............................................................................
   .                           dPROG PROGRAMMER HELP                          .
   ............................................................................
   .        Help key (this screen)  . F1 . F2 . Set Lock Column               .
   .        Insert a Line at Cursor . F3 . F4 . Delete a Line at Cursor       .
   .        Create/Extend a field   . F5 . F6 . Change a field's attributes   .
   .        Set Color               . F7 . F8 . Turn Paint on/off             .
   .        Copy line               . F9 . F10. Dir/Save/Load/Quit/Clear/Parms.
   ............................................................................
   .           To select from Special character set. Press F1 again.          .
   ............................................................................
   .               To repeat the last special character selected:             .
   ............................................................................
   . Press Ctrl and    .    PgUp  =  Repeat UP    .    PgDn  =  Repeat DOWN   .
   .                   .          =  Repeat Right .          =  Repeat Left   .
   ............................................................................
   .                                                                          .
   . dPROG dBase development system version 1.31 (c) 1987 University Research .
   . To register and receive version 2.0 send $39.95 + $5.00 S/H to:          .
   .                           University Research Inc.                       .
   .                           602 S. 48th St.                                .
   .                           Philadelphia, Pa. 19143                        .
   ............................................................................
   

   Press Esc
        The help screen disappears and is replaced by the screen design screen.
        












dPROG dBase Programmers Guide.  Getting Started.                  Page 7










        


                                 Describing your system
                                 ______________________


   You will now describe some general information about the system you are about
   to build.


   Press F10
        "Clear Dir dOs Load Parms Save Quit" appears on the status line and
        dPROG waits for a reply.  The choices are: clear all work done so far;
        show a directory of the existing systems; exit to DOS and return; load
        an existing system; create or change this systems parameters; save this
        system; or quit to DOS.

   Press P
        This indicates that you wish to change this systems parameters.
        The system information screen appears (see below).  The cursor is
        positioned at system name.  The system name is normally the name of the
        screen which you loaded from disk, but for a new system it defaults to
        'WORK'.
        
   ............................................................................
   .                             dPROG PROGRAMMER                             .
   .                         DEFINE SYSTEM INFORMATION                        .
   ............................................................................
   .                                                                          .
   . System Name:              Copyright Date:                                .
   .                                                                          .
   . Programmers Name:                                                        .
   .                                                                          .
   . Copyright Holder:                                                        .
   ............................................................................
   .                             System Description                           .
   .                                                                          .
   ............................................................................
   .                   To define Files and Indexes press F10                  .
   ............................................................................
   .                                  Modules                                 .
   ............................................................................
   .  PRG     ADD     CAL     DIS     FMT     FND     HLP     INT     LAB     .
   .          MM      PUB     REP     REP     SRT     STO     UPD     VAL     .
   .          REL                                                             .
   .                                                                          .
   ............................................................................
   

   Change the system name to 'MAILLIST'.
        This is the name of your new system.




dPROG dBase Programmers Guide.  Getting Started.                  Page 8










   Change the copyright date
        If the copyright date is correct; leave it alone, otherwise change it to
        the year you wish.

   Press return
        The cursor moves to Programmer's name.

   Type in your name
        Notice that the Copyright holder changes to your name.  If you wish a
        different copyright holder (such as the company you work for) change the
        copyright holder field.

   Move to the System description area and type in 'Test mailing list system'.

   At the bottom of the screen is a series of three letter codes.  This section
   allows you to specify which modules will be created by the compiler.  For the
   time being, leave these alone.

   Notice the line that reads 'To define Files and Indexes, press F10'.

   

   Press F10
        A new screen marked Define File's Information appears.
        
   ............................................................................
   .                             dPROG PROGRAMMER                             .
   .                         DEFINE FILE'S INFORMATION                        .
   ............................................................................
   .                                                                          .
   . Database Area:                                                           .
   .                                                                          .
   . Database Name:                  Index Name:                              .
   .                                                                          .
   ............................................................................
   .                                                                          .
   . If you were describing this database file to someone, instead of calling .
   . a database you would call it _________________________.                  .
   . (membership list, A/R file, movie catalog, etc.)                         .
   .                                                                          .
   . Given this, each record on the file is a ____________________.           .
   . (member, invoice, video tape, etc.)                                      .
   .                                                                          .
   ............................................................................
   .                  ........................................                .
   .                  .. (c) 1987 University Research, Inc. ..                .
   .                  ........................................                .
   ............................................................................
   

   Type 'MAIL'
        If you are using version 1, you can only have one file.  You have named
        your database MAIL.
        

dPROG dBase Programmers Guide.  Getting Started.                  Page 9










   Move the cursor to the Index Name area and type 'MAIL'
        The name of the index file for this database will be MAIL.

   Press Return
        You are about to answer the line which reads "If you were describing
        this database to someone, instead of calling it a database you would
        call it a _________________".  This parameter will be used in the
        documentation module to describe the file.

   Type 'mailing list'
        Since this is a mailing list, that is what we will call it.

   Press Return
        You are now on the line which reads "Given this, each record on the file
        is a ____________________."   If this file is a mailing list what is
        each record?  If you are a company, this might be a customer.  If you
        are a club, this might be a member.

   Type 'member'
        This will also be used in the documentation to describe what each record
        is.
        You have now described all of the general system parameters for a single
        file system.  When finished press Esc to exit from this screen and
        return to the screen design screen.

   Press Esc
        You are returned to the screen design screen.
        



























dPROG dBase Programmers Guide.  Getting Started.                  Page 10










        


                                   Designing a screen
                                   __________________


   The cursor is currently in row 1 column 1, the top left corner of the screen.
   The status line on the bottom of the screen shows R:1,C:1.


   Type 'IDNO' (without the quotes).
        IDNO appears in columns 1 through 4 in the first row of the screen.
        This is a screen constant.  This is a screen literal which will always
        be displayed when this screen is used.

   Press space
        The cursor moves one space to the right.  R:1 C:6 appears on the status
        line showing that you are in row 1 column 6.

   Press F5
        A small block appears on the screen.  This is a field block.  A field is
        a place where variable data will be placed.  This data may come from a
        database file or be calculated from other data.  Since this field
        contains only one field block, it is currently only 1 position in
        length.

   Press left arrow
        The cursor moves onto the field block.  On the status line at the bottom
        of the screen F: 1 L: 1 appears on the right side.  This indicates that
        this is field number 1 and has a length of 1 position.

   Press the space bar
        The computer beeps and the cursor does not move.  You cannot put screen
        constants (letters, spaces, special characters, etc) on a field.  The
        computer is reminding you of this.

   Press right arrow
        The cursor moves to the right one space.  It is now no longer on the
        field block, but next to it.  The status line shows R:1 C:7 and the
        field information disappears.

   Press F5 four times
        The field is now 5 field blocks long.  Whoops, we missed.  I wanted the
        field to be only four positions long.  To shorten an existing field,
        press the backspace key at the end of the field or press the Del key
        from within a field.

   Press Backspace
        The last field block of the group is erased and the field is now only
        four positions long.

   Press Return
        The cursor moves to the next line.  The status line shows R:2 C:1.  You
        are now positioned under the screen constant IDNO.

dPROG dBase Programmers Guide.  Getting Started.                  Page 11










   Type 'NAME' (without the quotes)
        NAME appears on the screen under IDNO.  You have generated another
        screen constant.

   Press space
        This places a space after the screen constant NAME.

   Press F5 until you have 30 field blocks
        You can stop every once and a while and check the field size by putting
        the cursor on one of the blocks in the field and looking at the L:nn
        field on the status line.  If there are too few, put the cursor after
        the last block and continue pressing F5.  If there are too many, press
        backspace or Del to remove some of the blocks.

   Press carriage return
        The cursor goes to row 3.

   Type 'ADDRESS' and a space.
        ADDRESS appears on the screen.

   Press F5 30 times to create another field
        This field will contain the first line of the address.

   Press carriage return
        Go to the next line.

   Move the cursor to just under the first block of the field ADDRESS.
        By using the space bar or the right and left arrow keys, move the cursor
        to under the first block of the field ADDRESS.  The status line should
        read R:4 C:9

   Add another field of 30 field blocks
        You have just added the second address line field.

   Move the cursor to row 5 column 29
        You are about to add a 10 byte field for the zipcode.

   Create a 10 position field for zipcode
        It should align with the end of the fields above it.

   Move the cursor to row 5 column 26
        You are about to add a 2 position field for State.

   Create a 2 position field for state.

   Move to row 5 column 9
        You are about to add a 16 position field for City.

   Create a 16 position field for city
        That is the last field for this screen.
        




dPROG dBase Programmers Guide.  Getting Started.                  Page 12










        


                             Inserting and deleting columns
                             ______________________________


   You are about to learn how to insert and delete columns on the screen.


   Press Home
        The cursor moves to row 1 column 1.  The status line reflects this.

   Move the cursor to the first block of the ID field.
        The status line should indicate row 1, column 6.

   Press Ins
        The field for the ID number moves one space to the right.  The Ins key
        moves any data from the cursor to the lock column one position to the
        right.  Any screen constants being forced past the lock column (normally
        column 80) will be lost.

   Press Ins twice more to place the field block over the address field.
        The field block aligns itself over the address field blocks.

   Move the cursor to the NAME field.
        You are about to move the NAME field over the ADDRESS field.

   Press Ins 4 times.
        The NAME field moves over the ADDRESS field, but one position too much.
        Next you will use the Del key to pull the field back to the left.

   Press Del
        The NAME field moves back to the left one position.  Your screen should
        now have the fields aligned.
        




















dPROG dBase Programmers Guide.  Getting Started.                  Page 13










        


                              Inserting and deleting rows
                              ___________________________


   Press Home
        The cursor is back at the upper left of the screen.

   Press F1 for the HELP screen.
        Notice that the help screen says that F3 inserts a line.

   Press F3
        You have just inserted a line at the top of the screen and pushed the
        remaining lines down one.  If there was a line at the bottom of the
        screen it would have been pushed off the screen and lost forever.
        Also notice that all function keys work from either the screen design
        screen or the help screen (with the exception of F1, more about that
        later).  If you had pressed F3 on the design screen it would have
        inserted a blank line just as it did from the help screen.  If you can't
        remember which function key inserts a line (or any other function) press
        F1 for help.  A function key pressed on the help screen (except for F1)
        will act upon the screen design screen.

   Press F4
        This deletes the line you have just inserted.  The F4 key will delete a
        line and remove any fields on that line.

   Press F3
        We needed that blank line, this will put it back in.

   Move the cursor down to row 2
        You are in front of 'IDNO'

   Press Ins twice
        You moved the line over two positions to the right.

   Move the cursor down another line
        We are going to move this line over 2 positions too.

   Press Ins twice
        The line with 'NAME' moves over two positions.

   Keep doing this for the remainder of the lines containing data.

   









dPROG dBase Programmers Guide.  Getting Started.                  Page 14










   


                                Using special characters
                                ________________________


   Press Home
        The cursor moves to row 1 column 1

   Press F1 for HELP
        The HELP screen comes up.  Notice the line that says 'To select from
        Special character set. Press F1 again'.

   Press F1 again
        A screen labeled 'dPROG Special Character Set' appears.  Notice the
        cursor is on a character that looks like the upper left corner of a box
        made up of double lines.  Look at the bottom of the screen where it
        tells you to move the cursor and press return to choose a character.

   Press carriage return
        The upper left corner of a double lined box appears on the screen design
        screen.  This is the special character you said to copy.  Also notice
        that the cursor has moved right one position.  Whenever you insert a
        character from the special character set the cursor "drops" the
        character on the design screen and moves one position to the right.

   Press F1 twice
        You get to the special character set again.

   Press right arrow
        You moved the cursor from the box corner character to the horizontal
        double line.  You are about to select the horizontal double line.

   Press return to select this character
        The double line appears on the design screen next to the corner box
        character.  You are building a double lined box around the screen you
        just designed.  You could keep hitting F1 twice and pressing carriage
        return to continue forming the upper part of the box, but this would
        take a long time.  Next we'll learn to repeat characters.

   Press Ctrl right arrow
        Keeping the Ctrl key pressed, press the right arrow key (on the numeric
        keypad).  This repeats the last character selected and moves the cursor
        to the right.  Notice that a second horizontal double line appears and
        the cursor moves to the right one position.

   Continue pressing Ctrl right arrow until you get to row 1 column 41 (watch
   the status line)
        You have drawn the upper line of a double lined box.

   Press F1 twice
        The special character set appears again.  Move the cursor to the upper
        right corner of a double lined box.


dPROG dBase Programmers Guide.  Getting Started.                  Page 15










   Press return
        You have drawn the top of a box.

   Move the cursor to R2 C42.
        You are ready to draw the side of the box.

   Press F1 twice
        The special character screen appears again.

   Point at the vertical double bar.

   Press carriage return
        The side of the box starts forming.  Because the cursor moved to the
        right, you must position the cursor down one line and left one column.

   Move the cursor to R3 C42
        You are ready to draw the side of the box.

   Press Ctrl PgDn until you get to R7 C42
        You have drawn the side of the box

   Get the lower right side of the box from the special character set.

   Place it on your screen.

   Finish drawing the box around your data.
        The Ctrl PgUp key repeats the last character selected and moves up one
        line (row).  The Ctrl left arrow key repeats the last character selected
        and moves the cursor to the left.
        

























dPROG dBase Programmers Guide.  Getting Started.                  Page 16










        


                                    Centering lines
                                    _______________


   Move the cursor to the top line of the box
        You are about to center the box containing your data on the screen.

   Press Ctrl C
        Hold the Ctrl button and press C.  The line centers on the screen.

   Move down to the next line

   Press Ctrl C
        The next line centers.

   Continue with the remainder of the lines containing data.

   Press Home
        Move the cursor to the top of the screen.

   Press Ctrl R
        This displays a ruler on the currrent row.  Press Ctrl R to remove it.

   Press Ctrl R
        Remove the ruler.

   Press F3
        Remember that the F3 key inserts lines.  You will now push the box lower
        on the screen to center it vertically.  If you push the box down too
        far, press F4 to delete the blank line.


                                  Describe your fields
                                  ____________________


   Now that you have drawn the screen and built the fields you need to describe
   the fields.  You can name the field and describe where the data comes from
   (file or calculation).  If the data comes from a file, you must specify which
   file and the type of data (numeric, logical, date, character) contained in
   this field.  If it's numeric, how many decimal positions are needed.  You may
   also specify the low and high ranges for the data, describe any calculation
   for this field, and give editing and initialization data.


   Move the cursor to the first field block of the IDNO field.
        We are about to describe the IDNO field.







dPROG dBase Programmers Guide.  Getting Started.                  Page 17










   Press F6
        A screen titled 'Define Field's Data' appears (see below).  This field
        allows you to describe this field.
   
   ............................................................................
   .                             dPROG PROGRAMMER                             .
   .                            DEFINE FIELD'S DATA                           .
   ............................................................................
   
   
   ............................................................................
   .  Field Number: __           Same As: ___       Field Name: _______       .
   .  File/Display/Calc: _       Type: _            File Name : ________      .
   .  Decimal Positions: _       Edit: _________________________________      .
   .  Low Value: ________________            High Value: ________________     .
   ............................................................................
   .                               Description                                .
   ._________________________________________________________________________ .
   ............................................................................
   .                                Picture                                   .
   ._________________________________________________________________________ .
   ............................................................................
   .                              Initial Value                               .
   ._________________________________________________________________________ .
   ............................................................................
   .                               Calculation                                .
   ._________________________________________________________________________ .
   ............................................................................
   

   Stop for a second and look at the screen which has just appeared.

   Leave the FIELD NUMBER alone, press return or tab. Leave the SAME AS field
   alone, press return or tab.  The cursor moves to FIELD NAME.  We will now
   change the name of the field from F_1.

   Type 'IDNO' and press return.
        F_1 changes to IDNO.  The next field we will change is description.

   Press return or tab until you reach the description field.

   Type 'Customer Number'
        The description changes to Customer Name.  This is the last change
        needed for this field.  We will now go to the next field.

   Press PgDn
        The data for the next field (Name) appears on the screen.

   Change the field name to 'NAME' and the description to 'Customer Name'

   Press PgDn
        The field changes to address line 1



dPROG dBase Programmers Guide.  Getting Started.                  Page 18










   Change field name to 'ADD1' and description to 'Main Address Line'

   Press PgDn and change the field name to 'ADD2' and the description to 'Second
   Address Line'

   Press PgDn
        Notice that the next field being displayed is the zipcode field.  This
        is because we entered the fields in zipcode, state, city order.  We will
        fix the ordering of these fields later.  For now we will set the field
        name and description.

   Change name to 'ZIPCODE' and description to 'Zip, Zip+4, or other format'

   Press PgDn
        The state field displays.

   Change the name to 'STATE', and the description to '2 digit state', and in
   the picture field type in '!!'.
        The picture !! is a dBase function which will convert any data inputted
        to upper case.  If you do not know about dBase pictures, there is an
        explanation in the dPROG reference manual.

   

   Change the Edit field to %%FIND(STATE,STATE)
        This causes the finished application to look up the state the user
        entered on a database named STATE using an index named STATE and only
        allow records which exist on the STATE database to be allowed into this
        field.  The STATE database is distributed with the dPROG system.
        

   Press PgDn
        The city field shows.

   Change the field name to 'CITY' and the description to 'Customer's city'
        You have now finished the last field.  There is other field description
        information which you did not fill in, but instead took the default.
        Later we will see what these other values do.  Next you will save your
        system and create the programs and files needed.  Hang in there, we are
        almost done.


                                   Saving your system
                                   __________________


   Now that you are finished describing your system, you need to save it to
   disk.


   Press Escape
        You return back to the design screen




dPROG dBase Programmers Guide.  Getting Started.                  Page 19










   Press F10
        A message "Clear Dir dOs Load Parms Save Quit" appears on the status
        line. and dPROG waits for your reply.

   Press S
        A message appears on the status line saying 'A:MAILLIST'.  Remember when
        you set the system parameters, you told the dPROG that the system name
        was MAILLIST.  The default screen name is the system name you typed in.

   Press return
        A screen file (MAILLIST.SCR), field description file (MAILLIST.FLD),
        binary image file (MAILLIST.BIN), print image file (MAILLIST.SPR), and
        system parameter file (MAILLIST.SPM) are created.  The status line
        blinks 'SAVING'.  If there are any problems, a message will appear on
        the status line.  You have now saved your system description.

   Press Esc
        The design screen returns.


                                     Exiting dPROG
                                     _____________


   Now that you are done, you will exit back to the dPSYS menu or DOS.


   Press F10
        A message "Clear Dir dOs Load Parms Save Quit" appears on the status
        line. and dPROG waits for your reply.

   Press Q
        This causes you to quit dPROG and exit to the dPSYS menu.  If you had
        made any changes to the screen or parameters without saving, you would
        have been asked if you are sure that you wish to quit.
        




















dPROG dBase Programmers Guide.  Getting Started.                  Page 20










        


                                  Creating the system
                                  ___________________


   In this section you will build the programs and databases needed for the
   system you have described.


   From the dPSYS menu type F2 or from DOS type DPCOMP and press return
        This starts the system compiler.  A screen displays showing two
        questions with defaults (see below).
   
   ............................................................................
   .                              dPROG COMPILER                              .
   .                          Create Systems Programs                         .
   ............................................................................
   .                                                                          .
   . System: ________                                                         .
   .                                                                          .
   . Replace Database: _ (If one exists)                                      .
   .                                                                          .
   .                                                                          .
   .                                                                          .
   .                                                                          .
   .                                                                          .
   .                                                                          .
   .                                                                          .
   .                                                                          .
   .                                                                          .
   .                      PRESS F1 TO COMPILE, F10 TO QUIT                    .
   .                                                                          .
   .                    ....................................                  .
   .                    .(C) 1987 University Research, Inc..                  .
   .                    ....................................                  .
   .                                                                          .
   ............................................................................
   
        
        The first field is 'SYSTEM'.  This is the name of the system you wish to
        generate.  The default is the last system you worked on with dPROG.
        The second question is 'REPLACE DATABASE?  (If one exists)'.  The
        default is 'N'.  If you are making modifications to a screen design and
        wish to keep the existing data on your database, leave this alone.  If
        you wish to create a new empty database, change this to 'Y'.  If there
        is no database, one will be created no matter what you enter here.
        Below the questions is the line 'PRESS F1 TO CREATE SYSTEM, F10 TO
        EXIT'.  If you press F1 the system will be generated.  If you press F10
        you will exit to DOS having done nothing.

   Press F1
        A list of programs and databases display as they are created.  When
        DPCOMP is done, you are returned to DOS.

dPROG dBase Programmers Guide.  Getting Started.                  Page 21










        
        


                                Documenting your system
                                _______________________


   Now that you have created your system, you will need a users manual for the
   end user (or yourself) on how to use your new system.  Rather than having a
   generic manual on disk, there is a dPROG program which will create a user
   manual for you.  You will now run that program and create the users manual.


   From the dPSYS menu press F3 or from DOS type DPDOC and press return
        A screen appears (see below) asking three questions.  You have to
        specify the system to be documented, the input doc file, and the output
        device.  Notice that all three questions are filled in.
   
   ............................................................................
   .                             dPROG DOCUMENTER                             .
   .                         Print System Documentation                       .
   ............................................................................
   .                                                                          .
   . System: ________                                                         .
   .                                                                          .
   . Input Doc File: UGUIDE.DAT                                               .
                     __________                                                
   .                                                                          .
   . Output Device:  LST___________________                                   .
                     ___                                                       
   .                                                                          .
   .                                                                          .
   .                                                                          .
   .                                                                          .
   .                                                                          .
   .                                                                          .
   .                       PRESS F1 TO PRINT, F10 TO QUIT                     .
   .                                                                          .
   .                                                                          .
   .                    ....................................                  .
   .                    .(C) 1987 University Research, Inc..                  .
   .                    ....................................                  .
   .                                                                          .
   ............................................................................
   
        
   The default system is the last system you worked on.
   The default doc file is 'UGUIDE.DAT'.
   The default output device is 'LST:'.
   You may change any of these (for example to print to disk change the output
   device to 'A:name'), but for now we will leave these alone.
   Below the questions notice the line 'Press F1 to print, F10 to exit'.  If you
   press F1 the printing will start.  If you press F10 you will exit without
   printing.



dPROG dBase Programmers Guide.  Getting Started.                  Page 22










   Press F1
        The manual starts printing on your printer.


                             Installing your created system
                             ______________________________


   You will now need to copy the files needed to use your system to a work
   floppy.

   If you have a two floppy system, place your dPROG program disk into the A
   drive and a blank formatted floppy into the B drive, otherwise just place the
   blank formatted floppy into the B drive.

   Type 'COPY dp*.bin B:' and press return
        The default screen images copy to the B drive

   Type 'COPY maillist.* B:'
        Your new system copies to the B drive.

   Type 'COPY work.* B:'
        Since you named your database work, you must copy the database file(s)
        to the B: drive.

   Type 'COPY DPSORT.* B:'
        The sort/select subsystem copies to the B drive.


                            Working with your created system
                            ________________________________


   Read the MAILLIST SYSTEM GUIDE documentation manual you just printed and work
   your way through your new system.


                              Exiting your created system
                              ___________________________


   From the Main Menu, Press Q
        This exits your system, quits dBase, and returns to DOS.
        














dPROG dBase Programmers Guide.  Getting Started.                  Page 23










        


                                   Reordering fields
                                   _________________


   You may have noticed that when entering and updating data with your system
   that you had to enter zipcode then state then city.  This order should have
   been city, state, zipcode.  The problem is that you entered the fields in
   zip, state, city order when you created your system.  In this case this is a
   problem, but you might want a special ordering of the data in your system.
   This feature allows you to order the fields in a different way than you have
   them displayed on the screen.  For now though, lets fix the order of the
   city, state, zip fields.


   Restart dPROG
        You can start dPROG from DOS by typing DPSYS, pressing return, and then
        pressing F1. You can also start dPROG by typing 'DPROG' and pressing
        return from the DOS prompt.
        dPROG starts.  Press return (or wait 10 seconds) for the intro screen go
        away.  The screen design screen appears.

   Load your existing system.
        In order to change the system, you will have to reload it.

   Press F10
        The Clear, Dir, ... message appears on the status line.  We want to
        reload an existing system so we will choose Load.

   Press L
        The status line asks for the filename.

   Type A:MAILLIST
        We want to reload the MAILLIST program.  The program loads and the
        screen you built displays.

   Move the cursor to the city field.
        We will look at the fields that are out of order.

   Press F6
        This displays the field attributes.  Notice that the field number for
        city is 7.

   Press PgUp
        This displays the field attributes for State.  Notice that this field
        number is 6.

   Press PgUp
        Zipcode appears.  Notice that the field number is 5.





dPROG dBase Programmers Guide.  Getting Started.                  Page 24










   Think!
        We want city to be field 5, state field 6, and zipcode state 7.  We need
        only change the order of fields 5 and 7.  To reorder a field you need
        only change the field number on the screen being displayed.  The field
        is the moved to that position and all fields with a higher order are
        pushed down 1.  Therefor, to fix this ordering we need change field 5 to
        field 7 and the other fields will be reordered.  We then need to
        exchange fields 5 and 6.  The following example demonstrates this:
        City = 7, State = 6, Zip = 5
        Go to zip and press 7.  Zip becomes 7, city and state move back 1.
        City = 6, State = 5, Zip = 7
        Go to City and press 5.  City becomes 5, and state moves down 1.
        City = 5, State = 6, Zip = 7

   Type 7 for the field number
        The fields reorder.  City is now 6, state 5, and zipcode 7.

   Move to City and press 5.  City is now 5, State 6, and Zipcode 7.

   



































dPROG dBase Programmers Guide.  Getting Started.                  Page 25










   


                        Adding new fields to an existing system
                        _______________________________________


   You will add 3 new fields to demonstrate numeric data entry and calculations.


   Position the cursor to under the CITY field
        We are about to add 3 new fields.

   Press F5 8 times
        A new field of length 8 is created.  You have just added a new field to
        the existing system.

   Move right one space
        We will add another field.

   Press F5 8 times
        You have created another field.

   Move right one space and press F5 8 times
        Your third new field.

   Move the cursor to the first of the three new fields
        You will now change the field descriptions of the fields you created.

   Press F6
        The field description screen shows.  You will make this field the amount
        of money sent from the customer.

   Change the Field Name to SENT, the type to N (numeric), decimal positions to
   2, description to Amount Sent, picture to 99999.99 and the initial value to
   0.

   Press PgDn
        You move to the second new field.  This field will contain the dollar
        amount received for their order.

   Change the Field Name to ORDERED, the type to N (numeric), decimal positions
   to 2, description to Amount Ordered, picture to 99999.99 and the initial
   value to 0.












dPROG dBase Programmers Guide.  Getting Started.                  Page 26










   Press PgDn
        You move to the third new field.  This will be the difference between
        the amount sent and the amount ordered.

   Change the Field Name to Diff, the File/Display/Calc field to C (to define a
   calculation field that is not on the database), the type to N (numeric),
   decimal positions to 2, description to Difference, picture to 99999.99, and
   the calculation field to SENT-ORDERED.  This causes this field to be
   calculated from the Sent and ordered fields.

   












































dPROG dBase Programmers Guide.  Getting Started.                  Page 27










   


                                Deleting existing fields
                                ________________________


   Next we will change the NAME field to 3 fields, first name, middle initial,
   and last name.


   Move the cursor to column 59
        You are going to set the lock column to allow you to modify the fields
        without having to redraw the box.

   Press F2
        The lock column changes to column 59.  Notice the change on the status
        line (L:59).

   Move the cursor to the NAME field
        This is field 2, length 30.  See the F:2 L:30 on the status line.

   Press Del to shrink the NAME field to 13 positions
        You will change this field to first name.

   Move the cursor to column 44
        You are about to add a middle initial field.

   Press F5
        You have added the middle initial field.

   Move over one column
        You are about to add the last name field.

   Press F5 13 times
        This is the last name field.

   Position the cursor on the first name field
        You need to change the field names for the new fields and move the
        middle initial and last name fields to positions following the first
        name fields.

   Press F6
        The field description screen appears.

   Change the field name to Fname

   Press Esc
        Your design screen returns.

   Move the cursor to the middle initial block.

   Press F6
        The field description screen appears.


dPROG dBase Programmers Guide.  Getting Started.                  Page 28










   Change the field name to MI

   Next, change the field number to 3
        This causes the field MI to be after the Fname field.

   Press Esc
        Your design screen returns.

   Move the cursor to the last name field.

   Press F6
        The field description screen appears.

   Change the field name to Lname.

   Next, change the field number to 4
        This causes the field Lname to be after the MI field.
        





































dPROG dBase Programmers Guide.  Getting Started.                  Page 29










        
        


                                Indexes and your system
                                _______________________


   Your old system was kept in no specific order.  We will make the new system
   keep the data in order by last name, first name and middle initial.


   Position the cursor to the Fname field
        Make this the second part of the key (the first part is Lname.)

   Press F6 and move the cursor to the File/Display/Calc field.
        Change the File/Display/Calc field to 1 to specify the second part of
        the key.  Keys are numbered from 0 through 9.  The first part of a key
        is 0, the last part is 9.

   Change File/Display/Calc to 1

   Press PgDn
        The MI field displays.  We will make this the third part of the key.
        Again, the third part of a key is part 2.

   Change File/Display/Calc to 2

   Press PgDn
        The Lname field displays.  We will make this the first part of the key.
        The primary part of the key is 0.

   Change File/Display/Calc to 2
        This changes the last of the key parts.
   





















dPROG dBase Programmers Guide.  Getting Started.                  Page 30










   


                                 Rebuilding your system
                                 ______________________


   Now that you are done modifying your system, you need to save it to disk.


   Press F10
        A message "Clear dOs Dir Load Parms Save Quit" appears on the status
        line. dPROG waits for your reply.

   Press S
        A message appears on the status line saying 'A:MAILLIST'.

   Press return
        A screen file (MAILLIST.SCR), field description file (MAILLIST.FLD),
        binary image file (MAILLIST.BIN), and system parameter file
        (MAILLIST.SPM) are created.  The status line blinks 'SAVING'.  If there
        are any problems, a message will appear on the status line.  You have
        now saved your modified system description.


                                     Exiting dPROG
                                     _____________


   Now that you are done, you will exit back to either the dPSYS menu or DOS
   (whichever you started from).


   Press F10
        A message CLEAR,DIR,LOAD,PARMS,SAVE,QUIT appears on the status line.
        dPROG waits for your reply.

   Press Q
        This causes you to quit dPROG and exit to DOS.  If you had made any
        changes to the screen or parameters without saving, you would have been
        asked if you are sure that you wish to quit.


                                 Rebuilding the system
                                 _____________________


   You will need to rebuild the programs and databases needed for the system you
   have changed.









dPROG dBase Programmers Guide.  Getting Started.                  Page 31










   Type DPCOMP and press return
        This starts the system compiler.  A screen displays showing two
        questions, with defaults.
        The first field is 'SYSTEM'.  This is the name of the system you wish to
        generate.  The default is the last system you worked on with dPROG.
        The second question is 'REPLACE DATABASE?  (If one exists)'.  The
        default is 'N'.  Since we have changed the number and size of fields and
        added indexes, you will need to change this field to Y.
        Below the questions is the line 'PRESS F1 TO CREATE SYSTEM, F10 TO
        EXIT'.  If you press F1 the system will be generated.  If you press F10
        you will exit to DOS with nothing done.

   Change the Replace Database field to Y.

   Press F1
        A list of programs and databases display as they are created.  When
        DPCOMP is done, you are returned to DOS.


                                Documenting your system
                                _______________________


   Now that you have modified your system, you will need a new users manual for
   the end user (or yourself) on how to use your new system.  You will now print
   a new users guide.

   Type DPDOC and press return
        A screen appears which asks three questions.  You have to specify the
        system to be documented, the input doc file, and the output device.
        Notice that all three questions are filled in.
        The default system is the last system you worked on.
        The default doc file is 'UGUIDE.DAT'.
        The default output device is 'LST:'.
        You may change any of these (for example to print to disk change the
        output device to 'A:name'), but for now we will leave these alone.
        Below the questions notice the line 'Press F1 to print, F10 to exit'.
        If you press F1 the printing will start.  If you press F10 you will exit
        without printing.

   Press F1
        The manual starts printing on your printer.
   

   This ends the Getting Started manual.  For more information on how to use
   specific features of dPROG, consult the reference manual.


   Remember that version 1.31 is shareware.  To receive version 2.0 which allows
   64 fields, screen painting and coloring and other features, you need to
   register.  Please fill out the form below and send $39.95.  Thank you.  Site
   licenses are also available.  For information call or write.




dPROG dBase Programmers Guide.  Getting Started.                  Page 32










                           What is University Research?
   
   
   University Research is a small company formed to develop and market dBase
   accessories, produce various newsletters and perform consulting services for
   local companies.
   
   In our products, we develop applications that help computer users at a low
   price.
   
   With our newsletters we try to impart useful and timely information in a
   concise manner.
   
   As consultants we promise to develop applications to your specifications, on
   time and within budget.
             
   






































dPROG dBase Programmers Guide.  Getting Started.                  Page 33










   
   Send to:           University Research, Inc.           Order Form
                   602 South 48th Street Suite 229
                       Philadelphia, Pa. 19143
   
   
   Please send:
                                         Copies   Price    Total
   
   Registration and copy of version 2.0   ___  x $39.95 = _________
   (includes version 2.0 and printed
    manuals)
   
   Shipping and handling                  ___  x  $5.00 = _________      
   
   Pennsylvania residents must add
   $2.40 (6%) State sales tax.            ___  x ______ = _________
   
   
                                             Total Sent   _________
   
   
     Site licenses are available for a flat $500.00 per building,
     please write or call for more information.
   
   
     Name   : _______________________________________________
   
   
     Company: _______________________________________________
   
   
     Address: _______________________________________________
   
   
            : _______________________________________________
   
   
     City   : ____________________ State: ____  Zip: ________
   
   
     Day Phone: _____________________________________________
   
   
     Eve Phone: _____________________________________________
   
   
   
     ORDERS OUTSIDE THE US:  Use a check drawn on a US bank in US
     dollars.  Otherwise add $10.00 for collection.  Please send
     $10.00 for non-US shipping.
   
     C.O.D. orders please call (215) 472-5050.


dPROG dBase Programmers Guide.  Getting Started.                  Page 34










                                    One last thing!
                                    _______________

   
   Even if you don't order a copy of dPROG version 2, we would like to keep in
   touch with you.  Please take a few moments and tell us what we did wrong,
   what you liked, and what you need.  If we use any of your ideas, we'll send
   you a free copy of our next product, and in any case we'll put you on our
   mailing list and keep you informed about what we do.  Without your input, we
   don't know where we stand.
   
   Send to:           University Research, Inc.           Order Form
                   602 South 48th Street Suite 229
                       Philadelphia, Pa. 19143
   
   
   
     Name   : _______________________________________________
   
   
     Company: _______________________________________________
   
   
     Address: _______________________________________________
   
   
            : _______________________________________________
   
   
     City   : ____________________ State: ____  Zip: ________
   
   
     Day Phone: _____________________________________________
   
   
     Eve Phone: _____________________________________________
   
   
     Have you ever done consulting, contract programming, written an application
   and sent it to a BBS, or in any way tried to make money with your computer?
   
                      [ ] YES  [ ] NO
   













dPROG dBase Programmers Guide.  Getting Started.                  Page 35










   What I liked about dPROG!
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   
   What I didn't like about dPROG!!!
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   
   What I would like to see developed.
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   _____________________________________________________________________________
   
   If you need more space, use the reverse side of this paper or continue on
   other paper.  Thank you for your input.
   


dPROG dBase Programmers Guide.  Getting Started.                  Page 36










   

                                       INDEX
                                       INDEX

                                         
   !!........................................................19
   %%FIND....................................................19
   .BIN......................................................20
   .SCR......................................................20
   .SPM......................................................20
   .SPR......................................................20
   Calculation...............................................17
   Centering lines...........................................17
   Character.................................................17
   Clear......................................................8
   Compiler..................................................21
   Copyright date.............................................9
   Copyright holder...........................................9
   Ctrl C....................................................17
   Ctrl PgDn.................................................16
   Ctrl PgUp.................................................16
   Ctrl R....................................................17
   Ctrl right arrow..........................................15
   Date......................................................17
   Decimal positions.........................................17
   Default doc file..........................................22
   Default output device.....................................22
   Default system............................................22
   Define Field's Data.......................................18
   Define File's Information..................................9
   Del.......................................................13
   Delete....................................................13
   Description field.........................................18
   Design screen..............................................6
   Designing a screen.........................................6
   Dir........................................................8
   DOs........................................................8
   DPCOMP....................................................21
   DPDOC.....................................................22
   DPROG......................................................6
   DPROG introduction.........................................6
   DPSYS......................................................5
   Edit......................................................19
   Error messages.............................................6
   Esc........................................................7
   Exit......................................................20
   F1.........................................5, 14, 15, 21, 23
   F1 = HELP..................................................6
   F1 twice..................................................15
   F10..........................................5, 8, 9, 19, 20
   F2.....................................................5, 21
   F3.................................................5, 14, 22
   F4.....................................................5, 14
   F5.........................................................5

dPROG dBase Programmers Guide.  Getting Started.                  Page 37










                                   INDEX (cont)
                                   INDEX (cont)
   
   F6........................................................18
   Field block...............................................11
   FIELD NUMBER..............................................18
   Field size................................................12
   File/Display/Calc.........................................30
   Files......................................................9
   FLD.......................................................20
   Function keys..............................................7
   Function keys F1-F5 and F10................................5
   Help screen................................................7
   Home..................................................14, 15
   Index Name................................................10
   Indexes....................................................9
   Initialization data.......................................17
   Input doc file............................................22
   Ins.......................................................13
   Insert....................................................13
   L:nn......................................................12
   Load.......................................................8
   Lock column............................................6, 13
   Logical...................................................17
   Low and high ranges.......................................17
   LST.......................................................22
   Numeric...................................................17
   Order.....................................................24
   Painting...................................................6
   Parms......................................................8
   PgDn......................................................18
   Pictures..................................................19
   Programmer's name..........................................9
   Q.........................................................20
   Quit.......................................................8
   Reference manual..........................................32
   Registration..............................................34
   Repeat characters.........................................15
   REPLACE DATABASE?.........................................21
   Ruler.....................................................17
   SAME AS...................................................18
   Save.......................................................8
   SAVING....................................................20
   Screen constant...........................................12
   Screen constants..........................................11
   Screen literal............................................11
   Special character set..................................7, 15
   STATE database............................................19
   Status line............................................6, 11
   SYSTEM....................................................21
   System description.........................................9
   System information screen..................................8
   Systems parameters.........................................8
   Type of data..............................................17


dPROG dBase Programmers Guide.  Getting Started.                  Page 38










                                   INDEX (cont)
                                   INDEX (cont)
   
   UGUIDE.DAT................................................22
   University Research.......................................33
   Users manual..............................................22
   Variable data.............................................11
   
















































dPROG dBase Programmers Guide.  Getting Started.                  Page 39




```
{% endraw %}

## FILE2036.TXT

{% raw %}
```
Disk No: 2036                                                           
Disk Title: dProg                                                       
PC-SIG Version: S1                                                      
                                                                        
Program Title: dProg                                                    
Author Version: 1.31                                                    
Author Registration: $39.95                                             
Special Requirements: Hard drive, dBase III or Clipper.                 
                                                                        
dProg is a dBase III programming tool.  It creates programs and writes  
users manuals from your screen designs.  It is a "must have" program for
anyone who uses (or wants to use) dBase III or CLIPPER.  dProg consists 
of three programs controlled by a main menu.  'DPROG' is a screen       
designer and is the heart of the system.  Using DPROG you simply draw   
the screen exactly how you want it, identify the fields (also very      
simple), and everything else is automatic.  'DPCOMP' takes the screen   
layout you have created and produces all of the needed dBase III files  
(.PRG, .DBF, etc.). Then 'DPDOC' prints out a 30 page step-by-step guide
on how to use your new database system.  dProg is extremely easy to use 
and requires very little knowledge of dBase to run, yet it produces very
impressive results. The documentation provided is also excellent,       
showing how to use each of dProg's functions step-by-step.              
                                                                        
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FREEDB4.TXT

{% raw %}
```
Would you like a free dBase III/IV reference card?  We want to add you to our
mailing list and tell you about other dBase products.  In exchange for your
filling out the form below, we will send you a free dBase III/IV reference card
and information on our other products.  Fill out the form below and send to us.
If you have any friends who might like a reference card, give them a copy of 
this form too.

Thank you.

   Send to:           University Research, Inc.           
                   Free dBase Reference Card Offer
                        602 South 48th Street 
                       Philadelphia, Pa. 19143
                           Version 1.31


     Name   : _______________________________________________


     Company: _______________________________________________


     Address: _______________________________________________


            : _______________________________________________


     City   : ____________________ State: ____  Zip: ________


     Day Phone: _____________________________________________


     Eve Phone: _____________________________________________


     Have you ever done consulting, contract programming, written an application
   and sent it to a BBS, or in any way tried to make money with your computer?

                      [ ] YES  [ ] NO

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2036

     Volume in drive A has no label
     Directory of A:\

    DP131    ARC    192817   3-22-89   8:44p
    EXTRACT  BAT      1079   3-22-89   8:44p
    FILE2036 TXT      2147   1-15-90   6:27p
    FREEDB4  TXT      1357   3-22-89   8:44p
    GO       BAT        38   1-01-80   1:37a
    GO       TXT       540   1-16-90  12:09p
    PKXARC   COM     12242   4-27-87
    READ     ME        675   3-22-89   8:44p
    UPGRADES          6545   3-22-89   8:44p
            9 file(s)     217440 bytes
                           99328 bytes free
