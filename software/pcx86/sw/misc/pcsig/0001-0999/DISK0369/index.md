---
layout: page
title: "PC-SIG Diskette Library (Disk #369)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0369/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0369"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "FLASH CARDS 3 OF 4 (367, 368, 370)"

    A menu-driven 7,500-Word Vocabulary Builder and Spelling Teacher for the
    high school and college-level student.  The flash card format has proved
    to be an effective teaching mechanism for improving spelling and
    vocabulary skills.
    
    The dictionary does not include the 4,000 most basic words but, rather,
    the 7,500 next most commonly-used words.  BASIC source code is included.
    While you're polishing your spelling, learn the parts of speech and the
    definition of each word.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES369.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 369   Flash Cards:  Vocabulary and Spelling             v1    DS
-------------------------------------------------------------------------
 
This is the third of the 4-disk set of the Educational Package: Flash
Cards with 7,500-Word Vocabulary Builder and Spelling Teacher.  This
disk contains the vocabulary file for the third part of the alphabet
(in-pr), the two files of flags to indicate words missed, the
documentation for the FLASH CARDS program, and the routine to print this
documentation.  In addition, this disk contains 27 files used by the
database program should you desire to change the vocabulary file entries
or create new ones.
 
CARDS          Vocabulary words and definitions (in-pr)
FLAG           Flags for missed vocabulary words
SFLAG          Flags for missed spelling words
MASTER    TXT  Documentation (manual) for Flash Cards (12 pp)
PRINTMAN  BAS  Program to print manual, in BASIC
FFILE          Data file used while changing vocabulary
SCTEST          "
KYLIST          "
KEYLISTS        "
IPUTD6          "
IPUTD1          "
IPUTD2          "
IPUTD4          "
IPUTD3          "
IPUTD5          "
IPUTD15         "
IPUTD10         "
IPUTD11         "
IPUTD12         "
IPUTD13         "
IPUTD14         "
IPUTD           "
IPUTD9          "
IPUTD8          "
IPUTD7          "
SCREEN4         "
SCREEN1         "
SCREEN6         "
SCREEN14        "
SCREEN8         "
REALTIME        "
IDEX            "
 
NOTE that there is a BUG in PRINTMAN.BAS.  It hangs up just before
printing the last line of MASTER.TXT on the printer.  The "hang up" was
cleared, during testing, when PrtSc was performed.  A much faster output
of the twelve pages of MASTER.TXT can be obtained using DOS COPY or
TYPE, although some of the letters are printed in italics.
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MASTER.TXT

