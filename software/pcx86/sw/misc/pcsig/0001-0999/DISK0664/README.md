---
layout: page
title: "PC-SIG Diskette Library (Disk #664)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0664/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0664"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TEACHERS SPECIAL"

    This diskette contains a mix of educational programs designed to help
    both the teacher and the student.  The Register, "written by a teacher
    for teachers and tested in the classroom," is a grade database that
    will keep track of students' marks by course.  This is a fully featured
    demo version of the larger Register package.
    
    Differences between DEMO and REGULAR versions
    
    DEMO                                     REGULAR
    -limited to 13 students                  -maximum of 135 students
    per file                                 per file
    -limited to 6 grades in                  -22 grades in 3 different
    3 different categories                   categories -- total of
    total of 18 grades                       66 grades per student
    each quarter (4)                         each quarter (4)
    -no personalized information             -personalized information
    for printouts                            on all printouts
    -default print (pica)                    -elite print
    -README.DOC file for partial             -manual on disk
    manual
    -grades are NUMBERS only                 -grades are NUMBERS only
    
    The Atlas Software group as developed three color graphics and sound
    programs to drill students on history, our solor system and
    mathematical factors.  The STAR program will generate star charts.
    Each program has well developed on-line documentation and Register
    comes with over 40k of documentation.
    
    System Requirements:  128K, one disk drive (two floppies recommended)
    and a monochrome display.
    
    How to Start:  To run BASIC programs consult the directions in GETTING
    STARTED for your configuration.  Consult READSTAR.ME and MANUAL.DOC for
    program documentation.
    
    Suggested Registration:  $45.00 for REGISTER.
    
    File Descriptions:
    
    ATLAS    BAS  Screen Image for Atlas package
    -------- ---  -  Atlas Package
    ERROR    BAS  Atlas program routine
    ATLASARM BAS  Screen Image
    GRADE    000  Demonstration data
    -------- ---  -  Register Program (v1.0)
    REGISTER      Atlas registration information
    MULTID   BAS  Program: Multitime
    MENU2    BAS  Atlas program routine
    MENU     BAS  Main Menu program, run this first
    NTP      BAS  Program: Name That Planet
    HQ       BAS  Program: Historomaina
    MANUAL   DOC  Documentation for Register, about 40k
    INSTALL  COM  Installation program, read manual
    GRADES   111  Demonstration data
    GRADE    COM  Main register program
    NAMES    11   Demonstration data
    -------- ---  -  Star Program
    READ     ME   Startup information
    STAR     BAS  BASIC program, Star, will run from BASIC only
    GO       BAT  Startup information for entire disk
    READSTAR ME   Startup information
    STAR     DAT  Program information
    HARD     BAT  Installs on hard system
    FLOPPY   BAT  Installs on floppy system
    SAMPLES  DOC  Sample documentation file
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ERROR.BAS

{% raw %}
```bas
1 SCREEN 1:COLOR 0,2
2 FOR E=1 TO 3:SOUND 250,7:SOUND 30000,2:NEXT E:SOUND 99,15:SOUND 30000,15
50000 CLS:PRINT"Oh oh, it seems an error has occured.":PRINT"Press enter to return to the menu,      if this message appears again, please"
50001 PRINT"press the #4 selection on the menu,"
50002 PRINT"send this disk to the address shown     and we will either fix or replace the   disk free of charge(yes, we'll pay the  postage) to all registered users."
50003 PRINT"If you aren't a registered user(shame   on you), then send five dollars with    the disk and you will become one."
50004 PRINT:PRINT:PRINT"P.S.  Make sure you weren't just trying to list a program, because that could   be an error also."
50005 A$=INKEY$:IF A$="" THEN 50005 ELSE RUN"menu2
```
{% endraw %}

## FILES664.TXT

{% raw %}
```
----------------------------------------------------------------------------
Disk No 664   Educational Mix                                        V1.5
----------------------------------------------------------------------------
This diskette contains a mix of educational programs designed to help
both the teacher and the student.  The first program, Register, is a
grade database that will keep track of students' marks by course.  This
is a fully featured demo version of the larger register package.  The
Atlas Software group as developed three color graphics and sound
programs to drill students on history, our solor system and mathematical
factors.  Another program will generate star charts.  Each program has
well developed on-line documentation and Register comes with over 40k of
documentation.
 
------------- Atlas Package
ATLAS    BAS  Screen Image for Atlas package
ATLASARM BAS  Screen Image
ERROR    BAS  Atlas program routine
HQ       BAS  Program: Historomaina
NTP      BAS  Program: Name That Planet
MENU     BAS  Main Menu program, run this first
MENU2    BAS  Atlas program routine
MULTID   BAS  Program: Multitime
REGISTER      Atlas registration information
 
------------- Register Program (v1.8)
GRADE    000  Demonstration data
GRADE    COM  Main register program
GRADES   111  Demonstration data
INSTALL  COM  Installation program, read manual
MANUAL   DOC  Documentation for Register, about 40k
NAMES    11   Demonstration data
READ     ME   Startup information
SAMPLES  DOC  Samples documentation file
FLOPPY   BAT  Installation for floppy system
HARD     BAT  Installation for hard disk users
REGISTER      Order form
 
------------- Star Program
STAR     BAS  BASIC program, Star, will run from BASIC only
STAR     DAT  Program information
READSTAR ME   Startup information
 
PC-SIG
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986,87 PC-SIG
```
{% endraw %}

## HQ.BAS

