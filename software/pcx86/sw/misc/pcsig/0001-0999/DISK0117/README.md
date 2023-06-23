---
layout: page
title: "PC-SIG Diskette Library (Disk #117)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0117/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0117"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "MICROGOURMET 2 OF 2  (#116 FIRST DISK)"

    MicroGourmet is a two-disk software package, which functions through
    dBASE II, but will also run through dBASE III after it is converted. It
    was designed to help those of you who spend great gobs of time looking
    through cookbooks and rummaging through scraps of paper to find those
    elusive recipes you put right here or maybe here...or!!!
    
    MicroGourmet will help reduce the time spent choosing recipes to
    prepare for both family and guest meals.  It is also an aid to menu
    planning.  You can select recipes for whatever time period you wish (a
    week, for instance), print the recipes (as a reference), and prepare
    and print a shopping list to take to the store.  You can also add and
    change recipes. A great way to increase your culinary skills.
    
    System Requirements: Two disk drives, dBASEII
    
    How to Start:  Access microGOURMET through DBASEII.  At the dot prompt,
    type DO MENU.  Consult MANUAL.DOC for program documentation.
    
    File Descriptions:
    
    The First Disk Contains:
    GOURMET  LOW  Version of M-G for single-sided drives (rename .PRG)
    GOURMET  HI   Version of M-G for 360K or HDU drives  (rename .PRG)
    READ     ME   Notes about MicroGOURMET programs and listing documentatio
    MANUAL   DOC  MicroGOURMET manual in listable DOS file format
    ITEM     NDX  MicroGOURMET dBASE II index file
    NUMBER   NDX  MicroGOURMET dBASE II index file
    TYPE     NDX  MicroGOURMET dBASE II index file
    SHOP     DBF  MicroGOURMET dBASE II database file
    ITEM     DBF  MicroGOURMET dBASE II database file
    
    The Second Disk Contains:
    MANUAL   TXT  MicroGOURMET manual  (WORDSTAR format)
    GOURMET  DBF  MicroGOURMET dBASE II database file
    UNWS     BAS  Program for converting WORDSTAR files to DOS files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #117, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  GOURMET .DBF         CRC = 81 7F

--> FILE:  MANUAL  .TXT         CRC = 44 0E

--> FILE:  UNWS    .BAS         CRC = B1 DB

 ---------------------> SUM OF CRCS = 77 68

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MANUAL.TXT

