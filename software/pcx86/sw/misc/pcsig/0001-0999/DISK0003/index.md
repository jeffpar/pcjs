---
layout: page
title: "PC-SIG Library Disk #3"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0003/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0003"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "RATBAS"

    If you're an advanced Basic programmer, RATBAS could be just what
    you're looking for. It allows basic programs to be written in a more
    structured way without line numbers. Programs written in Rationalized
    BASIC are converted into standard BASIC by the RATBAS translator. In
    effect, RATBAS is a translation program that takes your RATional BASic
    programs and converts them to Standard BASIC. It forms the bridge
    between Pascal-like Rational BASIC and standard BASIC by making the
    conversion process easier. Note, this is not a version of BASIC, but an
    adjunct.
    
    How to Start: To read documentation --strongly recommended-- enter
    TYPE RATBAS.UM and press <ENTER>.  To start program, type RT and press
    <ENTER>
    
    File Descriptions:
    
    TEST     BAS  TEST.RAT after being processed by RT.EXE.
    SORT     INC  An "include" routine which will be used by TEST.RAT
    RATBAS   TXT  Paper on RatBAS by the authors.
    TEST     RAT  A sample program written in RatBAS.
    RATBAS   UM   User's Manual for the RatBAS language.
    RT       UM   User's Manual for RT.EXE.
    RT       EXE  The RatBAS translator.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## TEST.BAS