{% raw %}
```bas
5 'I finally started!!!
6 SCREEN 1:COLOR 1,1:ON ERROR GOTO 50000
7 CLS
8 T=0
10 FOR X=1 TO 75 STEP 2
15 CIRCLE (150,100),X,Y
16 DRAW"u=x; r=x; d=x; l=x; d=x; l=x; u=x;r=x; r=x;d=x;l=x;u=x;l=x;u=x;r=x;"
17 IF Y=4 THEN Y=0
19 Y=Y+1
20 IF Y=4 THEN Y=0
21 NEXT X
22 LOCATE 3,12:PRINT"It's time for..."
23 FOR X=1 TO 1000:NEXT X
24 CLS:PRINT"            Historomania!":LOCATE 2,12:PRINT" -------------"
25 LOCATE 7,1:PRINT"Welcome to Atlas' Historomania, the fun way to learn people, places, dates, and other historical facts."
26 LOCATE 11,1:PRINT"There aren't many instructions for this program, just relax, and get ready to   see how much history you know and to addto it."
27 LOCATE 23,1:PRINT"<Press enter to continue, Esc to Exit>"
28 X$=INKEY$:IF X$=CHR$(13) THEN 29 ELSE IF X$=CHR$(27) THEN RUN"MENU2" ELSE 28
29 'Why are you looking at this?
30 CLS:LOCATE 5,1:PRINT"Please choose a skill level.":LOCATE 10,5:PRINT"1) Easy":LOCATE 11,5:PRINT"2) Intermediate":LOCATE 12,5:PRINT"3) Hard":S=0:PRINT"    4) Exit"
31 'I hope you're having fun 'cause this is pretty boring...
32 X$=INKEY$
33 IF X$="1" THEN 100
34 IF X$="2" THEN 1000
35 IF X$="3" THEN 37 ELSE IF X$="4" THEN RUN"menu2
36 GOTO 32
37 LOCATE 13,5:PRINT"Are you sure? They're really hard!"
38 X$=INKEY$:IF X$="y" OR X$="Y" THEN 50
39 IF X$="n" OR X$="N" THEN 30
40 IF X$="3" OR X$="3" THEN 50
45 GOTO 38
50 LOCATE 14,5:PRINT"Oh, alright...":FOR X=1 TO 799:NEXT X:GOTO 2000
100 CLS:INPUT"How many questions would you like{1-25}";Q
101 T=0:IF Q<1 OR Q>25 THEN BEEP:GOTO 100
102 IF T=Q THEN 6000 ELSE 110
105 IF T=Q THEN 6000 ELSE 111
109 'AAAAHHHHHAAAHAHAH, ahem, sorry...
110 RANDOMIZE VAL(MID$(TIME$,4,2)+MID$(TIME$,7,2)):SL=1
111 Z=INT(RND*(25+1)):GOSUB 5000
113 IF Z=0 THEN 150
114 IF Z=1 THEN 160
115 IF Z=2 THEN 170
116 IF Z=3 THEN 180
117 IF Z=4 THEN 190
118 IF Z=5 THEN 200
119 IF Z=6 THEN 210
120 IF Z=7 THEN 220
121 IF Z=8 THEN 230
122 IF Z=9 THEN 240
123 IF Z=10 THEN 250
124 IF Z=11 THEN 260
125 IF Z=12 THEN 270
126 IF Z=13 THEN 280
127 IF Z=14 THEN 290
128 IF Z=15 THEN 300
129 IF Z=16 THEN 310
130 IF Z=17 THEN 320
131 IF Z=18 THEN 330
132 IF Z=19 THEN 340
133 IF Z=20 THEN 350
134 IF Z=21 THEN 360
135 IF Z=22 THEN 370
136 IF Z=23 THEN 380
137 IF Z=24 THEN 390
138 IF Z=25 THEN 400
150 LOCATE 9,9:PRINT"In what year did Columbus"
151 LOCATE 11,9:PRINT"discover the `New World'"
152 LOCATE 13,9:INPUT A$:IF A$="1492" THEN GOSUB 7000
153 GOSUB 8000
159 PRINT"1492":FOR X=1 TO 2000:NEXT X:GOTO 105
160 PRINT"What is the capital of "
161 LOCATE 11,9:PRINT"California"
162 LOCATE 13,9:INPUT A$
163 IF A$="Sacremento" OR A$="sacremento" OR A$="SACREMENTO" THEN GOSUB 7000
164 IF A$="SACRAMENTO" OR A$="Sacramento" OR A$="sacramento" THEN GOSUB 7000
165 GOSUB 8000
166 PRINT"Sacramento":FOR X=1 TO 2000:NEXT X:GOTO 105
170 PRINT"What is the capital of "
171 LOCATE 11,9:PRINT"Russia (the U.S.S.R.)"
172 LOCATE 13,9:INPUT A$
173 IF A$="Moscow" OR A$="moscow" OR A$="MOSCOW" THEN GOSUB 7000
174 GOSUB 8000
175 PRINT"Moscow":FOR X=1 TO 2000:NEXT X
176 GOTO 105
180 PRINT"How many continents "
181 LOCATE 11,9:PRINT"are there"
182 LOCATE 13,9:INPUT A$
183 IF A$="7" OR A$="SEVEN" OR A$="seven" THEN GOSUB 7000
184 GOSUB 8000
187 PRINT"7":FOR X=1 TO 2000:NEXT X
188 GOTO 111
190 PRINT"On what continent "
191 LOCATE 11,9:PRINT"is the south pole"
192 LOCATE 13,9:INPUT A$
193 IF A$="antarctica" OR A$="ANTARCTICA" OR A$="Antarctica" OR A$="ANTARTICA" OR A$="ANTARTICA" OR A$="ANTARTICA" THEN GOSUB 7000
194 GOSUB 8000
195 PRINT"Antarctica":FOR X=1 TO 2000:NEXT X
196 GOTO 105
200 PRINT"What U.S. state is made"
201 LOCATE 11,9:PRINT"out of volcanic rock"
202 LOCATE 13,9:INPUT A$
203 IF A$="Hawaii" OR A$="HAWAII" OR A$="hawaii" THEN GOSUB 7000
204 GOSUB 8000
205 PRINT"Hawaii":FOR X=1 TO 2000:NEXT X
206 GOTO 105
210 PRINT"In what country is"
211 LOCATE 11,9:PRINT"King Tut's tomb"
212 LOCATE 13,9:INPUT A$
213 IF A$="Egypt" OR A$="EGYPT" OR A$="egypt" THEN GOSUB 7000
215 GOSUB 8000:PRINT"Egypt":FOR X=1 TO 2000:NEXT X:GOTO 105
218 'TUNDA!!!!!!!PONTICANAE!!!!!!!!!!!!!!!!
219 'HHHHAAAAIIIIIIIIIIIIIIII!!!!!!!!!!!
220 PRINT"How many states are in"
221 LOCATE 11,9:PRINT"The U.S.A."
222 LOCATE 13,9:INPUT A$
223 IF A$="Fifty" OR A$="FIFTY" OR A$="fifty" OR A$="50" THEN GOSUB 7000
224 GOSUB 8000
225 PRINT"50":FOR X=1 TO 2000:NEXT X
226 GOTO 105
230 PRINT"How many oceans are there"
231 LOCATE 11,9:PRINT"on Earth"
232 LOCATE 13,9:INPUT A$
233 IF A$="Four" OR A$="four" OR A$="FOUR" OR A$="4" THEN GOSUB 7000
234 GOSUB 8000
235 PRINT"4":FOR X=1 TO 2000:NEXT X
236 GOTO 105
240 PRINT"Who was the first "
241 LOCATE 11,9:PRINT"president of the U.S."
242 LOCATE 13,9:INPUT A$
243 IF A$="George Washington" OR A$="Washington" OR A$="WASHINGTON" OR A$="GEORGE WASHINGTON" OR A$="george washington" THEN GOSUB 7000
244 IF A$="washington" THEN GOSUB 7000
245 GOSUB 8000
246 PRINT"George Washington":FOR X=1 TO 2000:NEXT X:GOTO 105
250 PRINT"On what date is "
251 LOCATE 11,9:PRINT"Independence day "
252 LOCATE 13,9:INPUT A$
253 IF A$="JULY 4TH" OR A$="JULY 4th" OR A$="july 4th" OR A$="July 4th" OR A$="july fourth" OR A$="JULY FOURTH" THEN GOSUB 7000
254 IF A$="July fourth" OR A$="JULY 4" OR A$="July 4" OR A$="july 4" THEN GOSUB 7000
255 GOSUB 8000:PRINT"July 4th."
256 FOR X=1 TO 2000:NEXT X:GOTO 105
260 PRINT"What country was "
261 LOCATE 11,9:PRINT"Napoleon from"
262 LOCATE 13,9:INPUT A$
263 IF A$="France" OR A$="france" OR A$="FRANCE" THEN GOSUB 7000
264 GOSUB 8000:PRINT"France"
265 FOR X=1 TO 2000:NEXT X:GOTO 105
270 PRINT"What is the northernmost"
271 LOCATE 11,9:PRINT"U.S. state"
272 LOCATE 13,9:INPUT A$
273 IF A$="Alaska" OR A$="alaska" OR A$="ALASKA" THEN GOSUB 7000
274 GOSUB 8000
275 PRINT"Alaska" FOR X=1 TO 2000:NEXT X
276 GOTO 105
280 PRINT"Who discovered "
281 LOCATE 11,9:PRINT"electricity"
283 LOCATE 13,9:INPUT A$
284 IF A$="Ben Franklin" OR A$="Benjamin Franklin" OR A$="BEN FRANKLIN" OR A$="BENJAMIN FRANKLIN" THEN GOSUB 7000
285 IF A$="benjamin franklin" OR A$="ben franklin" OR A$="Franklin" OR A$="franklin" OR A$="FRANKLIN" THEN GOSUB 7000
286 GOSUB 8000:PRINT"Benjamin Franklin."
287 FOR X=1 TO 2000:NEXT X:GOTO 105
290 PRINT"Rome is in what "
291 LOCATE 11,9:PRINT"country"
292 LOCATE 13,9:INPUT A$
293 IF A$="Italy" OR A$="ITALY" OR A$="italy" THEN GOSUB 7000
294 GOSUB 8000:PRINT"Italy":FOR X= 1 TO 2000:NEXT X:GOTO 105
300 PRINT"For what country did"
301 LOCATE 11,9:PRINT"Columbus claim America"
302 LOCATE 13,9:INPUT A$
303 IF A$="Spain" OR A$="spain" OR A$="SPAIN" THEN GOSUB 7000
304 GOSUB 8000:PRINT"Spain":FOR X=1 TO 2000:NEXT X
305 GOTO 105
310 PRINT"What was the name of"
311 LOCATE 11,9:PRINT"the first pilgrim ship"
312 LOCATE 13,9:INPUT A$
313 IF A$="Mayflower" OR A$="MAYFLOWER" OR A$="mayflower" THEN GOSUB 7000
314 IF A$="the Mayflower" OR A$="The Mayflower" OR A$="THE MAYFLOWER" OR A$="the mayflower" THEN GOSUB 7000
315 GOSUB 8000:PRINT"Mayflower":FOR X=1 TO 2000:NEXT X:GOTO 105
320 PRINT"In what ocean is the"
321 LOCATE 11,9:PRINT"state of Hawaii"
322 LOCATE 13,9:INPUT A$
323 IF A$="pacific" OR A$="PACIFIC" OR A$="Pacific" THEN GOSUB 7000
324 IF A$="the pacific ocean" OR A$="the Pacific ocean" THEN GOSUB 7000
325 GOSUB 8000:PRINT"Pacific"
326 FOR X=1 TO 2000:NEXT X:GOTO 105
330 '
331 PRINT"What year did The "
335 LOCATE 11,9:PRINT"18th century begin"
336 LOCATE 13,9:INPUT A$
337 IF A$="1700" THEN GOSUB 7000
338 GOSUB 8000:PRINT"1700":FOR X=1 TO 2000:NEXT X:GOTO 105
340 PRINT"In what year did the"
341 LOCATE 11,9:PRINT"American Revolution begin"
342 LOCATE 13,9:INPUT A$
343 IF A$="1776" OR A$="1775" THEN GOSUB 7000
344 GOSUB 8000:PRINT"1775":FOR X=1 TO 2000:NEXT X
345 GOTO 105
350 PRINT"What was the nickname"
351 LOCATE 11,9:PRINT"for the British soldiers"
352 LOCATE 13,9:PRINT"in the American Revolution"
353 LOCATE 15,9:INPUT A$
354  IF A$="Red coats" OR A$="Red Coats" OR A$="red coats" OR A$="RED COATS" THEN GOSUB 7000
355 IF A$="Redcoats" OR A$="redcoats" OR A$="REDCOATS" THEN GOSUB 7000
356 IF A$="Redcoats" OR A$="redcoats" OR A$="REDCOATS" THEN GOSUB 7000
357 GOSUB 8000:PRINT"Red Coats":FOR X=1 TO 2000:NEXT X:GOTO 105
360 PRINT"How many stars were"
361 LOCATE 11,9:PRINT"there on the first"
362 LOCATE 13,9:PRINT"American flag"
363 LOCATE 15,9:INPUT A$
364 IF A$="13" OR A$="thirteen" OR A$="Thirteen" OR A$="THIRTEEN" THEN GOSUB 7000
365 GOSUB 8000:PRINT"13":FOR X=1 TO 2000:NEXT X:GOTO 105
370 PRINT"What country fought "
371 LOCATE 11,9:PRINT"against the U.S. in"
372 LOCATE 13,9:PRINT"the American Revolution"
373 LOCATE 15,9:INPUT A$
374 IF A$="Great Britain" OR A$="great britain" OR A$="GREAT BRITAIN" OR A$="Great britain" OR A$="great Britain"THEN GOSUB 7000
375 IF A$="England" OR A$="ENGLAND" OR A$="england" THEN GOSUB 7000
376 IF A$="BRITAIN" OR A$="Britain" OR A$="britain" THEN 7000
377 GOSUB 8000:PRINT"England"
378 FOR X=1 TO 2000:NEXT X:GOTO 105
380 PRINT"In what city was the"
382 LOCATE 11,9:PRINT"American `Tea Party' held"
383 LOCATE 13,9:INPUT A$
386 IF A$="Boston" OR A$="BOSTON" OR A$="boston" THEN GOSUB 7000
387 GOSUB 8000:PRINT"Boston":FOR X=1 TO 2000:NEXT X:GOTO 105
390 PRINT"Who invented the telephone"
391 LOCATE 13,9:INPUT A$
392 IF A$="Alexander Graham Bell" OR A$="ALEXANDER GRAHAM BELL" OR A$="alexander graham bell" THEN GOSUB 7000
393 IF A$="Alexander Bell" OR A$="alexander bell" OR A$="ALEXANDER BELL" THEN GOSUB 7000
394 IF A$="BELL" OR A$="Bell" OR A$="bell" THEN GOSUB 7000
395 GOSUB 8000:PRINT"Alexander Bell":FOR X=1 TO 2000:NEXT X:GOTO 105
400 PRINT"Which country has the "
401 LOCATE 11,9:PRINT"largest population"
402 LOCATE 13,9:INPUT A$
404 IF A$="China" OR A$="china" OR A$="CHINA" THEN GOSUB 7000
405 GOSUB 8000:PRINT"China":FOR X=1 TO 2000:NEXT X:GOTO 105
411 LOCATE 11,9:PRINT"Hitler from"
412 LOCATE 13,9:INPUT A$
413 IF A$="Germany" OR A$="GERMANY" OR A$="germany" THEN GOSUB 7000
414 IF A$="beak" THEN GOSUB 7000
415 GOSUB 8000:PRINT"Germany":FOR X=1 TO 2000:NEXT X:GOTO 105
1000 CLS:LOCATE 2,1:INPUT"How many questions would you like{1-25}";Q
1001 T=0:IF Q>25 OR Q<1 THEN BEEP:GOTO 1000:'UCLA WINS YEAH!!!
1005 IF T=Q THEN GOSUB 6000
1010 CLS:RANDOMIZE VAL(MID$(TIME$,4,2)+MID$(TIME$,7,2)):GOSUB 5000:SL=2
1011 Z=INT(RND*(23+1)):SL=2
1012 IF Z=0 THEN 1030
1013 IF Z=1 THEN 1040
1014 IF Z=2 THEN 1050
1015 IF Z=3 THEN 1060
1016 IF Z=4 THEN 1070
1017 IF Z=5 THEN 1080
1018 IF Z=6 THEN 1090
1019 IF Z=7 THEN 1100
1020 IF Z=8 THEN 1110
1021 IF Z=9 THEN 1120
1022 IF Z=10 THEN 1130
1023 IF Z=11 THEN 1140
1024 IF Z=12 THEN 1150
1025 IF Z=13 THEN 1160
1026 IF Z=14 THEN 1170
1027 IF Z=15 THEN 1180
1028 IF Z=16 THEN 1190
1029 IF Z=17 THEN 1200
1030 IF Z=18 THEN 1210
1031 IF Z=19 THEN 1220
1032 IF Z=20 THEN 1230
1033 IF Z=21 THEN 1240
1034 IF Z=22 THEN 1250
1035 IF Z=23 THEN 1260
1036 IF Z=24 THEN 1270
1037 GOTO 1005
1040 PRINT"How many time zones"
1041 LOCATE 11,9:PRINT"are there in the U.S."
1042 LOCATE 13,9:INPUT A$
1043 IF A$="4" OR A$="four" OR A$="FOUR" OR A$="Four" THEN GOSUB 7000
1044 GOSUB 8000:PRINT"4":FOR X=1 TO 2000:NEXT X:GOTO 1005
1050 PRINT"How many `Wonders of the "
1051 LOCATE 11,9:PRINT"World' are there"
1052 LOCATE 13,9:INPUT A$
1053 IF A$="seven" OR A$="7" OR A$="SEVEN" OR A$="Seven" THEN GOSUB 7000
1054 GOSUB 8000:PRINT"7":FOR X=1 TO 2000:NEXT X:GOTO 1005
1060 PRINT"Who first circled the"
1061 LOCATE 11,9:PRINT"Earth "
1062 LOCATE 13,9:INPUT A$
1063 IF A$="Ferdinand Magellan" OR A$="FERDINAND MAGELLAN" OR A$="ferdinand magellan" OR A$="Ferdinand magellan" OR A$="ferdinand Magellan" THEN GOSUB 7000
1064 IF A$="magellan" OR A$="MAGELLAN" OR A$="Magellan" THEN GOSUB 7000
1065 GOSUB 8000:PRINT"Ferdinand Magellan":FOR X=1 TO 2000:NEXT X:GOTO 1005
1070 PRINT"In what country is"
1071 LOCATE 11,9:PRINT"Normandy beach"
1072 LOCATE 13,9:INPUT A$
1073 IF A$="France" OR A$="FRANCE" OR A$="france" THEN GOSUB 7000
1074  GOSUB 8000:PRINT"France":FOR X=1 TO 2000:NEXT X:GOTO 1005
1080 PRINT"In what year was Pearl"
1082 LOCATE 11,9:PRINT"Harbor bombed"
1083 LOCATE 13,9:INPUT A$
1084 IF A$="1941" THEN GOSUB 7000
1085 GOSUB 8000:PRINT"1941":FOR X=1 TO 2000:NEXT X:GOTO 1005
1090 PRINT"How many years did WWII"
1091 LOCATE 11,9:PRINT"last"
1092 LOCATE 13,9:INPUT A$
1093 IF A$="6" OR A$="six" OR A$="SIX" OR A$="Six" THEN GOSUB 7000
1094 GOSUB 8000:PRINT"6":FOR X=1 TO 2000:NEXT X:GOTO 1005
1100 PRINT"In what city were the"
1101 LOCATE 11,9:PRINT"1st Olympic games held"
1102 LOCATE 13,9:INPUT A$
1103 IF A$="Athens" OR A$="ATHENS" OR A$="athens" THEN GOSUB 7000
1104 GOSUB 8000:PRINT"Athens":FOR X=1 TO 2000:NEXT X:GOTO 1005
1110 PRINT"What does A.D., the"
1111 LOCATE 11,9:PRINT"opposite of B.C. stand for"
1112 LOCATE 13,9:INPUT A$
1113 IF A$="anno domini" OR A$="ANNO DOMINI" OR A$="Anno domin1" OR A$="Anno Domini" THEN GOSUB 7000
1114 GOSUB 8000:PRINT"Anno domini":FOR X=1 TO 2000:NEXT X:GOTO 1005
1120 PRINT"What is the longest "
1121 LOCATE 11,9:PRINT"river in the world"
1123 LOCATE 13,9:INPUT A$
1124 IF A$="nile river" OR A$="NILE RIVER" OR A$="Nile River" OR A$="Nile river" OR A$="The Nile River" OR A$="the nile river" OR A$="the Nile river" THEN GOSUB 7000
1125 IF A$="The Nile" OR A$="the Nile" OR A$="Nile" OR A$="nile" OR A$="NILE" OR A$="THE NILE RIVER" OR A$="the Nile River" THEN GOSUB 7000
1126 GOSUB 8000:PRINT"The Nile River":FOR X=1 TO 2000:NEXT X:GOTO 1005
1130 PRINT"In what year did Rome"
1131 LOCATE 11,9:PRINT"fall"
1132 LOCATE 13,9:INPUT A$
1133 IF A$="476" OR A$="476 A.D." OR A$="476A.D." OR A$="476 a.d." OR A$="476 AD" THEN GOSUB 7000
1134 GOSUB 8000:PRINT"476 A.D.":FOR X=1 TO 2000:NEXT X:GOTO 1005
1140 PRINT"Who named the Pacific "
1141 LOCATE 11,9:PRINT"Ocean"
1142 LOCATE 13,9:INPUT A$
1143 GOTO 1063
1150 PRINT"In what year was"
1151 LOCATE 11,9:PRINT"Charlemagne crowned"
1152 LOCATE 13,9:INPUT A$
1153 IF A$="800" OR A$="800 A.D." OR A$="800 a.d." OR A$="800 AD" OR A$="800 ad" THEN GOSUB 7000
1154 GOSUB 8000:PRINT"800 A.D.":FOR X=1 TO 2000:NEXT X:
1155 GOTO 1005
1160 PRINT"In what year did people"
1161 LOCATE 11,9:PRINT"begin to use the wheel"
1162 LOCATE 13,9:INPUT A$
1163 IF A$="3500 B.C." OR A$="3500 BC" OR A$="3500 b.c." OR A$="3500 bc" THEN GOSUB 7000
1164 GOSUB 8000:PRINT"3500 B.C.":FOR X=1 TO 2000:NEXT X:
1165 GOTO 1005
1170 PRINT"Was the French revolution"
1171 LOCATE 11,9:PRINT"before or after 1775"
1172 LOCATE 13,9:INPUT A$
1173 IF A$="After" OR A$="after" OR A$="AFTER" OR A$="A" OR A$="a" THEN GOSUB 7000
1174 GOSUB 8000:PRINT"After":FOR X=1 TO 2000:NEXT X:
1175 GOTO 1005
1180 PRINT"What is the name of the"
1181 LOCATE 11,9:PRINT"capital of Egypt"
1182 LOCATE 13,9:INPUT A$
1183 IF A$="Cairo" OR A$="cairo" OR A$="CAIRO" THEN GOSUB 7000
1184 GOSUB 8000:PRINT"Cairo":FOR X=1 TO 2000:NEXT X:
1185 GOTO 1005
1190 PRINT"What was the last name of"
1191 LOCATE 11,9:PRINT"both Julius and Augustus"
1192 LOCATE 13,9:INPUT A$
1193 IF A$="Caeser" OR A$="caeser" OR A$="CAESER" THEN GOSUB 7000
1194 GOSUB 8000:PRINT"Caeser":FOR X=1 TO 2000:NEXT X:GOTO 1005
1200 PRINT"What was the name of"
1201 LOCATE 11,9:PRINT"the first English colony"
1202 LOCATE 13,9:PRINT"in the U.S."
1203 LOCATE 15,9:INPUT A$
1204 IF A$="Jamestown" OR A$="JAMESTOWN" OR A$="jamestown" THEN GOSUB 7000
1205 GOSUB 8000:PRINT"Jamestown":FOR X=1 TO 2000:NEXT X:GOTO 1005
1210 PRINT"In what year was the"
1211 LOCATE 11,9:PRINT"Berlin Wall built"
1212 LOCATE 13,9:INPUT A$
1213 IF A$="1961" THEN GOSUB 7000
1214 GOSUB 8000:PRINT"1961":FOR X=1 TO 2000:NEXT X:GOTO 1005
1220 PRINT"Which is larger, West"
1221 LOCATE 11,9:PRINT"or East Germany"
1222 LOCATE 13,9:INPUT A$
1223 IF A$="West" OR A$="west" OR A$="WEST" OR A$="WeST" OR A$="wEsT" OR A$="WEst" THEN GOSUB 7000
1224 IF A$="West Germany" OR A$="west germany" OR A$="WEST GERMANY" OR A$="West germany" OR A$="west Germany" THEN GOSUB 7000
1225 GOSUB 8000:PRINT"West Germany":FOR X=1 TO 2000:NEXT X:GOTO 1005
1230 PRINT"In what year was Julius"
1231 LOCATE 11,9:PRINT"Caeser killed"
1232 LOCATE 13,9:INPUT A$
1233 IF A$="44 B.C." OR A$="44 BC" OR A$="44 bc" OR A$="44 b.c." THEN GOSUB 7000
1234 GOSUB 8000:PRINT"44 B.C.":FOR X=1 TO 2000:NEXT X:GOTO 1005
1240 PRINT"In what year did the"
1241 LOCATE 11,9:PRINT"first crusade start"
1242 LOCATE 13,9:INPUT A$
1243 IF A$="1095" OR A$="1095 A.D" OR A$="1095 AD" OR A$="1095 ad" OR A$="1095 a.d." THEN GOSUB 7000
1244 GOSUB 8000:PRINT"1095 A.D.":FOR X=1 TO 2000:NEXT X:GOTO 1005
1250 PRINT"Who was defeated at"
1251 LOCATE 11,9:PRINT"Waterloo"
1252 LOCATE 13,9:INPUT A$
1253 IF A$="Napoleon" OR A$="NAPOLEON" OR A$="napoleon" OR A$="FRENCH" OR A$="french" OR A$="French" THEN GOSUB 7000
1254 IF A$="the French" OR A$="NAPOLEON" OR A$="napoleon" OR A$="THE FRENCH" OR A$="the french" OR A$="The French" THEN GOSUB 7000
1255 IF A$="Napoleon Bonaparte" OR A$="NAPOLEON BONAPARTE" OR A$="napoleon bonaparte" OR A$="Napoleon bonaparte" OR A$="napoleon Bonaparte" THEN GOSUB 7000
1256 GOSUB 8000:PRINT"Napoleon Bonaparte":FOR X=1 TO 2000:NEXT X:GOTO 1005
1260 PRINT"In what year was the "
1261 LOCATE 11,9:PRINT"steam locomotive invented"
1262 LOCATE 13,9:INPUT A$
1263 IF A$="1804" THEN GOSUB 7000
1264 GOSUB 8000:PRINT"1804":FOR X=1 TO 2000:NEXT X:GOTO 1005
1270 PRINT"What is the chief language"
1271 LOCATE 11,9:PRINT"spoken in Austria"
1272 LOCATE 13,9:INPUT A$
1273 IF A$="German" OR A$="german" OR A$="GERMAN" THEN GOSUB 7000
1274 GOSUB 8000:PRINT"German":FOR X=1 TO 2000:NEXT X:GOTO 1005
2000 CLS:LOCATE 2,1:INPUT"How many questions would you like{1-25}";Q
2001 T=0:IF Q>25 OR Q<1 THEN BEEP:GOTO 2000:'UCLA WINS YEAH!!!
2005 IF T=Q THEN GOSUB 6000
2010 CLS:RANDOMIZE VAL(MID$(TIME$,4,2)+MID$(TIME$,7,2)):GOSUB 5000:SL=3
2011 Z=INT(RND*(23+1)):SL=3
2012 IF Z=0 THEN 2030
2013 IF Z=1 THEN 2040
2014 IF Z=2 THEN 2050
2015 IF Z=3 THEN 2060
2016 IF Z=4 THEN 2070
2017 IF Z=5 THEN 2080
2018 IF Z=6 THEN 2090
2019 IF Z=7 THEN 2100
2020 IF Z=8 THEN 2110
2021 IF Z=9 THEN 2120
2022 IF Z=10 THEN 2130
2023 IF Z=11 THEN 2140
2024 IF Z=12 THEN 2150
2025 IF Z=13 THEN 2160
2026 IF Z=14 THEN 2170
2027 IF Z=15 THEN 2180
2028 IF Z=16 THEN 2190
2029 IF Z=17 THEN 2200
2030 IF Z=18 THEN 2210
2031 IF Z=19 THEN 2220
2032 IF Z=20 THEN 2230
2033 IF Z=21 THEN 2240
2034 IF Z=22 THEN 2250
2035 IF Z=23 THEN 2260
2036 IF Z=24 THEN 2270
2037 GOTO 2011
2038 'Almost done now!!!!!!!!!!!
2040 PRINT"What country does "
2041 LOCATE 11,9:PRINT"Greenland belong to"
2042 LOCATE 13,9:INPUT A$:IF A$="denmark" OR A$="DENMARK" OR A$="Denmark" THEN GOSUB 7000
2043 GOSUB 8000
2044 PRINT"Denmark":FOR X=1 TO 2000:NEXT X
2045 GOTO 2005
2050 PRINT"How many children did"
2051 LOCATE 11,9:PRINT"George Washington have"
2052 LOCATE 13,9:INPUT A$:IF A$="0" OR A$="none" OR A$="NONE" OR A$="None" THEN GOSUB 7000
2053 GOSUB 8000
2054 PRINT"None":FOR X=1 TO 2000:NEXT X
2055 GOTO 2005
2060 PRINT"What is the capital of"
2061 LOCATE 11,9:PRINT"Kenya"
2062 LOCATE 13,9:INPUT A$:IF A$="nairobi" OR A$="NAIROBI" OR A$="Nairobi" THEN GOSUB 7000
2063 GOSUB 8000
2064 PRINT"Nairobi":FOR X=1 TO 2000:NEXT X
2065 GOTO 2005
2070 PRINT"Were computers used in"
2071 LOCATE 11,9:PRINT"World War II"
2072 LOCATE 13,9:INPUT A$:IF A$="yes" OR A$="YES" OR A$="Yes" THEN GOSUB 7000
2073 GOSUB 8000
2074 PRINT"Yes":FOR X=1 TO 2000:NEXT X
2075 GOTO 2005
2080 PRINT"In what year did George"
2081 LOCATE 11,9:PRINT"Washington camp at Valley"
2082 LOCATE 13,9:PRINT"Forge"
2083 LOCATE 15,9:INPUT A$:IF A$="1777" THEN GOSUB 7000
2084 GOSUB 8000
2085 PRINT"1777":FOR X=1 TO 2000:NEXT X
2086 GOTO 2005
2090 PRINT"Who was the last Czar "
2091 LOCATE 11,9:PRINT"of Russia"
2092 LOCATE 13,9:INPUT A$:IF A$="Nicholas II" OR A$="Nicholas 2" OR A$="NICHOLAS II" OR A$="Nicholas ii" OR A$="nicholas II" THEN GOSUB 7000
2093 IF A$="nicholas" OR A$="NICHOLAS" OR A$="nicholas ii" OR A$="NICHOLAS 2" OR A$="nicholas 2" THEN GOSUB 7000
2094 GOSUB 8000:PRINT"Nicholas II":FOR X=1 TO 2000:NEXT X:GOTO 2005
2095 GOTO 2005
2100 PRINT"How long did Adolf "
2101 LOCATE 11,9:PRINT"Hitler's marriage last"
2102 LOCATE 13,9:INPUT A$
2103 IF A$="1 day" OR A$="1 DAY" OR A$="1 Day" OR A$="a day" OR A$="A DAY" OR A$="A Day" OR A$="A day" THEN GOSUB 7000
2104 IF A$="one day" OR A$="ONE DAY" OR A$="One Day" OR A$="One day" THEN GOSUB 7000
2105 GOSUB 8000:PRINT"1 Day":FOR X=1 TO 2000:NEXT X:GOTO 2005
2110 PRINT"In what city was Odysseus"
2111 LOCATE 11,9:PRINT"born"
2112 LOCATE 13,9:INPUT A$
2113 IF A$="Ithaca" OR A$="ithaca" OR A$="ITHACA" THEN GOSUB 7000
2114 GOSUB 8000:PRINT"Ithaca":FOR X=1 TO 2000:NEXT X:GOTO 2005
2120 PRINT"What was Billy the Kid's"
2121 LOCATE 11,9:PRINT"real last name"
2122 LOCATE 13,9:INPUT A$
2123 IF A$="Bonney" OR A$="BONNEY" OR A$="bonney" THEN GOSUB 7000
2124 GOSUB 8000:PRINT"Bonney":FOR X=1 TO 2000:NEXT X:GOTO 2005
2130 PRINT"Did the `Black Death' occur"
2131 LOCATE 11,9:PRINT"in England before or after"
2132 LOCATE 13,9:PRINT"1200 A.D.":LOCATE 15,9:INPUT A$
2133 IF A$="AFTER" OR A$="after" OR A$="After" THEN GOSUB 7000
2134 GOSUB 8000:PRINT"After":FOR X=1 TO 2000:NEXT X:GOTO 2005
2140 PRINT"In what city was the"
2141 LOCATE 11,9:PRINT"last battle of the U.S."
2142 LOCATE 13,9:PRINT"revolution fought"
2143 LOCATE 15,9:INPUT A$
2144 IF A$="Yorktown" OR A$="YORKTOWN" OR A$="yorktown" THEN GOSUB 7000
2145 GOSUB 8000:PRINT"Yorktown":FOR X=1 TO 2000:NEXT X:GOTO 2005
2150 PRINT"What state has the"
2151 LOCATE 11,9:PRINT"most lakes"
2152 LOCATE 13,9:INPUT A$
2153 IF A$="Minnesota" OR A$="MINNESOTA" OR A$="minnesota" THEN GOSUB 7000
2154 GOSUB 8000:PRINT"Minnesota":FOR X=1 TO 2000:NEXT X:GOTO 2005
2160 PRINT"Who invented Daylight"
2161 LOCATE 11,9:PRINT"Savings Time"
2162 LOCATE 13,9:INPUT A$
2163 IF A$="Ben Franklin" OR A$="ben franklin" OR A$="BEN FRANKLIN" OR A$="BENJAMIN FRANKLIN" OR A$="Benjamin Franklin" OR A$="benjamin franklin" THEN GOSUB 7000
2164 IF A$="Franklin" OR A$="franklin" OR A$="FRANKLIN" THEN GOSUB 7000
2165 GOSUB 8000:PRINT"Benjamin Franklin":FOR X=1 TO 2000:NEXT X:GOTO 2005
2170 PRINT"What is the capital"
2171 LOCATE 11,9:PRINT"of Oregon"
2172 LOCATE 13,9:INPUT A$
2173 IF A$="Salem" OR A$="salem" OR A$="SALEM" THEN GOSUB 7000
2174 GOSUB 8000:PRINT"Salem":FOR X=1 TO 2000:NEXT X:GOTO 2005
2180 PRINT"In what state is the"
2181 LOCATE 11,9:PRINT"active Shasta volcano"
2182 LOCATE 13,9:INPUT A$
2183 IF A$="California" OR A$="california" OR A$="CALIFORNIA" THEN GOSUB 7000
2184 GOSUB 8000:PRINT"California":FOR X=1 TO 2000:NEXT X:GOTO 2005
2190 PRINT"What country does Corsica"
2191 LOCATE 11,9:PRINT"belong to"
2192 LOCATE 13,9:INPUT A$
2193 IF A$="FRANCE" OR A$="France" OR A$="france" THEN GOSUB 7000
2194 GOSUB 8000:PRINT"France":FOR X=1 TO 2000:NEXT X:GOTO 2005
2200 PRINT"Who was Queen Victoria's"
2201 LOCATE 11,9:PRINT"grandson"
2202 LOCATE 13,9:INPUT A$
2203 IF A$="Kaiser Wilhelm" OR A$="kaiser wilhelm" OR A$="KAISER WILHELM" OR A$="THE KAISER" OR A$="the kaiser" OR A$="the Kaiser" OR A$="The Kaiser" THEN GOSUB 7000
2204 IF A$="Wilhelm" OR A$="wilhelm" OR A$="WILHELM" THEN GOSUB 7000
2205 GOSUB 8000:PRINT"Kaiser Wilhelm":FOR X=1 TO 2000:NEXT X:GOTO 2005
2210 PRINT"What is the capital"
2211 LOCATE 11,9:PRINT"of Pakistan"
2212 LOCATE 13,9:INPUT A$
2213 IF A$="Islamabad" OR A$="ISLAMABAD" OR A$="islamabad" THEN GOSUB 7000
2214 GOSUB 8000:PRINT"Islamabad":FOR X=1 TO 2000:NEXT X:GOTO 2005
2220 PRINT"How many months did the"
2221 LOCATE 11,9:PRINT"Pony Express run"
2222 LOCATE 13,9:INPUT A$
2223 IF A$="18" OR A$="Eighteen" OR A$="eighteen" OR A$="EIGHTEEN" THEN GOSUB 7000
2224 GOSUB 8000:PRINT"18":FOR X=1 TO 2000:NEXT X:GOTO 2005
2230 PRINT"How old was King Tut"
2231 LOCATE 11,9:PRINT"when he died"
2232 LOCATE 13,9:INPUT A$
2233 GOTO 2223
2240 PRINT"Who was Julius Caeser's"
2241 LOCATE 11,9:PRINT"wife"
2242 LOCATE 13,9:INPUT A$
2243 IF A$="Calpurnia" OR A$="CALPURNIA" OR A$="calpurnia" THEN GOSUB 7000
2244 GOSUB 8000:PRINT"Calpurnia":FOR X=1 TO 2000:NEXT X:GOTO 2005
2250 PRINT"Which continent has the"
2251 LOCATE 11,9:PRINT"most fresh water"
2252 LOCATE 13,9:INPUT A$
2253 IF A$="Antarctica" OR A$="antarctica" OR A$="ANTARCTICA" OR A$="antartica" OR A$="ANTARTICA" OR A$="Antartica" THEN GOSUB 7000
2254 GOSUB 8000:PRINT"Antarctica":FOR X=1 TO 2000:NEXT X:GOTO 2005
2260 PRINT"In what country was "
2261 LOCATE 11,9:PRINT"aspirin invented"
2262 LOCATE 13,9:INPUT A$
2263 IF A$="Germany" OR A$="germany" OR A$="GERMANY" THEN GOSUB 7000
2264 GOSUB 8000:PRINT"Germany":FOR X=1 TO 2000:NEXT X:GOTO 2005
2270 PRINT"How many square miles did"
2271 LOCATE 11,9:PRINT"the Louisiana Purchase contain"
2273 LOCATE 13,9:INPUT A$
2274 IF A$="822000" OR A$="822,000" OR A$="822 thousand" OR A$="822 THOUSAND" THEN GOSUB 7000
2275 GOSUB 8000:PRINT"822,000":FOR X=1 TO 2000:NEXT X:GOTO 2005
5000 Y=0:CLS
5005 FOR X=1 TO 19
5010 CIRCLE (20,20),X,Y
5011 CIRCLE (300,20),X,Y
5012 CIRCLE (20,180),X,Y
5013 CIRCLE (300,180),X,Y
5014 Y=Y+1:IF Y=4 THEN Y=0
5015 NEXT
5020 LINE (20,20)-(40,40)
5025 LINE (300,20)-(280,40)
5030 LINE (20,180)-(40,160)
5035 LINE (300,180)-(280,160)
5040 LINE (280,160)-(40,160):LINE (40,160)-(40,40)
5045 LINE (40,40)-(280,40):LINE(280,40)-(280,160)
5050 LOCATE 9,9:RETURN
6000 Z=0:
6002 CLS:FOR X=1 TO 61
6003 COLOR X,Z
6005 DRAW"U=X;L=X;D=X;R=X;"
6006 DRAW"D=X;R=X;U=X;L=X;"
6007 Z=Z+2
6008 IF Z=4 THEN Z=0
6009 NEXT X
6010 COLOR 1,1
6011 DRAW"U61 R61 D61 L122 D61 R61"
6012 LOCATE 7,22:PRINT"You":LOCATE 8,24:PRINT"Got":LOCATE 10,24:PRINT S
6013 LOCATE 14,15:PRINT"Out":LOCATE 15,17:PRINT"Of":LOCATE 17,16:PRINT T
6014 LOCATE 1,15:PRINT"Historoscore"
6015 LOCATE 2,15:PRINT"------------"
6016 LOCATE 22,6
6024 PRINT"Would you like to play again?"
6025 X$=INKEY$:IF X$="y" OR X$="Y" THEN 30
6026 IF X$="n" OR X$="N" THEN RUN"menu2
6028 GOTO 6015
7000 CLS:Y=100:Z=0
7002 FOR X=50 TO 1 STEP -1
7003 Y=Y+2
7004 Z=Z+1
7005 CIRCLE(150,Y),X,Z
7006 IF Z=3 THEN Z=0
7007 NEXT
7009 T=T+1:S=S+1
7010 LOCATE 1,13:PRINT"You're right!!"
7011 FOR X=1 TO 2000:NEXT X
7012 IF SL=1 THEN RETURN 105
7013 IF SL=2 THEN RETURN 1005
7014 IF SL=3 THEN RETURN 2005
7015 IF SL<1 THEN PRINT"sl<1 ,,,aaaaaaaaahhhhhhhh!!!!!!":END
7016 IF SL>3 THEN PRINT"sl>3,aaarrrrrrgggghhh":END
8000 CLS
8001 T=T+1:LINE(70,160)-(120,199)
8002 LINE(120,199)-(200,40)
8003 LOCATE 10,1:PRINT"Sorry, the correct"
8004 LOCATE 12,1:PRINT"answer is..."
8005 LOCATE 14,1:RETURN
10000 CLS:PRINT"fgsghlg"
50000 RUN"error
```
{% endraw %}

## MANUAL.DOC

{% raw %}
```
















                            The Register (tm)



             Copyright (c) 1986,1987   All rights reserved



                         Denis L. Latkowski 
                        417 Tantallion Court 
                     Baltimore, Maryland  21212 
                            301-435-1544 


                         TABLE OF CONTENTS

     SYSTEM REQUIREMENTS .............................   4
     GENERAL INFORMATION .............................   4
     FILES ON DISK ...................................   5
         INSTALL.COM .................................   5
         GRADE.COM ...................................   5
         GRADE.000 ...................................   5
         READ.ME .....................................   5
         MANUAL.DOC ..................................   5
         NAMES.11 ....................................   5
         GRADES.111 ..................................   5
         HARD.BAT ....................................   5
         FLOPPY.BAT ..................................   5
     IMPORTANT NOTE ..................................   5
     GETTING STARTED .................................   6
         batch files .................................   6
         INSTALL.COM .................................   6
             TEACHER'S NAME ..........................   7
             SCHOOL NAME .............................   7
             SCHOOL PHONE # ..........................   7
             ABSENCE POLICY ..........................   7
             MINIMUM PASSING GRADE ...................   7
             PRINTER SELECTION .......................   7

             AUTOEXEC.BAT file .......................   7
         Required files ..............................   7
     LEVEL ...........................................   7
     QUARTER .........................................   8
     CLASS NAME ......................................   8
     OPTIONAL START UP ...............................   8
     information line ................................   8
     MAIN menu .......................................   8
         move along the menu .........................   8
         menu and submenu selections .................   9
         ESC..........................................  10
     grade book ......................................  10
     disk activity ...................................  10
     RAM disk ........................................  10
     ERROR MESSAGES ..................................  10
     MENU INFORMATION ................................  11
         Names .......................................  11
             Create  --  n / c .......................  11
             NAME ....................................  11
             COUNSELOR ...............................  11
             HOMEROOM ................................  11
             PHONE # .................................  11
             NOTE ....................................  11
             "dummy" students ........................  11
         Add to, Delete from  n / a  OR  n / d .......  11
         cHange  -- n / h ............................  12
             number ..................................  12
             CHANGE MENU .............................  12
             HINT ....................................  12

         Print  -- n / p .............................  13
         Show  -- n / s ..............................  13
         phoNe # -- n / n ............................  13
     Grades ..........................................  13
         three categories ............................  13
         long list ...................................  14
         --- .........................................  14
         MAKE NO ENTRY ...............................  14
         Create  --  g / c............................  14
             50% grades ..............................  14
             30% grades ..............................  14
             20% grades ..............................  14
             absences ................................  14
         Add to  --  g / a ...........................  15
             NOTE ....................................  15
         cHange  --  g / h ...........................  15
         checK -- g / k ..............................  16
     Quarter .........................................  16
         Compute --  q / c ...........................  16
             check for ...............................  16
             failures ................................  16
             NOTE ....................................  16
         Print  --  q / p ............................  16
             top of the page .........................  16
             cancel ..................................  17
             error message ...........................  17
             EXAMPLE .................................  17
     Print ...........................................  17
         Print reports --  p / p .....................  17
             message .................................  17
             individual messages .....................  18
             EXAMPLE .................................  18
         Name listing  --  p / n .....................  19
         nuMber listing  --  p / m ...................  19
         SPOOLING PROGRAM ............................  19
     Finals ..........................................  19
         Exams -- f / e ..............................  19
             1/5 (20%) of the final grade ............  19
             20% of the 4th quarter grade ............  19
         No exams  --  f / n .........................  19
         FINAL GRADE .................................  20
         summary .....................................  20
     Level ...........................................  20
         change Level  --  l / l .....................  20
         change Dir  --  l / d .......................  20
             CAUTION .................................  20
         * save Names  --  l / n .....................  21 
         * save Grades --  l / g .....................  21
             CAUTION .................................  21
     Miscellaneous ...................................  21
         Erase file  --  m / e .......................  21
         Rename file  --  m / r ......................  21
         Directory  --  m / d ........................  21
         eXit  -- m / x ..............................  21
     Help  h / ??? ...................................  22
     overlay file GRADE.000 ..........................  22

     EXAMPLES OF PRINTOUTS ...........................  22
         Names / Show (screen only) ..................  22
         Names / phoNe #  (screen only) ..............  22
         Compute / Print quarter .....................  23
         Compute / Stats .............................  23
         Print / Print Reports .......................  24
         Progress and Deficiency .....................  24
         Print / print Name ..........................  25
         NOTE ........................................  25

     HINT #1 (RAM disk) ..............................  25
     HINT #2 (printer codes) .........................  27

     (Need IBM compatible printer for sample screens)
     SAMPLE SCREENS ..................................  file SAMPLES.DOC
         Information Line and Main Menu ..............  28
         Menu and Submenus ...........................  28
         Level / Level ...............................  30
         Names / Create ..............................  30
         Names / cHange ..............................  31
         Grades / Create  (screen one) ...............  31
         Grades / Create  (screen two) ...............  32
         Finals / Exams  (1/4 4th quarter) ...........  32
         Miscellaneous / Directory ...................  32
         Print / Progress reports (indiv message) ....  33
         Error message (printing) ....................  33
         full screen (Level / Level) .................  34