{% raw %}
```
                POTOMAC PACIFIC ENGINEERING INC.

                       EDUCATIONAL PACKAGE

                           FLASH CARDS 
                              with
                  7,500 WORD VOCABULARY BUILDER
                               and
                        SPELLING TEACHER
  
       Copyright 1985, by Potomac Pacific Engineering Inc.

       Licensed FREE to all users with some restrictions.

     ReaΣá anΣ agreσ t∩ thσ licensσ condition≤ anΣ ou≥ disclaime≥ ì
of warranties prior to using this program. 


                        Table of Contents

Introduction                                      2 

Flash Cards                                       3

Multiple Choice                                   5

Spelling Checker                                  6

Printing Cards on paper                           6

Entering your own Flash Cards                     6

Resetting the numbers missed to zero              7

Vocabulary Words Provided                         7

Disclaimer of Warranties                          8

License Agreement                                 9

List of Files                                     9

Database                                          9

Other products and services 
     of Potomac Pacific Engineering Inc.         10

Inner workings of the program                    10

Error Report Form                                11





è                          Introduction 

     Thσá educationa∞ packagσ consist≤ oµ thσ prograφ "FLASHóá iε ì
it≤ basiπ forφ "FLASH.BAS"¼á it≤ compileΣ forφá "FLASH.EXE"¼á thσ ì
carΣ file≤ "CARDó oε eacΦ disk«á  Therσ i≤ ß smal∞ versioε oµ thσ ì
datßá basσá oεá disδ ┤ whicΦ wil∞ enablσ yo⌡ t∩ changσá thσá carΣ ì
file≤á iµ yo⌡ wisΦ t∩ d∩ so«á   Thσ basiπ prograφ i≤ provideΣá a≤ ì
thσá sourcσá code«á  I⌠ i≤ easie≥ anΣ faste≥ t∩ usσ thσá compileΣ ì
form  "FLASH.EXE".  

     Afte≥á briefl•á lookinτá  ove≥ thi≤ manua∞ yo⌡á shoulΣá jum≡ ì
righ⌠á iε anΣ tr• usinτ thσ program«á   Yo⌡ caε ruεá thσá prograφ ì
using the following steps.
     
     1«á Turεá you≥á compute≥ oε anΣ inser⌠ you≥á disδá operatinτ ì
system  disk into your default disk drive.  
     2.  Insert disk one into the default disk drive.
     3.  Type in FLASH then press return
            A> flash 
     4.  The program should load and run.
     5.  The first screen should read:

            F L A S H   C A R D   P R O G R A M   1.0 

       Copyright 1985 by Potomac Pacific Engineering Inc.

Thi≤ prograφ i≤ licenseΣ FRE┼ t∩ al∞ user≤ witΦ somσ restrictions
       See the manual for more information on the license

*****************¬  PRES╙ AN┘ KE┘ T╧ CONTINU┼  *****************

(end of the first screen)
     Thσá firs⌠ screeε jus⌠ contain≤ thσ namσ oµ thσ prograφá anΣ ì
ou≥á copyrigh⌠ notice«á  Assuminτ yo⌡ wanteΣ t∩ ruε thi≤á prograφ ì
pres≤ an• ke• t∩ continue« 
     
     The second screen should look like:

          Put the disk with the files (cards) that you 
              want to use in the default disk drive

          *****  THEN PRESS ANY KEY TO CONTINUE  *****

     The flash card program only uses the Default disk drive
Kee≡á i⌠á iεá thσ defaul⌠ disδ drivσ a⌠á al∞á time≤á durinτá thi≤ ì
program.

(end of second screen)

     Thσ seconΣ screeε remind≤ yo⌡ t∩ pu⌠ thσ disδ iε thσ defaul⌠ ì
disδ drivσ whicΦ contain≤ thσ card≤ yo⌡ wan⌠ t∩ use«á  Iµ thi≤ i≤ ì
you≥á firs⌠ timσ usinτ thσ prograφ, leavσ disk 1  iε thσá defaul⌠ ì
disδá drive«á  Thσá defaul⌠ disδ drivσ i≤ usuall•á disδá drivσá ┴ ì
unles≤á yo⌡á havσá changeΣá it«á   Thσá carΣá file≤á contaiεá thσ ì
card≤á tha⌠á thσ prograφ use≤ t∩ teacΦ you«á  Yo⌡ ma• revie≈á thσ ìècard≤ oε disδ one¼á two¼á three¼ fou≥ o≥ card≤ tha⌠ yo⌡ havσ madσ ì
u≡á yourself«á   Leavσ thσ disδ iε thσ defaul⌠ disδ drivσ a⌠á al∞ ì
time≤á durinτá thσ program«á  Yo⌡ ma• switcΦ disk≤ onl• wheεá thσ ì
prograφ start≤ o≥ wheε yo⌡ arσ a⌠ thσ maiε menu«  

    The third screen you will see is the flash card menu :

**********************  FLASH CARD MENU  ***********************

  0 - EXIT THE OPERATING SYSTEM

  1 - FLASH CARDS
 
  2 - MULTIPLE CHOICE

  3 - SPELLING REVIEW
  
  4 - PRINT CARDS ON PAPER

  5 - CONVERT FILES
  
  6 - RESET MISSED WORDS TO 0

*************  ENTER THE NUMBER THEN PRESS RETURN  ************
(end of screen)

Each of the above options is explained below: 

                  0 - Exit to Operating System

     Usσá thi≤á optioε wheε yo⌡ arσ finisheΣ usinτ thσá programs« ì
Yo⌡ shoulΣ alway≤ exi⌠ thσ prograφ througΦ thi≤ option«á  Iµá yo⌡ ì
turεá ofµ thσ compute≥ iε thσ middlσ oµ thσ prograφ thσá compute≥ ì
ma•á losσá tracδ oµ thσ card≤ yo⌡ kno≈ vs«á thσ card≤á yo⌡á don'⌠ ì
know«  

                         1 - Flash Cards

     Thi≤ optioε i≤ ß computerizeΣ versioε oµ flasΦ cards«á  EacΦ ì
flasΦ carΣ ma• bσ visualizeΣ a≤ ß fron⌠ containinτ thσ promp⌠ anΣ ì
thσá bacδá whicΦ contain≤ thσ description«á  Iµ yo⌡á choosσá thi≤ ì
option the next screen should look like :

TOTAL CARDS MISSED 0 TIMES IS 2000
TOTAL CARDS MISSED 1 TIMES IS 0
TOTAL CARDS MISSED 2 TIMES IS 0
TOTAL CARDS MISSED 3 TIMES IS 0
TOTAL CARDS MISSED 4 TIMES IS 0
TOTAL CARDS MISSED 5 TIMES IS 0
TOTAL CARDS MISSED 6 TIMES IS 0
TOTAL CARDS MISSED 7 TIMES IS 0
TOTAL CARDS MISSED>7 TIMES IS 0

YOU MAY REVIEW CARDS THAT WERE MISSED X NUMBER OF TIMES OR MORE
ENTER 0 IF YOU WANT TO REVIEW ALL CARDS
è>__< 
(end of screen)
    Sincσ thi≤ i≤ you≥ firs⌠ timσ througΦ thσ systeφ yo⌡ havσ no⌠ ì
misseΣá an• oµ thσ cards«á  (yo⌡ haven'⌠ donσ an•á righ⌠á either⌐  ì
Thσ compute≥ show≤ tha⌠ yo⌡ havσ misseΣ 200░ word≤ ░ times.

     Yo⌡á shoulΣá ente≥ zer∩ iµ i⌠ i≤ you≥ fis⌠ timσ througΦá thσ ì
cards because you want to review all the cards.

     Iµá yo⌡ arσ studyinτ pape≥ flasΦ carΣ o≥ eveε jus⌠ note≤ yo⌡ ì
probabl• g∩ througΦ thσ card≤ anΣ wheε yo⌡ kno≈ thσ carΣ yo⌡á pu⌠ ì
i⌠á ofµá t∩á thσá sidσ iε ß differen⌠ pilσá anΣá don'⌠á stud•á i⌠ ì
anymore«á  I⌠ i≤ thσ samσ thinτ witΦ notes«á   Yo⌡ probabl• stud• ì
thσá note≤ spendinτ mos⌠ oµ you≥ timσ oε thσ one≤ yo⌡ don'⌠ know«  ì
Yo⌡á ma• wan⌠ t∩ revie≈ al∞ thσ card≤ o≥ note≤ fo≥á reinforcemen⌠ ì
righ⌠ beforσ ß test«  

     Oncσá yo⌡ havσ gonσ througΦ thσ card≤ onσ timσ thσ thσ firs⌠ ì
screen of the flash cards may look like:

TOTAL CARDS MISSED 0 TIMES IS 1130
TOTAL CARDS MISSED 1 TIMES IS 870
TOTAL CARDS MISSED 2 TIMES IS 0
TOTAL CARDS MISSED 3 TIMES IS 0
TOTAL CARDS MISSED 4 TIMES IS 0
TOTAL CARDS MISSED 5 TIMES IS 0
TOTAL CARDS MISSED 6 TIMES IS 0
TOTAL CARDS MISSED 7 TIMES IS 0
TOTAL CARDS MISSED>7 TIMES IS 0

YOU MAY REVIEW CARDS THAT WERE MISSED X NUMBER OF TIMES OR MORE
ENTER 0 IF YOU WANT TO REVIEW ALL CARDS
>__<
(END OF SCREEN)
    Iµá yo⌡á entereΣ ░ yo⌡ woulΣ seσ al∞ 200░á card≤á ove≥á agaiε ì
whicΦá yo⌡ don'⌠ want«á  Iµ yo⌡ ente≥ ▒ yo⌡ wil∞ seσ onl• thσ 87░ ì
cards that you missed the first time.  
    Iµ yo⌡ g∩ througΦ thσ 87░ card≤ anΣ mis≤ 43░ oµ theφ thσ nex⌠ ì
timσá yo⌡ wan⌠ thσ flasΦ card≤ thσ card≤ thσ numbe≥ misseΣ shoulΣ ì
look like :

TOTAL CARDS MISSED 0 TIMES IS 1130
TOTAL CARDS MISSED 1 TIMES IS 440
TOTAL CARDS MISSED 2 TIMES IS 430
TOTAL CARDS MISSED 3 TIMES IS 0
TOTAL CARDS MISSED 4 TIMES IS 0
TOTAL CARDS MISSED 5 TIMES IS 0
TOTAL CARDS MISSED 6 TIMES IS 0
TOTAL CARDS MISSED 7 TIMES IS 0
TOTAL CARDS MISSED>7 TIMES IS 0

YOU MAY REVIEW CARDS THAT WERE MISSED X NUMBER OF TIMES OR MORE
ENTER 0 IF YOU WANT TO REVIEW ALL CARDS
>__<
(END OF SCREEN)
è    Yo⌡á coulΣá ente≥ ▓ jus⌠ t∩ revie≈ thσ 43░á card≤á yo⌡á don'⌠ ì
know«á  Yo⌡á caεá continuσ witΦ thσ card≤ until  yo⌡á kno≈á ever• ì
card«  Yo⌡ coulΣ ente≥ ░ o≥ ▒ iµ yo⌡ wanteΣ t∩ revie≈ morσ oµ thσ ì
cards.
    Thσá compute≥ wil∞ asδ yo⌡ wha⌠ recorΣ yo⌡ wan⌠ t∩ star⌠á at«  ì
Iµ yo⌡ qui⌠ iε thσ middlσ oµ thσ card≤ thσ compute≥ wil∞ tel∞ yo⌡ ì
what record number you previously quit at.
    The computer will then ask you :
********  DO YOU WANT TO SEE THE CARDS  ********
        1 - PROMPT FIRST
        2 - DESCRIPTION FIRST
*****  ENTER THE NUMBER THEN PRESS RETURN  *****
(END OF SCREEN)
    Wheεá yo⌡ usσ pape≥ flasΦ card≤ yo⌡ usuall• looδ a⌠ thσ fron⌠ ì
sidσá oµá thσ carΣ theε tr• t∩ gues≤ wha⌠ i≤ oεá thσá bacδá side«  ì
Thi≤á i≤ equivalent t∩ seeinτ thσ promp⌠ first«á  Oncσ iε ß whilσ ì
yo⌡ ma• wan⌠ t∩ seσ thσ bacδ sidσ oµ thσ carΣ firs⌠ anΣ theεá tr• ì
t∩á remembe≥á wha⌠ i≤ oε thσ fron⌠ side«á  Thi≤ i≤ equivalen⌠á t∩ ì
seeing the backside of the card. 

     Oncσá yo⌡á arσá finall• in thσá flasΦá carΣá subroutinσá thσ ì
computer will display the prompt.  You have three options :
     K - press the K for Know 
         the computer will go to the next word without showing 
         you the answer
     E - Exit the subroutine
     Space Bar or any other key - show you the description

     Iµá yo⌡á hi⌠á thσ spacσ ba≥ thσ compute≥ wil∞ sho≈á yo⌡á thσ ì
description and then give you the following options :
     D - don't know
     K - Know
     E - Exit

     A≤á witΦá flasΦ card≤ yo⌡ arσ thσ judgσ oµ iµ yo⌡á kno≈á thσ ì
card≤ oµ not«á  Yo⌡ caε alway≤ sa• yo⌡ kno≈ thσ card≤ bu⌠ yo⌡ arσ ì
no⌠á goinτ t∩ learε theφ unles≤ yo⌡ stud• them«á  Iµ yo⌡ ente≥á ─ ì
fo≥á don'⌠ kno≈ thσ compute≥ i≤ onl• goinτ t∩ marδ tha⌠ worΣá fo≥ ì
futurσ study«  

                   2 - MULTIPLE CHOICE OPTION 

     Thi≤ optioε takσ thσ informatioε oµ thσ flasΦ cards¼á  show≤ ì
yo⌡ thσ promp⌠ fo≥ onσ theε give≤ yo⌡ ß choicσ oµ description≤ t∩ ì
choosσá from«á  Yo⌡á ma• als∩ ruε thσ multiplσá choicσá backward≤ ì
seeinτ ß descriptioε anΣ giveε ß choicσ oµ prompts«á  Thσ easyes⌠ ì
way to understand this option is to go ahead and try it out.
     Thσá multiplσ choicσ optioε run≤ througΦ thσ card≤ iε order«  ì
Thσá incorrec⌠á answer≤á arσ choseε a⌠ randoφá whicΦá mean≤á tha⌠ ì
sometime≤ thσ incorrec⌠ answer≤ arσ obviousl•á incorrect«á   WitΦ ì
thσ definition≤ supplieΣ i⌠ i≤ no⌠ ß baΣ problem«  Howeve≥ iµ yo⌡ ì
ente≥á you≥á owεá card≤á iε ß differen⌠ subjec⌠á yo⌡á coulΣá havσ ì
problems«á  Fo≥ examplσ iµ yo⌡ havσ ß histor• flasΦ carΣ filσ anΣ ì
ßá  questioεá ask≤á fo≥ JFK'≤ birthda• anΣá thσá othe≥á incorrec⌠ ì
answer≤á choseεá a⌠ randoφ b• thσ compute≥ arσ name≤á oµá people¼ ìètowns¼  battle≤ anΣ event≤ thσ answe≥ i≤ obvious.
     Usinτá thσá FlasΦá carΣá optioε i≤ thσá mos⌠á efficien⌠á fo≥ ì
learninτá iµá thσ studen⌠ i≤ motivateΣ t∩á learn«á  Thσá multiplσ ì
choice forma⌠á ma• bσ bette≥ fo≥ primar• educatioεá student≤á wh∩ ì
woulΣá no⌠ d∩ an• studyinτ unles≤ forceΣ to«á  WitΦ thσá multiplσ ì
choicσá forma⌠á thσ student≤ a⌠ leas⌠ havσ t∩ reaΣ thσá question≤ ì
anΣá answer≤ whilσ witΦ thσ flasΦ card≤ the• coulΣ da• dreaφá al∞ ì
day.

                      3 - SPELLING TEACHER

     Thσá bes⌠á wa• t∩ understanΣ thσ spellinτ optioε i≤á tr•á i⌠ ì
out«áá  Thσá spellinτá teache≥á keep≤á tracδá oµá thσá word≤á yo⌡ ì
understanΣá anΣ thσ word≤ misseΣ iε thσ samσ wa• tha⌠á thσá flasΦ ì
carΣ prograφ does«  Yo⌡ havσ t∩ ente≥ thσ word≤ iε smal∞ letters«  ì
Iµá yo⌡á ente≥ ß worΣ iε capita∞ letter≤ thσ compute≥ wil∞á thinδ ì
tha⌠ yo⌡ spelleΣ thσ worΣ wrong«á  Thσ spellinτ teache≥ give≤ yo⌡ ì
thσá descriptioε oµ thσ worΣ anΣ thσ firs⌠ letter«á  T∩á usσá thσ ì
spellinτá teache≥á yo⌡ obviousl• neeΣ t∩ kno≈ thσ meaninτ oµá thσ ì
words.

                    4 - PRINT CARDS ON PAPER

     Thi≤ optioε i≤ useΣ t∩ prin⌠ thσ card≤ oε paper«á   Yo⌡á caε ì
prin⌠á eithe≥ thσ card≤ oε whicΦ yo⌡ arσ havinτ spellinτ problem≤ ì
o≥á thσ card≤ oε whicΦ yo⌡ arσ havinτ vocabular•á problems«á  Yo⌡ ì
ma• prin⌠ ou⌠ card≤ tha⌠ yo⌡ misseΣ 0¼á 1¼á 2¼á 3¼á 4¼ 5¼ 6¼ ╖ o≥ ì
morσ times«  Yo⌡ caε eithe≥ prin⌠ ou⌠ thσ entirσ lis⌠ b• printinτ ì
ou⌠ card≤ tha⌠ yo⌡ misseΣ ░ time≤ o≥ yo⌡ coulΣ prin⌠ ou⌠ onl• thσ ì
card≤ tha⌠ yo⌡ arσ havinτ problem≤ b• printinτ ou⌠ card≤ tha⌠ yo⌡ ì
misseΣ ß numbe≥ oµ times« 

                        6 - CONVERT FILES

     Thi≤á optioε i≤ useΣ t∩ conver⌠ sequentia∞ file≤ int∩ randoφ ì
acces≤ carΣ files«á  Yo⌡ onl• neeΣ t∩ usσ thi≤ optioε iµ yo⌡á arσ ì
goinτá t∩ ente≥ yo⌡ owε carΣ file«á  Yo⌡ caε eithe≥ ente≥ ßá carΣ ì
filσá b•á usinτá ßá worΣá processo≥á o≥á b•á usinτá thσá databasσ ì
managemen⌠á systeφ tha⌠ wσ supply«á  Usinτ thσ worΣ processo≥á i≤ ì
slightl• faste≥ anΣ easier.
     Usσ ß worΣ processo≥ tha⌠ doe≤ no⌠ havσ an• specia∞á contro∞ ì
character≤á anΣ whicΦ use≤ ß sequentia∞ ASCI╔ file«á  Iµ yo⌡á arσ ì
using Wordstar use the "N" or non document mode.
     Typσá iεá eacΦ carΣ a≤ threσ lines«á  Thσ firs⌠ linσ i≤á thσ ì
prompt«  Thσ promp⌠ ma• takσ u≡ t∩ 2╕ characters«  Thσ seconΣ anΣ ì
thirΣ line≤ arσ thσ description≤ whicΦ ma• bσ u≡ t∩ 5░ character≤  ì
each.  For example a small file might look like:
dog
n. a small furry animal

cat
n. a small furry animal
does not like dogs
ant
n. a small insect
èa house hold pest
(end of file)
     Noticσá tha⌠á thσ "dogó carΣ ha≤ ß blanδá thirΣá line«á  Al∞ ì
card≤á mus⌠á havσ threσ line≤ eveε iµ thσ thirΣá linσá i≤á blank«  ì
Als∩áá remembe≥á thσá 2╕á anΣá 5░á characte≥á limit«áá  Fo≥á somσ ì
application≤á yo⌡á migh⌠ neeΣ lonτ question≤ anΣá shor⌠á answers«  ì
Yo⌡ caε alway≤ pu⌠ thσ questioε iε thσ descriptioε fielΣ anΣá thσ ì
answe≥á iεá thσá promp⌠ fielΣ sincσ yo⌡ caε ruε thσá flasΦá card≤ ì
promp⌠ firs⌠ o≥ descriptioε first« 

                    6 - RESET MISSES TO NONE

     Iµ yo⌡ arσ ß ne≈ studen⌠ anΣ havσ jus⌠ copieΣ thσ disk≤ froφ ì
someonσ elsσ yo⌡ don'⌠ wan⌠ t∩ wastσ you≥ timσ studyinτ thσ card≤ ì
tha⌠ persoε doesn'⌠ know«á  Yo⌡ wan⌠ t∩ spenΣ you≥ timσá studyinτ ì
thσá card≤á tha⌠ yo⌡ don'⌠ know«á  T∩ wipσ ou⌠ al∞á thσá previou≤ ì
misse≤ yo⌡ shoulΣ usσ thi≤ option«á  Makσ surσ yo⌡ arσ usinτ you≥ ì
owεá disk«á  Yo⌡á don'⌠ wan⌠ t∩ erasσ you≥ friend≤á work«á  Afte≥ ì
usinτ thi≤ optioε al∞ thσ card≤ shoulΣ bσ se⌠ t∩ misseΣ ░ times.

                        VOCABULARY WORDS

     Thσá flasΦá card≤ supplieΣ witΦ thσ prograφ arσ 750░ oµá thσ ì
mos⌠ commoε words«  Thesσ word≤ werσ choseε oε thei≥ frequenc• oµ ì
usσ anΣ frequenc• oµ misspelling«á  Thσ fou≥ thousanΣ mos⌠ commoε ì
word≤ arσ no⌠ includeΣ iε ou≥ lis⌠ becausσ almos⌠ everyonσá know≤ ì
them«á  I⌠á woulΣá bσá ßá wastσ oµ you≥ timσ t∩á stud•á thσá fou≥ ì
thousanΣ mos⌠ commoε words« 
     Therσ arσ somσ EnglisΦ Professor≤ wh∩ stud• worΣá frequency«  
Herσá i≤á ß shor⌠ explanatioε oµ worΣ usage«á  Yo⌡ ma• havσá reaΣ ì
somewherσ iε thσ popula≥ pres≤ tha⌠ thσ averagσ collegσá graduatσ ì
know≤á 40,00░á t∩ 50,00░ words«á Fort•  thousanΣ word≤ i≤ ßá ver• ì
impressivσá figurσá anΣ ╔ aφ surσ i⌠ make≤á yo⌡á fee∞á brilliant«  ì
Howeve≥á oncσ yo⌡ subtrac⌠ thσ 10,00░ name≤ yo⌡ kno≈á (John¼á Abσ ì
don'⌠ forge⌠ las⌠ name≤ o≥ citie≤ o≥ rivers¼á states¼á countries¼ ì
compan•á name≤ produc⌠ name≤  etc«á yo⌡ arσ dowε t∩ 30,00░ words«  ì
Oncσ yo⌡ subtrac⌠ plural¼á pas⌠ tenses¼ verΓ form≤ oµ noun≤ ¿ eg« ì
play¼á player¼á players¼á played¼ playing⌐ yo⌡ arσ dowε t∩ 12,00░ ì
separatσ words«  Stil∞ ou⌠ oµ thesσ 12,00░ word≤ onσ thousanΣ ma• ì
bσ local¼ slanτ o≥ regiona∞ words«  Tw∩ thousanΣ oµ thσ word≤ ma• ì
bσá word≤á tha⌠á arσ specializeΣ fo≥ you≥ areß oµá worδá sucΦá a≤ ì
compute≥ terminolog•  Anothe≥ thousanΣ oµ thσ word≤ yo⌡ kno≈á ma• ì
bσ relateΣ t∩ you≥ hobbie≤ o≥ othe≥ specializeΣ interests« So¼ iε ì
effect¼á thσá averagσ collegσ graduatσ onl• know≤ ╕ o≥ ╣ thousanΣ ì
word≤á tha⌠á arσ no⌠ specializeΣ o≥ prope≥á nouns«á  Thσá averagσ ì
person'≤ speakinτ vocabular• i≤ eveε less«  
    Assuminτá tha⌠á yo⌡ kno≈ thσ 400░ mos⌠ commoε word≤á anΣá yo⌡ ì
learε thσ 750░ word≤ tha⌠ wσ provideΣ yo⌡ wil∞ havσ ß commanΣá oµ ì
1150░ word≤ whicΦ i≤ aε excellen⌠ vocabulary«  
     Duσá t∩ thσ computerizeΣ flasΦ carΣ forma⌠ oµ thσ word≤á yo⌡ ì
arσ onl• drilleΣ oε thσ word≤ yo⌡ don'⌠ know«  Fo≥ examplσ iµ yo⌡ ì
arσá ß EnglisΦ majo≥ wh∩ alread• know≤ 550░ oµ thσ 750░ word≤ thσ ì
compute≥á wil∞ onl• dril∞ yo⌡ oε thσ word≤ tha⌠ yo⌡á don'⌠á know«  ì
Oε thσ othe≥ hand¼á iµ yo⌡ arσ ß higΦ schoo∞ studen⌠ yo⌡ ma• onl• ì
kno≈á 250░á oµ thσ 750░ words«á  Iε thi≤  casσ yo⌡ wil∞á havσá t∩ ìèstud• 500░ words.
     Thσ mos⌠ commonl• misspelleΣ word≤ werσ als∩ includeΣ iε thσ ì
same list.
     Thσá lis⌠ oµ word≤ wa≤ cros≤ checkeΣ witΦ pas⌠ SA╘ test≤ anΣ ì
thσ vas⌠ majorit• oµ thσ word≤ oε thσ SA╘ werσ oε ou≥ list«á  Thσ ì
peoplσ wh∩ writσ thσ verba∞ par⌠ oµ thσ SAT¼á GRE¼á o≥ an•á othe≥ ì
standarΣá tes⌠á arσ limiteΣ iε thei≥ choicσ oµ word≤ t∩ thσá mos⌠ ì
commoεá words«á  Therσá arσ ove≥ ß 500,00░ word≤ iεá thσá EnglisΦ ì
language«á  Yo⌡ migh⌠ thinδ tha⌠ therσ i≤ n∩ wa• t∩ stud• 500,00░ ì
words«á  Ho≈ lonτ woulΣ i⌠ takσ yo⌡ t∩ memorizσ al∞ thσ word≤á iε ì
Webster≤ Internationa∞ Dictionary┐á  Bu⌠ thσ vas⌠ majorit• oµ thσ ì
word≤á arσ word≤ fo≥ specializeΣ needs«á  Unles≤ yo⌡ arσ ß docto≥ ì
o≥á nursσá arσ yo⌡ goinτ t∩ kno≈ thσ namσ oµ ever•á bonσá iεá thσ ì
humaε body┐  Unles≤ yo⌡ arσ ß geologis⌠ arσ yo⌡ goinτ t∩ kno≈ thσ ì
namσá oµá al∞ thσ rocks¼á soi∞ o≥ formation≤ iε thσá world┐á  Thσ ì
peoplσ wh∩ writσ thσ tes⌠ havσ t∩ comσ u≡ witΦ word≤ tha⌠ arσ no⌠ ì
iε specializeΣ areas«á  Fo≥ ß tes⌠ questioε t∩ bσ valiΣ a⌠á leas⌠ ì
2░á Ñá oµ thσ peoplσ shoulΣ kno≈ thσ answer«á  Thσ word≤ tha⌠á a⌠ ì
leas⌠ 20Ñ oµ thσ peoplσ kno≈ arσ oε ou≥ list«  Iε fac⌠ oε thσ SA╘ ì
anΣ mos⌠ othe≥ standarΣ test≤ iµ no⌠ enougΦ peoplσ ge⌠ thσ answe≥ ì
correc⌠ thσ questioε i≤ declareΣ invaliΣ anΣ i⌠ i≤ no⌠ figureΣ iε ì
thσ results«  
     Iµ yo⌡ arσ studyinτ fo≥ thσ SA╘ o≥ othe≥ standardizeΣ tes⌠ ╔ ì
strongl•á sugges⌠á tha⌠ yo⌡ purchasσ BARON╙ o≥ somσá othe≥á stud• ì
guidσ t∩ thσ test«  Thσ compute≥ SA╘ stud• aid≤ d∩ no⌠ seeφ t∩ bσ ì
mucΦ bette≥ thaε thσ book≤ s∩ looδ beforσ yo⌡ buy.
     Iε orde≥ t∩ kee≡ thσ definition≤ shor⌠ t∩ increasσ thσ speeΣ ì
the•á caε bσ learneΣ wσ onl• useΣ thσ mos⌠ commoεá definitioεá oµ ì
eacΦ word«á  Wσ diΣ no⌠ usσ specializeΣ meaning≤ oµ word≤ anΣ diΣ ì
no⌠á elaboratσá oε differen⌠ usage«á  Iµ yo⌡ havσá an•á question≤ ì
abou⌠ thσ word≤ yo⌡ caε alway≤ looδ theφ u≡ iε ß dictionary« 


   
                    DISCLAIMER OF WARRANTIES

     Potomaπá Pacifiπá Engineerinτá Inc«á license≤á thi≤á prograφ ì
solely on an "as is" basis.

Potomaπáá Pacifiπáá Engineerinτá shal∞á havσá n∩áá liabilit•áá o≥ ì
responsibilit•á t∩á Licenseσ t∩ an• othe≥ persoε o≥á entit•á witΦ ì
respec⌠ t∩ an• liability¼á los≤ o≥ damagσ causeΣ o≥ allegeΣ t∩ bσ ì
causeΣ directl• o≥ indirectl• b• thi≤ product¼á includinτ bu⌠ no⌠ ì
limiteΣá t∩á interruptioεá oµá services¼áá los≤á oµá busines≤á o≥ ì
anticipator•á profit≤ o≥ consequentia∞ damage≤ resultinτ froφ thσ ì
usσ o≥ operatioε oµ thi≤ program.

                       LICENSE INFORMATION

     EacΦá prograφ anΣ thσ manua∞ i≤ CopyrighteΣ 198╡ b•á Potomaπ ì
Pacifiπá Engineerinτá Inc«á  Thσá prograφ i≤á no⌠á sold«á  I⌠á i≤ ì
licensed free to all users with the following restrictions:

1.  You may NOT SELL the program.  You may give copies away free.

è2«á  Yo⌡á ma•á NO╘á givσ awa• modifieΣ version≤ oµá thσá program«  ì
Sincσ wσ givσ awa• thσ sourcσ codσ peoplσ likσ t∩ makσ change≤ t∩ ì
thσá program«á  Iµ everyonσ add≤ their owε "improvementsóá prett• ì
sooεá therσ arσ hundred≤ oµ version≤ floatinτ arounΣá anΣá peoplσ ì
blamσ u≤ wheε thei≥ program≤ d∩ no⌠ run«  
   
3«á  Iµá yo⌡ desigε you≥ owε flasΦ card≤ fo≥ ß subjec⌠ othe≥ theε ì
vacabular• yo⌡ ma• theε sel∞ thσ "FLASHó prograφ witΦ you≥á flasΦ ì
card≤ a≤ lonτ a≤ yo⌡ d∩ no⌠ marke⌠ thσ prograφ a≤ ß vocabular• o≥ ì
desigεá you≥ owε flasΦ carΣ o≥ spellinτ program«á   N∩á royaltie≤ ì
arσá required«á  Yo⌡ ma• modif• thσ flasΦ prograφ anΣá distributσ ì
thσ modifieΣ prograφ witΦ you≥ cards«  Thσ followinτ statemen⌠ i≤ ì
requireΣ :
    Portions Copyright 1985 Potomac Pacific Engineering Inc.
                       All rights reserved     
(end of required statement)


                        DATABASE PROGRAM

     Yo⌡á ma•á makσ change≤ t∩ thσ carΣ filσ usinτá ou≥á databasσ ì
program«á  Thσ databasσ prograφ i≤ thσ prograφ "MAIN.BASó oε disδ ì
4«  I⌠ i≤ probabl• easie≥ t∩ usσ ß worΣ processo≥ a≤ explaineΣ iε ì
thσ sectioε oµ thσ manua∞ "CONVERTIN╟ FILE"«á  Iµ yo⌡ d∩ no⌠ havσ ì
ßá worΣá processo≥á o≥ jus⌠ wan⌠ t∩ makσ change≤ t∩á onσá o≥á tw∩ ì
records you can use the Database program.  
     Thi≤á prograφ i≤ onσ oµ thσ 1╡ program≤ tha⌠ i≤ par⌠ oµá thσ ì
databasσ package«á  Thσ databasσ manua∞ i≤ 4░ pages«á  Herσ i≤á ß ì
quick and dirty guide to using the database.  
     TAK┼á ┴á BLAN╦á FORMATTE─ FIFT╚á DISK«á COP┘á THE╬á MAIN.BA╙ ì
PROGRAM AND ALL THE FILES FORM DISK 3 EXCEPT CARDS TO DISK 5. 
     1«á Turεá yo⌡ compute≥ oε witΦ thσ operatinτ systeφ disδá iε ì
the default disk drive.
     2«á  Afte≥á yo⌡á ente≥ thσ datσ anΣ time«á Typσ iε BASICá o≥ ì
BASICA if you have an IBM. 
     A> BASIC  (return)
      KEY OFF (return)
     3. Put Disk 5 in drive A 
     4. Put The Disk with the cards you want to change in drive B
     5. Load the Main Program 
     load "main"  (return)
     6. run the program 
     7«á Thσá prograφ i≤ men⌡ driveε s∩ hopefull• yo⌡á caεá learε ì
froφá runninτá thσ prograφ ho≈ t∩ usσ it«á  Al∞ thσ file≤ arσá oε ì
drivσá ┴á excep⌠ fo≥ thσ carΣ filσ oε drivσ ┬ tha⌠á yo⌡á wan⌠á t∩ ì
change.  
 
                          LIST OF FILES 

Disk 1 
   FLASH.EXE  - the compiled program
   CARD       - the first 2000 vocabulary words
Disk 2
   FLASH.BAS  - the basic program
   REMARKS.BAS- supplied as documentation
è                does not run
   CARD       - the second 2000 words
Disk 3
   MASTER.TXT - The manual
   PRINTMAN.BAS - Basic program that prints the files
   CARD         - the third 2000 words
   Othe≥ file≤ useΣ b• thσ datß basσ program 
Disk 4
   MAIN.BAS     - the database program
   CARD         - more vocabulary words 
ALL DISKS
   FLAG  -  Holds the number of cards you missed 
   SFLAG -  Holds  the spelling mistakes you make

                  Inner Workings of the Program 

     Thσá prograφá i≤á ßá rathe≥á simplσá program«á  Thσá prograφ ì
REMARKS.BA╙á contain≤á remark≤ oε almos⌠ ever• linσ whicΦá shoulΣ ì
enablσ yo⌡ t∩ seσ ho≈ thσ prograφ works«á Yo⌡ shoulΣ lis⌠ ou⌠ thσ ì
REMARK╙ prograφ oε pape≥ iµ yo⌡ wan⌠ t∩ seσ ho≈ i⌠ works«á  Therσ ì
i≤á onl• onσ maiε variablσ FLGV(1⌐ whicΦ thσ numbe≥ oµ time≤á thσ ì
studen⌠ makσ ß mistakσ oε thσ word«  Thσ maiε subroutine≤ arσ 
     500 clear screen
     60000 input integer less then 100 
     60060 input integer      
     62030 input string
     Iµ yo⌡ arσ usinτ IB═ BASI├ no⌠ M╙ basiπ changσ linσ 7░ t∩ C╚ ì
╜ 29« 

        OTHER PRODUCTS BY POTOMAC PACIFIC ENGINEERING INC

DATABASE, SPREADSHEET AND EXPERT SYSTEM all 3 for $20.00 on
        4 double sided double density disks
     Thσ databasσ managemen⌠ systeφ include≤ accounting¼ payroll¼ ì
inventor•á anΣá account≤ receivablσ applications«á  Thσá databasσ ì
managemen⌠ ha≤ thσ followinτ feature≤ ║á 4░ pagσ manua∞ oεá disk¼ ì
customizablσ screens¼á ASCI╔ outpu⌠ option¼ Ta° Tables¼ Subfiles¼ ì
Sor⌠ oε │ fields¼á Relational¼á Ove≥ 15,00░ line≤ oµ Sourcσ Code¼ ì
Recalculatσá fields¼á │ file≤ opeε simultaneously¼á Globa∞á fielΣ ì
changes¼á Ke•á string≤á t∩ numbers¼á Realtimσá transfer≤á betweeε ì
files¼á Retrievσá oε condition≤ fo≥ eacΦ field¼á  Forφ Generator¼ ì
Subrecords¼á Numeriπá Ranges¼á Subtotals¼á 1┤ way≤á t∩á calculatσ ì
fields, Transfer data between files, Much More.
     Thσá Spreadshee⌠á prograφá i≤ ß simplσá ver•á use≥á friendl• ì
spreadsheet«á  Thσá Spreadshee⌠á feature≤ 2▒á way≤á t∩á calculatσ ì
number≤á o≥ writσ you≥ owε subroutine¼á  Automatiπ recalculation¼ ì
ful∞á curso≥ contro∞ anΣ samplσ applications«á  Number≤ anΣá tex⌠ ì
ma• bσ placeΣ anywherσ oε thσ screen«  
     Thσ exper⌠ systeφ i≤ technicall• aε inferencσá engine«á  It≤ ì
feature≤áá arσá thσá abilit•á t∩á diagnose≤á multiplσáá problems¼ ì
determinσá multiplσá solutions¼á assigε probabilit•á witΦá rules¼ ì
intelligen⌠á searcΦá patterεá witΦ manua∞á override¼á logiπá patΦ ì
througΦ subcategorie≤ displayed¼á detect≤ contradictor• evidence¼ ì
explanatioε oµ reasoning¼ accept≤ unknowε input.
   These programs are written in Basic.  You get the source code.
èThesσ program≤ arσ excellen⌠ a≤ prograφ developmen⌠á tools«á  Al∞ ì
the programs are menu driven which makes them user friendly. 

                POTOMAC PACIFIC ENGINEERING INC.
                          P.O. BOX 2027
                  GAITHERSBURG, MARYLAND 20879
                         (301) 977-1489 

                        ERROR REPORT FORM

     Wσ  arσ interesteΣ i≤ learninτ oµ an• problem≤ yo⌡ ma•á havσ ì
witΦá thi≤ program«á  Sincσ therσ arσ dozen≤ oµ differen⌠á MS-DO╙ ì
computer≤ááá eacΦáá witΦáá differen⌠áá operatinτáá system≤ááá anΣ ì
configurations¼ therσ i≤ bounΣ t∩ bσ somσ problem≤ somewhere«  
     Wσ arσ als∩ interesteΣ witΦ an• oµ thσ definition≤ tha⌠á yo⌡ ì
feel could be better explained.   
     Iµá yo⌡á decidσá t∩ writσ u≤ pleasσ includσá you≥á namσá anΣ ì
address¼á yo⌡á computer¼á computer≤ memor• anΣ operatinτá system«  ì
You can also call us if you want too. 
     Iµá yo⌡á receiveΣ ß baΣ disδ ¿ onσ witΦ reaΣ error≤á o≥á onσ ì
tha⌠á wa≤ destroyeΣ iε thσ mail⌐ wσ wil∞ replacσ i⌠ a⌠ n∩ charge« 
     Thσá disk≤á arσá distributeΣá oεá ╕á secto≥á disks«á  ┴á fe≈ ì
computer≤á havσá problem≤á readinτ ╕ secto≥á disks«á  I⌠á ma•á bσ ì
helpfu∞á t∩á cop•á thσ file≤ t∩ ß ╣ secto≥á disk«á   Thσá prograφ ì
flash.exσ run≤ oε mos⌠ M╙ o≥ PC-DO╙ computer≤ witΦ 128k«  Howeve≥ ì
i⌠á i≤ ß closσ fi⌠ a⌠ 128╦ oε somσ computers«á  Iµ you≥á compute≥ ì
stop≤á withou⌠ aε erro≥ messagσ yo⌡ probabl• raε ou⌠á oµá memory«  ì
You should be able to run the basic version flash.bas with 128K.
```
{% endraw %}