```bas
 105    ' ********* BASIC version of RatBas program ********** 
 110     DefInt i-n 
 115   ' TEST  Program to test RT Translator
 120   '
 125   DIM Names$(200)
 130   '
 135   Maxnames=200
 140   ' Include File Sort.inc
 145    GO TO 25000 ' jump to program 
 200    '----------------------- PROCEDURE SORT
 205     ' Shell Sort
 210   '  global variables   numnames  number of names to be sorted
 215   '                     names$    names to be sorted
 220      jump.sort=numnames
 225      while jump.sort>0
 230         jump.sort=jump.sort\2
 235         limit.sort=numnames-jump.sort
 240         lower.sort=1
 245         while lower.sort<=limit.sort
 250            ibottom.sort=lower.sort
 255            more.sort=true
 260            while ibottom.sort>0 and more.sort
 265               itop.sort=ibottom.sort+jump.sort
 270               IF NAMES$(IBOTTOM.SORT)>NAMES$(ITOP.SORT)  THEN ELSE GO TO  290
 275                  swap names$(ibottom.sort), names$(itop.sort)
 280                  ibottom.sort=ibottom.sort-jump.sort
 285    GO TO   300
 290    ' ELSE] 
 295                  more.sort=false
 300                ' IFEnd] 
 305            wend
 310            lower.sort=lower.sort+1
 315         wend
 320      wend
 325    RETURN ' ------------------------------------------
 330   '
 400    '----------------------- PROCEDURE GETKEY
 405      for i.getkey=1 to 10: fromuser$=inkey$: next
 410      while fromuser$="": fromuser$=inkey$: wend
 415    RETURN ' ------------------------------------------
 420   '
 500    '----------------------- PROCEDURE  GETSELECTION
 505   cls
 510   print "Menu For Sort Program
 515   print
 520   print "1   Enter a List of Names from Keyboard"
 525   print "2   Display the Names"
 530   print "3   Read a list of Names from a disk file"
 535   print "4   Write the list of Names to a disk file"
 540   print "5   Sort the Names alphabetically"
 545   print "10  End the Program
 550   print
 555   print "Strike Function Key for your choice"
 560   choicemade%=false
 565   while not choicemade%
 570    GOSUB  400 ' GETKEY
 575     IF LEN(FROMUSER$)=2  THEN ELSE GO TO  590
 580        ifunc.get=asc(mid$(fromuser$,2,1))-58
 585    GO TO   600
 590    ' ELSE] 
 595        ifunc.get=0
 600      ' IFEnd] 
 605     choicemade%=ifunc.get=10 or (ifunc.get>=1 and ifunc.get<=5)
 610   wend
 615    RETURN ' ------------------------------------------
 620   '
 700    '----------------------- PROCEDURE ENTERNAMES
 705   cls
 710   locate 25,1
 715   Print "Enter Names.  Use a Null Line to quit";
 720   locate 1,1,1
 725   numnames=0
 730   line input namein$
 735   while namein$<>"" and numnames<maxnames
 740      numnames=numnames+1
 745      names$(numnames)=namein$
 750      line input namein$
 755   wend
 760    RETURN ' ------------------------------------------
 765   '
 800    '----------------------- PROCEDURE DISPLAYNAMES
 805   for j=1 to numnames step 20
 810      klast=j+19: if klast>numnames then klast=numnames
 815      cls
 820      for k=j to klast
 825         Print names$(k)
 830      next k
 835      print
 840      print "Press Space Bar to Continue;
 845    GOSUB  400 ' GETKEY
 850   next j
 855    RETURN ' ------------------------------------------
 860   '
 900    '----------------------- PROCEDURE READNAMES
 905   cls
 910   numnames=0
 915   print
 920   Input "Enter Name of File with input ";file$
 925   Open file$ for input as #1
 930   while not eof(1) and numnames<maxnames
 935      line input #1, namein$
 940      numnames=numnames+1
 945      names$(numnames)=namein$
 950      print ".";
 955   wend
 960   close #1
 965    RETURN ' ------------------------------------------
 970   '
 1000    '----------------------- PROCEDURE WRITENAMES
 1005   cls
 1010   print
 1015   Input "Enter Name of File to write names";file$
 1020   Open file$ for output as #1
 1025   for j=1 to numnames
 1030      Print #1, names$(j)
 1035      print ".";
 1040   next j
 1045   close #1
 1050    RETURN ' ------------------------------------------
 1055   '
 25000    ' =================== PROCEDURE LOCATIONS ===========
 25005    '  200 SORT
 25010    '  400 GETKEY
 25015    '  500 GETSELECTION
 25020    '  700 ENTERNAMES
 25025    '  800 DISPLAYNAMES
 25030    '  900 READNAMES
 25035    '  1000 WRITENAMES
 25040    ' ================== PROGRAM ======================== 
 25045    false = 0: true = not false 
 25050   key off
 25055   for k=1 to 10
 25060      key k,""
 25065   next k
 25070   cls
 25075   Print "Program to Sort a List of Names"
 25080   IFUNC.GET=CHOICE
 25085   GOSUB  500 ' GETSELECTION
 25090   CHOICE=IFUNC.GET
 25095   while choice<10
 25100    ' CASE  CHOICE  OF
 25105    IF ( CHOICE =1 )  THEN ELSE GO TO   25120
 25110    GOSUB  700 ' ENTERNAMES
 25115    GO TO   25185
 25120    IF ( CHOICE =2 )  THEN ELSE GO TO   25135
 25125    GOSUB  800 ' DISPLAYNAMES
 25130    GO TO   25185
 25135    IF ( CHOICE =3 )  THEN ELSE GO TO   25150
 25140    GOSUB  900 ' READNAMES
 25145    GO TO   25185
 25150    IF ( CHOICE =4 )  THEN ELSE GO TO   25165
 25155    GOSUB  1000 ' WRITENAMES
 25160    GO TO   25185
 25165    IF ( CHOICE =5 )  THEN ELSE GO TO   25180
 25170    GOSUB  200 ' SORT
 25175    GO TO   25185
 25180    ' OTHERWISE 
 25185    ' CEND
 25190   IFUNC.GET=CHOICE
 25195    GOSUB  500 ' GETSELECTION
 25200   CHOICE=IFUNC.GET
 25205   wend
 25210   END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0003

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT       980  11-09-84   7:29a
    CRCK4    COM      1536  10-21-82   7:54p
    RATBAS   TXT     30080   8-14-82
    RATBAS   UM       9856   8-10-82
    RT       EXE     35456  11-05-82   9:48a
    RT       UM       3328  10-29-82  11:32a
    SORT     INC       896  10-29-82  11:42a
    TEST     BAS      5632  11-05-82  12:21a
    TEST     RAT      2304  11-01-82   9:30a
            9 file(s)      90068 bytes
                           68608 bytes free