page 4

                            The Register 

                         Denis L. Latkowski 
                        417 Tantallion Court 
                     Baltimore, Maryland  21212 
                            301-435-1544 

                      SYSTEM REQUIREMENTS 

                      PC/XT or true compatible 
                      (untested on AT) 
                      DOS 2.xx or higher 
                      1 DSDD drive 
                      192 K 
                      mono or color graphic card 
                      RGB monitor recommended 
                      printer (dot matrix recommended) 
                         (IBM compatible to print last 5 pages
                          of manual; otherwise, any ASCII printer) 

                   GENERAL INFORMATION 
 
Written in Turbo Pascal (tm of Borland International Inc.), version 3.0 (IBM (tm
International Business Machines)).  My thanks to Borland for their menu system
and screen routines from their product "Turbo Editor Toolbox."

Written by a teacher for teachers  and tested in the classroom.   
 
Grades are entered as NUMBERS only.  The program is not prepared to work with
letter grades.  If you work with letter grades, you will have to translate the
numeric averages into letter grades yourself. 

page 5

                             FILES ON DISK  
     INSTALL.COM .............  installation program; run this first   
                                before any other program; will create
                                file GR.ADE to be used by the main program.  
     GRADE.COM ...............  main grade program 
     GRADE.000 ...............  overlay file that must be in current  
                                directory or subdirectory for HELP to  
                                be available  
     READ.ME    ..............  information on program and its use 
     MANUAL.DOC ..............  manual
                                can use your word processor to print
                                this file out since it's stored on disk
                                in ASCII format, or use the TYPE       
                                command to send it to the screen or add 
                                > PRN for printing (must have IBM or
                                compatible printer for last 5 pages)
                                TYPE MANUAL.DOC > PRN                           
     NAMES.11 ................  list of student names and information  
                                for you to learn the program (sample) 
     GRADES.111 ..............  list of grades for above students
     HARD.BAT.................  batch file to install on HARD disk
     FLOPPY.BAT...............  batch file to install on FLOPPY disk

       
                         IMPORTANT NOTE 
     
It may take some getting used to, but grades must be entered as three digit
numbers which will require that you add a 0 at the beginning of a two digit
number; therefore, an 80 would be entered as 080, 66 as 066, 0 as 000.  Secondly
these three-digit grades are entered in one long stream without spaces.  In most
cases (except for 100), all you have to do is add 0 to the beginning of a grade.

Example,
      
        GRADES:   76    55    0    99    92    78    55  100 
        BECOME:  076   055  000   099   092   078   055  100 
 
        ENTERED AS:   076055000099092078055100 
 
You will find that entering grades in one long stream to be easier since you
won't have to press return after each grade but only at the end of one line. 
You must therefore be careful to enter a zero (0) as the first digit, unless the
grade is 100 -- don't add anything.  If a student's grade computes at higher
than 100, you have probably entered a digit other than zero.  You will be warned
whenever an average computes to over 100.  Use the Grade / cHange program to
check if an error has been made.  (Remember, a zero (0) must be entered as 000.)


page 6  
                      GETTING STARTED 
 
1. DO NOT USE ORIGINAL DISK TO WORK FROM. 
      
Format a new disk with the FORMAT B:/S/V command for a 2 drive system.  At the
volume name prompt, type in 'GRADES'.  THEN put the original disk in drive A:
and the newly formatted disk in drive B:. 
      
   Type COPY A:*.* B: and press return.  This will give you a working
   copy of the program and files. Store the original disk. 

   If you are working with a hard disk, you can also run the program   
   from the hard disk.  Create a subdirectory on the hard disk called
   \GRADE.
       
              MD C:\GRADE            (assuming hard disk is C:) 
       
   Then copy the following files to the \GRADE subdirectory: 
                GRADE.COM 
                GRADE.000 
                GR.ADE 
              Put disk in drive A: 
              To copy files to hard disk: 
     
              COPY  A:\GR*.*   C:\GRADE
              C:
              CD GRADE
              INSTALL    (will create file GR.ADE)

There are two batch files provided for installation of the program.  The file
HARD.BAT will install all necessary programs on your hard drive in a directory
called \GRADE, will run the INSTALL program, and then run the GRADE program. 
   USAGE:    hard [hard drive letter:] <RET>  <-- note colon
   EXAMPLE:  hard d: <RET>

The file FLOPPY.BAT will install the program on a disk in drive B: with the
original in drive A:.  After the necessary files have been copied to drive B:,
you will be prompted to put the copy disk in drive A: and the INSTALL program
will be run. 
 
2.  If working from a floppy, place the copy in drive A: and type INSTALL.  The
INSTALL.COM program will prompt you for information to be used in the GRADE
program.  If using a hard drive, change to the GRADE directory ( CD C:GRADE ),
and then run INSTALL. 

page 7 
     You will be prompted for: 
      
     1.  TEACHER'S NAME  --  limited to 25 characters 
     2.  SCHOOL NAME     --  limited to 35 characters 
     3.  SCHOOL PHONE #  --  limited to nnn-nnnn 
                             (n is a number from 0 to 9) 
     4.  ABSENCE POLICY      (explained fully when INSTALL is run) 
                             Note: if your school has no such 
                             absence policy, enter the number 99. 
     5.  MINIMUM PASSING GRADE   --  a number (usually 70) 
     6.  PRINTER SELECTION  --  select yours if listed  
         NOTE SMALL AND CAPITAL LETTERS! 
         (if your printer is not listed,  select the NOT LISTED     
          option and enter the ASCII codes for ELITE print.) 
 
Before running the GRADE program, you must remember when first starting your
computer to either set the correct TIME and DATE yourself or to have it done in
the AUTOEXEC.BAT file.  This information is used by the program in its printouts
and for screen display.  If you do not set the correct date and time, your
printouts will contain a date that is not current and the wrong time and date
will appear on the screen.      
     
3.  Running the GRADE program 
 
    Required files: 
 
           GRADE.COM         main program 
           GRADE.000         overlay HELP file 
           GR.ADE            file created by INSTALL program
    (GRADE.000 is not required for the program to run but is required
    for HELP to be available.)
         
Type GRADE and press return.  After "The Register" logo and copyright are
displayed, the screen will clear and you will be prompted for the following
information:
 
          LEVEL         2 characters
          QUARTER       1 character
          CLASS NAME    limited to 20 characters
 
   LEVEL: 
       Enter 2 digits, letters, or combination. 
       This will allow you to distinguish between classes. 
      
1.  1st class is 11th grade:  LEVEL might be < 11 > or < 01 > or < AA >
2.  4th class is 8th grade:   LEVEL might be < 08 > or < 04 > or < DD >
3.  all classes are 12th grade:  LEVEL might be < 12 > or whatever

#3 assumes you are entering ALL names in one list, but not to exceed
150 names (in registered version).

page 8 

QUARTER: 
    Enter the quarter you're working on -- 1, 2, 3, or 4.  A GRADES  
    file is created and used EACH quarter; so at the end of the year,  
    you'll have four different GRADES files.  You may erase the file at 
    the END of each quarter if you want.  Recommend waiting until end  
    of year. The program will accept ONLY 1, 2, 3, or 4.   
 
CLASS NAME: 
    Enter the name of the class you're teaching. 
    < English 4 >   < Chemistry 3 >   < Algebra >  < Cabinet Making > 
 
If you change to another level and are prompted for a new CLASS NAME, you can
simply press return if the name is the same, instead of retyping it. 

NOTE: The files created by the program are named this way:             
     After entering LEVEL as  09  and QUARTER as  1   
       student file = NAMES. + [LEVEL] = NAMES.09 
       grade file = GRADES. + [LEVEL + QUARTER] = GRADES.091  
      
OPTIONAL START UP

You can also start the grade program by including LEVEL, QUARTER, and CLASS on
the DOS prompt line after the name of the program GRADE. 

  EXAMPLE:    grade 11 1 English 1 <RET>
              grade aa 2 Chemistry 3 <RET>
  Each MUST be separated by a space; the class name is limited to TWO words
  only! 

The screen will clear and an information line will appear at the top of the
screen, consisting of the following information:
 
   -DIR:           [e.g.  DIR: A:\ ]    current directory or subd 
   -CLASS:         [e.g.  CLASS: Chemistry 3 ]  current class
   -L:             [e.g.  L: 11 ]       current LEVEL 
   -Q:             [e.g.  Q: 1 ]        current QUARTER 
      
   e.g.:    -DIR: A:\   -CLASS: Chemistry 3   -L: 11  -Q: 1 
 
The MAIN menu will then appear with the first, NAMES, highlighted:

  ----------------------------------------------------------------------
  |[Names]  Grades  Compute  Print  Finals  Level  Miscellaneous  Help |
  ---------------------------------------------------------------------- 
 
You can move along the menu and make a selection in any of three ways:
   1.  Use the LEFT or RIGHT arrow keys on the right of the keyboard to 
       move  along the menu.  When your selection is highlighted, press 
       return. The submenu options will then appear.
   2.  Use ^D to move RIGHT or ^S to move left.  See #1 above to        
       continue.
   3.  The  easiest is to simply press the CAPITAL letter in the
       selection you desire. For example, if you want to use the Print
       option, press P and the submenu will appear immediately. You do not
       have to press the CAPITAL letter; the small letter will be sufficient.

page 9

The complete menu and submenu selections are: 
 
      Names   Grades  Quarter   Print     Finals   Level    Misc   Help
        |        |     |          |          |       |        |     | 
      Create     |     |          |          |       |        |     | 
      Add to     |     |          |          |       |        |     | 
      Delete     |     |          |          |       |        |     | 
      cHange     |     |          |          |       |        |     | 
      Print      |     |          |          |       |        |     | 
      Show       |     |          |          |       |        |     | 
      phoNe #    |     |          |          |       |        |     |
              Create   |          |          |       |        |     | 
              Add to   |          |          |       |        |     | 
              cHange   |          |          |       |        |     | 
              checK    |          |          |       |        |     | 
                    Compute       |          |       |        |     | 
                    Print quarter |          |       |        |     | 
                    Stats         |          |       |        |     |
                              Print reports  |       |        |     | 
                              nuMber listing |       |        |     | 
                              Name listing   |       |        |     | 
                                           Exams     |        |     | 
                                           No exams  |        |     | 
                                               change Level   |     | 
       Moving along the submenus:              change Dir     |     | 
       Use UP or Down arrow keys and then      * save Names   |     | 
         press RETURN                          * save Grades  |     | 
       Use ^X for down or ^E for up and then             Erase file | 
         press RETURN                                    Rename file| 
       Press the CAPITAL letter in the                   Directory  | 
         the selection you desire                        eXit       | 
                                                                Names 
       To select the 'Print Reports' option                     Grades
       under 'Print', the easiest way is to                     Compute
       press p in the MAIN menu and then p                      Print
       in the SUBMENU. You do not have to                       Finals
       type capital letters!                                    Level
                                                                Misc 
                                                                Keys 

page 10 

NOTE: Once you make a selection and a window opens, you can cancel the option by
pressing ESC (the escape button) at the first prompt.  This way, if you make the
wrong selection, you can back out of it. 
 
The program is designed to be used in conjunction with your grade book.  After
you have entered the student information in your book, somewhere, sometime,
student names are added or they are changed, which usually makes the book
resemble a mass of colored lines or a calamity. 

After filling out your record book, you can begin entering information using the
GRADE program.  You will need STUDENT'S FULL NAME, COUNSELOR, HOMEROOM, and
PHONE NUMBER (optional).  After entering names, when the time comes, you can add
new students or delete any of the old students simply and effortlessly. 
      
You will notice disk activity each time you start from a submenu and also when
you leave a submenu. You do not have to save your files yourself. The program
automatically does this so the files are constantly updated and will contain 
the latest information. For this reason, I recommend using a RAM disk drive.
 
ERROR MESSAGES 
 
If you make an error either in data entry, changing to a directory or
subdirectory that doesn't exist, an error line will appear at the very top of
the screen replacing the information line.  After reading the message, press ESC
(the escape button) and the information line will reappear and you can continue
with the program,
 
     File does not exist. 
     Read error or directory not found 
     Write error 
     Invalid Directory Path 
     Unexpected end of file 
     Printer error; printing cancelled. 
     No entries at all!
     Error in GRADE entry -- 3 digits each -> 75 = 075 
     Entry not valid (ESC, RETURN); try again. 
     GRADE file missing. Use Grade / Create. 
     Overlay GRADE.000 missing or bad. HELP turned off. 
     NAMES file missing. Use Names / Create. 
     Maximum entries (20). Can add no more. 
     All choices are NO. Cancelling GRADES entry. 
     WARNING! 8 entries for grades.     
     Final exam grade over 100. 
     Disk write error occurred. 
     Directory is full. 
     File has disappeared. 
     No GRADES for [student name]
     Grade average wrong. Check GRADES for [student name]


page 11 

MENU INFORMATION  
I  Names 
 
1.  Create  --  n / c 
first program that must be used. You will be prompted to enter the full    
name, the counselor,the homeroom, and the phone number of each student in     
your class or classes.   
      
         NAME -- maximum of 25 characters, spaces, punctuation, etc. 
         COUNSELOR -- maximum of 10 
         HOMEROOM -- maximum of 4 
         PHONE # -- maximum of 8   (optional entry)
      
When you're finished entering all the names, enter the number <1> when prompted
for FULL NAME and the data will be recorded on disk. 
  
NOTE: If you attempt to Create a names file that you've already worked on, the
program will prompt you if you wish to continue or not.  If you answer y (YES),
the file you've worked on WILL BE ERASED to make room for the new one.  The
prompt is a safety catch to make sure you don't mistakenly erase a file. 
 
HINT: If you're going to enter all your classes at one time, I recommend
entering two "dummy" students at the end of each class.  Enter '----' for each
entry.  When you add students to your grade book, they are always entered at the
bottom of the list.  Without these dummy entries, you would have to enter them
at the very end of this long list; so when it comes time to enter grades, you
have to remember as you're following your grade book that the new students will
be at the end of the computer program's list and not where they appear in your
gradebook. 
 
When a student is added to your class, use the Names / cHange option to replace
the '----' with the student's correct information.  If you leave the '----'
entries unchanged, be forewarned that the statistics given at the end of each
printout will be slightly inaccurate since the computer will see '----' as a
real student and include its grades in statistical computations.  You can always
delete these "dummies" before running any of the print options; but once
deleted, you cannot add them BETWEEN CLASSES. 
         
2, 3.  Add to, Delete from  n / a  OR  n / d 
You MUST have entered grades for students BEFORE using these options.  To enter
grades, press g / c.  AFTER entering grades, you may then ADD names or DELETE
names from your class list.  After using either of these options, you should
PRINT out a new listing (n / p).  The added students will be placed at the end
of your current students. 


page 12
4. cHange  -- n / h 
Use this option to correct any information about a student.  You may have
misspelled a name; counselor or homeroom may have changed.  You can change or
correct the name, counselor, homeroom, or any of the four quarter grades. 
         
When the window opens, you will be prompted for the number of the student to
change.  Consult your printed list of names and enter the number you want to
change.  If you enter a number larger than the number of students in your class,
the entry will be refused and the computer will wait for a new entry.  DO NOT
USE THE THREE DIGIT ID NUMBER. 
         
If you make an error and select this option by mistake, cancel the option by
pressing the ESC button.  This will work only the first time the window opens. 

   CHANGE MENU:
             p - phone
             n - name 
             c - counselor 
             h - homeroom 
             1 - quarter 1 
             2 - quarter 2 
             3 - quarter 3 
             4 - quarter 4 
 
        Enter NUMBER to change:  1   <-- default #
 
Using these options for change, press the letter/# you desire and enter the new
information.  The corrected information will replace the old and you will be
prompted to make another change for the SAME student.  Check that you entered
the information correctly.  If you did not, press y and redo.  If there are no
further errors, press n and you can make corrections for ANOTHER student.  If
you have no further corrections, press n again and the file will be updated to
disk. 

When you request to change the name or the counselor, you will be given the
current spelling to correct.  DO NOT TYPE ANY LETTER AT THIS POINT.  If you do,
the entire line will be erased.  Use the left arrow (or ^S) to move to the
error, delete the error, and then type in the correct information; finally,
press RETURN. 
 
HINT: If a student has been added to your list in, say, the third quarter, you
can use this option to enter the missing QUARTER grades which the computer will
assign as zeroes. 

page 13 
5. Print  -- n / p 
Use this option to print out a listing of student information.  The information
will be:
      
        #    NUM     NAME      COUNSELOR     HOME   PHONE #
 
        #      a number starting at 1 and counting up  -- you will need
               this number for cHange, Delete options.   
        NUM    student ID number,  used for printed lists for posting. 
        NAME   --  COUNSELOR  --  HOME --  PHONE #  list student information. 
 