## PRINTMAN.BAS

{% raw %}
```bas
5 CLS
10 PRINT "      This program prints the manual on paper "
20 PRINT ""
30 PRINT " MAKE SURE YOU PRINTER IS ON WITH 12 PAGES OF PAPER READY"
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

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0369

     Volume in drive A has no label
     Directory of A:\

    CARDS           251904   1-31-84  12:17a
    FFILE             2944   1-31-84  12:28a
    FILES369 TXT      2048   5-23-85   4:07p
    FLAG               128   1-31-84  12:19a
    IDEX               384   1-31-84  12:28a
    IPUTD              128   5-19-28   3:50a
    IPUTD1             512   5-19-28   4:01a
    IPUTD10            256   5-19-28  12:34a
    IPUTD11            640   5-19-28   1:01a
    IPUTD12            128   1-31-84  12:28a
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
    KEYLISTS           578   1-01-80
    KYLIST             128   3-10-83  12:50a
    MASTER   TXT     25728   1-31-84  12:12a
    PRINTMAN BAS       896   1-31-84  12:40a
    REALTIME           128   1-31-84  12:28a
    SCREEN1            384   1-01-80
    SCREEN14           512   1-01-80
    SCREEN4            256   1-01-80
    SCREEN6            128   1-01-80
    SCREEN8            256   1-01-80
    SCTEST             128   1-31-84  12:28a
    SFLAG              128   1-31-84  12:19a
           33 file(s)     292674 bytes
                            9216 bytes free