{% raw %}
```
...CO 65


















     Copyright (c) 1983 microGOURMET.  All rights reserved.

                           created by

                        Barbara Dalrymple
                           Ron Cleaver




                           Release 1.10




                       System Requirements

1.  dBASE II
2.á A⌠ leas⌠ 180δ byte≤ oµ disδ storage¼á witΦ a⌠ leas⌠ 90δ byte≤ ì
áááápe≥ disk« 
3.  A display screen with at least 40 columns and 24 rows.
4.  CP/M-80 or CP/M-86 or MP/M OR MP/M-86 or PC-DOS or MS-DOS. 









dBASE II is a trademark of Ashton-Tate
CP/M and MP/M are trademarks of Digital Research
PC-DOS is a trademark of IBM
MS-DOS is a trademark of Microsoft


è...T1
                             Preface

...T2
Versions

microGOURME╘á i≤á distributeΣá iεá tw∩á versions¼á onσá fo≥á higΦ ì
capacit• disk≤ (e.g.¼ doublσ densit• disk≤ useΣ witΦ thσ IB═ PC)¼ ì
anΣá onσ fo≥ lo≈ capacit• disk≤ (e.g.¼á singlσ densit• disk≤ useΣ ì
witΦá thσ Osbornσ 1)«á  Thσ version≤ var• iεá thei≥á installatioε ì
procedure¼ anΣ iε thei≥ capabilities«  BotΦ version≤ arσ supplieΣ ì
oεá thσ distributioε disk«á  Thi≤ procedurσ wil∞ allo≈á you¼á fo≥ ì
example¼á t∩ usσ thσ lo≈ capacit• versioε initially¼á anΣ usσ thσ ì
higΦá capacit•á versioεá iµá yo⌡ upgradσ you≥á systeφá t∩á large≥ ì
capacit• disks.

Thσá installatioεá procedure≤ arσ discusseΣá separately¼á iεá tw∩ ì
ways«á  First¼á iµá yo⌡á arσ familia≥ witΦá computer≤á anΣá thei≥ ì
operation¼ therσ i≤ ß sectioε entitleΣ "Iµ Yo⌡ Can'⌠ Wai⌠ T∩ ReaΣ ì
thσá Manual"«á  Thi≤ sectioε summarize≤ thσ methoΣ oµá installinτ ì
eacΦá version«á  Iµ yo⌡ don'⌠ understanΣ tha⌠ section¼á theε reaΣ ì
thσ Installatioε Section¼á whicΦ elaborate≤ oε botΦá installatioε ì
procedures.

...T2
Files

The following files are included with the package:

     GOURMET.H╔     Prograφáfo≥áhigh capacity disks
     GOURMET.LOW    Program for low  capacity disks
     GOURMET.DBF    Recipe data base
     ITEM.DBF       Ingredient data base
     SHOP.DBF       Shopping list data base (empty)
     TYPE.NDX       Category Index
     NUMBER.NDX     Record number index
     ITEM.NDX       Ingredient Index

Thσá filσ ITEM.ND╪ wil∞ bσ presen⌠ onl• iµ thσ capacit•á oµá you≥ ì
disδá wil∞ permit«á  Otherwise¼á iµ yo⌡ wil∞ bσ usinτ thσ prograφ ì
fo≥ higΦ capacit• disks¼á yo⌡ mus⌠ creatσ i⌠ usinτ thσ optioεá oε ì
thσ Datß Basσ Maintenancσ Menu.

microGOURME╘á als∩ use≤ othe≥ files«á  OPTION.ME═ wil∞ bσ createΣ ì
b•á thσ installatioε proces≤ oε thσ defaul⌠ disδ drive«á  ┴á filσ ì
nameΣá TEMP.DB╞á i≤ useΣ iε thσ proces≤ oµ deletinτ thσá shoppinτ ì
lis⌠ file¼ fo≥ temporar• storagσ (thi≤ accommodate≤ ß peculiarit• ì
oµ somσ operatinτ systems)«  Finally¼ INGREDNT.DB╞ i≤ ß temporar• ì
filσ useΣ wheε creatinτ thσ ingredien⌠ index.

...T2
Ingredient Index

Fo≥ thi≤ package¼á whicΦ provide≤ ninet• gourme⌠ recipes¼ anΣ fo≥ ì
eacΦá additiona∞á recipσá disδá released¼áá wσá wil∞á includσá aε ì
ingredien⌠á listinτá iεá alphabetica∞á order«á  Thi≤á listinτá i≤ ì
primaril•á fo≥ thosσ oµ yo⌡ wh∩ wil∞ bσ usinτá GOURMET.LOW«á  Bu⌠ ì
yo⌡á caεá als∩á usσ i⌠ iε lie⌡ oµá displayinτá ingredients¼á wheε ì
searchinτ fo≥ recipe≤ b• categor• anΣ ingredient.
è                        Table of Contents

  Preface  . . . . . . . . . . . . . . . . . . . . . . . . .    2
     Versions  . . . . . . . . . . . . . . . . . . . . . . .    2
     Files . . . . . . . . . . . . . . . . . . . . . . . . .    2
     Ingredient Index  . . . . . . . . . . . . . . . . . . .    2
  If You Can't Wait To Read the Manual . . . . . . . . . . .    4
     Low Capacity Disks  . . . . . . . . . . . . . . . . . .    4
     High Capacity Disks . . . . . . . . . . . . . . . . . .    5
  Installation . . . . . . . . . . . . . . . . . . . . . . .    6
     Preparation - Low Capacity Disks  . . . . . . . . . . .    6
        Total floppy disk storage of 180k bytes  . . . . . .    6
        Hard Disk  . . . . . . . . . . . . . . . . . . . . .    7
        Memory Disk  . . . . . . . . . . . . . . . . . . . .    7
     Installing - Low Capacity Disks . . . . . . . . . . . .    7
     Preparation - High Capacity Disks . . . . . . . . . . .    8
        Total floppy disk storage of more than 180k bytes. .    8
        Hard Disk  . . . . . . . . . . . . . . . . . . . . .    9
        Memory Disk  . . . . . . . . . . . . . . . . . . . .    9
     Installing - High Capacity Disks  . . . . . . . . . . .    9
  Overview . . . . . . . . . . . . . . . . . . . . . . . . .   10
     Category  . . . . . . . . . . . . . . . . . . . . . . .   10
     Category and Name . . . . . . . . . . . . . . . . . . .   11
     Category and Ingredients  . . . . . . . . . . . . . . .   11
     Category and Preparation Time . . . . . . . . . . . . .   11
  Program Operation  . . . . . . . . . . . . . . . . . . . .   13
     Main Menu . . . . . . . . . . . . . . . . . . . . . . .   14
     Option 1 - Recipe Retrieval . . . . . . . . . . . . . .   14
     Option 2 - Shopping List  . . . . . . . . . . . . . . .   16
     Option 3 - Data Base Maintenance  . . . . . . . . . . .   17
        Data Base Record Structure . . . . . . . . . . . . .   20
     Option 4 - Switching Disks  . . . . . . . . . . . . . .   21
     Option 5 - Exiting to the Operating System  . . . . . .   21
     Option 6 - Exiting to dBASE II  . . . . . . . . . . . .   21
  Ingredient List  . . . . . . . . . . . . . . . . . . . . .   22




















è...T1
              If You Can't Wait To Read the Manual

...T2
                       Low Capacity Disks

T∩á ge⌠ yo⌡ starteΣ iε ß hurry¼á yo⌡ caε reaΣ onl• thi≤á section«  ì
Iµá yo⌡ don'⌠ havσ an• problem≤ understandinτ thi≤á summary¼á yo⌡ ì
shoulΣá bσ enjoyinτ microGOURME╘ iε ß fe≈ minutes«á  Iµ yo⌡á havσ ì
onl•á 180δá byte≤ oµ tota∞ usablσ disδá storage¼á theεá usσá thi≤ ì
procedure.

1.á Makσ ß backu≡ cop• oµ thσ disk(s⌐ whicΦ yo⌡ received« Pu⌠ thσ ì
ááááoriginal(≤) awa• iε your disk library anΣ usσ thσ copy(ies).

2.á Pu⌠á thσá followinτá dBAS┼á I╔ file≤á oεá thσá defaul⌠á disk║ ì
áááá(normall• A:)

    - DBASE.COM
    - DBASEMSG.OVR
    - DBASEMAI.OVR
    - DBASEMSC.OVR
    - GOURMET.CMD (copy GOURMET.LOW and rename it)
    - NUMBER.NDX
    - TYPE.NDX
    - SHOP.DBF

    Put the file GOURMET.DBF on drive B:.ì

    Thσ prograφ filσ yo⌡ usσ shoulΣ bσ oε thσ defaul⌠ disk«á  Yo⌡ ì
ááááshoulΣ renamσ i⌠ eithe≥ GOURMET.CM─ o≥ GOURMET.PRG¼ dependinτ ì
ááááoεá whicΦá extensioε you≥ versioε oµ dBAS┼ I╔á requires«á  Wσ ì
ááááassumσá herσá tha⌠ yo⌡ usσ thσá extensioεá .CMD«á  Wheεá thi≤ ì
ááááprograφá i≤ initiateΣ b• typinτ DBAS┼ GOURMET¼á i⌠ wil∞á looδ ì
ááááfo≥á ßá filσ nameΣ OPTION.MEM«á  Iµ i⌠ i≤ no⌠ oε thσá defaul⌠ ì
áááádisk¼á thσá prograφá display≤ thσ othe≥á file≤á requireΣá fo≥ ì
ááááoperatioεá anΣá ask≤ yo⌡ t∩ changσ thei≥ disδ drivσá locatioε ì
áááá(thσá defaul⌠á i≤ B:⌐ and/o≥ name«á Makσ surσ yo⌡á ente≥á thσ ì
áááácorrec⌠ disδ drivσ lette≥ t∩ reflec⌠ wherσ yo⌡ pu⌠ thσ files«  ì
ááááIµ an• filσ canno⌠ bσ found¼á aε erro≥ messagσ oµ thσ forφá - ì
ááááBaΣá <filename╛á - wil∞á bσ displayed«á  Nex⌠ yo⌡á ente≥á thσ ì
áááánumbe≥ oµ column≤ whicΦ you≥ screeε caε display«  Thσ defaul⌠ ì
áááái≤á 8░ bu⌠ yo⌡ caε changσ i⌠ t∩ an• othe≥ numbe≥á betweeεá 4░ ì
ááááanΣ 132.

3.á Severa∞á screen≤ offe≥ ß hel≡ option«á  Oε thesσ screen≤á yo⌡ ì
ááááshoulΣá responΣá witΦá ßá ┐á (questioε mark⌐á unti∞á yo⌡á arσ ì
ááááfamilia≥á witΦ prograφ operation«á  Thσ hel≡ tex⌠ wil∞á guidσ ì
ááááyo⌡ througΦ thσ options¼á bu⌠ reaΣ thσ manua∞ furthe≥ iµá yo⌡ ì
áááástil∞ havσ questions.

4.á Lette≥á o≥á worΣ response≤ ma• bσ entereΣ iε eithe≥ uppe≥á o≥ ì
áááálowe≥á case«á  Pres≤á thσá returεá o≥á ente≥á ke•á afte≥á al∞ ì
ááááresponses.

5.á Iµ yo⌡ don'⌠ understanΣ wha⌠ yo⌡ havσ reaΣ s∩ far¼á theεá yo⌡ ì
ááááshoulΣ takσ thσ timσ t∩ reaΣ thσ manual.
è
...T2
                       High Capacity Disks


T∩á ge⌠ yo⌡ starteΣ iε ß hurry¼á yo⌡ caε reaΣ onl• thi≤á section«  ì
Iµá yo⌡ don'⌠ havσ an• problem≤ understandinτ thi≤á summary¼á yo⌡ ì
shoulΣá bσ enjoyinτ microGOURME╘ iε ß fe≈ minutes«á  Iµ yo⌡á havσ ì
morσ thaε 180δ byte≤ oµ tota∞ usablσ disδ storage¼á theε usσ thi≤ ì
procedure.

1.á Makσ ß backu≡ cop• oµ thσ disk(s⌐ whicΦ yo⌡ received« Pu⌠ thσ ì
ááááoriginal(≤) awa• iε your disk library anΣ usσ thσ copy(ies).

2.ááThσá dBAS┼ I╔ file≤ (i.e.¼á DBASE*.*⌐ mustô bσ oε thσá defaul⌠ ì
áááádisk«áá Thσá microGOURME╘á prograφá filσá yo⌡á usσá i≤á nameΣ ì
ááááGOURMET.HI«á  Thσá prograφá filσá yo⌡ usσ shoulΣá bσá oεá thσ ì
áááádefaul⌠á disk«á  Yo⌡á shoulΣ renamσ i⌠ eithe≥ GOURMET.CM─á o≥ ì
ááááGOURMET.PRG¼á dependinτá oε whicΦ extensioε you≥á versioεá oµ ì
áááádBAS┼á I╔á  requires«á  Wσá wil∞á assumσá tha⌠á yo⌡á usσá thσ ì
ááááextensioε .CMD«  Pu⌠ al∞ thσ othe≥ microGOURME╘ file≤ oε disδ ì
ááááB║ iµ yo⌡ havσ sufficien⌠ space.

    Wheεá thi≤ prograφ i≤ initiateΣ b• typinτ DBAS┼á GOURMET¼á i⌠ ì
ááááwil∞ looδ fo≥ ß filσ nameΣ OPTION.MEM«á  Iµ i⌠ i≤ no⌠ oεá thσ ì
áááádefaul⌠á disk¼á thσ prograφ begins thσ installation process.ì

3.á Iµ yo⌡ don'⌠ havσ sufficien⌠ disδ spacσ oε logica∞ disδ drivσ ì
ááááB:¼á o≥á yo⌡á wan⌠á t∩ pu⌠ thσ prograφ anΣ datßá file≤á oεá ß ì
áááá"memor•á diskóá o≥á harΣ disk¼á theεá reaΣá thσá installatioε ì
áááásectioε oµ thσ manual.

4.á Severa∞á screen≤ offe≥ ß hel≡ option«á  Oε thesσ screen≤á yo⌡ ì
ááááshoulΣá responΣá witΦá ßá ┐á (questioε mark⌐á unti∞á yo⌡á arσ ì
ááááfamilia≥á witΦ prograφ operation«á  Thσ hel≡ tex⌠ wil∞á guidσ ì
ááááyo⌡ througΦ thσ options¼á bu⌠ reaΣ thσ manua∞ furthe≥ iµá yo⌡ ì
áááástil∞ havσ questions.

5.á Lette≥á o≥á worΣ response≤ ma• bσ entereΣ iε eithe≥ uppe≥á o≥ ì
áááálowe≥á case«á  Pres≤á thσá returεá o≥á ente≥á ke•á afte≥á al∞ ì
ááááresponses.

6.á Iµ yo⌡ don'⌠ understanΣ wha⌠ yo⌡ havσ reaΣ s∩ far¼á theεá yo⌡ ì
ááááshoulΣ takσ thσ timσ t∩ reaΣ thσ manual.












è...T1
                          Installation

...T2
                Preparation - Low Capacity Disks

microGOURME╘á i≤á designeΣ t∩ bσ useΣ oε ß variet•á oµá differen⌠ ì
hardwarσá anΣ witΦ ß variet• oµ operatinτ systems«á  Thσ hardwarσ ì
ma• var• iε it≤ configuration¼á anΣ installatioε oµ thi≤á packagσ ì
wil∞á accommodatσá thesσ variations«á  Iµ yo⌡ havσ 180δ byte≤á oµ ì
total disk storage, use this procedure.

It'≤ no⌠ difficul⌠ t∩ instal∞ microGOURMET¼á becausσ i⌠á require≤ ì
onl• tw∩ screens¼á anΣ entr• oµ ß fe≈ items«  Thσ primar• purposσ ì
oµá installatioεá i≤ t∩ accoun⌠ fo≥ variation≤á iεá disδá storagσ ì
capacit•á (i.e.¼á thσá numbe≥ oµ character≤ whicΦ eacΦá disδá caε ì
hold)¼áá anΣá thσá screeεá sizσá (iεá particula≥á thσá numbe≥á oµ ì
character≤á whicΦá caε bσ displayeΣ oε ß horizonta∞ linσá oµá thσ ì
screen).

Beforσ yo⌡ d∩ anythinτ else¼á makσ ß cop• oµ thσ disk(s⌐ supplieΣ ì
witΦ thσ package¼á pu⌠ thσ original(s⌐ awa• iε you≥ disδ library¼ ì
anΣ usσ thσ cop•(ies).

Wσ wil∞ discus≤ thσ preparatioε oµ microGOURME╘ disk(s⌐ fo≥ threσ ì
type≤ oµ installations:

     - total floppy disk storage of 180k bytes
     - hard disks
     - memory disks 

Thσá followinτ assume≤ tha⌠ A║á i≤ thσ defaul⌠ disδ drivσ anΣá B║ ì
contains the data, for floppy disk installation.

...T3
Total floppy disk storage of 180k bytes

1.  Put the following files on A:
    - DBASE.COM
    - DBASEMSG.OVR
    - DBASEMAI.OVR
    - DBASEMSC.OVR
    - GOURMET.CMD (copy GOURMET.LOW and rename it)
    - NUMBER.NDX
    - TYPE.NDX
    - SHOP.DBF

2.  Put the file GOURMET.DBF ON B:

    Yo⌡ caε als∩ pu⌠ thσ filσ DBASEAPP.OV╥ oε A:«á  Thi≤ filσá i≤ ì
áááárequireΣá fo≥ datß basσ maintenancσ (seσ optioε │ oε thσ maiε ì
áááámenu)«  However¼ it≤ presencσ wil∞ reducσ thσ spacσ availablσ ì
ááááfo≥á buildinτ ß shoppinτ lis⌠ usinτ SHOP.DBF«á  Wσá recommenΣ ì
áááátha⌠á yo⌡ preparσ ß separatσ disδ a≤ abovσ fo≥á A║á includinτ ì
ááááDBASEAPP.OV╥ fo≥ usσ wheε yo⌡ add¼ changσ o≥ deletσ recipes.

3.á Ruεá thσ prograφ wheε yo⌡ havσ thσ A╛ promp⌠ b• typinτá DBAS┼ ì
ááááGOURMET.
è...T3
Hard Disk

Cop•á al∞á dBAS┼á I╔á file≤ t∩ you≥ harΣ disk¼á a≤á wel∞á a≤á thσ ì
microGOURME╘ file≤ supplieΣ (usσ GOURMET.HI)«á  Assuminτ tha⌠ thσ ì
harΣ disδ i≤ drivσ C:¼á theε a⌠ thσ C╛ promp⌠ ente≥ DBAS┼ GOURME╘ ì
anΣ pres≤ thσ returε o≥ ente≥ key« 

...T3
Memory Disk

Se⌠á u≡ ß batcΦ filσ t∩ cop• al∞ dBAS┼ I╔ anΣ microGOURME╘á file≤ ì
(usσá GOURMET.HI⌐ you≥ memor• disk«á  Assuminτ thσ memor• disδ i≤ ì
D:¼ theε a⌠ thσ D╛ promp⌠ typσ DBAS┼ GOURME╘ anΣ pres≤ thσ returε ì
o≥áá ente≥á key«áá  WitΦá ßá memor•á disδá yo⌡á mus⌠áá re-instal∞ ì
microGOURME╘ (i.e.¼á recreatσ thσ filσ OPTION.MEM⌐ eacΦ timσá yo⌡ ì
usσ it.

...T2
Installing - Low Capacity Disks

Wheεá microGOURME╘á begins¼á thσ firs⌠ screeε display≤á thσá ful∞ ì
filσá specificatioε fo≥ thσ file≤ whicΦ yo⌡ caε install«á  Changσ ì
thσ disδ drivσ identifier¼ iµ necessary¼ t∩ reflec⌠ thσ manne≥ iε ì
whicΦá yo⌡á prepareΣ you≥ disks«á  Yo⌡ ma• als∩ changσá thσá filσ ì
name≤ iµ yo⌡ alread• havσ ß filσ oε thσ disδ witΦ thσ samσá name«  ì
Bu⌠ yo⌡ mus⌠ renamσ theφ wheε preparinτ thσ disk≤ (no⌠ here).

Theεá ente≥á ß numbe≥ oε thσ nex⌠ screeε equa∞ t∩ thσá numbe≥á oµ ì
column≤ you≥ screeε caε displa• oε ß row«á microGOURME╘ wil∞ theε ì
creatσ ß filσ nameΣ OPTION.ME═ oε thσ defaul⌠ disk«á microGOURME╘ ì
i≤ no≈ installed«  Enjo• it« 

Somσá displa• screen≤ whicΦ arσ no⌠ adjusteΣ correctl• ma•á shif⌠ ì
thσá entirσá displa• t∩ thσ lef⌠ o≥ right«á  Iµ thσá microGOURME╘ ì
screen≤á don'⌠ looδ centereΣ oε you≥ screen¼á yo⌡ caεá erasσá thσ ì
filσá OPTION.ME═ oε thσ defaul⌠ disk¼á anΣ reinstal∞ thσá prograφ ì
changinτ thσ screeε paramete≥ t∩ compensatσ fo≥ you≥ display.




















è...T2
                Preparation - High Capacity Disks

microGOURME╘á i≤á designeΣ t∩ bσ useΣ oε ß variet•á oµá differen⌠ ì
hardwarσá anΣ witΦ ß variet• oµ operatinτ systems«á  Thσ hardwarσ ì
ma• var• iε it≤ configuration¼á anΣ installatioε oµ thi≤á packagσ ì
wil∞á accommodatσ thesσ variations«á  Iµ yo⌡ havσ morσ thaεá 180δ ì
bytes of total usable disk storage, then use this procedure.

It'≤ no⌠ difficul⌠ t∩ instal∞ microGOURMET¼á becausσ i⌠á require≤ ì
entr• oµ ß fe≈ items«á  Thσ primar• purposσ oµ installatioε i≤ t∩ ì
accoun⌠ fo≥ variation≤ iε disδ storagσ capacit• (i.e.¼ thσ numbe≥ ì
oµ character≤ whicΦ eacΦ disδ caε hold)¼á anΣ thσ screeε sizσ (iε ì
particula≥á thσ numbe≥ oµ character≤ whicΦ caε bσ displayeΣ oεá ß ì
horizonta∞ linσ oµ thσ screen).

Beforσ yo⌡ d∩ anythinτ else¼á makσ ß cop• oµ thσ disk(s⌐ supplieΣ ì
witΦ thσ package¼á pu⌠ thσ original(s⌐ awa• iε you≥ disδ library¼ ì
anΣ usσ thσ cop•(ies).

Wσ wil∞ discus≤ thσ preparatioε oµ microGOURME╘ disk(s⌐ fo≥ threσ ì
type≤ oµ installations:

     - total floppy disk storage of more than 180k bytes
     - hard disks
     - memory disks 

Thσá followinτ assume≤ tha⌠ A║á i≤ thσ defaul⌠ disδ drivσ anΣá B║ ì
contains the data, for floppy disk installation.

...T3
Total floppy disk storage of more than 180k bytes.

1.á Pu⌠á thσ dBAS┼ I╔ file≤ anΣ thσ prograφ filσ (usσ GOURMET.HI⌐ ì
ááááoε A:«á  Usσ GOURMET.H╔ fo≥ thσ prograφ filσ anΣ renamσ i⌠ a≤ ì
ááááappropriatσ fo≥ you≥ versioε oµ dBAS┼ II¼á witΦ thσ extensioε ì
áááá.CM─ O╥ .PRG."

2.á Iµá yo⌡á havσ tw∩ disδ drive≤ anΣ sufficien⌠ spacσ oε onσá oµ ì
ááááthem¼á (abou⌠á 140δ byte≤ o≥ morσ t∩ allo≈ fo≥ shoppinτá lis⌠ ì
áááástorage⌐á wσá recommenΣ tha⌠ yo⌡ pu⌠ al∞ thσá othe≥á supplieΣ ì
ááááfile≤ oε B:«ì

3.á At the A> prompt, enter DBASE GOURMET.

4.á Iµá yo⌡ don'⌠ havσ enougΦ spacσ oε thσ B║á disδ fo≥á al∞á thσ ì
áááásupplieΣá files¼á theε somσ oµ thesσ file≤ mus⌠ bσ placeΣá oε ì
ááááA:¼ a⌠ you≥ discretion.









è...T3
Hard Disk

Cop•á al∞ dBAS┼ I╔ file≤ t∩ you≥ harΣ disk¼á a≤ wel∞ a≤ thσá one≤ ì
supplieΣ (usσ GOURMET.HI)«á  Assuminτ tha⌠ thσ harΣ disδ i≤ drivσ ì
C:¼á theεá a⌠á thσá C╛ promp⌠ ente≥ DBAS┼ GOURME╘ anΣá pres≤á thσ ì
returε o≥ ente≥ key« 

...T3
Memory Disk

Se⌠á u≡ ß batcΦ filσ t∩ cop• al∞ dBAS┼ I╔ anΣ microGOURME╘á file≤ ì
(usσá GOURMET.HI⌐ t∩ you≥ memor• disk«á  Assuminτ thσ memor• disδ ì
i≤á D:¼á theε a⌠ thσ D╛ promp⌠ typσ DBAS┼ GOURME╘ anΣá pres≤á thσ ì
returεá o≥á ente≥ key«á  WitΦ ß memor• disδ yo⌡á mus⌠á re-instal∞ ì
microGOURME╘á (i.e.¼á recreatσ thσ filσ OPTION.MEM⌐ eacΦ timσ yo⌡ ì
usσ it.

...T2
Installing - High Capacity Disks

Wheε microGOURME╘ begins¼á i⌠ ask≤ yo⌡ t∩ ente≥ ß valuσ equa∞á t∩ ì
thσ numbe≥ oµ column≤ you≥ screeε caε displa• oε ß row«á  Nex⌠ i⌠ ì
ask≤á fo≥ thσ numbe≥ oµ disδ drive≤ iε you≥ system«á  Thσá numbe≥ ì
yo⌡á ente≥á shoulΣ equa∞ thσ numbe≥ oµ logicaléá disk≤á yo⌡á have«  ì
(Sometime≤á harΣá disk≤ arσ divideΣ int∩ severa∞á logica∞á disks¼ ì
e.g.¼á C║ anΣ D:«  Memor• disk≤ usuall• havσ ß logica∞ disδ drivσ ì
designatioε a≤ well.⌐  Yo⌡ caε als∩ ente≥ thσ numbe≥ oµ disk≤ yo⌡ ì
wan⌠ thσ prograφ t∩ search«  If¼ fo≥ example¼ yo⌡ havσ tw∩ disks¼ ì
bu⌠á havσ al∞ thσ file≤ oε A:¼á yo⌡ coulΣ ente≥ ▒ here¼á s∩á tha⌠ ì
drivσ B║ woulΣ no⌠ bσ searcheΣ (anΣ doesn'⌠ neeΣ ß disδ iε it).

Nex⌠á yo⌡á arσ askeΣ whethe≥ yo⌡ wan⌠ t∩ changσ an• oµá thσá filσ ì
name≤á whicΦ thσ prograφ uses«á  Thi≤ shoulΣ onl• bσ necessar• iµ ì
yo⌡á alread• havσ ß filσ oε ß disδ witΦ thσ samσ name«á  Iεá tha⌠ ì
case¼á answe≥ yes¼á anΣ thσ filσ name≤ arσ displayed«  Thσ curso≥ ì
wil∞ positioε itselµ a⌠ thσ firs⌠ entry«á  Fo≥ eacΦá file¼á pres≤ ì
returεá iµá yo⌡ don'⌠ wan⌠ t∩ changσ thσ name¼á o≥ ente≥ thσá ne≈ ì
namσ anΣ theε pres≤ return.

Thσ prograφ wil∞ searcΦ you≥ disk≤ (iε ascendinτ order¼á i.e«á A║ ì
first¼á theε B:¼á etc.⌐ t∩ finΣ thσ file≤ i⌠ needs«á  However¼ i⌠ ì
yo⌡ don'⌠ wan⌠ t∩ searcΦ al∞ you≥ disδ drive≤ o≥ yo⌡ simpl• don'⌠ ì
wan⌠á t∩á remembe≥ t∩ pu⌠ ß disδ iε al∞á drives¼á theεá thσá nex⌠ ì
screeεá wil∞ accommodatσ you«á  I⌠ ask≤ yo⌡ whicΦ drivσ t∩á star⌠ ì
thσ search«á  Specif• thσ drivσ t∩ begiε with¼á o≥ leavσ i⌠ blanδ ì
anΣ pres≤ returε t∩ searcΦ al∞ disδ drives«á  Fo≥ example¼ iµ yo⌡ ì
havσ threσ disδ drives¼ bu⌠ havσ placeΣ al∞ thσ file≤ oε C:¼ theε ì
ente≥ ├ here¼ anΣ A║ anΣ B║ wil∞ no⌠ bσ searched.

microGOURME╘á wil∞á theε asδ yo⌡ t∩ wai⌠ whilσ i⌠á complete≤á thσ ì
process¼ includinτ thσ creatioε oµ ß filσ nameΣ OPTION.ME═ oε thσ ì
defaul⌠ disk«  microGOURME╘ i≤ no≈ installed«  Enjo• it« 

Somσá displa• screen≤ whicΦ arσ no⌠ adjusteΣ correctl• ma•á shif⌠ ì
thσá entirσ displa• t∩ thσ lef⌠ o≥ right«á  Iµ thσ screen≤á don'⌠ ì
looδá centereΣ oε you≥ screen¼á yo⌡ caε erasσ thσ filσ OPTION.ME═ ì
oε thσ defaul⌠ disk¼ anΣ changσ thσ screeε parameter.
è...T1
                            Overview

Thi≤á sectioε wil∞ tel∞ yo⌡ abou⌠ whatôá microGOURME╘á does«á  Thσ ì
nex⌠ sectioε wil∞ explaiε iε detai∞ howô i⌠ works.

microGOURME╘á i≤á ß softwarσ packagσ whicΦ wa≤ designeΣá t∩á hel≡ ì
thosσ oµ yo⌡ wh∩ spenΣ lot≤ oµ timσ lookinτ througΦ cookbook≤ anΣ ì
rummaginτ througΦ scrap≤ oµ pape≥ t∩ finΣ recipes«á  I⌠ wil∞ hel≡ ì
reducσ thσ timσ spen⌠ choosinτ recipe≤ t∩ preparσ fo≥ botΦ famil• ì
anΣá gues⌠ meals«á  I⌠ i≤ als∩ aε aiΣ t∩ men⌡ planning«á  Yo⌡ caε ì
selec⌠á recipe≤ fo≥ whateve≥ timσ perioΣ yo⌡ wisΦá (ßá week¼á fo≥ ì
instance)¼á prin⌠á thσ recipe≤ (a≤ ß reference)¼á anΣ preparσ anΣ ì
prin⌠ ß shoppinτ lis⌠ t∩ takσ t∩ thσ store.

Yo⌡ caε als∩ adΣ recipe≤ oµ you≥ owε a⌠ an• time«  Yo⌡ caε changσ ì
thσáá recipe≤á supplieΣá iµá you≥á tastσá dictate≤á ßá changσá iε ì
ingredien⌠ proportions¼ o≥ yo⌡ wan⌠ t∩ modif• thσ instruction≤ t∩ ì
sui⌠ you≥ cookinτ style«  Yo⌡ caε als∩ deletσ an• recipσ tha⌠ yo⌡ ì
don'⌠ likσ (wσ hopσ tha⌠ doesn'⌠ happeε often).

microGOURME╘á use≤á ß hierarch• oµ menus«á  Wheεá yo⌡á selec⌠á aε ì
optioεá froφ thσ maiε menu¼á anothe≥ men⌡ ma• theε bσá displayed¼ ì
offerinτá ß furthe≥ refinemen⌠ t∩ you≥ choicσ oµá actions«á  Thi≤ ì
proces≤ continue≤ unti∞ yo⌡ havσ focuseΣ oε exactl• wha⌠ yo⌡ wan⌠ ì
t∩ do¼ anΣ then¼ fo≥ example¼ recipe≤ arσ retrieveΣ anΣ displayeΣ ì
o≥ printed¼ and¼ iµ yo⌡ like¼ addeΣ t∩ ß shoppinτ lis⌠ file.

microGOURME╘á i≤á men⌡á driven«á  Thi≤á mean≤á that¼á excep⌠á fo≥ ì
response≤ whicΦ requirσ ß ye≤ o≥ no¼ al∞ option≤ arσ labeleΣ witΦ ì
number≤ (anΣ yo⌡ caε ente≥ ß ┐ fo≥ help)«  Thσ numbe≥ ░ (zero⌐ i≤ ì
reserveΣ fo≥ returninτ t∩ ß previou≤ menu«á  Normally¼á youá jus⌠ ì
pres≤á ß ke• correspondinτ t∩ thσ numbe≥ yo⌡ want¼á pres≤á returε ì
anΣ g∩ on«  Thi≤ allow≤ yo⌡ t∩ selectivel• "navigateó througΦ thσ ì
man• option≤ provided.

Unti∞á yo⌡ arσ familia≥ witΦ thσ function≤ oµ thi≤ packagσ (whicΦ ì
shouldn'⌠á takσ long)¼á wσ sugges⌠ yo⌡ usσ thσ hel≡ screen≤ a≤á ß ì
guide«á  Oε an• screeε whicΦ allow≤ it¼á jus⌠ ente≥ ß ┐ (questioε ì
mark) in response to a request for option selection.

WitΦ microGOURME╘ yo⌡ caε retrievσ recipe≤ b• categor• alone¼á o≥ ì
b•á categor•á anΣ onσ othe≥ criterion¼á sucΦ a≤á recipσá namσá o≥ ì
ingredient≤ o≥ preparatioε time.

...T2
Category

Al∞á microGOURME╘ recipe≤ arσ classifieΣ accordinτá t∩á category« ì
Thσ categor• i≤ intendeΣ t∩ providσ thσ maiε windo≈ int∩ thσ datß ì
base¼á anΣ designeΣ t∩ corresponΣ t∩ thσ maiε selectioε criterioε ì
normall• useΣ t∩ searcΦ fo≥ ß recipe«á  Thσ categorie≤ arσ alway≤ ì
numbereΣ froφ ▒ t∩ ╖ anΣ arσ defineΣ a≤ follows:




è                          1) Appetizers
                          2) Salads
                          3) Main Dishes
                          4) Vegetable Dishes
                          5) Breads
                          6) Desserts
                          7) Cookies

Yo⌡á wil∞ probabl• wan⌠ t∩ retrievσ recipe≤ b• categor• alonσá iµ ì
yo⌡ jus⌠ wan⌠ t∩ stud• what'≤ availablσ fo≥ ß particula≥ typσá oµ ì
disΦá yo⌡ havσ iε mind«á Iε thi≤ case¼á nothinτ elsσ i≤ askeΣá oµ ì
you«á  Theε thσ tex⌠ oµ thσ recipe≤ iε thσ categor• selecteΣ wil∞ ì
bσá retrieveΣ fo≥ yo⌡ t∩ examine«á  Iµ yo⌡ wan⌠ t∩ browsσ througΦ ì
thσ datß basσ lookinτ fo≥ aε ideß regardles≤ oµ category¼ yo⌡ caε ì
tel∞ thσ prograφ t∩ ignorσ thσ categor• iε findinτá recipes¼á anΣ ì
theε thσ recipe≤ wil∞ bσ retrieveΣ sequentially.

...T2
Category and Name

Wheεá yo⌡ wan⌠ t∩ spenΣ les≤ timσ searchinτ fo≥ something gooΣ t∩ ì
fix¼á adΣ anothe≥ selectioε criterion«á  Iµ yo⌡ wan⌠ ß quicδ looδ ì
a⌠ thσ name≤ oµ recipe≤ iε ß category¼ selec⌠ recipe≤ b• categor• ì
anΣ name«á  Yo⌡ wil∞ theε bσ showε ß lis⌠ oµ name≤ froφ whicΦ yo⌡ ì
can choose one that appeals to you.

...T2
Category and Ingredients

Iµ yo⌡ arσ usinτ GOURMET.HI¼ yo⌡ caε examinσ thσ ingredien⌠ inde° ì
beforσá proceeding¼á t∩á seσ whethe≥ thσ ingredient≤ yo⌡ havσá iε ì
minΣá arσá iεá ß recipσ somewhere«á  Yo⌡ caεá als∩á seσá ho≈á thσ ì
ingredien⌠áá i≤áá specified¼áá anΣá whethe≥á therσá arσáá severa∞ ì
alternative≤ (i.e.¼ variations⌐ fo≥ you≥ ingredients.

Iµá yo⌡á havσ tw∩ o≥ threσ item≤ iε thσ cupboarΣ o≥á refrigerato≥ ì
whicΦ yo⌡ wan⌠ t∩ usσ fo≥ ß dish¼á selec⌠ recipe≤ b• categor• anΣ ì
ingredients«áá  Wheεáá yo⌡á retrievσá recipe≤á b•á categor•áá anΣ ì
ingredients¼á yo⌡ ma• usσ uppe≥ o≥ lowe≥ casσ fo≥ thσ namσ oµ thσ ì
ingredient«á  Thσá prograφá wil∞ looδ fo≥ ingredient≤ exactl•á a≤ ì
spelled¼á s∩á bσá carefu∞á here«á  Yo⌡ caε bσ a≤á genera∞á o≥á a≤ ì
specifiπá a≤á yo⌡á wan⌠ iε enterinτá thσá ingredien⌠á name«á  Fo≥ ì
example¼á yo⌡á caεá ente≥ chickeε a≤ aεá ingredient¼á o≥á chickeε ì
breasts«  U≡ t∩ threσ ingredient≤ ma• bσ specified«  Iµ n∩ recipσ ì
matche≤ thσ ingredient(s⌐ entered¼ tr• beinτ les≤ specific«  

...T2
Category and Preparation Time

Iµá yo⌡ havσ jus⌠ comσ homσ froφ worδ anΣ don'⌠ wan⌠ t∩á spenΣá ß ì
lo⌠á oµ timσ cooking¼á selec⌠ recipe≤ b• categor• anΣ preparatioε ì
time«

Wσá havσá personall• prepareΣ anΣ tasteΣ al∞á recipe≤á whicΦá arσ ì
supplieΣáá witΦá thi≤á package«áá  Beside≤á enjoyinτá thσáá meal≤ ì
tremendously¼á (no¼á wσá didn'⌠ ge⌠ fa⌠ iε thσ process.⌐ wσá havσ ì
determineΣá ß reasonablσ preparatioε timσ fo≥ eacΦá recipe«á  Thσ ì
times given are for an experienced cook, so novices beware.
èWσá definσá preparatioεá timσ t∩ bσ thσ tota∞ numbe≥á oµá minute≤ ì
necessar• t∩ completσ ß recipe¼á froφ star⌠ t∩ finish¼á includinτ ì
timσ fo≥ cooking¼ refrigeration¼ etc.
  
Recipe≤á whicΦá takσá ß lonτ timσ (e.g.¼á mus⌠ bσ lef⌠á t∩á chil∞ ì
overnight)¼ wil∞ havσ ß preparatioε timσ oµ 99╣ minutes.




Iµ yo⌡ havσ neve≥ useΣ men⌡ driveε softwarσ before¼á al∞ oµá thi≤ ì
ma• seeφ ß bi⌠ vague«  Bu⌠ don'⌠ worry«  Readinτ thσ nex⌠ sectioε ì
should help clear things up.










































è...T1
                        Program Operation

Thi≤ sectioε wil∞ tel∞ yo⌡ ho≈ thσ prograφ works¼á iε detail«  Wσ ì
wil∞ explaiε eacΦ optioε oε eacΦ menu¼á anΣ eacΦ responsσ tha⌠ i≤ ì
requested«  Example≤ oµ thσ appearancσ oµ thσ displa• screeε wil∞ ì
bσ showε t∩ hel≡ yo⌡ ge⌠ thσ fee∞ oµ usinτ thσ package«á  Wσ wil∞ ì
providσá somσ basiπ informatioε anΣ theε g∩ oε t∩ thσámenus.

Somσ message≤ anΣ responsσ arσ commoε t∩ thσ entirσ program«á  T∩ ì
avoiΣá repeatinτ ß completσ explanatioε oµ theφ iε al∞ thσ place≤ ì
where they occur, we summarize them here:

     - Iµá you≥ responsσ t∩ selectioε oµ aε optioε i≤ no⌠ onσá oµ ì
áááááááthe responses allowed, you will see the following message:

                    Invalid Input
                    Press Return to Continue     

       Dependinτ oε you≥ keyboard¼ pres≤ thσ ke• whicΦ i≤ labeleΣ ì
áááááááreturn¼á o≥á enter¼á o≥ newline«á  Sometime≤ thi≤ ke•á ha≤ ì
áááááááothe≥á labels¼á sucΦ a≤ aε arro≈ pointinτ dowε anΣ t∩á thσ ì
áááááááleft (as on the IBM PC).

     - Iµ ß dela• wil∞ bσ encountereΣ iε fulfillinτ you≥ request¼ ì
áááááááa message will be displayed:

                    One Moment Please...

     - Iε man• cases¼á whilσ searchinτ fo≥ recipes¼á yo⌡ wil∞á bσ ì
ááááááágiveεá thσá optioε t∩ finΣ additiona∞ recipe≤á whicΦá mee⌠ ì
áááááááyou≥á selectioεá criteria«á  Iεá tha⌠ casσá thσá followinτ ì
ááááááámessagσ wil∞ bσ displayeΣ anΣ yo⌡ decidσ whethe≥ o≥ no⌠ t∩ ì
ááááááágo on:

                    Continue Searching?
                         (Y or N)

     - Afte≥á completinτá ßá searcΦá fo≥á recipes¼áá onσá oµá thσ ì
áááááááfollowinτá tw∩ message≤ wil∞ appear¼á dependinτ oε whethe≥ ì
áááááááor not the end of the recipe data base was reached:

                    End of Search
                    Press Return to Continue

                    End of File
                    Press Return to Continue

Al∞á response≤á wil∞á havσ ß valuσ pre-defineΣá b•á thσá program¼ ì
calleΣá thσ defaul⌠ response«á  Iµ yo⌡ likσ thσ responsσá alread• ì
defineΣ fo≥ you¼á theε entr• oµ ß responsσ i≤ no⌠ required«  Jus⌠ ì
pres≤á returε iε tha⌠ case«á  Wheε thσ prograφ i≤ initiated¼á thσ ì
defaul⌠á responsσ wil∞ bσ thσ firs⌠ iteφ iε thσ lis⌠ oµá options«  ì
Afte≥á usinτá thσá prograφ fo≥ ß while¼á yo⌡ wil∞á seσá tha⌠á thσ ì
defaul⌠á response≤ ofteε becomσ thσ las⌠ responsσ (o≥ aε inferreΣ ì
response⌐ whicΦ yo⌡ entereΣ iε answe≥ t∩ ß choicσ oµ options.
è...T2
                            Main Menu

Wσá assumσ a⌠ thi≤ poin⌠ tha⌠ yo⌡ havσ installeΣ thσá prograφá a≤ ì
yo⌡ wish¼á afte≥ havinτ reaΣ thσ Installatioε Section«  Thσ firs⌠ ì
screen which you will see is:

                     
                    microGOURMET Main Menu

                 1 Find Recipes
                 2 Prepare Shopping List
                 3 Perform Data Base Maintenance
                 4 Change to Another Recipe Disk
                 5 Exit to Operating System
                 6 Exit to dBASE II


Optioεá 1«á Thσá nex⌠á leve∞ men⌡ i≤á displayed¼á explaininτá thσ ì
option≤ yo⌡ havσ fo≥ recipσ retrieval«  

Optioε 2« ┴ men⌡ oµ shoppinτ lis⌠ option≤ appears«  Notσ that¼ iµ ì
par⌠á oµ you≥ goa∞ iµ t∩ preparσ ß shoppinτ list¼á theε yo⌡á mustô ì
executσ thi≤ optioε first¼á t∩ tel∞ thσ prograφ tha⌠ yo⌡ wil∞á bσ ì
compilinτ thσ lis⌠ whilσ searchinτ fo≥ recipes«  

Optioε 3« ┴ men⌡ oµ datß basσ maintenancσ option≤ i≤ displayed.

Optioε 4«á Thi≤ optioε allow≤ yo⌡ t∩ changσ recipσ and/o≥ prograφ ì
disk≤ (iµ yo⌡ havσ multiplσ recipσ disks¼ fo≥ example)«  

Optioε 5« WitΦ thi≤ option, yo⌡ exi⌠ thσ program¼ anΣ dBASE I╔ a≤ ì
well¼ returninτ yo⌡ t∩ thσ operatinτ system«  

Optioε 6«á Thi≤ optioε let≤ yo⌡ exi⌠ thσ program¼á bu⌠ leave≤ yo⌡ ì
withiε dBASE II¼ t∩ d∩ whateve≥ elsσ yo⌡ like.

Iµ yo⌡ don'⌠ kno≈ wha⌠ t∩ do¼á yo⌡ ma• ente≥ ß ┐ iε response¼ anΣ ì
ß summar• oµ wha⌠ yo⌡ caε d∩ wil∞ bσ displayed.

Nex⌠ wσ wil∞ explaiε wha⌠ happen≤ iε morσ detai∞ wheε yo⌡á choosσ ì
eacΦá oµá thσá abovσá options«á  Wσ wil∞á star⌠á witΦá optioεá 1¼ ì
explaininτá al∞á oµá it≤ options¼á anΣ theε g∩ oεá t∩á option≤á ▓ ì
througΦ 6.


...T2
                   Option 1 - Recipe Retrieval

Wheε yo⌡ choosσ optioε ▒ oε thσ Maiε Menu¼á thσ nex⌠ men⌡ yo⌡ seσ ì
i≤ thσ following:






è                    microGOURMET Recipe Retrieval Menu

                       Find Recipes by:

                       1 Category
                       2 Category & Name
                       3 Category & Ingredients
                       4 Category & Preparation Time

No≈á yo⌡ wil∞ focu≤ oε thσ typσ oµ searcΦ yo⌡ wan⌠ t∩ do«á Al∞ oµ ì
thσá option≤á abovσá includσá categor•á a≤á thσá firs⌠á selectioε ì
criterion«á  However¼á yo⌡ neeΣ no⌠ usσ thσ category«á  Thσá nex⌠ ì
men⌡á list≤á thσ categorie≤ available«á  Iµ yo⌡ don'⌠á carσá wha⌠ ì
categor•á thσ recipσ fall≤ in¼á leavσ i⌠ blanδ (i.e.¼á pres≤á thσ ì
spacσá bar)«á  Theεá thσ categor• wil∞ bσ ignoreΣá iεá retrievinτ ì
recipes.

Afte≥ pickinτ ß categor• option¼á yo⌡ arσ askeΣ whethe≥ yo⌡á wan⌠ ì
t∩á displa• o≥ prin⌠ thσ recipe≤ selected«á  Fo≥ thσ prin⌠ optioε ì
onl•á thσ tex⌠ oµ thσ recipe≤ i≤ printed¼á no⌠ thσá othe≥á screeε ì
display≤á whicΦ solici⌠ responses¼á anΣ no⌠ thσ lis⌠ oµ name≤á oµ ì
recipes¼á etc«á Iµ yo⌡ wan⌠ t∩ changσ froφ displayinτ recipe≤á t∩ ì
printinτ them¼á yo⌡ mus⌠ returε t∩ thσ abovσ menu¼á anΣ selec⌠ aε ì
optioε (no⌠ necessaril• ß differen⌠ one)«á  EacΦ timσ ß recipσ i≤ ì
printeΣá thσá prograφá ask≤ yo⌡ t∩ read• thσá printe≥á anΣá pres≤ ì
return.
 
Thσá nex⌠á screeε display≤ thσ recipσ categories«á Yo⌡á caεá theε ì
selec⌠á ß category«á  Iε thσ remainde≥ oµá thi≤á section¼á optioε ì
number≤á refe≥ t∩ thσ lis⌠ above«á  Wσ wil∞ als∩ assumσ tha⌠á yo⌡ ì
havσ choseε t∩ displa• recipes.

Iµ yo⌡ choosσ optioε 1¼á theε recipe≤ iε thσ desireΣ categor• arσ ì
retrieveΣá anΣá displayeΣá (usinτá tw∩á screen≤á fo≥á thσá entirσ ì
recipe)¼á onσ afte≥ another«á  Iε betweeε recipes¼á yo⌡ arσ askeΣ ì
whethe≥á yo⌡á wan⌠ t∩ continuσ retrievinτ othe≥ recipe≤á iεá thi≤ ì
category.

Iµá yo⌡ choosσ optioε 2¼á theε thσ recorΣ numbe≥ anΣ thσ namσá oµ ì
thσ recipσ arσ displayed«á  Twent• recipe≤ pe≥ screeε arσá shown«  ì
Iµá yo⌡á wan⌠á t∩ looδ a⌠ an• oµ these¼á yo⌡ ma• theεá ente≥á thσ ì
numbe≥ oµ thσ recipe«á  Otherwisσ pres≤ return¼á anΣ theε yo⌡ arσ ì
askeΣ whethe≥ yo⌡ wan⌠ t∩ continuσ looking« 

A≤á lonτá a≤á therσá arσ additiona∞ recipe≤á t∩á find¼á yo⌡á wil∞ ì
continuσ t∩ seσ onσ screeε afte≥ anothe≥ oµ recipσ names«  Iµ yo⌡ ì
choosσ ß recipσ numbe≥ a⌠ an• time¼ theε tha⌠ recipσ i≤ founΣ anΣ ì
displayed«  Afte≥ lookinτ a⌠ thσ recipe¼ yo⌡ arσ askeΣ whethe≥ t∩ ì
continue¼á anΣ iµ yo⌡ answe≥ yes¼ thσ proces≤ begin≤ again«  Wheε ì
yo⌡á finΣá somethinτá yo⌡ like¼á responΣ no¼á anΣá theεá yo⌡á arσ ì
returneΣ t∩ selec⌠ anothe≥ categor• o≥ g∩ oε t∩ anothe≥ option.




èIµ yo⌡ choosσ optioε 3¼á theε yo⌡ ma• firs⌠ vie≈ thσá ingredient≤ ì
available¼á iµ yo⌡ arσ usinτ GOURMET.HI«  WitΦ botΦ versions¼ yo⌡ ì
arσá askeΣ t∩ ente≥ onσ t∩ threσ ingredient≤ a≤ ßá supplemen⌠á t∩ ì
you≥á search«á  Iµá yo⌡á decidσá tha⌠ yo⌡ don'⌠á wan⌠á t∩á d∩á aε ì
ingredien⌠á searcΦá afte≥ all¼á theε leavσ thσá firs⌠á ingredien⌠ ì
blank¼á anΣá yo⌡ arσ returneΣ t∩ thσ previou≤á menu«á  Otherwise¼ ì
ente≥á thσá firs⌠á ingredien⌠ anΣ pres≤á return«á  Yo⌡á arσá theε ì
prompteΣá fo≥ thσ seconΣ anΣ thirΣ ingredients«á  Iµ yo⌡ wan⌠á t∩ ì
searcΦ fo≥ recipe≤ baseΣ oε onσ ingredient¼á theε leavσ thσ othe≥ ì
tw∩á blank«á  Iµá yo⌡á wan⌠ tw∩ ingredient≤ t∩ bσá useΣá iεá you≥ ì
search¼áá theεá leavσá thσá thirΣá blank«áá  Afte≥á enterinτá thσ ì
ingredient(s⌐á oµ you≥ choice¼á yo⌡ wil∞ seσ ß messagσ indicatinτ ì
tha⌠á thσ searcΦ ma• takσ ß fe≈ minutes«á  Iµ ß recipσ i≤á found¼ ì
it≤á namσá i≤ displayeΣ anΣ yo⌡ ma•á retrievσá it«á  Whethe≥á yo⌡ ì
retrievσá i⌠ o≥ not¼á yo⌡ havσ thσ optioε t∩ continuσ lookinτ fo≥ ì
others.

Iµá yo⌡ choosσ optioε 4¼á theε yo⌡ arσ askeΣ t∩ ente≥ thσ maximuφ ì
preparatioεá time¼á iε minutes¼á fo≥ you≥ search«á  Yo⌡ ente≥á aε ì
appropriatσá numbe≥ (sucΦ a≤ 60⌐ anΣ pres≤ return«á  Thσá prograφ ì
find≤ al∞ thσ recipe≤ whicΦ havσ ß preparatioε timσ les≤ thaεá o≥ ì
equa∞ t∩ thσ numbe≥ yo⌡ entered«á  Remembe≥ tha⌠ preparatioε timσ ì
i≤á defineΣ a≤ thσ tota∞ time¼á froφ beginninτ t∩ end¼á includinτ ì
timσ fo≥ cooking¼ refrigeration¼ etc.

┴ maximuφ oµ twent• recipσ name≤ pe≥ screeε arσ displayed¼á alonτ ì
witΦá thei≥ recorΣ number≤ anΣ associateΣ preparatioε times«á  A≤ ì
abovσ witΦ thσ categor• anΣ namσ search¼á yo⌡ ma• selec⌠ ß numbe≥ ì
fo≥ display¼á o≥ g∩ oε t∩ thσ nex⌠ screen¼ iµ any«  Afte≥ viewinτ ì
ßá recipe¼á yo⌡á wil∞ bσ askeΣ whethe≥ t∩ continue¼á anΣá iµá yo⌡ ì
answe≥ yes¼ thσ proces≤ i≤ starteΣ again.

Notσ that¼á fo≥ option≤ ▓ anΣ 4¼á yo⌡ ma• ente≥ ß numbe≥ whicΦ i≤ ì
no⌠ showε oε thσ screen«  An• valiΣ recipσ numbe≥ ma• bσ entered«  ì
However¼á iµ yo⌡ ente≥ ß numbe≥ fo≥ whicΦ therσ i≤ n∩ recipe¼á o≥ ì
aε invaliΣ numbe≥ (sucΦ a≤ -1)¼ thσ prograφ wil∞ tel∞ yo⌡ tha⌠ n∩ ì
recipσá wa≤á found«á  Theε yo⌡ mus⌠ ente≥ ß valiΣá numbe≥á beforσ ì
going on. 

Iµá yo⌡ wan⌠ t∩ returε t∩ thσ Maiε Menu¼á ente≥ 0«á  Iµ yo⌡á neeΣ ì
some help, enter a ? for guidance.

...T2
                    Option 2 - Shopping List

Wheneve≥á yo⌡ wan⌠ t∩ preparσ ß shoppinτ list¼á yo⌡ mustôá execute ì
optioε ▓ oε thσ Maiε Men⌡ first«  Wheε yo⌡ do¼ thσ followinτ men⌡ ì
is displayed:

                    microGOURMET Shopping List

                          1 Compile List
                          2 Print   List
                          3 Display List


èT∩ compilσ thσ shoppinτ list¼á picδ optioε ▒ oε thi≤ menu«  Afte≥ ì
ß shor⌠ pause¼á yo⌡ arσ returneΣ t∩ thσ Maiε Menu¼á wherσ yo⌡ caε ì
proceeΣá t∩ retrievσ recipes«á  Iµ yo⌡ havσ electeΣ thσá shoppinτ ì
lis⌠ option¼á theε afte≥ eacΦ recipσ i≤ displayeΣ o≥ printed¼ yo⌡ ì
arσ askeΣ whethe≥ yo⌡ wan⌠ t∩ adΣ i⌠ t∩ thσ shoppinτá list«á  Thσ ì
defaul⌠ answe≥ i≤ yes¼á s∩ yo⌡ mus⌠ indicatσ n∩ iµ yo⌡ don'⌠ wan⌠ ì
it.

Afte≥á yo⌡á havσ finisheΣ retrievinτ recipe≤ anΣá preparinτá you≥ ì
shoppinτá list¼á returε t∩ thi≤ menu«á  Normall• yo⌡ wil∞á selec⌠ ì
optioεá ▓ t∩ prin⌠ thσ shoppinτ list«á  Optioε │ i≤ fo≥ thosσá oµ ì
yo⌡ wh∩ wan⌠ t∩ revie≈ thσ shoppinτ lis⌠ beforσ printinτ it¼á anΣ ì
fo≥ thosσ oµ yo⌡ withou⌠ printers.

Afte≥á yo⌡á displa• o≥ prin⌠ thσ shoppinτá list¼á yo⌡á arσá askeΣ ì
whethe≥á yo⌡á wan⌠ t∩ deletσ it«á  Iµ you'rσ satisfieΣ witΦá wha⌠ ì
you'vσ seen¼á anΣ havσ ß cop• oµ i⌠ (b• printinτ i⌠ o≥ writinτ i⌠ ì
down)¼á yo⌡ caε deletσ it«  Iµ you'rσ no⌠ finisheΣ witΦ thσ list¼ ì
jus⌠ answe≥ no¼ anΣ i⌠ i≤ kep⌠ oε thσ disk.

Afte≥á displayinτá o≥á printinτ thσ shoppinτá list¼á thσá prograφ ì
assume≤á tha⌠ yo⌡ don'⌠ wan⌠ t∩ builΣ another¼á anΣ disable≤á thσ ì
option«á  Yo⌡ mus⌠ explicitl• returε t∩ optioε ▒ oε thi≤ men⌡á t∩ ì
enable it again.

Iµá yo⌡á arσ usinτ GOURMET.HI¼á thσ statu≤ oµ thσá shoppinτá lis⌠ ì
option (off or on) is displayed on the menu screen.

Fo≥ thosσ oµ yo⌡ witΦ 180δ byte≤ oµ disδ storagσ oε you≥á system¼ ì
yo⌡ wil∞ havσ onl• abou⌠ 4δ byte≤ t∩ usσ fo≥ thσ shoppinτ list« 

...T2
                Option 3 - Data Base Maintenance

Optioε │ oε thσ Maiε Men⌡ allow≤ yo⌡ t∩ add¼á change¼á o≥á deletσ ì
recipes.  The following menu appears when you pick this option:

                    microGOURMET Data Base
                       Maintenance Menu

                      1 Add    Recipe(s)
                      2 Change Recipe(s)
                      3 Delete Recipe(s)
                      4 Update Ingredient Index
                      5 Create Ingredient Index
                      6 Create Record     Index
                      7 Create Category   Index

Option≤áá ┤á t∩á ╖á appl•á onl•á t∩á thσá higΦá capacit•á versioε ì
(GOURMET.HI).

Iµ yo⌡ wan⌠ t∩ adΣ onσ o≥ morσ recipe≤ t∩ thσ datßá base¼á choosσ ì
optioε ▒ oε thi≤ menu«á  Yo⌡ arσ theε remindeΣ tha⌠ yo⌡ mus⌠ havσ ì
spacσá oεá thσ disδ t∩ adΣ ne≈ recipe(s)¼á anΣ askeΣ whethe≥á yo⌡ ì
wan⌠á t∩ continue«á Wσ useΣ thσ dBASE I╔ APPEN─ commanΣ fo≥á thi≤ ì
function¼á s∩á yo⌡á shoulΣá consul⌠ you≥ dBASE I╔á manua∞á fo≥á ß ìèfurthe≥á description¼á iµ necessary«á  Thσ structurσ oµ thσá datß ì
basσ recorΣ i≤ showε below¼ alonτ witΦ ß descriptioε oµ thσ fielΣ ì
names¼ a≤ ß guidσ fo≥ addinτ records.

Wheεá yo⌡ ente≥ thσ ingredients¼á remembe≥ tha⌠ late≥ yo⌡ wil∞ bσ ì
updatinτ thσ ingredien⌠ index¼ iµ yo⌡ arσ usinτ GOURMET.HI«  EacΦ ì
ingredien⌠á iε thσ inde° ma• havσ u≡ t∩á twenty-fivσá characters« ì
Thσá ingredient≤á iεá thσ recipσ filσ (GOURMET.DBF⌐á arσá alloweΣ ì
thirt•á characters¼á includinτ thσ amoun⌠ oµ thσá ingredien⌠á anΣ ì
perhap≤ descriptivσ information«  T∩ allo≈ fo≥ thσ variation¼ yo⌡ ì
shoulΣá ente≥ ß commß afte≥ thσ ingredien⌠ name¼á anΣ beforσá thσ ì
amount«á  Thσá prograφ whicΦ create≤ thσ ingredien⌠ inde° doesn'⌠ ì
requirσá thσ comma¼á (i⌠ ha≤ othe≥ mean≤ t∩ detec⌠ names⌐ bu⌠á i⌠ ì
save≤ time.

Fo≥ particularl• lonτ recipes¼á yo⌡ ma• havσ t∩ abbreviatσ eithe≥ ì
thσá ingredient≤ o≥ thσ instructions¼á   Eveε so¼á yo⌡ shoulΣá bσ ì
ablσ t∩ fi⌠ al∞ bu⌠ thσ longes⌠ recipσ int∩ thσ format.

Optioε ▓ allow≤ yo⌡ t∩ changσ ß recipe«á  T∩ changσ ß recipe¼ yo⌡ ì
mus⌠ kno≈ thσ recorΣ number«á  Thi≤ numbe≥ i≤ alway≤ displayeΣ o≥ ì
printeΣá wheneve≥ ß recipσ i≤ retrieved«á  Wσ useΣ thσá dBASEá I╔ ì
EDI╘ command¼ s∩ yo⌡ shoulΣ checδ you≥ dBASE I╔ manua∞ iµ yo⌡ arσ ì
no⌠ familia≥ witΦ it.

Optioεá │á enable≤ recipσ deletion«á  Wσ useΣ thσ dBAS┼á I╔á EDI╘ ì
commanΣ herσ also«á  T∩ deletσ ß recipe¼ yo⌡ mus⌠ oncσ agaiε kno≈ ì
thσá recorΣá number«á  ┴á messagσ appear≤ afte≥ yo⌡á selec⌠á thi≤ ì
option¼ indicatinτ tha⌠ yo⌡ caε deletσ ß recorΣ b• depressinτ anΣ ì
holdingôá thσá contro∞á ke•á (sometime≤á labeleΣá CTRL⌐á anΣá theε ì
pressinτáá thσá ╒á key«áá  Thi≤á delete≤á thσá record¼áá bu⌠á no⌠ ì
permanently.

Afte≥á yo⌡ havσ deleteΣ onσ o≥ morσ records¼á yo⌡ responΣ t∩á thσ ì
recorΣ numbe≥ promp⌠ b• pressinτ thσ returε key¼ whicΦ terminate≤ ì
thσá edit«á  Nex⌠á ß messagσ appear≤ askinτ whethe≥ yo⌡á wan⌠á t∩ ì
deletσá thσ record(s⌐ permanently«á  Thσ defaul⌠ i≤ no«á  Iµá yo⌡ ì
wan⌠á t∩ eliminatσ thσ record≤ froφ thσ datß basσá forever¼á theε ì
responΣá yes«á  Theε yo⌡ arσ askeΣ t∩ wai⌠ whilσ thσ datß basσ i≤ ì
updated.

Optioεá ┤ wil∞ adΣ ne≈ ingredient≤ t∩ thσ ingredien⌠ index«á  Usσ ì
this option after you have added recipes.

Optioεá ╡ wil∞ recreatσ thσ ingredien⌠ inde° froφá scratch«á  Usσ ì
thi≤á optioε afte≥ deletinτ recipe≤ o≥ deletinτá ingredients¼á t∩ ì
kee≡á thσá ingredien⌠ inde° u≡ t∩ date«á  Yo⌡ caε als∩á usσá thi≤ ì
optioεá iµ yo⌡ usσ GOURMET.LO╫ initially¼á anΣ theε upgradσá you≥ ì
disδ capacit• sucΦ tha⌠ yo⌡ caε usσ GOURMET.HI.

BotΦá optioε ┤ anΣ ╡ takσ ß lonτ timσ t∩ complete¼á s∩ don'⌠á usσ ì
them unless you really must.

Optioε ╢ wil∞ recreatσ thσ recorΣ numbe≥ index«á  Usσ thi≤ optioε ì
after deleting recipes permanently.  
èOptioε ╖ wil∞ recreatσ thσ categor• index«á  Normall• yo⌡á shoulΣ ì
no⌠á havσá t∩á usσá thi≤ option«á  Bu⌠ iµ yo⌡á suspec⌠á tha⌠á thσ ì
categor• inde° i≤ fouleΣ up¼ theε usσ thi≤ option.

Caution«á  Fo≥á an• of thσ threσ datß basσá maintenancσá options¼ ì
don'⌠ usσ contro∞ ╤ whilσ appendinτ o≥ editinτ records«  Thi≤ ha≤ ì
a tendency to damage the index files.

Caution«á  Makσá ßá backu≡ oµ thσá file≤á GOURMET.DBF¼á TYPE.NDX¼ ì
NUMBER.NDX¼áá (anΣá ITEM.DB╞á anΣá ITEM.ND╪á iµá yo⌡á arσáá usinτ ì
GOURMET.HI⌐ afte≥ usinτ an• oµ thσ datß basσ maintenancσ options.












































è...T3
Data Base Record Structure

Field Name         Description             Length
                                        (characters)

NAME               Recipe Name               40
REMARKS            Recipe remarks            30

ITEM1              Ingredient 1              30
ITEM2              Ingredient 2              30
ITEM3              Ingredient 3              30
ITEM4              Ingredient 4              30
ITEM5              Ingredient 5              30
ITEM6              Ingredient 6              30
ITEM7              Ingredient 7              30
ITEM8              Ingredient 8              30
ITEM9              Ingredient 9              30
ITEM10             Ingredient 10             30
ITEM11             Ingredient 11             30
ITEM12             Ingredient 12             30
ITEM13             Ingredient 13             30
ITEM14             Ingredient 14             30
ITEM15             Ingredient 15             30

INSTRUCT1          Instructions Line 1       40
INSTRUCT2          Instructions Line 2       40
INSTRUCT3          Instructions Line 3       40
INSTRUCT4          Instructions Line 4       40
INSTRUCT5          Instructions Line 5       40
INSTRUCT6          Instructions Line 6       40
INSTRUCT7          Instructions Line 7       40
INSTRUCT8          Instructions Line 8       40
INSTRUCT9          Instructions Line 9       40
INSTRUCT10         Instructions Line 10      40
     
TYPE               Recipe Category            2    
PREPTIME           Preparation Time           3
HINT1              Serving Hints Line 1      35
HINT2              Serving Hints Line 2      35
















è...T2
                   Option 4 - Switching Disks

Optioεá ┤á oε thσ Maiε Men⌡ wil∞ allo≈ yo⌡ t∩ changσá t∩á anothe≥ ì
recipσá disk«á  Notσ tha⌠ thi≤ optioε wil∞ no⌠ worδ a⌠ al∞ iµ yo⌡ ì
arσ usinτ aε operatinτ systeφ othe≥ thaε CP/M«á  (Thσ commanΣá t∩ ì
d∩ thi≤ i≤ no⌠ implementeΣ iε somσ version≤ oµ dBASE II)«á  Also¼ ì
iµá thσ capacit• oµ you≥ disk≤ wil∞ no⌠ allo≈ yo⌡ t∩ kee≡ al∞ thσ ì
file≤ associateΣ witΦ thσ recipσ datß basσ oε onσ disk¼ theε thi≤ ì
optioε canno⌠ worδ correctl• unles≤ yo⌡ changσ botΦá disks«á  Seσ ì
thσ Installatioε Sectioε fo≥ morσ information.

Iµá yo⌡ selec⌠ thi≤ option¼á ß messagσ i≤ displayeΣ askinτ yo⌡ t∩ ì
changσ disks¼á theε pres≤ return«á  Afte≥ yo⌡ havσ changeΣ onσ o≥ ì
tw∩á disks¼á pres≤á return«á  dBASE I╔ i≤á exiteΣá anΣá restarteΣ ì
automatically¼ usinτ thσ ne≈ recipσ disδ and/o≥ prograφ disk.

...T2
           Option 5 - Exiting to the Operating System

Optioε ╡ enable≤ aε orderl• terminatioε oµ thσ program«  Thσ datß ì
basσ wil∞ bσ closeΣ anΣ contro∞ returneΣ t∩ thσ operatinτ system«  ì

...T2
                 Option 6 - Exiting to dBASE II

Optioεá ╢ allow≤ yo⌡ t∩ exi⌠ thσ prograφ bu⌠ remaiε iεá dBASEá I╔ ì
fo≥áá othe≥áá activities«áá  Thσá recipσá datßá basσá i≤áá closeΣ ì
automatically.



Yo⌡ shoulΣ alway≤ usσ optioε ╡ o≥ ╢ t∩ enΣ thσ prograφ t∩ bσ surσ ì
tha⌠ dBASE I╔ close≤ thσ datß base.
























è...T1
                         Ingredient List

.po 4
  Allspice                  Almond extract            Almonds                  
  Apple juice               Apples                    Applesauce               
  Apricots                  Asparagus                 Bacon                    
  Baking powder             Baking soda               Banana Liqueur           
  Bananas                   Bay leaf                  Bay leaves               
  Beef                      Beef bouillon cubes       Beef gravy mix           
  Beef ground               Beer                      Bing cherries            
  Biscuit baking mix        Black olives              Bouillon beef            
  Bouillon chicken          Bread                     Bread crumbs             
  Broccoli                  Broth                     Broth beef               
  Broth chicken             Brown sugar               Burgundy wine            
  Butter                    Buttermilk                Cabbage                  
  Caraway seeds             Carrots                   Cayenne pepper           
  Celery                    Celery seeds              Cheddar cheese           
  Cherries                  Cherry pie filling        Chicken                  
  Chicken bouillon cubes    Chicken breasts           Chicken coating mix      
  Chili powder              Chipped beef              Chocolate                
  Chocolate chips           Cinnamon                  Cinnamon stick           
  Cloves                    Cocoa                     Coconut                  
  Cognac                    Confectioners sugar       Consomme                 
  Corn chips                Corn cream style          Corn meal                
  Corn syrup                Cornstarch                Cottage cheese           
  Crackers                  Cream                     Cream cheese             
  Cucumber                  Custard mix with egg      Dates                    
  Egg                       Egg yolk                  Egg yolks                
  Eggplant                  Eggs                      Flour                    
  Garlic                    Garlic cloves             Garlic powder            
  Ginger                    Ginger ale                Gingersnaps              
  Gravy mix                 Green beans               Green chilies            
  Green pepper              Ham                       Heavy Cream              
  Heavy cream               Italian seasoning         Jalapana peppers         
  Kahlua                    Ketchup                   Kidney beans             
  Lasagne                   Lemon                     Lemon extract            
  Lemon gelatin             Lemon juice               Lemon pudding            
  Lemon rind                Lemons                    Lettuce                  
  Light cream               M&Ms                      Macaroni                 
  Margarine                 Marshmallows              Mayonnaise               
  Milk                      Molasses                  Mozzarella cheese        
  Mushrooms                 Mustard                   Nacho cheese chips       
  Nutmeg                    Oatmeal                   Oil                      
  Onion                     Onions                    Orange extract           
  Orange juice              Oranges                   Oregano                  
  Oreo cookies              Paprika                   Parmesan cheese          
  Parsley                   Parsley flakes            Peaches                  
  Pear halves               Peas & carrots            Pecans                   
  Pepper                    Peppercorns               Pepperoni                
  Pie shell                 Pimiento                  Pineapple                
  Pineapple chunks          Pistachio pudding mix     Pizza sauce              
  Pork                      Pork chops                Potato chips             
  Potatoes                  Pound cake                Process cheese food      
  Provolone cheese          Raisins                   Raspberry gelatin        
  Raspberry preserves       Red cabbage               Red pepper               
  Red wine                  Rice                      Rice Krispies            
è  Rice mix                  Rice uncooked             Rum                      
  Salad dressing            Salami                    Salmon                   
  Salmon steaks             Salt                      Sausage                  
  Sausage links             Savory                    Scallops                 
  Sesame seeds              Shallot                   Shallots                 
  Sherry                    Shortening                Shrimp                   
  Soup cream of celery      Soup cream of chicken     Soup cream of mushroom   
  Soup cream of onion       Soup tomato               Soup vegetable           
  Sour cream                Soy sauce                 Spaghetti                
  Spaghetti sauce           Spinach                   Steak                    
  Steaks                    Strawberries              Strawberry gelatin       
  Strawberry jam            Sugar                     Swiss cheese             
  Taco mix                  Tarragon                  Thyme                    
  Tomato paste              Tomato sauce              Tomatoes                 
  Tuna                      Turkey                    V-Eight juice            
  Vanilla                   Vanilla ice cream         Vanilla pudding mix      
  Veal                      Vegetables mixed          Velvetta cheese          
  Vinegar                   Walnuts                   Water                    
  Water chestnuts           Whipped topping           White cake mix           
  White wine                Worchestershire           Zucchini                 
.po 8
.pa
è                 Comments and Problem Reporting


                          microGOURMET
                 6958 Hanover Parkway, Suite 301
                       Greenbelt, MD 20770



Iµá yo⌡ havσ an• comment≤ abou⌠ microGOURMET¼á o≥ suggestion≤ fo≥ ì
improvements¼á o≥ iµ yo⌡ founΣ ß problem¼á pleasσ photocop•á thi≤ ì
page¼á completσá thσ requesteΣ entries¼á anΣ senΣ i⌠ t∩ thσ abovσ ì
address.


Name ___________________________________________________________

Company ________________________________________________________

Address ________________________________________________________

Cit• ___________________________________________________________

State _________________________________________ Zip ____________


Check One

Comment    __
Suggestion __
Problem    __


Description





















è
```
{% endraw %}