6. Show  -- n / s
When this option is used, the screen will clear and you will be given a list of
your students, their counselors, homerooms and four quarter grades.  The CURRENT
quarter grade is highlighted.  After 22 names are presented, the screen is
frozen for your inspection until you press any of the letter keys. 

7. phoNe # -- n / n
This option will give you a listing on the screen of number, student ID number,
name, counselor, homeroom, and phone number for each student in your NAMES file.


II  Grades 
 
The program uses three categories of grades: 
        50%           30%           20% 
     (tests)      (quizzes)     (homework)
 
 50%  -- the average of these grades will be 50% of the FINAL quarter 
 30%  -- the average of these grades will be 30% of the FINAL quarter
 20%  -- the average of these grades will be 20% of the FINAL quarter
 
          50% grades           30% grades            20% grades 
               75                   89                   25      
               88                   77                   91 
              100                   66                  100
               86                   88                 -----  
               98                 ----- 
              ----- 
     total    447 (/ 5)            320 (/ 4)            216 (/ 3) 
     avg      89.4                 80.0                 72.0  
       * .5 = 44.7          * .3 = 24.0          * .2 = 14.4       
     FINAL average =  44.7 + 24.0 + 14.4 = 83.10 
 

page 14
        
***************************************************************** 
*     Grades are entered in one long list WITHOUT SPACES.       * 
*             Each grade MUST BE 3 digits.                      * 
*                                                               * 
*    Example:      If you have the following grades,            * 
*        25    98   88   0  100   34   76   Each grade becomes  * 
*       025   098  088 000  100  034  076                       * 
*   Enter the above 7 grades as :   025098088000100034076       * 
*              Press RETURN to continue entering.               *      
***************************************************************** 

NOTE: If a student has NOT done an assignment use three dashes (---) for the
grade.  This will make it easier if you have to change it when and if the
student makes it up.  The computer will automatically count any grade entered as
'---' to be a zero (0) until and unless you change it.  When entering grades,
the program will ONLY accept the numbers 0 to 9 and the dash ( - ).  The dash is
equivalent to an Incomplete grade that counts as a zero if not made up. 
     
Remember that you must use three dashes '---' and you may NOT mix the dash and
numbers (e.g.  '-89'; this the computer will see as a 0.)
 
If you do not want a grade or grades to count at all for a student, MAKE NO
ENTRY AT ALL.  The computer uses the grades entered to compute the average; so
it matters not if one student has fewer grades than the rest. 
 
1. Create  --  g / c

     Enter 50% grades?
     Enter 30% grades?
     Enter 20% grades?
     Enter absences?
 
After entering student information, use this to enter the grades you have.  You
will be asked first, if you want to enter 50%, 30%, 20% grades, or absences. 
Simply press y for YES or any other LETTER for NO.  You do not have to record
all of the categories at one time.  You will NOT be allowed to use the Quarter /
Compute option if there are no entries in any of the grade categories (50, 30,
20) since that would cause division by zero, not allowed in mathematics nor by
many computers. 
 
Enter absences to date; the computer will keep a cumulative total for you.  If
you enter NO for absences, you must remember the NEXT time to enter absences
from the LAST time you recorded absences. 


page 15
 
If you make an error entering grades, you can either use the backspace key to
erase everything up to the error and then retype, or use the LEFT arrow key to
go back to the first character of the error, press the DELETE key three times to
erase the error, then type in the correct number, press the RIGHT arrow to
return to the end of the grades and then continue. 
     
It might be to simpler to take note of the student you made the error for,
continue entering information, and when finished, using the Grade / cHange
option to correct. 
 
 2.  Add to  --  g / a 
After entering grades for your students, you can add more grades to the list at
any time.  At the questions of entering 50%, 30%, and 20% grades, or absences,
answer y or n.  You will then be asked to enter the new grades. 
     
Notice that the space to enter further grades is smaller.  This way you will
know how much room you have left for new grades.  Remember, you are not allowed
to enter more than 22 grades in each category. 
      
NOTE: The program will SKIP any name that has the maximum grades (22).  You must
be aware of those names that already have 22 grades.  You will be warned that a
student has the maximum grades but not in which category. 
 
 
3.  cHange  --  g / h 

You can change, correct, or even add to the grades already entered.  You will be
asked for the NUMBER to change.  Enter the number of the student you want to
change.  Do NOT use the three digit student ID number.  Use the printed list
number; if the student is the fifth name on the list, enter 5 and then press
RETURN.  You'll be shown the number of absences so far.  To correct, press y,
and you will be prompted for the new information.  Then you will be shown the
50% grades.  If you want to change any, press y. 

DO NOT ENTER ANY NUMBER at this point! If you do, the entire line will be
erased.  RATHER, use the left arrow key to move, type in the addition, or use
the DELETE key to erase and then type in the new grade.  The other grades will
move over to make room.  Or use the backspace key to erase to the left; THEN
make any changes.  Press RETURN when you're finished.  You do NOT have to return
the cursor to the end of the line.  Simply make your changes and press RETURN. 
Follow the same procedure for the 30% and the 20% grades. 


page 16

You will then have the chance to correct another student or to end.  If you have
no further changes, the grades will be recorded. 
      
WordStar(tm) users can also use ^S  and ^D to move right or left. 

4.  checK -- g / k 
Use this option BEFORE computing the grade averages to make sure that each
student has at least one entry for each of the three categories of grades.  You
will be informed on the top line of the students who do NOT have an entry.  This
allows you to check only those students who are missing a grade. 

III  Quarter  
1.  Compute --  q / c 
The program will automatically compute your quarter grades based on the entries
made for each student.  When finished, you will be shown a list of your students
and their current quarter grades highlighted.  If a quarter grade computes to
over 100, you will be notified at the top of the screen; you'll be given the
name of the student; press ESC to continue computing.  The grade is NOT changed.

You probably entered a grade incorrectly unless extra credit work sent the
average over 100.  You should check that student's grades. 

You will then be asked if you want the program to check for failures because of
absences.  If you do NOT want the program to check, simply press n for NO.  If
you do want to check, you will be prompted only for those students whose
absences exceed the limit you set in the INSTALL program.  Press y if you want
the student to fail; any other letter will leave the grade untouched.  If you do
press y, the program will subtract 5 points from your school's minimum grade. 

     e.g.   quarter average is  77.1 
            student's been absent 11 times 
            school policy is set at 8 absences 
            school minimum passing grade is 70 
                    
  If you press y, the student's grade will be 65   (70 - 5 = 65) 
 
NOTE: If there are NO grades for any of the categories (e.g., 50%), the program
will stop COMPUTING or PRINTING REPORTS at that point.  Therefore, make sure you
have entered at least one grade for each student before selecting Compute /
Compute OR any of the Print options. 
 
2.  Print  --  q / p 
Make sure your printer is turned on and then press 'y' to print.  If you use a
print spooling program, you will not have to wait very long to regain use of
your computer.  Make sure your paper is set at the top of the page since 50
names will be printed on a single sheet. 


page 17

If your printer is not ready or you change your mind, press <ESC> or any letter
EXCEPT 'y' to cancel the printing. 
 
If your printer isn't turned on, and you give the go-ahead ('y') to begin
printing (we're all familiar with 'Murphy's Law'), DOS may interrupt the program
with its "Abort,Retry,Ignore" message even though there is a built in error trap
for this situation If the printer is turned off when you ask the program to
print, an error message should appear at the top of the screen almost
immediately.  If, however, the printer has been turned on but is off line when
the call to print is made, it may appear that the program is suddenly doing
nothing for a long period of time.  This is because DOS makes five attempts at
printing before giving up and giving the "Abort message." If the wait seems
unusually long (over 15 or 20 seconds), try waiting a bit longer.  If nothing
happens, you will probably have to reboot. 
     
If you get the "Abort,Retry,Ignore" message, press 'A' for Abort if your printer
is not on line or turned on.  If the printer was off line, turn it on and then
press 'R'.  To get the screen back to normal, press n / s.  It is also possible
that this may halt the program or freeze the computer; so if you're planning on
printing any information, be sure the printer is ready and on line BEFORE
running the program. 

At the end of the printout, you will be given a summary of the number of grades
given in a set range, the percent, and the total students. 

EXAMPLE:  
 
     QUARTER 1 AVERAGES    78.1    0.0    0.0    0.0 
     QUARTER 1 count 
      90 -- 100    2    7.14% 
      80 --  89    4   14.29
      70 --  79   11   39.29 
      60 --  60    9   32.14 
      below 60     2    7.14
      total students = 28 
  
3. Statistics  --  q / s
This will print out on the SCREEN the statistics given directly above.  This is
provided for a quick reference as to how the students are doing as a group
without having to print anything out. 
 
 IV  Print 
 1.  Print reports --  p / p 
     Before printing progress / deficiency reports, you will be asked: 
      a.  "Do you want a message to appear on ALL reports?" 
          Answer y if you have a message that you want all the parents
          to be aware of, e.g., date a novel must be read, homework
          due,etc.   

page 18
             
         You are limited to a total of 76 characters/spaces for your
         message. Do not add a period at the end since the program
         will automatically provide the period. Therefore, you cannot
         ask a question in this message area. 
 
         The long, highlighted line is the space that you have for the 
         message. You will be able visually see how much space is left 
         while you're typing. 
 
 b.  "Do you want individual messages printed?" 
       Answer  y  if you do.  You will be prompted for each student
       in your class.  If you have a message, press y and enter it. 

       Each individual message will begin with the student's 
       first name;  YOU DO NOT HAVE TO ENTER THE NAME.  The program
       will do it for you. You are limited to 76 characters.
 
     EXAMPLE:  for John Smith, you pressed y to enter a  message. 
        "John" will automatically appear above the space to type 
             
         You might then enter: 
             
         [has been doing very well on tests but poorly on homework] 
             You would have typed everything in brackets above. 
 
   John has been doing very well on tests but poorly on homework. 
                 The above will appear on the report. 
 
If a student's average is one point above your minimum for passing, say, 71, you
will get one copy of the progress report.  If the average is below that, you
will receive two copies of the deficiency.  In either case, the student can take
the one home, have his/her parent(s) sign it, and return it to you.  In the case
of a deficiency, the second copy is for your records, for the counselor, etc.. 
 
The computer takes whatever number you entered in the INSTALL program for the
absence policy, halves the number and adds one to it, e.g.  8 entered; (8/2) + 1
= 5.  In this section for printing, if a student has that number of absences or
above (5 or above), a warning will be printed that excessive absence can result
in failure. 
 
Not all comments made by the program are negative.  If a student has above a 90
average, the message "[FIRST NAME] should be commended for such excellent work."
will be printed.  If a student has zero absences, the message "[FIRST NAME]
should be commended for such excellent attendance." will be printed.  You can
also add your own positive or negative statements in the individual message. 


page 19
 
2.  Name listing  --  p / n 
    This will produce a listing for you to use for parent conferences
    or for your own information.  Each student will have four lines 
    of information.   
a.  full name . . 4 quarter grades . .absences for current quarter 
b.  listing of all 50% grades .. average of grades .. points (avg * .5)
c.  same as above for 30% grades   -- points (avg * .3) 
d.  same as above for 20% grades   -- points (avg * .2) 
           
At the end of the list, you will be given the average of all the QUARTER grades
for each quarter. 

3.  nuMber listing  --  p / m 
The same information as above will be presented EXCEPT for one item.  Instead of
the students' names being used, the 3 digit ID numbers will be used.  Therefore,
you can post this list in the classroom for the students to inspect.  Of course,
you must give each student his/her number beforehand. 
 
I STRONGLY RECOMMEND USING A SPOOLING PROGRAM SINCE THESE PRINTOUTS CAN TAKE A
VERY LONG TIME -- the more names, the longer.  I also recommend using a dot
matrix printer since a daisy wheel can take forever to print this much material;
however, don't use the NLQ mode since that will also increase the amount of time
to print. 
 
V  Finals 
1.  Exams -- f / e 

You will be asked to enter the exam score for each of your students.  If, by
chance, a student has earned a zero on the exam, simply press return.  When you
have entered all of the scores, you will then be asked how the computer should
average the final grade for the year:
 
    <1>  the final exam will count 1/5 (20%) of the final grade.
    FINAL GRADE =
          (quarter 1 + quarter 2 + quarter 3 + quarter 4 + exam) / 5 
 
    <2>  the final exam will count 20% of the 4th quarter grade.
          quarter 4  = (quarter 4 * .8) + (final exam * .2)
    FINAL GRADE =
          (quarter 1 + quarter 2 + quarter 3 + quarter 4) / 4 
 
After you press 1 or 2, the computer will then compute the final averages.  YOU
then determine the final grades -- see next page. 
 
 2. No exams  --  f / n 
    The program will compute the final average: 
    FINAL GRADE =
     (quarter 1 + quarter 2 + quarter 3 + quarter 4) / 4 
 
    YOU will then determine the final grade for each student. 

page 20

VI  FINAL GRADE 
The program will now give you the following information for EACH student:
 
     a  quarter grades ***
     b  final exam grade (if any) 
     c. final average 

*** If you elected the final exam to count 20% of the fourth quarter grade, the
fourth quarter grade will INCLUDE the final exam grade. 

You now decide what final grade will be given each student.  Type in the final
grade, press RETURN, and move on to the next.  Each time you press RETURN, the
information is sent to the printer for a hardcopy.  Therefore, you must make
sure your printer is on and press any LETTER at the printer prompt.  Pressing
ESC will cancel the selection and NO PRINTING will be done. 
 
The final exam grades and the final grades will NOT be saved on disk.  You will
be given a printed list of this information. 
 
At the end of the printout, you will be given a summary of the final grades
given:
 
       FINAL GRADES AVERAGE    73.2 
       FINAL GRADES count 
        90 -- 100    2    7.14% 
        80 --  89    4   14.29
        70 --  79   11   39.29 
        60 --  60    9   32.14 
        below 60     2    7.14 
        total students = 28 
 
 
VII  Level 
1.  change Level  --  l / l
Use this option to change to a different class for entering information. 
 
2.  change Dir  --  l / d 
Use this option to change to a different drive, subdirectory, etc. 
 
CAUTION: this will NOT create a subdirectory for you.  The subdirectory MUST
have been created before using this option. 
 
If the change is successful, all further disk activity will occur in the new
directory.  If you need a NAMES and/or GRADES file, you must make sure they are
already in the new directory or else create them.  The file GRADE.000 MUST be in
the new directory/drive or the program will ignore any HELP calls if it cannot
find the file in the new drive/directory. 


page 21  
 3.  * save Names  --  l / n  / * save Grades  --  l / g 
 
     CAUTION: USE THESE OPTIONS ONLY IF THERE IS A DISK WRITE ERROR.   
      
     It's possible your disk might be full and there's no room for a  
     NAMES or GRADES file you just created.         

     DON'T PANIC. Follow these steps: 
 
     a. check directory of disk  --  m / d 
     b. note any file(s) you can erase from the disk. Press any key. 
     c. press m / e  to erase one file at a time. 
     d. THEN  use this option -- information is still in memory and 
        this MAY save the NAMES or GRADES file or possibly both. 
 
     If there is a write error again, try inserting a BLANK, FORMATTED
     disk in the drive you're using, and try this option again.  If
     this doesn't work either, you'll have to begin anew. Sorry.   
     
     DO NOT USE THIS OPTION IF THERE IS NO WRITE ERROR. 
     Files are constantly and automatically saved. 
 
VII  Miscellaneous 
1. Erase file  --  m / e 
This will allow you to erase a file on disk.  You will be asked if you are sure
if you want the file erased.  You will be told if the erasure was successful OR
You will given an error message if there is no such file. 
 
2. Rename file  --  m / r 
This will allow you to rename a file on disk.  You will be prompted to enter the
old file name and the new.  If the renaming was successful, you will be returned
to the main menu; otherwise, you will be given an appropriate error message. 
 
3. Directory  --  m / d 
This will give you a directory listing for any drive you specify.  the wild
cards '*' and '?' may be used. 
 
4. eXit  -- m / x 
Use this when you're finished and wish to quit the program and return to DOS. 


page 22 

VIII  Help  h / ??? 
          
This is the HELP facility built into the program which can be accessed only
through the main menu.  All of the help screens are contained in the overlay
file GRADE.000 which must be on the directory, subdirectory, drive you're
working on.  If this file is not, you will be given an error message that the
file is missing and all subsequent calls to Help will be ignored. 
 
When you press Help from the main menu, you will be offered eight choices from
the submenu.  The first seven correspond to the seven parts of the main menu
(Names Grades Quarter Print, etc.).  The last is Keys which will explain the
various ways to move through the main menu and the submenus.  At the conclusion
of the help screens you will be returned to the main menu. 
 
 EXAMPLES OF PRINTOUTS 
 
--- Names / Show (screen only) 
                                       highlighted if quarter 1 
                                                  | 
#  1 155  Roger Bakersville     Williams   909   72.6   0.0   0.0   0.0
#  2 160  Joyce Callings        Price      910   52.3   0.0   0.0   0.0
#  3 161  Henry Frier           Groons     901   76.8   0.0   0.0   0.0
#  4 164  George Gallsworthy    Williams   920   75.1   0.0   0.0   0.0
#  5 169  Betty Kims /aka Akers Price      902   34.5   0.0   0.0   0.0
#  6 170  Herman Killinsworth   Price      918   78.1   0.0   0.0   0.0
#  7 175  Steven Mollins        Groons     911   77.9   0.0   0.0   0.0
#  8 176  Henrietta Nance       Price      914    0.0   0.0   0.0   0.0
#  9 178  Victor Petty          Williams   907   73.2   0.0   0.0   0.0
# 10 179  Charles Robbinson     Price      907   67.9   0.0   0.0   0.0
# 11 181  Henry Stimanski       Williams   918   84.8   0.0   0.0   0.0
# 12 185  Karen Wise            Price      920   80.0   0.0   0.0   0.0
# 13 188  Dummy Data            End        000   93.8   0.0   0.0   0.0
 
                      Press a letter to continue. 


--- Names / phoNe #  (screen only)

#  1 203  Denise Harvey             Price      909     111-0000
#  2 207  Roger H. Thomasinon       Wills      901     435-1544
#  3 211  Joyce Hershell            Griner     908     333-1212
#  4 212  Henry Higgins             Price      918     234-1546

page 23
 
--- Compute / Print quarter 
 
   TEACHER NAME 
   CLASS            DATE            QUARTER 1 

   NAME/HOMEROOM                     QUARTER GRADES        ABS  AVG  
   Roger Bakersville         909   72.6   0.0   0.0   0.0   0   72.6 
   Joyce Callings            910   52.3   0.0   0.0   0.0   0   52.3 
   Henry Frier               901   76.8   0.0   0.0   0.0   0   76.8 
   George Gallsworthy        920   75.1   0.0   0.0   0.0   0   75.1 
   Betty Kims /aka Akers     902   34.5   0.0   0.0   0.0   0   34.5 
   Herman Killinsworth       918   78.1   0.0   0.0   0.0   0   78.1 
   Steven Mollins            911   77.9   0.0   0.0   0.0   0   77.9 
   Henrietta Nance           914    0.0   0.0   0.0   0.0   0    0.0 
   Victor Petty              907   73.2   0.0   0.0   0.0   0   73.2 
   Charles Robbinson         907   67.9   0.0   0.0   0.0   0   67.9 
   Henry Stimanski           918   84.8   0.0   0.0   0.0   0   84.8 
   Karen Wise                920   80.0   0.0   0.0   0.0   0   79.9 
   Dummy Data                000   93.8   0.0   0.0   0.0   0   93.8 

   QUARTER AVERAGES:     66.68   0.0   0.0   0.0 
    90 -- 100   1    7.69% 
    80 --  89   2   15.38% 
    70 -- 79    6   46.15% 
    60 -- 69    1    7.69% 
    below 60    3   23.08% 
    # students = 13 



---  Quarter / Statistics  (screen only)

      LEVEL:    11      QUARTER:  1

      90 -- 100    0     0.00%
      80 -- 89     3    12.50
      70 -- 79    16    66.67
      60 -- 69     4    16.67
      below 60     1     4.17

      total students = 24


page 24
 
 
--- Print / Print Reports 
     This is an example of a progress report -- one copy printed 
 
 
     Your High School                        Current Date, 19?? 
     Progress Report                 Quarter 1 
     To the parents of Karen Wise 
     Homeroom:  920                  Counselor:  Price 
     Karen has an average of 80.0 in CLASS NAME for quarter 1. 
     QUARTER AVERAGES: 
       1st:   80.0      2nd:   0.0      3rd:   0.0     4th:    0.0 
     Cumulative final average as of CURRENT DATE:  80.0 
     Grades for quarter 1 
       4  50%  79  80  81  81   avg: 80.25    pts: 40.1 
       3  30%  80  80  79     avg: 79.67    pts: 23.9 
       4  20%  79  80  80  81   avg: 80.0    pts: 16.0 
     NOTE:  first novel to be read by 10/15/86.       (+) 
     Karen needs to concentrate more on homework.     (++) 
     Thus far Karen has been absent 0 time(s) this quarter. 
        Karen should be commended for such excellent attendance. 
 
     TEACHER'S NAME           CLASS NAME 
 
     Name/Date_____________________Name/Date________________________ 
                          [please sign and return] 
 
        (+)  message added to ALL reports at your option 
        (++) individual message added at your option 
 
     Differences between printed Progress and Deficiency reports 
 
     a.  deficiency given if grade equals or is below minimum passing  
         grade. 
     b.  Statement is printed for deficiency:  "Perhaps a conference is 
         indicated. The school phone number is PHONE #." 
     c.  Statement is printed for progress if grade is 90 or better: 
         "'FIRST NAME' should be commended for such excellent work." 
     d.  2 copies printed of Deficiency 
 
In the third and fourth quarters, if the cumulative average (thinking of the
FINAL GRADE) is equal to or below the minimum passing grade, the following is
printed:

         +++POSSIBLE FAILURE FOR THE YEAR+++  

page 25
 
--- Print / print Name 
 
    CLASS NAME       TEACHER NAME      Quarter 2        March 19, 1986 
    Henry Jones         76.0    66.6    0.0    0.0    3 
      7  50%   --  88  99  77  44  88  89   avg: 69.3   pts: 34.6 
      4  30%  100  88  76  56   avg: 80.0   pts: 24.0 
      5  20%   --  --  00 100 100   avg: 40.0   pts: 8.0 
    Sally Smith         76.0    66.6    0.0    0.0    3 
      7  50%   --  88  99  77  44  88  89   avg: 69.3   pts: 34.6 
      4  30%  100  88  76  56   avg: 80.0   pts: 24.0 
      5  20%   --  --  00 100 100   avg: 40.0   pts: 8.0 
    (same information for rest of students in class) 
 
