---
layout: page
title: "PC-SIG Diskette Library (Disk #215)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0215/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0215"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DATA BASE OF STEEL 2 OF 4 (214,267,268)"

    This is the first volume of Potomac Engineering's database, spreadsheet
    and expert system offerings, all grouped under the title "... of
    Steel".  The first two disks contain the Database Management System
    which includes Accounting, Payroll, Inventory, and A/R Applications
    Programmable, Relational.  The documentation for the whole system is on
    Disk No 215.
    
    The Spreadsheet (No 267) includes 21 ways to calculate numbers or write
    your own subroutine.  It is written in BASIC for easy modification, and
    a compiled version is available.
    
    The Expert System (No 268) provides for inference engines, designing
    your own expert systems, and intelligent search patterns.  The entire
    system is menu driven, so all the options are displayed on the screen.
    
    Features:
    
    ~ Written in BASIC for easy modification
    ~ Compiled version provided (192k)
    ~ Sample checkbook application
    ~ Automatic recalculation
    ~ Bar charts
    ~ Full cursor control
    ~ Report generator
    ~ Customizable screens
    ~ ASCII output
    ~ Tax tables
    ~ Create subfiles
    ~ Sort on 3 fields
    ~ 3 files open simultaneously
    ~ Global field changes
    ~ Transfer data between files
    ~ Inference engine
    ~ Design expert systems
    ~ Assigns probability with rules
    ~ Intellignet search pattern with manual override
    ~ Detects contradictory evidence
    ~ Explanation of reasoning
    
    System Requirements:  Two disk drives (Hard disk recommended)
    
    How to Start: Consult the README file for documentation and
    directions. To run the BASIC programs follow the GETTING STARTED
    instructions for your configuration.
    
    Suggested Registration:  $20.00
    
    File Descriptions:
    
    The First Disk Contains:
    -------- ---  Database of Steel - Source Code
    SCAN     BAS  Database extract and select program
    MAIN     BAS  Main database program
    CHANGE   BAS  Global database change and replacement
    FORM     BAS  Report format program
    TRANSFER BAS  Transfer data from one file to another
    CFILE    BAS  Creates (defines) database file
    SORT     BAS  Sorts database
    CTRANSFE BAS  Customizes transfers between files
    CINPUT   BAS  Sets up new data entry for the file
    CLIMITS  BAS  Sets range limts for numeric fields
    CFORM    BAS  Creates print forms
    TESTASCI BAS  Reads file created from above and display it
    ASCII    BAS  Convert from random access format to ASCII
    CSCREEN  BAS  Sets up screen display for record
    CREAL    BAS  Realtime transfers between files
    READ     ME   Descriptions of files on disk
    
    The Second Disk Contains:
    READ     ME   Descriptions of files on disk
    -------- ---  Database of Steel - sample programs and files, doc
    MASTER   TXT  Manual (WordStar format - 153K)
    REMARKS4 BAS  Program remarks
    REMARKS3 BAS  Program remarks
    REMARKS2 BAS  Program remarks
    REMARKS1 BAS  Program remarks
    PRINTMAN BAS  Procedure to print the manual
    ???      OBJ  Part of Database of Steel
    ???      BAS  Part of Database of Steel
    ???           Various data files for Database of Steel
    
    The Third Disk Contains:
    -------- ---  Spreadsheet of Steel and Compiled Database Program
    READ     ME   Description of files on this disk
    REMARKST BAS  Sort remarks
    MAIN     EXE  Compiled database program
    CHECK         Sample spreadsheet
    TAX           Sample spreadsheet
    SORTINT  BAS  Sort source for database
    SORT     BAS  Sort source for database
    SS       EXE  Compiled spreadsheet
    SSREMARK BAS  Spreadsheet remarks
    SS       BAS  Spreadsheet source
    SORTSTR  BAS  Sort source for database
    
    The Fourth Disk Contains:
    -------- ---  Expert System of Steel
    EXPERT   BAS  Source code for expert system
    EXPERT   EXE  Compiled program for expert system
    REM      BAS  Remarks for source program  (33K)
    READ     ME   Description of files on this disk
    FORM     EXE  Compiled program for database
    SCAN     EXE  Compiled program for database
    TEMP     BAS  Part of expert system disk
    CLS      OBJ  Part of expert system disk
    ???           Sample program for Database of Steel
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## MASTER.TXT

{% raw %}
```
                      TH┼ DATABAS┼ O╞ STEEL
                    THE SPREADSHEET OF STEEL
                   THE EXPERT SYSTEM OF STEEL
       Copyright 1984, by Potomac Pacific Engineering Inc.
       Licensed FREE to all users with some restrictions.

     ReaΣáá anΣáá agreσá t∩á thσá licensσáá conditon≤áá anΣáá ou≥       ì
disclaime≥ oµ warrantie≤ prio≥ t∩ usinτ thi≤ program.

                        TABLE OF CONTENTS
     Introduction                             2
                       OPERATIONS PROGRAMS
     Main Program                             3
     Scan Program                             5
     Change Program                           5
     Sort Program                             6
     Print Form Program                       6  
     Transfer Program                         7
     ASCII Program                            7
     ASCII Test Program                       7
                         CUSTOM PROGRAMS
     CFORM Program                            8
     CFILE Program                            8
     CINPUT Program                           9
     CTRANSFE Program                        12
     CLIMITS Program                         13
     CSCREEN Program                         13
     CREAL Program                           14
                         APPLICATIONS 
     Accounting                              15
     Payroll                                 16
     Inventory                               17
     Account≤ Receivable≤ anΣ Payablσ        17
                          PROGRAM LOGIC             
     Initia∞ Menu≤ fo≥ Custoφ Program≤       18
     Lis⌠ oµ File≤                           19
     Datß Entr•                              19
     Filσ Explanatioε                        20
     Subrecord≤ » Repeatinτ Field≤           21
     Keylis⌠ Explanatioε                     22
     Specification≤                          23 
     Prograφ LengtΦ Limit≤                   24
     Basiπ Languagσ Versioε                  24
     Disclaime≥ oµ Warrantie≤                26 
     Licensσ Informatioε                     27
     Writinτ Program≤ Usinτ thσ Datß Basσ    28
     Systeφ Desigε Note≤                     30
     Inne≥ Working≤ oµ thσ Prograφ           30
     Compilinτ thσ Prograφ ª Erro≥ Trappinτ  35
     Othe≥ Product≤ anΣ Service≤ froφ 
        Potomaπ Pacifiπ Engineerinτ Inπ      36
     Feedbacδ RequesteΣ                      37
     Erro≥ Repor⌠ Forφ                       39
     SPREADSHEE╘ MANUA╠                      41
     EXPERT SYSTEM MANUAL                    48
è
                          INTRODUCTION

     Thσá Datßá Basσ consist≤ oµ fifteeε programs«á  Thσá fifteeε ì
program≤ fal∞ int∩ tw∩ groups«á  Thσ firs⌠ grou≡ oµ program≤á arσ ì
thσ operation≤ programs«  Thesσ program≤ arσ listeΣ below« 

1« MAI╬ PROGRAM
2« FOR═ PROGRAM
3« TRANSFE╥ PROGRAM
4« SCA╬ PROGRAM
5« CHANG┼ PROGRAM
6« SOR╘ PROGRAM
7« ASCI╔ PROGRAM
8« TESTASC╔ PROGRAM

     Thσá seconΣ grou≡ oµ program≤ arσ thσ custoφ programs«á  Thσ   ì
custoφ program≤ arσ useΣ t∩ se⌠ u≡ thσ datß base«  Notσ tha⌠ eacΦ ì
custoφ prograφ ha≤ ß "Có a≤ thσ star⌠ oµ it'≤ name«á  Thσá custoφ ì
program≤ arσ listeΣ below.

9«  CFIL┼ PROGRAM
10« CINPU╘ PROGRAM
11« CSCREE╬ PROGRAM
12« CTRANSFE╥ PROGRAM
13« CFOR═ PROGRAM
14« CLIMIT╙ PROGRAM
15« CREAL

     Mos⌠á user≤á wil∞á bσ usinτ onl•á thσá operation≤á programs«  ì
Therσá i≤ n∩ neeΣ t∩ learε  anythinτ abou⌠ thσ custoφ program≤ t∩ ì
usσ thσ operation≤ programs«á  Thσ custoφ program≤ wil∞á probabl• ì
onl•á bσá useΣá b• thσ persoε wh∩ ha≤ t∩ se⌠ u≡á thσá files¼á thσ ì
forms¼ anΣ thσ transfe≥ descriptions.
    Thosσá oµ yo⌡ wh∩ arσ onl• goinτ t∩ bσ usinτá thσá operation≤ ì
program≤á shoulΣ reaΣ thσ operation≤ par⌠ oµ thi≤ manua∞ whicΦ i≤ ì
onl•á ß fe≈ page≤ long«á  Thosσ oµ yo⌡ wh∩ arσ goinτ t∩ bσá usinτ ì
botΦ thσ operation≤ program≤ anΣ thσ custoφ program≤ shoulΣá reaΣ ì
thσ entirσ manual.
    Thσá easies⌠ wa• t∩ learε ho≈ t∩ usσ thi≤ systeφ i≤ t∩ ge⌠ oε ì
thσá compute≥á anΣ tr• differen⌠ things«á  I⌠á i≤á impossiblσá t∩ ì
damagσá thσá compute≥á b•á runninτ thi≤á o≥á an•á othe≥á softwarσ ì
package«  However¼ makσ surσ yo⌡ arσ usinτ ß samplσ o≥ extrß datß ì
filσá beforσá yo⌡á star⌠á usinτ thσá programs«á  I⌠á i≤á strongl• ì
suggesteΣ tha⌠ yo⌡ makσ ß backu≡ cop• oµ thσ program.
   
                         GETTIN╟ STARTED

    Afte≥ briefl• lookinτ ove≥ thi≤ manua∞ yo⌡ shoulΣ jum≡á righ⌠ ì
iεá anΣ tr• usinτ thσ programs«á  Tr• runninτ thσ prograφ "MAIN"« ì
Yo⌡á havσá t∩ loaΣ thσ operatinτ systeφ (MS-DO╙ o≥á PC-DOS⌐á int∩ ì
memor•á firs⌠á beforσ yo⌡ tr• loadinτ an• programs«á Iµá yo⌡á arσ ì
usinτ thσ basiπ versioε theε yo⌡ als∩ havσ t∩ loaΣ you≥ basiπ in«  ì
Iµá yo⌡á arσá usinτ thσ basiπ versioε reaΣ thσá sectioεá oµá thi≤ ì
manua∞ oε thσ Basiπ Languagσ Versioε beforσ runninτ thσ program.
è
    1« Tr• thσ "MAINó prograφ        
    2« Tr• thσ "FORMó prograφ 
    3« Tr• thσ "SCANó program
 
     Afte≥á yo⌡á tr•á ou⌠ thσ program≤ yo⌡á wil∞á havσá ßá bette≥ ì
understandinτá oµ ho≈ the• work«á  Theε i⌠ wil∞ bσ easie≥ fo≥ yo⌡ ì
t∩ understanΣ thσ manual.
   
                    OPERATON╙ PROGRA═ MANUAL

***********************¬  MAI╬ PROGRA═  *************************

    Yo⌡á wil∞á firs⌠ bσ askeΣ whicΦ filσ yo⌡ wan⌠ t∩á acces≤á anΣ ì
whicΦ disδ drivσ i⌠ i≤ on«á  Al∞ thσ file≤ wil∞ bσ listeΣ b• namσ ì
anΣ number«á  T∩ begiε ente≥ thσ numbe≥ theε pres≤á return«á  Seσ ì
thσ Datß Entr• Sectioε fo≥ morσ information«á Al∞ thσ disδ drive≤ ì
wil∞á bσ listeΣ b• lette≥ anΣ correspondinτ optioεá number«á  Yo⌡ ì
shoulΣá kno≈ o≥ finΣ ou⌠ whicΦ disδ drivσ A¼á disδ drivσ B¼á etc«       

    Afte≥á yo⌡ ente≥ thσ filσ numbe≥ anΣ disδ drivσ yo⌡á wil∞á bσ ì
askeΣá wha⌠ yo⌡ wan⌠ t∩ d∩ witΦ thσ filσ anΣ giveε thσá followinτ ì
option≤ ║                                              
   1« REA─á┴áSPECIFI├áRECOR─                                      
   2« PRIN╘ O╬ PAPE╥ AL╠ O╥ SEVERA╠ SEQUENTIA╠ RECORDS
   3« SCA╬ SEVERA╠ RECORD╙ I╬ ┴ FILE
   4« SEARC╚ ┴ NO╬ SORTE─ FILE
   5« NE╫ ENTRY
   6« SEARC╚ ┴ SORTE─ FILE
   7«áRECALCULAT┼áAL╠áTH┼áRECORD╙áI╬á┴áFIL┼                                             

Somσá oµá thσ option≤ arσ explaineΣ below«á  Thσ other≤ arσá selµ ì
explanatory.

   
                  REA─ ┴ SPECIFI├ RECOR─ OPTION

      Thσ "reaΣ ß specifiπ recordó optioε i≤ selµ explanatory.
 Thi≤ optioε als∩ include≤ :
          1«  Correc⌠ o≥ Changσ ß record
          2«  Prin⌠ ß singlσ recorΣ oε paper
          3«  Sho≈ al∞ thσ relateΣ subrecords
               (iµ thσ filσ i≤ se⌠ u≡ witΦ subrecords)

                        NE╫ ENTR┘ OPTION

     Thσ "ne≈ entr• optionó i≤ useΣ t∩ ente≥ aε entirσ ne≈ recorΣ ì
int∩á ß file«á  Mos⌠ oµ thσ field≤ arσ entereΣ b• yo⌡ o≥á anothe≥ ì
operator«á  Howeve≥á somσá oµá thσ field≤á arσá computeΣá b•á thσ ì
computer«á  Fo≥ examplσ iε ß payrol∞ filσ thσ fielΣ tota∞ pa• ma• ì
bσá computeΣá b• multiplyinτ hour≤ workeΣ (ß differen⌠ field⌐á b• ì
hourl•á pa•á (anothe≥ field)«á  Thσ compute≥á wil∞á automaticall• ì
computσ somσ field≤ anΣ displa• theφ oε thσ screen.
     Iµ yo⌡ arσ enterinτ datß fo≥ ß filσ tha⌠ ha≤ thσá "subrecorΣ ì
repeatinτá fieldsó optioε theε yo⌡ ma• ente≥ ß subrecorΣ b• usinτ ìèthσ "ente≥ ß subrecordó option«á  Thσ compute≥ wil∞ theε asδá yo⌡ ì
t∩á ente≥á thσá repeatinτá field≤ anΣ displa• theφá oεá thσá samσ ì
screen«á  Iµ an• sum≤ arσ specifieΣ fo≥ thσ repeatinτ field≤ theε ì
thσá sum≤ wil∞ appea≥ oε thσ las⌠ line«á  D∩ no⌠ ente≥á an•á morσ ì
subrecord≤á iµ thσ screeε i≤ alread• filleΣ witΦá subrecords«á Iµ ì
thσ screeε i≤ filleΣ witΦ subrecords¼á ente≥ thσ nex⌠ recorΣ theε ì
continuσá witΦ subrecords«á Makσ surσ yo⌡ makσ thσ seconΣ pagσ oµ ì
subrecord≤á differen⌠ froφ thσ firs⌠ page«á Writσ "continuedóá o≥ ì
"seconΣá pagσ oµ twoó iε thσ descriptioε otherwisσá thσá compute≥ ì
wil∞á no⌠á kno≈á wherσá thσá firs⌠á screeεá ends«áá  Thσá prograφ ì
identifie≤á thσ enΣ oµ thσ subrecord≤ b• detectinτ an• changσá iε ì
an• onσ oµ thσ nonrepeatinτ fields.
 
                      SEARC╚ ┴ SORTE─ FILE

     Firs⌠á yo⌡á shoulΣ onl• usσ thi≤ optioε oε ß sorteΣ filσá o≥ ì
thσá searcΦ wil∞ no⌠ finΣ thσ recorΣ yo⌡ arσ lookinτá for«á  Thi≤ ì
optioεá i≤ useΣ t∩ finΣ thσ recorΣ numbe≥ whicΦ ha≤ thσ valuσá iε ì
thσ fielΣ tha⌠ yo⌡ arσ lookinτ for«á  Fo≥ examplσ yo⌡ ma• wan⌠ t∩ ì
searcΦá ßá sorteΣ filσ oµ paycheck≤ fo≥ thσ recorΣ iεá whicΦá thσ ì
employeσ numbe≥ i≤ 15«á  Iµ morσ theε onσ recorΣ ha≤ thσ employeσ ì
numbe≥á equa∞á t∩ 1╡ theε thσ lowes⌠ recorΣ numbe≥ iεá whicΦá thσ ì
recorΣá numbe≥á i≤á 1╡á i≤ returned«á  Agaiεá thσá filσá yo⌡á arσ ì
searchinτá mus⌠ havσ beeε sorteΣ oε thσ fielΣ yo⌡á arσá searchinτ ì
for.

                    SEARC╚ ┴ NONSORTE─ FILE

     Thi≤á optioεá i≤ simila≥ t∩ thσ abovσ option«á  Yo⌡ ma•á usσ ì
thi≤ optioε oε ß nonsorteΣ o≥ sorteΣ file«  Thi≤ searcΦ i≤ onl• ß ì
sequentia∞ scaε oµ thσ filσ t∩ searcΦ fo≥ thσ valuσ yo⌡á specify«  ì
Thσá compute≥ wil∞ asδ yo⌡ whicΦ recorΣ numbe≥ yo⌡ wan⌠ t∩á star⌠ ì
thσ searcΦ at«á  Thσ compute≥ wil∞ theε sho≈ yo⌡ thσ firs⌠ recorΣ ì
tha⌠ contain≤ thσ valuσ yo⌡ arσ searchinτ for«  Iµ yo⌡ theε pres≤ ì
thσá returε ke• fo≥ optioε #▒ (sho≈ thσ nex⌠ record⌐ thσ compute≥ ì
wil∞á sho≈á yo⌡á thσá nex⌠ recorΣ tha⌠á ha≤á thσá valuσá yo⌡á arσ ì
searchinτá for«á  A⌠ thσ enΣ oµ thσ filσ thσ compute≥ wil∞ returε ì
t∩ thσ filσ options«á  Iµ nonσ oµ thσ record≤ iε thσ filσ contaiε ì
thσá valuσ yo⌡ arσ lookinτ for¼á thσ prograφ wil∞ returε t∩á filσ ì
options.

                 RECALCULATE ALL RECORDS OPTION

      Usσ thi≤ optioε onl• iµ yo⌡ kno≈ wha⌠ yo⌡ arσá doing«á Thi≤ ì
option≤á onl• ha≤ t∩ bσ useΣ afte≥ usinτ thσ transfe≥ prograφá o≥ ì
afte≥á usinτ thσ changσ program«á  Thi≤ optioε wil∞ usσ thσ inpu⌠ ì
descriptioεá t∩á recalculatσá al∞ thσ record≤á iεá ßá file«á  Fo≥ ì
example¼á iµá yo⌡á transfe≥á you≥ accountinτá entrie≤á  froφá thσ ì
journa∞ t∩ thσ accoun⌠ summary¼á thσ balancσ fielΣ ma• bσ ou⌠á oµ ì
balance«  Thi≤ optioε wil∞ g∩ througΦ al∞ thσ record≤ iε thσ filσ ì
anΣá recalculatσ thσ balancσ iε eacΦ file«á  Thi≤ optioε wil∞ no⌠ ì
recalculatσ ta° informatioε (inpu⌠ optioε 6⌐ no≥ wil∞ i⌠ ge⌠ datß ì
froφ anothe≥ filσ (inpu⌠ optioε 2)«  

   
è***********************¬  SCA╬ PROGRA═  *************************

     Thσ scaε prograφ scan≤ thσ record≤ lookinτ fo≥ record≤á tha⌠ ì
mee⌠á condition≤ tha⌠ yo⌡ specify«á  Fo≥ examplσ yo⌡ ma• wan⌠á t∩ ì
scaεá you≥ custome≥ record≤ readinτ onl• thσ record≤ iε whicΦ thσ ì
custome≥ ordereΣ ove≥ $1,00░ oµ good≤ iε thσ pas⌠ year«   
     Thσ scaε prograφ als∩ ha≤ thσ option≤ t∩ suφ thσ field≤á anΣ ì
suφ witΦ subtotal≤ b• anothe≥ field.
     
    Thσá compute≥á wil∞á sho≈á yo⌡ eacΦ fielΣ anΣá asδá yo⌡á wha⌠ ì
conditioεá yo⌡á wan⌠á fo≥á thσá field«áá  Thσá option≤á arσá selµ ì
explanator• anΣ arσ listeΣ belo≈ :

 - equal≤ ß certaiε value
     o≥ equal≤ onσ oµ severa∞ multiplσ values
 - greate≥ thaε ß valuσ yo⌡ specif• 
 - les≤ thaε ß valuσ yo⌡ specify
 - betweeε tw∩ value≤ yo⌡ specify
 - an• valuσ i≤ acceptable
 

     Iµá yo⌡á specif•á ßá conditioε fo≥ thσá fielΣá t∩á mee⌠á thσ ì
compute≥ wil∞ theε asδ yo⌡ iµ yo⌡ wan⌠ thσ conditioε t∩ bσ :
      1« Logica∞ AnΣ   
      2« Logica∞ Or
     Fo≥ examplσ yo⌡ ma• wan⌠ t∩ prin⌠ ou⌠ thσ recorΣ oµ al∞ you≥ ì
customer≤á wh∩ havσ ordereΣ ove≥ $1000.0░ wortΦ oµá widget≤á froφ ì
yo⌡ AN─ havσ ordereΣ an• merchandisσ withiε thσ pas⌠ month.
     Oεá thσ othe≥ hand¼á yo⌡ ma• wan⌠ t∩ prin⌠ ou⌠ thσ recorΣ oµ ì
al∞ customer≤ wh∩ havσ ordereΣ ove≥ $1000.0░ wortΦ oµ widget≤á O╥ ì
wh∩á havσ ordereΣ an• merchandisσ withiε thσ pas⌠ month«á Iεá thσ ì
logica∞ AN─ botΦ condition≤ mus⌠ bσ met«á  Iε thσ logica∞ O╥ onl• ì
onσ conditioε ha≤ t∩ bσ mee⌠ fo≥ thσ recorΣ t∩ bσ accepted«á  Thσ ì
res⌠ oµ thσ optioε i≤ selµ explainatory.
   
**********************¬  CHANG┼ PROGRA═  ************************

     Thσá changσ prograφ i≤ simila≥ t∩ thσ "SCANóá program«á  Thσ ì
differencσá i≤ tha⌠ thσ changσ prograφ wil∞ changσ thσ value≤á oµ ì
thσá field≤á tha⌠ yo⌡ specify«á  Yo⌡ wil∞ bσ ablσ t∩ specif•á thσ ì
samσá conditon≤ tha⌠ yo⌡ specif• iε thσ scaε program«á  Yo⌡á wil∞ ì
theε bσ ablσ t∩ changσ eacΦ recorΣ tha⌠ meet≤ thσ condition≤á yo⌡ ì
specify«á  Fo≥ eacΦ fielΣ iε thσ file¼á thσ compute≥ wil∞ asδ yo⌡ ì
wha⌠ typσ oµ changσ yo⌡ wan⌠ b• givinτ yo⌡ thσ followinτ options:
     1« N∩ change.
     2« Se⌠ thσ fielΣ equa∞ t∩ ß constant.
     3« AdΣ ß constan⌠ t∩ olΣ field'≤ valuσ (usσ ß negativσ t∩ 
            subtract).
     4« Multipl• thσ olΣ valuσ b• ß constant.
     5«á AdΣá ßá constan⌠á t∩á ß differen⌠ field≤á valuσá (usσá ß             ì
            negativσ t∩ subtract).
     6« Multipl• ß differen⌠ field≤ valuσ b• ß constant.


     Fo≥ example¼á iµ yo⌡ wanteΣ t∩ raisσ al∞ you≥ price≤ b•á 10Ñ ìèyo⌡ coulΣ usσ optioε #┤ t∩ multipl• thσ pricσ fielΣ b• 1.▒ «á  Iµ ì
yo⌡á wanteΣ t∩ se⌠ al∞ you≥ price≤ t∩ 200Ñ oµ you≥ cos⌠ yo⌡ coulΣ ì
usσá optioε #╢ t∩ multipl• you≥ cos⌠ fielΣ b• ▓ t∩ generatσá you≥ ì
pricσá field«á  Iµá yo⌡á onl• wanteΣ t∩ change≤á you≥á price≤á iε ì
departmen⌠á #5¼á theεá yo⌡ coulΣ specif• tha⌠ yo⌡á onl•á wan⌠á t∩ ì
changσ thσ pricσ iε tha⌠ department.

**¬  ALWAY╙ MAK┼ ┴ BACKU╨ COP┘ BEFOR┼ RUNNIN╟ THI╙ PROGRA═  ***

                        CREATIN╟ SUBFILE╙ 

     Yo⌡á caεá makσá ß cop• oµ thσ changeΣ filσá oεá ßá differen⌠ ì
drive«á  Yo⌡á caεá als∩ makσ ß cop• oµ al∞ thσ record≤ tha⌠á mee⌠ ì
certaiεá conditions«á  Yo⌡á caεá specif•á "N╧á CHANGEóá fo≥á eacΦ ì
variablσá iµá yo⌡ onl• wan⌠ t∩ makσ ß cop• oµ record≤á tha⌠á mee⌠ ì
certaiε conditions« 

                        DELETIN╟ RECORDS

     I⌠ i≤  usuall• no⌠ advisablσ t∩ deletσ record≤ unles≤ i⌠á i≤ ì
absolutel•á necessary«á  I⌠á i≤á possiblσá t∩á overwritσá record≤ ì
insteaΣ oµ deletinτ records«á  Yo⌡ caε deletσ record≤ b• changinτ ì
thσ valuσ oµ onσ fielΣ t∩ it≤ maximuφ anΣ theε usinτ thσ "CHANGEó ì
prograφá t∩á cop• al∞ value≤ les≤ theε thσ maximuφá t∩á ßá seconΣ ì
file«á  Fo≥á examplσ iµ yo⌡ havσ ß custome≥ lis⌠ anΣ yo⌡ wan⌠á t∩ ì
deletσá somσ inactivσ customer≤ yo⌡ coulΣ changσ thei≥ zi≡á code≤ ì
t∩ 9999╣ theε usσ thσ "CHANGEó prograφ t∩ cop• al∞ zi≡ code≤ les≤ ì
thaε 9999╣ t∩ ß seconΣ file«  


***********************¬  SOR╘ PROGRA═  *************************
                                           
     Sortinτá file≤ i≤ aε extremel• valuablσ tool«á File≤ ma•á bσ ì
sorteΣ b• morσ theε onσ variable«á  Fo≥ examplσ t∩ sor⌠ ß filσ b• ì
datσ yo⌡ wil∞ probabl• havσ t∩ sor⌠ thσ filσ b• thσ montΦ theε b• ì
thσ day«  Thσ sor⌠ optioε caε sor⌠ ß file≤ b• u≡ t∩ threσ fields.
Wheεá sortinτ oε ▓ o≥ │ numeriπ fields¼á thσ sor⌠ prograφ ma• no⌠ ì
sor⌠á properl• iµ  thσ value≤ oµ thσ field≤ diffe≥ b• morσ thσá ╡ ì
order≤ oµ magnitude« 
     Thσáá sor⌠á optioεá wil∞á als∩á sor⌠á strinτá variable≤áá iε ì
alphabetica∞á order«á  Fo≥ alphabetica∞ sort≤ ß filσ ma• onl•á bσ ì
sorteΣ b• onσ variable«                                       
     Thσ sor⌠ optioε create≤ ß seconΣ sorteΣ filσ oε thσ ┬ flopp• ì
disδá drive«á  Thσ origina∞ filσ oε thσ firs⌠ flopp• disδ i≤á no⌠ ì
changed« 
     Thσá Sor⌠ optioε ma• takσ ß fe≈ minute≤ wheεá sortinτá file≤ ì
ove≥á 1,00░ records«á Usinτ thσ compileΣ versioε wil∞ reducσá thσ  ì
sortinτá timσá b• 75Ñ t∩ 90%«á  Iµ yo⌡ arσ usinτ ß compute≥á tha⌠ ì
doe≤á no⌠á havσ tw∩ disδ drive≤ yo⌡ canno⌠ usσ thσá sor⌠á prograφ ì
withou⌠ extensivσ modification≤ t∩ thσ sor⌠ program.
        
******************¬  PRIN╘ (form⌐ PROGRA═  ********************
 
     Al∞ yo⌡ havσ t∩ d∩ i≤ chosσ whicΦ forφ t∩ print«  Theε chosσ ì
whicΦá recorΣá t∩á star⌠ printinτ thσ form≤ a⌠á anΣá chosσá whicΦ ìèrecorΣá t∩á sto≡á printinτ thσ form≤ at«á  EacΦ forφá i≤á jus⌠á ß ì
selectivσ printinτ ou⌠ oµ thσ record≤ iε ß file.
     
*********************¬  TRANSFE╥ PROGRA═  ***********************

     Thσ transfe≥ prograφ i≤ useΣ t∩ transfe≥ datß froφ onσá filσ ì
t∩ another.
               
D╧á NO╘á US┼ THI╙ PROGRA═ O╬ YOU╥ FILE╙ UNLES╙ YO╒ KNO╫ WHA╘á YO╒ ì
AR┼ DOING«  
     
     Usinτ thσ transfe≥ prograφ i≤ rathe≥ simple«á  Al∞ yo⌡á havσ ì
t∩á d∩á i≤ ente≥ whicΦ transfe≥ yo⌡ want¼á  thσá startinτá recorΣ ì
numbe≥ t∩ transfe≥ anΣ thσ las⌠ recorΣ numbe≥ t∩ transfer.

***********************¬  ASCI╔ PROGRA═  ************************

     Thσá "ASCIIó prograφ i≤ useΣ t∩ conver⌠ thσ datß file≤á tha⌠ ì
yo⌡á ente≥á froφá thσ basiπ randoφ acces≤ forφ t∩á aεá sequentia∞ ì
ASCI╔á form«á  Iεá thσ basiπ randoφ acces≤ filσ thσá number≤á arσ ì
storeΣá iεá ß condenseΣ binar• forφ whicΦ save≤ spacσ bu⌠ i≤á no⌠ ì
readablσá b•á othe≥á programs«á  Thi≤ prograφá wil∞á conver⌠á thσ ì
record≤á yo⌡á specif• int∩  sequentia∞ forφá witΦá thσá followinτ ì
forma⌠ :
  "Johε Doσ ",23┤ ¼ 12│ ¼ 3.4╡ <LF,CR>
Al∞á string≤á wil∞ bσ surroundeΣ b• quotes«á  Coma≤á  arσá placeΣ ì
betweeε fields«  A⌠ thσ enΣ oµ eacΦ recorΣ therσ wil∞ bσ thσ linσ ì
feeΣá anΣ carriagσ returε ASCI╔ code«á  Thσ targe⌠ filσ wil∞ havσ ì
thσ namσ "ASCIDATA"«  
     Thσá compute≥ wil∞ asδ yo⌡ whicΦ recorΣ numbe≥ yo⌡á wan⌠á t∩ ì
star⌠á convertinτ datß at«á  Nex⌠ thσ compute≥ wil∞ asδ yo⌡ whicΦ ì
recorΣá numbe≥á yo⌡ wan⌠ t∩ enΣ convertinτá datßá at«á  Nex⌠á thσ ì
compute≥á wil∞á conver⌠á thesσ record≤ t∩ thσá ASCI╔á form«á  Thσ ì
compute≥ wil∞ theε agaiε asδ yo⌡ whicΦ recorΣ numbe≥ yo⌡ wan⌠á t∩  ì
star⌠á convertinτá datßá at«áá  Ente≥á zer∩á wheεá yo⌡á arσá donσ ì
convertinτá data«á  Fo≥á examplσá yo⌡ ma• onl•á wan⌠á t∩á conver⌠  ì
recorΣá number≤ 1░ througΦ 2░ anΣ 3░ througΦ 5░ t∩ usσ iε ßá worΣ ì
processinτ program«  
 
     Yo⌡á ma•á wan⌠ t∩ usσ thi≤ prograφ t∩ usσ somσ record≤ oεá ß ì
worΣá processor«á  Yo⌡ caε mergσ thσ "ASCIDATAó filσ witΦ onσá oµ ì
you≥á tex⌠á file≤á iµá thi≤ optioεá i≤á availablσá oεá you≥á worΣ ì
processor«á  Man•á othe≥ commercia∞ program≤ sucΦ a≤ Mailsta≥ usσ ì
datß iε thσ sequentia∞ ASCI╔ form«     


                        TESTASC╔ PROGRA═ 

     Thσ TESTASC╔ prograφ i≤ ß ver• shor⌠ program«á  Al∞ i⌠á doe≤ ì
i≤á reaΣá thσ "ASCIDATAó datß filσ tha⌠ wa≤ createΣ b• thσá abovσ ì
prograφ anΣ show≤ thσ filσ oε  thσ screen«á  Yo⌡ shoulΣ usσá thi≤ ì
prograφá t∩á makσ surσ yo⌡ converteΣ thσ correc⌠ record≤á iεá thσ ì
abovσ program.


è                         CUSTO═ PROGRAMS

     Thσá "Custoφ Program≤ arσ useΣ t∩ customizσ thσá files¼á thσ ì
forms¼á thσ transfe≥ options¼á thσ screens¼ se⌠ thσ limits« Thesσ ì
program≤á shoulΣ onl• bσ useΣ b• person≤ authorizeΣ t∩ se⌠ anΣ o≥ ì
changσá an• oµ thσ filσ descriptions¼á form≤ o≥ transfe≥á option≤ ì
etc«á  Obviousl• thσ peoplσ wh∩ d∩ no⌠ usσ thesσ program≤ d∩á no⌠ ì
havσá t∩á learε ho≈ t∩ usσ them«á  Thi≤ cut≤ dowε greatl• oεá thσ ì
timσ i⌠ take≤ t∩ traiε personnel.
    
***********************¬  CFOR═ PROGRA═  ************************
  
     Thσá forφá definitioεá program≤ arσ useΣá t∩á ente≥á ßá forφ ì
description«á  Thσá forφá definitioε prograφ i≤ divideΣ int∩á tw∩ ì
majo≥ part≤ ║ 
           1« Ente≥ ß ne≈ form
           2« ReaΣ ß forφ description
                witΦ - corrections/changσ description
                     - prin⌠ forφ descriptioε oε paper
     Beforσ enterinτ ß ne≈ forφ yo⌡ shoulΣ figurσ ou⌠ thσá layou⌠ ì
oµá you≥ form«á  Decidσ ho≈ man• line≤ yo⌡ neeΣ fo≥ thσ forφá anΣ ì
ho≈ man• column≤ ove≥ thσ differen⌠ entrie≤ oε eacΦ linσ wil∞ be.
  
     Aε entr• oε ß forφ ma• bσ eithe≥ :
           1« ┴ strinτ o≥ numeriπ constant
           2« CopieΣ froφ thσ file
           3« Thσ valuσ correspondinτ t∩ ß key
           4« Blank
     EacΦ forφ correspond≤ t∩ onσ recorΣ iε ß file«   
    
***********************¬  CFIL┼ PROGRA═  ************************

     Thσá filσ definitioε program≤ arσ useΣ t∩ ente≥ anΣ reaΣ thσ ì
filσ descriptions«  Thσ option≤ oε thσ initia∞ men⌡ arσ :
         1« Ente≥ ß filσ description
         2« ReaΣ ß singlσ filσ description
         3« ReaΣ al∞ thσ filσ descriptions
         4« Prin⌠ oε pape≥ onσ filσ description
         5« Prin⌠ oε pape≥ al∞ thσ filσ descriptions

     T∩ ente≥ ß filσ descriptioε thσ compute≥ wil∞ asδ yo⌡ fo≥ 
         1«á Thσá filσ namσ - Mus⌠ bσ ╕ character≤á o≥á less¼á n∩                                ì
                              spaces«  Thσ firs⌠ ácharacte≥  mus⌠                                ì
                              bσ ß letter«  Thσ compute≥ will
                              no⌠ accep⌠ aε invaliΣ filσ namσ 
                              i⌠á wil∞á asδá fo≥á anothe≥á name«       
         2«  Thσ numbe≥ oµ field≤ iε eacΦ recorΣ - ▒ t∩ 28
         3«  Fo≥ eacΦ fielΣ thσ compute≥ wil∞ asδ yo⌡ :
              A« I≤ thσ fielΣ ß numbe≥ o≥ string?
                 Iµá yo⌡á answe≥ ß numbe≥ thσ compute≥ wil∞á theε                  ì
áááááááááááááááááasδ yo⌡ iµ thσ numbe≥ i≤ :
                  a⌐ aε intege≥ - ma• bσ declareΣ ß ke• t∩ ß list
                  b⌐ singlσ precisioε - ╢ digit≤ accuracy
                  c⌐ doublσ precisioε - 1╢  digit≤ accurac• 
                  d⌐ dolla≥ anΣ cent≤ amount
è                 Iµá yo⌡ answe≥ ß strinτ theε thσá compute≥á wil∞                  ì
                 asδ  yo⌡  wha⌠  i≤ thσ maximuφ  lengtΦ  oµ  thσ    
                 string

      Wheε yo⌡ ente≥ ß ne≈ filσ thσ prograφ automaticall• ║      
 1« Set≤ thσ inpu⌠ optioε fo≥ eacΦ filσ t∩ ▒ fo≥ operato≥ 
     entr• anΣ set≤ thσ promp⌠ t∩ thσ nul∞ string.
 2« Set≤ thσ limit≤ flaτ t∩ "n∩ limits".
 3« Set≤ thσ thσ screeε flaτ t∩ "n∩ custoφ screen".
 4« Set≤ thσ realtimσ flaτ t∩ "n∩ realtimσ transfer".

     Oncσ yo⌡ se⌠ u≡ ß filσ usinτ thσ CFIL┼ prograφ yo⌡ ma• star⌠ ì
usinτá thσ file«á  Usinτ thσ CSCREEN¼á CLIMITS¼á CINPU╘ anΣ CREA╠ ì
program≤ i≤ optional« 
     D∩á no⌠ changσ o≥ overwritσ thσ KEYLIS╘ o≥ thσá TAXSC╚á filσ ì
unles≤ yo⌡ kno≈ wha⌠ yo⌡ arσ doing.

**********************¬  CINPU╘ PROGRAM╙  ***********************

     Thσá inpu⌠ descriptioε program≤ arσ useΣ t∩ se⌠ u≡ thσá  ne≈ ì
datßá entr• iε thσ maiε program«á  Fo≥ example¼á yo⌡ ma• wan⌠á t∩ ì
declarσá tha⌠á onσá fielΣ i≤ equa∞ t∩ thσ produc⌠á oµá tw∩á othe≥ ì
fields«  Thσ threσ option≤ oε thσ initia∞ men⌡ arσ :
        1« Ente≥ ß ne≈ inpu⌠ description.
        2« ReaΣ ß inpu⌠ description.
        3« Prin⌠ oε pape≥ ß inpu⌠ description.

     T∩á ente≥ ß ne≈ inpu⌠ descriptioε thσ compute≥ wil∞ asδá yo⌡ ì
whicΦá filσá yo⌡á wan⌠ t∩ customize«á  Theε fo≥ eacΦ fielΣá iεá ß ì
recorΣá oµ thσ filσ thσ compute≥ wil∞ asδ yo⌡ wha⌠ typσ oµá inpu⌠ ì
yo⌡ wan⌠ fo≥ thσ fielΣ anΣ wil∞ givσ yo⌡ thσ followinτ options.
         
                        1« OPERATO╥ ENTRY

     Thσ compute≥ operato≥ wil∞ ente≥ thσ numbe≥ o≥ strinτ a⌠ thσ ì
keyboard«á  Yo⌡ wil∞ bσ askeΣ t∩ givσ ß prompt«á  Thσ promp⌠ wil∞ ì
bσ displayeΣ durinτ thσ maiε prograφ wheε thσ inpu⌠ i≤á required«  ì
Thσá fielΣ namσ i≤ als∩ displayeΣ  wheε thσ inpu⌠ i≤ requireΣ  s∩ ì
yo⌡á d∩ no⌠ havσ t∩ duplicatσ thσ fielΣ namσ iε thσá prompt«á Fo≥ ì
examplσá iµá yo⌡ havσ ß fielΣ witΦ ß namσ "Worδ Centeróá yo⌡á ma• ì
wan⌠ t∩ havσ ß promp⌠ witΦ somethinτ likσ :
"▒ - sale≤ 2-accountinτ 3-shippinτ 4-officσ 5-lega∞ 6-R&─ "
s∩ tha⌠ thσ operato≥ wil∞ no⌠ becomσ confused.

                   2« GE╘ FRO═ ANOTHE╥ FILE

     Thσá valuσ oµ thσ fielΣ wil∞ bσ obtaineΣ froφ anothe≥á file«  ì
Thσá compute≥á wil∞ asδ yo⌡ froφ whicΦ filσ yo⌡ wan⌠ t∩á ge⌠á thσ ì
data«á  YO╒á MA┘ ONL┘ GE╘ DAT┴ FRO═ ON┼ FIL┼ «á  Yo⌡ ma• no⌠á ge⌠ ì
datßá froφ thσ payrol∞ filσ fo≥ fielΣ ▒ anΣ theε tr• t∩ ge⌠á datß ì
froφá thσ inventor• filσ fo≥ fielΣ 2«á  B• efficientl•á designinτ ì
you≥ file≤ s∩ tha⌠ onσ filσ caε obtaiε al∞ thσ datß i⌠ need≤ froφ ì
ON┼á othe≥á filσ yo⌡ wil∞ greatl• simplif• you≥á datßá managemen⌠ ì
task« (Iµ yo⌡ mus⌠ ge⌠ datß froφ morσ theε onσ filσ yo⌡ caε writσ ì
you≥ owε custoφ inpu⌠ subroutine.)
è     Thσ compute≥ wil∞ asδ yo⌡ 
          a⌐ froφ whicΦ filσ yo⌡ wan⌠ thσ data« 
          b⌐ froφ whicΦ fielΣ yo⌡ wan⌠ thσ data« 
          c⌐ whicΦ fielΣ oµ curren⌠ entr• i≤ equa∞ t∩ thσá recorΣ ì
numbe≥ froφ whicΦ yo⌡ wan⌠ thσ data«á  Fo≥ example¼ iε enterinτ ß ì
recorΣá iεá thσá paychecδá filσ thσ firs⌠á entr•á shoulΣá bσá thσ ì
employeσ number«  Theε thσ employeσ numbe≥ shoulΣ bσ equa∞ t∩ thσ ì
recorΣá numbe≥ iε thσ employeσ filσ wherσ yo⌡ wan⌠ t∩ obtaiε somσ ì
morσ datß froφ (likσ hi≤ pa• ratσ anΣ deductions).

                3« AD─ SEVERA╠ PREVIOU╙ FIELDS
                4« SUBTRAC╘ TW╧ PREVIOU╙ FIELDS
                5« MULTIPL┘ TW╧ PREVIOU╙ FIELDS
               13« DIVID┼ TW╧ PREVIOU╙ FIELDS

     Yo⌡ ma• onl• perforφ thesσ operation≤ oε lowe≥ numbe≥ field≤ ì
iε thσ samσ recorΣ numbe≥ tha⌠ havσ alread• beeεá computed«á  Thσ ì
compute≥á wil∞á no⌠á le⌠ yo⌡ perforφ an• oµ thesσá operation≤á oε ì
string≤ (Yo⌡ canno⌠ adΣ letters).


                8« MAXIMU═ O╞ PREVIOU╙ FIELDS
                9« MINIMU═ O╞ PREVIOU╙ FIELDS

      Yo⌡á ma•á onl•á perforφ thesσ operation≤á oεá lowe≥á numbe≥ ì
field≤á iε thσ samσ recorΣ numbe≥ tha⌠ havσ alread• beeεá entereΣ ì
o≥á computed«á  Yo⌡á ma• comparσ ▓ t∩ ╡á differen⌠á fields«á  Thσ ì
compute≥ wil∞ asδ yo⌡ whicΦ field≤ yo⌡ wan⌠ t∩ compare.

                           7.CONSTANT

     Thσá fielΣá i≤ alway≤ equa∞ t∩ thσ samσá number«á  Yo⌡á wil∞ ì
probabl•á   onl•á neeΣ t∩ usσ ß constan⌠ wheε late≥ usinτ onσá oµ ì
thσ arithmetiπ type≤ oµ input«á  Fo≥ examplσ whilσ computinτ you≥ ì
taxe≤á yo⌡ ma• wan⌠ thσ compute≥ t∩ automaticall•á multipl•á you≥ ì
ne⌠á incomσá b• .09│ t∩ pa• you≥ selµá employmen⌠á   taxes«á  Yo⌡ ì
coulΣáá firs⌠á ente≥á thσá constan⌠á .09│á int∩á ßá fielΣá beforσ ì
multiplying.

                10.MULTIPL┘ B┘ ┴ CONSTANT
                11.AD─ ┴ CONSTANT
                12.SUBTRAC╘á┴ CONSTAN╘ FRO═ ┴ PREVIOU╙ FIELD

     Thesσ option≤ asδ yo⌡ t∩ ente≥ ß constan⌠ whicΦ wil∞ bσ useΣ ì
t∩ perforφ onσ oµ thσ abovσ operations«á  Fo≥ example¼ iε thσ ta° ì
listeΣá abovσá yo⌡ coulΣ jus⌠ usσ thσ optioε #1░ "multipl•á b•á ß ì
constantóá rathe≥á theε lettinτ thσ constan⌠ takσ u≡ ßá fielΣá iε ì
you≥ file.
                   
                   6.COMPUT┼ USIN╟ TA╪ TABLES

      Thi≤á optioεá allow≤ yo⌡ t∩ computσ mos⌠á taxes«á  Thσá ta° ì
table≤á arσá containeΣá iε thσ filσá "TAXSCHóá anΣá contain≤á thσ ì
followinτ fields║  

è      1⌐ DESCRIPTIO╬  - Doe≤ no⌠ affec⌠ an• oµ thσ calculations
i⌠ i≤ jus⌠ useΣ t∩ kee≡ it≤ descriptioε t∩ enablσ yo⌡ t∩ remembe≥ ì
whicΦ ta° tablσ i⌠ i≤ par⌠ of.

      2)FE─ O╥ STAT┼ NUMBE╥ - Yo⌡ ma• wan⌠ t∩ kee≡ thσ ta° table≤ 
fo≥ thσ Federa∞ Ta° anΣ onσ o≥ morσ states«á  Le⌠ thσ Federa∞ ta° ì
havσ numbe≥ 1¼ anΣ thσ statσ ta° table≤ havσ numbe≥ 2,3,...

      3)PA┘á PERIO─ NUMBE╥   - Iµ yo⌡ usσ morσ thaεá onσá payrol∞ ì
period¼ sucΦ a≤ weekl• fo≥ somσ employee≤ anΣ monthl• fo≥ others¼ ì
yo⌡ wil∞ neeΣ t∩ usσ tw∩ withholdinτ ta° schedules«á  Fo≥ examplσ ì
numbe≥á thσá weekl• pa• perioΣ numbe≥ 1¼á thσ monthl• pa•á perioΣ ì
numbe≥ ▓ ....

     4)MARRIED/SINGL┼  - ▒ ╜ singlσ ¼á ▓ ╜ marrieΣ ,Yo⌡ ma•á wan⌠ ì
t∩á usσ │ ╜ unmarrieΣ heaΣ oµ householΣ iµ yo⌡ livσ iε Californiß ì
o≥ somσ othe≥ statσ tha⌠ ha≤ differen⌠ ta° tables

     5)MINIMU═ FO╥ RAT┼ - Thi≤ i≤ thσ dolla≥ amoun⌠ tha⌠ onσ mus⌠ ì
earε iε thσ payrol∞ perioΣ t∩ havσ thi≤ ta° ratσ appl• .

     6)MAXIMU═ FO╥ RAT┼ - Thi≤ i≤ thσ highes⌠ dolla≥ amoun⌠á tha⌠ ì
onσ caε earε whilσ stil∞ remaininτ iε thi≤ bracke⌠ 

     7)TAXñá  - Thi≤ i≤ thσ basσ dolla≥ amoun⌠ iε taxe≤ onσá wil∞ ì
havσ t∩ pa• 

     8)PLU╙á   - Onσá wil∞ als∩ havσ t∩ pa• thσ ta° ratσá oεá an• ì
earning≤ ove≥ thσ nex⌠ field«á  ENTE╥ THI╙ FIEL─ A╙ ┴ DECIMA╠ NO╘ ì
┴ PERCENTAG┼ O╥ YOU╥ CALCULATION╙ WIL╠ B┼ 10░ TIME╙ OFF

     9)OVE╥á THI╙ AMOUN╘  -  Onσ wil∞ havσ t∩ pa• thσ ta° ratσ oε ì
an• earning≤ ove≥ thi≤ amount«á  Thi≤ amoun⌠ i≤ usuall• thσá samσ ì
a≤ thσ minimuφ fo≥ thσ rate.

     T∩á ente≥á thσ thσ ta° tablσ usσ thσ MAI╬ prograφ t∩á acces≤ ì
thσá filσ "TAXSCHó «á Yo⌡ wil∞ neeΣ t∩ ente≥ aε entirσ recorΣá iε ì
thσ filσ "TAXSCHó fo≥ eacΦ linσ oµ thσ ta° table.

     Fo≥ example¼ ß statσ ta° tablσ ma• looδ like:
 
     WEEKL┘ PA┘ PERIOD
     SINGL┼ 
     Minimuφ  t∩  Maximuφ    Ta° i≤     Plu≤ Ñ     Ove≥ thi≤ $
     ----------------------------------------------------------
    $░           $2╕           ░         ░          0
    $28.0▒       $5╣           ░         3Ñ        $28
    $59.0▒áááá  $12░áááá     $1.7╖áááá   4Ñáááá    $6░              ì
   $120.0▒       n∩ limi⌠    $4.1╖       5Ñ       $120

T∩ ente≥ thi≤ datß int∩ thσ "TAXSCHó filσ yo⌡ mus⌠ ente≥ ß recorΣ ì
fo≥ eacΦ linσ oµ thσ ta° table«á  Fo≥ examplσ thσ fourtΦ linσá oµ ì
thσ ta° tablσ woulΣ bσ entereΣ int∩ an• recorΣ iε thσ "TAXSCHó a≤ 
   1⌐ DESCRIPTIO╬        - state/weekly/single
   2⌐ FE─ O╥ STAT┼ NUMBER- 2
è   3⌐ PA┘ PERIO─ NUMBE╥  - 1
   4⌐ MARRIE─ SINGL┼     - 1
   5⌐ MINIMU═ FO╥ RAT┼   - $120.01
   6⌐ MAXIMU═ FO╥ RAT┼   - $999,999.0░  ***¬ NOT┼ ente≥ 999,999
   7⌐ TA╪ ñ              - $4.1╖               - no⌠ "n∩ limit"
   8⌐ PLU╙               - .0╡    ***¬ NOT┼ ENTE╥ DECIMA╠ NO╘ %
   9⌐ OVE╥ THI╙ AMOUN╘   - $120

   I⌠ doe≤ no⌠ matte≥ wha⌠ recorΣ numbe≥ thσ datß i≤ storeΣ iε a≤ ì
thσ compute≥ searche≤ thσ entirσ "TAXSCHó filσ lookinτ t∩ fo≥ thσ ì
righ⌠ ta° rate«  
  
     Iεá thσ Inpu⌠ Descriptioε Prograφ thσ compute≥ wil∞ asδ  yo⌡ ì
whicΦ fielΣ i≤ thσ 
       a⌐ FeΣ o≥ Statσ Number
       b⌐ Pa• PerioΣ Number
       c⌐ Married/Single
       d⌐ Pa• beforσ tax.

    Thσá abovσá datß mus⌠ bσ iε thσ lowe≥ numbe≥á field≤á iεá thσ ì
file«á  Thσá "computσá taxó optioε wil∞ returε thσ "taxó no⌠á thσ ì
"pa• afte≥ tax"«  Subtrac⌠ "taxó froφ "pa• beforσ taxó t∩ computσ ì
"pa•á afte≥ tax"«á  Als∩ remembe≥ t∩ figurσ iε an• allowancσá fo≥ ì
deductioε anΣ  o≥ ta° credits.
 
                 14« - 19«  CUSTO═ INPU╘ OPTIONS

     Inpu⌠á option≤á numbe≥ 1┤ througΦ 1╣ arσ provideΣá fo≥á you≥ ì
customization«á Iµ yo⌡ usσ thesσ options¼ yo⌡ mus⌠ writσ you≥ owε ì
subroutinσ t∩ computσ thσ field≤ value«á  ReaΣ thσ sectioε oε ho≈ ì
t∩ writσ program≤ usinτ thσ datß basσ beforσ yo⌡ usσ thi≤ option«  ì
Inpu⌠áá optioεá  number≤á 14,15,16,17,18,1╣á corresponΣá t∩áá thσ ì
subroutine≤ááááá tha⌠áááá yo⌡áááá ma•áááá writσáááá oεááááá line≤ ì
53000,54000,55000,56000,5700░ anΣ 5800░ respectfull• iε thσá MAI╬ ì
program.

NOT┼ O╬ CORREC╘ ┴ RECOR─ OPTIO╬ ║    
      Iµá yo⌡ definσ inpu⌠ option≤ othe≥ theε operato≥ entr• theε ì
eacΦá timσ yo⌡ correc⌠ ß recorΣ iε thσ maiε prograφ thσá compute≥ ì
wil∞ recalculatσ thσ value≤ iε thσ record«á Iε thσá recalculatioε ì
afte≥á thσá "correc⌠ ß recordó i≤ executeΣ thσ compute≥ wil∞á no⌠ ì
ge⌠ thσ datß froφ anothe≥ filσ no≥ wil∞ i⌠ recalculatσ an•á taxe≤ ì
unles≤ yo⌡ changσ thσ maiε prograφ a⌠ line≤ 4600░ - « 


**********************  CTRANSFER PROGRAM  **********************

     Thσá transfe≥á descriptioεá prograφá i≤á useΣá t∩á customizσ ì
transfer≤á betweeεá files«áá  Therσá arσá threσá maiεá type≤áá oµ ì
transfers:
       1«á Direc⌠á transfe≥ froφ onσ fielΣ iε onσ filσ t∩ anothe≥ ì
fielΣá iε ß differen⌠ file«á  Thσ datß froφ thσ sourcσ  filσá ma• ì
eithe≥ ║     a⌐ replace
             b⌐ addeΣ t∩ thσ targe⌠ field
             c⌐ subtracteΣ froφ thσ targe⌠ field.
è       2«á  Thσá sum≤á oµá field≤á iε thσá sourcσá fielΣá ma•á bσ ì
transferreΣ t∩ thσ targe⌠ file.
       3«á   Thσ  subtotal≤ oµ field≤ iε thσ sourcσ fielΣ ma•á bσ ì
transferreΣ t∩ thσ targe⌠ file«á Thσ subtotal≤ ma• bσ transferreΣ ì
t∩ an• filσ o≥ fielΣ howeve≥ thσ recorΣ numbe≥ i≤ fixeΣ t∩ bσ thσ ì
valuσá oµ thσ fielΣ thσ field≤ werσ subtotaleΣ on«á  Fo≥ example¼ ì
thσá subtota∞á oµá wage≤á paiΣ t∩á employeσá numbe≥á 1░á wil∞á bσ ì
transferreΣá t∩á recorΣá numbe≥ 10«á  Thσ subtotal≤á oµá employeσ ì
numbe≥ 1▒ wil∞ bσ transfereΣ t∩ recorΣ numbe≥ 11.
     Thσ Sourcσ filσ i≤ thσ filσ thσ datß i≤ originall• in«á  Thσ ì
targe⌠á filσá i≤ thσ filσ wherσ thσ thσ datß i≤á transferreΣá to«  ì
Thσ sourcσ filσ i≤ no⌠ changeΣ b• an• transfe≥ operation«á  I⌠ i≤ ì
strongl• adviseΣ t∩ makσ ß backu≡ cop• oµ thσ targe⌠ filσá beforσ ì
transferrinτ data.

**********************¬  CLIMIT╙ PROGRA═  ***********************

     Thσá CLIMIT╙á prograφá i≤ useΣ t∩ se⌠á maximuφá anΣá minimuφ ì
limit≤á fo≥ thσ numerica∞ fields«á  Yo⌡ caε als∩ usσ thi≤ prograφ ì
t∩ turε thσ limit≤ checδ oε anΣ off«  T∩ ente≥ limit≤ fo≥ ß file¼ ì
yo⌡á mus⌠á firs⌠ turε thσ limit≤ checδ t∩ oε anΣ theεá ente≥á thσ ì
limit≤ fo≥ eacΦ fielΣ iε thσ file«á  Fo≥ example¼ yo⌡ ma• wan⌠ t∩ ì
se⌠ thσ limit≤ oε aε employeσ numbe≥ fielΣ t∩ ß minimuε oµ ▒á anΣ ì
ßá maximuφ oµ 2╢ iµ yo⌡ onl• havσ 2╢ employees«á  Durinτ thσ maiε ì
prograφ iµ someonσ enter≤ ß numbe≥ les≤ theε ▒ o≥ greate≥ theε 2╢ ì
you≥ compute≥ wil∞ buz· twice«  Thσ limit≤ checδ wil∞ no⌠ preven⌠ ì
thσá entr•á oµ thσ numbe≥ i⌠ wil∞ onl• buzz«á  Sincσá thσá limit≤ ì
checδ wil∞ onl• buz· anΣ no⌠ preven⌠ thσ entr• i⌠ i≤ possiblσá t∩ ì
se⌠á thσ limit≤ close≥ together«á  Fo≥ examplσ oε aε employeσ pa• ì
fielΣá yo⌡á ma• wan⌠ t∩ se⌠ thσ limit≤ t∩ $9.9╣ t∩á $999.9╣á eveε ì
thougΦá oncσ iε ß whilσ someonσ i≤ paiΣ les≤ theε $9.9╣á o≥á morσ ì
theε $999.99«  B• settinτ thσ limit≤ closσ togethe≥ yo⌡ wil∞ picδ ì
ou⌠á an• mistake≤ causeΣ b• leavinτ ou⌠ ß digi⌠ o≥ addinτ ß digi⌠ ì
b•á mistakσ o≥ b• puttinτ thσ decima∞ poin⌠ iε thσá wronτá space«  ì
Fo≥á examplσ enterinτ $1256.╖ insteaΣ oµ $125.6╖ «á  I⌠ i≤ alway≤ ì
possiblσ t∩ usσ thσ scaε prograφ t∩ looδ fo≥ extremσ value≤á tha⌠ ì
shoulΣ  no⌠ bσ iε you≥ file.

***********************  CSCREEN PROGRAM  **********************

     Thσá screeεá descriptioε prograφ i≤ useΣ t∩ se⌠ u≡ ho≈á eacΦ ì
recorΣ iε thσ filσ wil∞ bσ displayeΣ oε thσ screen«  Thσ to≡ linσ ì
oµá eacΦ screeε i≤ reserveΣ fo≥ thσ filσ namσ anΣ recorΣá number«  ì
Line≤á 20-2╡á arσá reserveΣ fo≥ thσá option≤á menu¼á datßá entry¼ ì
correction≤, etc«á  Yo⌡á may onl• usσ line≤ ▓ thougΦ 19á fo≥á thσ ì
screen«á  EacΦ screeε descriptioε consist≤ oµ 1╕ "overlaysó line≤ ì
anΣá fo≥á eacΦá fielΣá thσá linσ anΣ columε wherσá i⌠á i≤á t∩á bσ ì
displayed«á  Thσ overla• line≤ arσ printeΣ oε thσ screeε oε line≤ ì
▓á t∩á 19«á  Theεá eacΦ fielΣ i≤ placeΣ oε thσ screeεá a≤á i⌠á i≤ ì
entereΣ o≥ read«  Aε examplσ oµ ß screeε i≤ belo≈ :

***********  FILE : ACCOUNTS  RECORD NUMBER : 12  *************
(1) DAY: 1  (2) MONTH: 11  (3) YEAR: 83 
  
(4) DESCRIPTION: SALE OF EQUIPMENT , TRACTOR 
è
(5)ACCOUNT #  (6)ACCOUNT NAME       (7)CREDIT   (8)DEBIT  
     20         SALES                    $0.00  $2500.00
     30         CASH                  $2500.00     $0.00











**************************************************************

     You≥á screeε wil∞ bσ 8░ column≤ widσ wherea≤ thi≤ manua∞á i≤ ì
onl•á 6╡á column≤ wide«á  I⌠ i≤ strongl• advisablσ t∩á lis⌠á eacΦ ì
fielΣá numbe≥á iεá thσ overla• becausσ yo⌡ wil∞á neeΣá thσá fielΣ ì
numbe≥ t∩ changσ o≥ correc⌠ eacΦ field'≤ entry«á  I⌠ i≤ suggesteΣ ì
tha⌠ yo⌡ lis⌠ eacΦ fielΣ numbe≥ iε (⌐ o≥ [▌ t∩ avoiΣ confusion.
     Thσá compute≥ wil∞ asδ yo⌡ fo≥ thσ 1╕ overla• lines«á  Then¼ ì
fo≥á eacΦ fielΣ thσ compute≥ wil∞ asδ yo⌡ whicΦ linσá anΣá columε ì
thσá entr•á i≤á in«á  Thσ compute≥ wil∞ asδ yo⌡ iµ yo⌡á wan⌠á an• ì
repeatinτ field≤ o≥ subrecords«á  Iµ yo⌡ arσ goinτ t∩ se⌠ u≡á thσ ì
repeatinτá field≤ yo⌡ mus⌠ se⌠ theφ u≡ oε thσ samσ line«á  Iε thσ ì
abovσ examplσ thσ accoun⌠ number¼á accoun⌠ name¼ debi⌠ anΣ credi⌠ ì
arσá thσá repeatinτá fields«á  Durinτ thσ "ente≥á ßá ne≈á recordó ì
portioε oµ thσ Maiε prograφ iµ ß subrecorΣ witΦ repeatinτá field≤ ì
i≤á entereΣá thσ compute≥ wil∞ sho≈ an• repeatinτ field≤á oεá thσ ì
nex⌠ linσ down«  Iµ yo⌡ specif• an• sum≤ fo≥ thσ repeatinτ field≤ ì
theε thσ sum≤ wil∞ bσ showε oε linσ 19«á  Thσ sum≤ arσ no⌠ storeΣ ì
iεá memory«á  The• arσ recalculateΣ eacΦ timσ al∞ thσá subrecord≤ ì
arσ shown.

************************  CREAL PROGRAM  ************************

     Thσá CREA╠ prograφ filσ i≤ useΣ t∩ se⌠ u≡ realtimσ transfer≤ ì
betweeε thσ files«á  Yo⌡ ma• specif• ß realtimσ transfe≥ fo≥ ▒ o≥ ì
▓ oµ thσ field≤ iε thσ sourcσ file«  Yo⌡ ma• transfe≥ eacΦ oµ thσ ì
field≤ t∩ eithe≥ onσ o≥ tw∩ field≤ iε thσ targe⌠ file«á  Yo⌡á ma• ì
either add or subtract each field to its target file.   
     Iεá ou≥á samplσá filσ "JOURNALó wσ havσ se⌠á u≡á ßá realtimσ ì
transfer«á  Thσ field≤ DEBI╘ ñ anΣ CREDI╘ ñ arσ transfereΣ t∩ thσ ì
"ACTSUMóá file«á  Thσ recorΣ numbe≥ oµ "ACTSUMó filσ i≤ equa∞á t∩ ì
thσ accou⌠ numbe≥ iε thσ JOURNA╠ file«á  Thσ fielΣ "CREDI╘ ñ ó i≤ ì
addeΣá t∩á thσá "CREDI╘á TOTALó anΣá subtracteΣá froφá thσá fielΣ ì
"BALANCEó iε thσ "ACTSUMó file«á  Thσ fielΣ "DEBI╘ $ó i≤ addeΣ t∩ ì
thσ "BALANC┼ TOTALó iε thσ "ACTSUMó filσ anΣ i≤ als∩ addeΣ t∩ thσ ì
"BALANCEó iε thσ samσ field.
     T∩á ente≥á ß realtimσ descriptioε fo≥ ß filσ yo⌡ mus⌠á firs⌠ ì
se⌠áá thσá realtimσá switcΦá t∩á YES¼áá theεá ente≥á ßáá realtimσ ì
description«á  Iεá enterinτ ß realtimσ descriptioεá thσá compute≥ ì
wil∞á asδ yo⌡ whicΦ filσ yo⌡ wan⌠ t∩ transfe≥ thσ datß to¼á whicΦ ìèfield≤ yo⌡ wan⌠ t∩ transfer¼á t∩ whicΦ field≤ iε thσ targe⌠á filσ ì
yo⌡ wan⌠ t∩ transfe≥ thσ data¼ anΣ iµ yo⌡ wan⌠ t∩ adΣ o≥ subtrac⌠ ì
thσ sourcσ fielΣ froφ thσ targe⌠ field.

     Iµ yo⌡ se⌠ u≡ ß realtimσ transfer¼  wheneve≥ yo⌡ ente≥ ß ne≈ ì
entr•á usinτ thσ maiε prograφ thσ compute≥ wil∞ transfe≥ thσ datß ì
t∩ thσ targe⌠ file«á  Iµ yo⌡ ove≥ writσ ß previou≤ recorΣá numbe≥ ì
thσ compute≥ wil∞ automaticall• correc⌠ thσ targe⌠  realtimσ filσ ì
b• erasinτ thσ olΣ valuσ froφ thσ targe⌠ file«á  Iµ yo⌡ changσ o≥ ì
correc⌠á thσá sourcσ filσ thσ realtimσ targe⌠ filσ wil∞á als∩á bσ ì
corrected«á  Eveε iµ yo⌡ changσ thσ fielΣ iε thσ sourcσ filσ tha⌠ ì
point≤á t∩ thσ recorΣ numbe≥ iε thσ seconΣ filσ thσ compute≥ wil∞ ì
erasσá thσá transfe≥á t∩ thσ incorrec⌠á recorΣá numbe≥á anΣá theε ì
transfe≥ thσ datß t∩ thσ correc⌠ recorΣ number.
     
     Iµá yo⌡á se⌠ u≡ realtimσ transfe≥ yo⌡ shoulΣ als∩ se⌠á u≡á ß ì
regula≥á transfe≥á t∩ check/correc⌠ thσ datß iε thσ targe⌠á file«  ì
Transferinτ datß betweeε tw∩ file≤ i≤ onσ oµ thσ mos⌠ erro≥ pronσ ì
area≤ iε compute≥ programming«  Iµ thσ compute≥ crashe≤ afte≥ thσ ì
recorΣá i≤á writteε oε thσ sourcσ filσ anΣ beforσ thσá recorΣá i≤ ì
writteε oε thσ targe⌠ filσ you≥ datß wil∞ bσ incorrect« 
     Yo⌡á caεá alway≤ usσ thσ changσ prograφ t∩á se⌠á thσá targe⌠ ì
field≤á t∩á zer∩ anΣ theε usσ ß regula≥ transfe≥ t∩á correc⌠á thσ ì
targe⌠á filσá fo≥á an• erro≥ tha⌠ ma• havσ crep⌠ iεá durinτá  thσ ì
realtimσ transfers.
     Iεá settinτá u≡ thσ realtimσ transfer¼á thσ pointe≥á t∩á thσ ì
targe⌠á recorΣá numbe≥á mus⌠á bσá aεá intege≥á anΣá thσáá record≤ ì
transfereΣá mus⌠á bσ eithe≥ doublσ precisioε o≥ dolla≥ anΣá cent≤ ì
amounts«á  Als∩ iµ yo⌡ arσ goinτ t∩ subtrac⌠ durinτ thσá realtimσ ì
transfe≥ se⌠ u≡ thσ subtractioε a≤ thσ seconΣ oµ thσ transfers« 
     
                          APPLICATIONS

     Ou≥ entirσ systeφ wa≤ designeΣ froφ thσ grounΣ u≡ t∩á handlσ ì
accounting¼á  payrol∞ accounting¼á inventory¼ account≤ receivablσ ì
anΣ account≤ payable«á  B• usinτ onσ systeφ t∩ handlσ al∞ oµ you≥ ì
busines≤á applicatioεs yo⌡ savσ oε traininτ time«á  Somσá oµá thσ ì
suggesteΣ application≤ arσ listeΣ below.

                           ACCOUNTING

     Onσá possibilit•á  i≤á t∩á se⌠ u≡ ß journa∞á filσá witΦá thσ ì
followinτ field≤ :
     FIELD 1 : Transaction Number
     FIELD 2 : Month 
     FIELD 3 : Day
     FIELD 4 : Transaction Explanation
     FIELD 5 : Account Number 
     FIELD 6 : Debit $ Amount     } use only field 6 or 7    
     FIELD 7 : Credit $ Amount    }
     FIELD 8 : Cost Center     ******  optional  *******
Thσ drawbacδ t∩ thi≤ methoΣ i≤ tha⌠ yo⌡ havσ t∩ ente≥ thσ tw∩  o≥ ì
morσ record≤ fo≥ eacΦ transaction«á  Howeve≥ b• usinτ thσ "=ó anΣ ì
thσá "^óá iεá thσá ne≈ entr• optioε  yo⌡á caεá easil•á ente≥á thσ ì
repetitiou≤á fields«á    Firs⌠ yo⌡ havσ t∩ ente≥ ß recorΣ fo≥ thσ ìèdebi⌠ account«á  Theε yo⌡ ente≥ ß recorΣ fo≥ thσ credi⌠á account«  ì
Yo⌡ ma• ente≥ morσ theε ▓ account≤ fo≥ ß singlσ transactioε whicΦ ì
i≤á onσá oµá thσá advantage≤ oµ storinτá you≥á datßá iná separatσ  ì
records«á  Se⌠ u≡ thσ accoun⌠ number¼á accoun⌠ name¼á debi⌠ ñ anΣ ì
credi⌠á ñ a≤ repeatinτ fields«á  Yo⌡ ma• wan⌠ t∩ havσ thσ debi⌠ ñ ì
anΣ credi⌠ ñ summeΣ t∩ preven⌠ entr• errors.
                       
     Iµá yo⌡ sor⌠ thσ Journa∞ filσ b• thσ Accoun⌠ Numbe≥ yo⌡ wil∞ ì
havσ jus⌠ createΣ ß ledger«á  Thi≤ closσ relationshi≡ betweeε thσ ì
journa∞áá anΣáá thσá ledge≥á make≤á "postingóáá mistake≤áá almos⌠   ì
impossible«     
     Yo⌡ ma• usσ eithe≥ ß transfe≥ optioε o≥ thσ scaε prograφá t∩ ì
adΣ t∩ thσ total≤ fo≥ eacΦ account«  Yo⌡ ma• wan⌠ t∩ usσ ß custoφ ì
transfe≥ t∩ transfe≥ thσ sum≤ fo≥ eacΦ filσ t∩ aε "ACCOUNTSó filσ ì
witΦ thσ forma⌠ :
     FIELD 1: Account Name
     FIELD 2: Debit total
     FIELD 3: Credit Total
     FIELD 4: Balance

     Iµ thσ book≤ arσ ou⌠ oµ balancσ yo⌡ caε usσ thσ scaε prograφ ì
t∩á adΣ thσ debit≤ anΣ credit≤ oµ al∞ thσ transactions«á  Iµá thσ ì
tota∞áá debit≤á doe≤á no⌠á equa∞á thσá tota∞á credit≤á fo≥áá eacΦ ì
transaction¼ theε therσ i≤ ß mistakσ iε enterinτ thσ transaction«  ì
Iµá mos⌠á oµ you≥ transaction≤ affec⌠ onl• tw∩ account≤ theεá an• ì
transactioε entr• mistake≤ shoulΣ stanΣ ou⌠ iε thσ journal«  Als∩ ì
usinτ thσ "^ó iε thσ maiε prograφ  wil∞ minimizσ entr• errors.
   
                             PAYROLL

     Fo≥ payrol∞ calculation≤ i⌠ i≤ suggesteΣ tha⌠ yo⌡ se⌠ u≡ tw∩ ì
files«á Aε Employeσ pa• summar• containinτ payrol∞ informatioε oε ì
eacΦ employeσ anΣ ┴ paychecδ filσ containinτ thσ paychecks.
Yo⌡ ma• wan⌠ t∩ se⌠ u≡ thσ "PAYSUMó likσ :
  FIEL─ 1.║ Employeσ number
  FIEL─ 2.║ Employeσ name
  FIEL─ 3.║ Socia∞ Securit• Number
  FIEL─ 4.║ Stree⌠ Address
  FIEL─ 5.║ City/State/Zi≡ Code
  FIEL─ 6.║ Hourl• Pa• 
  FIEL─ 7.║ Statσ Ta° Numbe≥ ╗ correspondinτ t∩ ta° tablσ number
  FIEL─ 8.║ Married/singlσ codσ number
  FIEL─ 9.║ FixeΣ Dollar≤ Deductions
  FIEL─ 10║ Payrol∞ Period
  FIEL─ 11║ Tota∞ Earning≤ t∩ Date
  FIEL─ 12║ Federa∞ Ta° withhelΣ t∩ Date
  FIEL─ 13║ Statσ Ta° withhelΣ t∩ Date
  FIEL─ 14║ Federa∞  allowancσ fo≥ deductioε pe≥ period
  FIEL─ 15║ Statσ allowancσ fo≥ deduction
  FIEL─ 16║ Ñ Deduction≤ iµ an• ║ Optional
   

Thσ paychecδ filσ coulΣ  bσ se⌠ u≡ somethinτ likσ :
  FIEL─ ▒ :Employeσ Number
  FIEL─ ▓ :Regula≥ hour≤ worked
è  FIEL─ │ :Overtimσ hour≤ worked
  FIEL─ ┤ :Regula≥ pa• ratσ            -Ge⌠ froφ abovσ file
  FIEL─ ╡ :Overtimσ pa• ratσ           -1.╡ timσ regula≥ pay
  FIEL─ ╢ :Regula≥ pa•                 -hour≤ workeΣ ╪ rate
  FIEL─ ╖ :Overtimσ pa•                -hour≤ workeΣ ╪ rate
  FIEL─ ╕ :Tota∞ pa• beforσ taxe≤      -adΣ thσ ▓ above
  FIEL─ ╣ :Singlσ MarrieΣ Codσ Numbe≥  -Ge⌠ froφ abovσ file
  FIEL─ 10:Statσ ta° tablσ numbe≥      -Ge⌠ froφ abovσ file
  FIEL─ 11:Allowancσ fo≥ statσ deduction-Ge⌠ froφ abovσ file
  FIEL─ 12:Federa∞ Ta°                 -Computσ usinτ ta° tables
  FIEL─ 13:Statσ Ta°                   -Computσ usinτ ta° table
  FIEL─ 14:Pa• afte≥ statσ ta°         -Pa• minu≤ statσ tax
  FIEL─ 15:Pa• afte≥ federa∞ ta°       -Abovσ fielΣ minu≤ feΣ tax

A≤á yo⌡ caε seσ yo⌡ onl• havσ t∩ ente≥ thσ firs⌠ │á fields«á  Thσ ì
res⌠ arσ automaticall• computed«  Usσ thσ custoφ inpu⌠ prograφ t∩ ì
se⌠ u≡ thσ automatiπ calculations.

Yo⌡á coulΣá als∩ se⌠ u≡ thσ paychecδ filσ s∩á tha⌠á thσá operato≥ ì
enter≤ thσ beforσ ta° pay«á   Fo≥ salarieΣ  employee≤ wh∩ ge⌠ thσ ì
samσá pa• ever• weeδ yo⌡ coulΣ ge⌠ thei≥ pa• froφ thei≥á employeσ ì
pa• record.
   

                            INVENTORY

     Therσáá arσá severa∞á differen⌠á way≤á oµá maintainninτáá aε ì
inventory«á  Therσ arσ perpetua∞ anΣ periodiπ systems«  Therσ arσ ì
als∩á severa∞á differen⌠á way≤á oµá figurinτá thσá valuσá oµá thσ ì
inventor•á iε stocδ sucΦ a≤ FIFO,LIFO¼á lowe≥ oµ cos⌠ o≥á market¼ ì
retai∞á method¼á etc«á Iε al∞ therσ arσ a⌠ leas⌠ ß dozeε possiblσ ì
way≤á t∩á maintaiε aε inventory«á  Belo≈ i≤ ßá simplσá methoΣá oµ ì
keepinτ tracδ oµ you≥ inventory«  
 Usσá ßá singlσ filσ witΦ thσ followinτ fields║á  ì
  FIEL─ ▒ :iteφ number
  FIEL─ ▓ :numbe≥ iε stock
  FIEL─ │ :cos⌠ oµ eacΦ item
  FIEL─ ┤ :tota∞ cos⌠  - numbe≥ iε stocδ time≤ cos⌠ pe≥ item

     Morσá comple° anΣ informativσ inventor•á managemen⌠á design≤ ì
arσ available«    
   
            ACCOUNT╙ RECEIVABL┼ AN─ ACCOUNT╙ PAYABLE

     Therσá arσá severa∞á differen⌠ way≤ oµ storinτá anΣá keepinτ ì
tracδá oµá you≥á accoun⌠á receivable≤á   anΣá account≤áá payable«  ì
Account≤á payablσá anΣ account≤ receivable≤  arσ prett•á similar«  ì
Thσ differencσ i≤ tha⌠ witΦ account≤ receivablσ   peoplσ owσá yo⌡ ì
mone• whilσ witΦ account≤ payablσ yo⌡ owσ peoplσ money.
     Thi≤áá manua∞áá wil∞áá onl•á cove≥áá  account≤áá receivable«     ì
Howeve≥á yo⌡á shoulΣá bσ ablσ t∩ se⌠ u≡ aεá account≤á payablσá iε ì
almos⌠ thσ samσ format.
     Yo⌡á wil∞á probabl• wan⌠ t∩ se⌠ tw∩ files«á  ┴á maste≥á filσ ì
containinτ ║                  
     FIEL─ ▒ ║ Name
è     FIEL─ ▓ ║ Stree⌠ Address
     FIELD 3 : City/State/Zip
     FIELD 4 : Total amount owed
     FIELD 5 : Credit limit
     FIELD 6 : Debitor number 

and a transaction file containing :
     FIELD 1 : Debitor number
     FIELD 2 : Items Bought
     FIELD 3 : Total Charged
     FIELD 4 : Date

Thσ tota∞ chargeΣ caε bσ addeΣ t∩ thσ tota∞ amoun⌠ oweΣ b•á usinτ ì
ßá custoφá transfer«á  Yo⌡á coulΣ ente≥ an• paymen⌠á a≤á negativσ ì
amoun⌠   chargeΣ o≥ yo⌡ coulΣ havσ ß separatσ  filσ fo≥á payment≤ ì
set up likσ thσ transactioε file.
    
              INITIAL MENUS FOR THE CUSTOM PROGRAMS

        - CFORM             - NEW CUSTOM FORMS
                            - READ A FORM DESCRIPTION
                                with - CORRECTIONS
                                     - PRINT ON PAPER

        - CFILE             - ENTER A FILE DESCRIPTION
                            - READ A SINGLE FILE DESCRIPTION
                            - READ ALL FILE DESCRIPTIONS
                            - PRINT ON PAPER ONE FILE 
                            - PRIN╘áON PAPER ALL THE FILE         
                                  DESCRIPTIONS
 
        - CTRANSFE          - ENTER A TRANSFER DESCRIPTION
                            - READ A TRANSFER DESCRIPTION
                            - PRIN╘áA TRANSFER DESCRIPTION 
                               
        - CINPUT            - ENTER A NEW INPUT DESCRIPTION 
                            - READ A CUSTOM INPUT DESCRIPTION 
                            - PRINT A CUSTOM INPUT DESCRIPTION

        - CSCREEN           - ENTER A NEW SCREEN DESCRIPTION
                            - READ A SCREEN DESCRIPTION
                            - PRINT A SCREEN ON PAPER
                            - CORRECT A SCREEN
 
        - CLIMITS           - READ THE LIMITS SWITCH                               
                            - PRINT THE LIMITS SWITCH ON PAPER
                            - READ THE LIMITS
                            - PRINT THE LIMITS ON PAPER
                            - ENTER ALL NEW LIMITS FOR A FILE
                            - ENTER NEW LIMITS FOR ONE FIELD
        
        - CREAL             - READ THE REALTIME SWITCH
                            - PRINT THE REALTIME SWITCH ON PAPER
                            - READ THE REALTIME TRANSFER DATA
                            - PRINT THE REALTIME DATA ON PAPER
è                            - ENTER REALTIME DATA

                          LIST OF FILES

I. Program Files :
    1. MAIN    
    2. FORM
    3. TRANSFER
    4. SCAN
    5. CHANGE
    6. SORT
    7. ASCII
    8. CFILE
    9. CINPUT
    10.CSCREEN
    11. CTRANSFE
    12. CFORM 
    13. CLIMITS
    14. CREAL
    15. TESTACSI


II. Program Data Files
    1. FFILE     - Contains files specifications
    2. TFER      - Contains Transfer Specifications
    3. FORMLIST  - Contains a list of all forms
    4. IDATA1, IDATA2, IDATA3,.....  - One for each file
           - contains the input description   
    5. SCTEST - Contains a list of all files with screens
    6. SCREEN1,SCREEN2,SCREEN3 ..... the screen descriptions
    7. IDEX - Contains a list of all files with limits
    8. MAXMIN1,MAXMIN2,MAXMIN3, ..... the limits for each file
    9. REALTIME - Contains the realtime flags for each file
   10. REAL1,REAL2 - Contains the realtime data for a file

III. Form Data Files :
    1. The specifications for each form are each stored on a 
       separate  file with the form name being the same as the
       file name.
IV. User Data Files :
    1. KEYLIST - The names corresponding to each key           
    2. TAXSCH - Tax tables 
    3. All other files you may wish to add
   
                           DATA ENTRY

The prompt for an entry is :
  >__<  or
  >_______<  or
  >___________________< 
For integers you may only enter 1,2,3,4,5,6,7,8,9,0, or -
For single precision number you may enter :
     1,2,3,4,5,6,7,8,9,0,-,+,$,% 
For double precision numbers you may enter :
     1,2,3,4,5,6,7,8,9,0,-,+,$,%
èFor strings you may enter any number or letter or other character 
     except  <,>,= as they are used for control in the new entry.
If you try to enter a letter when a number is required the 
     computer will not accept the letter and sound a beep.

                         NEW DATA ENTRY

     In the new data entry section the characters <,>, and = are 
used for control.  
     " < " restarts the data entry at the first field.
     " > " is to escape the data entry process  before the last 
              field.
     " = " sets the current field to the same value that the same 
              field in the last record entered had.
     ó ▐ ó set≤ thσ curren⌠ fielΣ t∩ thσ samσ valuσá tha⌠á thσ ì
              nex⌠á highe≥ numbe≥ fielΣá iεá thσá las⌠   
              record entered had.  This is for use in entering
              journal entries where the credit amount is equal to
              the debit amount in the last entry. 

                         ENTRY CONTROLS

RETURN : Press return when you are done with the entry.
CONTROL-╤á o≥ BACKSPAC┼ ║á Move≤ thσ curso≥ bacδ anΣá erase≤á thσ ì
                           las⌠ character.
CONTROL-S OR LEFT ARROW : Moves the cursor left.
CONTROL-D OR RIGHT ARROW: Moves the cursor right.
CONTROL-F OR INSERT     : Inserts a space where the cursor is.
CONTROL-┴ O╥ DELET┼     ║á Delete≤ thσ characte≥ o≥ spacσá wherσ ì
                            thσ curso≥ is.
     Thi≤á i≤ onσ oµ thσ area≤ oµ incompatibilit•á betweeεá basiπ ì
languages«á  Thσá prograφá read≤ thσ ASCI╔ codσ oµá thσá keyboarΣ ì
entrie≤á anΣ goe≤ t∩ thσ subroutinσ tha⌠ perform≤ thσá insertion¼ ì
deletion¼á etc«  Thi≤ i≤ iε line≤ 14590- 1462░ anΣ 15190-1525░ oµ ì
thσ MAI╬ program« 

****¬  DEFAUL╘ VALUE╙  *****

     Fo≥ al∞ numbe≥ thσ defaul⌠ valuσ i≤ 1«á  Iµ yo⌡ pres≤ returε ì
withou⌠á enterinτ an• othe≥ number≤ theε thσ compute≥ wil∞ assumσ ì
yo⌡ wan⌠ thσ numbe≥ one«á  Iε man• oµ thσ option≤ thσ numbe≥á onσ ì
optioεá wil∞ bσ useΣ thσ most«á  B• jus⌠ pressinτ returε yo⌡ wil∞ ì
bσ ablσ t∩ ente≥ you≥ informatioε faster«á Iε thσ MAI╬ prograφ iµ ì
yo⌡á pres≤ thσ spacσ ba≥ theε pres≤ returε thσ defaul⌠ valuσá fo≥ ì
number≤ change≤ t∩ zero« 
     For all strings the default value is a blank string.  

    
                        FILE EXPLANATION  

     Al∞á oµá you≥á datß i≤ storeΣ iεá files«á  ┴á filσá contain≤ ì
records«á  EacΦá recorΣ contain≤ informatioε storeΣ iεá different ì
fields .  A simple example of a file is shown below.         
  
FILE : TELEPHONE  
èRECORD # 1 
  FIELD # 1              
    FIELD NAME : NAME    
      ENTRY      : John Doe    
  FIELD #2
    FIELD NAME : TELEPHONE NUMBER
      ENTRY      : 123-4567   
RECORD # 2  
  FIELD # 1 
    FIELD NAME : NAME    
      ENTRY      : John Smith
  FIELD # 2
    FIELD NAME : TELEPHONE NUMBER
      ENTRY      : 345-6789
RECORD #3
  FIELD # 1
    FIELD NAME : NAME
      ENTRY      : Tom Brown
  FIELD # 2
    FIELD NAME : TELEPHONE NUMBER
      ENTRY      : 333-1111

Yo⌡á shoulΣá kno≈ thσ followinτ fact≤ t∩ ge⌠ thσ bes⌠ usσ oµá an• ì
datß basσ systeφ :
    1. A file may contain any number of records up to the storage
         limits of your floppy disks.
    2«á EacΦá recordá contain≤á thσ samσ numbe≥, type and names  ì
         of the fields.
    3«á You≥ informatioε i≤ storeΣ iε ß fielΣ whicΦ i≤ par⌠ oµá ß ì
         record.  All the records make up the entire file
    
Therσá arσ severa∞ type≤ oµ fields«á Fo≥ morσ informatioε seσ thσ ì
Custoφ prograφ section«á  Iµ yo⌡ arσ ne≈ t∩ computer≤ anΣ d∩á no⌠ ì
understanΣ thσ concep⌠ oµ files¼á records¼á anΣ field≤ wσ sugges⌠ ì
readinτ ß booδ oε beginninτ basiπ programming.

                  SUBRECORDS / REPEATING FIELDS

     Thσáá subrecord/repeatinτá field≤á optioεá i≤á ßá methoΣá oµ ì
enterinτá severa∞á record≤ tha⌠ sharσ simila≥á datßá and/o≥á havσ ì
repeatinτá fields«á  Conside≥á thσá examplσ showε iεá thσá samplσ ì
screen«  Doublσ entr• accountinτ require≤ tw∩ o≥ morσ entrie≤ fo≥ ì
eacΦ transaction«á  Thσ datσ anΣ descriptioε sta• thσ samσá whilσ ì
thσá accoun⌠á number¼á accoun⌠á name¼á credi⌠ anΣ debi⌠á arσá thσ ì
repeatinτá fields«á  Aε entirσ recorΣ i≤ storeΣ oε thσá disδá fo≥ ì
eacΦ subrecord«á  Yo⌡ ma• specif• tha⌠ sum≤ oµ eacΦ subrecord≤ bσ ì
displayed«á  Thσá sum≤á arσ no⌠ storeΣ iε memory«á  Thσ sum≤á arσ ì
recalculateΣ eacΦ timσ thσ subrecord≤  arσ displayed«á  Thσá sum≤ ì
arσá displayeΣ oε thσ nineteentΦ linσ iε thσ columε tha⌠ the• arσ ì
summeΣá from«á  Iµ yo⌡ d∩ no⌠ understanΣ thσ abovσ tr• usinτá thσ ì
maiεá prograφ anΣ usσ thσ subrecorΣ option≤ iε enterinτ datßá fo≥ ì
filσ #1.



è                      KEYLIST EXPLANATION 

     Aεá intege≥ fielΣ ma• bσ specifieΣ iε thσ CFIL┼ prograφ a≤ ß ì
ke•á t∩á ß lis⌠ oµ strings«á  Iε thσ samplσá file≤á thσá employeσ ì
number≤ arσ thσ key≤ t∩ thσ employee'≤ name«á  Als∩ iε thσ samplσ ì
files the account numbers are the keys to the account names.     
     Iεá designinτá system≤á i⌠ i≤ usuall• bes⌠á t∩á avoiΣá usinτ ì
string≤á tha⌠á arσ useΣ a≤ pointer≤ o≥ iε an•á calculation«á  Thσ ì
probleφáá witΦá usinτá string≤á i≤á tha⌠á the•á arσá to∩áá easil• ì
incorrectly entered.  For example the strings :
     Stephen Anthony
     Stephen  Anthony
     Stephen Anthony, T
      Stephen Anthony
     Stephen T Anthony 
arσá al∞ seeε a≤ differen⌠ peoplσ b• thσ computer«á  Whilσ i⌠á i≤ ì
possiblσá t∩ writσ program≤ usinτ string≤ i⌠ usuall• cause≤á morσ ì
problems than it is worth.
     I⌠á i≤á easie≥á t∩ assigε eacΦ employeσá ßá number«á  I⌠á i≤ ì
usuall•á easie≥ t∩ ente≥ ß numbe≥ thaε tr• t∩ typσ iε 2░ o≥á morσ ì
letter≤á iε thσ samσ exac⌠ order«á  However¼á peoplσ recognizσá ß ì
namσá easie≥ thaε the• caε recognizσ ß number«á  Fo≥ examplσ iµ ß ì
recorΣ show≤ ß paychecδ t∩ employeσ numbe≥ ▒ fo≥ $30░ yo⌡ ma• no⌠ ì
recal∞á wh∩á employeσ numbe≥ ▒ is«á  B•á declarinτá thσá employeσ ì
numbe≥á t∩á bσ ß ke• t∩ ß lis⌠ ever• timσ thσ employeσ numbe≥á i≤ ì
showεá thσ employee≤ namσ wil∞ als∩ bσ shown«á  Thσ samσ i≤á truσ ì
fo≥á thσá accoun⌠ numbers«á  Yo⌡ caε seσ ho≈ thσá keylis⌠á optioε ì
work≤á b•á readinτá ß recorΣ iε thσ samplσ filσá ▒á "JOURNALóá o≥ ì
samplσ filσ │ "PAYCHECK".
     Yo⌡á caεá definσ you≥ owε keylist«á  Wheεá usinτá thσá CFIL┼ ì
prograφ t∩ se⌠ u≡ you≥ files¼ yo⌡ ma• declarσ aε intege≥ valuσ t∩ ì
bσá ßá ke•á t∩ ß list«á  Thσ keylis⌠ string≤ arσ storeΣá iεá filσ ì
numbe≥ 1░ "KEYLIST"«  Thσ keylis⌠ filσ i≤ se⌠ u≡ a≤ :
    Field 1 :  List Number 
    Field 2 :  Row Number
    Field 3 :  The Key  (the string)

     Thσá lis⌠á numbe≥á i≤á thσ lis⌠ numbe≥á t∩á whicΦá thi≤á ke• ì
corresponds«á  Thσ ro≈ numbe≥ i≤ thσ numbe≥ tha⌠ thσ intege≥á ke• ì
mus⌠ havσ fo≥ thσ compute≥ t∩ prin⌠ thσ string«á  Fo≥ example¼ t∩  ì
ente≥á ßá ke• fo≥ ß ne≈ employeσ Johε SmitΦ a≤ employeσ numbe≥á ╕ ì
usσá thσá maiεá prograφ t∩ ente≥ ß ne≈á recorΣá numbe≥á  (d∩á no⌠ ì
overwritσ an• olΣ record≤ unles≤ yo⌡ wan⌠ to⌐ iε thσ KEYLIS╘ filσ ì
numbe≥ 1░ a≤ ║ 

    Field 1 : 1  (the employee numbers have been assigned to 
                  list number one in the CFILE program) 
    FielΣ ▓ : ╕   (yo⌡ want employeσ numbe≥ eigh⌠ t∩ corresponΣ ì
                   to the below key)
    Field 3 : John Smith

     I⌠á doe≤á no⌠ matte≥ whicΦ recorΣ numbe≥ yo⌡ pu⌠á thσá abovσ ì
datß in«á  Thσ operation≤ program≤ read≤ thσ entirσ keylis⌠á filσ ì
int∩á memor•á a⌠ thσ star⌠ oµ prograφ anΣ store≤ thσá string≤á iε ì
memory.  
è
                     DATA BASE SPECIFICATION
                     (or memory limitation)

     The program as distributed has the following limitations:

1. MAXIMUM NUMBER OF FILES    : 15     on one program data disk
2. MAXIMUM NUMBER OF FIELDS   : 28
3. MAXIMUM NUMBER OF RECORDS  : 16,000 per disk if disk space is 
                                       available 
                              : using Basic 2.0,   16 million
4. MAXIMUM STRING LENGTH      : 55 characters

     Thσá maximuφá numbe≥ oµ file≤ pe≥ prograφ datß disδ anΣá thσ ì
maximuφ numbe≥ oµ field≤ arσ limiteΣ b• thσ memor• addressablσ b• ì
you≥á basiπá languagσá (probabl• 64K)«á  Thσá maximuφá numbe≥á oµ ì
record≤ pe≥ disδ i≤ limiteΣ eithe≥ b• thσ disδ spacσ availablσ o≥ ì
b•á thσ larges⌠ intege≥ you≥ Basiπ wil∞ handlσ o≥ b• thσá larges⌠ ì
singlσá precisioεá numbe≥ iµ thσ GE╘ anΣ PU╘ statement≤á iεá you≥ ì
Basiπá languagσá caεá usσá singlσá precisioεá numbers«á  Iεá mos⌠ ì
application≤ yo⌡ wil∞ onl• bσ ablσ t∩ fi⌠ ß fe≈ thousanΣá record≤ ì
oε ß disk«  Yo⌡ caε usσ a≤ man• disk≤ fo≥ thσ filσ a≤ yo⌡ neeΣ s∩ ì
yo⌡á arσ no⌠ reall• limiteΣ witΦ regarΣ t∩ thσ maximuφ numbe≥á oµ ì
records«á  Thσá maximuφá strinτ lengtΦ wa≤ se⌠ t∩ 5╡ s∩á tha⌠á i⌠ ì
woulΣá fi⌠á oεá aε eight• columε screeε witΦ it≤ fielΣá namσá anΣ ì
number«á  Iµá yo⌡ neeΣ ß longe≥ strinτ yo⌡ caε alway≤ usσ tw∩á o≥ ì
morσ string≤ t∩ holΣ thσ samσ information.
     Yo⌡á caεá changσ thσ maximuφ numbe≥ oµ file≤ anΣá field≤á b• ì
increasinτá thσ dimension≤ oµ al∞ thσ variable≤ tha⌠ arσ requireΣ ì
fo≥ eacΦ filσ anΣ field«  Oµ coursσ yo⌡ arσ limiteΣ b• thσ memor• ì
tha⌠ you≥ Basiπ caε address«  Thσ compileΣ versioε wil∞ allo≈ yo⌡ ì
morσ memory«  Thσ compileΣ versioε wil∞ easil• allo≈ yo⌡ t∩ g∩ u≡ ì
t∩ 1╕ file≤ oµ 5░ variables«  Iµ yo⌡ arσ usinτ SANY╧ basiπ o≥ onσ ì
oµá thσ Basics that give≤ yo⌡ thσ ful∞ 64╦ memor• fo≥á datßá theε ì
you can easily use up to 18 files of 50 variables.  
     Yo⌡á caε alway≤ adΣ morσ file≤ b• usinτ tw∩ o≥ morσá prograφ ì
datßá disk≤ witΦ u≡ t∩ 1╡ differen⌠ file≤ oε eacΦá one«á  Howeve≥ ì
yo⌡á wil∞á no⌠á bσá ablσ t∩ transfe≥á datßá betweeεá file≤á whosσ ì
description≤ arσ oε tw∩ differen⌠ prograφ datß disks.
    
MAXIMUM FORM LENGTH                : 80 LINES
MAXIMUM NUMBER OF ENTRIES PER LINE : 10

     The maximum length of each form and the number of entries is 
limiteΣá b•á thσ Dimensioε (DIM⌐ statemen⌠ iε thσ FOR═ anΣá CFOR═ ì
program«á  Yo⌡ caε increasσ thσ limit≤ b• changinτ thσ dimension≤ ì
oµ thσ variables.

MAXIMUM NUMBER OF TRANSFERS        : 10
   per data disk

     Thσá maximuφ numbe≥ oµ transfer≤ i≤ limiteΣ b• thσ dimensioε ì
statemen⌠ iε thσ TRANSFE╥ anΣ CTRANSF┼ program.


èMAXIMUM NUMBER OF SUBTOTALS        : ON 3 FIELDS 
                                   : integer values 1 to 200

     Iµ yo⌡ neeΣ t∩ subtota∞ on field≤ witΦ value≤ highe≥ thaε 20░ ì
thσn changσ thσ dimensioε oµ thσ SUMAF#(3,200⌐ t∩ SUMAF#(3,400⌐ o≥ ì
whateve≥ anΣ hopσ yo⌡ don'⌠ ruε ou⌠ oµ memory.

     Therσ arσ othe≥ mino≥ limitation≤ iε thσ program«á  Mos⌠ arσ ì
associateΣ witΦ limitation≤ iε thσ dimension≤ oµ variables«á  Fo≥ ì
examplσá yo⌡á caεá onl•á adΣ u≡ t∩ ╢ othe≥á field≤á iεá aεá inpu⌠ ì
description«á  Iµ ruε int∩ aε "arra• ou⌠ oµ bound≤ erroró yo⌡ caε ì
probabl• redimensioε thσ arra• t∩ solvσ you≥ problem« 

                      PROGRAM LENGTH LIMITS    

     Dependinτá oε whicΦ versioε oµ Basiπ yo⌡ arσ usinτá yo⌡á ma• ì
havσ problem≤ witΦ thσ prograφ lengtΦ oµ thσ maiε program«á  Mos⌠ ì
version≤á oµ Basiπ restric⌠ yo⌡ t∩ 64╦ oµ prograφ anΣá variables«  ì
Thσá maiε prograφ i≤ current• jus⌠ abou⌠ a⌠ tha⌠ 64╦ limit«á  Thσ ì
compileΣá versioεá doe≤ no⌠ havσ thi≤ probleφ a≤á i⌠á allow≤á 64╦ ì
prograφáá plu≤á 64╦á oµá variables«áá  Iµá yo⌡á ruεá int∩á memor• ì
limitations¼á yo⌡á ma•á wan⌠ t∩ deletσ unuseΣ part≤ oµá thσá maiε ì
program«  Fo≥ busines≤ application≤ i⌠ i≤ strongl• suggesteΣ tha⌠ ì
yo⌡ usσ ß compileΣ versioε oµ thi≤ program«á  ┴ compileΣá versioε ì
wil∞á ruε threσ t∩ teε time≤ faste≥ theε thσ Basiπ version«á  Thσ ì
compileΣá versioεá wil∞ allo≈ yo⌡ abou⌠ threσ time≤á thσá memory«  ì
Thσ basiπ versioε wil∞ ruε ou⌠ oµ memor• ver• fas⌠ iµ yo⌡ ente≥ ß ì
largσ keylis⌠ anΣ ta° table≤ etc« 


                          BASIC VERSION 

     Iεá thi≤ manua∞ wheε wσ refe≥ t∩ thσ basiπ versioεá wσá meaε ì
thσá interperteΣá Basiπ version«á  Wheε ╔ refe≥ t∩á thσá compileΣ ì
versioε wσ meaε thσ compileΣ Basiπ version«  Thσ compileΣ versioε ì
i≤á compileΣá iεá Microsof⌠á Basiπ anΣ doe≤á no⌠á usσá thσá Basiπ ì
languagσ oε you≥ computer«  Iµ yo⌡ arσ usinτ thσ compileΣ versioε ì
yo⌡áá d∩áá no⌠á havσá t∩á worr•á abou⌠á an•á oµáá thσáá followinτ ì
incompatabilit• problem≤ witΦ thσ Basiπ version«  

                       MEMORY REQUIREMENTS

     T∩á ruε thσ Basiπ versioε you≥ compute≥ need≤ a⌠á leas⌠á 64╦ ì
fo≥á thσá program≤á anΣ variable≤ plu≤ memor• fo≥á thσá operatinτ ì
system¼á basiπ interperter¼á anΣ possibl• fo≥ thσ screen«  Iµ yo⌡ ì
arσá usinτ ß compute≥ whicΦ ha≤ thσ basiπ iε RO═ theε yo⌡ ma•á bσ ì
ablσ t∩ ruε thσ prograφ oε ß 128╦ computer«á  Mos⌠ computer≤ wil∞ ì
requirσ 192K« 
**********************  READ THIS SECTION  **********************
     Iµ yo⌡ arσ usinτ IB═ Basiπ yo⌡ wil∞ havσ t∩ invokσ thσ Basiπ ì
languagσá usinτ thσ BASI├ /S:51▓ t∩ allo≈ randoφ acces≤ file≤á u≡ ì
t∩ 51▓ bytes«  Yo⌡ wil∞ als∩ havσ t∩ ente≥ thσ commanΣ KE┘ OF╞ t∩ ì
turε off thσ lis⌠ oµ key≤ oε linσ 2╡ wheε usinτ thσ MAI╬ program«  ì
Yo⌡á ma• wan⌠ t∩ writσ thσ commanΣ KE┘ OF╞ int∩ thσ MAI╬á prograφ ì
iµ yo⌡ arσ usinτ IB═ basiπ ¿eg«á 5╡ KE┘ OF╞)«áWe  havσ no⌠ donσ ìèso for compatibility reasons.

*****************************************************************
READ THIS :
     Thσá Basiπá program≤á arσá distributeΣá iεá ACSI╔á forφá fo≥ ì
compatibilit• reasons«á  The• werσ saveΣ witΦ thσ ,┴ optioε (SAV┼ ì
"MAIN",A)«  Fo≥ faste≥ loadinτ oµ thσ programs¼ loaΣ eacΦ prograφ ì
theε savσ eacΦ prograφ withou⌠ usinτ thσ ,┴ optioε (SAV┼ "MAIN").
Iµá you≥ compute≥ use≤ 36░ ╦ disk≤ cop• thσ 32░ ╦ disk≤ t∩ 36░á ╦ ì
disks using " A: copy *.* b: ".
*****************************************************************
     Wσá havσ developeΣ thi≤ systeφ usinτ SANY╧ basiπ oε ßá SANY╧ ì
computer«á Wσá theε compilσ mos⌠ oµ m• program≤ oε thσá Microsof⌠ ì
Basiπá Compiler«á  SANY╧á Basiπ i≤ downwarΣ compatiablσ witΦá IB═ ì
Basic«á Iµá yo⌡ usσ IB═ Basiπ yo⌡ arσ goinτ t∩ ruε ou⌠ oµá memor• ì
ver•á fast«á Wσá sugges⌠ usinτ ß compileΣ versioε rathe≥á theεá ß ì
basiπ version« 
       
                 Differences in Basic Languages: 

     Thi≤á prograφá use≤á thσá followinτ command≤á whicΦá ma•á bσ ì
slightl• differen⌠ than the version of basic you are using.
     1. CLS - CLEAR SCREEN
     2. LOCATE - locates the position on the screen
     3. LOF( ) - returns the file length
     4. PRINT CHR$(8) - Moves the cursor back one space.
            ****  note IBM BASIC uses PRINT CHR$(29) ****  
    
     Iµá you≥á Basiπá doe≤á no⌠ suppor⌠ thesσá command≤á yo⌡á caε ì
usuall•á simulatσá thσá command≤á iεá you≥á language«á Thσá abovσ ì
command≤ were used onl• oncσ iε eacΦ prograφ iε ß subroutine.

                          PRINT CHR$(8)

NOT┼ ║á W┼ DISTRIBUT┼ TH┼ DAT┴ BAS┼ WIT╚ EITHE╥ C╚ ╜ ╕ FO╥á USER╙ ì
O╞ MICROSOF╘ BASI├ O╥ C╚ ╜ 2╣ FO╥ IB═ BASIC«á  YO╒ MA┘ O╥ MA┘ NO╘ ì
HAV┼ T╧ MAK┼ TH┼ FOLLOWIN╟ CHANGE.
 
     Iµá yo⌡ tr• thσ program≤ anΣ thσ promp⌠ doe≤ no⌠ contaiε thσ ì
cursor yo⌡ probabl• havσ t∩ makσ thi≤ change«á  Thσ promp⌠ shoulΣ ì
look like :
>__<
with the cursor just to the left of the >. 

     Iµá PRIN╘á CHR$(8⌐ doe≤ no⌠ movσ thσ curso≥ bacδá onσá spacσ ì
theεá yo⌡ ma•  neeΣ t∩ changσ thσ program«á  Looδ iεá you≥á BASI├   ì
manua∞á t∩á determinσ whicΦ ASCI╔ codσ wil∞ movσ thσ curso≥á bacδ ì
onσ space«  (IB═ BASI├ USE╥ I╘ I╙ CHR$(29⌐ )«  T∩ makσ thσ changσ ì
easie≥ fo≥ yo⌡ ╔  havσ useΣ PRIN╘ CHR$(CH⌐ s∩ tha⌠ yo⌡ onl•á havσ ì
t∩á changσá thσá valuσ oµ thσ variablσá CH«á  Iεá thσá operation≤ ì
program≤ changσ linσ 6▒ from:
       61 CH = 8     TO
       6▒á C╚á ╜ 2╣    o≥ whateve≥ ASCI╔ characte≥ wil∞ movσá thσ ì
curso≥ back«  D∩ thσ samσ thinτ iε thσ Custoφ Program≤ a⌠ linσ 7░ ì
anΣ iε thσ sor⌠ prograφ a⌠ linσ 10.
è
                               CLS

     Iµá you≥á compute≥á doe≤ no⌠ usσ CL╙ commanΣá t∩á clea≥á thσ ì
screeε theε yo⌡ mus⌠ replacσ i⌠ witΦ thσ commanΣ tha⌠ wil∞á clea≥ ì
you≥á screen«á  Thσá CL╙á i≤á a⌠ linσá 13000- iεá thσá operation≤ ì
program≤á linσ 500- iε thσ custoφ program≤ anΣ linσ 1500░ iεá thσ ì
sor⌠ program.

                             LOCATE 

     Iµ you≥ compute≥ doe≤ no⌠ usσ thσ LOCAT┼ commanΣ t∩ locatσ ß ì
positioε oε thσ screeε theε yo⌡ mus⌠ replacσ i⌠ witΦ thσá commanΣ ì
tha⌠á will«á  Thσá locatσ commanΣ i≤ useΣ oncσ iε thσá operation≤ ì
program≤ anΣ onl• oε linσ 13100- anΣ iε thσ CSCREE╬ program.

                             LOF( )

     Iµ you≥ compute≥ doe≤ no⌠ usσ thσ LO╞ commanΣ t∩ returεá thσ ì
filσá lengtΦá theε yo⌡ wil∞ havσ t∩ replacσ i⌠ witΦá thσá commanΣ ì
tha⌠á does«á  NOT┼á ***¬  Somσ version≤ oµ Microsof⌠á Basiπá wil∞ ì
suppor⌠á LOF¿á ⌐ bu⌠ i⌠ i≤ no⌠ documenteΣ iε thei≥ manua∞á  ****«  ì
Thσ Microsof⌠ Basiπ compile≥ wil∞ suppor⌠ thσ thσ LO╞ commanΣ bu⌠ ì
i⌠ i≤ no⌠ documenteΣ iε thei≥ manual«á Thσ commanΣ LOF¿ ⌐ i≤á no⌠ ì
useΣ iε thσ custoφ programs.

                    DISCLAIMER OF WARRANTIES

PRIO╥ T╧ USIN╟ THES┼ PROGRAM╙ REA─ THI╙ DISCLAIME╥ O╞á WARRANTIE╙ ì
AN─á TH┼ LICENS┼ AGREEMENT«á  I╞ YO╒ D╧ NO╘ AGRE┼ WIT╚ AL╠ O╞ TH┼ ì
CONDITION╙ THE╬ YO╒ AR┼ NO╘ LICENSE─ T╧ US┼ THI╙ PROGRAM.

Notσ ║ Thi≤ i≤ almos⌠ thσ samσ agreemen⌠ yo⌡ ge⌠ witΦ an• prograφ ì
yo⌡ purchasσ froφ IBM¼ Microsof⌠ o≥ an• othe≥ softwarσ firm.

Potomaπ Pacifiπ Engineerinτ Inc«á license≤ thi≤ prograφ solely oε ì
an "as is" basis.

Potomaπáá Pacifiπáá Engineerinτá shal∞á havσá n∩áá liabilit•áá o≥ ì
responsibilit•á t∩á Licenseσ o≥ an• othe≥ persoε o≥á entit•á witΦ ì
respec⌠ t∩ an• liability¼á los≤ o≥ damagσ causeΣ o≥ allegeΣ t∩ bσ ì
causeΣ directl• o≥ indirectl• b• thi≤ product¼á includinτ bu⌠ no⌠ ì
limiteΣáá t∩á interuptioεá oµá services¼áá los≤á oµá busines≤á o≥ ì
anticipator• profit≤ o≥ consequentia∞ damage≤ resultinτ froφá thσ ì
usσ o≥ operatioε oµ thi≤ program.

Potomaπá Pacifiπ Engineerinτ make≤ n∩ warranties¼á eithe≥ expres≤ ì
o≥ implieΣ regardinτ thi≤ program¼ it≤ merchantibilit• anΣ o≥ it≤ ì
fitnes≤ fo≥ ß particula≥ purpose«á  Licenseσ agree≤ tha⌠á Potomaπ ì
Pacifiπáá Engineerinτáá shal∞áá no⌠á bσá helΣá liablσáá fo≥áá an• ì
consequentia∞á damages¼á eveε iµ Potomaπ Pacifiπ Engineerinτá ha≤ ì
beeε adviseΣ oµ thσ possibilit• oµ sucΦ damages« 

     Al∞ computer≤ anΣ compute≥ program≤ malfunctioε froφ timσ t∩ ì
time«  I⌠ i≤ thσ entirσ responsibilt• oµ thσ use≥ wh∩ design≤ thσ ìèsysteφ t∩ :
1) Design backup procedures that will not allow you to incur  
     damages.
2) Design procedures to prevent fraud.
3⌐ Desigε manua∞ procedure≤ tha⌠ yo⌡ caε usσ whilσ you≥á compute≥ ì
     is out of order.    
4) Design systems that will not cause you significant  damages
     if the program or computer fails.

                       LICENSE INFORMATION

    EacΦá Prograφ anΣ thσ Manua∞ i≤ CopyrighteΣ 198┤á b•á Potomaπ ì
Pacifiπá Engineerinτá Inc«á  Thσá prograφ i≤á no⌠á sold«á  I⌠á i≤ ì
licenseΣ FRE┼ t∩ al∞ user≤ witΦ thσ followinτ restriction≤ :
1«á  Yo⌡á ma•á sel∞ o≥ givσ awa• an• prograφ tha⌠á contain≤á onl• ì
portion≤á oµ thσ operation≤ programs¼á o≥ spreadshee⌠á o≥á exper⌠ ì
systeφá withou⌠á paymen⌠ oµ royaltie≤  a≤ lonτ a≤á thσá followinτ ì
statement≤ arσ encloseΣ iε thσ manua∞ oµ you≥ prograφ :
                      
REQUIRED STATEMENTS FOR ALL PROGRAMS :

    Portions (C) Copyright
    Potomac Pacific Engineering Inc. 1984
    All rights reserved.
(end of required statement)

Wσá woulΣá appreciatσá i⌠ iµ yo⌡ referencσ ou≥á prograφá iεá you≥ ì
manual.  
                                                                      
2«á Yo⌡ ma• no⌠ distributσ an• modifieΣ program≤ tha⌠ contaiε an• ì
portion≤á oµ thσ custoφ program≤ no≥ ma• yo⌡ usσ an• portion≤á oµ ì
ou≥á prograφá iε ß datß basσ prograφ tha⌠ wil∞ competσá witΦá ou≥ ì
program«  Yo⌡ ma• no⌠ usσ an• par⌠ oµ ou≥ program≤ iε ß differen⌠ ì
datß base¼ spreadshee⌠ o≥ exper⌠ systeφ inferencσ enginσ program«  ì
┴á datß basσ prograφ i≤ defineΣ ß prograφ wherσ ß use≥ caε definσ ì
hi≤ owε file≤ (datß bases)«  

3«á Iεá thσá interest≤ oµ standardizatioε yo⌡ ma• no⌠á distributσ ì
modifieΣ version≤ oµ thσ programms«á Thσ program≤ anΣ thσá manua∞ ì
ma• no⌠  bσ modified«á Wσ encouragσ yo⌡ t∩ writσ an• enhancement≤ ì
t∩á thσ programs«á  However¼á kee≡ an• enhancement≤ iε ß separatσ ì
prograφá tha⌠ caε bσ mergeΣ witΦ ou≥ program≤ iµ an•á othe≥á use≥ ì
woulΣ likσ t∩ usσ you≥ enhancement«  Pleasσ senΣ u≤ ß cop• oµ an• ì
enhancement≤á o≥á modification≤ yo⌡ woulΣ likσ t∩ donatσá t∩á thσ ì
public¼ wσ wil∞ conside≥ addinτ theφ t∩ ou≥ program.

4«á Club≤á anΣ user≤ group≤ man• distribute copie≤ oµ thσ prograφ ì
witΦá thσá change≤á necessar• fo≥ thσ prograφá t∩á ruεá oεá thei≥ ì
computers«á  Fo≥á examplσá iµ ß T╔ user'≤ grou≡ manage≤ t∩ ge⌠á ß ì
prograφá runninτ oε thσ T╔ theε the• ma• distributσ thσá modifieΣ ì
program«á  Onl• nonprofi⌠  group≤ ma• sel∞ thσ datß basσ anΣ onl• ì
fo≥á ßá nomina∞á feσ t∩ cove≥ costs«á  Thσ program≤á ma•á no⌠á bσ ì
bundled with anything that is sold, without our written consent. 
     Wσá reservσ thσ righ⌠ t∩ withdra≈ thσ licensσ iµ an• oµá thσ ì
licensσ condition≤ arσ violated.
è            HOW TO WRITE PROGRAMS USING OUR DATA BASE

     Yo⌡á caε reducσ you≥ programminτ timσ b• 60Ñ t∩ 90Ñ b• usinτ ì
our Data Base to:
     - Set up your files.
     - Handle the data entry.
     - Handle the file access and file entry.
     - Handle all the output.
     Firs⌠á checδá iµá yo⌡á caεá pu⌠á you≥á applicatioεá oεáá thσ ì
spreadsheet«á  Theεá yo⌡ shoulΣ checδ anΣ seσ iµ yo⌡ caε pu⌠ you≥ ì
applicatioεáá oεá thσá datßá basσá withou⌠á writinτá an•áá custoφ ì
subroutines«áá  Thσáá Datßáá Basσá wa≤á designeΣáá fo≥áá busines≤ ì
applications«á  I⌠ caε handlσ comple° application≤ sucΦ a≤ Incomσ ì
Ta° form≤ anΣ Accountinτ withou⌠ modifications.
 
     Iµ you≥ applicatioε i≤ complex¼á i⌠ ma• requirσ yo⌡ t∩ writσ ì
somσá custoφ subroutines«á  Remembe≥ tha⌠ i⌠ i≤ ß lo⌠á easie≥á t∩ ì
writσá ß pagσ o≥ tw∩ oµ subroutine≤ thaε i⌠ i≤ t∩ writσ ßá thirt• ì
pagσ program«  
     
     Therσ arσ severa∞ eas• way≤ t∩ customizσ ou≥ datß base«  Thσ ì
firs⌠ i≤ t∩ customizσ thσ inpu⌠ routine« Fo≥ example¼ supposσ yo⌡ ì
wan⌠áá t∩á writσá ßá multivariatσá regressioεá analysi≤á program«  ì
Supposσá yo⌡ wan⌠ t∩ correlatσ ß person'≤ I╤ witΦá thei≥á grades« ì
You coulΣ se⌠ u≡ ß filσ like.
  Field 1 : Name
  Field 2 : IQ from test #1
  Field 3 : IQ from test #2
  Field 4 : IQ from test #3
  Field 5 : Median IQ test result
  Field 6 : Mean IQ test result
  Field 7 : High School Average Grade
  
     Usinτá thσá custoφá inpu⌠ prograφ yo⌡ coulΣ definσá al∞á thσ ì
entrie≤á t∩ bσ entereΣ b• thσ operato≥ excep⌠ Mediaε I╤ anΣá Meaε ì
IQ«á  Iεá thσ Custoφ Inpu⌠ prograφ definσ Mediaε I╤ t∩á bσá inpu⌠ ì
optioεá 1┤ anΣ Meaε I╤ t∩ bσ inpu⌠ optioε 15«á  An• inpu⌠á optioε ì
greate≥ thaε #1│ ha≤ t∩ bσ use≥ defined«  Movinτ bacδ t∩ thσ maiε  ì
prograφ looδ a⌠ linσ 4114░ whicΦ i≤ :
41140 ON IOPT(N) GOSUB 41400,41400,....43600,41800,53000,54000.
Oεá thσ inpu⌠ optioε thσ compute≥ wil∞ g∩ t∩ thσ subroutinσá tha⌠ ì
wil∞ calculatσ thσ value«á  No≈ yo⌡ caε writσ you≥ subroutine≤ a⌠ ì
53000,anΣ 54000.

     Durinτ thσ inpu⌠ optioε X(fielΣ number⌐ i≤ thσ valuσ oµá thσ ì
numeriπ fields«á Yo⌡ ma• wan⌠ t∩ writσ you≥ subroutinσ t∩ computσ ì
the mean IQ as:
53000 REM *****  COMPUTES GEOMETRIC MEAN
53100 TEMP# = X(2)*X(2) + X(3)*X(3) + X(4)*X(4)
53110 I# = TEMP#/3
53120 RETURN

Use the variable I# to return the value of the field.

Also note line 46140 printed below 
è46150 ON IOPT(N) GOSUB 46200,46200,.....43600,43800,53000,54000
Linσ 4615░ i≤ useΣ t∩ recomputσ you≥ field≤ iµ someonσ changσ onσ ì
oµá thσ fields«á  Fo≥ example¼á iµ thσ I╤ froφ tes⌠ ▒ wa≤ entereΣ ì
incorrectl•á anΣá theεá iµ i⌠ wa≤ correcteΣ, thσá compute≥á woulΣ ì
recalculatσ thσ meaε fo≥ you.

     No≈ thσ compute≥ wil∞ calculatσ thσ meaε anΣ mediaε fo≥ you«  ì
Supposσá yo⌡á havσá entereΣ iε thσá datßá fo≥á 2░á students«á  T∩ ì
calculatσ thσ correlatioε yo⌡ mus⌠ reaΣ al∞ oµ thσ records¼ storσ ì
thσ result≤ int∩ memory¼á anΣ theε calculatσ thσ correlation«  Iµ ì
yo⌡á werσ writinτ thσ prograφ yourselµ yo⌡ woulΣ neeΣ t∩ opeε thσ ì
file¼á fielΣ i⌠ conver⌠ al∞ thσ string≤ t∩ decimals,theε opeε thσ ì
result≤ file¼á fielΣ it¼ conver⌠ al∞ thσ number≤ t∩ strings¼ etc«  ì
Usinτá thσ datß basσ yo⌡ caε usσ thσ filσ prograφ t∩ se⌠ u≡á you≥ ì
outpu⌠ o≥ result≤ file.

Fo≥ example¼ se⌠ u≡ thσ result≤ filσ iε thσ followinτ manner:
   Field 1. - Name of Test
   Field 2. - Date of Test
   Field 3. - Correlation
   Field 4. - Slope
   Field 5. - Intercept

Firs⌠á ║á Se⌠ u≡ ß transfe≥ t∩ transfe≥ thσ sum≤ froφá ou≥á firs⌠ ì
filσ t∩ ou≥ outpu⌠ file«á  Fo≥ Example¼ Suφ fielΣ ▓ oµ thσ sourcσ ì
filσá anΣá senΣ thσ result≤ t∩ fielΣ │ oµ thσá outpu⌠á file«á Suφ ì
fielΣ ▓ agaiε anΣ senΣ thσ result≤ t∩ fielΣ ┤ oµ thσ outpu⌠ file«  ì
Suφ fielΣ ▓ (o≥ an• field⌐ anΣ senΣ thσ result≤ t∩ fielΣ ╡ iε thσ ì
outpu⌠ file«á  Yo⌡ obviousl• d∩ no⌠ wan⌠ thσ sum≤ transfered¼á wσ ì
arσá jus⌠á settinτ u≡ thσ transfer«á  Wσ arσ goinτ t∩ modif•á thσ ì
transfe≥á prograφ s∩ tha⌠ wσ wil∞ senΣ thσ correlation,slopσá anΣ ì
intercep⌠ t∩ thσ outpu⌠ field.

Iεá line≤ 21070-2151░ oµ thσ prograφ  transfe≥ thσ prograφá read≤ ì
eacΦ recorΣ iε thσ file«  Normall• thσ variable≤ arσ ove≥ writteε ì
eacΦ timσ ß recorΣ i≤ read«  Howeve≥ t∩ computσ thσ regressioε wσ ì
neeΣ t∩ kee≡ eacΦ variablσ iε memory«  SU#(field⌐ i≤ thσ valuσ oµ  ì
eacΦ numeriπ field«  Yo⌡ coulΣ changσ linσ 2150░ t∩ 
        21500 VAR(N,K) = SU#
        21505 NEXT K
o≥á yo⌡ coulΣ usσ somσ morσ comple° wa• oµ holdinτ thσ value≤á oµ ì
your variable.
     No≈ tha⌠ yo⌡ havσ you≥ variable≤ iε thσ computer'≤ memory, ì
yo⌡á wil∞á neeΣá t∩ writσ ßá subroutinσá t∩á computσá thσ ì
correlation¼ slopσ anΣ thσ intercept«  A⌠ thσ enΣ oµ thσ transfe≥ ì
optioεá thσ compute≥ wil∞ g∩ t∩ thσ subroutinσ 2560░ whicΦá move≤ ì
thσ sum≤  t∩ thσ targe⌠ file« G∩ t∩ you≥ subroutine« eg.:
        2560╡  GOSU┬ 55000

     Now¼á No≈á writσ you≥ subroutinσ computinτ thσá correlation¼ ì
slope, and the intercept.  Return the values as :
     SUM#(1) = (Correlation)
     SUM#(2) = (Slope)
     SUM#(3) = (Intercept)
     RETURN 
èThσá compute≥ wil∞ theε placσ thσ sum≤ iε thσ targe⌠ filσ iεá thσ ì
fielΣ numbe≥ yo⌡ specifieΣ wheε yo⌡ se⌠ u≡ thσ transfe≥ option.

                       SYSTEM DESIGN NOTES

     Wheεá designinτá ß systeφ i⌠ i≤ possiblσ t∩ writσá you≥á owε ì
menu≤á anΣ intergratσ theφ int∩ thσ program«á  Fo≥ examplσ iµ yo⌡ ì
werσ designinτ ß smal∞ hote∞ reservatioε systeφ i⌠ i≤ impractica∞ ì
t∩á traiε al∞ clerk≤ t∩ usσ thσ datß base«á  Als∩ usinτ thσá datß  ì
base¼ a≤ i⌠ is¼ woulΣ probabl• takσ t∩ mucΦ time«  Yo⌡ woulΣ wan⌠ ì
t∩ desigε ß singlσ screeε men⌡ witΦ simplσ choice≤ sucΦ a≤ :
    1. Check for open rooms
    2. Enter a reservation
    3. Cancel a reservation
Yo⌡á woulΣá theεá modif• ou≥ prograφ s∩ tha⌠ wheεá thσá "Ente≥á ß ì
reservationó optioε i≤ choseε thσ prograφ wil∞ g∩ straigh⌠ t∩ thσ ì
ne≈á entr•á section«á  Wheε thσ "checδ fo≥ opeε roomóá optioεá i≤ ì
choseε thσ datσ shoulΣ bσ requested¼ conver⌠ thσ datσ t∩ ß recorΣ ì
numbe≥á anΣ theε sho≈ thσ recorΣ containinτ thσ numbe≥á oµá room≤ ì
open«á Wheε thσ cance∞ ß reservatioε i≤ choseε yo⌡ shoulΣ rewritσ ì
thσ prograφ s∩ tha⌠ goe≤ t∩ correc⌠ recorΣ option«  

     Yo⌡á neeΣ t∩ kno≈ ho≈ t∩ prograφ iε Basiπ t∩ writσ you≥á owε ì
menu≤ a≤ explaineΣ iε thσ examplσ above«á Thσ remark≤ program≤ oε ì
disδ ▓ wil∞ hel≡ yo⌡ t∩ understanΣ thσ maiε program«á  Thσá tricδ ì
i≤ t∩ usσ thσ subroutine≤ tha⌠ wσ havσ alread• written«á  Yo⌡ ma• ì
wan⌠á t∩á usσá flag≤ t∩ contro∞ thσ prograφá flow«á  Iµá yo⌡á arσ ì
designinτá ßá largσá systeφá yo⌡á ma• wan⌠á t∩á chaiεá thσá FORM¼ ì
TRANSFER¼ SORT¼ CHANG┼ anΣ SCA╬ program≤ froφ thσ maiε program«  
     
     Wheεá designinτ systems¼á i⌠ i≤ possiblσ t∩ avoiΣá accessinτ ì
thσá prograφ datß disδ b• writinτ thσ variable≤ iεá thσá program«  ì
I⌠á i≤á als∩á strongl•á suggesteΣ tha⌠á yo⌡á distributσá compileΣ ì
version≤ a≤ the• ruε faste≥ anΣ caε usuall• acces≤ morσ memory.

                             REPORTS
     
     Yo⌡ caε generatσ simplσ report≤ usinτ thσ scaε program«á  Iµ ì
yo⌡á kno≈ ho≈ t∩ prograφ iε Basiπ yo⌡ caε modif• thσ scaε prograφ ì
to produce more complex reports.

                 INNER WORKINGS OF THE PROGRAMS 

     Thi≤á sectioεá describe≤ thσ programminτ detail≤ oµ ho≈á thσ ì
program≤ work«á  Yo⌡ d∩ no⌠ need t∩ reaΣ thi≤ sectioε t∩ usσá thσ ì
datß base«á  Thi≤ sectioε wa≤ writteε fo≥ programmer≤ wh∩ wan⌠ t∩ ì
modify the program. 

     Thσ custoφ program≤ arσ fairl• simple«á  Thσ custoφ program≤ ì
arσá useΣ t∩ se⌠ u≡ thσ prograφ datß disk«á  Thσ custoφá program≤ ì
arσá men⌡á driven«áá  The•á asδá yo⌡á fo≥á information¼á se⌠á thσ ì
variables¼á anΣá storσ i⌠ oε thσ prograφ datß disk«á  Thσá custoφ ì
program≤ se⌠ u≡ thσ variable≤ tha⌠ describσ thσ files¼á thσ inpu⌠ ì
data¼á thσ forms¼á thσ transfer≤ betweeε thσ files¼á thσ screens¼ ì
anΣ thσ numeriπ limits« 
è
     The CFILE PROGRAM sets up the FFILE. 
     Thσá FFIL┼á i≤á ß sequentia∞ acces≤ filσ tha⌠á contain≤á thσ ì
followinτ variables :    
     F$(n) - File Name of the n'th file
     NREC(n) - Number of fields in the n'th file
     L(n) - Length  of the n'th file
     FLDN$(n,t⌐á - fielΣ namσ of thσ t'tΦ variablσ, of n'th file 
     FTY(n,t) - field type  of the t'th variable, of n'th file
              1 = string
              2 = integer
              3 = single precision
              4 = double precision
              5 ╜ Dolla≥á anΣá cent≤á amount¼á samσá a≤á doublσ 
                  precision except it is printed with **$
     FL(n,t) - field length of the t'th variable, of the n'th file
     KY(n,t) - key list yes/no 
              1 = not a key     2 = is a key
     KEYLIST(n,t) - the list the number is a key to

     Thσá CINPUT prograφá read≤ thσ IPUT─ fo≥á eacΦá file«  ì
IPUTD▒á i≤á fo≥ thσ firs⌠ file¼á IPUTD▓ i≤ fo≥á thσá seconΣá filσ ì
IPUTD│ i≤ fo≥ thσ thirΣ filσ etc..
The IPUTD file contains the following variables.

     IOPT(n) = Input option for the n'th variable
Dependinτá t∩á thσá numbe≥á oµ thσ inpu⌠á optioεá thσá filσá als∩ ì
contains the extra information for the input option.
- If IOPT(n) = 1 (OPERATOR ENTRY) then the next entry is:
  PROMPT$(n) - is the prompt for the entry
- If IOPT(n) = 2 (GET FROM ANOTHER FILE) the next entries are:
  IFN(n) - input from file number
  IFLD(n) - input from this field number
  IRNFLD(n⌐ - inpu⌠ recorΣ numbe≥ equal≤ thi≤ fielΣ iε thσ sourcσ     ì
      field
- If IOPT(n) = 3 (ADD PREVIOUS FIELDS) then the next entries are:
  NOS(n) - Number of Summards = Number of fields to add
  ADDFLD(n,s) - Add this field - for s = 1 to nos(n)
- Iµá IOPT(n⌐á ╜á ┤á (SUBTRAC╘ PREVIOU╙á FIELDS⌐á o≥á 1┤á (DIVID┼    
     PREVIOUS FIELDS)
  SUBX(n) - Subtract or Divide SUBY(N) BY SUBX(N)
  SUBY(n) - 
- If IOPT(n) = 5 (MULTIPLY FIELDS)
  MULX(n)
  MULY(n)- Multiply this field by the above field
- If IOPT(n) = 6 (COMPUTE TAX) then the next entries are "
  X(1,n) - 1 = tax table constant 2; = tax table variable
  X(2,n) - tax table number  or field that contains table number
  X(3,n) - 1 = pay period constant 2; = pay period variable
  X(4,n) - pay period number or field that contains pay period #
  X(5,n) - field that is the single married field
  X(6,n) - field that contains the pay
- If IOPT(n) = 7 or 10,or 11 or 12 (OPERATIONS WITH CONSTANTS)
     Then the next entries are :
  KC(n) - constant
è  CFLD(n) - constant field that is operated on 
- Iµá IOPT(n⌐ ╜ ╕ o≥ ╣ (MAXIMU═ O╥ MINIMUM⌐ theε thσ nex⌠ entrie≤ 
     are:
  NOS(n) - number of fields to compare
  MAXMIN(n,t) - number of one of the fields to compare. for t = 1 
      to NOS(n)
 
   Thσá  CTRANSF┼ prograφ set≤ u≡ thσ TFE╥ file«á  Thσ TFE╥á filσ ì
contain≤ thσ followinτ variables«  
   MAXS - the number of transfers presently on the file
   DTOPT(s) - Direct Transfer Option 
       1 = yes    2 = no
   SUMOPT(s) - Transfer Sum Option; 1 = yes  2 = no
   SUMAFOPT(s) - Transfer Subtotal Option
   SN$(s) - Transfer Name
   SFN(s) - Source File number
Iµá thσá Direc⌠ Transfe≥ Optioε i≤ selecteΣá theεá thσá followinτ ì
variables are also on the file:
   RNTNBOPT(S) - Record target-file numbering option
     0 - record number = source file number
     ▒á t∩á 5░á - recorΣ numbe≥ equal≤ thσ valuσ oµá thi≤á sourcσ ì
       field
   D(S) - Dummy - for future expansion - Presently D = 1
   TFN(S) - Target file number
   NREC(TFN) - The number of records in the target file
   FLDTC(S,N,D) - Field type change, N=target file field number
     1 - No Change
     2 to 61 - Change with field from source file
   FLDTCT(S,N,D) - Field Target Change Type 
     1 - Add
     2 - Replace
     3 - Subtract
Iµ thσ suφ transfe≥ optioε i≤ chosen¼ theε thσ filσ als∩ contain≤ ì
thσ followinτ variable.
   KTSUM(S) - The number of sums you want transfered
   SUMFN(S,k)-Suφ filσ numbe≥ - Thσ filσ numbe≥ oµ thσ filσá yo⌡ 
               want the sum K transfered to
   SUMF(s,k)-Sum this field   - The number of the field you want 
               to sum. 
   SUMRN(s,k⌐á - Suφ RecorΣ Number«á  Thσ recorΣ numbe≥ yo⌡á wan⌠ ì
               the sum transfered to.
   SUMFLDN(s,k⌐á - Suφ fielΣ number«á  Thσ fielΣ numbe≥ yo⌡á wan⌠ ì
               the sum transfered to. 
   k is the k'th sum
Iµ thσ suφ witΦ subtota∞ transfe≥ optioε i≤ chosen¼ theε thσ filσ ì
als∩ contain≤ thσ followinτ variables«  
   KTSUMAF(s) - The number of subtotals you want transfered
   SAFFN(s,k⌐á - suφá filσ numbe≥ - Thσ filσ numbe≥ yo⌡ wan⌠á thσ 
                 subtotals transfered to.
   SAFADD(s,k) - Subtotal this field
   SAFACCTO(s,k) - Subtotals grouped by the value in this field.
   SAFFLDN(s,k) - Put the Subtotals in this field
   MAX(s,k) - Dummy for future expansion

     Thσá CFOR═ prograφ set≤ u≡ thσ thσ FORMLIS╘ Filσ anΣ ßá filσ ìèfo≥ eacΦ form«  Thσ formlis⌠ filσ only contain≤ thσ name≤ oµ eacΦ ì
form.
   FORM$(t) is the name of each form
Each Form is has its own file with the following data: 
   LN - number of lines on the form
   MF - main file
   SFO - Secondary file option - NOT USED for future expansion
   EN(t1) - number of entries on line t1
   CE(t1,t2) - column that the entry starts at
   TE(t1,t2) - the type of the entry
IF the TE(t1,t2) = 1 (STRING CONSTANT) the next entry is
   L$(t1,t2) - the string constant to print
If the TE(t1,t2) = 2 or 3 then the next entry is
   EFN(t1,t2) - the field number to get the data from

     Thσá CLIMIT╙á prograφ set≤ u≡ thσ IDE╪ filσ anΣá thσá MAXMI╬ ì
files.  The IDEX file contains for each file the following fields
IDEXA(f) - primary index    -not used unless programmed in
IDEXB(f) - secondary index  -not used unless programmed in
IDEXC(f) - terciary index   -not used unless programmed in
MFLG(f)  - maximum / minimum flag for the file
                2 - Yes there are limits
           1 or 0 - No there are not limits

     The MAXMIN file contaions the following variables:
MAXC#(f) or MAXD#(f) - the maximum for the field
MINC#(f) or MIND#(f) - the minimum for the field
    Tw∩ name≤ werσ useΣ fo≥ thσ variablσ sincσ thσ MAXDú namσ wa≤ ì
alread• allocateΣ t∩ thσ inpu⌠ optioε iε thσ maiε program.

     Thσá CSCREE╬ prograφ set≤ u≡ thσ SCTES╘ filσ anΣ thσá SCREE╬ ì
files«á  Thσ SCTES╘ filσ i≤ reaΣ b• thσ compute≥ t∩ checδ anΣ seσ ì
iµá ß custoφ screeε i≤ available«á  Thσ SCTES╘ filσ ha≤ onl•á onσ ì
variable :
SCRN(F) -    2   - A custom screen is available
          0 or 1 - Use the standard screen

Therσá i≤ ß SCREE╬ filσ fo≥ eacΦ filσ witΦ ß custoφá screen«á Thσ ì
screeεá file≤ havσ ß numbe≥ oε thσ enΣ correspondinτ t∩ thσá filσ ì
tha⌠á i⌠á i≤á thσá screeε for«á  Thσá Screeεá file≤á contaiεá thσ ì
followinτ variables:
SW$(1 to 18) - the 18 screen overlay lines
for each field :
  LE(t) - the line it goes on
  CE(t) - the column the field goes on
for each field for a key
  LEK(t) - the line the key goes on
  CEK(T) - the column the key goes on
RPT - repeating fields
      2 - yes
      0 or 1 - no
Iµá repeatinτ field≤ arσ specified¼á thσ followinτ variable≤á arσ ì
als∩ included.
LSTE - the number of the last non repeating field 
SUMF(t) - sum option for the repeating fields
è          2 - sum
          1 or 0 - do not sum

     Thσá CREA╠á prograφ set≤ u≡ thσ thσ REALTIM┼á filσá anΣá thσ ì
REAL1¼á REAL▓ file≤ etc«á Thσ realtimσ filσ contain≤ thσ realtimσ ì
flag for each file.
REALFLG(a) - Realtime flag for each file
                 1 = not realtime
                 2 = is realtime
The REAL1 file contains the realtime data for file 1 as :  
TGTRN - target record number equals the value of this field
FLD1 - transfer field 
TFLD1 - to this field
ADSUB1 - add or subtranct 1= add 2 = subtract
TFLD2 - also transfer FLD1 to this field
ADSUB2 - add or subtract
FLD2 - Transfer this field to
TFLD3 - To this field
ADSUB3 - add or subtract
TFLD4 - Also transfer FLD2 to this field
ADSUB4 - add or subtract
TFILE - transfer to this file

                     THE OPERATIONS PROGRAMS

     Thσá Operation≤á program≤á arσá thσá mos⌠á comple°á program≤ ì
included«á  Yo⌡ shoulΣ lis⌠ thσ program≤ ou⌠ oε pape≥ iµ yo⌡ wan⌠ ì
t∩ understanΣ ho≈ the• work«  Thσ majo≥ variable≤ arσ thσ samσ a≤ ì
thosσ listeΣ above«  Whilσ thσ custoφ prograφ set≤ u≡ thσ PROGRA═ ì
DAT┴ DISK¼ thσ operation≤ program≤ reaΣ thσ prograφ datß disδ anΣ ì
theε perform thσ operations«  
     The other major variables not listed above are :
A - the main file number that is open
B - the secondary file that is open
X$(n) - the n'th field of the first file that is open
Y$(n) - the n'th field of the second file that is open
RN - record number ì
ì
     Iε casσ yo⌡ haven'⌠ noticeΣ al∞ thσ operatioε program≤á havσ ì
thσá samσá structure«á  Thi≤ i≤ becausσ iε thσá previou≤á versioε ì
(2.2⌐á oµ thi≤ datß basσ al∞ thσ operation≤ program≤ werσ par⌠ oµ ì
onσá program«á  Wσá haΣ t∩ spli⌠ thσ prograφ u≡á becausσá i⌠á wa≤ ì
gettinτá to∩á largσá fo≥á thσ computer'≤á memory«á  Mos⌠á oµá thσ ì
subroutines and variables are the same in all of the programs. 

Thσ operation≤ program≤ contain≤ thσ followinτ majo≥ subroutines:

2300-2499 Disk Drive Selection Subroutine
2500-2545 Open and fields the First File
2550-2579 Open and fields Second file
2580-2596 Open and fields Third File    
7800-7999 Locate end of random access file
10000-10110 Reads FFILE
10900-10995 Put the program disk in the default drive warning
12000-12195 Prints records on the monitor
è12200-12500 Prints records on paper in expanded form
12500-12999 Prints records on paper in condensed form
13000-13099 Clear Screen 
13100-13590 Locate Subroutine
14000-14999 Data entry for integers < 100    
14100-14999 Data entry for integers
14200-14999 Data entry for single precision
14300-14999 Data entry for double precision
            Each Data Entry returns DT# for the number
15000-15999 Data entry for Strings with the length set to a 
            field length.
15030-15999 Data entry for Strings with the length set in the 
            program
            Each string entry returns A$ for the string
16000-16090 Make sure your printer is on warning
   
     Onσá probleφá yo⌡á ma• havσ i≤ witΦ thσá dimension≤á oµá thσ ì
arrays«á  Yo⌡á ma• neeΣ t∩ redimensioε somσ oµ thσ array≤ iµ you≥ ì
custoφ program≤ requirσ largσ number≤ oµ variables«á

                        THE SORT PROGRAM

     Thσ sor⌠ prograφ i≤ ß quicδ sor⌠ program«á  I⌠  sort≤ oε  u≡ ì
t∩á threσá field≤ b• multiplyinτ thσ valuσ oµ thσ firs⌠ fielΣá b• ì
100,00░á anΣá theε addinτ tha⌠ t∩ thσá seconΣá value«á  Thσá sor⌠ ì
prograφá i≤á rathe≥ shor⌠ anΣ eas• t∩ understand«á  Thσ tw∩á maiε ì
variables are :
  X(t) - the value to sort the data
  T(t) - the record the value came from

                        REMARKS PROGRAMS
Thσá remark≤á iε thσ prograφ shoulΣ hel≡  yo⌡ t∩á understanΣá thσ ì
program«á  Thσá remark≤ program≤ shoulΣ als∩ hel≡ yo⌡á understanΣ ì
thσ system«á  Thσ remark≤ progam≤ wil∞ no⌠ run¼ the• arσ provideΣ ì
a≤á extrß documentation«á  LoaΣ eacΦ remarδ prograφ theε LLIS╘ i⌠ ì
ou⌠ oε paper«   

             ERROR RECOVERY & COMPILING THE PROGRAM

     Yo⌡á caεá compilσ al∞ thσ program≤ excep⌠ thσá sor⌠á prograφ ì
directl• froφ thσ basiπ version«á  Thσ sor⌠ prograφá redimension≤ ì
anΣá redefine≤á thσ variable≤ t∩ handlσ botΦ string≤á anΣá numbe≥ ì
(whicΦá i≤ no⌠ alloweΣ b• thσ compiler)«á  Thσ compileΣá version≤ ì
als∩á havσ bette≥ erro≥ trappinτ programmeΣ in«á Wσ havσ no⌠á pu⌠ ì
mucΦá erro≥á trappinτá iεá thσ Basiπ versioεá becausσá thσá basiπ ì
interperte≥ itselµ ha≤ ß bette≥ erro≥ reportinτ anΣ trappinτ theε ì
i⌠á i≤ possiblσ t∩ prograφ in«á  Thσ basiπ interperte≥ tell≤á yo⌡ ì
wha⌠ linσ numbe≥ thσ erro≥ i≤ oε anΣ thσ typσ oµ error«á  Iµá thσ ì
erro≥á i≤á simplσ anΣ caε bσ correcteΣ theε yo⌡ caε typσ CON╘á t∩ ì
continuσ witΦ thσ program«  Iµ yo⌡ compilσ thσ basiπ versioε theε ì
you≥ prograφ wil∞ havσ n∩ wa• t∩ recove≥ eveε froφ ß simplσ erro≥ ì
sucΦ a≤ puttinτ iε thσ wronτ disδ unles≤ yo⌡ writσ you≥ owε erro≥ ì
trappinτá codσ in«á  Thσ extrß documentatioε oε disδá ▓á contain≤ ì
morσá informatioε oε ho≈ t∩ compilσ thσ program«á  Yo⌡ caε obtaiε ì
thσ compileΣ versioε froφ u≤ fo≥ $2╡ (i⌠ take≤ ╡ DSD─ disks).
è
****************  POTOMAC PACIFIC ENGINEERING INC.  *************

         WE OFFER THE FOLLOWING SERVICES AND PRODUCTS :
                                       
                             SUPPORT 
     
     Duσ t∩ thσ fac⌠ tha⌠ thi≤ prograφ i≤ distributeΣ fo≥ freσ wσ ì
canno⌠ offe≥ freσ suppor⌠ fo≥ thi≤ program«   Iµ severa∞ thousanΣ ì
peoplσ usσ thi≤ prograφ anΣ the• al∞ wanteΣ freσ suppor⌠ wσ woulΣ ì
g∩ bankrupt«  Iµ yo⌡ wan⌠ suppor⌠ froφ u≤ yo⌡ havσ t∩ pa• fo≥ it« 
Wσá chargσá $3░ pe≥ hou≥ suppor⌠ witΦ ß minimuφ oµ $1╡ pe≥á phonσ ì
call«á  Iµ havinτ you≥ questioε answereΣ i≤ no⌠ wortΦ $1╡ t∩á yo⌡ ì
theε i⌠ i≤ no⌠ wortΦ ou≥ timσ t∩ talδ t∩ you«á  Yo⌡ ge⌠ u≡ t∩ onσ ì
halµá hou≥á fo≥á $1╡ s∩ yo⌡ migh⌠ wan⌠ t∩ ge⌠á severa∞á question≤ ì
together before you call.  
 
                       CUSTOM PROGRAMMING
   
     Wσáá caεá se⌠á u≡á anΣá modif•á thσá datßá basσáá fo≥áá you≥ ì
applications«á  Sincσ wσ wrotσ thi≤ datß basσ wσ caε probabl• se⌠ ì
i⌠á u≡ anΣ modif• i⌠ iε ß fractioε oµ thσ timσ i⌠ woulΣ takσá yo⌡ ì
o≥á anothe≥á consultant«á  Cal∞ u≤ fo≥ aε freσ estimatσá oεá you≥ ì
custoφ programminτ requirements.

                       BASIC BASE PROGRAMS

Compiled Versions - $25.00 (on 5 DSDD disks)
     Runs faster then basic version 
     Caε addres≤ 64╦ oµ memory«á Note : You havσ thσ MAIN¼á FORM¼ ì
SCAN¼ SPREADSHEE╘ anΣ EXPER╘ program≤ alread• compileΣ oε disk≤ │ ì
and disk 4. 
 Program Updates - $20.00 
   UpdateΣ CorrecteΣ version≤ arσ releaseΣ approximatel• monthly.

     Al∞á oµá thσ abovσ program≤ havσ thσ samσá licensσá  a≤á thσ ì
basiπ version«á  I⌠ i≤ no⌠ recomendeΣ tha⌠ club≤ anΣ user≤ group≤ ì
distributσá thσ compileΣ versioε o≥ thσ sourcσ codσ fo≥ compilinτ ì
unles≤á the•á arσá goinτ t∩ senΣ ever• montΦá fo≥á thσá correcteΣ ì
versions«áá  Givinτá you≥á user≤á aεá outdateΣá versioεá i≤áá no⌠ ì
recomended«á  Sincσ wσ writσ anΣ develo≡ thσ prograφ wσ obviousl• ì
havσ thσ mos⌠ u≡ t∩ datσ correcteΣ version«  I⌠ i≤ suggesteΣ tha⌠ ì
yo⌡ ge⌠ you≥ update≤ froφ u≤ rathe≥ theε froφ ß user≤ grou≡ whosσ ì
update≤ ma• no⌠ bσ current« 
     
     Thσá abovσ program≤ arσ licenseΣ free«á  Yo⌡ arσ payinτá fo≥ ì
thσ disks¼á copying¼á firs⌠ clas≤ mail¼ anΣ handling«  Pleasσ usσ ì
the order form when ordering programs.


                POTOMAC PACIFIC ENGINEERING INC.
              P.O. Box 2027 Gaithersburg, Md 20879
                         (301) 977-1489


è                              
                         FEEDBACK WANTED

     Pleasσá senΣá u≤á an• feedbacδ tha⌠ wil∞á hel≡á improvσá thσ ì
future versions of this program.  We are looking for :
1«áá Informatioεáá oεá whethe≥á thσá prograφá run≤á oεá differen⌠ ì
compatiblσá computer≤á anΣá wha⌠á change≤á iεá thσá prograφá werσ ì
necessary
2.  Information on any errors in the program
3.  Any improvements suggestions for the program.
4.  Any application developed using the program
5.  Any improvements or additions to the manual

                      NOTES ON VERSION 3

     Thi≤á i≤á thσ thirΣ versioε oµ thσá datßá base«á  Thσá firs⌠ ì
versioεá wa≤á onl•á onσ prograφ anΣ al∞ thσ variable≤ haΣá t∩á bσ ì
defineΣá iεá thσ prograφ ie«á FTY(1,1⌐ ╜ 1«á Thσá seconΣá versioε  ì
consisteΣ oµ threσ programs«á  Thσ seconΣ versioε wa≤ t∩ largσ t∩ ì
ruεá oεá IB═á basic«á  Thi≤ i≤ thσ seconΣ editioεá oµá thσá thirΣ ì
version«á  Thσ nex⌠ editioε 3.▓ wil∞ bσ thσ correcteΣ versioεá oµ ì
3.▒ «  Additiona∞ correcteΣ version≤ wil∞ bσ releaseΣ abou⌠ ever• ì
othe≥á month«á Sincσ thi≤ i≤  thσ seconΣ editioε oµ versioε │á i⌠ ì
wil∞á (likσ al∞ programs⌐ havσ somσ bug≤ iε it«á  Pleasσ senΣá u≤ ì
an•á error≤ encountereΣ  anΣ thσ correction≤ tha⌠ yo⌡ ruε int∩ oε ì
thσ followinτ form«á  A⌠ leas⌠ wσ arσ debugginτ thσ program«  Ho≈ ì
man• time≤ ha≤ you≥ expensivσ worΣ processo≥ los⌠ you≥á document≤ ì
anΣ what arσ the• doinτ abou⌠ it.

     Therσá i≤á n∩ inde° iε thi≤ datß basσ becausσ 9╣á Ñá oµá thσ ì
user≤ d∩ no⌠ neeΣ aε indexeΣ datß base«á  Iµ yo⌡ arσ ß hacke≥ yo⌡ ì
wil∞ noticσ tha⌠ therσ wa≤ aε inde° whicΦ ╔ tooδ out«  Thσ amoun⌠ ì
oµá timσ saveΣ b• usinτ aε inde° (iµ any⌐ wa≤ vastl• exceedeΣá b• ì
thσ timσ i⌠ tooδ t∩ maintaiε thσ index«á  I⌠ sound≤ impressivσ t∩ ì
havσ ß filσ indexeΣ oε ╡ o≥ morσ fields«  I⌠ i≤ no⌠ s∩ impressivσ ì
waitinτ fo≥ thσ compute≥ t∩ maintaiε thσ indexes«á Yo⌡ caε obtaiε ì
thσá samσ resul⌠ b• scaninτ thσ entirσ file«á  I⌠ take≤ abou⌠ onσ ì
minutσ t∩ scaε aε entirσ flopp• disk«  Iµ onσ minutσ i≤ to∩ long¼ ì
yo⌡á caεá usσá ß RA═ disk«á  Yo⌡ caε usuall•á finΣá ßá recorΣá b• ì
scanninτá ß RA═ disδ iε onσ t∩ threσ second≤ whicΦ i≤ faste≥ theε ì
thσ timσ t∩ searcΦ aε indexeΣ flopp• disδ file«á Therσ arσá threσ ì
RA═á disk≤ program≤ tha⌠ arσ iε thσ publiπ domaiε (free⌐ anΣá yo⌡ ì
usuall• ge⌠ onσ witΦ ß memor• expansioε board«  Yo⌡ caε als∩ sor⌠ ì
ßá filσ anΣ theε usσ thσ "searcΦ ß sorteΣ filσ programó t∩ obtaiε ì
fas⌠ results«á  Iµ yo⌡ arσ usinτ ß harΣ disδ witΦ file≤ to∩ largσ ì
fo≥ ß RA═ disk¼á anΣ neeΣ instan⌠ datß retrieva∞ oε morσ theε onσ ì
fielΣá theε yo⌡ ma• wan⌠ t∩ usσ ß differen⌠ datßá base«á  Versioε ì
4.░ migh⌠ havσ aε optiona∞ index« 
     
                   SINGLE DISK DRIVE COMPUTERS

     Iµá yo⌡á arσá usinτ thesσ program≤ oε ßá singlσá disδá drivσ ì
computer¼á al∞ thσ program≤ wil∞ ruε excep⌠ thσ sor⌠ prograφá anΣ ì
thσá changσá prograφ (wheε usinτ thσ "creatσ ß subfileóá option)«  ì
Thi≤á i≤á becausσ thσ sor⌠ prograφ anΣ changσá prograφá reaΣá thσ ìèsourcσá filσá oε onσ disδ drivσ anΣ creatσ anothe≥ filσ witΦá thσ ì
SAM┼á namσ oε ß differen⌠ disδ drive«á  Yo⌡ caε ruε thσ sor⌠á anΣ ì
changσá program≤ b• changinτ thσ targe⌠ filσ namσ t∩ "TEMPóá (fo≥ ì
temporary⌐ o≥ othe≥ namσ differen⌠ froφ thσ filσ name«á  Thi≤á i≤ ì
oεá linσ 255╡ iε thσ changσ prograφ (255╡ OPE╬ "R",#2,"TEMP",L(A⌐ ì
⌐ anΣ linσ 922░ iε thσ sor⌠ prograφ (922░ OPE╬ "R"¼á #2¼ "TEMP",╠ ì
)«á  Afte≥á runninτá thσ sor⌠ o≥ changσ prograφ (wheεá usinτá thσ ì
creatσ ß subfilσ option⌐ thσ ne≈ filσ wil∞ bσ "TEMP"«á  Theε cop• ì
thσ "TEMPó filσ t∩ ß differen⌠ flopp• disδ anΣ RENAM┼ i⌠ bacδá t∩ ì
thσ filσ namσ i⌠ wa≤ createΣ from.



                  THIS PROGRAM IS LICENSED FREE

                      GIVE A FRIEND A COPY 

                GIVE A COPY TO YOUR COMPUTER CLUB 






.pa
è****************************************************************

                 Version 3.1  Error Report Form

Your Name:____________________________________________________
Address  :____________________________________________________
          ____________________________________________________
Computer: ____________________________________________________
Version of Basic : ___________________________________________
Memory of your Computer : ____________________________________

Error Description : __________________________________________
                    __________________________________________
                    __________________________________________
                    __________________________________________
Did the error : 1. Halt the program and print an error message
             or 2. Cause incorrect results?
List the incorrect results if any : __________________________
                       _______________________________________
Error Message if Any : _______________________________________
Which Program Was the Error in ? _____________________________
What Line Number Was the Error on ? __________________________
Were you able to correct the Error ? Yes ___      No ___  
How did you correct the Error ? 
  - Send a listing of the changes you made if possible
  _____________________________________________________________
  _____________________________________________________________
  _____________________________________________________________
  _____________________________________________________________
  _____________________________________________________________
  _____________________________________________________________
Any other comments : __________________________________________
  _____________________________________________________________
  _____________________________________________________________
  _____________________________________________________________
Doe≤á thσá erro≥ alway≤ occu≥ o≥ doe≤ thσ erro≥ onl• occu≥á unde≥ ì
certain conditions?  __________________________________________
  _____________________________________________________________
  _____________________________________________________________

Mail to :  Attn : Error 
                Potomac Pacific Engineering Inc.
                      Post Office Box 2027
                     Gaithersburg, MD 20879

     Wσá givσ freσ update≤ t∩ everyonσ submittinτ aε erro≥ repor⌠ ì
form«á  Pleasσá senΣ u≤ informatioε oε an• error≤ yo⌡á encounter«   ì
Pleasσá reaΣá thσ manual¼á especiall• thσ sectioεá oεá thσá basiπ ì
languagσ beforσ submittinτ aε erro≥ repor⌠ form« Thσ bug≤ iε thi≤ ì
prograφ d∩ no⌠ occu≥ ver• often«  Iµ yo⌡ ruε int∩ aε erro≥ durinτ ì
thσá firs⌠ fe≈ hour≤ yo⌡ arσ usinτ thσ softwarσ yo⌡ arσá probabl•  ì
doinτ somethinτ wrong«  

 

è
****************************************************************


                        UPDATE ORDER FORM

Your Name : ___________________________________________________
Street    : ___________________________________________________
City/State: ___________________________________________________
Zip Code  : _______________

Computer  : ___________________________________________________
Version of Basic : ____________________________________________
 
Do you want the updated Basic Version? Yes ____  No  ____
   What version do you have ? _______   
   $20.00 on 4 DSDD disks 
   $30.00 on 8 SSDD disks 
Do you want the Compiled Version ?     Yes ____  No  ____
   What version do you have ? _______
   $25.00 on 5 DSDD disks
   Not available on single sided disks 

Oversea orders add $3. Maryland Residents add 5% sales tax.
Firs⌠á Clas≤ Mail i≤ included«á  Wσ ship your order iεá les≤ ì
than 7 days.  Allow 2 to 3 weeks for postal delivery.

Mail to Potomac Pacific Engineering Inc.
        Post Office Box 2027
        Gaithersburg, MD 20879
******************************************************************

END OF VERSION 3.1 DATABASE MANUAL 11/07/84 last update





















    
è                    The Spreadsheet of Steel 

                           Version 1.0

REA─á AN─á AGRE┼á T╧á TH┼ LICENS┼ CONDITION╙á AN─á DISCLAIME╥á O╞ ì
WARRANTIES PRIOR TO USING THIS PROGRAM. 

     Thσá fastes⌠á wa• t∩ learε ho≈ t∩ usσ thσ spreadshee⌠ i≤á t∩ ì
tr•á i⌠á out«á  Yo⌡ canno⌠ damagσ you≥ compute≥ b•á runninτá thi≤ ì
prograφá o≥ an• othe≥ softwarσ program«á  Makσ ß backu≡á cop•á oµ ì
thi≤ disδ beforσ yo⌡ star⌠ tryinτ i⌠ out« 

                      Starting the Program

     Wσ havσ provideΣ yo⌡ witΦ botΦ thσ compileΣ anΣ sourcσá codσ ì
(interpretativσá version⌐á oµá thσá spreadsheet«áá  Thσá compileΣ ì
versioεá i≤á SS.EX┼ «á Thσ sourcσ codσ versioε i≤ SS.BA╙á «á  Thσ ì
compiled version requires 192K on all computers to run.
     Start the compiled version using the following steps:
1. Turn on your computer using MS-DOS or PC-DOS.
2. Put the spreadsheet disk in the default disk drive.
3. Type SS then press return.
     Start the basic version using the following steps:
1. Turn on your computer using MS-DOS or PC-DOS.
2. Load your basic language.
3. Put the spreadsheet disk in the default disk drive.
4. LOAD "SS"
5. RUN
     Iµá yo⌡á havσá problem≤á usinτ thσ basiπá versioεá reaΣá thσ ì
sectioεá iεá thσ databasσ manua∞ oε thσ difference≤á betweeεá thσ ì
basiπá languages«á  Iµ yo⌡ arσ usinτ IB═ Basiπ yo⌡ wil∞á havσá t∩ ì
turεá thσá Ke• oε ro≈ 2╡ ofµ usinτ thσ KE┘ OF╞ commanΣá  Yo⌡á caε ì
writσá thσ commanΣ int∩ thσ prograφ (8░ KE┘ OFF)«á  Thi≤ ha≤á no⌠ ì
beeεá donσá s∩á fo≥á compatibilit• reasons«á  Iµá yo⌡á arσá usinτ ì
Microsof⌠ Basiπ (no⌠ IB═ basic⌐ changσ linσ 7░ t∩ 7░ C╚ ╜ 8«  

     Wheεá firs⌠á startinτ thσ prograφ thσ firs⌠ thinτá displayeΣ ì
is:

                   S P R E A D S H E E T  1.0

       Copyright 1984 by Potomac Pacific Engineering Inc.

This program is licensed FREE to all users with some restrictions
      See the manual for more information on the license.

The files on your default disk drive are :

SS      .BAS    CHECK   .      TAX    .     SS      .EXE 

If you want to continue with an old spreadsheet enter the name
If you want to start a new spreadsheet then just press return.
>_______<
(end of the first displayed screen)
     Thσ file≤ Checδ anΣ Ta° arσ samplσ spreadsheets«  Jus⌠ pres≤ ìèreturεá t∩á star⌠á ß ne≈ spreadsheet«á  Thσá compute≥á wil∞á theε ì
displa• thσ followinτ screen║  

*



















***  ENTER THE OPTION NUMBER THEN PRESS RETURN ***   ON SCREEN 1
0-EXIT  1-INPUT NUMBER 2-INPUT OVERLAY 3-NEW NUMBER 4-CALCULATION
5-CLEAR   6-SAVE  7-BARCHART  8-PRINT SCREEN  9-PRINT DESCRIPTION
>__<
MOV┼ TH┼ ¬ USING A,Q,S,D,F,G,E,R,X,├áCHANG┼áSCREEN╙áUSIN╟ I,J,K,M
(end of screen)
   
    Thσá ¬ i≤ useΣ a≤ ß curso≥ t∩ marδ you≥ curren⌠á positioεá oε ì
thσá screen«á  Yo⌡ caε movσ thσ ¬ arounΣ b• enterinτ thσá letter≤ ì
A,Q,S,D,F,G,E,R,╪ anΣ C«  You≥ keyboarΣ i≤ probabl• se⌠ u≡ like

       Q   E R
        A S D F G
           X C        

The corresponding * movements are
   Q left 20             E up 1     R up 4
     ┴ lef⌠ ╡   ╙ lef⌠ ▒    ─ righ⌠ ▒    ╞ righ⌠ ╡  ╟árigh⌠ 20
                         X down 1   C down 4

Try moving the * around using the above letters.

     Yo⌡á caεá changσ screen≤ usinτ thσá letter≤á I,J,K,M«á  You≥ ì
keyboard is probably set up like :
       
           I                    I up one screen
         J   K        J left one screen   K right one screen
           M                    M down one screen

     Thσá screeε arσ 2░ line≤ dee≡ each«á  Thσ spreadshee⌠ i≤ se⌠ ì
u≡ witΦ 2░ screens«  Thσ screen≤ makσ u≡ onσ biτ spreadshee⌠ tha⌠ ì
i≤á fou≥á screen≤ acros≤ anΣ ╡ screen≤ deep«á  Iµ yo⌡á neeΣá morσ ìèscreen≤á anΣá yo⌡á kno≈ ho≈ t∩ prograφ iε Basiπá yo⌡á caεá easil• ì
changσá thσ sourcσ codσ t∩ allo≈ morσ screens«á  Thσ screen≤á arσ ì
se⌠ u≡ iε followinτ orde≥ :
   1   2   3   4
   5   6   7   8
   9   10  11  12
   13  14  15  16 
   17  18  19  20

    
    Afte≥á movinτ thσ ¬ t∩ thσ correc⌠ spo⌠ yo⌡ caε choosσ onσ oµ ì
the  following options.
 
                       0. EXIT THE PROGRAM

     Usσá thi≤á optioεá wheε yo⌡ arσ donσ anΣ wan⌠á t∩á exi⌠á thσ ì
program«áá  Yo⌡á wil∞á losσá you≥á spreadshee⌠á unles≤á yo⌡á havσ ì
previousl•á saveΣ thσ spreadshee⌠ usinτ optioε 6«á  Thσá compute≥ ì
wil∞á warε yo⌡ tha⌠ yo⌡ wil∞ losσ you≥ spreadshee⌠ anΣá givσá yo⌡ ì
the option to save it prior to exitting the program.

                        1. INPUT A NUMBER
  
     Thi≤á optioε i≤ useΣ t∩ ente≥ ß numbe≥ iε you≥á spreadsheet«  ì
Therσ ha≤ t∩ bσ ß numbe≥ iε thσ spo⌠ wherσ thσ ¬ is«á  Usσ optioε ì
numbe≥ │ iµ yo⌡ wan⌠ t∩ creatσ ß numbe≥ iε thσ spot«á  Thσ numbe≥ ì
▒ i≤ thσ defaul⌠ optioε iµ yo⌡ jus⌠ pres≤ return«á  Sincσ thi≤ i≤ ì
thσá mos⌠ useΣ optioε yo⌡ caε ente≥ you≥ datß faste≥ iµ yo⌡á jus⌠ ì
pres≤ returε insteaΣ oµ enterinτ thσ numbe≥ 1«á  Thσ ¬ shoulΣá bσ ì
placeΣ a⌠ thσ star⌠ oµ thσ numbe≥ no⌠ a⌠ thσ end«á  Thσ ¬ mus⌠ bσ ì
withiεá ╡ space≤ lef⌠ o≥ righ⌠ oµ thσ star⌠ oµ thσ numbe≥ fo≥ thσ ì
compute≥á t∩á finΣ thσ correc⌠ number«á  Thσá followinτá example≤ ì
demonstratσ thσ placemen⌠ oµ thσ ¬ :
      *_______0    right on
  *    _______0    Ok up to 5 spaces left
       _____*_0    Ok up to 5 spaces right
*      _______0    too far left
       ______*0    too far right

                      2. INPUT OVERLAY LINE 

    Thi≤á optioεá i≤á useΣá t∩ placσ word≤ o≥á letter≤á o≥á fixeΣ ì
number≤á no⌠ useΣ iε calculation≤ oε thσ screen«á  Movσ thσ ¬á t∩ ì
thσá correc⌠á spo⌠á oε thσ screeε wherσ yo⌡á wan⌠á t∩á placσá thσ ì
overla•á line«á  Ente≥ optioε ▓ theε pres≤ return«á  Thσ compute≥ ì
will prompt you with :

ENTER THE STRING 
>____________________________________________________________<

    Typσ iε thσ word≤ yo⌡ wan⌠ displayeΣ theε pres≤ return«á  Thσ ì
computer will place what you typed to the right of the *.
 
                      3. ENTER A NEW NUMBER

è     Thi≤ optioε i≤ useΣ t∩ creatσ ß spo⌠ fo≥ ß number«  Movσ thσ ì
¬ t∩ thσ spo⌠ wherσ yo⌡ wan⌠ t∩ ente≥ ß number¼á ente≥ thσ numbe≥ ì
│áand pres≤á return«á The computer will then ask :
 HOW DO YOU WANT THE NUMBER DISPLAYED 
 1-Standard Form   2-Dollar and Cents amount  3- None
Usσ ▒ fo≥ number≤ othe≥ theε dolla≥ amounts« Usσ ▓ fo≥ money« Usσ ì
│á iµ yo⌡ d∩ no⌠ wan⌠ ß numbe≥ here«á Thσ compute≥á wil∞á displa•  ì
*________░ o≥ $________░ wherσ thσ ¬ was«á  Thσ initia∞ valuσá oµ ì
thσ numbe≥ i≤ 0«  AvoiΣ puttinτ number≤ to∩ closσ togethe≥ oε thσ ì
samσ line« 
 
                      4. DEFINE CALCULATION

     Thi≤á optioε i≤ useΣ t∩ definσ ß calculatioε betweeε ▓ o≥á │ ì
numbers«á  Movσá thσ ¬ t∩ thσ numbe≥ fo≥ whicΦ yo⌡ wan⌠ t∩ definσ ì
thσ calculation«á  Ente≥ ┤ fo≥ thi≤ optioε anΣ theε pres≤ return«  ì
Thσá compute≥á wil∞á theεá sho≈á yo⌡á thσá followinτá calculatioε ì
options.
 
1. ADD - adds source number to target number
         The computer will ask you if you want to add any other 
         numbers to the target field and allow you to do so at
         the same time.  
2. SUB - subtracts source number from target number
         Note║á Thi≤á subtractioε i≤ se⌠ u≡ slightl•á differentl• ì
than you normally subtract.  For example : 

     Gross income $3,000     Add this number to take home pay
    -Tax            $340     Subtract this number from take home 
     --------------------
   Take Home Pay  $2,660 

Thσá subtractioεá wa≤á se⌠á u≡ thi≤ wa• becausσá therσá arσá man• ì
application≤á wherσá yo⌡á ma• wan⌠ t∩ AdΣá anΣá subtrac⌠á severa∞ ì
number≤ froφ onσ targe⌠ number«  Fo≥ Examplσ :

    Gross income $3,000     Add this number to take home pay
   -State Tax      $200     Subtract this number from take home
   -Federal Tax    $500     Subtract this number from take home
    -------------------
  Take home pay  $2,300    

3. MULT - multiply  source number by secondary number to give 
            target number
4. DIVIDE BY - divide source number by secondary number to give 
            target number
5. DIVIDE INTO - divide secondary number by source number to give
            target number
6. MAX - maximum, if source number is greater then target number
            then the target number equals the source number
7«á MI╬ - minimum¼ iµ thσ sourcσ numbe≥ i≤ les≤ theε target numbe≥ ì
            then the target number equals the source number
8. ADD K - add a constant to the source number to give the target 
            number
9«á MUL╘ ╦ - multipl• thσ sourcσ numbe≥ b• ß constan⌠ t∩ givσ thσ ìè            target number
10. N - K - subtract a constant from the source number to give
            target number
11. K-N  - subtract the source number from a constant to give the 
            target number
12«á N/╦á - dividσá thσ sourcσ numbe≥ b• ß constan⌠ t∩á givσá thσ     
            target number
13. K/N - divide a constant by the source number to give the 
            target number
14. - 20 - These calculation options are reserved for your custom 
            inpu⌠á options«á  Usσá thesσ option≤ iµ yo⌡á wan⌠á t∩ ì
            write your own subroutines for more complex           
            calculations.  Read the section on how the program 
            works if you want to use these subroutines.
    SE┼á YOU╥ BASI├ MANUA╠ FO╥ MOR┼ INFORMATIO╬ O╬ TH┼á FOLLOWIN╟ ì
CALCULATIONS : 
21. ABS - target field equals the absolute value of source field
22. ATN - target field equals the arctanget of source field
23. COS - target field equals the cosine of source field
24. EXP - target field equals the exponent of the source field
25. LOG - target field equals the logarithm of the source field
26. SIN - target field equals the sine of the source field
27. SQR - target field equals the square root of the source field
28. SQ  - target field equals the square of the source field
29. TAN - target field equals the tangent of the source field
30« DELET┼ - thi≤ optioε i≤ t∩ deletσ ß numbe≥ tha⌠ yo⌡ n∩ longe≥ ì
wan⌠ oε you≥ spreadsheet«á  Thi≤ i≤ no⌠ thσ samσ thinτ a≤á clear«  ì
Iµ yo⌡ deletσ ß numbe≥ i⌠ disappear≤ froφ thσ spreadshee⌠ anΣ caε ì
not be reentered.
    Afte≥á yo⌡á ente≥á whicΦ typσ oµá calculatioεá yo⌡á wan⌠á thσ ì
compute≥á wil∞ asδ yo⌡ t∩ movσ thσ ¬ t∩ thσ targe⌠ field«á  Afte≥ ì
yo⌡á havσ moveΣ thσ ¬ t∩ thσ targe⌠ fielΣ pres≤ return«á  Iµá yo⌡ ì
havσ specifieΣ ß calculatioε witΦ ß secondar• calculatioεá field¼ ì
thσá compute≥á wil∞ theε asδ yo⌡ t∩ movσ thσ ¬ t∩á thσá secondar• ì
calculatioεá numbe≥á anΣ pres≤ return«á  Iµ yo⌡ havσ specifieΣá ß ì
calculatioεá typσ witΦ ß constant¼á thσ compute≥ wil∞ asδ yo⌡á t∩ ì
ente≥ thσ constant«  
    Iµá yo⌡á havσá entereΣ thσ wronτ typσ oµá calculatioεá fo≥á ß ì
number¼á yo⌡á caεá ente≥á thσá correc⌠á typσá oµá calculatioεá b•  ì
reenterinτá ß calculatioε fo≥ ß number«á Thσ maximuφ anΣá minimuφ ì
function≤ comparσ thσ sourcσ numbe≥ witΦ thσ targe⌠ number«á The• ì
d∩ no⌠ comparσ ß lis⌠ oµ numbers«  Thi≤ work≤ finσ a≤ lonτ a≤ yo⌡ ì
d∩á no⌠ reducσ t∩ maximuφ numbe≥ o≥ increasσ thσ minimuφá number«  ì
Iµá yo⌡á d∩á reducσ thσ maximuφ numbe≥ o≥á increasσá thσá minimuφ ì
number¼áá yo⌡áá mus⌠á als∩á correc⌠á thσá targe⌠áá number«áá  Thσ ì
calculation≤ occu≥ a≤ thσ sourcσ number≤ arσ entereΣ b• you«á  Iµ ì
yo⌡ havσ entereΣ ß numbe≥ prio≥ t∩ defininτ ß calculatioε fo≥ thσ ì
number¼ thσ calculation≤ arσ NO╘ automaticall• performed«  Iµ yo⌡ ì
havσá entereΣá number≤á anΣá theεá specif•á aεá AD─á o≥á SUBTRAC╘ ì
calculatioεá  thσá compute≥á wil∞ no⌠ givσá thσá correc⌠á result≤ ì
unles≤á yo⌡á havσ cleareΣ al∞ thσ number≤ o≥á changσá thσá targe⌠ ì
fielΣá t∩ thσ correc⌠ number«á  Thi≤ i≤ becausσ thσ compute≥ add≤ ì
o≥á subtract≤á onl•á thσ changσ iε thσ sourcσá fielΣá becausσá i⌠ ì
assume≤ thσ origina∞ numbe≥ wa≤ alread• addeΣ o≥ subtracted«á  I⌠ ì
i≤á bes⌠ t∩ definσ al∞ thσ calculation≤ beforσ enterinτá numbers«  ìèAfte≥ clearinτ al∞ thσ number≤ thσ compute≥ wil∞ givσ thσ correc⌠ ì
results.
     Yo⌡á  caε onl• havσ onσ calculatioε typσ pe≥á number«á  Thi≤ ì
ma• bσ ß probleφ iµ yo⌡ wan⌠ t∩ adΣ acros≤ row≤ anΣ columns«  Yo⌡ ì
caεá alway≤á writσ you≥ owε subroutine≤ o≥ yo⌡ caε wai⌠á fo≥á thσ ì
nex⌠ versioε oµ thi≤ spreadsheet«  ┴ numbe≥ caε bσ ß targe⌠ fielΣ ì
fo≥áá onσá calculatioεá anΣá ßá sourcσá fielΣá fo≥á ßáá differen⌠ ì
calculation«á  ┴á numbe≥á caεá onl•á bσ ß sourcσá fielΣá fo≥á onσ ì
calculation.


                            5. CLEAR

   Thi≤ optioε set≤ al∞ thσ number≤ t∩ zero«á  I⌠ doe≤ no⌠ changσ ì
an•á oµ thσ string≤ o≥ an• oµ thσ calculatioεá types«á  Usσá thi≤ ì
optioεá wheεá yo⌡á wan⌠ t∩ ente≥ ß ne≈ se⌠ oµá number≤á fo≥á you≥ ì
spreadsheet«á  Yo⌡á shoulΣ savσ ß cop• oµ you≥ olΣ se⌠ oµ number≤ ì
beforσá usinτ thi≤ option«á  Thσ compute≥ wil∞ warε yo⌡ prio≥á t∩ ì
dumpinτ you≥ number≤ anΣ givσ yo⌡ thσ optioε t∩ savσ them.
 
                             6. SAVE
 
   Thi≤ optioε save≤ you≥ spreadshee⌠ oε disk«  Thσ compute≥ wil∞ ì
asδá yo⌡ thσ namσ oµ thσ spreadshee⌠ yo⌡ wan⌠ t∩ save«á  Thσ namσ ì
wil∞á bσ thσ filσ name«á  Al∞ filσ name≤ mus⌠ bσ ╕ character≤á o≥ ì
less«á  N∩á space≤á arσ allowed«á Thσ firs⌠ characte≥ mus⌠á bσá ß ì
letter«á  I⌠á i≤ suggesteΣ tha⌠ yo⌡ usσ ß shor⌠ descriptivσá namσ ì
followeΣá b• ß numbe≥ fo≥ eacΦ versioε oµ thσá spreadsheet«á  Fo≥ ì
examplσá ßá spreadshee⌠ tha⌠ i≤ useΣ t∩ balancσá ßá checkbooδá i≤ ì
"CHECK"«á CHECK▒ i≤ fo≥ January«  CHECK▓ i≤ fo≥ February«  CHECK│ ì
i≤ fo≥ March¼ etc« 
    Alway≤á makσá backu≡á copie≤ oµ importan⌠á data«á  Kee≡á ver• ì
inportan⌠á datßá oεá ßá pape≥á printou⌠á also«á  Iµá yo⌡á savσá ß ì
spreadshee⌠á witΦá thσ samσ namσ a≤ aε olΣ spreadshee⌠á yo⌡á wil∞ ì
overwritσ thσ olΣ spreadshee⌠ anΣ losσ it.

                           7. BARCHART

     Thi≤ optioε i≤ useΣ t∩ makσ ß simplσ asterisδ barchart«  Thσ ì
compute≥á wil∞ asδ yo⌡ t∩ movσ thσ ¬ t∩ eacΦ numbe≥ yo⌡ wan⌠á fo≥ ì
thσá barchart«á  Thσ compute≥ wil∞ theε asδ yo⌡ t∩ movσ thσ ¬á t∩ ì
thσá star⌠ oµ thσ labe∞ o≥ descriptioε yo⌡ wan⌠ printeΣá fo≥á thσ ì
number«á  Thσ compute≥ wil∞ theε asδ yo⌡ t∩ movσ thσ ¬ t∩ thσ enΣ ì
t∩á thσ labe∞ fo≥ eacΦ number«á  Thσ compute≥ wil∞ theε prin⌠ ou⌠ ì
fo≥á eacΦ number¼á it≤ label¼á it≤ numbe≥ anΣ aεá asterisδá grapΦ ì
proportiona∞ t∩ thσ othe≥ number≤ iε thσ graph.

                         8. PRINT SCREEN

    Thi≤ optioε print≤ thσ screeε oε pape≥ a≤ i⌠ i≤ showε oε you≥ ì
monitor«á  EacΦ screeε i≤ 2░ line≤ deep«  Thereforσ yo⌡ caε ge⌠ │ ì
screens on an 11 inch page using 6 lines per inch.  
    The computer will ask you :            
DO YOU WANT TO PRINT THE SCREENS TO THE RIGHT ALSO
 1- NO print only this screen  2- YES                    
è
    Iµá yo⌡á chosσ "N╧ prin⌠ thi≤ screeε onlyó thσ compute≥á wil∞ ì
prin⌠ thσ screeε exactl• a≤ i⌠ i≤ showε oε you≥ monitor.

    Iµá yo⌡ choosσ "YESó yo⌡ caε prin⌠ thσ screeε oε you≥ monito≥ ì
anΣ thσ  ▓ screen≤ t∩ thσ righ⌠ oµ it«á  Iε somσ spreadsheet≤ yo⌡ ì
ma• wan⌠ t∩ usσ morσ theε thσ 8░ column≤ availablσ oε onσ screen«  ì
Yo⌡á caε usσ 16░ column≤ oε tw∩ screen≤ o≥ 24░ column≤á oεá threσ ì
screens«á  Yo⌡á caεá prin⌠ u≡ t∩ 24░ column≤ iµ you≥ printe≥á caε ì
prin⌠ 24░ columns«  Yo⌡ probabl• havσ t∩ se⌠ you≥ printe≥  to it≤ ì
condenseΣ prin⌠ modσ (seσ you≥ printer≤ manua∞ fo≥ ho≈ t∩ d∩ it)« ì
Thσ compute≥ wil∞ asδ yo⌡ ho≈ man• column≤ oµ thσ spreadshee⌠ yo⌡ ì
wan⌠ t∩ print«á  Thσ compute≥ wil∞ theε prin⌠ thσ screeε oεá you≥ ì
monito≥á anΣá thσ screen≤ t∩ thσ righ⌠ oµ i⌠ u≡ t∩ thσ numbe≥á oµ ì
column≤á yo⌡á wan⌠ printed«á  Yo⌡ caε alway≤á prin⌠á eacΦá screeε ì
separatel•á thσn tapσ o≥ gluσ theφ togethe≥ iµ yo⌡ d∩ no⌠ havσá ß ì
widσ enougΦ printe≥ t∩ prin⌠ you≥ spreadsheet.

                      9. PRINT DESCRIPTION

    Thi≤á optioεá print≤ thσ value≤ oµ al∞á thσá variables«á  Yo⌡ ì
probably only want to use this option if you are a programmer.  

                  INNER WORKING OF THE PROGRAM

     Thσá remark≤á prograφ "SSREMARK.BASó i≤ thσá SS.BA╙á prograφ ì
witΦá remark≤á printeΣá ou⌠á oεá abou⌠ ever•á linσá t∩á hel≡á yo⌡ ì
understanΣá thσ program«á  Iµ yo⌡ arσ goinτ t∩ writσá an•á custoφ ì
subroutine≤á yo⌡ shoulΣ lis⌠ thσ prograφ ou⌠ oε pape≥ anΣ takσá ß ì
look at it to see how the program works.

     Thσá custoφá subroutine≤á 14,15,16,17,18,1╣ anΣá 2░á ma•á bσ ì
writteε oε line≤ 29300¼á 29400¼á 29500¼á 29600¼ 29700¼ 29800¼ anΣ ì
2990░ respectfully«á  Returε thσ valuσ oµ thσ targe⌠ valuσ a≤á X«  ì
Yo⌡ caε als∩ writσ somσ codσ oε line≤ 25300¼ 25400¼ 25500¼ 25600¼ ì
25700¼á 25800¼á anΣ 2590░ iµ yo⌡ wan⌠ t∩ specif• targe⌠ field≤ o≥ ì
secondar•á field≤á fo≥ you≥ calculations«á  Iµ yo⌡ arσá goinτá t∩ ì
writσá an•á custoφá subroutine≤ yo⌡ shoulΣ lis⌠ ou⌠á thσá remark≤ ì
program¼ SSREM« 

                      NOTES ON VERSION 1.0

     Thi≤á i≤á thσ firs⌠ versioε oµ thσá Spreadsheet«á  Thσá nex⌠ ì
versioε wil∞ probabl• contaiε morσ feature≤ anΣ shoulΣ bσ a≤ use≥ ì
friendl• a≤ thi≤ version«á  Wσ plaε oε addinτ morσ graphics¼  anΣ ì
addinτ command≤ t∩ enablσ yo⌡ t∩ handlσ large≥ spreadsheets«   
     Therσá arσ n∩ royaltie≤ oε application≤ oµ thi≤ spreadsheet«  ì
END OF SPREADSHEET MANUAL LAST UPDATE 8/30/84







è 
                   THE EXPERT SYSTEM OF STEEL

     Aε exper⌠ systeφ i≤ ß systeφ tha⌠ approximate≤ thσ judgemen⌠ ì
oµá ß humaε expert«á  Aε exper⌠ systeφ ma• bσ se⌠ u≡ t∩ ac⌠ a≤á ß ì
psychiatrist¼á automobilσ mechanic¼ ß physician¼ o≥ othe≥ expert«  ì
Aε Inferencσ Engine¼ whicΦ i≤ wha⌠ thi≤ exper⌠ systeφ technicall• ì
is¼ i≤ ß frameworδ tha⌠ use≤ variablσ rules¼ problems¼ questions¼ ì
problem≤á anΣá solutions¼á anΣ ß programmeΣ logiπ t∩á handlσá an• ì
numbe≥á oµ exper⌠ systems«á  Thσ advantagσ oµ aε inferencσ enginσ ì
i≤á tha⌠ yo⌡ caε se⌠ u≡ you≥ owε exper⌠ systeφ withou⌠ doinτá an• ì
programminτá jus⌠ b• enterinτá thσá questions¼á rules¼á problems¼ ì
solution≤ anΣ thei≥ relationship≤ Aε exper⌠ systeφ ask≤ question≤ ì
theεá provide≤ ß diagnosi≤ anΣ theε recommend≤ ßá solution«á  Thσ ì
firs⌠á halµá oµá thi≤ manua∞ explain≤ thσ basic≤ oµá thi≤á exper⌠ ì
systeφá anΣ ho≈ t∩ usσ thi≤ exper⌠ system«á  Thσ seconΣá par⌠á oµ ì
thi≤ manua∞ provide≤ informatioε oε ho≈ t∩ creatσ you≥ owε exper⌠ ì
systems« 

              How To Use The Expert System Of Steel

     Firs⌠ yo⌡ shoulΣ briefl• reaΣ thi≤ manual«á  Theε yo⌡ shoulΣ ì
jum≡á righ⌠ iε anΣ tr• usinτ thσ system«á Iµ yo⌡ don'⌠ understanΣ ì
anythinτ yo⌡ shoulΣ refe≥ bacδ t∩ thi≤ manua∞ fo≥ aε explanation« 

     Yo⌡á havσá beeεá provideΣ witΦ tw∩ version≤á oµá thσá exper⌠ ì
system¼ thσ compileΣ versioε ¿ EXPERT.EX┼ ⌐ anΣ thσ basiπ versioε 
¿á EXPERT.BA╙á )«á  Usinτ thσ compileΣ versioε i≤ easie≥ anΣá thσ ì
prograφ run≤ faster«  Thσ basiπ versioε i≤ provideΣ becausσ i⌠ i≤ ì
thσá sourcσá codσ anΣ caε bσ modified«á  T∩á star⌠á thσá compileΣ ì
versioε :
         1« Turε you≥ compute≥ oε witΦ you≥ operatinτ systeφ disδ ì
(MS-DOS or PC-DOS) in the default disk drive.
         2«á Afte≥á enterinτ thσ timσ anΣ datσ you≥ compute≥ wil∞ ì
displa• A║ 
         3. Put the expert system disk in the default disk drive.
         4. Type "expert" then press return.
A:expert   (press return)
         5. The program will load.
         6. The first screen will look like :

     Put the Expert System disk in the default disk drive 

     ******  THEN PRESS ANY KEY TO CONTINUE  *****

    The expert system only uses the expert system disk
Kee≡á i⌠á iεá thσá defaul⌠ disδ drivσ a⌠ al∞á time≤á durinτá thi≤ ì
program

(end of first screen)
    
     Thσ exper⌠ systeφ disδ i≤ thσ disδ witΦ thσ file≤á QUESTION¼ ì
PROBLE═S anΣ SOLUTIO╬ oε it«á  Iε thi≤ casσ thσ prograφ EXPERT i≤ ì
oεá thσ samσ disδ anΣ thσ disδ shoulΣ alread• bσ iεá thσá defaul⌠ ì
disδá drivσ  sincσ yo⌡ loadeΣ you≥ prograφ froφ it«á  D╧ NO╘ TAK┼ ìèTH┼á DIS╦á OU╘ ANYTIM┼ DURIN╟ TH┼ PROGRAM«á  Pres≤á an•á ke•á t∩ ì
continue.

     The second screen should look like :

    E X P E R T   S Y S T E M   P R O G R A M   1.0

  Copyright 1984 by Potomac Pacific Engineering Inc.

This program is licensed free to all users with some restrictions
      See the manual for more information on the license

*******************  DO YOU WANT TO  *********************
                1 - START A NEW PROBLEM
                2 - CONTINUE WITH A PRIOR ANALYSIS
********** ENTER THE NUMBER THEN PRESS RETURN  ***********

>__< 

(end of the second screen)

     Yo⌡á caεá eithe≥á star⌠ ß ne≈ probleφá o≥á continuσá witΦá ß ì
previou≤ analysis«á  Startinτ ß ne≈ probleφ mean≤ tha⌠ al∞ oµ thσ ì
answer≤á wil∞ bσ se⌠ a⌠ n∩ answe≥ anΣ thσ compute≥ wil∞ star⌠á a⌠ ì
thσá beginninτá b• askinτ yo⌡ al∞ oµ thσ introductor•á questions«  ì
Thσá othe≥á optioε i≤ t∩ continuσ witΦ ßá prio≥á analysis«á  Wheε ì
continuinτá witΦá ßá prio≥ analysi≤ thσ compute≥á wil∞á reaΣá thσ ì
answer≤á tha⌠ yo⌡ o≥ someonσ elsσ ha≤ saveΣ oε thσ disδ anΣá theε ì
continuσ witΦ thσ analysi≤ a⌠ thσ star⌠ node« 
     
    Iµ yo⌡ ente≥ ▒ fo≥ "star⌠ ß ne≈ problemó thσ compute≥ wil∞ g∩ ì
througΦá eacΦ question¼á settinτ thσ answe≥ t∩ N╧ ANSWE╥, next iµ ì
thσá questioεá ha≤ beeε designateΣ b• thσ systeφ designe≥á a≤á aε ì
introductor•á questioεá thσ compute≥ wil∞ asδ yo⌡ t∩á answe≥á thσ ì
question«á  Answe≥á thσ question«á  Iµ yo⌡ d∩ no⌠ kno≈á wha⌠á thσ ì
answe≥á i≤á yo⌡á ma• tel∞ thσ compute≥ tha⌠ yo⌡ d∩á no⌠á wan⌠á t∩ ì
answe≥ thσ questioε b• pressinτ thσ lette≥ ╬ fo≥ n∩ answer«  

    Iµá yo⌡á ente≥ ▓ fo≥ "continueΣ witΦ ßá prio≥á analysisóá thσ ì
compute≥á wil∞á displa• al∞ thσ file≤ oε thσ defaul⌠á disδá drivσ ì
theε asδ yo⌡ fo≥ thσ namσ oµ thσ filσ yo⌡ saveΣ thσ question≤ on, ì
tha⌠ yo⌡ wan⌠ t∩ continue.

    Oε you≥ firs⌠ timσ usinτ thσ systeφ ╔ woulΣ sugges⌠á enterinτ ì
"1óá t∩ star⌠ ß ne≈ problem«á  Thσ compute≥ wil∞ theε asδ yo⌡ thσ ì
introductor• questions.

     Thσá samplσ "expertó applicatioε i≤á ßá psychitrist«á  Don'⌠ ì
takσá thσá samplσá applicatioε to∩ seriousl• a≤á thσá rule≤á werσ ì
developeΣá mostl• fo≥ debugginτ purpose≤ anΣ no⌠ fo≥ thσá correc⌠ ì
psychoanalysis«á  ┴á rea∞ "expertó applicatioε woulΣ takσ u≡ mos⌠ ì
oµ thσ disδ spacσ whicΦ i≤ wh• sucΦ ß shor⌠ simplσ applicatioε i≤ ì
included«  

     Afte≥ yo⌡ answe≥ thσ introductor• question≤ o≥ thσá compute≥ ìèread≤á thσ answer≤ froφ thσ disδ thσ nex⌠ screeε shoulΣ looδ likσ ì
:

AT STARTING NODE 0
 # QUESTION                                   +  -  P  CK  CONT
1  Bad Physical Shape                         90 0  7  PC  CONT
5  Crazy (mental)                             90 70 9  NC  CONT
6  Lazy                                       0  80 6  NC  CONT
9  Stupid                                     0  0  5  NC  CONT
13 Evil                                       0  0  4  NC  CONT
16 Normal                                     50 0  2  C   CONT
BRANCH ? * NEGATIVE NBR TO OVERRIDE * 9999 TO OPTIONS 
                             COMPUTER RECOMMENDS 5
(end of screen)
                   Explanation of the Screen
Probleφ Numbe≥ - i≤ showε a⌠ fa≥ left«á  I⌠ i≤ thσ numbe≥ oµ eacΦ 
     problem that is a subproblems of the current node. 
Problem Description - the name of each problem
Probability For - is shown right below the + on the screen
     Thσá cumulativσá probabilit•  oµ al∞ thσ evidencσá tha⌠á thσ      ì
     probleφ exists
 Probability Against - right below the - on the screen
     The  cumulative probability of all the evidence that the    
     problem does not exist
Priority - Is shown right below the P on the screen. 
     The search priority 0 - lowest  9 - highest searched first
Checked - Is shown right below the CK on the screen
     C - all ready checked with all questions answered
     PC - partialy checked - already checked out 
          but not all of the questions have been answered
     NC - not checked
Continued - right below the CONT on the screen
     CONT - continued, there are further subproblems to this 
              problem
     END  - end, there are no further subproblems to this 
              problem

                   How The Problems are Set Up

     Thσá desigεá oµá thi≤á exper⌠ systeφ i≤ se⌠á u≡á iεá ßá treσ ì
structure«á  Thσá startinτ nodσ i≤ 0«á  Iε ou≥ samplσ applicatioε ì
the "tree" starts with the "branches"
1  Bad Physical Shape
5  Crazy (mental)
6  Lazy
9  Stupid
13 Evil
16 Normal
     
    EacΦá oµá Thesσ Branche≤ o≥ problem≤ branche≤ ou⌠á int∩á morσ ì
subproblems«á  Fo≥á examplσ thσ brancΦ "Craz• (mental)óá branche≤ ì
ou⌠ int∩ :
21 Psychotic
22 Neurotic
23 Mental Breakdown
è
    EacΦá oµá Thesσ Branche≤ o≥ problem≤ branche≤ ou⌠á int∩á morσ ì
subproblems«á  Fo≥á examplσ thσ "Psychotiπ ó branche≤ ou⌠ t∩á thσ ì
subproblems :
24 Schizophrena
25 Delusionary
26 Megalomanic
27 Can't distinguish between fact and fiction
28 Paranoid
29 Sadistic
30 Masochistic

     Thσ ParanoiΣ brancΦ branche≤ ou⌠ t∩ paranoiΣ typσ ┴ anΣ Typσ ì
┬ whilσ thσ othe≥ problem≤ d∩ no⌠ havσ an• furthe≥ subproblems.

     The tree of problems may also be visualized as :

                          0 - start node
    /        /         /      \          \              \
    1        5        6       9          13             16
  / /  \     |      /  \    /  \ \      /  \      /   /    \   \
 2  3  4     |     7    8   10 11 12   14  15    17  18    19  20
             |
        /    |     \             
      21     22    23
  continued  down through all the problems

    Thσ exper⌠ systeφ start≤ yo⌡ a⌠ thσ star⌠ node«  Thσ compute≥ ì
wil∞á recommenΣá tha⌠á yo⌡ explorσ thσ brancΦá witΦá thσá highes⌠ ì
priority tha⌠ ha≤ no⌠ alread• beeε explored«á  Thσ compute≥á wil∞ ì
continuσá t∩á explorσ thσ patΦ a≤ lonτ a≤ thσ probabilit• fo≥á i≤ ì
greate≥ thσ 4░ anΣ thσ probability agains⌠ i≤ les≤ theε 40«  

    Getting back to what is on your screen, the computer asks : 

BRANCH ? NEGATIVE NBR TO OVERRIDE * 9999 TO OPTIONS
                                         COMPUTER RECOMMENDS 5

     You have three options here: 
ENTERING A POSITIVE NUMBER      
     If you enter a positive number the computer will ask you the
questions which confirm or deny the existence of the problem. 
ENTERING A NEGATIVE NUMBER 
     Iµ yo⌡ ente≥ ß  negativσ numbe≥ thσ compute≥ wil∞ switchì
control of the analysis to that node on the tree
ENTERING  9999 ( or any number greater then 9999 )
     The computer will switch control to the options

                       ANSWERING QUESTIONS 

     Iµá yo⌡ ente≥ ß positivσ number¼á thσ compute≥ wil∞ asδá yo⌡ ì
thσ question≤ whicΦ confirφ o≥ den• thσ existencσ oµ thσ problem«  ì
Thσ numbe≥ oµ question≤ ma• var• forφ ▒ questioε t∩ 2░ questions«  ì
Thσ question≤ wil∞ bσ displayeΣ oε thσ screeε a≤ :

è1   3   Are you 1-male  2-female                   1=1     80
2   11  How many TV sets do you own               NA>3     60
3   19  Can you run 5 miles 1-yes 2-no            NA=1    -70
4   39  What is your IQ                           120>100 -80
WHICH QUESTION ? 1 to 4  ZERO FOR NONE , THEN ANSWER
(end of screen)

In this Screen :
    The first column is the number for the question. 
    The second column is the record number of the question.
    The words are obviously the question.
    Thσá fourtΦ columε i≤ thσ answe≥ fo≥ thσá question«á  Iµá thσ ì
question has not been answered then NA will be shown
    Thσ fifth columε i≤ thσ rule«  Thσ rulσ i≤ eithe≥ ╜ equals¼ ╛ ì
greater than, < less than or >< not equals.
    Thσá sixtΦá columεá i≤á thσ fac⌠ valuσá tha⌠á thσá answe≥á i≤ ì
compared against to determine if the rule is true or false.
    Thσá seventΦ anΣ las⌠ columε i≤ thσ probabilit• tha⌠ i≤á truσ ì
iµá thσ conditioε i≤ true«á  ┴ positivσ probabilit• support≤á thσ ì
existencσá oµ thσ probleφ whilσ ß negativσ probabilit• deny≤á thσ ì
existence of the problem. 
 
    The questions shown above may be read as follows:
1. If "male" then there is a 80% chance that the problem exists.
2. If more then 3 TV sets are owned there is a 60% chance that
    the problem exists.
3. Iµá yo⌡á caεá ruεá ╡ mile≤ therσ i≤ ß 70Ñá chancσá tha⌠á thσ ì
    problem does not exist.
4. If the IQ is greater than 100, there is a 80% chance that the
    problem does not exist.

    T∩á answe≥ thσ firs⌠ question¼á ente≥ thσ numbe≥ ▒ anΣá pres≤ ì
return«  Theε typσ iε thσ answer«  Al∞ thσ question≤ arσ answereΣ ì
witΦá numbers«á  Iµ thσ questioε ha≤ thσ option≤ 1-ye≤ 2-n∩á theε ì
ente≥ eithe≥ ▒ o≥ 2«  Thσ compute≥ wil∞ no⌠ accep⌠ an• alphabetiπ ì
character≤ excep⌠ fo≥ N«  Thσ lette≥ ╬ stand≤ fo≥ n∩ answer«  Yo⌡ ì
d∩ no⌠ havσ t∩ answe≥ an• oµ thσ question≤ iµ yo⌡ d∩ no⌠ kno≈ an• ì
oµ thσ answers«  Don'⌠ wastσ you≥ timσ reanswerinτ question≤ tha⌠ ì
arσá alread• answered«á  Yo⌡ ma• changσ an• oµ thσ answer≤ b• thσ ì
thσá samσá procedurσá oµ enterinτ thσ questioεá numbe≥á theεá thσ ì
answer«  

    Iε ou≥ samplσ se⌠ oµ fou≥ questions,thσ firs⌠ onσ i≤á alread• ì
answered«á  T∩á ente≥ aε answe≥ oµ teε fo≥ thσ seconΣ questioεá ¿ ì
ho≈ man• T╓ set≤ yo⌡ owε ⌐ thσ screeε wil∞ looδ likσ :
 
QUESTION ? 1 TO 4,  ZERO FOR NONE, THEN ANSWER
>2_<
>10______<
QUESTION ? 1 TO 4,  ZERO FOR NONE, THEN ANSWER
>0_<
(end of screen)
     Afte≥ yo⌡ ente≥ zer∩ fo≥ n∩ morσ questions¼ thσ prograφ wil∞ ì
recalculatσ thσ probabilit• fo≥ thσ problem«á  Iµ thσ probleφ ha≤ ì
morσá subproblem≤á anΣ thσ "probabilit• foró i≤ greate≥ theεá 40Ñ ìèanΣ thσ "probabilit• againstó i≤ les≤ theε 40%¼ thσ compute≥ wil∞ ì
changσá contro∞á t∩ displa• al∞ thσ subproblem≤á oµá thσá curren⌠ ì
problem«á   Yo⌡á ma• o≥ ma• no⌠ wisΦ t∩ explorσ thσá subproblems«  ì
Iµá yo⌡á d∩ no⌠ wan⌠ t∩ explorσ thσ subproblem≤ yo⌡ ma•á ente≥á ß ì
negativσ numbe≥ afte≥ thσ promp⌠ :
     
BRANCH ? * NEGATIVE NBR TO OVERRIDE * 9999 TO OPTIONS 
                                COMPUTER RECOMMENDS 5
>______<
 
     Iµá yo⌡á ente≥ ß negativσ number¼á thσ compute≥ wil∞á switcΦ ì
contro∞á t∩ thσ subproblem≤ oµ thσ positivσ valuσ oµá thσá numbe≥ ì
yo⌡á entered«áá  Iµá thσá negativσá numbe≥á yo⌡á entereΣá ha≤á n∩ ì
subproblem≤ thσ compute≥ wil∞ promp⌠ yo⌡ fo≥ anothe≥ number«á  Iµ ì
yo⌡á don'⌠ understanΣ this¼á ruε thσ prograφ anΣ seσ wha⌠ happen≤ ì
wheε yo⌡ ente≥ ß negativσ number«  Yo⌡ wil∞ usuall• wan⌠ t∩ ente≥ ì
ßá numbe≥ tha⌠ i≤ morσ toward≤ thσ star⌠ nodσ 0«á  Skippinτá froφ ì
onσ par⌠ oµ thσ treσ t∩ ß differen⌠ par⌠ i≤ no⌠ ß recommendeΣ wa• ì
t∩á conduc⌠ ß search«á  Yo⌡ caε alway≤ jus⌠ follo≈á thσá compute≥ ì
recommendations«  

                             OPTIONS

     Iµ yo⌡ ente≥ thσ numbe≥ 999╣ o≥ an• numbe≥ greate≥ theε 999╣ ì
after the prompt:

BRANCH ? * NEGATIVE NBR TO OVERRIDE * 9999 TO OPTIONS
                                COMPUTER RECOMMENDS 5
>9999___<
    
     The computer will then prompt you with :

** OPTIONS ** 0-NONE 1-SAVE 2-PRINT OPTIONS DISPLAYED ON PAPER
3-REVIEW ALL PROBLEMS 4-ALL QUESTIONS AND ANSWERS 5-PRINT PROBLEM
6-EXIT                                           
>__<
     The options are explained in the following sections:  
 
                            0 - NONE

     Thi≤á optioε return≤ yo⌡ t∩ thσ subproblem≤á yo⌡á previousl• ì
werσ exploring«   Thi≤ optioε i≤ usefull  iµ yo⌡ changσ you≥ minΣ ì
about using an option.
        
                            1 - SAVE

     Thi≤á optioε save≤ thσ answers¼á probabilitie≤ anΣ thσ path≤ ì
exploreΣá oε disδ s∩ tha⌠ yo⌡ ma• continuσ witΦ thσá analysi≤á o≥ ì
reexaminσá thσ result≤ latte≥ on«á  Thσ compute≥ wil∞ asδ yo⌡ fo≥ ì
thσ namσ oµ thσ filσ yo⌡ wan⌠ t∩ savσ i⌠ on«á  Thσ compute≥á wil∞ ì
theε savσ thσ informatioε oε thσ defaul⌠ disδ drive«  A≤ witΦ al∞ ì
files¼á iµá yo⌡á savσá thσ informatioε unde≥ thσá samσá namσá yo⌡ ì
previousl• used¼ yo⌡ wil∞ overwritσ (lose⌐ thσ origina∞ filσ witΦ ì
thσ samσ name«  
  
è              2 - PRINT OPTIONS DISPLAYED ON PAPER

     Thi≤ optioε print≤ thσ problem≤ anΣ subproblem≤ displayeΣ oε ì
thσá screeεá oεá paper«á  I⌠ doe≤ no⌠ changσ an•á oµá answer≤á o≥ ì
search path.  

                     3 - REVIEW ALL PROBLEMS

     The computer will display : 

                       PRINT OUT PROBLEMS
   
DO YOU WANT TO CHECK ALL PROBLEMS OR ONLY THOSE SEARCHED ?
           0 - RETURN
           1 - ONLY THOSE ALREADY SEARCHED
           2 - ALL - TAKES A LOT LONGER
>__<
(end of screen)

     Usσá ░á iµá yo⌡ havσ changeΣ you≥ minΣ anΣ d∩á no⌠á wan⌠á t∩ ì
revie≈ an• oµ thσ problems«á  Usinτ  optioε ▒ wil∞ checδ onl• thσ ì
option≤á tha⌠á yo⌡ lookeΣ at«á  Usinτ optioε ▓ wil∞á checδá ever• ì
probleφ anΣ takσ ß lo⌠ longer«  Iµ yo⌡ havσ searcheΣ thσ treσ anΣ ì
alread• lookeΣ a⌠ al∞ oµ thσ probablσ solution≤ yo⌡ probabl• onl• ì
neeΣ t∩ usσ optioε 1« 
    The computer will then display:
PRINT OUT ALL PROBLEMS WITH A PROBABILITY FOR HIGHER THEN 
    ENTER A NUMBER FROM -1 TO 100
>_____<
   AND WHOSE PROBABILITY AGAINST IS LOWER THEN 
    ENTER A NUMBER FORM  0 TO 101
>_____<
(end of screen)
    Thσá compute≥ wil∞ g∩ througΦ eacΦ probleφ anΣ displa• i⌠á iµ ì
i⌠ meet≤ thσ condition≤ yo⌡ entered«  Fo≥ examplσ yo⌡ ma• reques⌠ ì
thσá compute≥á t∩ displa• al∞ problem≤ witΦ ßá "probabilit•á foró ì
highe≥á thaε 50Ñ anΣ ß "probabilit• againstó lowe≥ thaε 50%«á  Iµ ì
yo⌡á entereΣá CHEC╦á ONL┘ THOS┼á PROBLEM╙á ALREAD┘á SEARCHE─á thσ ì
compute≥á wil∞á displa• thσ problem≤ tha⌠ werσá alread•á searcheΣ ì
tha⌠á mee⌠á thσ highe≥ thaε 50Ñ "probabilit• foró condition≤á anΣ ì
"probabilit• againstó lowe≥ thaε 50Ñ condition«á  Iµ yo⌡á entereΣ ì
CHEC╦á AL╠ PROBLEM╙ thσ compute≥ wil∞ displa• ever• probleφá tha⌠ ì
ha≤á ßá "probabilit•á foróá highe≥ thaε 50Ñá anΣá ßá "probabilit• ì
againstóá lowe≥á thaεá 50%«á  Iµ yo⌡ se⌠á thσá searcΦá limit≤á a⌠ ì
"probabilit• foró greate≥ theε -▒ anΣ "probabilit• againstó lowe≥ ì
thaεá 10▒ al∞ thσ problem≤ wil∞ mee⌠ thesσ condition≤ anΣ wil∞ bσ ì
displayed«  Conversel• iµ yo⌡ se⌠ thσ limit≤ a⌠ "probabilit• foró ì
greate≥ thaε 10░ anΣ "probabilit• againstó les≤ thaε ░ theεá nonσ ì
oµ thσ problem≤ wil∞ mee⌠ thσ conditions«   
     Thσ compute≥ wil∞ theε displa• :
    D╧ YO╒ WAN╘ TH┼ PROBLEM╙ 
1 - SHOWN ON THE SCREEN ONLY
2 - PRINTED ON PAPER AND SHOWN ON THE SCREEN
3 - PRINT ON PAPER WITH SUPPORTING RULES
>__<
è(end of screen)
    Iµá yo⌡á ente≥ ▒ thσ compute≥ wil∞ prin⌠ thσ option≤á oεá thσ ì
screeε only«á  Iµ yo⌡ expec⌠ ß lo⌠ oµ problem≤ t∩ bσ printeΣ theε ì
yo⌡ ma• wan⌠ t∩ havσ theφ listeΣ oε pape≥ sincσ yo⌡ caε onl• vie≈ ì
1░ problem≤ oε thσ screeε a⌠ onσ time« 

    Afte≥á thσá compute≥á ha≤ printeΣ ou⌠ al∞á thσá problem≤á thσ ì
computer will display : 

DO YOU WANT TO CONDUCT A SEARCH FOR ALL AND MULTIPLE SOLUTIONS
    1 - YES SEARCH
    2 - NO
>__<
(end of screen)

     Iµá yo⌡ choosσ 1-ye≤ thσ compute≥ wil∞ prin⌠ o≥ sho≈ oεá thσ ì
screeε al∞ thσ solution≤ tha⌠ solvσ an• onσ oµ thσ problem≤á tha⌠ ì
me⌠á thσá previou≤ conditions«á  Thi≤ optioε ma• no⌠ bσá useΣá iµ ì
therσá wa≤á morσ theε 25░ problem≤ tha⌠ mee⌠ thσá condition≤á yo⌡ ì
previousl•á specifieΣá ¿ Thσ compute≥ wil∞ tel∞ yo⌡ iµ therσá arσ ì
more then 250 problems).

                  4 - ALL QUESTIONS AND ANSWERS
     
     Thi≤á optioε i≤ useΣ iµ yo⌡ wan⌠ t∩ revie≈ thσ question≤ anΣ ì
answer≤.  The computer will display :
DO YOU WANT
  1 - ONLY QUESTIONS ANSWERED SHOWN
  2 - ALL QUESTIONS SHOWN
>__<
DO YOU WANT
  1 - SHOWN ON THE SCREEN ONLY
  2 - SHOWN ON THEN SCREEN AND PRINTED ON PAPER
>__<
(end of screen)
    Thσ option≤ arσ selµ explanatory«  I⌠ shoulΣ bσ noteΣ tha⌠ iµ ì
yo⌡á request al∞ question≤ showε iµ ma• takσ ß whilσ t∩á looδá a⌠ ì
hundred≤á oµá question≤ iµ thσ applicatioε contain≤á hundred≤á oµ ì
questions.  

                        5 - PRINT PROBLEM 

     Thi≤á optioεá print≤á ß singlσ probleφá oεá pape≥á witΦá it≤ ì
supporting rules (questions).

                            6 - EXIT

    Thi≤á optioε i≤ useΣ t∩ exi⌠ thσ program«á  Prio≥ t∩á leavinτ ì
thσ prograφ thσ compute≥ wil∞ warε yo⌡ tha⌠ yo⌡ arσ abou⌠ t∩ losσ ì
thσá answer≤ yo⌡ havσ entereΣ iµ yo⌡ havσ no⌠ saveΣ theφ anΣ givσ ì
you the option not to exit the program.

          EXPLANATION OF THE PROBABILITY CALCULATIONS

     Thi≤á exper⌠á systeφ use≤ tw∩ distinc⌠á probabilities«á  Thσ ìèPROBABILITY FOR i≤ thσ probabilit• tha⌠ thσ probleφá exits«á  Thσ ì
PROBABILITY AGAINST i≤ thσ probabilit• tha⌠ thσ problem≤ doe≤ no⌠ ì
exist«á  Wσá havσá electeΣ t∩ usσ tw∩ separatσá probabilitie≤á a≤ ì
opposeΣá t∩á onσ singlσ probabilit• a≤ tw∩ probabilitie≤á providσ ì
morσ informatioε t∩ thσ users«  Thσ probabilitie≤ havσ ß limi⌠ oµ ì
░á t∩á 100«á  Fo≥á examplσ thσá followinτá probabilitie≤á ma•á bσ ì
interpreteΣ a≤ :
 Probability  
For    Against                Meaning      
100    0               100% chance the problem exists
                       no evidence against
90     0               90% chance the problem exists
                       no evidence against
50     0               50% chance the problem exists
                       no evidence against
0      100             100% chance the problem is ruled out
                       no evidence for
0      80              80% chance the problem is ruled out
                       no evidence for
0      50              50% chance the problem is ruled out 
                       no evidence for
80     30              80% chance the problem exists
                       30% chance the problem is ruled out  
60     60              60% chance the problem exists
                       60% chance the problem is ruled out
90     90              90% chance the problem exists
                       90% chance the problem is ruled out 
                       This indicates probable incorrect answers
                         
      Firs⌠á yo⌡ shoulΣ noticσ tha⌠ thσ numbe≥ d∩ no⌠ havσ t∩ adΣ ì
u≡á t∩á 100«á  Iµá therσ i≤ evidencσ botΦ fo≥á anΣá agains⌠á eacΦ ì
probleφá thσá suφ oµ thσ probabilitie≤ ma• exceeΣá 100«á  Iµá thσ ì
probabilit• fo≥ anΣ agains⌠ arσ botΦ higΦ theε therσ i≤ ßá chancσ ì
onσ oµ thσ question≤ wa≤ answereΣ wrong«  
     Secondl•á lo≈ probabilitie≤ botΦ fo≥ anΣ agains⌠ cance∞ eacΦ ì
othe≥ out«á  Fo≥ examplσ iµ therσ i≤ ß probabilit• fo≥ oµ 30Ñ anΣ ì
ßáá probabilit•áá agains⌠áá oµá 30Ñá therσáá i≤áá probabl•áá jus⌠ ì
circumstantia∞á evidencσ botΦ wa• anΣ mean≤ abou⌠ thσ samσ a≤á 0Ñ ì
probabilit• fo≥ anΣ 0Ñ probabilit• against«  Oε thσ othe≥ hanΣ iµ ì
therσá i≤ ß probabilit• fo≥ oµ 80Ñ anΣ ß probabilit•á agains⌠á oµ ì
80Ñá yo⌡ probabl• answereΣ onσ o≥ morσ oµ thσ question≤ wronτá o≥ ì
thσ systeφ wa≤ se⌠ u≡ poorly« 
     
               HOW THE PROBABILITES ARE CALCULATED

     Fo≥á examplσ supposσ thσ probleφ "poo≥ physica∞á shapeóá ha≤ ì
the following rules :
1   Can you run 5 miles 1-yes 2 no               NA=1   -70
2   Can you swim 2 miles 1-yes 2 no              NA=1   -60
3   How many times a week do you exercise        NA<3    50
4   How for can you walk in miles                NA<3    60

    Thσá "NAóá Stand≤ fo≥ n∩ answer«á  Supposσá tha⌠á yo⌡á answe≥ ì
questioεá  threσá tha⌠á yo⌡á exercisσ zer∩á time≤á pe≥á weeδá anΣ ì
questioεá fou≥ tha⌠ yo⌡ caε walδ onl• onσá mile«á  Now¼á questioε ìèthreσá ha≤ probabilit• fo≥ oµ 5░ anΣ questioε ┤ ha≤ ßá proabilit• ì
fo≥á oµ 60«á  Yo⌡ migh⌠ thinδ tha⌠ wσ shoulΣ adΣ u≡ thσ 5░ anΣ 6░ ì
whicΦ equal≤ 110«  Howeve≥ yo⌡ canno⌠ havσ ß probabilit• oµ 110%«  ì
Iµá yo⌡ remembe≥ bacδ t∩ you≥ day≤ iε probabilit• anΣá statistic≤ ì
wheεáá addinτá tw∩á probabilitie≤á yo⌡á havσá t∩áá subtrac⌠áá thσ ì
probabilit•áá oµáá thei≥áá intersection«áá  Assuminτáá tha⌠áá thσ ì
probabilitie≤á arσ independen⌠ thσ probabilit• oµ aε intersectioε ì
i≤ .╡ time≤ .╢ whicΦ i≤ .│ «  110Ñ - .│ ╜ 80Ñ «  Aε easie≥ wa• t∩ ì
calculatσá thσ probabilit• assuminτ independen⌠ event≤ i≤á merel• ì
t∩á multipl• thσ differencσ betweeε thσ curren⌠ probabilit•á froφ ì
onσá hundred¼á multipl•á tha⌠á b• thσ probabilit•á tha⌠á yo⌡á arσ ì
adding¼ theε adΣ t∩ thσ olΣ probability«  Fo≥ example
       50% old probability + 60 %
                    100
                   - 50  old probability
                   ----
     + 30            50  x 60 = .30
       --
       80 new probability
     Thσ compute≥ doe≤ al∞ thσ abovσ calculations«á  Thσ example≤ ì
are just provided to show you what the computer is doing.
    Al∞á thσá subproblem≤á oµ ß probleφá assumσá thσá probabilit• ì
agains⌠ oµ al∞ thσ branche≤ tha⌠ i⌠ belong≤ to«á  Thi≤ i≤ becausσ ì
iµá therσá i≤á evidencσá tha⌠ yo⌡ arσ no⌠á craz•á theεá thσá samσ ì
evidencσá anΣ probabilit• applie≤ t∩ yo⌡ no⌠ beinτá psychotiπá o≥ ì
neurotic«á  However¼á notσá tha⌠á subproblem≤ d∩ no⌠á assumσá thσ ì
probabilit• fo≥ oµ thσ branche≤ the• belonτ to«á  Thi≤ i≤ becausσ ì
iµá yo⌡ arσ craz• i⌠ doe≤ no⌠ indicatσ tha⌠ yo⌡ arσ psychotiπá a≤ ì
yo⌡ coulΣ bσ anothe≥ subprobleφ oµ crazy.

                NOTES ON USING THIS EXPERT SYSTEM

    Firs⌠á oµ al∞ thi≤ exper⌠ systeφ o≥ an• exper⌠ systeφ ha≤á n∩ ì
commoε sense«  An• exper⌠ systeφ know≤ onl• thσ rules¼ questions¼ ì
problem≤á anΣá solution≤ tha⌠ i⌠ ha≤ beeεá programmeΣá with«á  Aε ì
exper⌠á systeφ doe≤ no⌠ kno≈ anythinτ outsidσ oµ thσ areß i⌠á ha≤ ì
beeεá programmeΣ in«á  Thi≤ exper⌠ systeφ wa≤ designeΣ t∩ bσ useΣ ì
a≤á aε aid¼á no⌠ thσ solσ authorit• iε arrivinτ a⌠á problem≤á anΣ ì
solutions«áá  Thσá subproblems¼áá rules¼á anΣá probabilitie≤á arσ ì
displayeΣ mos⌠ oµ thσ times«  Computer≤ arσ gooΣ a⌠ keepinτ tracδ ì
oµá hundred≤á oµ rules¼á questions¼á anΣá answers«á  Howeve≥á thσ ì
compute≥ doe≤ no⌠ havσ an• commoε sensσ thereforσ i⌠ i≤ u≡ t∩ yo⌡ ì
t∩ providσ thσ commoε sense«  
     Secondl•á an•á applicatioεá i≤ onl• a≤ gooΣá a≤á thσá rules¼ ì
questions¼á problems¼ anΣ solution≤ witΦ whicΦ i⌠ wa≤ se⌠ up« Thσ ì
samplσá applicatioεá shoulΣ demonstratσ thi≤ point«á  N∩á onσá i≤ ì
perfec⌠ anΣ eveε expert≤ disagreσ oε man• things«á  Thσ poin⌠á i≤ ì
jus⌠á becausσá aεá exper⌠á systeφá i≤ ruε oεá ßá compute≥á i≤á n∩ ì
indicatioε tha⌠ thσ result≤ i⌠ give≤ arσ correct«  
     
****************************************************************

                HOW TO SET UP YOUR EXPERT SYSTEM

     Thi≤á sectioε provide≤ thσ informatioε necessar• t∩ se⌠ you≥ ìèowεá exper⌠ system«á  I⌠ i≤ no⌠ necessar• t∩ reaΣá o≥á understanΣ ì
thi≤á sectioε iµ yo⌡ arσ onl• goinτ t∩ bσ usinτ aε exper⌠á systeφ ì
tha⌠á someonσá elsσá se⌠á u≡. 

     Thσá firs⌠á thinτ yo⌡ havσ t∩ decidσ i≤ whethe≥ thi≤á exper⌠ ì
systeφá caεá handlσá you≥ application«á  Thi≤á exper⌠á systeφá i≤ ì
limiteΣ b• thσ numbe≥ oµ questions¼á problems¼ anΣ solution≤ tha⌠ ì
caε bσ processed«á  Thσ wa• thσ systeφ i≤ currentl• se⌠ u≡ i≤ fo≥ ì
ßá maximuφá oµ 300░ questions¼á 100░  problem≤ anΣá aεá unlimiteΣ ì
numbe≥ oµ solutions«á  You≥ exper⌠ system≤ ma• bσ limiteΣ b•á thσ ì
memor•á addressablσ b• you≥ BASI├ languagσ anΣ thσ storagσá spacσ ì
oε you≥ flopp• disks«á  Yo⌡ caε alway≤ modif• thσ prograφ t∩ reaΣ ì
botΦá drivσ ┴ anΣ ┬ o≥ ß harΣ disδ o≥ yo⌡ coulΣ spli⌠ you≥ exper⌠ ì
systeφá int∩á severa∞ exper⌠ system≤ witΦ thσá samσá introductor• ì
questions« 
     Therσá arσ ß lo⌠ oµ application≤ tha⌠ arσ bette≥á solveΣá b• ì
algorithmiπá programs«á  Fo≥ examplσ ches≤ program≤ anΣ operatioε ì
researcΦ program≤ arσ bes⌠ designeΣ b• algorithmiπ programs« 
     Iµ yo⌡ d∩ no⌠ kno≈ mucΦ abou⌠ exper⌠ system≤ yo⌡ ma• wan⌠ t∩ ì
reaΣá ß booδ o≥ tw∩ oε exper⌠ system≤ beforσ yo⌡ tr• t∩ desigε aε ì
exper⌠ system«  Unfortunaltl• mos⌠ oµ thσ book≤ oε exper⌠ system≤ ì
arσá expensivσ anΣ nonσ tha⌠ ╔ havσ reaΣ werσ tha⌠ gooΣ s∩á ╔á d∩ ì
no⌠ havσ an• t∩ recommend« 

     Any expert system requires that the area of expertise have:
  1. a finite and known number of problems
  2. definable rules that support or deny each problem
  3. a finite number of known solutions

     Fo≥ example¼ i⌠ i≤ presentl• impossiblσ fo≥ aε exper⌠ systeφ ì
t∩á desigεá ßá housσá becausσ therσá i≤á aεá infinitσá numbe≥á oµ ì
combination≤ oµ rooms¼á dimensions¼ materials¼ etc« anΣ therσ arσ ì
n∩á definablσá rule≤ tha⌠ indicatσ wheε t∩ usσá whicΦá materials¼ ì
color≤á etc«á   Oεá thσá othe≥ hanΣ i⌠ i≤ possiblσ t∩á desigεá aε ì
exper⌠á systeφá t∩ diagnosi≤ fixinτ ß ca≥ becausσ thσá numbe≥á oµ ì
problem≤á i≤ finitσ anΣ therσ arσ knowε rule≤ t∩ determinσá iµá ß ì
par⌠ oµ thσ ca≥ i≤ broken« 

     Obviousl•á i⌠ help≤ iµ yo⌡ arσ aε exper⌠ o≥ ge⌠ hel≡ froφ aε ì
exper⌠ t∩ ge⌠ thσ correc⌠ rules¼ problem≤ anΣ solution≤ otherwisσ ì
yo⌡á coulΣ enΣ u≡ witΦ aε applicatioε a≤ incorrec⌠ a≤á m•á samplσ ì
application.

     Sincσ thi≤ prograφ i≤ writteε iε BASI├ anΣ yo⌡ arσá supplieΣ ì
witΦá thσá sourcσá codσá yo⌡ caε easil• modif• i⌠á t∩á adΣá extrß ì
feature≤á yo⌡á ma• neeΣ fo≥ you≥á exper⌠á system«á   Thσá prograφ ì
REM.BA╙á oεá disδ ┤ contain≤ remark≤ oε almos⌠ ever• linσ oµá thσ ì
program«á  Thσ remark≤ prograφ wil∞ no⌠ run«  Iµ yo⌡ arσ goinτ t∩ ì
modif• thσ prograφ yo⌡ shoulΣ loaΣ thσ prograφ REM.BA╙ theεá lis⌠ ì
i⌠ ou⌠ oε paper«  

                        SYSTEM STRUCTURE

     Thσá exper⌠á systeφá use≤ threσá file≤á QUESTION¼á PROBLEMS¼ ì
SOLUTION«  Thσ file≤ arσ se⌠ u≡ anΣ maintaineΣ usinτ thσ databasσ ìèprograφ MAIN.EX┼ «á  ReaΣ thσ Databasσ manua∞ fo≥ instruction≤ oε ì
ho≈ t∩ usσ thσ database«á   Usσ disδ 4¼á thσ exper⌠ systeφá disk¼ ì
fo≥ thσ prograφ datß disk« 

                          QUESTION FILE

     The question file has the following four fields :
1 Question             String with maximum length 50
2 Always Asked         Integer
3 Continued on Record  Integer
4 Dummy                Integer
    Thσá questioεá i≤ thσ questioε tha⌠ yo⌡ wan⌠ asked«á  Iµá yo⌡ ì
wan⌠á thσ questioε alway≤ askeΣ a≤ aε introductor• questioεá theε ì
ente≥ numbe≥ ▓ iε fielΣ 2«  Iµ yo⌡ caε no⌠ fi⌠ thσ questioε iε oε ì
5░á character≤ yo⌡ ma• continuσ i⌠ b• enterinτ thσ recorΣá numbe≥ ì
thσá questioε i≤ continue≤ oε iε fielΣ 3«á  Ente≥ ░ o≥ ▒á iεá thσ ì
continueΣá oεá recorΣ numbe≥ iµ yo⌡ d∩ no⌠ wan⌠ t∩á continuσá thσ ì
question«á  Iµá yo⌡ arσ oε aε ß continueΣ recorΣ ente≥ -▒ iµá thσ ì
questioεá i≤á no⌠ furthe≥ continueΣ o≥ -╪ ¼á ╪ beinτá thσá recorΣ ì
number the question if further continued on. 

                            PROBLEMS

     The problem file contains the following fields :
1. Description          String with maximum length 50
2. Subproblem to        Integer
3. Priority             Integer
4. Primary Solution     Integer
5. Continued on Record  Integer
6. Dummy                Integer
7. Rule-Type 1          Integer
8. Question-Rule 1      Integer
9. Fact Value 1         Single Precision
10. Probability 1       Single Precision
11. Rule-Type 2         Integer 
12. Question-Rule 2     Integer
13. Fact Value 2        Single Precision
14. Probability 2       Single Precision
15. Rule-Type 3         Integer 
16. Question-Rule 3     Integer
17. Fact Value 3        Single Precision
18. Probability 3       Single Precision
19. Rule-Type 4         Integer 
20. Question-Rule 4     Integer
21. Fact-Value 4        Single Precision
22. Probability 4       Single Precision
23. Rule Type 5         Integer
24. Question-Rule 5     Integer
25. Fact Value 5        Single Precision
26. Probability 5       Single Precision

     Thσá "descriptionóá i≤á thσá namσá oµá thσáá problem«áá  Thσ ì
descriptioε i≤ limiteΣ t∩ 5░ character≤ anΣ ma• no⌠ bσ continued.
     Thσá "subproblem t∩" numbe≥ i≤ thσ numbe≥ thσ probleφá i≤á ß ì
subprobleφá to«áá  Ente≥á ░á i⌠á i≤á ßá star⌠á nodσá anΣá ha≤á n∩ ìèsubproblems«á   Ente≥á 500░á iµ thi≤ recorΣ i≤ ß continuatioεá oµ ì
anothe≥ problem« 
     Thσá "priorityó i≤ thσ searcΦ patterε priority«á   Thσ rangσ ì
i≤ froφ ▒ (lowest⌐ t∩ ╣ (highest)«á  Thσ number≤ witΦ thσ highes⌠ ì
priorit• arσ searcheΣ first«   
     Thσá "primaryó solutioε i≤ thσ recorΣ numbe≥ oµ thσ solutioε ì
tha⌠ i≤ thσ mos⌠ recommend solutioε fo≥ thσ problem.
     Thσá"continueΣ" oε recorΣ numbe≥ i≤ thσá recorΣá numbe≥á thσ ì
probleφ i≤ continueΣ on«  Onl• thσ rule≤ ma• bσ continued«  Ente≥ ì
▒ o≥ zer∩ iµ thσ probleφ i≤ no⌠ continued«á  Usσ -X¼á ° beinτ thσ ì
recorΣá numbe≥á thσá probleφ i≤ continueΣ oεá iµá thσá recorΣá i≤ ì
alread•á continued«á  Ente≥á -▒ iµ thσ recorΣ i≤ thσ las⌠á recorΣ ì
that the problem is continued on. 
     Thσ dumm• variablσ i≤ no⌠ used«á  I⌠ ma• bσ useΣ fo≥ writinτ ì
specia∞ feature≤ int∩ thσ system.
     
     Oεá eacΦ recorΣ thσ probleφ ma• havσ fivσ rules«á  EacΦ rulσ ì
has four parts to it :
  Rule Type :  1 =, 2 <, 3 >, 4 ><
  Question-Rule : The question that corresponds to the rule
  Fact Value : The value the answer is compared against
  Probability : positive for probability for 
                negative for probability against

                          SOLUTION FILE 

     The solution file contains the following fields :

1. Description         String with maximum length 50
2. Continued on Record Integer
3. Dummy               Integer
4. Solves Problem 1    Integer
5. Success Rate 1      Integer
6. Solves Problem 2    Integer
7. Success Rate 2      Integer
8. Solves Problem 3    Integer
9. Success Rate 3      Integer
10. Solves Problem 4   Integer
11. Success Rate 4     Integer
12. Solves Problem 5   Integer
13. Success Rate 5     Integer

    Thσ descriptioε i≤ thσ namσ oµ thσ solution«  Thσ descriptioε ì
may not be continued. It is limited to 50 characters. 
    Thσ continueΣ oε recorΣ numbe≥ i≤ thσ numbe≥ thσ solutioεá i≤ ì
continueΣá oε «á  Ente≥ ░ o≥ ▒ iµ thσ solutioε i≤ no⌠á continued«  ì
Ente≥á -x¼á ° beinτ thσ numbe≥ thσ continueΣ oε recorΣ numbe≥á iµ ì
thσá solutioεá i≤á alreaΣy continued«á  Ente≥ -▒á iµá enterinτá ß ì
continued record that is not being further continued. 
    Thσá dumm• variablσ i≤ no⌠ used«á  I⌠ ma• bσ useΣ iεá writinτ ì
modification≤ t∩ thσ system«  Ente≥ an• numbe≥ yo⌡ want.
       
    Each record stores up to five solutions.
Solves Problem - the record number of the problem it solves
Success Rate - the success rate of the solution on this problem 
è    You can enter  a  negative success rate if the solution has
    a negative impact on certain problems that you want to point
    out.

     Yo⌡á ma• wan⌠ t∩ lis⌠ ou⌠ thσ file≤ PROBLEMS¼á SOLUTIO╬á anΣ ì
QUESTIO╬á fo≥á thσ samplσ applicatioε t∩ seσ ho≈ the• arσ se⌠á u≡ ì
anΣá ho≈ the• affec⌠ thσ wa• thσ systeφ runs«á  Usσ thσá databasσ ì
prograφ MAIN.BA╙ t∩ prin⌠ ou⌠ thσ files« 


              NOTES ON DESIGNING YOUR EXPERT SYSTEM

     Wσ woulΣ recommend tha⌠ yo⌡ desigε anΣ revie≈ you≥ systeφ oε ì
pape≥ beforσ yo⌡ star⌠ typinτ thσ datß iε t∩ thσ files«  
    Wσá recommendá thσ followinτ step≤ iε designinτá you≥á exper⌠ ì
system.  
    1. Write down on paper all the possible problems.
    2. Group the problems as subproblems of other problems.
         Kee≡á iεá minΣá tha⌠ peoplσ worδ bes⌠á witΦá ╖á o≥á les≤ ì
alternative≤á s∩á yo⌡á migh⌠ wan⌠ t∩ tr• t∩ limi⌠ thσá numbe≥á oµ ì
subproblem≤á t∩  7«á  Als∩ therσ i≤ onl• 2╡ row≤ oε computer≤á oµ ì
whicΦ thσ prompt≤ anΣ othe≥ informatioε take≤ u≡ severa∞ line≤ s∩ ì
yo⌡ shoulΣ tr• t∩ kee≡ thσ numbe≥ oµ subproblem≤ t∩ les≤ theε 10.
    3« Choose the questions.
         Iµá possiblσá i⌠ i≤ bes⌠ t∩ havσ ╡ o≥á fewe≥á questions«  ì
Yo⌡ ma• havσ u≡ t∩ 2░ questions«á  Iµ possiblσ chosσ ▓ o≥ │á eas• ì
t∩á answe≥ question≤ tha⌠ givσ thσ highes⌠ probabilit• fo≥ anΣá ▓ ì
o≥á │á question≤ tha⌠ wil∞ givσ thσ highes⌠ probabilit• tha⌠á thσ ì
highes⌠á probabilit• against«á  Iµ therσ arσ question≤á tha⌠á arσ ì
eas•á t∩ answe≥ tha⌠ wil∞ virtuall• confirφ o≥ den• thσ existencσ ì
oµ thσ probleφ d∩ no⌠ wastσ you≥ ou≥ you≥ user≤ timσ oε question≤ ì
tha⌠ providσ circumstantia∞ evidence«  Yo⌡ shoulΣ als∩ tr• t∩ usσ ì
thσá samσ questioε fo≥ morσ theε onσ probleφ iµ possiblσ t∩ lowe≥ ì
thσ numbe≥ oµ question≤ thσ use≥ mus⌠ answer«  Als∩ remembe≥ tha⌠ ì
al∞á question≤ mus⌠ bσ answereΣ witΦ ß numbe≥ s∩ yo⌡ arσá limiteΣ ì
t∩ multiplσ choicσ question≤ o≥ askinτ fo≥ numerica∞ data.
     3. Choose the solutions.
     I⌠ i≤ best¼á iµ possible¼á t∩ lis⌠ tw∩ o≥ morσ solution≤ fo≥ ì
eacΦá problem«á  Thi≤á i≤ becausσ therσ ma• bσ onσ solutioεá tha⌠ ì
wil∞ solvσ severa∞ oµ thσ problems«  
     4«á Ente≥á thσá questions¼á problem≤ anΣ solution≤ ont∩á thσ ì
file≤ usinτ thσ databasσ prograφ MAIN«  Usσ disδ ┤ a≤ thσ prograφ ì
data disk
     5«á  Tes⌠ anΣ debuτ you≥ application«  Yo⌡ caε modif• an• oµ ì
your files using the database program  MAIN. 

     Somσá application≤ ma• no⌠ neeΣ t∩ usσ thσ solutioεá featurσ ì
oµá thi≤á exper⌠ system«á  Yo⌡ havσ thσ sourcσ codσá s∩á yo⌡á caε ì
remove the solution options rather easily if you know BASIC. 
(end of Expert System Manual, last update 11/8/84)
```
{% endraw %}

## PRINTMAN.BAS

{% raw %}
```bas
5 CLS
10 PRINT "      This program prints the manual on paper "
20 PRINT ""
30 PRINT " MAKE SURE YOU PRINTER IS ON WITH 50 PAGES OF PAPER READY"
40 PRINT ""
45 PRINT "   PUT THE DISK MARKED MANUAL IN THE DEFAULT DISK DRIVE "
50 PRINT "              Press any key to continue "
55 PRINT ""
60 IF INKEY$ = "" THEN 60
70 INPUT " ARE YOU USING IBM BASIC ? (Y/N return) ";  I$
80 IF I$ = "y" OR I$ = "Y" OR I$ = "N" OR I$ = "n" THEN 100 ELSE 70
90 LPRINT " "
100 OPEN "R",#1,"MASTER.TXT",10
110 FIELD #1,10 AS AT$
200 REM
230 FOR T = 1 TO 20000
240 GET #1,T 
242 FOR T2 = 1 TO 10
244 A$ = MID$(AT$,T2,1)
300 C = ASC(A$)
310 IF C = 10 AND ( I$ = "Y" OR I$ = "y") THEN 580
400 IF C <= 127 THEN LPRINT A$;
450 IF C > 127 THEN LPRINT CHR$(C-128);
580 NEXT T2
590 NEXT T
620 LPRINT ""
9000 END
```
{% endraw %}

## PRTEXTRA.BAS

{% raw %}
```bas
5 CLS
10 PRINT "    This program prints the EXTRA DOCUMENTATION on paper"
20 PRINT ""
30 PRINT " MAKE SURE YOU PRINTER IS ON WITH 3  PAGES OF PAPER READY"
40 PRINT ""
45 PRINT "   PUT THE DISK MARKED REMARKS IN THE DEFAULT DISK DRIVE "
50 PRINT "          Press any key to start printing."
60 IF INKEY$ = "" THEN 60
100 OPEN "R",#1,"EXTRA",10
110 FIELD #1,10 AS AT$
200 REM
230 FOR T = 1 TO 10000
240 GET #1,T 
242 FOR T2 = 1 TO 10
244 A$ = MID$(AT$,T2,1)
300 C = ASC(A$)
400 IF C <= 127 THEN LPRINT A$;
450 IF C > 127 THEN LPRINT CHR$(C-128);
580 NEXT T2
590 NEXT T
620 LPRINT ""
9000 END
```
{% endraw %}

## REMARKS1.BAS

{% raw %}
```bas
2 PRINT FRE(0) / PRINTS MEMORY AVAILABLE
3 DEFDBL X  / VARIABLES STARTING WITH X ARE DOUBLE PRECISION
4 DEFINT A-W,Y-Z / ALL OTHER VARIABLES ARE INTEGERS
5 DIM F$(15),FLDN$(15,28),FTY(15,28),FL(15,28),IOPT(28)
6 DIM PROMPT$(28),IFN(28),IFLD(28),IRNFLD(28),NOS(28),ADDFLD(28,6)
7 DIM SUBX(28),SUBY(28),MULX(28),MULY(28)
8 DIM XKEY(28),YKEY(28),CMOPT(28),MAXMIN(28,6)
9 DIM KC(28),CFLD(28)             
10 DIM X$(28),Y$(28)
13 DIM L(15),NREC(15),Z$(28),KT(28)
14 DIM X(28),CK$(28),SN$(28)
16 DIM KEYLIST(15,28),L$(10,50),LEND(28),CL(28)
18 DIM SU%(28),S!(10)
20 DIM XL(40)
21 DIM TX(6,28)
25 DIM S#(28)
26 DIM MAX(10),Z%(10)
30 DIM GFLG(28)
35 DIM K$(80)
40 DIM FS(30),PP(30),MS(30),MIND#(30),MAXD#(30),TAX#(30),PCT!(30),OVR#(30)
42 DIM MAXK(10)
44 DIM SCRN(40),LE(28),CE(28),LEK(28),CEK(28),SW$(18)
46 DIM REALFLG(28)
50 DIM SUMF(28),SUM#(28)
52 DIM SHOW(30),MAXC#(30),MINC#(30)
54 DIM MAXC(28),MINC(28),MFLG(28)
61 CH = 29 / CH IS THE ASCII CODE THAT MOVES CURSER BACK ONE SPACE
62 GOSUB 50000 / PRINT INTRO ON SCREEN
63 GOSUB 16800 / HARD DISK OPTION 
65 GOSUB 27000 / READ CUSTOM SCREEN FLAG
80 GOSUB 10000 / READ FFILE (FILE DESCRIPTION)
90 GOSUB 29000 / READ LIMITS FLAG
95 GOSUB 60000 / READ REALTIME DATA FLAG OPTION
100 REM
400 GOSUB 13000 / CLEAR SCREEN
402 IF KD < 5 THEN GOSUB 11000 / READ KEYLIST IF NOT ALREADY IN MEMORY
403 ROPEN = 0 / FLAG, REALTIME TRANSFER FILE IS CLOSED
404 GOSUB 13000 / CLEAR SCREEN
406 TWOOPEN = 0 / FLAG, FILE TO GET DATA FROM IS CLOSED
410 PRINT "******  INPUT AND OUTPUT OPTIONS  --  WHAT FILE DO YOU WANT:  *****"
420 PRINT ""
425 PRINT " 0  - *** EXIT THE PROGRAM ***"
430 FOR I = 1 TO MAXF / STARTS LOOP PRINTING FILE NAMES
440 PRINT I;TAB(5) " - ";F$(I) / PRINTS FILE NUMBER AND NAME
450 NEXT I / END LOOP PRINTING FILE NAME
460 PRINT ""
470 PRINT "***** ENTER THE NUMBER OF THE FILE YOU WANT THEN PRESS RETURN *****"
475 GOSUB 14000 / INPUT INTEGER LESS THEN 100
477 IF DT# < 0 OR DT#>MAXF  GOTO 475 / CHECKS THAT OPTION NUMBER IS IN LIMITS
480 A = DT# / SETS A = TO VALUE RETURNED FROM 14000 SUBROUTINE
482 IF A = 0 GOTO 51000 / GOTO END PROGRAM
483 GOSUB 13000 / CLEAR SCREEN
484 PRINT "FILE : "; F$(A) /PRINTS FILE NAME
485 GOSUB 2300 / GETS DISK DRIVE NUMBER
490 GOSUB 2500 / OPENS FILE AS FILE NUMBER 1
491 CSCR = 2 / FLAG, DO NOT USE CUSTOM SCREEN
492 IF SCRN(A) <> 0 THEN GOSUB 28000 ELSE RPT = 0 / IF SCREEN FLAG  YES THEN READ CUSTOM SCREEN DESCRIPTION ELSE REPEATING OPTION = 0
493 IF MFLG(A) = 2 THEN GOSUB 29070 / IF THERE ARE LIMITS THEN READ THE LIMITS
494 GOSUB 40020 / READ INPUT OPTIONS FOR THIS FILE
495 IF REALFLG(A) = 2 THEN GOSUB 60070 / IF REALTIME TRANSFERS THEN READ REALTIME DESCRIPTION
500 IF REALFLG(A) = 2 THEN GOSUB 60200 / IF REALTIME TRANSFERS THEN OPEN REALTIME TRANSFER FILE
530 GOTO 3000 / GOTO FILE OPTIONS
1905 MATCH = 1 / INITIALIZE 
2300 REM DISK  SELECTION
2302 IF HDISK = 2 THEN GOSUB 13000 / IF USING HARDDISK OPTION THE CLEAR SCREEN
2303 IF HDISK = 2 THEN GOTO 2360 / IF USING HARD DISK THEN USE DEFAULT DRIVE
2304 PRINT ""
2305 PRINT "************  WHICH DISK DRIVE IS THE FILE ON  **************"
2310 PRINT ""
2312 PRINT "                 0 - BACK TO CHOISE OF FILES"
2315 PRINT "                 1 - DISK DRIVE A"
2320 PRINT "                 2 - DISK DRIVE B"
2325 PRINT "                 3 - DISK DRIVE C"
2330 PRINT "                 4 - DISK DRIVE D"
2335 PRINT ""
2340 PRINT "***********  ENTER THE NUMBER THEN PRESS RETURN  ************"
2345 GOSUB 14000 / INPUT INTEGER LESS THEN 100 SUBROUTINE
2347 IF DT# < 0 OR DT#>4 GOTO 2345 / IF OPTION OUT OF RANGE THEN REPROMPT
2350 T = DT#  / DT# IS RETURNED FROM 14000
2352 IF T = 0 THEN 100 / TO CHOICE OF FILES
2355 ON T GOTO 2360,2370,2380,2390 / ON DISK DRIVE NUMBER GOTO
2360 T$ = F$(A) / USE DEFAULT DRIVE
2365 GOTO 2490
2370 T$ = "B:"+F$(A) / USE DRIVE B
2375 GOTO 2490
2380 T$ = "C:"+F$(A) / USE DRIVE C
2385 GOTO 2490
2390 T$ = "D:"+F$(A) / USE DRIVE D
2490 RETURN
2500 REM OPEN FILE 
2503 CLOSE #1 / CLOSE FILE TO PREVENT ERRORS
2505 OPEN "R",#1,T$,L(A) / OPENS RANDOM ACCESS FILE AS FILE #1, FILE NAME = T$, WITH LENGTH L
2507 D = 0
2510 FOR T = 1 TO NREC(A) / START FIELDING LOOP,NREC(A) IS THE NUMBER OF FIELDS IN THE FILE
2520 FIELD #1,D AS DY$,FL(A,T) AS X$(T) / DY$ IS A DUMMY, FL(A,T) IS THE LENTH OF THE FIELD, X$(T) IS THE T'TH FIELD
2530 D = D + FL(A,T) / LENGTH OF THE DUMMY VARIABLE
2540 NEXT T / END FIELDING LOOP
2543 GOSUB 7800 / GET THE MAXIMUM RECORD NUMBER
2545 RETURN
2550 REM OPEN SECOND FILE / SAME AS THE ABOVE SUBROUTINE EXCEPT THAT FILE 2 IS OPENED, 
2553 CLOSE #2 / CLOSE FILE TO PREVENT ERRORS
2555 OPEN "R",#2,T$,L(B) / OPEN RANDOM ACCESS FILE AS FILE #2, FILE NAME T$, WITH LENGTH L
2557 D = 0
2560 FOR T = 1 TO NREC(B) / START FIELDING LOOP, NREC(A) IS THE NUMBER OF FIELDS IN THE FILE
2565 FIELD #2,D AS DY$,FL(B,T) AS Y$(T) / DY$ IS A DUMMY, FL(A,T) IS THE LENGTH OF THE FIELD
2570 D = D + FL(B,T) / LENGTH OF THE DUMMY VARIABLE
2575 NEXT T
2578 RETURN
2580 REM OPEN THIRD FILE / SAME AS 2500 SUBROUTINE EXCPT THAT FILE 3 IS OPENED
2581 CLOSE #3 / CLOSE THIRD FILE TO PREVENT ERRORS
2584 OPEN "R",#3,T$,L(C) / OPEN RANDOM ACCESS FILE
2586 D = 0 / INITIALIZE TO 0
2588 FOR T = 1 TO NREC(C) / START FIELDING LOOP NREC(A) IS THE NUMBER OF FIELDS IN THE FILE
2590 FIELD #3,D AS DY$,FL(C,T) AS Z$(T) / Z$(T) = T'TH FIELD IN THIRD FILE
2592 D = D + FL(C,T) / LENGTH OF THE DUMMY VARIABLE
2594 NEXT T
2596 RETURN
3000 REM SECOND MENU 
3010 GOSUB 13000 / CLEAR SCREEN
3011 SFLG = 0 / INITIALIZE SEARCH FLAG TO 0
3012 PRINT "FILE : ";F$(A);TAB(57)"MAXIMUM RECORD :";MRN / PRINTS FILE NAME AND MAXIMUM RECORD NUMBER
3015 CALFLG = 0 / INITIALIZE RECALCULATE FLAG TO 0
3020 PRINT "*******************  WHAT DO YOU WANT TO DO WITH THE FILE  *******************"
3030 PRINT ""
3035 PRINT " 0 - CHANGE FILES  "
3040 PRINT " 1 - READ A SPECIFIC RECORD"
3050 PRINT " 2 - PRINT ON PAPER ALL OR SEVERAL SEQUENTIAL RECORDS"
3060 PRINT " 3 - SCAN SEVERAL RECORDS IN A FILE"
3070 PRINT " 4 - SEARCH A FILE"  
3080 PRINT " 5 - NEW ENTRY"
3090 PRINT " 6 - SEARCH A SORTED FILE"
3202 PRINT " 7 - RECALCULATE ALL THE RECORDS IN THE FILE"
3207 PRINT ""
3210 PRINT "*************  ENTER THE NUMBER OF THE OPTION THEN PRESS ENTER  ***************"
3212 SPRT = 5 / SURPRESS PRINTING AFTER OPTION IS ENTERED
3215 GOSUB 14000 / INPUT INTERGER < 100 SUBROUTINE
3218 IF DT# < 0 OR DT#>7 GOTO 3215 / IF OPTION OUR OF RANGE THEN REPROMPT
3220 N = DT# / DT# IS RETURNED FROM 14000
3225 IF N = 0 THEN CLOSE / IF CHANGING FILES THEN CLOSE ALL FILES
3227 IF N = 0 THEN GOTO 400 / IF CHANGING FILES BACK TO CHOISE OF FILE
3230 ON N GOTO 8000,5000,4000,18000,3700,17000,47000 / ON OPTION GOTO
3600 GOTO 18000 / SEARCH A FILE
3700 GOSUB 13000 / CLEAR SCREEN
3720 GOTO 7000 / GOTO NEW ENTRY
4000 REM SCAN ALL RECORDS
4005 GOSUB 13000 / CLEAR SCREEN
4007 GOSUB 7800 / GET MAXIMUM RECORD NUMBER
4008 GOSUB 4100 / INPUT FIELDS TO DISPLAY SUBROUTINE
4009 GOSUB 13000 / CLEAR SCREEN
4010 PRINT "************  SCAN ALL SEQUENTIAL RECORDS SUBPROGRAM  ************"
4011 PRINT ""
4012 PRINT "               WHAT RECORD DO YOU WANT TO START AT ?  "       
4013 PRINT ""
4014 PRINT "                Enter zero to return to file options "
4015 PRINT ""
4016 PRINT "***********  ENTER THE RECORD NUMBER THEN PRESS RETURN  ***********"
4018 GOSUB 14100 / INPUT INTEGER SUBROUTINE
4020 RN = DT# / RECORD NUMBER = VALUE RETURNED BY THE ABOVE SUBROUTINE
4022 IF RN = 0 THEN GOTO 3010 / IF OPTION = 0 THEN BACK TO FILE OPTIONS
4032 IF INKEY$ <> "" GOTO 4600 / IF ANY KEY IS PRESSED THEN PAUSE SUBROUTINE
4035 IF RN > MRN GOTO 26000 / IF RECORD NUMBER > MAXIMUM RECORD NUMBER THEN TO END OF FILE SUBROUTINE
4040 GET #1,RN / GET RECORD NUMBER RN FROM DISK
4050 GOSUB 4300 / PRINT THE FIELDS 
4060 RN = RN + 1 / INCREMENT RECORD NUMBER
4070 GOTO 4032 / DO IT AGAIN
4100 REM ****  GET FIELDS TO DISPLAY
4110 FOR T = 1 TO NREC(A) / FOR EACH FIELD ASK IF YOU WANT IT DISPLAYED
4120 GOSUB 13000 / CLEAR SCREEEN
4124 PRINT "*******************  SCAN SUBROUTINE  **********************"
4126 PRINT ""
4130 PRINT "FIELD NUMBER : ";T;" - "; FLDN$(A,T) / PRINTS FIELD NAME
4140 PRINT ""
4150 PRINT "*****  DO YOU WANT THIS FIELD DISPALYED WHILE SCANNING  *****"
4160 PRINT ""
4170 PRINT "             1 - NO, Do not show this field "
4180 PRINT "             2 - YES, Show this field "
4190 PRINT ""
4200 PRINT "************  Enter the number then press return  ***********"
4210 GOSUB 14000 / INPUT INTEGER < 100 SUBROUTINE
4220 IF DT# < 1 OR DT# > 2 THEN 4210 / IF OPTION OUT OF LIMITS THEN REPROMPT
4230 SHOW(T) = DT# / SHOW(T) IS THE OPTION CHOSEN FOR THE T'TH VARIABLE
4240 NEXT T / END LOOP
4250 RETURN
4300 REM ****  PRINT FIELDS 
4305 PRINT "RECORD NUMBER ";RN
4310 FOR Q = 1 TO NREC(A) / START LOOP PRINTING OUT THE FIELDS
4320 IF SHOW(Q) = 2 THEN GOSUB 12030 / IF THE FIELD IS TO BE PRINTED THEN GOTO THE PRINT SUBROUTINE
4330 NEXT Q / END LOOP PRINTING OUT THE FIELDS
4340 RETURN
4600 REM 
4604 PRINT "******************  PAUSE SUBROUTINE  **********************"
4608 PRINT " 1 - CONTINUE SCANING "
4610 PRINT " 0 - BACK TO FILE OPTIONS "
4625 PRINT "***********  ENTER THE NUMBER THEN PRESS RETURN  ***********"    
4628 GOSUB 14000 / INPUT INTEGER < 100 SUBROUTINE
4635 IF DT# = 0 THEN GOTO 3010 / IF OPTION = 0 THEN BACK TO FILE OPTIONS
4640 GOTO 4040 / CONTINE SCANNING
5000 REM 
5005 GOSUB 13000 / CLEAR SCREEN
5010 PRINT "************  PRINT ON PAPER ALL SEQUENTIAL RECORDS  *************"
5011 PRINT ""
5012 PRINT "          WHAT RECORD DO YOU WANT TO START PRINTING AT ?"
5013 PRINT ""
5014 PRINT "               Enter zero to return to file options "
5015 PRINT ""
5016 PRINT "***********  ENTER THE RECORD NUMBER THEN PRESS RETURN  **********"
5018 GOSUB 14100 / INPUT INTEGER SUBROUTINE 
5020 RN = DT# / RECORD NUMBER EQUALS VALUE RETURNED FROM THE INPUT SUBROUTINE
5021 IF RN = 0 GOTO 3010 / IF OPTION = 0 THEN BACK TO FILE OPTIONS
5022 PRINT "**************  DO YOU WANT THIS RECORD PRINTED IN  **************"
5023 PRINT "                   1 - EXPANDED FORM "
5024 PRINT "                   2 - CONDENSED FORM "
5025 PRINT "**************  ENTER THE NUMBER THEN PRESS RETURN  **************"
5026 GOSUB 14000 / INPUT INTEGER SUBROUTINE 
5027 IF DT# < 1 OR DT#>2 GOTO 5026 / IF OPTION OUT OF RANGE THE REPROMPT
5030 PFLG = DT# / PRINT FLAG = VALUE RETURNED FROM INPUT SUBROUTINE
5031 IF PFLG = 2 THEN GOSUB 12880 / IF PRINT IN CONDENSED FORM THEN ASK FOR NUMBER OF COLUMS ON PRINTER
5032 IF PFLG = 2 THEN GOSUB 12900 / IF PRINT IN CONDENSED FORM THEN COMPUTE WHERE TO PRINT FIELDS
5033 GOSUB 16000 / TURN YOUR PRINTER ON PROMPT
5036 REM
5038 IF INKEY$ <> "" GOTO 5600 / GOTO PAUSE SUBROUTINE IF ANY KEY IS PRESSED
5039 IF RN > MRN GOTO 26000 / IF RECORD NUMBER EXCEEDS MAXIMUM THE GOTO END OF FILE SUBROUTINE
5040 REM
5041 GET #1,RN / GET RECORD NUMBER RN
5050 IF PFLG = 1 THEN GOSUB 12200 / IF PRINT IN EXPANDED FORM THEN PRINT USING 12200 SUBROUTINE
5060 IF PFLG = 2 THEN GOSUB 12500 / IF PRINT IN CONDENSED FORM THEN PRINT USING 12500 SUBROUTINE
5510 RN = RN + 1 / INCREMENT RECORD NUMBER
5520 GOTO 5036 / START OVER AND PRINT NEXT RECORD
5600 REM 
5602 GOSUB 13000 / CLEAR SCREEN
5604 PRINT "******************  PAUSE SUBROUTINE  **********************"
5606 PRINT ""
5608 PRINT " 1 - CONTINUE PRINTING "
5610 PRINT " 0 - BACK TO FILE OPTIONS"
5620 PRINT ""
5625 PRINT "***********  ENTER THE NUMBER THEN PRESS RETURN  ***********"    
5628 GOSUB 14000 / INPUT INTEGER < 100 SUBROUTINE
5630 IF DT# = 0  THEN GOTO 3010 / IF OPTION 0 THEN BACK TO FILE OPTIONS
5640 GOTO 5040 / CONTINUE PRINTING
5725 REM
6000 REM 
7000 REM / START ON NEW RECORD ENTERY
7010 GOSUB 13000 / CLEAR SCREEN
7012 PRINT ""
7014 PRINT "FILE NAME: ";F$(A)
7020 PRINT "********************  NEW RECORD ENTRY  ********************"
7022 PRINT ""
7024 PRINT "*******************  WHAT RECORD NUMBER ?  *****************"
7030 PRINT ""
7031 GOSUB 7800
7032 PRINT "**********  Enter zero to return to file options  **********"
7033 PRINT ""
7034 PRINT "---- MAXIMUM RECORD NUMBER  CURRENTLY = ";MRN
7035 PRINT "---- ENTER A NUMBER FROM 1 TO ";MRN +1        
7036 PRINT ""
7038 PRINT "********  ENTER THE RECORD NUMBER THEN PRESS RETURN  *******"
7040 GOSUB 14100 / INPUT INTEGER SUBROUTINE
7042 IF DT# <0 OR DT# >(MRN +1) GOTO 7040 / IF OPTION OUT OF RANGE REPROMPT
7045 RN = DT# / RECORD NUMBER = VALUE RETURED FROM INPUT SUBROUTINE
7046 GOSUB 13000 / CLEAR SCREEN
7048 IF RN = 0 GOTO 3010 / IF OPTION 0 THEN RETURN TO FILE OPTIONS
7200 GOSUB 40000 / CONTINUE WITH NEW ENTRY
7205 IF RN > MRN THEN MRN = RN / IF RECORD NUMBER > MAXIMUM RECORD NUMBER THEN  LET MAXIMUM RECORD NUMBER = THE RECORD NUMBER
7210 GOTO 7010 / BACK  TO NEW ENTRY
7800 MRN = LOF(1)/ L(A) / COMPUTES MAXIMUM RECORD NUMBER OF FILE 1
7805 REM MRN = INT(MRN)
7810 RETURN
7900 REM ***** LOF
7910 MRN2 = LOF(3)/82 / MAXIMUM RECORD NUMBER OF TAX FILE
7920 RETURN
7950 REM ******* LOF
7960 MRNS = LOF(2)/L(B) / MAXIMUM RECORD NUMBER OF SECOND FILE
7970 RETURN
8000 REM 
8010 GOSUB 13000 / CLEAR SCREEN
8020 PRINT "********************  READ A SINGLE RECORD  *******************"
8030 PRINT ""
8040 PRINT "FILE NAME: ";F$(A)
8042 PRINT ""
8043 PRINT "MINIMUM RECORD NUMBER : 1   MAXIMIM RECORD NUMBER : ";MRN
8044 PRINT ""
8045 PRINT "******* ENTER THE NUMBER OF THE RECORD THEN PRESS RETURN ******"
8046 PRINT ""
8048 PRINT "***********  ENTER ZERO TO RETURN TO FILE OPTIONS  ************"
8049 GOSUB 7800 / GET MAXIMUM RECORD NUMBER
8050 GOSUB 14100 / INPUT INTEGER SUBROUTINE
8052 RN = DT# / RECORD NUMBER = VALUE RETURED FROM INPUT SUBROUTINE
8057 IF RN = 0 THEN GOTO 3010 / IF OPTION 0 BACK TO FILE OPTIONS
8058 GOSUB 13000 / CLEAR SCREEN
8059 IF RN > MRN GOTO 26800 / IF RECORD NUMBER EXCEEDS MAXIMUM RECORD NUMBER THE GOTO END OF FILE SUBROUTINE
8060 GET #1,RN / GET RECORD NUMBER RN
8500 GOSUB 12000 / PRINT THE RECORD ON THE SCREEN SUBROUTINE
8510 LI = 20 / LINE = 20, 
8515 GOSUB 13100 / LOCATE SUBROUTINE
8520 PRINT "*****************************    OPTIONS :    ********************************"      
8530 PRINT " 1 - READ THE NEXT RECORD        3 - CORRECT THIS RECORD  5 - SHOW SUBRECORDS  "
8532 PRINT " 2 - PRINT THIS RECORD ON PAPER  4 - READ ANOTHER RECORD  0 - TO FILE OPTIONS  "
8535 PRINT "******************  Enter the number then press return  **********************"
8537 SPRT = 5 / SURPRESS PRINTING AFTER OPTION IS ENTERED
8540 GOSUB 14000 / INPUT INTEGER < 100 SUBROUTINE
8542 IF DT# <0 OR DT# > 5  GOTO 8510 / IF OPTION OUT OF LIMITS THEN REPROMPT
8550 B = DT# / B = VALUE RETURNED FROM THE ABOVE SUBROUTINE
8552 IF B = 3 THEN GOSUB 9000 / IF OPTION 3 THEN CORRECT A RECORD SUBROUTINE
8554 IF B = 3 THEN GOTO 8510 / IF OPTION 3 ASK FOR ANOTHER OPTION
8555 IF SFLG > 0 AND B = 1 THEN GOTO 18380 / IF SEARCHING FOR SPECIFIC VALUES AND YOU WANT TO SEE THE NEXT RECORD THEN CONTINUE SEARCH
8556 IF B = 1 THEN RN = RN + 1 / IF SEE NEXT RECORD OPTION THEN INCREMENT RECORD NUMBER
8560 IF B = 5 AND RPT <> 2 THEN 8580 / IF REQUEST FOR SHOW SUBRECORDS AND SUBRECRDS DO NOT EXIST THEN 8580
8562 ON B GOTO 8058,8600,9000,8000,20000 / ON THE OPTION GOTO
8564 REM
8570 GOTO 3010 / TO FILE OPTIONS
8580 LI = 24 / LINE = 24
8585 GOSUB 13100 / LOCATE SUBROUTINE
8590 PRINT TAB(10) "SUBRECORDS ARE NOT SET UP ON THIS FILE";
8595 GOTO 8510 / ASK FOR ANOTHER OPTION
8600 REM  PRINT SINGLE RECORD 
8610 GOSUB 16000 / TURN YOUR PRINTER ON PROMPT
8680 GOSUB 12200 / PRINT RECORD ON PAPER EXPANDED FORM SUBROUTINE
8920 GOTO 8000 / BACK TO START OF SHOW A SINGLE RECORD
9000 REM 
9005 LI = 20 / LINE = 20
9007 GOSUB 13100 / LOCATE SUBROUTINE
9010 PRINT "*******************  CORRECT RECORD SUBROUTINE  *******************           "
9020 PRINT "          0 - TO FILE OPTION -- DONE WITH CORRECTIONS                         "    
9022 PRINT "          1 TO ";NREC(A);"THE FIELD YOU WANT TO CHANGE                    " 
9025 PRINT "***************  ENTER THE NUMBER THEN PRESS RETURN  **************           "
9028 SPRT = 5 / SURPRESS PRINTING AFTER OPTION
9030 GOSUB 14000 / INPUT INTEGER SUBROUTINE
9031 IF DT# <0 OR DT# >NREC(A)  GOTO 9030 / IF OPTION EXCEENDS LIMITS REPROMPT
9033 T = DT# / T = FIELD YOU WANT TO CORRECT
9040 IF T = 0 THEN GOTO 3010 / IF OPION = 0 THEN FILE OPTIONS
9045 D = T / D ASLO EQUALS THE FIELD TO CORRECT
9046 IF REALFLG(A) = 2 AND T = TGTRN THEN GOSUB 61300 / IF THERE IS REALTIME TRANSFERS FOR THIS FILE AND THE RECORD TO BE CHANGED IS THE POINTER TO THE TARGET RECORD NUMBER THEN GOSUB 61300
9047 Q = T / Q ALSO EQUALS FIELD TO BE CORRECTED
9048 LI = 20 / LINE = 20
9049 GOSUB 13100 / LOCATE SUBROUTINE
9050 PRINT "******  FIELD NUMBER: ";D;" FIELD NAME: ";FLDN$(A,D);" ******         "
9060 PRINT "***********  ENTER THE CORRECTION THEN PRESS RETURN  **************           "
9062 PRINT "                                                                             " / CLEARS THESE LINES
9063 PRINT "                                                                             "
9064 PRINT "                                                                             ";
9066 LI = 22 / LINE = 22
9068 GOSUB 13100 / LOCATE SUBROUTINE
9070 ON FTY(A,D) GOTO 9100,9150,9200,9250,9250 / ON THE FIELD TYPE OF THE FIELD TO CORRECT GOTO 
9100 GOSUB 15000 / INPUT STRING SUBROUTINE
9105 I$ = A$ / I$ = THE VALUE RETURED FROM THE INPUT SUBROUTINE
9110 LSET X$(D) = I$ / SET FILE BUFFER FOR THE FIELD TO I$
9120 GOTO 9290  
9150 GOSUB 14100 / INPUT INTEGER SUBROUTINE
9151 T2 = KEYLIST(A,D) / T2 = THE KEYLIST FOR THIS FIELD IF ANY
9152 T3 = MAXK(T2) / T3 = THE MAXIMUM VALUE FOR THE KEYLIST
9153 REM IF KY(A,D) = 2 AND ( DT# < 1 OR DT# > T3) GOTO 9150
9154 IF MFLG(A) = 2 THEN GOSUB 29190 / IF LIMITS THEN CHECK FOR LIMIT
9155 I% = DT# 
9157 I# = I%
9160 LSET X$(D) = MKI$(I%) / SET THE FILE BUFFER FOR THIS FIELD TO I%
9165 X(D) = I% 
9170 GOTO 9290
9200 GOSUB 14200 / INPUT SINGLE PRECISION NUMBER SUBROUTINE
9203 IF MFLG(A) = 2 THEN GOSUB 29190 / IF LIMITS THEN CHECK IF NUMBER IS IN RANGE 
9205 I! = DT# / I! = VALUE RETURNED FROM SUBROUTINE
9207 I# = I!  
9210 LSET X$(D) = MKS$(I!) / SET FILE BUFFER TO !
9220 GOTO 9290
9250 GOSUB 14300 / INPUT SUBROUTINE FOR INTEGERS
9253 IF MFLG(A) = 2 THEN GOSUB 29190 / IF LIMITS THEN CHECK IF NUMBER IS IN RANGE 
9255 I# = DT#
9260 LSET X$(D) = MKD$(I#) / SET FILE BUFFER TO !
9290 PUT #1,RN / PUT THE RECORD ON THE DISK
9291 N = D  / N ALSO EQUALS THE FIELD TO CORRCT
9294 IF REALFLG(A) = 2 AND N = FLD1 THEN GOSUB 61000 / CORRECT REALTIME TRANSFER FILE
9295 IF REALFLG(A) = 2 AND N = FLD2 THEN GOSUB 61200
9296 IF REALFLG(A) = 2 AND N = TGTRN THEN GOSUB 61400
9297 IF REALFLG(A) = 2 AND N = TGTRN THEN GOSUB 60300
9298 IF GFLG(Q) = 1 THEN  GOSUB 46000 ELSE GOSUB 44500 / IF VALUE OF THE FIELD AFFECTS OTHER FIELDS THEN RECALCULATE THE RECORD ELSE JUST PRINT ON THE SCREEN 
9299 RETURN   
```
{% endraw %}

## REMARKS2.BAS

{% raw %}
```bas
10000 REM READ FFILE 
10010 OPEN "I",#1,"FFILE" / OPENS FFILE AS A SEQUENTIAL ACCESS FILE
10020 INPUT #1,MAXF / MAXF = THE MAXIMIM FILE NUMBER
10030 FOR A = 1 TO MAXF / START READING DATA FOR EACH FILE 
10040 INPUT #1,A,F$(A),NREC(A),L(A) / INPUT FORM DISK, FILE NUMBER, FILE NAME, NUMBER OF FIELDS IN THE FILE AND FILE LENGTH
10050 FOR N = 1 TO NREC(A) / START LOOP READING DATA FOR EACH FIELD
10060 INPUT #1,FLDN$(A,N),FTY(A,N),FL(A,N) / INPUT FROM DISK FIELD NAME, FIELD TYPE, AND FIELD LENGTH
10070 IF FTY(A,N) = 2 THEN INPUT #1,D,KEYLIST(A,N) / IF FIELD IS AN INTEGER FIELD THEN INPUT THE KEYLIST NUMBER , 0 = NO KEYLIST
10075 IF D >< 2 THEN KEYLIST(A,N) = 0 / IF FIELD IS NOT AN INTEGER FIELD THEN THERE IS NO KEYLIST
10080 NEXT N / END LOOP READING EACH FIELD
10090 NEXT A / END LOOP READING EACH FILE
10100 CLOSE #1
10110 RETURN
10900 REM  PUT DISK IN DRIVE SUB
10905 IF HDISK = 2 THEN RETURN / IF USING THE HARD DISK OPTION THEN RETURN
10910 GOSUB 13000 / CLEAR SCREEN
10920 PRINT "    ********  PUT PROGRAM DATA DISK IN THE DEFAULT DISK DRIVE  *********"
10930 PRINT ""
10940 PRINT "                     THEN PRESS ANY KEY TO CONTINUE "
10950 PRINT ""
10960 PRINT "    If the program data disk is already in the default disk drive then"
10965 PRINT "                     just press any key to continue."
10970 PRINT ""
10990 IF INKEY$ = "" GOTO 10990 / STAY ON THIS LINE UNTILL A KEY IS PRESSED
10992 GOSUB 13000 / CLEAR SCREEN
10993 PRINT "  READING INFORMATION, PLEASE WAIT "
10995 RETURN
11000 REM  LOAD KEYLIST
11010 GOSUB 13000 / CLEAR SCREEN
11100 A = 10 / NUMBER OF KEYLIST FILE, DO NOT CHANGE KEYLIST FILE UNLESS YOU KNOW WHAT YOU ARE DOING
11105 PRINT "FILE : KEYLIST "
11110 GOSUB 2300 / ASKS FOR DISK DRIVE THE FILE IS ON SUBROUTINE
11120 GOSUB 2500 / OPEN FILE NUMBER 1 SUBROUTINE
11130 FOR T = 1 TO 10000 / START READING KEYLISTS
11140 IF T > MRN GOTO 11900 / AT END OF FILE GOTO 11900
11150 GET #1,T / GET RECORD NUMBER T
11160 T1 = CVI(X$(1)) / T1 EQUALS LIST NUMBER
11170 T2 = CVI(X$(2)) / T2 EQUALS ROW NUMBER IN LIST
11180 L$(T1,T2) = X$(3) / L$ IS THE STRING CORRESPONDING TO THE KEY
11185 IF T2 > MAXK(T1) THEN MAXK(T1) = T2 / THE MAXIMUM KEY FOR THE LIST = MAXK(LIST NUMBER)
11190 NEXT T / END LOOP READING LIST
11900 KD = 5 / FLAG, LIST HAS BEEN READ
11935 CLOSE #1
11937 PRINT FRE(0) / PRINTS MEMORY AVAILABLE, OPTIONAL MAY BE DELETED
11940 RETURN
12000 REM ******  PRINT SUBROUTINE  ***** / PRINTS RECORDS ON SCREEN
12010 PRINT "*************  FILE : ";F$(A);"- ";"RECORD NUMBER: ";RN;" *************"
12015 IF CSCR = 1 GOTO 34000 / IF USING A CUSTOM SCREEN GOTO 34000
12020 FOR Q = 1 TO NREC(A) / START LOOP PRINTING EACH FIELD
12022 GOSUB 12025 
12023 NEXT Q / END LOOP PRINTING EACH FIELD
12024 RETURN
12025 IF Q MOD 19 = 0 THEN GOSUB 12170
12030 PRINT Q; TAB(5) FLDN$(A,Q); / PRINT FIELD NUMBER AND FIELD NAME
12040 ON FTY(A,Q) GOSUB 12050,12070,12100,12130,12142 / ON FIELD TYPE GOTO
12045 RETURN
12050 PRINT TAB(26) X$(Q) / PRINT THE STRING
12060 RETURN
12070 I%=CVI(X$(Q)) / CONVERT AN INTEGER FIELD
12072 X(N) = I%
12075 PRINT TAB(25) I%; / PRINT AN INTEGER FIELD
12080 IF KEYLIST(A,Q) = 0 THEN PRINT ""  / IF NO KEYLIST THEN PRINT TO NEXT LINE
12082 IF KEYLIST(A,Q) = 0 THEN GOTO 12150 / IF NO KEYLIST THEN SKIP PRINTING THE KEYLIST
12084 T1 = KEYLIST(A,Q) / T1 EQUALS THE LIST NUMBER
12085 IF I% < 0 THEN I% = 0 / CATCH NEGITIVE ARRAY VALUES
12086 W$ = L$(T1,I%) / W$ = THE KEY 
12090 PRINT TAB(30) "key: ";W$ / PRINT THE KEY
12095 RETURN 
12100 I!=CVS(X$(Q)) / CONVERT SINGLE PRECISON NUMBERS
12110 PRINT TAB(25) I! / PRINT SINGLE PRECISON NUMBERS
12120 RETURN 
12130 I#=CVD(X$(Q)) / CONVERT DOUBLE PRECISON 
12135 X(Q) = I#
12140 PRINT TAB(25)  I# / PRINT DOUBLE PRECISION NUMBERS
12141 RETURN 
12142 I#=CVD(X$(Q)) / CONVERT DOUBLE PRECISION NUMBERS FOR DOLLAR NUMBERS
12144 PRINT TAB(26);
12146 PRINT USING "**$########.##";I# / PRINT DOLLAR AMOUNTS
12147 X(Q) = I#
12148 RETURN
12150 RETURN
12152 IF Q < 20 THEN RETURN
12153 PRINT""   / CLEARS FIVE LINES FOR THE OPTION MENU
12154 PRINT ""
12155 PRINT ""
12156 PRINT ""
12157 PRINT ""
12160 RETURN
12170 PRINT "***  MORE FIELDS, PRESS ANY KEY TO CONTINUE  ***"
12180 IF INKEY$ = "" GOTO 12180 / STAY ON THIS LINE UNTILL A KEY IS PRESSED
12190 RETURN
12200 REM * LINE PRINT  / THIS SECTION IS ALMOST THE SAME AS THE ABOVE SECTION EXCEPT THAT THE DATA IS PRINTED ON PAPER NOT THE SCREEN
12210 LPRINT ""
12220 PRINT "RECORD NUMBER: ";RN 
12230 LPRINT "RECORD NUMBER: ";RN;
12235 IF CSCR = 1 THEN GOTO 35000 ELSE LPRINT "" / IF USING A CUSTOM SCREEN THEN GOTO 35000
12240 FOR Q = 1 TO NREC(A) / START LOOP PRINTING EACH FIELD
12260 LPRINT Q;TAB(5) FLDN$(A,Q);     
12270 ON FTY(A,Q) GOTO 12280,12310,12350,12390,12425 / ON FIELD TYPE GOTO
12280 REM
12290 LPRINT TAB(26) X$(Q) / PRINT STRINGS
12300 GOTO 12480
12310 I%=CVI(X$(Q)) / CONVERT INTEGERS
12314 LPRINT TAB(25) I%; / PRINT INTEGERS
12318 IF KEYLIST(A,Q) = 0 THEN LPRINT ""  / IF NO KEYLIST THEN PRINT DOWN TO THE NEXT LINE
12320 IF KEYLIST(A,Q) = 0 THEN GOTO 12480 / IF NO KEYLIST THEN SKIP PRINTING THE KEYLIST
12322 T1 = KEYLIST(A,Q) / T1 IS THE LIST NUMBER
12324 W$ = L$(T1,I%) / W$ IS THE KEY TO PRINT
12328 LPRINT TAB(30) "key: ";W$ / PRINT THE KEYLIST
12330 GOTO 12480
12340 GOTO 12480
12350 I!=CVS(X$(Q)) / CONVERT SINGLE PRECISION NUMBERS
12370 LPRINT TAB(25) I! / PRINT SINGLE PRECISION NUMBERS
12380 GOTO 12480
12390 I#=CVD(X$(Q)) / CONVERT DOUBLE PRECISION NUMBERS
12410 LPRINT TAB(25)  I# / PRINT DOUBLE PRECISION NUMBERS
12420 GOTO 12480
12425 I#=CVD(X$(Q)) / CONVERT DOLLAR AND CENTS AMOUNTS
12450 LPRINT TAB(26); 
12460 LPRINT USING "**$########.##";I# / PRINT DOLLAR AND CENTS AMOUNTS
12480 NEXT Q / FINISH LOOP PRINTING OUT FIELDS
12490 RETURN
12500 PRINT ""  / START OF PRINT CONDENSED RECORD SUBROUTINE
12510 LPRINT ""
12530 LPRINT "RECORD # ";RN;" ";
12540 FOR Q = 1 TO NREC(A) / START LOOP PRINTING EACH FIELD
12547 IF LEND(Q)= 5 THEN LPRINT "" / FLAG, IF LINE END THEN LPRINT TO NEXT LINE
12548 T2 = CL(Q) / T2 IS THE COLUMN TO PRINT THE NUMBER AT
12570 ON FTY(A,Q) GOTO 12590,12610,12730,12770,12810 / ON FIELD TYPE GOTO
12590 LPRINT TAB(T2) X$(Q); / PRINT STRINGS
12600 GOTO 12860
12610 I%=CVI(X$(Q)) / CONVERT INTEGERS
12630 LPRINT TAB(T2)I%; / PRINT INTEGERS
12660 IF KEYLIST(A,Q) = 0 THEN GOTO 12860 / IF NO KEYLIST THEN SKIP PRINTING KEYLIST
12670 T1 = KEYLIST(A,Q) / T1 IS THE KEYLIST NUMBER
12680 W$ = L$(T1,I%) / W$ IS THE KEY TO PRINT
12685 T1 = CL(Q) + 11 / T1 IS THE COLUMN TO PRINT THE KEYLIST ON
12700 LPRINT TAB(T1)"key: ";W$; / PRINT THE KEYLIST
12720 GOTO 12860
12730 I!=CVS(X$(Q)) / CONVERT SINGLE PRECISION NUMBERS
12750 LPRINT TAB(T2)I!; / PRINT SINGLE PRECISION NUMBERS
12760 GOTO 12860
12770 I#=CVD(X$(Q)) / CONVERT DOUBLE PRECISION NUMBERS
12790 LPRINT TAB(T2)I#; / PRINT DOUBLE PRECISION NUMBERS
12800 GOTO 12860
12810 I#=CVD(X$(Q)) / CONVERT DOUBLE PRECISION DOLLAR AND CENTS AMOUNTS
12840 LPRINT TAB(T2) "";  
12850 LPRINT USING "**$########,.##";I#; / PRINT DOLLAR AND CENTS AMOUNTS
12860 NEXT Q / END OF LOOP PRINTING EACH FIELD 
12870 RETURN
12880 PRINT " HOW MANY COLUMNS ARE THERE ON YOUR PRINTER "
12890 GOSUB 14100 / INPUT INTEGER SUBROUTINE
12892 COLM = DT# / NUMBER OF COLUMS EQUALS THE VALUE RETURNED FROM INPUT SUBROUTINE
12895 RETURN
12900 REM ******* TAB CONTROL *******
12901 C = 15 / FIRST FIELD STARTS AT COLUMN 15 TO LEAVE ROOM FOR THE RECORD NUMBER
12902 FOR T = 1 TO NREC(A) / START LOOP COMPUTING COLUMN TO PRINT FIELDS IN
12903 LEND(T) = 0 / LINE END = NO
12905 CL(T)= C / COLUMN SET TO END OF LAST FIELD
12906 GOSUB 12910
12907 IF C > COLM THEN GOSUB 12970 /IF COLUMN IS GREATER THEN PRINT GOSUB 12970
12908 NEXT T / FINISH LOOP COMPUTING TABS
12909 RETURN
12910 ON FTY(A,T) GOTO 12920,12930,12940,12950,12950 / ON FIELD TYPE GOTO
12920 C = C + FL(A,T) + 1 / FOR STRINGS ALLOW THE STRING LENGTH PLUS 1
12925 RETURN     
12930 C = C + 7 / FOR INTEGERS ALLOW 7 SPACES
12933 IF KEYLIST(A,T) > 0 THEN C = C + 30 / FOR KEYLISTS ALLOW 30 SPACES
12935 RETURN
12940 C = C + 9 / FOR SINGLE PRECISION NUMBERS ALLOW 9 SPACES
12945 RETURN    
12950 C = C + 16 / FOR DOUBLE PRECISION AND DOLLAR AMOUNTS ALLOW 16 SPACES
12952 RETURN
12970 CL(T)= 1 / START NEXT LINE AT COLUMN 1
12972 C =1
12974 LEND(T) = 5 / LINE END FLAG EQUALS YES
12975 GOSUB 12910 
12980 RETURN
13000 REM  CLEAR SCREEN
13010 CLS
13020 RETURN
13050 REM  LOCATE - TAB SET IN PROGRAM
13060 GOTO 13110 / SKIP SETTING TAB TO ONE
13100 REM  LOCATE - TAB EQUALS ONE
13105 TB = 1 / COLUMN EQUALS ONE
13110 LOCATE LI,TB
13120 RETURN
13600 REM CHECK FOR ASC0 / CHECK INPUTS FOR EXTENDED ASCII CODE
13610 S4$ = INKEY$ / S4$ IS THE SECOND ASCII CODE 
13620 C2 =  ASC(S4$) / C2 IS THE NUMBER OF THE ASCII CODE
13630 IF C2 = 83 THEN C = 1 / SET DELETE EQUAL TO CONTROL A
13640 IF C2 = 82 THEN C = 6 / SET INSERT EQUAL TO CONTROL F
13650 IF C2 = 75 THEN C = 19 / SET CURSER LEFT EQUAL TO CONTROL S
13660 IF C2 = 77 THEN C = 4  / SET CURSER RIGHT EQUAL TO CONTROL D
13670 RETURN
14000 REM INTEGER LESS THEN 100 CHECK
14010 MAX = 2 / MAXIMUM OF TWO CHARACTERS
14020 ACT$ = " 1234567890=<>^" / ACCEPTABLE CHARACTERS FOR NEW ENTRY
14023 IF NE = 0 THEN ACT$ = " 1234567890" / ACCEPTABLE CHARACTERS 
14025 PRINT ">__<";
14030 GOTO 14500
14100 REM INTEGER
14110 MAX = 8 / MAXIMUM OF EIGHT CHARACTERS
14120 ACT$ = " 1234567890-+,=<>^" / ACCEPTABLE CHARACTERS FOR NEW ENTRY
14123 IF NE = 0 THEN ACT$ = " 1234567890-+," / ACCEPTABLE CHARACTERS
14125 PRINT ">________<"; / PROMPT
14130 GOTO 14500
14200 REM  SINGLE PRECISION
14210 MAX = 10 / MAXIMUM OF TEN CHARACTERS
14220 ACT$ = " 1234567890-+,.%$=<>^" / ACCEPTABLE CHARACTERS FOR NEW ENTRY
14223 IF NE = 0 THEN ACT$ = " 1234567890+-,.%$" / ACCEPTABLE CHARACTERS
14225 PRINT ">__________<"; 
14230 GOTO 14500
14300 REM DOUBLE PRECISION
14310 MAX = 20 / MAXIMUM OF 20 CHARACTERS
14320 ACT$ = " 1234567890-+,.%$=<>^" / ACCEPTABLE CHARACTERS FOR NEW ENTRY
14323 IF NE = 0 THEN ACT$ = " 1234567890+-,.%$" / ACCEPTABLE CHARACTERS
14325 PRINT ">____________________<";
14330 GOTO 14500
14500 REM NUMBER CHECK
14505 A$ = "" / INITIALIZE A$ TO THE NULL STRING
14510 K$(20) = " " 
14515 KTMAX = 0 / INITIALIXE THE COUNT MAXIMUM TO 0
14520 FOR T9 = 1 TO MAX 
14525 K$(T9) = " " / INITIALIZE K$ TO BLANK
14530 NEXT T9
14535 DIG$ = "1234567890." / STORED CHARACTERS
14540 DOTFLG = 0 / DECIMAL POINT FLAG SET TO 0
14541 T2 = MAX + 1 
14542 FOR T6 = 1 TO T2
14544 PRINT CHR$(CH); / BACKSPACE TO FIRST SPACE
14546 NEXT T6
14550 IF INKEY$ = "" GOTO 14560 ELSE GOTO 14550 / CLEAR THE KEYBOARD BUFFER
14560 KT = 0 / INITIALIZE COUNT TO 0
14565 REM 
14570 KT = KT + 1 / INCREMENT COUNT
14575 REM     
14580 W$ = INKEY$ / GET CHARACTER FROM KEYBOARD
14585 IF W$ = "" GOTO 14580 /IF THERE IS NO CHARACTER LOOP UNTILL ON IS ENTERED
14590 C = ASC(W$) / C EQUALS THE ASCII VALUE OF THE ENTERED CHARACTER
14593 IF C = 0 THEN GOSUB 13600 / CHECK EXTENDED ASCII CODES
14595 IF C = 13 GOTO 14660 / RETURN 
14600 IF C = 17 OR C = 8 GOTO 14860 / BACKSPACE
14605 IF C = 19 GOTO 14690 / CURSER LEFT
14610 IF C = 4 GOTO 14710 / CURSER RIGHT
14615 IF C = 6 GOTO 14730 / INSERT
14620 IF C = 1 GOTO 14790 / DELETE
14625 IF KT > MAX GOTO 14575 / DOES NOT ACCEPT CHARACTERS BEYOND THE MAX LIMIT
14630 IF INSTR(ACT$,W$) = 0 GOTO 14890 / IF W$ IS NOT ONE OF THE ACCEPTABLE CHARACTERS THEN GOTO UNACCEPTABLE CHARACTER SUBROUTINE
14635 K$(KT) = W$ / SAVE THE CHARACTER ENTERED AS K$(COUNT)
14645 PRINT K$(KT); / PRINT THE CHARACTER ON THE SCREEN
14650 IF KT > KTMAX THEN KTMAX = KT / IF COUNT IS GREATER THEN COUNT MAX THEN COUNT MAX EQUALS THE COUNT
14655 GOTO 14570 / BACK TO GET ANOTHER CHARACTER
14660 REM * RETURN / DONE WITH ENTERY
14670 FOR T9 = 1 TO KTMAX / FOR EACH CHARACTER ENTERED
14675 A$ = A$ + K$(T9) / A$ = ALL THE CHARACTERS STRUNG (CONCATED) TOGETHER
14676 IF K$(T9) = "^" GOTO 15830 / NEW ENTRY OPTION SAME AS LAST RECORD OVER 1
14677 IF K$(T9) = ">" GOTO 15950 / NEW ENTRY OPTION ABORT RECORD
14678 IF K$(T9) = "=" GOTO 15800 / NEW ENTRY OPTION  SAME AS LAST RECORD
14679 IF K$(T9) = "<" GOTO 15900 / NEW ENTRY OPTION START RECORD OVER
14680 NEXT T9
14681 IF KTMAX = 0 THEN PRINT "1"; / DEFAULT = 1
14682 IF KTMAX = 0 THEN DT# = 1 / DEFAULT = 1
14684 IF SPRT >< 5 THEN PRINT "" / IF PRINTING IS NOT SUPRESSED THEN PRINT TO NEXT LINE / THIS IS NECESSARY IF THE PROMPT IS ON THE 24 TH LINE ON IBM BASIC OTHERWISE THE SCREEN WILL SCROLL UP ONE LINE
14685 SPRT = 0 / SET SURPRESS PRINT FLAG TO NO 
14686 IF KTMAX = 0 THEN RETURN / IF DEFAULT THEN RETURN
14687 GOTO 14905
14689 GOTO 14905
14690 REM * MOVE CURSE BACK
14695 IF KT = 1 GOTO 14575 / CAN'T MOVE CURSER BACK ANY MORE
14700 KT = KT - 1 / COUNT = COUNT -1
14703 PRINT CHR$(CH); / BACKSPACE ONE SPACE
14705 GOTO 14575
14710 REM * MOVE CURSER FORWARD
14715 IF KT >= MAX GOTO 14575 / CAN'T MOVE CURSER FORWARD ANY
14716 IF KT > (KTMAX + 1) GOTO 14575 / CANT MOVE CURSER FORWARD
14718 PRINT K$(KT); / PRINT ONE CHARACTER RIGHT
14720 KT = KT + 1 / COUNT = COUNT + 1
14725 GOTO 14575
14730 REM * INSERT 
14733 IF KT > KTMAX GOTO 14575 / CAN'T INSERT HERE
14735 X9 = MAX 
14740 WHILE X9 > KT
14745 X9 = X9 - 1
14750 K$(X9 + 1) = K$(X9) / MOVE ALL THE CHARACTERS OVER ONE
14755 WEND 
14760 K$(KT) = " "
14767 KTMAX = KTMAX + 1 / INCREMENNT THE MAXIMUM COUNT
14769 IF KTMAX > MAX THEN KTMAX = MAX / DO NOT INCREMENT BEYOND THE MAX
14770 FOR T9 = KT TO KTMAX  
14775 PRINT K$(T9); / PRINT OUT THE NEW CHARACTERS
14780 NEXT T9
14781 T6 = (KTMAX - KT) + 1
14782 FOR T7 = 1 TO T6
14783 PRINT CHR$(CH); / MOVE CURSER BACK
14784 NEXT T7
14785 GOTO 14575
14790 REM * DELETE 
14793 IF KT > KTMAX GOTO 14575 / DO NOT DELETE IF NOTHING LEFT TO DELETE
14794 IF KTMAX = 1 GOTO 14575 / DO NOT DELETE IF ONLY ONE CHARACTER
14795 K$(MAX + 1) = ""
14800 X9 = KT 
14805 WHILE X9 <= MAX
14810 K$(X9) = K$(X9 + 1) / MOVE CHARACTERS OVER ONE
14815 X9 = X9 + 1
14820 WEND 
14830 KTMAX = KTMAX - 1 / DECREMENT KTMAX
14835 FOR T9 = KT TO KTMAX
14840 PRINT K$(T9); / PRINT NEW CHARACTERS
14845 NEXT T9
14850 PRINT "_"; / PRINT UNDERLINE OVER LAST CHARACTER
14851 T7 = (KTMAX - KT) + 2
14852 FOR T8 = 1 TO T7
14853 PRINT CHR$(CH); / MOVE CURSER BACK
14854 NEXT T8
14855 GOTO 14575
14860 REM BACKSPACE
14865 IF KT = 1 GOTO 14575 / CAN'T BACKSPACE PAST FIRST CHARACTER
14870 KT = KT - 1 / DECREMENT COUNT
14875 PRINT CHR$(CH); / BACKSPACE
14877 K$(KT) = " " / CHANGE LAST CHARACTER TO A BLANK
14880 PRINT "_"; / PRINT UNDERLINE OVER BACKSPACED CHARACTER
14883 PRINT CHR$(CH); / BACKSPACE
14885 GOTO 14575
14890 REM INPUT NOT ACCEPTABLE
14895 PRINT CHR$(7); / BEEPS
14900 GOTO 14580
14905 REM * CLEAR STRINGS
14910 MAX = LEN(A$) / SETS MAX EQUAL TO THE LENGTH OF A$, A$ IS THE STRING OF ALL THE CHARACTERS
14915 D2$ = "" / INITIALIZE TO NULL
14920 D1$ = "" / INITIALIZE TO NULL
14925 DFLG = 0 / INITIALIZE DECIMAL FLAG TO 0
14930 FOR Q93 = 1 TO MAX / START LOOP TESTING EACH CHARACTER
14935 R$ = MID$(A$,Q93,1) / R$ IS THE CHARACTER TO TEST
14940 IF INSTR(DIG$,R$) = 0 GOTO 14975 / CHARACTER NOT A DIGIT OR DECIMAL POINT
14945 IF R$ = "." OR DFLG = 1 GOTO 14965 / START DECIMAL POINT
14950 IF DFLG = 1 GOTO 14965
14955 D2$ = D2$ + R$ / D2$ CONTAINS ALL CHARACTERS TO THE LEFT OF DECIMAL POINT
14960 GOTO 14975
14965 D1$ = D1$ + R$ / D1$ CONTAINS ALL THE CHARACTERS TO THE RIGHT OF DECIMAL 
14970 DFLG = 1 / SET DECIMAL FLAG TO 1
14975 NEXT Q93 / GET NEXT CHARACTER
14980 DA# = VAL(D2$) / CONVERT TO NUMBER
14985 D1# = VAL(D1$) / CONVERT STRING TO NUMBER
14990 DT# = DA# + D1# / ADD THE WHOLE NUMBER TO THE FRACTIONAL NUMBER
14995 IF K$(1) = "-" THEN DT# =  -DT# / CHANGE TO NEGITIVE IF APPLICABLE
14997 RETURN / RETURN TO THE SPOT IN THE PROGRAM THAT CALLED IT , DT# IS THE RETURNED RESULT
15000 REM * ALPHANUMERIC CHECK
15010 MAX = FL(A,Q) / THE MAXIMUM LENGTH OF THE ENTRY IS SET EQUAL TO THE FIELD LENGTH
15020 GOTO 15040
15030 REM * MAX SET IN PROGRAM
15040 A$ = ""  / INITIALIXE TO NULL STRING
15050 PRINT ">";         / PRINTS PROMPT
15060 FOR N9 = 1 TO MAX  / "
15065 K$(N9) = ""        / "
15070 PRINT "_";         / "
15080 NEXT N9            / "
15090 PRINT "<";         / "
15100 T2 = MAX + 1
15110 FOR T4 = 1 TO T2
15120 PRINT CHR$(CH); / MOVES CURSER BACK TO FIRST CHARACTER
15125 NEXT T4
15130 KT = 0 / INITIALIZE TO 0
15135 KTMAX = 1 / INITIALIZE TO 1
15140 REM * CHECK ALFANUMERIC INPUT FOR LENGTH
15150 KT = KT + 1
15160 PRINT TAB(KT+1)"";
15170 K$ = INKEY$ / GET CHARACTER FROM KEYBOARD
15180 IF K$ = "" GOTO 15170 / LOOP UNTILL CHARACTER IS NOT A NULL
15190 C = ASC(K$) / C IS THE ASCII VALUE OF THE CHARACTER
15195 IF C = 0 THEN GOSUB 13600 / CHECK EXTENDED ASCII CODES
15200 IF C = 13 GOTO 15310 / RETURN 
15210 IF C = 17 OR C = 8 GOTO 15710 / BACKSPACE
15220 IF C = 19 GOTO 15370 / CURSER LEFT
15230 IF C = 4  GOTO 15410 / CURSER RIGHT
15240 IF C = 6 GOTO 15450 / INSERT
15250 IF C = 1 GOTO 15570 / DELETE
15260 IF KT > MAX GOTO 15160 / CAN'T INPUT PAST MAXIMUM CHARACTER
15270 K$(KT) = K$ / K$(COUNT) EQUALS THE CHARACTER
15290 PRINT K$(KT); / PRINT THE CHARACTER
15295 IF KT > KTMAX THEN KTMAX = KT  / IF COUNT IS GREATER THEN MAXIMUM COUNT THEN MAXIMUM COUNT EQUALS THE COUNT
15300 GOTO 15150
15310 REM * RETURN
15320 FOR T9 = 1 TO MAX
15330 A$ = A$ + K$(T9) / A$ IS ALL THE CHARACTERS STRUNG (CONCATED) TOGETHER
15332 IF K$(T9) = "^" GOTO 15830 / NEW ENTRY OPTION SAME AS LAST RECORD OVER 1
15333 IF K$(T9) = ">" GOTO 15950 / NEW ENTRY OPTION ABORT ENTRY
15335 IF K$(T9) = "=" GOTO 15850 / NEW ENTRY OPTION  EQUALS LAST RECORD 
15338 IF K$(T9) = "<" GOTO 15900 / NEW ENTRY OPTION START RECORD OVER
15340 NEXT T9
15350 PRINT "" / PRINTS TO NEXT LINE
15360 RETURN  / TO PROGRAM WHERE THE INPUT SUBROUTINE WAS CALLED FROM, A$ IS THE RETURNED STRING
15370 REM * MOVE CURSE BACK
15380 IF KT = 1 GOTO 15160 / CAN'T MOVE CURSOR PAST FIRST CHARACTER
15385 KT = KT - 1 / COUNT EQUALS COUNT - 1
15390 PRINT CHR$(CH); / BACKSPACE ONE CHARACTER
15400 GOTO 15160
15410 REM * MOVE CURSER FORWARD
15420 IF KT >= MAX GOTO 15160 / CAN'T MOVE CURSER FORWARD
15425 IF KT >  KTMAX  GOTO 15160 / CAN'T MOVE CURSOR FORWARD
15427 PRINT K$(KT); / PRINT OVER ONE CHARACTER
15430 KT = KT + 1 / COUNT = COUNT PLUS ONE
15440 GOTO 15160 
15450 REM INSERT*
15460 X9 = MAX
15470 WHILE X9 > KT
15480 X9 = X9 - 1
15490 K$(X9 + 1) = K$(X9) / MOVE CHARACTERS OVER ONE
15500 WEND 
15510 K$(KT) = " " / PRINT A BLANK WHERE THE CURSER IS
15520 KTMAX = KTMAX + 1 / MAXIMUM COUNT = MAXIMUM COUNT + 1
15525 IF KTMAX > MAX THEN KTMAX = MAX / IF THE COUNT MAXIMUM IS GREATER THEN THE MAXIMUM THEN THE COUNT MAXIMUM EQUALS THE MAXIMUM
15530 FOR T9 = KT TO KTMAX  
15540 PRINT K$(T9); / PRINT THE NEW CHARACTERS
15550 NEXT T9
15552 T6 = (KTMAX - KT) +1
15554 FOR T7 = 1 TO T6
15556 PRINT CHR$(CH); / BACKSPACE TO WHERE THE CURSOR WAS
15558 NEXT T7
15560 GOTO 15160
15570 REM *DELETE
15575 IF KT > KTMAX GOTO 15170 / CAN'T DELETE HERE
15578 IF KTMAX = 1 GOTO 15160 / CAN'T DELETE HERE
15580 K$(MAX + 1) = "" / INITILIZE TO NULL
15590 X9 = KT 
15600 WHILE X9 <= KTMAX
15610 K$(X9) = K$(X9 + 1) / MOVE CHARACTERS OVER
15620 X9 = X9 + 1
15630 WEND 
15650 KTMAX = KTMAX - 1
15660 FOR T9 = KT TO KTMAX
15670 PRINT K$(T9); / PRINT NEW CHARACTERS
15680 NEXT T9
15690 PRINT "_";
15692 T7 = (KTMAX - KT) + 2 
15694 FOR T6 = 1 TO T7
15696 PRINT CHR$(CH); / BACKSPACE TO WHERE THE CURSER WAS
15698 NEXT T6
15700 GOTO 15160
15710 REM * BACKSPACE
15720 IF KT = 1 GOTO 15160 /CAN'T BACKSPACE
15725 K$(KT) = " " / SET TO BLANK
15730 KT = KT - 1 / DECREMENT COUNT
15735 K$(KT) = " " 
15740 PRINT CHR$(CH); / BACKSPACE
15750 PRINT "_"; / PRINT UNDERLINE
15755 PRINT CHR$(CH); / BACKSPACE
15760 GOTO 15160 
15800 REM * SAME ENTRY AS LAST RECORD
15810 DT# = X(N) / RETURNS THE VALUE OF THE LAST RECORD AS DT#
15820 RETURN
15830 REM * SAME ENTRY AS LAST RECORD OVER ONE COLUMN
15835 DT# = X(N + 1) / RETURNS THE VALUE OF THE LAST RECORD OVER ONE AS DT#
15840 RETURN
15850 REM * SAME ENTRY AS LAST RECORD ALFANUMERIC
15860 A$ = CK$(N) / RETURNS THE SAME ENTRY AS LAST RECORD AS A$
15870 RETURN
15900 REM RESTART DATA ENTRY*
15910 REFLG = 1 / RESTART FLAG = YES RESTART
15915 IF NE = 0 GOTO 15340 / IF THIS IS NOT A NEW ENTRY THEN DISREGARD
15920 RETURN
15950 REM * ABORT NEW DATA ENTRY
15960 IF NE = 0 GOTO 15340 / IF THIS IS NOT A NEW ENTRY THEN DISREGARD 
15970 ABORTFLG = 1 / ABORT FLAG = YES ABORT
15980 RETURN
16000 GOSUB 13000 / CLEAR SCREEN
16010 PRINT "***********  MAKE SURE YOUR PRINTER IS ON  **************"
16020 PRINT ""
16030 PRINT "********************  WITH PAPER  ***********************"
16040 PRINT ""
16050 PRINT "**********  PRESS ANY KEY TO START PRINTING  ************"
16055 PRINT ""
16057 PRINT "     *******  PRESS THE LETTER A TO ABORT  *******"
16070 T$ = INKEY$
16073 IF T$ = "" GOTO 16070 / LOOP UNTIL A KEY IS PRESSED
16075 PRINT T$
16085 IF T$ = "A" OR T$ = "a" THEN GOTO 3010 / IF "A" IS PRESSED THEN GOTO FILE OPTIONS
16090 RETURN
16200 REM * PRINT OUT FIELDS
16205 T2 = 1 / INITIALIZE TAB TO 1
16210 FOR T = 1 TO NREC(A) / START LOOP PRINTING FIELD NAMES
16220 PRINT TAB(T2) T;"-";FLDN$(A,T); / PRINT FIELD NUMBER AND NAME
16230 IF T MOD 2 = 0 THEN PRINT "" /  IF EVEN NUMBER FIELD PRINT TO NEXT LINE
16235 IF T MOD 2 = 0 THEN T2 = -25 / IF EVEN NUMBER FIELD RESET TAB
16237 T2 = T2 + 26 / INCREMENT TAB BY 26
16340 NEXT T
16350 RETURN
16800 REM *  HARD DISK OPTION
16810 GOSUB 13000 / CLEAR SCREEN
16820 PRINT "****************  ARE YOU USING A HARD DISK  *******************"
16830 PRINT ""
16840 PRINT "          1 - NO , I AM USING FLOPPY DISKS"
16845 PRINT ""
16850 PRINT "          2 - YES, I AM USING A HARD DISK"
16852 PRINT "               with all my files on the hard disk"
16854 PRINT "               and the hard disk is the default drive"
16860 PRINT ""
16870 PRINT "*************  ENTER THE NUMBER THEN PRESS RETURN  *************"
16880 GOSUB 14000 / INTEGER INPUT SUBROUTINE
16890 IF DT#<1 OR DT#>2 GOTO 16880 / IF INPUT OUT OF RANGE THEN REPROMPT
16900 HDISK = DT# / HARD DISK FLAG DT# (RETURNED FROM INPUT SUBROUTINE)
16910 RETURN
17000 REM
17005 RNB = 0
17010 GOSUB 13000 / CLEAR SCREEN
17020 PRINT "******************  SEARCH A SORTED FILE  *******************"
17030 PRINT ""
17040 GOSUB 16200  / PRINT FIELDS SUBROUTINE
17060 PRINT ""
17070 PRINT "***********  ENTER ZERO TO RETURN TO INITIAL MENU  **********"
17080 PRINT ""
17090 PRINT "************  WHAT FIELD IS THIS FILE SORTED BY  ************"
17100 GOSUB 14000 / INPUT INTEGER SUBROUTINE
17101 IF DT# <0 OR DT# >NREC(A)  GOTO 17100 / IF OPTION OUT OF RANGE REENTER 
17105 SF = DT# / SF, SEARCH THIS FIELD EQUALS THE NUMBER RETURNED FROM INPUT SUBROUTINE
17110 IF SF = 0 GOTO 3010 / IF OPTION 0 RETURN TO FILE OPTION
17120 PRINT "*********  WHAT VALUE DO YOU WANT TO SEARCH FOR ?  **********"
17130 PRINT FLDN$(A,SF);"=" ; 
17150 ON FTY(A,SF) GOTO 17160,17200,17250,17300 / ON FIELD TYPE GOTO
17160 MAX = FL(A,SF) / MAXIMUM INPUT STRING EQUALS THE FIELD LENGTH OF THE FIELD WE ARE SEARCHING
17162 GOSUB 15030 / INPUT STRING SUBROUTINE
17164 SV$ = A$ / SV$, THE VALUE TO SEARCH FOR EQUALS A$ ( RETURNED FROM SUBROUTINE
17166 LN = LEN(A$) / LN = LENGTH OF THE STRING YOU ARE SEARCHING FOR
17170 GOTO 17350 
17200 GOSUB 14100 / INPUT INTEGER SUBROUTINE
17202 SV% = DT# / SEARCH VALUE EQUALS VALUE RETURNED FROM SUBROUTINE
17205 SV$ = MKI$(SV%) / CONVERT SEARCH VALUE TO A STRING
17210 GOTO 17350
17250 GOSUB 14200 / INPUT SINGLE PRECISION SUBROUTINE
17252 SV! = DT# / SEARCH VALUE EQUALS VALUE RETURNED FROM SUBROUTINE
17255 SV$ = MKS$(SV!) / CONVERT SEARCH VALUE TO A STRING
17260 GOTO 17350 
17300 GOSUB 14300 / INPUT DOUBLE PRECISION SUBROUTINE
17303 INPUT SV# 
17305 SV$ = MKD$(DT#) / CONVERT TO A STRING
17350 REM START SEARCH*
17360 RN = 8192 / INITIALIZE RECORD NUMBER TO 8192
17365 I!= RN  / INITIALIZE I! TO 8192
17368 IF RN > MRN GOTO 17800 / IF RECORD NUMBER IS GREATER THEN THE MAXIMUM RECORD NUMBER THEN GOTO 17800
17370 GET #1,RN / GET RECORD NUMBER RN
17375 I!= I!/ 2 / REDUCE THE INCREMENT VALUE BY HALF
17376 IF FTY(A,SF) = 1 THEN XT$ = LEFT$(X$(SF),LN) ELSE XT$=X$(SF) / IF THE SEARCH FIELD IS A STRING THEN TAKE THE LEFT PART OF THE STING WITH LENGTH LN. IF THE SEARCH VALUE IS A NUMBER THE LEAVE IT THE WAY IT IS.
17377 IF I!< 1  THEN GOTO 17900 / IF INCREMENT VALUE IS LESS THEN ONE THEN END SEARCH
17378 IF XT$ = SV$ THEN RNB = RN / IF THE FIELD AND SEARCH VALUE MATCH THEN SET RNB (RECORD NUMBER BACKUP MATCH) TO RECORD NUMBER
17380 IF XT$ < SV$ THEN GOTO 17500 / IF THE FIELD IS LESS THEN THE VALUE SEARCHING FOR GOTO 17500
17390 RN = RN - I! / SUBTRACT INCREMENT VALUE FROM RECORD NUMBER
17400 GOTO 17368
17500 RN = RN + I! / ADD INCREMENT VALUE TO RECORD NUMBER
17510 GOTO 17368
17600 REM
17610 GOTO 8057 / SHOW RECORD ON SCREEN
17800 REM ON ERROR ROUTINE / IS NO LONGER AN ON ERROR ROUTINE. RECORD NUMBER LARGER THEN MAXIMUM FILE NUMBER
17801 I!= I!/ 2 / HALF INCREMENT VALUE
17802 IF I!< 1 GOTO 17900 / IF INCREMENT VALUE LESS THEN ONE END SEARCH
17805 RN = RN - I! / SUBTRACT RECORD NUMBER FROM INCREMENT VALUE
17810 GOTO 17368 / CONTINUE SEARCH
17900 IF XT$ = SV$ THEN GOTO 17950 / IF CURRENT RECORD MATCHES GOTO 17950
17902 IF RNB > 0 THEN RN = RNB / IF BACKUP MATCH THEN RECORD NUMBER = RECORD BACKUP MATCH.  
17904 IF RNB > 0 THEN GOTO 8057 / IF BACKUP MATCH THEN SHOW RECORD ON SCREEN
17906 PRINT " RECORD NOT FOUND "
17910 GOTO 17000 / BACK TO INITIAL SEARCH MENU
17950 PRINT "RN = ";RN
17960 GOTO 8057 / SHOW RECORD ON SCREEN
18000 REM 
18005 SFLG = 1 / SEARCH FLAG EQUALS YES
18010 GOSUB 13000 / CLEAR SCREEN
18020 PRINT "*********************  SEARCH  FILE  ***********************"
18030 PRINT ""
18040 GOSUB 16200 / PRINT FIELDS SUBROUTINE
18060 PRINT ""
18070 PRINT "***********  ENTER ZERO TO RETURN TO INITIAL MENU  **********"
18080 PRINT ""
18090 PRINT "*************  WHICH FIELD DO YOU WANT TO SEARCH  ***********"
18100 GOSUB 14000 / INPUT INTEGER LESS THE 100 SUBROUTINE
18101 IF DT# <0 OR DT# >NREC(A) GOTO 18100 / IF INPUT OUT OF RANGE THEN REENTER
18105 SF = DT# / SEARCH FIELD EQUALS NUMBER RETURNED FROM SUBROUTINE
18110 IF SF = 0 GOTO 3010 / IF OPTION = 0 THEN GOTO FILE OPTIONS
18120 PRINT "*********  WHAT VALUE DO YOU WANT TO SEARCH FOR ?  **********"
18130 PRINT FLDN$(A,SF);"=" 
18150 ON FTY(A,SF) GOTO 18160,18200,18250,18300 / ON FIELD TYPE OF THE SEARCHED FIELD GOTO
18160 MAX = FL(A,SF) / MAXIMUM LENGTH OF STRING TO INPUT EQUALS FIELD LENGTH
18162 GOSUB 15030 / INPUT STRING SUBROUTINE
18164 SV$ = A$ / SEARCH VALUE EQUALS VALUE RETURNED FROM INPUT SUBROUTINE
18166 LN = LEN(A$) / LN EQUALS LENGTH OF A$
18170 GOTO 18350 / GOTO START SEARCH
18200 GOSUB 14100 / INPUT INTEGER SUBROUTINE 
18202 SV% = DT# / SEARCH VALUE EQUALS VALUE RETURNED FROM INPUT SUBROUTINE
18205 SV$ = MKI$(SV%) / CONVERT SEARCH VALUE TO A STRING
18210 GOTO 18350 / GOTO START SEARCH
18250 GOSUB 14200 / INPUT SINGLE PRECISION SUBROUTINE
18252 SV! = DT# / SEARCH VALUE EQUALS VALUE RETURNED FROM INPUT SUBROUTINE
18255 SV$ = MKS$(SV!) / CONVERT SEARCH TO A STRING
18260 GOTO 18350 / GOTO START SEARCH
18300 GOSUB 14300 / INPUT DOUBLE PRECISION SUBROUTINE
18303 INPUT SV#  
18305 SV$ = MKD$(DT#) / CONVERT SEARCH VALUE TO A STRING
18350 REM * START SEARCH
18360 GOSUB 18800 / GET STARTING RECORD NUMBER
18365 FOR RN = RNSS TO MRN / START SEARCH LOOP FOR RECORD NUMBER START SEARCH TO MAXIMUM RECORD NUMBER
18370 GET #1,RN / GET RECORD NUMBER RN
18376 IF FTY(A,SF) = 1 THEN XT$ = LEFT$(X$(SF),LN) ELSE XT$=X$(SF) / IF SEARCH FIELD IS A STRING THEN TAKE THE LEFT PART OF THE STING EQUAL IN LENGTH TO THE VALUE YOU ARE SEARCHING FOR. IF A NUMBER TAKE ENTIRE FIELD
18378 IF XT$ = SV$ THEN GOTO 8057 / IF FIELD AND SEARCH VALUE MATCH THE SHOW RECORD
18380 NEXT RN / END OF SEARCH LOOP
18390 GOTO 3010 / GOT TO FILE OPTIONS
18800 REM *  GET STARTING AND ENDING FILE
18803 PRINT ""
18805 PRINT "MINIMUM RECORD NUMBER = 1  MAXIMUM RECORD NUMBER = ";MRN
18810 PRINT "******  WHICH RECORD NUMBER DO YOU WANT TO START THE SEARCH AT  ******"
18820 GOSUB 14100 / INPUT INTEGER SUBROUTINE
18830 IF DT#<1 OR DT#>MRN THEN 18820 / RECORD NUMBER OUT OF RANGE THEN REENTER
18840 RNSS = DT# / RECORD NUMBER START SEARCH EQUAL THE VALUE RETURNED FROM THE INPUT SUBROUTINE
18900 RETURN
```
{% endraw %}

## REMARKS3.BAS

{% raw %}
```bas
20000 REM *****  GET UPPER LIMIT 
20010 GOSUB 20050 / GET UPPER AND LOWER LIMITS OF RELATED SUBRECORDS SUBROUTINE
20020 GOSUB 20400 / INITIALIZE SUMS TO ZERO SUBROUTINE
20030 GOTO 21000 / PRINT REPEATING FIELDS SUBROUTINE
20050 RNU = RN / INITIALZE RECORD NUMBER UPPER TO RECORD NUMBER
20060 TESTH$ = TEST$ / TEST HOLD = TEST$ OF THE CURRENT RECORD NUMBER.  THE NON REPEATING PART OF THE RECORD WAS FIELDED AS TEST$.
20100 WHILE TEST$ = TESTH$ / WHILE THERE IS NO CHANGE IN THE NONREPEATING PART OF THE RECORD  
20110 RNU = RNU - 1 / DECREMENT RECORD NUMBER UPPER
20115 IF RNU = 0 THEN GOTO 20140 / CAN'T DECREMENT TO ZERO
20120 GET #1,RNU / GET RECORD NUMBER
20130 WEND / END LOOP
20140 RNU = RNU + 1 / ADD ONE TO RECORD NUMBER BECAUSE WE WENT ONE PAST IT 
20200 REM * GET LOWER LIMIT 
20250 RNL = RN / INITIALIZE RECORD NUMBER LOWER TO CURRENT RECORD NUMBER
20290 GET #1,RNL / GET RECORD NUMBER LOWER
20300 WHILE TEST$ = TESTH$ / WHILE THERE IS NO CHANGE IN THE REPEATING PART OF THE RECORD
20310 RNL = RNL + 1 / INCREMENT RECORD NUMBER LOWER
20315 IF RNL > MRN THEN GOTO 20340 / CAN'T INCREMENT PAST END OF FILE
20320 GET #1,RNL / GET RECORD NUMBER LOWER
20330 WEND
20340 RNL = RNL - 1 / SUBTRACT ONE SINCE WE WENT ONE PAST IT 
20350 RETURN
20400 REM * SET SUMS TO ZERO
20410 FOR T = 1 TO 28 / START LOOP.
20420 SUM#(T) = 0 / INITIALIZE SUM TO ZERO
20430 NEXT T
20450 RETURN
21000 REM *  PRINT REPIOTIOUS FIELDS
21050 OFFSET = -1 / INITIALZE OFFSET TO -1
21100 FOR TH = RNU TO RNL / START LOOP TO PRINT ALL RELATED SUBRECORDS
21105 OFFSET = OFFSET + 1 / INCREMENT THE OFFSET BY ONE
21110 GET #1,TH / GET THE RECORD NUMBER
21120 T2 = LSTE + 1 / T2 EQUALS THE FIELD NUMBER OF THE FIRST REPEATING FIELD
21130 FOR N = T2 TO NREC(A) / START LOOP TO PRINT ALL REPEATING FIELDS
21140 GOSUB 34110 / PRINT EACH REPEATING FIELD SUBROUTINE
21150 NEXT N / END EACH FIELD LOOP
21160 NEXT TH / END EACH RECORD NUMBER LOOP
21180 LI = 1 / LINE NUMBER
21182 TB = 47 / COLUMN NUMBER 47
21185 GOSUB 13050 / LOCATE SUBROUTINE
21190 PRINT "RECORDS";RNU;" TO ";RNL;"  *******"
21195 RN = RNL / CHANGE CURRENT RECORD NUMBER TO RECORD NUMBER LOWER
21200 GOTO 8510 / RETURN TO OPTIONS
26000 REM 
26100 EFLG = 1 / END OF FILE FLAG EQUALS YES
26200 PRINT "**********  END OF FILE  ***********"
26202 PRINT "**** PRESS ANY KEY TO CONTINUE ****"
26204 IF INKEY$ = "" GOTO 26204 / LOOP UNTILL ANY KEY IS PRESSED
26210 GOTO  3010 / RETURN TO FILE OPTIONS
26500 REM 
26600 PRINT "**********  END OF FILE  ***********"
26610 PRINT "**** PRESS ANY KEY TO CONTINUE ****"
26620 IF INKEY$ = "" GOTO 26620 / LOOP UNTILL ANY KEY IS PRESSED
26635 EFLG = 1 / END OF FILE FLAG EQUALS YES
26640 RETURN        
26800 REM 
26900 PRINT "******  RECORD NUMBER REQUESTED DOES NOT EXIST  ******"
26910 GOTO 8020 / ASK FOR ANOTHER RECORD NUMBER 
27000 REM * READ SCREEN TEST
27005 GOSUB 10900 / PUT PROGRAM DATA DISK IN DEFAULT DRIVE PROMPT
27010 OPEN "I",#1,"SCTEST" / OPEN THE SCREEN TEST FILE AS A SEQUENTIAL ACCESS FILE
27020 FOR T = 1 TO 40
27030 INPUT #1,SCRN(T) / READ CUSTOM SCREEN FLAG FOR EACH FILE
27040 NEXT T
27050 CLOSE #1
27060 RETURN
27070 REM * READ SCREEN DESCRIPTION
27071 GOSUB 10900 / PUT THE PROGRAM DATA DISK IN DEFAULT DRIVE PROMPT
27072 A$ = STR$(A) / CONVERTS FILE NUMBER TO A STRING
27074 A$ = MID$(A$,2) / GETS RID OF LEADING SPACE
27076 A$ = "SCREEN" + A$ / CONCATE "SCREEN" AND FILE NUMBER
27080 OPEN "I",#2,A$ / OPEN SCREEN DESCRIPTION FILE
27090 FOR T = 1 TO 18 
27100 INPUT #2,SW$(T) / INPUT FROM DISK THE 18 OVERLAY LINES
27110 NEXT T
27120 FOR T = 1 TO NREC(A) / START LOOP READING EACH FIELD
27130 INPUT #2,LE(T),CE(T) / INPUT LINE NUMBER AND COLUMN NUMBER FOR EACH FIELD
27140 IF FTY(A,T) = 2 THEN INPUT #2,LEK(T),CEK(T) / IF FIELD IS AN INTEGER THE INPUT THE LINE AND COLUMN TO PRINT THE KEY AT
27150 NEXT T / END LOOP FOR EACH FIELD
27160 INPUT #2,RPT / INPUT REPEATING FIELD OPTION
27170 IF RPT = 2 THEN GOSUB 27200 / IF REPEATING OPTION EQUALS YES THEN GOSUB 
27180 CLOSE #2
27190 RETURN
27200 INPUT #2,LSTE / INPUT THE NUMBER OF THE LAST NON REPEATING FIELD
27210 T2 = LSTE + 1 / T2 EQUALS FIRST REPEATING FIELD
27220 FOR T = T2 TO NREC(A) / FOR ALL THE REPEATING FIELDS
27230 INPUT #2,SUMF(T) / INPUT SUM OPTION
27240 NEXT T
27245 H = 0 / INITIALZE H TO 0 
27250 FOR T = 1 TO LSTE / FOR T = 1 TO LAST NON REPEATING FIELD
27260 H = FL(A,T) + H 
27270 NEXT T
27280 FIELD #1,H AS TEST$ / FIELD THE NOREPEATING FIELDS AS TEST$
27300 RETURN
28000 REM 
28100 GOSUB 13000 / CLEAR SCREEN
28110 PRINT "**********  DO YOU WANT TO USE THE STANDARD OR YOUR CUSTOM SCREEN  **********"
28115 PRINT ""
28120 PRINT "                        1 - USE THE CUSTOM SCREEN"
28125 PRINT ""
28130 PRINT "                        2 - USE THE STANDARD SCREEN"
28135 PRINT ""
28140 PRINT "*******************  ENTER THE NUMBER THEN PRESS RETURN  ********************"
28200 GOSUB 14000 / INPUT INTEGER LESS THEN 100 SUBROUTINE
28210 IF DT# < 1 OR DT# > 2 THEN 28200 / IF OPTION OUT OF RANGE THEN REENTER
28220 CSCR = DT# / CLEAR SCREEN OPTION EQUALS THE VALUE RETURNED FROM THE INPUT SUBROUTINE
28230 IF CSCR = 1 THEN GOSUB 27070 / IF USING THE CUSTOM SCREEN THEN READ THE CUSTOM SCREEN DATA
28300 RETURN
29000 REM * READ IDEX SUBROUTINE
29010 OPEN "I",#1,"IDEX"   
29020 FOR T = 1 TO MAXF / FOR T = 1 TO MAXIMUM FILE NUMBER
29030 INPUT #1,D,D,D,MFLG(T) / INPUT LIMITS FLAG
29040 NEXT T
29050 CLOSE #1
29060 RETURN
29070 REM * READ MAX MIN DATA
29080 A$ = STR$(A) / CONVERT FILE NUMBER TO A STRING
29090 A$ = MID$(A$,2) / GET RID OF LEADING SPACE
29100 A$ = "MAXMIN" + A$ / SET FILE NAME TO "MAXIMIM" + FILE NUMBER
29110 OPEN "I",#2,A$ / OPEN LIMITS DESCRIPTION FILE
29120 FOR T = 1 TO NREC(A) / FOR EACH FIELD
29130 INPUT #2,MAXC#(T),MINC#(T) / INPUT MAXIMUM AND MINIMUM
29140 NEXT T
29150 CLOSE #2
29160 RETURN
29190 N = D 
29200 REM * CHECK MAX LIMITS
29210 IF DT# < MINC#(N) OR DT# > MAXC#(N) THEN GOSUB 29300 / IF NUMBER INPUTED IS OUTSIDE ITS LIMITS THEN GOSUB 29300
29220 RETURN
29300 PRINT CHR$(7) / SOUNDS BUZZER
29310 PRINT CHR$(7) / SOUNDS BUZZER
29329 RETURN
30000 REM * PRINT OVERLAY
30005 GOSUB 20400
30010 OFFSET = 0 / INITIALIZE OFFSET TO 0
30100 FOR T = 1 TO 18
30110 PRINT SW$(T) / PRINT THE OVERLAY LINES
30120 NEXT T
30130 RETURN
31000 REM * PRINT FIELDS
31010 X(N) = I# 
31100 IF LE(N) = 0 THEN RETURN / IF LINE NUMBER = 0 THEN RETURN (DO NOT SHOW FIELD OPTION)
31110 LI = LE(N) + 1 + OFFSET / LINE NUMBER EQUALS STANDARD LINE NUMBER PLUS ONE PLUS THE OFFSET
31115 TB = CE(N) / COLUMN NUMBER
31120 GOSUB 13050 / LOCATE SUBROUTINE
31130 ON FTY(A,N) GOSUB 32000,32100,32100,32100,32200 / ON FIELD TYPE GOSUB
31140 IF KEYLIST(A,N) > 0 THEN GOSUB 33000 / IF THERE IS A KEYLIST GOSUB 33000
31145 IF SUMF(N) = 2 THEN GOSUB 39200 / IF THERE ARE SUMS THEN GOSUB 39200
31150 RETURN
32000 REM STRINGS *
32010 PRINT I$ / PRINT THE STRING
32020 RETURN
32100 PRINT I# / PRINT INTEGERS, SINGLE AND DOUBLE PRECISION
32110 RETURN
32200 REM *$$$$
32210 PRINT USING "**$########.##";I# / PRINT DOLLAR AND CENTS AMOUNT
32220 RETURN
33000 REM * PRINT KEYS
33100 IF LEK(N) = 0 THEN RETURN / IF LINE NUMBER OF KEY EQUALS 0 THEN RETURN
33110 LI = LEK(N) + 1 + OFFSET / LINE NUMBER EQUALS STANDARD LINE NUMBER PLUS 1 PLUS OFFSET
33120 REM
33130 TB = CEK(N) / COLUMN NUMBER
33140 GOSUB 13050 / LOCATE SUBROUTINE
33150 T1 = KEYLIST(A,N) / THE LIST NUMBER FOR THIS FIELD
33160 PRINT L$(T1,I#) / PRINTS OUT THE KEY FOR THIS FIELD
33170 RETURN
34000 REM * PRINT FIELDS
34050 GOSUB 30000
34100 FOR N = 1 TO NREC(A) / START LOOP, FOR EACH FIELD
34102 GOSUB 34110 / CONVERT STRINGS TO NUMBER 
34104 NEXT N
34110 ON FTY(A,N) GOSUB 34200,34300,34500,34600,34600 / ON FIELD TYPE GOSUB
34120 GOSUB 31000 / PRINT FIELD SUBROUTINE
34140 RETURN
34200 I$ =  X$(N)
34250 RETURN  
34300 I#=CVI(X$(N)) / CONVERT STRING TO NUMBER
34310 X(N) = I#
34350 RETURN
34500 I#=CVS(X$(N)) / CONVERT STRING TO NUMBER
34550 RETURN
34600 I#=CVD(X$(N)) / CONVERT STRING TO NUMBER
34610 X(N) = I#
34650 RETURN
35000 REM * PRINT OVERLAY
35010 EFLG = 0 / END OF OVERLAY FLAG = NO
35030 IF RPT = 2 THEN LPRINT "AND SUBRECORDS" ELSE LPRINT "" / IF REPEATING FIELDS THEN PRINT ...
35050 GOSUB 20400 / SET SUMS TO 0
35100 FOR T = 1 TO 18
35110 LPRINT SW$(T); / PRINT OVERLAYS
35115 GOSUB 35200  / PRINT ANY FIELDS ON THIS LINE
35117 IF EFLG = 1 THEN RETURN / IF END OF OVERLAY THEN RETURN
35120 NEXT T
35130 RETURN
35200 REM * LPRINT FIELDS
35210 FOR T2 = 1 TO NREC(A) / FOR ALL FIELDS
35220 IF LE(T2) = T THEN GOSUB 36000 / IF FIELD IS ON THIS LINE GOSUB 36000
35300 IF LEK(T2) = T THEN GOSUB 39000 / IF KEY IS ON THIS LINE GOSUB 39000
35400 NEXT T2
35410 LPRINT ""
35500 RETURN
35600 REM * LPRINT REPEATING FIELDS
35650 GOSUB 20050 / GET UPPER AND LOWER LIMITS 
35655 T3 = LSTE + 1 / FIRST REPEATING FIELD
35657 RN = RNL / RECORD NUMBER = RECORD NUMBER LOWER
35660 FOR TH = RNU TO RNL / FOR ALL RELATED RECORDS
35665 GET #1,TH / GET RECORD NUMBER
35670 FOR N = T3 TO NREC(A) / FOR ALL REPEATING FIELDS
35675 T2 = N 
35680 GOSUB 36100 / PRINT FIELDS
35685 IF SUMF(N) = 2 THEN SUM#(N) = SUM#(N) + I# / IF SUMS FOR THIS FIELD THEN ADD TO SUM
35687 IF FTY(A,N) = 2 AND LEK(N) > 0 THEN GOSUB 39000 / IF THERE ARE KEYLIST AND THEY ARE SHOWN THEN GOSUB 39000
35690 NEXT N / END LOOP ON FIELDS
35700 LPRINT ""
35710 NEXT TH / END LOOP ON RELATED RECORDS
35750 REM * LPRINT SUMS
35755 EFLG = 1 / END FLAG = YES
35760 FOR N = LSTE TO NREC(A) / FOR ALL REPEATING FIELDS
35770 IF SUMF(N) = 2 THEN GOSUB 35900 / IF SUMS ARE SPECIFIED THEN GOSUB 35900
35780 NEXT N 
35790 RETURN
35900 REM 
35905 TB = CE(N) / COLUMN 
35906 LPRINT TAB(TB); / LPRINT OVER TO THE COLUMN
35907 IF FTY(A,N) = 5 THEN GOTO 35950 / IF DOLLAR AND CENTS AMOUNT GOTO 35950
35910 LPRINT TAB(TB) SUM#(N); / PRINT SUM
35920 RETURN
35950 LPRINT USING "**$########.##";SUM#(N); / PRINT DOLLAR AND CENTS SUMS
35960 RETURN
36000 REM * LPRINT FIELDS
36050 N = T2
36060 IF RPT = 2 AND N > LSTE THEN GOTO 35600 / IF THERE ARE REPEATING FIELDS AND THIS FIELD IS ONE OF THEM THEN GOTO 35600
36100 ON FTY(A,T2) GOSUB 34200,34300,34500,34600,34600 / ON FIELD TYPE GOTO
36200 GOTO 37000
37000 REM * PRINT FIELDS
37115 TB = CE(T2) / COLUMN NUMBER
37125 LPRINT TAB(TB) ""; / LPRINT OVER TO THE COLUMN
37130 ON FTY(A,T2) GOSUB 38010,38100,38100,38100,38200 / ON FIELD TYPE GOTO
37150 RETURN
38000 REM STRINGS *
38010 LPRINT I$; PRINT STRINGS
38020 RETURN
38100 LPRINT I#; PRINT NUMBERS 
38110 RETURN
38200 REM * $$$$
38210 LPRINT USING "**$########.##";I#; / PRINT DOLLAR AND CENTS NUMBERS
38220 RETURN
39000 REM  * PRINT KEYS
39010 ON FTY(A,T2) GOSUB 34200,34300,34500,34600,34600 / ON FIELD TYPE GOTO
39090 N = T2
39130 TB = CEK(T2) / COLUMN TO PRINT KEY AT
39140 LPRINT TAB(TB) ""; / PRINT OVER TO THE COLUMN
39150 T1 = KEYLIST(A,T2) / THE LIST NUMBER
39160 LPRINT L$(T1,I#); / PRINT THE KEYLIST
39170 RETURN
39200 REM * PRINT TOTALS
39300 SUM#(N) = SUM#(N) + I# / ADD TO SUM
39310 LI = 19 / LINE 19
39320 GOSUB 13050 / LOCATE SUBROUTINE
39330 IF FTY(A,N) = 5 THEN GOTO 39600 / IF DOLLAR AND CENTS AMOUNT GOTO 39600
39400 PRINT SUM#(N);
39410 RETURN
39600 REM $$$$$
39610 PRINT USING "**$########.##";SUM#(N); / PRINT DOLLAR AND CENTS AMOUNT
39620 RETURN
```
{% endraw %}

## REMARKS4.BAS

{% raw %}
```bas
40000 REM * NEW INPUT
40002 ABORTFLG = 0 / INITIALIZE ABORT FLAG TO 0
40008 IF REALFLG(A) = 2 THEN GOSUB 60200 / IF THERE ARE REALTIME TRANSFERS GOTO OPEN REALTIME FILE SUBROUTINE
40010 GOSUB 13000 / CLEAR SCREEN
40015 IF DATAIN = 1 GOTO 40500 / IF INPUT DESCRIPTION IS ALREADY IN SKIP INPUTTING THE DATA
40017 GOSUB 40020 / GOSUB THE INPUT DATA ROUTINE
40018 GOTO 40500 / SKIP OVER THE INPUT DATA ROUTINE
40020 REM  READ INPUT DATA 
40021 GOSUB 49000 / SET GLOBAL FLAGS TO 0 
40022 GOSUB 10900 / PUT PROGRAM DATA DISK IN DRIVE PROMPT
40025 A$ = STR$(A) / CONVERT THE FILE NUMBER TO A STRING
40027 A$ = MID$(A$,2) / GET RID OF THE LEADING SPACE
40030 N$ = "IPUTD"+A$ / FILE NAME = "IPUTD" PLUS FILE NUMBER
40040 OPEN "I",#2,N$ / OPEN INPUT DATA FILE
40050 INPUT #2,NREC(A) / INPUT NUMBER OF FIELDS IN THIS FILE
40060 FOR N3= 1 TO NREC(A) / FOR EACH FIELD IN THE FILE
40062 N = N3 
40070 INPUT #2,IOPT(N) / GET THE INPUT OPTION NUMBER
40080 ON IOPT(N) GOTO 40090,40120,40150,40210,40240,40270,40430,40370,40370,40430,40430,40430,40210 / ON THE INPUT OPTION GOTO
40085 GOTO 40450 / CUSTOM INPUT OPTIONS FALL THROUGH THE ABOVE GOTO 
40090 REM OPERATOR ENTRY*
40100 INPUT #2,PROMPT$(N) / INPUT THE PROMPT
40110 GOTO 40450
40120 REM GET FROM ANOTHER FILE*
40130 INPUT #2,IFN(N),IFLD(N),IRNFLD(N) / INPUT DATA FROM THIS FILE, FROM THIS FIELD, RECORD NUMBER EQUALS THE VALUE OF THIS FIELD IN THE SOURCE FILE
40132 GFLG(IFN(N)) = 1 / SET GLOBAL FLAG TO YES 
40134 GFLG(IFLD(N)) = 1 / SET GLOBAL FLAG TO YES
40136 GFLG(IRNFLD(N)) = 1 / SET GLOBAL FLAG TO YES
40140 GOTO 40450
40150 REM ADD PREVIOUS FIELDS*
40160 INPUT #2,NOS(N) / INPUT THE NUMBER OF FIELDS TO ADD
40170 FOR T = 1 TO NOS(N) / FOR EACH FIELD TO ADD
40180 INPUT #2,ADDFLD(N,T) / ADD THIS FIELD
40185 GFLG(ADDFLD(N,T)) = 1 / SET GLOBAL FLAG TO YES
40190 NEXT T / END LOOP READING FIELDS TO ADD
40200 GOTO 40450
40210 REM SUBTRACT PREVIOUS FIELDS* / ALSO USED FOR DIVIDE 2 FIELDS
40220 INPUT #2, SUBX(N),SUBY(N) / INPUT THE FIELD NUMBERS TO SUBTRACT
40222 GFLG(SUBX(N)) = 1 / SET GLOBAL FLAG TO YES
40224 GFLG(SUBY(N)) = 1 / SET GLOBAL FLAG TO YES
40230 GOTO 40450
40240 REM MULTIPLY FIELDS*
40250 INPUT #2, MULX(N),MULY(N) / INPUT THE FIELDS TO MULTIPLY
40252 GFLG(MULX(N)) = 1 / SET GLOBAL FLAG TO YES
40254 GFLG(MULY(N)) = 1 / SET GLOBAL FLAG TO YES
40260 GOTO 40450
40270 REM GET FROM A TABLE* / COMPUTE USING TAX TABLE OPTION
40280 INPUT #2,TX(1,N),TX(2,N),TX(3,N),TX(4,N),TX(5,N),TX(6,N) / INPUT DATA FOR COMPUTING TAXES
40282 GFLG(TX(2,N)) = 1 / SET GLOBAL FLAG TO YES
40283 GFLG(TX(4,N)) = 1 / SET GLOBAL FLAG TO YES
40284 GFLG(TX(5,N)) = 1 / SET GLOBAL FLAG TO YES
40285 GFLG(TX(6,N)) = 1 / SET GLOBAL FLAG TO YES
40290 TTBL = 5 / SET TAX TABLE FLAG TO YES
40310 GOTO 40450
40370 REM MAXIMUM* / ALSO USED FOR MINIMUM
40380 INPUT #2,NOS(N) / INPUT THE NUMBER OF ITEMS YOU WANT TO COMPARE
40390 FOR T = 1 TO NOS(N) / FOR ALL FIELDS TO COMPARE
40400 INPUT #2,MAXMIN(N,T) / INPUT THE FIELD TO COMPARE
40405 GFLG(MAXMIN(N,T)) = 1 / SET GLOBAL FLAG TO 1
40410 NEXT T 
40420 GOTO 40450
40430 REM CONSTANT*
40440 INPUT #2,KC(N),CFLD(N) / INPUT THE CONSTANT AND THE FIELD OPERATED ON BY THE CONSTANT
40445 GFLG(CFLD(N)) = 1 / SET GLOBAL FLAG TO YES
40450 NEXT N3   
40460 CLOSE #2 
40470 DATAIN = 1 / SET INPUT DATA IN FLAG TO YES
40480 RETURN
40500 REM OPEN SECOND FILE*
40505 IF TWOOPEN = 1 THEN 40637 / IF SECOND FILE TO INPUT DATA FROM IS ALREADY OPEN THEN SKIP THIS SECTION
40507 TWOOPEN = 1 / SET SECOND FILE OPEN FLAG TO YES
40510 FOR T = 1 TO NREC(A) / FOR EACH FIELD IN THE FILE
40520 IF IOPT(T) = 2 GOTO 40600 / IF INPUT OPTION IS GET DATA FROM ANOTHER FILE THEN OPEN THE SECOND FILE SUBROUTINE
40530 NEXT T 
40540 GOTO 40640
40600 B = IFN(T) / B, THE SECOND FILE EQUALS THE NUMBER OF THE FILE TO GET DATA FROM
40602 AHLD = A / HOLD THE VALUE OF THE FIRST FILE
40604 A = B 
40610 PRINT F$(B), " SECOND FILE FOR CUSTOM INPUT "
40620 GOSUB 2300 / GET DISK DRIVE THE FILE IS ON SUBROUTINE
40625 A = AHLD / RETURN THE VALUE OF AHLD
40630 GOSUB 2550 / OPEN THE SECOND FILE
40635 GOSUB 7950 / GET THE MAXIMUM RECORD NUMBER OF THE SECOND FILE
40637 IF TAXIN = 1 THEN 41000 / IF TAX TABLES ARE ALREADY IN MEMORY THEN SKIP THIS SECTION
40638 TAXIN = 1 / SET TAX TABLE IN MEMORY FLAG TO YES
40640 FOR T = 1 TO NREC(A)
40650 IF IOPT(T) = 6 GOTO 40800 / IF FILE COMPUTES TAX TABLE DATA THEN READ THE TAXSCH FILE
40660 NEXT T
40670 GOTO 41000 / SKIP READING THE TAX TABLES
40800 GOSUB 45000 / GOTO THE SUBROUTINE THAT READS THE TAX TABLES
41000 REM CUSTOM INPUT ROUTINE*  
41010 GOSUB 13000 / CLEAR SCREEN
41012 OFFSET = 0 / INITIALIZE OFFSET TO 0
41014 IF REALFLG(A) = 2 AND RN <= MRN THEN GOSUB 61300 / IF THERE ARE REALTIME TRANSFERS AND YOU ARE OVERWRITING A RECORD THEN CORRECT REALTIME TRANSFER FILE
41015 PRINT "*****************  FILE NAME :";F$(A);"  ";"RECORD NUMBER :";RN;" ****************"
41030 IF CSCR = 1 THEN GOSUB 30000 /IF USING A CUSTOM SCREEN PRINT OVERLAYS
41080 LI = 25 / LINE EQUALS 25
41082 GOSUB 13100 / LOCATE SUBROUTINE
41085 PRINT "[ = SAME AS LAST RECORD , < BACK UP , > ABORT THIS RECORD , ^ EQUALLAST OVER 1]"; / PRINTS MESSAGE AT LINE 25
41087 GOTO 41130 / SKIP THE FOLLOWING SUBROUTINE
41092 LI = 20 / LINE EQUALS 25
41093 GOSUB 13100 / LOCATE SUBRUTINE
41094 PRINT "                                                                              "   / CLEAR LINES 20 TO 24
41095 PRINT "                                                                              "
41096 PRINT "                                                                              "
41097 PRINT "                                                                              "
41100 PRINT "                                                                             "; 
41110 LI = 20 / LINE EQUALS 20
41115 GOSUB 13100 / LOCATE SUBROUTINE
41120 PRINT "ON FIELD NUMBER : ";N;" FIELD NAME : ";FLDN$(A,N);" : " / PRINT FIELD NUMBER AND FIELD NAME
41125 RETURN
41130 N = 1  / INITIALIZE N, THE FIELD NUMBER TO 1
41133 WHILE N <= NREC(A) / WHILE THE FIELD NUMBER IS LESS THEN OR EQUAL TO THE MAXIMUM FIELD NUMBER
41135 REFLG = 0 / INITIALIZE RESTART FLAG TO NO
41137 IF N < 1 THEN N = 1 / FIELD NUMBER CAN'T BE LESS THEN 1
41140 ON IOPT(N) GOSUB 41200,41400,41600,41800,42000,42200,42600,42800,43000,43200,43400,43600,41800,53000,54000,55000,56000,57000,58000,59000 / ON INPUT OPTION GOTO
41150 GOSUB 43800 / GOSUB THE PRINT FIELD ON SCREEN, AND SET FILE BUFFER SUBROUTINE
41155 N = N + 1 / INCREMENT THE FIELD NUMBER
41160 WEND / CONTINUE WITH THE LOOP FOR ALL FIELDS
41165 GOTO 44910
41170 REM * BACK UP FIELDS UNTIL IOPT = 1 / BACK UP UNTILL THERE IS AN OPERATOR ENTRY
41175 N = N - 1 / DECREMENT THE FILE NUMBER
41180 IF N < 1 THEN 41133 / CAN'T DECREMENT PAST ONE
41185 IF IOPT(N) <> 1 THEN 41175 / IF INPUT OPTION IS NOT AN OPERATOR ENTRY THEN DECREMENT AGAIN
41190 GOTO 41133 / CONTINUE ENTERING FIELDS
41200 REM *  OPERATOR ENTRY
41202 NE = 1 / SET NEW ENTRY FLAG TO YES
41205 GOSUB 41092 / CLEAR THE LINES
41210 PRINT PROMPT$(N) / PRINT THE PROMPT
41215 REFLG = 0 / INITIALIZE RESTART FLAG TO 0
41220 IF FTY(A,N) = 1 GOTO 41300 / IF A STRING THEN GOTO 41300
41230 ON FTY(A,N) GOSUB 15000,14100,14200,14300,14300  / ON THE FIELD TYPE GOTO THE INPUT SUBROUTINE FOR THAT FIELD TYPE
41234 IF REFLG = 1 THEN GOTO 41170 / IF RESTART FLAG EQUALS YES THEN RESTART DATA ENTRY
41235 IF ABORTFLG = 1 GOTO 7000  / IF ABORT FLAG EQUALS YES THEN GOTO 7000
41236 IF MFLG(A) = 2 AND FTY(A,N) <> 1 THEN GOSUB 29200 / IF LIMITS FLAG IS YES AND THE FIELD IS NOT A STRING THEN CHECK THE LIMITS
41237 T2 = KEYLIST(A,N) / KEYLIST NUMBER
41238 T3 = MAXK(T2) / MAXIMUM FOR THE LIST
41239 REM  IF KY(A,N) = 2 AND (DT# < 1 OR DT# > T3) GOTO 41230
41240 I# = DT# / SET I# TO THE VALUE ENTERED IN THE SUBROUTINE
41245 NE = 0 / RESET NEW ENTRY FLAG TO NO
41250 RETURN     
41298 REFLG = 0 / RESET RESTART FLAG TO NO
41300 Q = N / FIELD NUMBER ALSO EQUALS Q
41302 GOSUB 15000 / INPUT STRING SUBROUTINE
41303 IF ABORTFLG = 1 GOTO 7000 / IF ABORT FLAG EQUALS YES THEN ABORT
41304 I$ = A$ / SET I$ TO THE VALUE RETURNED FROM THE STRING INPUT SUBROUTINE
41306 NE = 0 / RESET NEW ENTRY FLAG TO NO
41308 IF REFLG = 1 GOTO 41170 / IF RESTART FLAG THEN RESTART DATA ENTRY
41310 RETURN    
41400 REM GET FROM ANOTHER FILE*
41402 FLD = IFLD(N) / GET DATA FROM THIS FIELD
41404 T = IRNFLD(N) / RECORD NUBER OF THE FIELD TO GET DATA FROM
41406 RN2= X(T) / RECORD NUMBER OF FILE 2 EQUALS THE VALUE OF THIS SOURCE FIELD
41407 IF RN2 > MRNS THEN GOTO 48000 / IF RECORD NUMBER OF THE SECOND FILE IS GREATER THEN MAXIMUM RECORD NUMBER THEN GOTO 48000
41408 GET #2,RN2 / GET THE RECORD FROM THE SECOND FILE
41409 B = IFN(N) / B IS THE FILE NUMBER OF THE SECOND OPENED FIELD
41420 ON FTY(B,FLD) GOTO 41422,41460,41500,41550,41550 / ON THE FIELD TYPE OF THE FIELD IN THE SECOND FILE GOTO
41422 I$ = Y$(FLD) / SET I$ TO THE VALUE OF THE FIELD
41430 RETURN      
41460 Y$ = Y$(FLD) 
41465 I% = CVI(Y$) / CONVERT FIELD TO A NUMBER
41467 I# = I%
41470 RETURN     
41500 I! = CVS(Y$(FLD)) / CONVERT FIELD TO A NUMBER
41505 I# = I!
41510 RETURN     
41550 I# = CVD(Y$(FLD)) / CONVERT FIELD TO A NUMBER
41560 GOTO 43800
41600 REM ADD PREVIOUS FIELDS*
41605 I# = 0 / INITIALIZE TO 0
41610 FOR T = 1 TO NOS(N) / FOR ALL THE FIELDS TO  ADD
41620 T2 = ADDFLD(N,T) / T2 IS THE FIELD TO  ADD
41630 I# = I# + X(T2) / ADD THE VALUE TO THE FIELD TO THE PREVIOUS SUM
41640 NEXT T / END LOOP OF FIELDS TO ADD
41650 RETURN    
41800 REM SUBTRACT FIELDS
41810 T1 = SUBX(N) / T1 IS FIELD TO SUBTRACT FROM OR DIVIDE INTO
41820 T2 = SUBY(N) / T2 IS FIELD TO SUBTRACT OR DIVIDE BY 
41830 IF IOPT(N) = 4 THEN I# = X(T1) - X(T2) ELSE I# = X(T1)/X(T2) / EITHER SUBTRACT OR DIVIDE DEPENDING ON THE INPUT OPTION
41840 RETURN    
42000 REM MULTIPLY FIELDS
42010 T1 = MULX(N) / FIRST FIELD TO MULTIPLY
42020 T2 = MULY(N) / SECOND FIELD TO MULTIPLY
42030 I# = X(T1) * X(T2) / MULTIPLY FIELDS
42040 RETURN     
42200 REM GET FROM A TABLE
42210 ON TX(1,N) GOSUB 42400,42450 / IF TAX TABLE IS CONSTANT GOSUB 42400, IF TAX TABLE VARIES GOSUB 42450
42220 ON TX(3,N) GOSUB 42500,42550 / IF PAY PERIOD CONSTANT GOSUB 42500 IF PAY PERIOD VARIES GOSUB 42550
42230 Y = TX(5,N) / MARRIED SINGLE FIELD EQUALS THIS FIELD
42240 MSS = X(Y) / MARRIED SINGLE FIELD
42250 Y = TX(6,N) / PAY EQUALS THIS FIELD
42260 PAY# = X(Y) / PAY
42270 GOSUB 45500 / COMPUTE TAX SUBROUTINE
42272 I# = TTAX# / SET I# TO TTAX# RETURNED FROM COMPUTE TAX SUBROUTINE
42290 RETURN     
42400 FSS = TX(2,N) / FEDERAL STATE TAX TABLE NUMBER CONSTANT 
42410 RETURN
42450 Y = TX(2,N)
42460 FSS = X(Y) /FEDERAL STATE TAX TABLE NUMBER EQUALS THE VALUE OF THIS FIELD
42470 RETURN
42500 PPS = TX(4,N) / PAY PERIOD CONSTANT 
42510 RETURN
42550 Y = TX(4,N)
42560 PPS = X(Y) / PAY PERIOD EQUALS THIS FIELD
42570 RETURN
42600 REM CONSTANT
42610 I# = KC(N) / FILED EQUALS A CONSTANT
42620 RETURN    
42800 REM MAXIMUM
42802 T2 = MAXMIN(N,1) / T2 IS THE FIRST FIELD TO COMPARE
42804 I# = X(T2) / INITIALIZE MAXIMUM VALUE TO THE VALUE OF THE FIRST FIELD TO COMPARE
42810 FOR T = 2 TO NOS(N) / FOR THE REST OF THE FIELDS TO COMPARE
42820 T2 = MAXMIN(N,T) / NEXT FIELD TO COMPARE
42830 IF X(T2) > I# THEN I# = X(T2) / IF THE VALUE OF THIS FIELD IS GREATER THEN THE MAXIMUM LET THE MAXIMUM EQUAL THE FIELD
42840 NEXT T
42850 RETURN        
43000 REM MINIMUM*
43002 T2 = MAXMIN(N,1) / FIRST FIELD TO COMPARE
43004 I# = X(T2) / INITIALIZE MINIMUM TO THE VALUE OF THE FIRST FIELD
43010 FOR T = 2 TO NOS(N) / FOR THE REST OF THE FIELDS TO COMPARE
43020 T2 = MAXMIN(N,T) / NEXT FIELD TO COMPARE 
43030 IF X(T2) < I#  THEN I# = X(T2) / IF THE VALUE OF THE FIELD IS LESS THEN THE MINIMUM THEN LET THE MINIMUM EQUAL THE VALUE OF THIS FIELD
43040 NEXT T 
43050 RETURN       
43200 REM MULTIPLY BY A CONSTANT*
43210 T = CFLD(N) / T IS THE FIELD TO MULTIPLY THE CONSTANT BY
43220 I# = KC(N) * X(T) / MULTIPLY THE CONSTANT BY THE VALUE OF FIELD T
43230 RETURN    
43400 REM ADD A CONSTANT*
43410 T = CFLD(N) /  T IS THE FIELD TO ADD THE CONSTANT TO
43420 I# = KC(N) + X(T) / ADD THE CONSTANT AND THE FIELD
43430 RETURN    
43600 REM SUBTRACT A CONSTANT
43610 T = CFLD(N) / T IS THE FIELD TO SUBTRACT THE CONSTANT FROM
43620 I# = X(T) - KC(N) / SUBTRACT THE CONSTANT FROM THE VALUE OF FIELD T
43630 RETURN     
43800 REM LSET
43810 ON FTY(A,N) GOTO 43900,44000,44100,44200,44200 / ON FIELD TYPE GOTO
43900 REM STRING*
43910 LSET X$(N) = I$ / PUT STRINGS IN THE FILE BUFFER
43920 CK$(N) = I$ / HOLD THE STING AS CK$(FIELD NUMBER)
43990 GOTO 44500
44000 REM INTEGER *           
44020 LSET X$(N) = MKI$(I#) / PUT INTERGERS IN FILE BUFFER
44030 GOTO 44500
44100 REM SINGLE PRECISION* 
44110 I! = I#
44120 LSET X$(N) = MKS$(I#) / PUT SINGLE PRECISION NUMBERS IN FILE BUFFER
44130 GOTO 44500
44200 REM DOUBLE PRECISION*
44210 LSET X$(N) = MKD$(I#) / PUT DOUBLE PRECISON NUMBERS IN FILE BUFFER
44500 IF CSCR = 1 THEN GOSUB 31000 / IF USING A CUSTOM SCREEN THEN PRINT THE FIELD ON THE SCREEN USING THE 31000 SUBROUTINE
44501 IF CSCR = 1 THEN GOTO 44900 / IF USING A CUSTOM SCREEN THEN SKIP THE FOLLOWING SECTION
44502 IF N < 19 THEN HT = N + 1 / IF THE FIELD NUMBER IS LESS THEN 19 THEN THE LINE NUMBER IS THE FIELD NUMBER PLUS ONE
44503 IF N >= 19 THEN HT = N MOD 18 + 2 / IF THE FIELD NUMBER IS EQUAL OR GREATER THEN 19 THEN THE LINE NUMBER IS N MOD 18 + 2
44504 LI = HT / LINE NUMBER
44505 GOSUB 13100 / LOCATE SUBROUTINE
44506 IF N <18 GOTO 44510 / IF FIELD NUMBER LESS THEN 18 SKIP THE NEXT 2 LINES
44507 PRINT "                                                                              "; / CLEAR LINE
44508 GOSUB 13100 / LOCATE
44510 PRINT N;TAB(5) FLDN$(A,N); / PRINT THE FIELD NUMBER AND THE FIELD NAME
44515 IF KEYLIST(A,N) > 0 GOTO 44800 / IF THERE IS A KEYLIST GOTO 44800
44520 IF FTY(A,N) = 1 GOTO 44600 / IF FIELD IS A STRING GOTO 44600
44525 IF FTY(A,N) = 5 GOTO 44700 / IF FIELD IS A DOLLAR AND CENTS AMOUNT GOTO
44530 PRINT TAB(25) I# / PRINT THE VALUE OF THE FIELD
44535 X(N) = I# / HOLD THE VALUE OF THE FIELD AS X(FIELD NUMBER)
44540 GOTO 44900
44600 PRINT TAB(26) I$ / PRINT STRING FIELDS
44610 GOTO 44900
44700 PRINT TAB(26);
44710 PRINT USING "**$########.##";I# / PRINT DOLLAR AND CENTS AMOUNTS
44715 X(N) = I# / HOLD THE VALUE OF THIS FIELD AS X(N)
44720 GOTO 44900
44800 REM KEYLIST
44810 T1 = KEYLIST(A,N) / THE LIST NUMBER
44820 W$ = L$(T1,I#) / THE KEYLIST TO PRINT
44830 PRINT TAB(25) I#;
44835 X(N) = I# / HOLD THE NUMBER AS X(FIELD)
44840 PRINT TAB(30) "key  ";W$ / PRINT THE KEYLIST
44900 RETURN 
44910 PUT #1,RN / PUT THE FILE BUFFER ON THE DISK
44912 IF REALFLG(A) = 2 THEN GOSUB 60300 / IF THERE ARE REALTIME TRANSFERS THEN UPDATE THE REALTIME TRANSFER FILE
44913 IF REALFLG(A) = 2 AND RN <= MRN THEN GOSUB 61400 / IF THERE ARE REALTIME TRANSFERS AND YOU ARE OVERWRITING A OLD FILE THEN CORRECT REALTIME FILE
44915 IF RN > MRN THEN MRN = RN / IF RECORD NUMBER EXCEEDS THE MAXIMUM RECORD NUMBER THEN LET THE MAXIMUM RECORD EQUAL THE RECORD NUMBER
44920 LI = 20 / LINE NUMBER 20
44925 GOSUB 13100 / LOCATE SUBROUTINE 
44930 PRINT "***********************  OPTIONS :  ************************                  "
44940 PRINT "   1 - ENTER NEXT RECORD          3 - CORRECT THIS RECORD                     "
44950 PRINT "   2 - ENTER ANOTHER RECORD       4 - ENTER A SUBRECORD                       "
44960 PRINT "***************  0 - RETURN TO FILE OPTIONS   **************                  "
44962 SPRT = 5 / SURPRESS PRINTING AFTER OPTION IS ENTERED
44965 GOSUB 14000 / INPUT INTEGER LESS THEN 100 SUBROUTINE
44967 IF DT# <0 OR DT# >4 GOTO 44920 / IF OUT OF RANGE REENTER
44970 TH = DT# / TH EQUALS THE VALUE RETURNED FROM THE INPUT SUBROUTINE
44975 IF TH = 2 THEN RETURN / ENTER ANOTHER RECORD 
44980 IF TH = 0 THEN GOTO 3010 / BACK TO FILE OPTIONS
44985 IF TH = 3 THEN GOSUB 9000 / CORRECT A RECORD SUBROUTINE
44987 IF TH = 3 THEN GOTO 44920 / AFTER CORRECTION GET ANOTHER OPTION
44988 IF TH = 4 AND RPT <> 2 THEN 44996 / IF REQUEST FOR ENTER A SUBRECORD AND SUBRECORDS ARE NOT SET UP ON THE FILE GOTO 44996
44989 IF TH = 4 THEN GOTO 52000 / ENTER A SUBRECORD OPTION
44990 RN = RN + 1 / INCREMENT RECORD NUMBER
44995 GOTO 41000 / ENTER NEXT RECORD
44996 LI = 24 / LINE 24
44997 GOSUB 13100 / LOCATE SUBROUTINE
44998 PRINT TAB(10) "SUBRECORDS ARE NOT SET UP ON THIS FILE";
44999 GOTO 44920 / ASK FOR ANOTHER OPTION
45000 REM 
45001 IF HDISK = 2 THEN GOTO 45010 / IF HARD DISK OPTION THEN SKIP THE PROMPT
45002 GOSUB 13000 / CLEAR SCREEN
45004 PRINT "      PUT THE FLOPPY DISK WITH THE TAX SCHEDULE ON IT IN"
45005 PRINT "                IN THE DEFAULT DISK DRIVE "
45006 PRINT ""
45007 PRINT "         ****  THEN PRESS ANY KEY TO CONTINUE  ****   "
45008 IF INKEY$ = "" THEN GOTO 45008 / LOOP UNTILL ANY KEY IS PRESSED
45010 OPEN "R",#3,"TAXSCH",82 / OPEN THE TAX SCHEDULE FILE
45015 FIELD #3,40 AS D$,2 AS FD$,2 AS PP$,2 AS MS$,8 AS MIN$,8 AS MAX$,8 AS TX$,4 AS PCT$,8 AS OVR$ / FIELD THE TAX SCHEDULE FILE
45018 GOSUB 7900 / GET THE MAXIMUM RECORD NUMBER OF THE FILE
45020 FOR T7 = 1 TO 1000 / START LOOP READING RECORDS
45040 IF T7 > MRN2 GOTO 45160 / IF END OF FILE JUMP OUT OF THE LOOP
45050 GET #3,T7 / GET THE RECORD NUMBER
45070 FS(T7) = CVI(FD$) / CONVERT FEDERAL STATE NUMBER
45080 PP(T7) = CVI(PP$) / CONVERT PAY PERIOD NUMBER
45090 MS(T7) = CVI(MS$) / CONVERT MARRIED SINGLE NUMBER
45100 MIND#(T7) = CVD(MIN$) / CONVERT MINIMUM PAY FOR RATE
45110 MAXD#(T7) = CVD(MAX$) / CONVERT MAXIMUM PAY FOR RATE
45120 TAX#(T7) = CVD(TX$) / CONVERT BASE TAX
45130 PCT!(T7) = CVS(PCT$) / CONVERT PECENT OVER 
45140 OVR#(T7) = CVD(OVR$) / CONVERT OVER THIS PAY
45150 NEXT T7 / END LOOP READING TAX RECORDS
45160 REM
45170 GOTO 45200
45200 REM
45210 TMAX = T7 - 1 / MAXIMUM TAX RECORD NUMBER
45215 CLOSE #3 / CLOSE TAX SCHEDULE FILE
45218 TTBL = 5 / FLAG, TAX TABLE IN MEMORY
45220 RETURN
45230 REM
45240 REM
45250 REM
45260 REM
45270 REM
45500 REM
45510 FOR T7 = 1 TO TMAX / START LOOP READING ALL TAX RECORDS FROM MEMORY
45520 IF FS(T7) = FSS THEN GOTO 45530 ELSE GOTO 45610 / IF FEDERAL STATE NUMBERS MATCH THEN CHECK NEXT FIELD ELSE RECORD DOES NOT MATCH
45530 IF PP(T7) = PPS THEN GOTO 45540 ELSE GOTO 45610 / IF PAY PERIODS MATCH THEN CHECK NEXT FIELD ELSE RECORD DOES NOT MATCH
45540 IF MS(T7) = MSS THEN GOTO 45550 ELSE GOTO 45610 / IF MARRIED SINGLE NUMBER MATCH THEN CHECK NEXT FIELD ELSE RECORD DOES NOT MATCH
45550 IF PAY# < MIND#(T7) GOTO 45610 / IF PAY IS LESS THEN MINIMUM FOR THIS TAX BRACKET THEN RECORD DOES NOT MATCH
45560 IF PAY# > MAXD#(T7) GOTO 45610 / IF PAY IS GREATER THEN THE MAXIMUM FOR THIS TAX BRACKET THEN RECORD DOES NOT MATCH
45570 PAYEX# = PAY# - OVR#(T7) / PAY OVER BASE TAX RATE
45580 TXE# = PAYEX# * PCT!(T7) / 100    / TAX ON PAY OVER BASE TAX RATE
45590 TTAX# = TAX#(T7) + TXE# / TOTAL TAX 
45600 GOTO 45680 
45610 NEXT T7 / CHECK NEXT RECORD
45620 PRINT "++++++  PROPER TAX TABLE NOT FOUND  ++++++" / IF TAX TABLE NOT FOUND THIS IS SHOWN ON THE SCREEN
45630 PRINT "CHECK : FEDERAL OR STATE NUMBER ";FSS
45640 PRINT "        PAY PERIOD NUMBER       ";PPS
45650 PRINT "        MARRIED/SINGLE NUMBER   ";MSS
45660 PRINT "        PAY                     ";PAY
45670 PRINT "*****  PRESS ANY KEY TO CONTINUE  ******"
45672 IF INKEY$ = "" GOTO 45672 / STAY HERE UNTILL A KEY IS PRESSED
45674 GOTO 3010 / BACK TO FILE OPTIONS
45680 REM RETURNS TTAX*
45690 RETURN 
46000 REM CROSS CHECK FIELD
46010 IF DATAIN >< 1 THEN GOSUB 40020 / IF INPUT OPTIONS ARE NOT IN MEMORY THEN GET THEM
46020 REM
46030 REM
46100 GET #1,RN / GET THE RECORD FROM THE DISK
46130 FOR N2= 1 TO NREC(A) / FOR ALL FIELDS IN THE RECORD
46133 N = N2
46135 REM
46140 ON IOPT(N) GOSUB 46200,46200,41600,41800,42000,46200,42600,42800,43000,43200,43400,43600,41800,53000,54000,55000,56000,57000,58000,59000 / ON INPUT OPTION GOSUB 
46145 IF CALFLG = 5 THEN 46160 / IF USING THE RECALCULATION OPTION THEN SKIP THE NEXT LINE
46150 GOSUB 43800
46160 NEXT N2 / END OF LOOP ON FIELDS
46162 PUT #1,RN / PUT THE RECORD ON DISK
46165 RETURN    
46200 ON FTY(A,N) GOTO 46220,46300,46400,46500,46500 / ON FIELD TYPE GOTO. THIS IS A DUMMY RECALCULATION FOR GET FROM ANOTHER FILE OPTION AND COMPUTE USING TAX TABLE OPTION 
46220 I$ = X$(N) / EQUAL TO OLD VALUE
46230 RETURN
46300 I% = CVI(X$(N)) / EQUAL TO OLD VALUE
46310 I# = I%
46320 RETURN
46400 I! = CVS(X$(N)) / EQUAL TO OLD VALUE
46410 I# = I!
46420 RETURN
46500 I# = CVD(X$(N)) / EQUAL TO OLD VALUE
46510 RETURN
47000 REM
47050 CALFLG = 5 / USING THE RECALCULATION OPTION FLAG
47100 GOSUB 13000 / CLEAR SCREEN
47110 PRINT "*******  RECALCULATE THE FIELDS IN A FILE OPTION  *******"
47120 PRINT ""
47130 PRINT "         Use only if you know what you are doing "
47140 PRINT ""
47150 PRINT "MINIMUM RECORD NUMBER : 1   MAXIMUM RECORD NUMBER : ";MRN
47160 PRINT ""
47190 PRINT "***********  DO YOU WANT TO USE THIS OPTION  ************"
47200 PRINT "          1 - NO, RETURN TO FILE OPTION"
47300 PRINT "          2 - YES, I WANT TO USE THIS OPTION "
47310 PRINT "*********  Enter the number then Press Return  **********"
47320 GOSUB 14000 / INPUT INTEGER LESS THEN 100 SUBROUTINE
47330 IF DT# < 1 OR DT# > 2 THEN 47320 / IF OUT OF RANGE THEN REENTER
47340 IF DT# = 1 THEN 3010 / BACK TO FILE OPTIONS
47400 FOR RN = 1 TO MRN / FOR ALL RECORDS
47430 GOSUB 46000 / RECALCULATE THEN
47450 NEXT RN
47470 GOTO 3010 / BACK TO FILE OPTIONS
48000 REM
48100 REM / TRIED TO GET TO LARGE A RECORD FROM THE FILE OPTIONS
48110 PRINT " ++++++  ERROR   +++++++"
48120 PRINT "RECORD NUMBER  ";RN2;" IN FILE ";F$(B);" DOES NOT EXIST"
48140 PRINT "YOU PROBABLY ENTERED FIELD ";IRNFLD(N);" WRONG"
48160 PRINT "*********  PRESS ANY KEY TO CONTINUE  ********"
48170 IF INKEY$ = "" GOTO 48170
48180 GOTO 40000 / START NEW ENTRY OVER AGAIN
49000 REM * SET GFLG TO ZERO  / IF A GLOBAL FLAG DOES NOT EQUAL 0 THEN IT IS USED IN THE CALCULATION OF ANOTHER FIELD
49100 FOR T = 1 TO 28 / SETS GLOBAL FLAGS TO 0 FOR ALL FIELDS
49110 GFLG(T) = 0
49120 NEXT T
49130 RETURN
50000 REM INTRO
50010 GOSUB 13000 / CLEAR SCREEN
50100 PRINT "                  M A I N     P R O G R A M    3.0   "
50105 PRINT ""
50110 PRINT "         Copyright 1984 by Potomac Pacific Engineering Inc."
50120 PRINT ""
50130 PRINT "This program is licensed FREE to all users with some restrictions "
50140 PRINT "YOU MUST READ THE LICENSE CONDITIONS PROIR TO USING THIS PROGRAM"
50165 PRINT "        See the manual for more information on the license."
50167 PRINT ""
50950 PRINT "*****************  PRESS ANY KEY TO CONTINUE  ******************";
50960 IF INKEY$ = "" GOTO 50960 / LOOP UNTILL ANY KEY IS PRESSED
50970 RETURN
51000 REM *******  DONE
51100 CLOSE
51105 GOSUB 13000 / CLEAR SCREEN
51110 PRINT " -BYE, Have a nice Day
51120 END  / EXITS PROGRAM 
52000 REM *  SUB RECORD INPUT
52010 LI = 1 / LINE ONE
52020 GOSUB 13100 / LOCATE SUBROUTINE
52030 PRINT TAB(60) "ON SUBRECORD ";(RN+1) 
52100 OFFSET = OFFSET + 1 / INCREMENT OFFSET FOR EACH SUBRECORD
52110 RN = RN + 1 / INCREMENT RECORD NUMBER
52115 IF REALFLG(A) = 2 AND RN <= MRN THEN GOSUB 61300 / IF THERE ARE REALTIME TRANSFERS AND YOU ARE OVER WRITING A RECORD THEN CORRECT REALTIME TARGET FILE
52120 T2 = LSTE + 1 / FIRST REPEATING FIELD IS T2
52130 FOR N = T2 TO NREC(A) / FOR ALL RECORD NUMBERS
52135 REFLG = 0 / RESTART FLAG SET TO NO
52140 ON IOPT(N) GOSUB 41200,41400,41600,41800,42000,42200,42600,42800,43000,43200,43400,43600,41800,53000,54000,55000,56000,57000,58000,59000 / ON INPUT OPTION GOTO
52150 GOSUB 43800 / PRINT ON SCREEN 
52160 NEXT N  / END LOOP ON FIELDS
52165 GOTO 44910 / PUT DATA ON DISK AND GET NEXT OPTION
53000 REM  SPACE FOR CUSTOM INPUT OPTION # 14
53990 RETURN
54000 REM  SPACE FOR CUSTOM INPUT OPTION # 15
54990 RETURN
55000 REM SPACE FOR CUSTOM INPUT OPTION # 16
55990 RETURN
56000 REM SPACE FOR CUSTOM INPUT OPTION # 17
56990 RETURN
57000 REM SPACE FOR CUSTOM INPUT OPTION # 18
57990 RETURN
58000 REM SPACE FOR CUSTOM INPUT OPTION # 19
58990 RETURN
59000 REM SPACE FOR CUSTOM INPUT OPTION # 20
59990 RETURN
60000 REM *READ REALTIME OPTIONS
60010 OPEN "I",#1,"REALTIME" / OPEN REALTIME FILE
60020 FOR T = 1 TO MAXF
60030 INPUT #1,REALFLG(T) / FOR EACH FILE READ THE REALTIME OPTION
60040 NEXT T
60050 CLOSE #1
60060 RETURN
60070 REM * READ REALTIME DATA
60080 A$ = STR$(A) / CONVERT FILE NUMBER TO A STRING
60090 A$ = MID$(A$,2) / GET RID OF LEADING SPACE
60100 A$ = "REAL" + A$ / CONCATE "REAL" AND THE FILE NUMBER
60110 OPEN "I",#3,A$ / OPEN THE REALTIME DATA FILE FOR THIS FILE
60120 INPUT #3,TFILE,FLD1,FLD2,TFLD1,TFLD2,TFLD3,TFLD4,ADSUB1,ADSUB2,ADSUB3,ADSUB4,TGTRN / INPUT THE REALTIME DATA
60130 CLOSE #3 
60140 RETURN
60200 REM * OPEN REALTIME FILE
60202 IF ROPEN = 5 THEN RETURN / IF THE REALTIME TARGET FILE IS ALREADY OPEN THEN RETURN
60205 GOSUB 13000 / CLEAR SCREEN
60210 AHLD = A / HOLD A
60220 A = TFILE
60230 C = TFILE
60235 PRINT F$(C);"   FILE FOR REALTIME TRANSFER "
60240 GOSUB 2300 / GET THE DISK DRIVE THE REALTIME FILE IS ON
60245 C = TFILE
60250 GOSUB 2580 / OPEN AS FILE 3 
60260 A = AHLD
60265 ROPEN = 5 / SET OPEN FLAG TO YES
60270 RETURN
60300 REM * PUT DATA ON REALTIME FILE
60310 IF REALFLG(A) >< 2 THEN RETURN / IF REALTIME TRANSFERS NOT SPECIFIED THEN RETURN
60330 REM *** CONTINUE
60340 IF ROPEN < 5 THEN GOSUB 60200 / IF REATIME TARGET FILE IS NOT OPEN THEN OPEN
60400 T3 = X(TGTRN) / THE TARGET RECORD NUMBER
60410 GET #3,T3 / GET THE TARGET RECORD NUMBER
60415 IF CTK = 5 THEN 60600 / IF CORRECT FLAG THEN 60600
60420 T1# = CVD(Z$(TFLD1)) / THE TARGEST FILE INITIAL VALUE
60430 T2# = X(FLD1) / THE VALUE TO ADD TO THE TARGET FILE
60440 IF ADSUB1 = 2 THEN T2# = -1 * T2# / IF SUBTRACT OPTION THEN CHANGE TO A NEGITIVE
60450 LSET Z$(TFLD1) = MKD$(T1# + T2#) / ADD AND PUT RESULT IN FILE BUFFER
60460 IF TFLD2 = 0 THEN 60600 / IF NO SECOND TRANSFER 
60520 T1# = CVD(Z$(TFLD2)) / VALUE OF TARGET FIELD
60540 IF ADSUB2 = 2 THEN T2# = -1 * T2# / IF SUBTRACT OPTION THEN MAKE NEGITIVE
60550 LSET Z$(TFLD2) = MKD$(T1# + T2#) / ADD AND PUT SUM IF FILE BUFFER
60600 REM * SECOND TRANSFER
60605 IF CTK = 4 THEN 60900 / IF DO NOT CORRECT THIS TRANSFER FLAG
60610 IF FLD2 = 0 THEN 60900 / IF NO SECOND TRANSFER
60620 T1# = CVD(Z$(TFLD3)) / INITIAL VALUE OF TRANSFER FIELD
60630 T2# = X(FLD2) / SOURCE FIELD
60640 IF ADSUB3 = 2 THEN T2# = -1 * T2# / IF SUBTRACT OPTION THEN MAKE NEGITIVE
60650 LSET Z$(TFLD3) = MKD$(T1# + T2#) / ADD AND PUT SUM IF FILE BUFFER
60660 IF TFLD4 = 0 THEN 60900 / IF NO SECOND TRANSFER
60720 T1# = CVD(Z$(TFLD4)) / INITIAL VALUE OF TARGER FIELD
60740 IF ADSUB4 = 2 THEN T2# = -1 * T2# / IF SUBTRACT OPTION THEN MAKE NEGITIVE
60750 LSET Z$(TFLD4) = MKD$(T1# + T2#) / ADD PUT SUM IN FILE BUFFER
60900 PUT #3,T3 / PUT TARGET RECORD ON DISK
60920 CTK = 1 / RESET CORRECT FLAG TO NO
60980 RETURN
61000 REM *  CORECT DATA ON REALTIME FILE
61050 CTK = 4 / SET CORRECT FLAG 
61060 XHLD1 = X(N) / HOLD X
61100 X(N) = I# - X(N) / DIFFERENCE BETWEEN OLD VALUE AND CORRECTION
61120 GOSUB 60300 / UPDATE REALTIME FILE
61130 X(N) = XHLD1 / RETURN VALUE OF X
61140 RETURN
61200 XHLD1 = X(N) / HOLD X
61205 X(N) = I# - X(N) / DIFFERENCE BETWEEN OLD VALUE AND CORRECTION
61215 CTK = 5 / SET CORRECT FLAG
61220 GOSUB 60300 / UPDATE REALTIME FILE
61230 X(N) = XHLD1 / RETURN VALUE OF X
61240 RETURN
61300 REM * CORRECT REALTIME FILE FOR OVERWRITE
61330 GET #1,RN / GET OLD RECORD
61340 X1# = CVD(X$(FLD1)) / TRANSFERED FIELD 1
61350 X2# = CVD(X$(FLD2)) / TRANSFERED FIELD 2
61355 X3# = CVI(X$(TGTRN)) / OLD TARGET RECORD NUMBER
61360 RETURN
61400 REM ***
61410 XHLD1 = X(FLD1) / HOLD
61420 XHLD2 = X(FLD2) / HOLD
61425 XHLD3 = X(TGTRN) / HOLD
61430 X(FLD1) = -X1# / NEGITIVE OLD VALUE
61440 X(FLD2) = -X2# / NEGITIVE OLD VALUE
61445 X(TGTRN) = X3# / OLD TARGER FIELD
61450 GOSUB 60300 / CORRECT OLD TARGER FIELD 
61460 X(FLD1) = XHLD1 / REPLACE HELD VALUE
61470 X(FLD2) = XHLD2 / REPLACE HELD VALUE
61475 X(TGTRN) = XHLD3 / REPLACE HELD VALUE
61480 RETURN
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0215

     Volume in drive A has no label
     Directory of A:\

    ACCTSUM            638   1-01-80
    ARSUMARY           616   1-01-80
    ASCIDATA           256   3-10-83   1:58a
    BILL               256   1-01-80
    CHECKS             256   1-01-80
    CLS      OBJ        98   1-01-80
    CTEMP    BAS       256   1-01-80
    CUSTOMER           536   3-10-83  12:54a
    EXTRA             6784   1-01-80
    FFILE             3328   1-01-80
    FORMLIST           128   1-01-80
    IDEX               384   1-01-80
    INVOICE           1504   1-01-80
    IPUTD              128   5-19-28   3:50a
    IPUTD1             512   5-19-28   4:01a
    IPUTD10            256   5-19-28  12:34a
    IPUTD11            640   5-19-28   1:01a
    IPUTD12            384   5-19-28   1:10a
    IPUTD13            256   1-01-80
    IPUTD14            512   5-19-28   1:28a
    IPUTD15            128   1-01-80
    IPUTD2             384   1-01-80
    IPUTD3             384   5-19-28  12:22a
    IPUTD4             896   5-19-28   2:57a
    IPUTD5             384   5-19-28  12:27a
    IPUTD6             384   5-19-28   2:13a
    IPUTD7             384   1-01-80
    IPUTD8             256   5-19-28   2:07a
    IPUTD9             384   5-19-28   1:36a
    JOBCOSTS           168   3-10-83  12:08a
    JOURNAL            924   1-01-80
    KEYLISTS           578   1-01-80
    KYLIST             128   3-10-83  12:50a
    LCATE    OBJ        86   1-01-80
    MASTER   TXT    153216   1-01-80
    MAXMIN1            128   1-01-80
    MAXMIN8            128   1-01-80
    PAYCHECK          1504   3-10-83  12:15a
    PAYCHKS           2898   1-01-80
    PAYSUM            1505   3-10-83  12:33a
    PRINTMAN BAS       896   1-01-80
    PRTEXTRA BAS       640   1-01-80
    READ     ME       2988   1-01-85  12:18p
    REAL1              128   1-01-80
    REAL3              128   1-01-80
    REALTIME           128   1-01-80
    RECIEABL           248   1-01-80
    REMARKS1 BAS     19200   2-13-80  12:01a
    REMARKS2 BAS     28672   2-13-80  12:01a
    REMARKS3 BAS     11392   2-13-80  12:02a
    REMARKS4 BAS     28288   2-13-80  12:03a
    SCREEN1            384   1-01-80
    SCREEN14           512   1-01-80
    SCREEN4            256   1-01-80
    SCREEN6            128   1-01-80
    SCREEN8            256   1-01-80
    SCTEST             128   1-01-80
    SECOND             256   1-01-80
    STOCK              312   1-01-80
    TAXSCH            1312   3-10-83   1:44a
    TEMP     BAS       512   1-01-80
    TEST               812   1-01-80
    TESTIPUT           168   2-13-80  12:31a
    TESTTWO            176   3-10-83  12:39a
    TFER               256   1-01-80
    W2                 384   1-01-80
           66 file(s)     281135 bytes
                               0 bytes free