## UNWS.BAS

{% raw %}
```bas
10 'This program converts a Wordstar file to a standard text file
20 'that can be transmitted using 7 data bits. Wordstar uses 8-bit
30 'characters to produce soft spaces and soft hyphens.
40 'Modified from Personal Computer Age program by Larry Jordan
50 '
100 DEFINT A:CLS:KEY OFF
110 LOCATE 13,25:INPUT "Wordstar file to convert - ";IFN$
120 LOCATE 15,25:INPUT "Converted file name - ";OFN$
130 OPEN IFN$ FOR INPUT AS #1
140 OPEN OFN$ FOR OUTPUT AS #2
150 CLS:LOCATE 13,25:PRINT "Working on character - ";
160 WHILE NOT EOF(1)
170 	A1=ASC(INPUT$(1,1))
180 	 IF A1<127 THEN 210
190 	  LOCATE 13,48:PRINT CHR$(A1)
200 	  A1=A1-128
210 	A$=CHR$(A1):PRINT #2,A$;
220 	 IF A1=26 THEN 999
230 WEND
999 CLOSE:CLS:KEY ON:LOCATE 13,30:PRINT "Done....":BEEP
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0117

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT       700  11-09-84   2:41p
    CRCK4    COM      1536  10-21-82   7:54p
    GOURMET  DBF     90880   1-05-85   7:20p
    MANUAL   TXT     50304   1-05-85   8:39p
    UNWS     BAS       768   8-22-83   7:40p
            5 file(s)     144188 bytes
                           14848 bytes free