--- Print / print nuMber 
 
    CLASS NAME       TEACHER NAME      Quarter 2        March 19, 1986 
    163 ......       76.0    66.6    0.0    0.0    3 
      7  50%   --  88  99  77  44  88  89   avg: 69.3   pts: 34.6 
      4  30%  100  88  76  56   avg: 80.0   pts: 24.0 
      5  20%   --  --  00 100 100   avg: 40.0   pts: 8.0 
    165 ......       76.0    66.6    0.0    0.0    3 
      7  50%   --  88  99  77  44  88  89   avg: 69.3   pts: 34.6 
      4  30%  100  88  76  56   avg: 80.0   pts: 24.0 
      5  20%   --  --  00 100 100   avg: 40.0   pts: 8.0 
    (same information for rest of students in class) 
     
 
NOTE: All printouts are printed continuously.  This was done to minimize paper;
a class of 40 students could use up anywhere from 40 to 80 pages of paper if
printed one to a page.  You will have to cut the progress/deficiency reports
yourself with a ruler.  Enough space is given between each to make this an easy
task. 
       
HINT #1: If your NAMES file contains many names, the disk activity can take a
long time.  Remember that files are saved continuously.  To make the delay as
little as possible, I recommend using a RAM disk for storing the NAMES and the
GRADES file(s).  You should also have the file GRADE.000 on the RAM disk to use
the Help screens.  If you're starting the program from the RAM disk, you'll also
need the files GR.ADE as well as GRADE.COM.  You must also remember to copy the
NAMES and GRADES files to disk after exiting the program. 


page 26

 
Sample batch file to create a RAM disk as drive C: and run the program from
drive A: using the SUPERDRV.COM program provided by AST. 

      drive C:/1           (create RAM disk of about 160K) 
      copy GR.ADE C: 
      copy GRADE.000 C: 
      copy NAMES.* C:     (copy any NAMES files to RAM disk) 
      copy GRADES.* C: 
      grade 
      copy C:NAMES.* A:   (after exiting program, files will be saved

      copy C:GRADES.* A:     on A:\ drive) 
 
After entering the level, the quarter, and the class to work on, use the Level /
change Directory command to use the C:\ RAM disk for all input and output of
files. 


HINT #2: The spacing for all printouts is 6 lines per inch.  When printing the
deficiencies/progress reports, you may want to save paper by having them printed
8 lines to an inch.  To do this, run the INSTALL program again, complete all
information as usual, but for the printer use NOT LISTED as your choice.  You'll
be prompted for the codes to set ELITE print and will be asked for 6 numbers. 
You can use the first two numbers to set ELITE mode and the next two numbers to
set 8 LINES PER INCH.  You can even set CONDENSED mode instead of elite.  For
example these would be the codes for and EPSON printer for ELITE mode, 8 LINES
PER INCH:

     27  77  27  48  0  0

When the reports are printed, run the INSTALL program again after exiting the
program and select your printer.  This will set ELITE mode; then turn your
printer OFF and then ON to cancel the 8 LINES PER INCH. 


```
{% endraw %}

## MENU.BAS

{% raw %}
```bas
10  '
11 '
12 A$="O2l4b-o3l4dl2fffff.l4b-"
13 B$="o3l2fl4de-l2ffe-l2co2l2b-.p4"
14 C$="O3L4B-AL2GE-GE-F.L4G"
15 D$="O3L2FL4B-AL2GE-GB-L1F.P4"
50 KEY OFF:CLS:ON ERROR GOTO 50000
119 SCREEN 1,0:COLOR 0,15:DEF SEG=&HB800
120 BLOAD"atlas",0
121 DEF SEG
143 PLAY "T250Xa$;"
144 PLAY "T250Xb$;"
145 PLAY "T250Xa$;"
146 PLAY "T250XB$;"
147 FOR X=1 TO 4673:NEXT X:GOTO 400
149 '
305 PLAY "T250XC$;"
310 PLAY "T250XD$;"
320 PLAY "T250P4XA$;"
330 PLAY "T250XB$;"
332 GOTO 1000
400 CLS:SCREEN 2:SCREEN 0:COLOR 10,0,0:CLS:LOCATE 2,5
401 PRINT"              THE ATLAS SOFTWARE EDUCATIONAL PACKAGE  ":LOCATE 9,1
402 COLOR 6:LOCATE 1,5:PRINT"            ╔════════════════════════════════════════╗":LOCATE 2,17:PRINT"║":LOCATE 2,58:PRINT"║"
403 COLOR 6:LOCATE 3,5:PRINT"            ╚════════════════════════════════════════╝":PRINT:PRINT:COLOR 2
404 PRINT"Name That Planet:  Have fun while learning how to identify the planets of our                      solar system by how they look, how big they are compared to                     the other planets,  and how far away from the sun they are."
405 PRINT:PRINT:PRINT:PRINT:
406 PRINT"Multitime:         Having trouble learning the multiplication factors?                             We highly recommend this mathematical aide."
407 PRINT:PRINT:PRINT:PRINT:
408 PRINT"Historomania:      This great new program lets you learn historical facts                          without the books.  Three skill levels."
500 GOTO 149
1000 LOCATE 22,1:PRINT"                      <<Press any key to continue>>"
1001 X$=INKEY$:IF X$="" THEN 1001 ELSE RUN"menu2
1002 GOTO 1001
50000 RUN"error
```
{% endraw %}

## MENU2.BAS

{% raw %}
```bas
1 CLS:SCREEN 2:SCREEN 1:ON ERROR GOTO 50000
2 DEF SEG=&HB800:BLOAD"atlasarm",0:DEF SEG:
50 X$=INKEY$:IF X$="1" THEN 100
51 IF X$="2" THEN 200
52 IF X$="3" THEN 300
53 IF X$="4" THEN 400
60 GOTO 50
100 CLS:PRINT"Loading Name That Planet..."
102 FOR X=1 TO 50:NEXT X
103 RUN"ntp
200 CLS:PRINT"Loading Multitime..."
202 FOR X= 1 TO 50:NEXT X
203 RUN"multid
300 CLS:PRINT"Loading Historomania"
301 FOR X=1 TO 50:NEXT X
302 RUN"hq
400 SYSTEM
50000 RUN"error
```
{% endraw %}

## MULTID.BAS

{% raw %}
```bas
1 ON ERROR GOTO 50000
5 CLS:Y=1
6 SCREEN 1
7 S=0
8 COLOR 0,15
10 KEY OFF
11 FOR X=1 TO 100 STEP 3:Y=X:LINE(X,Y)-(X+84,Y+84),1,B:NEXT X:Y=100:FOR X=100 TO 200 STEP 3:LINE(X,Y)-(X+84,Y+84),1,B:Y=Y-3:NEXT X
12 LOCATE 18,14:PRINT"Multitime!"
13 FOR X=1 TO 2000:NEXT X
15 CLS:LOCATE 8,1
20 PRINT"    Welcome to Atlas' Multitime!":PRINT"
21 PRINT"A computerized mathematical aide":PRINT"
25 PRINT"created to teach young and old":PRINT"
30 PRINT"the basic multiplication factors.":PRINT"
70 PRINT"
71 PRINT"
72 PRINT"
75 PRINT"
80 PRINT"
85 PRINT"Press enter to continue with"
90 PRINT"the program, or press the esc "
95 PRINT"key to return to the menu."
100 X$=INKEY$
105 IF X$=CHR$(27) THEN RUN"menu2
110 IF X$=CHR$(13) THEN 36667
111 GOTO 100
125 CLS:S=0
130 LOCATE 8,1
135 PRINT"      (Good Luck)
140 LOCATE 10,1
145 PRINT"  1"
150 PRINT" x1"
155 PRINT"---"
160 INPUT B
165 IF B=1 THEN GOSUB 10000:GOTO 180
166 GOTO 179
170 IF B<>1 THEN 172 ELSE 172
171 LOCATE 14,1
172 PRINT"The correct answer is 1."
173 FOR X=1 TO 500:NEXT X
174 GOTO 180
175 PRINT"Correct.":S=S+1
176 FOR X=1 TO 500:NEXT X
179 GOSUB 11000
180 CLS
185 LOCATE 10,1
187 PRINT"  1"
188 PRINT" x2"
189 PRINT"---"
190 INPUT C
195 IF C=2 THEN GOSUB 10000:GOTO 212
200 IF C<>2 THEN GOSUB 11000:GOTO 212
201 PRINT"Oops, wrong answer"
202 FOR X=1 TO 500:NEXT X
204 GOTO 212
210 PRINT"Good answer!!":S=S+1
211 FOR X=1 TO 500:NEXT X
212 CLS
213 LOCATE 10,1
214 PRINT"  1"
215 PRINT" x3"
220 PRINT"---"
225 INPUT D
226 IF D=3 THEN GOSUB 10000:GOTO 242
230 IF D<>3 THEN GOSUB 11000:GOTO 242
232 PRINT"Wrong."
234 FOR X=1 TO 500:NEXT X
238 GOTO 242
240 PRINT"That's right!":S=S+1
241 FOR X=1 TO 500:NEXT X
242 CLS
243 LOCATE 10,1
244 PRINT"  1"
245 PRINT" x4"
246 PRINT"---"
247 INPUT E
248 IF E=4 THEN GOSUB 10000:GOTO 280
250 IF E<>4 THEN GOSUB 11000:GOTO 280
260 PRINT"Oops!!"
261 FOR X=1 TO 500:NEXT X
265 GOTO 280
275 PRINT"Good job!":S=S+1
277 FOR X=1 TO 500:NEXT X
280 CLS
282 LOCATE 10,1
284 PRINT"  1"
285 PRINT" x5"
287 PRINT"---"
289 INPUT F
290 IF F=5 THEN GOSUB 10000:GOTO 305
292 IF F<>5 THEN GOSUB 11000:GOTO 305
295 PRINT"Wrong answer."
296 FOR X=1 TO 500:NEXT X
297 GOTO 305
300 PRINT"Great job!!":S=S+1
301 FOR X=1 TO 500:NEXT X
305 CLS
310 LOCATE 10,1
315 PRINT"  1"
320 PRINT" x6 "
325 PRINT"---"
330 INPUT G
335 IF G=6 THEN GOSUB 10000:GOTO 350
340 IF G<>6 THEN GOSUB 11000:GOTO 350
341 PRINT"Sorry, wrong answer."
342 GOTO 350
343 GOTO 350
345 PRINT"Good answer!":S=S+1
346 FOR X=1 TO 500:NEXT X
350 CLS
352 LOCATE 10,1
354 PRINT"  1"
355 PRINT" x7"
356 PRINT"---"
358 INPUT H
359 IF H=7 THEN GOSUB 10000:GOTO 415
400 IF H<>7 THEN GOSUB 11000:GOTO 415
405 PRINT"Wrong."
407 FOR X=1 TO 500:NEXT X
409 GOTO 415
410 PRINT"Good!":S=S+1
411 FOR X=1 TO 500:NEXT X
415 CLS
420 LOCATE 10,1
425 PRINT"  1"
430 PRINT" x8"
435 PRINT"---"
440 INPUT I
445 IF I=8 THEN GOSUB 10000:GOTO 463
450 IF I<>8 THEN GOSUB 11000:GOTO 463
451 PRINT"Oops, wrong answer."
454 FOR X=1 TO 500:NEXT X
459 GOTO 463
460 PRINT"Good job!":S=S+1
462 FOR X=1 TO 500:NEXT X
463 CLS
465 LOCATE 10,1
467 PRINT"  1"
468 PRINT" x9"
469 PRINT"---"
470 INPUT J
471 IF J=9 THEN GOSUB 10000:GOTO 495
475 IF J<>9 THEN GOSUB 11000:GOTO 495
476 PRINT"Wrong answer."
480 FOR X=1 TO 500:NEXT X
485 GOTO 495
490 PRINT"Right!!!":S=S+1
491 FOR X=1 TO 500:NEXT X
495 CLS
500 LOCATE 10,1
505 PRINT"   1"
510 PRINT" x10"
520 PRINT" ---"
525 INPUT K
530 IF K=10 THEN GOSUB 10000:GOTO 550
535 IF K<>10 THEN GOSUB 11000:GOTO 550
536 PRINT"Wrong."
537 FOR X=1 TO 500:NEXT X
538 GOTO 545
540 PRINT"Good!!":S=S+1
545 FOR X=1 TO 500:NEXT X
550 CLS
555 LOCATE 10,1
560 PRINT"   1 "
565 PRINT" x11"
570 PRINT" ---"
575 INPUT L
580 IF L=11 THEN GOSUB 10000:GOTO 605
585 IF L<>11 THEN GOSUB 11000:GOTO 605
595 PRINT"Sorry, your wrong."
596 FOR X=1 TO 500:NEXT X
597 GOTO 605
600 PRINT"Very good!":S=S+1
601 FOR X=1 TO 500:NEXT X
605 CLS
610 LOCATE 10,1
615 PRINT"   1"
620 PRINT" x12"
625 PRINT" ---"
630 INPUT M
635 IF M=12 THEN GOSUB 10000:GOTO 660
640 IF M<>12 THEN GOSUB 11000:GOTO 660
641 PRINT"Wrong."
642 FOR X=1 TO 500:NEXT X
643 GOTO 660
650 PRINT"Good job!!":S=S+1
655 FOR X=1 TO 500:NEXT X
660 CLS
675 PRINT"
680 PRINT"
685 PRINT"
690 PRINT"
695 PRINT"
700 HONK=1
706 IF S<6 THEN GOSUB 11010:GOTO 765
707 IF S<10 THEN GOSUB 11010:GOTO 765
709 IF S>10 THEN GOSUB 11010:GOTO 765
715 PRINT"  Maybe you better try the"
716 PRINT"one's again, you only got";S;"
717 PRINT"correct out of 12 problems."
718 FOR X=1 TO 7000:NEXT X
719 GOTO 730
725 PRINT"  Good job, you got";S;"out"
726 PRINT"of 12 problems correct."
727 FOR X=1 TO 7000:NEXT X
730 GOTO 765
735 PRINT"     Well your off to a good start,"
740 PRINT"you got";S;"out of twelve problems"
745 PRINT"right.  Good job!!!!!"
750 FOR X=1 TO 7000:NEXT X
765 CLS:LOCATE 2,10
775 LINE(0,5)-(307,100),,B:COLOR 0,15
785 PRINT"
790 PRINT"
795 PRINT"
800 PRINT"    Press Enter to continue with the"
805 PRINT" program, Esc to go to menu, or `1' to "
815 PRINT" return back to the one's."
820 X$=INKEY$:IF X$="1" THEN 125
821 IF X$=CHR$(27) THEN 824
823 IF X$=CHR$(13) THEN 850
824 GOTO 820
850 CLS
851 S=0
855 LOCATE 10,1
860 PRINT"  2"
865 PRINT" x1"
870 PRINT"---"
875 INPUT T
880 IF T=2 THEN GOSUB 10000:GOTO 905
885 IF T<>2 THEN GOSUB 11000:GOTO 905
895 PRINT"The correct answer is `2'"
896 FOR X=1 TO 500:NEXT X
897 GOTO 905
900 PRINT"Correct!":A=A+1
902 FOR X=1 TO 500:NEXT X
905 CLS
910 LOCATE 10,1
915 PRINT"  2"
920 PRINT" x2"
925 PRINT"---"
930 INPUT U
935 IF U=4 THEN GOSUB 10000:GOTO 960
940 IF U<>4 THEN GOSUB 11000:GOTO 960
945 PRINT"The correct answer is `4'"
946 FOR X=1 TO 500:NEXT X
947 GOTO 960
950 PRINT"Correct!":A=A+1
955 FOR X=1 TO 500:NEXT X
960 CLS
965 LOCATE 10,1
970 PRINT"  2"
971 PRINT" x3"
972 PRINT"---"
974 INPUT V
976 IF V=6 THEN GOSUB 10000:GOTO 1010
980 IF W<>6 THEN GOSUB 11000:GOTO 1010
995 PRINT"The correct answer is `6'"
996 FOR X=1 TO 500:NEXT X
997 GOTO 1010
1000 PRINT"Correct!":A=A+1
1001 FOR X=1 TO 500:NEXT X
1010 CLS
1015 LOCATE 10,1
1020 PRINT"  2"
1025 PRINT" x4"
1030 PRINT"---"
1035 INPUT W
1040 IF W=8 THEN GOSUB 10000:GOTO 1100
1045 IF W<>8 THEN GOSUB 11000:GOTO 1100
1070 PRINT"The correct answer is `8'"
1071 FOR X=1 TO 500:NEXT X
1072 GOTO 1100
1075 PRINT"Correct!":A=A+1
1076 FOR X=1 TO 500:NEXT X
1100 CLS
1101 LOCATE 10,1
1105 PRINT"  2"
1110 PRINT" x5"
1115 PRINT"---"
1120 INPUT X
1125 IF X=10 THEN GOSUB 10000:GOTO 1145
1130  GOSUB 11000:GOTO 1145
1135 PRINT"The correct answer is `10'"
1136 FOR X=1 TO 500:NEXT X
1137 GOTO 1145
1140 PRINT"Correct!":A=A+1
1141 FOR X=1 TO 500:NEXT X
1145 CLS
1150 LOCATE 10,1
1155 PRINT"  2"
1160 PRINT" x6"
1165 PRINT"---"
1170 INPUT Y
1171 IF Y=12 THEN GOSUB 10000:GOTO 1195
1172  GOSUB 11000:GOTO 1195
1173 FOR X=1 TO 500:NEXT X
1174 GOTO 1195
1190 PRINT"Correct!":A=A+1
1191 FOR X=1 TO 500:NEXT X
1195 CLS
1196 LOCATE 10,1
1197 PRINT"  2"
1198 PRINT" x7"
1199 PRINT"---"
1200 INPUT Z
1205 IF Z=14 THEN GOSUB 10000:GOTO 1225
1210  GOSUB 11000:GOTO 1225
1211 FOR X=1 TO 500:NEXT X
1212 GOTO 1225
1220 PRINT"Correct!":A=A+1
1221 FOR X=1 TO 500:NEXT X
1225 CLS
1230 LOCATE 10,1
1235 PRINT"  2"
1240 PRINT" x8"
1245 PRINT"---"
1250 INPUT AB
1255 IF AB=16 THEN GOSUB 10000:GOTO 1280
1260 GOSUB 11000:GOTO 1280
1265 FOR X=1 TO 500:NEXT X
1270 GOTO 1280
1275 PRINT"Correct!":A=A+1
1276 FOR X=1 TO 500:NEXT X
1280 CLS
1282 LOCATE 10,1
1284 PRINT"  2"
1285 PRINT" x9"
1286 PRINT"---"
1287 INPUT CD
1288 IF CD=18 THEN GOSUB 10000:GOTO 1305
1291 GOSUB 11000:FOR X=1 TO 500:NEXT X
1292 GOTO 1305
1300 PRINT"Correct!":A=A+1
1301 FOR X=1 TO 500:NEXT X
1305 CLS
1310 LOCATE 10,1
1315 PRINT"   2"
1320 PRINT" x10"
1325 PRINT" ---"
1330 INPUT EF
1335 IF EF=20 THEN GOSUB 10000:GOTO 1352
1336 GOSUB 11000:GOTO 1352
1347 GOTO 1352
1350 PRINT"Correct!":A=A+1
1351 FOR X=1 TO 500:NEXT X
1352 CLS
1353 LOCATE 10,1
1355 PRINT"   2"
1356 PRINT" x11"
1357 PRINT" ---"
1358 INPUT EF
1360 IF EF=22 THEN GOSUB 10000:GOTO 1372
1361 GOSUB 11000:GOTO 1372
1362 FOR X=1 TO 500 :NEXT X
1367 GOTO 1372
1370 PRINT"Correct!":A=A+1
1371 FOR X=1 TO 500:NEXT X
1372 CLS
1373 LOCATE 10,1
1374 PRINT"   2"
1375 PRINT" x12"
1376 PRINT" ---"
1377 INPUT GH
1380 IF GH=24 THEN GOSUB 10000:GOTO 1400
1382 GOSUB 11000:GOTO 1400
1390 FOR X=1 TO 500:NEXT X
1395 GOTO 1402
1396 PRINT"Correct!"A=A+1
1397 FOR X=1 TO 500:NEXT X
1400 CLS
1402 CLS
1406 PRINT"
1408 PRINT"
1409 PRINT"
1410 HONK=2
1411 IF S<6 THEN GOSUB 11010
1412 IF S<10 THEN GOSUB 11010
1415 IF S>10 THEN GOSUB 11010
1416 GOTO 1411
1420 LOCATE 10,1:PRINT"I think you better try the"
1421 PRINT"two's again, you only got";S;"
1422 PRINT"out of twelve problems."
1423 FOR X=1 TO 7000:NEXT X
1424 GOTO 1437
1425 LOCATE 10,1:PRINT"   You got";S;"out of twelve"
1426 PRINT"problems correct.  Keep up the"
1427 PRINT"good work!"
1428 FOR X=1 TO 7000:NEXT X
1429 GOTO 1437
1430 PRINT"Good job!!  You got";S;"out of"
1431 PRINT"twelve problems correct!  Good"
1432 PRINT"job!!!"
1433 FOR X=1 TO 7000:NEXT X
1437 CLS:LOCATE 2,10
1438 LINE(0,5)-(307,100),,B
1439 PRINT
1440 COLOR 0,15
1442 PRINT"    Press enter to continue with"
1443 PRINT"  the program, Esc to go to the menu,"
1444 PRINT"  or `2' to return to the"
1445 PRINT"  three's."
1446 X$=INKEY$
1447 IF X$="2"THEN 850
1448 IF X$=CHR$(27)THEN 1452
1449 IF X$=CHR$(13)THEN 1457
1450 GOTO 1446
1451 END
1452 RUN"menu2"
1455 END
1457 CLS
1458 S=0
1459 LOCATE 10,1
1465 PRINT"  3"
1470 PRINT" x1"
1475 PRINT"---"
1480 INPUT A
1485 IF A=3 THEN GOSUB 10000:GOTO 1505
1490 GOSUB 11000:GOTO 1505
1495 FOR X=1 TO 500:NEXT X
1496 GOTO 1505
1500 -
1502 FOR X=1 TO 500:NEXT X
1505 CLS
1507 LOCATE 10,1
1515 PRINT"  3"
1520 PRINT" x2"
1525 PRINT"---"
1527 INPUT B
1528 IF B=6 THEN GOSUB 10000:GOTO 1542
1530 GOSUB 11000:GOTO 1542
1532 FOR X=1 TO 500:NEXT X
1535 GOTO 1542
1540 PRINT"Correct!":E=E+1
1541 FOR X=1 TO 500:NEXT X
1542 CLS
1544 LOCATE 10,1
1545 PRINT"  3"
1547 PRINT" x3"
1550 PRINT"---"
1552 INPUT C
1553 IF C=9 THEN GOSUB 10000:GOTO 1572
1555 GOSUB 11000:GOTO 1572
1560 FOR X=1 TO 500:NEXT X
1565 GOTO 1572
1570 PRINT"Correct!":E=E+1
1571 FOR X=1 TO 500:NEXT X
1572 CLS
1573 LOCATE 10,1
1575 PRINT"  3"
1577 PRINT" x4"
1578 PRINT"---"
1579 INPUT D
1580 IF D=12 THEN GOSUB 10000:GOTO 1592
1583 GOSUB 11000:GOTO 1592
1584 FOR X=1 TO 500:NEXT X
1586 GOTO 1592
1590 PRINT"Correct!":E=E+1
1591 FOR X=1 TO 500:NEXT X
1592 CLS
1595 LOCATE 10,1
1596 PRINT"  3"
1598 PRINT" x5"
1600 PRINT"---"
1602 INPUT F
1603 IF F=15 THEN GOSUB 10000:GOTO 1619
1605 GOSUB 11000:GOTO 1619
1607 FOR X=1 TO 500:NEXT X
1610 GOTO 1619
1617 PRINT"Correct!":E=E+1
1618 FOR X=1 TO 500:NEXT X
1619 CLS
1620 LOCATE 10,1
1622 PRINT"  3"
1624 PRINT" x6"
1625 PRINT"---"
1627 INPUT G
1628 IF G=18 THEN GOSUB 10000:GOTO 1642
1629 GOSUB 11000:GOTO 1642
1630 PRINT"The correct answer is `18'"
1632 FOR X=1 TO 500:NEXT X
1634 GOTO 1642
1640 PRINT"Correct!":E=E+1
1641 FOR X=1 TO 500:NEXT X
1642 CLS
1643 LOCATE 10,1
1644 PRINT"  3"
1645 PRINT" x7"
1646 PRINT"---"
1647 INPUT H
1649 IF H=21 THEN GOSUB 10000:GOTO 1662
1651 GOSUB 11000:GOTO 1662
1652 GOTO 1662
1660 PRINT"Correct!":E=E+1
1661 FOR X=1 TO 500:NEXT X
1662 CLS
1664 LOCATE 10,1
1665 PRINT"  3"
1667 PRINT" x8"
1668 PRINT"---"
1670 INPUT I
1672 IF I=24 THEN GOSUB 10000:GOTO 1692
1674 GOSUB 11000:GOTO 1692
1676 FOR X=1 TO 500:NEXT X
1677 GOTO 1692
1690 PRINT"Correct!":E=E+1
1691 FOR X=1 TO 500:NEXT X
1692 CLS
1694 LOCATE 10,1
1695 PRINT"  3"
1697 PRINT" x9"
1698 PRINT"---"
1700 INPUT J
1705 IF J=27 THEN GOSUB 10000:GOTO 1742
1710 GOSUB 11000:GOTO 1742
1715 FOR X=1 TO 500:NEXT X
1720 GOTO 1742
1740 PRINT"Correct!":E=E+1
1741 FOR X=1 TO 500:NEXT X
1742 CLS
1745 LOCATE 10,1
1747 PRINT"   3"
1748 PRINT" x10"
1749 PRINT"----"
1750 INPUT K
1755 IF K=30 THEN GOSUB 10000:GOTO 1772
1760 GOSUB 11000:GOTO 1772
1762 GOTO 1772
1764 FOR X=1 TO 500:NEXT X
1770 PRINT"Correct!":E=E+1
1771 FOR X=1 TO 500:NEXT X
1772 CLS
1774 LOCATE 10,1
1776 PRINT"   3"
1777 PRINT" x11"
1778 PRINT"----"
1779 INPUT L
1781 IF L=33 THEN GOSUB 10000:GOTO 1792
1783 GOSUB 11000:GOTO 1792
1784 FOR X=1 TO 500:NEXT X
1785 GOTO 1792
1787 PRINT"Correct!":E=E+1
1790 PRINT"Correct!":E=E+1
1791 FOR X=1 TO 500:NEXT X
1792 CLS
1794 LOCATE 10,1
1795 PRINT"   3"
1796 PRINT" x12"
1797 PRINT"----"
1798 INPUT M
1799 IF M=36 THEN GOSUB 10000:GOTO 1812
1800 GOSUB 11000:GOTO 1812
1802 FOR X=1 TO 500:NEXT X
1804 GOTO 1812
1810 PRINT"Correct!":E=E+1
1812 HONK=3
1817 IF S<6 THEN GOSUB 11010:GOTO 1872
1818 IF S<10 THEN GOSUB 11010:GOTO 1872
1820 IF S>9 THEN GOSUB 11010:GOTO 1872
1825 LOCATE 10,1
1826 PRINT"  I would suggest you take the"
1827 PRINT"three's over again.  You only"
1829 PRINT"got";S;"out of twelve correct!"
1832 FOR X=1 TO 7000:NEXT X
1833 GOTO 1854
1834 LOCATE 10,1
1835 PRINT" Well you didn't do that bad"
1837 PRINT"but I would suggest you take"
1838 PRINT"the three's once again.  You"
1840 PRINT"got";S;"out of twelve problems"
1842 PRINT"correct."
1843 FOR X=1 TO 9000:NEXT X
1844 GOTO 1854:LOCATE 10,1
1845 PRINT"Good job!  You got";S;"out of"
1846 PRINT"twelve problems correct!  Great"
1848 PRINT"job!!!"
1850 FOR X=1 TO 7000:NEXT X
1854 CLS:LOCATE 2,10:IPBA=1638
1856 LINE(0,5)-(307,100),,B
1858 PRINT"          Press Enter to continue"
1859 PRINT"with the program, Esc to go to the"
1860 PRINT"menu, or `4' to return to the 4's"
1862 X$=INKEY$:IF X$="4"THEN 1457
1864 IF X$=CHR$(27)THEN RUN"menu"       1866 IF X$=CHR$(13)THEN 1870
1866 IF X$=CHR$(13)THEN 1870
1867 GOTO 1862
1870 PRINT
1872 CLS:LOCATE 10,1:S=0
1874 PRINT"  4"
1875 PRINT" x1"
1876 PRINT"---"
1877 INPUT A
1878 IF A=4 THEN GOSUB 10000:GOTO 1880
1879 GOSUB 11000:GOTO 1880
1880 CLS:LOCATE 10,1:PRINT"  4"
1882 PRINT" x2"
1883 PRINT"---"
1884 INPUT A
1885 IF A=8 THEN GOSUB 10000:GOTO 1890
1886 GOSUB 11000:GOTO 1890
1887 HONK=4
1890 CLS
1892 LOCATE 10,1
1893 PRINT"  4"
1894 PRINT" x3"
1895 PRINT"---"
1896 INPUT A
1897 IF A=12 THEN GOSUB 10000:GOTO 1900
1898 GOSUB 11000:GOTO 1900
1900 CLS
1901 LOCATE 10,1
1902 PRINT"  4"
1903 PRINT" x4"
1904 PRINT"---"
1905 INPUT A
1906 IF A=16 THEN GOSUB 10000:GOTO 2000
1907 GOSUB 11000:GOTO 2000
2000 CLS
2001 LOCATE 10,1
2002 PRINT"  4"
2003 PRINT" x5"
2005 PRINT"---"
2007 INPUT A
2008 IF A=20 THEN GOSUB 10000:GOTO 2010
2009 GOSUB 11000:GOTO 2010
2010 CLS
2012 LOCATE 10,1
2013 PRINT"  4"
2014 PRINT" x6"
2015 PRINT"---"
2016 INPUT A
2017 IF A=24 THEN GOSUB 10000:GOTO 2020
2018 GOSUB 11000:GOTO 2020
2020 CLS
2021 LOCATE 10,1
2022 PRINT"  4"
2023 PRINT" x7"
2024 PRINT"---"
2025 INPUT A
2026 IF A=28 THEN GOSUB 10000:GOTO 2030
2027 GOSUB 11000:GOTO 2030
2030 CLS
2031 LOCATE 10,1
2032 PRINT"  4"
2033 PRINT" x8"
2034 PRINT"---"
2035 INPUT A
2036 IF A=32 THEN GOSUB 10000:GOTO 2040
2037 GOSUB 11000:GOTO 2040
2040 CLS
2041 LOCATE 10,1
2042 PRINT"  4"
2043 PRINT" x9"
2044 PRINT"---"
2045 INPUT A
2046 IF A=36 THEN GOSUB 10000:GOTO 2050
2047 GOSUB 11000:GOTO 2050
2050 CLS
2051 LOCATE 10,1
2052 PRINT"  4"
2053 PRINT"x10"
2054 PRINT"---"
2055 INPUT A
2056 IF A=40 THEN GOSUB 10000:GOTO 2060
2058 GOSUB 11000:GOTO 2060
2060 CLS
2061 LOCATE 10,1
2062 PRINT"  4"
2063 PRINT"x11"
2064 PRINT"---"
2065 INPUT A
2066 IF A=44 THEN GOSUB 10000:GOTO 2070
2067 GOSUB 11000:GOTO 2070
2070 CLS
2071 LOCATE 10,1
2072 PRINT"  4"
2073 PRINT"x12"
2074 PRINT"---"
2075 INPUT A
2076 IF A=48 THEN GOSUB 10000:GOTO 2089
2077 GOSUB 11000:GOTO 2089
2089 CLS:HONK=4:IF S<6 THEN GOSUB 11010
2090 IF S<10 THEN GOSUB 11010
2095 IF S>9 THEN GOSUB 11010
2096 GOTO 2089
2101 LOCATE 10,1
2102 PRINT"      Maybe you should try the"
2103 PRINT"four's again.  You only got";S;"
2104 PRINT"out of twelve correct."
2105 FOR X=1 TO 7000:NEXT X
2106 GOTO 2132
2111 LOCATE 10,1
2112 PRINT"      Well you didn't do that"
2113 PRINT"bad, but I would consider taking"
2114 PRINT"the four's again.  You got";S;"
2115 PRINT"correct out of twelve problems."
2116 FOR X=1 TO 7000:NEXT X
2117 GOTO 2132
2123 LOCATE 10,1
2124 FOR X=1 TO 7000:NEXT X
2125 GOTO 2132
2132 CLS
2133 LOCATE 2,10
2134 LINE(0,5)-(307,100),,B
2135 PRINT"    Press enter to continue with"
2136 PRINT" the program, Esc to go to the menu,"
2137 PRINT" or `4' to return to the four's"
2138 X$=INKEY$
2139 IF X$=CHR$(27)THEN RUN"menu"
2140 IF X$=CHR$(13)THEN 2144
2141 IF X$="4"THEN 1872
2142 GOTO 2138
2144 CLS:S=0
2145 LOCATE 10,1
2146 PRINT"  5"
2147 PRINT" x1"
2148 PRINT"---"
2149 INPUT A
2150 IF A=5 THEN GOSUB 10000:GOTO 2160
2151 GOSUB 11000:GOTO 2160
2160 CLS
2161 LOCATE 10,1
2162 PRINT"  5"
2163 PRINT" x2"
2164 PRINT"---"
2165 INPUT A
2166 IF A=10 THEN GOSUB 10000:GOTO 2170
2167 GOSUB 11000:GOTO 2170
2170 CLS
2171 LOCATE 10,1
2172 PRINT"  5"
2173 PRINT" x3"
2174 PRINT"---"
2175 INPUT A
2176 IF A=15 THEN GOSUB 10000:GOTO 2180
2177 GOSUB 11000:GOTO 2180
2180 CLS
2181 LOCATE 10,1
2182 PRINT"  5"
2183 PRINT" x4"
2184 PRINT"---"
2185 INPUT A
2186 IF A=20 THEN GOSUB 10000:GOTO 2190
2187 GOSUB 11000:GOTO 2190
2190 CLS
2191 LOCATE 10,1
2192 PRINT"  5"
2193 PRINT" x5"
2194 PRINT"---"
2195 INPUT A
2196 IF A=25 THEN GOSUB 10000:GOTO 2200
2197 GOSUB 11000:GOTO 2200
2200 CLS
2201 LOCATE 10,1
2202 PRINT"  5"
2203 PRINT" x6"
2204 PRINT"---"
2205 INPUT A
2206 IF A=30 THEN GOSUB 10000:GOTO 2210
2207 GOSUB 11000:GOTO 2210
2210 CLS
2211 LOCATE 10,1
2212 PRINT"  5"
2213 PRINT" x7"
2214 PRINT"---"
2215 INPUT A
2216 IF A=35 THEN GOSUB 10000:GOTO 2218
2217 GOSUB 11000:GOTO 2218
2218 CLS
2219 LOCATE 10,1
2220 PRINT"  5"
2221 PRINT" x8"
2222 PRINT"---"
2223 INPUT A
2224 IF A=40 THEN GOSUB 10000:GOTO 2230
2225 GOSUB 11000:GOTO 2230
2230 CLS
2231 LOCATE 10,1
2232 PRINT"  5"
2233 PRINT" x9"
2234 PRINT"---"
2235 INPUT A
2236 IF A=45 THEN GOSUB 10000:GOTO 2240
2237 GOSUB 11000:GOTO 2240
2240 CLS
2241 LOCATE 10,1
2242 PRINT"  5"
2243 PRINT"x10"
2244 PRINT"---"
2245 INPUT A
2246 IF A=50 THEN GOSUB 10000:GOTO 2250
2247 GOSUB 11000:GOTO 2250
2250 CLS
2251 LOCATE 10,1
2252 PRINT"  5"
2253 PRINT"x11"
2254 PRINT"---"
2255 INPUT A
2256 IF A=55 THEN GOSUB 10000:GOTO 2260
2257 GOSUB 11000:GOTO 2260
2260 CLS
2261 LOCATE 10,1
2262 PRINT"  5"
2263 PRINT"x12"
2264 PRINT"---"
2265 INPUT A
2266 IF A=60 THEN GOSUB 10000:GOTO 2270
2267 GOSUB 11000:GOTO 2270
2270 HONK=5:CLS
2272 IF S<6 THEN GOSUB 11010
2273 IF S<10 THEN GOSUB 11010
2275 IF S>9 THEN GOSUB 11010
2280 PRINT"       You seem to need more work"
2281 PRINT"on the five's.  For you only got"
2283 FOR X=1 TO 7000:NEXT X
2284 GOTO 2295
2285 PRINT"       I think you better try the"
2286 PRINT"five's again, you got";S;"correct."
2287 FOR X=1 TO 7000:NEXT X
2288 GOTO 2295
2290 PRINT"       Good work, you got";S;" out"
2291 PRINT"of twelve problems correct."
2292 PRINT"Good job!"
2293 FOR X=1 TO 7000:NEXT X
2295 CLS:LOCATE 2,10
2296 LINE(0,5)-(307,50),,B
2297 PRINT"  Press enter to continue"
2298 PRINT"    with the program, Esc to go to"
2299 PRINT"    the menu, or `5' to return to the"
2300 PRINT"    five's."
2302 X$=INKEY$
2303 IF X$=CHR$(27)THEN RUN"menu"
2304 IF X$=CHR$(13)THEN 2312
2305 IF X$="5"THEN 2144
2306 GOTO 2302
2307 S=0:CLS:LOCATE 10,1
2309 PRINT"  6"
2310 PRINT" x1"
2311 PRINT"---"
2312 INPUT A
2313 IF A=6 THEN GOSUB 10000:GOTO 2315
2314 GOSUB 11000:GOTO 2315
2315 CLS:LOCATE 10,1
2316 PRINT"  6"
2317 PRINT" x2"
2318 PRINT"---"
2319 INPUT A
2320 IF A=12 THEN GOSUB 10000:GOTO 2322
2321 GOSUB 11000:GOTO 2322
2322 CLS:LOCATE 10,1
2323 PRINT"  6"
2324 PRINT" x3"
2325 PRINT"---"
2326 INPUT A
2327 IF A=18 THEN GOSUB 10000:GOTO 2329
2328 GOSUB 11000:GOTO 2329
2329 CLS:LOCATE 10,1
2330 PRINT"  6"
2331 PRINT" x4"
2332 PRINT"---"
2333 INPUT A
2334 IF A=24 THEN GOSUB 10000:GOTO 2336
2335 GOSUB 11000:GOTO 2336
2336 CLS:LOCATE 10,1
2337 PRINT"  6"
2338 PRINT" x5"
2339 PRINT"---"
2340 INPUT A
2341 IF A=30 THEN GOSUB 10000:GOTO 2343
2342 GOSUB 11000:GOTO 2343
2343 CLS:LOCATE 10,1
2344 PRINT"  6"
2345 PRINT" x6"
2346 PRINT"---"
2347 INPUT A
2348 IF A=36 THEN GOSUB 10000:GOTO 2350
2349 GOSUB 11000:GOTO 2350
2350 CLS:LOCATE 10,1
2351 PRINT"  6"
2352 PRINT" x7"
2353 PRINT"---"
2354 INPUT A
2355 IF A=42 THEN GOSUB 10000:GOTO 2357
2356 GOSUB 11000:GOTO 2357
2357 CLS:LOCATE 10,1
2358 PRINT"  6"
2359 PRINT" x8"
2360 PRINT"---"
2361 INPUT A
2362 IF A=48 THEN GOSUB 10000:GOTO 2364
2363 GOSUB 11000:GOTO 2364
2364 CLS:LOCATE 10,1
2365 PRINT"  6"
2366 PRINT" x9"
2367 PRINT"---"
2368 INPUT A
2369 IF A=54 THEN GOSUB 10000:GOTO 2371
2370 GOSUB 11000:GOTO 2371
2371 CLS:LOCATE 10,1
2372 PRINT"  6"
2373 PRINT"x10"
2374 PRINT"---"
2375 INPUT A
2376 IF A=60 THEN GOSUB 10000:GOTO 2378
2377 GOSUB 11000:GOTO 2378
2378 CLS:LOCATE 10,1
2379 PRINT"  6"
2380 PRINT"x11"
2381 PRINT"---":INPUT A
2382 IF A=66 THEN GOSUB 10000:GOTO 2384
2383 GOSUB 11000:GOTO 2384
2384 CLS:LOCATE 10,1
2385 PRINT"  6"
2386 PRINT"x12"
2387 PRINT"---"
2388 INPUT A
2389 IF A=72 THEN GOSUB 10000:GOTO 2391
2390 GOSUB 11000:GOTO 2391
2391 HONK=6:CLS
2393 IF S<6 THEN GOSUB 11010
2395 IF S<10 THEN GOSUB 11010
2396 IF S>9 THEN GOSUB 11010
2401 PRINT"six's again before taking on the"
2402 PRINT"seven's.  You got";S;"correct."
2403 FOR X=1 TO 7000:NEXT X
2404 GOTO 2427
2410        STILL YOU DIDN't do that"
2411 PRINT"bad.  But I suggest taking the"
2412 PRINT"six's again.  You got";S;"right"
2413 PRINT"out of twelve problems."
2414 FOR X=1 TO 7000:NEXT X
2415 GOTO 2427
2420 PRINT"        Good job!!  You got";S;"
2421 PRINT"correct.  But remember the seven's"
2422 PRINT"aren't as easy.  Good luck!"
2423 FOR X=1 TO 7000:GOTO 2427
2427 CLS:LOCATE 2,10
2428 LINE(0,5)-(307,100)
2429 PRINT"     Press enter to continue"
2430 PRINT"with the program, Esc to go to"
2431 PRINT"the menu, or `7' to return to"
2432 PRINT"the menu."
2433 X$=INKEY$
2434 IF X$=CHR$(27)THEN RUN"menu"
2435 IF X$=CHR$(13)THEN 2440
2436 IF X$=1 THEN 2307
2437 GOTO 2433
2440 CLS:LOCATE 10,1:S=0
2441 PRINT"  7"
2442 PRINT" x1"
2443 PRINT"---"
2444 INPUT A
2445 IF A=7 THEN GOSUB 10000:GOTO 2447
2446 GOSUB 11000:GOTO 2447
2447 CLS:LOCATE 10,1
2448 PRINT"  7"
2449 PRINT" x2"
2450 PRINT"---"
2451 INPUT A
2452 IF A=14 THEN GOSUB 10000:GOTO 2454
2453 GOSUB 11000:GOTO 2454
2454 CLS:LOCATE 10,1
2455 PRINT"  7"
2456 PRINT" x3"
2457 PRINT"---"
2458 INPUT A
2459 IF A=21 THEN GOSUB 10000:GOTO 2461
2460 GOSUB 11000:GOTO 2461
2461 CLS:LOCATE 10,1
2462 PRINT"  7"
2463 PRINT" x4"
2464 PRINT"---"
2465 INPUT A
2466 IF A=28 THEN GOSUB 10000:GOTO 2468
2467 GOSUB 11000:GOTO 2468
2468 CLS:LOCATE 10,1
2469 PRINT"  7"
2470 PRINT" x5"
2471 PRINT"---"
2472 INPUT A
2473 IF A=35 THEN GOSUB 10000:GOTO 2475
2474 GOSUB 11000:GOTO 2475
2475 CLS:LOCATE 10,1
2476 PRINT"  7"
2477 PRINT" x6"
2478 PRINT"---"
2479 INPUT A
2480 IF A=42 THEN GOSUB 10000:GOTO 2482
2481 GOSUB 11000:GOTO 2482
2482 CLS:LOCATE 10,1
2483 PRINT"  7"
2484 PRINT" x7"
2485 PRINT"---"
2486 INPUT A
2487 IF A=49 THEN GOSUB 10000:GOTO 2490
2488 GOSUB 11000:GOTO 2490
2490 CLS:LOCATE 10,1
2491 PRINT"  7"
2492 PRINT" x8"
2493 PRINT"---"
2494 INPUT A
2495 IF A=56 THEN GOSUB 10000:GOTO 2497
2496 GOSUB 11000:GOTO 2497
2497 CLS:LOCATE 10,1
2498 PRINT"  7"
2499 PRINT" x9"
2500 PRINT"---"
2501 INPUT A
2502 IF A=63 THEN GOSUB 10000:GOTO 2504
2503 GOSUB 11000:GOTO 2504
2504 CLS:LOCATE 10,1
2505 PRINT"  7"
2506 PRINT"x10"
2507 PRINT"---"
2508 INPUT A
2509 IF A=70 THEN GOSUB 10000:GOTO 2511
2510 GOSUB 11000:GOTO 2511
2511 CLS:LOCATE 10,1
2512 PRINT"  7"
2513 PRINT"x11"
2514 PRINT"---"
2515 INPUT A
2516 IF A=77 THEN GOSUB 10000:GOTO 2518
2517 GOSUB 11000:GOTO 2518
2518 CLS:LOCATE 10,1
2519 PRINT"  7"
2520 PRINT"x12"
2521 PRINT"---"
2522 INPUT A
2523 IF A=84 THEN GOSUB 10000:GOTO 2525
2524 GOSUB 11000:GOTO 2525
2525 HONK=7:CLS
2527 IF S<6 THEN GOSUB 11010
2528 IF S<10 THEN GOSUB 11010
2529 IF S>9 THEN GOSUB 11010
2530 PRINT"      You got";S;"out of twelve"
2532 PRINT"problems correct.  With a score"
2533 PRINT"like that I would advise you to"
2534 PRINT"take the seven's again."
2535 CLS:LOCATE 10,1
2536 PRINT"  8"
2537 PRINT" x1"
2538 PRINT"---"
2539 INPUT A
2540 IF A=8 THEN GOSUB 10000:GOTO 2542
2541 GOSUB 11000:GOTO 2542
2542 CLS:LOCATE 10,1
2543 PRINT"  8"
2544 PRINT" x2"
2545 PRINT"---"
2546 INPUT A
2547 IF A=16 THEN GOSUB 10000:GOTO 2549
2548 GOSUB 11000:GOTO 2549
2549 CLS:LOCATE 10,1
2550 PRINT"  8"
2551 PRINT" x3"
2552 PRINT"---"
2553 INPUT A
2554 IF A=24 THEN GOSUB 10000:GOTO 2556
2555 GOSUB 11000:GOTO 2556
2556 CLS:LOCATE 10,1
2557 PRINT"  8"
2558 PRINT" x4"
2559 PRINT"---"
2560 INPUT A
2561 IF A=32 THEN GOSUB 10000:GOTO 2563
2562 GOSUB 11000:GOTO 2563
2563 CLS:LOCATE 10,1
2564 PRINT"  8"
2565 PRINT" x5"
2566 PRINT"---"
2567 INPUT A
2568 IF A=40 THEN GOSUB 10000:GOTO 2570
2569 GOSUB 11000:GOTO 2570
2570 CLS:LOCATE 10,1
2571 PRINT"  8"
2572 PRINT" x6"
2573 PRINT"---"
2574 INPUT A
2575 IF A=48 THEN GOSUB 10000:GOTO 2577
2576 GOSUB 11000:GOTO 2577
2577 CLS:LOCATE 10,1
2578 PRINT"  8"
2579 PRINT" x7"
2580 PRINT"---"
2581 INPUT A
2582 IF A=56 THEN GOSUB 10000:GOTO 2584
2583 GOSUB 11000:GOTO 2584
2584 CLS:LOCATE 10,1
2585 PRINT"  8"
2586 PRINT" x8"
2587 PRINT"---"
2588 INPUT A
2590 IF A=64 THEN GOSUB 10000:GOTO 2592
2591 GOSUB 11000:GOTO 2592
2592 CLS:LOCATE 10,1
2593 PRINT"  8"
2594 PRINT" x9"
2595 PRINT"---"
2596 INPUT A
2597 IF A=72 THEN GOSUB 10000:GOTO 2599
2598 GOSUB 11000
2599 CLS:LOCATE 10,1
2600 PRINT"  8"
2601 PRINT"x10"
2602 PRINT"---"
2603 INPUT A
2604 IF A=80 THEN GOSUB 10000:GOTO 2606
2605 GOSUB 11000
2606 CLS:LOCATE 10,1
2607 PRINT"  8"
2608 PRINT"x11"
2609 PRINT"---"
2610 INPUT A
2611 IF A=88 THEN GOSUB 10000:GOTO 2613
2612 GOSUB 11000
2613 CLS:LOCATE 10,1
2614 PRINT"  8"
2615 PRINT"x12"
2616 PRINT"---"
2617 INPUT A
2618 IF A=96 THEN GOSUB 10000:GOTO 2620
2619 GOSUB 11000
2620 HONK=8:CLS
2621 GOSUB 11010
2622 S=0:CLS:LOCATE 10,1
2623 PRINT"  9"
2624 PRINT" x1"
2625 PRINT"---"
2626 INPUT A
2627 IF A=9 THEN GOSUB 10000:GOTO 2629
2628 GOSUB 11000
2629 CLS:LOCATE 10,1
2630 PRINT"  9"
2631 PRINT" x2"
2632 PRINT"---"
2633 INPUT A
2634 IF A=18 THEN GOSUB 10000:GOTO 2636
2635 GOSUB 11000
2636 CLS:LOCATE 10,1
2637 PRINT"  9"
2638 PRINT" x3"
2639 PRINT"---"
2640 INPUT A
2641 IF A=27 THEN GOSUB 10000:GOTO 2643
2642 GOSUB 11000
2643 CLS:LOCATE 10,1
2644 PRINT"  9"
2645 PRINT" x4"
2646 PRINT"---"
2647 INPUT A
2648 IF A=36 THEN GOSUB 10000:GOTO 2650
2649 GOSUB 11000
2650 CLS:LOCATE 10,1
2651 PRINT"  9"
2652 PRINT" x5"
2653 PRINT"---"
2654 INPUT A
2655 IF A=45 THEN GOSUB 10000:GOTO 2657
2656 GOSUB 11000
2657 CLS:LOCATE 10,1
2658 PRINT"  9"
2659 PRINT" x6"
2660 PRINT"---"
2661 INPUT A
2662 IF A=54 THEN GOSUB 10000:GOTO 2664
2663 GOSUB 11000
2664 CLS:LOCATE 10,1
2665 PRINT"  9"
2666 PRINT" x7"
2667 PRINT"---"
2668 INPUT A
2669 IF A=63 THEN GOSUB 10000:GOTO 2671
2670 GOSUB 11000
2671 CLS:LOCATE 10,1
2672 PRINT"  9"
2673 PRINT" x8"
2674 PRINT"---"
2675 INPUT A
2676 IF A=72 THEN GOSUB 10000:GOTO 2678
2677 GOSUB 11000
2678 CLS:LOCATE 10,1
2679 PRINT"  9"
2680 PRINT" x9"
2681 PRINT"---"
2682 INPUT A
2683 IF A=81 THEN GOSUB 10000:GOTO 2685
2684 GOSUB 11000
2685 CLS:LOCATE 10,1
2686 PRINT"  9"
2687 PRINT"x10"
2688 PRINT"---"
2689 INPUT A
2690 IF A=90 THEN GOSUB 10000:GOTO 2692
2691 GOSUB 11000
2692 CLS:LOCATE 10,1
2693 PRINT"  9"
2694 PRINT"x11"
2695 PRINT"---"
2696 INPUT A
2697 IF A=99 THEN GOSUB 10000:GOTO 2699
2698 GOSUB 11000
2699 CLS:LOCATE 10,1
2700 PRINT"  9"
2701 PRINT"x12"
2702 PRINT"---"
2703 INPUT A
2704 IF A=108 THEN GOSUB 10000:GOTO 2706
2705 GOSUB 11000
2706 HONK=9:CLS
2707 GOSUB 11010
2708 S=0:CLS:LOCATE 10,1
2709 PRINT" 10"
2710 PRINT" x1"
2711 PRINT"---"
2712 INPUT A
2713 IF A=10 THEN GOSUB 10000:GOTO 2715
2714 GOSUB 11000
2715 CLS:LOCATE 10,1
2716 PRINT" 10"
2717 PRINT" x2"
2718 PRINT"---"
2719 INPUT A
2720 IF A=20 THEN GOSUB 10000:GOTO 2722
2721 GOSUB 11000
2722 CLS:LOCATE 10,1
2723 PRINT" 10"
2724 PRINT" x3"
2725 PRINT"---"
2726 INPUT A
2727 IF A=30 THEN GOSUB 10000:GOTO 2729
2728 GOSUB 11000
2729 CLS:LOCATE 10,1
2730 PRINT" 10"
2731 PRINT" x4"
2732 PRINT"---"
2733 INPUT A
2734 IF A=40 THEN GOSUB 10000:GOTO 2736
2735 GOSUB 11000
2736 CLS:LOCATE 10,1
2737 PRINT" 10"
2738 PRINT" x5"
2739 PRINT"---"
2740 INPUT A
2741 IF A=50 THEN GOSUB 10000:GOTO 2743
2742 GOSUB 11000
2743 CLS:LOCATE 10,1
2744 PRINT" 10"
2745 PRINT" x6"
2746 PRINT"---"
2747 INPUT A
2748 IF A=60 THEN GOSUB 10000:GOTO 2750
2749 GOSUB 11000
2750 CLS
2751 LOCATE 10,1
2752 PRINT" 10"
2753 PRINT" x7"
2754 PRINT"---"
2755 INPUT A
2756 IF A=70 THEN GOSUB 10000:GOTO 2758
2757 GOSUB 11000
2758 CLS:LOCATE 10,1
2759 PRINT" 10"
2760 PRINT" x8"
2761 PRINT"---"
2762 INPUT A
2763 IF A=80 THEN GOSUB 10000:GOTO 2765
2764 GOSUB 11000
2765 CLS:LOCATE 10,1
2766 PRINT" 10"
2767 PRINT" x9"
2768 PRINT"---"
2769 INPUT A
2770 IF A=90 THEN GOSUB 10000:GOTO 2772
2771 GOSUB 11000
2772 CLS:LOCATE 10,1
2773 PRINT" 10"
2774 PRINT"x10"
2775 PRINT"---"
2776 INPUT A
2777 IF A=100 THEN GOSUB 10000:GOTO 2779
2778 GOSUB 11000
2779 CLS:LOCATE 10,1
2780 PRINT" 10"
2781 PRINT"x11"
2782 PRINT"---"
2783 INPUT A
2784 IF A=110 THEN GOSUB 10000:GOTO 2786
2785 GOSUB 11000
2786 CLS:LOCATE 10,1
2787 PRINT" 10"
2788 PRINT"x12"
2789 PRINT"---"
2790 INPUT A
2791 IF A=120 THEN GOSUB 10000:GOTO 2793
2792 GOSUB 11000
2793 HONK=10:CLS
2794 GOSUB 11010
2795 CLS:LOCATE 10,1:S=0
2796 PRINT" 11"
2797 PRINT" x1"
2798 PRINT"---"
2799 INPUT A
2800 IF A=11 THEN GOSUB 10000:GOTO 2802
2801 GOSUB 11000
2802 CLS:LOCATE 10,1
2803 PRINT" 11"
2804 PRINT" x2"
2805 PRINT"---"
2806 INPUT A
2807 IF A=22 THEN GOSUB 10000:GOTO 2809
2808 GOSUB 11000
2809 CLS:LOCATE 10,1
2810 PRINT" 11"
2811 PRINT" x3"
2812 PRINT"---"
2813 INPUT A
2814 IF A=33 THEN GOSUB 10000:GOTO 2816
2815 GOSUB 11000
2816 CLS:LOCATE 10,1
2817 PRINT" 11"
2818 PRINT" x4"
2819 PRINT"---"
2820 INPUT A
2821 IF A=44 THEN GOSUB 10000:GOTO 2823
2822 GOSUB 11000
2823 CLS:LOCATE 10,1
2824 PRINT" 11"
2825 PRINT" x5"
2826 PRINT"---"
2827 INPUT A
2828 IF A=55 THEN GOSUB 10000:GOTO 2830
2829 GOSUB 11000
2830 CLS:LOCATE 10,1
2831 PRINT" 11"
2832 PRINT" x6"
2833 PRINT"---"
2834 INPUT A
2835 IF A=66 THEN GOSUB 10000:GOTO 2837
2836 GOSUB 11000
2837 CLS:LOCATE 10,1
2838 PRINT" 11"
2839 PRINT" x7"
2840 PRINT"---"
2841 INPUT A
2842 IF A=77 THEN GOSUB 10000:GOTO 2844
2843 GOSUB 11000
2844 CLS:LOCATE 10,1
2845 PRINT" 11"
2846 PRINT" x8"
2847 PRINT"---"
2848 INPUT A
2849 IF A=88 THEN GOSUB 10000:GOTO 2851
2850 GOSUB 11000
2851 CLS:LOCATE 10,1
2852 PRINT" 11"
2853  PRINT" x9"
2854 PRINT"---"
2855 INPUT A
2856 IF A=99 THEN GOSUB 10000:GOTO 2858
2857 GOSUB 11000
2858 CLS:LOCATE 10,1
2859 PRINT" 11"
2860 PRINT"x10"
2861 PRINT"---"
2862 INPUT A
2863 IF A=110 THEN GOSUB 10000:GOTO 2865
2864 GOSUB 11000
2865 CLS:LOCATE 10,1
2866 PRINT" 11"
2867 PRINT"x11"
2868 PRINT"---"
2869 INPUT A
2870 IF A=121 THEN GOSUB 10000:GOTO 2872
2871 GOSUB 11000
2872 CLS:LOCATE 10,1
2873 PRINT" 11"
2874 PRINT"x12"
2875 PRINT"---"
2876 INPUT A
2877 IF A=132 THEN GOSUB 10000:GOTO 2879
2878 GOSUB 11000
2879 HONK=11:CLS
2880 GOSUB 11010
2881 S=0:CLS:LOCATE 10,1
2882 PRINT" 12"
2883 PRINT" x1"
2884 PRINT"---"
2885 INPUT A
2886 IF A=12 THEN GOSUB 10000:GOTO 2888
2887 GOSUB 11000
2888 CLS:LOCATE 10,1
2889 PRINT" 12"
2890 PRINT" x2"
2891 PRINT"---"
2892 INPUT A
2893 IF A=24 THEN GOSUB 10000:GOTO 2895
2894 GOSUB 11000
2895 CLS:LOCATE 10,1
2896 PRINT" 12"
2897 PRINT" x3"
2898 PRINT"---"
2899 INPUT A
2900 IF A=36 THEN GOSUB 10000:GOTO 2902
2901 GOSUB 11000
2902 CLS:LOCATE 10,1
2903 PRINT" 12"
2904 PRINT" x4"
2905 PRINT"---"
2906 INPUT A
2907 IF A=48 THEN GOSUB 10000:GOTO 2909
2908 GOSUB 11000
2909 CLS:LOCATE 10,1
2910 PRINT" 12"
2911 PRINT" x5"
2912 PRINT"---"
2913 INPUT A
2914 IF A=60 THEN GOSUB 10000:GOTO 2916
2915 GOSUB 11000
2916 CLS:LOCATE 10,1
2917 PRINT" 12"
2918 PRINT" x6"
2919 PRINT"---"
2920 INPUT A
2921 IF A=72 THEN GOSUB 10000:GOTO 2923
2922 GOSUB 11000
2923 CLS:LOCATE 10,1
2924 PRINT" 12"
2925 PRINT" x7"
2926 PRINT"---"
2927 INPUT A
2928 IF A=84 THEN GOSUB 10000:GOTO 2930
2929 GOSUB 11000
2930 CLS:LOCATE 10,1
2931 PRINT" 12"
2932 PRINT" x8"
2933 PRINT"---"
2934 INPUT A
2935 IF A=96 THEN GOSUB 10000:GOTO 2937
2936 GOSUB 11000
2937 CLS:LOCATE 10,1
2938 PRINT" 12"
2939 PRINT" x9"
2940 PRINT"---"
2941 INPUT A
2942 IF A=108 THEN GOSUB 10000:GOTO 2944
2943 GOSUB 11000
2944 CLS:LOCATE 10,1
2945 PRINT" 12"
2946  PRINT"x10"
2947 PRINT"---"
2948 INPUT A
2949 IF A=120 THEN GOSUB 10000:GOTO 2951
2950 GOSUB 11000
2951 CLS:LOCATE 10,1
2952 PRINT" 12"
2953 PRINT"x11"
2954 PRINT"---"
2955 INPUT A
2956 IF A=132 THEN GOSUB 10000:GOTO 2958
2957 GOSUB 11000:GOTO 2958
2958 CLS:LOCATE 10,1
2959 PRINT" 12"
2960 PRINT"x12"
2961 PRINT"---"
2962 INPUT A
2963 IF A=144 THEN GOSUB 10000:GOTO 2965
2964 GOSUB 11000
2965 HONK=12:CLS
2966 GOSUB 11010
10000 S=S+1
10005 FOR X=1 TO 21
10010 COLOR X,X
10011 DRAW"u=x;u=x;r=x;r=x;d=x;d=x;d=x;l=x;l=x;l=x;l=x;"
10012 NEXT X
10015 LOCATE 5,14:PRINT"That's  it!"
10100 COLOR 0,1
10101 FOR X= 1 TO 1300:NEXT X:RETURN
11000 LINE(150,150)-(170,170)
11001 LINE(170,170)-(200,100)
11003 LOCATE 13,13:PRINT"Incorrect."
11009 FOR X=1 TO 800:NEXT X:RETURN
11010 CLS:LOCATE 2,5:PRINT"     Status Report"
11012 LOCATE 10,1
11013 PRINT"Your Score:";S;"
11014 PRINT"
11015 PRINT"Out of:12"
11016 FOR X=1 TO 2500:NEXT X
11017 CLS:LOCATE 5,10:S=0
11018 PRINT"Press enter to continue"
11019 PRINT"          with the program, or"
11020 PRINT"          esc to go to the menu."
11021 LINE(0,5)-(307,100),,B
11022 X$=INKEY$
11023 IF X$=CHR$(27)THEN 36667
11024 IF X$=CHR$(13)THEN 11030
11025 GOTO 11022
11030 IF HONK=1 THEN 850
11032 IF HONK=2 THEN 1457
11033 IF HONK=3 THEN 1872
11034 IF HONK=4 THEN 2144
11035 IF HONK=5 THEN 2307
11036 IF HONK=6 THEN 2440
11037 IF HONK=7 THEN 2535
11038 IF HONK=8 THEN 2622
11039 IF HONK=9 THEN 2708
11040 IF HONK=10 THEN 2795
11041 IF HONK=11 THEN 2881
11042 IF HONK=12 THEN 36667
30000 CLS:S=0:LOCATE 10,1:INPUT"How many questions would you like (1-30)";Q:IF 30<Q OR Q<1 THEN CLS:BEEP:GOTO 30000
30005 RANDOMIZE VAL(MID$(TIME$,4,2)+MID$(TIME$,7,2)):T=0
30010 E=INT(RND*(12+1)):IF Q=T THEN 36000
30015 G=INT(RND*(12+1))
30016 CLS:LOCATE 10,1
30017 IF LEN(STR$(G))>2 AND LEN(STR$(E))>2 THEN PRINT" ";
30020 IF LEN(STR$(E))<3 THEN PRINT" ";
30021 PRINT E
30022 PRINT"x";G
30023 PRINT"----"
30024 INPUT A
30025 IF A=E*G THEN GOSUB 35000
30026 T=T+1:GOSUB 11000:GOTO 30010
35000 GOSUB 10000:T=T+1:GOTO 30010
36000 CLS:LOCATE 1,10:PRINT"Quiz Results"
36001 LOCATE 2,10:PRINT"---- -------"
36002 LOCATE 7,1:PRINT"You got ";S;", out of ";T
36003 LOCATE 9,1:PRINT"That is ";INT((S/T*100)+0.5);"%"
36004 LOCATE 11,1:PRINT"On an `A,B,C,D,F' scale, that is a(n)"
36005 TUNDA=INT((S/T*100)+0.5):IF TUNDA<45 THEN PRINT"F":GOTO 36010
36006 IF TUNDA<70 THEN PRINT"D":GOTO 36010
36007 IF TUNDA<80 THEN PRINT"C":GOTO 36010
36008 IF TUNDA<90 THEN PRINT"B":GOTO 36010
36009 IF TUNDA<101 THEN PRINT"A, Good Job!":GOTO 36010
36010 LOCATE 20,1:PRINT"     <Press enter to continue>":X$=INKEY$
36011 IF X$=CHR$(13) THEN 36667
36012 GOTO 36010
36667 CLS
36668 PRINT"      Multi Menu "
36669 PRINT"      ----------"
36670 LOCATE 7,1
36671 PRINT"1)Multitime"
36672 LOCATE 10,1
36673 PRINT"2)Quiz"
36674 LOCATE 13,1
36675 PRINT"3)Further options"
36678 LOCATE 16,1
36679 PRINT"4)Main menu"
36680 PRINT"
36681 PRINT"
36682 PRINT"
36683 PRINT"
36684 PRINT"
36685 PRINT"
36686 X$=INKEY$
36688 IF X$="1" THEN 125
36689 IF X$="2" THEN 30000
36690 IF X$="3" THEN 36703 ELSE IF X$="4" THEN RUN"menu2
36691 GOTO 36686
36692 IF A=5 THEN 2132
36693 IF A=6 THEN 2295
36694 IF A=7 THEN 2440
36695 IF A=8 THEN 2535
36696 IF A=9 THEN 2622
36697 IF A=10 THEN 2708
36698 IF A=11 THEN 2795
36699 IF A=12 THEN 2881
36701 INPUT A$
36702 IF A$="q" THEN 30000
36703 CLS
36704 PRINT"    Further Options"
36705 PRINT"    ---------------"
36706 LOCATE 7,1
36708 PRINT"1) start at the 1's     "
36709 PRINT"2) start at the 2's "
36710 PRINT"3) start at the 3's "
36711 PRINT"4) start at the 4's"
36712 PRINT"5) start at the 5's"
36713 PRINT"6) start at the 6's"
36714 PRINT"7) start at the 7's"
36715 PRINT"8) start at the 8's"
36716 PRINT"9) start at the 9's"
36717 PRINT"10) start at the 10's"
36718 PRINT"11) start at the 11's"
36719 PRINT"12) start at the 12's"
36720 PRINT"13) return to main menu"
36721 PRINT"14) return to the Multi Menu":PRINT:INPUT"What is your choice";A
36723 IF A=1 THEN 125
36724 IF A=2 THEN 850
36725 IF A=3 THEN 1457
36726 IF A=4 THEN 1872
36727 IF A=5 THEN 2144
36728 IF A=6 THEN 2307
36729 IF A=7 THEN 2440
36730 IF A=8 THEN 2535
36731 IF A=9 THEN 2622
36732 IF A=10 THEN 2708
36733 IF A=11 THEN 2795
36734 IF A=12 THEN 2881
36735 IF A=13 THEN RUN"menu2
36736 IF A=14 THEN 36667
36737 BEEP:GOTO 36703
50000 RUN"error
```
{% endraw %}

## NOTES664.TXT

{% raw %}
```
Program name: Atlas Software Package
 
Author name:  Atlas Software
Address:      P.O. Box 1638
              Temple City, CA 91780
 
Tel number:   Not listed
 
Suggested donation: $5.00
 
------------------------------------------------------------------------------
 
Program name: STAR
 
Author name:  Alan Farmer
Address:      2743 McElroy Drive
              Charlottesville, Va  22903
 
Tel number:   Not listed
 
Suggested donation: $5.00
 
------------------------------------------------------------------------------
 
Program name: The Register
 
Author name:  Denis L. Latkowski
Address:      417 Tantallion Court
              Baltimore, Maryland  21212
 
Tel number:   301-435-1544
 
Suggested donation: $45.00 - includes registration and update information.
 
------------------------------------------------------------------------------
 
Program descriptions:
 
This diskette contains a multitude of educational software for both the
teacher's aid and also for the student's benefit.  The following is a
short description of each program contained on this disk.  Please note
that some programs do require a color monitor.  Each program was found
to be very well written and easy use.
 
 
GRADE.COM:
This program is the demo version of the Register package.  Please note
that the demo version is fully functional, but the registered version
contains many extended features.
 
Written by a teacher for teachers and tested in the classroom.  The
program is primarily intended for junior and senior high school
teachers; however, college teachers can find it useful also.  These
instructors do not have to worry about the concept of working in
"quarters," nor will they be likely to use the progress reports; but the
computational parts of the program will prove useful.  In this program,
grades are entered in a structured format and teachers can keep track of
each student's marks via a database of students' scores.  Reports can be
generated and modifications of the database are available.  Register
contains a well written documentation file about 40k.
 
Requirements for Register: PC/XT or true compatible (untested on AT),
DOS 2.xx or higher, 1 DSDD drive, 128 K, mono or color graphic card, RGB
monitor recommended, printer (dot matrix recommended).
 
 
STAR.BAS
is a program which maps the night sky as seen from any point on
earth at any time.  This program would be much improved if you use IBM's
Basic Compiler, but I don't have it myself.
 
STAR.DAT
is a database of about 200 star locations and magnitudes used
by STAR.BAS.
 
 
MENU.BAS
is a program which will bring the user into three wonderfully
written educational programs, Name That Planet, Multitime, and
Historomania.  Written by Atlas Software, these programs each contain
color graphics and fine computer-student interaction.  In Name That
Planet, each planet in our solar system is displayed on the screen in
color and graphics and the student is to name the planet.  Planet
relative size and placement are displayed as hints.  Historomania is a
history trivia quiz program with different levels of difficulty.
Lastly, Multitime will drill students on multiplication factors.  Each
program can be run from the master menu which selects each from a nice
graphic image of the atlas; this program has color, graphics and sound.
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1986
```
{% endraw %}

## NTP.BAS

{% raw %}
```bas
1 SCREEN 1:ON ERROR GOTO 50000
19 CLS
20 COLOR 0,2
21 LOCATE 3,1:PRINT"          NAME  THAT  PLANET!":PRINT"          -------------------":PRINT:PRINT"(C) 1985-86 Atlas Software":PRINT:PRINT:PRINT:PRINT
41 LOCATE 10,1:PRINT"  Welcome to Atlas' Name That Planet!":PRINT:
42 PRINT"  Soon you will be having fun, while    learning the planets by a description   followed by a picture.":PRINT:
43 PRINT"  The planets are pictured in green,the rings, if any, are brown and the moons  are red(remember, there are some moons  behind the planet, so don't judge by thenumber of moons!).
49 PRINT:PRINT"  The computer picks the planets at     random, so the program is different     every time."
50 C=3:RANDOMIZE VAL(MID$(TIME$,4,2)+MID$(TIME$,7,2))
52 LOCATE 23,14:PRINT"Press any key to begin."
53 X$=INKEY$:IF X$="" THEN 53
59 CLS:GOTO 90
80 LOCATE 13,1:PRINT"Press enter to continue, or <Esc> to"
81 PRINT"quit."
82 Y$=INKEY$
83 IF Y$=CHR$(13) THEN 90
84 IF Y$=CHR$(27) THEN 85 ELSE 82
85 IF T=0 THEN GOTO 30000 ELSE GOTO 2000
90 N=INT(RND*(8+1)):T=T+1
91 IF N=0 THEN 100
92 IF N=1 THEN 200
93 IF N=2 THEN 300
94 IF N=3 THEN 400
95 IF N=4 THEN 500
96 IF N=5 THEN 600
97 IF N=6 THEN 700
98 IF N=7 THEN 800
99 IF N=8 THEN 900
100 CLS
105 COLOR 0,3,0
110 LOCATE 1,1:PRINT"This is the largest planet.  It is the  5th planet from the sun."
115 CIRCLE (215,120),9,2:CIRCLE (122,118),3,2:CIRCLE(90,121),7,2
116 CIRCLE (144,100),88,1:PAINT (90,121),2,2:PAINT(215,120),2,2:PAINT(122,118),2,2
117 CIRCLE (188,114),6,2:CIRCLE (55,122),5,2
118 CIRCLE (166,109),4,2:CIRCLE (245,100),4,2:PAINT(166,109),2,2:PAINT(245,100),2,2:PAINT(188,114),2,2
119 CIRCLE (144,116),5,2:CIRCLE (104,111),5,2:PAINT(144,116),2,2:PAINT(104,111),2,2:PAINT(55,122),2,2
120 CIRCLE (144,100),120,,,,5/18
121 LOCATE 9,11:PRINT"                 ":LOCATE 10,9:PRINT"                    "
122 LOCATE 23,1:PRINT"Name that planet."
123 KEY 9,"run 43-"+CHR$(13)
125 INPUT P$
130 IF P$="Jupiter" OR P$="JUPITER" OR P$="jupiter" THEN 190 ELSE 135
135 CLS:PRINT"I'm sorry, the correct answer is        `Jupiter'."
136 FOR X=1 TO 3000:NEXT X:GOTO 80
137 GOTO 2000
190 CLS:PRINT"You got it!"
195 S=S+1
199 FOR X=1 TO 1200:NEXT X:GOTO 80
200 CLS:COLOR 0,3,0
201 LOCATE 1,1:PRINT"This is the 6th planet from the sun.    It is the 2nd largest planet."
203 CIRCLE (144,100),75,1:CIRCLE (55,110),13,2:CIRCLE (128,100),6,2:CIRCLE (166,111),6,2:CIRCLE (200,123),3,2:CIRCLE (240,90),6,2
204 PAINT(55,110),2,2:PAINT(200,123),2,2:PAINT(240,90),2,2:PAINT(128,100),2,2:PAINT(166,111),2,2
205 CIRCLE (144,100),123,,,,5/18:CIRCLE (144,100),122,,,,5/18:CIRCLE (144,100),121,,,,5/18
206 CIRCLE (144,100),126,,,,5/18:CIRCLE (144,100),125,,,,5/18:CIRCLE (144,100),124,,,,5/18
207 CIRCLE (144,100),132,,,,5/18:CIRCLE (144,100),131,,,,5/18:CIRCLE (144,100),130,,,,5/18
208 CIRCLE (144,100),129,,,,5/18:CIRCLE (144,100),128,,,,5/18:CIRCLE (144,100),127,,,,5/18:
209 CIRCLE (144,100),138,,,,5/18:CIRCLE (144,100),139,,,,5/18:CIRCLE (144,100),140,,,,5/18
210 LOCATE 9,11:PRINT"                ":LOCATE 8,10:PRINT"                 "
211 CIRCLE(144,100),75,1
212 LOCATE 23,1:PRINT"Name that planet."
213 INPUT P$:IF P$="Saturn" OR P$="saturn" OR P$="SATURN" THEN 250
214 CLS
215 LOCATE 1,1:PRINT"I'm sorry, the correct answer is "
216 PRINT"`Saturn'."
217 FOR X=1 TO 2000:NEXT X:GOTO 80
250 CLS:LOCATE 1,1:PRINT"You got it!"
255 S=S+1:FOR X=1 TO 1000:NEXT X:GOTO 80
300 CLS:COLOR 0,3,0:LOCATE 1,1
302 PRINT"This is the 5th largest planet.  It is  the 3rd planet from the sun."
304 CIRCLE (144,100),60,1:CIRCLE (60,111),9,2:PAINT(60,111),2,2
305 LOCATE 23,1:PRINT"Name that planet."
307 INPUT P$:IF P$="Earth" OR P$="EARTH" OR P$="earth" OR P$="terra" OR P$="TERRA" OR P$="Terra" THEN 350
310 CLS:LOCATE 1,1:PRINT"I'm sorry, the correct answer is        `Earth'."
311 FOR X=1 TO 3000:NEXT X:GOTO 80
350 CLS:LOCATE 1,1:PRINT"You got it!"
355 S=S+1
360 FOR X=1 TO 1000:NEXT X:GOTO 80
400 CLS:COLOR 0,3,0:LOCATE 1,1:PRINT"This is the farthest planet from the    sun.  It is the 2nd smallest planet."
402 CIRCLE (144,100),40,1
404 LOCATE 23,1:PRINT"Name that planet."
406 INPUT P$
408 IF P$="pluto" OR P$="PLUTO" OR P$="Pluto" THEN 450
410 CLS:LOCATE 1,1:PRINT"I'm sorry, the correct answer is        `Pluto'."
420 FOR X=1 TO 3000:NEXT X:GOTO 80
450 CLS:LOCATE 1,1:PRINT"You got it!":S=S+1:FOR X=1 TO 1000:NEXT X:GOTO 80
500 CLS:COLOR 0,3,0:LOCATE 1,1:PRINT"This is the closest planet to the sun.  It is the smallest planet."
505 CIRCLE (144,100),30,1
510 LOCATE 23,1:PRINT"Name that planet."
511 INPUT P$
512 IF P$="mercury" OR P$="Mercury" OR P$="MERCURY" THEN 550
514 CLS:LOCATE 1,1:PRINT"I'm sorry, the correct answer is        `Mercury'.":FOR X=1 TO 3000:NEXT X:GOTO 80
550 S=S+1:CLS:LOCATE 1,1:PRINT"You got it!":FOR X=1 TO 1000:NEXT X:GOTO 80
600 CLS:COLOR 0,3,0:LOCATE 1,1:PRINT"This is the 2nd planet from the sun.    It is the 6th largest planet."
601 CIRCLE (144,100),60,1
603 LOCATE 23,1:PRINT"Name that planet."
605 INPUT P$:IF P$="Venus" OR P$="VENUS" OR P$="venus" THEN 650
610 CLS:LOCATE 1,1:PRINT"I'm sorry, the correct answer is"
612 PRINT"`Venus'."
613 FOR X=1 TO 2000:NEXT X:GOTO 80
650 CLS:LOCATE 1,1:PRINT"You got it!"
655 S=S+1:FOR X=1 TO 1000:NEXT X:GOTO 80
700 CLS:COLOR 0,3,0:LOCATE 1,1:PRINT"This is the 4th planet from the sun, it is the 3rd smallest planet."
701 CIRCLE (144,100),40,1:CIRCLE (122,111),4,2:CIRCLE (215,122),5,2
702 PAINT(122,111),2,2:PAINT(215,122),2,2
703 LOCATE 23,1:PRINT"Name that planet."
704 INPUT P$:IF P$="mars" OR P$="Mars" OR P$="MARS" THEN 750
710 CLS:LOCATE 1,1:PRINT"I'm sorry, the correct answer is        `Mars'."
711 FOR X=1 TO 3000:NEXT X:GOTO 80
750 CLS:LOCATE 1,1:PRINT"You got it!":S=S+1
755 FOR X=1 TO 1000:NEXT X:GOTO 80
800 CLS:COLOR 0,3,0:LOCATE 1,1:PRINT"This is the 8th planet from the sun.  Itis the 4th largest planet."
801 CIRCLE (144,100),73,1:CIRCLE (122,111),6,2:CIRCLE (177,121),5,2:PAINT(122,111),2,2:PAINT(177,121),2,2
802 LOCATE 23,1:PRINT"Name that planet."
803 INPUT P$:IF P$="Neptune" OR P$="NEPTUNE" OR P$="neptune" THEN 850
804 CLS:LOCATE 1,1:PRINT"I'm sorry, this is the planet           `Neptune'."
805 FOR X=1 TO 3000:NEXT X:GOTO 80
850 CLS:S=S+1:LOCATE 1,1:PRINT"You got it!":FOR X=1 TO 1000:NEXT X :GOTO 80
900 COLOR 0,3,0:CLS
901 CIRCLE(144,100),76,1:LOCATE 1,1:PRINT"This is the 7th planet from the sun.  Itis the 3rd largest planet."
902 CIRCLE (144,100),76,1:CIRCLE (95,99),6,2:CIRCLE (149,104),5,2:CIRCLE (177,100),6,2
903 PAINT(95,99),2,2:PAINT(149,104),2,2:PAINT(177,100),2,2
904 CIRCLE (228,110),7,2:CIRCLE (188,107),6,2:PAINT(228,110),2,2:PAINT(188,107),2,2
905 FOR X=90 TO 99:CIRCLE(144,100),X,,,,3/1:NEXT X
906 LOCATE 9,15:PRINT"  ":LOCATE 11,14:PRINT"  ":LOCATE 10,15:PRINT"  ":LOCATE 7,15:PRINT"  ":LOCATE 12,14:PRINT"  ":LOCATE 13,14:PRINT"  ":LOCATE 14,14:PRINT"  ":LOCATE 15,14:PRINT"  ":
907 CIRCLE(144,100),76,1:LOCATE 1,1:PRINT"This is the 7th planet from the sun.  Itis the 3rd largest planet."
908 LOCATE 23,1:PRINT"Name that planet.":LOCATE 16,15:PRINT"  ":LOCATE 17,15:PRINT"  ":LOCATE 18,15:PRINT"  ":LOCATE 19,15:PRINT"  ":LOCATE 20,15:PRINT"  ":LOCATE 6,15:PRINT"  ":LOCATE 8,15:PRINT"  ":LOCATE 24,1:CIRCLE (144,100),76,1
909 INPUT P$:IF P$="uranus" OR P$="Uranus" OR P$="URANUS" THEN 950
910 CLS:LOCATE 1,1:PRINT"I'm sorry, the correct answer is        `Uranus'."
920 FOR X=1 TO 3000:NEXT X:GOTO 80
950 CLS:LOCATE 1,1:PRINT"You got it!":S=S+1
960 FOR X=1 TO 1000:NEXT X:GOTO 80
2000 CLS
2005 LOCATE 5,1:PRINT"You named ";S;" planet(s) correct, out"
2006 PRINT"of ";T;"."
2007 PCNT=INT(S/T*100)
2008 LOCATE 6,10:PRINT"That is ";PCNT;"%."
2009 LOCATE 13,1:PRINT"Do you want to play again?"
2010 X$=INKEY$:IF X$="Y" OR X$="y" THEN 2020
2015 IF X$="N" OR X$="n" THEN 2025 ELSE 2010
2020 RUN
2025 RUN"MENU2
30000 PRINT"Oh oh, this is an error"
50000 RUN"error
55555 CLS:FOR V=0 TO 7:FOR H=0 TO 90:PSET (H,V):NEXT H:NEXT V
55556 PRINT"You got it! "
55557 FOR V=7 TO 0 STEP -1:FOR H=90 TO 0 STEP -1:PRESET (H,V):NEXT H:NEXT V
```
{% endraw %}

## STAR.BAS

{% raw %}
```bas
10 DEF FNHM(X)=SGN(X)*(INT(ABS(X)/100)+(ABS(X) MOD 100)/60)
20 DIM RA(600),DEC(600),MAG(600),ED(12)
30 PI=3.14159:RADIAN=PI/180
40 GOSUB 870
50 SCREEN 0:WIDTH 80:COLOR 7,0,0:CLS
60 PRINT"1.  Map any area of the sky"
70 PRINT"2.  Generate star map for any date"
80 PRINT"3.  Quit"
90 INPUT"Your choice";YC
100 IF YC<>1 AND YC<>2 AND YC<>3 THEN 90
110 IF YC=3 THEN CLS:END
120 PRINT
130 IF YC=2 THEN 260
140 INPUT"Enter RA of the field center in format HHMM";RA0
150 RA0=FNHM(RA0)
160 INPUT"Enter DEC of the field center in format DDMM";DEC0
170 DEC0=FNHM(DEC0)
180 INPUT"Enter field width in degrees";WID
190 INPUT"Mark the above RA and DEC";MAR$
200 MAR$=LEFT$(MAR$,1):MAR=(MAR$="Y" OR MAR$="y")
210 INPUT"Do you want a line around the map";LIN$
220 LIN$=LEFT$(LIN$,1):LIN=(LIN$="Y" OR LIN$="y")
230 INPUT"Do you want BEEPs for stars";BP$
240 BP$=LEFT$(BP$,1):BP=(BP$="Y" OR BP$="y")
250 CIR=0:GOSUB 510:GOTO 50
260 INPUT"Enter latitude in format DDMM (- for south, + for north)";LAT
270 LAT=FNHM(LAT)
280 INPUT"Enter longitude in format DDMM (- for west, + for east)";LONG
290 EW=SGN(LONG):LONG=ABS(LONG):LD=INT(LONG/100):LM=LONG MOD 100
300 INPUT"Enter date in format MM-DD-YY";DAT$
310 MM=VAL(MID$(DAT$,1,2)):DD=VAL(MID$(DAT$,4,2)):YY=VAL(MID$(DAT$,7,2))
320 INPUT"Enter time in format HHMM ZONE";TIM$
330 H=VAL(LEFT$(TIM$,2)):M=VAL(MID$(TIM$,3,2)):Z$=MID$(TIM$,6)
340 FOR CPS=1 TO LEN(Z$):IF MID$(Z$,CPS,1)>="a" AND MID$(Z$,CPS,1)<="z" THEN MID$(Z$,CPS,1)=CHR$(ASC(MID$(Z$,CPS,1))-32)
350 NEXT CPS
355 PRINT Z$:STOP
360 G=0:IF Z$="UT" OR Z$="GMT" THEN 390
370 A$=MID$(Z$,1,1):IF A$="E" THEN G=G+5 ELSE IF A$="C" THEN G=G+6 ELSE IF A$="M" THEN G=G+7 ELSE IF A$="P" THEN G=G+8
380 IF MID$(Z$,2,1)="D" THEN G=G-1
390 LC=240*LD+4*LM:SG=ED(MM)
400 SD=SG+EW*LC:IF SD<0 THEN SD=SD+86400!
410 SL=SD-EW*G*3600+G*9.856459:IF SL<0 THEN SL=SL+86400!
420 DA=DD*236.555
430 HA=H*3600+H*9.856459
440 MA=M*60+M*.164274
450 SD=(SL+DA+HA+MA+.5)/3600
460 IF SD>24 THEN SD=SD-24:GOTO 460
470 INPUT"Do you want BEEPs for stars";BP$
480 BP$=LEFT$(BP$,1):BP=(BP$="Y" OR BP$="y")
490 RA0=SD:DEC0=LAT:LIN=0:MAR=0:WID=230
500 CIR=-1:GOSUB 510:GOTO 50
510 'Star plot routine
520 INPUT"High or Low resolution";RES$
530 IF LEFT$(RES$,1)="H" THEN SCR=2:SX=640:SY=200:YHT=.38 ELSE SCR=1:SX=320:SY=200:YHT=.76
540 CENTX=SX/2:CENTY=SY/2
550 R=SX*53/WID:LAM0=.261845*RA0:PHI0=DEC0*RADIAN
560 CLS:SCREEN SCR:KEY OFF
570 IF LIN THEN LINE(0,0)-(SX-1,SY-1),,B
580 IF MAR THEN CIRCLE(CENTX,CENTY),SCR+1
590 IF CIR THEN CIRCLE(CENTX,CENTY),119*SCR
600 FOR J%=0 TO NUM%-1
610 '-------Plot each star here------
620 PHI=DEC(J%):MAG=MAG(J%):DLAM=RA(J%)-LAM0
630 A=SIN(PHI0):B=COS(PHI0)
640 C=SIN(PHI):D=COS(PHI)
650 E=SIN(DLAM):F=COS(DLAM)
660 K0=2/(1+A*C+B*D*F)
670 X=R*K0*D*E:Y=R*K0*(B*C-A*D*F)
680 X=CENTX-X:Y=CENTY-YHT*Y
690 IF X>SX OR X<0 THEN 780
700 IF Y<0 OR Y>SY THEN 780
710 PSET(X,Y)
720 IF MAG<=3 THEN PSET(X+1,Y)
730 IF MAG<=2.33 THEN PSET(X+1,Y-1):PSET(X+2,Y):PSET(X+1,Y+1)
740 IF MAG<=1.66 THEN PSET(X+2,Y-1):PSET(X+3,Y):PSET(X+2,Y+1)
750 IF MAG<=1 THEN PSET(X+3,Y-1):PSET(X+4,Y):PSET(X+3,Y+1):PSET(X+2,Y-2):PSET(X+2,Y+2)
760 IF MAG>5 THEN MAG=5
770 IF BP THEN SOUND(512-64*MAG),1
780 K$=INKEY$:IF K$=CHR$(27) THEN 800
790 NEXT J%
800 BEEP:BEEP
810 IF CIR THEN LINE(0,0)-(SX,0),0:PAINT(0,0),5-2*SCR,5-2*SCR:PAINT(0,0),0,0:LOCATE 1,1:PRINT DAT$:PRINT TIM$
820 IF CIR THEN PRINT:PRINT"N":PRINT"│":PRINT"┼─ W"
830 IF CIR THEN CIRCLE(CENTX,CENTY),119*SCR
840 K$=INPUT$(1)
850 IF K$=CHR$(27) THEN END
860 RETURN
870 '-------Load star array-------
880 CLS:COLOR 15
890 PRINT"                               Star --- Ver. 1.0"
900 PRINT"                           by Alan Farmer, July 1985"
910 PRINT
920 PRINT"          This is a user-supported program.   Feel free to make copies"
930 PRINT"          and pass them out, but  please  do not sell them.  Donations"
940 PRINT"          of about $5 would be greatly appreciated.   Please send your"
950 PRINT"          questions,  comments,  criticisms,  improved star data,  and"
960 PRINT"          DONATIONS to:"
970 PRINT
980 PRINT"                           Alan Farmer"
990 PRINT"                           2743 McElroy Drive"
1000 PRINT"                           Charlottesville, Va  22903"
1010 FOR I=1 TO 12:READ A,B,C:ED(I)=3600*A+60*B+C-236.555
1020 IF ED(I)=<0 THEN ED(I)=ED(I)+86400!
1030 NEXT I
1040 DATA 6,39,23,8,41,36,10,35,56,12,38,9,14,36,26,16,38,39
1050 DATA 18,36,56,20,39,9,22,41,22,0,39,39,2,41,52,4,40,9
1060 OPEN "star.dat" FOR INPUT AS #1:K%=0
1070 IF EOF(1) THEN CLOSE:NUM%=K%-1:ARLD=-1:BEEP:BEEP:RETURN
1080 INPUT #1,N$
1090 IF LEFT$(N$,1)="*" THEN 1070
1100 RA=VAL(LEFT$(N$,2))+VAL(MID$(N$,3,2))/60
1110 DSGN$=MID$(N$,6,1):IF DSGN$="-" THEN DSGN=-1 ELSE DSGN=1
1120 DEC=VAL(MID$(N$,7,2))+VAL(MID$(N$,9,2))/60
1130 DEC=DSGN*DEC:MAG=VAL(MID$(N$,12))
1140 RA(K%)=.2618*RA:DEC(K%)=DEC*RADIAN:MAG(K%)=MAG
1150 K%=K%+1:GOTO 1070
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0664

     Volume in drive A has no label
     Directory of A:\

    ATLAS    BAS     16391   1-01-80  12:30a
    ATLASARM BAS     16384   1-01-80  12:29a
    ERROR    BAS       664   1-01-80  12:14a
    FILES664 TXT      1948   5-11-87   2:50p
    FLOPPY   BAT       749   1-15-87   8:41a
    GO       BAT       808  12-29-86   8:23a
    GRADE    000     15360   1-25-87   9:22a
    GRADE    COM     54633   3-24-87   4:05p
    GRADES   111      1540   1-25-87   6:43a
    HARD     BAT      1217   1-15-87   8:35a
    HQ       BAS     20353   1-01-80   1:43a
    INSTALL  COM     19912   1-24-87   5:03p
    MANUAL   DOC     58511   3-24-87   3:51p
    MENU     BAS      1393   1-01-80  12:15a
    MENU2    BAS       360   1-01-80   1:45a
    MULTID   BAS     25142   1-01-80  12:33a
    NAMES    11       1580   1-25-87   6:43a
    NOTES664 TXT      3522  12-29-86   8:28a
    NTP      BAS      6329   1-01-80   1:42a
    READ     ME       5263   3-24-87   3:52p
    READSTAR ME        696  12-23-86  12:38p
    REGISTER           973   1-25-87   6:54a
    SAMPLES  DOC     12952   1-15-87   7:56a
    STAR     BAS      4986   8-16-85   5:02p
    STAR     DAT      5513   7-15-85   9:57a
           25 file(s)     277179 bytes
                           33792 bytes free
